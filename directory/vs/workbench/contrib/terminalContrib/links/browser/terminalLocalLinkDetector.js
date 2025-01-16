define(
			de[3161],
			he([1, 0, 12, 9, 68, 25, 513, 562, 189, 997, 117]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$lWc = void 0);
				var a;
				(function (n) {
					(n[(n.MaxLineLength = 2e3)] = "MaxLineLength"),
						(n[(n.MaxResolvedLinksInLine = 10)] = "MaxResolvedLinksInLine"),
						(n[(n.MaxResolvedLinkLength = 1024)] = "MaxResolvedLinkLength");
				})(a || (a = {}));
				const h = [
					/^ *File (?<link>"(?<path>.+)"(, line (?<line>\d+))?)/,
					/^ +FILE +(?<link>(?<path>.+)(?::(?<line>\d+)(?::(?<col>\d+))?)?)/,
					/^(?<link>(?<path>.+)\((?<line>\d+)(?:, ?(?<col>\d+))?\)) ?:/,
					/^(?<link>(?<path>.+):(?<line>\d+)(?::(?<col>\d+))?) ?:/,
					/^(?<link>(?<path>.+))>/,
					/^ *(?<link>(?<path>.+))/,
				];
				let c = class {
					static {
						this.id = "local";
					}
					constructor(g, p, o, f, b, s, l) {
						(this.xterm = g),
							(this.a = p),
							(this.b = o),
							(this.c = f),
							(this.d = b),
							(this.e = s),
							(this.f = l),
							(this.maxLinkLength = 500);
					}
					async detect(g, p, o, f = !1) {
						const b = [],
							s = (0, d.$_Vc)(
								this.xterm.buffer.active,
								p,
								o,
								this.xterm.cols,
								!1,
							);
						if (s === "" || (!f && s.length > a.MaxLineLength)) return [];
						let l = -1,
							y = 0;
						const $ = this.b.os || t.OS,
							v = (0, r.$Boc)(s, $);
						this.d.trace("terminalLocalLinkDetector#detect text", s),
							this.d.trace("terminalLocalLinkDetector#detect parsedLinks", v);
						for (const S of v) {
							if (!f && S.path.text.length > a.MaxResolvedLinkLength) continue;
							const I = (0, d.$0Vc)(
									g,
									this.xterm.cols,
									{
										startColumn: (S.prefix?.index ?? S.path.index) + 1,
										startLineNumber: 1,
										endColumn:
											S.path.index +
											S.path.text.length +
											(S.suffix?.suffix.text.length ?? 0) +
											1,
										endLineNumber: 1,
									},
									p,
								),
								T = [],
								P = (0, d.$cWc)($),
								k = S.path.text.startsWith("file://");
							if (P.isAbsolute(S.path.text) || S.path.text.startsWith("~") || k)
								T.push(S.path.text);
							else {
								if (this.a.has(m.TerminalCapability.CommandDetection)) {
									const A = (0, d.$bWc)(
										this.a,
										I.start.y,
										S.path.text,
										P,
										this.d,
									);
									A && T.push(...A);
								}
								T.length === 0 &&
									(T.push(S.path.text),
									S.path.text.match(/^(\.\.[\/\\])+/) &&
										T.push(S.path.text.replace(/^(\.\.[\/\\])+/, "")));
							}
							const L = /[\[\]"'\.]$/,
								D = new Map(),
								M = [];
							for (const A of T) {
								let R = A,
									O = R.replace(L, ""),
									B = 0;
								for (; O !== R; )
									S.suffix || B++,
										M.push(O),
										D.set(O, B),
										(R = O),
										(O = O.replace(L, ""));
							}
							T.push(...M),
								this.d.trace(
									"terminalLocalLinkDetector#detect linkCandidates",
									T,
								);
							const N = await this.j(void 0, I, T, D);
							if (
								(N &&
									((N.parsedLink = S),
									(N.text = s.substring(
										S.prefix?.index ?? S.path.index,
										S.suffix
											? S.suffix.suffix.index + S.suffix.suffix.text.length
											: S.path.index + S.path.text.length,
									)),
									this.d.trace(
										"terminalLocalLinkDetector#detect verified link",
										N,
									),
									b.push(N)),
								!f && ++y >= a.MaxResolvedLinksInLine)
							)
								break;
						}
						if (b.length === 0)
							for (const S of h) {
								const T = s.match(S)?.groups;
								if (!T) continue;
								const P = T?.link,
									k = T?.path,
									L = T?.line,
									D = T?.col;
								if (!P || !k || (!f && P.length > a.MaxResolvedLinkLength))
									continue;
								l = s.indexOf(P);
								const M = (0, d.$0Vc)(
										g,
										this.xterm.cols,
										{
											startColumn: l + 1,
											startLineNumber: 1,
											endColumn: l + P.length + 1,
											endLineNumber: 1,
										},
										p,
									),
									N = L ? `:${L}${D ? `:${D}` : ""}` : "",
									A = await this.j(`${k}${N}`, M, [k]);
								A && b.push(A);
								break;
							}
						if (b.length === 0) {
							const S = (0, d.$aWc)(
								this.xterm.buffer.active,
								p,
								o,
								this.xterm.cols,
							);
							for (const I of S) {
								let T = "";
								for (let k = I.start.y; k <= I.end.y; k++) {
									const L = this.xterm.buffer.active.getLine(k);
									if (!L) break;
									const D = k === I.start.y ? I.start.x : 0,
										M = k === I.end.y ? I.end.x : this.xterm.cols - 1;
									T += L.translateToString(!1, D, M);
								}
								I.start.x++, I.start.y++, I.end.y++;
								const P = await this.j(T, I, [T]);
								if ((P && b.push(P), !f && ++y >= a.MaxResolvedLinksInLine))
									break;
							}
						}
						return b;
					}
					g(g) {
						const p = this.f.getWorkspace().folders;
						for (let o = 0; o < p.length; o++)
							if (this.e.extUri.isEqualOrParent(g, p[o].uri)) return !0;
						return !1;
					}
					async h(g) {
						for (const p of g) {
							let o;
							p.startsWith("file://") && (o = i.URI.parse(p));
							const f = await this.c.resolveLink(this.b, p, o);
							if (f) return f;
						}
					}
					async j(g, p, o, f) {
						const b = await this.h(o);
						if (b) {
							let s;
							b.isDirectory
								? this.g(b.uri)
									? (s = C.TerminalBuiltinLinkType.LocalFolderInWorkspace)
									: (s = C.TerminalBuiltinLinkType.LocalFolderOutsideWorkspace)
								: (s = C.TerminalBuiltinLinkType.LocalFile);
							const l = f?.get(b.link);
							return (
								l &&
									((p.end.x -= l),
									p.end.x < 0 && (p.end.y--, (p.end.x += this.xterm.cols))),
								{ text: g ?? b.link, uri: b.uri, bufferRange: p, type: s }
							);
						}
					}
				};
				(e.$lWc = c),
					(e.$lWc = c = Ne([j(4, u.$YJ), j(5, w.$Vl), j(6, E.$Vi)], c));
			},
		),
		
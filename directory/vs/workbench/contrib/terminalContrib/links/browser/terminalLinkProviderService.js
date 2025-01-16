define(de[3159], he([1, 0, 6]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$rWc = void 0);
			class i {
				constructor() {
					(this.a = new Set()), (this.b = new t.$re()), (this.c = new t.$re());
				}
				get linkProviders() {
					return this.a;
				}
				get onDidAddLinkProvider() {
					return this.b.event;
				}
				get onDidRemoveLinkProvider() {
					return this.c.event;
				}
				registerLinkProvider(E) {
					const C = [];
					return (
						this.a.add(E),
						this.b.fire(E),
						{
							dispose: () => {
								for (const d of C) d.dispose();
								this.a.delete(E), this.c.fire(E);
							},
						}
					);
				}
			}
			e.$rWc = i;
		}),
		define(
			de[3160],
			he([1, 0, 997, 9, 23, 12, 22, 54, 75]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$tWc = void 0);
				let r = class {
					constructor(c) {
						(this.b = c), (this.a = new Map());
					}
					async resolveLink(c, n, g) {
						g &&
							g.scheme === w.Schemas.file &&
							c.remoteAuthority &&
							(g = g.with({
								scheme: w.Schemas.vscodeRemote,
								authority: c.remoteAuthority,
							}));
						let p = this.a.get(c.remoteAuthority ?? "");
						p || ((p = new a()), this.a.set(c.remoteAuthority ?? "", p));
						const o = p.get(g || n);
						if (o !== void 0) return o;
						if (g)
							try {
								const b = await this.b.stat(g),
									s = { uri: g, link: n, isDirectory: b.isDirectory };
								return p.set(g, s), s;
							} catch {
								return p.set(g, null), null;
							}
						let f = (0, t.$woc)(n);
						if (((f = (0, t.$xoc)(f)), f.length === 0))
							return p.set(n, null), null;
						if (E.$l && n.match(/^\/mnt\/[a-z]/i) && c.backend)
							f = await c.backend.getWslPath(f, "unix-to-win");
						else if (
							!(E.$l && n.match(/^(?:\/\/|\\\\)wsl(?:\$|\.localhost)(\/|\\)/))
						) {
							const b = this.c(f, c.initialCwd, c.os, c.userHome);
							if (!b) return p.set(n, null), null;
							f = b;
						}
						try {
							let b;
							c.remoteAuthority
								? (b = i.URI.from({
										scheme: w.Schemas.vscodeRemote,
										authority: c.remoteAuthority,
										path: f,
									}))
								: (b = i.URI.file(f));
							try {
								const s = await this.b.stat(b),
									l = { uri: b, link: n, isDirectory: s.isDirectory };
								return p.set(n, l), l;
							} catch {
								return p.set(n, null), null;
							}
						} catch {
							return p.set(n, null), null;
						}
					}
					c(c, n, g, p) {
						const o = this.d(g);
						if (c.charAt(0) === "~") {
							if (!p) return null;
							c = o.join(p, c.substring(1));
						} else if (c.charAt(0) !== "/" && c.charAt(0) !== "~")
							if (g === E.OperatingSystem.Windows)
								if (!c.match("^" + t.$Coc) && !c.startsWith("\\\\?\\")) {
									if (!n) return null;
									c = o.join(n, c);
								} else c = c.replace(/^\\\\\?\\/, "");
							else {
								if (!n) return null;
								c = o.join(n, c);
							}
						return (c = o.normalize(c)), c;
					}
					d(c) {
						return (c ?? E.OS) === E.OperatingSystem.Windows ? d.$kc : d.$lc;
					}
				};
				(e.$tWc = r), (e.$tWc = r = Ne([j(0, C.$ll)], r));
				var u;
				(function (h) {
					h[(h.TTL = 1e4)] = "TTL";
				})(u || (u = {}));
				class a {
					constructor() {
						(this.a = new Map()), (this.b = 0);
					}
					set(c, n) {
						this.b && m.$Bfb.clearTimeout(this.b),
							(this.b = m.$Bfb.setTimeout(() => this.a.clear(), u.TTL)),
							this.a.set(this.c(c), n);
					}
					get(c) {
						return this.a.get(this.c(c));
					}
					c(c) {
						return i.URI.isUri(c) ? c.toString() : c;
					}
				}
			},
		),
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
		define(
			de[3162],
			he([1, 0, 68, 25, 513, 562, 117]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pWc = void 0);
				var d;
				(function (a) {
					(a[(a.MaxLineLength = 2e3)] = "MaxLineLength"),
						(a[(a.MaxResolvedLinkLength = 1024)] = "MaxResolvedLinkLength");
				})(d || (d = {}));
				const m = [/^ *(?<link>(?<line>\d+):(?<col>\d+)?)/],
					r = [/^(?<link>@@ .+ \+(?<toFileLine>\d+),(?<toFileCount>\d+) @@)/];
				let u = class {
					static {
						this.id = "multiline";
					}
					constructor(h, c, n, g, p, o) {
						(this.xterm = h),
							(this.a = c),
							(this.b = n),
							(this.c = g),
							(this.d = p),
							(this.e = o),
							(this.maxLinkLength = 500);
					}
					async detect(h, c, n) {
						const g = [],
							p = (0, E.$_Vc)(this.xterm.buffer.active, c, n, this.xterm.cols);
						if (p === "" || p.length > d.MaxLineLength) return [];
						this.c.trace("terminalMultiLineLinkDetector#detect text", p);
						for (const o of m) {
							const b = p.match(o)?.groups;
							if (!b) continue;
							const s = b?.link,
								l = b?.line,
								y = b?.col;
							if (!s || l === void 0 || s.length > d.MaxResolvedLinkLength)
								continue;
							this.c.trace("terminalMultiLineLinkDetector#detect candidate", s);
							let $;
							for (let S = c - 1; S >= 0; S--) {
								if (this.xterm.buffer.active.getLine(S).isWrapped) continue;
								const I = (0, E.$_Vc)(
									this.xterm.buffer.active,
									S,
									S,
									this.xterm.cols,
								);
								if (!I.match(/^\s*\d/)) {
									$ = I;
									break;
								}
							}
							if (!$) continue;
							const v = await this.b.resolveLink(this.a, $);
							if (v) {
								let S;
								v.isDirectory
									? this.f(v.uri)
										? (S = w.TerminalBuiltinLinkType.LocalFolderInWorkspace)
										: (S =
												w.TerminalBuiltinLinkType.LocalFolderOutsideWorkspace)
									: (S = w.TerminalBuiltinLinkType.LocalFile);
								const I = (0, E.$0Vc)(
										h,
										this.xterm.cols,
										{
											startColumn: 1,
											startLineNumber: 1,
											endColumn: 1 + p.length,
											endLineNumber: 1,
										},
										c,
									),
									T = {
										text: s,
										uri: v.uri,
										selection: {
											startLineNumber: parseInt(l),
											startColumn: y ? parseInt(y) : 1,
										},
										disableTrimColon: !0,
										bufferRange: I,
										type: S,
									};
								this.c.trace(
									"terminalMultiLineLinkDetector#detect verified link",
									T,
								),
									g.push(T);
								break;
							}
						}
						if (g.length === 0)
							for (const o of r) {
								const b = p.match(o)?.groups;
								if (!b) continue;
								const s = b?.link,
									l = b?.toFileLine,
									y = b?.toFileCount;
								if (!s || l === void 0 || s.length > d.MaxResolvedLinkLength)
									continue;
								this.c.trace(
									"terminalMultiLineLinkDetector#detect candidate",
									s,
								);
								let $;
								for (let S = c - 1; S >= 0; S--) {
									if (this.xterm.buffer.active.getLine(S).isWrapped) continue;
									const T = (0, E.$_Vc)(
										this.xterm.buffer.active,
										S,
										S,
										this.xterm.cols,
									).match(/\+\+\+ b\/(?<path>.+)/);
									if (T) {
										$ = T.groups?.path;
										break;
									}
								}
								if (!$) continue;
								const v = await this.b.resolveLink(this.a, $);
								if (v) {
									let S;
									v.isDirectory
										? this.f(v.uri)
											? (S = w.TerminalBuiltinLinkType.LocalFolderInWorkspace)
											: (S =
													w.TerminalBuiltinLinkType.LocalFolderOutsideWorkspace)
										: (S = w.TerminalBuiltinLinkType.LocalFile);
									const I = (0, E.$0Vc)(
											h,
											this.xterm.cols,
											{
												startColumn: 1,
												startLineNumber: 1,
												endColumn: 1 + s.length,
												endLineNumber: 1,
											},
											c,
										),
										T = {
											text: s,
											uri: v.uri,
											selection: {
												startLineNumber: parseInt(l),
												startColumn: 1,
												endLineNumber: parseInt(l) + parseInt(y),
											},
											bufferRange: I,
											type: S,
										};
									this.c.trace(
										"terminalMultiLineLinkDetector#detect verified link",
										T,
									),
										g.push(T);
									break;
								}
							}
						return g;
					}
					f(h) {
						const c = this.e.getWorkspace().folders;
						for (let n = 0; n < c.length; n++)
							if (this.d.extUri.isEqualOrParent(h, c[n].uri)) return !0;
						return !1;
					}
				};
				(e.$pWc = u),
					(e.$pWc = u = Ne([j(3, C.$YJ), j(4, t.$Vl), j(5, i.$Vi)], u));
			},
		),
		define(
			de[3163],
			he([1, 0, 23, 9, 1535, 68, 25, 513, 562, 117]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$mWc = void 0);
				var u;
				(function (c) {
					c[(c.MaxResolvedLinksInLine = 10)] = "MaxResolvedLinksInLine";
				})(u || (u = {}));
				let a = class {
					static {
						this.id = "uri";
					}
					constructor(n, g, p, o, f, b) {
						(this.xterm = n),
							(this.a = g),
							(this.b = p),
							(this.c = o),
							(this.d = f),
							(this.e = b),
							(this.maxLinkLength = 2048);
					}
					async detect(n, g, p) {
						const o = [],
							f = new h(this.xterm, g, p),
							b = w.$1wb.computeLinks(f);
						let s = 0;
						this.c.trace("terminalUriLinkDetector#detect computedLinks", b);
						for (const l of b) {
							const y = (0, m.$0Vc)(n, this.xterm.cols, l.range, g),
								$ = l.url
									? typeof l.url == "string"
										? i.URI.parse(this.g(l.url))
										: l.url
									: void 0;
							if (!$) continue;
							const v = l.url?.toString() || "";
							if (v.length > this.maxLinkLength) continue;
							if ($.scheme !== t.Schemas.file) {
								o.push({
									text: v,
									uri: $,
									bufferRange: y,
									type: d.TerminalBuiltinLinkType.Url,
								});
								continue;
							}
							if ($.authority.length !== 2 && $.authority.endsWith(":"))
								continue;
							const S = [$];
							$.authority.length > 0 &&
								S.push(i.URI.from({ ...$, authority: void 0 })),
								this.c.trace("terminalUriLinkDetector#detect uriCandidates", S);
							for (const I of S) {
								const T = await this.b.resolveLink(this.a, v, I);
								if (T) {
									let P;
									T.isDirectory
										? this.f(I)
											? (P = d.TerminalBuiltinLinkType.LocalFolderInWorkspace)
											: (P =
													d.TerminalBuiltinLinkType.LocalFolderOutsideWorkspace)
										: (P = d.TerminalBuiltinLinkType.LocalFile);
									const k = {
										text: typeof l.url == "string" ? l.url : T.link,
										uri: I,
										bufferRange: y,
										type: P,
									};
									this.c.trace(
										"terminalUriLinkDetector#detect verified link",
										k,
									),
										o.push(k),
										s++;
									break;
								}
							}
							if (++s >= u.MaxResolvedLinksInLine) break;
						}
						return o;
					}
					f(n) {
						const g = this.e.getWorkspace().folders;
						for (let p = 0; p < g.length; p++)
							if (this.d.extUri.isEqualOrParent(n, g[p].uri)) return !0;
						return !1;
					}
					g(n) {
						return n.replace(/:\d+(:\d+)?$/, "");
					}
				};
				(e.$mWc = a),
					(e.$mWc = a = Ne([j(3, r.$YJ), j(4, E.$Vl), j(5, C.$Vi)], a));
				class h {
					constructor(n, g, p) {
						(this.a = n), (this.b = g), (this.c = p);
					}
					getLineCount() {
						return 1;
					}
					getLineContent() {
						return (0, m.$_Vc)(
							this.a.buffer.active,
							this.b,
							this.c,
							this.a.cols,
						);
					}
				}
			},
		),
		
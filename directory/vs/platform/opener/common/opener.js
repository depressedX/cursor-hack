define(de[41], he([1, 0, 5]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$7rb = void 0),
				(e.$8rb = i),
				(e.$9rb = w),
				(e.$7rb = (0, t.$Mi)("openerService"));
			function i(E, C) {
				return E.with({
					fragment: `${C.startLineNumber},${C.startColumn}${C.endLineNumber ? `-${C.endLineNumber}${C.endColumn ? `,${C.endColumn}` : ""}` : ""}`,
				});
			}
			function w(E) {
				let C;
				const d = /^L?(\d+)(?:,(\d+))?(-L?(\d+)(?:,(\d+))?)?/.exec(E.fragment);
				return (
					d &&
						((C = {
							startLineNumber: parseInt(d[1]),
							startColumn: d[2] ? parseInt(d[2]) : 1,
							endLineNumber: d[4] ? parseInt(d[4]) : void 0,
							endColumn: d[4] ? (d[5] ? parseInt(d[5]) : 1) : void 0,
						}),
						(E = E.with({ fragment: "" }))),
					{ selection: C, uri: E }
				);
			}
		}),
		define(
			de[2745],
			he([1, 0, 7, 75, 33, 273, 59, 197, 23, 19, 9, 65, 31, 116, 41]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$TAc = void 0),
					(t = mt(t));
				let g = class {
					constructor(b) {
						this.a = b;
					}
					async open(b, s) {
						if (!(0, m.$Vg)(b, m.Schemas.command)) return !1;
						if (
							!s?.allowCommands ||
							(typeof b == "string" && (b = u.URI.parse(b)),
							Array.isArray(s.allowCommands) &&
								!s.allowCommands.includes(b.path))
						)
							return !0;
						let l = [];
						try {
							l = (0, d.$ii)(decodeURIComponent(b.query));
						} catch {
							try {
								l = (0, d.$ii)(b.query);
							} catch {}
						}
						return (
							Array.isArray(l) || (l = [l]),
							await this.a.executeCommand(b.path, ...l),
							!0
						);
					}
				};
				g = Ne([j(0, h.$ek)], g);
				let p = class {
					constructor(b) {
						this.a = b;
					}
					async open(b, s) {
						typeof b == "string" && (b = u.URI.parse(b));
						const { selection: l, uri: y } = (0, n.$9rb)(b);
						return (
							(b = y),
							b.scheme === m.Schemas.file && (b = (0, r.$oh)(b)),
							await this.a.openCodeEditor(
								{
									resource: b,
									options: {
										selection: l,
										source: s?.fromUserGesture
											? c.EditorOpenSource.USER
											: c.EditorOpenSource.API,
										...s?.editorOptions,
									},
								},
								this.a.getFocusedCodeEditor(),
								s?.openToSide,
							),
							!0
						);
					}
				};
				p = Ne([j(0, a.$dtb)], p);
				let o = class {
					constructor(b, s) {
						(this.a = new E.$$c()),
							(this.b = new E.$$c()),
							(this.c = new E.$$c()),
							(this.d = new C.$Gc((l) =>
								l.with({ path: null, fragment: null, query: null }).toString(),
							)),
							(this.f = new E.$$c()),
							(this.e = {
								openExternal: async (l) => (
									(0, m.$Wg)(l, m.Schemas.http, m.Schemas.https)
										? t.$rhb(l)
										: (i.$Bfb.location.href = l),
									!0
								),
							}),
							this.a.push({
								open: async (l, y) =>
									y?.openExternal ||
									(0, m.$Wg)(
										l,
										m.Schemas.mailto,
										m.Schemas.http,
										m.Schemas.https,
										m.Schemas.vsls,
									)
										? (await this.g(l, y), !0)
										: !1,
							}),
							this.a.push(new g(s)),
							this.a.push(new p(b));
					}
					registerOpener(b) {
						return { dispose: this.a.unshift(b) };
					}
					registerValidator(b) {
						return { dispose: this.b.push(b) };
					}
					registerExternalUriResolver(b) {
						return { dispose: this.c.push(b) };
					}
					setDefaultExternalOpener(b) {
						this.e = b;
					}
					registerExternalOpener(b) {
						return { dispose: this.f.push(b) };
					}
					async open(b, s) {
						const l = typeof b == "string" ? u.URI.parse(b) : b,
							y = this.d.get(l) ?? b;
						for (const $ of this.b) if (!(await $.shouldOpen(y, s))) return !1;
						for (const $ of this.a) if (await $.open(b, s)) return !0;
						return !1;
					}
					async resolveExternalUri(b, s) {
						for (const l of this.c)
							try {
								const y = await l.resolveExternalUri(b, s);
								if (y)
									return this.d.has(y.resolved) || this.d.set(y.resolved, b), y;
							} catch {}
						throw new Error("Could not resolve external URI: " + b.toString());
					}
					async g(b, s) {
						const l = typeof b == "string" ? u.URI.parse(b) : b;
						let y;
						try {
							y = (await this.resolveExternalUri(l, s)).resolved;
						} catch {
							y = l;
						}
						let $;
						if (
							(typeof b == "string" && l.toString() === y.toString()
								? ($ = b)
								: ($ = encodeURI(y.toString(!0))),
							s?.allowContributedOpeners)
						) {
							const v =
								typeof s?.allowContributedOpeners == "string"
									? s?.allowContributedOpeners
									: void 0;
							for (const S of this.f)
								if (
									await S.openExternal(
										$,
										{ sourceUri: l, preferredOpenerId: v },
										w.CancellationToken.None,
									)
								)
									return !0;
						}
						return this.e.openExternal(
							$,
							{ sourceUri: l },
							w.CancellationToken.None,
						);
					}
					dispose() {
						this.b.clear();
					}
				};
				(e.$TAc = o), (e.$TAc = o = Ne([j(0, a.$dtb), j(1, h.$ek)], o));
			},
		),
		define(
			de[497],
			he([1, 0, 7, 265, 114, 159, 6, 27, 3, 41, 95, 72, 2329]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.Link = void 0);
				let h = class extends m.$1c {
					get enabled() {
						return this.f;
					}
					set enabled(n) {
						n
							? (this.a.setAttribute("aria-disabled", "false"),
								(this.a.tabIndex = 0),
								(this.a.style.pointerEvents = "auto"),
								(this.a.style.opacity = "1"),
								(this.a.style.cursor = "pointer"),
								(this.f = !1))
							: (this.a.setAttribute("aria-disabled", "true"),
								(this.a.tabIndex = -1),
								(this.a.style.pointerEvents = "none"),
								(this.a.style.opacity = "0.4"),
								(this.a.style.cursor = "default"),
								(this.f = !0)),
							(this.f = n);
					}
					set link(n) {
						typeof n.label == "string"
							? (this.a.textContent = n.label)
							: ((0, t.$9fb)(this.a), this.a.appendChild(n.label)),
							(this.a.href = n.href),
							typeof n.tabIndex < "u" && (this.a.tabIndex = n.tabIndex),
							this.j(n.title),
							(this.g = n);
					}
					constructor(n, g, p = {}, o, f) {
						super(),
							(this.g = g),
							(this.h = o),
							(this.f = !0),
							(this.a = (0, t.$fhb)(
								n,
								(0, t.$)(
									"a.monaco-link",
									{ tabIndex: g.tabIndex ?? 0, href: g.href },
									g.label,
								),
							)),
							(this.c = p.hoverDelegate ?? (0, u.$cib)("mouse")),
							this.j(g.title),
							this.a.setAttribute("role", "button");
						const b = this.D(new i.$mib(this.a, "click")),
							s = this.D(new i.$mib(this.a, "keypress")),
							l = C.Event.chain(s.event, (v) =>
								v
									.map((S) => new w.$7fb(S))
									.filter((S) => S.keyCode === d.KeyCode.Enter),
							),
							y = this.D(new i.$mib(this.a, E.EventType.Tap)).event;
						this.D(E.$Qhb.addTarget(this.a));
						const $ = C.Event.any(b.event, l, y);
						this.D(
							$((v) => {
								this.enabled &&
									(t.$ahb.stop(v, !0),
									p?.opener
										? p.opener(this.g.href)
										: f.open(this.g.href, { allowCommands: !0 }));
							}),
						),
							(this.enabled = !0);
					}
					j(n) {
						this.c.showNativeHover
							? (this.a.title = n ?? "")
							: !this.b && n
								? (this.b = this.D(this.h.setupManagedHover(this.c, this.a, n)))
								: this.b && this.b.update(n);
					}
				};
				(e.Link = h), (e.Link = h = Ne([j(3, a.$Uyb), j(4, r.$7rb)], h));
			},
		),
		
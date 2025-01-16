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
		
define(
			de[1603],
			he([1, 0, 33, 29, 9, 17, 67, 31, 69, 1599, 10]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$VBb = a),
					(e.$WBb = h);
				async function a(f, b, s, l = !0) {
					return p(new c(), f, b, s, l);
				}
				function h(f, b, s, l) {
					return Promise.resolve(s.provideColorPresentations(f, b, l));
				}
				class c {
					constructor() {}
					async compute(b, s, l, y) {
						const $ = await b.provideDocumentColors(s, l);
						if (Array.isArray($))
							for (const v of $) y.push({ colorInfo: v, provider: b });
						return Array.isArray($);
					}
				}
				class n {
					constructor() {}
					async compute(b, s, l, y) {
						const $ = await b.provideDocumentColors(s, l);
						if (Array.isArray($))
							for (const v of $)
								y.push({
									range: v.range,
									color: [
										v.color.red,
										v.color.green,
										v.color.blue,
										v.color.alpha,
									],
								});
						return Array.isArray($);
					}
				}
				class g {
					constructor(b) {
						this.a = b;
					}
					async compute(b, s, l, y) {
						const $ = await b.provideColorPresentations(
							s,
							this.a,
							t.CancellationToken.None,
						);
						return Array.isArray($) && y.push(...$), Array.isArray($);
					}
				}
				async function p(f, b, s, l, y) {
					let $ = !1,
						v;
					const S = [],
						I = b.ordered(s);
					for (let T = I.length - 1; T >= 0; T--) {
						const P = I[T];
						if (P instanceof r.$UBb) v = P;
						else
							try {
								(await f.compute(P, s, l, S)) && ($ = !0);
							} catch (k) {
								(0, i.$5)(k);
							}
					}
					return $ ? S : v && y ? (await f.compute(v, s, l, S), S) : [];
				}
				function o(f, b) {
					const { colorProvider: s } = f.get(m.$k3),
						l = f.get(C.$QO).getModel(b);
					if (!l) throw (0, i.$$)();
					const y = f
						.get(u.$gj)
						.getValue("editor.defaultColorDecorators", { resource: b });
					return {
						model: l,
						colorProviderRegistry: s,
						isDefaultColorDecoratorsEnabled: y,
					};
				}
				d.$fk.registerCommand(
					"_executeDocumentColorProvider",
					function (f, ...b) {
						const [s] = b;
						if (!(s instanceof w.URI)) throw (0, i.$$)();
						const {
							model: l,
							colorProviderRegistry: y,
							isDefaultColorDecoratorsEnabled: $,
						} = o(f, s);
						return p(new n(), y, l, t.CancellationToken.None, $);
					},
				),
					d.$fk.registerCommand(
						"_executeColorPresentationProvider",
						function (f, ...b) {
							const [s, l] = b,
								{ uri: y, range: $ } = l;
							if (
								!(y instanceof w.URI) ||
								!Array.isArray(s) ||
								s.length !== 4 ||
								!E.$iL.isIRange($)
							)
								throw (0, i.$$)();
							const {
									model: v,
									colorProviderRegistry: S,
									isDefaultColorDecoratorsEnabled: I,
								} = o(f, y),
								[T, P, k, L] = s;
							return p(
								new g({
									range: $,
									color: { red: T, green: P, blue: k, alpha: L },
								}),
								S,
								v,
								t.CancellationToken.None,
								I,
							);
						},
					);
			},
		),
		
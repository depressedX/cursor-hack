define(
			de[1602],
			he([1, 0, 33, 29, 9, 67, 31, 28, 1591, 17, 69]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$Ob = void 0),
					(e.$9Ob = a),
					(e.$0Ob = h),
					(e.$_Ob = n),
					(e.$aPb = p),
					(e.$bPb = b),
					(e.$cPb = l);
				function a(y) {
					return y && !!y.data;
				}
				function h(y) {
					return y && Array.isArray(y.edits);
				}
				class c {
					constructor($, v, S) {
						(this.provider = $), (this.tokens = v), (this.error = S);
					}
				}
				e.$$Ob = c;
				function n(y, $) {
					return y.has($);
				}
				function g(y, $) {
					const v = y.orderedGroups($);
					return v.length > 0 ? v[0] : [];
				}
				async function p(y, $, v, S, I) {
					const T = g(y, $),
						P = await Promise.all(
							T.map(async (k) => {
								let L,
									D = null;
								try {
									L = await k.provideDocumentSemanticTokens(
										$,
										k === v ? S : null,
										I,
									);
								} catch (M) {
									(D = M), (L = null);
								}
								return (!L || (!a(L) && !h(L))) && (L = null), new c(k, L, D);
							}),
						);
					for (const k of P) {
						if (k.error) throw k.error;
						if (k.tokens) return k;
					}
					return P.length > 0 ? P[0] : null;
				}
				function o(y, $) {
					const v = y.orderedGroups($);
					return v.length > 0 ? v[0] : null;
				}
				class f {
					constructor($, v) {
						(this.provider = $), (this.tokens = v);
					}
				}
				function b(y, $) {
					return y.has($);
				}
				function s(y, $) {
					const v = y.orderedGroups($);
					return v.length > 0 ? v[0] : [];
				}
				async function l(y, $, v, S) {
					const I = s(y, $),
						T = await Promise.all(
							I.map(async (P) => {
								let k;
								try {
									k = await P.provideDocumentRangeSemanticTokens($, v, S);
								} catch (L) {
									(0, i.$5)(L), (k = null);
								}
								return (!k || !a(k)) && (k = null), new f(P, k);
							}),
						);
					for (const P of T) if (P.tokens) return P;
					return T.length > 0 ? T[0] : null;
				}
				C.$fk.registerCommand(
					"_provideDocumentSemanticTokensLegend",
					async (y, ...$) => {
						const [v] = $;
						(0, d.$vg)(v instanceof w.URI);
						const S = y.get(E.$QO).getModel(v);
						if (!S) return;
						const { documentSemanticTokensProvider: I } = y.get(u.$k3),
							T = o(I, S);
						return T
							? T[0].getLegend()
							: y
									.get(C.$ek)
									.executeCommand(
										"_provideDocumentRangeSemanticTokensLegend",
										v,
									);
					},
				),
					C.$fk.registerCommand(
						"_provideDocumentSemanticTokens",
						async (y, ...$) => {
							const [v] = $;
							(0, d.$vg)(v instanceof w.URI);
							const S = y.get(E.$QO).getModel(v);
							if (!S) return;
							const { documentSemanticTokensProvider: I } = y.get(u.$k3);
							if (!n(I, S))
								return y
									.get(C.$ek)
									.executeCommand(
										"_provideDocumentRangeSemanticTokens",
										v,
										S.getFullModelRange(),
									);
							const T = await p(I, S, null, null, t.CancellationToken.None);
							if (!T) return;
							const { provider: P, tokens: k } = T;
							if (!k || !a(k)) return;
							const L = (0, m.$7Ob)({ id: 0, type: "full", data: k.data });
							return (
								k.resultId && P.releaseDocumentSemanticTokens(k.resultId), L
							);
						},
					),
					C.$fk.registerCommand(
						"_provideDocumentRangeSemanticTokensLegend",
						async (y, ...$) => {
							const [v, S] = $;
							(0, d.$vg)(v instanceof w.URI);
							const I = y.get(E.$QO).getModel(v);
							if (!I) return;
							const { documentRangeSemanticTokensProvider: T } = y.get(u.$k3),
								P = s(T, I);
							if (P.length === 0) return;
							if (P.length === 1) return P[0].getLegend();
							if (!S || !r.$iL.isIRange(S))
								return (
									console.warn(
										"provideDocumentRangeSemanticTokensLegend might be out-of-sync with provideDocumentRangeSemanticTokens unless a range argument is passed in",
									),
									P[0].getLegend()
								);
							const k = await l(T, I, r.$iL.lift(S), t.CancellationToken.None);
							if (k) return k.provider.getLegend();
						},
					),
					C.$fk.registerCommand(
						"_provideDocumentRangeSemanticTokens",
						async (y, ...$) => {
							const [v, S] = $;
							(0, d.$vg)(v instanceof w.URI), (0, d.$vg)(r.$iL.isIRange(S));
							const I = y.get(E.$QO).getModel(v);
							if (!I) return;
							const { documentRangeSemanticTokensProvider: T } = y.get(u.$k3),
								P = await l(T, I, r.$iL.lift(S), t.CancellationToken.None);
							if (!(!P || !P.tokens))
								return (0, m.$7Ob)({
									id: 0,
									type: "full",
									data: P.tokens.data,
								});
						},
					);
			},
		),
		
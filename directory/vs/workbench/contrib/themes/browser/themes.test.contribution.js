define(
			de[3717],
			he([
				1, 0, 9, 61, 31, 5, 333, 18, 44, 841, 74, 171, 1878, 97, 22, 19, 23, 37,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				class f {
					constructor(l) {
						(this.a = l), (this.b = Object.create(null)), (this.d = "#000000");
						for (let y = 0, $ = this.a.tokenColors.length; y < $; y++) {
							const v = this.a.tokenColors[y];
							v.scope || (this.d = v.settings.foreground);
						}
					}
					e(l, y) {
						return `${l}: ${c.$UL.Format.CSS.formatHexA(y, !0).toUpperCase()}`;
					}
					explainTokenColor(l, y) {
						const $ = this.f(l);
						if (!$) {
							const S = c.$UL.fromHex(this.d);
							if (!y.equals(S))
								throw new Error(
									`[${this.a.label}]: Unexpected color ${c.$UL.Format.CSS.formatHexA(y)} for ${l}. Expected default ${c.$UL.Format.CSS.formatHexA(S)}`,
								);
							return this.e("default", y);
						}
						const v = c.$UL.fromHex($.settings.foreground);
						if (!y.equals(v))
							throw new Error(
								`[${this.a.label}]: Unexpected color ${c.$UL.Format.CSS.formatHexA(y)} for ${l}. Expected ${c.$UL.Format.CSS.formatHexA(v)} coming in from ${$.rawSelector}`,
							);
						return this.e($.rawSelector, y);
					}
					f(l) {
						return (
							this.b[l] || (this.b[l] = (0, h.$OXc)(this.a, l.split(" "))),
							this.b[l]
						);
					}
				}
				let b = class {
					constructor(l, y, $) {
						(this.a = l), (this.b = y), (this.d = $);
					}
					e(l, y) {
						const $ = u.$lM.getColorMap();
						let v = null;
						const S = [];
						let I = 0;
						for (let T = 0, P = y.length; T < P; T++) {
							const k = y[T],
								L = l.tokenizeLine2(k, v);
							for (let D = 0, M = L.tokens.length >>> 1; D < M; D++) {
								const N = L.tokens[D << 1],
									A = L.tokens[(D << 1) + 1],
									R = D + 1 < M ? L.tokens[(D + 1) << 1] : k.length,
									O = k.substring(N, R),
									B = a.$2L.getForeground(A);
								S[I++] = { text: O, color: $[B] };
							}
							v = L.ruleStack;
						}
						return S;
					}
					f(l, y) {
						let $ = null;
						const v = [];
						let S = 0;
						for (let I = 0, T = y.length; I < T; I++) {
							const P = y[I],
								k = l.tokenizeLine(P, $);
							let L = null;
							for (let D = 0, M = k.tokens.length; D < M; D++) {
								const N = k.tokens[D],
									A = P.substring(N.startIndex, N.endIndex),
									R = N.scopes.join(" ");
								L === R
									? (v[S - 1].c += A)
									: ((L = R),
										(v[S++] = {
											c: A,
											t: R,
											r: {
												dark_plus: void 0,
												light_plus: void 0,
												dark_vs: void 0,
												light_vs: void 0,
												hc_black: void 0,
											},
										}));
							}
							$ = k.ruleStack;
						}
						return v;
					}
					async g(l, y) {
						const $ = this.b.getColorTheme(),
							v = (P) => {
								const k = "vscode-theme-defaults-themes-",
									L = P.indexOf(k);
								if (L !== -1) return P.substring(L + k.length, P.length - 5);
							},
							S = {},
							T = (await this.b.getColorThemes()).filter((P) => !!v(P.id));
						for (const P of T) {
							const k = P.id;
							if (await this.b.setColorTheme(k, void 0)) {
								const D = v(k);
								S[D] = {
									document: new f(this.b.getColorTheme()),
									tokens: this.e(l, y),
								};
							}
						}
						return await this.b.setColorTheme($.id, void 0), S;
					}
					h(l, y) {
						const $ = {},
							v = Object.keys(y);
						for (const S of v) $[S] = 0;
						for (let S = 0, I = l.length; S < I; S++) {
							const T = l[S];
							for (const P of v) {
								const k = y[P].tokens[$[P]];
								(k.text = k.text.substr(T.c.length)),
									(T.r[P] = y[P].document.explainTokenColor(T.t, k.color)),
									k.text.length === 0 && $[P]++;
							}
						}
					}
					captureSyntaxTokens(l, y) {
						const $ = this.a.guessLanguageIdByFilepathOrFirstLine(
							t.URI.file(l),
						);
						return this.d.createTokenizer($).then((v) => {
							if (!v) return [];
							const S = (0, o.$zf)(y),
								I = this.f(v, S);
							return this.g(v, S).then(
								(T) => (this.h(I, T), I.filter((P) => P.c.length > 0)),
							);
						});
					}
				};
				(b = Ne([j(0, i.$nM), j(1, C.$rRb), j(2, r.$N6b)], b)),
					w.$fk.registerCommand(
						"_workbench.captureSyntaxTokens",
						function (s, l) {
							const y = ($) => {
								const v = s.get(n.$ll),
									S = (0, g.$kh)($),
									I = s.get(E.$Li).createInstance(b);
								return v
									.readFile($)
									.then((T) => I.captureSyntaxTokens(S, T.value.toString()));
							};
							if (l) return y(l);
							{
								const $ = s.get(d.$IY),
									v = $.activeEditor
										? m.$A1.getCanonicalUri($.activeEditor, {
												filterByScheme: p.Schemas.file,
											})
										: null;
								v
									? y(v).then((S) => {
											console.log(S);
										})
									: console.log("No file editor active");
							}
						},
					);
			},
		),
		
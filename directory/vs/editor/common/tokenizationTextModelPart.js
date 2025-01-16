define(de[916], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.BackgroundTokenizationState = void 0);
			var t;
			(function (i) {
				(i[(i.InProgress = 1)] = "InProgress"),
					(i[(i.Completed = 2)] = "Completed");
			})(t || (e.BackgroundTokenizationState = t = {}));
		}),
		define(
			de[2572],
			he([
				1, 0, 6, 3, 2570, 658, 914, 1537, 492, 1538, 657, 915, 916, 24, 1536,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$8O = void 0);
				class g extends i.$1c {
					didLanguageChange(y) {
						return this.g.didLanguageChange(y);
					}
					constructor(y, $) {
						if (
							(super(),
							(this.m = y),
							(this.n = $),
							(this.a = new t.$re()),
							(this.f = new u.$2M()),
							(this.g = new d.$hN(this.f, this.n)),
							(this.onDidChange = this.a.event),
							(this.h = []),
							(this.j = []),
							y.tokenization.hasTokens)
						)
							y.tokenization.backgroundTokenizationState ===
							h.BackgroundTokenizationState.Completed
								? ((this.b = void 0), (this.c = this.t([], void 0, !1)))
								: ((this.b = this.t([], void 0, !0)), (this.c = this.b));
						else {
							const v = this.g.getSingleLanguageBracketTokens(
									this.m.getLanguageId(),
								),
								S = new a.$kN(this.m.getValue(), v);
							(this.b = (0, r.$6O)(S, [], void 0, !0)), (this.c = this.b);
						}
					}
					handleDidChangeBackgroundTokenizationState() {
						if (
							this.m.tokenization.backgroundTokenizationState ===
							h.BackgroundTokenizationState.Completed
						) {
							const y = this.b === void 0;
							(this.b = void 0), y || this.a.fire();
						}
					}
					handleDidChangeTokens({ ranges: y }) {
						const $ = y.map(
							(v) =>
								new C.$1O(
									(0, m.$FM)(v.fromLineNumber - 1, 0),
									(0, m.$FM)(v.toLineNumber, 0),
									(0, m.$FM)(v.toLineNumber - v.fromLineNumber + 1, 0),
								),
						);
						this.q($, !0), this.b || this.a.fire();
					}
					handleContentChanged(y) {
						const $ = C.$1O.fromModelContentChanges(y.changes);
						this.q($, !1);
					}
					q(y, $) {
						const v = (0, n.$7O)(this.j, y);
						(this.j = v), this.b && !$ && (this.h = (0, n.$7O)(this.h, y));
					}
					s() {
						this.j.length > 0 &&
							((this.c = this.t(this.j, this.c, !1)), (this.j = [])),
							this.h.length > 0 &&
								(this.b && (this.b = this.t(this.h, this.b, !1)),
								(this.h = []));
					}
					t(y, $, v) {
						const I = $,
							T = new a.$jN(this.m, this.g);
						return (0, r.$6O)(T, y, I, v);
					}
					getBracketsInRange(y, $) {
						this.s();
						const v = (0, m.$FM)(y.startLineNumber - 1, y.startColumn - 1),
							S = (0, m.$FM)(y.endLineNumber - 1, y.endColumn - 1);
						return new c.$dc((I) => {
							const T = this.b || this.c;
							f(T, m.$DM, T.length, v, S, I, 0, 0, new Map(), $);
						});
					}
					getBracketPairsInRange(y, $) {
						this.s();
						const v = (0, m.$RM)(y.getStartPosition()),
							S = (0, m.$RM)(y.getEndPosition());
						return new c.$dc((I) => {
							const T = this.b || this.c,
								P = new b(I, $, this.m);
							s(T, m.$DM, T.length, v, S, P, 0, new Map());
						});
					}
					getFirstBracketAfter(y) {
						this.s();
						const $ = this.b || this.c;
						return o($, m.$DM, $.length, (0, m.$RM)(y));
					}
					getFirstBracketBefore(y) {
						this.s();
						const $ = this.b || this.c;
						return p($, m.$DM, $.length, (0, m.$RM)(y));
					}
				}
				e.$8O = g;
				function p(l, y, $, v) {
					if (l.kind === E.AstNodeKind.List || l.kind === E.AstNodeKind.Pair) {
						const S = [];
						for (const I of l.children)
							($ = (0, m.$JM)(y, I.length)),
								S.push({ nodeOffsetStart: y, nodeOffsetEnd: $ }),
								(y = $);
						for (let I = S.length - 1; I >= 0; I--) {
							const { nodeOffsetStart: T, nodeOffsetEnd: P } = S[I];
							if ((0, m.$NM)(T, v)) {
								const k = p(l.children[I], T, P, v);
								if (k) return k;
							}
						}
						return null;
					} else {
						if (l.kind === E.AstNodeKind.UnexpectedClosingBracket) return null;
						if (l.kind === E.AstNodeKind.Bracket) {
							const S = (0, m.$SM)(y, $);
							return { bracketInfo: l.bracketInfo, range: S };
						}
					}
					return null;
				}
				function o(l, y, $, v) {
					if (l.kind === E.AstNodeKind.List || l.kind === E.AstNodeKind.Pair) {
						for (const S of l.children) {
							if ((($ = (0, m.$JM)(y, S.length)), (0, m.$NM)(v, $))) {
								const I = o(S, y, $, v);
								if (I) return I;
							}
							y = $;
						}
						return null;
					} else {
						if (l.kind === E.AstNodeKind.UnexpectedClosingBracket) return null;
						if (l.kind === E.AstNodeKind.Bracket) {
							const S = (0, m.$SM)(y, $);
							return { bracketInfo: l.bracketInfo, range: S };
						}
					}
					return null;
				}
				function f(l, y, $, v, S, I, T, P, k, L, D = !1) {
					if (T > 200) return !0;
					e: for (;;)
						switch (l.kind) {
							case E.AstNodeKind.List: {
								const M = l.childrenLength;
								for (let N = 0; N < M; N++) {
									const A = l.getChild(N);
									if (A) {
										if (
											(($ = (0, m.$JM)(y, A.length)),
											(0, m.$OM)(y, S) && (0, m.$PM)($, v))
										) {
											if ((0, m.$PM)($, S)) {
												l = A;
												continue e;
											}
											if (!f(A, y, $, v, S, I, T, 0, k, L)) return !1;
										}
										y = $;
									}
								}
								return !0;
							}
							case E.AstNodeKind.Pair: {
								const M =
									!L ||
									!l.closingBracket ||
									l.closingBracket.bracketInfo.closesColorized(
										l.openingBracket.bracketInfo,
									);
								let N = 0;
								if (k) {
									let R = k.get(l.openingBracket.text);
									R === void 0 && (R = 0),
										(N = R),
										M && (R++, k.set(l.openingBracket.text, R));
								}
								const A = l.childrenLength;
								for (let R = 0; R < A; R++) {
									const O = l.getChild(R);
									if (O) {
										if (
											(($ = (0, m.$JM)(y, O.length)),
											(0, m.$OM)(y, S) && (0, m.$PM)($, v))
										) {
											if (
												(0, m.$PM)($, S) &&
												O.kind !== E.AstNodeKind.Bracket
											) {
												(l = O), M ? (T++, (P = N + 1)) : (P = N);
												continue e;
											}
											if (
												(M ||
													O.kind !== E.AstNodeKind.Bracket ||
													!l.closingBracket) &&
												!f(
													O,
													y,
													$,
													v,
													S,
													I,
													M ? T + 1 : T,
													M ? N + 1 : N,
													k,
													L,
													!l.closingBracket,
												)
											)
												return !1;
										}
										y = $;
									}
								}
								return k?.set(l.openingBracket.text, N), !0;
							}
							case E.AstNodeKind.UnexpectedClosingBracket: {
								const M = (0, m.$SM)(y, $);
								return I(new w.$qN(M, T - 1, 0, !0));
							}
							case E.AstNodeKind.Bracket: {
								const M = (0, m.$SM)(y, $);
								return I(new w.$qN(M, T - 1, P - 1, D));
							}
							case E.AstNodeKind.Text:
								return !0;
						}
				}
				class b {
					constructor(y, $, v) {
						(this.push = y),
							(this.includeMinIndentation = $),
							(this.textModel = v);
					}
				}
				function s(l, y, $, v, S, I, T, P) {
					if (T > 200) return !0;
					let k = !0;
					if (l.kind === E.AstNodeKind.Pair) {
						let L = 0;
						if (P) {
							let N = P.get(l.openingBracket.text);
							N === void 0 && (N = 0),
								(L = N),
								N++,
								P.set(l.openingBracket.text, N);
						}
						const D = (0, m.$JM)(y, l.openingBracket.length);
						let M = -1;
						if (
							(I.includeMinIndentation &&
								(M = l.computeMinIndentation(y, I.textModel)),
							(k = I.push(
								new w.$sN(
									(0, m.$SM)(y, $),
									(0, m.$SM)(y, D),
									l.closingBracket
										? (0, m.$SM)((0, m.$JM)(D, l.child?.length || m.$DM), $)
										: void 0,
									T,
									L,
									l,
									M,
								),
							)),
							(y = D),
							k && l.child)
						) {
							const N = l.child;
							if (
								(($ = (0, m.$JM)(y, N.length)),
								(0, m.$OM)(y, S) &&
									(0, m.$PM)($, v) &&
									((k = s(N, y, $, v, S, I, T + 1, P)), !k))
							)
								return !1;
						}
						P?.set(l.openingBracket.text, L);
					} else {
						let L = y;
						for (const D of l.children) {
							const M = L;
							if (
								((L = (0, m.$JM)(L, D.length)),
								(0, m.$OM)(M, S) &&
									(0, m.$OM)(v, L) &&
									((k = s(D, M, L, v, S, I, T, P)), !k))
							)
								return !1;
						}
					}
					return k;
				}
			},
		),
		
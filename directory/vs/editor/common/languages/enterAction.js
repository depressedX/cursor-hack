define(de[1198], he([1, 0, 532, 152, 1151]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Qtb = E);
			function E(C, d, m, r) {
				d.tokenization.forceTokenization(m.startLineNumber);
				const u = d.getLanguageIdAtPosition(m.startLineNumber, m.startColumn),
					a = r.getLanguageConfiguration(u);
				if (!a) return null;
				const c = new w.$Otb(d, r).getProcessedTokenContextAroundRange(m),
					n = c.previousLineProcessedTokens.getLineContent(),
					g = c.beforeRangeProcessedTokens.getLineContent(),
					p = c.afterRangeProcessedTokens.getLineContent(),
					o = a.onEnter(C, n, g, p);
				if (!o) return null;
				const f = o.indentAction;
				let b = o.appendText;
				const s = o.removeText || 0;
				b
					? f === t.IndentAction.Indent && (b = "	" + b)
					: f === t.IndentAction.Indent || f === t.IndentAction.IndentOutdent
						? (b = "	")
						: (b = "");
				let l = (0, i.$cN)(d, m.startLineNumber, m.startColumn);
				return (
					s && (l = l.substring(0, l.length - s)),
					{ indentAction: f, appendText: b, removeText: s, indentation: l }
				);
			}
		}),
		define(
			de[771],
			he([1, 0, 120, 37, 435, 17, 104, 1198, 152]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				var r;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Rtb = void 0),
					(i = mt(i));
				const u = Object.create(null);
				function a(c, n) {
					if (n <= 0) return "";
					u[c] || (u[c] = ["", c]);
					const g = u[c];
					for (let p = g.length; p <= n; p++) g[p] = g[p - 1] + c;
					return g[n];
				}
				let h = (r = class {
					static unshiftIndent(n, g, p, o, f) {
						const b = w.$BM.visibleColumnFromColumn(n, g, p);
						if (f) {
							const s = a(" ", o),
								y = w.$BM.prevIndentTabStop(b, o) / o;
							return a(s, y);
						} else {
							const s = "	",
								y = w.$BM.prevRenderTabStop(b, p) / p;
							return a(s, y);
						}
					}
					static shiftIndent(n, g, p, o, f) {
						const b = w.$BM.visibleColumnFromColumn(n, g, p);
						if (f) {
							const s = a(" ", o),
								y = w.$BM.nextIndentTabStop(b, o) / o;
							return a(s, y);
						} else {
							const s = "	",
								y = w.$BM.nextRenderTabStop(b, p) / p;
							return a(s, y);
						}
					}
					constructor(n, g, p) {
						(this.f = p),
							(this.a = g),
							(this.b = n),
							(this.c = null),
							(this.d = !1),
							(this.e = !1);
					}
					g(n, g, p) {
						this.d ? n.addTrackedEditOperation(g, p) : n.addEditOperation(g, p);
					}
					getEditOperations(n, g) {
						const p = this.b.startLineNumber;
						let o = this.b.endLineNumber;
						this.b.endColumn === 1 && p !== o && (o = o - 1);
						const { tabSize: f, indentSize: b, insertSpaces: s } = this.a,
							l = p === o;
						if (this.a.useTabStops) {
							this.b.isEmpty() &&
								/^\s*$/.test(n.getLineContent(p)) &&
								(this.d = !0);
							let y = 0,
								$ = 0;
							for (let v = p; v <= o; v++, y = $) {
								$ = 0;
								const S = n.getLineContent(v);
								let I = i.$Bf(S);
								if (
									(this.a.isUnshift && (S.length === 0 || I === 0)) ||
									(!l && !this.a.isUnshift && S.length === 0)
								)
									continue;
								if (
									(I === -1 && (I = S.length),
									v > 1 &&
										w.$BM.visibleColumnFromColumn(S, I + 1, f) % b !== 0 &&
										n.tokenization.isCheapToTokenize(v - 1))
								) {
									const k = (0, d.$Qtb)(
										this.a.autoIndent,
										n,
										new E.$iL(
											v - 1,
											n.getLineMaxColumn(v - 1),
											v - 1,
											n.getLineMaxColumn(v - 1),
										),
										this.f,
									);
									if (k) {
										if ((($ = y), k.appendText))
											for (
												let L = 0, D = k.appendText.length;
												L < D &&
												$ < b &&
												k.appendText.charCodeAt(L) === t.CharCode.Space;
												L++
											)
												$++;
										k.removeText && ($ = Math.max(0, $ - k.removeText));
										for (
											let L = 0;
											L < $ &&
											!(I === 0 || S.charCodeAt(I - 1) !== t.CharCode.Space);
											L++
										)
											I--;
									}
								}
								if (this.a.isUnshift && I === 0) continue;
								let T;
								this.a.isUnshift
									? (T = r.unshiftIndent(S, I + 1, f, b, s))
									: (T = r.shiftIndent(S, I + 1, f, b, s)),
									this.g(g, new E.$iL(v, 1, v, I + 1), T),
									v === p &&
										!this.b.isEmpty() &&
										(this.e = this.b.startColumn <= I + 1);
							}
						} else {
							!this.a.isUnshift &&
								this.b.isEmpty() &&
								n.getLineLength(p) === 0 &&
								(this.d = !0);
							const y = s ? a(" ", b) : "	";
							for (let $ = p; $ <= o; $++) {
								const v = n.getLineContent($);
								let S = i.$Bf(v);
								if (
									!(this.a.isUnshift && (v.length === 0 || S === 0)) &&
									!(!l && !this.a.isUnshift && v.length === 0) &&
									(S === -1 && (S = v.length), !(this.a.isUnshift && S === 0))
								)
									if (this.a.isUnshift) {
										S = Math.min(S, b);
										for (let I = 0; I < S; I++)
											if (v.charCodeAt(I) === t.CharCode.Tab) {
												S = I + 1;
												break;
											}
										this.g(g, new E.$iL($, 1, $, S + 1), "");
									} else
										this.g(g, new E.$iL($, 1, $, 1), y),
											$ === p &&
												!this.b.isEmpty() &&
												(this.e = this.b.startColumn === 1);
							}
						}
						this.c = g.trackSelection(this.b);
					}
					computeCursorState(n, g) {
						if (this.d) {
							const o = g.getInverseEditOperations()[0];
							return new C.$kL(
								o.range.endLineNumber,
								o.range.endColumn,
								o.range.endLineNumber,
								o.range.endColumn,
							);
						}
						const p = g.getTrackedSelection(this.c);
						if (this.e) {
							const o = this.b.startColumn;
							return p.startColumn <= o
								? p
								: p.getDirection() === C.SelectionDirection.LTR
									? new C.$kL(
											p.startLineNumber,
											o,
											p.endLineNumber,
											p.endColumn,
										)
									: new C.$kL(
											p.endLineNumber,
											p.endColumn,
											p.startLineNumber,
											o,
										);
						}
						return p;
					}
				});
				(e.$Rtb = h), (e.$Rtb = h = r = Ne([j(2, m.$aN)], h));
			},
		),
		define(
			de[948],
			he([
				1, 0, 120, 29, 37, 655, 771, 1527, 346, 747, 17, 48, 532, 152, 38, 748,
				1184, 1198,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$7tb =
						e.$6tb =
						e.$5tb =
						e.$4tb =
						e.$3tb =
						e.$2tb =
						e.$1tb =
						e.$Ztb =
						e.$Ytb =
						e.$Xtb =
						e.$Wtb =
						e.$Vtb =
						e.$Utb =
							void 0),
					(e.$8tb = z),
					(e.$9tb = F),
					(e.$0tb = x),
					(w = mt(w));
				class f {
					static getEdits(q, V, G, K, J) {
						if (!J && this.a(q, V, G)) {
							const W = [];
							for (const Y of G) {
								const ie = this.b(q, V, Y, K);
								if (ie === null) return;
								W.push({ selection: Y, indentation: ie });
							}
							const X = l.getAutoClosingPairClose(q, V, G, K, !1);
							return this.c(q, V, W, K, X);
						}
					}
					static a(q, V, G) {
						if (q.autoIndent < n.EditorAutoIndentStrategy.Full) return !1;
						for (let K = 0, J = G.length; K < J; K++)
							if (
								!V.tokenization.isCheapToTokenize(
									G[K].getEndPosition().lineNumber,
								)
							)
								return !1;
						return !0;
					}
					static b(q, V, G, K) {
						const J = (0, p.$Ltb)(
							q,
							V,
							G,
							K,
							{ shiftIndent: (X) => z(q, X), unshiftIndent: (X) => F(q, X) },
							q.languageConfigurationService,
						);
						if (J === null) return null;
						const W = (0, c.$cN)(V, G.startLineNumber, G.startColumn);
						return J === q.normalizeIndentation(W) ? null : J;
					}
					static c(q, V, G, K, J) {
						const W = G.map(({ selection: Y, indentation: ie }) => {
								if (J !== null) {
									const ne = this.d(q, V, ie, Y, K, !1);
									return new M(ne, Y, K, J);
								} else {
									const ne = this.d(q, V, ie, Y, K, !0);
									return U(ne.range, ne.text, !1);
								}
							}),
							X = {
								shouldPushStackElementBefore: !0,
								shouldPushStackElementAfter: !1,
							};
						return new m.$Csb(m.EditOperationType.TypingOther, W, X);
					}
					static d(q, V, G, K, J, W = !0) {
						const X = K.startLineNumber,
							Y = V.getLineFirstNonWhitespaceColumn(X);
						let ie = q.normalizeIndentation(G);
						if (Y !== 0) {
							const ee = V.getLineContent(X);
							ie += ee.substring(Y - 1, K.startColumn - 1);
						}
						return (
							(ie += W ? J : ""),
							{ range: new u.$iL(X, 1, K.endLineNumber, K.endColumn), text: ie }
						);
					}
				}
				e.$Utb = f;
				class b {
					static getEdits(q, V, G, K, J, W) {
						if (B(V, G, K, J, W)) return this.a(q, K, W);
					}
					static a(q, V, G) {
						const K = [];
						for (let J = 0, W = V.length; J < W; J++) {
							const Y = V[J].getPosition(),
								ie = new u.$iL(
									Y.lineNumber,
									Y.column,
									Y.lineNumber,
									Y.column + 1,
								);
							K[J] = new E.$wtb(ie, G);
						}
						return new m.$Csb(m.EditOperationType.TypingOther, K, {
							shouldPushStackElementBefore: A(
								q,
								m.EditOperationType.TypingOther,
							),
							shouldPushStackElementAfter: !1,
						});
					}
				}
				e.$Vtb = b;
				class s {
					static getEdits(q, V, G, K, J) {
						if (B(q, V, G, K, J)) {
							const W = G.map(
								(X) =>
									new E.$wtb(
										new u.$iL(
											X.positionLineNumber,
											X.positionColumn,
											X.positionLineNumber,
											X.positionColumn + 1,
										),
										"",
										!1,
									),
							);
							return new m.$Csb(m.EditOperationType.TypingOther, W, {
								shouldPushStackElementBefore: !0,
								shouldPushStackElementAfter: !1,
							});
						}
					}
				}
				e.$Wtb = s;
				class l {
					static getEdits(q, V, G, K, J, W) {
						if (!W) {
							const X = this.getAutoClosingPairClose(q, V, G, K, J);
							if (X !== null) return this.a(G, K, J, X);
						}
					}
					static a(q, V, G, K) {
						const J = [];
						for (let W = 0, X = q.length; W < X; W++) {
							const Y = q[W];
							J[W] = new D(Y, V, !G, K);
						}
						return new m.$Csb(m.EditOperationType.TypingOther, J, {
							shouldPushStackElementBefore: !0,
							shouldPushStackElementAfter: !1,
						});
					}
					static getAutoClosingPairClose(q, V, G, K, J) {
						for (const Q of G) if (!Q.isEmpty()) return null;
						const W = G.map((Q) => {
								const Z = Q.getPosition();
								return J
									? {
											lineNumber: Z.lineNumber,
											beforeColumn: Z.column - K.length,
											afterColumn: Z.column,
										}
									: {
											lineNumber: Z.lineNumber,
											beforeColumn: Z.column,
											afterColumn: Z.column,
										};
							}),
							X = this.c(
								q,
								V,
								W.map((Q) => new a.$hL(Q.lineNumber, Q.beforeColumn)),
								K,
							);
						if (!X) return null;
						let Y, ie;
						if (
							((0, m.$Dsb)(K)
								? ((Y = q.autoClosingQuotes),
									(ie = q.shouldAutoCloseBefore.quote))
								: (
											q.blockCommentStartToken
												? X.open.includes(q.blockCommentStartToken)
												: !1
										)
									? ((Y = q.autoClosingComments),
										(ie = q.shouldAutoCloseBefore.comment))
									: ((Y = q.autoClosingBrackets),
										(ie = q.shouldAutoCloseBefore.bracket)),
							Y === "never")
						)
							return null;
						const ee = this.b(q, X),
							_ = ee ? ee.close : "";
						let te = !0;
						for (const Q of W) {
							const { lineNumber: Z, beforeColumn: se, afterColumn: re } = Q,
								le = V.getLineContent(Z),
								oe = le.substring(0, se - 1),
								ae = le.substring(re - 1);
							if ((ae.startsWith(_) || (te = !1), ae.length > 0)) {
								const ue = ae.charAt(0);
								if (!this.d(q, ae) && !ie(ue)) return null;
							}
							if (
								X.open.length === 1 &&
								(K === "'" || K === '"') &&
								Y !== "always"
							) {
								const ue = (0, r.$QL)(q.wordSeparators, []);
								if (oe.length > 0) {
									const fe = oe.charCodeAt(oe.length - 1);
									if (ue.get(fe) === r.WordCharacterClass.Regular) return null;
								}
							}
							if (!V.tokenization.isCheapToTokenize(Z)) return null;
							V.tokenization.forceTokenization(Z);
							const pe = V.tokenization.getLineTokens(Z),
								$e = (0, g.$oM)(pe, se - 1);
							if (!X.shouldAutoClose($e, se - $e.firstCharOffset)) return null;
							const ye = X.findNeutralCharacter();
							if (ye) {
								const ue = V.tokenization.getTokenTypeIfInsertingCharacter(
									Z,
									se,
									ye,
								);
								if (!X.isOK(ue)) return null;
							}
						}
						return te
							? X.close.substring(0, X.close.length - _.length)
							: X.close;
					}
					static b(q, V) {
						if (V.open.length <= 1) return null;
						const G = V.close.charAt(V.close.length - 1),
							K = q.autoClosingPairs.autoClosingPairsCloseByEnd.get(G) || [];
						let J = null;
						for (const W of K)
							W.open !== V.open &&
								V.open.includes(W.open) &&
								V.close.endsWith(W.close) &&
								(!J || W.open.length > J.open.length) &&
								(J = W);
						return J;
					}
					static c(q, V, G, K) {
						const J = q.autoClosingPairs.autoClosingPairsOpenByEnd.get(K);
						if (!J) return null;
						let W = null;
						for (const X of J)
							if (W === null || X.open.length > W.open.length) {
								let Y = !0;
								for (const ie of G)
									if (
										V.getValueInRange(
											new u.$iL(
												ie.lineNumber,
												ie.column - X.open.length + 1,
												ie.lineNumber,
												ie.column,
											),
										) +
											K !==
										X.open
									) {
										Y = !1;
										break;
									}
								Y && (W = X);
							}
						return W;
					}
					static d(q, V) {
						const G = V.charAt(0),
							K = q.autoClosingPairs.autoClosingPairsOpenByStart.get(G) || [],
							J = q.autoClosingPairs.autoClosingPairsCloseByStart.get(G) || [],
							W = K.some((Y) => V.startsWith(Y.open)),
							X = J.some((Y) => V.startsWith(Y.close));
						return !W && X;
					}
				}
				e.$Xtb = l;
				class y {
					static getEdits(q, V, G, K, J) {
						if (!J && this.b(q, V, G, K)) return this.a(q, G, K);
					}
					static a(q, V, G) {
						const K = [];
						for (let J = 0, W = V.length; J < W; J++) {
							const X = V[J],
								Y = q.surroundingPairs[G];
							K[J] = new d.$Stb(X, G, Y);
						}
						return new m.$Csb(m.EditOperationType.Other, K, {
							shouldPushStackElementBefore: !0,
							shouldPushStackElementAfter: !0,
						});
					}
					static b(q, V, G, K) {
						if (!x(q, K) || !q.surroundingPairs.hasOwnProperty(K)) return !1;
						const J = (0, m.$Dsb)(K);
						for (const W of G) {
							if (W.isEmpty()) return !1;
							let X = !0;
							for (let Y = W.startLineNumber; Y <= W.endLineNumber; Y++) {
								const ie = V.getLineContent(Y),
									ne = Y === W.startLineNumber ? W.startColumn - 1 : 0,
									ee = Y === W.endLineNumber ? W.endColumn - 1 : ie.length,
									_ = ie.substring(ne, ee);
								if (/[^ \t]/.test(_)) {
									X = !1;
									break;
								}
							}
							if (X) return !1;
							if (
								J &&
								W.startLineNumber === W.endLineNumber &&
								W.startColumn + 1 === W.endColumn
							) {
								const Y = V.getValueInRange(W);
								if ((0, m.$Dsb)(Y)) return !1;
							}
						}
						return !0;
					}
				}
				e.$Ytb = y;
				class $ {
					static getEdits(q, V, G, K, J, W) {
						if (!W && this.a(V, G, K)) {
							const X = this.b(q, V, G, K[0], J);
							if (X) return X;
						}
					}
					static a(q, V, G) {
						return !!(
							G.length === 1 &&
							V.tokenization.isCheapToTokenize(G[0].getEndPosition().lineNumber)
						);
					}
					static b(q, V, G, K, J) {
						if (!V.electricChars.hasOwnProperty(J) || !K.isEmpty()) return null;
						const W = K.getPosition();
						G.tokenization.forceTokenization(W.lineNumber);
						const X = G.tokenization.getLineTokens(W.lineNumber);
						let Y;
						try {
							Y = V.onElectricCharacter(J, X, W.column);
						} catch (ie) {
							return (0, i.$4)(ie), null;
						}
						if (!Y) return null;
						if (Y.matchOpenBracket) {
							const ie =
									(X.getLineContent() + J).lastIndexOf(Y.matchOpenBracket) + 1,
								ne = G.bracketPairs.findMatchingBracketUp(
									Y.matchOpenBracket,
									{ lineNumber: W.lineNumber, column: ie },
									500,
								);
							if (ne) {
								if (ne.startLineNumber === W.lineNumber) return null;
								const ee = G.getLineContent(ne.startLineNumber),
									_ = w.$Cf(ee),
									te = V.normalizeIndentation(_),
									Q = G.getLineContent(W.lineNumber),
									Z =
										G.getLineFirstNonWhitespaceColumn(W.lineNumber) || W.column,
									se = Q.substring(Z - 1, W.column - 1),
									re = te + se + J,
									le = new u.$iL(W.lineNumber, 1, W.lineNumber, W.column),
									oe = new E.$wtb(le, re);
								return new m.$Csb(N(re, q), [oe], {
									shouldPushStackElementBefore: !1,
									shouldPushStackElementAfter: !0,
								});
							}
						}
						return null;
					}
				}
				e.$Ztb = $;
				class v {
					static getEdits(q, V, G) {
						const K = [];
						for (let W = 0, X = V.length; W < X; W++)
							K[W] = new E.$wtb(V[W], G);
						const J = N(G, q);
						return new m.$Csb(J, K, {
							shouldPushStackElementBefore: A(q, J),
							shouldPushStackElementAfter: !1,
						});
					}
				}
				e.$1tb = v;
				class S {
					static getEdits(q, V, G, K, J) {
						if (
							!J &&
							K ===
								`
`
						) {
							const W = [];
							for (let X = 0, Y = G.length; X < Y; X++)
								W[X] = this.a(q, V, !1, G[X]);
							return new m.$Csb(m.EditOperationType.TypingOther, W, {
								shouldPushStackElementBefore: !0,
								shouldPushStackElementAfter: !1,
							});
						}
					}
					static a(q, V, G, K) {
						if (q.autoIndent === n.EditorAutoIndentStrategy.None)
							return U(
								K,
								`
`,
								G,
							);
						if (
							!V.tokenization.isCheapToTokenize(
								K.getStartPosition().lineNumber,
							) ||
							q.autoIndent === n.EditorAutoIndentStrategy.Keep
						) {
							const Y = V.getLineContent(K.startLineNumber),
								ie = w.$Cf(Y).substring(0, K.startColumn - 1);
							return U(
								K,
								`
` + q.normalizeIndentation(ie),
								G,
							);
						}
						const J = (0, o.$Qtb)(
							q.autoIndent,
							V,
							K,
							q.languageConfigurationService,
						);
						if (J) {
							if (J.indentAction === h.IndentAction.None)
								return U(
									K,
									`
` + q.normalizeIndentation(J.indentation + J.appendText),
									G,
								);
							if (J.indentAction === h.IndentAction.Indent)
								return U(
									K,
									`
` + q.normalizeIndentation(J.indentation + J.appendText),
									G,
								);
							if (J.indentAction === h.IndentAction.IndentOutdent) {
								const Y = q.normalizeIndentation(J.indentation),
									ie = q.normalizeIndentation(J.indentation + J.appendText),
									ne =
										`
` +
										ie +
										`
` +
										Y;
								return G
									? new E.$ytb(K, ne, !0)
									: new E.$ztb(K, ne, -1, ie.length - Y.length, !0);
							} else if (J.indentAction === h.IndentAction.Outdent) {
								const Y = F(q, J.indentation);
								return U(
									K,
									`
` + q.normalizeIndentation(Y + J.appendText),
									G,
								);
							}
						}
						const W = V.getLineContent(K.startLineNumber),
							X = w.$Cf(W).substring(0, K.startColumn - 1);
						if (q.autoIndent >= n.EditorAutoIndentStrategy.Full) {
							const Y = (0, p.$Ktb)(
								q.autoIndent,
								V,
								K,
								{
									unshiftIndent: (ie) => F(q, ie),
									shiftIndent: (ie) => z(q, ie),
									normalizeIndentation: (ie) => q.normalizeIndentation(ie),
								},
								q.languageConfigurationService,
							);
							if (Y) {
								let ie = q.visibleColumnFromColumn(V, K.getEndPosition());
								const ne = K.endColumn,
									ee = V.getLineContent(K.endLineNumber),
									_ = w.$Bf(ee);
								if (
									(_ >= 0
										? (K = K.setEndPosition(
												K.endLineNumber,
												Math.max(K.endColumn, _ + 1),
											))
										: (K = K.setEndPosition(
												K.endLineNumber,
												V.getLineMaxColumn(K.endLineNumber),
											)),
									G)
								)
									return new E.$ytb(
										K,
										`
` + q.normalizeIndentation(Y.afterEnter),
										!0,
									);
								{
									let te = 0;
									return (
										ne <= _ + 1 &&
											(q.insertSpaces || (ie = Math.ceil(ie / q.indentSize)),
											(te = Math.min(
												ie +
													1 -
													q.normalizeIndentation(Y.afterEnter).length -
													1,
												0,
											))),
										new E.$ztb(
											K,
											`
` + q.normalizeIndentation(Y.afterEnter),
											0,
											te,
											!0,
										)
									);
								}
							}
						}
						return U(
							K,
							`
` + q.normalizeIndentation(X),
							G,
						);
					}
					static lineInsertBefore(q, V, G) {
						if (V === null || G === null) return [];
						const K = [];
						for (let J = 0, W = G.length; J < W; J++) {
							let X = G[J].positionLineNumber;
							if (X === 1)
								K[J] = new E.$ytb(
									new u.$iL(1, 1, 1, 1),
									`
`,
								);
							else {
								X--;
								const Y = V.getLineMaxColumn(X);
								K[J] = this.a(q, V, !1, new u.$iL(X, Y, X, Y));
							}
						}
						return K;
					}
					static lineInsertAfter(q, V, G) {
						if (V === null || G === null) return [];
						const K = [];
						for (let J = 0, W = G.length; J < W; J++) {
							const X = G[J].positionLineNumber,
								Y = V.getLineMaxColumn(X);
							K[J] = this.a(q, V, !1, new u.$iL(X, Y, X, Y));
						}
						return K;
					}
					static lineBreakInsert(q, V, G) {
						const K = [];
						for (let J = 0, W = G.length; J < W; J++)
							K[J] = this.a(q, V, !0, G[J]);
						return K;
					}
				}
				e.$2tb = S;
				class I {
					static getEdits(q, V, G, K, J, W) {
						const X = this.a(q, G, K, J, W);
						return X
							? ((G = G.sort(u.$iL.compareRangesUsingStarts)),
								this.b(q, V, G, X))
							: this.c(q, V, G, K, J);
					}
					static a(q, V, G, K, J) {
						if (K || V.length === 1) return null;
						if (J && J.length === V.length) return J;
						if (q.multiCursorPaste === "spread") {
							G.charCodeAt(G.length - 1) === t.CharCode.LineFeed &&
								(G = G.substring(0, G.length - 1)),
								G.charCodeAt(G.length - 1) === t.CharCode.CarriageReturn &&
									(G = G.substring(0, G.length - 1));
							const W = w.$zf(G);
							if (W.length === V.length) return W;
						}
						return null;
					}
					static b(q, V, G, K) {
						const J = [];
						for (let W = 0, X = G.length; W < X; W++)
							J[W] = new E.$wtb(G[W], K[W]);
						return new m.$Csb(m.EditOperationType.Other, J, {
							shouldPushStackElementBefore: !0,
							shouldPushStackElementAfter: !0,
						});
					}
					static c(q, V, G, K, J) {
						const W = [];
						for (let X = 0, Y = G.length; X < Y; X++) {
							const ie = G[X],
								ne = ie.getPosition();
							if (
								(J && !ie.isEmpty() && (J = !1),
								J &&
									K.indexOf(`
`) !==
										K.length - 1 &&
									(J = !1),
								J)
							) {
								const ee = new u.$iL(ne.lineNumber, 1, ne.lineNumber, 1);
								W[X] = new E.$Atb(ee, K, ie, !0);
							} else W[X] = new E.$wtb(ie, K);
						}
						return new m.$Csb(m.EditOperationType.Other, W, {
							shouldPushStackElementBefore: !0,
							shouldPushStackElementAfter: !0,
						});
					}
				}
				e.$3tb = I;
				class T {
					static getEdits(q, V, G, K, J, W, X, Y) {
						const ie = K.map((ne) => this.a(G, ne, J, W, X, Y));
						return new m.$Csb(m.EditOperationType.TypingOther, ie, {
							shouldPushStackElementBefore: A(
								q,
								m.EditOperationType.TypingOther,
							),
							shouldPushStackElementAfter: !1,
						});
					}
					static a(q, V, G, K, J, W) {
						if (!V.isEmpty()) return null;
						const X = V.getPosition(),
							Y = Math.max(1, X.column - K),
							ie = Math.min(q.getLineMaxColumn(X.lineNumber), X.column + J),
							ne = new u.$iL(X.lineNumber, Y, X.lineNumber, ie);
						return q.getValueInRange(ne) === G && W === 0
							? null
							: new E.$ztb(ne, G, 0, W);
					}
				}
				e.$4tb = T;
				class P {
					static getEdits(q, V, G) {
						const K = [];
						for (let W = 0, X = V.length; W < X; W++)
							K[W] = new E.$wtb(V[W], G);
						const J = N(G, q);
						return new m.$Csb(J, K, {
							shouldPushStackElementBefore: A(q, J),
							shouldPushStackElementAfter: !1,
						});
					}
				}
				e.$5tb = P;
				class k {
					static getCommands(q, V, G) {
						const K = [];
						for (let J = 0, W = G.length; J < W; J++) {
							const X = G[J];
							if (X.isEmpty()) {
								const Y = V.getLineContent(X.startLineNumber);
								if (
									/^\s*$/.test(Y) &&
									V.tokenization.isCheapToTokenize(X.startLineNumber)
								) {
									let ie = this.a(q, V, X.startLineNumber);
									ie = ie || "	";
									const ne = q.normalizeIndentation(ie);
									if (!Y.startsWith(ne)) {
										K[J] = new E.$wtb(
											new u.$iL(
												X.startLineNumber,
												1,
												X.startLineNumber,
												Y.length + 1,
											),
											ne,
											!0,
										);
										continue;
									}
								}
								K[J] = this.b(q, V, X, !0);
							} else {
								if (X.startLineNumber === X.endLineNumber) {
									const Y = V.getLineMaxColumn(X.startLineNumber);
									if (X.startColumn !== 1 || X.endColumn !== Y) {
										K[J] = this.b(q, V, X, !1);
										continue;
									}
								}
								K[J] = new C.$Rtb(
									X,
									{
										isUnshift: !1,
										tabSize: q.tabSize,
										indentSize: q.indentSize,
										insertSpaces: q.insertSpaces,
										useTabStops: q.useTabStops,
										autoIndent: q.autoIndent,
									},
									q.languageConfigurationService,
								);
							}
						}
						return K;
					}
					static a(q, V, G) {
						let K = null,
							J = "";
						const W = (0, p.$Itb)(
							q.autoIndent,
							V,
							G,
							!1,
							q.languageConfigurationService,
						);
						if (W) (K = W.action), (J = W.indentation);
						else if (G > 1) {
							let X;
							for (X = G - 1; X >= 1; X--) {
								const ne = V.getLineContent(X);
								if (w.$Df(ne) >= 0) break;
							}
							if (X < 1) return null;
							const Y = V.getLineMaxColumn(X),
								ie = (0, o.$Qtb)(
									q.autoIndent,
									V,
									new u.$iL(X, Y, X, Y),
									q.languageConfigurationService,
								);
							ie && (J = ie.indentation + ie.appendText);
						}
						return (
							K &&
								(K === h.IndentAction.Indent && (J = z(q, J)),
								K === h.IndentAction.Outdent && (J = F(q, J)),
								(J = q.normalizeIndentation(J))),
							J || null
						);
					}
					static b(q, V, G, K) {
						let J = "";
						const W = G.getStartPosition();
						if (q.insertSpaces) {
							const X = q.visibleColumnFromColumn(V, W),
								Y = q.indentSize,
								ie = Y - (X % Y);
							for (let ne = 0; ne < ie; ne++) J += " ";
						} else J = "	";
						return new E.$wtb(G, J, K);
					}
				}
				e.$6tb = k;
				class L extends E.$ztb {
					constructor(q, V, G, K, J, W) {
						super(q, V, G, K),
							(this.f = J),
							(this.g = W),
							(this.closeCharacterRange = null),
							(this.enclosingRange = null);
					}
					h(q, V, G) {
						return (
							(this.closeCharacterRange = new u.$iL(
								V.startLineNumber,
								V.endColumn - this.g.length,
								V.endLineNumber,
								V.endColumn,
							)),
							(this.enclosingRange = new u.$iL(
								V.startLineNumber,
								V.endColumn - this.f.length - this.g.length,
								V.endLineNumber,
								V.endColumn,
							)),
							super.computeCursorState(q, G)
						);
					}
				}
				e.$7tb = L;
				class D extends L {
					constructor(q, V, G, K) {
						const J = (G ? V : "") + K,
							W = 0,
							X = -K.length;
						super(q, J, W, X, V, K);
					}
					computeCursorState(q, V) {
						const K = V.getInverseEditOperations()[0].range;
						return this.h(q, K, V);
					}
				}
				class M extends L {
					constructor(q, V, G, K) {
						const J = G + K,
							W = 0,
							X = G.length;
						super(V, J, W, X, G, K),
							(this.k = q),
							(this.l = { range: V, text: J });
					}
					getEditOperations(q, V) {
						V.addTrackedEditOperation(this.k.range, this.k.text),
							V.addTrackedEditOperation(this.l.range, this.l.text);
					}
					computeCursorState(q, V) {
						const G = V.getInverseEditOperations();
						if (G.length !== 2)
							throw new Error("There should be two inverse edit operations!");
						const K = G[0].range,
							J = G[1].range,
							W = K.plusRange(J);
						return this.h(q, W, V);
					}
				}
				function N(H, q) {
					return H === " "
						? q === m.EditOperationType.TypingFirstSpace ||
							q === m.EditOperationType.TypingConsecutiveSpace
							? m.EditOperationType.TypingConsecutiveSpace
							: m.EditOperationType.TypingFirstSpace
						: m.EditOperationType.TypingOther;
				}
				function A(H, q) {
					return O(H) && !O(q)
						? !0
						: H === m.EditOperationType.TypingFirstSpace
							? !1
							: R(H) !== R(q);
				}
				function R(H) {
					return H === m.EditOperationType.TypingConsecutiveSpace ||
						H === m.EditOperationType.TypingFirstSpace
						? "space"
						: H;
				}
				function O(H) {
					return (
						H === m.EditOperationType.TypingOther ||
						H === m.EditOperationType.TypingFirstSpace ||
						H === m.EditOperationType.TypingConsecutiveSpace
					);
				}
				function B(H, q, V, G, K) {
					if (
						H.autoClosingOvertype === "never" ||
						!H.autoClosingPairs.autoClosingPairsCloseSingleChar.has(K)
					)
						return !1;
					for (let J = 0, W = V.length; J < W; J++) {
						const X = V[J];
						if (!X.isEmpty()) return !1;
						const Y = X.getPosition(),
							ie = q.getLineContent(Y.lineNumber);
						if (ie.charAt(Y.column - 1) !== K) return !1;
						const ee = (0, m.$Dsb)(K);
						if (
							(Y.column > 2 ? ie.charCodeAt(Y.column - 2) : t.CharCode.Null) ===
								t.CharCode.Backslash &&
							ee
						)
							return !1;
						if (H.autoClosingOvertype === "auto") {
							let te = !1;
							for (let Q = 0, Z = G.length; Q < Z; Q++) {
								const se = G[Q];
								if (
									Y.lineNumber === se.startLineNumber &&
									Y.column === se.startColumn
								) {
									te = !0;
									break;
								}
							}
							if (!te) return !1;
						}
					}
					return !0;
				}
				function U(H, q, V) {
					return V ? new E.$ytb(H, q, !0) : new E.$wtb(H, q, !0);
				}
				function z(H, q, V) {
					return (
						(V = V || 1),
						C.$Rtb.shiftIndent(
							q,
							q.length + V,
							H.tabSize,
							H.indentSize,
							H.insertSpaces,
						)
					);
				}
				function F(H, q, V) {
					return (
						(V = V || 1),
						C.$Rtb.unshiftIndent(
							q,
							q.length + V,
							H.tabSize,
							H.indentSize,
							H.insertSpaces,
						)
					);
				}
				function x(H, q) {
					return (0, m.$Dsb)(q)
						? H.autoSurround === "quotes" ||
								H.autoSurround === "languageDefined"
						: H.autoSurround === "brackets" ||
								H.autoSurround === "languageDefined";
				}
			},
		),
		define(
			de[949],
			he([1, 0, 771, 1527, 346, 948]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$_tb = e.$$tb = void 0);
				class C {
					static indent(r, u, a) {
						if (u === null || a === null) return [];
						const h = [];
						for (let c = 0, n = a.length; c < n; c++)
							h[c] = new t.$Rtb(
								a[c],
								{
									isUnshift: !1,
									tabSize: r.tabSize,
									indentSize: r.indentSize,
									insertSpaces: r.insertSpaces,
									useTabStops: r.useTabStops,
									autoIndent: r.autoIndent,
								},
								r.languageConfigurationService,
							);
						return h;
					}
					static outdent(r, u, a) {
						const h = [];
						for (let c = 0, n = a.length; c < n; c++)
							h[c] = new t.$Rtb(
								a[c],
								{
									isUnshift: !0,
									tabSize: r.tabSize,
									indentSize: r.indentSize,
									insertSpaces: r.insertSpaces,
									useTabStops: r.useTabStops,
									autoIndent: r.autoIndent,
								},
								r.languageConfigurationService,
							);
						return h;
					}
					static shiftIndent(r, u, a) {
						return (0, E.$8tb)(r, u, a);
					}
					static unshiftIndent(r, u, a) {
						return (0, E.$9tb)(r, u, a);
					}
					static paste(r, u, a, h, c, n) {
						return E.$3tb.getEdits(r, u, a, h, c, n);
					}
					static tab(r, u, a) {
						return E.$6tb.getCommands(r, u, a);
					}
					static compositionType(r, u, a, h, c, n, g, p) {
						return E.$4tb.getEdits(r, u, a, h, c, n, g, p);
					}
					static compositionEndWithInterceptors(r, u, a, h, c, n) {
						if (!h) return null;
						let g = null;
						for (const s of h)
							if (g === null) g = s.insertedText;
							else if (g !== s.insertedText) return null;
						if (!g || g.length !== 1) return null;
						const p = g;
						let o = !1;
						for (const s of h)
							if (s.deletedText.length !== 0) {
								o = !0;
								break;
							}
						if (o) {
							if (!(0, E.$0tb)(u, p) || !u.surroundingPairs.hasOwnProperty(p))
								return null;
							const s = (0, w.$Dsb)(p);
							for (const $ of h)
								if (
									$.deletedSelectionStart !== 0 ||
									$.deletedSelectionEnd !== $.deletedText.length ||
									/^[ \t]+$/.test($.deletedText) ||
									(s && (0, w.$Dsb)($.deletedText))
								)
									return null;
							const l = [];
							for (const $ of c) {
								if (!$.isEmpty()) return null;
								l.push($.getPosition());
							}
							if (l.length !== h.length) return null;
							const y = [];
							for (let $ = 0, v = l.length; $ < v; $++)
								y.push(
									new i.$Ttb(l[$], h[$].deletedText, u.surroundingPairs[p]),
								);
							return new w.$Csb(w.EditOperationType.TypingOther, y, {
								shouldPushStackElementBefore: !0,
								shouldPushStackElementAfter: !1,
							});
						}
						const f = E.$Wtb.getEdits(u, a, c, n, p);
						if (f !== void 0) return f;
						const b = E.$Xtb.getEdits(u, a, c, p, !0, !1);
						return b !== void 0 ? b : null;
					}
					static typeWithInterceptors(r, u, a, h, c, n, g) {
						const p = E.$2tb.getEdits(a, h, c, g, r);
						if (p !== void 0) return p;
						const o = E.$Utb.getEdits(a, h, c, g, r);
						if (o !== void 0) return o;
						const f = E.$Vtb.getEdits(u, a, h, c, n, g);
						if (f !== void 0) return f;
						const b = E.$Xtb.getEdits(a, h, c, g, !1, r);
						if (b !== void 0) return b;
						const s = E.$Ytb.getEdits(a, h, c, g, r);
						if (s !== void 0) return s;
						const l = E.$Ztb.getEdits(u, a, h, c, g, r);
						return l !== void 0 ? l : E.$1tb.getEdits(u, c, g);
					}
					static typeWithoutInterceptors(r, u, a, h, c) {
						return E.$5tb.getEdits(r, h, c);
					}
				}
				e.$$tb = C;
				class d {
					constructor(r, u, a, h, c, n) {
						(this.deletedText = r),
							(this.deletedSelectionStart = u),
							(this.deletedSelectionEnd = a),
							(this.insertedText = h),
							(this.insertedSelectionStart = c),
							(this.insertedSelectionEnd = n);
					}
				}
				e.$_tb = d;
			},
		),
		define(
			de[1199],
			he([
				1, 0, 29, 37, 2761, 346, 2550, 943, 248, 949, 948, 17, 104, 98, 64, 590,
				493, 3, 751,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$awb = e.$_vb = void 0),
					(i = mt(i)),
					(c = mt(c));
				class b extends o.$1c {
					constructor(I, T, P, k) {
						super(),
							(this.c = I),
							(this.f = this.c.getVersionId()),
							(this.g = T),
							(this.h = P),
							(this.context = new C.$Tvb(this.c, this.g, this.h, k)),
							(this.n = new w.$Vvb(this.context)),
							(this.q = !1),
							(this.t = !1),
							(this.u = null),
							(this.w = null),
							(this.y = []),
							(this.z = E.EditOperationType.Other);
					}
					dispose() {
						this.n.dispose(), (this.y = (0, o.$Vc)(this.y)), super.dispose();
					}
					updateConfiguration(I) {
						(this.context = new C.$Tvb(this.c, this.g, this.h, I)),
							this.n.updateContext(this.context);
					}
					onLineMappingChanged(I) {
						this.f === this.c.getVersionId() &&
							this.setStates(
								I,
								"viewModel",
								m.CursorChangeReason.NotSet,
								this.getCursorStates(),
							);
					}
					setHasFocus(I) {
						this.q = I;
					}
					C() {
						if (this.y.length > 0) {
							const I = this.n.getSelections();
							for (let T = 0; T < this.y.length; T++) {
								const P = this.y[T];
								P.isValid(I) || (P.dispose(), this.y.splice(T, 1), T--);
							}
						}
					}
					getPrimaryCursorState() {
						return this.n.getPrimaryCursor();
					}
					getLastAddedCursorIndex() {
						return this.n.getLastAddedCursorIndex();
					}
					getCursorStates() {
						return this.n.getAll();
					}
					setStates(I, T, P, k) {
						let L = !1;
						const D = this.context.cursorConfig.multiCursorLimit;
						k !== null && k.length > D && ((k = k.slice(0, D)), (L = !0));
						const M = s.from(this.c, this);
						return (
							this.n.setStates(k),
							this.n.normalize(),
							(this.w = null),
							this.C(),
							this.I(I, T, P, M, L)
						);
					}
					setCursorColumnSelectData(I) {
						this.w = I;
					}
					revealAll(I, T, P, k, L, D) {
						const M = this.n.getViewPositions();
						let N = null,
							A = null;
						M.length > 1
							? (A = this.n.getViewSelections())
							: (N = a.$iL.fromPositions(M[0], M[0])),
							I.emitViewEvent(new p.$Rsb(T, P, N, A, k, L, D));
					}
					revealPrimary(I, T, P, k, L, D) {
						const N = [this.n.getPrimaryCursor().viewState.selection];
						I.emitViewEvent(new p.$Rsb(T, P, null, N, k, L, D));
					}
					saveState() {
						const I = [],
							T = this.n.getSelections();
						for (let P = 0, k = T.length; P < k; P++) {
							const L = T[P];
							I.push({
								inSelectionMode: !L.isEmpty(),
								selectionStart: {
									lineNumber: L.selectionStartLineNumber,
									column: L.selectionStartColumn,
								},
								position: {
									lineNumber: L.positionLineNumber,
									column: L.positionColumn,
								},
							});
						}
						return I;
					}
					restoreState(I, T) {
						const P = [];
						for (let k = 0, L = T.length; k < L; k++) {
							const D = T[k];
							let M = 1,
								N = 1;
							D.position &&
								D.position.lineNumber &&
								(M = D.position.lineNumber),
								D.position && D.position.column && (N = D.position.column);
							let A = M,
								R = N;
							D.selectionStart &&
								D.selectionStart.lineNumber &&
								(A = D.selectionStart.lineNumber),
								D.selectionStart &&
									D.selectionStart.column &&
									(R = D.selectionStart.column),
								P.push({
									selectionStartLineNumber: A,
									selectionStartColumn: R,
									positionLineNumber: M,
									positionColumn: N,
								});
						}
						this.setStates(
							I,
							"restoreState",
							m.CursorChangeReason.NotSet,
							E.$ysb.fromModelSelections(P),
						),
							this.revealAll(
								I,
								"restoreState",
								!1,
								p.VerticalRevealType.Simple,
								!0,
								c.ScrollType.Immediate,
							);
					}
					onModelContentChanged(I, T) {
						if (T instanceof g.$AN) {
							if (this.t) return;
							this.t = !0;
							try {
								this.setStates(
									I,
									"modelChange",
									m.CursorChangeReason.NotSet,
									this.getCursorStates(),
								);
							} finally {
								this.t = !1;
							}
						} else {
							const P = T.rawContentChangedEvent;
							if (((this.f = P.versionId), this.t)) return;
							const k = P.containsEvent(g.RawContentChangedType.Flush);
							if (((this.z = E.EditOperationType.Other), k))
								this.n.dispose(),
									(this.n = new w.$Vvb(this.context)),
									this.C(),
									this.I(
										I,
										"model",
										m.CursorChangeReason.ContentFlush,
										null,
										!1,
									);
							else if (
								this.q &&
								P.resultingSelection &&
								P.resultingSelection.length > 0
							) {
								const L = E.$ysb.fromModelSelections(P.resultingSelection);
								this.setStates(
									I,
									"modelChange",
									P.isUndoing
										? m.CursorChangeReason.Undo
										: P.isRedoing
											? m.CursorChangeReason.Redo
											: m.CursorChangeReason.RecoverFromMarkers,
									L,
								) &&
									this.revealAll(
										I,
										"modelChange",
										!1,
										p.VerticalRevealType.Simple,
										!0,
										c.ScrollType.Smooth,
									);
							} else {
								const L = this.n.readSelectionFromMarkers();
								this.setStates(
									I,
									"modelChange",
									m.CursorChangeReason.RecoverFromMarkers,
									E.$ysb.fromModelSelections(L),
								);
							}
						}
					}
					getSelection() {
						return this.n.getPrimaryCursor().modelState.selection;
					}
					getTopMostViewPosition() {
						return this.n.getTopMostViewPosition();
					}
					getBottomMostViewPosition() {
						return this.n.getBottomMostViewPosition();
					}
					getCursorColumnSelectData() {
						if (this.w) return this.w;
						const I = this.n.getPrimaryCursor(),
							T = I.viewState.selectionStart.getStartPosition(),
							P = I.viewState.position;
						return {
							isReal: !1,
							fromViewLineNumber: T.lineNumber,
							fromViewVisualColumn:
								this.context.cursorConfig.visibleColumnFromColumn(this.g, T),
							toViewLineNumber: P.lineNumber,
							toViewVisualColumn:
								this.context.cursorConfig.visibleColumnFromColumn(this.g, P),
						};
					}
					getSelections() {
						return this.n.getSelections();
					}
					getPosition() {
						return this.n.getPrimaryCursor().modelState.position;
					}
					setSelections(I, T, P, k) {
						this.setStates(I, T, k, E.$ysb.fromModelSelections(P));
					}
					getPrevEditOperationType() {
						return this.z;
					}
					setPrevEditOperationType(I) {
						this.z = I;
					}
					F(I, T) {
						const P = [],
							k = [];
						for (let M = 0, N = I.length; M < N; M++)
							P.push({
								range: I[M],
								options: {
									description: "auto-closed-character",
									inlineClassName: "auto-closed-character",
									stickiness:
										n.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
								},
							}),
								k.push({
									range: T[M],
									options: {
										description: "auto-closed-enclosing",
										stickiness:
											n.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
									},
								});
						const L = this.c.deltaDecorations([], P),
							D = this.c.deltaDecorations([], k);
						this.y.push(new l(this.c, L, D));
					}
					G(I) {
						if (!I) return;
						I.shouldPushStackElementBefore && this.c.pushStackElement();
						const T = y.executeCommands(
							this.c,
							this.n.getSelections(),
							I.commands,
						);
						if (T) {
							this.H(T);
							const P = [],
								k = [];
							for (let L = 0; L < I.commands.length; L++) {
								const D = I.commands[L];
								D instanceof u.$7tb &&
									D.enclosingRange &&
									D.closeCharacterRange &&
									(P.push(D.closeCharacterRange), k.push(D.enclosingRange));
							}
							P.length > 0 && this.F(P, k), (this.z = I.type);
						}
						I.shouldPushStackElementAfter && this.c.pushStackElement();
					}
					H(I) {
						(!I || I.length === 0) && (I = this.n.readSelectionFromMarkers()),
							(this.w = null),
							this.n.setSelections(I),
							this.n.normalize();
					}
					I(I, T, P, k, L) {
						const D = s.from(this.c, this);
						if (D.equals(k)) return !1;
						const M = this.n.getSelections(),
							N = this.n.getViewSelections();
						if (
							(I.emitViewEvent(new p.$Isb(N, M, P)),
							!k ||
								k.cursorState.length !== D.cursorState.length ||
								D.cursorState.some(
									(A, R) => !A.modelState.equals(k.cursorState[R].modelState),
								))
						) {
							const A = k
									? k.cursorState.map((O) => O.modelState.selection)
									: null,
								R = k ? k.modelVersionId : 0;
							I.emitOutgoingEvent(
								new f.$4vb(A, M, R, D.modelVersionId, T || "keyboard", P, L),
							);
						}
						return !0;
					}
					J(I) {
						if (!I.length) return null;
						const T = [];
						for (let P = 0, k = I.length; P < k; P++) {
							const L = I[P];
							if (
								!L.text ||
								L.text.indexOf(`
`) >= 0
							)
								return null;
							const D = L.text.match(/([)\]}>'"`])([^)\]}>'"`]*)$/);
							if (!D) return null;
							const M = D[1],
								N =
									this.context.cursorConfig.autoClosingPairs.autoClosingPairsCloseSingleChar.get(
										M,
									);
							if (!N || N.length !== 1) return null;
							const A = N[0].open,
								R = L.text.length - D[2].length - 1,
								O = L.text.lastIndexOf(A, R - 1);
							if (O === -1) return null;
							T.push([O, R]);
						}
						return T;
					}
					executeEdits(I, T, P, k) {
						let L = null;
						T === "snippet" && (L = this.J(P)), L && (P[0]._isTracked = !0);
						const D = [],
							M = [],
							N = this.c.pushEditOperations(this.getSelections(), P, (A) => {
								if (L)
									for (let O = 0, B = L.length; O < B; O++) {
										const [U, z] = L[O],
											F = A[O],
											x = F.range.startLineNumber,
											H = F.range.startColumn - 1 + U,
											q = F.range.startColumn - 1 + z;
										D.push(new a.$iL(x, q + 1, x, q + 2)),
											M.push(new a.$iL(x, H + 1, x, q + 2));
									}
								const R = k(A);
								return R && (this.t = !0), R;
							});
						N &&
							((this.t = !1),
							this.setSelections(I, T, N, m.CursorChangeReason.NotSet)),
							D.length > 0 && this.F(D, M);
					}
					L(I, T, P, k = m.CursorChangeReason.NotSet) {
						if (this.context.cursorConfig.readOnly) return;
						const L = s.from(this.c, this);
						this.n.stopTrackingSelections(), (this.t = !0);
						try {
							this.n.ensureValidState(), I();
						} catch (D) {
							(0, t.$4)(D);
						}
						(this.t = !1),
							this.n.startTrackingSelections(),
							this.C(),
							this.I(T, P, k, L, !1) &&
								this.revealAll(
									T,
									P,
									!1,
									p.VerticalRevealType.Simple,
									!0,
									c.ScrollType.Smooth,
								);
					}
					getAutoClosedCharacters() {
						return l.getAllAutoClosedCharacters(this.y);
					}
					startComposition(I) {
						this.u = new v(this.c, this.getSelections());
					}
					endComposition(I, T) {
						const P = this.u
							? this.u.deduceOutcome(this.c, this.getSelections())
							: null;
						(this.u = null),
							this.L(
								() => {
									T === "keyboard" &&
										this.G(
											r.$$tb.compositionEndWithInterceptors(
												this.z,
												this.context.cursorConfig,
												this.c,
												P,
												this.getSelections(),
												this.getAutoClosedCharacters(),
											),
										);
								},
								I,
								T,
							);
					}
					type(I, T, P) {
						this.L(
							() => {
								if (P === "keyboard") {
									const k = T.length;
									let L = 0;
									for (; L < k; ) {
										const D = i.$Wf(T, L),
											M = T.substr(L, D);
										this.G(
											r.$$tb.typeWithInterceptors(
												!!this.u,
												this.z,
												this.context.cursorConfig,
												this.c,
												this.getSelections(),
												this.getAutoClosedCharacters(),
												M,
											),
										),
											(L += D);
									}
								} else
									this.G(
										r.$$tb.typeWithoutInterceptors(
											this.z,
											this.context.cursorConfig,
											this.c,
											this.getSelections(),
											T,
										),
									);
							},
							I,
							P,
						);
					}
					compositionType(I, T, P, k, L, D) {
						if (T.length === 0 && P === 0 && k === 0) {
							if (L !== 0) {
								const M = this.getSelections().map((N) => {
									const A = N.getPosition();
									return new h.$kL(
										A.lineNumber,
										A.column + L,
										A.lineNumber,
										A.column + L,
									);
								});
								this.setSelections(I, D, M, m.CursorChangeReason.NotSet);
							}
							return;
						}
						this.L(
							() => {
								this.G(
									r.$$tb.compositionType(
										this.z,
										this.context.cursorConfig,
										this.c,
										this.getSelections(),
										T,
										P,
										k,
										L,
									),
								);
							},
							I,
							D,
						);
					}
					paste(I, T, P, k, L) {
						this.L(
							() => {
								this.G(
									r.$$tb.paste(
										this.context.cursorConfig,
										this.c,
										this.getSelections(),
										T,
										P,
										k || [],
									),
								);
							},
							I,
							L,
							m.CursorChangeReason.Paste,
						);
					}
					cut(I, T) {
						this.L(
							() => {
								this.G(
									d.$Etb.cut(
										this.context.cursorConfig,
										this.c,
										this.getSelections(),
									),
								);
							},
							I,
							T,
						);
					}
					executeCommand(I, T, P) {
						this.L(
							() => {
								this.n.killSecondaryCursors(),
									this.G(
										new E.$Csb(E.EditOperationType.Other, [T], {
											shouldPushStackElementBefore: !1,
											shouldPushStackElementAfter: !1,
										}),
									);
							},
							I,
							P,
						);
					}
					executeCommands(I, T, P) {
						this.L(
							() => {
								this.G(
									new E.$Csb(E.EditOperationType.Other, T, {
										shouldPushStackElementBefore: !1,
										shouldPushStackElementAfter: !1,
									}),
								);
							},
							I,
							P,
						);
					}
				}
				e.$_vb = b;
				class s {
					static from(I, T) {
						return new s(I.getVersionId(), T.getCursorStates());
					}
					constructor(I, T) {
						(this.modelVersionId = I), (this.cursorState = T);
					}
					equals(I) {
						if (
							!I ||
							this.modelVersionId !== I.modelVersionId ||
							this.cursorState.length !== I.cursorState.length
						)
							return !1;
						for (let T = 0, P = this.cursorState.length; T < P; T++)
							if (!this.cursorState[T].equals(I.cursorState[T])) return !1;
						return !0;
					}
				}
				class l {
					static getAllAutoClosedCharacters(I) {
						let T = [];
						for (const P of I) T = T.concat(P.getAutoClosedCharactersRanges());
						return T;
					}
					constructor(I, T, P) {
						(this.c = I), (this.d = T), (this.f = P);
					}
					dispose() {
						(this.d = this.c.deltaDecorations(this.d, [])),
							(this.f = this.c.deltaDecorations(this.f, []));
					}
					getAutoClosedCharactersRanges() {
						const I = [];
						for (let T = 0; T < this.d.length; T++) {
							const P = this.c.getDecorationRange(this.d[T]);
							P && I.push(P);
						}
						return I;
					}
					isValid(I) {
						const T = [];
						for (let P = 0; P < this.f.length; P++) {
							const k = this.c.getDecorationRange(this.f[P]);
							if (k && (T.push(k), k.startLineNumber !== k.endLineNumber))
								return !1;
						}
						T.sort(a.$iL.compareRangesUsingStarts),
							I.sort(a.$iL.compareRangesUsingStarts);
						for (let P = 0; P < I.length; P++)
							if (P >= T.length || !T[P].strictContainsRange(I[P])) return !1;
						return !0;
					}
				}
				class y {
					static executeCommands(I, T, P) {
						const k = {
								model: I,
								selectionsBefore: T,
								trackedRanges: [],
								trackedRangesDirection: [],
							},
							L = this.c(k, P);
						for (let D = 0, M = k.trackedRanges.length; D < M; D++)
							k.model._setTrackedRange(
								k.trackedRanges[D],
								null,
								n.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
							);
						return L;
					}
					static c(I, T) {
						if (this.d(T)) return null;
						const P = this.f(I, T);
						if (P.operations.length === 0) return null;
						const k = P.operations,
							L = this.h(k);
						if (L.hasOwnProperty("0"))
							return console.warn("Ignoring commands"), null;
						const D = [];
						for (let A = 0, R = k.length; A < R; A++)
							L.hasOwnProperty(k[A].identifier.major.toString()) ||
								D.push(k[A]);
						P.hadTrackedEditOperation && D.length > 0 && (D[0]._isTracked = !0);
						let M = I.model.pushEditOperations(I.selectionsBefore, D, (A) => {
							const R = [];
							for (let U = 0; U < I.selectionsBefore.length; U++) R[U] = [];
							for (const U of A) U.identifier && R[U.identifier.major].push(U);
							const O = (U, z) => U.identifier.minor - z.identifier.minor,
								B = [];
							for (let U = 0; U < I.selectionsBefore.length; U++)
								R[U].length > 0
									? (R[U].sort(O),
										(B[U] = T[U].computeCursorState(I.model, {
											getInverseEditOperations: () => R[U],
											getTrackedSelection: (z) => {
												const F = parseInt(z, 10),
													x = I.model._getTrackedRange(I.trackedRanges[F]);
												return I.trackedRangesDirection[F] ===
													h.SelectionDirection.LTR
													? new h.$kL(
															x.startLineNumber,
															x.startColumn,
															x.endLineNumber,
															x.endColumn,
														)
													: new h.$kL(
															x.endLineNumber,
															x.endColumn,
															x.startLineNumber,
															x.startColumn,
														);
											},
										})))
									: (B[U] = I.selectionsBefore[U]);
							return B;
						});
						M || (M = I.selectionsBefore);
						const N = [];
						for (const A in L) L.hasOwnProperty(A) && N.push(parseInt(A, 10));
						N.sort((A, R) => R - A);
						for (const A of N) M.splice(A, 1);
						return M;
					}
					static d(I) {
						for (let T = 0, P = I.length; T < P; T++) if (I[T]) return !1;
						return !0;
					}
					static f(I, T) {
						let P = [],
							k = !1;
						for (let L = 0, D = T.length; L < D; L++) {
							const M = T[L];
							if (M) {
								const N = this.g(I, L, M);
								(P = P.concat(N.operations)),
									(k = k || N.hadTrackedEditOperation);
							}
						}
						return { operations: P, hadTrackedEditOperation: k };
					}
					static g(I, T, P) {
						const k = [];
						let L = 0;
						const D = (O, B, U = !1) => {
							(a.$iL.isEmpty(O) && B === "") ||
								k.push({
									identifier: { major: T, minor: L++ },
									range: O,
									text: B,
									forceMoveMarkers: U,
									isAutoWhitespaceEdit: P.insertsAutoWhitespace,
								});
						};
						let M = !1;
						const R = {
							addEditOperation: D,
							addTrackedEditOperation: (O, B, U) => {
								(M = !0), D(O, B, U);
							},
							trackSelection: (O, B) => {
								const U = h.$kL.liftSelection(O);
								let z;
								if (U.isEmpty())
									if (typeof B == "boolean")
										B
											? (z = n.TrackedRangeStickiness.GrowsOnlyWhenTypingBefore)
											: (z = n.TrackedRangeStickiness.GrowsOnlyWhenTypingAfter);
									else {
										const H = I.model.getLineMaxColumn(U.startLineNumber);
										U.startColumn === H
											? (z = n.TrackedRangeStickiness.GrowsOnlyWhenTypingBefore)
											: (z = n.TrackedRangeStickiness.GrowsOnlyWhenTypingAfter);
									}
								else z = n.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges;
								const F = I.trackedRanges.length,
									x = I.model._setTrackedRange(null, U, z);
								return (
									(I.trackedRanges[F] = x),
									(I.trackedRangesDirection[F] = U.getDirection()),
									F.toString()
								);
							},
						};
						try {
							P.getEditOperations(I.model, R);
						} catch (O) {
							return (
								(0, t.$4)(O), { operations: [], hadTrackedEditOperation: !1 }
							);
						}
						return { operations: k, hadTrackedEditOperation: M };
					}
					static h(I) {
						(I = I.slice(0)),
							I.sort((P, k) => -a.$iL.compareRangesUsingEnds(P.range, k.range));
						const T = {};
						for (let P = 1; P < I.length; P++) {
							const k = I[P - 1],
								L = I[P];
							if (
								a.$iL
									.getStartPosition(k.range)
									.isBefore(a.$iL.getEndPosition(L.range))
							) {
								let D;
								k.identifier.major > L.identifier.major
									? (D = k.identifier.major)
									: (D = L.identifier.major),
									(T[D.toString()] = !0);
								for (let M = 0; M < I.length; M++)
									I[M].identifier.major === D &&
										(I.splice(M, 1), M < P && P--, M--);
								P > 0 && P--;
							}
						}
						return T;
					}
				}
				e.$awb = y;
				class $ {
					constructor(I, T, P) {
						(this.text = I), (this.startSelection = T), (this.endSelection = P);
					}
				}
				class v {
					static d(I, T) {
						const P = [];
						for (const k of T) {
							if (k.startLineNumber !== k.endLineNumber) return null;
							P.push(
								new $(
									I.getLineContent(k.startLineNumber),
									k.startColumn - 1,
									k.endColumn - 1,
								),
							);
						}
						return P;
					}
					constructor(I, T) {
						this.c = v.d(I, T);
					}
					deduceOutcome(I, T) {
						if (!this.c) return null;
						const P = v.d(I, T);
						if (!P || this.c.length !== P.length) return null;
						const k = [];
						for (let L = 0, D = this.c.length; L < D; L++)
							k.push(v.f(this.c[L], P[L]));
						return k;
					}
					static f(I, T) {
						const P = Math.min(
								I.startSelection,
								T.startSelection,
								i.$Of(I.text, T.text),
							),
							k = Math.min(
								I.text.length - I.endSelection,
								T.text.length - T.endSelection,
								i.$Pf(I.text, T.text),
							),
							L = I.text.substring(P, I.text.length - k),
							D = T.text.substring(P, T.text.length - k);
						return new r.$_tb(
							L,
							I.startSelection - P,
							I.endSelection - P,
							D,
							T.startSelection - P,
							T.endSelection - P,
						);
					}
				}
			},
		),
		define(
			de[2772],
			he([
				1, 0, 120, 29, 6, 3, 531, 196, 48, 409, 171, 74, 61, 152, 1539, 1590,
				1176, 2694, 763, 916, 1152, 2574, 2576,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
			) {
				"use strict";
				var $;
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$rV = void 0);
				let v = ($ = class extends n.$AU {
					constructor(T, P, k, L, D, M, N) {
						super(),
							(this.r = T),
							(this.t = P),
							(this.u = k),
							(this.w = L),
							(this.y = D),
							(this.z = M),
							(this.C = N),
							(this.a = new y.$qV(this.y.languageIdCodec)),
							(this.h = this.D(new w.$re())),
							(this.onDidChangeLanguage = this.h.event),
							(this.j = this.D(new w.$re())),
							(this.onDidChangeLanguageConfiguration = this.j.event),
							(this.m = this.D(new w.$re())),
							(this.onDidChangeTokens = this.m.event),
							(this.q = this.D(new E.$Zc())),
							this.D(
								this.z.onDidChange((A) => {
									A.affects(this.u) && this.j.fire({});
								}),
							),
							this.D(
								w.Event.filter(a.$mM.onDidChange, (A) =>
									A.changedLanguages.includes(this.u),
								)(() => {
									this.I();
								}),
							),
							this.I();
					}
					F() {
						return this.D(
							new S(this.y.languageIdCodec, this.r, () => this.u, this.w),
						);
					}
					G() {
						return this.D(
							new o.$oV(this.C, this.y.languageIdCodec, this.r, () => this.u),
						);
					}
					H(T) {
						const P = this.n !== void 0;
						this.n?.dispose(),
							(this.n = T ? this.G() : this.F()),
							this.q.clear(),
							this.q.add(
								this.n.onDidChangeTokens((k) => {
									this.J(k);
								}),
							),
							this.q.add(
								this.n.onDidChangeBackgroundTokenizationState((k) => {
									this.t.handleDidChangeBackgroundTokenizationState();
								}),
							),
							P && this.n.resetTokenization();
					}
					I() {
						a.$mM.get(this.u)
							? this.n instanceof o.$oV || this.H(!0)
							: this.n instanceof S || this.H(!1);
					}
					_hasListeners() {
						return (
							this.h.hasListeners() ||
							this.j.hasListeners() ||
							this.m.hasListeners()
						);
					}
					handleLanguageConfigurationServiceChange(T) {
						T.affects(this.u) && this.j.fire({});
					}
					handleDidChangeContent(T) {
						if (T.isFlush) this.a.flush();
						else if (!T.isEolChange)
							for (const P of T.changes) {
								const [k, L, D] = (0, C.$6L)(P.text);
								this.a.acceptEdit(
									P.range,
									k,
									L,
									D,
									P.text.length > 0 ? P.text.charCodeAt(0) : t.CharCode.Null,
								);
							}
						this.n.handleDidChangeContent(T);
					}
					handleDidChangeAttached() {
						this.n.handleDidChangeAttached();
					}
					getLineTokens(T) {
						this.L(T);
						const P = this.n.getLineTokens(T);
						return this.a.addSparseTokens(T, P);
					}
					J(T) {
						this.r._isDisposing() ||
							(this.t.handleDidChangeTokens(T), this.m.fire(T));
					}
					L(T) {
						if (T < 1 || T > this.r.getLineCount())
							throw new i.$gb("Illegal value for lineNumber");
					}
					get hasTokens() {
						return this.n.hasTokens;
					}
					resetTokenization() {
						this.n.resetTokenization();
					}
					get backgroundTokenizationState() {
						return this.n.backgroundTokenizationState;
					}
					forceTokenization(T) {
						this.L(T), this.n.forceTokenization(T);
					}
					hasAccurateTokensForLine(T) {
						return this.L(T), this.n.hasAccurateTokensForLine(T);
					}
					isCheapToTokenize(T) {
						return this.L(T), this.n.isCheapToTokenize(T);
					}
					tokenizeIfCheap(T) {
						this.L(T), this.n.tokenizeIfCheap(T);
					}
					getTokenTypeIfInsertingCharacter(T, P, k) {
						return this.n.getTokenTypeIfInsertingCharacter(T, P, k);
					}
					tokenizeLineWithEdit(T, P, k) {
						return this.n.tokenizeLineWithEdit(T, P, k);
					}
					setSemanticTokens(T, P) {
						this.a.set(T, P),
							this.J({
								semanticTokensApplied: T !== null,
								ranges: [
									{ fromLineNumber: 1, toLineNumber: this.r.getLineCount() },
								],
							});
					}
					hasCompleteSemanticTokens() {
						return this.a.isComplete();
					}
					hasSomeSemanticTokens() {
						return !this.a.isEmpty();
					}
					setPartialSemanticTokens(T, P) {
						if (this.hasCompleteSemanticTokens()) return;
						const k = this.r.validateRange(this.a.setPartial(T, P));
						this.J({
							semanticTokensApplied: !0,
							ranges: [
								{
									fromLineNumber: k.startLineNumber,
									toLineNumber: k.endLineNumber,
								},
							],
						});
					}
					getWordAtPosition(T) {
						this.g();
						const P = this.r.validatePosition(T),
							k = this.r.getLineContent(P.lineNumber),
							L = this.getLineTokens(P.lineNumber),
							D = L.findTokenIndexAtOffset(P.column - 1),
							[M, N] = $.N(L, D),
							A = (0, r.$WK)(
								P.column,
								this.M(L.getLanguageId(D)).getWordDefinition(),
								k.substring(M, N),
								M,
							);
						if (A && A.startColumn <= T.column && T.column <= A.endColumn)
							return A;
						if (D > 0 && M === P.column - 1) {
							const [R, O] = $.N(L, D - 1),
								B = (0, r.$WK)(
									P.column,
									this.M(L.getLanguageId(D - 1)).getWordDefinition(),
									k.substring(R, O),
									R,
								);
							if (B && B.startColumn <= T.column && T.column <= B.endColumn)
								return B;
						}
						return null;
					}
					M(T) {
						return this.z.getLanguageConfiguration(T);
					}
					static N(T, P) {
						const k = T.getLanguageId(P);
						let L = 0;
						for (let M = P; M >= 0 && T.getLanguageId(M) === k; M--)
							L = T.getStartOffset(M);
						let D = T.getLineContent().length;
						for (
							let M = P, N = T.getCount();
							M < N && T.getLanguageId(M) === k;
							M++
						)
							D = T.getEndOffset(M);
						return [L, D];
					}
					getWordUntilPosition(T) {
						const P = this.getWordAtPosition(T);
						return P
							? {
									word: P.word.substr(0, T.column - P.startColumn),
									startColumn: P.startColumn,
									endColumn: T.column,
								}
							: { word: "", startColumn: T.column, endColumn: T.column };
					}
					getWordsUntilPosition(T) {
						this.g();
						const P = [],
							k = this.r.validatePosition(T),
							L = this.getLineTokens(k.lineNumber),
							D = L.findTokenIndexAtOffset(k.column - 1);
						for (let M = 0; M < D; M++)
							P.push({
								startLineNumber: k.lineNumber,
								endLineNumber: k.lineNumber,
								startColumn: L.getStartOffset(M),
								endColumn: L.getEndOffset(M),
							});
						return P;
					}
					getLanguageId() {
						return this.u;
					}
					getLanguageIdAtPosition(T, P) {
						const k = this.r.validatePosition(new m.$hL(T, P)),
							L = this.getLineTokens(k.lineNumber);
						return L.getLanguageId(L.findTokenIndexAtOffset(k.column - 1));
					}
					setLanguageId(T, P = "api") {
						if (this.u === T) return;
						const k = { oldLanguage: this.u, newLanguage: T, source: P };
						(this.u = T),
							this.t.handleDidChangeLanguage(k),
							this.n.resetTokenization(),
							this.I(),
							this.h.fire(k),
							this.j.fire({});
					}
				});
				(e.$rV = v),
					(e.$rV = v = $ = Ne([j(4, h.$nM), j(5, c.$aN), j(6, f.$nV)], v));
				class S extends p.$lV {
					constructor(T, P, k, L) {
						super(T, P, k),
							(this.q = null),
							(this.r = null),
							(this.t = this.D(new E.$2c())),
							(this.u = new l.$pV(this.j)),
							(this.z = this.D(new E.$2c())),
							(this.C = this.D(new E.$0c())),
							this.D(
								a.$lM.onDidChange((D) => {
									const M = this.n();
									D.changedLanguages.indexOf(M) !== -1 &&
										this.resetTokenization();
								}),
							),
							this.resetTokenization(),
							this.D(
								L.onDidChangeVisibleRanges(({ view: D, state: M }) => {
									if (M) {
										let N = this.C.get(D);
										N ||
											((N = new p.$kV(() => this.H(N.lineRanges))),
											this.C.set(D, N)),
											N.handleStateChange(M);
									} else this.C.deleteAndDispose(D);
								}),
							);
					}
					resetTokenization(T = !0) {
						this.u.flush(),
							this.w?.flush(),
							this.y && (this.y = new g.$fV(this.m.getLineCount())),
							T &&
								this.h.fire({
									semanticTokensApplied: !1,
									ranges: [
										{ fromLineNumber: 1, toLineNumber: this.m.getLineCount() },
									],
								});
						const P = () => {
								if (this.m.isTooLargeForTokenization()) return [null, null];
								const D = a.$lM.get(this.n());
								if (!D) return [null, null];
								let M;
								try {
									M = D.getInitialState();
								} catch (N) {
									return (0, i.$4)(N), [null, null];
								}
								return [D, M];
							},
							[k, L] = P();
						if (
							(k && L
								? (this.q = new g.$eV(this.m.getLineCount(), k, this.m, this.j))
								: (this.q = null),
							this.t.clear(),
							(this.r = null),
							this.q)
						) {
							const D = {
								setTokens: (M) => {
									this.F(M);
								},
								backgroundTokenizationFinished: () => {
									if (this.f === b.BackgroundTokenizationState.Completed)
										return;
									const M = b.BackgroundTokenizationState.Completed;
									(this.f = M), this.g.fire();
								},
								setEndState: (M, N) => {
									if (!this.q) return;
									const A = this.q.store.getFirstInvalidEndStateLineNumber();
									A !== null && M >= A && this.q?.store.setEndState(M, N);
								},
							};
							k &&
								k.createBackgroundTokenizer &&
								!k.backgroundTokenizerShouldOnlyVerifyTokens &&
								(this.t.value = k.createBackgroundTokenizer(this.m, D)),
								!this.t.value &&
									!this.m.isTooLargeForTokenization() &&
									((this.t.value = this.r = new g.$iV(this.q, D)),
									this.r.handleChanges()),
								k?.backgroundTokenizerShouldOnlyVerifyTokens &&
								k.createBackgroundTokenizer
									? ((this.w = new l.$pV(this.j)),
										(this.y = new g.$fV(this.m.getLineCount())),
										this.z.clear(),
										(this.z.value = k.createBackgroundTokenizer(this.m, {
											setTokens: (M) => {
												this.w?.setMultilineTokens(M, this.m);
											},
											backgroundTokenizationFinished() {},
											setEndState: (M, N) => {
												this.y?.setEndState(M, N);
											},
										})))
									: ((this.w = void 0),
										(this.y = void 0),
										(this.z.value = void 0));
						}
						this.G();
					}
					handleDidChangeAttached() {
						this.r?.handleChanges();
					}
					handleDidChangeContent(T) {
						if (T.isFlush) this.resetTokenization(!1);
						else if (!T.isEolChange) {
							for (const P of T.changes) {
								const [k, L] = (0, C.$6L)(P.text);
								this.u.acceptEdit(P.range, k, L),
									this.w?.acceptEdit(P.range, k, L);
							}
							this.y?.acceptChanges(T.changes),
								this.q && this.q.store.acceptChanges(T.changes),
								this.r?.handleChanges();
						}
					}
					F(T) {
						const { changes: P } = this.u.setMultilineTokens(T, this.m);
						return (
							P.length > 0 &&
								this.h.fire({ semanticTokensApplied: !1, ranges: P }),
							{ changes: P }
						);
					}
					G() {
						const T = d.$rL.joinMany([...this.C].map(([P, k]) => k.lineRanges));
						this.H(T);
					}
					H(T) {
						for (const P of T)
							this.I(P.startLineNumber, P.endLineNumberExclusive - 1);
					}
					I(T, P) {
						if (!this.q) return;
						(T = Math.max(1, Math.min(this.m.getLineCount(), T))),
							(P = Math.min(this.m.getLineCount(), P));
						const k = new s.$cV(),
							{ heuristicTokens: L } = this.q.tokenizeHeuristically(k, T, P),
							D = this.F(k.finalize());
						if (L)
							for (const M of D.changes)
								this.t.value?.requestTokens(
									M.fromLineNumber,
									M.toLineNumber + 1,
								);
						this.r?.checkFinished();
					}
					forceTokenization(T) {
						const P = new s.$cV();
						this.q?.updateTokensUntilLine(P, T),
							this.F(P.finalize()),
							this.r?.checkFinished();
					}
					hasAccurateTokensForLine(T) {
						return this.q ? this.q.hasAccurateTokensForLine(T) : !0;
					}
					isCheapToTokenize(T) {
						return this.q ? this.q.isCheapToTokenize(T) : !0;
					}
					getLineTokens(T) {
						const P = this.m.getLineContent(T),
							k = this.u.getTokens(this.m.getLanguageId(), T - 1, P);
						if (
							this.w &&
							this.y &&
							this.q &&
							this.y.getFirstInvalidEndStateLineNumberOrMax() > T &&
							this.q.store.getFirstInvalidEndStateLineNumberOrMax() > T
						) {
							const L = this.w.getTokens(this.m.getLanguageId(), T - 1, P);
							!k.equals(L) &&
								this.z.value?.reportMismatchingTokens &&
								this.z.value.reportMismatchingTokens(T);
						}
						return k;
					}
					getTokenTypeIfInsertingCharacter(T, P, k) {
						if (!this.q) return u.StandardTokenType.Other;
						const L = this.m.validatePosition(new m.$hL(T, P));
						return (
							this.forceTokenization(L.lineNumber),
							this.q.getTokenTypeIfInsertingCharacter(L, k)
						);
					}
					tokenizeLineWithEdit(T, P, k) {
						if (!this.q) return null;
						const L = this.m.validatePosition(T);
						return (
							this.forceTokenization(L.lineNumber),
							this.q.tokenizeLineWithEdit(L, P, k)
						);
					}
					get hasTokens() {
						return this.u.hasTokens;
					}
				}
			},
		),
		define(
			de[252],
			he([1, 0, 23, 19, 9, 172, 22, 26]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$BDb = r),
					(e.$CDb = u);
				const m = /(?:\/|^)(?:([^\/]+)\/)?([^\/]+)$/;
				function r(c, n, g, p, o) {
					if (d.ThemeIcon.isThemeIcon(o))
						return [`codicon-${o.id}`, "predefined-file-icon"];
					if (w.URI.isUri(o)) return [];
					const f =
						p === C.FileKind.ROOT_FOLDER
							? ["rootfolder-icon"]
							: p === C.FileKind.FOLDER
								? ["folder-icon"]
								: ["file-icon"];
					if (g) {
						let b;
						if (g.scheme === t.Schemas.data)
							b = i.DataUri.parseMetaData(g).get(i.DataUri.META_DATA_LABEL);
						else {
							const s = g.path.match(m);
							s
								? ((b = h(s[2].toLowerCase())),
									s[1] && f.push(`${h(s[1].toLowerCase())}-name-dir-icon`))
								: (b = h(g.authority.toLowerCase()));
						}
						if (p === C.FileKind.ROOT_FOLDER)
							f.push(`${b}-root-name-folder-icon`);
						else if (p === C.FileKind.FOLDER) f.push(`${b}-name-folder-icon`);
						else {
							if (b) {
								if (
									(f.push(`${b}-name-file-icon`),
									f.push("name-file-icon"),
									b.length <= 255)
								) {
									const l = b.split(".");
									for (let y = 1; y < l.length; y++)
										f.push(`${l.slice(y).join(".")}-ext-file-icon`);
								}
								f.push("ext-file-icon");
							}
							const s = a(c, n, g);
							s && f.push(`${h(s)}-lang-file-icon`);
						}
					}
					return f;
				}
				function u(c) {
					return ["file-icon", `${h(c)}-lang-file-icon`];
				}
				function a(c, n, g) {
					if (!g) return null;
					let p = null;
					if (g.scheme === t.Schemas.data) {
						const f = i.DataUri.parseMetaData(g).get(i.DataUri.META_DATA_MIME);
						f && (p = n.getLanguageIdByMimeType(f));
					} else {
						if (g.scheme === t.Schemas.aiChat) return "cursor-ai";
						{
							const o = c.getModel(g);
							o && (p = o.getLanguageId());
						}
					}
					return p && p !== E.$0M
						? p
						: n.guessLanguageIdByFilepathOrFirstLine(g);
				}
				function h(c) {
					return c.replace(/[\s]/g, "/");
				}
			},
		),
		define(
			de[671],
			he([1, 0, 215, 266, 23, 54, 19, 37, 172]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$hYb = h),
					(e.$iYb = c),
					(e.$jYb = p),
					(e.$kYb = o),
					(e.$lYb = f),
					(e.$mYb = b);
				let r = [],
					u = [],
					a = [];
				function h($, v = !1) {
					n($, !1, v);
				}
				function c($) {
					n($, !0, !1);
				}
				function n($, v, S) {
					const I = g($, v);
					r.push(I),
						I.userConfigured ? a.push(I) : u.push(I),
						S &&
							!I.userConfigured &&
							r.forEach((T) => {
								T.mime === I.mime ||
									T.userConfigured ||
									(I.extension &&
										T.extension === I.extension &&
										console.warn(
											`Overwriting extension <<${I.extension}>> to now point to mime <<${I.mime}>>`,
										),
									I.filename &&
										T.filename === I.filename &&
										console.warn(
											`Overwriting filename <<${I.filename}>> to now point to mime <<${I.mime}>>`,
										),
									I.filepattern &&
										T.filepattern === I.filepattern &&
										console.warn(
											`Overwriting filepattern <<${I.filepattern}>> to now point to mime <<${I.mime}>>`,
										),
									I.firstline &&
										T.firstline === I.firstline &&
										console.warn(
											`Overwriting firstline <<${I.firstline}>> to now point to mime <<${I.mime}>>`,
										));
							});
				}
				function g($, v) {
					return {
						id: $.id,
						mime: $.mime,
						filename: $.filename,
						extension: $.extension,
						filepattern: $.filepattern,
						firstline: $.firstline,
						userConfigured: v,
						filenameLowercase: $.filename ? $.filename.toLowerCase() : void 0,
						extensionLowercase: $.extension
							? $.extension.toLowerCase()
							: void 0,
						filepatternLowercase: $.filepattern
							? (0, t.$Jk)($.filepattern.toLowerCase())
							: void 0,
						filepatternOnPath: $.filepattern
							? $.filepattern.indexOf(E.$lc.sep) >= 0
							: !1,
					};
				}
				function p() {
					(r = r.filter(($) => $.userConfigured)), (u = []);
				}
				function o() {
					(r = r.filter(($) => !$.userConfigured)), (a = []);
				}
				function f($, v) {
					return s($, v).map((S) => S.mime);
				}
				function b($, v) {
					return s($, v).map((S) => S.id);
				}
				function s($, v) {
					let S;
					if ($)
						switch ($.scheme) {
							case w.Schemas.file:
								S = $.fsPath;
								break;
							case w.Schemas.data: {
								S = C.DataUri.parseMetaData($).get(C.DataUri.META_DATA_LABEL);
								break;
							}
							case w.Schemas.vscodeNotebookCell:
								S = void 0;
								break;
							default:
								S = $.path;
						}
					if (!S) return [{ id: "unknown", mime: i.$EK.unknown }];
					S = S.toLowerCase();
					const I = (0, E.$sc)(S),
						T = l(S, I, a);
					if (T) return [T, { id: m.$0M, mime: i.$EK.text }];
					const P = l(S, I, u);
					if (P) return [P, { id: m.$0M, mime: i.$EK.text }];
					if (v) {
						const k = y(v);
						if (k) return [k, { id: m.$0M, mime: i.$EK.text }];
					}
					return [{ id: "unknown", mime: i.$EK.unknown }];
				}
				function l($, v, S) {
					let I, T, P;
					for (let k = S.length - 1; k >= 0; k--) {
						const L = S[k];
						if (v === L.filenameLowercase) {
							I = L;
							break;
						}
						if (
							L.filepattern &&
							(!T || L.filepattern.length > T.filepattern.length)
						) {
							const D = L.filepatternOnPath ? $ : v;
							L.filepatternLowercase?.(D) && (T = L);
						}
						L.extension &&
							(!P || L.extension.length > P.extension.length) &&
							v.endsWith(L.extensionLowercase) &&
							(P = L);
					}
					if (I) return I;
					if (T) return T;
					if (P) return P;
				}
				function y($) {
					if (((0, d.$_f)($) && ($ = $.substr(1)), $.length > 0))
						for (let v = r.length - 1; v >= 0; v--) {
							const S = r[v];
							if (!S.firstline) continue;
							const I = $.match(S.firstline);
							if (I && I.length > 0) return S;
						}
				}
			},
		),
		define(
			de[2773],
			he([1, 0, 6, 3, 37, 671, 171, 172, 81, 30]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$oYb = e.$nYb = void 0);
				const u = Object.prototype.hasOwnProperty,
					a = "vs.editor.nullLanguage";
				class h {
					constructor() {
						(this.e = []),
							(this.f = new Map()),
							this.g(a, C.LanguageId.Null),
							this.g(d.$0M, C.LanguageId.PlainText),
							(this.c = 2);
					}
					g(g, p) {
						(this.e[p] = g), this.f.set(g, p);
					}
					register(g) {
						if (this.f.has(g)) return;
						const p = this.c++;
						this.g(g, p);
					}
					encodeLanguageId(g) {
						return this.f.get(g) || C.LanguageId.Null;
					}
					decodeLanguageId(g) {
						return this.e[g] || a;
					}
				}
				e.$nYb = h;
				class c extends i.$1c {
					static {
						this.instanceCount = 0;
					}
					constructor(g = !0, p = !1) {
						super(),
							(this.c = this.D(new t.$re())),
							(this.onDidChange = this.c.event),
							c.instanceCount++,
							(this.f = p),
							(this.languageIdCodec = new h()),
							(this.g = []),
							(this.h = {}),
							(this.j = {}),
							(this.n = {}),
							(this.q = {}),
							g &&
								(this.r(),
								this.D(
									d.$9M.onDidChangeLanguages((o) => {
										this.r();
									}),
								));
					}
					dispose() {
						c.instanceCount--, super.dispose();
					}
					setDynamicLanguages(g) {
						(this.g = g), this.r();
					}
					r() {
						(this.h = {}),
							(this.j = {}),
							(this.n = {}),
							(this.q = {}),
							(0, E.$jYb)();
						const g = [].concat(d.$9M.getLanguages()).concat(this.g);
						this._registerLanguages(g);
					}
					registerLanguage(g) {
						return d.$9M.registerLanguage(g);
					}
					_registerLanguages(g) {
						for (const p of g) this.s(p);
						(this.j = {}),
							(this.n = {}),
							(this.q = {}),
							Object.keys(this.h).forEach((p) => {
								const o = this.h[p];
								o.name && (this.n[o.name] = o.identifier),
									o.aliases.forEach((f) => {
										this.q[f.toLowerCase()] = o.identifier;
									}),
									o.mimetypes.forEach((f) => {
										this.j[f] = o.identifier;
									});
							}),
							r.$Io
								.as(m.$No.Configuration)
								.registerOverrideIdentifiers(this.getRegisteredLanguageIds()),
							this.c.fire();
					}
					s(g) {
						const p = g.id;
						let o;
						u.call(this.h, p)
							? (o = this.h[p])
							: (this.languageIdCodec.register(p),
								(o = {
									identifier: p,
									name: null,
									mimetypes: [],
									aliases: [],
									extensions: [],
									filenames: [],
									configurationFiles: [],
									icons: [],
								}),
								(this.h[p] = o)),
							this.t(o, g);
					}
					t(g, p) {
						const o = p.id;
						let f = null;
						if (
							(Array.isArray(p.mimetypes) &&
								p.mimetypes.length > 0 &&
								(g.mimetypes.push(...p.mimetypes), (f = p.mimetypes[0])),
							f || ((f = `text/x-${o}`), g.mimetypes.push(f)),
							Array.isArray(p.extensions))
						) {
							p.configuration
								? (g.extensions = p.extensions.concat(g.extensions))
								: (g.extensions = g.extensions.concat(p.extensions));
							for (const l of p.extensions)
								(0, E.$hYb)({ id: o, mime: f, extension: l }, this.f);
						}
						if (Array.isArray(p.filenames))
							for (const l of p.filenames)
								(0, E.$hYb)({ id: o, mime: f, filename: l }, this.f),
									g.filenames.push(l);
						if (Array.isArray(p.filenamePatterns))
							for (const l of p.filenamePatterns)
								(0, E.$hYb)({ id: o, mime: f, filepattern: l }, this.f);
						if (typeof p.firstLine == "string" && p.firstLine.length > 0) {
							let l = p.firstLine;
							l.charAt(0) !== "^" && (l = "^" + l);
							try {
								const y = new RegExp(l);
								(0, w.$yf)(y) ||
									(0, E.$hYb)({ id: o, mime: f, firstline: y }, this.f);
							} catch (y) {
								console.warn(
									`[${p.id}]: Invalid regular expression \`${l}\`: `,
									y,
								);
							}
						}
						g.aliases.push(o);
						let b = null;
						if (
							(typeof p.aliases < "u" &&
								Array.isArray(p.aliases) &&
								(p.aliases.length === 0 ? (b = [null]) : (b = p.aliases)),
							b !== null)
						)
							for (const l of b) !l || l.length === 0 || g.aliases.push(l);
						const s = b !== null && b.length > 0;
						if (!(s && b[0] === null)) {
							const l = (s ? b[0] : null) || o;
							(s || !g.name) && (g.name = l);
						}
						p.configuration && g.configurationFiles.push(p.configuration),
							p.icon && g.icons.push(p.icon);
					}
					isRegisteredLanguageId(g) {
						return g ? u.call(this.h, g) : !1;
					}
					getRegisteredLanguageIds() {
						return Object.keys(this.h);
					}
					getSortedRegisteredLanguageNames() {
						const g = [];
						for (const p in this.n)
							u.call(this.n, p) &&
								g.push({ languageName: p, languageId: this.n[p] });
						return (
							g.sort((p, o) => (0, w.$Hf)(p.languageName, o.languageName)), g
						);
					}
					getLanguageName(g) {
						return u.call(this.h, g) ? this.h[g].name : null;
					}
					getMimeType(g) {
						return (u.call(this.h, g) && this.h[g].mimetypes[0]) || null;
					}
					getExtensions(g) {
						return u.call(this.h, g) ? this.h[g].extensions : [];
					}
					getFilenames(g) {
						return u.call(this.h, g) ? this.h[g].filenames : [];
					}
					getIcon(g) {
						return (u.call(this.h, g) && this.h[g].icons[0]) || null;
					}
					getConfigurationFiles(g) {
						return u.call(this.h, g) ? this.h[g].configurationFiles || [] : [];
					}
					getLanguageIdByLanguageName(g) {
						const p = g.toLowerCase();
						return u.call(this.q, p) ? this.q[p] : null;
					}
					getLanguageIdByMimeType(g) {
						return g && u.call(this.j, g) ? this.j[g] : null;
					}
					guessLanguageIdByFilepathOrFirstLine(g, p) {
						return !g && !p ? [] : (0, E.$mYb)(g, p);
					}
				}
				e.$oYb = c;
			},
		),
		define(
			de[2774],
			he([1, 0, 6, 3, 2773, 24, 74, 172, 77]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pYb = void 0);
				class r extends i.$1c {
					static {
						this.instanceCount = 0;
					}
					constructor(h = !1) {
						super(),
							(this.c = this.D(new t.$re())),
							(this.onDidRequestBasicLanguageFeatures = this.c.event),
							(this.f = this.D(new t.$re())),
							(this.onDidRequestRichLanguageFeatures = this.f.event),
							(this.g = this.D(new t.$re({ leakWarningThreshold: 200 }))),
							(this.onDidChange = this.g.event),
							(this.h = new Set()),
							(this.m = new Set()),
							r.instanceCount++,
							(this.n = this.D(new w.$oYb(!0, h))),
							(this.languageIdCodec = this.n.languageIdCodec),
							this.D(this.n.onDidChange(() => this.g.fire()));
					}
					dispose() {
						r.instanceCount--, super.dispose();
					}
					registerLanguage(h) {
						return this.n.registerLanguage(h);
					}
					isRegisteredLanguageId(h) {
						return this.n.isRegisteredLanguageId(h);
					}
					getRegisteredLanguageIds() {
						return this.n.getRegisteredLanguageIds();
					}
					getSortedRegisteredLanguageNames() {
						return this.n.getSortedRegisteredLanguageNames();
					}
					getLanguageName(h) {
						return this.n.getLanguageName(h);
					}
					getMimeType(h) {
						return this.n.getMimeType(h);
					}
					getIcon(h) {
						return this.n.getIcon(h);
					}
					getExtensions(h) {
						return this.n.getExtensions(h);
					}
					getFilenames(h) {
						return this.n.getFilenames(h);
					}
					getConfigurationFiles(h) {
						return this.n.getConfigurationFiles(h);
					}
					getLanguageIdByLanguageName(h) {
						return this.n.getLanguageIdByLanguageName(h);
					}
					getLanguageIdByMimeType(h) {
						return this.n.getLanguageIdByMimeType(h);
					}
					guessLanguageIdByFilepathOrFirstLine(h, c) {
						const n = this.n.guessLanguageIdByFilepathOrFirstLine(h, c);
						return (0, E.$Sb)(n, null);
					}
					createById(h) {
						return new u(this.onDidChange, () => this.q(h));
					}
					createByMimeType(h) {
						return new u(this.onDidChange, () => {
							const c = this.getLanguageIdByMimeType(h);
							return this.q(c);
						});
					}
					createByFilepathOrFirstLine(h, c) {
						return new u(this.onDidChange, () => {
							const n = this.guessLanguageIdByFilepathOrFirstLine(h, c);
							return this.q(n);
						});
					}
					createByLanguageNameOrFilepathOrFirstLine(h, c, n) {
						return new u(this.onDidChange, () => {
							let g = null;
							return (
								h && (g = this.getLanguageIdByLanguageName(h)),
								g || (g = this.guessLanguageIdByFilepathOrFirstLine(c, n)),
								this.q(g)
							);
						});
					}
					q(h) {
						return (!h || !this.isRegisteredLanguageId(h)) && (h = d.$0M), h;
					}
					requestBasicLanguageFeatures(h) {
						this.h.has(h) || (this.h.add(h), this.c.fire(h));
					}
					requestRichLanguageFeatures(h) {
						this.m.has(h) ||
							(this.m.add(h),
							this.requestBasicLanguageFeatures(h),
							C.$lM.getOrCreate(h),
							this.f.fire(h));
					}
				}
				e.$pYb = r;
				class u {
					constructor(h, c) {
						(this.a = (0, m.observableFromEvent)(this, h, () => c())),
							(this.onDidChange = t.Event.fromObservable(this.a));
					}
					get languageId() {
						return this.a.get();
					}
				}
			},
		),
		define(
			de[2775],
			he([1, 0, 7, 3, 251, 56, 38, 61, 601, 41, 160, 2769, 937]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				var c;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1Ob = void 0),
					(t = mt(t));
				const n = t.$;
				let g = class extends i.$1c {
					static {
						c = this;
					}
					static {
						this.ID = "editor.contrib.modesGlyphHoverWidget";
					}
					constructor(o, f, b) {
						super(),
							(this.m = this.D(new i.$Zc())),
							(this.a = o),
							(this.c = !1),
							(this.f = []),
							(this.b = this.D(new u.$9hb())),
							this.b.containerDomNode.classList.toggle("hidden", !this.c),
							(this.g = this.D(new w.$Qzb({ editor: this.a }, f, b))),
							(this.h = new a.$ZOb(this.a)),
							(this.j = this.D(new m.$sCb(this.a, this.h))),
							this.D(
								this.j.onResult((s) => {
									this.s(s.value);
								}),
							),
							this.D(this.a.onDidChangeModelDecorations(() => this.q())),
							this.D(
								this.a.onDidChangeConfiguration((s) => {
									s.hasChanged(C.EditorOption.fontInfo) && this.n();
								}),
							),
							this.D(
								t.$$fb(this.b.containerDomNode, "mouseleave", (s) => {
									this.z(s);
								}),
							),
							this.a.addOverlayWidget(this);
					}
					dispose() {
						this.a.removeOverlayWidget(this), super.dispose();
					}
					getId() {
						return c.ID;
					}
					getDomNode() {
						return this.b.containerDomNode;
					}
					getPosition() {
						return null;
					}
					n() {
						Array.prototype.slice
							.call(this.b.contentsDomNode.getElementsByClassName("code"))
							.forEach((f) => this.a.applyFontInfo(f));
					}
					q() {
						this.c && (this.j.cancel(), this.j.start(m.HoverStartMode.Delayed));
					}
					showsOrWillShow(o) {
						const f = o.target;
						return f.type === E.MouseTargetType.GUTTER_GLYPH_MARGIN &&
							f.detail.glyphMarginLane
							? (this.r(f.position.lineNumber, f.detail.glyphMarginLane), !0)
							: f.type === E.MouseTargetType.GUTTER_LINE_NUMBERS
								? (this.r(f.position.lineNumber, "lineNo"), !0)
								: !1;
					}
					r(o, f) {
						(this.h.lineNumber === o && this.h.lane === f) ||
							(this.j.cancel(),
							this.hide(),
							(this.h.lineNumber = o),
							(this.h.lane = f),
							this.j.start(m.HoverStartMode.Delayed));
					}
					hide() {
						(this.h.lineNumber = -1),
							this.j.cancel(),
							this.c &&
								((this.c = !1),
								this.b.containerDomNode.classList.toggle("hidden", !this.c));
					}
					s(o) {
						(this.f = o),
							this.f.length > 0
								? this.t(this.h.lineNumber, this.f)
								: this.hide();
					}
					t(o, f) {
						this.m.clear();
						const b = document.createDocumentFragment();
						for (const s of f) {
							const l = n("div.hover-row.markdown-hover"),
								y = t.$fhb(l, n("div.hover-contents")),
								$ = this.m.add(this.g.render(s.value));
							y.appendChild($.element), b.appendChild(l);
						}
						this.u(b), this.w(o);
					}
					u(o) {
						(this.b.contentsDomNode.textContent = ""),
							this.b.contentsDomNode.appendChild(o),
							this.n();
					}
					w(o) {
						this.c ||
							((this.c = !0),
							this.b.containerDomNode.classList.toggle("hidden", !this.c));
						const f = this.a.getLayoutInfo(),
							b = this.a.getTopForLineNumber(o),
							s = this.a.getScrollTop(),
							l = this.a.getOption(C.EditorOption.lineHeight),
							y = this.b.containerDomNode.clientHeight,
							$ = b - s - (y - l) / 2,
							v =
								f.glyphMarginLeft +
								f.glyphMarginWidth +
								(this.h.lane === "lineNo" ? f.lineNumbersWidth : 0);
						(this.b.containerDomNode.style.left = `${v}px`),
							(this.b.containerDomNode.style.top = `${Math.max(Math.round($), 0)}px`);
					}
					z(o) {
						const f = this.a.getDomNode();
						(!f || !(0, h.$TDb)(f, o.x, o.y)) && this.hide();
					}
				};
				(e.$1Ob = g), (e.$1Ob = g = c = Ne([j(1, d.$nM), j(2, r.$7rb)], g));
			},
		),
		define(
			de[603],
			he([1, 0, 27, 3, 38, 5, 15, 937, 2775, 905]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				var r;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2Ob = void 0);
				const u = !1;
				let a = class extends i.$1c {
					static {
						r = this;
					}
					static {
						this.ID = "editor.contrib.marginHover";
					}
					constructor(c, n) {
						super(),
							(this.j = c),
							(this.m = n),
							(this.shouldKeepOpenOnEditorMouseMoveOrLeave = !1),
							(this.a = new i.$Zc()),
							(this.h = { mouseDown: !1 }),
							(this.f = this.D(new C.$Yh(() => this.F(this.c), 0))),
							this.n(),
							this.D(
								this.j.onDidChangeConfiguration((g) => {
									g.hasChanged(w.EditorOption.hover) && (this.q(), this.n());
								}),
							);
					}
					static get(c) {
						return c.getContribution(r.ID);
					}
					n() {
						const c = this.j.getOption(w.EditorOption.hover);
						(this.g = {
							enabled: c.enabled,
							sticky: c.sticky,
							hidingDelay: c.hidingDelay,
						}),
							c.enabled
								? (this.a.add(this.j.onMouseDown((n) => this.t(n))),
									this.a.add(this.j.onMouseUp(() => this.w())),
									this.a.add(this.j.onMouseMove((n) => this.C(n))),
									this.a.add(this.j.onKeyDown((n) => this.H(n))))
								: (this.a.add(this.j.onMouseMove((n) => this.C(n))),
									this.a.add(this.j.onKeyDown((n) => this.H(n)))),
							this.a.add(this.j.onMouseLeave((n) => this.y(n))),
							this.a.add(
								this.j.onDidChangeModel(() => {
									this.r(), this.I();
								}),
							),
							this.a.add(this.j.onDidChangeModelContent(() => this.r())),
							this.a.add(this.j.onDidScrollChange((n) => this.s(n)));
					}
					q() {
						this.a.clear();
					}
					r() {
						(this.c = void 0), this.f.cancel();
					}
					s(c) {
						(c.scrollTopChanged || c.scrollLeftChanged) && this.I();
					}
					t(c) {
						(this.h.mouseDown = !0), !this.u(c) && this.I();
					}
					u(c) {
						const n = this.b?.getDomNode();
						return n ? (0, d.$TDb)(n, c.event.posx, c.event.posy) : !1;
					}
					w() {
						this.h.mouseDown = !1;
					}
					y(c) {
						this.shouldKeepOpenOnEditorMouseMoveOrLeave ||
							(this.r(), this.u(c)) ||
							u ||
							this.I();
					}
					z(c) {
						const n = this.g.sticky,
							g = this.u(c);
						return n && g;
					}
					C(c) {
						if (this.shouldKeepOpenOnEditorMouseMoveOrLeave) return;
						if (((this.c = c), this.z(c))) {
							this.f.cancel();
							return;
						}
						this.F(c);
					}
					F(c) {
						!c || this.G(c) || u || this.I();
					}
					G(c) {
						return this.J().showsOrWillShow(c);
					}
					H(c) {
						this.j.hasModel() &&
							(c.keyCode === t.KeyCode.Ctrl ||
								c.keyCode === t.KeyCode.Alt ||
								c.keyCode === t.KeyCode.Meta ||
								c.keyCode === t.KeyCode.Shift ||
								this.I());
					}
					I() {
						u || this.b?.hide();
					}
					J() {
						return (
							this.b || (this.b = this.m.createInstance(m.$1Ob, this.j)), this.b
						);
					}
					hideContentHover() {
						this.I();
					}
					dispose() {
						super.dispose(), this.q(), this.a.dispose(), this.b?.dispose();
					}
				};
				(e.$2Ob = a), (e.$2Ob = a = r = Ne([j(1, E.$Li)], a));
			},
		),
		define(
			de[2776],
			he([1, 0, 37, 771, 188, 1146, 104, 171, 1151]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zic = r),
					(t = mt(t));
				function r(a, h, c, n) {
					if (a.getLineCount() === 1 && a.getLineMaxColumn(1) === 1) return [];
					const g = h.getLanguageConfiguration(
						a.getLanguageId(),
					).indentRulesSupport;
					if (!g) return [];
					const p = new m.$Ntb(a, g, h);
					for (n = Math.min(n, a.getLineCount()); c <= n && p.shouldIgnore(c); )
						c++;
					if (c > n - 1) return [];
					const { tabSize: o, indentSize: f, insertSpaces: b } = a.getOptions(),
						s = (I, T) => (
							(T = T || 1), i.$Rtb.shiftIndent(I, I.length + T, o, f, b)
						),
						l = (I, T) => (
							(T = T || 1), i.$Rtb.unshiftIndent(I, I.length + T, o, f, b)
						),
						y = [],
						$ = a.getLineContent(c);
					let v = t.$Cf($),
						S = v;
					p.shouldIncrease(c)
						? ((S = s(S)), (v = s(v)))
						: p.shouldIndentNextLine(c) && (S = s(S)),
						c++;
					for (let I = c; I <= n; I++) {
						if (u(a, I)) continue;
						const T = a.getLineContent(I),
							P = t.$Cf(T),
							k = S;
						p.shouldDecrease(I, k) && ((S = l(S)), (v = l(v))),
							P !== S &&
								y.push(
									w.$jL.replaceMove(
										new C.$kL(I, 1, I, P.length + 1),
										(0, E.$ZO)(S, f, b),
									),
								),
							!p.shouldIgnore(I) &&
								(p.shouldIncrease(I, k)
									? ((v = s(v)), (S = v))
									: p.shouldIndentNextLine(I, k)
										? (S = s(S))
										: (S = v));
					}
					return y;
				}
				function u(a, h) {
					return a.tokenization.isCheapToTokenize(h)
						? a.tokenization.getLineTokens(h).getStandardTokenType(0) ===
								d.StandardTokenType.String
						: !1;
				}
			},
		),
		define(
			de[2777],
			he([
				1, 0, 33, 433, 132, 3, 77, 17, 490, 458, 74, 152, 64, 69, 1594, 1196,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$QCb = e.$PCb = e.$OCb = void 0);
				let p = class extends E.$1c {
					constructor(v, S, I, T, P) {
						super(),
							(this.b = v),
							(this.c = S),
							(this.f = I),
							(this.g = T),
							(this.h = P),
							(this.a = this.D(new E.$2c())),
							(this.inlineCompletions = (0, C.disposableObservableValue)(
								"inlineCompletions",
								void 0,
							)),
							(this.suggestWidgetInlineCompletions = (0,
							C.disposableObservableValue)(
								"suggestWidgetInlineCompletions",
								void 0,
							)),
							this.D(
								this.b.onDidChangeContent(() => {
									this.a.clear();
								}),
							);
					}
					fetch(v, S, I) {
						const T = new f(v, S, this.b.getVersionId()),
							P = S.selectedSuggestionInfo
								? this.suggestWidgetInlineCompletions
								: this.inlineCompletions;
						if (this.a.value?.request.satisfies(T)) return this.a.value.promise;
						if (P.get()?.request.satisfies(T)) return Promise.resolve(!0);
						const k = !!this.a.value;
						this.a.clear();
						const L = new t.$Ce(),
							D = (async () => {
								if (
									((k ||
										S.triggerKind ===
											u.InlineCompletionTriggerKind.Automatic) &&
										(await o(this.f.get(this.b), L.token)),
									L.token.isCancellationRequested ||
										this.B.isDisposed ||
										this.b.getVersionId() !== T.versionId)
								)
									return !1;
								const A = new Date(),
									R = await (0, n.$HCb)(
										this.g.inlineCompletionsProvider,
										v,
										this.b,
										S,
										L.token,
										this.h,
									);
								if (
									L.token.isCancellationRequested ||
									this.B.isDisposed ||
									this.b.getVersionId() !== T.versionId
								)
									return !1;
								const O = new Date();
								this.f.update(this.b, O.getTime() - A.getTime());
								const B = new s(R, T, this.b, this.c);
								if (I) {
									const U = I.toInlineCompletion(void 0);
									I.canBeReused(this.b, v) &&
										!R.has(U) &&
										B.prepend(I.inlineCompletion, U.range, !0);
								}
								return (
									this.a.clear(),
									(0, C.transaction)((U) => {
										P.set(B, U);
									}),
									!0
								);
							})(),
							M = new b(T, L, D);
						return (this.a.value = M), D;
					}
					clear(v) {
						this.a.clear(),
							this.inlineCompletions.set(void 0, v),
							this.suggestWidgetInlineCompletions.set(void 0, v);
					}
					clearSuggestWidgetInlineCompletions(v) {
						this.a.value?.request.context.selectedSuggestionInfo &&
							this.a.clear(),
							this.suggestWidgetInlineCompletions.set(void 0, v);
					}
					cancelUpdate() {
						this.a.clear();
					}
				};
				(e.$OCb = p), (e.$OCb = p = Ne([j(3, c.$k3), j(4, a.$aN)], p));
				function o($, v) {
					return new Promise((S) => {
						let I;
						const T = setTimeout(() => {
							I && I.dispose(), S();
						}, $);
						v &&
							(I = v.onCancellationRequested(() => {
								clearTimeout(T), I && I.dispose(), S();
							}));
					});
				}
				class f {
					constructor(v, S, I) {
						(this.position = v), (this.context = S), (this.versionId = I);
					}
					satisfies(v) {
						return (
							this.position.equals(v.position) &&
							(0, i.$dd)(
								this.context.selectedSuggestionInfo,
								v.context.selectedSuggestionInfo,
								(0, i.$cd)(),
							) &&
							(v.context.triggerKind ===
								u.InlineCompletionTriggerKind.Automatic ||
								this.context.triggerKind ===
									u.InlineCompletionTriggerKind.Explicit) &&
							this.versionId === v.versionId
						);
					}
				}
				class b {
					constructor(v, S, I) {
						(this.request = v),
							(this.cancellationTokenSource = S),
							(this.promise = I);
					}
					dispose() {
						this.cancellationTokenSource.cancel();
					}
				}
				class s {
					get inlineCompletions() {
						return this.a;
					}
					constructor(v, S, I, T) {
						(this.e = v),
							(this.request = S),
							(this.f = I),
							(this.g = T),
							(this.b = 1),
							(this.c = []);
						const P = I.deltaDecorations(
							[],
							v.completions.map((k) => ({
								range: k.range,
								options: { description: "inline-completion-tracking-range" },
							})),
						);
						this.a = v.completions.map(
							(k, L) => new l(k, P[L], this.f, this.g),
						);
					}
					clone() {
						return this.b++, this;
					}
					dispose() {
						if ((this.b--, this.b === 0)) {
							setTimeout(() => {
								this.f.isDisposed() ||
									this.f.deltaDecorations(
										this.a.map((v) => v.decorationId),
										[],
									);
							}, 0),
								this.e.dispose();
							for (const v of this.c) v.source.removeRef();
						}
					}
					prepend(v, S, I) {
						I && v.source.addRef();
						const T = this.f.deltaDecorations(
							[],
							[
								{
									range: S,
									options: { description: "inline-completion-tracking-range" },
								},
							],
						)[0];
						this.a.unshift(new l(v, T, this.f, this.g)), this.c.push(v);
					}
				}
				e.$PCb = s;
				class l {
					get forwardStable() {
						return (
							this.inlineCompletion.source.inlineCompletions
								.enableForwardStability ?? !1
						);
					}
					constructor(v, S, I, T) {
						(this.inlineCompletion = v),
							(this.decorationId = S),
							(this.b = I),
							(this.c = T),
							(this.semanticId = JSON.stringify([
								this.inlineCompletion.filterText,
								this.inlineCompletion.insertText,
								this.inlineCompletion.range.getStartPosition().toString(),
							])),
							(this.a = (0, C.derivedOpts)(
								{ owner: this, equalsFn: d.$iL.equalsRange },
								(P) => (
									this.c.read(P), this.b.getDecorationRange(this.decorationId)
								),
							));
					}
					toInlineCompletion(v) {
						return this.inlineCompletion.withRange(this.a.read(v) ?? y);
					}
					toSingleTextEdit(v) {
						return new m.$wL(
							this.a.read(v) ?? y,
							this.inlineCompletion.insertText,
						);
					}
					isVisible(v, S, I) {
						const T = (0, g.$LCb)(this.e(I), v),
							P = this.a.read(I);
						if (
							!P ||
							!this.inlineCompletion.range
								.getStartPosition()
								.equals(P.getStartPosition()) ||
							S.lineNumber !== T.range.startLineNumber
						)
							return !1;
						const k = v.getValueInRange(T.range, h.EndOfLinePreference.LF),
							L = T.text,
							D = Math.max(0, S.column - T.range.startColumn);
						let M = L.substring(0, D),
							N = L.substring(D),
							A = k.substring(0, D),
							R = k.substring(D);
						const O = v.getLineIndentColumn(T.range.startLineNumber);
						return (
							T.range.startColumn <= O &&
								((A = A.trimStart()),
								A.length === 0 && (R = R.trimStart()),
								(M = M.trimStart()),
								M.length === 0 && (N = N.trimStart())),
							M.startsWith(A) && !!(0, w.$Vk)(R, N)
						);
					}
					canBeReused(v, S) {
						const I = this.a.read(void 0);
						return (
							!!I &&
							I.containsPosition(S) &&
							this.isVisible(v, S, void 0) &&
							r.$tL
								.ofRange(I)
								.isGreaterThanOrEqualTo(
									r.$tL.ofRange(this.inlineCompletion.range),
								)
						);
					}
					e(v) {
						return new m.$wL(
							this.a.read(v) ?? y,
							this.inlineCompletion.filterText,
						);
					}
				}
				e.$QCb = l;
				const y = new d.$iL(1, 1, 1, 1);
			},
		),
		define(
			de[2778],
			he([1, 0, 37, 771, 38, 17, 104, 532, 152, 912, 1553, 1184, 1198]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Sic = void 0),
					(t = mt(t)),
					(u = mt(u));
				let c = class {
					constructor(g, p, o, f) {
						(this.g = f),
							(this.a = g),
							(this.b = p),
							(this.c = o),
							(this.d = null),
							(this.f = !1);
					}
					getEditOperations(g, p) {
						const o = () => g.getLanguageId(),
							f = (S, I) => g.getLanguageIdAtPosition(S, I),
							b = g.getLineCount();
						if (this.b && this.a.endLineNumber === b) {
							this.d = p.trackSelection(this.a);
							return;
						}
						if (!this.b && this.a.startLineNumber === 1) {
							this.d = p.trackSelection(this.a);
							return;
						}
						this.e = !1;
						let s = this.a;
						s.startLineNumber < s.endLineNumber &&
							s.endColumn === 1 &&
							((this.e = !0),
							(s = s.setEndPosition(
								s.endLineNumber - 1,
								g.getLineMaxColumn(s.endLineNumber - 1),
							)));
						const {
								tabSize: l,
								indentSize: y,
								insertSpaces: $,
							} = g.getOptions(),
							v = this.h(l, y, $);
						if (
							s.startLineNumber === s.endLineNumber &&
							g.getLineMaxColumn(s.startLineNumber) === 1
						) {
							const S = s.startLineNumber,
								I = this.b ? S + 1 : S - 1;
							g.getLineMaxColumn(I) === 1
								? p.addEditOperation(new E.$iL(1, 1, 1, 1), null)
								: (p.addEditOperation(
										new E.$iL(S, 1, S, 1),
										g.getLineContent(I),
									),
									p.addEditOperation(
										new E.$iL(I, 1, I, g.getLineMaxColumn(I)),
										null,
									)),
								(s = new C.$kL(I, 1, I, 1));
						} else {
							let S, I;
							if (this.b) {
								(S = s.endLineNumber + 1),
									(I = g.getLineContent(S)),
									p.addEditOperation(
										new E.$iL(
											S - 1,
											g.getLineMaxColumn(S - 1),
											S,
											g.getLineMaxColumn(S),
										),
										null,
									);
								let T = I;
								if (this.n(g, s)) {
									const P = this.l(g, v, l, S, s.startLineNumber - 1);
									if (P !== null) {
										const L = t.$Cf(g.getLineContent(S)),
											D = P + u.$xic(L, l);
										T = u.$yic(D, l, $) + this.m(I);
									} else {
										const L = {
												tokenization: {
													getLineTokens: (M) =>
														M === s.startLineNumber
															? g.tokenization.getLineTokens(S)
															: g.tokenization.getLineTokens(M),
													getLanguageId: o,
													getLanguageIdAtPosition: f,
												},
												getLineContent: (M) =>
													M === s.startLineNumber
														? g.getLineContent(S)
														: g.getLineContent(M),
											},
											D = (0, a.$Jtb)(
												this.c,
												L,
												g.getLanguageIdAtPosition(S, 1),
												s.startLineNumber,
												v,
												this.g,
											);
										if (D !== null) {
											const M = t.$Cf(g.getLineContent(S)),
												N = u.$xic(D, l),
												A = u.$xic(M, l);
											N !== A && (T = u.$yic(N, l, $) + this.m(I));
										}
									}
									p.addEditOperation(
										new E.$iL(s.startLineNumber, 1, s.startLineNumber, 1),
										T +
											`
`,
									);
									const k = this.k(g, v, l, s.startLineNumber, S, T);
									if (k !== null) k !== 0 && this.o(g, p, s, l, $, k);
									else {
										const L = {
												tokenization: {
													getLineTokens: (M) =>
														M === s.startLineNumber
															? g.tokenization.getLineTokens(S)
															: M >= s.startLineNumber + 1 &&
																	M <= s.endLineNumber + 1
																? g.tokenization.getLineTokens(M - 1)
																: g.tokenization.getLineTokens(M),
													getLanguageId: o,
													getLanguageIdAtPosition: f,
												},
												getLineContent: (M) =>
													M === s.startLineNumber
														? T
														: M >= s.startLineNumber + 1 &&
																M <= s.endLineNumber + 1
															? g.getLineContent(M - 1)
															: g.getLineContent(M),
											},
											D = (0, a.$Jtb)(
												this.c,
												L,
												g.getLanguageIdAtPosition(S, 1),
												s.startLineNumber + 1,
												v,
												this.g,
											);
										if (D !== null) {
											const M = t.$Cf(g.getLineContent(s.startLineNumber)),
												N = u.$xic(D, l),
												A = u.$xic(M, l);
											if (N !== A) {
												const R = N - A;
												this.o(g, p, s, l, $, R);
											}
										}
									}
								} else
									p.addEditOperation(
										new E.$iL(s.startLineNumber, 1, s.startLineNumber, 1),
										T +
											`
`,
									);
							} else if (
								((S = s.startLineNumber - 1),
								(I = g.getLineContent(S)),
								p.addEditOperation(new E.$iL(S, 1, S + 1, 1), null),
								p.addEditOperation(
									new E.$iL(
										s.endLineNumber,
										g.getLineMaxColumn(s.endLineNumber),
										s.endLineNumber,
										g.getLineMaxColumn(s.endLineNumber),
									),
									`
` + I,
								),
								this.n(g, s))
							) {
								const T = {
										tokenization: {
											getLineTokens: (k) =>
												k === S
													? g.tokenization.getLineTokens(s.startLineNumber)
													: g.tokenization.getLineTokens(k),
											getLanguageId: o,
											getLanguageIdAtPosition: f,
										},
										getLineContent: (k) =>
											k === S
												? g.getLineContent(s.startLineNumber)
												: g.getLineContent(k),
									},
									P = this.l(g, v, l, s.startLineNumber, s.startLineNumber - 2);
								if (P !== null) P !== 0 && this.o(g, p, s, l, $, P);
								else {
									const k = (0, a.$Jtb)(
										this.c,
										T,
										g.getLanguageIdAtPosition(s.startLineNumber, 1),
										S,
										v,
										this.g,
									);
									if (k !== null) {
										const L = t.$Cf(g.getLineContent(s.startLineNumber)),
											D = u.$xic(k, l),
											M = u.$xic(L, l);
										if (D !== M) {
											const N = D - M;
											this.o(g, p, s, l, $, N);
										}
									}
								}
							}
						}
						this.d = p.trackSelection(s);
					}
					h(g, p, o) {
						return {
							shiftIndent: (f) => i.$Rtb.shiftIndent(f, f.length + 1, g, p, o),
							unshiftIndent: (f) =>
								i.$Rtb.unshiftIndent(f, f.length + 1, g, p, o),
						};
					}
					j(g, p, o, f, b) {
						if (b) {
							let s = b.indentation;
							b.indentAction === d.IndentAction.None ||
							b.indentAction === d.IndentAction.Indent
								? (s = b.indentation + b.appendText)
								: b.indentAction === d.IndentAction.IndentOutdent
									? (s = b.indentation)
									: b.indentAction === d.IndentAction.Outdent &&
										(s = p.unshiftIndent(b.indentation) + b.appendText);
							const l = g.getLineContent(f);
							if (this.m(l).indexOf(this.m(s)) >= 0) {
								const y = t.$Cf(g.getLineContent(f));
								let $ = t.$Cf(s);
								const v = (0, a.$Mtb)(g, f, this.g);
								v !== null &&
									v & r.IndentConsts.DECREASE_MASK &&
									($ = p.unshiftIndent($));
								const S = u.$xic($, o),
									I = u.$xic(y, o);
								return S - I;
							}
						}
						return null;
					}
					k(g, p, o, f, b, s) {
						if (t.$Df(s) >= 0) {
							const l = g.getLineMaxColumn(b),
								y = (0, h.$Qtb)(this.c, g, new E.$iL(b, l, b, l), this.g);
							return this.j(g, p, o, f, y);
						} else {
							let l = f - 1;
							for (; l >= 1; ) {
								const v = g.getLineContent(l);
								if (t.$Df(v) >= 0) break;
								l--;
							}
							if (l < 1 || f > g.getLineCount()) return null;
							const y = g.getLineMaxColumn(l),
								$ = (0, h.$Qtb)(this.c, g, new E.$iL(l, y, l, y), this.g);
							return this.j(g, p, o, f, $);
						}
					}
					l(g, p, o, f, b, s) {
						let l = b;
						for (; l >= 1; ) {
							let v;
							if (
								(l === b && s !== void 0 ? (v = s) : (v = g.getLineContent(l)),
								t.$Df(v) >= 0)
							)
								break;
							l--;
						}
						if (l < 1 || f > g.getLineCount()) return null;
						const y = g.getLineMaxColumn(l),
							$ = (0, h.$Qtb)(this.c, g, new E.$iL(l, y, l, y), this.g);
						return this.j(g, p, o, f, $);
					}
					m(g) {
						return g.replace(/^\s+/, "");
					}
					n(g, p) {
						if (
							this.c < w.EditorAutoIndentStrategy.Full ||
							!g.tokenization.isCheapToTokenize(p.startLineNumber)
						)
							return !1;
						const o = g.getLanguageIdAtPosition(p.startLineNumber, 1),
							f = g.getLanguageIdAtPosition(p.endLineNumber, 1);
						return !(
							o !== f ||
							this.g.getLanguageConfiguration(o).indentRulesSupport === null
						);
					}
					o(g, p, o, f, b, s) {
						for (let l = o.startLineNumber; l <= o.endLineNumber; l++) {
							const y = g.getLineContent(l),
								$ = t.$Cf(y),
								S = u.$xic($, f) + s,
								I = u.$yic(S, f, b);
							I !== $ &&
								(p.addEditOperation(new E.$iL(l, 1, l, $.length + 1), I),
								l === o.endLineNumber &&
									o.endColumn <= $.length + 1 &&
									I === "" &&
									(this.f = !0));
						}
					}
					computeCursorState(g, p) {
						let o = p.getTrackedSelection(this.d);
						return (
							this.e && (o = o.setEndPosition(o.endLineNumber + 1, 1)),
							this.f &&
								o.startLineNumber < o.endLineNumber &&
								(o = o.setEndPosition(o.endLineNumber, 2)),
							o
						);
					}
				};
				(e.$Sic = c), (e.$Sic = c = Ne([j(3, m.$aN)], c));
			},
		),
		define(
			de[1633],
			he([1, 0, 7, 203, 14, 26, 6, 94, 3, 251, 38, 930, 4, 5]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ADb = e.$zDb = void 0),
					(e.$yDb = n),
					(t = mt(t)),
					(h = mt(h));
				function n(o) {
					return (
						!!o &&
						!!(
							o.completion.documentation ||
							(o.completion.detail &&
								o.completion.detail !== o.completion.label)
						)
					);
				}
				let g = class {
					constructor(f, b) {
						(this.r = f),
							(this.c = new C.$re()),
							(this.onDidClose = this.c.event),
							(this.d = new C.$re()),
							(this.onDidChangeContents = this.d.event),
							(this.l = new m.$Zc()),
							(this.n = new m.$Zc()),
							(this.o = 1),
							(this.q = new t.$pgb(330, 0)),
							(this.domNode = t.$(".suggest-details")),
							this.domNode.classList.add("no-docs"),
							(this.m = b.createInstance(r.$Qzb, { editor: f })),
							(this.h = t.$(".body")),
							(this.g = new i.$8hb(this.h, { alwaysConsumeMouseWheel: !0 })),
							t.$fhb(this.domNode, this.g.getDomNode()),
							this.l.add(this.g),
							(this.i = t.$fhb(this.h, t.$(".header"))),
							(this.f = t.$fhb(
								this.i,
								t.$("span" + E.ThemeIcon.asCSSSelector(w.$ak.close)),
							)),
							(this.f.title = h.localize(1511, null)),
							(this.j = t.$fhb(this.i, t.$("p.type"))),
							(this.k = t.$fhb(this.h, t.$("p.docs"))),
							this.s(),
							this.l.add(
								this.r.onDidChangeConfiguration((s) => {
									s.hasChanged(u.EditorOption.fontInfo) && this.s();
								}),
							);
					}
					dispose() {
						this.l.dispose(), this.n.dispose();
					}
					s() {
						const f = this.r.getOptions(),
							b = f.get(u.EditorOption.fontInfo),
							s = b.getMassagedFontFamily(),
							l = f.get(u.EditorOption.suggestFontSize) || b.fontSize,
							y = f.get(u.EditorOption.suggestLineHeight) || b.lineHeight,
							$ = b.fontWeight,
							v = `${l}px`,
							S = `${y}px`;
						(this.domNode.style.fontSize = v),
							(this.domNode.style.lineHeight = `${y / l}`),
							(this.domNode.style.fontWeight = $),
							(this.domNode.style.fontFeatureSettings = b.fontFeatureSettings),
							(this.j.style.fontFamily = s),
							(this.f.style.height = S),
							(this.f.style.width = S);
					}
					getLayoutInfo() {
						const f =
								this.r.getOption(u.EditorOption.suggestLineHeight) ||
								this.r.getOption(u.EditorOption.fontInfo).lineHeight,
							b = this.o,
							s = b * 2;
						return {
							lineHeight: f,
							borderWidth: b,
							borderHeight: s,
							verticalPadding: 22,
							horizontalPadding: 14,
						};
					}
					renderLoading() {
						(this.j.textContent = h.localize(1512, null)),
							(this.k.textContent = ""),
							this.domNode.classList.remove("no-docs", "no-type"),
							this.layout(this.size.width, this.getLayoutInfo().lineHeight * 2),
							this.d.fire(this);
					}
					renderItem(f, b) {
						this.n.clear();
						let { detail: s, documentation: l } = f.completion;
						if (b) {
							let y = "";
							(y += `score: ${f.score[0]}
`),
								(y += `prefix: ${f.word ?? "(no prefix)"}
`),
								(y += `word: ${f.completion.filterText ? f.completion.filterText + " (filterText)" : f.textLabel}
`),
								(y += `distance: ${f.distance} (localityBonus-setting)
`),
								(y += `index: ${f.idx}, based on ${(f.completion.sortText && `sortText: "${f.completion.sortText}"`) || "label"}
`),
								(y += `commit_chars: ${f.completion.commitCharacters?.join("")}
`),
								(l = new d.$cl().appendCodeblock("empty", y)),
								(s = `Provider: ${f.provider._debugDisplayName}`);
						}
						if (!b && !n(f)) {
							this.clearContents();
							return;
						}
						if ((this.domNode.classList.remove("no-docs", "no-type"), s)) {
							const y = s.length > 1e5 ? `${s.substr(0, 1e5)}\u2026` : s;
							(this.j.textContent = y),
								(this.j.title = y),
								t.show(this.j),
								this.j.classList.toggle("auto-wrap", !/\r?\n^\s+/gim.test(y));
						} else
							t.$9fb(this.j),
								(this.j.title = ""),
								t.hide(this.j),
								this.domNode.classList.add("no-type");
						if ((t.$9fb(this.k), typeof l == "string"))
							this.k.classList.remove("markdown-docs"),
								(this.k.textContent = l);
						else if (l) {
							this.k.classList.add("markdown-docs"), t.$9fb(this.k);
							const y = this.m.render(l);
							this.k.appendChild(y.element),
								this.n.add(y),
								this.n.add(
									this.m.onDidRenderAsync(() => {
										this.layout(
											this.q.width,
											this.j.clientHeight + this.k.clientHeight,
										),
											this.d.fire(this);
									}),
								);
						}
						(this.domNode.style.userSelect = "text"),
							(this.domNode.tabIndex = -1),
							(this.f.onmousedown = (y) => {
								y.preventDefault(), y.stopPropagation();
							}),
							(this.f.onclick = (y) => {
								y.preventDefault(), y.stopPropagation(), this.c.fire();
							}),
							(this.h.scrollTop = 0),
							this.layout(
								this.q.width,
								this.j.clientHeight + this.k.clientHeight,
							),
							this.d.fire(this);
					}
					clearContents() {
						this.domNode.classList.add("no-docs"),
							(this.j.textContent = ""),
							(this.k.textContent = "");
					}
					get isEmpty() {
						return this.domNode.classList.contains("no-docs");
					}
					get size() {
						return this.q;
					}
					layout(f, b) {
						const s = new t.$pgb(f, b);
						t.$pgb.equals(s, this.q) ||
							((this.q = s), t.size(this.domNode, f, b)),
							this.g.scanDomNode();
					}
					scrollDown(f = 8) {
						this.h.scrollTop += f;
					}
					scrollUp(f = 8) {
						this.h.scrollTop -= f;
					}
					scrollTop() {
						this.h.scrollTop = 0;
					}
					scrollBottom() {
						this.h.scrollTop = this.h.scrollHeight;
					}
					pageDown() {
						this.scrollDown(80);
					}
					pageUp() {
						this.scrollUp(80);
					}
					set borderWidth(f) {
						this.o = f;
					}
					get borderWidth() {
						return this.o;
					}
				};
				(e.$zDb = g), (e.$zDb = g = Ne([j(1, c.$Li)], g));
				class p {
					constructor(f, b) {
						(this.widget = f),
							(this.k = b),
							(this.allowEditorOverflow = !0),
							(this.c = new m.$Zc()),
							(this.f = !1),
							(this.h = !0),
							(this.d = new a.$dpb()),
							this.d.domNode.classList.add("suggest-details-container"),
							this.d.domNode.appendChild(f.domNode),
							this.d.enableSashes(!1, !0, !0, !1);
						let s,
							l,
							y = 0,
							$ = 0;
						this.c.add(
							this.d.onDidWillResize(() => {
								(s = this.j), (l = this.d.size);
							}),
						),
							this.c.add(
								this.d.onDidResize((v) => {
									if (s && l) {
										this.widget.layout(v.dimension.width, v.dimension.height);
										let S = !1;
										v.west && (($ = l.width - v.dimension.width), (S = !0)),
											v.north &&
												((y = l.height - v.dimension.height), (S = !0)),
											S && this.l({ top: s.top + y, left: s.left + $ });
									}
									v.done &&
										((s = void 0),
										(l = void 0),
										(y = 0),
										($ = 0),
										(this.i = v.dimension));
								}),
							),
							this.c.add(
								this.widget.onDidChangeContents(() => {
									this.g &&
										this._placeAtAnchor(
											this.g,
											this.i ?? this.widget.size,
											this.h,
										);
								}),
							);
					}
					dispose() {
						this.d.dispose(), this.c.dispose(), this.hide();
					}
					getId() {
						return "suggest.details";
					}
					getDomNode() {
						return this.d.domNode;
					}
					getPosition() {
						return this.j ? { preference: this.j } : null;
					}
					show() {
						this.f || (this.k.addOverlayWidget(this), (this.f = !0));
					}
					hide(f = !1) {
						this.d.clearSashHoverState(),
							this.f &&
								(this.k.removeOverlayWidget(this),
								(this.f = !1),
								(this.g = void 0),
								(this.j = void 0)),
							f && ((this.i = void 0), this.widget.clearContents());
					}
					placeAtAnchor(f, b) {
						const s = f.getBoundingClientRect();
						(this.g = s),
							(this.h = b),
							this._placeAtAnchor(this.g, this.i ?? this.widget.size, b);
					}
					_placeAtAnchor(f, b, s) {
						const l = t.$ogb(this.getDomNode().ownerDocument.body),
							y = this.widget.getLayoutInfo(),
							$ = new t.$pgb(220, 2 * y.lineHeight),
							v = f.top,
							S = (function () {
								const U =
										l.width -
										(f.left + f.width + y.borderWidth + y.horizontalPadding),
									z = -y.borderWidth + f.left + f.width,
									F = new t.$pgb(
										U,
										l.height - f.top - y.borderHeight - y.verticalPadding,
									),
									x = F.with(
										void 0,
										f.top + f.height - y.borderHeight - y.verticalPadding,
									);
								return {
									top: v,
									left: z,
									fit: U - b.width,
									maxSizeTop: F,
									maxSizeBottom: x,
									minSize: $.with(Math.min(U, $.width)),
								};
							})(),
							I = (function () {
								const U = f.left - y.borderWidth - y.horizontalPadding,
									z = Math.max(
										y.horizontalPadding,
										f.left - b.width - y.borderWidth,
									),
									F = new t.$pgb(
										U,
										l.height - f.top - y.borderHeight - y.verticalPadding,
									),
									x = F.with(
										void 0,
										f.top + f.height - y.borderHeight - y.verticalPadding,
									);
								return {
									top: v,
									left: z,
									fit: U - b.width,
									maxSizeTop: F,
									maxSizeBottom: x,
									minSize: $.with(Math.min(U, $.width)),
								};
							})(),
							T = (function () {
								const U = f.left,
									z = -y.borderWidth + f.top + f.height,
									F = new t.$pgb(
										f.width - y.borderHeight,
										l.height - f.top - f.height - y.verticalPadding,
									);
								return {
									top: z,
									left: U,
									fit: F.height - b.height,
									maxSizeBottom: F,
									maxSizeTop: F,
									minSize: $.with(F.width),
								};
							})(),
							P = [S, I, T],
							k =
								P.find((U) => U.fit >= 0) ?? P.sort((U, z) => z.fit - U.fit)[0],
							L = f.top + f.height - y.borderHeight;
						let D,
							M = b.height;
						const N = Math.max(k.maxSizeTop.height, k.maxSizeBottom.height);
						M > N && (M = N);
						let A;
						s
							? M <= k.maxSizeTop.height
								? ((D = !0), (A = k.maxSizeTop))
								: ((D = !1), (A = k.maxSizeBottom))
							: M <= k.maxSizeBottom.height
								? ((D = !1), (A = k.maxSizeBottom))
								: ((D = !0), (A = k.maxSizeTop));
						let { top: R, left: O } = k;
						!D && M > f.height && (R = L - M);
						const B = this.k.getDomNode();
						if (B) {
							const U = B.getBoundingClientRect();
							(R -= U.top), (O -= U.left);
						}
						this.l({ left: O, top: R }),
							this.d.enableSashes(!D, k === S, D, k !== S),
							(this.d.minSize = k.minSize),
							(this.d.maxSize = A),
							this.d.layout(M, Math.min(A.width, b.width)),
							this.widget.layout(this.d.size.width, this.d.size.height);
					}
					l(f) {
						(this.j = f), this.k.layoutOverlayWidget(this);
					}
				}
				e.$ADb = p;
			},
		),
		define(
			de[950],
			he([1, 0, 24, 6, 187, 3, 59, 82, 28, 9, 10, 81, 22, 30]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$o = e.$9o = e.$8o = e.$7o = e.$6o = void 0),
					(e.$0o = s),
					(t = mt(t)),
					(w = mt(w)),
					(d = mt(d)),
					(m = mt(m));
				function n(v) {
					return Object.isFrozen(v) ? v : d.$wo(v);
				}
				class g {
					static createEmptyModel(S) {
						return new g({}, [], [], void 0, S);
					}
					constructor(S, I, T, P, k) {
						(this.b = S),
							(this.c = I),
							(this.d = T),
							(this.raw = P),
							(this.f = k),
							(this.a = new Map());
					}
					get rawConfiguration() {
						if (!this.g)
							if (this.raw?.length) {
								const S = this.raw.map((I) => {
									if (I instanceof g) return I;
									const T = new p("", this.f);
									return T.parseRaw(I), T.configurationModel;
								});
								this.g = S.reduce((I, T) => (T === I ? T : I.merge(T)), S[0]);
							} else this.g = this;
						return this.g;
					}
					get contents() {
						return this.b;
					}
					get overrides() {
						return this.d;
					}
					get keys() {
						return this.c;
					}
					isEmpty() {
						return (
							this.c.length === 0 &&
							Object.keys(this.b).length === 0 &&
							this.d.length === 0
						);
					}
					getValue(S) {
						return S ? (0, u.$oj)(this.contents, S) : this.contents;
					}
					inspect(S, I) {
						const T = this;
						return {
							get value() {
								return n(T.rawConfiguration.getValue(S));
							},
							get override() {
								return I
									? n(T.rawConfiguration.getOverrideValue(S, I))
									: void 0;
							},
							get merged() {
								return n(
									I
										? T.rawConfiguration.override(I).getValue(S)
										: T.rawConfiguration.getValue(S),
								);
							},
							get overrides() {
								const P = [];
								for (const { contents: k, identifiers: L, keys: D } of T
									.rawConfiguration.overrides) {
									const M = new g(k, D, [], void 0, T.f).getValue(S);
									M !== void 0 && P.push({ identifiers: L, value: M });
								}
								return P.length ? n(P) : void 0;
							},
						};
					}
					getOverrideValue(S, I) {
						const T = this.j(I);
						return T ? (S ? (0, u.$oj)(T, S) : T) : void 0;
					}
					getKeysForOverrideIdentifier(S) {
						const I = [];
						for (const T of this.overrides)
							T.identifiers.includes(S) && I.push(...T.keys);
						return t.$Qb(I);
					}
					getAllOverrideIdentifiers() {
						const S = [];
						for (const I of this.overrides) S.push(...I.identifiers);
						return t.$Qb(S);
					}
					override(S) {
						let I = this.a.get(S);
						return I || ((I = this.h(S)), this.a.set(S, I)), I;
					}
					merge(...S) {
						const I = d.$vo(this.contents),
							T = d.$vo(this.overrides),
							P = [...this.keys],
							k = this.raw?.length ? [...this.raw] : [this];
						for (const L of S)
							if ((k.push(...(L.raw?.length ? L.raw : [L])), !L.isEmpty())) {
								this.i(I, L.contents);
								for (const D of L.overrides) {
									const [M] = T.filter((N) =>
										t.$yb(N.identifiers, D.identifiers),
									);
									M
										? (this.i(M.contents, D.contents),
											M.keys.push(...D.keys),
											(M.keys = t.$Qb(M.keys)))
										: T.push(d.$vo(D));
								}
								for (const D of L.keys) P.indexOf(D) === -1 && P.push(D);
							}
						return new g(
							I,
							P,
							T,
							k.every((L) => L instanceof g) ? void 0 : k,
							this.f,
						);
					}
					h(S) {
						const I = this.j(S);
						if (!I || typeof I != "object" || !Object.keys(I).length)
							return this;
						const T = {};
						for (const P of t.$Qb([
							...Object.keys(this.contents),
							...Object.keys(I),
						])) {
							let k = this.contents[P];
							const L = I[P];
							L &&
								(typeof k == "object" && typeof L == "object"
									? ((k = d.$vo(k)), this.i(k, L))
									: (k = L)),
								(T[P] = k);
						}
						return new g(T, this.keys, this.overrides, void 0, this.f);
					}
					i(S, I) {
						for (const T of Object.keys(I)) {
							if (T in S && m.$ng(S[T]) && m.$ng(I[T])) {
								this.i(S[T], I[T]);
								continue;
							}
							S[T] = d.$vo(I[T]);
						}
					}
					j(S) {
						let I = null,
							T = null;
						const P = (k) => {
							k && (T ? this.i(T, k) : (T = d.$vo(k)));
						};
						for (const k of this.overrides)
							k.identifiers.length === 1 && k.identifiers[0] === S
								? (I = k.contents)
								: k.identifiers.includes(S) && P(k.contents);
						return P(I), T;
					}
					toJSON() {
						return {
							contents: this.contents,
							overrides: this.overrides,
							keys: this.keys,
						};
					}
					addValue(S, I) {
						this.k(S, I, !0);
					}
					setValue(S, I) {
						this.k(S, I, !1);
					}
					removeValue(S) {
						const I = this.keys.indexOf(S);
						I !== -1 &&
							(this.keys.splice(I, 1),
							(0, u.$nj)(this.contents, S),
							a.$Xo.test(S) &&
								this.overrides.splice(
									this.overrides.findIndex((T) =>
										t.$yb(T.identifiers, (0, a.$Yo)(S)),
									),
									1,
								));
					}
					k(S, I, T) {
						if (
							((0, u.$mj)(this.contents, S, I, (P) => this.f.error(P)),
							(T = T || this.keys.indexOf(S) === -1),
							T && this.keys.push(S),
							a.$Xo.test(S))
						) {
							const P = (0, a.$Yo)(S),
								k = {
									identifiers: P,
									keys: Object.keys(this.contents[S]),
									contents: (0, u.$lj)(this.contents[S], (D) =>
										this.f.error(D),
									),
								},
								L = this.overrides.findIndex((D) => t.$yb(D.identifiers, P));
							L !== -1 ? (this.overrides[L] = k) : this.overrides.push(k);
						}
					}
				}
				e.$6o = g;
				class p {
					constructor(S, I) {
						(this.f = S),
							(this.g = I),
							(this.a = null),
							(this.b = null),
							(this.c = []),
							(this.d = []);
					}
					get configurationModel() {
						return this.b || g.createEmptyModel(this.g);
					}
					get restrictedConfigurations() {
						return this.c;
					}
					get errors() {
						return this.d;
					}
					parse(S, I) {
						if (!m.$ug(S)) {
							const T = this.h(S);
							this.parseRaw(T, I);
						}
					}
					reparse(S) {
						this.a && this.parseRaw(this.a, S);
					}
					parseRaw(S, I) {
						this.a = S;
						const {
							contents: T,
							keys: P,
							overrides: k,
							restricted: L,
							hasExcludedProperties: D,
						} = this.i(S, I);
						(this.b = new g(T, P, k, D ? [S] : void 0, this.g)),
							(this.c = L || []);
					}
					h(S) {
						let I = {},
							T = null,
							P = [];
						const k = [],
							L = [];
						function D(N) {
							Array.isArray(P) ? P.push(N) : T !== null && (P[T] = N);
						}
						const M = {
							onObjectBegin: () => {
								const N = {};
								D(N), k.push(P), (P = N), (T = null);
							},
							onObjectProperty: (N) => {
								T = N;
							},
							onObjectEnd: () => {
								P = k.pop();
							},
							onArrayBegin: () => {
								const N = [];
								D(N), k.push(P), (P = N), (T = null);
							},
							onArrayEnd: () => {
								P = k.pop();
							},
							onLiteralValue: D,
							onError: (N, A, R) => {
								L.push({ error: N, offset: A, length: R });
							},
						};
						if (S)
							try {
								w.$ko(S, M), (I = P[0] || {});
							} catch (N) {
								this.g.error(
									`Error while parsing settings file ${this.f}: ${N}`,
								),
									(this.d = [N]);
							}
						return I;
					}
					i(S, I) {
						const T = c.$Io
								.as(a.$No.Configuration)
								.getConfigurationProperties(),
							P = this.j(S, T, !0, I);
						S = P.raw;
						const k = (0, u.$lj)(S, (M) =>
								this.g.error(`Conflict in settings file ${this.f}: ${M}`),
							),
							L = Object.keys(S),
							D = this.l(S, (M) =>
								this.g.error(`Conflict in settings file ${this.f}: ${M}`),
							);
						return {
							contents: k,
							keys: L,
							overrides: D,
							restricted: P.restricted,
							hasExcludedProperties: P.hasExcludedProperties,
						};
					}
					j(S, I, T, P) {
						let k = !1;
						if (!P?.scopes && !P?.skipRestricted && !P?.exclude?.length)
							return { raw: S, restricted: [], hasExcludedProperties: k };
						const L = {},
							D = [];
						for (const M in S)
							if (a.$Xo.test(M) && T) {
								const N = this.j(S[M], I, !1, P);
								(L[M] = N.raw),
									(k = k || N.hasExcludedProperties),
									D.push(...N.restricted);
							} else {
								const N = I[M],
									A = N
										? typeof N.scope < "u"
											? N.scope
											: a.ConfigurationScope.WINDOW
										: void 0;
								N?.restricted && D.push(M),
									!P.exclude?.includes(M) &&
									(P.include?.includes(M) ||
										((A === void 0 ||
											P.scopes === void 0 ||
											P.scopes.includes(A)) &&
											!(P.skipRestricted && N?.restricted)))
										? (L[M] = S[M])
										: (k = !0);
							}
						return { raw: L, restricted: D, hasExcludedProperties: k };
					}
					l(S, I) {
						const T = [];
						for (const P of Object.keys(S))
							if (a.$Xo.test(P)) {
								const k = {};
								for (const L in S[P]) k[L] = S[P][L];
								T.push({
									identifiers: (0, a.$Yo)(P),
									keys: Object.keys(k),
									contents: (0, u.$lj)(k, I),
								});
							}
						return T;
					}
				}
				e.$7o = p;
				class o extends E.$1c {
					constructor(S, I, T, P, k) {
						super(),
							(this.c = S),
							(this.f = I),
							(this.g = P),
							(this.h = k),
							(this.b = this.D(new i.$re())),
							(this.onDidChange = this.b.event),
							(this.a = new p(this.c.toString(), k)),
							this.D(this.g.watch(T.dirname(this.c))),
							this.D(this.g.watch(this.c)),
							this.D(
								i.Event.any(
									i.Event.filter(this.g.onDidFilesChange, (L) =>
										L.contains(this.c),
									),
									i.Event.filter(
										this.g.onDidRunOperation,
										(L) =>
											(L.isOperation(h.FileOperation.CREATE) ||
												L.isOperation(h.FileOperation.COPY) ||
												L.isOperation(h.FileOperation.DELETE) ||
												L.isOperation(h.FileOperation.WRITE)) &&
											T.isEqual(L.resource, S),
									),
								)(() => this.b.fire()),
							);
					}
					async loadConfiguration() {
						try {
							const S = await this.g.readFile(this.c);
							return (
								this.a.parse(S.value.toString() || "{}", this.f),
								this.a.configurationModel
							);
						} catch {
							return g.createEmptyModel(this.h);
						}
					}
					reparse(S) {
						return (
							S && (this.f = S),
							this.a.reparse(this.f),
							this.a.configurationModel
						);
					}
					getRestrictedSettings() {
						return this.a.restrictedConfigurations;
					}
				}
				e.$8o = o;
				class f {
					constructor(S, I, T, P, k, L, D, M, N, A, R, O, B) {
						(this.a = S),
							(this.b = I),
							(this.c = T),
							(this.overrideIdentifiers = P),
							(this.d = k),
							(this.f = L),
							(this.g = D),
							(this.h = M),
							(this.i = N),
							(this.j = A),
							(this.k = R),
							(this.l = O),
							(this.m = B);
					}
					get value() {
						return n(this.c);
					}
					n(S) {
						return S?.value !== void 0 ||
							S?.override !== void 0 ||
							S?.overrides !== void 0
							? S
							: void 0;
					}
					get q() {
						return (
							this.p ||
								(this.p = this.d.inspect(this.a, this.b.overrideIdentifier)),
							this.p
						);
					}
					get defaultValue() {
						return this.q.merged;
					}
					get default() {
						return this.n(this.q);
					}
					get s() {
						return (
							this.r === void 0 &&
								(this.r = this.f ? this.f.inspect(this.a) : null),
							this.r
						);
					}
					get policyValue() {
						return this.s?.merged;
					}
					get policy() {
						return this.s?.value !== void 0 ? { value: this.s.value } : void 0;
					}
					get u() {
						return (
							this.t === void 0 &&
								(this.t = this.g ? this.g.inspect(this.a) : null),
							this.t
						);
					}
					get applicationValue() {
						return this.u?.merged;
					}
					get application() {
						return this.n(this.u);
					}
					get w() {
						return (
							this.v ||
								(this.v = this.h.inspect(this.a, this.b.overrideIdentifier)),
							this.v
						);
					}
					get userValue() {
						return this.w.merged;
					}
					get user() {
						return this.n(this.w);
					}
					get y() {
						return (
							this.x ||
								(this.x = this.i.inspect(this.a, this.b.overrideIdentifier)),
							this.x
						);
					}
					get userLocalValue() {
						return this.y.merged;
					}
					get userLocal() {
						return this.n(this.y);
					}
					get A() {
						return (
							this.z ||
								(this.z = this.j.inspect(this.a, this.b.overrideIdentifier)),
							this.z
						);
					}
					get userRemoteValue() {
						return this.A.merged;
					}
					get userRemote() {
						return this.n(this.A);
					}
					get D() {
						return (
							this.B === void 0 &&
								(this.B = this.k
									? this.k.inspect(this.a, this.b.overrideIdentifier)
									: null),
							this.B
						);
					}
					get workspaceValue() {
						return this.D?.merged;
					}
					get workspace() {
						return this.n(this.D);
					}
					get F() {
						return (
							this.E === void 0 &&
								(this.E = this.l
									? this.l.inspect(this.a, this.b.overrideIdentifier)
									: null),
							this.E
						);
					}
					get workspaceFolderValue() {
						return this.F?.merged;
					}
					get workspaceFolder() {
						return this.n(this.F);
					}
					get H() {
						return (
							this.G === void 0 &&
								(this.G = this.m.inspect(this.a, this.b.overrideIdentifier)),
							this.G
						);
					}
					get memoryValue() {
						return this.H.merged;
					}
					get memory() {
						return this.n(this.H);
					}
				}
				class b {
					constructor(S, I, T, P, k, L, D, M, N, A) {
						(this.j = S),
							(this.l = I),
							(this.m = T),
							(this.n = P),
							(this.p = k),
							(this.q = L),
							(this.r = D),
							(this.s = M),
							(this.t = N),
							(this.u = A),
							(this.h = null),
							(this.i = new C.$Gc()),
							(this.v = null);
					}
					getValue(S, I, T) {
						return this.w(S, I, T).getValue(S);
					}
					updateValue(S, I, T = {}) {
						let P;
						T.resource
							? ((P = this.t.get(T.resource)),
								P ||
									((P = g.createEmptyModel(this.u)), this.t.set(T.resource, P)))
							: (P = this.s),
							I === void 0 ? P.removeValue(S) : P.setValue(S, I),
							T.resource || (this.h = null);
					}
					inspect(S, I, T) {
						const P = this.w(S, I, T),
							k = this.A(I.resource, T),
							L = I.resource ? this.t.get(I.resource) || this.s : this.s,
							D = new Set();
						for (const M of P.overrides)
							for (const N of M.identifiers)
								P.getOverrideValue(S, N) !== void 0 && D.add(N);
						return new f(
							S,
							I,
							P.getValue(S),
							D.size ? [...D] : void 0,
							this.j,
							this.l.isEmpty() ? void 0 : this.l,
							this.applicationConfiguration.isEmpty()
								? void 0
								: this.applicationConfiguration,
							this.userConfiguration,
							this.localUserConfiguration,
							this.remoteUserConfiguration,
							T ? this.q : void 0,
							k || void 0,
							L,
						);
					}
					keys(S) {
						const I = this.A(void 0, S);
						return {
							default: this.j.keys.slice(0),
							user: this.userConfiguration.keys.slice(0),
							workspace: this.q.keys.slice(0),
							workspaceFolder: I ? I.keys.slice(0) : [],
						};
					}
					updateDefaultConfiguration(S) {
						(this.j = S), (this.h = null), this.i.clear();
					}
					updatePolicyConfiguration(S) {
						this.l = S;
					}
					updateApplicationConfiguration(S) {
						(this.m = S), (this.h = null), this.i.clear();
					}
					updateLocalUserConfiguration(S) {
						(this.n = S), (this.v = null), (this.h = null), this.i.clear();
					}
					updateRemoteUserConfiguration(S) {
						(this.p = S), (this.v = null), (this.h = null), this.i.clear();
					}
					updateWorkspaceConfiguration(S) {
						(this.q = S), (this.h = null), this.i.clear();
					}
					updateFolderConfiguration(S, I) {
						this.r.set(S, I), this.i.delete(S);
					}
					deleteFolderConfiguration(S) {
						this.folderConfigurations.delete(S), this.i.delete(S);
					}
					compareAndUpdateDefaultConfiguration(S, I) {
						const T = [];
						if (!I) {
							const { added: P, updated: k, removed: L } = y(this.j, S);
							I = [...P, ...k, ...L];
						}
						for (const P of I)
							for (const k of (0, a.$Yo)(P)) {
								const L = this.j.getKeysForOverrideIdentifier(k),
									D = S.getKeysForOverrideIdentifier(k),
									M = [
										...D.filter((N) => L.indexOf(N) === -1),
										...L.filter((N) => D.indexOf(N) === -1),
										...L.filter(
											(N) =>
												!d.$zo(
													this.j.override(k).getValue(N),
													S.override(k).getValue(N),
												),
										),
									];
								T.push([k, M]);
							}
						return (
							this.updateDefaultConfiguration(S), { keys: I, overrides: T }
						);
					}
					compareAndUpdatePolicyConfiguration(S) {
						const { added: I, updated: T, removed: P } = y(this.l, S),
							k = [...I, ...T, ...P];
						return (
							k.length && this.updatePolicyConfiguration(S),
							{ keys: k, overrides: [] }
						);
					}
					compareAndUpdateApplicationConfiguration(S) {
						const {
								added: I,
								updated: T,
								removed: P,
								overrides: k,
							} = y(this.applicationConfiguration, S),
							L = [...I, ...T, ...P];
						return (
							L.length && this.updateApplicationConfiguration(S),
							{ keys: L, overrides: k }
						);
					}
					compareAndUpdateLocalUserConfiguration(S) {
						const {
								added: I,
								updated: T,
								removed: P,
								overrides: k,
							} = y(this.localUserConfiguration, S),
							L = [...I, ...T, ...P];
						return (
							L.length && this.updateLocalUserConfiguration(S),
							{ keys: L, overrides: k }
						);
					}
					compareAndUpdateRemoteUserConfiguration(S) {
						const {
								added: I,
								updated: T,
								removed: P,
								overrides: k,
							} = y(this.remoteUserConfiguration, S),
							L = [...I, ...T, ...P];
						return (
							L.length && this.updateRemoteUserConfiguration(S),
							{ keys: L, overrides: k }
						);
					}
					compareAndUpdateWorkspaceConfiguration(S) {
						const {
								added: I,
								updated: T,
								removed: P,
								overrides: k,
							} = y(this.workspaceConfiguration, S),
							L = [...I, ...T, ...P];
						return (
							L.length && this.updateWorkspaceConfiguration(S),
							{ keys: L, overrides: k }
						);
					}
					compareAndUpdateFolderConfiguration(S, I) {
						const T = this.folderConfigurations.get(S),
							{ added: P, updated: k, removed: L, overrides: D } = y(T, I),
							M = [...P, ...k, ...L];
						return (
							(M.length || !T) && this.updateFolderConfiguration(S, I),
							{ keys: M, overrides: D }
						);
					}
					compareAndDeleteFolderConfiguration(S) {
						const I = this.folderConfigurations.get(S);
						if (!I) throw new Error("Unknown folder");
						this.deleteFolderConfiguration(S);
						const {
							added: T,
							updated: P,
							removed: k,
							overrides: L,
						} = y(I, void 0);
						return { keys: [...T, ...P, ...k], overrides: L };
					}
					get defaults() {
						return this.j;
					}
					get applicationConfiguration() {
						return this.m;
					}
					get userConfiguration() {
						return (
							this.v ||
								(this.v = this.p.isEmpty() ? this.n : this.n.merge(this.p)),
							this.v
						);
					}
					get localUserConfiguration() {
						return this.n;
					}
					get remoteUserConfiguration() {
						return this.p;
					}
					get workspaceConfiguration() {
						return this.q;
					}
					get folderConfigurations() {
						return this.r;
					}
					w(S, I, T) {
						let P = this.x(I, T);
						return (
							I.overrideIdentifier && (P = P.override(I.overrideIdentifier)),
							!this.l.isEmpty() &&
								this.l.getValue(S) !== void 0 &&
								(P = P.merge(this.l)),
							P
						);
					}
					x({ resource: S }, I) {
						let T = this.y();
						if (I && S) {
							const P = I.getFolder(S);
							P && (T = this.z(P.uri) || T);
							const k = this.t.get(S);
							k && (T = T.merge(k));
						}
						return T;
					}
					y() {
						return (
							this.h ||
								(this.h = this.j.merge(
									this.applicationConfiguration,
									this.userConfiguration,
									this.q,
									this.s,
								)),
							this.h
						);
					}
					z(S) {
						let I = this.i.get(S);
						if (!I) {
							const T = this.y(),
								P = this.r.get(S);
							P ? ((I = T.merge(P)), this.i.set(S, I)) : (I = T);
						}
						return I;
					}
					A(S, I) {
						if (I && S) {
							const T = I.getFolder(S);
							if (T) return this.r.get(T.uri);
						}
					}
					toData() {
						return {
							defaults: {
								contents: this.j.contents,
								overrides: this.j.overrides,
								keys: this.j.keys,
							},
							policy: {
								contents: this.l.contents,
								overrides: this.l.overrides,
								keys: this.l.keys,
							},
							application: {
								contents: this.applicationConfiguration.contents,
								overrides: this.applicationConfiguration.overrides,
								keys: this.applicationConfiguration.keys,
							},
							user: {
								contents: this.userConfiguration.contents,
								overrides: this.userConfiguration.overrides,
								keys: this.userConfiguration.keys,
							},
							workspace: {
								contents: this.q.contents,
								overrides: this.q.overrides,
								keys: this.q.keys,
							},
							folders: [...this.r.keys()].reduce((S, I) => {
								const { contents: T, overrides: P, keys: k } = this.r.get(I);
								return S.push([I, { contents: T, overrides: P, keys: k }]), S;
							}, []),
						};
					}
					allKeys() {
						const S = new Set();
						return (
							this.j.keys.forEach((I) => S.add(I)),
							this.userConfiguration.keys.forEach((I) => S.add(I)),
							this.q.keys.forEach((I) => S.add(I)),
							this.r.forEach((I) => I.keys.forEach((T) => S.add(T))),
							[...S.values()]
						);
					}
					B() {
						const S = new Set();
						return (
							this.j.getAllOverrideIdentifiers().forEach((I) => S.add(I)),
							this.userConfiguration
								.getAllOverrideIdentifiers()
								.forEach((I) => S.add(I)),
							this.q.getAllOverrideIdentifiers().forEach((I) => S.add(I)),
							this.r.forEach((I) =>
								I.getAllOverrideIdentifiers().forEach((T) => S.add(T)),
							),
							[...S.values()]
						);
					}
					D(S) {
						const I = new Set();
						return (
							this.j.getKeysForOverrideIdentifier(S).forEach((T) => I.add(T)),
							this.userConfiguration
								.getKeysForOverrideIdentifier(S)
								.forEach((T) => I.add(T)),
							this.q.getKeysForOverrideIdentifier(S).forEach((T) => I.add(T)),
							this.r.forEach((T) =>
								T.getKeysForOverrideIdentifier(S).forEach((P) => I.add(P)),
							),
							[...I.values()]
						);
					}
					static parse(S, I) {
						const T = this.E(S.defaults, I),
							P = this.E(S.policy, I),
							k = this.E(S.application, I),
							L = this.E(S.user, I),
							D = this.E(S.workspace, I),
							M = S.folders.reduce(
								(N, A) => (N.set(r.URI.revive(A[0]), this.E(A[1], I)), N),
								new C.$Gc(),
							);
						return new b(
							T,
							P,
							k,
							L,
							g.createEmptyModel(I),
							D,
							M,
							g.createEmptyModel(I),
							new C.$Gc(),
							I,
						);
					}
					static E(S, I) {
						return new g(S.contents, S.keys, S.overrides, void 0, I);
					}
				}
				e.$9o = b;
				function s(...v) {
					if (v.length === 0) return { keys: [], overrides: [] };
					if (v.length === 1) return v[0];
					const S = new Set(),
						I = new Map();
					for (const P of v)
						P.keys.forEach((k) => S.add(k)),
							P.overrides.forEach(([k, L]) => {
								const D = (0, C.$Dc)(I, k, new Set());
								L.forEach((M) => D.add(M));
							});
					const T = [];
					return (
						I.forEach((P, k) => T.push([k, [...P.values()]])),
						{ keys: [...S.values()], overrides: T }
					);
				}
				class l {
					constructor(S, I, T, P, k) {
						(this.change = S),
							(this.f = I),
							(this.g = T),
							(this.h = P),
							(this.i = k),
							(this.a = `
`),
							(this.b = this.a.charCodeAt(0)),
							(this.c = 46),
							(this.affectedKeys = new Set()),
							(this.j = void 0);
						for (const L of S.keys) this.affectedKeys.add(L);
						for (const [, L] of S.overrides)
							for (const D of L) this.affectedKeys.add(D);
						this.d = this.a;
						for (const L of this.affectedKeys) this.d += L + this.a;
					}
					get previousConfiguration() {
						return (
							!this.j && this.f && (this.j = b.parse(this.f.data, this.i)),
							this.j
						);
					}
					affectsConfiguration(S, I) {
						const T = this.a + S,
							P = this.d.indexOf(T);
						if (P < 0) return !1;
						const k = P + T.length;
						if (k >= this.d.length) return !1;
						const L = this.d.charCodeAt(k);
						if (L !== this.b && L !== this.c) return !1;
						if (I) {
							const D = this.previousConfiguration
									? this.previousConfiguration.getValue(S, I, this.f?.workspace)
									: void 0,
								M = this.g.getValue(S, I, this.h);
							return !d.$zo(D, M);
						}
						return !0;
					}
				}
				e.$$o = l;
				function y(v, S) {
					const {
							added: I,
							removed: T,
							updated: P,
						} = $(S?.rawConfiguration, v?.rawConfiguration),
						k = [],
						L = v?.getAllOverrideIdentifiers() || [],
						D = S?.getAllOverrideIdentifiers() || [];
					if (S) {
						const M = D.filter((N) => !L.includes(N));
						for (const N of M) k.push([N, S.getKeysForOverrideIdentifier(N)]);
					}
					if (v) {
						const M = L.filter((N) => !D.includes(N));
						for (const N of M) k.push([N, v.getKeysForOverrideIdentifier(N)]);
					}
					if (S && v) {
						for (const M of L)
							if (D.includes(M)) {
								const N = $(
									{
										contents: v.getOverrideValue(void 0, M) || {},
										keys: v.getKeysForOverrideIdentifier(M),
									},
									{
										contents: S.getOverrideValue(void 0, M) || {},
										keys: S.getKeysForOverrideIdentifier(M),
									},
								);
								k.push([M, [...N.added, ...N.removed, ...N.updated]]);
							}
					}
					return { added: I, removed: T, updated: P, overrides: k };
				}
				function $(v, S) {
					const I = v
							? S
								? v.keys.filter((k) => S.keys.indexOf(k) === -1)
								: [...v.keys]
							: [],
						T = S
							? v
								? S.keys.filter((k) => v.keys.indexOf(k) === -1)
								: [...S.keys]
							: [],
						P = [];
					if (v && S) {
						for (const k of S.keys)
							if (v.keys.indexOf(k) !== -1) {
								const L = (0, u.$oj)(S.contents, k),
									D = (0, u.$oj)(v.contents, k);
								d.$zo(L, D) || P.push(k);
							}
					}
					return { added: I, removed: T, updated: P };
				}
			},
		),
		define(
			de[1634],
			he([1, 0, 24, 6, 3, 82, 28, 950, 81, 34, 940, 30]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$bp = e.$ap = e.$_o = void 0);
				class h extends w.$1c {
					get configurationModel() {
						return this.b;
					}
					constructor(p) {
						super(),
							(this.c = p),
							(this.a = this.D(new i.$re())),
							(this.onDidChangeConfiguration = this.a.event),
							(this.b = d.$6o.createEmptyModel(this.c));
					}
					async initialize() {
						return (
							this.h(),
							this.D(
								a.$Io
									.as(m.$No.Configuration)
									.onDidUpdateConfiguration(
										({ properties: p, defaultsOverrides: o }) =>
											this.f(Array.from(p), o),
									),
							),
							this.configurationModel
						);
					}
					reload() {
						return this.h(), this.configurationModel;
					}
					f(p, o) {
						this.j(
							p,
							a.$Io.as(m.$No.Configuration).getConfigurationProperties(),
						),
							this.a.fire({ defaults: this.configurationModel, properties: p });
					}
					g() {
						return {};
					}
					h() {
						this.b = d.$6o.createEmptyModel(this.c);
						const p = a.$Io
							.as(m.$No.Configuration)
							.getConfigurationProperties();
						this.j(Object.keys(p), p);
					}
					j(p, o) {
						const f = this.g();
						for (const b of p) {
							const s = f[b],
								l = o[b];
							s !== void 0
								? this.b.setValue(b, s)
								: l
									? this.b.setValue(b, l.default)
									: this.b.removeValue(b);
						}
					}
				}
				e.$_o = h;
				class c {
					constructor() {
						(this.onDidChangeConfiguration = i.Event.None),
							(this.configurationModel = d.$6o.createEmptyModel(new r.$vk()));
					}
					async initialize() {
						return this.configurationModel;
					}
				}
				e.$ap = c;
				let n = class extends w.$1c {
					get configurationModel() {
						return this.b;
					}
					constructor(p, o, f) {
						super(),
							(this.c = p),
							(this.f = o),
							(this.g = f),
							(this.a = this.D(new i.$re())),
							(this.onDidChangeConfiguration = this.a.event),
							(this.b = d.$6o.createEmptyModel(this.g));
					}
					async initialize() {
						return (
							this.g.trace("PolicyConfiguration#initialize"),
							this.m(await this.h(this.c.configurationModel.keys), !1),
							this.D(this.f.onDidChange((p) => this.j(p))),
							this.D(
								this.c.onDidChangeConfiguration(async ({ properties: p }) =>
									this.m(await this.h(p), !0),
								),
							),
							this.b
						);
					}
					async h(p) {
						this.g.trace("PolicyConfiguration#updatePolicyDefinitions", p);
						const o = {},
							f = [],
							b = a.$Io.as(m.$No.Configuration).getConfigurationProperties();
						for (const s of p) {
							const l = b[s];
							if (!l) {
								f.push(s);
								continue;
							}
							if (l.policy) {
								if (l.type !== "string" && l.type !== "number") {
									this.g.warn(
										`Policy ${l.policy.name} has unsupported type ${l.type}`,
									);
									continue;
								}
								f.push(s), (o[l.policy.name] = { type: l.type });
							}
						}
						return (
							(0, C.$yg)(o) || (await this.f.updatePolicyDefinitions(o)), f
						);
					}
					j(p) {
						this.g.trace("PolicyConfiguration#onDidChangePolicies", p);
						const o = a.$Io.as(m.$No.Configuration).getPolicyConfigurations(),
							f = (0, t.$Lb)(p.map((b) => o.get(b)));
						this.m(f, !0);
					}
					m(p, o) {
						this.g.trace("PolicyConfiguration#update", p);
						const f = a.$Io
								.as(m.$No.Configuration)
								.getConfigurationProperties(),
							b = [],
							s = this.b.isEmpty();
						for (const l of p) {
							const y = f[l]?.policy?.name;
							if (y) {
								const $ = this.f.getPolicyValue(y);
								(s ? $ !== void 0 : !(0, E.$zo)(this.b.getValue(l), $)) &&
									b.push([l, $]);
							} else this.b.getValue(l) !== void 0 && b.push([l, void 0]);
						}
						if (b.length) {
							this.g.trace("PolicyConfiguration#changed", b);
							const l = this.b;
							this.b = d.$6o.createEmptyModel(this.g);
							for (const y of l.keys) this.b.setValue(y, l.getValue(y));
							for (const [y, $] of b)
								$ === void 0 ? this.b.removeValue(y) : this.b.setValue(y, $);
							o && this.a.fire(this.b);
						}
					}
				};
				(e.$bp = n), (e.$bp = n = Ne([j(1, u.$Ko), j(2, r.$ik)], n));
			},
		),
		define(
			de[43],
			he([1, 0, 343, 12, 31, 30, 3, 273]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$UX = e.$TX = e.KeybindingWeight = void 0);
				var m;
				(function (a) {
					(a[(a.EditorCore = 0)] = "EditorCore"),
						(a[(a.EditorContrib = 100)] = "EditorContrib"),
						(a[(a.WorkbenchContrib = 200)] = "WorkbenchContrib"),
						(a[(a.BuiltinExtension = 300)] = "BuiltinExtension"),
						(a[(a.ExternalExtension = 400)] = "ExternalExtension"),
						(a[(a.CursorDefaultPriority = 500)] = "CursorDefaultPriority"),
						(a[(a.CursorMaxPriority = 600)] = "CursorMaxPriority");
				})(m || (e.KeybindingWeight = m = {}));
				class r {
					constructor() {
						(this.c = new d.$$c()), (this.d = []), (this.e = null);
					}
					static f(h) {
						if (i.OS === i.OperatingSystem.Windows) {
							if (h && h.win) return h.win;
						} else if (i.OS === i.OperatingSystem.Macintosh) {
							if (h && h.mac) return h.mac;
						} else if (h && h.linux) return h.linux;
						return h;
					}
					registerKeybindingRule(h) {
						const c = r.f(h),
							n = new C.$Zc();
						if (c && c.primary) {
							const g = (0, t.$rs)(c.primary, i.OS);
							g && n.add(this.g(g, h.id, h.args, h.weight, 0, h.when));
						}
						if (c && Array.isArray(c.secondary))
							for (let g = 0, p = c.secondary.length; g < p; g++) {
								const o = c.secondary[g],
									f = (0, t.$rs)(o, i.OS);
								f && n.add(this.g(f, h.id, h.args, h.weight, -g - 1, h.when));
							}
						return n;
					}
					setExtensionKeybindings(h) {
						const c = [];
						let n = 0;
						for (const g of h)
							g.keybinding &&
								(c[n++] = {
									keybinding: g.keybinding,
									command: g.id,
									commandArgs: g.args,
									when: g.when,
									weight1: g.weight,
									weight2: 0,
									extensionId: g.extensionId || null,
									isBuiltinExtension: g.isBuiltinExtension || !1,
								});
						(this.d = c), (this.e = null);
					}
					registerCommandAndKeybindingRule(h) {
						return (0, C.$Xc)(
							this.registerKeybindingRule(h),
							w.$fk.registerCommand(h),
						);
					}
					g(h, c, n, g, p, o) {
						const f = this.c.push({
							keybinding: h,
							command: c,
							commandArgs: n,
							when: o,
							weight1: g,
							weight2: p,
							extensionId: null,
							isBuiltinExtension: !1,
						});
						return (
							(this.e = null),
							(0, C.$Yc)(() => {
								f(), (this.e = null);
							})
						);
					}
					getDefaultKeybindings() {
						return (
							this.e ||
								((this.e = Array.from(this.c).concat(this.d)), this.e.sort(u)),
							this.e.slice(0)
						);
					}
				}
				(e.$TX = new r()),
					(e.$UX = { EditorModes: "platform.keybindingsRegistry" }),
					E.$Io.add(e.$UX.EditorModes, e.$TX);
				function u(a, h) {
					if (a.weight1 !== h.weight1) return a.weight1 - h.weight1;
					if (a.command && h.command) {
						if (a.command < h.command) return -1;
						if (a.command > h.command) return 1;
					}
					return a.weight2 - h.weight2;
				}
			},
		),
		define(
			de[11],
			he([1, 0, 50, 26, 6, 3, 273, 31, 8, 5, 43]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				var a;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$3X = e.$2X = e.$1X = e.$ZX = e.$YX = e.$XX = void 0),
					(e.$VX = h),
					(e.$WX = c),
					(e.$4X = b);
				function h(s) {
					return s.command !== void 0;
				}
				function c(s) {
					return s.submenu !== void 0;
				}
				class n {
					static {
						this.a = new Map();
					}
					static {
						this.CommandPalette = new n("CommandPalette");
					}
					static {
						this.DebugBreakpointsContext = new n("DebugBreakpointsContext");
					}
					static {
						this.DebugCallStackContext = new n("DebugCallStackContext");
					}
					static {
						this.DebugConsoleContext = new n("DebugConsoleContext");
					}
					static {
						this.DebugVariablesContext = new n("DebugVariablesContext");
					}
					static {
						this.NotebookVariablesContext = new n("NotebookVariablesContext");
					}
					static {
						this.DebugHoverContext = new n("DebugHoverContext");
					}
					static {
						this.DebugWatchContext = new n("DebugWatchContext");
					}
					static {
						this.DebugToolBar = new n("DebugToolBar");
					}
					static {
						this.DebugToolBarStop = new n("DebugToolBarStop");
					}
					static {
						this.DebugCallStackToolbar = new n("DebugCallStackToolbar");
					}
					static {
						this.DebugCreateConfiguration = new n("DebugCreateConfiguration");
					}
					static {
						this.EditorContext = new n("EditorContext");
					}
					static {
						this.SimpleEditorContext = new n("SimpleEditorContext");
					}
					static {
						this.EditorContent = new n("EditorContent");
					}
					static {
						this.EditorLineNumberContext = new n("EditorLineNumberContext");
					}
					static {
						this.EditorContextCopy = new n("EditorContextCopy");
					}
					static {
						this.EditorContextPeek = new n("EditorContextPeek");
					}
					static {
						this.EditorContextShare = new n("EditorContextShare");
					}
					static {
						this.EditorTitle = new n("EditorTitle");
					}
					static {
						this.EditorTitleRun = new n("EditorTitleRun");
					}
					static {
						this.EditorTitleContext = new n("EditorTitleContext");
					}
					static {
						this.EditorTitleContextShare = new n("EditorTitleContextShare");
					}
					static {
						this.EmptyEditorGroup = new n("EmptyEditorGroup");
					}
					static {
						this.EmptyEditorGroupContext = new n("EmptyEditorGroupContext");
					}
					static {
						this.EditorTabsBarContext = new n("EditorTabsBarContext");
					}
					static {
						this.EditorTabsBarShowTabsSubmenu = new n(
							"EditorTabsBarShowTabsSubmenu",
						);
					}
					static {
						this.EditorTabsBarShowTabsZenModeSubmenu = new n(
							"EditorTabsBarShowTabsZenModeSubmenu",
						);
					}
					static {
						this.EditorActionsPositionSubmenu = new n(
							"EditorActionsPositionSubmenu",
						);
					}
					static {
						this.ExplorerContext = new n("ExplorerContext");
					}
					static {
						this.ExplorerContextShare = new n("ExplorerContextShare");
					}
					static {
						this.ExtensionContext = new n("ExtensionContext");
					}
					static {
						this.GlobalActivity = new n("GlobalActivity");
					}
					static {
						this.CommandCenter = new n("CommandCenter");
					}
					static {
						this.CommandCenterCenter = new n("CommandCenterCenter");
					}
					static {
						this.LayoutControlMenuSubmenu = new n("LayoutControlMenuSubmenu");
					}
					static {
						this.LayoutControlMenu = new n("LayoutControlMenu");
					}
					static {
						this.MenubarMainMenu = new n("MenubarMainMenu");
					}
					static {
						this.MenubarAppearanceMenu = new n("MenubarAppearanceMenu");
					}
					static {
						this.MenubarDebugMenu = new n("MenubarDebugMenu");
					}
					static {
						this.MenubarEditMenu = new n("MenubarEditMenu");
					}
					static {
						this.MenubarCopy = new n("MenubarCopy");
					}
					static {
						this.MenubarFileMenu = new n("MenubarFileMenu");
					}
					static {
						this.MenubarGoMenu = new n("MenubarGoMenu");
					}
					static {
						this.MenubarHelpMenu = new n("MenubarHelpMenu");
					}
					static {
						this.MenubarLayoutMenu = new n("MenubarLayoutMenu");
					}
					static {
						this.MenubarNewBreakpointMenu = new n("MenubarNewBreakpointMenu");
					}
					static {
						this.PanelAlignmentMenu = new n("PanelAlignmentMenu");
					}
					static {
						this.PanelPositionMenu = new n("PanelPositionMenu");
					}
					static {
						this.ActivityBarPositionMenu = new n("ActivityBarPositionMenu");
					}
					static {
						this.MenubarPreferencesMenu = new n("MenubarPreferencesMenu");
					}
					static {
						this.MenubarRecentMenu = new n("MenubarRecentMenu");
					}
					static {
						this.MenubarSelectionMenu = new n("MenubarSelectionMenu");
					}
					static {
						this.MenubarShare = new n("MenubarShare");
					}
					static {
						this.MenubarSwitchEditorMenu = new n("MenubarSwitchEditorMenu");
					}
					static {
						this.MenubarSwitchGroupMenu = new n("MenubarSwitchGroupMenu");
					}
					static {
						this.MenubarTerminalMenu = new n("MenubarTerminalMenu");
					}
					static {
						this.MenubarViewMenu = new n("MenubarViewMenu");
					}
					static {
						this.MenubarHomeMenu = new n("MenubarHomeMenu");
					}
					static {
						this.OpenEditorsContext = new n("OpenEditorsContext");
					}
					static {
						this.OpenEditorsContextShare = new n("OpenEditorsContextShare");
					}
					static {
						this.ProblemsPanelContext = new n("ProblemsPanelContext");
					}
					static {
						this.SCMInputBox = new n("SCMInputBox");
					}
					static {
						this.SCMChangesSeparator = new n("SCMChangesSeparator");
					}
					static {
						this.SCMChangesContext = new n("SCMChangesContext");
					}
					static {
						this.SCMIncomingChanges = new n("SCMIncomingChanges");
					}
					static {
						this.SCMIncomingChangesContext = new n("SCMIncomingChangesContext");
					}
					static {
						this.SCMIncomingChangesSetting = new n("SCMIncomingChangesSetting");
					}
					static {
						this.SCMOutgoingChanges = new n("SCMOutgoingChanges");
					}
					static {
						this.SCMOutgoingChangesContext = new n("SCMOutgoingChangesContext");
					}
					static {
						this.SCMOutgoingChangesSetting = new n("SCMOutgoingChangesSetting");
					}
					static {
						this.SCMIncomingChangesAllChangesContext = new n(
							"SCMIncomingChangesAllChangesContext",
						);
					}
					static {
						this.SCMIncomingChangesHistoryItemContext = new n(
							"SCMIncomingChangesHistoryItemContext",
						);
					}
					static {
						this.SCMOutgoingChangesAllChangesContext = new n(
							"SCMOutgoingChangesAllChangesContext",
						);
					}
					static {
						this.SCMOutgoingChangesHistoryItemContext = new n(
							"SCMOutgoingChangesHistoryItemContext",
						);
					}
					static {
						this.SCMChangeContext = new n("SCMChangeContext");
					}
					static {
						this.SCMResourceContext = new n("SCMResourceContext");
					}
					static {
						this.SCMResourceContextShare = new n("SCMResourceContextShare");
					}
					static {
						this.SCMResourceFolderContext = new n("SCMResourceFolderContext");
					}
					static {
						this.SCMResourceGroupContext = new n("SCMResourceGroupContext");
					}
					static {
						this.SCMSourceControl = new n("SCMSourceControl");
					}
					static {
						this.SCMSourceControlInline = new n("SCMSourceControlInline");
					}
					static {
						this.SCMSourceControlTitle = new n("SCMSourceControlTitle");
					}
					static {
						this.SCMHistoryTitle = new n("SCMHistoryTitle");
					}
					static {
						this.SCMTitle = new n("SCMTitle");
					}
					static {
						this.SearchContext = new n("SearchContext");
					}
					static {
						this.SearchActionMenu = new n("SearchActionContext");
					}
					static {
						this.StatusBarWindowIndicatorMenu = new n(
							"StatusBarWindowIndicatorMenu",
						);
					}
					static {
						this.StatusBarRemoteIndicatorMenu = new n(
							"StatusBarRemoteIndicatorMenu",
						);
					}
					static {
						this.StickyScrollContext = new n("StickyScrollContext");
					}
					static {
						this.TestItem = new n("TestItem");
					}
					static {
						this.TestItemGutter = new n("TestItemGutter");
					}
					static {
						this.TestProfilesContext = new n("TestProfilesContext");
					}
					static {
						this.TestMessageContext = new n("TestMessageContext");
					}
					static {
						this.TestMessageContent = new n("TestMessageContent");
					}
					static {
						this.TestPeekElement = new n("TestPeekElement");
					}
					static {
						this.TestPeekTitle = new n("TestPeekTitle");
					}
					static {
						this.TestCallStack = new n("TestCallStack");
					}
					static {
						this.TouchBarContext = new n("TouchBarContext");
					}
					static {
						this.TitleBarContext = new n("TitleBarContext");
					}
					static {
						this.TitleBarTitleContext = new n("TitleBarTitleContext");
					}
					static {
						this.TunnelContext = new n("TunnelContext");
					}
					static {
						this.TunnelPrivacy = new n("TunnelPrivacy");
					}
					static {
						this.TunnelProtocol = new n("TunnelProtocol");
					}
					static {
						this.TunnelPortInline = new n("TunnelInline");
					}
					static {
						this.TunnelTitle = new n("TunnelTitle");
					}
					static {
						this.TunnelLocalAddressInline = new n("TunnelLocalAddressInline");
					}
					static {
						this.TunnelOriginInline = new n("TunnelOriginInline");
					}
					static {
						this.ViewItemContext = new n("ViewItemContext");
					}
					static {
						this.ViewContainerTitle = new n("ViewContainerTitle");
					}
					static {
						this.ViewContainerTitleContext = new n("ViewContainerTitleContext");
					}
					static {
						this.ViewTitle = new n("ViewTitle");
					}
					static {
						this.ViewTitleContext = new n("ViewTitleContext");
					}
					static {
						this.CommentEditorActions = new n("CommentEditorActions");
					}
					static {
						this.CommentThreadTitle = new n("CommentThreadTitle");
					}
					static {
						this.CommentThreadActions = new n("CommentThreadActions");
					}
					static {
						this.CommentThreadAdditionalActions = new n(
							"CommentThreadAdditionalActions",
						);
					}
					static {
						this.CommentThreadTitleContext = new n("CommentThreadTitleContext");
					}
					static {
						this.CommentThreadCommentContext = new n(
							"CommentThreadCommentContext",
						);
					}
					static {
						this.CommentTitle = new n("CommentTitle");
					}
					static {
						this.CommentActions = new n("CommentActions");
					}
					static {
						this.CommentsViewThreadActions = new n("CommentsViewThreadActions");
					}
					static {
						this.InteractiveToolbar = new n("InteractiveToolbar");
					}
					static {
						this.InteractiveCellTitle = new n("InteractiveCellTitle");
					}
					static {
						this.InteractiveCellDelete = new n("InteractiveCellDelete");
					}
					static {
						this.InteractiveCellExecute = new n("InteractiveCellExecute");
					}
					static {
						this.InteractiveInputExecute = new n("InteractiveInputExecute");
					}
					static {
						this.InteractiveInputConfig = new n("InteractiveInputConfig");
					}
					static {
						this.ReplInputExecute = new n("ReplInputExecute");
					}
					static {
						this.IssueReporter = new n("IssueReporter");
					}
					static {
						this.NotebookToolbar = new n("NotebookToolbar");
					}
					static {
						this.NotebookStickyScrollContext = new n(
							"NotebookStickyScrollContext",
						);
					}
					static {
						this.NotebookCellTitle = new n("NotebookCellTitle");
					}
					static {
						this.NotebookCellDelete = new n("NotebookCellDelete");
					}
					static {
						this.NotebookCellInsert = new n("NotebookCellInsert");
					}
					static {
						this.NotebookCellBetween = new n("NotebookCellBetween");
					}
					static {
						this.NotebookCellListTop = new n("NotebookCellTop");
					}
					static {
						this.NotebookCellExecute = new n("NotebookCellExecute");
					}
					static {
						this.NotebookCellExecuteGoTo = new n("NotebookCellExecuteGoTo");
					}
					static {
						this.NotebookCellExecutePrimary = new n(
							"NotebookCellExecutePrimary",
						);
					}
					static {
						this.NotebookDiffCellInputTitle = new n(
							"NotebookDiffCellInputTitle",
						);
					}
					static {
						this.NotebookDiffCellMetadataTitle = new n(
							"NotebookDiffCellMetadataTitle",
						);
					}
					static {
						this.NotebookDiffCellOutputsTitle = new n(
							"NotebookDiffCellOutputsTitle",
						);
					}
					static {
						this.NotebookOutputToolbar = new n("NotebookOutputToolbar");
					}
					static {
						this.NotebookOutlineFilter = new n("NotebookOutlineFilter");
					}
					static {
						this.NotebookOutlineActionMenu = new n("NotebookOutlineActionMenu");
					}
					static {
						this.NotebookEditorLayoutConfigure = new n(
							"NotebookEditorLayoutConfigure",
						);
					}
					static {
						this.NotebookKernelSource = new n("NotebookKernelSource");
					}
					static {
						this.BulkEditTitle = new n("BulkEditTitle");
					}
					static {
						this.BulkEditContext = new n("BulkEditContext");
					}
					static {
						this.TimelineItemContext = new n("TimelineItemContext");
					}
					static {
						this.TimelineTitle = new n("TimelineTitle");
					}
					static {
						this.TimelineTitleContext = new n("TimelineTitleContext");
					}
					static {
						this.TimelineFilterSubMenu = new n("TimelineFilterSubMenu");
					}
					static {
						this.AccountsContext = new n("AccountsContext");
					}
					static {
						this.SidebarTitle = new n("SidebarTitle");
					}
					static {
						this.PanelTitle = new n("PanelTitle");
					}
					static {
						this.AuxiliaryBarTitle = new n("AuxiliaryBarTitle");
					}
					static {
						this.AuxiliaryBarHeader = new n("AuxiliaryBarHeader");
					}
					static {
						this.TerminalInstanceContext = new n("TerminalInstanceContext");
					}
					static {
						this.TerminalEditorInstanceContext = new n(
							"TerminalEditorInstanceContext",
						);
					}
					static {
						this.TerminalNewDropdownContext = new n(
							"TerminalNewDropdownContext",
						);
					}
					static {
						this.TerminalTabContext = new n("TerminalTabContext");
					}
					static {
						this.TerminalTabEmptyAreaContext = new n(
							"TerminalTabEmptyAreaContext",
						);
					}
					static {
						this.TerminalStickyScrollContext = new n(
							"TerminalStickyScrollContext",
						);
					}
					static {
						this.WebviewContext = new n("WebviewContext");
					}
					static {
						this.InlineCompletionsActions = new n("InlineCompletionsActions");
					}
					static {
						this.InlineEditsActions = new n("InlineEditsActions");
					}
					static {
						this.InlineEditActions = new n("InlineEditActions");
					}
					static {
						this.NewFile = new n("NewFile");
					}
					static {
						this.MergeInput1Toolbar = new n("MergeToolbar1Toolbar");
					}
					static {
						this.MergeInput2Toolbar = new n("MergeToolbar2Toolbar");
					}
					static {
						this.MergeBaseToolbar = new n("MergeBaseToolbar");
					}
					static {
						this.MergeInputResultToolbar = new n("MergeToolbarResultToolbar");
					}
					static {
						this.InlineSuggestionToolbar = new n("InlineSuggestionToolbar");
					}
					static {
						this.InlineEditToolbar = new n("InlineEditToolbar");
					}
					static {
						this.ChatContext = new n("ChatContext");
					}
					static {
						this.ChatCodeBlock = new n("ChatCodeblock");
					}
					static {
						this.ChatCompareBlock = new n("ChatCompareBlock");
					}
					static {
						this.ChatMessageTitle = new n("ChatMessageTitle");
					}
					static {
						this.ChatExecute = new n("ChatExecute");
					}
					static {
						this.ChatExecuteSecondary = new n("ChatExecuteSecondary");
					}
					static {
						this.ChatInputSide = new n("ChatInputSide");
					}
					static {
						this.AccessibleView = new n("AccessibleView");
					}
					static {
						this.MultiDiffEditorFileToolbar = new n(
							"MultiDiffEditorFileToolbar",
						);
					}
					static {
						this.DiffEditorHunkToolbar = new n("DiffEditorHunkToolbar");
					}
					static {
						this.DiffEditorSelectionToolbar = new n(
							"DiffEditorSelectionToolbar",
						);
					}
					static for(l) {
						return n.a.get(l) ?? new n(l);
					}
					constructor(l) {
						if (n.a.has(l))
							throw new TypeError(
								`MenuId with identifier '${l}' already exists. Use MenuId.for(ident) or a unique identifier`,
							);
						n.a.set(l, this), (this.id = l);
					}
				}
				(e.$XX = n), (e.$YX = (0, r.$Mi)("menuService"));
				class g {
					static {
						this.a = new Map();
					}
					static for(l) {
						let y = this.a.get(l);
						return y || ((y = new g(l)), this.a.set(l, y)), y;
					}
					static merge(l) {
						const y = new Set();
						for (const $ of l) $ instanceof g && y.add($.b);
						return y;
					}
					constructor(l) {
						(this.b = l), (this.has = (y) => y === l);
					}
				}
				e.$ZX = new (class {
					constructor() {
						(this.a = new Map()),
							(this.b = new Map()),
							(this.c = new w.$we({ merge: g.merge })),
							(this.onDidChangeMenu = this.c.event);
					}
					addCommand(s) {
						return (
							this.a.set(s.id, s),
							this.c.fire(g.for(n.CommandPalette)),
							(0, E.$Yc)(() => {
								this.a.delete(s.id) && this.c.fire(g.for(n.CommandPalette));
							})
						);
					}
					getCommand(s) {
						return this.a.get(s);
					}
					getCommands() {
						const s = new Map();
						return this.a.forEach((l, y) => s.set(y, l)), s;
					}
					appendMenuItem(s, l) {
						let y = this.b.get(s);
						y || ((y = new C.$$c()), this.b.set(s, y));
						const $ = y.push(l);
						return (
							this.c.fire(g.for(s)),
							(0, E.$Yc)(() => {
								$(), this.c.fire(g.for(s));
							})
						);
					}
					appendMenuItems(s) {
						const l = new E.$Zc();
						for (const { id: y, item: $ } of s)
							l.add(this.appendMenuItem(y, $));
						return l;
					}
					removeMenuItem(s, l) {
						let y = this.b.get(s);
						if (y) {
							let $ = y.first;
							for (; $.element != null && $.element._id !== l._id; ) $ = $.next;
							$.element != null
								? (y.remove($), this.c.fire(g.for(s)))
								: console.error("Could not find element in list");
						}
						return (0, E.$Yc)(() => {
							this.c.fire(g.for(s));
						});
					}
					getMenuItems(s) {
						let l;
						return (
							this.b.has(s) ? (l = [...this.b.get(s)]) : (l = []),
							s === n.CommandPalette && this.d(l),
							l
						);
					}
					d(s) {
						const l = new Set();
						for (const y of s)
							h(y) && (l.add(y.command.id), y.alt && l.add(y.alt.id));
						this.a.forEach((y, $) => {
							l.has($) || s.push({ command: y });
						});
					}
				})();
				class p extends t.$uj {
					constructor(l, y, $) {
						super(
							`submenuitem.${l.submenu.id}`,
							typeof l.title == "string" ? l.title : l.title.value,
							$,
							"submenu",
						),
							(this.item = l),
							(this.hideActions = y);
					}
				}
				e.$1X = p;
				let o = (a = class {
					static label(l, y) {
						return y?.renderShortTitle && l.shortTitle
							? typeof l.shortTitle == "string"
								? l.shortTitle
								: l.shortTitle.value
							: typeof l.title == "string"
								? l.title
								: l.title.value;
					}
					constructor(l, y, $, v, S, I, T) {
						(this.hideActions = v),
							(this.menuKeybinding = S),
							(this.b = T),
							(this.id = l.id),
							(this.label = a.label(l, $)),
							(this.tooltip =
								(typeof l.tooltip == "string" ? l.tooltip : l.tooltip?.value) ??
								""),
							(this.enabled =
								!l.precondition || I.contextMatchesRules(l.precondition)),
							(this.checked = void 0);
						let P;
						if (l.toggled) {
							const k = l.toggled.condition
								? l.toggled
								: { condition: l.toggled };
							(this.checked = I.contextMatchesRules(k.condition)),
								this.checked &&
									k.tooltip &&
									(this.tooltip =
										typeof k.tooltip == "string" ? k.tooltip : k.tooltip.value),
								this.checked && i.ThemeIcon.isThemeIcon(k.icon) && (P = k.icon),
								this.checked &&
									k.title &&
									(this.label =
										typeof k.title == "string" ? k.title : k.title.value);
						}
						P || (P = i.ThemeIcon.isThemeIcon(l.icon) ? l.icon : void 0),
							(this.item = l),
							(this.alt = y ? new a(y, void 0, $, v, void 0, I, T) : void 0),
							(this.a = $),
							(this.class = P && i.ThemeIcon.asClassName(P));
					}
					run(...l) {
						let y = [];
						return (
							this.a?.arg && (y = [...y, this.a.arg]),
							this.a?.shouldForwardArgs && (y = [...y, ...l]),
							this.b.executeCommand(this.id, ...y)
						);
					}
				});
				(e.$2X = o), (e.$2X = o = a = Ne([j(5, m.$6j), j(6, d.$ek)], o));
				class f {
					constructor(l) {
						this.desc = l;
					}
				}
				e.$3X = f;
				function b(s) {
					const l = [],
						y = new s(),
						{ f1: $, menu: v, keybinding: S, ...I } = y.desc;
					if (d.$fk.getCommand(I.id))
						throw new Error(
							`Cannot register two commands with the same id: ${I.id}`,
						);
					if (
						(l.push(
							d.$fk.registerCommand({
								id: I.id,
								handler: (T, ...P) => y.run(T, ...P),
								metadata: I.metadata,
							}),
						),
						Array.isArray(v))
					)
						for (const T of v)
							l.push(
								e.$ZX.appendMenuItem(T.id, {
									command: {
										...I,
										precondition:
											T.precondition === null ? void 0 : I.precondition,
									},
									...T,
								}),
							);
					else
						v &&
							l.push(
								e.$ZX.appendMenuItem(v.id, {
									command: {
										...I,
										precondition:
											v.precondition === null ? void 0 : I.precondition,
									},
									...v,
								}),
							);
					if (
						($ &&
							(l.push(
								e.$ZX.appendMenuItem(n.CommandPalette, {
									command: I,
									when: I.precondition,
								}),
							),
							l.push(e.$ZX.addCommand(I))),
						Array.isArray(S))
					)
						for (const T of S)
							l.push(
								u.$TX.registerKeybindingRule({
									...T,
									id: I.id,
									when: I.precondition
										? m.$Kj.and(I.precondition, T.when)
										: T.when,
								}),
							);
					else
						S &&
							l.push(
								u.$TX.registerKeybindingRule({
									...S,
									id: I.id,
									when: I.precondition
										? m.$Kj.and(I.precondition, S.when)
										: S.when,
								}),
							);
					return {
						dispose() {
							(0, E.$Vc)(l);
						},
					};
				}
			},
		),
		define(
			de[1635],
			he([1, 0, 127, 27, 653, 4, 11, 43]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$xkc = void 0),
					(E = mt(E));
				class m extends C.$3X {
					static {
						this.ID = "editor.action.toggleTabFocusMode";
					}
					constructor() {
						super({
							id: m.ID,
							title: E.localize2(1550, "Toggle Tab Key Moves Focus"),
							precondition: void 0,
							keybinding: {
								primary: i.KeyMod.CtrlCmd | i.KeyCode.KeyM,
								mac: {
									primary: i.KeyMod.WinCtrl | i.KeyMod.Shift | i.KeyCode.KeyM,
								},
								weight: d.KeybindingWeight.EditorContrib,
							},
							metadata: {
								description: E.localize2(
									1551,
									"Determines whether the tab key moves focus around the workbench or inserts the tab character in the current editor. This is also called tab trapping, tab navigation, or tab focus mode.",
								),
							},
							f1: !0,
						});
					}
					run() {
						const a = !w.$rsb.getTabFocusMode();
						w.$rsb.setTabFocusMode(a),
							a
								? (0, t.$oib)(E.localize(1548, null))
								: (0, t.$oib)(E.localize(1549, null));
					}
				}
				(e.$xkc = m), (0, C.$4X)(m);
			},
		),
		
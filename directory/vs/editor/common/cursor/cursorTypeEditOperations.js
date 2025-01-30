import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/charCode.js';
import '../../../base/common/errors.js';
import '../../../base/common/strings.js';
import '../commands/replaceCommand.js';
import '../commands/shiftCommand.js';
import '../commands/surroundSelectionCommand.js';
import '../cursorCommon.js';
import '../core/wordCharacterClassifier.js';
import '../core/range.js';
import '../core/position.js';
import '../languages/languageConfiguration.js';
import '../languages/languageConfigurationRegistry.js';
import '../config/editorOptions.js';
import '../languages/supports.js';
import '../languages/autoIndent.js';
import '../languages/enterAction.js';
define(
			de[948],
			he([
				1, 0, 120, 29, 37, 655, 771, 1527, 346, 747, 17, 48, 532, 152, 38, 748,
				1184, 1198,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*charCode*/,
 i /*errors*/,
 w /*strings*/,
 E /*replaceCommand*/,
 C /*shiftCommand*/,
 d /*surroundSelectionCommand*/,
 m /*cursorCommon*/,
 r /*wordCharacterClassifier*/,
 u /*range*/,
 a /*position*/,
 h /*languageConfiguration*/,
 c /*languageConfigurationRegistry*/,
 n /*editorOptions*/,
 g /*supports*/,
 p /*autoIndent*/,
 o /*enterAction*/) {
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
		
import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/assert.js';
import '../../../../../base/common/async.js';
import '../../../../../base/common/cancellation.js';
import '../../../../../base/common/map.js';
import '../../../../../base/common/errors.js';
import '../../../../common/core/position.js';
import '../../../../common/core/range.js';
import '../../../../common/model/bracketPairsTextModelPart/fixBrackets.js';
import '../../../../common/core/textEdit.js';
import '../utils.js';
import '../../../snippet/browser/snippetParser.js';
define(
			de[1594],
			he([1, 0, 229, 15, 33, 59, 29, 48, 17, 2564, 490, 753, 389]),
			function (ce /*require*/,
 e /*exports*/,
 t /*assert*/,
 i /*async*/,
 w /*cancellation*/,
 E /*map*/,
 C /*errors*/,
 d /*position*/,
 m /*range*/,
 r /*fixBrackets*/,
 u /*textEdit*/,
 a /*utils*/,
 h /*snippetParser*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$KCb = e.$JCb = e.$ICb = void 0),
					(e.$HCb = c);
				async function c(b, s, l, y, $ = w.CancellationToken.None, v) {
					const S = s instanceof d.$hL ? o(s, l) : s,
						I = b.all(l),
						T = new E.$Nc();
					for (const O of I) O.groupId && T.add(O.groupId, O);
					function P(O) {
						if (!O.yieldsToGroupIds) return [];
						const B = [];
						for (const U of O.yieldsToGroupIds || []) {
							const z = T.get(U);
							for (const F of z) B.push(F);
						}
						return B;
					}
					const k = new Map(),
						L = new Set();
					function D(O, B) {
						if (((B = [...B, O]), L.has(O))) return B;
						L.add(O);
						try {
							const U = P(O);
							for (const z of U) {
								const F = D(z, B);
								if (F) return F;
							}
						} finally {
							L.delete(O);
						}
					}
					function M(O) {
						const B = k.get(O);
						if (B) return B;
						const U = D(O, []);
						U &&
							(0, C.$5)(
								new Error(
									`Inline completions: cyclic yield-to dependency detected. Path: ${U.map((F) => (F.toString ? F.toString() : "" + F)).join(" -> ")}`,
								),
							);
						const z = new i.$0h();
						return (
							k.set(O, z.p),
							(async () => {
								if (!U) {
									const F = P(O);
									for (const x of F) {
										const H = await M(x);
										if (H && H.items.length > 0) return;
									}
								}
								try {
									return s instanceof d.$hL
										? await O.provideInlineCompletions(l, s, y, $)
										: await O.provideInlineEdits?.(l, s, y, $);
								} catch (F) {
									(0, C.$5)(F);
									return;
								}
							})().then(
								(F) => z.complete(F),
								(F) => z.error(F),
							),
							z.p
						);
					}
					const N = await Promise.all(
							I.map(async (O) => ({ provider: O, completions: await M(O) })),
						),
						A = new Map(),
						R = [];
					for (const O of N) {
						const B = O.completions;
						if (!B) continue;
						const U = new g(B, O.provider);
						R.push(U);
						for (const z of B.items) {
							const F = p.from(z, U, S, l, v);
							A.set(F.hash(), F);
						}
					}
					return new n(Array.from(A.values()), new Set(A.keys()), R);
				}
				class n {
					constructor(s, l, y) {
						(this.completions = s), (this.a = l), (this.b = y);
					}
					has(s) {
						return this.a.has(s.hash());
					}
					dispose() {
						for (const s of this.b) s.removeRef();
					}
				}
				e.$ICb = n;
				class g {
					constructor(s, l) {
						(this.inlineCompletions = s), (this.provider = l), (this.a = 1);
					}
					addRef() {
						this.a++;
					}
					removeRef() {
						this.a--,
							this.a === 0 &&
								this.provider.freeInlineCompletions(this.inlineCompletions);
					}
				}
				e.$JCb = g;
				class p {
					static from(s, l, y, $, v) {
						let S,
							I,
							T = s.range ? m.$iL.lift(s.range) : y;
						if (typeof s.insertText == "string") {
							if (((S = s.insertText), v && s.completeBracketPairs)) {
								S = f(S, T.getStartPosition(), $, v);
								const P = S.length - s.insertText.length;
								P !== 0 &&
									(T = new m.$iL(
										T.startLineNumber,
										T.startColumn,
										T.endLineNumber,
										T.endColumn + P,
									));
							}
							I = void 0;
						} else if ("snippet" in s.insertText) {
							const P = s.insertText.snippet.length;
							if (v && s.completeBracketPairs) {
								s.insertText.snippet = f(
									s.insertText.snippet,
									T.getStartPosition(),
									$,
									v,
								);
								const L = s.insertText.snippet.length - P;
								L !== 0 &&
									(T = new m.$iL(
										T.startLineNumber,
										T.startColumn,
										T.endLineNumber,
										T.endColumn + L,
									));
							}
							const k = new h.$Izb().parse(s.insertText.snippet);
							k.children.length === 1 && k.children[0] instanceof h.Text
								? ((S = k.children[0].value), (I = void 0))
								: ((S = k.toString()),
									(I = { snippet: s.insertText.snippet, range: T }));
						} else (0, t.$kd)(s.insertText);
						return new p(
							S,
							s.command,
							T,
							S,
							I,
							s.additionalTextEdits || (0, a.$wCb)(),
							s,
							l,
						);
					}
					constructor(s, l, y, $, v, S, I, T) {
						(this.filterText = s),
							(this.command = l),
							(this.range = y),
							(this.insertText = $),
							(this.snippetInfo = v),
							(this.additionalTextEdits = S),
							(this.sourceInlineCompletion = I),
							(this.source = T),
							(s = s.replace(
								/\r\n|\r/g,
								`
`,
							)),
							($ = s.replace(
								/\r\n|\r/g,
								`
`,
							));
					}
					withRange(s) {
						return new p(
							this.filterText,
							this.command,
							s,
							this.insertText,
							this.snippetInfo,
							this.additionalTextEdits,
							this.sourceInlineCompletion,
							this.source,
						);
					}
					hash() {
						return JSON.stringify({
							insertText: this.insertText,
							range: this.range.toString(),
						});
					}
					toSingleTextEdit() {
						return new u.$wL(this.range, this.insertText);
					}
				}
				e.$KCb = p;
				function o(b, s) {
					const l = s.getWordAtPosition(b),
						y = s.getLineMaxColumn(b.lineNumber);
					return l
						? new m.$iL(b.lineNumber, l.startColumn, b.lineNumber, y)
						: m.$iL.fromPositions(b, b.with(void 0, y));
				}
				function f(b, s, l, y) {
					const v =
							l.getLineContent(s.lineNumber).substring(0, s.column - 1) + b,
						I = l.tokenization
							.tokenizeLineWithEdit(s, v.length - (s.column - 1), b)
							?.sliceAndInflate(s.column - 1, v.length, 0);
					return I ? (0, r.$GCb)(I, y) : b;
				}
			},
		),
		
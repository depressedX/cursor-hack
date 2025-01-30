import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/observable.js';
import '../../../common/core/position.js';
import '../../../common/core/range.js';
import '../../../common/languages/language.js';
import '../../../common/model.js';
import '../../../common/viewLayout/lineDecorations.js';
import '../../../common/viewModel.js';
import '../../inlineCompletions/browser/view/ghostTextView.js';
import '../../inlineCompletions/browser/utils.js';
import '../../../browser/widget/diffEditor/registrations.contribution.js';
import '../../../../css!vs/editor/contrib/inlineEdit/browser/inlineEdit.js';
define(
			de[2914],
			he([1, 0, 3, 77, 48, 17, 61, 64, 533, 290, 947, 753, 608, 2306]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*observable*/,
 w /*position*/,
 E /*range*/,
 C /*language*/,
 d /*model*/,
 m /*lineDecorations*/,
 r /*viewModel*/,
 u /*ghostTextView*/,
 a /*utils*/,
 h /*registrations.contribution*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ejc = e.$Djc = void 0),
					(e.$Djc = "inline-edit");
				let c = class extends t.$1c {
					constructor(g, p, o) {
						super(),
							(this.c = g),
							(this.model = p),
							(this.f = o),
							(this.a = (0, i.observableValue)(this, !1)),
							(this.b = (0, i.observableFromEvent)(
								this,
								this.c.onDidChangeModel,
								() => this.c.getModel(),
							)),
							(this.g = (0, i.derived)(this, (f) => {
								if (this.a.read(f)) return;
								const b = this.b.read(f);
								if (b !== this.model.targetTextModel.read(f)) return;
								const s = this.model.ghostText.read(f);
								if (!s) return;
								let l = this.model.range?.read(f);
								l &&
									l.startLineNumber === l.endLineNumber &&
									l.startColumn === l.endColumn &&
									(l = void 0);
								const y =
										(l ? l.startLineNumber === l.endLineNumber : !0) &&
										s.parts.length === 1 &&
										s.parts[0].lines.length === 1,
									$ =
										s.parts.length === 1 &&
										s.parts[0].lines.every((M) => M.length === 0),
									v = [],
									S = [];
								function I(M, N) {
									if (S.length > 0) {
										const A = S[S.length - 1];
										N &&
											A.decorations.push(
												new m.$Fub(
													A.content.length + 1,
													A.content.length + 1 + M[0].length,
													N,
													r.InlineDecorationType.Regular,
												),
											),
											(A.content += M[0]),
											(M = M.slice(1));
									}
									for (const A of M)
										S.push({
											content: A,
											decorations: N
												? [
														new m.$Fub(
															1,
															A.length + 1,
															N,
															r.InlineDecorationType.Regular,
														),
													]
												: [],
										});
								}
								const T = b.getLineContent(s.lineNumber);
								let P,
									k = 0;
								if (!$ && (y || !l)) {
									for (const M of s.parts) {
										let N = M.lines;
										l && !y && (I(N, e.$Djc), (N = [])),
											P === void 0
												? (v.push({
														column: M.column,
														text: N[0],
														preview: M.preview,
													}),
													(N = N.slice(1)))
												: I([T.substring(k, M.column - 1)], void 0),
											N.length > 0 &&
												(I(N, e.$Djc),
												P === void 0 && M.column <= T.length && (P = M.column)),
											(k = M.column - 1);
									}
									P !== void 0 && I([T.substring(k)], void 0);
								}
								const L = P !== void 0 ? new a.$xCb(P, T.length + 1) : void 0,
									D = y || !l ? s.lineNumber : l.endLineNumber - 1;
								return {
									inlineTexts: v,
									additionalLines: S,
									hiddenRange: L,
									lineNumber: D,
									additionalReservedLineCount:
										this.model.minReservedLineCount.read(f),
									targetTextModel: b,
									range: l,
									isSingleLine: y,
									isPureRemove: $,
								};
							})),
							(this.h = (0, i.derived)(this, (f) => {
								const b = this.g.read(f);
								if (!b) return [];
								const s = [];
								if (
									(b.hiddenRange &&
										s.push({
											range: b.hiddenRange.toRange(b.lineNumber),
											options: {
												inlineClassName: "inline-edit-hidden",
												description: "inline-edit-hidden",
											},
										}),
									b.range)
								) {
									const l = [];
									if (b.isSingleLine) l.push(b.range);
									else if (!b.isPureRemove) {
										const y = b.range.endLineNumber - b.range.startLineNumber;
										for (let $ = 0; $ < y; $++) {
											const v = b.range.startLineNumber + $,
												S =
													b.targetTextModel.getLineFirstNonWhitespaceColumn(v),
												I = b.targetTextModel.getLineLastNonWhitespaceColumn(v),
												T = new E.$iL(v, S, v, I);
											l.push(T);
										}
									}
									for (const y of l) s.push({ range: y, options: h.$Sxb });
								}
								if (b.range && !b.isSingleLine && b.isPureRemove) {
									const l = new E.$iL(
										b.range.startLineNumber,
										1,
										b.range.endLineNumber - 1,
										1,
									);
									s.push({ range: l, options: h.$Mxb });
								}
								for (const l of b.inlineTexts)
									s.push({
										range: E.$iL.fromPositions(
											new w.$hL(b.lineNumber, l.column),
										),
										options: {
											description: e.$Djc,
											after: {
												content: l.text,
												inlineClassName: l.preview
													? "inline-edit-decoration-preview"
													: "inline-edit-decoration",
												cursorStops: d.InjectedTextCursorStops.Left,
											},
											showIfCollapsed: !0,
										},
									});
								return s;
							})),
							(this.j = this.D(
								new u.$K1b(
									this.c,
									this.f.languageIdCodec,
									(0, i.derived)((f) => {
										const b = this.g.read(f);
										return b && !b.isPureRemove && (b.isSingleLine || !b.range)
											? {
													lineNumber: b.lineNumber,
													additionalLines: b.additionalLines,
													minReservedLineCount: b.additionalReservedLineCount,
													targetTextModel: b.targetTextModel,
												}
											: void 0;
									}),
								),
							)),
							this.D(
								(0, t.$Yc)(() => {
									this.a.set(!0, void 0);
								}),
							),
							this.D((0, a.$yCb)(this.c, this.h));
					}
					ownsViewZone(g) {
						return this.j.viewZoneId === g;
					}
				};
				(e.$Ejc = c), (e.$Ejc = c = Ne([j(2, C.$nM)], c));
			},
		),
		
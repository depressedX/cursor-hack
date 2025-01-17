import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/observable.js';
import '../../../../base/common/observableInternal/derived.js';
import '../../../../base/common/uri.js';
import '../../../browser/observableCodeEditor.js';
import '../../../browser/widget/codeEditor/embeddedCodeEditorWidget.js';
import '../../../browser/widget/diffEditor/diffProviderFactoryService.js';
import '../../../browser/widget/diffEditor/registrations.contribution.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/position.js';
import '../../../common/core/range.js';
import '../../../common/languages/modesRegistry.js';
import '../../../common/model/textModel.js';
import '../../../common/services/model.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../css!vs/editor/contrib/inlineEdit/browser/inlineEditSideBySideWidget.js';
define(
			de[2915],
			he([
				1, 0, 7, 33, 3, 77, 319, 9, 542, 281, 953, 608, 38, 48, 17, 172, 122,
				67, 5, 2308,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				var b, s;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ijc = void 0);
				function* l(S, I, T = 1) {
					I === void 0 && ([I, S] = [S, 0]);
					for (let P = S; P < I; P += T) yield P;
				}
				function y(S) {
					const I = S[0].match(/^\s*/)?.[0] ?? "",
						T = I.length;
					return {
						text: S.map((P) => P.replace(new RegExp("^" + I), "")),
						shift: T,
					};
				}
				let $ = class extends w.$1c {
					static {
						b = this;
					}
					static {
						this.a = 0;
					}
					static b() {
						return d.URI.from({
							scheme: "inline-edit-widget",
							path: new Date().toString() + String(b.a++),
						});
					}
					constructor(I, T, P, k, L) {
						super(),
							(this.r = I),
							(this.s = T),
							(this.u = P),
							(this.w = k),
							(this.y = L),
							(this.c = (0, E.derived)(this, (D) => {
								const M = this.s.read(D);
								if (
									!M ||
									M.text.length === 0 ||
									(M.range.startLineNumber === M.range.endLineNumber &&
										!(
											M.range.startColumn === M.range.endColumn &&
											M.range.startColumn === 1
										))
								)
									return null;
								const N = this.r.getModel();
								if (!N) return null;
								const A = Array.from(
										l(M.range.startLineNumber, M.range.endLineNumber + 1),
									),
									R = A.map((F) => N.getLineLastNonWhitespaceColumn(F)),
									O = Math.max(...R),
									B = A[R.indexOf(O)],
									U = new c.$hL(B, O);
								return { top: M.range.startLineNumber, left: U };
							})),
							(this.f = (0, E.derived)(this, (D) => {
								const M = this.s.read(D);
								if (!M) return { text: "", shift: 0 };
								const N = y(
									M.text.split(`
`),
								);
								return {
									text: N.text.join(`
`),
									shift: N.shift,
								};
							})),
							(this.g = (0, C.$Yd)(() =>
								this.y.createModel("", null, b.b()),
							).keepObserved(this.B)),
							(this.h = (0, C.$Yd)(() =>
								this.y.createModel("", null, b.b()),
							).keepObserved(this.B)),
							(this.j = (0, E.derived)(
								this,
								(D) => this.q.read(D)?.promiseResult.read(D)?.data,
							)),
							(this.q = (0, E.derived)(this, (D) => {
								const M = this.s.read(D);
								if (!M) return;
								const N = this.r.getModel();
								if (!N) return;
								const A = y(
										N.getValueInRange(M.range).split(`
`),
									).text.join(`
`),
									R = y(
										M.text.split(`
`),
									).text.join(`
`);
								this.g.get().setValue(A), this.h.get().setValue(R);
								const O = this.w.createDiffProvider({
									diffAlgorithm: "advanced",
								});
								return E.ObservablePromise.fromFn(async () => {
									const B = await O.computeDiff(
										this.g.get(),
										this.h.get(),
										{
											computeMoves: !1,
											ignoreTrimWhitespace: !1,
											maxComputationTimeMs: 1e3,
										},
										i.CancellationToken.None,
									);
									if (!B.identical) return B.changes;
								});
							})),
							this.D(
								(0, E.autorunWithStore)((D, M) => {
									if (!this.s.read(D) || this.c.get() === null) return;
									const A = M.add(
										this.u.createInstance(
											v,
											this.r,
											this.c,
											this.f.map((R) => R.text),
											this.f.map((R) => R.shift),
											this.j,
										),
									);
									I.addOverlayWidget(A),
										M.add((0, w.$Yc)(() => I.removeOverlayWidget(A)));
								}),
							);
					}
				};
				(e.$Ijc = $),
					(e.$Ijc = $ = b = Ne([j(2, f.$Li), j(3, u.$Dxb), j(4, o.$QO)], $));
				let v = class extends w.$1c {
					static {
						s = this;
					}
					static {
						this.a = !1;
					}
					static get dropDownVisible() {
						return this.a;
					}
					static {
						this.id = 0;
					}
					constructor(I, T, P, k, L, D) {
						super(),
							(this.y = I),
							(this.z = T),
							(this.C = P),
							(this.F = k),
							(this.G = L),
							(this.H = D),
							(this.b = `InlineEditSideBySideContentWidget${s.id++}`),
							(this.allowEditorOverflow = !1),
							(this.c = (0, t.$)("div.inlineEditSideBySide", void 0)),
							(this.f = (0, E.observableSignalFromEvent)(
								"editor.onDidScrollChange",
								this.y.onDidScrollChange,
							)),
							(this.g = this.D(
								this.H.createInstance(
									r.$wDb,
									this.c,
									{
										glyphMargin: !1,
										lineNumbers: "off",
										minimap: { enabled: !1 },
										guides: {
											indentation: !1,
											bracketPairs: !1,
											bracketPairsHorizontal: !1,
											highlightActiveIndentation: !1,
										},
										folding: !1,
										selectOnLineNumbers: !1,
										selectionHighlight: !1,
										columnSelection: !1,
										overviewRulerBorder: !1,
										overviewRulerLanes: 0,
										lineDecorationsWidth: 0,
										lineNumbersMinChars: 0,
										scrollbar: {
											vertical: "hidden",
											horizontal: "hidden",
											alwaysConsumeMouseWheel: !1,
											handleMouseWheel: !1,
										},
										readOnly: !0,
										wordWrap: "off",
										wordWrapOverride1: "off",
										wordWrapOverride2: "off",
										wrappingIndent: "none",
										wrappingStrategy: void 0,
									},
									{ contributions: [], isSimpleWidget: !0 },
									this.y,
								),
							)),
							(this.h = (0, m.$Uwb)(this.g)),
							(this.j = (0, m.$Uwb)(this.y)),
							(this.q = this.D(
								this.H.createInstance(
									p.$$X,
									"",
									this.y.getModel()?.getLanguageId() ?? g.$0M,
									p.$$X.DEFAULT_CREATION_OPTIONS,
									null,
								),
							)),
							(this.r = (0, E.derived)((M) => {
								const N = this.C.read(M);
								N && this.q.setValue(N);
							}).recomputeInitiallyAndOnChange(this.B)),
							(this.s = (0, E.derived)(this, (M) => {
								this.r.read(M);
								const N = this.z.read(M);
								if (!N) return { org: [], mod: [] };
								const A = this.G.read(M);
								if (!A) return { org: [], mod: [] };
								const R = [],
									O = [];
								if (
									A.length === 1 &&
									A[0].innerChanges[0].modifiedRange.equalsRange(
										this.q.getFullModelRange(),
									)
								)
									return { org: [], mod: [] };
								const B = this.F.get(),
									U = (z) =>
										new n.$iL(
											z.startLineNumber + N.top - 1,
											z.startColumn + B,
											z.endLineNumber + N.top - 1,
											z.endColumn + B,
										);
								for (const z of A)
									if (
										(z.original.isEmpty ||
											R.push({
												range: U(z.original.toInclusiveRange()),
												options: a.$Mxb,
											}),
										z.modified.isEmpty ||
											O.push({
												range: z.modified.toInclusiveRange(),
												options: a.$Lxb,
											}),
										z.modified.isEmpty || z.original.isEmpty)
									)
										z.original.isEmpty ||
											R.push({
												range: U(z.original.toInclusiveRange()),
												options: a.$Txb,
											}),
											z.modified.isEmpty ||
												O.push({
													range: z.modified.toInclusiveRange(),
													options: a.$Qxb,
												});
									else
										for (const F of z.innerChanges || [])
											z.original.contains(F.originalRange.startLineNumber) &&
												R.push({
													range: U(F.originalRange),
													options: F.originalRange.isEmpty() ? a.$Uxb : a.$Sxb,
												}),
												z.modified.contains(F.modifiedRange.startLineNumber) &&
													O.push({
														range: F.modifiedRange,
														options: F.modifiedRange.isEmpty()
															? a.$Rxb
															: a.$Pxb,
													});
								return { org: R, mod: O };
							})),
							(this.u = (0, E.derived)(this, (M) => this.s.read(M).org)),
							(this.w = (0, E.derived)(this, (M) => this.s.read(M).mod)),
							this.g.setModel(this.q),
							this.D(this.j.setDecorations(this.u)),
							this.D(this.h.setDecorations(this.w)),
							this.D(
								(0, E.autorun)((M) => {
									const N = this.h.contentWidth.read(M),
										A =
											this.C.read(M).split(`
`).length - 1,
										R = this.y.getOption(h.EditorOption.lineHeight) * A;
									N <= 0 || this.g.layout({ height: R, width: N });
								}),
							),
							this.D(
								(0, E.autorun)((M) => {
									this.z.read(M), this.y.layoutOverlayWidget(this);
								}),
							),
							this.D(
								(0, E.autorun)((M) => {
									this.f.read(M),
										this.z.read(M) && this.y.layoutOverlayWidget(this);
								}),
							);
					}
					getId() {
						return this.b;
					}
					getDomNode() {
						return this.c;
					}
					getPosition() {
						const I = this.z.get();
						if (!I) return null;
						const T = this.y.getLayoutInfo(),
							P = this.y.getScrolledVisiblePosition(new c.$hL(I.top, 1));
						if (!P) return null;
						const k = P.top - 1,
							L = this.y.getOffsetForColumn(I.left.lineNumber, I.left.column);
						return { preference: { left: T.contentLeft + L + 10, top: k } };
					}
				};
				v = s = Ne([j(5, f.$Li)], v);
			},
		),
		
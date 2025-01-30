import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/fonts.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/observable.js';
import '../../../../base/common/observableInternal/derived.js';
import '../../../browser/editorExtensions.js';
import '../../../browser/observableCodeEditor.js';
import '../../../browser/widget/codeEditor/embeddedCodeEditorWidget.js';
import '../../../browser/widget/diffEditor/registrations.contribution.js';
import '../../../browser/widget/diffEditor/utils.js';
import '../../../common/config/editorOptions.js';
import '../../../common/languages/modesRegistry.js';
import '../../../common/model/textModel.js';
import '../../contextmenu/browser/contextmenu.js';
import '../../placeholderText/browser/placeholderTextContribution.js';
import '../../suggest/browser/suggestController.js';
import '../../../../platform/actions/browser/toolbar.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../css!vs/editor/contrib/inlineEdits/browser/inlineEditsWidget.js';
define(
			de[1693],
			he([
				1, 0, 7, 661, 3, 77, 319, 46, 542, 281, 608, 370, 38, 172, 122, 375,
				1185, 328, 173, 11, 5, 2309,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*fonts*/,
				w /*lifecycle*/,
				E /*observable*/,
				C /*derived*/,
				d /*editorExtensions*/,
				m /*observableCodeEditor*/,
				r /*embeddedCodeEditorWidget*/,
				u /*registrations.contribution*/,
				a /*utils*/,
				h /*editorOptions*/,
				c /*modesRegistry*/,
				n /*textModel*/,
				g /*contextmenu*/,
				p /*placeholderTextContribution*/,
				o /*suggestController*/,
				f /*toolbar*/,
				b /*actions*/,
				s /*instantiation*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Wjc = e.$Vjc = void 0);
				class l {
					constructor(P, k, L) {
						(this.range = P), (this.newLines = k), (this.changes = L);
					}
				}
				e.$Vjc = l;
				let y = class extends w.$1c {
					constructor(P, k, L, D) {
						super(),
							(this.z = P),
							(this.C = k),
							(this.F = L),
							(this.G = D),
							(this.a = (0, m.$Uwb)(this.z)),
							(this.b = (0, t.h)(
								"div.inline-edits-widget",
								{
									style: {
										position: "absolute",
										overflow: "visible",
										top: "0px",
										left: "0px",
									},
								},
								[
									(0, t.h)(
										"div@editorContainer",
										{
											style: {
												position: "absolute",
												top: "0px",
												left: "0px",
												width: "500px",
												height: "500px",
											},
										},
										[
											(0, t.h)("div.toolbar@toolbar", {
												style: {
													position: "absolute",
													top: "-25px",
													left: "0px",
												},
											}),
											(0, t.h)("div.promptEditor@promptEditor", {
												style: {
													position: "absolute",
													top: "-25px",
													left: "80px",
													width: "300px",
													height: "22px",
												},
											}),
											(0, t.h)("div.preview@editor", {
												style: {
													position: "absolute",
													top: "0px",
													left: "0px",
												},
											}),
										],
									),
									(0, t.$Jhb)(
										"svg",
										{ style: { overflow: "visible", pointerEvents: "none" } },
										[
											(0, t.$Jhb)("defs", [
												(0, t.$Jhb)(
													"linearGradient",
													{
														id: "Gradient2",
														x1: "0",
														y1: "0",
														x2: "1",
														y2: "0",
													},
													[
														(0, t.$Jhb)("stop", {
															offset: "0%",
															class: "gradient-stop",
														}),
														(0, t.$Jhb)("stop", {
															offset: "100%",
															class: "gradient-stop",
														}),
													],
												),
											]),
											(0, t.$Jhb)("path@path", {
												d: "",
												fill: "url(#Gradient2)",
											}),
										],
									),
								],
							)),
							(this.c = this.D(
								this.G.createInstance(
									f.$Tyb,
									this.b.toolbar,
									b.$XX.InlineEditsActions,
									{
										toolbarOptions: {
											primaryGroup: (N) => N.startsWith("primary"),
										},
									},
								),
							)),
							(this.f = this.D(
								this.G.createInstance(
									n.$$X,
									"",
									c.$0M,
									n.$$X.DEFAULT_CREATION_OPTIONS,
									null,
								),
							)),
							(this.j = (0, E.derived)((N) => {
								const A = this.C.read(N);
								A &&
									this.f.setValue(
										A.newLines.join(`
`),
									);
							}).recomputeInitiallyAndOnChange(this.B)),
							(this.n = this.D(
								this.G.createInstance(
									n.$$X,
									"",
									c.$0M,
									n.$$X.DEFAULT_CREATION_OPTIONS,
									null,
								),
							)),
							(this.q = this.D(
								this.G.createInstance(
									r.$wDb,
									this.b.promptEditor,
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
										placeholder: "Describe the change you want...",
										fontFamily: i.$njb,
									},
									{
										contributions:
											d.EditorExtensionsRegistry.getSomeEditorContributions([
												o.$KDb.ID,
												p.$Ujc.ID,
												g.$2Mb.ID,
											]),
										isSimpleWidget: !0,
									},
									this.z,
								),
							)),
							(this.r = this.D(
								this.G.createInstance(
									r.$wDb,
									this.b.editor,
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
									},
									{ contributions: [] },
									this.z,
								),
							)),
							(this.s = (0, m.$Uwb)(this.r)),
							(this.t = (0, E.derived)(this, (N) => {
								this.j.read(N);
								const A = this.C.read(N)?.changes;
								if (!A) return [];
								const R = [],
									O = [];
								if (
									A.length === 1 &&
									A[0].innerChanges[0].modifiedRange.equalsRange(
										this.f.getFullModelRange(),
									)
								)
									return [];
								for (const B of A)
									if (
										(B.original.isEmpty ||
											R.push({
												range: B.original.toInclusiveRange(),
												options: u.$Mxb,
											}),
										B.modified.isEmpty ||
											O.push({
												range: B.modified.toInclusiveRange(),
												options: u.$Lxb,
											}),
										B.modified.isEmpty || B.original.isEmpty)
									)
										B.original.isEmpty ||
											R.push({
												range: B.original.toInclusiveRange(),
												options: u.$Txb,
											}),
											B.modified.isEmpty ||
												O.push({
													range: B.modified.toInclusiveRange(),
													options: u.$Qxb,
												});
									else
										for (const U of B.innerChanges || [])
											B.original.contains(U.originalRange.startLineNumber) &&
												R.push({
													range: U.originalRange,
													options: U.originalRange.isEmpty() ? u.$Uxb : u.$Sxb,
												}),
												B.modified.contains(U.modifiedRange.startLineNumber) &&
													O.push({
														range: U.modifiedRange,
														options: U.modifiedRange.isEmpty()
															? u.$Rxb
															: u.$Pxb,
													});
								return O;
							})),
							(this.u = (0, E.derived)(this, (N) => {
								const A = this.z.getModel(),
									R = this.C.read(N);
								if (!R) return null;
								const O = R.range;
								let B = 0;
								for (
									let F = O.startLineNumber;
									F < O.endLineNumberExclusive;
									F++
								) {
									const x = A.getLineMaxColumn(F),
										H = this.z.getOffsetForColumn(F, x);
									B = Math.max(B, H);
								}
								return { left: this.z.getLayoutInfo().contentLeft + B };
							})),
							(this.w = (0, E.derived)(this, (N) => {
								const A = this.C.read(N);
								if (!A) return null;
								const R = A.range,
									O = this.a.scrollLeft.read(N),
									B = this.u.read(N).left + 20 - O,
									U =
										this.z.getTopForLineNumber(R.startLineNumber) -
										this.a.scrollTop.read(N),
									z =
										this.z.getTopForLineNumber(R.endLineNumberExclusive) -
										this.a.scrollTop.read(N),
									F = new v(B, U),
									x = new v(B, z),
									H = z - U,
									q = 50,
									V =
										this.z.getOption(h.EditorOption.lineHeight) *
										A.newLines.length,
									G = H - V,
									K = new v(B + q, U + G / 2),
									J = new v(B + q, z - G / 2);
								return {
									topCode: F,
									bottomCode: x,
									codeHeight: H,
									topEdit: K,
									bottomEdit: J,
									editHeight: V,
								};
							}));
						const M = (0, E.derived)(
							this,
							(N) => this.C.read(N) !== void 0 || this.F.read(N) !== void 0,
						);
						this.D(
							(0, a.$Gwb)(this.b.root, {
								display: (0, E.derived)(this, (N) =>
									M.read(N) ? "block" : "none",
								),
							}),
						),
							this.D((0, a.$ywb)(this.z.getDomNode(), this.b.root)),
							this.D(
								(0, m.$Uwb)(P).createOverlayWidget({
									domNode: this.b.root,
									position: (0, E.constObservable)(null),
									allowEditorOverflow: !1,
									minContentWidthInPx: (0, E.derived)((N) => {
										const A = this.u.read(N)?.left;
										if (A === void 0) return 0;
										const R = this.s.contentWidth.read(N);
										return A + R;
									}),
								}),
							),
							this.r.setModel(this.f),
							this.D(this.s.setDecorations(this.t)),
							this.D(
								(0, E.autorun)((N) => {
									const A = this.w.read(N);
									if (!A) return;
									const {
											topCode: R,
											bottomCode: O,
											topEdit: B,
											bottomEdit: U,
											editHeight: z,
										} = A,
										F = 10,
										x = 0,
										H = 40,
										q = new S()
											.moveTo(R)
											.lineTo(R.deltaX(F))
											.curveTo(R.deltaX(F + H), B.deltaX(-H - x), B.deltaX(-x))
											.lineTo(B)
											.lineTo(U)
											.lineTo(U.deltaX(-x))
											.curveTo(U.deltaX(-H - x), O.deltaX(F + H), O.deltaX(F))
											.lineTo(O)
											.build();
									this.b.path.setAttribute("d", q),
										(this.b.editorContainer.style.top = `${B.y}px`),
										(this.b.editorContainer.style.left = `${B.x}px`),
										(this.b.editorContainer.style.height = `${z}px`);
									const V = this.s.contentWidth.read(N);
									this.r.layout({ height: z, width: V });
								}),
							),
							this.q.setModel(this.n),
							this.q.layout(),
							this.D(
								I(
									$(
										this.F,
										(N) => N ?? "",
										(N) => N,
									),
									(0, m.$Uwb)(this.q).value,
								),
							),
							this.D(
								(0, E.autorun)((N) => {
									const A = (0, m.$Uwb)(this.q).isFocused.read(N);
									this.b.root.classList.toggle("focused", A);
								}),
							);
					}
				};
				(e.$Wjc = y), (e.$Wjc = y = Ne([j(3, s.$Li)], y));
				function $(T, P, k) {
					return (0, C.$Ud)(
						void 0,
						(L) => P(T.read(L)),
						(L, D) => T.set(k(L), D),
					);
				}
				class v {
					constructor(P, k) {
						(this.x = P), (this.y = k);
					}
					add(P) {
						return new v(this.x + P.x, this.y + P.y);
					}
					deltaX(P) {
						return new v(this.x + P, this.y);
					}
				}
				class S {
					constructor() {
						this.a = "";
					}
					moveTo(P) {
						return (this.a += `M ${P.x} ${P.y} `), this;
					}
					lineTo(P) {
						return (this.a += `L ${P.x} ${P.y} `), this;
					}
					curveTo(P, k, L) {
						return (
							(this.a += `C ${P.x} ${P.y} ${k.x} ${k.y} ${L.x} ${L.y} `), this
						);
					}
					build() {
						return this.a;
					}
				}
				function I(T, P) {
					const k = new w.$Zc();
					return (
						k.add(
							(0, E.autorun)((L) => {
								const D = T.read(L);
								P.set(D, void 0);
							}),
						),
						k.add(
							(0, E.autorun)((L) => {
								const D = P.read(L);
								T.set(D, void 0);
							}),
						),
						k
					);
				}
			},
		),
		
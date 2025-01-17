import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/browser/dom.js';
import '../../../../../../base/common/async.js';
import '../../../../../../base/common/cancellation.js';
import '../../../../../../base/common/codicons.js';
import '../../../../../../base/common/themables.js';
import '../../../../../../base/common/event.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../../base/common/numbers.js';
import '../../../../../../base/common/strings.js';
import '../../../../../../editor/common/config/editorOptions.js';
import '../../../../../../editor/common/languages/language.js';
import '../../../../../../editor/common/languages/textToHtmlTokenizer.js';
import '../../../../../../nls.js';
import '../../../../../../platform/configuration/common/configuration.js';
import '../../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../../platform/keybinding/common/keybinding.js';
import '../../../../../../platform/opener/common/opener.js';
import '../../notebookBrowser.js';
import './cellEditorOptions.js';
import './cellOutput.js';
import './codeCellExecutionIcon.js';
import '../../viewModel/codeCellViewModel.js';
import '../../../common/notebookExecutionStateService.js';
import '../../../../../../editor/contrib/wordHighlighter/browser/wordHighlighter.js';
import '../../../../../../editor/contrib/codeAction/browser/codeActionController.js';
define(
			de[4096],
			he([
				1, 0, 7, 15, 33, 14, 26, 6, 3, 201, 37, 38, 61, 597, 4, 10, 5, 39, 41,
				108, 836, 3530, 3476, 482, 190, 964, 500,
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
				$,
				v,
				S,
				I,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$33b = void 0),
					(t = mt(t)),
					(u = mt(u));
				let T = class extends m.$1c {
					constructor(k, L, D, M, N, A, R, O, B, U) {
						super(),
							(this.q = k),
							(this.r = L),
							(this.s = D),
							(this.t = M),
							(this.u = N),
							(this.w = A),
							(this.y = O),
							(this.z = B),
							(this.g = !1),
							(this.n = this.D(
								new s.$J3b(
									this.q.getBaseCellEditorOptions(L.language),
									this.q.notebookOptions,
									this.z,
								),
							)),
							(this.a = this.u.createInstance(l.$Z3b, k, L, D, {
								limit: $.$21b,
							})),
							(this.h = this.D(
								D.cellParts.concatContentPart(
									[this.n, this.a],
									t.getWindow(k.getDomNode()),
								),
							));
						const z = this.J();
						this.L(z),
							(this.c = !1),
							this.O(),
							this.Q(),
							this.R(),
							this.U(),
							this.W(),
							this.D(
								d.Event.any(
									this.r.onDidStartExecution,
									this.r.onDidStopExecution,
								)((x) => {
									this.h.updateForExecutionState(this.r, x);
								}),
							),
							this.D(
								this.r.onDidChangeState((x) => {
									if (
										(this.h.updateState(this.r, x),
										x.outputIsHoveredChanged && this.H(),
										x.outputIsFocusedChanged && this.I(),
										(x.metadataChanged || x.internalMetadataChanged) &&
											this.N(),
										x.inputCollapsedChanged || x.outputCollapsedChanged)
									) {
										this.r.pauseLayout();
										const H = this.Z();
										this.r.resumeLayout(), H && this.relayoutCell();
									}
									x.focusModeChanged && this.Y(!0);
								}),
							),
							this.h.scheduleRenderCell(this.r),
							this.D(
								(0, m.$Yc)(() => {
									this.h.unrenderCell(this.r);
								}),
							),
							this.N(),
							this.Y(!1),
							this.H(),
							this.I(),
							(this.r.editorHeight = z),
							this.a.render(),
							(this.f = !1),
							this.jb(),
							this.D(
								this.r.onLayoutInfoRead(() => {
									this.h.prepareLayout();
								}),
							);
						const F = t.$fhb(
							this.s.cellInputCollapsedContainer,
							t.$(".collapsed-execution-icon"),
						);
						this.D(
							(0, m.$Yc)(() => {
								F.remove();
							}),
						),
							(this.m = this.D(
								this.u.createInstance(y.$13b, this.q, this.r, F),
							)),
							this.Z(),
							this.D(
								d.Event.runAndSubscribe(
									L.onDidChangeOutputs,
									this.M.bind(this),
								),
							),
							this.D(
								d.Event.runAndSubscribe(L.onDidChangeLayout, this.G.bind(this)),
							),
							this.n.setLineNumbers(this.r.lineNumbers),
							D.editor.updateOptions(
								this.n.getUpdatedValue(this.r.internalMetadata, this.r.uri),
							);
					}
					C(k) {
						k.editor.updateOptions(
							this.n.getUpdatedValue(this.r.internalMetadata, this.r.uri),
						);
						const L = new w.$Ce();
						this.D({
							dispose() {
								L.dispose(!0);
							},
						}),
							(0, i.$Ah)(this.r.resolveTextModel(), L.token).then((D) => {
								this.g ||
									(D &&
										D.updateOptions({
											indentSize: this.n.indentSize,
											tabSize: this.n.tabSize,
											insertSpaces: this.n.insertSpaces,
										}));
							});
					}
					G() {
						this.F?.dispose(),
							(this.F = t.$lgb(t.getWindow(this.q.getDomNode()), () => {
								this.h.updateInternalLayoutNow(this.r);
							}));
					}
					H() {
						this.s.container.classList.toggle(
							"cell-output-hover",
							this.r.outputIsHovered,
						);
					}
					I() {
						this.s.container.classList.toggle(
							"cell-output-focus",
							this.r.outputIsFocused,
						);
					}
					J() {
						const k = this.r.lineCount,
							L = this.r.layoutInfo.fontInfo?.lineHeight || 17,
							D = this.q.notebookOptions.computeEditorPadding(
								this.r.internalMetadata,
								this.r.uri,
							);
						return this.r.layoutInfo.editorHeight === 0
							? k * L + D.top + D.bottom
							: this.r.layoutInfo.editorHeight;
					}
					L(k) {
						const L = this.r.layoutInfo.editorWidth;
						this.kb({ width: L, height: k });
						const D = new w.$Ce();
						this.D({
							dispose() {
								D.dispose(!0);
							},
						}),
							(0, i.$Ah)(this.r.resolveTextModel(), D.token).then((M) => {
								if (!this.g) {
									if (M && this.s.editor) {
										if ((this.S(M), this.s.editor.setModel(M), this.g)) return;
										M.updateOptions({
											indentSize: this.n.indentSize,
											tabSize: this.n.tabSize,
											insertSpaces: this.n.insertSpaces,
										}),
											this.r.attachTextEditor(
												this.s.editor,
												this.r.layoutInfo.estimatedHasHorizontalScrolling,
											);
										const N = () => {
											this.q.getActiveCell() === this.r &&
												this.r.focusMode === b.CellFocusMode.Editor &&
												(this.q.hasEditorFocus() ||
													this.q.getDomNode().ownerDocument.activeElement ===
														this.q.getDomNode().ownerDocument.body) &&
												this.s.editor?.focus();
										};
										N();
										const A = this.s.editor?.getContentHeight();
										if ((A !== void 0 && A !== k && this.mb(A), this.g)) return;
										N();
									}
									this.D(this.n.onDidChange(() => this.C(this.s)));
								}
							});
					}
					M() {
						t.$khb(
							this.r.outputsViewModels.length > 0,
							this.s.focusSinkElement,
						);
					}
					N() {
						const k = this.s.editor;
						if (!k) return;
						const L = this.q.isReadOnly,
							D = this.q.notebookOptions.computeEditorPadding(
								this.r.internalMetadata,
								this.r.uri,
							),
							M = k.getOptions();
						(M.get(a.EditorOption.readOnly) !== L ||
							M.get(a.EditorOption.padding) !== D) &&
							k.updateOptions({
								readOnly: this.q.isReadOnly,
								padding: this.q.notebookOptions.computeEditorPadding(
									this.r.internalMetadata,
									this.r.uri,
								),
							});
					}
					O() {
						this.D(
							this.q.onDidScroll(() => {
								this.P();
							}),
						),
							this.D(
								this.q.onDidChangeLayout(() => {
									this.P(), this.lb();
								}),
							);
					}
					P() {
						const D = this.q.scrollTop,
							M = this.q.getAbsoluteTopOfElement(this.r),
							N = D - M + -7,
							A = this.q.getLayoutInfo(),
							R = A.height - A.stickyHeight - 26,
							O = this.r.layoutInfo.editorHeight - R,
							B = O > 20 ? (0, r.$Zm)(0, N, O) : 0;
						(this.s.editorPart.style.top = `${B}px`),
							this.s.editor?.setScrollTop(B);
					}
					Q() {
						this.D(
							this.r.onDidChangeLayout((k) => {
								k.outerWidth !== void 0 &&
									this.s.editor.getLayoutInfo().width !==
										this.r.layoutInfo.editorWidth &&
									(this.lb(), this.P());
							}),
						);
					}
					R() {
						this.D(
							this.s.editor.onDidContentSizeChange((k) => {
								k.contentHeightChanged &&
									this.r.layoutInfo.editorHeight !== k.contentHeight &&
									(this.mb(k.contentHeight), this.P());
							}),
						),
							this.D(
								this.s.editor.onDidChangeCursorSelection((k) => {
									if (k.source === "restoreState" || k.oldModelVersionId === 0)
										return;
									const L = this.s.editor.getSelections();
									if (L?.length) {
										const D = this.s.editor.getContentHeight(),
											M = this.r.layoutInfo.editorHeight;
										if (D !== M && (this.mb(D), this.g)) return;
										const N = L[L.length - 1];
										this.q.revealRangeInViewAsync(this.r, N);
									}
								}),
							),
							this.D(
								this.s.editor.onDidBlurEditorWidget(() => {
									S.$rPb.get(this.s.editor)?.stopHighlighting(),
										I.$BBb.get(this.s.editor)?.hideCodeActions(),
										I.$BBb.get(this.s.editor)?.hideLightBulbWidget();
								}),
							),
							this.D(
								this.s.editor.onDidFocusEditorWidget(() => {
									S.$rPb.get(this.s.editor)?.restoreViewState(!0);
								}),
							);
					}
					S(k) {
						this.D(
							k.onDidChangeTokens(() => {
								if (this.r.isInputCollapsed && this.b) {
									const L = this.eb(k);
									t.$Dhb(this.b, L), this.bb(this.b);
								}
							}),
						);
					}
					U() {
						this.D(
							this.r.onCellDecorationsChanged((k) => {
								k.added.forEach((L) => {
									L.className &&
										this.s.rootContainer.classList.add(L.className),
										L.outputClassName &&
											this.q.deltaCellContainerClassNames(
												this.r.id,
												[L.outputClassName],
												[],
											);
								}),
									k.removed.forEach((L) => {
										L.className &&
											this.s.rootContainer.classList.remove(L.className),
											L.outputClassName &&
												this.q.deltaCellContainerClassNames(
													this.r.id,
													[],
													[L.outputClassName],
												);
									});
							}),
						),
							this.r.getCellDecorations().forEach((k) => {
								k.className && this.s.rootContainer.classList.add(k.className),
									k.outputClassName &&
										this.q.deltaCellContainerClassNames(
											this.r.id,
											[k.outputClassName],
											[],
										);
							});
					}
					W() {
						this.D(
							this.s.editor.onMouseDown((k) => {
								k.event.rightButton && k.event.preventDefault();
							}),
						);
					}
					X() {
						return (
							this.q.getActiveCell() === this.r &&
							this.r.focusMode === b.CellFocusMode.Editor &&
							(this.q.hasEditorFocus() ||
								this.q.getDomNode().ownerDocument.activeElement ===
									this.q.getDomNode().ownerDocument.body)
						);
					}
					Y(k) {
						this.X() &&
							(k
								? this.s.editor?.focus()
								: this.D(
										t.$ggb(t.getWindow(this.s.container), () => {
											this.s.editor?.focus();
										}),
									)),
							this.s.container.classList.toggle(
								"cell-editor-focus",
								this.r.focusMode === b.CellFocusMode.Editor,
							),
							this.s.container.classList.toggle(
								"cell-output-focus",
								this.r.focusMode === b.CellFocusMode.Output,
							);
					}
					Z() {
						return this.r.isOutputCollapsed === this.f &&
							this.r.isInputCollapsed === this.c
							? !1
							: (this.r.layoutChange({ editorHeight: !0 }),
								this.r.isInputCollapsed ? this.ab() : this.cb(),
								this.r.isOutputCollapsed ? this.hb() : this.ib(!1),
								this.relayoutCell(),
								(this.f = this.r.isOutputCollapsed),
								(this.c = this.r.isInputCollapsed),
								!0);
					}
					ab() {
						t.hide(this.s.editorPart),
							this.s.container.classList.toggle("input-collapsed", !0),
							this.fb(),
							this.m.setVisibility(!0);
						const k = this.s.editor.hasModel()
								? this.eb(this.s.editor.getModel())
								: this.db(this.r.textBuffer, this.r.language),
							L = t.$("div.cell-collapse-preview");
						t.$Dhb(L, k),
							(this.b = L),
							this.s.cellInputCollapsedContainer.appendChild(L),
							this.bb(L),
							t.show(this.s.cellInputCollapsedContainer);
					}
					bb(k) {
						const L = t.$("span.expandInputIcon"),
							D = this.w.lookupKeybinding(b.$7Ib);
						D &&
							((k.title = (0, n.localize)(8196, null, D.getLabel())),
							(L.title = (0, n.localize)(8197, null, D.getLabel()))),
							L.classList.add(...C.ThemeIcon.asClassNameArray(E.$ak.more)),
							k.appendChild(L);
					}
					cb() {
						this.m.setVisibility(!1),
							t.show(this.s.editorPart),
							t.hide(this.s.cellInputCollapsedContainer);
					}
					db(k, L) {
						return (0, c.$bwb)(this.y, k.getLineContent(1), L);
					}
					eb(k) {
						let L = '<div class="monaco-tokenized-source">';
						const M = k.tokenization.getLineTokens(1).inflate(),
							N = k.getLineContent(1);
						let A = 0;
						for (let R = 0, O = M.getCount(); R < O; R++) {
							const B = M.getClassName(R),
								U = M.getEndOffset(R);
							(L += `<span class="${B}">${u.$nf(N.substring(A, U))}</span>`),
								(A = U);
						}
						return (L += "</div>"), L;
					}
					fb() {
						const k = this.s.cellInputCollapsedContainer.children,
							L = [];
						for (let D = 0; D < k.length; D++)
							k[D].classList.contains("cell-collapse-preview") && L.push(k[D]);
						L.forEach((D) => {
							D.remove();
						});
					}
					gb(k) {
						const L = this.s.outputContainer.domNode.children;
						for (let D = 0; D < L.length; D++)
							L[D].classList.contains("output-inner-container") &&
								t.$khb(!k, L[D]);
					}
					hb() {
						this.s.container.classList.toggle("output-collapsed", !0),
							t.show(this.s.cellOutputCollapsedContainer),
							this.gb(!0),
							this.a.viewUpdateHideOuputs();
					}
					ib(k) {
						this.s.container.classList.toggle("output-collapsed", !1),
							t.hide(this.s.cellOutputCollapsedContainer),
							this.gb(!1),
							this.a.viewUpdateShowOutputs(k);
					}
					jb() {
						this.s.container.classList.toggle("input-collapsed", !1),
							t.show(this.s.editorPart),
							t.hide(this.s.cellInputCollapsedContainer),
							this.s.container.classList.toggle("output-collapsed", !1),
							this.ib(!0);
					}
					kb(k) {
						const L = this.q.getLayoutInfo(),
							D = Math.min(L.height - L.stickyHeight - 26, k.height);
						this.s.editor?.layout({ width: k.width, height: D }, !0);
					}
					lb() {
						if (!this.s.editor.hasModel()) return;
						const k = this.s.editor.getContentHeight();
						(this.r.editorHeight = k),
							this.relayoutCell(),
							this.kb({ width: this.r.layoutInfo.editorWidth, height: k });
					}
					mb(k) {
						const L = this.s.editor.getLayoutInfo();
						(this.r.editorHeight = k),
							this.relayoutCell(),
							this.kb({ width: L.width, height: k });
					}
					relayoutCell() {
						this.q.layoutNotebookCell(this.r, this.r.layoutInfo.totalHeight);
					}
					dispose() {
						(this.g = !0),
							this.X() && this.t.preserveFocusedEditor(this.r),
							this.r.detachTextEditor(),
							this.fb(),
							this.a.dispose(),
							this.F?.dispose(),
							super.dispose();
					}
				};
				(e.$33b = T),
					(e.$33b = T =
						Ne(
							[
								j(4, p.$Li),
								j(5, o.$uZ),
								j(6, f.$7rb),
								j(7, h.$nM),
								j(8, g.$gj),
								j(9, v.$d6),
							],
							T,
						));
			},
		),
		
import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/browser/pixelRatio.js';
import '../../../../../../base/browser/dom.js';
import '../../../../../../base/browser/fastDomNode.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../../editor/browser/widget/codeEditor/codeEditorWidget.js';
import '../../../../../../editor/common/config/fontInfo.js';
import '../../../../../../editor/common/editorContextKeys.js';
import '../../../../../../editor/common/languages/modesRegistry.js';
import '../../../../../../nls.js';
import '../../../../../../platform/actions/common/actions.js';
import '../../../../../../platform/configuration/common/configuration.js';
import '../../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../../platform/contextview/browser/contextView.js';
import '../../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../../platform/instantiation/common/serviceCollection.js';
import '../../../../../../platform/keybinding/common/keybinding.js';
import '../../../../../../platform/notification/common/notification.js';
import '../cellPart.js';
import '../cellParts/chat/cellChatPart.js';
import '../cellParts/cellComments.js';
import '../cellParts/cellContextKeys.js';
import '../cellParts/cellDecorations.js';
import '../cellParts/cellDnd.js';
import '../cellParts/cellDragRenderer.js';
import '../cellParts/cellEditorOptions.js';
import '../cellParts/cellExecution.js';
import '../cellParts/cellFocus.js';
import '../cellParts/cellFocusIndicator.js';
import '../cellParts/cellProgressBar.js';
import '../cellParts/cellStatusPart.js';
import '../cellParts/cellToolbars.js';
import '../cellParts/codeCell.js';
import '../cellParts/codeCellRunToolbar.js';
import '../cellParts/collapsedCellInput.js';
import '../cellParts/collapsedCellOutput.js';
import '../cellParts/foldedCellHint.js';
import '../cellParts/markupCell.js';
import '../../../common/notebookCommon.js';
import '../../../common/notebookExecutionStateService.js';
define(
			de[4097],
			he([
				1, 0, 345, 7, 194, 3, 206, 463, 71, 172, 4, 11, 10, 8, 49, 5, 128, 39,
				40, 294, 3100, 3773, 1961, 3095, 1848, 3096, 836, 4094, 3097, 3474,
				3475, 4095, 3098, 4096, 3480, 3101, 3498, 3499, 3500, 70, 190,
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
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
				F,
			) {
				"use strict";
				var x, H;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$a4b = e.$_3b = e.$$3b = void 0),
					(i = mt(i));
				const q = i.$;
				let V = class extends E.$1c {
					constructor(X, Y) {
						super(), (this.b = Y);
						const ie = this.b.getValue("editor");
						this.a = d.$OK.createFromRawSettings(
							ie,
							t.$sjb.getInstance(X).value,
						).lineHeight;
					}
					getHeight(X) {
						return X.getHeight(this.a);
					}
					getDynamicHeight(X) {
						return X.getDynamicHeight();
					}
					getTemplateId(X) {
						return X.cellKind === z.CellKind.Markup
							? K.TEMPLATE_ID
							: J.TEMPLATE_ID;
					}
				};
				(e.$$3b = V), (e.$$3b = V = Ne([j(1, h.$gj)], V));
				class G {
					constructor(X, Y, ie, ne, ee, _, te, Q, Z, se) {
						(this.b = X),
							(this.c = Y),
							(this.d = ie),
							(this.e = ne),
							(this.f = _),
							(this.g = te),
							(this.h = Q),
							(this.i = se),
							(this.a = new I.$J3b(
								this.c.getBaseCellEditorOptions(Z),
								this.c.notebookOptions,
								ee,
							));
					}
					dispose() {
						this.a.dispose(), (this.i = void 0);
					}
				}
				let K = class extends G {
					static {
						x = this;
					}
					static {
						this.TEMPLATE_ID = "markdown_cell";
					}
					constructor(X, Y, ie, ne, ee, _, te, Q, Z, se, re) {
						super(_, X, te, Q, ee, Z, se, ne, "markdown", Y),
							(this.k = ie),
							(this.j = re);
					}
					get templateId() {
						return x.TEMPLATE_ID;
					}
					renderTemplate(X) {
						X.classList.add("markdown-cell-row");
						const Y = i.$fhb(X, i.$(".cell-inner-container")),
							ie = new E.$Zc(),
							ne = ie.add(this.h(Y)),
							ee = i.$fhb(X, q(".cell-decoration")),
							_ = i.$fhb(Y, q(".cell-title-toolbar")),
							te = new w.$Rhb(
								i.$fhb(Y, q(".cell-focus-indicator.cell-focus-indicator-top")),
							),
							Q = new w.$Rhb(
								i.$fhb(
									Y,
									i.$(
										".cell-focus-indicator.cell-focus-indicator-side.cell-focus-indicator-left",
									),
								),
							),
							Z = i.$fhb(Q.domNode, i.$(".notebook-folding-indicator")),
							se = new w.$Rhb(
								i.$fhb(
									Y,
									i.$(
										".cell-focus-indicator.cell-focus-indicator-side.cell-focus-indicator-right",
									),
								),
							),
							re = i.$fhb(Y, q(".cell.code")),
							le = i.$fhb(re, q(".cell-editor-part")),
							oe = i.$fhb(le, q(".cell-chat-part")),
							ae = i.$fhb(re, q(".input-collapse-container"));
						ae.style.display = "none";
						const pe = i.$fhb(le, q(".cell-editor-container"));
						le.style.display = "none";
						const $e = i.$fhb(Y, q(".cell-comment-container")),
							ye = i.$fhb(Y, q(".cell.markdown")),
							ue = i.$fhb(Y, q(".cell-bottom-toolbar-container")),
							fe = ie.add(this.b.createChild(new p.$Ki([c.$6j, ne]))),
							me = { toggle: (Le, Fe) => Y.classList.toggle(Le, Fe) },
							ve = ie.add(
								fe.createInstance(
									M.$R3b,
									_,
									me,
									this.c.creationOptions.menuIds.cellTitleToolbar,
									this.c.creationOptions.menuIds.cellDeleteToolbar,
									this.c,
								),
							),
							ge = new w.$Rhb(
								i.$fhb(
									Y,
									q(".cell-focus-indicator.cell-focus-indicator-bottom"),
								),
							),
							be = new b.$C1b(
								i.getWindow(X),
								[
									ie.add(fe.createInstance(s.$Y2b, this.c, oe)),
									ie.add(fe.createInstance(D.$U3b, this.c, Y, le, void 0)),
									ie.add(new k.$S3b(this.c, ve, te, Q, se, ge)),
									ie.add(
										new B.$93b(
											this.c,
											i.$fhb(Y, q(".notebook-folded-hint")),
											this.j,
										),
									),
									ie.add(new $.$H3b(X, ee)),
									ie.add(fe.createInstance(l.$G3b, this.c, $e)),
									ie.add(new R.$63b(this.c, ae)),
									ie.add(new P.$L3b(Y, void 0, this.c)),
									ie.add(new v.$t2b(Y)),
									ie.add(fe.createInstance(y.$51b, this.c)),
								],
								[ve, ie.add(fe.createInstance(M.$Q3b, this.c, _, ue))],
							);
						return (
							ie.add(be),
							{
								rootContainer: X,
								cellInputCollapsedContainer: ae,
								instantiationService: fe,
								container: Y,
								cellContainer: ye,
								editorPart: le,
								editorContainer: pe,
								foldingIndicator: Z,
								templateDisposables: ie,
								elementDisposables: new E.$Zc(),
								cellParts: be,
								toJSON: () => ({}),
							}
						);
					}
					renderElement(X, Y, ie, ne) {
						if (!this.c.hasModel())
							throw new Error(
								"The notebook editor is not attached with view model yet.",
							);
						(ie.currentRenderedCell = X),
							(ie.currentEditor = void 0),
							(ie.editorPart.style.display = "none"),
							(ie.cellContainer.innerText = ""),
							ne !== void 0 &&
								ie.elementDisposables.add(
									ie.instantiationService.createInstance(
										U.$03b,
										this.c,
										X,
										ie,
										this.k,
									),
								);
					}
					disposeTemplate(X) {
						X.elementDisposables.dispose(), X.templateDisposables.dispose();
					}
					disposeElement(X, Y, ie) {
						ie.elementDisposables.clear();
					}
				};
				(e.$_3b = K),
					(e.$_3b =
						K =
						x =
							Ne(
								[
									j(4, h.$gj),
									j(5, g.$Li),
									j(6, n.$Xxb),
									j(7, a.$YX),
									j(8, o.$uZ),
									j(9, f.$4N),
									j(10, F.$d6),
								],
								K,
							));
				let J = class extends G {
					static {
						H = this;
					}
					static {
						this.TEMPLATE_ID = "code_cell";
					}
					constructor(X, Y, ie, ne, ee, _, te, Q, Z, se, re) {
						super(Z, X, te, Q, _, se, re, ee, r.$0M, ne),
							(this.j = Y),
							(this.k = ie);
					}
					get templateId() {
						return H.TEMPLATE_ID;
					}
					renderTemplate(X) {
						X.classList.add("code-cell-row");
						const Y = i.$fhb(X, i.$(".cell-inner-container")),
							ie = new E.$Zc(),
							ne = ie.add(this.h(Y)),
							ee = i.$fhb(X, q(".cell-decoration")),
							_ = new w.$Rhb(
								i.$fhb(Y, q(".cell-focus-indicator.cell-focus-indicator-top")),
							),
							te = i.$fhb(Y, q(".cell-title-toolbar")),
							Q = new w.$Rhb(
								i.$fhb(
									Y,
									i.$(
										".cell-focus-indicator.cell-focus-indicator-side.cell-focus-indicator-left",
									),
								),
							),
							Z = i.$fhb(Y, q(".cell-chat-part")),
							se = i.$fhb(Y, q(".cell.code")),
							re = i.$fhb(se, q(".run-button-container")),
							le = i.$fhb(se, q(".input-collapse-container"));
						le.style.display = "none";
						const oe = i.$fhb(Q.domNode, q("div.execution-count-label"));
						oe.title = (0, u.localize)(8214, null);
						const ae = i.$fhb(se, q(".cell-editor-part")),
							pe = i.$fhb(ae, q(".cell-editor-container")),
							$e = i.$fhb(Y, q(".cell-comment-container")),
							ye = ie.add(this.h(ae)),
							ue = ie.add(this.b.createChild(new p.$Ki([c.$6j, ye])));
						m.EditorContextKeys.inCompositeEditor.bindTo(ye).set(!0);
						const fe = ue.createInstance(
							C.$rwb,
							pe,
							{
								...this.a.getDefaultValue(),
								dimension: { width: 0, height: 0 },
								scrollbar: {
									vertical: "hidden",
									horizontal: "auto",
									handleMouseWheel: !1,
									useShadows: !1,
								},
							},
							{ contributions: this.c.creationOptions.cellEditorContributions },
						);
						ie.add(fe);
						const me = new w.$Rhb(i.$fhb(Y, q(".output"))),
							ve = i.$fhb(me.domNode, q(".output-collapse-container")),
							ge = new w.$Rhb(i.$fhb(Y, q(".output-show-more-container"))),
							be = new w.$Rhb(
								i.$fhb(
									Y,
									i.$(
										".cell-focus-indicator.cell-focus-indicator-side.cell-focus-indicator-right",
									),
								),
							),
							Ce = i.$fhb(Y, q(".cell-editor-focus-sink"));
						Ce.setAttribute("tabindex", "0");
						const Le = i.$fhb(Y, q(".cell-bottom-toolbar-container")),
							Fe = new w.$Rhb(
								i.$fhb(
									Y,
									q(".cell-focus-indicator.cell-focus-indicator-bottom"),
								),
							),
							Oe = ie.add(this.b.createChild(new p.$Ki([c.$6j, ne]))),
							xe = { toggle: (Ie, Be) => Y.classList.toggle(Ie, Be) },
							He = ie.add(
								Oe.createInstance(
									M.$R3b,
									te,
									xe,
									this.c.creationOptions.menuIds.cellTitleToolbar,
									this.c.creationOptions.menuIds.cellDeleteToolbar,
									this.c,
								),
							),
							Ke = ie.add(new k.$S3b(this.c, He, _, Q, be, Fe)),
							Je = new b.$C1b(
								i.getWindow(X),
								[
									Ke,
									ie.add(Oe.createInstance(s.$Y2b, this.c, Z)),
									ie.add(Oe.createInstance(D.$U3b, this.c, Y, ae, fe)),
									ie.add(Oe.createInstance(L.$T3b, ae, le)),
									ie.add(Oe.createInstance(A.$43b, this.c, ne, Y, re)),
									ie.add(new $.$H3b(X, ee)),
									ie.add(Oe.createInstance(l.$G3b, this.c, $e)),
									ie.add(Oe.createInstance(T.$K3b, this.c, oe)),
									ie.add(Oe.createInstance(O.$73b, this.c, ve)),
									ie.add(new R.$63b(this.c, le)),
									ie.add(new P.$L3b(Y, Ce, this.c)),
									ie.add(new v.$t2b(Y)),
									ie.add(Oe.createInstance(y.$51b, this.c)),
								],
								[He, ie.add(Oe.createInstance(M.$Q3b, this.c, te, Le))],
							);
						ie.add(Je);
						const Te = {
								rootContainer: X,
								editorPart: ae,
								cellInputCollapsedContainer: le,
								cellOutputCollapsedContainer: ve,
								instantiationService: Oe,
								container: Y,
								cellContainer: se,
								focusSinkElement: Ce,
								outputContainer: me,
								outputShowMoreContainer: ge,
								editor: fe,
								templateDisposables: ie,
								elementDisposables: new E.$Zc(),
								cellParts: Je,
								toJSON: () => ({}),
							},
							Ee = [
								Q.domNode,
								Ke.codeFocusIndicator.domNode,
								Ke.outputFocusIndicator.domNode,
							];
						return (
							this.i?.registerDragHandle(Te, X, Ee, () =>
								new S.$I3b().getDragImage(Te, Te.editor, "code"),
							),
							Te
						);
					}
					renderElement(X, Y, ie, ne) {
						if (!this.c.hasModel())
							throw new Error(
								"The notebook editor is not attached with view model yet.",
							);
						(ie.currentRenderedCell = X),
							ne !== void 0 &&
								((ie.outputContainer.domNode.innerText = ""),
								ie.outputContainer.domNode.appendChild(
									ie.cellOutputCollapsedContainer,
								),
								ie.elementDisposables.add(
									ie.instantiationService.createInstance(
										N.$33b,
										this.c,
										X,
										ie,
										this.k,
									),
								),
								this.j.set(X, ie.editor));
					}
					disposeTemplate(X) {
						X.templateDisposables.clear();
					}
					disposeElement(X, Y, ie, ne) {
						ie.elementDisposables.clear(), this.j.delete(X);
					}
				};
				(e.$a4b = J),
					(e.$a4b =
						J =
						H =
							Ne(
								[
									j(5, h.$gj),
									j(6, n.$Xxb),
									j(7, a.$YX),
									j(8, g.$Li),
									j(9, o.$uZ),
									j(10, f.$4N),
								],
								J,
							));
			},
		),
		
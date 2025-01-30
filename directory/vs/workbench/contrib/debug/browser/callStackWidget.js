import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/button/button.js';
import '../../../../base/common/assert.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/observable.js';
import '../../../../base/common/uint.js';
import '../../../../base/common/uuid.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../editor/browser/widget/codeEditor/codeEditorWidget.js';
import '../../../../editor/browser/widget/codeEditor/embeddedCodeEditorWidget.js';
import '../../../../editor/common/core/position.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../editor/contrib/gotoSymbol/browser/link/clickLinkGesture.js';
import '../../../../nls.js';
import '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../platform/actions/browser/toolbar.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/editor/common/editor.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/label/common/label.js';
import '../../../../platform/list/browser/listService.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import '../../../browser/labels.js';
import './callStackEditorContribution.js';
import '../../../services/editor/common/editorService.js';
import '../../../../css!vs/workbench/contrib/debug/browser/media/callStackWidget.js';
define(
			de[1880],
			he([
				1, 0, 7, 183, 229, 33, 14, 6, 3, 77, 210, 47, 46, 206, 281, 48, 17, 42,
				766, 4, 92, 173, 11, 116, 5, 73, 93, 40, 106, 233, 796, 18, 2427,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*button*/,
				w /*assert*/,
				E /*cancellation*/,
				C /*codicons*/,
				d /*event*/,
				m /*lifecycle*/,
				r /*observable*/,
				u /*uint*/,
				a /*uuid*/,
				h /*editorExtensions*/,
				c /*codeEditorWidget*/,
				n /*embeddedCodeEditorWidget*/,
				g /*position*/,
				p /*range*/,
				o /*resolverService*/,
				f /*clickLinkGesture*/,
				b /*nls*/,
				s /*menuEntryActionViewItem*/,
				l /*toolbar*/,
				y /*actions*/,
				$ /*editor*/,
				v /*instantiation*/,
				S /*label*/,
				I /*listService*/,
				T /*notification*/,
				P /*defaultStyles*/,
				k /*labels*/,
				L /*callStackEditorContribution*/,
				D /*editorService*/,
) {
				"use strict";
				var M, N, A;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nLc = e.$mLc = e.$lLc = e.$kLc = void 0),
					(t = mt(t));
				class R {
					constructor(Q, Z, se = 1, re = 1) {
						(this.name = Q),
							(this.source = Z),
							(this.line = se),
							(this.column = re);
					}
				}
				e.$kLc = R;
				class O {
					constructor(Q, Z) {
						(this.label = Q), (this.load = Z);
					}
				}
				e.$lLc = O;
				class B {
					constructor() {
						this.showHeader = (0, r.observableValue)(
							"CustomStackFrame.showHeader",
							!0,
						);
					}
				}
				e.$mLc = B;
				class U extends R {
					constructor(Q) {
						super(Q.name, Q.source, Q.line, Q.column),
							(this.editorHeight = (0, r.observableValue)(
								"WrappedCallStackFrame.height",
								this.source ? 100 : 0,
							)),
							(this.collapsed = (0, r.observableValue)(
								"WrappedCallStackFrame.collapsed",
								!1,
							)),
							(this.height = (0, r.derived)((Z) =>
								this.collapsed.read(Z) ? J : J + this.editorHeight.read(Z),
							));
					}
				}
				class z {
					constructor(Q) {
						(this.original = Q),
							(this.collapsed = (0, r.observableValue)(
								"WrappedCallStackFrame.collapsed",
								!1,
							)),
							(this.height = (0, r.derived)((Z) => {
								const se = this.original.showHeader.read(Z) ? J : 0;
								return this.collapsed.read(Z)
									? se
									: se + this.original.height.read(Z);
							}));
					}
				}
				const F = (te) => te instanceof U || te instanceof z,
					x = "multiCallStackWidget";
				let H = class extends m.$1c {
					constructor(Q, Z, se) {
						super(),
							(this.b = this.D(new d.$re())),
							(this.c = this.D(new m.$Zc())),
							Q.classList.add(x),
							this.D((0, m.$Yc)(() => Q.classList.remove(x))),
							(this.a = this.D(
								se.createInstance(
									I.$yMb,
									"TestResultStackWidget",
									Q,
									new V(),
									[
										se.createInstance(Y, Z, this.b.event),
										se.createInstance(ie),
										se.createInstance(ne),
										se.createInstance(ee, (re) => this.g(re)),
									],
									{
										multipleSelectionSupport: !1,
										mouseSupport: !1,
										keyboardSupport: !1,
										setRowLineHeight: !1,
										accessibilityProvider: se.createInstance(q),
									},
								),
							));
					}
					setFrames(Q) {
						this.c.clear(),
							(this.f = new E.$Ce()),
							this.D((0, m.$Yc)(() => this.f.dispose(!0))),
							this.a.splice(0, this.a.length, this.j(Q));
					}
					layout(Q, Z) {
						this.a.layout(Q, Z), this.b.fire();
					}
					collapseAll() {
						(0, r.transaction)((Q) => {
							for (let Z = 0; Z < this.a.length; Z++) {
								const se = this.a.element(Z);
								F(se) && se.collapsed.set(!0, Q);
							}
						});
					}
					async g(Q) {
						if (!this.f) return;
						const Z = await Q.load(this.f.token);
						if (this.f.token.isCancellationRequested) return;
						const se = this.a.indexOf(Q);
						this.a.splice(se, 1, this.j(Z));
					}
					j(Q) {
						const Z = [];
						for (const se of Q) {
							if (se instanceof O) {
								Z.push(se);
								continue;
							}
							const re = se instanceof B ? new z(se) : new U(se);
							Z.push(re),
								this.c.add(
									(0, r.autorun)((le) => {
										const oe = re.height.read(le),
											ae = this.a.indexOf(re);
										ae !== -1 && this.a.updateElementHeight(ae, oe);
									}),
								);
						}
						return Z;
					}
				};
				(e.$nLc = H), (e.$nLc = H = Ne([j(2, v.$Li)], H));
				let q = class {
					constructor(Q) {
						this.a = Q;
					}
					getAriaLabel(Q) {
						if (Q instanceof O) return Q.label;
						if (Q instanceof z) return Q.original.label;
						if (Q instanceof R)
							return Q.source && Q.line
								? (0, b.localize)(
										5282,
										null,
										Q.name,
										Q.line,
										this.a.getUriLabel(Q.source, { relative: !0 }),
									)
								: Q.name;
						(0, w.$kd)(Q);
					}
					getWidgetAriaLabel() {
						return (0, b.localize)(5283, null);
					}
				};
				q = Ne([j(0, S.$3N)], q);
				class V {
					getHeight(Q) {
						if (Q instanceof R || Q instanceof z) return Q.height.get();
						if (Q instanceof O) return J;
						(0, w.$kd)(Q);
					}
					getTemplateId(Q) {
						if (Q instanceof R) return Q.source ? Y.templateId : ie.templateId;
						if (Q instanceof O) return ee.templateId;
						if (Q instanceof z) return ne.templateId;
						(0, w.$kd)(Q);
					}
				}
				const G = {
						scrollBeyondLastLine: !1,
						scrollbar: {
							vertical: "hidden",
							horizontal: "hidden",
							handleMouseWheel: !1,
							useShadows: !1,
						},
						overviewRulerLanes: 0,
						fixedOverflowWidgets: !0,
						overviewRulerBorder: !1,
						stickyScroll: { enabled: !1 },
						minimap: { enabled: !1 },
						readOnly: !0,
						automaticLayout: !1,
					},
					K = () =>
						t.h("div.multiCallStackFrame", [
							t.h("div.header@header", [
								t.h("div.collapse-button@collapseButton"),
								t.h("div.title.show-file-icons@title"),
								t.h("div.actions@actions"),
							]),
							t.h("div.editorParent", [t.h("div.editorContainer@editor")]),
						]),
					J = 24;
				let W = class {
					constructor(Q) {
						this.a = Q;
					}
					renderTemplate(Q) {
						const Z = K();
						Q.appendChild(Z.root);
						const se = new m.$Zc();
						Q.classList.add("multiCallStackFrameContainer"),
							se.add(
								(0, m.$Yc)(() => {
									Q.classList.remove("multiCallStackFrameContainer"),
										Z.root.remove();
								}),
							);
						const re = se.add(this.a.createInstance(k.$vPb, Z.title, {})),
							le = se.add(new i.$oob(Z.collapseButton, {})),
							oe = (0, a.$9g)();
						return (
							(Z.editor.id = oe),
							(Z.editor.role = "region"),
							Z.collapseButton.setAttribute("aria-controls", oe),
							this.b({
								container: Q,
								decorations: [],
								elements: Z,
								label: re,
								collapse: le,
								elementStore: se.add(new m.$Zc()),
								templateStore: se,
							})
						);
					}
					renderElement(Q, Z, se, re) {
						const { elementStore: le } = se;
						le.clear();
						const oe = Q;
						this.c(oe, se);
					}
					c(Q, { elementStore: Z, elements: se, collapse: re }) {
						Z.add(
							(0, r.autorun)((oe) => {
								re.element.className = "";
								const ae = Q.collapsed.read(oe);
								(re.icon = ae ? C.$ak.chevronRight : C.$ak.chevronDown),
									(re.element.ariaExpanded = String(!ae)),
									se.root.classList.toggle("collapsed", ae);
							}),
						);
						const le = () => Q.collapsed.set(!Q.collapsed.get(), void 0);
						Z.add(re.onDidClick(le)), Z.add(t.$0fb(se.title, "click", le));
					}
					disposeElement(Q, Z, se, re) {
						se.elementStore.clear();
					}
					disposeTemplate(Q) {
						Q.templateStore.dispose();
					}
				};
				W = Ne([j(0, v.$Li)], W);
				const X = 2;
				let Y = class extends W {
					static {
						M = this;
					}
					static {
						this.templateId = "f";
					}
					constructor(Q, Z, se, re) {
						super(re),
							(this.f = Q),
							(this.g = Z),
							(this.j = se),
							(this.templateId = M.templateId);
					}
					b(Q) {
						const Z = [
								{
									id: _.ID,
									instantiation:
										h.EditorContributionInstantiation.BeforeFirstInteraction,
									ctor: _,
								},
							],
							se = this.f
								? this.a.createInstance(
										n.$wDb,
										Q.elements.editor,
										G,
										{ isSimpleWidget: !0, contributions: Z },
										this.f,
									)
								: this.a.createInstance(c.$rwb, Q.elements.editor, G, {
										isSimpleWidget: !0,
										contributions: Z,
									});
						Q.templateStore.add(se);
						const re = Q.templateStore.add(
							this.a.createInstance(
								l.$Tyb,
								Q.elements.actions,
								y.$XX.DebugCallStackToolbar,
								{
									menuOptions: { shouldForwardArgs: !0 },
									actionViewItemProvider: (le, oe) =>
										(0, s.$Pyb)(this.a, le, oe),
								},
							),
						);
						return { ...Q, editor: se, toolbar: re };
					}
					renderElement(Q, Z, se, re) {
						super.renderElement(Q, Z, se, re);
						const { elementStore: le, editor: oe } = se,
							ae = Q,
							pe = ae.source;
						se.label.element.setFile(pe);
						const $e = new E.$Ce();
						le.add((0, m.$Yc)(() => $e.dispose(!0))),
							this.j.createModelReference(pe).then((ye) => {
								if ($e.token.isCancellationRequested) return ye.dispose();
								le.add(ye),
									oe.setModel(ye.object.textEditorModel),
									this.m(ae, se),
									this.l(ae, se);
							});
					}
					l(Q, { elementStore: Z, container: se, editor: re }) {
						const le = () => {
							const oe = re.getContentHeight();
							re.layout({ width: se.clientWidth, height: oe });
							const ae = re.getContentHeight();
							ae !== oe && re.layout({ width: se.clientWidth, height: ae }),
								Q.editorHeight.set(ae, void 0);
						};
						Z.add(re.onDidChangeModelDecorations(le)),
							Z.add(re.onDidChangeModelContent(le)),
							Z.add(re.onDidChangeModelOptions(le)),
							Z.add(this.g(le)),
							le();
					}
					m(Q, Z) {
						const se = p.$iL.fromPositions({
							column: Q.column ?? 1,
							lineNumber: Q.line ?? 1,
						});
						(Z.toolbar.context = { uri: Q.source, range: se }),
							Z.editor.setHiddenAreas([
								p.$iL.fromPositions(
									{ column: 1, lineNumber: 1 },
									{ column: 1, lineNumber: Math.max(1, Q.line - X - 1) },
								),
								p.$iL.fromPositions(
									{ column: 1, lineNumber: Q.line + X + 1 },
									{ column: 1, lineNumber: u.Constants.MAX_SAFE_SMALL_INTEGER },
								),
							]),
							Z.editor.changeDecorations((re) => {
								for (const pe of Z.decorations) re.removeDecoration(pe);
								Z.decorations.length = 0;
								const le = se.setStartPosition(se.startLineNumber, 1),
									oe = !!Z.editor.getModel()?.getValueInRange(le).trim(),
									ae = se.setEndPosition(
										se.startLineNumber,
										u.Constants.MAX_SAFE_SMALL_INTEGER,
									);
								Z.decorations.push(re.addDecoration(ae, (0, L.$gGc)(!oe))),
									Z.decorations.push(re.addDecoration(ae, L.$eGc));
							}),
							Q.editorHeight.set(Z.editor.getContentHeight(), void 0);
					}
				};
				Y = M = Ne([j(2, o.$MO), j(3, v.$Li)], Y);
				let ie = class {
					static {
						N = this;
					}
					static {
						this.templateId = "m";
					}
					constructor(Q) {
						(this.a = Q), (this.templateId = N.templateId);
					}
					renderTemplate(Q) {
						const Z = K();
						Z.root.classList.add("missing"), Q.appendChild(Z.root);
						const se = this.a.createInstance(k.$vPb, Z.title, {});
						return { elements: Z, label: se };
					}
					renderElement(Q, Z, se) {
						const re = Q;
						se.label.element.setResource(
							{
								name: re.name,
								description: (0, b.localize)(5284, null, re.line, re.column),
								range: {
									startLineNumber: re.line,
									startColumn: re.column,
									endColumn: re.column,
									endLineNumber: re.line,
								},
							},
							{ icon: C.$ak.fileBinary },
						);
					}
					disposeTemplate(Q) {
						Q.label.dispose(), Q.elements.root.remove();
					}
				};
				ie = N = Ne([j(0, v.$Li)], ie);
				class ne extends W {
					constructor() {
						super(...arguments), (this.templateId = ne.templateId);
					}
					static {
						this.templateId = "c";
					}
					b(Q) {
						return Q;
					}
					renderElement(Q, Z, se, re) {
						super.renderElement(Q, Z, se, re);
						const le = Q,
							{ elementStore: oe, container: ae, label: pe } = se;
						pe.element.setResource(
							{ name: le.original.label },
							{ icon: le.original.icon },
						),
							oe.add(
								(0, r.autorun)((ye) => {
									se.elements.header.style.display =
										le.original.showHeader.read(ye) ? "" : "none";
								}),
							),
							oe.add(
								(0, r.autorunWithStore)((ye, ue) => {
									le.collapsed.read(ye) || ue.add(le.original.render(ae));
								}),
							);
						const $e = le.original.renderActions?.(se.elements.actions);
						$e && oe.add($e);
					}
				}
				let ee = class {
					static {
						A = this;
					}
					static {
						this.templateId = "s";
					}
					constructor(Q, Z) {
						(this.a = Q), (this.b = Z), (this.templateId = A.templateId);
					}
					renderTemplate(Q) {
						const Z = new m.$Zc(),
							se = new i.$oob(Q, { title: "", ...P.$lyb }),
							re = { button: se, store: Z };
						return (
							Z.add(se),
							Z.add(
								se.onDidClick(() => {
									!re.current ||
										!se.enabled ||
										((se.enabled = !1),
										this.a(re.current).catch((le) => {
											this.b.error((0, b.localize)(5285, null, le.message));
										}));
								}),
							),
							re
						);
					}
					renderElement(Q, Z, se, re) {
						const le = Q;
						(se.button.enabled = !0),
							(se.button.label = le.label),
							(se.current = le);
					}
					disposeTemplate(Q) {
						Q.store.dispose();
					}
				};
				ee = A = Ne([j(1, T.$4N)], ee);
				let _ = class extends m.$1c {
					static {
						this.ID = "clickToLocation";
					}
					constructor(Q, Z) {
						super(),
							(this.c = Q),
							(this.a = Q.createDecorationsCollection()),
							this.D((0, m.$Yc)(() => this.a.clear()));
						const se = this.D(new f.$6Mb(Q));
						this.D(
							se.onMouseMoveOrRelevantKeyDown(([re, le]) => {
								this.f(re);
							}),
						),
							this.D(
								se.onExecute((re) => {
									const le = this.c.getModel();
									!this.b ||
										!le ||
										Z.openEditor(
											{
												resource: le.uri,
												options: {
													selection: p.$iL.fromPositions(
														new g.$hL(this.b.line, this.b.word.startColumn),
													),
													selectionRevealType:
														$.TextEditorSelectionRevealType
															.CenterIfOutsideViewport,
												},
											},
											re.hasSideBySideModifier ? D.$KY : void 0,
										);
								}),
							);
					}
					f(Q) {
						if (!Q.hasTriggerModifier) return this.g();
						const Z = Q.target.position,
							se = Z && this.c.getModel()?.getWordAtPosition(Z);
						if (!se) return this.g();
						const re = this.b?.word;
						(re &&
							re.startColumn === se.startColumn &&
							re.endColumn === se.endColumn &&
							re.word === se.word) ||
							((this.b = { word: se, line: Z.lineNumber }),
							this.a.set([
								{
									range: new p.$iL(
										Z.lineNumber,
										se.startColumn,
										Z.lineNumber,
										se.endColumn,
									),
									options: {
										description: "call-stack-go-to-file-link",
										inlineClassName: "call-stack-go-to-file-link",
									},
								},
							]));
					}
					g() {
						this.a.clear(), (this.b = void 0);
					}
				};
				(_ = Ne([j(1, D.$IY)], _)),
					(0, y.$4X)(
						class extends y.$3X {
							constructor() {
								super({
									id: "callStackWidget.goToFile",
									title: (0, b.localize2)(5286, "Open File"),
									icon: C.$ak.goToFile,
									menu: {
										id: y.$XX.DebugCallStackToolbar,
										order: 22,
										group: "navigation",
									},
								});
							}
							async run(te, { uri: Q, range: Z }) {
								await te
									.get(D.$IY)
									.openEditor({
										resource: Q,
										options: {
											selection: Z,
											selectionRevealType:
												$.TextEditorSelectionRevealType.CenterIfOutsideViewport,
										},
									});
							}
						},
					);
			},
		),
		
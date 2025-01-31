import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/highlightedlabel/highlightedLabel.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/async.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/filters.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/themables.js';
import '../../../../nls.js';
import '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/clipboard/common/clipboardService.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/list/browser/listService.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/progress/common/progress.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../browser/parts/views/viewPane.js';
import '../../../common/views.js';
import './baseDebugView.js';
import './debugCommands.js';
import './linkDetector.js';
import '../common/debug.js';
import '../common/debugContext.js';
import '../common/debugModel.js';
import '../common/debugVisualizers.js';
import '../../extensions/common/extensions.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/extensions/common/extensions.js';
define(
			de[1334],
			he([
				1, 0, 7, 410, 50, 24, 15, 33, 14, 132, 3, 26, 4, 92, 11, 121, 31, 10, 8,
				49, 72, 5, 39, 93, 40, 41, 84, 32, 35, 146, 60, 629, 425, 709, 112,
				1730, 300, 1039, 141, 18, 53,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*highlightedLabel*/,
				w /*actions*/,
				E /*arrays*/,
				C /*async*/,
				d /*cancellation*/,
				m /*codicons*/,
				r /*filters*/,
				u /*lifecycle*/,
				a /*themables*/,
				h /*nls*/,
				c /*menuEntryActionViewItem*/,
				n /*actions*/,
				g /*clipboardService*/,
				p /*commands*/,
				o /*configuration*/,
				f /*contextkey*/,
				b /*contextView*/,
				s /*hover*/,
				l /*instantiation*/,
				y /*keybinding*/,
				$ /*listService*/,
				v /*notification*/,
				S /*opener*/,
				I /*progress*/,
				T /*telemetry*/,
				P /*themeService*/,
				k /*viewPane*/,
				L /*views*/,
				D /*baseDebugView*/,
				M /*debugCommands*/,
				N /*linkDetector*/,
				A /*debug*/,
				R /*debugContext*/,
				O /*debugModel*/,
				B /*debugVisualizers*/,
				U /*extensions*/,
				z /*editorService*/,
				F /*extensions*/,
) {
				"use strict";
				var x, H;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$CQc =
						e.$BQc =
						e.$AQc =
						e.$zQc =
						e.$yQc =
						e.$xQc =
						e.$wQc =
						e.$uQc =
							void 0),
					(e.$vQc = W),
					(t = mt(t));
				const q = t.$;
				let V = !0,
					G,
					K,
					J = class extends k.$TMb {
						constructor($e, ye, ue, fe, me, ve, ge, be, Ce, Le, Fe, Oe, xe) {
							super($e, fe, ye, me, be, ge, ve, Ce, Le, Fe, Oe),
								(this.h = ue),
								(this.j = xe),
								(this.b = !1),
								(this.f = new Map()),
								(this.g = new Set()),
								(this.a = new C.$Yh(async () => {
									const He = this.h.getViewModel().focusedStackFrame;
									this.b = !1;
									const Ke = this.c.getInput();
									if (
										(Ke && this.f.set(Ke.getId(), this.c.getViewState()), !He)
									) {
										await this.c.setInput(null);
										return;
									}
									const Je = this.f.get(He.getId());
									await this.c.setInput(He, Je);
									const Ee = (await He.getScopes()).find((Ie) => !Ie.expensive);
									Ee &&
										this.c.hasNode(Ee) &&
										(this.g.add(Ee.getId()), await this.c.expand(Ee));
								}, 400));
						}
						W($e) {
							super.W($e),
								this.element.classList.add("debug-pane"),
								$e.classList.add("debug-variables");
							const ye = (0, D.$cIc)($e),
								ue = this.Db.createInstance(N.$7Hc);
							(this.c = this.Db.createInstance(
								$.$FMb,
								"VariablesView",
								ye,
								new _(),
								[
									this.Db.createInstance(se, ue),
									this.Db.createInstance(Z, ue),
									new te(),
									new Q(),
								],
								this.Db.createInstance(ee),
								{
									accessibilityProvider: new re(),
									identityProvider: { getId: (me) => me.getId() },
									keyboardNavigationLabelProvider: {
										getKeyboardNavigationLabel: (me) => me.name,
									},
									overrideStyles: this.Zb().listOverrideStyles,
								},
							)),
								this.D(
									Z.rendererOnVisualizationRange(this.h.getViewModel(), this.c),
								),
								this.c.setInput(
									this.h.getViewModel().focusedStackFrame ?? null,
								),
								A.$b5.bindTo(this.c.contextKeyService),
								this.D(
									this.h.getViewModel().onDidFocusStackFrame((me) => {
										if (!this.isBodyVisible()) {
											this.b = !0;
											return;
										}
										const ve = me.explicit ? 0 : void 0;
										this.a.schedule(ve);
									}),
								),
								this.D(
									this.h.getViewModel().onWillUpdateViews(() => {
										const me = this.h.getViewModel().focusedStackFrame;
										me && V && me.forgetScopes(),
											(V = !0),
											this.c.updateChildren();
									}),
								),
								this.D(this.c),
								this.D(this.c.onMouseDblClick((me) => this.r(me))),
								this.D(this.c.onContextMenu(async (me) => await this.L(me))),
								this.D(
									this.onDidChangeBodyVisibility((me) => {
										me && this.b && this.a.schedule();
									}),
								);
							let fe;
							this.D(
								this.h.getViewModel().onDidSelectExpression((me) => {
									const ve = me?.expression;
									ve && this.c.hasNode(ve)
										? ((fe = this.c.options.horizontalScrolling),
											fe && this.c.updateOptions({ horizontalScrolling: !1 }),
											this.c.rerender(ve))
										: !me &&
											fe !== void 0 &&
											(this.c.updateOptions({ horizontalScrolling: fe }),
											(fe = void 0));
								}),
							),
								this.D(
									this.h
										.getViewModel()
										.onDidEvaluateLazyExpression(async (me) => {
											me instanceof O.$K3 &&
												this.c.hasNode(me) &&
												(await this.c.updateChildren(me, !1, !0),
												await this.c.expand(me));
										}),
								),
								this.D(
									this.h.onDidEndSession(() => {
										this.f.clear(), this.g.clear();
									}),
								);
						}
						X($e, ye) {
							super.X(ye, $e), this.c.layout($e, ye);
						}
						focus() {
							super.focus(), this.c.domFocus();
						}
						collapseAll() {
							this.c.collapseAll();
						}
						r($e) {
							this.t($e.element) &&
								this.h.getViewModel().setSelectedExpression($e.element, !1);
						}
						t($e) {
							return this.h.getViewModel().focusedSession
								? $e instanceof O.$I3
									? !!$e.treeItem.canEdit
									: $e instanceof O.$K3 &&
										!$e.presentationHint?.attributes?.includes("readOnly") &&
										!$e.presentationHint?.lazy
								: !1;
						}
						async L($e) {
							const ye = $e.element;
							if (!(!(ye instanceof O.$K3) || !ye.value))
								return W(
									this.Bb,
									this.j,
									this.zb,
									n.$XX.DebugVariablesContext,
									$e,
								);
						}
					};
				(e.$uQc = J),
					(e.$uQc = J =
						Ne(
							[
								j(1, b.$Xxb),
								j(2, A.$75),
								j(3, y.$uZ),
								j(4, o.$gj),
								j(5, l.$Li),
								j(6, L.$K1),
								j(7, f.$6j),
								j(8, S.$7rb),
								j(9, P.$iP),
								j(10, T.$km),
								j(11, s.$Uyb),
								j(12, n.$YX),
							],
							J,
						));
				async function W(pe, $e, ye, ue, fe) {
					const me = fe.element;
					if (!(me instanceof O.$K3) || !me.value) return;
					const ve = await Y(pe, me),
						ge = X(me),
						be = $e.getMenuActions(ue, ve, { arg: ge, shouldForwardArgs: !1 }),
						Ce = [];
					(0, c.$Jyb)(be, { primary: [], secondary: Ce }, "inline"),
						ye.showContextMenu({
							getAnchor: () => fe.anchor,
							getActions: () => Ce,
						});
				}
				const X = (pe) => ({
					sessionId: pe.getSession()?.getId(),
					container:
						pe.parent instanceof O.$J3
							? { expression: pe.parent.name }
							: pe.parent.toDebugProtocolObject(),
					variable: pe.toDebugProtocolObject(),
				});
				async function Y(pe, $e) {
					const ye = $e.getSession();
					if (!ye || !ye.capabilities.supportsDataBreakpoints)
						return ie(pe, $e);
					const ue = [];
					K = await ye.dataBreakpointInfo($e.name, $e.parent.reference);
					const fe = K?.dataId,
						me = K?.accessTypes;
					if (!me) ue.push([A.$E5.key, !!fe]);
					else
						for (const ve of me)
							switch (ve) {
								case "read":
									ue.push([A.$G5.key, !!fe]);
									break;
								case "write":
									ue.push([A.$E5.key, !!fe]);
									break;
								case "readWrite":
									ue.push([A.$F5.key, !!fe]);
									break;
							}
					return ie(pe, $e, ue);
				}
				function ie(pe, $e, ye = []) {
					return (G = $e), (0, R.$C3)(pe, $e, ye);
				}
				function ne(pe) {
					return pe instanceof O.$N3;
				}
				class ee extends D.$fIc {
					hasChildren($e) {
						return $e ? (ne($e) ? !0 : $e.hasChildren) : !1;
					}
					c($e) {
						return ne($e) ? $e.getScopes() : $e.getChildren();
					}
				}
				class _ {
					getHeight($e) {
						return 22;
					}
					getTemplateId($e) {
						return $e instanceof O.$M3
							? Q.ID
							: $e instanceof O.$L3
								? te.ID
								: $e instanceof O.$I3
									? Z.ID
									: se.ID;
					}
				}
				class te {
					static {
						this.ID = "scope";
					}
					get templateId() {
						return te.ID;
					}
					renderTemplate($e) {
						const ye = t.$fhb($e, q(".scope")),
							ue = new i.$Wob(ye);
						return { name: ye, label: ue };
					}
					renderElement($e, ye, ue) {
						ue.label.set($e.element.name, (0, r.$3k)($e.filterData));
					}
					disposeTemplate($e) {
						$e.label.dispose();
					}
				}
				class Q {
					static {
						this.ID = "scopeError";
					}
					get templateId() {
						return Q.ID;
					}
					renderTemplate($e) {
						const ye = t.$fhb($e, q(".scope"));
						return { error: t.$fhb(ye, q(".error")) };
					}
					renderElement($e, ye, ue) {
						ue.error.innerText = $e.element.name;
					}
					disposeTemplate() {}
				}
				let Z = class extends D.$gIc {
					static {
						x = this;
					}
					static {
						this.ID = "viz";
					}
					static rendererOnVisualizationRange($e, ye) {
						return $e.onDidChangeVisualization(({ original: ue }) => {
							if (!ye.hasNode(ue)) return;
							const fe = ye.getParentElement(ue);
							ye.updateChildren(fe, !1, !1);
						});
					}
					constructor($e, ye, ue, fe, me, ve) {
						super(ye, ue, fe), (this.i = $e), (this.j = me), (this.k = ve);
					}
					get templateId() {
						return x.ID;
					}
					renderElement($e, ye, ue) {
						ue.elementDisposable.clear(), super.d($e.element, $e, ue);
					}
					f($e, ye, ue) {
						const fe = $e;
						let me = fe.name;
						fe.value && typeof fe.name == "string" && (me += ":"),
							ye.label.set(me, ue, fe.name),
							(0, D.$dIc)(
								ye.elementDisposable,
								fe,
								ye.value,
								{
									showChanged: !1,
									maxValueLength: 1024,
									colorize: !0,
									linkDetector: this.i,
								},
								this.c,
							);
					}
					g($e) {
						const ye = $e;
						return {
							initialValue: $e.value,
							ariaLabel: (0, h.localize)(5743, null),
							validationOptions: {
								validation: () =>
									ye.errorMessage ? { content: ye.errorMessage } : null,
							},
							onFinish: (ue, fe) => {
								(ye.errorMessage = void 0),
									fe &&
										ye.edit(ue).then(() => {
											(V = !1), this.a.getViewModel().updateViews();
										});
							},
						};
					}
					h($e, ye, ue) {
						const fe = ye,
							me = fe.original ? ie(this.k, fe.original) : this.k,
							ve = fe.original ? X(fe.original) : void 0,
							ge = this.j.getMenuActions(n.$XX.DebugVariablesContext, me, {
								arg: ve,
								shouldForwardArgs: !1,
							}),
							be = [];
						if (
							((0, c.$Jyb)(ge, { primary: be, secondary: [] }, "inline"),
							fe.original)
						) {
							const Ce = new w.$rj(
								"debugViz",
								(0, h.localize)(5744, null),
								a.ThemeIcon.asClassName(m.$ak.eye),
								!0,
								() =>
									this.a
										.getViewModel()
										.setVisualizedExpression(fe.original, void 0),
							);
							(Ce.checked = !0),
								be.push(Ce),
								($e.domNode.style.display = "initial");
						}
						$e.clear(), ($e.context = ve), $e.push(be, { icon: !0, label: !1 });
					}
				};
				(e.$wQc = Z),
					(e.$wQc =
						Z =
						x =
							Ne(
								[
									j(1, A.$75),
									j(2, b.$Wxb),
									j(3, s.$Uyb),
									j(4, n.$YX),
									j(5, f.$6j),
								],
								Z,
							));
				let se = class extends D.$gIc {
					static {
						H = this;
					}
					static {
						this.ID = "variable";
					}
					constructor($e, ye, ue, fe, me, ve, ge, be, Ce, Le) {
						super(ge, be, Ce),
							(this.i = $e),
							(this.j = ye),
							(this.k = ue),
							(this.l = fe),
							(this.m = me),
							(this.n = ve),
							(this.o = Le);
					}
					get templateId() {
						return H.ID;
					}
					f($e, ye, ue) {
						const fe = this.o.getValue("debug").showVariableTypes;
						(0, D.$eIc)(
							ye.elementDisposable,
							this.n,
							this.c,
							$e,
							ye,
							!0,
							ue,
							this.i,
							fe,
						);
					}
					renderElement($e, ye, ue) {
						ue.elementDisposable.clear(),
							ue.elementDisposable.add(
								this.o.onDidChangeConfiguration((fe) => {
									fe.affectsConfiguration("debug.showVariableTypes") &&
										super.d($e.element, $e, ue);
								}),
							),
							super.d($e.element, $e, ue);
					}
					g($e) {
						const ye = $e;
						return {
							initialValue: $e.value,
							ariaLabel: (0, h.localize)(5745, null),
							validationOptions: {
								validation: () =>
									ye.errorMessage ? { content: ye.errorMessage } : null,
							},
							onFinish: (ue, fe) => {
								ye.errorMessage = void 0;
								const me = this.a.getViewModel().focusedStackFrame;
								fe &&
									ye.value !== ue &&
									me &&
									ye.setVariable(ue, me).then(() => {
										(V = !1), this.a.getViewModel().updateViews();
									});
							},
						};
					}
					h($e, ye, ue) {
						const fe = ye,
							me = ie(this.k, fe),
							ve = [],
							ge = X(fe),
							be = this.j.getMenuActions(n.$XX.DebugVariablesContext, me, {
								arg: ge,
								shouldForwardArgs: !1,
							});
						(0, c.$Jyb)(be, { primary: ve, secondary: [] }, "inline"),
							$e.clear(),
							($e.context = ge),
							$e.push(ve, { icon: !0, label: !1 });
						const Ce = new d.$Ce();
						ue.elementDisposable.add((0, u.$Yc)(() => Ce.dispose(!0))),
							this.l.getApplicableFor(ye, Ce.token).then((Le) => {
								ue.elementDisposable.add(Le);
								const Fe = (ye instanceof O.$I3 && ye.original) || ye,
									Oe = Le.object.map(
										(xe) =>
											new w.$rj(
												"debugViz",
												xe.name,
												xe.iconClass || "debug-viz-icon",
												void 0,
												this.w(xe, Fe, Ce.token),
											),
									);
								Oe.length === 0 ||
									(Oe.length === 1
										? $e.push(Oe[0], { icon: !0, label: !1 })
										: $e.push(
												new w.$rj(
													"debugViz",
													(0, h.localize)(5746, null),
													a.ThemeIcon.asClassName(m.$ak.eye),
													void 0,
													() => this.u(Oe, Fe, ue),
												),
												{ icon: !0, label: !1 },
											));
							});
					}
					u($e, ye, ue) {
						this.m.showContextMenu({
							getAnchor: () => ue.actionBar.getContainer(),
							getActions: () => $e,
						});
					}
					w($e, ye, ue) {
						return async () => {
							const fe = await $e.resolve(ue);
							if (!ue.isCancellationRequested)
								if (fe.type === A.DebugVisualizationType.Command) $e.execute();
								else {
									const me = await this.l.getVisualizedNodeFor(fe.id, ye);
									me && this.a.getViewModel().setVisualizedExpression(ye, me);
								}
						};
					}
				};
				(e.$xQc = se),
					(e.$xQc =
						se =
						H =
							Ne(
								[
									j(1, n.$YX),
									j(2, f.$6j),
									j(3, B.$D3),
									j(4, b.$Xxb),
									j(5, p.$ek),
									j(6, A.$75),
									j(7, b.$Wxb),
									j(8, s.$Uyb),
									j(9, o.$gj),
								],
								se,
							));
				class re {
					getWidgetAriaLabel() {
						return (0, h.localize)(5747, null);
					}
					getAriaLabel($e) {
						return $e instanceof O.$L3
							? (0, h.localize)(5748, null, $e.name)
							: $e instanceof O.$K3
								? (0, h.localize)(5749, null, $e.name, $e.value)
								: null;
					}
				}
				(e.$yQc = "debug.setVariable"),
					p.$fk.registerCommand({
						id: e.$yQc,
						handler: (pe) => {
							pe.get(A.$75).getViewModel().setSelectedExpression(G, !1);
						},
					}),
					p.$fk.registerCommand({
						metadata: { description: M.$1Hc },
						id: M.$zHc,
						handler: async (pe, $e, ye) => {
							const ue = pe.get(A.$75),
								fe = pe.get(g.$Vxb);
							let me = "",
								ve;
							$e instanceof O.$K3 || $e instanceof O.$J3
								? ((me = "watch"), (ve = ye || []))
								: ((me = "variables"), (ve = G ? [G] : []));
							const ge = ue.getViewModel().focusedStackFrame,
								be = ue.getViewModel().focusedSession;
							if (!ge || !be || ve.length === 0) return;
							const Ce = be.capabilities.supportsClipboardContext
									? "clipboard"
									: me,
								Le = ve.map((Fe) =>
									Fe instanceof O.$K3 ? Fe.evaluateName || Fe.value : Fe.name,
								);
							try {
								const Fe = await Promise.all(
										Le.map((xe) => be.evaluate(xe, ge.frameId, Ce)),
									),
									Oe = (0, E.$Lb)(Fe).map((xe) => xe.body.result);
								Oe.length &&
									fe.writeText(
										Oe.join(`
`),
									);
							} catch {
								const Oe = ve.map((xe) => xe.value);
								fe.writeText(
									Oe.join(`
`),
								);
							}
						},
					}),
					(e.$zQc = "workbench.debug.viewlet.action.viewMemory");
				const le = "ms-vscode.hexeditor",
					oe = "hexEditor.hexedit";
				p.$fk.registerCommand({
					id: e.$zQc,
					handler: async (pe, $e, ye) => {
						const ue = pe.get(A.$75);
						let fe, me;
						if ("sessionId" in $e) {
							if (!$e.sessionId || !$e.variable.memoryReference) return;
							(fe = $e.sessionId), (me = $e.variable.memoryReference);
						} else {
							if (!$e.memoryReference) return;
							const Oe = ue.getViewModel().focusedSession;
							if (!Oe) return;
							(fe = Oe.getId()), (me = $e.memoryReference);
						}
						const ve = pe.get(U.$MQb),
							ge = pe.get(z.$IY),
							be = pe.get(v.$4N),
							Ce = pe.get(F.$q2),
							Le = pe.get(T.$km);
						((await Ce.getExtension(le)) || (await ae(ve, be))) &&
							(Le.publicLog("debug/didViewMemory", {
								debugType: ue.getModel().getSession(fe)?.configuration.type,
							}),
							await ge.openEditor(
								{
									resource: (0, O.$P3)(fe, me),
									options: { revealIfOpened: !0, override: oe },
								},
								z.$KY,
							));
					},
				});
				async function ae(pe, $e) {
					try {
						return (
							await pe.install(
								le,
								{ justification: (0, h.localize)(5750, null), enable: !0 },
								I.ProgressLocation.Notification,
							),
							!0
						);
					} catch (ye) {
						return $e.error(ye), !1;
					}
				}
				(e.$AQc = "debug.breakWhenValueChanges"),
					p.$fk.registerCommand({
						id: e.$AQc,
						handler: async (pe) => {
							const $e = pe.get(A.$75);
							K &&
								(await $e.addDataBreakpoint({
									description: K.description,
									src: {
										type: A.DataBreakpointSetType.Variable,
										dataId: K.dataId,
									},
									canPersist: !!K.canPersist,
									accessTypes: K.accessTypes,
									accessType: "write",
								}));
						},
					}),
					(e.$BQc = "debug.breakWhenValueIsAccessed"),
					p.$fk.registerCommand({
						id: e.$BQc,
						handler: async (pe) => {
							const $e = pe.get(A.$75);
							K &&
								(await $e.addDataBreakpoint({
									description: K.description,
									src: {
										type: A.DataBreakpointSetType.Variable,
										dataId: K.dataId,
									},
									canPersist: !!K.canPersist,
									accessTypes: K.accessTypes,
									accessType: "readWrite",
								}));
						},
					}),
					(e.$CQc = "debug.breakWhenValueIsRead"),
					p.$fk.registerCommand({
						id: e.$CQc,
						handler: async (pe) => {
							const $e = pe.get(A.$75);
							K &&
								(await $e.addDataBreakpoint({
									description: K.description,
									src: {
										type: A.DataBreakpointSetType.Variable,
										dataId: K.dataId,
									},
									canPersist: !!K.canPersist,
									accessTypes: K.accessTypes,
									accessType: "read",
								}));
						},
					}),
					p.$fk.registerCommand({
						metadata: { description: M.$ZHc },
						id: M.$yHc,
						handler: async (pe, $e) => {
							await pe.get(g.$Vxb).writeText($e.variable.evaluateName);
						},
					}),
					p.$fk.registerCommand({
						metadata: { description: M.$2Hc },
						id: M.$xHc,
						handler: async (pe, $e) => {
							pe.get(A.$75).addWatchExpression($e.variable.evaluateName);
						},
					}),
					(0, n.$4X)(
						class extends k.$WMb {
							constructor() {
								super({
									id: "variables.collapse",
									viewId: A.$R4,
									title: (0, h.localize)(5751, null),
									f1: !1,
									icon: m.$ak.collapseAll,
									menu: {
										id: n.$XX.ViewTitle,
										group: "navigation",
										when: f.$Kj.equals("view", A.$R4),
									},
								});
							}
							runInView(pe, $e) {
								$e.collapseAll();
							}
						},
					);
			},
		)

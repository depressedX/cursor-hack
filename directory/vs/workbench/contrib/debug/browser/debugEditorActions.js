import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/keyCodes.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../editor/common/core/position.js';
import '../../../../editor/common/editorContextKeys.js';
import '../../../../editor/common/services/languageFeatures.js';
import '../../../../editor/contrib/message/browser/messageController.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../common/contextkeys.js';
import '../../chat/common/chatContextKeys.js';
import './breakpointsView.js';
import './disassemblyView.js';
import '../common/debug.js';
import '../common/debugUtils.js';
import '../common/disassemblyViewInput.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/views/common/viewsService.js';
define(
			de[3815],
			he([
				1, 0, 7, 50, 27, 46, 65, 48, 71, 69, 440, 4, 11, 10, 8, 49, 43, 68, 100,
				207, 1049, 1881, 112, 396, 797, 18, 89,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*actions*/,
				w /*keyCodes*/,
				E /*editorExtensions*/,
				C /*codeEditorService*/,
				d /*position*/,
				m /*editorContextKeys*/,
				r /*languageFeatures*/,
				u /*messageController*/,
				a /*nls*/,
				h /*actions*/,
				c /*configuration*/,
				n /*contextkey*/,
				g /*contextView*/,
				p /*keybindingsRegistry*/,
				o /*uriIdentity*/,
				f /*contextkeys*/,
				b /*chatContextKeys*/,
				s /*breakpointsView*/,
				l /*disassemblyView*/,
				y /*debug*/,
				$ /*debugUtils*/,
				v /*disassemblyViewInput*/,
				S /*editorService*/,
				I /*viewsService*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$tQc = e.$sQc = e.$rQc = void 0),
					(a = mt(a));
				class T extends h.$3X {
					constructor() {
						super({
							id: "editor.debug.action.toggleBreakpoint",
							title: {
								...a.localize2(5488, "Debug: Toggle Breakpoint"),
								mnemonicTitle: a.localize(5471, null),
							},
							f1: !0,
							precondition: y.$y5,
							keybinding: {
								when: n.$Kj.or(m.EditorContextKeys.editorTextFocus, y.$V5),
								primary: w.KeyCode.F9,
								weight: p.KeybindingWeight.EditorContrib,
							},
							menu: {
								id: h.$XX.MenubarDebugMenu,
								when: y.$y5,
								group: "4_new_breakpoint",
								order: 1,
							},
						});
					}
					async run(G) {
						const K = G.get(S.$IY),
							J = G.get(y.$75),
							W = K.activeEditorPane;
						if (W instanceof l.$jGc) {
							const ie = W.focusedAddressAndOffset;
							if (ie) {
								const ee = J.getModel()
									.getInstructionBreakpoints()
									.find((_) => _.address === ie.address);
								ee
									? J.removeInstructionBreakpoints(
											ee.instructionReference,
											ee.offset,
										)
									: J.addInstructionBreakpoint({
											instructionReference: ie.reference,
											offset: ie.offset,
											address: ie.address,
											canPersist: !1,
										});
							}
							return;
						}
						const X = G.get(C.$dtb),
							Y = X.getFocusedCodeEditor() || X.getActiveCodeEditor();
						if (Y?.hasModel()) {
							const ie = Y.getModel().uri,
								ne = J.canSetBreakpointsIn(Y.getModel()),
								ee = [
									...new Set(
										Y.getSelections().map((_) => _.getPosition().lineNumber),
									),
								];
							await Promise.all(
								ee.map(async (_) => {
									const te = J.getModel().getBreakpoints({
										lineNumber: _,
										uri: ie,
									});
									te.length
										? await Promise.all(
												te.map((Q) => J.removeBreakpoints(Q.getId())),
											)
										: ne && (await J.addBreakpoints(ie, [{ lineNumber: _ }]));
								}),
							);
						}
					}
				}
				class P extends E.$itb {
					constructor() {
						super({
							id: "editor.debug.action.conditionalBreakpoint",
							label: a.localize(5472, null),
							alias: "Debug: Add Conditional Breakpoint...",
							precondition: y.$y5,
							menuOpts: {
								menuId: h.$XX.MenubarNewBreakpointMenu,
								title: a.localize(5473, null),
								group: "1_breakpoints",
								order: 1,
								when: y.$y5,
							},
						});
					}
					async run(G, K) {
						const J = G.get(y.$75),
							W = K.getPosition();
						W &&
							K.hasModel() &&
							J.canSetBreakpointsIn(K.getModel()) &&
							K.getContribution(y.$15)?.showBreakpointWidget(
								W.lineNumber,
								void 0,
								y.BreakpointWidgetContext.CONDITION,
							);
					}
				}
				class k extends E.$itb {
					constructor() {
						super({
							id: "editor.debug.action.addLogPoint",
							label: a.localize(5474, null),
							precondition: y.$y5,
							alias: "Debug: Add Logpoint...",
							menuOpts: [
								{
									menuId: h.$XX.MenubarNewBreakpointMenu,
									title: a.localize(5475, null),
									group: "1_breakpoints",
									order: 4,
									when: y.$y5,
								},
							],
						});
					}
					async run(G, K) {
						const J = G.get(y.$75),
							W = K.getPosition();
						W &&
							K.hasModel() &&
							J.canSetBreakpointsIn(K.getModel()) &&
							K.getContribution(y.$15)?.showBreakpointWidget(
								W.lineNumber,
								W.column,
								y.BreakpointWidgetContext.LOG_MESSAGE,
							);
					}
				}
				class L extends E.$itb {
					constructor() {
						super({
							id: "editor.debug.action.triggerByBreakpoint",
							label: a.localize(5476, null),
							precondition: y.$y5,
							alias: "Debug: Triggered Breakpoint...",
							menuOpts: [
								{
									menuId: h.$XX.MenubarNewBreakpointMenu,
									title: a.localize(5477, null),
									group: "1_breakpoints",
									order: 4,
									when: y.$y5,
								},
							],
						});
					}
					async run(G, K) {
						const J = G.get(y.$75),
							W = K.getPosition();
						W &&
							K.hasModel() &&
							J.canSetBreakpointsIn(K.getModel()) &&
							K.getContribution(y.$15)?.showBreakpointWidget(
								W.lineNumber,
								W.column,
								y.BreakpointWidgetContext.TRIGGER_POINT,
							);
					}
				}
				class D extends E.$itb {
					constructor() {
						super({
							id: "editor.debug.action.editBreakpoint",
							label: a.localize(5478, null),
							alias: "Debug: Edit Existing Breakpoint",
							precondition: y.$y5,
							menuOpts: {
								menuId: h.$XX.MenubarNewBreakpointMenu,
								title: a.localize(5479, null),
								group: "1_breakpoints",
								order: 1,
								when: y.$y5,
							},
						});
					}
					async run(G, K) {
						const J = G.get(y.$75),
							W = K.getPosition(),
							X = J.getModel();
						if (!(K.hasModel() && W)) return;
						const Y = X.getBreakpoints({ lineNumber: W.lineNumber });
						if (Y.length === 0) return;
						const ie = Y.map((_) =>
								_.column ? Math.abs(_.column - W.column) : W.column,
							),
							ne = ie.indexOf(Math.min(...ie)),
							ee = Y[ne];
						K.getContribution(y.$15)?.showBreakpointWidget(
							ee.lineNumber,
							ee.column,
						);
					}
				}
				class M extends h.$3X {
					static {
						this.ID = "debug.action.openDisassemblyView";
					}
					constructor() {
						super({
							id: M.ID,
							title: {
								...a.localize2(5489, "Open Disassembly View"),
								mnemonicTitle: a.localize(5480, null),
							},
							precondition: y.$X5,
							menu: [
								{
									id: h.$XX.EditorContext,
									group: "debug",
									order: 5,
									when: n.$Kj.and(
										y.$74,
										f.$uQb.toNegated(),
										y.$24.isEqualTo("stopped"),
										m.EditorContextKeys.editorTextFocus,
										y.$U5,
										y.$W5,
									),
								},
								{
									id: h.$XX.DebugCallStackContext,
									group: "z_commands",
									order: 50,
									when: n.$Kj.and(
										y.$74,
										y.$24.isEqualTo("stopped"),
										y.$e5.isEqualTo("stackFrame"),
										y.$U5,
									),
								},
								{
									id: h.$XX.CommandPalette,
									when: n.$Kj.and(y.$74, y.$24.isEqualTo("stopped"), y.$U5),
								},
							],
						});
					}
					run(G) {
						G.get(S.$IY).openEditor(v.$G3.instance, {
							pinned: !0,
							revealIfOpened: !0,
						});
					}
				}
				class N extends h.$3X {
					static {
						this.ID = "debug.action.toggleDisassemblyViewSourceCode";
					}
					static {
						this.configID = "debug.disassemblyView.showSourceCode";
					}
					constructor() {
						super({
							id: N.ID,
							title: {
								...a.localize2(5490, "Toggle Source Code in Disassembly View"),
								mnemonicTitle: a.localize(5481, null),
							},
							metadata: {
								description: a.localize2(
									5491,
									"Shows or hides source code in disassembly",
								),
							},
							f1: !0,
						});
					}
					run(G, K, ...J) {
						const W = G.get(c.$gj);
						if (W) {
							const X = W.getValue("debug").disassemblyView.showSourceCode;
							W.updateValue(N.configID, !X);
						}
					}
				}
				class A extends E.$itb {
					static {
						this.ID = "editor.debug.action.runToCursor";
					}
					static {
						this.LABEL = a.localize2(5492, "Run to Cursor");
					}
					constructor() {
						super({
							id: A.ID,
							label: A.LABEL.value,
							alias: "Debug: Run to Cursor",
							precondition: n.$Kj.and(
								y.$y5,
								f.$uQb.toNegated(),
								n.$Kj.or(m.EditorContextKeys.editorTextFocus, y.$V5),
								b.$41.negate(),
							),
							contextMenuOpts: { group: "debug", order: 2, when: y.$74 },
						});
					}
					async run(G, K) {
						const J = K.getPosition();
						if (!(K.hasModel() && J)) return;
						const W = K.getModel().uri,
							X = G.get(y.$75),
							Y = X.getViewModel(),
							ie = G.get(o.$Vl);
						let ne;
						const ee = Y.focusedStackFrame;
						ee &&
							ie.extUri.isEqual(ee.source.uri, W) &&
							ee.range.startLineNumber === J.lineNumber &&
							(ne = J.column),
							await X.runTo(W, J.lineNumber, ne);
					}
				}
				e.$rQc = A;
				class R extends E.$itb {
					static {
						this.ID = "editor.debug.action.selectionToRepl";
					}
					static {
						this.LABEL = a.localize2(5493, "Evaluate in Debug Console");
					}
					constructor() {
						super({
							id: R.ID,
							label: R.LABEL.value,
							alias: "Debug: Evaluate in Console",
							precondition: n.$Kj.and(
								y.$74,
								m.EditorContextKeys.editorTextFocus,
								b.$41.negate(),
							),
							contextMenuOpts: { group: "debug", order: 0 },
						});
					}
					async run(G, K) {
						const J = G.get(y.$75),
							W = G.get(I.$HMb),
							Y = J.getViewModel().focusedSession;
						if (!K.hasModel() || !Y) return;
						const ie = K.getSelection();
						let ne;
						ie.isEmpty()
							? (ne = K.getModel()
									.getLineContent(ie.selectionStartLineNumber)
									.trim())
							: (ne = K.getModel().getValueInRange(ie)),
							(await W.openView(y.$Y4, !1))?.sendReplInput(ne);
					}
				}
				e.$sQc = R;
				class O extends E.$itb {
					static {
						this.ID = "editor.debug.action.selectionToWatch";
					}
					static {
						this.LABEL = a.localize2(5494, "Add to Watch");
					}
					constructor() {
						super({
							id: O.ID,
							label: O.LABEL.value,
							alias: "Debug: Add to Watch",
							precondition: n.$Kj.and(
								y.$74,
								m.EditorContextKeys.editorTextFocus,
								b.$41.negate(),
							),
							contextMenuOpts: { group: "debug", order: 1 },
						});
					}
					async run(G, K) {
						const J = G.get(y.$75),
							W = G.get(I.$HMb),
							X = G.get(r.$k3);
						if (!K.hasModel()) return;
						let Y;
						const ie = K.getModel(),
							ne = K.getSelection();
						if (!ne.isEmpty()) Y = ie.getValueInRange(ne);
						else {
							const ee = K.getPosition(),
								_ = await (0, $.$r3)(X, ie, ee);
							if (!_) return;
							Y = _.matchingExpression;
						}
						Y && (await W.openView(y.$S4), J.addWatchExpression(Y));
					}
				}
				e.$tQc = O;
				class B extends E.$itb {
					constructor() {
						super({
							id: "editor.debug.action.showDebugHover",
							label: a.localize(5482, null),
							alias: "Debug: Show Hover",
							precondition: y.$74,
							kbOpts: {
								kbExpr: m.EditorContextKeys.editorTextFocus,
								primary: (0, w.$os)(w.$ps, w.KeyMod.CtrlCmd | w.KeyCode.KeyI),
								mac: {
									primary: (0, w.$os)(w.$qs, w.KeyMod.CtrlCmd | w.KeyCode.KeyI),
								},
								weight: p.KeybindingWeight.EditorContrib,
							},
						});
					}
					async run(G, K) {
						const J = K.getPosition();
						if (!(!J || !K.hasModel()))
							return K.getContribution(y.$Z5)?.showHover(J, !0);
					}
				}
				const U = a.localize(5483, null);
				class z extends E.$itb {
					static {
						this.ID = "editor.debug.action.stepIntoTargets";
					}
					static {
						this.LABEL = a.localize(5484, null);
					}
					constructor() {
						super({
							id: z.ID,
							label: z.LABEL,
							alias: "Debug: Step Into Target",
							precondition: n.$Kj.and(
								y.$w5,
								y.$74,
								y.$24.isEqualTo("stopped"),
								m.EditorContextKeys.editorTextFocus,
							),
							contextMenuOpts: { group: "debug", order: 1.5 },
						});
					}
					async run(G, K) {
						const J = G.get(y.$75),
							W = G.get(g.$Xxb),
							X = G.get(o.$Vl),
							Y = J.getViewModel().focusedSession,
							ie = J.getViewModel().focusedStackFrame,
							ne = K.getSelection(),
							ee =
								ne?.getPosition() ||
								(ie && {
									lineNumber: ie.range.startLineNumber,
									column: ie.range.startColumn,
								});
						if (
							!Y ||
							!ie ||
							!K.hasModel() ||
							!X.extUri.isEqual(K.getModel().uri, ie.source.uri)
						) {
							ee && u.$Szb.get(K)?.showMessage(U, ee);
							return;
						}
						const _ = await Y.stepInTargets(ie.frameId);
						if (!_?.length) {
							u.$Szb.get(K)?.showMessage(U, ee);
							return;
						}
						if (ne) {
							const re = [];
							for (const ae of _)
								ae.line &&
									re.push({
										start: new d.$hL(ae.line, ae.column || 1),
										end: ae.endLine
											? new d.$hL(ae.endLine, ae.endColumn || 1)
											: void 0,
										target: ae,
									});
							re.sort(
								(ae, pe) =>
									pe.start.lineNumber - ae.start.lineNumber ||
									pe.start.column - ae.start.column,
							);
							const le = ne.getPosition(),
								oe =
									re.find(
										(ae) =>
											ae.end &&
											le.isBefore(ae.end) &&
											ae.start.isBeforeOrEqual(le),
									) ||
									re.find(
										(ae) => ae.end === void 0 && ae.start.isBeforeOrEqual(le),
									);
							if (oe) {
								Y.stepIn(ie.thread.threadId, oe.target.id);
								return;
							}
						}
						K.revealLineInCenterIfOutsideViewport(ie.range.startLineNumber);
						const te = K.getScrolledVisiblePosition(ee),
							Q = (0, t.$tgb)(K.getDomNode()),
							Z = Q.left + te.left,
							se = Q.top + te.top + te.height;
						W.showContextMenu({
							getAnchor: () => ({ x: Z, y: se }),
							getActions: () =>
								_.map(
									(re) =>
										new i.$rj(
											`stepIntoTarget:${re.id}`,
											re.label,
											void 0,
											!0,
											() => Y.stepIn(ie.thread.threadId, re.id),
										),
								),
						});
					}
				}
				class F extends E.$itb {
					constructor(G, K) {
						super(K), (this.d = G);
					}
					async run(G, K) {
						const J = G.get(y.$75),
							W = G.get(S.$IY),
							X = G.get(o.$Vl);
						if (K.hasModel()) {
							const Y = K.getModel().uri,
								ie = K.getPosition().lineNumber,
								ne = J.getModel().getBreakpoints({ enabledOnly: !0 });
							let ee = this.d
								? ne
										.filter(
											(_) => X.extUri.isEqual(_.uri, Y) && _.lineNumber > ie,
										)
										.shift()
								: ne
										.filter(
											(_) => X.extUri.isEqual(_.uri, Y) && _.lineNumber < ie,
										)
										.pop();
							if (
								(ee ||
									(ee = this.d
										? ne.filter((_) => _.uri.toString() > Y.toString()).shift()
										: ne.filter((_) => _.uri.toString() < Y.toString()).pop()),
								!ee && ne.length && (ee = this.d ? ne[0] : ne[ne.length - 1]),
								ee)
							)
								return (0, s.$nGc)(ee, !1, !0, !1, J, W);
						}
					}
				}
				class x extends F {
					constructor() {
						super(!0, {
							id: "editor.debug.action.goToNextBreakpoint",
							label: a.localize(5485, null),
							alias: "Debug: Go to Next Breakpoint",
							precondition: y.$y5,
						});
					}
				}
				class H extends F {
					constructor() {
						super(!1, {
							id: "editor.debug.action.goToPreviousBreakpoint",
							label: a.localize(5486, null),
							alias: "Debug: Go to Previous Breakpoint",
							precondition: y.$y5,
						});
					}
				}
				class q extends E.$itb {
					constructor() {
						super({
							id: "editor.debug.action.closeExceptionWidget",
							label: a.localize(5487, null),
							alias: "Close Exception Widget",
							precondition: y.$R5,
							kbOpts: {
								primary: w.KeyCode.Escape,
								weight: p.KeybindingWeight.EditorContrib,
							},
						});
					}
					async run(G, K) {
						K.getContribution(y.$Z5)?.closeExceptionWidget();
					}
				}
				(0, h.$4X)(M),
					(0, h.$4X)(N),
					(0, h.$4X)(T),
					(0, E.$ntb)(P),
					(0, E.$ntb)(k),
					(0, E.$ntb)(L),
					(0, E.$ntb)(D),
					(0, E.$ntb)(A),
					(0, E.$ntb)(z),
					(0, E.$ntb)(R),
					(0, E.$ntb)(O),
					(0, E.$ntb)(B),
					(0, E.$ntb)(x),
					(0, E.$ntb)(H),
					(0, E.$ntb)(q);
			},
		)

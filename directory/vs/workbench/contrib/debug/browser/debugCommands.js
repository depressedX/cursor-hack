import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/browser/ui/list/listWidget.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/list/browser/listService.js';
import '../common/debug.js';
import '../common/debugModel.js';
import '../../extensions/common/extensions.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../platform/actions/common/actions.js';
import '../../../services/editor/common/editorService.js';
import '../../../../editor/common/editorContextKeys.js';
import '../../../../platform/contextkey/common/contextkey.js';
import './breakpointsView.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/contextkey/common/contextkeys.js';
import '../../../common/contextkeys.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../editor/common/services/textResourceConfiguration.js';
import '../../../../platform/clipboard/common/clipboardService.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../common/views.js';
import '../../../services/views/common/viewsService.js';
import '../../../../base/common/objects.js';
import '../../../../base/common/platform.js';
import '../common/debugUtils.js';
import '../../../services/panecomposite/browser/panecomposite.js';
import '../common/loadedScriptsPicker.js';
import './debugSessionPicker.js';
import '../../files/common/files.js';
import '../../chat/common/chatContextKeys.js';
import '../../../../base/common/lifecycle.js';
define(
			de[425],
			he([
				1, 0, 4, 27, 278, 43, 93, 112, 300, 141, 56, 11, 18, 71, 8, 1049, 40,
				179, 100, 31, 125, 121, 10, 63, 60, 89, 82, 12, 396, 142, 3265, 3817,
				220, 207, 3,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*keyCodes*/,
				w /*listWidget*/,
				E /*keybindingsRegistry*/,
				C /*listService*/,
				d /*debug*/,
				m /*debugModel*/,
				r /*extensions*/,
				u /*editorBrowser*/,
				a /*actions*/,
				h /*editorService*/,
				c /*editorContextKeys*/,
				n /*contextkey*/,
				g /*breakpointsView*/,
				p /*notification*/,
				o /*contextkeys*/,
				f /*contextkeys*/,
				b /*commands*/,
				s /*textResourceConfiguration*/,
				l /*clipboardService*/,
				y /*configuration*/,
				$ /*quickInput*/,
				v /*views*/,
				S /*viewsService*/,
				I /*objects*/,
				T /*platform*/,
				P /*debugUtils*/,
				k /*panecomposite*/,
				L /*loadedScriptsPicker*/,
				D /*debugSessionPicker*/,
				M /*files*/,
				N /*chatContextKeys*/,
				A /*lifecycle*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6Hc =
						e.$5Hc =
						e.$4Hc =
						e.$3Hc =
						e.$2Hc =
						e.$1Hc =
						e.$ZHc =
						e.$YHc =
						e.$XHc =
						e.$WHc =
						e.$VHc =
						e.$UHc =
						e.$THc =
						e.$SHc =
						e.$RHc =
						e.$QHc =
						e.$PHc =
						e.$OHc =
						e.$NHc =
						e.$MHc =
						e.$LHc =
						e.$KHc =
						e.$JHc =
						e.$IHc =
						e.$HHc =
						e.$GHc =
						e.$FHc =
						e.$EHc =
						e.$DHc =
						e.$CHc =
						e.$BHc =
						e.$AHc =
						e.$zHc =
						e.$yHc =
						e.$xHc =
						e.$wHc =
						e.$vHc =
						e.$uHc =
						e.$tHc =
						e.$sHc =
						e.$rHc =
						e.$qHc =
						e.$pHc =
						e.$oHc =
						e.$nHc =
						e.$mHc =
						e.$lHc =
						e.$kHc =
						e.$jHc =
						e.$iHc =
						e.$hHc =
						e.$gHc =
						e.$fHc =
						e.$eHc =
						e.$dHc =
						e.$cHc =
						e.$bHc =
						e.$aHc =
						e.$_Gc =
						e.$$Gc =
						e.$0Gc =
						e.$9Gc =
						e.$8Gc =
						e.$7Gc =
						e.$6Gc =
						e.$5Gc =
						e.$4Gc =
						e.$3Gc =
						e.$2Gc =
						e.$1Gc =
						e.$ZGc =
						e.$YGc =
						e.$XGc =
							void 0),
					(t = mt(t)),
					(e.$XGc = "debug.addConfiguration"),
					(e.$YGc = "editor.debug.action.toggleInlineBreakpoint"),
					(e.$ZGc = "debug.copyStackTrace"),
					(e.$1Gc = "workbench.action.debug.reverseContinue"),
					(e.$2Gc = "workbench.action.debug.stepBack"),
					(e.$3Gc = "workbench.action.debug.restart"),
					(e.$4Gc = "workbench.action.debug.terminateThread"),
					(e.$5Gc = "workbench.action.debug.stepOver"),
					(e.$6Gc = "workbench.action.debug.stepInto"),
					(e.$7Gc = "workbench.action.debug.stepIntoTarget"),
					(e.$8Gc = "workbench.action.debug.stepOut"),
					(e.$9Gc = "workbench.action.debug.pause"),
					(e.$0Gc = "workbench.action.debug.disconnect"),
					(e.$$Gc = "workbench.action.debug.disconnectAndSuspend"),
					(e.$_Gc = "workbench.action.debug.stop"),
					(e.$aHc = "workbench.action.debug.restartFrame"),
					(e.$bHc = "workbench.action.debug.continue"),
					(e.$cHc = "workbench.action.debug.recordStepByStep"),
					(e.$dHc = "workbench.action.debug.stopRecording"),
					(e.$eHc = "workbench.debug.action.focusRepl"),
					(e.$fHc = "debug.jumpToCursor"),
					(e.$gHc = "workbench.action.debug.focusProcess"),
					(e.$hHc = "workbench.action.debug.selectandstart"),
					(e.$iHc = "workbench.action.debug.selectDebugConsole"),
					(e.$jHc = "workbench.action.debug.selectDebugSession"),
					(e.$kHc = "workbench.action.debug.configure"),
					(e.$lHc = "workbench.action.debug.start"),
					(e.$mHc = "workbench.action.debug.run"),
					(e.$nHc = "debug.renameWatchExpression"),
					(e.$oHc = "debug.setWatchExpression"),
					(e.$pHc = "debug.removeWatchExpression"),
					(e.$qHc = "workbench.action.debug.nextConsole"),
					(e.$rHc = "workbench.action.debug.prevConsole"),
					(e.$sHc = "workbench.action.debug.showLoadedScripts"),
					(e.$tHc = "workbench.action.debug.callStackTop"),
					(e.$uHc = "workbench.action.debug.callStackBottom"),
					(e.$vHc = "workbench.action.debug.callStackUp"),
					(e.$wHc = "workbench.action.debug.callStackDown"),
					(e.$xHc = "debug.addToWatchExpressions"),
					(e.$yHc = "debug.copyEvaluatePath"),
					(e.$zHc = "workbench.debug.viewlet.action.copyValue"),
					(e.$AHc = t.localize2(5435, "Debug")),
					(e.$BHc = t.localize2(5436, "Restart")),
					(e.$CHc = t.localize2(5437, "Step Over")),
					(e.$DHc = t.localize2(5438, "Step Into")),
					(e.$EHc = t.localize2(5439, "Record Step By Step")),
					(e.$FHc = t.localize2(5440, "Stop Recording")),
					(e.$GHc = t.localize2(5441, "Step Into Target")),
					(e.$HHc = t.localize2(5442, "Step Out")),
					(e.$IHc = t.localize2(5443, "Pause")),
					(e.$JHc = t.localize2(5444, "Disconnect")),
					(e.$KHc = t.localize2(5445, "Disconnect and Suspend")),
					(e.$LHc = t.localize2(5446, "Stop")),
					(e.$MHc = t.localize2(5447, "Continue")),
					(e.$NHc = t.localize2(5448, "Focus Session")),
					(e.$OHc = t.localize2(5449, "Select and Start Debugging")),
					(e.$PHc = t.localize(5429, null, "launch.json")),
					(e.$QHc = t.localize2(5450, "Start Debugging")),
					(e.$RHc = t.localize2(5451, "Start Without Debugging")),
					(e.$SHc = t.localize2(5452, "Focus Next Debug Console")),
					(e.$THc = t.localize2(5453, "Focus Previous Debug Console")),
					(e.$UHc = t.localize2(5454, "Open Loaded Script...")),
					(e.$VHc = t.localize2(5455, "Navigate to Top of Call Stack")),
					(e.$WHc = t.localize2(5456, "Navigate to Bottom of Call Stack")),
					(e.$XHc = t.localize2(5457, "Navigate Up Call Stack")),
					(e.$YHc = t.localize2(5458, "Navigate Down Call Stack")),
					(e.$ZHc = t.localize2(5459, "Copy as Expression")),
					(e.$1Hc = t.localize2(5460, "Copy Value")),
					(e.$2Hc = t.localize2(5461, "Add to Watch")),
					(e.$3Hc = t.localize2(5462, "Select Debug Console")),
					(e.$4Hc = t.localize2(5463, "Select Debug Session")),
					(e.$5Hc = "debug "),
					(e.$6Hc = "debug consoles ");
				function R(W) {
					return (
						W && typeof W.sessionId == "string" && typeof W.threadId == "string"
					);
				}
				async function O(W, X, Y) {
					const ie = W.get(d.$75);
					let ne;
					if (R(X)) {
						const ee = ie.getModel().getSession(X.sessionId);
						ee &&
							(ne = ee.getAllThreads().find((_) => _.getId() === X.threadId));
					} else if (z(X)) {
						const ee = ie.getModel().getSession(X.sessionId);
						if (ee) {
							const _ = ee.getAllThreads();
							ne = _.length > 0 ? _[0] : void 0;
						}
					}
					if (!ne && ((ne = ie.getViewModel().focusedThread), !ne)) {
						const ee = ie.getViewModel().focusedSession,
							_ = ee ? ee.getAllThreads() : void 0;
						ne = _ && _.length ? _[0] : void 0;
					}
					ne && (await Y(ne));
				}
				function B(W) {
					return (
						W &&
						typeof W.sessionId == "string" &&
						typeof W.threadId == "string" &&
						typeof W.frameId == "string"
					);
				}
				function U(W, X) {
					if (B(X)) {
						const Y = W.getModel().getSession(X.sessionId);
						if (Y) {
							const ie = Y.getAllThreads().find(
								(ne) => ne.getId() === X.threadId,
							);
							if (ie)
								return ie.getCallStack().find((ne) => ne.getId() === X.frameId);
						}
					} else return W.getViewModel().focusedStackFrame;
				}
				function z(W) {
					return W && typeof W.sessionId == "string";
				}
				async function F(W, X) {
					const Y = W.get(d.$75),
						ie = W.get(S.$HMb),
						ne = Y.getModel()
							.getSessions(!0)
							.filter((te) => te.hasSeparateRepl());
					let ee = Y.getViewModel().focusedSession,
						_ = 0;
					if (ne.length > 0 && ee) {
						for (; ee && !ee.hasSeparateRepl(); ) ee = ee.parentSession;
						if (ee) {
							const te = ne.indexOf(ee);
							X
								? (_ = te === ne.length - 1 ? 0 : te + 1)
								: (_ = te === 0 ? ne.length - 1 : te - 1);
						}
					}
					await Y.focusStackFrame(void 0, void 0, ne[_], { explicit: !0 }),
						ie.isViewVisible(d.$Y4) || (await ie.openView(d.$Y4, !0));
				}
				async function x(W, X) {
					const Y = W.getViewModel().focusedStackFrame;
					if (Y) {
						let ie = Y.thread.getCallStack(),
							ne = ie.findIndex((_) => _.frameId === Y.frameId),
							ee;
						if (X) {
							if (ne >= ie.length - 1)
								if (Y.thread.reachedEndOfCallStack) {
									q(W);
									return;
								} else
									await W.getModel().fetchCallstack(Y.thread, 20),
										(ie = Y.thread.getCallStack()),
										(ne = ie.findIndex((_) => _.frameId === Y.frameId));
							ee = V(!0, ie, ne);
						} else {
							if (ne <= 0) {
								H(W);
								return;
							}
							ee = V(!1, ie, ne);
						}
						ee && W.focusStackFrame(ee, void 0, void 0, { preserveFocus: !1 });
					}
				}
				async function H(W) {
					const X = W.getViewModel().focusedThread;
					if (X) {
						await W.getModel().fetchCallstack(X);
						const Y = X.getCallStack();
						if (Y.length > 0) {
							const ie = V(!1, Y, 0);
							ie &&
								W.focusStackFrame(ie, void 0, void 0, { preserveFocus: !1 });
						}
					}
				}
				function q(W) {
					const X = W.getViewModel().focusedThread;
					X &&
						W.focusStackFrame(X.getTopStackFrame(), void 0, void 0, {
							preserveFocus: !1,
						});
				}
				function V(W, X, Y) {
					Y >= X.length ? (Y = X.length - 1) : Y < 0 && (Y = 0);
					let ie = Y,
						ne;
					do
						if (
							(W
								? ie === X.length - 1
									? (ie = 0)
									: ie++
								: ie === 0
									? (ie = X.length - 1)
									: ie--,
							(ne = X[ie]),
							!(0, d.$65)(ne))
						)
							return ne;
					while (ie !== Y);
				}
				b.$fk.registerCommand({
					id: e.$ZGc,
					handler: async (W, X, Y) => {
						const ie = W.get(s.$YO),
							ne = W.get(l.$Vxb),
							ee = W.get(d.$75),
							_ = U(ee, Y);
						if (_) {
							const te = ie.getEOL(_.source.uri);
							await ne.writeText(
								_.thread
									.getCallStack()
									.map((Q) => Q.toString())
									.join(te),
							);
						}
					},
				}),
					b.$fk.registerCommand({
						id: e.$1Gc,
						handler: async (W, X, Y) => {
							await O(W, Y, (ie) => ie.reverseContinue());
						},
					}),
					b.$fk.registerCommand({
						id: e.$2Gc,
						handler: async (W, X, Y) => {
							const ie = W.get(n.$6j);
							d.$V5.getValue(ie)
								? await O(W, Y, (ne) => ne.stepBack("instruction"))
								: await O(W, Y, (ne) => ne.stepBack());
						},
					}),
					b.$fk.registerCommand({
						id: e.$4Gc,
						handler: async (W, X, Y) => {
							await O(W, Y, (ie) => ie.terminate());
						},
					}),
					b.$fk.registerCommand({
						id: e.$fHc,
						handler: async (W) => {
							const Y = W.get(d.$75).getViewModel().focusedStackFrame,
								ne = W.get(h.$IY).activeTextEditorControl,
								ee = W.get(p.$4N),
								_ = W.get($.$DJ);
							if (Y && (0, u.$0sb)(ne) && ne.hasModel()) {
								const te = ne.getPosition(),
									Q = ne.getModel().uri,
									Z = Y.thread.session.getSourceForUri(Q);
								if (Z) {
									const re = (
										await Y.thread.session.gotoTargets(
											Z.raw,
											te.lineNumber,
											te.column,
										)
									)?.body.targets;
									if (re && re.length) {
										let le = re[0].id;
										if (re.length > 1) {
											const oe = re.map((pe) => ({
													label: pe.label,
													_id: pe.id,
												})),
												ae = await _.pick(oe, {
													placeHolder: t.localize(5430, null),
												});
											if (!ae) return;
											le = ae._id;
										}
										return await Y.thread.session
											.goto(Y.thread.threadId, le)
											.catch((oe) => ee.warn(oe));
									}
								}
							}
							return ee.warn(t.localize(5431, null));
						},
					}),
					b.$fk.registerCommand({
						id: e.$tHc,
						handler: async (W, X, Y) => {
							const ie = W.get(d.$75);
							q(ie);
						},
					}),
					b.$fk.registerCommand({
						id: e.$uHc,
						handler: async (W, X, Y) => {
							const ie = W.get(d.$75);
							await H(ie);
						},
					}),
					b.$fk.registerCommand({
						id: e.$vHc,
						handler: async (W, X, Y) => {
							const ie = W.get(d.$75);
							x(ie, !1);
						},
					}),
					b.$fk.registerCommand({
						id: e.$wHc,
						handler: async (W, X, Y) => {
							const ie = W.get(d.$75);
							x(ie, !0);
						},
					}),
					a.$ZX.appendMenuItem(a.$XX.EditorContext, {
						command: {
							id: e.$fHc,
							title: t.localize(5432, null),
							category: e.$AHc,
						},
						when: n.$Kj.and(d.$v5, c.EditorContextKeys.editorTextFocus),
						group: "debug",
						order: 3,
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: e.$qHc,
						weight: E.KeybindingWeight.WorkbenchContrib + 1,
						when: d.$84,
						primary: i.KeyMod.CtrlCmd | i.KeyCode.PageDown,
						mac: {
							primary:
								i.KeyMod.Shift | i.KeyMod.CtrlCmd | i.KeyCode.BracketRight,
						},
						handler: async (W, X, Y) => {
							F(W, !0);
						},
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: e.$rHc,
						weight: E.KeybindingWeight.WorkbenchContrib + 1,
						when: d.$84,
						primary: i.KeyMod.CtrlCmd | i.KeyCode.PageUp,
						mac: {
							primary:
								i.KeyMod.Shift | i.KeyMod.CtrlCmd | i.KeyCode.BracketLeft,
						},
						handler: async (W, X, Y) => {
							F(W, !1);
						},
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: e.$3Gc,
						weight: E.KeybindingWeight.WorkbenchContrib,
						primary: i.KeyMod.Shift | i.KeyMod.CtrlCmd | i.KeyCode.F5,
						when: d.$74,
						handler: async (W, X, Y) => {
							const ie = W.get(d.$75),
								ne = W.get(y.$gj);
							let ee;
							if (
								(z(Y)
									? (ee = ie.getModel().getSession(Y.sessionId))
									: (ee = ie.getViewModel().focusedSession),
								ee)
							) {
								const _ = ne.getValue("debug").showSubSessionsInToolBar;
								for (; !_ && ee.lifecycleManagedByParent && ee.parentSession; )
									ee = ee.parentSession;
								ee.removeReplExpressions(), await ie.restartSession(ee);
							} else {
								const { launch: _, name: te } =
									ie.getConfigurationManager().selectedConfiguration;
								await ie.startDebugging(_, te, {
									noDebug: !1,
									startedByUser: !0,
								});
							}
						},
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: e.$5Gc,
						weight: E.KeybindingWeight.WorkbenchContrib,
						primary: i.KeyCode.F10,
						when: d.$24.isEqualTo("stopped"),
						handler: async (W, X, Y) => {
							const ie = W.get(n.$6j);
							d.$V5.getValue(ie)
								? await O(W, Y, (ne) => ne.next("instruction"))
								: await O(W, Y, (ne) => ne.next());
						},
					}),
					b.$fk.registerCommand({
						id: e.$cHc,
						handler: async (W, X, Y) => {
							await O(W, Y, (ie) => ie.recordStepByStep(W.get(d.$75)));
						},
					}),
					b.$fk.registerCommand({
						id: e.$dHc,
						handler: async (W, X, Y) => {
							W.get(d.$75).setIsRecording(!1);
						},
					});
				const G = T.$r && T.$l ? i.KeyMod.Alt | i.KeyCode.F11 : i.KeyCode.F11;
				E.$TX.registerCommandAndKeybindingRule({
					id: e.$6Gc,
					weight: E.KeybindingWeight.WorkbenchContrib + 10,
					primary: G,
					when: d.$24.notEqualsTo("inactive"),
					handler: async (W, X, Y) => {
						const ie = W.get(n.$6j);
						d.$V5.getValue(ie)
							? await O(W, Y, (ne) => ne.stepIn("instruction"))
							: await O(W, Y, (ne) => ne.stepIn());
					},
				}),
					E.$TX.registerCommandAndKeybindingRule({
						id: e.$8Gc,
						weight: E.KeybindingWeight.WorkbenchContrib,
						primary: i.KeyMod.Shift | i.KeyCode.F11,
						when: d.$24.isEqualTo("stopped"),
						handler: async (W, X, Y) => {
							const ie = W.get(n.$6j);
							d.$V5.getValue(ie)
								? await O(W, Y, (ne) => ne.stepOut("instruction"))
								: await O(W, Y, (ne) => ne.stepOut());
						},
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: e.$9Gc,
						weight: E.KeybindingWeight.WorkbenchContrib + 2,
						primary: i.KeyCode.F6,
						when: d.$24.isEqualTo("running"),
						handler: async (W, X, Y) => {
							await O(W, Y, (ie) => ie.pause());
						},
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: e.$7Gc,
						primary: G | i.KeyMod.CtrlCmd,
						when: n.$Kj.and(d.$w5, d.$74, d.$24.isEqualTo("stopped")),
						weight: E.KeybindingWeight.WorkbenchContrib,
						handler: async (W, X, Y) => {
							const ie = W.get($.$DJ),
								ne = W.get(d.$75),
								ee = ne.getViewModel().focusedSession,
								_ = ne.getViewModel().focusedStackFrame;
							if (!_ || !ee) return;
							const te = await W.get(h.$IY).openEditor({
								resource: _.source.uri,
								options: { revealIfOpened: !0 },
							});
							let Q;
							if (te) {
								const re = te?.getControl();
								(0, u.$0sb)(re) && (Q = re);
							}
							const Z = new A.$Zc(),
								se = Z.add(ie.createQuickPick());
							(se.busy = !0),
								se.show(),
								Z.add(
									se.onDidChangeActive(([re]) => {
										Q &&
											re &&
											re.target.line !== void 0 &&
											(Q.revealLineInCenterIfOutsideViewport(re.target.line),
											Q.setSelection({
												startLineNumber: re.target.line,
												startColumn: re.target.column || 1,
												endLineNumber: re.target.endLine || re.target.line,
												endColumn: re.target.endColumn || re.target.column || 1,
											}));
									}),
								),
								Z.add(
									se.onDidAccept(() => {
										se.activeItems.length &&
											ee.stepIn(_.thread.threadId, se.activeItems[0].target.id);
									}),
								),
								Z.add(se.onDidHide(() => Z.dispose())),
								ee.stepInTargets(_.frameId).then((re) => {
									(se.busy = !1),
										re?.length
											? (se.items = re?.map((le) => ({
													target: le,
													label: le.label,
												})))
											: (se.placeholder = t.localize(5433, null));
								});
						},
					});
				async function K(W, X, Y, ie, ne) {
					const ee = W.get(d.$75);
					let _;
					z(Y)
						? (_ = ee.getModel().getSession(Y.sessionId))
						: (_ = ee.getViewModel().focusedSession);
					const Q = W.get(y.$gj).getValue("debug").showSubSessionsInToolBar;
					for (; !Q && _ && _.lifecycleManagedByParent && _.parentSession; )
						_ = _.parentSession;
					await ee.stopSession(_, ie, ne);
				}
				E.$TX.registerCommandAndKeybindingRule({
					id: e.$0Gc,
					weight: E.KeybindingWeight.WorkbenchContrib,
					primary: i.KeyMod.Shift | i.KeyCode.F5,
					when: n.$Kj.and(d.$q5, d.$74),
					handler: (W, X, Y) => K(W, X, Y, !0),
				}),
					b.$fk.registerCommand({
						id: e.$$Gc,
						handler: (W, X, Y) => K(W, X, Y, !0, !0),
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: e.$_Gc,
						weight: E.KeybindingWeight.WorkbenchContrib,
						primary: i.KeyMod.Shift | i.KeyCode.F5,
						when: n.$Kj.and(d.$q5.toNegated(), d.$74),
						handler: (W, X, Y) => K(W, X, Y, !1),
					}),
					b.$fk.registerCommand({
						id: e.$aHc,
						handler: async (W, X, Y) => {
							const ie = W.get(d.$75),
								ne = W.get(p.$4N),
								ee = U(ie, Y);
							if (ee)
								try {
									await ee.restart();
								} catch (_) {
									ne.error(_);
								}
						},
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: e.$bHc,
						weight: E.KeybindingWeight.WorkbenchContrib + 10,
						primary: i.KeyCode.F5,
						when: d.$24.isEqualTo("stopped"),
						handler: async (W, X, Y) => {
							await O(W, Y, (ie) => ie.continue());
						},
					}),
					b.$fk.registerCommand({
						id: e.$sHc,
						handler: async (W) => {
							await (0, L.$VGc)(W);
						},
					}),
					b.$fk.registerCommand({
						id: e.$eHc,
						handler: async (W) => {
							await W.get(S.$HMb).openView(d.$Y4, !0);
						},
					}),
					b.$fk.registerCommand({
						id: "debug.startFromConfig",
						handler: async (W, X) => {
							await W.get(d.$75).startDebugging(void 0, X);
						},
					}),
					b.$fk.registerCommand({
						id: e.$gHc,
						handler: async (W, X) => {
							const Y = W.get(d.$75),
								ie = W.get(h.$IY),
								ne = Y.getModel()
									.getSessions()
									.find(
										(_) => _.parentSession === X && _.state === d.State.Stopped,
									);
							ne && X.state !== d.State.Stopped && (X = ne),
								await Y.focusStackFrame(void 0, void 0, X, { explicit: !0 });
							const ee = Y.getViewModel().focusedStackFrame;
							ee && (await ee.openInEditor(ie, !0));
						},
					}),
					b.$fk.registerCommand({
						id: e.$hHc,
						handler: async (W, X, Y) => {
							const ie = W.get($.$DJ),
								ne = W.get(d.$75);
							if (X) {
								const ee = ne.getConfigurationManager(),
									_ = await ee.getDynamicProviders();
								for (const te of _)
									if (te.type === X) {
										const Q = await te.pick();
										if (Q) {
											await ee.selectConfiguration(
												Q.launch,
												Q.config.name,
												Q.config,
												{ type: te.type },
											),
												ne.startDebugging(Q.launch, Q.config, {
													noDebug: Y?.noDebug,
													startedByUser: !0,
												});
											return;
										}
									}
							}
							ie.quickAccess.show(e.$5Hc);
						},
					}),
					b.$fk.registerCommand({
						id: e.$iHc,
						handler: async (W) => {
							W.get($.$DJ).quickAccess.show(e.$6Hc);
						},
					}),
					b.$fk.registerCommand({
						id: e.$jHc,
						handler: async (W) => {
							(0, D.$WGc)(W, e.$hHc);
						},
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: e.$lHc,
						weight: E.KeybindingWeight.WorkbenchContrib,
						primary: i.KeyCode.F5,
						when: n.$Kj.and(d.$y5, d.$24.isEqualTo("inactive")),
						handler: async (W, X) => {
							const Y = W.get(d.$75);
							await (0, P.$w3)(W.get(y.$gj), W.get(h.$IY));
							const {
									launch: ie,
									name: ne,
									getConfig: ee,
								} = Y.getConfigurationManager().selectedConfiguration,
								_ = await ee(),
								te = _ ? Object.assign((0, I.$vo)(_), X?.config) : ne;
							await Y.startDebugging(
								ie,
								te,
								{ noDebug: X?.noDebug, startedByUser: !0 },
								!1,
							);
						},
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: e.$mHc,
						weight: E.KeybindingWeight.WorkbenchContrib,
						primary: i.KeyMod.CtrlCmd | i.KeyCode.F5,
						mac: { primary: i.KeyMod.WinCtrl | i.KeyCode.F5 },
						when: n.$Kj.and(
							d.$y5,
							d.$24.notEqualsTo((0, d.$45)(d.State.Initializing)),
						),
						handler: async (W) => {
							await W.get(b.$ek).executeCommand(e.$lHc, { noDebug: !0 });
						},
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: "debug.toggleBreakpoint",
						weight: E.KeybindingWeight.WorkbenchContrib + 5,
						when: n.$Kj.and(d.$$4, o.$bMb.toNegated()),
						primary: i.KeyCode.Space,
						handler: (W) => {
							const X = W.get(C.$fMb),
								Y = W.get(d.$75),
								ie = X.lastFocusedList;
							if (ie instanceof w.List) {
								const ne = ie.getFocusedElements();
								ne &&
									ne.length &&
									Y.enableOrDisableBreakpoints(!ne[0].enabled, ne[0]);
							}
						},
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: "debug.enableOrDisableBreakpoint",
						weight: E.KeybindingWeight.WorkbenchContrib,
						primary: void 0,
						when: c.EditorContextKeys.editorTextFocus,
						handler: (W) => {
							const X = W.get(d.$75),
								ie = W.get(h.$IY).activeTextEditorControl;
							if ((0, u.$0sb)(ie)) {
								const ne = ie.getModel();
								if (ne) {
									const ee = ie.getPosition();
									if (ee) {
										const _ = X.getModel().getBreakpoints({
											uri: ne.uri,
											lineNumber: ee.lineNumber,
										});
										_.length &&
											X.enableOrDisableBreakpoints(!_[0].enabled, _[0]);
									}
								}
							}
						},
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: e.$nHc,
						weight: E.KeybindingWeight.WorkbenchContrib + 5,
						when: d.$_4,
						primary: i.KeyCode.F2,
						mac: { primary: i.KeyCode.Enter },
						handler: (W, X) => {
							const Y = W.get(d.$75);
							if (!(X instanceof m.$J3)) {
								const ne = W.get(C.$fMb).lastFocusedList;
								if (ne) {
									const ee = ne.getFocus();
									Array.isArray(ee) && ee[0] instanceof m.$J3 && (X = ee[0]);
								}
							}
							X instanceof m.$J3 &&
								Y.getViewModel().setSelectedExpression(X, !1);
						},
					}),
					b.$fk.registerCommand({
						id: e.$oHc,
						handler: async (W, X) => {
							const Y = W.get(d.$75);
							(X instanceof m.$J3 || X instanceof m.$K3) &&
								Y.getViewModel().setSelectedExpression(X, !0);
						},
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: "debug.setVariable",
						weight: E.KeybindingWeight.WorkbenchContrib + 5,
						when: d.$b5,
						primary: i.KeyCode.F2,
						mac: { primary: i.KeyCode.Enter },
						handler: (W) => {
							const X = W.get(C.$fMb),
								Y = W.get(d.$75),
								ie = X.lastFocusedList;
							if (ie) {
								const ne = ie.getFocus();
								Array.isArray(ne) &&
									ne[0] instanceof m.$K3 &&
									Y.getViewModel().setSelectedExpression(ne[0], !1);
							}
						},
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: e.$pHc,
						weight: E.KeybindingWeight.WorkbenchContrib,
						when: n.$Kj.and(d.$_4, d.$c5.toNegated()),
						primary: i.KeyCode.Delete,
						mac: { primary: i.KeyMod.CtrlCmd | i.KeyCode.Backspace },
						handler: (W, X) => {
							const Y = W.get(d.$75);
							if (X instanceof m.$J3) {
								Y.removeWatchExpressions(X.getId());
								return;
							}
							const ne = W.get(C.$fMb).lastFocusedList;
							if (ne) {
								let ee = ne.getFocus();
								if (Array.isArray(ee) && ee[0] instanceof m.$J3) {
									const _ = ne.getSelection();
									_ && _.indexOf(ee[0]) >= 0 && (ee = _),
										ee.forEach((te) => Y.removeWatchExpressions(te.getId()));
								}
							}
						},
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: "debug.removeBreakpoint",
						weight: E.KeybindingWeight.WorkbenchContrib,
						when: n.$Kj.and(d.$$4, d.$d5.toNegated()),
						primary: i.KeyCode.Delete,
						mac: { primary: i.KeyMod.CtrlCmd | i.KeyCode.Backspace },
						handler: (W) => {
							const X = W.get(C.$fMb),
								Y = W.get(d.$75),
								ie = X.lastFocusedList;
							if (ie instanceof w.List) {
								const ne = ie.getFocusedElements(),
									ee = ne.length ? ne[0] : void 0;
								ee instanceof m.$T3
									? Y.removeBreakpoints(ee.getId())
									: ee instanceof m.$U3
										? Y.removeFunctionBreakpoints(ee.getId())
										: ee instanceof m.$V3 &&
											Y.removeDataBreakpoints(ee.getId());
							}
						},
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: "debug.installAdditionalDebuggers",
						weight: E.KeybindingWeight.WorkbenchContrib,
						when: void 0,
						primary: void 0,
						handler: async (W, X) => {
							const ie = (
								await W.get(k.$6Sb).openPaneComposite(
									r.$LQb,
									v.ViewContainerLocation.Sidebar,
									!0,
								)
							)?.getViewPaneContainer();
							let ne = "@category:debuggers";
							typeof X == "string" && (ne += ` ${X}`),
								ie.search(ne),
								ie.focus();
						},
					}),
					(0, a.$4X)(
						class extends a.$3X {
							constructor() {
								super({
									id: e.$XGc,
									title: t.localize2(5464, "Add Configuration..."),
									category: e.$AHc,
									f1: !0,
									menu: {
										id: a.$XX.EditorContent,
										when: n.$Kj.and(
											n.$Kj.regex(
												f.$BQb.Path.key,
												/\.vscode[/\\]launch\.json$/,
											),
											f.$TPb.isEqualTo(M.$PUb),
										),
									},
								});
							}
							async run(X, Y) {
								const ie = X.get(d.$75).getConfigurationManager(),
									ne =
										ie.getLaunches().find((ee) => ee.uri.toString() === Y) ||
										ie.selectedConfiguration.launch;
								if (ne) {
									const { editor: ee, created: _ } = await ne.openConfigFile({
										preserveFocus: !1,
									});
									if (ee && !_) {
										const te = ee.getControl();
										te &&
											(await te
												.getContribution(d.$Z5)
												?.addLaunchConfiguration());
									}
								}
							}
						},
					);
				const J = (W) => {
					const X = W.get(d.$75),
						ie = W.get(h.$IY).activeTextEditorControl;
					if ((0, u.$0sb)(ie)) {
						const ne = ie.getPosition();
						if (ne && ie.hasModel() && X.canSetBreakpointsIn(ie.getModel())) {
							const ee = ie.getModel().uri;
							X.getModel()
								.getBreakpoints({ lineNumber: ne.lineNumber, uri: ee })
								.some(
									(te) =>
										te.sessionAgnosticData.column === ne.column ||
										(!te.column && ne.column <= 1),
								) ||
								X.addBreakpoints(ee, [
									{
										lineNumber: ne.lineNumber,
										column: ne.column > 1 ? ne.column : void 0,
									},
								]);
						}
					}
				};
				E.$TX.registerCommandAndKeybindingRule({
					weight: E.KeybindingWeight.WorkbenchContrib,
					primary: i.KeyMod.Shift | i.KeyCode.F9,
					when: c.EditorContextKeys.editorTextFocus,
					id: e.$YGc,
					handler: J,
				}),
					a.$ZX.appendMenuItem(a.$XX.EditorContext, {
						command: {
							id: e.$YGc,
							title: t.localize(5434, null),
							category: e.$AHc,
						},
						when: n.$Kj.and(
							d.$74,
							f.$uQb.toNegated(),
							c.EditorContextKeys.editorTextFocus,
							N.$41.toNegated(),
						),
						group: "debug",
						order: 1,
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: "debug.openBreakpointToSide",
						weight: E.KeybindingWeight.WorkbenchContrib,
						when: d.$$4,
						primary: i.KeyMod.CtrlCmd | i.KeyCode.Enter,
						secondary: [i.KeyMod.Alt | i.KeyCode.Enter],
						handler: (W) => {
							const Y = W.get(C.$fMb).lastFocusedList;
							if (Y instanceof w.List) {
								const ie = Y.getFocusedElements();
								if (ie.length && ie[0] instanceof m.$T3)
									return (0, g.$nGc)(
										ie[0],
										!0,
										!1,
										!0,
										W.get(d.$75),
										W.get(h.$IY),
									);
							}
						},
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: "debug.openView",
						weight: E.KeybindingWeight.WorkbenchContrib,
						when: d.$y5.toNegated(),
						primary: i.KeyCode.F5,
						secondary: [i.KeyMod.CtrlCmd | i.KeyCode.F5],
						handler: async (W) => {
							await W.get(k.$6Sb).openPaneComposite(
								d.$Q4,
								v.ViewContainerLocation.Sidebar,
								!0,
							);
						},
					});
			},
		)

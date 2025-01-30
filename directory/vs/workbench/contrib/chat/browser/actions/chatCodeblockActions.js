import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/cancellation.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/keyCodes.js';
import '../../../../../base/common/resources.js';
import '../../../../../editor/browser/editorBrowser.js';
import '../../../../../editor/browser/services/bulkEditService.js';
import '../../../../../editor/browser/services/codeEditorService.js';
import '../../../../../editor/common/core/range.js';
import '../../../../../editor/common/editorContextKeys.js';
import '../../../../../editor/common/languages/language.js';
import '../../../../../editor/common/services/languageFeatures.js';
import '../../../../../editor/contrib/clipboard/browser/clipboard.js';
import '../../../../../nls.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/clipboard/common/clipboardService.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../../platform/notification/common/notification.js';
import '../../../../../platform/progress/common/progress.js';
import '../../../../../platform/terminal/common/terminal.js';
import '../../../accessibility/browser/accessibilityConfiguration.js';
import './chatActions.js';
import '../chat.js';
import '../codeBlockPart.js';
import '../../common/chatContextKeys.js';
import '../../common/chatService.js';
import '../../common/chatViewModel.js';
import '../../../notebook/browser/controller/cellOperations.js';
import '../../../notebook/common/notebookCommon.js';
import '../../../terminal/browser/terminal.js';
import '../../../../services/editor/common/editorService.js';
import '../../../../services/textfile/common/textfiles.js';
import '../../../../../base/common/strings.js';
import '../../../../../base/common/charCode.js';
import '../../../inlineChat/browser/inlineChatController.js';
import '../../../../../base/common/arrays.js';
import '../../../../../base/common/async.js';
define(
			de[4082],
			he([
				1, 0, 33, 14, 27, 19, 56, 199, 65, 17, 71, 61, 69, 787, 4, 11, 121, 8,
				5, 43, 40, 84, 117, 130, 402, 208, 845, 207, 218, 283, 624, 70, 107, 18,
				85, 37, 120, 427, 24, 15,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*cancellation*/,
				i /*codicons*/,
				w /*keyCodes*/,
				E /*resources*/,
				C /*editorBrowser*/,
				d /*bulkEditService*/,
				m /*codeEditorService*/,
				r /*range*/,
				u /*editorContextKeys*/,
				a /*language*/,
				h /*languageFeatures*/,
				c /*clipboard*/,
				n /*nls*/,
				g /*actions*/,
				p /*clipboardService*/,
				o /*contextkey*/,
				f /*instantiation*/,
				b /*keybindingsRegistry*/,
				s /*notification*/,
				l /*progress*/,
				y /*terminal*/,
				$ /*accessibilityConfiguration*/,
				v /*chatActions*/,
				S /*chat*/,
				I /*codeBlockPart*/,
				T /*chatContextKeys*/,
				P /*chatService*/,
				k /*chatViewModel*/,
				L /*cellOperations*/,
				D /*notebookCommon*/,
				M /*terminal*/,
				N /*editorService*/,
				A /*textfiles*/,
				R /*strings*/,
				O /*charCode*/,
				B /*inlineChatController*/,
				U /*arrays*/,
				z /*async*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$AIc = F),
					(e.$BIc = x),
					(e.$CIc = W),
					(e.$DIc = Y),
					(R = mt(R));
				function F(ie) {
					return (
						typeof ie == "object" &&
						ie !== null &&
						"code" in ie &&
						"element" in ie
					);
				}
				function x(ie) {
					return typeof ie == "object" && ie !== null && "element" in ie;
				}
				function H(ie) {
					return (
						(0, k.$$Tb)(ie.element) &&
						ie.element.errorDetails?.responseIsFiltered
					);
				}
				function q(ie) {
					return (0, k.$$Tb)(ie.element)
						? ie.element.usedContext?.documents
						: void 0;
				}
				class V extends g.$3X {
					run(ne, ...ee) {
						let _ = ee[0];
						if (!F(_)) {
							const te = ne.get(m.$dtb),
								Q = te.getFocusedCodeEditor() || te.getActiveCodeEditor();
							if (!Q || ((_ = X(Q, ne)), !F(_))) return;
						}
						return this.runWithContext(ne, _);
					}
				}
				class G extends V {
					async runWithContext(ne, ee) {
						const _ = ne.get(N.$IY),
							te = ne.get(A.$kZ);
						if (H(ee)) return;
						if (_.activeEditorPane?.getId() === D.$O6)
							return this.a(ne, _.activeEditorPane.getControl(), ee);
						let Q = _.activeTextEditorControl;
						if (
							((0, C.$$sb)(Q) &&
								(Q = Q.getOriginalEditor().hasTextFocus()
									? Q.getOriginalEditor()
									: Q.getModifiedEditor()),
							!(0, C.$0sb)(Q) || !Q.hasModel())
						)
							return;
						const Z = Q.getModel().uri,
							se = te.files.get(Z) ?? te.untitled.get(Z);
						!se || se.isReadonly() || (await this.d(ne, Q, ee));
					}
					async a(ne, ee, _) {
						if (!ee.hasModel() || ee.isReadOnly) return;
						if (ee.activeCodeEditor?.hasTextFocus()) {
							const re = ee.activeCodeEditor;
							if (re.hasModel()) return this.d(ne, re, _);
						}
						const te = ne.get(a.$nM),
							Q = ne.get(P.$J2),
							Z = ee.getFocus(),
							se = Math.max(Z.end - 1, 0);
						(0, L.$M5b)(te, ee, se, D.CellKind.Code, "below", _.code, !0),
							this.g(Q, _);
					}
					async b(ne, ee, _) {
						const te = ee.getModel(),
							Q =
								ee.getSelection() ??
								new r.$iL(te.getLineCount(), 1, te.getLineCount(), 1),
							Z = K(_.code, te, Q.startLineNumber);
						return { edits: [new d.$tzb(te.uri, { range: Q, text: Z })] };
					}
					get c() {
						return !1;
					}
					async d(ne, ee, _) {
						const te = ne.get(d.$rzb),
							Q = ne.get(m.$dtb),
							Z = ne.get(P.$J2),
							se = await this.b(ne, ee, _);
						if ((this.g(Z, _, se), this.c)) {
							if (!(await this.f(Q, se.edits, ee))) {
								await te.apply(se.edits, { showPreview: !0 });
								const le = ee.getModel();
								Q.listCodeEditors()
									.find(
										(oe) => oe.getModel()?.uri.toString() === le.uri.toString(),
									)
									?.focus();
							}
						} else {
							await te.apply(se.edits);
							const re = ee.getModel();
							Q.listCodeEditors()
								.find(
									(le) => le.getModel()?.uri.toString() === re.uri.toString(),
								)
								?.focus();
						}
					}
					async f(ne, ee, _) {
						const te = ee[0];
						if (!d.$tzb.is(te)) return !1;
						const Q = te.resource,
							Z = (0, U.$Lb)(
								ee.map((re) =>
									d.$tzb.is(re) && (0, E.$gh)(Q, re.resource)
										? re.textEdit
										: void 0,
								),
							);
						if (Z.length !== ee.length) return !1;
						const se = await ne.openCodeEditor({ resource: Q }, _);
						if (se) {
							const re = B.$Z1b.get(se);
							if (re) {
								const le = new t.$Ce();
								try {
									return await re.reviewEdits(
										Z[0].range,
										z.$ai.fromArray(Z),
										le.token,
									);
								} finally {
									le.dispose();
								}
							}
						}
						return !1;
					}
					g(ne, ee, _) {
						(0, k.$$Tb)(ee.element) &&
							ne.notifyUserAction({
								agentId: ee.element.agent?.id,
								command: ee.element.slashCommand?.name,
								sessionId: ee.element.sessionId,
								requestId: ee.element.requestId,
								result: ee.element.result,
								action: {
									kind: "insert",
									codeBlockIndex: ee.codeBlockIndex,
									totalCharacters: ee.code.length,
									userAction: this.desc.id,
									codeMapper: _?.codeMapper,
								},
							});
					}
				}
				function K(ie, ne, ee) {
					const _ = R.$zf(ie);
					if (_.length === 0) return ie;
					const te = ne.getFormattingOptions(),
						Q = J(ne.getLineContent(ee), te.tabSize).level,
						Z = _.map((le) => J(le, te.tabSize)),
						se = Z.reduce(
							(le, oe, ae) =>
								oe.length !== _[ae].length ? Math.min(oe.level, le) : le,
							Number.MAX_VALUE,
						);
					if (se === Number.MAX_VALUE || se === Q) return ie;
					const re = [];
					for (let le = 0; le < _.length; le++) {
						const { level: oe, length: ae } = Z[le],
							pe = Math.max(0, Q + oe - se),
							$e = te.insertSpaces
								? " ".repeat(te.tabSize * pe)
								: "	".repeat(pe);
						re.push($e + _[le].substring(ae));
					}
					return re.join(`
`);
				}
				function J(ie, ne) {
					let ee = 0,
						_ = 0,
						te = 0,
						Q = 0;
					const Z = ie.length;
					for (; te < Z; ) {
						const se = ie.charCodeAt(te);
						if (se === O.CharCode.Space)
							ee++, ee === ne && (_++, (ee = 0), (Q = te + 1));
						else if (se === O.CharCode.Tab) _++, (ee = 0), (Q = te + 1);
						else break;
						te++;
					}
					return { level: _, length: Q };
				}
				function W() {
					(0, g.$4X)(
						class extends g.$3X {
							constructor() {
								super({
									id: "workbench.action.chat.copyCodeBlock",
									title: (0, n.localize2)(4577, "Copy"),
									f1: !1,
									category: v.$3Yb,
									icon: i.$ak.copy,
									menu: {
										id: g.$XX.ChatCodeBlock,
										group: "navigation",
										order: 30,
									},
								});
							}
							run(_, ...te) {
								const Q = te[0];
								if (!F(Q) || H(Q)) return;
								_.get(p.$Vxb).writeText(Q.code),
									(0, k.$$Tb)(Q.element) &&
										_.get(P.$J2).notifyUserAction({
											agentId: Q.element.agent?.id,
											command: Q.element.slashCommand?.name,
											sessionId: Q.element.sessionId,
											requestId: Q.element.requestId,
											result: Q.element.result,
											action: {
												kind: "copy",
												codeBlockIndex: Q.codeBlockIndex,
												copyKind: P.ChatCopyKind.Toolbar,
												copiedCharacters: Q.code.length,
												totalCharacters: Q.code.length,
												copiedText: Q.code,
											},
										});
							}
						},
					),
						c.$BAb?.addImplementation(5e4, "chat-codeblock", (ee) => {
							const _ = ee.get(m.$dtb).getFocusedCodeEditor();
							if (!_) return !1;
							const te = _.getModel();
							if (!te) return !1;
							const Q = X(_, ee);
							if (!Q) return !1;
							const Z =
									_.getSelections()?.length === 1 &&
									_.getSelection()?.isEmpty(),
								se = Z
									? te.getValue()
									: (_.getSelections()?.reduce(
											(ae, pe) => ae + te.getValueInRange(pe),
											"",
										) ?? ""),
								re = te.getValueLength(),
								le = ee.get(P.$J2),
								oe = Q.element;
							return (
								oe &&
									le.notifyUserAction({
										agentId: oe.agent?.id,
										command: oe.slashCommand?.name,
										sessionId: oe.sessionId,
										requestId: oe.requestId,
										result: oe.result,
										action: {
											kind: "copy",
											codeBlockIndex: Q.codeBlockIndex,
											copyKind: P.ChatCopyKind.Action,
											copiedText: se,
											copiedCharacters: se.length,
											totalCharacters: re,
										},
									}),
								Z ? (ee.get(p.$Vxb).writeText(Q.code), !0) : !1
							);
						}),
						(0, g.$4X)(
							class extends G {
								constructor() {
									super({
										id: "workbench.action.chat.applyInEditor",
										title: (0, n.localize2)(4578, "Apply in Editor"),
										precondition: T.$51,
										f1: !0,
										category: v.$3Yb,
										icon: i.$ak.sparkle,
										menu: {
											id: g.$XX.ChatCodeBlock,
											group: "navigation",
											when: T.$41,
											order: 10,
										},
										keybinding: {
											when: o.$Kj.or(o.$Kj.and(T.$41, T.$31.negate()), $.$TLb),
											primary: w.KeyMod.CtrlCmd | w.KeyCode.Enter,
											mac: { primary: w.KeyMod.WinCtrl | w.KeyCode.Enter },
											weight: b.KeybindingWeight.ExternalExtension + 1,
										},
									});
								}
								async b(_, te, Q) {
									const Z = _.get(l.$8N),
										se = _.get(s.$4N),
										re = te.getModel(),
										le = _.get(h.$k3).mappedEditsProvider.ordered(re);
									if (le.length > 0) {
										const oe = [],
											ae = re.uri,
											pe = re.getVersionId(),
											$e = te.getSelections();
										$e.length > 0 &&
											oe.push([{ uri: ae, version: pe, ranges: $e }]);
										const ye = q(Q);
										ye && oe.push(ye);
										const ue = new t.$Ce();
										try {
											const fe = await Z.withProgress(
												{
													location: l.ProgressLocation.Notification,
													delay: 500,
													sticky: !0,
													cancellable: !0,
												},
												async (me) => {
													for (const ve of le) {
														me.report({
															message: (0, n.localize)(
																4575,
																null,
																ve.displayName,
															),
														});
														const ge = await ve.provideMappedEdits(
															re,
															[Q.code],
															{ documents: oe },
															ue.token,
														);
														if (ge)
															return {
																edits: ge.edits,
																codeMapper: ve.displayName,
															};
													}
												},
												() => ue.cancel(),
											);
											if (fe) return fe;
										} catch (fe) {
											se.notify({
												severity: s.Severity.Error,
												message: (0, n.localize)(4576, null, fe.message),
											});
										} finally {
											ue.dispose();
										}
									}
									return super.b(_, te, Q);
								}
								get c() {
									return !0;
								}
							},
						),
						(0, g.$4X)(
							class extends G {
								constructor() {
									super({
										id: "workbench.action.chat.insertCodeBlock",
										title: (0, n.localize2)(4579, "Insert At Cursor"),
										precondition: T.$51,
										f1: !0,
										category: v.$3Yb,
										icon: i.$ak.insert,
										menu: {
											id: g.$XX.ChatCodeBlock,
											group: "navigation",
											when: T.$41,
											order: 20,
										},
										keybinding: {
											when: o.$Kj.or(o.$Kj.and(T.$41, T.$31.negate()), $.$TLb),
											primary: w.KeyMod.CtrlCmd | w.KeyCode.Enter,
											mac: { primary: w.KeyMod.WinCtrl | w.KeyCode.Enter },
											weight: b.KeybindingWeight.ExternalExtension + 1,
										},
									});
								}
							},
						),
						(0, g.$4X)(
							class extends V {
								constructor() {
									super({
										id: "workbench.action.chat.insertIntoNewFile",
										title: (0, n.localize2)(4580, "Insert into New File"),
										precondition: T.$51,
										f1: !0,
										category: v.$3Yb,
										icon: i.$ak.newFile,
										menu: {
											id: g.$XX.ChatCodeBlock,
											group: "navigation",
											isHiddenByDefault: !0,
											order: 40,
										},
									});
								}
								async runWithContext(_, te) {
									if (H(te)) return;
									const Q = _.get(N.$IY),
										Z = _.get(P.$J2);
									Q.openEditor({
										contents: te.code,
										languageId: te.languageId,
										resource: void 0,
									}),
										(0, k.$$Tb)(te.element) &&
											Z.notifyUserAction({
												agentId: te.element.agent?.id,
												command: te.element.slashCommand?.name,
												sessionId: te.element.sessionId,
												requestId: te.element.requestId,
												result: te.element.result,
												action: {
													kind: "insert",
													codeBlockIndex: te.codeBlockIndex,
													totalCharacters: te.code.length,
													newFile: !0,
													userAction: this.desc.id,
												},
											});
								}
							},
						);
					const ie = [
						"fish",
						"ps1",
						"pwsh",
						"powershell",
						"sh",
						"shellscript",
						"zsh",
					];
					(0, g.$4X)(
						class extends V {
							constructor() {
								super({
									id: "workbench.action.chat.runInTerminal",
									title: (0, n.localize2)(4581, "Insert into Terminal"),
									precondition: T.$51,
									f1: !0,
									category: v.$3Yb,
									icon: i.$ak.terminal,
									menu: [
										{
											id: g.$XX.ChatCodeBlock,
											group: "navigation",
											when: o.$Kj.and(
												T.$41,
												o.$Kj.or(
													...ie.map((_) =>
														o.$Kj.equals(u.EditorContextKeys.languageId.key, _),
													),
												),
											),
										},
										{
											id: g.$XX.ChatCodeBlock,
											group: "navigation",
											isHiddenByDefault: !0,
											when: o.$Kj.and(
												T.$41,
												...ie.map((_) =>
													o.$Kj.notEquals(
														u.EditorContextKeys.languageId.key,
														_,
													),
												),
											),
										},
									],
									keybinding: [
										{
											primary:
												w.KeyMod.CtrlCmd | w.KeyMod.Alt | w.KeyCode.Enter,
											mac: {
												primary:
													w.KeyMod.WinCtrl | w.KeyMod.Alt | w.KeyCode.Enter,
											},
											weight: b.KeybindingWeight.EditorContrib,
											when: o.$Kj.or(T.$41, $.$TLb),
										},
									],
								});
							}
							async runWithContext(_, te) {
								if (H(te)) return;
								const Q = _.get(P.$J2),
									Z = _.get(M.$iIb),
									se = _.get(N.$IY),
									re = _.get(M.$kIb),
									le = _.get(M.$lIb);
								let oe = await Z.getActiveOrCreateInstance();
								if (
									((oe =
										oe.xterm?.isStdinDisabled ||
										oe.shellLaunchConfig.isFeatureTerminal
											? await Z.createTerminal()
											: oe),
									Z.setActiveInstance(oe),
									await oe.focusWhenReady(!0),
									oe.target === y.TerminalLocation.Editor)
								) {
									const pe = se.findEditors(oe.resource);
									re.openEditor(oe, { viewColumn: pe?.[0].groupId });
								} else le.showPanel(!0);
								oe.runCommand(te.code, !1),
									(0, k.$$Tb)(te.element) &&
										Q.notifyUserAction({
											agentId: te.element.agent?.id,
											command: te.element.slashCommand?.name,
											sessionId: te.element.sessionId,
											requestId: te.element.requestId,
											result: te.element.result,
											action: {
												kind: "runInTerminal",
												codeBlockIndex: te.codeBlockIndex,
												languageId: te.languageId,
											},
										});
							}
						},
					);
					function ne(ee, _) {
						const te = ee.get(m.$dtb),
							Z = ee.get(S.$GYb).lastFocusedWidget;
						if (!Z) return;
						const re = te.getFocusedCodeEditor()?.getModel()?.uri,
							le = re ? Z.getCodeBlockInfoForEditor(re) : void 0,
							oe = !Z.inputEditor.hasWidgetFocus() && Z.getFocus(),
							ae = (0, k.$$Tb)(oe) ? oe : void 0,
							pe = le
								? le.element
								: (ae ??
									Z.viewModel
										?.getItems()
										.reverse()
										.find((ue) => (0, k.$$Tb)(ue)));
						if (!pe || !(0, k.$$Tb)(pe)) return;
						Z.reveal(pe);
						const $e = Z.getCodeBlockInfosForResponse(pe),
							ye = le
								? (le.codeBlockIndex + (_ ? -1 : 1) + $e.length) % $e.length
								: _
									? $e.length - 1
									: 0;
						$e[ye]?.focus();
					}
					(0, g.$4X)(
						class extends g.$3X {
							constructor() {
								super({
									id: "workbench.action.chat.nextCodeBlock",
									title: (0, n.localize2)(4582, "Next Code Block"),
									keybinding: {
										primary:
											w.KeyMod.CtrlCmd | w.KeyMod.Alt | w.KeyCode.PageDown,
										mac: {
											primary:
												w.KeyMod.CtrlCmd | w.KeyMod.Alt | w.KeyCode.PageDown,
										},
										weight: b.KeybindingWeight.WorkbenchContrib,
										when: T.$41,
									},
									precondition: T.$51,
									f1: !0,
									category: v.$3Yb,
								});
							}
							run(_, ...te) {
								ne(_);
							}
						},
					),
						(0, g.$4X)(
							class extends g.$3X {
								constructor() {
									super({
										id: "workbench.action.chat.previousCodeBlock",
										title: (0, n.localize2)(4583, "Previous Code Block"),
										keybinding: {
											primary:
												w.KeyMod.CtrlCmd | w.KeyMod.Alt | w.KeyCode.PageUp,
											mac: {
												primary:
													w.KeyMod.CtrlCmd | w.KeyMod.Alt | w.KeyCode.PageUp,
											},
											weight: b.KeybindingWeight.WorkbenchContrib,
											when: T.$41,
										},
										precondition: T.$51,
										f1: !0,
										category: v.$3Yb,
									});
								}
								run(_, ...te) {
									ne(_, !0);
								}
							},
						);
				}
				function X(ie, ne) {
					const ee = ne.get(S.$GYb),
						_ = ne.get(S.$KYb),
						te = ie.getModel();
					if (!te) return;
					const Z = ee.lastFocusedWidget?.getCodeBlockInfoForEditor(te.uri);
					if (!Z) {
						for (const se of _.providers) {
							const re = se.getCodeBlockContext(ie);
							if (re) return re;
						}
						return;
					}
					return {
						element: Z.element,
						codeBlockIndex: Z.codeBlockIndex,
						code: ie.getValue(),
						languageId: ie.getModel().getLanguageId(),
					};
				}
				function Y() {
					class ie extends g.$3X {
						run(ee, ..._) {
							const te = _[0];
							if (x(te)) return this.runWithContext(ee, te);
						}
					}
					(0, g.$4X)(
						class extends ie {
							constructor() {
								super({
									id: "workbench.action.chat.applyCompareEdits",
									title: (0, n.localize2)(4584, "Apply Edits"),
									f1: !1,
									category: v.$3Yb,
									icon: i.$ak.check,
									precondition: o.$Kj.and(
										u.EditorContextKeys.hasChanges,
										T.$Z1.negate(),
									),
									menu: {
										id: g.$XX.ChatCompareBlock,
										group: "navigation",
										order: 1,
									},
								});
							}
							async runWithContext(ee, _) {
								const te = ee.get(N.$IY);
								await ee
									.get(f.$Li)
									.createInstance(I.$FYb)
									.apply(_.element, _.edit, _.diffEditor),
									await te.openEditor({
										resource: _.edit.uri,
										options: { revealIfVisible: !0 },
									});
							}
						},
					),
						(0, g.$4X)(
							class extends ie {
								constructor() {
									super({
										id: "workbench.action.chat.discardCompareEdits",
										title: (0, n.localize2)(4585, "Discard Edits"),
										f1: !1,
										category: v.$3Yb,
										icon: i.$ak.trash,
										precondition: o.$Kj.and(
											u.EditorContextKeys.hasChanges,
											T.$Z1.negate(),
										),
										menu: {
											id: g.$XX.ChatCompareBlock,
											group: "navigation",
											order: 2,
										},
									});
								}
								async runWithContext(ee, _) {
									ee.get(f.$Li)
										.createInstance(I.$FYb)
										.discard(_.element, _.edit);
								}
							},
						);
				}
			},
		),
		
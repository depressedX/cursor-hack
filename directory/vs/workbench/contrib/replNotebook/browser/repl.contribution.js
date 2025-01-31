import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../../platform/registry/common/platform.js';
import '../../../browser/editor.js';
import '../../../common/editor.js';
import '../../../../base/common/marshalling.js';
import '../../../../base/common/types.js';
import '../../../../base/common/uri.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../notebook/common/notebookCommon.js';
import './replEditor.js';
import './replEditorInput.js';
import '../../../../base/common/lifecycle.js';
import '../../../common/contributions.js';
import '../../../services/extensions/common/extensions.js';
import '../../../services/workingCopy/common/workingCopyEditorService.js';
import '../../../../base/common/resources.js';
import '../../notebook/common/notebookService.js';
import '../../../services/editor/common/editorResolverService.js';
import '../../notebook/common/notebookEditorModelResolverService.js';
import '../../../../base/common/strings.js';
import '../../../../editor/browser/services/bulkEditService.js';
import '../../../../editor/common/languages/modesRegistry.js';
import '../../bulkEdit/browser/bulkCellEdits.js';
import '../../interactive/browser/interactiveHistoryService.js';
import '../../notebook/browser/services/notebookEditorService.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../debug/browser/repl.js';
import '../../debug/common/debug.js';
import '../../../services/views/common/viewsService.js';
import '../../../../base/common/keyCodes.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../nls.js';
import '../../notebook/browser/controller/coreActions.js';
import '../../notebook/browser/notebookIcons.js';
import '../../../services/editor/common/editorService.js';
define(
			de[4162],
			he([
				1, 0, 102, 30, 192, 44, 197, 28, 9, 5, 70, 4161, 1850, 3, 55, 53, 403,
				19, 161, 231, 509, 37, 199, 172, 572, 987, 293, 10, 8, 43, 847, 112, 89,
				27, 11, 4, 238, 284, 18,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*descriptors*/,
				i /*platform*/,
				w /*editor*/,
				E /*editor*/,
				C /*marshalling*/,
				d /*types*/,
				m /*uri*/,
				r /*instantiation*/,
				u /*notebookCommon*/,
				a /*replEditor*/,
				h /*replEditorInput*/,
				c /*lifecycle*/,
				n /*contributions*/,
				g /*extensions*/,
				p /*workingCopyEditorService*/,
				o /*resources*/,
				f /*notebookService*/,
				b /*editorResolverService*/,
				s /*notebookEditorModelResolverService*/,
				l /*strings*/,
				y /*bulkEditService*/,
				$ /*modesRegistry*/,
				v /*bulkCellEdits*/,
				S /*interactiveHistoryService*/,
				I /*notebookEditorService*/,
				T /*configuration*/,
				P /*contextkey*/,
				k /*keybindingsRegistry*/,
				L /*repl*/,
				D /*debug*/,
				M /*viewsService*/,
				N /*keyCodes*/,
				A /*actions*/,
				R /*nls*/,
				O /*coreActions*/,
				B /*notebookIcons*/,
				U /*editorService*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$PJc = void 0),
					(B = mt(B));
				class z {
					canSerialize(V) {
						return V.typeId === h.$wJc.ID;
					}
					serialize(V) {
						(0, d.$vg)(V instanceof h.$wJc);
						const G = {
							resource: V.resource,
							preferredResource: V.preferredResource,
							viewType: V.viewType,
							options: V.options,
							label: V.getName(),
						};
						return JSON.stringify(G);
					}
					deserialize(V, G) {
						const K = (0, C.$ii)(G);
						if (!K) return;
						const { resource: J, viewType: W } = K;
						return !K || !m.URI.isUri(J) || typeof W != "string"
							? void 0
							: V.createInstance(h.$wJc, J, K.label);
					}
				}
				i.$Io
					.as(E.$a1.EditorPane)
					.registerEditorPane(w.$vVb.create(a.$xJc, u.$S6, "REPL Editor"), [
						new t.$Ji(h.$wJc),
					]),
					i.$Io.as(E.$a1.EditorFactory).registerEditorSerializer(h.$wJc.ID, z);
				let F = class extends c.$1c {
					static {
						this.ID = "workbench.contrib.replDocument";
					}
					constructor(V, G, K, J, W) {
						super(),
							(this.a = K),
							(this.b = J),
							(this.c = W),
							G.registerEditor(
								" ",
								{
									id: "repl",
									label: "repl Editor",
									priority: b.RegisteredEditorPriority.option,
								},
								{
									canSupportResource: (X) =>
										V.getNotebookTextModel(X) !== void 0,
									singlePerResource: !0,
								},
								{
									createUntitledEditorInput: async ({
										resource: X,
										options: Y,
									}) => {
										const ie =
												this.c.getValue(u.$56.InteractiveWindowPromptToSave) !==
												!0,
											ne = await this.a.resolve(
												{ untitledResource: X },
												"jupyter-notebook",
												{ scratchpad: ie },
											);
										ne.object.notebook.onWillDispose(() => {
											ne.dispose();
										});
										const ee = Y?.label ?? void 0;
										return {
											editor: this.b.createInstance(h.$wJc, X, ee),
											options: Y,
										};
									},
									createEditorInput: async ({ resource: X, options: Y }) => {
										const ie = Y?.label ?? void 0;
										return {
											editor: this.b.createInstance(h.$wJc, X, ie),
											options: Y,
										};
									},
								},
							);
					}
				};
				(e.$PJc = F),
					(e.$PJc = F =
						Ne(
							[
								j(0, f.$MIb),
								j(1, b.$E6),
								j(2, s.$OIb),
								j(3, r.$Li),
								j(4, T.$gj),
							],
							F,
						));
				let x = class extends c.$1c {
					static {
						this.ID = "workbench.contrib.replWorkingCopyEditorHandler";
					}
					constructor(V, G, K) {
						super(), (this.a = V), (this.b = G), (this.c = K), this.f();
					}
					handles(V) {
						const G = this.g(V);
						return (
							!!G &&
							G === "jupyter-notebook" &&
							(0, o.$lh)(V.resource) === ".replNotebook"
						);
					}
					isOpen(V, G) {
						return this.handles(V)
							? G instanceof h.$wJc && (0, o.$gh)(V.resource, G.resource)
							: !1;
					}
					createEditor(V) {
						return this.a.createInstance(h.$wJc, V.resource, void 0);
					}
					async f() {
						await this.c.whenInstalledExtensionsRegistered(),
							this.D(this.b.registerHandler(this));
					}
					g(V) {
						return u.$66.parse(V.typeId);
					}
				};
				(x = Ne([j(0, r.$Li), j(1, p.$bZ), j(2, g.$q2)], x)),
					(0, n.$s6)(x.ID, x, n.WorkbenchPhase.BlockRestore),
					(0, n.$s6)(F.ID, F, n.WorkbenchPhase.BlockRestore),
					(0, A.$4X)(
						class extends A.$3X {
							constructor() {
								super({
									id: "repl.execute",
									title: (0, R.localize2)(8960, "Execute REPL input"),
									category: "REPL",
									keybinding: [
										{
											when: P.$Kj.equals(
												"activeEditor",
												"workbench.editor.repl",
											),
											primary: N.KeyMod.CtrlCmd | N.KeyCode.Enter,
											weight: O.$s5b,
										},
										{
											when: P.$Kj.and(
												P.$Kj.equals("activeEditor", "workbench.editor.repl"),
												P.$Kj.equals(
													"config.interactiveWindow.executeWithShiftEnter",
													!0,
												),
											),
											primary: N.KeyMod.Shift | N.KeyCode.Enter,
											weight: O.$s5b,
										},
										{
											when: P.$Kj.and(
												P.$Kj.equals("activeEditor", "workbench.editor.repl"),
												P.$Kj.equals(
													"config.interactiveWindow.executeWithShiftEnter",
													!1,
												),
											),
											primary: N.KeyCode.Enter,
											weight: O.$s5b,
										},
									],
									menu: [{ id: A.$XX.ReplInputExecute }],
									icon: B.$7Nb,
									f1: !1,
									metadata: {
										description: "Execute the Contents of the Input Box",
										args: [
											{
												name: "resource",
												description: "Interactive resource Uri",
												isOptional: !0,
											},
										],
									},
								});
							}
							async run(q, V) {
								const G = q.get(U.$IY),
									K = q.get(y.$rzb),
									J = q.get(S.$wnc),
									W = q.get(I.$n5b);
								let X;
								if (V) {
									const Y = m.URI.revive(V),
										ie = G.findEditors(Y);
									for (const ne of ie)
										if (ne.editor.typeId === h.$wJc.ID) {
											X = (
												await G.openEditor(ne.editor, ne.groupId)
											)?.getControl();
											break;
										}
								} else X = G.activeEditorPane?.getControl();
								X && H(K, J, W, X);
							}
						},
					);
				async function H(q, V, G, K) {
					if (K && K.notebookEditor && K.codeEditor) {
						const J = K.notebookEditor.textModel,
							W = K.codeEditor.getModel(),
							Y = K.notebookEditor.activeKernel?.supportedLanguages[0] ?? $.$0M;
						if (J && W) {
							const ie = J.length - 1,
								ne = W.getValue();
							if ((0, l.$jf)(ne)) return;
							V.replaceLast(J.uri, ne),
								V.addToHistory(J.uri, ""),
								W.setValue(""),
								J.cells[ie].resetTextBuffer(W.getTextBuffer());
							const ee =
								K.notebookEditor.notebookOptions.getDisplayOptions()
									.interactiveWindowCollapseCodeCells === "fromEditor"
									? { inputCollapsed: !1, outputCollapsed: !1 }
									: void 0;
							await q.apply([
								new v.$hJb(J.uri, {
									editType: u.CellEditType.Replace,
									index: ie,
									count: 0,
									cells: [
										{
											cellKind: u.CellKind.Code,
											mime: void 0,
											language: Y,
											source: ne,
											outputs: [],
											metadata: {},
											collapseState: ee,
										},
									],
								}),
							]);
							const _ = { start: ie, end: ie + 1 };
							K.notebookEditor.revealCellRangeInView(_),
								await K.notebookEditor.executeNotebookCells(
									K.notebookEditor.getCellsInRange({ start: ie, end: ie + 1 }),
								);
							const te = G.getNotebookEditor(K.notebookEditor.getId());
							te && (te.setSelections([_]), te.setFocus(_));
						}
					}
				}
				k.$TX.registerCommandAndKeybindingRule({
					id: "list.find.replInputFocus",
					weight: k.KeybindingWeight.WorkbenchContrib + 1,
					when: P.$Kj.equals("view", D.$Y4),
					primary: N.KeyMod.CtrlCmd | N.KeyMod.Alt | N.KeyCode.KeyF,
					secondary: [N.KeyCode.F3],
					handler: (q) => {
						(0, L.$OJc)(q.get(M.$HMb))?.openFind();
					},
				});
			},
		)

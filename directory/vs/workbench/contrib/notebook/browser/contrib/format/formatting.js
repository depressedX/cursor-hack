import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../nls.js';
import '../../../../../../base/common/cancellation.js';
import '../../../../../../base/common/keyCodes.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../../editor/browser/editorExtensions.js';
import '../../../../../../editor/browser/services/bulkEditService.js';
import '../../../../../../editor/common/editorContextKeys.js';
import '../../../../../../editor/common/services/editorWorker.js';
import '../../../../../../editor/common/services/languageFeatures.js';
import '../../../../../../editor/common/services/resolverService.js';
import '../../../../../../editor/contrib/format/browser/format.js';
import '../../../../../../platform/actions/common/actions.js';
import '../../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../../../platform/progress/common/progress.js';
import '../../controller/coreActions.js';
import '../../notebookBrowser.js';
import '../../../common/notebookContextKeys.js';
import '../../../../../services/editor/common/editorService.js';
import '../../../common/notebookExecutionService.js';
import '../../../common/notebookCommon.js';
import '../../../../../../platform/configuration/common/configuration.js';
import '../../../../../services/lifecycle/common/lifecycle.js';
import '../../../../../../platform/registry/common/platform.js';
import '../../../../../common/contributions.js';
import '../../../common/notebookService.js';
import '../saveParticipants/saveParticipants.js';
define(
			de[3909],
			he([
				1, 0, 4, 33, 27, 3, 46, 199, 71, 200, 69, 42, 674, 11, 8, 5, 43, 84,
				238, 108, 176, 18, 611, 70, 10, 52, 30, 55, 161, 1926,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*cancellation*/,
				w /*keyCodes*/,
				E /*lifecycle*/,
				C /*editorExtensions*/,
				d /*bulkEditService*/,
				m /*editorContextKeys*/,
				r /*editorWorker*/,
				u /*languageFeatures*/,
				a /*resolverService*/,
				h /*format*/,
				c /*actions*/,
				n /*contextkey*/,
				g /*instantiation*/,
				p /*keybindingsRegistry*/,
				o /*progress*/,
				f /*coreActions*/,
				b /*notebookBrowser*/,
				s /*notebookContextKeys*/,
				l /*editorService*/,
				y /*notebookExecutionService*/,
				$ /*notebookCommon*/,
				v /*configuration*/,
				S /*lifecycle*/,
				I /*platform*/,
				T /*contributions*/,
				P /*notebookService*/,
				k /*saveParticipants*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$WFc = void 0),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: "notebook.format",
									title: (0, t.localize2)(7775, "Format Notebook"),
									category: f.$p5b,
									precondition: n.$Kj.and(s.$mJb, s.$tJb),
									keybinding: {
										when: m.EditorContextKeys.editorTextFocus.toNegated(),
										primary: w.KeyMod.Shift | w.KeyMod.Alt | w.KeyCode.KeyF,
										linux: {
											primary:
												w.KeyMod.CtrlCmd | w.KeyMod.Shift | w.KeyCode.KeyI,
										},
										weight: p.KeybindingWeight.WorkbenchContrib,
									},
									f1: !0,
									menu: {
										id: c.$XX.EditorContext,
										when: n.$Kj.and(
											m.EditorContextKeys.inCompositeEditor,
											m.EditorContextKeys.hasDocumentFormattingProvider,
										),
										group: "1_modification",
										order: 1.3,
									},
								});
							}
							async run(N) {
								const A = N.get(l.$IY),
									R = N.get(a.$MO),
									O = N.get(r.$Cxb),
									B = N.get(u.$k3),
									U = N.get(d.$rzb),
									z = N.get(g.$Li),
									F = (0, b.$eJb)(A.activeEditorPane);
								if (!F || !F.hasModel()) return;
								const x = F.textModel,
									H = await z.invokeFunction(
										k.$UFc.checkAndRunFormatCodeAction,
										x,
										o.$0N.None,
										i.CancellationToken.None,
									),
									q = new E.$Zc();
								try {
									if (!H) {
										const V = await Promise.all(
											x.cells.map(async (G) => {
												const K = await R.createModelReference(G.uri);
												q.add(K);
												const J = K.object.textEditorModel,
													W = await (0, h.$Rhc)(
														O,
														B,
														J,
														h.FormattingMode.Explicit,
														i.CancellationToken.None,
													),
													X = [];
												if (W) {
													for (const Y of W)
														X.push(new d.$tzb(J.uri, Y, J.getVersionId()));
													return X;
												}
												return [];
											}),
										);
										await U.apply(V.flat(), {
											label: (0, t.localize)(7772, null),
											code: "undoredo.formatNotebook",
										});
									}
								} finally {
									q.dispose();
								}
							}
						},
					),
					(0, C.$ntb)(
						class extends C.$itb {
							constructor() {
								super({
									id: "notebook.formatCell",
									label: (0, t.localize)(7773, null),
									alias: "Format Cell",
									precondition: n.$Kj.and(
										s.$mJb,
										s.$tJb,
										m.EditorContextKeys.inCompositeEditor,
										m.EditorContextKeys.writable,
										m.EditorContextKeys.hasDocumentFormattingProvider,
									),
									kbOpts: {
										kbExpr: n.$Kj.and(m.EditorContextKeys.editorTextFocus),
										primary: w.KeyMod.Shift | w.KeyMod.Alt | w.KeyCode.KeyF,
										linux: {
											primary:
												w.KeyMod.CtrlCmd | w.KeyMod.Shift | w.KeyCode.KeyI,
										},
										weight: p.KeybindingWeight.EditorContrib,
									},
									contextMenuOpts: { group: "1_modification", order: 1.301 },
								});
							}
							async run(A, R) {
								R.hasModel() &&
									(await A.get(g.$Li).invokeFunction(
										h.$Nhc,
										R,
										h.FormattingMode.Explicit,
										o.$0N.None,
										i.CancellationToken.None,
										!0,
									));
							}
						},
					);
				let L = class {
					constructor(A, R, O, B, U, z) {
						(this.a = A),
							(this.b = R),
							(this.c = O),
							(this.d = B),
							(this.e = U),
							(this.f = z);
					}
					async onWillExecuteCell(A) {
						if (!this.e.getValue($.$56.formatOnCellExecution)) return;
						const O = new E.$Zc();
						try {
							const B = await Promise.all(
								A.map(async (U) => {
									const z = this.f.getNotebookTextModel(U.notebook);
									if (!z) return [];
									let F;
									for (const G of z.cells)
										if (G.handle === U.cellHandle) {
											F = G;
											break;
										}
									if (!F) return [];
									const x = await this.c.createModelReference(F.uri);
									O.add(x);
									const H = x.object.textEditorModel,
										q = await (0, h.$Rhc)(
											this.d,
											this.b,
											H,
											h.FormattingMode.Silent,
											i.CancellationToken.None,
										),
										V = [];
									return q
										? (V.push(
												...q.map((G) => new d.$tzb(H.uri, G, H.getVersionId())),
											),
											V)
										: [];
								}),
							);
							await this.a.apply(B.flat(), {
								label: (0, t.localize)(7774, null),
								code: "undoredo.notebooks.onWillExecuteFormat",
							});
						} finally {
							O.dispose();
						}
					}
				};
				L = Ne(
					[
						j(0, d.$rzb),
						j(1, u.$k3),
						j(2, a.$MO),
						j(3, r.$Cxb),
						j(4, v.$gj),
						j(5, P.$MIb),
					],
					L,
				);
				let D = class extends E.$1c {
					constructor(A, R) {
						super(), (this.a = A), (this.b = R), this.c();
					}
					c() {
						this.D(
							this.b.registerExecutionParticipant(this.a.createInstance(L)),
						);
					}
				};
				(e.$WFc = D),
					(e.$WFc = D = Ne([j(0, g.$Li), j(1, y.$c6)], D)),
					I.$Io
						.as(T.Extensions.Workbench)
						.registerWorkbenchContribution(D, S.LifecyclePhase.Restored);
			},
		),
		
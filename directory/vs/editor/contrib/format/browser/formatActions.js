import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lifecycle.js';
import '../../../browser/editorExtensions.js';
import '../../../browser/services/codeEditorService.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/characterClassifier.js';
import '../../../common/core/range.js';
import '../../../common/editorContextKeys.js';
import '../../../common/services/editorWorker.js';
import '../../../common/services/languageFeatures.js';
import './format.js';
import './formattingEdit.js';
import '../../../../nls.js';
import '../../../../platform/accessibilitySignal/browser/accessibilitySignalService.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/progress/common/progress.js';
define(
			de[1649],
			he([
				1, 0, 24, 33, 29, 27, 3, 46, 65, 38, 654, 17, 71, 200, 69, 674, 1552, 4,
				184, 31, 8, 5, 43, 84,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*arrays*/,
				i /*cancellation*/,
				w /*errors*/,
				E /*keyCodes*/,
				C /*lifecycle*/,
				d /*editorExtensions*/,
				m /*codeEditorService*/,
				r /*editorOptions*/,
				u /*characterClassifier*/,
				a /*range*/,
				h /*editorContextKeys*/,
				c /*editorWorker*/,
				n /*languageFeatures*/,
				g /*format*/,
				p /*formattingEdit*/,
				o /*nls*/,
				f /*accessibilitySignalService*/,
				b /*commands*/,
				s /*contextkey*/,
				l /*instantiation*/,
				y /*keybindingsRegistry*/,
				$ /*progress*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Thc = void 0),
					(o = mt(o));
				let v = class {
					static {
						this.ID = "editor.contrib.autoFormat";
					}
					constructor(k, L, D, M) {
						(this.c = k),
							(this.d = L),
							(this.f = D),
							(this.g = M),
							(this.a = new C.$Zc()),
							(this.b = new C.$Zc()),
							this.a.add(
								L.onTypeFormattingEditProvider.onDidChange(this.h, this),
							),
							this.a.add(k.onDidChangeModel(() => this.h())),
							this.a.add(k.onDidChangeModelLanguage(() => this.h())),
							this.a.add(
								k.onDidChangeConfiguration((N) => {
									N.hasChanged(r.EditorOption.formatOnType) && this.h();
								}),
							),
							this.h();
					}
					dispose() {
						this.a.dispose(), this.b.dispose();
					}
					h() {
						if (
							(this.b.clear(),
							!this.c.getOption(r.EditorOption.formatOnType) ||
								!this.c.hasModel())
						)
							return;
						const k = this.c.getModel(),
							[L] = this.d.onTypeFormattingEditProvider.ordered(k);
						if (!L || !L.autoFormatTriggerCharacters) return;
						const D = new u.$OL();
						for (const M of L.autoFormatTriggerCharacters)
							D.add(M.charCodeAt(0));
						this.b.add(
							this.c.onDidType((M) => {
								const N = M.charCodeAt(M.length - 1);
								D.has(N) && this.j(String.fromCharCode(N));
							}),
						);
					}
					j(k) {
						if (
							!this.c.hasModel() ||
							this.c.getSelections().length > 1 ||
							!this.c.getSelection().isEmpty()
						)
							return;
						const L = this.c.getModel(),
							D = this.c.getPosition(),
							M = new i.$Ce(),
							N = this.c.onDidChangeModelContent((A) => {
								if (A.isFlush) {
									M.cancel(), N.dispose();
									return;
								}
								for (let R = 0, O = A.changes.length; R < O; R++)
									if (A.changes[R].range.endLineNumber <= D.lineNumber) {
										M.cancel(), N.dispose();
										return;
									}
							});
						(0, g.$Shc)(
							this.f,
							this.d,
							L,
							D,
							k,
							L.getFormattingOptions(),
							M.token,
						)
							.then((A) => {
								M.token.isCancellationRequested ||
									((0, t.$Pb)(A) &&
										(this.g.playSignal(f.$Twb.format, { userGesture: !1 }),
										p.$Ihc.execute(this.c, A, !0)));
							})
							.finally(() => {
								N.dispose();
							});
					}
				};
				(e.$Thc = v),
					(e.$Thc = v = Ne([j(1, n.$k3), j(2, c.$Cxb), j(3, f.$Owb)], v));
				let S = class {
					static {
						this.ID = "editor.contrib.formatOnPaste";
					}
					constructor(k, L, D) {
						(this.c = k),
							(this.d = L),
							(this.f = D),
							(this.a = new C.$Zc()),
							(this.b = new C.$Zc()),
							this.a.add(k.onDidChangeConfiguration(() => this.g())),
							this.a.add(k.onDidChangeModel(() => this.g())),
							this.a.add(k.onDidChangeModelLanguage(() => this.g())),
							this.a.add(
								L.documentRangeFormattingEditProvider.onDidChange(this.g, this),
							);
					}
					dispose() {
						this.a.dispose(), this.b.dispose();
					}
					g() {
						this.b.clear(),
							this.c.getOption(r.EditorOption.formatOnPaste) &&
								this.c.hasModel() &&
								this.d.documentRangeFormattingEditProvider.has(
									this.c.getModel(),
								) &&
								this.b.add(this.c.onDidPaste(({ range: k }) => this.h(k)));
					}
					h(k) {
						this.c.hasModel() &&
							(this.c.getSelections().length > 1 ||
								this.f
									.invokeFunction(
										g.$Lhc,
										this.c,
										k,
										g.FormattingMode.Silent,
										$.$0N.None,
										i.CancellationToken.None,
										!1,
									)
									.catch(w.$4));
					}
				};
				S = Ne([j(1, n.$k3), j(2, l.$Li)], S);
				class I extends d.$itb {
					constructor() {
						super({
							id: "editor.action.formatDocument",
							label: o.localize(1078, null),
							alias: "Format Document",
							precondition: s.$Kj.and(
								h.EditorContextKeys.notInCompositeEditor,
								h.EditorContextKeys.writable,
								h.EditorContextKeys.hasDocumentFormattingProvider,
							),
							kbOpts: {
								kbExpr: h.EditorContextKeys.editorTextFocus,
								primary: E.KeyMod.Shift | E.KeyMod.Alt | E.KeyCode.KeyF,
								linux: {
									primary: E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.KeyI,
								},
								weight: y.KeybindingWeight.EditorContrib,
							},
							contextMenuOpts: { group: "1_modification", order: 1.3 },
						});
					}
					async run(k, L) {
						if (L.hasModel()) {
							const D = k.get(l.$Li);
							await k
								.get($.$bO)
								.showWhile(
									D.invokeFunction(
										g.$Nhc,
										L,
										g.FormattingMode.Explicit,
										$.$0N.None,
										i.CancellationToken.None,
										!0,
									),
									250,
								);
						}
					}
				}
				class T extends d.$itb {
					constructor() {
						super({
							id: "editor.action.formatSelection",
							label: o.localize(1079, null),
							alias: "Format Selection",
							precondition: s.$Kj.and(
								h.EditorContextKeys.writable,
								h.EditorContextKeys.hasDocumentSelectionFormattingProvider,
							),
							kbOpts: {
								kbExpr: h.EditorContextKeys.editorTextFocus,
								primary: (0, E.$os)(E.$ps, E.KeyMod.CtrlCmd | E.KeyCode.KeyF),
								mac: {
									primary: (0, E.$os)(E.$qs, E.KeyMod.CtrlCmd | E.KeyCode.KeyF),
								},
								weight: y.KeybindingWeight.EditorContrib,
							},
							contextMenuOpts: {
								when: h.EditorContextKeys.hasNonEmptySelection,
								group: "1_modification",
								order: 1.31,
							},
						});
					}
					async run(k, L) {
						if (!L.hasModel()) return;
						const D = k.get(l.$Li),
							M = L.getModel(),
							N = L.getSelections().map((R) =>
								R.isEmpty()
									? new a.$iL(
											R.startLineNumber,
											1,
											R.startLineNumber,
											M.getLineMaxColumn(R.startLineNumber),
										)
									: R,
							);
						await k
							.get($.$bO)
							.showWhile(
								D.invokeFunction(
									g.$Lhc,
									L,
									N,
									g.FormattingMode.Explicit,
									$.$0N.None,
									i.CancellationToken.None,
									!0,
								),
								250,
							);
					}
				}
				(0, d.$qtb)(
					v.ID,
					v,
					d.EditorContributionInstantiation.BeforeFirstInteraction,
				),
					(0, d.$qtb)(
						S.ID,
						S,
						d.EditorContributionInstantiation.BeforeFirstInteraction,
					),
					(0, d.$ntb)(I),
					(0, d.$ntb)(T),
					b.$fk.registerCommand("editor.action.format", async (P) => {
						const k = P.get(m.$dtb).getFocusedCodeEditor();
						if (!k || !k.hasModel()) return;
						const L = P.get(b.$ek);
						k.getSelection().isEmpty()
							? await L.executeCommand("editor.action.formatDocument")
							: await L.executeCommand("editor.action.formatSelection");
					});
			},
		)

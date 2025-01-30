import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/window.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/event.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../editor/common/config/editorOptions.js';
import '../../../../editor/common/editorContextKeys.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../common/contributions.js';
import '../../../services/editor/common/editorService.js';
define(
			de[1026],
			he([1, 0, 7, 75, 14, 6, 27, 3, 46, 65, 38, 71, 4, 11, 8, 43, 55, 18]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*window*/,
 w /*codicons*/,
 E /*event*/,
 C /*keyCodes*/,
 d /*lifecycle*/,
 m /*editorExtensions*/,
 r /*codeEditorService*/,
 u /*editorOptions*/,
 a /*editorContextKeys*/,
 h /*nls*/,
 c /*actions*/,
 n /*contextkey*/,
 g /*keybindingsRegistry*/,
 p /*contributions*/,
 o /*editorService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$G1b = $),
					(e.$H1b = v),
					(h = mt(h));
				const f = "transientWordWrapState",
					b = "isWordWrapMinified",
					s = "isDominatedByLongLines",
					l = new n.$5j("canToggleWordWrap", !1, !0),
					y = new n.$5j("editorWordWrap", !1, h.localize(4915, null));
				function $(M, N, A) {
					A.setTransientModelProperty(M, f, N);
				}
				function v(M, N) {
					return N.getTransientModelProperty(M, f);
				}
				const S = "editor.action.toggleWordWrap";
				class I extends m.$itb {
					constructor() {
						super({
							id: S,
							label: h.localize(4916, null),
							alias: "View: Toggle Word Wrap",
							precondition: void 0,
							kbOpts: {
								kbExpr: null,
								primary: C.KeyMod.Alt | C.KeyCode.KeyZ,
								weight: g.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(N, A) {
						const R = N.get(r.$dtb);
						if (!L(R, A)) return;
						const O = A.getModel(),
							B = v(O, R);
						let U;
						B
							? (U = null)
							: (U = {
									wordWrapOverride:
										A.getOption(u.EditorOption.wrappingInfo).wrappingColumn ===
										-1
											? "on"
											: "off",
								}),
							$(O, U, R);
						const z = T(A, R);
						if (z) {
							const F = z.getOriginalEditor(),
								x = z.getModifiedEditor(),
								H = F === A ? x : F;
							L(R, H) && ($(H.getModel(), U, R), z.updateOptions({}));
						}
					}
				}
				function T(M, N) {
					if (!M.getOption(u.EditorOption.inDiffEditor)) return null;
					for (const A of N.listDiffEditors()) {
						const R = A.getOriginalEditor(),
							O = A.getModifiedEditor();
						if (R === M || O === M) return A;
					}
					return null;
				}
				let P = class extends d.$1c {
					static {
						this.ID = "editor.contrib.toggleWordWrapController";
					}
					constructor(N, A, R) {
						super(), (this.a = N), (this.b = A), (this.c = R);
						const B = this.a.getOptions().get(u.EditorOption.wrappingInfo),
							U = this.b.createKey(b, B.isWordWrapMinified),
							z = this.b.createKey(s, B.isDominatedByLongLines);
						let F = !1;
						this.D(
							N.onDidChangeConfiguration((H) => {
								if (!H.hasChanged(u.EditorOption.wrappingInfo)) return;
								const V = this.a.getOptions().get(u.EditorOption.wrappingInfo);
								U.set(V.isWordWrapMinified),
									z.set(V.isDominatedByLongLines),
									F || x();
							}),
						),
							this.D(
								N.onDidChangeModel((H) => {
									x();
								}),
							),
							this.D(
								R.onDidChangeTransientModelProperty(() => {
									x();
								}),
							);
						const x = () => {
							if (!L(this.c, this.a)) return;
							const H = v(this.a.getModel(), this.c);
							try {
								(F = !0), this.f(H);
							} finally {
								F = !1;
							}
						};
					}
					f(N) {
						const A = N ? N.wordWrapOverride : "inherit";
						this.a.updateOptions({ wordWrapOverride2: A });
					}
				};
				P = Ne([j(1, n.$6j), j(2, r.$dtb)], P);
				let k = class extends d.$1c {
					static {
						this.ID = "diffeditor.contrib.toggleWordWrapController";
					}
					constructor(N, A) {
						super(),
							(this.a = N),
							(this.b = A),
							this.D(
								this.a.onDidChangeModel(() => {
									this.c();
								}),
							);
					}
					c() {
						const N = this.a.getOriginalEditor(),
							A = this.a.getModifiedEditor();
						if (!N.hasModel() || !A.hasModel()) return;
						const R = v(N.getModel(), this.b),
							O = v(A.getModel(), this.b);
						R &&
							!O &&
							L(this.b, N) &&
							($(A.getModel(), R, this.b), this.a.updateOptions({})),
							!R &&
								O &&
								L(this.b, A) &&
								($(N.getModel(), O, this.b), this.a.updateOptions({}));
					}
				};
				k = Ne([j(1, r.$dtb)], k);
				function L(M, N) {
					if (!N || N.isSimpleWidget || !N.getModel()) return !1;
					if (N.getOption(u.EditorOption.inDiffEditor)) {
						for (const R of M.listDiffEditors())
							if (R.getOriginalEditor() === N && !R.renderSideBySide) return !1;
					}
					return !0;
				}
				let D = class extends d.$1c {
					static {
						this.ID = "workbench.contrib.editorWordWrapContextKeyTracker";
					}
					constructor(N, A, R) {
						super(),
							(this.g = N),
							(this.h = A),
							(this.j = R),
							this.D(
								E.Event.runAndSubscribe(
									t.onDidRegisterWindow,
									({ window: O, disposables: B }) => {
										B.add((0, t.$0fb)(O, "focus", () => this.m(), !0)),
											B.add((0, t.$0fb)(O, "blur", () => this.m(), !0));
									},
									{ window: i.$Bfb, disposables: this.B },
								),
							),
							this.D(this.g.onDidActiveEditorChange(() => this.m())),
							(this.a = l.bindTo(this.j)),
							(this.b = y.bindTo(this.j)),
							(this.c = null),
							(this.f = new d.$Zc()),
							this.m();
					}
					m() {
						const N =
							this.h.getFocusedCodeEditor() || this.h.getActiveCodeEditor();
						this.c !== N &&
							(this.f.clear(),
							(this.c = N),
							N &&
								(this.f.add(N.onDidChangeModel(() => this.n())),
								this.f.add(
									N.onDidChangeConfiguration((A) => {
										A.hasChanged(u.EditorOption.wrappingInfo) && this.n();
									}),
								),
								this.n()));
					}
					n() {
						if (L(this.h, this.c)) {
							const N = this.c.getOption(u.EditorOption.wrappingInfo);
							this.q(!0, N.wrappingColumn !== -1);
						} else return this.q(!1, !1);
					}
					q(N, A) {
						this.a.set(N), this.b.set(A);
					}
				};
				(D = Ne([j(0, o.$IY), j(1, r.$dtb), j(2, n.$6j)], D)),
					(0, p.$s6)(D.ID, D, p.WorkbenchPhase.AfterRestored),
					(0, m.$qtb)(P.ID, P, m.EditorContributionInstantiation.Eager),
					(0, m.$rtb)(k.ID, k),
					(0, m.$ntb)(I),
					c.$ZX.appendMenuItem(c.$XX.EditorTitle, {
						command: {
							id: S,
							title: h.localize(4917, null),
							icon: w.$ak.wordWrap,
						},
						group: "navigation",
						order: 1,
						when: n.$Kj.and(n.$Kj.has(s), n.$Kj.has(b)),
					}),
					c.$ZX.appendMenuItem(c.$XX.EditorTitle, {
						command: {
							id: S,
							title: h.localize(4918, null),
							icon: w.$ak.wordWrap,
						},
						group: "navigation",
						order: 1,
						when: n.$Kj.and(
							a.EditorContextKeys.inDiffEditor.negate(),
							n.$Kj.has(s),
							n.$Kj.not(b),
						),
					}),
					c.$ZX.appendMenuItem(c.$XX.MenubarViewMenu, {
						command: {
							id: S,
							title: h.localize(4919, null),
							toggled: y,
							precondition: l,
						},
						order: 1,
						group: "5_editor",
					});
			},
		),
		
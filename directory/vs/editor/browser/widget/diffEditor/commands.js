import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/keyCodes.js';
import '../../editorExtensions.js';
import '../../services/codeEditorService.js';
import './diffEditorWidget.js';
import '../../../common/editorContextKeys.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import './registrations.contribution.js';
define(
			de[1217],
			he([1, 0, 7, 14, 27, 46, 65, 309, 71, 4, 11, 10, 8, 43, 608]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*codicons*/,
 w /*keyCodes*/,
 E /*editorExtensions*/,
 C /*codeEditorService*/,
 d /*diffEditorWidget*/,
 m /*editorContextKeys*/,
 r /*nls*/,
 u /*actions*/,
 a /*configuration*/,
 h /*contextkey*/,
 c /*keybindingsRegistry*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$azb =
						e.$_yb =
						e.$$yb =
						e.$0yb =
						e.$9yb =
						e.$8yb =
						e.$7yb =
						e.$6yb =
						e.$5yb =
						e.$4yb =
							void 0),
					(e.$bzb = I),
					(e.$czb = T);
				class n extends u.$3X {
					constructor() {
						super({
							id: "diffEditor.toggleCollapseUnchangedRegions",
							title: (0, r.localize2)(191, "Toggle Collapse Unchanged Regions"),
							icon: i.$ak.map,
							toggled: h.$Kj.has(
								"config.diffEditor.hideUnchangedRegions.enabled",
							),
							precondition: h.$Kj.has("isInDiffEditor"),
							menu: {
								when: h.$Kj.has("isInDiffEditor"),
								id: u.$XX.EditorTitle,
								order: 22,
								group: "navigation",
							},
						});
					}
					run(L, ...D) {
						const M = L.get(a.$gj),
							N = !M.getValue("diffEditor.hideUnchangedRegions.enabled");
						M.updateValue("diffEditor.hideUnchangedRegions.enabled", N);
					}
				}
				e.$4yb = n;
				class g extends u.$3X {
					constructor() {
						super({
							id: "diffEditor.toggleShowMovedCodeBlocks",
							title: (0, r.localize2)(192, "Toggle Show Moved Code Blocks"),
							precondition: h.$Kj.has("isInDiffEditor"),
						});
					}
					run(L, ...D) {
						const M = L.get(a.$gj),
							N = !M.getValue("diffEditor.experimental.showMoves");
						M.updateValue("diffEditor.experimental.showMoves", N);
					}
				}
				e.$5yb = g;
				class p extends u.$3X {
					constructor() {
						super({
							id: "diffEditor.toggleUseInlineViewWhenSpaceIsLimited",
							title: (0, r.localize2)(
								193,
								"Toggle Use Inline View When Space Is Limited",
							),
							precondition: h.$Kj.has("isInDiffEditor"),
						});
					}
					run(L, ...D) {
						const M = L.get(a.$gj),
							N = !M.getValue("diffEditor.useInlineViewWhenSpaceIsLimited");
						M.updateValue("diffEditor.useInlineViewWhenSpaceIsLimited", N);
					}
				}
				e.$6yb = p;
				const o = (0, r.localize2)(194, "Diff Editor");
				class f extends E.$ktb {
					constructor() {
						super({
							id: "diffEditor.switchSide",
							title: (0, r.localize2)(195, "Switch Side"),
							icon: i.$ak.arrowSwap,
							precondition: h.$Kj.has("isInDiffEditor"),
							f1: !0,
							category: o,
						});
					}
					runEditorCommand(L, D, M) {
						const N = T(L);
						if (N instanceof d.$3yb) {
							if (M && M.dryRun)
								return {
									destinationSelection: N.mapToOtherSide().destinationSelection,
								};
							N.switchSide();
						}
					}
				}
				e.$7yb = f;
				class b extends E.$ktb {
					constructor() {
						super({
							id: "diffEditor.exitCompareMove",
							title: (0, r.localize2)(196, "Exit Compare Move"),
							icon: i.$ak.close,
							precondition: m.EditorContextKeys.comparingMovedCode,
							f1: !1,
							category: o,
							keybinding: { weight: 1e4, primary: w.KeyCode.Escape },
						});
					}
					runEditorCommand(L, D, ...M) {
						const N = T(L);
						N instanceof d.$3yb && N.exitCompareMove();
					}
				}
				e.$8yb = b;
				class s extends E.$ktb {
					constructor() {
						super({
							id: "diffEditor.collapseAllUnchangedRegions",
							title: (0, r.localize2)(197, "Collapse All Unchanged Regions"),
							icon: i.$ak.fold,
							precondition: h.$Kj.has("isInDiffEditor"),
							f1: !0,
							category: o,
						});
					}
					runEditorCommand(L, D, ...M) {
						const N = T(L);
						N instanceof d.$3yb && N.collapseAllUnchangedRegions();
					}
				}
				e.$9yb = s;
				class l extends E.$ktb {
					constructor() {
						super({
							id: "diffEditor.showAllUnchangedRegions",
							title: (0, r.localize2)(198, "Show All Unchanged Regions"),
							icon: i.$ak.unfold,
							precondition: h.$Kj.has("isInDiffEditor"),
							f1: !0,
							category: o,
						});
					}
					runEditorCommand(L, D, ...M) {
						const N = T(L);
						N instanceof d.$3yb && N.showAllUnchangedRegions();
					}
				}
				e.$0yb = l;
				class y extends u.$3X {
					constructor() {
						super({
							id: "diffEditor.revert",
							title: (0, r.localize2)(199, "Revert"),
							f1: !1,
							category: o,
						});
					}
					run(L, D) {
						const M = I(L, D.originalUri, D.modifiedUri);
						M instanceof d.$3yb &&
							M.revertRangeMappings(D.mapping.innerChanges ?? []);
					}
				}
				e.$$yb = y;
				const $ = (0, r.localize2)(200, "Accessible Diff Viewer");
				class v extends u.$3X {
					static {
						this.id = "editor.action.accessibleDiffViewer.next";
					}
					constructor() {
						super({
							id: v.id,
							title: (0, r.localize2)(201, "Go to Next Difference"),
							category: $,
							precondition: h.$Kj.has("isInDiffEditor"),
							keybinding: {
								primary: w.KeyCode.F7,
								weight: c.KeybindingWeight.EditorContrib,
							},
							f1: !0,
						});
					}
					run(L) {
						T(L)?.accessibleDiffViewerNext();
					}
				}
				e.$_yb = v;
				class S extends u.$3X {
					static {
						this.id = "editor.action.accessibleDiffViewer.prev";
					}
					constructor() {
						super({
							id: S.id,
							title: (0, r.localize2)(202, "Go to Previous Difference"),
							category: $,
							precondition: h.$Kj.has("isInDiffEditor"),
							keybinding: {
								primary: w.KeyMod.Shift | w.KeyCode.F7,
								weight: c.KeybindingWeight.EditorContrib,
							},
							f1: !0,
						});
					}
					run(L) {
						T(L)?.accessibleDiffViewerPrev();
					}
				}
				e.$azb = S;
				function I(k, L, D) {
					return (
						k
							.get(C.$dtb)
							.listDiffEditors()
							.find((A) => {
								const R = A.getModifiedEditor(),
									O = A.getOriginalEditor();
								return (
									R &&
									R.getModel()?.uri.toString() === D.toString() &&
									O &&
									O.getModel()?.uri.toString() === L.toString()
								);
							}) || null
					);
				}
				function T(k) {
					const D = k.get(C.$dtb).listDiffEditors(),
						M = (0, t.$Jgb)();
					if (M)
						for (const N of D) {
							const A = N.getContainerDomNode();
							if (P(A, M)) return N;
						}
					return null;
				}
				function P(k, L) {
					let D = L;
					for (; D; ) {
						if (D === k) return !0;
						D = D.parentElement;
					}
					return !1;
				}
			},
		)

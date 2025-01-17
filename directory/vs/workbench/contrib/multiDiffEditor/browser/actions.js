import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/codicons.js';
import '../../../../editor/common/editorContextKeys.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/editor/common/editor.js';
import '../../../../platform/list/browser/listService.js';
import '../../../browser/parts/editor/editorCommandsContext.js';
import './multiDiffEditor.js';
import './multiDiffEditorInput.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/editor/common/editorService.js';
define(
			de[3691],
			he([1, 0, 14, 71, 4, 11, 8, 116, 93, 1014, 1883, 712, 66, 18]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$lSc = e.$kSc = e.$jSc = void 0);
				class n extends E.$3X {
					constructor() {
						super({
							id: "multiDiffEditor.goToFile",
							title: (0, w.localize2)(7693, "Open File"),
							icon: t.$ak.goToFile,
							precondition: i.EditorContextKeys.inMultiDiffEditor,
							menu: {
								when: i.EditorContextKeys.inMultiDiffEditor,
								id: E.$XX.MultiDiffEditorFileToolbar,
								order: 22,
								group: "navigation",
							},
						});
					}
					async run(f, ...b) {
						const s = b[0],
							l = f.get(c.$IY),
							y = l.activeEditorPane;
						let $;
						if (!(y instanceof u.$iSc)) return;
						const v = y.tryGetCodeEditor(s);
						v && ($ = v.editor.getSelections() ?? void 0);
						let S = s;
						const I = y.findDocumentDiffItem(s);
						I && I.goToFileUri && (S = I.goToFileUri),
							await l.openEditor({
								resource: S,
								options: {
									selection: $?.[0],
									selectionRevealType:
										d.TextEditorSelectionRevealType.CenterIfOutsideViewport,
								},
							});
					}
				}
				e.$jSc = n;
				class g extends E.$3X {
					constructor() {
						super({
							id: "multiDiffEditor.collapseAll",
							title: (0, w.localize2)(7694, "Collapse All Diffs"),
							icon: t.$ak.collapseAll,
							precondition: C.$Kj.and(
								C.$Kj.equals("activeEditor", u.$iSc.ID),
								C.$Kj.not("multiDiffEditorAllCollapsed"),
							),
							menu: {
								when: C.$Kj.and(
									C.$Kj.equals("activeEditor", u.$iSc.ID),
									C.$Kj.not("multiDiffEditorAllCollapsed"),
								),
								id: E.$XX.EditorTitle,
								group: "navigation",
								order: 100,
							},
							f1: !0,
						});
					}
					async run(f, ...b) {
						const l = (0, r.$TVb)(b, f.get(c.$IY), f.get(h.$EY), f.get(m.$fMb))
							.groupedEditors[0];
						if (!l) return;
						const y = l.editors[0];
						y instanceof a.$Lnc && (await y.getViewModel()).collapseAll();
					}
				}
				e.$kSc = g;
				class p extends E.$3X {
					constructor() {
						super({
							id: "multiDiffEditor.expandAll",
							title: (0, w.localize2)(7695, "Expand All Diffs"),
							icon: t.$ak.expandAll,
							precondition: C.$Kj.and(
								C.$Kj.equals("activeEditor", u.$iSc.ID),
								C.$Kj.has("multiDiffEditorAllCollapsed"),
							),
							menu: {
								when: C.$Kj.and(
									C.$Kj.equals("activeEditor", u.$iSc.ID),
									C.$Kj.has("multiDiffEditorAllCollapsed"),
								),
								id: E.$XX.EditorTitle,
								group: "navigation",
								order: 100,
							},
							f1: !0,
						});
					}
					async run(f, ...b) {
						const l = (0, r.$TVb)(b, f.get(c.$IY), f.get(h.$EY), f.get(m.$fMb))
							.groupedEditors[0];
						if (!l) return;
						const y = l.editors[0];
						y instanceof a.$Lnc && (await y.getViewModel()).expandAll();
					}
				}
				e.$lSc = p;
			},
		),
		
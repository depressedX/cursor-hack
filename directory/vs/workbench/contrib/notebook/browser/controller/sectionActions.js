import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../nls.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../contrib/outline/notebookOutline.js';
import './foldingController.js';
import '../notebookBrowser.js';
import '../notebookIcons.js';
import '../../common/notebookCommon.js';
import '../../../../services/outline/browser/outline.js';
define(
			de[4090],
			he([1, 0, 4, 11, 8, 1958, 1031, 108, 284, 70, 475]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*actions*/,
 w /*contextkey*/,
 E /*notebookOutline*/,
 C /*foldingController*/,
 d /*notebookBrowser*/,
 m /*notebookIcons*/,
 r /*notebookCommon*/,
 u /*outline*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$R4b = e.$Q4b = e.$P4b = e.$O4b = void 0),
					(m = mt(m));
				class a extends i.$3X {
					constructor() {
						super({
							id: "notebook.section.runSingleCell",
							title: {
								...(0, t.localize2)(7971, "Run Cell"),
								mnemonicTitle: (0, t.localize)(7963, null),
							},
							shortTitle: (0, t.localize)(7964, null),
							icon: m.$7Nb,
							menu: [
								{
									id: i.$XX.NotebookOutlineActionMenu,
									group: "inline",
									order: 1,
									when: w.$Kj.and(
										E.$N4b.CellKind.isEqualTo(r.CellKind.Code),
										E.$N4b.OutlineElementTarget.isEqualTo(
											u.OutlineTarget.OutlinePane,
										),
										E.$N4b.CellHasChildren.toNegated(),
										E.$N4b.CellHasHeader.toNegated(),
									),
								},
							],
						});
					}
					async run(o, f) {
						g(f) &&
							f.notebookEditor.executeNotebookCells([f.outlineEntry.cell]);
					}
				}
				e.$O4b = a;
				class h extends i.$3X {
					constructor() {
						super({
							id: "notebook.section.runCells",
							title: {
								...(0, t.localize2)(7972, "Run Cells In Section"),
								mnemonicTitle: (0, t.localize)(7965, null),
							},
							shortTitle: (0, t.localize)(7966, null),
							menu: [
								{
									id: i.$XX.NotebookStickyScrollContext,
									group: "notebookExecution",
									order: 1,
								},
								{
									id: i.$XX.NotebookOutlineActionMenu,
									group: "inline",
									order: 1,
									when: w.$Kj.and(
										E.$N4b.CellKind.isEqualTo(r.CellKind.Markup),
										E.$N4b.OutlineElementTarget.isEqualTo(
											u.OutlineTarget.OutlinePane,
										),
										E.$N4b.CellHasChildren,
										E.$N4b.CellHasHeader,
									),
								},
							],
						});
					}
					async run(o, f) {
						if (!g(f)) return;
						const b = f.outlineEntry.cell,
							s = f.notebookEditor.getViewModel()?.getCellIndex(b);
						if (s === void 0) return;
						const l = f.notebookEditor.getViewModel()?.getFoldedLength(s);
						if (l === void 0) return;
						const y = f.notebookEditor.getCellsInRange({
							start: s,
							end: s + l + 1,
						});
						f.notebookEditor.executeNotebookCells(y);
					}
				}
				e.$P4b = h;
				class c extends i.$3X {
					constructor() {
						super({
							id: "notebook.section.foldSection",
							title: {
								...(0, t.localize2)(7973, "Fold Section"),
								mnemonicTitle: (0, t.localize)(7967, null),
							},
							shortTitle: (0, t.localize)(7968, null),
							menu: [
								{
									id: i.$XX.NotebookOutlineActionMenu,
									group: "notebookFolding",
									order: 2,
									when: w.$Kj.and(
										E.$N4b.CellKind.isEqualTo(r.CellKind.Markup),
										E.$N4b.OutlineElementTarget.isEqualTo(
											u.OutlineTarget.OutlinePane,
										),
										E.$N4b.CellHasChildren,
										E.$N4b.CellHasHeader,
										E.$N4b.CellFoldingState.isEqualTo(
											d.CellFoldingState.Expanded,
										),
									),
								},
							],
						});
					}
					async run(o, f) {
						g(f) && this.a(f.outlineEntry, f.notebookEditor);
					}
					a(o, f) {
						const b = f.getContribution(C.$83b.id),
							s = o.index,
							l = o.level,
							y = d.CellFoldingState.Collapsed;
						b.setFoldingStateDown(s, y, l);
					}
				}
				e.$Q4b = c;
				class n extends i.$3X {
					constructor() {
						super({
							id: "notebook.section.expandSection",
							title: {
								...(0, t.localize2)(7974, "Expand Section"),
								mnemonicTitle: (0, t.localize)(7969, null),
							},
							shortTitle: (0, t.localize)(7970, null),
							menu: [
								{
									id: i.$XX.NotebookOutlineActionMenu,
									group: "notebookFolding",
									order: 2,
									when: w.$Kj.and(
										E.$N4b.CellKind.isEqualTo(r.CellKind.Markup),
										E.$N4b.OutlineElementTarget.isEqualTo(
											u.OutlineTarget.OutlinePane,
										),
										E.$N4b.CellHasChildren,
										E.$N4b.CellHasHeader,
										E.$N4b.CellFoldingState.isEqualTo(
											d.CellFoldingState.Collapsed,
										),
									),
								},
							],
						});
					}
					async run(o, f) {
						g(f) && this.a(f.outlineEntry, f.notebookEditor);
					}
					a(o, f) {
						const b = f.getContribution(C.$83b.id),
							s = o.index,
							l = o.level,
							y = d.CellFoldingState.Expanded;
						b.setFoldingStateDown(s, y, l);
					}
				}
				e.$R4b = n;
				function g(p) {
					return !!(p && p.notebookEditor && p.outlineEntry);
				}
				(0, i.$4X)(a), (0, i.$4X)(h), (0, i.$4X)(c), (0, i.$4X)(n);
			},
		),
		
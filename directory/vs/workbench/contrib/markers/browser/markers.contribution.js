import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../platform/action/common/actionCommonCategories.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../base/common/keyCodes.js';
import '../../../../nls.js';
import './markersModel.js';
import './markersView.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/registry/common/platform.js';
import '../common/markers.js';
import './messages.js';
import '../../../common/contributions.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../platform/clipboard/common/clipboardService.js';
import '../../../../base/common/lifecycle.js';
import '../../../services/statusbar/browser/statusbar.js';
import '../../../../platform/markers/common/markers.js';
import '../../../common/views.js';
import '../../../services/views/common/viewsService.js';
import '../../../common/contextkeys.js';
import '../../../browser/parts/views/viewPaneContainer.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../../base/common/codicons.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../browser/parts/views/viewPane.js';
import '../../../services/activity/common/activity.js';
import '../../../browser/parts/views/viewFilter.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../common/configuration.js';
import './markersFileDecorations.js';
define(
		de[4026],
		he([
			1, 0, 8, 81, 99, 43, 27, 4, 988, 4025, 11, 30, 555, 799, 55, 52, 121, 3,
			166, 90, 60, 89, 100, 239, 102, 14, 79, 146, 260, 1224, 10, 224, 3431,
		]),
		function (			ce /*require*/,
			e /*exports*/,
			t /*contextkey*/,
			i /*configurationRegistry*/,
			w /*actionCommonCategories*/,
			E /*keybindingsRegistry*/,
			C /*keyCodes*/,
			d /*nls*/,
			m /*markersModel*/,
			r /*markersView*/,
			u /*actions*/,
			a /*platform*/,
			h /*markers*/,
			c /*messages*/,
			n /*contributions*/,
			g /*lifecycle*/,
			p /*clipboardService*/,
			o /*lifecycle*/,
			f /*statusbar*/,
			b /*markers*/,
			s /*views*/,
			l /*viewsService*/,
			y /*contextkeys*/,
			$ /*viewPaneContainer*/,
			v /*descriptors*/,
			S /*codicons*/,
			I /*iconRegistry*/,
			T /*viewPane*/,
			P /*activity*/,
			k /*viewFilter*/,
			L /*configuration*/,
			D /*configuration*/,
) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(c = xi(c)),
				E.$TX.registerCommandAndKeybindingRule({
					id: h.Markers.MARKER_OPEN_ACTION_ID,
					weight: E.KeybindingWeight.WorkbenchContrib,
					when: t.$Kj.and(h.MarkersContextKeys.MarkerFocusContextKey),
					primary: C.KeyCode.Enter,
					mac: {
						primary: C.KeyCode.Enter,
						secondary: [C.KeyMod.CtrlCmd | C.KeyCode.DownArrow],
					},
					handler: (B, U) => {
						const z = B.get(l.$HMb).getActiveViewWithId(
							h.Markers.MARKERS_VIEW_ID,
						);
						z.openFileAtElement(z.getFocusElement(), !1, !1, !0);
					},
				}),
				E.$TX.registerCommandAndKeybindingRule({
					id: h.Markers.MARKER_OPEN_SIDE_ACTION_ID,
					weight: E.KeybindingWeight.WorkbenchContrib,
					when: t.$Kj.and(h.MarkersContextKeys.MarkerFocusContextKey),
					primary: C.KeyMod.CtrlCmd | C.KeyCode.Enter,
					mac: { primary: C.KeyMod.WinCtrl | C.KeyCode.Enter },
					handler: (B, U) => {
						const z = B.get(l.$HMb).getActiveViewWithId(
							h.Markers.MARKERS_VIEW_ID,
						);
						z.openFileAtElement(z.getFocusElement(), !1, !0, !0);
					},
				}),
				E.$TX.registerCommandAndKeybindingRule({
					id: h.Markers.MARKER_SHOW_PANEL_ID,
					weight: E.KeybindingWeight.WorkbenchContrib,
					when: void 0,
					primary: void 0,
					handler: async (B, U) => {
						await B.get(l.$HMb).openView(h.Markers.MARKERS_VIEW_ID);
					},
				}),
				E.$TX.registerCommandAndKeybindingRule({
					id: h.Markers.MARKER_SHOW_QUICK_FIX,
					weight: E.KeybindingWeight.WorkbenchContrib,
					when: h.MarkersContextKeys.MarkerFocusContextKey,
					primary: C.KeyMod.CtrlCmd | C.KeyCode.Period,
					handler: (B, U) => {
						const z = B.get(l.$HMb).getActiveViewWithId(
								h.Markers.MARKERS_VIEW_ID,
							),
							F = z.getFocusElement();
						F instanceof m.$tRc && z.showQuickFixes(F);
					},
				}),
				a.$Io
					.as(i.$No.Configuration)
					.registerConfiguration({
						...D.$x6,
						properties: {
							"problems.autoReveal": {
								description: c.default.PROBLEMS_PANEL_CONFIGURATION_AUTO_REVEAL,
								type: "boolean",
								default: !0,
							},
							"problems.defaultViewMode": {
								description: c.default.PROBLEMS_PANEL_CONFIGURATION_VIEW_MODE,
								type: "string",
								default: "tree",
								enum: ["table", "tree"],
							},
							"problems.showCurrentInStatus": {
								description:
									c.default.PROBLEMS_PANEL_CONFIGURATION_SHOW_CURRENT_STATUS,
								type: "boolean",
								default: !1,
							},
							"problems.sortOrder": {
								description:
									c.default.PROBLEMS_PANEL_CONFIGURATION_COMPARE_ORDER,
								type: "string",
								default: "severity",
								enum: ["severity", "position"],
								enumDescriptions: [
									c.default.PROBLEMS_PANEL_CONFIGURATION_COMPARE_ORDER_SEVERITY,
									c.default.PROBLEMS_PANEL_CONFIGURATION_COMPARE_ORDER_POSITION,
								],
							},
						},
					});
			const M = (0, I.$$O)(
					"markers-view-icon",
					S.$ak.warning,
					(0, d.localize)(7449, null),
				),
				N = a.$Io
					.as(s.Extensions.ViewContainersRegistry)
					.registerViewContainer(
						{
							id: h.Markers.MARKERS_CONTAINER_ID,
							title: c.default.MARKERS_PANEL_TITLE_PROBLEMS,
							icon: M,
							hideIfEmpty: !0,
							order: 0,
							ctorDescriptor: new v.$Ji($.$ZSb, [
								h.Markers.MARKERS_CONTAINER_ID,
								{ mergeViewWithContainerWhenSingleView: !0 },
							]),
							storageId: h.Markers.MARKERS_VIEW_STORAGE_ID,
						},
						s.ViewContainerLocation.Panel,
						{ doNotRegisterOpenCommand: !0 },
					);
			a.$Io
				.as(s.Extensions.ViewsRegistry)
				.registerViews(
					[
						{
							id: h.Markers.MARKERS_VIEW_ID,
							containerIcon: M,
							name: c.default.MARKERS_PANEL_TITLE_PROBLEMS,
							canToggleVisibility: !1,
							canMoveView: !0,
							ctorDescriptor: new v.$Ji(r.$NRc),
							openCommandActionDescriptor: {
								id: "workbench.actions.view.problems",
								mnemonicTitle: (0, d.localize)(7450, null),
								keybindings: {
									primary: C.KeyMod.CtrlCmd | C.KeyMod.Shift | C.KeyCode.KeyM,
								},
								order: 0,
							},
						},
					],
					N,
				);
			const A = a.$Io.as(n.Extensions.Workbench);
			(0, u.$4X)(
				class extends T.$WMb {
					constructor() {
						super({
							id: `workbench.actions.table.${h.Markers.MARKERS_VIEW_ID}.viewAsTree`,
							title: (0, d.localize)(7451, null),
							menu: {
								id: u.$XX.ViewTitle,
								when: t.$Kj.and(
									t.$Kj.equals("view", h.Markers.MARKERS_VIEW_ID),
									h.MarkersContextKeys.MarkersViewModeContextKey.isEqualTo(
										h.MarkersViewMode.Table,
									),
								),
								group: "navigation",
								order: 3,
							},
							icon: S.$ak.listTree,
							viewId: h.Markers.MARKERS_VIEW_ID,
						});
					}
					async runInView(B, U) {
						U.setViewMode(h.MarkersViewMode.Tree);
					}
				},
			),
				(0, u.$4X)(
					class extends T.$WMb {
						constructor() {
							super({
								id: `workbench.actions.table.${h.Markers.MARKERS_VIEW_ID}.viewAsTable`,
								title: (0, d.localize)(7452, null),
								menu: {
									id: u.$XX.ViewTitle,
									when: t.$Kj.and(
										t.$Kj.equals("view", h.Markers.MARKERS_VIEW_ID),
										h.MarkersContextKeys.MarkersViewModeContextKey.isEqualTo(
											h.MarkersViewMode.Tree,
										),
									),
									group: "navigation",
									order: 3,
								},
								icon: S.$ak.listFlat,
								viewId: h.Markers.MARKERS_VIEW_ID,
							});
						}
						async runInView(B, U) {
							U.setViewMode(h.MarkersViewMode.Table);
						}
					},
				),
				(0, u.$4X)(
					class extends T.$WMb {
						constructor() {
							super({
								id: `workbench.actions.${h.Markers.MARKERS_VIEW_ID}.toggleErrors`,
								title: (0, d.localize)(7453, null),
								category: (0, d.localize)(7454, null),
								toggled: h.MarkersContextKeys.ShowErrorsFilterContextKey,
								menu: {
									id: k.$OMb,
									group: "1_filter",
									when: t.$Kj.equals("view", h.Markers.MARKERS_VIEW_ID),
									order: 1,
								},
								viewId: h.Markers.MARKERS_VIEW_ID,
							});
						}
						async runInView(B, U) {
							U.filters.showErrors = !U.filters.showErrors;
						}
					},
				),
				(0, u.$4X)(
					class extends T.$WMb {
						constructor() {
							super({
								id: `workbench.actions.${h.Markers.MARKERS_VIEW_ID}.toggleWarnings`,
								title: (0, d.localize)(7455, null),
								category: (0, d.localize)(7456, null),
								toggled: h.MarkersContextKeys.ShowWarningsFilterContextKey,
								menu: {
									id: k.$OMb,
									group: "1_filter",
									when: t.$Kj.equals("view", h.Markers.MARKERS_VIEW_ID),
									order: 2,
								},
								viewId: h.Markers.MARKERS_VIEW_ID,
							});
						}
						async runInView(B, U) {
							U.filters.showWarnings = !U.filters.showWarnings;
						}
					},
				),
				(0, u.$4X)(
					class extends T.$WMb {
						constructor() {
							super({
								id: `workbench.actions.${h.Markers.MARKERS_VIEW_ID}.toggleInfos`,
								title: (0, d.localize)(7457, null),
								category: (0, d.localize)(7458, null),
								toggled: h.MarkersContextKeys.ShowInfoFilterContextKey,
								menu: {
									id: k.$OMb,
									group: "1_filter",
									when: t.$Kj.equals("view", h.Markers.MARKERS_VIEW_ID),
									order: 3,
								},
								viewId: h.Markers.MARKERS_VIEW_ID,
							});
						}
						async runInView(B, U) {
							U.filters.showInfos = !U.filters.showInfos;
						}
					},
				),
				(0, u.$4X)(
					class extends T.$WMb {
						constructor() {
							super({
								id: `workbench.actions.${h.Markers.MARKERS_VIEW_ID}.toggleActiveFile`,
								title: (0, d.localize)(7459, null),
								category: (0, d.localize)(7460, null),
								toggled: h.MarkersContextKeys.ShowActiveFileFilterContextKey,
								menu: {
									id: k.$OMb,
									group: "2_filter",
									when: t.$Kj.equals("view", h.Markers.MARKERS_VIEW_ID),
									order: 1,
								},
								viewId: h.Markers.MARKERS_VIEW_ID,
							});
						}
						async runInView(B, U) {
							U.filters.activeFile = !U.filters.activeFile;
						}
					},
				),
				(0, u.$4X)(
					class extends T.$WMb {
						constructor() {
							super({
								id: `workbench.actions.${h.Markers.MARKERS_VIEW_ID}.toggleExcludedFiles`,
								title: (0, d.localize)(7461, null),
								category: (0, d.localize)(7462, null),
								toggled:
									h.MarkersContextKeys.ShowExcludedFilesFilterContextKey.negate(),
								menu: {
									id: k.$OMb,
									group: "2_filter",
									when: t.$Kj.equals("view", h.Markers.MARKERS_VIEW_ID),
									order: 2,
								},
								viewId: h.Markers.MARKERS_VIEW_ID,
							});
						}
						async runInView(B, U) {
							U.filters.excludedFiles = !U.filters.excludedFiles;
						}
					},
				),
				(0, u.$4X)(
					class extends u.$3X {
						constructor() {
							super({
								id: "workbench.action.problems.focus",
								title: c.default.MARKERS_PANEL_SHOW_LABEL,
								category: w.$ck.View,
								f1: !0,
							});
						}
						async run(B) {
							B.get(l.$HMb).openView(h.Markers.MARKERS_VIEW_ID, !0);
						}
					},
				),
				(0, u.$4X)(
					class extends T.$WMb {
						constructor() {
							const B = t.$Kj.and(
								y.$zQb.isEqualTo(h.Markers.MARKERS_VIEW_ID),
								h.MarkersContextKeys.MarkersTreeVisibilityContextKey,
								h.MarkersContextKeys.RelatedInformationFocusContextKey.toNegated(),
							);
							super({
								id: h.Markers.MARKER_COPY_ACTION_ID,
								title: (0, d.localize2)(7479, "Copy"),
								menu: {
									id: u.$XX.ProblemsPanelContext,
									when: B,
									group: "navigation",
								},
								keybinding: {
									weight: E.KeybindingWeight.WorkbenchContrib,
									primary: C.KeyMod.CtrlCmd | C.KeyCode.KeyC,
									when: B,
								},
								viewId: h.Markers.MARKERS_VIEW_ID,
							});
						}
						async runInView(B, U) {
							const z = B.get(p.$Vxb),
								F = U.getFocusedSelectedElements() || U.getAllResourceMarkers(),
								x = [],
								H = (q) => {
									x.includes(q) || x.push(q);
								};
							for (const q of F)
								q instanceof m.$sRc
									? q.markers.forEach(H)
									: q instanceof m.$tRc && H(q);
							x.length && (await z.writeText(`[${x}]`));
						}
					},
				),
				(0, u.$4X)(
					class extends T.$WMb {
						constructor() {
							super({
								id: h.Markers.MARKER_COPY_MESSAGE_ACTION_ID,
								title: (0, d.localize2)(7480, "Copy Message"),
								menu: {
									id: u.$XX.ProblemsPanelContext,
									when: h.MarkersContextKeys.MarkerFocusContextKey,
									group: "navigation",
								},
								viewId: h.Markers.MARKERS_VIEW_ID,
							});
						}
						async runInView(B, U) {
							const z = B.get(p.$Vxb),
								F = U.getFocusElement();
							F instanceof m.$tRc && (await z.writeText(F.marker.message));
						}
					},
				),
				(0, u.$4X)(
					class extends T.$WMb {
						constructor() {
							super({
								id: h.Markers.RELATED_INFORMATION_COPY_MESSAGE_ACTION_ID,
								title: (0, d.localize2)(7481, "Copy Message"),
								menu: {
									id: u.$XX.ProblemsPanelContext,
									when: h.MarkersContextKeys.RelatedInformationFocusContextKey,
									group: "navigation",
								},
								viewId: h.Markers.MARKERS_VIEW_ID,
							});
						}
						async runInView(B, U) {
							const z = B.get(p.$Vxb),
								F = U.getFocusElement();
							F instanceof m.$vRc && (await z.writeText(F.raw.message));
						}
					},
				),
				(0, u.$4X)(
					class extends T.$WMb {
						constructor() {
							super({
								id: h.Markers.FOCUS_PROBLEMS_FROM_FILTER,
								title: (0, d.localize)(7463, null),
								keybinding: {
									when: h.MarkersContextKeys.MarkerViewFilterFocusContextKey,
									weight: E.KeybindingWeight.WorkbenchContrib,
									primary: C.KeyMod.CtrlCmd | C.KeyCode.DownArrow,
								},
								viewId: h.Markers.MARKERS_VIEW_ID,
							});
						}
						async runInView(B, U) {
							U.focus();
						}
					},
				),
				(0, u.$4X)(
					class extends T.$WMb {
						constructor() {
							super({
								id: h.Markers.MARKERS_VIEW_FOCUS_FILTER,
								title: (0, d.localize)(7464, null),
								keybinding: {
									when: y.$zQb.isEqualTo(h.Markers.MARKERS_VIEW_ID),
									weight: E.KeybindingWeight.WorkbenchContrib,
									primary: C.KeyMod.CtrlCmd | C.KeyCode.KeyF,
								},
								viewId: h.Markers.MARKERS_VIEW_ID,
							});
						}
						async runInView(B, U) {
							U.focusFilter();
						}
					},
				),
				(0, u.$4X)(
					class extends T.$WMb {
						constructor() {
							super({
								id: h.Markers.MARKERS_VIEW_SHOW_MULTILINE_MESSAGE,
								title: (0, d.localize2)(7482, "Show message in multiple lines"),
								category: (0, d.localize)(7465, null),
								menu: {
									id: u.$XX.CommandPalette,
									when: t.$Kj.has((0, y.$AQb)(h.Markers.MARKERS_VIEW_ID)),
								},
								viewId: h.Markers.MARKERS_VIEW_ID,
							});
						}
						async runInView(B, U) {
							U.setMultiline(!0);
						}
					},
				),
				(0, u.$4X)(
					class extends T.$WMb {
						constructor() {
							super({
								id: h.Markers.MARKERS_VIEW_SHOW_SINGLELINE_MESSAGE,
								title: (0, d.localize2)(7483, "Show message in single line"),
								category: (0, d.localize)(7466, null),
								menu: {
									id: u.$XX.CommandPalette,
									when: t.$Kj.has((0, y.$AQb)(h.Markers.MARKERS_VIEW_ID)),
								},
								viewId: h.Markers.MARKERS_VIEW_ID,
							});
						}
						async runInView(B, U) {
							U.setMultiline(!1);
						}
					},
				),
				(0, u.$4X)(
					class extends T.$WMb {
						constructor() {
							super({
								id: h.Markers.MARKERS_VIEW_CLEAR_FILTER_TEXT,
								title: (0, d.localize)(7467, null),
								category: (0, d.localize)(7468, null),
								keybinding: {
									when: h.MarkersContextKeys.MarkerViewFilterFocusContextKey,
									weight: E.KeybindingWeight.WorkbenchContrib,
									primary: C.KeyCode.Escape,
								},
								viewId: h.Markers.MARKERS_VIEW_ID,
							});
						}
						async runInView(B, U) {
							U.clearFilterText();
						}
					},
				),
				(0, u.$4X)(
					class extends T.$WMb {
						constructor() {
							super({
								id: `workbench.actions.treeView.${h.Markers.MARKERS_VIEW_ID}.collapseAll`,
								title: (0, d.localize)(7469, null),
								menu: {
									id: u.$XX.ViewTitle,
									when: t.$Kj.and(
										t.$Kj.equals("view", h.Markers.MARKERS_VIEW_ID),
										h.MarkersContextKeys.MarkersViewModeContextKey.isEqualTo(
											h.MarkersViewMode.Tree,
										),
									),
									group: "navigation",
									order: 2,
								},
								icon: S.$ak.collapseAll,
								viewId: h.Markers.MARKERS_VIEW_ID,
							});
						}
						async runInView(B, U) {
							return U.collapseAll();
						}
					},
				),
				(0, u.$4X)(
					class extends u.$3X {
						constructor() {
							super({
								id: h.Markers.TOGGLE_MARKERS_VIEW_ACTION_ID,
								title: c.default.MARKERS_PANEL_TOGGLE_LABEL,
							});
						}
						async run(B) {
							const U = B.get(l.$HMb);
							U.isViewVisible(h.Markers.MARKERS_VIEW_ID)
								? U.closeView(h.Markers.MARKERS_VIEW_ID)
								: U.openView(h.Markers.MARKERS_VIEW_ID, !0);
						}
					},
				);
			let R = class extends o.$1c {
				constructor(U, z, F) {
					super(),
						(this.c = U),
						(this.f = z),
						(this.g = F),
						(this.a = this.D(
							this.f.addEntry(
								this.h(),
								"status.problems",
								f.StatusbarAlignment.LEFT,
								50,
							),
						));
					const x = () => {
						this.b = this.f.addEntry(
							this.j(),
							"status.problemsVisibility",
							f.StatusbarAlignment.LEFT,
							49,
						);
					};
					let H = this.g.getValue("problems.visibility");
					H || x(),
						this.D(
							this.c.onMarkerChanged(() => {
								this.a.update(this.h());
							}),
						),
						this.D(
							this.g.onDidChangeConfiguration((q) => {
								q.affectsConfiguration("problems.visibility") &&
									(this.a.update(this.h()),
									(H = this.g.getValue("problems.visibility")),
									!H && !this.b
										? x()
										: H && this.b && (this.b.dispose(), (this.b = void 0)));
							}),
						);
				}
				h() {
					const U = this.c.getStatistics(),
						z = this.m(U);
					return {
						name: (0, d.localize)(7470, null),
						text: this.q(U),
						ariaLabel: z,
						tooltip: z,
						command: "workbench.actions.view.toggleProblems",
					};
				}
				j() {
					this.f.updateEntryVisibility("status.problemsVisibility", !0);
					const U = "workbench.action.openSettings",
						z = "@id:problems.visibility",
						F = (0, d.localize)(7471, null);
					return {
						name: (0, d.localize)(7472, null),
						text: "$(whole-word)",
						ariaLabel: F,
						tooltip: F,
						kind: "warning",
						command: { title: U, arguments: [z], id: U },
					};
				}
				m(U) {
					const z = (q) => (0, d.localize)(7473, null, q),
						F = (q) => (0, d.localize)(7474, null, q),
						x = (q) => (0, d.localize)(7475, null, q),
						H = [];
					return (
						U.errors > 0 && H.push(z(U.errors)),
						U.warnings > 0 && H.push(F(U.warnings)),
						U.infos > 0 && H.push(x(U.infos)),
						H.length === 0 ? (0, d.localize)(7476, null) : H.join(", ")
					);
				}
				q(U) {
					const z = [];
					return (
						z.push("$(error) " + this.r(U.errors)),
						z.push("$(warning) " + this.r(U.warnings)),
						U.infos > 0 && z.push("$(info) " + this.r(U.infos)),
						z.join(" ")
					);
				}
				r(U) {
					const z = (0, d.localize)(7477, null);
					return U > 9999
						? z
						: U > 999
							? U.toString().charAt(0) + "K"
							: U.toString();
				}
			};
			(R = Ne([j(0, b.$aM), j(1, f.$d6b), j(2, L.$gj)], R)),
				A.registerWorkbenchContribution(R, g.LifecyclePhase.Restored);
			let O = class extends o.$1c {
				constructor(U, z) {
					super(),
						(this.b = U),
						(this.c = z),
						(this.a = this.D(new o.$2c())),
						this.D(this.c.onMarkerChanged(() => this.f())),
						this.f();
				}
				f() {
					const { errors: U, warnings: z, infos: F } = this.c.getStatistics(),
						x = U + z + F;
					if (x > 0) {
						const H = (0, d.localize)(7478, null, x);
						this.a.value = this.b.showViewActivity(h.Markers.MARKERS_VIEW_ID, {
							badge: new P.$8qc(x, () => H),
						});
					} else this.a.value = void 0;
				}
			};
			(O = Ne([j(0, P.$7qc), j(1, b.$aM)], O)),
				A.registerWorkbenchContribution(O, g.LifecyclePhase.Restored);
		},
	)

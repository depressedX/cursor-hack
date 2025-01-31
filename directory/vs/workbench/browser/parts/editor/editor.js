import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/types.js';
import '../../../../base/common/verifier.js';
define(de[548], he([1, 0, 7, 28, 2225]), function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*types*/,
 w /*verifier*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$FEb = e.$EEb = e.$DEb = void 0),
				(e.$GEb = E),
				(e.$HEb = C),
				(e.$IEb = m),
				(e.$DEb = new t.$pgb(220, 70)),
				(e.$EEb = new t.$pgb(
					Number.POSITIVE_INFINITY,
					Number.POSITIVE_INFINITY,
				)),
				(e.$FEb = {
					showTabs: "multiple",
					highlightModifiedTabs: !1,
					tabActionLocation: "right",
					tabActionCloseVisibility: !0,
					tabActionUnpinVisibility: !0,
					alwaysShowEditorActions: !1,
					tabSizing: "fit",
					tabSizingFixedMinWidth: 50,
					tabSizingFixedMaxWidth: 160,
					pinnedTabSizing: "normal",
					pinnedTabsOnSeparateRow: !1,
					tabHeight: "default",
					preventPinnedEditorClose: "keyboardAndMouse",
					titleScrollbarSizing: "default",
					focusRecentEditorAfterClose: !0,
					showIcons: !0,
					hasIcons: !0,
					enablePreview: !0,
					openPositioning: "right",
					openSideBySideDirection: "right",
					closeEmptyGroups: !0,
					labelFormat: "default",
					splitSizing: "auto",
					splitOnDragAndDrop: !0,
					dragToOpenWindow: !0,
					centeredLayoutFixedWidth: !1,
					doubleClickTabToToggleEditorGroupSizes: "expand",
					editorActionsLocation: "default",
					wrapTabs: !1,
					enablePreviewFromQuickOpen: !1,
					scrollToSwitchTabs: !1,
					enablePreviewFromCodeNavigation: !1,
					closeOnFileDelete: !1,
					mouseBackForwardToNavigate: !0,
					restoreViewState: !0,
					splitInGroupLayout: "horizontal",
					revealIfOpen: !1,
					get limit() {
						return {
							enabled: !1,
							value: 10,
							perEditorGroup: !1,
							excludeDirty: !1,
						};
					},
					get decorations() {
						return { badges: !0, colors: !0 };
					},
					get autoLockGroups() {
						return new Set();
					},
				});
			function E(r) {
				return (
					r.affectsConfiguration("workbench.editor") ||
					r.affectsConfiguration("workbench.iconTheme") ||
					r.affectsConfiguration("window.density")
				);
			}
			function C(r, u) {
				const a = { ...e.$FEb, hasIcons: u.getFileIconTheme().hasFileIcons },
					h = r.getValue();
				if (h?.workbench?.editor)
					if (
						(Object.assign(a, h.workbench.editor),
						(0, i.$ng)(h.workbench.editor.autoLockGroups))
					) {
						a.autoLockGroups = e.$FEb.autoLockGroups;
						for (const [n, g] of Object.entries(
							h.workbench.editor.autoLockGroups,
						))
							g === !0 && a.autoLockGroups.add(n);
					} else a.autoLockGroups = e.$FEb.autoLockGroups;
				const c = r.getValue();
				return (
					c?.window?.density?.editorTabHeight &&
						(a.tabHeight = c.window.density.editorTabHeight),
					d(a)
				);
			}
			function d(r) {
				return (
					typeof r.showTabs == "boolean" &&
						(r.showTabs = r.showTabs ? "multiple" : "single"),
					(0, w.$cqb)(
						{
							wrapTabs: new w.$0pb(e.$FEb.wrapTabs),
							scrollToSwitchTabs: new w.$0pb(e.$FEb.scrollToSwitchTabs),
							highlightModifiedTabs: new w.$0pb(e.$FEb.highlightModifiedTabs),
							tabActionCloseVisibility: new w.$0pb(
								e.$FEb.tabActionCloseVisibility,
							),
							tabActionUnpinVisibility: new w.$0pb(
								e.$FEb.tabActionUnpinVisibility,
							),
							alwaysShowEditorActions: new w.$0pb(
								e.$FEb.alwaysShowEditorActions,
							),
							pinnedTabsOnSeparateRow: new w.$0pb(
								e.$FEb.pinnedTabsOnSeparateRow,
							),
							focusRecentEditorAfterClose: new w.$0pb(
								e.$FEb.focusRecentEditorAfterClose,
							),
							showIcons: new w.$0pb(e.$FEb.showIcons),
							enablePreview: new w.$0pb(e.$FEb.enablePreview),
							enablePreviewFromQuickOpen: new w.$0pb(
								e.$FEb.enablePreviewFromQuickOpen,
							),
							enablePreviewFromCodeNavigation: new w.$0pb(
								e.$FEb.enablePreviewFromCodeNavigation,
							),
							closeOnFileDelete: new w.$0pb(e.$FEb.closeOnFileDelete),
							closeEmptyGroups: new w.$0pb(e.$FEb.closeEmptyGroups),
							revealIfOpen: new w.$0pb(e.$FEb.revealIfOpen),
							mouseBackForwardToNavigate: new w.$0pb(
								e.$FEb.mouseBackForwardToNavigate,
							),
							restoreViewState: new w.$0pb(e.$FEb.restoreViewState),
							splitOnDragAndDrop: new w.$0pb(e.$FEb.splitOnDragAndDrop),
							dragToOpenWindow: new w.$0pb(e.$FEb.dragToOpenWindow),
							centeredLayoutFixedWidth: new w.$0pb(
								e.$FEb.centeredLayoutFixedWidth,
							),
							hasIcons: new w.$0pb(e.$FEb.hasIcons),
							tabSizingFixedMinWidth: new w.$$pb(e.$FEb.tabSizingFixedMinWidth),
							tabSizingFixedMaxWidth: new w.$$pb(e.$FEb.tabSizingFixedMaxWidth),
							showTabs: new w.$aqb(e.$FEb.showTabs, [
								"multiple",
								"single",
								"none",
							]),
							tabActionLocation: new w.$aqb(e.$FEb.tabActionLocation, [
								"left",
								"right",
							]),
							tabSizing: new w.$aqb(e.$FEb.tabSizing, [
								"fit",
								"shrink",
								"fixed",
							]),
							pinnedTabSizing: new w.$aqb(e.$FEb.pinnedTabSizing, [
								"normal",
								"compact",
								"shrink",
							]),
							tabHeight: new w.$aqb(e.$FEb.tabHeight, ["default", "compact"]),
							preventPinnedEditorClose: new w.$aqb(
								e.$FEb.preventPinnedEditorClose,
								["keyboardAndMouse", "keyboard", "mouse", "never"],
							),
							titleScrollbarSizing: new w.$aqb(e.$FEb.titleScrollbarSizing, [
								"default",
								"large",
							]),
							openPositioning: new w.$aqb(e.$FEb.openPositioning, [
								"left",
								"right",
								"first",
								"last",
							]),
							openSideBySideDirection: new w.$aqb(
								e.$FEb.openSideBySideDirection,
								["right", "down"],
							),
							labelFormat: new w.$aqb(e.$FEb.labelFormat, [
								"default",
								"short",
								"medium",
								"long",
							]),
							splitInGroupLayout: new w.$aqb(e.$FEb.splitInGroupLayout, [
								"vertical",
								"horizontal",
							]),
							splitSizing: new w.$aqb(e.$FEb.splitSizing, [
								"distribute",
								"split",
								"auto",
							]),
							doubleClickTabToToggleEditorGroupSizes: new w.$aqb(
								e.$FEb.doubleClickTabToToggleEditorGroupSizes,
								["maximize", "expand", "off"],
							),
							editorActionsLocation: new w.$aqb(e.$FEb.editorActionsLocation, [
								"default",
								"titleBar",
								"hidden",
							]),
							autoLockGroups: new w.$_pb(e.$FEb.autoLockGroups),
							limit: new w.$bqb(e.$FEb.limit, {
								enabled: new w.$0pb(e.$FEb.limit.enabled),
								value: new w.$$pb(e.$FEb.limit.value),
								perEditorGroup: new w.$0pb(e.$FEb.limit.perEditorGroup),
								excludeDirty: new w.$0pb(e.$FEb.limit.excludeDirty),
							}),
							decorations: new w.$bqb(e.$FEb.decorations, {
								badges: new w.$0pb(e.$FEb.decorations.badges),
								colors: new w.$0pb(e.$FEb.decorations.colors),
							}),
						},
						r,
					)
				);
			}
			function m(r, u, a) {
				return !u || !r.activeEditor || u.matches(r.activeEditor)
					? { ...a, viewState: r.activeEditorPane?.getViewState() }
					: a || Object.create(null);
			}
		})

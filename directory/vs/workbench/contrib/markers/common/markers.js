define(de[555], he([1, 0, 8]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.MarkersContextKeys = e.Markers = e.MarkersViewMode = void 0);
			var i;
			(function (C) {
				(C.Table = "table"), (C.Tree = "tree");
			})(i || (e.MarkersViewMode = i = {}));
			var w;
			(function (C) {
				(C.MARKERS_CONTAINER_ID = "workbench.panel.markers"),
					(C.MARKERS_VIEW_ID = "workbench.panel.markers.view"),
					(C.MARKERS_VIEW_STORAGE_ID = "workbench.panel.markers"),
					(C.MARKER_COPY_ACTION_ID = "problems.action.copy"),
					(C.MARKER_COPY_MESSAGE_ACTION_ID = "problems.action.copyMessage"),
					(C.RELATED_INFORMATION_COPY_MESSAGE_ACTION_ID =
						"problems.action.copyRelatedInformationMessage"),
					(C.FOCUS_PROBLEMS_FROM_FILTER =
						"problems.action.focusProblemsFromFilter"),
					(C.MARKERS_VIEW_FOCUS_FILTER = "problems.action.focusFilter"),
					(C.MARKERS_VIEW_CLEAR_FILTER_TEXT =
						"problems.action.clearFilterText"),
					(C.MARKERS_VIEW_SHOW_MULTILINE_MESSAGE =
						"problems.action.showMultilineMessage"),
					(C.MARKERS_VIEW_SHOW_SINGLELINE_MESSAGE =
						"problems.action.showSinglelineMessage"),
					(C.MARKER_OPEN_ACTION_ID = "problems.action.open"),
					(C.MARKER_OPEN_SIDE_ACTION_ID = "problems.action.openToSide"),
					(C.MARKER_SHOW_PANEL_ID = "workbench.action.showErrorsWarnings"),
					(C.MARKER_SHOW_QUICK_FIX = "problems.action.showQuickFixes"),
					(C.TOGGLE_MARKERS_VIEW_ACTION_ID =
						"workbench.actions.view.toggleProblems");
			})(w || (e.Markers = w = {}));
			var E;
			(function (C) {
				(C.MarkersViewModeContextKey = new t.$5j("problemsViewMode", i.Tree)),
					(C.MarkersTreeVisibilityContextKey = new t.$5j(
						"problemsVisibility",
						!1,
					)),
					(C.MarkerFocusContextKey = new t.$5j("problemFocus", !1)),
					(C.MarkerViewFilterFocusContextKey = new t.$5j(
						"problemsFilterFocus",
						!1,
					)),
					(C.RelatedInformationFocusContextKey = new t.$5j(
						"relatedInformationFocus",
						!1,
					)),
					(C.ShowErrorsFilterContextKey = new t.$5j(
						"problems.filter.errors",
						!0,
					)),
					(C.ShowWarningsFilterContextKey = new t.$5j(
						"problems.filter.warnings",
						!0,
					)),
					(C.ShowInfoFilterContextKey = new t.$5j("problems.filter.info", !0)),
					(C.ShowActiveFileFilterContextKey = new t.$5j(
						"problems.filter.activeFile",
						!1,
					)),
					(C.ShowExcludedFilesFilterContextKey = new t.$5j(
						"problems.filter.excludedFiles",
						!0,
					));
			})(E || (e.MarkersContextKeys = E = {}));
		});
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	
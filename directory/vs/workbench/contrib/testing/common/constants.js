import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/iconLabels.js';
import '../../../../nls.js';
import './testTypes.js';
define(de[353], he([1, 0, 274, 4, 185]), function (ce /*require*/,
 e /*exports*/,
 t /*iconLabels*/,
 i /*nls*/,
 w /*testTypes*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.TestCommandId =
					e.$Aqc =
					e.$zqc =
					e.TestExplorerViewSorting =
					e.TestExplorerViewMode =
					e.Testing =
						void 0);
			var E;
			(function (a) {
				(a.ViewletId = "workbench.view.extension.test"),
					(a.ExplorerViewId = "workbench.view.testing"),
					(a.OutputPeekContributionId = "editor.contrib.testingOutputPeek"),
					(a.DecorationsContributionId = "editor.contrib.testingDecorations"),
					(a.CoverageDecorationsContributionId =
						"editor.contrib.coverageDecorations"),
					(a.CoverageViewId = "workbench.view.testCoverage"),
					(a.ResultsPanelId = "workbench.panel.testResults"),
					(a.ResultsViewId = "workbench.panel.testResults.view"),
					(a.MessageLanguageId = "vscodeInternalTestMessage");
			})(E || (e.Testing = E = {}));
			var C;
			(function (a) {
				(a.List = "list"), (a.Tree = "true");
			})(C || (e.TestExplorerViewMode = C = {}));
			var d;
			(function (a) {
				(a.ByLocation = "location"),
					(a.ByStatus = "status"),
					(a.ByDuration = "duration");
			})(d || (e.TestExplorerViewSorting = d = {}));
			const m = {
					[w.TestResultState.Errored]: (0, i.localize)(10904, null),
					[w.TestResultState.Failed]: (0, i.localize)(10905, null),
					[w.TestResultState.Passed]: (0, i.localize)(10906, null),
					[w.TestResultState.Queued]: (0, i.localize)(10907, null),
					[w.TestResultState.Running]: (0, i.localize)(10908, null),
					[w.TestResultState.Skipped]: (0, i.localize)(10909, null),
					[w.TestResultState.Unset]: (0, i.localize)(10910, null),
				},
				r = (a, h) => (0, i.localize)(10911, null, (0, t.$$k)(a), m[h]);
			(e.$zqc = r),
				(e.$Aqc = {
					[w.TestRunProfileBitset.Debug]: (0, i.localize)(10912, null),
					[w.TestRunProfileBitset.Run]: (0, i.localize)(10913, null),
					[w.TestRunProfileBitset.Coverage]: (0, i.localize)(10914, null),
				});
			var u;
			(function (a) {
				(a.CancelTestRefreshAction = "testing.cancelTestRefresh"),
					(a.CancelTestRunAction = "testing.cancelRun"),
					(a.ClearTestResultsAction = "testing.clearTestResults"),
					(a.CollapseAllAction = "testing.collapseAll"),
					(a.ConfigureTestProfilesAction = "testing.configureProfile"),
					(a.ContinousRunUsingForTest = "testing.continuousRunUsingForTest"),
					(a.CoverageAtCursor = "testing.coverageAtCursor"),
					(a.CoverageByUri = "testing.coverage.uri"),
					(a.CoverageClear = "testing.coverage.close"),
					(a.CoverageCurrentFile = "testing.coverageCurrentFile"),
					(a.CoverageFilterToTest = "testing.coverageFilterToTest"),
					(a.CoverageFilterToTestInEditor =
						"testing.coverageFilterToTestInEditor"),
					(a.CoverageLastRun = "testing.coverageLastRun"),
					(a.CoverageSelectedAction = "testing.coverageSelected"),
					(a.CoverageToggleToolbar = "testing.coverageToggleToolbar"),
					(a.CoverageViewChangeSorting = "testing.coverageViewChangeSorting"),
					(a.DebugAction = "testing.debug"),
					(a.DebugAllAction = "testing.debugAll"),
					(a.DebugAtCursor = "testing.debugAtCursor"),
					(a.DebugByUri = "testing.debug.uri"),
					(a.DebugCurrentFile = "testing.debugCurrentFile"),
					(a.DebugFailedTests = "testing.debugFailTests"),
					(a.DebugLastRun = "testing.debugLastRun"),
					(a.DebugSelectedAction = "testing.debugSelected"),
					(a.FilterAction = "workbench.actions.treeView.testExplorer.filter"),
					(a.GetExplorerSelection = "_testing.getExplorerSelection"),
					(a.GetSelectedProfiles = "testing.getSelectedProfiles"),
					(a.GoToTest = "testing.editFocusedTest"),
					(a.GoToRelatedTest = "testing.goToRelatedTest"),
					(a.PeekRelatedTest = "testing.peekRelatedTest"),
					(a.GoToRelatedCode = "testing.goToRelatedCode"),
					(a.PeekRelatedCode = "testing.peekRelatedCode"),
					(a.HideTestAction = "testing.hideTest"),
					(a.OpenCoverage = "testing.openCoverage"),
					(a.OpenOutputPeek = "testing.openOutputPeek"),
					(a.RefreshTestsAction = "testing.refreshTests"),
					(a.ReRunFailedTests = "testing.reRunFailTests"),
					(a.ReRunLastRun = "testing.reRunLastRun"),
					(a.RunAction = "testing.run"),
					(a.RunAllAction = "testing.runAll"),
					(a.RunAllWithCoverageAction = "testing.coverageAll"),
					(a.RunAtCursor = "testing.runAtCursor"),
					(a.RunByUri = "testing.run.uri"),
					(a.RunCurrentFile = "testing.runCurrentFile"),
					(a.RunSelectedAction = "testing.runSelected"),
					(a.RunUsingProfileAction = "testing.runUsing"),
					(a.RunWithCoverageAction = "testing.coverage"),
					(a.SearchForTestExtension = "testing.searchForTestExtension"),
					(a.SelectDefaultTestProfiles = "testing.selectDefaultTestProfiles"),
					(a.ShowMostRecentOutputAction = "testing.showMostRecentOutput"),
					(a.StartContinousRun = "testing.startContinuousRun"),
					(a.StopContinousRun = "testing.stopContinuousRun"),
					(a.TestingSortByDurationAction = "testing.sortByDuration"),
					(a.TestingSortByLocationAction = "testing.sortByLocation"),
					(a.TestingSortByStatusAction = "testing.sortByStatus"),
					(a.TestingViewAsListAction = "testing.viewAsList"),
					(a.TestingViewAsTreeAction = "testing.viewAsTree"),
					(a.ToggleContinousRunForTest = "testing.toggleContinuousRunForTest"),
					(a.ToggleInlineTestOutput = "testing.toggleInlineTestOutput"),
					(a.UnhideAllTestsAction = "testing.unhideAllTests"),
					(a.UnhideTestAction = "testing.unhideTest");
			})(u || (e.TestCommandId = u = {}));
		})

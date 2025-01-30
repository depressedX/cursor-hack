import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/contextkey/common/contextkey.js';
import './constants.js';
import './testTypes.js';
define(de[380], he([1, 0, 4, 8, 353, 185]), function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*contextkey*/,
 w /*constants*/,
 E /*testTypes*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.TestingContextKeys = void 0);
			var C;
			(function (d) {
				(d.providerCount = new i.$5j("testing.providerCount", 0)),
					(d.canRefreshTests = new i.$5j("testing.canRefresh", !1, {
						type: "boolean",
						description: (0, t.localize)(10916, null),
					})),
					(d.isRefreshingTests = new i.$5j("testing.isRefreshing", !1, {
						type: "boolean",
						description: (0, t.localize)(10917, null),
					})),
					(d.isContinuousModeOn = new i.$5j("testing.isContinuousModeOn", !1, {
						type: "boolean",
						description: (0, t.localize)(10918, null),
					})),
					(d.hasDebuggableTests = new i.$5j("testing.hasDebuggableTests", !1, {
						type: "boolean",
						description: (0, t.localize)(10919, null),
					})),
					(d.hasRunnableTests = new i.$5j("testing.hasRunnableTests", !1, {
						type: "boolean",
						description: (0, t.localize)(10920, null),
					})),
					(d.hasCoverableTests = new i.$5j("testing.hasCoverableTests", !1, {
						type: "boolean",
						description: (0, t.localize)(10921, null),
					})),
					(d.hasNonDefaultProfile = new i.$5j(
						"testing.hasNonDefaultProfile",
						!1,
						{ type: "boolean", description: (0, t.localize)(10922, null) },
					)),
					(d.hasConfigurableProfile = new i.$5j(
						"testing.hasConfigurableProfile",
						!1,
						{ type: "boolean", description: (0, t.localize)(10923, null) },
					)),
					(d.supportsContinuousRun = new i.$5j(
						"testing.supportsContinuousRun",
						!1,
						{ type: "boolean", description: (0, t.localize)(10924, null) },
					)),
					(d.isParentRunningContinuously = new i.$5j(
						"testing.isParentRunningContinuously",
						!1,
						{ type: "boolean", description: (0, t.localize)(10925, null) },
					)),
					(d.activeEditorHasTests = new i.$5j(
						"testing.activeEditorHasTests",
						!1,
						{ type: "boolean", description: (0, t.localize)(10926, null) },
					)),
					(d.cursorInsideTestRange = new i.$5j(
						"testing.cursorInsideTestRange",
						!1,
						{ type: "boolean", description: (0, t.localize)(10927, null) },
					)),
					(d.isTestCoverageOpen = new i.$5j("testing.isTestCoverageOpen", !1, {
						type: "boolean",
						description: (0, t.localize)(10928, null),
					})),
					(d.hasPerTestCoverage = new i.$5j("testing.hasPerTestCoverage", !1, {
						type: "boolean",
						description: (0, t.localize)(10929, null),
					})),
					(d.isCoverageFilteredToTest = new i.$5j(
						"testing.isCoverageFilteredToTest",
						!1,
						{ type: "boolean", description: (0, t.localize)(10930, null) },
					)),
					(d.coverageToolbarEnabled = new i.$5j(
						"testing.coverageToolbarEnabled",
						!0,
						{ type: "boolean", description: (0, t.localize)(10931, null) },
					)),
					(d.inlineCoverageEnabled = new i.$5j(
						"testing.inlineCoverageEnabled",
						!1,
						{ type: "boolean", description: (0, t.localize)(10932, null) },
					)),
					(d.canGoToRelatedCode = new i.$5j("testing.canGoToRelatedCode", !1, {
						type: "boolean",
						description: (0, t.localize)(10933, null),
					})),
					(d.canGoToRelatedTest = new i.$5j("testing.canGoToRelatedTest", !1, {
						type: "boolean",
						description: (0, t.localize)(10934, null),
					})),
					(d.peekHasStack = new i.$5j("testing.peekHasStack", !1, {
						type: "boolean",
						description: (0, t.localize)(10935, null),
					})),
					(d.capabilityToContextKey = {
						[E.TestRunProfileBitset.Run]: d.hasRunnableTests,
						[E.TestRunProfileBitset.Coverage]: d.hasCoverableTests,
						[E.TestRunProfileBitset.Debug]: d.hasDebuggableTests,
						[E.TestRunProfileBitset.HasNonDefaultProfile]:
							d.hasNonDefaultProfile,
						[E.TestRunProfileBitset.HasConfigurable]: d.hasConfigurableProfile,
						[E.TestRunProfileBitset.SupportsContinuousRun]:
							d.supportsContinuousRun,
					}),
					(d.hasAnyResults = new i.$5j("testing.hasAnyResults", !1)),
					(d.viewMode = new i.$5j(
						"testing.explorerViewMode",
						w.TestExplorerViewMode.List,
					)),
					(d.viewSorting = new i.$5j(
						"testing.explorerViewSorting",
						w.TestExplorerViewSorting.ByLocation,
					)),
					(d.isRunning = new i.$5j("testing.isRunning", !1)),
					(d.isInPeek = new i.$5j("testing.isInPeek", !1)),
					(d.isPeekVisible = new i.$5j("testing.isPeekVisible", !1)),
					(d.peekItemType = new i.$5j("peekItemType", void 0, {
						type: "string",
						description: (0, t.localize)(10936, null),
					})),
					(d.controllerId = new i.$5j("controllerId", void 0, {
						type: "string",
						description: (0, t.localize)(10937, null),
					})),
					(d.testItemExtId = new i.$5j("testId", void 0, {
						type: "string",
						description: (0, t.localize)(10938, null),
					})),
					(d.testItemHasUri = new i.$5j("testing.testItemHasUri", !1, {
						type: "boolean",
						description: (0, t.localize)(10939, null),
					})),
					(d.testItemIsHidden = new i.$5j("testing.testItemIsHidden", !1, {
						type: "boolean",
						description: (0, t.localize)(10940, null),
					})),
					(d.testMessageContext = new i.$5j("testMessage", void 0, {
						type: "string",
						description: (0, t.localize)(10941, null),
					})),
					(d.testResultOutdated = new i.$5j("testResultOutdated", void 0, {
						type: "boolean",
						description: (0, t.localize)(10942, null),
					})),
					(d.testResultState = new i.$5j("testResultState", void 0, {
						type: "string",
						description: (0, t.localize)(10943, null),
					})),
					(d.testProfileContextGroup = new i.$5j(
						"testing.profile.context.group",
						void 0,
						{ type: "string", description: (0, t.localize)(10944, null) },
					));
			})(C || (e.TestingContextKeys = C = {}));
		}),
		
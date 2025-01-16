define(de[443], he([1, 0, 77, 4]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$SJc =
					e.$RJc =
					e.$QJc =
					e.TestingDisplayedCoveragePercent =
					e.TestingCountBadge =
					e.DefaultGutterClickAction =
					e.AutoOpenPeekViewWhen =
					e.AutoOpenTesting =
					e.TestingConfigKeys =
						void 0);
			var w;
			(function (h) {
				(h.AutoRunDelay = "testing.autoRun.delay"),
					(h.AutoOpenPeekView = "testing.automaticallyOpenPeekView"),
					(h.AutoOpenPeekViewDuringContinuousRun =
						"testing.automaticallyOpenPeekViewDuringAutoRun"),
					(h.OpenTesting = "testing.openTesting"),
					(h.FollowRunningTest = "testing.followRunningTest"),
					(h.DefaultGutterClickAction = "testing.defaultGutterClickAction"),
					(h.GutterEnabled = "testing.gutterEnabled"),
					(h.SaveBeforeTest = "testing.saveBeforeTest"),
					(h.AlwaysRevealTestOnStateChange =
						"testing.alwaysRevealTestOnStateChange"),
					(h.CountBadge = "testing.countBadge"),
					(h.ShowAllMessages = "testing.showAllMessages"),
					(h.CoveragePercent = "testing.displayedCoveragePercent"),
					(h.ShowCoverageInExplorer = "testing.showCoverageInExplorer"),
					(h.CoverageBarThresholds = "testing.coverageBarThresholds"),
					(h.CoverageToolbarEnabled = "testing.coverageToolbarEnabled");
			})(w || (e.TestingConfigKeys = w = {}));
			var E;
			(function (h) {
				(h.NeverOpen = "neverOpen"),
					(h.OpenOnTestStart = "openOnTestStart"),
					(h.OpenOnTestFailure = "openOnTestFailure"),
					(h.OpenExplorerOnTestStart = "openExplorerOnTestStart");
			})(E || (e.AutoOpenTesting = E = {}));
			var C;
			(function (h) {
				(h.FailureVisible = "failureInVisibleDocument"),
					(h.FailureAnywhere = "failureAnywhere"),
					(h.Never = "never");
			})(C || (e.AutoOpenPeekViewWhen = C = {}));
			var d;
			(function (h) {
				(h.Run = "run"),
					(h.Debug = "debug"),
					(h.Coverage = "runWithCoverage"),
					(h.ContextMenu = "contextMenu");
			})(d || (e.DefaultGutterClickAction = d = {}));
			var m;
			(function (h) {
				(h.Failed = "failed"),
					(h.Off = "off"),
					(h.Passed = "passed"),
					(h.Skipped = "skipped");
			})(m || (e.TestingCountBadge = m = {}));
			var r;
			(function (h) {
				(h.TotalCoverage = "totalCoverage"),
					(h.Statement = "statement"),
					(h.Minimum = "minimum");
			})(r || (e.TestingDisplayedCoveragePercent = r = {})),
				(e.$QJc = {
					id: "testing",
					order: 21,
					title: (0, i.localize)(10870, null),
					type: "object",
					properties: {
						[w.AutoRunDelay]: {
							type: "integer",
							minimum: 0,
							description: (0, i.localize)(10871, null),
							default: 1e3,
						},
						[w.AutoOpenPeekView]: {
							description: (0, i.localize)(10872, null),
							enum: [C.FailureAnywhere, C.FailureVisible, C.Never],
							default: C.FailureVisible,
							enumDescriptions: [
								(0, i.localize)(10873, null),
								(0, i.localize)(10874, null),
								(0, i.localize)(10875, null),
							],
						},
						[w.ShowAllMessages]: {
							description: (0, i.localize)(10876, null),
							type: "boolean",
							default: !1,
						},
						[w.AutoOpenPeekViewDuringContinuousRun]: {
							description: (0, i.localize)(10877, null),
							type: "boolean",
							default: !1,
						},
						[w.CountBadge]: {
							description: (0, i.localize)(10878, null),
							enum: [m.Failed, m.Off, m.Passed, m.Skipped],
							enumDescriptions: [
								(0, i.localize)(10879, null),
								(0, i.localize)(10880, null),
								(0, i.localize)(10881, null),
								(0, i.localize)(10882, null),
							],
							default: m.Failed,
						},
						[w.FollowRunningTest]: {
							description: (0, i.localize)(10883, null),
							type: "boolean",
							default: !0,
						},
						[w.DefaultGutterClickAction]: {
							description: (0, i.localize)(10884, null),
							enum: [d.Run, d.Debug, d.Coverage, d.ContextMenu],
							enumDescriptions: [
								(0, i.localize)(10885, null),
								(0, i.localize)(10886, null),
								(0, i.localize)(10887, null),
								(0, i.localize)(10888, null),
							],
							default: d.Run,
						},
						[w.GutterEnabled]: {
							description: (0, i.localize)(10889, null),
							type: "boolean",
							default: !0,
						},
						[w.SaveBeforeTest]: {
							description: (0, i.localize)(10890, null),
							type: "boolean",
							default: !0,
						},
						[w.OpenTesting]: {
							enum: [
								E.NeverOpen,
								E.OpenOnTestStart,
								E.OpenOnTestFailure,
								E.OpenExplorerOnTestStart,
							],
							enumDescriptions: [
								(0, i.localize)(10891, null),
								(0, i.localize)(10892, null),
								(0, i.localize)(10893, null),
								(0, i.localize)(10894, null),
							],
							default: "openOnTestStart",
							description: (0, i.localize)(10895, null),
						},
						[w.AlwaysRevealTestOnStateChange]: {
							markdownDescription: (0, i.localize)(
								10896,
								null,
								"`#testing.followRunningTest#`",
							),
							type: "boolean",
							default: !1,
						},
						[w.ShowCoverageInExplorer]: {
							description: (0, i.localize)(10897, null),
							type: "boolean",
							default: !0,
						},
						[w.CoveragePercent]: {
							markdownDescription: (0, i.localize)(10898, null),
							default: r.TotalCoverage,
							enum: [r.TotalCoverage, r.Statement, r.Minimum],
							enumDescriptions: [
								(0, i.localize)(10899, null),
								(0, i.localize)(10900, null),
								(0, i.localize)(10901, null),
							],
						},
						[w.CoverageBarThresholds]: {
							markdownDescription: (0, i.localize)(10902, null),
							default: { red: 0, yellow: 60, green: 90 },
							properties: {
								red: { type: "number", minimum: 0, maximum: 100, default: 0 },
								yellow: {
									type: "number",
									minimum: 0,
									maximum: 100,
									default: 60,
								},
								green: {
									type: "number",
									minimum: 0,
									maximum: 100,
									default: 90,
								},
							},
						},
						[w.CoverageToolbarEnabled]: {
							description: (0, i.localize)(10903, null),
							type: "boolean",
							default: !1,
						},
					},
				});
			const u = (h, c) => h.getValue(c);
			e.$RJc = u;
			const a = (h, c) =>
				(0, t.observableFromEvent)(h.onDidChangeConfiguration, () =>
					(0, e.$RJc)(h, c),
				);
			e.$SJc = a;
		}),
		
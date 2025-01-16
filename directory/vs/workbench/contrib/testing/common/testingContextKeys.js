define(de[380], he([1, 0, 4, 8, 353, 185]), function (ce, e, t, i, w, E) {
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
		define(
			de[420],
			he([1, 0, 6, 103, 3, 82, 8, 5, 21, 515, 259, 185, 380]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Eqc = e.$Dqc = e.$Cqc = e.$Bqc = void 0),
					(e.$Bqc = (0, d.$Mi)("testProfileService"));
				const c = (f, b) =>
					f.controllerId === b.controllerId &&
					(u.$k4.isRoot(b.item.extId) || !f.tag || b.item.tags.includes(f.tag));
				e.$Cqc = c;
				const n = (f, b) =>
						f.isDefault !== b.isDefault
							? f.isDefault
								? -1
								: 1
							: f.label.localeCompare(b.label),
					g = (f) => [
						[
							h.TestingContextKeys.hasRunnableTests.key,
							(f & a.TestRunProfileBitset.Run) !== 0,
						],
						[
							h.TestingContextKeys.hasDebuggableTests.key,
							(f & a.TestRunProfileBitset.Debug) !== 0,
						],
						[
							h.TestingContextKeys.hasCoverableTests.key,
							(f & a.TestRunProfileBitset.Coverage) !== 0,
						],
					];
				e.$Dqc = g;
				let p = class extends w.$1c {
					constructor(b, s) {
						super(),
							(this.h = this.D(new t.$re())),
							(this.j = new Map()),
							(this.onDidChange = this.h.event),
							s.remove("testingPreferredProfiles", m.StorageScope.WORKSPACE),
							(this.f = this.D(
								new r.$oqc(
									{
										key: "testingPreferredProfiles2",
										scope: m.StorageScope.WORKSPACE,
										target: m.StorageTarget.MACHINE,
									},
									s,
								),
							)),
							(this.g = {
								[a.TestRunProfileBitset.Run]:
									h.TestingContextKeys.hasRunnableTests.bindTo(b),
								[a.TestRunProfileBitset.Debug]:
									h.TestingContextKeys.hasDebuggableTests.bindTo(b),
								[a.TestRunProfileBitset.Coverage]:
									h.TestingContextKeys.hasCoverableTests.bindTo(b),
								[a.TestRunProfileBitset.HasNonDefaultProfile]:
									h.TestingContextKeys.hasNonDefaultProfile.bindTo(b),
								[a.TestRunProfileBitset.HasConfigurable]:
									h.TestingContextKeys.hasConfigurableProfile.bindTo(b),
								[a.TestRunProfileBitset.SupportsContinuousRun]:
									h.TestingContextKeys.supportsContinuousRun.bindTo(b),
							}),
							this.m();
					}
					addProfile(b, s) {
						const l = this.f.get()?.[b.id]?.[s.profileId],
							y = {
								...s,
								isDefault: l ?? s.isDefault,
								wasInitiallyDefault: s.isDefault,
							};
						let $ = this.j.get(s.controllerId);
						$
							? ($.profiles.push(y), $.profiles.sort(n))
							: (($ = { profiles: [y], controller: b }),
								this.j.set(s.controllerId, $)),
							this.m(),
							this.h.fire();
					}
					updateProfile(b, s, l) {
						const y = this.j.get(b);
						if (!y) return;
						const $ = y.profiles.find(
							(v) => v.controllerId === b && v.profileId === s,
						);
						if ($) {
							if (
								(Object.assign($, l),
								y.profiles.sort(n),
								l.isDefault !== void 0)
							) {
								const v = (0, E.$vo)(this.f.get({}));
								o(v, $, l.isDefault), this.f.store(v);
							}
							this.h.fire();
						}
					}
					configure(b, s) {
						this.j.get(b)?.controller.configureRunProfile(s);
					}
					removeProfile(b, s) {
						const l = this.j.get(b);
						if (!l) return;
						if (!s) {
							this.j.delete(b), this.h.fire();
							return;
						}
						const y = l.profiles.findIndex(($) => $.profileId === s);
						y !== -1 && (l.profiles.splice(y, 1), this.m(), this.h.fire());
					}
					capabilitiesForTest(b) {
						const s = this.j.get(u.$k4.root(b.extId));
						if (!s) return 0;
						let l = 0;
						for (const y of s.profiles)
							(!y.tag || b.tags.includes(y.tag)) &&
								(l |=
									l & y.group
										? a.TestRunProfileBitset.HasNonDefaultProfile
										: y.group);
						return l;
					}
					all() {
						return this.j.values();
					}
					getControllerProfiles(b) {
						return this.j.get(b)?.profiles ?? [];
					}
					getGroupDefaultProfiles(b, s) {
						const l = s
								? this.j.get(s)?.profiles || []
								: [...i.Iterable.flatMap(this.j.values(), ($) => $.profiles)],
							y = l.filter(($) => $.group === b && $.isDefault);
						if (y.length === 0) {
							const $ = l.find((v) => v.group === b);
							$ && y.push($);
						}
						return y;
					}
					setGroupDefaultProfiles(b, s) {
						const l = {};
						for (const y of this.j.values()) {
							l[y.controller.id] = {};
							for (const $ of y.profiles)
								$.group === b &&
									o(
										l,
										$,
										s.some((v) => v.profileId === $.profileId),
									);
							for (const $ of y.profiles) {
								if ($.group === b) continue;
								const v = y.profiles.find(
									(S) => S.group === b && S.label === $.label,
								);
								v && o(l, $, v.isDefault);
							}
							y.profiles.sort(n);
						}
						this.f.store(l), this.h.fire();
					}
					m() {
						let b = 0;
						for (const { profiles: s } of this.j.values())
							for (const l of s)
								(b |=
									b & l.group
										? a.TestRunProfileBitset.HasNonDefaultProfile
										: l.group),
									(b |= l.supportsContinuousRun
										? a.TestRunProfileBitset.SupportsContinuousRun
										: 0);
						for (const s of a.$m4) this.g[s].set((b & s) !== 0);
					}
				};
				(e.$Eqc = p), (e.$Eqc = p = Ne([j(0, C.$6j), j(1, m.$lq)], p));
				const o = (f, b, s) => {
					(b.isDefault = s),
						(f[b.controllerId] ??= {}),
						b.isDefault !== b.wasInitiallyDefault
							? (f[b.controllerId][b.profileId] = b.isDefault)
							: delete f[b.controllerId][b.profileId];
				};
			},
		),
		
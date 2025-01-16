define(
			de[1908],
			he([
				1, 0, 24, 14, 103, 27, 3, 28, 65, 281, 38, 48, 17, 71, 1036, 541, 440,
				255, 4, 99, 11, 31, 10, 8, 43, 40, 84, 63, 79, 68, 146, 100, 60, 141,
				811, 470, 443, 353, 630, 259, 420, 381, 379, 185, 380, 1268, 812, 563,
				18, 142, 89,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
				G,
				K,
				J,
				W,
				X,
				Y,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$yMc =
						e.$xMc =
						e.$wMc =
						e.$vMc =
						e.$uMc =
						e.$tMc =
						e.$sMc =
						e.$rMc =
						e.$qMc =
						e.$pMc =
						e.$oMc =
						e.$nMc =
						e.$mMc =
						e.$lMc =
						e.$kMc =
						e.$jMc =
						e.$iMc =
						e.$hMc =
						e.$gMc =
						e.$fMc =
						e.$eMc =
						e.$dMc =
						e.$cMc =
						e.$bMc =
						e.$aMc =
						e.$_Lc =
						e.$$Lc =
						e.$0Lc =
						e.$9Lc =
						e.$8Lc =
						e.$7Lc =
						e.$6Lc =
						e.$5Lc =
						e.$4Lc =
						e.$3Lc =
						e.$2Lc =
						e.$1Lc =
						e.$ZLc =
						e.$YLc =
						e.$XLc =
						e.$WLc =
						e.$VLc =
						e.$ULc =
						e.$TLc =
						e.$SLc =
						e.$RLc =
						e.$QLc =
						e.$PLc =
						e.$OLc =
							void 0),
					(R = mt(R));
				const ie = b.$ck.Test;
				var ne;
				(function (Wt) {
					(Wt[(Wt.Refresh = 10)] = "Refresh"),
						(Wt[(Wt.Run = 11)] = "Run"),
						(Wt[(Wt.Debug = 12)] = "Debug"),
						(Wt[(Wt.Coverage = 13)] = "Coverage"),
						(Wt[(Wt.RunContinuous = 14)] = "RunContinuous"),
						(Wt[(Wt.RunUsing = 15)] = "RunUsing"),
						(Wt[(Wt.Collapse = 16)] = "Collapse"),
						(Wt[(Wt.ClearResults = 17)] = "ClearResults"),
						(Wt[(Wt.DisplayMode = 18)] = "DisplayMode"),
						(Wt[(Wt.Sort = 19)] = "Sort"),
						(Wt[(Wt.GoToTest = 20)] = "GoToTest"),
						(Wt[(Wt.HideTest = 21)] = "HideTest"),
						(Wt[(Wt.ContinuousRunTest = 2147483647)] = "ContinuousRunTest");
				})(ne || (ne = {}));
				const ee = $.$Wj.create(V.TestingContextKeys.providerCount.key, 0),
					_ = (0, f.localize2)(10693, "Run Tests"),
					te = (0, f.localize2)(10694, "Debug Tests"),
					Q = (0, f.localize2)(10695, "Run Tests with Coverage");
				class Z extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.HideTestAction,
							title: (0, f.localize2)(10696, "Hide Test"),
							menu: {
								id: s.$XX.TestItem,
								group: "builtin@2",
								when: V.TestingContextKeys.testItemIsHidden.isEqualTo(!1),
							},
						});
					}
					run(tt, ...at) {
						const pi = tt.get(H.$sqc);
						for (const Li of at) pi.excluded.toggle(Li.test, !0);
						return Promise.resolve();
					}
				}
				e.$OLc = Z;
				class se extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.UnhideTestAction,
							title: (0, f.localize2)(10697, "Unhide Test"),
							menu: {
								id: s.$XX.TestItem,
								order: ne.HideTest,
								when: V.TestingContextKeys.testItemIsHidden.isEqualTo(!0),
							},
						});
					}
					run(tt, ...at) {
						const pi = tt.get(H.$sqc);
						for (const Li of at)
							Li instanceof A.$7Kc && pi.excluded.toggle(Li.test, !1);
						return Promise.resolve();
					}
				}
				e.$PLc = se;
				class re extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.UnhideAllTestsAction,
							title: (0, f.localize2)(10698, "Unhide All Tests"),
						});
					}
					run(tt) {
						return tt.get(H.$sqc).excluded.clear(), Promise.resolve();
					}
				}
				e.$QLc = re;
				const le = (Wt, tt) => [
					{ id: s.$XX.TestItem, group: "inline", order: Wt, when: tt },
					{ id: s.$XX.TestItem, group: "builtin@1", order: Wt, when: tt },
				];
				class oe extends L.$WMb {
					constructor(tt, at) {
						super({ ...at, viewId: B.Testing.ExplorerViewId }), (this.c = tt);
					}
					runInView(tt, at, ...pi) {
						const { include: Li, exclude: Di } = at.getTreeIncludeExclude(
							pi.map((Ui) => Ui.test),
						);
						return tt
							.get(H.$sqc)
							.runTests({ tests: Li, exclude: Di, group: this.c });
					}
				}
				class ae extends oe {
					constructor() {
						super(q.TestRunProfileBitset.Debug, {
							id: B.TestCommandId.DebugAction,
							title: (0, f.localize2)(10699, "Debug Test"),
							icon: R.$yKc,
							menu: le(
								ne.Debug,
								V.TestingContextKeys.hasDebuggableTests.isEqualTo(!0),
							),
						});
					}
				}
				e.$RLc = ae;
				class pe extends oe {
					constructor() {
						super(q.TestRunProfileBitset.Coverage, {
							id: B.TestCommandId.RunWithCoverageAction,
							title: (0, f.localize2)(10700, "Run Test with Coverage"),
							icon: R.$zKc,
							menu: le(
								ne.Coverage,
								V.TestingContextKeys.hasCoverableTests.isEqualTo(!0),
							),
						});
					}
				}
				e.$SLc = pe;
				class $e extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.RunUsingProfileAction,
							title: (0, f.localize2)(10701, "Execute Using Profile..."),
							icon: R.$yKc,
							menu: {
								id: s.$XX.TestItem,
								order: ne.RunUsing,
								group: "builtin@2",
								when: V.TestingContextKeys.hasNonDefaultProfile.isEqualTo(!0),
							},
						});
					}
					async run(tt, ...at) {
						const pi = tt.get(l.$ek),
							Li = tt.get(H.$sqc),
							Di = await pi.executeCommand("vscode.pickTestProfile", {
								onlyForTest: at[0].test,
							});
						Di &&
							Li.runResolvedTests({
								group: Di.group,
								targets: [
									{
										profileId: Di.profileId,
										controllerId: Di.controllerId,
										testIds: at
											.filter((Ui) => (0, F.$Cqc)(Di, Ui.test))
											.map((Ui) => Ui.test.item.extId),
									},
								],
							});
					}
				}
				e.$TLc = $e;
				class ye extends oe {
					constructor() {
						super(q.TestRunProfileBitset.Run, {
							id: B.TestCommandId.RunAction,
							title: (0, f.localize2)(10702, "Run Test"),
							icon: R.$uKc,
							menu: le(
								ne.Run,
								V.TestingContextKeys.hasRunnableTests.isEqualTo(!0),
							),
						});
					}
				}
				e.$ULc = ye;
				class ue extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.SelectDefaultTestProfiles,
							title: (0, f.localize2)(10703, "Select Default Profile"),
							icon: R.$GKc,
							category: ie,
						});
					}
					async run(tt, at) {
						const pi = tt.get(l.$ek),
							Li = tt.get(F.$Bqc),
							Di = await pi.executeCommand("vscode.pickMultipleTestProfiles", {
								showConfigureButtons: !1,
								selected: Li.getGroupDefaultProfiles(at),
								onlyGroup: at,
							});
						Di?.length && Li.setGroupDefaultProfiles(at, Di);
					}
				}
				e.$VLc = ue;
				class fe extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.ToggleContinousRunForTest,
							title: (0, f.localize2)(10704, "Turn on Continuous Run"),
							icon: R.$IKc,
							precondition: $.$Kj.or(
								V.TestingContextKeys.isContinuousModeOn.isEqualTo(!0),
								V.TestingContextKeys.isParentRunningContinuously.isEqualTo(!1),
							),
							toggled: {
								condition: V.TestingContextKeys.isContinuousModeOn.isEqualTo(
									!0,
								),
								icon: R.$KKc,
								title: (0, f.localize)(10677, null),
							},
							menu: le(
								ne.ContinuousRunTest,
								V.TestingContextKeys.supportsContinuousRun.isEqualTo(!0),
							),
						});
					}
					async run(tt, ...at) {
						const pi = tt.get(G.$MLc);
						for (const Li of at) {
							const Di = Li.test.item.extId;
							if (pi.isSpecificallyEnabledFor(Di)) {
								pi.stop(Di);
								continue;
							}
							pi.start(q.TestRunProfileBitset.Run, Di);
						}
					}
				}
				e.$WLc = fe;
				class me extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.ContinousRunUsingForTest,
							title: (0, f.localize2)(10705, "Start Continous Run Using..."),
							icon: R.$yKc,
							menu: [
								{
									id: s.$XX.TestItem,
									order: ne.RunContinuous,
									group: "builtin@2",
									when: $.$Kj.and(
										V.TestingContextKeys.supportsContinuousRun.isEqualTo(!0),
										V.TestingContextKeys.isContinuousModeOn.isEqualTo(!1),
									),
								},
							],
						});
					}
					async run(tt, ...at) {
						const pi = tt.get(G.$MLc),
							Li = tt.get(F.$Bqc),
							Di = tt.get(S.$4N),
							Ui = tt.get(T.$DJ);
						for (const Wi of at) {
							const Gi = await Ce(pi, Di, Ui, [
								{ profiles: Li.getControllerProfiles(Wi.test.controllerId) },
							]);
							Gi.length && pi.start(Gi, Wi.test.item.extId);
						}
					}
				}
				e.$XLc = me;
				class ve extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.ConfigureTestProfilesAction,
							title: (0, f.localize2)(10706, "Configure Test Profiles"),
							icon: R.$GKc,
							f1: !0,
							category: ie,
							menu: {
								id: s.$XX.CommandPalette,
								when: V.TestingContextKeys.hasConfigurableProfile.isEqualTo(!0),
							},
						});
					}
					async run(tt, at) {
						const pi = tt.get(l.$ek),
							Li = tt.get(F.$Bqc),
							Di = await pi.executeCommand("vscode.pickTestProfile", {
								placeholder: (0, f.localize)(10678, null),
								showConfigureButtons: !1,
								onlyConfigurable: !0,
								onlyGroup: at,
							});
						Di && Li.configure(Di.controllerId, Di.profileId);
					}
				}
				e.$YLc = ve;
				const ge = (Wt) => [
					{
						id: s.$XX.ViewTitle,
						group: "navigation",
						order: ne.RunUsing,
						when: $.$Kj.and(
							$.$Kj.equals("view", B.Testing.ExplorerViewId),
							V.TestingContextKeys.supportsContinuousRun.isEqualTo(!0),
							V.TestingContextKeys.isContinuousModeOn.isEqualTo(Wt),
						),
					},
					{
						id: s.$XX.CommandPalette,
						when: V.TestingContextKeys.supportsContinuousRun.isEqualTo(!0),
					},
				];
				class be extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.StopContinousRun,
							title: (0, f.localize2)(10707, "Stop Continuous Run"),
							category: ie,
							icon: R.$JKc,
							menu: ge(!0),
						});
					}
					run(tt) {
						tt.get(G.$MLc).stop();
					}
				}
				function Ce(Wt, tt, at, pi) {
					const Li = [];
					for (const { controller: Oi, profiles: yi } of pi)
						for (const Ai of yi)
							Ai.supportsContinuousRun &&
								Li.push({
									label: Ai.label || Oi?.label.get() || "",
									description: Oi?.label.get(),
									profile: Ai,
								});
					if (Li.length === 0)
						return tt.info((0, f.localize)(10679, null)), Promise.resolve([]);
					if (Li.length === 1) return Promise.resolve([Li[0].profile]);
					const Di = [],
						Ui = [],
						Wi = Wt.lastRunProfileIds;
					Li.sort(
						(Oi, yi) =>
							Oi.profile.group - yi.profile.group ||
							Oi.profile.controllerId.localeCompare(yi.profile.controllerId) ||
							Oi.label.localeCompare(yi.label),
					);
					for (let Oi = 0; Oi < Li.length; Oi++) {
						const yi = Li[Oi];
						(Oi === 0 || Li[Oi - 1].profile.group !== yi.profile.group) &&
							Di.push({ type: "separator", label: B.$Aqc[yi.profile.group] }),
							Di.push(yi),
							Wi.has(yi.profile.profileId) && Ui.push(yi);
					}
					const Gi = new C.$Zc(),
						qi = Gi.add(at.createQuickPick({ useSeparators: !0 }));
					return (
						(qi.title = (0, f.localize)(10680, null)),
						(qi.canSelectMany = !0),
						(qi.items = Di),
						(qi.selectedItems = Ui),
						qi.show(),
						new Promise((Oi) => {
							Gi.add(
								qi.onDidAccept(() => {
									Oi(qi.selectedItems.map((yi) => yi.profile)), Gi.dispose();
								}),
							),
								Gi.add(
									qi.onDidHide(() => {
										Oi([]), Gi.dispose();
									}),
								);
						})
					);
				}
				class Le extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.StartContinousRun,
							title: (0, f.localize2)(10708, "Start Continuous Run"),
							category: ie,
							icon: R.$IKc,
							menu: ge(!1),
						});
					}
					async run(tt, ...at) {
						const pi = tt.get(G.$MLc),
							Li = await Ce(
								pi,
								tt.get(S.$4N),
								tt.get(T.$DJ),
								tt.get(F.$Bqc).all(),
							);
						Li.length && pi.start(Li);
					}
				}
				class Fe extends L.$WMb {
					constructor(tt, at) {
						super({
							...tt,
							menu: [
								{
									id: s.$XX.ViewTitle,
									order:
										at === q.TestRunProfileBitset.Run
											? ne.Run
											: at === q.TestRunProfileBitset.Debug
												? ne.Debug
												: ne.Coverage,
									group: "navigation",
									when: $.$Kj.and(
										$.$Kj.equals("view", B.Testing.ExplorerViewId),
										V.TestingContextKeys.isRunning.isEqualTo(!1),
										V.TestingContextKeys.capabilityToContextKey[at].isEqualTo(
											!0,
										),
									),
								},
							],
							category: ie,
							viewId: B.Testing.ExplorerViewId,
						}),
							(this.c = at);
					}
					runInView(tt, at) {
						const { include: pi, exclude: Li } = at.getTreeIncludeExclude();
						return tt
							.get(H.$sqc)
							.runTests({ tests: pi, exclude: Li, group: this.c });
					}
				}
				class Oe extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.GetSelectedProfiles,
							title: (0, f.localize2)(10709, "Get Selected Profiles"),
						});
					}
					run(tt) {
						const at = tt.get(F.$Bqc);
						return [
							...at.getGroupDefaultProfiles(q.TestRunProfileBitset.Run),
							...at.getGroupDefaultProfiles(q.TestRunProfileBitset.Debug),
							...at.getGroupDefaultProfiles(q.TestRunProfileBitset.Coverage),
						].map((pi) => ({
							controllerId: pi.controllerId,
							label: pi.label,
							kind:
								pi.group & q.TestRunProfileBitset.Coverage
									? q.ExtTestRunProfileKind.Coverage
									: pi.group & q.TestRunProfileBitset.Debug
										? q.ExtTestRunProfileKind.Debug
										: q.ExtTestRunProfileKind.Run,
						}));
					}
				}
				e.$ZLc = Oe;
				class xe extends L.$WMb {
					constructor() {
						super({
							id: B.TestCommandId.GetExplorerSelection,
							title: (0, f.localize2)(10710, "Get Explorer Selection"),
							viewId: B.Testing.ExplorerViewId,
						});
					}
					runInView(tt, at) {
						const { include: pi, exclude: Li } = at.getTreeIncludeExclude(
								void 0,
								void 0,
								"selected",
							),
							Di = (Ui) => Ui.item.extId;
						return { include: pi.map(Di), exclude: Li.map(Di) };
					}
				}
				e.$1Lc = xe;
				class He extends Fe {
					constructor() {
						super(
							{ id: B.TestCommandId.RunSelectedAction, title: _, icon: R.$wKc },
							q.TestRunProfileBitset.Run,
						);
					}
				}
				e.$2Lc = He;
				class Ke extends Fe {
					constructor() {
						super(
							{
								id: B.TestCommandId.DebugSelectedAction,
								title: te,
								icon: R.$xKc,
							},
							q.TestRunProfileBitset.Debug,
						);
					}
				}
				e.$3Lc = Ke;
				class Je extends Fe {
					constructor() {
						super(
							{
								id: B.TestCommandId.CoverageSelectedAction,
								title: Q,
								icon: R.$AKc,
							},
							q.TestRunProfileBitset.Coverage,
						);
					}
				}
				e.$4Lc = Je;
				const Te = (Wt, tt) =>
					Wt.withProgress(
						{
							location: I.ProgressLocation.Window,
							title: (0, f.localize)(10681, null),
						},
						() => tt,
					);
				class Ee extends s.$3X {
					constructor(tt, at, pi) {
						super({
							...tt,
							category: ie,
							menu: [
								{
									id: s.$XX.CommandPalette,
									when: V.TestingContextKeys.capabilityToContextKey[
										at
									].isEqualTo(!0),
								},
							],
						}),
							(this.c = at),
							(this.d = pi);
					}
					async run(tt) {
						const at = tt.get(H.$sqc),
							pi = tt.get(S.$4N),
							Li = [...at.collection.rootItems].filter(
								(Di) =>
									Di.children.size ||
									Di.expand === q.TestItemExpandState.Expandable ||
									Di.expand === q.TestItemExpandState.BusyExpanding,
							);
						if (!Li.length) {
							pi.info(this.d);
							return;
						}
						await at.runTests({ tests: Li, group: this.c });
					}
				}
				class Ie extends Ee {
					constructor() {
						super(
							{
								id: B.TestCommandId.RunAllAction,
								title: (0, f.localize2)(10711, "Run All Tests"),
								icon: R.$wKc,
								keybinding: {
									weight: v.KeybindingWeight.WorkbenchContrib,
									primary: (0, E.$os)(
										E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
										E.KeyCode.KeyA,
									),
								},
							},
							q.TestRunProfileBitset.Run,
							(0, f.localize)(10682, null),
						);
					}
				}
				e.$5Lc = Ie;
				class Be extends Ee {
					constructor() {
						super(
							{
								id: B.TestCommandId.DebugAllAction,
								title: (0, f.localize2)(10712, "Debug All Tests"),
								icon: R.$yKc,
								keybinding: {
									weight: v.KeybindingWeight.WorkbenchContrib,
									primary: (0, E.$os)(
										E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
										E.KeyMod.CtrlCmd | E.KeyCode.KeyA,
									),
								},
							},
							q.TestRunProfileBitset.Debug,
							(0, f.localize)(10683, null),
						);
					}
				}
				e.$6Lc = Be;
				class Se extends Ee {
					constructor() {
						super(
							{
								id: B.TestCommandId.RunAllWithCoverageAction,
								title: (0, f.localize2)(10713, "Run All Tests with Coverage"),
								icon: R.$zKc,
								keybinding: {
									weight: v.KeybindingWeight.WorkbenchContrib,
									primary: (0, E.$os)(
										E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
										E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.KeyA,
									),
								},
							},
							q.TestRunProfileBitset.Coverage,
							(0, f.localize)(10684, null),
						);
					}
				}
				e.$7Lc = Se;
				class ke extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.CancelTestRunAction,
							title: (0, f.localize2)(10714, "Cancel Test Run"),
							icon: R.$BKc,
							keybinding: {
								weight: v.KeybindingWeight.WorkbenchContrib,
								primary: (0, E.$os)(
									E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
									E.KeyMod.CtrlCmd | E.KeyCode.KeyX,
								),
							},
							menu: [
								{
									id: s.$XX.ViewTitle,
									order: ne.Run,
									group: "navigation",
									when: $.$Kj.and(
										$.$Kj.equals("view", B.Testing.ExplorerViewId),
										$.$Kj.equals(
											V.TestingContextKeys.isRunning.serialize(),
											!0,
										),
									),
								},
							],
						});
					}
					async run(tt, at, pi) {
						const Li = tt.get(x.$Kqc),
							Di = tt.get(H.$sqc);
						if (at) Di.cancelTestRun(at, pi);
						else
							for (const Ui of Li.results)
								Ui.completedAt || Di.cancelTestRun(Ui.id);
					}
				}
				e.$8Lc = ke;
				class Ue extends L.$WMb {
					constructor() {
						super({
							id: B.TestCommandId.TestingViewAsListAction,
							viewId: B.Testing.ExplorerViewId,
							title: (0, f.localize2)(10715, "View as List"),
							toggled: V.TestingContextKeys.viewMode.isEqualTo(
								B.TestExplorerViewMode.List,
							),
							menu: {
								id: s.$XX.ViewTitle,
								order: ne.DisplayMode,
								group: "viewAs",
								when: $.$Kj.equals("view", B.Testing.ExplorerViewId),
							},
						});
					}
					runInView(tt, at) {
						at.viewModel.viewMode = B.TestExplorerViewMode.List;
					}
				}
				e.$9Lc = Ue;
				class qe extends L.$WMb {
					constructor() {
						super({
							id: B.TestCommandId.TestingViewAsTreeAction,
							viewId: B.Testing.ExplorerViewId,
							title: (0, f.localize2)(10716, "View as Tree"),
							toggled: V.TestingContextKeys.viewMode.isEqualTo(
								B.TestExplorerViewMode.Tree,
							),
							menu: {
								id: s.$XX.ViewTitle,
								order: ne.DisplayMode,
								group: "viewAs",
								when: $.$Kj.equals("view", B.Testing.ExplorerViewId),
							},
						});
					}
					runInView(tt, at) {
						at.viewModel.viewMode = B.TestExplorerViewMode.Tree;
					}
				}
				e.$0Lc = qe;
				class Ae extends L.$WMb {
					constructor() {
						super({
							id: B.TestCommandId.TestingSortByStatusAction,
							viewId: B.Testing.ExplorerViewId,
							title: (0, f.localize2)(10717, "Sort by Status"),
							toggled: V.TestingContextKeys.viewSorting.isEqualTo(
								B.TestExplorerViewSorting.ByStatus,
							),
							menu: {
								id: s.$XX.ViewTitle,
								order: ne.Sort,
								group: "sortBy",
								when: $.$Kj.equals("view", B.Testing.ExplorerViewId),
							},
						});
					}
					runInView(tt, at) {
						at.viewModel.viewSorting = B.TestExplorerViewSorting.ByStatus;
					}
				}
				e.$$Lc = Ae;
				class Me extends L.$WMb {
					constructor() {
						super({
							id: B.TestCommandId.TestingSortByLocationAction,
							viewId: B.Testing.ExplorerViewId,
							title: (0, f.localize2)(10718, "Sort by Location"),
							toggled: V.TestingContextKeys.viewSorting.isEqualTo(
								B.TestExplorerViewSorting.ByLocation,
							),
							menu: {
								id: s.$XX.ViewTitle,
								order: ne.Sort,
								group: "sortBy",
								when: $.$Kj.equals("view", B.Testing.ExplorerViewId),
							},
						});
					}
					runInView(tt, at) {
						at.viewModel.viewSorting = B.TestExplorerViewSorting.ByLocation;
					}
				}
				e.$_Lc = Me;
				class De extends L.$WMb {
					constructor() {
						super({
							id: B.TestCommandId.TestingSortByDurationAction,
							viewId: B.Testing.ExplorerViewId,
							title: (0, f.localize2)(10719, "Sort by Duration"),
							toggled: V.TestingContextKeys.viewSorting.isEqualTo(
								B.TestExplorerViewSorting.ByDuration,
							),
							menu: {
								id: s.$XX.ViewTitle,
								order: ne.Sort,
								group: "sortBy",
								when: $.$Kj.equals("view", B.Testing.ExplorerViewId),
							},
						});
					}
					runInView(tt, at) {
						at.viewModel.viewSorting = B.TestExplorerViewSorting.ByDuration;
					}
				}
				e.$aMc = De;
				class Re extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.ShowMostRecentOutputAction,
							title: (0, f.localize2)(10720, "Show Output"),
							category: ie,
							icon: i.$ak.terminal,
							keybinding: {
								weight: v.KeybindingWeight.WorkbenchContrib,
								primary: (0, E.$os)(
									E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
									E.KeyMod.CtrlCmd | E.KeyCode.KeyO,
								),
							},
							precondition: V.TestingContextKeys.hasAnyResults.isEqualTo(!0),
							menu: [
								{
									id: s.$XX.ViewTitle,
									order: ne.Collapse,
									group: "navigation",
									when: $.$Kj.equals("view", B.Testing.ExplorerViewId),
								},
								{
									id: s.$XX.CommandPalette,
									when: V.TestingContextKeys.hasAnyResults.isEqualTo(!0),
								},
							],
						});
					}
					async run(tt) {
						(
							await tt.get(Y.$HMb).openView(B.Testing.ResultsViewId, !0)
						)?.showLatestRun();
					}
				}
				e.$bMc = Re;
				class je extends L.$WMb {
					constructor() {
						super({
							id: B.TestCommandId.CollapseAllAction,
							viewId: B.Testing.ExplorerViewId,
							title: (0, f.localize2)(10721, "Collapse All Tests"),
							icon: i.$ak.collapseAll,
							menu: {
								id: s.$XX.ViewTitle,
								order: ne.Collapse,
								group: "displayAction",
								when: $.$Kj.equals("view", B.Testing.ExplorerViewId),
							},
						});
					}
					runInView(tt, at) {
						at.viewModel.collapseAll();
					}
				}
				e.$cMc = je;
				class Ve extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.ClearTestResultsAction,
							title: (0, f.localize2)(10722, "Clear All Results"),
							category: ie,
							icon: i.$ak.clearAll,
							menu: [
								{ id: s.$XX.TestPeekTitle },
								{
									id: s.$XX.CommandPalette,
									when: V.TestingContextKeys.hasAnyResults.isEqualTo(!0),
								},
								{
									id: s.$XX.ViewTitle,
									order: ne.ClearResults,
									group: "displayAction",
									when: $.$Kj.equals("view", B.Testing.ExplorerViewId),
								},
								{
									id: s.$XX.ViewTitle,
									order: ne.ClearResults,
									group: "navigation",
									when: $.$Kj.equals("view", B.Testing.ResultsViewId),
								},
							],
						});
					}
					run(tt) {
						tt.get(x.$Kqc).clear();
					}
				}
				e.$dMc = Ve;
				class Ze extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.GoToTest,
							title: (0, f.localize2)(10723, "Go to Test"),
							icon: i.$ak.goToFile,
							menu: le(
								ne.GoToTest,
								V.TestingContextKeys.testItemHasUri.isEqualTo(!0),
							),
							keybinding: {
								weight: v.KeybindingWeight.EditorContrib - 10,
								when: D.$zQb.isEqualTo(B.Testing.ExplorerViewId),
								primary: E.KeyCode.Enter | E.KeyMod.Alt,
							},
						});
					}
					async run(tt, at, pi) {
						at ||
							(at = tt.get(Y.$HMb).getActiveViewWithId(B.Testing.ExplorerViewId)
								?.focusedTreeElements[0]),
							at &&
								at instanceof A.$7Kc &&
								tt
									.get(l.$ek)
									.executeCommand("vscode.revealTest", at.test.item.extId, pi);
					}
				}
				e.$eMc = Ze;
				async function et(Wt, tt, at, pi, Li) {
					let Di = [],
						Ui,
						Wi = [],
						Gi;
					for await (const qi of (0, H.$wqc)(Wt, tt, at)) {
						if (!qi.item.range || Li?.(qi) === !1) continue;
						const Oi = h.$iL.lift(qi.item.range);
						Oi.containsPosition(pi)
							? Ui && h.$iL.equalsRange(qi.item.range, Ui)
								? Di.some((yi) =>
										z.$k4.isChild(yi.item.extId, qi.item.extId),
									) || Di.push(qi)
								: ((Ui = Oi), (Di = [qi]))
							: a.$hL.isBefore(Oi.getStartPosition(), pi) &&
								(!Gi || Gi.getStartPosition().isBefore(Oi.getStartPosition())
									? ((Gi = Oi), (Wi = [qi]))
									: Oi.equalsRange(Gi) &&
										!Wi.some((yi) =>
											z.$k4.isChild(yi.item.extId, qi.item.extId),
										) &&
										Wi.push(qi));
					}
					return Di.length ? Di : Wi;
				}
				var rt;
				(function (Wt) {
					(Wt[(Wt.RunAtCursor = 0)] = "RunAtCursor"),
						(Wt[(Wt.DebugAtCursor = 1)] = "DebugAtCursor"),
						(Wt[(Wt.RunInFile = 2)] = "RunInFile"),
						(Wt[(Wt.DebugInFile = 3)] = "DebugInFile"),
						(Wt[(Wt.GoToRelated = 4)] = "GoToRelated"),
						(Wt[(Wt.PeekRelated = 5)] = "PeekRelated");
				})(rt || (rt = {}));
				class ft extends s.$3X {
					constructor(tt, at) {
						super({
							...tt,
							menu: [
								{ id: s.$XX.CommandPalette, when: ee },
								{
									id: s.$XX.EditorContext,
									group: "testing",
									order:
										at === q.TestRunProfileBitset.Run
											? rt.RunAtCursor
											: rt.DebugAtCursor,
									when: $.$Kj.and(
										V.TestingContextKeys.activeEditorHasTests,
										V.TestingContextKeys.capabilityToContextKey[at],
									),
								},
							],
						}),
							(this.c = at);
					}
					async run(tt) {
						const at = tt.get(m.$dtb),
							pi = tt.get(W.$IY),
							Li = pi.activeEditorPane;
						let Di = at.getActiveCodeEditor();
						if (!Li || !Di) return;
						Di instanceof r.$wDb && (Di = Di.getParentEditor());
						const Ui = Di?.getPosition(),
							Wi = Di?.getModel();
						if (!Ui || !Wi || !("uri" in Wi)) return;
						const Gi = tt.get(H.$sqc),
							qi = tt.get(F.$Bqc),
							Oi = tt.get(k.$Vl),
							yi = tt.get(I.$8N),
							Ai = tt.get(y.$gj);
						(0, O.$RJc)(Ai, O.TestingConfigKeys.SaveBeforeTest) &&
							(await pi.save({ editor: Li.input, groupId: Li.group.id }),
							await Gi.syncTests());
						const Vi = await Te(
							yi,
							et(
								Gi,
								Oi,
								Wi.uri,
								Ui,
								(_t) => !!(qi.capabilitiesForTest(_t.item) & this.c),
							),
						);
						if (Vi.length) {
							await Gi.runTests({ group: this.c, tests: Vi });
							return;
						}
						const wi = await Gi.getTestsRelatedToCode(Wi.uri, Ui);
						if (wi.length) {
							await Gi.runTests({ group: this.c, tests: wi });
							return;
						}
						Di && p.$Szb.get(Di)?.showMessage((0, f.localize)(10685, null), Ui);
					}
				}
				class bt extends ft {
					constructor() {
						super(
							{
								id: B.TestCommandId.RunAtCursor,
								title: (0, f.localize2)(10724, "Run Test at Cursor"),
								category: ie,
								keybinding: {
									weight: v.KeybindingWeight.WorkbenchContrib,
									when: c.EditorContextKeys.editorTextFocus,
									primary: (0, E.$os)(
										E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
										E.KeyCode.KeyC,
									),
								},
							},
							q.TestRunProfileBitset.Run,
						);
					}
				}
				e.$fMc = bt;
				class nt extends ft {
					constructor() {
						super(
							{
								id: B.TestCommandId.DebugAtCursor,
								title: (0, f.localize2)(10725, "Debug Test at Cursor"),
								category: ie,
								keybinding: {
									weight: v.KeybindingWeight.WorkbenchContrib,
									when: c.EditorContextKeys.editorTextFocus,
									primary: (0, E.$os)(
										E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
										E.KeyMod.CtrlCmd | E.KeyCode.KeyC,
									),
								},
							},
							q.TestRunProfileBitset.Debug,
						);
					}
				}
				e.$gMc = nt;
				class lt extends ft {
					constructor() {
						super(
							{
								id: B.TestCommandId.CoverageAtCursor,
								title: (0, f.localize2)(
									10726,
									"Run Test at Cursor with Coverage",
								),
								category: ie,
								keybinding: {
									weight: v.KeybindingWeight.WorkbenchContrib,
									when: c.EditorContextKeys.editorTextFocus,
									primary: (0, E.$os)(
										E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
										E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.KeyC,
									),
								},
							},
							q.TestRunProfileBitset.Coverage,
						);
					}
				}
				e.$hMc = lt;
				class ct extends s.$3X {
					constructor(tt, at) {
						super({
							...tt,
							menu: [
								{
									id: s.$XX.ExplorerContext,
									when: V.TestingContextKeys.capabilityToContextKey[
										at
									].isEqualTo(!0),
									group: "6.5_testing",
									order:
										(at === q.TestRunProfileBitset.Run ? ne.Run : ne.Debug) +
										0.1,
								},
							],
						}),
							(this.c = at);
					}
					async run(tt, at) {
						const pi = tt.get(H.$sqc),
							Li = tt.get(S.$4N),
							Di = await w.Iterable.asyncToArray(
								(0, H.$xqc)(pi, tt.get(k.$Vl), at),
							);
						if (!Di.length) {
							Li.notify({
								message: (0, f.localize)(10686, null),
								severity: S.Severity.Info,
							});
							return;
						}
						return pi.runTests({ tests: Di, group: this.c });
					}
				}
				class gt extends ct {
					constructor() {
						super(
							{ id: B.TestCommandId.RunByUri, title: _, category: ie },
							q.TestRunProfileBitset.Run,
						);
					}
				}
				class ht extends ct {
					constructor() {
						super(
							{ id: B.TestCommandId.DebugByUri, title: te, category: ie },
							q.TestRunProfileBitset.Debug,
						);
					}
				}
				class Rt extends ct {
					constructor() {
						super(
							{ id: B.TestCommandId.CoverageByUri, title: Q, category: ie },
							q.TestRunProfileBitset.Coverage,
						);
					}
				}
				class Nt extends s.$3X {
					constructor(tt, at) {
						super({
							...tt,
							menu: [
								{
									id: s.$XX.CommandPalette,
									when: V.TestingContextKeys.capabilityToContextKey[
										at
									].isEqualTo(!0),
								},
								{
									id: s.$XX.EditorContext,
									group: "testing",
									order:
										at === q.TestRunProfileBitset.Run
											? rt.RunInFile
											: rt.DebugInFile,
									when: $.$Kj.and(
										V.TestingContextKeys.activeEditorHasTests,
										V.TestingContextKeys.capabilityToContextKey[at],
									),
								},
							],
						}),
							(this.c = at);
					}
					run(tt) {
						let at = tt.get(m.$dtb).getActiveCodeEditor();
						if (!at) return;
						at instanceof r.$wDb && (at = at.getParentEditor());
						const pi = at?.getPosition(),
							Li = at?.getModel();
						if (!pi || !Li || !("uri" in Li)) return;
						const Di = tt.get(H.$sqc),
							Ui = Li.uri.toString(),
							Wi = [Di.collection.rootIds],
							Gi = [];
						for (; Wi.length; )
							for (const qi of Wi.pop()) {
								const Oi = Di.collection.getNodeById(qi);
								Oi.item.uri?.toString() === Ui
									? Gi.push(Oi)
									: Wi.push(Oi.children);
							}
						if (Gi.length) return Di.runTests({ tests: Gi, group: this.c });
						at && p.$Szb.get(at)?.showMessage((0, f.localize)(10687, null), pi);
					}
				}
				class jt extends Nt {
					constructor() {
						super(
							{
								id: B.TestCommandId.RunCurrentFile,
								title: (0, f.localize2)(10727, "Run Tests in Current File"),
								category: ie,
								keybinding: {
									weight: v.KeybindingWeight.WorkbenchContrib,
									when: c.EditorContextKeys.editorTextFocus,
									primary: (0, E.$os)(
										E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
										E.KeyCode.KeyF,
									),
								},
							},
							q.TestRunProfileBitset.Run,
						);
					}
				}
				e.$iMc = jt;
				class ti extends Nt {
					constructor() {
						super(
							{
								id: B.TestCommandId.DebugCurrentFile,
								title: (0, f.localize2)(10728, "Debug Tests in Current File"),
								category: ie,
								keybinding: {
									weight: v.KeybindingWeight.WorkbenchContrib,
									when: c.EditorContextKeys.editorTextFocus,
									primary: (0, E.$os)(
										E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
										E.KeyMod.CtrlCmd | E.KeyCode.KeyF,
									),
								},
							},
							q.TestRunProfileBitset.Debug,
						);
					}
				}
				e.$jMc = ti;
				class kt extends Nt {
					constructor() {
						super(
							{
								id: B.TestCommandId.CoverageCurrentFile,
								title: (0, f.localize2)(
									10729,
									"Run Tests with Coverage in Current File",
								),
								category: ie,
								keybinding: {
									weight: v.KeybindingWeight.WorkbenchContrib,
									when: c.EditorContextKeys.editorTextFocus,
									primary: (0, E.$os)(
										E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
										E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.KeyF,
									),
								},
							},
							q.TestRunProfileBitset.Coverage,
						);
					}
				}
				e.$kMc = kt;
				const hi = async (Wt, tt, at, pi) => {
					const Li = Promise.all(at.map((Ui) => (0, H.$vqc)(Wt, Ui))),
						Di = (await Te(tt, Li)).filter(d.$tg);
					return Di.length ? await pi(Di) : void 0;
				};
				e.$lMc = hi;
				class Kt extends s.$3X {
					async run(tt, ...at) {
						const pi = tt.get(H.$sqc);
						await (0, e.$lMc)(
							tt.get(H.$sqc).collection,
							tt.get(I.$8N),
							[...this.c(tt, ...at)],
							(Li) => this.d(pi, Li),
						);
					}
				}
				class di extends Kt {
					constructor(tt) {
						super({ ...tt, menu: { id: s.$XX.CommandPalette, when: ee } });
					}
					c(tt) {
						const { results: at } = tt.get(x.$Kqc),
							pi = new Set();
						for (let Li = at.length - 1; Li >= 0; Li--) {
							const Di = at[Li];
							for (const Ui of Di.tests)
								(0, J.$v4)(Ui.ownComputedState)
									? pi.add(Ui.item.extId)
									: pi.delete(Ui.item.extId);
						}
						return pi;
					}
				}
				class Ye extends s.$3X {
					constructor(tt) {
						super({
							...tt,
							menu: {
								id: s.$XX.CommandPalette,
								when: $.$Kj.and(
									ee,
									V.TestingContextKeys.hasAnyResults.isEqualTo(!0),
								),
							},
						});
					}
					d(tt, at) {
						const pi = tt.get(x.$Kqc);
						return (at ? pi.results.find((Di) => Di.id === at) : pi.results[0])
							?.request;
					}
					async run(tt, at) {
						const pi = tt.get(x.$Kqc),
							Li = at ? pi.results.find((qi) => qi.id === at) : pi.results[0];
						if (!Li) return;
						const Di = Li.request,
							Ui = tt.get(H.$sqc),
							Wi = tt.get(F.$Bqc),
							Gi = (qi) =>
								Wi.getControllerProfiles(qi.controllerId).some(
									(Oi) => Oi.profileId === qi.profileId,
								);
						await (0, e.$lMc)(
							Ui.collection,
							tt.get(I.$8N),
							Di.targets.flatMap((qi) => qi.testIds),
							(qi) =>
								this.c() & Di.group && Di.targets.every(Gi)
									? Ui.runResolvedTests({
											targets: Di.targets,
											group: Di.group,
											exclude: Di.exclude,
										})
									: Ui.runTests({ tests: qi, group: this.c() }),
						);
					}
				}
				class ze extends di {
					constructor() {
						super({
							id: B.TestCommandId.ReRunFailedTests,
							title: (0, f.localize2)(10730, "Rerun Failed Tests"),
							category: ie,
							keybinding: {
								weight: v.KeybindingWeight.WorkbenchContrib,
								primary: (0, E.$os)(
									E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
									E.KeyCode.KeyE,
								),
							},
						});
					}
					d(tt, at) {
						return tt.runTests({
							group: q.TestRunProfileBitset.Run,
							tests: at,
						});
					}
				}
				e.$mMc = ze;
				class Xe extends di {
					constructor() {
						super({
							id: B.TestCommandId.DebugFailedTests,
							title: (0, f.localize2)(10731, "Debug Failed Tests"),
							category: ie,
							keybinding: {
								weight: v.KeybindingWeight.WorkbenchContrib,
								primary: (0, E.$os)(
									E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
									E.KeyMod.CtrlCmd | E.KeyCode.KeyE,
								),
							},
						});
					}
					d(tt, at) {
						return tt.runTests({
							group: q.TestRunProfileBitset.Debug,
							tests: at,
						});
					}
				}
				e.$nMc = Xe;
				class It extends Ye {
					constructor() {
						super({
							id: B.TestCommandId.ReRunLastRun,
							title: (0, f.localize2)(10732, "Rerun Last Run"),
							category: ie,
							keybinding: {
								weight: v.KeybindingWeight.WorkbenchContrib,
								primary: (0, E.$os)(
									E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
									E.KeyCode.KeyL,
								),
							},
						});
					}
					c() {
						return q.TestRunProfileBitset.Run;
					}
				}
				e.$oMc = It;
				class Lt extends Ye {
					constructor() {
						super({
							id: B.TestCommandId.DebugLastRun,
							title: (0, f.localize2)(10733, "Debug Last Run"),
							category: ie,
							keybinding: {
								weight: v.KeybindingWeight.WorkbenchContrib,
								primary: (0, E.$os)(
									E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
									E.KeyMod.CtrlCmd | E.KeyCode.KeyL,
								),
							},
						});
					}
					c() {
						return q.TestRunProfileBitset.Debug;
					}
				}
				e.$pMc = Lt;
				class xt extends Ye {
					constructor() {
						super({
							id: B.TestCommandId.CoverageLastRun,
							title: (0, f.localize2)(10734, "Rerun Last Run with Coverage"),
							category: ie,
							keybinding: {
								weight: v.KeybindingWeight.WorkbenchContrib,
								primary: (0, E.$os)(
									E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
									E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.KeyL,
								),
							},
						});
					}
					c() {
						return q.TestRunProfileBitset.Coverage;
					}
				}
				e.$qMc = xt;
				class Vt extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.SearchForTestExtension,
							title: (0, f.localize2)(10735, "Search for Test Extension"),
						});
					}
					async run(tt) {
						const pi = (
							await tt
								.get(X.$6Sb)
								.openPaneComposite(N.$LQb, M.ViewContainerLocation.Sidebar, !0)
						)?.getViewPaneContainer();
						pi.search('@category:"testing"'), pi.focus();
					}
				}
				e.$rMc = Vt;
				class Bt extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.OpenOutputPeek,
							title: (0, f.localize2)(10736, "Peek Output"),
							category: ie,
							keybinding: {
								weight: v.KeybindingWeight.WorkbenchContrib,
								primary: (0, E.$os)(
									E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
									E.KeyMod.CtrlCmd | E.KeyCode.KeyM,
								),
							},
							menu: {
								id: s.$XX.CommandPalette,
								when: V.TestingContextKeys.hasAnyResults.isEqualTo(!0),
							},
						});
					}
					async run(tt) {
						tt.get(K.$ZKc).open();
					}
				}
				e.$sMc = Bt;
				class Gt extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.ToggleInlineTestOutput,
							title: (0, f.localize2)(10737, "Toggle Inline Test Output"),
							category: ie,
							keybinding: {
								weight: v.KeybindingWeight.WorkbenchContrib,
								primary: (0, E.$os)(
									E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
									E.KeyMod.CtrlCmd | E.KeyCode.KeyI,
								),
							},
							menu: {
								id: s.$XX.CommandPalette,
								when: V.TestingContextKeys.hasAnyResults.isEqualTo(!0),
							},
						});
					}
					async run(tt) {
						const at = tt.get(H.$sqc);
						at.showInlineOutput.value = !at.showInlineOutput.value;
					}
				}
				e.$tMc = Gt;
				const Mt = (Wt) => [
					{
						id: s.$XX.TestItem,
						group: "inline",
						order: ne.Refresh,
						when: $.$Kj.and(
							V.TestingContextKeys.canRefreshTests.isEqualTo(!0),
							V.TestingContextKeys.isRefreshingTests.isEqualTo(Wt),
						),
					},
					{
						id: s.$XX.ViewTitle,
						group: "navigation",
						order: ne.Refresh,
						when: $.$Kj.and(
							$.$Kj.equals("view", B.Testing.ExplorerViewId),
							V.TestingContextKeys.canRefreshTests.isEqualTo(!0),
							V.TestingContextKeys.isRefreshingTests.isEqualTo(Wt),
						),
					},
					{
						id: s.$XX.CommandPalette,
						when: V.TestingContextKeys.canRefreshTests.isEqualTo(!0),
					},
				];
				class Ut extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.RefreshTestsAction,
							title: (0, f.localize2)(10738, "Refresh Tests"),
							category: ie,
							icon: R.$HKc,
							keybinding: {
								weight: v.KeybindingWeight.WorkbenchContrib,
								primary: (0, E.$os)(
									E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
									E.KeyMod.CtrlCmd | E.KeyCode.KeyR,
								),
								when: V.TestingContextKeys.canRefreshTests.isEqualTo(!0),
							},
							menu: Mt(!1),
						});
					}
					async run(tt, ...at) {
						const pi = tt.get(H.$sqc),
							Li = tt.get(I.$8N),
							Di = (0, t.$Qb)(
								at.filter(d.$tg).map((Ui) => Ui.test.controllerId),
							);
						return Li.withProgress(
							{ location: B.Testing.ViewletId },
							async () => {
								Di.length
									? await Promise.all(Di.map((Ui) => pi.refreshTests(Ui)))
									: await pi.refreshTests();
							},
						);
					}
				}
				e.$uMc = Ut;
				class ei extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.CancelTestRefreshAction,
							title: (0, f.localize2)(10739, "Cancel Test Refresh"),
							category: ie,
							icon: R.$LKc,
							menu: Mt(!0),
						});
					}
					async run(tt) {
						tt.get(H.$sqc).cancelRefreshTests();
					}
				}
				e.$vMc = ei;
				class mi extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.CoverageClear,
							title: (0, f.localize2)(10740, "Clear Coverage"),
							icon: P.$bP,
							category: ie,
							menu: [
								{
									id: s.$XX.ViewTitle,
									group: "navigation",
									order: ne.Refresh,
									when: $.$Kj.equals("view", B.Testing.CoverageViewId),
								},
								{
									id: s.$XX.CommandPalette,
									when: V.TestingContextKeys.isTestCoverageOpen.isEqualTo(!0),
								},
							],
						});
					}
					run(tt) {
						tt.get(U.$TJc).closeCoverage();
					}
				}
				e.$wMc = mi;
				class ii extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.OpenCoverage,
							title: (0, f.localize2)(10741, "Open Coverage"),
							category: ie,
							menu: [
								{
									id: s.$XX.CommandPalette,
									when: V.TestingContextKeys.hasAnyResults.isEqualTo(!0),
								},
							],
						});
					}
					run(tt) {
						const at = tt.get(x.$Kqc).results,
							pi = at.length && at[0].tasks.find((Li) => Li.coverage);
						if (!pi) {
							tt.get(S.$4N).info((0, f.localize)(10688, null));
							return;
						}
						tt.get(U.$TJc).openCoverage(pi, !0);
					}
				}
				e.$xMc = ii;
				class Dt extends n.$WOb {
					runEditorCommand(tt, at, ...pi) {
						return (
							(this.q = tt.get(H.$sqc)),
							(this.s = tt.get(k.$Vl)),
							super.runEditorCommand(tt, at, ...pi)
						);
					}
					k(tt) {
						return tt.getOption(u.EditorOption.gotoLocation)
							.alternativeTestsCommand;
					}
					l(tt) {
						return (
							tt.getOption(u.EditorOption.gotoLocation).multipleTests || "peek"
						);
					}
				}
				class Jt extends Dt {
					async h(tt, at, pi, Li) {
						const Di = await this.q.getTestsRelatedToCode(at.uri, pi, Li);
						return new g.$pNb(
							Di.map(
								(Ui) =>
									Ui.item.uri && {
										uri: Ui.item.uri,
										range: Ui.item.range || new h.$iL(1, 1, 1, 1),
									},
							).filter(d.$tg),
							(0, f.localize)(10689, null),
						);
					}
					j() {
						return (0, f.localize)(10690, null);
					}
				}
				class si extends Jt {
					constructor() {
						super(
							{ openToSide: !1, openInPeek: !1, muteMessage: !1 },
							{
								id: B.TestCommandId.GoToRelatedTest,
								title: (0, f.localize2)(10742, "Go to Related Test"),
								category: ie,
								precondition: $.$Kj.and(
									$.$Kj.not(V.TestingContextKeys.activeEditorHasTests.key),
									V.TestingContextKeys.canGoToRelatedTest,
								),
								menu: [
									{
										id: s.$XX.EditorContext,
										group: "testing",
										order: rt.GoToRelated,
									},
								],
							},
						);
					}
				}
				class Zt extends Jt {
					constructor() {
						super(
							{ openToSide: !1, openInPeek: !0, muteMessage: !1 },
							{
								id: B.TestCommandId.PeekRelatedTest,
								title: (0, f.localize2)(10743, "Peek Related Test"),
								category: ie,
								precondition: $.$Kj.and(
									V.TestingContextKeys.canGoToRelatedTest,
									$.$Kj.not(V.TestingContextKeys.activeEditorHasTests.key),
									o.PeekContext.notInPeekEditor,
									c.EditorContextKeys.isInEmbeddedEditor.toNegated(),
								),
								menu: [
									{
										id: s.$XX.EditorContext,
										group: "testing",
										order: rt.PeekRelated,
									},
								],
							},
						);
					}
				}
				class ci extends Dt {
					async h(tt, at, pi, Li) {
						const Di = await et(this.q, this.s, at.uri, pi),
							Ui = await Promise.all(
								Di.map((Wi) => this.q.getCodeRelatedToTest(Wi)),
							);
						return new g.$pNb(Ui.flat(), (0, f.localize)(10691, null));
					}
					j() {
						return (0, f.localize)(10692, null);
					}
				}
				class ri extends ci {
					constructor() {
						super(
							{ openToSide: !1, openInPeek: !1, muteMessage: !1 },
							{
								id: B.TestCommandId.GoToRelatedCode,
								title: (0, f.localize2)(10744, "Go to Related Code"),
								category: ie,
								precondition: $.$Kj.and(
									V.TestingContextKeys.activeEditorHasTests,
									V.TestingContextKeys.canGoToRelatedCode,
								),
								menu: [
									{
										id: s.$XX.EditorContext,
										group: "testing",
										order: rt.GoToRelated,
									},
								],
							},
						);
					}
				}
				class $i extends ci {
					constructor() {
						super(
							{ openToSide: !1, openInPeek: !0, muteMessage: !1 },
							{
								id: B.TestCommandId.PeekRelatedCode,
								title: (0, f.localize2)(10745, "Peek Related Code"),
								category: ie,
								precondition: $.$Kj.and(
									V.TestingContextKeys.activeEditorHasTests,
									V.TestingContextKeys.canGoToRelatedCode,
									o.PeekContext.notInPeekEditor,
									c.EditorContextKeys.isInEmbeddedEditor.toNegated(),
								),
								menu: [
									{
										id: s.$XX.EditorContext,
										group: "testing",
										order: rt.PeekRelated,
									},
								],
							},
						);
					}
				}
				e.$yMc = [
					ei,
					ke,
					mi,
					Ve,
					je,
					ve,
					fe,
					me,
					pe,
					Se,
					lt,
					kt,
					xt,
					Je,
					Rt,
					ae,
					Be,
					nt,
					ti,
					Xe,
					Lt,
					Ke,
					ht,
					xe,
					Oe,
					ri,
					si,
					Ze,
					Z,
					ii,
					Bt,
					$i,
					Zt,
					Ut,
					ze,
					It,
					ye,
					Ie,
					bt,
					jt,
					He,
					gt,
					$e,
					Vt,
					ue,
					Re,
					Le,
					be,
					De,
					Me,
					Ae,
					Ue,
					qe,
					Gt,
					re,
					se,
				];
			},
		),
		
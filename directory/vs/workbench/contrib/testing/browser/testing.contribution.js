import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/progress/common/progress.js';
import '../../../../platform/registry/common/platform.js';
import '../../../browser/parts/views/viewPaneContainer.js';
import '../../../common/contributions.js';
import '../../../common/views.js';
import '../../files/browser/fileConstants.js';
import './codeCoverageDecorations.js';
import './icons.js';
import './testCoverageView.js';
import './testingDecorations.js';
import './testingExplorerView.js';
import './testingOutputPeek.js';
import './testingProgressUiService.js';
import './testingViewPaneContainer.js';
import '../common/configuration.js';
import '../common/constants.js';
import '../common/testCoverageService.js';
import '../common/testExplorerFilterState.js';
import '../common/testId.js';
import '../common/testProfileService.js';
import '../common/testResultService.js';
import '../common/testResultStorage.js';
import '../common/testService.js';
import '../common/testServiceImpl.js';
import '../common/testingContentProvider.js';
import '../common/testingContextKeys.js';
import '../common/testingContinuousRunService.js';
import '../common/testingDecorations.js';
import '../common/testingPeekOpener.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../services/views/common/viewsService.js';
import './testExplorerActions.js';
import './testingConfigurationUi.js';
define(
			de[4048],
			he([
				1, 0, 46, 4, 11, 31, 81, 8, 22, 102, 20, 41, 84, 30, 239, 55, 60, 554,
				3841, 470, 3842, 3185, 3846, 3845, 1909, 4047, 443, 353, 630, 1001, 259,
				420, 381, 1774, 379, 3271, 3186, 380, 1268, 1772, 812, 52, 89, 1908,
				3182,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, u.$lK)(A.$sqc, R.$LLc, u.InstantiationType.Delayed),
					(0, u.$lK)(N.$Gqc, N.$Jqc, u.InstantiationType.Delayed),
					(0, u.$lK)(D.$Bqc, D.$Eqc, u.InstantiationType.Delayed),
					(0, u.$lK)(P.$TJc, P.$UJc, u.InstantiationType.Delayed),
					(0, u.$lK)(U.$MLc, U.$NLc, u.InstantiationType.Delayed),
					(0, u.$lK)(M.$Kqc, M.$Lqc, u.InstantiationType.Delayed),
					(0, u.$lK)(k.$xLc, k.$yLc, u.InstantiationType.Delayed),
					(0, u.$lK)(F.$ZKc, $.$BLc, u.InstantiationType.Delayed),
					(0, u.$lK)(z.$YKc, l.$4Kc, u.InstantiationType.Delayed);
				const V = c.$Io
						.as(p.Extensions.ViewContainersRegistry)
						.registerViewContainer(
							{
								id: T.Testing.ViewletId,
								title: (0, i.localize2)(10749, "Testing"),
								ctorDescriptor: new r.$Ji(S.$EMc),
								icon: b.$sKc,
								alwaysUseContainerInfo: !0,
								order: 6,
								openCommandActionDescriptor: {
									id: T.Testing.ViewletId,
									mnemonicTitle: (0, i.localize)(10746, null),
									order: 4,
								},
								hideIfEmpty: !0,
							},
							p.ViewContainerLocation.Sidebar,
						),
					G = c.$Io
						.as(p.Extensions.ViewContainersRegistry)
						.registerViewContainer(
							{
								id: T.Testing.ResultsPanelId,
								title: (0, i.localize2)(10750, "Test Results"),
								icon: b.$tKc,
								ctorDescriptor: new r.$Ji(n.$ZSb, [
									T.Testing.ResultsPanelId,
									{ mergeViewWithContainerWhenSingleView: !0 },
								]),
								hideIfEmpty: !0,
								order: 3,
							},
							p.ViewContainerLocation.Panel,
							{ doNotRegisterOpenCommand: !0 },
						),
					K = c.$Io.as(p.Extensions.ViewsRegistry);
				K.registerViews(
					[
						{
							id: T.Testing.ResultsViewId,
							name: (0, i.localize2)(10751, "Test Results"),
							containerIcon: b.$tKc,
							canToggleVisibility: !1,
							canMoveView: !0,
							when: B.TestingContextKeys.hasAnyResults.isEqualTo(!0),
							ctorDescriptor: new r.$Ji($.$DLc),
						},
					],
					G,
				),
					K.registerViewWelcomeContent(T.Testing.ExplorerViewId, {
						content: (0, i.localize)(10747, null),
					}),
					K.registerViewWelcomeContent(T.Testing.ExplorerViewId, {
						content:
							"[" +
							(0, i.localize)(10748, null) +
							`](command:${T.TestCommandId.SearchForTestExtension})`,
						order: 10,
					}),
					K.registerViews(
						[
							{
								id: T.Testing.ExplorerViewId,
								name: (0, i.localize2)(10752, "Test Explorer"),
								ctorDescriptor: new r.$Ji(y.$DMc),
								canToggleVisibility: !0,
								canMoveView: !0,
								weight: 80,
								order: -999,
								containerIcon: b.$sKc,
								when: d.$Kj.greater(B.TestingContextKeys.providerCount.key, 0),
							},
							{
								id: T.Testing.CoverageViewId,
								name: (0, i.localize2)(10753, "Test Coverage"),
								ctorDescriptor: new r.$Ji(s.$TKc),
								canToggleVisibility: !0,
								canMoveView: !0,
								weight: 80,
								order: -998,
								containerIcon: b.$sKc,
								when: B.TestingContextKeys.isTestCoverageOpen,
							},
						],
						V,
					),
					q.$yMc.forEach(w.$4X),
					(0, w.$4X)($.$ILc),
					(0, w.$4X)($.$GLc),
					(0, w.$4X)($.$FLc),
					(0, w.$4X)($.$ELc),
					(0, w.$4X)($.$JLc),
					(0, w.$4X)($.$HLc),
					c.$Io
						.as(g.Extensions.Workbench)
						.registerWorkbenchContribution(O.$FMc, x.LifecyclePhase.Restored),
					c.$Io
						.as(g.Extensions.Workbench)
						.registerWorkbenchContribution($.$BLc, x.LifecyclePhase.Eventually),
					c.$Io
						.as(g.Extensions.Workbench)
						.registerWorkbenchContribution(v.$AMc, x.LifecyclePhase.Eventually),
					(0, t.$qtb)(
						T.Testing.OutputPeekContributionId,
						$.$CLc,
						t.EditorContributionInstantiation.AfterFirstRender,
					),
					(0, t.$qtb)(
						T.Testing.DecorationsContributionId,
						l.$5Kc,
						t.EditorContributionInstantiation.AfterFirstRender,
					),
					(0, t.$qtb)(
						T.Testing.CoverageDecorationsContributionId,
						f.$QKc,
						t.EditorContributionInstantiation.Eventually,
					),
					E.$fk.registerCommand({
						id: "_revealTestInExplorer",
						handler: async (J, W, X) => {
							(J.get(k.$xLc).reveal.value = typeof W == "string" ? W : W.extId),
								J.get(H.$HMb).openView(T.Testing.ExplorerViewId, X);
						},
					}),
					E.$fk.registerCommand({
						id: "vscode.peekTestError",
						handler: async (J, W) => {
							const X = J.get(M.$Kqc).getStateById(W);
							if (!X) return !1;
							const [Y, ie] = X,
								ne = J.get(F.$ZKc);
							if (ne.tryPeekFirstError(Y, ie)) return !0;
							for (const ee of Y.tests)
								if (
									L.$k4.compare(ie.item.extId, ee.item.extId) ===
										L.TestPosition.IsChild &&
									ne.tryPeekFirstError(Y, ee)
								)
									return !0;
							return !1;
						},
					}),
					E.$fk.registerCommand({
						id: "vscode.revealTest",
						handler: async (J, W) => {
							const X = J.get(A.$sqc).collection.getNodeById(W);
							if (!X) return;
							const Y = J.get(E.$ek),
								ie = J.get(m.$ll),
								ne = J.get(a.$7rb),
								{ range: ee, uri: _ } = X.item;
							if (!_) return;
							const te =
								J.get(z.$YKc).getDecoratedTestPosition(_, W) ||
								ee?.getStartPosition();
							(J.get(k.$xLc).reveal.value = W), J.get(F.$ZKc).closeAllPeeks();
							let Q = !0;
							try {
								(await ie.stat(_)).isFile || (Q = !1);
							} catch {}
							if (!Q) {
								await Y.executeCommand(o.$VUb, _);
								return;
							}
							await ne.open(
								te ? _.with({ fragment: `L${te.lineNumber}:${te.column}` }) : _,
							);
						},
					}),
					E.$fk.registerCommand({
						id: "vscode.runTestsById",
						handler: async (J, W, ...X) => {
							const Y = J.get(A.$sqc);
							await (0, q.$lMc)(
								J.get(A.$sqc).collection,
								J.get(h.$8N),
								X,
								(ie) => Y.runTests({ group: W, tests: ie }),
							);
						},
					}),
					c.$Io.as(C.$No.Configuration).registerConfiguration(I.$QJc);
			},
		),
		
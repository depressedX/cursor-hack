import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../common/issue.js';
import '../common/issue.contribution.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/registry/common/platform.js';
import '../../../common/contributions.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../platform/action/common/actionCommonCategories.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/quickinput/common/quickAccess.js';
import '../browser/issueQuickAccess.js';
import '../../../../platform/instantiation/common/extensions.js';
import './issueService.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import './nativeIssueFormService.js';
import './issueMainService.js';
import '../browser/issueTroubleshoot.js';
define(
			de[3755],
			he([
				1, 0, 4, 11, 376, 3067, 62, 30, 55, 52, 99, 10, 348, 3310, 20, 3573, 81,
				3449, 1736, 3754,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, n.$lK)(w.$7Xb, g.$cgd, n.InstantiationType.Delayed),
					(0, n.$lK)(w.$6Xb, o.$ggd, n.InstantiationType.Delayed);
				let f = class extends E.$y6c {
					constructor(l, y) {
						super(l, y), l.reportIssueUrl && this.D((0, i.$4X)(b));
						let $;
						const v = () => {
							$ = d.$Io
								.as(h.$1r.Quickaccess)
								.registerQuickAccessProvider({
									ctor: c.$bgd,
									prefix: c.$bgd.PREFIX,
									contextKey: "inReportIssuePicker",
									placeholder: (0, t.localize)(7273, null),
									helpEntries: [
										{
											description: (0, t.localize)(7274, null),
											commandId: "workbench.action.openIssueReporter",
										},
									],
								});
						};
						d.$Io
							.as(p.$No.Configuration)
							.registerConfiguration({
								properties: {
									"issueReporter.experimental.auxWindow": {
										type: "boolean",
										default: !0,
										description:
											"Enable the new experimental issue reporter in electron.",
									},
								},
							}),
							this.D(
								y.onDidChangeConfiguration((S) => {
									!y.getValue("extensions.experimental.issueQuickAccess") && $
										? ($.dispose(), ($ = void 0))
										: $ || v();
								}),
							),
							y.getValue("extensions.experimental.issueQuickAccess") && v();
					}
				};
				(f = Ne([j(0, C.$Bk), j(1, a.$gj)], f)),
					d.$Io
						.as(m.Extensions.Workbench)
						.registerWorkbenchContribution(f, r.LifecyclePhase.Restored);
				class b extends i.$3X {
					static {
						this.ID = "workbench.action.reportPerformanceIssueUsingReporter";
					}
					constructor() {
						super({
							id: b.ID,
							title: (0, t.localize2)(7275, "Report Performance Issue..."),
							category: u.$ck.Help,
							f1: !0,
						});
					}
					async run(l) {
						return l
							.get(w.$7Xb)
							.openReporter({ issueType: w.IssueType.PerformanceIssue });
					}
				}
			},
		),
		
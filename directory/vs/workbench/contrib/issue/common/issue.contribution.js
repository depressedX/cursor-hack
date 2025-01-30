import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/constants.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/product/common/productService.js';
import './issue.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../base/common/lifecycle.js';
define(
			de[3067],
			he([1, 0, 58, 4, 11, 31, 62, 376, 10, 3]),
			function (ce /*require*/,
 e /*exports*/,
 t /*constants*/,
 i /*nls*/,
 w /*actions*/,
 E /*commands*/,
 C /*productService*/,
 d /*issue*/,
 m /*configuration*/,
 r /*lifecycle*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$y6c = void 0);
				const u = "workbench.action.openIssueReporter",
					a = "vscode.openIssueReporter",
					h = {
						description:
							"Open the issue reporter and optionally prefill part of the form.",
						args: [
							{
								name: "options",
								description: "Data to use to prefill the issue reporter with.",
								isOptional: !0,
								schema: {
									oneOf: [
										{
											type: "string",
											description: "The extension id to preselect.",
										},
										{
											type: "object",
											properties: {
												extensionId: { type: "string" },
												issueTitle: { type: "string" },
												issueBody: { type: "string" },
											},
										},
									],
								},
							},
						],
					};
				let c = class extends r.$1c {
					constructor(g, p) {
						super(),
							g.reportIssueUrl &&
								(this.D(
									E.$fk.registerCommand({
										id: u,
										handler: function (o, f) {
											const b =
												typeof f == "string"
													? { extensionId: f }
													: Array.isArray(f)
														? { extensionId: f[0] }
														: (f ?? {});
											return o.get(d.$7Xb).openReporter(b);
										},
										metadata: h,
									}),
								),
								this.D(
									E.$fk.registerCommand({
										id: a,
										handler: function (o, f) {
											const b =
												typeof f == "string"
													? { extensionId: f }
													: Array.isArray(f)
														? { extensionId: f[0] }
														: (f ?? {});
											return o.get(d.$7Xb).openReporter(b);
										},
										metadata: h,
									}),
								),
								this.D(
									w.$ZX.appendMenuItem(w.$XX.MenubarHelpMenu, {
										group: "3_feedback",
										command: { id: t.$rX, title: (0, i.localize)(7272, null) },
										order: 3,
									}),
								));
					}
				};
				(e.$y6c = c), (e.$y6c = c = Ne([j(0, C.$Bk), j(1, m.$gj)], c));
			},
		),
		
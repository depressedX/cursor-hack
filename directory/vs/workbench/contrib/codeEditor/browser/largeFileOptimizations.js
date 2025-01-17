import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/path.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/notification/common/notification.js';
define(
			de[3019],
			he([1, 0, 4, 54, 3, 46, 10, 40]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$NXc = void 0),
					(t = mt(t)),
					(i = mt(i));
				let m = class extends w.$1c {
					static {
						this.ID = "editor.contrib.largeFileOptimizationsWarner";
					}
					constructor(u, a, h) {
						super(),
							(this.a = u),
							(this.b = a),
							(this.c = h),
							this.D(this.a.onDidChangeModel((c) => this.f())),
							this.f();
					}
					f() {
						const u = this.a.getModel();
						if (u && u.isTooLargeForTokenization()) {
							const a = t.localize(4882, null, i.$sc(u.uri.path));
							this.b.prompt(
								d.Severity.Info,
								a,
								[
									{
										label: t.localize(4883, null),
										run: () => {
											this.c
												.updateValue("editor.largeFileOptimizations", !1)
												.then(
													() => {
														this.b.info(t.localize(4884, null));
													},
													(h) => {
														this.b.error(h);
													},
												);
										},
									},
								],
								{
									neverShowAgain: {
										id: "editor.contrib.largeFileOptimizationsWarner",
									},
								},
							);
						}
					}
				};
				(e.$NXc = m),
					(e.$NXc = m = Ne([j(1, d.$4N), j(2, C.$gj)], m)),
					(0, E.$qtb)(
						m.ID,
						m,
						E.EditorContributionInstantiation.AfterFirstRender,
					);
			},
		),
		
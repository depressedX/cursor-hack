import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/registry/common/platform.js';
import '../../../common/contributions.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../base/common/resources.js';
import '../../../services/host/browser/host.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/workspace/common/virtualWorkspace.js';
import '../../../../platform/actions/common/actions.js';
import '../../../common/contextkeys.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../files/common/files.js';
define(
			de[3700],
			he([
				1, 0, 4, 30, 55, 52, 25, 3, 22, 40, 19, 87, 63, 21, 349, 11, 100, 8,
				220,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*platform*/,
 w /*contributions*/,
 E /*lifecycle*/,
 C /*workspace*/,
 d /*lifecycle*/,
 m /*files*/,
 r /*notification*/,
 u /*resources*/,
 a /*host*/,
 h /*quickInput*/,
 c /*storage*/,
 n /*virtualWorkspace*/,
 g /*actions*/,
 p /*contextkeys*/,
 o /*contextkey*/,
 f /*files*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$s2c = void 0);
				let b = class extends d.$1c {
					constructor(l, y, $, v, S, I) {
						super(),
							(this.a = l),
							(this.b = y),
							(this.c = $),
							(this.f = v),
							(this.g = S),
							(this.h = I),
							this.j();
					}
					async j() {
						const l = this.a.getWorkspace().folders[0];
						if (
							!l ||
							this.a.getWorkbenchState() !== C.WorkbenchState.FOLDER ||
							(0, n.$H8)(this.a.getWorkspace())
						)
							return;
						const y = (await this.c.resolve(l.uri)).children?.map(
							($) => $.name,
						);
						if (Array.isArray(y)) {
							const $ = y.filter(C.$fj);
							$.length > 0 && this.m(l.uri, $);
						}
					}
					m(l, y) {
						const $ = {
							id: "workspaces.dontPromptToOpen",
							scope: r.NeverShowAgainScope.WORKSPACE,
							isSecondary: !0,
						};
						if (y.length === 1) {
							const v = y[0];
							this.b.prompt(
								r.Severity.Info,
								(0, t.localize)(
									11803,
									null,
									v,
									"https://go.microsoft.com/fwlink/?linkid=2025315",
								),
								[
									{
										label: (0, t.localize)(11804, null),
										run: () =>
											this.g.openWindow([{ workspaceUri: (0, u.$nh)(l, v) }]),
									},
								],
								{
									neverShowAgain: $,
									priority: this.h.isNew(c.StorageScope.WORKSPACE)
										? void 0
										: r.NotificationPriority.SILENT,
								},
							);
						} else
							y.length > 1 &&
								this.b.prompt(
									r.Severity.Info,
									(0, t.localize)(
										11805,
										null,
										"https://go.microsoft.com/fwlink/?linkid=2025315",
									),
									[
										{
											label: (0, t.localize)(11806, null),
											run: () => {
												this.f
													.pick(
														y.map((v) => ({ label: v })),
														{ placeHolder: (0, t.localize)(11807, null) },
													)
													.then((v) => {
														v &&
															this.g.openWindow([
																{ workspaceUri: (0, u.$nh)(l, v.label) },
															]);
													});
											},
										},
									],
									{
										neverShowAgain: $,
										priority: this.h.isNew(c.StorageScope.WORKSPACE)
											? void 0
											: r.NotificationPriority.SILENT,
									},
								);
					}
				};
				(e.$s2c = b),
					(e.$s2c = b =
						Ne(
							[
								j(0, C.$Vi),
								j(1, r.$4N),
								j(2, m.$ll),
								j(3, h.$DJ),
								j(4, a.$asb),
								j(5, c.$lq),
							],
							b,
						)),
					i.$Io
						.as(w.Extensions.Workbench)
						.registerWorkbenchContribution(b, E.LifecyclePhase.Eventually),
					(0, g.$4X)(
						class extends g.$3X {
							constructor() {
								super({
									id: "workbench.action.openWorkspaceFromEditor",
									title: (0, t.localize2)(11809, "Open Workspace"),
									f1: !1,
									menu: {
										id: g.$XX.EditorContent,
										when: o.$Kj.and(
											p.$BQb.Extension.isEqualTo(C.$0i),
											p.$TPb.isEqualTo(f.$PUb),
											p.$EPb.toNegated(),
										),
									},
								});
							}
							async run(s, l) {
								const y = s.get(a.$asb),
									$ = s.get(C.$Vi),
									v = s.get(r.$4N);
								if ($.getWorkbenchState() === C.WorkbenchState.WORKSPACE) {
									const S = $.getWorkspace().configuration;
									if (S && (0, u.$gh)(S, l)) {
										v.info((0, t.localize)(11808, null));
										return;
									}
								}
								return y.openWindow([{ workspaceUri: l }]);
							}
						},
					);
			},
		),
		
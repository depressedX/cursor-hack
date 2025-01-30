import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/types.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/storage/common/storage.js';
import '../../../common/contributions.js';
import '../../extensions/common/extensions.js';
import '../../../services/extensionManagement/common/extensionManagement.js';
import '../../../services/lifecycle/common/lifecycle.js';
define(
			de[3424],
			he([1, 0, 50, 29, 28, 4, 10, 40, 41, 30, 21, 55, 141, 157, 52]),
			function (ce /*require*/,
 e /*exports*/,
 t /*actions*/,
 i /*errors*/,
 w /*types*/,
 E /*nls*/,
 C /*configuration*/,
 d /*notification*/,
 m /*opener*/,
 r /*platform*/,
 u /*storage*/,
 a /*contributions*/,
 h /*extensions*/,
 c /*extensionManagement*/,
 n /*lifecycle*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let g = class {
					constructor(o, f, b, s, l) {
						(this.a = o),
							(this.b = f),
							(this.c = b),
							(this.f = s),
							(this.g = l),
							(this.i = "deprecatedExtensionMigrator.state"),
							this.h().catch(i.$4);
					}
					async h() {
						const o = "coenraads.bracket-pair-colorizer";
						await this.b.queryLocal();
						const f = this.b.installed.find(($) => $.identifier.id === o);
						if (
							!f ||
							(f.enablementState !== c.EnablementState.EnabledGlobally &&
								f.enablementState !== c.EnablementState.EnabledWorkspace)
						)
							return;
						const b = await this.j();
						if (b.disablementLog.some(($) => $.extensionId === o)) return;
						b.disablementLog.push({
							extensionId: o,
							disablementDateTime: new Date().getTime(),
						}),
							await this.k(b),
							await this.b.setEnablement(f, c.EnablementState.DisabledGlobally);
						const l = "editor.bracketPairColorization.enabled",
							y = !!this.a.inspect(l).user;
						this.f.notify({
							message: (0, E.localize)(5910, null),
							severity: d.Severity.Info,
							actions: {
								primary: [
									new t.$rj(
										"",
										(0, E.localize)(5911, null),
										void 0,
										void 0,
										() => {
											this.b.uninstall(f);
										},
									),
								],
								secondary: [
									y
										? void 0
										: new t.$rj(
												"",
												(0, E.localize)(5912, null),
												void 0,
												void 0,
												() => {
													this.a.updateValue(l, !0, C.ConfigurationTarget.USER);
												},
											),
									new t.$rj(
										"",
										(0, E.localize)(5913, null),
										void 0,
										void 0,
										() => {
											this.g.open(
												"https://github.com/microsoft/vscode/issues/155179",
											);
										},
									),
								].filter(w.$tg),
							},
						});
					}
					async j() {
						const o = await this.c.get(this.i, u.StorageScope.APPLICATION, "");
						return o === "" ? { disablementLog: [] } : JSON.parse(o);
					}
					async k(o) {
						const f = JSON.stringify(o);
						await this.c.store(
							this.i,
							f,
							u.StorageScope.APPLICATION,
							u.StorageTarget.USER,
						);
					}
				};
				(g = Ne(
					[j(0, C.$gj), j(1, h.$MQb), j(2, u.$lq), j(3, d.$4N), j(4, m.$7rb)],
					g,
				)),
					r.$Io
						.as(a.Extensions.Workbench)
						.registerWorkbenchContribution(g, n.LifecyclePhase.Restored);
			},
		),
		
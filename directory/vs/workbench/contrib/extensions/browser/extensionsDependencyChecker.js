import '../../../../../require.js';
import '../../../../../exports.js';
import '../common/extensions.js';
import '../../../services/extensions/common/extensions.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../nls.js';
import '../../../../platform/extensionManagement/common/extensionManagementUtil.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../base/common/actions.js';
import '../../../services/host/browser/host.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/async.js';
define(
			de[3386],
			he([1, 0, 141, 53, 31, 11, 4, 154, 40, 50, 87, 3, 33, 15]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ATc = void 0);
				let n = class extends a.$1c {
					constructor(p, o, f, b) {
						super(),
							(this.a = p),
							(this.b = o),
							(this.c = f),
							(this.f = b),
							w.$fk.registerCommand(
								"workbench.extensions.installMissingDependencies",
								() => this.j(),
							),
							E.$ZX.appendMenuItem(E.$XX.CommandPalette, {
								command: {
									id: "workbench.extensions.installMissingDependencies",
									category: (0, C.localize)(6413, null),
									title: (0, C.localize)(6414, null),
								},
							});
					}
					async g() {
						const p = await this.h(),
							o = await this.b.queryLocal();
						return p.filter((f) =>
							o.every((b) => !(0, d.$7p)(b.identifier, { id: f })),
						);
					}
					async h() {
						await this.a.whenInstalledExtensionsRegistered();
						const p = this.a.extensions.reduce(
								(f, b) => (f.add(b.identifier.value.toLowerCase()), f),
								new Set(),
							),
							o = new Set();
						for (const f of this.a.extensions)
							f.extensionDependencies &&
								f.extensionDependencies.forEach((b) => {
									p.has(b.toLowerCase()) || o.add(b);
								});
						return [...o.values()];
					}
					async j() {
						const p = await this.g();
						if (p.length) {
							const o = await this.b.getExtensions(
								p.map((f) => ({ id: f })),
								h.CancellationToken.None,
							);
							o.length &&
								(await c.Promises.settled(o.map((f) => this.b.install(f))),
								this.c.notify({
									severity: m.Severity.Info,
									message: (0, C.localize)(6415, null),
									actions: {
										primary: [
											new r.$rj(
												"realod",
												(0, C.localize)(6416, null),
												"",
												!0,
												() => this.f.reload(),
											),
										],
									},
								}));
						} else this.c.info((0, C.localize)(6417, null));
					}
				};
				(e.$ATc = n),
					(e.$ATc = n =
						Ne([j(0, i.$q2), j(1, t.$MQb), j(2, m.$4N), j(3, u.$asb)], n));
			},
		),
		
import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/jsonc.js';
import '../../../../platform/environment/common/environment.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/storage/common/storage.js';
import '../../../common/contributions.js';
import '../../../services/configuration/common/jsonEditing.js';
import '../../../services/lifecycle/common/lifecycle.js';
define(
			de[3425],
			he([1, 0, 12, 3426, 113, 22, 30, 21, 55, 423, 52]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let a = class {
					constructor(c, n, g, p) {
						(this.a = c), (this.b = n), (this.c = g), (this.d = p), this.e();
					}
					async e() {
						if (
							!(
								!t.$n ||
								this.d.getBoolean(
									"encryption.migratedToGnomeLibsecret",
									d.StorageScope.APPLICATION,
									!1,
								)
							)
						)
							try {
								const c = await this.c.readFile(this.b.argvResource),
									n = (0, i.parse)(c.value.toString());
								(n["password-store"] === "gnome" ||
									n["password-store"] === "gnome-keyring") &&
									this.a.write(
										this.b.argvResource,
										[{ path: ["password-store"], value: "gnome-libsecret" }],
										!0,
									),
									this.d.store(
										"encryption.migratedToGnomeLibsecret",
										!0,
										d.StorageScope.APPLICATION,
										d.StorageTarget.USER,
									);
							} catch (c) {
								console.error(c);
							}
					}
				};
				(a = Ne([j(0, r.$$Qb), j(1, w.$Ti), j(2, E.$ll), j(3, d.$lq)], a)),
					C.$Io
						.as(m.Extensions.Workbench)
						.registerWorkbenchContribution(a, u.LifecyclePhase.Eventually);
			},
		),
		
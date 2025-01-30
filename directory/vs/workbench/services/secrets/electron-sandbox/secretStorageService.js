import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/functional.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/severity.js';
import '../../../../nls.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/encryption/common/encryptionService.js';
import '../../../../platform/environment/common/environment.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/secrets/common/secrets.js';
import '../../../../platform/storage/common/storage.js';
import '../../configuration/common/jsonEditing.js';
define(
		de[3602],
		he([1, 0, 288, 12, 111, 4, 57, 1186, 113, 20, 34, 40, 41, 783, 21, 423]),
		function (ce /*require*/,
 e /*exports*/,
 t /*functional*/,
 i /*platform*/,
 w /*severity*/,
 E /*nls*/,
 C /*dialogs*/,
 d /*encryptionService*/,
 m /*environment*/,
 r /*extensions*/,
 u /*log*/,
 a /*notification*/,
 h /*opener*/,
 c /*secrets*/,
 n /*storage*/,
 g /*jsonEditing*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Mdd = void 0),
				(w = xi(w));
			let p = class extends c.$Zrb {
				constructor(f, b, s, l, y, $, v, S) {
					super(!!y.useInMemorySecretStorage, $, v, S),
						(this.y = f),
						(this.z = b),
						(this.C = s),
						(this.F = l),
						(this.G = y),
						(this.H = (0, t.$hb)(() => this.I()));
				}
				set(f, b) {
					return (
						this.c.queue(f, async () => {
							await this.r,
								this.type !== "persisted" &&
									!this.G.useInMemorySecretStorage &&
									(this.n.trace(
										"[NativeSecretStorageService] Notifying user that secrets are not being stored on disk.",
									),
									await this.H());
						}),
						super.set(f, b)
					);
				}
				async I() {
					const f = [],
						b = {
							label: (0, E.localize)(12649, null),
							run: () =>
								this.C.open("https://go.microsoft.com/fwlink/?linkid=2239490"),
							keepOpen: !0,
						};
					f.push(b);
					let s = (0, E.localize)(12650, null);
					if (!i.$n) {
						this.y.prompt(w.default.Error, s, f);
						return;
					}
					const l = await this.m.getKeyStorageProvider();
					if (l === d.KnownStorageProvider.basicText) {
						const y = (0, E.localize)(12651, null),
							$ = {
								label: (0, E.localize)(12652, null),
								run: async () => {
									await this.m.setUsePlainTextEncryption(),
										await this.F.write(
											this.G.argvResource,
											[
												{
													path: ["password-store"],
													value: d.PasswordStoreCLIOption.basic,
												},
											],
											!0,
										),
										this.t();
								},
							};
						f.unshift($),
							await this.z.prompt({
								type: "error",
								buttons: f,
								message: s,
								detail: y,
							});
						return;
					}
					(0, d.$Xrb)(l)
						? (s = (0, E.localize)(12653, null))
						: (0, d.$Wrb)(l) && (s = (0, E.localize)(12654, null)),
						this.y.prompt(w.default.Error, s, f);
				}
			};
			(e.$Mdd = p),
				(e.$Mdd = p =
					Ne(
						[
							j(0, a.$4N),
							j(1, C.$GO),
							j(2, h.$7rb),
							j(3, g.$$Qb),
							j(4, m.$Ui),
							j(5, n.$lq),
							j(6, d.$Urb),
							j(7, u.$ik),
						],
						p,
					)),
				(0, r.$lK)(c.$Yrb, p, r.InstantiationType.Delayed);
		},
	),
		
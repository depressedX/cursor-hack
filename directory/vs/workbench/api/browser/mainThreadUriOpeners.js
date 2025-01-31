import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/actions.js';
import '../../../base/common/errors.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/network.js';
import '../../../nls.js';
import '../../../platform/notification/common/notification.js';
import '../../../platform/opener/common/opener.js';
import '../../../platform/storage/common/storage.js';
import '../common/extHost.protocol.js';
import '../../contrib/externalUriOpener/common/configuration.js';
import '../../contrib/externalUriOpener/common/contributedOpeners.js';
import '../../contrib/externalUriOpener/common/externalUriOpenerService.js';
import '../../services/extensions/common/extensions.js';
import '../../services/extensions/common/extHostCustomers.js';
define(
			de[3555],
			he([1, 0, 50, 29, 3, 23, 4, 40, 41, 21, 88, 1033, 3554, 1034, 53, 101]),
			function (ce /*require*/,
 e /*exports*/,
 t /*actions*/,
 i /*errors*/,
 w /*lifecycle*/,
 E /*network*/,
 C /*nls*/,
 d /*notification*/,
 m /*opener*/,
 r /*storage*/,
 u /*extHost.protocol*/,
 a /*configuration*/,
 h /*contributedOpeners*/,
 c /*externalUriOpenerService*/,
 n /*extensions*/,
 g /*extHostCustomers*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Noc = void 0);
				let p = class extends w.$1c {
					constructor(f, b, s, l, y, $) {
						super(),
							(this.f = l),
							(this.g = y),
							(this.h = $),
							(this.b = new Map()),
							(this.a = f.getProxy(u.$mbb.ExtHostUriOpeners)),
							this.D(s.registerExternalOpenerProvider(this)),
							(this.c = this.D(new h.ContributedExternalUriOpenersStore(b, l)));
					}
					async *getOpeners(f) {
						if (
							!(f.scheme !== E.Schemas.http && f.scheme !== E.Schemas.https)
						) {
							await this.f.activateByEvent(`onOpenExternalUri:${f.scheme}`);
							for (const [b, s] of this.b)
								s.schemes.has(f.scheme) && (yield this.j(b, s));
						}
					}
					j(f, b) {
						return {
							id: f,
							label: b.label,
							canOpen: (s, l) => this.a.$canOpenUri(f, s, l),
							openExternalUri: async (s, l, y) => {
								try {
									await this.a.$openUri(
										f,
										{ resolvedUri: s, sourceUri: l.sourceUri },
										y,
									);
								} catch ($) {
									if (!(0, i.$8)($)) {
										const v = new t.$rj(
											"default",
											(0, C.localize)(2582, null),
											void 0,
											void 0,
											async () => {
												await this.g.open(s, {
													allowTunneling: !1,
													allowContributedOpeners: a.defaultExternalUriOpenerId,
												});
											},
										);
										(v.tooltip = s.toString()),
											this.h.notify({
												severity: d.Severity.Error,
												message: (0, C.localize)(2583, null, f, $.toString()),
												actions: { primary: [v] },
											});
									}
								}
								return !0;
							},
						};
					}
					async $registerUriOpener(f, b, s, l) {
						if (this.b.has(f))
							throw new Error(`Opener with id '${f}' already registered`);
						this.b.set(f, { schemes: new Set(b), label: l, extensionId: s }),
							this.c.didRegisterOpener(f, s.value);
					}
					async $unregisterUriOpener(f) {
						this.b.delete(f), this.c.delete(f);
					}
					dispose() {
						super.dispose(), this.b.clear();
					}
				};
				(e.$Noc = p),
					(e.$Noc = p =
						Ne(
							[
								(0, g.$tmc)(u.$lbb.MainThreadUriOpeners),
								j(1, r.$lq),
								j(2, c.IExternalUriOpenerService),
								j(3, n.$q2),
								j(4, m.$7rb),
								j(5, d.$4N),
							],
							p,
						));
			},
		)

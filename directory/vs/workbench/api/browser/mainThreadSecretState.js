import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/lifecycle.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../common/extHost.protocol.js';
import '../../../platform/log/common/log.js';
import '../../../base/common/async.js';
import '../../../platform/secrets/common/secrets.js';
import '../../services/environment/browser/environmentService.js';
define(
			de[3365],
			he([1, 0, 3, 101, 88, 34, 15, 783, 286]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*extHostCustomers*/,
 w /*extHost.protocol*/,
 E /*log*/,
 C /*async*/,
 d /*secrets*/,
 m /*environmentService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Nqc = void 0);
				let r = class extends t.$1c {
					constructor(a, h, c, n) {
						super(),
							(this.c = h),
							(this.f = c),
							(this.b = new C.$Ih()),
							(this.a = a.getProxy(w.$mbb.ExtHostSecretState)),
							this.D(
								this.c.onDidChangeSecret((g) => {
									try {
										const { extensionId: p, key: o } = this.n(g);
										p &&
											o &&
											this.a.$onDidChangePassword({ extensionId: p, key: o });
									} catch {}
								}),
							);
					}
					$getPassword(a, h) {
						return (
							this.f.trace(
								`[mainThreadSecretState] Getting password for ${a} extension: `,
								h,
							),
							this.b.queue(a, () => this.g(a, h))
						);
					}
					async g(a, h) {
						const c = this.m(a, h),
							n = await this.c.get(c);
						return (
							this.f.trace(
								`[mainThreadSecretState] ${n ? "P" : "No p"}assword found for: `,
								a,
								h,
							),
							n
						);
					}
					$setPassword(a, h, c) {
						return (
							this.f.trace(
								`[mainThreadSecretState] Setting password for ${a} extension: `,
								h,
							),
							this.b.queue(a, () => this.h(a, h, c))
						);
					}
					async h(a, h, c) {
						const n = this.m(a, h);
						await this.c.set(n, c),
							this.f.trace("[mainThreadSecretState] Password set for: ", a, h);
					}
					$deletePassword(a, h) {
						return (
							this.f.trace(
								`[mainThreadSecretState] Deleting password for ${a} extension: `,
								h,
							),
							this.b.queue(a, () => this.j(a, h))
						);
					}
					async j(a, h) {
						const c = this.m(a, h);
						await this.c.delete(c),
							this.f.trace(
								"[mainThreadSecretState] Password deleted for: ",
								a,
								h,
							);
					}
					m(a, h) {
						return JSON.stringify({ extensionId: a, key: h });
					}
					n(a) {
						return JSON.parse(a);
					}
				};
				(e.$Nqc = r),
					(e.$Nqc = r =
						Ne(
							[
								(0, i.$tmc)(w.$lbb.MainThreadSecretState),
								j(1, d.$Yrb),
								j(2, E.$ik),
								j(3, m.$5rb),
							],
							r,
						));
			},
		)

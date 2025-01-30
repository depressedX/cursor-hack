import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/storage/common/storage.js';
define(de[822], he([1, 0, 20, 5, 21]), function (ce /*require*/,
 e /*exports*/,
 t /*extensions*/,
 i /*instantiation*/,
 w /*storage*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$eqc = e.$dqc = void 0),
				(e.$dqc = (0, i.$Mi)("IAuthenticationUsageService"));
			let E = class {
				constructor(d) {
					this.a = d;
				}
				readAccountUsages(d, m) {
					const r = `${d}-${m}-usages`,
						u = this.a.get(r, w.StorageScope.APPLICATION);
					let a = [];
					if (u)
						try {
							a = JSON.parse(u);
						} catch {}
					return a;
				}
				removeAccountUsage(d, m) {
					const r = `${d}-${m}-usages`;
					this.a.remove(r, w.StorageScope.APPLICATION);
				}
				addAccountUsage(d, m, r, u) {
					const a = `${d}-${m}-usages`,
						h = this.readAccountUsages(d, m),
						c = h.findIndex((n) => n.extensionId === r);
					c > -1
						? h.splice(c, 1, {
								extensionId: r,
								extensionName: u,
								lastUsed: Date.now(),
							})
						: h.push({
								extensionId: r,
								extensionName: u,
								lastUsed: Date.now(),
							}),
						this.a.store(
							a,
							JSON.stringify(h),
							w.StorageScope.APPLICATION,
							w.StorageTarget.MACHINE,
						);
				}
			};
			(e.$eqc = E),
				(e.$eqc = E = Ne([j(0, w.$lq)], E)),
				(0, t.$lK)(e.$dqc, E, t.InstantiationType.Delayed);
		}),
		
import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/platform.js';
import '../../environment/common/environment.js';
import '../../storage/common/storage.js';
import '../../telemetry/common/telemetry.js';
import './userDataSync.js';
define(
			de[2938],
			he([1, 0, 6, 3, 12, 113, 21, 32, 150]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*platform*/,
 E /*environment*/,
 C /*storage*/,
 d /*telemetry*/,
 m /*userDataSync*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$J5c = void 0);
				const r = "sync.enable";
				let u = class extends i.$1c {
					constructor(h, c, n, g) {
						super(),
							(this.c = h),
							(this.f = c),
							(this.g = n),
							(this.h = g),
							(this.a = new t.$re()),
							(this.onDidChangeEnablement = this.a.event),
							(this.b = new t.$re()),
							(this.onDidChangeResourceEnablement = this.b.event),
							this.D(
								h.onDidChangeValue(
									C.StorageScope.APPLICATION,
									void 0,
									this.D(new i.$Zc()),
								)((p) => this.m(p)),
							);
					}
					isEnabled() {
						switch (this.g.sync) {
							case "on":
								return !0;
							case "off":
								return !1;
						}
						return this.c.getBoolean(r, C.StorageScope.APPLICATION, !1);
					}
					canToggleEnablement() {
						return (
							this.h.userDataSyncStore !== void 0 && this.g.sync === void 0
						);
					}
					setEnablement(h) {
						(h && !this.canToggleEnablement()) ||
							(this.f.publicLog2(r, { enabled: h }),
							this.c.store(
								r,
								h,
								C.StorageScope.APPLICATION,
								C.StorageTarget.MACHINE,
							));
					}
					isResourceEnabled(h) {
						return this.c.getBoolean(
							(0, m.$3Rb)(h),
							C.StorageScope.APPLICATION,
							!0,
						);
					}
					setResourceEnablement(h, c) {
						if (this.isResourceEnabled(h) !== c) {
							const n = (0, m.$3Rb)(h);
							this.j(n, c);
						}
					}
					getResourceSyncStateVersion(h) {}
					j(h, c) {
						this.c.store(
							h,
							c,
							C.StorageScope.APPLICATION,
							w.$r ? C.StorageTarget.USER : C.StorageTarget.MACHINE,
						);
					}
					m(h) {
						if (r === h.key) {
							this.a.fire(this.isEnabled());
							return;
						}
						const c = m.$PRb.filter((n) => (0, m.$3Rb)(n) === h.key)[0];
						if (c) {
							this.b.fire([c, this.isResourceEnabled(c)]);
							return;
						}
					}
				};
				(e.$J5c = u),
					(e.$J5c = u =
						Ne([j(0, C.$lq), j(1, d.$km), j(2, E.$Ti), j(3, m.$SRb)], u));
			},
		),
		
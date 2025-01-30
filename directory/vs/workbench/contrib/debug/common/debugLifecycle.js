import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/dialogs/common/dialogs.js';
import './debug.js';
import '../../../services/lifecycle/common/lifecycle.js';
define(
			de[3423],
			he([1, 0, 4, 10, 57, 112, 52]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*configuration*/,
 w /*dialogs*/,
 E /*debug*/,
 C /*lifecycle*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$kRc = void 0),
					(t = mt(t));
				let d = class {
					constructor(r, u, a, h) {
						(this.b = u),
							(this.c = a),
							(this.d = h),
							(this.a = r.onBeforeShutdown(async (c) =>
								c.veto(this.f(c.reason), "veto.debug"),
							));
					}
					f(r) {
						const u = this.b
							.getModel()
							.getSessions()
							.filter((h) => h.parentSession === void 0);
						return u.length === 0 ||
							this.c.getValue("debug").confirmOnExit === "never"
							? !1
							: this.g(u.length);
					}
					dispose() {
						return this.a.dispose();
					}
					async g(r) {
						let u;
						return (
							r === 1
								? (u = t.localize(5847, null))
								: (u = t.localize(5848, null)),
							!(
								await this.d.confirm({
									message: u,
									type: "warning",
									primaryButton: t.localize(5849, null),
								})
							).confirmed
						);
					}
				};
				(e.$kRc = d),
					(e.$kRc = d =
						Ne([j(0, C.$n6), j(1, E.$75), j(2, i.$gj), j(3, w.$GO)], d));
			},
		),
		
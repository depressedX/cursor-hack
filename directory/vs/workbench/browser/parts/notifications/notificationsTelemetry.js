import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../base/common/hash.js';
define(de[1698], he([1, 0, 3, 40, 32, 136]), function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*notification*/,
 w /*telemetry*/,
 E /*hash*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$R2c = void 0),
				(e.$Q2c = C);
			function C(m, r, u) {
				return {
					id: (0, E.$Aj)(m.toString()).toString(),
					silent: u,
					source: r || "core",
				};
			}
			let d = class extends t.$1c {
				constructor(r, u) {
					super(), (this.a = r), (this.b = u), this.c();
				}
				c() {
					this.D(
						this.b.onDidAddNotification((r) => {
							const u =
								r.source && typeof r.source != "string"
									? r.source.id
									: r.source;
							this.a.publicLog2(
								"notification:show",
								C(r.message, u, r.priority === i.NotificationPriority.SILENT),
							);
						}),
					),
						this.D(
							this.b.onDidRemoveNotification((r) => {
								const u =
									r.source && typeof r.source != "string"
										? r.source.id
										: r.source;
								this.a.publicLog2(
									"notification:close",
									C(r.message, u, r.priority === i.NotificationPriority.SILENT),
								);
							}),
						);
				}
			};
			(e.$R2c = d), (e.$R2c = d = Ne([j(0, w.$km), j(1, i.$4N)], d));
		}),
		
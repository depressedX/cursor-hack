import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../base/common/severity.js';
import '../../instantiation/common/instantiation.js';
define(de[40], he([1, 0, 6, 111, 5]), function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*severity*/,
 w /*instantiation*/) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.$7N =
				e.$6N =
				e.NotificationsFilter =
				e.NeverShowAgainScope =
				e.NotificationPriority =
				e.$4N =
				e.Severity =
					void 0),
			(e.$5N = d),
			(i = xi(i)),
			(e.Severity = i.default),
			(e.$4N = (0, w.$Mi)("notificationService"));
		var E;
		(function (a) {
			(a[(a.DEFAULT = 0)] = "DEFAULT"),
				(a[(a.SILENT = 1)] = "SILENT"),
				(a[(a.URGENT = 2)] = "URGENT");
		})(E || (e.NotificationPriority = E = {}));
		var C;
		(function (a) {
			(a[(a.WORKSPACE = 0)] = "WORKSPACE"),
				(a[(a.PROFILE = 1)] = "PROFILE"),
				(a[(a.APPLICATION = 2)] = "APPLICATION");
		})(C || (e.NeverShowAgainScope = C = {}));
		function d(a) {
			if (a) {
				const h = a;
				return typeof h.id == "string" && typeof h.label == "string";
			}
			return !1;
		}
		var m;
		(function (a) {
			(a[(a.OFF = 0)] = "OFF"), (a[(a.ERROR = 1)] = "ERROR");
		})(m || (e.NotificationsFilter = m = {}));
		class r {
			constructor() {
				(this.progress = new u()),
					(this.onDidClose = t.Event.None),
					(this.onDidChangeVisibility = t.Event.None);
			}
			updateSeverity(h) {}
			updateMessage(h) {}
			updateActions(h) {}
			close() {}
		}
		e.$6N = r;
		class u {
			infinite() {}
			done() {}
			total(h) {}
			worked(h) {}
		}
		e.$7N = u;
	})

import '../../../../../require.js';
import '../../../../../exports.js';
define(de[1757], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.TaskExecuteKind = e.Triggers = e.$Spc = e.TaskErrors = void 0);
			var t;
			(function (C) {
				(C[(C.NotConfigured = 0)] = "NotConfigured"),
					(C[(C.RunningTask = 1)] = "RunningTask"),
					(C[(C.NoBuildTask = 2)] = "NoBuildTask"),
					(C[(C.NoTestTask = 3)] = "NoTestTask"),
					(C[(C.ConfigValidationError = 4)] = "ConfigValidationError"),
					(C[(C.TaskNotFound = 5)] = "TaskNotFound"),
					(C[(C.NoValidTaskRunner = 6)] = "NoValidTaskRunner"),
					(C[(C.UnknownError = 7)] = "UnknownError");
			})(t || (e.TaskErrors = t = {}));
			class i {
				constructor(d, m, r) {
					(this.severity = d), (this.message = m), (this.code = r);
				}
			}
			e.$Spc = i;
			var w;
			(function (C) {
				(C.shortcut = "shortcut"),
					(C.command = "command"),
					(C.reconnect = "reconnect");
			})(w || (e.Triggers = w = {}));
			var E;
			(function (C) {
				(C[(C.Started = 1)] = "Started"), (C[(C.Active = 2)] = "Active");
			})(E || (e.TaskExecuteKind = E = {}));
		})

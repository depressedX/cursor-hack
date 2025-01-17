import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/instantiation.js';
define(de[52], he([1, 0, 5]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.LifecyclePhase =
					e.StartupKind =
					e.ShutdownReason =
					e.WillShutdownJoinerOrder =
					e.$n6 =
						void 0),
				(e.$o6 = C),
				(e.$p6 = m),
				(e.$n6 = (0, t.$Mi)("lifecycleService"));
			var i;
			(function (r) {
				(r[(r.Default = 1)] = "Default"), (r[(r.Last = 2)] = "Last");
			})(i || (e.WillShutdownJoinerOrder = i = {}));
			var w;
			(function (r) {
				(r[(r.CLOSE = 1)] = "CLOSE"),
					(r[(r.QUIT = 2)] = "QUIT"),
					(r[(r.RELOAD = 3)] = "RELOAD"),
					(r[(r.LOAD = 4)] = "LOAD");
			})(w || (e.ShutdownReason = w = {}));
			var E;
			(function (r) {
				(r[(r.NewWindow = 1)] = "NewWindow"),
					(r[(r.ReloadedWindow = 3)] = "ReloadedWindow"),
					(r[(r.ReopenedWindow = 4)] = "ReopenedWindow");
			})(E || (e.StartupKind = E = {}));
			function C(r) {
				switch (r) {
					case E.NewWindow:
						return "NewWindow";
					case E.ReloadedWindow:
						return "ReloadedWindow";
					case E.ReopenedWindow:
						return "ReopenedWindow";
				}
			}
			var d;
			(function (r) {
				(r[(r.Starting = 1)] = "Starting"),
					(r[(r.Ready = 2)] = "Ready"),
					(r[(r.Restored = 3)] = "Restored"),
					(r[(r.Eventually = 4)] = "Eventually");
			})(d || (e.LifecyclePhase = d = {}));
			function m(r) {
				switch (r) {
					case d.Starting:
						return "Starting";
					case d.Ready:
						return "Ready";
					case d.Restored:
						return "Restored";
					case d.Eventually:
						return "Eventually";
				}
			}
		}),
		
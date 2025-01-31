import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/instantiation.js';
define(de[107], he([1, 0, 5]), function (ce /*require*/,
 e /*exports*/,
 t /*instantiation*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.TerminalDataTransfers =
					e.LinuxDistro =
					e.XtermTerminalConstants =
					e.$pIb =
					e.$oIb =
					e.$nIb =
					e.TerminalConnectionState =
					e.Direction =
					e.$mIb =
					e.$lIb =
					e.$kIb =
					e.$jIb =
					e.$iIb =
						void 0),
				(e.$iIb = (0, t.$Mi)("terminalService")),
				(e.$jIb = (0, t.$Mi)("terminalConfigurationService")),
				(e.$kIb = (0, t.$Mi)("terminalEditorService")),
				(e.$lIb = (0, t.$Mi)("terminalGroupService")),
				(e.$mIb = (0, t.$Mi)("terminalInstanceService"));
			var i;
			(function (u) {
				(u[(u.Left = 0)] = "Left"),
					(u[(u.Right = 1)] = "Right"),
					(u[(u.Up = 2)] = "Up"),
					(u[(u.Down = 3)] = "Down");
			})(i || (e.Direction = i = {}));
			var w;
			(function (u) {
				(u[(u.Connecting = 0)] = "Connecting"),
					(u[(u.Connected = 1)] = "Connected");
			})(w || (e.TerminalConnectionState = w = {}));
			const E = (u) => typeof u.instanceId != "number";
			e.$nIb = E;
			class C extends MouseEvent {}
			(e.$oIb = C), (e.$pIb = "terminalEditor");
			var d;
			(function (u) {
				u[(u.SearchHighlightLimit = 1e3)] = "SearchHighlightLimit";
			})(d || (e.XtermTerminalConstants = d = {}));
			var m;
			(function (u) {
				(u[(u.Unknown = 1)] = "Unknown"),
					(u[(u.Fedora = 2)] = "Fedora"),
					(u[(u.Ubuntu = 3)] = "Ubuntu");
			})(m || (e.LinuxDistro = m = {}));
			var r;
			(function (u) {
				u.Terminals = "Terminals";
			})(r || (e.TerminalDataTransfers = r = {}));
		})

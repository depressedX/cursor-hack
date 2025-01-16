define(de[1021], he([1, 0, 76]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.NativeLogMarkers =
					e.MessageType =
					e.ExtensionHostExitCode =
					e.UIKind =
						void 0),
				(e.$Qn = C),
				(e.$Rn = d);
			var i;
			(function (r) {
				(r[(r.Desktop = 1)] = "Desktop"), (r[(r.Web = 2)] = "Web");
			})(i || (e.UIKind = i = {}));
			var w;
			(function (r) {
				(r[(r.VersionMismatch = 55)] = "VersionMismatch"),
					(r[(r.UnexpectedError = 81)] = "UnexpectedError");
			})(w || (e.ExtensionHostExitCode = w = {}));
			var E;
			(function (r) {
				(r[(r.Initialized = 0)] = "Initialized"),
					(r[(r.Ready = 1)] = "Ready"),
					(r[(r.Terminate = 2)] = "Terminate");
			})(E || (e.MessageType = E = {}));
			function C(r) {
				const u = t.$Te.alloc(1);
				switch (r) {
					case E.Initialized:
						u.writeUInt8(1, 0);
						break;
					case E.Ready:
						u.writeUInt8(2, 0);
						break;
					case E.Terminate:
						u.writeUInt8(3, 0);
						break;
				}
				return u;
			}
			function d(r, u) {
				if (r.byteLength !== 1) return !1;
				switch (r.readUInt8(0)) {
					case 1:
						return u === E.Initialized;
					case 2:
						return u === E.Ready;
					case 3:
						return u === E.Terminate;
					default:
						return !1;
				}
			}
			var m;
			(function (r) {
				(r.Start = "START_NATIVE_LOG"), (r.End = "END_NATIVE_LOG");
			})(m || (e.NativeLogMarkers = m = {}));
		}),
		
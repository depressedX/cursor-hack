define(de[2060], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.RENDERER_ID_HEADER =
					e.IPCChannel =
					e.PROTOCOL_SCHEME =
					e.IPCMode =
						void 0),
				(e.isMagicMessage = E),
				(e.getMagicMessage = C);
			var t;
			(function (d) {
				(d[(d.Classic = 1)] = "Classic"),
					(d[(d.Protocol = 2)] = "Protocol"),
					(d[(d.Both = 3)] = "Both");
			})(t || (e.IPCMode = t = {})),
				(e.PROTOCOL_SCHEME = "sentry-ipc");
			var i;
			(function (d) {
				(d.RENDERER_START = "sentry-electron.renderer-start"),
					(d.EVENT = "sentry-electron.event"),
					(d.SCOPE = "sentry-electron.scope"),
					(d.ENVELOPE = "sentry-electron.envelope"),
					(d.STATUS = "sentry-electron.status"),
					(d.ADD_METRIC = "sentry-electron.add-metric");
			})(i || (e.IPCChannel = i = {})),
				(e.RENDERER_ID_HEADER = "sentry-electron-renderer-id");
			const w = "__sentry_message_port_message__";
			function E(d) {
				return !!(d && typeof d == "object" && w in d);
			}
			function C() {
				return { [w]: !0 };
			}
		}),
		
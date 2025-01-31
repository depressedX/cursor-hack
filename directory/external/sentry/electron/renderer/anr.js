import '../../../../require.js';
import '../../../../exports.js';
import './ipc.js';
define(de[2148], he([1, 0, 890]), function (ce /*require*/,
 e /*exports*/,
 t /*ipc*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.enableAnrRendererMessages = i);
			function i(w) {
				const E = {
						pollInterval: 1e3,
						anrThreshold: 5e3,
						captureStackTrace: !1,
						...w,
					},
					C = (0, t.getIPC)();
				document.addEventListener("visibilitychange", () => {
					C.sendStatus({ status: document.visibilityState, config: E });
				}),
					C.sendStatus({ status: document.visibilityState, config: E }),
					setInterval(() => {
						C.sendStatus({ status: "alive", config: E });
					}, E.pollInterval);
			}
		})

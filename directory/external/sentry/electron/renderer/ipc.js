define(de[890], he([1, 0, 80, 2060]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.getIPC = d);
			function w(m) {
				return `${i.PROTOCOL_SCHEME}://${m}/sentry_key`;
			}
			function E() {
				if (window.__SENTRY_IPC__) return window.__SENTRY_IPC__;
				{
					t.logger.log(
						"IPC was not configured in preload script, falling back to custom protocol and fetch",
					);
					const m = (window.__SENTRY_RENDERER_ID__ = (0, t.uuid4)()),
						r = { [i.RENDERER_ID_HEADER]: m };
					return {
						sendRendererStart: () => {
							fetch(w(i.IPCChannel.RENDERER_START), {
								method: "POST",
								body: "",
								headers: r,
							}).catch(() => {
								console.error(`Sentry SDK failed to establish connection with the Electron main process.
  - Ensure you have initialized the SDK in the main process
  - If your renderers use custom sessions, be sure to set 'getSessions' in the main process options
  - If you are bundling your main process code and using Electron < v5, you'll need to manually configure a preload script`);
							});
						},
						sendScope: (u) => {
							fetch(w(i.IPCChannel.SCOPE), {
								method: "POST",
								body: u,
								headers: r,
							}).catch(() => {});
						},
						sendEvent: (u) => {
							fetch(w(i.IPCChannel.EVENT), {
								method: "POST",
								body: u,
								headers: r,
							}).catch(() => {});
						},
						sendEnvelope: (u) => {
							fetch(w(i.IPCChannel.ENVELOPE), {
								method: "POST",
								body: u,
								headers: r,
							}).catch(() => {});
						},
						sendStatus: (u) => {
							fetch(w(i.IPCChannel.STATUS), {
								method: "POST",
								body: JSON.stringify({ status: u }),
								headers: r,
							}).catch(() => {});
						},
						sendAddMetric: (u) => {
							fetch(w(i.IPCChannel.ADD_METRIC), {
								method: "POST",
								body: JSON.stringify(u),
								headers: r,
							}).catch(() => {});
						},
					};
				}
			}
			let C;
			function d() {
				return C || ((C = E()), C.sendRendererStart()), C;
			}
		}),
		
import '../../../../require.js';
import '../../../../exports.js';
import '../../core/index.js';
import '../../utils/index.js';
import '../helpers.js';
define(de[1455], he([1, 0, 144, 80, 386]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.browserApiErrorsIntegration = void 0);
			const E = [
					"EventTarget",
					"Window",
					"Node",
					"ApplicationCache",
					"AudioTrackList",
					"BroadcastChannel",
					"ChannelMergerNode",
					"CryptoOperation",
					"EventSource",
					"FileReader",
					"HTMLUnknownElement",
					"IDBDatabase",
					"IDBRequest",
					"IDBTransaction",
					"KeyOperation",
					"MediaController",
					"MessagePort",
					"ModalWindow",
					"Notification",
					"SVGElementInstance",
					"Screen",
					"SharedWorker",
					"TextTrack",
					"TextTrackCue",
					"TextTrackList",
					"WebSocket",
					"WebSocketWorker",
					"Worker",
					"XMLHttpRequest",
					"XMLHttpRequestEventTarget",
					"XMLHttpRequestUpload",
				],
				C = "BrowserApiErrors",
				d = (h = {}) => {
					const c = {
						XMLHttpRequest: !0,
						eventTarget: !0,
						requestAnimationFrame: !0,
						setInterval: !0,
						setTimeout: !0,
						...h,
					};
					return {
						name: C,
						setupOnce() {
							c.setTimeout && (0, i.fill)(w.WINDOW, "setTimeout", m),
								c.setInterval && (0, i.fill)(w.WINDOW, "setInterval", m),
								c.requestAnimationFrame &&
									(0, i.fill)(w.WINDOW, "requestAnimationFrame", r),
								c.XMLHttpRequest &&
									"XMLHttpRequest" in w.WINDOW &&
									(0, i.fill)(XMLHttpRequest.prototype, "send", u);
							const n = c.eventTarget;
							n && (Array.isArray(n) ? n : E).forEach(a);
						},
					};
				};
			e.browserApiErrorsIntegration = (0, t.defineIntegration)(d);
			function m(h) {
				return function (...c) {
					const n = c[0];
					return (
						(c[0] = (0, w.wrap)(n, {
							mechanism: {
								data: { function: (0, i.getFunctionName)(h) },
								handled: !1,
								type: "instrument",
							},
						})),
						h.apply(this, c)
					);
				};
			}
			function r(h) {
				return function (c) {
					return h.apply(this, [
						(0, w.wrap)(c, {
							mechanism: {
								data: {
									function: "requestAnimationFrame",
									handler: (0, i.getFunctionName)(h),
								},
								handled: !1,
								type: "instrument",
							},
						}),
					]);
				};
			}
			function u(h) {
				return function (...c) {
					const n = this;
					return (
						["onload", "onerror", "onprogress", "onreadystatechange"].forEach(
							(p) => {
								p in n &&
									typeof n[p] == "function" &&
									(0, i.fill)(n, p, function (o) {
										const f = {
												mechanism: {
													data: {
														function: p,
														handler: (0, i.getFunctionName)(o),
													},
													handled: !1,
													type: "instrument",
												},
											},
											b = (0, i.getOriginalFunction)(o);
										return (
											b &&
												(f.mechanism.data.handler = (0, i.getFunctionName)(b)),
											(0, w.wrap)(o, f)
										);
									});
							},
						),
						h.apply(this, c)
					);
				};
			}
			function a(h) {
				const c = w.WINDOW,
					n = c[h] && c[h].prototype;
				!n ||
					!n.hasOwnProperty ||
					!n.hasOwnProperty("addEventListener") ||
					((0, i.fill)(n, "addEventListener", function (g) {
						return function (p, o, f) {
							try {
								typeof o.handleEvent == "function" &&
									(o.handleEvent = (0, w.wrap)(o.handleEvent, {
										mechanism: {
											data: {
												function: "handleEvent",
												handler: (0, i.getFunctionName)(o),
												target: h,
											},
											handled: !1,
											type: "instrument",
										},
									}));
							} catch {}
							return g.apply(this, [
								p,
								(0, w.wrap)(o, {
									mechanism: {
										data: {
											function: "addEventListener",
											handler: (0, i.getFunctionName)(o),
											target: h,
										},
										handled: !1,
										type: "instrument",
									},
								}),
								f,
							]);
						};
					}),
					(0, i.fill)(n, "removeEventListener", function (g) {
						return function (p, o, f) {
							const b = o;
							try {
								const s = b && b.__sentry_wrapped__;
								s && g.call(this, p, s, f);
							} catch {}
							return g.call(this, p, b, f);
						};
					}));
			}
		}),
		
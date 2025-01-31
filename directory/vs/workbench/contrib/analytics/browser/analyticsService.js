import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../proto/aiserver/v1/analytics_connectweb.js';
import '../../../../../proto/aiserver/v1/analytics_pb.js';
import '../../../../base/browser/window.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../platform/tracing/common/tracing.js';
import '../../../services/ai/browser/aiMiscServices.js';
import '../../../services/ai/browser/backendClient.js';
import '../../../services/cursorAuth/browser/authenticationService.js';
define(
			de[3640],
			he([1, 0, 1467, 1466, 75, 3, 20, 5, 45, 216, 137, 285, 232]),
			function (ce /*require*/,
 e /*exports*/,
 t /*analytics_connectweb*/,
 i /*analytics_pb*/,
 w /*window*/,
 E /*lifecycle*/,
 C /*extensions*/,
 d /*instantiation*/,
 m /*reactiveStorageService*/,
 r /*tracing*/,
 u /*aiMiscServices*/,
 a /*backendClient*/,
 h /*authenticationService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$izc = void 0);
				let c = class extends E.$1c {
					constructor(p, o, f) {
						super(),
							(this.g = p),
							(this.h = o),
							(this.j = f),
							(this.b = []),
							(this.f = 6e4),
							(this.a = this.j.createInstance(a.$q6b, { service: t.$hbb })),
							this.a.createServer(),
							(this.c = w.$Bfb.setInterval(() => this.flushAll(), this.f)),
							this.D({
								dispose: () => {
									this.c && w.$Bfb.clearInterval(this.c);
								},
							});
					}
					trackEvent(p, o) {
						this.g.reactivePrivacyMode() !== !0 &&
							(this.h.applicationUserPersistentStorage
								.internalAnalyticsDebugMode && console.log("[track]", p, o),
							(0, r.$LOb)({ category: "event", message: p, data: { ...o } }),
							this.b.push({
								eventName: p,
								eventData: o || {},
								timestamp: BigInt(Date.now()),
							}));
					}
					async flushAll() {
						if (this.b.length === 0) return;
						const p = [...this.b];
						(this.b = []),
							this.h.applicationUserPersistentStorage
								.internalAnalyticsDebugMode &&
								console.log("[track] flushing:", p);
						try {
							await (await this.a.get()).trackEvents({
								events: p.map((f) => ({ ...f, eventData: n(f.eventData) })),
							});
						} catch (o) {
							console.error("Failed to flush analytics events:", o),
								(this.b = [...this.b, ...p]);
						}
					}
				};
				(e.$izc = c),
					(e.$izc = c = Ne([j(0, h.$x6b), j(1, m.$0zb), j(2, d.$Li)], c));
				function n(g) {
					const p = {};
					for (const o in g)
						typeof g[o] == "string"
							? (p[o] = new i.$dbb({
									data: { value: g[o], case: "stringValue" },
								}))
							: typeof g[o] == "number"
								? Number.isInteger(g[o])
									? (p[o] = new i.$dbb({
											data: { value: BigInt(g[o]), case: "intValue" },
										}))
									: (p[o] = new i.$dbb({
											data: { value: g[o], case: "doubleValue" },
										}))
								: typeof g[o] == "boolean"
									? (p[o] = new i.$dbb({
											data: { value: g[o], case: "boolValue" },
										}))
									: (p[o] = new i.$dbb({
											data: {
												value: JSON.stringify(g[o]),
												case: "stringValue",
											},
										}));
					return p;
				}
				(0, C.$lK)(u.$ifc, c, C.InstantiationType.Eager);
			},
		)

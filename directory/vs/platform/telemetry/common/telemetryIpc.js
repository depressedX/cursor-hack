import '../../../../require.js';
import '../../../../exports.js';
define(de[2815], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$17c = e.$Z7c = void 0);
			class t {
				constructor(E) {
					this.b = E;
				}
				listen(E, C) {
					throw new Error(`Event not found: ${C}`);
				}
				call(E, C, { eventName: d, data: m }) {
					return C === "capture"
						? (this.b.forEach((r) => r.capture(d, m)), Promise.resolve(null))
						: C === "registerAuthId"
							? (this.b.forEach((r) => r.registerAuthId(m)),
								Promise.resolve(null))
							: (this.b.forEach((r) => r.log(d, m)), Promise.resolve(null));
				}
			}
			e.$Z7c = t;
			class i {
				constructor(E) {
					this.b = E;
				}
				log(E, C) {
					return (
						this.b
							.call("log", { eventName: E, data: C })
							.then(
								void 0,
								(d) => `Failed to log telemetry: ${console.warn(d)}`,
							),
						Promise.resolve(null)
					);
				}
				flush() {
					return Promise.resolve();
				}
				registerAuthId(E) {
					this.b.call("registerAuthId", {
						eventName: "registerAuthId",
						data: E,
					});
				}
				capture(E, C) {
					return (
						this.b
							.call("capture", { eventName: E, data: C })
							.then(
								void 0,
								(d) => `Failed to log telemetry: ${console.warn(d)}`,
							),
						Promise.resolve(null)
					);
				}
			}
			e.$17c = i;
		}),
		
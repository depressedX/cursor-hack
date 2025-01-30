import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/async.js';
import '../../../../nls.js';
define(de[3048], he([1, 0, 6, 15, 4]), function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*async*/,
 w /*nls*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Wmc = void 0);
			class E {
				constructor() {
					(this.f = new Map()),
						(this.m = []),
						(this.n = new t.$re()),
						(this.o = new t.$re()),
						(this.d = 1);
				}
				get onError() {
					return this.n.event;
				}
				get onExit() {
					return this.o.event;
				}
				onMessage(d) {
					this.k &&
						this.n.fire(
							new Error("attempt to set more than one 'Message' callback"),
						),
						(this.k = d);
				}
				onEvent(d) {
					this.j &&
						this.n.fire(
							new Error("attempt to set more than one 'Event' callback"),
						),
						(this.j = d);
				}
				onRequest(d) {
					this.g &&
						this.n.fire(
							new Error("attempt to set more than one 'Request' callback"),
						),
						(this.g = d);
				}
				sendResponse(d) {
					d.seq > 0
						? this.n.fire(
								new Error(
									`attempt to send more than one response for command ${d.command}`,
								),
							)
						: this.u("response", d);
				}
				sendRequest(d, m, r, u) {
					const a = { command: d };
					if (
						(m && Object.keys(m).length > 0 && (a.arguments = m),
						this.u("request", a),
						typeof u == "number")
					) {
						const h = setTimeout(() => {
							clearTimeout(h);
							const c = this.f.get(a.seq);
							if (c) {
								this.f.delete(a.seq);
								const n = {
									type: "response",
									seq: 0,
									request_seq: a.seq,
									success: !1,
									command: d,
									message: (0, w.localize)(5768, null, u, d),
								};
								c(n);
							}
						}, u);
					}
					return r && this.f.set(a.seq, r), a.seq;
				}
				acceptMessage(d) {
					this.k
						? this.k(d)
						: (this.m.push(d), this.m.length === 1 && this.s());
				}
				q(d, m) {
					return d.type !== "event" || m.type !== "event";
				}
				async s() {
					let d;
					for (; this.m.length; ) {
						if (
							((!d || this.q(this.m[0], d)) && (await (0, i.$Nh)(0)),
							(d = this.m.shift()),
							!d)
						)
							return;
						switch (d.type) {
							case "event":
								this.j?.(d);
								break;
							case "request":
								this.g?.(d);
								break;
							case "response": {
								const m = d,
									r = this.f.get(m.request_seq);
								r && (this.f.delete(m.request_seq), r(m));
								break;
							}
						}
					}
				}
				u(d, m) {
					(m.type = d), (m.seq = this.d++), this.sendMessage(m);
				}
				async w() {
					if (this.f.size === 0) return Promise.resolve();
					const d = new Map();
					this.f.forEach((m, r) => d.set(r, m)),
						await (0, i.$Nh)(500),
						d.forEach((m, r) => {
							m({
								type: "response",
								seq: 0,
								request_seq: r,
								success: !1,
								command: "canceled",
								message: "canceled",
							}),
								this.f.delete(r);
						});
				}
				getPendingRequestIds() {
					return Array.from(this.f.keys());
				}
				dispose() {
					this.m = [];
				}
			}
			e.$Wmc = E;
		}),
		
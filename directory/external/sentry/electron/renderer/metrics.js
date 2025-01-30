import '../../../../require.js';
import '../../../../exports.js';
import '../../core/index.js';
import './ipc.js';
define(de[2149], he([1, 0, 144, 890]), function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*ipc*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.metrics = void 0);
			class w {
				constructor() {
					this._ipc = (0, i.getIPC)();
				}
				add(a, h, c, n, g, p) {
					this._ipc.sendAddMetric({
						metricType: a,
						name: h,
						value: c,
						unit: n,
						tags: g,
						timestamp: p,
					});
				}
				flush() {}
				close() {}
				toString() {
					return "";
				}
			}
			function E(u, a = 1, h) {
				t.metrics.increment(w, u, a, h);
			}
			function C(u, a, h) {
				t.metrics.distribution(w, u, a, h);
			}
			function d(u, a, h) {
				t.metrics.set(w, u, a, h);
			}
			function m(u, a, h) {
				t.metrics.gauge(w, u, a, h);
			}
			function r(u, a, h = "second", c) {
				t.metrics.timing(w, u, a, h, c);
			}
			e.metrics = {
				increment: E,
				distribution: C,
				set: d,
				gauge: m,
				timing: r,
			};
		}),
		
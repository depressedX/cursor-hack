import '../../../../require.js';
import '../../../../exports.js';
import './constants.js';
import './utils.js';
define(de[1440], he([1, 0, 880, 886]), function (ce /*require*/,
 e /*exports*/,
 t /*constants*/,
 i /*utils*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.METRIC_MAP =
					e.SetMetric =
					e.DistributionMetric =
					e.GaugeMetric =
					e.CounterMetric =
						void 0);
			class w {
				constructor(r) {
					this._value = r;
				}
				get weight() {
					return 1;
				}
				add(r) {
					this._value += r;
				}
				toString() {
					return `${this._value}`;
				}
			}
			e.CounterMetric = w;
			class E {
				constructor(r) {
					(this._last = r),
						(this._min = r),
						(this._max = r),
						(this._sum = r),
						(this._count = 1);
				}
				get weight() {
					return 5;
				}
				add(r) {
					(this._last = r),
						r < this._min && (this._min = r),
						r > this._max && (this._max = r),
						(this._sum += r),
						this._count++;
				}
				toString() {
					return `${this._last}:${this._min}:${this._max}:${this._sum}:${this._count}`;
				}
			}
			e.GaugeMetric = E;
			class C {
				constructor(r) {
					this._value = [r];
				}
				get weight() {
					return this._value.length;
				}
				add(r) {
					this._value.push(r);
				}
				toString() {
					return this._value.join(":");
				}
			}
			e.DistributionMetric = C;
			class d {
				constructor(r) {
					(this.first = r), (this._value = new Set([r]));
				}
				get weight() {
					return this._value.size;
				}
				add(r) {
					this._value.add(r);
				}
				toString() {
					return Array.from(this._value)
						.map((r) => (typeof r == "string" ? (0, i.simpleHash)(r) : r))
						.join(":");
				}
			}
			(e.SetMetric = d),
				(e.METRIC_MAP = {
					[t.COUNTER_METRIC_TYPE]: w,
					[t.GAUGE_METRIC_TYPE]: E,
					[t.DISTRIBUTION_METRIC_TYPE]: C,
					[t.SET_METRIC_TYPE]: d,
				});
		}),
		
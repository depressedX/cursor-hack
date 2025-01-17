import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/solid.js';
import '../utils/utils.js';
import '../utils/polymorphic.js';
import './progress-context.js';
define(
			de[2620],
			he([1, 0, 2, 2, 2, 13, 369, 494, 738]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$0nb = u);
				function r(a) {
					return (h) => (a(h), () => a(void 0));
				}
				function u(a) {
					const h = `progress-${(0, E.createUniqueId)()}`,
						c = (0, C.$wjb)({ id: h, value: 0, minValue: 0, maxValue: 100 }, a),
						[n, g] = (0, E.splitProps)(c, [
							"value",
							"minValue",
							"maxValue",
							"indeterminate",
							"getValueLabel",
						]),
						[p, o] = (0, E.createSignal)();
					function f(S, I = -1 / 0, T = 1 / 0) {
						return Math.min(Math.max(S, I), T);
					}
					const b = () => f(n.value, n.minValue, n.maxValue),
						s = () => ((b() - n.minValue) * 100) / (n.maxValue - n.minValue),
						l = () => {
							if (!n.indeterminate)
								return n.getValueLabel
									? n.getValueLabel({
											value: b(),
											min: n.minValue,
											max: n.maxValue,
										})
									: s() + "%";
						},
						y = () => (n.indeterminate ? void 0 : `${s().toFixed(1)}%`),
						$ = (0, E.createMemo)(() => {
							let S;
							return (
								n.indeterminate || (S = s() === 1 ? "complete" : "loading"),
								{
									"data-progress": S,
									"data-indeterminate": n.indeterminate ? "" : void 0,
								}
							);
						}),
						v = {
							dataset: $,
							value: b,
							valuePercent: s,
							valueLabel: l,
							labelId: p,
							progressFillWidth: y,
							generateId: (0, C.$Ljb)(() => g.id),
							registerLabelId: r(o),
						};
					return (0, t.createComponent)(m.$6nb.Provider, {
						value: v,
						get children() {
							return (0, t.createComponent)(
								d.$5kb,
								(0, i.mergeProps)(
									{
										as: "div",
										role: "progressbar",
										get "aria-valuenow"() {
											return (0, w.memo)(() => !!n.indeterminate)()
												? void 0
												: b();
										},
										get "aria-valuemin"() {
											return n.minValue;
										},
										get "aria-valuemax"() {
											return n.maxValue;
										},
										get "aria-valuetext"() {
											return l();
										},
										get "aria-labelledby"() {
											return p();
										},
									},
									$,
									g,
								),
							);
						},
					});
				}
			},
		),
		
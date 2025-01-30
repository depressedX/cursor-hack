import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import './aiInput2.js';
import '../scrollableDiv.js';
define(
			de[4320],
			he([1, 0, 2, 2, 13, 450, 135]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*solid*/,
 E /*aiInput2*/,
 C /*scrollableDiv*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$sbc = void 0);
				const d = (m) => {
					const [r, u] = (0, w.createSignal)(0),
						[a, h] = (0, w.createSignal)(0),
						c = (0, C.$y0b)(),
						n = (0, w.createMemo)(() => m.minHeight ?? 18.19);
					(0, w.createEffect)(() => {
						g();
					});
					const g = () => {
						const p = Math.max(r(), n()),
							o = m.maxHeight ? Math.min(p, m.maxHeight) : p;
						h(o), c.setScrollDimensions({ height: o, scrollHeight: p }, !0);
					};
					return (0, t.createComponent)(C.$w0b, {
						get style() {
							return {
								height: `${a()}px`,
								"min-height": `${n()}px`,
								width: "100%",
								...(m.maxHeight && { "max-height": `${m.maxHeight}px` }),
								...m.scrollableStyle,
							};
						},
						get innerContainerStyle() {
							return m.innerContainerStyle;
						},
						scrollable: c,
						scrollingDirection: "vertical",
						autoScrollToBottom: !0,
						get reactiveElementOptions() {
							return m.reactiveScrollableOptions;
						},
						nonReactiveElementOptions: { useShadows: !1 },
						get children() {
							return (0, t.createComponent)(
								E.$Uac,
								(0, i.mergeProps)(m, {
									setContentHeight: (p) => {
										u(p), m.setContentHeight?.(p);
									},
									get containerStyle() {
										return {
											...m.containerStyle,
											height: "100%",
											"min-height": `${n()}px`,
											"max-height": "none",
											overflow: "visible",
										};
									},
								}),
							);
						},
					});
				};
				e.$sbc = d;
			},
		),
		
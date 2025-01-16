define(de[694], he([1, 0, 160, 422]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$G$b = w);
			function w({ position: E = t.HoverPosition.ABOVE } = {}) {
				const { showHover: C, hideHover: d } = (0, i.$z$b)();
				return {
					showHover: (r, u) => {
						C({
							target: r.currentTarget,
							appearance: { compact: !0, showPointer: !0 },
							content: u,
							position: { hoverPosition: E },
							additionalClasses: ["chat-hover-tooltip"],
						});
					},
					hideHover: d,
				};
			}
		}),
		
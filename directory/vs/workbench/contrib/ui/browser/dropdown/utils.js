import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../hooks/useVSHoverTooltip.js';
import '../../../../../base/browser/ui/hover/hoverWidget.js';
define(de[1779], he([1, 0, 422, 160]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Jbc = w);
			function w({ position: E = i.HoverPosition.ABOVE } = {}) {
				const { showHover: C, hideHover: d } = (0, t.$z$b)(300);
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
		
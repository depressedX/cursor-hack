import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/ui/hover/hoverWidget.js';
import '../../../ui/browser/hooks/useVSHoverTooltip.js';
define(de[311], he([1, 0, 160, 422]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.useComposerHoverTooltip = void 0);
			const w = (E = {}) => {
				const { showHover: C, hideHover: d } = (0, i.$z$b)(E.delay);
				return {
					showHover: (r, u, a = E.position ?? t.HoverPosition.ABOVE) => {
						C({
							content: u,
							target: r.currentTarget,
							appearance: { showPointer: !E.noPointer, compact: !0 },
							position: { hoverPosition: a },
							additionalClasses: E.additionalClasses,
						});
					},
					hideHover: d,
				};
			};
			e.useComposerHoverTooltip = w;
		}),
		
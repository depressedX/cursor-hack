import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../hooks/useComposerHoverTooltip.js';
import '../../../ui/browser/simpleButton/simpleButton.js';
define(de[485], he([1, 0, 2, 2, 311, 147]), function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*useComposerHoverTooltip*/,
 E /*simpleButton*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ComposerToolbarSimpleButton = void 0);
			const C = (d) => {
				const { showHover: m, hideHover: r } = (0, w.useComposerHoverTooltip)({
					delay: 300,
					additionalClasses: ["chat-hover-tooltip"],
				});
				return (0, t.createComponent)(
					E.$rdc,
					(0, i.mergeProps)(d, {
						get onMouseEnter() {
							return d.hintText ? (u) => m(u, d.hintText) : void 0;
						},
						get onMouseLeave() {
							return d.hintText ? r : void 0;
						},
						get style() {
							return { "font-size": "10px", padding: "0px 4px", ...d.style };
						},
						get tabFocusable() {
							return d.tabFocusable;
						},
						get setRef() {
							return d.setRef;
						},
						smallSpinner: !0,
					}),
				);
			};
			e.ComposerToolbarSimpleButton = C;
		}),
		
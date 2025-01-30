import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../ui/browser/simpleButton/simpleButton.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/themables.js';
import '../../../../../platform/theme/common/iconRegistry.js';
import './dangerousActionPopup.js';
import '../../../ui/browser/loadingStateButton/loadingStateButton.js';
import '../../../controlCommon/browser/solid.js';
define(
			de[4335],
			he([1, 0, 2, 2, 2, 2, 2, 147, 14, 26, 79, 1966, 1073, 36]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*web*/,
 d /*simpleButton*/,
 m /*codicons*/,
 r /*themables*/,
 u /*iconRegistry*/,
 a /*dangerousActionPopup*/,
 h /*loadingStateButton*/,
 c /*solid*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$28b = p);
				const n = (0, t.template)(
						'<div class="settings-container-backing"><div><div><div><i class="fas fa-times"></i></div><div class="settings__buttons">',
					),
					g = (0, u.$$O)(
						"tabbar-remove-chat",
						m.$ak.x,
						"Icon for removing a tab in the tab list for chats.",
					);
				function p(o) {
					const f = (0, c.$qdc)();
					return (() => {
						const b = n(),
							s = b.firstChild,
							l = s.firstChild,
							y = l.firstChild,
							$ = y.nextSibling;
						return (
							b.addEventListener("click", (v) => {
								f.close(), v.stopPropagation();
							}),
							a.$W8b != null
								? b.style.setProperty("z-index", a.$W8b)
								: b.style.removeProperty("z-index"),
							s.style.setProperty("position", "absolute"),
							s.style.setProperty("top", "30%"),
							s.style.setProperty("left", "50%"),
							s.style.setProperty("transform", "translate(-50%, -50%)"),
							a.$W8b + 1 != null
								? s.style.setProperty("z-index", a.$W8b + 1)
								: s.style.removeProperty("z-index"),
							s.style.setProperty("border-radius", "5px"),
							s.style.setProperty("font-size", "16px"),
							s.style.setProperty(
								"background-color",
								"var(--vscode-sideBar-background)",
							),
							s.style.setProperty(
								"border",
								"1px solid var(--vscode-commandCenter-inactiveBorder)",
							),
							s.style.setProperty("width", "400px"),
							l.addEventListener("click", (v) => {
								v.stopPropagation();
							}),
							l.style.setProperty("height", "100%"),
							l.style.setProperty("width", "100%"),
							l.style.setProperty("padding", "24px 24px 16px 24px"),
							l.style.setProperty("box-sizing", "border-box"),
							l.style.setProperty("line-height", "150%"),
							y.addEventListener("click", () => {
								f.close();
							}),
							(0, E.insert)(l, () => o.description, $),
							$.style.setProperty("justify-content", "flex-end"),
							$.style.setProperty("margin-top", "4px"),
							(0, E.insert)(
								$,
								(0, C.createComponent)(d.$rdc, {
									type: "primary",
									get title() {
										return o.primaryText;
									},
									onClick: () => {
										f.close(), o.onPrimary();
									},
									style: { padding: "4px 8px" },
								}),
								null,
							),
							(0, E.insert)(
								$,
								(0, C.createComponent)(h.$18b, {
									loadingProps: {},
									get buttonProps() {
										return {
											type: "secondary",
											title: o.secondaryText,
											style: { padding: "4px 8px" },
										};
									},
									onClick: async () => {
										try {
											const v = o.onSecondary();
											v instanceof Promise && (await v);
										} finally {
											f.close();
										}
									},
								}),
								null,
							),
							(0, w.effect)(() =>
								(0, i.className)(
									y,
									["settings__dismiss", r.ThemeIcon.asClassName(g)].join(" "),
								),
							),
							b
						);
					})();
				}
			},
		),
		
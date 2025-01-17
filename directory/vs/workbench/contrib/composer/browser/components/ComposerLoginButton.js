import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../hooks/useComposerHoverTooltip.js';
import '../../../controlCommon/browser/solid.js';
define(
			de[4148],
			he([1, 0, 2, 2, 13, 311, 36]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerLoginButton = m);
				const d = (0, t.template)(
					'<div class="composer-bar-button codebase-button">Log in',
				);
				function m() {
					const r = (0, C.$odc)(),
						{ showHover: u, hideHover: a } = (0, E.useComposerHoverTooltip)({
							delay: 300,
							additionalClasses: ["chat-hover-tooltip"],
						}),
						h = (0, w.createMemo)(() => " \u23CE");
					return (() => {
						const c = d(),
							n = c.firstChild;
						return (
							c.addEventListener("mouseleave", () => {
								a();
							}),
							c.addEventListener("mouseenter", (g) => {
								u(g, { value: "Log in to use Cursor AI features" });
							}),
							c.addEventListener("click", () => {
								r.cursorAuthenticationService.login();
							}),
							c.style.setProperty("line-height", "150%"),
							c.style.setProperty(
								"color",
								"var(--vscode-button-secondaryForeground)",
							),
							c.style.setProperty("display", "flex"),
							c.style.setProperty("align-items", "center"),
							c.style.setProperty("position", "relative"),
							c.style.setProperty("font-size", "10px"),
							c.style.setProperty("text-align", "right"),
							c.style.setProperty("margin-left", "auto"),
							(0, i.insert)(c, h, null),
							c
						);
					})();
				}
			},
		),
		
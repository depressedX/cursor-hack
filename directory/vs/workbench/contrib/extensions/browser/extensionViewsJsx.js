import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/solid.js';
import '../../../../base/common/uri.js';
import '../../ui/browser/simpleButton/simpleButton.js';
import '../../controlCommon/browser/solid.js';
define(
			de[4296],
			he([1, 0, 2, 2, 2, 13, 9, 147, 36]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*solid*/,
 C /*uri*/,
 d /*simpleButton*/,
 m /*solid*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$1Sc = a);
				const r = (0, t.template)("<div>"),
					u = (0, t.template)(
						"<a>Don't see an extension you're looking for? Click to learn how to install it.",
					);
				function a(c, n) {
					return (0, m.$ndc)(() => (0, w.createComponent)(h, {}), c, n);
				}
				function h() {
					const c = (0, m.$odc)(),
						[n, g] = (0, E.createSignal)(
							c.cursorAuthenticationService.isAuthenticated(),
						);
					(0, E.createEffect)(() => {
						const o = (f) => g(f);
						c.cursorAuthenticationService.addLoginChangedListener(o),
							(0, E.onCleanup)(() =>
								c.cursorAuthenticationService.removeLoginChangedListener(o),
							);
					});
					const p = C.URI.parse(
						"https://www.cursor.com/how-to-install-extension",
					);
					return (0, w.createComponent)(E.Show, {
						get when() {
							return !n();
						},
						get fallback() {
							return (() => {
								const o = u();
								return (
									o.addEventListener("click", () => c.openerService.open(p)), o
								);
							})();
						},
						get children() {
							const o = r();
							return (
								o.style.setProperty("margin-top", "36px"),
								o.style.setProperty("display", "flex"),
								(0, i.insert)(
									o,
									(0, w.createComponent)(d.$rdc, {
										style: { width: "fit-content", margin: "auto" },
										title: "Login",
										type: "primary",
										onClick: () => c.cursorAuthenticationService.login(),
									}),
								),
								o
							);
						},
					});
				}
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	
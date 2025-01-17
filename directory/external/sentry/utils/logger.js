import '../../../require.js';
import '../../../exports.js';
import './debug-build.js';
import './worldwide.js';
define(de[527], he([1, 0, 577, 365]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.logger = e.originalConsoleMethods = e.CONSOLE_LEVELS = void 0),
				(e.consoleSandbox = E);
			const w = "Sentry Logger ";
			(e.CONSOLE_LEVELS = [
				"debug",
				"info",
				"warn",
				"error",
				"log",
				"assert",
				"trace",
			]),
				(e.originalConsoleMethods = {});
			function E(d) {
				if (!("console" in i.GLOBAL_OBJ)) return d();
				const m = i.GLOBAL_OBJ.console,
					r = {},
					u = Object.keys(e.originalConsoleMethods);
				u.forEach((a) => {
					const h = e.originalConsoleMethods[a];
					(r[a] = m[a]), (m[a] = h);
				});
				try {
					return d();
				} finally {
					u.forEach((a) => {
						m[a] = r[a];
					});
				}
			}
			function C() {
				let d = !1;
				const m = {
					enable: () => {
						d = !0;
					},
					disable: () => {
						d = !1;
					},
					isEnabled: () => d,
				};
				return (
					t.DEBUG_BUILD
						? e.CONSOLE_LEVELS.forEach((r) => {
								m[r] = (...u) => {
									d &&
										E(() => {
											i.GLOBAL_OBJ.console[r](`${w}[${r}]:`, ...u);
										});
								};
							})
						: e.CONSOLE_LEVELS.forEach((r) => {
								m[r] = () => {};
							}),
					m
				);
			}
			e.logger = (0, i.getGlobalSingleton)("logger", C);
		}),
		
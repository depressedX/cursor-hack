define(
			de[1965],
			he([1, 0, 2, 2, 2, 13, 36]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2hc = m),
					(e.$3hc = r),
					(e.$4hc = u),
					(e.$5hc = a);
				const d = (0, t.template)("<div>");
				function m() {
					const c = (0, C.$pdc)();
					return (0, E.createMemo)(
						() =>
							c.reactiveStorageService.applicationUserPersistentStorage
								.lintSettings.forceDisableGenerators.length > 0 ||
							c.reactiveStorageService.applicationUserPersistentStorage
								.lintSettings.forceEnableGenerators.length > 0 ||
							c.reactiveStorageService.applicationUserPersistentStorage
								.lintSettings.forceDisableDiscriminators.length > 0 ||
							c.reactiveStorageService.applicationUserPersistentStorage
								.lintSettings.forceEnableDiscriminators.length > 0,
					);
				}
				function r(c) {
					return c
						.toLowerCase()
						.split("_")
						.map((n) => n.charAt(0).toUpperCase() + n.slice(1))
						.join(" ");
				}
				function u(c) {
					return (() => {
						const n = d();
						return (0, w.insert)(n, () => c.bug.bug.message), n;
					})();
				}
				function a(c, n, g, p, o) {
					const f = n.aiLintBugData;
					return f
						? g.invokeFunction((b) =>
								(0, C.$ndc)(
									() =>
										(0, i.createComponent)(u, {
											bug: f,
											language: p,
											onLayout: o,
										}),
									c,
									g,
								),
							)
						: (console.error("No bug data for marker", n),
							{ dispose: () => {} });
				}
				function h(c, n) {
					const g = n
						.split(`
`)
						.map((f) => f.trim());
					let p = 0;
					const o = c
						.split(`
`)
						.map((f) => f.trim());
					return (
						o.forEach((f) => {
							const b = g.indexOf(f);
							b !== -1 && (g.splice(b, 1), p++);
						}),
						o.length - p
					);
				}
			},
		),
		
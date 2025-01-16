define(de[428], he([1, 0, 13, 36]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$b$b = w);
			function w() {
				const E = (0, i.$odc)(),
					[C, d] = (0, t.createSignal)(!1),
					m = () => {
						const u = E.themeService.getFileIconTheme();
						d(u.hasFileIcons);
					};
				m();
				const r = E.themeService.onDidFileIconThemeChange(() => {
					m();
				});
				return (0, t.onCleanup)(() => r.dispose()), C;
			}
		}),
		
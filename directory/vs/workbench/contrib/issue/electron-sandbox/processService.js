define(
			de[3286],
			he([1, 0, 139, 344, 20, 769, 62, 51, 35, 151, 376, 75]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$hgd = void 0);
				let h = class {
					constructor(g, p, o, f) {
						(this.a = g), (this.b = p), (this.c = o), (this.d = f);
					}
					openProcessExplorer() {
						const g = this.b.getColorTheme(),
							p = {
								pid: this.c.mainPid,
								zoomLevel: (0, t.$Hfb)(a.$Bfb),
								styles: {
									backgroundColor: c(g, d.$8P),
									color: c(g, d.$9P),
									listHoverBackground: c(g, d.$MS),
									listHoverForeground: c(g, d.$NS),
									listFocusBackground: c(g, d.$AS),
									listFocusForeground: c(g, d.$BS),
									listFocusOutline: c(g, d.$CS),
									listActiveSelectionBackground: c(g, d.$ES),
									listActiveSelectionForeground: c(g, d.$FS),
									listHoverOutline: c(g, d.$PP),
									scrollbarShadowColor: c(g, d.$3P),
									scrollbarSliderActiveBackgroundColor: c(g, d.$6P),
									scrollbarSliderBackgroundColor: c(g, d.$4P),
									scrollbarSliderHoverBackgroundColor: c(g, d.$5P),
								},
								platform: i.$ic,
								applicationName: this.d.applicationName,
							};
						return this.a.openProcessExplorer(p);
					}
				};
				(e.$hgd = h),
					(e.$hgd = h =
						Ne([j(0, E.$5Xb), j(1, m.$iP), j(2, r.$ucd), j(3, C.$Bk)], h));
				function c(n, g) {
					const p = n.getColor(g);
					return p ? p.toString() : void 0;
				}
				(0, w.$lK)(u.$8Xb, h, w.InstantiationType.Delayed);
			},
		),
		
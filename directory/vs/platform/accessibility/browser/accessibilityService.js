define(
			de[2739],
			he([1, 0, 7, 127, 75, 6, 3, 91, 10, 8, 180]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$25c = void 0);
				let a = class extends C.$1c {
					constructor(c, n, g) {
						super(),
							(this.n = c),
							(this.q = n),
							(this.r = g),
							(this.b = d.AccessibilitySupport.Unknown),
							(this.c = new E.$re()),
							(this.h = new E.$re()),
							(this.m = new E.$re()),
							(this.a = d.$YK.bindTo(this.n));
						const p = () => this.a.set(this.isScreenReaderOptimized());
						this.D(
							this.r.onDidChangeConfiguration((f) => {
								f.affectsConfiguration("editor.accessibilitySupport") &&
									(p(), this.c.fire()),
									f.affectsConfiguration("workbench.reduceMotion") &&
										((this.f = this.r.getValue("workbench.reduceMotion")),
										this.h.fire());
							}),
						),
							p(),
							this.D(this.onDidChangeScreenReaderOptimized(() => p()));
						const o = w.$Bfb.matchMedia("(prefers-reduced-motion: reduce)");
						(this.g = o.matches),
							(this.f = this.r.getValue("workbench.reduceMotion")),
							(this.j = this.r.getValue("accessibility.underlineLinks")),
							this.s(o),
							this.t();
					}
					s(c) {
						this.D(
							(0, t.$0fb)(c, "change", () => {
								(this.g = c.matches), this.f === "auto" && this.h.fire();
							}),
						);
						const n = () => {
							const g = this.isMotionReduced();
							this.q.mainContainer.classList.toggle("reduce-motion", g),
								this.q.mainContainer.classList.toggle("enable-motion", !g);
						};
						n(), this.D(this.onDidChangeReducedMotion(() => n()));
					}
					t() {
						this.D(
							this.r.onDidChangeConfiguration((n) => {
								if (n.affectsConfiguration("accessibility.underlineLinks")) {
									const g = this.r.getValue("accessibility.underlineLinks");
									(this.j = g), this.m.fire();
								}
							}),
						);
						const c = () => {
							const n = this.j;
							this.q.mainContainer.classList.toggle("underline-links", n);
						};
						c(), this.D(this.onDidChangeLinkUnderlines(() => c()));
					}
					onDidChangeLinkUnderlines(c) {
						return this.m.event(c);
					}
					get onDidChangeScreenReaderOptimized() {
						return this.c.event;
					}
					isScreenReaderOptimized() {
						const c = this.r.getValue("editor.accessibilitySupport");
						return (
							c === "on" ||
							(c === "auto" && this.b === d.AccessibilitySupport.Enabled)
						);
					}
					get onDidChangeReducedMotion() {
						return this.h.event;
					}
					isMotionReduced() {
						const c = this.f;
						return c === "on" || (c === "auto" && this.g);
					}
					alwaysUnderlineAccessKeys() {
						return Promise.resolve(!1);
					}
					getAccessibilitySupport() {
						return this.b;
					}
					setAccessibilitySupport(c) {
						this.b !== c && ((this.b = c), this.c.fire());
					}
					alert(c) {
						(0, i.$oib)(c);
					}
					status(c) {
						(0, i.$pib)(c);
					}
				};
				(e.$25c = a),
					(e.$25c = a = Ne([j(0, r.$6j), j(1, u.$jEb), j(2, m.$gj)], a));
			},
		),
		
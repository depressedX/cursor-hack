import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/browser/dom.js';
import '../../../base/common/async.js';
define(de[1618], he([1, 0, 7, 15]), function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*async*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ZIndex = void 0),
				(e.$ZJb = r);
			var w;
			(function (u) {
				(u[(u.Base = 0)] = "Base"),
					(u[(u.Sash = 35)] = "Sash"),
					(u[(u.SuggestWidget = 40)] = "SuggestWidget"),
					(u[(u.Hover = 50)] = "Hover"),
					(u[(u.DragImage = 1e3)] = "DragImage"),
					(u[(u.MenubarMenuItemsHolder = 2e3)] = "MenubarMenuItemsHolder"),
					(u[(u.ContextView = 2500)] = "ContextView"),
					(u[(u.ModalDialog = 2600)] = "ModalDialog"),
					(u[(u.PaneDropOverlay = 1e4)] = "PaneDropOverlay");
			})(w || (e.ZIndex = w = {}));
			const E = Object.keys(w)
				.filter((u) => !isNaN(Number(u)))
				.map((u) => Number(u))
				.sort((u, a) => a - u);
			function C(u) {
				for (const a of E) if (u >= a) return a;
				return -1;
			}
			class d {
				constructor() {
					(this.c = (0, t.$Rgb)()),
						(this.d = new Map()),
						(this.e = new i.$Yh(() => this.g(), 200));
				}
				registerZIndex(a, h, c) {
					if (this.d.get(c))
						throw new Error(
							`z-index with name ${c} has already been registered.`,
						);
					const n = a + h;
					if (C(n) !== a)
						throw new Error(
							`Relative layer: ${a} + z-index: ${h} exceeds next layer ${n}.`,
						);
					return this.d.set(c, n), this.e.schedule(), this.f(c);
				}
				f(a) {
					return `--z-index-${a}`;
				}
				g() {
					(0, t.$9fb)(this.c);
					let a = "";
					this.d.forEach((h, c) => {
						a += `${this.f(c)}: ${h};
`;
					}),
						(0, t.$Wgb)(":root", a, this.c);
				}
			}
			const m = new d();
			function r(u, a, h) {
				return m.registerZIndex(u, a, h);
			}
		})

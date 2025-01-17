import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/browser/dom.js';
import '../../../base/browser/ui/widget.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import './menuEntryActionViewItem.js';
import '../common/actions.js';
import '../../contextkey/common/contextkey.js';
import '../../instantiation/common/instantiation.js';
import '../../theme/common/colorRegistry.js';
define(
			de[1676],
			he([1, 0, 7, 235, 6, 3, 92, 11, 8, 5, 51]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$t4b = e.$s4b = e.$r4b = void 0);
				class a extends i.$Uhb {
					constructor(g) {
						super(),
							(this.c = g),
							(this.a = this.D(new w.$re())),
							(this.onClick = this.a.event),
							(this.b = (0, t.$)(".floating-click-widget")),
							(this.b.style.padding = "6px 11px"),
							(this.b.style.borderRadius = "2px"),
							(this.b.style.cursor = "pointer"),
							(this.b.style.zIndex = "1");
					}
					getDomNode() {
						return this.b;
					}
					render() {
						(0, t.$9fb)(this.b),
							(this.b.style.backgroundColor = (0, u.$sP)(
								u.$eS,
								(0, u.$rP)(u.$8P),
							)),
							(this.b.style.color = (0, u.$sP)(u.$cS, (0, u.$rP)(u.$9P))),
							(this.b.style.border = `1px solid ${(0, u.$rP)(u.$OP)}`),
							((0, t.$fhb)(this.b, (0, t.$)("")).textContent = this.c),
							this.f(this.b, () => this.a.fire());
					}
				}
				e.$r4b = a;
				let h = class extends E.$1c {
					constructor(g, p, o) {
						super(),
							(this.a = new w.$re()),
							(this.b = this.a.event),
							(this.c = this.D(p.createMenu(g, o)));
					}
					f() {
						const g = this.D(new E.$Zc()),
							p = () => {
								if ((g.clear(), !this.j())) return;
								const o = [];
								if (
									((0, C.$Kyb)(
										this.c,
										{ renderShortTitle: !0, shouldForwardArgs: !0 },
										o,
									),
									o.length === 0)
								)
									return;
								const [f] = o,
									b = this.g(f, g);
								g.add(b), g.add(b.onClick(() => f.run(this.h()))), b.render();
							};
						this.D(this.c.onDidChange(p)), p();
					}
					h() {}
					j() {
						return !0;
					}
				};
				(e.$s4b = h), (e.$s4b = h = Ne([j(1, d.$YX), j(2, m.$6j)], h));
				let c = class extends h {
					constructor(g, p, o, f) {
						super(g.menuId, o, f), (this.m = g), (this.n = p), this.f();
					}
					g(g, p) {
						const o = this.n.createInstance(a, g.label),
							f = o.getDomNode();
						return (
							this.m.container.appendChild(f),
							p.add((0, E.$Yc)(() => f.remove())),
							o
						);
					}
					h() {
						return this.m.getActionArg();
					}
				};
				(e.$t4b = c),
					(e.$t4b = c = Ne([j(1, r.$Li), j(2, d.$YX), j(3, m.$6j)], c));
			},
		),
		
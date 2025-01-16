define(de[1616], he([1, 0, 7, 160, 3, 39]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$WDb = void 0),
				(t = mt(t));
			const C = t.$;
			let d = class extends w.$1c {
				get hasContent() {
					return this.b;
				}
				constructor(r) {
					super(),
						(this.c = r),
						(this.actions = []),
						(this.b = !1),
						(this.hoverElement = C("div.hover-row.status-bar")),
						(this.hoverElement.tabIndex = 0),
						(this.a = t.$fhb(this.hoverElement, C("div.actions")));
				}
				addAction(r) {
					const u = this.c.lookupKeybinding(r.commandId),
						a = u ? u.getLabel() : null;
					this.b = !0;
					const h = this.D(i.$0hb.render(this.a, r, a));
					return this.actions.push(h), h;
				}
				append(r) {
					const u = t.$fhb(this.a, r);
					return (this.b = !0), u;
				}
			};
			(e.$WDb = d), (e.$WDb = d = Ne([j(0, E.$uZ)], d));
		}),
		
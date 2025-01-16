define(de[979], he([1, 0, 3]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$hUb = void 0);
			class i extends t.$1c {
				get inUse() {
					return this.b;
				}
				constructor(E) {
					super(), (this.c = E), (this.a = []), (this.b = new Set());
				}
				get() {
					if (this.a.length > 0) {
						const C = this.a.pop();
						return this.b.add(C), C;
					}
					const E = this.D(this.c());
					return this.b.add(E), E;
				}
				release(E) {
					this.b.delete(E), this.a.push(E);
				}
			}
			e.$hUb = i;
		}),
		define(
			de[3007],
			he([1, 0, 7, 183, 6, 94, 3, 251, 5, 106, 2390]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$fUb = void 0),
					(t = mt(t));
				let u = class extends C.$1c {
					get onDidClick() {
						return this.a.event;
					}
					get domNode() {
						return this.b;
					}
					setShowButtons(h) {
						this.domNode.classList.toggle("hideButtons", !h);
					}
					constructor(h, c, n, g) {
						super(), (this.c = g), (this.a = this.D(new w.$re()));
						const p = t.h(".chat-confirmation-widget@root", [
							t.h(".chat-confirmation-widget-title@title"),
							t.h(".chat-confirmation-widget-message@message"),
							t.h(".chat-confirmation-buttons-container@buttonsContainer"),
						]);
						this.b = p.root;
						const o = this.D(this.c.createInstance(d.$Qzb, {})),
							f = this.D(o.render(new E.$cl(h)));
						p.title.appendChild(f.element);
						const b = this.D(o.render(new E.$cl(c)));
						p.message.appendChild(b.element),
							n.forEach((s) => {
								const l = new i.$oob(p.buttonsContainer, {
									...r.$lyb,
									secondary: s.isSecondary,
								});
								(l.label = s.label), this.D(l.onDidClick(() => this.a.fire(s)));
							});
					}
				};
				(e.$fUb = u), (e.$fUb = u = Ne([j(3, m.$Li)], u));
			},
		),
		
import '../../../../../require.js';
import '../../../../../exports.js';
import '../widget.js';
import '../../../common/event.js';
import '../../dom.js';
import '../button/button.js';
import '../../../common/lifecycle.js';
import '../hover/hoverDelegateFactory.js';
import '../../../../css!vs/base/browser/ui/radio/radio.js';
define(
			de[2683],
			he([1, 0, 235, 6, 7, 183, 3, 95, 2249]),
			function (ce /*require*/,
 e /*exports*/,
 t /*widget*/,
 i /*event*/,
 w /*dom*/,
 E /*button*/,
 C /*lifecycle*/,
 d /*hoverDelegateFactory*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$cpb = void 0);
				class m extends t.$Uhb {
					constructor(u) {
						super(),
							(this.a = this.D(new i.$re())),
							(this.onDidSelect = this.a.event),
							(this.c = []),
							(this.h = this.D(new C.$0c())),
							(this.b = u.hoverDelegate ?? this.D((0, d.$dib)())),
							(this.domNode = (0, w.$)(".monaco-custom-radio")),
							this.domNode.setAttribute("role", "radio"),
							this.setItems(u.items);
					}
					setItems(u) {
						this.h.clearAndDisposeAll(),
							(this.c = u),
							(this.g = this.c.find((a) => a.isActive) ?? this.c[0]);
						for (let a = 0; a < this.c.length; a++) {
							const h = this.c[a],
								c = new C.$Zc(),
								n = c.add(
									new E.$oob(this.domNode, {
										hoverDelegate: this.b,
										title: h.tooltip,
										supportIcons: !0,
									}),
								);
							(n.enabled = !h.disabled),
								c.add(
									n.onDidClick(() => {
										this.g !== h && ((this.g = h), this.n(), this.a.fire(a));
									}),
								),
								this.h.set(n, { item: h, dispose: () => c.dispose() });
						}
						this.n();
					}
					setActiveItem(u) {
						if (u < 0 || u >= this.c.length) throw new Error("Invalid Index");
						(this.g = this.c[u]), this.n();
					}
					setEnabled(u) {
						for (const [a] of this.h) a.enabled = u;
					}
					n() {
						let u = !1;
						for (const [a, { item: h }] of this.h) {
							const c = u;
							(u = h === this.g),
								a.element.classList.toggle("active", u),
								a.element.classList.toggle("previous-active", c),
								(a.label = h.text);
						}
					}
				}
				e.$cpb = m;
			},
		),
		
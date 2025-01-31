import '../../../require.js';
import '../../../exports.js';
import '../../base/common/actions.js';
import '../common/component.js';
import '../../base/common/event.js';
import '../../base/browser/dom.js';
import '../../base/common/lifecycle.js';
import '../../base/common/types.js';
define(
			de[1701],
			he([1, 0, 50, 969, 6, 7, 3, 28]),
			function (ce /*require*/,
 e /*exports*/,
 t /*actions*/,
 i /*component*/,
 w /*event*/,
 E /*dom*/,
 C /*lifecycle*/,
 d /*types*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$iEb = e.$hEb = e.$gEb = void 0);
				class m extends i.$fEb {
					get onDidFocus() {
						return this.y || (this.y = this.M().onDidFocus), this.y.event;
					}
					get onDidBlur() {
						return this.J || (this.J = this.M().onDidBlur), this.J.event;
					}
					hasFocus() {
						return this.L;
					}
					M() {
						const h = (0, d.$wg)(this.getContainer()),
							c = this.D((0, E.$dhb)(h)),
							n = (this.y = this.D(new w.$re()));
						this.D(
							c.onDidFocus(() => {
								(this.L = !0), n.fire();
							}),
						);
						const g = (this.J = this.D(new w.$re()));
						return (
							this.D(
								c.onDidBlur(() => {
									(this.L = !1), g.fire();
								}),
							),
							{ onDidFocus: n, onDidBlur: g }
						);
					}
					constructor(h, c, n, g) {
						super(h, n, g),
							(this.Q = c),
							(this.t = this.D(new w.$re())),
							(this.onTitleAreaUpdate = this.t.event),
							(this.L = !1),
							(this.O = !1);
					}
					getTitle() {}
					create(h) {
						this.P = h;
					}
					getContainer() {
						return this.P;
					}
					setVisible(h) {
						this.O !== !!h && (this.O = h);
					}
					focus() {}
					getMenuIds() {
						return [];
					}
					getActions() {
						return [];
					}
					getSecondaryActions() {
						return [];
					}
					getContextMenuActions() {
						return [];
					}
					getActionViewItem(h, c) {}
					getActionsContext() {
						return null;
					}
					getActionRunner() {
						return this.N || (this.N = this.D(new t.$sj())), this.N;
					}
					R() {
						this.t.fire();
					}
					isVisible() {
						return this.O;
					}
					getControl() {}
				}
				e.$gEb = m;
				class r {
					constructor(h, c, n, g, p, o) {
						(this.a = h),
							(this.id = c),
							(this.name = n),
							(this.cssClass = g),
							(this.order = p),
							(this.requestedIndex = o);
					}
					instantiate(h) {
						return h.createInstance(this.a);
					}
				}
				e.$hEb = r;
				class u extends C.$1c {
					constructor() {
						super(...arguments),
							(this.a = this.D(new w.$re())),
							(this.onDidRegister = this.a.event),
							(this.b = this.D(new w.$re())),
							(this.onDidDeregister = this.b.event),
							(this.c = []);
					}
					f(h) {
						this.j(h.id) || (this.c.push(h), this.a.fire(h));
					}
					g(h) {
						const c = this.j(h);
						c && (this.c.splice(this.c.indexOf(c), 1), this.b.fire(c));
					}
					getComposite(h) {
						return this.j(h);
					}
					h() {
						return this.c.slice(0);
					}
					j(h) {
						return this.c.find((c) => c.id === h);
					}
				}
				e.$iEb = u;
			},
		)

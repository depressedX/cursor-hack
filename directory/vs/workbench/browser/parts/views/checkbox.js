import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/toggle/toggle.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../nls.js';
import '../../../../platform/theme/browser/defaultStyles.js';
define(
			de[2946],
			he([1, 0, 7, 268, 14, 6, 3, 4, 106]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Otc = e.$Ntc = void 0),
					(t = mt(t));
				class r extends C.$1c {
					constructor() {
						super(...arguments),
							(this.a = this.D(new E.$re())),
							(this.onDidChangeCheckboxState = this.a.event);
					}
					setCheckboxState(h) {
						this.a.fire([h]);
					}
				}
				e.$Ntc = r;
				class u extends C.$1c {
					static {
						this.checkboxClass = "custom-view-tree-node-item-checkbox";
					}
					constructor(h, c, n, g) {
						super(),
							(this.f = c),
							(this.g = n),
							(this.h = g),
							(this.isDisposed = !1),
							(this.c = new E.$re()),
							(this.onDidChangeState = this.c.event),
							(this.a = h);
					}
					render(h) {
						h.checkbox &&
							(this.toggle
								? ((this.toggle.checked = h.checkbox.isChecked),
									this.toggle.setIcon(
										this.toggle.checked ? w.$ak.check : void 0,
									))
								: this.j(h));
					}
					j(h) {
						h.checkbox &&
							((this.toggle = new i.$8ib({
								isChecked: h.checkbox.isChecked,
								title: "",
								icon: h.checkbox.isChecked ? w.$ak.check : void 0,
								...m.$pyb,
							})),
							this.n(h.checkbox),
							this.s(h.checkbox),
							this.toggle.domNode.classList.add(u.checkboxClass),
							(this.toggle.domNode.tabIndex = 1),
							t.$fhb(this.a, this.toggle.domNode),
							this.m(h));
					}
					m(h) {
						this.toggle &&
							(this.D({ dispose: () => this.t() }),
							this.D(this.toggle),
							this.D(
								this.toggle.onChange(() => {
									this.q(h);
								}),
							));
					}
					n(h) {
						this.toggle &&
							(this.b
								? this.b.update(h.tooltip)
								: (this.b = this.D(
										this.h.setupManagedHover(
											this.g,
											this.toggle.domNode,
											this.r(h),
										),
									)));
					}
					q(h) {
						this.toggle &&
							h.checkbox &&
							((h.checkbox.isChecked = this.toggle.checked),
							this.toggle.setIcon(this.toggle.checked ? w.$ak.check : void 0),
							this.n(h.checkbox),
							this.s(h.checkbox),
							this.f.setCheckboxState(h));
					}
					r(h) {
						return h.tooltip
							? h.tooltip
							: h.isChecked
								? (0, d.localize)(3734, null)
								: (0, d.localize)(3735, null);
					}
					s(h) {
						this.toggle &&
							h.accessibilityInformation &&
							((this.toggle.domNode.ariaLabel =
								h.accessibilityInformation.label),
							h.accessibilityInformation.role &&
								(this.toggle.domNode.role = h.accessibilityInformation.role));
					}
					t() {
						const h = this.a.children;
						for (const c of h) c.remove();
					}
				}
				e.$Otc = u;
			},
		),
		
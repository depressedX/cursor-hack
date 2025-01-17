import '../../../../../require.js';
import '../../../../../exports.js';
import '../../dom.js';
import '../../keyboardEvent.js';
import '../scrollbar/scrollableElement.js';
import '../../../common/keyCodes.js';
import '../../../common/lifecycle.js';
import '../../../../nls.js';
import '../../../../css!vs/base/browser/ui/hover/hoverWidget.js';
define(
			de[160],
			he([1, 0, 7, 114, 203, 27, 3, 4, 2239]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$aib = e.$_hb = e.$0hb = e.$9hb = e.HoverPosition = void 0),
					(e.$$hb = h),
					(t = mt(t));
				const m = t.$;
				var r;
				(function (g) {
					(g[(g.LEFT = 0)] = "LEFT"),
						(g[(g.RIGHT = 1)] = "RIGHT"),
						(g[(g.BELOW = 2)] = "BELOW"),
						(g[(g.ABOVE = 3)] = "ABOVE");
				})(r || (e.HoverPosition = r = {}));
				class u extends C.$1c {
					constructor() {
						super(),
							(this.containerDomNode = document.createElement("div")),
							(this.containerDomNode.className = "monaco-hover"),
							(this.containerDomNode.tabIndex = 0),
							this.containerDomNode.setAttribute("role", "tooltip"),
							(this.contentsDomNode = document.createElement("div")),
							(this.contentsDomNode.className = "monaco-hover-content"),
							(this.scrollbar = this.D(
								new w.$8hb(this.contentsDomNode, {
									consumeMouseWheelIfScrollbarIsNeeded: !0,
								}),
							)),
							this.containerDomNode.appendChild(this.scrollbar.getDomNode());
					}
					onContentsChanged() {
						this.scrollbar.scanDomNode();
					}
				}
				e.$9hb = u;
				class a extends C.$1c {
					static render(p, o, f) {
						return new a(p, o, f);
					}
					constructor(p, o, f) {
						super(),
							(this.actionLabel = o.label),
							(this.actionKeybindingLabel = f),
							(this.a = t.$fhb(p, m("div.action-container"))),
							this.a.setAttribute("tabindex", "0"),
							(this.b = t.$fhb(this.a, m("a.action"))),
							this.b.setAttribute("role", "button"),
							o.iconClass && t.$fhb(this.b, m(`span.icon.${o.iconClass}`));
						const b = t.$fhb(this.b, m("span"));
						(b.textContent = f ? `${o.label} (${f})` : o.label),
							this.B.add(new c(this.a, o.run)),
							this.B.add(
								new n(this.a, o.run, [E.KeyCode.Enter, E.KeyCode.Space]),
							),
							this.setEnabled(!0);
					}
					setEnabled(p) {
						p
							? (this.a.classList.remove("disabled"),
								this.a.removeAttribute("aria-disabled"))
							: (this.a.classList.add("disabled"),
								this.a.setAttribute("aria-disabled", "true"));
					}
				}
				e.$0hb = a;
				function h(g, p) {
					return g && p
						? (0, d.localize)(15, null, p)
						: g
							? (0, d.localize)(16, null)
							: "";
				}
				class c extends C.$1c {
					constructor(p, o) {
						super(),
							this.D(
								t.$0fb(p, t.$$gb.CLICK, (f) => {
									f.stopPropagation(), f.preventDefault(), o(p);
								}),
							);
					}
				}
				e.$_hb = c;
				class n extends C.$1c {
					constructor(p, o, f) {
						super(),
							this.D(
								t.$0fb(p, t.$$gb.KEY_DOWN, (b) => {
									const s = new i.$7fb(b);
									f.some((l) => s.equals(l)) &&
										(b.stopPropagation(), b.preventDefault(), o(p));
								}),
							);
					}
				}
				e.$aib = n;
			},
		),
		
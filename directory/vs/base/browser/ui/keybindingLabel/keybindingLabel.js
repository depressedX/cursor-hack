define(
			de[460],
			he([1, 0, 7, 317, 95, 592, 3, 82, 4, 2245]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$7ob = e.$6ob = void 0),
					(t = mt(t));
				const r = t.$;
				e.$6ob = {
					keybindingLabelBackground: void 0,
					keybindingLabelForeground: void 0,
					keybindingLabelBorder: void 0,
					keybindingLabelBottomBorder: void 0,
					keybindingLabelShadow: void 0,
				};
				class u extends C.$1c {
					constructor(h, c, n) {
						super(),
							(this.q = c),
							(this.g = new Set()),
							(this.f = n || Object.create(null));
						const g = this.f.keybindingLabelForeground;
						(this.c = t.$fhb(h, r(".monaco-keybinding"))),
							g && (this.c.style.color = g),
							(this.h = this.D(
								(0, i.$1ib)().setupManagedHover(
									(0, w.$cib)("mouse"),
									this.c,
									"",
								),
							)),
							(this.n = !1),
							h.appendChild(this.c);
					}
					get element() {
						return this.c;
					}
					set(h, c) {
						(this.n && this.j === h && u.z(this.m, c)) ||
							((this.j = h), (this.m = c), this.r());
					}
					r() {
						if ((this.s(), this.j)) {
							const h = this.j.getChords();
							h[0] && this.t(this.c, h[0], this.m ? this.m.firstPart : null);
							for (let n = 1; n < h.length; n++)
								t.$fhb(
									this.c,
									r("span.monaco-keybinding-key-chord-separator", void 0, " "),
								),
									this.t(this.c, h[n], this.m ? this.m.chordPart : null);
							const c =
								(this.f.disableTitle ?? !1)
									? void 0
									: this.j.getAriaLabel() || void 0;
							this.h.update(c), this.c.setAttribute("aria-label", c || "");
						} else this.f && this.f.renderUnboundKeybindings && this.w(this.c);
						this.n = !0;
					}
					s() {
						t.$9fb(this.c), this.g.clear();
					}
					t(h, c, n) {
						const g = E.$2ob.modifierLabels[this.q];
						c.ctrlKey && this.u(h, g.ctrlKey, !!n?.ctrlKey, g.separator),
							c.shiftKey && this.u(h, g.shiftKey, !!n?.shiftKey, g.separator),
							c.altKey && this.u(h, g.altKey, !!n?.altKey, g.separator),
							c.metaKey && this.u(h, g.metaKey, !!n?.metaKey, g.separator);
						const p = c.keyLabel;
						p && this.u(h, p, !!n?.keyCode, "");
					}
					u(h, c, n, g) {
						t.$fhb(h, this.y(c, n ? ".highlight" : "")),
							g &&
								t.$fhb(h, r("span.monaco-keybinding-key-separator", void 0, g));
					}
					w(h) {
						t.$fhb(h, this.y((0, m.localize)(25, null)));
					}
					y(h, c = "") {
						const n = r("span.monaco-keybinding-key" + c, void 0, h);
						return (
							this.g.add(n),
							this.f.keybindingLabelBackground &&
								(n.style.backgroundColor = this.f.keybindingLabelBackground),
							this.f.keybindingLabelBorder &&
								(n.style.borderColor = this.f.keybindingLabelBorder),
							this.f.keybindingLabelBottomBorder &&
								(n.style.borderBottomColor =
									this.f.keybindingLabelBottomBorder),
							this.f.keybindingLabelShadow &&
								(n.style.boxShadow = `inset 0 -1px 0 ${this.f.keybindingLabelShadow}`),
							n
						);
					}
					static z(h, c) {
						return h === c || (!h && !c)
							? !0
							: !!h &&
									!!c &&
									(0, d.$zo)(h.firstPart, c.firstPart) &&
									(0, d.$zo)(h.chordPart, c.chordPart);
					}
				}
				e.$7ob = u;
			},
		),
		
import '../../../../../require.js';
import '../../../../../exports.js';
import '../../dom.js';
import '../../touch.js';
import '../../../common/arrays.js';
import '../../../common/event.js';
import '../../../common/keyCodes.js';
import '../../../common/lifecycle.js';
import '../../../common/platform.js';
define(
			de[2677],
			he([1, 0, 7, 159, 24, 6, 27, 3, 12]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$3ib = void 0),
					(t = mt(t)),
					(w = mt(w));
				class r extends d.$1c {
					constructor(a, h, c, n) {
						super(),
							(this.f = 0),
							(this.b = n || Object.create(null)),
							(this.c = []),
							(this.a = document.createElement("select")),
							(this.a.className = "monaco-select-box"),
							typeof this.b.ariaLabel == "string" &&
								this.a.setAttribute("aria-label", this.b.ariaLabel),
							typeof this.b.ariaDescription == "string" &&
								this.a.setAttribute("aria-description", this.b.ariaDescription),
							(this.g = this.D(new E.$re())),
							(this.h = c),
							this.j(),
							this.setOptions(a, h);
					}
					j() {
						this.D(i.$Qhb.addTarget(this.a)),
							[i.EventType.Tap].forEach((a) => {
								this.D(
									t.$0fb(this.a, a, (h) => {
										this.a.focus();
									}),
								);
							}),
							this.D(
								t.$$fb(this.a, "click", (a) => {
									t.$ahb.stop(a, !0);
								}),
							),
							this.D(
								t.$$fb(this.a, "change", (a) => {
									(this.a.title = a.target.value),
										this.g.fire({
											index: a.target.selectedIndex,
											selected: a.target.value,
										});
								}),
							),
							this.D(
								t.$$fb(this.a, "keydown", (a) => {
									let h = !1;
									m.$m
										? (a.keyCode === C.KeyCode.DownArrow ||
												a.keyCode === C.KeyCode.UpArrow ||
												a.keyCode === C.KeyCode.Space) &&
											(h = !0)
										: ((a.keyCode === C.KeyCode.DownArrow && a.altKey) ||
												a.keyCode === C.KeyCode.Space ||
												a.keyCode === C.KeyCode.Enter) &&
											(h = !0),
										h && a.stopPropagation();
								}),
							);
					}
					get onDidSelect() {
						return this.g.event;
					}
					setOptions(a, h) {
						(!this.c || !w.$yb(this.c, a)) &&
							((this.c = a),
							(this.a.options.length = 0),
							this.c.forEach((c, n) => {
								this.a.add(this.m(c.text, n, c.isDisabled));
							})),
							h !== void 0 && this.select(h);
					}
					select(a) {
						this.c.length === 0
							? (this.f = 0)
							: a >= 0 && a < this.c.length
								? (this.f = a)
								: a > this.c.length - 1
									? this.select(this.c.length - 1)
									: this.f < 0 && (this.f = 0),
							(this.a.selectedIndex = this.f),
							this.f < this.c.length && typeof this.c[this.f].text == "string"
								? (this.a.title = this.c[this.f].text)
								: (this.a.title = "");
					}
					setAriaLabel(a) {
						(this.b.ariaLabel = a), this.a.setAttribute("aria-label", a);
					}
					focus() {
						this.a && ((this.a.tabIndex = 0), this.a.focus());
					}
					blur() {
						this.a && ((this.a.tabIndex = -1), this.a.blur());
					}
					setEnabled(a) {
						this.a.disabled = !a;
					}
					setFocusable(a) {
						this.a.tabIndex = a ? 0 : -1;
					}
					render(a) {
						a.classList.add("select-container"),
							a.appendChild(this.a),
							this.setOptions(this.c, this.f),
							this.applyStyles();
					}
					style(a) {
						(this.h = a), this.applyStyles();
					}
					applyStyles() {
						this.a &&
							((this.a.style.backgroundColor = this.h.selectBackground ?? ""),
							(this.a.style.color = this.h.selectForeground ?? ""),
							(this.a.style.borderColor = this.h.selectBorder ?? ""));
					}
					m(a, h, c) {
						const n = document.createElement("option");
						return (n.value = a), (n.text = a), (n.disabled = !!c), n;
					}
				}
				e.$3ib = r;
			},
		),
		
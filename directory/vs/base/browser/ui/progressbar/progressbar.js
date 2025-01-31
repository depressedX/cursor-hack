import '../../../../../require.js';
import '../../../../../exports.js';
import '../../dom.js';
import './progressAccessibilitySignal.js';
import '../../../common/async.js';
import '../../../common/lifecycle.js';
import '../../../common/types.js';
import '../../../../css!vs/base/browser/ui/progressbar/progressbar.js';
define(
			de[436],
			he([1, 0, 7, 1496, 15, 3, 28, 2248]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*progressAccessibilitySignal*/,
 w /*async*/,
 E /*lifecycle*/,
 C /*types*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$bpb = e.$apb = void 0);
				const d = "done",
					m = "active",
					r = "infinite",
					u = "infinite-long-running",
					a = "discrete";
				e.$apb = { progressBarBackground: void 0 };
				class h extends E.$1c {
					static {
						this.a = 1e4;
					}
					static {
						this.b = 3e3;
					}
					constructor(n, g) {
						super(),
							(this.n = this.D(new E.$2c())),
							(this.c = 0),
							(this.j = this.D(new w.$Yh(() => (0, t.show)(this.f), 0))),
							(this.m = this.D(new w.$Yh(() => this.t(), h.a))),
							this.q(n, g);
					}
					q(n, g) {
						(this.f = document.createElement("div")),
							this.f.classList.add("monaco-progress-container"),
							this.f.setAttribute("role", "progressbar"),
							this.f.setAttribute("aria-valuemin", "0"),
							n.appendChild(this.f),
							(this.g = document.createElement("div")),
							this.g.classList.add("progress-bit"),
							(this.g.style.backgroundColor =
								g?.progressBarBackground || "#0E70C0"),
							this.f.appendChild(this.g);
					}
					r() {
						(this.g.style.width = "inherit"),
							(this.g.style.opacity = "1"),
							this.f.classList.remove(m, r, u, a),
							(this.c = 0),
							(this.h = void 0),
							this.m.cancel(),
							this.n.clear();
					}
					done() {
						return this.s(!0);
					}
					stop() {
						return this.s(!1);
					}
					s(n) {
						return (
							this.f.classList.add(d),
							this.f.classList.contains(r)
								? ((this.g.style.opacity = "0"),
									n ? setTimeout(() => this.r(), 200) : this.r())
								: ((this.g.style.width = "inherit"),
									n ? setTimeout(() => this.r(), 200) : this.r()),
							this
						);
					}
					infinite() {
						return (
							(this.g.style.width = "2%"),
							(this.g.style.opacity = "1"),
							this.f.classList.remove(a, d, u),
							this.f.classList.add(m, r),
							this.m.schedule(),
							this
						);
					}
					t() {
						this.f.classList.add(u);
					}
					total(n) {
						return (
							(this.c = 0),
							(this.h = n),
							this.f.setAttribute("aria-valuemax", n.toString()),
							this
						);
					}
					hasTotal() {
						return (0, C.$pg)(this.h);
					}
					worked(n) {
						return (n = Math.max(1, Number(n))), this.u(this.c + n);
					}
					setWorked(n) {
						return (n = Math.max(1, Number(n))), this.u(n);
					}
					u(n) {
						const g = this.h || 100;
						return (
							(this.c = n),
							(this.c = Math.min(g, this.c)),
							this.f.classList.remove(r, u, d),
							this.f.classList.add(m, a),
							this.f.setAttribute("aria-valuenow", n.toString()),
							(this.g.style.width = 100 * (this.c / g) + "%"),
							this
						);
					}
					getContainer() {
						return this.f;
					}
					show(n) {
						this.j.cancel(),
							(this.n.value = (0, i.$_ob)(h.b)),
							typeof n == "number" ? this.j.schedule(n) : (0, t.show)(this.f);
					}
					hide() {
						(0, t.hide)(this.f), this.j.cancel(), this.n.clear();
					}
				}
				e.$bpb = h;
			},
		)

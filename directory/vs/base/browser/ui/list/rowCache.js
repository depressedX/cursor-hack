define(de[2675], he([1, 0, 7]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$vib = void 0);
			class i {
				constructor(E) {
					(this.d = E),
						(this.a = new Map()),
						(this.b = new Set()),
						(this.c = !1);
				}
				alloc(E) {
					let C = this.g(E).pop(),
						d = !1;
					if (C) (d = this.b.has(C.domNode)), d && this.b.delete(C.domNode);
					else {
						const m = (0, t.$)(".monaco-list-row"),
							u = this.h(E).renderTemplate(m);
						C = { domNode: m, templateId: E, templateData: u };
					}
					return { row: C, isReusingConnectedDomNode: d };
				}
				release(E) {
					E && this.e(E);
				}
				transact(E) {
					if (this.c) throw new Error("Already in transaction");
					this.c = !0;
					try {
						E();
					} finally {
						for (const C of this.b) this.f(C);
						this.b.clear(), (this.c = !1);
					}
				}
				e(E) {
					const { domNode: C, templateId: d } = E;
					C && (this.c ? this.b.add(C) : this.f(C)), this.g(d).push(E);
				}
				f(E) {
					E.classList.remove("scrolling"), E.remove();
				}
				g(E) {
					let C = this.a.get(E);
					return C || ((C = []), this.a.set(E, C)), C;
				}
				dispose() {
					this.a.forEach((E, C) => {
						for (const d of E)
							this.h(C).disposeTemplate(d.templateData),
								(d.templateData = null);
					}),
						this.a.clear(),
						this.b.clear();
				}
				h(E) {
					const C = this.d.get(E);
					if (!C) throw new Error(`No renderer found for ${E}`);
					return C;
				}
			}
			e.$vib = i;
		}),
		define(
			de[436],
			he([1, 0, 7, 1496, 15, 3, 28, 2248]),
			function (ce, e, t, i, w, E, C) {
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
		),
		define(
			de[277],
			he([1, 0, 7, 265, 159, 15, 138, 6, 3, 12, 2250]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.Sash = e.SashState = e.Orientation = e.OrthogonalEdge = void 0),
					(e.$sob = p),
					(e.$tob = b);
				const u = !1;
				var a;
				(function (S) {
					(S.North = "north"),
						(S.South = "south"),
						(S.East = "east"),
						(S.West = "west");
				})(a || (e.OrthogonalEdge = a = {}));
				var h;
				(function (S) {
					(S[(S.VERTICAL = 0)] = "VERTICAL"),
						(S[(S.HORIZONTAL = 1)] = "HORIZONTAL");
				})(h || (e.Orientation = h = {}));
				var c;
				(function (S) {
					(S[(S.Disabled = 0)] = "Disabled"),
						(S[(S.AtMinimum = 1)] = "AtMinimum"),
						(S[(S.AtMaximum = 2)] = "AtMaximum"),
						(S[(S.Enabled = 3)] = "Enabled");
				})(c || (e.SashState = c = {}));
				let n = 4;
				const g = new d.$re();
				function p(S) {
					(n = S), g.fire(S);
				}
				let o = 300;
				const f = new d.$re();
				function b(S) {
					(o = S), f.fire(S);
				}
				class s {
					constructor(I) {
						(this.b = I), (this.a = new m.$Zc());
					}
					get onPointerMove() {
						return this.a.add(new i.$mib((0, t.getWindow)(this.b), "mousemove"))
							.event;
					}
					get onPointerUp() {
						return this.a.add(new i.$mib((0, t.getWindow)(this.b), "mouseup"))
							.event;
					}
					dispose() {
						this.a.dispose();
					}
				}
				Ne([C.$ei], s.prototype, "onPointerMove", null),
					Ne([C.$ei], s.prototype, "onPointerUp", null);
				class l {
					get onPointerMove() {
						return this.a.add(new i.$mib(this.b, w.EventType.Change)).event;
					}
					get onPointerUp() {
						return this.a.add(new i.$mib(this.b, w.EventType.End)).event;
					}
					constructor(I) {
						(this.b = I), (this.a = new m.$Zc());
					}
					dispose() {
						this.a.dispose();
					}
				}
				Ne([C.$ei], l.prototype, "onPointerMove", null),
					Ne([C.$ei], l.prototype, "onPointerUp", null);
				class y {
					get onPointerMove() {
						return this.a.onPointerMove;
					}
					get onPointerUp() {
						return this.a.onPointerUp;
					}
					constructor(I) {
						this.a = I;
					}
					dispose() {}
				}
				Ne([C.$ei], y.prototype, "onPointerMove", null),
					Ne([C.$ei], y.prototype, "onPointerUp", null);
				const $ = "pointer-events-disabled";
				class v extends m.$1c {
					get state() {
						return this.j;
					}
					get orthogonalStartSash() {
						return this.u;
					}
					get orthogonalEndSash() {
						return this.C;
					}
					set state(I) {
						this.j !== I &&
							(this.a.classList.toggle("disabled", I === c.Disabled),
							this.a.classList.toggle("minimum", I === c.AtMinimum),
							this.a.classList.toggle("maximum", I === c.AtMaximum),
							(this.j = I),
							this.m.fire(I));
					}
					set orthogonalStartSash(I) {
						if (this.u !== I) {
							if ((this.w.clear(), this.t.clear(), I)) {
								const T = (P) => {
									this.w.clear(),
										P !== c.Disabled &&
											((this.y = (0, t.$fhb)(
												this.a,
												(0, t.$)(".orthogonal-drag-handle.start"),
											)),
											this.w.add((0, m.$Yc)(() => this.y.remove())),
											this.w
												.add(new i.$mib(this.y, "mouseenter"))
												.event(() => v.J(I), void 0, this.w),
											this.w
												.add(new i.$mib(this.y, "mouseleave"))
												.event(() => v.L(I), void 0, this.w));
								};
								this.t.add(I.m.event(T, this)), T(I.state);
							}
							this.u = I;
						}
					}
					set orthogonalEndSash(I) {
						if (this.C !== I) {
							if ((this.F.clear(), this.z.clear(), I)) {
								const T = (P) => {
									this.F.clear(),
										P !== c.Disabled &&
											((this.G = (0, t.$fhb)(
												this.a,
												(0, t.$)(".orthogonal-drag-handle.end"),
											)),
											this.F.add((0, m.$Yc)(() => this.G.remove())),
											this.F.add(new i.$mib(this.G, "mouseenter")).event(
												() => v.J(I),
												void 0,
												this.F,
											),
											this.F.add(new i.$mib(this.G, "mouseleave")).event(
												() => v.L(I),
												void 0,
												this.F,
											));
								};
								this.z.add(I.m.event(T, this)), T(I.state);
							}
							this.C = I;
						}
					}
					constructor(I, T, P) {
						super(),
							(this.g = o),
							(this.h = this.D(new E.$Jh(this.g))),
							(this.j = c.Enabled),
							(this.m = this.D(new d.$re())),
							(this.n = this.D(new d.$re())),
							(this.q = this.D(new d.$re())),
							(this.r = this.D(new d.$re())),
							(this.s = this.D(new d.$re())),
							(this.t = this.D(new m.$Zc())),
							(this.w = this.D(new m.$Zc())),
							(this.z = this.D(new m.$Zc())),
							(this.F = this.D(new m.$Zc())),
							(this.onDidStart = this.n.event),
							(this.onDidChange = this.q.event),
							(this.onDidReset = this.r.event),
							(this.onDidEnd = this.s.event),
							(this.linkedSash = void 0),
							(this.a = (0, t.$fhb)(I, (0, t.$)(".monaco-sash"))),
							P.orthogonalEdge &&
								this.a.classList.add(`orthogonal-edge-${P.orthogonalEdge}`),
							r.$m && this.a.classList.add("mac");
						const k = this.D(new i.$mib(this.a, "mousedown")).event;
						this.D(k((O) => this.H(O, new s(I)), this));
						const L = this.D(new i.$mib(this.a, "dblclick")).event;
						this.D(L(this.I, this));
						const D = this.D(new i.$mib(this.a, "mouseenter")).event;
						this.D(D(() => v.J(this)));
						const M = this.D(new i.$mib(this.a, "mouseleave")).event;
						this.D(M(() => v.L(this))), this.D(w.$Qhb.addTarget(this.a));
						const N = this.D(new i.$mib(this.a, w.EventType.Start)).event;
						this.D(N((O) => this.H(O, new l(this.a)), this));
						const A = this.D(new i.$mib(this.a, w.EventType.Tap)).event;
						let R;
						this.D(
							A((O) => {
								if (R) {
									clearTimeout(R), (R = void 0), this.I(O);
									return;
								}
								clearTimeout(R), (R = setTimeout(() => (R = void 0), 250));
							}, this),
						),
							typeof P.size == "number"
								? ((this.f = P.size),
									P.orientation === h.VERTICAL
										? (this.a.style.width = `${this.f}px`)
										: (this.a.style.height = `${this.f}px`))
								: ((this.f = n),
									this.D(
										g.event((O) => {
											(this.f = O), this.layout();
										}),
									)),
							this.D(f.event((O) => (this.g = O))),
							(this.b = T),
							(this.orthogonalStartSash = P.orthogonalStartSash),
							(this.orthogonalEndSash = P.orthogonalEndSash),
							(this.c = P.orientation || h.VERTICAL),
							this.c === h.HORIZONTAL
								? (this.a.classList.add("horizontal"),
									this.a.classList.remove("vertical"))
								: (this.a.classList.remove("horizontal"),
									this.a.classList.add("vertical")),
							this.a.classList.toggle("debug", u),
							this.layout();
					}
					H(I, T) {
						t.$ahb.stop(I);
						let P = !1;
						if (!I.__orthogonalSashEvent) {
							const z = this.M(I);
							z && ((P = !0), (I.__orthogonalSashEvent = !0), z.H(I, new y(T)));
						}
						if (
							(this.linkedSash &&
								!I.__linkedSashEvent &&
								((I.__linkedSashEvent = !0), this.linkedSash.H(I, new y(T))),
							!this.state)
						)
							return;
						const k = this.a.ownerDocument.getElementsByTagName("iframe");
						for (const z of k) z.classList.add($);
						const L = I.pageX,
							D = I.pageY,
							M = I.altKey,
							N = { startX: L, currentX: L, startY: D, currentY: D, altKey: M };
						this.a.classList.add("active"), this.n.fire(N);
						const A = (0, t.$Rgb)(this.a),
							R = () => {
								let z = "";
								P
									? (z = "all-scroll")
									: this.c === h.HORIZONTAL
										? this.state === c.AtMinimum
											? (z = "s-resize")
											: this.state === c.AtMaximum
												? (z = "n-resize")
												: (z = r.$m ? "row-resize" : "ns-resize")
										: this.state === c.AtMinimum
											? (z = "e-resize")
											: this.state === c.AtMaximum
												? (z = "w-resize")
												: (z = r.$m ? "col-resize" : "ew-resize"),
									(A.textContent = `* { cursor: ${z} !important; }`);
							},
							O = new m.$Zc();
						R(), P || this.m.event(R, null, O);
						const B = (z) => {
								t.$ahb.stop(z, !1);
								const F = {
									startX: L,
									currentX: z.pageX,
									startY: D,
									currentY: z.pageY,
									altKey: M,
								};
								this.q.fire(F);
							},
							U = (z) => {
								t.$ahb.stop(z, !1),
									A.remove(),
									this.a.classList.remove("active"),
									this.s.fire(),
									O.dispose();
								for (const F of k) F.classList.remove($);
							};
						T.onPointerMove(B, null, O), T.onPointerUp(U, null, O), O.add(T);
					}
					I(I) {
						const T = this.M(I);
						T && T.r.fire(),
							this.linkedSash && this.linkedSash.r.fire(),
							this.r.fire();
					}
					static J(I, T = !1) {
						I.a.classList.contains("active")
							? (I.h.cancel(), I.a.classList.add("hover"))
							: I.h
									.trigger(() => I.a.classList.add("hover"), I.g)
									.then(void 0, () => {}),
							!T && I.linkedSash && v.J(I.linkedSash, !0);
					}
					static L(I, T = !1) {
						I.h.cancel(),
							I.a.classList.remove("hover"),
							!T && I.linkedSash && v.L(I.linkedSash, !0);
					}
					clearSashHoverState() {
						v.L(this);
					}
					layout() {
						if (this.c === h.VERTICAL) {
							const I = this.b;
							(this.a.style.left =
								I.getVerticalSashLeft(this) - this.f / 2 + "px"),
								I.getVerticalSashTop &&
									(this.a.style.top = I.getVerticalSashTop(this) + "px"),
								I.getVerticalSashHeight &&
									(this.a.style.height = I.getVerticalSashHeight(this) + "px");
						} else {
							const I = this.b;
							(this.a.style.top =
								I.getHorizontalSashTop(this) - this.f / 2 + "px"),
								I.getHorizontalSashLeft &&
									(this.a.style.left = I.getHorizontalSashLeft(this) + "px"),
								I.getHorizontalSashWidth &&
									(this.a.style.width = I.getHorizontalSashWidth(this) + "px");
						}
					}
					M(I) {
						const T = I.initialTarget ?? I.target;
						if (
							!(!T || !(0, t.$Ygb)(T)) &&
							T.classList.contains("orthogonal-drag-handle")
						)
							return T.classList.contains("start")
								? this.orthogonalStartSash
								: this.orthogonalEndSash;
					}
					dispose() {
						super.dispose(), this.a.remove();
					}
				}
				e.Sash = v;
			},
		),
		
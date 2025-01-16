define(
			de[1580],
			he([1, 0, 139, 323, 7, 265, 114, 159, 277, 97, 6, 27, 3, 4, 279, 2254]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$gpb = e.$fpb = e.Pane = void 0);
				class g extends h.$1c {
					static {
						this.q = 22;
					}
					get ariaHeaderLabel() {
						return this.M;
					}
					set ariaHeaderLabel(s) {
						(this.M = s),
							this.u.setAttribute("aria-label", this.ariaHeaderLabel);
					}
					get draggableElement() {
						return this.u;
					}
					get dropTargetElement() {
						return this.element;
					}
					get dropBackground() {
						return this.N.dropBackground;
					}
					get minimumBodySize() {
						return this.I;
					}
					set minimumBodySize(s) {
						(this.I = s), this.P.fire(void 0);
					}
					get maximumBodySize() {
						return this.J;
					}
					set maximumBodySize(s) {
						(this.J = s), this.P.fire(void 0);
					}
					get R() {
						return this.headerVisible ? g.q : 0;
					}
					get minimumSize() {
						const s = this.R,
							y =
								!this.headerVisible || this.isExpanded()
									? this.minimumBodySize
									: 0;
						return s + y;
					}
					get maximumSize() {
						const s = this.R,
							y =
								!this.headerVisible || this.isExpanded()
									? this.maximumBodySize
									: 0;
						return s + y;
					}
					constructor(s) {
						super(),
							(this.C = void 0),
							(this.F = !0),
							(this.G = !0),
							(this.H = !1),
							(this.N = {
								dropBackground: void 0,
								headerBackground: void 0,
								headerBorder: void 0,
								headerForeground: void 0,
								leftBorder: void 0,
							}),
							(this.O = void 0),
							(this.P = this.D(new u.$re())),
							(this.onDidChange = this.P.event),
							(this.Q = this.D(new u.$re())),
							(this.onDidChangeExpansionState = this.Q.event),
							(this.orthogonalSize = 0),
							(this.y = typeof s.expanded > "u" ? !0 : !!s.expanded),
							(this.z =
								typeof s.orientation > "u"
									? m.Orientation.VERTICAL
									: s.orientation),
							(this.M = (0, c.localize)(29, null, s.title)),
							(this.I =
								typeof s.minimumBodySize == "number"
									? s.minimumBodySize
									: this.z === m.Orientation.HORIZONTAL
										? 200
										: 120),
							(this.J =
								typeof s.maximumBodySize == "number"
									? s.maximumBodySize
									: Number.POSITIVE_INFINITY),
							(this.element = (0, w.$)(".pane"));
					}
					isExpanded() {
						return this.y;
					}
					setExpanded(s) {
						return (!s && !this.collapsible) || this.y === !!s
							? !1
							: (this.element?.classList.toggle("expanded", s),
								(this.y = !!s),
								this.S(),
								s
									? (this.H || (this.W(this.w), (this.H = !0)),
										typeof this.O == "number" &&
											(0, w.getWindow)(this.element).clearTimeout(this.O),
										(0, w.$fhb)(this.element, this.w))
									: (this.O = (0, w.getWindow)(this.element).setTimeout(() => {
											this.w.remove();
										}, 200)),
								this.Q.fire(s),
								this.P.fire(s ? this.C : void 0),
								!0);
					}
					get headerVisible() {
						return this.F;
					}
					set headerVisible(s) {
						this.F !== !!s && ((this.F = !!s), this.S(), this.P.fire(void 0));
					}
					get collapsible() {
						return this.G;
					}
					set collapsible(s) {
						this.G !== !!s && ((this.G = !!s), this.S());
					}
					get orientation() {
						return this.z;
					}
					set orientation(s) {
						this.z !== s &&
							((this.z = s),
							this.element &&
								(this.element.classList.toggle(
									"horizontal",
									this.orientation === m.Orientation.HORIZONTAL,
								),
								this.element.classList.toggle(
									"vertical",
									this.orientation === m.Orientation.VERTICAL,
								)),
							this.u && this.S());
					}
					render() {
						this.element.classList.toggle("expanded", this.isExpanded()),
							this.element.classList.toggle(
								"horizontal",
								this.orientation === m.Orientation.HORIZONTAL,
							),
							this.element.classList.toggle(
								"vertical",
								this.orientation === m.Orientation.VERTICAL,
							),
							(this.u = (0, w.$)(".pane-header")),
							(0, w.$fhb)(this.element, this.u),
							this.u.setAttribute("tabindex", "0"),
							this.u.setAttribute("role", "button"),
							this.u.setAttribute("aria-label", this.ariaHeaderLabel),
							this.U(this.u);
						const s = (0, w.$dhb)(this.u);
						this.D(s),
							this.D(s.onDidFocus(() => this.u.classList.add("focused"), null)),
							this.D(
								s.onDidBlur(() => this.u.classList.remove("focused"), null),
							),
							this.S();
						const l = this.D(new h.$Zc()),
							y = this.D(new E.$mib(this.u, "keydown")),
							$ = u.Event.map(y.event, (v) => new C.$7fb(v), l);
						this.D(
							u.Event.filter(
								$,
								(v) =>
									v.keyCode === a.KeyCode.Enter ||
									v.keyCode === a.KeyCode.Space,
								l,
							)(() => this.setExpanded(!this.isExpanded()), null),
						),
							this.D(
								u.Event.filter(
									$,
									(v) => v.keyCode === a.KeyCode.LeftArrow,
									l,
								)(() => this.setExpanded(!1), null),
							),
							this.D(
								u.Event.filter(
									$,
									(v) => v.keyCode === a.KeyCode.RightArrow,
									l,
								)(() => this.setExpanded(!0), null),
							),
							this.D(d.$Qhb.addTarget(this.u)),
							[w.$$gb.CLICK, d.EventType.Tap].forEach((v) => {
								this.D(
									(0, w.$0fb)(this.u, v, (S) => {
										S.defaultPrevented || this.setExpanded(!this.isExpanded());
									}),
								);
							}),
							(this.w = (0, w.$fhb)(this.element, (0, w.$)(".pane-body"))),
							!this.H && this.isExpanded() && (this.W(this.w), (this.H = !0)),
							this.isExpanded() || this.w.remove();
					}
					layout(s) {
						const l = this.headerVisible ? g.q : 0,
							y = this.z === m.Orientation.VERTICAL ? this.orthogonalSize : s,
							$ =
								this.z === m.Orientation.VERTICAL
									? s - l
									: this.orthogonalSize - l;
						this.isExpanded() &&
							(this.w.classList.toggle("wide", y >= 600),
							this.X($, y),
							(this.C = s));
					}
					style(s) {
						(this.N = s), this.u && this.S();
					}
					S() {
						const s = !this.headerVisible || this.isExpanded();
						this.collapsible
							? (this.u.setAttribute("tabindex", "0"),
								this.u.setAttribute("role", "button"))
							: (this.u.removeAttribute("tabindex"),
								this.u.removeAttribute("role")),
							(this.u.style.lineHeight = `${this.R}px`),
							this.u.classList.toggle("hidden", !this.headerVisible),
							this.u.classList.toggle("expanded", s),
							this.u.classList.toggle("not-collapsible", !this.collapsible),
							this.u.setAttribute("aria-expanded", String(s)),
							(this.u.style.color = this.collapsible
								? (this.N.headerForeground ?? "")
								: ""),
							(this.u.style.backgroundColor =
								(this.collapsible ? this.N.headerBackground : "transparent") ??
								""),
							(this.u.style.borderTop =
								this.N.headerBorder &&
								this.orientation === m.Orientation.VERTICAL
									? `1px solid ${this.N.headerBorder}`
									: ""),
							(this.element.style.borderLeft =
								this.N.leftBorder &&
								this.orientation === m.Orientation.HORIZONTAL
									? `1px solid ${this.N.leftBorder}`
									: "");
					}
				}
				e.Pane = g;
				class p extends h.$1c {
					static {
						this.a = new r.$UL(new r.$RL(128, 128, 128, 0.5));
					}
					constructor(s, l, y) {
						super(),
							(this.f = s),
							(this.g = l),
							(this.h = y),
							(this.b = 0),
							(this.c = this.D(new u.$re())),
							(this.onDidDrop = this.c.event),
							(s.draggableElement.draggable = !0),
							this.D(
								(0, w.$0fb)(s.draggableElement, "dragstart", ($) => this.j($)),
							),
							this.D(
								(0, w.$0fb)(s.dropTargetElement, "dragenter", ($) => this.m($)),
							),
							this.D(
								(0, w.$0fb)(s.dropTargetElement, "dragleave", ($) => this.n($)),
							),
							this.D(
								(0, w.$0fb)(s.dropTargetElement, "dragend", ($) => this.q($)),
							),
							this.D(
								(0, w.$0fb)(s.dropTargetElement, "drop", ($) => this.r($)),
							);
					}
					j(s) {
						if (!this.g.canDrag(this.f) || !s.dataTransfer) {
							s.preventDefault(), s.stopPropagation();
							return;
						}
						(s.dataTransfer.effectAllowed = "move"),
							t.$Ofb &&
								s.dataTransfer?.setData(
									i.$Ohb.TEXT,
									this.f.draggableElement.textContent || "",
								);
						const l = (0, w.$fhb)(
							this.f.element.ownerDocument.body,
							(0, w.$)(
								".monaco-drag-image",
								{},
								this.f.draggableElement.textContent || "",
							),
						);
						s.dataTransfer.setDragImage(l, -10, -10),
							setTimeout(() => l.remove(), 0),
							(this.h.draggable = this);
					}
					m(s) {
						!this.h.draggable ||
							this.h.draggable === this ||
							(this.g.canDrop(this.h.draggable.f, this.f) &&
								(this.b++, this.s()));
					}
					n(s) {
						!this.h.draggable ||
							this.h.draggable === this ||
							(this.g.canDrop(this.h.draggable.f, this.f) &&
								(this.b--, this.b === 0 && this.s()));
					}
					q(s) {
						this.h.draggable &&
							((this.b = 0), this.s(), (this.h.draggable = null));
					}
					r(s) {
						this.h.draggable &&
							(w.$ahb.stop(s),
							(this.b = 0),
							this.s(),
							this.g.canDrop(this.h.draggable.f, this.f) &&
								this.h.draggable !== this &&
								this.c.fire({ from: this.h.draggable.f, to: this.f }),
							(this.h.draggable = null));
					}
					s() {
						let s = null;
						this.b > 0 && (s = this.f.dropBackground ?? p.a.toString()),
							(this.f.dropTargetElement.style.backgroundColor = s || "");
					}
				}
				class o {
					canDrag(s) {
						return !0;
					}
					canDrop(s, l) {
						return !0;
					}
				}
				e.$fpb = o;
				class f extends h.$1c {
					constructor(s, l = {}) {
						super(),
							(this.b = { draggable: null }),
							(this.c = []),
							(this.f = 0),
							(this.g = 0),
							(this.j = void 0),
							(this.m = this.D(new u.$re())),
							(this.onDidDrop = this.m.event),
							(this.a = l.dnd),
							(this.orientation = l.orientation ?? m.Orientation.VERTICAL),
							(this.element = (0, w.$fhb)(s, (0, w.$)(".monaco-pane-view"))),
							(this.h = this.D(
								new n.$vob(this.element, { orientation: this.orientation }),
							)),
							(this.onDidSashReset = this.h.onDidSashReset),
							(this.onDidSashChange = this.h.onDidSashChange),
							(this.onDidScroll = this.h.onDidScroll);
						const y = this.D(new h.$Zc()),
							$ = this.D(new E.$mib(this.element, "keydown")),
							v = u.Event.map(
								u.Event.filter(
									$.event,
									(S) =>
										(0, w.$Ygb)(S.target) &&
										S.target.classList.contains("pane-header"),
									y,
								),
								(S) => new C.$7fb(S),
								y,
							);
						this.D(
							u.Event.filter(
								v,
								(S) => S.keyCode === a.KeyCode.UpArrow,
								y,
							)(() => this.t()),
						),
							this.D(
								u.Event.filter(
									v,
									(S) => S.keyCode === a.KeyCode.DownArrow,
									y,
								)(() => this.u()),
							);
					}
					addPane(s, l, y = this.h.length) {
						const $ = new h.$Zc();
						s.onDidChangeExpansionState(this.r, this, $);
						const v = { pane: s, disposable: $ };
						if (
							(this.c.splice(y, 0, v),
							(s.orientation = this.orientation),
							(s.orthogonalSize = this.f),
							this.h.addView(s, l, y),
							this.a)
						) {
							const S = new p(s, this.a, this.b);
							$.add(S), $.add(S.onDidDrop(this.m.fire, this.m));
						}
					}
					removePane(s) {
						const l = this.c.findIndex(($) => $.pane === s);
						if (l === -1) return;
						this.h.removeView(l, s.isExpanded() ? n.Sizing.Distribute : void 0),
							this.c.splice(l, 1)[0].disposable.dispose();
					}
					movePane(s, l) {
						const y = this.c.findIndex((S) => S.pane === s),
							$ = this.c.findIndex((S) => S.pane === l);
						if (y === -1 || $ === -1) return;
						const [v] = this.c.splice(y, 1);
						this.c.splice($, 0, v), this.h.moveView(y, $);
					}
					resizePane(s, l) {
						const y = this.c.findIndex(($) => $.pane === s);
						y !== -1 && this.h.resizeView(y, l);
					}
					getPaneSize(s) {
						const l = this.c.findIndex((y) => y.pane === s);
						return l === -1 ? -1 : this.h.getViewSize(l);
					}
					layout(s, l) {
						(this.f = this.orientation === m.Orientation.VERTICAL ? l : s),
							(this.g = this.orientation === m.Orientation.HORIZONTAL ? l : s);
						for (const y of this.c) y.pane.orthogonalSize = this.f;
						this.h.layout(this.g);
					}
					setBoundarySashes(s) {
						(this.n = s), this.q(s);
					}
					q(s) {
						this.orientation === m.Orientation.VERTICAL
							? ((this.h.orthogonalStartSash = s?.left),
								(this.h.orthogonalEndSash = s?.right))
							: (this.h.orthogonalEndSash = s?.bottom);
					}
					flipOrientation(s, l) {
						this.orientation =
							this.orientation === m.Orientation.VERTICAL
								? m.Orientation.HORIZONTAL
								: m.Orientation.VERTICAL;
						const y = this.c.map((S) => this.getPaneSize(S.pane));
						this.h.dispose(),
							(0, w.$9fb)(this.element),
							(this.h = this.D(
								new n.$vob(this.element, { orientation: this.orientation }),
							)),
							this.q(this.n);
						const $ = this.orientation === m.Orientation.VERTICAL ? l : s,
							v = this.orientation === m.Orientation.HORIZONTAL ? l : s;
						this.c.forEach((S, I) => {
							(S.pane.orthogonalSize = $),
								(S.pane.orientation = this.orientation);
							const T = this.g === 0 ? 0 : (v * y[I]) / this.g;
							this.h.addView(S.pane, T, I);
						}),
							(this.g = v),
							(this.f = $),
							this.h.layout(this.g);
					}
					r() {
						typeof this.j == "number" &&
							(0, w.getWindow)(this.element).clearTimeout(this.j),
							this.element.classList.add("animated"),
							(this.j = (0, w.getWindow)(this.element).setTimeout(() => {
								(this.j = void 0), this.element.classList.remove("animated");
							}, 200));
					}
					s() {
						return [...this.element.querySelectorAll(".pane-header")];
					}
					t() {
						const s = this.s(),
							l = s.indexOf(this.element.ownerDocument.activeElement);
						l !== -1 && s[Math.max(l - 1, 0)].focus();
					}
					u() {
						const s = this.s(),
							l = s.indexOf(this.element.ownerDocument.activeElement);
						l !== -1 && s[Math.min(l + 1, s.length - 1)].focus();
					}
					dispose() {
						super.dispose(), this.c.forEach((s) => s.disposable.dispose());
					}
				}
				e.$gpb = f;
			},
		),
		
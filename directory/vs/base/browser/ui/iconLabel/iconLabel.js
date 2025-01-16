define(
			de[325],
			he([1, 0, 7, 410, 3, 82, 902, 95, 317, 28, 274, 2240]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Xob = void 0),
					(t = mt(t));
				class a {
					constructor(o) {
						this.e = o;
					}
					get element() {
						return this.e;
					}
					set textContent(o) {
						this.a || o === this.b || ((this.b = o), (this.e.textContent = o));
					}
					set classNames(o) {
						this.a ||
							(0, E.$zo)(o, this.c) ||
							((this.c = o),
							(this.e.classList.value = ""),
							this.e.classList.add(...o));
					}
					set empty(o) {
						this.a ||
							o === this.d ||
							((this.d = o), (this.e.style.marginLeft = o ? "0" : ""));
					}
					dispose() {
						this.a = !0;
					}
				}
				class h extends w.$1c {
					constructor(o, f) {
						super(),
							(this.q = new Map()),
							(this.a = f),
							(this.b = this.D(new a(t.$fhb(o, t.$(".monaco-icon-label"))))),
							(this.j = t.$fhb(
								this.b.element,
								t.$(".monaco-icon-label-container"),
							)),
							(this.c = t.$fhb(this.j, t.$("span.monaco-icon-name-container"))),
							f?.supportHighlights || f?.supportIcons
								? (this.f = this.D(new g(this.c, !!f.supportIcons)))
								: (this.f = new c(this.c)),
							(this.n = f?.hoverDelegate ?? (0, d.$cib)("mouse"));
					}
					get element() {
						return this.b.element;
					}
					setLabel(o, f, b) {
						const s = ["monaco-icon-label"],
							l = ["monaco-icon-label-container"];
						let y = "";
						b &&
							(b.extraClasses && s.push(...b.extraClasses),
							b.italic && s.push("italic"),
							b.strikethrough && s.push("strikethrough"),
							b.disabledCommand && l.push("disabled"),
							b.title &&
								(typeof b.title == "string" ? (y += b.title) : (y += o)));
						const $ = this.b.element.querySelector(
							".monaco-icon-label-iconpath",
						);
						if (b?.iconPath) {
							let v;
							!$ || !t.$Ygb($)
								? ((v = t.$(".monaco-icon-label-iconpath")),
									this.b.element.prepend(v))
								: (v = $),
								(v.style.backgroundImage = t.$vhb(b?.iconPath));
						} else $ && $.remove();
						if (
							((this.b.classNames = s),
							this.b.element.setAttribute("aria-label", y),
							(this.j.classList.value = ""),
							this.j.classList.add(...l),
							this.r(b?.descriptionTitle ? this.j : this.element, b?.title),
							this.f.setLabel(o, b),
							f || this.g)
						) {
							const v = this.t();
							v instanceof i.$Wob
								? (v.set(
										f || "",
										b ? b.descriptionMatches : void 0,
										void 0,
										b?.labelEscapeNewLines,
									),
									this.r(v.element, b?.descriptionTitle))
								: ((v.textContent =
										f && b?.labelEscapeNewLines
											? i.$Wob.escapeNewLines(f, [])
											: f || ""),
									this.r(v.element, b?.descriptionTitle || ""),
									(v.empty = !f));
						}
						if (b?.suffix || this.h) {
							const v = this.s();
							v.textContent = b?.suffix ?? "";
						}
					}
					r(o, f) {
						const b = this.q.get(o);
						if ((b && (b.dispose(), this.q.delete(o)), !f)) {
							o.removeAttribute("title");
							return;
						}
						if (this.n.showNativeHover)
							(function (l, y) {
								(0, r.$lg)(y)
									? (l.title = (0, u.$$k)(y))
									: y?.markdownNotSupportedFallback
										? (l.title = y.markdownNotSupportedFallback)
										: l.removeAttribute("title");
							})(o, f);
						else {
							const s = (0, m.$1ib)().setupManagedHover(this.n, o, f);
							s && this.q.set(o, s);
						}
					}
					dispose() {
						super.dispose();
						for (const o of this.q.values()) o.dispose();
						this.q.clear();
					}
					s() {
						if (!this.h) {
							const o = this.D(
								new a(t.$ehb(this.c, t.$("span.monaco-icon-suffix-container"))),
							);
							this.h = this.D(
								new a(t.$fhb(o.element, t.$("span.label-suffix"))),
							);
						}
						return this.h;
					}
					t() {
						if (!this.g) {
							const o = this.D(
								new a(
									t.$fhb(this.j, t.$("span.monaco-icon-description-container")),
								),
							);
							this.a?.supportDescriptionHighlights
								? (this.g = this.D(
										new i.$Wob(
											t.$fhb(o.element, t.$("span.label-description")),
											{ supportIcons: !!this.a.supportIcons },
										),
									))
								: (this.g = this.D(
										new a(t.$fhb(o.element, t.$("span.label-description"))),
									));
						}
						return this.g;
					}
				}
				e.$Xob = h;
				class c {
					constructor(o) {
						(this.d = o), (this.a = void 0), (this.b = void 0);
					}
					setLabel(o, f) {
						if (!(this.a === o && (0, E.$zo)(this.c, f)))
							if (((this.a = o), (this.c = f), typeof o == "string"))
								this.b ||
									((this.d.innerText = ""),
									this.d.classList.remove("multiple"),
									(this.b = t.$fhb(
										this.d,
										t.$("a.label-name", { id: f?.domId }),
									))),
									(this.b.textContent = o);
							else {
								(this.d.innerText = ""),
									this.d.classList.add("multiple"),
									(this.b = void 0);
								for (let b = 0; b < o.length; b++) {
									const s = o[b],
										l = f?.domId && `${f?.domId}_${b}`;
									t.$fhb(
										this.d,
										t.$(
											"a.label-name",
											{
												id: l,
												"data-icon-label-count": o.length,
												"data-icon-label-index": b,
												role: "treeitem",
											},
											s,
										),
									),
										b < o.length - 1 &&
											t.$fhb(
												this.d,
												t.$(
													"span.label-separator",
													void 0,
													f?.separator || "/",
												),
											);
								}
							}
					}
				}
				function n(p, o, f) {
					if (!f) return;
					let b = 0;
					return p.map((s) => {
						const l = { start: b, end: b + s.length },
							y = f
								.map(($) => C.Range.intersect(l, $))
								.filter(($) => !C.Range.isEmpty($))
								.map(({ start: $, end: v }) => ({ start: $ - b, end: v - b }));
						return (b = l.end + o.length), y;
					});
				}
				class g extends w.$1c {
					constructor(o, f) {
						super(),
							(this.f = o),
							(this.g = f),
							(this.a = void 0),
							(this.b = void 0);
					}
					setLabel(o, f) {
						if (!(this.a === o && (0, E.$zo)(this.c, f)))
							if (((this.a = o), (this.c = f), typeof o == "string"))
								this.b ||
									((this.f.innerText = ""),
									this.f.classList.remove("multiple"),
									(this.b = this.D(
										new i.$Wob(
											t.$fhb(this.f, t.$("a.label-name", { id: f?.domId })),
											{ supportIcons: this.g },
										),
									))),
									this.b.set(o, f?.matches, void 0, f?.labelEscapeNewLines);
							else {
								(this.f.innerText = ""),
									this.f.classList.add("multiple"),
									(this.b = void 0);
								const b = f?.separator || "/",
									s = n(o, b, f?.matches);
								for (let l = 0; l < o.length; l++) {
									const y = o[l],
										$ = s ? s[l] : void 0,
										v = f?.domId && `${f?.domId}_${l}`,
										S = t.$("a.label-name", {
											id: v,
											"data-icon-label-count": o.length,
											"data-icon-label-index": l,
											role: "treeitem",
										});
									this.D(
										new i.$Wob(t.$fhb(this.f, S), { supportIcons: this.g }),
									).set(y, $, void 0, f?.labelEscapeNewLines),
										l < o.length - 1 &&
											t.$fhb(S, t.$("span.label-separator", void 0, b));
								}
							}
					}
				}
			},
		),
		
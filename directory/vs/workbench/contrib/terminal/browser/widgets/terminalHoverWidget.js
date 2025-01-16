define(
			de[3146],
			he([1, 0, 3, 235, 7, 72, 10, 117]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$oWc = void 0),
					(w = mt(w));
				const m = w.$;
				let r = class extends t.$1c {
					constructor(h, c, n, g, p, o) {
						super(),
							(this.a = h),
							(this.b = c),
							(this.c = n),
							(this.f = g),
							(this.g = p),
							(this.h = o),
							(this.id = "hover");
					}
					attach(h) {
						if (!this.h.getValue(d.TerminalSettingId.ShowLinkHover)) return;
						const n = new u(h, this.a),
							g = this.g.showHover({
								target: n,
								content: this.b,
								actions: this.c,
								linkHandler: this.f,
								additionalClasses: ["xterm-hover"],
							});
						g && this.D(g);
					}
				};
				(e.$oWc = r), (e.$oWc = r = Ne([j(4, E.$Uyb), j(5, C.$gj)], r));
				class u extends i.$Uhb {
					get targetElements() {
						return this.b;
					}
					constructor(h, c) {
						super(),
							(this.c = c),
							(this.b = []),
							(this.a = m("div.terminal-hover-targets.xterm-hover"));
						const n =
								this.c.viewportRange.end.y - this.c.viewportRange.start.y + 1,
							g =
								(this.c.viewportRange.end.y > this.c.viewportRange.start.y
									? this.c.terminalDimensions.width -
										this.c.viewportRange.start.x
									: this.c.viewportRange.end.x -
										this.c.viewportRange.start.x +
										1) * this.c.cellDimensions.width,
							p = m("div.terminal-hover-target.hoverHighlight");
						if (
							((p.style.left = `${this.c.viewportRange.start.x * this.c.cellDimensions.width}px`),
							(p.style.bottom = `${(this.c.terminalDimensions.height - this.c.viewportRange.start.y - 1) * this.c.cellDimensions.height}px`),
							(p.style.width = `${g}px`),
							(p.style.height = `${this.c.cellDimensions.height}px`),
							this.b.push(this.a.appendChild(p)),
							n > 2)
						) {
							const o = m("div.terminal-hover-target.hoverHighlight");
							(o.style.left = "0px"),
								(o.style.bottom = `${(this.c.terminalDimensions.height - this.c.viewportRange.start.y - 1 - (n - 2)) * this.c.cellDimensions.height}px`),
								(o.style.width = `${this.c.terminalDimensions.width * this.c.cellDimensions.width}px`),
								(o.style.height = `${(n - 2) * this.c.cellDimensions.height}px`),
								this.b.push(this.a.appendChild(o));
						}
						if (n > 1) {
							const o = m("div.terminal-hover-target.hoverHighlight");
							(o.style.left = "0px"),
								(o.style.bottom = `${(this.c.terminalDimensions.height - this.c.viewportRange.end.y - 1) * this.c.cellDimensions.height}px`),
								(o.style.width = `${(this.c.viewportRange.end.x + 1) * this.c.cellDimensions.width}px`),
								(o.style.height = `${this.c.cellDimensions.height}px`),
								this.b.push(this.a.appendChild(o));
						}
						if (this.c.modifierDownCallback && this.c.modifierUpCallback) {
							let o = !1;
							this.D(
								w.$0fb(h.ownerDocument, "keydown", (f) => {
									f.ctrlKey && !o && ((o = !0), this.c.modifierDownCallback());
								}),
							),
								this.D(
									w.$0fb(h.ownerDocument, "keyup", (f) => {
										f.ctrlKey || ((o = !1), this.c.modifierUpCallback());
									}),
								);
						}
						h.appendChild(this.a), this.D((0, t.$Yc)(() => this.a?.remove()));
					}
				}
			},
		),
		
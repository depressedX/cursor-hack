define(
			de[3168],
			he([1, 0, 6, 3, 38, 10, 107, 145]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$OUc = e.$NUc = void 0);
				let m = class extends i.$1c {
					get config() {
						return this.b;
					}
					get onConfigChanged() {
						return this.f.event;
					}
					constructor(c) {
						super(),
							(this.g = c),
							(this.f = new t.$re()),
							(this.a = this.D(new u(this, this.g))),
							this.D(
								t.Event.runAndSubscribe(
									this.g.onDidChangeConfiguration,
									(n) => {
										(!n || n.affectsConfiguration(d.$ieb)) && this.h();
									},
								),
							);
					}
					setPanelContainer(c) {
						return this.a.setPanelContainer(c);
					}
					configFontIsMonospace() {
						return this.a.configFontIsMonospace();
					}
					getFont(c, n, g) {
						return this.a.getFont(c, n, g);
					}
					h() {
						const c = { ...this.g.getValue(d.$ieb) };
						(c.fontWeight = this.j(c.fontWeight, d.$oeb)),
							(c.fontWeightBold = this.j(c.fontWeightBold, d.$peb)),
							(this.b = c),
							this.f.fire();
					}
					j(c, n) {
						return c === "normal" || c === "bold" ? c : a(c, d.$meb, d.$neb, n);
					}
				};
				(e.$NUc = m), (e.$NUc = m = Ne([j(0, E.$gj)], m));
				var r;
				(function (h) {
					(h[(h.MinimumFontSize = 6)] = "MinimumFontSize"),
						(h[(h.MaximumFontSize = 100)] = "MaximumFontSize");
				})(r || (r = {}));
				class u extends i.$1c {
					constructor(c, n) {
						super(),
							(this.f = c),
							(this.g = n),
							(this.linuxDistro = C.LinuxDistro.Unknown),
							this.D((0, i.$Yc)(() => this.b?.remove()));
					}
					setPanelContainer(c) {
						this.a = c;
					}
					configFontIsMonospace() {
						const n =
								this.f.config.fontFamily ||
								this.g.getValue("editor").fontFamily ||
								w.EDITOR_FONT_DEFAULTS.fontFamily,
							g = this.j("i", n, 15),
							p = this.j("w", n, 15);
						return !g || !p || !g.width || !p.width ? !0 : g.width === p.width;
					}
					getFont(c, n, g) {
						const p = this.g.getValue("editor");
						let o =
								this.f.config.fontFamily ||
								p.fontFamily ||
								w.EDITOR_FONT_DEFAULTS.fontFamily ||
								"monospace",
							f = a(
								this.f.config.fontSize,
								r.MinimumFontSize,
								r.MaximumFontSize,
								w.EDITOR_FONT_DEFAULTS.fontSize,
							);
						this.f.config.fontFamily ||
							(this.linuxDistro === C.LinuxDistro.Fedora &&
								(o = "'DejaVu Sans Mono'"),
							this.linuxDistro === C.LinuxDistro.Ubuntu &&
								((o = "'Ubuntu Mono'"),
								(f = a(
									f + 2,
									r.MinimumFontSize,
									r.MaximumFontSize,
									w.EDITOR_FONT_DEFAULTS.fontSize,
								)))),
							(o += ", monospace");
						const b = this.f.config.letterSpacing
								? Math.max(Math.floor(this.f.config.letterSpacing), d.$keb)
								: d.$jeb,
							s = this.f.config.lineHeight
								? Math.max(this.f.config.lineHeight, 1)
								: d.$leb;
						if (g)
							return {
								fontFamily: o,
								fontSize: f,
								letterSpacing: b,
								lineHeight: s,
							};
						if (n?._renderService?._renderer.value) {
							const l = n._renderService.dimensions.css.cell;
							if (l?.width && l?.height)
								return {
									fontFamily: o,
									fontSize: f,
									letterSpacing: b,
									lineHeight: s,
									charHeight: l.height / s,
									charWidth: l.width - Math.round(b) / c.devicePixelRatio,
								};
						}
						return this.m(c, o, f, b, s);
					}
					h() {
						if (!this.a)
							throw new Error(
								"Cannot measure element when terminal is not attached",
							);
						return (
							(!this.b || !this.b.parentElement) &&
								((this.b = document.createElement("div")),
								this.a.appendChild(this.b)),
							this.b
						);
					}
					j(c, n, g) {
						let p;
						try {
							p = this.h();
						} catch {
							return;
						}
						const o = p.style;
						(o.display = "inline-block"),
							(o.fontFamily = n),
							(o.fontSize = g + "px"),
							(o.lineHeight = "normal"),
							(p.innerText = c);
						const f = p.getBoundingClientRect();
						return (o.display = "none"), f;
					}
					m(c, n, g, p, o) {
						const f = this.j("X", n, g);
						if (this.c && (!f || !f.width || !f.height)) return this.c;
						if (
							((this.c = {
								fontFamily: n,
								fontSize: g,
								letterSpacing: p,
								lineHeight: o,
								charWidth: 0,
								charHeight: 0,
							}),
							f && f.width && f.height)
						)
							if (
								((this.c.charHeight = Math.ceil(f.height)),
								this.f.config.gpuAcceleration === "off")
							)
								this.c.charWidth = f.width;
							else {
								const l =
									(Math.floor(f.width * c.devicePixelRatio) + Math.round(p)) /
									c.devicePixelRatio;
								this.c.charWidth = l - Math.round(p) / c.devicePixelRatio;
							}
						return this.c;
					}
				}
				e.$OUc = u;
				function a(h, c, n, g) {
					let p = parseInt(h, 10);
					return isNaN(p)
						? g
						: (typeof c == "number" && (p = Math.max(c, p)),
							typeof n == "number" && (p = Math.min(n, p)),
							p);
				}
			},
		),
		
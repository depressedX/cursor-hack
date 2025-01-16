define(
			de[3009],
			he([1, 0, 6, 3, 10, 35, 60]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				var d;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$rUb = void 0);
				let m = class extends i.$1c {
					static {
						d = this;
					}
					static {
						this.a = 1.4;
					}
					get configuration() {
						return this.c;
					}
					static {
						this.f = [
							"chat.editor.lineHeight",
							"chat.editor.fontSize",
							"chat.editor.fontFamily",
							"chat.editor.fontWeight",
							"chat.editor.wordWrap",
							"editor.cursorBlinking",
							"editor.fontLigatures",
							"editor.accessibilitySupport",
							"editor.bracketPairColorization.enabled",
							"editor.bracketPairColorization.independentColorPoolPerBracketType",
						];
					}
					constructor(u, a, h, c, n, g, p) {
						super(),
							(this.g = a),
							(this.h = h),
							(this.j = c),
							(this.m = n),
							(this.n = g),
							(this.q = p),
							(this.b = this.D(new t.$re())),
							(this.onDidChange = this.b.event),
							this.D(this.n.onDidColorThemeChange((o) => this.r())),
							this.D(
								this.q.onDidChangeLocation((o) => {
									o.views.some((f) => f.id === u) && this.r();
								}),
							),
							this.D(
								this.m.onDidChangeConfiguration((o) => {
									d.f.some((f) => o.affectsConfiguration(f)) && this.r();
								}),
							),
							this.r();
					}
					r() {
						const u = this.m.getValue("editor"),
							a = this.m.getValue("chat")?.editor,
							h = this.m.getValue("editor.accessibilitySupport");
						(this.c = {
							foreground: this.n.getColorTheme().getColor(this.g),
							inputEditor: {
								backgroundColor: this.n.getColorTheme().getColor(this.h),
								accessibilitySupport: h,
							},
							resultEditor: {
								backgroundColor: this.n.getColorTheme().getColor(this.j),
								fontSize: a.fontSize,
								fontFamily:
									a.fontFamily === "default" ? u.fontFamily : a.fontFamily,
								fontWeight: a.fontWeight,
								lineHeight: a.lineHeight ? a.lineHeight : d.a * a.fontSize,
								bracketPairColorization: {
									enabled: this.m.getValue(
										"editor.bracketPairColorization.enabled",
									),
									independentColorPoolPerBracketType: this.m.getValue(
										"editor.bracketPairColorization.independentColorPoolPerBracketType",
									),
								},
								wordWrap: a.wordWrap,
								fontLigatures: u.fontLigatures,
							},
						}),
							this.b.fire();
					}
				};
				(e.$rUb = m),
					(e.$rUb = m = d = Ne([j(4, w.$gj), j(5, E.$iP), j(6, C.$K1)], m));
			},
		),
		
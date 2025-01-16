define(
			de[3579],
			he([1, 0, 4, 7, 680, 112, 15, 35, 26, 51, 5, 709, 38, 105, 50, 79, 2432]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$FQc = void 0),
					(t = mt(t)),
					(i = mt(i));
				const p = i.$,
					o = (0, r.$wP)(
						"debugExceptionWidget.border",
						"#a31515",
						t.localize(5670, null),
					),
					f = (0, r.$wP)(
						"debugExceptionWidget.background",
						{
							dark: "#420b0d",
							light: "#f1dfde",
							hcDark: "#420b0d",
							hcLight: "#f1dfde",
						},
						t.localize(5671, null),
					);
				let b = class extends w.$FLb {
					constructor(l, y, $, v, S) {
						super(l, {
							showFrame: !0,
							showArrow: !0,
							isAccessible: !0,
							frameWidth: 1,
							className: "exception-widget-container",
						}),
							(this.b = y),
							(this.c = $),
							(this.d = S),
							this.i(v.getColorTheme()),
							this.o.add(v.onDidColorThemeChange(this.i.bind(this))),
							this.create();
						const I = new C.$Yh(() => this.E(void 0, void 0), 50);
						this.o.add(this.editor.onDidLayoutChange(() => I.schedule())),
							this.o.add(I);
					}
					i(l) {
						this.a = l.getColor(f);
						const y = l.getColor(o);
						this.style({ arrowColor: y, frameColor: y });
					}
					q() {
						this.container &&
							(this.container.style.backgroundColor = this.a
								? this.a.toString()
								: ""),
							super.q();
					}
					C(l) {
						this.B("exception-widget");
						const y = this.editor.getOption(h.EditorOption.fontInfo);
						(l.style.fontSize = `${y.fontSize}px`),
							(l.style.lineHeight = `${y.lineHeight}px`),
							(l.tabIndex = 0);
						const $ = p(".title"),
							v = p(".label");
						i.$fhb($, v);
						const S = p(".actions");
						i.$fhb($, S),
							(v.textContent = this.b.id
								? t.localize(5672, null, this.b.id)
								: t.localize(5673, null));
						let I = v.textContent;
						if (
							(new c.$eib(S).push(
								new n.$rj(
									"editor.closeExceptionWidget",
									t.localize(5674, null),
									m.ThemeIcon.asClassName(g.$bP),
									!0,
									async () => {
										this.editor.getContribution(E.$Z5)?.closeExceptionWidget();
									},
								),
								{ label: !1, icon: !0 },
							),
							i.$fhb(l, $),
							this.b.description)
						) {
							const P = p(".description");
							(P.textContent = this.b.description),
								(I += ", " + this.b.description),
								i.$fhb(l, P);
						}
						if (this.b.details && this.b.details.stackTrace) {
							const P = p(".stack-trace"),
								L = this.d
									.createInstance(a.$7Hc)
									.linkify(
										this.b.details.stackTrace,
										!0,
										this.c ? this.c.root : void 0,
										void 0,
										{ type: a.DebugLinkHoverBehavior.Rich, store: this.o },
									);
							P.appendChild(L),
								i.$fhb(l, P),
								(I += ", " + this.b.details.stackTrace);
						}
						l.setAttribute("aria-label", I);
					}
					E(l, y) {
						this.container.style.height = "initial";
						const $ = this.editor.getOption(h.EditorOption.lineHeight),
							v = Math.round($ / 3),
							S = Math.ceil((this.container.offsetHeight + v) / $);
						this.F(S);
					}
					focus() {
						this.container?.focus();
					}
					hasFocus() {
						return this.container ? i.$Lgb(this.container) : !1;
					}
				};
				(e.$FQc = b), (e.$FQc = b = Ne([j(3, d.$iP), j(4, u.$Li)], b));
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	
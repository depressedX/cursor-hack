define(
			de[3401],
			he([
				1, 0, 4, 7, 105, 20, 5, 21, 35, 26, 550, 96, 50, 497, 6, 823, 251, 11,
				99, 43, 27, 8, 9, 79, 100, 2337,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$_uc = void 0);
				let S = class extends u.Part {
					get minimumHeight() {
						return this.y ? this.height : 0;
					}
					get maximumHeight() {
						return this.y ? this.height : 0;
					}
					get onDidChange() {
						return this.a.event;
					}
					constructor(P, k, L, D, M) {
						super(a.Parts.BANNER_PART, { hasTitle: !1 }, P, L, k),
							(this.eb = D),
							(this.fb = M),
							(this.height = 26),
							(this.minimumWidth = 0),
							(this.maximumWidth = Number.POSITIVE_INFINITY),
							(this.a = this.D(new n.$re())),
							(this.y = !1),
							(this.db = -1),
							(this.c = this.fb.createInstance(p.$Qzb, {}));
					}
					Q(P) {
						(this.element = P),
							(this.element.tabIndex = 0),
							this.D(
								(0, i.$0fb)(this.element, i.$$gb.FOCUS, () => {
									this.db !== -1 && this.ib();
								}),
							);
						const k = this.D(this.eb.createScoped(this.element));
						return v.$mQb.bindTo(k).set(!0), this.element;
					}
					hb(P) {
						this.lb(!1),
							(0, i.$9fb)(this.element),
							typeof P.onClose == "function" && P.onClose(),
							(this.b = void 0);
					}
					ib() {
						const P = this.b?.actions?.length ?? 0;
						if (this.db < P) {
							const k = this.cb?.children[this.db];
							(0, i.$Ygb)(k) && (this.bb?.setFocusable(!1), k.focus());
						} else this.bb?.focus(0);
					}
					jb(P) {
						if (P.ariaLabel) return P.ariaLabel;
						if (typeof P.message == "string") return P.message;
					}
					kb(P) {
						if (typeof P == "string") {
							const k = (0, i.$)("span");
							return (k.innerText = P), k;
						}
						return this.c.render(P).element;
					}
					lb(P) {
						P !== this.y &&
							((this.y = P),
							(this.db = -1),
							this.M.setPartHidden(!P, a.Parts.BANNER_PART),
							this.a.fire(void 0));
					}
					focus() {
						(this.db = -1), this.element.focus();
					}
					focusNextAction() {
						const P = this.b?.actions?.length ?? 0;
						(this.db = this.db < P ? this.db + 1 : 0), this.ib();
					}
					focusPreviousAction() {
						const P = this.b?.actions?.length ?? 0;
						(this.db = this.db > 0 ? this.db - 1 : P), this.ib();
					}
					hide(P) {
						this.b?.id === P && this.lb(!1);
					}
					show(P) {
						if (P.id === this.b?.id) {
							this.lb(!0);
							return;
						}
						(0, i.$9fb)(this.element);
						const k = this.jb(P);
						k && this.element.setAttribute("aria-label", k);
						const L = (0, i.$fhb)(this.element, (0, i.$)("div.icon-container"));
						L.setAttribute("aria-hidden", "true"),
							r.ThemeIcon.isThemeIcon(P.icon)
								? L.appendChild(
										(0, i.$)(`div${r.ThemeIcon.asCSSSelector(P.icon)}`),
									)
								: (L.classList.add("custom-icon"),
									y.URI.isUri(P.icon) &&
										(L.style.backgroundImage = (0, i.$vhb)(P.icon)));
						const D = (0, i.$fhb)(
							this.element,
							(0, i.$)("div.message-container"),
						);
						if (
							(D.setAttribute("aria-hidden", "true"),
							D.appendChild(this.kb(P.message)),
							(this.cb = (0, i.$fhb)(
								this.element,
								(0, i.$)("div.message-actions-container"),
							)),
							P.actions)
						)
							for (const R of P.actions)
								this.D(
									this.fb.createInstance(
										c.Link,
										this.cb,
										{ ...R, tabIndex: -1 },
										{},
									),
								);
						const M = (0, i.$fhb)(
							this.element,
							(0, i.$)("div.action-container"),
						);
						this.bb = this.D(new w.$eib(M));
						const N = P.closeLabel ?? "Close Banner",
							A = this.D(
								new h.$rj(
									"banner.close",
									N,
									r.ThemeIcon.asClassName($.$bP),
									!0,
									() => this.hb(P),
								),
							);
						this.bb.push(A, { icon: !0, label: !1 }),
							this.bb.setFocusable(!1),
							this.lb(!0),
							(this.b = P);
					}
					toJSON() {
						return { type: a.Parts.BANNER_PART };
					}
				};
				(e.$_uc = S),
					(e.$_uc = S =
						Ne(
							[
								j(0, m.$iP),
								j(1, a.$mEb),
								j(2, d.$lq),
								j(3, l.$6j),
								j(4, C.$Li),
							],
							S,
						)),
					(0, E.$lK)(g.$$uc, S, E.InstantiationType.Eager),
					b.$TX.registerCommandAndKeybindingRule({
						id: "workbench.banner.focusBanner",
						weight: b.KeybindingWeight.WorkbenchContrib,
						primary: s.KeyCode.Escape,
						when: v.$mQb,
						handler: (T) => {
							T.get(g.$$uc).focus();
						},
					}),
					b.$TX.registerCommandAndKeybindingRule({
						id: "workbench.banner.focusNextAction",
						weight: b.KeybindingWeight.WorkbenchContrib,
						primary: s.KeyCode.RightArrow,
						secondary: [s.KeyCode.DownArrow],
						when: v.$mQb,
						handler: (T) => {
							T.get(g.$$uc).focusNextAction();
						},
					}),
					b.$TX.registerCommandAndKeybindingRule({
						id: "workbench.banner.focusPreviousAction",
						weight: b.KeybindingWeight.WorkbenchContrib,
						primary: s.KeyCode.LeftArrow,
						secondary: [s.KeyCode.UpArrow],
						when: v.$mQb,
						handler: (T) => {
							T.get(g.$$uc).focusPreviousAction();
						},
					});
				class I extends o.$3X {
					static {
						this.ID = "workbench.action.focusBanner";
					}
					static {
						this.LABEL = (0, t.localize2)(3044, "Focus Banner");
					}
					constructor() {
						super({ id: I.ID, title: I.LABEL, category: f.$ck.View, f1: !0 });
					}
					async run(P) {
						P.get(a.$mEb).focusPart(a.Parts.BANNER_PART);
					}
				}
				(0, o.$4X)(I);
			},
		),
		
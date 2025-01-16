define(
			de[1675],
			he([1, 0, 183, 95, 50, 14, 6, 3, 26, 4, 92, 11, 8, 49, 72, 39, 32]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$LLb = e.$KLb = void 0);
				let o = class extends t.$rob {
					constructor(s, l, y, $, v, S) {
						super(s),
							(this.k = l),
							(this.l = y),
							(this.m = $),
							(this.n = S),
							(this.f = new d.$Zc()),
							(this.g = new d.$Zc()),
							(this.j = new C.$re()),
							(this.onDidChange = this.j.event),
							(this.h = this.f.add(new w.$sj())),
							l?.telemetrySource &&
								this.h.onDidRun(
									(I) => {
										v.publicLog2("workbenchActionExecuted", {
											id: I.action.id,
											from: l.telemetrySource,
										});
									},
									void 0,
									this.f,
								);
					}
					dispose() {
						this.j.dispose(),
							this.g.dispose(),
							this.f.dispose(),
							super.dispose();
					}
					update(s, l) {
						const y =
							this.k?.buttonConfigProvider ?? (() => ({ showLabel: !0 }));
						this.g.clear(), this.clear();
						const $ = this.g.add((0, i.$dib)());
						for (let v = 0; v < s.length; v++) {
							const S = v > 0,
								I = s[v];
							let T, P;
							if (I instanceof w.$uj && I.actions.length > 0) {
								const [D, ...M] = I.actions;
								(T = D),
									(P = this.addButtonWithDropdown({
										secondary: y(T, v)?.isSecondary ?? S,
										actionRunner: this.h,
										actions: M,
										contextMenuProvider: this.l,
										ariaLabel: T.label,
									}));
							} else
								(T = I),
									(P = this.addButton({
										secondary: y(T, v)?.isSecondary ?? S,
										ariaLabel: T.label,
									}));
							(P.enabled = T.enabled),
								(P.checked = T.checked ?? !1),
								P.element.classList.add("default-colors"),
								(y(T, v)?.showLabel ?? !0)
									? (P.label = T.label)
									: P.element.classList.add("monaco-text-button"),
								y(T, v)?.showIcon &&
									(T instanceof a.$2X && m.ThemeIcon.isThemeIcon(T.item.icon)
										? (P.icon = T.item.icon)
										: T.class &&
											P.element.classList.add(...T.class.split(" ")));
							const k = this.m.lookupKeybinding(T.id);
							let L;
							k
								? (L = (0, r.localize)(1650, null, T.label, k.getLabel()))
								: (L = T.label),
								this.g.add(this.n.setupManagedHover($, P.element, L)),
								this.g.add(
									P.onDidClick(async () => {
										this.h.run(T);
									}),
								);
						}
						if (l.length > 0) {
							const v = this.addButton({
								secondary: !0,
								ariaLabel: (0, r.localize)(1651, null),
							});
							(v.icon = E.$ak.dropDownButton),
								v.element.classList.add("default-colors", "monaco-text-button"),
								(v.enabled = !0),
								this.g.add(
									this.n.setupManagedHover(
										$,
										v.element,
										(0, r.localize)(1652, null),
									),
								),
								this.g.add(
									v.onDidClick(async () => {
										this.l.showContextMenu({
											getAnchor: () => v.element,
											getActions: () => l,
											actionRunner: this.h,
											onHide: () =>
												v.element.setAttribute("aria-expanded", "false"),
										}),
											v.element.setAttribute("aria-expanded", "true");
									}),
								);
						}
						this.j.fire(this);
					}
				};
				(e.$KLb = o),
					(e.$KLb = o =
						Ne([j(2, c.$Xxb), j(3, g.$uZ), j(4, p.$km), j(5, n.$Uyb)], o));
				let f = class extends o {
					constructor(s, l, y, $, v, S, I, T, P) {
						super(s, y, S, I, T, P);
						const k = $.createMenu(l, v);
						this.f.add(k);
						const L = () => {
							this.clear();
							const D = [],
								M = [];
							(0, u.$Kyb)(
								k,
								y?.menuOptions,
								{ primary: D, secondary: M },
								y?.toolbarOptions?.primaryGroup,
							),
								super.update(D, M);
						};
						this.f.add(k.onDidChange(L)), L();
					}
					dispose() {
						super.dispose();
					}
					update(s) {
						throw new Error("Use Menu or WorkbenchButtonBar");
					}
				};
				(e.$LLb = f),
					(e.$LLb = f =
						Ne(
							[
								j(3, a.$YX),
								j(4, h.$6j),
								j(5, c.$Xxb),
								j(6, g.$uZ),
								j(7, p.$km),
								j(8, n.$Uyb),
							],
							f,
						));
			},
		),
		
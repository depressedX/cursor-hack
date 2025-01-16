define(
			de[3255],
			he([
				1, 0, 7, 198, 95, 182, 50, 14, 6, 3, 4, 92, 173, 11, 5, 39, 63, 66, 72,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				var b;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$4qc = void 0);
				let s = class {
					constructor($, v, S, I) {
						(this.a = new r.$Zc()),
							(this.b = new m.$re()),
							(this.onDidChangeVisibility = this.b.event),
							(this.element = document.createElement("div")),
							this.element.classList.add("command-center");
						const T = S.createInstance(
							h.$Tyb,
							this.element,
							c.$XX.CommandCenter,
							{
								contextMenu: c.$XX.TitleBarContext,
								hiddenItemStrategy: h.HiddenItemStrategy.NoHide,
								toolbarOptions: { primaryGroup: () => !0 },
								telemetrySource: "commandCenter",
								actionViewItemProvider: (P, k) =>
									P instanceof c.$1X &&
									P.item.submenu === c.$XX.CommandCenterCenter
										? S.createInstance(l, P, $, { ...k, hoverDelegate: v })
										: (0, a.$Pyb)(S, P, { ...k, hoverDelegate: v }),
							},
						);
						this.a.add(
							m.Event.filter(
								I.onShow,
								() => (0, t.$Mgb)(this.element),
								this.a,
							)(this.c.bind(this, !1)),
						),
							this.a.add(
								m.Event.filter(
									I.onHide,
									() => (0, t.$Mgb)(this.element),
									this.a,
								)(this.c.bind(this, !0)),
							),
							this.a.add(T);
					}
					c($) {
						this.element.classList.toggle("hide", !$), this.b.fire();
					}
					dispose() {
						this.a.dispose();
					}
				};
				(e.$4qc = s), (e.$4qc = s = Ne([j(2, n.$Li), j(3, p.$DJ)], s));
				let l = class extends i.$$ib {
					static {
						b = this;
					}
					static {
						this.a = "workbench.action.quickOpenWithModes";
					}
					constructor($, v, S, I, T, P, k) {
						super(
							void 0,
							$.actions.find(
								(L) => L.id === "workbench.action.quickOpenWithModes",
							) ?? $.actions[0],
							S,
						),
							(this.c = $),
							(this.g = v),
							(this.h = I),
							(this.n = T),
							(this.r = P),
							(this.s = k),
							(this.b = S.hoverDelegate ?? (0, w.$cib)("mouse"));
					}
					render($) {
						super.render($),
							$.classList.add("command-center-center"),
							$.classList.toggle("multiple", this.c.actions.length > 1);
						const v = this.B.add(this.h.setupManagedHover(this.b, $, this.z()));
						this.B.add(
							this.g.onDidChange(() => {
								v.update(this.z());
							}),
						);
						const S = [];
						for (const I of this.c.actions)
							I instanceof C.$uj ? S.push(I.actions) : S.push([I]);
						for (let I = 0; I < S.length; I++) {
							const T = S[I],
								P = this.r.createInstance(h.$Syb, $, {
									hiddenItemStrategy: h.HiddenItemStrategy.NoHide,
									telemetrySource: "commandCenterCenter",
									actionViewItemProvider: (k, L) => {
										if (((L = { ...L, hoverDelegate: this.b }), k.id !== b.a))
											return (0, a.$Pyb)(this.r, k, L);
										const D = this;
										return this.r.createInstance(
											class extends i.$$ib {
												constructor() {
													super(void 0, k, L);
												}
												render(N) {
													super.render(N),
														N.classList.toggle("command-center-quick-pick");
													const A = this.action,
														R = document.createElement("span");
													(R.ariaHidden = "true"),
														(R.className = A.class ?? ""),
														R.classList.add("search-icon");
													const O = this.b(),
														B = document.createElement("span");
													B.classList.add("search-label"),
														(B.innerText = O),
														(0, t.$hhb)(N, R, B);
													const U = this.B.add(
														D.h.setupManagedHover(D.b, N, this.z()),
													);
													this.B.add(
														D.g.onDidChange(() => {
															U.update(this.z()), (B.innerText = this.b());
														}),
													),
														this.B.add(
															D.s.onDidChangeEditorPartOptions(
																({ newPartOptions: z, oldPartOptions: F }) => {
																	z.showTabs !== F.showTabs &&
																		(U.update(this.z()),
																		(B.innerText = this.b()));
																},
															),
														);
												}
												z() {
													return D.z();
												}
												b() {
													const { prefix: N, suffix: A } =
														D.g.getTitleDecorations();
													let R = D.g.workspaceName;
													return (
														D.g.isCustomTitleFormat()
															? (R = D.g.getWindowTitle())
															: D.s.partOptions.showTabs === "none" &&
																(R = D.g.fileName ?? R),
														R || (R = (0, u.localize)(3690, null)),
														N && (R = (0, u.localize)(3691, null, N, R)),
														A && (R = (0, u.localize)(3692, null, R, A)),
														R.replaceAll(/\r\n|\r|\n/g, "\u23CE")
													);
												}
											},
										);
									},
								});
							if ((P.setActions(T), this.B.add(P), I < S.length - 1)) {
								const k = (0, E.$Tib)(d.$ak.circleSmallFilled);
								(k.style.padding = "0 12px"),
									(k.style.height = "100%"),
									(k.style.opacity = "0.5"),
									$.appendChild(k);
							}
						}
					}
					z() {
						const $ = this.n.lookupKeybinding(this.action.id)?.getLabel();
						return $
							? (0, u.localize)(
									3693,
									null,
									this.g.workspaceName,
									$,
									this.g.value,
								)
							: (0, u.localize)(3694, null, this.g.workspaceName, this.g.value);
					}
				};
				(l = b = Ne([j(3, f.$Uyb), j(4, g.$uZ), j(5, n.$Li), j(6, o.$EY)], l)),
					c.$ZX.appendMenuItem(c.$XX.CommandCenter, {
						submenu: c.$XX.CommandCenterCenter,
						title: (0, u.localize)(3695, null),
						icon: d.$ak.shield,
						order: 101,
					});
			},
		),
		
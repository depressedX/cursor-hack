define(
			de[2868],
			he([
				1, 0, 33, 6, 8, 5, 180, 41, 1636, 106, 51, 35, 1189, 2867, 31, 58, 10,
				7,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Lxc = void 0);
				let f = class extends a.$pP {
					get backButton() {
						return this.f.backButton;
					}
					get f() {
						return this.c || (this.c = this.D(this.z())), this.c;
					}
					get g() {
						return !!this.c;
					}
					get currentQuickInput() {
						return this.f.currentQuickInput;
					}
					get quickAccess() {
						return (
							this.j || (this.j = this.D(this.r.createInstance(m.$T9b))), this.j
						);
					}
					constructor(s, l, y, $, v, S) {
						super(y),
							(this.r = s),
							(this.s = l),
							(this.t = $),
							(this.u = v),
							(this.y = S),
							(this.a = this.D(new i.$re())),
							(this.onShow = this.a.event),
							(this.b = this.D(new i.$re())),
							(this.onHide = this.b.event),
							(this.m = new Map());
					}
					z(s = this.t, l) {
						const y = {
								idPrefix: "quickInput_",
								container: s.activeContainer,
								ignoreFocusOut: () => !1,
								backKeybindingLabel: () => {},
								setContextKey: (v) => this.C(v),
								linkOpenerDelegate: (v) => {
									this.r.invokeFunction((S) => {
										S.get(d.$7rb).open(v, {
											allowCommands: !0,
											fromUserGesture: !0,
										});
									});
								},
								returnFocus: () => s.focus(),
								styles: this.G(),
								hoverDelegate: this.D(this.r.createInstance(h.$Hxc)),
							},
							$ = this.D(this.r.createInstance(c.$Kxc, { ...y, ...l }));
						return (
							$.layout(
								s.activeContainerDimension,
								s.activeContainerOffset.quickPickTop,
							),
							this.D(
								s.onDidLayoutActiveContainer((v) => {
									(0, o.getWindow)(s.activeContainer) ===
										(0, o.getWindow)($.container) &&
										$.layout(v, s.activeContainerOffset.quickPickTop);
								}),
							),
							this.D(
								s.onDidChangeActiveContainer(() => {
									$.isVisible() ||
										$.layout(
											s.activeContainerDimension,
											s.activeContainerOffset.quickPickTop,
										);
								}),
							),
							this.D(
								$.onShow(() => {
									this.F(), this.a.fire();
								}),
							),
							this.D(
								$.onHide(() => {
									this.F(), this.b.fire();
								}),
							),
							$
						);
					}
					C(s) {
						let l;
						s &&
							((l = this.m.get(s)),
							l || ((l = new w.$5j(s, !1).bindTo(this.s)), this.m.set(s, l))),
							!(l && l.get()) && (this.F(), l?.set(!0));
					}
					F() {
						this.m.forEach((s) => {
							s.get() && s.reset();
						});
					}
					pick(s, l, y = t.CancellationToken.None) {
						return this.f.pick(s, l, y);
					}
					input(s = {}, l = t.CancellationToken.None) {
						if (s.prompt?.startsWith(g.$vX) === !0) {
							const y = s.prompt.slice(g.$vX.length);
							return new Promise(($) => {
								if (l.isCancellationRequested) {
									$(void 0);
									return;
								}
								this.y
									.executeCommand(g.$sX, y)
									.then((v) => {
										$(v);
									})
									.catch((v) => {
										console.error(v), $(void 0);
									});
							});
						}
						return this.f.input(s, l);
					}
					createQuickPick(s = { useSeparators: !1 }) {
						return this.f.createQuickPick(s);
					}
					createInputBox() {
						return this.f.createInputBox();
					}
					createQuickWidget() {
						return this.f.createQuickWidget();
					}
					focus() {
						this.f.focus();
					}
					toggle() {
						this.f.toggle();
					}
					navigate(s, l) {
						this.f.navigate(s, l);
					}
					accept(s) {
						return this.f.accept(s);
					}
					back() {
						return this.f.back();
					}
					cancel() {
						return this.f.cancel();
					}
					updateStyles() {
						this.g && this.f.applyStyles(this.G());
					}
					G() {
						return {
							widget: {
								quickInputBackground: (0, u.$rP)(u.$fT),
								quickInputForeground: (0, u.$rP)(u.$gT),
								quickInputTitleBackground: (0, u.$rP)(u.$hT),
								widgetBorder: (0, u.$rP)(u.$cR),
								widgetShadow: (0, u.$rP)(u.$bR),
							},
							inputBox: r.$wyb,
							toggle: r.$pyb,
							countBadge: r.$zyb,
							button: r.$lyb,
							progressBar: r.$nyb,
							keybindingLabel: r.$jyb,
							list: (0, r.$Eyb)({
								listBackground: u.$fT,
								listFocusBackground: u.$nT,
								listFocusForeground: u.$lT,
								listInactiveFocusForeground: u.$lT,
								listInactiveSelectionIconForeground: u.$mT,
								listInactiveFocusBackground: u.$nT,
								listFocusOutline: u.$PP,
								listInactiveFocusOutline: u.$PP,
							}),
							pickerGroup: {
								pickerGroupBorder: (0, u.$rP)(u.$jT),
								pickerGroupForeground: (0, u.$rP)(u.$iT),
							},
						};
					}
				};
				(e.$Lxc = f),
					(e.$Lxc = f =
						Ne(
							[
								j(0, E.$Li),
								j(1, w.$6j),
								j(2, a.$iP),
								j(3, C.$jEb),
								j(4, p.$gj),
								j(5, n.$ek),
							],
							f,
						));
			},
		),
		
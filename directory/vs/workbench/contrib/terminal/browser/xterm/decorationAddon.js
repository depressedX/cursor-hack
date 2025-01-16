define(
			de[3439],
			he([
				1, 0, 7, 50, 6, 3, 26, 4, 184, 121, 31, 10, 49, 5, 40, 41, 63, 189, 117,
				35, 689, 1761, 512, 52,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0Hb = void 0),
					(t = mt(t));
				let v = class extends E.$1c {
					constructor(I, T, P, k, L, D, M, N, A, R, O, B) {
						super(),
							(this.q = I),
							(this.s = T),
							(this.t = P),
							(this.u = k),
							(this.w = L),
							(this.y = D),
							(this.z = M),
							(this.C = A),
							(this.F = O),
							(this.G = B),
							(this.b = new Map()),
							(this.f = new Map()),
							(this.n = this.D(new w.$re())),
							(this.onDidRequestRunCommand = this.n.event),
							this.D((0, E.$Yc)(() => this.P())),
							this.D(
								this.u.onDidChangeConfiguration((U) => {
									U.affectsConfiguration(f.TerminalSettingId.FontSize) ||
									U.affectsConfiguration(f.TerminalSettingId.LineHeight)
										? this.refreshLayouts()
										: U.affectsConfiguration("workbench.colorCustomizations")
											? this.O(!0)
											: U.affectsConfiguration(
													f.TerminalSettingId
														.ShellIntegrationDecorationsEnabled,
												) &&
												(this.H(o.TerminalCapability.CommandDetection),
												this.J());
								}),
							),
							this.D(this.w.onDidColorThemeChange(() => this.O(!0))),
							this.J(),
							this.D(this.q.onDidAddCapabilityType((U) => this.I(U))),
							this.D(this.q.onDidRemoveCapabilityType((U) => this.H(U))),
							this.D(N.onWillShutdown(() => this.L())),
							(this.m = this.D(R.createInstance(l.$8Hb)));
					}
					H(I) {
						const T = this.b.get(I);
						T && (0, E.$Vc)(T), this.b.delete(I);
					}
					I(I) {
						const T = new E.$Zc(),
							P = this.q.get(I);
						if (!(!P || this.b.has(I))) {
							switch (P.type) {
								case o.TerminalCapability.BufferMarkDetection:
									T.add(P.onMarkAdded((k) => this.registerMarkDecoration(k)));
									break;
								case o.TerminalCapability.CommandDetection: {
									const k = this.S(P);
									for (const L of k) T.add(L);
									break;
								}
							}
							this.b.set(I, T);
						}
					}
					registerMarkDecoration(I) {
						if (!(!this.a || (!this.h && !this.j)) && !I.hidden)
							return this.registerCommandDecoration(void 0, void 0, I);
					}
					J() {
						const I = this.u.getValue(
							f.TerminalSettingId.ShellIntegrationDecorationsEnabled,
						);
						(this.h = I === "both" || I === "gutter"),
							(this.j = I === "both" || I === "overviewRuler"),
							this.L(),
							(this.h || this.j) && (this.R(), this.M());
						const T = this.q.get(
							o.TerminalCapability.CommandDetection,
						)?.executingCommandObject;
						T && this.registerCommandDecoration(T, !0);
					}
					L() {
						this.g?.dispose();
						for (const I of this.f.values())
							I.decoration.dispose(), (0, E.$Vc)(I.disposables);
					}
					M() {
						const I = this.a?.element?.querySelectorAll(
							l.DecorationSelector.CommandDecoration,
						);
						if (I) for (const T of I) this.N(T);
					}
					N(I) {
						this.h
							? I.classList.remove(l.DecorationSelector.Hide)
							: I.classList.add(l.DecorationSelector.Hide);
					}
					refreshLayouts() {
						(0, l.$9Hb)(this.u, this.g?.element);
						for (const I of this.f)
							(0, l.$9Hb)(this.u, I[1].decoration.element);
					}
					O(I) {
						if (I)
							for (const T of this.f.values()) {
								const P = this.ab(T)?.toString() ?? "";
								T.decoration.options?.overviewRulerOptions
									? (T.decoration.options.overviewRulerOptions.color = P)
									: T.decoration.options &&
										(T.decoration.options.overviewRulerOptions = { color: P });
							}
						this.W(this.g?.element);
						for (const T of this.f.values())
							this.W(T.decoration.element, T.exitCode, T.markProperties);
					}
					P() {
						this.m.dispose();
						for (const I of this.b.values()) (0, E.$Vc)(I);
						this.clearDecorations();
					}
					Q() {
						this.g?.dispose(), (this.g = void 0);
					}
					clearDecorations() {
						this.g?.marker.dispose(), this.Q(), this.L(), this.f.clear();
					}
					R() {
						if (this.q.has(o.TerminalCapability.CommandDetection)) {
							const I = this.q.get(o.TerminalCapability.CommandDetection),
								T = this.S(I),
								P = new E.$Zc();
							for (const k of T) P.add(k);
							this.b.set(o.TerminalCapability.CommandDetection, P);
						}
					}
					S(I) {
						if (this.b.has(o.TerminalCapability.CommandDetection)) {
							const P = this.b.get(o.TerminalCapability.CommandDetection);
							(0, E.$Vc)(P), this.b.delete(I.type);
						}
						const T = [];
						I.executingCommandObject?.marker &&
							this.registerCommandDecoration(I.executingCommandObject, !0),
							T.push(
								I.onCommandStarted((P) =>
									this.registerCommandDecoration(P, !0),
								),
							);
						for (const P of I.commands) this.registerCommandDecoration(P);
						return (
							T.push(
								I.onCommandFinished((P) => {
									this.registerCommandDecoration(P),
										P.exitCode
											? this.F.playSignal(m.$Twb.terminalCommandFailed)
											: this.F.playSignal(m.$Twb.terminalCommandSucceeded);
								}),
							),
							T.push(
								I.onCommandInvalidated((P) => {
									for (const k of P) {
										const L = k.marker?.id;
										if (L) {
											const D = this.f.get(L);
											D && (D.decoration.dispose(), (0, E.$Vc)(D.disposables));
										}
									}
								}),
							),
							T.push(
								I.onCurrentCommandInvalidated((P) => {
									P.reason === o.CommandInvalidationReason.NoProblemsReported
										? Array.from(this.f.entries())[
												this.f.size - 1
											]?.[1].decoration.dispose()
										: P.reason === o.CommandInvalidationReason.Windows &&
											this.Q();
								}),
							),
							T
						);
					}
					activate(I) {
						(this.a = I), this.R();
					}
					registerCommandDecoration(I, T, P) {
						if (!this.a || (T && !I) || (!this.h && !this.j)) return;
						const k = I?.marker || P?.marker;
						if (!k)
							throw new Error(
								`cannot add a decoration for a command ${JSON.stringify(I)} with no marker`,
							);
						this.Q();
						const L = this.ab(I)?.toString() ?? "",
							D = this.a.registerDecoration({
								marker: k,
								overviewRulerOptions: this.j
									? T
										? { color: L, position: "left" }
										: { color: L, position: I?.exitCode ? "right" : "left" }
									: void 0,
							});
						if (D)
							return (
								T && (this.g = D),
								D.onRender((M) => {
									M.classList.contains(l.DecorationSelector.OverviewRuler) ||
										(this.f.get(D.marker.id) ||
											(D.onDispose(() => this.f.delete(D.marker.id)),
											this.f.set(D.marker.id, {
												decoration: D,
												disposables: this.U(M, I, P),
												exitCode: I?.exitCode,
												markProperties: I?.markProperties,
											})),
										(!M.classList.contains(l.DecorationSelector.Codicon) ||
											I?.marker?.line === 0) &&
											((0, l.$9Hb)(this.u, M),
											this.W(M, I?.exitCode, I?.markProperties || P)));
								}),
								D
							);
					}
					U(I, T, P) {
						return T?.exitCode === void 0 && !T?.markProperties
							? []
							: T?.markProperties || P
								? [this.m.createHover(I, T || P, P?.hoverMessage)]
								: [...this.X(I, T), this.m.createHover(I, T)];
					}
					W(I, T, P) {
						if (I) {
							for (const k of I.classList) I.classList.remove(k);
							I.classList.add(
								l.DecorationSelector.CommandDecoration,
								l.DecorationSelector.Codicon,
								l.DecorationSelector.XtermDecoration,
							),
								P
									? (I.classList.add(
											l.DecorationSelector.DefaultColor,
											...C.ThemeIcon.asClassNameArray(s.$1Hb),
										),
										P.hoverMessage ||
											I.classList.add(l.DecorationSelector.Default))
									: (this.N(I),
										T === void 0
											? (I.classList.add(
													l.DecorationSelector.DefaultColor,
													l.DecorationSelector.Default,
												),
												I.classList.add(
													...C.ThemeIcon.asClassNameArray(s.$2Hb),
												))
											: T
												? (I.classList.add(l.DecorationSelector.ErrorColor),
													I.classList.add(
														...C.ThemeIcon.asClassNameArray(s.$3Hb),
													))
												: I.classList.add(
														...C.ThemeIcon.asClassNameArray(s.$4Hb),
													));
						}
					}
					X(I, T) {
						return [
							t.$0fb(I, t.$$gb.MOUSE_DOWN, async (P) => {
								P.stopImmediatePropagation();
							}),
							t.$0fb(I, t.$$gb.CLICK, async (P) => {
								P.stopImmediatePropagation(), this.m.hideHover();
								const k = await this.Z(T);
								this.t.showContextMenu({
									getAnchor: () => I,
									getActions: () => k,
								});
							}),
							t.$0fb(I, t.$$gb.CONTEXT_MENU, async (P) => {
								P.stopImmediatePropagation(), this.m.hideHover();
								const k = this.Y();
								this.t.showContextMenu({
									getAnchor: () => I,
									getActions: () => k,
								});
							}),
						];
					}
					Y() {
						const I = (0, d.localize)(10173, null);
						return [
							{
								class: void 0,
								tooltip: I,
								id: "terminal.toggleVisibility",
								label: I,
								enabled: !0,
								run: async () => {
									this.$();
								},
							},
						];
					}
					async Z(I) {
						const T = [];
						if (I.command !== "") {
							const D = (0, d.localize)(10174, null);
							T.push({
								class: void 0,
								tooltip: D,
								id: "terminal.rerunCommand",
								label: D,
								enabled: !0,
								run: async () => {
									I.command !== "" &&
										((!I.isTrusted &&
											!(await new Promise((A) => {
												this.G.prompt(
													n.Severity.Info,
													(0, d.localize)(10175, null, I.command),
													[
														{
															label: (0, d.localize)(10176, null),
															run: () => A(!0),
														},
														{
															label: (0, d.localize)(10177, null),
															run: () => A(!1),
														},
													],
												);
											}))) ||
											this.n.fire({ command: I }));
								},
							}),
								T.push(new i.$tj());
							const M = (0, d.localize)(10178, null);
							T.push({
								class: void 0,
								tooltip: M,
								id: "terminal.copyCommand",
								label: M,
								enabled: !0,
								run: () => this.s.writeText(I.command),
							});
						}
						if (I.hasOutput()) {
							const D = (0, d.localize)(10179, null);
							T.push({
								class: void 0,
								tooltip: D,
								id: "terminal.copyCommandAndOutput",
								label: D,
								enabled: !0,
								run: () => {
									const A = I.getOutput();
									typeof A == "string" &&
										this.s.writeText(
											`${
												I.command !== ""
													? I.command +
														`
`
													: ""
											}${A}`,
										);
								},
							});
							const M = (0, d.localize)(10180, null);
							T.push({
								class: void 0,
								tooltip: M,
								id: "terminal.copyOutput",
								label: M,
								enabled: !0,
								run: () => {
									const A = I.getOutput();
									typeof A == "string" && this.s.writeText(A);
								},
							});
							const N = (0, d.localize)(10181, null);
							T.push({
								class: void 0,
								tooltip: N,
								id: "terminal.copyOutputAsHtml",
								label: N,
								enabled: !0,
								run: () => this.n.fire({ command: I, copyAsHtml: !0 }),
							});
						}
						T.length > 0 && T.push(new i.$tj());
						const P = (0, d.localize)(10182, null);
						T.push({
							class: void 0,
							tooltip: P,
							id: "workbench.action.terminal.runRecentCommand",
							label: P,
							enabled: !0,
							run: () =>
								this.C.executeCommand(
									"workbench.action.terminal.runRecentCommand",
								),
						});
						const k = (0, d.localize)(10183, null);
						T.push({
							class: void 0,
							tooltip: P,
							id: "workbench.action.terminal.goToRecentDirectory",
							label: k,
							enabled: !0,
							run: () =>
								this.C.executeCommand(
									"workbench.action.terminal.goToRecentDirectory",
								),
						}),
							T.push(new i.$tj());
						const L = (0, d.localize)(10184, null);
						return (
							T.push({
								class: void 0,
								tooltip: L,
								id: "terminal.learnShellIntegration",
								label: L,
								enabled: !0,
								run: () =>
									this.y.open(
										"https://code.visualstudio.com/docs/terminal/shell-integration",
									),
							}),
							T
						);
					}
					$() {
						const I = this.D(this.z.createQuickPick());
						(I.hideInput = !0),
							(I.hideCheckAll = !0),
							(I.canSelectMany = !0),
							(I.title = (0, d.localize)(10185, null));
						const T = this.u.getValue(
								f.TerminalSettingId.ShellIntegrationDecorationsEnabled,
							),
							P = {
								label: (0, d.localize)(10186, null),
								picked: T !== "never" && T !== "overviewRuler",
							},
							k = {
								label: (0, d.localize)(10187, null),
								picked: T !== "never" && T !== "gutter",
							};
						I.items = [P, k];
						const L = [];
						T !== "never" &&
							(T !== "gutter" && L.push(P), T !== "overviewRuler" && L.push(k)),
							(I.selectedItems = L),
							this.D(
								I.onDidChangeSelection(async (D) => {
									let M = "never";
									D.includes(P)
										? D.includes(k)
											? (M = "both")
											: (M = "gutter")
										: D.includes(k) && (M = "overviewRuler"),
										await this.u.updateValue(
											f.TerminalSettingId.ShellIntegrationDecorationsEnabled,
											M,
										);
								}),
							),
							(I.ok = !1),
							I.show();
					}
					ab(I) {
						let T;
						return (
							I?.exitCode === void 0
								? (T = y.$pHb)
								: (T = I.exitCode ? y.$rHb : y.$qHb),
							this.w.getColorTheme().getColor(T)?.toString()
						);
					}
				};
				(e.$0Hb = v),
					(e.$0Hb = v =
						Ne(
							[
								j(1, r.$Vxb),
								j(2, h.$Xxb),
								j(3, a.$gj),
								j(4, b.$iP),
								j(5, g.$7rb),
								j(6, p.$DJ),
								j(7, $.$n6),
								j(8, u.$ek),
								j(9, c.$Li),
								j(10, m.$Owb),
								j(11, n.$4N),
							],
							v,
						));
			},
		),
		
define(
			de[1313],
			he([
				1, 0, 4, 63, 18, 30, 348, 1667, 10, 3, 15, 33, 11, 27, 322, 74, 132, 29,
				43, 475, 56, 66, 204, 69, 8, 130, 274,
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
				S,
				I,
			) {
				"use strict";
				var T;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$n9b = void 0);
				let P = class extends d.$m9b {
					static {
						T = this;
					}
					constructor(D, M, N, A, R, O) {
						super(A, O, {
							openSideBySideDirection: () => this.D.openSideBySideDirection,
						}),
							(this.z = D),
							(this.A = M),
							(this.B = N),
							(this.C = R),
							(this.h = this.z.onDidActiveEditorChange);
					}
					get D() {
						const D = this.B.getValue().workbench?.editor;
						return {
							openEditorPinned:
								!D?.enablePreviewFromQuickOpen || !D?.enablePreview,
							openSideBySideDirection: D?.openSideBySideDirection,
						};
					}
					get i() {
						if (!(0, s.$atb)(this.z.activeEditorPane?.getControl()))
							return this.z.activeTextEditorControl;
					}
					f(D, M) {
						if (
							(M.keyMods.alt ||
								(this.D.openEditorPinned && M.keyMods.ctrlCmd) ||
								M.forceSideBySide) &&
							this.z.activeEditor
						) {
							D.restoreViewState?.();
							const N = {
								selection: M.range,
								pinned: M.keyMods.ctrlCmd || this.D.openEditorPinned,
								preserveFocus: M.preserveFocus,
							};
							this.A.sideGroup.openEditor(this.z.activeEditor, N);
						} else super.f(D, M);
					}
					static {
						this.G = 8e3;
					}
					async getSymbolPicks(D, M, N, A, R) {
						return !(await Promise.race([this.s(D, A), (0, u.$Nh)(T.G)])) ||
							R.isCancellationRequested
							? []
							: this.u(this.x(D, R), (0, n.$hs)(M), N, R, D);
					}
					e(D) {
						return this.I() ? this.J(D) : super.e(D);
					}
					I() {
						return this.z.activeEditorPane
							? this.C.canCreateOutline(this.z.activeEditorPane)
							: !1;
					}
					J(D) {
						const M = this.z.activeEditorPane;
						if (!M) return r.$1c.None;
						const N = new a.$Ce(),
							A = new r.$Zc();
						return (
							A.add((0, r.$Yc)(() => N.dispose(!0))),
							(D.busy = !0),
							this.C.createOutline(M, b.OutlineTarget.QuickPick, N.token)
								.then((R) => {
									if (!R) return;
									if (N.token.isCancellationRequested) {
										R.dispose();
										return;
									}
									A.add(R);
									const O = R.captureViewState();
									A.add(
										(0, r.$Yc)(() => {
											D.selectedItems.length === 0 && O.dispose();
										}),
									);
									const B = R.config.quickPickDataSource.getQuickPickElements(),
										U = B.map((x, H) => ({
											kind: g.SymbolKind.File,
											index: H,
											score: 0,
											label: x.label,
											description: x.description,
											ariaLabel: x.ariaLabel,
											iconClasses: x.iconClasses,
										}));
									A.add(
										D.onDidAccept(() => {
											D.hide();
											const [x] = D.selectedItems;
											x &&
												B[x.index] &&
												R.reveal(B[x.index].element, {}, !1, !1);
										}),
									);
									const z = () => {
										const x = U.filter((H) => {
											if (D.value === "@")
												return (H.score = 0), (H.highlights = void 0), !0;
											const q = D.value.substring(d.$m9b.PREFIX.length).trim(),
												V = (0, I.$al)(H.label),
												G = (0, p.$6k)(
													q,
													q.toLowerCase(),
													0,
													V.text,
													V.text.toLowerCase(),
													0,
													{ firstMatchCanBeWeak: !0, boostFullMatch: !0 },
												);
											return G
												? ((H.score = G[1]),
													(H.highlights = {
														label: (0, I.$bl)(q, V) ?? void 0,
													}),
													!0)
												: !1;
										});
										if (x.length === 0) {
											const H = (0, t.localize)(4893, null);
											(D.items = [
												{ label: H, index: -1, kind: g.SymbolKind.String },
											]),
												(D.ariaLabel = H);
										} else D.items = x;
									};
									z(), A.add(D.onDidChangeValue(z));
									const F = new r.$2c();
									A.add(F),
										A.add(
											D.onDidChangeActive(() => {
												const [x] = D.activeItems;
												x && B[x.index]
													? (F.value = R.preview(B[x.index].element))
													: F.clear();
											}),
										);
								})
								.catch((R) => {
									(0, o.$4)(R), D.hide();
								})
								.finally(() => {
									D.busy = !1;
								}),
							A
						);
					}
				};
				(e.$n9b = P),
					(e.$n9b =
						P =
						T =
							Ne(
								[
									j(0, w.$IY),
									j(1, l.$EY),
									j(2, m.$gj),
									j(3, $.$k3),
									j(4, b.$x4b),
									j(5, y.$9Db),
								],
								P,
							));
				class k extends h.$3X {
					static {
						this.ID = "workbench.action.gotoSymbol";
					}
					constructor() {
						super({
							id: k.ID,
							title: {
								...(0, t.localize2)(4898, "Go to Symbol in Editor..."),
								mnemonicTitle: (0, t.localize)(4894, null),
							},
							f1: !0,
							keybinding: {
								when: v.$Kj.and(S.$NLb.negate(), S.$MLb.negate()),
								weight: f.KeybindingWeight.WorkbenchContrib,
								primary: c.KeyMod.CtrlCmd | c.KeyMod.Shift | c.KeyCode.KeyO,
							},
							menu: [
								{ id: h.$XX.MenubarGoMenu, group: "4_symbol_nav", order: 1 },
							],
						});
					}
					run(D) {
						D.get(i.$DJ).quickAccess.show(P.PREFIX, {
							itemActivation: i.ItemActivation.NONE,
						});
					}
				}
				(0, h.$4X)(k),
					E.$Io.as(C.$1r.Quickaccess).registerQuickAccessProvider({
						ctor: P,
						prefix: d.$m9b.PREFIX,
						contextKey: "inFileSymbolsPicker",
						placeholder: (0, t.localize)(4895, null),
						helpEntries: [
							{
								description: (0, t.localize)(4896, null),
								prefix: d.$m9b.PREFIX,
								commandId: k.ID,
								commandCenterOrder: 40,
							},
							{
								description: (0, t.localize)(4897, null),
								prefix: d.$m9b.PREFIX_BY_CATEGORY,
							},
						],
					});
			},
		),
		
define(
			de[3564],
			he([
				1, 0, 33, 14, 94, 27, 4, 11, 121, 10, 8, 44, 57, 20, 43, 40, 41, 30, 25,
				100, 55, 3136, 1751, 52, 18, 84, 65, 81, 224, 3, 2490,
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
				T,
				P,
				k,
			) {
				"use strict";
				var L;
				Object.defineProperty(e, "__esModule", { value: !0 });
				const D = [
					d.$XX.EditorContextShare,
					d.$XX.SCMResourceContextShare,
					d.$XX.OpenEditorsContextShare,
					d.$XX.EditorTitleContextShare,
					d.$XX.MenubarShare,
					d.$XX.ExplorerContextShare,
				];
				let M = class {
					static {
						L = this;
					}
					static {
						this.a = "workbench.experimental.share.enabled";
					}
					constructor(R, O) {
						(this.c = R),
							(this.d = O),
							this.d.getValue(L.a) && this.f(),
							this.d.onDidChangeConfiguration((B) => {
								if (B.affectsConfiguration(L.a)) {
									const U = this.d.getValue(L.a);
									U === !0 && this.b === void 0
										? this.f()
										: U === !1 &&
											this.b !== void 0 &&
											(this.b?.clear(), (this.b = void 0));
								}
							});
					}
					f() {
						this.b || (this.b = new k.$Zc()),
							this.b.add(
								(0, d.$4X)(
									class fa extends d.$3X {
										static {
											this.ID = "workbench.action.share";
										}
										static {
											this.LABEL = (0, C.localize2)(9426, "Share...");
										}
										constructor() {
											super({
												id: fa.ID,
												title: fa.LABEL,
												f1: !0,
												icon: i.$ak.linkExternal,
												precondition: u.$Kj.and(
													l.$L2c.notEqualsTo(0),
													b.$xPb.notEqualsTo(0),
												),
												keybinding: {
													weight: n.KeybindingWeight.WorkbenchContrib,
													primary:
														E.KeyMod.Alt | E.KeyMod.CtrlCmd | E.KeyCode.KeyS,
												},
												menu: [{ id: d.$XX.CommandCenter, order: 1e3 }],
											});
										}
										async run(B, ...U) {
											const z = B.get(y.$Oqc),
												F = B.get(v.$IY)?.activeEditor,
												x =
													(F &&
														a.$A1.getOriginalUri(F, {
															supportSideBySide: a.SideBySideEditor.PRIMARY,
														})) ??
													B.get(f.$Vi).getWorkspace().folders[0].uri,
												H = B.get(m.$Vxb),
												q = B.get(h.$GO),
												V = B.get(p.$7rb),
												G = B.get(S.$8N),
												K =
													B.get(I.$dtb).getActiveCodeEditor()?.getSelection() ??
													void 0,
												J = await G.withProgress(
													{
														location: S.ProgressLocation.Window,
														detail: (0, C.localize)(9420, null),
													},
													async () =>
														z.provideShare(
															{ resourceUri: x, selection: K },
															t.CancellationToken.None,
														),
												);
											if (J) {
												const W = J.toString(),
													X = typeof J == "string";
												await H.writeText(W),
													q.prompt({
														type: g.Severity.Info,
														message: X
															? (0, C.localize)(9421, null)
															: (0, C.localize)(9422, null),
														custom: {
															icon: i.$ak.check,
															markdownDetails: [
																{
																	markdown: new w.$cl(
																		`<div aria-label='${W}'>${W}</div>`,
																		{ supportHtml: !0 },
																	),
																	classes: [
																		X
																			? "share-dialog-input-text"
																			: "share-dialog-input-link",
																	],
																},
															],
														},
														cancelButton: (0, C.localize)(9423, null),
														buttons: X
															? []
															: [
																	{
																		label: (0, C.localize)(9424, null),
																		run: () => {
																			V.open(J, { openExternal: !0 });
																		},
																	},
																],
													});
											}
										}
									},
								),
							);
						const R = this.c.getShareActions();
						for (const O of D)
							for (const B of R) this.b.add(d.$ZX.appendMenuItem(O, B));
					}
				};
				(M = L = Ne([j(0, y.$Oqc), j(1, r.$gj)], M)),
					(0, c.$lK)(y.$Oqc, l.$M2c, c.InstantiationType.Delayed),
					o.$Io
						.as(s.Extensions.Workbench)
						.registerWorkbenchContribution(M, $.LifecyclePhase.Eventually),
					o.$Io
						.as(T.$No.Configuration)
						.registerConfiguration({
							...P.$v6,
							properties: {
								"workbench.experimental.share.enabled": {
									type: "boolean",
									default: !1,
									tags: ["experimental"],
									markdownDescription: (0, C.localize)(
										9425,
										null,
										"`#window.commandCenter#`",
										"`true`",
									),
									restricted: !1,
								},
							},
						});
			},
		),
		
define(
			de[4028],
			he([
				1, 0, 4, 27, 172, 30, 11, 20, 3835, 297, 1919, 102, 55, 52, 60, 89, 239,
				81, 63, 18, 28, 8, 14, 79, 99, 3, 170, 184, 34, 1019,
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
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(t = mt(t)),
					(0, d.$lK)(r.$o8, m.$bUc, d.InstantiationType.Delayed),
					w.$9M.registerLanguage({
						id: r.$e8,
						extensions: [],
						mimetypes: [r.$d8],
					}),
					w.$9M.registerLanguage({
						id: r.$g8,
						extensions: [],
						mimetypes: [r.$f8],
					});
				const L = (0, $.$$O)(
						"output-view-icon",
						y.$ak.output,
						t.localize(8295, null),
					),
					D = E.$Io
						.as(n.Extensions.ViewContainersRegistry)
						.registerViewContainer(
							{
								id: r.$h8,
								title: t.localize2(8310, "Output"),
								icon: L,
								order: 1,
								ctorDescriptor: new a.$Ji(p.$ZSb, [
									r.$h8,
									{ mergeViewWithContainerWhenSingleView: !0 },
								]),
								storageId: r.$h8,
								hideIfEmpty: !0,
							},
							n.ViewContainerLocation.Panel,
							{ doNotRegisterOpenCommand: !0 },
						);
				E.$Io
					.as(n.Extensions.ViewsRegistry)
					.registerViews(
						[
							{
								id: r.$h8,
								name: t.localize2(8311, "Output"),
								containerIcon: L,
								canMoveView: !0,
								canToggleVisibility: !1,
								ctorDescriptor: new a.$Ji(u.$aUc),
								openCommandActionDescriptor: {
									id: "workbench.action.output.toggleOutput",
									mnemonicTitle: t.localize(8296, null),
									keybindings: {
										primary: i.KeyMod.CtrlCmd | i.KeyMod.Shift | i.KeyCode.KeyU,
										linux: {
											primary: (0, i.$os)(
												i.$ps,
												i.KeyMod.CtrlCmd | i.KeyCode.KeyH,
											),
										},
									},
									order: 1,
								},
							},
						],
						D,
					);
				let M = class extends S.$1c {
					constructor(A, R, O) {
						super(), (this.f = A), (this.g = R), (this.h = O), this.j();
					}
					j() {
						this.m(),
							this.n(),
							this.q(),
							this.r(),
							this.s(),
							this.t(),
							this.z(),
							this.C(),
							this.y();
					}
					m() {
						this.D(
							(0, C.$4X)(
								class extends C.$3X {
									constructor() {
										super({
											id: "workbench.output.action.switchBetweenOutputs",
											title: t.localize(8297, null),
										});
									}
									async run(U, z) {
										z && U.get(r.$o8).showChannel(z, !0);
									}
								},
							),
						);
						const A = new C.$XX("workbench.output.menu.switchOutput");
						this.D(
							C.$ZX.appendMenuItem(C.$XX.ViewTitle, {
								submenu: A,
								title: t.localize(8298, null),
								group: "navigation",
								when: l.$Kj.equals("view", r.$h8),
								order: 1,
								isSelection: !0,
							}),
						);
						const R = new Map();
						this.D((0, S.$Yc)(() => (0, S.$Vc)(R.values())));
						const O = (U) => {
							for (const z of U) {
								const F = z.label,
									x = z.extensionId
										? "0_ext_outputchannels"
										: "1_core_outputchannels";
								R.set(
									z.id,
									(0, C.$4X)(
										class extends C.$3X {
											constructor() {
												super({
													id: `workbench.action.output.show.${z.id}`,
													title: F,
													toggled: r.$q8.isEqualTo(z.id),
													menu: { id: A, group: x },
												});
											}
											async run(H) {
												return H.get(r.$o8).showChannel(z.id, !0);
											}
										},
									),
								);
							}
						};
						O(this.f.getChannelDescriptors());
						const B = E.$Io.as(r.$p8.OutputChannels);
						this.D(
							B.onDidRegisterChannel((U) => {
								const z = this.f.getChannelDescriptor(U);
								z && O([z]);
							}),
						),
							this.D(
								B.onDidRemoveChannel((U) => {
									R.get(U)?.dispose(), R.delete(U);
								}),
							);
					}
					n() {
						this.D(
							(0, C.$4X)(
								class extends C.$3X {
									constructor() {
										super({
											id: "workbench.action.showOutputChannels",
											title: t.localize2(8312, "Show Output Channels..."),
											category: t.localize2(8313, "Output"),
											f1: !0,
										});
									}
									async run(A) {
										const R = A.get(r.$o8),
											O = A.get(f.$DJ),
											B = [],
											U = [];
										for (const x of R.getChannelDescriptors())
											x.extensionId ? B.push(x) : U.push(x);
										const z = [];
										for (const { id: x, label: H } of B)
											z.push({ id: x, label: H });
										B.length && U.length && z.push({ type: "separator" });
										for (const { id: x, label: H } of U)
											z.push({ id: x, label: H });
										const F = await O.pick(z, {
											placeHolder: t.localize(8299, null),
										});
										if (F) return R.showChannel(F.id);
									}
								},
							),
						);
					}
					q() {
						this.D(
							(0, C.$4X)(
								class extends C.$3X {
									constructor() {
										super({
											id: "workbench.output.action.clearOutput",
											title: t.localize2(8314, "Clear Output"),
											category: v.$ck.View,
											menu: [
												{
													id: C.$XX.ViewTitle,
													when: l.$Kj.equals("view", r.$h8),
													group: "navigation",
													order: 2,
												},
												{ id: C.$XX.CommandPalette },
												{ id: C.$XX.EditorContext, when: r.$i8 },
											],
											icon: y.$ak.clearAll,
										});
									}
									async run(A) {
										const R = A.get(r.$o8),
											O = A.get(T.$Owb),
											B = R.getActiveChannel();
										B && (B.clear(), O.playSignal(T.$Twb.clear));
									}
								},
							),
						);
					}
					r() {
						this.D(
							(0, C.$4X)(
								class extends C.$3X {
									constructor() {
										super({
											id: "workbench.output.action.toggleAutoScroll",
											title: t.localize2(8315, "Toggle Auto Scrolling"),
											tooltip: t.localize(8300, null),
											menu: {
												id: C.$XX.ViewTitle,
												when: l.$Kj.and(l.$Kj.equals("view", r.$h8)),
												group: "navigation",
												order: 3,
											},
											icon: y.$ak.lock,
											toggled: {
												condition: r.$n8,
												icon: y.$ak.unlock,
												tooltip: t.localize(8301, null),
											},
										});
									}
									async run(A) {
										const R = A.get(g.$HMb).getActiveViewWithId(r.$h8);
										R.scrollLock = !R.scrollLock;
									}
								},
							),
						);
					}
					s() {
						const A = this;
						this.D(
							(0, C.$4X)(
								class extends C.$3X {
									constructor() {
										super({
											id: "workbench.action.openActiveLogOutputFile",
											title: t.localize2(8316, "Open Output in Editor"),
											menu: [
												{
													id: C.$XX.ViewTitle,
													when: l.$Kj.equals("view", r.$h8),
													group: "navigation",
													order: 4,
													isHiddenByDefault: !0,
												},
											],
											icon: y.$ak.goToFile,
											precondition: r.$j8,
										});
									}
									async run() {
										A.u();
									}
								},
							),
						);
					}
					t() {
						const A = this;
						this.D(
							(0, C.$4X)(
								class extends C.$3X {
									constructor() {
										super({
											id: "workbench.action.openActiveLogOutputFileInNewWindow",
											title: t.localize2(8317, "Open Output in New Window"),
											menu: [
												{
													id: C.$XX.ViewTitle,
													when: l.$Kj.equals("view", r.$h8),
													group: "navigation",
													order: 5,
													isHiddenByDefault: !0,
												},
											],
											icon: y.$ak.emptyWindow,
											precondition: r.$j8,
										});
									}
									async run() {
										A.u(b.$LY);
									}
								},
							),
						);
					}
					async u(A) {
						const R = this.w();
						R &&
							(await this.h.updateReadonly(R.file, !0),
							await this.g.openEditor(
								{ resource: R.file, options: { pinned: !0 } },
								A,
							));
					}
					w() {
						const A = this.f.getActiveChannel();
						if (A) {
							const R = this.f
								.getChannelDescriptors()
								.filter((O) => O.id === A.id)[0];
							if (R?.file) return R;
						}
						return null;
					}
					y() {
						const A = this,
							R = new C.$XX("workbench.output.menu.logLevel");
						this.D(
							C.$ZX.appendMenuItem(C.$XX.ViewTitle, {
								submenu: R,
								title: t.localize(8302, null),
								group: "navigation",
								when: l.$Kj.and(l.$Kj.equals("view", r.$h8), r.$k8),
								icon: y.$ak.gear,
								order: 6,
							}),
						);
						let O = 0;
						const B = (U) => {
							this.D(
								(0, C.$4X)(
									class extends C.$3X {
										constructor() {
											super({
												id: `workbench.action.output.activeOutputLogLevel.${U}`,
												title: (0, P.$yk)(U).value,
												toggled: r.$l8.isEqualTo((0, P.$xk)(U)),
												menu: { id: R, order: O++, group: "0_level" },
											});
										}
										async run(z) {
											const F = A.f.getActiveChannel();
											if (F) {
												const x = A.f.getChannelDescriptor(F.id);
												if (x?.log && x.file)
													return z.get(P.$jk).setLogLevel(x.file, U);
											}
										}
									},
								),
							);
						};
						B(P.LogLevel.Trace),
							B(P.LogLevel.Debug),
							B(P.LogLevel.Info),
							B(P.LogLevel.Warning),
							B(P.LogLevel.Error),
							B(P.LogLevel.Off),
							this.D(
								(0, C.$4X)(
									class extends C.$3X {
										constructor() {
											super({
												id: "workbench.action.output.activeOutputLogLevelDefault",
												title: t.localize(8303, null),
												menu: { id: R, order: O, group: "1_default" },
												precondition: r.$m8.negate(),
											});
										}
										async run(U) {
											const z = A.f.getActiveChannel();
											if (z) {
												const F = A.f.getChannelDescriptor(z.id);
												if (F?.log && F.file) {
													const x = U.get(P.$jk).getLogLevel(F.file);
													return await U.get(k.$GMc).setDefaultLogLevel(
														x,
														F.extensionId,
													);
												}
											}
										}
									},
								),
							);
					}
					z() {
						this.D(
							(0, C.$4X)(
								class extends C.$3X {
									constructor() {
										super({
											id: "workbench.action.showLogs",
											title: t.localize2(8318, "Show Logs..."),
											category: v.$ck.Developer,
											menu: { id: C.$XX.CommandPalette },
										});
									}
									async run(A) {
										const R = A.get(r.$o8),
											O = A.get(f.$DJ),
											B = [],
											U = [];
										for (const x of R.getChannelDescriptors())
											x.log && (x.extensionId ? B.push(x) : U.push(x));
										const z = [];
										for (const { id: x, label: H } of U)
											z.push({ id: x, label: H });
										B.length &&
											U.length &&
											z.push({
												type: "separator",
												label: t.localize(8304, null),
											});
										for (const { id: x, label: H } of B)
											z.push({ id: x, label: H });
										const F = await O.pick(z, {
											placeHolder: t.localize(8305, null),
										});
										if (F) return R.showChannel(F.id);
									}
								},
							),
						);
					}
					C() {
						this.D(
							(0, C.$4X)(
								class extends C.$3X {
									constructor() {
										super({
											id: "workbench.action.openLogFile",
											title: t.localize2(8319, "Open Log File..."),
											category: v.$ck.Developer,
											menu: { id: C.$XX.CommandPalette },
											metadata: {
												description: "workbench.action.openLogFile",
												args: [
													{
														name: "logFile",
														schema: {
															markdownDescription: t.localize(8306, null),
															type: "string",
														},
													},
												],
											},
										});
									}
									async run(A, R) {
										const O = A.get(r.$o8),
											B = A.get(f.$DJ),
											U = A.get(b.$IY),
											z = A.get(I.$_Y);
										let F;
										const x = R && typeof R == "string" ? R : void 0,
											H = [],
											q = [];
										for (const V of O.getChannelDescriptors())
											if (V.file && V.log) {
												const G = { id: V.id, label: V.label, channel: V };
												V.extensionId ? H.push(G) : q.push(G),
													G.id === x && (F = G);
											}
										if (!F) {
											const V = [
												...H.sort((G, K) => G.label.localeCompare(K.label)),
											];
											V.length &&
												q.length &&
												(V.push({ type: "separator" }),
												V.push(
													...q.sort((G, K) => G.label.localeCompare(K.label)),
												)),
												(F = await B.pick(V, {
													placeHolder: t.localize(8307, null),
												}));
										}
										if (F) {
											const V = (0, s.$wg)(F.channel.file);
											await z.updateReadonly(V, !0),
												await U.openEditor({
													resource: V,
													options: { pinned: !0 },
												});
										}
									}
								},
							),
						);
					}
				};
				(M = Ne([j(0, r.$o8), j(1, b.$IY), j(2, I.$_Y)], M)),
					E.$Io
						.as(h.Extensions.Workbench)
						.registerWorkbenchContribution(M, c.LifecyclePhase.Restored),
					E.$Io
						.as(o.$No.Configuration)
						.registerConfiguration({
							id: "output",
							order: 30,
							title: t.localize(8308, null),
							type: "object",
							properties: {
								"output.smartScroll.enabled": {
									type: "boolean",
									description: t.localize(8309, null),
									default: !0,
									scope: o.ConfigurationScope.WINDOW,
									tags: ["output"],
								},
							},
						});
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	
define(
			de[3658],
			he([1, 0, 3, 23, 73, 117, 107, 690, 469, 231, 78, 52, 1875]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$tVc = void 0);
				let c = class extends t.$1c {
					static {
						this.ID = "terminalMain";
					}
					constructor(g, p, o, f, b, s, l, y, $) {
						super(), this.a(g, p, o, f, b, s, l, y, $);
					}
					async a(g, p, o, f, b, s, l, y, $) {
						this.D(
							p.onDidCreateTerminal(async (v) => {
								const S = await s.createTerminal({
									config: v,
									location: E.TerminalLocation.Panel,
									skipContributedProfileCheck: !0,
								});
								s.setActiveInstance(S), await s.revealActiveTerminal();
							}),
						),
							await b.when(a.LifecyclePhase.Restored),
							this.D(
								g.registerEditor(
									`${i.Schemas.vscodeTerminal}:/**`,
									{
										id: C.$pIb,
										label: m.$hUc.terminal,
										priority: r.RegisteredEditorPriority.exclusive,
									},
									{
										canSupportResource: (v) =>
											v.scheme === i.Schemas.vscodeTerminal,
										singlePerResource: !0,
									},
									{
										createEditorInput: async ({ resource: v, options: S }) => {
											let I = s.getInstanceFromResource(v);
											if (I) y.getGroupForInstance(I)?.removeInstance(I);
											else {
												const k = (0, d.$TUc)(v);
												if (!k.instanceId)
													throw new Error(
														"Terminal identifier without instanceId",
													);
												const L = s.getPrimaryBackend();
												if (!L) throw new Error("No terminal primary backend");
												const D = await L.requestDetachInstance(
													k.workspaceId,
													k.instanceId,
												);
												if (!D)
													throw new Error(
														"No terminal persistent process to attach",
													);
												I = $.createInstance(
													{ attachPersistentProcess: D },
													E.TerminalLocation.Editor,
												);
											}
											const T = l.resolveResource(I);
											return {
												editor: l.getInputFromResource(T),
												options: {
													...S,
													pinned: !0,
													forceReload: !0,
													override: C.$pIb,
												},
											};
										},
									},
								),
							),
							this.D(
								f.registerFormatter({
									scheme: i.Schemas.vscodeTerminal,
									formatting: { label: "${path}", separator: "" },
								}),
							);
					}
				};
				(e.$tVc = c),
					(e.$tVc = c =
						Ne(
							[
								j(0, r.$E6),
								j(1, h.$csb),
								j(2, u.$r8),
								j(3, w.$3N),
								j(4, a.$n6),
								j(5, C.$iIb),
								j(6, C.$kIb),
								j(7, C.$lIb),
								j(8, C.$mIb),
							],
							c,
						));
			},
		),
		
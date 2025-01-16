define(
			de[4300],
			he([
				1, 0, 4, 44, 313, 253, 87, 5, 25, 220, 121, 163, 31, 8, 22, 43, 27, 12,
				42, 382, 449, 1014, 23, 40, 71, 18, 66, 73, 19, 3, 113, 65, 281, 85, 68,
				29, 50, 116, 136, 10, 142, 60, 89, 554, 57, 853, 1992, 93,
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
				L,
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
				G,
				K,
				J,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$XMc = e.$WMc = void 0),
					(t = mt(t));
				const W = (le, oe, ae) => {
					if (Array.isArray(oe)) {
						const pe = le.get(C.$asb),
							$e = le.get(L.$Ti);
						(oe = oe.map((ye) =>
							(0, E.$tY)(ye) && ye.workspaceUri.scheme === y.Schemas.untitled
								? {
										workspaceUri: (0, P.$nh)(
											$e.untitledWorkspacesHome,
											ye.workspaceUri.path,
											m.$_i,
										),
									}
								: ye,
						)),
							pe.openWindow(oe, ae);
					}
				};
				e.$WMc = W;
				const X = (le, oe) => {
					le.get(C.$asb).openWindow(oe);
				};
				(e.$XMc = X),
					g.$TX.registerCommandAndKeybindingRule({
						weight: g.KeybindingWeight.WorkbenchContrib,
						when: r.$OUb,
						primary: p.KeyMod.CtrlCmd | p.KeyCode.Enter,
						mac: { primary: p.KeyMod.WinCtrl | p.KeyCode.Enter },
						id: q.$XUb,
						handler: async (le, oe) => {
							const ae = le.get(S.$IY),
								pe = le.get(n.$ll),
								$e = le.get(b.$LWb),
								ye = (0, b.$NWb)(oe, le.get(J.$fMb), ae, le.get(I.$EY), $e);
							if (ye.length) {
								const ue = ye.filter((be) => be.scheme === y.Schemas.untitled),
									fe = ye.filter((be) => be.scheme !== y.Schemas.untitled),
									ge = (
										await Promise.all(
											fe.map(async (be) => {
												const Ce = $e.findClosest(be);
												return Ce || (await pe.stat(be));
											}),
										)
									)
										.filter((be) => !be.isDirectory)
										.map((be) => ({
											resource: be.resource,
											options: { pinned: !0 },
										}))
										.concat(
											...ue.map((be) => ({
												resource: be,
												options: { pinned: !0 },
											})),
										);
								await ae.openEditors(ge, S.$KY);
							}
						},
					}),
					g.$TX.registerCommandAndKeybindingRule({
						weight: g.KeybindingWeight.WorkbenchContrib + 10,
						when: c.$Kj.and(r.$NUb, r.$zUb.toNegated()),
						primary: p.KeyCode.Enter,
						mac: { primary: p.KeyMod.CtrlCmd | p.KeyCode.DownArrow },
						id: "explorer.openAndPassFocus",
						handler: async (le, oe) => {
							const ae = le.get(S.$IY),
								$e = le.get(b.$LWb).getContext(!0);
							$e.length &&
								(await ae.openEditors(
									$e.map((ye) => ({
										resource: ye.resource,
										options: { preserveFocus: !1, pinned: !0 },
									})),
								));
						},
					});
				const Y = "showModifications";
				let ie = [];
				g.$TX.registerCommandAndKeybindingRule({
					id: q.$3Ub,
					when: void 0,
					weight: g.KeybindingWeight.WorkbenchContrib,
					primary: (0, p.$os)(p.$ps, p.KeyCode.KeyD),
					mac: { primary: (0, p.$os)(p.$qs, p.KeyCode.KeyD) },
					handler: async (le, oe) => {
						const ae = le.get(d.$Li),
							pe = le.get(f.$MO),
							$e = le.get(S.$IY),
							ye = le.get(n.$ll),
							ue = le.get(J.$fMb);
						let fe = !1;
						if (ie.length === 0) {
							fe = !0;
							const ve = ae.createInstance(r.$TUb);
							ie.push(ve), ie.push(pe.registerTextModelContentProvider(Y, ve));
						}
						const me = (0, b.$MWb)(oe, $e, ue);
						if (me && ye.hasProvider(me)) {
							const ve = (0, P.$kh)(me),
								ge = t.localize(6827, null, ve, ve);
							try {
								await r.$TUb.open(me, Y, ge, $e, { pinned: !0 }),
									fe &&
										ie.push(
											$e.onDidVisibleEditorsChange(() => {
												$e.editors.some(
													(be) =>
														!!i.$A1.getCanonicalUri(be, {
															supportSideBySide: i.SideBySideEditor.SECONDARY,
															filterByScheme: Y,
														}),
												) || (ie = (0, k.$Vc)(ie));
											}),
										);
							} catch {
								ie = (0, k.$Vc)(ie);
							}
						}
					},
				});
				let ne, ee;
				h.$fk.registerCommand({
					id: q.$ZUb,
					handler: (le, oe) => {
						(ne = (0, b.$MWb)(oe, le.get(S.$IY), le.get(J.$fMb))),
							ee || (ee = q.$hVb.bindTo(le.get(c.$6j))),
							ee.set(!0);
					},
				}),
					h.$fk.registerCommand({
						id: q.$1Ub,
						handler: async (le, oe) => {
							const ae = le.get(S.$IY),
								pe = (0, b.$NWb)(
									oe,
									le.get(J.$fMb),
									ae,
									le.get(I.$EY),
									le.get(b.$LWb),
								);
							return pe.length === 2
								? ae.openEditor({
										original: { resource: pe[0] },
										modified: { resource: pe[1] },
										options: { pinned: !0 },
									})
								: !0;
						},
					}),
					h.$fk.registerCommand({
						id: q.$2Ub,
						handler: (le, oe) => {
							const ae = le.get(S.$IY),
								pe = (0, b.$MWb)(oe, ae, le.get(J.$fMb));
							ne &&
								pe &&
								ae.openEditor({
									original: { resource: ne },
									modified: { resource: pe },
									options: { pinned: !0 },
								});
						},
					});
				async function _(le, oe, ae, pe, $e) {
					if (le.length) {
						const ye = o.$l
							? `\r
`
							: `
`;
						let ue;
						if (oe) {
							const me = $e.getValue("explorer.copyRelativePathSeparator");
							(me === "/" || me === "\\") && (ue = me);
						}
						const fe = le
							.map((me) =>
								pe.getUriLabel(me, {
									relative: oe,
									noPrefix: !0,
									separator: ue,
								}),
							)
							.join(ye);
						await ae.writeText(fe);
					}
				}
				const te = async (le, oe) => {
					const ae = (0, b.$NWb)(
						oe,
						le.get(J.$fMb),
						le.get(S.$IY),
						le.get(I.$EY),
						le.get(b.$LWb),
					);
					await _(ae, !1, le.get(u.$Vxb), le.get(T.$3N), le.get(z.$gj));
				};
				g.$TX.registerCommandAndKeybindingRule({
					weight: g.KeybindingWeight.WorkbenchContrib,
					when: v.EditorContextKeys.focus.toNegated(),
					primary: p.KeyMod.CtrlCmd | p.KeyMod.Alt | p.KeyCode.KeyC,
					win: { primary: p.KeyMod.Shift | p.KeyMod.Alt | p.KeyCode.KeyC },
					id: q.$4Ub,
					handler: te,
				}),
					g.$TX.registerCommandAndKeybindingRule({
						weight: g.KeybindingWeight.WorkbenchContrib,
						when: v.EditorContextKeys.focus,
						primary: (0, p.$os)(
							p.$ps,
							p.KeyMod.CtrlCmd | p.KeyMod.Alt | p.KeyCode.KeyC,
						),
						mac: {
							primary: (0, p.$os)(
								p.$qs,
								p.KeyMod.CtrlCmd | p.KeyMod.Alt | p.KeyCode.KeyC,
							),
						},
						win: { primary: p.KeyMod.Shift | p.KeyMod.Alt | p.KeyCode.KeyC },
						id: q.$4Ub,
						handler: te,
					});
				const Q = async (le, oe) => {
					const ae = (0, b.$NWb)(
						oe,
						le.get(J.$fMb),
						le.get(S.$IY),
						le.get(I.$EY),
						le.get(b.$LWb),
					);
					await _(ae, !0, le.get(u.$Vxb), le.get(T.$3N), le.get(z.$gj));
				};
				g.$TX.registerCommandAndKeybindingRule({
					weight: g.KeybindingWeight.WorkbenchContrib,
					when: v.EditorContextKeys.focus.toNegated(),
					primary:
						p.KeyMod.CtrlCmd | p.KeyMod.Shift | p.KeyMod.Alt | p.KeyCode.KeyC,
					win: {
						primary: (0, p.$os)(
							p.$ps,
							p.KeyMod.CtrlCmd | p.KeyMod.Shift | p.KeyCode.KeyC,
						),
					},
					id: q.$5Ub,
					handler: Q,
				}),
					g.$TX.registerCommandAndKeybindingRule({
						weight: g.KeybindingWeight.WorkbenchContrib,
						when: v.EditorContextKeys.focus,
						primary: (0, p.$os)(
							p.$ps,
							p.KeyMod.CtrlCmd | p.KeyMod.Shift | p.KeyMod.Alt | p.KeyCode.KeyC,
						),
						mac: {
							primary: (0, p.$os)(
								p.$qs,
								p.KeyMod.CtrlCmd |
									p.KeyMod.Shift |
									p.KeyMod.Alt |
									p.KeyCode.KeyC,
							),
						},
						win: {
							primary: (0, p.$os)(
								p.$ps,
								p.KeyMod.CtrlCmd | p.KeyMod.Shift | p.KeyCode.KeyC,
							),
						},
						id: q.$5Ub,
						handler: Q,
					}),
					g.$TX.registerCommandAndKeybindingRule({
						weight: g.KeybindingWeight.WorkbenchContrib,
						when: void 0,
						primary: (0, p.$os)(p.$ps, p.KeyCode.KeyP),
						mac: { primary: (0, p.$os)(p.$qs, p.KeyCode.KeyP) },
						id: "workbench.action.files.copyPathOfActiveFile",
						handler: async (le) => {
							const ae = le.get(S.$IY).activeEditor,
								pe = i.$A1.getOriginalUri(ae, {
									supportSideBySide: i.SideBySideEditor.PRIMARY,
								});
							await _(
								pe ? [pe] : [],
								!1,
								le.get(u.$Vxb),
								le.get(T.$3N),
								le.get(z.$gj),
							);
						},
					}),
					h.$fk.registerCommand({
						id: q.$VUb,
						handler: async (le, oe) => {
							const ae = le.get(H.$HMb),
								pe = le.get(m.$Vi),
								$e = le.get(b.$LWb),
								ye = le.get(S.$IY),
								ue = le.get(J.$fMb),
								fe = (0, b.$MWb)(oe, ye, ue);
							if (fe && pe.isInsideWorkspace(fe)) {
								const me = await ae.openView(r.$wUb, !1);
								if (me) {
									const ve = me.autoReveal;
									(me.autoReveal = !1),
										me.setExpanded(!0),
										await $e.select(fe, "force"),
										me.focus(),
										(me.autoReveal = ve);
								}
							} else {
								const me = await ae.openView(K.$pAc.ID, !1);
								me && (me.setExpanded(!0), me.focus());
							}
						},
					}),
					h.$fk.registerCommand({
						id: q.$YUb,
						handler: async (le, oe) => {
							const ae = le.get(S.$IY),
								pe = le.get(J.$fMb),
								$e = (0, b.$MWb)(oe, ae, pe);
							if ($e)
								return ae.openEditor({
									resource: $e,
									options: {
										override: B.EditorResolution.PICK,
										source: B.EditorOpenSource.USER,
									},
								});
						},
					});
				async function Z(le, oe) {
					const ae = le.get(I.$EY),
						pe = le.get(D.$dtb),
						$e = le.get(N.$kZ);
					let ye = (0, b.$OWb)(le);
					if (!ye) {
						const fe = ae.activeGroup;
						fe.activeEditor &&
							((ye = []),
							fe.activeEditor instanceof w.$iY &&
							!oe?.saveAs &&
							!(
								fe.activeEditor.primary.hasCapability(
									i.EditorInputCapabilities.Untitled,
								) ||
								fe.activeEditor.secondary.hasCapability(
									i.EditorInputCapabilities.Untitled,
								)
							) &&
							fe.activeEditor.secondary.isModified()
								? (ye.push({ groupId: fe.id, editor: fe.activeEditor.primary }),
									ye.push({
										groupId: fe.id,
										editor: fe.activeEditor.secondary,
									}))
								: ye.push({ groupId: fe.id, editor: fe.activeEditor }));
					}
					if (!ye || ye.length === 0) return;
					await re(le, ye, oe);
					const ue = pe.getFocusedCodeEditor();
					if (ue instanceof M.$wDb && !ue.isSimpleWidget) {
						const fe = ue.getModel()?.uri;
						fe &&
							!ye.some(({ editor: me }) =>
								(0, P.$gh)(
									i.$A1.getCanonicalUri(me, {
										supportSideBySide: i.SideBySideEditor.PRIMARY,
									}),
									fe,
								),
							) &&
							($e.files.get(fe)?.isReadonly() || (await $e.save(fe, oe)));
					}
				}
				function se(le, oe, ae) {
					const pe = [];
					for (const $e of oe)
						for (const ye of $e.getEditors(i.EditorsOrder.MOST_RECENTLY_ACTIVE))
							ye.isDirty() && pe.push({ groupId: $e.id, editor: ye });
					return re(le, pe, ae);
				}
				async function re(le, oe, ae) {
					const pe = le.get(S.$IY),
						$e = le.get($.$4N),
						ye = le.get(d.$Li);
					try {
						await pe.save(oe, ae);
					} catch (ue) {
						if (!(0, R.$8)(ue)) {
							const fe = [
									(0, O.$wj)({
										id: "workbench.action.files.saveEditors",
										label: t.localize(6828, null),
										run: () => ye.invokeFunction((ve) => re(ve, oe, ae)),
									}),
								],
								me = oe.filter(
									({ editor: ve }) =>
										!ve.hasCapability(i.EditorInputCapabilities.Untitled),
								);
							me.length > 0 &&
								fe.push(
									(0, O.$wj)({
										id: "workbench.action.files.revertEditors",
										label:
											me.length > 1
												? t.localize(6829, null)
												: t.localize(6830, null),
										run: () => pe.revert(me),
									}),
								),
								$e.notify({
									id: oe
										.map(({ editor: ve }) =>
											(0, U.$Aj)(ve.resource?.toString()),
										)
										.join(),
									severity: $.Severity.Error,
									message: t.localize(
										6831,
										null,
										oe.map(({ editor: ve }) => ve.getName()).join(", "),
										(0, a.$xj)(ue, !1),
									),
									actions: { primary: fe },
								});
						}
					}
				}
				g.$TX.registerCommandAndKeybindingRule({
					when: void 0,
					weight: g.KeybindingWeight.WorkbenchContrib,
					primary: p.KeyMod.CtrlCmd | p.KeyCode.KeyS,
					id: q.$8Ub,
					handler: (le) => Z(le, { reason: i.SaveReason.EXPLICIT, force: !0 }),
				}),
					g.$TX.registerCommandAndKeybindingRule({
						when: void 0,
						weight: g.KeybindingWeight.WorkbenchContrib,
						primary: (0, p.$os)(p.$ps, p.KeyCode.KeyS),
						mac: { primary: (0, p.$os)(p.$qs, p.KeyCode.KeyS) },
						win: {
							primary: (0, p.$os)(
								p.$ps,
								p.KeyMod.CtrlCmd | p.KeyMod.Shift | p.KeyCode.KeyS,
							),
						},
						id: q.$0Ub,
						handler: (le) =>
							Z(le, {
								reason: i.SaveReason.EXPLICIT,
								force: !0,
								skipSaveParticipants: !0,
							}),
					}),
					g.$TX.registerCommandAndKeybindingRule({
						id: q.$6Ub,
						weight: g.KeybindingWeight.WorkbenchContrib,
						when: void 0,
						primary: p.KeyMod.CtrlCmd | p.KeyMod.Shift | p.KeyCode.KeyS,
						handler: (le) =>
							Z(le, { reason: i.SaveReason.EXPLICIT, saveAs: !0 }),
					}),
					g.$TX.registerCommandAndKeybindingRule({
						when: void 0,
						weight: g.KeybindingWeight.WorkbenchContrib,
						primary: void 0,
						mac: { primary: p.KeyMod.CtrlCmd | p.KeyMod.Alt | p.KeyCode.KeyS },
						win: { primary: (0, p.$os)(p.$ps, p.KeyCode.KeyS) },
						id: q.$_Ub,
						handler: (le) =>
							se(
								le,
								le.get(I.$EY).getGroups(I.GroupsOrder.MOST_RECENTLY_ACTIVE),
								{ reason: i.SaveReason.EXPLICIT },
							),
					}),
					h.$fk.registerCommand({
						id: q.$bVb,
						handler: (le, oe, ae) => {
							const pe = le.get(I.$EY),
								$e = (0, l.$TVb)([ae], le.get(S.$IY), pe, le.get(J.$fMb));
							let ye;
							return (
								$e.groupedEditors.length
									? (ye = $e.groupedEditors.map(({ group: ue }) => ue))
									: (ye = pe.getGroups(I.GroupsOrder.MOST_RECENTLY_ACTIVE)),
								se(le, ye, { reason: i.SaveReason.EXPLICIT })
							);
						},
					}),
					h.$fk.registerCommand({
						id: q.$cVb,
						handler: async (le) =>
							(
								await le
									.get(S.$IY)
									.saveAll({
										includeUntitled: !1,
										reason: i.SaveReason.EXPLICIT,
									})
							).success,
					}),
					h.$fk.registerCommand({
						id: q.$WUb,
						handler: async (le) => {
							const oe = le.get(I.$EY),
								ae = le.get(S.$IY);
							let pe = (0, b.$OWb)(le);
							if (!pe) {
								const $e = oe.activeGroup;
								$e.activeEditor &&
									(pe = [{ groupId: $e.id, editor: $e.activeEditor }]);
							}
							if (!(!pe || pe.length === 0))
								try {
									await ae.revert(
										pe.filter(
											({ editor: $e }) =>
												!$e.hasCapability(i.EditorInputCapabilities.Untitled),
										),
										{ force: !0 },
									);
								} catch ($e) {
									le.get($.$4N).error(
										t.localize(
											6832,
											null,
											pe.map(({ editor: ue }) => ue.getName()).join(", "),
											(0, a.$xj)($e, !1),
										),
									);
								}
						},
					}),
					h.$fk.registerCommand({
						id: q.$iVb,
						handler: (le, oe) => {
							const ae = le.get(m.$Vi),
								pe = le.get(A.$Vl),
								$e = ae.getWorkspace(),
								ye = (0, b.$NWb)(
									oe,
									le.get(J.$fMb),
									le.get(S.$IY),
									le.get(I.$EY),
									le.get(b.$LWb),
								).filter((fe) =>
									$e.folders.some((me) => pe.extUri.isEqual(me.uri, fe)),
								);
							return ye.length === 0
								? le.get(h.$ek).executeCommand(G.$Ltc.ID)
								: le.get(s.$mRb).removeFolders(ye);
						},
					}),
					g.$TX.registerCommandAndKeybindingRule({
						weight: g.KeybindingWeight.WorkbenchContrib + 10,
						when: c.$Kj.and(r.$NUb, r.$JUb, r.$KUb.negate()),
						primary: p.KeyCode.LeftArrow,
						id: q.$kVb,
						handler: (le) => {
							const ae = le
								.get(F.$6Sb)
								.getActivePaneComposite(x.ViewContainerLocation.Sidebar);
							if (ae?.getId() !== r.$vUb) return;
							ae.getViewPaneContainer()
								.getExplorerView()
								.previousCompressedStat();
						},
					}),
					g.$TX.registerCommandAndKeybindingRule({
						weight: g.KeybindingWeight.WorkbenchContrib + 10,
						when: c.$Kj.and(r.$NUb, r.$JUb, r.$LUb.negate()),
						primary: p.KeyCode.RightArrow,
						id: q.$lVb,
						handler: (le) => {
							const ae = le
								.get(F.$6Sb)
								.getActivePaneComposite(x.ViewContainerLocation.Sidebar);
							if (ae?.getId() !== r.$vUb) return;
							ae.getViewPaneContainer().getExplorerView().nextCompressedStat();
						},
					}),
					g.$TX.registerCommandAndKeybindingRule({
						weight: g.KeybindingWeight.WorkbenchContrib + 10,
						when: c.$Kj.and(r.$NUb, r.$JUb, r.$KUb.negate()),
						primary: p.KeyCode.Home,
						id: q.$mVb,
						handler: (le) => {
							const ae = le
								.get(F.$6Sb)
								.getActivePaneComposite(x.ViewContainerLocation.Sidebar);
							if (ae?.getId() !== r.$vUb) return;
							ae.getViewPaneContainer().getExplorerView().firstCompressedStat();
						},
					}),
					g.$TX.registerCommandAndKeybindingRule({
						weight: g.KeybindingWeight.WorkbenchContrib + 10,
						when: c.$Kj.and(r.$NUb, r.$JUb, r.$LUb.negate()),
						primary: p.KeyCode.End,
						id: q.$nVb,
						handler: (le) => {
							const ae = le
								.get(F.$6Sb)
								.getActivePaneComposite(x.ViewContainerLocation.Sidebar);
							if (ae?.getId() !== r.$vUb) return;
							ae.getViewPaneContainer().getExplorerView().lastCompressedStat();
						},
					}),
					g.$TX.registerCommandAndKeybindingRule({
						weight: g.KeybindingWeight.WorkbenchContrib,
						when: null,
						primary: o.$r
							? o.$l
								? (0, p.$os)(p.$ps, p.KeyCode.KeyN)
								: p.KeyMod.CtrlCmd | p.KeyMod.Alt | p.KeyCode.KeyN
							: p.KeyMod.CtrlCmd | p.KeyCode.KeyN,
						secondary: o.$r ? [p.KeyMod.CtrlCmd | p.KeyCode.KeyN] : void 0,
						id: q.$oVb,
						metadata: {
							description: q.$pVb,
							args: [
								{
									isOptional: !0,
									name: "New Untitled Text File arguments",
									description: "The editor view type or language ID if known",
									schema: {
										type: "object",
										properties: {
											viewType: { type: "string" },
											languageId: { type: "string" },
										},
									},
								},
							],
						},
						handler: async (le, oe) => {
							await le
								.get(S.$IY)
								.openEditor({
									resource: void 0,
									options: { override: oe?.viewType, pinned: !0 },
									languageId: oe?.languageId,
								});
						},
					}),
					h.$fk.registerCommand({
						id: q.$qVb,
						handler: async (le, oe) => {
							const ae = le.get(S.$IY),
								pe = le.get(V.$IO),
								$e = le.get(n.$ll),
								ye = t.localize(6833, null),
								ue = (0, P.$nh)(
									await pe.defaultFilePath(),
									oe?.fileName ?? "Untitled.txt",
								),
								fe = await pe.showSaveDialog({
									saveLabel: ye,
									title: ye,
									defaultUri: ue,
								});
							fe &&
								(await $e.createFile(fe, void 0, { overwrite: !0 }),
								await ae.openEditor({
									resource: fe,
									options: { override: oe?.viewType, pinned: !0 },
									languageId: oe?.languageId,
								}));
						},
					});
			},
		),
		
define(
			de[4160],
			he([
				1, 0, 103, 27, 3, 197, 23, 19, 37, 9, 199, 188, 172, 67, 42, 255, 373,
				4, 11, 10, 81, 8, 116, 102, 20, 5, 43, 34, 30, 51, 192, 55, 44, 123,
				572, 986, 1245, 4159, 1302, 987, 238, 284, 293, 70, 176, 243, 161, 446,
				66, 231, 18, 53, 403,
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
				W,
				X,
				Y,
				ie,
				ne,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$vJc = e.$uJc = void 0),
					(x = mt(x));
				const ee = (0, o.localize2)(7162, "Interactive Window");
				P.$Io
					.as(M.$a1.EditorPane)
					.registerEditorPane(
						L.$vVb.create(B.$tJc, q.$R6, "Interactive Window"),
						[new $.$Ji(U.$ync)],
					);
				let _ = class extends w.$1c {
					static {
						this.ID = "workbench.contrib.interactiveDocument";
					}
					constructor(le, oe, ae, pe) {
						super(),
							(this.a = pe),
							le.getContributedNotebookType("interactive") ||
								this.D(
									le.registerContributedNotebookType("interactive", {
										providerDisplayName: "Interactive Notebook",
										displayName: "Interactive",
										filenamePattern: ["*.interactive"],
										priority: X.RegisteredEditorPriority.builtin,
									}),
								),
							oe.registerEditor(
								`${C.Schemas.vscodeInteractiveInput}:/**`,
								{
									id: "vscode-interactive-input",
									label: "Interactive Editor",
									priority: X.RegisteredEditorPriority.exclusive,
								},
								{
									canSupportResource: (ye) =>
										ye.scheme === C.Schemas.vscodeInteractiveInput,
									singlePerResource: !0,
								},
								{
									createEditorInput: ({ resource: ye }) =>
										ae
											.getEditors(M.EditorsOrder.SEQUENTIAL)
											.find(
												(fe) =>
													fe.editor instanceof U.$ync &&
													fe.editor.inputResource.toString() === ye.toString(),
											),
								},
							),
							oe.registerEditor(
								"*.interactive",
								{
									id: "interactive",
									label: "Interactive Editor",
									priority: X.RegisteredEditorPriority.exclusive,
								},
								{
									canSupportResource: (ye) =>
										(ye.scheme === C.Schemas.untitled &&
											(0, d.$lh)(ye) === ".interactive") ||
										(ye.scheme === C.Schemas.vscodeNotebookCell &&
											(0, d.$lh)(ye) === ".interactive"),
									singlePerResource: !0,
								},
								{
									createEditorInput: ({ resource: ye, options: ue }) => {
										const fe = q.CellUri.parse(ye);
										let me,
											ve = ye;
										fe &&
											((me = { resource: ye, options: ue }),
											(ve = fe.notebook));
										const ge = {
											...ue,
											cellOptions: me,
											cellRevealType: void 0,
											cellSelections: void 0,
											isReadOnly: void 0,
											viewState: void 0,
											indexedCellOptions: void 0,
										};
										return { editor: Q(ve, this.a), options: ge };
									},
									createUntitledEditorInput: ({
										resource: ye,
										options: ue,
									}) => {
										if (!ye)
											throw new Error(
												"Interactive window editors must have a resource name",
											);
										const fe = q.CellUri.parse(ye);
										let me;
										fe && (me = { resource: ye, options: ue });
										const ve = {
											...ue,
											cellOptions: me,
											cellRevealType: void 0,
											cellSelections: void 0,
											isReadOnly: void 0,
											viewState: void 0,
											indexedCellOptions: void 0,
										};
										return { editor: Q(ye, this.a), options: ve };
									},
								},
							);
					}
				};
				(e.$uJc = _),
					(e.$uJc = _ =
						Ne([j(0, K.$MIb), j(1, X.$E6), j(2, Y.$IY), j(3, S.$Li)], _));
				let te = class {
					static {
						this.ID = "workbench.contrib.interactiveInputContentProvider";
					}
					constructor(le, oe) {
						(this.b = oe),
							(this.a = le.registerTextModelContentProvider(
								C.Schemas.vscodeInteractiveInput,
								this,
							));
					}
					dispose() {
						this.a.dispose();
					}
					async provideTextContent(le) {
						const oe = this.b.getModel(le);
						return oe || this.b.createModel("", null, le, !1);
					}
				};
				te = Ne([j(0, n.$MO), j(1, c.$QO)], te);
				function Q(re, le) {
					const oe = /\/Interactive-(\d+)/.exec(re.path),
						ae =
							oe && oe[1] ? `/InteractiveInput-${oe[1]}` : "InteractiveInput",
						pe = r.URI.from({
							scheme: C.Schemas.vscodeInteractiveInput,
							path: ae,
						});
					return U.$ync.create(le, re, pe);
				}
				let Z = class extends w.$1c {
					static {
						this.ID =
							"workbench.contrib.interactiveWindowWorkingCopyEditorHandler";
					}
					constructor(le, oe, ae) {
						super(), (this.a = le), (this.b = oe), (this.c = ae), this.f();
					}
					handles(le) {
						const oe = this.g(le);
						return !!oe && oe === "interactive";
					}
					isOpen(le, oe) {
						return this.handles(le)
							? oe instanceof U.$ync && (0, d.$gh)(le.resource, oe.resource)
							: !1;
					}
					createEditor(le) {
						return Q(le.resource, this.a);
					}
					async f() {
						await this.c.whenInstalledExtensionsRegistered(),
							this.D(this.b.registerHandler(this));
					}
					g(le) {
						return q.$66.parse(le.typeId);
					}
				};
				(Z = Ne([j(0, S.$Li), j(1, ne.$bZ), j(2, ie.$q2)], Z)),
					(0, D.$s6)(_.ID, _, D.WorkbenchPhase.BlockRestore),
					(0, D.$s6)(te.ID, te, { editorTypeId: q.$R6 }),
					(0, D.$s6)(Z.ID, Z, { editorTypeId: q.$R6 });
				class se {
					static {
						this.ID = U.$ync.ID;
					}
					canSerialize(le) {
						return le instanceof U.$ync
							? r.URI.isUri(le.primary.resource) &&
									r.URI.isUri(le.inputResource)
							: !1;
					}
					serialize(le) {
						if (this.canSerialize(le))
							return JSON.stringify({
								resource: le.primary.resource,
								inputResource: le.inputResource,
								name: le.getName(),
								language: le.language,
							});
					}
					deserialize(le, oe) {
						const ae = (0, E.$ii)(oe);
						if (!ae) return;
						const {
							resource: pe,
							inputResource: $e,
							name: ye,
							language: ue,
						} = ae;
						return !r.URI.isUri(pe) || !r.URI.isUri($e)
							? void 0
							: U.$ync.create(le, pe, $e, ye, ue);
					}
				}
				(e.$vJc = se),
					P.$Io.as(M.$a1.EditorFactory).registerEditorSerializer(se.ID, se),
					(0, v.$lK)(z.$wnc, z.$xnc, v.InstantiationType.Delayed),
					(0, v.$lK)(O.$unc, O.$vnc, v.InstantiationType.Delayed),
					(0, f.$4X)(
						class extends f.$3X {
							constructor() {
								super({
									id: "_interactive.open",
									title: (0, o.localize2)(7163, "Open Interactive Window"),
									f1: !1,
									category: ee,
									metadata: {
										description: (0, o.localize)(7153, null),
										args: [
											{
												name: "showOptions",
												description: "Show Options",
												schema: {
													type: "object",
													properties: {
														viewColumn: { type: "number", default: -1 },
														preserveFocus: { type: "boolean", default: !0 },
													},
												},
											},
											{
												name: "resource",
												description: "Interactive resource Uri",
												isOptional: !0,
											},
											{
												name: "controllerId",
												description: "Notebook controller Id",
												isOptional: !0,
											},
											{
												name: "title",
												description: "Notebook editor title",
												isOptional: !0,
											},
										],
									},
								});
							}
							async run(re, le, oe, ae, pe) {
								const $e = re.get(Y.$IY),
									ye = re.get(W.$EY),
									ue = re.get(z.$wnc),
									fe = re.get(G.$f6),
									me = re.get(T.$ik),
									ve = re.get(b.$gj),
									ge = (0, J.$a8)(
										ye,
										ve,
										typeof le == "number" ? le : le?.viewColumn,
									),
									be = {
										activation: y.EditorActivation.PRESERVE,
										preserveFocus:
											typeof le != "number" ? (le?.preserveFocus ?? !1) : !1,
									};
								if (oe && (0, d.$lh)(oe) === ".interactive") {
									me.debug(
										"Open interactive window from resource:",
										oe.toString(),
									);
									const Je = r.URI.revive(oe),
										Te = $e
											.findEditors(Je)
											.filter(
												(Ee) =>
													Ee.editor instanceof U.$ync &&
													Ee.editor.resource?.toString() === Je.toString(),
											);
									if (Te.length) {
										me.debug(
											"Find existing interactive window:",
											oe.toString(),
										);
										const Ee = Te[0].editor,
											Ie = Te[0].groupId,
											Se = (await $e.openEditor(Ee, be, Ie))?.getControl();
										return {
											notebookUri: Ee.resource,
											inputUri: Ee.inputResource,
											notebookEditorId: Se?.notebookEditor?.getId(),
										};
									}
								}
								const Ce = new Set();
								$e.getEditors(M.EditorsOrder.SEQUENTIAL).forEach((Je) => {
									Je.editor.resource && Ce.add(Je.editor.resource.toString());
								});
								let Le,
									Fe,
									Oe = 1;
								do
									(Le = r.URI.from({
										scheme: C.Schemas.untitled,
										path: `/Interactive-${Oe}.interactive`,
									})),
										(Fe = r.URI.from({
											scheme: C.Schemas.vscodeInteractiveInput,
											path: `/InteractiveInput-${Oe}`,
										})),
										Oe++;
								while (Ce.has(Le.toString()));
								if (
									(U.$ync.setName(Le, pe),
									me.debug(
										"Open new interactive window:",
										Le.toString(),
										Fe.toString(),
									),
									ae)
								) {
									const Te = fe
										.getMatchingKernel({ uri: Le, notebookType: "interactive" })
										.all.find((Ee) => Ee.id === ae);
									Te &&
										fe.preselectKernelForNotebook(Te, {
											uri: Le,
											notebookType: "interactive",
										});
								}
								ue.clearHistory(Le);
								const xe = { resource: Le, options: be },
									Ke = (await $e.openEditor(xe, ge))?.getControl();
								return (
									me.debug(
										"New interactive window opened. Notebook editor id",
										Ke?.notebookEditor?.getId(),
									),
									{
										notebookUri: Le,
										inputUri: Fe,
										notebookEditorId: Ke?.notebookEditor?.getId(),
									}
								);
							}
						},
					),
					(0, f.$4X)(
						class extends f.$3X {
							constructor() {
								super({
									id: "interactive.execute",
									title: (0, o.localize2)(7164, "Execute Code"),
									category: ee,
									keybinding: [
										{
											when: l.$Kj.equals(
												"activeEditor",
												"workbench.editor.interactive",
											),
											primary: i.KeyMod.CtrlCmd | i.KeyCode.Enter,
											weight: F.$s5b,
										},
										{
											when: l.$Kj.and(
												l.$Kj.equals(
													"activeEditor",
													"workbench.editor.interactive",
												),
												l.$Kj.equals(
													"config.interactiveWindow.executeWithShiftEnter",
													!0,
												),
											),
											primary: i.KeyMod.Shift | i.KeyCode.Enter,
											weight: F.$s5b,
										},
										{
											when: l.$Kj.and(
												l.$Kj.equals(
													"activeEditor",
													"workbench.editor.interactive",
												),
												l.$Kj.equals(
													"config.interactiveWindow.executeWithShiftEnter",
													!1,
												),
											),
											primary: i.KeyCode.Enter,
											weight: F.$s5b,
										},
									],
									menu: [{ id: f.$XX.InteractiveInputExecute }],
									icon: x.$7Nb,
									f1: !1,
									metadata: {
										description: "Execute the Contents of the Input Box",
										args: [
											{
												name: "resource",
												description: "Interactive resource Uri",
												isOptional: !0,
											},
										],
									},
								});
							}
							async run(re, le) {
								const oe = re.get(Y.$IY),
									ae = re.get(u.$rzb),
									pe = re.get(z.$wnc),
									$e = re.get(H.$n5b);
								let ye;
								if (le) {
									const ue = r.URI.revive(le),
										fe = oe.findEditors(ue);
									for (const me of fe)
										if (me.editor.typeId === U.$ync.ID) {
											ye = (
												await oe.openEditor(me.editor, me.groupId)
											)?.getControl();
											break;
										}
								} else ye = oe.activeEditorPane?.getControl();
								if (ye && ye.notebookEditor && ye.codeEditor) {
									const ue = ye.notebookEditor.textModel,
										fe = ye.codeEditor.getModel(),
										ve =
											ye.notebookEditor.activeKernel?.supportedLanguages[0] ??
											h.$0M;
									if (ue && fe) {
										const ge = ue.length,
											be = fe.getValue();
										if ((0, m.$jf)(be)) return;
										pe.replaceLast(ue.uri, be),
											pe.addToHistory(ue.uri, ""),
											fe.setValue("");
										const Ce =
											ye.notebookEditor.notebookOptions.getDisplayOptions()
												.interactiveWindowCollapseCodeCells === "fromEditor"
												? { inputCollapsed: !1, outputCollapsed: !1 }
												: void 0;
										await ae.apply([
											new A.$hJb(ue.uri, {
												editType: q.CellEditType.Replace,
												index: ge,
												count: 0,
												cells: [
													{
														cellKind: q.CellKind.Code,
														mime: void 0,
														language: ve,
														source: be,
														outputs: [],
														metadata: {},
														collapseState: Ce,
													},
												],
											}),
										]);
										const Le = { start: ge, end: ge + 1 };
										ye.notebookEditor.revealCellRangeInView(Le),
											await ye.notebookEditor.executeNotebookCells(
												ye.notebookEditor.getCellsInRange({
													start: ge,
													end: ge + 1,
												}),
											);
										const Fe = $e.getNotebookEditor(ye.notebookEditor.getId());
										Fe && (Fe.setSelections([Le]), Fe.setFocus(Le));
									}
								}
							}
						},
					),
					(0, f.$4X)(
						class extends f.$3X {
							constructor() {
								super({
									id: "interactive.input.clear",
									title: (0, o.localize2)(
										7165,
										"Clear the interactive window input editor contents",
									),
									category: ee,
									f1: !1,
								});
							}
							async run(re) {
								const oe = re.get(Y.$IY).activeEditorPane?.getControl();
								if (oe && oe.notebookEditor && oe.codeEditor) {
									const ae = oe.notebookEditor.textModel,
										pe = oe.codeEditor.getModel(),
										$e = oe.codeEditor.getModel()?.getFullModelRange();
									ae &&
										pe &&
										$e &&
										oe.codeEditor.executeEdits("", [a.$jL.replace($e, null)]);
								}
							}
						},
					),
					(0, f.$4X)(
						class extends f.$3X {
							constructor() {
								super({
									id: "interactive.history.previous",
									title: (0, o.localize2)(7166, "Previous value in history"),
									category: ee,
									f1: !1,
									keybinding: [
										{
											when: l.$Kj.and(
												l.$Kj.equals(
													"activeEditor",
													"workbench.editor.interactive",
												),
												R.$qJc.notEqualsTo("bottom"),
												R.$qJc.notEqualsTo("none"),
												p.$YCb.Visible.toNegated(),
											),
											primary: i.KeyCode.UpArrow,
											weight: I.KeybindingWeight.WorkbenchContrib,
										},
										{
											when: l.$Kj.and(
												l.$Kj.equals("activeEditor", "workbench.editor.repl"),
												R.$qJc.notEqualsTo("bottom"),
												R.$qJc.notEqualsTo("none"),
												p.$YCb.Visible.toNegated(),
											),
											primary: i.KeyCode.UpArrow,
											weight: I.KeybindingWeight.WorkbenchContrib,
										},
									],
								});
							}
							async run(re) {
								const le = re.get(Y.$IY),
									oe = re.get(z.$wnc),
									ae = le.activeEditorPane?.getControl();
								if (ae && ae.notebookEditor && ae.codeEditor) {
									const pe = ae.notebookEditor.textModel,
										$e = ae.codeEditor.getModel();
									if (pe && $e) {
										const ye = oe.getPreviousValue(pe.uri);
										ye && $e.setValue(ye);
									}
								}
							}
						},
					),
					(0, f.$4X)(
						class extends f.$3X {
							constructor() {
								super({
									id: "interactive.history.next",
									title: (0, o.localize2)(7167, "Next value in history"),
									category: ee,
									f1: !1,
									keybinding: [
										{
											when: l.$Kj.and(
												l.$Kj.equals(
													"activeEditor",
													"workbench.editor.interactive",
												),
												R.$qJc.notEqualsTo("top"),
												R.$qJc.notEqualsTo("none"),
												p.$YCb.Visible.toNegated(),
											),
											primary: i.KeyCode.DownArrow,
											weight: I.KeybindingWeight.WorkbenchContrib,
										},
										{
											when: l.$Kj.and(
												l.$Kj.equals("activeEditor", "workbench.editor.repl"),
												R.$qJc.notEqualsTo("top"),
												R.$qJc.notEqualsTo("none"),
												p.$YCb.Visible.toNegated(),
											),
											primary: i.KeyCode.DownArrow,
											weight: I.KeybindingWeight.WorkbenchContrib,
										},
									],
								});
							}
							async run(re) {
								const le = re.get(Y.$IY),
									oe = re.get(z.$wnc),
									ae = le.activeEditorPane?.getControl();
								if (ae && ae.notebookEditor && ae.codeEditor) {
									const pe = ae.notebookEditor.textModel,
										$e = ae.codeEditor.getModel();
									if (pe && $e) {
										const ye = oe.getNextValue(pe.uri);
										ye !== null && $e.setValue(ye);
									}
								}
							}
						},
					),
					(0, f.$4X)(
						class extends f.$3X {
							constructor() {
								super({
									id: "interactive.scrollToTop",
									title: (0, o.localize)(7154, null),
									keybinding: {
										when: l.$Kj.equals(
											"activeEditor",
											"workbench.editor.interactive",
										),
										primary: i.KeyMod.CtrlCmd | i.KeyCode.Home,
										mac: { primary: i.KeyMod.CtrlCmd | i.KeyCode.UpArrow },
										weight: I.KeybindingWeight.WorkbenchContrib,
									},
									category: ee,
								});
							}
							async run(re) {
								const oe = re.get(Y.$IY).activeEditorPane?.getControl();
								if (oe && oe.notebookEditor && oe.codeEditor) {
									if (oe.notebookEditor.getLength() === 0) return;
									oe.notebookEditor.revealCellRangeInView({ start: 0, end: 1 });
								}
							}
						},
					),
					(0, f.$4X)(
						class extends f.$3X {
							constructor() {
								super({
									id: "interactive.scrollToBottom",
									title: (0, o.localize)(7155, null),
									keybinding: {
										when: l.$Kj.equals(
											"activeEditor",
											"workbench.editor.interactive",
										),
										primary: i.KeyMod.CtrlCmd | i.KeyCode.End,
										mac: { primary: i.KeyMod.CtrlCmd | i.KeyCode.DownArrow },
										weight: I.KeybindingWeight.WorkbenchContrib,
									},
									category: ee,
								});
							}
							async run(re) {
								const oe = re.get(Y.$IY).activeEditorPane?.getControl();
								if (oe && oe.notebookEditor && oe.codeEditor) {
									if (oe.notebookEditor.getLength() === 0) return;
									const ae = oe.notebookEditor.getLength();
									oe.notebookEditor.revealCellRangeInView({
										start: ae - 1,
										end: ae,
									});
								}
							}
						},
					),
					(0, f.$4X)(
						class extends f.$3X {
							constructor() {
								super({
									id: "interactive.input.focus",
									title: (0, o.localize2)(7168, "Focus Input Editor"),
									category: ee,
									menu: { id: f.$XX.CommandPalette, when: V.$lJb },
									precondition: V.$lJb,
								});
							}
							async run(re) {
								const le = re.get(Y.$IY),
									oe = le.activeEditorPane?.getControl();
								if (oe && oe.notebookEditor && oe.codeEditor)
									le.activeEditorPane?.focus();
								else {
									const ae = le.getEditors(M.EditorsOrder.MOST_RECENTLY_ACTIVE),
										pe = t.Iterable.find(
											ae,
											($e) => $e.editor.typeId === U.$ync.ID,
										);
									if (pe) {
										const $e = pe.editor,
											ye = pe.groupId,
											fe = (await le.openEditor($e, ye))?.getControl();
										fe &&
											fe.notebookEditor &&
											fe.codeEditor &&
											le.activeEditorPane?.focus();
									}
								}
							}
						},
					),
					(0, f.$4X)(
						class extends f.$3X {
							constructor() {
								super({
									id: "interactive.history.focus",
									title: (0, o.localize2)(7169, "Focus History"),
									category: ee,
									menu: {
										id: f.$XX.CommandPalette,
										when: l.$Kj.equals(
											"activeEditor",
											"workbench.editor.interactive",
										),
									},
									precondition: l.$Kj.equals(
										"activeEditor",
										"workbench.editor.interactive",
									),
								});
							}
							async run(re) {
								const oe = re.get(Y.$IY).activeEditorPane?.getControl();
								oe &&
									oe.notebookEditor &&
									oe.codeEditor &&
									oe.notebookEditor.focus();
							}
						},
					),
					(0, k.$wP)(
						"interactive.activeCodeBorder",
						{
							dark: (0, k.$EP)(g.$aNb, g.$aNb, "#007acc"),
							light: (0, k.$EP)(g.$aNb, g.$aNb, "#007acc"),
							hcDark: k.$OP,
							hcLight: k.$OP,
						},
						(0, o.localize)(7156, null),
					),
					(0, k.$wP)(
						"interactive.inactiveCodeBorder",
						{
							dark: (0, k.$EP)(k.$HS, k.$HS, "#37373D"),
							light: (0, k.$EP)(k.$HS, k.$HS, "#E4E6F1"),
							hcDark: N.$rFb,
							hcLight: N.$rFb,
						},
						(0, o.localize)(7157, null),
					),
					P.$Io
						.as(s.$No.Configuration)
						.registerConfiguration({
							id: "interactiveWindow",
							order: 100,
							type: "object",
							properties: {
								[R.$rJc.interactiveWindowAlwaysScrollOnNewCell]: {
									type: "boolean",
									default: !0,
									markdownDescription: (0, o.localize)(7158, null),
								},
								[q.$56.InteractiveWindowPromptToSave]: {
									type: "boolean",
									default: !1,
									markdownDescription: (0, o.localize)(7159, null),
								},
								[R.$rJc.executeWithShiftEnter]: {
									type: "boolean",
									default: !1,
									markdownDescription: (0, o.localize)(7160, null),
									tags: ["replExecute"],
								},
								[R.$rJc.showExecutionHint]: {
									type: "boolean",
									default: !0,
									markdownDescription: (0, o.localize)(7161, null),
									tags: ["replExecute"],
								},
							},
						});
			},
		),
		
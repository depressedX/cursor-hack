define(
		de[4106],
		he([
			1, 0, 23, 3, 197, 19, 28, 9, 585, 64, 67, 61, 42, 4, 81, 102, 20, 5, 52,
			30, 192, 55, 44, 1360, 360, 161, 4091, 70, 18, 155, 509, 1305, 1361, 992,
			3473, 991, 3093, 293, 4105, 250, 6, 706, 3912, 243, 3119, 53, 403, 10, 73,
			66, 3311, 1255, 1306, 38, 3472, 3531, 611, 3114, 3433, 172, 190, 69, 1323,
			65, 3115, 557, 3094, 372, 3832, 412, 3558, 3560, 1830, 1320, 1319, 238,
			1846, 4089, 4090, 3534, 1957, 1845, 3470, 1031, 4087, 3984, 3493, 3494,
			3909, 1926, 3481, 3495, 3489, 1956, 1958, 3469, 3487, 3117, 1062, 4088,
			3491, 3492, 4093, 3490, 3488, 3468, 4101, 3750, 3432, 4100, 3497, 4104,
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
			ee,
			_,
			te,
			Q,
			Z,
			se,
			re,
			le,
			oe,
			ae,
			pe,
			$e,
			ye,
			ue,
			fe,
			me,
			ve,
			ge,
			be,
			Ce,
			Le,
			Fe,
		) {
			"use strict";
			var Oe;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$tIc = void 0),
				(c = mt(c)),
				(fe = xi(fe)),
				b.$Io
					.as(y.$a1.EditorPane)
					.registerEditorPane(
						s.$vVb.create($.$B4b, $.$B4b.ID, "Notebook Editor"),
						[new g.$Ji(v.$TIb)],
					),
				b.$Io
					.as(y.$a1.EditorPane)
					.registerEditorPane(
						s.$vVb.create(M.$kFc, M.$kFc.ID, "Notebook Diff Editor"),
						[new g.$Ji(D.$rEc)],
					),
				b.$Io
					.as(y.$a1.EditorPane)
					.registerEditorPane(
						s.$vVb.create(Le.$JGc, Le.$JGc.ID, "Notebook Diff Editor"),
						[new g.$Ji(Fe.$2Ec)],
					);
			let xe = class {
				constructor(Re) {
					this.a = Re;
				}
				canSerialize() {
					return !0;
				}
				serialize(Re) {
					return (
						(0, C.$vg)(Re instanceof D.$rEc),
						JSON.stringify({
							resource: Re.resource,
							originalResource: Re.original.resource,
							name: Re.getName(),
							originalName: Re.original.getName(),
							textDiffName: Re.getName(),
							viewType: Re.viewType,
						})
					);
				}
				deserialize(Re, je) {
					const Ve = (0, w.$ii)(je);
					if (!Ve) return;
					const {
						resource: Ze,
						originalResource: et,
						name: rt,
						viewType: ft,
					} = Ve;
					if (
						!(
							!Ve ||
							!d.URI.isUri(Ze) ||
							!d.URI.isUri(et) ||
							typeof rt != "string" ||
							typeof ft != "string"
						)
					)
						return this.a.getValue("notebook.experimental.enableNewDiffEditor")
							? Fe.$2Ec.create(Re, Ze, rt, void 0, et, ft)
							: D.$rEc.create(Re, Ze, rt, void 0, et, ft);
				}
				static canResolveBackup(Re, je) {
					return !1;
				}
			};
			xe = Ne([j(0, J.$gj)], xe);
			class He {
				canSerialize(Re) {
					return Re.typeId === v.$TIb.ID;
				}
				serialize(Re) {
					(0, C.$vg)(Re instanceof v.$TIb);
					const je = {
						resource: Re.resource,
						preferredResource: Re.preferredResource,
						viewType: Re.viewType,
						options: Re.options,
					};
					return JSON.stringify(je);
				}
				deserialize(Re, je) {
					const Ve = (0, w.$ii)(je);
					if (!Ve) return;
					const {
						resource: Ze,
						preferredResource: et,
						viewType: rt,
						options: ft,
					} = Ve;
					return !Ve || !d.URI.isUri(Ze) || typeof rt != "string"
						? void 0
						: v.$TIb.getOrCreate(Re, Ze, et, rt, ft);
				}
			}
			b.$Io.as(y.$a1.EditorFactory).registerEditorSerializer(v.$TIb.ID, He),
				b.$Io.as(y.$a1.EditorFactory).registerEditorSerializer(D.$rEc.ID, xe);
			let Ke = class extends i.$1c {
				static {
					Oe = this;
				}
				static {
					this.ID = "workbench.contrib.notebook";
				}
				constructor(Re, je, Ve) {
					super(),
						(this.b = Ve),
						this.c(je, Re),
						this.D(
							je.onDidChangeConfiguration((Ze) => {
								Ze.affectsConfiguration(T.$56.undoRedoPerCell) &&
									this.c(je, Re);
							}),
						),
						this.b.registerDecorationType("comment-controller", ae.$m3b, {});
				}
				c(Re, je) {
					const Ve = Re.getValue(T.$56.undoRedoPerCell);
					Ve
						? (this.a?.dispose(), (this.a = void 0))
						: this.a ||
							(this.a = je.registerUriComparisonKeyComputer(T.CellUri.scheme, {
								getComparisonKey: (Ze) => (Ve ? Ze.toString() : Oe.f(Ze)),
							}));
				}
				static f(Re) {
					const je = T.CellUri.parse(Re);
					return je ? je.notebook.toString() : Re.toString();
				}
				dispose() {
					super.dispose(), this.a?.dispose();
				}
			};
			(e.$tIc = Ke),
				(e.$tIc = Ke = Oe = Ne([j(0, k.$GN), j(1, J.$gj), j(2, pe.$dtb)], Ke));
			let Je = class {
				static {
					this.ID = "workbench.contrib.cellContentProvider";
				}
				constructor(Re, je, Ve, Ze) {
					(this.b = je),
						(this.c = Ve),
						(this.d = Ze),
						(this.a = Re.registerTextModelContentProvider(
							T.CellUri.scheme,
							this,
						));
				}
				dispose() {
					this.a.dispose();
				}
				async provideTextContent(Re) {
					const je = this.b.getModel(Re);
					if (je) return je;
					const Ve = T.CellUri.parse(Re);
					if (!Ve) return null;
					const Ze = await this.d.resolve(Ve.notebook);
					let et = null;
					if (!Ze.object.isResolved()) return null;
					for (const ft of Ze.object.notebook.cells)
						if (ft.uri.toString() === Re.toString()) {
							const bt = {
									create: (ct) => {
										const gt =
											ct === r.DefaultEndOfLine.CRLF
												? `\r
`
												: `
`;
										return (
											ft.textBuffer.setEOL(gt),
											{ textBuffer: ft.textBuffer, disposable: i.$1c.None }
										);
									},
									getFirstLineText: (ct) =>
										ft.textBuffer.getLineContent(1).substring(0, ct),
								},
								nt = this.c.getLanguageIdByLanguageName(ft.language),
								lt = nt
									? this.c.createById(nt)
									: ft.cellKind === T.CellKind.Markup
										? this.c.createById("markdown")
										: this.c.createByFilepathOrFirstLine(
												Re,
												ft.textBuffer.getLineContent(1),
											);
							et = this.b.createModel(bt, lt, Re);
							break;
						}
					if (!et) return Ze.dispose(), null;
					const rt = F.Event.any(
						et.onWillDispose,
						Ze.object.notebook.onWillDispose,
					)(() => {
						rt.dispose(), Ze.dispose();
					});
					return et;
				}
			};
			Je = Ne([j(0, h.$MO), j(1, u.$QO), j(2, a.$nM), j(3, L.$OIb)], Je);
			let Te = class {
				static {
					this.ID = "workbench.contrib.cellInfoContentProvider";
				}
				constructor(Re, je, Ve, Ze, et) {
					(this.b = je),
						(this.c = Ve),
						(this.d = Ze),
						(this.f = et),
						(this.a = []),
						this.a.push(
							Re.registerTextModelContentProvider(
								t.Schemas.vscodeNotebookCellMetadata,
								{
									provideTextContent:
										this.provideMetadataTextContent.bind(this),
								},
							),
						),
						this.a.push(
							Re.registerTextModelContentProvider(
								t.Schemas.vscodeNotebookCellOutput,
								{
									provideTextContent: this.provideOutputTextContent.bind(this),
								},
							),
						),
						this.a.push(
							this.d.registerFormatter({
								scheme: t.Schemas.vscodeNotebookCellMetadata,
								formatting: { label: "${path} (metadata)", separator: "/" },
							}),
						),
						this.a.push(
							this.d.registerFormatter({
								scheme: t.Schemas.vscodeNotebookCellOutput,
								formatting: { label: "${path} (output)", separator: "/" },
							}),
						);
				}
				dispose() {
					(0, i.$Vc)(this.a);
				}
				async provideMetadataTextContent(Re) {
					const je = this.b.getModel(Re);
					if (je) return je;
					const Ve = T.CellUri.parseCellPropertyUri(
						Re,
						t.Schemas.vscodeNotebookCellMetadata,
					);
					if (!Ve) return null;
					const Ze = await this.f.resolve(Ve.notebook);
					let et = null;
					const rt = this.c.createById("json"),
						ft = new i.$Zc();
					for (const nt of Ze.object.notebook.cells)
						if (nt.handle === Ve.handle) {
							const lt = Ze.object.notebook.cells.indexOf(nt),
								ct = (0, x.$UEc)(Ze.object.notebook, nt.metadata, nt.language);
							(et = this.b.createModel(ct, rt, Re)),
								this.a.push(
									ft.add(
										Ze.object.notebook.onDidChangeContent((gt) => {
											if (
												et &&
												gt.rawEvents.some(
													(ht) =>
														(ht.kind ===
															T.NotebookCellsChangeType.ChangeCellMetadata ||
															ht.kind ===
																T.NotebookCellsChangeType.ChangeCellLanguage) &&
														ht.index === lt,
												)
											) {
												const ht = (0, x.$UEc)(
													Ze.object.notebook,
													nt.metadata,
													nt.language,
												);
												et.getValue() !== ht &&
													et.setValue(
														(0, x.$UEc)(
															Ze.object.notebook,
															nt.metadata,
															nt.language,
														),
													);
											}
										}),
									),
								);
							break;
						}
					if (!et) return Ze.dispose(), null;
					const bt = et.onWillDispose(() => {
						ft.dispose(), bt.dispose(), Ze.dispose();
					});
					return et;
				}
				g(Re) {
					if (!Re) return;
					const je = (0, x.$VEc)(Re.outputs);
					if (je) return { content: je, mode: this.c.createById(re.$0M) };
				}
				h(Re, je) {
					let Ve;
					const Ze = this.c.createById("json"),
						et = je.outputs.find(
							(nt) =>
								nt.outputId === Re.outputId ||
								nt.alternativeOutputId === Re.outputId,
						),
						rt = this.g(et);
					if (rt) return (Ve = rt), Ve;
					const ft = je.outputs.map((nt) => ({
						metadata: nt.metadata,
						outputItems: nt.outputs.map((lt) => ({
							mimeType: lt.mime,
							data: lt.data.toString(),
						})),
					}));
					return (Ve = { content: (0, m.$no)(ft, {}), mode: Ze }), Ve;
				}
				async provideOutputsTextContent(Re) {
					const je = this.b.getModel(Re);
					if (je) return je;
					const Ve = T.CellUri.parseCellPropertyUri(
						Re,
						t.Schemas.vscodeNotebookCellOutput,
					);
					if (!Ve) return null;
					const Ze = await this.f.resolve(Ve.notebook),
						et = Ze.object.notebook.cells.find((lt) => lt.handle === Ve.handle);
					if (!et) return Ze.dispose(), null;
					const rt = this.c.createById("json"),
						ft = this.b.createModel((0, x.$WEc)(et.outputs || []), rt, Re, !0),
						bt = F.Event.any(
							et.onDidChangeOutputs ?? F.Event.None,
							et.onDidChangeOutputItems ?? F.Event.None,
						)(() => {
							ft.setValue((0, x.$WEc)(et.outputs || []));
						}),
						nt = ft.onWillDispose(() => {
							nt.dispose(), bt.dispose(), Ze.dispose();
						});
					return ft;
				}
				async provideOutputTextContent(Re) {
					const je = this.b.getModel(Re);
					if (je) return je;
					const Ve = T.CellUri.parseCellOutputUri(Re);
					if (!Ve) return this.provideOutputsTextContent(Re);
					const Ze = await this.f.resolve(Ve.notebook),
						et = Ze.object.notebook.cells.find(
							(lt) =>
								!!lt.outputs.find(
									(ct) =>
										ct.outputId === Ve.outputId ||
										ct.alternativeOutputId === Ve.outputId,
								),
						);
					if (!et) return Ze.dispose(), null;
					const rt = this.h(Ve, et);
					if (!rt) return Ze.dispose(), null;
					const ft = this.b.createModel(rt.content, rt.mode, Re),
						bt = F.Event.any(
							et.onDidChangeOutputs ?? F.Event.None,
							et.onDidChangeOutputItems ?? F.Event.None,
						)(() => {
							const lt = this.h(Ve, et);
							lt &&
								(ft.setValue(lt.content), ft.setLanguage(lt.mode.languageId));
						}),
						nt = ft.onWillDispose(() => {
							nt.dispose(), bt.dispose(), Ze.dispose();
						});
					return ft;
				}
			};
			Te = Ne(
				[j(0, h.$MO), j(1, u.$QO), j(2, a.$nM), j(3, W.$3N), j(4, L.$OIb)],
				Te,
			);
			class Ee extends i.$1c {
				static {
					this.ID = "workbench.contrib.registerCellSchemas";
				}
				constructor() {
					super(), this.a();
				}
				a() {
					const Re = b.$Io.as(z.$Jo.JSONContribution),
						je = {
							properties: {
								language: {
									type: "string",
									description: "The language for the cell",
								},
							},
							additionalProperties: !0,
							allowTrailingCommas: !0,
							allowComments: !0,
						};
					Re.registerSchema("vscode://schemas/notebook/cellmetadata", je);
				}
			}
			let Ie = class {
				static {
					this.ID = "workbench.contrib.notebookEditorManager";
				}
				constructor(Re, je, Ve) {
					(this.b = Re),
						(this.c = je),
						(this.a = new i.$Zc()),
						this.a.add(
							F.Event.debounce(
								this.c.onDidChangeDirty,
								(Ze, et) => (Ze ? [...Ze, et] : [et]),
								100,
							)(this.d, this),
						),
						this.a.add(
							je.onWillFailWithConflict((Ze) => {
								for (const et of Ve.groups) {
									const rt = et.editors.filter(
											(bt) =>
												bt instanceof v.$TIb &&
												bt.viewType !== Ze.viewType &&
												(0, E.$gh)(bt.resource, Ze.resource),
										),
										ft = et.closeEditors(rt);
									Ze.waitUntil(ft);
								}
							}),
						);
				}
				dispose() {
					this.a.dispose();
				}
				d(Re) {
					const je = [];
					for (const Ve of Re)
						Ve.isDirty() &&
							!this.b.isOpened({
								resource: Ve.resource,
								typeId: v.$TIb.ID,
								editorId: Ve.viewType,
							}) &&
							(0, E.$lh)(Ve.resource) !== ".interactive" &&
							je.push({
								resource: Ve.resource,
								options: {
									inactive: !0,
									preserveFocus: !0,
									pinned: !0,
									override: Ve.viewType,
								},
							});
					je.length > 0 && this.b.openEditors(je);
				}
			};
			Ie = Ne([j(0, P.$IY), j(1, L.$OIb), j(2, X.$EY)], Ie);
			let Be = class extends i.$1c {
				static {
					this.ID = "workbench.contrib.simpleNotebookWorkingCopyEditorHandler";
				}
				constructor(Re, je, Ve, Ze) {
					super(),
						(this.a = Re),
						(this.b = je),
						(this.c = Ve),
						(this.f = Ze),
						this.h();
				}
				async handles(Re) {
					const je = this.g(Re);
					return je ? this.f.canResolve(je) : !1;
				}
				g(Re) {
					const je = this.j(Re);
					if (
						!(
							!je ||
							je === "interactive" ||
							(0, E.$lh)(Re.resource) === ".replNotebook"
						)
					)
						return je;
				}
				isOpen(Re, je) {
					return this.g(Re)
						? je instanceof v.$TIb &&
								je.viewType === this.j(Re) &&
								(0, E.$gh)(Re.resource, je.resource)
						: !1;
				}
				createEditor(Re) {
					return v.$TIb.getOrCreate(this.a, Re.resource, void 0, this.j(Re));
				}
				async h() {
					await this.c.whenInstalledExtensionsRegistered(),
						this.D(this.b.registerHandler(this));
				}
				j(Re) {
					return T.$66.parse(Re.typeId);
				}
			};
			Be = Ne([j(0, o.$Li), j(1, K.$bZ), j(2, G.$q2), j(3, S.$MIb)], Be);
			let Se = class {
				static {
					this.ID = "workbench.contrib.notebookLanguageSelectorScoreRefine";
				}
				constructor(Re, je) {
					(this.a = Re), je.setNotebookTypeResolver(this.b.bind(this));
				}
				b(Re) {
					const je = T.CellUri.parse(Re);
					if (!je) return;
					const Ve = this.a.getNotebookTextModel(je.notebook);
					if (Ve) return { uri: Ve.uri, type: Ve.viewType };
				}
			};
			Se = Ne([j(0, S.$MIb), j(1, oe.$k3)], Se);
			const ke = b.$Io.as(l.Extensions.Workbench);
			(0, l.$s6)(Ke.ID, Ke, l.WorkbenchPhase.BlockStartup),
				(0, l.$s6)(Je.ID, Je, l.WorkbenchPhase.BlockStartup),
				(0, l.$s6)(Te.ID, Te, l.WorkbenchPhase.BlockStartup),
				(0, l.$s6)(Ee.ID, Ee, l.WorkbenchPhase.BlockStartup),
				(0, l.$s6)(Ie.ID, Ie, l.WorkbenchPhase.BlockRestore),
				(0, l.$s6)(Se.ID, Se, l.WorkbenchPhase.BlockRestore),
				(0, l.$s6)(Be.ID, Be, l.WorkbenchPhase.BlockRestore),
				ke.registerWorkbenchContribution(me.$mIc, f.LifecyclePhase.Eventually),
				ve.$Whc.register(new be.$qIc()),
				ve.$Whc.register(new ge.$nIc()),
				(0, p.$lK)(S.$MIb, I.$6Ec, p.InstantiationType.Delayed),
				(0, p.$lK)(N.$A4b, A.$nFc, p.InstantiationType.Delayed),
				(0, p.$lK)(L.$OIb, H.$qFc, p.InstantiationType.Delayed),
				(0, p.$lK)(R.$Bpc, O.$oFc, p.InstantiationType.Delayed),
				(0, p.$lK)(B.$n5b, U.$pFc, p.InstantiationType.Delayed),
				(0, p.$lK)(q.$f6, V.$rFc, p.InstantiationType.Delayed),
				(0, p.$lK)(q.$g6, $e.$RGc, p.InstantiationType.Delayed),
				(0, p.$lK)(Q.$c6, te.$LGc, p.InstantiationType.Delayed),
				(0, p.$lK)(le.$d6, _.$KGc, p.InstantiationType.Delayed),
				(0, p.$lK)(ie.$Q2b, Y.$sFc, p.InstantiationType.Delayed),
				(0, p.$lK)(Z.$MGc, se.$PGc, p.InstantiationType.Delayed),
				(0, p.$lK)(ye.$P2b, ue.$SGc, p.InstantiationType.Delayed),
				(0, p.$lK)(ne.$G4b, ne.$H4b, p.InstantiationType.Delayed);
			const Ue = {};
			function qe(De) {
				return typeof De.type < "u" || typeof De.anyOf < "u";
			}
			for (const De of ee.editorOptionsRegistry) {
				const Re = De.schema;
				if (Re)
					if (qe(Re)) Ue[`editor.${De.name}`] = Re;
					else
						for (const je in Re)
							Object.hasOwnProperty.call(Re, je) && (Ue[je] = Re[je]);
			}
			const Ae = {
				description: c.localize(8012, null),
				default: {},
				allOf: [{ properties: Ue }],
				tags: ["notebookLayout"],
			};
			b.$Io
				.as(n.$No.Configuration)
				.registerConfiguration({
					id: "notebook",
					order: 100,
					title: c.localize(8013, null),
					type: "object",
					properties: {
						[T.$56.displayOrder]: {
							description: c.localize(8014, null),
							type: "array",
							items: { type: "string" },
							default: [],
						},
						[T.$56.cellToolbarLocation]: {
							description: c.localize(8015, null),
							type: "object",
							additionalProperties: {
								markdownDescription: c.localize(8016, null),
								type: "string",
								enum: ["left", "right", "hidden"],
							},
							default: { default: "right" },
							tags: ["notebookLayout"],
						},
						[T.$56.showCellStatusBar]: {
							description: c.localize(8017, null),
							type: "string",
							enum: ["hidden", "visible", "visibleAfterExecute"],
							enumDescriptions: [
								c.localize(8018, null),
								c.localize(8019, null),
								c.localize(8020, null),
							],
							default: "visible",
							tags: ["notebookLayout"],
						},
						[T.$56.textDiffEditorPreview]: {
							description: c.localize(8021, null),
							type: "boolean",
							default: !0,
							tags: ["notebookLayout"],
						},
						[T.$56.diffOverviewRuler]: {
							description: c.localize(8022, null),
							type: "boolean",
							default: !1,
							tags: ["notebookLayout"],
						},
						[T.$56.cellToolbarVisibility]: {
							markdownDescription: c.localize(8023, null),
							type: "string",
							enum: ["hover", "click"],
							default: "click",
							tags: ["notebookLayout"],
						},
						[T.$56.undoRedoPerCell]: {
							description: c.localize(8024, null),
							type: "boolean",
							default: !0,
							tags: ["notebookLayout"],
						},
						[T.$56.compactView]: {
							description: c.localize(8025, null),
							type: "boolean",
							default: !0,
							tags: ["notebookLayout"],
						},
						[T.$56.focusIndicator]: {
							description: c.localize(8026, null),
							type: "string",
							enum: ["border", "gutter"],
							default: "gutter",
							tags: ["notebookLayout"],
						},
						[T.$56.insertToolbarLocation]: {
							description: c.localize(8027, null),
							type: "string",
							enum: ["betweenCells", "notebookToolbar", "both", "hidden"],
							enumDescriptions: [
								c.localize(8028, null),
								c.localize(8029, null),
								c.localize(8030, null),
								c.localize(8031, null),
							],
							default: "both",
							tags: ["notebookLayout"],
						},
						[T.$56.globalToolbar]: {
							description: c.localize(8032, null),
							type: "boolean",
							default: !0,
							tags: ["notebookLayout"],
						},
						[T.$56.stickyScrollEnabled]: {
							description: c.localize(8033, null),
							type: "boolean",
							default: !1,
							tags: ["notebookLayout"],
						},
						[T.$56.stickyScrollMode]: {
							description: c.localize(8034, null),
							type: "string",
							enum: ["flat", "indented"],
							enumDescriptions: [
								c.localize(8035, null),
								c.localize(8036, null),
							],
							default: "indented",
							tags: ["notebookLayout"],
						},
						[T.$56.consolidatedOutputButton]: {
							description: c.localize(8037, null),
							type: "boolean",
							default: !0,
							tags: ["notebookLayout"],
						},
						[T.$56.showFoldingControls]: {
							description: c.localize(8038, null),
							type: "string",
							enum: ["always", "never", "mouseover"],
							enumDescriptions: [
								c.localize(8039, null),
								c.localize(8040, null),
								c.localize(8041, null),
							],
							default: "mouseover",
							tags: ["notebookLayout"],
						},
						[T.$56.dragAndDropEnabled]: {
							description: c.localize(8042, null),
							type: "boolean",
							default: !0,
							tags: ["notebookLayout"],
						},
						[T.$56.consolidatedRunButton]: {
							description: c.localize(8043, null),
							type: "boolean",
							default: !1,
							tags: ["notebookLayout"],
						},
						[T.$56.globalToolbarShowLabel]: {
							description: c.localize(8044, null),
							type: "string",
							enum: ["always", "never", "dynamic"],
							default: "always",
							tags: ["notebookLayout"],
						},
						[T.$56.textOutputLineLimit]: {
							markdownDescription: c.localize(
								8045,
								null,
								"`#notebook.output.scrolling#`",
							),
							type: "number",
							default: 30,
							tags: ["notebookLayout", "notebookOutputLayout"],
							minimum: 1,
						},
						[T.$56.LinkifyOutputFilePaths]: {
							description: c.localize(8046, null),
							type: "boolean",
							default: !0,
							tags: ["notebookOutputLayout"],
						},
						[T.$56.minimalErrorRendering]: {
							description: c.localize(8047, null),
							type: "boolean",
							default: !1,
							tags: ["notebookOutputLayout"],
						},
						[T.$56.markupFontSize]: {
							markdownDescription: c.localize(
								8048,
								null,
								"`0`",
								"`#editor.fontSize#`",
							),
							type: "number",
							default: 0,
							tags: ["notebookLayout"],
						},
						[T.$56.markdownLineHeight]: {
							markdownDescription: c.localize(8049, null, "`0`", "`normal`"),
							type: "number",
							default: 0,
							tags: ["notebookLayout"],
						},
						[T.$56.cellEditorOptionsCustomizations]: Ae,
						[T.$56.interactiveWindowCollapseCodeCells]: {
							markdownDescription: c.localize(8050, null),
							type: "string",
							enum: ["always", "never", "fromEditor"],
							default: "fromEditor",
						},
						[T.$56.outputLineHeight]: {
							markdownDescription: c.localize(8051, null),
							type: "number",
							default: 0,
							tags: ["notebookLayout", "notebookOutputLayout"],
						},
						[T.$56.outputFontSize]: {
							markdownDescription: c.localize(
								8052,
								null,
								"`#editor.fontSize#`",
							),
							type: "number",
							default: 0,
							tags: ["notebookLayout", "notebookOutputLayout"],
						},
						[T.$56.outputFontFamily]: {
							markdownDescription: c.localize(
								8053,
								null,
								"`#editor.fontFamily#`",
							),
							type: "string",
							tags: ["notebookLayout", "notebookOutputLayout"],
						},
						[T.$56.outputScrolling]: {
							markdownDescription: c.localize(8054, null),
							type: "boolean",
							tags: ["notebookLayout", "notebookOutputLayout"],
							default:
								typeof fe.default.quality == "string" &&
								fe.default.quality !== "stable",
						},
						[T.$56.outputWordWrap]: {
							markdownDescription: c.localize(8055, null),
							type: "boolean",
							tags: ["notebookLayout", "notebookOutputLayout"],
							default: !1,
						},
						[T.$56.defaultFormatter]: {
							description: c.localize(8056, null),
							type: ["string", "null"],
							default: null,
							enum: Ce.$sIc.extensionIds,
							enumItemLabels: Ce.$sIc.extensionItemLabels,
							markdownEnumDescriptions: Ce.$sIc.extensionDescriptions,
						},
						[T.$56.formatOnSave]: {
							markdownDescription: c.localize(8057, null),
							type: "boolean",
							tags: ["notebookLayout"],
							default: !1,
						},
						[T.$56.insertFinalNewline]: {
							markdownDescription: c.localize(8058, null),
							type: "boolean",
							tags: ["notebookLayout"],
							default: !1,
						},
						[T.$56.formatOnCellExecution]: {
							markdownDescription: c.localize(8059, null),
							type: "boolean",
							default: !1,
						},
						[T.$56.confirmDeleteRunningCell]: {
							markdownDescription: c.localize(8060, null),
							type: "boolean",
							default: !0,
						},
						[T.$56.findFilters]: {
							markdownDescription: c.localize(8061, null),
							type: "object",
							properties: {
								markupSource: { type: "boolean", default: !0 },
								markupPreview: { type: "boolean", default: !0 },
								codeSource: { type: "boolean", default: !0 },
								codeOutput: { type: "boolean", default: !0 },
							},
							default: {
								markupSource: !0,
								markupPreview: !0,
								codeSource: !0,
								codeOutput: !0,
							},
							tags: ["notebookLayout"],
						},
						[T.$56.remoteSaving]: {
							markdownDescription: c.localize(8062, null),
							type: "boolean",
							default:
								typeof fe.default.quality == "string" &&
								fe.default.quality !== "stable",
							tags: ["experimental"],
						},
						[T.$56.scrollToRevealCell]: {
							markdownDescription: c.localize(
								8063,
								null,
								"notebook.cell.executeAndSelectBelow",
							),
							type: "string",
							enum: ["fullCell", "firstLine", "none"],
							markdownEnumDescriptions: [
								c.localize(8064, null),
								c.localize(8065, null),
								c.localize(8066, null),
							],
							default: "fullCell",
						},
						[T.$56.cellGenerate]: {
							markdownDescription: c.localize(8067, null),
							type: "boolean",
							default:
								typeof fe.default.quality == "string" &&
								fe.default.quality !== "stable",
							tags: ["experimental"],
						},
						[T.$56.notebookVariablesView]: {
							markdownDescription: c.localize(8068, null),
							type: "boolean",
							default: !1,
						},
						[T.$56.cellFailureDiagnostics]: {
							markdownDescription: c.localize(8069, null),
							type: "boolean",
							default: !0,
						},
						[T.$56.outputBackupSizeLimit]: {
							markdownDescription: c.localize(8070, null),
							type: "number",
							default: 1e4,
						},
					},
				});
		},
	),
		
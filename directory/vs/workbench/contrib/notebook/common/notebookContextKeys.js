define(de[176], he([1, 0, 8, 70]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$YJb =
					e.$XJb =
					e.$WJb =
					e.$VJb =
					e.$UJb =
					e.$TJb =
					e.$SJb =
					e.$RJb =
					e.$QJb =
					e.$PJb =
					e.$OJb =
					e.$NJb =
					e.$MJb =
					e.$LJb =
					e.$KJb =
					e.$JJb =
					e.$IJb =
					e.$HJb =
					e.$GJb =
					e.$FJb =
					e.$EJb =
					e.$DJb =
					e.$CJb =
					e.$BJb =
					e.$AJb =
					e.$zJb =
					e.$yJb =
					e.$xJb =
					e.$wJb =
					e.$vJb =
					e.$uJb =
					e.$tJb =
					e.$sJb =
					e.$rJb =
					e.$qJb =
					e.$pJb =
					e.$oJb =
					e.$nJb =
					e.$mJb =
					e.$lJb =
					e.$kJb =
					e.$jJb =
						void 0),
				(e.$jJb = new t.$5j("userHasOpenedNotebook", !1)),
				(e.$kJb = new t.$5j("notebookFindWidgetFocused", !1)),
				(e.$lJb = new t.$5j("interactiveWindowOpen", !1)),
				(e.$mJb = t.$Kj.equals("activeEditor", i.$O6)),
				(e.$nJb = t.$Kj.equals("activeEditor", i.$R6)),
				(e.$oJb = t.$Kj.equals("activeEditor", i.$S6)),
				(e.$pJb = new t.$5j("notebookEditorFocused", !1)),
				(e.$qJb = new t.$5j("notebookCellListFocused", !1)),
				(e.$rJb = new t.$5j("notebookOutputFocused", !1)),
				(e.$sJb = new t.$5j("notebookOutputInputFocused", !1)),
				(e.$tJb = new t.$5j("notebookEditable", !0)),
				(e.$uJb = new t.$5j("notebookHasRunningCell", !1)),
				(e.$vJb = new t.$5j("notebookHasSomethingRunning", !1)),
				(e.$wJb = new t.$5j("notebookUseConsolidatedOutputButton", !1)),
				(e.$xJb = new t.$5j("notebookBreakpointMargin", !1)),
				(e.$yJb = new t.$5j("notebookCellToolbarLocation", "left")),
				(e.$zJb = new t.$5j("notebookCursorNavigationMode", !1)),
				(e.$AJb = new t.$5j("notebookLastCellFailed", !1)),
				(e.$BJb = new t.$5j("notebookType", void 0)),
				(e.$CJb = new t.$5j("notebookCellType", void 0)),
				(e.$DJb = new t.$5j("notebookCellEditable", !1)),
				(e.$EJb = new t.$5j("notebookCellFocused", !1)),
				(e.$FJb = new t.$5j("notebookCellEditorFocused", !1)),
				(e.$GJb = new t.$5j("notebookCellMarkdownEditMode", !1)),
				(e.$HJb = new t.$5j("notebookCellLineNumbers", "inherit")),
				(e.$IJb = new t.$5j("notebookCellExecutionState", void 0)),
				(e.$JJb = new t.$5j("notebookCellExecuting", !1)),
				(e.$KJb = new t.$5j("notebookCellHasOutputs", !1)),
				(e.$LJb = new t.$5j("notebookCellIsFirstOutput", !1)),
				(e.$MJb = new t.$5j("hasHiddenOutputs", !1)),
				(e.$NJb = new t.$5j("notebookCellInputIsCollapsed", !1)),
				(e.$OJb = new t.$5j("notebookCellOutputIsCollapsed", !1)),
				(e.$PJb = new t.$5j("notebookCellResource", "")),
				(e.$QJb = new t.$5j("notebookCellGenerateByChat", !1)),
				(e.$RJb = new t.$5j("notebookCellHasErrorDiagnostics", !1)),
				(e.$SJb = new t.$5j("notebookKernel", void 0)),
				(e.$TJb = new t.$5j("notebookKernelCount", 0)),
				(e.$UJb = new t.$5j("notebookKernelSourceCount", 0)),
				(e.$VJb = new t.$5j("notebookKernelSelected", !1)),
				(e.$WJb = new t.$5j("notebookInterruptibleKernel", !1)),
				(e.$XJb = new t.$5j("notebookMissingKernelExtension", !1)),
				(e.$YJb = new t.$5j("notebookHasOutputs", !1));
		}),
		define(
			de[3480],
			he([
				1, 0, 461, 50, 3, 221, 71, 4, 607, 92, 11, 179, 49, 5, 39, 294, 1741,
				176,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$43b = void 0),
					(e.$53b = b);
				let f = class extends g.$A1b {
					constructor(l, y, $, v, S, I, T, P) {
						super(),
							(this.notebookEditor = l),
							(this.contextKeyService = y),
							(this.cellContainer = $),
							(this.runButtonContainer = v),
							(this.j = I),
							(this.m = T),
							(this.n = P),
							(this.b = this.D(
								S.createMenu(
									this.notebookEditor.creationOptions.menuIds
										.cellExecutePrimary,
									y,
								),
							)),
							(this.h = this.D(
								S.createMenu(
									this.notebookEditor.creationOptions.menuIds
										.cellExecuteToolbar,
									y,
								),
							)),
							this.q(v, $, y);
						const k = () => {
							const D = this.getCellToolbarActions(this.b).primary[0];
							this.a.setActions(D ? [D] : []);
						};
						k(),
							this.D(this.b.onDidChange(k)),
							this.D(this.h.onDidChange(k)),
							this.D(this.notebookEditor.notebookOptions.onDidChangeOptions(k));
					}
					didRenderCell(l) {
						if (
							(this.f.add(
								(0, p.$P3b)(this.notebookEditor, l, this.runButtonContainer),
							),
							this.notebookEditor.hasModel())
						) {
							const y = {
								ui: !0,
								cell: l,
								notebookEditor: this.notebookEditor,
								$mid: E.MarshalledId.NotebookCellActionContext,
							};
							this.a.context = y;
						}
					}
					getCellToolbarActions(l) {
						const v = { primary: [], secondary: [] };
						return (
							(0, r.$Kyb)(l, { shouldForwardArgs: !0 }, v, (S) =>
								/^inline/.test(S),
							),
							v
						);
					}
					q(l, y, $) {
						const v = this.D(new w.$Zc()),
							S = this.D(
								new i.$rj(
									"notebook.moreRunActions",
									(0, d.localize)(8202, null),
									"codicon-chevron-down",
									!0,
								),
							),
							I = (P) => this.j.lookupKeybinding(P.id, T),
							T = this.D(b($));
						this.a = this.D(
							new t.$jpb(l, this.m, {
								getKeyBinding: I,
								actionViewItemProvider: (P, k) => {
									v.clear();
									const L = this.getCellToolbarActions(this.b).primary[0];
									if (!(L instanceof u.$2X)) return;
									const D = this.getCellToolbarActions(this.h).secondary;
									if (!D.length) return;
									const M = this.n.createInstance(
										m.$OYb,
										L,
										S,
										D,
										"notebook-cell-run-toolbar",
										this.m,
										{ ...k, getKeyBinding: I },
									);
									return (
										v.add(
											M.onDidChangeDropdownVisibility((N) => {
												y.classList.toggle(
													"cell-run-toolbar-dropdown-active",
													N,
												);
											}),
										),
										M
									);
								},
								renderDropdownAsChildElement: !0,
							}),
						);
					}
				};
				(e.$43b = f),
					(e.$43b = f =
						Ne([j(4, u.$YX), j(5, n.$uZ), j(6, h.$Xxb), j(7, c.$Li)], f));
				function b(s) {
					const l = s.createScoped(document.createElement("div"));
					return (
						a.$bMb.bindTo(l).set(!0),
						C.EditorContextKeys.editorTextFocus.bindTo(l).set(!0),
						C.EditorContextKeys.focus.bindTo(l).set(!0),
						C.EditorContextKeys.textInputFocus.bindTo(l).set(!0),
						o.$IJb.bindTo(l).set("idle"),
						o.$qJb.bindTo(l).set(!0),
						o.$pJb.bindTo(l).set(!0),
						o.$CJb.bindTo(l).set("code"),
						l
					);
				}
			},
		),
		define(
			de[360],
			he([
				1, 0, 215, 44, 161, 19, 57, 509, 70, 73, 23, 22, 1296, 29, 76, 170, 53,
				4, 18, 125, 399,
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
			) {
				"use strict";
				var l;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$TIb = void 0),
					(e.$UIb = $),
					(e.$VIb = v),
					(t = mt(t));
				let y = class extends h.$RIb {
					static {
						l = this;
					}
					static getOrCreate(I, T, P, k, L = {}) {
						const D = I.createInstance(l, T, P, k, L);
						return P && D.setPreferredResource(P), D;
					}
					static {
						this.ID = "workbench.input.notebook";
					}
					constructor(I, T, P, k, L, D, M, N, A, R, O, B, U, z) {
						super(I, T, N, A, R, U, z),
							(this.viewType = P),
							(this.options = k),
							(this.S = L),
							(this.U = D),
							(this.W = M),
							(this.c = null),
							(this.R = !1),
							(this.R = !!k.startDirty),
							(this.Q = L.onDidAddNotebookDocument((F) => {
								F.viewType === this.viewType &&
									F.uri.toString() === this.resource.toString() &&
									this.resolve().catch(c.$4);
							})),
							this.D(
								O.onWillStop((F) => {
									if (!this.isDirty()) return;
									const x = F.auto
										? (0, o.localize)(8234, null)
										: (0, o.localize)(8235, null, this.resource.path);
									F.veto(
										(async () => {
											const H = B.findEditors(this);
											return F.auto
												? !0
												: !(H.length > 0 && (await B.save(H[0])).success);
										})(),
										x,
									);
								}),
							);
					}
					dispose() {
						this.Q.dispose(),
							this.c?.dispose(),
							(this.c = null),
							super.dispose();
					}
					get typeId() {
						return l.ID;
					}
					get editorId() {
						return this.viewType;
					}
					get capabilities() {
						let I = i.EditorInputCapabilities.None;
						return (
							this.resource.scheme === u.Schemas.untitled &&
								(I |= i.EditorInputCapabilities.Untitled),
							this.c
								? this.c.object.isReadonly() &&
									(I |= i.EditorInputCapabilities.Readonly)
								: this.n.isReadonly(this.resource) &&
									(I |= i.EditorInputCapabilities.Readonly),
							I & i.EditorInputCapabilities.Readonly ||
								(I |= i.EditorInputCapabilities.CanDropIntoEditor),
							I
						);
					}
					getDescription(I = i.Verbosity.MEDIUM) {
						if (
							!this.hasCapability(i.EditorInputCapabilities.Untitled) ||
							this.c?.object.hasAssociatedFilePath()
						)
							return super.getDescription(I);
					}
					isReadonly() {
						return this.c
							? this.c.object.isReadonly()
							: this.n.isReadonly(this.resource);
					}
					isDirty() {
						return this.c ? this.c.object.isDirty() : this.R;
					}
					isSaving() {
						const I = this.c?.object;
						return !I ||
							!I.isDirty() ||
							I.hasErrorState ||
							this.hasCapability(i.EditorInputCapabilities.Untitled)
							? !1
							: this.n.hasShortAutoSaveDelay(this);
					}
					async save(I, T) {
						if (this.c)
							return this.hasCapability(i.EditorInputCapabilities.Untitled)
								? this.saveAs(I, T)
								: (await this.c.object.save(T), this);
					}
					async saveAs(I, T) {
						if (!this.c) return;
						const P = this.S.getContributedNotebookType(this.viewType);
						if (!P) return;
						const k = this.hasCapability(i.EditorInputCapabilities.Untitled)
							? await this.X(P, this.h.getUriBasenameLabel(this.resource))
							: this.c.object.resource;
						let L;
						if (this.c.object.hasAssociatedFilePath()) L = k;
						else if (
							((L = await this.W.pickFileToSave(k, T?.availableFileSystems)),
							!L)
						)
							return;
						if (!P.matches(L)) {
							const D = P.selectors
								.map((M) =>
									typeof M == "string"
										? M
										: t.$Kk(M)
											? `${M} (base ${M.base})`
											: M.exclude
												? `${M.include} (exclude: ${M.exclude})`
												: `${M.include}`,
								)
								.join(", ");
							throw new Error(`File name ${L} is not supported by ${P.providerDisplayName}.

Please make sure the file name matches following patterns:
${D}`);
						}
						return await this.c.object.saveAs(L);
					}
					async X(I, T) {
						const P = I.selectors[0];
						let k = P && typeof P == "string" ? P : void 0;
						if (!k && P) {
							const L = P.include;
							typeof L == "string" && (k = L);
						}
						if (k) {
							const L = /^\*\.([A-Za-z_-]*)$/.exec(k);
							if (L && L.length > 1) {
								const D = L[1];
								if (!T.endsWith(D))
									return (0, E.$nh)(
										await this.W.defaultFilePath(),
										T + "." + D,
									);
							}
						}
						return (0, E.$nh)(await this.W.defaultFilePath(), T);
					}
					async rename(I, T) {
						if (this.c)
							return {
								editor: { resource: T },
								options: { override: this.viewType },
							};
					}
					async revert(I, T) {
						this.c &&
							this.c.object.isDirty() &&
							(await this.c.object.revert(T));
					}
					async resolve(I, T) {
						if (!(await this.S.canResolve(this.viewType))) return null;
						if ((T?.mark("extensionActivated"), this.Q.dispose(), this.c))
							this.c.object.load({ limits: this.P(I) });
						else {
							const P = !!(
									this.capabilities & i.EditorInputCapabilities.Scratchpad
								),
								k = await this.U.resolve(this.resource, this.viewType, {
									limits: this.P(I),
									scratchpad: P,
								});
							if (this.c) return k.dispose(), this.c.object;
							if (((this.c = k), this.isDisposed()))
								return this.c.dispose(), (this.c = null), null;
							this.D(this.c.object.onDidChangeDirty(() => this.b.fire())),
								this.D(this.c.object.onDidChangeReadonly(() => this.g.fire())),
								this.D(this.c.object.onDidRevertUntitled(() => this.dispose())),
								this.c.object.isDirty() && this.b.fire();
						}
						if (this.options._backupId) {
							const P = await this.S.withNotebookDataProvider(
								this.c.object.notebook.viewType,
							);
							if (!(P instanceof w.$NIb))
								throw new Error("CANNOT open file notebook with this provider");
							const k = await P.serializer.dataToNotebook(
								n.$Te.fromString(
									JSON.stringify({ __webview_backup: this.options._backupId }),
								),
							);
							this.c.object.notebook.applyEdits(
								[
									{
										editType: m.CellEditType.Replace,
										index: 0,
										count: this.c.object.notebook.length,
										cells: k.cells,
									},
								],
								!0,
								void 0,
								() => {},
								void 0,
								!1,
							),
								this.options._workingCopy &&
									((this.options._backupId = void 0),
									(this.options._workingCopy = void 0),
									(this.options.startDirty = void 0));
						}
						return this.c.object;
					}
					toUntyped() {
						return {
							resource: this.resource,
							options: { override: this.viewType },
						};
					}
					matches(I) {
						return super.matches(I)
							? !0
							: I instanceof l
								? this.editorId === I.editorId &&
									(0, E.$gh)(this.resource, I.resource)
								: !1;
					}
				};
				(e.$TIb = y),
					(e.$TIb =
						y =
						l =
							Ne(
								[
									j(4, w.$MIb),
									j(5, d.$OIb),
									j(6, C.$IO),
									j(7, r.$3N),
									j(8, a.$ll),
									j(9, g.$_Y),
									j(10, p.$q2),
									j(11, f.$IY),
									j(12, b.$XO),
									j(13, s.$QIb),
								],
								y,
							));
				function $(S) {
					return (
						!!S &&
						typeof S == "object" &&
						Array.isArray(S.editorInputs) &&
						S.editorInputs.every((I) => I instanceof y)
					);
				}
				function v(S) {
					return !!S && typeof S == "object" && S.typeId === y.ID;
				}
			},
		),
		define(
			de[1302],
			he([
				1, 0, 6, 54, 19, 172, 42, 10, 57, 5, 44, 223, 1245, 987, 70, 360, 161,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				var o;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ync = void 0),
					(i = mt(i));
				let f = class extends a.$LO {
					static {
						o = this;
					}
					static create(s, l, y, $, v) {
						return s.createInstance(o, l, y, $, v);
					}
					static {
						this.a = {};
					}
					static setName(s, l) {
						l && (this.a[s.path] = l);
					}
					static {
						this.ID = "workbench.input.interactive";
					}
					get editorId() {
						return "interactive";
					}
					get typeId() {
						return o.ID;
					}
					get language() {
						return this.u?.object.textEditorModel.getLanguageId() ?? this.m;
					}
					get notebookEditorInput() {
						return this.n;
					}
					get editorInputs() {
						return [this.n];
					}
					get resource() {
						return this.q;
					}
					get inputResource() {
						return this.r;
					}
					get primary() {
						return this.n;
					}
					constructor(s, l, y, $, v, S, I, T, P, k, L) {
						const D = g.$TIb.getOrCreate(v, s, void 0, "interactive", {});
						super(),
							(this.C = P),
							(this.F = k),
							(this.h = L.getValue(n.$56.InteractiveWindowPromptToSave) !== !0),
							(this.n = D),
							this.D(this.n),
							(this.c = y ?? o.a[s.path] ?? i.$sc(s.path, i.$tc(s.path))),
							(this.m = $),
							(this.q = s),
							(this.r = l),
							(this.s = null),
							(this.t = null),
							(this.u = null),
							(this.w = S),
							(this.y = I),
							(this.z = T),
							this.G();
					}
					G() {
						const s = t.Event.once(this.primary.onWillDispose);
						this.D(
							s(() => {
								this.isDisposed() || this.dispose();
							}),
						),
							this.D(this.primary.onDidChangeDirty(() => this.b.fire())),
							this.D(this.primary.onDidChangeLabel(() => this.f.fire())),
							this.D(this.primary.onDidChangeCapabilities(() => this.g.fire()));
					}
					get capabilities() {
						const s = this.h ? u.EditorInputCapabilities.Scratchpad : 0;
						return (
							u.EditorInputCapabilities.Untitled |
							u.EditorInputCapabilities.Readonly |
							s
						);
					}
					async H() {
						return this.t || (this.t = await this.n.resolve()), this.t;
					}
					async resolve() {
						return this.t
							? this.t
							: this.s
								? this.s
								: ((this.s = this.H()), this.s);
					}
					async resolveInput(s) {
						if (this.u) return this.u.object.textEditorModel;
						const l = s ?? this.m ?? E.$0M;
						return (
							this.y.willCreateInteractiveDocument(
								this.resource,
								this.inputResource,
								l,
							),
							(this.u = await this.w.createModelReference(this.inputResource)),
							this.u.object.textEditorModel
						);
					}
					async save(s, l) {
						if (this.t)
							return this.hasCapability(u.EditorInputCapabilities.Untitled)
								? this.saveAs(s, l)
								: (await this.t.save(l), this);
					}
					async saveAs(s, l) {
						if (!this.t || !this.C.getContributedNotebookType("interactive"))
							return;
						const $ = this.getName() + ".ipynb",
							v = (0, w.$nh)(await this.F.defaultFilePath(), $),
							S = await this.F.pickFileToSave(v, l?.availableFileSystems);
						if (!S) return;
						const I = await this.t.saveAs(S);
						return (
							I &&
								"resource" in I &&
								I.resource &&
								this.C.getNotebookTextModel(I.resource)?.dispose(),
							I
						);
					}
					matches(s) {
						return super.matches(s)
							? !0
							: s instanceof o
								? (0, w.$gh)(this.resource, s.resource) &&
									(0, w.$gh)(this.inputResource, s.inputResource)
								: !1;
					}
					getName() {
						return this.c;
					}
					isDirty() {
						return this.h ? !1 : (this.t?.isDirty() ?? !1);
					}
					isModified() {
						return this.t?.isModified() ?? !1;
					}
					async revert(s, l) {
						this.t && this.t.isDirty() && (await this.t.revert(l));
					}
					dispose() {
						this.t?.revert({ soft: !0 }),
							this.n?.dispose(),
							this.t?.dispose(),
							(this.t = null),
							this.y.willRemoveInteractiveDocument(
								this.resource,
								this.inputResource,
							),
							this.u?.dispose(),
							(this.u = null),
							super.dispose();
					}
					get historyService() {
						return this.z;
					}
				};
				(e.$ync = f),
					(e.$ync =
						f =
						o =
							Ne(
								[
									j(4, r.$Li),
									j(5, C.$MO),
									j(6, h.$unc),
									j(7, c.$wnc),
									j(8, p.$MIb),
									j(9, m.$IO),
									j(10, d.$gj),
								],
								f,
							));
			},
		),
		define(
			de[3481],
			he([
				1, 0, 3, 4, 99, 11, 31, 10, 8, 30, 21, 55, 282, 70, 176, 360, 18, 52,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$XFc = void 0);
				const f = "hasOpenedNotebook",
					b = "hasShownNotebookGettingStarted";
				let s = class extends t.$1c {
					constructor(y, $, v, S, I) {
						super();
						const T = n.$jJb.bindTo(v),
							P = new h.$eEb("notebookGettingStarted2", $),
							k = P.getMemento(u.StorageScope.PROFILE, u.StorageTarget.USER);
						k[f] && T.set(!0);
						const L = I.getValue(c.$56.openGettingStarted) && !k[b];
						if (!k[f] || L) {
							const D = () => {
								T.set(!0),
									(k[f] = !0),
									L &&
										(S.executeCommand(
											"workbench.action.openWalkthrough",
											{ category: "notebooks", step: "notebookProfile" },
											!0,
										),
										(k[b] = !0)),
									P.saveMemento();
							};
							if (y.activeEditor?.typeId === g.$TIb.ID) {
								D();
								return;
							}
							const M = this.D(
								y.onDidActiveEditorChange(() => {
									y.activeEditor?.typeId === g.$TIb.ID && (M.dispose(), D());
								}),
							);
						}
					}
				};
				(e.$XFc = s),
					(e.$XFc = s =
						Ne(
							[j(0, p.$IY), j(1, u.$lq), j(2, m.$6j), j(3, C.$ek), j(4, d.$gj)],
							s,
						)),
					r.$Io
						.as(a.Extensions.Workbench)
						.registerWorkbenchContribution(s, o.LifecyclePhase.Restored),
					(0, E.$4X)(
						class extends E.$3X {
							constructor() {
								super({
									id: "workbench.notebook.layout.gettingStarted",
									title: (0, i.localize2)(
										7776,
										"Reset notebook getting started",
									),
									f1: !0,
									precondition: m.$Kj.equals(
										`config.${c.$56.openGettingStarted}`,
										!0,
									),
									category: w.$ck.Developer,
								});
							}
							run(y) {
								const $ = y.get(u.$lq),
									v = new h.$eEb("notebookGettingStarted", $),
									S = v.getMemento(
										u.StorageScope.PROFILE,
										u.StorageTarget.USER,
									);
								(S[f] = void 0), v.saveMemento();
							}
						},
					);
			},
		),
		define(
			de[3482],
			he([1, 0, 4, 3, 199, 17, 42, 11, 10, 34, 63, 293, 70, 360, 18]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$BFc = e.$AFc = e.$zFc = e.$yFc = e.$xFc = void 0),
					(t = mt(t));
				class g extends d.$3X {
					static {
						this.ID = "notebook.action.indentUsingTabs";
					}
					constructor() {
						super({
							id: g.ID,
							title: t.localize(7956, null),
							precondition: void 0,
						});
					}
					run(v, ...S) {
						s(v, !1, !1);
					}
				}
				e.$xFc = g;
				class p extends d.$3X {
					static {
						this.ID = "notebook.action.indentUsingSpaces";
					}
					constructor() {
						super({
							id: p.ID,
							title: t.localize(7957, null),
							precondition: void 0,
						});
					}
					run(v, ...S) {
						s(v, !0, !1);
					}
				}
				e.$yFc = p;
				class o extends d.$3X {
					static {
						this.ID = "notebook.action.changeTabDisplaySize";
					}
					constructor() {
						super({
							id: o.ID,
							title: t.localize(7958, null),
							precondition: void 0,
						});
					}
					run(v, ...S) {
						s(v, !0, !0);
					}
				}
				e.$zFc = o;
				class f extends d.$3X {
					static {
						this.ID = "notebook.action.convertIndentationToSpaces";
					}
					constructor() {
						super({
							id: f.ID,
							title: t.localize(7959, null),
							precondition: void 0,
						});
					}
					run(v, ...S) {
						l(v, !0);
					}
				}
				e.$AFc = f;
				class b extends d.$3X {
					static {
						this.ID = "notebook.action.convertIndentationToTabs";
					}
					constructor() {
						super({
							id: b.ID,
							title: t.localize(7960, null),
							precondition: void 0,
						});
					}
					run(v, ...S) {
						l(v, !1);
					}
				}
				e.$BFc = b;
				function s($, v, S) {
					const I = $.get(n.$IY),
						T = $.get(m.$gj),
						P = $.get(a.$n5b),
						k = $.get(u.$DJ),
						L = I.activeEditorPane?.input;
					if (
						!(0, c.$VIb)(L) ||
						!P.retrieveExistingWidgetFromURI(L.resource)?.value
					)
						return;
					const N = [1, 2, 3, 4, 5, 6, 7, 8].map((O) => ({
							id: O.toString(),
							label: O.toString(),
						})),
						A = T.getValue(h.$56.cellEditorOptionsCustomizations),
						R = A["editor.insertSpaces"];
					delete A["editor.indentSize"],
						delete A["editor.tabSize"],
						delete A["editor.insertSpaces"],
						setTimeout(() => {
							k.pick(N, { placeHolder: t.localize(7961, null) }).then((O) => {
								if (O) {
									const B = parseInt(O.label, 10);
									S
										? T.updateValue(h.$56.cellEditorOptionsCustomizations, {
												...A,
												"editor.tabSize": B,
												"editor.indentSize": B,
												"editor.insertSpaces": R,
											})
										: T.updateValue(h.$56.cellEditorOptionsCustomizations, {
												...A,
												"editor.tabSize": B,
												"editor.indentSize": B,
												"editor.insertSpaces": v,
											});
								}
							});
						}, 50);
				}
				function l($, v) {
					const S = $.get(n.$IY),
						I = $.get(m.$gj),
						T = $.get(r.$ik),
						P = $.get(C.$MO),
						k = $.get(a.$n5b),
						L = $.get(w.$rzb),
						D = S.activeEditorPane?.input;
					if (!(0, c.$VIb)(D)) return;
					const N = k.retrieveExistingWidgetFromURI(D.resource)?.value
						?.textModel;
					if (!N) return;
					const A = new i.$Zc();
					try {
						Promise.all(
							N.cells.map(async (R) => {
								const O = await P.createModelReference(R.uri);
								A.add(O);
								const B = O.object.textEditorModel,
									U = R.textModel?.getOptions();
								if (!U) return;
								const z = y(B, U.tabSize, v);
								L.apply(z, {
									label: t.localize(7962, null),
									code: "undoredo.convertIndentation",
								});
							}),
						).then(() => {
							const R = I.getValue(h.$56.cellEditorOptionsCustomizations),
								O = R["editor.indentSize"],
								B = R["editor.tabSize"];
							delete R["editor.indentSize"],
								delete R["editor.tabSize"],
								delete R["editor.insertSpaces"],
								I.updateValue(h.$56.cellEditorOptionsCustomizations, {
									...R,
									"editor.tabSize": B,
									"editor.indentSize": O,
									"editor.insertSpaces": v,
								}),
								A.dispose();
						});
					} catch {
						T.error(
							"Failed to convert indentation to spaces for notebook cells.",
						);
					}
				}
				function y($, v, S) {
					if ($.getLineCount() === 1 && $.getLineMaxColumn(1) === 1) return [];
					let I = "";
					for (let k = 0; k < v; k++) I += " ";
					const T = new RegExp(I, "gi"),
						P = [];
					for (let k = 1, L = $.getLineCount(); k <= L; k++) {
						let D = $.getLineFirstNonWhitespaceColumn(k);
						if ((D === 0 && (D = $.getLineMaxColumn(k)), D === 1)) continue;
						const M = new E.$iL(k, 1, k, D),
							N = $.getValueInRange(M),
							A = S ? N.replace(/\t/gi, I) : N.replace(T, "	");
						P.push(new w.$tzb($.uri, { range: M, text: A }));
					}
					return P;
				}
				(0, d.$4X)(p),
					(0, d.$4X)(g),
					(0, d.$4X)(o),
					(0, d.$4X)(f),
					(0, d.$4X)(b);
			},
		),
		
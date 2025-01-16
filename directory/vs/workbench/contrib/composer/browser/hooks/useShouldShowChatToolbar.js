define(de[4158], he([1, 0, 13, 1366, 1066]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.useShouldShowChatToolbar = E);
			function E(C) {
				const {
						shouldShowSaveAll: d,
						shouldShowAcceptAll: m,
						shouldShowRejectAll: r,
						shouldShowCompletedFiles: u,
						shouldShowCancel: a,
						shouldShowReapplyLastMessage: h,
					} = (0, i.useComposerCollectedStatuses)(C),
					c = (0, w.useShouldShowApplyLastMessage)(C);
				return (0, t.createMemo)(
					() => a() || d() || m() || r() || h() || u() || c(),
				);
			}
		}),
		define(
			de[4159],
			he([
				1, 0, 7, 6, 3, 65, 206, 8, 5, 21, 32, 35, 217, 44, 521, 1302, 330, 293,
				66, 1062, 243, 172, 61, 11, 39, 986, 10, 835, 461, 49, 92, 46, 1207,
				394, 504, 375, 328, 254, 714, 857, 125, 116, 190, 176, 53, 19, 1304, 70,
				82, 448, 603, 1858, 128, 2445, 2444,
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
					(e.$tJc = void 0),
					(t = mt(t));
				const ee = "interactiveInputDecoration",
					_ = "InteractiveEditorViewState",
					te = 8,
					Q = 10,
					Z = 8;
				let se = class extends h.$JEb {
					get onDidFocus() {
						return this.vb.event;
					}
					constructor(
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
						Oe,
						xe,
						He,
					) {
						super(J.$R6, le, oe, ae, pe),
							(this.f = { value: void 0 }),
							(this.nb = this.D(new w.$Zc())),
							(this.sb = this.D(new w.$2c())),
							(this.vb = this.D(new i.$re())),
							(this.wb = this.D(new i.$re())),
							(this.onDidChangeSelection = this.wb.event),
							(this.xb = this.D(new i.$re())),
							(this.onDidChangeScroll = this.xb.event),
							(this.u = ye),
							(this.fb = be),
							(this.gb = me),
							(this.db = ve),
							(this.hb = ge),
							(this.ib = Ce),
							(this.jb = Le),
							(this.kb = Fe),
							(this.lb = xe),
							(this.mb = He),
							(this.a = t.$(".interactive-editor")),
							(this.eb = this.D(ue.createScoped(this.a))),
							this.eb.createKey("isCompositeNotebook", !0),
							(this.cb = this.D($e.createChild(new ne.$Ki([d.$6j, this.eb])))),
							(this.pb = this.Db()),
							this.D(
								this.fb.onDidChangeConfiguration((Ke) => {
									(Ke.affectsConfiguration("editor") ||
										Ke.affectsConfiguration("notebook")) &&
										(this.pb = this.Db());
								}),
							),
							(this.qb = $e.createInstance(T.$XIb, this.window, !0, {
								cellToolbarInteraction: "hover",
								globalToolbar: !0,
								stickyScrollEnabled: !1,
								dragAndDropEnabled: !1,
							})),
							(this.rb = this.ab(Fe, Oe, _)),
							fe.registerDecorationType("interactive-decoration", ee, {}),
							this.D(this.hb.onDidUpdateKeybindings(this.Nb, this)),
							this.D(
								this.lb.onDidChangeExecution((Ke) => {
									if (
										Ke.type === H.NotebookExecutionType.cell &&
										(0, G.$gh)(
											Ke.notebook,
											this.f.value?.viewModel?.notebookDocument.uri,
										)
									) {
										const Je = this.f.value?.getCellByHandle(Ke.cellHandle);
										Je && Ke.changed?.state && this.Jb(Je);
									}
								}),
							);
					}
					get yb() {
						return 21 + te * 2 + Z * 2;
					}
					get zb() {
						return 19 + Z * 2;
					}
					Y(le) {
						t.$fhb(le, this.a),
							(this.a.style.position = "relative"),
							(this.c = t.$fhb(this.a, t.$(".notebook-editor-container"))),
							(this.g = t.$fhb(this.a, t.$(".input-cell-container"))),
							(this.g.style.position = "absolute"),
							(this.g.style.height = `${this.yb}px`),
							(this.j = t.$fhb(this.g, t.$(".input-focus-indicator"))),
							(this.m = t.$fhb(this.g, t.$(".run-button-container"))),
							this.Bb(this.m),
							(this.r = t.$fhb(this.g, t.$(".input-editor-container"))),
							this.Cb();
					}
					Bb(le) {
						const oe = this.D(
							this.ib.createMenu($.$XX.InteractiveInputExecute, this.eb),
						);
						this.tb = this.D(
							new P.$jpb(le, this.jb, {
								getKeyBinding: (ye) => this.hb.lookupKeybinding(ye.id),
								actionViewItemProvider: (ye, ue) =>
									(0, L.$Pyb)(this.cb, ye, ue),
								renderDropdownAsChildElement: !0,
							}),
						);
						const ae = [],
							pe = [],
							$e = { primary: ae, secondary: pe };
						(0, L.$Kyb)(oe, { shouldForwardArgs: !0 }, $e),
							this.tb.setActions([...ae, ...pe]);
					}
					Cb() {
						this.b = t.$Rgb(this.a);
						const le = [],
							{ codeCellLeftMargin: oe, cellRunGutter: ae } =
								this.qb.getLayoutConfiguration(),
							{ focusIndicator: pe } = this.qb.getDisplayOptions(),
							$e = this.qb.getCellEditorContainerLeftMargin();
						le.push(`
			.interactive-editor .input-cell-container {
				padding: ${te}px ${Q}px ${te}px ${$e}px;
			}
		`),
							pe === "gutter"
								? le.push(`
				.interactive-editor .input-cell-container:focus-within .input-focus-indicator::before {
					border-color: var(--vscode-notebook-focusedCellBorder) !important;
				}
				.interactive-editor .input-focus-indicator::before {
					border-color: var(--vscode-notebook-inactiveFocusedCellBorder) !important;
				}
				.interactive-editor .input-cell-container .input-focus-indicator {
					display: block;
					top: ${te}px;
				}
				.interactive-editor .input-cell-container {
					border-top: 1px solid var(--vscode-notebook-inactiveFocusedCellBorder);
				}
			`)
								: le.push(`
				.interactive-editor .input-cell-container {
					border-top: 1px solid var(--vscode-notebook-inactiveFocusedCellBorder);
				}
				.interactive-editor .input-cell-container .input-focus-indicator {
					display: none;
				}
			`),
							le.push(`
			.interactive-editor .input-cell-container .run-button-container {
				width: ${ae}px;
				left: ${oe}px;
				margin-top: ${Z - 2}px;
			}
		`),
							(this.b.textContent = le.join(`
`));
					}
					Db() {
						let le;
						this.s && (le = this.s.getModel()?.getLanguageId());
						const oe = (0, W.$vo)(
								this.fb.getValue("editor", { overrideIdentifier: le }),
							),
							ae = (0, n.$xYb)(this.fb);
						return Object.freeze({
							...oe,
							...ae,
							glyphMargin: !0,
							padding: { top: Z, bottom: Z },
							hover: { enabled: !0 },
						});
					}
					I() {
						this.Fb(this.input), super.I();
					}
					getViewState() {
						const le = this.input;
						if (le instanceof g.$ync) return this.Fb(le), this.Gb(le);
					}
					Fb(le) {
						if (this.f.value && le instanceof g.$ync) {
							if (this.f.value.isDisposed) return;
							const oe = this.f.value.getEditorViewState(),
								ae = this.s.saveViewState();
							this.rb.saveEditorState(
								this.group,
								le.notebookEditorInput.resource,
								{ notebook: oe, input: ae },
							);
						}
					}
					Gb(le) {
						const oe = this.rb.loadEditorState(
							this.group,
							le.notebookEditorInput.resource,
						);
						if (oe) return oe;
						for (const ae of this.kb.getGroups(
							f.GroupsOrder.MOST_RECENTLY_ACTIVE,
						))
							if (
								ae.activeEditorPane !== this &&
								ae.activeEditorPane === this &&
								ae.activeEditor?.matches(le)
							) {
								const pe = this.f.value?.getEditorViewState(),
									$e = this.s.saveViewState();
								return { notebook: pe, input: $e };
							}
					}
					async setInput(le, oe, ae, pe) {
						const $e = le.notebookEditorInput;
						if (
							(this.f.value?.onWillHide(),
							this.s?.dispose(),
							this.nb.clear(),
							(this.f = this.cb.invokeFunction(
								this.u.retrieveWidget,
								this.group.id,
								$e,
								{
									isEmbedded: !0,
									isReadOnly: !0,
									contributions:
										p.NotebookEditorExtensionsRegistry.getSomeEditorContributions(
											[b.$5Fc.id, b.$6Fc.id, K.$TFc.id],
										),
									menuIds: {
										notebookToolbar: $.$XX.InteractiveToolbar,
										cellTitleToolbar: $.$XX.InteractiveCellTitle,
										cellDeleteToolbar: $.$XX.InteractiveCellDelete,
										cellInsertToolbar: $.$XX.NotebookCellBetween,
										cellTopInsertToolbar: $.$XX.NotebookCellListTop,
										cellExecuteToolbar: $.$XX.InteractiveCellExecute,
										cellExecutePrimary: void 0,
									},
									cellEditorContributions:
										D.EditorExtensionsRegistry.getSomeEditorContributions([
											A.$aYb,
											R.$2Mb.ID,
											X.$whc.ID,
											Y.$2Ob.ID,
											z.$7hc.ID,
										]),
									options: this.qb,
									codeWindow: this.window,
								},
								void 0,
								this.window,
							)),
							(this.s = this.cb.createInstance(C.$rwb, this.r, this.pb, {
								isSimpleWidget: !1,
								contributions:
									D.EditorExtensionsRegistry.getSomeEditorContributions([
										N.$_Xb.ID,
										A.$aYb,
										R.$2Mb.ID,
										O.$KDb.ID,
										M.$9jc.ID,
										B.$aDb.ID,
										U.$wYb.ID,
										X.$whc.ID,
										Y.$2Ob.ID,
										z.$7hc.ID,
									]),
							})),
							this.ob)
						) {
							(this.c.style.height = `${this.ob.dimension.height - this.yb}px`),
								this.f.value.layout(
									new t.$pgb(
										this.ob.dimension.width,
										this.ob.dimension.height - this.yb,
									),
									this.c,
								);
							const ge = this.qb.getCellEditorContainerLeftMargin(),
								be = Math.min(this.ob.dimension.height / 2, this.zb);
							this.s.layout(this.Mb(this.ob.dimension.width - ge - Q, be)),
								(this.j.style.height = `${this.zb}px`),
								(this.g.style.top = `${this.ob.dimension.height - this.yb}px`),
								(this.g.style.width = `${this.ob.dimension.width}px`);
						}
						await super.setInput(le, oe, ae, pe);
						const ye = await le.resolve();
						if ((this.tb && (this.tb.context = le.resource), ye === null))
							throw new Error(
								"The Interactive Window model could not be resolved",
							);
						this.f.value?.setParentContextKeyService(this.eb);
						const ue = oe?.viewState ?? this.Gb(le);
						await this.mb.whenInstalledExtensionsRegistered(),
							await this.f.value.setModel(ye.notebook, ue?.notebook),
							ye.notebook.setCellCollapseDefault(
								this.qb.getCellCollapseDefault(),
							),
							this.f.value.setOptions({ isReadOnly: !0 }),
							this.nb.add(
								this.f.value.onDidResizeOutput((ge) => {
									this.Jb(ge);
								}),
							),
							this.nb.add(this.f.value.onDidFocusWidget(() => this.vb.fire())),
							this.nb.add(
								this.qb.onDidChangeOptions((ge) => {
									(ge.compactView || ge.focusIndicator) &&
										(this.b?.remove(), this.Cb()),
										this.ob &&
											this.isVisible() &&
											this.layout(this.ob.dimension, this.ob.position),
										ge.interactiveWindowCollapseCodeCells &&
											ye.notebook.setCellCollapseDefault(
												this.qb.getCellCollapseDefault(),
											);
								}),
							);
						const fe =
								this.f.value?.activeKernel?.supportedLanguages[0] ??
								le.language ??
								l.$0M,
							me = await le.resolveInput(fe);
						me.setLanguage(fe),
							this.s.setModel(me),
							ue?.input && this.s.restoreViewState(ue.input),
							(this.pb = this.Db()),
							this.s.updateOptions(this.pb),
							this.nb.add(this.s.onDidFocusEditorWidget(() => this.vb.fire())),
							this.nb.add(
								this.s.onDidContentSizeChange((ge) => {
									ge.contentHeightChanged &&
										this.ob &&
										this.Lb(this.ob.dimension, this.ob.position);
								}),
							),
							this.nb.add(
								this.s.onDidChangeCursorPosition((ge) =>
									this.wb.fire({ reason: this.Hb(ge) }),
								),
							),
							this.nb.add(
								this.s.onDidChangeModelContent(() =>
									this.wb.fire({
										reason: c.EditorPaneSelectionChangeReason.EDIT,
									}),
								),
							),
							this.nb.add(this.gb.onDidChangeNotebookAffinity(this.Kb, this)),
							this.nb.add(this.gb.onDidChangeSelectedNotebooks(this.Kb, this)),
							this.nb.add(
								this.n.onDidColorThemeChange(() => {
									this.isVisible() && this.Nb();
								}),
							),
							this.nb.add(
								this.s.onDidChangeModelContent(() => {
									this.isVisible() && this.Nb();
								}),
							),
							this.nb.add(
								this.s.onDidChangeModel(() => {
									this.Nb();
								}),
							),
							this.fb.onDidChangeConfiguration((ge) => {
								ge.affectsConfiguration(S.$rJc.showExecutionHint) && this.Nb();
							});
						const ve = S.$qJc.bindTo(this.eb);
						le.resource && le.historyService.has(le.resource)
							? ve.set("top")
							: ve.set("none"),
							this.nb.add(
								this.s.onDidChangeCursorPosition(({ position: ge }) => {
									const be = this.s._getViewModel(),
										Ce = be.getLineCount(),
										Le = be.getLineLength(Ce) + 1,
										Fe =
											be.coordinatesConverter.convertModelPositionToViewPosition(
												ge,
											),
										Oe = Fe.lineNumber === 1 && Fe.column === 1,
										xe = Fe.lineNumber === Ce && Fe.column === Le;
									Oe
										? xe
											? ve.set("both")
											: ve.set("top")
										: xe
											? ve.set("bottom")
											: ve.set("none");
								}),
							),
							this.nb.add(
								me.onDidChangeContent(() => {
									const ge = me.getValue();
									if (this.input?.resource) {
										const be = this.input.historyService;
										be.matchesCurrent(this.input.resource, ge) ||
											be.replaceLast(this.input.resource, ge);
									}
								}),
							),
							this.nb.add(this.f.value.onDidScroll(() => this.xb.fire())),
							this.Kb(),
							this.Nb();
					}
					setOptions(le) {
						this.f.value?.setOptions(le), super.setOptions(le);
					}
					Hb(le) {
						switch (le.source) {
							case x.TextEditorSelectionSource.PROGRAMMATIC:
								return c.EditorPaneSelectionChangeReason.PROGRAMMATIC;
							case x.TextEditorSelectionSource.NAVIGATION:
								return c.EditorPaneSelectionChangeReason.NAVIGATION;
							case x.TextEditorSelectionSource.JUMP:
								return c.EditorPaneSelectionChangeReason.JUMP;
							default:
								return c.EditorPaneSelectionChangeReason.USER;
						}
					}
					Ib(le) {
						const oe = this.f.value?.visibleRanges || [];
						return (
							this.f.value?.getCellIndex(le) ===
							Math.max(...oe.map((pe) => pe.end - 1))
						);
					}
					Jb(le) {
						this.f.value.getCellIndex(le) === this.f.value.getLength() - 1 &&
							(this.fb.getValue(
								S.$rJc.interactiveWindowAlwaysScrollOnNewCell,
							) ||
								this.Ib(le)) &&
							this.f.value.scrollToBottom();
					}
					Kb() {
						const le = this.f.value?.textModel,
							oe = this.s.getModel();
						if (le && oe) {
							const ae = this.gb.getMatchingKernel(le),
								pe =
									ae.selected ??
									(ae.suggestions.length === 1 ? ae.suggestions[0] : void 0) ??
									(ae.all.length === 1 ? ae.all[0] : void 0);
							if (pe) {
								const $e = pe.supportedLanguages[0];
								if ($e && $e !== "plaintext") {
									const ye = this.db.createById($e).languageId;
									oe.setLanguage(ye);
								}
								q.$SJb.bindTo(this.eb).set(pe.id);
							}
						}
					}
					layout(le, oe) {
						this.a.classList.toggle(
							"mid-width",
							le.width < 1e3 && le.width >= 600,
						),
							this.a.classList.toggle("narrow-width", le.width < 600);
						const ae = le.height !== this.ob?.dimension.height;
						(this.ob = { dimension: le, position: oe }),
							this.f.value &&
								(ae && this.s && O.$KDb.get(this.s)?.cancelSuggestWidget(),
								(this.c.style.height = `${this.ob.dimension.height - this.yb}px`),
								this.Lb(le, oe));
					}
					Lb(le, oe) {
						const ae = this.s.hasModel() ? this.s.getContentHeight() : this.zb,
							pe = Math.min(le.height / 2, ae),
							$e = this.qb.getCellEditorContainerLeftMargin(),
							ye = pe + te * 2;
						(this.c.style.height = `${le.height - ye}px`),
							this.f.value.layout(
								le.with(le.width, le.height - ye),
								this.c,
								oe,
							),
							this.s.layout(this.Mb(le.width - $e - Q, pe)),
							(this.j.style.height = `${ae}px`),
							(this.g.style.top = `${le.height - ye}px`),
							(this.g.style.width = `${le.width}px`);
					}
					Mb(le, oe) {
						return new t.$pgb(Math.max(0, le), Math.max(0, oe));
					}
					Nb() {
						if (!this.s) return;
						const le =
							!this.s.hasModel() ||
							this.fb.getValue(S.$rJc.showExecutionHint) === !1 ||
							this.s.getModel().getValueLength() !== 0;
						!this.ub && !le
							? (this.ub = this.cb.createInstance(ie.$sJc, this.s))
							: this.ub && le && (this.ub.dispose(), (this.ub = void 0));
					}
					getScrollPosition() {
						return { scrollTop: this.f.value?.scrollTop ?? 0, scrollLeft: 0 };
					}
					setScrollPosition(le) {
						this.f.value?.setScrollTop(le.scrollTop);
					}
					focus() {
						super.focus(), this.f.value?.onShow(), this.s.focus();
					}
					focusHistory() {
						this.f.value.focus();
					}
					Z(le) {
						super.Z(le),
							(this.sb.value = this.group.onWillCloseEditor((oe) =>
								this.Fb(oe.editor),
							)),
							le ||
								(this.Fb(this.input),
								this.input && this.f.value && this.f.value.onWillHide()),
							this.Nb();
					}
					clearInput() {
						this.f.value && (this.Fb(this.input), this.f.value.onWillHide()),
							this.s?.dispose(),
							(this.f = { value: void 0 }),
							this.nb.clear(),
							super.clearInput();
					}
					getControl() {
						return { notebookEditor: this.f.value, codeEditor: this.s };
					}
				};
				(e.$tJc = se),
					(e.$tJc = se =
						Ne(
							[
								j(1, u.$km),
								j(2, a.$iP),
								j(3, r.$lq),
								j(4, m.$Li),
								j(5, o.$n5b),
								j(6, d.$6j),
								j(7, E.$dtb),
								j(8, s.$f6),
								j(9, y.$nM),
								j(10, v.$uZ),
								j(11, I.$gj),
								j(12, $.$YX),
								j(13, k.$Xxb),
								j(14, f.$EY),
								j(15, F.$XO),
								j(16, H.$d6),
								j(17, V.$q2),
							],
							se,
						));
			},
		),
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
		define(
			de[4161],
			he([
				1, 0, 7, 6, 3, 65, 206, 8, 5, 21, 32, 35, 217, 44, 521, 330, 293, 66,
				1062, 243, 61, 11, 39, 986, 10, 835, 461, 49, 92, 46, 1207, 394, 504,
				375, 328, 254, 714, 857, 125, 116, 190, 176, 53, 19, 1304, 70, 82, 603,
				448, 1850, 1858, 128, 2485, 2484,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$xJc = void 0),
					(t = mt(t));
				const ne = "InteractiveEditorViewState",
					ee = 8,
					_ = 10,
					te = 8;
				let Q = class extends h.$JEb {
					get onDidFocus() {
						return this.ub.event;
					}
					constructor(
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
						Oe,
					) {
						super(G.$S6, se, re, le, oe),
							(this.f = { value: void 0 }),
							(this.mb = this.D(new w.$Zc())),
							(this.rb = this.D(new w.$2c())),
							(this.ub = this.D(new i.$re())),
							(this.vb = this.D(new i.$re())),
							(this.onDidChangeSelection = this.vb.event),
							(this.wb = this.D(new i.$re())),
							(this.onDidChangeScroll = this.wb.event),
							(this.u = pe),
							(this.fb = ve),
							(this.gb = ue),
							(this.db = fe),
							(this.hb = me),
							(this.ib = ge),
							(this.jb = be),
							(this.kb = Ce),
							(this.lb = Oe),
							(this.a = t.$(".interactive-editor")),
							(this.eb = this.D($e.createScoped(this.a))),
							this.eb.createKey("isCompositeNotebook", !0),
							(this.cb = this.D(ae.createChild(new ie.$Ki([d.$6j, this.eb])))),
							(this.ob = this.Cb()),
							this.D(
								this.fb.onDidChangeConfiguration((xe) => {
									(xe.affectsConfiguration("editor") ||
										xe.affectsConfiguration("notebook")) &&
										(this.ob = this.Cb());
								}),
							),
							(this.pb = ae.createInstance(S.$XIb, this.window, !0, {
								cellToolbarInteraction: "hover",
								globalToolbar: !0,
								stickyScrollEnabled: !1,
								dragAndDropEnabled: !1,
							})),
							(this.qb = this.ab(Ce, Le, ne)),
							this.D(this.hb.onDidUpdateKeybindings(this.Mb, this)),
							this.D(
								Fe.onDidChangeExecution((xe) => {
									if (
										xe.type === F.NotebookExecutionType.cell &&
										(0, q.$gh)(
											xe.notebook,
											this.f.value?.viewModel?.notebookDocument.uri,
										)
									) {
										const He = this.f.value?.getCellByHandle(xe.cellHandle);
										He && xe.changed?.state && this.Ib(He);
									}
								}),
							);
					}
					get xb() {
						return 21 + ee * 2 + te * 2;
					}
					get yb() {
						return 19 + te * 2;
					}
					Y(se) {
						t.$fhb(se, this.a),
							(this.a.style.position = "relative"),
							(this.c = t.$fhb(this.a, t.$(".notebook-editor-container"))),
							(this.g = t.$fhb(this.a, t.$(".input-cell-container"))),
							(this.g.style.position = "absolute"),
							(this.g.style.height = `${this.xb}px`),
							(this.j = t.$fhb(this.g, t.$(".input-focus-indicator"))),
							(this.m = t.$fhb(this.g, t.$(".run-button-container"))),
							this.Ab(this.m),
							(this.r = t.$fhb(this.g, t.$(".input-editor-container"))),
							this.Bb();
					}
					Ab(se) {
						const re = this.D(
							this.ib.createMenu(l.$XX.ReplInputExecute, this.eb),
						);
						this.sb = this.D(
							new I.$jpb(se, this.jb, {
								getKeyBinding: (pe) => this.hb.lookupKeybinding(pe.id),
								actionViewItemProvider: (pe, $e) =>
									(0, P.$Pyb)(this.cb, pe, $e),
								renderDropdownAsChildElement: !0,
							}),
						);
						const le = [],
							oe = [],
							ae = { primary: le, secondary: oe };
						(0, P.$Kyb)(re, { shouldForwardArgs: !0 }, ae),
							this.sb.setActions([...le, ...oe]);
					}
					Bb() {
						this.b = t.$Rgb(this.a);
						const se = [],
							{ codeCellLeftMargin: re, cellRunGutter: le } =
								this.pb.getLayoutConfiguration(),
							{ focusIndicator: oe } = this.pb.getDisplayOptions(),
							ae = this.pb.getCellEditorContainerLeftMargin();
						se.push(`
			.interactive-editor .input-cell-container {
				padding: ${ee}px ${_}px ${ee}px ${ae}px;
			}
		`),
							oe === "gutter"
								? se.push(`
				.interactive-editor .input-cell-container:focus-within .input-focus-indicator::before {
					border-color: var(--vscode-notebook-focusedCellBorder) !important;
				}
				.interactive-editor .input-focus-indicator::before {
					border-color: var(--vscode-notebook-inactiveFocusedCellBorder) !important;
				}
				.interactive-editor .input-cell-container .input-focus-indicator {
					display: block;
					top: ${ee}px;
				}
				.interactive-editor .input-cell-container {
					border-top: 1px solid var(--vscode-notebook-inactiveFocusedCellBorder);
				}
			`)
								: se.push(`
				.interactive-editor .input-cell-container {
					border-top: 1px solid var(--vscode-notebook-inactiveFocusedCellBorder);
				}
				.interactive-editor .input-cell-container .input-focus-indicator {
					display: none;
				}
			`),
							se.push(`
			.interactive-editor .input-cell-container .run-button-container {
				width: ${le}px;
				left: ${re}px;
				margin-top: ${te - 2}px;
			}
		`),
							(this.b.textContent = se.join(`
`));
					}
					Cb() {
						let se;
						this.s && (se = this.s.getModel()?.getLanguageId());
						const re = (0, K.$vo)(
								this.fb.getValue("editor", { overrideIdentifier: se }),
							),
							le = (0, n.$xYb)(this.fb);
						return Object.freeze({
							...re,
							...le,
							glyphMargin: !0,
							padding: { top: te, bottom: te },
							hover: { enabled: !0 },
						});
					}
					I() {
						this.Eb(this.input), super.I();
					}
					getViewState() {
						const se = this.input;
						if (se instanceof X.$wJc) return this.Eb(se), this.Fb(se);
					}
					Eb(se) {
						if (this.f.value && se instanceof X.$wJc) {
							if (this.f.value.isDisposed) return;
							const re = this.f.value.getEditorViewState(),
								le = this.s.saveViewState();
							this.qb.saveEditorState(this.group, se.resource, {
								notebook: re,
								input: le,
							});
						}
					}
					Fb(se) {
						const re = this.qb.loadEditorState(this.group, se.resource);
						if (re) return re;
						for (const le of this.kb.getGroups(
							o.GroupsOrder.MOST_RECENTLY_ACTIVE,
						))
							if (
								le.activeEditorPane !== this &&
								le.activeEditorPane === this &&
								le.activeEditor?.matches(se)
							) {
								const oe = this.f.value?.getEditorViewState(),
									ae = this.s.saveViewState();
								return { notebook: oe, input: ae };
							}
					}
					async setInput(se, re, le, oe) {
						if (
							(this.f.value?.onWillHide(),
							this.s?.dispose(),
							this.mb.clear(),
							(this.f = this.cb.invokeFunction(
								this.u.retrieveWidget,
								this.group.id,
								se,
								{
									isEmbedded: !0,
									isReadOnly: !0,
									forRepl: !0,
									contributions:
										g.NotebookEditorExtensionsRegistry.getSomeEditorContributions(
											[f.$5Fc.id, f.$6Fc.id, V.$TFc.id],
										),
									menuIds: {
										notebookToolbar: l.$XX.InteractiveToolbar,
										cellTitleToolbar: l.$XX.InteractiveCellTitle,
										cellDeleteToolbar: l.$XX.InteractiveCellDelete,
										cellInsertToolbar: l.$XX.NotebookCellBetween,
										cellTopInsertToolbar: l.$XX.NotebookCellListTop,
										cellExecuteToolbar: l.$XX.InteractiveCellExecute,
										cellExecutePrimary: void 0,
									},
									cellEditorContributions:
										k.EditorExtensionsRegistry.getSomeEditorContributions([
											M.$aYb,
											N.$2Mb.ID,
											W.$whc.ID,
											J.$2Ob.ID,
											B.$7hc.ID,
										]),
									options: this.pb,
									codeWindow: this.window,
								},
								void 0,
								this.window,
							)),
							(this.s = this.cb.createInstance(C.$rwb, this.r, this.ob, {
								isSimpleWidget: !1,
								contributions:
									k.EditorExtensionsRegistry.getSomeEditorContributions([
										D.$_Xb.ID,
										M.$aYb,
										N.$2Mb.ID,
										A.$KDb.ID,
										L.$9jc.ID,
										R.$aDb.ID,
										O.$wYb.ID,
										W.$whc.ID,
										J.$2Ob.ID,
										B.$7hc.ID,
									]),
							})),
							this.nb)
						) {
							(this.c.style.height = `${this.nb.dimension.height - this.xb}px`),
								this.f.value.layout(
									new t.$pgb(
										this.nb.dimension.width,
										this.nb.dimension.height - this.xb,
									),
									this.c,
								);
							const ue = this.pb.getCellEditorContainerLeftMargin(),
								fe = Math.min(this.nb.dimension.height / 2, this.yb);
							this.s.layout(this.Lb(this.nb.dimension.width - ue - _, fe)),
								(this.j.style.height = `${this.yb}px`),
								(this.g.style.top = `${this.nb.dimension.height - this.xb}px`),
								(this.g.style.width = `${this.nb.dimension.width}px`);
						}
						await super.setInput(se, re, le, oe);
						const ae = await se.resolve();
						if ((this.sb && (this.sb.context = se.resource), ae === null))
							throw new Error("The REPL model could not be resolved");
						this.f.value?.setParentContextKeyService(this.eb);
						const pe = re?.viewState ?? this.Fb(se);
						await this.lb.whenInstalledExtensionsRegistered(),
							await this.f.value.setModel(ae.notebook, pe?.notebook),
							ae.notebook.setCellCollapseDefault(
								this.pb.getCellCollapseDefault(),
							),
							this.f.value.setOptions({ isReadOnly: !0 }),
							this.mb.add(
								this.f.value.onDidResizeOutput((ue) => {
									this.Ib(ue);
								}),
							),
							this.mb.add(this.f.value.onDidFocusWidget(() => this.ub.fire())),
							this.mb.add(
								this.pb.onDidChangeOptions((ue) => {
									(ue.compactView || ue.focusIndicator) &&
										(this.b?.remove(), this.Bb()),
										this.nb &&
											this.isVisible() &&
											this.layout(this.nb.dimension, this.nb.position),
										ue.interactiveWindowCollapseCodeCells &&
											ae.notebook.setCellCollapseDefault(
												this.pb.getCellCollapseDefault(),
											);
								}),
							);
						const $e = await se.resolveInput(ae.notebook);
						this.s.setModel($e),
							pe?.input && this.s.restoreViewState(pe.input),
							(this.ob = this.Cb()),
							this.s.updateOptions(this.ob),
							this.mb.add(this.s.onDidFocusEditorWidget(() => this.ub.fire())),
							this.mb.add(
								this.s.onDidContentSizeChange((ue) => {
									ue.contentHeightChanged &&
										this.nb &&
										this.Kb(this.nb.dimension, this.nb.position);
								}),
							),
							this.mb.add(
								this.s.onDidChangeCursorPosition((ue) =>
									this.vb.fire({ reason: this.Gb(ue) }),
								),
							),
							this.mb.add(
								this.s.onDidChangeModelContent(() =>
									this.vb.fire({
										reason: c.EditorPaneSelectionChangeReason.EDIT,
									}),
								),
							),
							this.mb.add(this.gb.onDidChangeNotebookAffinity(this.Jb, this)),
							this.mb.add(this.gb.onDidChangeSelectedNotebooks(this.Jb, this)),
							this.mb.add(
								this.n.onDidColorThemeChange(() => {
									this.isVisible() && this.Mb();
								}),
							),
							this.mb.add(
								this.s.onDidChangeModelContent(() => {
									this.isVisible() && this.Mb();
								}),
							);
						const ye = $.$qJc.bindTo(this.eb);
						se.resource && se.historyService.has(se.resource)
							? ye.set("top")
							: ye.set("none"),
							this.mb.add(
								this.s.onDidChangeCursorPosition(({ position: ue }) => {
									const fe = this.s._getViewModel(),
										me = fe.getLineCount(),
										ve = fe.getLineLength(me) + 1,
										ge =
											fe.coordinatesConverter.convertModelPositionToViewPosition(
												ue,
											),
										be = ge.lineNumber === 1 && ge.column === 1,
										Ce = ge.lineNumber === me && ge.column === ve;
									be
										? Ce
											? ye.set("both")
											: ye.set("top")
										: Ce
											? ye.set("bottom")
											: ye.set("none");
								}),
							),
							this.mb.add(
								$e.onDidChangeContent(() => {
									const ue = $e.getValue();
									if (this.input?.resource && ue !== "") {
										const fe = this.input.historyService;
										fe.matchesCurrent(this.input.resource, ue) ||
											fe.replaceLast(this.input.resource, ue);
									}
								}),
							),
							this.mb.add(this.f.value.onDidScroll(() => this.wb.fire())),
							this.Mb(),
							this.Jb();
					}
					setOptions(se) {
						this.f.value?.setOptions(se), super.setOptions(se);
					}
					Gb(se) {
						switch (se.source) {
							case z.TextEditorSelectionSource.PROGRAMMATIC:
								return c.EditorPaneSelectionChangeReason.PROGRAMMATIC;
							case z.TextEditorSelectionSource.NAVIGATION:
								return c.EditorPaneSelectionChangeReason.NAVIGATION;
							case z.TextEditorSelectionSource.JUMP:
								return c.EditorPaneSelectionChangeReason.JUMP;
							default:
								return c.EditorPaneSelectionChangeReason.USER;
						}
					}
					Hb(se) {
						const re = this.f.value?.visibleRanges || [];
						return (
							this.f.value?.getCellIndex(se) ===
							Math.max(...re.map((oe) => oe.end - 1))
						);
					}
					Ib(se) {
						this.f.value.getCellIndex(se) === this.f.value.getLength() - 1 &&
							(this.fb.getValue(
								$.$rJc.interactiveWindowAlwaysScrollOnNewCell,
							) ||
								this.Hb(se)) &&
							this.f.value.scrollToBottom();
					}
					Jb() {
						const se = this.f.value?.textModel,
							re = this.s.getModel();
						if (se && re) {
							const le = this.gb.getMatchingKernel(se),
								oe =
									le.selected ??
									(le.suggestions.length === 1 ? le.suggestions[0] : void 0) ??
									(le.all.length === 1 ? le.all[0] : void 0);
							if (oe) {
								const ae = oe.supportedLanguages[0];
								if (ae && ae !== "plaintext") {
									const pe = this.db.createById(ae).languageId;
									re.setLanguage(pe);
								}
								x.$SJb.bindTo(this.eb).set(oe.id);
							}
						}
					}
					layout(se, re) {
						this.a.classList.toggle(
							"mid-width",
							se.width < 1e3 && se.width >= 600,
						),
							this.a.classList.toggle("narrow-width", se.width < 600);
						const le = se.height !== this.nb?.dimension.height;
						(this.nb = { dimension: se, position: re }),
							this.f.value &&
								(le && this.s && A.$KDb.get(this.s)?.cancelSuggestWidget(),
								(this.c.style.height = `${this.nb.dimension.height - this.xb}px`),
								this.Kb(se, re));
					}
					Kb(se, re) {
						const le = this.s.hasModel() ? this.s.getContentHeight() : this.yb,
							oe = Math.min(se.height / 2, le),
							ae = this.pb.getCellEditorContainerLeftMargin(),
							pe = oe + ee * 2;
						(this.c.style.height = `${se.height - pe}px`),
							this.f.value.layout(
								se.with(se.width, se.height - pe),
								this.c,
								re,
							),
							this.s.layout(this.Lb(se.width - ae - _, oe)),
							(this.j.style.height = `${le}px`),
							(this.g.style.top = `${se.height - pe}px`),
							(this.g.style.width = `${se.width}px`);
					}
					Lb(se, re) {
						return new t.$pgb(Math.max(0, se), Math.max(0, re));
					}
					Mb() {
						if (!this.s) return;
						const se =
							!this.s.hasModel() ||
							this.fb.getValue($.$rJc.showExecutionHint) === !1 ||
							this.s.getModel().getValueLength() !== 0;
						!this.tb && !se
							? (this.tb = this.cb.createInstance(Y.$sJc, this.s))
							: this.tb && se && (this.tb.dispose(), (this.tb = void 0));
					}
					getScrollPosition() {
						return { scrollTop: this.f.value?.scrollTop ?? 0, scrollLeft: 0 };
					}
					setScrollPosition(se) {
						this.f.value?.setScrollTop(se.scrollTop);
					}
					focus() {
						super.focus(), this.f.value?.onShow(), this.s.focus();
					}
					focusHistory() {
						this.f.value.focus();
					}
					Z(se) {
						super.Z(se),
							(this.rb.value = this.group.onWillCloseEditor((re) =>
								this.Eb(re.editor),
							)),
							se ||
								(this.Eb(this.input),
								this.input && this.f.value && this.f.value.onWillHide()),
							this.Mb();
					}
					clearInput() {
						this.f.value && (this.Eb(this.input), this.f.value.onWillHide()),
							this.s?.dispose(),
							(this.f = { value: void 0 }),
							this.mb.clear(),
							super.clearInput();
					}
					getControl() {
						return { notebookEditor: this.f.value, codeEditor: this.s };
					}
				};
				(e.$xJc = Q),
					(e.$xJc = Q =
						Ne(
							[
								j(1, u.$km),
								j(2, a.$iP),
								j(3, r.$lq),
								j(4, m.$Li),
								j(5, p.$n5b),
								j(6, d.$6j),
								j(7, E.$dtb),
								j(8, b.$f6),
								j(9, s.$nM),
								j(10, y.$uZ),
								j(11, v.$gj),
								j(12, l.$YX),
								j(13, T.$Xxb),
								j(14, o.$EY),
								j(15, U.$XO),
								j(16, F.$d6),
								j(17, H.$q2),
							],
							Q,
						));
			},
		),
		define(
			de[4162],
			he([
				1, 0, 102, 30, 192, 44, 197, 28, 9, 5, 70, 4161, 1850, 3, 55, 53, 403,
				19, 161, 231, 509, 37, 199, 172, 572, 987, 293, 10, 8, 43, 847, 112, 89,
				27, 11, 4, 238, 284, 18,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$PJc = void 0),
					(B = mt(B));
				class z {
					canSerialize(V) {
						return V.typeId === h.$wJc.ID;
					}
					serialize(V) {
						(0, d.$vg)(V instanceof h.$wJc);
						const G = {
							resource: V.resource,
							preferredResource: V.preferredResource,
							viewType: V.viewType,
							options: V.options,
							label: V.getName(),
						};
						return JSON.stringify(G);
					}
					deserialize(V, G) {
						const K = (0, C.$ii)(G);
						if (!K) return;
						const { resource: J, viewType: W } = K;
						return !K || !m.URI.isUri(J) || typeof W != "string"
							? void 0
							: V.createInstance(h.$wJc, J, K.label);
					}
				}
				i.$Io
					.as(E.$a1.EditorPane)
					.registerEditorPane(w.$vVb.create(a.$xJc, u.$S6, "REPL Editor"), [
						new t.$Ji(h.$wJc),
					]),
					i.$Io.as(E.$a1.EditorFactory).registerEditorSerializer(h.$wJc.ID, z);
				let F = class extends c.$1c {
					static {
						this.ID = "workbench.contrib.replDocument";
					}
					constructor(V, G, K, J, W) {
						super(),
							(this.a = K),
							(this.b = J),
							(this.c = W),
							G.registerEditor(
								" ",
								{
									id: "repl",
									label: "repl Editor",
									priority: b.RegisteredEditorPriority.option,
								},
								{
									canSupportResource: (X) =>
										V.getNotebookTextModel(X) !== void 0,
									singlePerResource: !0,
								},
								{
									createUntitledEditorInput: async ({
										resource: X,
										options: Y,
									}) => {
										const ie =
												this.c.getValue(u.$56.InteractiveWindowPromptToSave) !==
												!0,
											ne = await this.a.resolve(
												{ untitledResource: X },
												"jupyter-notebook",
												{ scratchpad: ie },
											);
										ne.object.notebook.onWillDispose(() => {
											ne.dispose();
										});
										const ee = Y?.label ?? void 0;
										return {
											editor: this.b.createInstance(h.$wJc, X, ee),
											options: Y,
										};
									},
									createEditorInput: async ({ resource: X, options: Y }) => {
										const ie = Y?.label ?? void 0;
										return {
											editor: this.b.createInstance(h.$wJc, X, ie),
											options: Y,
										};
									},
								},
							);
					}
				};
				(e.$PJc = F),
					(e.$PJc = F =
						Ne(
							[
								j(0, f.$MIb),
								j(1, b.$E6),
								j(2, s.$OIb),
								j(3, r.$Li),
								j(4, T.$gj),
							],
							F,
						));
				let x = class extends c.$1c {
					static {
						this.ID = "workbench.contrib.replWorkingCopyEditorHandler";
					}
					constructor(V, G, K) {
						super(), (this.a = V), (this.b = G), (this.c = K), this.f();
					}
					handles(V) {
						const G = this.g(V);
						return (
							!!G &&
							G === "jupyter-notebook" &&
							(0, o.$lh)(V.resource) === ".replNotebook"
						);
					}
					isOpen(V, G) {
						return this.handles(V)
							? G instanceof h.$wJc && (0, o.$gh)(V.resource, G.resource)
							: !1;
					}
					createEditor(V) {
						return this.a.createInstance(h.$wJc, V.resource, void 0);
					}
					async f() {
						await this.c.whenInstalledExtensionsRegistered(),
							this.D(this.b.registerHandler(this));
					}
					g(V) {
						return u.$66.parse(V.typeId);
					}
				};
				(x = Ne([j(0, r.$Li), j(1, p.$bZ), j(2, g.$q2)], x)),
					(0, n.$s6)(x.ID, x, n.WorkbenchPhase.BlockRestore),
					(0, n.$s6)(F.ID, F, n.WorkbenchPhase.BlockRestore),
					(0, A.$4X)(
						class extends A.$3X {
							constructor() {
								super({
									id: "repl.execute",
									title: (0, R.localize2)(8960, "Execute REPL input"),
									category: "REPL",
									keybinding: [
										{
											when: P.$Kj.equals(
												"activeEditor",
												"workbench.editor.repl",
											),
											primary: N.KeyMod.CtrlCmd | N.KeyCode.Enter,
											weight: O.$s5b,
										},
										{
											when: P.$Kj.and(
												P.$Kj.equals("activeEditor", "workbench.editor.repl"),
												P.$Kj.equals(
													"config.interactiveWindow.executeWithShiftEnter",
													!0,
												),
											),
											primary: N.KeyMod.Shift | N.KeyCode.Enter,
											weight: O.$s5b,
										},
										{
											when: P.$Kj.and(
												P.$Kj.equals("activeEditor", "workbench.editor.repl"),
												P.$Kj.equals(
													"config.interactiveWindow.executeWithShiftEnter",
													!1,
												),
											),
											primary: N.KeyCode.Enter,
											weight: O.$s5b,
										},
									],
									menu: [{ id: A.$XX.ReplInputExecute }],
									icon: B.$7Nb,
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
							async run(q, V) {
								const G = q.get(U.$IY),
									K = q.get(y.$rzb),
									J = q.get(S.$wnc),
									W = q.get(I.$n5b);
								let X;
								if (V) {
									const Y = m.URI.revive(V),
										ie = G.findEditors(Y);
									for (const ne of ie)
										if (ne.editor.typeId === h.$wJc.ID) {
											X = (
												await G.openEditor(ne.editor, ne.groupId)
											)?.getControl();
											break;
										}
								} else X = G.activeEditorPane?.getControl();
								X && H(K, J, W, X);
							}
						},
					);
				async function H(q, V, G, K) {
					if (K && K.notebookEditor && K.codeEditor) {
						const J = K.notebookEditor.textModel,
							W = K.codeEditor.getModel(),
							Y = K.notebookEditor.activeKernel?.supportedLanguages[0] ?? $.$0M;
						if (J && W) {
							const ie = J.length - 1,
								ne = W.getValue();
							if ((0, l.$jf)(ne)) return;
							V.replaceLast(J.uri, ne),
								V.addToHistory(J.uri, ""),
								W.setValue(""),
								J.cells[ie].resetTextBuffer(W.getTextBuffer());
							const ee =
								K.notebookEditor.notebookOptions.getDisplayOptions()
									.interactiveWindowCollapseCodeCells === "fromEditor"
									? { inputCollapsed: !1, outputCollapsed: !1 }
									: void 0;
							await q.apply([
								new v.$hJb(J.uri, {
									editType: u.CellEditType.Replace,
									index: ie,
									count: 0,
									cells: [
										{
											cellKind: u.CellKind.Code,
											mime: void 0,
											language: Y,
											source: ne,
											outputs: [],
											metadata: {},
											collapseState: ee,
										},
									],
								}),
							]);
							const _ = { start: ie, end: ie + 1 };
							K.notebookEditor.revealCellRangeInView(_),
								await K.notebookEditor.executeNotebookCells(
									K.notebookEditor.getCellsInRange({ start: ie, end: ie + 1 }),
								);
							const te = G.getNotebookEditor(K.notebookEditor.getId());
							te && (te.setSelections([_]), te.setFocus(_));
						}
					}
				}
				k.$TX.registerCommandAndKeybindingRule({
					id: "list.find.replInputFocus",
					weight: k.KeybindingWeight.WorkbenchContrib + 1,
					when: P.$Kj.equals("view", D.$Y4),
					primary: N.KeyMod.CtrlCmd | N.KeyMod.Alt | N.KeyCode.KeyF,
					secondary: [N.KeyCode.F3],
					handler: (q) => {
						(0, L.$OJc)(q.get(M.$HMb))?.openFind();
					},
				});
			},
		),
		define(
			de[405],
			he([
				1, 0, 15, 33, 535, 138, 29, 6, 149, 3, 59, 23, 37, 387, 9, 17, 64, 122,
				67, 10, 5, 73, 34, 84, 32, 51, 35, 68, 1844, 856, 293, 70, 804, 1865,
				1749, 1864, 3593, 186, 1866, 3133, 1030, 24,
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
			) {
				"use strict";
				var H, q, V;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$UNc =
						e.$TNc =
						e.$SNc =
						e.$RNc =
						e.SearchModelLocation =
						e.$QNc =
						e.$MNc =
						e.$LNc =
						e.$KNc =
						e.$JNc =
						e.$INc =
						e.$HNc =
						e.$GNc =
						e.$FNc =
							void 0),
					(e.$NNc = te),
					(e.$ONc = Q),
					(e.$PNc = Z),
					(e.$VNc = ye),
					(e.$WNc = ue),
					(C = mt(C));
				class G {
					static {
						this.c = 250;
					}
					constructor(ge, be, Ce, Le, Fe) {
						(this.l = ge),
							(this.n = be),
							(this.aiContributed = Fe),
							(this.g = be[Ce.startLineNumber]);
						const Oe =
							Ce.startLineNumber === Ce.endLineNumber
								? Ce.endColumn
								: this.g.length;
						(this.h = new B.$w7(1, Ce.startColumn + 1, Oe + 1)),
							(this.f = new g.$iL(
								Le.startLineNumber + 1,
								Le.startColumn + 1,
								Le.endLineNumber + 1,
								Le.endColumn + 1,
							)),
							(this.k = Ce),
							(this.d = this.l.id() + ">" + this.f + this.getMatchString());
					}
					id() {
						return this.d;
					}
					parent() {
						return this.l;
					}
					text() {
						return this.g;
					}
					range() {
						return this.f;
					}
					preview() {
						const ge = this.g.substring(0, this.h.startColumn - 1),
							be = (0, h.$7f)(ge, 26, "\u2026");
						let Ce = this.getMatchString(),
							Le = this.g.substring(this.h.endColumn - 1),
							Fe = G.c - be.length;
						return (
							(Ce = Ce.substr(0, Fe)),
							(Fe -= Ce.length),
							(Le = Le.substr(0, Fe)),
							{ before: be, fullBefore: ge, inside: Ce, after: Le }
						);
					}
					get replaceString() {
						const ge = this.parent().parent().searchModel;
						if (!ge.replacePattern)
							throw new Error(
								"searchModel.replacePattern must be set before accessing replaceString",
							);
						const be = this.fullMatchText();
						let Ce = ge.replacePattern.getReplaceString(be, ge.preserveCase);
						if (Ce !== null) return Ce;
						const Le = be.replace(
							/\r\n/g,
							`
`,
						);
						if (
							Le !== be &&
							((Ce = ge.replacePattern.getReplaceString(Le, ge.preserveCase)),
							Ce !== null)
						)
							return Ce;
						const Fe = this.fullMatchText(!0);
						if (
							((Ce = ge.replacePattern.getReplaceString(Fe, ge.preserveCase)),
							Ce !== null)
						)
							return Ce;
						const Oe = Fe.replace(
							/\r\n/g,
							`
`,
						);
						return Oe !== Fe &&
							((Ce = ge.replacePattern.getReplaceString(Oe, ge.preserveCase)),
							Ce !== null)
							? Ce
							: ge.replacePattern.pattern;
					}
					fullMatchText(ge = !1) {
						let be;
						return (
							ge
								? (be = this.n)
								: ((be = this.n.slice(
										this.k.startLineNumber,
										this.k.endLineNumber + 1,
									)),
									(be[be.length - 1] = be[be.length - 1].slice(
										0,
										this.k.endColumn,
									)),
									(be[0] = be[0].slice(this.k.startColumn))),
							be.join(`
`)
						);
					}
					rangeInPreview() {
						return {
							...this.k,
							startColumn: this.k.startColumn + 1,
							endColumn: this.k.endColumn + 1,
						};
					}
					fullPreviewLines() {
						return this.n.slice(
							this.k.startLineNumber,
							this.k.endLineNumber + 1,
						);
					}
					getMatchString() {
						return this.g.substring(
							this.h.startColumn - 1,
							this.h.endColumn - 1,
						);
					}
				}
				(e.$FNc = G), Ne([E.$ei], G.prototype, "preview", null);
				class K {
					constructor(ge, be, Ce) {
						(this.g = ge),
							(this.h = be),
							(this.k = Ce),
							(this.c = new Map()),
							(this.d = new Map()),
							(this.f = new Map());
					}
					hasCellViewModel() {
						return !(this.h instanceof z.$ENc);
					}
					get context() {
						return new Map(this.f);
					}
					matches() {
						return [...this.c.values(), ...this.d.values()];
					}
					get contentMatches() {
						return Array.from(this.c.values());
					}
					get webviewMatches() {
						return Array.from(this.d.values());
					}
					remove(ge) {
						Array.isArray(ge) || (ge = [ge]);
						for (const be of ge) this.c.delete(be.id()), this.d.delete(be.id());
					}
					clearAllMatches() {
						this.c.clear(), this.d.clear();
					}
					addContentMatches(ge) {
						ye(ge, this).forEach((Ce) => {
							this.c.set(Ce.id(), Ce);
						}),
							this.addContext(ge);
					}
					addContext(ge) {
						this.cell &&
							this.cell.resolveTextModel().then((be) => {
								(0, U.$DNc)(ge, be, this.parent.parent().query)
									.filter((Fe) => !(0, B.$q7)(Fe))
									.map((Fe) => ({ ...Fe, lineNumber: Fe.lineNumber + 1 }))
									.forEach((Fe) => {
										this.f.set(Fe.lineNumber, Fe.text);
									});
							});
					}
					addWebviewMatches(ge) {
						ye(ge, this).forEach((Ce) => {
							this.d.set(Ce.id(), Ce);
						});
					}
					setCellModel(ge) {
						this.h = ge;
					}
					get parent() {
						return this.g;
					}
					get id() {
						return this.h?.id ?? `${R.$T7}${this.cellIndex}`;
					}
					get cellIndex() {
						return this.k;
					}
					get cell() {
						return this.h;
					}
				}
				e.$GNc = K;
				class J extends G {
					constructor(ge, be, Ce, Le, Fe) {
						super(ge.parent, be, Ce, Le, !1),
							(this.q = ge),
							(this.d =
								this.l.id() +
								">" +
								this.q.cellIndex +
								(Fe ? "_" + Fe : "") +
								"_" +
								this.r() +
								this.f +
								this.getMatchString()),
							(this.o = Fe);
					}
					parent() {
						return this.q.parent;
					}
					get cellParent() {
						return this.q;
					}
					r() {
						return this.isWebviewMatch() ? "webview" : "content";
					}
					isWebviewMatch() {
						return this.o !== void 0;
					}
					isReadonly() {
						return !this.q.hasCellViewModel() || this.isWebviewMatch();
					}
					get cellIndex() {
						return this.q.cellIndex;
					}
					get webviewIndex() {
						return this.o;
					}
					get cell() {
						return this.q.cell;
					}
				}
				e.$HNc = J;
				let W = class extends r.$1c {
					static {
						H = this;
					}
					static {
						this.c = o.$eY.register({
							description: "search-current-find-match",
							stickiness: p.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							zIndex: 13,
							className: "currentFindMatch",
							overviewRuler: {
								color: (0, I.$jP)(S.$vR),
								position: p.OverviewRulerLane.Center,
							},
							minimap: {
								color: (0, I.$jP)(S.$AR),
								position: p.MinimapPosition.Inline,
							},
						});
					}
					static {
						this.f = o.$eY.register({
							description: "search-find-match",
							stickiness: p.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							className: "findMatch",
							overviewRuler: {
								color: (0, I.$jP)(S.$vR),
								position: p.OverviewRulerLane.Center,
							},
							minimap: {
								color: (0, I.$jP)(S.$AR),
								position: p.MinimapPosition.Inline,
							},
						});
					}
					static g(ge) {
						return ge ? H.c : H.f;
					}
					get context() {
						return new Map(this.H);
					}
					get cellContext() {
						const ge = new Map();
						return (
							this.w.forEach((be) => {
								ge.set(be.id, be.context);
							}),
							ge
						);
					}
					constructor(ge, be, Ce, Le, Fe, Oe, xe, He, Ke, Je, Te) {
						super(),
							(this.O = ge),
							(this.P = be),
							(this.Q = Ce),
							(this.R = Le),
							(this.S = Fe),
							(this.U = Oe),
							(this.W = xe),
							(this.X = He),
							(this.Y = Ke),
							(this.Z = Te),
							(this.h = this.D(new d.$re())),
							(this.onChange = this.h.event),
							(this.n = this.D(new d.$re())),
							(this.onDispose = this.n.event),
							(this.s = null),
							(this.t = null),
							(this.z = null),
							(this.G = []),
							(this.H = new Map()),
							(this.I = null),
							(this.J = null),
							(this.eb = Promise.resolve()),
							(this.q = this.S.resource),
							(this.u = new Map()),
							(this.y = new Set()),
							(this.F = new t.$Yh(this.bb.bind(this), 250)),
							(this.C = new m.$Y(() => Je.getUriBasenameLabel(this.resource))),
							(this.w = new Map()),
							(this.L = new t.$Yh(
								this.updateMatchesForEditorWidget.bind(this),
								250,
							));
					}
					getTextModel() {
						return this.s;
					}
					addWebviewMatchesToCell(ge, be) {
						const Ce = this.getCellMatch(ge);
						Ce !== void 0 && Ce.addWebviewMatches(be);
					}
					addContentMatchesToCell(ge, be) {
						const Ce = this.getCellMatch(ge);
						Ce !== void 0 && Ce.addContentMatches(be);
					}
					getCellMatch(ge) {
						return this.w.get(ge);
					}
					addCellMatch(ge) {
						const be = new K(
							this,
							(0, N.$xNc)(ge) ? ge.cell : void 0,
							ge.index,
						);
						this.w.set(be.id, be),
							this.addWebviewMatchesToCell(be.id, ge.webviewResults),
							this.addContentMatchesToCell(be.id, ge.contentResults);
					}
					get closestRoot() {
						return this.U;
					}
					hasReadonlyMatches() {
						return this.matches().some(
							(ge) => ge instanceof J && ge.isReadonly(),
						);
					}
					createMatches(ge) {
						const be = this.X.getModel(this.q);
						if (be && !ge) this.bindModel(be), this.bb();
						else {
							const Ce = this.Z.retrieveExistingWidgetFromURI(this.resource);
							Ce?.value && this.bindNotebookEditorWidget(Ce.value),
								this.S.results &&
									this.S.results.filter(B.$q7).forEach((Le) => {
										$e(Le, this, ge).forEach((Fe) => this.add(Fe));
									}),
								((0, N.$wNc)(this.S) || (0, R.$S7)(this.S)) &&
									(this.S.cellResults?.forEach((Le) => this.addCellMatch(Le)),
									this.jb(this.cellMatches()),
									this.h.fire({ forceUpdateModel: !0 })),
								this.addContext(this.S.results);
						}
					}
					bindModel(ge) {
						(this.s = ge),
							(this.t = this.s.onDidChangeContent(() => {
								this.F.schedule();
							})),
							this.s.onWillDispose(() => this.$()),
							this.updateHighlights();
					}
					$() {
						this.bb(), this.ab();
					}
					ab() {
						this.s &&
							(this.F.cancel(),
							this.s.changeDecorations((ge) => {
								this.G = ge.deltaDecorations(this.G, []);
							}),
							(this.s = null),
							this.t.dispose());
					}
					bb() {
						if (!this.s) return;
						this.u = new Map();
						const ge =
								this.O.isWordMatch && this.O.wordSeparators
									? this.O.wordSeparators
									: null,
							be = this.s.findMatches(
								this.O.pattern,
								this.s.getFullModelRange(),
								!!this.O.isRegExp,
								!!this.O.isCaseSensitive,
								ge,
								!1,
								this.Q ?? B.$o7,
							);
						this.db(be, !0, this.s, !1);
					}
					async cb(ge, be) {
						if (!this.s) return;
						const Ce = {
							startLineNumber: ge,
							startColumn: this.s.getLineMinColumn(ge),
							endLineNumber: ge,
							endColumn: this.s.getLineMaxColumn(ge),
						};
						Array.from(this.u.values())
							.filter((xe) => xe.range().startLineNumber === ge)
							.forEach((xe) => this.u.delete(xe.id()));
						const Fe =
								this.O.isWordMatch && this.O.wordSeparators
									? this.O.wordSeparators
									: null,
							Oe = this.s.findMatches(
								this.O.pattern,
								Ce,
								!!this.O.isRegExp,
								!!this.O.isCaseSensitive,
								Fe,
								!1,
								this.Q ?? B.$o7,
							);
						this.db(Oe, be, this.s, !1);
					}
					db(ge, be, Ce, Le) {
						const Fe = (0, U.$CNc)(ge, Ce, this.P);
						Fe.forEach((Oe) => {
							$e(Oe, this, Le).forEach((xe) => {
								this.y.has(xe.id()) ||
									(this.add(xe), this.isMatchSelected(xe) && (this.z = xe));
							});
						}),
							this.addContext(
								(0, U.$DNc)(Fe, Ce, this.parent().parent().query),
							),
							this.h.fire({ forceUpdateModel: be }),
							this.updateHighlights();
					}
					updateHighlights() {
						this.s &&
							this.s.changeDecorations((ge) => {
								const be = this.parent().showHighlights
									? this.matches().map((Ce) => ({
											range: Ce.range(),
											options: H.g(this.isMatchSelected(Ce)),
										}))
									: [];
								this.G = ge.deltaDecorations(this.G, be);
							});
					}
					id() {
						return this.resource.toString();
					}
					parent() {
						return this.R;
					}
					matches() {
						const ge = Array.from(this.w.values()).flatMap((be) =>
							be.matches(),
						);
						return [...this.u.values(), ...ge];
					}
					textMatches() {
						return Array.from(this.u.values());
					}
					cellMatches() {
						return Array.from(this.w.values());
					}
					remove(ge) {
						Array.isArray(ge) || (ge = [ge]);
						for (const be of ge) this.fb(be), this.y.add(be.id());
						this.h.fire({ didRemove: !0 });
					}
					async replace(ge) {
						return (this.eb = this.eb.finally(async () => {
							await this.Y.replace(ge),
								await this.cb(ge.range().startLineNumber, !1);
						}));
					}
					setSelectedMatch(ge) {
						if (ge) {
							if (!this.isMatchSelected(ge) && ge instanceof J) {
								this.z = ge;
								return;
							}
							if (!this.u.has(ge.id()) || this.isMatchSelected(ge)) return;
						}
						(this.z = ge), this.updateHighlights();
					}
					getSelectedMatch() {
						return this.z;
					}
					isMatchSelected(ge) {
						return !!this.z && this.z.id() === ge.id();
					}
					count() {
						return this.matches().length;
					}
					get resource() {
						return this.q;
					}
					name() {
						return this.C.value;
					}
					addContext(ge) {
						return ge
							? ge
									.filter((Ce) => !(0, B.$q7)(Ce))
									.forEach((Ce) => this.H.set(Ce.lineNumber, Ce.text))
							: void 0;
					}
					add(ge, be) {
						this.u.set(ge.id(), ge),
							be && this.h.fire({ forceUpdateModel: !0 });
					}
					fb(ge) {
						ge instanceof J
							? (ge.cellParent.remove(ge),
								ge.cellParent.matches().length === 0 &&
									this.w.delete(ge.cellParent.id))
							: this.u.delete(ge.id()),
							this.isMatchSelected(ge)
								? (this.setSelectedMatch(null),
									this.M?.clearCurrentFindMatchDecoration())
								: this.updateHighlights(),
							ge instanceof J && this.jb(this.cellMatches());
					}
					async resolveFileStat(ge) {
						this.r = await ge.stat(this.resource).catch(() => {});
					}
					get fileStat() {
						return this.r;
					}
					set fileStat(ge) {
						this.r = ge;
					}
					dispose() {
						this.setSelectedMatch(null),
							this.ab(),
							this.unbindNotebookEditorWidget(),
							this.n.fire(),
							super.dispose();
					}
					hasOnlyReadOnlyMatches() {
						return this.matches().every(
							(ge) => ge instanceof J && ge.isReadonly(),
						);
					}
					bindNotebookEditorWidget(ge) {
						this.I !== ge &&
							((this.I = ge),
							(this.J =
								this.I.textModel?.onDidChangeContent((be) => {
									be.rawEvents.some(
										(Ce) =>
											Ce.kind === D.NotebookCellsChangeType.ChangeCellContent ||
											Ce.kind === D.NotebookCellsChangeType.ModelChange,
									) && this.L.schedule();
								}) ?? null),
							this.gb());
					}
					unbindNotebookEditorWidget(ge) {
						(ge && this.I !== ge) ||
							(this.I && (this.L.cancel(), this.J?.dispose()),
							this.hb(),
							(this.I = null));
					}
					updateNotebookHighlights() {
						this.parent().showHighlights
							? (this.gb(), this.jb(Array.from(this.w.values())))
							: this.hb();
					}
					gb() {
						this.I &&
							(this.M?.stopWebviewFind(),
							this.M?.dispose(),
							(this.M = new P.$n2b(this.I, this.W)),
							this.z instanceof J && this.kb(this.z));
					}
					hb() {
						this.M &&
							(this.M?.stopWebviewFind(), this.M?.dispose(), (this.M = void 0));
					}
					ib(ge, be) {
						if (!this.I) return;
						const Ce = new Map(this.w);
						this.I.getId() !== this.N &&
							(this.w.clear(), (this.N = this.I.getId())),
							ge.forEach((Le) => {
								let Fe = this.w.get(Le.cell.id);
								if (this.I && !Fe) {
									const xe = this.I.getCellIndex(Le.cell),
										He = Ce.get(`${R.$T7}${xe}`);
									He &&
										(He.setCellModel(Le.cell), He.clearAllMatches(), (Fe = He));
								}
								Fe?.clearAllMatches();
								const Oe = Fe ?? new K(this, Le.cell, Le.index);
								Oe.addContentMatches((0, N.$yNc)(Le.contentMatches, Le.cell)),
									Oe.addWebviewMatches((0, N.$zNc)(Le.webviewMatches)),
									this.w.set(Oe.id, Oe);
							}),
							this.M?.setAllFindMatchesDecorations(ge),
							this.z instanceof J && this.kb(this.z),
							this.h.fire({ forceUpdateModel: be });
					}
					jb(ge) {
						if (!this.M) return;
						const be = (0, x.$Lb)(
							ge.map((Ce) => {
								const Le = (0, x.$Lb)(
									Ce.webviewMatches.map((Oe) => {
										if (Oe.webviewIndex) return { index: Oe.webviewIndex };
									}),
								);
								if (!Ce.cell) return;
								const Fe = Ce.contentMatches.map(
									(Oe) => new p.$MN(Oe.range(), [Oe.text()]),
								);
								return new F.$o2b(Ce.cell, Ce.cellIndex, Fe, Le);
							}),
						);
						try {
							this.M.setAllFindMatchesDecorations(be);
						} catch {}
					}
					async updateMatchesForEditorWidget() {
						if (!this.I) return;
						this.u = new Map();
						const ge =
								this.O.isWordMatch && this.O.wordSeparators
									? this.O.wordSeparators
									: null,
							be = await this.I.find(
								this.O.pattern,
								{
									regex: this.O.isRegExp,
									wholeWord: this.O.isWordMatch,
									caseSensitive: this.O.isCaseSensitive,
									wordSeparators: ge ?? void 0,
									includeMarkupInput:
										this.O.notebookInfo?.isInNotebookMarkdownInput,
									includeMarkupPreview:
										this.O.notebookInfo?.isInNotebookMarkdownPreview,
									includeCodeInput: this.O.notebookInfo?.isInNotebookCellInput,
									includeOutput: this.O.notebookInfo?.isInNotebookCellOutput,
								},
								i.CancellationToken.None,
								!1,
								!0,
								this.W,
							);
						this.ib(be, !0);
					}
					async showMatch(ge) {
						const be = await this.kb(ge);
						this.setSelectedMatch(ge), this.lb(ge, be);
					}
					async kb(ge) {
						return !this.M || !ge.cell
							? null
							: ge.webviewIndex === void 0
								? this.M.highlightCurrentFindMatchDecorationInCell(
										ge.cell,
										ge.range(),
									)
								: this.M.highlightCurrentFindMatchDecorationInWebview(
										ge.cell,
										ge.webviewIndex,
									);
					}
					lb(ge, be) {
						!this.I ||
							!ge.cell ||
							(ge.webviewIndex !== void 0
								? this.I.getCellIndex(ge.cell) !== void 0 &&
									this.I.revealCellOffsetInCenter(ge.cell, be ?? 0)
								: (ge.cell.updateEditState(
										ge.cell.getEditState(),
										"focusNotebookCell",
									),
									this.I.setCellEditorSelection(ge.cell, ge.range()),
									this.I.revealRangeInCenterIfOutsideViewportAsync(
										ge.cell,
										ge.range(),
									)));
					}
				};
				(e.$INc = W),
					(e.$INc =
						W =
						H =
							Ne([j(7, f.$QO), j(8, M.$XNc), j(9, l.$3N), j(10, L.$n5b)], W));
				let X = (q = class extends r.$1c {
					constructor(ge, be, Ce, Le, Fe, Oe, xe, He, Ke, Je, Te) {
						super(),
							(this.u = ge),
							(this.w = be),
							(this.y = Ce),
							(this.z = Le),
							(this.C = Fe),
							(this.F = Oe),
							(this.G = xe),
							(this.H = He),
							(this.I = Ke),
							(this.J = Te),
							(this.c = this.D(new d.$re())),
							(this.onChange = this.c.event),
							(this.f = this.D(new d.$re())),
							(this.onDispose = this.f.event),
							(this.s = !1),
							(this.g = new u.$Gc()),
							(this.h = new u.$Gc()),
							(this.n = c.$Si.forUris((Ee) =>
								this.J.extUri.ignorePathCasing(Ee),
							)),
							(this.q = new u.$Gc()),
							(this.r = new u.$Gc()),
							(this.t = new m.$Y(() =>
								this.resource ? Je.getUriBasenameLabel(this.resource) : "",
							));
					}
					get searchModel() {
						return this.F.searchModel;
					}
					get showHighlights() {
						return this.C.showHighlights;
					}
					get closestRoot() {
						return this.G;
					}
					set replacingAll(ge) {
						this.s = ge;
					}
					id() {
						return this.w;
					}
					get resource() {
						return this.u;
					}
					index() {
						return this.y;
					}
					name() {
						return this.t.value;
					}
					parent() {
						return this.C;
					}
					bindModel(ge) {
						const be = this.g.get(ge.uri);
						be
							? be.bindModel(ge)
							: this.getFolderMatch(ge.uri)
									?.getDownstreamFileMatch(ge.uri)
									?.bindModel(ge);
					}
					async bindNotebookEditorWidget(ge, be) {
						const Ce = this.g.get(be);
						if (Ce)
							Ce.bindNotebookEditorWidget(ge),
								await Ce.updateMatchesForEditorWidget();
						else {
							const Le = this.folderMatchesIterator();
							for (const Fe of Le) await Fe.bindNotebookEditorWidget(ge, be);
						}
					}
					unbindNotebookEditorWidget(ge, be) {
						const Ce = this.g.get(be);
						if (Ce) Ce.unbindNotebookEditorWidget(ge);
						else {
							const Le = this.folderMatchesIterator();
							for (const Fe of Le) Fe.unbindNotebookEditorWidget(ge, be);
						}
					}
					createIntermediateFolderMatch(ge, be, Ce, Le, Fe) {
						const Oe = this.D(
							this.I.createInstance(Y, ge, be, Ce, Le, this, this.F, Fe),
						);
						return (
							this.configureIntermediateMatch(Oe), this.doAddFolder(Oe), Oe
						);
					}
					configureIntermediateMatch(ge) {
						const be = ge.onChange((Ce) => this.onFolderChange(ge, Ce));
						this.D(ge.onDispose(() => be.dispose()));
					}
					clear(ge = !1) {
						const be = this.allDownstreamFileMatches();
						this.R(),
							this.c.fire({
								elements: be,
								removed: !0,
								added: !1,
								clearingAll: ge,
							});
					}
					remove(ge) {
						Array.isArray(ge) || (ge = [ge]);
						const be = fe(ge);
						this.Q(be);
					}
					async replace(ge) {
						return this.H.replace([ge]).then(() => {
							this.Q([ge], !0, !0, !0);
						});
					}
					replaceAll() {
						const ge = this.matches();
						return this.P(ge);
					}
					matches() {
						return [
							...this.fileMatchesIterator(),
							...this.folderMatchesIterator(),
						];
					}
					fileMatchesIterator() {
						return this.g.values();
					}
					folderMatchesIterator() {
						return this.h.values();
					}
					isEmpty() {
						return this.L() + this.M() === 0;
					}
					getDownstreamFileMatch(ge) {
						const be = this.g.get(ge);
						if (be) return be;
						const Le = this.getFolderMatch(ge)?.getDownstreamFileMatch(ge);
						return Le || null;
					}
					allDownstreamFileMatches() {
						let ge = [];
						const be = this.folderMatchesIterator();
						for (const Ce of be) ge = ge.concat(Ce.allDownstreamFileMatches());
						return [...this.fileMatchesIterator(), ...ge];
					}
					L() {
						return this.g.size;
					}
					M() {
						return this.h.size;
					}
					count() {
						return this.L() + this.M();
					}
					recursiveFileCount() {
						return this.allDownstreamFileMatches().length;
					}
					recursiveMatchCount() {
						return this.allDownstreamFileMatches().reduce(
							(ge, be) => ge + be.count(),
							0,
						);
					}
					get query() {
						return this.z;
					}
					addFileMatch(ge, be, Ce, Le) {
						const Fe = [],
							Oe = [];
						ge.forEach((He) => {
							const Ke = this.getDownstreamFileMatch(He.resource);
							if (Ke)
								He.results &&
									He.results.filter(B.$q7).forEach((Je) => {
										$e(Je, Ke, Le).forEach((Te) => Ke.add(Te));
									}),
									((0, N.$wNc)(He) || (0, R.$S7)(He)) &&
										He.cellResults?.forEach((Je) => {
											const Te = Ke.getCellMatch((0, N.$vNc)(Je));
											Te
												? (Te.addContentMatches(Je.contentResults),
													Te.addWebviewMatches(Je.webviewResults))
												: Ke.addCellMatch(Je);
										}),
									Oe.push(Ke),
									He.results &&
										He.results.length > 0 &&
										Ke.addContext(He.results);
							else if (this instanceof ie || this instanceof ne) {
								const Je = this.createAndConfigureFileMatch(He, Ce);
								Fe.push(Je);
							}
						});
						const xe = [...Fe, ...Oe];
						!be &&
							xe.length &&
							this.c.fire({ elements: xe, added: !!Fe.length });
					}
					doAddFile(ge) {
						this.g.set(ge.resource, ge),
							this.q.has(ge.resource) && this.q.delete(ge.resource);
					}
					hasOnlyReadOnlyMatches() {
						return Array.from(this.g.values()).every((ge) =>
							ge.hasOnlyReadOnlyMatches(),
						);
					}
					N(ge, be) {
						return (
							this.J.extUri.isEqualOrParent(be, ge) &&
							!this.J.extUri.isEqual(be, ge)
						);
					}
					O(ge) {
						let be = this;
						for (; be instanceof q; ) {
							if (be.id() === ge.id()) return !0;
							be = be.parent();
						}
						return !1;
					}
					getFolderMatch(ge) {
						return this.n.findSubstr(ge);
					}
					doAddFolder(ge) {
						if (this instanceof Y && !this.N(this.resource, ge.resource))
							throw Error(
								`${ge.resource} does not belong as a child of ${this.resource}`,
							);
						if (this.O(ge))
							throw Error(`${ge.resource} is a parent of ${this.resource}`);
						this.h.set(ge.resource, ge),
							this.n.set(ge.resource, ge),
							this.r.has(ge.resource) && this.r.delete(ge.resource);
					}
					async P(ge) {
						const be = fe(ge);
						await this.H.replace(be), this.Q(be, !0, !0, !0);
					}
					onFileChange(ge, be = !1) {
						let Ce = !1;
						this.g.has(ge.resource) || (this.doAddFile(ge), (Ce = !0)),
							ge.count() === 0 && (this.Q([ge], !1, !1), (Ce = !1), (be = !0)),
							this.s || this.c.fire({ elements: [ge], added: Ce, removed: be });
					}
					onFolderChange(ge, be) {
						this.h.has(ge.resource) || this.doAddFolder(ge),
							ge.isEmpty() && (this.h.delete(ge.resource), ge.dispose()),
							this.c.fire(be);
					}
					Q(ge, be = !0, Ce = !0, Le = !1) {
						const Fe = [];
						for (const Oe of ge)
							if (this.g.get(Oe.resource)) {
								if (Le && Oe.hasReadonlyMatches()) continue;
								this.g.delete(Oe.resource),
									be ? Oe.dispose() : this.q.set(Oe.resource, Oe),
									Fe.push(Oe);
							} else {
								const xe = this.getFolderMatch(Oe.resource);
								if (xe) xe.Q([Oe], be, Ce);
								else
									throw Error(
										`FileMatch ${Oe.resource} is not located within FolderMatch ${this.resource}`,
									);
							}
						Ce && this.c.fire({ elements: Fe, removed: !0 });
					}
					R() {
						[...this.g.values()].forEach((ge) => ge.dispose()),
							[...this.h.values()].forEach((ge) => ge.R()),
							[...this.q.values()].forEach((ge) => ge.dispose()),
							[...this.r.values()].forEach((ge) => ge.R()),
							this.g.clear(),
							this.h.clear(),
							this.q.clear(),
							this.r.clear();
					}
					dispose() {
						this.R(), this.f.fire(), super.dispose();
					}
				});
				(e.$JNc = X),
					(e.$JNc =
						X =
						q =
							Ne([j(7, M.$XNc), j(8, s.$Li), j(9, l.$3N), j(10, T.$Vl)], X));
				let Y = class extends X {
					constructor(ge, be, Ce, Le, Fe, Oe, xe, He, Ke, Je, Te) {
						super(ge, be, Ce, Le, Fe, Oe, xe, He, Ke, Je, Te),
							(this.S = new m.$Y(() =>
								this.J.extUri.removeTrailingPathSeparator(
									this.J.extUri.normalizePath(this.resource),
								),
							));
					}
					get resource() {
						return this.u;
					}
					get normalizedResource() {
						return this.S.value;
					}
				};
				(e.$KNc = Y),
					(e.$KNc = Y =
						Ne([j(7, M.$XNc), j(8, s.$Li), j(9, l.$3N), j(10, T.$Vl)], Y));
				let ie = class extends Y {
					constructor(ge, be, Ce, Le, Fe, Oe, xe, He, Ke, Je) {
						super(ge, be, Ce, Le, Fe, Fe, null, xe, He, Ke, Je), (this.U = Oe);
					}
					W(ge) {
						return this.J.extUri.normalizePath(this.J.extUri.dirname(ge));
					}
					X(ge, be) {
						return this.J.extUri.isEqual(ge, be);
					}
					Y(ge, be, Ce, Le, Fe, Oe, xe) {
						const He = this.I.createInstance(W, ge, be, Ce, Le, Fe, Oe, xe);
						He.createMatches(this.U), Le.doAddFile(He);
						const Ke = He.onChange(({ didRemove: Je }) =>
							Le.onFileChange(He, Je),
						);
						return this.D(He.onDispose(() => Ke.dispose())), He;
					}
					createAndConfigureFileMatch(ge, be) {
						if (!this.N(this.resource, ge.resource))
							throw Error(
								`${ge.resource} is not a descendant of ${this.resource}`,
							);
						const Ce = [];
						let Le = this.W(ge.resource);
						for (; !this.X(this.normalizedResource, Le); ) {
							Ce.unshift(Le);
							const xe = Le;
							if (
								((Le = this.J.extUri.removeTrailingPathSeparator(this.W(Le))),
								this.X(xe, Le))
							)
								throw Error(
									`${ge.resource} is not correctly configured as a child of ${this.normalizedResource}`,
								);
						}
						const Fe = this.closestRoot ?? this;
						let Oe = this;
						for (let xe = 0; xe < Ce.length; xe++) {
							let He = Oe.getFolderMatch(Ce[xe]);
							He ||
								(He = Oe.createIntermediateFolderMatch(
									Ce[xe],
									Ce[xe].toString(),
									-1,
									this.z,
									Fe,
								)),
								(Oe = He);
						}
						return this.Y(
							this.z.contentPattern,
							this.z.previewOptions,
							this.z.maxResults,
							Oe,
							ge,
							Fe,
							be,
						);
					}
				};
				(e.$LNc = ie),
					(e.$LNc = ie =
						Ne([j(6, M.$XNc), j(7, s.$Li), j(8, l.$3N), j(9, T.$Vl)], ie));
				let ne = class extends X {
					constructor(ge, be, Ce, Le, Fe, Oe, xe, He) {
						super(null, ge, be, Ce, Le, Le, null, Fe, Oe, xe, He);
					}
					createAndConfigureFileMatch(ge, be) {
						const Ce = this.D(
							this.I.createInstance(
								W,
								this.z.contentPattern,
								this.z.previewOptions,
								this.z.maxResults,
								this,
								ge,
								null,
								be,
							),
						);
						Ce.createMatches(!1), this.doAddFile(Ce);
						const Le = Ce.onChange(({ didRemove: Fe }) =>
							this.onFileChange(Ce, Fe),
						);
						return this.D(Ce.onDispose(() => Le.dispose())), Ce;
					}
				};
				(e.$MNc = ne),
					(e.$MNc = ne =
						Ne([j(4, M.$XNc), j(5, s.$Li), j(6, l.$3N), j(7, T.$Vl)], ne));
				let ee = -1,
					_ = -1;
				function te(ve, ge, be = B.SearchSortOrder.Default) {
					if (ve instanceof W && ge instanceof X) return 1;
					if (ge instanceof W && ve instanceof X) return -1;
					if (ve instanceof X && ge instanceof X) {
						if (((ee = ve.index()), (_ = ge.index()), ee !== -1 && _ !== -1))
							return ee - _;
						switch (be) {
							case B.SearchSortOrder.CountDescending:
								return ge.count() - ve.count();
							case B.SearchSortOrder.CountAscending:
								return ve.count() - ge.count();
							case B.SearchSortOrder.Type:
								return (0, w.$8r)(ve.name(), ge.name());
							case B.SearchSortOrder.FileNames:
								return (0, w.$3r)(ve.name(), ge.name());
							default:
								return !ve.resource || !ge.resource
									? 0
									: (0, w.$as)(ve.resource.fsPath, ge.resource.fsPath) ||
											(0, w.$3r)(ve.name(), ge.name());
						}
					}
					if (ve instanceof W && ge instanceof W)
						switch (be) {
							case B.SearchSortOrder.CountDescending:
								return ge.count() - ve.count();
							case B.SearchSortOrder.CountAscending:
								return ve.count() - ge.count();
							case B.SearchSortOrder.Type:
								return (0, w.$8r)(ve.name(), ge.name());
							case B.SearchSortOrder.FileNames:
								return (0, w.$3r)(ve.name(), ge.name());
							case B.SearchSortOrder.Modified: {
								const Ce = ve.fileStat,
									Le = ge.fileStat;
								if (Ce && Le) return Le.mtime - Ce.mtime;
							}
							default:
								return (
									(0, w.$as)(ve.resource.fsPath, ge.resource.fsPath) ||
									(0, w.$3r)(ve.name(), ge.name())
								);
						}
					return ve instanceof J && ge instanceof J
						? Q(ve, ge)
						: ve instanceof G && ge instanceof G
							? g.$iL.compareRangesUsingStarts(ve.range(), ge.range())
							: 0;
				}
				function Q(ve, ge) {
					return ve.cellIndex === ge.cellIndex
						? ve.webviewIndex !== void 0 && ge.webviewIndex !== void 0
							? ve.webviewIndex - ge.webviewIndex
							: ve.webviewIndex === void 0 && ge.webviewIndex === void 0
								? g.$iL.compareRangesUsingStarts(ve.range(), ge.range())
								: ve.webviewIndex !== void 0
									? 1
									: -1
						: ve.cellIndex < ge.cellIndex
							? -1
							: 1;
				}
				function Z(ve, ge, be = B.SearchSortOrder.Default) {
					const Ce = se(ve),
						Le = se(ge);
					let Fe = Ce.length - 1,
						Oe = Le.length - 1;
					for (; Fe >= 0 && Oe >= 0; ) {
						if (Ce[Fe].id() !== Le[Oe].id()) return te(Ce[Fe], Le[Oe], be);
						Fe--, Oe--;
					}
					const xe = Fe === 0,
						He = Oe === 0;
					return xe && !He ? 1 : !xe && He ? -1 : 0;
				}
				function se(ve) {
					const ge = [];
					let be = ve;
					for (; !(be instanceof re); ) ge.push(be), (be = be.parent());
					return ge;
				}
				let re = class extends r.$1c {
					constructor(ge, be, Ce, Le, Fe, Oe) {
						super(),
							(this.searchModel = ge),
							(this.G = be),
							(this.H = Ce),
							(this.I = Le),
							(this.J = Fe),
							(this.L = Oe),
							(this.c = this.D(new d.$ue({ merge: me }))),
							(this.onChange = this.c.event),
							(this.f = []),
							(this.g = []),
							(this.h = null),
							(this.n = c.$Si.forUris((xe) =>
								this.J.extUri.ignorePathCasing(xe),
							)),
							(this.q = c.$Si.forUris((xe) =>
								this.J.extUri.ignorePathCasing(xe),
							)),
							(this.r = !1),
							(this.s = null),
							(this.u = () => Promise.resolve()),
							(this.w = !1),
							(this.t = this.H.createInstance(pe)),
							this.I.getModels().forEach((xe) => this.N(xe)),
							this.D(this.I.onModelAdded((xe) => this.N(xe))),
							this.D(
								this.L.onDidAddNotebookEditor((xe) => {
									xe instanceof k.$24b && this.M(xe);
								}),
							),
							this.D(
								this.onChange((xe) => {
									xe.removed && (this.w = !this.isEmpty() || !this.isEmpty(!0));
								}),
							);
					}
					async batchReplace(ge) {
						try {
							this.c.pause(),
								await Promise.all(
									ge.map(async (be) => {
										const Ce = be.parent();
										((Ce instanceof X || Ce instanceof W) && ue(Ce, ge)) ||
											(be instanceof W
												? await be.parent().replace(be)
												: be instanceof G
													? await be.parent().replace(be)
													: be instanceof X && (await be.replaceAll()));
									}),
								);
						} finally {
							this.c.resume();
						}
					}
					batchRemove(ge) {
						const be = [];
						try {
							this.c.pause(),
								ge.forEach((Ce) => {
									ue(Ce, be) || (Ce.parent().remove(Ce), be.push(Ce));
								});
						} finally {
							this.c.resume();
						}
					}
					get isDirty() {
						return this.w;
					}
					get query() {
						return this.s;
					}
					set query(ge) {
						const be = this.folderMatches();
						(this.u = async () => {
							be.forEach((Ce) => Ce.clear()),
								be.forEach((Ce) => Ce.dispose()),
								(this.w = !1);
						}),
							(this.C = void 0),
							(this.F = void 0),
							this.t.removeHighlightRange(),
							(this.n = c.$Si.forUris((Ce) =>
								this.J.extUri.ignorePathCasing(Ce),
							)),
							(this.q = c.$Si.forUris((Ce) =>
								this.J.extUri.ignorePathCasing(Ce),
							)),
							ge &&
								((this.f = ((ge && ge.folderQueries) || [])
									.map((Ce) => Ce.folder)
									.map((Ce, Le) => this.Q(Ce, Ce.toString(), Le, ge, !1))),
								this.f.forEach((Ce) => this.n.set(Ce.resource, Ce)),
								(this.g = ((ge && ge.folderQueries) || [])
									.map((Ce) => Ce.folder)
									.map((Ce, Le) => this.Q(Ce, Ce.toString(), Le, ge, !0))),
								this.g.forEach((Ce) => this.q.set(Ce.resource, Ce)),
								(this.h = this.Q(
									null,
									"otherFiles",
									this.f.length + this.g.length + 1,
									ge,
									!1,
								)),
								(this.s = ge));
					}
					setCachedSearchComplete(ge, be) {
						be ? (this.F = ge) : (this.C = ge);
					}
					getCachedSearchComplete(ge) {
						return ge ? this.F : this.C;
					}
					M(ge) {
						this.y?.dispose(),
							(this.y = ge.onWillChangeModel((be) => {
								be && this.P(ge, be?.uri);
							})),
							this.z?.dispose(),
							(this.z = ge.onDidAttachViewModel(() => {
								ge.hasModel() && this.O(ge, ge.textModel.uri);
							}));
					}
					N(ge) {
						this.n.findSubstr(ge.uri)?.bindModel(ge);
					}
					async O(ge, be) {
						await this.n.findSubstr(be)?.bindNotebookEditorWidget(ge, be);
					}
					P(ge, be) {
						this.n.findSubstr(be)?.unbindNotebookEditorWidget(ge, be);
					}
					Q(ge, be, Ce, Le, Fe) {
						let Oe;
						ge
							? (Oe = this.D(
									this.H.createInstance(ie, ge, be, Ce, Le, this, Fe),
								))
							: (Oe = this.D(this.H.createInstance(ne, be, Ce, Le, this)));
						const xe = Oe.onChange((He) => this.c.fire(He));
						return this.D(Oe.onDispose(() => xe.dispose())), Oe;
					}
					add(ge, be, Ce, Le = !1) {
						const { byFolder: Fe, other: Oe } = this.W(ge, Ce);
						Fe.forEach((xe) => {
							if (!xe.length) return;
							(Ce
								? this.S(xe[0].resource)
								: this.R(xe[0].resource)
							)?.addFileMatch(xe, Le, be, Ce);
						}),
							Ce || this.h?.addFileMatch(Oe, Le, be, !1),
							this.u();
					}
					clear() {
						this.folderMatches().forEach((ge) => ge.clear(!0)),
							this.folderMatches(!0),
							this.X(),
							(this.f = []),
							(this.g = []),
							(this.h = null);
					}
					remove(ge, be = !1) {
						Array.isArray(ge) || (ge = [ge]),
							ge.forEach((Oe) => {
								Oe instanceof X && Oe.clear();
							});
						const Ce = ge.filter((Oe) => Oe instanceof W),
							{ byFolder: Le, other: Fe } = this.W(Ce, be);
						Le.forEach((Oe) => {
							Oe.length && this.R(Oe[0].resource).remove(Oe);
						}),
							Fe.length && this.R(Fe[0].resource).remove(Fe);
					}
					replace(ge) {
						return this.R(ge.resource).replace(ge);
					}
					replaceAll(ge) {
						return (
							(this.U = !0),
							this.G.replace(this.matches(), ge).then(
								() => {
									(this.U = !1), this.clear();
								},
								() => {
									this.U = !1;
								},
							)
						);
					}
					folderMatches(ge = !1) {
						return ge ? this.g : this.h ? [...this.f, this.h] : [...this.f];
					}
					matches(ge = !1) {
						const be = [];
						return (
							this.folderMatches(ge).forEach((Ce) => {
								be.push(Ce.allDownstreamFileMatches());
							}),
							[].concat(...be)
						);
					}
					isEmpty(ge = !1) {
						return this.folderMatches(ge).every((be) => be.isEmpty());
					}
					fileCount(ge = !1) {
						return this.folderMatches(ge).reduce(
							(be, Ce) => be + Ce.recursiveFileCount(),
							0,
						);
					}
					count(ge = !1) {
						return this.matches(ge).reduce((be, Ce) => be + Ce.count(), 0);
					}
					get showHighlights() {
						return this.r;
					}
					toggleHighlights(ge) {
						if (this.r === ge) return;
						this.r = ge;
						let be = null;
						this.matches().forEach((Ce) => {
							Ce.updateHighlights(),
								Ce.updateNotebookHighlights(),
								be || (be = Ce.getSelectedMatch());
						}),
							this.r && be
								? this.t.highlightRange(be.parent().resource, be.range())
								: this.t.removeHighlightRange();
					}
					get rangeHighlightDecorations() {
						return this.t;
					}
					R(ge) {
						const be = this.n.findSubstr(ge);
						return be || this.h;
					}
					S(ge) {
						return this.q.findSubstr(ge);
					}
					set U(ge) {
						this.folderMatches().forEach((be) => {
							be.replacingAll = ge;
						});
					}
					W(ge, be) {
						const Ce = new u.$Gc(),
							Le = [];
						return (
							(be ? this.g : this.f).forEach((Fe) => Ce.set(Fe.resource, [])),
							ge.forEach((Fe) => {
								const Oe = be ? this.S(Fe.resource) : this.R(Fe.resource);
								if (!Oe) return;
								const xe = Oe.resource;
								xe ? Ce.get(xe).push(Fe) : Le.push(Fe);
							}),
							{ byFolder: Ce, other: Le }
						);
					}
					X() {
						this.folderMatches().forEach((ge) => ge.dispose()),
							this.folderMatches(!0).forEach((ge) => ge.dispose()),
							(this.f = []),
							(this.g = []),
							(this.n = c.$Si.forUris((ge) =>
								this.J.extUri.ignorePathCasing(ge),
							)),
							(this.q = c.$Si.forUris((ge) =>
								this.J.extUri.ignorePathCasing(ge),
							)),
							this.t.removeHighlightRange();
					}
					async dispose() {
						this.y?.dispose(),
							this.z?.dispose(),
							this.t.dispose(),
							this.X(),
							super.dispose(),
							await this.u();
					}
				};
				(e.$QNc = re),
					(e.$QNc = re =
						Ne(
							[
								j(1, M.$XNc),
								j(2, s.$Li),
								j(3, f.$QO),
								j(4, T.$Vl),
								j(5, L.$n5b),
							],
							re,
						));
				var le;
				(function (ve) {
					(ve[(ve.PANEL = 0)] = "PANEL"),
						(ve[(ve.QUICK_ACCESS = 1)] = "QUICK_ACCESS");
				})(le || (e.SearchModelLocation = le = {}));
				let oe = class extends r.$1c {
					constructor(ge, be, Ce, Le, Fe, Oe, xe) {
						super(),
							(this.G = ge),
							(this.H = be),
							(this.I = Ce),
							(this.J = Le),
							(this.L = Fe),
							(this.M = Oe),
							(this.N = xe),
							(this.f = null),
							(this.g = !1),
							(this.h = null),
							(this.n = null),
							(this.q = !1),
							(this.r = Promise.resolve()),
							(this.s = []),
							(this.t = []),
							(this.u = this.D(new d.$re())),
							(this.onReplaceTermChanged = this.u.event),
							(this.w = this.D(new d.$ue({ merge: me }))),
							(this.onSearchResultChanged = this.w.event),
							(this.y = null),
							(this.z = null),
							(this.C = !1),
							(this.F = !1),
							(this.location = le.PANEL),
							(this.c = this.J.createInstance(re, this)),
							this.D(this.c.onChange((He) => this.w.fire(He)));
					}
					isReplaceActive() {
						return this.g;
					}
					set replaceActive(ge) {
						this.g = ge;
					}
					get replacePattern() {
						return this.n;
					}
					get replaceString() {
						return this.h || "";
					}
					set preserveCase(ge) {
						this.q = ge;
					}
					get preserveCase() {
						return this.q;
					}
					set replaceString(ge) {
						(this.h = ge),
							this.f && (this.n = new O.$BNc(ge, this.f.contentPattern)),
							this.u.fire();
					}
					get searchResult() {
						return this.c;
					}
					async addAIResults(ge) {
						this.searchResult.count(!0) ||
							(this.f &&
								(await this.aiSearch(
									{
										...this.f,
										contentPattern: this.f.contentPattern.pattern,
										type: B.QueryType.aiText,
									},
									ge,
									this.y?.token,
								)));
					}
					async O(ge, be, Ce, Le) {
						const Fe = this.G.aiTextSearch(ge, Ce, async (Oe) => {
							this.S(Oe, be, !1, !0), Le?.(Oe);
						});
						return this.N.withProgress(
							{
								location: $.ProgressLocation.Notification,
								type: "syncing",
								title: "Searching for AI results...",
							},
							async (Oe) => Fe,
						);
					}
					aiSearch(ge, be, Ce) {
						const Le = Date.now().toString(),
							Fe = (this.z = new i.$Ce(Ce)),
							Oe = Date.now();
						return this.O(ge, Le, this.z.token, async (He) => {
							this.S(He, Le, !1, !0), be?.(He);
						})
							.then(
								(He) => (this.Q(He, Date.now() - Oe, Le, !0), He),
								(He) => {
									throw (this.R(He, Date.now() - Oe, !0), He);
								},
							)
							.finally(() => Fe.dispose());
					}
					P(ge, be, Ce, Le, Fe, Oe) {
						const xe = async (Be) => {
								be.fire(), this.S(Be, Le, !1, !1), Fe?.(Be);
							},
							He = (Be) => {
								be.fire(), this.S(Be, Le, !0), Fe?.(Be);
							},
							Ke = (this.y = new i.$Ce(Oe)),
							Je = this.M.notebookSearch(ge, Ke.token, Le, xe),
							Te = this.G.textSearchSplitSyncAsync(
								Ce,
								this.y.token,
								xe,
								Je.openFilesToScan,
								Je.allScannedFiles,
							),
							Ee = Te.syncResults.results;
						return (
							Ee.forEach((Be) => {
								Be && He(Be);
							}),
							{
								asyncResults: (async () => {
									const Be = Date.now(),
										Se = await Te.asyncResults,
										ke = await Je.completeData;
									Ke.dispose();
									const Ue = Date.now() - Be,
										qe = {
											results: [...Se.results, ...ke.results],
											messages: [...Se.messages, ...ke.messages],
											limitHit: Se.limitHit || ke.limitHit,
											exit: Se.exit,
											stats: Se.stats,
										};
									return this.L.trace(`whole search time | ${Ue}ms`), qe;
								})(),
								syncResults: Ee,
							}
						);
					}
					search(ge, be, Ce) {
						this.cancelSearch(!0),
							(this.f = ge),
							this.U.searchOnType || this.searchResult.clear();
						const Le = Date.now().toString();
						this.c.query = this.f;
						const Fe = this.D(new d.$re());
						(this.n = new O.$BNc(this.replaceString, this.f.contentPattern)),
							(this.r = new Promise((Ee) =>
								setTimeout(Ee, this.U.searchOnType ? 150 : 0),
							));
						const Oe = this.P(ge, Fe, this.f, Le, be, Ce),
							xe = Oe.asyncResults,
							He = Oe.syncResults;
						be &&
							He.forEach((Ee) => {
								Ee && be(Ee);
							});
						const Ke = Date.now();
						let Je;
						const Te = new Promise(
							(Ee) => ((Je = d.Event.once(Fe.event)(Ee)), Je),
						);
						Promise.race([xe, Te]).finally(() => {
							Je?.dispose(),
								this.H.publicLog("searchResultsFirstRender", {
									duration: Date.now() - Ke,
								});
						});
						try {
							return {
								asyncResults: xe.then(
									(Ee) => (this.Q(Ee, Date.now() - Ke, Le, !1), Ee),
									(Ee) => {
										throw (this.R(Ee, Date.now() - Ke, !1), Ee);
									},
								),
								syncResults: He,
							};
						} finally {
							this.H.publicLog("searchResultsFinished", {
								duration: Date.now() - Ke,
							});
						}
					}
					Q(ge, be, Ce, Le) {
						if (!this.f)
							throw new Error(
								"onSearchCompleted must be called after a search is started",
							);
						Le
							? (this.c.add(this.t, Ce, !0), (this.t.length = 0))
							: (this.c.add(this.s, Ce, !1), (this.s.length = 0)),
							this.searchResult.setCachedSearchComplete(ge, Le);
						const Fe = Object.assign({}, this.f.contentPattern);
						delete Fe.pattern;
						const Oe = ge && ge.stats,
							xe = this.f.folderQueries.every(
								(Je) => Je.folder.scheme === a.Schemas.file,
							),
							He = this.f.folderQueries.every(
								(Je) => Je.folder.scheme !== a.Schemas.file,
							),
							Ke = xe ? a.Schemas.file : He ? "other" : "mixed";
						return (
							this.H.publicLog("searchResultsShown", {
								count: this.c.count(),
								fileCount: this.c.fileCount(),
								options: Fe,
								duration: be,
								type: Oe && Oe.type,
								scheme: Ke,
								searchOnTypeEnabled: this.U.searchOnType,
							}),
							ge
						);
					}
					R(ge, be, Ce) {
						C.$8(ge) &&
							(this.Q(
								(Ce ? this.F : this.C)
									? {
											exit: B.SearchCompletionExitCode.NewSearchStarted,
											results: [],
											messages: [],
										}
									: void 0,
								be,
								"",
								Ce,
							),
							Ce ? (this.F = !1) : (this.C = !1));
					}
					S(ge, be, Ce = !0, Le = !1) {
						const Fe = Le ? this.t : this.s;
						ge.resource &&
							(Fe.push(ge),
							Ce
								? Fe.length && (this.c.add(Fe, be, !1, !0), (Fe.length = 0))
								: this.r.then(() => {
										Fe.length && (this.c.add(Fe, be, Le, !0), (Fe.length = 0));
									}));
					}
					get U() {
						return this.I.getValue("search");
					}
					cancelSearch(ge = !1) {
						return this.y ? ((this.C = ge), this.y.cancel(), !0) : !1;
					}
					cancelAISearch(ge = !1) {
						return this.z ? ((this.F = ge), this.z.cancel(), !0) : !1;
					}
					dispose() {
						this.cancelSearch(),
							this.cancelAISearch(),
							this.searchResult.dispose(),
							super.dispose();
					}
				};
				(e.$RNc = oe),
					(e.$RNc = oe =
						Ne(
							[
								j(0, B.$p7),
								j(1, v.$km),
								j(2, b.$gj),
								j(3, s.$Li),
								j(4, y.$ik),
								j(5, A.$ANc),
								j(6, $.$8N),
							],
							oe,
						));
				let ae = class {
					constructor(ge) {
						(this.d = ge), (this.c = null);
					}
					get searchModel() {
						return this.c || (this.c = this.d.createInstance(oe)), this.c;
					}
					set searchModel(ge) {
						this.c?.dispose(), (this.c = ge);
					}
				};
				(e.$SNc = ae),
					(e.$SNc = ae = Ne([j(0, s.$Li)], ae)),
					(e.$TNc = (0, s.$Mi)("searchViewModelWorkbenchService"));
				let pe = class {
					static {
						V = this;
					}
					constructor(ge) {
						(this.g = ge),
							(this.c = null),
							(this.d = null),
							(this.f = new r.$Zc());
					}
					removeHighlightRange() {
						if (this.d && this.c) {
							const ge = this.c;
							this.d.changeDecorations((be) => {
								be.removeDecoration(ge);
							});
						}
						this.c = null;
					}
					highlightRange(ge, be, Ce = 0) {
						let Le;
						n.URI.isUri(ge) ? (Le = this.g.getModel(ge)) : (Le = ge),
							Le && this.h(Le, be);
					}
					h(ge, be) {
						this.removeHighlightRange(),
							ge.changeDecorations((Ce) => {
								this.c = Ce.addDecoration(be, V.n);
							}),
							this.k(ge);
					}
					k(ge) {
						this.d !== ge &&
							(this.l(),
							(this.d = ge),
							this.f.add(
								this.d.onDidChangeDecorations((be) => {
									this.l(), this.removeHighlightRange(), (this.d = null);
								}),
							),
							this.f.add(
								this.d.onWillDispose(() => {
									this.l(), this.removeHighlightRange(), (this.d = null);
								}),
							));
					}
					l() {
						this.f.clear();
					}
					dispose() {
						this.d && (this.removeHighlightRange(), (this.d = null)),
							this.f.dispose();
					}
					static {
						this.n = o.$eY.register({
							description: "search-range-highlight",
							stickiness: p.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							className: "rangeHighlight",
							isWholeLine: !0,
						});
					}
				};
				(e.$UNc = pe), (e.$UNc = pe = V = Ne([j(0, f.$QO)], pe));
				function $e(ve, ge, be) {
					const Ce = ve.previewText.split(`
`);
					return ve.rangeLocations.map((Le) => {
						const Fe = Le.preview;
						return new G(ge, Ce, Fe, Le.source, be);
					});
				}
				function ye(ve, ge) {
					const be = [];
					return (
						ve.forEach((Ce) => {
							const Le = Ce.previewText.split(`
`);
							Ce.rangeLocations.map((Fe) => {
								const Oe = Fe.preview,
									xe = new J(ge, Le, Oe, Fe.source, Ce.webviewIndex);
								be.push(xe);
							});
						}),
						be
					);
				}
				function ue(ve, ge) {
					do if (ge.includes(ve)) return !0;
					while (!(ve.parent() instanceof re) && (ve = ve.parent()));
					return !1;
				}
				function fe(ve) {
					const ge = [],
						be = [];
					return (
						ve.forEach((Ce) => {
							Ce instanceof W ? be.push(Ce) : ge.push(Ce);
						}),
						be.concat(ge.map((Ce) => Ce.allDownstreamFileMatches()).flat())
					);
				}
				function me(ve) {
					const ge = { elements: [], added: !1, removed: !1 };
					return (
						ve.forEach((be) => {
							be.added && (ge.added = !0),
								be.removed && (ge.removed = !0),
								(ge.elements = ge.elements.concat(be.elements));
						}),
						ge
					);
				}
			},
		),
		define(
			de[4163],
			he([
				1, 0, 4, 23, 3, 804, 18, 67, 61, 405, 42, 98, 5, 122, 85, 199, 17, 188,
				73, 19, 15, 44, 70, 509,
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
				var v;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ZNc = e.$YNc = void 0),
					(t = mt(t)),
					(i = mt(i));
				const S = "replacePreview",
					I = (D) =>
						D.with({
							scheme: i.Schemas.internal,
							fragment: S,
							query: JSON.stringify({ scheme: D.scheme }),
						}),
					T = (D) =>
						D.with({
							scheme: JSON.parse(D.query).scheme,
							fragment: "",
							query: "",
						});
				let P = class {
					static {
						this.ID = "workbench.contrib.replacePreviewContentProvider";
					}
					constructor(M, N) {
						(this.c = M),
							(this.d = N),
							this.d.registerTextModelContentProvider(i.Schemas.internal, this);
					}
					provideTextContent(M) {
						return M.fragment === S
							? this.c.createInstance(k).resolve(M)
							: null;
					}
				};
				(e.$YNc = P), (e.$YNc = P = Ne([j(0, h.$Li), j(1, u.$MO)], P));
				let k = class extends w.$1c {
					constructor(M, N, A, R, O) {
						super(),
							(this.c = M),
							(this.f = N),
							(this.g = A),
							(this.h = R),
							(this.j = O);
					}
					async resolve(M) {
						const N = T(M),
							A = this.j.searchModel.searchResult
								.matches()
								.filter((z) => z.resource.toString() === N.toString())[0],
							O = this.D(await this.g.createModelReference(N)).object
								.textEditorModel,
							B = O.getLanguageId(),
							U = this.c.createModel(
								(0, c.$9X)(O.createSnapshot()),
								this.f.createById(B),
								M,
							);
						return (
							this.D(
								A.onChange(({ forceUpdateModel: z }) => this.m(O, U, A, z)),
							),
							this.D(
								this.j.searchModel.onReplaceTermChanged(() => this.m(O, U, A)),
							),
							this.D(A.onDispose(() => U.dispose())),
							this.D(U.onWillDispose(() => this.dispose())),
							this.D(O.onWillDispose(() => this.dispose())),
							U
						);
					}
					m(M, N, A, R = !1) {
						!M.isDisposed() &&
							!N.isDisposed() &&
							this.h.updateReplacePreview(A, R);
					}
				};
				k = Ne(
					[j(0, d.$QO), j(1, m.$nM), j(2, u.$MO), j(3, E.$XNc), j(4, r.$TNc)],
					k,
				);
				let L = class {
					static {
						v = this;
					}
					static {
						this.c = l.$p1.registerSource(
							"searchReplace.source",
							t.localize(9151, null),
						);
					}
					constructor(M, N, A, R, O, B) {
						(this.d = M),
							(this.f = N),
							(this.g = A),
							(this.h = R),
							(this.i = O),
							(this.j = B);
					}
					async replace(M, N = void 0, A = null) {
						const R = this.l(M, A);
						await this.h.apply(R, { progress: N });
						const O = R.map(async (B) => {
							if (B.resource.scheme === i.Schemas.vscodeNotebookCell) {
								const U = y.CellUri.parse(B.resource)?.notebook;
								if (U) {
									let z;
									try {
										(z = await this.j.resolve(U)),
											await z.object.save({ source: v.c });
									} finally {
										z?.dispose();
									}
								}
								return;
							} else return this.d.files.get(B.resource)?.save({ source: v.c });
						});
						return s.Promises.settled(O);
					}
					async openReplacePreview(M, N, A, R) {
						const O = M instanceof r.$FNc ? M.parent() : M,
							B = await this.f.openEditor({
								original: { resource: O.resource },
								modified: { resource: I(O.resource) },
								label: t.localize(9152, null, O.name(), O.name()),
								description: this.i.getUriLabel((0, b.$mh)(O.resource), {
									relative: !0,
								}),
								options: { preserveFocus: N, pinned: R, revealIfVisible: !0 },
							}),
							U = B?.input,
							z = O.onDispose(() => {
								U?.dispose(), z.dispose();
							});
						if ((await this.updateReplacePreview(O), B)) {
							const F = B.getControl();
							M instanceof r.$FNc &&
								F &&
								F.revealLineInCenter(
									M.range().startLineNumber,
									a.ScrollType.Immediate,
								);
						}
					}
					async updateReplacePreview(M, N = !1) {
						const A = I(M.resource),
							[R, O] = await Promise.all([
								this.g.createModelReference(M.resource),
								this.g.createModelReference(A),
							]),
							B = R.object.textEditorModel,
							U = O.object.textEditorModel;
						try {
							B && U && (N ? U.setValue(B.getValue()) : U.undo(), this.k(M, U));
						} finally {
							R.dispose(), O.dispose();
						}
					}
					k(M, N) {
						const A = this.l(M, N.uri),
							R = [];
						for (const O of A)
							R.push(
								o.$jL.replaceMove(
									p.$iL.lift(O.textEdit.range),
									O.textEdit.text,
								),
							);
						N.pushEditOperations(
							[],
							R.sort((O, B) =>
								p.$iL.compareRangesUsingStarts(O.range, B.range),
							),
							() => [],
						);
					}
					l(M, N = null) {
						const A = [];
						if (M instanceof r.$FNc)
							if (M instanceof r.$HNc) {
								if (!M.isReadonly()) {
									const R = M;
									A.push(this.m(R, R.replaceString, R.cell?.uri));
								}
							} else {
								const R = M;
								A.push(this.m(R, R.replaceString, N));
							}
						return (
							M instanceof r.$INc && (M = [M]),
							M instanceof Array &&
								M.forEach((R) => {
									const O = R;
									O.count() > 0 &&
										A.push(...O.matches().flatMap((B) => this.l(B, N)));
								}),
							A
						);
					}
					m(M, N, A = null) {
						const R = M.parent();
						return new g.$tzb(
							A ?? R.resource,
							{ range: M.range(), text: N },
							void 0,
							void 0,
						);
					}
				};
				(e.$ZNc = L),
					(e.$ZNc =
						L =
						v =
							Ne(
								[
									j(0, n.$kZ),
									j(1, C.$IY),
									j(2, u.$MO),
									j(3, g.$rzb),
									j(4, f.$3N),
									j(5, $.$OIb),
								],
								L,
							));
			},
		),
		define(
			de[4164],
			he([1, 0, 20, 804, 4163, 55]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$1Nc = C);
				function C() {
					(0, t.$lK)(i.$XNc, w.$ZNc, t.InstantiationType.Delayed),
						(0, E.$s6)(w.$YNc.ID, w.$YNc, E.WorkbenchPhase.BlockStartup);
				}
			},
		),
		
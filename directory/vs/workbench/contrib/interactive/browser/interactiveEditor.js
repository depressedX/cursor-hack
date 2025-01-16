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
		
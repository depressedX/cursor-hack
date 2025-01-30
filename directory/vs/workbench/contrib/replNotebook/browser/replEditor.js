import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../editor/browser/widget/codeEditor/codeEditorWidget.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../browser/parts/editor/editorPane.js';
import '../../../common/editor.js';
import '../../codeEditor/browser/simpleEditorOptions.js';
import '../../notebook/browser/notebookEditorExtensions.js';
import '../../notebook/browser/services/notebookEditorService.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../notebook/browser/contrib/cellStatusBar/executionStatusBarItemController.js';
import '../../notebook/common/notebookKernelService.js';
import '../../../../editor/common/languages/language.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../interactive/browser/interactiveCommon.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../notebook/browser/notebookOptions.js';
import '../../../../base/browser/ui/toolbar/toolbar.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../editor/contrib/parameterHints/browser/parameterHints.js';
import '../../codeEditor/browser/menuPreventer.js';
import '../../codeEditor/browser/selectionClipboard.js';
import '../../../../editor/contrib/contextmenu/browser/contextmenu.js';
import '../../../../editor/contrib/suggest/browser/suggestController.js';
import '../../../../editor/contrib/snippet/browser/snippetController2.js';
import '../../snippets/browser/tabCompletion.js';
import '../../../../editor/contrib/gotoError/browser/gotoError.js';
import '../../../../editor/common/services/textResourceConfiguration.js';
import '../../../../platform/editor/common/editor.js';
import '../../notebook/common/notebookExecutionStateService.js';
import '../../notebook/common/notebookContextKeys.js';
import '../../../services/extensions/common/extensions.js';
import '../../../../base/common/resources.js';
import '../../notebook/browser/contrib/find/notebookFindWidget.js';
import '../../notebook/common/notebookCommon.js';
import '../../../../base/common/objects.js';
import '../../../../editor/contrib/hover/browser/marginHoverController.js';
import '../../../../editor/contrib/hover/browser/contentHoverController2.js';
import './replEditorInput.js';
import '../../interactive/browser/replInputHintContentWidget.js';
import '../../../../platform/instantiation/common/serviceCollection.js';
import '../../../../css!vs/workbench/contrib/replNotebook/browser/media/interactive.js';
import '../../../../css!vs/workbench/contrib/replNotebook/browser/interactiveEditor.js';
define(
			de[4161],
			he([
				1, 0, 7, 6, 3, 65, 206, 8, 5, 21, 32, 35, 217, 44, 521, 330, 293, 66,
				1062, 243, 61, 11, 39, 986, 10, 835, 461, 49, 92, 46, 1207, 394, 504,
				375, 328, 254, 714, 857, 125, 116, 190, 176, 53, 19, 1304, 70, 82, 603,
				448, 1850, 1858, 128, 2485, 2484,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*event*/,
				w /*lifecycle*/,
				E /*codeEditorService*/,
				C /*codeEditorWidget*/,
				d /*contextkey*/,
				m /*instantiation*/,
				r /*storage*/,
				u /*telemetry*/,
				a /*themeService*/,
				h /*editorPane*/,
				c /*editor*/,
				n /*simpleEditorOptions*/,
				g /*notebookEditorExtensions*/,
				p /*notebookEditorService*/,
				o /*editorGroupsService*/,
				f /*executionStatusBarItemController*/,
				b /*notebookKernelService*/,
				s /*language*/,
				l /*actions*/,
				y /*keybinding*/,
				$ /*interactiveCommon*/,
				v /*configuration*/,
				S /*notebookOptions*/,
				I /*toolbar*/,
				T /*contextView*/,
				P /*menuEntryActionViewItem*/,
				k /*editorExtensions*/,
				L /*parameterHints*/,
				D /*menuPreventer*/,
				M /*selectionClipboard*/,
				N /*contextmenu*/,
				A /*suggestController*/,
				R /*snippetController2*/,
				O /*tabCompletion*/,
				B /*gotoError*/,
				U /*textResourceConfiguration*/,
				z /*editor*/,
				F /*notebookExecutionStateService*/,
				x /*notebookContextKeys*/,
				H /*extensions*/,
				q /*resources*/,
				V /*notebookFindWidget*/,
				G /*notebookCommon*/,
				K /*objects*/,
				J /*marginHoverController*/,
				W /*contentHoverController2*/,
				X /*replEditorInput*/,
				Y /*replInputHintContentWidget*/,
				ie /*serviceCollection*/,
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
		
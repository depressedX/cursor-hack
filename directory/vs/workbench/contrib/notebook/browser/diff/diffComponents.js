import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/network.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import './diffElementViewModel.js';
import './notebookDiffEditorBrowser.js';
import '../../../../../editor/browser/widget/codeEditor/codeEditorWidget.js';
import '../../../../../editor/common/services/model.js';
import '../../../../../editor/common/languages/language.js';
import '../../common/notebookCommon.js';
import '../../../../../platform/contextview/browser/contextView.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/keybinding/common/keybinding.js';
import '../../../../../platform/notification/common/notification.js';
import '../../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../view/cellParts/cellActionView.js';
import '../notebookIcons.js';
import './diffElementOutputs.js';
import '../../../../../editor/browser/editorExtensions.js';
import '../../../../../editor/contrib/contextmenu/browser/contextmenu.js';
import '../../../../../editor/contrib/snippet/browser/snippetController2.js';
import '../../../../../editor/contrib/suggest/browser/suggestController.js';
import '../../../codeEditor/browser/menuPreventer.js';
import '../../../codeEditor/browser/selectionClipboard.js';
import '../../../snippets/browser/tabCompletion.js';
import '../../../../../base/browser/ui/iconLabel/iconLabels.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../platform/theme/common/themeService.js';
import '../../../../../platform/actions/browser/toolbar.js';
import '../../../../../platform/telemetry/common/telemetry.js';
import './diffCellEditorOptions.js';
import '../../../accessibility/browser/accessibilityConfiguration.js';
import '../../../../../platform/accessibility/common/accessibility.js';
import '../../../../../editor/browser/widget/diffEditor/diffEditorWidget.js';
import '../../../../../platform/commands/common/commands.js';
import '../../../../../nls.js';
import '../../../../../base/common/event.js';
import '../../../../../editor/common/services/textResourceConfiguration.js';
define(
			de[3771],
			he([
				1, 0, 7, 3, 23, 5, 706, 556, 206, 67, 61, 70, 49, 11, 39, 40, 92, 8,
				801, 284, 3496, 46, 375, 254, 328, 394, 504, 714, 182, 42, 10, 35, 173,
				32, 1253, 130, 91, 309, 31, 4, 6, 125,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*lifecycle*/,
				w /*network*/,
				E /*instantiation*/,
				C /*diffElementViewModel*/,
				d /*notebookDiffEditorBrowser*/,
				m /*codeEditorWidget*/,
				r /*model*/,
				u /*language*/,
				a /*notebookCommon*/,
				h /*contextView*/,
				c /*actions*/,
				n /*keybinding*/,
				g /*notification*/,
				p /*menuEntryActionViewItem*/,
				o /*contextkey*/,
				f /*cellActionView*/,
				b /*notebookIcons*/,
				s /*diffElementOutputs*/,
				l /*editorExtensions*/,
				y /*contextmenu*/,
				$ /*snippetController2*/,
				v /*suggestController*/,
				S /*menuPreventer*/,
				I /*selectionClipboard*/,
				T /*tabCompletion*/,
				P /*iconLabels*/,
				k /*resolverService*/,
				L /*configuration*/,
				D /*themeService*/,
				M /*toolbar*/,
				N /*telemetry*/,
				A /*diffCellEditorOptions*/,
				R /*accessibilityConfiguration*/,
				O /*accessibility*/,
				B /*diffEditorWidget*/,
				U /*commands*/,
				z /*nls*/,
				F /*event*/,
				x /*textResourceConfiguration*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$cFc = e.$bFc = e.$aFc = e.$_Ec = e.$$Ec = e.$0Ec = void 0),
					(e.$9Ec = H),
					(t = mt(t));
				function H() {
					return {
						isSimpleWidget: !1,
						contributions:
							l.EditorExtensionsRegistry.getSomeEditorContributions([
								S.$_Xb.ID,
								I.$aYb,
								y.$2Mb.ID,
								v.$KDb.ID,
								$.$aDb.ID,
								T.$wYb.ID,
							]),
					};
				}
				class q extends i.$1c {
					constructor(ee, _) {
						super(), _.body.classList.remove("left", "right", "full");
						const te =
							ee.hiddenCells.length === 1
								? (0, z.localize)(7975, null, ee.hiddenCells.length)
								: (0, z.localize)(7976, null, ee.hiddenCells.length);
						(_.placeholder.innerText = te),
							this.D(
								t.$0fb(_.placeholder, "dblclick", (Q) => {
									Q.button === 0 && (Q.preventDefault(), ee.showHiddenCells());
								}),
							),
							this.D(_.marginOverlay.onAction(() => ee.showHiddenCells())),
							_.marginOverlay.show();
					}
				}
				e.$0Ec = q;
				let V = class extends i.$1c {
					constructor(ee, _, te, Q, Z, se, re, le, oe, ae, pe, $e, ye) {
						super(),
							(this.cell = ee),
							(this.propertyHeaderContainer = _),
							(this.notebookEditor = te),
							(this.accessor = Q),
							(this.m = Z),
							(this.n = se),
							(this.q = re),
							(this.r = le),
							(this.s = oe),
							(this.t = ae),
							(this.u = pe),
							(this.w = $e),
							(this.y = ye);
					}
					buildHeader() {
						const ee = this.accessor.checkIfModified(this.cell);
						(this.a = t.$fhb(
							this.propertyHeaderContainer,
							t.$(".property-folding-indicator"),
						)),
							this.a.classList.add(this.accessor.prefix),
							this.z();
						const _ = t.$fhb(
							this.propertyHeaderContainer,
							t.$("div.property-status"),
						);
						(this.b = t.$fhb(_, t.$("span"))),
							(this.c = t.$fhb(_, t.$("span.property-description"))),
							ee
								? ((this.b.textContent = this.accessor.changedLabel),
									(this.b.style.fontWeight = "bold"),
									ee.reason && (this.c.textContent = ee.reason),
									this.propertyHeaderContainer.classList.add("modified"))
								: ((this.b.textContent = this.accessor.unChangedLabel),
									(this.c.textContent = ""),
									this.propertyHeaderContainer.classList.remove("modified"));
						const te = t.$fhb(
							this.propertyHeaderContainer,
							t.$("div.property-toolbar"),
						);
						(this.f = new M.$Syb(
							te,
							{
								actionViewItemProvider: (re, le) => {
									if (re instanceof c.$2X)
										return new f.$M3b(
											re,
											{ hoverDelegate: le.hoverDelegate },
											this.n,
											this.r,
											this.t,
											this.u,
											this.m,
											this.y,
										);
								},
							},
							this.s,
							this.t,
							this.m,
							this.n,
							this.q,
							this.w,
						)),
							this.D(this.f),
							(this.f.context = { cell: this.cell });
						const Q = this.t.createScoped(te);
						this.D(Q),
							d.$CEc.bindTo(Q).set(!!ee),
							(this.j = d.$DEc.bindTo(Q)),
							(this.g = this.s.createMenu(this.accessor.menuId, Q)),
							this.D(this.g);
						const se = [];
						(0, p.$Kyb)(this.g, { shouldForwardArgs: !0 }, se),
							this.f.setActions(se),
							this.D(
								this.g.onDidChange(() => {
									const re = [];
									(0, p.$Kyb)(this.g, { shouldForwardArgs: !0 }, re),
										this.f.setActions(re);
								}),
							),
							this.D(
								this.notebookEditor.onMouseUp((re) => {
									if (!re.event.target) return;
									const le = re.event.target;
									if (
										(le === this.propertyHeaderContainer ||
											le === this.a ||
											this.a.contains(le) ||
											le === _ ||
											_.contains(le)) &&
										re.target === this.cell
									) {
										const ae = this.accessor.getFoldingState(this.cell);
										this.accessor.updateFoldingState(
											this.cell,
											ae === C.PropertyFoldingState.Expanded
												? C.PropertyFoldingState.Collapsed
												: C.PropertyFoldingState.Expanded,
										),
											this.z(),
											this.accessor.updateInfoRendering(this.cell.renderOutput);
									}
								}),
							),
							this.z(),
							this.accessor.updateInfoRendering(this.cell.renderOutput);
					}
					refresh() {
						const ee = this.accessor.checkIfModified(this.cell);
						if (ee) {
							(this.b.textContent = this.accessor.changedLabel),
								(this.b.style.fontWeight = "bold"),
								ee.reason && (this.c.textContent = ee.reason),
								this.propertyHeaderContainer.classList.add("modified");
							const _ = [];
							(0, p.$Kyb)(this.g, void 0, _), this.f.setActions(_);
						} else
							(this.b.textContent = this.accessor.unChangedLabel),
								(this.b.style.fontWeight = "normal"),
								(this.c.textContent = ""),
								this.propertyHeaderContainer.classList.remove("modified"),
								this.f.setActions([]);
					}
					z() {
						this.accessor.getFoldingState(this.cell) ===
						C.PropertyFoldingState.Collapsed
							? (t.$hhb(this.a, (0, P.$Tib)(b.$kOb)), this.j?.set(!1))
							: (t.$hhb(this.a, (0, P.$Tib)(b.$lOb)), this.j?.set(!0));
					}
				};
				V = Ne(
					[
						j(4, h.$Xxb),
						j(5, n.$uZ),
						j(6, U.$ek),
						j(7, g.$4N),
						j(8, c.$YX),
						j(9, o.$6j),
						j(10, D.$iP),
						j(11, N.$km),
						j(12, O.$XK),
					],
					V,
				);
				class G extends i.$1c {
					constructor(ee, _, te, Q, Z, se, re, le, oe, ae, pe, $e, ye, ue, fe) {
						super(),
							(this.notebookEditor = ee),
							(this.cell = _),
							(this.templateData = te),
							(this.style = Q),
							(this.U = Z),
							(this.W = se),
							(this.X = re),
							(this.Y = le),
							(this.Z = oe),
							(this.ab = ae),
							(this.bb = pe),
							(this.cb = $e),
							(this.db = ye),
							(this.eb = ue),
							(this.fb = fe),
							(this.a = this.D(new i.$Zc())),
							(this.b = this.D(new i.$Zc())),
							(this.c = !1),
							(this.f = !1),
							(this.S = !1),
							(this.t = this.D(new i.$Zc())),
							(this.N = this.D(new i.$Zc())),
							this.D(
								_.onDidLayoutChange((me) => {
									this.layout(me);
								}),
							),
							this.D(_.onDidLayoutChange((me) => this.updateBorders())),
							this.init(),
							this.buildBody(),
							this.D(
								_.onDidStateChange(() => {
									this.updateOutputRendering(this.cell.renderOutput);
								}),
							);
					}
					buildBody() {
						const ee = this.templateData.body;
						switch (
							((this.Q = this.templateData.diffEditorContainer),
							ee.classList.remove("left", "right", "full"),
							this.style)
						) {
							case "left":
								ee.classList.add("left");
								break;
							case "right":
								ee.classList.add("right");
								break;
							default:
								ee.classList.add("full");
								break;
						}
						this.styleContainer(this.Q),
							this.updateSourceEditor(),
							this.cell.modified &&
								this.D(
									this.cell.modified.textModel.onDidChangeContent(() =>
										this.m.refresh(),
									),
								),
							(this.c = this.eb.getValue("notebook.diff.ignoreMetadata")),
							this.c ? this._disposeMetadata() : this._buildMetadata(),
							(this.f =
								this.eb.getValue("notebook.diff.ignoreOutputs") ||
								!!this.notebookEditor.textModel?.transientOptions
									.transientOutputs),
							this.f ? this._disposeOutput() : this._buildOutput(),
							this.D(
								this.eb.onDidChangeConfiguration((_) => {
									let te = !1,
										Q = !1;
									if (_.affectsConfiguration("notebook.diff.ignoreMetadata")) {
										const Z = this.eb.getValue("notebook.diff.ignoreMetadata");
										Z !== void 0 &&
											this.c !== Z &&
											((this.c = Z),
											this.a.clear(),
											this.eb.getValue("notebook.diff.ignoreMetadata")
												? this._disposeMetadata()
												: ((this.cell.metadataStatusHeight = 25),
													this._buildMetadata(),
													this.updateMetadataRendering(),
													(te = !0)));
									}
									if (_.affectsConfiguration("notebook.diff.ignoreOutputs")) {
										const Z = this.eb.getValue("notebook.diff.ignoreOutputs");
										Z !== void 0 &&
											this.f !==
												(Z ||
													this.notebookEditor.textModel?.transientOptions
														.transientOutputs) &&
											((this.f =
												Z ||
												!!this.notebookEditor.textModel?.transientOptions
													.transientOutputs),
											this.b.clear(),
											this.f
												? this._disposeOutput()
												: ((this.cell.outputStatusHeight = 25),
													this._buildOutput(),
													(Q = !0)));
									}
									(te || Q) &&
										this.layout({ metadataHeight: te, outputTotalHeight: Q });
								}),
							);
					}
					updateMetadataRendering() {
						this.cell.metadataFoldingState === C.PropertyFoldingState.Expanded
							? ((this.r.style.display = "block"),
								!this.s || !this.u
									? ((this.s = t.$fhb(
											this.r,
											t.$(".metadata-editor-container"),
										)),
										this.mb())
									: (this.cell.metadataHeight = this.u.getContentHeight()))
							: ((this.r.style.display = "none"),
								(this.cell.metadataHeight = 0));
					}
					updateOutputRendering(ee) {
						this.cell.outputFoldingState === C.PropertyFoldingState.Expanded
							? ((this.z.style.display = "block"),
								ee
									? (this.jb(),
										this._buildOutputRendererContainer(),
										this._showOutputsRenderer(),
										this.ib())
									: (this._hideOutputsRenderer(), this.gb(), this.hb()))
							: ((this.z.style.display = "none"),
								this.jb(),
								this._hideOutputsRenderer(),
								this.kb());
					}
					gb() {
						this.C ||
							((this.C = t.$fhb(this.z, t.$(".output-editor-container"))),
							this.nb());
					}
					hb() {
						this.C &&
							((this.C.style.display = "block"),
							(this.cell.rawOutputHeight = this.O.getContentHeight()));
					}
					ib() {
						this.cell.layoutChange();
					}
					jb() {
						this.C &&
							((this.C.style.display = "none"),
							(this.cell.rawOutputHeight = 0));
					}
					kb() {
						this.cell.layoutChange();
					}
					lb(ee, _) {
						const te = {};
						try {
							const Q = JSON.parse(_),
								Z = new Set([...Object.keys(Q)]);
							for (const re of Z)
								switch (re) {
									case "inputCollapsed":
									case "outputCollapsed":
										typeof Q[re] == "boolean"
											? (te[re] = Q[re])
											: (te[re] = ee[re]);
										break;
									default:
										te[re] = Q[re];
										break;
								}
							const se = this.notebookEditor.textModel.cells.indexOf(
								this.cell.modified.textModel,
							);
							if (se < 0) return;
							this.notebookEditor.textModel.applyEdits(
								[
									{
										editType: a.CellEditType.Metadata,
										index: se,
										metadata: te,
									},
								],
								!0,
								void 0,
								() => {},
								void 0,
								!0,
							);
						} catch {}
					}
					async mb() {
						if ((this.t.clear(), this.cell instanceof C.$REc)) {
							(this.u = this.U.createInstance(
								B.$3yb,
								this.s,
								{
									...A.$xEc,
									overflowWidgetsDomNode:
										this.notebookEditor.getOverflowContainerDomNode(),
									readOnly: !1,
									originalEditable: !1,
									ignoreTrimWhitespace: !1,
									automaticLayout: !1,
									dimension: {
										height: this.cell.layoutInfo.metadataHeight,
										width: this.cell.getComputedCellContainerWidth(
											this.notebookEditor.getLayoutInfo(),
											!0,
											!0,
										),
									},
								},
								{ originalEditor: H(), modifiedEditor: H() },
							)),
								this.layout({ metadataHeight: !0 }),
								this.t.add(this.u),
								this.s?.classList.add("diff");
							const ee = await this.Y.createModelReference(
									a.CellUri.generateCellPropertyUri(
										this.cell.originalDocument.uri,
										this.cell.original.handle,
										w.Schemas.vscodeNotebookCellMetadata,
									),
								),
								_ = await this.Y.createModelReference(
									a.CellUri.generateCellPropertyUri(
										this.cell.modifiedDocument.uri,
										this.cell.modified.handle,
										w.Schemas.vscodeNotebookCellMetadata,
									),
								);
							this.u.setModel({
								original: ee.object.textEditorModel,
								modified: _.object.textEditorModel,
							}),
								this.t.add(ee),
								this.t.add(_),
								(this.cell.metadataHeight = this.u.getContentHeight()),
								this.t.add(
									this.u.onDidContentSizeChange((Q) => {
										Q.contentHeightChanged &&
											this.cell.metadataFoldingState ===
												C.PropertyFoldingState.Expanded &&
											(this.cell.metadataHeight = Q.contentHeight);
									}),
								);
							let te = !1;
							this.t.add(
								_.object.textEditorModel.onDidChangeContent(() => {
									te = !0;
									const Q = _.object.textEditorModel.getValue();
									this.lb(this.cell.modified.metadata, Q),
										this.q.refresh(),
										(te = !1);
								}),
							),
								this.t.add(
									this.cell.modified.textModel.onDidChangeMetadata(() => {
										if (te) return;
										const Q = (0, C.$UEc)(
											this.notebookEditor.textModel,
											this.cell.modified?.metadata || {},
											this.cell.modified?.language,
										);
										_.object.textEditorModel.setValue(Q);
									}),
								);
							return;
						} else {
							(this.u = this.U.createInstance(
								m.$rwb,
								this.s,
								{
									...A.$wEc,
									dimension: {
										width: this.cell.getComputedCellContainerWidth(
											this.notebookEditor.getLayoutInfo(),
											!1,
											!0,
										),
										height: this.cell.layoutInfo.metadataHeight,
									},
									overflowWidgetsDomNode:
										this.notebookEditor.getOverflowContainerDomNode(),
									readOnly: !1,
								},
								{},
							)),
								this.layout({ metadataHeight: !0 }),
								this.t.add(this.u);
							const ee = this.W.createById("jsonc"),
								_ = (0, C.$UEc)(
									this.notebookEditor.textModel,
									this.cell.type === "insert"
										? this.cell.modified.metadata || {}
										: this.cell.original.metadata || {},
								),
								te =
									this.cell.type === "insert"
										? this.cell.modified.uri
										: this.cell.original.uri,
								Q =
									this.cell.type === "insert"
										? this.cell.modified.handle
										: this.cell.original.handle,
								Z = a.CellUri.generateCellPropertyUri(
									te,
									Q,
									w.Schemas.vscodeNotebookCellMetadata,
								),
								se = this.X.createModel(_, ee, Z, !1);
							this.u.setModel(se),
								this.t.add(se),
								(this.cell.metadataHeight = this.u.getContentHeight()),
								this.t.add(
									this.u.onDidContentSizeChange((re) => {
										re.contentHeightChanged &&
											this.cell.metadataFoldingState ===
												C.PropertyFoldingState.Expanded &&
											(this.cell.metadataHeight = re.contentHeight);
									}),
								);
						}
					}
					nb() {
						if (
							(this.N.clear(),
							(this.cell.type === "modified" ||
								this.cell.type === "unchanged") &&
								!this.notebookEditor.textModel.transientOptions
									.transientOutputs)
						) {
							const Q = (0, C.$WEc)(this.cell.original?.outputs || []),
								Z = (0, C.$WEc)(this.cell.modified?.outputs || []);
							if (Q !== Z) {
								const se = this.W.createById("json"),
									re = this.X.createModel(Q, se, void 0, !0),
									le = this.X.createModel(Z, se, void 0, !0);
								this.N.add(re), this.N.add(le);
								const oe =
										this.notebookEditor.getLayoutInfo().fontInfo.lineHeight ||
										17,
									ae = Math.max(re.getLineCount(), le.getLineCount());
								(this.O = this.U.createInstance(
									B.$3yb,
									this.C,
									{
										...A.$xEc,
										overflowWidgetsDomNode:
											this.notebookEditor.getOverflowContainerDomNode(),
										readOnly: !0,
										ignoreTrimWhitespace: !1,
										automaticLayout: !1,
										dimension: {
											height: Math.min(
												C.$NEc,
												this.cell.layoutInfo.rawOutputHeight || oe * ae,
											),
											width: this.cell.getComputedCellContainerWidth(
												this.notebookEditor.getLayoutInfo(),
												!1,
												!0,
											),
										},
										accessibilityVerbose:
											this.eb.getValue(
												R.AccessibilityVerbositySettingId.DiffEditor,
											) ?? !1,
									},
									{ originalEditor: H(), modifiedEditor: H() },
								)),
									this.N.add(this.O),
									this.C?.classList.add("diff"),
									this.O.setModel({ original: re, modified: le }),
									this.O.restoreViewState(this.cell.getOutputEditorViewState()),
									(this.cell.rawOutputHeight = this.O.getContentHeight()),
									this.N.add(
										this.O.onDidContentSizeChange((pe) => {
											pe.contentHeightChanged &&
												this.cell.outputFoldingState ===
													C.PropertyFoldingState.Expanded &&
												(this.cell.rawOutputHeight = pe.contentHeight);
										}),
									),
									this.N.add(
										this.cell.modified.textModel.onDidChangeOutputs(() => {
											const pe = (0, C.$WEc)(this.cell.modified?.outputs || []);
											le.setValue(pe), this.y.refresh();
										}),
									);
								return;
							}
						}
						(this.O = this.U.createInstance(
							m.$rwb,
							this.C,
							{
								...A.$wEc,
								dimension: {
									width: Math.min(
										C.$NEc,
										this.cell.getComputedCellContainerWidth(
											this.notebookEditor.getLayoutInfo(),
											!1,
											this.cell.type === "unchanged" ||
												this.cell.type === "modified",
										) - 32,
									),
									height: this.cell.layoutInfo.rawOutputHeight,
								},
								overflowWidgetsDomNode:
									this.notebookEditor.getOverflowContainerDomNode(),
							},
							{},
						)),
							this.N.add(this.O);
						const ee = this.W.createById("json"),
							_ = (0, C.$WEc)(
								this.notebookEditor.textModel.transientOptions.transientOutputs
									? []
									: this.cell.type === "insert"
										? this.cell.modified.outputs || []
										: this.cell.original.outputs || [],
							),
							te = this.X.createModel(_, ee, void 0, !0);
						this.N.add(te),
							this.O.setModel(te),
							this.O.restoreViewState(this.cell.getOutputEditorViewState()),
							(this.cell.rawOutputHeight = this.O.getContentHeight()),
							this.N.add(
								this.O.onDidContentSizeChange((Q) => {
									Q.contentHeightChanged &&
										this.cell.outputFoldingState ===
											C.PropertyFoldingState.Expanded &&
										(this.cell.rawOutputHeight = Q.contentHeight);
								}),
							);
					}
					ob() {
						this.notebookEditor.layoutNotebookCell(
							this.cell,
							this.cell.layoutInfo.totalHeight,
						);
					}
					updateBorders() {
						(this.templateData.leftBorder.style.height = `${this.cell.layoutInfo.totalHeight - 32}px`),
							(this.templateData.rightBorder.style.height = `${this.cell.layoutInfo.totalHeight - 32}px`),
							(this.templateData.bottomBorder.style.top = `${this.cell.layoutInfo.totalHeight - 32}px`);
					}
					dispose() {
						this.O &&
							this.cell.saveOutputEditorViewState(this.O.saveViewState()),
							this.u &&
								this.cell.saveMetadataEditorViewState(this.u.saveViewState()),
							this.t.dispose(),
							this.N.dispose(),
							(this.S = !0),
							super.dispose();
					}
				}
				class K extends G {
					constructor(ee, _, te, Q, Z, se, re, le, oe, ae, pe, $e, ye, ue, fe) {
						super(ee, _, te, Q, Z, se, re, le, oe, ae, pe, $e, ye, ue, fe),
							(this.cell = _),
							(this.templateData = te),
							this.updateBorders();
					}
					init() {
						this.R = this.templateData.diagonalFill;
					}
					buildBody() {
						const ee = this.templateData.body;
						switch (
							((this.Q = this.templateData.diffEditorContainer),
							ee.classList.remove("left", "right", "full"),
							this.style)
						) {
							case "left":
								ee.classList.add("left");
								break;
							case "right":
								ee.classList.add("right");
								break;
							default:
								ee.classList.add("full");
								break;
						}
						this.styleContainer(this.Q),
							this.updateSourceEditor(),
							this.eb.getValue("notebook.diff.ignoreMetadata")
								? this._disposeMetadata()
								: this._buildMetadata(),
							this.eb.getValue("notebook.diff.ignoreOutputs") ||
							this.notebookEditor.textModel?.transientOptions.transientOutputs
								? this._disposeOutput()
								: this._buildOutput(),
							this.D(
								this.eb.onDidChangeConfiguration((_) => {
									let te = !1,
										Q = !1;
									_.affectsConfiguration("notebook.diff.ignoreMetadata") &&
										(this.a.clear(),
										this.eb.getValue("notebook.diff.ignoreMetadata")
											? this._disposeMetadata()
											: ((this.cell.metadataStatusHeight = 25),
												this._buildMetadata(),
												this.updateMetadataRendering(),
												(te = !0))),
										_.affectsConfiguration("notebook.diff.ignoreOutputs") &&
											(this.b.clear(),
											this.eb.getValue("notebook.diff.ignoreOutputs") ||
											this.notebookEditor.textModel?.transientOptions
												.transientOutputs
												? this._disposeOutput()
												: ((this.cell.outputStatusHeight = 25),
													this._buildOutput(),
													(Q = !0))),
										(te || Q) &&
											this.layout({ metadataHeight: te, outputTotalHeight: Q });
								}),
							);
					}
					updateSourceEditor() {
						(this.g = this.templateData.cellHeaderContainer),
							(this.g.style.display = "flex"),
							(this.g.innerText = ""),
							(this.j = this.templateData.editorContainer),
							this.j.classList.add("diff");
						const ee = () => {
							if (
								this.cell.cellFoldingState === C.PropertyFoldingState.Collapsed
							) {
								(this.j.style.display = "none"), (this.cell.editorHeight = 0);
								return;
							}
							const _ =
									this.nestedCellViewModel.textModel.textBuffer.getLineCount(),
								te =
									this.notebookEditor.getLayoutInfo().fontInfo.lineHeight || 17,
								Q = _ * te + A.$vEc.top + A.$vEc.bottom;
							if (
								((this.j.style.height = `${Q}px`),
								(this.j.style.display = "block"),
								this.pb)
							) {
								const Z = this.pb.getContentHeight();
								Z >= 0 && (this.cell.editorHeight = Z);
								return;
							}
							(this.pb = this.templateData.sourceEditor),
								this.pb.layout({
									width:
										(this.notebookEditor.getLayoutInfo().width - 2 * d.$yEc) /
											2 -
										18,
									height: Q,
								}),
								this.pb.updateOptions({ readOnly: this.readonly }),
								(this.cell.editorHeight = Q),
								this.D(
									this.pb.onDidContentSizeChange((Z) => {
										this.cell.cellFoldingState ===
											C.PropertyFoldingState.Expanded &&
											Z.contentHeightChanged &&
											this.cell.layoutInfo.editorHeight !== Z.contentHeight &&
											(this.cell.editorHeight = Z.contentHeight);
									}),
								),
								this.rb(this.nestedCellViewModel);
						};
						(this.m = this.D(
							this.U.createInstance(V, this.cell, this.g, this.notebookEditor, {
								updateInfoRendering: () => ee(),
								checkIfModified: (_) => ({ reason: void 0 }),
								getFoldingState: (_) => _.cellFoldingState,
								updateFoldingState: (_, te) => (_.cellFoldingState = te),
								unChangedLabel: "Input",
								changedLabel: "Input",
								prefix: "input",
								menuId: c.$XX.NotebookDiffCellInputTitle,
							}),
						)),
							this.m.buildHeader(),
							ee(),
							this.rb(this.nestedCellViewModel);
					}
					qb() {
						return (
							this.cell.layoutInfo.cellStatusHeight +
							this.cell.layoutInfo.editorHeight +
							this.cell.layoutInfo.editorMargin +
							this.cell.layoutInfo.metadataStatusHeight +
							this.cell.layoutInfo.metadataHeight +
							this.cell.layoutInfo.outputTotalHeight +
							this.cell.layoutInfo.outputStatusHeight
						);
					}
					async rb(ee) {
						const _ = await this.Y.createModelReference(ee.uri);
						if (this.S) return;
						const te = _.object.textEditorModel;
						this.D(_), this.pb.setModel(te);
						const Q = this.cell.getSourceEditorViewState();
						Q && this.pb.restoreViewState(Q);
						const Z = this.pb.getContentHeight();
						this.cell.editorHeight = Z;
						const se = `${this.qb()}px`;
						this.R.style.height !== se && (this.R.style.height = se);
					}
					_disposeMetadata() {
						(this.cell.metadataStatusHeight = 0),
							(this.cell.metadataHeight = 0),
							(this.templateData.cellHeaderContainer.style.display = "none"),
							(this.templateData.metadataHeaderContainer.style.display =
								"none"),
							(this.templateData.metadataInfoContainer.style.display = "none"),
							(this.u = void 0);
					}
					_buildMetadata() {
						(this.n = this.templateData.metadataHeaderContainer),
							(this.r = this.templateData.metadataInfoContainer),
							(this.n.style.display = "flex"),
							(this.r.style.display = "block"),
							(this.n.innerText = ""),
							(this.r.innerText = ""),
							(this.q = this.U.createInstance(
								V,
								this.cell,
								this.n,
								this.notebookEditor,
								{
									updateInfoRendering: this.updateMetadataRendering.bind(this),
									checkIfModified: (ee) => ee.checkMetadataIfModified(),
									getFoldingState: (ee) => ee.metadataFoldingState,
									updateFoldingState: (ee, _) => {
										ee.metadataFoldingState = _;
									},
									unChangedLabel: "Metadata",
									changedLabel: "Metadata changed",
									prefix: "metadata",
									menuId: c.$XX.NotebookDiffCellMetadataTitle,
								},
							)),
							this.a.add(this.q),
							this.q.buildHeader();
					}
					_buildOutput() {
						(this.templateData.outputHeaderContainer.style.display = "flex"),
							(this.templateData.outputInfoContainer.style.display = "block"),
							(this.w = this.templateData.outputHeaderContainer),
							(this.z = this.templateData.outputInfoContainer),
							(this.w.innerText = ""),
							(this.z.innerText = ""),
							(this.y = this.U.createInstance(
								V,
								this.cell,
								this.w,
								this.notebookEditor,
								{
									updateInfoRendering: this.updateOutputRendering.bind(this),
									checkIfModified: (ee) => ee.checkIfOutputsModified(),
									getFoldingState: (ee) => ee.outputFoldingState,
									updateFoldingState: (ee, _) => {
										ee.outputFoldingState = _;
									},
									unChangedLabel: "Outputs",
									changedLabel: "Outputs changed",
									prefix: "output",
									menuId: c.$XX.NotebookDiffCellOutputsTitle,
								},
							)),
							this.b.add(this.y),
							this.y.buildHeader();
					}
					_disposeOutput() {
						this.jb(),
							this._hideOutputsRenderer(),
							this.kb(),
							(this.cell.rawOutputHeight = 0),
							(this.cell.outputStatusHeight = 0),
							(this.templateData.outputHeaderContainer.style.display = "none"),
							(this.templateData.outputInfoContainer.style.display = "none"),
							(this.F = void 0);
					}
				}
				let J = class extends K {
					constructor(ee, _, te, Q, Z, se, re, le, oe, ae, pe, $e, ye, ue) {
						super(ee, _, te, "left", re, Q, Z, se, le, oe, ae, pe, $e, ye, ue);
					}
					get nestedCellViewModel() {
						return this.cell.original;
					}
					get readonly() {
						return !0;
					}
					styleContainer(ee) {
						ee.classList.remove("inserted"), ee.classList.add("removed");
					}
					layout(ee) {
						t.$hgb(t.getWindow(this.Q), () => {
							(ee.editorHeight || ee.outerWidth) &&
								this.pb &&
								((this.j.style.height = `${this.cell.layoutInfo.editorHeight}px`),
								this.pb.layout({
									width: this.cell.getComputedCellContainerWidth(
										this.notebookEditor.getLayoutInfo(),
										!1,
										!1,
									),
									height: this.cell.layoutInfo.editorHeight,
								})),
								ee.outerWidth &&
									this.pb &&
									((this.j.style.height = `${this.cell.layoutInfo.editorHeight}px`),
									this.pb.layout()),
								(ee.metadataHeight || ee.outerWidth) &&
									this.u?.layout({
										width: this.cell.getComputedCellContainerWidth(
											this.notebookEditor.getLayoutInfo(),
											!1,
											!1,
										),
										height: this.cell.layoutInfo.metadataHeight,
									}),
								(ee.outputTotalHeight || ee.outerWidth) &&
									this.O?.layout({
										width: this.cell.getComputedCellContainerWidth(
											this.notebookEditor.getLayoutInfo(),
											!1,
											!1,
										),
										height: this.cell.layoutInfo.outputTotalHeight,
									}),
								this.R && (this.R.style.height = `${this.qb()}px`),
								this.ob();
						});
					}
					_buildOutputRendererContainer() {
						if (!this.F) {
							(this.F = t.$fhb(this.z, t.$(".output-view-container"))),
								(this.J = t.$fhb(this.F, t.$(".output-empty-view")));
							const ee = t.$fhb(this.J, t.$("span"));
							(ee.innerText = "No outputs to render"),
								this.cell.original.outputs.length === 0
									? (this.J.style.display = "block")
									: (this.J.style.display = "none"),
								this.cell.layoutChange(),
								(this.L = this.U.createInstance(
									s.$8Ec,
									this.notebookEditor,
									this.notebookEditor.textModel,
									this.cell,
									this.cell.original,
									d.DiffSide.Original,
									this.F,
								)),
								this.D(this.L),
								this.L.render();
							const _ = this.notebookEditor.onDidDynamicOutputRendered((te) => {
								te.cell.uri.toString() === this.cell.original.uri.toString() &&
									(this.notebookEditor.deltaCellOutputContainerClassNames(
										d.DiffSide.Original,
										this.cell.original.id,
										["nb-cellDeleted"],
										[],
									),
									_.dispose());
							});
							this.D(_);
						}
						this.F.style.display = "block";
					}
					_decorate() {
						this.notebookEditor.deltaCellOutputContainerClassNames(
							d.DiffSide.Original,
							this.cell.original.id,
							["nb-cellDeleted"],
							[],
						);
					}
					_showOutputsRenderer() {
						this.F &&
							((this.F.style.display = "block"),
							this.L?.showOutputs(),
							this._decorate());
					}
					_hideOutputsRenderer() {
						this.F && ((this.F.style.display = "none"), this.L?.hideOutputs());
					}
					dispose() {
						this.pb &&
							this.cell.saveSpirceEditorViewState(this.pb.saveViewState()),
							super.dispose();
					}
				};
				(e.$$Ec = J),
					(e.$$Ec = J =
						Ne(
							[
								j(3, u.$nM),
								j(4, r.$QO),
								j(5, k.$MO),
								j(6, E.$Li),
								j(7, h.$Xxb),
								j(8, n.$uZ),
								j(9, g.$4N),
								j(10, c.$YX),
								j(11, o.$6j),
								j(12, L.$gj),
								j(13, x.$XO),
							],
							J,
						));
				let W = class extends K {
					constructor(ee, _, te, Q, Z, se, re, le, oe, ae, pe, $e, ye, ue) {
						super(ee, _, te, "right", Q, Z, se, re, le, oe, ae, pe, $e, ye, ue);
					}
					get nestedCellViewModel() {
						return this.cell.modified;
					}
					get readonly() {
						return !1;
					}
					styleContainer(ee) {
						ee.classList.remove("removed"), ee.classList.add("inserted");
					}
					_buildOutputRendererContainer() {
						if (!this.F) {
							(this.F = t.$fhb(this.z, t.$(".output-view-container"))),
								(this.J = t.$fhb(this.F, t.$(".output-empty-view"))),
								(this.J.innerText = "No outputs to render"),
								this.cell.modified.outputs.length === 0
									? (this.J.style.display = "block")
									: (this.J.style.display = "none"),
								this.cell.layoutChange(),
								(this.M = this.U.createInstance(
									s.$8Ec,
									this.notebookEditor,
									this.notebookEditor.textModel,
									this.cell,
									this.cell.modified,
									d.DiffSide.Modified,
									this.F,
								)),
								this.D(this.M),
								this.M.render();
							const ee = this.notebookEditor.onDidDynamicOutputRendered((_) => {
								_.cell.uri.toString() === this.cell.modified.uri.toString() &&
									(this.notebookEditor.deltaCellOutputContainerClassNames(
										d.DiffSide.Modified,
										this.cell.modified.id,
										["nb-cellAdded"],
										[],
									),
									ee.dispose());
							});
							this.D(ee);
						}
						this.F.style.display = "block";
					}
					_decorate() {
						this.notebookEditor.deltaCellOutputContainerClassNames(
							d.DiffSide.Modified,
							this.cell.modified.id,
							["nb-cellAdded"],
							[],
						);
					}
					_showOutputsRenderer() {
						this.F &&
							((this.F.style.display = "block"),
							this.M?.showOutputs(),
							this._decorate());
					}
					_hideOutputsRenderer() {
						this.F && ((this.F.style.display = "none"), this.M?.hideOutputs());
					}
					layout(ee) {
						t.$hgb(t.getWindow(this.Q), () => {
							(ee.editorHeight || ee.outerWidth) &&
								this.pb &&
								((this.j.style.height = `${this.cell.layoutInfo.editorHeight}px`),
								this.pb.layout({
									width: this.cell.getComputedCellContainerWidth(
										this.notebookEditor.getLayoutInfo(),
										!1,
										!1,
									),
									height: this.cell.layoutInfo.editorHeight,
								})),
								ee.outerWidth &&
									this.pb &&
									((this.j.style.height = `${this.cell.layoutInfo.editorHeight}px`),
									this.pb.layout()),
								(ee.metadataHeight || ee.outerWidth) &&
									this.u?.layout({
										width: this.cell.getComputedCellContainerWidth(
											this.notebookEditor.getLayoutInfo(),
											!1,
											!0,
										),
										height: this.cell.layoutInfo.metadataHeight,
									}),
								(ee.outputTotalHeight || ee.outerWidth) &&
									this.O?.layout({
										width: this.cell.getComputedCellContainerWidth(
											this.notebookEditor.getLayoutInfo(),
											!1,
											!1,
										),
										height: this.cell.layoutInfo.outputTotalHeight,
									}),
								this.ob(),
								this.R && (this.R.style.height = `${this.qb()}px`);
						});
					}
					dispose() {
						this.pb &&
							this.cell.saveSpirceEditorViewState(this.pb.saveViewState()),
							super.dispose();
					}
				};
				(e.$_Ec = W),
					(e.$_Ec = W =
						Ne(
							[
								j(3, E.$Li),
								j(4, u.$nM),
								j(5, r.$QO),
								j(6, k.$MO),
								j(7, h.$Xxb),
								j(8, n.$uZ),
								j(9, g.$4N),
								j(10, c.$YX),
								j(11, o.$6j),
								j(12, L.$gj),
								j(13, x.$XO),
							],
							W,
						));
				let X = class extends G {
					constructor(ee, _, te, Q, Z, se, re, le, oe, ae, pe, $e, ye, ue) {
						super(ee, _, te, "full", Q, Z, se, re, le, oe, ae, pe, $e, ye, ue),
							(this.cell = _),
							(this.templateData = te),
							(this.qb = !1),
							this.updateBorders();
					}
					init() {}
					styleContainer(ee) {
						ee.classList.remove("inserted", "removed");
					}
					buildBody() {
						super.buildBody(),
							this.cell.displayIconToHideUnmodifiedCells
								? (this.D(
										this.templateData.marginOverlay.onAction(() =>
											this.cell.hideUnchangedCells(),
										),
									),
									this.templateData.marginOverlay.show())
								: this.templateData.marginOverlay.hide();
					}
					_disposeMetadata() {
						(this.cell.metadataStatusHeight = 0),
							(this.cell.metadataHeight = 0),
							(this.templateData.metadataHeaderContainer.style.display =
								"none"),
							(this.templateData.metadataInfoContainer.style.display = "none"),
							(this.u = void 0);
					}
					_buildMetadata() {
						(this.n = this.templateData.metadataHeaderContainer),
							(this.r = this.templateData.metadataInfoContainer),
							(this.n.style.display = "flex"),
							(this.r.style.display = "block"),
							(this.n.innerText = ""),
							(this.r.innerText = ""),
							(this.q = this.U.createInstance(
								V,
								this.cell,
								this.n,
								this.notebookEditor,
								{
									updateInfoRendering: this.updateMetadataRendering.bind(this),
									checkIfModified: (ee) => ee.checkMetadataIfModified(),
									getFoldingState: (ee) => ee.metadataFoldingState,
									updateFoldingState: (ee, _) => {
										ee.metadataFoldingState = _;
									},
									unChangedLabel: "Metadata",
									changedLabel: "Metadata changed",
									prefix: "metadata",
									menuId: c.$XX.NotebookDiffCellMetadataTitle,
								},
							)),
							this.a.add(this.q),
							this.q.buildHeader();
					}
					_disposeOutput() {
						this.jb(),
							this._hideOutputsRenderer(),
							this.kb(),
							(this.cell.rawOutputHeight = 0),
							(this.cell.outputStatusHeight = 0),
							(this.templateData.outputHeaderContainer.style.display = "none"),
							(this.templateData.outputInfoContainer.style.display = "none"),
							(this.F = void 0);
					}
					_buildOutput() {
						(this.templateData.outputHeaderContainer.style.display = "flex"),
							(this.templateData.outputInfoContainer.style.display = "block"),
							(this.w = this.templateData.outputHeaderContainer),
							(this.z = this.templateData.outputInfoContainer),
							(this.w.innerText = ""),
							(this.z.innerText = ""),
							this.cell.checkIfOutputsModified()
								? this.z.classList.add("modified")
								: this.z.classList.remove("modified"),
							(this.y = this.U.createInstance(
								V,
								this.cell,
								this.w,
								this.notebookEditor,
								{
									updateInfoRendering: this.updateOutputRendering.bind(this),
									checkIfModified: (ee) => ee.checkIfOutputsModified(),
									getFoldingState: (ee) => ee.outputFoldingState,
									updateFoldingState: (ee, _) => {
										ee.outputFoldingState = _;
									},
									unChangedLabel: "Outputs",
									changedLabel: "Outputs changed",
									prefix: "output",
									menuId: c.$XX.NotebookDiffCellOutputsTitle,
								},
							)),
							this.b.add(this.y),
							this.y.buildHeader();
					}
					_buildOutputRendererContainer() {
						if (!this.F) {
							(this.F = t.$fhb(this.z, t.$(".output-view-container"))),
								(this.J = t.$fhb(this.F, t.$(".output-empty-view"))),
								(this.J.innerText = "No outputs to render"),
								!this.cell.checkIfOutputsModified() &&
								this.cell.modified.outputs.length === 0
									? (this.J.style.display = "block")
									: (this.J.style.display = "none"),
								this.cell.layoutChange(),
								this.D(
									this.cell.modified.textModel.onDidChangeOutputs(() => {
										!this.cell.checkIfOutputsModified() &&
										this.cell.modified.outputs.length === 0
											? (this.J.style.display = "block")
											: (this.J.style.display = "none"),
											this._decorate();
									}),
								),
								(this.G = t.$fhb(this.F, t.$(".output-view-container-left"))),
								(this.H = t.$fhb(this.F, t.$(".output-view-container-right"))),
								(this.I = t.$fhb(
									this.F,
									t.$(".output-view-container-metadata"),
								));
							const ee = this.cell.checkIfOutputsModified(),
								_ =
									ee &&
									ee.kind === C.OutputComparison.Metadata &&
									this.cell.original.outputs.length === 1 &&
									this.cell.modified.outputs.length === 1 &&
									(0, C.$TEc)(
										this.cell.original.outputs[0],
										this.cell.modified.outputs[0],
									) === C.OutputComparison.Metadata;
							if (ee && !_) {
								const te = this.notebookEditor.onDidDynamicOutputRendered(
										(Z) => {
											Z.cell.uri.toString() ===
												this.cell.original.uri.toString() &&
												this.cell.checkIfOutputsModified() &&
												(this.notebookEditor.deltaCellOutputContainerClassNames(
													d.DiffSide.Original,
													this.cell.original.id,
													["nb-cellDeleted"],
													[],
												),
												te.dispose());
										},
									),
									Q = this.notebookEditor.onDidDynamicOutputRendered((Z) => {
										Z.cell.uri.toString() ===
											this.cell.modified.uri.toString() &&
											this.cell.checkIfOutputsModified() &&
											(this.notebookEditor.deltaCellOutputContainerClassNames(
												d.DiffSide.Modified,
												this.cell.modified.id,
												["nb-cellAdded"],
												[],
											),
											Q.dispose());
									});
								this.D(te), this.D(Q);
							}
							if (
								((this.L = this.U.createInstance(
									s.$8Ec,
									this.notebookEditor,
									this.notebookEditor.textModel,
									this.cell,
									this.cell.original,
									d.DiffSide.Original,
									this.G,
								)),
								this.L.render(),
								this.D(this.L),
								(this.M = this.U.createInstance(
									s.$8Ec,
									this.notebookEditor,
									this.notebookEditor.textModel,
									this.cell,
									this.cell.modified,
									d.DiffSide.Modified,
									this.H,
								)),
								this.M.render(),
								this.D(this.M),
								ee && !_ && this._decorate(),
								_)
							) {
								(this.I.style.top = `${this.cell.layoutInfo.rawOutputHeight}px`),
									(this.P = this.U.createInstance(
										B.$3yb,
										this.I,
										{
											...A.$xEc,
											overflowWidgetsDomNode:
												this.notebookEditor.getOverflowContainerDomNode(),
											readOnly: !0,
											ignoreTrimWhitespace: !1,
											automaticLayout: !1,
											dimension: {
												height: C.$NEc,
												width: this.cell.getComputedCellContainerWidth(
													this.notebookEditor.getLayoutInfo(),
													!1,
													!0,
												),
											},
										},
										{ originalEditor: H(), modifiedEditor: H() },
									)),
									this.D(this.P);
								const te = JSON.stringify(
										this.cell.original.outputs[0].metadata ?? {},
										void 0,
										"	",
									),
									Q = JSON.stringify(
										this.cell.modified.outputs[0].metadata ?? {},
										void 0,
										"	",
									),
									Z = this.W.createById("json"),
									se = this.X.createModel(te, Z, void 0, !0),
									re = this.X.createModel(Q, Z, void 0, !0);
								this.P.setModel({ original: se, modified: re }),
									(this.cell.outputMetadataHeight = this.P.getContentHeight()),
									this.D(
										this.P.onDidContentSizeChange((le) => {
											this.cell.outputMetadataHeight = le.contentHeight;
										}),
									);
							}
						}
						this.F.style.display = "block";
					}
					_decorate() {
						this.cell.checkIfOutputsModified()
							? (this.notebookEditor.deltaCellOutputContainerClassNames(
									d.DiffSide.Original,
									this.cell.original.id,
									["nb-cellDeleted"],
									[],
								),
								this.notebookEditor.deltaCellOutputContainerClassNames(
									d.DiffSide.Modified,
									this.cell.modified.id,
									["nb-cellAdded"],
									[],
								))
							: (this.notebookEditor.deltaCellOutputContainerClassNames(
									d.DiffSide.Original,
									this.cell.original.id,
									[],
									["nb-cellDeleted"],
								),
								this.notebookEditor.deltaCellOutputContainerClassNames(
									d.DiffSide.Modified,
									this.cell.modified.id,
									[],
									["nb-cellAdded"],
								));
					}
					_showOutputsRenderer() {
						this.F &&
							((this.F.style.display = "block"),
							this.L?.showOutputs(),
							this.M?.showOutputs(),
							this.P?.layout({
								width:
									this.pb?.getViewWidth() ||
									this.cell.getComputedCellContainerWidth(
										this.notebookEditor.getLayoutInfo(),
										!1,
										!0,
									),
								height: this.cell.layoutInfo.outputMetadataHeight,
							}),
							this._decorate());
					}
					_hideOutputsRenderer() {
						this.F &&
							((this.F.style.display = "none"),
							this.L?.hideOutputs(),
							this.M?.hideOutputs());
					}
					updateSourceEditor() {
						(this.g = this.templateData.cellHeaderContainer),
							(this.g.style.display = "flex"),
							(this.g.innerText = "");
						const ee = this.cell.modified;
						(this.j = this.templateData.editorContainer),
							this.j.classList.add("diff");
						const _ = () => {
							if (
								this.cell.cellFoldingState === C.PropertyFoldingState.Collapsed
							) {
								(this.j.style.display = "none"), (this.cell.editorHeight = 0);
								return;
							}
							const le = ee.textModel.textBuffer.getLineCount(),
								oe =
									this.notebookEditor.getLayoutInfo().fontInfo.lineHeight || 17,
								ae =
									this.cell.layoutInfo.editorHeight !== 0
										? this.cell.layoutInfo.editorHeight
										: le * oe + A.$vEc.top + A.$vEc.bottom;
							if (
								((this.j.style.height = `${ae}px`),
								(this.j.style.display = "block"),
								this.pb)
							) {
								const pe = this.pb.getContentHeight();
								pe >= 0 && (this.cell.editorHeight = pe);
								return;
							}
							(this.pb = this.templateData.sourceEditor),
								le === 1 && this.pb.updateOptions({ padding: A.$uEc }),
								this.pb.layout({
									width: this.notebookEditor.getLayoutInfo().width - 2 * d.$yEc,
									height: ae,
								}),
								this.D(
									this.pb.onDidContentSizeChange((pe) => {
										this.cell.cellFoldingState ===
											C.PropertyFoldingState.Expanded &&
											pe.contentHeightChanged &&
											this.cell.layoutInfo.editorHeight !== pe.contentHeight &&
											(this.cell.editorHeight = pe.contentHeight);
									}),
								),
								this.tb();
						};
						(this.m = this.D(
							this.U.createInstance(V, this.cell, this.g, this.notebookEditor, {
								updateInfoRendering: () => _(),
								checkIfModified: (le) =>
									le.modified?.textModel.getTextBufferHash() !==
									le.original?.textModel.getTextBufferHash()
										? { reason: void 0 }
										: !1,
								getFoldingState: (le) => le.cellFoldingState,
								updateFoldingState: (le, oe) => (le.cellFoldingState = oe),
								unChangedLabel: "Input",
								changedLabel: "Input changed",
								prefix: "input",
								menuId: c.$XX.NotebookDiffCellInputTitle,
							}),
						)),
							this.m.buildHeader(),
							_();
						const te = this.db.createScoped(
							this.templateData.inputToolbarContainer,
						);
						this.D(te);
						const Q = d.$zEc.bindTo(te);
						Q.set(
							this.cell.modified.textModel.getTextBufferHash() !==
								this.cell.original.textModel.getTextBufferHash(),
						);
						const Z = d.$BEc.bindTo(te),
							se = this.fb.getValue(
								this.cell.modified.uri,
								"diffEditor.ignoreTrimWhitespace",
							);
						Z.set(se),
							(this.rb = this.templateData.toolbar),
							(this.rb.context = { cell: this.cell });
						const re = () => {
							const le = this.fb.getValue(
								this.cell.modified.uri,
								"diffEditor.ignoreTrimWhitespace",
							);
							Z.set(le);
							const oe =
								this.cell.modified.textModel.getTextBufferHash() !==
								this.cell.original.textModel.getTextBufferHash();
							if ((Q.set(oe), oe)) {
								const ae = [],
									pe = this.cb.getMenuActions(
										c.$XX.NotebookDiffCellInputTitle,
										te,
										{ shouldForwardArgs: !0 },
									);
								(0, p.$Kyb)(pe, ae), this.rb.setActions(ae);
							} else this.rb.setActions([]);
						};
						this.D(this.cell.modified.textModel.onDidChangeContent(() => re())),
							this.D(
								this.fb.onDidChangeConfiguration((le) => {
									le.affectsConfiguration(
										this.cell.modified.uri,
										"diffEditor",
									) &&
										le.affectedKeys.has("diffEditor.ignoreTrimWhitespace") &&
										re();
								}),
							),
							re();
					}
					async tb() {
						const ee = this.cell.original,
							_ = this.cell.modified,
							te = await this.Y.createModelReference(ee.uri),
							Q = await this.Y.createModelReference(_.uri);
						if (this.S) return;
						const Z = te.object.textEditorModel,
							se = Q.object.textEditorModel;
						this.D(te),
							this.D(Q),
							this.pb.setModel({ original: Z, modified: se });
						const re = () => {
								this.qb = !0;
							},
							le = (pe) => {
								(pe.scrollTopChanged || pe.scrollLeftChanged) && (this.qb = !0);
							};
						this.ub(),
							this.D(
								this.pb.getOriginalEditor().onDidChangeCursorSelection(re),
							),
							this.D(this.pb.getOriginalEditor().onDidScrollChange(le)),
							this.D(
								this.pb.getModifiedEditor().onDidChangeCursorSelection(re),
							),
							this.D(this.pb.getModifiedEditor().onDidScrollChange(le));
						const oe = this.cell.getSourceEditorViewState();
						oe && this.pb.restoreViewState(oe);
						const ae = this.pb.getContentHeight();
						this.cell.editorHeight = ae;
					}
					ub() {
						const ee = this.pb;
						if (!ee) return;
						const _ =
							ee.getModel()?.modified.uri || ee.getModel()?.original.uri;
						if (!_) return;
						const te = this.fb.getValue(_, "diffEditor.ignoreTrimWhitespace");
						ee.updateOptions({ ignoreTrimWhitespace: te }),
							this.D(
								this.fb.onDidChangeConfiguration((Q) => {
									if (
										Q.affectsConfiguration(_, "diffEditor") &&
										Q.affectedKeys.has("diffEditor.ignoreTrimWhitespace")
									) {
										const Z = this.fb.getValue(
											_,
											"diffEditor.ignoreTrimWhitespace",
										);
										ee.updateOptions({ ignoreTrimWhitespace: Z });
									}
								}),
							);
					}
					layout(ee) {
						t.$hgb(t.getWindow(this.Q), () => {
							ee.editorHeight &&
								this.pb &&
								((this.j.style.height = `${this.cell.layoutInfo.editorHeight}px`),
								this.pb.layout({
									width: this.pb.getViewWidth(),
									height: this.cell.layoutInfo.editorHeight,
								})),
								ee.outerWidth &&
									this.pb &&
									((this.j.style.height = `${this.cell.layoutInfo.editorHeight}px`),
									this.pb.layout()),
								(ee.metadataHeight || ee.outerWidth) &&
									this.s &&
									((this.s.style.height = `${this.cell.layoutInfo.metadataHeight}px`),
									this.u?.layout({
										width:
											this.pb?.getViewWidth() ||
											this.cell.getComputedCellContainerWidth(
												this.notebookEditor.getLayoutInfo(),
												!1,
												!0,
											),
										height: this.cell.layoutInfo.metadataHeight,
									})),
								(ee.outputTotalHeight || ee.outerWidth) &&
									(this.C &&
										((this.C.style.height = `${this.cell.layoutInfo.outputTotalHeight}px`),
										this.O?.layout({
											width:
												this.pb?.getViewWidth() ||
												this.cell.getComputedCellContainerWidth(
													this.notebookEditor.getLayoutInfo(),
													!1,
													!0,
												),
											height: this.cell.layoutInfo.outputTotalHeight,
										})),
									this.I &&
										((this.I.style.height = `${this.cell.layoutInfo.outputMetadataHeight}px`),
										(this.I.style.top = `${this.cell.layoutInfo.outputTotalHeight - this.cell.layoutInfo.outputMetadataHeight}px`),
										this.P?.layout({
											width:
												this.pb?.getViewWidth() ||
												this.cell.getComputedCellContainerWidth(
													this.notebookEditor.getLayoutInfo(),
													!1,
													!0,
												),
											height: this.cell.layoutInfo.outputMetadataHeight,
										}))),
								this.ob();
						});
					}
					dispose() {
						this.pb && this.pb.setModel(null),
							this.pb &&
								this.qb &&
								this.cell.saveSpirceEditorViewState(this.pb.saveViewState()),
							super.dispose();
					}
				};
				(e.$aFc = X),
					(e.$aFc = X =
						Ne(
							[
								j(3, E.$Li),
								j(4, u.$nM),
								j(5, r.$QO),
								j(6, k.$MO),
								j(7, h.$Xxb),
								j(8, n.$uZ),
								j(9, g.$4N),
								j(10, c.$YX),
								j(11, o.$6j),
								j(12, L.$gj),
								j(13, x.$XO),
							],
							X,
						));
				class Y extends i.$1c {
					constructor(ee) {
						super(),
							(this.c = ee),
							(this.a = t.h("div.diff-hidden-cells", [
								t.h("div.center@content", { style: { display: "flex" } }, [
									t.$(
										"a",
										{
											title: (0, z.localize)(7977, null),
											role: "button",
											onclick: () => {
												this.b.fire();
											},
										},
										...(0, P.$Sib)("$(unfold)"),
									),
								]),
							])),
							(this.b = this.D(new F.$re())),
							(this.onAction = this.b.event),
							(this.a.root.style.display = "none"),
							ee.appendChild(this.a.root);
					}
					show() {
						this.a.root.style.display = "block";
					}
					hide() {
						this.a.root.style.display = "none";
					}
					dispose() {
						this.hide(),
							this.c.removeChild(this.a.root),
							t.$hhb(this.a.root),
							super.dispose();
					}
				}
				e.$bFc = Y;
				class ie extends i.$1c {
					constructor(ee) {
						super(),
							(this.c = ee),
							(this.a = t.h("div.diff-hidden-cells", [
								t.h("div.center@content", { style: { display: "flex" } }, [
									t.$(
										"a",
										{
											title: (0, z.localize)(7978, null),
											role: "button",
											onclick: () => {
												this.b.fire();
											},
										},
										...(0, P.$Sib)("$(fold)"),
									),
								]),
							])),
							(this.b = this.D(new F.$re())),
							(this.onAction = this.b.event),
							(this.a.root.style.display = "none"),
							ee.appendChild(this.a.root);
					}
					show() {
						this.a.root.style.display = "block";
					}
					hide() {
						this.a.root.style.display = "none";
					}
					dispose() {
						this.hide(),
							this.c.removeChild(this.a.root),
							t.$hhb(this.a.root),
							super.dispose();
					}
				}
				e.$cFc = ie;
			},
		),
		
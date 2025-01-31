import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../nls.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/common/arraysFind.js';
import '../../../../../platform/storage/common/storage.js';
import '../../../../../platform/telemetry/common/telemetry.js';
import '../../../../../platform/theme/common/themeService.js';
import '../../../../common/editor.js';
import '../notebookEditorWidget.js';
import '../../../../../base/common/cancellation.js';
import './diffElementViewModel.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import './notebookDiffList.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../platform/theme/common/colorRegistry.js';
import '../../common/services/notebookWorkerService.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../editor/common/config/fontInfo.js';
import '../../../../../base/browser/pixelRatio.js';
import './notebookDiffEditorBrowser.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../browser/parts/editor/editorPane.js';
import '../../common/notebookCommon.js';
import '../../../../../base/common/async.js';
import '../../../../../base/common/uuid.js';
import '../view/renderers/backLayerWebView.js';
import './eventDispatcher.js';
import '../../../../../editor/browser/config/fontMeasurements.js';
import '../notebookOptions.js';
import '../../common/notebookRange.js';
import './notebookDiffOverviewRuler.js';
import '../../../../../platform/layout/browser/zIndexRegistry.js';
import './notebookDiffViewModel.js';
import '../../common/notebookService.js';
define(
			de[1361],
			he([
				1, 0, 4, 7, 214, 21, 32, 35, 44, 856, 33, 706, 5, 3772, 8, 51, 992, 10,
				463, 345, 556, 6, 3, 217, 70, 15, 47, 1963, 1254, 600, 835, 442, 3091,
				1618, 1847, 161,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*dom*/,
				w /*arraysFind*/,
				E /*storage*/,
				C /*telemetry*/,
				d /*themeService*/,
				m /*editor*/,
				r /*notebookEditorWidget*/,
				u /*cancellation*/,
				a /*diffElementViewModel*/,
				h /*instantiation*/,
				c /*notebookDiffList*/,
				n /*contextkey*/,
				g /*colorRegistry*/,
				p /*notebookWorkerService*/,
				o /*configuration*/,
				f /*fontInfo*/,
				b /*pixelRatio*/,
				s /*notebookDiffEditorBrowser*/,
				l /*event*/,
				y /*lifecycle*/,
				$ /*editorPane*/,
				v /*notebookCommon*/,
				S /*async*/,
				I /*uuid*/,
				T /*backLayerWebView*/,
				P /*eventDispatcher*/,
				k /*fontMeasurements*/,
				L /*notebookOptions*/,
				D /*notebookRange*/,
				M /*notebookDiffOverviewRuler*/,
				N /*zIndexRegistry*/,
				A /*notebookDiffViewModel*/,
				R /*notebookService*/,
) {
				"use strict";
				var O;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$kFc = void 0),
					(t = mt(t)),
					(i = mt(i));
				const B = i.$;
				class U {
					constructor(x) {
						this.a = x;
					}
					compare(x) {
						if (!(x instanceof U) || this.a.length !== x.a.length)
							return m.EditorPaneSelectionCompareResult.DIFFERENT;
						for (let H = 0; H < this.a.length; H++)
							if (this.a[H] !== x.a[H])
								return m.EditorPaneSelectionCompareResult.DIFFERENT;
						return m.EditorPaneSelectionCompareResult.IDENTICAL;
					}
					restore(x) {
						const H = { cellSelections: (0, D.$i6)(this.a) };
						return Object.assign(H, x), H;
					}
				}
				let z = class extends $.$JEb {
					static {
						O = this;
					}
					static {
						this.ENTIRE_DIFF_OVERVIEW_WIDTH = 30;
					}
					static {
						this.ID = v.$P6;
					}
					get textModel() {
						return this.jb?.modified.notebook;
					}
					get notebookOptions() {
						return this.ob;
					}
					get isDisposed() {
						return this.sb;
					}
					constructor(x, H, q, V, G, K, J, W, X) {
						super(O.ID, x, J, q, W),
							(this.tb = H),
							(this.ub = V),
							(this.vb = G),
							(this.wb = K),
							(this.xb = X),
							(this.creationOptions = (0, r.$14b)()),
							(this.j = null),
							(this.u = null),
							(this.cb = null),
							(this.db = null),
							(this.fb = this.D(new l.$re())),
							(this.onMouseUp = this.fb.event),
							(this.gb = this.D(new l.$re())),
							(this.onDidScroll = this.gb.event),
							(this.onDidChangeScroll = this.gb.event),
							(this.jb = null),
							(this.kb = this.D(new y.$Zc())),
							(this.mb = new S.$Ih()),
							(this.nb = this.D(new l.$re())),
							(this.onDidDynamicOutputRendered = this.nb.event),
							(this.pb = this.D(new y.$Zc())),
							(this.rb = this.D(new l.$re())),
							(this.onDidChangeSelection = this.rb.event),
							(this.sb = !1),
							(this.Ib = new WeakMap()),
							(this.ob = H.createInstance(L.$XIb, this.window, !1, void 0)),
							this.D(this.ob),
							(this.lb = !0);
					}
					get yb() {
						return this.eb || (this.eb = this.zb()), this.eb;
					}
					zb() {
						const x = this.wb.getValue("editor");
						return k.$osb.readFontInfo(
							this.window,
							f.$OK.createFromRawSettings(
								x,
								b.$sjb.getInstance(this.window).value,
							),
						);
					}
					Ab() {
						return this.wb.getValue(v.$56.diffOverviewRuler) ?? !1;
					}
					getSelection() {
						const x = this.s.getFocus();
						return new U(x);
					}
					toggleNotebookCellSelection(x) {}
					updatePerformanceMetadata(x, H, q, V) {}
					async focusNotebookCell(x, H) {}
					async focusNextNotebookCell(x, H) {}
					didFocusOutputInputChange(x) {}
					getScrollTop() {
						return this.s?.scrollTop ?? 0;
					}
					getScrollHeight() {
						return this.s?.scrollHeight ?? 0;
					}
					getScrollPosition() {
						return {
							scrollTop: this.getScrollTop(),
							scrollLeft: this.s?.scrollLeft ?? 0,
						};
					}
					setScrollPosition(x) {
						this.s &&
							((this.s.scrollTop = x.scrollTop),
							x.scrollLeft !== void 0 && (this.s.scrollLeft = x.scrollLeft));
					}
					delegateVerticalScrollbarPointerDown(x) {
						this.s?.delegateVerticalScrollbarPointerDown(x);
					}
					updateOutputHeight(x, H, q, V) {
						const G = x.diffElement,
							K = this.getCellByInfo(x),
							J = K.outputsViewModels.indexOf(H);
						if (G instanceof a.$REc) {
							const W = v.CellUri.parse(x.cellUri);
							if (!W) return;
							G.updateOutputHeight(
								W.notebook.toString() === this.jb?.original.resource.toString()
									? s.DiffSide.Original
									: s.DiffSide.Modified,
								J,
								q,
							);
						} else
							G.updateOutputHeight(
								G.type === "insert" ? s.DiffSide.Modified : s.DiffSide.Original,
								J,
								q,
							);
						V && this.nb.fire({ cell: K, output: H });
					}
					setMarkupCellEditState(x, H) {}
					didStartDragMarkupCell(x, H) {}
					didDragMarkupCell(x, H) {}
					didEndDragMarkupCell(x) {}
					didDropMarkupCell(x) {}
					didResizeOutput(x) {}
					Y(x) {
						(this.a = i.$fhb(x, i.$(".notebook-text-diff-editor"))),
							(this.c = document.createElement("div")),
							this.c.classList.add(
								"notebook-overflow-widget-container",
								"monaco-editor",
							),
							i.$fhb(x, this.c);
						const H = [
							this.tb.createInstance(c.$fFc, this),
							this.tb.createInstance(c.$gFc, this),
							this.tb.createInstance(c.$eFc, this),
						];
						(this.b = i.$fhb(this.a, i.$(".notebook-diff-list-view"))),
							(this.s = this.tb.createInstance(
								c.$iFc,
								"NotebookTextDiff",
								this.b,
								this.tb.createInstance(c.$dFc, this.window),
								H,
								this.ub,
								{
									setRowLineHeight: !1,
									setRowHeight: !1,
									supportDynamicHeights: !0,
									horizontalScrolling: !1,
									keyboardSupport: !1,
									mouseSupport: !0,
									multipleSelectionSupport: !1,
									typeNavigationEnabled: !0,
									paddingBottom: 0,
									styleController: (q) => this.s,
									overrideStyles: {
										listBackground: g.$8P,
										listActiveSelectionBackground: g.$8P,
										listActiveSelectionForeground: g.$IP,
										listFocusAndSelectionBackground: g.$8P,
										listFocusAndSelectionForeground: g.$IP,
										listFocusBackground: g.$8P,
										listFocusForeground: g.$IP,
										listHoverForeground: g.$IP,
										listHoverBackground: g.$8P,
										listHoverOutline: g.$NP,
										listFocusOutline: g.$NP,
										listInactiveSelectionBackground: g.$8P,
										listInactiveSelectionForeground: g.$IP,
										listInactiveFocusBackground: g.$8P,
										listInactiveFocusOutline: g.$8P,
									},
									accessibilityProvider: {
										getAriaLabel() {
											return null;
										},
										getWidgetAriaLabel() {
											return t.localize(8002, null);
										},
									},
								},
							)),
							this.D(this.s),
							this.D(
								this.s.onMouseUp((q) => {
									q.element &&
										(typeof q.index == "number" && this.s.setFocus([q.index]),
										this.fb.fire({ event: q.browserEvent, target: q.element }));
								}),
							),
							this.D(
								this.s.onDidScroll(() => {
									this.gb.fire();
								}),
							),
							this.D(
								this.s.onDidChangeFocus(() =>
									this.rb.fire({
										reason: m.EditorPaneSelectionChangeReason.USER,
									}),
								),
							),
							(this.f = document.createElement("div")),
							this.f.classList.add("notebook-overview-ruler-container"),
							this.a.appendChild(this.f),
							this.Cb(),
							(this.db = i.$fhb(this.s.rowsContainer, B(".webview-cover"))),
							(this.db.style.display = "none"),
							this.D(
								i.$_fb(this.c, (q) => {
									q.target.classList.contains("slider") &&
										this.db &&
										(this.db.style.display = "block");
								}),
							),
							this.D(
								i.$agb(this.c, () => {
									this.db && (this.db.style.display = "none");
								}),
							),
							this.D(
								this.s.onDidScroll((q) => {
									this.db.style.top = `${q.scrollTop}px`;
								}),
							);
					}
					Cb() {
						this.g = this.D(
							this.tb.createInstance(
								M.$jFc,
								this,
								O.ENTIRE_DIFF_OVERVIEW_WIDTH,
								this.f,
							),
						);
					}
					Db(x, H, q, V, G) {
						if (((q.element.style.height = `${H}px`), q.insetMapping)) {
							const K = [],
								J = [];
							q.insetMapping.forEach((W, X) => {
								const Y = V(W.cellInfo.diffElement);
								if (!(!Y || this.s.indexOf(W.cellInfo.diffElement) === void 0))
									if (Y.outputsViewModels.indexOf(X) < 0) J.push(X);
									else {
										const ne = this.s.getCellViewScrollTop(
												W.cellInfo.diffElement,
											),
											ee = Y.outputsViewModels.indexOf(X),
											_ = W.cellInfo.diffElement.getOutputOffsetInCell(G, ee);
										K.push({
											cell: Y,
											output: X,
											cellTop: ne,
											outputOffset: _,
											forceDisplay: !1,
										});
									}
							}),
								q.removeInsets(J),
								K.length && q.updateScrollTops(K, []);
						}
					}
					async setInput(x, H, q, V) {
						await super.setInput(x, H, q, V);
						const G = await x.resolve();
						this.jb !== G && (this.Eb(), (this.jb = G), this.Fb()),
							(this.jb = G),
							this.jb !== null &&
								((this.lb = !0),
								this.kb.clear(),
								(this.qb = new u.$Ce()),
								this.kb.add(
									l.Event.any(
										this.jb.original.notebook.onDidChangeContent,
										this.jb.modified.notebook.onDidChangeContent,
									)((K) => {
										this.jb !== null &&
											(this.qb?.dispose(),
											(this.qb = new u.$Ce()),
											this.updateLayout(this.qb.token));
									}),
								),
								await this.Hb(
									(0, I.$9g)(),
									this.jb.original.viewType,
									this.jb.original.resource,
								),
								this.cb && this.kb.add(this.cb),
								await this.Gb(
									(0, I.$9g)(),
									this.jb.modified.viewType,
									this.jb.modified.resource,
								),
								this.u && this.kb.add(this.u),
								await this.updateLayout(
									this.qb.token,
									H?.cellSelections ? (0, D.$j6)(H.cellSelections) : void 0,
								));
					}
					Eb() {
						this.pb.clear(),
							this.cb?.dispose(),
							this.cb?.element.remove(),
							(this.cb = null),
							this.u?.dispose(),
							this.u?.element.remove(),
							(this.u = null),
							this.m?.dispose(),
							(this.m = void 0),
							this.kb.clear(),
							this.s.clear();
					}
					Fb() {
						this.hb = new P.$MEc();
						const x = () => {
							i.$hgb(this.window, () => {
								this.sb ||
									(this.u &&
										this.Db(
											this.s.scrollTop,
											this.s.scrollHeight,
											this.u,
											(H) => H.modified,
											s.DiffSide.Modified,
										),
									this.cb &&
										this.Db(
											this.s.scrollTop,
											this.s.scrollHeight,
											this.cb,
											(H) => H.original,
											s.DiffSide.Original,
										));
							});
						};
						if (
							(this.pb.add(
								this.s.onDidChangeContentHeight(() => {
									x();
								}),
							),
							this.pb.add(
								this.hb.onDidChangeCellLayout(() => {
									x();
								}),
							),
							this.jb)
						) {
							const H = (this.m = this.D(
								new A.$XEc(
									this.jb,
									this.vb,
									this.tb,
									this.wb,
									this.hb,
									this.xb,
									this.yb,
								),
							));
							this.pb.add(
								this.m.onDidChangeItems((q) => {
									this.s.splice(q.start, q.deleteCount, q.elements),
										this.Ab() && this.g.updateViewModels(H.items, this.hb);
								}),
							);
						}
					}
					async Gb(x, H, q) {
						this.u?.dispose(),
							(this.u = this.tb.createInstance(
								T.$X2b,
								this,
								x,
								H,
								q,
								{
									...this.ob.computeDiffWebviewOptions(),
									fontFamily: this._generateFontFamily(),
								},
								void 0,
							)),
							this.s.rowsContainer.insertAdjacentElement(
								"afterbegin",
								this.u.element,
							),
							this.u.createWebview(this.window),
							(this.u.element.style.width = "calc(50% - 16px)"),
							(this.u.element.style.left = "calc(50%)");
					}
					_generateFontFamily() {
						return (
							this.yb.fontFamily ??
							'"SF Mono", Monaco, Menlo, Consolas, "Ubuntu Mono", "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace'
						);
					}
					async Hb(x, H, q) {
						this.cb?.dispose(),
							(this.cb = this.tb.createInstance(
								T.$X2b,
								this,
								x,
								H,
								q,
								{
									...this.ob.computeDiffWebviewOptions(),
									fontFamily: this._generateFontFamily(),
								},
								void 0,
							)),
							this.s.rowsContainer.insertAdjacentElement(
								"afterbegin",
								this.cb.element,
							),
							this.cb.createWebview(this.window),
							(this.cb.element.style.width = "calc(50% - 16px)"),
							(this.cb.element.style.left = "16px");
					}
					setOptions(x) {
						const H = x?.cellSelections ? (0, D.$j6)(x.cellSelections) : void 0;
						H && this.s.setFocus(H);
					}
					async updateLayout(x, H) {
						if (!this.jb || !this.m) return;
						const q = await this.m.computeDiff(x);
						x.isCancellationRequested ||
							(q &&
								(this.cb?.removeInsets([...this.cb?.insetMapping.keys()]),
								this.u?.removeInsets([...this.u?.insetMapping.keys()]),
								this.lb &&
									q.firstChangeIndex !== -1 &&
									q.firstChangeIndex < this.s.length &&
									((this.lb = !1),
									this.s.setFocus([q.firstChangeIndex]),
									this.s.reveal(q.firstChangeIndex, 0.3))),
							H && this.s.setFocus(H));
					}
					scheduleOutputHeightAck(x, H, q) {
						const V = x.diffElement;
						let G = s.DiffSide.Original;
						if (V instanceof a.$REc) {
							const J = v.CellUri.parse(x.cellUri);
							if (!J) return;
							G =
								J.notebook.toString() === this.jb?.original.resource.toString()
									? s.DiffSide.Original
									: s.DiffSide.Modified;
						} else
							G =
								V.type === "insert" ? s.DiffSide.Modified : s.DiffSide.Original;
						const K = G === s.DiffSide.Modified ? this.u : this.cb;
						i.$hgb(
							this.window,
							() => {
								K?.ackHeight([{ cellId: x.cellId, outputId: H, height: q }]);
							},
							10,
						);
					}
					layoutNotebookCell(x, H) {
						const q = (K, J) => {
							this.s.updateElementHeight2(K, J);
						};
						this.Ib.has(x) && this.Ib.get(x).dispose();
						let V;
						const G = i.$hgb(this.window, () => {
							this.Ib.delete(x), q(x, H), V();
						});
						return (
							this.Ib.set(
								x,
								(0, y.$Yc)(() => {
									G.dispose(), V();
								}),
							),
							new Promise((K) => {
								V = K;
							})
						);
					}
					setScrollTop(x) {
						this.s.scrollTop = x;
					}
					triggerScroll(x) {
						this.s.triggerScrollFromMouseWheelEvent(x);
					}
					previousChange() {
						if (!this.m) return;
						let x = this.s.getFocus()[0];
						(isNaN(x) || x < 0) && (x = 0);
						let H = x - 1;
						const q = this.m.items;
						for (; H >= 0; ) {
							const V = q[H];
							if (V.type !== "unchanged" && V.type !== "placeholder") break;
							H--;
						}
						if (H >= 0) this.s.setFocus([H]), this.s.reveal(H);
						else {
							const V = (0, w.$kb)(
								q,
								(G) => G.type !== "unchanged" && G.type !== "placeholder",
							);
							V >= 0 && (this.s.setFocus([V]), this.s.reveal(V));
						}
					}
					nextChange() {
						if (!this.m) return;
						let x = this.s.getFocus()[0];
						(isNaN(x) || x < 0) && (x = 0);
						let H = x + 1;
						const q = this.m.items;
						for (; H < q.length; ) {
							const V = q[H];
							if (V.type !== "unchanged" && V.type !== "placeholder") break;
							H++;
						}
						if (H < q.length) this.s.setFocus([H]), this.s.reveal(H);
						else {
							const V = q.findIndex(
								(G) => G.type !== "unchanged" && G.type !== "placeholder",
							);
							V >= 0 && (this.s.setFocus([V]), this.s.reveal(V));
						}
					}
					createOutput(x, H, q, V, G) {
						this.mb.queue(
							q.source.model.outputId +
								(G === s.DiffSide.Modified ? "-right" : "left"),
							async () => {
								const K = G === s.DiffSide.Modified ? this.u : this.cb;
								if (K)
									if (K.insetMapping.has(q.source)) {
										const J = this.s.getCellViewScrollTop(x),
											W = H.outputsViewModels.indexOf(q.source),
											X = x.getOutputOffsetInCell(G, W);
										K.updateScrollTops(
											[
												{
													cell: H,
													output: q.source,
													cellTop: J,
													outputOffset: X,
													forceDisplay: !0,
												},
											],
											[],
										);
									} else {
										const J = this.s.getCellViewScrollTop(x);
										await K.createOutput(
											{
												diffElement: x,
												cellHandle: H.handle,
												cellId: H.id,
												cellUri: H.uri,
											},
											q,
											J,
											V(),
										);
									}
							},
						);
					}
					updateMarkupCellHeight() {}
					getCellByInfo(x) {
						return x.diffElement.getCellByUri(x.cellUri);
					}
					getCellById(x) {
						throw new Error("Not implemented");
					}
					removeInset(x, H, q, V) {
						this.mb.queue(
							q.model.outputId +
								(V === s.DiffSide.Modified ? "-right" : "left"),
							async () => {
								const G = V === s.DiffSide.Modified ? this.u : this.cb;
								G && G.insetMapping.has(q) && G.removeInsets([q]);
							},
						);
					}
					showInset(x, H, q, V) {
						this.mb.queue(
							q.model.outputId +
								(V === s.DiffSide.Modified ? "-right" : "left"),
							async () => {
								const G = V === s.DiffSide.Modified ? this.u : this.cb;
								if (!G || !G.insetMapping.has(q)) return;
								const K = this.s.getCellViewScrollTop(x),
									J = H.outputsViewModels.indexOf(q),
									W = x.getOutputOffsetInCell(V, J);
								G.updateScrollTops(
									[
										{
											cell: H,
											output: q,
											cellTop: K,
											outputOffset: W,
											forceDisplay: !0,
										},
									],
									[],
								);
							},
						);
					}
					hideInset(x, H, q) {
						this.u?.hideInset(q), this.cb?.hideInset(q);
					}
					getDomNode() {
						return this.a;
					}
					getOverflowContainerDomNode() {
						return this.c;
					}
					getControl() {
						return this;
					}
					clearInput() {
						super.clearInput(),
							this.kb.clear(),
							this.s?.splice(0, this.s?.length || 0),
							(this.jb = null),
							this.m?.dispose(),
							(this.m = void 0);
					}
					deltaCellOutputContainerClassNames(x, H, q, V) {
						x === s.DiffSide.Original
							? this.cb?.deltaCellContainerClassNames(H, q, V)
							: this.u?.deltaCellContainerClassNames(H, q, V);
					}
					getLayoutInfo() {
						if (!this.s)
							throw new Error("Editor is not initalized successfully");
						return {
							width: this.j.width,
							height: this.j.height,
							fontInfo: this.yb,
							scrollHeight: this.s?.getScrollHeight() ?? 0,
							stickyHeight: 0,
						};
					}
					layout(x, H) {
						this.a.classList.toggle(
							"mid-width",
							x.width < 1e3 && x.width >= 600,
						),
							this.a.classList.toggle("narrow-width", x.width < 600);
						const q = this.Ab();
						(this.j = x.with(x.width - (q ? O.ENTIRE_DIFF_OVERVIEW_WIDTH : 0))),
							(this.b.style.height = `${x.height}px`),
							(this.b.style.width = `${this.j.width}px`),
							this.s?.layout(this.j.height, this.j.width),
							this.u &&
								((this.u.element.style.width = "calc(50% - 16px)"),
								(this.u.element.style.left = "calc(50%)")),
							this.cb &&
								((this.cb.element.style.width = "calc(50% - 16px)"),
								(this.cb.element.style.left = "16px")),
							this.db &&
								((this.db.style.height = `${this.j.height}px`),
								(this.db.style.width = `${this.j.width}px`)),
							q && this.g.layout(),
							this.hb?.emit([
								new P.$KEc({ width: !0, fontInfo: !0 }, this.getLayoutInfo()),
							]);
					}
					dispose() {
						(this.sb = !0), this.qb?.dispose(), this.Eb(), super.dispose();
					}
				};
				(e.$kFc = z),
					(e.$kFc =
						z =
						O =
							Ne(
								[
									j(1, h.$Li),
									j(2, d.$iP),
									j(3, n.$6j),
									j(4, p.$A4b),
									j(5, o.$gj),
									j(6, C.$km),
									j(7, E.$lq),
									j(8, R.$MIb),
								],
								z,
							)),
					(0, N.$ZJb)(N.ZIndex.Base, 10, "notebook-diff-view-viewport-slider"),
					(0, d.$oP)((F, x) => {
						const H = F.getColor(g.$0Q);
						x.addRule(`
	.notebook-text-diff-editor .diagonal-fill {
		background-image: linear-gradient(
			-45deg,
			${H} 12.5%,
			#0000 12.5%, #0000 50%,
			${H} 50%, ${H} 62.5%,
			#0000 62.5%, #0000 100%
		);
		background-size: 8px 8px;
	}
	`),
							x.addRule(
								`.notebook-text-diff-editor .cell-body { margin: ${s.$yEc}px; }`,
							),
							x.addRule(
								`.notebook-text-diff-editor .cell-placeholder-body { margin: ${s.$yEc}px 0; }`,
							);
					});
			},
		)

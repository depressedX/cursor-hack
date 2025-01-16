define(
			de[856],
			he([
				1, 0, 7, 75, 15, 97, 29, 6, 3, 12, 19, 47, 600, 463, 17, 328, 4, 11, 10,
				8, 49, 5, 128, 180, 1618, 84, 32, 51, 123, 984, 108, 330, 293, 3092,
				990, 1961, 1848, 1962, 1963, 4097, 482, 3107, 855, 4098, 3108, 3574,
				3503, 3504, 3110, 70, 176, 611, 190, 243, 835, 442, 1255, 161, 46, 66,
				3105, 824, 1030, 557, 23, 962, 609, 3521, 130, 39, 345, 1803, 3559,
				3109, 3502, 2455, 2456, 2457, 2458, 2460, 2461, 2464, 2468, 2462, 2465,
				2459, 2463, 2466, 2467,
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
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$m5b =
						e.$l5b =
						e.$k5b =
						e.$j5b =
						e.$i5b =
						e.$h5b =
						e.$g5b =
						e.$f5b =
						e.$e5b =
						e.$d5b =
						e.$c5b =
						e.$b5b =
						e.$a5b =
						e.$_4b =
						e.$$4b =
						e.$04b =
						e.$94b =
						e.$84b =
						e.$74b =
						e.$64b =
						e.$54b =
						e.$44b =
						e.$34b =
						e.$24b =
							void 0),
					(e.$14b = xe),
					(t = mt(t)),
					(p = mt(p));
				const Oe = t.$;
				function xe() {
					const Je = [
							"editor.contrib.review",
							oe.$w4b.ID,
							"editor.contrib.dirtydiff",
							"editor.contrib.testingOutputPeek",
							"editor.contrib.testingDecorations",
							"store.contrib.stickyScrollController",
							"editor.contrib.findController",
							"editor.contrib.emptyTextEditorHint",
						],
						Te = se.EditorExtensionsRegistry.getEditorContributions().filter(
							(Ee) => Je.indexOf(Ee.id) === -1,
						);
					return {
						menuIds: {
							notebookToolbar: o.$XX.NotebookToolbar,
							cellTitleToolbar: o.$XX.NotebookCellTitle,
							cellDeleteToolbar: o.$XX.NotebookCellDelete,
							cellInsertToolbar: o.$XX.NotebookCellBetween,
							cellTopInsertToolbar: o.$XX.NotebookCellListTop,
							cellExecuteToolbar: o.$XX.NotebookCellExecute,
							cellExecutePrimary: o.$XX.NotebookCellExecutePrimary,
						},
						cellEditorContributions: Te,
					};
				}
				let He = class extends m.$1c {
					get isVisible() {
						return this.Ib;
					}
					get isDisposed() {
						return this.Jb;
					}
					set viewModel(Te) {
						this.h.fire(this.ob?.notebookDocument),
							(this.ob = Te),
							this.j.fire(Te?.notebookDocument);
					}
					get viewModel() {
						return this.ob;
					}
					get textModel() {
						return this.ob?.notebookDocument;
					}
					get isReadOnly() {
						return this.ob?.options.isReadOnly ?? !1;
					}
					get activeCodeEditor() {
						if (this.Jb) return;
						const [Te] = this.hb.getFocusedElements();
						return this.lb.get(Te);
					}
					get activeCellAndCodeEditor() {
						if (this.Jb) return;
						const [Te] = this.hb.getFocusedElements(),
							Ee = this.lb.get(Te);
						if (Ee) return [Te, Ee];
					}
					get codeEditors() {
						return [...this.lb];
					}
					get visibleRanges() {
						return this.hb.visibleRanges || [];
					}
					get notebookOptions() {
						return this.Ob;
					}
					constructor(
						Te,
						Ee,
						Ie,
						Be,
						Se,
						ke,
						Ue,
						qe,
						Ae,
						Me,
						De,
						Re,
						je,
						Ve,
						Ze,
						et,
						rt,
						ft,
					) {
						super(),
							(this.creationOptions = Te),
							(this.Qb = Se),
							(this.Rb = ke),
							(this.Sb = Ue),
							(this.Tb = qe),
							(this.Ub = Ae),
							(this.Vb = De),
							(this.Wb = Re),
							(this.Xb = je),
							(this.Yb = Ve),
							(this.Zb = Ze),
							(this.$b = et),
							(this.ac = rt),
							(this.bc = ft),
							(this.f = this.D(new d.$re())),
							(this.onDidChangeCellState = this.f.event),
							(this.g = this.D(new d.$re())),
							(this.onDidChangeViewCells = this.g.event),
							(this.h = this.D(new d.$re())),
							(this.onWillChangeModel = this.h.event),
							(this.j = this.D(new d.$re())),
							(this.onDidChangeModel = this.j.event),
							(this.m = this.D(new d.$re())),
							(this.onDidAttachViewModel = this.m.event),
							(this.n = this.D(new d.$re())),
							(this.onDidChangeOptions = this.n.event),
							(this.q = this.D(new d.$re())),
							(this.onDidChangeDecorations = this.q.event),
							(this.r = this.D(new d.$re())),
							(this.onDidScroll = this.r.event),
							(this.t = this.D(new d.$re())),
							(this.onDidChangeLayout = this.t.event),
							(this.u = this.D(new d.$re())),
							(this.onDidChangeActiveCell = this.u.event),
							(this.w = this.D(new d.$re())),
							(this.onDidChangeFocus = this.w.event),
							(this.y = this.D(new d.$re())),
							(this.onDidChangeSelection = this.y.event),
							(this.z = this.D(new d.$re())),
							(this.onDidChangeVisibleRanges = this.z.event),
							(this.C = this.D(new d.$re())),
							(this.onDidFocusWidget = this.C.event),
							(this.F = this.D(new d.$re())),
							(this.onDidBlurWidget = this.F.event),
							(this.G = this.D(new d.$re())),
							(this.onDidChangeActiveEditor = this.G.event),
							(this.H = this.D(new d.$re())),
							(this.onDidChangeActiveKernel = this.H.event),
							(this.I = this.D(new d.$re())),
							(this.onMouseUp = this.I.event),
							(this.J = this.D(new d.$re())),
							(this.onMouseDown = this.J.event),
							(this.L = this.D(new d.$re())),
							(this.onDidReceiveMessage = this.L.event),
							(this.M = this.D(new d.$re())),
							(this.N = this.M.event),
							(this.O = this.D(new d.$re())),
							(this.P = this.O.event),
							(this.Q = this.D(new d.$re())),
							(this.onDidResizeOutput = this.Q.event),
							(this.db = null),
							(this.eb = null),
							(this.fb = null),
							(this.gb = null),
							(this.jb = null),
							(this.kb = null),
							(this.lb = new Map()),
							(this.pb = this.D(new m.$Zc())),
							(this.qb = []),
							(this.vb = null),
							(this.Bb = new Map()),
							(this.Db = new w.$Ih()),
							(this.Eb = null),
							(this.Fb = (0, a.$9g)()),
							(this.Hb = !1),
							(this.Ib = !1),
							(this.Jb = !1),
							(this.Kb = new Map()),
							(this.cc = !1),
							(this.pc = !1),
							(this.Bc = null),
							(this.Qc = new WeakMap()),
							(this.Zc = new Map()),
							(this.sb = Ee),
							(this.isEmbedded = Te.isEmbedded ?? !1),
							(this.Lb = Te.isReadOnly ?? !1),
							(this.Mb = Te.forRepl ?? !1),
							(this.R = document.createElement("div")),
							(this.scopedContextKeyService = this.D(Me.createScoped(this.R))),
							(this.Nb = this.D(
								Ie.createChild(
									new y.$Ki([b.$6j, this.scopedContextKeyService]),
								),
							)),
							(this.Ob =
								Te.options ??
								this.Nb.createInstance(
									_.$XIb,
									this.creationOptions?.codeWindow ?? i.$Bfb,
									this.Lb,
									void 0,
								)),
							this.D(this.Ob);
						const bt = this.D(new x.$E1b());
						(this.nb = new V.$F1b(this.Ob, bt, (gt) =>
							this.getBaseCellEditorOptions(gt),
						)),
							this.D(
								this.nb.eventDispatcher.onDidChangeLayout(() => {
									this.t.fire();
								}),
							),
							this.D(
								this.nb.eventDispatcher.onDidChangeCellState((gt) => {
									this.f.fire(gt);
								}),
							),
							this.D(
								qe.onDidChangeOutputRenderers(() => {
									this.oc();
								}),
							),
							this.D(this.Nb.createInstance(K.$n4b, this)),
							this.D(
								Ue.onDidChangeSelectedNotebooks((gt) => {
									(0, u.$gh)(gt.notebook, this.viewModel?.uri) &&
										(this.Pc(), this.H.fire());
								}),
							),
							(this.Cb = this.Ub.getValue("editor.scrollBeyondLastLine")),
							this.D(
								this.Ub.onDidChangeConfiguration((gt) => {
									gt.affectsConfiguration("editor.scrollBeyondLastLine") &&
										((this.Cb = this.Ub.getValue(
											"editor.scrollBeyondLastLine",
										)),
										this.sb && this.Ib && this.layout(this.sb));
								}),
							),
							this.D(
								this.Ob.onDidChangeOptions((gt) => {
									(gt.cellStatusBarVisibility ||
										gt.cellToolbarLocation ||
										gt.cellToolbarInteraction) &&
										this.ec(),
										gt.fontFamily && this.fc(),
										(gt.compactView ||
											gt.focusIndicator ||
											gt.insertToolbarPosition ||
											gt.cellToolbarLocation ||
											gt.dragAndDropEnabled ||
											gt.fontSize ||
											gt.markupFontSize ||
											gt.markdownLineHeight ||
											gt.fontFamily ||
											gt.insertToolbarAlignment ||
											gt.outputFontSize ||
											gt.outputLineHeight ||
											gt.outputFontFamily ||
											gt.outputWordWrap ||
											gt.outputScrolling ||
											gt.outputLinkifyFilePaths ||
											gt.minimalError) &&
											(this.bb?.remove(),
											this.ic(),
											this.db?.updateOptions({
												...this.notebookOptions.computeWebviewOptions(),
												fontFamily: this.hc(),
											})),
										this.sb && this.Ib && this.layout(this.sb);
								}),
							);
						const nt = Te.codeWindow
							? this.Vb.getContainer(Te.codeWindow)
							: this.Vb.mainContainer;
						this.D(
							Be.getPart(nt).onDidScroll((gt) => {
								!this.ub ||
									!this.Ib ||
									(this.Kc(this.ub, this.sb), this.Lc(this.sb, this.tb));
							}),
						),
							this.Rb.addNotebookEditor(this);
						const lt = (0, a.$9g)();
						(this.R.id = `notebook-${lt}`),
							(this.R.className = "notebookOverlay"),
							this.R.classList.add("notebook-editor"),
							(this.R.inert = !0),
							(this.R.style.visibility = "hidden"),
							nt.appendChild(this.R),
							this.gc(this.R),
							this.fc(),
							(this.Ib = !0),
							(this.wb = Y.$pJb.bindTo(this.scopedContextKeyService)),
							(this.xb = Y.$rJb.bindTo(this.scopedContextKeyService)),
							(this.Ab = Y.$sJb.bindTo(this.scopedContextKeyService)),
							(this.yb = Y.$tJb.bindTo(this.scopedContextKeyService)),
							(this.zb = Y.$zJb.bindTo(this.scopedContextKeyService)),
							new b.$5j(be.$X4b, !1)
								.bindTo(this.scopedContextKeyService)
								.set(!0),
							this.yb.set(!Te.isReadOnly);
						let ct;
						Array.isArray(this.creationOptions.contributions)
							? (ct = this.creationOptions.contributions)
							: (ct =
									D.NotebookEditorExtensionsRegistry.getEditorContributions());
						for (const gt of ct) {
							let ht;
							try {
								ht = this.Nb.createInstance(gt.ctor, this);
							} catch (Rt) {
								(0, C.$4)(Rt);
							}
							if (ht)
								if (!this.Bb.has(gt.id)) this.Bb.set(gt.id, ht);
								else
									throw (
										(ht.dispose(),
										new Error(
											`DUPLICATE notebook editor contribution: '${gt.id}'`,
										))
									);
						}
						this.ec();
					}
					dc(...Te) {
						this.cc && (0, N.$QKb)(...Te);
					}
					getId() {
						return this.Fb;
					}
					getViewModel() {
						return this.viewModel;
					}
					getLength() {
						return this.viewModel?.length ?? 0;
					}
					getSelections() {
						return this.viewModel?.getSelections() ?? [];
					}
					setSelections(Te) {
						if (!this.viewModel) return;
						const Ee = this.viewModel.getFocus();
						this.viewModel.updateSelectionsState({
							kind: X.SelectionStateType.Index,
							focus: Ee,
							selections: Te,
						});
					}
					getFocus() {
						return this.viewModel?.getFocus() ?? { start: 0, end: 0 };
					}
					setFocus(Te) {
						if (!this.viewModel) return;
						const Ee = this.viewModel.getSelections();
						this.viewModel.updateSelectionsState({
							kind: X.SelectionStateType.Index,
							focus: Te,
							selections: Ee,
						});
					}
					getSelectionViewModels() {
						if (!this.viewModel) return [];
						const Te = new Set();
						return this.viewModel
							.getSelections()
							.map((Ee) => this.viewModel.viewCells.slice(Ee.start, Ee.end))
							.reduce(
								(Ee, Ie) => (
									Ie.forEach((Be) => {
										Te.has(Be.handle) || (Te.add(Be.handle), Ee.push(Be));
									}),
									Ee
								),
								[],
							);
					}
					hasModel() {
						return !!this.ob;
					}
					showProgress() {
						this.Pb = this.$b.show(!0);
					}
					hideProgress() {
						this.Pb && (this.Pb.done(), (this.Pb = void 0));
					}
					getBaseCellEditorOptions(Te) {
						const Ee = this.Kb.get(Te);
						if (Ee) return Ee;
						{
							const Ie = new le.$q4b(this, this.notebookOptions, this.Ub, Te);
							return this.Kb.set(Te, Ie), Ie;
						}
					}
					ec() {
						if (!this.R) return;
						this.R.classList.remove("cell-title-toolbar-left"),
							this.R.classList.remove("cell-title-toolbar-right"),
							this.R.classList.remove("cell-title-toolbar-hidden");
						const Te = this.Ob.computeCellToolbarLocation(
							this.viewModel?.viewType,
						);
						this.R.classList.add(`cell-title-toolbar-${Te}`);
						const Ee = this.Ob.getDisplayOptions().cellToolbarInteraction;
						let Ie = "hover";
						this.R.classList.remove("cell-toolbar-hover"),
							this.R.classList.remove("cell-toolbar-click"),
							(Ee === "hover" || Ee === "click") && (Ie = Ee),
							this.R.classList.add(`cell-toolbar-${Ie}`);
					}
					fc() {
						const Te = this.Ub.getValue("editor"),
							Ee = t.getWindow(this.getDomNode());
						this.rb = h.$osb.readFontInfo(
							Ee,
							c.$OK.createFromRawSettings(Te, ge.$sjb.getInstance(Ee).value),
						);
					}
					gc(Te) {
						(this.S = document.createElement("div")),
							this.S.classList.add("notebook-toolbar-container"),
							(this.S.style.display = "none"),
							t.$fhb(Te, this.S),
							(this.W = document.createElement("div")),
							this.W.classList.add("notebook-sticky-scroll-container"),
							t.$fhb(Te, this.W),
							(this.ab = document.createElement("div")),
							t.$fhb(Te, this.ab),
							this.ab.classList.add("cell-list-container"),
							this.ic(),
							this.jc(),
							(this.Y = document.createElement("div")),
							this.Y.classList.add("notebook-overview-ruler-container"),
							this.hb.scrollableElement.appendChild(this.Y),
							this.lc(),
							this.D(
								this.Nb.createInstance(
									Le.$Z4b,
									this,
									this.hb.scrollableElement,
								),
							),
							(this.cb = document.createElement("div")),
							this.cb.classList.add(
								"notebook-overflow-widget-container",
								"monaco-editor",
							),
							t.$fhb(Te, this.cb);
					}
					hc() {
						return (
							this.rb?.fontFamily ??
							'"SF Mono", Monaco, Menlo, Consolas, "Ubuntu Mono", "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace'
						);
					}
					ic() {
						this.bb = t.$Rgb(this.ab);
						const {
								cellRightMargin: Te,
								cellTopMargin: Ee,
								cellRunGutter: Ie,
								cellBottomMargin: Be,
								codeCellLeftMargin: Se,
								markdownCellGutter: ke,
								markdownCellLeftMargin: Ue,
								markdownCellBottomMargin: qe,
								markdownCellTopMargin: Ae,
								collapsedIndicatorHeight: Me,
								focusIndicator: De,
								insertToolbarPosition: Re,
								outputFontSize: je,
								focusIndicatorLeftMargin: Ve,
								focusIndicatorGap: Ze,
							} = this.Ob.getLayoutConfiguration(),
							{
								insertToolbarAlignment: et,
								compactView: rt,
								fontSize: ft,
							} = this.Ob.getDisplayOptions(),
							bt = this.Ob.getCellEditorContainerLeftMargin(),
							{ bottomToolbarGap: nt, bottomToolbarHeight: lt } =
								this.Ob.computeBottomToolbarDimensions(
									this.viewModel?.viewType,
								),
							ct = [];
						this.rb || this.fc();
						const gt = this.hc();
						ct.push(`
		.notebook-editor {
			--notebook-cell-output-font-size: ${je}px;
			--notebook-cell-input-preview-font-size: ${ft}px;
			--notebook-cell-input-preview-font-family: ${gt};
		}
		`),
							rt
								? ct.push(
										`.notebookOverlay .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .markdown-cell-row div.cell.code { margin-left: ${bt}px; }`,
									)
								: ct.push(
										`.notebookOverlay .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .markdown-cell-row div.cell.code { margin-left: ${Se}px; }`,
									),
							De === "border"
								? (ct.push(`
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator-top:before,
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator-bottom:before,
			.monaco-workbench .notebookOverlay .monaco-list .markdown-cell-row .cell-inner-container:before,
			.monaco-workbench .notebookOverlay .monaco-list .markdown-cell-row .cell-inner-container:after {
				content: "";
				position: absolute;
				width: 100%;
				height: 1px;
			}

			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator-left:before,
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator-right:before {
				content: "";
				position: absolute;
				width: 1px;
				height: 100%;
				z-index: 10;
			}

			/* top border */
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator-top:before {
				border-top: 1px solid transparent;
			}

			/* left border */
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator-left:before {
				border-left: 1px solid transparent;
			}

			/* bottom border */
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator-bottom:before {
				border-bottom: 1px solid transparent;
			}

			/* right border */
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator-right:before {
				border-right: 1px solid transparent;
			}
			`),
									ct.push(`
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row.code-cell-row.focused .cell-focus-indicator-left:before,
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row.code-cell-row.focused .cell-focus-indicator-right:before,
			.monaco-workbench .notebookOverlay .monaco-list.selection-multiple .monaco-list-row.code-cell-row.selected .cell-focus-indicator-left:before,
			.monaco-workbench .notebookOverlay .monaco-list.selection-multiple .monaco-list-row.code-cell-row.selected .cell-focus-indicator-right:before {
				top: -${Ee}px; height: calc(100% + ${Ee + Be}px)
			}`))
								: (ct.push(`
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator-left .codeOutput-focus-indicator {
				border-left: 3px solid transparent;
				border-radius: 4px;
				width: 0px;
				margin-left: ${Ve}px;
				border-color: var(--vscode-notebook-inactiveFocusedCellBorder) !important;
			}

			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row.focused .cell-focus-indicator-left .codeOutput-focus-indicator-container,
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .cell-output-hover .cell-focus-indicator-left .codeOutput-focus-indicator-container,
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .markdown-cell-hover .cell-focus-indicator-left .codeOutput-focus-indicator-container,
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row:hover .cell-focus-indicator-left .codeOutput-focus-indicator-container {
				display: block;
			}

			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator-left .codeOutput-focus-indicator-container:hover .codeOutput-focus-indicator {
				border-left: 5px solid transparent;
				margin-left: ${Ve - 1}px;
			}
			`),
									ct.push(`
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row.focused .cell-inner-container.cell-output-focus .cell-focus-indicator-left .codeOutput-focus-indicator,
			.monaco-workbench .notebookOverlay .monaco-list:focus-within .monaco-list-row.focused .cell-inner-container .cell-focus-indicator-left .codeOutput-focus-indicator {
				border-color: var(--vscode-notebook-focusedCellBorder) !important;
			}

			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .cell-inner-container .cell-focus-indicator-left .output-focus-indicator {
				margin-top: ${Ze}px;
			}
			`)),
							Re === "betweenCells" || Re === "both"
								? (ct.push(
										".monaco-workbench .notebookOverlay > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .cell-bottom-toolbar-container { display: flex; }",
									),
									ct.push(
										".monaco-workbench .notebookOverlay > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .view-zones .cell-list-top-cell-toolbar-container { display: flex; }",
									))
								: (ct.push(
										".monaco-workbench .notebookOverlay > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .cell-bottom-toolbar-container { display: none; }",
									),
									ct.push(
										".monaco-workbench .notebookOverlay > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .view-zones .cell-list-top-cell-toolbar-container { display: none; }",
									)),
							et === "left" &&
								(ct.push(`
			.monaco-workbench .notebookOverlay .cell-list-top-cell-toolbar-container .action-item:first-child,
			.monaco-workbench .notebookOverlay .cell-list-top-cell-toolbar-container .action-item:first-child, .monaco-workbench .notebookOverlay > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .cell-bottom-toolbar-container .action-item:first-child {
				margin-right: 0px !important;
			}`),
								ct.push(`
			.monaco-workbench .notebookOverlay .cell-list-top-cell-toolbar-container .monaco-toolbar .action-label,
			.monaco-workbench .notebookOverlay .cell-list-top-cell-toolbar-container .monaco-toolbar .action-label, .monaco-workbench .notebookOverlay > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .cell-bottom-toolbar-container .monaco-toolbar .action-label {
				padding: 0px !important;
				justify-content: center;
				border-radius: 4px;
			}`),
								ct.push(`
			.monaco-workbench .notebookOverlay .cell-list-top-cell-toolbar-container,
			.monaco-workbench .notebookOverlay .cell-list-top-cell-toolbar-container, .monaco-workbench .notebookOverlay > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .cell-bottom-toolbar-container {
				align-items: flex-start;
				justify-content: left;
				margin: 0 16px 0 ${8 + Se}px;
			}`),
								ct.push(`
			.monaco-workbench .notebookOverlay .cell-list-top-cell-toolbar-container,
			.notebookOverlay .cell-bottom-toolbar-container .action-item {
				border: 0px;
			}`)),
							ct.push(
								`.notebookOverlay .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .code-cell-row div.cell.code { margin-left: ${bt}px; }`,
							),
							ct.push(
								`.notebookOverlay .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row div.cell { margin-right: ${Te}px; }`,
							),
							ct.push(
								`.notebookOverlay .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row > .cell-inner-container { padding-top: ${Ee}px; }`,
							),
							ct.push(
								`.notebookOverlay .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .markdown-cell-row > .cell-inner-container { padding-bottom: ${qe}px; padding-top: ${Ae}px; }`,
							),
							ct.push(
								".notebookOverlay .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .markdown-cell-row > .cell-inner-container.webview-backed-markdown-cell { padding: 0; }",
							),
							ct.push(
								`.notebookOverlay .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .markdown-cell-row > .webview-backed-markdown-cell.markdown-cell-edit-mode .cell.code { padding-bottom: ${qe}px; padding-top: ${Ae}px; }`,
							),
							ct.push(
								`.notebookOverlay .output { margin: 0px ${Te}px 0px ${bt}px; }`,
							),
							ct.push(
								`.notebookOverlay .output { width: calc(100% - ${bt + Te}px); }`,
							),
							ct.push(
								`.notebookOverlay .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .cell-comment-container { left: ${bt}px; }`,
							),
							ct.push(
								`.notebookOverlay .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .cell-comment-container { width: calc(100% - ${bt + Te}px); }`,
							),
							ct.push(
								`.monaco-workbench .notebookOverlay .output .output-collapse-container .expandButton { left: -${Ie}px; }`,
							),
							ct.push(`.monaco-workbench .notebookOverlay .output .output-collapse-container .expandButton {
			position: absolute;
			width: ${Ie}px;
			padding: 6px 0px;
		}`),
							ct.push(
								`.notebookOverlay .output-show-more-container { margin: 0px ${Te}px 0px ${bt}px; }`,
							),
							ct.push(
								`.notebookOverlay .output-show-more-container { width: calc(100% - ${bt + Te}px); }`,
							),
							ct.push(
								`.notebookOverlay .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row div.cell.markdown { padding-left: ${Ie}px; }`,
							),
							ct.push(
								`.monaco-workbench .notebookOverlay > .cell-list-container .notebook-folding-indicator { left: ${(ke - 20) / 2 + Ue}px; }`,
							),
							ct.push(
								`.notebookOverlay > .cell-list-container .notebook-folded-hint { left: ${ke + Ue + 8}px; }`,
							),
							ct.push(
								`.notebookOverlay .monaco-list .monaco-list-row :not(.webview-backed-markdown-cell) .cell-focus-indicator-top { height: ${Ee}px; }`,
							),
							ct.push(
								`.notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator-side { bottom: ${nt}px; }`,
							),
							ct.push(
								`.notebookOverlay .monaco-list .monaco-list-row.code-cell-row .cell-focus-indicator-left { width: ${bt}px; }`,
							),
							ct.push(
								`.notebookOverlay .monaco-list .monaco-list-row.markdown-cell-row .cell-focus-indicator-left { width: ${Se}px; }`,
							),
							ct.push(
								`.notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator.cell-focus-indicator-right { width: ${Te}px; }`,
							),
							ct.push(
								`.notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator-bottom { height: ${Be}px; }`,
							),
							ct.push(
								`.notebookOverlay .monaco-list .monaco-list-row .cell-shadow-container-bottom { top: ${Be}px; }`,
							),
							ct.push(`
			.notebookOverlay .monaco-list .monaco-list-row:has(+ .monaco-list-row.selected) .cell-focus-indicator-bottom {
				height: ${nt + Be}px;
			}
		`),
							ct.push(`
			.notebookOverlay .monaco-list .monaco-list-row.code-cell-row.nb-multiCellHighlight:has(+ .monaco-list-row.nb-multiCellHighlight) .cell-focus-indicator-bottom {
				height: ${nt + Be}px;
				background-color: var(--vscode-notebook-symbolHighlightBackground) !important;
			}

			.notebookOverlay .monaco-list .monaco-list-row.markdown-cell-row.nb-multiCellHighlight:has(+ .monaco-list-row.nb-multiCellHighlight) .cell-focus-indicator-bottom {
				height: ${nt + Be - 6}px;
				background-color: var(--vscode-notebook-symbolHighlightBackground) !important;
			}
		`),
							ct.push(`
			.monaco-workbench .notebookOverlay > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .input-collapse-container .cell-collapse-preview {
				line-height: ${Me}px;
			}

			.monaco-workbench .notebookOverlay > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .input-collapse-container .cell-collapse-preview .monaco-tokenized-source {
				max-height: ${Me}px;
			}
		`),
							ct.push(
								`.monaco-workbench .notebookOverlay > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .cell-bottom-toolbar-container .monaco-toolbar { height: ${lt}px }`,
							),
							ct.push(
								`.monaco-workbench .notebookOverlay > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .view-zones .cell-list-top-cell-toolbar-container .monaco-toolbar { height: ${lt}px }`,
							),
							ct.push(`.monaco-workbench .notebookOverlay.cell-title-toolbar-right > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .cell-title-toolbar {
			right: ${Te + 26}px;
		}
		.monaco-workbench .notebookOverlay.cell-title-toolbar-left > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .cell-title-toolbar {
			left: ${bt + 16}px;
		}
		.monaco-workbench .notebookOverlay.cell-title-toolbar-hidden > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .cell-title-toolbar {
			display: none;
		}`),
							ct.push(`
		.monaco-workbench .notebookOverlay .output > div.foreground.output-inner-container {
			padding: ${_.$WIb}px 8px;
		}
		.monaco-workbench .notebookOverlay > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .output-collapse-container {
			padding: ${_.$WIb}px 8px;
		}
		`),
							ct.push(`
		.monaco-workbench .notebookOverlay .cell-chat-part {
			margin: 0 ${Te}px 6px 4px;
		}
		`),
							(this.bb.textContent = ct.join(`
`));
					}
					jc() {
						this.ab.classList.add("cell-list-container"),
							(this.jb = this.D(new O.$u2b(this, this.ab)));
						const Te = (Be) => this.hb.contextKeyService.createScoped(Be);
						this.mb = this.D(this.Nb.createInstance(Fe.$23b, this, Te));
						const Ee = [
							this.Nb.createInstance(
								z.$a4b,
								this,
								this.lb,
								this.mb,
								this.jb,
								Te,
							),
							this.Nb.createInstance(z.$_3b, this, this.jb, this.lb, Te),
						];
						Ee.forEach((Be) => {
							this.D(Be);
						}),
							(this.gb = this.Nb.createInstance(
								z.$$3b,
								t.getWindow(this.getDomNode()),
							)),
							this.D(this.gb);
						const Ie = new Ce.$Y4b(
							this.Zb,
							() => this.viewModel,
							this.bc,
							this.Ub,
						);
						this.D(Ie),
							(this.hb = this.Nb.createInstance(
								B.$B2b,
								"NotebookCellList",
								this.ab,
								this.nb.notebookOptions,
								this.gb,
								Ee,
								this.scopedContextKeyService,
								{
									setRowLineHeight: !1,
									setRowHeight: !1,
									supportDynamicHeights: !0,
									horizontalScrolling: !1,
									keyboardSupport: !1,
									mouseSupport: !0,
									multipleSelectionSupport: !0,
									selectionNavigation: !0,
									typeNavigationEnabled: !0,
									paddingTop: 0,
									paddingBottom: 0,
									transformOptimization: !1,
									initialSize: this.sb,
									styleController: (Be) => this.hb,
									overrideStyles: {
										listBackground: Ke,
										listActiveSelectionBackground: Ke,
										listActiveSelectionForeground: T.$IP,
										listFocusAndSelectionBackground: Ke,
										listFocusAndSelectionForeground: T.$IP,
										listFocusBackground: Ke,
										listFocusForeground: T.$IP,
										listHoverForeground: T.$IP,
										listHoverBackground: Ke,
										listHoverOutline: T.$NP,
										listFocusOutline: T.$NP,
										listInactiveSelectionBackground: Ke,
										listInactiveSelectionForeground: T.$IP,
										listInactiveFocusBackground: Ke,
										listInactiveFocusOutline: Ke,
									},
									accessibilityProvider: Ie,
								},
							)),
							this.jb.setList(this.hb),
							this.D(this.hb),
							(this.ib = new B.$C2b(this.hb)),
							this.D(this.ib),
							this.D((0, m.$Xc)(...Ee)),
							(this.kb = this.D(
								this.Nb.createInstance(W.$p4b, this, this.notebookOptions),
							)),
							(this.fb = t.$fhb(this.hb.rowsContainer, Oe(".webview-cover"))),
							(this.fb.style.display = "none"),
							this.D(
								t.$_fb(this.R, (Be) => {
									Be.target.classList.contains("slider") &&
										this.fb &&
										(this.fb.style.display = "block");
								}),
							),
							this.D(
								t.$agb(this.R, () => {
									this.fb && (this.fb.style.display = "none");
								}),
							),
							this.D(
								this.hb.onMouseDown((Be) => {
									Be.element &&
										this.J.fire({ event: Be.browserEvent, target: Be.element });
								}),
							),
							this.D(
								this.hb.onMouseUp((Be) => {
									Be.element &&
										this.I.fire({ event: Be.browserEvent, target: Be.element });
								}),
							),
							this.D(
								this.hb.onDidChangeFocus((Be) => {
									this.G.fire(this),
										this.u.fire(),
										this.w.fire(),
										this.zb.set(!1);
								}),
							),
							this.D(
								this.hb.onContextMenu((Be) => {
									this.kc(Be);
								}),
							),
							this.D(
								this.hb.onDidChangeVisibleRanges(() => {
									this.z.fire();
								}),
							),
							this.D(
								this.hb.onDidScroll((Be) => {
									Be.scrollTop !== Be.oldScrollTop &&
										(this.r.fire(), this.Nc());
								}),
							),
							(this.Gb = this.D(t.$dhb(this.getDomNode()))),
							this.D(
								this.Gb.onDidBlur(() => {
									this.wb.set(!1),
										this.viewModel?.setEditorFocus(!1),
										this.F.fire();
								}),
							),
							this.D(
								this.Gb.onDidFocus(() => {
									this.wb.set(!0),
										this.viewModel?.setEditorFocus(!0),
										this.C.fire();
								}),
							),
							this.mc(),
							this.nc(),
							this.D(
								this.Ub.onDidChangeConfiguration((Be) => {
									Be.affectsConfiguration(
										me.AccessibilityVerbositySettingId.Notebook,
									) && (this.hb.ariaLabel = Ie?.getWidgetAriaLabel());
								}),
							);
					}
					kc(Te) {
						this.Wb.showContextMenu({
							menuId: o.$XX.NotebookCellTitle,
							contextKeyService: this.scopedContextKeyService,
							getAnchor: () => Te.anchor,
						});
					}
					lc() {
						this.Z = this.D(this.Nb.createInstance(J.$o4b, this, this.Y));
					}
					mc() {
						(this.U = this.D(
							this.Nb.createInstance(
								G.$k4b,
								this,
								this.scopedContextKeyService,
								this.Ob,
								this.S,
							),
						)),
							this.D(
								this.U.onDidChangeVisibility(() => {
									this.sb && this.Ib && this.layout(this.sb);
								}),
							);
					}
					nc() {
						this.X = this.D(
							this.Nb.createInstance(fe.$T4b, this.W, this, this.hb, (Te) => {
								this.isDisposed ||
									(this.sb &&
										this.Ib &&
										(Te > 0
											? (this.layout(this.sb),
												this.setScrollTop(this.scrollTop + Te))
											: Te < 0 &&
												(this.setScrollTop(this.scrollTop + Te),
												this.layout(this.sb))),
									this.r.fire());
							}),
						);
					}
					oc() {
						!this.viewModel ||
							!this.db ||
							(this.db.updateOutputRenderers(),
							this.viewModel.viewCells.forEach((Te) => {
								Te.outputsViewModels.forEach((Ee) => {
									Ee.pickedMimeType?.rendererId === X.$X6 && Ee.resetRenderer();
								});
							}));
					}
					getDomNode() {
						return this.R;
					}
					getOverflowContainerDomNode() {
						return this.cb;
					}
					getInnerWebview() {
						return this.db?.webview;
					}
					setEditorProgressService(Te) {
						this.$b = Te;
					}
					setParentContextKeyService(Te) {
						this.scopedContextKeyService.updateParent(Te);
					}
					async setModel(Te, Ee, Ie) {
						if (this.viewModel === void 0 || !this.viewModel.equal(Te)) {
							const Be = this.Ob.computeBottomToolbarDimensions(
								this.viewModel?.viewType,
							);
							this.uc(), await this.zc(Te, Ee, Ie);
							const Se = this.Ob.computeBottomToolbarDimensions(
								this.viewModel?.viewType,
							);
							(Be.bottomToolbarGap !== Se.bottomToolbarGap ||
								Be.bottomToolbarHeight !== Se.bottomToolbarHeight) &&
								(this.bb?.remove(),
								this.ic(),
								this.db?.updateOptions({
									...this.notebookOptions.computeWebviewOptions(),
									fontFamily: this.hc(),
								})),
								this.Xb.publicLog2("notebook/editorOpened", {
									scheme: Te.uri.scheme,
									ext: (0, u.$lh)(Te.uri),
									viewType: Te.viewType,
								});
						} else this.restoreListViewState(Ee);
						this.Gc(Ee),
							this.Pc(),
							this.jb?.clearGlobalDragState(),
							this.pb.add(
								this.hb.onDidChangeFocus(() => {
									this.sc();
								}),
							),
							this.sc(),
							this.qc();
					}
					qc() {
						this.pc ||
							((this.pc = !0),
							t.$egb(t.getWindow(this.getDomNode()), (Te) => {
								this.rc(Te);
							}));
					}
					rc(Te) {
						const Ee = Date.now() + Te.timeRemaining(),
							Ie = () => {
								try {
									if (((this.pc = !0), this.Jb || !this.viewModel)) return;
									const Be = this.viewModel.viewCells.find(
										(Se) =>
											Se.cellKind === X.CellKind.Markup &&
											!this.db?.markupPreviewMapping.has(Se.id) &&
											!this.Vc(Se),
									);
									if (!Be) return;
									this.createMarkupPreview(Be);
								} finally {
									this.pc = !1;
								}
								Date.now() < Ee ? (0, r.$E)(Ie) : this.qc();
							};
						Ie();
					}
					sc() {
						if (!this.viewModel) return;
						const Te = this.hb.getFocusedElements()[0];
						Te &&
							(this.Eb ||
								(this.Eb = this.pb.add(
									this.Nb.createInstance(R.$61b, this, Te),
								)),
							this.Eb.updateForElement(Te));
					}
					async setOptions(Te) {
						if (
							(Te?.isReadOnly !== void 0 && (this.Lb = Te?.isReadOnly),
							!this.viewModel)
						)
							return;
						this.viewModel.updateOptions({ isReadOnly: this.Lb }),
							this.notebookOptions.updateOptions(this.Lb);
						const Ee = Te?.cellOptions ?? this.tc(Te);
						if (Ee) {
							const Ie = this.viewModel.viewCells.find(
								(Be) => Be.uri.toString() === Ee.resource.toString(),
							);
							if (Ie) {
								this.focusElement(Ie);
								const Be = Ee.options?.selection;
								Be
									? (Ie.updateEditState(L.CellEditState.Editing, "setOptions"),
										(Ie.focusMode = L.CellFocusMode.Editor),
										await this.revealRangeInCenterIfOutsideViewportAsync(
											Ie,
											new n.$iL(
												Be.startLineNumber,
												Be.startColumn,
												Be.endLineNumber || Be.startLineNumber,
												Be.endColumn || Be.startColumn,
											),
										))
									: this.hb.revealCell(
											Ie,
											Te?.cellRevealType ??
												L.CellRevealType.CenterIfOutsideViewport,
										);
								const Se = this.lb.get(Ie);
								if (Se) {
									if (Ee.options?.selection) {
										const { selection: ke } = Ee.options,
											Ue = new n.$iL(
												ke.startLineNumber,
												ke.startColumn,
												ke.endLineNumber || ke.startLineNumber,
												ke.endColumn || ke.startColumn,
											);
										Se.setSelection(Ue),
											Se.revealPositionInCenterIfOutsideViewport({
												lineNumber: ke.startLineNumber,
												column: ke.startColumn,
											}),
											await this.revealRangeInCenterIfOutsideViewportAsync(
												Ie,
												Ue,
											);
									}
									Ee.options?.preserveFocus || Se.focus();
								}
							}
						}
						if (Te?.cellSelections) {
							const Ie = Te.cellSelections[0].start,
								Be = this.viewModel.cellAt(Ie);
							Be &&
								(this.viewModel.updateSelectionsState({
									kind: X.SelectionStateType.Index,
									focus: { start: Ie, end: Ie + 1 },
									selections: Te.cellSelections,
								}),
								this.revealInCenterIfOutsideViewport(Be));
						}
						this.wc(), this.n.fire();
					}
					tc(Te) {
						if (Te?.indexedCellOptions) {
							const Ee = this.cellAt(Te.indexedCellOptions.index);
							if (Ee)
								return {
									resource: Ee.uri,
									options: {
										selection: Te.indexedCellOptions.selection,
										preserveFocus: !1,
									},
								};
						}
					}
					uc() {
						this.pb.clear(),
							(0, m.$Vc)(this.qb),
							this.hb.detachViewModel(),
							this.viewModel?.dispose(),
							(this.viewModel = void 0),
							this.db?.dispose(),
							this.db?.element.remove(),
							(this.db = null),
							this.hb.clear();
					}
					wc() {
						this.viewModel &&
							(this.yb.set(!this.viewModel.options.isReadOnly),
							this.cb.classList.toggle(
								"notebook-editor-editable",
								!this.viewModel.options.isReadOnly,
							),
							this.getDomNode().classList.toggle(
								"notebook-editor-editable",
								!this.viewModel.options.isReadOnly,
							));
					}
					async xc() {
						return this.textModel
							? this.eb
								? this.eb
								: (this.db ||
										this.yc(
											this.getId(),
											this.textModel.viewType,
											this.textModel.uri,
										),
									(this.eb = (async () => {
										if (!this.db)
											throw new Error(
												"Notebook output webview object is not created successfully.",
											);
										if (
											(await this.db.createWebview(
												this.creationOptions.codeWindow ?? i.$Bfb,
											),
											!this.db.webview)
										)
											throw new Error(
												"Notebook output webview element was not created successfully.",
											);
										return (
											this.pb.add(
												this.db.webview.onDidBlur(() => {
													this.xb.set(!1),
														(this.Hb = !1),
														this.updateEditorFocus(),
														this.updateCellFocusMode();
												}),
											),
											this.pb.add(
												this.db.webview.onDidFocus(() => {
													this.xb.set(!0),
														this.updateEditorFocus(),
														(this.Hb = !0);
												}),
											),
											this.pb.add(
												this.db.onMessage((Te) => {
													this.L.fire(Te);
												}),
											),
											this.db
										);
									})()),
									this.eb)
							: null;
					}
					yc(Te, Ee, Ie) {
						if (this.db) return;
						const Be = this;
						(this.db = this.Nb.createInstance(
							U.$X2b,
							{
								get creationOptions() {
									return Be.creationOptions;
								},
								setScrollTop(Se) {
									Be.hb.scrollTop = Se;
								},
								triggerScroll(Se) {
									Be.hb.triggerScrollFromMouseWheelEvent(Se);
								},
								getCellByInfo: Be.getCellByInfo.bind(Be),
								getCellById: Be.ad.bind(Be),
								toggleNotebookCellSelection: Be.Rc.bind(Be),
								focusNotebookCell: Be.focusNotebookCell.bind(Be),
								focusNextNotebookCell: Be.focusNextNotebookCell.bind(Be),
								updateOutputHeight: Be.Yc.bind(Be),
								scheduleOutputHeightAck: Be.$c.bind(Be),
								updateMarkupCellHeight: Be.bd.bind(Be),
								setMarkupCellEditState: Be.cd.bind(Be),
								didStartDragMarkupCell: Be.dd.bind(Be),
								didDragMarkupCell: Be.ed.bind(Be),
								didDropMarkupCell: Be.fd.bind(Be),
								didEndDragMarkupCell: Be.gd.bind(Be),
								didResizeOutput: Be.hd.bind(Be),
								updatePerformanceMetadata: Be.jd.bind(Be),
								didFocusOutputInputChange:
									Be._didFocusOutputInputChange.bind(Be),
							},
							Te,
							Ee,
							Ie,
							{ ...this.Ob.computeWebviewOptions(), fontFamily: this.hc() },
							this.Qb.getScoped(this.Fb),
						)),
							(this.db.element.style.width = "100%"),
							this.hb.attachWebview(this.db.element);
					}
					async zc(Te, Ee, Ie) {
						this.yc(this.getId(), Te.viewType, Te.uri),
							(this.viewModel = this.Nb.createInstance(
								q.$r2b,
								Te.viewType,
								Te,
								this.nb,
								this.getLayoutInfo(),
								{ isReadOnly: this.Lb, inRepl: this.Mb },
							)),
							this.nb.eventDispatcher.emit([
								new A.$IIb({ width: !0, fontInfo: !0 }, this.getLayoutInfo()),
							]),
							this.notebookOptions.updateOptions(this.Lb),
							this.wc(),
							this.ec();
						{
							this.viewModel.restoreEditorViewState(Ee);
							const Se = Ee?.contributionsState || {};
							for (const [ke, Ue] of this.Bb)
								typeof Ue.restoreViewState == "function" &&
									Ue.restoreViewState(Se[ke]);
						}
						this.pb.add(
							this.viewModel.onDidChangeViewCells((Se) => {
								this.g.fire(Se);
							}),
						),
							this.pb.add(
								this.viewModel.onDidChangeSelection(() => {
									this.y.fire(), this.Wc();
								}),
							),
							this.pb.add(
								this.hb.onWillScroll((Se) => {
									this.db?.isResolved() &&
										(this.fb.style.transform = `translateY(${Se.scrollTop})`);
								}),
							);
						let Be = !1;
						this.pb.add(
							this.hb.onDidChangeContentHeight(() => {
								Be ||
									((Be = !0),
									this.pb.add(
										t.$hgb(
											t.getWindow(this.getDomNode()),
											() => {
												(Be = !1), this.Xc();
											},
											100,
										),
									));
							}),
						),
							this.pb.add(
								this.hb.onDidRemoveOutputs((Se) => {
									Se.forEach((ke) => this.removeInset(ke));
								}),
							),
							this.pb.add(
								this.hb.onDidHideOutputs((Se) => {
									Se.forEach((ke) => this.hideInset(ke));
								}),
							),
							this.pb.add(
								this.hb.onDidRemoveCellsFromView((Se) => {
									const ke = [],
										Ue = [];
									for (const qe of Se)
										if (qe.cellKind === X.CellKind.Markup) {
											const Ae = qe;
											this.viewModel?.viewCells.find(
												(Me) => Me.handle === Ae.handle,
											)
												? ke.push(Ae)
												: Ue.push(Ae);
										}
									this.hideMarkupPreviews(ke), this.deleteMarkupPreviews(Ue);
								}),
							),
							await this.Dc(this.viewModel, Ee, Ie),
							Ie?.mark("customMarkdownLoaded"),
							(this.qb = this.viewModel.viewCells.map((Se) => this.Ac(Se))),
							(this.Bc =
								this.viewModel.viewCells.find(
									(Se) =>
										this.getActiveCell() === Se &&
										Se.focusMode === L.CellFocusMode.Editor,
								) ?? null),
							this.pb.add(
								this.viewModel.onDidChangeViewCells((Se) => {
									this.Jb ||
										([...Se.splices].reverse().forEach((ke) => {
											const [Ue, qe, Ae] = ke,
												Me = this.qb.splice(
													Ue,
													qe,
													...Ae.map((De) => this.Ac(De)),
												);
											(0, m.$Vc)(Me);
										}),
										Se.splices.some((ke) =>
											ke[2].some((Ue) => Ue.cellKind === X.CellKind.Markup),
										) && this.qc());
								}),
							),
							this.sb
								? this.hb.layout(this.Ic(this.sb.height), this.sb.width)
								: this.hb.layout(),
							this.jb?.clearGlobalDragState(),
							this.restoreListViewState(Ee);
					}
					Ac(Te) {
						const Ee = new m.$Zc();
						return (
							Ee.add(
								Te.onDidChangeLayout((Ie) => {
									(Ie.totalHeight || Ie.outerWidth) &&
										this.layoutNotebookCell(
											Te,
											Te.layoutInfo.totalHeight,
											Ie.context,
										);
								}),
							),
							Te.cellKind === X.CellKind.Code &&
								Ee.add(
									Te.onDidRemoveOutputs((Ie) => {
										Ie.forEach((Be) => this.removeInset(Be));
									}),
								),
							Ee.add(
								Te.onDidChangeState((Ie) => {
									Ie.inputCollapsedChanged &&
										Te.isInputCollapsed &&
										Te.cellKind === X.CellKind.Markup &&
										this.hideMarkupPreviews([Te]),
										Ie.outputCollapsedChanged &&
											Te.isOutputCollapsed &&
											Te.cellKind === X.CellKind.Code &&
											Te.outputsViewModels.forEach((Be) => this.hideInset(Be)),
										Ie.focusModeChanged && this.Cc(Te);
								}),
							),
							Ee
						);
					}
					Cc(Te) {
						Te.focusMode === L.CellFocusMode.Editor &&
							(this.Bc &&
								this.Bc !== Te &&
								(this.Bc.focusMode = L.CellFocusMode.Container),
							(this.Bc = Te));
					}
					async Dc(Te, Ee, Ie) {
						this.ac.debug(
							"NotebookEditorWidget",
							"warmup " + this.viewModel?.uri.toString(),
						),
							await this.xc(),
							Ie?.mark("webviewCommLoaded"),
							this.ac.debug(
								"NotebookEditorWidget",
								"warmup - webview resolved",
							),
							(this.db.element.style.visibility = "hidden"),
							await this.Ec(Te, Ee),
							this.ac.debug(
								"NotebookEditorWidget",
								"warmup - viewport warmed up",
							),
							this.hb.layout(0, 0),
							this.hb.attachViewModel(Te),
							(this.hb.scrollTop = Ee?.scrollPosition?.top ?? 0),
							this.dc("finish initial viewport warmup and view state restore."),
							(this.db.element.style.visibility = "visible"),
							this.ac.debug(
								"NotebookEditorWidget",
								"warmup - list view model attached, set to visible",
							),
							this.m.fire();
					}
					async Ec(Te, Ee) {
						if (Ee && Ee.cellTotalHeights) {
							const Ie = Ee.cellTotalHeights,
								Be = Ee.scrollPosition?.top ?? 0,
								Se = Be + Math.max(this.sb?.height ?? 0, 1080);
							let ke = 0;
							const Ue = [];
							for (let qe = 0; qe < Te.length; qe++) {
								const Ae = Te.cellAt(qe),
									Me = Ie[qe] ?? 0;
								if (ke + Me < Be) {
									ke += Me;
									continue;
								}
								if (
									(Ae.cellKind === X.CellKind.Markup && Ue.push([Ae, ke]),
									(ke += Me),
									ke > Se)
								)
									break;
							}
							await this.db.initializeMarkup(
								Ue.map(([qe, Ae]) => this.Fc(qe, Ae)),
							);
						} else {
							const Ie = Te.viewCells
								.filter((Ue) => Ue.cellKind === X.CellKind.Markup)
								.slice(0, 5)
								.map((Ue) => this.Fc(Ue, -1e4));
							await this.db.initializeMarkup(Ie);
							let Be = 0;
							const Se = [],
								ke = Math.max(this.sb?.height ?? 0, 1080);
							for (const Ue of Te.viewCells)
								if (
									(Ue.cellKind === X.CellKind.Markup &&
										Se.push({ id: Ue.id, top: Be }),
									(Be += Ue.getHeight(
										this.getLayoutInfo().fontInfo.lineHeight,
									)),
									Be > ke)
								)
									break;
							this.db?.updateScrollTops([], Se);
						}
					}
					Fc(Te, Ee) {
						return {
							mime: Te.mime,
							cellId: Te.id,
							cellHandle: Te.handle,
							content: Te.getText(),
							offset: Ee,
							visible: !1,
							metadata: Te.metadata,
						};
					}
					restoreListViewState(Te) {
						if (!this.viewModel) return;
						Te?.scrollPosition !== void 0
							? ((this.hb.scrollTop = Te.scrollPosition.top),
								(this.hb.scrollLeft = Te.scrollPosition.left))
							: ((this.hb.scrollTop = 0), (this.hb.scrollLeft = 0));
						const Ee = typeof Te?.focus == "number" ? Te.focus : 0;
						if (Ee < this.viewModel.length) {
							const Ie = this.viewModel.cellAt(Ee);
							Ie &&
								this.viewModel?.updateSelectionsState({
									kind: X.SelectionStateType.Handle,
									primary: Ie.handle,
									selections: [Ie.handle],
								});
						} else
							this.hb.length > 0 &&
								this.viewModel.updateSelectionsState({
									kind: X.SelectionStateType.Index,
									focus: { start: 0, end: 1 },
									selections: [{ start: 0, end: 1 }],
								});
						if (Te?.editorFocused) {
							const Ie = this.viewModel.cellAt(Ee);
							Ie && (Ie.focusMode = L.CellFocusMode.Editor);
						}
					}
					Gc(Te) {
						if (Te?.selectedKernelId && this.textModel) {
							const Ee = this.Sb.getMatchingKernel(this.textModel),
								Ie = Ee.all.find((Be) => Be.id === Te.selectedKernelId);
							Ie &&
								!Ee.selected &&
								this.Sb.selectKernelForNotebook(Ie, this.textModel);
						}
					}
					getEditorViewState() {
						const Te = this.viewModel?.getEditorViewState();
						if (!Te)
							return {
								editingCells: {},
								cellLineNumberStates: {},
								editorViewStates: {},
								collapsedInputCells: {},
								collapsedOutputCells: {},
							};
						if (this.hb) {
							Te.scrollPosition = {
								left: this.hb.scrollLeft,
								top: this.hb.scrollTop,
							};
							const Ie = {};
							for (let Be = 0; Be < this.viewModel.length; Be++) {
								const Se = this.viewModel.cellAt(Be);
								Ie[Be] = Se.layoutInfo.totalHeight;
							}
							if (((Te.cellTotalHeights = Ie), this.viewModel)) {
								const Be = this.viewModel.getFocus(),
									Se = this.viewModel.cellAt(Be.start);
								if (Se) {
									const ke = this.hb.domElementOfElement(Se),
										Ue =
											Se.getEditState() === L.CellEditState.Editing &&
											!!(
												ke &&
												ke.ownerDocument.activeElement &&
												ke.contains(ke.ownerDocument.activeElement)
											);
									(Te.editorFocused = Ue), (Te.focus = Be.start);
								}
							}
						}
						const Ee = {};
						for (const [Ie, Be] of this.Bb)
							typeof Be.saveViewState == "function" &&
								(Ee[Ie] = Be.saveViewState());
						return (
							(Te.contributionsState = Ee),
							this.textModel?.uri.scheme === $e.Schemas.untitled &&
								(Te.selectedKernelId = this.activeKernel?.id),
							Te
						);
					}
					Hc() {
						return this.Cb && !this.isEmbedded;
					}
					Ic(Te) {
						return Math.max(Te - (this.U?.useGlobalToolbar ? 26 : 0), 0);
					}
					layout(Te, Ee, Ie) {
						if (!Ee && this.vb === null) {
							(this.sb = Te), (this.tb = Ie);
							return;
						}
						if (Te.width <= 0 || Te.height <= 0) {
							this.onWillHide();
							return;
						}
						const Be = this.Vb.whenContainerStylesLoaded(
							t.getWindow(this.getDomNode()),
						);
						Be ? Be.then(() => this.Jc(Te, Ee, Ie)) : this.Jc(Te, Ee, Ie);
					}
					Jc(Te, Ee, Ie) {
						if (
							(Ee && this.Kc(Ee, Te, Ie),
							this.vb && this.vb.width <= 0 && this.vb.height <= 0)
						) {
							this.onWillHide();
							return;
						}
						(this.sb = Te), (this.tb = Ie);
						const Be = this.Ic(Te.height) - this.getLayoutInfo().stickyHeight;
						t.size(this.ab, Te.width, Be);
						const Se = Be;
						this.hb.getRenderHeight() < Se
							? (this.hb.updateOptions({
									paddingBottom: this.Hc() ? Math.max(0, Se - 50) : 0,
									paddingTop: 0,
								}),
								this.hb.layout(Se, Te.width))
							: (this.hb.layout(Se, Te.width),
								this.hb.updateOptions({
									paddingBottom: this.Hc() ? Math.max(0, Se - 50) : 0,
									paddingTop: 0,
								})),
							(this.R.inert = !1),
							(this.R.style.visibility = "visible"),
							(this.R.style.display = "block"),
							(this.R.style.position = "absolute"),
							(this.R.style.overflow = "hidden"),
							this.Lc(Te, Ie),
							this.fb &&
								((this.fb.style.height = `${Te.height}px`),
								(this.fb.style.width = `${Te.width}px`)),
							this.U.layout(this.sb),
							this.Z.layout(),
							this.nb?.eventDispatcher.emit([
								new A.$IIb({ width: !0, fontInfo: !0 }, this.getLayoutInfo()),
							]);
					}
					Kc(Te, Ee, Ie) {
						if (((this.ub = Te), Ee && Ie))
							this.vb = {
								height: Ee.height,
								width: Ee.width,
								top: Ie.top,
								left: Ie.left,
							};
						else {
							const Be = Te.getBoundingClientRect();
							this.vb = {
								height: Be.height,
								width: Be.width,
								top: Be.top,
								left: Be.left,
							};
						}
					}
					Lc(Te, Ee) {
						if (Te && Ee) {
							(this.R.style.top = `${Ee.top}px`),
								(this.R.style.left = `${Ee.left}px`),
								(this.R.style.width = `${Te.width}px`),
								(this.R.style.height = `${Te.height}px`);
							return;
						}
						if (!this.vb) return;
						const Ie = this.R.parentElement?.getBoundingClientRect();
						(this.R.style.top = `${this.vb.top - (Ie?.top || 0)}px`),
							(this.R.style.left = `${this.vb.left - (Ie?.left || 0)}px`),
							(this.R.style.width = `${Te ? Te.width : this.vb.width}px`),
							(this.R.style.height = `${Te ? Te.height : this.vb.height}px`);
					}
					focus() {
						if (((this.Ib = !0), this.wb.set(!0), this.Hb))
							this.db?.focusWebview();
						else {
							if (this.viewModel) {
								const Te = this.viewModel.getFocus(),
									Ee = this.viewModel.cellAt(Te.start);
								if (
									(this.hasEditorFocus() ||
										(this.focusContainer(), this.updateEditorFocus()),
									Ee && Ee.focusMode === L.CellFocusMode.Editor)
								) {
									Ee.updateEditState(
										L.CellEditState.Editing,
										"editorWidget.focus",
									),
										(Ee.focusMode = L.CellFocusMode.Editor),
										this.Mc(Ee);
									return;
								}
							}
							this.hb.domFocus();
						}
						this.Pb && this.showProgress();
					}
					onShow() {
						this.Ib = !0;
					}
					Mc(Te) {
						for (const [Ee, Ie] of this.lb.entries())
							if (Ee === Te) {
								Ie.focus();
								return;
							}
					}
					focusContainer(Te = !1) {
						this.Hb ? this.db?.focusWebview() : this.hb.focusContainer(Te);
					}
					selectOutputContent(Te) {
						this.db?.selectOutputContents(Te);
					}
					selectInputContents(Te) {
						this.db?.selectInputContents(Te);
					}
					onWillHide() {
						(this.Ib = !1),
							this.wb.set(!1),
							(this.R.inert = !0),
							(this.R.style.visibility = "hidden"),
							(this.R.style.left = "-50000px"),
							(this.S.style.display = "none"),
							this.Nc();
					}
					Nc() {
						this.lb.forEach((Te, Ee) => {
							this.getActiveCell() === Ee &&
								Te &&
								(g.$KDb.get(Te)?.cancelSuggestWidget(),
								ye.$g3b.get(Te)?.clearWidgets(),
								ue.$zAb.get(Te)?.clearWidgets());
						});
					}
					Oc() {
						return t.$Lgb(this.getDomNode());
					}
					updateEditorFocus() {
						this.Gb.refreshState();
						const Te = this.Oc();
						this.wb.set(Te), this.viewModel?.setEditorFocus(Te);
					}
					updateCellFocusMode() {
						const Te = this.getActiveCell();
						Te?.focusMode === L.CellFocusMode.Output &&
							!this.Hb &&
							(Te.focusMode = L.CellFocusMode.Container);
					}
					hasEditorFocus() {
						return this.updateEditorFocus(), this.Oc();
					}
					hasWebviewFocus() {
						return this.Hb;
					}
					hasOutputTextSelection() {
						if (!this.hasEditorFocus()) return !1;
						const Te = t.getWindow(this.getDomNode()).getSelection();
						if (Te?.rangeCount !== 1) return !1;
						const Ee = Te.getRangeAt(0);
						if (
							Ee.startContainer === Ee.endContainer &&
							Ee.endOffset - Ee.startOffset === 0
						)
							return !1;
						let Ie = Ee.commonAncestorContainer;
						if (!this.ab.contains(Ie)) return !1;
						for (; Ie && Ie !== this.ab; ) {
							if (Ie.classList && Ie.classList.contains("output")) return !0;
							Ie = Ie.parentNode;
						}
						return !1;
					}
					_didFocusOutputInputChange(Te) {
						this.Ab.set(Te);
					}
					focusElement(Te) {
						this.viewModel?.updateSelectionsState({
							kind: X.SelectionStateType.Handle,
							primary: Te.handle,
							selections: [Te.handle],
						});
					}
					get scrollTop() {
						return this.hb.scrollTop;
					}
					get scrollBottom() {
						return this.hb.scrollTop + this.hb.getRenderHeight();
					}
					getAbsoluteTopOfElement(Te) {
						return this.hb.getCellViewScrollTop(Te);
					}
					getHeightOfElement(Te) {
						return this.hb.elementHeight(Te);
					}
					scrollToBottom() {
						this.hb.scrollToBottom();
					}
					setScrollTop(Te) {
						this.hb.scrollTop = Te;
					}
					revealCellRangeInView(Te) {
						return this.hb.revealCells(Te);
					}
					revealInView(Te) {
						return this.hb.revealCell(Te, L.CellRevealType.Default);
					}
					revealInViewAtTop(Te) {
						this.hb.revealCell(Te, L.CellRevealType.Top);
					}
					revealInCenter(Te) {
						this.hb.revealCell(Te, L.CellRevealType.Center);
					}
					async revealInCenterIfOutsideViewport(Te) {
						await this.hb.revealCell(
							Te,
							L.CellRevealType.CenterIfOutsideViewport,
						);
					}
					async revealFirstLineIfOutsideViewport(Te) {
						await this.hb.revealCell(
							Te,
							L.CellRevealType.FirstLineIfOutsideViewport,
						);
					}
					async revealLineInViewAsync(Te, Ee) {
						return this.hb.revealRangeInCell(
							Te,
							new n.$iL(Ee, 1, Ee, 1),
							L.CellRevealRangeType.Default,
						);
					}
					async revealLineInCenterAsync(Te, Ee) {
						return this.hb.revealRangeInCell(
							Te,
							new n.$iL(Ee, 1, Ee, 1),
							L.CellRevealRangeType.Center,
						);
					}
					async revealLineInCenterIfOutsideViewportAsync(Te, Ee) {
						return this.hb.revealRangeInCell(
							Te,
							new n.$iL(Ee, 1, Ee, 1),
							L.CellRevealRangeType.CenterIfOutsideViewport,
						);
					}
					async revealRangeInViewAsync(Te, Ee) {
						return this.hb.revealRangeInCell(
							Te,
							Ee,
							L.CellRevealRangeType.Default,
						);
					}
					async revealRangeInCenterAsync(Te, Ee) {
						return this.hb.revealRangeInCell(
							Te,
							Ee,
							L.CellRevealRangeType.Center,
						);
					}
					async revealRangeInCenterIfOutsideViewportAsync(Te, Ee) {
						return this.hb.revealRangeInCell(
							Te,
							Ee,
							L.CellRevealRangeType.CenterIfOutsideViewport,
						);
					}
					revealCellOffsetInCenter(Te, Ee) {
						return this.hb.revealCellOffsetInCenter(Te, Ee);
					}
					revealOffsetInCenterIfOutsideViewport(Te) {
						return this.hb.revealOffsetInCenterIfOutsideViewport(Te);
					}
					getViewIndexByModelIndex(Te) {
						if (!this.ib) return -1;
						const Ee = this.viewModel?.viewCells[Te];
						return Ee ? this.ib.getViewIndex(Ee) : -1;
					}
					getViewHeight(Te) {
						return this.ib ? this.ib.getViewHeight(Te) : -1;
					}
					getCellRangeFromViewRange(Te, Ee) {
						return this.ib.getCellRangeFromViewRange(Te, Ee);
					}
					getCellsInRange(Te) {
						return this.ib.getCellsInRange(Te);
					}
					setCellEditorSelection(Te, Ee) {
						this.hb.setCellEditorSelection(Te, Ee);
					}
					setHiddenAreas(Te) {
						return this.hb.setHiddenAreas(Te, !0);
					}
					getVisibleRangesPlusViewportAboveAndBelow() {
						return this.ib.getVisibleRangesPlusViewportAboveAndBelow();
					}
					deltaCellDecorations(Te, Ee) {
						const Ie = this.viewModel?.deltaCellDecorations(Te, Ee) || [];
						return this.q.fire(), Ie;
					}
					deltaCellContainerClassNames(Te, Ee, Ie) {
						this.db?.deltaCellContainerClassNames(Te, Ee, Ie);
					}
					changeModelDecorations(Te) {
						return this.viewModel?.changeModelDecorations(Te) || null;
					}
					changeViewZones(Te) {
						this.hb.changeViewZones(Te);
					}
					async Pc() {
						if (!this.hasModel()) return;
						const { selected: Te } = this.Sb.getMatchingKernel(this.textModel);
						this.db?.isResolved() || (await this.xc()),
							this.db?.updateKernelPreloads(Te);
					}
					get activeKernel() {
						return (
							this.textModel &&
							this.Sb.getSelectedOrSuggestedKernel(this.textModel)
						);
					}
					async cancelNotebookCells(Te) {
						if (!(!this.viewModel || !this.hasModel()))
							return (
								Te || (Te = this.viewModel.viewCells),
								this.Yb.cancelNotebookCellHandles(
									this.textModel,
									Array.from(Te).map((Ee) => Ee.handle),
								)
							);
					}
					async executeNotebookCells(Te) {
						if (!this.viewModel || !this.hasModel()) {
							this.ac.info(
								"notebookEditorWidget",
								"No NotebookViewModel, cannot execute cells",
							);
							return;
						}
						return (
							Te || (Te = this.viewModel.viewCells),
							this.Yb.executeNotebookCells(
								this.textModel,
								Array.from(Te).map((Ee) => Ee.model),
								this.scopedContextKeyService,
							)
						);
					}
					async layoutNotebookCell(Te, Ee, Ie) {
						if (
							(this.dc("layout cell", Te.handle, Ee),
							this.hb.getViewIndex(Te) === void 0)
						)
							return;
						this.Qc?.has(Te) && this.Qc?.get(Te).dispose();
						const Se = new w.$0h(),
							ke = () => {
								if (
									!this.Jb &&
									this.viewModel?.hasCell(Te) &&
									this.hb.getViewIndex(Te) !== void 0 &&
									this.hb.elementHeight(Te) !== Ee
								) {
									if ((this.Qc?.delete(Te), !this.hasEditorFocus())) {
										const Ue = this.viewModel?.getCellIndex(Te),
											qe = this.visibleRanges;
										if (
											Ue !== void 0 &&
											qe &&
											qe.length &&
											qe[0].start === Ue &&
											this.hb.scrollTop > this.getAbsoluteTopOfElement(Te)
										)
											return this.hb.updateElementHeight2(
												Te,
												Ee,
												Math.min(Ue + 1, this.getLength() - 1),
											);
									}
									this.hb.updateElementHeight2(Te, Ee), Se.complete(void 0);
								}
							};
						if (this.hb.inRenderingTransaction) {
							const Ue = t.$hgb(t.getWindow(this.getDomNode()), ke);
							this.Qc?.set(
								Te,
								(0, m.$Yc)(() => {
									Ue.dispose(), Se.complete(void 0);
								}),
							);
						} else ke();
						return Se.p;
					}
					getActiveCell() {
						const Te = this.hb.getFocusedElements();
						if (Te && Te.length) return Te[0];
					}
					Rc(Te, Ee) {
						const Ie = this.hb.getSelectedElements(),
							Be = Ie.includes(Te),
							Se = Ee ? (Ie[Ie.length - 1] ?? Te) : Te,
							ke = this.hb.getViewIndex(Te),
							Ue = this.hb.getViewIndex(Se),
							qe = this.Sc(ke, Ue);
						Be
							? this.hb.selectElements(Ie.filter((Ae) => !qe.includes(Ae)))
							: (this.focusElement(Te),
								this.hb.selectElements([
									...Ie.filter((Ae) => !qe.includes(Ae)),
									...qe,
								]));
					}
					Sc(Te, Ee) {
						const Ie = [];
						for (let Be = 0; Be < this.hb.length; ++Be) {
							const Se = this.hb.element(Be);
							Se &&
								((Be >= Te && Be <= Ee) || (Be >= Ee && Be <= Te)) &&
								Ie.push(Se);
						}
						return Ie;
					}
					async focusNotebookCell(Te, Ee, Ie) {
						if (!this.Jb)
							if (((Te.focusedOutputId = void 0), Ee === "editor")) {
								if (
									(this.focusElement(Te),
									this.hb.focusView(),
									Te.updateEditState(
										L.CellEditState.Editing,
										"focusNotebookCell",
									),
									(Te.focusMode = L.CellFocusMode.Editor),
									!Ie?.skipReveal)
								)
									if (typeof Ie?.focusEditorLine == "number") {
										this.zb.set(!0),
											await this.revealLineInViewAsync(Te, Ie.focusEditorLine);
										const Be = this.lb.get(Te),
											Se = Ie.focusEditorLine;
										Be?.setSelection({
											startLineNumber: Se,
											startColumn: 1,
											endLineNumber: Se,
											endColumn: 1,
										});
									} else {
										const Be = Te.getSelectionsStartPosition();
										if (Be?.length) {
											const Se = Be[0];
											await this.revealRangeInViewAsync(
												Te,
												n.$iL.fromPositions(Se, Se),
											);
										} else await this.revealInView(Te);
									}
							} else if (Ee === "output") {
								if (
									(this.focusElement(Te),
									this.hasEditorFocus() || this.hb.focusView(),
									!this.db)
								)
									return;
								const Be = Te.outputsViewModels.find(
										(ke) => ke.model.alternativeOutputId,
									)?.model.alternativeOutputId,
									Se = Ie?.outputId ?? Be ?? Te.id;
								this.db.focusOutput(
									Se,
									Ie?.altOutputId,
									Ie?.outputWebviewFocused || this.Hb,
								),
									Te.updateEditState(
										L.CellEditState.Preview,
										"focusNotebookCell",
									),
									(Te.focusMode = L.CellFocusMode.Output),
									(Te.focusedOutputId = Ie?.outputId),
									this.xb.set(!0),
									Ie?.skipReveal || this.revealInCenterIfOutsideViewport(Te);
							} else {
								const Be = this.hb.domElementOfElement(Te);
								Be &&
									Be.ownerDocument.activeElement &&
									Be.contains(Be.ownerDocument.activeElement) &&
									Be.ownerDocument.activeElement.blur(),
									this.db?.blurOutput(),
									Te.updateEditState(
										L.CellEditState.Preview,
										"focusNotebookCell",
									),
									(Te.focusMode = L.CellFocusMode.Container),
									this.focusElement(Te),
									Ie?.skipReveal ||
										(typeof Ie?.focusEditorLine == "number"
											? (this.zb.set(!0), await this.revealInView(Te))
											: Ie?.revealBehavior ===
													L.ScrollToRevealBehavior.firstLine
												? await this.revealFirstLineIfOutsideViewport(Te)
												: Ie?.revealBehavior ===
														L.ScrollToRevealBehavior.fullCell
													? await this.revealInView(Te)
													: await this.revealInCenterIfOutsideViewport(Te)),
									this.hb.focusView(),
									this.updateEditorFocus();
							}
					}
					async focusNextNotebookCell(Te, Ee) {
						const Ie = this.viewModel?.getCellIndex(Te);
						if (typeof Ie != "number") return;
						const Be = this.viewModel?.cellAt(Ie + 1);
						Be && (await this.focusNotebookCell(Be, Ee));
					}
					async Tc(Te) {
						if (Te.isOutputCollapsed) return;
						const Ee = Te.outputsViewModels;
						for (const Ie of Ee.slice(0, F.$21b)) {
							const [Be, Se] = Ie.resolveMimeTypes(this.textModel, void 0);
							if (!Be.find((Me) => Me.isTrusted) || Be.length === 0) continue;
							const ke = Be[Se];
							if (!ke) return;
							const Ue = this.Tb.getRendererInfo(ke.rendererId);
							if (!Ue) return;
							const qe = {
									type: L.RenderOutputType.Extension,
									renderer: Ue,
									source: Ie,
									mimeType: ke.mimeType,
								},
								Ae = this.db?.insetMapping.get(qe.source);
							if (!Ae || !Ae.initialized) {
								const Me = new Promise((De) => {
									this.D(
										d.Event.any(
											this.N,
											this.P,
										)((Re) => {
											Re.model === qe.source.model && De();
										}),
									);
								});
								this.createOutput(Te, qe, 0, !1), await Me;
							} else this.createOutput(Te, qe, 0, !1);
							return;
						}
					}
					async Uc(Te) {
						if (!this.hasModel() || !this.viewModel) return;
						const Ee = this.viewModel.viewCells,
							Ie = [];
						for (let Be = 0; Be < Ee.length; Be++)
							Ee[Be].cellKind === X.CellKind.Markup &&
								!this.db.markupPreviewMapping.has(Ee[Be].id) &&
								Ie.push(this.createMarkupPreview(Ee[Be]));
						if (Te && this.hb)
							for (let Be = 0; Be < this.hb.length; Be++) {
								const Se = this.hb.element(Be);
								Se?.cellKind === X.CellKind.Code && Ie.push(this.Tc(Se));
							}
						return Promise.all(Ie);
					}
					async find(Te, Ee, Ie, Be = !1, Se = !1, ke) {
						if (!this.ob) return [];
						ke || (ke = this.getId());
						const Ue = this.ob.find(Te, Ee).filter((Me) => Me.length > 0);
						if (
							(!Ee.includeMarkupPreview && !Ee.includeOutput) ||
							Ee.findScope?.findScopeType === X.NotebookFindScopeType.Text
						)
							return this.db?.findStop(ke), Ue;
						const qe = {};
						if (
							(Ue.forEach((Me) => {
								qe[Me.cell.id] = Me;
							}),
							this.db)
						) {
							const Me = Date.now();
							await this.Uc(!!Ee.includeOutput);
							const De = Date.now();
							if (
								(this.ac.debug("Find", `Warmup time: ${De - Me}ms`),
								Ie.isCancellationRequested)
							)
								return [];
							let Re = [];
							Ee.findScope &&
								Ee.findScope.findScopeType === X.NotebookFindScopeType.Cells &&
								Ee.findScope.selectedCellRanges &&
								(Re = (0, te.$j6)(Ee.findScope.selectedCellRanges).map(
									(Ze) => this.ob?.viewCells[Ze].id ?? "",
								));
							const je = await this.db.find(Te, {
								caseSensitive: Ee.caseSensitive,
								wholeWord: Ee.wholeWord,
								includeMarkup: !!Ee.includeMarkupPreview,
								includeOutput: !!Ee.includeOutput,
								shouldGetSearchPreviewInfo: Se,
								ownerID: ke,
								findIds: Re,
							});
							if (Ie.isCancellationRequested) return [];
							je.forEach((Ve) => {
								const Ze = this.ob.viewCells.find((rt) => rt.id === Ve.cellId);
								if (!Ze) return;
								if (Ve.type === "preview") {
									if (
										(Ze.getEditState() === L.CellEditState.Preview &&
											!Ee.includeMarkupPreview) ||
										(Ze.getEditState() === L.CellEditState.Editing &&
											Ee.includeMarkupInput)
									)
										return;
								} else if (!Ee.includeOutput) return;
								const et = qe[Ve.cellId];
								et
									? et.webviewMatches.push(Ve)
									: (qe[Ve.cellId] = new ae.$o2b(
											this.ob.viewCells.find((rt) => rt.id === Ve.cellId),
											this.ob.viewCells.findIndex((rt) => rt.id === Ve.cellId),
											[],
											[Ve],
										));
							});
						}
						const Ae = [];
						return (
							this.ob.viewCells.forEach((Me, De) => {
								qe[Me.id] &&
									Ae.push(
										new ae.$o2b(
											Me,
											De,
											qe[Me.id].contentMatches,
											qe[Me.id].webviewMatches,
										),
									);
							}),
							Ae
						);
					}
					async findHighlightCurrent(Te, Ee) {
						return this.db
							? this.db?.findHighlightCurrent(Te, Ee ?? this.getId())
							: 0;
					}
					async findUnHighlightCurrent(Te, Ee) {
						if (this.db)
							return this.db?.findUnHighlightCurrent(Te, Ee ?? this.getId());
					}
					findStop(Te) {
						this.db?.findStop(Te ?? this.getId());
					}
					getLayoutInfo() {
						if (!this.hb)
							throw new Error("Editor is not initalized successfully");
						return (
							this.rb || this.fc(),
							{
								width: this.sb?.width ?? 0,
								height: this.sb?.height ?? 0,
								scrollHeight: this.hb?.getScrollHeight() ?? 0,
								fontInfo: this.rb,
								stickyHeight: this.X?.getCurrentStickyHeight() ?? 0,
							}
						);
					}
					async createMarkupPreview(Te) {
						if (
							!this.db ||
							(this.db.isResolved() || (await this.xc()),
							!this.db || !this.hb.webviewElement) ||
							!this.viewModel ||
							!this.hb.viewModel ||
							this.viewModel.getCellIndex(Te) === -1 ||
							this.Vc(Te)
						)
							return;
						const Ee = parseInt(this.hb.webviewElement.domNode.style.top, 10),
							Ie = Ee ? 0 - Ee : 0,
							Be = this.hb.getCellViewScrollTop(Te);
						await this.db.showMarkupPreview({
							mime: Te.mime,
							cellHandle: Te.handle,
							cellId: Te.id,
							content: Te.getText(),
							offset: Be + Ie,
							visible: !0,
							metadata: Te.metadata,
						});
					}
					Vc(Te) {
						const Ee = this.viewModel.getCellIndex(Te);
						return this.viewModel
							.getHiddenRanges()
							.some((Be) => Ee >= Be.start && Ee <= Be.end);
					}
					async unhideMarkupPreviews(Te) {
						this.db &&
							(this.db.isResolved() || (await this.xc()),
							await this.db?.unhideMarkupPreviews(Te.map((Ee) => Ee.id)));
					}
					async hideMarkupPreviews(Te) {
						!this.db ||
							!Te.length ||
							(this.db.isResolved() || (await this.xc()),
							await this.db?.hideMarkupPreviews(Te.map((Ee) => Ee.id)));
					}
					async deleteMarkupPreviews(Te) {
						this.db &&
							(this.db.isResolved() || (await this.xc()),
							await this.db?.deleteMarkupPreviews(Te.map((Ee) => Ee.id)));
					}
					async Wc() {
						if (!this.db) return;
						this.db.isResolved() || (await this.xc());
						const Te = this.getSelectionViewModels().map((Ee) => Ee.id);
						await this.db?.updateMarkupPreviewSelections(
							Te.length > 1 ? Te : [],
						);
					}
					async createOutput(Te, Ee, Ie, Be) {
						this.Db.queue(Ee.source.model.outputId, async () => {
							if (
								this.Jb ||
								!this.db ||
								(this.db.isResolved() || (await this.xc()), !this.db) ||
								!this.hb.webviewElement
							)
								return;
							Ee.type === L.RenderOutputType.Extension &&
								this.Qb.prepare(Ee.renderer.id);
							const Se = parseInt(this.hb.webviewElement.domNode.style.top, 10),
								ke = Se ? 0 - Se : 0,
								Ue = this.hb.getCellViewScrollTop(Te) + ke,
								qe = this.db.insetMapping.get(Ee.source);
							if (
								!qe ||
								(!qe.renderer && Ee.type === L.RenderOutputType.Extension)
							)
								Be
									? this.db.requestCreateOutputWhenWebviewIdle(
											{
												cellId: Te.id,
												cellHandle: Te.handle,
												cellUri: Te.uri,
												executionId: Te.internalMetadata.executionId,
											},
											Ee,
											Ue,
											Ie,
										)
									: this.db.createOutput(
											{
												cellId: Te.id,
												cellHandle: Te.handle,
												cellUri: Te.uri,
												executionId: Te.internalMetadata.executionId,
											},
											Ee,
											Ue,
											Ie,
										);
							else if (
								qe.renderer &&
								Ee.type === L.RenderOutputType.Extension &&
								qe.renderer.id !== Ee.renderer.id
							)
								this.db.removeInsets([Ee.source]),
									this.db.createOutput(
										{ cellId: Te.id, cellHandle: Te.handle, cellUri: Te.uri },
										Ee,
										Ue,
										Ie,
									);
							else if (qe.versionId !== Ee.source.model.versionId)
								this.db.updateOutput(
									{
										cellId: Te.id,
										cellHandle: Te.handle,
										cellUri: Te.uri,
										executionId: Te.internalMetadata.executionId,
									},
									Ee,
									Ue,
									Ie,
								);
							else {
								const Ae = Te.outputsViewModels.indexOf(Ee.source),
									Me = Te.getOutputOffset(Ae);
								this.db.updateScrollTops(
									[
										{
											cell: Te,
											output: Ee.source,
											cellTop: Ue,
											outputOffset: Me,
											forceDisplay: !Te.isOutputCollapsed,
										},
									],
									[],
								);
							}
						});
					}
					async updateOutput(Te, Ee, Ie) {
						this.Db.queue(Ee.source.model.outputId, async () => {
							if (
								this.Jb ||
								!this.db ||
								Te.isOutputCollapsed ||
								(this.db.isResolved() || (await this.xc()),
								!this.db || !this.hb.webviewElement)
							)
								return;
							if (!this.db.insetMapping.has(Ee.source))
								return this.createOutput(Te, Ee, Ie, !1);
							Ee.type === L.RenderOutputType.Extension &&
								this.Qb.prepare(Ee.renderer.id);
							const Be = parseInt(this.hb.webviewElement.domNode.style.top, 10),
								Se = Be ? 0 - Be : 0,
								ke = this.hb.getCellViewScrollTop(Te) + Se;
							this.db.updateOutput(
								{ cellId: Te.id, cellHandle: Te.handle, cellUri: Te.uri },
								Ee,
								ke,
								Ie,
							);
						});
					}
					async copyOutputImage(Te) {
						this.db?.copyImage(Te);
					}
					removeInset(Te) {
						this.Db.queue(Te.model.outputId, async () => {
							this.Jb ||
								!this.db ||
								(this.db?.isResolved() && this.db.removeInsets([Te]),
								this.O.fire(Te));
						});
					}
					hideInset(Te) {
						this.Db.queue(Te.model.outputId, async () => {
							this.Jb ||
								!this.db ||
								(this.db?.isResolved() && this.db.hideInset(Te));
						});
					}
					postMessage(Te) {
						this.db?.isResolved() && this.db.postKernelMessage(Te);
					}
					addClassName(Te) {
						this.R.classList.add(Te);
					}
					removeClassName(Te) {
						this.R.classList.remove(Te);
					}
					cellAt(Te) {
						return this.viewModel?.cellAt(Te);
					}
					getCellByInfo(Te) {
						const { cellHandle: Ee } = Te;
						return this.viewModel?.viewCells.find((Ie) => Ie.handle === Ee);
					}
					getCellByHandle(Te) {
						return this.viewModel?.getCellByHandle(Te);
					}
					getCellsBefore(Te) {
						return this.viewModel?.getCellsBefore(Te);
					}
					getCellsAfter(Te) {
						return this.viewModel?.getCellsAfter(Te);
					}
					getCellIndex(Te) {
						return this.viewModel?.getCellIndexByHandle(Te.handle);
					}
					getNextVisibleCellIndex(Te) {
						return this.viewModel?.getNextVisibleCellIndex(Te);
					}
					getPreviousVisibleCellIndex(Te) {
						return this.viewModel?.getPreviousVisibleCellIndex(Te);
					}
					Xc() {
						if (this.Jb || !this.db?.isResolved() || !this.hb.webviewElement)
							return;
						const Te = this.hb.scrollHeight;
						this.db.element.style.height = `${Te + B.$A2b * 2}px`;
						const Ee = parseInt(this.hb.webviewElement.domNode.style.top, 10),
							Ie = Ee ? 0 - Ee : 0,
							Be = [],
							Se = [];
						this.db?.insetMapping.forEach((Ue, qe) => {
							const Ae = this.viewModel?.getCellByHandle(
								Ue.cellInfo.cellHandle,
							);
							if (
								!Ae ||
								!(Ae instanceof F.$31b) ||
								(this.viewModel?.viewCells.find(
									(Ve) => Ve.handle === Ue.cellInfo.cellHandle,
								),
								this.hb.getViewIndex(Ae) === void 0)
							)
								return;
							Ae.outputsViewModels.indexOf(qe) < 0 && Se.push(qe);
							const De = this.hb.getCellViewScrollTop(Ae),
								Re = Ae.outputsViewModels.indexOf(qe),
								je = Ae.getOutputOffset(Re);
							Be.push({
								cell: Ae,
								output: qe,
								cellTop: De + Ie,
								outputOffset: je,
								forceDisplay: !1,
							});
						}),
							this.db.removeInsets(Se);
						const ke = [];
						for (const Ue of this.db.markupPreviewMapping.keys()) {
							const qe = this.viewModel?.viewCells.find((Ae) => Ae.id === Ue);
							if (qe) {
								const Ae = this.hb.getCellViewScrollTop(qe);
								ke.push({ id: Ue, top: Ae + Ie });
							}
						}
						(ke.length || Be.length) &&
							(this.dc("_list.onDidChangeContentHeight/markdown", ke),
							this.db?.updateScrollTops(Be, ke));
					}
					Yc(Te, Ee, Ie, Be, Se) {
						const ke = this.viewModel?.viewCells.find(
							(Ue) => Ue.handle === Te.cellHandle,
						);
						if (ke && ke instanceof F.$31b) {
							const Ue = ke.outputsViewModels.indexOf(Ee);
							this.dc("update cell output", ke.handle, Ie),
								ke.updateOutputHeight(Ue, Ie, Se),
								this.layoutNotebookCell(ke, ke.layoutInfo.totalHeight),
								Be && this.M.fire(Ee);
						}
					}
					$c(Te, Ee, Ie) {
						const Be = this.Zc.size === 0;
						this.Zc.set(Ee, { cellId: Te.cellId, outputId: Ee, height: Ie }),
							Be &&
								t.$hgb(
									t.getWindow(this.getDomNode()),
									() => {
										this.dc("ack height"),
											this.Xc(),
											this.db?.ackHeight([...this.Zc.values()]),
											this.Zc.clear();
									},
									-1,
								);
					}
					ad(Te) {
						return this.viewModel?.viewCells.find((Ee) => Ee.id === Te);
					}
					bd(Te, Ee, Ie) {
						const Be = this.ad(Te);
						if (Be && Be instanceof H.$41b) {
							const { bottomToolbarGap: Se } =
								this.Ob.computeBottomToolbarDimensions(
									this.viewModel?.viewType,
								);
							this.dc("updateMarkdownCellHeight", Be.handle, Ee + Se, Ie),
								(Be.renderedMarkdownHeight = Ee);
						}
					}
					cd(Te, Ee) {
						const Ie = this.ad(Te);
						Ie instanceof H.$41b &&
							(this.revealInView(Ie),
							Ie.updateEditState(Ee, "setMarkdownCellEditState"));
					}
					dd(Te, Ee) {
						const Ie = this.ad(Te);
						if (Ie instanceof H.$41b) {
							const Be = this.hb.webviewElement
								? -parseInt(this.hb.webviewElement.domNode.style.top, 10)
								: 0;
							this.jb?.startExplicitDrag(Ie, Ee.dragOffsetY - Be);
						}
					}
					ed(Te, Ee) {
						const Ie = this.ad(Te);
						if (Ie instanceof H.$41b) {
							const Be = this.hb.webviewElement
								? -parseInt(this.hb.webviewElement.domNode.style.top, 10)
								: 0;
							this.jb?.explicitDrag(Ie, Ee.dragOffsetY - Be);
						}
					}
					fd(Te, Ee) {
						const Ie = this.ad(Te);
						if (Ie instanceof H.$41b) {
							const Be = this.hb.webviewElement
								? -parseInt(this.hb.webviewElement.domNode.style.top, 10)
								: 0;
							(Ee.dragOffsetY -= Be), this.jb?.explicitDrop(Ie, Ee);
						}
					}
					gd(Te) {
						const Ee = this.ad(Te);
						Ee instanceof H.$41b && this.jb?.endExplicitDrag(Ee);
					}
					hd(Te) {
						const Ee = this.ad(Te);
						Ee && this.Q.fire(Ee);
					}
					jd(Te, Ee, Ie, Be) {
						if (!this.hasModel()) return;
						const Se = this.ad(Te),
							ke = Se ? this.getCellIndex(Se) : void 0;
						if (Se?.internalMetadata.executionId === Ee && ke !== void 0) {
							const Ue = Se.internalMetadata.renderDuration || {};
							(Ue[Be] = (Ue[Be] ?? 0) + Ie),
								this.textModel.applyEdits(
									[
										{
											editType: X.CellEditType.PartialInternalMetadata,
											index: ke,
											internalMetadata: { executionId: Ee, renderDuration: Ue },
										},
									],
									!0,
									void 0,
									() => {},
									void 0,
									!1,
								);
						}
					}
					getContribution(Te) {
						return this.Bb.get(Te) || null;
					}
					dispose() {
						(this.Jb = !0),
							this.db?.dispose(),
							(this.db = null),
							this.Rb.removeNotebookEditor(this),
							(0, m.$Vc)(this.Bb.values()),
							this.Bb.clear(),
							this.pb.clear(),
							(0, m.$Vc)(this.qb),
							this.hb.dispose(),
							this.kb?.dispose(),
							this.R.remove(),
							this.viewModel?.dispose(),
							this.lb.clear(),
							this.Kb.forEach((Te) => Te.dispose()),
							this.Kb.clear(),
							this.Y.remove(),
							super.dispose(),
							(this.db = null),
							(this.eb = null),
							(this.fb = null),
							(this.jb = null),
							(this.kb = null),
							(this.ob = void 0),
							(this.Eb = null),
							(this.U = null),
							(this.hb = null),
							(this.ib = null),
							(this.Qc = null),
							(this.gb = null);
					}
					toJSON() {
						return { notebookUri: this.viewModel?.uri };
					}
				};
				(e.$24b = He),
					(e.$24b = He =
						Ne(
							[
								j(2, l.$Li),
								j(3, re.$EY),
								j(4, Q.$Q2b),
								j(5, M.$n5b),
								j(6, ee.$f6),
								j(7, Z.$MIb),
								j(8, f.$gj),
								j(9, b.$6j),
								j(10, $.$jEb),
								j(11, s.$Xxb),
								j(12, I.$km),
								j(13, ie.$c6),
								j(14, ne.$d6),
								j(15, S.$bO),
								j(16, pe.$P2b),
								j(17, ve.$uZ),
							],
							He,
						)),
					(0, v.$ZJb)(v.ZIndex.Base, 5, "notebook-progress-bar"),
					(0, v.$ZJb)(v.ZIndex.Base, 10, "notebook-list-insertion-indicator"),
					(0, v.$ZJb)(v.ZIndex.Base, 20, "notebook-cell-editor-outline"),
					(0, v.$ZJb)(v.ZIndex.Base, 25, "notebook-scrollbar"),
					(0, v.$ZJb)(v.ZIndex.Base, 26, "notebook-cell-status"),
					(0, v.$ZJb)(v.ZIndex.Base, 26, "notebook-folding-indicator"),
					(0, v.$ZJb)(v.ZIndex.Base, 27, "notebook-output"),
					(0, v.$ZJb)(
						v.ZIndex.Base,
						28,
						"notebook-cell-bottom-toolbar-container",
					),
					(0, v.$ZJb)(v.ZIndex.Base, 29, "notebook-run-button-container"),
					(0, v.$ZJb)(v.ZIndex.Base, 29, "notebook-input-collapse-condicon"),
					(0, v.$ZJb)(v.ZIndex.Base, 30, "notebook-cell-output-toolbar"),
					(0, v.$ZJb)(v.ZIndex.Sash, 1, "notebook-cell-expand-part-button"),
					(0, v.$ZJb)(v.ZIndex.Sash, 2, "notebook-cell-toolbar"),
					(0, v.$ZJb)(
						v.ZIndex.Sash,
						3,
						"notebook-cell-toolbar-dropdown-active",
					),
					(e.$34b = (0, T.$wP)(
						"notebook.cellBorderColor",
						{
							dark: (0, T.$BP)(T.$HS, 1),
							light: (0, T.$BP)(T.$HS, 1),
							hcDark: P.$rFb,
							hcLight: P.$rFb,
						},
						p.localize(8092, null),
					)),
					(e.$44b = (0, T.$wP)(
						"notebook.focusedEditorBorder",
						T.$NP,
						p.localize(8093, null),
					)),
					(e.$54b = (0, T.$wP)(
						"notebookStatusSuccessIcon.foreground",
						k.$NKb,
						p.localize(8094, null),
					)),
					(e.$64b = (0, T.$wP)(
						"notebookEditorOverviewRuler.runningCellForeground",
						k.$NKb,
						p.localize(8095, null),
					)),
					(e.$74b = (0, T.$wP)(
						"notebookStatusErrorIcon.foreground",
						T.$KP,
						p.localize(8096, null),
					)),
					(e.$84b = (0, T.$wP)(
						"notebookStatusRunningIcon.foreground",
						T.$IP,
						p.localize(8097, null),
					)),
					(e.$94b = (0, T.$wP)(
						"notebook.outputContainerBorderColor",
						null,
						p.localize(8098, null),
					)),
					(e.$04b = (0, T.$wP)(
						"notebook.outputContainerBackgroundColor",
						null,
						p.localize(8099, null),
					)),
					(e.$$4b = (0, T.$wP)(
						"notebook.cellToolbarSeparator",
						{
							dark: E.$UL.fromHex("#808080").transparent(0.35),
							light: E.$UL.fromHex("#808080").transparent(0.35),
							hcDark: T.$OP,
							hcLight: T.$OP,
						},
						p.localize(8100, null),
					)),
					(e.$_4b = (0, T.$wP)(
						"notebook.focusedCellBackground",
						null,
						p.localize(8101, null),
					)),
					(e.$a5b = (0, T.$wP)(
						"notebook.selectedCellBackground",
						{ dark: T.$HS, light: T.$HS, hcDark: null, hcLight: null },
						p.localize(8102, null),
					)),
					(e.$b5b = (0, T.$wP)(
						"notebook.cellHoverBackground",
						{
							dark: (0, T.$BP)(e.$_4b, 0.5),
							light: (0, T.$BP)(e.$_4b, 0.7),
							hcDark: null,
							hcLight: null,
						},
						p.localize(8103, null),
					)),
					(e.$c5b = (0, T.$wP)(
						"notebook.selectedCellBorder",
						{ dark: e.$34b, light: e.$34b, hcDark: T.$OP, hcLight: T.$OP },
						p.localize(8104, null),
					)),
					(e.$d5b = (0, T.$wP)(
						"notebook.inactiveSelectedCellBorder",
						{ dark: null, light: null, hcDark: T.$NP, hcLight: T.$NP },
						p.localize(8105, null),
					)),
					(e.$e5b = (0, T.$wP)(
						"notebook.focusedCellBorder",
						T.$NP,
						p.localize(8106, null),
					)),
					(e.$f5b = (0, T.$wP)(
						"notebook.inactiveFocusedCellBorder",
						e.$34b,
						p.localize(8107, null),
					)),
					(e.$g5b = (0, T.$wP)(
						"notebook.cellStatusBarItemHoverBackground",
						{
							light: new E.$UL(new E.$RL(0, 0, 0, 0.08)),
							dark: new E.$UL(new E.$RL(255, 255, 255, 0.15)),
							hcDark: new E.$UL(new E.$RL(255, 255, 255, 0.15)),
							hcLight: new E.$UL(new E.$RL(0, 0, 0, 0.08)),
						},
						p.localize(8108, null),
					)),
					(e.$h5b = (0, T.$wP)(
						"notebook.cellInsertionIndicator",
						T.$NP,
						p.localize(8109, null),
					)),
					(e.$i5b = (0, T.$wP)(
						"notebookScrollbarSlider.background",
						T.$4P,
						p.localize(8110, null),
					)),
					(e.$j5b = (0, T.$wP)(
						"notebookScrollbarSlider.hoverBackground",
						T.$5P,
						p.localize(8111, null),
					)),
					(e.$k5b = (0, T.$wP)(
						"notebookScrollbarSlider.activeBackground",
						T.$6P,
						p.localize(8112, null),
					)),
					(e.$l5b = (0, T.$wP)(
						"notebook.symbolHighlightBackground",
						{
							dark: E.$UL.fromHex("#ffffff0b"),
							light: E.$UL.fromHex("#fdff0033"),
							hcDark: null,
							hcLight: null,
						},
						p.localize(8113, null),
					)),
					(e.$m5b = (0, T.$wP)(
						"notebook.cellEditorBackground",
						{ light: P.$wGb, dark: P.$wGb, hcDark: null, hcLight: null },
						p.localize(8114, null),
					));
				const Ke = (0, T.$wP)(
					"notebook.editorBackground",
					{ light: P.$cFb, dark: P.$cFb, hcDark: null, hcLight: null },
					p.localize(8115, null),
				);
			},
		),
		
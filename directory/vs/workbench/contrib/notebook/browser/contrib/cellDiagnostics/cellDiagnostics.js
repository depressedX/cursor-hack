define(de[4100], he([1, 0, 4092, 1960, 4099]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 });
		}),
		define(
			de[4101],
			he([1, 0, 15, 3, 17, 10, 1331, 796, 112, 108, 330, 856, 70, 190]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$uGc = e.$tGc = void 0);
				let n = class extends i.$1c {
					static {
						this.id = "workbench.notebook.debug.pausedCellDecorations";
					}
					constructor(o, f, b) {
						super(),
							(this.f = o),
							(this.g = f),
							(this.h = b),
							(this.a = []),
							(this.b = []),
							(this.c = []);
						const s = this.D(new t.$Jh(200));
						this.D(f.getModel().onDidChangeCallStack(() => this.j())),
							this.D(f.getViewModel().onDidFocusStackFrame(() => this.j())),
							this.D(
								b.onDidChangeExecution((l) => {
									l.type === c.NotebookExecutionType.cell &&
										this.f.textModel &&
										l.affectsNotebook(this.f.textModel.uri) &&
										s.trigger(() => this.j());
								}),
							);
					}
					j() {
						const o = this.f.textModel
								? this.h.getCellExecutionsByHandleForNotebook(
										this.f.textModel.uri,
									)
								: void 0,
							f = [];
						let b;
						const s = ($) => {
							const v = h.CellUri.parse($.source.uri);
							if (
								v &&
								v.notebook.toString() === this.f.textModel?.uri.toString()
							)
								return { handle: v.handle, range: $.range };
						};
						for (const $ of this.g.getModel().getSessions())
							for (const v of $.getAllThreads()) {
								const S = v.getTopStackFrame();
								if (S) {
									const I = s(S);
									I && (f.push(I), o?.delete(I.handle));
								}
							}
						const l = this.g.getViewModel().focusedStackFrame;
						if (l && l.thread.stopped) {
							const $ = s(l);
							$ &&
								!f.some(
									(v) =>
										v.handle === $?.handle &&
										w.$iL.equalsRange(v.range, $?.range),
								) &&
								((b = $), o?.delete(b.handle));
						}
						this.m(f), this.n(b);
						const y = o
							? Array.from(o.entries())
									.filter(
										([$, v]) =>
											v.state === h.NotebookCellExecutionState.Executing,
									)
									.map(([$]) => $)
							: [];
						this.q(y);
					}
					m(o) {
						const f = o.map(({ handle: b, range: s }) => {
							const l = {
								overviewRuler: {
									color: d.$cGc,
									includeOutput: !1,
									modelRanges: [s],
									position: r.NotebookOverviewRulerLane.Full,
								},
							};
							return { handle: b, options: l };
						});
						this.a = this.f.deltaCellDecorations(this.a, f);
					}
					n(o) {
						let f = [];
						if (o) {
							const b = {
								overviewRuler: {
									color: d.$dGc,
									includeOutput: !1,
									modelRanges: [o.range],
									position: r.NotebookOverviewRulerLane.Full,
								},
							};
							f = [{ handle: o.handle, options: b }];
						}
						this.b = this.f.deltaCellDecorations(this.b, f);
					}
					q(o) {
						const f = o.map((b) => {
							const s = {
								overviewRuler: {
									color: a.$64b,
									includeOutput: !1,
									modelRanges: [new w.$iL(0, 0, 0, 0)],
									position: r.NotebookOverviewRulerLane.Left,
								},
							};
							return { handle: b, options: s };
						});
						this.c = this.f.deltaCellDecorations(this.c, f);
					}
				};
				(e.$tGc = n),
					(e.$tGc = n = Ne([j(1, m.$75), j(2, c.$d6)], n)),
					(0, u.$PKb)(n.id, n);
				let g = class extends i.$1c {
					static {
						this.id = "workbench.notebook.debug.notebookBreakpointDecorations";
					}
					constructor(o, f, b) {
						super(),
							(this.b = o),
							(this.c = f),
							(this.f = b),
							(this.a = []),
							this.D(f.getModel().onDidChangeBreakpoints(() => this.g())),
							this.D(
								b.onDidChangeConfiguration(
									(s) =>
										s.affectsConfiguration(
											"debug.showBreakpointsInOverviewRuler",
										) && this.g(),
								),
							);
					}
					g() {
						const f = this.f.getValue("debug.showBreakpointsInOverviewRuler")
							? this.c
									.getModel()
									.getBreakpoints()
									.map((b) => {
										const s = h.CellUri.parse(b.uri);
										if (
											!s ||
											s.notebook.toString() !== this.b.textModel.uri.toString()
										)
											return null;
										const l = {
											overviewRuler: {
												color: C.$sGc,
												includeOutput: !1,
												modelRanges: [
													new w.$iL(b.lineNumber, 0, b.lineNumber, 0),
												],
												position: r.NotebookOverviewRulerLane.Left,
											},
										};
										return { handle: s.handle, options: l };
									})
									.filter((b) => !!b)
							: [];
						this.a = this.b.deltaCellDecorations(this.a, f);
					}
				};
				(e.$uGc = g),
					(e.$uGc = g = Ne([j(1, m.$75), j(2, E.$gj)], g)),
					(0, u.$PKb)(g.id, g);
			},
		),
		define(
			de[1361],
			he([
				1, 0, 4, 7, 214, 21, 32, 35, 44, 856, 33, 706, 5, 3772, 8, 51, 992, 10,
				463, 345, 556, 6, 3, 217, 70, 15, 47, 1963, 1254, 600, 835, 442, 3091,
				1618, 1847, 161,
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
		),
		define(
			de[4102],
			he([1, 0, 29, 3, 23, 19, 427, 798, 293, 70, 18, 1361, 1320]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$jJc = void 0);
				let c = class {
					constructor(g, p, o) {
						(this.a = new i.$Zc()),
							this.a.add(
								g.registerSessionKeyComputer(w.Schemas.vscodeNotebookCell, {
									getComparisonKey: (f, b) => {
										const s = r.CellUri.parse(b);
										if (!s) throw (0, t.$_)("Expected notebook cell uri");
										let l;
										for (const $ of o.listNotebookEditors())
											if (
												$.hasModel() &&
												(0, E.$gh)($.textModel.uri, s.notebook)
											) {
												const v = `<notebook>${$.getId()}#${b}`;
												if (
													(l || (l = v), $.codeEditors.find((S) => S[1] === f))
												)
													return v;
											}
										if (l) return l;
										const y = p.activeEditorPane;
										if (
											y &&
											(y.getId() === a.$kFc.ID || y.getId() === h.$JGc.ID)
										)
											return `<notebook>${f.getId()}#${b}`;
										throw (0, t.$_)("Expected notebook editor");
									},
								}),
							),
							this.a.add(
								g.onWillStartSession((f) => {
									const b = r.CellUri.parse(f.getModel().uri);
									if (b) {
										for (const s of o.listNotebookEditors())
											if ((0, E.$gh)(s.textModel?.uri, b.notebook)) {
												let l = !1;
												const y = [];
												for (const [, $] of s.codeEditors)
													y.push($), (l = $ === f || l);
												if (l) {
													for (const $ of y)
														$ !== f && C.$Z1b.get($)?.finishExistingSession();
													break;
												}
											}
									}
								}),
							);
					}
					dispose() {
						this.a.dispose();
					}
				};
				(e.$jJc = c),
					(e.$jJc = c = Ne([j(0, d.$zLb), j(1, u.$IY), j(2, m.$n5b)], c));
			},
		),
		define(
			de[4103],
			he([
				1, 0, 46, 11, 427, 1061, 257, 20, 30, 52, 4102, 55, 4085, 4083, 1733,
				798, 1893, 412, 1047, 4, 207, 8, 3557, 4084,
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
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(E = mt(E)),
					(0, d.$lK)(g.$zLb, p.$V1b, d.InstantiationType.Delayed),
					(0, d.$lK)(n.$X1b, h.$kJc, d.InstantiationType.Delayed),
					(0, t.$qtb)(C.$TKb, w.$Z1b, t.EditorContributionInstantiation.Eager),
					(0, t.$qtb)(
						$.$oJc.Id,
						$.$oJc,
						t.EditorContributionInstantiation.BeforeFirstInteraction,
					),
					(0, i.$4X)($.$pJc);
				const v = {
						group: "0_main",
						order: 0,
						command: { id: f.$PYb.ID, title: (0, b.localize)(7072, null) },
						when: l.$Kj.and(s.$11, C.$aLb.toNegated(), C.$YKb),
					},
					S = {
						group: "0_main",
						order: 0,
						command: { id: f.$PYb.ID, title: (0, b.localize)(7073, null) },
						when: l.$Kj.and(s.$11, C.$aLb.toNegated(), C.$YKb.toNegated()),
					};
				i.$ZX.appendMenuItem(C.$iLb, v),
					i.$ZX.appendMenuItem(C.$iLb, S),
					i.$ZX.appendMenuItem(C.$jLb, v),
					i.$ZX.appendMenuItem(C.$jLb, S);
				const I = {
					group: "0_main",
					order: 0,
					command: {
						id: f.$RYb.ID,
						title: (0, b.localize)(7074, null),
						shortTitle: (0, b.localize)(7075, null),
					},
					when: l.$Kj.and(C.$aLb),
				};
				i.$ZX.appendMenuItem(C.$jLb, I),
					(0, i.$4X)(E.$6Ic),
					(0, i.$4X)(E.$dJc),
					(0, i.$4X)(E.$eJc),
					(0, i.$4X)(E.$7Ic),
					(0, i.$4X)(E.$bJc),
					(0, i.$4X)(E.$_Ic),
					(0, i.$4X)(E.$cJc),
					(0, i.$4X)(E.$fJc),
					(0, i.$4X)(E.$gJc),
					(0, i.$4X)(E.$9Ic),
					(0, i.$4X)(E.$0Ic),
					(0, i.$4X)(E.$$Ic),
					(0, i.$4X)(E.$hJc),
					(0, i.$4X)(E.$iJc),
					(0, i.$4X)(E.$aJc),
					m.$Io
						.as(a.Extensions.Workbench)
						.registerWorkbenchContribution(u.$jJc, r.LifecyclePhase.Restored),
					(0, a.$s6)(p.$W1b.Id, p.$W1b, a.WorkbenchPhase.AfterRestored),
					o.$Whc.register(new c.$lJc()),
					o.$Whc.register(new y.$mJc());
			},
		),
		define(
			de[4104],
			he([
				1, 0, 199, 4, 11, 10, 8, 100, 706, 556, 1361, 284, 18, 30, 81, 44, 43,
				27, 70, 125, 1320, 14, 116,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: "notebook.diff.switchToText",
									icon: a.$mOb,
									title: (0, i.localize2)(7996, "Open Text Diff Editor"),
									precondition: C.$Kj.or(
										d.$TPb.isEqualTo(u.$kFc.ID),
										d.$TPb.isEqualTo(s.$JGc.ID),
									),
									menu: [
										{
											id: w.$XX.EditorTitle,
											group: "navigation",
											when: C.$Kj.or(
												d.$TPb.isEqualTo(u.$kFc.ID),
												d.$TPb.isEqualTo(s.$JGc.ID),
											),
										},
									],
								});
							}
							async run(T) {
								const P = T.get(h.$IY),
									k = P.activeEditorPane;
								if (k && (k instanceof u.$kFc || k instanceof s.$JGc)) {
									const L = k.input;
									await P.openEditor({
										original: { resource: L.original.resource },
										modified: { resource: L.resource },
										label: L.getName(),
										options: { preserveFocus: !1, override: g.$b1.id },
									});
								}
							}
						},
					),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: "notebook.diffEditor.showUnchangedCells",
									title: (0, i.localize2)(7997, "Show Unchanged Cells"),
									icon: l.$ak.unfold,
									precondition: C.$Kj.and(
										d.$TPb.isEqualTo(s.$JGc.ID),
										C.$Kj.has(r.$FEc.key),
									),
									menu: {
										when: C.$Kj.and(
											d.$TPb.isEqualTo(s.$JGc.ID),
											C.$Kj.has(r.$FEc.key),
											C.$Kj.equals(r.$GEc.key, !0),
										),
										id: w.$XX.EditorTitle,
										order: 22,
										group: "navigation",
									},
								});
							}
							run(T, ...P) {
								const k = T.get(h.$IY).activeEditorPane;
								k && k instanceof s.$JGc && k.showUnchanged();
							}
						},
					),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: "notebook.diffEditor.hideUnchangedCells",
									title: (0, i.localize2)(7998, "Hide Unchanged Cells"),
									icon: l.$ak.fold,
									precondition: C.$Kj.and(
										d.$TPb.isEqualTo(s.$JGc.ID),
										C.$Kj.has(r.$FEc.key),
									),
									menu: {
										when: C.$Kj.and(
											d.$TPb.isEqualTo(s.$JGc.ID),
											C.$Kj.has(r.$FEc.key),
											C.$Kj.equals(r.$GEc.key, !1),
										),
										id: w.$XX.EditorTitle,
										order: 22,
										group: "navigation",
									},
								});
							}
							run(T, ...P) {
								const k = T.get(h.$IY).activeEditorPane;
								k && k instanceof s.$JGc && k.hideUnchanged();
							}
						},
					),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: "notebook.diffEditor.2.goToCell",
									title: (0, i.localize2)(7999, "Go To Cell"),
									icon: l.$ak.goToFile,
									menu: {
										when: C.$Kj.and(
											d.$TPb.isEqualTo(s.$JGc.ID),
											C.$Kj.equals(r.$HEc.key, "Cell"),
											C.$Kj.notEquals(r.$IEc.key, "delete"),
										),
										id: w.$XX.MultiDiffEditorFileToolbar,
										order: 0,
										group: "navigation",
									},
								});
							}
							async run(P, ...k) {
								const L = k[0],
									D = P.get(h.$IY);
								D.activeEditorPane instanceof s.$JGc &&
									(await D.openEditor({
										resource: L,
										options: {
											selectionRevealType:
												y.TextEditorSelectionRevealType.CenterIfOutsideViewport,
										},
									}));
							}
						},
					);
				const $ = (0, i.localize)(7986, null);
				(0, w.$4X)(
					class extends w.$3X {
						constructor() {
							super({
								id: "notebook.diffEditor.2.cell.revertInput",
								title: $,
								icon: a.$nOb,
								menu: {
									when: C.$Kj.and(
										d.$TPb.isEqualTo(s.$JGc.ID),
										C.$Kj.equals(r.$HEc.key, "Cell"),
										C.$Kj.equals(r.$IEc.key, "modified"),
									),
									id: w.$XX.MultiDiffEditorFileToolbar,
									order: 2,
									group: "navigation",
								},
							});
						}
						async run(T, ...P) {
							const k = P[0],
								D = T.get(h.$IY).activeEditorPane;
							if (!(D instanceof s.$JGc)) return;
							const M = D.getDiffElementViewModel(k);
							if (M && M instanceof m.$REc) {
								const N = M.modified,
									A = M.original;
								if (!A || !N) return;
								await T.get(t.$rzb).apply(
									[
										new t.$tzb(N.uri, {
											range: N.textModel.getFullModelRange(),
											text: A.textModel.getValue(),
										}),
									],
									{ quotableLabel: "Revert Notebook Cell Content Change" },
								);
							}
						}
					},
				);
				const v = (0, i.localize)(7987, null);
				(0, w.$4X)(
					class extends w.$3X {
						constructor() {
							super({
								id: "notebook.diffEditor.2.cell.revertOutputs",
								title: v,
								icon: a.$nOb,
								f1: !1,
								menu: {
									when: C.$Kj.and(
										d.$TPb.isEqualTo(s.$JGc.ID),
										C.$Kj.equals(r.$HEc.key, "Output"),
										C.$Kj.equals(r.$IEc.key, "modified"),
									),
									id: w.$XX.MultiDiffEditorFileToolbar,
									order: 2,
									group: "navigation",
								},
							});
						}
						async run(T, ...P) {
							const k = P[0],
								D = T.get(h.$IY).activeEditorPane;
							if (!(D instanceof s.$JGc)) return;
							const M = D.getDiffElementViewModel(k);
							if (M && M instanceof m.$REc) {
								const N = M.original,
									A = M.modifiedDocument.cells.findIndex(
										(R) => R.handle === M.modified.handle,
									);
								if (A === -1) return;
								M.mainDocumentTextModel.applyEdits(
									[
										{
											editType: f.CellEditType.Output,
											index: A,
											outputs: N.outputs,
										},
									],
									!0,
									void 0,
									() => {},
									void 0,
									!0,
								);
							}
						}
					},
				);
				const S = (0, i.localize)(7988, null);
				(0, w.$4X)(
					class extends w.$3X {
						constructor() {
							super({
								id: "notebook.diffEditor.2.cell.revertMetadata",
								title: S,
								icon: a.$nOb,
								f1: !1,
								menu: {
									when: C.$Kj.and(
										d.$TPb.isEqualTo(s.$JGc.ID),
										C.$Kj.equals(r.$HEc.key, "Metadata"),
										C.$Kj.equals(r.$IEc.key, "modified"),
									),
									id: w.$XX.MultiDiffEditorFileToolbar,
									order: 2,
									group: "navigation",
								},
							});
						}
						async run(T, ...P) {
							const k = P[0],
								D = T.get(h.$IY).activeEditorPane;
							if (!(D instanceof s.$JGc)) return;
							const M = D.getDiffElementViewModel(k);
							if (M && M instanceof m.$REc) {
								const N = M.original,
									A = M.modifiedDocument.cells.findIndex(
										(R) => R.handle === M.modified.handle,
									);
								if (A === -1) return;
								M.mainDocumentTextModel.applyEdits(
									[
										{
											editType: f.CellEditType.Metadata,
											index: A,
											metadata: N.metadata,
										},
									],
									!0,
									void 0,
									() => {},
									void 0,
									!0,
								);
							}
						}
					},
				),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: "notebook.diff.cell.revertMetadata",
									title: S,
									icon: a.$nOb,
									f1: !1,
									menu: {
										id: w.$XX.NotebookDiffCellMetadataTitle,
										when: r.$CEc,
									},
									precondition: r.$CEc,
								});
							}
							run(T, P) {
								if (!P || !(P.cell instanceof m.$REc)) return;
								const k = P.cell.original,
									L = P.cell.modified,
									D = P.cell.mainDocumentTextModel.cells.indexOf(L.textModel);
								if (D === -1) return;
								const M = [
									{
										editType: f.CellEditType.Metadata,
										index: D,
										metadata: k.metadata,
									},
								];
								P.cell.original.language &&
									P.cell.modified.language !== P.cell.original.language &&
									M.push({
										editType: f.CellEditType.CellLanguage,
										index: D,
										language: P.cell.original.language,
									}),
									P.cell.modifiedDocument.applyEdits(
										M,
										!0,
										void 0,
										() => {},
										void 0,
										!0,
									);
							}
						},
					),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: "notebook.diff.cell.switchOutputRenderingStyleToText",
									title: (0, i.localize)(7989, null),
									icon: a.$pOb,
									f1: !1,
									menu: {
										id: w.$XX.NotebookDiffCellOutputsTitle,
										when: r.$DEc,
									},
								});
							}
							run(T, P) {
								P && (P.cell.renderOutput = !P.cell.renderOutput);
							}
						},
					),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: "notebook.diff.cell.revertOutputs",
									title: (0, i.localize)(7990, null),
									icon: a.$nOb,
									f1: !1,
									menu: {
										id: w.$XX.NotebookDiffCellOutputsTitle,
										when: r.$CEc,
									},
									precondition: r.$CEc,
								});
							}
							run(T, P) {
								if (!P || !(P.cell instanceof m.$REc)) return;
								const k = P.cell.original,
									L = P.cell.modified,
									D = P.cell.mainDocumentTextModel.cells.indexOf(L.textModel);
								D !== -1 &&
									P.cell.mainDocumentTextModel.applyEdits(
										[
											{
												editType: f.CellEditType.Output,
												index: D,
												outputs: k.outputs,
											},
										],
										!0,
										void 0,
										() => {},
										void 0,
										!0,
									);
							}
						},
					),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: "notebook.toggle.diff.cell.ignoreTrimWhitespace",
									title: (0, i.localize)(7991, null),
									icon: a.$oOb,
									f1: !1,
									menu: {
										id: w.$XX.NotebookDiffCellInputTitle,
										when: r.$zEc,
										order: 1,
									},
									precondition: r.$zEc,
									toggled: C.$Kj.equals(r.$AEc, !1),
								});
							}
							run(T, P) {
								const k = P?.cell;
								if (!k?.modified) return;
								const L = k.modified.uri,
									D = T.get(b.$XO),
									M = "diffEditor.ignoreTrimWhitespace",
									N = D.getValue(L, M);
								D.updateValue(L, M, !N);
							}
						},
					),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: "notebook.diff.cell.revertInput",
									title: $,
									icon: a.$nOb,
									f1: !1,
									menu: {
										id: w.$XX.NotebookDiffCellInputTitle,
										when: r.$zEc,
										order: 2,
									},
									precondition: r.$zEc,
								});
							}
							run(T, P) {
								if (!P) return;
								const k = P.cell.original,
									L = P.cell.modified;
								return !k || !L
									? void 0
									: T.get(t.$rzb).apply(
											[
												new t.$tzb(L.uri, {
													range: L.textModel.getFullModelRange(),
													text: k.textModel.getValue(),
												}),
											],
											{ quotableLabel: "Revert Notebook Cell Content Change" },
										);
							}
						},
					);
				class I extends w.$3X {
					constructor(P, k, L, D, M, N, A) {
						super({
							id: P,
							title: k,
							precondition: L,
							menu: [
								{ id: w.$XX.EditorTitle, group: "notebook", when: L, order: M },
							],
							toggled: D,
						}),
							(this.a = N),
							(this.b = A);
					}
					async run(P) {
						const k = P.get(E.$gj);
						if (this.a !== void 0) {
							const L = k.getValue("notebook.diff.ignoreOutputs");
							k.updateValue("notebook.diff.ignoreOutputs", !L);
						}
						if (this.b !== void 0) {
							const L = k.getValue("notebook.diff.ignoreMetadata");
							k.updateValue("notebook.diff.ignoreMetadata", !L);
						}
					}
				}
				(0, w.$4X)(
					class extends I {
						constructor() {
							super(
								"notebook.diff.showOutputs",
								(0, i.localize2)(8e3, "Show Outputs Differences"),
								C.$Kj.or(
									d.$TPb.isEqualTo(u.$kFc.ID),
									d.$TPb.isEqualTo(s.$JGc.ID),
								),
								C.$Kj.notEquals("config.notebook.diff.ignoreOutputs", !0),
								2,
								!0,
								void 0,
							);
						}
					},
				),
					(0, w.$4X)(
						class extends I {
							constructor() {
								super(
									"notebook.diff.showMetadata",
									(0, i.localize2)(8001, "Show Metadata Differences"),
									C.$Kj.or(
										d.$TPb.isEqualTo(u.$kFc.ID),
										d.$TPb.isEqualTo(s.$JGc.ID),
									),
									C.$Kj.notEquals("config.notebook.diff.ignoreMetadata", !0),
									1,
									void 0,
									!0,
								);
							}
						},
					),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: "notebook.diff.action.previous",
									title: (0, i.localize)(7992, null),
									icon: a.$sOb,
									f1: !1,
									keybinding: {
										primary: o.KeyMod.Shift | o.KeyMod.Alt | o.KeyCode.F3,
										weight: p.KeybindingWeight.WorkbenchContrib,
										when: d.$TPb.isEqualTo(u.$kFc.ID),
									},
									menu: {
										id: w.$XX.EditorTitle,
										group: "navigation",
										when: d.$TPb.isEqualTo(u.$kFc.ID),
									},
								});
							}
							run(T) {
								const P = T.get(h.$IY);
								if (P.activeEditorPane?.getId() !== f.$P6) return;
								P.activeEditorPane.getControl()?.previousChange();
							}
						},
					),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: "notebook.diff.action.next",
									title: (0, i.localize)(7993, null),
									icon: a.$tOb,
									f1: !1,
									keybinding: {
										primary: o.KeyMod.Alt | o.KeyCode.F3,
										weight: p.KeybindingWeight.WorkbenchContrib,
										when: d.$TPb.isEqualTo(u.$kFc.ID),
									},
									menu: {
										id: w.$XX.EditorTitle,
										group: "navigation",
										when: d.$TPb.isEqualTo(u.$kFc.ID),
									},
								});
							}
							run(T) {
								const P = T.get(h.$IY);
								if (P.activeEditorPane?.getId() !== f.$P6) return;
								P.activeEditorPane.getControl()?.nextChange();
							}
						},
					),
					c.$Io
						.as(n.$No.Configuration)
						.registerConfiguration({
							id: "notebook",
							order: 100,
							type: "object",
							properties: {
								"notebook.diff.ignoreMetadata": {
									type: "boolean",
									default: !1,
									markdownDescription: (0, i.localize)(7994, null),
								},
								"notebook.diff.ignoreOutputs": {
									type: "boolean",
									default: !1,
									markdownDescription: (0, i.localize)(7995, null),
								},
							},
						});
			},
		),
		define(
			de[4105],
			he([1, 0, 59, 856, 3, 66, 5, 360, 6, 44, 18, 8, 176, 128, 84]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pFc = void 0);
				let g = class {
					constructor(o, f, b, s) {
						(this.i = o),
							(this.j = s),
							(this.a = 1),
							(this.b = new w.$Zc()),
							(this.c = new Map()),
							(this.d = new Map()),
							(this.f = new m.$re()),
							(this.g = new m.$re()),
							(this.onDidAddNotebookEditor = this.f.event),
							(this.onDidRemoveNotebookEditor = this.g.event),
							(this.h = new Map());
						const l = ($) => {
							const { id: v } = $,
								S = [];
							S.push(
								$.onDidCloseEditor((I) => {
									const T = this.h.get($.id);
									if (!T) return;
									(I.editor instanceof d.$TIb
										? [I.editor]
										: (0, d.$UIb)(I.editor)
											? I.editor.editorInputs
											: []
									).forEach((k) => {
										const L = T.get(k.resource),
											D = L?.findIndex((N) => N.editorType === k.typeId);
										if (!L || D === void 0 || D === -1) return;
										const M = L.splice(D, 1)[0];
										(M.token = void 0), this.k(M.widget), (M.widget = void 0);
									});
								}),
							),
								S.push(
									$.onWillMoveEditor((I) => {
										(0, d.$VIb)(I.editor) &&
											this.l(I.editor, I.groupId, I.target),
											(0, d.$UIb)(I.editor) &&
												I.editor.editorInputs.forEach((T) => {
													this.l(T, I.groupId, I.target);
												});
									}),
								),
								this.d.set(v, S);
						};
						this.b.add(o.onDidAddGroup(l)),
							o.whenReady.then(() => o.groups.forEach(l)),
							this.b.add(
								o.onDidRemoveGroup(($) => {
									const v = this.d.get($.id);
									v && (v.forEach((I) => I.dispose()), this.d.delete($.id));
									const S = this.h.get($.id);
									if ((this.h.delete($.id), S))
										for (const I of S.values())
											for (const T of I) (T.token = void 0), this.k(T.widget);
								}),
							);
						const y = h.$lJb.bindTo(b);
						this.b.add(
							f.onDidEditorsChange(($) => {
								$.event.kind === r.GroupModelChangeKind.EDITOR_OPEN && !y.get()
									? f.editors.find((v) => v.editorId === "interactive") &&
										y.set(!0)
									: $.event.kind === r.GroupModelChangeKind.EDITOR_CLOSE &&
										y.get() &&
										(f.editors.find((v) => v.editorId === "interactive") ||
											y.set(!1));
							}),
						);
					}
					dispose() {
						this.b.dispose(),
							this.f.dispose(),
							this.g.dispose(),
							this.d.forEach((o) => {
								o.forEach((f) => f.dispose());
							}),
							this.d.clear();
					}
					k(o) {
						o.onWillHide();
						const f = o.getDomNode();
						o.dispose(), f.remove();
					}
					l(o, f, b) {
						const s = this.i.getPart(f),
							l = this.i.getPart(b);
						if (s.windowId !== l.windowId) return;
						const y = this.h
							.get(b)
							?.get(o.resource)
							?.findIndex((T) => T.editorType === o.typeId);
						if (y !== void 0 && y !== -1) return;
						const $ = this.h
							.get(f)
							?.get(o.resource)
							?.find((T) => T.editorType === o.typeId);
						if (!$) throw new Error("no widget at source group");
						const v = this.h.get(f)?.get(o.resource);
						if (v) {
							const T = v.findIndex((P) => P.editorType === o.typeId);
							T !== -1 && v.splice(T, 1);
						}
						let S = this.h.get(b);
						S || ((S = new t.$Gc()), this.h.set(b, S));
						const I = S.get(o.resource) ?? [];
						I?.push($), S.set(o.resource, I);
					}
					retrieveExistingWidgetFromURI(o) {
						for (const f of this.h.values()) {
							const b = f.get(o);
							if (b && b.length > 0) return this.n(b[0].token, b[0]);
						}
					}
					retrieveAllExistingWidgets() {
						const o = [];
						for (const f of this.h.values())
							for (const b of f.values())
								for (const s of b) o.push(this.n(s.token, s));
						return o;
					}
					retrieveWidget(o, f, b, s, l, y) {
						let $ = this.h
							.get(f)
							?.get(b.resource)
							?.find((v) => v.editorType === b.typeId);
						if ($) $.token = this.a++;
						else {
							const v = o.get(a.$6j),
								S = o.get(n.$bO),
								I = this.m(v, S, s, y, l),
								T = this.a++;
							$ = { widget: I, editorType: b.typeId, token: T };
							let P = this.h.get(f);
							P || ((P = new t.$Gc()), this.h.set(f, P));
							const k = P.get(b.resource) ?? [];
							k.push($), P.set(b.resource, k);
						}
						return this.n($.token, $);
					}
					m(o, f, b, s, l) {
						const y = this.j.createChild(new c.$Ki([a.$6j, o], [n.$bO, f])),
							$ = b ?? (0, i.$14b)();
						return y.createInstance(
							i.$24b,
							{ ...$, codeWindow: s ?? $.codeWindow },
							l,
						);
					}
					n(o, f) {
						return {
							get value() {
								return f.token === o ? f.widget : void 0;
							},
						};
					}
					addNotebookEditor(o) {
						this.c.set(o.getId(), o), this.f.fire(o);
					}
					removeNotebookEditor(o) {
						this.c.has(o.getId()) && (this.c.delete(o.getId()), this.g.fire(o));
					}
					getNotebookEditor(o) {
						return this.c.get(o);
					}
					getNotebookEditorByCellEditorId(o) {
						for (const f of this.c.values())
							if (f.codeEditors.some((b) => b[1].getId() === o)) return f;
					}
					getCellEditorsBeforeCellEditorId(o) {
						for (const f of this.c.values())
							if (f.codeEditors.some((b) => b[1].getId() === o)) {
								const b = f.codeEditors.findIndex((l) => l[1].getId() === o),
									s = f.codeEditors[b][0];
								return f.codeEditors.slice(0, b).map((l) => l[1]);
							}
					}
					listNotebookEditors() {
						return [...this.c].map((o) => o[1]);
					}
				};
				(e.$pFc = g),
					(e.$pFc = g =
						Ne([j(0, E.$EY), j(1, u.$IY), j(2, a.$6j), j(3, C.$Li)], g));
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
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
		define(
			de[4107],
			he([
				1, 0, 139, 15, 14, 274, 27, 12, 26, 2900, 4, 599, 11, 31, 10, 57, 5, 39,
				43, 62, 679, 392, 348, 63, 21, 32, 402, 1358, 153, 1013, 66, 18, 53,
				1309, 131,
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
			) {
				"use strict";
				var R;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$QMc = e.$PMc = e.$OMc = void 0);
				let O = class extends r.$NMc {
					static {
						R = this;
					}
					static {
						this.M = 5;
					}
					static {
						this.N = 0.8;
					}
					static {
						this.O = 200;
					}
					get J() {
						return this.S.activeTextEditorControl;
					}
					get defaultFilterValue() {
						if (this.cb.preserveInput)
							return y.DefaultQuickAccessFilterValue.LAST;
					}
					constructor(F, x, H, q, V, G, K, J, W, X, Y, ie, ne, ee) {
						super(
							{
								showAlias: !d.Language.isDefaultVariant(),
								noResultsPick: () => ({
									label: (0, u.localize)(8686, null),
									commandId: "",
								}),
							},
							q,
							V,
							G,
							K,
							J,
						),
							(this.S = F),
							(this.U = x),
							(this.W = H),
							(this.X = W),
							(this.Y = X),
							(this.Z = Y),
							(this.$ = ie),
							(this.ab = ne),
							(this.bb = ee),
							(this.P = (0, i.$Dh)(
								this.W.whenInstalledExtensionsRegistered(),
								800,
							)),
							(this.Q = !1),
							this.D(W.onDidChangeConfiguration((_) => this.db(_))),
							this.db();
					}
					get cb() {
						const F = this.X.getValue().workbench.commandPalette;
						return {
							preserveInput: F.preserveInput,
							experimental: F.experimental,
						};
					}
					db(F) {
						if (
							F &&
							!F.affectsConfiguration("workbench.commandPalette.experimental")
						)
							return;
						const x = this.cb,
							H =
								x.experimental.suggestCommands &&
								this.$.commandPaletteSuggestedCommandIds?.length
									? new Set(this.$.commandPaletteSuggestedCommandIds)
									: void 0;
						(this.f.suggestedCommandIds = H),
							(this.Q = x.experimental.enableNaturalLanguageSearch);
					}
					async G(F) {
						return (
							await this.P,
							F.isCancellationRequested
								? []
								: [...this.L(), ...this.ib()].map((x) => ({
										...x,
										buttons: [
											{
												iconClass: m.ThemeIcon.asClassName(w.$ak.gear),
												tooltip: (0, u.localize)(8687, null),
											},
										],
										trigger: () => (
											this.Z.openGlobalKeybindingSettings(!1, {
												query: (0, N.$rvc)(x.commandId, x.commandWhen),
											}),
											l.TriggerAction.CLOSE_PICKER
										),
									}))
						);
					}
					H(F, x) {
						return !(
							!this.Q ||
							x.isCancellationRequested ||
							F === "" ||
							!this.ab.isEnabled()
						);
					}
					async I(F, x, H, q) {
						if (!this.H(H, q)) return [];
						let V;
						try {
							await (0, i.$Nh)(R.O, q), (V = await this.hb(F, x, H, q));
						} catch {
							return [];
						}
						(x.length || V.length) && V.push({ type: "separator" });
						const G = this.bb.getDefaultAgent(P.ChatAgentLocation.Panel);
						return (
							G &&
								V.push({
									label: (0, u.localize)(8688, null, G.fullName, H),
									commandId:
										this.cb.experimental.askChatLocation === "quickChat"
											? T.$o9b
											: I.$4Yb,
									args: [H],
								}),
							V
						);
					}
					async hb(F, x, H, q) {
						const V = await this.ab.getRelatedInformation(
							H,
							[k.RelatedInformationType.CommandInformation],
							q,
						);
						V.sort((J, W) => W.weight - J.weight);
						const G = new Set(x.map((J) => J.commandId)),
							K = new Array();
						for (const J of V) {
							if (J.weight < R.N || K.length === R.M) break;
							const W = F.find(
								(X) => X.commandId === J.command && !G.has(X.commandId),
							);
							W && K.push(W);
						}
						return K;
					}
					ib() {
						const F = [],
							x =
								this.S.activeEditorPane?.scopedContextKeyService ||
								this.Y.activeGroup.scopedContextKeyService,
							q = this.U.getMenuActions(h.$XX.CommandPalette, x)
								.reduce((V, [, G]) => [...V, ...G], [])
								.filter((V) => V instanceof h.$2X && V.enabled);
						for (const V of q) {
							let G =
								(typeof V.item.title == "string"
									? V.item.title
									: V.item.title.value) || V.item.id;
							const K =
								typeof V.item.category == "string"
									? V.item.category
									: V.item.category?.value;
							K && (G = (0, u.localize)(8689, null, K, G));
							const J =
									typeof V.item.title != "string"
										? V.item.title.original
										: void 0,
								W =
									K && V.item.category && typeof V.item.category != "string"
										? V.item.category.original
										: void 0,
								X = J && K ? (W ? `${W}: ${J}` : `${K}: ${J}`) : J,
								Y = V.item.metadata?.description,
								ie =
									Y === void 0 || (0, a.$gk)(Y) ? Y : { value: Y, original: Y };
							F.push({
								commandId: V.item.id,
								commandWhen: V.item.precondition?.serialize(),
								commandAlias: X,
								label: (0, E.$$k)(G),
								commandDescription: ie,
							});
						}
						return F;
					}
				};
				(e.$OMc = O),
					(e.$OMc =
						O =
						R =
							Ne(
								[
									j(0, D.$IY),
									j(1, h.$YX),
									j(2, M.$q2),
									j(3, p.$Li),
									j(4, o.$uZ),
									j(5, c.$ek),
									j(6, S.$km),
									j(7, g.$GO),
									j(8, n.$gj),
									j(9, L.$EY),
									j(10, A.$7Z),
									j(11, b.$Bk),
									j(12, k.$97),
									j(13, P.$c3),
								],
								O,
							));
				class B extends h.$3X {
					static {
						this.ID = "workbench.action.showCommands";
					}
					constructor() {
						super({
							id: B.ID,
							title: (0, u.localize2)(8693, "Show All Commands"),
							keybinding: {
								weight: f.KeybindingWeight.WorkbenchContrib,
								when: void 0,
								primary: t.$Ofb
									? void 0
									: C.KeyMod.CtrlCmd | C.KeyMod.Shift | C.KeyCode.KeyP,
								secondary: [C.KeyCode.F1],
							},
							f1: !0,
						});
					}
					async run(F) {
						F.get($.$DJ).quickAccess.show(O.PREFIX);
					}
				}
				e.$PMc = B;
				class U extends h.$3X {
					constructor() {
						super({
							id: "workbench.action.clearCommandHistory",
							title: (0, u.localize2)(8694, "Clear Command History"),
							f1: !0,
						});
					}
					async run(F) {
						const x = F.get(n.$gj),
							H = F.get(v.$lq),
							q = F.get(g.$GO);
						if (s.$Q0b.getConfiguredCommandHistoryLength(x) > 0) {
							const { confirmed: G } = await q.confirm({
								type: "warning",
								message: (0, u.localize)(8690, null),
								detail: (0, u.localize)(8691, null),
								primaryButton: (0, u.localize)(8692, null),
							});
							if (!G) return;
							s.$Q0b.clearHistory(x, H);
						}
					}
				}
				e.$QMc = U;
			},
		),
		define(
			de[4108],
			he([1, 0, 4, 348, 30, 2782, 3836, 4107, 11, 27, 8, 473, 43, 71]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				const n = w.$Io.as(i.$1r.Quickaccess);
				n.registerQuickAccessProvider({
					ctor: E.$JMc,
					prefix: E.$JMc.PREFIX,
					placeholder: (0, t.localize)(8695, null, E.$JMc.PREFIX),
					helpEntries: [
						{
							description: (0, t.localize)(8696, null),
							commandCenterOrder: 70,
							commandCenterLabel: (0, t.localize)(8697, null),
						},
					],
				}),
					n.registerQuickAccessProvider({
						ctor: C.$KMc,
						prefix: C.$KMc.PREFIX,
						contextKey: "inViewsPicker",
						placeholder: (0, t.localize)(8698, null),
						helpEntries: [
							{
								description: (0, t.localize)(8699, null),
								commandId: C.$LMc.ID,
							},
						],
					}),
					n.registerQuickAccessProvider({
						ctor: d.$OMc,
						prefix: d.$OMc.PREFIX,
						contextKey: "inCommandsPicker",
						placeholder: (0, t.localize)(8700, null),
						helpEntries: [
							{
								description: (0, t.localize)(8701, null),
								commandId: d.$PMc.ID,
								commandCenterOrder: 20,
							},
						],
					}),
					m.$ZX.appendMenuItem(m.$XX.MenubarViewMenu, {
						group: "1_open",
						command: { id: d.$PMc.ID, title: (0, t.localize)(8702, null) },
						order: 1,
					}),
					m.$ZX.appendMenuItem(m.$XX.MenubarHelpMenu, {
						group: "1_welcome",
						command: { id: d.$PMc.ID, title: (0, t.localize)(8703, null) },
						order: 2,
					}),
					m.$ZX.appendMenuItem(m.$XX.MenubarViewMenu, {
						group: "1_open",
						command: { id: C.$LMc.ID, title: (0, t.localize)(8704, null) },
						order: 2,
					}),
					m.$ZX.appendMenuItem(m.$XX.MenubarGoMenu, {
						group: "5_infile_nav",
						command: {
							id: "workbench.action.gotoLine",
							title: (0, t.localize)(8705, null),
						},
						order: 1,
					}),
					m.$ZX.appendMenuItem(m.$XX.GlobalActivity, {
						group: "1_command",
						command: { id: d.$PMc.ID, title: (0, t.localize)(8706, null) },
						order: 1,
					}),
					m.$ZX.appendMenuItem(m.$XX.EditorContext, {
						group: "z_commands",
						when: c.EditorContextKeys.editorSimpleInput.toNegated(),
						command: { id: d.$PMc.ID, title: (0, t.localize)(8707, null) },
						order: 1,
					}),
					(0, m.$4X)(d.$QMc),
					(0, m.$4X)(d.$PMc),
					(0, m.$4X)(C.$LMc),
					(0, m.$4X)(C.$MMc);
				const p = u.$Kj.and(a.$g9b, u.$Kj.has("inViewsPicker")),
					o = C.$MMc.KEYBINDING,
					f = "workbench.action.quickOpenNavigateNextInViewPicker";
				h.$TX.registerCommandAndKeybindingRule({
					id: f,
					weight: h.KeybindingWeight.WorkbenchContrib + 50,
					handler: (0, a.$j9b)(f, !0),
					when: p,
					primary: o.primary,
					linux: o.linux,
					mac: o.mac,
				});
				const b = "workbench.action.quickOpenNavigatePreviousInViewPicker";
				h.$TX.registerCommandAndKeybindingRule({
					id: b,
					weight: h.KeybindingWeight.WorkbenchContrib + 50,
					handler: (0, a.$j9b)(b, !1),
					when: p,
					primary: o.primary | r.KeyMod.Shift,
					linux: o.linux,
					mac: { primary: o.mac.primary | r.KeyMod.Shift },
				});
			},
		),
		define(
			de[721],
			he([
				1, 0, 63, 392, 322, 361, 5, 568, 186, 25, 222, 165, 9, 19, 78, 22, 3,
				73, 252, 67, 61, 4, 227, 10, 44, 18, 17, 15, 3132, 245, 23, 170, 59,
				827, 348, 473, 1313, 42, 98, 6, 14, 26, 68, 274, 149, 39, 30, 1358, 208,
				34, 399, 467, 558, 993, 1750, 271, 204, 69, 1746, 287, 332, 2487,
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
			) {
				"use strict";
				var oe;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$S9b = void 0);
				const ae = (0, l.localize)(9125, null),
					pe = (0, l.localize)(9126, null);
				function $e(ue) {
					const fe = ue;
					return (
						!!fe?.range &&
						!!fe.resource &&
						!fe.semSearchData &&
						!fe.cppReportEvent
					);
				}
				let ye = class extends i.$GLb {
					static {
						oe = this;
					}
					static {
						this.PREFIX = "";
					}
					static {
						this.j = { label: (0, l.localize)(9127, null), isNoResults: !0 };
					}
					static {
						this.m = 512;
					}
					static {
						this.n = 200;
					}
					static {
						this.q = 200;
					}
					get scorerCache() {
						return this.s.scorerCache;
					}
					get defaultFilterValue() {
						if (this.eb.preserveInput)
							return A.DefaultQuickAccessFilterValue.LAST;
					}
					constructor(
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
						Ke,
						Je,
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
					) {
						super(oe.PREFIX, {
							canAcceptInBackground: !0,
							noResultsPick: oe.j,
						}),
							(this.t = fe),
							(this.u = me),
							(this.w = ve),
							(this.y = ge),
							(this.z = be),
							(this.C = Ce),
							(this.F = Le),
							(this.G = Fe),
							(this.H = Oe),
							(this.I = xe),
							(this.J = He),
							(this.L = Ke),
							(this.M = Je),
							(this.N = Te),
							(this.O = Ee),
							(this.P = Ie),
							(this.Q = Be),
							(this.R = Se),
							(this.S = ke),
							(this.U = Ue),
							(this.W = qe),
							(this.X = Ae),
							(this.Y = Me),
							(this.Z = De),
							(this.$ = Re),
							(this.ab = je),
							(this.bb = Ve),
							(this.cb = Ze),
							(this.db = et),
							(this.s = this.D(
								new (class extends p.$1c {
									constructor(rt, ft) {
										super(),
											(this.c = rt),
											(this.f = ft),
											(this.picker = void 0),
											(this.editorViewState = this.D(
												this.f.createInstance(R.$k9b),
											)),
											(this.scorerCache = Object.create(null)),
											(this.fileQueryCache = void 0),
											(this.lastOriginalFilter = void 0),
											(this.lastFilter = void 0),
											(this.lastRange = void 0),
											(this.lastGlobalPicks = void 0),
											(this.isQuickNavigating = void 0);
									}
									set(rt) {
										(this.picker = rt),
											z.Event.once(rt.onDispose)(() => {
												rt === this.picker && (this.picker = void 0);
											});
										const ft = !!rt.quickNavigate;
										ft ||
											((this.fileQueryCache = this.c.nb()),
											(this.scorerCache = Object.create(null))),
											(this.isQuickNavigating = ft),
											(this.lastOriginalFilter = void 0),
											(this.lastFilter = void 0),
											(this.lastRange = void 0),
											(this.lastGlobalPicks = void 0),
											this.editorViewState.reset();
									}
								})(this, this.t),
							)),
							(this.jb = new t.$BJ({ skipDescription: !0 })),
							(this.lb = this.D(new T.$Kh(oe.n))),
							(this.mb = this.t.createInstance(E.$M8)),
							(this.ub = new V.$Y(() => K.$Io.as(A.$1r.Quickaccess))),
							(this.wb = this.D(this.t.createInstance(N.$Ifc))),
							(this.yb = this.t.createInstance(O.$n9b)),
							(this.Nb = []);
					}
					get eb() {
						const fe = this.J.getValue().workbench?.editor,
							me = this.J.getValue().search,
							ve = this.J.getValue().workbench.quickOpen;
						return {
							openEditorPinned:
								!fe?.enablePreviewFromQuickOpen || !fe?.enablePreview,
							openSideBySideDirection: fe?.openSideBySideDirection,
							includeSymbols: me?.quickOpen.includeSymbols,
							includeHistory: me?.quickOpen.includeHistory,
							historyFilterSortOrder: me?.quickOpen.history.filterSortOrder,
							preserveInput: ve.preserveInput,
						};
					}
					provide(fe, me, ve) {
						const ge = new p.$Zc();
						this.s.set(fe),
							ge.add(
								fe.onDidAccept(() => {
									const Ce = [],
										Le = new Map();
									for (const He of fe.items) {
										if (He.type === "separator") {
											Ce.push({
												type: "separator",
												separatorLabel: He.label ?? "",
											});
											continue;
										}
										He.resource &&
											(Ce.push({
												type: "resource",
												resource: He.resource,
												range: He.semSearchData
													? He.semSearchData.highlightRange
													: void 0,
											}),
											Le.set(He, Ce.length - 1));
									}
									const Fe = [];
									for (const He of fe.selectedItems) {
										const Ke = Le.get(He);
										Ke !== void 0 && Fe.push(Ke);
									}
									const Oe = Fe.reduce((He, Ke) => Math.max(He, Ke), -1),
										xe = Ce.slice(0, Oe + 16);
									this.db.recordAnythingQuickAccessSelectionEvent(
										fe.value,
										xe,
										Fe,
									);
								}),
							);
						const be = ge.add(new p.$2c());
						return (
							ge.add(
								fe.onDidChangeActive(() => {
									be.value = void 0;
									const [Ce] = fe.activeItems;
									$e(Ce) && (be.value = this.fb(Ce));
								}),
							),
							ge.add(
								z.Event.once(fe.onDidHide)(({ reason: Ce }) => {
									Ce === t.QuickInputHideReason.Gesture &&
										this.s.editorViewState.restore();
								}),
							),
							ge.add(super.provide(fe, me, ve)),
							ge
						);
					}
					fb(fe) {
						const me = this.L.activeEditor;
						if (!this.P.extUri.isEqual(fe.resource, me?.resource))
							return p.$1c.None;
						const ve = this.L.activeTextEditorControl;
						return ve
							? (this.s.editorViewState.set(),
								ve.revealRangeInCenter(fe.range.selection, U.ScrollType.Smooth),
								this.addDecorations(ve, fe.range.decoration),
								(0, p.$Yc)(() => this.clearDecorations(ve)))
							: p.$1c.None;
					}
					g(fe, me, ve, ge) {
						const be = (0, d.$Q7)(fe, [O.$n9b.PREFIX]);
						let Ce;
						if (
							(be ? (Ce = be.filter) : (Ce = fe),
							(this.s.lastRange = be?.range),
							fe !== this.s.lastOriginalFilter && Ce === this.s.lastFilter)
						)
							return null;
						const Le = !!this.s.lastOriginalFilter;
						(this.s.lastOriginalFilter = fe), (this.s.lastFilter = Ce);
						const Fe = this.s.picker?.items,
							Oe = this.s.picker?.activeItems[0];
						if (Fe && Oe) {
							const xe = $e(Oe),
								He = Oe === oe.j && Ce.indexOf(O.$n9b.PREFIX) >= 0;
							!xe &&
								!He &&
								(this.s.lastGlobalPicks = { items: Fe, active: Oe });
						}
						return this.hb(Ce, { ...ge, enableEditorSymbolSearch: Le }, me, ve);
					}
					initializeCaches() {
						(this.s.fileQueryCache = this.nb()),
							(this.s.scorerCache = Object.create(null));
					}
					doGetPicksPublic(fe, me, ve, ge) {
						return this.hb(fe, me, ve, ge);
					}
					hb(fe, me, ve, ge) {
						const be = me?.excludeCursorIgnore ?? !1,
							Ce = (0, w.$hs)(fe),
							Le = (Ke) =>
								Ke.filter(
									(Je) =>
										!(
											"resource" in Je &&
											Je.resource &&
											this.ab.shouldIgnoreUri(Je.resource)
										),
								);
						let Fe = [];
						if (!me.excludeSemanticSearch) {
							const { fast: Ke, slow: Je } = this.Gb(Ce, ge);
							(Fe = Ke),
								Je.then((Te) => {
									if (Te.length > 0 && !ge.isCancellationRequested) {
										const Ee = [{ type: "separator", label: pe }, ...Te];
										this.Ob(Ee, !0);
									}
								}).catch((Te) => {});
						}
						if (me.enableEditorSymbolSearch) {
							const Ke = this.zb(Ce, ve, ge);
							if (Ke) return Ke;
						}
						const Oe = this.s.picker?.activeItems[0];
						if ($e(Oe) && this.s.lastGlobalPicks) return this.s.lastGlobalPicks;
						const xe = be ? Le(this.kb(Ce)) : this.kb(Ce);
						let He = new Array();
						if (me.additionPicks)
							for (const Ke of me.additionPicks) {
								if (Ke.type === "separator") {
									He.push(Ke);
									continue;
								}
								if (!Ce.original) {
									(Ke.highlights = void 0), He.push(Ke);
									continue;
								}
								const {
									score: Je,
									labelMatch: Te,
									descriptionMatch: Ee,
								} = (0, w.$fs)(Ke, Ce, !0, t.$CJ, this.s.scorerCache);
								Je &&
									((Ke.highlights = { label: Te, description: Ee }),
									He.push(Ke));
							}
						return (
							this.s.isQuickNavigating
								? (He.length > 0 &&
										He.push({
											type: "separator",
											label: (0, l.localize)(9128, null),
										}),
									(He = xe))
								: (me.includeHelp && He.push(...this.vb(Ce, ge, me)),
									xe.length !== 0 &&
										(He.push({
											type: "separator",
											label: (0, l.localize)(9129, null),
										}),
										He.push(...xe))),
							be &&
								(He = He.filter(
									(Ke) =>
										Ke.type === "separator" ||
										!("resource" in Ke) ||
										!Ke.resource ||
										!this.ab.shouldIgnoreUri(Ke.resource),
								)),
							{
								picks: me.filter ? He.filter((Ke) => me.filter?.(Ke)) : He,
								additionalPicks: (async () => {
									const Ke = new M.$Gc();
									for (const Be of xe) Be.resource && Ke.set(Be.resource, !0);
									let { highScoringPicks: Je, lowScoringPicks: Te } =
										await this.ib(
											Ce,
											Ke,
											this.eb.includeSymbols,
											me.excludeNotepads ?? !1,
											ge,
										);
									if (
										(be && ((Je = Le(Je)), (Te = Le(Te))),
										me.filter &&
											((Je = Je.filter(me.filter)),
											(Te = Te.filter(me.filter))),
										ge.isCancellationRequested)
									)
										return [];
									let Ee = [];
									const Ie = this.eb.includeSymbols
										? (0, l.localize)(9130, null)
										: (0, l.localize)(9131, null);
									return (
										me.excludeSemanticSearch
											? ((Ee = [...Je, ...Te]),
												(Ee =
													Ee.length > 0
														? [{ type: "separator", label: Ie }, ...Ee]
														: []))
											: (Je.length > 0 &&
													(Ee = [
														...Ee,
														{ type: "separator", label: Ie },
														...Je,
													]),
												Fe.length > 0
													? (Ee = [
															...Ee,
															{ type: "separator", label: pe },
															...Fe,
														])
													: Te.length > 0 &&
														(Ee = [
															...Ee,
															{ type: "separator", label: ae },
															...Te,
														])),
										Ee
									);
								})(),
								mergeDelay: oe.q,
							}
						);
					}
					async ib(fe, me, ve, ge, be) {
						const [Ce, Le, Fe] = await Promise.all([
							this.getFilePicks(fe, me, be),
							this.xb(fe, ve, be),
							ge ? [] : this.Db(fe, be),
						]);
						if (be.isCancellationRequested)
							return { highScoringPicks: [], lowScoringPicks: [] };
						const Oe = [...Ce, ...Le, ...Fe];
						Oe.sort((Se, ke) =>
							(0, w.$gs)(Se, ke, fe, !0, t.$CJ, this.s.scorerCache),
						);
						const xe = _.$I9b.HIGH_SCORING_THRESHOLD,
							He = _.$I9b.HIGH_SCORING_CAP_ITEMS,
							Ke = [],
							Je = [];
						for (const Se of Oe) {
							const {
									score: ke,
									labelMatch: Ue,
									descriptionMatch: qe,
								} = (0, w.$fs)(Se, fe, !0, t.$CJ, this.s.scorerCache),
								Ae = { ...Se, highlights: { label: Ue, description: qe } };
							if (
								(ke >= xe && Ke.length < He ? Ke.push(Ae) : Je.push(Ae),
								Ke.length + Je.length >= oe.m)
							)
								break;
						}
						const Te = oe.m,
							Ee = Math.min(Ke.length, Te),
							Ie = Math.min(Je.length, Te - Ee);
						return {
							highScoringPicks: Ke.filter((Se) => {
								const ke = [
									...(Se.highlights?.label ?? []),
									...(Se.highlights?.description ?? []),
								];
								return (fe.values?.length ?? 1) <= 1
									? Se
									: ke.reduce((qe, Ae) => qe + (Ae.end - Ae.start), 0) /
											ke.length >
											3;
							}).slice(0, Ee),
							lowScoringPicks: Je.slice(0, Ie),
						};
					}
					kb(fe) {
						const me = this.eb;
						if (!fe.normalized)
							return this.M.getHistory().map((be) => this.Bb(be, me));
						if (!this.eb.includeHistory) return [];
						const ve = fe.containsPathSeparator ? t.$CJ : this.jb,
							ge = [];
						for (const be of this.M.getHistory()) {
							const Ce = be.resource;
							if (
								!Ce ||
								(!this.C.hasProvider(Ce) &&
									Ce.scheme !== L.Schemas.untitled &&
									Ce.scheme !== L.Schemas.vscodeTerminal &&
									Ce.scheme !== L.Schemas.aiChat)
							)
								continue;
							const Le = this.Bb(be, me),
								{
									score: Fe,
									labelMatch: Oe,
									descriptionMatch: xe,
								} = (0, w.$fs)(Le, fe, !1, ve, this.s.scorerCache);
							Fe &&
								((Le.highlights = { label: Oe, description: xe }), ge.push(Le));
						}
						return this.eb.historyFilterSortOrder === "recency"
							? ge
							: ge.sort((be, Ce) =>
									(0, w.$gs)(be, Ce, fe, !1, ve, this.s.scorerCache),
								);
					}
					nb() {
						return new P.$d9b(
							(fe) =>
								this.mb.file(
									this.w.getWorkspace().folders,
									this.rb({ cacheKey: fe }),
								),
							(fe) => this.u.fileSearch(fe),
							(fe) => this.u.clearCache(fe),
							this.s.fileQueryCache,
						).load();
					}
					async getFilePicks(fe, me, ve) {
						if (!fe.normalized) return [];
						const ge = await this.sb(fe, ve);
						if (ve.isCancellationRequested) return [];
						let be;
						if (ge) {
							if (me.has(ge)) return [];
							const Le = this.Bb(ge, this.eb);
							return (
								(Le.highlights = {
									label: [{ start: 0, end: Le.label.length }],
									description: Le.description
										? [{ start: 0, end: Le.description.length }]
										: void 0,
								}),
								[Le]
							);
						}
						if (
							(this.s.fileQueryCache?.isLoaded
								? (be = await this.ob(fe, ve))
								: (be = await this.lb.trigger(async () =>
										ve.isCancellationRequested ? [] : this.ob(fe, ve),
									)),
							ve.isCancellationRequested)
						)
							return [];
						const Ce = this.eb;
						return be.filter((Le) => !me.has(Le)).map((Le) => this.Bb(Le, Ce));
					}
					async ob(fe, me) {
						const [ve, ge] = await Promise.all([
							this.pb(fe, me),
							this.tb(fe, me),
						]);
						if (me.isCancellationRequested) return [];
						if (!ge) return ve;
						const be = new M.$Gc();
						for (const Ce of ge) be.set(Ce, !0);
						return [...ve.filter((Ce) => !be.has(Ce)), ...ge];
					}
					async pb(fe, me) {
						let ve = "";
						fe.values && fe.values.length > 1
							? (ve = fe.values[0].original)
							: (ve = fe.original);
						const ge = await this.qb(ve, me);
						if (me.isCancellationRequested) return [];
						if (ge.limitHit && fe.values && fe.values.length > 1) {
							const be = await this.qb(fe.original, me);
							if (me.isCancellationRequested) return [];
							const Ce = new M.$Gc();
							for (const Le of ge.results) Ce.set(Le.resource, !0);
							for (const Le of be.results)
								Ce.has(Le.resource) || ge.results.push(Le);
						}
						return ge.results.map((be) => be.resource);
					}
					qb(fe, me) {
						const ve = Date.now();
						return this.u
							.fileSearch(
								this.mb.file(
									this.w.getWorkspace().folders,
									this.rb({
										filePattern: fe,
										cacheKey: this.s.fileQueryCache?.cacheKey,
										maxResults: oe.m,
									}),
								),
								me,
							)
							.finally(() => {
								this.U.trace(`QuickAccess fileSearch ${Date.now() - ve}ms`);
							});
					}
					rb(fe) {
						return {
							_reason: "openFileHandler",
							extraFileResources: this.t.invokeFunction(d.$P7),
							filePattern: fe.filePattern || "",
							cacheKey: fe.cacheKey,
							maxResults: fe.maxResults || 0,
							sortByScore: !0,
						};
					}
					async sb(fe, me) {
						if (!fe.containsPathSeparator) return;
						const ve = await this.y.userHome(),
							ge = (0, u.$zO)(
								fe.original,
								ve.scheme === L.Schemas.file ? ve.fsPath : ve.path,
							);
						if (me.isCancellationRequested) return;
						const be = (await this.y.path).isAbsolute(ge);
						if (!me.isCancellationRequested && be) {
							const Ce = (0, c.$xh)(
								await this.y.fileURI(ge),
								this.z.remoteAuthority,
								this.y.defaultUriScheme,
							);
							if (me.isCancellationRequested) return;
							try {
								if ((await this.C.stat(Ce)).isFile) return Ce;
							} catch {}
						}
					}
					async tb(fe, me) {
						if (!fe.containsPathSeparator) return;
						if (!(await this.y.path).isAbsolute(fe.original)) {
							const ge = [];
							for (const be of this.w.getWorkspace().folders) {
								if (me.isCancellationRequested) break;
								const Ce = (0, c.$xh)(
									be.toResource(fe.original),
									this.z.remoteAuthority,
									this.y.defaultUriScheme,
								);
								try {
									(await this.C.stat(Ce)).isFile && ge.push(Ce);
								} catch {}
							}
							return ge;
						}
					}
					vb(fe, me, ve) {
						if (fe.normalized) return [];
						const ge = this.ub.value
							.getQuickAccessProviders()
							.filter((be) =>
								be.helpEntries.some((Ce) => Ce.commandCenterOrder !== void 0),
							)
							.flatMap((be) =>
								be.helpEntries
									.filter((Ce) => Ce.commandCenterOrder !== void 0)
									.map((Ce) => {
										const Le = {
												...ve,
												includeHelp:
													be.prefix === oe.PREFIX ? !1 : ve?.includeHelp,
											},
											Fe = Ce.commandCenterLabel ?? Ce.description;
										return {
											label: Fe,
											description: Ce.prefix ?? be.prefix,
											commandCenterOrder: Ce.commandCenterOrder,
											keybinding: Ce.commandId
												? this.R.lookupKeybinding(Ce.commandId)
												: void 0,
											ariaLabel: (0, l.localize)(
												9132,
												null,
												Fe,
												Ce.description,
											),
											accept: () => {
												this.Q.quickAccess.show(be.prefix, {
													preserveValue: !0,
													providerOptions: Le,
												});
											},
										};
									}),
							);
						return (
							this.S.enabled &&
								ge.push({
									label: (0, l.localize)(9133, null),
									commandCenterOrder: 30,
									keybinding: this.R.lookupKeybinding(J.$o9b),
									accept: () => this.S.toggle(),
								}),
							ge.sort((be, Ce) => be.commandCenterOrder - Ce.commandCenterOrder)
						);
					}
					async xb(fe, me, ve) {
						return !fe.normalized || !me || this.s.lastRange
							? []
							: this.wb.getSymbolPicks(
									fe.original,
									{ skipLocal: !0, skipSorting: !0, delay: oe.n },
									ve,
								);
					}
					zb(fe, me, ve) {
						const ge = fe.original.split(O.$n9b.PREFIX),
							be = ge.length > 1 ? ge[ge.length - 1].trim() : void 0;
						if (typeof be != "string") return null;
						const Ce = this.s.lastGlobalPicks?.active;
						if (!Ce) return null;
						const Le = Ce.resource;
						return !Le ||
							(!this.C.hasProvider(Le) && Le.scheme !== L.Schemas.untitled) ||
							((Ce.label.includes(O.$n9b.PREFIX) ||
								Ce.description?.includes(O.$n9b.PREFIX)) &&
								ge.length < 3)
							? null
							: this.Ab(Ce, Le, be, me, ve);
					}
					async Ab(fe, me, ve, ge, be) {
						try {
							this.s.editorViewState.set(),
								await this.s.editorViewState.openTransientEditor({
									resource: me,
									options: {
										preserveFocus: !0,
										revealIfOpened: !0,
										ignoreError: !0,
									},
								});
						} catch {
							return [];
						}
						if (be.isCancellationRequested) return [];
						let Ce = this.G.getModel(me);
						if (!Ce)
							try {
								const Fe = ge.add(await this.O.createModelReference(me));
								if (be.isCancellationRequested) return [];
								Ce = Fe.object.textEditorModel;
							} catch {
								return [];
							}
						const Le = await this.yb.getSymbolPicks(
							Ce,
							ve,
							{ extraContainerLabel: (0, q.$$k)(fe.label) },
							ge,
							be,
						);
						return be.isCancellationRequested
							? []
							: Le.map((Fe) =>
									Fe.type === "separator"
										? Fe
										: {
												...Fe,
												resource: me,
												description: Fe.description,
												trigger: (Oe, xe) => (
													this.Cb(me, {
														keyMods: xe,
														range: Fe.range?.selection,
														forceOpenSideBySide: !0,
													}),
													i.TriggerAction.CLOSE_PICKER
												),
												accept: (Oe, xe) =>
													this.Cb(me, {
														keyMods: Oe,
														range: Fe.range?.selection,
														preserveFocus: xe.inBackground,
														forcePinned: xe.inBackground,
													}),
											},
								);
					}
					addDecorations(fe, me) {
						this.yb.addDecorations(fe, me);
					}
					clearDecorations(fe) {
						this.yb.clearDecorations(fe);
					}
					Bb(fe, me) {
						const ve = !h.URI.isUri(fe);
						let ge, be, Ce, Le, Fe, Oe;
						if ((0, v.$r1)(fe))
							(ge = v.$A1.getOriginalUri(fe)),
								(be = fe.getName()),
								(Ce = fe.getDescription()),
								(Le = fe.isDirty() && !fe.isSaving()),
								(Fe = fe.getLabelExtraClasses()),
								(Oe = fe.getIcon());
						else {
							ge = h.URI.isUri(fe) ? fe : fe.resource;
							const Je = this.W.getName(ge);
							(be = Je || (0, c.$jh)(ge)),
								(Ce = this.F.getUriLabel(Je ? ge : (0, c.$mh)(ge), {
									relative: !0,
								})),
								(Le = this.I.isDirty(ge) && !this.N.hasShortAutoSaveDelay(ge)),
								(Fe = []);
						}
						const xe = Ce ? `${be} ${Ce}` : be,
							He = new V.$Y(() =>
								(0, f.$BDb)(this.G, this.H, ge, void 0, Oe).concat(Fe),
							),
							Ke = new V.$Y(() => {
								const Je = me.openSideBySideDirection,
									Te = [];
								return (
									Te.push({
										iconClass:
											Je === "right"
												? x.ThemeIcon.asClassName(F.$ak.splitHorizontal)
												: x.ThemeIcon.asClassName(F.$ak.splitVertical),
										tooltip:
											Je === "right"
												? (0, l.localize)(9134, null)
												: (0, l.localize)(9135, null),
									}),
									ve &&
										Te.push({
											iconClass: Le
												? "dirty-anything " +
													x.ThemeIcon.asClassName(F.$ak.circleFilled)
												: x.ThemeIcon.asClassName(F.$ak.close),
											tooltip: (0, l.localize)(9136, null),
											alwaysVisible: Le,
										}),
									Te
								);
							});
						return {
							resource: ge,
							label: be,
							ariaLabel: Le ? (0, l.localize)(9137, null, xe) : xe,
							description: Ce,
							get iconClasses() {
								return He.value;
							},
							get buttons() {
								return Ke.value;
							},
							trigger: (Je, Te) => {
								switch (Je) {
									case 0:
										return (
											this.Cb(fe, {
												keyMods: Te,
												range: this.s.lastRange,
												forceOpenSideBySide: !0,
											}),
											i.TriggerAction.CLOSE_PICKER
										);
									case 1:
										if (!h.URI.isUri(fe))
											return (
												this.M.removeFromHistory(fe),
												i.TriggerAction.REMOVE_ITEM
											);
								}
								return i.TriggerAction.NO_ACTION;
							},
							accept: (Je, Te) =>
								this.Cb(fe, {
									keyMods: Je,
									range: this.s.lastRange,
									preserveFocus: Te.inBackground,
									forcePinned: Te.inBackground,
								}),
						};
					}
					async Cb(fe, me) {
						const ve = {
								preserveFocus: me.preserveFocus,
								pinned:
									me.keyMods?.ctrlCmd ||
									me.forcePinned ||
									this.eb.openEditorPinned,
								selection: me.range ? I.$iL.collapseToStart(me.range) : void 0,
							},
							ge =
								me.keyMods?.alt ||
								(this.eb.openEditorPinned && me.keyMods?.ctrlCmd) ||
								me.forceOpenSideBySide
									? S.$KY
									: S.$JY;
						if (
							(ge === S.$KY && (await this.s.editorViewState.restore()),
							(0, v.$r1)(fe))
						)
							await this.L.openEditor(fe, ve, ge);
						else {
							let be;
							h.URI.isUri(fe)
								? (be = { resource: fe, options: ve })
								: (be = { ...fe, options: { ...fe.options, ...ve } }),
								await this.L.openEditor(be, ge);
						}
					}
					async Db(fe, me) {
						if (!fe.normalized) return [];
						const ve = this.Y.notepadsData.notepads,
							ge = [];
						for (const be in ve) {
							const Ce = ve[be],
								Le = {
									notepadData: Ce,
									label: Ce.name ?? ne.$F9b,
									description: "Notepad",
									iconClass: x.ThemeIcon.asClassName(F.$ak.book),
									resource: h.URI.parse(`notepad:${be}`),
									accept: (He, Ke) =>
										this.Eb(be, {
											keyMods: He,
											preserveFocus: Ke.inBackground,
										}),
								},
								{
									score: Fe,
									labelMatch: Oe,
									descriptionMatch: xe,
								} = (0, w.$fs)(Le, fe, !0, t.$CJ, this.s.scorerCache);
							Fe &&
								((Le.highlights = { label: Oe, description: xe }), ge.push(Le));
						}
						return ge;
					}
					async Eb(fe, me) {
						await this.X.openNotepadAsEditor(fe);
					}
					Fb() {
						return (
							this.s.picker?.items?.filter(
								(me) => me.type !== "separator" && me.semSearchData !== void 0,
							) ?? []
						);
					}
					Gb(fe, me) {
						if (
							(fe.original.split(" ").length <= 1 && fe.original.length < 8) ||
							!fe.normalized
						)
							return { fast: [], slow: Promise.resolve([]) };
						const ge = performance.now();
						if (me.isCancellationRequested)
							return { fast: [], slow: Promise.resolve([]) };
						for (const Oe of this.Nb) Oe.abortC.abort();
						this.Nb = [];
						const be = new AbortController();
						this.Nb.push({
							abortC: be,
							query: fe.original,
							startTime: Date.now(),
						});
						const Ce = (Oe) => {
								const { startPosition: xe, endPosition: He } =
									Oe.codeBlock?.range ?? {};
								if (!xe || !He) return null;
								const Ke = I.$iL.lift({
									startColumn: xe.column,
									startLineNumber: xe.line,
									endColumn: He.column,
									endLineNumber: He.line,
								});
								return JSON.stringify({
									relativeWorkspacePath: Oe.codeBlock?.relativeWorkspacePath,
									range: Ke,
								});
							},
							Le = (Oe) =>
								JSON.stringify({
									relativeWorkspacePath:
										Oe.resource && this.$.asRelativePath(Oe.resource),
									range: Oe.range,
								}),
							Fe = (Oe) => {
								const xe = this.s.picker?.items;
								xe !== void 0 &&
									this.Ob(
										xe
											.filter(
												(He) => He.type !== "separator" && He.semSearchData,
											)
											.map((He) => {
												const { codeResult: Ke } = Oe;
												if (!Ke) return He;
												if (Ce(Ke) === Le(He)) {
													const Je =
															Oe.lineNumberClassification?.highlightRange,
														Te = Je
															? I.$iL.lift({
																	startColumn: Je.startColumn,
																	startLineNumber: Je.startLineNumber,
																	endColumn: Je.endColumn,
																	endLineNumber: Je.endLineNumberInclusive,
																})
															: void 0;
													return {
														...He,
														semSearchData: {
															...(He.type === "item" ? He.semSearchData : {}),
															focusLine:
																Oe.lineNumberClassification?.detailedLine
																	?.lineNumber,
															highlightRange: Te,
														},
													};
												}
												return He;
											}),
										!0,
									);
							};
						return {
							fast: this.Fb(),
							slow: (async () => {
								try {
									let Oe = [];
									if (
										(await this.cb
											.maybeRefreshConfig("semSearchInCmdP")
											.catch(() => {}),
										(this.cb.getCachedConfig("semSearchInCmdP") ?? !0) &&
											(Oe = await this.Z.search({
												query: fe.original,
												token: me,
												abortSignal: be.signal,
												updateLineNumberClassification: Fe,
											})),
										be.signal.aborted)
									)
										return this.Fb();
									console.log(
										"anythingQuickAccess.getSemanticSearchPicks latency",
										performance.now() - ge,
									);
									const He = new Map();
									for (const Ie of Oe) {
										const Be = Ie.resource.toString();
										He.has(Be) || He.set(Be, []), He.get(Be).push(Ie);
									}
									const Ke = Array.from(He.keys()).map(async (Ie) => {
											const Be = h.URI.parse(Ie),
												Se = await this.Hb(Be, me);
											return { resourceKey: Ie, outlineModel: Se };
										}),
										Je = await Promise.all(Ke),
										Te = new Map(
											Je.map(({ resourceKey: Ie, outlineModel: Be }) => [
												Ie,
												Be,
											]),
										);
									return Array.from(He.entries())
										.flatMap(([Ie, Be]) => {
											const Se = Te.get(Ie);
											return Be.map((ke) => {
												const Ue = Se ? this.Ib(Se, ke.range) : void 0;
												return {
													result: ke,
													outlineModel: Se,
													relevantLeaf: Ue,
												};
											});
										})
										.map(
											({ result: Ie, outlineModel: Be, relevantLeaf: Se }) => {
												const ke = _.$I9b.DESCRIPTION_TYPE === "resource",
													Ue = Be ? this.Mb(Be, Se) : void 0;
												return {
													resource: Ie.resource,
													label: Ie.title,
													description: ke
														? this.F.getUriLabel((0, c.$mh)(Ie.resource), {
																relative: !0,
															})
														: Ie.description,
													iconClasses: (0, f.$BDb)(this.G, this.H, Ie.resource),
													range: _.$I9b.USE_SYMBOL_RANGE
														? (Ie.symbolRange ?? Ie.range)
														: Ie.range,
													breadcrumbPath: Ue,
													semSearchData: {
														outlineModel: Be ? this.Kb(Be) : void 0,
														relevantLeaf: this.Lb(Se),
														outlineBreadcrumbs: Ue,
													},
													accept: (qe, Ae) =>
														this.Cb(Ie.resource, {
															keyMods: qe,
															range: _.$I9b.USE_SYMBOL_RANGE
																? (Ie.symbolRange ?? Ie.range)
																: Ie.range,
															preserveFocus: Ae.inBackground,
															forcePinned: Ae.inBackground,
														}),
												};
											},
										);
								} catch {
									return this.Fb();
								} finally {
									this.Nb = this.Nb.filter((Oe) => Oe.abortC !== be);
								}
							})(),
						};
					}
					async Hb(fe, me) {
						const ve = await this.O.createModelReference(fe),
							ge = ve.object.textEditorModel;
						try {
							const be = new Promise((Fe, Oe) => {
									setTimeout(
										() => Oe(new Error("Outline model loading timeout")),
										850,
									);
								}),
								Ce = Q.$8Db.create(this.bb.documentSymbolProvider, ge, me);
							return await Promise.race([Ce, be]);
						} catch (be) {
							console.warn("Failed to load outline model:", be);
							return;
						} finally {
							ve.dispose();
						}
					}
					Ib(fe, me) {
						if (!me) return;
						const ve = (ge) => {
							if (
								ge instanceof Q.$8Db ||
								ge instanceof Q.$7Db ||
								ge.children?.size > 0
							) {
								let be,
									Ce = -1;
								const Le = (ge instanceof Q.$8Db, ge.children.values());
								for (const Fe of Le)
									if (Fe instanceof Q.$6Db) {
										const Oe = ve(Fe);
										if (Oe) {
											const xe = this.Jb(Oe.symbol.range, me);
											xe > Ce && ((Ce = xe), (be = Oe));
										}
									}
								return be;
							} else if (ge instanceof Q.$6Db) return ge;
						};
						return ve(fe);
					}
					Jb(fe, me) {
						const ve = (Fe, Oe) => {
								const xe = Math.max(Fe.startLineNumber, Oe.startLineNumber),
									He = Math.min(Fe.endLineNumber, Oe.endLineNumber);
								return Math.max(0, He - xe + 1);
							},
							ge = fe.endLineNumber - fe.startLineNumber + 1,
							be = me.endLineNumber - me.startLineNumber + 1,
							Ce = ve(fe, me),
							Le = ge + be - Ce;
						return Ce / Le;
					}
					Kb(fe) {
						return {
							children: Array.from(fe.children.values())
								.filter((me) => me instanceof Q.$6Db)
								.map((me) => this.Lb(me)),
						};
					}
					Lb(fe) {
						if (fe)
							return {
								id: fe.id,
								symbol: {
									name: fe.symbol.name,
									detail: fe.symbol.detail,
									kind: fe.symbol.kind,
									range: fe.symbol.range,
									selectionRange: fe.symbol.selectionRange,
									tags: fe.symbol.tags,
								},
								children: Array.from(fe.children.values()).map((me) =>
									this.Lb(me),
								),
							};
					}
					Mb(fe, me) {
						if (!me) return;
						const ve = (Ce, Le) => {
							if (!(!Ce || !("children" in Ce)))
								for (const Fe of Array.from(Ce.children.values())) {
									if (Fe.id === Le) return Ce;
									const Oe = ve(Fe, Le);
									if (Oe) return Oe;
								}
						};
						return ((Ce, Le) => {
							const Fe = [];
							let Oe = Le;
							for (; Oe && Oe.symbol; ) Fe.unshift(Oe), (Oe = ve(Ce, Oe.id));
							return Fe;
						})(fe, me).map((Ce) => ({
							className: (0, se.$R9b)(Ce.symbol.kind),
							label: Ce.symbol.name,
						}));
					}
					dispose() {
						for (const fe of this.Nb) fe.abortC.abort();
						(this.Nb = []), super.dispose();
					}
					Ob(fe, me = !1) {
						if (this.s.picker) {
							let ve = this.s.picker.items;
							const ge = this.s.picker.activeItems,
								be = ve.indexOf(ge[0]);
							if (me) {
								ve = ve.filter(
									(Fe) =>
										!Fe.semSearchData &&
										!(Fe.type === "separator" && Fe.label === pe) &&
										Fe !== oe.j,
								);
								const Le = ve.findIndex(
									(Fe) => Fe.type === "separator" && Fe.label === ae,
								);
								Le !== -1 ? ve.splice(Le, 0, ...fe) : ve.push(...fe);
							} else ve = [...ve, ...fe];
							const Ce = ve.findIndex(
								(Le) => Le.type !== "separator" && Le.semSearchData !== void 0,
							);
							(ve.length > 1 || (ve.length === 1 && ve[0] !== oe.j)) &&
								(ve = ve.filter((Le) => Le !== oe.j)),
								(this.s.picker.items = ve),
								be <= Ce &&
									(be !== -1 && be < ve.length
										? (this.s.picker.activeItems = [ve[be]])
										: ve.length > 0 && (this.s.picker.activeItems = [ve[0]]));
						}
					}
				};
				(e.$S9b = ye),
					(e.$S9b =
						ye =
						oe =
							Ne(
								[
									j(0, C.$Li),
									j(1, m.$p7),
									j(2, r.$Vi),
									j(3, a.$I8),
									j(4, n.$r8),
									j(5, g.$ll),
									j(6, o.$3N),
									j(7, b.$QO),
									j(8, s.$nM),
									j(9, y.$gY),
									j(10, $.$gj),
									j(11, S.$IY),
									j(12, k.$Feb),
									j(13, D.$_Y),
									j(14, B.$MO),
									j(15, H.$Vl),
									j(16, t.$DJ),
									j(17, G.$uZ),
									j(18, W.$IYb),
									j(19, X.$ik),
									j(20, Y.$QIb),
									j(21, ie.$z9b),
									j(22, ie.$y9b),
									j(23, ee.$H9b),
									j(24, r.$Vi),
									j(25, te.$Q9b),
									j(26, Z.$k3),
									j(27, re.$H7b),
									j(28, le.$V7b),
								],
								ye,
							));
			},
		),
		define(
			de[1964],
			he([1, 0, 148, 3, 33, 322, 59, 65, 22, 20, 5, 45, 721, 118, 560, 47, 25]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Vcc = void 0),
					(e.$Vcc = (0, u.$Mi)("IAiContextService"));
				let o = class extends i.$1c {
					constructor(b, s, l, y, $, v, S) {
						super(),
							(this.n = b),
							(this.q = s),
							(this.r = l),
							(this.s = y),
							(this.t = $),
							(this.u = v),
							(this.w = S),
							(this.f = new Map()),
							(this.g = 5 * 60 * 1e3),
							(this.h = []),
							(this.j = !1),
							(this.c = this.n.createInstance(h.$S9b)),
							this.z(),
							this.D(
								this.t.onChangeEffectManuallyDisposed({
									deps: [
										() => this.t.applicationUserPersistentStorage.personalDocs,
									],
									onChange: () => this.z(),
								}),
							),
							this.D(
								this.t.onChangeEffectManuallyDisposed({
									deps: [
										() =>
											this.t.applicationUserPersistentStorage
												.shouldShowAtSymbolSuggestions,
									],
									onChange: () => {
										this.t.applicationUserPersistentStorage
											.shouldShowAtSymbolSuggestions && this.z();
									},
								}),
							);
					}
					async findClosestFiles(b, s, l = new w.$Ce().token) {
						const y = `${b}:${s.toString()}`,
							$ = this.f.get(y),
							v = Date.now();
						if ($ && v - $.timestamp < this.g) return $.result;
						this.f.forEach((P, k) => {
							v - P.timestamp >= this.g && this.f.delete(k);
						});
						const T = (await this.c.getFilePicks((0, E.$hs)(b), new C.$Gc(), l))
							.filter((P) => "resource" in P && !!P.resource)
							.map((P) => ({
								pick: P,
								similarity: this.y(P.resource.path, s.fsPath),
							}))
							.sort((P, k) => k.similarity - P.similarity)
							.map((P) => P.pick.resource)
							.filter((P) => !!P);
						return this.f.set(y, { result: T, timestamp: v }), T;
					}
					async retrieveAtSymbolSuggestions(b) {
						this.m && this.m.abort(), (this.m = new AbortController());
						const s = this.m.signal;
						try {
							const $ =
								(
									this.q.getActiveCodeEditor() || this.q.getFocusedCodeEditor()
								)?.getModel()?.uri ?? this.w.getWorkspace()?.folders[0]?.uri;
							if (!$) return [];
							const v = await this.findClosestFiles("package.json", $),
								S = await this.findClosestFiles("Cargo.toml", $),
								I = v[0],
								T = S[0],
								[P, k] = await Promise.all([
									this.r.readFile(I),
									this.r.readFile(T),
								]),
								L = P.value.toString(),
								D = L ? JSON.parse(L) : {},
								M = D.dependencies || {},
								N = D.devDependencies || {},
								A = D.peerDependencies || {},
								R = k.value.toString(),
								B = this.C(R).dependencies || {},
								U = [];
							[
								...Object.keys(M),
								...(!1 ? [...Object.keys(N), ...Object.keys(A)] : []),
							].forEach((J) => {
								U.push(new t.$9D({ name: J, fromFile: "package.json" }));
							}),
								Object.entries(B).forEach(([J, W]) => {
									U.push(new t.$9D({ name: J, fromFile: "Cargo.toml" }));
								});
							const F = [];
							for (let J = 0; J < this.h.length; J++) {
								const W = this.h[J];
								W.metadata &&
									F.push({
										index: J,
										text: W.metadata.docName + " - " + W.metadata?.prefixUrl,
										type: "documentation",
										docSelection: {
											docId: W.docIdentifier,
											name: W.metadata.docName,
											url: W.metadata.prefixUrl,
											uuid: (0, g.$9g)(),
										},
									});
							}
							const x = await this.s.getCurrentFileInfo($),
								H = new t.$0D({
									atSymbolDependencies: U,
									currentFileInfo: x,
									atSymbolOptions: F,
									userQuery: b,
								});
							if (!H || !F.length) return [];
							const V = await (await this.s.aiClient()).getAtSymbolSuggestions(
									H,
									{ signal: s },
								),
								{ indices: G } = V,
								K = G.map((J) => F[J]).filter((J) => !!J);
							return console.log(V.explanation), K;
						} catch (l) {
							return (
								l.name === "AbortError"
									? console.log("Request was aborted")
									: console.error("Error in retrieveAtSymbolSuggestions:", l),
								[]
							);
						} finally {
							this.m = void 0;
						}
					}
					y(b, s) {
						if (b === s) return 1;
						const l = b.split("/"),
							y = s.split("/"),
							$ = Math.min(l.length, y.length),
							v = l.slice(0, $).findIndex((S, I) => S !== y[I]);
						return v === -1
							? $ / Math.max(l.length, y.length)
							: v / Math.max(l.length, y.length);
					}
					async z() {
						const b = await this.s.availableDocs({
							additionalDocIdentifiers:
								this.t.applicationUserPersistentStorage.personalDocs.map(
									(s) => s.identifier,
								),
						});
						(this.h = b), (this.j = !0);
					}
					C(b) {
						function s(P) {
							if (P !== void 0)
								return (
									(P = P.trim()),
									P === "true"
										? !0
										: P === "false"
											? !1
											: P === "null"
												? null
												: (P.startsWith('"') && P.endsWith('"')) ||
														(P.startsWith("'") && P.endsWith("'"))
													? P.slice(1, -1)
													: isNaN(Number(P))
														? P.startsWith("{") && P.endsWith("}")
															? l(P.slice(1, -1))
															: P.startsWith("[") && P.endsWith("]")
																? P.slice(1, -1)
																		.split(",")
																		.map((k) => s(k.trim()))
																: P
														: Number(P)
								);
						}
						function l(P) {
							const k = {},
								L = P.split(",");
							for (const D of L) {
								const M = D.split("=");
								if (M.length < 2) continue;
								const N = M[0].trim(),
									A = M.slice(1).join("=").trim();
								N && A !== void 0 && (k[N] = s(A));
							}
							return k;
						}
						const y = {},
							$ = b.split(`
`);
						let v = y,
							S = null,
							I = "";
						function T(P, k) {
							S !== null ? S.push(k) : (v[P] = k);
						}
						for (let P = 0; P < $.length; P++) {
							const k = $[P].trim();
							if (!(k === "" || k.startsWith("#"))) {
								if (k.startsWith("[") && k.endsWith("]")) {
									const L = k.slice(1, -1).split(".");
									v = y;
									for (const D of L) v[D] || (v[D] = {}), (v = v[D]);
									S = null;
									continue;
								}
								if (k.includes("=")) {
									const [L, ...D] = k.split("=");
									I = L.trim();
									let M = D.join("=").trim();
									if (M.startsWith('"') && !M.endsWith('"')) {
										for (; !$[++P].trim().endsWith('"'); )
											M +=
												`
` + $[P];
										M +=
											`
` + $[P].trim();
									}
									if (M.startsWith("{") && !M.endsWith("}")) {
										for (; !$[++P].trim().endsWith("}"); ) M += $[P];
										M += $[P].trim();
									}
									if (M.startsWith("[") && !M.endsWith("]")) {
										for (S = [], T(I, S); !$[++P].trim().endsWith("]"); ) {
											const A = s($[P].trim());
											A !== void 0 && S.push(A);
										}
										const N = s($[P].trim().slice(0, -1));
										N !== void 0 && S.push(N), (S = null);
									} else T(I, s(M));
								}
							}
						}
						return y;
					}
				};
				(o = Ne(
					[
						j(0, u.$Li),
						j(1, d.$dtb),
						j(2, m.$ll),
						j(3, c.$Nfc),
						j(4, a.$0zb),
						j(5, n.$lcc),
						j(6, p.$Vi),
					],
					o,
				)),
					(0, r.$lK)(e.$Vcc, o, r.InstantiationType.Delayed);
			},
		),
		define(
			de[4109],
			he([1, 0, 1713, 30, 81, 14, 79, 118, 1964, 3959]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				const m = (0, C.$$O)(
					"outline-view-icon",
					E.$ak.symbolClass,
					"View icon of the AI chat view.",
				);
				i.$Io
					.as(w.$No.Configuration)
					.registerConfiguration({
						id: t.IAIContextPaneConstants.Id,
						order: 5,
						title: "AI Context",
						type: "object",
						properties: {
							[d.AIContextConfigKeys.personalContext]: {
								description:
									"Personal context to inject into the completions and chat models.",
								type: "string",
								default: "",
								scope: w.ConfigurationScope.RESOURCE,
							},
						},
					});
			},
		),
		define(
			de[4110],
			he([
				1, 0, 33, 14, 27, 23, 37, 26, 9, 98, 1667, 4, 11, 31, 8, 43, 63, 402,
				208, 481, 1355, 153, 207, 329, 503, 569, 721, 827, 18,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$FIc = k);
				function k() {
					(0, h.$4X)(M), (0, h.$4X)(L), (0, h.$4X)(D);
				}
				class L extends h.$3X {
					static {
						this.ID = "workbench.action.chat.attachFile";
					}
					constructor() {
						super({
							id: L.ID,
							title: (0, a.localize2)(4588, "Attach File"),
							category: o.$3Yb,
							f1: !1,
						});
					}
					async run(A, ...R) {
						const O = A.get(v.$D2),
							B = A.get(P.$IY),
							U = B.activeEditor?.resource;
						B.activeTextEditorControl?.getEditorType() ===
							r.EditorType.ICodeEditor &&
							U &&
							[
								E.Schemas.file,
								E.Schemas.vscodeRemote,
								E.Schemas.untitled,
							].includes(U.scheme) &&
							O.attachContext("file", U, l.ChatAgentLocation.Panel);
					}
				}
				class D extends h.$3X {
					static {
						this.ID = "workbench.action.chat.attachSelection";
					}
					constructor() {
						super({
							id: D.ID,
							title: (0, a.localize2)(4589, "Add Selection to Chat"),
							category: o.$3Yb,
							f1: !1,
						});
					}
					async run(A, ...R) {
						const O = A.get(v.$D2),
							B = A.get(P.$IY),
							U = B.activeTextEditorControl,
							z = B.activeEditor?.resource;
						if (
							B.activeTextEditorControl?.getEditorType() ===
								r.EditorType.ICodeEditor &&
							z &&
							[
								E.Schemas.file,
								E.Schemas.vscodeRemote,
								E.Schemas.untitled,
							].includes(z.scheme)
						) {
							const F = U?.getSelection();
							F &&
								O.attachContext(
									"file",
									{ uri: z, range: F },
									l.ChatAgentLocation.Panel,
								);
						}
					}
				}
				class M extends h.$3X {
					static {
						this.ID = "workbench.action.chat.attachContext";
					}
					static {
						this.c = n.$Kj.or(
							n.$Kj.and(y.$01.isEqualTo(l.ChatAgentLocation.Panel)),
							n.$Kj.and(
								y.$01.isEqualTo(l.ChatAgentLocation.Editor),
								n.$Kj.equals("config.chat.experimental.variables.editor", !0),
							),
							n.$Kj.and(
								y.$01.isEqualTo(l.ChatAgentLocation.Notebook),
								n.$Kj.equals("config.chat.experimental.variables.notebook", !0),
							),
							n.$Kj.and(
								y.$01.isEqualTo(l.ChatAgentLocation.Terminal),
								n.$Kj.equals("config.chat.experimental.variables.terminal", !0),
							),
						);
					}
					constructor() {
						super({
							id: M.ID,
							title: (0, a.localize2)(4590, "Attach Context"),
							icon: i.$ak.attach,
							category: o.$3Yb,
							precondition: M.c,
							keybinding: {
								when: y.$31,
								primary: w.KeyMod.CtrlCmd | w.KeyCode.Slash,
								weight: g.KeybindingWeight.EditorContrib,
							},
							menu: [{ when: M.c, id: h.$XX.ChatExecute, group: "navigation" }],
						});
					}
					d(A) {
						return "resource" in A
							? A.resource.toString()
							: A.uri.toString() +
									(A.range.startLineNumber !== A.range.endLineNumber
										? `:${A.range.startLineNumber}-${A.range.endLineNumber}`
										: `:${A.range.startLineNumber}`);
					}
					async e(A, R, ...O) {
						const B = [];
						for (const U of O)
							if (U && typeof U == "object" && "command" in U && U.command) {
								const z = await R.executeCommand(
									U.command.id,
									...(U.command.arguments ?? []),
								);
								if (!z) continue;
								B.push({
									...U,
									isDynamic: U.isDynamic,
									value: U.value,
									name: `${typeof U.value == "string" && U.value.startsWith("#") ? U.value.slice(1) : ""}${z}`,
									fullName: z,
								});
							} else
								"symbol" in U && U.symbol
									? B.push({
											...U,
											id: this.d(U.symbol.location),
											value: U.symbol.location,
											fullName: U.label,
											name: U.symbol.name,
											isDynamic: !0,
										})
									: U && typeof U == "object" && "resource" in U && U.resource
										? B.push({
												...U,
												id: this.d({ resource: U.resource }),
												value: U.resource,
												name: U.label,
												isFile: !0,
												isDynamic: !0,
											})
										: "symbolName" in U && U.uri && U.range
											? B.push({
													...U,
													range: void 0,
													id: this.d({ uri: U.uri, range: U.range.decoration }),
													value: { uri: U.uri, range: U.range.decoration },
													fullName: U.label,
													name: U.symbolName,
													isDynamic: !0,
												})
											: "kind" in U && U.kind === "tool"
												? B.push({
														id: U.id,
														name: U.label,
														fullName: U.label,
														value: void 0,
														icon: U.icon,
														isTool: !0,
													})
												: B.push({
														...U,
														range: void 0,
														id: U.id ?? "",
														value: "value" in U ? U.value : void 0,
														fullName: U.label,
														name:
															"name" in U && typeof U.name == "string"
																? U.name
																: U.label,
														icon:
															"icon" in U && d.ThemeIcon.isThemeIcon(U.icon)
																? U.icon
																: void 0,
													});
						A.getContrib(s.$EIc.ID)?.setContext(!1, ...B);
					}
					async run(A, ...R) {
						const O = A.get(p.$DJ),
							B = A.get(l.$c3),
							U = A.get(v.$D2),
							z = A.get(c.$ek),
							F = A.get(f.$GYb),
							x = A.get(S.$E2),
							H = A.get(f.$IYb),
							V = R[0]?.widget ?? F.lastFocusedWidget;
						if (!V) return;
						const G = V.parsedInput.parts.find((X) => X instanceof $.$U2),
							K = G ? G.agent.metadata.supportsSlowVariables : !0,
							J = [];
						for (const X of U.getVariables(V.location))
							X.fullName &&
								(!X.isSlow || K) &&
								J.push({
									label: X.fullName,
									name: X.name,
									id: X.id,
									iconClass: X.icon ? d.ThemeIcon.asClassName(X.icon) : void 0,
									icon: X.icon,
								});
						if (V.viewModel?.sessionId) {
							const X = V.parsedInput.parts.find((Y) => Y instanceof $.$U2);
							if (X) {
								const Y = await B.getAgentCompletionItems(
									X.agent.id,
									"",
									t.CancellationToken.None,
								);
								for (const ie of Y)
									ie.fullName &&
										J.push({
											label: ie.fullName,
											id: ie.id,
											command: ie.command,
											icon: ie.icon,
											iconClass: ie.icon
												? d.ThemeIcon.asClassName(ie.icon)
												: void 0,
											value: ie.value,
											isDynamic: !0,
											name: ie.name,
										});
							}
						}
						if (!G || G.agent.supportsToolReferences) {
							for (const X of x.getTools())
								if (X.canBeInvokedManually) {
									const Y = {
										kind: "tool",
										label: X.displayName ?? X.name ?? "",
										id: X.id,
										icon: d.ThemeIcon.isThemeIcon(X.icon) ? X.icon : void 0,
									};
									d.ThemeIcon.isThemeIcon(X.icon)
										? (Y.iconClass = d.ThemeIcon.asClassName(X.icon))
										: X.icon && (Y.iconPath = X.icon),
										J.push(Y);
								}
						}
						J.push({
							label: (0, a.localize)(4586, null),
							icon: d.ThemeIcon.fromId(i.$ak.symbolField.id),
							iconClass: d.ThemeIcon.asClassName(i.$ak.symbolField),
							prefix: T.$Ifc.PREFIX,
						});
						function W(X) {
							if (!X) return "";
							const Y = X.match(/\$\([^\)]+\)\s*(.+)/);
							return Y ? Y[1] : X;
						}
						this.f(
							O,
							z,
							V,
							H,
							J.sort(function (X, Y) {
								const ie = W(X.label).toUpperCase(),
									ne = W(Y.label).toUpperCase();
								return (0, C.$Ff)(ie, ne);
							}),
						);
					}
					f(A, R, O, B, U, z = "") {
						A.quickAccess.show(z, {
							enabledProviderPrefixes: [
								I.$S9b.PREFIX,
								T.$Ifc.PREFIX,
								u.$m9b.PREFIX,
							],
							placeholder: (0, a.localize)(4587, null),
							providerOptions: {
								handleAccept: (F) => {
									"prefix" in F
										? this.f(A, R, O, B, U, F.prefix)
										: (this.e(O, R, F), (0, b.$WYb)(O) && B.open());
								},
								additionPicks: U,
								filter: (F) => {
									const x = O.getContrib(s.$EIc.ID)?.getContext() ?? new Set();
									return "symbol" in F && F.symbol
										? !x.has(this.d(F.symbol.location))
										: F &&
												typeof F == "object" &&
												"resource" in F &&
												m.URI.isUri(F.resource)
											? [E.Schemas.file, E.Schemas.vscodeRemote].includes(
													F.resource.scheme,
												) && !x.has(this.d({ resource: F.resource }))
											: F &&
													typeof F == "object" &&
													"uri" in F &&
													F.uri &&
													F.range
												? !x.has(
														this.d({ uri: F.uri, range: F.range.decoration }),
													)
												: !("command" in F) && F.id
													? !x.has(F.id)
													: !0;
								},
							},
						});
					}
				}
			},
		),
		define(
			de[4111],
			he([
				1, 0, 94, 3, 23, 12, 4, 412, 31, 81, 102, 20, 5, 30, 192, 55, 44, 1857,
				402, 3806, 4082, 4110, 3807, 3012, 1047, 3808, 3809, 3810, 1358, 1328,
				208, 3549, 4065, 552, 1354, 4068, 4066, 3550, 4071, 481, 3010, 153, 329,
				218, 3572, 829, 503, 1235, 1023, 1807, 569, 3325, 1755, 231, 52, 1355,
				4072, 4073, 4074, 980,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(C = mt(C)),
					c.$Io
						.as(r.$No.Configuration)
						.registerConfiguration({
							id: "chatSidebar",
							title: C.localize(4620, null),
							type: "object",
							properties: {
								"chat.editor.fontSize": {
									type: "number",
									description: C.localize(4621, null),
									default: E.$m ? 12 : 14,
								},
								"chat.editor.fontFamily": {
									type: "string",
									description: C.localize(4622, null),
									default: "default",
								},
								"chat.editor.fontWeight": {
									type: "string",
									description: C.localize(4623, null),
									default: "default",
								},
								"chat.editor.wordWrap": {
									type: "string",
									description: C.localize(4624, null),
									default: "off",
									enum: ["on", "off"],
								},
								"chat.editor.lineHeight": {
									type: "number",
									description: C.localize(4625, null),
									default: 0,
								},
								"chat.experimental.implicitContext": {
									type: "boolean",
									description: C.localize(4626, null),
									deprecated: !0,
									default: !1,
								},
								"chat.experimental.variables.editor": {
									type: "boolean",
									description: C.localize(4627, null),
									default: !0,
								},
								"chat.experimental.variables.notebook": {
									type: "boolean",
									description: C.localize(4628, null),
									default: !1,
								},
								"chat.experimental.variables.terminal": {
									type: "boolean",
									description: C.localize(4629, null),
									default: !1,
								},
								"chat.experimental.detectParticipant.enabled": {
									type: "boolean",
									description: C.localize(4630, null),
									default: null,
								},
							},
						}),
					c.$Io
						.as(p.$a1.EditorPane)
						.registerEditorPane(
							n.$vVb.create(M.$ZYb, N.$cMb.EditorID, C.localize(4631, null)),
							[new u.$Ji(N.$cMb)],
						);
				let Q = class extends i.$1c {
					static {
						this.ID = "workbench.contrib.chatResolver";
					}
					constructor(le, oe) {
						super(),
							this.D(
								le.registerEditor(
									`${w.Schemas.vscodeChatSesssion}:**/**`,
									{
										id: N.$cMb.EditorID,
										label: C.localize(4632, null),
										priority: ee.RegisteredEditorPriority.builtin,
									},
									{
										singlePerResource: !0,
										canSupportResource: (ae) =>
											ae.scheme === w.Schemas.vscodeChatSesssion,
									},
									{
										createEditorInput: ({ resource: ae, options: pe }) => ({
											editor: oe.createInstance(N.$cMb, ae, pe),
											options: pe,
										}),
									},
								),
							);
					}
				};
				(Q = Ne([j(0, ee.$E6), j(1, h.$Li)], Q)),
					d.$Whc.register(new B.$QIc()),
					d.$Whc.register(new o.$vIc());
				let Z = class extends i.$1c {
					constructor(le, oe, ae, pe, $e) {
						super(),
							this.B.add(
								le.registerSlashCommand(
									{
										command: "clear",
										detail: C.localize(4633, null),
										sortText: "z2_clear",
										executeImmediately: !0,
										locations: [x.ChatAgentLocation.Panel],
									},
									async () => {
										oe.executeCommand(b.$yIc);
									},
								),
							),
							this.B.add(
								le.registerSlashCommand(
									{
										command: "help",
										detail: "",
										sortText: "z1_help",
										executeImmediately: !0,
										locations: [x.ChatAgentLocation.Panel],
									},
									async (ye, ue) => {
										const fe = ae.getDefaultAgent(x.ChatAgentLocation.Panel),
											me = ae.getAgents();
										fe?.metadata.helpTextPrefix &&
											((0, t.$el)(fe.metadata.helpTextPrefix)
												? ue.report({
														content: fe.metadata.helpTextPrefix,
														kind: "markdownContent",
													})
												: ue.report({
														content: new t.$cl(fe.metadata.helpTextPrefix),
														kind: "markdownContent",
													}),
											ue.report({
												content: new t.$cl(`

`),
												kind: "markdownContent",
											}));
										const ve = (
											await Promise.all(
												me
													.filter((ge) => ge.id !== fe?.id)
													.filter((ge) =>
														ge.locations.includes(x.ChatAgentLocation.Panel),
													)
													.map(async (ge) => {
														const be = ge.description
																? `- ${ge.description}`
																: "",
															Le = `- ${$e.invokeFunction((Oe) => (0, A.$oUb)(ge, !0, Oe))} ${be}`,
															Fe = ge.slashCommands
																.map((Oe) => {
																	const xe = Oe.description
																		? `- ${Oe.description}`
																		: "";
																	return `	* ${(0, A.$pUb)(ge, Oe)} ${xe}`;
																})
																.join(`
`);
														return (
															Le +
															`
` +
															Fe
														).trim();
													}),
											)
										).join(`
`);
										if (
											(ue.report({
												content: new t.$cl(ve, {
													isTrusted: { enabledCommands: [v.$PYb.ID] },
												}),
												kind: "markdownContent",
											}),
											fe?.metadata.helpTextVariablesPrefix)
										) {
											ue.report({
												content: new t.$cl(`

`),
												kind: "markdownContent",
											}),
												(0, t.$el)(fe.metadata.helpTextVariablesPrefix)
													? ue.report({
															content: fe.metadata.helpTextVariablesPrefix,
															kind: "markdownContent",
														})
													: ue.report({
															content: new t.$cl(
																fe.metadata.helpTextVariablesPrefix,
															),
															kind: "markdownContent",
														});
											const be = [
												...pe.getVariables(x.ChatAgentLocation.Panel),
												{ name: "file", description: C.localize(4634, null) },
											]
												.map(
													(Ce) =>
														`* \`${H.$P2}${Ce.name}\` - ${Ce.description}`,
												)
												.join(`
`);
											ue.report({
												content: new t.$cl(
													`
` + be,
												),
												kind: "markdownContent",
											});
										}
										fe?.metadata.helpTextPostfix &&
											(ue.report({
												content: new t.$cl(`

`),
												kind: "markdownContent",
											}),
											(0, t.$el)(fe.metadata.helpTextPostfix)
												? ue.report({
														content: fe.metadata.helpTextPostfix,
														kind: "markdownContent",
													})
												: ue.report({
														content: new t.$cl(fe.metadata.helpTextPostfix),
														kind: "markdownContent",
													}));
									},
								),
							);
					}
				};
				Z = Ne(
					[j(0, G.$L2), j(1, m.$ek), j(2, x.$c3), j(3, K.$D2), j(4, h.$Li)],
					Z,
				);
				const se = c.$Io.as(g.Extensions.Workbench);
				(0, g.$s6)(Q.ID, Q, g.WorkbenchPhase.BlockStartup),
					se.registerWorkbenchContribution(Z, _.LifecyclePhase.Eventually),
					c.$Io
						.as(p.$a1.EditorFactory)
						.registerEditorSerializer(N.$cMb.TypeID, N.$eMb),
					(0, g.$s6)(R.$NIc.ID, R.$NIc, g.WorkbenchPhase.BlockStartup),
					(0, g.$s6)(ie.$YIc.ID, ie.$YIc, g.WorkbenchPhase.BlockRestore),
					(0, g.$s6)(R.$OIc.ID, R.$OIc, g.WorkbenchPhase.Eventually),
					(0, f.$5Yb)(),
					(0, y.$GIc)(),
					(0, s.$CIc)(),
					(0, s.$DIc)(),
					(0, S.$IIc)(),
					(0, k.$8Yb)(),
					(0, v.$SYb)(),
					(0, P.$p9b)(),
					(0, I.$JIc)(),
					(0, T.$KIc)(),
					(0, b.$zIc)(),
					(0, l.$FIc)(),
					(0, $.$HIc)(),
					(0, a.$lK)(q.$J2, V.$XIc, a.InstantiationType.Delayed),
					(0, a.$lK)(L.$GYb, z.$YYb, a.InstantiationType.Delayed),
					(0, a.$lK)(L.$IYb, O.$PIc, a.InstantiationType.Delayed),
					(0, a.$lK)(L.$JYb, D.$MIc, a.InstantiationType.Delayed),
					(0, a.$lK)(J.$TYb, J.$UYb, a.InstantiationType.Delayed),
					(0, a.$lK)(W.$A2, W.$C2, a.InstantiationType.Delayed),
					(0, a.$lK)(X.$ymc, X.$zmc, a.InstantiationType.Delayed),
					(0, a.$lK)(G.$L2, G.$M2, a.InstantiationType.Delayed),
					(0, a.$lK)(x.$c3, x.$d3, a.InstantiationType.Delayed),
					(0, a.$lK)(x.$f3, x.$g3, a.InstantiationType.Delayed),
					(0, a.$lK)(K.$D2, U.$RIc, a.InstantiationType.Delayed),
					(0, a.$lK)(Y.$E2, Y.$F2, a.InstantiationType.Delayed),
					(0, a.$lK)(ne.$ZIc, ne.$2Ic, a.InstantiationType.Delayed),
					(0, a.$lK)(L.$KYb, F.$SIc, a.InstantiationType.Delayed);
			},
		),
		define(
			de[36],
			he([
				1, 0, 2, 13, 2, 7, 61, 67, 121, 10, 22, 5, 39, 41, 25, 118, 18, 232,
				315, 45, 31, 449, 87, 21, 35, 1054, 65, 241, 465, 226, 383, 545, 42,
				477, 32, 119, 627, 137, 496, 445, 445, 40, 669, 1929, 186, 361, 721,
				356, 827, 1015, 1636, 85, 204, 107, 1347, 90, 155, 3941, 401, 697, 418,
				516, 89, 400, 480, 256, 73, 143, 49, 479, 720, 1932, 66, 471, 62, 359,
				337, 1230, 8, 113, 619, 1010, 75, 740, 852, 287, 1285, 1346, 125, 72,
				788, 280, 3643, 308, 1703, 632, 180, 1298, 57, 1706, 715, 258, 560, 53,
				142, 1964, 1053, 219, 209, 166, 69, 271, 467, 476, 617, 993, 506, 472,
				52, 426, 399, 976, 977, 1009, 200, 559, 850,
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
				Oe,
				xe,
				He,
				Ke,
				Je,
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
				bt,
				nt,
				lt,
				ct,
				gt,
				ht,
				Rt,
				Nt,
				jt,
				ti,
				kt,
				hi,
				Kt,
				di,
				Ye,
				ze,
				Xe,
				It,
				Lt,
				xt,
				Vt,
				Bt,
				Gt,
				Mt,
				Ut,
				ei,
				mi,
				ii,
				Dt,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ldc = e.$kdc = e.$jdc = void 0),
					(e.$mdc = ci),
					(e.$ndc = ri),
					(e.$odc = $i),
					(e.$pdc = Wt),
					(e.$qdc = tt),
					(E = mt(E)),
					w.DelegatedEvents.clear();
				const Jt = [
					"queryBuilder",
					"symbolsQuickAccessProvider",
					"editorQuickAccessProvider",
					"quickAccessController",
					"anythingQuickAccessProvider",
				];
				function si(at) {
					return !Jt.includes(at);
				}
				const Zt = {
					aiService: g.$Nfc,
					contextMenuService: me.$Xxb,
					inlineDiffService: L.$27b,
					simpleInlineDiffService: D.$z8b,
					aiSettingsService: f.$S6b,
					clipboardService: m.$Vxb,
					configurationService: r.$gj,
					cursorAuthenticationService: o.$x6b,
					editorService: p.$IY,
					editorGroupService: Ce.$EY,
					dialogService: bt.$GO,
					fileService: u.$ll,
					aiFeatureStatusService: ke.$H7b,
					webCmdKService: qe.$Hcc,
					workspacesService: ye.$cRb,
					instantiationService: a.$Li,
					aiContextSessionService: Le.$B7b,
					composerService: ti.IComposerService,
					composerDataService: kt.IComposerDataService,
					bugBotLinterService: Dt.$idc,
					composerViewsService: Lt.IComposerViewsService,
					composerUtilsService: Bt.IComposerUtilsService,
					keybindingService: h.$uZ,
					languageService: C.$nM,
					languageFeaturesService: Kt.$k3,
					cmdKService: ve.$J7b,
					editorWorkerService: mi.$Cxb,
					cmdKService2: ge.$d0b,
					modelService: d.$QO,
					textModelService: M.$MO,
					openerService: c.$7rb,
					textResourceConfigurationService: Ae.$XO,
					themeService: v.$iP,
					workspaceContextService: n.$Vi,
					tokenStreamingDiffService: Ue.$Fcc,
					commandService: s.$ek,
					workspaceEditingService: l.$mRb,
					hostService: y.$asb,
					storageService: $.$lq,
					toolformerService: S.$T8b,
					reactiveStorageService: b.$0zb,
					agentDebuggerService: q.$b9b,
					hallucinatedFunctionsDataService: nt.$Tcc,
					reducerService: H.$Z6b,
					repositoryService: k.$J6b,
					textFileService: ie.$kZ,
					codeEditorService: I.$dtb,
					magicLinkService: T.$q8b,
					urlService: P.$2rb,
					cursorCredsService: N.$i6b,
					applyToFileActionsService: Se.$R0b,
					metricsService: Te.$wcc,
					telemetryService: A.$km,
					chatDataService: xe.$kgc,
					extensionGalleryService: R.$Ep,
					extensionManagementService: R.$Hp,
					interpreterService: He.$vcc,
					aiTaskService: oe.$a9b,
					keywordSearchService: O.$O6b,
					markerDecorationsService: U.$bub,
					markerService: te.$aM,
					aiDocsService: F.$48b,
					indexPopupService: z.$78b,
					notificationService: x.$4N,
					cppService: B.$jfc,
					searchService: V.$p7,
					serverConfigService: ei.$fdc,
					labelService: ue.$3N,
					outlineService: ne.$9Db,
					contextViewService: me.$Wxb,
					terminalConfigurationService: ee.$jIb,
					fastEditService: $e.$$9b,
					dataScrubbingService: J.$zIb,
					statusbarService: hi.$d6b,
					terminalService: ee.$iIb,
					aiContextservice: _.$Y9b,
					simpleTestService: re.$19b,
					undoRedoService: Q.$GN,
					interfaceAgentService: Z.$29b,
					aiErrorService: se.$W6b,
					aiChatService: le.$qgc,
					viewsService: ae.$HMb,
					fastContextService: pe.$26b,
					remoteAgentService: fe.$$m,
					hoverService: Me.$Uyb,
					aiProjectService: be.$tcc,
					productService: Fe.$Bk,
					aiReviewService: B.$ofc,
					gitContextService: Oe.$$Db,
					contextKeyService: Ke.$6j,
					environmentService: Je.$Ti,
					diffingService: Ee.$ycc,
					aiPreviewService: B.$nfc,
					aiReaderService: De.$Jcc,
					everythingProviderService: Re.$3Db,
					fastSemSearchService: je.$Kcc,
					semSearchService: It.$H9b,
					tooltipService: Ve.$5X,
					cursorPredictionService: B.$kfc,
					commitNotesService: Ze.$f0b,
					sourceFilesService: et.$J9b,
					importPredictionService: B.$lfc,
					lexicalReducerService: ft.$p_b,
					layoutService: rt.$jEb,
					aiContextService: Nt.$Vcc,
					gitGraphService: lt.$cEb,
					contextBankService: jt.$Wcc,
					scmService: ct.$c7,
					queryBuilder: (at) => at.createInstance(G.$M8),
					symbolsQuickAccessProvider: (at) => at.createInstance(W.$Ifc),
					editorQuickAccessProvider: (at) => at.createInstance(X.$uVb),
					anythingQuickAccessProvider: (at) => at.createInstance(K.$S9b),
					quickAccessController: (at) => at.createInstance(Y.$T9b),
					backgroundCmdKService: B.$qfc,
					recentFilesTrackerService: gt.$lcc,
					extensionService: ht.$q2,
					paneCompositeService: Rt.$6Sb,
					notepadDataService: Ye.$y9b,
					notepadService: Ye.$z9b,
					selectedContextService: di.$Q9b,
					terminalExecutionService: Xe.$Ycc,
					quickInputService2: B.$rfc,
					decorationsService: xt.$sPb,
					lifecycleService: Vt.$n6,
					customEditorLabelService: Gt.$QIb,
					bugbotService: Mt.$adc,
					bugbotDataService: Ut.$ddc,
					analyticsService: B.$ifc,
					prettyDialogService: ii.$hdc,
				};
				(e.$jdc = (0, i.createContext)()),
					(e.$kdc = (0, i.createContext)()),
					(e.$ldc = (0, i.createContext)());
				function ci() {
					return (0, i.useContext)(e.$ldc);
				}
				function ri(at, pi, Li, Di) {
					const Ui = Ie.$Bfb.document.createElement("div");
					return (
						(Ui.style.height = "100%"),
						(Ui.style.width = "100%"),
						Di?.additionalStyles &&
							Object.assign(Ui.style, Di.additionalStyles),
						Li.invokeFunction((Wi) => {
							const Gi = Di?.restrictToServices ?? Object.keys(Zt),
								qi = (0, w.render)(
									() =>
										(0, i.catchError)(
											() =>
												(0, t.createComponent)(e.$kdc.Provider, {
													get value() {
														return { close: Di?.onClose };
													},
													get children() {
														return (0, t.createComponent)(e.$jdc.Provider, {
															get value() {
																return {
																	get window() {
																		return E.getWindow(pi);
																	},
																	get portalElement() {
																		if ((0, ze.$Kac)()) {
																			const Vi = E.$Ogb();
																			return (
																				Be.$ujb.has(Vi) ||
																					Be.$ujb.set(Vi, (0, Be.$vjb)()),
																				Be.$ujb.get(Vi) ?? Vi.document.body
																			);
																		}
																		const li = E.getWindow(pi);
																		return Be.$ujb.get(li) ?? li.document.body;
																	},
																	...Gi.map((Ai) =>
																		si(Ai)
																			? { [Ai]: Wi.get(Zt[Ai]) }
																			: { [Ai]: Zt[Ai](Wi.get(a.$Li)) },
																	).reduce((Ai, li) => ({ ...Ai, ...li }), {}),
																};
															},
															get children() {
																return at();
															},
														});
													},
												}),
											(Ai) => {
												console.error(
													"ERROR WHEN RENDERING SOLID COMPONENT",
													Ai,
												);
											},
										),
									Ui,
								);
							return (
								pi.appendChild(Ui),
								{
									dispose: () => {
										qi(), Ui.remove();
									},
									focus: () => {
										Ui.focus();
									},
								}
							);
						})
					);
				}
				function $i() {
					return (0, i.useContext)(e.$jdc);
				}
				function Wt() {
					return (0, i.useContext)(e.$jdc);
				}
				function tt() {
					const at = (0, i.useContext)(e.$kdc)?.close;
					return at ? { close: at } : { close: () => {} };
				}
			},
		),
		define(
			de[1063],
			he([1, 0, 2, 2, 181, 164, 13, 36]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.LexicalComposer = r),
					(e.initializeEditor = u);
				const m = { tag: "history-merge" };
				function r(a) {
					const {
						editable: h,
						theme: c,
						namespace: n,
						nodes: g,
						onError: p,
						editorState: o,
					} = a.initialConfig;
					if ((0, C.useContext)(w.LexicalComposerContext) != null)
						return (0, i.memo)(() => a.children);
					const b = (0, w.createLexicalComposerContext)(null, c),
						s = (0, E.createEditor)({
							editable: h,
							namespace: n,
							nodes: g,
							onError: (l) => p(l, s),
							theme: c,
						});
					if ((u(s, o), a.reducerRegistration)) {
						const y = (0, d.$odc)().lexicalReducerService.registerEditor({
							editor: s,
							id: a.reducerRegistration.id,
							type: a.reducerRegistration.type,
						});
						y === !1 &&
							console.error(
								`Failed to register editor, id: ${a.reducerRegistration.id}, type: ${a.reducerRegistration.type}`,
							),
							(0, C.onCleanup)(() => {
								y && y();
							});
					}
					return (
						(0, C.onMount)(() => {
							const l = a.initialConfig.editable;
							s.setEditable(l !== void 0 ? l : !0);
						}),
						(0, t.createComponent)(w.LexicalComposerContext.Provider, {
							value: [s, b],
							get children() {
								return a.children;
							},
						})
					);
				}
				function u(a, h) {
					if (h !== null) {
						if (h === void 0)
							a.update(() => {
								const c = (0, E.$getRoot)();
								if (c.isEmpty()) {
									const n = (0, E.$createParagraphNode)();
									c.append(n);
									const g = typeof window < "u" ? document.activeElement : null;
									((0, E.$getSelection)() !== null ||
										(g !== null && g === a.getRootElement())) &&
										n.select();
								}
							}, m);
						else if (h !== null)
							switch (typeof h) {
								case "string": {
									const c = a.parseEditorState(h);
									a.setEditorState(c, m);
									break;
								}
								case "object": {
									a.setEditorState(h, m);
									break;
								}
								case "function": {
									a.update(() => {
										(0, E.$getRoot)().isEmpty() && h(a);
									}, m);
									break;
								}
							}
					}
				}
			},
		),
		define(
			de[1362],
			he([1, 0, 2, 2, 2, 2, 13, 181, 36, 58]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ContentEditable = a);
				const u = (0, t.template)("<div>");
				function a(h) {
					h = (0, C.mergeProps)({ role: "textbox", spellCheck: !0 }, h);
					const [c] = (0, d.useLexicalComposerContext)(),
						[n, g] = (0, C.createSignal)(!1);
					let p;
					(0, C.onMount)(() => {
						c.setRootElement(p);
					}),
						(0, C.onMount)(() => {
							g(c.isEditable()),
								(0, C.onCleanup)(
									c.registerEditableListener((s) => {
										g(s);
									}),
								);
						});
					function o(s, l) {
						return n() ? s : l;
					}
					const f = (0, m.$odc)(),
						b = () => {
							f.commandService.executeCommand(r.$SX).catch(() => {});
						};
					return (() => {
						const s = u();
						s.addEventListener("focus", b);
						const l = p;
						return (
							typeof l == "function" ? (0, i.use)(l, s) : (p = s),
							(0, w.spread)(
								s,
								(0, E.mergeProps)(
									{
										get "aria-activedescendant"() {
											return o(h.ariaActiveDescendant);
										},
										get "aria-autocomplete"() {
											return o(h.ariaAutoComplete, "none");
										},
										get "aria-controls"() {
											return o(h.ariaControls);
										},
										get "aria-describedby"() {
											return h.ariaDescribedBy;
										},
										get "aria-expanded"() {
											return o(
												h.role === "combobox" ? !!h.ariaExpanded : void 0,
											);
										},
										get "aria-label"() {
											return h.ariaLabel;
										},
										get "aria-labelledby"() {
											return h.ariaLabelledBy;
										},
										get "aria-multiline"() {
											return h.ariaMultiline;
										},
										get "aria-owns"() {
											return o(h.ariaOwns);
										},
										get "aria-required"() {
											return h.ariaRequired;
										},
										get autoCapitalize() {
											return h.autoCapitalize;
										},
										get class() {
											return h.class;
										},
										get contentEditable() {
											return n();
										},
										get "data-testid"() {
											return h.testid;
										},
										get id() {
											return h.id;
										},
										get role() {
											return o(h.role);
										},
										get spellcheck() {
											return h.spellCheck;
										},
										get style() {
											return h.style;
										},
										get tabIndex() {
											return h.tabIndex;
										},
										get ondragover() {
											return h.onDragOver;
										},
										get onDrop() {
											return h.onDrop;
										},
										get ondragleave() {
											return h.onDragLeave;
										},
									},
									() =>
										h.turnOffCmdZ
											? {
													onKeyDown: (y) => {
														(y.metaKey || y.ctrlKey) &&
															(y.key === "z" || y.key === "Z") &&
															(y.preventDefault(), y.stopPropagation());
													},
												}
											: {},
								),
								!1,
								!1,
							),
							s
						);
					})();
				}
			},
		);
	var Yi =
		(this && this.__exportStar) ||
		function (ce, e) {
			for (var t in ce)
				t !== "default" &&
					!Object.prototype.hasOwnProperty.call(e, t) &&
					Ns(e, ce, t);
		};
	define(
		de[4112],
		he([
			1, 0, 1063, 181, 181, 1362, 2605, 1106, 2155, 1160, 2154, 2600, 1563,
			1158, 2609, 2601, 2595, 1564, 2602, 2612, 2603, 2606, 2596, 2157, 2604,
			756, 1464, 2610,
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
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				Yi(t, e),
				Yi(i, e),
				Yi(w, e),
				Yi(E, e),
				Yi(C, e),
				Yi(d, e),
				Yi(m, e),
				Yi(r, e),
				Yi(u, e),
				Yi(a, e),
				Yi(h, e),
				Yi(c, e),
				Yi(n, e),
				Yi(g, e),
				Yi(p, e),
				Yi(o, e),
				Yi(f, e),
				Yi(b, e),
				Yi(s, e),
				Yi(l, e),
				Yi(y, e),
				Yi($, e),
				Yi(v, e),
				Yi(S, e),
				Yi(I, e),
				Yi(T, e);
		},
	),
		define(
			de[1965],
			he([1, 0, 2, 2, 2, 13, 36]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2hc = m),
					(e.$3hc = r),
					(e.$4hc = u),
					(e.$5hc = a);
				const d = (0, t.template)("<div>");
				function m() {
					const c = (0, C.$pdc)();
					return (0, E.createMemo)(
						() =>
							c.reactiveStorageService.applicationUserPersistentStorage
								.lintSettings.forceDisableGenerators.length > 0 ||
							c.reactiveStorageService.applicationUserPersistentStorage
								.lintSettings.forceEnableGenerators.length > 0 ||
							c.reactiveStorageService.applicationUserPersistentStorage
								.lintSettings.forceDisableDiscriminators.length > 0 ||
							c.reactiveStorageService.applicationUserPersistentStorage
								.lintSettings.forceEnableDiscriminators.length > 0,
					);
				}
				function r(c) {
					return c
						.toLowerCase()
						.split("_")
						.map((n) => n.charAt(0).toUpperCase() + n.slice(1))
						.join(" ");
				}
				function u(c) {
					return (() => {
						const n = d();
						return (0, w.insert)(n, () => c.bug.bug.message), n;
					})();
				}
				function a(c, n, g, p, o) {
					const f = n.aiLintBugData;
					return f
						? g.invokeFunction((b) =>
								(0, C.$ndc)(
									() =>
										(0, i.createComponent)(u, {
											bug: f,
											language: p,
											onLayout: o,
										}),
									c,
									g,
								),
							)
						: (console.error("No bug data for marker", n),
							{ dispose: () => {} });
				}
				function h(c, n) {
					const g = n
						.split(`
`)
						.map((f) => f.trim());
					let p = 0;
					const o = c
						.split(`
`)
						.map((f) => f.trim());
					return (
						o.forEach((f) => {
							const b = g.indexOf(f);
							b !== -1 && (g.splice(b, 1), p++);
						}),
						o.length - p
					);
				}
			},
		),
		define(
			de[4113],
			he([
				1, 0, 7, 203, 24, 97, 6, 3, 19, 195, 37, 321, 38, 17, 98, 61, 1965, 255,
				4, 92, 11, 8, 5, 73, 90, 41, 673, 51, 35, 2298,
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
			) {
				"use strict";
				var k;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6hc = void 0),
					(t = mt(t)),
					(f = mt(f));
				class L {
					constructor(q, V, G, K, J, W, X, Y) {
						(this.k = K),
							(this.l = J),
							(this.m = W),
							(this.n = X),
							(this.o = Y),
							(this.a = 0),
							(this.b = 0),
							(this.h = new WeakMap()),
							(this.i = new d.$Zc()),
							(this.c = V);
						const ie = document.createElement("div");
						(ie.className = "descriptioncontainer"),
							(this.d = document.createElement("div")),
							this.d.classList.add("message"),
							this.d.setAttribute("aria-live", "assertive"),
							this.d.setAttribute("role", "alert"),
							ie.appendChild(this.d),
							(this.f = document.createElement("div")),
							ie.appendChild(this.f),
							this.i.add(
								t.$$fb(this.f, "click", (ne) => {
									ne.preventDefault();
									const ee = this.h.get(ne.target);
									ee && G(ee);
								}),
							),
							(this.g = new i.$5hb(ie, {
								horizontal: r.ScrollbarVisibility.Auto,
								vertical: r.ScrollbarVisibility.Auto,
								useShadows: !1,
								horizontalScrollbarSize: 6,
								verticalScrollbarSize: 6,
							})),
							q.appendChild(this.g.getDomNode()),
							this.i.add(
								this.g.onScroll((ne) => {
									(ie.style.left = `-${ne.scrollLeft}px`),
										(ie.style.top = `-${ne.scrollTop}px`);
								}),
							),
							this.i.add(this.g);
					}
					dispose() {
						this.solidDisposable?.dispose(), (0, d.$Vc)(this.i);
					}
					update(q) {
						if (
							(this.solidDisposable?.dispose(),
							(this.aiBugHeightInLines = void 0),
							q.aiLintBugData)
						) {
							t.$9fb(this.d),
								t.$9fb(this.f),
								(0, a.$ksb)(this.d),
								(this.aiBugHeightInLines = 15);
							const _ = this.n.createByFilepathOrFirstLine(q.resource);
							this.solidDisposable = (0, p.$5hc)(
								this.d,
								q,
								this.o,
								_,
								({ width: te, height: Q }) => {
									const Z = this.d.parentElement
											? t
													.getWindow(this.d.parentElement)
													.getComputedStyle(this.d.parentElement)
											: null,
										se = Z ? parseInt(Z.paddingTop, 10) : 0,
										re = Z ? parseInt(Z.paddingBottom, 10) : 0,
										le = Z ? parseInt(Z.paddingLeft, 10) : 0,
										oe = Z ? parseInt(Z.paddingRight, 10) : 0;
									this.g.setScrollDimensions({
										scrollWidth: te + le + oe,
										scrollHeight: Q + se + re,
									}),
										(this.aiBugHeightInLines = Math.min(
											Math.ceil(
												(Q + se + re) /
													this.c.getOption(h.EditorOption.lineHeight),
											) + 2,
											25,
										)),
										this.k();
								},
							);
							return;
						}
						const { source: V, message: G, relatedInformation: K, code: J } = q;
						let W = (V?.length || 0) + 2;
						J &&
							(typeof J == "string" ? (W += J.length) : (W += J.value.length));
						const X = (0, u.$zf)(G);
						(this.a = X.length), (this.b = 0);
						for (const _ of X) this.b = Math.max(_.length + W, this.b);
						t.$9fb(this.d),
							this.d.setAttribute("aria-label", this.p(q)),
							this.c.applyFontInfo(this.d);
						let Y = this.d;
						for (const _ of X)
							(Y = document.createElement("div")),
								(Y.innerText = _),
								_ === "" && (Y.style.height = this.d.style.lineHeight),
								this.d.appendChild(Y);
						if (V || J) {
							const _ = document.createElement("span");
							if ((_.classList.add("details"), Y.appendChild(_), V)) {
								const te = document.createElement("span");
								(te.innerText = V),
									te.classList.add("source"),
									_.appendChild(te);
							}
							if (J)
								if (typeof J == "string") {
									const te = document.createElement("span");
									(te.innerText = `(${J})`),
										te.classList.add("code"),
										_.appendChild(te);
								} else {
									(this.j = t.$("a.code-link")),
										this.j.setAttribute("href", `${J.target.toString()}`),
										(this.j.onclick = (Q) => {
											this.l.open(J.target, { allowCommands: !0 }),
												Q.preventDefault(),
												Q.stopPropagation();
										});
									const te = t.$fhb(this.j, t.$("span"));
									(te.innerText = J.value), _.appendChild(this.j);
								}
						}
						if ((t.$9fb(this.f), this.c.applyFontInfo(this.f), (0, w.$Pb)(K))) {
							const _ = this.f.appendChild(document.createElement("div"));
							(_.style.paddingTop = `${Math.floor(this.c.getOption(h.EditorOption.lineHeight) * 0.66)}px`),
								(this.a += 1);
							for (const te of K) {
								const Q = document.createElement("div"),
									Z = document.createElement("a");
								Z.classList.add("filename"),
									(Z.innerText = `${this.m.getUriBasenameLabel(te.resource)}(${te.startLineNumber}, ${te.startColumn}): `),
									(Z.title = this.m.getUriLabel(te.resource)),
									this.h.set(Z, te);
								const se = document.createElement("span");
								(se.innerText = te.message),
									Q.appendChild(Z),
									Q.appendChild(se),
									(this.a += 1),
									_.appendChild(Q);
							}
						}
						const ie = this.c.getOption(h.EditorOption.fontInfo),
							ne = Math.ceil(ie.typicalFullwidthCharacterWidth * this.b * 0.75),
							ee = ie.lineHeight * this.a;
						this.g.setScrollDimensions({ scrollWidth: ne, scrollHeight: ee });
					}
					layout(q, V) {
						(this.g.getDomNode().style.height = `${q}px`),
							(this.g.getDomNode().style.width = `${V}px`),
							this.g.setScrollDimensions({ width: V, height: q });
					}
					getHeightInLines() {
						return Math.min(17, this.a);
					}
					p(q) {
						let V = "";
						switch (q.severity) {
							case v.MarkerSeverity.Error:
								V = f.localize(1089, null);
								break;
							case v.MarkerSeverity.Warning:
								V = f.localize(1090, null);
								break;
							case v.MarkerSeverity.Info:
								V = f.localize(1091, null);
								break;
							case v.MarkerSeverity.Hint:
								V = f.localize(1092, null);
								break;
						}
						let G = f.localize(
							1093,
							null,
							V,
							q.startLineNumber + ":" + q.startColumn,
						);
						const K = this.c.getModel();
						return (
							K &&
								q.startLineNumber <= K.getLineCount() &&
								q.startLineNumber >= 1 &&
								(G = `${K.getLineContent(q.startLineNumber)}, ${G}`),
							G
						);
					}
				}
				let D = class extends o.$9Mb {
					static {
						k = this;
					}
					static {
						this.TitleMenu = new s.$XX("gotoErrorTitleMenu");
					}
					constructor(q, V, G, K, J, W, X, Y) {
						super(
							q,
							{ showArrow: !0, showFrame: !0, isAccessible: !0, frameWidth: 1 },
							J,
						),
							(this.Z = V),
							(this.ab = G),
							(this.bb = K),
							(this.cb = W),
							(this.db = X),
							(this.eb = Y),
							(this.i = new d.$Zc()),
							(this.X = new C.$re()),
							(this.onDidSelectRelatedInformation = this.X.event),
							(this.m = v.MarkerSeverity.Warning),
							(this.r = E.$UL.white),
							this.fb(V.getColorTheme()),
							this.i.add(V.onDidColorThemeChange(this.fb.bind(this))),
							this.create();
					}
					fb(q) {
						this.r = q.getColor(x);
						let V = R,
							G = O;
						this.m === v.MarkerSeverity.Warning
							? ((V = B), (G = U))
							: this.m === v.MarkerSeverity.Info && ((V = z), (G = F));
						const K = q.getColor(V),
							J = q.getColor(G);
						this.style({
							arrowColor: K,
							frameColor: K,
							headerBackgroundColor: J,
							primaryHeadingColor: q.getColor(o.$$Mb),
							secondaryHeadingColor: q.getColor(o.$_Mb),
						});
					}
					q() {
						this.a &&
							(this.a.style.backgroundColor = this.r ? this.r.toString() : ""),
							super.q();
					}
					dispose() {
						this.i.dispose(), super.dispose();
					}
					focus() {
						this.a.focus();
					}
					P(q) {
						super.P(q),
							this.o.add(
								this.K.actionRunner.onWillRun((K) => this.editor.focus()),
							);
						const V = [],
							G = this.bb.getMenuActions(k.TitleMenu, this.cb);
						(0, b.$Kyb)(G, V),
							this.K.push(V, { label: !1, icon: !0, index: 0 });
					}
					Q(q) {
						this.c = t.$fhb(q, t.$(""));
					}
					T(q) {
						(this.a = q),
							q.classList.add("marker-widget"),
							(this.a.tabIndex = 0),
							this.a.setAttribute("role", "tooltip"),
							(this.b = document.createElement("div")),
							q.appendChild(this.b),
							(this.d = new L(
								this.b,
								this.editor,
								(V) => this.X.fire(V),
								() => this.F(),
								this.ab,
								this.db,
								this.eb,
								this.M,
							)),
							this.o.add(this.d);
					}
					show() {
						throw new Error("call showAtMarker");
					}
					showAtMarker(q, V, G, K = !1) {
						this.b.classList.remove("stale"),
							this.d.update(q),
							(this.m = q.severity),
							this.fb(this.Z.getColorTheme());
						const J = c.$iL.lift(q),
							W = this.editor.getPosition(),
							X = W && J.containsPosition(W) ? W : J.getStartPosition();
						super.show(X, this.nb());
						const Y = this.editor.getModel();
						if (Y) {
							const ie =
								G > 1
									? f.localize(1094, null, V, G)
									: f.localize(1095, null, V, G);
							this.setTitle((0, m.$kh)(Y.uri), ie);
						}
						(this.c.className = `codicon ${I.SeverityIcon.className(v.MarkerSeverity.toSeverity(this.m))}`),
							K
								? this.editor.revealPositionInCenterIfOutsideViewport(
										X,
										n.ScrollType.Smooth,
									)
								: this.editor.revealPositionNearTop(X, n.ScrollType.Smooth),
							this.editor.focus();
					}
					updateMarker(q) {
						this.b.classList.remove("stale"), this.d.update(q);
					}
					showStale() {
						this.b.classList.add("stale"), this.F();
					}
					W(q, V) {
						super.W(q, V),
							(this.Y = q),
							this.d.layout(q, V),
							(this.b.style.height = `${q}px`);
					}
					D(q) {
						this.d.layout(this.Y, q);
					}
					F() {
						super.F(this.nb());
					}
					nb() {
						return this.d.aiBugHeightInLines
							? this.d.aiBugHeightInLines
							: 3 + this.d.getHeightInLines();
					}
				};
				(e.$6hc = D),
					(e.$6hc =
						D =
						k =
							Ne(
								[
									j(1, P.$iP),
									j(2, S.$7rb),
									j(3, s.$YX),
									j(4, y.$Li),
									j(5, l.$6j),
									j(6, $.$3N),
									j(7, g.$nM),
								],
								D,
							));
				const M = (0, T.$DP)(T.$gQ, T.$hQ),
					N = (0, T.$DP)(T.$jQ, T.$kQ),
					A = (0, T.$DP)(T.$mQ, T.$nQ),
					R = (0, T.$wP)(
						"editorMarkerNavigationError.background",
						{ dark: M, light: M, hcDark: T.$OP, hcLight: T.$OP },
						f.localize(1096, null),
					),
					O = (0, T.$wP)(
						"editorMarkerNavigationError.headerBackground",
						{
							dark: (0, T.$BP)(R, 0.1),
							light: (0, T.$BP)(R, 0.1),
							hcDark: null,
							hcLight: null,
						},
						f.localize(1097, null),
					),
					B = (0, T.$wP)(
						"editorMarkerNavigationWarning.background",
						{ dark: N, light: N, hcDark: T.$OP, hcLight: T.$OP },
						f.localize(1098, null),
					),
					U = (0, T.$wP)(
						"editorMarkerNavigationWarning.headerBackground",
						{
							dark: (0, T.$BP)(B, 0.1),
							light: (0, T.$BP)(B, 0.1),
							hcDark: "#0C141F",
							hcLight: (0, T.$BP)(B, 0.2),
						},
						f.localize(1099, null),
					),
					z = (0, T.$wP)(
						"editorMarkerNavigationInfo.background",
						{ dark: A, light: A, hcDark: T.$OP, hcLight: T.$OP },
						f.localize(1100, null),
					),
					F = (0, T.$wP)(
						"editorMarkerNavigationInfo.headerBackground",
						{
							dark: (0, T.$BP)(z, 0.1),
							light: (0, T.$BP)(z, 0.1),
							hcDark: null,
							hcLight: null,
						},
						f.localize(1101, null),
					),
					x = (0, T.$wP)(
						"editorMarkerNavigation.background",
						T.$8P,
						f.localize(1102, null),
					);
			},
		),
		define(
			de[857],
			he([
				1, 0, 14, 27, 3, 46, 65, 48, 17, 71, 1622, 4, 11, 8, 116, 5, 43, 79,
				4113, 58,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				var s;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$9hc = e.$8hc = e.$7hc = void 0),
					(a = mt(a));
				let l = class {
					static {
						s = this;
					}
					static {
						this.ID = "editor.contrib.markerController";
					}
					static get(D) {
						return D.getContribution(s.ID);
					}
					constructor(D, M, N, A, R) {
						(this.g = M),
							(this.h = N),
							(this.i = A),
							(this.j = R),
							(this.c = new w.$Zc()),
							(this.a = D),
							(this.b = P.bindTo(this.h));
					}
					dispose() {
						this.k(), this.c.dispose();
					}
					k() {
						this.b.reset(),
							this.c.clear(),
							(this.f = void 0),
							(this.d = void 0);
					}
					l(D) {
						if (this.d && this.d.matches(D)) return this.d;
						let M = !1;
						return (
							this.d && ((M = !0), this.k()),
							(this.d = this.g.getMarkerList(D)),
							M && this.d.move(!0, this.a.getModel(), this.a.getPosition()),
							(this.f = this.j.createInstance(f.$6hc, this.a)),
							this.f.onDidClose(() => this.close(), this, this.c),
							this.b.set(!0),
							this.c.add(this.d),
							this.c.add(this.f),
							this.c.add(
								this.a.onDidChangeCursorPosition((N) => {
									(!this.d?.selected ||
										!m.$iL.containsPosition(
											this.d?.selected.marker,
											N.position,
										)) &&
										this.d?.resetIndex();
								}),
							),
							this.c.add(
								this.d.onDidChange(() => {
									if (!this.f || !this.f.position || !this.d) return;
									const N = this.d.find(this.a.getModel().uri, this.f.position);
									N ? this.f.updateMarker(N.marker) : this.f.showStale();
								}),
							),
							this.c.add(
								this.f.onDidSelectRelatedInformation((N) => {
									this.i.openCodeEditor(
										{
											resource: N.resource,
											options: {
												pinned: !0,
												revealIfOpened: !0,
												selection: m.$iL.lift(N).collapseToStart(),
											},
										},
										this.a,
									),
										this.close(!1);
								}),
							),
							this.c.add(this.a.onDidChangeModel(() => this.k())),
							this.d
						);
					}
					close(D = !0) {
						this.k(), D && this.a.focus();
					}
					showAtMarker(D) {
						if (this.a.hasModel()) {
							const M = this.l(this.a.getModel().uri);
							M.resetIndex(),
								M.move(
									!0,
									this.a.getModel(),
									new d.$hL(D.startLineNumber, D.startColumn),
									!0,
								),
								M.selected &&
									this.f.showAtMarker(
										M.selected.marker,
										M.selected.index,
										M.selected.total,
									);
						}
					}
					async showMarkerAtCursorIfExists() {
						if (this.a.hasModel()) {
							const M = this.l(this.a.getModel().uri).find(
								this.a.getModel().uri,
								this.a.getPosition(),
							);
							M && this.f.showAtMarker(M.marker, M.index, M.total, !0);
						}
					}
					async nagivate(D, M) {
						if (this.a.hasModel()) {
							const N = this.l(M ? void 0 : this.a.getModel().uri);
							if (
								(N.move(D, this.a.getModel(), this.a.getPosition()),
								!N.selected)
							)
								return;
							if (
								N.selected.marker.resource.toString() !==
								this.a.getModel().uri.toString()
							) {
								this.k();
								const A = await this.i.openCodeEditor(
									{
										resource: N.selected.marker.resource,
										options: {
											pinned: !1,
											revealIfOpened: !0,
											selectionRevealType:
												n.TextEditorSelectionRevealType.NearTop,
											selection: N.selected.marker,
										},
									},
									this.a,
								);
								A && (s.get(A)?.close(), s.get(A)?.nagivate(D, M));
							} else
								this.f.showAtMarker(
									N.selected.marker,
									N.selected.index,
									N.selected.total,
								);
						}
					}
				};
				(e.$7hc = l),
					(e.$7hc =
						l =
						s =
							Ne([j(1, u.$1hc), j(2, c.$6j), j(3, C.$dtb), j(4, g.$Li)], l));
				class y extends E.$itb {
					constructor(D, M, N, A = !1) {
						super(N), (this.d = D), (this.h = M), (this.j = A);
					}
					async run(D, M) {
						M.hasModel() &&
							(this.j
								? l.get(M)?.showMarkerAtCursorIfExists()
								: l.get(M)?.nagivate(this.d, this.h));
					}
				}
				class $ extends y {
					static {
						this.ID = b.$tV;
					}
					static {
						this.LABEL = a.localize(1080, null);
					}
					constructor() {
						super(!0, !1, {
							id: $.ID,
							label: $.LABEL,
							alias: "Go to Next Problem (Error, Warning, Info)",
							precondition: void 0,
							kbOpts: {
								kbExpr: r.EditorContextKeys.focus,
								primary: i.KeyMod.Alt | i.KeyCode.F8,
								weight: p.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: f.$6hc.TitleMenu,
								title: $.LABEL,
								icon: (0, o.$$O)(
									"marker-navigation-next",
									t.$ak.arrowDown,
									a.localize(1081, null),
								),
								group: "navigation",
								order: 1,
							},
						});
					}
				}
				e.$8hc = $;
				class v extends y {
					static {
						this.ID = b.$uV;
					}
					static {
						this.LABEL = a.localize(1082, null);
					}
					constructor() {
						super(
							!0,
							!1,
							{
								id: v.ID,
								label: v.LABEL,
								alias: "Go to Problem at Cursor (Error, Warning, Info)",
								precondition: void 0,
								kbOpts: {
									kbExpr: r.EditorContextKeys.focus,
									primary: i.KeyMod.CtrlCmd | i.KeyMod.Alt | i.KeyCode.F8,
									weight: p.KeybindingWeight.EditorContrib,
								},
							},
							!0,
						);
					}
				}
				e.$9hc = v;
				class S extends y {
					static {
						this.ID = "editor.action.marker.prev";
					}
					static {
						this.LABEL = a.localize(1083, null);
					}
					constructor() {
						super(!1, !1, {
							id: S.ID,
							label: S.LABEL,
							alias: "Go to Previous Problem (Error, Warning, Info)",
							precondition: void 0,
							kbOpts: {
								kbExpr: r.EditorContextKeys.focus,
								primary: i.KeyMod.Shift | i.KeyMod.Alt | i.KeyCode.F8,
								weight: p.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: f.$6hc.TitleMenu,
								title: S.LABEL,
								icon: (0, o.$$O)(
									"marker-navigation-previous",
									t.$ak.arrowUp,
									a.localize(1084, null),
								),
								group: "navigation",
								order: 2,
							},
						});
					}
				}
				class I extends y {
					constructor() {
						super(!0, !0, {
							id: "editor.action.marker.nextInFiles",
							label: a.localize(1085, null),
							alias: "Go to Next Problem in Files (Error, Warning, Info)",
							precondition: void 0,
							kbOpts: {
								kbExpr: r.EditorContextKeys.focus,
								primary: i.KeyCode.F8,
								weight: p.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: h.$XX.MenubarGoMenu,
								title: a.localize(1086, null),
								group: "6_problem_nav",
								order: 1,
							},
						});
					}
				}
				class T extends y {
					constructor() {
						super(!1, !0, {
							id: "editor.action.marker.prevInFiles",
							label: a.localize(1087, null),
							alias: "Go to Previous Problem in Files (Error, Warning, Info)",
							precondition: void 0,
							kbOpts: {
								kbExpr: r.EditorContextKeys.focus,
								primary: i.KeyMod.Shift | i.KeyCode.F8,
								weight: p.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: h.$XX.MenubarGoMenu,
								title: a.localize(1088, null),
								group: "6_problem_nav",
								order: 2,
							},
						});
					}
				}
				(0, E.$qtb)(l.ID, l, E.EditorContributionInstantiation.Lazy),
					(0, E.$ntb)($),
					(0, E.$ntb)(S),
					(0, E.$ntb)(v),
					(0, E.$ntb)(I),
					(0, E.$ntb)(T);
				const P = new c.$5j("markersNavigationVisible", !1),
					k = E.$htb.bindToContribution(l.get);
				(0, E.$mtb)(
					new k({
						id: "closeMarkersNavigation",
						precondition: P,
						handler: (L) => L.close(),
						kbOpts: {
							weight: p.KeybindingWeight.EditorContrib + 50,
							kbExpr: r.EditorContextKeys.focus,
							primary: i.KeyCode.Escape,
							secondary: [i.KeyMod.Shift | i.KeyCode.Escape],
						},
					}),
				);
			},
		),
		define(
			de[4114],
			he([
				1, 0, 7, 24, 15, 29, 27, 343, 3, 12, 19, 38, 17, 74, 69, 496, 393, 500,
				291, 857, 368, 4, 31, 39, 90, 41, 84, 32, 35, 667, 1965, 45, 5, 61, 47,
				58, 219, 137, 169, 1593, 2301,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ric = e.$qic = e.$pic = e.$oic = e.$nic = e.$mic = void 0),
					(t = mt(t)),
					(l = mt(l)),
					(e.$mic = C.KeyMod.CtrlCmd | C.KeyMod.Shift | C.KeyCode.KeyE),
					(e.$nic = (0, d.$rs)(e.$mic, r.OS)),
					(e.$oic = C.KeyMod.CtrlCmd | C.KeyCode.Backspace),
					(e.$pic = (0, d.$rs)(e.$oic, r.OS));
				const F = t.$;
				class x {
					constructor(G, K, J) {
						(this.owner = G), (this.range = K), (this.marker = J);
					}
					isValidForHoverAnchor(G) {
						return (
							G.type === s.HoverAnchorType.Range &&
							this.range.startColumn <= G.range.startColumn &&
							this.range.endColumn >= G.range.endColumn
						);
					}
				}
				e.$qic = x;
				const H = {
					type: c.CodeActionTriggerType.Invoke,
					filter: { include: f.$GAb.QuickFix },
					triggerAction: f.CodeActionTriggerSource.QuickFixHover,
				};
				let q = class {
					constructor(G, K, J, W, X, Y, ie, ne, ee, _, te, Q, Z) {
						(this.f = G),
							(this.g = K),
							(this.h = J),
							(this.i = W),
							(this.j = X),
							(this.k = Y),
							(this.l = ie),
							(this.m = ne),
							(this.n = ee),
							(this.o = _),
							(this.p = te),
							(this.q = Q),
							(this.r = Z),
							(this.hoverOrdinal = 1),
							(this.c = void 0);
					}
					computeSync(G, K) {
						if (
							!this.f.hasModel() ||
							(G.type !== s.HoverAnchorType.Range && !G.supportsMarkerHover)
						)
							return [];
						const J = this.f.getModel(),
							W = G.range.startLineNumber,
							X = J.getLineMaxColumn(W),
							Y = [];
						for (const ie of K) {
							const ne =
									ie.range.startLineNumber === W ? ie.range.startColumn : 1,
								ee = ie.range.endLineNumber === W ? ie.range.endColumn : X,
								_ = this.g.getMarker(J.uri, ie);
							if (!_) continue;
							const te = new h.$iL(
								G.range.startLineNumber,
								ne,
								G.range.startLineNumber,
								ee,
							);
							Y.push(new x(this, te, _));
						}
						return Y;
					}
					renderHoverParts(G, K) {
						if (!K.length) return new s.$4Bb([]);
						const J = new m.$Zc(),
							W = [];
						K.forEach((Y) => {
							const ie = this.s(Y, J, G);
							G.fragment.appendChild(ie.hoverElement), W.push(ie);
						});
						const X =
							K.length === 1
								? K[0]
								: K.sort((Y, ie) =>
										v.MarkerSeverity.compare(
											Y.marker.severity,
											ie.marker.severity,
										),
									)[0];
						return this.t(G, X, J), new s.$4Bb(W);
					}
					getAccessibleContent(G) {
						return G.marker.message;
					}
					s(G, K, J) {
						const W = document.createElement("div"),
							X = F("div.hover-row");
						W.appendChild(X), (X.tabIndex = 0);
						const Y = t.$fhb(X, F("div.marker.hover-contents")),
							{
								source: ie,
								message: ne,
								code: ee,
								relatedInformation: _,
							} = G.marker,
							te = G.marker.owner.startsWith(k.$kic);
						if (te) {
							const se = this.p.createByFilepathOrFirstLine(G.marker.resource);
							K.add(
								(0, L.$5hc)(
									Y,
									G.marker,
									this.o,
									se,
									({ width: oe, height: ae }) => J.onContentsChanged(),
								),
							);
							const re = G.marker.aiLintBugData?.bugUuid,
								le = re ? re + R.$CV + (0, A.$9g)() : null;
							return (
								this.n.setNonPersistentStorage(
									"lintState",
									"hoveringOverBugUuid",
									le,
								),
								K.add(
									(0, m.$Yc)(() => {
										this.n.nonPersistentStorage.lintState
											.hoveringOverBugUuid === le &&
											this.n.setNonPersistentStorage(
												"lintState",
												"hoveringOverBugUuid",
												null,
											);
									}),
								),
								{ hoverPart: G, hoverElement: W, dispose: () => K.dispose() }
							);
						}
						this.f.applyFontInfo(Y);
						const Q = t.$fhb(Y, F("span"));
						if (
							((Q.style.whiteSpace = "pre-wrap"),
							(Q.innerText = ne),
							this.f.isHallucinatedFunctionPreviewBox !== !0 && !te)
						) {
							const se = F("div.fix-buttons-container");
							W.appendChild(se);
							const re = F("div.fix-buttons-row");
							se.appendChild(re);
							const le = this.k.lookupKeybinding(
									U.FIX_ERROR_IN_COMPOSER_MESSAGE_ACTION_ID,
								),
								oe = this.k.lookupKeybinding(
									U.FIX_ERROR_IN_CHAT_MESSAGE_ACTION_ID,
								);
							re.appendChild(
								(0, z.$fhc)(
									"Fix in Composer" + (le ? ` (${le.getLabel()})` : ""),
									"edit",
									!0,
									this.q,
									this.r,
									this.m,
									G.marker.message,
									G.marker.resource.toString(),
									G.range,
								),
							),
								this.n.applicationUserPersistentStorage.composerState
									.unification !== !0 &&
									re.appendChild(
										(0, z.$fhc)(
											"Fix in Chat" + (oe ? ` (${oe.getLabel()})` : ""),
											"chat",
											!1,
											this.q,
											this.r,
											this.m,
											G.marker.message,
											G.marker.resource.toString(),
											G.range,
										),
									);
							const ae = F("div.fix-buttons-hint"),
								pe = r.$m ? "\u2318" : "Ctrl";
							(ae.textContent = `${pe}+click to open in new tab`),
								se.appendChild(ae);
						}
						if (ie || ee)
							if (ee && typeof ee != "string") {
								const se = F("span");
								if (ie) {
									const ae = t.$fhb(se, F("span"));
									ae.innerText = ie;
								}
								const re = t.$fhb(se, F("a.code-link"));
								re.setAttribute("href", ee.target.toString()),
									K.add(
										t.$0fb(re, "click", (ae) => {
											this.h.open(ee.target, { allowCommands: !0 }),
												ae.preventDefault(),
												ae.stopPropagation();
										}),
									);
								const le = t.$fhb(re, F("span"));
								le.innerText = ee.value;
								const oe = t.$fhb(Y, se);
								(oe.style.opacity = "0.6"), (oe.style.paddingLeft = "6px");
							} else {
								const se = t.$fhb(Y, F("span"));
								(se.style.opacity = "0.6"),
									(se.style.paddingLeft = "6px"),
									(se.innerText = ie && ee ? `${ie}(${ee})` : ie || `(${ee})`);
							}
						if ((0, i.$Pb)(_))
							for (const {
								message: se,
								resource: re,
								startLineNumber: le,
								startColumn: oe,
							} of _) {
								const ae = t.$fhb(Y, F("div"));
								ae.style.marginTop = "8px";
								const pe = t.$fhb(ae, F("a"));
								(pe.innerText = `${(0, u.$kh)(re)}(${le}, ${oe}): `),
									(pe.style.cursor = "pointer"),
									K.add(
										t.$0fb(pe, "click", (ye) => {
											if ((ye.stopPropagation(), ye.preventDefault(), this.h)) {
												const ue = {
													selection: { startLineNumber: le, startColumn: oe },
												};
												this.h
													.open(re, { fromUserGesture: !0, editorOptions: ue })
													.catch(E.$4);
											}
										}),
									);
								const $e = t.$fhb(ae, F("span"));
								($e.innerText = se), this.f.applyFontInfo($e);
							}
						return {
							hoverPart: G,
							hoverElement: W,
							dispose: () => K.dispose(),
						};
					}
					t(G, K, J) {
						if (
							K.marker.severity === v.MarkerSeverity.Error ||
							K.marker.severity === v.MarkerSeverity.Warning ||
							K.marker.severity === v.MarkerSeverity.Info
						) {
							const X = b.$7hc.get(this.f);
							X &&
								G.statusBar.addAction({
									label: l.localize(1204, null),
									commandId: b.$8hc.ID,
									run: () => {
										G.hide(), X.showAtMarker(K.marker), this.f.focus();
									},
								});
						}
						const W = K.marker.owner.startsWith(k.$kic);
						if (!this.f.getOption(a.EditorOption.readOnly)) {
							const X = G.statusBar.append(F("div"));
							this.c &&
								(v.IMarkerData.makeKey(this.c.marker) ===
								v.IMarkerData.makeKey(K.marker)
									? this.c.hasCodeActions ||
										(X.textContent = l.localize(1205, null))
									: (this.c = void 0));
							const Y =
								this.c && !this.c.hasCodeActions
									? m.$1c.None
									: (0, w.$Oh)(
											() => (X.textContent = l.localize(1206, null)),
											200,
											J,
										);
							X.textContent || (X.textContent = "\xA0");
							const ie = this.u(K.marker);
							J.add((0, m.$Yc)(() => ie.cancel())),
								ie.then((ne) => {
									if (
										(Y.dispose(),
										(this.c = {
											marker: K.marker,
											hasCodeActions: ne.validActions.length > 0,
										}),
										!this.c.hasCodeActions || W)
									) {
										ne.dispose(), (X.textContent = l.localize(1207, null));
										return;
									}
									X.style.display = "none";
									let ee = !1;
									J.add(
										(0, m.$Yc)(() => {
											ee || ne.dispose();
										}),
									),
										W ||
											G.statusBar.addAction({
												label: l.localize(1208, null),
												commandId: p.$MAb,
												run: (_) => {
													ee = !0;
													const te = o.$BBb.get(this.f),
														Q = t.$tgb(_);
													G.hide(),
														te?.showCodeActions(H, ne, {
															x: Q.left,
															y: Q.top,
															width: Q.width,
															height: Q.height,
														});
												},
											});
								}, E.$4);
						}
					}
					u(G) {
						return (0, w.$zh)((K) =>
							(0, p.$UAb)(
								this.i.codeActionProvider,
								this.f.getModel(),
								new h.$iL(
									G.startLineNumber,
									G.startColumn,
									G.endLineNumber,
									G.endColumn,
								),
								H,
								I.$0N.None,
								K,
								this.k,
							),
						);
					}
				};
				(e.$ric = q),
					(e.$ric = q =
						Ne(
							[
								j(1, g.$bub),
								j(2, S.$7rb),
								j(3, n.$k3),
								j(4, y.$ek),
								j(5, $.$uZ),
								j(6, P.$iP),
								j(7, T.$km),
								j(8, D.$0zb),
								j(9, M.$Li),
								j(10, N.$nM),
								j(11, O.IComposerService),
								j(12, B.$ifc),
							],
							q,
						));
			},
		),
		define(
			de[4115],
			he([1, 0, 3609, 46, 51, 35, 368, 820, 4114, 448, 603, 412, 3608, 905]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, i.$qtb)(
						r.$whc.ID,
						r.$whc,
						i.EditorContributionInstantiation.BeforeFirstInteraction,
					),
					(0, i.$qtb)(
						u.$2Ob.ID,
						u.$2Ob,
						i.EditorContributionInstantiation.BeforeFirstInteraction,
					),
					(0, i.$ntb)(t.$0hc),
					(0, i.$ntb)(t.$$hc),
					(0, i.$ntb)(t.$_hc),
					(0, i.$ntb)(t.$aic),
					(0, i.$ntb)(t.$bic),
					(0, i.$ntb)(t.$cic),
					(0, i.$ntb)(t.$dic),
					(0, i.$ntb)(t.$eic),
					(0, i.$ntb)(t.$fic),
					(0, i.$ntb)(t.$gic),
					(0, i.$ntb)(t.$hic),
					(0, i.$ntb)(t.$iic),
					C.$5Bb.register(d.$hhc),
					C.$5Bb.register(m.$ric),
					(0, E.$oP)((c, n) => {
						const g = c.getColor(w.$HQ);
						g &&
							(n.addRule(
								`.monaco-editor .monaco-hover .hover-row:not(:first-child):not(:empty) { border-top: 1px solid ${g.transparent(0.5)}; }`,
							),
							n.addRule(
								`.monaco-editor .monaco-hover hr { border-top: 1px solid ${g.transparent(0.5)}; }`,
							),
							n.addRule(
								`.monaco-editor .monaco-hover hr { border-bottom: 0px solid ${g.transparent(0.5)}; }`,
							));
					}),
					a.$Whc.register(new h.$sic()),
					a.$Whc.register(new h.$tic()),
					a.$Whc.register(new h.$wic());
			},
		),
		define(
			de[4116],
			he([1, 0, 2, 2, 2, 2, 2, 13, 14, 54, 19, 26, 9, 116, 156, 36]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Ulc = s);
				const p = (0, t.template)('<div tabindex="0">'),
					o = (0, t.template)("<div> "),
					f = (0, t.template)("<div><div>"),
					b = (0, t.template)("<span>");
				function s(T, P, k) {
					return (0, g.$ndc)(
						() => (0, C.createComponent)($, { forceHide: k }),
						T,
						P,
						{
							additionalStyles: {
								display: "flex",
								flexDirection: "column-reverse",
							},
						},
					);
				}
				function l(T, P) {
					return (
						T.positionColumn === P.positionColumn &&
						T.positionLineNumber === P.positionLineNumber &&
						T.selectionStartColumn === P.selectionStartColumn &&
						T.selectionStartLineNumber === P.selectionStartLineNumber
					);
				}
				function y(T, P) {
					return T.text === P.text && l(T.range, P.range);
				}
				function $(T) {
					const P = (0, g.$odc)(),
						k = (0, d.createMemo)(
							() =>
								P.reactiveStorageService.nonPersistentStorage
									.cmdkBackgroundContextSelections,
						),
						L = (0, d.createMemo)(() =>
							k().reduce((M, N) => {
								const A = N.uri;
								return (
									N.selections.forEach((O) => {
										M.push({ uri: A, selection: O });
									}),
									M
								);
							}, []),
						),
						D = (M, N) => {
							P.reactiveStorageService.setNonPersistentStorage(
								"cmdkBackgroundContextSelections",
								(A) => A.uri.toString() === M.toString(),
								"selections",
								(A) => (A.find((O) => y(O, N)) ? A.filter((O) => !y(O, N)) : A),
							);
						};
					return (() => {
						const M = p();
						return (
							M.addEventListener("click", (N) => {}),
							M.style.setProperty("cursor", "default"),
							M.style.setProperty("overflow", "visible"),
							(0, E.insert)(
								M,
								(0, C.createComponent)(d.Show, {
									get when() {
										return k().length > 0;
									},
									get fallback() {
										return [];
									},
									get children() {
										return (0, C.createComponent)(d.For, {
											get each() {
												return L();
											},
											children: (N, A) => {
												const R = N.uri,
													O = N.selection;
												return (0, C.createComponent)(v, {
													uri: R,
													selection: O,
													onDidRemove: () => D(R, O),
													get forceHide() {
														return T.forceHide;
													},
												});
											},
										});
									},
								}),
							),
							M
						);
					})();
				}
				function v(T) {
					const P = (0, g.$odc)();
					let k = "";
					const D = /```(\w*)/.exec(T.selection.text);
					D && (k = D[1]);
					const M = (0, d.createMemo)(() => T.selection),
						N = P.languageService.createByLanguageNameOrFilepathOrFirstLine(
							k,
							null,
							void 0,
						);
					P.languageService.createByLanguageNameOrFilepathOrFirstLine(
						k,
						null,
						void 0,
					);
					let A = S();
					const R = (0, d.createMemo)(() =>
							M()
								.text.split(`
`)
								.slice(1, -1),
						),
						O = (0, d.createMemo)(() =>
							P.workspaceContextService.asRelativePath(h.URI.from(M().uri)),
						),
						B = () => {
							const U = h.URI.parse(
									`${T.uri.toString()}#L${T.selection.range.selectionStartLineNumber}-L${T.selection.range.positionLineNumber}`,
								),
								z = P.editorService.activeEditor?.resource;
							z && !u.$dh.isEqual(z, T.uri, !0) && T.forceHide(),
								P.openerService.open(U, {
									openToSide: !1,
									editorOptions: {
										revealIfVisible: !0,
										revealIfOpened: !0,
										source: c.EditorOpenSource.USER,
									},
									fromUserGesture: !0,
								});
						};
					return (0, C.createComponent)(I, {
						get leftItems() {
							return [
								(0, C.createComponent)(n.$k$b, {
									get fileName() {
										return T.uri.fsPath;
									},
									get workspaceContextService() {
										return P.workspaceContextService;
									},
									get modelService() {
										return P.modelService;
									},
									get languageService() {
										return P.languageService;
									},
								}),
								(() => {
									const U = o(),
										z = U.firstChild;
									return (
										U.addEventListener("click", B),
										(0, E.insert)(U, () => (0, r.$sc)(T.uri.path), z),
										(0, E.insert)(
											U,
											() =>
												`${T.selection.range.selectionStartLineNumber}-${T.selection.range.positionLineNumber}`,
											null,
										),
										U
									);
								})(),
								(() => {
									const U = f(),
										z = U.firstChild;
									return (
										U.addEventListener("click", B),
										U.style.setProperty("opacity", "0.5"),
										U.style.setProperty("margin-left", "5px"),
										U.style.setProperty("flex-shrink", "1"),
										U.style.setProperty("min-width", "0"),
										U.style.setProperty("font-size", "0.8em"),
										(0, E.insert)(z, O),
										U
									);
								})(),
							];
						},
						get rightItems() {
							return (() => {
								const U = b();
								return (
									U.addEventListener("click", (z) => {
										z.preventDefault(), z.stopPropagation(), T.onDidRemove();
									}),
									U.style.setProperty("cursor", "pointer"),
									(0, w.effect)(() =>
										(0, i.className)(U, a.ThemeIcon.asClassName(m.$ak.x)),
									),
									U
								);
							})();
						},
						get codeBlock() {
							return T.selection;
						},
					});
				}
				function S() {
					let T = "abcdefghijklmnopqrstuvwxyz",
						P = "";
					for (let k = 0; k < 10; k++)
						P += T.charAt(Math.floor(Math.random() * T.length));
					return h.URI.parse(`aicmdk-context-code-block-anysphere://${P}`);
				}
				function I(T) {
					return (() => {
						const P = f(),
							k = P.firstChild;
						return (
							P.style.setProperty("display", "flex"),
							P.style.setProperty("flex-direction", "row"),
							P.style.setProperty(
								"background-color",
								"var(--vscode-input-background)",
							),
							P.style.setProperty(
								"border-bottom",
								"1px solid var(--vscode-input-border)",
							),
							P.style.setProperty("align-items", "center"),
							P.style.setProperty("position", "relative"),
							(0, E.insert)(P, () => T.leftItems, k),
							k.style.setProperty("flex-grow", "1"),
							k.style.setProperty("margin-right", "2px"),
							k.style.setProperty("margin-left", "2px"),
							(0, E.insert)(P, () => T.rightItems, null),
							P
						);
					})();
				}
			},
		),
		define(
			de[4117],
			he([1, 0, 56, 3, 45, 7, 4116, 5]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Vlc = void 0),
					(E = mt(E));
				let m = class extends i.$1c {
					constructor(u, a, h, c) {
						super(),
							(this.id = u),
							(this.b = a),
							(this._reactiveStorageService = h),
							(this.c = c),
							(this.f = !1),
							(this.a = E.$("div.background-context-widget")),
							(this.a.style.height = "18.195px"),
							this.D((0, C.$Ulc)(this.a, this.c, () => this.forceHide())),
							this.b.addOverlayWidget(this),
							this.a.addEventListener("mouseover", () => {
								this.f = !0;
							}),
							this.a.addEventListener("mouseout", () => {
								this.f = !1;
							});
					}
					hide() {
						this.f || (this.a.style.display = "none");
					}
					forceHide() {
						(this.f = !1), this.hide();
					}
					show() {
						this.a.style.display = "block";
					}
					getId() {
						return this.id;
					}
					getDomNode() {
						return this.a;
					}
					getPosition() {
						return {
							preference: t.OverlayWidgetPositionPreference.BOTTOM_RIGHT_CORNER,
						};
					}
				};
				(e.$Vlc = m), (e.$Vlc = m = Ne([j(2, w.$0zb), j(3, d.$Li)], m));
			},
		),
		define(
			de[4118],
			he([1, 0, 3, 46, 4117, 5, 45]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				var d;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Wlc = void 0);
				let m = class extends t.$1c {
					static {
						d = this;
					}
					static {
						this.ID = "editor.contrib.backgroundContextWidgetController";
					}
					static get(u) {
						return u.getContribution(d.ID);
					}
					constructor(u, a, h) {
						super(),
							(this.c = u),
							(this.f = a),
							(this.g = h),
							(this.a = new t.$Zc()),
							(this.reactiveStorageRoot = this.D(this.g.createScoped(this))),
							(this.b = this.f.createInstance(w.$Vlc, this.j(), this.c)),
							this.reactiveStorageRoot.onChangeEffect({
								deps: [
									() =>
										this.g.nonPersistentStorage.cmdkBackgroundContextSelections,
								],
								onChange: () => {
									this.h();
								},
							}),
							this.h(),
							this.a.add(this.c.onDidBlurEditorWidget(() => this.h())),
							this.a.add(this.c.onDidFocusEditorWidget(() => this.h()));
					}
					h() {
						const u =
							this.g.nonPersistentStorage.cmdkBackgroundContextSelections
								.length;
						this.c.hasTextFocus() && u > 0 ? this.b.show() : this.b.hide();
					}
					j() {
						return (
							"aiCmdk.backgroundContextWidget." +
							Math.random().toString(36).substring(2, 8)
						);
					}
					dispose() {
						super.dispose(), this.a.dispose();
					}
				};
				(e.$Wlc = m),
					(e.$Wlc = m = d = Ne([j(1, E.$Li), j(2, C.$0zb)], m)),
					(0, i.$qtb)(m.ID, m, i.EditorContributionInstantiation.Eventually);
			},
		),
		define(
			de[4119],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 51, 1035, 26, 9, 123, 14, 7, 136,
				580, 2162, 1465, 2164, 2163, 1463, 28, 36, 1352, 2, 12, 295, 1139,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$5uc = K);
				const M = (0, t.template)(
						'<div class="sidebar2-item-icon-anysphere"><div>',
					),
					N = (0, t.template)("<span>"),
					A = (0, t.template)(
						'<div class="sidebar-list-item"><div><span></span></div><div><span>',
					),
					R = (0, t.template)("<div>"),
					O = (0, t.template)(
						'<div><div>Welcome<div class="clickable"><div></div></div></div><div><div><div></div></div><div>% done</div></div><div>',
					),
					B = (0, t.template)(
						'<div><div><div class="sidebar2-item-icon-anysphere"><div>',
					),
					U = (0, t.template)('<div><img width="400px" decoding="async"><div>'),
					z = (0, t.template)("<div><div>"),
					F = (0, t.template)(
						'<div><div></div><div class="onboarding-checklist-entry-title">',
					),
					x = 8;
				function H(W, X) {
					if (g.URI.isUri(W)) {
						const Y = (0, f.$vhb)(W),
							ie = new b.$Gj();
						ie.update(Y);
						const ne = `sidebarpart2-activity-${X.replace(/\./g, "-")}-${ie.digest()}`,
							ee = `.${ne}`;
						return (
							(0, f.$Wgb)(
								ee,
								`
				mask: ${Y} no-repeat 50% 50%;
				mask-size: 16px;
				-webkit-mask: ${Y} no-repeat 50% 50%;
				-webkit-mask-size: 16px;
				width: 16px;
				height: 16px;
				background-color: var(--vscode-icon-foreground);
			`,
							),
							ne
						);
					} else if (n.ThemeIcon.isThemeIcon(W))
						return n.ThemeIcon.asClassName(W);
					return "";
				}
				function q(W) {
					const X = (0, c.$Zuc)(),
						Y = {
							height: "100%",
							display: "flex",
							"flex-direction": "row",
							"border-width": "0 0 1px 0",
							"border-style": "solid",
							"box-sizing": "border-box",
							"border-bottom-color": "rgba(0,0,0,0)",
							"align-items": "center",
							padding: "0px 4px",
							margin: "0px 0px",
							width: "35px",
							"justify-content": "center",
							cursor: "pointer",
						},
						[ie, ne] = (0, a.createSignal)(Y);
					(0, a.createEffect)(() => {
						W.selected
							? ne({
									...Y,
									"border-bottom-color":
										"var(--vscode-panelTitle-activeBorder)",
									color: "var(--vscode-panelTitle-activeForeground)",
								})
							: ne(Y);
					});
					const ee = (0, a.createMemo)(() =>
						H(W.viewContainer.icon, W.viewContainer.id),
					);
					return (() => {
						const _ = M(),
							te = _.firstChild;
						return (
							_.addEventListener("click", () => {
								W.onSelect();
							}),
							te.style.setProperty("align-items", "center"),
							te.style.setProperty("justify-content", "center"),
							te.style.setProperty("font-size", "17px"),
							(0, u.effect)(
								(Q) => {
									const Z = ie(),
										se = ee();
									return (
										(Q._v$ = (0, r.style)(_, Z, Q._v$)),
										se !== Q._v$2 && (0, m.className)(te, (Q._v$2 = se)),
										Q
									);
								},
								{ _v$: void 0, _v$2: void 0 },
							),
							_
						);
					})();
				}
				function V(W) {
					const X = (0, c.$Zuc)(),
						Y = (0, a.createMemo)(() =>
							H(W.viewContainer.icon, W.viewContainer.id),
						);
					return (() => {
						const ie = A(),
							ne = ie.firstChild,
							ee = ne.firstChild,
							_ = ne.nextSibling,
							te = _.firstChild;
						return (
							ie.addEventListener("click", () => {
								W.selectContainer(W.viewContainer.id);
							}),
							ie.style.setProperty("padding-left", "16px"),
							ie.style.setProperty("padding-right", "16px"),
							ie.style.setProperty("padding-top", "3px"),
							ie.style.setProperty("padding-bottom", "3px"),
							ie.style.setProperty("display", "flex"),
							ie.style.setProperty("flex-direction", "row"),
							ie.style.setProperty("align-items", "center"),
							ie.style.setProperty("justify-content", "space-between"),
							ne.style.setProperty("display", "flex"),
							ne.style.setProperty("flex-direction", "row"),
							ne.style.setProperty("align-items", "center"),
							ee.style.setProperty("padding-right", "4px"),
							ee.style.setProperty("align-items", "center"),
							ee.style.setProperty("justify-content", "center"),
							(0, C.insert)(
								ne,
								() =>
									typeof W.viewContainer.title == "string"
										? W.viewContainer.title
										: W.viewContainer.title.value,
								null,
							),
							(0, C.insert)(
								ne,
								(0, E.createComponent)(a.Show, {
									get when() {
										return W.extraInfo?.shortcut;
									},
									get children() {
										const Q = N();
										return (
											Q.style.setProperty("margin-left", "6px"),
											Q.style.setProperty("opacity", "0.5"),
											(0, C.insert)(Q, () => W.extraInfo?.shortcut),
											Q
										);
									},
								}),
								null,
							),
							_.style.setProperty("display", "flex"),
							_.style.setProperty("flex-direction", "row"),
							_.style.setProperty("align-items", "center"),
							te.addEventListener("click", (Q) => {
								X.sidebarData.pinnedViewContainerIDs.includes(
									W.viewContainer.id,
								)
									? (X.setSidebarData(
											"pinnedViewContainerIDs",
											X.sidebarData.pinnedViewContainerIDs.filter(
												(Z) => Z !== W.viewContainer.id,
											),
										),
										(0, c.$Xuc)(X.storageService, X.sidebarData))
									: (X.setSidebarData(
											"pinnedViewContainerIDs",
											X.sidebarData.pinnedViewContainerIDs.concat(
												W.viewContainer.id,
											),
										),
										(0, c.$Xuc)(X.storageService, X.sidebarData)),
									Q.stopPropagation();
							}),
							te.style.setProperty("cursor", "pointer"),
							te.style.setProperty("border-radius", "5px"),
							te.style.setProperty("padding", "2px"),
							te.style.setProperty("align-items", "center"),
							te.style.setProperty("justify-content", "center"),
							(0, u.effect)(
								(Q) => {
									const Z =
											W.viewContainer.id ===
											X.sidebarData.activeViewContainerID,
										se = Y(),
										re =
											n.ThemeIcon.asClassName(o.$ak.pinned) +
											" sidebar-2-pinned-icon" +
											(X.sidebarData.pinnedViewContainerIDs.includes(
												W.viewContainer.id,
											)
												? ""
												: " sidebar-2-pinned-icon-not-pinned");
									return (
										Z !== Q._v$3 &&
											ie.classList.toggle(
												"sidebar-list-item-selected",
												(Q._v$3 = Z),
											),
										se !== Q._v$4 && (0, m.className)(ee, (Q._v$4 = se)),
										re !== Q._v$5 && (0, m.className)(te, (Q._v$5 = re)),
										Q
									);
								},
								{ _v$3: void 0, _v$4: void 0, _v$5: void 0 },
							),
							ie
						);
					})();
				}
				function G(W) {
					const X = (0, $.createSortable)(W.viewContainer.id);
					return (() => {
						const Y = R();
						return (
							(0, w.use)(X, Y, () => !0),
							(0, C.insert)(
								Y,
								(0, E.createComponent)(V, {
									get viewContainer() {
										return W.viewContainer;
									},
									get selectContainer() {
										return W.selectContainer;
									},
									get extraInfo() {
										return W.extraInfo;
									},
								}),
							),
							(0, u.effect)(() =>
								(X.isActiveDraggable ? 0.5 : 1) != null
									? Y.style.setProperty(
											"opacity",
											X.isActiveDraggable ? 0.5 : 1,
										)
									: Y.style.removeProperty("opacity"),
							),
							Y
						);
					})();
				}
				function K(W) {
					const X = (0, c.$Zuc)(),
						Y = (0, T.$pdc)(),
						[ie, ne] = (0, a.createSignal)(0),
						[ee, _] = (0, a.createSignal)([]),
						[te, Q] = (0, a.createSignal)([]),
						[Z, se] = (0, a.createSignal)([]),
						[re, le] = (0, a.createSignal)(!1),
						[oe, ae] = (0, a.createSignal)(void 0),
						[pe, $e] = (0, a.createSignal)(!1);
					(0, a.createEffect)(() => {
						X.sidebarData.pinnedViewContainerIDs.includes(
							X.sidebarData.activeViewContainerID,
						)
							? ae(void 0)
							: ae(
									X.sidebarData.viewContainers.elements.find(
										(He) => He.id === X.sidebarData.activeViewContainerID,
									),
								);
					});
					const ye = (0, a.createMemo)(() =>
						Math.min(
							Z().length,
							Math.floor(ie() / 40) - 1 - (oe() !== void 0 ? 1 : 0),
						),
					);
					(0, a.createEffect)(() => {
						const He = ee().map((Ke) => {
							const Je = X.viewDescriptorService.getViewContainerModel(Ke);
							return (
								X.contextKeyService.createKey((0, P.$3uc)(Ke.id), !1).set(!0),
								{
									shortcut:
										(Je.keybindingId
											? X.keybindingService.lookupKeybinding(Je.keybindingId)
											: null
										)?.getLabel() ?? void 0,
								}
							);
						});
						Q(He);
					}),
						(0, a.createEffect)(() => {
							X.sidebarData.activeViewContainerID && le(!1);
						}),
						(0, a.createEffect)(() => {
							ee().find((Ke) => Ke.id === X.sidebarData.activeViewContainerID)
								?.wantsActionToolbar === !0
								? $e(!0)
								: $e(!1);
						}),
						(0, a.createEffect)(() => {
							pe()
								? X.setSidebarData("heightOfTitle", 70)
								: X.setSidebarData("heightOfTitle", 35);
						});
					const ue = () => {
						const He = X.sidebarData.viewContainers.elements.slice(0);
						He.sort((Ke, Je) => {
							const Te = X.sidebarData.pinnedViewContainerIDs.includes(Ke.id),
								Ee = X.sidebarData.pinnedViewContainerIDs.includes(Je.id);
							if (Te && !Ee) return -1;
							if (!Te && Ee) return 1;
							const Ie =
									X.sidebarData.viewContainerOrders[Ke.id]?.order ?? Ke.order,
								Be =
									X.sidebarData.viewContainerOrders[Je.id]?.order ?? Je.order;
							if ((0, I.$ug)(Be)) return -1;
							if ((0, I.$ug)(Ie)) return 1;
							if (Ie !== Be) return Ie - Be;
							const Se =
									X.sidebarData.viewContainerOrders[Ke.id]?.secondaryOrder ??
									Math.abs(Math.sin(parseInt(Ke.id.replace(/\./g, ""), 36))),
								ke =
									X.sidebarData.viewContainerOrders[Je.id]?.secondaryOrder ??
									Math.abs(Math.sin(parseInt(Je.id.replace(/\./g, ""), 36)));
							return Se - ke;
						}),
							_(He);
					};
					(0, a.createEffect)(() => {
						ue();
					}),
						(0, a.createEffect)(() => {
							se(
								ee().filter((He) =>
									X.sidebarData.pinnedViewContainerIDs.includes(He.id),
								),
							);
						});
					const fe = (He) => {
						He === X.sidebarData.activeViewContainerID
							? X.hideActivePaneComposite()
							: X.openPaneComposite(He, !0),
							le(!1);
					};
					let me;
					(0, a.onMount)(() => {
						const He = new ResizeObserver((Ke) => {
							for (const Je of Ke) {
								const { width: Te, height: Ee } = Je.contentRect;
								ne(Te);
							}
						});
						me && He.observe(me),
							(0, a.onCleanup)(() => {
								He.disconnect();
							});
					});
					const ve = ({ draggable: He, droppable: Ke }) => {
						if (He && Ke) {
							let Je = ee(),
								Te = Je.findIndex((Be) => Be.id === He.id),
								Ee = Je.findIndex((Be) => Be.id === Ke.id);
							const Ie = X.sidebarData.pinnedViewContainerIDs.includes(
								Je[Te]?.id,
							);
							if (
								((Je = Je.filter(
									(Be) =>
										X.sidebarData.pinnedViewContainerIDs.includes(Be.id) === Ie,
								)),
								Ie || ((Te -= Z().length), (Ee -= Z().length)),
								(Ee = Math.max(0, Math.min(Ee, Je.length - 1))),
								Te !== Ee && Te >= 0)
							) {
								Ee += Te < Ee ? 1 : 0;
								const Be =
										Ee >= 1
											? (X.sidebarData.viewContainerOrders[Je[Ee - 1]?.id]
													?.order ??
												Je[Ee - 1]?.order ??
												1e4)
											: -1,
									Se =
										X.sidebarData.viewContainerOrders[Je[Ee]?.id]?.order ??
										Je[Ee]?.order ??
										1e4,
									ke = (Be + Se) / 2;
								let Ue = Math.abs(
									Math.sin(parseInt(Je[Te].id.replace(/\./g, ""), 36)),
								);
								if (Be === Se) {
									const qe =
											X.sidebarData.viewContainerOrders[Je[Ee - 1]?.id]
												?.secondaryOrder ??
											Math.abs(
												Math.sin(
													parseInt(
														(Ee >= 1
															? (Je[Ee - 1].id ?? "000000")
															: "000000"
														).replace(/\./g, ""),
														36,
													),
												),
											),
										Ae =
											X.sidebarData.viewContainerOrders[Je[Ee]?.id]
												?.secondaryOrder ??
											Math.abs(
												Math.sin(
													parseInt(
														(Je[Ee]?.id ?? "ZZZZZZZ").replace(/\./g, ""),
														36,
													),
												),
											);
									Ue = (qe + Ae) / 2;
								}
								X.setSidebarData("viewContainerOrders", Je[Te].id, {
									order: ke,
									secondaryOrder: Ue,
								}),
									(0, c.$Xuc)(X.storageService, X.sidebarData);
							}
						}
					};
					(0, a.onMount)(() => {
						const He = X.viewDescriptorService.onDidChangeContainerLocation(
							({ viewContainer: Ke, from: Je, to: Te }) => {
								ue();
							},
						);
						(0, a.onCleanup)(() => {
							He.dispose();
						});
					});
					const [ge, be] = (0, a.createSignal)(void 0),
						Ce = () =>
							X.reactiveStorageService.setApplicationUserPersistentStorage(
								"checklistState",
								(He) => ({ ...He, shouldSeeOnboardingChecklist: !1 }),
							),
						Le = L.$m ? "\u2318" : "Ctrl",
						Fe = [
							{
								title: "Finish onboarding",
								done: () => !0,
								instruction: "You already clicked through onboarding",
								heightOverWidth: 1,
							},
							{
								title: "Accept a tab",
								done: () =>
									X.reactiveStorageService.applicationUserPersistentStorage
										.checklistState?.doneAutoComplete,
								instruction:
									"Cursor can suggest grey text or diffs to the side of your cursor",
								image:
									"https://cursor.com/_next/image?url=%2FTG.gif&w=3840&q=75",
								heightOverWidth: 1548 / 2590,
							},
							{
								title: "Prompt an edit",
								done: () =>
									X.reactiveStorageService.applicationUserPersistentStorage
										.checklistState?.doneCommandK,
								instruction: `Ask the AI to change a chunk of code with ${Le}+K`,
								image:
									"https://cursor.com/_next/image?url=%2Fckonboarding.gif&w=3840&q=75",
								heightOverWidth: 1716 / 2752,
							},
							{
								title: "Ask a question",
								done: () =>
									X.reactiveStorageService.applicationUserPersistentStorage
										.checklistState?.doneCommandL &&
									X.reactiveStorageService.applicationUserPersistentStorage
										.checklistState?.doneAddingCodeSelection,
								instruction: `Select a piece of code and hit ${Le}+L to ask anything about it`,
								image:
									"https://cursor.com/_next/image?url=%2Fclonboarding.gif&w=3840&q=75",
								heightOverWidth: 1676 / 2892,
							},
							{
								title: "Chat with your codebase",
								done: () =>
									X.reactiveStorageService.applicationUserPersistentStorage
										.checklistState?.doneCommandEnter,
								instruction: `Hit ${Le}+Enter in Chat to have the AI scan your codebase`,
								image:
									"https://cursor.com/_next/image?url=%2Fcenteronboarding.gif&w=3840&q=75",
								heightOverWidth: 1784 / 2880,
							},
						],
						Oe = (0, a.createMemo)(() => {
							const He = Fe.filter((Je) => Je.done()).length,
								Ke = Fe.length;
							return He / Ke;
						});
					let xe;
					return (
						(0, a.createEffect)(() => {
							X.reactiveStorageService.applicationUserPersistentStorage
								.checklistState?.shouldSeeOnboardingChecklist
								? xe &&
									setTimeout(() => {
										const He = xe.getBoundingClientRect();
										W.setSideBarMenuHeight(He.height);
									}, 0)
								: W.setSideBarMenuHeight(0);
						}),
						[
							(0, E.createComponent)(a.Show, {
								get when() {
									return (
										X.reactiveStorageService.applicationUserPersistentStorage
											.checklistState?.shouldSeeOnboardingChecklist === !0
									);
								},
								get children() {
									const He = O(),
										Ke = He.firstChild,
										Je = Ke.firstChild,
										Te = Je.nextSibling,
										Ee = Te.firstChild,
										Ie = Ke.nextSibling,
										Be = Ie.firstChild,
										Se = Be.firstChild,
										ke = Be.nextSibling,
										Ue = ke.firstChild,
										qe = Ie.nextSibling,
										Ae = xe;
									return (
										typeof Ae == "function" ? (0, w.use)(Ae, He) : (xe = He),
										He.style.setProperty("margin-top", "0px"),
										He.style.setProperty("padding", "16px 16px 16px 16px"),
										He.style.setProperty("position", "relative"),
										Ke.style.setProperty("text-transform", "uppercase"),
										Ke.style.setProperty(
											"color",
											"var(--vscode-editor-foreground)",
										),
										Ke.style.setProperty("font-size", "10px"),
										Ke.style.setProperty("display", "flex"),
										Ke.style.setProperty("align-items", "center"),
										Ke.style.setProperty("justify-content", "space-between"),
										Te.addEventListener("click", () => {
											Ce();
										}),
										Te.style.setProperty("width", "12px"),
										Te.style.setProperty("height", "12px"),
										Te.style.setProperty("cursor", "pointer"),
										Ee.style.setProperty("font-size", "12px"),
										Ie.style.setProperty("display", "flex"),
										Ie.style.setProperty("flex-direction", "column"),
										Ie.style.setProperty("align-items", "flex-start"),
										Ie.style.setProperty("justify-content", "center"),
										Ie.style.setProperty("width", "100%"),
										Ie.style.setProperty("margin-top", "8px"),
										Ie.style.setProperty("margin-bottom", "0px"),
										Be.style.setProperty("width", "100%"),
										Be.style.setProperty("height", "4px"),
										Be.style.setProperty(
											"background",
											"var(--vscode-input-background)",
										),
										Be.style.setProperty("border-radius", "2px"),
										Be.style.setProperty("overflow", "hidden"),
										Se.style.setProperty("height", "100%"),
										Se.style.setProperty(
											"background",
											"var(--vscode-progressBar-background)",
										),
										ke.style.setProperty(
											"color",
											"var(--vscode-input-placeholderForeground)",
										),
										ke.style.setProperty("font-size", "10px"),
										(0, C.insert)(ke, () => Oe() * 100, Ue),
										qe.style.setProperty("display", "flex"),
										qe.style.setProperty("flex-direction", "column"),
										qe.style.setProperty("align-items", "flex-start"),
										qe.style.setProperty("justify-content", "center"),
										qe.style.setProperty("padding", "4px 0"),
										(0, C.insert)(
											qe,
											(0, E.createComponent)(a.For, {
												each: Fe,
												children: (Me, De) => {
													const [Re, je] = (0, a.createSignal)(!1),
														[Ve, Ze] = (0, a.createSignal)(!1),
														[et, rt] = (0, a.createSignal)(),
														ft = () => {
															je(!0),
																be(De),
																setTimeout(() => {
																	Re() && Ze(!0);
																}, 200);
														},
														bt = () => {
															Ze(!1), je(!1), be(void 0);
														},
														nt = (0, a.createMemo)(() => {
															const lt =
																X.reactiveStorageService.nonPersistentStorage
																	.reactivePrimaryBarLocation;
															return lt === void 0 || lt === "left";
														});
													return (() => {
														const lt = F(),
															ct = lt.firstChild,
															gt = ct.nextSibling;
														return (
															lt.addEventListener("mouseleave", bt),
															lt.addEventListener("mouseenter", (ht) => {
																const Rt =
																	ht.currentTarget.getBoundingClientRect();
																rt(Rt), ft();
															}),
															lt.style.setProperty("display", "flex"),
															lt.style.setProperty("flex-direction", "row"),
															lt.style.setProperty("align-items", "center"),
															lt.style.setProperty("margin", "2px 0"),
															lt.style.setProperty("position", "relative"),
															lt.style.setProperty("cursor", "help"),
															lt.style.setProperty("width", "100%"),
															lt.style.setProperty("z-index", "1000"),
															(0, C.insert)(
																lt,
																(0, E.createComponent)(k.Portal, {
																	get mount() {
																		return Y.portalElement;
																	},
																	get children() {
																		const ht = z(),
																			Rt = ht.firstChild;
																		return (
																			ht.style.setProperty("position", "fixed"),
																			ht.style.setProperty(
																				"background",
																				"var(--vscode-editor-background)",
																			),
																			ht.style.setProperty(
																				"border",
																				"1px solid var(--vscode-sideBar-border)",
																			),
																			ht.style.setProperty(
																				"border-radius",
																				"4px",
																			),
																			ht.style.setProperty("padding", "4px"),
																			ht.style.setProperty("z-index", "1000"),
																			ht.style.setProperty(
																				"flex-direction",
																				"column",
																			),
																			ht.style.setProperty(
																				"align-items",
																				"center",
																			),
																			ht.style.setProperty(
																				"justify-content",
																				"center",
																			),
																			ht.style.setProperty(
																				"box-shadow",
																				"0 2px 4px var(--vscode-scrollbar-shadow)",
																			),
																			(0, C.insert)(
																				ht,
																				(0, E.createComponent)(a.Show, {
																					get when() {
																						return Me.image;
																					},
																					get children() {
																						const Nt = U(),
																							jt = Nt.firstChild,
																							ti = jt.nextSibling;
																						return (
																							Nt.style.setProperty(
																								"width",
																								"400px",
																							),
																							Nt.style.setProperty(
																								"display",
																								"flex",
																							),
																							Nt.style.setProperty(
																								"flex-direction",
																								"column",
																							),
																							Nt.style.setProperty(
																								"align-items",
																								"center",
																							),
																							Nt.style.setProperty(
																								"text-align",
																								"center",
																							),
																							Nt.style.setProperty(
																								"justify-content",
																								"center",
																							),
																							Nt.style.setProperty(
																								"position",
																								"relative",
																							),
																							jt.style.setProperty(
																								"z-index",
																								"1000",
																							),
																							jt.style.setProperty(
																								"border-radius",
																								"2px",
																							),
																							ti.style.setProperty(
																								"position",
																								"absolute",
																							),
																							ti.style.setProperty(
																								"top",
																								"50%",
																							),
																							ti.style.setProperty(
																								"left",
																								"50%",
																							),
																							ti.style.setProperty(
																								"transform",
																								"translate(-50%, -50%)",
																							),
																							(0, C.insert)(
																								ti,
																								(0, E.createComponent)(
																									D.$Z8b,
																									{},
																								),
																							),
																							(0, u.effect)(
																								(kt) => {
																									const hi = `${400 * Me.heightOverWidth}px`,
																										Kt = Ve()
																											? "block"
																											: "none",
																										di = Me.image;
																									return (
																										hi !== kt._v$14 &&
																											((kt._v$14 = hi) != null
																												? Nt.style.setProperty(
																														"height",
																														hi,
																													)
																												: Nt.style.removeProperty(
																														"height",
																													)),
																										Kt !== kt._v$15 &&
																											((kt._v$15 = Kt) != null
																												? jt.style.setProperty(
																														"display",
																														Kt,
																													)
																												: jt.style.removeProperty(
																														"display",
																													)),
																										di !== kt._v$16 &&
																											(0, i.setAttribute)(
																												jt,
																												"src",
																												(kt._v$16 = di),
																											),
																										kt
																									);
																								},
																								{
																									_v$14: void 0,
																									_v$15: void 0,
																									_v$16: void 0,
																								},
																							),
																							Nt
																						);
																					},
																				}),
																				Rt,
																			),
																			Rt.style.setProperty(
																				"color",
																				"var(--vscode-editor-foreground)",
																			),
																			Rt.style.setProperty("font-size", "10px"),
																			Rt.style.setProperty(
																				"text-align",
																				"center",
																			),
																			Rt.style.setProperty(
																				"min-width",
																				"200px",
																			),
																			(0, C.insert)(Rt, () => Me.instruction),
																			(0, u.effect)(
																				(Nt) => {
																					const jt = Re() ? "flex" : "none",
																						ti = `${(et()?.top ?? 0) - (Me.image ? 32 : 0)}px`,
																						kt = nt()
																							? void 0
																							: `${(0, f.$Ogb)().innerWidth - (et()?.left ?? 0) + x}px`,
																						hi = nt()
																							? `${(et()?.right ?? 0) + x}px`
																							: void 0,
																						Kt = Me.image ? "8px" : "0px",
																						di = Me.image ? "4px" : "0px";
																					return (
																						jt !== Nt._v$17 &&
																							((Nt._v$17 = jt) != null
																								? ht.style.setProperty(
																										"display",
																										jt,
																									)
																								: ht.style.removeProperty(
																										"display",
																									)),
																						ti !== Nt._v$18 &&
																							((Nt._v$18 = ti) != null
																								? ht.style.setProperty(
																										"top",
																										ti,
																									)
																								: ht.style.removeProperty(
																										"top",
																									)),
																						kt !== Nt._v$19 &&
																							((Nt._v$19 = kt) != null
																								? ht.style.setProperty(
																										"right",
																										kt,
																									)
																								: ht.style.removeProperty(
																										"right",
																									)),
																						hi !== Nt._v$20 &&
																							((Nt._v$20 = hi) != null
																								? ht.style.setProperty(
																										"left",
																										hi,
																									)
																								: ht.style.removeProperty(
																										"left",
																									)),
																						Kt !== Nt._v$21 &&
																							((Nt._v$21 = Kt) != null
																								? Rt.style.setProperty(
																										"margin-top",
																										Kt,
																									)
																								: Rt.style.removeProperty(
																										"margin-top",
																									)),
																						di !== Nt._v$22 &&
																							((Nt._v$22 = di) != null
																								? Rt.style.setProperty(
																										"margin-bottom",
																										di,
																									)
																								: Rt.style.removeProperty(
																										"margin-bottom",
																									)),
																						Nt
																					);
																				},
																				{
																					_v$17: void 0,
																					_v$18: void 0,
																					_v$19: void 0,
																					_v$20: void 0,
																					_v$21: void 0,
																					_v$22: void 0,
																				},
																			),
																			ht
																		);
																	},
																}),
																ct,
															),
															(0, C.insert)(gt, () => Me.title),
															(0, u.effect)(
																(ht) => {
																	const Rt = Me.done()
																			? n.ThemeIcon.asClassName(o.$ak.check)
																			: n.ThemeIcon.asClassName(o.$ak.circle),
																		Nt = {
																			"margin-right": "4px",
																			...(Me.done()
																				? {
																						color:
																							"var(--vscode-button-background)",
																					}
																				: {}),
																		},
																		jt = {
																			...(Me.done()
																				? {
																						color:
																							"var(--vscode-input-placeholderForeground)",
																						"text-decoration": "line-through",
																						opacity: 0.25,
																					}
																				: {}),
																			"white-space": "nowrap",
																			overflow: "hidden",
																			"text-overflow": "ellipsis",
																		};
																	return (
																		Rt !== ht._v$23 &&
																			(0, m.className)(ct, (ht._v$23 = Rt)),
																		(ht._v$24 = (0, r.style)(ct, Nt, ht._v$24)),
																		(ht._v$25 = (0, r.style)(gt, jt, ht._v$25)),
																		ht
																	);
																},
																{ _v$23: void 0, _v$24: void 0, _v$25: void 0 },
															),
															lt
														);
													})();
												},
											}),
										),
										(0, u.effect)(
											(Me) => {
												const De =
														(X.sidebarData.theme.getColor(p.$yGb)?.toString() ||
															X.sidebarData.theme.getColor(h.$OP)?.toString()) +
														" 1px solid",
													Re = n.ThemeIcon.asClassName(o.$ak.x),
													je = `${Oe() * 100}%`;
												return (
													De !== Me._v$6 &&
														((Me._v$6 = De) != null
															? He.style.setProperty("border-bottom", De)
															: He.style.removeProperty("border-bottom")),
													Re !== Me._v$7 &&
														(0, m.className)(Ee, (Me._v$7 = Re)),
													je !== Me._v$8 &&
														((Me._v$8 = je) != null
															? Se.style.setProperty("width", je)
															: Se.style.removeProperty("width")),
													Me
												);
											},
											{ _v$6: void 0, _v$7: void 0, _v$8: void 0 },
										),
										He
									);
								},
							}),
							(() => {
								const He = R(),
									Ke = me;
								return (
									typeof Ke == "function" ? (0, w.use)(Ke, He) : (me = He),
									He.style.setProperty("position", "relative"),
									(0, C.insert)(
										He,
										(0, E.createComponent)(s.DragDropProvider, {
											onDragEnd: ve,
											collisionDetector: S.closestCenter,
											get children() {
												return [
													(0, E.createComponent)(l.DragDropSensors, {
														get window() {
															return Y.window;
														},
													}),
													(() => {
														const Je = B(),
															Te = Je.firstChild,
															Ee = Te.firstChild,
															Ie = Ee.firstChild;
														return (
															Je.style.setProperty("position", "absolute"),
															Je.style.setProperty("top", "0"),
															Je.style.setProperty("left", "0"),
															Je.style.setProperty("width", "100%"),
															Je.style.setProperty("z-index", "100"),
															Je.style.setProperty(
																"background-color",
																"var(--vscode-sideBar-background)",
															),
															Je.style.setProperty("border-style", "solid"),
															Te.style.setProperty("display", "flex"),
															Te.style.setProperty("flex-direction", "row"),
															Te.style.setProperty("justify-content", "center"),
															Te.style.setProperty("width", "100%"),
															Te.style.setProperty("height", "35px"),
															(0, C.insert)(
																Te,
																(0, E.createComponent)(a.For, {
																	get each() {
																		return Z();
																	},
																	children: (Be, Se) =>
																		(0, E.createComponent)(a.Show, {
																			get when() {
																				return Se() < ye();
																			},
																			get children() {
																				return (0, E.createComponent)(q, {
																					viewContainer: Be,
																					get selected() {
																						return (
																							X.sidebarData
																								.activeViewContainerID === Be.id
																						);
																					},
																					onSelect: () => fe(Be.id),
																				});
																			},
																		}),
																}),
																Ee,
															),
															(0, C.insert)(
																Te,
																(0, E.createComponent)(a.Show, {
																	get when() {
																		return oe();
																	},
																	get children() {
																		return (0, E.createComponent)(q, {
																			get viewContainer() {
																				return oe();
																			},
																			selected: !0,
																			onSelect: () => fe(oe().id),
																		});
																	},
																}),
																Ee,
															),
															Ee.addEventListener("click", () => {
																le((Be) => !Be);
															}),
															Ee.style.setProperty("height", "100%"),
															Ee.style.setProperty("display", "flex"),
															Ee.style.setProperty("flex-direction", "row"),
															Ee.style.setProperty("align-items", "center"),
															Ee.style.setProperty("padding", "0px 4px"),
															Ee.style.setProperty("margin", "0px 4px"),
															Ee.style.setProperty("justify-content", "center"),
															Ee.style.setProperty("cursor", "pointer"),
															Ie.style.setProperty("align-items", "center"),
															Ie.style.setProperty("justify-content", "center"),
															Ie.style.setProperty("font-size", "24px"),
															(0, C.insert)(
																Je,
																(0, E.createComponent)(a.Show, {
																	get when() {
																		return re();
																	},
																	get children() {
																		return (0, E.createComponent)(J, {
																			get viewContainers() {
																				return ee();
																			},
																			get viewContainersExtraInfo() {
																				return te();
																			},
																			selectContainer: fe,
																		});
																	},
																}),
																null,
															),
															(0, C.insert)(
																Je,
																(0, E.createComponent)(a.Show, {
																	get when() {
																		return (0, d.memo)(() => !!pe())() && !re();
																	},
																	get children() {
																		const Be = R();
																		return (
																			Be.style.setProperty("width", "100%"),
																			Be.style.setProperty("height", "35px"),
																			Be.style.setProperty(
																				"box-sizing",
																				"border-box",
																			),
																			Be.style.setProperty("display", "flex"),
																			Be.style.setProperty(
																				"flex-direction",
																				"row",
																			),
																			Be.style.setProperty(
																				"justify-content",
																				"center",
																			),
																			Be.style.setProperty(
																				"align-items",
																				"center",
																			),
																			Be.style.setProperty(
																				"padding",
																				"12px 4px",
																			),
																			(0, C.insert)(
																				Be,
																				() => W.titleActionsContainer,
																			),
																			Be
																		);
																	},
																}),
																null,
															),
															(0, u.effect)(
																(Be) => {
																	const Se =
																			X.sidebarData.theme
																				.getColor(p.$yGb)
																				?.toString() ||
																			X.sidebarData.theme
																				.getColor(h.$OP)
																				?.toString(),
																		ke = re() ? "0 0 1px 0" : "0",
																		Ue = re()
																			? "0px 5px 5px -3px var(--vscode-scrollbar-shadow)"
																			: "none",
																		qe = !!re(),
																		Ae = re()
																			? n.ThemeIcon.asClassName(o.$ak.chevronUp)
																			: n.ThemeIcon.asClassName(
																					o.$ak.chevronDown,
																				);
																	return (
																		Se !== Be._v$9 &&
																			((Be._v$9 = Se) != null
																				? Je.style.setProperty(
																						"border-bottom-color",
																						Se,
																					)
																				: Je.style.removeProperty(
																						"border-bottom-color",
																					)),
																		ke !== Be._v$10 &&
																			((Be._v$10 = ke) != null
																				? Je.style.setProperty(
																						"border-width",
																						ke,
																					)
																				: Je.style.removeProperty(
																						"border-width",
																					)),
																		Ue !== Be._v$11 &&
																			((Be._v$11 = Ue) != null
																				? Je.style.setProperty("box-shadow", Ue)
																				: Je.style.removeProperty(
																						"box-shadow",
																					)),
																		qe !== Be._v$12 &&
																			Ee.classList.toggle(
																				"sidebar2-item-icon-anysphere-hover",
																				(Be._v$12 = qe),
																			),
																		Ae !== Be._v$13 &&
																			(0, m.className)(Ie, (Be._v$13 = Ae)),
																		Be
																	);
																},
																{
																	_v$9: void 0,
																	_v$10: void 0,
																	_v$11: void 0,
																	_v$12: void 0,
																	_v$13: void 0,
																},
															),
															Je
														);
													})(),
													(0, E.createComponent)(v.DragOverlay, {
														get mount() {
															return Y.portalElement;
														},
														children: (Je) =>
															(() => {
																const Te = R();
																return (
																	(0, C.insert)(
																		Te,
																		(0, E.createComponent)(a.Show, {
																			get when() {
																				return ee().find(
																					(Ee) => Ee.id === Je?.id,
																				);
																			},
																			children: (Ee) =>
																				(0, E.createComponent)(V, {
																					get viewContainer() {
																						return Ee();
																					},
																					selectContainer: () => {},
																					get extraInfo() {
																						return te()[ee().indexOf(Ee())];
																					},
																				}),
																		}),
																	),
																	Te
																);
															})(),
													}),
												];
											},
										}),
									),
									(0, u.effect)(() =>
										`${X.sidebarData.heightOfTitle}px` != null
											? He.style.setProperty(
													"height",
													`${X.sidebarData.heightOfTitle}px`,
												)
											: He.style.removeProperty("height"),
									),
									He
								);
							})(),
						]
					);
				}
				function J(W) {
					return (() => {
						const X = R();
						return (
							(0, C.insert)(
								X,
								(0, E.createComponent)(y.SortableProvider, {
									get ids() {
										return W.viewContainers.map((Y) => Y.id);
									},
									get children() {
										return (0, E.createComponent)(a.For, {
											get each() {
												return W.viewContainers;
											},
											children: (Y, ie) =>
												(0, E.createComponent)(G, {
													viewContainer: Y,
													get extraInfo() {
														return W.viewContainersExtraInfo[ie()];
													},
													get selectContainer() {
														return W.selectContainer;
													},
												}),
										});
									},
								}),
							),
							X
						);
					})();
				}
			},
		),
		define(
			de[4120],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 13, 1035, 26, 9, 3595, 14, 4119, 173, 7, 92,
				105, 276, 79, 36, 1139,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6uc = void 0),
					(e.$7uc = S),
					(e.$8uc = P);
				const y = (0, t.template)("<div>"),
					$ = (0, t.template)(
						'<div><div><div><span></span><div class="updatecursor-link-container">Billing Issue</div><div class="changelog-link-container"><span>On settings portal',
					),
					v = (0, t.template)(
						'<div><div><div><span></span><div class="updatecursor-link-container">Update Cursor?</div><div class="changelog-link-container"><span>Read the changelog.',
					);
				e.$6uc = (0, s.$$O)(
					"remove-update-modal",
					c.$ak.x,
					"Icon for removing the update modal.",
				);
				function S(k) {
					const L = (0, r.$Zuc)();
					function D(O, B) {
						if (L)
							return L.sidebarData.activeComposite
								? L.sidebarData.activeComposite.composite.getActionViewItem(
										O,
										B,
									)
								: (0, o.$Pyb)(L.instantiationService, O, B);
					}
					const M = (0, p.$)(".title-actions"),
						N = L.instantiationService.createInstance(g.$Syb, M, {
							actionViewItemProvider: (O, B) => D(O, B),
							orientation: f.ActionsOrientation.HORIZONTAL,
							getKeyBinding: (O) => L.keybindingService.lookupKeybinding(O.id),
							anchorAlignmentProvider: () => b.AnchorAlignment.RIGHT,
							toggleMenuTitle: "Actions...",
						});
					(0, m.onCleanup)(() => {
						N.dispose();
					});
					const [A, R] = (0, m.createSignal)(0);
					return (() => {
						const O = y();
						return (
							O.style.setProperty("position", "relative"),
							(0, C.insert)(
								O,
								(0, d.createComponent)(n.$5uc, {
									titleActionsContainer: M,
									toolBar: N,
									setSideBarMenuHeight: R,
								}),
								null,
							),
							(0, C.insert)(
								O,
								(0, d.createComponent)(h.$1uc, {
									get show() {
										return L.sidebarData.showComposite;
									},
									compositeCSSClass: "viewlet",
									toolbar: N,
									get sideBarMenuHeight() {
										return A();
									},
								}),
								null,
							),
							(0, C.insert)(O, (0, d.createComponent)(T, {}), null),
							(0, C.insert)(O, (0, d.createComponent)(I, {}), null),
							(0, E.effect)(
								(B) => {
									const U = `${L.sidebarData.dimensionOfEntireSidebar.width}px`,
										z = `${L.sidebarData.dimensionOfEntireSidebar.height}px`;
									return (
										U !== B._v$ &&
											((B._v$ = U) != null
												? O.style.setProperty("width", U)
												: O.style.removeProperty("width")),
										z !== B._v$2 &&
											((B._v$2 = z) != null
												? O.style.setProperty("height", z)
												: O.style.removeProperty("height")),
										B
									);
								},
								{ _v$: void 0, _v$2: void 0 },
							),
							O
						);
					})();
				}
				const I = (k) => {
						const L = (0, r.$Zuc)();
						return (0, d.createComponent)(m.Show, {
							get when() {
								return (
									(0, w.memo)(
										() =>
											L.reactiveStorageService.nonPersistentStorage
												.lastPaymentWasFailed === !0,
									)() &&
									(L.reactiveStorageService.applicationUserPersistentStorage
										.lastTimeClosedPaymentFailed === void 0 ||
										Date.now() / 1e3 -
											L.reactiveStorageService.applicationUserPersistentStorage
												.lastTimeClosedPaymentFailed >
											60 * 60 * 24 * 2)
								);
							},
							get children() {
								const D = $(),
									M = D.firstChild,
									N = M.firstChild,
									A = N.firstChild,
									R = A.nextSibling,
									O = R.nextSibling;
								return (
									D.style.setProperty("position", "absolute"),
									D.style.setProperty("bottom", "0px"),
									D.style.setProperty("left", "0px"),
									D.style.setProperty("width", "100%"),
									M.style.setProperty("display", "flex"),
									M.style.setProperty("justify-content", "center"),
									M.style.setProperty("align-items", "center"),
									M.style.setProperty("padding", "8px 0px"),
									N.addEventListener("click", async (B) => {
										let U = a.URI.parse("https://cursor.com/settings");
										B.stopPropagation(), B.preventDefault();
										try {
											await L.openerService.open(U, { fromUserGesture: !0 });
										} catch (z) {
											console.log(z);
										}
									}),
									N.style.setProperty("width", "150px"),
									N.style.setProperty("text-align", "center"),
									N.style.setProperty(
										"background-color",
										"var(--vscode-inputValidation-errorBackground)",
									),
									N.style.setProperty("padding", "5px 10px"),
									N.style.setProperty("cursor", "pointer"),
									N.style.setProperty(
										"border-color",
										"var(--vscode-inputValidation-errorBorder)",
									),
									N.style.setProperty("border-radius", "5px"),
									N.style.setProperty("box-sizing", "border-box"),
									N.style.setProperty("border-width", "1px"),
									N.style.setProperty("border-style", "solid"),
									N.style.setProperty("position", "relative"),
									A.addEventListener("click", (B) => {
										B.stopPropagation(),
											L.reactiveStorageService.setNonPersistentStorage({
												...L.reactiveStorageService.nonPersistentStorage,
												lastPaymentWasFailed: !1,
											}),
											L.reactiveStorageService.setApplicationUserPersistentStorage(
												"lastTimeClosedPaymentFailed",
												Date.now() / 1e3,
											);
									}),
									A.style.setProperty("position", "absolute"),
									A.style.setProperty("top", "2px"),
									A.style.setProperty("left", "2px"),
									A.style.setProperty("cursor", "pointer"),
									A.style.setProperty("z-index", "1"),
									A.style.setProperty("border-radius", "3px"),
									A.style.setProperty("transform", "scale(0.8)"),
									O.addEventListener("click", (B) => {
										B.stopPropagation(), B.preventDefault();
									}),
									O.style.setProperty("opacity", "0.8"),
									O.style.setProperty("font-size", "10px"),
									(0, E.effect)(() =>
										(0, i.className)(A, u.ThemeIcon.asClassName(e.$6uc)),
									),
									D
								);
							},
						});
					},
					T = (k) => {
						const L = (0, r.$Zuc)(),
							D = (0, l.$pdc)();
						return (
							(0, m.createEffect)(() => {
								const M = D.window.setInterval(() => {
									L.commandService.executeCommand("cursor.checkonupdate");
								}, 3e4);
								(0, m.onCleanup)(() => {
									D.window.clearInterval(M);
								});
							}),
							(0, d.createComponent)(m.Show, {
								get when() {
									return (
										(0, w.memo)(
											() =>
												!!L.reactiveStorageService.nonPersistentStorage
													.showingUpdate,
										)() &&
										Date.now() / 1e3 -
											L.reactiveStorageService.applicationUserPersistentStorage
												.lastUpdateHiddenTimeInUnixSeconds >
											60 * 60 * 48
									);
								},
								get children() {
									const M = v(),
										N = M.firstChild,
										A = N.firstChild,
										R = A.firstChild,
										O = R.nextSibling,
										B = O.nextSibling,
										U = B.firstChild;
									return (
										M.style.setProperty("position", "absolute"),
										M.style.setProperty("bottom", "0px"),
										M.style.setProperty("left", "0px"),
										M.style.setProperty("width", "100%"),
										N.style.setProperty("display", "flex"),
										N.style.setProperty("justify-content", "center"),
										N.style.setProperty("align-items", "center"),
										N.style.setProperty("padding", "8px 0px"),
										A.addEventListener("click", () => {
											L.commandService.executeCommand("cursor.doupdate"),
												L.reactiveStorageService.setNonPersistentStorage({
													...L.reactiveStorageService.nonPersistentStorage,
													showingUpdate: !1,
												});
										}),
										A.style.setProperty("width", "150px"),
										A.style.setProperty("text-align", "center"),
										A.style.setProperty(
											"background-color",
											"var(--vscode-breadcrumbPicker-background)",
										),
										A.style.setProperty("padding", "5px 10px"),
										A.style.setProperty("cursor", "pointer"),
										A.style.setProperty(
											"border-color",
											"var(--vscode-commandCenter-inactiveBorder)",
										),
										A.style.setProperty("border-radius", "5px"),
										A.style.setProperty("box-sizing", "border-box"),
										A.style.setProperty("border-width", "1px"),
										A.style.setProperty("border-style", "solid"),
										A.style.setProperty("position", "relative"),
										R.addEventListener("click", (z) => {
											z.stopPropagation(),
												L.reactiveStorageService.setApplicationUserPersistentStorage(
													"lastUpdateHiddenTimeInUnixSeconds",
													Date.now() / 1e3,
												);
										}),
										R.style.setProperty("position", "absolute"),
										R.style.setProperty("top", "2px"),
										R.style.setProperty("left", "2px"),
										R.style.setProperty("cursor", "pointer"),
										R.style.setProperty("z-index", "1"),
										R.style.setProperty(
											"background",
											"var(--vscode-editorWidget-border)",
										),
										R.style.setProperty("border-radius", "3px"),
										R.style.setProperty("transform", "scale(0.8)"),
										B.addEventListener("click", (z) => {
											z.stopPropagation(), z.preventDefault();
										}),
										B.style.setProperty("opacity", "0.5"),
										B.style.setProperty("font-size", "10px"),
										U.addEventListener("click", async (z) => {
											let F = a.URI.parse("https://changelog.cursor.com");
											D.productService.version.includes("nightly") &&
												(F = a.URI.parse(
													"https://changelog.cursor.com/?nightly=true",
												)),
												z.stopPropagation(),
												z.preventDefault();
											try {
												await L.openerService.open(F, { fromUserGesture: !0 });
											} catch (x) {
												console.log(x);
											}
										}),
										(0, E.effect)(() =>
											(0, i.className)(R, u.ThemeIcon.asClassName(e.$6uc)),
										),
										M
									);
								},
							})
						);
					};
				function P(k, L, D, M, N, A, R, O, B, U, z, F, x, H) {
					return (0, l.$ndc)(
						() =>
							(0, d.createComponent)(r.$Yuc, {
								sidebarData: L,
								storageService: B,
								setSidebarData: D,
								instantiationService: M,
								compositeRegistry: O,
								viewDescriptorService: N,
								keybindingService: A,
								reactiveStorageService: U,
								openPaneComposite: x,
								hideActivePaneComposite: H,
								contextKeyService: R,
								commandService: z,
								openerService: F,
								get children() {
									return (0, d.createComponent)(S, {});
								},
							}),
						k,
						M,
						{ restrictToServices: ["productService"] },
					);
				}
			},
		),
		define(
			de[4121],
			he([
				1, 0, 30, 1056, 96, 21, 39, 5, 6, 35, 51, 123, 40, 8, 53, 28, 60, 969,
				7, 3, 4120, 1035, 10, 45, 31, 41, 1140, 1139, 1854,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$9uc = void 0);
				let I = class extends o.$fEb {
					get dimension() {
						return this.g.dimensionOfEntireSidebar;
					}
					constructor(P, k, L, D, M, N, A, R, O, B, U, z, F) {
						super(w.Parts.SIDEBAR_PART, P, k),
							(this.r = k),
							(this.s = L),
							(this.t = D),
							(this.u = M),
							(this.y = N),
							(this.J = A),
							(this.L = R),
							(this.M = O),
							(this.N = B),
							(this.O = U),
							(this.P = z),
							(this.Q = F),
							(this.partId = w.Parts.SIDEBAR_PART),
							(this.a = this.D(new m.$re())),
							(this.onDidVisibilityChange = this.a.event),
							(this.b = this.D(new m.$re())),
							(this.c = this.D(new m.$re())),
							(this.minimumWidth = 170),
							(this.maximumWidth = Number.POSITIVE_INFINITY),
							(this.minimumHeight = 77),
							(this.maximumHeight = Number.POSITIVE_INFINITY),
							(this.Y = this.D(new m.$re()));
						const x = N.getDefaultViewContainer(
							p.ViewContainerLocation.Sidebar,
						).id;
						([this.g, this.j] = (0, l.$Wuc)(this.r, this.S(), x, this.h)),
							(this.m = t.$Io.as(i.$4Sb.Viewlets)),
							L.registerPart(this),
							this.R();
					}
					R() {
						this.D(
							this.y.onDidChangeViewContainers(({ added: P, removed: k }) =>
								this.U(P, k),
							),
						);
					}
					S() {
						return this.y
							.getViewContainersByLocation(p.ViewContainerLocation.Sidebar)
							.filter(
								(L) =>
									!(
										L &&
										L.hideIfEmpty &&
										this.y.getViewContainerModel(L).activeViewDescriptors
											.length === 0
									),
							);
					}
					U(P, k) {
						k
							.filter(
								({ location: L }) => L === p.ViewContainerLocation.Sidebar,
							)
							.forEach(({ container: L }) => this.W(L)),
							this.X(
								P.filter(
									({ location: L }) => L === p.ViewContainerLocation.Sidebar,
								).map(({ container: L }) => L),
							);
					}
					W(P) {
						this.j("viewContainers", new l.$Vuc(this.S()));
					}
					X(P) {
						this.j("viewContainers", new l.$Vuc(this.S())),
							setTimeout(() => {
								this.j("viewContainers", new l.$Vuc(this.S())),
									setTimeout(() => {
										this.j("viewContainers", new l.$Vuc(this.S()));
									}, 1e4);
							}, 1e3);
					}
					updateStyles() {
						super.updateStyles();
						const P = (0, g.$wg)(this.getContainer());
						(P.style.backgroundColor = this.w(a.$wGb) || ""),
							(P.style.color = this.w(a.$xGb) || "");
						const k = this.w(a.$yGb) || this.w(u.$OP),
							L = this.s.getSideBarPosition() === w.Position.LEFT;
						(P.style.borderRightWidth = k && L ? "1px" : ""),
							(P.style.borderRightStyle = k && L ? "solid" : ""),
							(P.style.borderRightColor = (L && k) || ""),
							(P.style.borderLeftWidth = k && !L ? "1px" : ""),
							(P.style.borderLeftStyle = k && !L ? "solid" : ""),
							(P.style.borderLeftColor = L ? "" : k || ""),
							(P.style.outlineColor = this.w(a.$BGb) ?? ""),
							this.j("theme", this.h);
					}
					create(P, k) {
						(this.element = P),
							this.f && this.f.dispose(),
							(this.f = (0, s.$8uc)(
								this.element,
								this.g,
								this.j,
								this.u,
								this.y,
								this.J,
								this.M,
								this.m,
								this.r,
								this.N,
								this.O,
								this.P,
								this.openPaneComposite.bind(this),
								() => {
									this.Q.info(
										`To hide the sidebar, use the icon in the top right, or press ${this.J.lookupKeybinding("workbench.action.toggleSidebarVisibility")?.getLabel()}.`,
									);
								},
							)),
							this.updateStyles();
					}
					getContainer() {
						return this.element;
					}
					toJSON() {
						return { type: w.Parts.SIDEBAR_PART };
					}
					layout(P, k, L, D) {
						this.s.isVisible(w.Parts.SIDEBAR_PART) &&
							this.j("dimensionOfEntireSidebar", new f.$pgb(P, k));
					}
					get onDidPaneCompositeOpen() {
						return m.Event.map(this.b.event, (P) => P.composite);
					}
					get onDidPaneCompositeClose() {
						return this.c.event;
					}
					async openPaneComposite(P, k) {
						return (
							this.s.isVisible(w.Parts.SIDEBAR_PART) ||
								this.s.setPartHidden(!1, w.Parts.SIDEBAR_PART),
							this.j("showComposite", !0),
							P && this.j("activeViewContainerID", P),
							k && this.g.activeComposite?.composite.focus(),
							this.g.activeComposite &&
								this.b.fire({
									composite: this.g.activeComposite.composite,
									focus: k ?? !1,
								}),
							this.g.activeComposite?.composite
						);
					}
					getActivePaneComposite() {
						return this.g.activeComposite?.composite;
					}
					getPaneComposite(P) {
						return this.getPaneComposites().filter((k) => k.id === P)[0];
					}
					getPaneComposites() {
						return this.m
							.getPaneComposites()
							.sort((P, k) =>
								typeof P.order != "number"
									? -1
									: typeof k.order != "number"
										? 1
										: P.order - k.order,
							);
					}
					getProgressIndicator(P) {
						const k = this.g.activeComposite;
						if (P === k?.composite.getId()) return k.progress;
					}
					getLastActivePaneCompositeId() {
						return this.g.activeViewContainerID;
					}
					get onDidChange() {
						return this.Y.event;
					}
					hideActivePaneComposite() {
						this.s.isVisible(w.Parts.SIDEBAR_PART) &&
							this.s.setPartHidden(!0, w.Parts.SIDEBAR_PART),
							this.g.activeComposite &&
								this.c.fire(this.g.activeComposite.composite),
							this.j("showComposite", !1),
							this.j("activeComposite", void 0);
					}
					getPinnedPaneCompositeIds() {
						return this.getPaneComposites().map((P) => P.id);
					}
					getVisiblePaneCompositeIds() {
						return this.getPaneComposites().map((P) => P.id);
					}
					showActivity(P, k, L, D) {
						return (0, b.$Yc)(() => {});
					}
				};
				(e.$9uc = I),
					(e.$9uc = I =
						Ne(
							[
								j(0, r.$iP),
								j(1, E.$lq),
								j(2, w.$mEb),
								j(3, n.$q2),
								j(4, d.$Li),
								j(5, p.$K1),
								j(6, C.$uZ),
								j(7, y.$gj),
								j(8, c.$6j),
								j(9, $.$0zb),
								j(10, v.$ek),
								j(11, S.$7rb),
								j(12, h.$4N),
							],
							I,
						));
			},
		),
		define(
			de[4122],
			he([1, 0, 6, 28, 20, 5, 1938, 1939, 1940, 60, 142, 3, 10, 58, 4121]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0uc = void 0);
				let g = class extends a.$1c {
					constructor(o, f) {
						super(), (this.a = new Map());
						const b = f.getValue(c.$LW),
							s = o.createInstance(d.$Quc),
							l = o.createInstance(C.$Puc),
							y =
								b === "vertical"
									? { case: "vertical", v: o.createInstance(m.$Uuc) }
									: { case: "horizontal", v: o.createInstance(n.$9uc) };
						this.a.set(r.ViewContainerLocation.Panel, s),
							this.a.set(r.ViewContainerLocation.Sidebar, y.v),
							this.a.set(r.ViewContainerLocation.AuxiliaryBar, l);
						const $ = this.D(new a.$Zc());
						(this.onDidPaneCompositeOpen = t.Event.any(
							...r.$I1.map((v) =>
								t.Event.map(
									this.a.get(v).onDidPaneCompositeOpen,
									(S) => ({ composite: S, viewContainerLocation: v }),
									$,
								),
							),
						)),
							(this.onDidPaneCompositeClose = t.Event.any(
								...r.$I1.map((v) =>
									t.Event.map(
										this.a.get(v).onDidPaneCompositeClose,
										(S) => ({ composite: S, viewContainerLocation: v }),
										$,
									),
								),
							));
					}
					openPaneComposite(o, f, b) {
						return this.b(f).openPaneComposite(o, b);
					}
					getActivePaneComposite(o) {
						return this.b(o).getActivePaneComposite();
					}
					getPaneComposite(o, f) {
						return this.b(f).getPaneComposite(o);
					}
					getPaneComposites(o) {
						return this.b(o).getPaneComposites();
					}
					getPinnedPaneCompositeIds(o) {
						return this.b(o).getPinnedPaneCompositeIds();
					}
					getVisiblePaneCompositeIds(o) {
						return this.b(o).getVisiblePaneCompositeIds();
					}
					getProgressIndicator(o, f) {
						return this.b(f).getProgressIndicator(o);
					}
					hideActivePaneComposite(o) {
						this.b(o).hideActivePaneComposite();
					}
					getLastActivePaneCompositeId(o) {
						return this.b(o).getLastActivePaneCompositeId();
					}
					b(o) {
						return (0, i.$wg)(this.a.get(o));
					}
				};
				(e.$0uc = g),
					(e.$0uc = g = Ne([j(0, E.$Li), j(1, h.$gj)], g)),
					(0, w.$lK)(u.$6Sb, g, w.InstantiationType.Delayed);
			},
		),
		define(
			de[4123],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 13, 36, 14, 79, 26, 2673, 2657, 735, 191, 47,
				2360,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5Yc = e.$3Yc = void 0),
					(e.$4Yc = O),
					(c = mt(c)),
					(n = mt(n));
				const f = (0, t.template)('<button class="docs--button">submit'),
					b = (0, t.template)('<button class="docs--button">use documenation'),
					s = (0, t.template)(
						'<div class="docs__subtitle">Requests in progress:',
					),
					l = (0, t.template)(
						'<div class="docs__subtitle">Your documentation is ready to be used!',
					),
					y = (0, t.template)(
						'<div class="docs__subtitle">There was an error uploading your documentation.',
					),
					$ = (0, t.template)(
						'<div class="docs__subtitle">There is already a similar documentation that exists.',
					),
					v = (0, t.template)(
						'<div class="docs--selected-doc"><div class="docs--selected-doc__title">Enter a link above to add docs',
					),
					S = (0, t.template)(
						'<div class="docs__title">Previously selected docs.',
					),
					I = (0, t.template)(
						'<div class="docs__subtitle">These are the docs that you have previously selected.',
					),
					T = (0, t.template)(
						`<div class="docs-container-backing"><div class="docs-container"><div class="docs__title">Show documentation to the AI</div><div class="docs__subtitle">Paste a link to a library's documentation to improve our chat AI's answers about the library.</div><div></div><div></div><div class="docs__title">Docs currently in context</div><div class="docs__subtitle">These are the docs that the chat AI can currently see.`,
					),
					P = (0, t.template)(
						'<div class="docs--selected-doc__subtitle">(url: <!>)',
					),
					k = (0, t.template)(
						'<div class="docs--selected-doc"><div class="docs--selected-doc__title"></div>&nbsp;',
					),
					L = (0, t.template)("<div>Something went wrong"),
					D = (0, t.template)("<div>"),
					M = (0, t.template)("<span>"),
					N = (z) => {
						const [F, x] = (0, m.createSignal)([]),
							[H, q] = (0, m.createSignal)(),
							V = (ne) => {
								q({ name: ne, identifier: ne, url: ne }),
									x(
										z
											.options()
											.filter((ee) =>
												ee.name.toLowerCase().includes(ne.toLowerCase()),
											),
									);
							},
							G = (ne, ee) => {
								ne && ee === "manual" && x(z.options());
							},
							K = (ne) => {
								if (!ne) return !1;
								try {
									return new URL(ne), !0;
								} catch {
									return !1;
								}
							},
							J = () => {
								const ne = H();
								return ne
									? K(H()?.url) ||
										z
											.options()
											.map((ee) => ee.name)
											.includes(ne.name) ||
										ne.name === ""
										? "valid"
										: "invalid"
									: "valid";
							},
							[W, X] = (0, m.createSignal)(!1),
							[Y, ie] = (0, m.createSignal)(!1);
						return (
							(0, m.createEffect)(() => {
								z.uploadStatus() !== "no-ongoing-request" &&
									(z.uploadStatus() === g.UploadResponse_Status.SUCCESS &&
										(ie(!0), X(!0)),
									z.uploadStatus() === g.UploadResponse_Status.FAILURE &&
										(ie(!0), X(!1)),
									z.uploadStatus() === g.UploadResponse_Status.ALREADY_EXISTS &&
										(ie(!0), X(!0)),
									z.uploadStatus() ===
										g.UploadResponse_Status.SIMILAR_ALREADY_EXISTS &&
										(ie(!0), X(!1)));
							}),
							(() => {
								const ne = T(),
									ee = ne.firstChild,
									_ = ee.firstChild,
									te = _.nextSibling,
									Q = te.nextSibling,
									Z = Q.nextSibling,
									se = Z.nextSibling,
									re = se.nextSibling;
								return (
									ne.addEventListener("click", (le) => {
										z.close(), le.stopPropagation();
									}),
									ee.addEventListener("click", (le) => {
										le.stopPropagation();
									}),
									Q.style.setProperty("width", "100%"),
									Q.style.setProperty("height", "100%"),
									Q.style.setProperty("margin-right", "auto"),
									(0, C.insert)(
										Q,
										(0, d.createComponent)(c.Root, {
											get options() {
												return F().map((le) => le.name);
											},
											get value() {
												return H()?.name;
											},
											onInputChange: V,
											onOpenChange: G,
											onChange: (le) => {
												q({ name: le, identifier: le, url: le });
											},
											placeholder: "E.g. https://codemirror.net/docs/",
											virtualized: !0,
											required: !0,
											shouldFocusWrap: !0,
											disallowEmptySelection: !0,
											get validationState() {
												return J();
											},
											itemComponent: (le) =>
												(0, d.createComponent)(c.Item, {
													class: "docs--combobox__item",
													get item() {
														return le.item;
													},
													get children() {
														return (0, d.createComponent)(c.ItemLabel, {
															get children() {
																return le.item.rawValue;
															},
														});
													},
												}),
											get children() {
												return (0, d.createComponent)(c.Control, {
													class: "docs--combobox__control",
													get children() {
														return (0, d.createComponent)(c.Input, {
															class: "docs--combobox__input",
														});
													},
												});
											},
										}),
									),
									(0, C.insert)(
										ee,
										(0, d.createComponent)(n.Root, {
											style: {
												height: "1px",
												width: "100%",
												color: "transparent",
												background: "transparent",
												border: "none",
												outline: "none",
											},
										}),
										Z,
									),
									Z.style.setProperty("display", "flex"),
									Z.style.setProperty("flex-direction", "row"),
									Z.style.setProperty("margin-left", "auto"),
									Z.style.setProperty("margin-right", "14px"),
									(0, C.insert)(
										Z,
										(0, d.createComponent)(m.Show, {
											get when() {
												return K(H()?.url);
											},
											get children() {
												return [
													(0, d.createComponent)(B, {}),
													(() => {
														const le = f();
														return (
															le.addEventListener("mousedown", async (oe) => {
																ie(!0), await z.submitUrl(H()?.url);
															}),
															le
														);
													})(),
												];
											},
										}),
										null,
									),
									(0, C.insert)(
										Z,
										(0, d.createComponent)(m.Show, {
											get when() {
												return (
													(0, E.memo)(
														() => H() !== void 0 && H()?.name !== "",
													)() &&
													z
														.options()
														.map((le) => le.name)
														.includes(H()?.name)
												);
											},
											get children() {
												return [
													(0, d.createComponent)(B, {}),
													(() => {
														const le = b();
														return (
															le.addEventListener("mousedown", (oe) => {
																ie(!0);
																let ae = H();
																ae && z.submitDoc(ae);
															}),
															le
														);
													})(),
												];
											},
										}),
										null,
									),
									(0, C.insert)(
										ee,
										(0, d.createComponent)(m.Show, {
											get when() {
												return Y();
											},
											get children() {
												return [
													(0, d.createComponent)(m.Show, {
														get when() {
															return z.ongoingRequests().length > 0;
														},
														get children() {
															return [
																s(),
																(0, d.createComponent)(m.For, {
																	get each() {
																		return z.ongoingRequests();
																	},
																	children: (le) =>
																		(() => {
																			const oe = k(),
																				ae = oe.firstChild,
																				pe = ae.nextSibling;
																			return (
																				(0, C.insert)(ae, () => le.doc.name),
																				(0, C.insert)(
																					oe,
																					(0, d.createComponent)(m.Show, {
																						get when() {
																							return le.doc.url !== "";
																						},
																						get children() {
																							const $e = P(),
																								ye = $e.firstChild,
																								ue = ye.nextSibling,
																								fe = ue.nextSibling;
																							return (
																								(0, C.insert)(
																									$e,
																									() => le.doc.url,
																									ue,
																								),
																								$e
																							);
																						},
																					}),
																					null,
																				),
																				oe
																			);
																		})(),
																}),
															];
														},
													}),
													(0, d.createComponent)(m.Show, {
														get when() {
															return W();
														},
														get children() {
															return l();
														},
													}),
													(0, d.createComponent)(m.Show, {
														get when() {
															return !W();
														},
														get children() {
															return (0, d.createComponent)(m.Switch, {
																get fallback() {
																	return L();
																},
																get children() {
																	return [
																		(0, d.createComponent)(m.Match, {
																			get when() {
																				return (
																					z.uploadStatus() ===
																					g.UploadResponse_Status.FAILURE
																				);
																			},
																			get children() {
																				return y();
																			},
																		}),
																		(0, d.createComponent)(m.Match, {
																			get when() {
																				return (
																					z.uploadStatus() ===
																					g.UploadResponse_Status
																						.SIMILAR_ALREADY_EXISTS
																				);
																			},
																			get children() {
																				return $();
																			},
																		}),
																	];
																},
															});
														},
													}),
												];
											},
										}),
										se,
									),
									(0, C.insert)(
										ee,
										(0, d.createComponent)(n.Root, {
											class: "docs--separator__root",
										}),
										se,
									),
									(0, C.insert)(
										ee,
										(0, d.createComponent)(m.Show, {
											get when() {
												return z.currentlySelectedDocs().length === 0;
											},
											get children() {
												return v();
											},
										}),
										null,
									),
									(0, C.insert)(
										ee,
										(0, d.createComponent)(m.Show, {
											get when() {
												return z.currentlySelectedDocs().length > 0;
											},
											get children() {
												return (0, d.createComponent)(m.For, {
													get each() {
														return z.currentlySelectedDocs();
													},
													children: (le) =>
														(() => {
															const oe = k(),
																ae = oe.firstChild,
																pe = ae.nextSibling;
															return (
																(0, C.insert)(ae, () => le.name),
																(0, C.insert)(
																	oe,
																	(0, d.createComponent)(m.Show, {
																		get when() {
																			return le.url !== "";
																		},
																		get children() {
																			const $e = P(),
																				ye = $e.firstChild,
																				ue = ye.nextSibling,
																				fe = ue.nextSibling;
																			return (
																				(0, C.insert)($e, () => le.url, ue), $e
																			);
																		},
																	}),
																	null,
																),
																oe
															);
														})(),
												});
											},
										}),
										null,
									),
									(0, C.insert)(
										ee,
										(0, d.createComponent)(m.Show, {
											get when() {
												return (
													(0, E.memo)(() => !!z.previouslySelectedDocs())() &&
													z.previouslySelectedDocs().length > 0
												);
											},
											get children() {
												return [
													(0, d.createComponent)(n.Root, {
														class: "docs--separator__root",
													}),
													S(),
													I(),
													(0, d.createComponent)(m.For, {
														get each() {
															return z.previouslySelectedDocs().slice(0, 5);
														},
														children: (le) =>
															(() => {
																const oe = k(),
																	ae = oe.firstChild,
																	pe = ae.nextSibling;
																return (
																	(0, C.insert)(ae, () => le.name),
																	(0, C.insert)(
																		oe,
																		(0, d.createComponent)(m.Show, {
																			get when() {
																				return le.url !== "";
																			},
																			get children() {
																				const $e = P(),
																					ye = $e.firstChild,
																					ue = ye.nextSibling,
																					fe = ue.nextSibling;
																				return (
																					(0, C.insert)($e, () => le.url, ue),
																					$e
																				);
																			},
																		}),
																		null,
																	),
																	oe
																);
															})(),
													}),
												];
											},
										}),
										null,
									),
									ne
								);
							})()
						);
					};
				e.$3Yc = N;
				const A = (0, a.$$O)(
						"docs-chevron-down",
						u.$ak.chevronDown,
						"Icon for the chevron down",
					),
					R = (0, a.$$O)(
						"tabbar-remove-chat",
						u.$ak.x,
						"Icon for the close button",
					);
				function O(z) {
					const F = (0, r.$odc)(),
						[x, H] = (0, m.createSignal)(!1),
						[q, V] = (0, m.createSignal)("no-ongoing-request"),
						[G, K] = (0, m.createSignal)([]),
						J = () =>
							F.reactiveStorageService.applicationUserPersistentStorage
								.docState,
						W = () => J().previosulyUsedDocs,
						X = () => {
							const ee = J().visibleDocs;
							return ee.filter(
								(te, Q) => ee.findIndex((Z) => Z.name === te.name) === Q,
							);
						},
						Y = () => J().usableDocs,
						ie = async (ee) => {
							const _ = await F.aiService.uploadClient(),
								te = { identifier: ee, name: ee, url: ee };
							H(!0);
							const Q = await _.uploadDocumentation(
								{
									docIdentifier: te.identifier,
									metadata: { docName: te.name, prefixUrl: te.url },
								},
								{ headers: (0, p.$m6b)((0, o.$9g)()) },
							);
							V(Q.status);
							const Z = G();
							K([
								...Z,
								{ doc: te, status: g.UploadedStatus_Status.IN_PROGRESS },
							]);
							const se = async () => {
								const re = await _.uploadDocumentationStatus(
									{ docIdentifier: ee },
									{ headers: (0, p.$m6b)((0, o.$9g)()) },
								);
								if (
									(re.status !== g.UploadedStatus_Status.SUCCEEDED &&
										(K(
											G().map((le) =>
												le.doc.identifier === te.identifier
													? { doc: le.doc, status: re.status }
													: le,
											),
										),
										setTimeout(se, 1e3)),
									re.status === g.UploadedStatus_Status.SUCCEEDED)
								) {
									K(
										G().map((ae) =>
											ae.doc.identifier === te.identifier
												? { doc: ae.doc, status: re.status }
												: ae,
										),
									);
									const le = Y();
									F.reactiveStorageService.setApplicationUserPersistentStorage(
										"docState",
										{ usableDocs: [...le, te] },
									);
									const oe = W();
									F.reactiveStorageService.setApplicationUserPersistentStorage(
										"docState",
										{ previosulyUsedDocs: [...oe, te] },
									);
								}
							};
							se();
						},
						ne = async (ee) => {
							const _ = new Set(Y().map((te) => te.identifier));
							try {
								return (
									_.has(ee.identifier) ||
										(F.reactiveStorageService.setApplicationUserPersistentStorage(
											"docState",
											{ usableDocs: [...Y(), ee] },
										),
										F.reactiveStorageService.setApplicationUserPersistentStorage(
											"docState",
											{ previosulyUsedDocs: [...W(), ee] },
										)),
									!0
								);
							} catch {
								return !1;
							}
						};
					return (0, d.createComponent)(m.ErrorBoundary, {
						fallback: (ee) => (
							F.notificationService.error(
								"There was an error opening the documentation modal. Please report to admin@cursor.so",
							),
							console.error(ee),
							D()
						),
						get children() {
							return (0, d.createComponent)(e.$3Yc, {
								options: X,
								get close() {
									return z.close;
								},
								get chevronDown() {
									return (() => {
										const ee = D();
										return (
											ee.style.setProperty("height", "100%"),
											ee.style.setProperty("width", "100%"),
											ee.style.setProperty("border", "none"),
											ee.style.setProperty("outline", "none"),
											(0, w.effect)(() =>
												(0, i.className)(
													ee,
													[h.ThemeIcon.asClassName(A)].join(" "),
												),
											),
											ee
										);
									})();
								},
								previouslySelectedDocs: W,
								currentlySelectedDocs: Y,
								submitUrl: ie,
								submitDoc: ne,
								uploadStatus: q,
								ongoingRequests: G,
							});
						},
					});
				}
				const B = () =>
						(() => {
							const z = D();
							return z.style.setProperty("flex-grow", "1"), z;
						})(),
					U = (z) => {
						const [F, x] = (0, m.createSignal)(1),
							H = (0, r.$odc)();
						return (
							(0, m.createEffect)(() => {
								if (!z.show) return;
								x(1);
								const q = H.window.setInterval(() => {
									x((V) => (V === 3 ? 0 : V + 1));
								}, 175);
								(0, m.onCleanup)(() => {
									H.window.clearInterval(q);
								});
							}),
							(() => {
								const q = M();
								return (
									q.style.setProperty("user-select", "text"),
									(0, C.insert)(
										q,
										(0, d.createComponent)(m.Show, {
											get when() {
												return z.show;
											},
											get fallback() {
												return "\xA0";
											},
											get children() {
												return [
													(0, E.memo)(() => ".".repeat(F())),
													(0, d.createComponent)(m.Show, {
														get when() {
															return F() === 0;
														},
														get children() {
															return "\xA0";
														},
													}),
												];
											},
										}),
									),
									q
								);
							})()
						);
					};
				e.$5Yc = U;
			},
		),
		
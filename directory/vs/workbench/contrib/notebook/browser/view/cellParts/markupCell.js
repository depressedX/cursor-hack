define(
			de[3500],
			he([
				1, 0, 7, 182, 15, 33, 14, 26, 3, 206, 71, 61, 597, 4, 91, 10, 8, 5, 128,
				39, 108, 284, 836, 964,
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
					(e.$03b = void 0),
					(t = mt(t));
				let v = class extends m.$1c {
					constructor(I, T, P, k, L, D, M, N, A, R) {
						super(),
							(this.r = I),
							(this.s = T),
							(this.t = P),
							(this.u = k),
							(this.w = L),
							(this.y = D),
							(this.z = M),
							(this.C = N),
							(this.F = A),
							(this.G = R),
							(this.a = null),
							(this.f = this.D(new m.$Zc())),
							(this.g = this.D(new m.$2c())),
							(this.h = this.D(new m.$Zc())),
							(this.q = !1),
							this.H(),
							(this.c = P.editorPart),
							(this.m = this.D(
								new y.$J3b(
									this.r.getBaseCellEditorOptions(T.language),
									this.r.notebookOptions,
									this.F,
								),
							)),
							this.m.setLineNumbers(this.s.lineNumbers),
							(this.n = this.m.getValue(this.s.internalMetadata, this.s.uri)),
							this.D((0, m.$Yc)(() => k.delete(this.s))),
							this.I(),
							this.t.cellParts.scheduleRenderCell(this.s),
							this.D(
								(0, m.$Yc)(() => {
									this.t.cellParts.unrenderCell(this.s);
								}),
							),
							this.D(
								this.w.onDidChangeScreenReaderOptimized(() => {
									this.Q();
								}),
							),
							this.M(),
							this.N(),
							(this.j = T.foldingState),
							this.ab(),
							this.P(),
							this.s.layoutInfo.totalHeight > 0 && this.relayoutCell(),
							this.O(),
							this.Q(),
							this.layoutCellParts(),
							this.D(
								this.s.onDidChangeLayout(() => {
									this.layoutCellParts();
								}),
							);
					}
					layoutCellParts() {
						this.t.cellParts.updateInternalLayoutNow(this.s);
					}
					H() {
						const I = `aria-markup-cell-${this.s.id}`;
						(this.b = this.t.cellContainer),
							(this.b.id = I),
							(this.b.style.height = "1px"),
							(this.b.style.overflow = "hidden"),
							(this.b.style.position = "absolute"),
							(this.b.style.top = "100000px"),
							(this.b.style.left = "10000px"),
							(this.b.ariaHidden = "false"),
							this.t.rootContainer.setAttribute("aria-describedby", I),
							this.t.container.classList.toggle(
								"webview-backed-markdown-cell",
								!0,
							);
					}
					I() {
						this.D(
							this.s.onDidChangeState((I) => {
								this.t.cellParts.updateState(this.s, I);
							}),
						),
							this.D(
								this.s.model.onDidChangeMetadata(() => {
									this.Q();
								}),
							),
							this.D(
								this.s.onDidChangeState((I) => {
									if (
										((I.editStateChanged || I.contentChanged) && this.Q(),
										I.focusModeChanged && this.N(),
										I.foldingStateChanged)
									) {
										const T = this.s.foldingState;
										T !== this.j && ((this.j = T), this.ab());
									}
									I.cellIsHoveredChanged && this.M(),
										I.inputCollapsedChanged && (this.L(), this.Q()),
										I.cellLineNumberChanged &&
											this.m.setLineNumbers(this.s.lineNumbers);
								}),
							),
							this.D(
								this.r.notebookOptions.onDidChangeOptions((I) => {
									I.showFoldingControls && this.P();
								}),
							),
							this.D(
								this.s.onDidChangeLayout((I) => {
									const T = this.a?.getLayoutInfo();
									I.outerWidth &&
										this.s.getEditState() === s.CellEditState.Editing &&
										T &&
										T.width !== this.s.layoutInfo.editorWidth &&
										this.Z();
								}),
							),
							this.D(this.m.onDidChange(() => this.J()));
					}
					J() {
						if (
							(this.updateEditorOptions(
								this.m.getUpdatedValue(this.s.internalMetadata, this.s.uri),
							),
							this.a)
						) {
							this.a.updateOptions(
								this.m.getUpdatedValue(this.s.internalMetadata, this.s.uri),
							);
							const I = new E.$Ce();
							this.D({
								dispose() {
									I.dispose(!0);
								},
							}),
								(0, w.$Ah)(this.s.resolveTextModel(), I.token).then((T) => {
									this.q ||
										(T &&
											T.updateOptions({
												indentSize: this.m.indentSize,
												tabSize: this.m.tabSize,
												insertSpaces: this.m.insertSpaces,
											}));
								});
						}
					}
					L() {
						this.s.isInputCollapsed
							? this.r.hideMarkupPreviews([this.s])
							: this.r.unhideMarkupPreviews([this.s]);
					}
					M() {
						this.t.container.classList.toggle(
							"markdown-cell-hover",
							this.s.cellIsHovered,
						);
					}
					N() {
						this.s.focusMode === s.CellFocusMode.Editor && this.X(),
							this.t.container.classList.toggle(
								"cell-editor-focus",
								this.s.focusMode === s.CellFocusMode.Editor,
							);
					}
					O() {
						this.D(
							this.s.onCellDecorationsChanged((I) => {
								I.added.forEach((T) => {
									T.className &&
										(this.r.deltaCellContainerClassNames(
											this.s.id,
											[T.className],
											[],
										),
										this.t.rootContainer.classList.add(T.className));
								}),
									I.removed.forEach((T) => {
										T.className &&
											(this.r.deltaCellContainerClassNames(
												this.s.id,
												[],
												[T.className],
											),
											this.t.rootContainer.classList.remove(T.className));
									});
							}),
						),
							this.s.getCellDecorations().forEach((I) => {
								I.className &&
									(this.r.deltaCellContainerClassNames(
										this.s.id,
										[I.className],
										[],
									),
									this.t.rootContainer.classList.add(I.className));
							});
					}
					dispose() {
						(this.q = !0),
							this.r.getActiveCell() === this.s &&
								this.s.focusMode === s.CellFocusMode.Editor &&
								(this.r.hasEditorFocus() ||
									this.r.getDomNode().ownerDocument.activeElement ===
										this.r.getDomNode().ownerDocument.body) &&
								this.r.focusContainer(),
							this.s.detachTextEditor(),
							super.dispose();
					}
					P() {
						const I =
							this.r.notebookOptions.getDisplayOptions().showFoldingControls;
						this.t.foldingIndicator.classList.remove("mouseover", "always"),
							this.t.foldingIndicator.classList.add(I);
					}
					Q() {
						this.s.isInputCollapsed
							? this.R()
							: this.s.getEditState() === s.CellEditState.Editing
								? this.U()
								: this.W();
					}
					R() {
						t.show(this.t.cellInputCollapsedContainer),
							t.hide(this.c),
							(this.t.cellInputCollapsedContainer.innerText = ""),
							t
								.$fhb(this.t.cellInputCollapsedContainer, t.$("span"))
								.classList.add(...d.ThemeIcon.asClassNameArray(C.$ak.markdown));
						const T = t.$("div");
						T.classList.add("cell-collapse-preview");
						const P = this.S(this.s.textBuffer, this.s.language);
						t.$Dhb(T, P), this.t.cellInputCollapsedContainer.appendChild(T);
						const k = t.$fhb(T, t.$("span.expandInputIcon"));
						k.classList.add(...d.ThemeIcon.asClassNameArray(C.$ak.more));
						const L = this.G.lookupKeybinding(s.$7Ib);
						L &&
							((T.title = (0, c.localize)(8208, null, L.getLabel())),
							(k.title = (0, c.localize)(8209, null, L.getLabel()))),
							(this.b.ariaHidden = "true"),
							this.t.container.classList.toggle("input-collapsed", !0),
							(this.s.renderedMarkdownHeight = 0),
							this.s.layoutChange({});
					}
					S(I, T) {
						return (0, h.$bwb)(this.C, I.getLineContent(1), T);
					}
					U() {
						let I;
						if (
							(t.show(this.c),
							(this.b.ariaHidden = "true"),
							t.hide(this.t.cellInputCollapsedContainer),
							this.r.hideMarkupPreviews([this.s]),
							this.t.container.classList.toggle("input-collapsed", !1),
							this.t.container.classList.toggle("markdown-cell-edit-mode", !0),
							this.a && this.a.hasModel())
						)
							(I = this.a.getContentHeight()),
								this.s.attachTextEditor(this.a),
								this.X(),
								this.bb(this.a),
								this.a.layout({
									width: this.s.layoutInfo.editorWidth,
									height: I,
								});
						else {
							this.h.clear();
							const T = this.r.notebookOptions.computeMarkdownCellEditorWidth(
									this.r.getLayoutInfo().width,
								),
								P = this.s.lineCount,
								k = this.s.layoutInfo.fontInfo?.lineHeight || 17,
								L = this.r.notebookOptions.computeEditorPadding(
									this.s.internalMetadata,
									this.s.uri,
								);
							(I = Math.max(P, 1) * k + L.top + L.bottom),
								(this.t.editorContainer.innerText = "");
							const D = this.y.createScoped(this.t.editorPart);
							u.EditorContextKeys.inCompositeEditor.bindTo(D).set(!0);
							const M = this.h.add(this.z.createChild(new f.$Ki([p.$6j, D])));
							this.h.add(D),
								(this.a = this.h.add(
									M.createInstance(
										r.$rwb,
										this.t.editorContainer,
										{ ...this.n, dimension: { width: T, height: I } },
										{
											contributions:
												this.r.creationOptions.cellEditorContributions,
										},
									),
								)),
								(this.t.currentEditor = this.a),
								this.h.add(
									this.a.onDidBlurEditorWidget(() => {
										this.a && $.$rPb.get(this.a)?.stopHighlighting();
									}),
								),
								this.h.add(
									this.a.onDidFocusEditorWidget(() => {
										this.a && $.$rPb.get(this.a)?.restoreViewState(!0);
									}),
								);
							const N = new E.$Ce();
							this.h.add({
								dispose() {
									N.dispose(!0);
								},
							}),
								(0, w.$Ah)(this.s.resolveTextModel(), N.token).then((A) => {
									if (!A) return;
									this.a.setModel(A),
										A.updateOptions({
											indentSize: this.m.indentSize,
											tabSize: this.m.tabSize,
											insertSpaces: this.m.insertSpaces,
										});
									const R = this.a.getContentHeight();
									R !== I && (this.a.layout({ width: T, height: R }), (I = R)),
										this.s.attachTextEditor(this.a),
										this.s.getEditState() === s.CellEditState.Editing &&
											this.X(),
										this.bb(this.a),
										(this.s.editorHeight = I);
								});
						}
						(this.s.editorHeight = I), this.X(), this.u.set(this.s, this.a);
					}
					W() {
						this.s.detachTextEditor(),
							t.hide(this.c),
							t.hide(this.t.cellInputCollapsedContainer),
							(this.b.ariaHidden = "false"),
							this.t.container.classList.toggle("input-collapsed", !1),
							this.t.container.classList.toggle("markdown-cell-edit-mode", !1),
							this.u.delete(this.s),
							(this.b.innerText = ""),
							this.s.renderedHtml &&
								(this.w.isScreenReaderOptimized()
									? t.$Dhb(this.b, this.s.renderedHtml)
									: t.$9fb(this.b)),
							this.r.createMarkupPreview(this.s);
					}
					X() {
						if (
							this.s.focusMode === s.CellFocusMode.Editor &&
							(this.r.hasEditorFocus() ||
								this.r.getDomNode().ownerDocument.activeElement ===
									this.r.getDomNode().ownerDocument.body)
						) {
							if (!this.a) return;
							this.a.focus();
							const I = this.a.getSelection();
							if (!I) return;
							this.r.revealRangeInViewAsync(this.s, I);
						}
					}
					Y(I) {
						this.a?.layout(I);
					}
					Z() {
						const I = this.a.getContentHeight();
						this.Y({ width: this.s.layoutInfo.editorWidth, height: I });
					}
					relayoutCell() {
						this.r.layoutNotebookCell(this.s, this.s.layoutInfo.totalHeight),
							this.ab();
					}
					updateEditorOptions(I) {
						(this.n = I), this.a?.updateOptions(this.n);
					}
					ab() {
						switch (this.j) {
							case s.CellFoldingState.None:
								(this.t.foldingIndicator.style.display = "none"),
									(this.t.foldingIndicator.innerText = "");
								break;
							case s.CellFoldingState.Collapsed:
								(this.t.foldingIndicator.style.display = ""),
									t.$hhb(this.t.foldingIndicator, (0, i.$Tib)(l.$kOb));
								break;
							case s.CellFoldingState.Expanded:
								(this.t.foldingIndicator.style.display = ""),
									t.$hhb(this.t.foldingIndicator, (0, i.$Tib)(l.$lOb));
								break;
							default:
								break;
						}
					}
					bb(I) {
						this.f.clear(),
							this.g.clear(),
							this.f.add(
								I.onDidContentSizeChange((P) => {
									P.contentHeightChanged && this.cb(I, P.contentHeight);
								}),
							),
							this.f.add(
								I.onDidChangeCursorSelection((P) => {
									if (P.source === "restoreState") return;
									const k = I.getSelections();
									if (k?.length) {
										const L = I.getContentHeight(),
											D = this.s.layoutInfo.editorHeight;
										L !== D && this.cb(I, L);
										const M = k[k.length - 1];
										this.r.revealRangeInViewAsync(this.s, M);
									}
								}),
							);
						const T = () =>
							(this.s.focusMode = I.hasWidgetFocus()
								? s.CellFocusMode.Editor
								: s.CellFocusMode.Container);
						this.f.add(
							I.onDidFocusEditorWidget(() => {
								T();
							}),
						),
							this.f.add(
								I.onDidBlurEditorWidget(() => {
									this.t.container.ownerDocument.activeElement?.contains(
										this.t.container,
									)
										? (this.g.value = (0, w.$Oh)(() => T(), 300))
										: T();
								}),
							),
							T();
					}
					cb(I, T) {
						const P = I.getLayoutInfo();
						(this.s.editorHeight = T), I.layout({ width: P.width, height: T });
					}
				};
				(e.$03b = v),
					(e.$03b = v =
						Ne(
							[
								j(4, n.$XK),
								j(5, p.$6j),
								j(6, o.$Li),
								j(7, a.$nM),
								j(8, g.$gj),
								j(9, b.$uZ),
							],
							v,
						));
			},
		),
		
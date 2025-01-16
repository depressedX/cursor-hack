define(de[3474], he([1, 0, 7, 194, 294, 70]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$S3b = void 0),
				(t = mt(t));
			class C extends w.$A1b {
				constructor(m, r, u, a, h, c) {
					super(),
						(this.notebookEditor = m),
						(this.titleToolbar = r),
						(this.top = u),
						(this.left = a),
						(this.right = h),
						(this.bottom = c),
						(this.codeFocusIndicator = new i.$Rhb(
							t.$fhb(
								this.left.domNode,
								t.$(
									".codeOutput-focus-indicator-container",
									void 0,
									t.$(".codeOutput-focus-indicator.code-focus-indicator"),
								),
							),
						)),
						(this.outputFocusIndicator = new i.$Rhb(
							t.$fhb(
								this.left.domNode,
								t.$(
									".codeOutput-focus-indicator-container",
									void 0,
									t.$(".codeOutput-focus-indicator.output-focus-indicator"),
								),
							),
						)),
						this.D(
							t.$0fb(this.codeFocusIndicator.domNode, t.$$gb.CLICK, () => {
								this.c && (this.c.isInputCollapsed = !this.c.isInputCollapsed);
							}),
						),
						this.D(
							t.$0fb(this.outputFocusIndicator.domNode, t.$$gb.CLICK, () => {
								this.c &&
									(this.c.isOutputCollapsed = !this.c.isOutputCollapsed);
							}),
						),
						this.D(
							t.$0fb(this.left.domNode, t.$$gb.DBLCLICK, (n) => {
								if (
									!this.c ||
									!this.notebookEditor.hasModel() ||
									n.target !== this.left.domNode
								)
									return;
								n.offsetY < this.c.layoutInfo.outputContainerOffset
									? (this.c.isInputCollapsed = !this.c.isInputCollapsed)
									: (this.c.isOutputCollapsed = !this.c.isOutputCollapsed);
							}),
						),
						this.D(
							this.titleToolbar.onDidUpdateActions(() => {
								this.a();
							}),
						);
				}
				updateInternalLayoutNow(m) {
					if (m.cellKind === E.CellKind.Markup) {
						const r =
							this.notebookEditor.notebookOptions.computeIndicatorPosition(
								m.layoutInfo.totalHeight,
								m.layoutInfo.foldHintHeight,
								this.notebookEditor.textModel?.viewType,
							);
						(this.bottom.domNode.style.transform = `translateY(${r.bottomIndicatorTop + 6}px)`),
							this.left.setHeight(r.verticalIndicatorHeight),
							this.right.setHeight(r.verticalIndicatorHeight),
							this.codeFocusIndicator.setHeight(
								r.verticalIndicatorHeight -
									this.b() * 2 -
									m.layoutInfo.chatHeight,
							);
					} else {
						const r = m,
							u = this.notebookEditor.notebookOptions.getLayoutConfiguration(),
							a =
								this.notebookEditor.notebookOptions.computeBottomToolbarDimensions(
									this.notebookEditor.textModel?.viewType,
								),
							h =
								r.layoutInfo.codeIndicatorHeight +
								r.layoutInfo.outputIndicatorHeight +
								r.layoutInfo.commentHeight;
						this.left.setHeight(h),
							this.right.setHeight(h),
							this.codeFocusIndicator.setHeight(
								r.layoutInfo.codeIndicatorHeight,
							),
							this.outputFocusIndicator.setHeight(
								Math.max(
									r.layoutInfo.outputIndicatorHeight -
										r.viewContext.notebookOptions.getLayoutConfiguration()
											.focusIndicatorGap,
									0,
								),
							),
							(this.bottom.domNode.style.transform = `translateY(${r.layoutInfo.totalHeight - a.bottomToolbarGap - u.cellBottomMargin}px)`);
					}
					this.a();
				}
				a() {
					const m = (this.c?.layoutInfo.chatHeight ?? 0) + this.b();
					(this.left.domNode.style.transform = `translateY(${m}px)`),
						(this.right.domNode.style.transform = `translateY(${m}px)`);
				}
				b() {
					const m =
						this.notebookEditor.notebookOptions.getLayoutConfiguration();
					return this.titleToolbar.hasActions
						? m.editorToolbarHeight + m.cellTopMargin
						: m.cellTopMargin;
				}
			}
			e.$S3b = C;
		}),
		define(
			de[3475],
			he([1, 0, 436, 106, 294, 70, 190]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$T3b = void 0);
				let d = class extends w.$A1b {
					constructor(u, a, h) {
						super(),
							(this.g = h),
							(this.a = this.D(new t.$bpb(u, i.$nyb))),
							this.a.hide(),
							(this.b = this.D(new t.$bpb(a, i.$nyb))),
							this.b.hide();
					}
					didRenderCell(u) {
						this.h(u);
					}
					updateForExecutionState(u, a) {
						this.h(u, a);
					}
					updateState(u, a) {
						if (
							((a.metadataChanged || a.internalMetadataChanged) && this.h(u),
							a.inputCollapsedChanged)
						) {
							const h = this.g.getCellExecution(u.uri);
							u.isInputCollapsed
								? (this.a.hide(),
									h?.state === E.NotebookCellExecutionState.Executing &&
										this.h(u))
								: (this.b.hide(),
									h?.state === E.NotebookCellExecutionState.Executing &&
										this.h(u));
						}
					}
					h(u, a) {
						const h = a?.changed ?? this.g.getCellExecution(u.uri),
							c = u.isInputCollapsed ? this.b : this.a;
						h?.state === E.NotebookCellExecutionState.Executing &&
						(!h.didPause || u.isInputCollapsed)
							? m(c)
							: c.hide();
					}
				};
				(e.$T3b = d), (e.$T3b = d = Ne([j(2, C.$d6)], d));
				function m(r) {
					r.infinite().show(500);
				}
			},
		),
		define(
			de[3476],
			he([1, 0, 7, 182, 3, 4, 26, 284, 70, 190]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$13b = void 0),
					(t = mt(t));
				let u = class extends w.$1c {
					constructor(h, c, n, g) {
						super(),
							(this.b = c),
							(this.c = n),
							(this.f = g),
							(this.a = !1),
							this.g(),
							this.D(
								this.f.onDidChangeExecution((p) => {
									p.type === r.NotebookExecutionType.cell &&
										p.affectsCell(this.b.uri) &&
										this.g();
								}),
							),
							this.D(this.b.model.onDidChangeInternalMetadata(() => this.g()));
					}
					setVisibility(h) {
						(this.a = h), this.g();
					}
					g() {
						if (!this.a) return;
						const h = this.f.getCellExecution(this.b.uri),
							c = this.h(h, this.b.model.internalMetadata);
						c
							? ((this.c.style.display = ""),
								t.$hhb(this.c, ...(0, i.$Sib)(c.text)),
								(this.c.title = c.tooltip ?? ""))
							: ((this.c.style.display = "none"), t.$hhb(this.c));
					}
					h(h, c) {
						const n = h?.state,
							{ lastRunSuccess: g } = c;
						if (!n && g)
							return {
								text: `$(${d.$gOb.id})`,
								tooltip: (0, E.localize)(8198, null),
							};
						if (!n && g === !1)
							return {
								text: `$(${d.$hOb.id})`,
								tooltip: (0, E.localize)(8199, null),
							};
						if (
							n === m.NotebookCellExecutionState.Pending ||
							n === m.NotebookCellExecutionState.Unconfirmed
						)
							return {
								text: `$(${d.$iOb.id})`,
								tooltip: (0, E.localize)(8200, null),
							};
						if (n === m.NotebookCellExecutionState.Executing)
							return {
								text: `$(${C.ThemeIcon.modify(d.$jOb, "spin").id})`,
								tooltip: (0, E.localize)(8201, null),
							};
					}
				};
				(e.$13b = u), (e.$13b = u = Ne([j(3, r.$d6)], u));
			},
		),
		define(
			de[3477],
			he([1, 0, 14, 26, 90, 284, 70, 74]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$vOb = void 0);
				class m {
					get icon() {
						return this.symbolKind
							? d.SymbolKinds.toIcon(this.symbolKind)
							: this.isExecuting && this.isPaused
								? E.$jOb
								: this.isExecuting
									? i.ThemeIcon.modify(E.$jOb, "spin")
									: this.cell.cellKind === C.CellKind.Markup
										? t.$ak.markdown
										: t.$ak.code;
					}
					constructor(u, a, h, c, n, g, p, o) {
						(this.index = u),
							(this.level = a),
							(this.cell = h),
							(this.label = c),
							(this.isExecuting = n),
							(this.isPaused = g),
							(this.range = p),
							(this.symbolKind = o),
							(this.b = []);
					}
					addChild(u) {
						this.b.push(u), (u.c = this);
					}
					get parent() {
						return this.c;
					}
					get children() {
						return this.b;
					}
					get markerInfo() {
						return this.d;
					}
					get position() {
						if (this.range)
							return {
								startLineNumber: this.range.startLineNumber,
								startColumn: this.range.startColumn,
							};
					}
					updateMarkers(u) {
						if (this.cell.cellKind === C.CellKind.Code) {
							const a = u.read({
								resource: this.cell.uri,
								severities: w.MarkerSeverity.Error | w.MarkerSeverity.Warning,
							});
							if (a.length === 0) this.d = void 0;
							else {
								const h =
									a.find((c) => c.severity === w.MarkerSeverity.Error)
										?.severity ?? w.MarkerSeverity.Warning;
								this.d = { topSev: h, count: a.length };
							}
						} else {
							let a;
							for (const h of this.children)
								h.updateMarkers(u),
									h.markerInfo &&
										(a = a
											? Math.max(h.markerInfo.topSev, a)
											: h.markerInfo.topSev);
							this.d = a && { topSev: a, count: 0 };
						}
					}
					clearMarkers() {
						this.d = void 0;
						for (const u of this.children) u.clearMarkers();
					}
					find(u, a) {
						if (u.id === this.cell.id) return this;
						a.push(this);
						for (const h of this.children) {
							const c = h.find(u, a);
							if (c) return c;
						}
						a.pop();
					}
					asFlatList(u) {
						u.push(this);
						for (const a of this.children) a.asFlatList(u);
					}
				}
				e.$vOb = m;
			},
		),
		
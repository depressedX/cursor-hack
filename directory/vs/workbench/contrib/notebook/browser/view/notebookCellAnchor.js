define(de[3501], he([1, 0, 108, 70]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$y2b = void 0);
			class w {
				constructor(C, d, m) {
					(this.d = C), (this.e = d), (this.f = m), (this.a = !1);
				}
				shouldAnchor(C, d, m, r) {
					if (C.element(d).focusMode === t.CellFocusMode.Editor) return !0;
					if (this.a) return !1;
					const u = C.elementTop(d) + C.elementHeight(d) + m,
						h = C.renderHeight + C.getScrollTop() > u,
						c = this.e.getValue(i.$56.scrollToRevealCell) !== "none",
						n = m > 0;
					return c && n && !h ? (this.watchAchorDuringExecution(r), !0) : !1;
				}
				watchAchorDuringExecution(C) {
					if (!this.b && C.cellKind === i.CellKind.Code) {
						const d = this.d.getCellExecution(C.uri);
						d &&
							d.state === i.NotebookCellExecutionState.Executing &&
							((this.b = C.onDidStopExecution(() => {
								this.b?.dispose(),
									(this.b = void 0),
									this.c?.dispose(),
									(this.a = !1);
							})),
							(this.c = this.f((m) => {
								m.scrollTop < m.oldScrollTop &&
									((this.a = !0), this.c?.dispose());
							})));
					}
				}
				dispose() {
					this.b?.dispose(), this.c?.dispose();
				}
			}
			e.$y2b = w;
		}),
		define(
			de[3502],
			he([1, 0, 7, 15, 3, 206, 71, 42, 10, 8, 5, 128, 108, 836]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$23b = void 0),
					(t = mt(t));
				let n = class extends w.$1c {
					constructor(p, o, f, b, s) {
						super(),
							(this.notebookEditor = p),
							(this.m = o),
							(this.n = f),
							(this.q = b),
							(this.r = s),
							(this.b = this.D(new w.$2c())),
							(this.h = !1),
							(this.j = !1),
							(this.a = this.notebookEditor
								.getDomNode()
								.appendChild(t.$(".cell-editor-part-cache"))),
							(this.a.style.position = "absolute"),
							(this.a.style.top = "-50000px"),
							(this.a.style.width = "1px"),
							(this.a.style.height = "1px");
					}
					s(p) {
						this.c = this.D(this.m(this.a));
						const o = t.$ghb(this.a, t.$(".cell-editor-container")),
							f = this.D(this.r.createChild(new a.$Ki([r.$6j, this.c])));
						C.EditorContextKeys.inCompositeEditor.bindTo(this.c).set(!0);
						const b = new c.$J3b(
							this.notebookEditor.getBaseCellEditorOptions(p.language),
							this.notebookEditor.notebookOptions,
							this.q,
						);
						(this.f = this.D(
							f.createInstance(
								E.$rwb,
								o,
								{
									...b.getDefaultValue(),
									dimension: { width: 0, height: 0 },
									scrollbar: {
										vertical: "hidden",
										horizontal: "auto",
										handleMouseWheel: !1,
										useShadows: !1,
									},
								},
								{
									contributions:
										this.notebookEditor.creationOptions.cellEditorContributions,
								},
							),
						)),
							(this.h = !0);
					}
					preserveFocusedEditor(p) {
						this.h || this.s(p),
							this.b.clear(),
							this.g?.cancel(),
							(this.g = (0, i.$zh)(async (o) => {
								const f = await this.n.createModelReference(p.uri);
								if (this.j || o.isCancellationRequested) {
									f.dispose();
									return;
								}
								const b = new w.$Zc();
								b.add(f),
									this.f.setModel(f.object.textEditorModel),
									this.f.setSelections(p.getSelections()),
									this.f.focus();
								const s = () => {
									const l = this.f.getSelections();
									l && p.setSelections(l),
										this.notebookEditor.revealInView(p),
										this.f.setModel(null),
										f.dispose();
								};
								b.add(
									this.f.onDidChangeModelContent((l) => {
										s();
									}),
								),
									b.add(
										this.f.onDidChangeCursorSelection((l) => {
											(l.source === "keyboard" || l.source === "mouse") && s();
										}),
									),
									b.add(
										this.notebookEditor.onDidChangeActiveEditor(() => {
											const l = this.notebookEditor.getActiveCell();
											(l !== p || l.focusMode !== h.CellFocusMode.Editor) &&
												(this.b.clear(), this.f.setModel(null), f.dispose());
										}),
									),
									(this.b.value = b);
							}));
					}
					dispose() {
						(this.j = !0), this.g?.cancel(), super.dispose();
					}
				};
				(e.$23b = n),
					(e.$23b = n = Ne([j(2, d.$MO), j(3, m.$gj), j(4, u.$Li)], n));
			},
		),
		define(
			de[3503],
			he([1, 0, 7, 3, 8, 108, 176, 190, 243, 53]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$n4b = void 0),
					(t = mt(t));
				let u = class {
					constructor(h, c, n, g, p) {
						(this.u = h),
							(this.v = c),
							(this.w = g),
							(this.x = p),
							(this.q = new i.$Zc()),
							(this.r = new i.$Zc()),
							(this.s = []),
							(this.t = new i.$Zc()),
							(this.a = C.$SJb.bindTo(n)),
							(this.b = C.$TJb.bindTo(n)),
							(this.f = C.$VJb.bindTo(n)),
							(this.g = C.$WJb.bindTo(n)),
							(this.h = C.$uJb.bindTo(n)),
							(this.j = C.$vJb.bindTo(n)),
							(this.l = C.$wJb.bindTo(n)),
							(this.k = C.$YJb.bindTo(n)),
							(this.m = C.$BJb.bindTo(n)),
							(this.n = C.$XJb.bindTo(n)),
							(this.d = C.$UJb.bindTo(n)),
							(this.o = C.$yJb.bindTo(n)),
							(this.p = C.$AJb.bindTo(n)),
							this.y(),
							this.D(),
							this.q.add(h.onDidChangeModel(this.y, this)),
							this.q.add(c.onDidAddKernel(this.C, this)),
							this.q.add(c.onDidChangeSelectedNotebooks(this.C, this)),
							this.q.add(c.onDidChangeSourceActions(this.C, this)),
							this.q.add(h.notebookOptions.onDidChangeOptions(this.D, this)),
							this.q.add(g.onDidChangeExtensions(this.B, this)),
							this.q.add(p.onDidChangeExecution(this.z, this)),
							this.q.add(p.onDidChangeLastRunFailState(this.A, this));
					}
					dispose() {
						this.q.dispose(),
							this.r.dispose(),
							this.b.reset(),
							this.d.reset(),
							this.g.reset(),
							this.h.reset(),
							this.j.reset(),
							this.m.reset(),
							(0, i.$Vc)(this.s),
							(this.s.length = 0);
					}
					y() {
						if (
							(this.C(),
							this.D(),
							this.r.clear(),
							(0, i.$Vc)(this.s),
							(this.s.length = 0),
							!this.u.hasModel())
						)
							return;
						const h = () => {
								let g = !1;
								if (this.u.hasModel()) {
									for (let p = 0; p < this.u.getLength(); p++)
										if (this.u.cellAt(p).outputsViewModels.length > 0) {
											g = !0;
											break;
										}
								}
								this.k.set(g);
							},
							c = this.r.add(new i.$Zc()),
							n = (g) =>
								g.model.onDidChangeOutputs(() => {
									c.clear(),
										c.add(
											t.$hgb(t.getWindow(this.u.getDomNode()), () => {
												h();
											}),
										);
								});
						for (let g = 0; g < this.u.getLength(); g++) {
							const p = this.u.cellAt(g);
							this.s.push(n(p));
						}
						h(),
							this.B(),
							this.r.add(
								this.u.onDidChangeViewCells((g) => {
									[...g.splices].reverse().forEach((p) => {
										const [o, f, b] = p,
											s = this.s.splice(o, f, ...b.map(n));
										(0, i.$Vc)(s);
									});
								}),
							),
							this.m.set(this.u.textModel.viewType);
					}
					z(h) {
						if (this.u.textModel) {
							const c = this.x.getExecution(this.u.textModel.uri),
								n = this.x.getCellExecutionsForNotebook(this.u.textModel.uri);
							this.j.set(n.length > 0 || !!c),
								h.type === d.NotebookExecutionType.cell &&
									this.h.set(n.length > 0);
						} else
							this.j.set(!1),
								h.type === d.NotebookExecutionType.cell && this.h.set(!1);
					}
					A(h) {
						h.notebook === this.u.textModel?.uri && this.p.set(h.visible);
					}
					async B() {
						if (!this.u.hasModel()) return;
						const h = this.u.textModel.viewType,
							c = E.$cJb.get(h);
						this.n.set(!!c && !(await this.w.getExtension(c)));
					}
					C() {
						if (!this.u.hasModel()) {
							this.b.reset(), this.d.reset(), this.g.reset();
							return;
						}
						const { selected: h, all: c } = this.v.getMatchingKernel(
								this.u.textModel,
							),
							n = this.v.getSourceActions(
								this.u.textModel,
								this.u.scopedContextKeyService,
							);
						this.b.set(c.length),
							this.d.set(n.length),
							this.g.set(h?.implementsInterrupt ?? !1),
							this.f.set(!!h),
							this.a.set(h?.id ?? ""),
							this.t.clear(),
							h &&
								this.t.add(
									h.onDidChange(() => {
										this.g.set(h?.implementsInterrupt ?? !1);
									}),
								);
					}
					D() {
						const h = this.u.notebookOptions.getDisplayOptions();
						this.l.set(h.consolidatedOutputButton),
							this.o.set(
								this.u.notebookOptions.computeCellToolbarLocation(
									this.u.textModel?.viewType,
								),
							);
					}
				};
				(e.$n4b = u),
					(e.$n4b = u =
						Ne([j(1, m.$f6), j(2, w.$6j), j(3, r.$q2), j(4, d.$d6)], u));
			},
		),
		define(
			de[3504],
			he([1, 0, 7, 194, 345, 35, 108]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$o4b = void 0);
				let d = class extends E.$pP {
					constructor(r, u, a) {
						super(a),
							(this.notebookEditor = r),
							(this.b = 3),
							(this.a = (0, i.$Shb)(document.createElement("canvas"))),
							this.a.setPosition("relative"),
							this.a.setLayerHinting(!0),
							this.a.setContain("strict"),
							u.appendChild(this.a.domNode),
							this.D(
								r.onDidChangeDecorations(() => {
									this.layout();
								}),
							),
							this.D(
								w.$sjb
									.getInstance((0, t.getWindow)(this.a.domNode))
									.onDidChange(() => {
										this.layout();
									}),
							);
					}
					layout() {
						const u = this.notebookEditor.getLayoutInfo(),
							a = u.scrollHeight,
							h = u.height,
							c = w.$sjb.getInstance((0, t.getWindow)(this.a.domNode)).value;
						this.a.setWidth(10),
							this.a.setHeight(h),
							(this.a.domNode.width = 10 * c),
							(this.a.domNode.height = h * c);
						const n = this.a.domNode.getContext("2d");
						n.clearRect(0, 0, 10 * c, h * c),
							this.c(n, 10 * c, h * c, a * c, c);
					}
					c(r, u, a, h, c) {
						const n = this.notebookEditor.getViewModel(),
							g = this.notebookEditor.getLayoutInfo().fontInfo,
							p = u / this.b;
						let o = 0;
						if (n)
							for (let f = 0; f < n.viewCells.length; f++) {
								const b = n.viewCells[f],
									s = b.textBuffer,
									l = b.getCellDecorations(),
									y = (b.layoutInfo.totalHeight / h) * c * a;
								l
									.filter(($) => $.overviewRuler)
									.forEach(($) => {
										const v = $.overviewRuler,
											S = this.w(v.color) ?? "#000000",
											I = Math.min(
												g.lineHeight,
												(b.layoutInfo.editorHeight / h / s.getLineCount()) *
													c *
													a,
											),
											T = v.modelRanges
												.map((L) => L.startLineNumber)
												.reduce(
													(L, D) => (
														(L.length === 0 || L[L.length - 1] !== D) &&
															L.push(D),
														L
													),
													[],
												);
										let P = 0;
										switch (v.position) {
											case C.NotebookOverviewRulerLane.Left:
												P = 0;
												break;
											case C.NotebookOverviewRulerLane.Center:
												P = p;
												break;
											case C.NotebookOverviewRulerLane.Right:
												P = p * 2;
												break;
											default:
												break;
										}
										const k =
											v.position === C.NotebookOverviewRulerLane.Full
												? p * 3
												: p;
										for (let L = 0; L < T.length; L++) {
											r.fillStyle = S;
											const M = (T[L] - 1) * I;
											r.fillRect(P, o + M, k, I);
										}
										if (v.includeOutput) {
											r.fillStyle = S;
											const L = (b.layoutInfo.editorHeight / h) * c * a,
												D = (g.lineHeight / h) * c * a;
											r.fillRect(p, o + L, p, D);
										}
									}),
									(o += y);
							}
					}
				};
				(e.$o4b = d), (e.$o4b = d = Ne([j(2, E.$iP)], d));
			},
		),
		define(
			de[1305],
			he([1, 0, 44, 416, 296, 360, 18]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				var d;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$rEc = void 0);
				class m extends i.$PO {
					constructor(a, h) {
						super(), (this.original = a), (this.modified = h);
					}
				}
				let r = class extends w.$GVb {
					static {
						d = this;
					}
					static create(a, h, c, n, g, p) {
						const o = E.$TIb.getOrCreate(a, g, void 0, p),
							f = E.$TIb.getOrCreate(a, h, void 0, p);
						return a.createInstance(d, c, n, o, f, p);
					}
					static {
						this.ID = "workbench.input.diffNotebookInput";
					}
					get resource() {
						return this.modified.resource;
					}
					get editorId() {
						return this.viewType;
					}
					constructor(a, h, c, n, g, p) {
						super(a, h, c, n, void 0, p),
							(this.original = c),
							(this.modified = n),
							(this.viewType = g),
							(this.C = null),
							(this.F = null),
							(this.G = void 0);
					}
					get typeId() {
						return d.ID;
					}
					async resolve() {
						const [a, h] = await Promise.all([
							this.original.resolve(),
							this.modified.resolve(),
						]);
						if ((this.G?.dispose(), !h))
							throw new Error(
								`Fail to resolve modified editor model for resource ${this.modified.resource} with notebookType ${this.viewType}`,
							);
						if (!a)
							throw new Error(
								`Fail to resolve original editor model for resource ${this.original.resource} with notebookType ${this.viewType}`,
							);
						return (
							(this.F = a),
							(this.C = h),
							(this.G = new m(this.F, this.C)),
							this.G
						);
					}
					toUntyped() {
						const a = { resource: this.original.resource },
							h = { resource: this.resource };
						return {
							original: a,
							modified: h,
							primary: h,
							secondary: a,
							options: { override: this.viewType },
						};
					}
					matches(a) {
						return this === a
							? !0
							: a instanceof d
								? this.modified.matches(a.modified) &&
									this.original.matches(a.original) &&
									this.viewType === a.viewType
								: (0, t.$j1)(a)
									? this.modified.matches(a.modified) &&
										this.original.matches(a.original) &&
										this.editorId !== void 0 &&
										(this.editorId === a.options?.override ||
											a.options?.override === void 0)
									: !1;
					}
					dispose() {
						super.dispose(),
							this.G?.dispose(),
							(this.G = void 0),
							this.original.dispose(),
							this.modified.dispose(),
							(this.F = null),
							(this.C = null);
					}
				};
				(e.$rEc = r), (e.$rEc = r = d = Ne([j(5, C.$IY)], r));
			},
		),
		define(
			de[3505],
			he([1, 0, 215, 103, 19, 70]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$tEc = e.$sEc = void 0),
					(t = mt(t));
				class C {
					constructor(u) {
						(this.a = new Set(u)), (this.defined = this.a.size > 0);
					}
					matches(u) {
						return u.some((a) => this.a.has(a));
					}
				}
				class d {
					constructor(u) {
						(this.id = u.id),
							(this.extensionId = u.extension.identifier),
							(this.extensionLocation = u.extension.extensionLocation),
							(this.isBuiltin = u.extension.isBuiltin),
							typeof u.entrypoint == "string"
								? (this.entrypoint = {
										extends: void 0,
										path: (0, w.$nh)(this.extensionLocation, u.entrypoint),
									})
								: (this.entrypoint = {
										extends: u.entrypoint.extends,
										path: (0, w.$nh)(this.extensionLocation, u.entrypoint.path),
									}),
							(this.displayName = u.displayName),
							(this.mimeTypes = u.mimeTypes),
							(this.a = this.mimeTypes.map((a) => t.$Jk(a))),
							(this.hardDependencies = new C(
								u.dependencies ?? i.Iterable.empty(),
							)),
							(this.optionalDependencies = new C(
								u.optionalDependencies ?? i.Iterable.empty(),
							)),
							(this.messaging =
								u.requiresMessaging ?? E.RendererMessagingSpec.Never);
					}
					matchesWithoutKernel(u) {
						return this.b(u)
							? this.hardDependencies.defined
								? E.NotebookRendererMatch.WithHardKernelDependency
								: this.optionalDependencies.defined
									? E.NotebookRendererMatch.WithOptionalKernelDependency
									: E.NotebookRendererMatch.Pure
							: E.NotebookRendererMatch.Never;
					}
					matches(u, a) {
						return this.b(u)
							? this.hardDependencies.defined
								? this.hardDependencies.matches(a)
									? E.NotebookRendererMatch.WithHardKernelDependency
									: E.NotebookRendererMatch.Never
								: this.optionalDependencies.matches(a)
									? E.NotebookRendererMatch.WithOptionalKernelDependency
									: E.NotebookRendererMatch.Pure
							: E.NotebookRendererMatch.Never;
					}
					b(u) {
						return this.entrypoint.extends
							? !1
							: this.a.some((a) => a(u)) || this.mimeTypes.some((a) => a === u);
					}
				}
				e.$sEc = d;
				class m {
					constructor(u) {
						(this.type = u.type),
							(this.entrypoint = (0, w.$nh)(
								u.extension.extensionLocation,
								u.entrypoint,
							)),
							(this.extensionLocation = u.extension.extensionLocation),
							(this.localResourceRoots = u.localResourceRoots.map((a) =>
								(0, w.$nh)(u.extension.extensionLocation, a),
							));
					}
				}
				e.$tEc = m;
			},
		),
		
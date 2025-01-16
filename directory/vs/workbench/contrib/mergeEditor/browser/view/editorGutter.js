define(de[1251], he([1, 0, 7, 3, 77, 507]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$3Zb = void 0);
			class C extends i.$1c {
				constructor(r, u, a) {
					super(),
						(this.m = r),
						(this.n = u),
						(this.q = a),
						(this.a = (0, w.observableFromEvent)(
							this,
							this.m.onDidScrollChange,
							(n) => this.m.getScrollTop(),
						)),
						(this.b = this.a.map((n) => n === 0)),
						(this.c = (0, w.observableFromEvent)(
							this,
							this.m.onDidChangeModel,
							(n) => this.m.hasModel(),
						)),
						(this.f = (0, w.observableSignalFromEvent)(
							"onDidChangeViewZones",
							this.m.onDidChangeViewZones,
						)),
						(this.g = (0, w.observableSignalFromEvent)(
							"onDidContentSizeChange",
							this.m.onDidContentSizeChange,
						)),
						(this.j = (0, w.observableSignal)("domNodeSizeChanged")),
						(this.r = new Map()),
						(this.n.className = "gutter monaco-editor");
					const h = this.n.appendChild(
							(0, t.h)("div.scroll-decoration", {
								role: "presentation",
								ariaHidden: "true",
								style: { width: "100%" },
							}).root,
						),
						c = new ResizeObserver(() => {
							(0, w.transaction)((n) => {
								this.j.trigger(n);
							});
						});
					c.observe(this.n),
						this.D((0, i.$Yc)(() => c.disconnect())),
						this.D(
							(0, w.autorun)((n) => {
								h.className = this.b.read(n) ? "" : "scroll-decoration";
							}),
						),
						this.D((0, w.autorun)((n) => this.s(n)));
				}
				dispose() {
					super.dispose(), (0, t.$hhb)(this.n);
				}
				s(r) {
					if (!this.c.read(r)) return;
					this.j.read(r), this.f.read(r), this.g.read(r);
					const u = this.a.read(r),
						a = this.m.getVisibleRanges(),
						h = new Set(this.r.keys());
					if (a.length > 0) {
						const c = a[0],
							n = new E.$bZb(
								c.startLineNumber,
								c.endLineNumber - c.startLineNumber,
							).deltaEnd(1),
							g = this.q.getIntersectingGutterItems(n, r);
						for (const p of g) {
							if (!p.range.touches(n)) continue;
							h.delete(p.id);
							let o = this.r.get(p.id);
							if (o) o.gutterItemView.update(p);
							else {
								const l = document.createElement("div");
								this.n.appendChild(l);
								const y = this.q.createView(p, l);
								(o = new d(y, l)), this.r.set(p.id, o);
							}
							const f =
									p.range.startLineNumber <= this.m.getModel().getLineCount()
										? this.m.getTopForLineNumber(p.range.startLineNumber, !0) -
											u
										: this.m.getBottomForLineNumber(
												p.range.startLineNumber - 1,
												!1,
											) - u,
								s =
									this.m.getBottomForLineNumber(
										p.range.endLineNumberExclusive - 1,
										!0,
									) -
									u -
									f;
							(o.domNode.style.top = `${f}px`),
								(o.domNode.style.height = `${s}px`),
								o.gutterItemView.layout(f, s, 0, this.n.clientHeight);
						}
					}
					for (const c of h) {
						const n = this.r.get(c);
						n.gutterItemView.dispose(), n.domNode.remove(), this.r.delete(c);
					}
				}
			}
			e.$3Zb = C;
			class d {
				constructor(r, u) {
					(this.gutterItemView = r), (this.domNode = u);
				}
			}
		}),
		define(
			de[1252],
			he([1, 0, 7, 6, 3, 77, 46, 206, 104, 1686, 350, 173, 5, 548, 508, 326]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6Zb = e.$4Zb = void 0),
					(e.$5Zb = o);
				class p extends w.$1c {
					updateOptions(s) {
						this.editor.updateOptions(s);
					}
					constructor(s, l, y) {
						super(),
							(this.q = s),
							(this.viewModel = l),
							(this.s = y),
							(this.model = this.viewModel.map(($) => $?.model)),
							(this.a = (0, t.h)("div.code-view", [
								(0, t.h)("div.header@header", [
									(0, t.h)("span.title@title"),
									(0, t.h)("span.description@description"),
									(0, t.h)("span.detail@detail"),
									(0, t.h)("span.toolbar@toolbar"),
								]),
								(0, t.h)("div.container", [
									(0, t.h)("div.gutter@gutterDiv"),
									(0, t.h)("div@editor"),
								]),
							])),
							(this.b = new i.$re()),
							(this.view = {
								element: this.a.root,
								minimumWidth: c.$DEb.width,
								maximumWidth: c.$EEb.width,
								minimumHeight: c.$DEb.height,
								maximumHeight: c.$EEb.height,
								onDidChange: this.b.event,
								layout: ($, v, S, I) => {
									(0, n.$fZb)(this.a.root, {
										width: $,
										height: v,
										top: S,
										left: I,
									}),
										this.editor.layout({
											width: $ - this.a.gutterDiv.clientWidth,
											height: v - this.a.header.clientHeight,
										});
								},
							}),
							(this.f = (0, g.$Mwb)("mergeEditor.showCheckboxes", !1, this.s)),
							(this.j = (0, g.$Mwb)(
								"mergeEditor.showDeletionMarkers",
								!0,
								this.s,
							)),
							(this.n = (0, g.$Mwb)(
								"mergeEditor.useSimplifiedDecorations",
								!1,
								this.s,
							)),
							(this.editor = this.q.createInstance(
								d.$rwb,
								this.a.editor,
								{},
								{ contributions: this.t() },
							)),
							(this.isFocused = (0, E.observableFromEvent)(
								this,
								i.Event.any(
									this.editor.onDidBlurEditorWidget,
									this.editor.onDidFocusEditorWidget,
								),
								() => this.editor.hasWidgetFocus(),
							)),
							(this.cursorPosition = (0, E.observableFromEvent)(
								this,
								this.editor.onDidChangeCursorPosition,
								() => this.editor.getPosition(),
							)),
							(this.selection = (0, E.observableFromEvent)(
								this,
								this.editor.onDidChangeCursorSelection,
								() => this.editor.getSelections(),
							)),
							(this.cursorLineNumber = this.cursorPosition.map(
								($) => $?.lineNumber,
							));
					}
					t() {
						return C.EditorExtensionsRegistry.getEditorContributions().filter(
							(s) => s.id !== u.$ZNb.ID && s.id !== r.$RBb.ID,
						);
					}
				}
				e.$4Zb = p;
				function o(b, s) {
					const l = (0, E.derived)((y) => {
						const $ = b.viewModel.read(y);
						if (!$) return [];
						const v = $.selectionInBase.read(y);
						return !v || v.sourceEditor === b
							? []
							: v.rangesInBase.map((S) => s(S, $));
					});
					return (0, E.autorun)((y) => {
						const $ = l.read(y);
						$.length !== 0 &&
							b.editor.setSelections(
								$.map(
									(v) =>
										new m.$kL(
											v.startLineNumber,
											v.startColumn,
											v.endLineNumber,
											v.endColumn,
										),
								),
							);
					});
				}
				let f = class extends w.$1c {
					constructor(s, l, y) {
						super();
						const $ = y.createInstance(a.$Tyb, l, s, {
							menuOptions: { renderShortTitle: !0 },
							toolbarOptions: { primaryGroup: (v) => v === "primary" },
						});
						this.B.add($);
					}
				};
				(e.$6Zb = f), (e.$6Zb = f = Ne([j(2, h.$Li)], f));
			},
		),
		define(
			de[3081],
			he([1, 0, 7, 182, 29, 77, 64, 4, 11, 10, 5, 508, 989, 1251, 1252]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$7Zb = void 0);
				let g = class extends n.$4Zb {
					constructor(o, f, b) {
						super(f, o, b),
							(this.u = (0, E.derived)(this, (s) => {
								const l = this.viewModel.read(s);
								if (!l) return [];
								const y = l.model,
									$ = y.base,
									v = l.activeModifiedBaseRange.read(s),
									S = l.showNonConflictingChanges.read(s),
									I = this.j.read(s),
									T = [];
								for (const P of y.modifiedBaseRanges.read(s)) {
									const k = P.baseRange;
									if (!k) continue;
									const L = y.isHandled(P).read(s);
									if (!P.isConflicting && L && !S) continue;
									const D = ["merge-editor-block"];
									let M = [0, 0, 0, 0];
									L && D.push("handled"),
										P === v && (D.push("focused"), (M = [0, 2, 0, 2])),
										D.push("base");
									const N = l.baseShowDiffAgainst.read(s);
									if (N)
										for (const A of P.getInputDiffs(N)) {
											const R = A.inputRange.toInclusiveRange();
											R &&
												T.push({
													range: R,
													options: {
														className: "merge-editor-diff base",
														description: "Merge Editor",
														isWholeLine: !0,
													},
												});
											for (const O of A.rangeMappings)
												(I || !O.inputRange.isEmpty()) &&
													T.push({
														range: O.inputRange,
														options: {
															className: O.inputRange.isEmpty()
																? "merge-editor-diff-empty-word base"
																: "merge-editor-diff-word base",
															description: "Merge Editor",
															showIfCollapsed: !0,
														},
													});
										}
									T.push({
										range: k.toInclusiveRangeOrEmpty(),
										options: {
											showIfCollapsed: !0,
											blockClassName: D.join(" "),
											blockPadding: M,
											blockIsAfterEnd: k.startLineNumber > $.getLineCount(),
											description: "Merge Editor",
											minimap: {
												position: C.MinimapPosition.Gutter,
												color: { id: L ? h.$XZb : h.$YZb },
											},
											overviewRuler: P.isConflicting
												? {
														position: C.OverviewRulerLane.Center,
														color: { id: L ? h.$XZb : h.$YZb },
													}
												: void 0,
										},
									});
								}
								return T;
							})),
							this.D((0, n.$5Zb)(this, (s, l) => s)),
							this.D(
								f.createInstance(n.$6Zb, m.$XX.MergeBaseToolbar, this.a.title),
							),
							this.D(
								(0, E.autorunWithStore)((s, l) => {
									this.f.read(s) &&
										l.add(
											new c.$3Zb(this.editor, this.a.gutterDiv, {
												getIntersectingGutterItems: (y, $) => [],
												createView: (y, $) => {
													throw new w.$gb();
												},
											}),
										);
								}),
							),
							this.D(
								(0, E.autorun)((s) => {
									const l = this.viewModel.read(s);
									if (!l) return;
									this.editor.setModel(l.model.base),
										(0, t.$hhb)(
											this.a.title,
											...(0, i.$Sib)((0, d.localize)(7660, null)),
										);
									const y = l.baseShowDiffAgainst.read(s);
									let $;
									if (y) {
										const v = (0, d.localize)(
												7661,
												null,
												y === 1 ? l.model.input1.title : l.model.input2.title,
											),
											S = (0, d.localize)(7662, null);
										$ = (0, t.h)("span", { title: S }, [v]).root;
									}
									(0, t.$hhb)(this.a.description, ...($ ? [$] : []));
								}),
							),
							this.D((0, a.$gZb)(this.editor, this.u));
					}
				};
				(e.$7Zb = g), (e.$7Zb = g = Ne([j(1, u.$Li), j(2, r.$gj)], g));
			},
		),
		define(
			de[3082],
			he([
				1, 0, 7, 182, 268, 50, 14, 3, 201, 77, 37, 28, 64, 4, 11, 10, 49, 5,
				106, 1250, 508, 989, 1251, 1252,
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
					(e.$0Zb = e.$9Zb = e.$8Zb = void 0);
				let v = class extends $.$4Zb {
					constructor(P, k, L, D, M) {
						super(L, k, M),
							(this.inputNumber = P),
							(this.otherInputNumber = this.inputNumber === 1 ? 2 : 1),
							(this.u = (0, r.derivedOpts)(
								{
									debugName: `input${this.inputNumber}.modifiedBaseRangeGutterItemInfos`,
								},
								(N) => {
									const A = this.viewModel.read(N);
									if (!A) return [];
									const R = A.model,
										O = this.inputNumber,
										B = A.showNonConflictingChanges.read(N);
									return R.modifiedBaseRanges
										.read(N)
										.filter(
											(U) =>
												U.getInputDiffs(this.inputNumber).length > 0 &&
												(B || U.isConflicting || !R.isHandled(U).read(N)),
										)
										.map((U, z) => new S(z.toString(), U, O, A));
								},
							)),
							(this.w = (0, r.derivedOpts)(
								{ debugName: `input${this.inputNumber}.decorations` },
								(N) => {
									const A = this.viewModel.read(N);
									if (!A) return [];
									const R = A.model,
										O = (this.inputNumber === 1 ? R.input1 : R.input2)
											.textModel,
										B = A.activeModifiedBaseRange.read(N),
										U = new Array(),
										z = A.showNonConflictingChanges.read(N),
										F = this.j.read(N),
										H =
											!(
												A.baseCodeEditorView.read(N) !== void 0 &&
												A.baseShowDiffAgainst.read(N) === this.inputNumber
											) && this.n.read(N);
									for (const q of R.modifiedBaseRanges.read(N)) {
										const V = q.getInputRange(this.inputNumber);
										if (!V) continue;
										const G = ["merge-editor-block"];
										let K = [0, 0, 0, 0];
										const J = R.isInputHandled(q, this.inputNumber).read(N);
										J && G.push("handled"),
											q === B && (G.push("focused"), (K = [0, 2, 0, 2])),
											q.isConflicting && G.push("conflicting");
										const W = this.inputNumber === 1 ? "input i1" : "input i2";
										if (
											(G.push(W),
											!(!q.isConflicting && !z && J) &&
												(H && !J && G.push("use-simplified-decorations"),
												U.push({
													range: V.toInclusiveRangeOrEmpty(),
													options: {
														showIfCollapsed: !0,
														blockClassName: G.join(" "),
														blockPadding: K,
														blockIsAfterEnd:
															V.startLineNumber > O.getLineCount(),
														description: "Merge Editor",
														minimap: {
															position: h.MinimapPosition.Gutter,
															color: { id: J ? l.$XZb : l.$YZb },
														},
														overviewRuler: q.isConflicting
															? {
																	position: h.OverviewRulerLane.Center,
																	color: { id: J ? l.$XZb : l.$YZb },
																}
															: void 0,
													},
												}),
												!H && (q.isConflicting || !R.isHandled(q).read(N))))
										) {
											const X = q.getInputDiffs(this.inputNumber);
											for (const Y of X) {
												const ie = Y.outputRange.toInclusiveRange();
												if (
													(ie &&
														U.push({
															range: ie,
															options: {
																className: `merge-editor-diff ${W}`,
																description: "Merge Editor",
																isWholeLine: !0,
															},
														}),
													Y.rangeMappings)
												)
													for (const ne of Y.rangeMappings)
														(F || !ne.outputRange.isEmpty()) &&
															U.push({
																range: ne.outputRange,
																options: {
																	className: ne.outputRange.isEmpty()
																		? `merge-editor-diff-empty-word ${W}`
																		: `merge-editor-diff-word ${W}`,
																	description: "Merge Editor",
																	showIfCollapsed: !0,
																},
															});
											}
										}
									}
									return U;
								},
							)),
							this.a.root.classList.add("input"),
							this.D(
								new y.$3Zb(this.editor, this.a.gutterDiv, {
									getIntersectingGutterItems: (N, A) =>
										this.f.read(A) ? this.u.read(A) : [],
									createView: (N, A) => new I(N, A, D),
								}),
							),
							this.D(
								(0, $.$5Zb)(this, (N, A) =>
									A.model.translateBaseRangeToInput(this.inputNumber, N),
								),
							),
							this.D(
								L.createInstance(
									$.$6Zb,
									P === 1 ? n.$XX.MergeInput1Toolbar : n.$XX.MergeInput2Toolbar,
									this.a.toolbar,
								),
							),
							this.D(
								(0, r.autorunOpts)(
									{
										debugName: `input${this.inputNumber}: update labels & text model`,
									},
									(N) => {
										const A = this.viewModel.read(N);
										if (!A) return;
										this.editor.setModel(
											this.inputNumber === 1
												? A.model.input1.textModel
												: A.model.input2.textModel,
										);
										const R =
												this.inputNumber === 1
													? A.model.input1.title || (0, c.localize)(7663, null)
													: A.model.input2.title || (0, c.localize)(7664, null),
											O =
												this.inputNumber === 1
													? A.model.input1.description
													: A.model.input2.description,
											B =
												this.inputNumber === 1
													? A.model.input1.detail
													: A.model.input2.detail;
										(0, t.$hhb)(this.a.title, ...(0, i.$Sib)(R)),
											(0, t.$hhb)(
												this.a.description,
												...(O ? (0, i.$Sib)(O) : []),
											),
											(0, t.$hhb)(this.a.detail, ...(B ? (0, i.$Sib)(B) : []));
									},
								),
							),
							this.D((0, s.$gZb)(this.editor, this.w));
					}
				};
				(e.$8Zb = v),
					(e.$8Zb = v = Ne([j(2, o.$Li), j(3, p.$Xxb), j(4, g.$gj)], v));
				class S {
					constructor(P, k, L, D) {
						(this.id = P),
							(this.b = k),
							(this.f = L),
							(this.g = D),
							(this.a = this.g.model),
							(this.range = this.b.getInputRange(this.f)),
							(this.enabled = this.a.isUpToDate),
							(this.toggleState = (0, r.derived)(this, (M) => {
								const N = this.a.getState(this.b).read(M).getInput(this.f);
								return N === b.InputState.second && !this.b.isOrderRelevant
									? b.InputState.first
									: N;
							})),
							(this.state = (0, r.derived)(this, (M) => {
								const N = this.g.activeModifiedBaseRange.read(M);
								return this.a.hasBaseRange(this.b)
									? {
											handled: this.a.isHandled(this.b).read(M),
											focused: this.b === N,
										}
									: { handled: !1, focused: !1 };
							}));
					}
					setState(P, k) {
						this.g.setState(
							this.b,
							this.a.getState(this.b).get().withInputValue(this.f, P),
							k,
							this.f,
						);
					}
					toggleBothSides() {
						(0, r.transaction)((P) => {
							const k = this.a.getState(this.b).get();
							this.a.setState(
								this.b,
								k.toggle(this.f).toggle(this.f === 1 ? 2 : 1),
								!0,
								P,
							);
						});
					}
					getContextMenuActions() {
						const P = this.a.getState(this.b).get(),
							k = this.a.isHandled(this.b).get(),
							L = (N) => {
								(0, r.transaction)((A) =>
									this.g.setState(this.b, N, A, this.f),
								);
							};
						function D(N, A, R, O) {
							const B = new E.$rj(N, A, void 0, !0, () => {
								L(R);
							});
							return (B.checked = O), B;
						}
						const M = P.includesInput1 && P.includesInput2;
						return [
							this.b.input1Diffs.length > 0
								? D(
										"mergeEditor.acceptInput1",
										(0, c.localize)(7665, null, this.a.input1.title),
										P.toggle(1),
										P.includesInput1,
									)
								: void 0,
							this.b.input2Diffs.length > 0
								? D(
										"mergeEditor.acceptInput2",
										(0, c.localize)(7666, null, this.a.input2.title),
										P.toggle(2),
										P.includesInput2,
									)
								: void 0,
							this.b.isConflicting
								? (0, s.$mZb)(
										D(
											"mergeEditor.acceptBoth",
											(0, c.localize)(7667, null),
											P.withInputValue(1, !M).withInputValue(2, !M),
											M,
										),
										{ enabled: this.b.canBeCombined },
									)
								: void 0,
							new E.$tj(),
							this.b.isConflicting
								? (0, s.$mZb)(
										D(
											"mergeEditor.swap",
											(0, c.localize)(7668, null),
											P.swap(),
											!1,
										),
										{ enabled: !P.kind && (!M || this.b.isOrderRelevant) },
									)
								: void 0,
							(0, s.$mZb)(
								new E.$rj(
									"mergeEditor.markAsHandled",
									(0, c.localize)(7669, null),
									void 0,
									!0,
									() => {
										(0, r.transaction)((N) => {
											this.a.setHandled(this.b, !k, N);
										});
									},
								),
								{ checked: k },
							),
						].filter(a.$tg);
					}
				}
				e.$9Zb = S;
				class I extends d.$1c {
					constructor(P, k, L) {
						super(),
							(this.f = (0, r.observableValue)(this, !1)),
							(this.a = (0, r.observableValue)(this, P));
						const D = new w.$8ib({
							isChecked: !1,
							title: "",
							icon: C.$ak.check,
							...f.$pyb,
						});
						D.domNode.classList.add("accept-conflict-group"),
							this.D(
								(0, t.$0fb)(D.domNode, t.$$gb.MOUSE_DOWN, (M) => {
									const N = this.a.get();
									N &&
										(M.button === 2
											? (M.stopPropagation(),
												M.preventDefault(),
												L.showContextMenu({
													getAnchor: () => D.domNode,
													getActions: () => N.getContextMenuActions(),
												}))
											: M.button === 1 &&
												(M.stopPropagation(),
												M.preventDefault(),
												N.toggleBothSides()));
								}),
							),
							this.D(
								(0, r.autorun)((M) => {
									const N = this.a.read(M),
										A = N.toggleState.read(M),
										O = {
											[b.InputState.excluded]: {
												icon: void 0,
												checked: !1,
												title: (0, c.localize)(7670, null),
											},
											[b.InputState.unrecognized]: {
												icon: C.$ak.circleFilled,
												checked: !1,
												title: (0, c.localize)(7671, null),
											},
											[b.InputState.first]: {
												icon: C.$ak.check,
												checked: !0,
												title: (0, c.localize)(7672, null),
											},
											[b.InputState.second]: {
												icon: C.$ak.checkAll,
												checked: !0,
												title: (0, c.localize)(7673, null),
											},
										}[A];
									D.setIcon(O.icon),
										(D.checked = O.checked),
										D.setTitle(O.title),
										N.enabled.read(M) ? D.enable() : D.disable();
								}),
							),
							this.D(
								(0, r.autorun)((M) => {
									const N = this.a.read(M).state.read(M),
										A = [
											"merge-accept-gutter-marker",
											N.handled && "handled",
											N.focused && "focused",
											this.f.read(M) ? "multi-line" : "single-line",
										];
									k.className = A.filter((R) => typeof R == "string").join(" ");
								}),
							),
							this.D(
								D.onChange(() => {
									(0, r.transaction)((M) => {
										this.a.get().setState(D.checked, M);
									});
								}),
							),
							k.appendChild((0, t.h)("div.background", [u.$ig]).root),
							k.appendChild(
								(this.b = (0, t.h)("div.checkbox", [
									(0, t.h)("div.checkbox-background", [D.domNode]),
								]).root),
							);
					}
					layout(P, k, L, D) {
						const M = this.b.clientHeight,
							N = k / 2 - M / 2,
							A = M;
						let R = P + N;
						const O = [A, L + D - A - M],
							B = [P + A, P + k - M - A];
						B[0] < B[1] &&
							((R = (0, m.$Zm)(R, O[0], O[1])),
							(R = (0, m.$Zm)(R, B[0], B[1]))),
							(this.b.style.top = `${R - P}px`),
							(0, r.transaction)((U) => {
								this.f.set(k > 30, U);
							});
					}
					update(P) {
						(0, r.transaction)((k) => {
							this.a.set(P, k);
						});
					}
				}
				e.$0Zb = I;
			},
		),
		
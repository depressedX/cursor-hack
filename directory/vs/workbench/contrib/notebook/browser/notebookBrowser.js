define(de[108], he([1, 0, 70, 360, 442]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.CellFoldingState =
					e.CursorAtLineBoundary =
					e.CursorAtBoundary =
					e.CellFocusMode =
					e.CellEditState =
					e.CellRevealRangeType =
					e.CellRevealType =
					e.NotebookOverviewRulerLane =
					e.CellLayoutContext =
					e.CellLayoutState =
					e.ScrollToRevealBehavior =
					e.RenderOutputType =
					e.$dJb =
					e.$cJb =
					e.$bJb =
					e.$aJb =
					e.$_Ib =
					e.$$Ib =
					e.$0Ib =
					e.$9Ib =
					e.$8Ib =
					e.$7Ib =
						void 0),
				(e.$eJb = p),
				(e.$fJb = o),
				(e.$gJb = f),
				(e.$7Ib = "notebook.cell.expandCellInput"),
				(e.$8Ib = "notebook.cell.execute"),
				(e.$9Ib = "notebook.cell.detectLanguage"),
				(e.$0Ib = "notebook.cell.changeLanguage"),
				(e.$$Ib = "notebook.cell.quitEdit"),
				(e.$_Ib = "notebook.cell.expandCellOutput"),
				(e.$aJb = "jupyter-notebook"),
				(e.$bJb = "ms-toolsai.jupyter"),
				(e.$cJb = new Map([[e.$aJb, e.$bJb]])),
				(e.$dJb = new Map()),
				e.$dJb.set(e.$aJb, new Map()),
				e.$dJb
					.get(e.$aJb)
					?.set("python", {
						extensionIds: ["ms-python.python", e.$bJb],
						displayName: "Python + Jupyter",
					});
			var E;
			(function (s) {
				(s[(s.Html = 0)] = "Html"), (s[(s.Extension = 1)] = "Extension");
			})(E || (e.RenderOutputType = E = {}));
			var C;
			(function (s) {
				(s[(s.fullCell = 0)] = "fullCell"),
					(s[(s.firstLine = 1)] = "firstLine");
			})(C || (e.ScrollToRevealBehavior = C = {}));
			var d;
			(function (s) {
				(s[(s.Uninitialized = 0)] = "Uninitialized"),
					(s[(s.Estimated = 1)] = "Estimated"),
					(s[(s.FromCache = 2)] = "FromCache"),
					(s[(s.Measured = 3)] = "Measured");
			})(d || (e.CellLayoutState = d = {}));
			var m;
			(function (s) {
				s[(s.Fold = 0)] = "Fold";
			})(m || (e.CellLayoutContext = m = {}));
			var r;
			(function (s) {
				(s[(s.Left = 1)] = "Left"),
					(s[(s.Center = 2)] = "Center"),
					(s[(s.Right = 4)] = "Right"),
					(s[(s.Full = 7)] = "Full");
			})(r || (e.NotebookOverviewRulerLane = r = {}));
			var u;
			(function (s) {
				(s[(s.Default = 1)] = "Default"),
					(s[(s.Top = 2)] = "Top"),
					(s[(s.Center = 3)] = "Center"),
					(s[(s.CenterIfOutsideViewport = 4)] = "CenterIfOutsideViewport"),
					(s[(s.NearTopIfOutsideViewport = 5)] = "NearTopIfOutsideViewport"),
					(s[(s.FirstLineIfOutsideViewport = 6)] =
						"FirstLineIfOutsideViewport");
			})(u || (e.CellRevealType = u = {}));
			var a;
			(function (s) {
				(s[(s.Default = 1)] = "Default"),
					(s[(s.Center = 2)] = "Center"),
					(s[(s.CenterIfOutsideViewport = 3)] = "CenterIfOutsideViewport");
			})(a || (e.CellRevealRangeType = a = {}));
			var h;
			(function (s) {
				(s[(s.Preview = 0)] = "Preview"), (s[(s.Editing = 1)] = "Editing");
			})(h || (e.CellEditState = h = {}));
			var c;
			(function (s) {
				(s[(s.Container = 0)] = "Container"),
					(s[(s.Editor = 1)] = "Editor"),
					(s[(s.Output = 2)] = "Output"),
					(s[(s.ChatInput = 3)] = "ChatInput");
			})(c || (e.CellFocusMode = c = {}));
			var n;
			(function (s) {
				(s[(s.None = 0)] = "None"),
					(s[(s.Top = 1)] = "Top"),
					(s[(s.Bottom = 2)] = "Bottom"),
					(s[(s.Both = 3)] = "Both");
			})(n || (e.CursorAtBoundary = n = {}));
			var g;
			(function (s) {
				(s[(s.None = 0)] = "None"),
					(s[(s.Start = 1)] = "Start"),
					(s[(s.End = 2)] = "End"),
					(s[(s.Both = 3)] = "Both");
			})(g || (e.CursorAtLineBoundary = g = {}));
			function p(s) {
				if (!s) return;
				if (s.getId() === t.$O6) return s.getControl();
				const l = s.input;
				if (l && (0, i.$UIb)(l)) return s.getControl()?.notebookEditor;
			}
			function o(s, l) {
				const y = (0, w.$j6)(l),
					$ = [];
				return (
					y.forEach((v) => {
						if (!s.cellAt(v)) return;
						const I = s.getViewIndexByModelIndex(v);
						if (I < 0) return;
						const T = I + 1,
							P = s.getCellRangeFromViewRange(I, T);
						P && $.push(P);
					}),
					(0, w.$k6)($)
				);
			}
			function f(s, l) {
				const y = [];
				return (
					(0, w.$k6)(l).forEach(($) => {
						y.push(...s.getCellsInRange($));
					}),
					y
				);
			}
			var b;
			(function (s) {
				(s[(s.None = 0)] = "None"),
					(s[(s.Expanded = 1)] = "Expanded"),
					(s[(s.Collapsed = 2)] = "Collapsed");
			})(b || (e.CellFoldingState = b = {}));
		}),
		define(
			de[3483],
			he([1, 0, 3, 82, 9, 10, 116, 108, 293, 446, 66, 18, 88]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Fpc = void 0);
				class c {
					constructor(p, o) {
						(this.editor = p), (this.disposables = o);
					}
					dispose() {
						this.disposables.dispose();
					}
				}
				let n = class {
					constructor(p, o, f, b, s) {
						(this.e = o),
							(this.f = f),
							(this.g = b),
							(this.h = s),
							(this.a = new t.$Zc()),
							(this.c = new Map()),
							(this.b = p.getProxy(h.$mbb.ExtHostNotebookEditors)),
							this.e.onDidActiveEditorChange(() => this.i(), this, this.a),
							this.g.onDidRemoveGroup(() => this.i(), this, this.a),
							this.g.onDidMoveGroup(() => this.i(), this, this.a);
					}
					dispose() {
						this.a.dispose(), (0, t.$Vc)(this.c.values());
					}
					handleEditorsAdded(p) {
						for (const o of p) {
							const f = new t.$Zc();
							f.add(
								o.onDidChangeVisibleRanges(() => {
									this.b.$acceptEditorPropertiesChanged(o.getId(), {
										visibleRanges: { ranges: o.visibleRanges },
									});
								}),
							),
								f.add(
									o.onDidChangeSelection(() => {
										this.b.$acceptEditorPropertiesChanged(o.getId(), {
											selections: { selections: o.getSelections() },
										});
									}),
								);
							const b = new c(o, f);
							this.c.set(o.getId(), b);
						}
					}
					handleEditorsRemoved(p) {
						for (const o of p) this.c.get(o)?.dispose(), this.c.delete(o);
					}
					i() {
						const p = Object.create(null);
						for (const o of this.e.visibleEditorPanes) {
							const f = (0, d.$eJb)(o);
							f &&
								this.c.has(f.getId()) &&
								(p[f.getId()] = (0, r.$b8)(this.g, o.group));
						}
						(0, i.$zo)(p, this.d) ||
							((this.d = p), this.b.$acceptEditorViewColumns(p));
					}
					async $tryShowNotebookDocument(p, o, f) {
						const b = {
								cellSelections: f.selections,
								preserveFocus: f.preserveFocus,
								pinned: f.pinned,
								activation: f.preserveFocus
									? C.EditorActivation.RESTORE
									: void 0,
								label: f.label,
								override: o,
							},
							s = await this.e.openEditor(
								{ resource: w.URI.revive(p), options: b },
								(0, r.$a8)(this.g, this.h, f.position),
							),
							l = (0, d.$eJb)(s);
						if (l) return l.getId();
						throw new Error(
							`Notebook Editor creation failure for document ${JSON.stringify(p)}`,
						);
					}
					async $tryRevealRange(p, o, f) {
						const b = this.f.getNotebookEditor(p);
						if (!b) return;
						const s = b;
						if (!s.hasModel() || o.start >= s.getLength()) return;
						const l = s.cellAt(o.start);
						switch (f) {
							case h.NotebookEditorRevealType.Default:
								return s.revealCellRangeInView(o);
							case h.NotebookEditorRevealType.InCenter:
								return s.revealInCenter(l);
							case h.NotebookEditorRevealType.InCenterIfOutsideViewport:
								return s.revealInCenterIfOutsideViewport(l);
							case h.NotebookEditorRevealType.AtTop:
								return s.revealInViewAtTop(l);
						}
					}
					$trySetSelections(p, o) {
						const f = this.f.getNotebookEditor(p);
						f &&
							(f.setSelections(o),
							o.length &&
								f.setFocus({ start: o[0].start, end: o[0].start + 1 }));
					}
				};
				(e.$Fpc = n),
					(e.$Fpc = n =
						Ne([j(1, a.$IY), j(2, m.$n5b), j(3, u.$EY), j(4, E.$gj)], n));
			},
		),
		define(
			de[572],
			he([1, 0, 24, 37, 28, 9, 199, 108, 70, 509, 18]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$iJb = e.$hJb = void 0);
				class a extends C.$szb {
					static is(n) {
						return n instanceof a
							? !0
							: E.URI.isUri(n.resource) && (0, w.$ng)(n.cellEdit);
					}
					static lift(n) {
						return n instanceof a
							? n
							: new a(n.resource, n.cellEdit, n.notebookVersionId, n.metadata);
					}
					constructor(n, g, p = void 0, o) {
						super(o),
							(this.resource = n),
							(this.cellEdit = g),
							(this.notebookVersionId = p);
					}
				}
				e.$hJb = a;
				let h = class {
					constructor(n, g, p, o, f, b, s) {
						(this.c = n),
							(this.d = p),
							(this.f = o),
							(this.g = f),
							(this.h = b),
							(this.i = s),
							(this.g = this.g.map((l) => {
								if (l.resource.scheme === m.CellUri.scheme) {
									const y = m.CellUri.parse(l.resource)?.notebook;
									if (!y)
										throw new Error(`Invalid notebook URI: ${l.resource}`);
									return new a(y, l.cellEdit, l.notebookVersionId, l.metadata);
								} else return l;
							}));
					}
					async apply() {
						const n = [],
							g = (0, t.$Db)(this.g, (p, o) =>
								(0, i.$Ff)(p.resource.toString(), o.resource.toString()),
							);
						for (const p of g) {
							if (this.f.isCancellationRequested) break;
							const [o] = p,
								f = await this.i.resolve(o.resource);
							if (
								typeof o.notebookVersionId == "number" &&
								f.object.notebook.versionId !== o.notebookVersionId
							)
								throw (
									(f.dispose(),
									new Error(
										`Notebook '${o.resource}' has changed in the meantime`,
									))
								);
							const b = p.map(($) => $.cellEdit),
								s = !f.object.isReadonly(),
								l = (0, d.$eJb)(this.h.activeEditorPane),
								y =
									l?.textModel?.uri.toString() ===
									f.object.notebook.uri.toString()
										? {
												kind: m.SelectionStateType.Index,
												focus: l.getFocus(),
												selections: l.getSelections(),
											}
										: void 0;
							f.object.notebook.applyEdits(b, !0, y, () => {}, this.c, s),
								f.dispose(),
								this.d.report(void 0),
								n.push(o.resource);
						}
						return n;
					}
				};
				(e.$iJb = h), (e.$iJb = h = Ne([j(5, u.$IY), j(6, r.$OIb)], h));
			},
		),
		define(
			de[1303],
			he([1, 0, 76, 197, 199, 34, 68, 88, 572, 70, 137, 101]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wmc = void 0),
					(e.$xmc = c);
				let h = class {
					constructor(g, p, o, f, b) {
						(this.a = p), (this.b = o), (this.c = f), (this.d = b);
					}
					dispose() {}
					$tryApplyWorkspaceEdit(g, p, o) {
						const f = c(g.value, this.c);
						return this.d?.isEnabled() === !0 &&
							this.d.maybeInterceptBulkEdit(f)
							? Promise.resolve(!1)
							: this.a
									.apply(f, { undoRedoGroupId: p, respectAutoSaveConfig: o })
									.then(
										(b) => b.isApplied,
										(b) => (this.b.warn(`IGNORING workspace edit: ${b}`), !1),
									);
					}
				};
				(e.$wmc = h),
					(e.$wmc = h =
						Ne(
							[
								(0, a.$tmc)(d.$lbb.MainThreadBulkEdits),
								j(1, w.$rzb),
								j(2, E.$ik),
								j(3, C.$Vl),
								j(4, u.$lfc),
							],
							h,
						));
				function c(n, g, p) {
					if (!n || !n.edits) return n;
					const o = (0, i.$ji)(n);
					for (const f of o.edits) {
						if (
							(w.$tzb.is(f) && (f.resource = g.asCanonicalUri(f.resource)),
							w.$uzb.is(f))
						) {
							if (f.options) {
								const b = f.options?.contents;
								if (b)
									if (b.type === "base64")
										f.options.contents = Promise.resolve((0, t.$af)(b.value));
									else if (p) f.options.contents = p(b.id);
									else throw new Error("Could not revive data transfer file");
							}
							(f.newResource =
								f.newResource && g.asCanonicalUri(f.newResource)),
								(f.oldResource =
									f.oldResource && g.asCanonicalUri(f.oldResource));
						}
						if (m.$hJb.is(f)) {
							f.resource = g.asCanonicalUri(f.resource);
							const b = f.cellEdit;
							b.editType === r.CellEditType.Replace &&
								(f.cellEdit = {
									...b,
									cells: b.cells.map((s) => ({
										...s,
										outputs: s.outputs.map((l) => ({
											...l,
											outputs: l.items.map((y) => ({
												mime: y.mime,
												data: y.valueBytes,
											})),
										})),
									})),
								});
						}
					}
					return n;
				}
			},
		),
		define(
			de[3484],
			he([
				1, 0, 489, 29, 6, 318, 3, 59, 197, 82, 9, 74, 61, 152, 69, 1591, 68,
				1303, 1836, 1697, 978, 568, 1003, 101, 88,
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
			) {
				"use strict";
				var S;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$8nc = e.$7nc = e.$6nc = e.$5nc = void 0),
					(a = mt(a)),
					(f = mt(f)),
					(s = mt(s)),
					(l = mt(l)),
					(y = mt(y));
				let I = (S = class extends C.$1c {
					constructor(N, A, R, O, B) {
						if (
							(super(),
							(this.c = A),
							(this.f = R),
							(this.g = O),
							(this.h = B),
							(this.b = this.D(new C.$0c())),
							(this.u = new Map()),
							(this.G = new Map()),
							(this.a = N.getProxy(v.$mbb.ExtHostLanguageFeatures)),
							this.c)
						) {
							const U = () => {
								const z = [];
								for (const F of A.getRegisteredLanguageIds()) {
									const x = this.f
										.getLanguageConfiguration(F)
										.getWordDefinition();
									z.push({
										languageId: F,
										regexSource: x.source,
										regexFlags: x.flags,
									});
								}
								this.a.$setWordDefinitions(z);
							};
							this.D(
								this.f.onDidChange((z) => {
									if (!z.languageId) U();
									else {
										const F = this.f
											.getLanguageConfiguration(z.languageId)
											.getWordDefinition();
										this.a.$setWordDefinitions([
											{
												languageId: z.languageId,
												regexSource: F.source,
												regexFlags: F.flags,
											},
										]);
									}
								}),
							),
								U();
						}
					}
					$unregister(N) {
						this.b.deleteAndDispose(N);
					}
					static j(N) {
						return (
							N &&
							(Array.isArray(N)
								? (N.forEach((A) => S.j(A)), N)
								: ((N.uri = u.URI.revive(N.uri)), N))
						);
					}
					static m(N) {
						return (
							N &&
							(Array.isArray(N)
								? (N.forEach((A) => S.m(A)), N)
								: ((N.uri = u.URI.revive(N.uri)), N))
						);
					}
					static n(N) {
						return (
							N &&
							(Array.isArray(N)
								? (N.forEach(S.n), N)
								: ((N.location = S.j(N.location)), N))
						);
					}
					static q(N, A) {
						return N?.forEach((R) => (0, o.$xmc)(R.edit, A)), N;
					}
					static r(N) {
						return (
							N.url &&
								typeof N.url != "string" &&
								(N.url = u.URI.revive(N.url)),
							N
						);
					}
					static s(N) {
						return N && (N.uri = u.URI.revive(N.uri)), N;
					}
					static t(N) {
						return N && (N.uri = u.URI.revive(N.uri)), N;
					}
					$registerDocumentSymbolProvider(N, A, R) {
						this.b.set(
							N,
							this.g.documentSymbolProvider.register(A, {
								displayName: R,
								provideDocumentSymbols: (O, B) =>
									this.a.$provideDocumentSymbols(N, O.uri, B),
							}),
						);
					}
					$registerCodeLensSupport(N, A, R) {
						const O = {
							provideCodeLenses: async (B, U) => {
								const z = await this.a.$provideCodeLenses(N, B.uri, U);
								if (z)
									return {
										lenses: z.lenses,
										dispose: () =>
											z.cacheId && this.a.$releaseCodeLenses(N, z.cacheId),
									};
							},
							resolveCodeLens: async (B, U, z) => {
								const F = await this.a.$resolveCodeLens(N, U, z);
								if (F) return { ...F, range: B.validateRange(F.range) };
							},
						};
						if (typeof R == "number") {
							const B = new w.$re();
							this.b.set(R, B), (O.onDidChange = B.event);
						}
						this.b.set(N, this.g.codeLensProvider.register(A, O));
					}
					$emitCodeLensEvent(N, A) {
						const R = this.b.get(N);
						R instanceof w.$re && R.fire(A);
					}
					$registerDefinitionSupport(N, A) {
						this.b.set(
							N,
							this.g.definitionProvider.register(A, {
								provideDefinition: (R, O, B) =>
									this.a.$provideDefinition(N, R.uri, O, B).then(S.m),
							}),
						);
					}
					$registerDeclarationSupport(N, A) {
						this.b.set(
							N,
							this.g.declarationProvider.register(A, {
								provideDeclaration: (R, O, B) =>
									this.a.$provideDeclaration(N, R.uri, O, B).then(S.m),
							}),
						);
					}
					$registerImplementationSupport(N, A) {
						this.b.set(
							N,
							this.g.implementationProvider.register(A, {
								provideImplementation: (R, O, B) =>
									this.a.$provideImplementation(N, R.uri, O, B).then(S.m),
							}),
						);
					}
					$registerTypeDefinitionSupport(N, A) {
						this.b.set(
							N,
							this.g.typeDefinitionProvider.register(A, {
								provideTypeDefinition: (R, O, B) =>
									this.a.$provideTypeDefinition(N, R.uri, O, B).then(S.m),
							}),
						);
					}
					$registerHoverProvider(N, A) {
						this.b.set(
							N,
							this.g.hoverProvider.register(A, {
								provideHover: async (R, O, B, U) => {
									const z = {
										verbosityRequest: U?.verbosityRequest
											? {
													verbosityDelta: U.verbosityRequest.verbosityDelta,
													previousHover: {
														id: U.verbosityRequest.previousHover.id,
													},
												}
											: void 0,
									};
									return await this.a.$provideHover(N, R.uri, O, z, B);
								},
							}),
						);
					}
					$registerEvaluatableExpressionProvider(N, A) {
						this.b.set(
							N,
							this.g.evaluatableExpressionProvider.register(A, {
								provideEvaluatableExpression: (R, O, B) =>
									this.a.$provideEvaluatableExpression(N, R.uri, O, B),
							}),
						);
					}
					$registerInlineValuesProvider(N, A, R) {
						const O = {
							provideInlineValues: (B, U, z, F) =>
								this.a.$provideInlineValues(N, B.uri, U, z, F),
						};
						if (typeof R == "number") {
							const B = new w.$re();
							this.b.set(R, B), (O.onDidChangeInlineValues = B.event);
						}
						this.b.set(N, this.g.inlineValuesProvider.register(A, O));
					}
					$emitInlineValuesEvent(N, A) {
						const R = this.b.get(N);
						R instanceof w.$re && R.fire(A);
					}
					$registerDocumentHighlightProvider(N, A) {
						this.b.set(
							N,
							this.g.documentHighlightProvider.register(A, {
								provideDocumentHighlights: (R, O, B) =>
									this.a.$provideDocumentHighlights(N, R.uri, O, B),
							}),
						);
					}
					$registerMultiDocumentHighlightProvider(N, A) {
						this.b.set(
							N,
							this.g.multiDocumentHighlightProvider.register(A, {
								selector: A,
								provideMultiDocumentHighlights: (R, O, B, U) =>
									this.a
										.$provideMultiDocumentHighlights(
											N,
											R.uri,
											O,
											B.map((z) => z.uri),
											U,
										)
										.then((z) => {
											if (z == null) return;
											const F = new d.$Gc();
											return (
												z?.forEach((x) => {
													const H = u.URI.revive(x.uri);
													F.has(H)
														? F.get(H).push(...x.highlights)
														: F.set(H, x.highlights);
												}),
												F
											);
										}),
							}),
						);
					}
					$registerLinkedEditingRangeProvider(N, A) {
						this.b.set(
							N,
							this.g.linkedEditingRangeProvider.register(A, {
								provideLinkedEditingRanges: async (R, O, B) => {
									const U = await this.a.$provideLinkedEditingRanges(
										N,
										R.uri,
										O,
										B,
									);
									if (U)
										return {
											ranges: U.ranges,
											wordPattern: U.wordPattern ? S.y(U.wordPattern) : void 0,
										};
								},
							}),
						);
					}
					$registerReferenceSupport(N, A) {
						this.b.set(
							N,
							this.g.referenceProvider.register(A, {
								provideReferences: (R, O, B, U) =>
									this.a.$provideReferences(N, R.uri, O, B, U).then(S.j),
							}),
						);
					}
					$registerCodeActionSupport(N, A, R, O, B, U) {
						const z = {
							provideCodeActions: async (F, x, H, q) => {
								const V = await this.a.$provideCodeActions(N, F.uri, x, H, q);
								if (V)
									return {
										actions: S.q(V.actions, this.h),
										dispose: () => {
											typeof V.cacheId == "number" &&
												this.a.$releaseCodeActions(N, V.cacheId);
										},
									};
							},
							providedCodeActionKinds: R.providedKinds,
							documentation: R.documentation,
							displayName: O,
							extensionId: B,
						};
						U &&
							(z.resolveCodeAction = async (F, x) => {
								const H = await this.a.$resolveCodeAction(N, F.cacheId, x);
								return (
									H.edit && (F.edit = (0, o.$xmc)(H.edit, this.h)),
									H.command && (F.command = H.command),
									F
								);
							}),
							this.b.set(N, this.g.codeActionProvider.register(A, z));
					}
					$registerPasteEditProvider(N, A, R) {
						const O = new T(N, this.a, R, this.h);
						this.u.set(N, O),
							this.b.set(
								N,
								(0, C.$Xc)(
									this.g.documentPasteEditProvider.register(A, O),
									(0, C.$Yc)(() => this.u.delete(N)),
								),
							);
					}
					$resolvePasteFileData(N, A, R) {
						const O = this.u.get(N);
						if (!O) throw new Error("Could not find provider");
						return O.resolveFileData(A, R);
					}
					$registerDocumentFormattingSupport(N, A, R, O) {
						this.b.set(
							N,
							this.g.documentFormattingEditProvider.register(A, {
								extensionId: R,
								displayName: O,
								provideDocumentFormattingEdits: (B, U, z) =>
									this.a.$provideDocumentFormattingEdits(N, B.uri, U, z),
							}),
						);
					}
					$registerRangeFormattingSupport(N, A, R, O, B) {
						this.b.set(
							N,
							this.g.documentRangeFormattingEditProvider.register(A, {
								extensionId: R,
								displayName: O,
								provideDocumentRangeFormattingEdits: (U, z, F, x) =>
									this.a.$provideDocumentRangeFormattingEdits(
										N,
										U.uri,
										z,
										F,
										x,
									),
								provideDocumentRangesFormattingEdits: B
									? (U, z, F, x) =>
											this.a.$provideDocumentRangesFormattingEdits(
												N,
												U.uri,
												z,
												F,
												x,
											)
									: void 0,
							}),
						);
					}
					$registerOnTypeFormattingSupport(N, A, R, O) {
						this.b.set(
							N,
							this.g.onTypeFormattingEditProvider.register(A, {
								extensionId: O,
								autoFormatTriggerCharacters: R,
								provideOnTypeFormattingEdits: (B, U, z, F, x) =>
									this.a.$provideOnTypeFormattingEdits(N, B.uri, U, z, F, x),
							}),
						);
					}
					$registerNavigateTypeSupport(N, A) {
						let R;
						const O = {
							provideWorkspaceSymbols: async (B, U) => {
								const z = await this.a.$provideWorkspaceSymbols(N, B, U);
								return (
									R !== void 0 && this.a.$releaseWorkspaceSymbols(N, R),
									(R = z.cacheId),
									S.n(z.symbols)
								);
							},
						};
						A &&
							(O.resolveWorkspaceSymbol = async (B, U) => {
								const z = await this.a.$resolveWorkspaceSymbol(N, B, U);
								return z && S.n(z);
							}),
							this.b.set(N, l.WorkspaceSymbolProviderRegistry.register(O));
					}
					$registerRenameSupport(N, A, R) {
						this.b.set(
							N,
							this.g.renameProvider.register(A, {
								provideRenameEdits: (O, B, U, z) =>
									this.a
										.$provideRenameEdits(N, O.uri, B, U, z)
										.then((F) => (0, o.$xmc)(F, this.h)),
								resolveRenameLocation: R
									? (O, B, U) => this.a.$resolveRenameLocation(N, O.uri, B, U)
									: void 0,
							}),
						);
					}
					$registerNewSymbolNamesProvider(N, A) {
						this.b.set(
							N,
							this.g.newSymbolNamesProvider.register(A, {
								supportsAutomaticNewSymbolNamesTriggerKind:
									this.a.$supportsAutomaticNewSymbolNamesTriggerKind(N),
								provideNewSymbolNames: (R, O, B, U) =>
									this.a.$provideNewSymbolNames(N, R.uri, O, B, U),
							}),
						);
					}
					$registerDocumentSemanticTokensProvider(N, A, R, O) {
						let B;
						if (typeof O == "number") {
							const U = new w.$re();
							this.b.set(O, U), (B = U.event);
						}
						this.b.set(
							N,
							this.g.documentSemanticTokensProvider.register(
								A,
								new k(this.a, N, R, B),
							),
						);
					}
					$emitDocumentSemanticTokensEvent(N) {
						const A = this.b.get(N);
						A instanceof w.$re && A.fire(void 0);
					}
					$registerDocumentRangeSemanticTokensProvider(N, A, R) {
						this.b.set(
							N,
							this.g.documentRangeSemanticTokensProvider.register(
								A,
								new L(this.a, N, R),
							),
						);
					}
					static w(N, A, R) {
						const O = A[v.ISuggestDataDtoField.label],
							B = A[v.ISuggestDataDtoField.commandId],
							U = A[v.ISuggestDataDtoField.commandIdent],
							z = A[v.ISuggestDataDtoField.commitCharacters];
						return {
							label: O,
							extensionId: R,
							kind:
								A[v.ISuggestDataDtoField.kind] ?? a.CompletionItemKind.Property,
							tags: A[v.ISuggestDataDtoField.kindModifier],
							detail: A[v.ISuggestDataDtoField.detail],
							documentation: A[v.ISuggestDataDtoField.documentation],
							sortText: A[v.ISuggestDataDtoField.sortText],
							filterText: A[v.ISuggestDataDtoField.filterText],
							preselect: A[v.ISuggestDataDtoField.preselect],
							insertText:
								A[v.ISuggestDataDtoField.insertText] ??
								(typeof O == "string" ? O : O.label),
							range: A[v.ISuggestDataDtoField.range] ?? N,
							insertTextRules: A[v.ISuggestDataDtoField.insertTextRules],
							commitCharacters: z ? Array.from(z) : void 0,
							additionalTextEdits:
								A[v.ISuggestDataDtoField.additionalTextEdits],
							command: B
								? {
										$ident: U,
										id: B,
										title: "",
										arguments: U
											? [U]
											: A[v.ISuggestDataDtoField.commandArguments],
									}
								: void 0,
							_id: A.x,
						};
					}
					$registerCompletionsProvider(N, A, R, O, B) {
						const U = {
							triggerCharacters: R,
							_debugDisplayName: `${B.value}(${R.join("")})`,
							provideCompletionItems: async (z, F, x, H) => {
								const q = await this.a.$provideCompletionItems(
									N,
									z.uri,
									F,
									x,
									H,
								);
								return (
									q && {
										suggestions: q[v.ISuggestResultDtoField.completions].map(
											(V) =>
												S.w(q[v.ISuggestResultDtoField.defaultRanges], V, B),
										),
										incomplete: q[v.ISuggestResultDtoField.isIncomplete] || !1,
										duration: q[v.ISuggestResultDtoField.duration],
										dispose: () => {
											typeof q.x == "number" &&
												this.a.$releaseCompletionItems(N, q.x);
										},
									}
								);
							},
						};
						O &&
							(U.resolveCompletionItem = (z, F) =>
								this.a.$resolveCompletionItem(N, z._id, F).then((x) => {
									if (!x) return z;
									const H = S.w(z.range, x, B);
									return (0, r.$yo)(z, H, !0);
								})),
							this.b.set(N, this.g.completionProvider.register(A, U));
					}
					$registerInlineCompletionsSupport(N, A, R, O, B) {
						const U = {
							provideInlineCompletions: async (z, F, x, H) =>
								this.a.$provideInlineCompletions(N, z.uri, F, x, H),
							provideInlineEdits: async (z, F, x, H) =>
								this.a.$provideInlineEdits(N, z.uri, F, x, H),
							handleItemDidShow: async (z, F, x) => {
								R &&
									(await this.a.$handleInlineCompletionDidShow(
										N,
										z.pid,
										F.idx,
										x,
									));
							},
							handlePartialAccept: async (z, F, x, H) => {
								R &&
									(await this.a.$handleInlineCompletionPartialAccept(
										N,
										z.pid,
										F.idx,
										x,
										H,
									));
							},
							freeInlineCompletions: (z) => {
								this.a.$freeInlineCompletionsList(N, z.pid);
							},
							groupId: O,
							yieldsToGroupIds: B,
							toString() {
								return `InlineCompletionsProvider(${O})`;
							},
						};
						this.b.set(N, this.g.inlineCompletionsProvider.register(A, U));
					}
					$registerInlineEditProvider(N, A, R) {
						const O = {
							provideInlineEdit: async (B, U, z) =>
								this.a.$provideInlineEdit(N, B.uri, U, z),
							freeInlineEdit: (B) => {
								this.a.$freeInlineEdit(N, B.pid);
							},
						};
						this.b.set(N, this.g.inlineEditProvider.register(A, O));
					}
					$registerSignatureHelpProvider(N, A, R) {
						this.b.set(
							N,
							this.g.signatureHelpProvider.register(A, {
								signatureHelpTriggerCharacters: R.triggerCharacters,
								signatureHelpRetriggerCharacters: R.retriggerCharacters,
								provideSignatureHelp: async (O, B, U, z) => {
									const F = await this.a.$provideSignatureHelp(
										N,
										O.uri,
										B,
										z,
										U,
									);
									if (F)
										return {
											value: F,
											dispose: () => {
												this.a.$releaseSignatureHelp(N, F.id);
											},
										};
								},
							}),
						);
					}
					$registerInlayHintsProvider(N, A, R, O, B) {
						const U = {
							displayName: B,
							provideInlayHints: async (z, F, x) => {
								const H = await this.a.$provideInlayHints(N, z.uri, F, x);
								if (H)
									return {
										hints: (0, m.$ji)(H.hints),
										dispose: () => {
											H.cacheId && this.a.$releaseInlayHints(N, H.cacheId);
										},
									};
							},
						};
						if (
							(R &&
								(U.resolveInlayHint = async (z, F) => {
									const x = z;
									if (!x.cacheId) return z;
									const H = await this.a.$resolveInlayHint(N, x.cacheId, F);
									if (F.isCancellationRequested) throw new i.$9();
									return H
										? {
												...z,
												tooltip: H.tooltip,
												label: (0, m.$ji)(H.label),
												textEdits: H.textEdits,
											}
										: z;
								}),
							typeof O == "number")
						) {
							const z = new w.$re();
							this.b.set(O, z), (U.onDidChangeInlayHints = z.event);
						}
						this.b.set(N, this.g.inlayHintsProvider.register(A, U));
					}
					$emitInlayHintsEvent(N) {
						const A = this.b.get(N);
						A instanceof w.$re && A.fire(void 0);
					}
					$registerDocumentLinkProvider(N, A, R) {
						const O = {
							provideLinks: (B, U) =>
								this.a.$provideDocumentLinks(N, B.uri, U).then((z) => {
									if (z)
										return {
											links: z.links.map(S.r),
											dispose: () => {
												typeof z.cacheId == "number" &&
													this.a.$releaseDocumentLinks(N, z.cacheId);
											},
										};
								}),
						};
						R &&
							(O.resolveLink = (B, U) => {
								const z = B;
								return z.cacheId
									? this.a
											.$resolveDocumentLink(N, z.cacheId, U)
											.then((F) => F && S.r(F))
									: B;
							}),
							this.b.set(N, this.g.linkProvider.register(A, O));
					}
					$registerDocumentColorProvider(N, A) {
						const R = this.a;
						this.b.set(
							N,
							this.g.colorProvider.register(A, {
								provideDocumentColors: (O, B) =>
									R.$provideDocumentColors(N, O.uri, B).then((U) =>
										U.map((z) => {
											const [F, x, H, q] = z.color;
											return {
												color: { red: F, green: x, blue: H, alpha: q },
												range: z.range,
											};
										}),
									),
								provideColorPresentations: (O, B, U) =>
									R.$provideColorPresentations(
										N,
										O.uri,
										{
											color: [
												B.color.red,
												B.color.green,
												B.color.blue,
												B.color.alpha,
											],
											range: B.range,
										},
										U,
									),
							}),
						);
					}
					$registerFoldingRangeProvider(N, A, R, O) {
						const B = {
							id: R.value,
							provideFoldingRanges: (U, z, F) =>
								this.a.$provideFoldingRanges(N, U.uri, z, F),
						};
						if (typeof O == "number") {
							const U = new w.$re();
							this.b.set(O, U), (B.onDidChange = U.event);
						}
						this.b.set(N, this.g.foldingRangeProvider.register(A, B));
					}
					$emitFoldingRangeEvent(N, A) {
						const R = this.b.get(N);
						R instanceof w.$re && R.fire(A);
					}
					$registerSelectionRangeProvider(N, A) {
						this.b.set(
							N,
							this.g.selectionRangeProvider.register(A, {
								provideSelectionRanges: (R, O, B) =>
									this.a.$provideSelectionRanges(N, R.uri, O, B),
							}),
						);
					}
					$registerCallHierarchyProvider(N, A) {
						this.b.set(
							N,
							s.$O1.register(A, {
								prepareCallHierarchy: async (R, O, B) => {
									const U = await this.a.$prepareCallHierarchy(N, R.uri, O, B);
									if (!(!U || U.length === 0))
										return {
											dispose: () => {
												for (const z of U)
													this.a.$releaseCallHierarchy(N, z._sessionId);
											},
											roots: U.map(S.s),
										};
								},
								provideOutgoingCalls: async (R, O) => {
									const B = await this.a.$provideCallHierarchyOutgoingCalls(
										N,
										R._sessionId,
										R._itemId,
										O,
									);
									return (
										B &&
										(B.forEach((U) => {
											U.to = S.s(U.to);
										}),
										B)
									);
								},
								provideIncomingCalls: async (R, O) => {
									const B = await this.a.$provideCallHierarchyIncomingCalls(
										N,
										R._sessionId,
										R._itemId,
										O,
									);
									return (
										B &&
										(B.forEach((U) => {
											U.from = S.s(U.from);
										}),
										B)
									);
								},
							}),
						);
					}
					static y(N) {
						return new RegExp(N.pattern, N.flags);
					}
					static z(N) {
						return {
							decreaseIndentPattern: S.y(N.decreaseIndentPattern),
							increaseIndentPattern: S.y(N.increaseIndentPattern),
							indentNextLinePattern: N.indentNextLinePattern
								? S.y(N.indentNextLinePattern)
								: void 0,
							unIndentedLinePattern: N.unIndentedLinePattern
								? S.y(N.unIndentedLinePattern)
								: void 0,
						};
					}
					static C(N) {
						return {
							beforeText: S.y(N.beforeText),
							afterText: N.afterText ? S.y(N.afterText) : void 0,
							previousLineText: N.previousLineText
								? S.y(N.previousLineText)
								: void 0,
							action: N.action,
						};
					}
					static F(N) {
						return N.map(S.C);
					}
					$setLanguageConfiguration(N, A, R) {
						const O = {
							comments: R.comments,
							brackets: R.brackets,
							wordPattern: R.wordPattern ? S.y(R.wordPattern) : void 0,
							indentationRules: R.indentationRules
								? S.z(R.indentationRules)
								: void 0,
							onEnterRules: R.onEnterRules ? S.F(R.onEnterRules) : void 0,
							autoClosingPairs: void 0,
							surroundingPairs: void 0,
							__electricCharacterSupport: void 0,
						};
						R.autoClosingPairs
							? (O.autoClosingPairs = R.autoClosingPairs)
							: R.__characterPairSupport &&
								(O.autoClosingPairs =
									R.__characterPairSupport.autoClosingPairs),
							R.__electricCharacterSupport &&
								R.__electricCharacterSupport.docComment &&
								(O.__electricCharacterSupport = {
									docComment: {
										open: R.__electricCharacterSupport.docComment.open,
										close: R.__electricCharacterSupport.docComment.close,
									},
								}),
							this.c.isRegisteredLanguageId(A) &&
								this.b.set(N, this.f.register(A, O, 100));
					}
					$registerTypeHierarchyProvider(N, A) {
						this.b.set(
							N,
							y.$67.register(A, {
								prepareTypeHierarchy: async (R, O, B) => {
									const U = await this.a.$prepareTypeHierarchy(N, R.uri, O, B);
									if (U)
										return {
											dispose: () => {
												for (const z of U)
													this.a.$releaseTypeHierarchy(N, z._sessionId);
											},
											roots: U.map(S.t),
										};
								},
								provideSupertypes: async (R, O) => {
									const B = await this.a.$provideTypeHierarchySupertypes(
										N,
										R._sessionId,
										R._itemId,
										O,
									);
									return B && B.map(S.t);
								},
								provideSubtypes: async (R, O) => {
									const B = await this.a.$provideTypeHierarchySubtypes(
										N,
										R._sessionId,
										R._itemId,
										O,
									);
									return B && B.map(S.t);
								},
							}),
						);
					}
					$registerDocumentOnDropEditProvider(N, A, R) {
						const O = new P(N, this.a, R, this.h);
						this.G.set(N, O),
							this.b.set(
								N,
								(0, C.$Xc)(
									this.g.documentDropEditProvider.register(A, O),
									(0, C.$Yc)(() => this.G.delete(N)),
								),
							);
					}
					async $resolveDocumentOnDropFileData(N, A, R) {
						const O = this.G.get(N);
						if (!O) throw new Error("Could not find provider");
						return O.resolveDocumentOnDropFileData(A, R);
					}
					$registerMappedEditsProvider(N, A, R) {
						const O = new D(R, N, this.a, this.h);
						this.b.set(N, this.g.mappedEditsProvider.register(A, O));
					}
				});
				(e.$5nc = I),
					(e.$5nc =
						I =
						S =
							Ne(
								[
									(0, $.$tmc)(v.$lbb.MainThreadLanguageFeatures),
									j(1, h.$nM),
									j(2, c.$aN),
									j(3, n.$k3),
									j(4, p.$Vl),
								],
								I,
							));
				let T = class {
					constructor(N, A, R, O) {
						(this.b = N),
							(this.c = A),
							(this.f = O),
							(this.a = new b.$4nc()),
							(this.copyMimeTypes = R.copyMimeTypes),
							(this.pasteMimeTypes = R.pasteMimeTypes),
							(this.providedPasteEditKinds = R.providedPasteEditKinds?.map(
								(B) => new E.$1L(B),
							)),
							R.supportsCopy &&
								(this.prepareDocumentPaste = async (B, U, z, F) => {
									const x = await f.DataTransfer.from(z);
									if (F.isCancellationRequested) return;
									const H = await this.c.$prepareDocumentPaste(
										N,
										B.uri,
										U,
										x,
										F,
									);
									if (!H) return;
									const q = new t.$XL();
									for (const [V, G] of H.items)
										q.replace(V, (0, t.$VL)(G.asString));
									return q;
								}),
							R.supportsPaste &&
								(this.provideDocumentPasteEdits = async (B, U, z, F, x) => {
									const H = this.a.add(z);
									try {
										const q = await f.DataTransfer.from(z);
										if (x.isCancellationRequested) return;
										const V = await this.c.$providePasteEdits(
											this.b,
											H.id,
											B.uri,
											U,
											q,
											{ only: F.only?.value, triggerKind: F.triggerKind },
											x,
										);
										return V
											? {
													edits: V.map((G) => ({
														...G,
														kind: G.kind
															? new E.$1L(G.kind.value)
															: new E.$1L(""),
														yieldTo: G.yieldTo?.map((K) => ({
															kind: new E.$1L(K),
														})),
														additionalEdit: G.additionalEdit
															? (0, o.$xmc)(G.additionalEdit, this.f, (K) =>
																	this.resolveFileData(H.id, K),
																)
															: void 0,
													})),
													dispose: () => {
														this.c.$releasePasteEdits(this.b, H.id);
													},
												}
											: void 0;
									} finally {
										H.dispose();
									}
								}),
							R.supportsResolve &&
								(this.resolveDocumentPasteEdit = async (B, U) => {
									const z = await this.c.$resolvePasteEdit(
										this.b,
										B._cacheId,
										U,
									);
									return (
										z.additionalEdit &&
											(B.additionalEdit = (0, o.$xmc)(
												z.additionalEdit,
												this.f,
											)),
										B
									);
								});
					}
					resolveFileData(N, A) {
						return this.a.resolveFileData(N, A);
					}
				};
				T = Ne([j(3, p.$Vl)], T);
				let P = class {
					constructor(N, A, R, O) {
						(this.b = N),
							(this.c = A),
							(this.f = O),
							(this.a = new b.$4nc()),
							(this.dropMimeTypes = R?.dropMimeTypes ?? ["*/*"]),
							R?.supportsResolve &&
								(this.resolveDocumentDropEdit = async (B, U) => {
									const z = await this.c.$resolvePasteEdit(
										this.b,
										B._cacheId,
										U,
									);
									return (
										z.additionalEdit &&
											(B.additionalEdit = (0, o.$xmc)(
												z.additionalEdit,
												this.f,
											)),
										B
									);
								});
					}
					async provideDocumentDropEdits(N, A, R, O) {
						const B = this.a.add(R);
						try {
							const U = await f.DataTransfer.from(R);
							if (O.isCancellationRequested) return;
							const z = await this.c.$provideDocumentOnDropEdits(
								this.b,
								B.id,
								N.uri,
								A,
								U,
								O,
							);
							return z
								? {
										edits: z.map((F) => ({
											...F,
											yieldTo: F.yieldTo?.map((x) => ({ kind: new E.$1L(x) })),
											kind: F.kind ? new E.$1L(F.kind) : void 0,
											additionalEdit: (0, o.$xmc)(
												F.additionalEdit,
												this.f,
												(x) => this.resolveDocumentOnDropFileData(B.id, x),
											),
										})),
										dispose: () => {
											this.c.$releaseDocumentOnDropEdits(this.b, B.id);
										},
									}
								: void 0;
						} finally {
							B.dispose();
						}
					}
					resolveDocumentOnDropFileData(N, A) {
						return this.a.resolveFileData(N, A);
					}
				};
				P = Ne([j(3, p.$Vl)], P);
				class k {
					constructor(N, A, R, O) {
						(this.a = N), (this.b = A), (this.c = R), (this.onDidChange = O);
					}
					releaseDocumentSemanticTokens(N) {
						N && this.a.$releaseDocumentSemanticTokens(this.b, parseInt(N, 10));
					}
					getLegend() {
						return this.c;
					}
					async provideDocumentSemanticTokens(N, A, R) {
						const O = A ? parseInt(A, 10) : 0,
							B = await this.a.$provideDocumentSemanticTokens(
								this.b,
								N.uri,
								O,
								R,
							);
						if (!B || R.isCancellationRequested) return null;
						const U = (0, g.$8Ob)(B);
						return U.type === "full"
							? { resultId: String(U.id), data: U.data }
							: { resultId: String(U.id), edits: U.deltas };
					}
				}
				e.$6nc = k;
				class L {
					constructor(N, A, R) {
						(this.a = N), (this.b = A), (this.c = R);
					}
					getLegend() {
						return this.c;
					}
					async provideDocumentRangeSemanticTokens(N, A, R) {
						const O = await this.a.$provideDocumentRangeSemanticTokens(
							this.b,
							N.uri,
							A,
							R,
						);
						if (!O || R.isCancellationRequested) return null;
						const B = (0, g.$8Ob)(O);
						if (B.type === "full")
							return { resultId: String(B.id), data: B.data };
						throw new Error("Unexpected");
					}
				}
				e.$7nc = L;
				class D {
					constructor(N, A, R, O) {
						(this.displayName = N), (this.a = A), (this.b = R), (this.c = O);
					}
					async provideMappedEdits(N, A, R, O) {
						const B = await this.b.$provideMappedEdits(this.a, N.uri, A, R, O);
						return B ? (0, o.$xmc)(B, this.c) : null;
					}
				}
				e.$8nc = D;
			},
		),
		define(
			de[3485],
			he([1, 0, 22, 67, 59, 3, 6, 199, 572, 34]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$_Mc = void 0);
				let u = class {
					constructor(h, c, n, g) {
						(this.a = new w.$Gc()),
							(this.b = new E.$Zc()),
							(this.c = new C.$re()),
							(this.onDidConflict = this.c.event);
						const p = new w.$Gc();
						for (const f of h)
							if (f instanceof d.$tzb) {
								if ((p.set(f.resource, !0), typeof f.versionId == "number")) {
									const b = n.getModel(f.resource);
									b &&
										b.getVersionId() !== f.versionId &&
										(this.a.set(f.resource, !0), this.c.fire(this));
								}
							} else
								f instanceof d.$uzb
									? f.newResource
										? p.set(f.newResource, !0)
										: f.oldResource && p.set(f.oldResource, !0)
									: f instanceof m.$hJb
										? p.set(f.resource, !0)
										: g.warn("UNKNOWN edit type", f);
						this.b.add(
							c.onDidFilesChange((f) => {
								for (const b of p.keys())
									if (!n.getModel(b) && f.contains(b)) {
										this.a.set(b, !0), this.c.fire(this);
										break;
									}
							}),
						);
						const o = (f) => {
							p.has(f.uri) && (this.a.set(f.uri, !0), this.c.fire(this));
						};
						for (const f of n.getModels())
							this.b.add(f.onDidChangeContent(() => o(f)));
					}
					dispose() {
						this.b.dispose(), this.c.dispose();
					}
					list() {
						return [...this.a.keys()];
					}
					hasConflicts() {
						return this.a.size > 0;
					}
				};
				(e.$_Mc = u),
					(e.$_Mc = u = Ne([j(1, t.$ll), j(2, i.$QO), j(3, r.$ik)], u));
			},
		),
		define(
			de[1843],
			he([
				1, 0, 42, 9, 61, 67, 122, 3, 24, 17, 188, 5, 22, 6, 3485, 59, 4, 19,
				199, 14, 47, 389, 649,
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
				var $, v;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$fNc =
						e.$eNc =
						e.$dNc =
						e.$cNc =
						e.BulkFileOperationType =
						e.$bNc =
						e.$aNc =
							void 0);
				class S {
					constructor() {
						(this.c = new WeakMap()),
							(this.d = 0),
							(this.f = new c.$re()),
							(this.onDidChange = this.f.event);
					}
					dispose() {
						this.f.dispose();
					}
					get checkedCount() {
						return this.d;
					}
					isChecked(N) {
						return this.c.get(N) ?? !1;
					}
					updateChecked(N, A) {
						const R = this.c.get(N);
						R !== A &&
							(R === void 0
								? A && (this.d += 1)
								: A
									? (this.d += 1)
									: (this.d -= 1),
							this.c.set(N, A),
							this.f.fire(N));
					}
				}
				e.$aNc = S;
				class I {
					constructor(N, A) {
						(this.parent = N), (this.textEdit = A);
					}
				}
				e.$bNc = I;
				var T;
				(function (M) {
					(M[(M.TextEdit = 1)] = "TextEdit"),
						(M[(M.Create = 2)] = "Create"),
						(M[(M.Delete = 4)] = "Delete"),
						(M[(M.Rename = 8)] = "Rename");
				})(T || (e.BulkFileOperationType = T = {}));
				class P {
					constructor(N, A) {
						(this.uri = N),
							(this.parent = A),
							(this.type = 0),
							(this.textEdits = []),
							(this.originalEdits = new Map());
					}
					addEdit(N, A, R) {
						(this.type |= A),
							this.originalEdits.set(N, R),
							R instanceof f.$tzb
								? this.textEdits.push(new I(this, R))
								: A === T.Rename && (this.newUri = R.newResource);
					}
					needsConfirmation() {
						for (const [, N] of this.originalEdits)
							if (!this.parent.checked.isChecked(N)) return !0;
						return !1;
					}
				}
				e.$cNc = P;
				class k {
					static {
						this.c = Object.freeze({
							label: (0, p.localize)(4503, null),
							icon: b.$ak.symbolFile,
							needsConfirmation: !1,
						});
					}
					static keyOf(N) {
						return N?.label || "<default>";
					}
					constructor(N = k.c) {
						(this.metadata = N), (this.operationByResource = new Map());
					}
					get fileOperations() {
						return this.operationByResource.values();
					}
				}
				e.$dNc = k;
				let L = ($ = class {
					static async create(N, A) {
						return await N.get(a.$Li).createInstance($, A)._init();
					}
					constructor(N, A, R) {
						(this.c = N),
							(this.d = A),
							(this.checked = new S()),
							(this.fileOperations = []),
							(this.categories = []),
							(this.conflicts = R.createInstance(n.$_Mc, N));
					}
					dispose() {
						this.checked.dispose(), this.conflicts.dispose();
					}
					async _init() {
						const N = new Map(),
							A = new Map(),
							R = new g.$Gc();
						for (let O = 0; O < this.c.length; O++) {
							const B = this.c[O];
							let U, z;
							if (
								(this.checked.updateChecked(B, !B.metadata?.needsConfirmation),
								B instanceof f.$tzb)
							)
								(z = T.TextEdit), (U = B.resource);
							else if (B instanceof f.$uzb)
								if (B.newResource && B.oldResource) {
									if (
										((z = T.Rename),
										(U = B.oldResource),
										B.options?.overwrite === void 0 &&
											B.options?.ignoreIfExists &&
											(await this.d.exists(U)))
									)
										continue;
									R.set(B.newResource, U);
								} else if (B.oldResource) {
									if (
										((z = T.Delete),
										(U = B.oldResource),
										B.options?.ignoreIfNotExists && !(await this.d.exists(U)))
									)
										continue;
								} else if (B.newResource) {
									if (
										((z = T.Create),
										(U = B.newResource),
										B.options?.overwrite === void 0 &&
											B.options?.ignoreIfExists &&
											(await this.d.exists(U)))
									)
										continue;
								} else continue;
							else continue;
							const F = (q, V) => {
								let G = o.$dh.getComparisonKey(q, !0),
									K = V.get(G);
								!K &&
									R.has(q) &&
									((q = R.get(q)),
									(G = o.$dh.getComparisonKey(q, !0)),
									(K = V.get(G))),
									K || ((K = new P(q, this)), V.set(G, K)),
									K.addEdit(O, z, B);
							};
							F(U, N);
							const x = k.keyOf(B.metadata);
							let H = A.get(x);
							H || ((H = new k(B.metadata)), A.set(x, H)),
								F(U, H.operationByResource);
						}
						N.forEach((O) => this.fileOperations.push(O)),
							A.forEach((O) => this.categories.push(O));
						for (const O of this.fileOperations)
							if (O.type !== T.TextEdit) {
								let B = !0;
								for (const U of O.originalEdits.values())
									U instanceof f.$uzb && (B = B && this.checked.isChecked(U));
								if (!B)
									for (const U of O.originalEdits.values())
										this.checked.updateChecked(U, B);
							}
						return (
							this.categories.sort((O, B) =>
								O.metadata.needsConfirmation === B.metadata.needsConfirmation
									? O.metadata.label.localeCompare(B.metadata.label)
									: O.metadata.needsConfirmation
										? -1
										: 1,
							),
							this
						);
					}
					getWorkspaceEdit() {
						const N = [];
						let A = !0;
						for (let R = 0; R < this.c.length; R++) {
							const O = this.c[R];
							if (this.checked.isChecked(O)) {
								N[R] = O;
								continue;
							}
							A = !1;
						}
						return A ? this.c : ((0, m.$Mb)(N), N);
					}
					getFileEdits(N) {
						for (const A of this.fileOperations)
							if (A.uri.toString() === N.toString()) {
								const R = [];
								let O = !1;
								for (const B of A.originalEdits.values())
									B instanceof f.$tzb
										? this.checked.isChecked(B) &&
											R.push(
												u.$jL.replaceMove(
													r.$iL.lift(B.textEdit.range),
													B.textEdit.insertAsSnippet
														? l.$Izb.asInsertText(B.textEdit.text)
														: B.textEdit.text,
												),
											)
										: this.checked.isChecked(B) || (O = !0);
								return O
									? []
									: R.sort((B, U) =>
											r.$iL.compareRangesUsingStarts(B.range, U.range),
										);
							}
						return [];
					}
					getUriOfEdit(N) {
						for (const A of this.fileOperations)
							for (const R of A.originalEdits.values())
								if (R === N) return A.uri;
						throw new Error("invalid edit");
					}
				});
				(e.$eNc = L), (e.$eNc = L = $ = Ne([j(1, h.$ll), j(2, a.$Li)], L));
				let D = class {
					static {
						v = this;
					}
					static {
						this.c = "vscode-bulkeditpreview-editor";
					}
					static {
						this.emptyPreview = i.URI.from({
							scheme: this.c,
							fragment: "empty",
						});
					}
					static fromPreviewUri(N) {
						return i.URI.parse(N.query);
					}
					constructor(N, A, R, O) {
						(this.j = N),
							(this.k = A),
							(this.l = R),
							(this.m = O),
							(this.d = new d.$Zc()),
							(this.g = new Map()),
							(this.h = (0, s.$9g)()),
							this.d.add(this.m.registerTextModelContentProvider(v.c, this)),
							(this.f = this.n());
					}
					dispose() {
						this.d.dispose();
					}
					asPreviewUri(N) {
						return i.URI.from({
							scheme: v.c,
							authority: this.h,
							path: N.path,
							query: N.toString(),
						});
					}
					async n() {
						for (const N of this.j.fileOperations) await this.o(N.uri);
						this.d.add(
							c.Event.debounce(
								this.j.checked.onDidChange,
								(N, A) => A,
								y.$me,
							)((N) => {
								const A = this.j.getUriOfEdit(N);
								this.o(A);
							}),
						);
					}
					async o(N) {
						const A = await this.p(N),
							R = this.g.get(A.id);
						R && A.applyEdits(R);
						const O = this.j.getFileEdits(N),
							B = A.applyEdits(O, !0);
						this.g.set(A.id, B);
					}
					async p(N) {
						const A = this.asPreviewUri(N);
						let R = this.l.getModel(A);
						if (!R) {
							try {
								const O = await this.m.createModelReference(N),
									B = O.object.textEditorModel;
								(R = this.l.createModel(
									(0, C.$9X)(B.createSnapshot()),
									this.k.createById(B.getLanguageId()),
									A,
								)),
									O.dispose();
							} catch {
								R = this.l.createModel(
									"",
									this.k.createByFilepathOrFirstLine(A),
									A,
								);
							}
							queueMicrotask(async () => {
								this.d.add(await this.m.createModelReference(R.uri));
							});
						}
						return R;
					}
					async provideTextContent(N) {
						return N.toString() === v.emptyPreview.toString()
							? this.l.createModel("", null, N)
							: (await this.f, this.l.getModel(N));
					}
				};
				(e.$fNc = D),
					(e.$fNc = D = v = Ne([j(1, w.$nM), j(2, E.$QO), j(3, t.$MO)], D));
			},
		),
		define(
			de[3486],
			he([
				1, 0, 42, 132, 410, 17, 7, 3, 122, 1843, 22, 4, 73, 325, 19, 35, 26, 37,
				9, 199, 172, 389, 5,
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
				var $, v, S;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$sNc =
						e.$rNc =
						e.$qNc =
						e.$pNc =
						e.$oNc =
						e.$nNc =
						e.$mNc =
						e.$kNc =
						e.$jNc =
						e.$iNc =
						e.$hNc =
						e.$gNc =
							void 0),
					(e.$lNc = D),
					(C = mt(C));
				class I {
					constructor(q, V) {
						(this.parent = q), (this.category = V);
					}
					isChecked() {
						const q = this.parent;
						let V = !0;
						for (const G of this.category.fileOperations)
							for (const K of G.originalEdits.values())
								V = V && q.checked.isChecked(K);
						return V;
					}
					setChecked(q) {
						const V = this.parent;
						for (const G of this.category.fileOperations)
							for (const K of G.originalEdits.values())
								V.checked.updateChecked(K, q);
					}
				}
				e.$gNc = I;
				class T {
					constructor(q, V) {
						(this.parent = q), (this.edit = V);
					}
					isChecked() {
						const q =
							this.parent instanceof I ? this.parent.parent : this.parent;
						let V = !0;
						this.edit.type === r.BulkFileOperationType.TextEdit &&
							(V = !this.edit.textEdits.every(
								(G) => !q.checked.isChecked(G.textEdit),
							));
						for (const G of this.edit.originalEdits.values())
							G instanceof b.$uzb && (V = V && q.checked.isChecked(G));
						if (
							this.parent instanceof I &&
							this.edit.type === r.BulkFileOperationType.TextEdit
						) {
							for (const G of q.categories)
								for (const K of G.fileOperations)
									if (K.uri.toString() === this.edit.uri.toString())
										for (const J of K.originalEdits.values())
											J instanceof b.$uzb && (V = V && q.checked.isChecked(J));
						}
						return V;
					}
					setChecked(q) {
						const V =
							this.parent instanceof I ? this.parent.parent : this.parent;
						for (const G of this.edit.originalEdits.values())
							V.checked.updateChecked(G, q);
						if (
							this.parent instanceof I &&
							this.edit.type !== r.BulkFileOperationType.TextEdit
						) {
							for (const G of V.categories)
								for (const K of G.fileOperations)
									if (K.uri.toString() === this.edit.uri.toString())
										for (const J of K.originalEdits.values())
											V.checked.updateChecked(J, q);
						}
					}
					isDisabled() {
						if (
							this.parent instanceof I &&
							this.edit.type === r.BulkFileOperationType.TextEdit
						) {
							const q = this.parent.parent;
							let V = !0;
							for (const G of q.categories)
								for (const K of G.fileOperations)
									if (K.uri.toString() === this.edit.uri.toString())
										for (const J of K.originalEdits.values())
											J instanceof b.$uzb && (V = V && q.checked.isChecked(J));
							return !V;
						}
						return !1;
					}
				}
				e.$hNc = T;
				class P {
					constructor(q, V, G, K, J, W, X) {
						(this.parent = q),
							(this.idx = V),
							(this.edit = G),
							(this.prefix = K),
							(this.selecting = J),
							(this.inserting = W),
							(this.suffix = X);
					}
					isChecked() {
						let q = this.parent.parent;
						return (
							q instanceof I && (q = q.parent),
							q.checked.isChecked(this.edit.textEdit)
						);
					}
					setChecked(q) {
						let V = this.parent.parent;
						if (
							(V instanceof I && (V = V.parent),
							V.checked.updateChecked(this.edit.textEdit, q),
							q)
						)
							for (const G of this.parent.edit.originalEdits.values())
								G instanceof b.$uzb && V.checked.updateChecked(G, q);
					}
					isDisabled() {
						return this.parent.isDisabled();
					}
				}
				e.$iNc = P;
				let k = class {
					constructor(q, V) {
						(this.c = q), (this.d = V), (this.groupByFile = !0);
					}
					hasChildren(q) {
						return q instanceof T
							? q.edit.textEdits.length > 0
							: !(q instanceof P);
					}
					async getChildren(q) {
						if (q instanceof r.$eNc)
							return this.groupByFile
								? q.fileOperations.map((V) => new T(q, V))
								: q.categories.map((V) => new I(q, V));
						if (q instanceof I)
							return Array.from(q.category.fileOperations, (V) => new T(q, V));
						if (q instanceof T && q.edit.textEdits.length > 0) {
							let V, G;
							try {
								const J = await this.c.createModelReference(q.edit.uri);
								(V = J.object.textEditorModel), (G = J);
							} catch {
								(V = this.d.createInstance(
									m.$$X,
									"",
									s.$0M,
									m.$$X.DEFAULT_CREATION_OPTIONS,
									null,
								)),
									(G = V);
							}
							const K = q.edit.textEdits.map((J, W) => {
								const X = V.validateRange(J.textEdit.textEdit.range),
									Y = V.tokenization.getLineTokens(X.startLineNumber);
								let ie = 23;
								for (
									let _ = Y.findTokenIndexAtOffset(X.startColumn - 1) - 1;
									ie < 50 && _ >= 0;
									_--
								)
									ie = X.startColumn - Y.getStartOffset(_);
								const ne = V.tokenization.getLineTokens(X.endLineNumber);
								let ee = 0;
								for (
									let _ = ne.findTokenIndexAtOffset(X.endColumn - 1);
									ee < 50 && _ < ne.getCount();
									_++
								)
									ee += ne.getEndOffset(_) - ne.getStartOffset(_);
								return new P(
									q,
									W,
									J,
									V.getValueInRange(
										new E.$iL(
											X.startLineNumber,
											X.startColumn - ie,
											X.startLineNumber,
											X.startColumn,
										),
									),
									V.getValueInRange(X),
									J.textEdit.textEdit.insertAsSnippet
										? l.$Izb.asInsertText(J.textEdit.textEdit.text)
										: J.textEdit.textEdit.text,
									V.getValueInRange(
										new E.$iL(
											X.endLineNumber,
											X.endColumn,
											X.endLineNumber,
											X.endColumn + ee,
										),
									),
								);
							});
							return G.dispose(), K;
						}
						return [];
					}
				};
				(e.$jNc = k), (e.$jNc = k = Ne([j(0, t.$MO), j(1, y.$Li)], k));
				class L {
					compare(q, V) {
						return q instanceof T && V instanceof T
							? D(q.edit, V.edit)
							: q instanceof P && V instanceof P
								? E.$iL.compareRangesUsingStarts(
										q.edit.textEdit.textEdit.range,
										V.edit.textEdit.textEdit.range,
									)
								: 0;
					}
				}
				e.$kNc = L;
				function D(H, q) {
					return (0, o.$Ff)(H.uri.toString(), q.uri.toString());
				}
				let M = class {
					constructor(q) {
						this.c = q;
					}
					getWidgetAriaLabel() {
						return (0, a.localize)(4504, null);
					}
					getRole(q) {
						return "checkbox";
					}
					getAriaLabel(q) {
						if (q instanceof T) {
							if (q.edit.textEdits.length > 0)
								return q.edit.type & r.BulkFileOperationType.Rename &&
									q.edit.newUri
									? (0, a.localize)(
											4505,
											null,
											this.c.getUriLabel(q.edit.uri, { relative: !0 }),
											this.c.getUriLabel(q.edit.newUri, { relative: !0 }),
										)
									: q.edit.type & r.BulkFileOperationType.Create
										? (0, a.localize)(
												4506,
												null,
												this.c.getUriLabel(q.edit.uri, { relative: !0 }),
											)
										: q.edit.type & r.BulkFileOperationType.Delete
											? (0, a.localize)(
													4507,
													null,
													this.c.getUriLabel(q.edit.uri, { relative: !0 }),
												)
											: (0, a.localize)(
													4508,
													null,
													this.c.getUriLabel(q.edit.uri, { relative: !0 }),
												);
							if (q.edit.type & r.BulkFileOperationType.Rename && q.edit.newUri)
								return (0, a.localize)(
									4509,
									null,
									this.c.getUriLabel(q.edit.uri, { relative: !0 }),
									this.c.getUriLabel(q.edit.newUri, { relative: !0 }),
								);
							if (q.edit.type & r.BulkFileOperationType.Create)
								return (0, a.localize)(
									4510,
									null,
									this.c.getUriLabel(q.edit.uri, { relative: !0 }),
								);
							if (q.edit.type & r.BulkFileOperationType.Delete)
								return (0, a.localize)(
									4511,
									null,
									this.c.getUriLabel(q.edit.uri, { relative: !0 }),
								);
						}
						if (q instanceof P) {
							if (q.selecting.length > 0 && q.inserting.length > 0)
								return (0, a.localize)(
									4512,
									null,
									q.edit.textEdit.textEdit.range.startLineNumber,
									q.selecting,
									q.inserting,
								);
							if (q.selecting.length > 0 && q.inserting.length === 0)
								return (0, a.localize)(
									4513,
									null,
									q.edit.textEdit.textEdit.range.startLineNumber,
									q.selecting,
								);
							if (q.selecting.length === 0 && q.inserting.length > 0)
								return (0, a.localize)(
									4514,
									null,
									q.edit.textEdit.textEdit.range.startLineNumber,
									q.selecting,
								);
						}
						return null;
					}
				};
				(e.$mNc = M), (e.$mNc = M = Ne([j(0, h.$3N)], M));
				class N {
					getId(q) {
						return q instanceof T
							? q.edit.uri +
									(q.parent instanceof I
										? JSON.stringify(q.parent.category.metadata)
										: "")
							: q instanceof P
								? q.parent.edit.uri.toString() + q.idx
								: JSON.stringify(q.category.metadata);
					}
				}
				e.$nNc = N;
				class A {
					constructor(q) {
						q.classList.add("category"),
							(this.icon = document.createElement("div")),
							q.appendChild(this.icon),
							(this.label = new c.$Xob(q));
					}
				}
				let R = class {
					static {
						$ = this;
					}
					static {
						this.id = "CategoryElementRenderer";
					}
					constructor(q) {
						(this.c = q), (this.templateId = $.id);
					}
					renderTemplate(q) {
						return new A(q);
					}
					renderElement(q, V, G) {
						G.icon.style.setProperty("--background-dark", null),
							G.icon.style.setProperty("--background-light", null),
							(G.icon.style.color = "");
						const { metadata: K } = q.element.category;
						if (p.ThemeIcon.isThemeIcon(K.iconPath)) {
							const J = p.ThemeIcon.asClassName(K.iconPath);
							(G.icon.className = J ? `theme-icon ${J}` : ""),
								(G.icon.style.color = K.iconPath.color
									? (this.c
											.getColorTheme()
											.getColor(K.iconPath.color.id)
											?.toString() ?? "")
									: "");
						} else
							f.URI.isUri(K.iconPath)
								? ((G.icon.className = "uri-icon"),
									G.icon.style.setProperty(
										"--background-dark",
										C.$vhb(K.iconPath),
									),
									G.icon.style.setProperty(
										"--background-light",
										C.$vhb(K.iconPath),
									))
								: K.iconPath &&
									((G.icon.className = "uri-icon"),
									G.icon.style.setProperty(
										"--background-dark",
										C.$vhb(K.iconPath.dark),
									),
									G.icon.style.setProperty(
										"--background-light",
										C.$vhb(K.iconPath.light),
									));
						G.label.setLabel(K.label, K.description, {
							descriptionMatches: (0, i.$3k)(q.filterData),
						});
					}
					disposeTemplate(q) {
						q.label.dispose();
					}
				};
				(e.$oNc = R), (e.$oNc = R = $ = Ne([j(0, g.$iP)], R));
				let O = class {
					constructor(q, V, G) {
						(this.i = G),
							(this.c = new d.$Zc()),
							(this.d = new d.$Zc()),
							(this.f = document.createElement("input")),
							(this.f.className = "edit-checkbox"),
							(this.f.type = "checkbox"),
							this.f.setAttribute("role", "checkbox"),
							q.appendChild(this.f),
							(this.g = V.create(q, { supportHighlights: !0 })),
							(this.h = document.createElement("span")),
							(this.h.className = "details"),
							q.appendChild(this.h);
					}
					dispose() {
						this.d.dispose(), this.c.dispose(), this.g.dispose();
					}
					set(q, V) {
						if (
							(this.d.clear(),
							(this.f.checked = q.isChecked()),
							(this.f.disabled = q.isDisabled()),
							this.d.add(
								C.$0fb(this.f, "change", () => {
									q.setChecked(this.f.checked);
								}),
							),
							q.edit.type & r.BulkFileOperationType.Rename && q.edit.newUri)
						)
							this.g.setResource(
								{
									resource: q.edit.uri,
									name: (0, a.localize)(
										4515,
										null,
										this.i.getUriLabel(q.edit.uri, { relative: !0 }),
										this.i.getUriLabel(q.edit.newUri, { relative: !0 }),
									),
								},
								{ fileDecorations: { colors: !0, badges: !1 } },
							),
								(this.h.innerText = (0, a.localize)(4516, null));
						else {
							const G = {
								matches: (0, i.$3k)(V),
								fileKind: u.FileKind.FILE,
								fileDecorations: { colors: !0, badges: !1 },
								extraClasses: [],
							};
							q.edit.type & r.BulkFileOperationType.Create
								? (this.h.innerText = (0, a.localize)(4517, null))
								: q.edit.type & r.BulkFileOperationType.Delete
									? ((this.h.innerText = (0, a.localize)(4518, null)),
										G.extraClasses.push("delete"))
									: (this.h.innerText = ""),
								this.g.setFile(q.edit.uri, G);
						}
					}
				};
				O = Ne([j(2, h.$3N)], O);
				let B = class {
					static {
						v = this;
					}
					static {
						this.id = "FileElementRenderer";
					}
					constructor(q, V) {
						(this.c = q), (this.d = V), (this.templateId = v.id);
					}
					renderTemplate(q) {
						return new O(q, this.c, this.d);
					}
					renderElement(q, V, G) {
						G.set(q.element, q.filterData);
					}
					disposeTemplate(q) {
						q.dispose();
					}
				};
				(e.$pNc = B), (e.$pNc = B = v = Ne([j(1, h.$3N)], B));
				let U = class {
					constructor(q, V) {
						(this.i = V),
							(this.c = new d.$Zc()),
							(this.d = new d.$Zc()),
							q.classList.add("textedit"),
							(this.f = document.createElement("input")),
							(this.f.className = "edit-checkbox"),
							(this.f.type = "checkbox"),
							this.f.setAttribute("role", "checkbox"),
							q.appendChild(this.f),
							(this.g = document.createElement("div")),
							q.appendChild(this.g),
							(this.h = this.c.add(new w.$Wob(q)));
					}
					dispose() {
						this.d.dispose(), this.c.dispose();
					}
					set(q) {
						this.d.clear(),
							this.d.add(
								C.$0fb(this.f, "change", (Y) => {
									q.setChecked(this.f.checked), Y.preventDefault();
								}),
							),
							q.parent.isChecked()
								? ((this.f.checked = q.isChecked()),
									(this.f.disabled = q.isDisabled()))
								: ((this.f.checked = q.isChecked()),
									(this.f.disabled = q.isDisabled()));
						let V = "";
						(V += q.prefix),
							(V += q.selecting),
							(V += q.inserting),
							(V += q.suffix);
						const G = {
								start: q.prefix.length,
								end: q.prefix.length + q.selecting.length,
								extraClasses: ["remove"],
							},
							K = {
								start: G.end,
								end: G.end + q.inserting.length,
								extraClasses: ["insert"],
							};
						let J;
						const { metadata: W } = q.edit.textEdit;
						W && W.description
							? (J = (0, a.localize)(4519, null, W.label, W.description))
							: W && (J = W.label);
						const X = W?.iconPath;
						if (!X) this.g.style.display = "none";
						else if (
							((this.g.style.display = "block"),
							this.g.style.setProperty("--background-dark", null),
							this.g.style.setProperty("--background-light", null),
							p.ThemeIcon.isThemeIcon(X))
						) {
							const Y = p.ThemeIcon.asClassName(X);
							(this.g.className = Y ? `theme-icon ${Y}` : ""),
								(this.g.style.color = X.color
									? (this.i.getColorTheme().getColor(X.color.id)?.toString() ??
										"")
									: "");
						} else
							f.URI.isUri(X)
								? ((this.g.className = "uri-icon"),
									this.g.style.setProperty("--background-dark", C.$vhb(X)),
									this.g.style.setProperty("--background-light", C.$vhb(X)))
								: ((this.g.className = "uri-icon"),
									this.g.style.setProperty("--background-dark", C.$vhb(X.dark)),
									this.g.style.setProperty(
										"--background-light",
										C.$vhb(X.light),
									));
						this.h.set(V, [G, K], J, !0), (this.g.title = J || "");
					}
				};
				U = Ne([j(1, g.$iP)], U);
				let z = class {
					static {
						S = this;
					}
					static {
						this.id = "TextEditElementRenderer";
					}
					constructor(q) {
						(this.c = q), (this.templateId = S.id);
					}
					renderTemplate(q) {
						return new U(q, this.c);
					}
					renderElement({ element: q }, V, G) {
						G.set(q);
					}
					disposeTemplate(q) {}
				};
				(e.$qNc = z), (e.$qNc = z = S = Ne([j(0, g.$iP)], z));
				class F {
					getHeight() {
						return 23;
					}
					getTemplateId(q) {
						return q instanceof T ? B.id : q instanceof P ? z.id : R.id;
					}
				}
				e.$rNc = F;
				class x {
					getKeyboardNavigationLabel(q) {
						if (q instanceof T) return (0, n.$kh)(q.edit.uri);
						if (q instanceof I) return q.category.metadata.label;
					}
				}
				e.$sNc = x;
			},
		),
		define(
			de[3487],
			he([
				1, 0, 3, 59, 61, 4, 10, 5, 39, 30, 55, 108, 991, 70, 243, 161, 474, 52,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let f = class {
					constructor(y, $) {
						(this.a = y), (this.b = $), (this.viewType = "*");
					}
					async provideCellStatusBarItems(y, $, v) {
						const I = this.a.getNotebookTextModel(y)?.cells[$];
						if (!I) return;
						const T = [];
						let P = I.language;
						if (I.cellKind === c.CellKind.Markup) P = "markdown";
						else if (this.b.getLanguageIdByLanguageName(I.language))
							P = this.b.getLanguageName(P) ?? P;
						else {
							const L = (0, E.localize)(7731, null, I.language);
							T.push({
								text: "$(dialog-warning)",
								command: {
									id: "workbench.extensions.search",
									arguments: [`@tag:${I.language}`],
									title: "Search Extensions",
								},
								tooltip: L,
								alignment: c.CellStatusbarAlignment.Right,
								priority: -Number.MAX_SAFE_INTEGER + 1,
							});
						}
						return (
							T.push({
								text: P,
								command: a.$0Ib,
								tooltip: (0, E.localize)(7732, null),
								alignment: c.CellStatusbarAlignment.Right,
								priority: -Number.MAX_SAFE_INTEGER,
							}),
							{ items: T }
						);
					}
				};
				f = Ne([j(0, g.$MIb), j(1, w.$nM)], f);
				let b = class {
					constructor(y, $, v, S, I, T) {
						(this.b = y),
							(this.c = $),
							(this.d = v),
							(this.e = S),
							(this.f = I),
							(this.g = T),
							(this.viewType = "*"),
							(this.a = new i.$Gc());
					}
					async provideCellStatusBarItems(y, $, v) {
						const S = this.b.getNotebookTextModel(y),
							I = S?.cells[$];
						if (!I) return;
						const T = this.e.getValue(
							"workbench.editor.languageDetectionHints",
						);
						if (!(typeof T == "object" && T?.notebookEditors)) return;
						const k = I.uri,
							L = I.textModel?.getVersionId();
						if (!L) return;
						const D =
							I.cellKind === c.CellKind.Markup
								? "markdown"
								: this.d.getLanguageIdByLanguageName(I.language) || I.language;
						this.a.has(k) ||
							this.a.set(k, {
								cellLanguage: D,
								updateTimestamp: 0,
								contentVersion: 1,
							});
						const M = this.a.get(k);
						if (
							M.cellLanguage !== D ||
							(M.updateTimestamp < Date.now() - 1e3 && M.contentVersion !== L)
						) {
							(M.updateTimestamp = Date.now()),
								(M.cellLanguage = D),
								(M.contentVersion = L);
							const A = this.c.getSelectedOrSuggestedKernel(S);
							if (A) {
								const R = [...A.supportedLanguages, "markdown"];
								M.guess = await this.f.detectLanguage(I.uri, R);
							}
						}
						const N = [];
						if (M.guess && D !== M.guess) {
							const A = this.d.getLanguageName(M.guess) || M.guess;
							let R = (0, E.localize)(7733, null, A);
							const B = this.g.lookupKeybinding(a.$9Ib)?.getLabel();
							B && (R += ` (${B})`),
								N.push({
									text: "$(lightbulb-autofix)",
									command: a.$9Ib,
									tooltip: R,
									alignment: c.CellStatusbarAlignment.Right,
									priority: -Number.MAX_SAFE_INTEGER + 1,
								});
						}
						return { items: N };
					}
				};
				b = Ne(
					[
						j(0, g.$MIb),
						j(1, n.$f6),
						j(2, w.$nM),
						j(3, C.$gj),
						j(4, p.$RO),
						j(5, m.$uZ),
					],
					b,
				);
				let s = class extends t.$1c {
					constructor(y, $) {
						super(),
							[f, b].forEach((S) => {
								this.D(
									$.registerCellStatusBarItemProvider(y.createInstance(S)),
								);
							});
					}
				};
				(s = Ne([j(0, d.$Li), j(1, h.$Bpc)], s)),
					r.$Io
						.as(u.Extensions.Workbench)
						.registerWorkbenchContribution(s, o.LifecyclePhase.Restored);
			},
		),
		define(
			de[3488],
			he([1, 0, 3, 59, 23, 19, 30, 55, 112, 108, 70, 161, 18, 52]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let n = class extends t.$1c {
					constructor(p, o, f) {
						super(), (this.a = p), (this.b = f);
						const b = new i.$Gc();
						this.D(
							o.onWillAddNotebookDocument((s) => {
								b.set(
									s.uri,
									s.onWillAddRemoveCells((l) => {
										const y = this.a.getModel();
										if (
											y.getBreakpoints().length &&
											l.rawEvent.kind === u.NotebookCellsChangeType.ModelChange
										)
											for (const $ of l.rawEvent.changes) {
												const [v, S] = $;
												if (S > 0) {
													const I = s.cells.slice(v, v + S);
													for (const T of I)
														y.getBreakpoints({ uri: T.uri }).forEach((k) =>
															this.a.removeBreakpoints(k.getId()),
														);
												}
											}
									}),
								);
							}),
						),
							this.D(
								o.onWillRemoveNotebookDocument((s) => {
									this.c(s), b.get(s.uri)?.dispose(), b.delete(s.uri);
								}),
							),
							this.D(
								this.a.getModel().onDidChangeBreakpoints((s) => {
									const l = s?.added?.find(
										(y) =>
											"uri" in y &&
											y.uri.scheme === w.Schemas.vscodeNotebookCell,
									);
									if (l) {
										const y = u.CellUri.parse(l.uri);
										if (!y) return;
										const $ = (0, r.$eJb)(this.b.activeEditorPane);
										if (
											!$ ||
											!$.hasModel() ||
											$.textModel.uri.toString() !== y.notebook.toString()
										)
											return;
										const v = $.getCellByHandle(y.handle);
										if (!v) return;
										$.focusElement(v);
									}
								}),
							);
					}
					c(p) {
						const o = this.a.getModel().getBreakpoints();
						if (!o.length || !p.cells.length) return;
						const f = new i.$Gc();
						p.cells.forEach((b, s) => {
							f.set(b.uri, s);
						}),
							o.forEach((b) => {
								const s = f.get(b.uri);
								if (typeof s != "number") return;
								const l = u.CellUri.parse(b.uri)?.notebook;
								if (!l) return;
								const y = u.CellUri.generate(l, s);
								(0, E.$gh)(y, b.uri) ||
									(this.a.removeBreakpoints(b.getId()),
									this.a.addBreakpoints(y, [
										{
											column: b.column,
											condition: b.condition,
											enabled: b.enabled,
											hitCondition: b.hitCondition,
											logMessage: b.logMessage,
											lineNumber: b.lineNumber,
										},
									]));
							});
					}
				};
				(n = Ne([j(0, m.$75), j(1, a.$MIb), j(2, h.$IY)], n)),
					C.$Io
						.as(d.Extensions.Workbench)
						.registerWorkbenchContribution(n, c.LifecyclePhase.Restored);
			},
		),
		define(
			de[1844],
			he([1, 0, 3, 1688, 51, 108]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$n2b = void 0);
				class C extends t.$1c {
					constructor(m, r) {
						super(),
							(this.g = m),
							(this.h = r),
							(this.a = []),
							(this.b = []),
							(this.c = []),
							(this.f = null);
					}
					get currentMatchDecorations() {
						return this.f;
					}
					j() {
						this.clearCurrentFindMatchDecoration(),
							this.setAllFindMatchesDecorations([]);
					}
					async highlightCurrentFindMatchDecorationInCell(m, r) {
						return (
							this.clearCurrentFindMatchDecoration(),
							this.g.changeModelDecorations((u) => {
								const a = i.$71b._CURRENT_FIND_MATCH_DECORATION,
									h = [{ range: r, options: a }],
									c = { ownerId: m.handle, decorations: h };
								this.f = {
									kind: "input",
									decorations: u.deltaDecorations(
										this.f?.kind === "input" ? this.f.decorations : [],
										[c],
									),
								};
							}),
							(this.b = this.g.deltaCellDecorations(this.b, [
								{
									handle: m.handle,
									options: {
										overviewRuler: {
											color: w.$wR,
											modelRanges: [r],
											includeOutput: !1,
											position: E.NotebookOverviewRulerLane.Center,
										},
									},
								},
							])),
							null
						);
					}
					async highlightCurrentFindMatchDecorationInWebview(m, r) {
						this.clearCurrentFindMatchDecoration();
						const u = await this.g.findHighlightCurrent(r, this.h);
						return (
							(this.f = { kind: "output", index: r }),
							(this.b = this.g.deltaCellDecorations(this.b, [
								{
									handle: m.handle,
									options: {
										overviewRuler: {
											color: w.$wR,
											modelRanges: [],
											includeOutput: !0,
											position: E.NotebookOverviewRulerLane.Center,
										},
									},
								},
							])),
							u
						);
					}
					clearCurrentFindMatchDecoration() {
						this.f?.kind === "input"
							? this.g.changeModelDecorations((m) => {
									m.deltaDecorations(
										this.f?.kind === "input" ? this.f.decorations : [],
										[],
									),
										(this.f = null);
								})
							: this.f?.kind === "output" &&
								this.g.findUnHighlightCurrent(this.f.index, this.h),
							(this.b = this.g.deltaCellDecorations(this.b, []));
					}
					setAllFindMatchesDecorations(m) {
						this.g.changeModelDecorations((r) => {
							const u = i.$71b._FIND_MATCH_DECORATION,
								a = m.map((h) => {
									const c = new Array(h.contentMatches.length);
									for (let n = 0; n < h.contentMatches.length; n++)
										c[n] = { range: h.contentMatches[n].range, options: u };
									return { ownerId: h.cell.handle, decorations: c };
								});
							this.a = r.deltaDecorations(this.a, a);
						}),
							(this.c = this.g.deltaCellDecorations(
								this.c,
								m.map((r) => ({
									ownerId: r.cell.handle,
									handle: r.cell.handle,
									options: {
										overviewRuler: {
											color: w.$vR,
											modelRanges: r.contentMatches.map((u) => u.range),
											includeOutput: r.webviewMatches.length > 0,
											position: E.NotebookOverviewRulerLane.Center,
										},
									},
								})),
							));
					}
					stopWebviewFind() {
						this.g.findStop(this.h);
					}
					dispose() {
						this.j(), super.dispose();
					}
				}
				e.$n2b = C;
			},
		),
		define(
			de[1030],
			he([1, 0, 214, 15, 3, 17, 589, 10, 1844, 108, 70]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$p2b = e.$o2b = void 0);
				class a {
					get length() {
						return this.a.length + this.b.length;
					}
					get contentMatches() {
						return this.a;
					}
					get webviewMatches() {
						return this.b;
					}
					constructor(n, g, p, o) {
						(this.cell = n), (this.index = g), (this.a = p), (this.b = o);
					}
					getMatch(n) {
						if (n >= this.length)
							throw new Error("NotebookCellFindMatch: index out of range");
						return n < this.a.length ? this.a[n] : this.b[n - this.a.length];
					}
				}
				e.$o2b = a;
				let h = class extends w.$1c {
					get findMatches() {
						return this.a;
					}
					get currentMatch() {
						return this.f;
					}
					constructor(n, g, p) {
						super(),
							(this.q = n),
							(this.r = g),
							(this.s = p),
							(this.a = []),
							(this.b = null),
							(this.f = -1),
							(this.h = null),
							(this.j = this.D(new w.$Zc())),
							(this.g = new i.$Jh(20)),
							(this.h = null),
							this.D(
								g.onFindReplaceStateChange((o) => {
									this.t(o),
										(o.searchString ||
											o.isRegex ||
											o.matchCase ||
											o.searchScope ||
											o.wholeWord ||
											(o.isRevealed && this.r.isRevealed) ||
											o.filters ||
											o.isReplaceRevealed) &&
											this.research(),
										o.isRevealed && !this.r.isRevealed && this.clear();
								}),
							),
							this.D(
								this.q.onDidChangeModel((o) => {
									this.w(o);
								}),
							),
							this.D(
								this.q.onDidChangeCellState((o) => {
									o.cell.cellKind === u.CellKind.Markup &&
										o.source.editStateChanged &&
										this.research();
								}),
							),
							this.q.hasModel() && this.w(this.q.textModel),
							(this.n = new m.$n2b(this.q, this.q.getId()));
					}
					t(n) {
						if (
							!this.r.filters?.markupInput ||
							!this.r.filters?.markupPreview ||
							!this.r.filters?.findScope
						)
							return;
						const g = () => {
							const p = this.q.getViewModel();
							if (!p) return;
							const o = this.s.inspect("editor.wordSeparators").value,
								f = {
									regex: this.r.isRegex,
									wholeWord: this.r.wholeWord,
									caseSensitive: this.r.matchCase,
									wordSeparators: o,
									includeMarkupInput: !0,
									includeCodeInput: !1,
									includeMarkupPreview: !1,
									includeOutput: !1,
									findScope: this.r.filters?.findScope,
								},
								b = p.find(this.r.searchString, f);
							for (let s = 0; s < p.length; s++) {
								const l = p.cellAt(s);
								if (l && l.cellKind === u.CellKind.Markup) {
									const $ = b.find(
											(S) =>
												S.cell.handle === l.handle &&
												S.contentMatches.length > 0,
										)
											? r.CellEditState.Editing
											: r.CellEditState.Preview,
										v = l.getEditState();
									if (
										v === r.CellEditState.Editing &&
										l.editStateSource !== "find"
									)
										continue;
									v !== $ && l.updateEditState($, "find");
								}
							}
						};
						if (n.isReplaceRevealed && !this.r.isReplaceRevealed) {
							const p = this.q.getViewModel();
							if (!p) return;
							for (let o = 0; o < p.length; o++) {
								const f = p.cellAt(o);
								f &&
									f.cellKind === u.CellKind.Markup &&
									f.getEditState() === r.CellEditState.Editing &&
									f.editStateSource === "find" &&
									f.updateEditState(r.CellEditState.Preview, "find");
							}
							return;
						}
						(n.isReplaceRevealed ||
							((n.filters ||
								n.isRevealed ||
								n.searchString ||
								n.replaceString) &&
								this.r.isRevealed &&
								this.r.isReplaceRevealed)) &&
							g();
					}
					ensureFindMatches() {
						this.b || this.y(this.a, !0);
					}
					getCurrentMatch() {
						const n = this.b.getIndexOf(this.f),
							g = this.a[n.index].cell,
							p = this.a[n.index].getMatch(n.remainder);
						return {
							cell: g,
							match: p,
							isModelMatch: n.remainder < this.a[n.index].contentMatches.length,
						};
					}
					refreshCurrentMatch(n) {
						const g = this.findMatches.findIndex((b) => b.cell === n.cell);
						if (g === -1) return;
						const o = this.findMatches[g].contentMatches.findIndex(
							(b) => b.range.intersectRanges(n.range) !== null,
						);
						if (o === void 0) return;
						const f = g === 0 ? 0 : (this.b?.getPrefixSum(g - 1) ?? 0);
						(this.f = f + o),
							this.H(g, o).then((b) => {
								this.u(g, o, b),
									this.r.changeMatchInfo(
										this.f,
										this.a.reduce((s, l) => s + l.length, 0),
										void 0,
									);
							});
					}
					find(n) {
						if (!this.findMatches.length) return;
						if (!this.b) this.y(this.a, !0), "index" in n && (this.f = n.index);
						else {
							const p = this.b.getTotalSum();
							if ("index" in n) this.f = n.index;
							else if (this.f === -1) this.f = n.previous ? p - 1 : 0;
							else {
								const o = (this.f + (n.previous ? -1 : 1) + p) % p;
								this.f = o;
							}
						}
						const g = this.b.getIndexOf(this.f);
						this.H(g.index, g.remainder).then((p) => {
							this.u(g.index, g.remainder, p),
								this.r.changeMatchInfo(
									this.f,
									this.a.reduce((o, f) => o + f.length, 0),
									void 0,
								);
						});
					}
					u(n, g, p) {
						const o = this.a[n];
						if (g >= o.contentMatches.length)
							this.q.focusElement(o.cell),
								this.q.getCellIndex(o.cell) !== void 0 &&
									this.q.revealCellOffsetInCenter(o.cell, p ?? 0);
						else {
							const f = o.getMatch(g);
							o.cell.getEditState() !== r.CellEditState.Editing &&
								o.cell.updateEditState(r.CellEditState.Editing, "find"),
								(o.cell.isInputCollapsed = !1),
								this.q.focusElement(o.cell),
								this.q.setCellEditorSelection(o.cell, f.range),
								this.q.revealRangeInCenterIfOutsideViewportAsync(
									o.cell,
									f.range,
								);
						}
					}
					w(n) {
						this.j.clear(),
							n &&
								this.j.add(
									n.onDidChangeContent((g) => {
										g.rawEvents.some(
											(p) =>
												p.kind ===
													u.NotebookCellsChangeType.ChangeCellContent ||
												p.kind === u.NotebookCellsChangeType.ModelChange,
										) && this.research();
									}),
								),
							this.research();
					}
					async research() {
						return this.g.trigger(async () => {
							this.r.change({ isSearching: !0 }, !1),
								await this._research(),
								this.r.change({ isSearching: !1 }, !1);
						});
					}
					async _research() {
						if ((this.h?.cancel(), !this.r.isRevealed || !this.q.hasModel())) {
							this.y([], !1);
							return;
						}
						this.h = (0, i.$zh)((s) => this.z(s));
						const n = await this.h;
						if (!n) {
							this.y([], !1);
							return;
						}
						if (n.length === 0) {
							this.y([], !1);
							return;
						}
						const g = (s) => {
							const l = (0, t.$ob)(
								n.map((y) => y.index),
								(y) => y >= s,
							);
							this.C(n, this.F(n, l));
						};
						if (this.f === -1)
							if (this.q.getLength() === 0) {
								this.y(n, !1);
								return;
							} else {
								const s = this.q.getFocus().start;
								g(s), this.y(n, !1);
								return;
							}
						const p = this.b.getIndexOf(this.f),
							o = this.a[p.index].cell,
							f = this.q.getCellIndex(o);
						if (f < 0) {
							if (this.q.getLength() === 0) {
								this.y(n, !1);
								return;
							}
							g(f);
							return;
						}
						const b = this.q.cellAt(f);
						if (
							b.cellKind === u.CellKind.Markup &&
							b.getEditState() === r.CellEditState.Preview
						) {
							g(f);
							return;
						}
						if (!this.n.currentMatchDecorations) {
							g(f);
							return;
						}
						if (this.n.currentMatchDecorations.kind === "input") {
							const s = this.n.currentMatchDecorations.decorations.find(
								(y) => y.ownerId === b.handle,
							);
							if (!s) {
								g(f);
								return;
							}
							const l = (0, t.$ob)(n, (y) => y.index >= f) % n.length;
							if (n[l].index > f) {
								this.C(n, this.F(n, l));
								return;
							} else {
								let y =
									b.editorAttached && s.decorations[0]
										? b.getCellDecorationRange(s.decorations[0])
										: null;
								if (
									(y === null &&
										p.remainder < this.a[p.index].contentMatches.length &&
										(y = this.a[p.index].getMatch(p.remainder).range),
									y !== null)
								) {
									const $ = n[l],
										v = (0, t.$ob)(
											$.contentMatches,
											(S) => E.$iL.compareRangesUsingStarts(S.range, y) >= 0,
										);
									this.C(n, this.F(n, l) + v);
								} else {
									this.C(n, this.F(n, l));
									return;
								}
							}
						} else {
							const s =
								(0, t.$ob)(
									n.map((l) => l.index),
									(l) => l >= f,
								) % n.length;
							this.C(n, this.F(n, s));
						}
					}
					y(n, g) {
						if (!n || !n.length) {
							(this.a = []),
								this.n.setAllFindMatchesDecorations([]),
								this.G(),
								(this.f = -1),
								this.n.clearCurrentFindMatchDecoration(),
								this.r.changeMatchInfo(
									this.f,
									this.a.reduce((p, o) => p + o.length, 0),
									void 0,
								);
							return;
						}
						(this.a = n),
							this.n.setAllFindMatchesDecorations(n || []),
							this.G(),
							g && ((this.f = 0), this.H(0, 0)),
							this.r.changeMatchInfo(
								this.f,
								this.a.reduce((p, o) => p + o.length, 0),
								void 0,
							);
					}
					async z(n) {
						if (!this.q.hasModel()) return null;
						let g = null;
						const p = this.r.searchString,
							o = this.s.inspect("editor.wordSeparators").value,
							f = {
								regex: this.r.isRegex,
								wholeWord: this.r.wholeWord,
								caseSensitive: this.r.matchCase,
								wordSeparators: o,
								includeMarkupInput: this.r.filters?.markupInput ?? !0,
								includeCodeInput: this.r.filters?.codeInput ?? !0,
								includeMarkupPreview: !!this.r.filters?.markupPreview,
								includeOutput: !!this.r.filters?.codeOutput,
								findScope: this.r.filters?.findScope,
							};
						return (
							(g = await this.q.find(p, f, n)),
							n.isCancellationRequested ? null : g
						);
					}
					C(n, g) {
						(this.f = g % n.length), this.y(n, !1);
						const p = this.b.getIndexOf(this.f);
						this.H(p.index, p.remainder),
							this.r.changeMatchInfo(
								this.f,
								this.a.reduce((o, f) => o + f.length, 0),
								void 0,
							);
					}
					F(n, g) {
						let p = 0;
						for (let o = 0; o < g; o++) p += n[o].length;
						return p;
					}
					G() {
						if (this.a && this.a.length) {
							const n = new Uint32Array(this.a.length);
							for (let g = 0; g < this.a.length; g++) n[g] = this.a[g].length;
							this.b = new C.$WN(n);
						} else this.b = null;
					}
					async H(n, g) {
						const p = this.a[n].cell,
							o = this.a[n].getMatch(g);
						return g < this.a[n].contentMatches.length
							? this.n.highlightCurrentFindMatchDecorationInCell(p, o.range)
							: this.n.highlightCurrentFindMatchDecorationInWebview(p, o.index);
					}
					clear() {
						this.h?.cancel(), this.g.cancel(), this.y([], !1);
					}
					dispose() {
						this.n.dispose(), super.dispose();
					}
				};
				(e.$p2b = h), (e.$p2b = h = Ne([j(2, d.$gj)], h));
			},
		),
		define(
			de[1304],
			he([
				1, 0, 7, 127, 27, 149, 3, 37, 547, 786, 961, 4, 10, 8, 49, 72, 5, 1030,
				1839, 108, 176,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$TFc = void 0),
					(t = mt(t)),
					(d = mt(d));
				const l = "find-hide-transition",
					y = "find-show-transition";
				let $ = 69;
				const v = 200;
				let S = class extends C.$1c {
					static {
						this.id = "workbench.notebook.find";
					}
					constructor(P, k) {
						super(),
							(this.b = P),
							(this.c = k),
							(this.a = new E.$Y(() =>
								this.D(this.c.createInstance(I, this.b)),
							));
					}
					show(P, k) {
						return this.a.value.show(P, k);
					}
					hide() {
						this.a.rawValue?.hide();
					}
					replace(P) {
						return this.a.value.replace(P);
					}
				};
				(e.$TFc = S), (e.$TFc = S = Ne([j(1, p.$Li)], S));
				let I = class extends f.$SFc {
					constructor(P, k, L, D, M, N, A) {
						super(k, L, D, M, A, N, new r.$l2b(), P),
							(this.Mb = null),
							(this.Nb = null),
							(this.Pb = new o.$p2b(this.hb, this.gb, this.db)),
							t.$fhb(this.hb.getDomNode(), this.getDomNode()),
							(this.Lb = s.$kJb.bindTo(L)),
							this.D(this.a.onKeyDown((R) => this.Qb(R))),
							this.D(this.y.onKeyDown((R) => this.Rb(R))),
							this.D(
								this.gb.onFindReplaceStateChange((R) => {
									if (
										(this.kb(),
										R.isSearching &&
											(this.gb.isSearching
												? this.W.infinite().show(v)
												: this.W.stop().hide()),
										this.Pb.currentMatch >= 0)
									) {
										const B = this.Pb.getCurrentMatch();
										this.N.setEnabled(B.isModelMatch);
									}
									const O = this.Pb.findMatches;
									this.O.setEnabled(
										O.length > 0 &&
											O.find((B) => B.webviewMatches.length > 0) === void 0,
									),
										R.filters &&
											this.a.updateFilterState(
												this.gb.filters?.isModified() ?? !1,
											);
								}),
							),
							this.D(
								t.$0fb(
									this.getDomNode(),
									t.$$gb.FOCUS,
									(R) => {
										this.Ob = t.$Ygb(R.relatedTarget)
											? R.relatedTarget
											: void 0;
									},
									!0,
								),
							);
					}
					Qb(P) {
						if (P.equals(w.KeyCode.Enter)) {
							this.lb(!1), P.preventDefault();
							return;
						} else if (P.equals(w.KeyMod.Shift | w.KeyCode.Enter)) {
							this.lb(!0), P.preventDefault();
							return;
						}
					}
					Rb(P) {
						if (P.equals(w.KeyCode.Enter)) {
							this.mb(), P.preventDefault();
							return;
						}
					}
					kb() {
						this.gb.change({ searchString: this.ub }, !1);
						const P = this.Pb.findMatches;
						return !!(P && P.length);
					}
					Tb(P) {
						this.Pb.find({ index: P });
					}
					lb(P) {
						this.Pb.find({ previous: P });
					}
					mb() {
						if (!this.hb.hasModel() || !this.Pb.findMatches.length) return;
						this.Pb.ensureFindMatches(),
							this.Pb.currentMatch < 0 && this.Pb.find({ previous: !1 });
						const P = this.Pb.getCurrentMatch(),
							k = P.cell;
						if (P.isModelMatch) {
							const L = P.match;
							this.W.infinite().show(v);
							const M = this.wb.buildReplaceString(
								L.matches,
								this.gb.preserveCase,
							);
							this.hb
								.getViewModel()
								.replaceOne(k, L.range, M)
								.then(() => {
									this.W.stop();
								});
						} else console.error("Replace does not work for output match");
					}
					nb() {
						if (!this.hb.hasModel()) return;
						this.W.infinite().show(v);
						const P = this.wb,
							k = this.Pb.findMatches,
							L = [];
						k.forEach((M) => {
							M.contentMatches.forEach((N) => {
								const A = N.matches;
								L.push(P.buildReplaceString(A, this.gb.preserveCase));
							});
						}),
							this.hb
								.getViewModel()
								.replaceAll(this.Pb.findMatches, L)
								.then(() => {
									this.W.stop();
								});
					}
					Xb() {}
					ob() {
						this.Lb.set(!0);
					}
					pb() {
						(this.Ob = void 0), this.Lb.reset();
					}
					sb() {}
					tb() {}
					qb() {}
					rb() {}
					async show(P, k) {
						const L = this.gb.searchString !== P;
						super.show(P, k),
							this.gb.change(
								{ searchString: P ?? this.gb.searchString, isRevealed: !0 },
								!1,
							),
							typeof k?.matchIndex == "number"
								? (this.Pb.findMatches.length || (await this.Pb.research()),
									this.Tb(k.matchIndex))
								: this.a.select(),
							!L &&
								k?.searchStringSeededFrom &&
								this.Pb.refreshCurrentMatch(k.searchStringSeededFrom),
							this.Mb === null &&
								(this.Nb !== null &&
									(t.getWindow(this.getDomNode()).clearTimeout(this.Nb),
									(this.Nb = null),
									this.hb.removeClassName(l)),
								this.hb.addClassName(y),
								(this.Mb = t.getWindow(this.getDomNode()).setTimeout(() => {
									this.hb.removeClassName(y), (this.Mb = null);
								}, 200)));
					}
					replace(P, k) {
						super.showWithReplace(P, k),
							this.gb.change(
								{
									searchString: P ?? "",
									replaceString: k ?? "",
									isRevealed: !0,
								},
								!1,
							),
							this.y.select(),
							this.Mb === null &&
								(this.Nb !== null &&
									(t.getWindow(this.getDomNode()).clearTimeout(this.Nb),
									(this.Nb = null),
									this.hb.removeClassName(l)),
								this.hb.addClassName(y),
								(this.Mb = t.getWindow(this.getDomNode()).setTimeout(() => {
									this.hb.removeClassName(y), (this.Mb = null);
								}, 200)));
					}
					hide() {
						if (
							(super.hide(),
							this.gb.change({ isRevealed: !1 }, !1),
							this.Pb.clear(),
							this.hb.findStop(),
							this.W.stop(),
							this.Nb === null &&
								(this.Mb !== null &&
									(t.getWindow(this.getDomNode()).clearTimeout(this.Mb),
									(this.Mb = null),
									this.hb.removeClassName(y)),
								this.hb.addClassName(l),
								(this.Nb = t.getWindow(this.getDomNode()).setTimeout(() => {
									this.hb.removeClassName(l);
								}, 200))),
							this.Ob &&
								this.Ob.offsetParent &&
								(this.Ob.focus(), (this.Ob = void 0)),
							this.hb.hasModel())
						)
							for (let P = 0; P < this.hb.getLength(); P++) {
								const k = this.hb.cellAt(P);
								k.getEditState() === b.CellEditState.Editing &&
									k.editStateSource === "find" &&
									k.updateEditState(b.CellEditState.Preview, "closeFind");
							}
					}
					Db() {
						if (!this.Pb || !this.Pb.findMatches) return;
						(this.s.style.width = $ + "px"),
							(this.s.title = ""),
							this.s.firstChild?.remove();
						let P;
						if (this.gb.matchesCount > 0) {
							let k = String(this.gb.matchesCount);
							this.gb.matchesCount >= m.$j2b && (k += "+");
							const L =
								this.Pb.currentMatch < 0
									? "?"
									: String(this.Pb.currentMatch + 1);
							P = d.$kf(u.$e7b, L, k);
						} else P = u.$f7b;
						this.s.appendChild(document.createTextNode(P)),
							(0, i.$oib)(
								this.ec(P, this.gb.currentMatch, this.gb.searchString),
							),
							($ = Math.max($, this.s.clientWidth));
					}
					ec(P, k, L) {
						return P === u.$f7b
							? L === ""
								? (0, a.localize)(7769, null, P)
								: (0, a.localize)(7770, null, P, L)
							: (0, a.localize)(7771, null, P, L);
					}
					dispose() {
						this.hb?.removeClassName(y),
							this.hb?.removeClassName(l),
							this.Pb.dispose(),
							super.dispose();
					}
				};
				I = Ne(
					[
						j(1, n.$Wxb),
						j(2, c.$6j),
						j(3, h.$gj),
						j(4, n.$Xxb),
						j(5, g.$Uyb),
						j(6, p.$Li),
					],
					I,
				);
			},
		),
		define(
			de[3489],
			he([1, 0, 55, 1622, 70, 90, 10, 3, 108, 330, 138, 51, 19]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let c = class {
					static {
						this.ID = "workbench.contrib.markerListProvider";
					}
					constructor(p, o, f) {
						(this.b = p), (this.c = f), (this.a = o.registerProvider(this));
					}
					dispose() {
						this.a.dispose();
					}
					getMarkerList(p) {
						if (!p) return;
						const o = w.CellUri.parse(p);
						if (o)
							return new i.$Zhc(
								(f) =>
									w.CellUri.parse(f)?.notebook.toString() ===
									o.notebook.toString(),
								this.b,
								this.c,
							);
					}
				};
				c = Ne([j(0, E.$aM), j(1, i.$1hc), j(2, C.$gj)], c);
				let n = class extends d.$1c {
					static {
						this.id = "workbench.notebook.markerDecoration";
					}
					constructor(p, o) {
						super(),
							(this.b = p),
							(this.c = o),
							(this.a = []),
							this.f(),
							this.D(this.b.onDidChangeModel(() => this.f())),
							this.D(
								this.c.onMarkerChanged((f) => {
									f.some((b) =>
										this.b.getCellsInRange().some((s) => (0, h.$gh)(s.uri, b)),
									) && this.f();
								}),
							);
					}
					f() {
						if (!this.b.hasModel()) return;
						const p = [];
						this.b.getCellsInRange().forEach((o) => {
							this.c
								.read({
									resource: o.uri,
									severities: E.MarkerSeverity.Error | E.MarkerSeverity.Warning,
								})
								.forEach((b) => {
									const s =
											b.severity === E.MarkerSeverity.Error ? a.$gQ : a.$jQ,
										l = {
											startLineNumber: b.startLineNumber,
											startColumn: b.startColumn,
											endLineNumber: b.endLineNumber,
											endColumn: b.endColumn,
										};
									p.push({
										handle: o.handle,
										options: {
											overviewRuler: {
												color: s,
												modelRanges: [l],
												includeOutput: !1,
												position: m.NotebookOverviewRulerLane.Right,
											},
										},
									});
								});
						}),
							(this.a = this.b.deltaCellDecorations(this.a, p));
					}
				};
				Ne([(0, u.$gi)(100)], n.prototype, "f", null),
					(n = Ne([j(1, E.$aM)], n)),
					(0, t.$s6)(c.ID, c, t.WorkbenchPhase.BlockRestore),
					(0, r.$PKb)(n.id, n);
			},
		),
		define(
			de[3490],
			he([1, 0, 3, 4, 99, 11, 108, 330, 70, 161, 18]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$Fc = void 0);
				class a extends t.$1c {
					static {
						this.id = "workbench.notebook.troubleshoot";
					}
					constructor(c) {
						super(),
							(this.g = c),
							(this.a = this.D(new t.$Zc())),
							(this.b = []),
							(this.c = !1),
							(this.f = []),
							this.D(
								this.g.onDidChangeModel(() => {
									this.h();
								}),
							),
							this.h();
					}
					toggle() {
						(this.c = !this.c), this.h();
					}
					h() {
						this.a.clear(),
							this.b.forEach((c) => c.dispose()),
							this.g.hasModel() && this.m();
					}
					j(c, n) {
						if (this.c) {
							const g = this.g.getViewHeight(c);
							console.log(
								`cell#${c.handle}`,
								n,
								`${g} -> ${c.layoutInfo.totalHeight}`,
							);
						}
					}
					m() {
						if (!this.g.hasModel()) return;
						for (let g = 0; g < this.g.getLength(); g++) {
							const p = this.g.cellAt(g);
							this.b.push(
								p.onDidChangeLayout((o) => {
									this.j(p, o);
								}),
							);
						}
						this.a.add(
							this.g.onDidChangeViewCells((g) => {
								[...g.splices].reverse().forEach((p) => {
									const [o, f, b] = p,
										s = this.b.splice(
											o,
											f,
											...b.map((l) =>
												l.onDidChangeLayout((y) => {
													this.j(l, y);
												}),
											),
										);
									(0, t.$Vc)(s);
								});
							}),
						);
						const c = this.g.getViewModel();
						let n = [];
						this.c && (n = this.n()),
							(this.f = c.deltaCellStatusBarItems(this.f, n));
					}
					n() {
						const c = [];
						for (let n = 0; n < this.g.getLength(); n++)
							c.push({
								handle: n,
								items: [
									{
										text: `index: ${n}`,
										alignment: m.CellStatusbarAlignment.Left,
										priority: Number.MAX_SAFE_INTEGER,
									},
								],
							});
						return c;
					}
					dispose() {
						(0, t.$Vc)(this.b), super.dispose();
					}
				}
				(e.$$Fc = a),
					(0, d.$PKb)(a.id, a),
					(0, E.$4X)(
						class extends E.$3X {
							constructor() {
								super({
									id: "notebook.toggleLayoutTroubleshoot",
									title: (0, i.localize2)(7823, "Toggle Layout Troubleshoot"),
									category: w.$ck.Developer,
									f1: !0,
								});
							}
							async run(h) {
								const c = h.get(u.$IY),
									n = (0, C.$eJb)(c.activeEditorPane);
								if (!n) return;
								n.getContribution(a.id)?.toggle();
							}
						},
					),
					(0, E.$4X)(
						class extends E.$3X {
							constructor() {
								super({
									id: "notebook.inspectLayout",
									title: (0, i.localize2)(7824, "Inspect Notebook Layout"),
									category: w.$ck.Developer,
									f1: !0,
								});
							}
							async run(h) {
								const c = h.get(u.$IY),
									n = (0, C.$eJb)(c.activeEditorPane);
								if (!(!n || !n.hasModel()))
									for (let g = 0; g < n.getLength(); g++) {
										const p = n.cellAt(g);
										console.log(`cell#${p.handle}`, p.layoutInfo);
									}
							}
						},
					),
					(0, E.$4X)(
						class extends E.$3X {
							constructor() {
								super({
									id: "notebook.clearNotebookEdtitorTypeCache",
									title: (0, i.localize2)(
										7825,
										"Clear Notebook Editor Type Cache",
									),
									category: w.$ck.Developer,
									f1: !0,
								});
							}
							async run(h) {
								h.get(r.$MIb).clearEditorCache();
							}
						},
					);
			},
		),
		define(
			de[3491],
			he([1, 0, 3, 55, 70, 18, 108, 46]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let m = class extends t.$1c {
					static {
						this.ID = "workbench.contrib.notebookUndoRedo";
					}
					constructor(u) {
						super(), (this.a = u);
						const a = 105;
						this.D(
							d.$stb.addImplementation(a, "notebook-undo-redo", () => {
								const h = (0, C.$eJb)(this.a.activeEditorPane),
									c = h?.getViewModel();
								return h && h.hasModel() && c
									? c.undo().then((n) => {
											if (n?.length) {
												for (let g = 0; g < h.getLength(); g++) {
													const p = h.cellAt(g);
													p.cellKind === w.CellKind.Markup &&
														n.find(
															(o) => o.fragment === p.model.uri.fragment,
														) &&
														p.updateEditState(C.CellEditState.Editing, "undo");
												}
												h?.setOptions({
													cellOptions: { resource: n[0] },
													preserveFocus: !0,
												});
											}
										})
									: !1;
							}),
						),
							this.D(
								d.$ttb.addImplementation(a, "notebook-undo-redo", () => {
									const h = (0, C.$eJb)(this.a.activeEditorPane),
										c = h?.getViewModel();
									return h && h.hasModel() && c
										? c.redo().then((n) => {
												if (n?.length) {
													for (let g = 0; g < h.getLength(); g++) {
														const p = h.cellAt(g);
														p.cellKind === w.CellKind.Markup &&
															n.find(
																(o) => o.fragment === p.model.uri.fragment,
															) &&
															p.updateEditState(
																C.CellEditState.Editing,
																"redo",
															);
													}
													h?.setOptions({
														cellOptions: { resource: n[0] },
														preserveFocus: !0,
													});
												}
											})
										: !1;
								}),
							);
					}
				};
				(m = Ne([j(0, E.$IY)], m)),
					(0, i.$s6)(m.ID, m, i.WorkbenchPhase.BlockRestore);
			},
		),
		define(
			de[624],
			he([1, 0, 199, 48, 17, 64, 172, 572, 108, 1029, 70, 442, 4]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$E5b = c),
					(e.$F5b = n),
					(e.$G5b = g),
					(e.$H5b = p),
					(e.$I5b = o),
					(e.$J5b = f),
					(e.$K5b = b),
					(e.$L5b = y),
					(e.$M5b = $),
					(e.$N5b = v);
				async function c(S, I, T, P) {
					const { notebookEditor: k } = I;
					if (k.hasModel() && !k.isReadOnly) {
						if (I.ui && I.cell) {
							const { cell: L } = I;
							if (L.cellKind === S) return;
							const D = L.getText(),
								M = k.getCellIndex(L);
							T === void 0 &&
								(T = (k.activeKernel?.supportedLanguages ?? [])[0] ?? C.$0M),
								k.textModel.applyEdits(
									[
										{
											editType: u.CellEditType.Replace,
											index: M,
											count: 1,
											cells: [
												{
													cellKind: S,
													source: D,
													language: T,
													mime: P ?? L.mime,
													outputs: L.model.outputs,
													metadata: L.metadata,
												},
											],
										},
									],
									!0,
									{
										kind: u.SelectionStateType.Index,
										focus: k.getFocus(),
										selections: k.getSelections(),
									},
									() => ({
										kind: u.SelectionStateType.Index,
										focus: k.getFocus(),
										selections: k.getSelections(),
									}),
									void 0,
									!0,
								);
							const N = k.cellAt(M);
							await k.focusNotebookCell(
								N,
								L.getEditState() === m.CellEditState.Editing
									? "editor"
									: "container",
							);
						} else if (I.selectedCells) {
							const L = I.selectedCells,
								D = [];
							L.forEach((M) => {
								if (M.cellKind === S) return;
								const N = M.getText(),
									A = k.getCellIndex(M);
								T === void 0 &&
									(T = (k.activeKernel?.supportedLanguages ?? [])[0] ?? C.$0M),
									D.push({
										editType: u.CellEditType.Replace,
										index: A,
										count: 1,
										cells: [
											{
												cellKind: S,
												source: N,
												language: T,
												mime: P ?? M.mime,
												outputs: M.model.outputs,
												metadata: M.metadata,
											},
										],
									});
							}),
								k.textModel.applyEdits(
									D,
									!0,
									{
										kind: u.SelectionStateType.Index,
										focus: k.getFocus(),
										selections: k.getSelections(),
									},
									() => ({
										kind: u.SelectionStateType.Index,
										focus: k.getFocus(),
										selections: k.getSelections(),
									}),
									void 0,
									!0,
								);
						}
					}
				}
				function n(S, I) {
					const T = S.textModel,
						P = S.getSelections(),
						k = S.getCellIndex(I),
						L = P.find((M) => M.start <= k && k < M.end),
						D = !S.isReadOnly || T.viewType === "interactive";
					if (L) {
						const M = P.reverse().map((A) => ({
								editType: u.CellEditType.Replace,
								index: A.start,
								count: A.end - A.start,
								cells: [],
							})),
							N = L.end >= S.getLength() ? void 0 : S.cellAt(L.end);
						T.applyEdits(
							M,
							!0,
							{
								kind: u.SelectionStateType.Index,
								focus: S.getFocus(),
								selections: S.getSelections(),
							},
							() => {
								if (N) {
									const A = T.cells.findIndex((R) => R.handle === N.handle);
									return {
										kind: u.SelectionStateType.Index,
										focus: { start: A, end: A + 1 },
										selections: [{ start: A, end: A + 1 }],
									};
								} else if (T.length) {
									const A = T.length - 1;
									return {
										kind: u.SelectionStateType.Index,
										focus: { start: A, end: A + 1 },
										selections: [{ start: A, end: A + 1 }],
									};
								} else
									return {
										kind: u.SelectionStateType.Index,
										focus: { start: 0, end: 0 },
										selections: [{ start: 0, end: 0 }],
									};
							},
							void 0,
							D,
						);
					} else {
						const M = S.getFocus(),
							N = [
								{
									editType: u.CellEditType.Replace,
									index: k,
									count: 1,
									cells: [],
								},
							],
							A = [];
						for (let R = 0; R < P.length; R++) {
							const O = P[R];
							O.end <= k
								? A.push(O)
								: O.start > k
									? A.push({ start: O.start - 1, end: O.end - 1 })
									: A.push({ start: k, end: k + 1 });
						}
						if (S.cellAt(M.start) === I) {
							const R =
								M.end === T.length ? { start: M.start - 1, end: M.end - 1 } : M;
							T.applyEdits(
								N,
								!0,
								{
									kind: u.SelectionStateType.Index,
									focus: S.getFocus(),
									selections: S.getSelections(),
								},
								() => ({
									kind: u.SelectionStateType.Index,
									focus: R,
									selections: A,
								}),
								void 0,
								D,
							);
						} else {
							const R =
								M.start > k ? { start: M.start - 1, end: M.end - 1 } : M;
							T.applyEdits(
								N,
								!0,
								{
									kind: u.SelectionStateType.Index,
									focus: S.getFocus(),
									selections: S.getSelections(),
								},
								() => ({
									kind: u.SelectionStateType.Index,
									focus: R,
									selections: A,
								}),
								void 0,
								D,
							);
						}
					}
				}
				async function g(S, I) {
					if (!S.notebookEditor.hasModel()) return;
					const T = S.notebookEditor,
						P = T.textModel;
					if (T.isReadOnly) return;
					let k;
					if (S.cell) {
						const L = T.getCellIndex(S.cell);
						k = { start: L, end: L + 1 };
					} else {
						const L = T.getSelections();
						k = (0, m.$fJb)(T, L)[0];
					}
					if (!(!k || k.start === k.end))
						if (I === "up") {
							if (k.start === 0) return;
							const L = k.start - 1,
								D = { start: k.start - 1, end: k.end - 1 },
								M = S.notebookEditor.getFocus(),
								N = (0, a.$m6)(k, M)
									? { start: M.start - 1, end: M.end - 1 }
									: { start: k.start - 1, end: k.start };
							P.applyEdits(
								[
									{
										editType: u.CellEditType.Move,
										index: L,
										length: 1,
										newIdx: k.end - 1,
									},
								],
								!0,
								{
									kind: u.SelectionStateType.Index,
									focus: T.getFocus(),
									selections: T.getSelections(),
								},
								() => ({
									kind: u.SelectionStateType.Index,
									focus: N,
									selections: [D],
								}),
								void 0,
								!0,
							);
							const A = T.getSelections()[0] ?? T.getFocus();
							T.revealCellRangeInView(A);
						} else {
							if (k.end >= P.length) return;
							const L = k.end,
								D = { start: k.start + 1, end: k.end + 1 },
								M = T.getFocus(),
								N = (0, a.$m6)(k, M)
									? { start: M.start + 1, end: M.end + 1 }
									: { start: k.start + 1, end: k.start + 2 };
							P.applyEdits(
								[
									{
										editType: u.CellEditType.Move,
										index: L,
										length: 1,
										newIdx: k.start,
									},
								],
								!0,
								{
									kind: u.SelectionStateType.Index,
									focus: T.getFocus(),
									selections: T.getSelections(),
								},
								() => ({
									kind: u.SelectionStateType.Index,
									focus: N,
									selections: [D],
								}),
								void 0,
								!0,
							);
							const A = T.getSelections()[0] ?? T.getFocus();
							T.revealCellRangeInView(A);
						}
				}
				async function p(S, I) {
					const T = S.notebookEditor;
					if (!T.hasModel()) return;
					const P = T.textModel;
					if (T.isReadOnly) return;
					let k;
					if (S.ui) {
						const L = S.cell,
							D = T.getCellIndex(L);
						k = { start: D, end: D + 1 };
					} else {
						const L = T.getSelections();
						k = (0, m.$fJb)(T, L)[0];
					}
					if (!(!k || k.start === k.end))
						if (I === "up") {
							const L = T.getFocus(),
								D = T.getSelections();
							P.applyEdits(
								[
									{
										editType: u.CellEditType.Replace,
										index: k.end,
										count: 0,
										cells: (0, a.$j6)([k]).map((M) =>
											(0, r.$05)(T.cellAt(M).model),
										),
									},
								],
								!0,
								{ kind: u.SelectionStateType.Index, focus: L, selections: D },
								() => ({
									kind: u.SelectionStateType.Index,
									focus: L,
									selections: D,
								}),
								void 0,
								!0,
							);
						} else {
							const L = T.getFocus(),
								D = T.getSelections(),
								N = (0, a.$j6)([k]).map((B) =>
									(0, r.$05)(T.cellAt(B).model),
								).length,
								A = S.ui ? L : { start: L.start + N, end: L.end + N },
								R = S.ui ? D : [{ start: k.start + N, end: k.end + N }];
							P.applyEdits(
								[
									{
										editType: u.CellEditType.Replace,
										index: k.end,
										count: 0,
										cells: (0, a.$j6)([k]).map((B) =>
											(0, r.$05)(T.cellAt(B).model),
										),
									},
								],
								!0,
								{ kind: u.SelectionStateType.Index, focus: L, selections: D },
								() => ({
									kind: u.SelectionStateType.Index,
									focus: A,
									selections: R,
								}),
								void 0,
								!0,
							);
							const O = T.getSelections()[0] ?? T.getFocus();
							T.revealCellRangeInView(O);
						}
				}
				async function o(S, I, T) {
					const P = T.notebookEditor;
					if (P.isReadOnly) return;
					const k = [],
						L = [];
					for (const O of P.getSelections()) L.push(...P.getCellsInRange(O));
					if (L.length <= 1) return;
					const D = L[0].cellKind;
					if (!L.every((O) => O.cellKind === D)) {
						const O = (0, h.localize)(7826, null);
						return I.warn(O);
					}
					const N = L[0],
						A = L.map((O) => O.getText()).join(N.textBuffer.getEOL()),
						R = P.getSelections()[0];
					k.push(
						new d.$hJb(P.textModel.uri, {
							editType: u.CellEditType.Replace,
							index: R.start,
							count: R.end - R.start,
							cells: [
								{
									cellKind: N.cellKind,
									source: A,
									language: N.language,
									mime: N.mime,
									outputs: N.model.outputs,
									metadata: N.metadata,
								},
							],
						}),
					);
					for (const O of P.getSelections().slice(1))
						k.push(
							new d.$hJb(P.textModel.uri, {
								editType: u.CellEditType.Replace,
								index: O.start,
								count: O.end - O.start,
								cells: [],
							}),
						);
					k.length &&
						(await S.apply(k, { quotableLabel: (0, h.localize)(7827, null) }));
				}
				async function f(S, I, T, P) {
					if (S.isReadOnly) return null;
					const k = S.textModel,
						L = S.getCellsInRange(I);
					if (
						!L.length ||
						(I.start === 0 && T === "above") ||
						(I.end === k.length && T === "below")
					)
						return null;
					for (let D = 0; D < L.length; D++) {
						const M = L[D];
						if (P && M.cellKind !== P) return null;
					}
					if (T === "above") {
						const D = S.cellAt(I.start - 1);
						if (P && D.cellKind !== P) return null;
						const M = L.map(
								(R) => (R.textBuffer.getEOL() ?? "") + R.getText(),
							).join(""),
							N = D.textBuffer.getLineCount(),
							A = D.textBuffer.getLineLength(N);
						return {
							edits: [
								new t.$tzb(D.uri, {
									range: new w.$iL(N, A + 1, N, A + 1),
									text: M,
								}),
								new d.$hJb(k.uri, {
									editType: u.CellEditType.Replace,
									index: I.start,
									count: I.end - I.start,
									cells: [],
								}),
							],
							cell: D,
							endFocus: { start: I.start - 1, end: I.start },
							endSelections: [{ start: I.start - 1, end: I.start }],
						};
					} else {
						const D = S.cellAt(I.end);
						if (P && D.cellKind !== P) return null;
						const M = L[0],
							A = [...L.slice(1), D]
								.map((B) => (B.textBuffer.getEOL() ?? "") + B.getText())
								.join(""),
							R = M.textBuffer.getLineCount(),
							O = M.textBuffer.getLineLength(R);
						return {
							edits: [
								new t.$tzb(M.uri, {
									range: new w.$iL(R, O + 1, R, O + 1),
									text: A,
								}),
								new d.$hJb(k.uri, {
									editType: u.CellEditType.Replace,
									index: I.start + 1,
									count: I.end - I.start,
									cells: [],
								}),
							],
							cell: M,
							endFocus: { start: I.start, end: I.start + 1 },
							endSelections: [{ start: I.start, end: I.start + 1 }],
						};
					}
				}
				async function b(S, I, T) {
					const P = I.notebookEditor,
						k = P.textModel,
						L = P.getViewModel();
					let D = null;
					if (I.ui) {
						const M = I.cell.focusMode,
							N = P.getCellIndex(I.cell);
						if (((D = await f(P, { start: N, end: N + 1 }, T)), !D)) return;
						await S.apply(D?.edits, { quotableLabel: "Join Notebook Cells" }),
							L.updateSelectionsState({
								kind: u.SelectionStateType.Index,
								focus: D.endFocus,
								selections: D.endSelections,
							}),
							D.cell.updateEditState(
								m.CellEditState.Editing,
								"joinCellsWithSurrounds",
							),
							P.revealCellRangeInView(P.getFocus()),
							M === m.CellFocusMode.Editor &&
								(D.cell.focusMode = m.CellFocusMode.Editor);
					} else {
						const M = P.getSelections();
						if (!M.length) return;
						const N = P.getFocus(),
							A = P.cellAt(N.start)?.focusMode,
							R = [];
						let O = null;
						const B = [];
						for (let z = M.length - 1; z >= 0; z--) {
							const F = M[z],
								x = (0, a.$m6)(F, N);
							if (
								(F.end >= k.length && T === "below") ||
								(F.start === 0 && T === "above")
							) {
								x && (O = P.cellAt(N.start)), B.push(...P.getCellsInRange(F));
								continue;
							}
							const H = await f(P, F, T);
							if (!H) return;
							R.push(...H.edits), B.push(H.cell), x && (O = H.cell);
						}
						if (!R.length || !O || !B.length) return;
						await S.apply(R, { quotableLabel: "Join Notebook Cells" }),
							B.forEach((z) => {
								z.updateEditState(
									m.CellEditState.Editing,
									"joinCellsWithSurrounds",
								);
							}),
							L.updateSelectionsState({
								kind: u.SelectionStateType.Handle,
								primary: O.handle,
								selections: B.map((z) => z.handle),
							}),
							P.revealCellRangeInView(P.getFocus());
						const U = P.cellAt(P.getFocus().start);
						A === m.CellFocusMode.Editor &&
							U &&
							(U.focusMode = m.CellFocusMode.Editor);
					}
				}
				function s(S, I) {
					const T = [],
						P = I.getLineCount(),
						k = (M) => I.getLineLength(M);
					S = S.sort((M, N) => {
						const A = M.lineNumber - N.lineNumber,
							R = M.column - N.column;
						return A !== 0 ? A : R;
					});
					for (let M of S)
						k(M.lineNumber) + 1 === M.column &&
							M.column !== 1 &&
							M.lineNumber < P &&
							(M = new i.$hL(M.lineNumber + 1, 1)),
							l(T, M);
					if (T.length === 0) return null;
					const L = new i.$hL(1, 1),
						D = new i.$hL(P, k(P) + 1);
					return [L, ...T, D];
				}
				function l(S, I) {
					const T = S.length > 0 ? S[S.length - 1] : void 0;
					(!T || T.lineNumber !== I.lineNumber || T.column !== I.column) &&
						S.push(I);
				}
				function y(S, I) {
					const T = s(I, S.textBuffer);
					if (!T) return null;
					const P = [];
					for (let k = 1; k < T.length; k++) {
						const L = T[k - 1],
							D = T[k];
						P.push(
							S.textBuffer.getValueInRange(
								new w.$iL(L.lineNumber, L.column, D.lineNumber, D.column),
								E.EndOfLinePreference.TextDefined,
							),
						);
					}
					return P;
				}
				function $(S, I, T, P, k = "above", L = "", D = !1) {
					const M = I.getViewModel(),
						N = I.activeKernel;
					if (M.options.isReadOnly) return null;
					const A = I.cellAt(T),
						R = D ? M.getNextVisibleCellIndex(T) : T + 1;
					let O;
					if (P === u.CellKind.Code) {
						const U = N?.supportedLanguages ?? S.getRegisteredLanguageIds(),
							z = U[0] || C.$0M;
						if (A?.cellKind === u.CellKind.Code) O = A.language;
						else if (A?.cellKind === u.CellKind.Markup) {
							const F = M.nearestCodeCellIndex(T);
							F > -1 ? (O = M.cellAt(F).language) : (O = z);
						} else
							A === void 0 && k === "above"
								? (O =
										M.viewCells.find((F) => F.cellKind === u.CellKind.Code)
											?.language || z)
								: (O = z);
						U.includes(O) || (O = z);
					} else O = "markdown";
					return v(
						M,
						A ? (k === "above" ? T : R) : T,
						L,
						O,
						P,
						void 0,
						[],
						!0,
						!0,
					);
				}
				function v(S, I, T, P, k, L, D, M, N) {
					const A = {
						kind: u.SelectionStateType.Index,
						focus: { start: I, end: I + 1 },
						selections: [{ start: I, end: I + 1 }],
					};
					return (
						S.notebookDocument.applyEdits(
							[
								{
									editType: u.CellEditType.Replace,
									index: I,
									count: 0,
									cells: [
										{
											cellKind: k,
											language: P,
											mime: void 0,
											outputs: D,
											metadata: L,
											source: T,
										},
									],
								},
							],
							M,
							{
								kind: u.SelectionStateType.Index,
								focus: S.getFocus(),
								selections: S.getSelections(),
							},
							() => A,
							void 0,
							N && !S.options.isReadOnly,
						),
						S.cellAt(I)
					);
				}
			},
		),
		define(
			de[238],
			he([1, 0, 9, 4, 11, 8, 43, 108, 176, 442, 18, 44, 293, 32, 221, 19]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$D5b =
						e.$A5b =
						e.$z5b =
						e.$y5b =
						e.$x5b =
						e.CellOverflowToolbarGroups =
						e.CellToolbarOrder =
						e.$t5b =
						e.$s5b =
						e.$r5b =
						e.$q5b =
						e.$p5b =
						e.$o5b =
							void 0),
					(e.$u5b = f),
					(e.$v5b = s),
					(e.$w5b = l),
					(e.$B5b = I),
					(e.$C5b = T),
					(e.$o5b = "_notebook.selectKernel"),
					(e.$p5b = (0, i.localize2)(7865, "Notebook")),
					(e.$q5b = "inline/cell"),
					(e.$r5b = "inline/output"),
					(e.$s5b = C.KeybindingWeight.EditorContrib),
					(e.$t5b = C.KeybindingWeight.WorkbenchContrib + 1);
				var p;
				(function (P) {
					(P[(P.EditCell = 0)] = "EditCell"),
						(P[(P.ExecuteAboveCells = 1)] = "ExecuteAboveCells"),
						(P[(P.ExecuteCellAndBelow = 2)] = "ExecuteCellAndBelow"),
						(P[(P.SaveCell = 3)] = "SaveCell"),
						(P[(P.SplitCell = 4)] = "SplitCell"),
						(P[(P.ClearCellOutput = 5)] = "ClearCellOutput");
				})(p || (e.CellToolbarOrder = p = {}));
				var o;
				(function (P) {
					(P.Copy = "1_copy"),
						(P.Insert = "2_insert"),
						(P.Edit = "3_edit"),
						(P.Share = "4_share");
				})(o || (e.CellOverflowToolbarGroups = o = {}));
				function f(P) {
					const k = (0, d.$eJb)(P.activeEditorPane);
					if (!k || !k.hasModel()) return;
					const L = k.getActiveCell(),
						D = k.getSelectionViewModels();
					return { cell: L, selectedCells: D, notebookEditor: k };
				}
				function b(P, k) {
					const D = P.get(h.$n5b)
						.listNotebookEditors()
						.find(
							(M) =>
								M.hasModel() && M.textModel.uri.toString() === k.toString(),
						);
					if (D && D.hasModel()) return D;
				}
				function s(P, k) {
					const L = t.URI.revive(k);
					if (L) {
						const D = b(P, L);
						if (D) return { notebookEditor: D };
					}
				}
				function l(P, k) {
					let L;
					for (const [, D] of P.notebookEditor.codeEditors)
						if ((0, g.$gh)(D.getModel()?.uri, k.uri)) {
							L = D;
							break;
						}
					return L;
				}
				class y extends w.$3X {
					constructor(k) {
						if (k.f1 !== !1) {
							k.f1 = !1;
							const L = {
								id: w.$XX.CommandPalette,
								when: E.$Kj.or(m.$mJb, m.$nJb),
							};
							k.menu
								? Array.isArray(k.menu) || (k.menu = [k.menu])
								: (k.menu = []),
								(k.menu = [...k.menu, L]);
						}
						(k.category = e.$p5b), super(k);
					}
					async run(k, L, ...D) {
						const N = !!L
							? this.c(L)
								? "notebookToolbar"
								: "editorToolbar"
							: void 0;
						if (
							!(
								!this.c(L) &&
								((L = this.getEditorContextFromArgsOrActive(k, L, ...D)), !L)
							)
						)
							return (
								N !== void 0 &&
									k
										.get(c.$km)
										.publicLog2("workbenchActionExecuted", {
											id: this.desc.id,
											from: N,
										}),
								this.runWithContext(k, L)
							);
					}
					c(k) {
						return !!k && !!k.notebookEditor;
					}
					getEditorContextFromArgsOrActive(k, L, ...D) {
						return f(k.get(u.$IY));
					}
				}
				e.$x5b = y;
				class $ extends w.$3X {
					constructor(k) {
						if (k.f1 !== !1) {
							k.f1 = !1;
							const L = { id: w.$XX.CommandPalette, when: m.$mJb };
							k.menu
								? Array.isArray(k.menu) || (k.menu = [k.menu])
								: (k.menu = []),
								(k.menu = [...k.menu, L]);
						}
						(k.category = e.$p5b), super(k);
					}
					parseArgs(k, ...L) {}
					c(k) {
						return (
							!!k &&
							!!k.notebookEditor &&
							k.$mid === n.MarshalledId.NotebookCellActionContext
						);
					}
					async run(k, ...L) {
						const D = L[0],
							M = this.c(D),
							N = (0, a.$y1)(D),
							A = M ? "cellToolbar" : N ? "editorToolbar" : "other",
							R = k.get(c.$km);
						if (M)
							return (
								R.publicLog2("workbenchActionExecuted", {
									id: this.desc.id,
									from: A,
								}),
								this.runWithContext(k, D)
							);
						const O = this.parseArgs(k, ...L);
						if (O)
							return (
								R.publicLog2("workbenchActionExecuted", {
									id: this.desc.id,
									from: A,
								}),
								this.runWithContext(k, O)
							);
						const B = I(k);
						if (B) {
							const U =
								B.getSelections().length === 0
									? [B.getFocus()]
									: B.getSelections();
							return (
								R.publicLog2("workbenchActionExecuted", {
									id: this.desc.id,
									from: A,
								}),
								this.runWithContext(k, {
									ui: !1,
									notebookEditor: B,
									selectedCells: (0, d.$gJb)(B, U),
								})
							);
						}
					}
				}
				e.$y5b = $;
				class v extends y {
					d(k) {
						return !!k && !!k.notebookEditor && !!k.cell;
					}
					e(k, L, ...D) {}
					async run(k, L, ...D) {
						if (this.d(L))
							return (
								k
									.get(c.$km)
									.publicLog2("workbenchActionExecuted", {
										id: this.desc.id,
										from: "cellToolbar",
									}),
								this.runWithContext(k, L)
							);
						const M = this.e(k, L, ...D);
						if (M) return this.runWithContext(k, M);
						const N = this.getEditorContextFromArgsOrActive(k);
						if (this.d(N)) return this.runWithContext(k, N);
					}
				}
				(e.$z5b = v),
					(e.$A5b = E.$Kj.or(
						E.$Kj.greater(m.$TJb.key, 0),
						E.$Kj.greater(m.$UJb.key, 0),
					));
				function S(P) {
					if (P === void 0) return !1;
					const k = P.ranges;
					return !(
						!k ||
						!Array.isArray(k) ||
						k.some((L) => !(0, r.$h6)(L)) ||
						(P.document && !t.URI.revive(P.document))
					);
				}
				function I(P, k) {
					const L = s(P, k)?.notebookEditor;
					if (L) return L;
					const D = (0, d.$eJb)(P.get(u.$IY).activeEditorPane);
					if (!(!D || !D.hasModel())) return D;
				}
				function T(P, ...k) {
					const L = k[0];
					if (S(L)) {
						const M = I(P, L.document);
						if (!M) return;
						const A = L.ranges.map((O) => M.getCellsInRange(O).slice(0)).flat(),
							R = L.autoReveal;
						return {
							ui: !1,
							notebookEditor: M,
							selectedCells: A,
							autoReveal: R,
						};
					}
					if ((0, r.$h6)(L)) {
						const M = k[1],
							N = I(P, M);
						return N
							? {
									ui: !1,
									notebookEditor: N,
									selectedCells: N.getCellsInRange(L),
								}
							: void 0;
					}
					const D = f(P.get(u.$IY));
					return D
						? {
								ui: !1,
								notebookEditor: D.notebookEditor,
								selectedCells: D.selectedCells ?? [],
								cell: D.cell,
							}
						: void 0;
				}
				(e.$D5b = [
					{
						isOptional: !0,
						name: "options",
						description: "The cell range options",
						schema: {
							type: "object",
							required: ["ranges"],
							properties: {
								ranges: {
									type: "array",
									items: [
										{
											type: "object",
											required: ["start", "end"],
											properties: {
												start: { type: "number" },
												end: { type: "number" },
											},
										},
									],
								},
								document: { type: "object", description: "The document uri" },
								autoReveal: {
									type: "boolean",
									description:
										"Whether the cell should be revealed into view automatically",
								},
							},
						},
					},
				]),
					w.$ZX.appendMenuItem(w.$XX.NotebookCellTitle, {
						submenu: w.$XX.NotebookCellInsert,
						title: (0, i.localize)(7862, null),
						group: o.Insert,
						when: m.$tJb.isEqualTo(!0),
					}),
					w.$ZX.appendMenuItem(w.$XX.EditorContext, {
						submenu: w.$XX.NotebookCellTitle,
						title: (0, i.localize)(7863, null),
						group: o.Insert,
						when: m.$pJb,
					}),
					w.$ZX.appendMenuItem(w.$XX.NotebookCellTitle, {
						title: (0, i.localize)(7864, null),
						submenu: w.$XX.EditorContextShare,
						group: o.Share,
					});
			},
		),
		define(
			de[3492],
			he([
				1, 0, 27, 266, 199, 4, 11, 8, 179, 43, 572, 624, 238, 108, 176, 284, 70,
				40, 71, 10,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (g = mt(g));
				const s = "notebook.cell.moveUp",
					l = "notebook.cell.moveDown",
					y = "notebook.cell.copyUp",
					$ = "notebook.cell.copyDown";
				(0, C.$4X)(
					class extends h.$z5b {
						constructor() {
							super({
								id: s,
								title: (0, E.localize2)(7702, "Move Cell Up"),
								icon: g.$cOb,
								keybinding: {
									primary: t.KeyMod.Alt | t.KeyCode.UpArrow,
									when: d.$Kj.and(n.$pJb, m.$bMb.toNegated()),
									weight: r.KeybindingWeight.WorkbenchContrib,
								},
								menu: {
									id: C.$XX.NotebookCellTitle,
									when: d.$Kj.equals("config.notebook.dragAndDropEnabled", !1),
									group: h.CellOverflowToolbarGroups.Edit,
									order: 14,
								},
							});
						}
						async runWithContext(z, F) {
							return (0, a.$G5b)(F, "up");
						}
					},
				),
					(0, C.$4X)(
						class extends h.$z5b {
							constructor() {
								super({
									id: l,
									title: (0, E.localize2)(7703, "Move Cell Down"),
									icon: g.$dOb,
									keybinding: {
										primary: t.KeyMod.Alt | t.KeyCode.DownArrow,
										when: d.$Kj.and(n.$pJb, m.$bMb.toNegated()),
										weight: r.KeybindingWeight.WorkbenchContrib,
									},
									menu: {
										id: C.$XX.NotebookCellTitle,
										when: d.$Kj.equals(
											"config.notebook.dragAndDropEnabled",
											!1,
										),
										group: h.CellOverflowToolbarGroups.Edit,
										order: 14,
									},
								});
							}
							async runWithContext(z, F) {
								return (0, a.$G5b)(F, "down");
							}
						},
					),
					(0, C.$4X)(
						class extends h.$z5b {
							constructor() {
								super({
									id: y,
									title: (0, E.localize2)(7704, "Copy Cell Up"),
									keybinding: {
										primary: t.KeyMod.Alt | t.KeyMod.Shift | t.KeyCode.UpArrow,
										when: d.$Kj.and(n.$pJb, m.$bMb.toNegated()),
										weight: r.KeybindingWeight.WorkbenchContrib,
									},
								});
							}
							async runWithContext(z, F) {
								return (0, a.$H5b)(F, "up");
							}
						},
					),
					(0, C.$4X)(
						class extends h.$z5b {
							constructor() {
								super({
									id: $,
									title: (0, E.localize2)(7705, "Copy Cell Down"),
									keybinding: {
										primary:
											t.KeyMod.Alt | t.KeyMod.Shift | t.KeyCode.DownArrow,
										when: d.$Kj.and(n.$pJb, m.$bMb.toNegated()),
										weight: r.KeybindingWeight.WorkbenchContrib,
									},
									menu: {
										id: C.$XX.NotebookCellTitle,
										when: d.$Kj.and(n.$pJb, n.$tJb, n.$DJb),
										group: h.CellOverflowToolbarGroups.Edit,
										order: 13,
									},
								});
							}
							async runWithContext(z, F) {
								return (0, a.$H5b)(F, "down");
							}
						},
					);
				const v = "notebook.cell.split",
					S = "notebook.cell.joinSelected",
					I = "notebook.cell.joinAbove",
					T = "notebook.cell.joinBelow";
				(0, C.$4X)(
					class extends h.$z5b {
						constructor() {
							super({
								id: v,
								title: (0, E.localize2)(7706, "Split Cell"),
								menu: {
									id: C.$XX.NotebookCellTitle,
									when: d.$Kj.and(n.$tJb, n.$DJb, n.$NJb.toNegated()),
									order: h.CellToolbarOrder.SplitCell,
									group: h.$q5b,
								},
								icon: g.$fOb,
								keybinding: {
									when: d.$Kj.and(
										n.$pJb,
										n.$tJb,
										n.$DJb,
										f.EditorContextKeys.editorTextFocus,
									),
									primary: (0, t.$os)(
										t.$ps,
										t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.Backslash,
									),
									mac: {
										primary: (0, t.$os)(
											t.$qs,
											t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.Backslash,
										),
									},
									weight: r.KeybindingWeight.WorkbenchContrib,
								},
							});
						}
						async runWithContext(z, F) {
							if (F.notebookEditor.isReadOnly) return;
							const x = z.get(w.$rzb),
								H = F.cell,
								q = F.notebookEditor.getCellIndex(H),
								V =
									H.focusMode === c.CellFocusMode.Container
										? [{ lineNumber: 1, column: 1 }]
										: H.getSelectionsStartPosition();
							if (V && V.length > 0) {
								if ((await H.resolveTextModel(), !H.hasModel())) return;
								const G = (0, a.$L5b)(H, V);
								if (G) {
									const K = H.language,
										J = H.cellKind,
										W = H.mime,
										X = await H.resolveTextModel();
									await x.apply(
										[
											new w.$tzb(H.uri, {
												range: X.getFullModelRange(),
												text: G[0],
											}),
											new u.$hJb(F.notebookEditor.textModel.uri, {
												editType: p.CellEditType.Replace,
												index: q + 1,
												count: 0,
												cells: G.slice(1).map((Y) => ({
													cellKind: J,
													language: K,
													mime: W,
													source: Y,
													outputs: [],
													metadata: {},
												})),
											}),
										],
										{ quotableLabel: "Split Notebook Cell" },
									);
								}
							}
						}
					},
				),
					(0, C.$4X)(
						class extends h.$z5b {
							constructor() {
								super({
									id: I,
									title: (0, E.localize2)(7707, "Join With Previous Cell"),
									keybinding: {
										when: n.$pJb,
										primary:
											t.KeyMod.WinCtrl |
											t.KeyMod.Alt |
											t.KeyMod.Shift |
											t.KeyCode.KeyJ,
										weight: r.KeybindingWeight.WorkbenchContrib,
									},
									menu: {
										id: C.$XX.NotebookCellTitle,
										when: d.$Kj.and(n.$pJb, n.$tJb),
										group: h.CellOverflowToolbarGroups.Edit,
										order: 10,
									},
								});
							}
							async runWithContext(z, F) {
								const x = z.get(w.$rzb);
								return (0, a.$K5b)(x, F, "above");
							}
						},
					),
					(0, C.$4X)(
						class extends h.$z5b {
							constructor() {
								super({
									id: T,
									title: (0, E.localize2)(7708, "Join With Next Cell"),
									keybinding: {
										when: n.$pJb,
										primary: t.KeyMod.WinCtrl | t.KeyMod.Alt | t.KeyCode.KeyJ,
										weight: r.KeybindingWeight.WorkbenchContrib,
									},
									menu: {
										id: C.$XX.NotebookCellTitle,
										when: d.$Kj.and(n.$pJb, n.$tJb),
										group: h.CellOverflowToolbarGroups.Edit,
										order: 11,
									},
								});
							}
							async runWithContext(z, F) {
								const x = z.get(w.$rzb);
								return (0, a.$K5b)(x, F, "below");
							}
						},
					),
					(0, C.$4X)(
						class extends h.$z5b {
							constructor() {
								super({
									id: S,
									title: (0, E.localize2)(7709, "Join Selected Cells"),
									menu: {
										id: C.$XX.NotebookCellTitle,
										when: d.$Kj.and(n.$pJb, n.$tJb),
										group: h.CellOverflowToolbarGroups.Edit,
										order: 12,
									},
								});
							}
							async runWithContext(z, F) {
								const x = z.get(w.$rzb),
									H = z.get(o.$4N);
								return (0, a.$I5b)(x, H, F);
							}
						},
					);
				const P = "notebook.cell.changeToCode",
					k = "notebook.cell.changeToMarkdown";
				(0, C.$4X)(
					class extends h.$y5b {
						constructor() {
							super({
								id: P,
								title: (0, E.localize2)(7710, "Change Cell to Code"),
								keybinding: {
									when: d.$Kj.and(
										n.$pJb,
										d.$Kj.not(m.$aMb),
										n.$rJb.toNegated(),
									),
									primary: t.KeyCode.KeyY,
									weight: r.KeybindingWeight.WorkbenchContrib,
								},
								precondition: d.$Kj.and(n.$mJb, n.$CJb.isEqualTo("markup")),
								menu: {
									id: C.$XX.NotebookCellTitle,
									when: d.$Kj.and(
										n.$pJb,
										n.$tJb,
										n.$DJb,
										n.$CJb.isEqualTo("markup"),
									),
									group: h.CellOverflowToolbarGroups.Edit,
								},
							});
						}
						async runWithContext(F, x) {
							await (0, a.$E5b)(p.CellKind.Code, x);
						}
					},
				),
					(0, C.$4X)(
						class extends h.$y5b {
							constructor() {
								super({
									id: k,
									title: (0, E.localize2)(7711, "Change Cell to Markdown"),
									keybinding: {
										when: d.$Kj.and(
											n.$pJb,
											d.$Kj.not(m.$aMb),
											n.$rJb.toNegated(),
										),
										primary: t.KeyCode.KeyM,
										weight: r.KeybindingWeight.WorkbenchContrib,
									},
									precondition: d.$Kj.and(n.$mJb, n.$CJb.isEqualTo("code")),
									menu: {
										id: C.$XX.NotebookCellTitle,
										when: d.$Kj.and(
											n.$pJb,
											n.$tJb,
											n.$DJb,
											n.$CJb.isEqualTo("code"),
										),
										group: h.CellOverflowToolbarGroups.Edit,
									},
								});
							}
							async runWithContext(F, x) {
								await (0, a.$E5b)(
									p.CellKind.Markup,
									x,
									"markdown",
									i.$EK.markdown,
								);
							}
						},
					);
				const L = "notebook.cell.collapseCellInput",
					D = "notebook.cell.collapseCellOutput",
					M = "notebook.cell.collapseAllCellInputs",
					N = "notebook.cell.expandAllCellInputs",
					A = "notebook.cell.collapseAllCellOutputs",
					R = "notebook.cell.expandAllCellOutputs",
					O = "notebook.cell.toggleOutputs",
					B = "notebook.cell.toggleOutputScrolling";
				(0, C.$4X)(
					class extends h.$y5b {
						constructor() {
							super({
								id: L,
								title: (0, E.localize2)(7712, "Collapse Cell Input"),
								keybinding: {
									when: d.$Kj.and(
										n.$qJb,
										n.$NJb.toNegated(),
										m.$bMb.toNegated(),
									),
									primary: (0, t.$os)(t.$ps, t.KeyMod.CtrlCmd | t.KeyCode.KeyC),
									mac: {
										primary: (0, t.$os)(
											t.$qs,
											t.KeyMod.CtrlCmd | t.KeyCode.KeyC,
										),
									},
									weight: r.KeybindingWeight.WorkbenchContrib,
								},
							});
						}
						parseArgs(F, ...x) {
							return (0, h.$C5b)(F, ...x);
						}
						async runWithContext(F, x) {
							x.ui
								? (x.cell.isInputCollapsed = !0)
								: x.selectedCells.forEach((H) => (H.isInputCollapsed = !0));
						}
					},
				),
					(0, C.$4X)(
						class extends h.$y5b {
							constructor() {
								super({
									id: c.$7Ib,
									title: (0, E.localize2)(7713, "Expand Cell Input"),
									keybinding: {
										when: d.$Kj.and(n.$qJb, n.$NJb),
										primary: (0, t.$os)(
											t.$ps,
											t.KeyMod.CtrlCmd | t.KeyCode.KeyC,
										),
										mac: {
											primary: (0, t.$os)(
												t.$qs,
												t.KeyMod.CtrlCmd | t.KeyCode.KeyC,
											),
										},
										weight: r.KeybindingWeight.WorkbenchContrib,
									},
								});
							}
							parseArgs(F, ...x) {
								return (0, h.$C5b)(F, ...x);
							}
							async runWithContext(F, x) {
								x.ui
									? (x.cell.isInputCollapsed = !1)
									: x.selectedCells.forEach((H) => (H.isInputCollapsed = !1));
							}
						},
					),
					(0, C.$4X)(
						class extends h.$y5b {
							constructor() {
								super({
									id: D,
									title: (0, E.localize2)(7714, "Collapse Cell Output"),
									keybinding: {
										when: d.$Kj.and(
											n.$qJb,
											n.$OJb.toNegated(),
											m.$bMb.toNegated(),
											n.$KJb,
										),
										primary: (0, t.$os)(t.$ps, t.KeyCode.KeyT),
										mac: { primary: (0, t.$os)(t.$qs, t.KeyCode.KeyT) },
										weight: r.KeybindingWeight.WorkbenchContrib,
									},
								});
							}
							async runWithContext(F, x) {
								x.ui
									? (x.cell.isOutputCollapsed = !0)
									: x.selectedCells.forEach((H) => (H.isOutputCollapsed = !0));
							}
						},
					),
					(0, C.$4X)(
						class extends h.$y5b {
							constructor() {
								super({
									id: c.$_Ib,
									title: (0, E.localize2)(7715, "Expand Cell Output"),
									keybinding: {
										when: d.$Kj.and(n.$qJb, n.$OJb),
										primary: (0, t.$os)(t.$ps, t.KeyCode.KeyT),
										mac: { primary: (0, t.$os)(t.$qs, t.KeyCode.KeyT) },
										weight: r.KeybindingWeight.WorkbenchContrib,
									},
								});
							}
							async runWithContext(F, x) {
								x.ui
									? (x.cell.isOutputCollapsed = !1)
									: x.selectedCells.forEach((H) => (H.isOutputCollapsed = !1));
							}
						},
					),
					(0, C.$4X)(
						class extends h.$y5b {
							constructor() {
								super({
									id: O,
									precondition: n.$qJb,
									title: (0, E.localize2)(7716, "Toggle Outputs"),
									metadata: {
										description: (0, E.localize)(7701, null),
										args: h.$D5b,
									},
								});
							}
							parseArgs(z, ...F) {
								return (0, h.$C5b)(z, ...F);
							}
							async runWithContext(z, F) {
								let x = [];
								F.ui
									? (x = [F.cell])
									: F.selectedCells && (x = F.selectedCells);
								for (const H of x) H.isOutputCollapsed = !H.isOutputCollapsed;
							}
						},
					),
					(0, C.$4X)(
						class extends h.$y5b {
							constructor() {
								super({
									id: M,
									title: (0, E.localize2)(7717, "Collapse All Cell Inputs"),
									f1: !0,
								});
							}
							async runWithContext(F, x) {
								U(x.notebookEditor, (H) => (H.isInputCollapsed = !0));
							}
						},
					),
					(0, C.$4X)(
						class extends h.$y5b {
							constructor() {
								super({
									id: N,
									title: (0, E.localize2)(7718, "Expand All Cell Inputs"),
									f1: !0,
								});
							}
							async runWithContext(F, x) {
								U(x.notebookEditor, (H) => (H.isInputCollapsed = !1));
							}
						},
					),
					(0, C.$4X)(
						class extends h.$y5b {
							constructor() {
								super({
									id: A,
									title: (0, E.localize2)(7719, "Collapse All Cell Outputs"),
									f1: !0,
								});
							}
							async runWithContext(F, x) {
								U(x.notebookEditor, (H) => (H.isOutputCollapsed = !0));
							}
						},
					),
					(0, C.$4X)(
						class extends h.$y5b {
							constructor() {
								super({
									id: R,
									title: (0, E.localize2)(7720, "Expand All Cell Outputs"),
									f1: !0,
								});
							}
							async runWithContext(F, x) {
								U(x.notebookEditor, (H) => (H.isOutputCollapsed = !1));
							}
						},
					),
					(0, C.$4X)(
						class extends h.$y5b {
							constructor() {
								super({
									id: B,
									title: (0, E.localize2)(7721, "Toggle Scroll Cell Output"),
									keybinding: {
										when: d.$Kj.and(n.$qJb, m.$bMb.toNegated(), n.$KJb),
										primary: (0, t.$os)(t.$ps, t.KeyCode.KeyY),
										mac: { primary: (0, t.$os)(t.$qs, t.KeyCode.KeyY) },
										weight: r.KeybindingWeight.WorkbenchContrib,
									},
								});
							}
							a(F, x, H) {
								const q = F.model.metadata;
								if (q) {
									const V = q.scrollable !== void 0 ? q.scrollable : x,
										G = H || !V;
									(q.scrollable = G), F.resetRenderer();
								}
							}
							async runWithContext(F, x) {
								const H = F.get(b.$gj).getValue(p.$56.outputScrolling);
								x.ui
									? (x.cell.outputsViewModels.forEach((q) => {
											this.a(q, H, x.cell.isOutputCollapsed);
										}),
										(x.cell.isOutputCollapsed = !1))
									: x.selectedCells.forEach((q) => {
											q.outputsViewModels.forEach((V) => {
												this.a(V, H, q.isOutputCollapsed);
											}),
												(q.isOutputCollapsed = !1);
										});
							}
						},
					);
				function U(z, F) {
					for (let x = 0; x < z.getLength(); x++) {
						const H = z.cellAt(x);
						F(H, x);
					}
				}
			},
		),
		define(
			de[3493],
			he([
				1, 0, 4, 3, 55, 18, 176, 108, 787, 121, 1029, 70, 161, 12, 11, 238, 27,
				8, 179, 43, 46, 99, 34, 31, 705, 7,
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
					(e.$OFc = void 0),
					(e.$LFc = A),
					(e.$MFc = R),
					(e.$NFc = O),
					(c = mt(c));
				let I = !1;
				function T() {
					I = !I;
				}
				function P(H, q) {
					I && H.info(`[NotebookClipboard]: ${q}`);
				}
				function k(H) {
					const q = H.get(y.$ik),
						V = H.get(E.$IY),
						G = (0, d.$eJb)(V.activeEditorPane);
					if (!G) {
						P(
							q,
							"[Revive Webview] No notebook editor found for active editor pane, bypass",
						);
						return;
					}
					if (!G.hasEditorFocus()) {
						P(q, "[Revive Webview] Notebook editor is not focused, bypass");
						return;
					}
					if (!G.hasWebviewFocus()) {
						P(
							q,
							"[Revive Webview] Notebook editor backlayer webview is not focused, bypass",
						);
						return;
					}
					const K = G.getViewModel();
					if (
						!(
							K &&
							K.viewCells.every((J) => !J.outputIsFocused && !J.outputIsHovered)
						)
					)
						return { editor: G, loggerService: q };
				}
				function L(H) {
					const q = k(H);
					if (!q) return;
					const V = q.editor.getInnerWebview();
					return (
						P(
							q.loggerService,
							"[Revive Webview] Notebook editor backlayer webview is focused",
						),
						V
					);
				}
				function D(H, q) {
					const V = L(H);
					return V ? (q(V), !0) : !1;
				}
				function M(H, q) {
					const V = k(H);
					return V ? q(V.editor) : !1;
				}
				const N = 105;
				s.$stb.addImplementation(N, "notebook-webview", (H) =>
					D(H, (q) => q.undo()),
				),
					s.$ttb.addImplementation(N, "notebook-webview", (H) =>
						D(H, (q) => q.redo()),
					),
					m.$BAb?.addImplementation(N, "notebook-webview", (H) =>
						D(H, (q) => q.copy()),
					),
					m.$CAb?.addImplementation(N, "notebook-webview", (H) =>
						D(H, (q) => q.paste()),
					),
					m.$AAb?.addImplementation(N, "notebook-webview", (H) =>
						D(H, (q) => q.cut()),
					);
				function A(H, q, V) {
					if (!H.hasModel()) return !1;
					const G = H.textModel;
					if (H.isReadOnly) return !1;
					const K = {
						kind: a.SelectionStateType.Index,
						focus: H.getFocus(),
						selections: H.getSelections(),
					};
					if (q) {
						const J = H.getCellIndex(q),
							W = typeof J == "number" ? J + 1 : 0;
						G.applyEdits(
							[
								{
									editType: a.CellEditType.Replace,
									index: W,
									count: 0,
									cells: V.items.map((X) => (0, u.$05)(X)),
								},
							],
							!0,
							K,
							() => ({
								kind: a.SelectionStateType.Index,
								focus: { start: W, end: W + 1 },
								selections: [{ start: W, end: W + V.items.length }],
							}),
							void 0,
							!0,
						);
					} else {
						if (H.getLength() !== 0) return !1;
						G.applyEdits(
							[
								{
									editType: a.CellEditType.Replace,
									index: 0,
									count: 0,
									cells: V.items.map((J) => (0, u.$05)(J)),
								},
							],
							!0,
							K,
							() => ({
								kind: a.SelectionStateType.Index,
								focus: { start: 0, end: 1 },
								selections: [{ start: 1, end: V.items.length + 1 }],
							}),
							void 0,
							!0,
						);
					}
					return !0;
				}
				function R(H, q, V) {
					if (!q.hasModel()) return !1;
					if (q.hasOutputTextSelection())
						return (
							(0, S.getWindow)(q.getDomNode()).document.execCommand("copy"), !0
						);
					const G = H.get(r.$Vxb),
						K = H.get(h.$MIb),
						J = q.getSelections();
					if (V) {
						const Y = q.getCellIndex(V);
						if (!J.find((ne) => ne.start <= Y && Y < ne.end))
							return G.writeText(V.getText()), K.setToCopy([V.model], !0), !0;
					}
					const W = (0, d.$fJb)(q, q.getSelections()),
						X = (0, d.$gJb)(q, W);
					return X.length
						? (G.writeText(
								X.map((Y) => Y.getText()).join(`
`),
							),
							K.setToCopy(
								X.map((Y) => Y.model),
								!0,
							),
							!0)
						: !1;
				}
				function O(H, q, V) {
					if (!q.hasModel() || q.isReadOnly) return !1;
					const G = q.textModel,
						K = H.get(r.$Vxb),
						J = H.get(h.$MIb),
						W = q.getSelections();
					if (V) {
						const Q = q.getCellIndex(V);
						if (!W.find((se) => se.start <= Q && Q < se.end)) {
							K.writeText(V.getText());
							const se = q.getFocus(),
								re =
									se.end <= Q ? se : { start: se.start - 1, end: se.end - 1 },
								le = W.map((oe) =>
									oe.end <= Q ? oe : { start: oe.start - 1, end: oe.end - 1 },
								);
							return (
								G.applyEdits(
									[
										{
											editType: a.CellEditType.Replace,
											index: Q,
											count: 1,
											cells: [],
										},
									],
									!0,
									{
										kind: a.SelectionStateType.Index,
										focus: q.getFocus(),
										selections: W,
									},
									() => ({
										kind: a.SelectionStateType.Index,
										focus: re,
										selections: le,
									}),
									void 0,
									!0,
								),
								J.setToCopy([V.model], !1),
								!0
							);
						}
					}
					const X = q.getFocus();
					if (!W.find((Q) => Q.start <= X.start && X.end <= Q.end)) {
						const Q = q.cellAt(X.start);
						K.writeText(Q.getText());
						const Z =
								X.end === q.getLength()
									? { start: X.start - 1, end: X.end - 1 }
									: X,
							se = W.map((re) =>
								re.end <= X.start
									? re
									: { start: re.start - 1, end: re.end - 1 },
							);
						return (
							G.applyEdits(
								[
									{
										editType: a.CellEditType.Replace,
										index: X.start,
										count: 1,
										cells: [],
									},
								],
								!0,
								{
									kind: a.SelectionStateType.Index,
									focus: q.getFocus(),
									selections: W,
								},
								() => ({
									kind: a.SelectionStateType.Index,
									focus: Z,
									selections: se,
								}),
								void 0,
								!0,
							),
							J.setToCopy([Q.model], !1),
							!0
						);
					}
					const ie = (0, d.$fJb)(q, q.getSelections()),
						ne = (0, d.$gJb)(q, ie);
					if (!ne.length) return !1;
					K.writeText(
						ne
							.map((Q) => Q.getText())
							.join(`
`),
					);
					const ee = ie.map((Q) => ({
							editType: a.CellEditType.Replace,
							index: Q.start,
							count: Q.end - Q.start,
							cells: [],
						})),
						_ = ie[0].start,
						te = _ < G.cells.length - 1 ? _ : Math.max(G.cells.length - 2, 0);
					return (
						G.applyEdits(
							ee,
							!0,
							{
								kind: a.SelectionStateType.Index,
								focus: q.getFocus(),
								selections: ie,
							},
							() => ({
								kind: a.SelectionStateType.Index,
								focus: { start: te, end: te + 1 },
								selections: [{ start: te, end: te + 1 }],
							}),
							void 0,
							!0,
						),
						J.setToCopy(
							ne.map((Q) => Q.model),
							!1,
						),
						!0
					);
				}
				let B = class extends i.$1c {
					static {
						this.ID = "workbench.contrib.notebookClipboard";
					}
					constructor(q) {
						super(), (this.a = q);
						const V = 105;
						m.$BAb &&
							this.D(
								m.$BAb.addImplementation(V, "notebook-clipboard", (G) =>
									this.runCopyAction(G),
								),
							),
							m.$CAb &&
								this.D(
									m.$CAb.addImplementation(V, "notebook-clipboard", (G) =>
										this.runPasteAction(G),
									),
								),
							m.$AAb &&
								this.D(
									m.$AAb.addImplementation(V, "notebook-clipboard", (G) =>
										this.runCutAction(G),
									),
								);
					}
					b() {
						const q = (0, d.$eJb)(this.a.activeEditorPane),
							V = q?.getActiveCell();
						return { editor: q, activeCell: V };
					}
					c(q) {
						const V = (0, S.getWindow)(q.getDomNode()).getSelection();
						if (V?.rangeCount !== 1) return !1;
						const G = V.getRangeAt(0);
						if (
							G.startContainer === G.endContainer &&
							G.endOffset - G.startOffset === 0
						)
							return !1;
						let K = G.commonAncestorContainer;
						const J = q.getDomNode();
						if (!J.contains(K)) return !1;
						for (; K && K !== J; ) {
							if (K.classList && K.classList.contains("monaco-editor"))
								return !0;
							K = K.parentNode;
						}
						return !1;
					}
					runCopyAction(q) {
						const V = q.get(y.$ik),
							G = (0, S.$Jgb)();
						if (
							(0, S.$Ygb)(G) &&
							["input", "textarea"].indexOf(G.tagName.toLowerCase()) >= 0
						)
							return (
								P(
									V,
									"[NotebookEditor] focus is on input or textarea element, bypass",
								),
								!1
							);
						const { editor: K } = this.b();
						return K
							? (0, S.$Bgb)(G, K.getDomNode())
								? this.c(K)
									? (P(
											V,
											"[NotebookEditor] focus is on embed monaco editor, bypass",
										),
										!1)
									: (P(
											V,
											"[NotebookEditor] run copy actions on notebook model",
										),
										R(q, K, void 0))
								: (P(
										V,
										"[NotebookEditor] focus is outside of the notebook editor, bypass",
									),
									!1)
							: (P(V, "[NotebookEditor] no active notebook editor, bypass"),
								!1);
					}
					runPasteAction(q) {
						const V = (0, S.$Jgb)();
						if (
							V &&
							["input", "textarea"].indexOf(V.tagName.toLowerCase()) >= 0
						)
							return !1;
						const K = q.get(h.$MIb).getToCopy();
						if (!K) return !1;
						const { editor: J, activeCell: W } = this.b();
						return J ? A(J, W, K) : !1;
					}
					runCutAction(q) {
						const V = (0, S.$Jgb)();
						if (
							V &&
							["input", "textarea"].indexOf(V.tagName.toLowerCase()) >= 0
						)
							return !1;
						const { editor: G } = this.b();
						return G ? O(q, G, void 0) : !1;
					}
				};
				(e.$OFc = B),
					(e.$OFc = B = Ne([j(0, E.$IY)], B)),
					(0, w.$s6)(B.ID, B, w.WorkbenchPhase.BlockRestore);
				const U = "notebook.cell.copy",
					z = "notebook.cell.cut",
					F = "notebook.cell.paste",
					x = "notebook.cell.pasteAbove";
				(0, n.$4X)(
					class extends g.$z5b {
						constructor() {
							super({
								id: U,
								title: (0, t.localize)(7734, null),
								menu: {
									id: n.$XX.NotebookCellTitle,
									when: C.$pJb,
									group: g.CellOverflowToolbarGroups.Copy,
									order: 2,
								},
								keybinding: c.$p
									? void 0
									: {
											primary: p.KeyMod.CtrlCmd | p.KeyCode.KeyC,
											win: {
												primary: p.KeyMod.CtrlCmd | p.KeyCode.KeyC,
												secondary: [p.KeyMod.CtrlCmd | p.KeyCode.Insert],
											},
											when: o.$Kj.and(C.$pJb, o.$Kj.not(f.$aMb)),
											weight: b.KeybindingWeight.WorkbenchContrib,
										},
							});
						}
						async runWithContext(H, q) {
							R(H, q.notebookEditor, q.cell);
						}
					},
				),
					(0, n.$4X)(
						class extends g.$z5b {
							constructor() {
								super({
									id: z,
									title: (0, t.localize)(7735, null),
									menu: {
										id: n.$XX.NotebookCellTitle,
										when: o.$Kj.and(C.$pJb, C.$tJb, C.$DJb),
										group: g.CellOverflowToolbarGroups.Copy,
										order: 1,
									},
									keybinding: c.$p
										? void 0
										: {
												when: o.$Kj.and(C.$pJb, o.$Kj.not(f.$aMb)),
												primary: p.KeyMod.CtrlCmd | p.KeyCode.KeyX,
												win: {
													primary: p.KeyMod.CtrlCmd | p.KeyCode.KeyX,
													secondary: [p.KeyMod.Shift | p.KeyCode.Delete],
												},
												weight: b.KeybindingWeight.WorkbenchContrib,
											},
								});
							}
							async runWithContext(H, q) {
								O(H, q.notebookEditor, q.cell);
							}
						},
					),
					(0, n.$4X)(
						class extends g.$x5b {
							constructor() {
								super({
									id: F,
									title: (0, t.localize)(7736, null),
									menu: {
										id: n.$XX.NotebookCellTitle,
										when: o.$Kj.and(C.$pJb, C.$tJb),
										group: g.CellOverflowToolbarGroups.Copy,
										order: 3,
									},
									keybinding: c.$p
										? void 0
										: {
												when: o.$Kj.and(C.$pJb, o.$Kj.not(f.$aMb)),
												primary: p.KeyMod.CtrlCmd | p.KeyCode.KeyV,
												win: {
													primary: p.KeyMod.CtrlCmd | p.KeyCode.KeyV,
													secondary: [p.KeyMod.Shift | p.KeyCode.Insert],
												},
												linux: {
													primary: p.KeyMod.CtrlCmd | p.KeyCode.KeyV,
													secondary: [p.KeyMod.Shift | p.KeyCode.Insert],
												},
												weight: b.KeybindingWeight.EditorContrib,
											},
								});
							}
							async runWithContext(H, q) {
								const G = H.get(h.$MIb).getToCopy();
								!q.notebookEditor.hasModel() ||
									q.notebookEditor.isReadOnly ||
									(G && A(q.notebookEditor, q.cell, G));
							}
						},
					),
					(0, n.$4X)(
						class extends g.$z5b {
							constructor() {
								super({
									id: x,
									title: (0, t.localize)(7737, null),
									keybinding: {
										when: o.$Kj.and(C.$pJb, o.$Kj.not(f.$aMb)),
										primary: p.KeyMod.CtrlCmd | p.KeyMod.Shift | p.KeyCode.KeyV,
										weight: g.$s5b,
									},
								});
							}
							async runWithContext(H, q) {
								const G = H.get(h.$MIb).getToCopy(),
									K = q.notebookEditor,
									J = K.textModel;
								if (K.isReadOnly || !G) return;
								const W = {
										kind: a.SelectionStateType.Index,
										focus: K.getFocus(),
										selections: K.getSelections(),
									},
									X = q.notebookEditor.getCellIndex(q.cell),
									Y = X;
								J.applyEdits(
									[
										{
											editType: a.CellEditType.Replace,
											index: X,
											count: 0,
											cells: G.items.map((ie) => (0, u.$05)(ie)),
										},
									],
									!0,
									W,
									() => ({
										kind: a.SelectionStateType.Index,
										focus: { start: Y, end: Y + 1 },
										selections: [{ start: Y, end: Y + G.items.length }],
									}),
									void 0,
									!0,
								);
							}
						},
					),
					(0, n.$4X)(
						class extends n.$3X {
							constructor() {
								super({
									id: "workbench.action.toggleNotebookClipboardLog",
									title: (0, t.localize2)(
										7739,
										"Toggle Notebook Clipboard Troubleshooting",
									),
									category: l.$ck.Developer,
									f1: !0,
								});
							}
							run(H) {
								T(), I && H.get($.$ek).executeCommand(v.$0Sb);
							}
						},
					),
					(0, n.$4X)(
						class extends g.$z5b {
							constructor() {
								super({
									id: "notebook.cell.output.selectAll",
									title: (0, t.localize)(7738, null),
									keybinding: {
										primary: p.KeyMod.CtrlCmd | p.KeyCode.KeyA,
										when: o.$Kj.and(C.$pJb, C.$rJb),
										weight: g.$t5b,
									},
								});
							}
							async runWithContext(H, q) {
								M(H, (V) => {
									if (!V.hasEditorFocus()) return !1;
									if (V.hasEditorFocus() && !V.hasWebviewFocus()) return !0;
									const G = V.getActiveCell();
									return (
										!G ||
											!G.outputIsFocused ||
											!V.hasWebviewFocus() ||
											(G.inputInOutputIsFocused
												? V.selectInputContents(G)
												: V.selectOutputContent(G)),
										!0
									);
								});
							}
						},
					);
			},
		),
		define(
			de[3494],
			he([
				1, 0, 27, 23, 19, 65, 38, 71, 618, 4, 11, 8, 43, 1304, 238, 108, 330,
				70, 176, 18, 2452,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, p.$PKb)(c.$TFc.id, c.$TFc),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: "notebook.hideFind",
									title: (0, r.localize2)(7750, "Hide Find in Notebook"),
									keybinding: {
										when: a.$Kj.and(f.$pJb, f.$kJb),
										primary: t.KeyCode.Escape,
										weight: h.KeybindingWeight.WorkbenchContrib,
									},
								});
							}
							async run(y) {
								const $ = y.get(b.$IY),
									v = (0, g.$eJb)($.activeEditorPane);
								if (!v) return;
								v.getContribution(c.$TFc.id).hide(), v.focus();
							}
						},
					),
					(0, u.$4X)(
						class extends n.$y5b {
							constructor() {
								super({
									id: "notebook.find",
									title: (0, r.localize2)(7751, "Find in Notebook"),
									keybinding: {
										when: a.$Kj.and(
											f.$pJb,
											a.$Kj.or(f.$mJb, f.$nJb),
											d.EditorContextKeys.focus.toNegated(),
										),
										primary: t.KeyCode.KeyF | t.KeyMod.CtrlCmd,
										weight: h.KeybindingWeight.WorkbenchContrib,
									},
								});
							}
							async runWithContext(y, $) {
								const v = y.get(b.$IY),
									S = (0, g.$eJb)(v.activeEditorPane);
								if (!S) return;
								S.getContribution(c.$TFc.id).show(void 0, {
									findScope: { findScopeType: o.NotebookFindScopeType.None },
								});
							}
						},
					);
				function s(y, $) {
					if ($.uri.scheme === i.Schemas.vscodeNotebookCell) {
						const v = o.CellUri.parse($.uri);
						if (v && (0, w.$gh)(v.notebook, y)) return !0;
					}
					return !1;
				}
				function l(y, $) {
					if ($.seedSearchStringFromSelection === "single") {
						const v = (0, m.$tfc)(
							y,
							$.seedSearchStringFromSelection,
							$.seedSearchStringFromNonEmptySelection,
						);
						if (v) return { searchString: v, selection: y.getSelection() };
					} else if (
						$.seedSearchStringFromSelection === "multiple" &&
						!$.updateSearchScope
					) {
						const v = (0, m.$tfc)(y, $.seedSearchStringFromSelection);
						if (v) return { searchString: v, selection: y.getSelection() };
					}
				}
				m.$wfc.addImplementation(100, (y, $, v) => {
					const S = y.get(b.$IY),
						I = (0, g.$eJb)(S.activeEditorPane);
					if (!I || !$.hasModel()) return !1;
					if (!I.hasEditorFocus() && !I.hasWebviewFocus()) {
						const M = y.get(E.$dtb),
							N = M.getFocusedCodeEditor() || M.getActiveCodeEditor();
						if (
							!(
								I.hasModel() &&
								N &&
								N.hasModel() &&
								s(I.textModel.uri, N.getModel())
							)
						)
							return !1;
					}
					const T = I.getContribution(c.$TFc.id),
						P = l($, {
							forceRevealReplace: !1,
							seedSearchStringFromSelection:
								$.getOption(C.EditorOption.find)
									.seedSearchStringFromSelection !== "never"
									? "single"
									: "none",
							seedSearchStringFromNonEmptySelection:
								$.getOption(C.EditorOption.find)
									.seedSearchStringFromSelection === "selection",
							seedSearchStringFromGlobalClipboard: $.getOption(
								C.EditorOption.find,
							).globalFindClipboard,
							shouldFocus: m.FindStartFocusAction.FocusFindInput,
							shouldAnimate: !0,
							updateSearchScope: !1,
							loop: $.getOption(C.EditorOption.find).loop,
						});
					let k;
					const L = $.getModel().uri,
						D = o.CellUri.parse(L);
					if (P?.selection && D) {
						const M = I.getCellByHandle(D.handle);
						M &&
							(k = { searchStringSeededFrom: { cell: M, range: P.selection } });
					}
					return T.show(P?.searchString, k), !0;
				}),
					m.$Hfc.addImplementation(100, (y, $, v) => {
						const S = y.get(b.$IY),
							I = (0, g.$eJb)(S.activeEditorPane);
						if (!I || !$.hasModel()) return !1;
						const T = I.getContribution(c.$TFc.id),
							P = l($, {
								forceRevealReplace: !1,
								seedSearchStringFromSelection:
									$.getOption(C.EditorOption.find)
										.seedSearchStringFromSelection !== "never"
										? "single"
										: "none",
								seedSearchStringFromNonEmptySelection:
									$.getOption(C.EditorOption.find)
										.seedSearchStringFromSelection === "selection",
								seedSearchStringFromGlobalClipboard: $.getOption(
									C.EditorOption.find,
								).globalFindClipboard,
								shouldFocus: m.FindStartFocusAction.FocusFindInput,
								shouldAnimate: !0,
								updateSearchScope: !1,
								loop: $.getOption(C.EditorOption.find).loop,
							});
						return T ? (T.replace(P?.searchString), !0) : !1;
					});
			},
		),
		define(
			de[3495],
			he([1, 0, 4, 11, 10, 238, 70]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$YFc = void 0);
				const d = "notebook.toggleCellToolbarPosition";
				class m extends i.$3X {
					constructor() {
						super({
							id: d,
							title: (0, t.localize2)(7777, "Toggle Cell Toolbar Position"),
							menu: [{ id: i.$XX.NotebookCellTitle, group: "View", order: 1 }],
							category: E.$p5b,
							f1: !1,
						});
					}
					async run(u, a) {
						const h = a && a.ui ? a.notebookEditor : void 0;
						if (h && h.hasModel()) {
							const c = h.textModel.viewType,
								n = u.get(w.$gj),
								g = n.getValue(C.$56.cellToolbarLocation),
								p = this.togglePosition(c, g);
							await n.updateValue(C.$56.cellToolbarLocation, p);
						}
					}
					togglePosition(u, a) {
						if (typeof a == "string")
							if (["left", "right", "hidden"].indexOf(a) >= 0) {
								const h = a === "right" ? "left" : "right",
									c = { default: a };
								return (c[u] = h), c;
							} else {
								const h = { default: "right" };
								return (h[u] = "left"), h;
							}
						else {
							const c =
									(a[u] ?? a.default ?? "right") === "right" ? "left" : "right",
								n = { ...a };
							return (n[u] = c), n;
						}
					}
				}
				(e.$YFc = m), (0, i.$4X)(m);
			},
		),
		define(
			de[1845],
			he([1, 0, 4, 11, 121, 41, 238, 176, 284, 34, 1837, 18, 108, 70, 8]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Y3b = e.$X3b = void 0),
					(m = mt(m)),
					(e.$X3b = "notebook.cellOutput.copy"),
					(0, i.$4X)(
						class extends i.$3X {
							constructor() {
								super({
									id: "notebook.cellOuput.showEmptyOutputs",
									title: (0, t.localize)(7828, null),
									menu: {
										id: i.$XX.NotebookOutputToolbar,
										when: n.$Kj.and(d.$KJb, d.$MJb),
									},
									f1: !1,
									category: C.$p5b,
								});
							}
							run(o, f) {
								const b = f.cell;
								if (b && b.cellKind === c.CellKind.Code)
									for (let s = 1; s < b.outputsViewModels.length; s++)
										b.outputsViewModels[s].visible.get() ||
											(b.outputsViewModels[s].setVisible(!0, !0),
											b.updateOutputHeight(s, 1, "command"));
							}
						},
					),
					(0, i.$4X)(
						class extends i.$3X {
							constructor() {
								super({
									id: e.$X3b,
									title: (0, t.localize)(7829, null),
									menu: { id: i.$XX.NotebookOutputToolbar, when: d.$KJb },
									category: C.$p5b,
									icon: m.$rOb,
								});
							}
							a(o, f) {
								return f && "notebookEditor" in f
									? f.notebookEditor
									: (0, h.$eJb)(o.activeEditorPane);
							}
							async run(o, f) {
								const b = this.a(o.get(a.$IY), f);
								if (!b) return;
								let s;
								if (
									(f && "outputId" in f && typeof f.outputId == "string"
										? (s = g(f.outputId, b))
										: f && "outputViewModel" in f && (s = f.outputViewModel),
									!s)
								) {
									const y = b.getActiveCell();
									if (!y) return;
									y.focusedOutputId !== void 0
										? (s = y.outputsViewModels.find(
												($) => $.model.outputId === y.focusedOutputId,
											))
										: (s = y.outputsViewModels.find(
												($) => $.pickedMimeType?.isTrusted,
											));
								}
								if (!s) return;
								const l = s.pickedMimeType?.mimeType;
								if (l?.startsWith("image/")) {
									const y = {
										skipReveal: !0,
										outputId: s.model.outputId,
										altOutputId: s.model.alternativeOutputId,
									};
									await b.focusNotebookCell(s.cellViewModel, "output", y),
										b.copyOutputImage(s);
								} else {
									const y = o.get(w.$Vxb),
										$ = o.get(r.$ik);
									(0, u.$V3b)(l, s, y, $);
								}
							}
						},
					);
				function g(p, o) {
					const f = o.getViewModel();
					if (f) {
						const b = f.viewCells.filter((s) => s.cellKind === c.CellKind.Code);
						for (const s of b) {
							const l = s.outputsViewModels.find(
								(y) =>
									y.model.outputId === p || y.model.alternativeOutputId === p,
							);
							if (l) return l;
						}
					}
				}
				(e.$Y3b = "notebook.cellOutput.openInTextEditor"),
					(0, i.$4X)(
						class extends i.$3X {
							constructor() {
								super({
									id: e.$Y3b,
									title: (0, t.localize)(7830, null),
									f1: !1,
									category: C.$p5b,
									icon: m.$rOb,
								});
							}
							a(o, f) {
								return f && "notebookEditor" in f
									? f.notebookEditor
									: (0, h.$eJb)(o.activeEditorPane);
							}
							async run(o, f) {
								const b = this.a(o.get(a.$IY), f);
								if (!b) return;
								let s;
								f && "outputId" in f && typeof f.outputId == "string"
									? (s = g(f.outputId, b))
									: f && "outputViewModel" in f && (s = f.outputViewModel);
								const l = o.get(E.$7rb);
								s?.model.outputId &&
									b.textModel?.uri &&
									l.open(
										c.CellUri.generateCellOutputUri(
											b.textModel.uri,
											s.model.outputId,
										),
									);
							}
						},
					);
			},
		),
		define(
			de[1031],
			he([1, 0, 3, 176, 108, 1841, 70, 330, 11, 8, 179, 27, 43, 18, 238, 4]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$83b = void 0);
				class p extends t.$1c {
					static {
						this.id = "workbench.notebook.foldingController";
					}
					constructor(l) {
						super(),
							(this.c = l),
							(this.a = null),
							(this.b = this.D(new t.$Zc())),
							this.D(
								this.c.onMouseUp((y) => {
									this.onMouseUp(y);
								}),
							),
							this.D(
								this.c.onDidChangeModel(() => {
									this.b.clear(),
										this.c.hasModel() &&
											(this.b.add(
												this.c.onDidChangeCellState((y) => {
													y.source.editStateChanged &&
														y.cell.cellKind === C.CellKind.Markup &&
														this.a?.recompute();
												}),
											),
											(this.a = new E.$3Nb()),
											this.b.add(this.a),
											this.a.attachViewModel(this.c.getViewModel()),
											this.b.add(
												this.a.onDidFoldingRegionChanged(() => {
													this.f();
												}),
											));
								}),
							);
					}
					saveViewState() {
						return this.a?.getMemento() || [];
					}
					restoreViewState(l) {
						this.a?.applyMemento(l || []), this.f();
					}
					setFoldingStateDown(l, y, $) {
						const v = y === w.CellFoldingState.Collapsed,
							S = this.a.getRegionAtLine(l + 1),
							I = [];
						if (S && (S.isCollapsed !== v && I.push(S), $ > 1)) {
							const T = this.a.getRegionsInside(
								S,
								(P, k) => P.isCollapsed !== v && k < $,
							);
							I.push(...T);
						}
						I.forEach((T) =>
							this.a.setCollapsed(
								T.regionIndex,
								y === w.CellFoldingState.Collapsed,
							),
						),
							this.f();
					}
					setFoldingStateUp(l, y, $) {
						if (!this.a) return;
						this.a
							.getAllRegionsAtLine(
								l + 1,
								(S, I) =>
									S.isCollapsed !== (y === w.CellFoldingState.Collapsed) &&
									I <= $,
							)
							.forEach((S) =>
								this.a.setCollapsed(
									S.regionIndex,
									y === w.CellFoldingState.Collapsed,
								),
							),
							this.f();
					}
					f() {
						if (!this.a || !this.c.hasModel()) return;
						const l = this.c.getViewModel();
						l.updateFoldingRanges(this.a.regions);
						const y = l.getHiddenRanges();
						this.c.setHiddenAreas(y);
					}
					onMouseUp(l) {
						if (!l.event.target || !this.c.hasModel()) return;
						const y = this.c.getViewModel(),
							$ = l.event.target;
						if (
							$.classList.contains("codicon-notebook-collapsed") ||
							$.classList.contains("codicon-notebook-expanded")
						) {
							if (
								!$.parentElement.classList.contains(
									"notebook-folding-indicator",
								)
							)
								return;
							const S = l.target,
								I = y.getCellIndex(S),
								T = y.getFoldingState(I);
							if (T === w.CellFoldingState.None) return;
							this.setFoldingStateUp(
								I,
								T === w.CellFoldingState.Collapsed
									? w.CellFoldingState.Expanded
									: w.CellFoldingState.Collapsed,
								1,
							),
								this.c.focusElement(S);
						}
					}
				}
				(e.$83b = p), (0, d.$PKb)(p.id, p);
				const o = (0, g.localize)(7912, null),
					f = (0, g.localize2)(7913, "Unfold Cell"),
					b = {
						args: [
							{
								isOptional: !0,
								name: "index",
								description: "The cell index",
								schema: {
									type: "object",
									required: ["index", "direction"],
									properties: {
										index: { type: "number" },
										direction: {
											type: "string",
											enum: ["up", "down"],
											default: "down",
										},
										levels: { type: "number", default: 1 },
									},
								},
							},
						],
					};
				(0, m.$4X)(
					class extends m.$3X {
						constructor() {
							super({
								id: "notebook.fold",
								title: (0, g.localize2)(7914, "Fold Cell"),
								category: n.$p5b,
								keybinding: {
									when: r.$Kj.and(i.$pJb, r.$Kj.not(u.$aMb)),
									primary:
										a.KeyMod.CtrlCmd | a.KeyMod.Shift | a.KeyCode.BracketLeft,
									mac: {
										primary:
											a.KeyMod.CtrlCmd | a.KeyMod.Alt | a.KeyCode.BracketLeft,
										secondary: [a.KeyCode.LeftArrow],
									},
									secondary: [a.KeyCode.LeftArrow],
									weight: h.KeybindingWeight.WorkbenchContrib,
								},
								metadata: { description: o, args: b.args },
								precondition: i.$mJb,
								f1: !0,
							});
						}
						async run(s, l) {
							const y = s.get(c.$IY),
								$ = (0, w.$eJb)(y.activeEditorPane);
							if (!$ || !$.hasModel()) return;
							const v = (l && l.levels) || 1,
								S = l && l.direction === "up" ? "up" : "down";
							let I;
							if (l) I = l.index;
							else {
								const P = $.getActiveCell();
								if (!P) return;
								I = $.getCellIndex(P);
							}
							const T = $.getContribution(p.id);
							if (I !== void 0) {
								if (
									(I < 0 || I >= $.getLength() ? void 0 : $.cellAt(I))
										?.cellKind === C.CellKind.Code &&
									S === "down"
								)
									return;
								S === "up"
									? T.setFoldingStateUp(I, w.CellFoldingState.Collapsed, v)
									: T.setFoldingStateDown(I, w.CellFoldingState.Collapsed, v);
								const k = $.getViewModel().getNearestVisibleCellIndexUpwards(I);
								$.focusElement($.cellAt(k));
							}
						}
					},
				),
					(0, m.$4X)(
						class extends m.$3X {
							constructor() {
								super({
									id: "notebook.unfold",
									title: f,
									category: n.$p5b,
									keybinding: {
										when: r.$Kj.and(i.$pJb, r.$Kj.not(u.$aMb)),
										primary:
											a.KeyMod.CtrlCmd |
											a.KeyMod.Shift |
											a.KeyCode.BracketRight,
										mac: {
											primary:
												a.KeyMod.CtrlCmd |
												a.KeyMod.Alt |
												a.KeyCode.BracketRight,
											secondary: [a.KeyCode.RightArrow],
										},
										secondary: [a.KeyCode.RightArrow],
										weight: h.KeybindingWeight.WorkbenchContrib,
									},
									metadata: { description: f, args: b.args },
									precondition: i.$mJb,
									f1: !0,
								});
							}
							async run(s, l) {
								const y = s.get(c.$IY),
									$ = (0, w.$eJb)(y.activeEditorPane);
								if (!$) return;
								const v = (l && l.levels) || 1,
									S = l && l.direction === "up" ? "up" : "down";
								let I;
								if (l) I = l.index;
								else {
									const P = $.getActiveCell();
									if (!P) return;
									I = $.getCellIndex(P);
								}
								const T = $.getContribution(p.id);
								I !== void 0 &&
									(S === "up"
										? T.setFoldingStateUp(I, w.CellFoldingState.Expanded, v)
										: T.setFoldingStateDown(I, w.CellFoldingState.Expanded, v));
							}
						},
					);
			},
		),
		define(
			de[1846],
			he([1, 0, 14, 27, 61, 4, 11, 8, 179, 43, 624, 238, 176, 70, 688]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$uFc = void 0),
					(e.$tFc = $);
				const g = "notebook.cell.insertCodeCellAbove",
					p = "notebook.cell.insertCodeCellBelow",
					o = "notebook.cell.insertCodeCellAboveAndFocusContainer",
					f = "notebook.cell.insertCodeCellBelowAndFocusContainer",
					b = "notebook.cell.insertCodeCellAtTop",
					s = "notebook.cell.insertMarkdownCellAbove",
					l = "notebook.cell.insertMarkdownCellBelow",
					y = "notebook.cell.insertMarkdownCellAtTop";
				function $(S, I, T, P, k) {
					let L = null;
					I.ui && I.notebookEditor.focus();
					const D = S.get(w.$nM);
					if (I.cell) {
						const M = I.notebookEditor.getCellIndex(I.cell);
						L = (0, u.$M5b)(D, I.notebookEditor, M, T, P, void 0, !0);
					} else {
						const M = I.notebookEditor.getFocus(),
							N = Math.max(M.end - 1, 0);
						L = (0, u.$M5b)(D, I.notebookEditor, N, T, P, void 0, !0);
					}
					return L;
				}
				class v extends a.$x5b {
					constructor(I, T, P, k) {
						super(I), (this.a = T), (this.b = P), (this.d = k);
					}
					async runWithContext(I, T) {
						const P = await $(I, T, this.a, this.b, this.d);
						P &&
							(await T.notebookEditor.focusNotebookCell(
								P,
								this.d ? "editor" : "container",
							));
					}
				}
				(e.$uFc = v),
					(0, C.$4X)(
						class extends v {
							constructor() {
								super(
									{
										id: g,
										title: (0, E.localize)(7915, null),
										keybinding: {
											primary:
												i.KeyMod.CtrlCmd | i.KeyMod.Shift | i.KeyCode.Enter,
											when: d.$Kj.and(h.$qJb, m.$bMb.toNegated()),
											weight: r.KeybindingWeight.WorkbenchContrib,
										},
										menu: { id: C.$XX.NotebookCellInsert, order: 0 },
									},
									c.CellKind.Code,
									"above",
									!0,
								);
							}
						},
					),
					(0, C.$4X)(
						class extends v {
							constructor() {
								super(
									{ id: o, title: (0, E.localize)(7916, null) },
									c.CellKind.Code,
									"above",
									!1,
								);
							}
						},
					),
					(0, C.$4X)(
						class extends v {
							constructor() {
								super(
									{
										id: p,
										title: (0, E.localize)(7917, null),
										keybinding: {
											primary: i.KeyMod.CtrlCmd | i.KeyCode.Enter,
											when: d.$Kj.and(
												h.$qJb,
												m.$bMb.toNegated(),
												n.$r1b.isEqualTo(""),
											),
											weight: r.KeybindingWeight.WorkbenchContrib,
										},
										menu: { id: C.$XX.NotebookCellInsert, order: 1 },
									},
									c.CellKind.Code,
									"below",
									!0,
								);
							}
						},
					),
					(0, C.$4X)(
						class extends v {
							constructor() {
								super(
									{ id: f, title: (0, E.localize)(7918, null) },
									c.CellKind.Code,
									"below",
									!1,
								);
							}
						},
					),
					(0, C.$4X)(
						class extends v {
							constructor() {
								super(
									{
										id: s,
										title: (0, E.localize)(7919, null),
										menu: { id: C.$XX.NotebookCellInsert, order: 2 },
									},
									c.CellKind.Markup,
									"above",
									!0,
								);
							}
						},
					),
					(0, C.$4X)(
						class extends v {
							constructor() {
								super(
									{
										id: l,
										title: (0, E.localize)(7920, null),
										menu: { id: C.$XX.NotebookCellInsert, order: 3 },
									},
									c.CellKind.Markup,
									"below",
									!0,
								);
							}
						},
					),
					(0, C.$4X)(
						class extends a.$x5b {
							constructor() {
								super({ id: b, title: (0, E.localize)(7921, null), f1: !1 });
							}
							async run(I, T) {
								(T = T ?? this.getEditorContextFromArgsOrActive(I)),
									T && this.runWithContext(I, T);
							}
							async runWithContext(I, T) {
								const P = I.get(w.$nM),
									k = (0, u.$M5b)(
										P,
										T.notebookEditor,
										0,
										c.CellKind.Code,
										"above",
										void 0,
										!0,
									);
								k && (await T.notebookEditor.focusNotebookCell(k, "editor"));
							}
						},
					),
					(0, C.$4X)(
						class extends a.$x5b {
							constructor() {
								super({ id: y, title: (0, E.localize)(7922, null), f1: !1 });
							}
							async run(I, T) {
								(T = T ?? this.getEditorContextFromArgsOrActive(I)),
									T && this.runWithContext(I, T);
							}
							async runWithContext(I, T) {
								const P = I.get(w.$nM),
									k = (0, u.$M5b)(
										P,
										T.notebookEditor,
										0,
										c.CellKind.Markup,
										"above",
										void 0,
										!0,
									);
								k && (await T.notebookEditor.focusNotebookCell(k, "editor"));
							}
						},
					),
					C.$ZX.appendMenuItem(C.$XX.NotebookCellBetween, {
						command: {
							id: p,
							title: "$(add) " + (0, E.localize)(7923, null),
							tooltip: (0, E.localize)(7924, null),
						},
						order: 0,
						group: "inline",
						when: d.$Kj.and(
							h.$tJb.isEqualTo(!0),
							d.$Kj.notEquals(
								"config.notebook.experimental.insertToolbarAlignment",
								"left",
							),
						),
					}),
					C.$ZX.appendMenuItem(C.$XX.NotebookCellBetween, {
						command: {
							id: p,
							title: (0, E.localize)(7925, null),
							icon: t.$ak.add,
							tooltip: (0, E.localize)(7926, null),
						},
						order: 0,
						group: "inline",
						when: d.$Kj.and(
							h.$tJb.isEqualTo(!0),
							d.$Kj.equals(
								"config.notebook.experimental.insertToolbarAlignment",
								"left",
							),
						),
					}),
					C.$ZX.appendMenuItem(C.$XX.NotebookToolbar, {
						command: {
							id: p,
							icon: t.$ak.add,
							title: (0, E.localize)(7927, null),
							tooltip: (0, E.localize)(7928, null),
						},
						order: -5,
						group: "navigation/add",
						when: d.$Kj.and(
							h.$tJb.isEqualTo(!0),
							d.$Kj.notEquals(
								"config.notebook.insertToolbarLocation",
								"betweenCells",
							),
							d.$Kj.notEquals(
								"config.notebook.insertToolbarLocation",
								"hidden",
							),
						),
					}),
					C.$ZX.appendMenuItem(C.$XX.NotebookCellListTop, {
						command: {
							id: b,
							title: "$(add) " + (0, E.localize)(7929, null),
							tooltip: (0, E.localize)(7930, null),
						},
						order: 0,
						group: "inline",
						when: d.$Kj.and(
							h.$tJb.isEqualTo(!0),
							d.$Kj.notEquals(
								"config.notebook.experimental.insertToolbarAlignment",
								"left",
							),
						),
					}),
					C.$ZX.appendMenuItem(C.$XX.NotebookCellListTop, {
						command: {
							id: b,
							title: (0, E.localize)(7931, null),
							icon: t.$ak.add,
							tooltip: (0, E.localize)(7932, null),
						},
						order: 0,
						group: "inline",
						when: d.$Kj.and(
							h.$tJb.isEqualTo(!0),
							d.$Kj.equals(
								"config.notebook.experimental.insertToolbarAlignment",
								"left",
							),
						),
					}),
					C.$ZX.appendMenuItem(C.$XX.NotebookCellBetween, {
						command: {
							id: l,
							title: "$(add) " + (0, E.localize)(7933, null),
							tooltip: (0, E.localize)(7934, null),
						},
						order: 1,
						group: "inline",
						when: d.$Kj.and(
							h.$tJb.isEqualTo(!0),
							d.$Kj.notEquals(
								"config.notebook.experimental.insertToolbarAlignment",
								"left",
							),
						),
					}),
					C.$ZX.appendMenuItem(C.$XX.NotebookToolbar, {
						command: {
							id: l,
							icon: t.$ak.add,
							title: (0, E.localize)(7935, null),
							tooltip: (0, E.localize)(7936, null),
						},
						order: -5,
						group: "navigation/add",
						when: d.$Kj.and(
							h.$tJb.isEqualTo(!0),
							d.$Kj.notEquals(
								"config.notebook.insertToolbarLocation",
								"betweenCells",
							),
							d.$Kj.notEquals(
								"config.notebook.insertToolbarLocation",
								"hidden",
							),
							d.$Kj.notEquals(`config.${c.$56.globalToolbarShowLabel}`, !1),
							d.$Kj.notEquals(
								`config.${c.$56.globalToolbarShowLabel}`,
								"never",
							),
						),
					}),
					C.$ZX.appendMenuItem(C.$XX.NotebookCellListTop, {
						command: {
							id: y,
							title: "$(add) " + (0, E.localize)(7937, null),
							tooltip: (0, E.localize)(7938, null),
						},
						order: 1,
						group: "inline",
						when: d.$Kj.and(
							h.$tJb.isEqualTo(!0),
							d.$Kj.notEquals(
								"config.notebook.experimental.insertToolbarAlignment",
								"left",
							),
						),
					});
			},
		),
		define(
			de[706],
			he([1, 0, 6, 136, 585, 3, 309, 1253, 3478, 1254, 556, 108]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.OutputComparison =
						e.$SEc =
						e.$REc =
						e.$QEc =
						e.$PEc =
						e.$OEc =
						e.$NEc =
						e.PropertyFoldingState =
							void 0),
					(e.$TEc = b),
					(e.$UEc = l),
					(e.$VEc = y),
					(e.$WEc = $);
				var h;
				(function (v) {
					(v[(v.Expanded = 0)] = "Expanded"),
						(v[(v.Collapsed = 1)] = "Collapsed");
				})(h || (e.PropertyFoldingState = h = {})),
					(e.$NEc = 1440);
				class c extends E.$1c {
					constructor(S, I, T) {
						super(),
							(this.mainDocumentTextModel = S),
							(this.editorEventDispatcher = I),
							(this.initData = T),
							(this.c = this.D(new t.$re())),
							(this.onDidLayoutChange = this.c.event),
							this.D(
								this.editorEventDispatcher.onDidChangeLayout((P) =>
									this.c.fire({ outerWidth: !0 }),
								),
							);
					}
				}
				e.$OEc = c;
				class n extends c {
					constructor(S, I, T) {
						super(S, I, T),
							(this.type = "placeholder"),
							(this.hiddenCells = []),
							(this.f = this.D(new t.$re())),
							(this.onUnfoldHiddenCells = this.f.event);
					}
					get totalHeight() {
						return 24 + 2 * u.$yEc;
					}
					getHeight(S) {
						return this.totalHeight;
					}
					layoutChange() {}
					showHiddenCells() {
						this.f.fire();
					}
				}
				e.$PEc = n;
				class g extends c {
					hideUnchangedCells() {
						this.h.fire();
					}
					set rawOutputHeight(S) {
						this.t({ rawOutputHeight: Math.min(e.$NEc, S) });
					}
					get rawOutputHeight() {
						throw new Error("Use Cell.layoutInfo.rawOutputHeight");
					}
					set outputStatusHeight(S) {
						this.t({ outputStatusHeight: S });
					}
					get outputStatusHeight() {
						throw new Error("Use Cell.layoutInfo.outputStatusHeight");
					}
					set outputMetadataHeight(S) {
						this.t({ outputMetadataHeight: S });
					}
					get outputMetadataHeight() {
						throw new Error("Use Cell.layoutInfo.outputStatusHeight");
					}
					set editorHeight(S) {
						this.t({ editorHeight: S });
					}
					get editorHeight() {
						throw new Error("Use Cell.layoutInfo.editorHeight");
					}
					set editorMargin(S) {
						this.t({ editorMargin: S });
					}
					get editorMargin() {
						throw new Error("Use Cell.layoutInfo.editorMargin");
					}
					set metadataStatusHeight(S) {
						this.t({ metadataStatusHeight: S });
					}
					get metadataStatusHeight() {
						throw new Error("Use Cell.layoutInfo.outputStatusHeight");
					}
					set metadataHeight(S) {
						this.t({ metadataHeight: S });
					}
					get metadataHeight() {
						throw new Error("Use Cell.layoutInfo.metadataHeight");
					}
					set renderOutput(S) {
						(this.m = S),
							this.t({ recomputeOutput: !0 }),
							this.f.fire({ renderOutput: this.m });
					}
					get renderOutput() {
						return this.m;
					}
					get layoutInfo() {
						return this.g;
					}
					get totalHeight() {
						return this.layoutInfo.totalHeight;
					}
					constructor(S, I, T, P, k, L, D) {
						super(S, k, L),
							(this.type = P),
							(this.f = this.D(new t.$re())),
							(this.onDidStateChange = this.f.event),
							(this.h = this.D(new t.$re())),
							(this.onHideUnchangedCells = this.h.event),
							(this.m = !0),
							(this.n = null),
							(this.q = null),
							(this.r = null),
							(this.original = I ? this.D(new m.$JEc(I, D)) : void 0),
							(this.modified = T ? this.D(new m.$JEc(T, D)) : void 0);
						const M = this.s(L.fontInfo),
							N = 25;
						(this.g = {
							width: 0,
							editorHeight: M,
							editorMargin: 0,
							metadataHeight: 0,
							cellStatusHeight: N,
							metadataStatusHeight: 25,
							rawOutputHeight: 0,
							outputTotalHeight: 0,
							outputStatusHeight: 25,
							outputMetadataHeight: 0,
							bodyMargin: 32,
							totalHeight: 82 + N + M,
							layoutState: a.CellLayoutState.Uninitialized,
						}),
							(this.cellFoldingState =
								T?.getTextBufferHash() !== I?.getTextBufferHash()
									? h.Expanded
									: h.Collapsed),
							(this.metadataFoldingState = h.Collapsed),
							(this.outputFoldingState = h.Collapsed),
							this.D(
								this.editorEventDispatcher.onDidChangeLayout((A) =>
									this.c.fire({ outerWidth: !0 }),
								),
							);
					}
					layoutChange() {
						this.t({ recomputeOutput: !0 });
					}
					s(S) {
						const I = S?.lineHeight ?? 17;
						switch (this.type) {
							case "unchanged":
							case "insert":
								return (
									this.modified.textModel.textBuffer.getLineCount() * I +
									d.$vEc.top +
									d.$vEc.bottom
								);
							case "delete":
							case "modified":
								return (
									this.original.textModel.textBuffer.getLineCount() * I +
									d.$vEc.top +
									d.$vEc.bottom
								);
						}
					}
					t(S) {
						const I = S.width !== void 0 ? S.width : this.g.width,
							T =
								S.editorHeight !== void 0
									? S.editorHeight
									: this.g.editorHeight,
							P =
								S.editorMargin !== void 0
									? S.editorMargin
									: this.g.editorMargin,
							k =
								S.metadataHeight !== void 0
									? S.metadataHeight
									: this.g.metadataHeight,
							L =
								S.cellStatusHeight !== void 0
									? S.cellStatusHeight
									: this.g.cellStatusHeight,
							D =
								S.metadataStatusHeight !== void 0
									? S.metadataStatusHeight
									: this.g.metadataStatusHeight,
							M =
								S.rawOutputHeight !== void 0
									? S.rawOutputHeight
									: this.g.rawOutputHeight,
							N =
								S.outputStatusHeight !== void 0
									? S.outputStatusHeight
									: this.g.outputStatusHeight,
							A = S.bodyMargin !== void 0 ? S.bodyMargin : this.g.bodyMargin,
							R =
								S.outputMetadataHeight !== void 0
									? S.outputMetadataHeight
									: this.g.outputMetadataHeight,
							O =
								S.recomputeOutput ||
								S.rawOutputHeight !== void 0 ||
								S.outputMetadataHeight !== void 0
									? this.y(M, R)
									: this.g.outputTotalHeight,
							B = T + P + L + k + D + O + N + A,
							U = {
								width: I,
								editorHeight: T,
								editorMargin: P,
								metadataHeight: k,
								cellStatusHeight: L,
								metadataStatusHeight: D,
								outputTotalHeight: O,
								outputStatusHeight: N,
								bodyMargin: A,
								rawOutputHeight: M,
								outputMetadataHeight: R,
								totalHeight: B,
								layoutState: a.CellLayoutState.Measured,
							};
						let z = !1;
						const F = {};
						U.width !== this.g.width && ((F.width = !0), (z = !0)),
							U.editorHeight !== this.g.editorHeight &&
								((F.editorHeight = !0), (z = !0)),
							U.editorMargin !== this.g.editorMargin &&
								((F.editorMargin = !0), (z = !0)),
							U.metadataHeight !== this.g.metadataHeight &&
								((F.metadataHeight = !0), (z = !0)),
							U.cellStatusHeight !== this.g.cellStatusHeight &&
								((F.cellStatusHeight = !0), (z = !0)),
							U.metadataStatusHeight !== this.g.metadataStatusHeight &&
								((F.metadataStatusHeight = !0), (z = !0)),
							U.outputTotalHeight !== this.g.outputTotalHeight &&
								((F.outputTotalHeight = !0), (z = !0)),
							U.outputStatusHeight !== this.g.outputStatusHeight &&
								((F.outputStatusHeight = !0), (z = !0)),
							U.bodyMargin !== this.g.bodyMargin &&
								((F.bodyMargin = !0), (z = !0)),
							U.outputMetadataHeight !== this.g.outputMetadataHeight &&
								((F.outputMetadataHeight = !0), (z = !0)),
							U.totalHeight !== this.g.totalHeight &&
								((F.totalHeight = !0), (z = !0)),
							z && ((this.g = U), this.z(F));
					}
					getHeight(S) {
						if (this.g.layoutState === a.CellLayoutState.Uninitialized) {
							const I = this.w(S);
							return this.u(I);
						} else return this.g.totalHeight;
					}
					u(S) {
						return (
							S +
							this.g.editorMargin +
							this.g.metadataHeight +
							this.g.cellStatusHeight +
							this.g.metadataStatusHeight +
							this.g.outputTotalHeight +
							this.g.outputStatusHeight +
							this.g.outputMetadataHeight +
							this.g.bodyMargin
						);
					}
					w(S = 20) {
						return (
							Math.max(
								this.original?.textModel.textBuffer.getLineCount() ?? 1,
								this.modified?.textModel.textBuffer.getLineCount() ?? 1,
							) *
								S +
							24 +
							12 +
							0
						);
					}
					y(S, I) {
						return this.outputFoldingState === h.Collapsed
							? 0
							: this.renderOutput
								? this.isOutputEmpty()
									? 24
									: this.getRichOutputTotalHeight() + I
								: S;
					}
					z(S) {
						this.c.fire(S),
							this.editorEventDispatcher.emit([
								{
									type: r.NotebookDiffViewEventType.CellLayoutChanged,
									source: this.g,
								},
							]);
					}
					getComputedCellContainerWidth(S, I, T) {
						return T
							? S.width -
									2 * u.$yEc +
									(I ? C.$3yb.ENTIRE_DIFF_OVERVIEW_WIDTH : 0) -
									2
							: (S.width -
									2 * u.$yEc +
									(I ? C.$3yb.ENTIRE_DIFF_OVERVIEW_WIDTH : 0)) /
									2 -
									18 -
									2;
					}
					getOutputEditorViewState() {
						return this.q;
					}
					saveOutputEditorViewState(S) {
						this.q = S;
					}
					getMetadataEditorViewState() {
						return this.r;
					}
					saveMetadataEditorViewState(S) {
						this.r = S;
					}
					getSourceEditorViewState() {
						return this.n;
					}
					saveSpirceEditorViewState(S) {
						this.n = S;
					}
				}
				e.$QEc = g;
				class p extends g {
					get originalDocument() {
						return this.otherDocumentTextModel;
					}
					get modifiedDocument() {
						return this.mainDocumentTextModel;
					}
					constructor(S, I, T, P, k, L, D, M) {
						super(S, T, P, k, L, D, M),
							(this.otherDocumentTextModel = I),
							(this.type = k),
							(this.cellFoldingState =
								this.modified.textModel.getValue() !==
								this.original.textModel.getValue()
									? h.Expanded
									: h.Collapsed),
							(this.metadataFoldingState = h.Collapsed),
							(this.outputFoldingState = h.Collapsed),
							this.checkMetadataIfModified() &&
								(this.metadataFoldingState = h.Expanded),
							this.checkIfOutputsModified() &&
								(this.outputFoldingState = h.Expanded),
							this.D(
								this.original.onDidChangeOutputLayout(() => {
									this.t({ recomputeOutput: !0 });
								}),
							),
							this.D(
								this.modified.onDidChangeOutputLayout(() => {
									this.t({ recomputeOutput: !0 });
								}),
							),
							this.D(
								this.modified.textModel.onDidChangeContent(() => {
									if (S.transientOptions.cellContentMetadata) {
										const N = [
												...Object.keys(S.transientOptions.cellContentMetadata),
											],
											A = Object.assign({}, this.modified.metadata),
											R = this.original.metadata;
										for (const O of N) O in R && (A[O] = R[O]);
										this.modified.textModel.metadata = A;
									}
								}),
							);
					}
					checkIfInputModified() {
						return this.original.textModel.getTextBufferHash() ===
							this.modified.textModel.getTextBufferHash()
							? !1
							: { reason: "Cell content has changed" };
					}
					checkIfOutputsModified() {
						if (this.mainDocumentTextModel.transientOptions.transientOutputs)
							return !1;
						const S = s(
							this.original?.outputs ?? [],
							this.modified?.outputs ?? [],
						);
						return S === f.Unchanged
							? !1
							: {
									reason:
										S === f.Metadata ? "Output metadata is changed" : void 0,
									kind: S,
								};
					}
					checkMetadataIfModified() {
						return (0, i.$Aj)(
							l(
								this.mainDocumentTextModel,
								this.original?.metadata || {},
								this.original?.language,
							),
						) !==
							(0, i.$Aj)(
								l(
									this.mainDocumentTextModel,
									this.modified?.metadata ?? {},
									this.modified?.language,
								),
							)
							? { reason: void 0 }
							: !1;
					}
					updateOutputHeight(S, I, T) {
						S === u.DiffSide.Original
							? this.original.updateOutputHeight(I, T)
							: this.modified.updateOutputHeight(I, T);
					}
					getOutputOffsetInContainer(S, I) {
						return S === u.DiffSide.Original
							? this.original.getOutputOffset(I)
							: this.modified.getOutputOffset(I);
					}
					getOutputOffsetInCell(S, I) {
						const T = this.getOutputOffsetInContainer(S, I);
						return (
							this.g.editorHeight +
							this.g.editorMargin +
							this.g.metadataHeight +
							this.g.cellStatusHeight +
							this.g.metadataStatusHeight +
							this.g.outputStatusHeight +
							this.g.bodyMargin / 2 +
							T
						);
					}
					isOutputEmpty() {
						return this.mainDocumentTextModel.transientOptions.transientOutputs
							? !0
							: this.checkIfOutputsModified()
								? !1
								: (this.original?.outputs || []).length === 0;
					}
					getRichOutputTotalHeight() {
						return Math.max(
							this.original.getOutputTotalHeight(),
							this.modified.getOutputTotalHeight(),
						);
					}
					getNestedCellViewModel(S) {
						return S === u.DiffSide.Original ? this.original : this.modified;
					}
					getCellByUri(S) {
						return S.toString() === this.original.uri.toString()
							? this.original
							: this.modified;
					}
				}
				e.$REc = p;
				class o extends g {
					get cellViewModel() {
						return this.type === "insert" ? this.modified : this.original;
					}
					get originalDocument() {
						return this.type === "insert"
							? this.otherDocumentTextModel
							: this.mainDocumentTextModel;
					}
					get modifiedDocument() {
						return this.type === "insert"
							? this.mainDocumentTextModel
							: this.otherDocumentTextModel;
					}
					constructor(S, I, T, P, k, L, D, M) {
						super(S, T, P, k, L, D, M),
							(this.otherDocumentTextModel = I),
							(this.type = k),
							this.D(
								this.cellViewModel.onDidChangeOutputLayout(() => {
									this.t({ recomputeOutput: !0 });
								}),
							);
					}
					checkIfInputModified() {
						return { reason: "Cell content has changed" };
					}
					getNestedCellViewModel(S) {
						return this.type === "insert" ? this.modified : this.original;
					}
					checkIfOutputsModified() {
						return !1;
					}
					checkMetadataIfModified() {
						return !1;
					}
					updateOutputHeight(S, I, T) {
						this.cellViewModel?.updateOutputHeight(I, T);
					}
					getOutputOffsetInContainer(S, I) {
						return this.cellViewModel.getOutputOffset(I);
					}
					getOutputOffsetInCell(S, I) {
						const T = this.cellViewModel.getOutputOffset(I);
						return (
							this.g.editorHeight +
							this.g.editorMargin +
							this.g.metadataHeight +
							this.g.cellStatusHeight +
							this.g.metadataStatusHeight +
							this.g.outputStatusHeight +
							this.g.bodyMargin / 2 +
							T
						);
					}
					isOutputEmpty() {
						return this.mainDocumentTextModel.transientOptions.transientOutputs
							? !0
							: (this.original?.outputs || this.modified?.outputs || [])
									.length === 0;
					}
					getRichOutputTotalHeight() {
						return this.cellViewModel?.getOutputTotalHeight() ?? 0;
					}
					getCellByUri(S) {
						return this.cellViewModel;
					}
				}
				e.$SEc = o;
				var f;
				(function (v) {
					(v[(v.Unchanged = 0)] = "Unchanged"),
						(v[(v.Metadata = 1)] = "Metadata"),
						(v[(v.Other = 2)] = "Other");
				})(f || (e.OutputComparison = f = {}));
				function b(v, S) {
					if ((0, i.$Aj)(v.metadata) === (0, i.$Aj)(S.metadata)) return f.Other;
					for (let I = 0; I < v.outputs.length; I++) {
						const T = v.outputs[I],
							P = S.outputs[I];
						if (
							T.mime !== P.mime ||
							T.data.buffer.length !== P.data.buffer.length
						)
							return f.Other;
						for (let k = 0; k < T.data.buffer.length; k++)
							if (T.data.buffer[k] !== P.data.buffer[k]) return f.Other;
					}
					return f.Metadata;
				}
				function s(v, S) {
					if (v.length !== S.length) return f.Other;
					const I = v.length;
					for (let T = 0; T < I; T++) {
						const P = v[T],
							k = S[T];
						if ((0, i.$Aj)(P.metadata) !== (0, i.$Aj)(k.metadata))
							return f.Metadata;
						if (P.outputs.length !== k.outputs.length) return f.Other;
						for (let L = 0; L < P.outputs.length; L++) {
							const D = P.outputs[L],
								M = k.outputs[L];
							if (
								D.mime !== M.mime ||
								D.data.buffer.length !== M.data.buffer.length
							)
								return f.Other;
							for (let N = 0; N < D.data.buffer.length; N++)
								if (D.data.buffer[N] !== M.data.buffer[N]) return f.Other;
						}
					}
					return f.Unchanged;
				}
				function l(v, S, I) {
					let T = {};
					if (v) {
						const L = v.transientOptions.transientCellMetadata,
							D = new Set([...Object.keys(S)]);
						for (const M of D) L[M] || (T[M] = S[M]);
					} else T = S;
					const P = { language: I, ...T };
					return I && (P.language = I), (0, w.$no)(P, {});
				}
				function y(v) {
					if (!v.length) return null;
					const I = v[0].mime;
					return v.find((P) => P.mime !== I)
						? null
						: v.map((P) => P.data.toString()).join("");
				}
				function $(v) {
					if (v.length === 1) {
						const S = y(v[0].outputs);
						if (S) return S;
					}
					return JSON.stringify(
						v.map((S) => ({
							metadata: S.metadata,
							outputItems: S.outputs.map((I) => ({
								mimeType: I.mime,
								data: I.data.toString(),
							})),
						})),
						void 0,
						"	",
					);
				}
			},
		),
		define(
			de[3496],
			he([1, 0, 7, 4, 3, 706, 556, 108, 161, 26, 284, 114, 27, 63]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$8Ec = e.$7Ec = void 0),
					(t = mt(t)),
					(i = mt(i));
				class n extends w.$1c {
					constructor(o, f, b, s, l, y, $, v, S) {
						super(),
							(this.b = o),
							(this.c = f),
							(this.f = b),
							(this.g = s),
							(this.h = l),
							(this.j = y),
							(this.m = $),
							(this.n = v),
							(this.output = S),
							(this.resizeListener = this.D(new w.$Zc()));
					}
					render(o, f) {
						const b = document.createElement("div");
						let s;
						const [l, y] = this.output.resolveMimeTypes(this.c, void 0),
							$ = l[y];
						if (l.length > 1) {
							b.style.position = "relative";
							const S = t.$(".multi-mimetype-output");
							S.classList.add(...r.ThemeIcon.asClassNameArray(u.$qOb)),
								(S.tabIndex = 0),
								(S.title = i.localize(
									7979,
									null,
									l.map((I) => I.mimeType).join(", "),
								)),
								b.appendChild(S),
								this.resizeListener.add(
									t.$$fb(S, "mousedown", async (I) => {
										I.leftButton &&
											(I.preventDefault(),
											I.stopPropagation(),
											await this.t(this.c, this.output));
									}),
								),
								this.resizeListener.add(
									t.$0fb(S, t.$$gb.KEY_DOWN, async (I) => {
										const T = new a.$7fb(I);
										(T.equals(h.KeyCode.Enter) || T.equals(h.KeyCode.Space)) &&
											(I.preventDefault(),
											I.stopPropagation(),
											await this.t(this.c, this.output));
									}),
								);
						}
						const v = t.$(".output-inner-container");
						if ((t.$fhb(b, v), l.length !== 0)) {
							const S = this.f.getRendererInfo($.rendererId);
							(s = S
								? {
										type: d.RenderOutputType.Extension,
										renderer: S,
										source: this.output,
										mimeType: $.mimeType,
									}
								: this.q(this.output, $.mimeType)),
								(this.output.pickedMimeType = $);
						}
						(this.domNode = b),
							(this.renderResult = s),
							s &&
								(f ? this.n.insertBefore(b, f) : this.n.appendChild(b),
								this.b.createOutput(
									this.h,
									this.m,
									s,
									() => this.getOutputOffsetInCell(o),
									this.h instanceof E.$REc
										? this.j
										: this.h.type === "insert"
											? C.DiffSide.Modified
											: C.DiffSide.Original,
								));
					}
					q(o, f) {
						if (!o.model.outputs.length)
							return this.s(o, i.localize(7980, null));
						if (!f) {
							const s = o.model.outputs.map((l) => l.mime).join(", ");
							return this.s(o, i.localize(7981, null, s));
						}
						return this.r(o, f);
					}
					r(o, f) {
						const b = `@tag:notebookRenderer ${f}`,
							s = t.$(
								"p",
								void 0,
								`No renderer could be found for mimetype "${f}", but one might be available on the Marketplace.`,
							),
							l = t.$(
								"a",
								{
									href: `command:workbench.extensions.search?%22${b}%22`,
									class: "monaco-button monaco-text-button",
									tabindex: 0,
									role: "button",
									style:
										"padding: 8px; text-decoration: none; color: rgb(255, 255, 255); background-color: rgb(14, 99, 156); max-width: 200px;",
								},
								"Search Marketplace",
							);
						return {
							type: d.RenderOutputType.Html,
							source: o,
							htmlContent: s.outerHTML + l.outerHTML,
						};
					}
					s(o, f) {
						const b = t.$("p", void 0, f);
						return {
							type: d.RenderOutputType.Html,
							source: o,
							htmlContent: b.outerHTML,
						};
					}
					async t(o, f) {
						const [b, s] = f.resolveMimeTypes(o, void 0),
							l = b
								.filter((S) => S.isTrusted)
								.map((S, I) => ({
									label: S.mimeType,
									id: S.mimeType,
									index: I,
									picked: I === s,
									detail: this.u(S.rendererId),
									description: I === s ? i.localize(7982, null) : void 0,
								})),
							y = new w.$Zc(),
							$ = y.add(this.g.createQuickPick());
						($.items = l),
							($.activeItems = l.filter((S) => !!S.picked)),
							($.placeholder =
								l.length !== b.length
									? i.localize(7983, null)
									: i.localize(7984, null));
						const v = await new Promise((S) => {
							y.add(
								$.onDidAccept(() => {
									S(
										$.selectedItems.length === 1
											? $.selectedItems[0].index
											: void 0,
									),
										y.dispose();
								}),
							),
								$.show();
						});
						if (v !== void 0 && v !== s) {
							const S = this.m.outputsViewModels.indexOf(f),
								I = this.domNode.nextElementSibling;
							this.resizeListener.clear();
							const T = this.domNode;
							T && (T.remove(), this.b.removeInset(this.h, this.m, f, this.j)),
								(f.pickedMimeType = b[v]),
								this.render(S, I);
						}
					}
					u(o) {
						const f = this.f.getRendererInfo(o);
						return f
							? `${f.displayName !== "" ? f.displayName : f.id} (${f.extensionId.value})`
							: i.localize(7985, null);
					}
					getCellOutputCurrentIndex() {
						return this.h
							.getNestedCellViewModel(this.j)
							.outputs.indexOf(this.output.model);
					}
					updateHeight(o, f) {
						this.h.updateOutputHeight(this.j, o, f);
					}
					getOutputOffsetInContainer(o) {
						return this.h.getOutputOffsetInContainer(this.j, o);
					}
					getOutputOffsetInCell(o) {
						return this.h.getOutputOffsetInCell(this.j, o);
					}
				}
				e.$7Ec = n;
				let g = class extends w.$1c {
					constructor(o, f, b, s, l, y, $, v) {
						super(),
							(this.c = o),
							(this.f = f),
							(this.g = b),
							(this.h = s),
							(this.j = l),
							(this.m = y),
							(this.n = $),
							(this.q = v),
							(this.b = new Map()),
							this.D(
								this.g.onDidLayoutChange(() => {
									this.b.forEach((S, I) => {
										const T = s.outputs.indexOf(I.model);
										if (T >= 0) {
											const P = this.g.getOutputOffsetInContainer(this.j, T);
											S.domNode.style.top = `${P}px`;
										}
									});
								}),
							),
							this.D(
								this.h.textModel.onDidChangeOutputs((S) => {
									this.r(S);
								}),
							);
					}
					r(o) {
						const f = [];
						this.b.forEach((l, y) => {
							this.h.outputsViewModels.indexOf(y) < 0 &&
								(f.push(y),
								l.domNode.remove(),
								this.c.removeInset(this.g, this.h, y, this.j));
						}),
							f.forEach((l) => {
								this.b.get(l)?.dispose(), this.b.delete(l);
							});
						let b;
						this.h.outputsViewModels.reverse().forEach((l) => {
							if (this.b.has(l)) {
								b = this.b.get(l).domNode;
								return;
							}
							const y = this.h.outputsViewModels.indexOf(l);
							this.s(l, y, b), (b = this.b.get(l)?.domNode);
						});
					}
					render() {
						for (let o = 0; o < this.h.outputsViewModels.length; o++) {
							const f = this.h.outputsViewModels[o];
							this.s(f, o, void 0);
						}
					}
					showOutputs() {
						for (let o = 0; o < this.h.outputsViewModels.length; o++) {
							const f = this.h.outputsViewModels[o];
							this.c.showInset(this.g, f.cellViewModel, f, this.j);
						}
					}
					hideOutputs() {
						this.b.forEach((o, f) => {
							this.c.hideInset(this.g, this.h, f);
						});
					}
					s(o, f, b) {
						this.b.has(o) ||
							this.b.set(
								o,
								new n(
									this.c,
									this.f,
									this.n,
									this.q,
									this.g,
									this.j,
									this.h,
									this.m,
									o,
								),
							),
							this.b.get(o).render(f, b);
					}
				};
				(e.$8Ec = g), (e.$8Ec = g = Ne([j(6, m.$MIb), j(7, c.$DJ)], g));
			},
		),
		define(
			de[1847],
			he([1, 0, 6, 3, 23, 800, 706, 556, 70]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ZEc = e.$XEc = void 0),
					(e.$YEc = u);
				class r extends i.$1c {
					get items() {
						return this.f;
					}
					get value() {
						return this.n
							.filter((s) => s.type !== "placeholder")
							.filter((s) =>
								this.r
									? !0
									: s instanceof p || s instanceof o || s instanceof f
										? !(
												s.type === "unchanged" &&
												s.containerType === "unchanged"
											)
										: !0,
							)
							.filter((s) => (s instanceof f ? !this.s : !0))
							.filter((s) => (s instanceof o ? !this.t : !0));
					}
					get hasUnchangedCells() {
						return this.q === !0;
					}
					get includeUnchanged() {
						return this.r === !0;
					}
					set includeUnchanged(s) {
						(this.r = s), this.m.fire();
					}
					constructor(s, l, y, $, v, S, I, T) {
						super(),
							(this.w = s),
							(this.z = l),
							(this.C = y),
							(this.F = $),
							(this.G = v),
							(this.H = S),
							(this.I = I),
							(this.J = T),
							(this.c = new Map()),
							(this.f = []),
							(this.g = this.D(new t.$re())),
							(this.onDidChangeItems = this.g.event),
							(this.h = this.D(new i.$Zc())),
							(this.m = this.D(new t.$re())),
							(this.n = []),
							(this.onDidChange = this.m.event),
							(this.u = []),
							(this.s =
								this.w.modified.notebook.transientOptions.transientOutputs ||
								this.F.getValue("notebook.diff.ignoreOutputs")),
							(this.t = this.F.getValue("notebook.diff.ignoreMetadata")),
							this.D(
								this.F.onDidChangeConfiguration((P) => {
									let k = !1;
									if (P.affectsConfiguration("notebook.diff.ignoreMetadata")) {
										const L = this.F.getValue("notebook.diff.ignoreMetadata");
										L !== void 0 && this.t !== L && ((this.t = L), (k = !0));
									}
									if (P.affectsConfiguration("notebook.diff.ignoreOutputs")) {
										const L = this.F.getValue("notebook.diff.ignoreOutputs");
										L !== void 0 &&
											this.s !==
												(L ||
													this.w.modified.notebook.transientOptions
														.transientOutputs) &&
											((this.s =
												L ||
												!!this.w.modified.notebook.transientOptions
													.transientOutputs),
											(k = !0));
									}
									k && this.m.fire();
								}),
							);
					}
					dispose() {
						this.L(), super.dispose();
					}
					L() {
						this.h.clear(),
							(0, i.$Vc)(Array.from(this.c.keys())),
							this.c.clear(),
							(0, i.$Vc)(this.u),
							(this.u = []),
							(0, i.$Vc)(this.f),
							this.f.splice(0, this.f.length);
					}
					async computeDiff(s) {
						const l = await this.z.computeDiff(
							this.w.original.resource,
							this.w.modified.resource,
						);
						if (s.isCancellationRequested) return;
						u(this.w, l.cellsDiff);
						const { cellDiffInfo: y, firstChangeIndex: $ } = a(this.w, l);
						if (!h(y, this.u, this.w))
							return this.N(y), this.M(), { firstChangeIndex: $ };
					}
					M() {
						this.n = [];
						const s = this.w.original.resource,
							l = this.w.modified.resource;
						(this.q = !1),
							this.items.forEach((y) => {
								switch (y.type) {
									case "delete": {
										this.n.push(new p(y.original.uri, void 0, y.type, y.type));
										const $ = m.CellUri.generateCellPropertyUri(
											s,
											y.original.handle,
											w.Schemas.vscodeNotebookCellMetadata,
										);
										this.n.push(new o($, void 0, y.type, y.type));
										const v = m.CellUri.generateCellPropertyUri(
											s,
											y.original.handle,
											w.Schemas.vscodeNotebookCellOutput,
										);
										this.n.push(new f(v, void 0, y.type, y.type));
										break;
									}
									case "insert": {
										this.n.push(new p(void 0, y.modified.uri, y.type, y.type));
										const $ = m.CellUri.generateCellPropertyUri(
											l,
											y.modified.handle,
											w.Schemas.vscodeNotebookCellMetadata,
										);
										this.n.push(new o(void 0, $, y.type, y.type));
										const v = m.CellUri.generateCellPropertyUri(
											l,
											y.modified.handle,
											w.Schemas.vscodeNotebookCellOutput,
										);
										this.n.push(new f(void 0, v, y.type, y.type));
										break;
									}
									case "modified": {
										const $ = y.checkIfInputModified() ? y.type : "unchanged",
											v =
												y.checkIfInputModified() ||
												y.checkMetadataIfModified() ||
												y.checkIfOutputsModified()
													? y.type
													: "unchanged";
										this.n.push(new p(y.original.uri, y.modified.uri, $, v));
										const S = m.CellUri.generateCellPropertyUri(
												s,
												y.original.handle,
												w.Schemas.vscodeNotebookCellMetadata,
											),
											I = m.CellUri.generateCellPropertyUri(
												l,
												y.modified.handle,
												w.Schemas.vscodeNotebookCellMetadata,
											);
										this.n.push(
											new o(
												S,
												I,
												y.checkMetadataIfModified() ? y.type : "unchanged",
												v,
											),
										);
										const T = m.CellUri.generateCellPropertyUri(
												s,
												y.original.handle,
												w.Schemas.vscodeNotebookCellOutput,
											),
											P = m.CellUri.generateCellPropertyUri(
												l,
												y.modified.handle,
												w.Schemas.vscodeNotebookCellOutput,
											);
										this.n.push(
											new f(
												T,
												P,
												y.checkIfOutputsModified() ? y.type : "unchanged",
												v,
											),
										);
										break;
									}
									case "unchanged": {
										(this.q = !0),
											this.n.push(
												new p(y.original.uri, y.modified.uri, y.type, y.type),
											);
										const $ = m.CellUri.generateCellPropertyUri(
												s,
												y.original.handle,
												w.Schemas.vscodeNotebookCellMetadata,
											),
											v = m.CellUri.generateCellPropertyUri(
												l,
												y.modified.handle,
												w.Schemas.vscodeNotebookCellMetadata,
											);
										this.n.push(new o($, v, y.type, y.type));
										const S = m.CellUri.generateCellPropertyUri(
												s,
												y.original.handle,
												w.Schemas.vscodeNotebookCellOutput,
											),
											I = m.CellUri.generateCellPropertyUri(
												l,
												y.modified.handle,
												w.Schemas.vscodeNotebookCellOutput,
											);
										this.n.push(new f(S, I, y.type, y.type));
										break;
									}
								}
							}),
							this.m.fire();
					}
					N(s) {
						const l = c(this.C, this.F, this.w, this.G, s, this.I, this.H),
							y = this.f.length;
						this.L(), this.f.splice(0, y);
						let $;
						(this.u = l),
							l.forEach((v, S) => {
								if (v.type === "unchanged" && !this.J) {
									if (!$) {
										(v.displayIconToHideUnmodifiedCells = !0),
											($ = new C.$PEc(
												v.mainDocumentTextModel,
												v.editorEventDispatcher,
												v.initData,
											)),
											this.f.push($);
										const T = $;
										this.h.add(
											T.onUnfoldHiddenCells(() => {
												const P = this.c.get(T);
												if (!Array.isArray(P)) return;
												const k = this.f.indexOf(T);
												this.f.splice(k, 1, ...P),
													this.g.fire({
														start: k,
														deleteCount: 1,
														elements: P,
													});
											}),
										),
											this.h.add(
												v.onHideUnchangedCells(() => {
													const P = this.c.get(T);
													if (!Array.isArray(P)) return;
													const k = this.f.indexOf(v);
													this.f.splice(k, P.length, T),
														this.g.fire({
															start: k,
															deleteCount: P.length,
															elements: [T],
														});
												}),
											);
									}
									const I = this.c.get($) || [];
									I.push(v), this.c.set($, I), $.hiddenCells.push(v);
								} else ($ = void 0), this.f.push(v);
							}),
							this.g.fire({ start: 0, deleteCount: y, elements: this.f });
					}
				}
				e.$XEc = r;
				function u(b, s) {
					const l = s.changes;
					for (let y = 0; y < s.changes.length - 1; y++) {
						const $ = l[y],
							v = l[y + 1],
							S = $.originalStart,
							I = $.modifiedStart;
						$.originalLength === 1 &&
							$.modifiedLength === 0 &&
							v.originalStart === S + 2 &&
							v.originalLength === 0 &&
							v.modifiedStart === I + 1 &&
							v.modifiedLength === 1 &&
							b.original.notebook.cells[S].getHashValue() ===
								b.modified.notebook.cells[I + 1].getHashValue() &&
							b.original.notebook.cells[S + 1].getHashValue() ===
								b.modified.notebook.cells[I].getHashValue() &&
							(($.originalStart = S),
							($.originalLength = 0),
							($.modifiedStart = I),
							($.modifiedLength = 1),
							(v.originalStart = S + 1),
							(v.originalLength = 1),
							(v.modifiedStart = I + 2),
							(v.modifiedLength = 0),
							y++);
					}
				}
				function a(b, s) {
					const l = s.cellsDiff.changes,
						y = [],
						$ = b.original.notebook,
						v = b.modified.notebook;
					let S = 0,
						I = 0,
						T = -1;
					for (let P = 0; P < l.length; P++) {
						const k = l[P];
						for (let D = 0; D < k.originalStart - S; D++) {
							const M = $.cells[S + D],
								N = v.cells[I + D];
							M.getHashValue() === N.getHashValue()
								? y.push({
										originalCellIndex: S + D,
										modifiedCellIndex: I + D,
										type: "unchanged",
									})
								: (T === -1 && (T = y.length),
									y.push({
										originalCellIndex: S + D,
										modifiedCellIndex: I + D,
										type: "modified",
									}));
						}
						const L = n(k, $, v);
						L.length && T === -1 && (T = y.length),
							y.push(...L),
							(S = k.originalStart + k.originalLength),
							(I = k.modifiedStart + k.modifiedLength);
					}
					for (let P = S; P < $.cells.length; P++)
						y.push({
							originalCellIndex: P,
							modifiedCellIndex: P - S + I,
							type: "unchanged",
						});
					return { cellDiffInfo: y, firstChangeIndex: T };
				}
				function h(b, s, l) {
					if (b.length !== s.length) return !1;
					const y = l.original.notebook,
						$ = l.modified.notebook;
					for (let v = 0; v < s.length; v++) {
						const S = b[v],
							I = s[v];
						if (S.type !== I.type) return !1;
						switch (S.type) {
							case "delete": {
								if (y.cells[S.originalCellIndex].handle !== I.original?.handle)
									return !1;
								continue;
							}
							case "insert": {
								if ($.cells[S.modifiedCellIndex].handle !== I.modified?.handle)
									return !1;
								continue;
							}
							default: {
								if (
									y.cells[S.originalCellIndex].handle !== I.original?.handle ||
									$.cells[S.modifiedCellIndex].handle !== I.modified?.handle
								)
									return !1;
								continue;
							}
						}
					}
					return !0;
				}
				function c(b, s, l, y, $, v, S) {
					const I = l.original.notebook,
						T = l.modified.notebook,
						P = {
							metadataStatusHeight: s.getValue("notebook.diff.ignoreMetadata")
								? 0
								: 25,
							outputStatusHeight:
								s.getValue("notebook.diff.ignoreOutputs") ||
								T.transientOptions.transientOutputs
									? 0
									: 25,
							fontInfo: v,
						};
					return $.map((k) => {
						switch (k.type) {
							case "delete":
								return new C.$SEc(
									I,
									T,
									I.cells[k.originalCellIndex],
									void 0,
									"delete",
									y,
									P,
									S,
								);
							case "insert":
								return new C.$SEc(
									T,
									I,
									void 0,
									T.cells[k.modifiedCellIndex],
									"insert",
									y,
									P,
									S,
								);
							case "modified":
								return new C.$REc(
									l.modified.notebook,
									l.original.notebook,
									I.cells[k.originalCellIndex],
									T.cells[k.modifiedCellIndex],
									"modified",
									y,
									P,
									S,
								);
							case "unchanged":
								return new C.$REc(
									l.modified.notebook,
									l.original.notebook,
									I.cells[k.originalCellIndex],
									T.cells[k.modifiedCellIndex],
									"unchanged",
									y,
									P,
									S,
								);
						}
					});
				}
				function n(b, s, l) {
					const y = [],
						$ = Math.min(b.originalLength, b.modifiedLength);
					for (let v = 0; v < $; v++) {
						const S = s.cells[b.originalStart + v].equal(
							l.cells[b.modifiedStart + v],
						);
						y.push({
							originalCellIndex: b.originalStart + v,
							modifiedCellIndex: b.modifiedStart + v,
							type: S ? "unchanged" : "modified",
						});
					}
					for (let v = $; v < b.originalLength; v++)
						y.push({ originalCellIndex: b.originalStart + v, type: "delete" });
					for (let v = $; v < b.modifiedLength; v++)
						y.push({ modifiedCellIndex: b.modifiedStart + v, type: "insert" });
					return y;
				}
				class g extends E.$Jnc {
					constructor(s, l, y, $, v, S, I) {
						super(s, l, y, I),
							(this.type = $),
							(this.containerType = v),
							(this.kind = S);
					}
				}
				e.$ZEc = g;
				class p extends g {
					constructor(s, l, y, $) {
						super(s, l, l || s, y, $, "Cell", {
							[d.$HEc.key]: "Cell",
							[d.$IEc.key]: y,
						});
					}
				}
				class o extends g {
					constructor(s, l, y, $) {
						super(s, l, l || s, y, $, "Metadata", {
							[d.$HEc.key]: "Metadata",
							[d.$IEc.key]: y,
						});
					}
				}
				class f extends g {
					constructor(s, l, y, $) {
						super(s, l, l || s, y, $, "Output", {
							[d.$HEc.key]: "Output",
							[d.$IEc.key]: y,
						});
					}
				}
			},
		),
		define(
			de[1848],
			he([1, 0, 7, 15, 3, 12, 108, 294, 1029, 70, 442]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$u2b = e.$t2b = void 0),
					(e.$v2b = p),
					(t = mt(t)),
					(E = mt(E));
				const a = t.$,
					h = "cell-dragging",
					c = "global-drag-active";
				class n extends d.$A1b {
					constructor(f) {
						super(), (this.g = f);
					}
					didRenderCell(f) {
						this.h(f);
					}
					updateState(f, b) {
						b.dragStateChanged && this.h(f);
					}
					h(f) {
						this.g.classList.toggle(h, f.dragging);
					}
				}
				e.$t2b = n;
				class g extends w.$1c {
					constructor(f, b) {
						super(),
							(this.q = f),
							(this.r = b),
							(this.f = []),
							(this.j = !1),
							(this.n = this.D(new w.$2c())),
							(this.g = t.$fhb(b, a(".cell-list-insertion-indicator"))),
							this.D(
								t.$0fb(
									b.ownerDocument.body,
									t.$$gb.DRAG_START,
									this.w.bind(this),
									!0,
								),
							),
							this.D(
								t.$0fb(
									b.ownerDocument.body,
									t.$$gb.DRAG_END,
									this.y.bind(this),
									!0,
								),
							);
						const s = (l, y, $ = !1) => {
							this.D(
								t.$0fb(
									f.getDomNode(),
									l,
									(v) => {
										const S = this.u(v);
										S && y(S);
									},
									$,
								),
							);
						};
						s(
							t.$$gb.DRAG_OVER,
							(l) => {
								this.c && (l.browserEvent.preventDefault(), this.z(l));
							},
							!0,
						),
							s(t.$$gb.DROP, (l) => {
								this.c && (l.browserEvent.preventDefault(), this.G(l));
							}),
							s(t.$$gb.DRAG_LEAVE, (l) => {
								l.browserEvent.preventDefault(), this.J(l);
							}),
							(this.m = this.D(new i.$Jh(200)));
					}
					setList(f) {
						(this.h = f),
							(this.n.value = this.h.onWillScroll((b) => {
								b.scrollTopChanged &&
									(this.t(!1),
									(this.j = !0),
									this.m.trigger(() => {
										this.j = !1;
									}));
							}));
					}
					t(f) {
						this.g.style.opacity = f ? "1" : "0";
					}
					u(f) {
						const b = this.r.getBoundingClientRect().top,
							s = this.h.scrollTop + f.clientY - b,
							l = this.h.elementAt(s);
						if (!l) return;
						const y = this.h.getCellViewScrollTop(l),
							$ = this.h.elementHeight(l),
							S = (s - y) / $;
						return {
							browserEvent: f,
							draggedOverCell: l,
							cellTop: y,
							cellHeight: $,
							dragPosRatio: S,
						};
					}
					clearGlobalDragState() {
						this.q.getDomNode().classList.remove(c);
					}
					w() {
						this.q.getDomNode().classList.add(c);
					}
					y() {
						this.q.getDomNode().classList.remove(c);
					}
					z(f) {
						if (!f.browserEvent.dataTransfer) return;
						if (!this.c) {
							f.browserEvent.dataTransfer.dropEffect = "none";
							return;
						}
						if (this.j || this.c === f.draggedOverCell) {
							this.t(!1);
							return;
						}
						const b = this.F(f.dragPosRatio),
							s = b === "above" ? f.cellTop : f.cellTop + f.cellHeight;
						this.C(b, s);
					}
					C(f, b) {
						const { bottomToolbarGap: s } =
								this.q.notebookOptions.computeBottomToolbarDimensions(
									this.q.textModel?.viewType,
								),
							l = b - this.h.scrollTop + s / 2;
						l >= 0 ? ((this.g.style.top = `${l}px`), this.t(!0)) : this.t(!1);
					}
					F(f) {
						return f < 0.5 ? "above" : "below";
					}
					G(f) {
						const b = this.c;
						if (this.j || this.c === f.draggedOverCell) return;
						this.L();
						const s = this.F(f.dragPosRatio);
						this.I(b, s, f.browserEvent, f.draggedOverCell);
					}
					H(f) {
						const b = this.q.getSelections(),
							l = (0, C.$fJb)(this.q, b).find((y) => y.start <= f && f < y.end);
						return l || { start: f, end: f + 1 };
					}
					I(f, b, s, l) {
						const y = this.h.getCellViewScrollTop(l),
							$ = this.h.elementHeight(l),
							v = b === "above" ? y : y + $,
							{ bottomToolbarGap: S } =
								this.q.notebookOptions.computeBottomToolbarDimensions(
									this.q.textModel?.viewType,
								),
							I = v - this.h.scrollTop + S / 2,
							T = this.q.getDomNode().getBoundingClientRect().height;
						if (I < 0 || I > T) return;
						const P = (s.ctrlKey && !E.$m) || (s.altKey && E.$m);
						if (!this.q.hasModel()) return;
						const k = this.q.textModel;
						if (P) {
							const L = this.q.getCellIndex(f),
								D = this.H(L);
							let M = this.q.getCellIndex(l);
							if (b === "below") {
								const R = this.q.getCellIndex(l);
								M = this.q.getNextVisibleCellIndex(R);
							}
							let N, A;
							if (M <= D.start)
								(N = { start: M, end: M + D.end - D.start }),
									(A = { start: M + L - D.start, end: M + L - D.start + 1 });
							else {
								const R = M - D.start;
								(N = { start: D.start + R, end: D.end + R }),
									(A = { start: L + R, end: L + R + 1 });
							}
							k.applyEdits(
								[
									{
										editType: r.CellEditType.Replace,
										index: M,
										count: 0,
										cells: (0, u.$j6)([D]).map((R) =>
											(0, m.$05)(this.q.cellAt(R).model),
										),
									},
								],
								!0,
								{
									kind: r.SelectionStateType.Index,
									focus: this.q.getFocus(),
									selections: this.q.getSelections(),
								},
								() => ({
									kind: r.SelectionStateType.Index,
									focus: A,
									selections: [N],
								}),
								void 0,
								!0,
							),
								this.q.revealCellRangeInView(N);
						} else p(this.q, f, b, l);
					}
					J(f) {
						(!f.browserEvent.relatedTarget ||
							!t.$Bgb(f.browserEvent.relatedTarget, this.q.getDomNode())) &&
							this.t(!1);
					}
					L() {
						this.c &&
							(this.f.forEach((f) => (f.dragging = !1)),
							(this.c = void 0),
							(this.f = [])),
							this.t(!1);
					}
					registerDragHandle(f, b, s, l) {
						const y = f.container;
						for (const S of s) S.setAttribute("draggable", "true");
						const $ = () => {
							!this.q.notebookOptions.getDisplayOptions().dragAndDropEnabled ||
								this.q.isReadOnly ||
								(y.classList.remove(h), this.L());
						};
						for (const S of s)
							f.templateDisposables.add(t.$0fb(S, t.$$gb.DRAG_END, $));
						const v = (S) => {
							if (
								!S.dataTransfer ||
								!this.q.notebookOptions.getDisplayOptions()
									.dragAndDropEnabled ||
								this.q.isReadOnly
							)
								return;
							(this.c = f.currentRenderedCell),
								(this.f = this.q
									.getSelections()
									.map((T) => this.q.getCellsInRange(T))
									.flat()),
								this.f.forEach((T) => (T.dragging = !0));
							const I = l();
							b.parentElement.appendChild(I),
								S.dataTransfer.setDragImage(I, 0, 0),
								setTimeout(() => I.remove(), 0);
						};
						for (const S of s)
							f.templateDisposables.add(t.$0fb(S, t.$$gb.DRAG_START, v));
					}
					startExplicitDrag(f, b) {
						!this.q.notebookOptions.getDisplayOptions().dragAndDropEnabled ||
							this.q.isReadOnly ||
							((this.c = f), this.t(!0));
					}
					explicitDrag(f, b) {
						if (
							!this.q.notebookOptions.getDisplayOptions().dragAndDropEnabled ||
							this.q.isReadOnly
						)
							return;
						const s = this.h.elementAt(b);
						if (s && s !== f) {
							const I = this.h.getCellViewScrollTop(s),
								T = this.h.elementHeight(s),
								P = this.M(b, I, T),
								k = P === "above" ? I : I + T;
							this.C(P, k);
						}
						if (this.c !== f) return;
						const l = this.q.getDomNode().getBoundingClientRect(),
							y = b - this.h.scrollTop,
							$ = 0.2,
							v = 20,
							S = y / l.height;
						S < $
							? (this.h.scrollTop -= v * (1 - S / $))
							: S > 1 - $ && (this.h.scrollTop += v * (1 - (1 - S) / $));
					}
					endExplicitDrag(f) {
						this.t(!1);
					}
					explicitDrop(f, b) {
						(this.c = void 0), this.t(!1);
						const s = this.h.elementAt(b.dragOffsetY);
						if (!s || s === f) return;
						const l = this.h.getCellViewScrollTop(s),
							y = this.h.elementHeight(s),
							$ = this.M(b.dragOffsetY, l, y);
						this.I(f, $, b, s);
					}
					M(f, b, s) {
						const y = (f - b) / s;
						return this.F(y);
					}
					dispose() {
						(this.q = null), super.dispose();
					}
				}
				e.$u2b = g;
				function p(o, f, b, s) {
					const l = o.getCellIndex(f);
					let y = o.getCellIndex(s);
					if (typeof l != "number" || typeof y != "number") return;
					b === "below" && (y = o.getNextVisibleCellIndex(y) ?? y);
					let $ = o.getSelections();
					$.length || ($ = [o.getFocus()]);
					let v = o.getFocus().start;
					$.some((N) => N.start <= l && N.end > l) ||
						(($ = [{ start: l, end: l + 1 }]), (v = l));
					const S = $.find((N) => N.start <= y && N.end > y);
					S && (y = S.start);
					let I = 0,
						T = y,
						P = y;
					$.sort((N, A) => A.start - N.start);
					const k = $.map((N) => {
							const A = N.end - N.start;
							let R = 0;
							N.end <= P && (R = -A);
							const O = P + R;
							if (v >= N.start && v <= N.end) {
								const z = v - N.start;
								T = O + z;
							}
							const B = N.start >= y ? I : 0,
								U = {
									editType: r.CellEditType.Move,
									index: N.start + B,
									length: A,
									newIdx: O,
								};
							return (I += A), N.end < P && (P -= A), U;
						}),
						L = k[k.length - 1],
						D = { start: L.newIdx, end: L.newIdx + I },
						M = { start: T, end: T + 1 };
					o.textModel.applyEdits(
						k,
						!0,
						{
							kind: r.SelectionStateType.Index,
							focus: o.getFocus(),
							selections: o.getSelections(),
						},
						() => ({
							kind: r.SelectionStateType.Index,
							focus: M,
							selections: [D],
						}),
						void 0,
						!0,
					),
						o.revealCellRangeInView(D);
				}
			},
		),
		define(
			de[836],
			he([1, 0, 6, 4, 11, 10, 81, 8, 30, 100, 238, 176, 294, 70]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$J3b = void 0);
				class n extends h.$A1b {
					set tabSize(p) {
						this.b !== p && ((this.b = p), this.j.fire());
					}
					get tabSize() {
						return this.b;
					}
					set indentSize(p) {
						this.g !== p && ((this.g = p), this.j.fire());
					}
					get indentSize() {
						return this.g;
					}
					set insertSpaces(p) {
						this.h !== p && ((this.h = p), this.j.fire());
					}
					get insertSpaces() {
						return this.h;
					}
					constructor(p, o, f) {
						super(),
							(this.n = p),
							(this.notebookOptions = o),
							(this.configurationService = f),
							(this.a = "inherit"),
							(this.j = this.D(new t.$re())),
							(this.onDidChange = this.j.event),
							this.D(
								p.onDidChange(() => {
									this.q();
								}),
							),
							(this.m = this.r());
					}
					updateState(p, o) {
						o.cellLineNumberChanged && this.setLineNumbers(p.lineNumbers);
					}
					q() {
						(this.m = this.r()), this.j.fire();
					}
					r() {
						const p = this.n.value,
							o =
								this.notebookOptions.getDisplayOptions()
									.editorOptionsCustomizations,
							f = o?.["editor.indentSize"];
						f !== void 0 && (this.indentSize = f);
						const b = o?.["editor.insertSpaces"];
						b !== void 0 && (this.insertSpaces = b);
						const s = o?.["editor.tabSize"];
						s !== void 0 && (this.tabSize = s);
						let l = p.lineNumbers;
						switch (this.a) {
							case "inherit":
								this.configurationService.getValue("notebook.lineNumbers") ===
								"on"
									? p.lineNumbers === "off" && (l = "on")
									: (l = "off");
								break;
							case "on":
								p.lineNumbers === "off" && (l = "on");
								break;
							case "off":
								l = "off";
								break;
						}
						return p.lineNumbers !== l
							? { ...p, lineNumbers: l }
							: Object.assign({}, p);
					}
					getUpdatedValue(p, o) {
						const f = this.getValue(p, o);
						return delete f.hover, f;
					}
					getValue(p, o) {
						return {
							...this.m,
							padding: this.notebookOptions.computeEditorPadding(p, o),
						};
					}
					getDefaultValue() {
						return { ...this.m, padding: { top: 12, bottom: 12 } };
					}
					setLineNumbers(p) {
						(this.a = p), this.q();
					}
				}
				(e.$J3b = n),
					m.$Io
						.as(C.$No.Configuration)
						.registerConfiguration({
							id: "notebook",
							order: 100,
							type: "object",
							properties: {
								"notebook.lineNumbers": {
									type: "string",
									enum: ["off", "on"],
									default: "off",
									markdownDescription: (0, i.localize)(8184, null),
								},
							},
						}),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: "notebook.toggleLineNumbers",
									title: (0, i.localize2)(8187, "Toggle Notebook Line Numbers"),
									precondition: a.$pJb,
									menu: [
										{
											id: w.$XX.NotebookToolbar,
											group: "notebookLayout",
											order: 2,
											when: d.$Kj.equals("config.notebook.globalToolbar", !0),
										},
									],
									category: u.$p5b,
									f1: !0,
									toggled: {
										condition: d.$Kj.notEquals(
											"config.notebook.lineNumbers",
											"off",
										),
										title: (0, i.localize)(8185, null),
									},
								});
							}
							async run(p) {
								const o = p.get(E.$gj);
								o.getValue("notebook.lineNumbers") === "on"
									? o.updateValue("notebook.lineNumbers", "off")
									: o.updateValue("notebook.lineNumbers", "on");
							}
						},
					),
					(0, w.$4X)(
						class extends u.$y5b {
							constructor() {
								super({
									id: "notebook.cell.toggleLineNumbers",
									title: (0, i.localize)(8186, null),
									precondition: r.$TPb.isEqualTo(c.$O6),
									menu: [
										{ id: w.$XX.NotebookCellTitle, group: "View", order: 1 },
									],
									toggled: d.$Kj.or(
										a.$HJb.isEqualTo("on"),
										d.$Kj.and(
											a.$HJb.isEqualTo("inherit"),
											d.$Kj.equals("config.notebook.lineNumbers", "on"),
										),
									),
								});
							}
							async runWithContext(p, o) {
								if (o.ui) this.a(p.get(E.$gj), o.cell);
								else {
									const f = p.get(E.$gj);
									o.selectedCells.forEach((b) => {
										this.a(f, b);
									});
								}
							}
							a(p, o) {
								const f = p.getValue("notebook.lineNumbers") === "on",
									b = o.lineNumbers;
								b === "on" || (b === "inherit" && f)
									? (o.lineNumbers = "off")
									: (o.lineNumbers = "on");
							}
						},
					);
			},
		),
		define(
			de[3497],
			he([
				1, 0, 4, 6, 27, 3, 59, 1607, 206, 104, 409, 1199, 943, 346, 248, 152,
				122, 42, 751, 91, 11, 10, 8, 43, 155, 238, 108, 330, 836, 176, 18, 46,
				55,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$AGc = e.$zGc = void 0);
				const N = "notebook.addFindMatchToSelection";
				var A;
				(function (F) {
					(F[(F.Idle = 0)] = "Idle"),
						(F[(F.Selecting = 1)] = "Selecting"),
						(F[(F.Editing = 2)] = "Editing");
				})(A || (A = {})),
					(e.$zGc = {
						IsNotebookMultiSelect: new y.$5j("isNotebookMultiSelect", !1),
						NotebookMultiSelectState: new y.$5j(
							"notebookMultiSelectState",
							A.Idle,
						),
					});
				let R = class extends E.$1c {
					static {
						this.id = "notebook.multiCursorController";
					}
					constructor(x, H, q, V, G, K, J) {
						super(),
							(this.r = x),
							(this.s = H),
							(this.t = q),
							(this.u = V),
							(this.w = G),
							(this.y = K),
							(this.z = J),
							(this.a = A.Idle),
							(this.b = ""),
							(this.c = []),
							(this.f = this.D(new i.$re())),
							(this.onDidChangeAnchorCell = this.f.event),
							(this.h = this.D(new E.$Zc())),
							(this.j = this.D(new E.$Zc())),
							(this.m = new C.$Gc()),
							(this.n = e.$zGc.IsNotebookMultiSelect.bindTo(this.s)),
							(this.q = e.$zGc.NotebookMultiSelectState.bindTo(this.s)),
							this.y.getValue("notebook.multiSelect.enabled") &&
								((this.g = this.r.activeCellAndCodeEditor),
								this.D(
									this.onDidChangeAnchorCell(() => {
										this.C(), this.H();
									}),
								));
					}
					C() {
						this.j.clear(),
							this.c.forEach(async (x) => {
								const q = (
									await this.t.createModelReference(x.cellViewModel.uri)
								).object.textEditorModel;
								if (!q) return;
								const V = this.G(x.cellViewModel),
									G = this.F(),
									K = x.config,
									J = this.j.add(
										new a.$_vb(
											q,
											V,
											G,
											new c.$xsb(q.getLanguageId(), q.getOptions(), K, this.u),
										),
									);
								J.setSelections(
									new f.$Xvb(),
									void 0,
									x.wordSelections,
									n.CursorChangeReason.Explicit,
								),
									this.m.set(x.cellViewModel.uri, J);
							});
					}
					F() {
						return {
							convertViewPositionToModelPosition(x) {
								return x;
							},
							convertViewRangeToModelRange(x) {
								return x;
							},
							validateViewPosition(x, H) {
								return x;
							},
							validateViewRange(x, H) {
								return x;
							},
							convertModelPositionToViewPosition(x, H, q, V) {
								return x;
							},
							convertModelRangeToViewRange(x, H) {
								return x;
							},
							modelPositionIsVisible(x) {
								return !0;
							},
							getModelLineViewLineCount(x) {
								return 1;
							},
							getViewLineNumberOfModelPosition(x, H) {
								return x;
							},
						};
					}
					G(x) {
						return {
							getLineCount() {
								return x.textBuffer.getLineCount();
							},
							getLineContent(H) {
								return x.textBuffer.getLineContent(H);
							},
							getLineMinColumn(H) {
								return x.textBuffer.getLineMinColumn(H);
							},
							getLineMaxColumn(H) {
								return x.textBuffer.getLineMaxColumn(H);
							},
							getLineFirstNonWhitespaceColumn(H) {
								return x.textBuffer.getLineFirstNonWhitespaceColumn(H);
							},
							getLineLastNonWhitespaceColumn(H) {
								return x.textBuffer.getLineLastNonWhitespaceColumn(H);
							},
							normalizePosition(H, q) {
								return H;
							},
							getLineIndentColumn(H) {
								return (0, p.$_X)(x.textBuffer.getLineContent(H)) + 1;
							},
						};
					}
					H() {
						if ((this.h.clear(), !this.g))
							throw new Error("Anchor cell is undefined");
						this.h.add(
							this.g[1].onWillType((x) => {
								const H = new f.$Xvb();
								this.c.forEach((q) => {
									const V = this.m.get(q.cellViewModel.uri);
									V &&
										q.cellViewModel.handle !== this.g?.[0].handle &&
										V.type(H, x, "keyboard");
								});
							}),
						),
							this.h.add(
								this.g[1].onDidType(() => {
									(this.a = A.Editing), this.q.set(A.Editing);
									const x = this.m.get(this.g[0].uri);
									if (!x) return;
									const H = this.r.activeCodeEditor?.getSelections();
									H &&
										(x.setSelections(
											new f.$Xvb(),
											"keyboard",
											H,
											n.CursorChangeReason.Explicit,
										),
										this.c.forEach((q) => {
											const V = this.m.get(q.cellViewModel.uri);
											V &&
												((q.initialSelection = V.getSelection()),
												(q.wordSelections = []));
										}),
										this.M());
								}),
							),
							this.h.add(
								this.g[1].onDidChangeCursorSelection((x) => {
									(x.source === "mouse" || x.source === "deleteRight") &&
										this.resetToIdleState();
								}),
							),
							this.h.add(
								this.g[1].onDidBlurEditorWidget(() => {
									(this.a === A.Selecting || this.a === A.Editing) &&
										this.resetToIdleState();
								}),
							);
					}
					I() {
						if (!this.g?.[1].getModel()) return;
						const H = new C.$Gc(),
							q = [];
						this.c.forEach((V) => {
							if (!V.undoRedoHistory) return;
							q.push(V.cellViewModel.uri);
							const K = this.z.getElements(V.cellViewModel.uri).past.slice(),
								J = V.undoRedoHistory.past.slice(),
								W = K.slice(J.length);
							W.length !== 0 &&
								(H.set(V.cellViewModel.uri, W),
								this.z.removeElements(V.cellViewModel.uri),
								J.forEach((X) => {
									this.z.pushElement(X);
								}));
						}),
							this.z.pushElement({
								type: v.UndoRedoElementType.Workspace,
								resources: q,
								label: "Multi Cursor Edit",
								code: "multiCursorEdit",
								confirmBeforeUndo: !1,
								undo: async () => {
									H.forEach(async (V) => {
										V.reverse().forEach(async (G) => {
											await G.undo();
										});
									});
								},
								redo: async () => {
									H.forEach(async (V) => {
										V.forEach(async (G) => {
											await G.redo();
										});
									});
								},
							});
					}
					resetToIdleState() {
						(this.a = A.Idle),
							this.q.set(A.Idle),
							this.n.set(!1),
							this.I(),
							this.c.forEach((x) => {
								this.N(x), x.cellViewModel.setSelections([x.initialSelection]);
							}),
							this.h.clear(),
							this.j.clear(),
							this.m.clear(),
							(this.c = []);
					}
					async findAndTrackNextSelection(x) {
						if (this.a === A.Idle) {
							const H = x.textModel;
							if (!H) return;
							const q = x.getSelections()[0],
								V = this.O(q, H);
							if (!V) return;
							this.b = V.word;
							const G = new r.$kL(
								q.startLineNumber,
								V.startColumn,
								q.startLineNumber,
								V.endColumn,
							);
							if (
								(x.setSelections([G]),
								(this.g = this.r.activeCellAndCodeEditor),
								!this.g || this.g[0].handle !== x.handle)
							)
								throw new Error(
									"Active cell is not the same as the cell passed as context",
								);
							if (!(this.g[1] instanceof m.$rwb))
								throw new Error(
									"Active cell is not an instance of CodeEditorWidget",
								);
							H.pushStackElement(), (this.c = []);
							const K = this.J(this.g[0]),
								J = {
									cellViewModel: x,
									initialSelection: q,
									wordSelections: [G],
									config: K,
									decorationIds: [],
									undoRedoHistory: this.z.getElements(x.uri),
								};
							this.c.push(J),
								this.L(J),
								this.n.set(!0),
								(this.a = A.Selecting),
								this.q.set(A.Selecting),
								this.f.fire();
						} else if (this.a === A.Selecting) {
							const H = this.r.textModel;
							if (!H) return;
							const q = this.r.getCellIndex(x);
							if (q === void 0) return;
							const V = H.findNextMatch(
								this.b,
								{
									cellIndex: q,
									position: x
										.getSelections()
										[x.getSelections().length - 1].getEndPosition(),
								},
								!1,
								!0,
								u.$SK,
							);
							if (!V) return;
							const G = this.r.getCellByHandle(V.cell.handle);
							if (!G) return;
							let K;
							if (V.cell.handle !== x.handle) {
								await this.r.revealRangeInViewAsync(G, V.match.range),
									this.r.focusNotebookCell(G, "editor");
								const J = G.getSelections()[0],
									W = r.$kL.fromRange(V.match.range, r.SelectionDirection.LTR);
								if (
									(G.setSelections([W]),
									(this.g = this.r.activeCellAndCodeEditor),
									!this.g || !(this.g[1] instanceof m.$rwb))
								)
									throw new Error(
										"Active cell is not an instance of CodeEditorWidget",
									);
								(await G.resolveTextModel()).pushStackElement(),
									(K = {
										cellViewModel: G,
										initialSelection: J,
										wordSelections: [W],
										config: this.J(this.g[0]),
										decorationIds: [],
										undoRedoHistory: this.z.getElements(G.uri),
									}),
									this.c.push(K),
									this.f.fire();
							} else
								(K = this.c.find(
									(J) => J.cellViewModel.handle === V.cell.handle,
								)),
									K.wordSelections.push(
										r.$kL.fromRange(V.match.range, r.SelectionDirection.LTR),
									),
									G.setSelections(K.wordSelections);
							this.L(K);
						}
					}
					async deleteLeft() {
						this.c.forEach((x) => {
							const H = this.m.get(x.cellViewModel.uri);
							if (!H) return;
							const [, q] = h.$Etb.deleteLeft(
									H.getPrevEditOperationType(),
									H.context.cursorConfig,
									H.context.model,
									H.getSelections(),
									H.getAutoClosedCharacters(),
								),
								V = a.$awb.executeCommands(
									H.context.model,
									H.getSelections(),
									q,
								);
							V &&
								H.setSelections(
									new f.$Xvb(),
									void 0,
									V,
									n.CursorChangeReason.Explicit,
								);
						});
					}
					async undo() {
						const x = [];
						for (const H of this.c) {
							const q = await H.cellViewModel.resolveTextModel();
							q && x.push(q);
						}
						await Promise.all(x.map((H) => H.undo()));
					}
					async redo() {
						const x = [];
						for (const H of this.c) {
							const q = await H.cellViewModel.resolveTextModel();
							q && x.push(q);
						}
						await Promise.all(x.map((H) => H.redo()));
					}
					J(x) {
						const q = new P.$J3b(
							this.r.getBaseCellEditorOptions(x.language),
							this.r.notebookOptions,
							this.y,
						).getUpdatedValue(x.internalMetadata, x.uri);
						return new d.$ssb(!1, s.$XX.EditorContent, q, null, this.w);
					}
					L(x) {
						const H = [];
						x.wordSelections.forEach((q) => {
							H.push({
								range: q,
								options: {
									description: "",
									className: "nb-multicursor-selection",
								},
							});
						}),
							(x.decorationIds = x.cellViewModel.deltaModelDecorations(
								x.decorationIds,
								H,
							));
					}
					M() {
						this.c.forEach((x) => {
							if (this.r.getCellIndex(x.cellViewModel) === void 0) return;
							const q = this.m.get(x.cellViewModel.uri);
							if (!q) return;
							const G = q
								.getSelections()
								?.map((K) => ({
									range: K,
									options: {
										description: "",
										className: "nb-multicursor-selection",
									},
								}));
							x.decorationIds = x.cellViewModel.deltaModelDecorations(
								x.decorationIds,
								G ?? [],
							);
						});
					}
					N(x) {
						x.decorationIds = x.cellViewModel.deltaModelDecorations(
							x.decorationIds,
							[],
						);
					}
					O(x, H) {
						const q = x.startLineNumber,
							V = x.startColumn;
						return H.isDisposed()
							? null
							: H.getWordAtPosition({ lineNumber: q, column: V });
					}
					dispose() {
						super.dispose(),
							this.h.dispose(),
							this.j.dispose(),
							this.c.forEach((x) => {
								this.N(x);
							}),
							(this.c = []);
					}
				};
				(e.$AGc = R),
					(e.$AGc = R =
						Ne(
							[
								j(1, y.$6j),
								j(2, o.$MO),
								j(3, g.$aN),
								j(4, b.$XK),
								j(5, l.$gj),
								j(6, v.$GN),
							],
							R,
						));
				class O extends S.$x5b {
					constructor() {
						super({
							id: N,
							title: (0, t.localize)(7778, null),
							keybinding: {
								when: y.$Kj.and(
									y.$Kj.equals("config.notebook.multiSelect.enabled", !0),
									k.$mJb,
									k.$FJb,
								),
								primary: w.KeyMod.CtrlCmd | w.KeyCode.KeyD,
								weight: $.KeybindingWeight.WorkbenchContrib,
							},
						});
					}
					async runWithContext(x, H) {
						const q = x.get(L.$IY),
							V = (0, I.$eJb)(q.activeEditorPane);
						if (!V || !H.cell) return;
						V.getContribution(R.id).findAndTrackNextSelection(H.cell);
					}
				}
				class B extends S.$x5b {
					constructor() {
						super({
							id: "noteMultiCursor.exit",
							title: (0, t.localize)(7779, null),
							keybinding: {
								when: y.$Kj.and(
									y.$Kj.equals("config.notebook.multiSelect.enabled", !0),
									k.$mJb,
									e.$zGc.IsNotebookMultiSelect,
								),
								primary: w.KeyCode.Escape,
								weight: $.KeybindingWeight.WorkbenchContrib,
							},
						});
					}
					async runWithContext(x, H) {
						const q = x.get(L.$IY),
							V = (0, I.$eJb)(q.activeEditorPane);
						if (!V) return;
						V.getContribution(R.id).resetToIdleState();
					}
				}
				class U extends S.$x5b {
					constructor() {
						super({
							id: "noteMultiCursor.deleteLeft",
							title: (0, t.localize)(7780, null),
							keybinding: {
								when: y.$Kj.and(
									y.$Kj.equals("config.notebook.multiSelect.enabled", !0),
									k.$mJb,
									e.$zGc.IsNotebookMultiSelect,
									y.$Kj.or(
										e.$zGc.NotebookMultiSelectState.isEqualTo(A.Selecting),
										e.$zGc.NotebookMultiSelectState.isEqualTo(A.Editing),
									),
								),
								primary: w.KeyCode.Backspace,
								weight: $.KeybindingWeight.WorkbenchContrib,
							},
						});
					}
					async runWithContext(x, H) {
						const q = x.get(L.$IY),
							V = (0, I.$eJb)(q.activeEditorPane);
						if (!V) return;
						V.getContribution(R.id).deleteLeft();
					}
				}
				let z = class extends E.$1c {
					static {
						this.ID = "workbench.contrib.notebook.multiCursorUndoRedo";
					}
					constructor(x, H) {
						if (
							(super(),
							(this.a = x),
							(this.b = H),
							!this.b.getValue("notebook.multiSelect.enabled"))
						)
							return;
						const q = 10005;
						this.D(
							D.$stb.addImplementation(
								q,
								"notebook-multicursor-undo-redo",
								() => {
									const V = (0, I.$eJb)(this.a.activeEditorPane);
									return !V || !V.hasModel()
										? !1
										: V.getContribution(R.id).undo();
								},
								y.$Kj.and(
									y.$Kj.equals("config.notebook.multiSelect.enabled", !0),
									k.$mJb,
									e.$zGc.IsNotebookMultiSelect,
								),
							),
						),
							this.D(
								D.$ttb.addImplementation(
									q,
									"notebook-multicursor-undo-redo",
									() => {
										const V = (0, I.$eJb)(this.a.activeEditorPane);
										return !V || !V.hasModel()
											? !1
											: V.getContribution(R.id).redo();
									},
									y.$Kj.and(
										y.$Kj.equals("config.notebook.multiSelect.enabled", !0),
										k.$mJb,
										e.$zGc.IsNotebookMultiSelect,
									),
								),
							);
					}
				};
				(z = Ne([j(0, L.$IY), j(1, l.$gj)], z)),
					(0, T.$PKb)(R.id, R),
					(0, s.$4X)(O),
					(0, s.$4X)(B),
					(0, s.$4X)(U),
					(0, M.$s6)(z.ID, z, M.WorkbenchPhase.BlockRestore);
			},
		),
		define(
			de[3498],
			he([1, 0, 7, 14, 26, 4, 39, 108, 294]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$73b = void 0),
					(t = mt(t));
				const r = t.$;
				let u = class extends m.$A1b {
					constructor(h, c, n) {
						super(), (this.a = h);
						const g = t.$fhb(c, r("span.expandOutputPlaceholder"));
						g.textContent = (0, E.localize)(8203, null);
						const p = t.$fhb(c, r("span.expandOutputIcon"));
						p.classList.add(...w.ThemeIcon.asClassNameArray(i.$ak.more));
						const o = n.lookupKeybinding(d.$_Ib);
						o &&
							((g.title = (0, E.localize)(8204, null, o.getLabel())),
							(c.title = (0, E.localize)(8205, null, o.getLabel()))),
							t.hide(c),
							this.D(t.$0fb(p, t.$$gb.CLICK, () => this.b())),
							this.D(t.$0fb(c, t.$$gb.DBLCLICK, () => this.b()));
					}
					b() {
						!this.c ||
							!this.c ||
							this.a.textModel.cells.indexOf(this.c.model) < 0 ||
							(this.c.isOutputCollapsed = !this.c.isOutputCollapsed);
					}
				};
				(e.$73b = u), (e.$73b = u = Ne([j(2, C.$uZ)], u));
			},
		),
		define(
			de[3499],
			he([1, 0, 7, 14, 26, 4, 1031, 108, 294, 284, 190, 70, 3]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$93b = void 0),
					(t = mt(t));
				let c = class extends m.$A1b {
					constructor(g, p, o) {
						super(),
							(this.g = g),
							(this.h = p),
							(this.j = o),
							(this.a = this.D(new h.$2c())),
							(this.b = this.D(new h.$2c()));
					}
					didRenderCell(g) {
						this.m(g);
					}
					m(g) {
						if (!this.g.hasModel()) {
							this.b.clear(), this.a.clear();
							return;
						}
						if (
							g.isInputCollapsed ||
							g.getEditState() === d.CellEditState.Editing
						)
							this.b.clear(), this.a.clear(), t.hide(this.h);
						else if (g.foldingState === d.CellFoldingState.Collapsed) {
							const p = this.g.getViewModel().getCellIndex(g),
								o = this.g.getViewModel().getFoldedLength(p),
								f = this.r({ start: p, end: p + o + 1 });
							f
								? t.$hhb(this.h, f, this.n(o), this.q(g))
								: t.$hhb(this.h, this.n(o), this.q(g)),
								t.show(this.h);
							const b = g.layoutInfo.previewHeight;
							this.h.style.top = `${b}px`;
						} else this.b.clear(), this.a.clear(), t.hide(this.h);
					}
					n(g) {
						const p =
							g === 1
								? (0, E.localize)(8206, null)
								: (0, E.localize)(8207, null, g);
						return t.$("span.notebook-folded-hint-label", void 0, p);
					}
					q(g) {
						const p = t.$("span.cell-expand-part-button");
						return (
							p.classList.add(...w.ThemeIcon.asClassNameArray(i.$ak.more)),
							this.D(
								t.$0fb(p, t.$$gb.CLICK, () => {
									const o = this.g.getContribution(C.$83b.id),
										f = this.g.getCellIndex(g);
									typeof f == "number" &&
										o.setFoldingStateDown(f, d.CellFoldingState.Expanded, 1);
								}),
							),
							p
						);
					}
					r(g) {
						const p = t.$("span.folded-cell-run-section-button"),
							o = this.g.getCellsInRange(g);
						if (!o.some((l) => l.cellKind === a.CellKind.Code)) return;
						const s = o.some((l) => {
							const y = this.j.getCellExecution(l.uri);
							return y && y.state === a.NotebookCellExecutionState.Executing;
						})
							? w.ThemeIcon.modify(r.$jOb, "spin")
							: i.$ak.play;
						return (
							p.classList.add(...w.ThemeIcon.asClassNameArray(s)),
							(this.a.value = t.$0fb(p, t.$$gb.CLICK, () => {
								this.g.executeNotebookCells(o);
							})),
							(this.b.value = this.j.onDidChangeExecution(() => {
								const y = o.some(($) => {
									const v = this.j.getCellExecution($.uri);
									return (
										v && v.state === a.NotebookCellExecutionState.Executing
									);
								})
									? w.ThemeIcon.modify(r.$jOb, "spin")
									: i.$ak.play;
								(p.className = ""),
									p.classList.add(
										"folded-cell-run-section-button",
										...w.ThemeIcon.asClassNameArray(y),
									);
							})),
							p
						);
					}
					updateInternalLayoutNow(g) {
						this.m(g);
					}
				};
				(e.$93b = c), (e.$93b = c = Ne([j(2, u.$d6)], c));
			},
		),
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
		
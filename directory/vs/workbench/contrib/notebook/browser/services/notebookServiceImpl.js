define(
			de[4091],
			he([
				1, 0, 4, 50, 163, 6, 103, 149, 3, 59, 23, 19, 28, 9, 91, 10, 22, 5, 21,
				282, 3471, 1305, 3479, 70, 360, 509, 3505, 1849, 161, 231, 53, 404, 68,
				834, 711, 76, 1319,
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
			) {
				"use strict";
				var B, U;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6Ec = e.$5Ec = e.$4Ec = void 0);
				let z = class extends m.$1c {
					static {
						B = this;
					}
					static {
						this.c = "notebookEditors";
					}
					static {
						this.f = "editors";
					}
					constructor(V, G, K, J, W, X, Y, ie, ne) {
						super(),
							(this.n = K),
							(this.q = J),
							(this.s = W),
							(this.t = X),
							(this.u = Y),
							(this.w = ie),
							(this.y = ne),
							(this.h = !1),
							(this.j = new Map()),
							(this.m = this.D(new m.$Zc())),
							(this.g = new b.$eEb(B.c, V));
						const ee = this.g.getMemento(
							f.StorageScope.PROFILE,
							f.StorageTarget.MACHINE,
						);
						this.n.bufferChangeEvents(() => {
							for (const _ of ee[B.f] || []) this.add(new T.$LIb(_), !1);
						}),
							this.D(
								G.onDidRegisterExtensions(() => {
									this.h || (this.G(), (ee[B.f] = []), this.g.saveMemento());
								}),
							),
							s.$oEc.setHandler((_) => this.z(_));
					}
					dispose() {
						this.G(), super.dispose();
					}
					z(V) {
						this.h = !0;
						const G = [...this.j.values()].filter((W) => !W.extension);
						this.G();
						const K = new Map();
						G.forEach((W) => {
							K.set(W.id, this.add(W));
						});
						for (const W of V)
							for (const X of W.value) {
								if (!X.type) {
									W.collector.error("Notebook does not specify type-property");
									continue;
								}
								const Y = this.get(X.type);
								if (Y)
									if (
										!Y.extension &&
										W.description.isBuiltin &&
										G.find((ie) => ie.id === X.type)
									)
										K.get(X.type)?.dispose();
									else {
										W.collector.error(`Notebook type '${X.type}' already used`);
										continue;
									}
								this.add(
									new T.$LIb({
										extension: W.description.identifier,
										id: X.type,
										displayName: X.displayName,
										selectors: X.selector || [],
										priority: this.C(X.priority),
										providerDisplayName:
											W.description.displayName ??
											W.description.identifier.value,
									}),
								);
							}
						const J = this.g.getMemento(
							f.StorageScope.PROFILE,
							f.StorageTarget.MACHINE,
						);
						(J[B.f] = Array.from(this.j.values())), this.g.saveMemento();
					}
					clearEditorCache() {
						const V = this.g.getMemento(
							f.StorageScope.PROFILE,
							f.StorageTarget.MACHINE,
						);
						(V[B.f] = []), this.g.saveMemento();
					}
					C(V) {
						return !V || V === $.NotebookEditorPriority.default
							? k.RegisteredEditorPriority.default
							: k.RegisteredEditorPriority.option;
					}
					F(V) {
						const G = new m.$Zc();
						for (const K of V.selectors) {
							const J = K.include || K,
								W = {
									id: V.id,
									label: V.displayName,
									detail: V.providerDisplayName,
									priority: V.priority,
								},
								X = {
									canHandleDiff: () =>
										!!this.q.getValue($.$56.textDiffEditorPreview) &&
										!this.s.isScreenReaderOptimized(),
									canSupportResource: (Q) =>
										Q.scheme === u.Schemas.untitled ||
										Q.scheme === u.Schemas.vscodeNotebookCell ||
										this.u.hasProvider(Q),
								},
								Y = ({ resource: Q, options: Z }) => {
									const se = $.CellUri.parse(Q);
									let re,
										le,
										oe = Q;
									se
										? ((re = this.y.asCanonicalUri(se.notebook)),
											(oe = se.notebook),
											(le = { resource: Q, options: Z }))
										: (re = this.y.asCanonicalUri(Q)),
										le || (le = Z?.cellOptions);
									const ae = { ...Z, cellOptions: le, viewState: void 0 };
									return {
										editor: v.$TIb.getOrCreate(this.t, re, oe, V.id),
										options: ae,
									};
								},
								ie = async ({ resource: Q, options: Z }) => {
									const se = await this.w.resolve(
										{ untitledResource: Q },
										V.id,
									);
									return (
										se.object.notebook.onWillDispose(() => {
											se.dispose();
										}),
										{
											editor: v.$TIb.getOrCreate(
												this.t,
												se.object.resource,
												void 0,
												V.id,
											),
											options: Z,
										}
									);
								},
								ne = (Q, Z) => {
									const {
										modified: se,
										original: re,
										label: le,
										description: oe,
									} = Q;
									return this.q.getValue(
										"notebook.experimental.enableNewDiffEditor",
									)
										? {
												editor: O.$2Ec.create(
													this.t,
													se.resource,
													le,
													oe,
													re.resource,
													V.id,
												),
											}
										: {
												editor: l.$rEc.create(
													this.t,
													se.resource,
													le,
													oe,
													re.resource,
													V.id,
												),
											};
								},
								_ = {
									createEditorInput: Y,
									createDiffEditorInput: ne,
									createUntitledEditorInput: ie,
									createMergeEditorInput: (Q) => ({
										editor: this.t.createInstance(
											A.$Enc,
											Q.base.resource,
											{
												uri: Q.input1.resource,
												title: Q.input1.label ?? (0, a.$kh)(Q.input1.resource),
												description: Q.input1.description ?? "",
												detail: Q.input1.detail,
											},
											{
												uri: Q.input2.resource,
												title: Q.input2.label ?? (0, a.$kh)(Q.input2.resource),
												description: Q.input2.description ?? "",
												detail: Q.input2.detail,
											},
											Q.result.resource,
										),
									}),
								},
								te = { createEditorInput: Y, createDiffEditorInput: ne };
							G.add(
								this.q.onDidChangeConfiguration((Q) => {
									Q.affectsConfiguration($.$56.textDiffEditorPreview) &&
										(!!this.q.getValue($.$56.textDiffEditorPreview) &&
										!this.s.isScreenReaderOptimized()
											? ((_.createDiffEditorInput = ne),
												(te.createDiffEditorInput = ne))
											: ((_.createDiffEditorInput = void 0),
												(te.createDiffEditorInput = void 0)));
								}),
							),
								G.add(
									this.s.onDidChangeScreenReaderOptimized(() => {
										!!this.q.getValue($.$56.textDiffEditorPreview) &&
										!this.s.isScreenReaderOptimized()
											? ((_.createDiffEditorInput = ne),
												(te.createDiffEditorInput = ne))
											: ((_.createDiffEditorInput = void 0),
												(te.createDiffEditorInput = void 0));
									}),
								),
								G.add(this.n.registerEditor(J, W, X, _)),
								G.add(
									this.n.registerEditor(
										`${u.Schemas.vscodeNotebookCell}:/**/${J}`,
										{ ...W, priority: k.RegisteredEditorPriority.exclusive },
										X,
										te,
									),
								);
						}
						return G;
					}
					G() {
						this.j.clear(), this.m.clear();
					}
					get(V) {
						return this.j.get(V);
					}
					add(V, G = !0) {
						if (this.j.has(V.id))
							throw new Error(`notebook type '${V.id}' ALREADY EXISTS`);
						this.j.set(V.id, V);
						let K;
						if ((V.extension && ((K = this.F(V)), this.m.add(K)), G)) {
							const J = this.g.getMemento(
								f.StorageScope.PROFILE,
								f.StorageTarget.MACHINE,
							);
							(J[B.f] = Array.from(this.j.values())), this.g.saveMemento();
						}
						return this.D(
							(0, m.$Yc)(() => {
								const J = this.g.getMemento(
									f.StorageScope.PROFILE,
									f.StorageTarget.MACHINE,
								);
								(J[B.f] = Array.from(this.j.values())),
									this.g.saveMemento(),
									K?.dispose(),
									this.j.delete(V.id);
							}),
						);
					}
					getContributedNotebook(V) {
						const G = [];
						for (const K of this.j.values()) K.matches(V) && G.push(K);
						return G.length === 0 && V.scheme === u.Schemas.untitled
							? Array.from(this.j.values())
							: G;
					}
					[Symbol.iterator]() {
						return this.j.values();
					}
				};
				(e.$4Ec = z),
					(e.$4Ec =
						z =
						B =
							Ne(
								[
									j(0, f.$lq),
									j(1, L.$q2),
									j(2, k.$E6),
									j(3, g.$gj),
									j(4, n.$XK),
									j(5, o.$Li),
									j(6, p.$ll),
									j(7, S.$OIb),
									j(8, M.$Vl),
								],
								z,
							));
				let F = class {
					constructor(V) {
						(this.c = new Map()),
							(this.f = new d.$Y(() =>
								this.d.getMemento(
									f.StorageScope.WORKSPACE,
									f.StorageTarget.MACHINE,
								),
							)),
							(this.d = new b.$eEb(
								"workbench.editor.notebook.preferredRenderer2",
								V,
							));
					}
					clear() {
						this.c.clear();
					}
					get(V) {
						return this.c.get(V);
					}
					getAll() {
						return Array.from(this.c.values());
					}
					add(V) {
						this.c.has(V.id) || this.c.set(V.id, V);
					}
					setPreferred(V, G, K) {
						const J = this.f.value,
							W = J[V.id];
						W ? (W[G] = K) : (J[V.id] = { [G]: K }), this.d.saveMemento();
					}
					findBestRenderers(V, G, K) {
						let J;
						(function (ne) {
							(ne[(ne.PreviouslySelected = 256)] = "PreviouslySelected"),
								(ne[(ne.SameExtensionAsNotebook = 512)] =
									"SameExtensionAsNotebook"),
								(ne[(ne.OtherRenderer = 768)] = "OtherRenderer"),
								(ne[(ne.BuiltIn = 1024)] = "BuiltIn");
						})(J || (J = {}));
						const W = V && this.f.value[V.id]?.[G],
							X = V?.extension?.value,
							Y = V?.id,
							ie = Array.from(this.c.values())
								.map((ne) => {
									const ee =
										K === void 0
											? ne.matchesWithoutKernel(G)
											: ne.matches(G, K);
									if (ee === $.NotebookRendererMatch.Never) return;
									const _ = ne.extensionId.value,
										te =
											W === ne.id
												? J.PreviouslySelected
												: _ === X || $.$W6.get(_)?.has(Y)
													? J.SameExtensionAsNotebook
													: ne.isBuiltin
														? J.BuiltIn
														: J.OtherRenderer;
									return {
										ordered: { mimeType: G, rendererId: ne.id, isTrusted: !0 },
										score: te | ee,
									};
								})
								.filter(h.$tg);
						return ie.length === 0
							? [{ mimeType: G, rendererId: $.$X6, isTrusted: !0 }]
							: ie
									.sort((ne, ee) => ne.score - ee.score)
									.map((ne) => ne.ordered);
					}
				};
				(e.$5Ec = F), (e.$5Ec = F = Ne([j(0, f.$lq)], F));
				class x {
					get uri() {
						return this.model.uri;
					}
					constructor(V, G) {
						(this.model = V),
							(this.c = new m.$Zc()),
							this.c.add(V.onWillDispose(() => G(V)));
					}
					getCellIndex(V) {
						return this.model.cells.findIndex((G) => (0, a.$gh)(G.uri, V));
					}
					dispose() {
						this.c.dispose();
					}
				}
				let H = class extends m.$1c {
					static {
						U = this;
					}
					static {
						this.c = "notebook.viewTypeProvider";
					}
					get m() {
						return (
							this.j || (this.j = this.D(this.O.createInstance(z))), this.j
						);
					}
					constructor(V, G, K, J, W, X) {
						super(),
							(this.L = V),
							(this.M = G),
							(this.N = K),
							(this.O = J),
							(this.P = W),
							(this.Q = X),
							(this.h = new Map()),
							(this.j = void 0),
							(this.n = this.O.createInstance(F)),
							(this.q = this.D(new E.$re())),
							(this.onDidChangeOutputRenderers = this.q.event),
							(this.s = new Set()),
							(this.t = new r.$Gc()),
							(this.u = this.D(new E.$re())),
							(this.w = this.D(new E.$re())),
							(this.y = this.D(new E.$re())),
							(this.z = this.D(new E.$re())),
							(this.onWillAddNotebookDocument = this.u.event),
							(this.onDidAddNotebookDocument = this.w.event),
							(this.onDidRemoveNotebookDocument = this.z.event),
							(this.onWillRemoveNotebookDocument = this.y.event),
							(this.C = this.D(new E.$re())),
							(this.onAddViewType = this.C.event),
							(this.F = this.D(new E.$re())),
							(this.onWillRemoveViewType = this.F.event),
							(this.G = this.D(new E.$re())),
							(this.onDidChangeEditorTypes = this.G.event),
							(this.I = !0),
							s.$pEc.setHandler((ie) => {
								this.n.clear();
								for (const ne of ie)
									for (const ee of ne.value) {
										if (!ee.entrypoint) {
											ne.collector.error(
												"Notebook renderer does not specify entry point",
											);
											continue;
										}
										const _ = ee.id;
										if (!_) {
											ne.collector.error(
												"Notebook renderer does not specify id-property",
											);
											continue;
										}
										this.n.add(
											new I.$sEc({
												id: _,
												extension: ne.description,
												entrypoint: ee.entrypoint,
												displayName: ee.displayName,
												mimeTypes: ee.mimeTypes || [],
												dependencies: ee.dependencies,
												optionalDependencies: ee.optionalDependencies,
												requiresMessaging: ee.requiresMessaging,
											}),
										);
									}
								this.q.fire();
							}),
							s.$qEc.setHandler((ie) => {
								this.s.clear();
								for (const ne of ie)
									if (
										(0, L.$t2)(ne.description, "contribNotebookStaticPreloads")
									)
										for (const ee of ne.value) {
											if (!ee.entrypoint) {
												ne.collector.error(
													"Notebook preload does not specify entry point",
												);
												continue;
											}
											const _ = ee.type;
											if (!_) {
												ne.collector.error(
													"Notebook preload does not specify type-property",
												);
												continue;
											}
											this.s.add(
												new I.$tEc({
													type: _,
													extension: ne.description,
													entrypoint: ee.entrypoint,
													localResourceRoots: ee.localResourceRoots ?? [],
												}),
											);
										}
							});
						const Y = () => {
							this.J = new $.$Y6(
								this.M.getValue($.$56.displayOrder) || [],
								this.N.isScreenReaderOptimized() ? $.$V6 : $.$U6,
							);
						};
						Y(),
							this.D(
								this.M.onDidChangeConfiguration((ie) => {
									ie.affectsConfiguration($.$56.displayOrder) && Y();
								}),
							),
							this.D(
								this.N.onDidChangeScreenReaderOptimized(() => {
									Y();
								}),
							),
							(this.f = new b.$eEb(U.c, this.P)),
							(this.g = this.f.getMemento(
								f.StorageScope.WORKSPACE,
								f.StorageTarget.MACHINE,
							));
					}
					getEditorTypes() {
						return [...this.m].map((V) => ({
							id: V.id,
							displayName: V.displayName,
							providerDisplayName: V.providerDisplayName,
						}));
					}
					clearEditorCache() {
						this.m.clearEditorCache();
					}
					R(V) {
						this.L.activateByEvent(`onNotebook:${V}`),
							this.L.activateByEvent("onNotebook:*");
					}
					async canResolve(V) {
						return this.h.has(V)
							? !0
							: (await this.L.whenInstalledExtensionsRegistered(),
								await this.L.activateByEvent(`onNotebookSerializer:${V}`),
								this.h.has(V));
					}
					registerContributedNotebookType(V, G) {
						const K = new T.$LIb({
							extension: G.extension,
							id: V,
							displayName: G.displayName,
							providerDisplayName: G.providerDisplayName,
							priority: G.priority || k.RegisteredEditorPriority.default,
							selectors: [],
						});
						K.update({ selectors: G.filenamePattern });
						const J = this.m.add(K);
						return (
							this.G.fire(),
							(0, m.$Yc)(() => {
								J.dispose(), this.G.fire();
							})
						);
					}
					S(V, G) {
						if (this.h.has(V))
							throw new Error(
								`notebook provider for viewtype '${V}' already exists`,
							);
						return (
							this.h.set(V, G),
							this.C.fire(V),
							(0, m.$Yc)(() => {
								this.F.fire(V), this.h.delete(V);
							})
						);
					}
					registerNotebookSerializer(V, G, K) {
						return (
							this.m.get(V)?.update({ options: K.options }),
							(this.g[V] = G.id.value),
							this.U(),
							this.S(V, new P.$NIb(V, K, G))
						);
					}
					async withNotebookDataProvider(V) {
						const G = this.m.get(V);
						if (!G) {
							const J = this.getViewTypeProvider(V),
								W = J
									? [
											(0, i.$wj)({
												id: "workbench.notebook.action.installMissingViewType",
												label: (0, t.localize)(8183, null, V),
												run: async () => {
													await this.O.createInstance(D.$KTb, J).run();
												},
											}),
										]
									: [];
							throw (0, w.$zj)(`UNKNOWN notebook type '${V}'`, W);
						}
						await this.canResolve(G.id);
						const K = this.h.get(G.id);
						if (!K)
							throw new Error(
								`NO provider registered for view type: '${G.id}'`,
							);
						return K;
					}
					tryGetDataProviderSync(V) {
						const G = this.m.get(V);
						if (G) return this.h.get(G.id);
					}
					U() {
						this.f.saveMemento();
					}
					getViewTypeProvider(V) {
						return this.g[V];
					}
					getRendererInfo(V) {
						return this.n.get(V);
					}
					updateMimePreferredRenderer(V, G, K, J) {
						const W = this.m.get(V);
						W && this.n.setPreferred(W, G, K), this.J.prioritize(G, J);
					}
					saveMimeDisplayOrder(V) {
						this.M.updateValue($.$56.displayOrder, this.J.toArray(), V);
					}
					getRenderers() {
						return this.n.getAll();
					}
					*getStaticPreloads(V) {
						for (const G of this.s) G.type === V && (yield G);
					}
					async createNotebookTextModel(V, G, K) {
						if (this.t.has(G))
							throw new Error(`notebook for ${G} already exists`);
						const J = await this.withNotebookDataProvider(V);
						if (!(J instanceof P.$NIb))
							throw new Error("CANNOT open file notebook with this provider");
						const W = K ? await (0, R.$6e)(K) : R.$Te.fromByteArray([]),
							X = await J.serializer.dataToNotebook(W),
							Y = this.O.createInstance(
								y.$b6,
								J.viewType,
								G,
								X.cells,
								X.metadata,
								J.serializer.options,
							),
							ie = new x(Y, this.W.bind(this));
						return (
							this.t.set(G, ie),
							this.Q.addNotebookDocument(ie),
							this.u.fire(Y),
							this.w.fire(Y),
							this.R(J.viewType),
							Y
						);
					}
					getNotebookTextModel(V) {
						return this.t.get(V)?.model;
					}
					getNotebookTextModels() {
						return C.Iterable.map(this.t.values(), (V) => V.model);
					}
					listNotebookDocuments() {
						return [...this.t].map((V) => V[1].model);
					}
					W(V) {
						const G = this.t.get(V.uri);
						G &&
							(this.y.fire(G.model),
							this.t.delete(V.uri),
							this.Q.removeNotebookDocument(G),
							G.dispose(),
							this.z.fire(G.model));
					}
					getOutputMimeTypeInfo(V, G, K) {
						const J = this.J.sort(new Set(K.outputs.map((X) => X.mime))),
							W = this.m.get(V.viewType);
						return J.flatMap((X) => this.n.findBestRenderers(W, X, G)).sort(
							(X, Y) =>
								(X.rendererId === $.$X6 ? 1 : 0) -
								(Y.rendererId === $.$X6 ? 1 : 0),
						);
					}
					getContributedNotebookTypes(V) {
						return V ? this.m.getContributedNotebook(V) : [...this.m];
					}
					getContributedNotebookType(V) {
						return this.m.get(V);
					}
					getNotebookProviderResourceRoots() {
						const V = [];
						return (
							this.h.forEach((G) => {
								G.extensionData.location &&
									V.push(c.URI.revive(G.extensionData.location));
							}),
							V
						);
					}
					setToCopy(V, G) {
						(this.H = V), (this.I = G);
					}
					getToCopy() {
						if (this.H) return { items: this.H, isCopy: this.I };
					}
				};
				(e.$6Ec = H),
					(e.$6Ec =
						H =
						U =
							Ne(
								[
									j(0, L.$q2),
									j(1, g.$gj),
									j(2, n.$XK),
									j(3, o.$Li),
									j(4, f.$lq),
									j(5, N.$I6),
								],
								H,
							));
			},
		),
		
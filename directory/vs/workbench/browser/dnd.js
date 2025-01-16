define(
			de[362],
			he([
				1, 0, 323, 7, 24, 489, 6, 3, 197, 266, 23, 12, 19, 9, 347, 22, 5, 73,
				41, 30, 25, 256, 44, 18, 87, 85, 449, 75, 2224,
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
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$VSb =
						e.$TSb =
						e.$SSb =
						e.$RSb =
						e.$QSb =
						e.$OSb =
						e.$MSb =
						e.$LSb =
							void 0),
					(e.$NSb = D),
					(e.$PSb = N),
					(e.$USb = U),
					(e.$WSb = H);
				class k {
					constructor(V) {
						this.identifier = V;
					}
				}
				e.$LSb = k;
				class L {
					constructor(V) {
						this.identifier = V;
					}
				}
				e.$MSb = L;
				async function D(q) {
					const V = [],
						G = r.$EK.uriList.toLowerCase();
					if (q.has(G))
						try {
							const K = await q.get(G)?.asString(),
								J = JSON.stringify(E.$ZL.parse(K ?? ""));
							V.push(...(0, n.$kzb)(J));
						} catch {}
					return V;
				}
				let M = class {
					constructor(V, G, K, J, W, X, Y, ie) {
						(this.a = V),
							(this.b = G),
							(this.c = K),
							(this.d = J),
							(this.f = W),
							(this.g = X),
							(this.h = Y),
							(this.i = ie);
					}
					async handleDrop(V, G, K, J, W) {
						const X = await this.i.invokeFunction((ne) => (0, n.$jzb)(ne, V));
						if (!X.length) return;
						if ((await this.g.focus(G), this.a.allowWorkspaceOpen)) {
							const ne = (0, w.$Lb)(
								X.filter(
									(ee) =>
										ee.allowWorkspaceOpen &&
										ee.resource?.scheme === u.Schemas.file,
								).map((ee) => ee.resource),
							);
							if (ne.length > 0 && (await this.j(ne))) return;
						}
						const Y = (0, w.$Lb)(
							X.filter(
								(ne) => ne.isExternal && ne.resource?.scheme === u.Schemas.file,
							).map((ne) => ne.resource),
						);
						Y.length &&
							this.c.addRecentlyOpened(Y.map((ne) => ({ fileUri: ne })));
						const ie = K?.();
						await this.d.openEditors(
							X.map((ne) => ({
								...ne,
								resource: ne.resource,
								options: { ...ne.options, ...W, pinned: !0 },
							})),
							ie,
							{ validateTrust: !0 },
						),
							J?.(ie);
					}
					async j(V) {
						const G = [],
							K = [];
						return (
							await Promise.all(
								V.map(async (J) => {
									if ((0, s.$fj)(J)) {
										G.push({ workspaceUri: J });
										return;
									}
									try {
										const W = await this.b.stat(J);
										W.isDirectory &&
											(G.push({ folderUri: W.resource }),
											K.push({ uri: W.resource }));
									} catch {}
								}),
							),
							G.length === 0
								? !1
								: (G.length > K.length || K.length === 1
										? await this.g.openWindow(G)
										: (0, s.$bj)(this.h.getWorkspace())
											? await this.f.addFolders(K)
											: await this.f.createAndEnterWorkspace(K),
									!0)
						);
					}
				};
				(e.$OSb = M),
					(e.$OSb = M =
						Ne(
							[
								j(1, g.$ll),
								j(2, l.$cRb),
								j(3, $.$IY),
								j(4, I.$mRb),
								j(5, v.$asb),
								j(6, s.$Vi),
								j(7, p.$Li),
							],
							M,
						));
				function N(q, V, G, K) {
					if (V.length === 0 || !G.dataTransfer) return;
					const J = q.get(S.$kZ),
						W = q.get($.$IY),
						X = q.get(g.$ll),
						Y = q.get(o.$3N),
						ie = (0, w.$Lb)(
							V.map((Q) =>
								c.URI.isUri(Q)
									? { resource: Q }
									: (0, y.$x1)(Q)
										? c.URI.isUri(Q.editor.resource)
											? { resource: Q.editor.resource }
											: void 0
										: Q,
							),
						),
						ne = ie.filter(({ resource: Q }) => X.hasProvider(Q));
					if (!K?.disableStandardTransfer) {
						const Q = a.$l
							? `\r
`
							: `
`;
						G.dataTransfer.setData(
							t.$Ohb.TEXT,
							ne
								.map(({ resource: se }) => Y.getUriLabel(se, { noPrefix: !0 }))
								.join(Q),
						);
						const Z = ne.find(({ isDirectory: se }) => !se);
						if (Z) {
							const se = u.$7g.uriToFileUri(Z.resource);
							se.scheme === u.Schemas.file &&
								G.dataTransfer.setData(
									t.$Ohb.DOWNLOAD_URL,
									[r.$EK.binary, (0, h.$kh)(Z.resource), se.toString()].join(
										":",
									),
								);
						}
					}
					const ee = ne.filter(({ isDirectory: Q }) => !Q);
					ee.length &&
						G.dataTransfer.setData(
							t.$Ohb.RESOURCES,
							JSON.stringify(ee.map(({ resource: Q }) => Q.toString())),
						);
					const _ = b.$Io.as(n.$nzb.DragAndDropContribution).getAll();
					for (const Q of _) Q.setData(ie, G);
					const te = [];
					for (const Q of V) {
						let Z;
						if ((0, y.$x1)(Q)) {
							const se = Q.editor.toUntyped({ preserveViewState: Q.groupId });
							se && (Z = { ...se, resource: y.$A1.getCanonicalUri(se) });
						} else if (c.URI.isUri(Q)) {
							const { selection: se, uri: re } = (0, f.$9rb)(Q);
							Z = { resource: re, options: se ? { selection: se } : void 0 };
						} else Q.isDirectory || (Z = { resource: Q.resource });
						if (Z) {
							{
								const se = Z.resource;
								if (se) {
									const re = J.files.get(se);
									re &&
										(typeof Z.languageId != "string" &&
											(Z.languageId = re.getLanguageId()),
										typeof Z.encoding != "string" &&
											(Z.encoding = re.getEncoding()),
										typeof Z.contents != "string" &&
											re.isDirty() &&
											!re.textEditorModel.isTooLargeForHeapOperation() &&
											(Z.contents = re.textEditorModel.getValue())),
										Z.options?.viewState ||
											(Z.options = {
												...Z.options,
												viewState: (() => {
													for (const le of W.visibleEditorPanes)
														if ((0, h.$gh)(le.input.resource, se)) {
															const oe = le.getViewState();
															if (oe) return oe;
														}
												})(),
											});
								}
							}
							te.push(Z);
						}
					}
					if (te.length) {
						G.dataTransfer.setData(n.$hzb.EDITORS, (0, m.$hi)(te));
						const Q = [];
						for (const Z of te)
							Z.resource
								? Q.push(Z.resource)
								: (0, y.$j1)(Z)
									? Z.modified.resource && Q.push(Z.modified.resource)
									: (0, y.$m1)(Z)
										? Z.primary.resource && Q.push(Z.primary.resource)
										: (0, y.$o1)(Z) && Q.push(Z.result.resource);
						K?.disableStandardTransfer ||
							G.dataTransfer.setData(
								r.$EK.uriList,
								E.$ZL.create(Q.slice(0, 1)),
							),
							G.dataTransfer.setData(t.$Ohb.INTERNAL_URI_LIST, E.$ZL.create(Q));
					}
				}
				class A {
					constructor(V, G) {
						(this.a = V), (this.b = G);
					}
					update(V) {}
					getData() {
						return { type: this.a, id: this.b };
					}
				}
				e.$QSb = A;
				class R {
					constructor(V) {
						this.a = V;
					}
					get id() {
						return this.a;
					}
				}
				e.$RSb = R;
				class O {
					constructor(V) {
						this.a = V;
					}
					get id() {
						return this.a;
					}
				}
				e.$SSb = O;
				class B extends d.$1c {
					static get INSTANCE() {
						return B.a || ((B.a = new B()), (0, d.$Tc)(B.a)), B.a;
					}
					constructor() {
						super(),
							(this.b = n.$ozb.getInstance()),
							(this.c = this.D(new C.$re())),
							(this.f = this.D(new C.$re())),
							this.D(
								this.f.event((V) => {
									const G = V.dragAndDropData.getData().id,
										K = V.dragAndDropData.getData().type;
									this.g(K)?.getData().id === G &&
										this.b.clearData(K === "view" ? O.prototype : R.prototype);
								}),
							);
					}
					g(V) {
						if (this.b.hasData(V === "view" ? O.prototype : R.prototype)) {
							const G = this.b.getData(
								V === "view" ? O.prototype : R.prototype,
							);
							if (G && G[0]) return new A(V, G[0].id);
						}
					}
					h(V, G) {
						this.b.setData(
							[G === "view" ? new O(V) : new R(V)],
							G === "view" ? O.prototype : R.prototype,
						);
					}
					registerTarget(V, G) {
						const K = new d.$Zc();
						return (
							K.add(
								new i.$Hhb(V, {
									onDragEnter: (J) => {
										if ((J.preventDefault(), G.onDragEnter)) {
											const W = this.g("composite") || this.g("view");
											W && G.onDragEnter({ eventData: J, dragAndDropData: W });
										}
									},
									onDragLeave: (J) => {
										const W = this.g("composite") || this.g("view");
										G.onDragLeave &&
											W &&
											G.onDragLeave({ eventData: J, dragAndDropData: W });
									},
									onDrop: (J) => {
										if (G.onDrop) {
											const W = this.g("composite") || this.g("view");
											if (!W) return;
											G.onDrop({ eventData: J, dragAndDropData: W }),
												this.f.fire({ eventData: J, dragAndDropData: W });
										}
									},
									onDragOver: (J) => {
										if ((J.preventDefault(), G.onDragOver)) {
											const W = this.g("composite") || this.g("view");
											if (!W) return;
											G.onDragOver({ eventData: J, dragAndDropData: W });
										}
									},
								}),
							),
							G.onDragStart &&
								this.c.event(
									(J) => {
										G.onDragStart(J);
									},
									this,
									K,
								),
							G.onDragEnd &&
								this.f.event(
									(J) => {
										G.onDragEnd(J);
									},
									this,
									K,
								),
							this.D(K)
						);
					}
					registerDraggable(V, G, K) {
						V.draggable = !0;
						const J = new d.$Zc();
						return (
							J.add(
								new i.$Hhb(V, {
									onDragStart: (W) => {
										const { id: X, type: Y } = G();
										this.h(X, Y),
											W.dataTransfer?.setDragImage(V, 0, 0),
											this.c.fire({ eventData: W, dragAndDropData: this.g(Y) });
									},
									onDragEnd: (W) => {
										const { type: X } = G(),
											Y = this.g(X);
										Y && this.f.fire({ eventData: W, dragAndDropData: Y });
									},
									onDragEnter: (W) => {
										if (K.onDragEnter) {
											const X = this.g("composite") || this.g("view");
											if (!X) return;
											X && K.onDragEnter({ eventData: W, dragAndDropData: X });
										}
									},
									onDragLeave: (W) => {
										const X = this.g("composite") || this.g("view");
										X && K.onDragLeave?.({ eventData: W, dragAndDropData: X });
									},
									onDrop: (W) => {
										if (K.onDrop) {
											const X = this.g("composite") || this.g("view");
											if (!X) return;
											K.onDrop({ eventData: W, dragAndDropData: X }),
												this.f.fire({ eventData: W, dragAndDropData: X });
										}
									},
									onDragOver: (W) => {
										if (K.onDragOver) {
											const X = this.g("composite") || this.g("view");
											if (!X) return;
											K.onDragOver({ eventData: W, dragAndDropData: X });
										}
									},
								}),
							),
							K.onDragStart &&
								this.c.event(
									(W) => {
										K.onDragStart(W);
									},
									this,
									J,
								),
							K.onDragEnd &&
								this.f.event(
									(W) => {
										K.onDragEnd(W);
									},
									this,
									J,
								),
							this.D(J)
						);
					}
				}
				e.$TSb = B;
				function U(q, V, G) {
					q && (q.dropEffect = G ? V : "none");
				}
				let z = class {
					constructor(V, G) {
						(this.a = V), (this.b = G);
					}
					getDragURI(V) {
						const G = this.a(V);
						return G ? G.toString() : null;
					}
					getDragLabel(V) {
						const G = (0, w.$Lb)(V.map(this.a));
						return G.length === 1
							? (0, h.$kh)(G[0])
							: G.length > 1
								? String(G.length)
								: void 0;
					}
					onDragStart(V, G) {
						const K = [];
						for (const J of V.elements) {
							const W = this.a(J);
							W && K.push(W);
						}
						K.length && this.b.invokeFunction((J) => N(J, K, G));
					}
					onDragOver(V, G, K, J, W) {
						return !1;
					}
					drop(V, G, K, J, W) {}
					dispose() {}
				};
				(e.$VSb = z), (e.$VSb = z = Ne([j(1, p.$Li)], z));
				class F extends d.$1c {
					static {
						this.a = "monaco-workbench-global-dragged-over";
					}
					constructor() {
						super(),
							(this.b = this.D(new P.$Efb(F.a))),
							(this.f = !1),
							this.c();
					}
					c() {
						this.D(
							C.Event.runAndSubscribe(
								i.onDidRegisterWindow,
								({ window: V, disposables: G }) => {
									G.add((0, i.$0fb)(V, i.$$gb.DRAG_OVER, () => this.g(!1), !0)),
										G.add(
											(0, i.$0fb)(V, i.$$gb.DRAG_LEAVE, () => this.h(!1), !0),
										);
								},
								{ window: T.$Bfb, disposables: this.B },
							),
						),
							this.D(
								this.b.onDidReceiveData((V) => {
									V === !0 ? this.g(!0) : this.h(!0);
								}),
							);
					}
					get isDraggedOver() {
						return this.f;
					}
					g(V) {
						this.f !== !0 && ((this.f = !0), V || this.b.postData(!0));
					}
					h(V) {
						this.f !== !1 && ((this.f = !1), V || this.b.postData(!1));
					}
				}
				const x = new F();
				function H() {
					return x.isDraggedOver;
				}
			},
		),
		
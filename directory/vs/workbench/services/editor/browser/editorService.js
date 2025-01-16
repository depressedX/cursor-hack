define(
			de[1051],
			he([
				1, 0, 5, 44, 223, 313, 59, 22, 6, 9, 19, 296, 825, 66, 18, 10, 3, 24,
				56, 20, 28, 3257, 15, 25, 249, 68, 231, 174, 87, 1291, 719, 45, 90, 102,
				1706,
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
					(e.$Bdc = void 0);
				let O = class extends p.$1c {
					static {
						R = this;
					}
					constructor(U, z, F, x, H, q, V, G, K, J, W, X, Y, ie) {
						if (
							(super(),
							(this.n = z),
							(this.q = F),
							(this.r = x),
							(this.s = H),
							(this.t = q),
							(this.u = V),
							(this.w = G),
							(this.y = K),
							(this.z = J),
							(this.C = W),
							(this.F = X),
							(this.G = Y),
							(this.H = ie),
							(this.a = this.D(new m.$re())),
							(this.onDidActiveEditorChange = this.a.event),
							(this.b = this.D(new m.$re())),
							(this.onDidVisibleEditorsChange = this.b.event),
							(this.c = this.D(new m.$re())),
							(this.onDidEditorsChange = this.c.event),
							(this.f = this.D(new m.$re())),
							(this.onWillOpenEditor = this.f.event),
							(this.g = this.D(new m.$re())),
							(this.onDidCloseEditor = this.g.event),
							(this.h = this.D(new m.$re())),
							(this.onDidOpenEditorFail = this.h.event),
							(this.j = this.D(new m.$re())),
							(this.onDidMostRecentlyActiveEditorsChange = this.j.event),
							(this.J = void 0),
							(this.P = new C.$Gc()),
							(this.W = !1),
							(this.m = U ?? z),
							(this.$ = this.D(this.q.createInstance(l.$xdc, this.m))),
							this.X(),
							this.I(),
							!R.hasRegisteredActions)
						)
							for (const ne of R.registeredActions)
								ne[1](this.F, this, this.G, this.H);
						R.hasRegisteredActions = !0;
					}
					static {
						this.hasRegisteredActions = !1;
					}
					static {
						this.registeredActions = [];
					}
					static registerEditorAction(U, z) {
						if (this.registeredActions.find(([F, x]) => F === U)) {
							console.error(`Editor action with id ${U} already registered`);
							return;
						}
						this.registeredActions.push([U, z]);
					}
					createScoped(U, z) {
						return z.add(
							new R(
								U === "main" ? this.n.mainPart : U,
								this.n,
								this.q,
								this.r,
								this.s,
								this.t,
								this.u,
								this.w,
								this.y,
								this.z,
								this.C,
								this.F,
								this.G,
								this.H,
							),
						);
					}
					I() {
						this.m === this.n.mainPart || this.m === this.n
							? this.n.whenReady.then(() => this.L())
							: this.L(),
							this.D(this.m.onDidChangeActiveGroup((U) => this.M(U))),
							this.D(this.m.onDidAddGroup((U) => this.O(U))),
							this.D(
								this.$.onDidMostRecentlyActiveEditorsChange(() =>
									this.j.fire(),
								),
							),
							this.D(this.onDidVisibleEditorsChange(() => this.Q())),
							this.D(this.r.onDidRunOperation((U) => this.R(U))),
							this.D(this.r.onDidFilesChange((U) => this.S(U))),
							this.D(this.s.onDidChangeConfiguration((U) => this.X(U)));
					}
					L() {
						for (const U of this.m.groups) this.O(U);
						this.activeEditor && (this.N(), this.b.fire());
					}
					M(U) {
						U === this.m.activeGroup &&
							((!this.J && !U.activeEditor) || this.N());
					}
					N() {
						const U = this.m.activeGroup;
						(this.J = U.activeEditor ?? void 0), this.a.fire();
					}
					O(U) {
						const z = new p.$Zc();
						z.add(
							U.onDidModelChange((F) => {
								this.c.fire({ groupId: U.id, event: F });
							}),
						),
							z.add(
								U.onDidActiveEditorChange(() => {
									this.M(U), this.b.fire();
								}),
							),
							z.add(
								U.onWillOpenEditor((F) => {
									this.f.fire(F);
								}),
							),
							z.add(
								U.onDidCloseEditor((F) => {
									this.g.fire(F);
								}),
							),
							z.add(
								U.onDidOpenEditorFail((F) => {
									this.h.fire({ editor: F, groupId: U.id });
								}),
							),
							m.Event.once(U.onWillDispose)(() => {
								(0, p.$Vc)(z);
							});
					}
					Q() {
						const U = new C.$Hc();
						for (const z of this.visibleEditors) {
							const F = (0, o.$Qb)(
								(0, o.$Lb)([
									i.$A1.getCanonicalUri(z, {
										supportSideBySide: i.SideBySideEditor.PRIMARY,
									}),
									i.$A1.getCanonicalUri(z, {
										supportSideBySide: i.SideBySideEditor.SECONDARY,
									}),
								]),
								(x) => x.toString(),
							);
							for (const x of F)
								this.r.hasProvider(x) &&
									!this.t.isInsideWorkspace(x) &&
									U.add(x);
						}
						for (const z of this.P.keys())
							U.has(z) || ((0, p.$Vc)(this.P.get(z)), this.P.delete(z));
						for (const z of U.keys())
							if (!this.P.get(z)) {
								const F = this.r.watch(z);
								this.P.set(z, F);
							}
					}
					async R(U) {
						U.isOperation(d.FileOperation.MOVE) &&
							this.U(U.resource, U.target.resource),
							(U.isOperation(d.FileOperation.DELETE) ||
								U.isOperation(d.FileOperation.MOVE)) &&
								this.Y(U.resource, !1, U.target ? U.target.resource : void 0);
					}
					S(U) {
						U.gotDeleted() && this.Y(U, !0);
					}
					async U(U, z) {
						for (const F of this.m.groups) {
							const x = [];
							for (const H of F.editors) {
								const q = H.resource;
								if (!q || !this.u.extUri.isEqualOrParent(q, U)) continue;
								let V;
								if (this.u.extUri.isEqual(U, q)) V = z;
								else {
									const J = (0, v.$Sg)(
										q.path,
										U.path,
										this.u.extUri.ignorePathCasing(q),
									);
									V = (0, u.$nh)(z, q.path.substr(J + U.path.length + 1));
								}
								const G = await H.rename(F.id, V);
								if (!G) return;
								const K = {
									preserveFocus: !0,
									pinned: F.isPinned(H),
									sticky: F.isSticky(H),
									index: F.getIndexOfEditor(H),
									inactive: !F.isActive(H),
								};
								(0, i.$r1)(G.editor)
									? x.push({
											editor: H,
											replacement: G.editor,
											options: { ...G.options, ...K },
										})
									: x.push({
											editor: H,
											replacement: {
												...G.editor,
												options: { ...G.editor.options, ...K },
											},
										});
							}
							x.length && this.replaceEditors(x, F);
						}
					}
					X(U) {
						if (
							U &&
							!U.affectsConfiguration("workbench.editor.closeOnFileDelete")
						)
							return;
						const z = this.s.getValue();
						typeof z.workbench?.editor?.closeOnFileDelete == "boolean"
							? (this.W = z.workbench.editor.closeOnFileDelete)
							: (this.W = !1);
					}
					Y(U, z, F) {
						for (const x of this.Z({
							includeUntitled: !1,
							supportSideBySide: !0,
						}))
							(async () => {
								const H = x.resource;
								if (H && (this.W || !z)) {
									if (F && this.u.extUri.isEqualOrParent(H, F)) return;
									let q = !1;
									if (
										(U instanceof d.$El
											? (q = U.contains(H, d.FileChangeType.DELETED))
											: (q = this.u.extUri.isEqualOrParent(H, U)),
										!q)
									)
										return;
									let V = !1;
									z &&
										this.r.hasProvider(H) &&
										(await (0, y.$Nh)(100), (V = await this.r.exists(H))),
										!V && !x.isDisposed() && x.dispose();
								}
							})();
					}
					Z(U) {
						const z = [];
						function F(x) {
							(x.hasCapability(i.EditorInputCapabilities.Untitled) &&
								!U.includeUntitled) ||
								x.isDirty() ||
								z.push(x);
						}
						for (const x of this.editors)
							U.supportSideBySide && x instanceof E.$iY
								? (F(x.primary), F(x.secondary))
								: F(x);
						return z;
					}
					get activeEditorPane() {
						return this.m.activeGroup?.activeEditorPane;
					}
					get activeTextEditorControl() {
						const U = this.activeEditorPane;
						if (U) {
							const z = U.getControl();
							if ((0, f.$0sb)(z) || (0, f.$$sb)(z)) return z;
							if ((0, f.$atb)(z) && (0, f.$0sb)(z.activeCodeEditor))
								return z.activeCodeEditor;
						}
					}
					get activeTextEditorLanguageId() {
						let U;
						const z = this.activeTextEditorControl;
						return (
							(0, f.$$sb)(z) ? (U = z.getModifiedEditor()) : (U = z),
							U?.getModel()?.getLanguageId()
						);
					}
					get count() {
						return this.$.count;
					}
					get editors() {
						return this.getEditors(i.EditorsOrder.SEQUENTIAL).map(
							({ editor: U }) => U,
						);
					}
					getEditors(U, z) {
						switch (U) {
							case i.EditorsOrder.MOST_RECENTLY_ACTIVE:
								return z?.excludeSticky
									? this.$.editors.filter(
											({ groupId: F, editor: x }) =>
												!this.m.getGroup(F)?.isSticky(x),
										)
									: this.$.editors;
							case i.EditorsOrder.SEQUENTIAL: {
								const F = [];
								for (const x of this.m.getGroups(c.GroupsOrder.GRID_APPEARANCE))
									F.push(
										...x
											.getEditors(i.EditorsOrder.SEQUENTIAL, z)
											.map((H) => ({ editor: H, groupId: x.id })),
									);
								return F;
							}
						}
					}
					get activeEditor() {
						const U = this.m.activeGroup;
						return U ? (U.activeEditor ?? void 0) : void 0;
					}
					get visibleEditorPanes() {
						return (0, o.$Lb)(this.m.groups.map((U) => U.activeEditorPane));
					}
					get visibleTextEditorControls() {
						const U = [];
						for (const z of this.visibleEditorPanes) {
							const F = [];
							z instanceof h.$AVb
								? (F.push(z.getPrimaryEditorPane()?.getControl()),
									F.push(z.getSecondaryEditorPane()?.getControl()))
								: F.push(z.getControl());
							for (const x of F)
								((0, f.$0sb)(x) || (0, f.$$sb)(x)) && U.push(x);
						}
						return U;
					}
					get visibleEditors() {
						return (0, o.$Lb)(this.m.groups.map((U) => U.activeEditor));
					}
					async openEditor(U, z, F) {
						let x,
							H = (0, i.$r1)(U) ? z : U.options,
							q;
						if (((0, n.$MY)(z) && (F = z), !(0, i.$r1)(U))) {
							const V = await this.w.resolveEditor(U, F);
							if (V === I.ResolvedStatus.ABORT) return;
							(0, i.$w1)(V) && ((x = V.editor), (H = V.options), (q = V.group));
						}
						if (
							(x || (x = (0, i.$r1)(U) ? U : await this.C.resolveTextEditor(U)),
							!q)
						) {
							let V;
							const G = this.q.invokeFunction(
								k.$ydc,
								{ editor: x, options: H },
								F,
							);
							G instanceof Promise ? ([q, V] = await G) : ([q, V] = G),
								V && (H = { ...H, activation: V });
						}
						return q.openEditor(x, H);
					}
					async openEditors(U, z, F) {
						if (F?.validateTrust && !(await this.ab(U))) return [];
						const x = new Map();
						for (const q of U) {
							let V, G;
							if (!(0, i.$v1)(q)) {
								const J = await this.w.resolveEditor(q, z);
								if (J === I.ResolvedStatus.ABORT) continue;
								(0, i.$w1)(J) && ((V = J), (G = J.group));
							}
							if (
								(V ||
									(V = (0, i.$v1)(q)
										? q
										: {
												editor: await this.C.resolveTextEditor(q),
												options: q.options,
											}),
								!G)
							) {
								const J = this.q.invokeFunction(k.$ydc, V, z);
								J instanceof Promise ? ([G] = await J) : ([G] = J);
							}
							let K = x.get(G);
							K || ((K = []), x.set(G, K)), K.push(V);
						}
						const H = [];
						for (const [q, V] of x) H.push(q.openEditors(V));
						return (0, o.$Lb)(await y.Promises.settled(H));
					}
					async ab(U) {
						const { resources: z, diffMode: F, mergeMode: x } = this.bb(U);
						switch (await this.y.requestOpenFilesTrust(z)) {
							case T.WorkspaceTrustUriResponse.Open:
								return !0;
							case T.WorkspaceTrustUriResponse.OpenInNewWindow:
								return (
									await this.z.openWindow(
										z.map((q) => ({ fileUri: q })),
										{ forceNewWindow: !0, diffMode: F, mergeMode: x },
									),
									!1
								);
							case T.WorkspaceTrustUriResponse.Cancel:
								return !1;
						}
					}
					bb(U) {
						const z = new C.$Hc();
						let F = !1,
							x = !1;
						for (const H of U)
							if ((0, i.$v1)(H)) {
								const q = i.$A1.getOriginalUri(H.editor, {
									supportSideBySide: i.SideBySideEditor.BOTH,
								});
								r.URI.isUri(q)
									? z.add(q)
									: q &&
										(q.primary && z.add(q.primary),
										q.secondary && z.add(q.secondary),
										(F = H.editor instanceof a.$GVb));
							} else
								(0, i.$o1)(H) &&
									(r.URI.isUri(H.input1) && z.add(H.input1.resource),
									r.URI.isUri(H.input2) && z.add(H.input2.resource),
									r.URI.isUri(H.base) && z.add(H.base.resource),
									r.URI.isUri(H.result) && z.add(H.result.resource),
									(x = !0)),
									(0, i.$j1)(H)
										? (r.URI.isUri(H.original.resource) &&
												z.add(H.original.resource),
											r.URI.isUri(H.modified.resource) &&
												z.add(H.modified.resource),
											(F = !0))
										: (0, i.$i1)(H) && z.add(H.resource);
						return {
							resources: Array.from(z.keys()),
							diffMode: F,
							mergeMode: x,
						};
					}
					isOpened(U) {
						return this.$.hasEditor({
							resource: this.u.asCanonicalUri(U.resource),
							typeId: U.typeId,
							editorId: U.editorId,
						});
					}
					isVisible(U) {
						for (const z of this.m.groups)
							if (z.activeEditor?.matches(U)) return !0;
						return !1;
					}
					async closeEditor({ editor: U, groupId: z }, F) {
						await this.m.getGroup(z)?.closeEditor(U, F);
					}
					async closeEditors(U, z) {
						const F = new Map();
						for (const { editor: x, groupId: H } of U) {
							const q = this.m.getGroup(H);
							if (!q) continue;
							let V = F.get(q);
							V || ((V = []), F.set(q, V)), V.push(x);
						}
						for (const [x, H] of F) await x.closeEditors(H, z);
					}
					findEditors(U, z, F) {
						const x = r.URI.isUri(U) ? U : U.resource,
							H = r.URI.isUri(U) ? void 0 : U.typeId;
						if (
							z?.supportSideBySide !== i.SideBySideEditor.ANY &&
							z?.supportSideBySide !== i.SideBySideEditor.SECONDARY &&
							!this.$.hasEditors(x)
						)
							return r.URI.isUri(U) || (0, s.$sg)(F) ? [] : void 0;
						if ((0, s.$sg)(F)) {
							const q = [];
							for (const V of this.m.getGroups(
								c.GroupsOrder.MOST_RECENTLY_ACTIVE,
							)) {
								const G = [];
								if (r.URI.isUri(U)) G.push(...this.findEditors(U, z, V));
								else {
									const K = this.findEditors(U, z, V);
									K && G.push(K);
								}
								q.push(...G.map((K) => ({ editor: K, groupId: V.id })));
							}
							return q;
						} else {
							const q = typeof F == "number" ? this.m.getGroup(F) : F;
							if (r.URI.isUri(U)) return q ? q.findEditors(x, z) : [];
							{
								if (!q) return;
								const V = q.findEditors(x, z);
								for (const G of V) if (G.typeId === H) return G;
								return;
							}
						}
					}
					async replaceEditors(U, z) {
						const F = typeof z == "number" ? this.m.getGroup(z) : z,
							x = [];
						for (const H of U) {
							let q;
							if (!(0, i.$r1)(H.replacement)) {
								const V = await this.w.resolveEditor(H.replacement, F);
								if (V === I.ResolvedStatus.ABORT) continue;
								(0, i.$w1)(V) &&
									(q = {
										editor: H.editor,
										replacement: V.editor,
										options: V.options,
										forceReplaceDirty: H.forceReplaceDirty,
									});
							}
							q ||
								(q = {
									editor: H.editor,
									replacement: (0, c.$FY)(H)
										? H.replacement
										: await this.C.resolveTextEditor(H.replacement),
									options: (0, c.$FY)(H) ? H.options : H.replacement.options,
									forceReplaceDirty: H.forceReplaceDirty,
								}),
								x.push(q);
						}
						return F?.replaceEditors(x);
					}
					async save(U, z) {
						Array.isArray(U) || (U = [U]);
						const F = this.db(U),
							x = [],
							H = [];
						if (z?.saveAs) H.push(...F);
						else
							for (const { groupId: V, editor: G } of F)
								G.hasCapability(i.EditorInputCapabilities.Untitled)
									? H.push({ groupId: V, editor: G })
									: x.push({ groupId: V, editor: G });
						const q = await y.Promises.settled(
							x.map(
								({ groupId: V, editor: G }) => (
									z?.reason === i.SaveReason.EXPLICIT &&
										this.m.getGroup(V)?.pinEditor(G),
									G.save(V, z)
								),
							),
						);
						for (const { groupId: V, editor: G } of H) {
							if (G.isDisposed()) continue;
							const J = {
									pinned: !0,
									viewState: (await this.openEditor(G, V))?.getViewState(),
								},
								W = z?.saveAs ? await G.saveAs(V, z) : await G.save(V, z);
							if ((q.push(W), !W)) break;
							if (!G.matches(W)) {
								const X = G.hasCapability(i.EditorInputCapabilities.Untitled)
									? this.m.groups.map((Y) => Y.id)
									: [V];
								for (const Y of X)
									W instanceof w.$LO
										? await this.replaceEditors(
												[{ editor: G, replacement: W, options: J }],
												Y,
											)
										: await this.replaceEditors(
												[{ editor: G, replacement: { ...W, options: J } }],
												Y,
											);
							}
						}
						return { success: q.every((V) => !!V), editors: (0, o.$Lb)(q) };
					}
					saveAll(U) {
						return this.save(this.cb(U), U);
					}
					async revert(U, z) {
						Array.isArray(U) || (U = [U]);
						const F = this.db(U);
						return (
							await y.Promises.settled(
								F.map(
									async ({ groupId: x, editor: H }) => (
										this.m.getGroup(x)?.pinEditor(H), H.revert(x, z)
									),
								),
							),
							!F.some(({ editor: x }) => x.isDirty())
						);
					}
					async revertAll(U) {
						return this.revert(this.cb(U), U);
					}
					cb(U) {
						const z = [];
						for (const F of this.m.getGroups(
							c.GroupsOrder.MOST_RECENTLY_ACTIVE,
						))
							for (const x of F.getEditors(i.EditorsOrder.MOST_RECENTLY_ACTIVE))
								x.isModified() &&
									(((typeof U?.includeUntitled == "boolean" ||
										!U?.includeUntitled?.includeScratchpad) &&
										x.hasCapability(i.EditorInputCapabilities.Scratchpad)) ||
										(!U?.includeUntitled &&
											x.hasCapability(i.EditorInputCapabilities.Untitled)) ||
										(U?.excludeSticky && F.isSticky(x)) ||
										z.push({ groupId: F.id, editor: x }));
						return z;
					}
					db(U) {
						const z = [];
						for (const { editor: F, groupId: x } of U)
							z.some((H) => H.editor.matches(F)) ||
								z.push({ editor: F, groupId: x });
						return z;
					}
					dispose() {
						super.dispose(),
							this.P.forEach((U) => (0, p.$Vc)(U)),
							this.P.clear();
					}
				};
				(e.$Bdc = O),
					(e.$Bdc =
						O =
						R =
							Ne(
								[
									j(1, c.$EY),
									j(2, t.$Li),
									j(3, d.$ll),
									j(4, g.$gj),
									j(5, $.$Vi),
									j(6, S.$Vl),
									j(7, I.$E6),
									j(8, T.$qO),
									j(9, P.$asb),
									j(10, L.$zdc),
									j(11, D.$0zb),
									j(12, M.$aM),
									j(13, A.$Tcc),
								],
								O,
							)),
					(0, b.$lK)(n.$IY, new N.$Ji(O, [void 0], !1));
			},
		),
		
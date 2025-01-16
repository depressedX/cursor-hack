define(de[3690], he([1, 0, 29, 197, 711]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$hSc = void 0);
			class E {
				canSerialize() {
					return !0;
				}
				serialize(d) {
					return JSON.stringify(this.toJSON(d));
				}
				toJSON(d) {
					return {
						base: d.base,
						input1: d.input1,
						input2: d.input2,
						result: d.result,
					};
				}
				deserialize(d, m) {
					try {
						const r = (0, i.$ii)(m);
						return d.createInstance(
							w.$Enc,
							r.base,
							new w.$Dnc(
								r.input1.uri,
								r.input1.title,
								r.input1.detail,
								r.input1.description,
							),
							new w.$Dnc(
								r.input2.uri,
								r.input2.title,
								r.input2.detail,
								r.input2.description,
							),
							r.result,
						);
					} catch (r) {
						(0, t.$4)(r);
						return;
					}
				}
			}
			e.$hSc = E;
		}),
		define(
			de[712],
			he([
				1, 0, 15, 29, 6, 3, 197, 23, 82, 77, 457, 28, 9, 370, 1681, 42, 125, 4,
				57, 5, 44, 223, 3089, 800, 231, 85,
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
				var I;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Nnc = e.$Mnc = e.$Lnc = void 0);
				let T = class extends l.$LO {
					static {
						I = this;
					}
					static fromResourceMultiDiffEditorInput(R, O) {
						if (!R.multiDiffSource && !R.resources)
							throw new i.$gb(
								"MultiDiffEditorInput requires either multiDiffSource or resources",
							);
						const B =
							R.multiDiffSource ??
							h.URI.parse(
								`multi-diff-editor:${new Date().getMilliseconds().toString() + Math.random().toString()}`,
							);
						return O.createInstance(
							I,
							B,
							R.label,
							R.resources?.map(
								(U) =>
									new $.$Jnc(
										U.original.resource,
										U.modified.resource,
										U.goToFileResource,
									),
							),
							R.isTransient ?? !1,
						);
					}
					static fromSerialized(R, O) {
						return O.createInstance(
							I,
							h.URI.parse(R.multiDiffSourceUri),
							R.label,
							R.resources?.map(
								(B) =>
									new $.$Jnc(
										B.originalUri ? h.URI.parse(B.originalUri) : void 0,
										B.modifiedUri ? h.URI.parse(B.modifiedUri) : void 0,
										B.goToFileUri ? h.URI.parse(B.goToFileUri) : void 0,
									),
							),
							!1,
						);
					}
					static {
						this.ID = "workbench.input.multiDiffEditor";
					}
					get resource() {
						return this.multiDiffSource;
					}
					get capabilities() {
						return s.EditorInputCapabilities.Readonly;
					}
					get typeId() {
						return I.ID;
					}
					getName() {
						return this.c;
					}
					get editorId() {
						return s.$b1.id;
					}
					getIcon() {
						return y.$Hnc;
					}
					constructor(R, O, B, U = !1, z, F, x, H, q) {
						super(),
							(this.multiDiffSource = R),
							(this.label = O),
							(this.initialResources = B),
							(this.isTransient = U),
							(this.m = z),
							(this.n = F),
							(this.q = x),
							(this.s = H),
							(this.t = q),
							(this.c = ""),
							(this.u = new t.$_h(async () => {
								const V = await this.w();
								this.D(V);
								const G = new n.$Fnc(V, this.q);
								return this.D(G), await (0, t.$Dh)(G.waitForDiffs(), 1e3), G;
							})),
							(this.y = new r.ObservableLazyPromise(async () => {
								const V = this.initialResources
									? { resources: w.$Be.const(this.initialResources) }
									: await this.s.resolve(this.multiDiffSource);
								return {
									source: V,
									resources: V ? (0, u.$Nd)(this, V.resources) : (0, u.$wd)([]),
								};
							})),
							(this.resources = (0, r.derived)(this, (V) =>
								this.y.cachedPromiseResult.read(V)?.data?.resources.read(V),
							)),
							(this.z = new P(
								this.t.files.onDidChangeDirty,
								(V) => V.resource.toString(),
								(V) => V.toString(),
							)),
							(this.C = (0, u.$Ld)(
								this,
								this.resources.map((V) => V ?? []),
								(V) => {
									const G = V.modifiedUri
											? k(this.z, this.t, V.modifiedUri)
											: (0, u.$wd)(!1),
										K = V.originalUri
											? k(this.z, this.t, V.originalUri)
											: (0, u.$wd)(!1);
									return (0, r.derived)((J) => G.read(J) || K.read(J));
								},
								(V) => V.getKey(),
							)),
							(this.F = (0, r.derived)(this, (V) =>
								this.C.read(V).some((G) => G.read(V)),
							).keepObserved(this.B)),
							(this.onDidChangeDirty = w.Event.fromObservableLight(this.F)),
							(this.closeHandler = {
								async confirm() {
									return f.ConfirmResult.DONT_SAVE;
								},
								showConfirm() {
									return !1;
								},
							}),
							this.D(
								(0, r.autorun)((V) => {
									const G = this.resources.read(V),
										K = this.label ?? (0, o.localize)(7698, null);
									G
										? (this.c = K + (0, o.localize)(7699, null, G.length))
										: (this.c = K),
										this.f.fire();
								}),
							);
					}
					serialize() {
						return {
							label: this.label,
							multiDiffSourceUri: this.multiDiffSource.toString(),
							resources: this.initialResources?.map((R) => ({
								originalUri: R.originalUri?.toString(),
								modifiedUri: R.modifiedUri?.toString(),
								goToFileUri: R.goToFileUri?.toString(),
							})),
						};
					}
					setLanguageId(R, O) {
						const U = this.u
							.requireValue()
							.activeDiffItem.get()?.documentDiffItem;
						if (!U) return;
						const z = U.modified ?? U.original;
						z && z.setLanguage(R, O);
					}
					async getViewModel() {
						return this.u.getPromise();
					}
					async w() {
						const R = await this.y.getPromise(),
							O = this.n,
							B = (0, u.$Ld)(
								this,
								R.resources,
								async (H, q) => {
									let V, G;
									const K = new E.$Zc();
									try {
										([V, G] = await Promise.all([
											H.originalUri
												? this.m.createModelReference(H.originalUri)
												: void 0,
											H.modifiedUri
												? this.m.createModelReference(H.modifiedUri)
												: void 0,
										])),
											V && K.add(V),
											G && K.add(G);
									} catch (X) {
										console.error(X), (0, i.$4)(X);
										return;
									}
									const J = H.modifiedUri ?? H.originalUri,
										W = {
											multiDiffEditorItem: H,
											original: V?.object.textEditorModel,
											modified: G?.object.textEditorModel,
											contextKeys: H.contextKeys,
											get options() {
												return {
													...L(G?.object.isReadonly() ?? !0),
													...D(O.getValue(J)),
												};
											},
											onOptionsDidChange: (X) =>
												this.n.onDidChangeConfiguration((Y) => {
													(Y.affectsConfiguration(J, "editor") ||
														Y.affectsConfiguration(J, "diffEditor")) &&
														X();
												}),
										};
									return q.add(c.$Lwb.createOfNonDisposable(W, K, this));
								},
								(H) =>
									JSON.stringify([
										H.modifiedUri?.toString(),
										H.originalUri?.toString(),
									]),
							),
							U = (0, r.observableValue)("documents", []),
							z = (0, r.derived)(async (H) => {
								const q = B.read(H),
									G = (await Promise.all(q)).filter(a.$tg);
								U.set(G, void 0);
							}),
							F = (0, u.$Hd)(z);
						return (
							await z.get(),
							{
								dispose: () => F.dispose(),
								documents: new u.$Md(U),
								contextKeys: R.source?.contextKeys,
							}
						);
					}
					matches(R) {
						return super.matches(R)
							? !0
							: R instanceof I
								? this.multiDiffSource.toString() ===
									R.multiDiffSource.toString()
								: !1;
					}
					isDirty() {
						return this.F.get();
					}
					async save(R, O) {
						return await this.G("save", R, O), this;
					}
					revert(R, O) {
						return this.G("revert", R, O);
					}
					async G(R, O, B) {
						const U = this.u.currentValue?.items.get();
						U &&
							(await Promise.all(
								U.map(async (z) => {
									const F = z.diffEditorViewModel.model,
										x =
											F.original.uri.scheme !== d.Schemas.untitled &&
											this.t.isDirty(F.original.uri);
									await Promise.all([
										x
											? R === "save"
												? this.t.save(F.original.uri, B)
												: this.t.revert(F.original.uri, B)
											: Promise.resolve(),
										R === "save"
											? this.t.save(F.modified.uri, B)
											: this.t.revert(F.modified.uri, B),
									]);
								}),
							));
					}
				};
				(e.$Lnc = T),
					(e.$Lnc =
						T =
						I =
							Ne(
								[
									j(4, g.$MO),
									j(5, p.$XO),
									j(6, b.$Li),
									j(7, $.$Inc),
									j(8, S.$kZ),
								],
								T,
							));
				class P {
					constructor(R, O, B) {
						(this.f = R),
							(this.g = O),
							(this.j = B),
							(this.b = 0),
							(this.c = new Map()),
							(this.k = (U) => {
								const z = this.g(U),
									F = this.c.get(z);
								if (F) for (const x of F) x(U);
							});
					}
					filteredEvent(R) {
						return (O) => {
							const B = this.j(R);
							let U = this.c.get(B);
							return (
								U || ((U = new Set()), this.c.set(B, U)),
								U.add(O),
								this.b++,
								this.b === 1 && (this.d = this.f(this.k)),
								{
									dispose: () => {
										U.delete(O),
											U.size === 0 && this.c.delete(B),
											this.b--,
											this.b === 0 && (this.d?.dispose(), (this.d = void 0));
									},
								}
							);
						};
					}
				}
				function k(A, R, O) {
					return (0, r.observableFromEvent)(A.filteredEvent(O), () =>
						R.isDirty(O),
					);
				}
				function L(A) {
					return {
						readOnly: !!A,
						readOnlyMessage: typeof A != "boolean" ? A : void 0,
					};
				}
				function D(A) {
					const R = (0, m.$vo)(A.editor);
					if ((0, a.$ng)(A.diffEditor)) {
						const O = (0, m.$vo)(A.diffEditor);
						(O.diffCodeLens = O.codeLens),
							delete O.codeLens,
							(O.diffWordWrap = O.wordWrap),
							delete O.wordWrap,
							Object.assign(R, O);
					}
					return R;
				}
				let M = class extends E.$1c {
					static {
						this.ID = "workbench.contrib.multiDiffEditorResolver";
					}
					constructor(R, O) {
						super(),
							this.D(
								R.registerEditor(
									"*",
									{
										id: s.$b1.id,
										label: s.$b1.displayName,
										detail: s.$b1.providerDisplayName,
										priority: v.RegisteredEditorPriority.builtin,
									},
									{},
									{
										createMultiDiffEditorInput: (B) => ({
											editor: T.fromResourceMultiDiffEditorInput(B, O),
										}),
									},
								),
							);
					}
				};
				(e.$Mnc = M), (e.$Mnc = M = Ne([j(0, v.$E6), j(1, b.$Li)], M));
				class N {
					canSerialize(R) {
						return R instanceof T && !R.isTransient;
					}
					serialize(R) {
						if (this.canSerialize(R)) return JSON.stringify(R.serialize());
					}
					deserialize(R, O) {
						try {
							const B = (0, C.$ii)(O);
							return T.fromSerialized(B, R);
						} catch (B) {
							(0, i.$4)(B);
							return;
						}
					}
				}
				e.$Nnc = N;
			},
		),
		define(
			de[1883],
			he([1, 0, 1683, 125, 5, 21, 32, 35, 233, 1016, 712, 66, 18, 17]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				var n;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$iSc = void 0);
				let g = class extends r.$zVb {
					static {
						n = this;
					}
					static {
						this.ID = "multiDiffEditor";
					}
					get viewModel() {
						return this.c;
					}
					constructor(f, b, s, l, y, $, v, S) {
						super(n.ID, f, "multiDiffEditor", s, b, y, S, l, $, v),
							(this.a = void 0);
					}
					Y(f) {
						(this.a = this.D(
							this.m.createInstance(t.$IGc, f, this.m.createInstance(p)),
						)),
							this.D(
								this.a.onDidChangeActiveControl(() => {
									this.S.fire();
								}),
							);
					}
					async setInput(f, b, s, l) {
						await super.setInput(f, b, s, l),
							(this.c = await f.getViewModel()),
							this.a.setViewModel(this.c);
						const y = this.jb(f, s);
						y && this.a.setViewState(y), this.r(b);
					}
					setOptions(f) {
						this.r(f);
					}
					r(f) {
						const b = f?.viewState;
						!b ||
							!b.revealData ||
							this.a?.reveal(b.revealData.resource, {
								range: b.revealData.range
									? c.$iL.lift(b.revealData.range)
									: void 0,
								highlight: !0,
							});
					}
					async clearInput() {
						await super.clearInput(), this.a.setViewModel(void 0);
					}
					layout(f) {
						this.a.layout(f);
					}
					getControl() {
						return this.a.getActiveControl();
					}
					focus() {
						super.focus(), this.a?.getActiveControl()?.focus();
					}
					hasFocus() {
						return (
							this.a?.getActiveControl()?.hasTextFocus() || super.hasFocus()
						);
					}
					mb(f) {
						return this.a.getViewState();
					}
					nb(f) {
						return f instanceof u.$Lnc;
					}
					pb(f) {
						return f.resource;
					}
					tryGetCodeEditor(f) {
						return this.a.tryGetCodeEditor(f);
					}
					findDocumentDiffItem(f) {
						const b = this.a.findDocumentDiffItem(f);
						return b ? b.multiDiffEditorItem : void 0;
					}
				};
				(e.$iSc = g),
					(e.$iSc =
						g =
						n =
							Ne(
								[
									j(1, w.$Li),
									j(2, C.$km),
									j(3, d.$iP),
									j(4, E.$lq),
									j(5, h.$IY),
									j(6, a.$EY),
									j(7, i.$XO),
								],
								g,
							));
				let p = class {
					constructor(f) {
						this.a = f;
					}
					createResourceLabel(f) {
						const b = this.a.createInstance(m.$vPb, f, {});
						return {
							setUri(s, l = {}) {
								s
									? b.element.setFile(s, { strikethrough: l.strikethrough })
									: b.element.clear();
							},
							dispose() {
								b.dispose();
							},
						};
					}
				};
				p = Ne([j(0, w.$Li)], p);
			},
		),
		define(
			de[3691],
			he([1, 0, 14, 71, 4, 11, 8, 116, 93, 1014, 1883, 712, 66, 18]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$lSc = e.$kSc = e.$jSc = void 0);
				class n extends E.$3X {
					constructor() {
						super({
							id: "multiDiffEditor.goToFile",
							title: (0, w.localize2)(7693, "Open File"),
							icon: t.$ak.goToFile,
							precondition: i.EditorContextKeys.inMultiDiffEditor,
							menu: {
								when: i.EditorContextKeys.inMultiDiffEditor,
								id: E.$XX.MultiDiffEditorFileToolbar,
								order: 22,
								group: "navigation",
							},
						});
					}
					async run(f, ...b) {
						const s = b[0],
							l = f.get(c.$IY),
							y = l.activeEditorPane;
						let $;
						if (!(y instanceof u.$iSc)) return;
						const v = y.tryGetCodeEditor(s);
						v && ($ = v.editor.getSelections() ?? void 0);
						let S = s;
						const I = y.findDocumentDiffItem(s);
						I && I.goToFileUri && (S = I.goToFileUri),
							await l.openEditor({
								resource: S,
								options: {
									selection: $?.[0],
									selectionRevealType:
										d.TextEditorSelectionRevealType.CenterIfOutsideViewport,
								},
							});
					}
				}
				e.$jSc = n;
				class g extends E.$3X {
					constructor() {
						super({
							id: "multiDiffEditor.collapseAll",
							title: (0, w.localize2)(7694, "Collapse All Diffs"),
							icon: t.$ak.collapseAll,
							precondition: C.$Kj.and(
								C.$Kj.equals("activeEditor", u.$iSc.ID),
								C.$Kj.not("multiDiffEditorAllCollapsed"),
							),
							menu: {
								when: C.$Kj.and(
									C.$Kj.equals("activeEditor", u.$iSc.ID),
									C.$Kj.not("multiDiffEditorAllCollapsed"),
								),
								id: E.$XX.EditorTitle,
								group: "navigation",
								order: 100,
							},
							f1: !0,
						});
					}
					async run(f, ...b) {
						const l = (0, r.$TVb)(b, f.get(c.$IY), f.get(h.$EY), f.get(m.$fMb))
							.groupedEditors[0];
						if (!l) return;
						const y = l.editors[0];
						y instanceof a.$Lnc && (await y.getViewModel()).collapseAll();
					}
				}
				e.$kSc = g;
				class p extends E.$3X {
					constructor() {
						super({
							id: "multiDiffEditor.expandAll",
							title: (0, w.localize2)(7695, "Expand All Diffs"),
							icon: t.$ak.expandAll,
							precondition: C.$Kj.and(
								C.$Kj.equals("activeEditor", u.$iSc.ID),
								C.$Kj.has("multiDiffEditorAllCollapsed"),
							),
							menu: {
								when: C.$Kj.and(
									C.$Kj.equals("activeEditor", u.$iSc.ID),
									C.$Kj.has("multiDiffEditorAllCollapsed"),
								),
								id: E.$XX.EditorTitle,
								group: "navigation",
								order: 100,
							},
							f1: !0,
						});
					}
					async run(f, ...b) {
						const l = (0, r.$TVb)(b, f.get(c.$IY), f.get(h.$EY), f.get(m.$fMb))
							.groupedEditors[0];
						if (!l) return;
						const y = l.editors[0];
						y instanceof a.$Lnc && (await y.getViewModel()).expandAll();
					}
				}
				e.$lSc = p;
			},
		),
		define(
			de[1319],
			he([1, 0, 9, 42, 125, 5, 712, 800, 1305, 360, 85]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				var a;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$3Ec = e.$2Ec = e.$1Ec = void 0),
					(e.$1Ec = "multi-cell-notebook-diff-editor");
				class h extends m.$rEc {
					static {
						this.ID = "workbench.input.multiDiffNotebookInput";
					}
					static create(g, p, o, f, b, s) {
						const l = r.$TIb.getOrCreate(g, b, void 0, s),
							y = r.$TIb.getOrCreate(g, p, void 0, s);
						return g.createInstance(h, o, f, l, y, s);
					}
				}
				e.$2Ec = h;
				let c = (a = class extends C.$Lnc {
					static createInput(g, p) {
						const o = t.URI.parse(
							`${e.$1Ec}:${new Date().getMilliseconds().toString() + Math.random().toString()}`,
						);
						return p.createInstance(a, o, g);
					}
					constructor(g, p, o, f, b, s, l) {
						super(g, void 0, void 0, !0, o, f, b, s, l),
							(this.H = p),
							this.D(s.registerResolver(this));
					}
					canHandleUri(g) {
						return g.toString() === this.multiDiffSource.toString();
					}
					async resolveDiffSource(g) {
						return { resources: this.H };
					}
				});
				(e.$3Ec = c),
					(e.$3Ec =
						c =
						a =
							Ne(
								[
									j(2, i.$MO),
									j(3, w.$XO),
									j(4, E.$Li),
									j(5, d.$Inc),
									j(6, u.$kZ),
								],
								c,
							));
			},
		),
		define(
			de[1320],
			he([
				1, 0, 21, 32, 35, 33, 5, 8, 992, 10, 463, 345, 3, 217, 70, 600, 835,
				161, 1319, 1683, 233, 834, 4, 23, 252, 1847, 1254, 556, 77,
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
					(e.$JGc = void 0);
				let L = class extends c.$JEb {
					static {
						k = this;
					}
					static {
						this.ID = n.$Q6;
					}
					get textModel() {
						return this.j?.modified.notebook;
					}
					get notebookOptions() {
						return this.s;
					}
					constructor(N, A, R, O, B, U, z, F, x) {
						super(k.ID, N, z, R, F),
							(this.db = A),
							(this.eb = O),
							(this.fb = B),
							(this.gb = U),
							(this.hb = x),
							(this.g = this.D(new h.$Zc())),
							(this.u = this.eb.createKey(T.$EEc.key, !1)),
							(this.$ = this.eb.createKey(T.$FEc.key, !1)),
							(this.cb = this.eb.createKey(T.$GEc.key, !0)),
							(this.s = A.createInstance(p.$XIb, this.window, !1, void 0)),
							this.D(this.s);
					}
					get ib() {
						return this.b || (this.b = this.jb()), this.b;
					}
					layout(N, A) {
						this.a.layout(N);
					}
					jb() {
						const N = this.gb.getValue("editor");
						return g.$osb.readFontInfo(
							this.window,
							u.$OK.createFromRawSettings(
								N,
								a.$sjb.getInstance(this.window).value,
							),
						);
					}
					Y(N) {
						(this.a = this.D(
							this.db.createInstance(b.$IGc, N, this.db.createInstance(D)),
						)),
							this.D(
								this.a.onDidChangeActiveControl(() => {
									this.S.fire();
								}),
							);
					}
					async setInput(N, A, R, O) {
						super.setInput(N, A, R, O);
						const B = await N.resolve();
						this.j !== B && (this.lb(), (this.j = B));
						const U = this.g.add(new I.$MEc());
						(this.m = this.g.add(
							new S.$XEc(B, this.fb, this.db, this.gb, U, this.hb, void 0, !0),
						)),
							await this.m.computeDiff(this.g.add(new E.$Ce()).token),
							this.$.set(this.m.hasUnchangedCells),
							this.$.set(this.m.hasUnchangedCells);
						const z = this.g.add(f.$3Ec.createInput(this.m, this.db));
						this.r = this.g.add(await z.getViewModel());
						const F = new WeakSet();
						this.g.add(
							(0, P.autorun)((x) => {
								if (!this.r || !this.m) return;
								const H = this.r.items.read(x),
									q = this.m.value;
								H.length === q.length &&
									(0, P.transaction)((V) => {
										H.forEach((G) => {
											if (F.has(G)) return;
											F.add(G);
											const K = q.find(
												(J) =>
													J.modifiedUri?.toString() ===
														G.modifiedUri?.toString() &&
													J.originalUri?.toString() ===
														G.originalUri?.toString(),
											);
											K && K.type === "unchanged" && G.collapsed.set(!0, V);
										});
									});
							}),
						),
							this.a.setViewModel(this.r);
					}
					lb() {
						(this.m = void 0), this.g.clear();
					}
					_generateFontFamily() {
						return (
							this.ib.fontFamily ??
							'"SF Mono", Monaco, Menlo, Consolas, "Ubuntu Mono", "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace'
						);
					}
					setOptions(N) {
						super.setOptions(N);
					}
					getControl() {
						return this.a.getActiveControl();
					}
					focus() {
						super.focus(), this.a?.getActiveControl()?.focus();
					}
					hasFocus() {
						return (
							this.a?.getActiveControl()?.hasTextFocus() || super.hasFocus()
						);
					}
					clearInput() {
						super.clearInput(),
							this.a.setViewModel(void 0),
							this.g.clear(),
							(this.m = void 0),
							(this.r = void 0);
					}
					expandAll() {
						this.r && (this.r.expandAll(), this.u.set(!1));
					}
					collapseAll() {
						this.r && (this.r.collapseAll(), this.u.set(!0));
					}
					hideUnchanged() {
						this.m && ((this.m.includeUnchanged = !1), this.cb.set(!0));
					}
					showUnchanged() {
						this.m && ((this.m.includeUnchanged = !0), this.cb.set(!1));
					}
					getDiffElementViewModel(N) {
						if (
							N.scheme === $.Schemas.vscodeNotebookCellOutput ||
							N.scheme === $.Schemas.vscodeNotebookCellOutputDiff ||
							N.scheme === $.Schemas.vscodeNotebookCellMetadata ||
							N.scheme === $.Schemas.vscodeNotebookCellMetadataDiff
						) {
							const A = n.CellUri.parseCellPropertyUri(N, N.scheme);
							A && (N = n.CellUri.generate(A.notebook, A.handle));
						}
						return this.m?.items.find((A) => {
							switch (A.type) {
								case "delete":
									return A.original?.uri.toString() === N.toString();
								case "insert":
									return A.modified?.uri.toString() === N.toString();
								case "modified":
								case "unchanged":
									return (
										A.modified?.uri.toString() === N.toString() ||
										A.original?.uri.toString() === N.toString()
									);
								default:
									return;
							}
						});
					}
				};
				(e.$JGc = L),
					(e.$JGc =
						L =
						k =
							Ne(
								[
									j(1, C.$Li),
									j(2, w.$iP),
									j(3, d.$6j),
									j(4, m.$A4b),
									j(5, r.$gj),
									j(6, i.$km),
									j(7, t.$lq),
									j(8, o.$MIb),
								],
								L,
							));
				let D = class {
					constructor(N, A, R) {
						(this.a = N), (this.b = A), (this.e = R);
					}
					createResourceLabel(N) {
						const A = this.a.createInstance(s.$vPb, N, {}),
							R = this;
						return {
							setUri(O, B = {}) {
								if (!O) A.element.clear();
								else {
									let U = "",
										z = "",
										F;
									if (O.scheme === $.Schemas.vscodeNotebookCell) {
										const x =
												O.scheme === $.Schemas.vscodeNotebookCell
													? R.b.getNotebook(O)
													: void 0,
											H = $.Schemas.vscodeNotebookCell
												? R.b.getNotebook(O)?.getCellIndex(O)
												: void 0;
										if (x && H !== void 0) {
											U = (0, y.localize)(8009, null, `${H + 1}`);
											const q = x ? R.e.getNotebookTextModel(x?.uri) : void 0,
												V = q && H !== void 0 ? q.cells[H].language : void 0;
											F = V ? (0, v.$CDb)(V) : void 0;
										}
									} else
										O.scheme === $.Schemas.vscodeNotebookCellMetadata ||
										O.scheme === $.Schemas.vscodeNotebookCellMetadataDiff
											? (z = (0, y.localize)(8010, null))
											: (O.scheme === $.Schemas.vscodeNotebookCellOutput ||
													O.scheme ===
														$.Schemas.vscodeNotebookCellOutputDiff) &&
												(z = (0, y.localize)(8011, null));
									A.element.setResource(
										{ name: U, description: z },
										{
											strikethrough: B.strikethrough,
											forceLabel: !0,
											hideIcon: !F,
											extraClasses: F,
										},
									);
								}
							},
							dispose() {
								A.dispose();
							},
						};
					}
				};
				D = Ne([j(0, C.$Li), j(1, l.$I6), j(2, o.$MIb)], D);
			},
		),
		define(
			de[1884],
			he([
				1, 0, 4, 15, 3, 6, 5, 42, 200, 10, 258, 122, 35, 51, 56, 46, 255, 8, 71,
				27, 48, 201, 43, 784, 38, 50, 39, 19, 11, 92, 98, 64, 24, 65, 7, 85, 79,
				14, 26, 29, 100, 84, 97, 59, 18, 184, 91, 803, 3128, 2486,
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
			) {
				"use strict";
				var X, Y;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$gnc =
						e.$fnc =
						e.$dnc =
						e.$cnc =
						e.$bnc =
						e.$anc =
						e.$_mc =
						e.$$mc =
							void 0),
					(e.$enc = Je),
					(t = mt(t)),
					(A = mt(A));
				class ie extends S.$sj {
					q(Se, ke) {
						return Se instanceof P.$2X ? Se.run(...ke) : super.q(Se, ke);
					}
				}
				e.$$mc = new o.$5j("dirtyDiffVisible", !1);
				function ne(Be) {
					const Se = Be.modifiedEndLineNumber - Be.modifiedStartLineNumber + 1,
						ke = Be.originalEndLineNumber - Be.originalStartLineNumber + 1;
					return Be.originalEndLineNumber === 0
						? Se
						: Be.modifiedEndLineNumber === 0
							? ke
							: Se + ke;
				}
				function ee(Be) {
					return Be.modifiedEndLineNumber === 0
						? Be.modifiedStartLineNumber === 0
							? 1
							: Be.modifiedStartLineNumber
						: Be.modifiedEndLineNumber;
				}
				function _(Be, Se) {
					return Be === 1 &&
						Se.modifiedStartLineNumber === 0 &&
						Se.modifiedEndLineNumber === 0
						? !0
						: Be >= Se.modifiedStartLineNumber &&
								Be <= (Se.modifiedEndLineNumber || Se.modifiedStartLineNumber);
				}
				let te = class extends S.$rj {
					constructor(Se, ke, Ue, qe, Ae) {
						const Me = qe.lookupKeybinding(ke.id),
							De = ke.label + (Me ? ` (${Me.getLabel()})` : "");
						super(ke.id, De, Ue), (this.g = Ae), (this.f = ke), (this.c = Se);
					}
					run() {
						return Promise.resolve(
							this.g.invokeFunction((Se) => this.f.run(Se, this.c, null)),
						);
					}
				};
				te = Ne([j(3, I.$uZ), j(4, C.$Li)], te);
				var Q;
				(function (Be) {
					(Be[(Be.Modify = 0)] = "Modify"),
						(Be[(Be.Add = 1)] = "Add"),
						(Be[(Be.Delete = 2)] = "Delete");
				})(Q || (Q = {}));
				function Z(Be) {
					return Be.originalEndLineNumber === 0
						? Q.Add
						: Be.modifiedEndLineNumber === 0
							? Q.Delete
							: Q.Modify;
				}
				function se(Be, Se) {
					switch (Se) {
						case Q.Modify:
							return Be.getColor(me);
						case Q.Add:
							return Be.getColor(ve);
						case Q.Delete:
							return Be.getColor(ge);
					}
				}
				function re(Be) {
					const Se = Be.get(N.$dtb).listDiffEditors();
					for (const ke of Se)
						if (ke.hasTextFocus() && ke instanceof $.$7mc)
							return ke.getParentEditor();
					return (0, p.$8Mb)(Be);
				}
				let le = class extends p.$9Mb {
					constructor(Se, ke, Ue, qe, Ae, Me) {
						super(
							Se,
							{
								isResizeable: !0,
								frameWidth: 1,
								keepEditorSelection: !0,
								className: "dirty-diff",
							},
							qe,
						),
							(this.eb = ke),
							(this.fb = Ue),
							(this.gb = Ae),
							(this.hb = Me),
							(this.Y = 0),
							(this.Z = ""),
							(this.bb = void 0),
							this.o.add(Ue.onDidColorThemeChange(this.sb, this)),
							this.sb(Ue.getColorTheme()),
							this.eb.original.length > 0 &&
								(Me = Me.createOverlay([
									["originalResourceScheme", this.eb.original[0].uri.scheme],
									[
										"originalResourceSchemes",
										this.eb.original.map((De) => De.uri.scheme),
									],
								])),
							this.create(),
							Se.hasModel()
								? (this.m = (0, T.$kh)(Se.getModel().uri))
								: (this.m = ""),
							this.setTitle(this.m);
					}
					get provider() {
						return this.Z;
					}
					get index() {
						return this.Y;
					}
					get visibleRange() {
						const Se = this.c.getModifiedEditor().getVisibleRanges();
						return Se.length >= 0 ? Se[0] : void 0;
					}
					showChange(Se, ke = !0) {
						const Ue = this.eb.changes[Se],
							qe = Ue.change;
						if (
							((this.Y = Se),
							this.hb.createKey(
								"originalResourceScheme",
								this.eb.changes[Se].uri.scheme,
							),
							this.lb(),
							(this.Z = Ue.label),
							(this.ab = qe),
							!this.eb.original)
						)
							return;
						E.Event.once(this.c.onDidUpdateDiff)(() =>
							setTimeout(() => this.rb(qe), 0),
						);
						const De = this.eb.getDiffEditorModel(Ue.uri.toString());
						if (!De) return;
						this.c.setModel(De), this.cb?.setSelection(Ue.label);
						const Re = new s.$hL(ee(qe), 1),
							je = this.editor.getOption(v.EditorOption.lineHeight),
							Ve = this.editor.getLayoutInfo().height,
							Ze = Math.floor(Ve / je),
							et = Math.min(ne(qe) + 8, Math.floor(Ze / 3));
						this.ib(Ue.label);
						const rt = Z(qe),
							ft = se(this.fb.getColorTheme(), rt);
						this.style({ frameColor: ft, arrowColor: ft });
						const bt = [];
						let nt = Se;
						for (const lt of this.eb.changes)
							lt.label === this.eb.changes[this.Y].label &&
								(bt.push(lt.change), Ue === lt && (nt = bt.length - 1));
						(this.K.context = [De.modified.uri, bt, nt]),
							ke &&
								(this.show(Re, et),
								this.editor.setPosition(Re),
								this.editor.focus());
					}
					ib(Se) {
						const ke = this.eb.mapChanges.get(Se),
							Ue = ke.indexOf(this.Y);
						let qe;
						this.kb()
							? ((qe =
									this.eb.changes.length > 1
										? t.localize(8969, null, Ue + 1, ke.length)
										: t.localize(8970, null, Ue + 1, ke.length)),
								(this.db.style.display = "inherit"))
							: ((qe =
									this.eb.changes.length > 1
										? t.localize(8967, null, Se, Ue + 1, ke.length)
										: t.localize(8968, null, Se, Ue + 1, ke.length)),
								(this.db.style.display = "none")),
							this.setTitle(this.m, qe);
					}
					jb(Se) {
						const ke = Se?.provider;
						if (ke === this.eb.changes[this.Y].label) return;
						let Ue = this.Y < this.eb.changes.length - 1 ? this.Y + 1 : 0;
						for (
							let Me = Ue;
							Me !== this.Y;
							Me < this.eb.changes.length - 1 ? Me++ : (Me = 0)
						)
							if (this.eb.changes[Me].label === ke) {
								Ue = Me;
								break;
							}
						let qe = this.Y > 0 ? this.Y - 1 : this.eb.changes.length - 1;
						for (
							let Me = qe;
							Me !== this.Y;
							Me >= 0 ? Me-- : (Me = this.eb.changes.length - 1)
						)
							if (this.eb.changes[Me].label === ke) {
								qe = Me;
								break;
							}
						const Ae =
							Math.abs(
								this.eb.changes[Ue].change.modifiedEndLineNumber -
									this.eb.changes[this.Y].change.modifiedEndLineNumber,
							) <
							Math.abs(
								this.eb.changes[qe].change.modifiedEndLineNumber -
									this.eb.changes[this.Y].change.modifiedEndLineNumber,
							)
								? Ue
								: qe;
						this.showChange(Ae, !1);
					}
					kb() {
						let Se = 0;
						if (this.eb.mapChanges.size > 1) {
							const ke = Array.from(this.eb.mapChanges.keys());
							for (let Ue = 0; Ue < ke.length && Se <= 1; Ue++)
								this.eb.mapChanges.get(ke[Ue]).length > 0 && Se++;
						}
						return Se >= 2;
					}
					lb() {
						if (!this.K) return;
						const Se = this.M.createInstance(
								te,
								this.editor,
								new oe(this.editor),
								U.ThemeIcon.asClassName(O.$cP),
							),
							ke = this.M.createInstance(
								te,
								this.editor,
								new ae(this.editor),
								U.ThemeIcon.asClassName(O.$dP),
							);
						this.o.add(Se), this.o.add(ke);
						const Ue = [];
						this.X && this.X.dispose(),
							(this.X = this.gb.createMenu(P.$XX.SCMChangeContext, this.hb)),
							(0, k.$Kyb)(this.X, { shouldForwardArgs: !0 }, Ue),
							this.K.clear(),
							this.K.push(Ue.reverse(), { label: !1, icon: !0 }),
							this.K.push([ke, Se], { label: !1, icon: !0 }),
							this.K.push(
								new S.$rj(
									"peekview.close",
									t.localize(8971, null),
									U.ThemeIcon.asClassName(B.$ak.close),
									!0,
									() => this.dispose(),
								),
								{ label: !1, icon: !0 },
							);
					}
					P(Se) {
						super.P(Se, !0),
							(this.db = A.$ghb(this.s, A.$(".dropdown"))),
							(this.cb = this.M.createInstance(
								W.$9mc,
								new W.$0mc((ke) => this.jb(ke)),
								this.eb.quickDiffs.map((ke) => ke.label),
								this.eb.changes[this.Y].label,
							)),
							this.cb.render(this.db),
							this.lb();
					}
					R() {
						const Se = new ie();
						return (
							Se.onDidRun((ke) => {
								!(ke.action instanceof te) && !ke.error && this.dispose();
							}),
							{ ...super.R(), actionRunner: Se }
						);
					}
					T(Se) {
						const ke = {
							scrollBeyondLastLine: !0,
							scrollbar: {
								verticalScrollbarSize: 14,
								horizontal: "auto",
								useShadows: !0,
								verticalHasArrows: !1,
								horizontalHasArrows: !1,
							},
							overviewRulerLanes: 2,
							fixedOverflowWidgets: !0,
							minimap: { enabled: !1 },
							renderSideBySide: !1,
							readOnly: !1,
							renderIndicators: !1,
							diffAlgorithm: "advanced",
							ignoreTrimWhitespace: !1,
							stickyScroll: { enabled: !1 },
						};
						(this.c = this.M.createInstance($.$7mc, Se, ke, {}, this.editor)),
							this.o.add(this.c);
					}
					D(Se) {
						typeof this.bb > "u" ||
							this.c.layout({ height: this.bb, width: Se });
					}
					W(Se, ke) {
						super.W(Se, ke),
							this.c.layout({ height: Se, width: ke }),
							typeof this.bb > "u" && this.ab && this.rb(this.ab),
							(this.bb = Se);
					}
					rb(Se) {
						let ke, Ue;
						Se.modifiedEndLineNumber === 0
							? ((ke = Se.modifiedStartLineNumber),
								(Ue = Se.modifiedStartLineNumber + 1))
							: Se.originalEndLineNumber > 0
								? ((ke = Se.modifiedStartLineNumber - 1),
									(Ue = Se.modifiedEndLineNumber + 1))
								: ((ke = Se.modifiedStartLineNumber),
									(Ue = Se.modifiedEndLineNumber)),
							this.c.revealLinesInCenter(ke, Ue, L.ScrollType.Immediate);
					}
					sb(Se) {
						const ke = Se.getColor(p.$aNb) || H.$UL.transparent;
						this.style({
							arrowColor: ke,
							frameColor: ke,
							headerBackgroundColor: Se.getColor(p.$0Mb) || H.$UL.transparent,
							primaryHeadingColor: Se.getColor(p.$$Mb),
							secondaryHeadingColor: Se.getColor(p.$_Mb),
						});
					}
					A(Se) {
						this.editor.revealLineInCenterIfOutsideViewport(
							Se.endLineNumber,
							L.ScrollType.Smooth,
						);
					}
					hasFocus() {
						return this.c.hasTextFocus();
					}
					dispose() {
						super.dispose(), this.X?.dispose();
					}
				};
				le = Ne([j(2, h.$iP), j(3, C.$Li), j(4, P.$YX), j(5, o.$6j)], le);
				class oe extends g.$itb {
					constructor(Se) {
						super({
							id: "editor.action.dirtydiff.previous",
							label: t.localize(8972, null),
							alias: "Show Previous Change",
							precondition: F.$WPb.toNegated(),
							kbOpts: {
								kbExpr: f.EditorContextKeys.editorTextFocus,
								primary: b.KeyMod.Shift | b.KeyMod.Alt | b.KeyCode.F3,
								weight: y.KeybindingWeight.EditorContrib,
							},
						}),
							(this.h = Se);
					}
					run(Se) {
						const ke = this.h ?? re(Se);
						if (!ke) return;
						const Ue = fe.get(ke);
						Ue && Ue.canNavigate() && Ue.previous();
					}
				}
				(e.$_mc = oe), (0, g.$ntb)(oe);
				class ae extends g.$itb {
					constructor(Se) {
						super({
							id: "editor.action.dirtydiff.next",
							label: t.localize(8973, null),
							alias: "Show Next Change",
							precondition: F.$WPb.toNegated(),
							kbOpts: {
								kbExpr: f.EditorContextKeys.editorTextFocus,
								primary: b.KeyMod.Alt | b.KeyCode.F3,
								weight: y.KeybindingWeight.EditorContrib,
							},
						}),
							(this.h = Se);
					}
					run(Se) {
						const ke = this.h ?? re(Se);
						if (!ke) return;
						const Ue = fe.get(ke);
						Ue && Ue.canNavigate() && Ue.next();
					}
				}
				(e.$anc = ae),
					(0, g.$ntb)(ae),
					P.$ZX.appendMenuItem(P.$XX.MenubarGoMenu, {
						group: "7_change_nav",
						command: {
							id: "editor.action.dirtydiff.next",
							title: t.localize(8974, null),
						},
						order: 1,
					}),
					P.$ZX.appendMenuItem(P.$XX.MenubarGoMenu, {
						group: "7_change_nav",
						command: {
							id: "editor.action.dirtydiff.previous",
							title: t.localize(8975, null),
						},
						order: 2,
					});
				class pe extends g.$itb {
					constructor() {
						super({
							id: "workbench.action.editor.previousChange",
							label: t.localize(8976, null),
							alias: "Go to Previous Change",
							precondition: F.$WPb.toNegated(),
							kbOpts: {
								kbExpr: f.EditorContextKeys.editorTextFocus,
								primary: b.KeyMod.Shift | b.KeyMod.Alt | b.KeyCode.F5,
								weight: y.KeybindingWeight.EditorContrib,
							},
						});
					}
					async run(Se) {
						const ke = re(Se),
							Ue = Se.get(G.$Owb),
							qe = Se.get(K.$XK),
							Ae = Se.get(N.$dtb);
						if (!ke || !ke.hasModel()) return;
						const Me = fe.get(ke);
						if (!Me || !Me.modelRegistry) return;
						const De = ke.getPosition().lineNumber,
							Re = Me.modelRegistry.getModel(ke.getModel(), ke);
						if (!Re || Re.changes.length === 0) return;
						const je = Re.findPreviousClosestChange(De, !1),
							Ve = Re.changes[je];
						await ue(Ve.change, Ue), ye(Ve.change, ke, qe, Ae);
					}
				}
				(e.$bnc = pe), (0, g.$ntb)(pe);
				class $e extends g.$itb {
					constructor() {
						super({
							id: "workbench.action.editor.nextChange",
							label: t.localize(8977, null),
							alias: "Go to Next Change",
							precondition: F.$WPb.toNegated(),
							kbOpts: {
								kbExpr: f.EditorContextKeys.editorTextFocus,
								primary: b.KeyMod.Alt | b.KeyCode.F5,
								weight: y.KeybindingWeight.EditorContrib,
							},
						});
					}
					async run(Se) {
						const ke = Se.get(G.$Owb),
							Ue = re(Se),
							qe = Se.get(K.$XK),
							Ae = Se.get(N.$dtb);
						if (!Ue || !Ue.hasModel()) return;
						const Me = fe.get(Ue);
						if (!Me || !Me.modelRegistry) return;
						const De = Ue.getPosition().lineNumber,
							Re = Me.modelRegistry.getModel(Ue.getModel(), Ue);
						if (!Re || Re.changes.length === 0) return;
						const je = Re.findNextClosestChange(De, !1),
							Ve = Re.changes[je].change;
						await ue(Ve, ke), ye(Ve, Ue, qe, Ae);
					}
				}
				e.$cnc = $e;
				function ye(Be, Se, ke, Ue) {
					const qe = new s.$hL(Be.modifiedStartLineNumber, 1);
					Se.setPosition(qe),
						Se.revealPositionInCenter(qe),
						ke.isScreenReaderOptimized() &&
							(Se.setSelection({
								startLineNumber: Be.modifiedStartLineNumber,
								startColumn: 0,
								endLineNumber: Be.modifiedStartLineNumber,
								endColumn: Number.MAX_VALUE,
							}),
							Ue.getActiveCodeEditor()?.writeScreenReaderContent(
								"diff-navigation",
							));
				}
				async function ue(Be, Se) {
					switch (Z(Be)) {
						case Q.Add:
							Se.playSignal(G.$Twb.diffLineInserted, {
								allowManyInParallel: !0,
								source: "dirtyDiffDecoration",
							});
							break;
						case Q.Delete:
							Se.playSignal(G.$Twb.diffLineDeleted, {
								allowManyInParallel: !0,
								source: "dirtyDiffDecoration",
							});
							break;
						case Q.Modify:
							Se.playSignal(G.$Twb.diffLineModified, {
								allowManyInParallel: !0,
								source: "dirtyDiffDecoration",
							});
							break;
					}
				}
				(0, g.$ntb)($e),
					y.$TX.registerCommandAndKeybindingRule({
						id: "closeDirtyDiff",
						weight: y.KeybindingWeight.EditorContrib + 50,
						primary: b.KeyCode.Escape,
						secondary: [b.KeyMod.Shift | b.KeyCode.Escape],
						when: o.$Kj.and(e.$$mc),
						handler: (Be) => {
							const Se = re(Be);
							if (!Se) return;
							const ke = fe.get(Se);
							ke && ke.close();
						},
					});
				let fe = class extends w.$1c {
					static {
						X = this;
					}
					static {
						this.ID = "editor.contrib.dirtydiff";
					}
					static get(Se) {
						return Se.getContribution(X.ID);
					}
					constructor(Se, ke, Ue, qe) {
						if (
							(super(),
							(this.s = Se),
							(this.t = Ue),
							(this.u = qe),
							(this.modelRegistry = null),
							(this.c = null),
							(this.f = null),
							(this.h = w.$1c.None),
							(this.j = null),
							(this.m = !1),
							(this.n = new w.$Zc()),
							(this.m = !ke.getContextKeyValue("isInDiffEditor")),
							(this.q = A.$Rgb(void 0, void 0, this.B)),
							this.m)
						) {
							(this.g = e.$$mc.bindTo(ke)),
								this.D(Se.onDidChangeModel(() => this.close()));
							const Ae = E.Event.filter(Ue.onDidChangeConfiguration, (Me) =>
								Me.affectsConfiguration("scm.diffDecorationsGutterAction"),
							);
							this.D(Ae(this.w, this)), this.w();
						}
					}
					w() {
						const Se = this.t.getValue("scm.diffDecorationsGutterAction");
						this.n.clear(),
							Se === "diff"
								? (this.n.add(this.s.onMouseDown((ke) => this.C(ke))),
									this.n.add(this.s.onMouseUp((ke) => this.F(ke))),
									(this.q.textContent = `
				.monaco-editor .dirty-diff-glyph {
					cursor: pointer;
				}

				.monaco-editor .margin-view-overlays .dirty-diff-glyph:hover::before {
					height: 100%;
					width: 6px;
					left: -6px;
				}

				.monaco-editor .margin-view-overlays .dirty-diff-deleted:hover::after {
					bottom: 0;
					border-top-width: 0;
					border-bottom-width: 0;
				}
			`))
								: (this.q.textContent = "");
					}
					canNavigate() {
						return (
							!this.f ||
							this.f?.index === -1 ||
							(!!this.c && this.c.changes.length > 1)
						);
					}
					refresh() {
						this.f?.showChange(this.f.index, !1);
					}
					next(Se) {
						if (!this.y() || !this.f || !this.c) return;
						let ke;
						if (
							this.s.hasModel() &&
							(typeof Se == "number" || !this.f.provider)
						)
							ke = this.c.findNextClosestChange(
								typeof Se == "number" ? Se : this.s.getPosition().lineNumber,
								!0,
								this.f.provider,
							);
						else {
							const Ue =
									this.c.mapChanges.get(this.f.provider) ??
									this.c.mapChanges.values().next().value,
								qe = Ue.findIndex((Ae) => Ae === this.f.index);
							ke = Ue[(0, l.rot)(qe + 1, Ue.length)];
						}
						this.f.showChange(ke);
					}
					previous(Se) {
						if (!this.y() || !this.f || !this.c) return;
						let ke;
						if (this.s.hasModel() && typeof Se == "number")
							ke = this.c.findPreviousClosestChange(
								typeof Se == "number" ? Se : this.s.getPosition().lineNumber,
								!0,
								this.f.provider,
							);
						else {
							const Ue =
									this.c.mapChanges.get(this.f.provider) ??
									this.c.mapChanges.values().next().value,
								qe = Ue.findIndex((Ae) => Ae === this.f.index);
							ke = Ue[(0, l.rot)(qe - 1, Ue.length)];
						}
						this.f.showChange(ke);
					}
					close() {
						this.h.dispose(), (this.h = w.$1c.None);
					}
					y() {
						if (!this.m) return !1;
						if (this.f)
							return !this.c || this.c.changes.length === 0
								? (this.close(), !1)
								: !0;
						if (!this.modelRegistry) return !1;
						const Se = this.s.getModel();
						if (!Se) return !1;
						const ke = this.modelRegistry.getModel(Se, this.s);
						if (!ke || ke.changes.length === 0) return !1;
						(this.c = ke),
							(this.f = this.u.createInstance(le, this.s, ke)),
							this.g.set(!0);
						const Ue = new w.$Zc();
						return (
							Ue.add(E.Event.once(this.f.onDidClose)(this.close, this)),
							E.Event.chain(ke.onDidChange, (Ae) =>
								Ae.filter((Me) => Me.diff.length > 0).map((Me) => Me.diff),
							)(this.z, this, Ue),
							Ue.add(this.f),
							Ue.add(
								(0, w.$Yc)(() => {
									(this.c = null),
										(this.f = null),
										this.g.set(!1),
										this.s.focus();
								}),
							),
							(this.h = Ue),
							!0
						);
					}
					z(Se) {
						if (!(!this.c || !this.f || this.f.hasFocus())) {
							for (const ke of Se)
								if (ke.start <= this.f.index) {
									this.next();
									return;
								}
							this.refresh();
						}
					}
					C(Se) {
						this.j = null;
						const ke = Se.target.range;
						if (
							!ke ||
							!Se.event.leftButton ||
							Se.target.type !== n.MouseTargetType.GUTTER_LINE_DECORATIONS ||
							!Se.target.element ||
							Se.target.element.className.indexOf("dirty-diff-glyph") < 0
						)
							return;
						const Ue = Se.target.detail,
							qe = Se.target.element.offsetLeft,
							Ae = Ue.offsetX - qe;
						Ae < -3 || Ae > 3 || (this.j = { lineNumber: ke.startLineNumber });
					}
					F(Se) {
						if (!this.j) return;
						const { lineNumber: ke } = this.j;
						this.j = null;
						const Ue = Se.target.range;
						if (
							!Ue ||
							Ue.startLineNumber !== ke ||
							Se.target.type !== n.MouseTargetType.GUTTER_LINE_DECORATIONS ||
							!this.modelRegistry
						)
							return;
						const qe = this.s.getModel();
						if (!qe) return;
						const Ae = this.modelRegistry.getModel(qe, this.s);
						if (!Ae) return;
						const Me = Ae.changes.findIndex((De) => _(ke, De.change));
						Me < 0 || (Me === this.f?.index ? this.close() : this.next(ke));
					}
					getChanges() {
						if (!this.modelRegistry) return [];
						if (!this.s.hasModel()) return [];
						const Se = this.modelRegistry.getModel(this.s.getModel(), this.s);
						return Se ? Se.changes.map((ke) => ke.change) : [];
					}
					dispose() {
						this.n.dispose(), super.dispose();
					}
				};
				(e.$dnc = fe),
					(e.$dnc = fe = X = Ne([j(1, o.$6j), j(2, r.$gj), j(3, C.$Li)], fe));
				const me = (0, c.$wP)(
						"editorGutter.modifiedBackground",
						{
							dark: "#1B81A8",
							light: "#2090D3",
							hcDark: "#1B81A8",
							hcLight: "#2090D3",
						},
						t.localize(8978, null),
					),
					ve = (0, c.$wP)(
						"editorGutter.addedBackground",
						{
							dark: "#487E02",
							light: "#48985D",
							hcDark: "#487E02",
							hcLight: "#48985D",
						},
						t.localize(8979, null),
					),
					ge = (0, c.$wP)(
						"editorGutter.deletedBackground",
						c.$gQ,
						t.localize(8980, null),
					),
					be = (0, c.$wP)(
						"minimapGutter.modifiedBackground",
						me,
						t.localize(8981, null),
					),
					Ce = (0, c.$wP)(
						"minimapGutter.addedBackground",
						ve,
						t.localize(8982, null),
					),
					Le = (0, c.$wP)(
						"minimapGutter.deletedBackground",
						ge,
						t.localize(8983, null),
					),
					Fe = (0, c.$wP)(
						"editorOverviewRuler.modifiedForeground",
						(0, c.$BP)(me, 0.6),
						t.localize(8984, null),
					),
					Oe = (0, c.$wP)(
						"editorOverviewRuler.addedForeground",
						(0, c.$BP)(ve, 0.6),
						t.localize(8985, null),
					),
					xe = (0, c.$wP)(
						"editorOverviewRuler.deletedForeground",
						(0, c.$BP)(ge, 0.6),
						t.localize(8986, null),
					);
				let He = (Y = class extends w.$1c {
					static createDecoration(Se, ke, Ue) {
						const qe = {
							description: "dirty-diff-decoration",
							isWholeLine: Ue.isWholeLine,
						};
						return (
							Ue.gutter &&
								((qe.linesDecorationsClassName = `dirty-diff-glyph ${Se}`),
								(qe.linesDecorationsTooltip = ke)),
							Ue.overview.active &&
								(qe.overviewRuler = {
									color: (0, h.$jP)(Ue.overview.color),
									position: D.OverviewRulerLane.Left,
								}),
							Ue.minimap.active &&
								(qe.minimap = {
									color: (0, h.$jP)(Ue.minimap.color),
									position: D.MinimapPosition.Gutter,
								}),
							a.$eY.createDynamic(qe)
						);
					}
					constructor(Se, ke, Ue, qe) {
						super(), (this.q = ke), (this.s = Ue), (this.t = qe), (this.n = Se);
						const Ae = qe.getValue("scm.diffDecorations"),
							Me = Ae === "all" || Ae === "gutter",
							De = Ae === "all" || Ae === "overview",
							Re = Ae === "all" || Ae === "minimap",
							je = t.localize(8987, null);
						(this.c = Y.createDecoration("dirty-diff-added", je, {
							gutter: Me,
							overview: { active: De, color: Oe },
							minimap: { active: Re, color: Ce },
							isWholeLine: !0,
						})),
							(this.f = Y.createDecoration("dirty-diff-added-pattern", je, {
								gutter: Me,
								overview: { active: De, color: Oe },
								minimap: { active: Re, color: Ce },
								isWholeLine: !0,
							}));
						const Ve = t.localize(8988, null);
						(this.g = Y.createDecoration("dirty-diff-modified", Ve, {
							gutter: Me,
							overview: { active: De, color: Fe },
							minimap: { active: Re, color: be },
							isWholeLine: !0,
						})),
							(this.h = Y.createDecoration("dirty-diff-modified-pattern", Ve, {
								gutter: Me,
								overview: { active: De, color: Fe },
								minimap: { active: Re, color: be },
								isWholeLine: !0,
							})),
							(this.j = Y.createDecoration(
								"dirty-diff-deleted",
								t.localize(8989, null),
								{
									gutter: Me,
									overview: { active: De, color: xe },
									minimap: { active: Re, color: Le },
									isWholeLine: !1,
								},
							)),
							this.D(
								qe.onDidChangeConfiguration((Ze) => {
									Ze.affectsConfiguration("scm.diffDecorationsGutterPattern") &&
										this.u();
								}),
							),
							this.D(Ue.onDidChange(this.u, this));
					}
					u() {
						if (!this.n) return;
						const Se = this.t.getValue("scm.diffDecorationsGutterPattern"),
							ke = this.s.changes.map((Ue) => {
								const qe = Ue.change,
									Ae = Z(qe),
									Me = qe.modifiedStartLineNumber,
									De = qe.modifiedEndLineNumber || Me;
								switch (Ae) {
									case Q.Add:
										return {
											range: {
												startLineNumber: Me,
												startColumn: 1,
												endLineNumber: De,
												endColumn: 1,
											},
											options: Se.added ? this.f : this.c,
										};
									case Q.Delete:
										return {
											range: {
												startLineNumber: Me,
												startColumn: Number.MAX_VALUE,
												endLineNumber: Me,
												endColumn: Number.MAX_VALUE,
											},
											options: this.j,
										};
									case Q.Modify:
										return {
											range: {
												startLineNumber: Me,
												startColumn: 1,
												endLineNumber: De,
												endColumn: 1,
											},
											options: Se.modified ? this.h : this.g,
										};
								}
							});
						this.m
							? this.m.set(ke)
							: (this.m = this.q.createDecorationsCollection(ke));
					}
					dispose() {
						super.dispose(),
							this.m && this.m?.clear(),
							(this.n = null),
							(this.m = void 0);
					}
				});
				He = Y = Ne([j(3, r.$gj)], He);
				function Ke(Be, Se) {
					let ke = Be.modifiedStartLineNumber - Se.modifiedStartLineNumber;
					return ke !== 0 ||
						((ke = Be.modifiedEndLineNumber - Se.modifiedEndLineNumber),
						ke !== 0) ||
						((ke = Be.originalStartLineNumber - Se.originalStartLineNumber),
						ke !== 0)
						? ke
						: Be.originalEndLineNumber - Se.originalEndLineNumber;
				}
				async function Je(Be, Se, ke, Ue) {
					const qe = await Be.getQuickDiffs(Se, ke, Ue);
					return qe.length > 0 ? qe[0].originalResource : null;
				}
				let Te = class extends w.$1c {
					get original() {
						return this.g;
					}
					get changes() {
						return this.u;
					}
					get mapChanges() {
						return this.w;
					}
					constructor(Se, ke, Ue, qe, Ae, Me, De) {
						super(),
							(this.y = ke),
							(this.z = Ue),
							(this.C = qe),
							(this.F = Ae),
							(this.G = Me),
							(this.H = De),
							(this.c = []),
							(this.f = new Map()),
							(this.g = []),
							(this.j = new i.$Kh(200)),
							(this.n = new Set()),
							(this.q = this.D(new w.$Zc())),
							(this.s = !1),
							(this.t = new E.$re()),
							(this.onDidChange = this.t.event),
							(this.u = []),
							(this.w = new Map()),
							(this.h = Se),
							this.D(Se.textEditorModel.onDidChangeContent(() => this.J())),
							this.D(
								E.Event.filter(
									Ae.onDidChangeConfiguration,
									(Re) =>
										Re.affectsConfiguration(
											"scm.diffDecorationsIgnoreTrimWhitespace",
										) ||
										Re.affectsConfiguration("diffEditor.ignoreTrimWhitespace"),
								)(this.J, this),
							),
							this.D(ke.onDidAddRepository(this.I, this));
						for (const Re of ke.repositories) this.I(Re);
						this.D(
							this.h.onDidChangeEncoding(() => {
								this.j.cancel(),
									(this.c = []),
									this.f.clear(),
									(this.g = []),
									(this.m = void 0),
									this.L([], new Map()),
									this.J();
							}),
						),
							this.D(this.z.onDidChangeQuickDiffProviders(() => this.J())),
							this.J();
					}
					get quickDiffs() {
						return this.c;
					}
					getDiffEditorModel(Se) {
						if (!this.f.has(Se)) return;
						const ke = this.f.get(Se);
						return {
							modified: this.h.textEditorModel,
							original: ke.textEditorModel,
						};
					}
					I(Se) {
						const ke = new w.$Zc();
						this.n.add(ke), ke.add((0, w.$Yc)(() => this.n.delete(ke)));
						const Ue = E.Event.any(
							Se.provider.onDidChange,
							Se.provider.onDidChangeResources,
						);
						ke.add(Ue(this.J, this));
						const qe = E.Event.filter(
							this.y.onDidRemoveRepository,
							(Ae) => Ae === Se,
						);
						ke.add(qe(() => (0, w.$Vc)(ke), null)), this.J();
					}
					J() {
						return this.j
							? this.j
									.trigger(() => this.M())
									.then(
										(Se) => {
											const ke = Array.from(this.f.values());
											!Se ||
												this.s ||
												this.h.isDisposed() ||
												ke.some((Ue) => Ue.isDisposed()) ||
												(ke.every(
													(Ue) => Ue.textEditorModel.getValueLength() === 0,
												) && (Se.changes = []),
												Se.changes || (Se.changes = []),
												this.L(Se.changes, Se.mapChanges));
										},
										(Se) => (0, z.$4)(Se),
									)
							: Promise.resolve(null);
					}
					L(Se, ke) {
						const Ue = (0, M.$Hb)(this.u, Se, (qe, Ae) =>
							Ke(qe.change, Ae.change),
						);
						(this.u = Se),
							(this.w = ke),
							this.t.fire({ changes: Se, diff: Ue });
					}
					M() {
						return this.H.withProgress(
							{ location: x.ProgressLocation.Scm, delay: 250 },
							async () => {
								const Se = await this.N();
								if (this.s || this.h.isDisposed() || Se.length === 0)
									return Promise.resolve({
										changes: [],
										mapChanges: new Map(),
									});
								const ke = Se.filter((Re) =>
									this.C.canComputeDirtyDiff(
										Re.originalResource,
										this.h.resource,
									),
								);
								if (ke.length === 0)
									return Promise.resolve({
										changes: [],
										mapChanges: new Map(),
									});
								const Ue = this.F.getValue(
										"scm.diffDecorationsIgnoreTrimWhitespace",
									),
									qe =
										Ue === "inherit"
											? this.F.getValue("diffEditor.ignoreTrimWhitespace")
											: Ue !== "false",
									Ae = [];
								for (const Re of ke) {
									const je = await this.C.computeDirtyDiff(
										Re.originalResource,
										this.h.resource,
										qe,
									);
									if (je)
										for (const Ve of je)
											Ve &&
												Ae.push({
													change: Ve,
													label: Re.label,
													uri: Re.originalResource,
												});
								}
								const Me = Ae.sort((Re, je) => Ke(Re.change, je.change)),
									De = new Map();
								for (let Re = 0; Re < Me.length; Re++) {
									const je = Me[Re].label;
									De.has(je) || De.set(je, []), De.get(je).push(Re);
								}
								return { changes: Me, mapChanges: De };
							},
						);
					}
					N() {
						return this.m
							? this.m
							: ((this.m = this.O().then(async (Se) =>
									this.s
										? []
										: Se.length === 0
											? ((this.c = []), this.f.clear(), (this.g = []), [])
											: (0, M.$yb)(
														this.c,
														Se,
														(ke, Ue) =>
															ke.originalResource.toString() ===
																Ue.originalResource.toString() &&
															ke.label === Ue.label,
													)
												? Se
												: (this.q.clear(),
													this.f.clear(),
													(this.g = []),
													(this.c = Se),
													(
														await Promise.all(
															Se.map(async (ke) => {
																try {
																	const Ue = await this.G.createModelReference(
																		ke.originalResource,
																	);
																	if (this.s) return Ue.dispose(), [];
																	if (
																		(this.f.set(
																			ke.originalResource.toString(),
																			Ue.object,
																		),
																		this.g.push(Ue.object.textEditorModel),
																		(0, R.$mZ)(Ue.object))
																	) {
																		const qe = this.h.getEncoding();
																		qe &&
																			Ue.object.setEncoding(
																				qe,
																				R.EncodingMode.Decode,
																			);
																	}
																	return (
																		this.q.add(Ue),
																		this.q.add(
																			Ue.object.textEditorModel.onDidChangeContent(
																				() => this.J(),
																			),
																		),
																		ke
																	);
																} catch {
																	return [];
																}
															}),
														)
													).flat()),
								)),
								this.m.finally(() => {
									this.m = void 0;
								}));
					}
					async O() {
						if (this.s) return Promise.resolve([]);
						const Se = this.h.resource;
						return this.z.getQuickDiffs(
							Se,
							this.h.getLanguageId(),
							this.h.textEditorModel
								? (0, D.$TN)(this.h.textEditorModel)
								: void 0,
						);
					}
					findNextClosestChange(Se, ke = !0, Ue) {
						let qe;
						!Ue && ke && (qe = this.quickDiffs.find((Me) => Me.isSCM)?.label);
						const Ae = [];
						for (let Me = 0; Me < this.changes.length; Me++) {
							if (Ue && this.changes[Me].label !== Ue) continue;
							const De = this.changes[Me],
								Re = Ae.length;
							if (ke) {
								if (ee(De.change) >= Se)
									if (qe && De.label !== qe) Ae.push(Me);
									else return Me;
							} else if (De.change.modifiedStartLineNumber > Se) return Me;
							if (Ae.length > 0 && Ae.length === Re) return Ae[0];
						}
						return Ae.length > 0 ? Ae[0] : 0;
					}
					findPreviousClosestChange(Se, ke = !0, Ue) {
						for (let qe = this.changes.length - 1; qe >= 0; qe--) {
							if (Ue && this.changes[qe].label !== Ue) continue;
							const Ae = this.changes[qe].change;
							if (ke) {
								if (Ae.modifiedStartLineNumber <= Se) return qe;
							} else if (ee(Ae) < Se) return qe;
						}
						return this.changes.length - 1;
					}
					dispose() {
						super.dispose(),
							(this.s = !0),
							(this.c = []),
							this.f.clear(),
							(this.g = []),
							this.j.cancel(),
							this.n.forEach((Se) => (0, w.$Vc)(Se)),
							this.n.clear();
					}
				};
				(e.$fnc = Te),
					(e.$fnc = Te =
						Ne(
							[
								j(1, u.$c7),
								j(2, J.$8mc),
								j(3, m.$Cxb),
								j(4, r.$gj),
								j(5, d.$MO),
								j(6, x.$8N),
							],
							Te,
						));
				class Ee {
					constructor(Se, ke) {
						(this.model = Se), (this.decorator = ke);
					}
					dispose() {
						this.decorator.dispose(), this.model.dispose();
					}
				}
				let Ie = class extends w.$1c {
					constructor(Se, ke, Ue, qe) {
						super(),
							(this.m = Se),
							(this.n = ke),
							(this.q = Ue),
							(this.s = qe),
							(this.c = !1),
							(this.f = { width: 3, visibility: "always" }),
							(this.g = new q.$Gc()),
							(this.h = this.D(new w.$Zc())),
							(this.j = A.$Rgb(void 0, void 0, this.B));
						const Ae = E.Event.filter(Ue.onDidChangeConfiguration, (Re) =>
							Re.affectsConfiguration("scm.diffDecorations"),
						);
						this.D(Ae(this.t, this)), this.t();
						const Me = E.Event.filter(Ue.onDidChangeConfiguration, (Re) =>
							Re.affectsConfiguration("scm.diffDecorationsGutterWidth"),
						);
						this.D(Me(this.u, this)), this.u();
						const De = E.Event.filter(Ue.onDidChangeConfiguration, (Re) =>
							Re.affectsConfiguration("scm.diffDecorationsGutterVisibility"),
						);
						this.D(De(this.w, this)), this.w();
					}
					t() {
						this.q.getValue("scm.diffDecorations") !== "none"
							? this.z()
							: this.C();
					}
					u() {
						let Se = this.q.getValue("scm.diffDecorationsGutterWidth");
						(isNaN(Se) || Se <= 0 || Se > 5) && (Se = 3),
							this.y({ ...this.f, width: Se });
					}
					w() {
						const Se = this.q.getValue("scm.diffDecorationsGutterVisibility");
						this.y({ ...this.f, visibility: Se });
					}
					y(Se) {
						(this.f = Se),
							(this.j.textContent = `
			.monaco-editor .dirty-diff-added,
			.monaco-editor .dirty-diff-modified {
				border-left-width:${Se.width}px;
			}
			.monaco-editor .dirty-diff-added-pattern,
			.monaco-editor .dirty-diff-added-pattern:before,
			.monaco-editor .dirty-diff-modified-pattern,
			.monaco-editor .dirty-diff-modified-pattern:before {
				background-size: ${Se.width}px ${Se.width}px;
			}
			.monaco-editor .dirty-diff-added,
			.monaco-editor .dirty-diff-added-pattern,
			.monaco-editor .dirty-diff-modified,
			.monaco-editor .dirty-diff-modified-pattern,
			.monaco-editor .dirty-diff-deleted {
				opacity: ${Se.visibility === "always" ? 1 : 0};
			}
		`);
					}
					z() {
						this.c && this.C(),
							this.h.add(
								E.Event.any(
									this.m.onDidCloseEditor,
									this.m.onDidVisibleEditorsChange,
								)(() => this.F()),
							),
							this.F(),
							(this.c = !0);
					}
					C() {
						if (this.c) {
							this.h.clear();
							for (const [, Se] of this.g) (0, w.$Vc)(Se.values());
							this.g.clear(), (this.c = !1);
						}
					}
					F() {
						for (const Se of this.m.visibleTextEditorControls)
							if ((0, n.$0sb)(Se)) {
								const ke = Se.getModel(),
									Ue = fe.get(Se);
								if (
									(Ue && (Ue.modelRegistry = this),
									ke &&
										(!this.g.has(ke.uri) ||
											!this.g.get(ke.uri).has(Se.getId())))
								) {
									const qe = this.s.files.get(ke.uri);
									if (qe?.isResolved()) {
										const Ae = this.n.createInstance(Te, qe),
											Me = new He(qe.textEditorModel, Se, Ae, this.q);
										this.g.has(ke.uri) || this.g.set(ke.uri, new Map()),
											this.g.get(ke.uri)?.set(Se.getId(), new Ee(Ae, Me));
									}
								}
							}
						for (const [Se, ke] of this.g)
							for (const Ue of ke.keys())
								this.m.visibleTextEditorControls.find(
									(qe) =>
										(0, n.$0sb)(qe) &&
										qe.getModel()?.uri.toString() === Se.toString() &&
										qe.getId() === Ue,
								) ||
									(ke.has(Ue) &&
										(ke.get(Ue)?.dispose(),
										ke.delete(Ue),
										ke.size === 0 && this.g.delete(Se)));
					}
					getModel(Se, ke) {
						return this.g.get(Se.uri)?.get(ke.getId())?.model;
					}
					dispose() {
						this.C(), super.dispose();
					}
				};
				(e.$gnc = Ie),
					(e.$gnc = Ie =
						Ne([j(0, V.$IY), j(1, C.$Li), j(2, r.$gj), j(3, R.$kZ)], Ie)),
					(0, g.$qtb)(
						fe.ID,
						fe,
						g.EditorContributionInstantiation.AfterFirstRender,
					);
			},
		),
		define(
			de[1885],
			he([1, 0, 24, 33, 46, 17, 71, 64, 200, 42, 674, 4, 8, 5, 84, 1884, 803]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$RXc = o),
					(a = mt(a)),
					(0, w.$ntb)(
						class extends w.$itb {
							constructor() {
								super({
									id: "editor.action.formatChanges",
									label: a.localize(7067, null),
									alias: "Format Modified Lines",
									precondition: h.$Kj.and(
										C.EditorContextKeys.writable,
										C.EditorContextKeys.hasDocumentSelectionFormattingProvider,
									),
								});
							}
							async run(b, s) {
								const l = b.get(c.$Li);
								if (!s.hasModel()) return;
								const y = await l.invokeFunction(o, s.getModel());
								if ((0, t.$Pb)(y))
									return l.invokeFunction(
										u.$Lhc,
										s,
										y,
										u.FormattingMode.Explicit,
										n.$0N.None,
										i.CancellationToken.None,
										!0,
									);
							}
						},
					);
				async function o(f, b) {
					const s = f.get(p.$8mc),
						l = f.get(m.$Cxb),
						y = f.get(r.$MO),
						$ = await (0, g.$enc)(s, b.uri, b.getLanguageId(), (0, d.$TN)(b));
					if (!$) return null;
					const v = [],
						S = await y.createModelReference($);
					try {
						if (!l.canComputeDirtyDiff($, b.uri)) return;
						const I = await l.computeDirtyDiff($, b.uri, !1);
						if (!(0, t.$Pb)(I)) return;
						for (const T of I)
							v.push(
								b.validateRange(
									new E.$iL(
										T.modifiedStartLineNumber,
										1,
										T.modifiedEndLineNumber || T.modifiedStartLineNumber,
										Number.MAX_SAFE_INTEGER,
									),
								),
							);
					} finally {
						S.dispose();
					}
					return v;
				}
			},
		),
		define(
			de[3692],
			he([
				1, 0, 33, 318, 3, 162, 37, 56, 65, 1148, 188, 48, 17, 74, 69, 393, 291,
				674, 254, 4, 10, 39, 5, 84, 30, 32, 55, 44, 1885, 18, 87, 52, 85,
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
					(e.$VXc = e.$UXc = e.$TXc = e.$SXc = void 0),
					(C = mt(C));
				let N = class {
					constructor(H, q) {
						(this.c = H), (this.d = q);
					}
					async participate(H, q) {
						if (!H.textEditorModel) return;
						const V = this.c.getValue("files.trimTrailingWhitespace", {
								overrideIdentifier: H.textEditorModel.getLanguageId(),
								resource: H.resource,
							}),
							G = this.c.getValue(
								"files.trimTrailingWhitespaceInRegexAndStrings",
								{
									overrideIdentifier: H.textEditorModel.getLanguageId(),
									resource: H.resource,
								},
							);
						V && this.e(H.textEditorModel, q.reason === T.SaveReason.AUTO, G);
					}
					e(H, q, V) {
						let G = [],
							K = [];
						const J = A(H, this.d);
						if (J && ((G = J.getSelections()), q)) {
							K = G.map((Y) => Y.getPosition());
							const X = f.$aDb.get(J)?.getSessionEnclosingRange();
							if (X)
								for (let Y = X.startLineNumber; Y <= X.endLineNumber; Y++)
									K.push(new a.$hL(Y, H.getLineMaxColumn(Y)));
						}
						const W = (0, r.$Qic)(H, K, V);
						W.length && H.pushEditOperations(G, W, (X) => G);
					}
				};
				(e.$SXc = N), (e.$SXc = N = Ne([j(0, s.$gj), j(1, m.$dtb)], N));
				function A(x, H) {
					let q = null;
					if (x.isAttachedToEditor()) {
						for (const V of H.listCodeEditors())
							if (V.hasModel() && V.getModel() === x) {
								if (V.hasTextFocus()) return V;
								q = V;
							}
					}
					return q;
				}
				let R = class {
					constructor(H, q) {
						(this.c = H), (this.d = q);
					}
					async participate(H, q) {
						H.textEditorModel &&
							this.c.getValue("files.insertFinalNewline", {
								overrideIdentifier: H.textEditorModel.getLanguageId(),
								resource: H.resource,
							}) &&
							this.e(H.textEditorModel);
					}
					e(H) {
						const q = H.getLineCount(),
							V = H.getLineContent(q),
							G = C.$Df(V) === -1;
						if (!q || G) return;
						const K = [
								u.$jL.insert(new a.$hL(q, H.getLineMaxColumn(q)), H.getEOL()),
							],
							J = A(H, this.d);
						J
							? J.executeEdits("insertFinalNewLine", K, J.getSelections())
							: H.pushEditOperations([], K, () => null);
					}
				};
				(e.$TXc = R), (e.$TXc = R = Ne([j(0, s.$gj), j(1, m.$dtb)], R));
				let O = class {
					constructor(H, q) {
						(this.c = H), (this.d = q);
					}
					async participate(H, q) {
						H.textEditorModel &&
							this.c.getValue("files.trimFinalNewlines", {
								overrideIdentifier: H.textEditorModel.getLanguageId(),
								resource: H.resource,
							}) &&
							this.f(H.textEditorModel, q.reason === T.SaveReason.AUTO);
					}
					e(H) {
						for (let q = H.getLineCount(); q >= 1; q--)
							if (H.getLineLength(q) > 0) return q;
						return 0;
					}
					f(H, q) {
						const V = H.getLineCount();
						if (V === 1) return;
						let G = [],
							K = 0;
						const J = A(H, this.d);
						if (J && ((G = J.getSelections()), q))
							for (let ie = 0, ne = G.length; ie < ne; ie++) {
								const ee = G[ie].positionLineNumber;
								ee > K && (K = ee);
							}
						const W = this.e(H),
							X = Math.max(W + 1, K + 1),
							Y = H.validateRange(new h.$iL(X, 1, V, H.getLineMaxColumn(V)));
						Y.isEmpty() ||
							(H.pushEditOperations(G, [u.$jL.delete(Y)], (ie) => G),
							J?.setSelections(G));
					}
				};
				(e.$UXc = O), (e.$UXc = O = Ne([j(0, s.$gj), j(1, m.$dtb)], O));
				let B = class {
					constructor(H, q, V) {
						(this.c = H), (this.d = q), (this.e = V);
					}
					async participate(H, q, V, G) {
						if (!H.textEditorModel || q.reason === T.SaveReason.AUTO) return;
						const K = H.textEditorModel,
							J = { overrideIdentifier: K.getLanguageId(), resource: K.uri },
							W = new $.$0N((ne) => {
								V.report({
									message: (0, b.localize)(
										4899,
										null,
										ne.displayName ||
											(ne.extensionId && ne.extensionId.value) ||
											"???",
										"command:workbench.action.openSettings?%5B%22editor.formatOnSave%22%5D",
									),
								});
							});
						if (!this.c.getValue("editor.formatOnSave", J)) return;
						const Y = A(K, this.d) || K,
							ie = this.c.getValue("editor.formatOnSaveMode", J);
						if (ie === "file")
							await this.e.invokeFunction(
								o.$Nhc,
								Y,
								o.FormattingMode.Silent,
								W,
								G,
							);
						else {
							const ne = await this.e.invokeFunction(
								P.$RXc,
								(0, d.$0sb)(Y) ? Y.getModel() : Y,
							);
							ne === null && ie === "modificationsIfAvailable"
								? await this.e.invokeFunction(
										o.$Nhc,
										Y,
										o.FormattingMode.Silent,
										W,
										G,
									)
								: ne &&
									(await this.e.invokeFunction(
										o.$Lhc,
										Y,
										ne,
										o.FormattingMode.Silent,
										W,
										G,
										!1,
									));
						}
					}
				};
				B = Ne([j(0, s.$gj), j(1, m.$dtb), j(2, y.$Li)], B);
				let U = class extends w.$1c {
					constructor(H, q, V, G, K, J, W, X) {
						super(),
							(this.c = H),
							(this.f = q),
							(this.g = V),
							(this.h = G),
							(this.j = K),
							(this.m = J),
							(this.n = W),
							(this.q = X),
							this.D(
								this.j.onDidChangeFocus(() => {
									this.r();
								}),
							),
							this.D(
								this.m.onDidActiveEditorChange(() => {
									this.r();
								}),
							);
					}
					async r() {
						if (
							this.c.getValue("editor.codeActions.triggerOnFocusChange") &&
							this.c.getValue("files.autoSave") === "afterDelay"
						) {
							const H = this.n.getActiveCodeEditor()?.getModel();
							if (!H) return;
							const q = {
									overrideIdentifier: H.getLanguageId(),
									resource: H.uri,
								},
								V = this.c.getValue("editor.codeActionsOnSave", q);
							if (!V || Array.isArray(V)) return;
							const G = Object.keys(V).filter(
									(W) =>
										V[W] &&
										V[W] === "always" &&
										p.$GAb.Source.contains(new i.$1L(W)),
								),
								K = new t.$Ce(),
								J = [];
							for (const W of G) J.push(new i.$1L(W));
							await this.u(H, J, [], $.$0N.None, K.token);
						}
					}
					async participate(H, q, V, G) {
						if (!H.textEditorModel) return;
						const K = H.textEditorModel,
							J = { overrideIdentifier: K.getLanguageId(), resource: K.uri },
							W = this.c.getValue("editor.codeActionsOnSave", J);
						if (
							!W ||
							q.reason === T.SaveReason.AUTO ||
							(q.reason !== T.SaveReason.EXPLICIT && Array.isArray(W))
						)
							return;
						const X = Array.isArray(W)
								? W
								: Object.keys(W).filter((ee) => W[ee] && W[ee] !== "never"),
							Y = this.t(X);
						if (
							(Array.isArray(W) ||
								Y.sort((ee, _) =>
									p.$GAb.SourceFixAll.contains(ee)
										? p.$GAb.SourceFixAll.contains(_)
											? 0
											: -1
										: p.$GAb.SourceFixAll.contains(_)
											? 1
											: 0,
								),
							!Y.length)
						)
							return;
						const ie = Array.isArray(W)
							? []
							: Object.keys(W)
									.filter((ee) => W[ee] === "never" || !1)
									.map((ee) => new i.$1L(ee));
						V.report({ message: (0, b.localize)(4900, null) });
						const ne = Array.isArray(W)
							? Y
							: Y.filter(
									(ee) =>
										W[ee.value] === "always" ||
										((W[ee.value] === "explicit" || W[ee.value] === !0) &&
											q.reason === T.SaveReason.EXPLICIT),
								);
						await this.u(K, ne, ie, V, G);
					}
					t(H) {
						const q = H.map((V) => new i.$1L(V));
						return q.filter((V) =>
							q.every((G) => G.equals(V) || !G.contains(V)),
						);
					}
					async u(H, q, V, G, K) {
						const J = new (class {
							constructor() {
								this.c = new Set();
							}
							d() {
								G.report({
									message: (0, b.localize)(
										4901,
										null,
										[...this.c].map((W) => `'${W}'`).join(", "),
										"command:workbench.action.openSettings?%5B%22editor.codeActionsOnSave%22%5D",
									),
								});
							}
							report(W) {
								W.displayName &&
									!this.c.has(W.displayName) &&
									(this.c.add(W.displayName), this.d());
							}
						})();
						for (const W of q) {
							const X = new E.$le(),
								Y = await this.w(H, W, V, J, K);
							if (
								(this.q.publicLog2("codeAction.appliedOnSave", {
									codeAction: W.value,
									duration: X.elapsed(),
								}),
								K.isCancellationRequested)
							) {
								Y.dispose();
								return;
							}
							try {
								for (const ie of Y.validActions)
									if (
										(G.report({
											message: (0, b.localize)(4902, null, ie.action.title),
										}),
										await this.f.invokeFunction(
											g.$VAb,
											ie,
											g.ApplyCodeActionReason.OnSave,
											{},
											K,
										),
										K.isCancellationRequested)
									)
										return;
							} catch {
							} finally {
								Y.dispose();
							}
						}
					}
					w(H, q, V, G, K) {
						return (0, g.$UAb)(
							this.g.codeActionProvider,
							H,
							H.getFullModelRange(),
							{
								type: c.CodeActionTriggerType.Auto,
								triggerAction: p.CodeActionTriggerSource.OnSave,
								filter: { include: q, excludes: V, includeSourceActions: !0 },
							},
							G,
							K,
							this.h,
						);
					}
				};
				U = Ne(
					[
						j(0, s.$gj),
						j(1, y.$Li),
						j(2, n.$k3),
						j(3, l.$uZ),
						j(4, L.$asb),
						j(5, k.$IY),
						j(6, m.$dtb),
						j(7, S.$km),
					],
					U,
				);
				let z = class extends w.$1c {
					constructor(H, q) {
						super(), (this.c = H), (this.f = q), this.g();
					}
					g() {
						this.D(this.f.files.addSaveParticipant(this.c.createInstance(N))),
							this.D(this.f.files.addSaveParticipant(this.c.createInstance(U))),
							this.D(this.f.files.addSaveParticipant(this.c.createInstance(B))),
							this.D(this.f.files.addSaveParticipant(this.c.createInstance(R))),
							this.D(this.f.files.addSaveParticipant(this.c.createInstance(O)));
					}
				};
				(e.$VXc = z),
					(e.$VXc = z = Ne([j(0, y.$Li), j(1, M.$kZ)], z)),
					v.$Io
						.as(I.Extensions.Workbench)
						.registerWorkbenchContribution(z, D.LifecyclePhase.Restored);
			},
		),
		
define(
			de[3272],
			he([
				1, 0, 7, 279, 264, 97, 6, 3, 281, 17, 98, 64, 42, 255, 4, 92, 11, 8, 5,
				93, 21, 35, 3187, 1003, 18, 2504,
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
					(e.$RYc = void 0),
					(c = mt(c)),
					(y = mt(y));
				var I;
				(function (L) {
					(L.Loading = "loading"), (L.Message = "message"), (L.Data = "data");
				})(I || (I = {}));
				class T {
					static store(D, M) {
						M.store(
							"typeHierarchyPeekLayout",
							JSON.stringify(D),
							s.StorageScope.PROFILE,
							s.StorageTarget.MACHINE,
						);
					}
					static retrieve(D) {
						const M = D.get(
								"typeHierarchyPeekLayout",
								s.StorageScope.PROFILE,
								"{}",
							),
							N = { ratio: 0.7, height: 17 };
						try {
							return { ...N, ...JSON.parse(M) };
						} catch {
							return N;
						}
					}
					constructor(D, M) {
						(this.ratio = D), (this.height = M);
					}
				}
				class P extends b.$FMb {}
				let k = class extends c.$9Mb {
					static {
						S = this;
					}
					static {
						this.TitleMenu = new p.$XX("typehierarchy/title");
					}
					constructor(D, M, N, A, R, O, B, U, z, F, x) {
						super(
							D,
							{
								showFrame: !0,
								showArrow: !0,
								isResizeable: !0,
								isAccessible: !0,
							},
							x,
						),
							(this.Z = M),
							(this.ab = N),
							(this.bb = R),
							(this.cb = O),
							(this.db = B),
							(this.eb = U),
							(this.fb = z),
							(this.gb = F),
							(this.hb = x),
							(this.i = new Map()),
							(this.Y = new d.$Zc()),
							this.create(),
							this.bb.addExclusiveWidget(D, this),
							this.ib(A.getColorTheme()),
							this.o.add(A.onDidColorThemeChange(this.ib, this)),
							this.o.add(this.Y);
					}
					dispose() {
						T.store(this.X, this.eb),
							this.c.dispose(),
							this.d.dispose(),
							this.m.dispose(),
							super.dispose();
					}
					get direction() {
						return this.ab;
					}
					ib(D) {
						const M = D.getColor(c.$aNb) || E.$UL.transparent;
						this.style({
							arrowColor: M,
							frameColor: M,
							headerBackgroundColor: D.getColor(c.$0Mb) || E.$UL.transparent,
							primaryHeadingColor: D.getColor(c.$$Mb),
							secondaryHeadingColor: D.getColor(c.$_Mb),
						});
					}
					P(D) {
						super.P(D, !0);
						const M = this.fb.createMenu(S.TitleMenu, this.gb),
							N = () => {
								const A = [];
								(0, g.$Kyb)(M, void 0, A),
									this.K.clear(),
									this.K.push(A, { label: !1, icon: !0 });
							};
						this.o.add(M), this.o.add(M.onDidChange(N)), N();
					}
					T(D) {
						(this.X = T.retrieve(this.eb)),
							(this.r = new t.$pgb(0, 0)),
							(this.a = D),
							D.classList.add("type-hierarchy");
						const M = document.createElement("div");
						M.classList.add("message"),
							D.appendChild(M),
							(this.b = M),
							(this.b.tabIndex = 0);
						const N = document.createElement("div");
						N.classList.add("results"),
							D.appendChild(N),
							(this.c = new i.$vob(N, {
								orientation: i.Orientation.HORIZONTAL,
							}));
						const A = document.createElement("div");
						A.classList.add("editor"), N.appendChild(A);
						const R = {
							scrollBeyondLastLine: !1,
							scrollbar: {
								verticalScrollbarSize: 14,
								horizontal: "auto",
								useShadows: !0,
								verticalHasArrows: !1,
								horizontalHasArrows: !1,
								alwaysConsumeMouseWheel: !1,
							},
							overviewRulerLanes: 2,
							fixedOverflowWidgets: !0,
							minimap: { enabled: !1 },
						};
						this.m = this.hb.createInstance(m.$wDb, A, R, {}, this.editor);
						const O = document.createElement("div");
						O.classList.add("tree"), N.appendChild(O);
						const B = {
							sorter: new y.$MYc(),
							accessibilityProvider: new y.$QYc(() => this.ab),
							identityProvider: new y.$NYc(() => this.ab),
							expandOnlyOnTwistieClick: !0,
							overrideStyles: { listBackground: c.$bNb },
						};
						(this.d = this.hb.createInstance(
							P,
							"TypeHierarchyPeek",
							O,
							new y.$PYc(),
							[this.hb.createInstance(y.$OYc)],
							this.hb.createInstance(y.$LYc, () => this.ab),
							B,
						)),
							this.c.addView(
								{
									onDidChange: C.Event.None,
									element: A,
									minimumSize: 200,
									maximumSize: Number.MAX_VALUE,
									layout: (U) => {
										this.r.height &&
											this.m.layout({ height: this.r.height, width: U });
									},
								},
								i.Sizing.Distribute,
							),
							this.c.addView(
								{
									onDidChange: C.Event.None,
									element: O,
									minimumSize: 100,
									maximumSize: Number.MAX_VALUE,
									layout: (U) => {
										this.r.height && this.d.layout(this.r.height, U);
									},
								},
								i.Sizing.Distribute,
							),
							this.o.add(
								this.c.onDidSashChange(() => {
									this.r.width &&
										(this.X.ratio = this.c.getViewSize(0) / this.r.width);
								}),
							),
							this.o.add(this.d.onDidChangeFocus(this.lb, this)),
							this.o.add(
								this.m.onMouseDown((U) => {
									const { event: z, target: F } = U;
									if (z.detail !== 2) return;
									const [x] = this.d.getFocus();
									x &&
										(this.dispose(),
										this.cb.openEditor({
											resource: x.item.uri,
											options: { selection: F.range },
										}));
								}),
							),
							this.o.add(
								this.d.onMouseDblClick((U) => {
									U.target !== w.TreeMouseEventTarget.Twistie &&
										U.element &&
										(this.dispose(),
										this.cb.openEditor({
											resource: U.element.item.uri,
											options: {
												selection: U.element.item.selectionRange,
												pinned: !0,
											},
										}));
								}),
							),
							this.o.add(
								this.d.onDidChangeSelection((U) => {
									const [z] = U.elements;
									z &&
										(0, t.$8gb)(U.browserEvent) &&
										(this.dispose(),
										this.cb.openEditor({
											resource: z.item.uri,
											options: { selection: z.item.selectionRange, pinned: !0 },
										}));
								}),
							);
					}
					async lb() {
						const [D] = this.d.getFocus();
						if (!D) return;
						this.Y.clear();
						const M = {
							description: "type-hierarchy-decoration",
							stickiness: a.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							className: "type-decoration",
							overviewRuler: {
								color: (0, l.$jP)(c.$kNb),
								position: a.OverviewRulerLane.Center,
							},
						};
						let N;
						this.ab === $.TypeHierarchyDirection.Supertypes
							? (N = D.parent ? D.parent.item.uri : D.model.root.uri)
							: (N = D.item.uri);
						const A = await this.db.createModelReference(N);
						this.m.setModel(A.object.textEditorModel);
						const R = [];
						let O;
						const B = { uri: D.item.uri, range: D.item.selectionRange };
						if (
							(B.uri.toString() === N.toString() &&
								(R.push({ range: B.range, options: M }),
								(O = O ? r.$iL.plusRange(B.range, O) : B.range)),
							O)
						) {
							this.m.revealRangeInCenter(O, u.ScrollType.Immediate);
							const z = this.m.createDecorationsCollection(R);
							this.Y.add((0, d.$Yc)(() => z.clear()));
						}
						this.Y.add(A);
						const U =
							this.ab === $.TypeHierarchyDirection.Supertypes
								? (0, n.localize)(11040, null, D.model.root.name)
								: (0, n.localize)(11041, null, D.model.root.name);
						this.setTitle(U);
					}
					showLoading() {
						(this.a.dataset.state = I.Loading),
							this.setTitle((0, n.localize)(11042, null)),
							this.mb();
					}
					showMessage(D) {
						(this.a.dataset.state = I.Message),
							this.setTitle(""),
							this.setMetaTitle(""),
							(this.b.innerText = D),
							this.mb(),
							this.b.focus();
					}
					async showModel(D) {
						this.mb();
						const M = this.i.get(this.ab);
						await this.d.setInput(D, M);
						const N = this.d.getNode(D).children[0];
						await this.d.expand(N.element),
							N.children.length === 0
								? this.showMessage(
										this.ab === $.TypeHierarchyDirection.Supertypes
											? (0, n.localize)(11043, null, D.root.name)
											: (0, n.localize)(11044, null, D.root.name),
									)
								: ((this.a.dataset.state = I.Data),
									(!M || this.d.getFocus().length === 0) &&
										this.d.setFocus([N.children[0].element]),
									this.d.domFocus(),
									this.lb());
					}
					getModel() {
						return this.d.getInput();
					}
					getFocused() {
						return this.d.getFocus()[0];
					}
					async updateDirection(D) {
						const M = this.d.getInput();
						M &&
							D !== this.ab &&
							(this.i.set(this.ab, this.d.getViewState()),
							(this.ab = D),
							await this.showModel(M));
					}
					mb() {
						this.x ||
							(this.editor.revealLineInCenterIfOutsideViewport(
								this.Z.lineNumber,
								u.ScrollType.Smooth,
							),
							super.show(r.$iL.fromPositions(this.Z), this.X.height));
					}
					D(D) {
						this.r && this.W(this.r.height, D);
					}
					W(D, M) {
						(this.r.height !== D || this.r.width !== M) &&
							(super.W(D, M),
							(this.r = new t.$pgb(M, D)),
							(this.X.height = this.n ? this.n.heightInLines : this.X.height),
							this.c.layout(M),
							this.c.resizeView(0, M * this.X.ratio));
					}
				};
				(e.$RYc = k),
					(e.$RYc =
						k =
						S =
							Ne(
								[
									j(3, l.$iP),
									j(4, c.$7Mb),
									j(5, v.$IY),
									j(6, h.$MO),
									j(7, s.$lq),
									j(8, p.$YX),
									j(9, o.$6j),
									j(10, f.$Li),
								],
								k,
							));
			},
		),
		
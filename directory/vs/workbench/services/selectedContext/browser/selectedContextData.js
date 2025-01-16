define(de[298], he([1, 0, 9, 310, 272]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Ygc = e.$Xgc = e.$Wgc = e.$Vgc = e.$Ugc = e.$Tgc = void 0),
				(e.$Zgc = C),
				(e.$1gc = m),
				(e.$2gc = r),
				(e.$3gc = u),
				(e.$4gc = a),
				(e.$5gc = h),
				(e.$Tgc = "embeddings"),
				(e.$Ugc = {
					numResultsPerSearch: 100,
					includePattern: "",
					excludePattern: "",
					reranker: w.RerankerAlgorithm.LULEA,
					reasoningStep: !1,
				}),
				(e.$Vgc = [
					"editTrailContexts",
					"notepads",
					"quotes",
					"selectedCommits",
					"selectedPullRequests",
					"gitDiff",
					"gitDiffFromBranchToMain",
					"selectedImages",
					"usesCodebase",
					"useWeb",
					"folderSelections",
					"fileSelections",
					"terminalFiles",
					"selections",
					"terminalSelections",
					"selectedDocs",
					"externalLinks",
					"useLinterErrors",
					"useDiffReview",
					"useContextPicking",
					"useRememberThis",
					"diffHistory",
				]),
				(e.$Wgc = e.$Vgc),
				(e.$Xgc = e.$Vgc);
			const E = (c) =>
				[
					"selections",
					"fileSelections",
					"folderSelections",
					"selectedDocs",
					"selectedCommits",
					"selectedPullRequests",
					"terminalSelections",
					"terminalFiles",
					"quotes",
					"externalLinks",
					"selectedImages",
					"notepads",
					"editTrailContexts",
				].includes(c);
			e.$Ygc = E;
			function C(c, n) {
				switch (c) {
					case "fileSelections":
					case "terminalFiles":
						return t.URI.revive(n.uri).toString();
					case "selections":
					case "terminalSelections":
						return d(n);
					case "selectedDocs":
						return n.docId;
					case "notepads":
						return n.notepadId;
					case "selectedImages":
						return n.path;
					case "editTrailContexts":
						return n.uniqueId;
					case "quotes":
						return JSON.stringify({
							bubbleId: n.bubbleId,
							sectionIndex: n.sectionIndex,
						});
					case "externalLinks":
						return n.url;
					default: {
						const { uuid: g, ...p } = n;
						return JSON.stringify(p);
					}
				}
			}
			const d = (c) =>
				JSON.stringify({
					uri: t.URI.revive(c.uri).toString(),
					range: c.range,
					text: c.text,
				});
			function m(c, n, g) {
				return !n && !g ? !0 : !n || !g ? !1 : C(c, n) === C(c, g);
			}
			function r() {
				const c = {};
				return (
					e.$Xgc.forEach((n) => {
						(0, e.$Ygc)(n) ? (c[n] = []) : (c[n] = void 0);
					}),
					{ ...c, mentions: u() }
				);
			}
			function u() {
				const c = {};
				return (
					e.$Xgc.forEach((n) => {
						(0, e.$Ygc)(n) ? (c[n] = {}) : (c[n] = []);
					}),
					c
				);
			}
			function a(c) {
				return { ...r(), ...c };
			}
			function h(c) {
				switch (c) {
					case "selections":
						return i.TypeaheadOptionType.code;
					case "fileSelections":
						return i.TypeaheadOptionType.file;
					case "folderSelections":
						return i.TypeaheadOptionType.folder;
					case "selectedDocs":
						return i.TypeaheadOptionType.doc;
					case "selectedCommits":
						return i.TypeaheadOptionType.git_commit;
					case "selectedPullRequests":
						return i.TypeaheadOptionType.git_pr;
					case "quotes":
						return i.TypeaheadOptionType.notepad;
					case "externalLinks":
						return i.TypeaheadOptionType.web;
					case "notepads":
						return i.TypeaheadOptionType.notepad;
					case "gitDiff":
						return i.TypeaheadOptionType.git_diff;
					case "gitDiffFromBranchToMain":
						return i.TypeaheadOptionType.git_diff;
					case "usesCodebase":
						return i.TypeaheadOptionType.codebase;
					case "useWeb":
						return i.TypeaheadOptionType.web;
					case "useLinterErrors":
						return i.TypeaheadOptionType.lint;
					case "useDiffReview":
						return i.TypeaheadOptionType.diff_review;
					case "selectedImages":
						return i.TypeaheadOptionType.image;
					case "terminalFiles":
						return i.TypeaheadOptionType.file;
					case "terminalSelections":
						return i.TypeaheadOptionType.code;
					case "useContextPicking":
						return i.TypeaheadOptionType.context_picking;
					case "useRememberThis":
						return i.TypeaheadOptionType.remember_this;
					default:
						return i.TypeaheadOptionType.code;
				}
			}
		}),
		define(
			de[3604],
			he([
				1, 0, 7, 277, 279, 97, 6, 27, 3, 23, 19, 281, 17, 98, 64, 122, 74, 172,
				42, 2833, 255, 4, 5, 39, 73, 93, 35, 541, 204, 33, 1301, 105, 50, 26,
				14, 219, 298, 354, 356, 169, 2300,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$COb = e.$BOb = void 0),
					(t = mt(t)),
					(s = mt(s)),
					(l = mt(l));
				class F {
					static {
						this.a = g.$eY.register({
							description: "reference-decoration",
							stickiness: n.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							className: "reference-decoration",
						});
					}
					constructor(G, K) {
						(this.g = G),
							(this.h = K),
							(this.b = new Map()),
							(this.c = new Set()),
							(this.d = new m.$Zc()),
							(this.f = new m.$Zc()),
							this.d.add(this.g.onDidChangeModel(() => this.j())),
							this.j();
					}
					dispose() {
						this.f.dispose(), this.d.dispose(), this.removeDecorations();
					}
					j() {
						this.f.clear();
						const G = this.g.getModel();
						if (G) {
							for (const K of this.h.references)
								if (K.uri.toString() === G.uri.toString()) {
									this.k(K.parent);
									return;
								}
						}
					}
					k(G) {
						if (!this.g.hasModel()) return;
						this.f.add(
							this.g.getModel().onDidChangeDecorations(() => this.l()),
						);
						const K = [],
							J = [];
						for (let W = 0, X = G.children.length; W < X; W++) {
							const Y = G.children[W];
							this.c.has(Y.id) ||
								(Y.uri.toString() === this.g.getModel().uri.toString() &&
									(K.push({ range: Y.range, options: F.a }), J.push(W)));
						}
						this.g.changeDecorations((W) => {
							const X = W.deltaDecorations([], K);
							for (let Y = 0; Y < X.length; Y++)
								this.b.set(X[Y], G.children[J[Y]]);
						});
					}
					l() {
						const G = [],
							K = this.g.getModel();
						if (K) {
							for (const [J, W] of this.b) {
								const X = K.getDecorationRange(J);
								if (!X) continue;
								let Y = !1;
								if (!h.$iL.equalsRange(X, W.range)) {
									if (h.$iL.spansMultipleLines(X)) Y = !0;
									else {
										const ie = W.range.endColumn - W.range.startColumn,
											ne = X.endColumn - X.startColumn;
										ie !== ne && (Y = !0);
									}
									Y ? (this.c.add(W.id), G.push(J)) : (W.range = X);
								}
							}
							for (let J = 0, W = G.length; J < W; J++) this.b.delete(G[J]);
							this.g.removeDecorations(G);
						}
					}
					removeDecorations() {
						this.g.removeDecorations([...this.b.keys()]), this.b.clear();
					}
				}
				class x {
					constructor() {
						(this.ratio = 0.7), (this.heightInLines = 18);
					}
					static fromJSON(G) {
						let K, J;
						try {
							const W = JSON.parse(G);
							(K = W.ratio), (J = W.heightInLines);
						} catch {}
						return { ratio: K || 0.7, heightInLines: J || 18 };
					}
				}
				e.$BOb = x;
				class H extends S.$FMb {}
				let q = class extends s.$9Mb {
					constructor(G, K, J, W, X, Y, ie, ne, ee, _, te, Q, Z) {
						super(
							G,
							{
								showFrame: !1,
								showArrow: !0,
								isResizeable: !0,
								isAccessible: !0,
								supportOnTitleClick: !0,
							},
							Y,
						),
							(this.gb = K),
							(this.layoutData = J),
							(this.hb = X),
							(this.ib = Y),
							(this.jb = ie),
							(this.kb = ne),
							(this.lb = ee),
							(this.mb = _),
							(this.nb = te),
							(this.ob = Q),
							(this.pb = Z),
							(this.c = new m.$Zc()),
							(this.d = new m.$Zc()),
							(this.m = new C.$re()),
							(this.onDidSelectReference = this.m.event),
							(this.eb = new t.$pgb(0, 0)),
							(this.fb = !1),
							this.qb(W.getColorTheme()),
							this.d.add(W.onDidColorThemeChange(this.qb.bind(this))),
							this.jb.addExclusiveWidget(G, this),
							this.create();
					}
					get isClosing() {
						return this.fb;
					}
					dispose() {
						(this.fb = !0),
							this.setModel(void 0),
							this.d.dispose(),
							this.c.dispose(),
							(0, m.$Vc)(this.Z),
							(0, m.$Vc)(this.bb),
							(0, m.$Vc)(this.r),
							(0, m.$Vc)(this.ab),
							this.Y.dispose(),
							super.dispose();
					}
					qb(G) {
						const K = G.getColor(s.$aNb) || E.$UL.transparent;
						this.style({
							arrowColor: K,
							frameColor: K,
							headerBackgroundColor: G.getColor(s.$0Mb) || E.$UL.transparent,
							primaryHeadingColor: G.getColor(s.$$Mb),
							secondaryHeadingColor: G.getColor(s.$_Mb),
						});
					}
					show(G) {
						super.show(G, this.layoutData.heightInLines || 18);
					}
					focusOnReferenceTree() {
						this.r.domFocus();
					}
					focusOnPreviewEditor() {
						this.Z.focus();
					}
					isPreviewEditorFocused() {
						return this.Z.hasTextFocus();
					}
					getPreviewEditor() {
						return this.Z;
					}
					S(G) {
						this.Z &&
							this.Z.getModel() &&
							this.m.fire({
								element: this.yb(),
								kind: G.ctrlKey || G.metaKey || G.altKey ? "side" : "open",
								source: "title",
							});
					}
					P(G, K) {
						(this.s = t.$(".peekview-title")),
							this.options.supportOnTitleClick &&
								(this.s.classList.add("clickable"),
								t.$$fb(this.s, "click", (ie) => this.S(ie))),
							t.$fhb(this.p, this.s),
							this.Q(this.s),
							(this.H = t.$("span.filename")),
							(this.I = t.$("span.dirname")),
							(this.J = t.$("span.meta")),
							t.$fhb(this.s, this.H, this.I, this.J);
						const J = t.$(".peekview-actions");
						t.$fhb(this.p, J);
						const W = this.R();
						(this.K = new D.$eib(J, W)), this.o.add(this.K);
						const X = new M.$rj(
								"peekview.composer",
								l.localize(1149, null),
								`peekview-composer-button ${N.ThemeIcon.asClassName(A.$ak.symbolMethod)}`,
								!0,
								() => {
									this.tb();
								},
							),
							Y = (ie) => {
								this.K &&
									(ie
										? this.K.push(X, { label: !1, icon: !0, index: 0 })
										: this.K.pull(0));
							};
						Y(this.nb.isComposerEnabled()),
							this.o.add(
								this.nb.onDidEnableDisableComposer(({ enabled: ie }) => {
									Y(ie);
								}),
							),
							K ||
								this.K.push(
									new M.$rj(
										"peekview.close",
										l.localize(1150, null),
										N.ThemeIcon.asClassName(A.$ak.close),
										!0,
										() => (this.dispose(), Promise.resolve()),
									),
									{ label: !1, icon: !0 },
								);
					}
					async tb() {
						if (!this.a) return;
						const G = (0, O.$2gc)();
						for (const K of this.a.groups) {
							const J = K.uri;
							for (const W of K.children) {
								let X;
								(X = await (0, B.$Vfc)(
									this.pb,
									this.ob,
									J,
									new h.$iL({
										startLineNumber:
											W.range.startLineNumber -
											z.COMPOSER_CUBE_EXTENDED_LINE_RANGE,
										startColumn: 1,
										endLineNumber:
											W.range.endLineNumber +
											z.COMPOSER_CUBE_EXTENDED_LINE_RANGE +
											1,
										endColumn: 1,
									}),
								)),
									X && G.selections.push(X);
							}
						}
						this.nb.createComposer({
							partialState: { context: G, hasChangedContext: !0 },
							dontRefreshReactiveContext: !0,
						}),
							this.dispose();
					}
					T(G) {
						this.B("reference-zone-widget"),
							(this.db = t.$fhb(G, t.$("div.messages"))),
							t.hide(this.db),
							(this.Y = new w.$vob(G, {
								orientation: i.Orientation.HORIZONTAL,
							})),
							(this.cb = t.$fhb(G, t.$("div.preview.inline")));
						const K = {
							scrollBeyondLastLine: !1,
							scrollbar: {
								verticalScrollbarSize: 14,
								horizontal: "auto",
								useShadows: !0,
								verticalHasArrows: !1,
								horizontalHasArrows: !1,
								alwaysConsumeMouseWheel: !0,
							},
							overviewRulerLanes: 2,
							fixedOverflowWidgets: !0,
							minimap: { enabled: !1 },
						};
						(this.Z = this.ib.createInstance(
							a.$wDb,
							this.cb,
							K,
							{},
							this.editor,
						)),
							t.hide(this.cb),
							(this.bb = this.ib.createInstance(
								g.$$X,
								l.localize(1151, null),
								o.$0M,
								g.$$X.DEFAULT_CREATION_OPTIONS,
								null,
							)),
							(this.X = t.$fhb(G, t.$("div.ref-tree.inline")));
						const J = {
							keyboardSupport: this.gb,
							accessibilityProvider: new b.$wNb(),
							keyboardNavigationLabelProvider: this.ib.createInstance(b.$sNb),
							identityProvider: new b.$tNb(),
							openOnSingleClick: !0,
							selectionNavigation: !0,
							overrideStyles: { listBackground: s.$bNb },
						};
						this.gb &&
							this.d.add(
								t.$$fb(
									this.X,
									"keydown",
									(X) => {
										X.equals(d.KeyCode.Escape) &&
											(this.lb.dispatchEvent(X, X.target), X.stopPropagation());
									},
									!0,
								),
							),
							(this.r = this.ib.createInstance(
								H,
								"ReferencesWidget",
								this.X,
								new b.$rNb(),
								[
									this.ib.createInstance(b.$uNb),
									this.ib.createInstance(b.$vNb),
								],
								this.ib.createInstance(b.$qNb),
								J,
							)),
							this.Y.addView(
								{
									onDidChange: C.Event.None,
									element: this.cb,
									minimumSize: 200,
									maximumSize: Number.MAX_VALUE,
									layout: (X) => {
										this.Z.layout({ height: this.eb.height, width: X });
									},
								},
								w.Sizing.Distribute,
							),
							this.Y.addView(
								{
									onDidChange: C.Event.None,
									element: this.X,
									minimumSize: 100,
									maximumSize: Number.MAX_VALUE,
									layout: (X) => {
										(this.X.style.height = `${this.eb.height}px`),
											(this.X.style.width = `${X}px`),
											this.r.layout(this.eb.height, X);
									},
								},
								w.Sizing.Distribute,
							),
							this.o.add(
								this.Y.onDidSashChange(
									() => {
										this.eb.width &&
											(this.layoutData.ratio =
												this.Y.getViewSize(0) / this.eb.width);
									},
									void 0,
								),
							);
						const W = (X, Y) => {
							X instanceof T.$mNb &&
								(Y === "show" && this.Ab(X, !1),
								this.m.fire({ element: X, kind: Y, source: "tree" }));
						};
						this.o.add(
							this.r.onDidOpen((X) => {
								X.sideBySide
									? W(X.element, "side")
									: X.editorOptions.pinned
										? W(X.element, "goto")
										: W(X.element, "show");
							}),
						),
							t.hide(this.X);
					}
					D(G) {
						this.eb && this.W(this.eb.height, G);
					}
					W(G, K) {
						super.W(G, K),
							(this.eb = new t.$pgb(K, G)),
							(this.layoutData.heightInLines = this.n
								? this.n.heightInLines
								: this.layoutData.heightInLines),
							this.Y.layout(K),
							this.Y.resizeView(0, K * this.layoutData.ratio);
					}
					setSelection(G) {
						return this.Ab(G, !0).then(() => {
							this.a && (this.r.setSelection([G]), this.r.setFocus([G]));
						});
					}
					setModel(G) {
						return (
							this.c.clear(),
							(this.a = G),
							this.a ? this.xb() : Promise.resolve()
						);
					}
					xb() {
						return this.a
							? this.a.isEmpty
								? (this.setTitle(""),
									(this.db.innerText = l.localize(1152, null)),
									t.show(this.db),
									Promise.resolve(void 0))
								: (t.hide(this.db),
									(this.b = new F(this.Z, this.a)),
									this.c.add(this.b),
									this.c.add(
										this.a.onDidChangeReferenceRange((G) => this.r.rerender(G)),
									),
									this.c.add(
										this.Z.onMouseDown((G) => {
											const { event: K, target: J } = G;
											if (K.detail !== 2) return;
											const W = this.yb();
											W &&
												this.m.fire({
													element: { uri: W.uri, range: J.range },
													kind:
														K.ctrlKey || K.metaKey || K.altKey
															? "side"
															: "open",
													source: "editor",
												});
										}),
									),
									this.container.classList.add("results-loaded"),
									t.show(this.X),
									t.show(this.cb),
									this.Y.layout(this.eb.width),
									this.focusOnReferenceTree(),
									this.r.setInput(
										this.a.groups.length === 1 ? this.a.groups[0] : this.a,
									))
							: Promise.resolve(void 0);
					}
					yb() {
						const [G] = this.r.getFocus();
						if (G instanceof T.$mNb) return G;
						if (G instanceof T.$oNb && G.children.length > 0)
							return G.children[0];
					}
					async revealReference(G) {
						await this.Ab(G, !1),
							this.m.fire({ element: G, kind: "goto", source: "tree" });
					}
					async Ab(G, K) {
						if (this.zb === G) return;
						if (((this.zb = G), G.uri.scheme !== r.Schemas.inMemory)) {
							const Y = await this.hb.createModelReference(G.uri);
							try {
								const ie = Y.object.textEditorModel,
									ne = await this.mb.getOrCreate(ie, k.CancellationToken.None),
									_ = (0, L.$xOb)(ne.getTopLevelSymbols(), 7).reduce(
										(te, Q) =>
											(Q.kind === p.SymbolKind.Function ||
												Q.kind === p.SymbolKind.Method ||
												Q.kind === p.SymbolKind.Class) &&
											(te === null || Q.level > te.level) &&
											h.$iL.lift(Q.range).containsRange(h.$iL.lift(G.range))
												? Q
												: te,
										null,
									);
								this.setTitle(
									(0, u.$jh)(G.uri),
									this.kb.getUriLabel((0, u.$mh)(G.uri)) +
										(_ !== null ? " > " + _.name : ""),
								);
							} finally {
								Y.dispose();
							}
						} else this.setTitle(l.localize(1153, null));
						const J = this.hb.createModelReference(G.uri);
						this.r.getInput() === G.parent
							? this.r.reveal(G)
							: (K && this.r.reveal(G.parent),
								await this.r.expand(G.parent),
								this.r.reveal(G));
						const W = await J;
						if (!this.a) {
							W.dispose();
							return;
						}
						(0, m.$Vc)(this.ab);
						const X = W.object;
						if (X) {
							const Y =
									this.Z.getModel() === X.textEditorModel
										? c.ScrollType.Smooth
										: c.ScrollType.Immediate,
								ie = h.$iL.lift(G.range).collapseToStart();
							(this.ab = W),
								this.Z.setModel(X.textEditorModel),
								this.Z.setSelection(ie),
								this.Z.revealRangeInCenter(ie, Y);
						} else this.Z.setModel(this.bb), W.dispose();
					}
				};
				(e.$COb = q),
					(e.$COb = q =
						Ne(
							[
								j(3, I.$iP),
								j(4, f.$MO),
								j(5, y.$Li),
								j(6, s.$7Mb),
								j(7, v.$3N),
								j(8, $.$uZ),
								j(9, P.$9Db),
								j(10, R.IComposerService),
								j(11, U.$zIb),
								j(12, f.$MO),
							],
							q,
						));
			},
		),
		define(
			de[840],
			he([
				1, 0, 15, 29, 27, 3, 65, 38, 48, 17, 255, 4, 31, 10, 8, 116, 5, 43, 93,
				40, 21, 541, 3604, 71, 179,
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
					(e.$EOb = e.$DOb = void 0),
					(a = mt(a)),
					(e.$DOb = new n.$5j(
						"referenceSearchVisible",
						!1,
						a.localize(1143, null),
					));
				let I = class {
					static {
						S = this;
					}
					static {
						this.ID = "editor.contrib.referencesController";
					}
					static get(k) {
						return k.getContribution(S.ID);
					}
					constructor(k, L, D, M, N, A, R, O) {
						(this.h = k),
							(this.i = L),
							(this.j = M),
							(this.k = N),
							(this.l = A),
							(this.m = R),
							(this.n = O),
							(this.a = new E.$Zc()),
							(this.e = 0),
							(this.f = !1),
							(this.g = e.$DOb.bindTo(D));
					}
					dispose() {
						this.g.reset(),
							this.a.dispose(),
							this.b?.dispose(),
							this.c?.dispose(),
							(this.b = void 0),
							(this.c = void 0);
					}
					getWidget() {
						return this.b;
					}
					toggleWidget(k, L, D) {
						let M;
						if (
							(this.b && (M = this.b.position),
							this.closeWidget(),
							M && k.containsPosition(M))
						)
							return;
						(this.d = D),
							this.g.set(!0),
							this.a.add(
								this.i.onDidChangeModelLanguage(() => {
									this.closeWidget();
								}),
							),
							this.a.add(
								this.i.onDidChangeModel(() => {
									this.f || this.closeWidget();
								}),
							);
						const N = "peekViewLayout",
							A = y.$BOb.fromJSON(this.m.get(N, s.StorageScope.PROFILE, "{}"));
						(this.b = this.l.createInstance(y.$COb, this.i, this.h, A)),
							this.b.setTitle(a.localize(1144, null)),
							this.b.show(k),
							this.a.add(
								this.b.onDidClose(() => {
									L.cancel(),
										this.b
											? (this.m.store(
													N,
													JSON.stringify(this.b.layoutData),
													s.StorageScope.PROFILE,
													s.StorageTarget.MACHINE,
												),
												this.b.isClosing || this.closeWidget(),
												(this.b = void 0))
											: this.closeWidget();
								}),
							),
							this.a.add(
								this.b.onDidSelectReference((O) => {
									const { element: B, kind: U } = O;
									if (B)
										switch (U) {
											case "open":
												(O.source !== "editor" ||
													!this.n.getValue("editor.stablePeek")) &&
													this.openReference(B, !1, !1);
												break;
											case "side":
												this.openReference(B, !0, !1);
												break;
											case "goto":
												D ? this.o(B, !0) : this.openReference(B, !1, !0);
												break;
										}
								}),
							);
						const R = ++this.e;
						L.then(
							(O) => {
								if (R !== this.e || !this.b) {
									O.dispose();
									return;
								}
								return (
									this.c?.dispose(),
									(this.c = O),
									this.b.setModel(this.c).then(() => {
										if (this.b && this.c && this.i.hasModel()) {
											this.c.isEmpty
												? this.b.setMetaTitle("")
												: this.b.setMetaTitle(
														a.localize(
															1145,
															null,
															this.c.title,
															this.c.references.length,
														),
													);
											const B = this.i.getModel().uri,
												U = new m.$hL(k.startLineNumber, k.startColumn),
												z = this.c.nearestReference(B, U);
											if (z)
												return this.b.setSelection(z).then(() => {
													this.b &&
														this.i.getOption(
															d.EditorOption.peekWidgetDefaultFocus,
														) === "editor" &&
														this.b.focusOnPreviewEditor();
												});
										}
									})
								);
							},
							(O) => {
								this.k.error(O);
							},
						);
					}
					changeFocusBetweenPreviewAndReferences() {
						this.b &&
							(this.b.isPreviewEditorFocused()
								? this.b.focusOnReferenceTree()
								: this.b.focusOnPreviewEditor());
					}
					async goToNextOrPreviousReference(k) {
						if (!this.i.hasModel() || !this.c || !this.b) return;
						const L = this.b.position;
						if (!L) return;
						const D = this.c.nearestReference(this.i.getModel().uri, L);
						if (!D) return;
						const M = this.c.nextOrPreviousReference(D, k),
							N = this.i.hasTextFocus(),
							A = this.b.isPreviewEditorFocused();
						await this.b.setSelection(M),
							await this.o(M, !1),
							N ? this.i.focus() : this.b && A && this.b.focusOnPreviewEditor();
					}
					async revealReference(k) {
						!this.i.hasModel() ||
							!this.c ||
							!this.b ||
							(await this.b.revealReference(k));
					}
					closeWidget(k = !0) {
						this.b?.dispose(),
							this.c?.dispose(),
							this.g.reset(),
							this.a.clear(),
							(this.b = void 0),
							(this.c = void 0),
							k && this.i.focus(),
							(this.e += 1);
					}
					o(k, L) {
						this.b?.hide(), (this.f = !0);
						const D = r.$iL.lift(k.range).collapseToStart();
						return this.j
							.openCodeEditor(
								{
									resource: k.uri,
									options: {
										selection: D,
										selectionSource: g.TextEditorSelectionSource.JUMP,
										pinned: L,
									},
								},
								this.i,
							)
							.then(
								(M) => {
									if (((this.f = !1), !M || !this.b)) {
										this.closeWidget();
										return;
									}
									if (this.i === M)
										this.b.show(D), this.b.focusOnReferenceTree();
									else {
										const N = S.get(M),
											A = this.c.clone();
										this.closeWidget(),
											M.focus(),
											N?.toggleWidget(
												D,
												(0, t.$zh)((R) => Promise.resolve(A)),
												this.d ?? !1,
											);
									}
								},
								(M) => {
									(this.f = !1), (0, i.$4)(M);
								},
							);
					}
					openReference(k, L, D) {
						L || this.closeWidget();
						const { uri: M, range: N } = k;
						this.j.openCodeEditor(
							{
								resource: M,
								options: {
									selection: N,
									selectionSource: g.TextEditorSelectionSource.JUMP,
									pinned: D,
								},
							},
							this.i,
							L,
						);
					}
				};
				(e.$EOb = I),
					(e.$EOb =
						I =
						S =
							Ne(
								[
									j(2, n.$6j),
									j(3, C.$dtb),
									j(4, b.$4N),
									j(5, p.$Li),
									j(6, s.$lq),
									j(7, c.$gj),
								],
								I,
							));
				function T(P, k) {
					const L = (0, u.$8Mb)(P);
					if (!L) return;
					const D = I.get(L);
					D && k(D);
				}
				o.$TX.registerCommandAndKeybindingRule({
					id: "togglePeekWidgetFocus",
					weight: o.KeybindingWeight.EditorContrib,
					primary: (0, w.$os)(w.$ps, w.KeyCode.F2),
					mac: { primary: (0, w.$os)(w.$qs, w.KeyCode.F2) },
					when: n.$Kj.or(e.$DOb, u.PeekContext.inPeekEditor),
					handler(P) {
						T(P, (k) => {
							k.changeFocusBetweenPreviewAndReferences();
						});
					},
				}),
					o.$TX.registerCommandAndKeybindingRule({
						id: "goToNextReference",
						weight: o.KeybindingWeight.EditorContrib - 10,
						primary: w.KeyCode.F4,
						secondary: [w.KeyCode.F12],
						when: n.$Kj.or(e.$DOb, u.PeekContext.inPeekEditor),
						handler(P) {
							T(P, (k) => {
								k.goToNextOrPreviousReference(!0);
							});
						},
					}),
					o.$TX.registerCommandAndKeybindingRule({
						id: "goToPreviousReference",
						weight: o.KeybindingWeight.EditorContrib - 10,
						primary: w.KeyMod.Shift | w.KeyCode.F4,
						secondary: [w.KeyMod.Shift | w.KeyCode.F12],
						when: n.$Kj.or(e.$DOb, u.PeekContext.inPeekEditor),
						handler(P) {
							T(P, (k) => {
								k.goToNextOrPreviousReference(!1);
							});
						},
					}),
					h.$fk.registerCommandAlias(
						"goToNextReferenceFromEmbeddedEditor",
						"goToNextReference",
					),
					h.$fk.registerCommandAlias(
						"goToPreviousReferenceFromEmbeddedEditor",
						"goToPreviousReference",
					),
					h.$fk.registerCommandAlias(
						"closeReferenceSearchEditor",
						"closeReferenceSearch",
					),
					h.$fk.registerCommand("closeReferenceSearch", (P) =>
						T(P, (k) => k.closeWidget()),
					),
					o.$TX.registerKeybindingRule({
						id: "closeReferenceSearch",
						weight: o.KeybindingWeight.EditorContrib - 101,
						primary: w.KeyCode.Escape,
						secondary: [w.KeyMod.Shift | w.KeyCode.Escape],
						when: n.$Kj.and(
							u.PeekContext.inPeekEditor,
							n.$Kj.not("config.editor.stablePeek"),
						),
					}),
					o.$TX.registerKeybindingRule({
						id: "closeReferenceSearch",
						weight: o.KeybindingWeight.WorkbenchContrib + 50,
						primary: w.KeyCode.Escape,
						secondary: [w.KeyMod.Shift | w.KeyCode.Escape],
						when: n.$Kj.and(
							e.$DOb,
							n.$Kj.not("config.editor.stablePeek"),
							n.$Kj.or($.EditorContextKeys.editorTextFocus, v.$bMb.negate()),
						),
					}),
					o.$TX.registerCommandAndKeybindingRule({
						id: "revealReference",
						weight: o.KeybindingWeight.WorkbenchContrib,
						primary: w.KeyCode.Enter,
						mac: {
							primary: w.KeyCode.Enter,
							secondary: [w.KeyMod.CtrlCmd | w.KeyCode.DownArrow],
						},
						when: n.$Kj.and(e.$DOb, f.$nMb, f.$tMb.negate(), f.$vMb.negate()),
						handler(P) {
							const L = P.get(f.$fMb).lastFocusedList?.getFocus();
							Array.isArray(L) &&
								L[0] instanceof l.$mNb &&
								T(P, (D) => D.revealReference(L[0]));
						},
					}),
					o.$TX.registerCommandAndKeybindingRule({
						id: "openReferenceToSide",
						weight: o.KeybindingWeight.EditorContrib,
						primary: w.KeyMod.CtrlCmd | w.KeyCode.Enter,
						mac: { primary: w.KeyMod.WinCtrl | w.KeyCode.Enter },
						when: n.$Kj.and(e.$DOb, f.$nMb, f.$tMb.negate(), f.$vMb.negate()),
						handler(P) {
							const L = P.get(f.$fMb).lastFocusedList?.getFocus();
							Array.isArray(L) &&
								L[0] instanceof l.$mNb &&
								T(P, (D) => D.openReference(L[0], !0, !0));
						},
					}),
					h.$fk.registerCommand("openReference", (P) => {
						const L = P.get(f.$fMb).lastFocusedList?.getFocus();
						Array.isArray(L) &&
							L[0] instanceof l.$mNb &&
							T(P, (D) => D.openReference(L[0], !1, !0));
					});
			},
		),
		define(
			de[1036],
			he([
				1, 0, 127, 15, 33, 27, 28, 9, 439, 56, 46, 65, 281, 38, 48, 17, 98, 71,
				74, 840, 541, 2809, 440, 255, 4, 11, 31, 8, 116, 5, 43, 40, 84, 414, 69,
				103, 496, 179,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$XOb = e.$WOb = e.$VOb = void 0),
					(n = mt(n)),
					(v = mt(v)),
					S.$ZX.appendMenuItem(S.$XX.EditorContext, {
						submenu: S.$XX.EditorContextPeek,
						title: v.localize(1103, null),
						group: "navigation",
						order: 100,
					});
				class U {
					static is(W) {
						return !W || typeof W != "object"
							? !1
							: !!(
									W instanceof U ||
									(n.$hL.isIPosition(W.position) && W.model)
								);
					}
					constructor(W, X) {
						(this.model = W), (this.position = X);
					}
				}
				e.$VOb = U;
				class z extends u.$ktb {
					static {
						this.d = new Map();
					}
					static {
						this.f = new Set();
					}
					static all() {
						return z.d.values();
					}
					static g(W) {
						const X = { ...W, f1: !0 };
						if (X.menu)
							for (const Y of R.Iterable.wrap(X.menu))
								(Y.id === S.$XX.EditorContext ||
									Y.id === S.$XX.EditorContextPeek) &&
									(Y.when = T.$Kj.and(W.precondition, Y.when));
						return X;
					}
					constructor(W, X) {
						super(z.g(X)), (this.configuration = W), z.d.set(X.id, this);
					}
					runEditorCommand(W, X, Y, ie) {
						if (!X.hasModel()) return Promise.resolve(void 0);
						const ne = W.get(D.$4N),
							ee = W.get(a.$dtb),
							_ = W.get(M.$bO),
							te = W.get(l.$GOb),
							Q = W.get(A.$k3),
							Z = W.get(k.$Li),
							se = X.getModel(),
							re = X.getPosition(),
							le = U.is(Y) ? Y : new U(se, re),
							oe = new m.$Nzb(
								X,
								m.CodeEditorStateFlag.Value | m.CodeEditorStateFlag.Position,
							),
							ae = (0, i.$Ah)(
								this.h(Q, le.model, le.position, oe.token),
								oe.token,
							)
								.then(
									async (pe) => {
										if (!pe || oe.token.isCancellationRequested) return;
										(0, t.$oib)(pe.ariaMessage);
										let $e;
										if (pe.referenceAt(se.uri, re)) {
											const ue = this.k(X);
											!z.f.has(ue) && z.d.has(ue) && ($e = z.d.get(ue));
										}
										this.configuration.onlyGoToDefIfDefAndSingleResult &&
											($e = null);
										const ye = pe.references.length;
										if (ye === 0) {
											if (!this.configuration.muteMessage) {
												const ue = se.getWordAtPosition(re);
												y.$Szb.get(X)?.showMessage(this.j(ue), re);
											}
										} else if (ye === 1 && $e)
											z.f.add(this.desc.id),
												Z.invokeFunction((ue) =>
													$e.runEditorCommand(ue, X, Y, ie).finally(() => {
														z.f.delete(this.desc.id);
													}),
												);
										else return this.m(ee, te, X, pe, ie);
									},
									(pe) => {
										ne.error(pe);
									},
								)
								.finally(() => {
									oe.dispose();
								});
						return _.showWhile(ae, 250), ae;
					}
					async m(W, X, Y, ie, ne) {
						const ee = this.l(Y);
						if (
							!(Y instanceof h.$wDb) &&
							(this.configuration.openInPeek ||
								(ee === "peek" && ie.references.length > 1))
						)
							this.o(Y, ie, ne);
						else {
							const _ = ie.firstReference(),
								te = ie.references.length > 1 && ee === "gotoAndPeek",
								Q = await this.n(Y, W, _, this.configuration.openToSide, !te);
							te && Q ? this.o(Q, ie, ne) : ie.dispose(),
								ee === "goto" && X.put(_);
						}
					}
					async n(W, X, Y, ie, ne) {
						let ee;
						if (
							((0, f.$fM)(Y) && (ee = Y.targetSelectionRange),
							ee || (ee = Y.range),
							!ee)
						)
							return;
						const _ = await X.openCodeEditor(
							{
								resource: Y.uri,
								options: {
									selection: g.$iL.collapseToStart(ee),
									selectionRevealType:
										P.TextEditorSelectionRevealType.NearTopIfOutsideViewport,
									selectionSource: P.TextEditorSelectionSource.JUMP,
								},
							},
							W,
							ie,
						);
						if (_) {
							if (ne) {
								const te = _.getModel(),
									Q = _.createDecorationsCollection([
										{
											range: ee,
											options: {
												description: "symbol-navigate-action-highlight",
												className: "symbolHighlight",
											},
										},
									]);
								setTimeout(() => {
									_.getModel() === te && Q.clear();
								}, 350);
							}
							return _;
						}
					}
					o(W, X, Y) {
						const ie = b.$EOb.get(W);
						ie && W.hasModel()
							? ie.toggleWidget(
									Y ?? W.getSelection(),
									(0, i.$zh)((ne) => Promise.resolve(X)),
									this.configuration.openInPeek,
								)
							: X.dispose();
					}
				}
				e.$WOb = z;
				class F extends z {
					async h(W, X, Y, ie) {
						return new s.$pNb(
							await (0, N.$POb)(W.definitionProvider, X, Y, !1, ie),
							v.localize(1104, null),
						);
					}
					j(W) {
						return W && W.word
							? v.localize(1105, null, W.word)
							: v.localize(1106, null);
					}
					k(W) {
						return W.getOption(c.EditorOption.gotoLocation)
							.alternativeDefinitionCommand;
					}
					l(W) {
						return W.getOption(c.EditorOption.gotoLocation).multipleDefinitions;
					}
				}
				(e.$XOb = F),
					(0, S.$4X)(
						class ga extends F {
							static {
								this.id = "editor.action.revealDefinition";
							}
							constructor() {
								super(
									{ openToSide: !1, openInPeek: !1, muteMessage: !1 },
									{
										id: ga.id,
										title: {
											...v.localize2(1130, "Go to Definition"),
											mnemonicTitle: v.localize(1107, null),
										},
										precondition: o.EditorContextKeys.hasDefinitionProvider,
										keybinding: [
											{
												when: o.EditorContextKeys.editorTextFocus,
												primary: E.KeyCode.F12,
												weight: L.KeybindingWeight.EditorContrib,
											},
											{
												when: T.$Kj.and(
													o.EditorContextKeys.editorTextFocus,
													B.$7Lb,
												),
												primary: E.KeyMod.CtrlCmd | E.KeyCode.F12,
												weight: L.KeybindingWeight.EditorContrib,
											},
										],
										menu: [
											{
												id: S.$XX.EditorContext,
												group: "navigation",
												order: 1.1,
											},
											{
												id: S.$XX.MenubarGoMenu,
												precondition: null,
												group: "4_symbol_nav",
												order: 2,
											},
										],
									},
								),
									I.$fk.registerCommandAlias(
										"editor.action.goToDeclaration",
										ga.id,
									);
							}
						},
					),
					(0, S.$4X)(
						class ma extends F {
							static {
								this.id = "editor.action.revealDefinitionAside";
							}
							constructor() {
								super(
									{ openToSide: !0, openInPeek: !1, muteMessage: !1 },
									{
										id: ma.id,
										title: v.localize2(1131, "Open Definition to the Side"),
										precondition: T.$Kj.and(
											o.EditorContextKeys.hasDefinitionProvider,
											o.EditorContextKeys.isInEmbeddedEditor.toNegated(),
										),
										keybinding: [
											{
												when: o.EditorContextKeys.editorTextFocus,
												primary: (0, E.$os)(E.$ps, E.KeyCode.F12),
												mac: { primary: (0, E.$os)(E.$qs, E.KeyCode.F12) },
												weight: L.KeybindingWeight.EditorContrib,
											},
											{
												when: T.$Kj.and(
													o.EditorContextKeys.editorTextFocus,
													B.$7Lb,
												),
												primary: (0, E.$os)(
													E.$ps,
													E.KeyMod.CtrlCmd | E.KeyCode.F12,
												),
												mac: {
													primary: (0, E.$os)(
														E.$qs,
														E.KeyMod.CtrlCmd | E.KeyCode.F12,
													),
												},
												weight: L.KeybindingWeight.EditorContrib,
											},
										],
									},
								),
									I.$fk.registerCommandAlias(
										"editor.action.openDeclarationToTheSide",
										ma.id,
									);
							}
						},
					),
					(0, S.$4X)(
						class pa extends F {
							static {
								this.id = "editor.action.peekDefinition";
							}
							constructor() {
								super(
									{ openToSide: !1, openInPeek: !0, muteMessage: !1 },
									{
										id: pa.id,
										title: v.localize2(1132, "Peek Definition"),
										precondition: T.$Kj.and(
											o.EditorContextKeys.hasDefinitionProvider,
											$.PeekContext.notInPeekEditor,
											o.EditorContextKeys.isInEmbeddedEditor.toNegated(),
										),
										keybinding: {
											when: o.EditorContextKeys.editorTextFocus,
											primary: E.KeyMod.Alt | E.KeyCode.F12,
											linux: {
												primary:
													E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.F10,
											},
											weight: L.KeybindingWeight.EditorContrib,
										},
										menu: {
											id: S.$XX.EditorContextPeek,
											group: "peek",
											order: 2,
										},
									},
								),
									I.$fk.registerCommandAlias(
										"editor.action.previewDeclaration",
										pa.id,
									);
							}
						},
					);
				class x extends z {
					async h(W, X, Y, ie) {
						return new s.$pNb(
							await (0, N.$QOb)(W.declarationProvider, X, Y, !1, ie),
							v.localize(1108, null),
						);
					}
					j(W) {
						return W && W.word
							? v.localize(1109, null, W.word)
							: v.localize(1110, null);
					}
					k(W) {
						return W.getOption(c.EditorOption.gotoLocation)
							.alternativeDeclarationCommand;
					}
					l(W) {
						return W.getOption(c.EditorOption.gotoLocation)
							.multipleDeclarations;
					}
				}
				(0, S.$4X)(
					class Na extends x {
						static {
							this.id = "editor.action.revealDeclaration";
						}
						constructor() {
							super(
								{ openToSide: !1, openInPeek: !1, muteMessage: !1 },
								{
									id: Na.id,
									title: {
										...v.localize2(1133, "Go to Declaration"),
										mnemonicTitle: v.localize(1111, null),
									},
									precondition: T.$Kj.and(
										o.EditorContextKeys.hasDeclarationProvider,
										o.EditorContextKeys.isInEmbeddedEditor.toNegated(),
									),
									menu: [
										{
											id: S.$XX.EditorContext,
											group: "navigation",
											order: 1.3,
										},
										{
											id: S.$XX.MenubarGoMenu,
											precondition: null,
											group: "4_symbol_nav",
											order: 3,
										},
									],
								},
							);
						}
						j(W) {
							return W && W.word
								? v.localize(1112, null, W.word)
								: v.localize(1113, null);
						}
					},
				),
					(0, S.$4X)(
						class extends x {
							constructor() {
								super(
									{ openToSide: !1, openInPeek: !0, muteMessage: !1 },
									{
										id: "editor.action.peekDeclaration",
										title: v.localize2(1134, "Peek Declaration"),
										precondition: T.$Kj.and(
											o.EditorContextKeys.hasDeclarationProvider,
											$.PeekContext.notInPeekEditor,
											o.EditorContextKeys.isInEmbeddedEditor.toNegated(),
										),
										menu: {
											id: S.$XX.EditorContextPeek,
											group: "peek",
											order: 3,
										},
									},
								);
							}
						},
					);
				class H extends z {
					async h(W, X, Y, ie) {
						return new s.$pNb(
							await (0, N.$SOb)(W.typeDefinitionProvider, X, Y, !1, ie),
							v.localize(1114, null),
						);
					}
					j(W) {
						return W && W.word
							? v.localize(1115, null, W.word)
							: v.localize(1116, null);
					}
					k(W) {
						return W.getOption(c.EditorOption.gotoLocation)
							.alternativeTypeDefinitionCommand;
					}
					l(W) {
						return W.getOption(c.EditorOption.gotoLocation)
							.multipleTypeDefinitions;
					}
				}
				(0, S.$4X)(
					class Ra extends H {
						static {
							this.ID = "editor.action.goToTypeDefinition";
						}
						constructor() {
							super(
								{ openToSide: !1, openInPeek: !1, muteMessage: !1 },
								{
									id: Ra.ID,
									title: {
										...v.localize2(1135, "Go to Type Definition"),
										mnemonicTitle: v.localize(1117, null),
									},
									precondition: o.EditorContextKeys.hasTypeDefinitionProvider,
									keybinding: {
										when: o.EditorContextKeys.editorTextFocus,
										primary: 0,
										weight: L.KeybindingWeight.EditorContrib,
									},
									menu: [
										{
											id: S.$XX.EditorContext,
											group: "navigation",
											order: 1.4,
										},
										{
											id: S.$XX.MenubarGoMenu,
											precondition: null,
											group: "4_symbol_nav",
											order: 3,
										},
									],
								},
							);
						}
					},
				),
					(0, S.$4X)(
						class Aa extends H {
							static {
								this.ID = "editor.action.peekTypeDefinition";
							}
							constructor() {
								super(
									{ openToSide: !1, openInPeek: !0, muteMessage: !1 },
									{
										id: Aa.ID,
										title: v.localize2(1136, "Peek Type Definition"),
										precondition: T.$Kj.and(
											o.EditorContextKeys.hasTypeDefinitionProvider,
											$.PeekContext.notInPeekEditor,
											o.EditorContextKeys.isInEmbeddedEditor.toNegated(),
										),
										menu: {
											id: S.$XX.EditorContextPeek,
											group: "peek",
											order: 4,
										},
									},
								);
							}
						},
					);
				class q extends z {
					async h(W, X, Y, ie) {
						return new s.$pNb(
							await (0, N.$ROb)(W.implementationProvider, X, Y, !1, ie),
							v.localize(1118, null),
						);
					}
					j(W) {
						return W && W.word
							? v.localize(1119, null, W.word)
							: v.localize(1120, null);
					}
					k(W) {
						return W.getOption(c.EditorOption.gotoLocation)
							.alternativeImplementationCommand;
					}
					l(W) {
						return W.getOption(c.EditorOption.gotoLocation)
							.multipleImplementations;
					}
				}
				(0, S.$4X)(
					class Oa extends q {
						static {
							this.ID = "editor.action.goToImplementation";
						}
						constructor() {
							super(
								{ openToSide: !1, openInPeek: !1, muteMessage: !1 },
								{
									id: Oa.ID,
									title: {
										...v.localize2(1137, "Go to Implementations"),
										mnemonicTitle: v.localize(1121, null),
									},
									precondition: o.EditorContextKeys.hasImplementationProvider,
									keybinding: {
										when: o.EditorContextKeys.editorTextFocus,
										primary: E.KeyMod.CtrlCmd | E.KeyCode.F12,
										weight: L.KeybindingWeight.EditorContrib,
									},
									menu: [
										{
											id: S.$XX.EditorContext,
											group: "navigation",
											order: 1.45,
										},
										{
											id: S.$XX.MenubarGoMenu,
											precondition: null,
											group: "4_symbol_nav",
											order: 4,
										},
									],
								},
							);
						}
					},
				),
					(0, S.$4X)(
						class Fa extends q {
							static {
								this.ID = "editor.action.peekImplementation";
							}
							constructor() {
								super(
									{ openToSide: !1, openInPeek: !0, muteMessage: !1 },
									{
										id: Fa.ID,
										title: v.localize2(1138, "Peek Implementations"),
										precondition: T.$Kj.and(
											o.EditorContextKeys.hasImplementationProvider,
											$.PeekContext.notInPeekEditor,
											o.EditorContextKeys.isInEmbeddedEditor.toNegated(),
										),
										keybinding: {
											when: o.EditorContextKeys.editorTextFocus,
											primary:
												E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.F12,
											weight: L.KeybindingWeight.EditorContrib,
										},
										menu: {
											id: S.$XX.EditorContextPeek,
											group: "peek",
											order: 5,
										},
									},
								);
							}
						},
					);
				class V extends z {
					j(W) {
						return W ? v.localize(1122, null, W.word) : v.localize(1123, null);
					}
					k(W) {
						return W.getOption(c.EditorOption.gotoLocation)
							.alternativeReferenceCommand;
					}
					l(W) {
						return W.getOption(c.EditorOption.gotoLocation).multipleReferences;
					}
				}
				(0, S.$4X)(
					class extends V {
						constructor() {
							super(
								{ openToSide: !1, openInPeek: !1, muteMessage: !1 },
								{
									id: "editor.action.goToReferences",
									title: {
										...v.localize2(1139, "Go to References"),
										mnemonicTitle: v.localize(1124, null),
									},
									precondition: T.$Kj.and(
										o.EditorContextKeys.hasReferenceProvider,
										$.PeekContext.notInPeekEditor,
										o.EditorContextKeys.isInEmbeddedEditor.toNegated(),
									),
									keybinding: {
										when: o.EditorContextKeys.editorTextFocus,
										primary: E.KeyMod.Shift | E.KeyCode.F12,
										weight: L.KeybindingWeight.EditorContrib,
									},
									menu: [
										{
											id: S.$XX.EditorContext,
											group: "navigation",
											order: 1.45,
										},
										{
											id: S.$XX.MenubarGoMenu,
											precondition: null,
											group: "4_symbol_nav",
											order: 5,
										},
									],
								},
							);
						}
						async h(W, X, Y, ie) {
							return new s.$pNb(
								await (0, N.$TOb)(W.referenceProvider, X, Y, !0, !1, ie),
								v.localize(1125, null),
							);
						}
					},
				),
					(0, S.$4X)(
						class extends V {
							constructor() {
								super(
									{ openToSide: !1, openInPeek: !0, muteMessage: !1 },
									{
										id: "editor.action.referenceSearch.trigger",
										title: v.localize2(1140, "Peek References"),
										precondition: T.$Kj.and(
											o.EditorContextKeys.hasReferenceProvider,
											$.PeekContext.notInPeekEditor,
											o.EditorContextKeys.isInEmbeddedEditor.toNegated(),
										),
										menu: {
											id: S.$XX.EditorContextPeek,
											group: "peek",
											order: 6,
										},
									},
								);
							}
							async h(W, X, Y, ie) {
								return new s.$pNb(
									await (0, N.$TOb)(W.referenceProvider, X, Y, !1, !1, ie),
									v.localize(1126, null),
								);
							}
						},
					);
				class G extends z {
					constructor(W, X, Y) {
						super(W, {
							id: "editor.action.goToLocation",
							title: v.localize2(1141, "Go to Any Symbol"),
							precondition: T.$Kj.and(
								$.PeekContext.notInPeekEditor,
								o.EditorContextKeys.isInEmbeddedEditor.toNegated(),
							),
						}),
							(this.e = X),
							(this.p = Y);
					}
					async h(W, X, Y, ie) {
						return new s.$pNb(this.e, v.localize(1127, null));
					}
					j(W) {
						return (W && v.localize(1128, null, W.word)) || "";
					}
					l(W) {
						return (
							this.p ??
							W.getOption(c.EditorOption.gotoLocation).multipleReferences
						);
					}
					k() {
						return "";
					}
				}
				I.$fk.registerCommand({
					id: "editor.action.goToLocations",
					metadata: {
						description: "Go to locations from a position in a file",
						args: [
							{
								name: "uri",
								description: "The text document in which to start",
								constraint: d.URI,
							},
							{
								name: "position",
								description: "The position at which to start",
								constraint: n.$hL.isIPosition,
							},
							{
								name: "locations",
								description: "An array of locations.",
								constraint: Array,
							},
							{
								name: "multiple",
								description:
									"Define what to do when having multiple results, either `peek`, `gotoAndPeek`, or `goto`",
							},
							{
								name: "noResultsMessage",
								description:
									"Human readable message that shows when locations is empty.",
							},
						],
					},
					handler: async (J, W, X, Y, ie, ne, ee) => {
						(0, C.$vg)(d.URI.isUri(W)),
							(0, C.$vg)(n.$hL.isIPosition(X)),
							(0, C.$vg)(Array.isArray(Y)),
							(0, C.$vg)(typeof ie > "u" || typeof ie == "string"),
							(0, C.$vg)(typeof ee > "u" || typeof ee == "boolean");
						const _ = J.get(a.$dtb),
							te = await _.openCodeEditor(
								{ resource: W },
								_.getFocusedCodeEditor(),
							);
						if ((0, r.$0sb)(te))
							return (
								te.setPosition(X),
								te.revealPositionInCenterIfOutsideViewport(
									X,
									p.ScrollType.Smooth,
								),
								te.invokeWithinContext((Q) => {
									const Z = new (class extends G {
										j(se) {
											return ne || super.j(se);
										}
									})(
										{ muteMessage: !ne, openInPeek: !!ee, openToSide: !1 },
										Y,
										ie,
									);
									Q.get(k.$Li).invokeFunction(Z.run.bind(Z), te);
								})
							);
					},
				}),
					I.$fk.registerCommand({
						id: "editor.action.peekLocations",
						metadata: {
							description: "Peek locations from a position in a file",
							args: [
								{
									name: "uri",
									description: "The text document in which to start",
									constraint: d.URI,
								},
								{
									name: "position",
									description: "The position at which to start",
									constraint: n.$hL.isIPosition,
								},
								{
									name: "locations",
									description: "An array of locations.",
									constraint: Array,
								},
								{
									name: "multiple",
									description:
										"Define what to do when having multiple results, either `peek`, `gotoAndPeek`, or `goto`",
								},
							],
						},
						handler: async (J, W, X, Y, ie) => {
							J.get(I.$ek).executeCommand(
								"editor.action.goToLocations",
								W,
								X,
								Y,
								ie,
								void 0,
								!0,
							);
						},
					}),
					I.$fk.registerCommand({
						id: "editor.action.findReferences",
						handler: (J, W, X) => {
							(0, C.$vg)(d.URI.isUri(W)), (0, C.$vg)(n.$hL.isIPosition(X));
							const Y = J.get(A.$k3),
								ie = J.get(a.$dtb);
							return ie
								.openCodeEditor({ resource: W }, ie.getFocusedCodeEditor())
								.then((ne) => {
									if (!(0, r.$0sb)(ne) || !ne.hasModel()) return;
									const ee = b.$EOb.get(ne);
									if (!ee) return;
									const _ = (0, i.$zh)((Q) =>
											(0, N.$TOb)(
												Y.referenceProvider,
												ne.getModel(),
												n.$hL.lift(X),
												!1,
												!1,
												Q,
											).then((Z) => new s.$pNb(Z, v.localize(1129, null))),
										),
										te = new g.$iL(
											X.lineNumber,
											X.column,
											X.lineNumber,
											X.column,
										);
									return Promise.resolve(ee.toggleWidget(te, _, !1));
								});
						},
					}),
					I.$fk.registerCommandAlias(
						"editor.action.showReferences",
						"editor.action.peekLocations",
					);
				class K extends u.$ktb {
					runEditorCommand(W, X, ...Y) {
						const ie = X.getModel()?.uri.toString(),
							ne = X.getModel(),
							ee = X.getPosition(),
							_ = W.get(A.$k3),
							te = W.get(O.$bub),
							Q = W.get(I.$ek),
							Z = new w.$Ce();
						setTimeout(() => Z.cancel(), 1e3),
							(0, N.$POb)(_.definitionProvider, ne, ee, !1, Z.token).then(
								(se) => {
									const re = se[0],
										le = re.originSelectionRange ?? re.range,
										oe = ne.getValueInRange(le);
									te.callInsertExplainSymbolChatCallback({
										editorUri: ie,
										symbolName: oe,
									}),
										Q.executeCommand("aichat.opensidebar"),
										Q.executeCommand("aichat.focus");
								},
							);
					}
				}
			},
		),
		define(
			de[1037],
			he([
				1, 0, 15, 29, 94, 3, 439, 56, 46, 38, 17, 61, 42, 766, 255, 4, 8, 1036,
				414, 69, 122, 2299,
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
				var l;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$YOb = void 0),
					(g = mt(g));
				let y = class {
					static {
						l = this;
					}
					static {
						this.ID = "editor.contrib.gotodefinitionatposition";
					}
					static {
						this.MAX_SOURCE_PREVIEW_LINES = 8;
					}
					constructor(v, S, I, T) {
						(this.h = S),
							(this.i = I),
							(this.j = T),
							(this.b = new E.$Zc()),
							(this.c = new E.$Zc()),
							(this.f = null),
							(this.g = null),
							(this.a = v),
							(this.d = this.a.createDecorationsCollection());
						const P = new c.$6Mb(v);
						this.b.add(P),
							this.b.add(
								P.onMouseMoveOrRelevantKeyDown(([k, L]) => {
									this.k(k, L ?? void 0);
								}),
							),
							this.b.add(
								P.onExecute((k) => {
									this.r(k) &&
										this.t(k.target.position, k.hasSideBySideModifier)
											.catch((L) => {
												(0, i.$4)(L);
											})
											.finally(() => {
												this.q();
											});
								}),
							),
							this.b.add(
								P.onCancel(() => {
									this.q(), (this.f = null);
								}),
							);
					}
					static get(v) {
						return v.getContribution(l.ID);
					}
					async startFindDefinitionFromCursor(v) {
						await this.l(v),
							this.c.add(
								this.a.onDidChangeCursorPosition(() => {
									(this.f = null), this.q(), this.c.clear();
								}),
							),
							this.c.add(
								this.a.onKeyDown((S) => {
									S && ((this.f = null), this.q(), this.c.clear());
								}),
							);
					}
					k(v, S) {
						if (
							v.target.type === d.MouseTargetType.CONTENT_WIDGET &&
							this.d.length > 0
						)
							return;
						if (!this.a.hasModel() || !this.r(v, S)) {
							(this.f = null), this.q();
							return;
						}
						const I = v.target.position;
						this.l(I);
					}
					async l(v) {
						this.c.clear();
						const S = v ? this.a.getModel()?.getWordAtPosition(v) : null;
						if (!S) {
							(this.f = null), this.q();
							return;
						}
						if (
							this.f &&
							this.f.startColumn === S.startColumn &&
							this.f.endColumn === S.endColumn &&
							this.f.word === S.word
						)
							return;
						this.f = S;
						const I = new C.$Mzb(
							this.a,
							C.CodeEditorStateFlag.Position |
								C.CodeEditorStateFlag.Value |
								C.CodeEditorStateFlag.Selection |
								C.CodeEditorStateFlag.Scroll,
						);
						this.g && (this.g.cancel(), (this.g = null)),
							(this.g = (0, t.$zh)((k) => this.s(v, k)));
						let T;
						try {
							T = await this.g;
						} catch (k) {
							(0, i.$4)(k);
							return;
						}
						if (!T || !T.length || !I.validate(this.a)) {
							this.q();
							return;
						}
						const P = T[0].originSelectionRange
							? u.$iL.lift(T[0].originSelectionRange)
							: new u.$iL(
									v.lineNumber,
									S.startColumn,
									v.lineNumber,
									S.endColumn,
								);
						if (T.length > 1) {
							let k = P;
							for (const { originSelectionRange: L } of T)
								L && (k = u.$iL.plusRange(k, L));
							this.p(
								k,
								new w.$cl().appendText(g.localize(1142, null, T.length)),
							);
						} else {
							const k = T[0];
							if (!k.uri) return;
							this.h.createModelReference(k.uri).then((L) => {
								if (!L.object || !L.object.textEditorModel) {
									L.dispose();
									return;
								}
								const {
										object: { textEditorModel: D },
									} = L,
									{ startLineNumber: M } = k.range;
								if (M < 1 || M > D.getLineCount()) {
									L.dispose();
									return;
								}
								const N = this.m(D, M, k),
									A = this.i.guessLanguageIdByFilepathOrFirstLine(D.uri);
								this.p(P, N ? new w.$cl().appendCodeblock(A || "", N) : void 0),
									L.dispose();
							});
						}
					}
					m(v, S, I) {
						let T = I.range;
						return (
							T.endLineNumber - T.startLineNumber >=
								l.MAX_SOURCE_PREVIEW_LINES && (T = this.o(v, S)),
							this.n(v, S, T)
						);
					}
					n(v, S, I) {
						let P = v.getLineFirstNonWhitespaceColumn(S);
						for (let L = S + 1; L < I.endLineNumber; L++) {
							const D = v.getLineFirstNonWhitespaceColumn(L);
							P = Math.min(P, D);
						}
						return v
							.getValueInRange(I)
							.replace(new RegExp(`^\\s{${P - 1}}`, "gm"), "")
							.trim();
					}
					o(v, S) {
						const I = v.getLineFirstNonWhitespaceColumn(S),
							T = Math.min(v.getLineCount(), S + l.MAX_SOURCE_PREVIEW_LINES);
						let P = S + 1;
						for (; P < T; P++) {
							const k = v.getLineFirstNonWhitespaceColumn(P);
							if (I === k) break;
						}
						return new u.$iL(S, 1, P + 1, 1);
					}
					p(v, S) {
						const I = {
							range: v,
							options: {
								description: "goto-definition-link",
								inlineClassName: "goto-definition-link",
								hoverMessage: S,
							},
						};
						this.d.set([I]);
					}
					q() {
						this.d.clear();
					}
					r(v, S) {
						return (
							this.a.hasModel() &&
							v.isLeftClick &&
							v.isNoneOrSingleMouseDown &&
							v.target.type === d.MouseTargetType.CONTENT_TEXT &&
							!(v.target.detail.injectedText?.options instanceof s.$dY) &&
							(v.hasTriggerModifier || (S ? S.keyCodeIsTriggerKey : !1)) &&
							this.j.definitionProvider.has(this.a.getModel())
						);
					}
					s(v, S) {
						const I = this.a.getModel();
						return I
							? (0, f.$POb)(this.j.definitionProvider, I, v, !1, S)
							: Promise.resolve(null);
					}
					t(v, S) {
						return (
							this.a.setPosition(v),
							this.a.invokeWithinContext((I) => {
								const T =
									!S &&
									this.a.getOption(r.EditorOption.definitionLinkOpensInPeek) &&
									!this.u(I);
								return new o.$XOb(
									{ openToSide: S, openInPeek: T, muteMessage: !0 },
									{
										title: { value: "", original: "" },
										id: "",
										precondition: void 0,
									},
								).run(I);
							})
						);
					}
					u(v) {
						const S = v.get(p.$6j);
						return n.PeekContext.inPeekEditor.getValue(S);
					}
					dispose() {
						this.b.dispose(), this.c.dispose();
					}
				};
				(e.$YOb = y),
					(e.$YOb = y = l = Ne([j(1, h.$MO), j(2, a.$nM), j(3, b.$k3)], y)),
					(0, m.$qtb)(
						y.ID,
						y,
						m.EditorContributionInstantiation.BeforeFirstInteraction,
					);
			},
		),
		define(
			de[1867],
			he([1, 0, 7, 50, 33, 47, 38, 17, 42, 1036, 255, 11, 31, 8, 49, 5, 40]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ohc = o),
					(e.$phc = f),
					(t = mt(t));
				async function o(b, s, l, y) {
					const $ = b.get(m.$MO),
						v = b.get(n.$Xxb),
						S = b.get(h.$ek),
						I = b.get(g.$Li),
						T = b.get(p.$4N);
					if (
						(await y.item.resolve(w.CancellationToken.None), !y.part.location)
					)
						return;
					const P = y.part.location,
						k = [],
						L = new Set(
							a.$ZX
								.getMenuItems(a.$XX.EditorContext)
								.map((M) => ((0, a.$VX)(M) ? M.command.id : (0, E.$9g)())),
						);
					for (const M of r.$WOb.all())
						L.has(M.desc.id) &&
							k.push(
								new i.$rj(
									M.desc.id,
									a.$2X.label(M.desc, { renderShortTitle: !0 }),
									void 0,
									!0,
									async () => {
										const N = await $.createModelReference(P.uri);
										try {
											const A = new r.$VOb(
													N.object.textEditorModel,
													d.$iL.getStartPosition(P.range),
												),
												R = y.item.anchor.range;
											await I.invokeFunction(
												M.runEditorCommand.bind(M),
												s,
												A,
												R,
											);
										} finally {
											N.dispose();
										}
									},
								),
							);
					if (y.part.command) {
						const { command: M } = y.part;
						k.push(new i.$tj()),
							k.push(
								new i.$rj(M.id, M.title, void 0, !0, async () => {
									try {
										await S.executeCommand(M.id, ...(M.arguments ?? []));
									} catch (N) {
										T.notify({
											severity: p.Severity.Error,
											source: y.item.provider.displayName,
											message: N,
										});
									}
								}),
							);
					}
					const D = s.getOption(C.EditorOption.useShadowDOM);
					v.showContextMenu({
						domForShadowRoot: D ? (s.getDomNode() ?? void 0) : void 0,
						getAnchor: () => {
							const M = t.$tgb(l);
							return { x: M.left, y: M.top + M.height + 8 };
						},
						getActions: () => k,
						onHide: () => {
							s.focus();
						},
						autoSelectFirstItem: !0,
					});
				}
				async function f(b, s, l, y) {
					const v = await b.get(m.$MO).createModelReference(y.uri);
					await l.invokeWithinContext(async (S) => {
						const I = s.hasSideBySideModifier,
							T = S.get(c.$6j),
							P = u.PeekContext.inPeekEditor.getValue(T),
							k =
								!I &&
								l.getOption(C.EditorOption.definitionLinkOpensInPeek) &&
								!P;
						return new r.$XOb(
							{ openToSide: I, openInPeek: k, muteMessage: !0 },
							{
								title: { value: "", original: "" },
								id: "",
								precondition: void 0,
							},
						).run(
							S,
							new r.$VOb(
								v.object.textEditorModel,
								d.$iL.getStartPosition(y.range),
							),
							d.$iL.lift(y.range),
						);
					}),
						v.dispose();
				}
			},
		),
		define(
			de[1316],
			he([
				1, 0, 7, 24, 15, 33, 29, 3, 59, 28, 9, 56, 777, 491, 38, 188, 17, 74,
				64, 122, 391, 69, 42, 766, 1177, 1867, 31, 20, 5, 40, 51, 35,
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
			) {
				"use strict";
				var M;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$rhc = e.$qhc = void 0),
					(o = mt(o)),
					(L = mt(L));
				class N {
					constructor() {
						this.a = new m.$Jc(50);
					}
					get(x) {
						const H = N.b(x);
						return this.a.get(H);
					}
					set(x, H) {
						const q = N.b(x);
						this.a.set(q, H);
					}
					static b(x) {
						return `${x.uri.toString()}/${x.getVersionId()}`;
					}
				}
				const A = (0, P.$Mi)("IInlayHintsCache");
				(0, T.$lK)(A, N, T.InstantiationType.Delayed);
				class R {
					constructor(x, H) {
						(this.item = x), (this.index = H);
					}
					get part() {
						const x = this.item.hint.label;
						return typeof x == "string" ? { label: x } : x[this.index];
					}
				}
				e.$qhc = R;
				class O {
					constructor(x, H) {
						(this.part = x), (this.hasTriggerModifier = H);
					}
				}
				var B;
				(function (F) {
					(F[(F.Normal = 0)] = "Normal"), (F[(F.Invisible = 1)] = "Invisible");
				})(B || (B = {}));
				let U = class {
					static {
						M = this;
					}
					static {
						this.ID = "editor.contrib.InlayHints";
					}
					static {
						this.a = 1500;
					}
					static {
						this.b = 43;
					}
					static get(x) {
						return x.getContribution(M.ID) ?? void 0;
					}
					constructor(x, H, q, V, G, K, J) {
						(this.m = x),
							(this.n = H),
							(this.o = V),
							(this.p = G),
							(this.q = K),
							(this.s = J),
							(this.c = new d.$Zc()),
							(this.f = new d.$Zc()),
							(this.h = new Map()),
							(this.j = new h.$oub(this.m)),
							(this.k = B.Normal),
							(this.g = q.for(H.inlayHintsProvider, "InlayHint", { min: 25 })),
							this.c.add(H.inlayHintsProvider.onDidChange(() => this.t())),
							this.c.add(x.onDidChangeModel(() => this.t())),
							this.c.add(x.onDidChangeModelLanguage(() => this.t())),
							this.c.add(
								x.onDidChangeConfiguration((W) => {
									W.hasChanged(n.EditorOption.inlayHints) && this.t();
								}),
							),
							this.t();
					}
					dispose() {
						this.f.dispose(), this.G(), this.c.dispose();
					}
					t() {
						this.f.clear(), this.G();
						const x = this.m.getOption(n.EditorOption.inlayHints);
						if (x.enabled === "off") return;
						const H = this.m.getModel();
						if (!H || !this.n.inlayHintsProvider.has(H)) return;
						if (x.enabled === "on") this.k = B.Normal;
						else {
							let J, W;
							x.enabled === "onUnlessPressed"
								? ((J = B.Normal), (W = B.Invisible))
								: ((J = B.Invisible), (W = B.Normal)),
								(this.k = J),
								this.f.add(
									t.$Fhb.getInstance().event((X) => {
										if (!this.m.hasModel()) return;
										const Y =
											X.altKey && X.ctrlKey && !(X.shiftKey || X.metaKey)
												? W
												: J;
										if (Y !== this.k) {
											this.k = Y;
											const ie = this.m.getModel(),
												ne = this.B(ie);
											this.D([ie.getFullModelRange()], ne), K.schedule(0);
										}
									}),
								);
						}
						const q = this.o.get(H);
						q && this.D([H.getFullModelRange()], q),
							this.f.add(
								(0, d.$Yc)(() => {
									H.isDisposed() || this.A(H);
								}),
							);
						let V;
						const G = new Set(),
							K = new w.$Yh(async () => {
								const J = Date.now();
								V?.dispose(!0), (V = new E.$Ce());
								const W = H.onWillDispose(() => V?.cancel());
								try {
									const X = V.token,
										Y = await v.$mhc.create(
											this.n.inlayHintsProvider,
											H,
											this.C(),
											X,
										);
									if (
										((K.delay = this.g.update(H, Date.now() - J)),
										X.isCancellationRequested)
									) {
										Y.dispose();
										return;
									}
									for (const ie of Y.provider)
										typeof ie.onDidChangeInlayHints == "function" &&
											!G.has(ie) &&
											(G.add(ie),
											this.f.add(
												ie.onDidChangeInlayHints(() => {
													K.isScheduled() || K.schedule();
												}),
											));
									this.f.add(Y), this.D(Y.ranges, Y.items), this.A(H);
								} catch (X) {
									(0, C.$4)(X);
								} finally {
									V.dispose(), W.dispose();
								}
							}, this.g.get(H));
						this.f.add(K),
							this.f.add((0, d.$Yc)(() => V?.dispose(!0))),
							K.schedule(0),
							this.f.add(
								this.m.onDidScrollChange((J) => {
									(J.scrollTopChanged || !K.isScheduled()) && K.schedule();
								}),
							),
							this.f.add(
								this.m.onDidChangeModelContent((J) => {
									V?.cancel();
									const W = Math.max(K.delay, 1250);
									K.schedule(W);
								}),
							),
							this.f.add(this.w(() => K.schedule(0))),
							this.f.add(this.u()),
							this.f.add(this.x());
					}
					u() {
						const x = new d.$Zc(),
							H = x.add(new $.$6Mb(this.m)),
							q = new d.$Zc();
						return (
							x.add(q),
							x.add(
								H.onMouseMoveOrRelevantKeyDown((V) => {
									const [G] = V,
										K = this.y(G),
										J = this.m.getModel();
									if (!K || !J) {
										q.clear();
										return;
									}
									const W = new E.$Ce();
									q.add((0, d.$Yc)(() => W.dispose(!0))),
										K.item.resolve(W.token),
										(this.l =
											K.part.command || K.part.location
												? new O(K, G.hasTriggerModifier)
												: void 0);
									const X = J.validatePosition(K.item.hint.position).lineNumber,
										Y = new p.$iL(X, 1, X, J.getLineMaxColumn(X)),
										ie = this.v(Y);
									this.D([Y], ie),
										q.add(
											(0, d.$Yc)(() => {
												(this.l = void 0), this.D([Y], ie);
											}),
										);
								}),
							),
							x.add(H.onCancel(() => q.clear())),
							x.add(
								H.onExecute(async (V) => {
									const G = this.y(V);
									if (G) {
										const K = G.part;
										K.location
											? this.s.invokeFunction(S.$phc, V, this.m, K.location)
											: o.Command.is(K.command) &&
												(await this.z(K.command, G.item));
									}
								}),
							),
							x
						);
					}
					v(x) {
						const H = new Set();
						for (const q of this.h.values())
							x.containsRange(q.item.anchor.range) && H.add(q.item);
						return Array.from(H);
					}
					w(x) {
						return this.m.onMouseUp(async (H) => {
							if (H.event.detail !== 2) return;
							const q = this.y(H);
							if (
								q &&
								(H.event.preventDefault(),
								await q.item.resolve(E.CancellationToken.None),
								(0, i.$Pb)(q.item.hint.textEdits))
							) {
								const V = q.item.hint.textEdits.map((G) =>
									g.$jL.replace(p.$iL.lift(G.range), G.text),
								);
								this.m.executeEdits("inlayHint.default", V), x();
							}
						});
					}
					x() {
						return this.m.onContextMenu(async (x) => {
							if (!(0, t.$Ygb)(x.event.target)) return;
							const H = this.y(x);
							H &&
								(await this.s.invokeFunction(
									S.$ohc,
									this.m,
									x.event.target,
									H,
								));
						});
					}
					y(x) {
						if (x.target.type !== a.MouseTargetType.CONTENT_TEXT) return;
						const H = x.target.detail.injectedText?.options;
						if (H instanceof b.$dY && H?.attachedData instanceof R)
							return H.attachedData;
					}
					async z(x, H) {
						try {
							await this.p.executeCommand(x.id, ...(x.arguments ?? []));
						} catch (q) {
							this.q.notify({
								severity: k.Severity.Error,
								source: H.provider.displayName,
								message: q,
							});
						}
					}
					A(x) {
						const H = this.B(x);
						this.o.set(x, H);
					}
					B(x) {
						const H = new Map();
						for (const [q, V] of this.h) {
							if (H.has(V.item)) continue;
							const G = x.getDecorationRange(q);
							if (G) {
								const K = new v.$khc(G, V.item.anchor.direction),
									J = V.item.with({ anchor: K });
								H.set(V.item, J);
							}
						}
						return Array.from(H.values());
					}
					C() {
						const H = this.m.getModel(),
							q = this.m.getVisibleRangesPlusViewportAboveBelow(),
							V = [];
						for (const G of q.sort(p.$iL.compareRangesUsingStarts)) {
							const K = H.validateRange(
								new p.$iL(
									G.startLineNumber - 30,
									G.startColumn,
									G.endLineNumber + 30,
									G.endColumn,
								),
							);
							V.length === 0 ||
							!p.$iL.areIntersectingOrTouching(V[V.length - 1], K)
								? V.push(K)
								: (V[V.length - 1] = p.$iL.plusRange(V[V.length - 1], K));
						}
						return V;
					}
					D(x, H) {
						const q = [],
							V = (_, te, Q, Z, se) => {
								const re = {
									content: Q,
									inlineClassNameAffectsLetterSpacing: !0,
									inlineClassName: te.className,
									cursorStops: Z,
									attachedData: se,
								};
								q.push({
									item: _,
									classNameRef: te,
									decoration: {
										range: _.anchor.range,
										options: {
											description: "InlayHint",
											showIfCollapsed: _.anchor.range.isEmpty(),
											collapseOnReplaceEdit: !_.anchor.range.isEmpty(),
											stickiness:
												f.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
											[_.anchor.direction]: this.k === B.Normal ? re : void 0,
										},
									},
								});
							},
							G = (_, te) => {
								const Q = this.j.createClassNameRef({
									width: `${(K / 3) | 0}px`,
									display: "inline-block",
								});
								V(
									_,
									Q,
									"\u200A",
									te
										? f.InjectedTextCursorStops.Right
										: f.InjectedTextCursorStops.None,
								);
							},
							{
								fontSize: K,
								fontFamily: J,
								padding: W,
								isUniform: X,
							} = this.F(),
							Y = "--code-editorInlayHintsFontFamily";
						this.m.getContainerDomNode().style.setProperty(Y, J);
						let ie = { line: 0, totalLen: 0 };
						for (const _ of H) {
							if (
								(ie.line !== _.anchor.range.startLineNumber &&
									(ie = { line: _.anchor.range.startLineNumber, totalLen: 0 }),
								ie.totalLen > M.b)
							)
								continue;
							_.hint.paddingLeft && G(_, !1);
							const te =
								typeof _.hint.label == "string"
									? [{ label: _.hint.label }]
									: _.hint.label;
							for (let Q = 0; Q < te.length; Q++) {
								const Z = te[Q],
									se = Q === 0,
									re = Q === te.length - 1,
									le = {
										fontSize: `${K}px`,
										fontFamily: `var(${Y}), ${n.EDITOR_FONT_DEFAULTS.fontFamily}`,
										verticalAlign: X ? "baseline" : "middle",
										unicodeBidi: "isolate",
									};
								(0, i.$Pb)(_.hint.textEdits) && (le.cursor = "default"),
									this.E(le, _.hint),
									(Z.command || Z.location) &&
										this.l?.part.item === _ &&
										this.l.part.index === Q &&
										((le.textDecoration = "underline"),
										this.l.hasTriggerModifier &&
											((le.color = (0, D.$jP)(L.$qQ)),
											(le.cursor = "pointer"))),
									W &&
										(se && re
											? ((le.padding = `1px ${Math.max(1, K / 4) | 0}px`),
												(le.borderRadius = `${(K / 4) | 0}px`))
											: se
												? ((le.padding = `1px 0 1px ${Math.max(1, K / 4) | 0}px`),
													(le.borderRadius = `${(K / 4) | 0}px 0 0 ${(K / 4) | 0}px`))
												: re
													? ((le.padding = `1px ${Math.max(1, K / 4) | 0}px 1px 0`),
														(le.borderRadius = `0 ${(K / 4) | 0}px ${(K / 4) | 0}px 0`))
													: (le.padding = "1px 0 1px 0"));
								let oe = Z.label;
								ie.totalLen += oe.length;
								let ae = !1;
								const pe = ie.totalLen - M.b;
								if (
									(pe > 0 && ((oe = oe.slice(0, -pe) + "\u2026"), (ae = !0)),
									V(
										_,
										this.j.createClassNameRef(le),
										z(oe),
										re && !_.hint.paddingRight
											? f.InjectedTextCursorStops.Right
											: f.InjectedTextCursorStops.None,
										new R(_, Q),
									),
									ae)
								)
									break;
							}
							if ((_.hint.paddingRight && G(_, !0), q.length > M.a)) break;
						}
						const ne = [];
						for (const [_, te] of this.h) {
							const Q = this.m.getModel()?.getDecorationRange(_);
							Q &&
								x.some((Z) => Z.containsRange(Q)) &&
								(ne.push(_), te.classNameRef.dispose(), this.h.delete(_));
						}
						const ee = c.$uwb.capture(this.m);
						this.m.changeDecorations((_) => {
							const te = _.deltaDecorations(
								ne,
								q.map((Q) => Q.decoration),
							);
							for (let Q = 0; Q < te.length; Q++) {
								const Z = q[Q];
								this.h.set(te[Q], Z);
							}
						}),
							ee.restore(this.m);
					}
					E(x, H) {
						H.kind === o.InlayHintKind.Parameter
							? ((x.backgroundColor = (0, D.$jP)(L.$OQ)),
								(x.color = (0, D.$jP)(L.$NQ)))
							: H.kind === o.InlayHintKind.Type
								? ((x.backgroundColor = (0, D.$jP)(L.$MQ)),
									(x.color = (0, D.$jP)(L.$LQ)))
								: ((x.backgroundColor = (0, D.$jP)(L.$KQ)),
									(x.color = (0, D.$jP)(L.$JQ)));
					}
					F() {
						const x = this.m.getOption(n.EditorOption.inlayHints),
							H = x.padding,
							q = this.m.getOption(n.EditorOption.fontSize),
							V = this.m.getOption(n.EditorOption.fontFamily);
						let G = x.fontSize;
						(!G || G < 5 || G > q) && (G = q);
						const K = x.fontFamily || V;
						return {
							fontSize: G,
							fontFamily: K,
							padding: H,
							isUniform: !H && K === V && G === q,
						};
					}
					G() {
						this.m.removeDecorations(Array.from(this.h.keys()));
						for (const x of this.h.values()) x.classNameRef.dispose();
						this.h.clear();
					}
					getInlayHintsForLine(x) {
						if (!this.m.hasModel()) return [];
						const H = new Set(),
							q = [];
						for (const V of this.m.getLineDecorations(x)) {
							const G = this.h.get(V.id);
							G && !H.has(G.item.hint) && (H.add(G.item.hint), q.push(G.item));
						}
						return q;
					}
				};
				(e.$rhc = U),
					(e.$rhc =
						U =
						M =
							Ne(
								[
									j(1, l.$k3),
									j(2, s.$PBb),
									j(3, A),
									j(4, I.$ek),
									j(5, k.$4N),
									j(6, P.$Li),
								],
								U,
							));
				function z(F) {
					return F.replace(/[ \t]/g, "\xA0");
				}
				I.$fk.registerCommand("_executeInlayHintProvider", async (F, ...x) => {
					const [H, q] = x;
					(0, r.$vg)(u.URI.isUri(H)), (0, r.$vg)(p.$iL.isIRange(q));
					const { inlayHintsProvider: V } = F.get(l.$k3),
						G = await F.get(y.$MO).createModelReference(H);
					try {
						const K = await v.$mhc.create(
								V,
								G.object.textEditorModel,
								[p.$iL.lift(q)],
								E.CancellationToken.None,
							),
							J = K.items.map((W) => W.hint);
						return setTimeout(() => K.dispose(), 0), J;
					} finally {
						G.dispose();
					}
				});
			},
		),
		define(
			de[1868],
			he([
				1, 0, 15, 94, 56, 48, 122, 368, 61, 42, 1643, 820, 1316, 10, 41, 69, 38,
				4, 12, 1177, 24, 39, 72, 31, 137, 32, 219, 45,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$shc = void 0),
					(f = mt(f));
				class P extends d.$3Bb {
					constructor(D, M, N, A) {
						super(10, M, D.item.anchor.range, N, A, !0), (this.part = D);
					}
				}
				let k = class extends a.$hhc {
					constructor(D, M, N, A, R, O, B, U, z, F, x, H, q) {
						super(D, M, N, O, U, A, R, z, F, x, H, q),
							(this.r = B),
							(this.hoverOrdinal = 6);
					}
					suggestHoverAnchor(D) {
						if (
							!h.$rhc.get(this.b) ||
							D.target.type !== w.MouseTargetType.CONTENT_TEXT
						)
							return null;
						const N = D.target.detail.injectedText?.options;
						return N instanceof C.$dY && N.attachedData instanceof h.$qhc
							? new P(N.attachedData, this, D.event.posx, D.event.posy)
							: null;
					}
					computeSync() {
						return [];
					}
					computeAsync(D, M, N) {
						return D instanceof P
							? new t.$ai(async (A) => {
									const { part: R } = D;
									if ((await R.item.resolve(N), N.isCancellationRequested))
										return;
									let O;
									typeof R.item.hint.tooltip == "string"
										? (O = new i.$cl().appendText(R.item.hint.tooltip))
										: R.item.hint.tooltip && (O = R.item.hint.tooltip),
										O && A.emitOne(new a.$ghc(this, D.range, [O], !1, 0)),
										(0, s.$Pb)(R.item.hint.textEdits) &&
											A.emitOne(
												new a.$ghc(
													this,
													D.range,
													[new i.$cl().appendText((0, o.localize)(1229, null))],
													!1,
													10001,
												),
											);
									let B;
									if (
										(typeof R.part.tooltip == "string"
											? (B = new i.$cl().appendText(R.part.tooltip))
											: R.part.tooltip && (B = R.part.tooltip),
										B && A.emitOne(new a.$ghc(this, D.range, [B], !1, 1)),
										R.part.location || R.part.command)
									) {
										let z;
										const x =
											this.b.getOption(p.EditorOption.multiCursorModifier) ===
											"altKey"
												? f.$m
													? (0, o.localize)(1230, null)
													: (0, o.localize)(1231, null)
												: f.$m
													? (0, o.localize)(1232, null)
													: (0, o.localize)(1233, null);
										R.part.location && R.part.command
											? (z = new i.$cl().appendText(
													(0, o.localize)(1234, null, x),
												))
											: R.part.location
												? (z = new i.$cl().appendText(
														(0, o.localize)(1235, null, x),
													))
												: R.part.command &&
													(z = new i.$cl(
														`[${(0, o.localize)(1236, null)}](${(0, b.$nhc)(R.part.command)} "${R.part.command.title}") (${x})`,
														{ isTrusted: !0 },
													)),
											z && A.emitOne(new a.$ghc(this, D.range, [z], !1, 1e4));
									}
									const U = await this.s(R, N);
									for await (const z of U) A.emitOne(z);
								})
							: t.$ai.EMPTY;
					}
					async s(D, M) {
						if (!D.part.location) return t.$ai.EMPTY;
						const { uri: N, range: A } = D.part.location,
							R = await this.r.createModelReference(N);
						try {
							const O = R.object.textEditorModel;
							return this.h.hoverProvider.has(O)
								? (0, u.$1Db)(
										this.h.hoverProvider,
										O,
										new E.$hL(A.startLineNumber, A.startColumn),
										M,
									)
										.filter((B) => !(0, i.$dl)(B.hover.contents))
										.map(
											(B) =>
												new a.$ghc(
													this,
													D.item.anchor.range,
													B.hover.contents,
													!1,
													2 + B.ordinal,
												),
										)
								: t.$ai.EMPTY;
						} finally {
							R.dispose();
						}
					}
				};
				(e.$shc = k),
					(e.$shc = k =
						Ne(
							[
								j(1, m.$nM),
								j(2, n.$7rb),
								j(3, l.$uZ),
								j(4, y.$Uyb),
								j(5, c.$gj),
								j(6, r.$MO),
								j(7, g.$k3),
								j(8, $.$ek),
								j(9, I.IComposerService),
								j(10, v.$ifc),
								j(11, S.$km),
								j(12, T.$0zb),
							],
							k,
						));
			},
		),
		define(
			de[3605],
			he([1, 0, 368, 3, 1616, 122, 48, 17, 7, 820, 1218, 4, 1868, 29]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$thc = void 0),
					(m = mt(m));
				class n extends i.$1c {
					constructor(f, b, s, l, y, $) {
						super();
						const v = b.anchor,
							S = b.hoverParts;
						this.a = this.D(new p(f, s, S, $, y));
						const { showAtPosition: I, showAtSecondaryPosition: T } =
							n.computeHoverPositions(f, v.range, S);
						(this.shouldAppearBeforeContent = S.some((P) => P.isBeforeContent)),
							(this.showAtPosition = I),
							(this.showAtSecondaryPosition = T),
							(this.initialMousePosX = v.initialMousePosX),
							(this.initialMousePosY = v.initialMousePosY),
							(this.shouldFocus = l.shouldFocus),
							(this.source = l.source);
					}
					get domNode() {
						return this.a.domNode;
					}
					get domNodeHasChildren() {
						return this.a.domNodeHasChildren;
					}
					get focusedHoverPartIndex() {
						return this.a.focusedHoverPartIndex;
					}
					focusHoverPartWithIndex(f) {
						this.a.focusHoverPartWithIndex(f);
					}
					getAccessibleWidgetContent() {
						return this.a.getAccessibleContent();
					}
					getAccessibleWidgetContentAtIndex(f) {
						return this.a.getAccessibleHoverContentAtIndex(f);
					}
					async updateHoverVerbosityLevel(f, b, s) {
						this.a.updateHoverVerbosityLevel(f, b, s);
					}
					doesHoverAtIndexSupportVerbosityAction(f, b) {
						return this.a.doesHoverAtIndexSupportVerbosityAction(f, b);
					}
					isColorPickerVisible() {
						return this.a.isColorPickerVisible();
					}
					static computeHoverPositions(f, b, s) {
						let l = 1;
						if (f.hasModel()) {
							const T = f._getViewModel(),
								P = T.coordinatesConverter,
								k = P.convertModelRangeToViewRange(b),
								L = T.getLineMinColumn(k.startLineNumber),
								D = new C.$hL(k.startLineNumber, L);
							l = P.convertViewPositionToModelPosition(D).column;
						}
						const y = b.startLineNumber;
						let $ = b.startColumn,
							v;
						for (const T of s) {
							const P = T.range,
								k = P.startLineNumber === y,
								L = P.endLineNumber === y;
							if (k && L) {
								const M = P.startColumn,
									N = Math.min($, M);
								$ = Math.max(N, l);
							}
							T.forceShowAtRange && (v = P);
						}
						let S, I;
						if (v) {
							const T = v.getStartPosition();
							(S = T), (I = T);
						} else (S = b.getStartPosition()), (I = new C.$hL(y, $));
						return { showAtPosition: S, showAtSecondaryPosition: I };
					}
				}
				e.$thc = n;
				class g {
					constructor(f, b) {
						(this.a = b), f.appendChild(this.a.hoverElement);
					}
					get hoverElement() {
						return this.a.hoverElement;
					}
					get actions() {
						return this.a.actions;
					}
					dispose() {
						this.a.dispose();
					}
				}
				class p extends i.$1c {
					static {
						this.a = E.$eY.register({
							description: "content-hover-highlight",
							className: "hoverHighlight",
						});
					}
					constructor(f, b, s, l, y) {
						super(),
							(this.b = []),
							(this.j = -1),
							(this.f = y),
							(this.c = document.createDocumentFragment()),
							this.D(this.q(b, s, y, l)),
							this.D(this.t()),
							this.D(this.n(f, s)),
							this.u(b);
					}
					n(f, b) {
						if (b.length === 0) return i.$1c.None;
						let s = b[0].range;
						for (const y of b) {
							const $ = y.range;
							s = d.$iL.plusRange(s, $);
						}
						const l = f.createDecorationsCollection();
						return (
							l.set([{ range: s, options: p.a }]),
							(0, i.$Yc)(() => {
								l.clear();
							})
						);
					}
					q(f, b, s, l) {
						const y = new w.$WDb(l),
							$ = { fragment: this.c, statusBar: y, ...s },
							v = new i.$Zc();
						for (const I of f) {
							const T = this.r(b, I, $);
							v.add(T);
							for (const P of T.renderedHoverParts)
								this.b.push({
									type: "hoverPart",
									participant: I,
									hoverPart: P.hoverPart,
									hoverElement: P.hoverElement,
								});
						}
						const S = this.s(this.c, y);
						return (
							S &&
								(v.add(S),
								this.b.push({
									type: "statusBar",
									hoverElement: S.hoverElement,
									actions: S.actions,
								})),
							(0, i.$Yc)(() => {
								v.dispose();
							})
						);
					}
					r(f, b, s) {
						const l = f.filter(($) => $.owner === b);
						return l.length > 0 ? b.renderHoverParts(s, l) : new t.$4Bb([]);
					}
					s(f, b) {
						if (b.hasContent) return new g(f, b);
					}
					t() {
						const f = new i.$Zc();
						return (
							this.b.forEach((b, s) => {
								const l = b.hoverElement;
								(l.tabIndex = 0),
									f.add(
										m.$0fb(l, m.$$gb.FOCUS_IN, (y) => {
											y.stopPropagation(), (this.j = s);
										}),
									),
									f.add(
										m.$0fb(l, m.$$gb.FOCUS_OUT, (y) => {
											y.stopPropagation(), (this.j = -1);
										}),
									);
							}),
							f
						);
					}
					u(f) {
						const b = f.find(
							(s) => s instanceof r.$hhc && !(s instanceof h.$shc),
						);
						b && (this.g = b), (this.h = f.find((s) => s instanceof u.$$Bb));
					}
					focusHoverPartWithIndex(f) {
						f < 0 || f >= this.b.length || this.b[f].hoverElement.focus();
					}
					getAccessibleContent() {
						const f = [];
						for (let b = 0; b < this.b.length; b++)
							f.push(this.getAccessibleHoverContentAtIndex(b));
						return f.join(`

`);
					}
					getAccessibleHoverContentAtIndex(f) {
						const b = this.b[f];
						if (!b) return "";
						if (b.type === "statusBar") {
							const s = [(0, a.localize)(1165, null)];
							for (const l of b.actions) {
								const y = l.actionKeybindingLabel;
								y
									? s.push((0, a.localize)(1166, null, l.actionLabel, y))
									: s.push((0, a.localize)(1167, null, l.actionLabel));
							}
							return s.join(`
`);
						}
						return b.participant.getAccessibleContent(b.hoverPart);
					}
					async updateHoverVerbosityLevel(f, b, s) {
						if (!this.g) return;
						const l = this.w(this.g, b);
						if (l === void 0) return;
						const y = await this.g.updateMarkdownHoverVerbosityLevel(f, l, s);
						y &&
							((this.b[b] = {
								type: "hoverPart",
								participant: this.g,
								hoverPart: y.hoverPart,
								hoverElement: y.hoverElement,
							}),
							this.f.onContentsChanged());
					}
					doesHoverAtIndexSupportVerbosityAction(f, b) {
						if (!this.g) return !1;
						const s = this.w(this.g, f);
						return s === void 0
							? !1
							: this.g.doesMarkdownHoverAtIndexSupportVerbosityAction(s, b);
					}
					isColorPickerVisible() {
						return this.h?.isColorPickerVisible() ?? !1;
					}
					w(f, b) {
						const s = this.b[b];
						if (!s || s.type !== "hoverPart" || !(s.participant === f)) return;
						const y = this.b.findIndex(
							($) => $.type === "hoverPart" && $.participant === f,
						);
						if (y === -1) throw new c.$gb();
						return b - y;
					}
					get domNode() {
						return this.c;
					}
					get domNodeHasChildren() {
						return this.c.hasChildNodes();
					}
					get focusedHoverPartIndex() {
						return this.j;
					}
				}
			},
		),
		define(
			de[3606],
			he([
				1, 0, 7, 27, 3, 56, 38, 74, 601, 368, 5, 39, 2768, 2725, 2585, 6, 3605,
				937,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$vhc = void 0),
					(t = mt(t));
				let f = class extends w.$1c {
					constructor(s, l, y) {
						super(),
							(this.q = s),
							(this.r = l),
							(this.s = y),
							(this.c = null),
							(this.n = this.D(new g.$re())),
							(this.onContentsChanged = this.n.event),
							(this.h = this.D(this.r.createInstance(h.$uhc, this.q))),
							(this.j = this.t()),
							(this.g = new c.$VDb(this.q, this.j)),
							(this.m = this.D(new m.$sCb(this.q, this.g))),
							this.u();
					}
					t() {
						const s = [];
						for (const l of r.$5Bb.getAll()) {
							const y = this.r.createInstance(l, this.q);
							s.push(y);
						}
						return (
							s.sort((l, y) => l.hoverOrdinal - y.hoverOrdinal),
							this.D(
								this.h.onDidResize(() => {
									this.j.forEach((l) => l.handleResize?.());
								}),
							),
							s
						);
					}
					u() {
						this.D(
							this.m.onResult((l) => {
								if (!this.g.anchor) return;
								const y = l.hasLoadingMessage ? this.F(l.value) : l.value;
								this.G(new n.$XDb(this.g.anchor, y, l.isComplete));
							}),
						);
						const s = this.h.getDomNode();
						this.D(
							t.$$fb(s, "keydown", (l) => {
								l.equals(i.KeyCode.Escape) && this.hide();
							}),
						),
							this.D(
								t.$$fb(s, "mouseleave", (l) => {
									this.M(l);
								}),
							),
							this.D(
								d.$lM.onDidChange(() => {
									this.h.position && this.c && this.C(this.c);
								}),
							);
					}
					w(s, l, y, $, v) {
						if (!(this.h.position && this.c))
							return s ? (this.z(s, l, y, $, !1), !0) : !1;
						const I = this.q.getOption(C.EditorOption.hover).sticky,
							T = v && this.h.isMouseGettingCloser(v.event.posx, v.event.posy);
						return I && T
							? (s && this.z(s, l, y, $, !0), !0)
							: s
								? this.c.anchor.equals(s)
									? !0
									: s.canAdoptVisibleHover(this.c.anchor, this.h.position)
										? (this.C(this.c.filter(s)), this.z(s, l, y, $, !1), !0)
										: (this.C(null), this.z(s, l, y, $, !1), !0)
								: (this.C(null), !1);
					}
					z(s, l, y, $, v) {
						(this.g.anchor && this.g.anchor.equals(s)) ||
							(this.m.cancel(),
							(this.g.anchor = s),
							(this.g.shouldFocus = $),
							(this.g.source = y),
							(this.g.insistOnKeepingHoverVisible = v),
							this.m.start(l));
					}
					C(s) {
						let l = s;
						if (this.c === l) return;
						l && l.hoverParts.length === 0 && (l = null),
							(this.c = l),
							this.c ? this.H(this.c) : this.I();
					}
					F(s) {
						if (!this.g.anchor) return s;
						for (const l of this.j) {
							if (!l.createLoadingMessage) continue;
							const y = l.createLoadingMessage(this.g.anchor);
							if (y) return s.slice(0).concat([y]);
						}
						return s;
					}
					G(s) {
						if (
							((this.h.position && this.c && this.c.isComplete) || this.C(s),
							!s.isComplete)
						)
							return;
						const $ = s.hoverParts.length === 0,
							v = this.g.insistOnKeepingHoverVisible;
						($ && v) || this.C(s);
					}
					H(s) {
						const l = this.J();
						(this.f = new p.$thc(this.q, s, this.j, this.g, l, this.s)),
							this.f.domNodeHasChildren
								? this.h.show(this.f)
								: this.f.dispose();
					}
					I() {
						this.h.hide();
					}
					J() {
						return {
							hide: () => {
								this.hide();
							},
							onContentsChanged: () => {
								this.n.fire(), this.h.onContentsChanged();
							},
							setMinimumDimensions: ($) => {
								this.h.setMinimumDimensions($);
							},
						};
					}
					showsOrWillShow(s) {
						if (this.h.isResizing) return !0;
						const y = this.L(s);
						if (!(y.length > 0))
							return this.w(
								null,
								m.HoverStartMode.Delayed,
								m.HoverStartSource.Mouse,
								!1,
								s,
							);
						const v = y[0];
						return this.w(
							v,
							m.HoverStartMode.Delayed,
							m.HoverStartSource.Mouse,
							!1,
							s,
						);
					}
					L(s) {
						const l = [];
						for (const $ of this.j) {
							if (!$.suggestHoverAnchor) continue;
							const v = $.suggestHoverAnchor(s);
							v && l.push(v);
						}
						const y = s.target;
						switch (y.type) {
							case E.MouseTargetType.CONTENT_TEXT: {
								l.push(new r.$2Bb(0, y.range, s.event.posx, s.event.posy));
								break;
							}
							case E.MouseTargetType.CONTENT_EMPTY: {
								const $ =
									this.q.getOption(C.EditorOption.fontInfo)
										.typicalHalfwidthCharacterWidth / 2;
								if (
									!(
										!y.detail.isAfterLines &&
										typeof y.detail.horizontalDistanceToText == "number" &&
										y.detail.horizontalDistanceToText < $
									)
								)
									break;
								l.push(new r.$2Bb(0, y.range, s.event.posx, s.event.posy));
								break;
							}
						}
						return l.sort(($, v) => v.priority - $.priority), l;
					}
					M(s) {
						const l = this.q.getDomNode();
						(!l || !(0, o.$TDb)(l, s.x, s.y)) && this.hide();
					}
					startShowingAtRange(s, l, y, $) {
						this.w(new r.$2Bb(0, s, void 0, void 0), l, y, $, null);
					}
					getWidgetContent() {
						const s = this.h.getDomNode();
						if (s.textContent) return s.textContent;
					}
					async updateHoverVerbosityLevel(s, l, y) {
						this.f?.updateHoverVerbosityLevel(s, l, y);
					}
					doesHoverAtIndexSupportVerbosityAction(s, l) {
						return this.f?.doesHoverAtIndexSupportVerbosityAction(s, l) ?? !1;
					}
					getAccessibleWidgetContent() {
						return this.f?.getAccessibleWidgetContent();
					}
					getAccessibleWidgetContentAtIndex(s) {
						return this.f?.getAccessibleWidgetContentAtIndex(s);
					}
					focusedHoverPartIndex() {
						return this.f?.focusedHoverPartIndex ?? -1;
					}
					containsNode(s) {
						return s ? this.h.getDomNode().contains(s) : !1;
					}
					focus() {
						this.h.focus();
					}
					focusHoverPartWithIndex(s) {
						this.f?.focusHoverPartWithIndex(s);
					}
					scrollUp() {
						this.h.scrollUp();
					}
					scrollDown() {
						this.h.scrollDown();
					}
					scrollLeft() {
						this.h.scrollLeft();
					}
					scrollRight() {
						this.h.scrollRight();
					}
					pageUp() {
						this.h.pageUp();
					}
					pageDown() {
						this.h.pageDown();
					}
					goToTop() {
						this.h.goToTop();
					}
					goToBottom() {
						this.h.goToBottom();
					}
					hide() {
						(this.g.anchor = null), this.m.cancel(), this.C(null);
					}
					getDomNode() {
						return this.h.getDomNode();
					}
					get isColorPickerVisible() {
						return this.f?.isColorPickerVisible() ?? !1;
					}
					get isVisibleFromKeyboard() {
						return this.h.isVisibleFromKeyboard;
					}
					get isVisible() {
						return this.h.isVisible;
					}
					get isFocused() {
						return this.h.isFocused;
					}
					get isResizing() {
						return this.h.isResizing;
					}
					get widget() {
						return this.h;
					}
				};
				(e.$vhc = f), (e.$vhc = f = Ne([j(1, u.$Li), j(2, a.$uZ)], f));
			},
		),
		define(
			de[448],
			he([1, 0, 936, 27, 3, 38, 5, 1215, 39, 390, 15, 937, 3606, 6, 905]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				var n;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$whc = void 0);
				const g = !1;
				let p = class extends w.$1c {
					static {
						n = this;
					}
					static {
						this.ID = "editor.contrib.contentHover";
					}
					constructor(f, b, s) {
						super(),
							(this.m = f),
							(this.n = b),
							(this.q = s),
							(this.a = this.D(new c.$re())),
							(this.onHoverContentsChanged = this.a.event),
							(this.shouldKeepOpenOnEditorMouseMoveOrLeave = !1),
							(this.b = new w.$Zc()),
							(this.j = { mouseDown: !1, activatedByDecoratorClick: !1 }),
							(this.g = this.D(new u.$Yh(() => this.I(this.f), 0))),
							this.r(),
							this.D(
								this.m.onDidChangeConfiguration((l) => {
									l.hasChanged(E.EditorOption.hover) && (this.s(), this.r());
								}),
							);
					}
					static get(f) {
						return f.getContribution(n.ID);
					}
					r() {
						const f = this.m.getOption(E.EditorOption.hover);
						(this.h = {
							enabled: f.enabled,
							sticky: f.sticky,
							hidingDelay: f.hidingDelay,
						}),
							f.enabled
								? (this.b.add(this.m.onMouseDown((b) => this.w(b))),
									this.b.add(this.m.onMouseUp(() => this.C())),
									this.b.add(this.m.onMouseMove((b) => this.H(b))),
									this.b.add(this.m.onKeyDown((b) => this.L(b))))
								: (this.b.add(this.m.onMouseMove((b) => this.H(b))),
									this.b.add(this.m.onKeyDown((b) => this.L(b)))),
							this.b.add(this.m.onMouseLeave((b) => this.F(b))),
							this.b.add(
								this.m.onDidChangeModel(() => {
									this.t(), this.M();
								}),
							),
							this.b.add(this.m.onDidChangeModelContent(() => this.t())),
							this.b.add(this.m.onDidScrollChange((b) => this.u(b)));
					}
					s() {
						this.b.clear();
					}
					t() {
						(this.f = void 0), this.g.cancel();
					}
					u(f) {
						(f.scrollTopChanged || f.scrollLeftChanged) && this.M();
					}
					w(f) {
						(this.j.mouseDown = !0), !this.y(f) && this.M();
					}
					y(f) {
						return this.z(f) || this.O();
					}
					z(f) {
						const b = this.c?.getDomNode();
						return b ? (0, a.$TDb)(b, f.event.posx, f.event.posy) : !1;
					}
					C() {
						this.j.mouseDown = !1;
					}
					F(f) {
						this.shouldKeepOpenOnEditorMouseMoveOrLeave ||
							(this.t(), this.y(f)) ||
							g ||
							this.M();
					}
					G(f) {
						const b = this.h.sticky,
							s = ($, v) => {
								const S = this.z($);
								return v && S;
							},
							l = ($) => {
								const v = this.z($),
									S = this.c?.isColorPickerVisible ?? !1;
								return v && S;
							},
							y = ($, v) =>
								(v &&
									this.c?.containsNode(
										$.event.browserEvent.view?.document.activeElement,
									) &&
									!$.event.browserEvent.view?.getSelection()?.isCollapsed) ??
								!1;
						return s(f, b) || l(f) || y(f, b);
					}
					H(f) {
						if (
							this.shouldKeepOpenOnEditorMouseMoveOrLeave ||
							((this.f = f), this.c?.isFocused || this.c?.isResizing)
						)
							return;
						const b = this.h.sticky;
						if (b && this.c?.isVisibleFromKeyboard) return;
						if (this.G(f)) {
							this.g.cancel();
							return;
						}
						const l = this.h.hidingDelay;
						if (this.c?.isVisible && b && l > 0) {
							this.g.isScheduled() || this.g.schedule(l);
							return;
						}
						this.I(f);
					}
					I(f) {
						if (!f) return;
						const s = f.target.element?.classList.contains(
								"colorpicker-color-decoration",
							),
							l = this.m.getOption(E.EditorOption.colorDecoratorsActivatedOn),
							y = this.h.enabled,
							$ = this.j.activatedByDecoratorClick;
						if (
							(s &&
								((l === "click" && !$) ||
									(l === "hover" && !y && !g) ||
									(l === "clickAndHover" && !y && !$))) ||
							(!s && !y && !$)
						) {
							this.M();
							return;
						}
						this.J(f) || g || this.M();
					}
					J(f) {
						return this.N().showsOrWillShow(f);
					}
					L(f) {
						if (!this.m.hasModel()) return;
						const b = this.q.softDispatch(f, this.m.getDomNode()),
							s =
								b.kind === r.ResultKind.MoreChordsNeeded ||
								(b.kind === r.ResultKind.KbFound &&
									(b.commandId === t.$bCb ||
										b.commandId === t.$lCb ||
										b.commandId === t.$oCb) &&
									this.c?.isVisible);
						f.keyCode === i.KeyCode.Ctrl ||
							f.keyCode === i.KeyCode.Alt ||
							f.keyCode === i.KeyCode.Meta ||
							f.keyCode === i.KeyCode.Shift ||
							s ||
							this.M();
					}
					M() {
						g ||
							(this.j.mouseDown && this.c?.isColorPickerVisible) ||
							d.$RDb.dropDownVisible ||
							((this.j.activatedByDecoratorClick = !1), this.c?.hide());
					}
					N() {
						return (
							this.c ||
								((this.c = this.n.createInstance(h.$vhc, this.m)),
								this.b.add(this.c.onContentsChanged(() => this.a.fire()))),
							this.c
						);
					}
					hideContentHover() {
						this.M();
					}
					showContentHover(f, b, s, l, y = !1) {
						(this.j.activatedByDecoratorClick = y),
							this.N().startShowingAtRange(f, b, s, l);
					}
					O() {
						return this.c?.widget.isResizing || !1;
					}
					focusedHoverPartIndex() {
						return this.N().focusedHoverPartIndex();
					}
					doesHoverAtIndexSupportVerbosityAction(f, b) {
						return this.N().doesHoverAtIndexSupportVerbosityAction(f, b);
					}
					updateHoverVerbosityLevel(f, b, s) {
						this.N().updateHoverVerbosityLevel(f, b, s);
					}
					focus() {
						this.c?.focus();
					}
					focusHoverPartWithIndex(f) {
						this.c?.focusHoverPartWithIndex(f);
					}
					scrollUp() {
						this.c?.scrollUp();
					}
					scrollDown() {
						this.c?.scrollDown();
					}
					scrollLeft() {
						this.c?.scrollLeft();
					}
					scrollRight() {
						this.c?.scrollRight();
					}
					pageUp() {
						this.c?.pageUp();
					}
					pageDown() {
						this.c?.pageDown();
					}
					goToTop() {
						this.c?.goToTop();
					}
					goToBottom() {
						this.c?.goToBottom();
					}
					getWidgetContent() {
						return this.c?.getWidgetContent();
					}
					getAccessibleWidgetContent() {
						return this.c?.getAccessibleWidgetContent();
					}
					getAccessibleWidgetContentAtIndex(f) {
						return this.c?.getAccessibleWidgetContentAtIndex(f);
					}
					get isColorPickerVisible() {
						return this.c?.isColorPickerVisible;
					}
					get isHoverVisible() {
						return this.c?.isVisible;
					}
					dispose() {
						super.dispose(), this.s(), this.b.dispose(), this.c?.dispose();
					}
				};
				(e.$whc = p), (e.$whc = p = n = Ne([j(1, C.$Li), j(2, m.$uZ)], p));
			},
		),
		define(
			de[3607],
			he([1, 0, 3, 56, 46, 38, 17, 785, 1218, 448, 601, 368]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$xhc = void 0);
				class h extends t.$1c {
					static {
						this.ID = "editor.contrib.colorContribution";
					}
					static {
						this.RECOMPUTE_TIME = 1e3;
					}
					constructor(n) {
						super(), (this.a = n), this.D(n.onMouseDown((g) => this.b(g)));
					}
					dispose() {
						super.dispose();
					}
					b(n) {
						const g = this.a.getOption(
							E.EditorOption.colorDecoratorsActivatedOn,
						);
						if (g !== "click" && g !== "clickAndHover") return;
						const p = n.target;
						if (
							p.type !== i.MouseTargetType.CONTENT_TEXT ||
							!p.detail.injectedText ||
							p.detail.injectedText.options.attachedData !== d.$XBb ||
							!p.range
						)
							return;
						const o = this.a.getContribution(r.$whc.ID);
						if (o && !o.isColorPickerVisible) {
							const f = new C.$iL(
								p.range.startLineNumber,
								p.range.startColumn + 1,
								p.range.endLineNumber,
								p.range.endColumn + 1,
							);
							o.showContentHover(
								f,
								u.HoverStartMode.Immediate,
								u.HoverStartSource.Mouse,
								!1,
								!0,
							);
						}
					}
				}
				(e.$xhc = h),
					(0, w.$qtb)(
						h.ID,
						h,
						w.EditorContributionInstantiation.BeforeFirstInteraction,
					),
					a.$5Bb.register(m.$$Bb);
			},
		),
		define(
			de[3608],
			he([
				1, 0, 4, 71, 448, 178, 49, 72, 5, 74, 936, 65, 50, 26, 14, 6, 3, 39,
				820,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wic = e.$vic = e.$uic = e.$tic = e.$sic = void 0);
				var b;
				(function (I) {
					(I.increaseVerbosity = (0, t.localize)(
						1168,
						null,
						`<keybinding:${u.$lCb}>`,
					)),
						(I.decreaseVerbosity = (0, t.localize)(
							1169,
							null,
							`<keybinding:${u.$oCb}>`,
						));
				})(b || (b = {}));
				class s {
					constructor() {
						(this.type = E.AccessibleViewType.View),
							(this.priority = 95),
							(this.name = "hover"),
							(this.when = i.EditorContextKeys.hoverFocused);
					}
					getProvider(T) {
						const P = T.get(a.$dtb),
							k = P.getActiveCodeEditor() || P.getFocusedCodeEditor();
						if (!k) throw new Error("No active or focused code editor");
						const L = w.$whc.get(k);
						if (!L) return;
						const D = T.get(o.$uZ);
						return T.get(m.$Li).createInstance(v, D, k, L);
					}
				}
				e.$sic = s;
				class l {
					constructor() {
						(this.priority = 100),
							(this.name = "hover"),
							(this.type = E.AccessibleViewType.Help),
							(this.when = i.EditorContextKeys.hoverVisible);
					}
					getProvider(T) {
						const P = T.get(a.$dtb),
							k = P.getActiveCodeEditor() || P.getFocusedCodeEditor();
						if (!k) throw new Error("No active or focused code editor");
						const L = w.$whc.get(k);
						if (L) return T.get(m.$Li).createInstance($, L);
					}
				}
				e.$tic = l;
				class y extends p.$1c {
					constructor(T) {
						super(),
							(this.c = T),
							(this.id = E.AccessibleViewProviderId.Hover),
							(this.verbositySettingKey = "accessibility.verbosity.hover"),
							(this.a = this.D(new g.$re())),
							(this.onDidChangeContent = this.a.event),
							(this.b = -1);
					}
					onOpen() {
						this.c &&
							((this.c.shouldKeepOpenOnEditorMouseMoveOrLeave = !0),
							(this.b = this.c.focusedHoverPartIndex()),
							this.D(
								this.c.onHoverContentsChanged(() => {
									this.a.fire();
								}),
							));
					}
					onClose() {
						this.c &&
							(this.b === -1
								? this.c.focus()
								: this.c.focusHoverPartWithIndex(this.b),
							(this.b = -1),
							(this.c.shouldKeepOpenOnEditorMouseMoveOrLeave = !1));
					}
					provideContentAtIndex(T, P) {
						if (T !== -1) {
							const k = this.c.getAccessibleWidgetContentAtIndex(T);
							if (k === void 0) return "";
							const L = [];
							return (
								P && L.push(...this.f(T)),
								L.push(k),
								L.join(`
`)
							);
						} else {
							const k = this.c.getAccessibleWidgetContent();
							if (k === void 0) return "";
							const L = [];
							return (
								L.push(k),
								L.join(`
`)
							);
						}
					}
					f(T) {
						const P = [],
							k = this.g(r.HoverVerbosityAction.Increase, T);
						k !== void 0 && P.push(k);
						const L = this.g(r.HoverVerbosityAction.Decrease, T);
						return L !== void 0 && P.push(L), P;
					}
					g(T, P) {
						if (this.c.doesHoverAtIndexSupportVerbosityAction(P, T))
							switch (T) {
								case r.HoverVerbosityAction.Increase:
									return b.increaseVerbosity;
								case r.HoverVerbosityAction.Decrease:
									return b.decreaseVerbosity;
							}
					}
				}
				class $ extends y {
					constructor(T) {
						super(T), (this.options = { type: E.AccessibleViewType.Help });
					}
					provideContent() {
						return this.provideContentAtIndex(this.b, !0);
					}
				}
				e.$uic = $;
				class v extends y {
					constructor(T, P, k) {
						super(k),
							(this.h = T),
							(this.j = P),
							(this.options = { type: E.AccessibleViewType.View }),
							this.n(this.j, k);
					}
					provideContent() {
						return this.provideContentAtIndex(this.b, !1);
					}
					get actions() {
						const T = [];
						return (
							T.push(this.m(this.j, r.HoverVerbosityAction.Increase)),
							T.push(this.m(this.j, r.HoverVerbosityAction.Decrease)),
							T
						);
					}
					m(T, P) {
						let k, L, D;
						switch (P) {
							case r.HoverVerbosityAction.Increase:
								(k = u.$lCb), (L = u.$mCb), (D = n.$ak.add);
								break;
							case r.HoverVerbosityAction.Decrease:
								(k = u.$oCb), (L = u.$pCb), (D = n.$ak.remove);
								break;
						}
						const M = (0, f.$jhc)(this.h, P),
							N = this.c.doesHoverAtIndexSupportVerbosityAction(this.b, P);
						return new h.$rj(L, M, c.ThemeIcon.asClassName(D), N, () => {
							T.getAction(k)?.run({ index: this.b, focus: !1 });
						});
					}
					n(T, P) {
						const k = this.D(new $(P));
						(this.options.language = T.getModel()?.getLanguageId()),
							(this.options.customHelp = () =>
								k.provideContentAtIndex(this.b, !0));
					}
				}
				e.$vic = v;
				class S {
					constructor() {
						(this.type = E.AccessibleViewType.View),
							(this.priority = 90),
							(this.name = "extension-hover");
					}
					getProvider(T) {
						const k = T.get(C.$Wxb).getContextViewElement(),
							L = k?.textContent ?? void 0,
							D = T.get(d.$Uyb);
						if (!(k.classList.contains("accessible-view-container") || !L))
							return new E.$ILb(
								E.AccessibleViewProviderId.Hover,
								{ language: "typescript", type: E.AccessibleViewType.View },
								() => L,
								() => {
									D.showAndFocusLastHover();
								},
								"accessibility.verbosity.hover",
							);
					}
				}
				e.$wic = S;
			},
		),
		define(
			de[3609],
			he([1, 0, 27, 936, 46, 38, 17, 71, 1037, 601, 91, 43, 448, 74, 4, 905]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$iic =
						e.$hic =
						e.$gic =
						e.$fic =
						e.$eic =
						e.$dic =
						e.$cic =
						e.$bic =
						e.$aic =
						e.$_hc =
						e.$$hc =
						e.$0hc =
							void 0),
					(n = mt(n));
				var g;
				(function (P) {
					(P.NoAutoFocus = "noAutoFocus"),
						(P.FocusIfVisible = "focusIfVisible"),
						(P.AutoFocusImmediately = "autoFocusImmediately");
				})(g || (g = {}));
				class p extends w.$itb {
					constructor() {
						super({
							id: i.$bCb,
							label: n.localize(1172, null),
							metadata: {
								description: n.localize2(
									1185,
									"Show or focus the editor hover which shows documentation, references, and other content for a symbol at the current cursor position.",
								),
								args: [
									{
										name: "args",
										schema: {
											type: "object",
											properties: {
												focus: {
													description:
														"Controls if and when the hover should take focus upon being triggered by this action.",
													enum: [
														g.NoAutoFocus,
														g.FocusIfVisible,
														g.AutoFocusImmediately,
													],
													enumDescriptions: [
														n.localize(1173, null),
														n.localize(1174, null),
														n.localize(1175, null),
													],
													default: g.FocusIfVisible,
												},
											},
										},
									},
								],
							},
							alias: "Show or Focus Hover",
							precondition: void 0,
							kbOpts: {
								kbExpr: d.EditorContextKeys.editorTextFocus,
								primary: (0, t.$os)(t.$ps, t.KeyMod.CtrlCmd | t.KeyCode.KeyI),
								mac: {
									primary: (0, t.$os)(t.$qs, t.KeyMod.CtrlCmd | t.KeyCode.KeyI),
								},
								weight: a.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(k, L, D) {
						if (!L.hasModel()) return;
						const M = h.$whc.get(L);
						if (!M) return;
						const N = D?.focus;
						let A = g.FocusIfVisible;
						Object.values(g).includes(N)
							? (A = N)
							: typeof N == "boolean" && N && (A = g.AutoFocusImmediately);
						const R = (B) => {
								const U = L.getPosition(),
									z = new C.$iL(U.lineNumber, U.column, U.lineNumber, U.column);
								M.showContentHover(
									z,
									r.HoverStartMode.Immediate,
									r.HoverStartSource.Keyboard,
									B,
								);
							},
							O =
								L.getOption(E.EditorOption.accessibilitySupport) ===
								u.AccessibilitySupport.Enabled;
						M.isHoverVisible
							? A !== g.NoAutoFocus
								? M.focus()
								: R(O)
							: R(O || A === g.AutoFocusImmediately);
					}
				}
				e.$0hc = p;
				class o extends w.$itb {
					constructor() {
						super({
							id: i.$cCb,
							label: n.localize(1176, null),
							alias: "Show Definition Preview Hover",
							precondition: void 0,
							metadata: {
								description: n.localize2(
									1186,
									"Show the definition preview hover in the editor.",
								),
							},
						});
					}
					run(k, L) {
						const D = h.$whc.get(L);
						if (!D) return;
						const M = L.getPosition();
						if (!M) return;
						const N = new C.$iL(M.lineNumber, M.column, M.lineNumber, M.column),
							A = m.$YOb.get(L);
						if (!A) return;
						A.startFindDefinitionFromCursor(M).then(() => {
							D.showContentHover(
								N,
								r.HoverStartMode.Immediate,
								r.HoverStartSource.Keyboard,
								!0,
							);
						});
					}
				}
				e.$$hc = o;
				class f extends w.$itb {
					constructor() {
						super({
							id: i.$dCb,
							label: n.localize(1177, null),
							alias: "Scroll Up Hover",
							precondition: d.EditorContextKeys.hoverFocused,
							kbOpts: {
								kbExpr: d.EditorContextKeys.hoverFocused,
								primary: t.KeyCode.UpArrow,
								weight: a.KeybindingWeight.EditorContrib,
							},
							metadata: {
								description: n.localize2(1187, "Scroll up the editor hover."),
							},
						});
					}
					run(k, L) {
						const D = h.$whc.get(L);
						D && D.scrollUp();
					}
				}
				e.$_hc = f;
				class b extends w.$itb {
					constructor() {
						super({
							id: i.$eCb,
							label: n.localize(1178, null),
							alias: "Scroll Down Hover",
							precondition: d.EditorContextKeys.hoverFocused,
							kbOpts: {
								kbExpr: d.EditorContextKeys.hoverFocused,
								primary: t.KeyCode.DownArrow,
								weight: a.KeybindingWeight.EditorContrib,
							},
							metadata: {
								description: n.localize2(1188, "Scroll down the editor hover."),
							},
						});
					}
					run(k, L) {
						const D = h.$whc.get(L);
						D && D.scrollDown();
					}
				}
				e.$aic = b;
				class s extends w.$itb {
					constructor() {
						super({
							id: i.$fCb,
							label: n.localize(1179, null),
							alias: "Scroll Left Hover",
							precondition: d.EditorContextKeys.hoverFocused,
							kbOpts: {
								kbExpr: d.EditorContextKeys.hoverFocused,
								primary: t.KeyCode.LeftArrow,
								weight: a.KeybindingWeight.EditorContrib,
							},
							metadata: {
								description: n.localize2(1189, "Scroll left the editor hover."),
							},
						});
					}
					run(k, L) {
						const D = h.$whc.get(L);
						D && D.scrollLeft();
					}
				}
				e.$bic = s;
				class l extends w.$itb {
					constructor() {
						super({
							id: i.$gCb,
							label: n.localize(1180, null),
							alias: "Scroll Right Hover",
							precondition: d.EditorContextKeys.hoverFocused,
							kbOpts: {
								kbExpr: d.EditorContextKeys.hoverFocused,
								primary: t.KeyCode.RightArrow,
								weight: a.KeybindingWeight.EditorContrib,
							},
							metadata: {
								description: n.localize2(
									1190,
									"Scroll right the editor hover.",
								),
							},
						});
					}
					run(k, L) {
						const D = h.$whc.get(L);
						D && D.scrollRight();
					}
				}
				e.$cic = l;
				class y extends w.$itb {
					constructor() {
						super({
							id: i.$hCb,
							label: n.localize(1181, null),
							alias: "Page Up Hover",
							precondition: d.EditorContextKeys.hoverFocused,
							kbOpts: {
								kbExpr: d.EditorContextKeys.hoverFocused,
								primary: t.KeyCode.PageUp,
								secondary: [t.KeyMod.Alt | t.KeyCode.UpArrow],
								weight: a.KeybindingWeight.EditorContrib,
							},
							metadata: {
								description: n.localize2(1191, "Page up the editor hover."),
							},
						});
					}
					run(k, L) {
						const D = h.$whc.get(L);
						D && D.pageUp();
					}
				}
				e.$dic = y;
				class $ extends w.$itb {
					constructor() {
						super({
							id: i.$iCb,
							label: n.localize(1182, null),
							alias: "Page Down Hover",
							precondition: d.EditorContextKeys.hoverFocused,
							kbOpts: {
								kbExpr: d.EditorContextKeys.hoverFocused,
								primary: t.KeyCode.PageDown,
								secondary: [t.KeyMod.Alt | t.KeyCode.DownArrow],
								weight: a.KeybindingWeight.EditorContrib,
							},
							metadata: {
								description: n.localize2(1192, "Page down the editor hover."),
							},
						});
					}
					run(k, L) {
						const D = h.$whc.get(L);
						D && D.pageDown();
					}
				}
				e.$eic = $;
				class v extends w.$itb {
					constructor() {
						super({
							id: i.$jCb,
							label: n.localize(1183, null),
							alias: "Go To Bottom Hover",
							precondition: d.EditorContextKeys.hoverFocused,
							kbOpts: {
								kbExpr: d.EditorContextKeys.hoverFocused,
								primary: t.KeyCode.Home,
								secondary: [t.KeyMod.CtrlCmd | t.KeyCode.UpArrow],
								weight: a.KeybindingWeight.EditorContrib,
							},
							metadata: {
								description: n.localize2(
									1193,
									"Go to the top of the editor hover.",
								),
							},
						});
					}
					run(k, L) {
						const D = h.$whc.get(L);
						D && D.goToTop();
					}
				}
				e.$fic = v;
				class S extends w.$itb {
					constructor() {
						super({
							id: i.$kCb,
							label: n.localize(1184, null),
							alias: "Go To Bottom Hover",
							precondition: d.EditorContextKeys.hoverFocused,
							kbOpts: {
								kbExpr: d.EditorContextKeys.hoverFocused,
								primary: t.KeyCode.End,
								secondary: [t.KeyMod.CtrlCmd | t.KeyCode.DownArrow],
								weight: a.KeybindingWeight.EditorContrib,
							},
							metadata: {
								description: n.localize2(
									1194,
									"Go to the bottom of the editor hover.",
								),
							},
						});
					}
					run(k, L) {
						const D = h.$whc.get(L);
						D && D.goToBottom();
					}
				}
				e.$gic = S;
				class I extends w.$itb {
					constructor() {
						super({
							id: i.$lCb,
							label: i.$nCb,
							alias: "Increase Hover Verbosity Level",
							precondition: d.EditorContextKeys.hoverVisible,
						});
					}
					run(k, L, D) {
						const M = h.$whc.get(L);
						if (!M) return;
						const N = D?.index !== void 0 ? D.index : M.focusedHoverPartIndex();
						M.updateHoverVerbosityLevel(
							c.HoverVerbosityAction.Increase,
							N,
							D?.focus,
						);
					}
				}
				e.$hic = I;
				class T extends w.$itb {
					constructor() {
						super({
							id: i.$oCb,
							label: i.$qCb,
							alias: "Decrease Hover Verbosity Level",
							precondition: d.EditorContextKeys.hoverVisible,
						});
					}
					run(k, L, D) {
						const M = h.$whc.get(L);
						if (!M) return;
						const N = D?.index !== void 0 ? D.index : M.focusedHoverPartIndex();
						h.$whc
							.get(L)
							?.updateHoverVerbosityLevel(
								c.HoverVerbosityAction.Decrease,
								N,
								D?.focus,
							);
					}
				}
				e.$iic = T;
			},
		),
		define(
			de[3610],
			he([1, 0, 46, 368, 1316, 1868]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, t.$qtb)(
						w.$rhc.ID,
						w.$rhc,
						t.EditorContributionInstantiation.AfterFirstRender,
					),
					i.$5Bb.register(E.$shc);
			},
		),
		define(
			de[1317],
			he([
				1, 0, 3, 56, 98, 69, 38, 2925, 2924, 5, 49, 11, 8, 71, 766, 17, 414,
				1867, 48, 33, 152, 391, 7, 1557, 168, 350, 1551,
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
			) {
				"use strict";
				var T;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pkc = void 0),
					(y = mt(y));
				let P = class extends t.$1c {
					static {
						T = this;
					}
					static {
						this.ID = "store.contrib.stickyScrollController";
					}
					constructor(L, D, M, N, A, R, O) {
						super(),
							(this.H = L),
							(this.I = D),
							(this.J = M),
							(this.L = N),
							(this.M = O),
							(this.c = new t.$Zc()),
							(this.h = Number.MAX_SAFE_INTEGER),
							(this.m = -1),
							(this.s = -1),
							(this.t = !1),
							(this.u = !1),
							(this.w = !1),
							(this.y = !1),
							(this.z = []),
							(this.a = new d.$ikc(this.H)),
							(this.b = new m.$okc(this.H, M, A)),
							this.D(this.a),
							this.D(this.b),
							(this.f = d.$hkc.Empty),
							this.ab(),
							this.X();
						const B = this.a.getDomNode();
						this.D(
							this.H.onDidChangeConfiguration((z) => {
								this.Y(z);
							}),
						),
							this.D(
								y.$0fb(B, y.$$gb.CONTEXT_MENU, async (z) => {
									this.U(y.getWindow(B), z);
								}),
							),
							(this.n = c.EditorContextKeys.stickyScrollFocused.bindTo(this.M)),
							(this.q = c.EditorContextKeys.stickyScrollVisible.bindTo(this.M));
						const U = this.D(y.$dhb(B));
						this.D(
							U.onDidBlur((z) => {
								this.w === !1 && B.clientHeight === 0
									? ((this.s = -1), this.focus())
									: this.N();
							}),
						),
							this.D(
								U.onDidFocus((z) => {
									this.focus();
								}),
							),
							this.S(),
							this.D(
								y.$0fb(B, y.$$gb.MOUSE_DOWN, (z) => {
									this.y = !0;
								}),
							);
					}
					get stickyScrollCandidateProvider() {
						return this.b;
					}
					get stickyScrollWidgetState() {
						return this.f;
					}
					static get(L) {
						return L.getContribution(T.ID);
					}
					N() {
						this.n.set(!1),
							this.r?.dispose(),
							(this.u = !1),
							(this.w = !1),
							(this.y = !1);
					}
					focus() {
						if (this.y) {
							(this.y = !1), this.H.focus();
							return;
						}
						this.n.get() !== !0 &&
							((this.u = !0),
							(this.r = new t.$Zc()),
							this.n.set(!0),
							(this.s = this.a.lineNumbers.length - 1),
							this.a.focusLineWithIndex(this.s));
					}
					focusNext() {
						this.s < this.a.lineNumberCount - 1 && this.O(!0);
					}
					focusPrevious() {
						this.s > 0 && this.O(!1);
					}
					selectEditor() {
						this.H.focus();
					}
					O(L) {
						(this.s = L ? this.s + 1 : this.s - 1),
							this.a.focusLineWithIndex(this.s);
					}
					goToFocused() {
						const L = this.a.lineNumbers;
						this.N(), this.P({ lineNumber: L[this.s], column: 1 });
					}
					P(L) {
						this.R(L, () => this.H.revealPosition(L));
					}
					Q(L) {
						this.R(L, () =>
							this.H.revealLineInCenterIfOutsideViewport(
								L.lineNumber,
								w.ScrollType.Smooth,
							),
						);
					}
					R(L, D) {
						this.u && this.N(),
							(this.w = !0),
							D(),
							this.H.setSelection(g.$iL.fromPositions(L)),
							this.H.focus();
					}
					S() {
						const L = this.D(new t.$Zc()),
							D = this.D(
								new n.$6Mb(this.H, {
									extractLineNumberFromMouseEvent: (A) => {
										const R = this.a.getEditorPositionFromNode(
											A.target.element,
										);
										return R ? R.lineNumber : 0;
									},
								}),
							),
							M = (A) => {
								if (
									!this.H.hasModel() ||
									A.target.type !== i.MouseTargetType.OVERLAY_WIDGET ||
									A.target.detail !== this.a.getId()
								)
									return null;
								const R = A.target.element;
								if (!R || R.innerText !== R.innerHTML) return null;
								const O = this.a.getEditorPositionFromNode(R);
								return O
									? {
											range: new g.$iL(
												O.lineNumber,
												O.column,
												O.lineNumber,
												O.column + R.innerText.length,
											),
											textElement: R,
										}
									: null;
							},
							N = this.a.getDomNode();
						this.D(
							y.$$fb(N, y.$$gb.CLICK, (A) => {
								if (A.ctrlKey || A.altKey || A.metaKey || !A.leftButton) return;
								if (A.shiftKey) {
									const U = this.a.getLineIndexFromChildDomNode(A.target);
									if (U === null) return;
									const z = new f.$hL(this.z[U], 1);
									this.Q(z);
									return;
								}
								if (this.a.isInFoldingIconDomNode(A.target)) {
									const U = this.a.getLineNumberFromChildDomNode(A.target);
									this.W(U);
									return;
								}
								if (!this.a.isInStickyLine(A.target)) return;
								let B = this.a.getEditorPositionFromNode(A.target);
								if (!B) {
									const U = this.a.getLineNumberFromChildDomNode(A.target);
									if (U === null) return;
									B = new f.$hL(U, 1);
								}
								this.P(B);
							}),
						),
							this.D(
								y.$$fb(N, y.$$gb.MOUSE_MOVE, (A) => {
									if (A.shiftKey) {
										const R = this.a.getLineIndexFromChildDomNode(A.target);
										if (R === null || (this.C !== null && this.C === R)) return;
										(this.C = R), this.bb();
										return;
									}
									this.C !== void 0 && ((this.C = void 0), this.bb());
								}),
							),
							this.D(
								y.$0fb(N, y.$$gb.MOUSE_LEAVE, (A) => {
									this.C !== void 0 && ((this.C = void 0), this.bb());
								}),
							),
							this.D(
								D.onMouseMoveOrRelevantKeyDown(([A, R]) => {
									const O = M(A);
									if (!O || !A.hasTriggerModifier || !this.H.hasModel()) {
										L.clear();
										return;
									}
									const { range: B, textElement: U } = O;
									if (!B.equalsRange(this.j)) (this.j = B), L.clear();
									else if (U.style.textDecoration === "underline") return;
									const z = new b.$Ce();
									L.add((0, t.$Yc)(() => z.dispose(!0)));
									let F;
									(0, p.$POb)(
										this.J.definitionProvider,
										this.H.getModel(),
										new f.$hL(B.startLineNumber, B.startColumn + 1),
										!1,
										z.token,
									).then((x) => {
										if (!z.token.isCancellationRequested)
											if (x.length !== 0) {
												this.m = x.length;
												const H = U;
												F !== H
													? (L.clear(),
														(F = H),
														(F.style.textDecoration = "underline"),
														L.add(
															(0, t.$Yc)(() => {
																F.style.textDecoration = "none";
															}),
														))
													: F ||
														((F = H),
														(F.style.textDecoration = "underline"),
														L.add(
															(0, t.$Yc)(() => {
																F.style.textDecoration = "none";
															}),
														));
											} else L.clear();
									});
								}),
							),
							this.D(
								D.onCancel(() => {
									L.clear();
								}),
							),
							this.D(
								D.onExecute(async (A) => {
									if (
										A.target.type !== i.MouseTargetType.OVERLAY_WIDGET ||
										A.target.detail !== this.a.getId()
									)
										return;
									const R = this.a.getEditorPositionFromNode(A.target.element);
									R &&
										(!this.H.hasModel() ||
											!this.j ||
											(this.m > 1 &&
												(this.u && this.N(),
												this.P({ lineNumber: R.lineNumber, column: 1 })),
											this.L.invokeFunction(o.$phc, A, this.H, {
												uri: this.H.getModel().uri,
												range: this.j,
											})));
								}),
							),
							this.D(
								y.$$fb(N, y.$$gb.MOUSE_DOWN, (A) => {
									if (this.G) {
										const R = this.a.getLineNumberFromChildDomNode(A.target);
										R !== null &&
											(this.G(A, R), A.preventDefault(), A.stopPropagation());
										return;
									}
								}),
							);
					}
					U(L, D) {
						const M = new v.$2fb(L, D);
						this.I.showContextMenu({
							menuId: a.$XX.StickyScrollContext,
							getAnchor: () => M,
						});
					}
					W(L) {
						if (!this.g || L === null) return;
						const D = this.a.getRenderedStickyLine(L),
							M = D?.foldingIcon;
						if (!M) return;
						(0, I.$DNb)(this.g, Number.MAX_VALUE, [L]),
							(M.isCollapsed = !M.isCollapsed);
						const N =
							(M.isCollapsed
								? this.H.getTopForLineNumber(M.foldingEndLine)
								: this.H.getTopForLineNumber(M.foldingStartLine)) -
							this.H.getOption(C.EditorOption.lineHeight) * D.index +
							1;
						this.H.setScrollTop(N), this.bb(L);
					}
					X() {
						const L = this.H.getOption(C.EditorOption.stickyScroll);
						if (L.enabled === !1) {
							this.H.removeOverlayWidget(this.a), this.c.clear(), (this.t = !1);
							return;
						} else
							L.enabled &&
								!this.t &&
								(this.H.addOverlayWidget(this.a),
								this.c.add(
									this.H.onDidScrollChange((M) => {
										M.scrollTopChanged && ((this.C = void 0), this.bb());
									}),
								),
								this.c.add(this.H.onDidLayoutChange(() => this.ab())),
								this.c.add(this.H.onDidChangeModelTokens((M) => this.$(M))),
								this.c.add(
									this.b.onDidChangeStickyScroll(() => {
										(this.C = void 0), this.bb();
									}),
								),
								(this.t = !0));
						this.H.getOption(C.EditorOption.lineNumbers).renderType ===
							C.RenderLineNumbersType.Relative &&
							this.c.add(
								this.H.onDidChangeCursorPosition(() => {
									(this.C = void 0), this.bb(0);
								}),
							);
					}
					Y(L) {
						(L.hasChanged(C.EditorOption.stickyScroll) ||
							L.hasChanged(C.EditorOption.minimap) ||
							L.hasChanged(C.EditorOption.lineHeight) ||
							L.hasChanged(C.EditorOption.showFoldingControls) ||
							L.hasChanged(C.EditorOption.lineNumbers)) &&
							this.X(),
							L.hasChanged(C.EditorOption.lineNumbers) && this.bb(0);
					}
					Z(L) {
						const D = this.a.getCurrentLines();
						for (const M of D)
							for (const N of L.ranges)
								if (M >= N.fromLineNumber && M <= N.toLineNumber) return !0;
						return !1;
					}
					$(L) {
						this.Z(L) && this.bb(0);
					}
					ab() {
						const D =
							this.H.getLayoutInfo().height /
							this.H.getOption(C.EditorOption.lineHeight);
						this.h = Math.round(D * 0.25);
					}
					async bb(L) {
						const D = this.H.getModel();
						if (!D || D.isTooLargeForTokenization()) {
							this.eb();
							return;
						}
						const M = this.cb(L),
							N = this.b.getVersionId();
						if (N === void 0 || N === D.getVersionId())
							if (!this.u) await this.db(M);
							else if (this.s === -1)
								await this.db(M),
									(this.s = this.a.lineNumberCount - 1),
									this.s !== -1 && this.a.focusLineWithIndex(this.s);
							else {
								const R = this.a.lineNumbers[this.s];
								await this.db(M),
									this.a.lineNumberCount === 0
										? (this.s = -1)
										: (this.a.lineNumbers.includes(R) ||
												(this.s = this.a.lineNumberCount - 1),
											this.a.focusLineWithIndex(this.s));
							}
					}
					cb(L) {
						if (L !== void 0) {
							const D = this.F !== void 0 ? this.F : 1 / 0;
							this.F = Math.min(L, D);
						}
						return this.F;
					}
					async db(L) {
						(this.F = void 0),
							(this.g =
								(await S.$ZNb.get(this.H)?.getFoldingModel()) ?? void 0),
							(this.f = this.findScrollWidgetState());
						const D = this.f.startLineNumbers.length > 0;
						this.q.set(D), this.a.setState(this.f, this.g, L);
					}
					async eb() {
						(this.F = void 0),
							(this.g = void 0),
							(this.f = d.$hkc.Empty),
							this.q.set(!1),
							this.a.setState(void 0, void 0);
					}
					findScrollWidgetState() {
						const L = this.H.getOption(C.EditorOption.lineHeight),
							D = Math.min(
								this.h,
								this.H.getOption(C.EditorOption.stickyScroll).maxLineCount,
							),
							M = this.H.getScrollTop();
						let N = 0;
						const A = [],
							R = [],
							O = this.H.getVisibleRanges();
						if (O.length !== 0) {
							const B = new $.$jkc(
									O[0].startLineNumber,
									O[O.length - 1].endLineNumber,
								),
								U = this.b.getCandidateStickyLinesIntersecting(B);
							for (const z of U) {
								const F = z.startLineNumber,
									x = z.endLineNumber,
									H = z.nestingDepth;
								if (x - F > 0) {
									const q = (H - 1) * L,
										V = H * L,
										G = this.H.getBottomForLineNumber(F) - M,
										K = this.H.getTopForLineNumber(x) - M,
										J = this.H.getBottomForLineNumber(x) - M;
									if (q > K && q <= J) {
										A.push(F), R.push(x + 1), (N = J - V);
										break;
									} else V > G && V <= J && (A.push(F), R.push(x + 1));
									if (A.length === D) break;
								}
							}
						}
						return (this.z = R), new d.$hkc(A, R, N, this.C);
					}
					hijackOnClickItem(L) {
						return (
							(this.G = L),
							{
								dispose: () => {
									this.G = void 0;
								},
							}
						);
					}
					dispose() {
						super.dispose(), this.c.dispose();
					}
				};
				(e.$pkc = P),
					(e.$pkc =
						P =
						T =
							Ne(
								[
									j(1, u.$Xxb),
									j(2, E.$k3),
									j(3, r.$Li),
									j(4, s.$aN),
									j(5, l.$PBb),
									j(6, h.$6j),
								],
								P,
							));
			},
		),
		define(
			de[3611],
			he([1, 0, 27, 46, 4, 99, 11, 10, 43, 8, 71, 1317]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$vkc = e.$ukc = e.$tkc = e.$skc = e.$rkc = e.$qkc = void 0);
				class h extends C.$3X {
					constructor() {
						super({
							id: "editor.action.toggleStickyScroll",
							title: {
								...(0, w.localize2)(1470, "Toggle Editor Sticky Scroll"),
								mnemonicTitle: (0, w.localize)(1466, null),
							},
							metadata: {
								description: (0, w.localize2)(
									1471,
									"Toggle/enable the editor sticky scroll which shows the nested scopes at the top of the viewport",
								),
							},
							category: E.$ck.View,
							toggled: {
								condition: r.$Kj.equals(
									"config.editor.stickyScroll.enabled",
									!0,
								),
								title: (0, w.localize)(1467, null),
								mnemonicTitle: (0, w.localize)(1468, null),
							},
							menu: [
								{ id: C.$XX.CommandPalette },
								{
									id: C.$XX.MenubarAppearanceMenu,
									group: "4_editor",
									order: 3,
								},
								{ id: C.$XX.StickyScrollContext },
							],
						});
					}
					async run(s) {
						const l = s.get(d.$gj),
							y = !l.getValue("editor.stickyScroll.enabled");
						return l.updateValue("editor.stickyScroll.enabled", y);
					}
				}
				e.$qkc = h;
				const c = m.KeybindingWeight.EditorContrib;
				class n extends i.$ktb {
					constructor() {
						super({
							id: "editor.action.focusStickyScroll",
							title: {
								...(0, w.localize2)(1472, "Focus on the editor sticky scroll"),
								mnemonicTitle: (0, w.localize)(1469, null),
							},
							precondition: r.$Kj.and(
								r.$Kj.has("config.editor.stickyScroll.enabled"),
								u.EditorContextKeys.stickyScrollVisible,
							),
							menu: [{ id: C.$XX.CommandPalette }],
						});
					}
					runEditorCommand(s, l) {
						a.$pkc.get(l)?.focus();
					}
				}
				e.$rkc = n;
				class g extends i.$ktb {
					constructor() {
						super({
							id: "editor.action.selectNextStickyScrollLine",
							title: (0, w.localize2)(
								1473,
								"Select the next editor sticky scroll line",
							),
							precondition: u.EditorContextKeys.stickyScrollFocused.isEqualTo(
								!0,
							),
							keybinding: { weight: c, primary: t.KeyCode.DownArrow },
						});
					}
					runEditorCommand(s, l) {
						a.$pkc.get(l)?.focusNext();
					}
				}
				e.$skc = g;
				class p extends i.$ktb {
					constructor() {
						super({
							id: "editor.action.selectPreviousStickyScrollLine",
							title: (0, w.localize2)(
								1474,
								"Select the previous sticky scroll line",
							),
							precondition: u.EditorContextKeys.stickyScrollFocused.isEqualTo(
								!0,
							),
							keybinding: { weight: c, primary: t.KeyCode.UpArrow },
						});
					}
					runEditorCommand(s, l) {
						a.$pkc.get(l)?.focusPrevious();
					}
				}
				e.$tkc = p;
				class o extends i.$ktb {
					constructor() {
						super({
							id: "editor.action.goToFocusedStickyScrollLine",
							title: (0, w.localize2)(
								1475,
								"Go to the focused sticky scroll line",
							),
							precondition: u.EditorContextKeys.stickyScrollFocused.isEqualTo(
								!0,
							),
							keybinding: { weight: c, primary: t.KeyCode.Enter },
						});
					}
					runEditorCommand(s, l) {
						a.$pkc.get(l)?.goToFocused();
					}
				}
				e.$ukc = o;
				class f extends i.$ktb {
					constructor() {
						super({
							id: "editor.action.selectEditor",
							title: (0, w.localize2)(1476, "Select Editor"),
							precondition: u.EditorContextKeys.stickyScrollFocused.isEqualTo(
								!0,
							),
							keybinding: { weight: c, primary: t.KeyCode.Escape },
						});
					}
					runEditorCommand(s, l) {
						a.$pkc.get(l)?.selectEditor();
					}
				}
				e.$vkc = f;
			},
		),
		define(
			de[3612],
			he([1, 0, 46, 3611, 1317, 11]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, t.$qtb)(
						w.$pkc.ID,
						w.$pkc,
						t.EditorContributionInstantiation.AfterFirstRender,
					),
					(0, E.$4X)(i.$qkc),
					(0, E.$4X)(i.$rkc),
					(0, E.$4X)(i.$tkc),
					(0, E.$4X)(i.$skc),
					(0, E.$4X)(i.$ukc),
					(0, E.$4X)(i.$vkc);
			},
		),
		define(
			de[3613],
			he([1, 0, 46, 65, 840, 10, 8, 5, 40, 21]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1Xc = void 0);
				let u = class extends w.$EOb {
					constructor(h, c, n, g, p, o, f) {
						super(!1, h, c, n, g, p, o, f);
					}
				};
				(e.$1Xc = u),
					(e.$1Xc = u =
						Ne(
							[
								j(1, C.$6j),
								j(2, i.$dtb),
								j(3, m.$4N),
								j(4, d.$Li),
								j(5, r.$lq),
								j(6, E.$gj),
							],
							u,
						)),
					(0, t.$qtb)(w.$EOb.ID, u, t.EditorContributionInstantiation.Lazy);
			},
		),
		define(
			de[225],
			he([1, 0, 2, 2, 13, 126, 167, 9, 47, 116, 41, 21, 25, 312, 298, 14, 124]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.TOOLS_WITH_CHECKPOINTS =
						e.TOOL_FORMER_TOOL_CALL_DECISION_PHRASES =
						e.MULTI_DIFF_SOURCE =
						e.HARDCODED_CAPABILITIES =
						e.TOOL_SCHEMAS =
						e.ComposerCapabilitiesCodeBlockAliases =
						e.ContextPlannerCodeBlockAlias =
						e.AutoContextCodeBlockAlias =
						e.ContextPickingCodeBlockAlias =
						e.DiffReviewCodeBlockAlias =
						e.ToolCallCodeBlockAlias =
						e.composerToolCallTypeToIcon =
						e.composerToolCallTypeToLabel =
						e.useComposerContext =
						e.AllComposersContext =
						e.createDefaultConversationMessage =
						e.ToolCallTypesWithDecision =
						e.createEmptyCapabilityRanByProcess =
						e.createEmptyCapabilityStatuses =
						e.createEmptyCheckpoint =
						e.reviveCheckpoint =
						e.COMPLETED_STATUSES =
						e.SAVE_RELATED_STATUSES =
						e.APPLY_RELATED_STATUSES =
						e.REAPPLY_RELATED_STATUSES =
						e.COMPOSER_DATA_VERSION =
							void 0),
					(e.createEmptyComposerTabs = $),
					(e.getComposerHeaderData = v),
					(e.createEmptyComposer = S),
					(e.isComposerEmpty = I),
					(e.getComposerDataStorageScope = P),
					(e.deleteComposerData = k),
					(e.getEditorElem = L);
				const o = (0, t.template)("<div>");
				(e.COMPOSER_DATA_VERSION = 0),
					(e.REAPPLY_RELATED_STATUSES = [
						"completed",
						"cancelled",
						"accepted",
						"rejected",
						"outdated",
					]),
					(e.APPLY_RELATED_STATUSES = [
						...e.REAPPLY_RELATED_STATUSES,
						"applying",
					]),
					(e.SAVE_RELATED_STATUSES = ["completed"]),
					(e.COMPLETED_STATUSES = ["completed", "accepted", "rejected"]);
				const f = (D) => ({
					...D,
					files: D.files.map((M) => ({ ...M, uri: d.URI.revive(M.uri) })),
					nonExistentFiles: D.nonExistentFiles.map((M) => ({
						...M,
						uri: d.URI.revive(M.uri),
					})),
					newlyCreatedFolders: D.newlyCreatedFolders.map((M) => ({
						...M,
						uri: d.URI.revive(M.uri),
					})),
					activeInlineDiffs: D.activeInlineDiffs.map((M) => ({
						...M,
						uri: d.URI.revive(M.uri),
					})),
					inlineDiffNewlyCreatedResources: {
						...D.inlineDiffNewlyCreatedResources,
						files: D.inlineDiffNewlyCreatedResources.files.map((M) => ({
							...M,
							uri: d.URI.revive(M.uri),
						})),
						folders: D.inlineDiffNewlyCreatedResources.folders.map((M) => ({
							...M,
							uri: d.URI.revive(M.uri),
						})),
					},
				});
				e.reviveCheckpoint = f;
				const b = () => ({
					files: [],
					nonExistentFiles: [],
					newlyCreatedFolders: [],
					activeInlineDiffs: [],
					inlineDiffNewlyCreatedResources: { files: [], folders: [] },
				});
				e.createEmptyCheckpoint = b;
				const s = () => ({
					"mutate-request": [],
					"start-submit-chat": [],
					"before-submit-chat": [],
					"after-submit-chat": [],
					"after-apply": [],
					"composer-settled": [],
					"composer-done": [],
					"process-stream": [],
				});
				e.createEmptyCapabilityStatuses = s;
				const l = () => ({
					"mutate-request": [],
					"start-submit-chat": [],
					"before-submit-chat": [],
					"after-submit-chat": [],
					"after-apply": [],
					"composer-settled": [],
					"composer-done": [],
					"process-codeblock": [],
					"process-stream": [],
				});
				(e.createEmptyCapabilityRanByProcess = l),
					(e.ToolCallTypesWithDecision = [
						C.ComposerCapabilityRequest_ToolType.RUN_TERMINAL_COMMAND,
					]);
				const y = () => ({
					type: E.ConversationMessage_MessageType.HUMAN,
					approximateLintErrors: [],
					lints: [],
					codebaseContextChunks: [],
					commits: [],
					pullRequests: [],
					attachedCodeChunks: [],
					assistantSuggestedDiffs: [],
					gitDiffs: [],
					interpreterResults: [],
					images: [],
					attachedFolders: [],
					attachedFoldersNew: [],
					bubbleId: (0, m.$9g)(),
					userResponsesToSuggestedCodeBlocks: [],
					suggestedCodeBlocks: [],
					diffsForCompressingFiles: [],
					relevantFiles: [],
					toolResults: [],
					notepads: [],
					capabilities: [],
					capabilitiesRan: (0, e.createEmptyCapabilityRanByProcess)(),
					capabilityStatuses: (0, e.createEmptyCapabilityStatuses)(),
					editTrailContexts: [],
					multiFileLinterErrors: [],
					diffHistories: [],
					recentLocationsHistory: [],
					recentlyViewedFiles: [],
					isAgentic: !1,
					fileDiffTrajectories: [],
					existedSubsequentTerminalCommand: !1,
					existedPreviousTerminalCommand: !1,
					docsReferences: [],
					webReferences: [],
					attachedFoldersListDirResults: [],
				});
				e.createDefaultConversationMessage = y;
				function $() {
					return [{ type: "extra" }, { type: "composer" }];
				}
				function v(D) {
					return {
						type: "head",
						composerId: D.composerId,
						name: D.name,
						lastUpdatedAt: D.lastUpdatedAt,
						createdAt: D.createdAt,
						forceMode: D.forceMode,
					};
				}
				function S(D, M = "edit") {
					return {
						composerId: D ?? (0, m.$9g)(),
						richText: "",
						hasLoaded: !0,
						text: "",
						conversation: [],
						status: "none",
						context: (0, n.$2gc)(),
						gitGraphFileSuggestions: [],
						userResponsesToSuggestedCodeBlocks: [],
						generatingBubbleIds: [],
						chatGenerationUUID: void 0,
						isReadingLongFile: !1,
						codeBlockData: {},
						originalModelLines: {},
						newlyCreatedFiles: [],
						newlyCreatedFolders: [],
						tabs: $(),
						selectedTabIndex: 1,
						lastUpdatedAt: void 0,
						createdAt: Date.now(),
						hasChangedContext: !1,
						cachingStatus: void 0,
						latestCheckpoint: void 0,
						currentBubbleId: void 0,
						editingBubbleId: void 0,
						lastFocusedBubbleId: void 0,
						backgroundInfo: void 0,
						capabilities: [],
						name: void 0,
						forceMode: M,
						codebaseSearchSettings: {
							filesToInclude: void 0,
							filesToExclude: void 0,
						},
						isFileListExpanded: !0,
					};
				}
				function I(D) {
					return D.conversation.length === 0 && D.text.trim() === "";
				}
				e.AllComposersContext = (0, w.createContext)();
				const T = () => (0, w.useContext)(e.AllComposersContext);
				e.useComposerContext = T;
				function P(D) {
					return D.getWorkbenchState() === h.WorkbenchState.EMPTY
						? a.StorageScope.APPLICATION
						: a.StorageScope.WORKSPACE;
				}
				function k(D, M, N) {
					D.remove(N, P(M));
				}
				function L(D, M, N, A, R, O) {
					return (() => {
						const U = o();
						return (
							U.addEventListener("click", (z) => {
								if (N !== null && A !== null && R !== null) {
									const F = (0, u.$8rb)(D.resolveRelativePath(R), {
										startLineNumber: N,
										startColumn: 1,
										endLineNumber: N,
										endColumn: 1,
									});
									M.open(F, {
										openToSide: !1,
										editorOptions: {
											revealIfVisible: !0,
											revealIfOpened: !0,
											source: r.EditorOpenSource.USER,
										},
										fromUserGesture: !0,
									});
								}
							}),
							U.style.setProperty("width", "100%"),
							U.style.setProperty("box-sizing", "border-box"),
							U.style.setProperty("position", "relative"),
							(0, i.insert)(
								U,
								O === !0 &&
									(() => {
										const z = o();
										return (
											z.style.setProperty("position", "absolute"),
											z.style.setProperty("top", "0px"),
											z.style.setProperty("right", "0px"),
											`calc(100% - ${c.$W0b + 4}px)` != null
												? z.style.setProperty(
														"height",
														`calc(100% - ${c.$W0b + 4}px)`,
													)
												: z.style.removeProperty("height"),
											z.style.setProperty("width", "100%"),
											z.style.setProperty("cursor", "pointer"),
											z.style.setProperty("z-index", "1"),
											z
										);
									})(),
							),
							U
						);
					})();
				}
				(e.composerToolCallTypeToLabel = {
					[C.ComposerCapabilityRequest_ToolType.ADD_FILE_TO_CONTEXT]:
						"Add file to context",
					[C.ComposerCapabilityRequest_ToolType.RUN_TERMINAL_COMMAND]:
						"Run terminal",
					[C.ComposerCapabilityRequest_ToolType.ITERATE]: "Iterate and improve",
					[C.ComposerCapabilityRequest_ToolType.UNSPECIFIED]: "Unspecified",
					[C.ComposerCapabilityRequest_ToolType.REMOVE_FILE_FROM_CONTEXT]:
						"Remove file from context",
					[C.ComposerCapabilityRequest_ToolType.SEMANTIC_SEARCH_CODEBASE]:
						"Semantic search codebase",
				}),
					(e.composerToolCallTypeToIcon = {
						[C.ComposerCapabilityRequest_ToolType.ADD_FILE_TO_CONTEXT]:
							g.$ak.fileAdd,
						[C.ComposerCapabilityRequest_ToolType.RUN_TERMINAL_COMMAND]:
							g.$ak.terminal,
						[C.ComposerCapabilityRequest_ToolType.ITERATE]: g.$ak.sync,
						[C.ComposerCapabilityRequest_ToolType.UNSPECIFIED]: g.$ak.question,
						[C.ComposerCapabilityRequest_ToolType.REMOVE_FILE_FROM_CONTEXT]:
							g.$ak.trash,
						[C.ComposerCapabilityRequest_ToolType.SEMANTIC_SEARCH_CODEBASE]:
							g.$ak.search,
					}),
					(e.ToolCallCodeBlockAlias = "tool_call"),
					(e.DiffReviewCodeBlockAlias = "diff_review"),
					(e.ContextPickingCodeBlockAlias = "context_picking"),
					(e.AutoContextCodeBlockAlias = "auto_context"),
					(e.ContextPlannerCodeBlockAlias = "context_planner"),
					(e.ComposerCapabilitiesCodeBlockAliases = [
						e.ToolCallCodeBlockAlias,
						e.DiffReviewCodeBlockAlias,
						e.ContextPickingCodeBlockAlias,
						e.AutoContextCodeBlockAlias,
					]),
					(e.TOOL_SCHEMAS = {
						[C.ComposerCapabilityRequest_ToolType.ADD_FILE_TO_CONTEXT]: {
							name: "Add file to context",
							schema: {
								type: "object",
								properties: {
									filePath: { type: "string" },
									query: { type: "string" },
								},
								required: ["filePath", "query"],
							},
						},
						[C.ComposerCapabilityRequest_ToolType.RUN_TERMINAL_COMMAND]: {
							name: "Run a terminal command",
							schema: {
								type: "object",
								properties: { command: { type: "string" } },
								required: ["command"],
							},
						},
						[C.ComposerCapabilityRequest_ToolType.ITERATE]: {
							name: "Iterate and improve",
							schema: {
								type: "object",
								properties: { instructions: { type: "string" } },
								required: ["instructions"],
							},
						},
						[C.ComposerCapabilityRequest_ToolType.REMOVE_FILE_FROM_CONTEXT]: {
							name: "Remove file from context",
							schema: {
								type: "object",
								properties: { filePath: { type: "string" } },
								required: ["filePath"],
							},
						},
						[C.ComposerCapabilityRequest_ToolType.SEMANTIC_SEARCH_CODEBASE]: {
							name: "Semantic search codebase",
							schema: {
								type: "object",
								properties: { query: { type: "string" } },
								required: ["query"],
							},
						},
					}),
					(e.HARDCODED_CAPABILITIES = [
						C.ComposerCapabilityRequest_ComposerCapabilityType.DIFF_REVIEW,
						C.ComposerCapabilityRequest_ComposerCapabilityType.AUTO_CONTEXT,
						C.ComposerCapabilityRequest_ComposerCapabilityType.DIFF_HISTORY,
						C.ComposerCapabilityRequest_ComposerCapabilityType.DECOMPOSER,
						C.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_FORMER,
						C.ComposerCapabilityRequest_ComposerCapabilityType.USES_CODEBASE,
					]),
					(e.MULTI_DIFF_SOURCE = d.URI.parse(
						"multi-diff-editor:composer-all-active-changes",
					)),
					(e.TOOL_FORMER_TOOL_CALL_DECISION_PHRASES = {
						[p.ClientSideToolV2.RUN_TERMINAL_COMMAND_V2]: {
							accept: "Run command",
							reject: "Skip",
							waitText: "Waiting for approval",
						},
						[p.ClientSideToolV2.EDIT_FILE]: {
							accept: "Accept",
							reject: "Reject",
							waitText: "",
						},
						[p.ClientSideToolV2.PARALLEL_APPLY]: {
							accept: "Accept All",
							reject: "Reject All",
							waitText: "",
						},
					}),
					(e.TOOLS_WITH_CHECKPOINTS = [
						p.ClientSideToolV2.EDIT_FILE,
						p.ClientSideToolV2.PARALLEL_APPLY,
						p.ClientSideToolV2.DELETE_FILE,
					]);
			},
		),
		define(
			de[262],
			he([1, 0, 14, 351, 3, 225, 126, 13, 193, 167, 351, 351, 28]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerCapability =
						e.defaultCapabilityData =
						e.availableCapabilities =
						e.capabilitySchemas =
						e.capabilityTypeLabels =
						e.capabilityTypeIcons =
						e.createEditTrailParamsSignal =
							void 0),
					(e.registerComposerCapability = f),
					(e.getComposerCapabilities = b),
					(e.createComposerCapability = s),
					(e.getComposerCapabilitySchema = l),
					(e.renderCapabilityDataHover = y),
					(e.filterEnabledCapabilities = $),
					(e.sortCapabilities = v),
					(e.getFilteredAndSortedCapabilities = S),
					(e.deserialize = I),
					(e.getCapabilitiesForProcess = T),
					(e.getNonSilentCapabilitiesForGivenProcess = P),
					(e.countCapabilityIterationsFromLastHumanMessageExcludingCurrent = k),
					(e.createSignal = L),
					(e.createStore = D),
					(e.unwrap = M);
				const c = () => {
					const [N, A] = D({ isTrailing: !1, hasModifiedAnyModel: !1 });
					return [() => N, A];
				};
				(e.createEditTrailParamsSignal = c),
					(e.capabilityTypeIcons = {
						[r.ComposerCapabilityRequest_ComposerCapabilityType.UNSPECIFIED]:
							void 0,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.LOOP_ON_LINTS]:
							t.$ak.debugStart,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.LOOP_ON_TESTS]:
							t.$ak.runAll,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.MEGA_PLANNER]:
							t.$ak.symbolEvent,
						[r.ComposerCapabilityRequest_ComposerCapabilityType
							.LOOP_ON_COMMAND]: t.$ak.terminal,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_CALL]:
							t.$ak.tools,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.DIFF_REVIEW]:
							t.$ak.openPreview,
						[r.ComposerCapabilityRequest_ComposerCapabilityType
							.CONTEXT_PICKING]: t.$ak.squirrel,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.EDIT_TRAIL]:
							t.$ak.history,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.AUTO_CONTEXT]:
							t.$ak.squirrel,
						[r.ComposerCapabilityRequest_ComposerCapabilityType
							.CONTEXT_PLANNER]: t.$ak.squirrel,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.DIFF_HISTORY]:
							t.$ak.history,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.REMEMBER_THIS]:
							t.$ak.bookmark,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.USES_CODEBASE]:
							t.$ak.repo,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.DECOMPOSER]:
							void 0,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_FORMER]:
							t.$ak.tools,
					}),
					(e.capabilityTypeLabels = {
						[r.ComposerCapabilityRequest_ComposerCapabilityType.UNSPECIFIED]:
							"",
						[r.ComposerCapabilityRequest_ComposerCapabilityType.LOOP_ON_LINTS]:
							"Iterate on Lints",
						[r.ComposerCapabilityRequest_ComposerCapabilityType.LOOP_ON_TESTS]:
							"Loop on Tests",
						[r.ComposerCapabilityRequest_ComposerCapabilityType.MEGA_PLANNER]:
							"Mega Planner",
						[r.ComposerCapabilityRequest_ComposerCapabilityType
							.LOOP_ON_COMMAND]: "Loop on Command",
						[r.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_CALL]:
							"Tool Call",
						[r.ComposerCapabilityRequest_ComposerCapabilityType.DIFF_REVIEW]:
							"Review Changes",
						[r.ComposerCapabilityRequest_ComposerCapabilityType
							.CONTEXT_PICKING]: "Context Picking",
						[r.ComposerCapabilityRequest_ComposerCapabilityType.EDIT_TRAIL]:
							"Edit Trail",
						[r.ComposerCapabilityRequest_ComposerCapabilityType.AUTO_CONTEXT]:
							"Auto Context",
						[r.ComposerCapabilityRequest_ComposerCapabilityType
							.CONTEXT_PLANNER]: "Context Planner",
						[r.ComposerCapabilityRequest_ComposerCapabilityType.DIFF_HISTORY]:
							"Diff History",
						[r.ComposerCapabilityRequest_ComposerCapabilityType.REMEMBER_THIS]:
							"Remember This",
						[r.ComposerCapabilityRequest_ComposerCapabilityType.USES_CODEBASE]:
							"Uses Codebase",
						[r.ComposerCapabilityRequest_ComposerCapabilityType.DECOMPOSER]: "",
						[r.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_FORMER]:
							"Tool Former",
					}),
					(e.capabilitySchemas = {
						[r.ComposerCapabilityRequest_ComposerCapabilityType.UNSPECIFIED]:
							{},
						[r.ComposerCapabilityRequest_ComposerCapabilityType.LOOP_ON_LINTS]:
							i.loopOnLintsSchema,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.LOOP_ON_TESTS]:
							{},
						[r.ComposerCapabilityRequest_ComposerCapabilityType.MEGA_PLANNER]:
							i.megaPlannerSchema,
						[r.ComposerCapabilityRequest_ComposerCapabilityType
							.LOOP_ON_COMMAND]: u.loopOnCommandSchema,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_CALL]:
							u.toolCallSchema,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.DIFF_REVIEW]:
							i.diffReviewSchema,
						[r.ComposerCapabilityRequest_ComposerCapabilityType
							.CONTEXT_PICKING]: i.contextPickingSchema,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.EDIT_TRAIL]:
							i.editTrailSchema,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.AUTO_CONTEXT]:
							i.autoContextSchema,
						[r.ComposerCapabilityRequest_ComposerCapabilityType
							.CONTEXT_PLANNER]: i.contextPlannerSchema,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.DIFF_HISTORY]:
							i.diffHistorySchema,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.REMEMBER_THIS]:
							i.rememberThisSchema,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.USES_CODEBASE]:
							i.usesCodebaseSchema,
						[r.ComposerCapabilityRequest_ComposerCapabilityType.DECOMPOSER]: {},
						[r.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_FORMER]:
							a.toolFormerSchema,
					});
				const n = [
					r.ComposerCapabilityRequest_ComposerCapabilityType.UNSPECIFIED,
					r.ComposerCapabilityRequest_ComposerCapabilityType.LOOP_ON_TESTS,
					r.ComposerCapabilityRequest_ComposerCapabilityType.LOOP_ON_COMMAND,
				];
				e.availableCapabilities = Object.values(
					r.ComposerCapabilityRequest_ComposerCapabilityType,
				).filter((N) => typeof N == "number" && !n.includes(N));
				function g(N) {
					const A = {};
					for (const R in N) {
						const O = N[R];
						"defaultValue" in O && (A[R] = O.defaultValue);
					}
					return A;
				}
				e.defaultCapabilityData = Object.fromEntries(
					Object.entries(e.capabilitySchemas).map(([N, A]) => [N, g(A)]),
				);
				class p extends w.$1c {
					constructor(A, R) {
						super(),
							(this.abortController = null),
							(this.composerId = A),
							(this.data = { ...R }),
							([this.isEnabled, this.setIsEnabled] = (0, d.createSignal)(!0));
					}
					isBackgroundOnly() {
						return !1;
					}
					supportsCacheWarming() {
						return !1;
					}
					silentOnStartSubmitChat(A) {
						return !1;
					}
					silentOnBeforeSubmitChat(A) {
						return !1;
					}
					silentRunInPlaceMutateRequestBeforeSubmit(A) {
						return !1;
					}
					silentProcessStream(A) {
						return !1;
					}
					silentOnAfterSubmitChat(A) {
						return !1;
					}
					silentOnComposerSettled(A) {
						return !1;
					}
					silentOnComposerDone(A) {
						return !1;
					}
					shouldRunOnStartSubmitChat(A) {
						return !!this.onStartSubmitChatReturnShouldStop;
					}
					shouldRunOnBeforeSubmitChat(A) {
						return !!this.onBeforeSubmitChat;
					}
					shouldRunInPlaceMutateRequestBeforeSubmit(A) {
						return !!this.runInPlaceMutateRequestBeforeSubmit;
					}
					shouldProcessStream(A) {
						return !!this.processStream;
					}
					shouldProcessCodeBlock(A) {
						return !1;
					}
					shouldRunOnAfterSubmitChat(A) {
						return !!this.onAfterSubmitChat;
					}
					shouldRunOnComposerSettled(A) {
						return !!this.onComposerSettledReturnShouldLoop;
					}
					shouldRunOnComposerDone(A) {
						return !!this.onComposerDone;
					}
					toString() {
						return this.serialize();
					}
					serialize() {
						return JSON.stringify(this.toJSON());
					}
					deserialize(A) {
						const R = JSON.parse(A),
							O = this.constructor;
						return new O(this.composerId, R);
					}
					toJSON() {
						return this.onWillSaveState(), { type: this.type, data: this.data };
					}
					cancel() {
						this.abortController &&
							(this.abortController.abort(), (this.abortController = null));
					}
					onWillSaveState() {}
					onAborted(A) {}
					isAborted() {
						return this.abortController
							? this.abortController.signal.aborted
							: !0;
					}
					getAbortSignal() {
						return (
							this.abortController ||
								(this.abortController = new AbortController()),
							this.abortController.signal
						);
					}
					dispose() {
						this.cancel(), super.dispose();
					}
				}
				e.ComposerCapability = p;
				class o {
					static {
						this.INSTANCE = new o();
					}
					static registerCapability(A, R) {
						this.INSTANCE.capabilitiesMap[A] = R;
					}
					static getCapabilities(A, R, O, B = []) {
						const z = (
								R.applicationUserPersistentStorage.composerState
									.defaultCapabilities ?? []
							).filter((H) => !B.some((q) => q.type === H.type)),
							F = E.HARDCODED_CAPABILITIES.filter(
								(H) =>
									!B.some((q) => q.type === H) && !z.some((q) => q.type === H),
							).map((H) => ({ type: H, data: e.defaultCapabilityData[H] })),
							x = [...B, ...F, ...z]
								.map((H) => {
									const q = this.INSTANCE.capabilitiesMap[H.type];
									if (!q || !this.getSchema(H.type)) return;
									const K = {
										...this.INSTANCE.getDefaultDataForCapability(H.type),
										...(H.data || {}),
									};
									return A.createInstance(q, O, K);
								})
								.filter(h.$tg);
						return S(x);
					}
					static getSchema(A) {
						return e.capabilitySchemas[A];
					}
					static createInstance(A, R, O, B) {
						const U = this.INSTANCE.capabilitiesMap[O];
						if (!U)
							throw new Error(`No constructor found for capability type: ${O}`);
						return A.createInstance(U, R, B);
					}
					getDefaultDataForCapability(A) {
						return e.defaultCapabilityData[A] || {};
					}
					constructor() {
						this.capabilitiesMap = {};
					}
				}
				function f(N, A) {
					o.registerCapability(N, A);
				}
				function b(N, A, R, O = []) {
					return o.getCapabilities(N, A, R, O);
				}
				function s(N, A, R, O) {
					return o.createInstance(N, A, R, O);
				}
				function l(N) {
					return o.getSchema(N);
				}
				function y(N) {
					return `\`\`\`json
${JSON.stringify(N.data, null, 2)}
\`\`\``;
				}
				function $(N) {
					return N.filter((A) => A.isEnabled);
				}
				function v(N) {
					return N.sort((A, R) => A.priority - R.priority);
				}
				function S(N) {
					return v($(N));
				}
				function I(N, A, R) {
					return o.createInstance(N, A, R.type, R.data);
				}
				function T(N, A, R) {
					const O = Array.isArray(A) ? A : [A];
					if (
						O.includes("process-codeblock") &&
						(!("capabilityCodeBlock" in R) || !("aiBubbleId" in R))
					)
						throw new Error(
							"[composer] process-codeblock status requires a capabilityCodeBlock and aiBubbleId",
						);
					if (O.includes("after-submit-chat") && !("aiBubbleId" in R))
						throw new Error(
							"[composer] after-submit-chat status requires an aiBubbleId",
						);
					if (O.includes("process-stream") && !("stream" in R))
						throw new Error(
							"[composer] process-stream status requires a stream",
						);
					return N.filter((U) =>
						!U.isEnabled() ||
						(R.isCacheWarming === !0 && U.supportsCacheWarming?.() !== !0)
							? !1
							: O.some((z) => {
									switch (z) {
										case "mutate-request":
											return (
												!!U.runInPlaceMutateRequestBeforeSubmit &&
												U.shouldRunInPlaceMutateRequestBeforeSubmit(R)
											);
										case "start-submit-chat":
											return (
												!!U.onStartSubmitChatReturnShouldStop &&
												U.shouldRunOnStartSubmitChat(R)
											);
										case "before-submit-chat":
											return (
												!!U.onBeforeSubmitChat &&
												U.shouldRunOnBeforeSubmitChat(R)
											);
										case "after-submit-chat":
											return (
												!!U.onAfterSubmitChat && U.shouldRunOnAfterSubmitChat(R)
											);
										case "after-apply":
											return !!U.onAfterApply;
										case "process-codeblock":
											return (
												!!U.processCodeBlock && U.shouldProcessCodeBlock(R)
											);
										case "composer-settled":
											return (
												!!U.onComposerSettledReturnShouldLoop &&
												U.shouldRunOnComposerSettled(R)
											);
										case "composer-done":
											return !!U.onComposerDone && U.shouldRunOnComposerDone(R);
										case "process-stream":
											return !!U.processStream && U.shouldProcessStream(R);
										default:
											return !1;
									}
								}),
					);
				}
				function P(N, A, R) {
					if (A === "after-submit-chat" && !("aiBubbleId" in R))
						throw new Error(
							"[composer] after-submit-chat status requires an aiBubbleId",
						);
					if (A === "process-codeblock" && !("aiBubbleId" in R))
						throw new Error(
							"[composer] process-codeblock status requires an aiBubbleId",
						);
					return N.filter((O) => {
						switch (A) {
							case "mutate-request":
								return (
									!!O.runInPlaceMutateRequestBeforeSubmit &&
									!O.silentRunInPlaceMutateRequestBeforeSubmit(R)
								);
							case "start-submit-chat":
								return (
									!!O.onStartSubmitChatReturnShouldStop &&
									!O.silentOnStartSubmitChat(R)
								);
							case "before-submit-chat":
								return !!O.onBeforeSubmitChat && !O.silentOnBeforeSubmitChat(R);
							case "composer-settled":
								return (
									!!O.onComposerSettledReturnShouldLoop &&
									!O.silentOnComposerSettled(R)
								);
							case "after-submit-chat":
								return !!O.onAfterSubmitChat && !O.silentOnAfterSubmitChat(R);
							case "composer-done":
								return !!O.onComposerDone && !O.silentOnComposerDone(R);
							default:
								return !1;
						}
					});
				}
				function k(N) {
					let A = 0,
						R = -1;
					for (let O = N.length - 1; O >= 0; O--)
						if (
							N[O].type === C.ConversationMessage_MessageType.HUMAN &&
							!N[O].isCapabilityIteration
						) {
							R = O;
							break;
						}
					if (R === -1) return 0;
					for (let O = R + 1; O < N.length; O++)
						N[O].isCapabilityIteration === !0 && A++;
					return A - 1;
				}
				function L(N) {
					return (0, d.createSignal)(N);
				}
				function D(N) {
					return (0, m.createStore)(N);
				}
				function M(N) {
					return (0, m.unwrap)(N);
				}
			},
		),
		define(
			de[246],
			he([1, 0, 83, 58, 47, 116, 41, 140, 169, 298, 7, 12]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.getAgenticModeToggleButtonId =
						e.restartVimAndFocus =
						e.formatTimestamp =
						e.openCodeSelectionInEditor =
						e.openFileInEditorIfExists =
						e.getShortcut =
							void 0),
					(e.containsContextNotSupportedByAgentic = h),
					(e.getBubbleElementId = c),
					(e.focusBubble = n),
					(e.isCheckpointEmpty = g),
					(e.getComposerTitle = o),
					(e.doesTabHaveExactlyOneUserBubbleWithNoText = y),
					(e.doesTabHaveExactlyOneUserBubbleWithNoTextNorSelections = $),
					(e.createUserBubble = v),
					(e.createCodeInterpreterUserBubble = S),
					(e.randomFilename = I),
					(e.dedupeCodeResults = T),
					(e.sortComposers = P),
					(e.getComposerTimestamp = k),
					(e.replaceUriInCodeBlock = L);
				function h(M) {
					return !!M.usesCodebase;
				}
				function c(M) {
					return `bubble-${M.split("-").pop()}`;
				}
				function n(M) {
					const N = (0, u.$Ogb)().document.getElementById(c(M));
					N && N.focus();
				}
				function g(M) {
					return M ? !M.files.length && !M.nonExistentFiles.length : !0;
				}
				const p = (M) => (a.$m ? `\u2318${M}` : `^${M}`);
				e.getShortcut = p;
				function o(M) {
					return M.name ? M.name : m.unnamedComposerTitle;
				}
				const f = async (M, N, A, R = !1) => {
					(await N.exists(M)) &&
						A.open(M, {
							openToSide: R,
							editorOptions: {
								revealIfVisible: !0,
								revealIfOpened: !0,
								source: E.EditorOpenSource.USER,
								preserveFocus: !0,
							},
							fromUserGesture: !0,
						});
				};
				e.openFileInEditorIfExists = f;
				const b = (M, N, A) => {
					const R = (0, C.$8rb)(N.resolveRelativePath(M.uri.path ?? ""), {
						startLineNumber: M.range.selectionStartLineNumber,
						startColumn: 1,
						endLineNumber: M.range.positionLineNumber,
						endColumn: 1,
					});
					A.open(R, {
						openToSide: !1,
						editorOptions: {
							revealIfVisible: !0,
							revealIfOpened: !0,
							source: E.EditorOpenSource.USER,
						},
						fromUserGesture: !0,
					});
				};
				e.openCodeSelectionInEditor = b;
				const s = (M) => {
					if (!M) return "Unknown";
					const N = Date.now() - M,
						A = Math.floor(N / 1e3),
						R = Math.floor(A / 60),
						O = Math.floor(R / 60),
						B = Math.floor(O / 24);
					return B > 0
						? `${B}d ago`
						: O > 0
							? `${O}h ago`
							: R > 0
								? `${R}m ago`
								: `${A}s ago`;
				};
				e.formatTimestamp = s;
				const l = async (M, N, A, R, O, B) => {
					M === "editor"
						? N.activeEditorPane?.focus()
						: M === "terminal" && A.getActiveInstance()?.focus();
					const U = await O.getInstalled();
					for (const z of U)
						if (z.identifier.id === "vscodevim.vim") {
							if (!(await R.getExtension(z.identifier.id))) continue;
							await B.executeCommand("toggleVim"),
								await B.executeCommand("toggleVim"),
								await B.executeCommand("extension.vim_insert"),
								await B.executeCommand("extension.vim_escape");
						}
				};
				e.restartVimAndFocus = l;
				function y(M) {
					if (M.bubbles.length === 0) return !1;
					if (M.bubbles.length === 1 && M.bubbles[0].type === "user") {
						const N = M.bubbles[0];
						if (!N.text || N.text === "") return !0;
					}
					return !1;
				}
				function $(M) {
					if (M.bubbles.length === 0) return !1;
					if (M.bubbles.length === 1 && M.bubbles[0].type === "user") {
						const N = M.bubbles[0];
						return !(
							(N.text && N.text !== "") ||
							(N.fileSelections?.length ?? 0) > 0 ||
							(N.folderSelections?.length ?? 0) > 0 ||
							(N.selections?.length ?? 0) > 0 ||
							(N.selectedDocs?.length ?? 0) > 0 ||
							(N.selectedPullRequests?.length ?? 0) > 0 ||
							(N.selectedCommits?.length ?? 0) > 0 ||
							(N.selectedImages?.length ?? 0) > 0 ||
							N.useWeb ||
							N.usesCodebase ||
							N.usedRecentFiles?.length
						);
					}
					return !1;
				}
				function v({
					text: M,
					followup: N,
					richText: A,
					configurationService: R,
				} = {}) {
					const O = (0, w.$9g)(),
						B = R?.getValue(i.$nW) ?? !1;
					return {
						...(0, r.$2gc)(),
						type: d.BubbleType.USER_CHAT,
						id: O,
						messageType: t.PureMessage_MessageType.USER,
						dropdownAdvancedCodebaseSearchBehavior: "embeddings",
						followup: N ?? !1,
						text: M,
						richText: A,
						selections: [],
						isFocused: !1,
						useWeb: B,
						mentions: (0, r.$3gc)(),
					};
				}
				function S(M, N, A, R, O, B, U, z) {
					const F = (0, w.$9g)();
					return {
						...(0, r.$2gc)(),
						type: d.BubbleType.USER_CODE_INTERPRETER,
						id: F,
						messageType: t.PureMessage_MessageType.USER,
						followup: B ?? !1,
						text: O ?? "",
						richText: z ?? "",
						selections: [],
						serverMessages: [],
						bubbleState: A,
						nextBubbleState: R,
						stepIndex: U,
						mentions: (0, r.$3gc)(),
					};
				}
				function I() {
					let M = "abcdefghijklmnopqrstuvwxyz",
						N = "";
					for (let A = 0; A < 10; A++)
						N += M.charAt(Math.floor(Math.random() * M.length));
					return N;
				}
				function T(M) {
					const N = new Set(),
						A = [];
					for (const R of M) {
						const { codeBlock: O } = R;
						if (!O) continue;
						const { relativeWorkspacePath: B } = O;
						N.has(B) || (N.add(B), A.push(B));
					}
					return A;
				}
				function P(M) {
					return [...M].sort((N, A) => {
						const R = N.lastUpdatedAt ?? N.createdAt;
						return (A.lastUpdatedAt ?? A.createdAt) - R;
					});
				}
				function k(M) {
					return M ? (M.lastUpdatedAt ?? M.createdAt) : 0;
				}
				function L(M, N, A) {
					const R = /```([\w-]*)(?::[\w\/.]+)?\n([\s\S]*?)```/g;
					let O = 0;
					return M.replace(R, (U, z, F) => {
						if (O === N) {
							const x = z ? `\`\`\`${z}:${A}` : `\`\`\`${A}`;
							return (
								O++,
								`${x}
${F}\`\`\``
							);
						} else return O++, U;
					});
				}
				const D = (M) => `agentic-mode-toggle-${M}`;
				e.getAgenticModeToggleButtonId = D;
			},
		),
		define(
			de[1869],
			he([1, 0, 21, 25, 140, 193, 47, 58, 83, 298, 1626, 205, 246]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qIb = c),
					(e.$rIb = n),
					(e.$sIb = p),
					(e.$tIb = o);
				function c(f) {
					return f.getWorkbenchState() === i.WorkbenchState.EMPTY
						? t.StorageScope.APPLICATION
						: t.StorageScope.WORKSPACE;
				}
				function n(f, b, s) {
					f.remove(s, c(b));
				}
				function g(f) {
					const b = f[0];
					if (!b || b.messageType !== m.PureMessage_MessageType.USER)
						return "New chat";
					const s = b.text ?? "";
					return s
						? s.length > 300
							? s.slice(0, 300) + "..."
							: s
						: "New chat";
				}
				function p(f, b) {
					f.codeInterpreterTabs || (f.codeInterpreterTabs = []),
						f.editorContext || (f.editorContext = b);
					for (let l of f.tabs) {
						if (l.bubbles.length > 0) {
							let y = l.bubbles;
							for (let $ of y)
								if (
									($.type === "user" && !$.selections && ($.selections = []),
									$.type === "user")
								)
									if (
										("delegate" in $ &&
											"initText" in $ &&
											($.richText = $.initText),
										$.messageType ||
											($.messageType = m.PureMessage_MessageType.USER),
										$.image && ($.selectedImages = [$.image]),
										!$.mentions)
									)
										$.mentions = (0, r.$3gc)();
									else
										try {
											if (
												!Object.entries($.mentions).every(([S, I]) =>
													(0, r.$Ygc)(S)
														? typeof I == "object" &&
															Object.values(I).every(
																(T) =>
																	Array.isArray(T) &&
																	T.every(
																		(P) => typeof P == "object" && "uuid" in P,
																	),
															)
														: Array.isArray(I) &&
															I.every(
																(T) => typeof T == "object" && "uuid" in T,
															),
												)
											) {
												const S = (0, r.$3gc)();
												for (const I in $.mentions)
													if ((0, r.$Ygc)(I)) {
														S[I] = {};
														const T = $.mentions[I];
														if (typeof T == "object" && T !== null)
															for (const P in T) {
																const k = T[P];
																Array.isArray(k) &&
																	(S[I] || (S[I] = {}),
																	(S[I][P] = k
																		.filter((L) => typeof L == "string")
																		.map((L) => ({ uuid: L }))));
															}
													} else {
														const T = $.mentions[I];
														Array.isArray(T) &&
															(S[I] = T.filter((P) => typeof P == "string").map(
																(P) => ({ uuid: P }),
															));
													}
												$.mentions = S;
											}
										} catch (v) {
											console.error("[aichat] Error migrating mentions", v),
												($.mentions = (0, r.$3gc)());
										}
								else
									$.type === "ai" &&
										("rawText" in $ &&
											$.rawText &&
											!("text" in $) &&
											($.text = $.rawText),
										$.messageType ||
											($.messageType = m.PureMessage_MessageType.ASSISTANT),
										(!("codeBlocks" in $) || !$.codeBlocks) &&
											($.codeBlocks = []));
						}
						l.tabId
							? l.tabState || (l.tabState = w.TabState.chat)
							: (l.tabId = (0, C.$9g)()),
							(l.editingBubbleId = void 0),
							(l.selectedBubbleId = void 0),
							!l.lastFocusedBubbleId &&
								l.bubbles.length > 0 &&
								(l.lastFocusedBubbleId = l.bubbles[l.bubbles.length - 1].id);
					}
					for (let l of f.codeInterpreterTabs)
						if (l.bubbles.length > 0) {
							let y = l.bubbles;
							for (let $ of y)
								$.serverMessages === void 0 && ($.serverMessages = []);
						}
					f.pinnedContexts ||
						(f.pinnedContexts = { fileSelections: [], codeSelections: [] });
					const s = [
						"tabs",
						u.SpecialCase.array,
						"bubbles",
						u.SpecialCase.array,
						"selections",
					];
					return (
						(0, u.$Xzb)({
							origObject: f,
							pathToKey: s,
							keyToRemove: u.SpecialCase.array,
							cutoffSize: 5e5,
						}),
						f
					);
				}
				function o(f, b, s, l, y, $) {
					const v = f.get(y, c(l));
					let S;
					if (v)
						try {
							(S = JSON.parse(v)), S && (S = p(S, $));
						} catch (A) {
							console.error("Error parsing chat data", A), (S = void 0);
						}
					const [I, T] = (0, E.createStore)({
							tabs: [],
							codeInterpreterTabs: [],
							selectedTabId: "",
							displayTabs: !1,
							editorContext: $,
							debugPromptVisible: !1,
							pinnedContexts: { fileSelections: [], codeSelections: [] },
							inputBoxDelegate: new a.$Zzb(),
							inputBoxDelegateMap: {},
						}),
						P = s?.getValue(d.$nW) ?? !1;
					if (S) {
						!S.selectedTabId &&
							S.tabs.length > 0 &&
							(S.selectedTabId = S.tabs[0].tabId);
						const A = S.tabs.find((O) => O.tabId === S.selectedTabId),
							R = A?.lastFocusedBubbleId || A?.bubbles[A.bubbles.length - 1].id;
						T(S),
							T(
								"tabs",
								(O) => O.tabId === S.selectedTabId,
								"bubbles",
								(O) => O.id === R,
								"useWeb",
								P,
							);
					} else {
						const A = (0, C.$9g)(),
							R =
								b.applicationUserPersistentStorage.isDebuggerMode === !0 &&
								b.applicationUserPersistentStorage,
							O = (0, h.createUserBubble)();
						T("tabs", [
							{
								tabId: A,
								tabState: w.TabState.chat,
								chatTitle: void 0,
								bubbles: [O],
								longContextModeEnabled:
									b.applicationUserPersistentStorage.isLongContextMode === !0,
								debuggerData: R ? {} : void 0,
								selectedBubbleId: void 0,
								editingBubbleId: void 0,
								lastFocusedBubbleId: O.id,
							},
						]),
							T("selectedTabId", A);
					}
					const k = (A) => {
							let R =
								I.selectedTabId ||
								I.tabs[0].tabId ||
								I.codeInterpreterTabs[0].tabId;
							const O =
								I.tabs.find((B) => B.tabId === R) ??
								I.codeInterpreterTabs.find((B) => B.tabId === R) ??
								I.tabs[0] ??
								I.codeInterpreterTabs[0];
							A && L(R);
						},
						L = (A) => {
							let R = !0;
							const O =
								I.tabs.find((B) => B.tabId === A) ??
								I.codeInterpreterTabs.find((B) => B.tabId === A) ??
								I.tabs[0];
							for (const B of O.bubbles)
								B.messageType === m.PureMessage_MessageType.USER &&
									B.text !== "" &&
									(R = !1);
							if (!R && !O.chatTitle) {
								const B = g(O.bubbles);
								T(
									O.tabState === w.TabState.chat
										? "tabs"
										: "codeInterpreterTabs",
									(U, z) => U.tabId === A,
									"chatTitle",
									B,
								);
							}
						},
						D = () => {
							T("tabs", (A) =>
								[...A].sort((O, B) =>
									O.lastSendTime && B.lastSendTime
										? B.lastSendTime - O.lastSendTime
										: O.lastSendTime
											? -1
											: B.lastSendTime
												? 1
												: 0,
								),
							);
						},
						M =
							b.applicationUserPersistentStorage.isDebuggerMode === !0 &&
							b.applicationUserPersistentStorage,
						N = () => {
							const A = (0, C.$9g)(),
								R = (0, h.createUserBubble)();
							return (
								T("tabs", [
									{
										tabId: A,
										tabState: w.TabState.chat,
										chatTitle: void 0,
										bubbles: [R],
										longContextModeEnabled:
											b.applicationUserPersistentStorage.isLongContextMode ===
											!0,
										debuggerData: M ? {} : void 0,
										selectedBubbleId: void 0,
										editingBubbleId: void 0,
										lastFocusedBubbleId: R.id,
									},
								]),
								T("selectedTabId", A),
								I.tabs[0]
							);
						};
					return D(), [I, T, k, D, N];
				}
			},
		),
		define(
			de[3614],
			he([1, 0, 7, 33, 27, 3, 46, 71, 1177, 1316, 4, 11, 184, 8, 5, 43, 497]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				var o;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$9Xc = void 0),
					(t = mt(t));
				let f = class {
					static {
						o = this;
					}
					static {
						this.IsReading = new c.$5j("isReadingLineWithInlayHints", !1, {
							type: "boolean",
							description: (0, u.localize)(7068, null),
						});
					}
					static {
						this.ID = "editor.contrib.InlayHintsAccessibility";
					}
					static get(s) {
						return s.getContribution(o.ID) ?? void 0;
					}
					constructor(s, l, y, $) {
						(this.d = s),
							(this.e = y),
							(this.f = $),
							(this.c = new E.$Zc()),
							(this.a = document.createElement("span")),
							(this.a.style.position = "fixed"),
							(this.a.className = "inlayhint-accessibility-element"),
							(this.a.tabIndex = 0),
							this.a.setAttribute(
								"aria-description",
								(0, u.localize)(7069, null),
							),
							(this.b = o.IsReading.bindTo(l));
					}
					dispose() {
						this.c.dispose(), this.b.reset(), this.a.remove();
					}
					g() {
						t.$9fb(this.a), this.c.clear(), this.b.reset();
					}
					async h(s, l) {
						if (
							(this.c.clear(),
							this.a.isConnected || this.d.getDomNode()?.appendChild(this.a),
							!this.d.hasModel() || !this.a.isConnected)
						) {
							this.b.set(!1);
							return;
						}
						const y = new i.$Ce();
						this.c.add(y);
						for (const T of l) await T.resolve(y.token);
						if (y.token.isCancellationRequested) return;
						const $ = this.d.getModel(),
							v = [];
						let S = 0,
							I = !1;
						for (const T of l) {
							const P = $.getValueInRange({
								startLineNumber: s,
								startColumn: S + 1,
								endLineNumber: s,
								endColumn: T.hint.position.column,
							});
							if (
								(P.length > 0 && (v.push(P), (S = T.hint.position.column - 1)),
								S > 750)
							) {
								v.push("\u2026"), (I = !0);
								break;
							}
							const k = document.createElement("em"),
								{ label: L } = T.hint;
							if (typeof L == "string") k.innerText = L;
							else
								for (const D of L)
									if (D.command) {
										const M = this.f.createInstance(
											p.Link,
											k,
											{
												href: (0, m.$nhc)(D.command),
												label: D.label,
												title: D.command.title,
											},
											void 0,
										);
										this.c.add(M);
									} else k.innerText += D.label;
							v.push(k);
						}
						I ||
							v.push(
								$.getValueInRange({
									startLineNumber: s,
									startColumn: S + 1,
									endLineNumber: s,
									endColumn: Number.MAX_SAFE_INTEGER,
								}),
							),
							t.$hhb(this.a, ...v),
							this.a.focus(),
							this.b.set(!0),
							this.c.add(
								t.$0fb(this.a, "focusout", () => {
									this.g();
								}),
							);
					}
					startInlayHintsReading() {
						if (!this.d.hasModel()) return;
						const s = this.d.getPosition().lineNumber,
							l = r.$rhc.get(this.d)?.getInlayHintsForLine(s);
						!l || l.length === 0
							? this.e.playSignal(h.$Twb.noInlayHints)
							: this.h(s, l);
					}
					stopInlayHintsReading() {
						this.g(), this.d.focus();
					}
				};
				(e.$9Xc = f),
					(e.$9Xc = f = o = Ne([j(1, c.$6j), j(2, h.$Owb), j(3, n.$Li)], f)),
					(0, a.$4X)(
						class extends C.$ktb {
							constructor() {
								super({
									id: "inlayHints.startReadingLineWithHint",
									title: (0, u.localize2)(7070, "Read Line With Inline Hints"),
									precondition: d.EditorContextKeys.hasInlayHintsProvider,
									f1: !0,
								});
							}
							runEditorCommand(s, l) {
								f.get(l)?.startInlayHintsReading();
							}
						},
					),
					(0, a.$4X)(
						class extends C.$ktb {
							constructor() {
								super({
									id: "inlayHints.stopReadingLineWithHint",
									title: (0, u.localize2)(7071, "Stop Inlay Hints Reading"),
									precondition: f.IsReading,
									f1: !0,
									keybinding: {
										weight: g.KeybindingWeight.EditorContrib,
										primary: w.KeyCode.Escape,
									},
								});
							}
							runEditorCommand(s, l) {
								f.get(l)?.stopInlayHintsReading();
							}
						},
					),
					(0, C.$qtb)(f.ID, f, C.EditorContributionInstantiation.Lazy);
			},
		),
		define(
			de[299],
			he([1, 0, 54, 9, 116, 41, 298, 18, 66, 23, 19]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ahc = e.$_gc = e.$$gc = e.$0gc = e.$9gc = void 0),
					(e.$6gc = a),
					(e.$7gc = h),
					(e.$8gc = c),
					(e.$bhc = b),
					(e.$chc = s);
				function a(l) {
					return JSON.parse(JSON.stringify(l));
				}
				function h(l) {
					return (0, t.$sc)(l.uri.path ?? "");
				}
				function c(l) {
					return i.URI.revive(l.uri).toString();
				}
				const n = (
					l,
					{
						filePathOrUri: y,
						selection: $,
						openToSide: v,
						fromGroup: S,
						preserveFocus: I,
					},
				) => {
					try {
						let T = typeof y == "string" ? i.URI.file(y) : y;
						if (($ && (T = (0, E.$8rb)(T, $)), T.path === "/")) return;
						(0, e.$0gc)({
							uri: T,
							fileService: l.fileService,
							editorService: l.editorService,
							editorGroupsService: l.editorGroupService,
							openToSide: v,
							fromGroup: S,
							preserveFocus: I,
						});
					} catch (T) {
						console.error("Failed to open file:", y, T),
							l.notificationService.error(`Failed to open file: ${y}`);
					}
				};
				e.$9gc = n;
				const g = async ({
					uri: l,
					fileService: y,
					editorService: $,
					editorGroupsService: v,
					openToSide: S,
					fromGroup: I,
					preserveFocus: T,
				}) => {
					if (!(await y.exists(l))) return;
					let k = d.$JY;
					if (S) {
						const M = I ?? $.activeEditorPane?.group;
						if (M) {
							const N = v.findGroup({ direction: m.GroupDirection.RIGHT }, M),
								A = v.findGroup({ direction: m.GroupDirection.LEFT }, M);
							!N && A ? (k = A) : (k = d.$KY);
						} else k = d.$KY;
					}
					let { selection: L, uri: D } = (0, E.$9rb)(l);
					D.scheme === r.Schemas.file && (D = (0, u.$oh)(D)),
						$.openEditor(
							{
								resource: D,
								options: {
									selection: L,
									revealIfVisible: !0,
									revealIfOpened: !0,
									source: w.EditorOpenSource.USER,
									preserveFocus: T ?? !0,
								},
							},
							k,
						);
				};
				e.$0gc = g;
				const p = (l) => {
					if (l === "<ALL_FILES>") return "Add all";
					const y = l.split(/[/\\]/);
					return y[y.length - 1];
				};
				e.$$gc = p;
				const o = (l) => {
					if (((l = l.trim()), l.slice(0, 3) === "```")) {
						const $ = l
							.split(`
`)[0]
							.match(/```.*?:(.+)$/);
						if ($ && $[1]) return $[1].split("/").pop() || "";
					}
					return l;
				};
				e.$_gc = o;
				const f = (l) => ({
					...l,
					fileSelections: l.fileSelections?.map((y) => ({
						...y,
						uri: i.URI.revive(y.uri),
					})),
				});
				e.$ahc = f;
				function b(l) {
					const y = { ...l, mentions: { ...l.mentions } };
					for (const $ of Object.keys(l))
						$ !== "mentions" &&
							((0, C.$Ygc)($)
								? ((y[$] = l[$].filter(
										(v) =>
											"addedWithoutMention" in v &&
											v.addedWithoutMention === !0,
									)),
									(y.mentions[$] = {}))
								: l[$] !== void 0 && ((y[$] = void 0), (y.mentions[$] = [])));
					return y;
				}
				function s(l) {
					for (const y of Object.keys(l))
						if (y !== "mentions") {
							if ((0, C.$Ygc)(y)) {
								if (l[y].length > 0) return !1;
							} else if (l[y] !== void 0 && l[y] !== !1) return !1;
						}
					return !0;
				}
			},
		),
		define(
			de[3615],
			he([
				1, 0, 7, 3, 9, 56, 38, 17, 61, 64, 252, 67, 42, 10, 22, 5, 312, 66, 18,
				299,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ffd = void 0),
					(t = mt(t));
				let s = class extends i.$1c {
					constructor(y, $, v, S, I, T, P, k, L, D, M) {
						super(),
							(this.j = y),
							(this.m = S),
							(this.n = I),
							(this.q = T),
							(this.r = P),
							(this.s = k),
							(this.t = L),
							(this.u = D),
							(this.w = M),
							(this.f = !1),
							(this.allowEditorOverflow = !0),
							console.log(
								"[CURSOR PREDICTION] Creating non-visible editor indicator",
								$.toString(),
							),
							(this.g = $),
							(this.h = v),
							(this.a = t.$(".cursor-prediction-non-visible-editor-indicator")),
							(this.a.style.position = "absolute"),
							(this.a.style.right = "20px"),
							(this.a.style.bottom = "20px"),
							(this.a.style.zIndex = "1000"),
							(this.a.style.width = "400px"),
							(this.a.style.maxWidth = "40%"),
							(this.a.style.backgroundColor =
								"var(--vscode-editor-background)"),
							(this.a.style.border =
								"1px solid var(--vscode-editorWarning-foreground)"),
							(this.a.style.borderRadius = "4px"),
							(this.a.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.15)"),
							(this.a.style.overflow = "hidden"),
							(this.b = t.$fhb(this.a, t.$(".indicator"))),
							(this.b.style.display = "flex"),
							(this.b.style.alignItems = "center"),
							(this.b.style.padding = "2px 4px"),
							(this.b.style.borderBottom =
								"1px solid var(--vscode-editorWarning-foreground)"),
							(this.b.style.cursor = "pointer"),
							(this.b.style.minWidth = "0"),
							(this.b.style.flexShrink = "1"),
							(this.b.style.overflow = "hidden"),
							(this.b.style.textOverflow = "ellipsis"),
							(this.b.style.whiteSpace = "nowrap");
						const N = t.$fhb(this.b, t.$(".icon"));
						(N.textContent = "\u21E5"),
							(N.style.marginRight = "4px"),
							(N.style.fontSize = "16px");
						const A = t.$fhb(this.b, t.$(".text"));
						(A.style.fontSize = "12px"),
							(A.style.overflow = "hidden"),
							(A.style.textOverflow = "ellipsis"),
							(A.style.whiteSpace = "nowrap"),
							(A.style.minWidth = "0"),
							(A.style.flexGrow = "1"),
							(A.textContent = "Jump to prediction");
						const R = t.$fhb(this.a, t.$(".code-block-container"));
						(this.c = this.n.createInstance(
							p.$X0b,
							R,
							{ ...p.$X0b.getEditorOptions(this.m), disableLayerHinting: !0 },
							{ overwriteIsSimpleWidget: !0 },
						)),
							this.D(t.$0fb(this.b, "click", () => this.z())),
							this.j.addOverlayWidget(this),
							this.y();
					}
					updateContent(y, $) {
						(this.g = y), (this.h = $), this.y();
					}
					async y() {
						console.log(
							"[CURSOR PREDICTION] Updating code block",
							this.g.toString(),
						);
						const y = await this.t.createModelReference(this.g);
						try {
							const $ = y.object.textEditorModel;
							console.log(
								"[CURSOR PREDICTION] Model retrieved",
								$.uri.toString(),
							);
							const v = $.getValue(),
								S = this.u.createByFilepathOrFirstLine(this.g),
								I = w.URI.parse(`cursor-prediction-preview://${this.g.path}`);
							let T = this.w.getModel(I);
							T
								? (T.setValue(v), T.setLanguage(S.languageId))
								: (T = this.w.createModel(v, S, I, !1)),
								this.c.setModel(T),
								this.c.updateOptions({ readOnly: !0 });
							const P = this.c.getOption(C.EditorOption.lineHeight),
								L = P * 4,
								D = this.c.getDomNode();
							D && (D.style.height = `${L}px`);
							const M = Math.max(this.h - 2, 0) * P;
							this.c.setScrollTop(M);
							const N = [
								{
									range: new d.$iL(this.h, 1, this.h, 1),
									options: {
										isWholeLine: !0,
										className: "cursor-prediction-highlight-line",
										stickiness:
											r.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
										description: "cursor-prediction-highlight",
									},
								},
							];
							this.c.deltaDecorations([], N), this.c.layout();
							const A = this.g.path.split("/").pop() || "",
								R = this.b.querySelector(".text");
							if (R) {
								for (; R.firstChild; ) R.removeChild(R.firstChild);
								R.appendChild(document.createTextNode("Tab to "));
								const O = document.createElement("div");
								(O.className = "show-file-icons"),
									(O.style.display = "inline-flex"),
									(O.style.alignItems = "center"),
									(O.style.justifyContent = "center"),
									(O.style.verticalAlign = "text-bottom"),
									(O.style.marginRight = "-2px"),
									(O.style.height = "16px");
								const B = document.createElement("div");
								(B.className = "monaco-icon-label"), (B.style.height = "100%");
								const U = () => {
									const F = (0, u.$BDb)(
										this.w,
										this.u,
										this.g,
										n.FileKind.FILE,
									);
									B.className = [
										"monaco-icon-label",
										"height-override-important",
									]
										.concat(F)
										.join(" ");
								};
								U();
								const z = setTimeout(() => {
									U();
								}, 3e3);
								this.D({ dispose: () => clearTimeout(z) }),
									O.appendChild(B),
									R.appendChild(O),
									R.appendChild(document.createTextNode(A));
							}
						} catch ($) {
							console.error(
								"[CURSOR PREDICTION] Error updating code block:",
								$,
							);
						} finally {
							y.dispose();
						}
					}
					async z() {
						await (0, b.$0gc)({
							uri: this.g,
							fileService: this.q,
							editorService: this.r,
							editorGroupsService: this.s,
						});
					}
					getId() {
						return "cursor-prediction-non-visible-editor-indicator";
					}
					getDomNode() {
						return this.a;
					}
					getPosition() {
						return {
							preference: E.OverlayWidgetPositionPreference.BOTTOM_RIGHT_CORNER,
						};
					}
					dispose() {
						if (this.f) return;
						super.dispose(), this.j.removeOverlayWidget(this);
						const y = this.c.getModel();
						y && y.dispose(), this.c.dispose(), this.a.remove(), (this.f = !0);
					}
				};
				(e.$ffd = s),
					(e.$ffd = s =
						Ne(
							[
								j(3, c.$gj),
								j(4, g.$Li),
								j(5, n.$ll),
								j(6, f.$IY),
								j(7, o.$EY),
								j(8, h.$MO),
								j(9, m.$nM),
								j(10, a.$QO),
							],
							s,
						));
			},
		),
		define(
			de[3616],
			he([1, 0, 2, 2, 13, 58, 236, 299]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$a$b = void 0);
				const m = (0, t.template)('<span class="markdown-inline-code">');
				e.$a$b = {
					elementType: C.MarkdownElementType.INLINE_CODE,
					start: (r, u) => {
						if (r.length === 1) return { state: "failed" };
						const a = r[r.length - 1];
						return a.type === C.MarkdownElementType.INLINE_CODE ||
							a.type === C.MarkdownElementType.BLOCK_CODE ||
							a.type === C.MarkdownElementType.BLOCK_LATEX ||
							a.type === C.MarkdownElementType.BASH_RESPONSE
							? { state: "failed" }
							: u.startsWith("`")
								? {
										state: "success",
										length: 1,
										elementType: C.MarkdownElementType.INLINE_CODE,
										startOrEnd: "start",
									}
								: { state: "failed" };
					},
					end: (r, u) =>
						r[r.length - 1].type !== C.MarkdownElementType.INLINE_CODE
							? { state: "failed" }
							: u.startsWith("`")
								? {
										state: "success",
										length: 1,
										elementType: C.MarkdownElementType.INLINE_CODE,
										startOrEnd: "end",
									}
								: { state: "failed" },
					createElement: (r, u, a, h, c) => {
						const n = (() => {
								const o = m();
								return (
									o.style.setProperty(
										"background-color",
										"var(--vscode-textCodeBlock-background)",
									),
									o.style.setProperty("border-radius", "4px"),
									o.style.setProperty("padding", "1px 4px"),
									o.style.setProperty("word-break", "break-word"),
									(0, i.effect)(() =>
										h.configurationService.getValue("editor.fontFamily") != null
											? o.style.setProperty(
													"font-family",
													h.configurationService.getValue("editor.fontFamily"),
												)
											: o.style.removeProperty("font-family"),
									),
									o
								);
							})(),
							g = {
								type: C.MarkdownElementType.INLINE_CODE,
								ref: n,
								endElementHook: () => {
									const o = async (y) => {
											const $ = h.workspaceContextService.resolveRelativePath(
													y.relativeWorkspacePath,
												),
												v = await h.textModelService.createModelReference($),
												S = v.object.textEditorModel;
											try {
												const I = y.roughLineNumber,
													T = Math.max(1, I - 10),
													P = Math.min(S.getLineCount(), I + 10),
													k = S.getValueInRange({
														startLineNumber: T,
														startColumn: 1,
														endLineNumber: P,
														endColumn: S.getLineMaxColumn(P),
													}).split(`
`),
													L = Math.floor(k.length / 2);
												for (let D = 0; D < k.length; D++) {
													let M = L;
													if (D % 2 === 0) {
														let R = Math.floor(D / 2);
														M = Math.min(k.length - 1, M + R);
													} else {
														let R = Math.floor(D / 2);
														M = Math.max(0, M - R);
													}
													const A = k[M].indexOf(y.symbolSearchString);
													if (A !== -1)
														return {
															location: {
																uri: $,
																range: {
																	startLineNumber: T + M,
																	startColumn: A + 1,
																	endLineNumber: T + M,
																	endColumn:
																		A + y.symbolSearchString.length + 1,
																},
															},
															good: !0,
														};
												}
												return {
													location: {
														uri: $,
														range: {
															startLineNumber: I,
															startColumn: 1,
															endLineNumber: I,
															endColumn: 1,
														},
													},
													good: !1,
												};
											} catch {
											} finally {
												v.dispose();
											}
										},
										f = async (y) => {
											const $ =
												h.workspaceContextService.resolveRelativePath(y);
											if (
												(await h.fileService.exists($)) &&
												(await h.fileService.stat($)).isFile
											)
												return $;
										},
										b = (y) => {
											if (!c.symbolLinks) return !1;
											let v;
											for (const S of c.symbolLinks ?? [])
												S.symbolName === y && (v = S);
											return v
												? ((n.onclick = () => {
														o(v)
															.then(async (S) => {
																if (S) {
																	const { location: I, good: T } = S,
																		P = await h.commandService.executeCommand(
																			E.$BV,
																			I,
																			v,
																			!T,
																		);
																	P &&
																		((v.relativeWorkspacePath =
																			P.relativeWorkspacePath),
																		(v.roughLineNumber = P.roughLineNumber),
																		(v.symbolSearchString =
																			P.symbolSearchString));
																} else
																	(n.style.cursor = "default"),
																		(n.style.color = "inherit");
															})
															.catch(console.log);
													}),
													(n.style.cursor = "pointer"),
													(n.style.color = "var(--vscode-textLink-foreground)"),
													!0)
												: !1;
										},
										s = (y) => {
											if (!c.fileLinks) return !1;
											let v;
											for (const S of c.fileLinks ?? [])
												S.displayName === y && (v = S);
											return v
												? ((n.onclick = () => {
														const S =
															h.workspaceContextService.resolveRelativePath(
																v.relativeWorkspacePath,
															);
														(0, d.$9gc)(h, { filePathOrUri: S });
													}),
													(n.style.cursor = "pointer"),
													(n.style.color = "var(--vscode-textLink-foreground)"),
													!0)
												: !1;
										};
									let l = { hasFound: !1 };
									return (
										(0, w.createRoot)((y) => {
											a.push({ dispose: () => y() }),
												(0, w.createEffect)(() => {
													const $ = n.textContent ?? n.innerHTML,
														v = s($);
													if (((l.hasFound = v || l.hasFound), !v)) {
														const S = b($);
														(l.hasFound = S || l.hasFound),
															S ||
																f($)
																	.then((I) => {
																		l.hasFound ||
																			(I && n.onclick === null
																				? ((n.onclick = () =>
																						(0, d.$9gc)(h, {
																							filePathOrUri: I,
																						})),
																					(n.style.cursor = "pointer"),
																					(n.style.color =
																						"var(--vscode-textLink-foreground)"))
																				: ((n.style.cursor = "default"),
																					(n.style.color = "inherit")));
																	})
																	.catch(console.log);
													}
												});
										}),
										""
									);
								},
							};
						r[r.length - 1].ref.appendChild(n), r.push(g);
					},
				};
			},
		),
		define(
			de[1318],
			he([
				1, 0, 21, 25, 225, 193, 47, 126, 9, 299, 298, 140, 28, 272, 418, 246,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.INLINE_DIFF_STORAGE_KEY = void 0),
					(e.getComposerDataStorageScope = b),
					(e.COMPOSER_DATA_STORAGE_KEY = s),
					(e.deserializeComposerDataFromString = $),
					(e.disposeComposerData = v),
					(e.getComposerDataToSave = S),
					(e.serializeComposerDataToString = I),
					(e.createComposerData = P),
					(e.getStore = k);
				function p(L) {
					if (L.type !== "user") return;
					const D = (0, u.$2gc)();
					let M;
					(L.dropdownAdvancedCodebaseSearchBehavior ||
						L.dropdownAdvancedCodebaseContextOptions ||
						L.advancedCodebaseContextOptions) &&
						(M = {
							searchBehavior:
								L.dropdownAdvancedCodebaseSearchBehavior ||
								L.advancedCodebaseContextOptions?.reranker ===
									c.RerankerAlgorithm.LULEA
									? "reranker"
									: "embeddings",
							options:
								L.advancedCodebaseContextOptions ||
								L.dropdownAdvancedCodebaseContextOptions,
						});
					for (const N of u.$Xgc) {
						const A = N;
						if ((0, u.$Ygc)(A)) {
							const R = L[A];
							Array.isArray(R) && (D[A] = R);
						} else {
							const R = L[A];
							if (R !== void 0)
								if (A === "usesCodebase") D.usesCodebase = M ?? R;
								else
									switch (A) {
										case "gitDiff":
										case "gitDiffFromBranchToMain":
										case "useWeb":
										case "useLinterErrors":
										case "useDiffReview":
										case "useContextPicking":
										case "useRememberThis":
											D[A] = R;
											break;
										case "diffHistory":
											D.diffHistory = R;
											break;
									}
						}
					}
					return L.mentions && (D.mentions = L.mentions), D;
				}
				function o(L) {
					return L.tabs
						.filter((D) => D.tabState === a.TabState.chat)
						.map((D) => {
							const M = (0, C.$9g)(),
								N = (0, w.createEmptyComposer)(M, "chat"),
								A = D.bubbles
									.map((B) => {
										const U = f();
										if (B.type === "user") {
											const z = B;
											return {
												...U,
												type: d.ConversationMessage_MessageType.HUMAN,
												text: z.text || "",
												richText: z.richText,
												bubbleId: z.id,
												context: p(z),
											};
										} else if (B.type === "ai") {
											const z = B;
											return {
												...U,
												type: d.ConversationMessage_MessageType.AI,
												text: z.text || "",
												bubbleId: z.id,
												codeBlocks: [],
											};
										}
									})
									.filter(h.$tg),
								R = A[A.length - 1];
							R &&
								R.type === d.ConversationMessage_MessageType.HUMAN &&
								(A.pop(),
								(N.text = R.text || ""),
								(N.richText = R.richText || ""),
								(N.context = R.context || (0, u.$2gc)()));
							const O = D.lastSendTime ?? Date.now();
							return {
								...N,
								name: D.chatTitle,
								conversation: A,
								createdAt: O,
								lastUpdatedAt: O,
								tabs: (0, w.createEmptyComposerTabs)(),
								selectedTabIndex: 1,
								codeBlockData: {},
								inlineDiffIdMap: {},
								newlyCreatedFiles: [],
								newlyCreatedFolders: [],
								capabilities: [],
								status: "completed",
							};
						});
				}
				function f() {
					return {
						type: d.ConversationMessage_MessageType.HUMAN,
						approximateLintErrors: [],
						lints: [],
						codebaseContextChunks: [],
						commits: [],
						pullRequests: [],
						attachedCodeChunks: [],
						assistantSuggestedDiffs: [],
						gitDiffs: [],
						interpreterResults: [],
						images: [],
						attachedFolders: [],
						attachedFoldersNew: [],
						bubbleId: (0, C.$9g)(),
						userResponsesToSuggestedCodeBlocks: [],
						suggestedCodeBlocks: [],
						diffsForCompressingFiles: [],
						relevantFiles: [],
						toolResults: [],
						notepads: [],
						capabilities: [],
						editTrailContexts: [],
						multiFileLinterErrors: [],
						diffHistories: [],
						isAgentic: !1,
						recentLocationsHistory: [],
						recentlyViewedFiles: [],
						fileDiffTrajectories: [],
						existedSubsequentTerminalCommand: !1,
						existedPreviousTerminalCommand: !1,
						docsReferences: [],
						webReferences: [],
						attachedFoldersListDirResults: [],
					};
				}
				function b(L) {
					return L.getWorkbenchState() === i.WorkbenchState.EMPTY
						? t.StorageScope.APPLICATION
						: t.StorageScope.WORKSPACE;
				}
				function s(L) {
					return `composerData:${L}`;
				}
				e.INLINE_DIFF_STORAGE_KEY = "inlineDiffsData";
				function l(L, D) {
					const M = I(L),
						N = [1e3, 5e3, 1e4, 2e4];
					let A = 0;
					const R = async () => {
						try {
							await new Promise((O) => setTimeout(O, Math.random() * 40 + 10)),
								await D.cursorDiskKVSet(s(L.composerId), M);
						} catch (O) {
							if (A < N.length)
								return (
									console.warn(
										`[composer] Failed to migrate composer data (attempt ${A + 1}), retrying in ${N[A] / 1e3}s`,
										O,
									),
									await new Promise((B) => setTimeout(B, N[A])),
									A++,
									R()
								);
							console.error(
								"[composer] Failed to migrate composer data after all retries",
								O,
							);
						}
					};
					R().catch((O) => {
						console.error(
							"[composer] Unexpected error during migration retry",
							O,
						);
					});
				}
				function y(L, D) {
					let M = L.hasMigratedChatData ?? !1,
						N = L.hasMigratedComposerData ?? !1,
						A = L.hasMigratedUseAutoContext,
						R = !1,
						O = L.allComposers;
					if (
						(N ||
							((O = O.map((x) =>
								x.type === "head"
									? x
									: (l(x, D.storageService), (0, w.getComposerHeaderData)(x)),
							)),
							(N = !0),
							(R = !0)),
						D.shouldMigrateChatData &&
							D.workspaceContextService &&
							D.storageService)
					) {
						const x = n.AIChatConstants.CHAT_REACTIVE_STORAGE_ID,
							H = b(D.workspaceContextService),
							q = D.storageService.get(x, H);
						if (q)
							try {
								const V = JSON.parse(q);
								V &&
									((O = [
										...o(V).map(
											(J) => (
												l(J, D.storageService), (0, w.getComposerHeaderData)(J)
											),
										),
										...O,
									]),
									(M = !0),
									(R = !0));
							} catch (V) {
								console.error("[composer] Error parsing chat data", V);
							}
					}
					A ||
						(D.reactiveStorageService.setApplicationUserPersistentStorage(
							"composerState",
							"useAutoContext",
							!0,
						),
						(A = !0)),
						(O = (0, g.sortComposers)(O));
					let B = L.selectedComposerId,
						U = L.selectedChatId;
					const z = O.some((x) => x.composerId === B && x.forceMode !== "chat"),
						F = O.some((x) => x.composerId === U && x.forceMode === "chat");
					if (!z) {
						const x = (0, C.$9g)(),
							H = (0, w.createEmptyComposer)(x);
						l(H, D.storageService),
							(B = x),
							(O = [(0, w.getComposerHeaderData)(H), ...O]),
							(R = !0);
					}
					if (!F) {
						const x = (0, C.$9g)(),
							H = (0, w.createEmptyComposer)(x, "chat");
						l(H, D.storageService),
							(U = x),
							(O = [(0, w.getComposerHeaderData)(H), ...O]),
							(R = !0);
					}
					return (
						(L = {
							allComposers: O,
							selectedComposerId: B,
							selectedChatId: U,
							hasMigratedChatData: M,
							hasMigratedUseAutoContext: A,
							hasMigratedComposerData: N,
							selectedComposerHandle: void 0,
							selectedComposerHandlePromise: void 0,
							selectedChatHandle: void 0,
							selectedChatHandlePromise: void 0,
						}),
						[L, { didMigrateComposerOrChatData: R }]
					);
				}
				function $(L) {
					const D = JSON.parse(L),
						M = { ...(0, w.createEmptyComposer)(D.composerId), ...D };
					(M.context = { ...(0, u.$2gc)(), ...(0, r.$ahc)(D.context) }),
						M.conversation.forEach((A) => {
							A.context && (A.context = (0, r.$ahc)(A.context)),
								A.codeBlocks &&
									(A.codeBlocks = A.codeBlocks.map((R) => ({
										uri: m.URI.revive(R.uri),
										version: R.version,
										codeBlockIdx: R.codeBlockIdx,
									})));
						}),
						(M.codeBlockData = Object.fromEntries(
							Object.entries(D.codeBlockData).map(([A, R]) => [
								A,
								R.map((O) => {
									O.version === 0 &&
										O.originalModelLines !== void 0 &&
										(M.originalModelLines[A] = O.originalModelLines);
									let B = O.status;
									B === "generating"
										? (B = "aborted")
										: B === "applying" && (B = "cancelled");
									const U = m.URI.revive(O.uri);
									return { ...O, uri: U, status: B };
								}),
							]),
						)),
						(M.tabs = M.tabs.map((A) =>
							A.type === "code" ? { ...A, uri: m.URI.revive(A.uri) } : A,
						)),
						(M.conversation = M.conversation.map((A) => {
							const R = A.codeBlocks?.map((F) => ({
									uri: m.URI.revive(F.uri),
									version: F.version,
									codeBlockIdx: F.codeBlockIdx,
								})),
								O = A.checkpoint
									? (0, w.reviveCheckpoint)(A.checkpoint)
									: void 0,
								B = A.capabilityStatuses
									? {
											...(0, w.createEmptyCapabilityStatuses)(),
											...Object.fromEntries(
												Object.entries(A.capabilityStatuses)
													.filter(([F]) => F !== "process-codeblock")
													.map(([F, x]) => [
														F,
														x.map((H) => ({
															...H,
															status:
																H.status === "generating"
																	? "aborted"
																	: H.status,
														})),
													]),
											),
										}
									: void 0,
								U = A.capabilityCodeBlocks
									? A.capabilityCodeBlocks.map((F) => ({
											...F,
											status: F.status === "generating" ? "aborted" : F.status,
										}))
									: void 0,
								z =
									A.type === d.ConversationMessage_MessageType.HUMAN
										? {
												...(0, u.$2gc)(),
												...(A.context ? (0, r.$ahc)(A.context) : {}),
											}
										: void 0;
							return {
								...f(),
								...A,
								codeBlocks: R,
								capabilityStatuses: B,
								capabilityCodeBlocks: U,
								context: z,
								checkpoint: O,
							};
						}));
					let N = M.status;
					return (
						N === "generating" && (N = "aborted"),
						(M.status = N),
						M.tabs[0].type !== "extra" &&
							(M.tabs = [{ type: "extra" }, ...M.tabs]),
						(M.selectedTabIndex = 1),
						(M.hasLoaded = !1),
						M
					);
				}
				function v(L) {
					for (const D of L.capabilities) D.dispose();
				}
				function S(L, D = !0) {
					const {
						composerId: M,
						name: N,
						text: A,
						richText: R,
						conversation: O,
						status: B,
						lastUpdatedAt: U,
						createdAt: z,
						userResponsesToSuggestedCodeBlocks: F,
						codeBlockData: x,
						hasChangedContext: H,
						backgroundInfo: q,
						capabilities: V,
						tabs: G,
						forceMode: K,
						isAgentic: J,
						originalModelLines: W,
					} = L;
					let X = L.context,
						Y;
					G[0].type === "extra" ? (Y = G.slice(1)) : (Y = G);
					const ie = Object.fromEntries(
							Object.entries(x).map(([_, te]) => [
								_,
								te.map((Q) => {
									let Z = Q.status;
									return (
										Z === "generating"
											? (Z = "aborted")
											: Z === "applying" && (Z = "cancelled"),
										D
											? {
													uri: Q.uri,
													version: Q.version,
													content: Q.content,
													languageId: Q.languageId,
													startLine: Q.startLine,
													endLine: Q.endLine,
													status: Z,
													isNotApplied: Q.isNotApplied,
													originalModelDiffWrtV0: Q.originalModelDiffWrtV0,
													newModelDiffWrtV0: Q.newModelDiffWrtV0,
													isNoOp: Q.isNoOp,
												}
											: { ...Q, status: Z }
									);
								}),
							]),
						),
						ne = B === "generating" ? "aborted" : B,
						ee = O.map((_) => {
							if (
								_.capabilityCodeBlocks?.some(
									(oe) => oe.type === w.DiffReviewCodeBlockAlias,
								)
							)
								return;
							const {
									capabilityStatuses: te,
									capabilityCodeBlocks: Q,
									recentlyViewedFiles: Z,
									...se
								} = _,
								re = te
									? Object.fromEntries(
											Object.entries(te)
												.filter(([oe]) => oe !== "process-codeblock")
												.map(([oe, ae]) => [
													oe,
													ae.map((pe) => ({
														...pe,
														status:
															pe.status === "generating"
																? "aborted"
																: pe.status,
													})),
												]),
										)
									: void 0,
								le = Q
									? Q.map((oe) => ({
											...oe,
											status:
												oe.status === "generating" ? "aborted" : oe.status,
										}))
									: void 0;
							if (D) {
								const {
									attachedCodeChunks: oe,
									codebaseContextChunks: ae,
									commits: pe,
									pullRequests: $e,
									gitDiffs: ye,
									assistantSuggestedDiffs: ue,
									interpreterResults: fe,
									images: me,
									attachedFolders: ve,
									approximateLintErrors: ge,
									attachedFoldersNew: be,
									lints: Ce,
									userResponsesToSuggestedCodeBlocks: Le,
									diffsForCompressingFiles: Fe,
									toolResults: Oe,
									notepads: xe,
									capabilities: He,
									...Ke
								} = se;
								return {
									...Ke,
									capabilityStatuses: re,
									capabilityCodeBlocks: le,
								};
							} else
								return {
									...se,
									capabilityStatuses: re,
									capabilityCodeBlocks: le,
								};
						}).filter(h.$tg);
					return (
						(X = { ...X, terminalFiles: void 0 }),
						{
							...(0, w.createEmptyComposer)(),
							composerId: M,
							name: N,
							text: A,
							richText: R,
							conversation: ee,
							status: ne,
							lastUpdatedAt: U,
							createdAt: z,
							context: X,
							userResponsesToSuggestedCodeBlocks: F,
							codeBlockData: ie,
							tabs: Y,
							hasChangedContext: H,
							backgroundInfo: q,
							capabilities: V,
							forceMode: K === "chat" ? "chat" : "edit",
							isAgentic: J,
							originalModelLines: W,
						}
					);
				}
				function I(L) {
					return JSON.stringify(S(L));
				}
				function T(L, D, M, N, A, R, O) {
					const B = (0, w.createEmptyComposer)(L, "edit"),
						U = (0, w.createEmptyComposer)(D, "chat");
					return (
						l(B, M),
						l(U, M),
						{
							allComposers: [
								(0, w.getComposerHeaderData)(B),
								(0, w.getComposerHeaderData)(U),
							],
							selectedComposerId: L,
							selectedChatId: D,
							hasMigratedChatData: A,
							hasMigratedUseAutoContext: R,
							hasMigratedComposerData: O,
							selectedComposerHandle: void 0,
							selectedComposerHandlePromise: void 0,
							selectedChatHandle: void 0,
							selectedChatHandlePromise: void 0,
						}
					);
				}
				function P(L, D, M, N, A) {
					const R =
						M.getWorkbenchState() === i.WorkbenchState.EMPTY
							? t.StorageScope.APPLICATION
							: t.StorageScope.WORKSPACE;
					let O;
					O = L.get(A, R);
					let B = !1,
						U = !1,
						z = !1,
						F = !1,
						x = {
							allComposers: [],
							selectedComposerId: "",
							selectedChatId: "",
							hasMigratedChatData: B,
							hasMigratedUseAutoContext: U,
							hasMigratedComposerData: z,
							selectedComposerHandle: void 0,
							selectedComposerHandlePromise: void 0,
							selectedChatHandle: void 0,
							selectedChatHandlePromise: void 0,
						};
					if (O && !0)
						try {
							let K = JSON.parse(O);
							if (
								((B = !!K.hasMigratedChatData),
								(U = !!K.hasMigratedUseAutoContext),
								K)
							) {
								const [J, W] = y(K, {
									shouldMigrateChatData: !B,
									workspaceContextService: M,
									storageService: L,
									reactiveStorageService: D,
									composerDataHandleManager: N,
								});
								(x = J), (F = W.didMigrateComposerOrChatData);
							} else
								throw new Error("[composer] No stored composers data found");
						} catch (K) {
							console.error(
								"[composer] Error parsing stored composers data:",
								K,
							);
							const J = (0, C.$9g)();
							x = T(J, (0, C.$9g)(), L, D, B, U, z);
						}
					else {
						const K = (0, C.$9g)();
						(F = !0), (x = T(K, (0, C.$9g)(), L, D, B, U, z));
					}
					console.log(
						"[composer] initial composers",
						JSON.parse(JSON.stringify(x)),
					);
					const [q, V] = (0, E.createStore)(x);
					return [
						q,
						V,
						() => {
							const K = (0, C.$9g)(),
								J = (0, w.createEmptyComposer)(K),
								W = (0, C.$9g)(),
								X = (0, w.createEmptyComposer)(W, "chat");
							return (
								N.pushComposer(J),
								N.pushComposer(X),
								V("allComposers", [
									(0, w.getComposerHeaderData)(J),
									(0, w.getComposerHeaderData)(X),
								]),
								V("selectedComposerId", K),
								V("selectedChatId", W),
								J
							);
						},
						{
							shouldWaitFor10SecondsWhileReadingFromDiskAtStartup: F,
							fromDate: Date.now(),
						},
					];
				}
				function k(L) {
					return (0, E.createStore)(L);
				}
			},
		),
		define(
			de[3617],
			he([1, 0, 3, 668, 21, 45, 1318, 9]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.createComposerDataHandleManager = m);
				function m(h, c, n) {
					return h.createInstance(r, c, n);
				}
				let r = class extends t.$1c {
					constructor(c, n, g, p, o) {
						super(),
							(this.composerWasLoadedHook = c),
							(this.onInlineDiffsLoadedHook = n),
							(this.storageService = g),
							(this.aiAssertService = p),
							(this.reactiveStorageService = o),
							(this.loadedComposers = []),
							this.D(
								this.storageService.cursorDiskKVOnShouldSave(async () => {
									await Promise.allSettled([
										this.persistInlineDiffs(),
										...this.loadedComposers.map((f) =>
											this.persistLoadedComposer(f),
										),
									]);
								}),
							),
							this.loadInlineDiffs().catch((f) => {
								console.error("[composer] Error loading inline diffs:", f);
							});
					}
					async loadInlineDiffs() {
						try {
							const c = await this.storageService.cursorDiskKVGet(
								C.INLINE_DIFF_STORAGE_KEY,
							);
							if (c) {
								const n = JSON.parse(c).map((g) => ({
									composerId: g.composerId,
									version: g.version,
									uri: d.URI.revive(g.uri),
								}));
								await this.onInlineDiffsLoadedHook(n);
							}
						} catch (c) {
							console.error(
								"[composer] Error loading inline diffs from storage:",
								c,
							);
						}
					}
					async persistLoadedComposer(c) {
						await this.storageService.cursorDiskKVSet(
							this.getComposerDataStorageKey(c.data.composerId),
							(0, C.serializeComposerDataToString)(c.data),
						);
					}
					async persistInlineDiffs() {
						const n =
							this.reactiveStorageService.nonPersistentStorage.inlineDiffs
								.filter((g) => !!g.composerMetadata)
								.map((g) => ({
									composerId: g.composerMetadata?.composerId,
									version: g.composerMetadata?.version,
									uri: g.uri,
								}));
						await this.storageService.cursorDiskKVSet(
							C.INLINE_DIFF_STORAGE_KEY,
							JSON.stringify(n),
						);
					}
					getWeakHandleOptimistic(c) {
						const n = this.loadedComposers.find((g) => g.data.composerId === c);
						if (n)
							return new u(
								n.data.composerId,
								this,
								this.reactiveStorageService,
								!0,
							);
					}
					pushComposer(c) {
						const n = new a(c);
						this.loadedComposers.push(n);
						const g = new u(
							n.data.composerId,
							this,
							this.reactiveStorageService,
						);
						return (
							this.composerWasLoadedHook(
								new u(n.data.composerId, this, this.reactiveStorageService, !0),
							).catch((p) => {
								console.error("[composer] Error loading composer data:", p);
							}),
							this.aiAssertService.assert(
								this.loadedComposers.length < 20,
								"More than 20 loaded composers!",
								{ showOnlyOnce: !0 },
							),
							g
						);
					}
					deleteComposer(c) {
						const n = this.loadedComposers.find((g) => g.data.composerId === c);
						n &&
							(this.unloadComposer(n),
							this.storageService
								.cursorDiskKVSet(this.getComposerDataStorageKey(c), void 0)
								.then(() => {})
								.catch((g) => {
									console.error(
										"[composer] Error deleting composer data from disk:",
										g,
									);
								}));
					}
					unloadComposer(c) {
						(this.loadedComposers = this.loadedComposers.filter(
							(n) => n !== c,
						)),
							(0, C.disposeComposerData)(c.data);
					}
					async getHandle(c, n) {
						const g = this.loadedComposers.find((o) => o.data.composerId === c);
						if (g)
							return new u(
								g.data.composerId,
								this,
								this.reactiveStorageService,
							);
						let p = n ? Date.now() + n : Date.now() - 10;
						do {
							try {
								const o = await this.storageService.cursorDiskKVGet(
										this.getComposerDataStorageKey(c),
									),
									f = this.loadedComposers.find((b) => b.data.composerId === c);
								if (f)
									return new u(
										f.data.composerId,
										this,
										this.reactiveStorageService,
									);
								if (o) {
									const b = (0, C.deserializeComposerDataFromString)(o);
									return this.pushComposer(b);
								}
							} catch (o) {
								console.error("[composer] Error loading composer data:", o);
							}
							await new Promise((o) =>
								setTimeout(o, Math.min(100, (n ?? 400) / 4)),
							);
						} while (Date.now() < p);
					}
					getComposerDataStorageKey(c) {
						return (0, C.COMPOSER_DATA_STORAGE_KEY)(c);
					}
					maybeRemoveLoadedComposer(c) {
						c.numHandles === 0 &&
							this.persistLoadedComposer(c)
								.then(() => {
									c.numHandles === 0 && this.unloadComposer(c);
								})
								.catch((n) => {
									console.error(
										"[composer] Error persisting loaded composer data:",
										n,
									);
								});
					}
					addHandle(c, n) {
						const g = this.loadedComposers.find((p) => p.data.composerId === n);
						g && g.addHandle(c);
					}
					removeHandle(c, n) {
						const g = this.loadedComposers.find((p) => p.data.composerId === n);
						g && (g.removeHandle(c), this.maybeRemoveLoadedComposer(g));
					}
					getLoadedComposer(c) {
						return this.loadedComposers.find((n) => n.data.composerId === c);
					}
					getLoadedComposers() {
						return this.loadedComposers.map((c) => c.data.composerId);
					}
				};
				r = Ne([j(2, w.$lq), j(3, i.$kcc), j(4, E.$0zb)], r);
				class u extends t.$1c {
					constructor(c, n, g, p = !1) {
						super(),
							(this.composerId = c),
							(this.composerDataHandleService = n),
							(this.reactiveStorageService = g),
							(this.isWeak = p),
							(this.setData = (...o) => {
								if (this.isDisposed)
									throw new Error(
										"[composer] Composer data handle is disposed",
									);
								const f = this.composerDataHandleService.getLoadedComposer(
									this.composerId,
								);
								if (!f) throw new Error("[composer] No loaded composer found");
								return f.setData(...o);
							}),
							(this.isDisposed = !1),
							p ||
								this.composerDataHandleService.addHandle(this, this.composerId);
					}
					clone() {
						return new u(
							this.composerId,
							this.composerDataHandleService,
							this.reactiveStorageService,
							this.isWeak,
						);
					}
					cloneWeak() {
						return new u(
							this.composerId,
							this.composerDataHandleService,
							this.reactiveStorageService,
							!0,
						);
					}
					get data() {
						if (this.isDisposed)
							throw new Error("[composer] Composer data handle is disposed");
						const c = this.composerDataHandleService.getLoadedComposer(
							this.composerId,
						);
						if (!c) throw new Error("[composer] No loaded composer found");
						return c.data;
					}
					dispose() {
						this.isDisposed ||
							((this.isDisposed = !0),
							super.dispose(),
							this.composerDataHandleService.removeHandle(
								this,
								this.composerId,
							));
					}
				}
				class a {
					addHandle(c) {
						this.handles.push(c);
					}
					removeHandle(c) {
						this.handles = this.handles.filter((n) => n !== c);
					}
					get numHandles() {
						return this.handles.length;
					}
					constructor(c) {
						(this.handles = []),
							([this.data, this.setData] = (0, C.getStore)(c));
					}
				}
			},
		),
		define(
			de[1870],
			he([1, 0, 193, 47, 83, 298, 140, 21, 25, 205, 299, 225, 169]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$q9b = void 0),
					(e.$r9b = c),
					(e.$s9b = n),
					(e.$t9b = g),
					(e.$u9b = p),
					(e.$v9b = o),
					(e.$w9b = f),
					(e.$x9b = b),
					(e.$q9b = 0);
				function c(s) {
					const l = g();
					return {
						tabId: s ?? (0, i.$9g)(),
						bubbles: [l],
						chatTitle: "New Notepad Chat",
						lastSendTime: void 0,
						tabState: C.TabState.chat,
						lastFocusedBubbleId: l.id,
					};
				}
				function n() {
					return {
						id: (0, i.$9g)(),
						type: C.BubbleType.AI_CHAT,
						messageType: w.PureMessage_MessageType.ASSISTANT,
						text: "",
					};
				}
				function g(s, l) {
					return {
						id: (0, i.$9g)(),
						type: C.BubbleType.USER_CHAT,
						messageType: w.PureMessage_MessageType.USER,
						text: s,
						richText: l,
						context: (0, E.$2gc)(),
					};
				}
				function p(s, l) {
					const y = c();
					return {
						id: s ?? (0, i.$9g)(),
						name: l ?? "New Notepad",
						text: "",
						context: (0, E.$2gc)(),
						tabs: [y],
						selectedTabId: y.tabId,
						createdAt: Date.now(),
						verticalTopPanePercentage: 75,
						bottomRightPanePercentage: 25,
						shouldShowBottomPane: !1,
						inputBoxDelegate: new r.$Zzb(),
						inputBoxDelegateMap: {},
					};
				}
				function o(s, l, y) {
					const $ =
							l.getWorkbenchState() === m.WorkbenchState.EMPTY
								? d.StorageScope.APPLICATION
								: d.StorageScope.WORKSPACE,
						v = s.get(y, $);
					let S = { notepads: {} };
					if (v)
						try {
							(S = JSON.parse(v)), S.notepads || (S.notepads = {});
							for (const P in S.notepads) {
								const k = S.notepads[P];
								if (
									((k.inputBoxDelegate = new r.$Zzb()),
									(k.inputBoxDelegateMap = {}),
									(k.context = (0, u.$ahc)(k.context)),
									k.tabs.length === 0)
								) {
									const L = c();
									k.tabs.push(L), (k.selectedTabId = L.tabId);
								} else k.selectedTabId || (k.selectedTabId = k.tabs[0].tabId);
								k.tabs.find((L) => L.tabId === k.selectedTabId) ||
									(k.selectedTabId = k.tabs[0].tabId);
								for (const L of k.tabs) {
									L.bubbles.length === 0 && L.bubbles.push(g());
									for (const D of L.bubbles)
										k.inputBoxDelegateMap[D.id] ||
											(k.inputBoxDelegateMap[D.id] = new r.$Zzb()),
											D.type === C.BubbleType.USER_CHAT &&
												(D.context
													? (D.context = (0, u.$ahc)(D.context))
													: (D.context = (0, E.$2gc)()));
									L.bubbles[L.bubbles.length - 1].type ===
										C.BubbleType.AI_CHAT && L.bubbles.push(g());
								}
								(k.verticalTopPanePercentage =
									k.verticalTopPanePercentage ?? 75),
									(k.bottomRightPanePercentage =
										k.bottomRightPanePercentage ?? 25),
									(k.shouldShowBottomPane = k.shouldShowBottomPane ?? !0);
							}
						} catch (P) {
							console.error(
								"[notepad] Failed to parse stored notepad data:",
								P,
							);
						}
					const [I, T] = (0, t.createStore)(S);
					return [I, T];
				}
				function f(s, l, y, $) {
					if (s.hasMigratedComposerProjects) return;
					let v = y.get(
						h.COMPOSER_PROJECTS_REACTIVE_STORAGE_ID,
						(0, a.getComposerDataStorageScope)($),
					);
					if (!v) return;
					let S;
					try {
						const I = JSON.parse(v);
						if (!Array.isArray(I))
							throw new Error("Parsed composer projects data is not an array");
						S = I.map((T) => {
							const P = p(void 0, T.name);
							if (
								((P.text = T.text ?? ""),
								(P.createdAt = T.createdAt ?? Date.now()),
								(P.lastUpdatedAt = T.lastUpdatedAt),
								T.focusedFiles)
							) {
								P.context.fileSelections = T.focusedFiles.map((L) => ({
									uri: L.uri,
								}));
								const k = {};
								T.focusedFiles.forEach((L) => {
									if (L.decorations) {
										const D = (0, E.$Zgc)("fileSelections", { uri: L.uri });
										k[D] = L.decorations.map((M) => ({
											uuid: M.decorationId,
											defaultRange: M.defaultRange
												? {
														startLineNumber: M.defaultRange.startLineNumber,
														startColumn: M.defaultRange.startColumn,
														endLineNumber: M.defaultRange.endLineNumber,
														endColumn: M.defaultRange.endColumn,
													}
												: void 0,
										}));
									}
								}),
									(P.context.mentions.fileSelections = k);
							}
							return (
								T.codeSelections && (P.context.selections = T.codeSelections), P
							);
						});
					} catch (I) {
						console.error(
							"[notepad] Failed to parse stored composer projects:",
							I,
						),
							(S = void 0);
					}
					console.log("[notepad] newNotepads", S),
						S &&
							S.forEach((I) => {
								l("notepads", I.id, I);
							}),
						l("hasMigratedComposerProjects", !0);
				}
				function b(s, l, y) {
					s.remove(y, (0, a.getComposerDataStorageScope)(l));
				}
			},
		),
		define(
			de[3618],
			he([1, 0, 3, 20, 21, 25, 558, 467, 1870]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zAc = void 0);
				let r = class extends t.$1c {
					get notepadDataStorageID() {
						return C.$A9b;
					}
					constructor(a, h) {
						super(),
							(this.a = a),
							(this.b = h),
							([this.notepadsData, this.setNotepadsData] = (0, m.$v9b)(
								this.a,
								this.b,
								this.notepadDataStorageID,
							)),
							this.D(
								this.a.onWillSaveState(() => {
									this.saveNotepads();
								}),
							),
							(0, m.$w9b)(
								this.notepadsData,
								this.setNotepadsData,
								this.a,
								this.b,
							);
					}
					get selectedNotepad() {
						const a = this.selectedNotepadId;
						if (a) return this.getNotepadData(a);
					}
					get selectedNotepadId() {}
					updateSelectedNotepad(a) {
						this.selectedNotepadId &&
							this.updateNotepadData(this.selectedNotepadId, a);
					}
					get selectedTab() {
						const a = this.selectedNotepad;
						if (a && a.selectedTabId)
							return this.getTabData(a.id, a.selectedTabId);
					}
					get selectedTabId() {
						return this.selectedNotepad?.selectedTabId;
					}
					updateSelectedTab(a) {
						const h = this.selectedNotepad;
						h &&
							h.selectedTabId &&
							this.updateTabData(h.id, h.selectedTabId, a);
					}
					resetNotepads() {
						const a = (0, m.$u9b)();
						return this.setNotepadsData({ notepads: { [a.id]: a } }), a;
					}
					getNotepadData(a) {
						return this.notepadsData.notepads[a];
					}
					updateNotepadData(a, h) {
						this.setNotepadsData("notepads", a, (c) => ({ ...c, ...h }));
					}
					getTabData(a, h) {
						return this.getNotepadData(a)?.tabs.find((n) => n.tabId === h);
					}
					updateTabData(a, h, c) {
						this.setNotepadsData(
							"notepads",
							a,
							"tabs",
							(n) => n.tabId === h,
							(n) => ({ ...n, ...c }),
						);
					}
					getBubbleData(a, h, c) {
						return this.getTabData(a, h)?.bubbles.find((g) => g.id === c);
					}
					updateBubbleData(a, h, c, n) {
						this.setNotepadsData(
							"notepads",
							a,
							"tabs",
							(g) => g.tabId === h,
							"bubbles",
							(g) => g.id === c,
							(g) => ({ ...g, ...n }),
						);
					}
					saveNotepads() {
						const a = JSON.stringify({
							...this.notepadsData,
							notepadDataVersion: m.$q9b,
						});
						this.a.store(
							this.notepadDataStorageID,
							a,
							w.StorageScope.WORKSPACE,
							w.StorageTarget.MACHINE,
						);
					}
				};
				(e.$zAc = r),
					(e.$zAc = r = Ne([j(0, w.$lq), j(1, E.$Vi)], r)),
					(0, i.$lK)(d.$y9b, r, i.InstantiationType.Delayed);
			},
		),
		define(
			de[3619],
			he([1, 0, 58, 11, 10, 57, 40, 41]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Lyc = void 0);
				class m extends i.$3X {
					static {
						this.ID = "cursorai.action.askToEnableShadowWorkspace";
					}
					static {
						this.LABEL = "Ask to Enable Shadow Workspace";
					}
					constructor() {
						super({
							id: m.ID,
							title: { value: m.LABEL, original: m.LABEL },
							f1: !1,
						});
					}
					async run(u, a, ...h) {
						const c = u.get(E.$GO),
							n = u.get(w.$gj),
							g = u.get(d.$7rb);
						return (
							await c.prompt({
								type: C.Severity.Info,
								message: "Enable the Shadow Workspace?",
								detail: `${a} The shadow workspace is a hidden window where Cursor can locally refine your code in the background. This will increase the memory usage of Cursor.`,
								buttons: [
									{
										label: "Enable",
										run: () => (n.updateValue(t.$KW, !0), !0),
									},
									{
										label: "Learn More...",
										run: () => (
											g.open(
												"https://docs.cursor.com/advanced/shadow-workspace",
											),
											!1
										),
									},
								],
								cancelButton: { label: "Cancel", run: () => !1 },
							})
						).result;
					}
				}
				(e.$Lyc = m), (0, i.$4X)(m);
			},
		),
		
import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/browser/ui/sash/sash.js';
import '../../../../../base/browser/ui/splitview/splitview.js';
import '../../../../../base/common/color.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/keyCodes.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/network.js';
import '../../../../../base/common/resources.js';
import '../../../../browser/widget/codeEditor/embeddedCodeEditorWidget.js';
import '../../../../common/core/range.js';
import '../../../../common/editorCommon.js';
import '../../../../common/model.js';
import '../../../../common/model/textModel.js';
import '../../../../common/languages.js';
import '../../../../common/languages/modesRegistry.js';
import '../../../../common/services/resolverService.js';
import './referencesTree.js';
import '../../../peekView/browser/peekView.js';
import '../../../../../nls.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/keybinding/common/keybinding.js';
import '../../../../../platform/label/common/label.js';
import '../../../../../platform/list/browser/listService.js';
import '../../../../../platform/theme/common/themeService.js';
import '../referencesModel.js';
import '../../../documentSymbols/browser/outlineModel.js';
import '../../../../../base/common/cancellation.js';
import '../../../../../workbench/contrib/notebook/browser/viewModel/notebookOutlineEntryFactory.js';
import '../../../../../base/browser/ui/actionbar/actionbar.js';
import '../../../../../base/common/actions.js';
import '../../../../../base/common/themables.js';
import '../../../../../base/common/codicons.js';
import '../../../../../workbench/contrib/composer/browser/composer.js';
import '../../../../../workbench/services/selectedContext/browser/selectedContextData.js';
import '../../../../../workbench/contrib/aichat/browser/codeSelections.js';
import '../../../../../workbench/services/ai/common/dataScrubbingService.js';
import '../../../../../workbench/contrib/composer/browser/constants.js';
import '../../../../../css!vs/editor/contrib/gotoSymbol/browser/peek/referencesWidget.js';
define(
			de[3604],
			he([
				1, 0, 7, 277, 279, 97, 6, 27, 3, 23, 19, 281, 17, 98, 64, 122, 74, 172,
				42, 2833, 255, 4, 5, 39, 73, 93, 35, 541, 204, 33, 1301, 105, 50, 26,
				14, 219, 298, 354, 356, 169, 2300,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*sash*/,
				w /*splitview*/,
				E /*color*/,
				C /*event*/,
				d /*keyCodes*/,
				m /*lifecycle*/,
				r /*network*/,
				u /*resources*/,
				a /*embeddedCodeEditorWidget*/,
				h /*range*/,
				c /*editorCommon*/,
				n /*model*/,
				g /*textModel*/,
				p /*languages*/,
				o /*modesRegistry*/,
				f /*resolverService*/,
				b /*referencesTree*/,
				s /*peekView*/,
				l /*nls*/,
				y /*instantiation*/,
				$ /*keybinding*/,
				v /*label*/,
				S /*listService*/,
				I /*themeService*/,
				T /*referencesModel*/,
				P /*outlineModel*/,
				k /*cancellation*/,
				L /*notebookOutlineEntryFactory*/,
				D /*actionbar*/,
				M /*actions*/,
				N /*themables*/,
				A /*codicons*/,
				R /*composer*/,
				O /*selectedContextData*/,
				B /*codeSelections*/,
				U /*dataScrubbingService*/,
				z /*constants*/,
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
		)

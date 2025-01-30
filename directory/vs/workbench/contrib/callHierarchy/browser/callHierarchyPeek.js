import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../editor/contrib/peekView/browser/peekView.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../common/callHierarchy.js';
import '../../../../platform/list/browser/listService.js';
import './callHierarchyTree.js';
import '../../../../nls.js';
import '../../../../editor/common/editorCommon.js';
import '../../../../editor/common/core/range.js';
import '../../../../base/browser/ui/splitview/splitview.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/event.js';
import '../../../services/editor/common/editorService.js';
import '../../../../editor/browser/widget/codeEditor/embeddedCodeEditorWidget.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/common/model.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../base/common/color.js';
import '../../../../base/browser/ui/tree/tree.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../css!vs/workbench/contrib/callHierarchy/browser/media/callHierarchy.js';
define(
			de[3260],
			he([
				1, 0, 255, 5, 978, 93, 3006, 4, 98, 17, 279, 7, 6, 18, 281, 42, 3, 64,
				35, 21, 97, 264, 11, 8, 92, 2389,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*peekView*/,
				i /*instantiation*/,
				w /*callHierarchy*/,
				E /*listService*/,
				C /*callHierarchyTree*/,
				d /*nls*/,
				m /*editorCommon*/,
				r /*range*/,
				u /*splitview*/,
				a /*dom*/,
				h /*event*/,
				c /*editorService*/,
				n /*embeddedCodeEditorWidget*/,
				g /*resolverService*/,
				p /*lifecycle*/,
				o /*model*/,
				f /*themeService*/,
				b /*storage*/,
				s /*color*/,
				l /*tree*/,
				y /*actions*/,
				$ /*contextkey*/,
				v /*menuEntryActionViewItem*/,
) {
				"use strict";
				var S;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$JYc = void 0),
					(t = mt(t)),
					(C = mt(C));
				var I;
				(function (L) {
					(L.Loading = "loading"), (L.Message = "message"), (L.Data = "data");
				})(I || (I = {}));
				class T {
					static store(D, M) {
						M.store(
							"callHierarchyPeekLayout",
							JSON.stringify(D),
							b.StorageScope.PROFILE,
							b.StorageTarget.MACHINE,
						);
					}
					static retrieve(D) {
						const M = D.get(
								"callHierarchyPeekLayout",
								b.StorageScope.PROFILE,
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
				class P extends E.$FMb {}
				let k = class extends t.$9Mb {
					static {
						S = this;
					}
					static {
						this.TitleMenu = new y.$XX("callhierarchy/title");
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
							(this.Y = new p.$Zc()),
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
						const M = D.getColor(t.$aNb) || s.$UL.transparent;
						this.style({
							arrowColor: M,
							frameColor: M,
							headerBackgroundColor: D.getColor(t.$0Mb) || s.$UL.transparent,
							primaryHeadingColor: D.getColor(t.$$Mb),
							secondaryHeadingColor: D.getColor(t.$_Mb),
						});
					}
					P(D) {
						super.P(D, !0);
						const M = this.fb.createMenu(S.TitleMenu, this.gb),
							N = () => {
								const A = [];
								(0, v.$Kyb)(M, void 0, A),
									this.K.clear(),
									this.K.push(A, { label: !1, icon: !0 });
							};
						this.o.add(M), this.o.add(M.onDidChange(N)), N();
					}
					T(D) {
						(this.X = T.retrieve(this.eb)),
							(this.r = new a.$pgb(0, 0)),
							(this.a = D),
							D.classList.add("call-hierarchy");
						const M = document.createElement("div");
						M.classList.add("message"),
							D.appendChild(M),
							(this.b = M),
							(this.b.tabIndex = 0);
						const N = document.createElement("div");
						N.classList.add("results"),
							D.appendChild(N),
							(this.c = new u.$vob(N, {
								orientation: u.Orientation.HORIZONTAL,
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
						this.m = this.hb.createInstance(n.$wDb, A, R, {}, this.editor);
						const O = document.createElement("div");
						O.classList.add("tree"), N.appendChild(O);
						const B = {
							sorter: new C.$EYc(),
							accessibilityProvider: new C.$IYc(() => this.ab),
							identityProvider: new C.$FYc(() => this.ab),
							expandOnlyOnTwistieClick: !0,
							overrideStyles: { listBackground: t.$bNb },
						};
						(this.d = this.hb.createInstance(
							P,
							"CallHierarchyPeek",
							O,
							new C.$HYc(),
							[this.hb.createInstance(C.$GYc)],
							this.hb.createInstance(C.$DYc, () => this.ab),
							B,
						)),
							this.c.addView(
								{
									onDidChange: h.Event.None,
									element: A,
									minimumSize: 200,
									maximumSize: Number.MAX_VALUE,
									layout: (U) => {
										this.r.height &&
											this.m.layout({ height: this.r.height, width: U });
									},
								},
								u.Sizing.Distribute,
							),
							this.c.addView(
								{
									onDidChange: h.Event.None,
									element: O,
									minimumSize: 100,
									maximumSize: Number.MAX_VALUE,
									layout: (U) => {
										this.r.height && this.d.layout(this.r.height, U);
									},
								},
								u.Sizing.Distribute,
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
									U.target !== l.TreeMouseEventTarget.Twistie &&
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
										(0, a.$8gb)(U.browserEvent) &&
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
							description: "call-hierarchy-decoration",
							stickiness: o.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							className: "call-decoration",
							overviewRuler: {
								color: (0, f.$jP)(t.$kNb),
								position: o.OverviewRulerLane.Center,
							},
						};
						let N;
						this.ab === w.CallHierarchyDirection.CallsFrom
							? (N = D.parent ? D.parent.item.uri : D.model.root.uri)
							: (N = D.item.uri);
						const A = await this.db.createModelReference(N);
						this.m.setModel(A.object.textEditorModel);
						const R = [];
						let O,
							B = D.locations;
						B || (B = [{ uri: D.item.uri, range: D.item.selectionRange }]);
						for (const z of B)
							z.uri.toString() === N.toString() &&
								(R.push({ range: z.range, options: M }),
								(O = O ? r.$iL.plusRange(z.range, O) : z.range));
						if (O) {
							this.m.revealRangeInCenter(O, m.ScrollType.Immediate);
							const z = this.m.createDecorationsCollection(R);
							this.Y.add((0, p.$Yc)(() => z.clear()));
						}
						this.Y.add(A);
						const U =
							this.ab === w.CallHierarchyDirection.CallsFrom
								? (0, d.localize)(4532, null, D.model.root.name)
								: (0, d.localize)(4533, null, D.model.root.name);
						this.setTitle(U);
					}
					showLoading() {
						(this.a.dataset.state = I.Loading),
							this.setTitle((0, d.localize)(4534, null)),
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
										this.ab === w.CallHierarchyDirection.CallsFrom
											? (0, d.localize)(4535, null, D.root.name)
											: (0, d.localize)(4536, null, D.root.name),
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
								m.ScrollType.Smooth,
							),
							super.show(r.$iL.fromPositions(this.Z), this.X.height));
					}
					D(D) {
						this.r && this.W(this.r.height, D);
					}
					W(D, M) {
						(this.r.height !== D || this.r.width !== M) &&
							(super.W(D, M),
							(this.r = new a.$pgb(M, D)),
							(this.X.height = this.n ? this.n.heightInLines : this.X.height),
							this.c.layout(M),
							this.c.resizeView(0, M * this.X.ratio));
					}
				};
				(e.$JYc = k),
					(e.$JYc =
						k =
						S =
							Ne(
								[
									j(3, f.$iP),
									j(4, t.$7Mb),
									j(5, c.$IY),
									j(6, g.$MO),
									j(7, b.$lq),
									j(8, y.$YX),
									j(9, $.$6j),
									j(10, i.$Li),
								],
								k,
							));
			},
		),
		
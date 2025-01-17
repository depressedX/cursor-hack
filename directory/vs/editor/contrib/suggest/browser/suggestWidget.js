import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/list/listWidget.js';
import '../../../../base/common/async.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/numbers.js';
import '../../../../base/common/strings.js';
import '../../../browser/editorBrowser.js';
import '../../../browser/widget/codeEditor/embeddedCodeEditorWidget.js';
import '../../../common/config/editorOptions.js';
import './suggestWidgetStatus.js';
import '../../../../nls.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/theme.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../base/browser/ui/resizable/resizable.js';
import './suggest.js';
import './suggestWidgetDetails.js';
import './suggestWidgetRenderer.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import '../../../../base/browser/ui/aria/aria.js';
import '../../../../base/browser/ui/codicons/codiconStyles.js';
import '../../../../css!vs/editor/contrib/suggest/browser/media/suggest.js';
import '../../symbolIcons/browser/symbolIcons.js';
define(
			de[1692],
			he([
				1, 0, 7, 278, 15, 29, 6, 3, 201, 37, 56, 281, 38, 1674, 4, 8, 5, 21, 51,
				212, 35, 930, 373, 1633, 2865, 106, 127, 1135, 2321, 1205,
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
					(e.$HDb = e.$GDb = e.$FDb = void 0),
					(t = mt(t)),
					(r = mt(r)),
					(n = mt(n)),
					(0, f.$wP)(
						"editorSuggestWidget.background",
						f.$bQ,
						n.localize(1495, null),
					),
					(0, f.$wP)(
						"editorSuggestWidget.border",
						f.$dQ,
						n.localize(1496, null),
					);
				const P = (0, f.$wP)(
					"editorSuggestWidget.foreground",
					f.$9P,
					n.localize(1497, null),
				);
				(0, f.$wP)(
					"editorSuggestWidget.selectedForeground",
					f.$lT,
					n.localize(1498, null),
				),
					(0, f.$wP)(
						"editorSuggestWidget.selectedIconForeground",
						f.$mT,
						n.localize(1499, null),
					),
					(e.$FDb = (0, f.$wP)(
						"editorSuggestWidget.selectedBackground",
						f.$nT,
						n.localize(1500, null),
					)),
					(0, f.$wP)(
						"editorSuggestWidget.highlightForeground",
						f.$QS,
						n.localize(1501, null),
					),
					(0, f.$wP)(
						"editorSuggestWidget.focusHighlightForeground",
						f.$RS,
						n.localize(1502, null),
					),
					(0, f.$wP)(
						"editorSuggestWidgetStatus.foreground",
						(0, f.$BP)(P, 0.5),
						n.localize(1503, null),
					);
				var k;
				(function (N) {
					(N[(N.Hidden = 0)] = "Hidden"),
						(N[(N.Loading = 1)] = "Loading"),
						(N[(N.Empty = 2)] = "Empty"),
						(N[(N.Open = 3)] = "Open"),
						(N[(N.Frozen = 4)] = "Frozen"),
						(N[(N.Details = 5)] = "Details"),
						(N[(N.onDetailsKeyDown = 6)] = "onDetailsKeyDown");
				})(k || (k = {}));
				class L {
					constructor(A, R) {
						(this.b = A),
							(this.a = `suggestWidget.size/${R.getEditorType()}/${R instanceof a.$wDb}`);
					}
					restore() {
						const A = this.b.get(this.a, o.StorageScope.PROFILE) ?? "";
						try {
							const R = JSON.parse(A);
							if (t.$pgb.is(R)) return t.$pgb.lift(R);
						} catch {}
					}
					store(A) {
						this.b.store(
							this.a,
							JSON.stringify(A),
							o.StorageScope.PROFILE,
							o.StorageTarget.MACHINE,
						);
					}
					reset() {
						this.b.remove(this.a, o.StorageScope.PROFILE);
					}
				}
				let D = class {
					static {
						T = this;
					}
					static {
						this.a = n.localize(1504, null);
					}
					static {
						this.b = n.localize(1505, null);
					}
					get isShown() {
						return this.x.get();
					}
					constructor(A, R, O, B, U) {
						(this.I = A),
							(this.J = R),
							(this.c = k.Hidden),
							(this.d = !1),
							(this.g = new d.$2c()),
							(this.h = new d.$2c()),
							(this.k = !1),
							(this.n = !1),
							(this.o = !1),
							(this.B = new w.$Wh()),
							(this.C = new d.$Zc()),
							(this.D = new C.$ue()),
							(this.E = new C.$ue()),
							(this.F = new C.$re()),
							(this.G = new C.$re()),
							(this.onDidSelect = this.D.event),
							(this.onDidFocus = this.E.event),
							(this.onDidHide = this.F.event),
							(this.onDidShow = this.G.event),
							(this.H = new C.$re()),
							(this.onDetailsKeyDown = this.H.event),
							(this.element = new l.$dpb()),
							this.element.domNode.classList.add(
								"editor-widget",
								"suggest-widget",
							),
							(this.v = new M(this, A)),
							(this.w = new L(R, A));
						class z {
							constructor(K, J, W = !1, X = !1) {
								(this.persistedSize = K),
									(this.currentSize = J),
									(this.persistHeight = W),
									(this.persistWidth = X);
							}
						}
						let F;
						this.C.add(
							this.element.onDidWillResize(() => {
								this.v.lockPreference(),
									(F = new z(this.w.restore(), this.element.size));
							}),
						),
							this.C.add(
								this.element.onDidResize((G) => {
									if (
										(this.U(G.dimension.width, G.dimension.height),
										F &&
											((F.persistHeight =
												F.persistHeight || !!G.north || !!G.south),
											(F.persistWidth =
												F.persistWidth || !!G.east || !!G.west)),
										!!G.done)
									) {
										if (F) {
											const { itemHeight: K, defaultSize: J } =
													this.getLayoutInfo(),
												W = Math.round(K / 2);
											let { width: X, height: Y } = this.element.size;
											(!F.persistHeight ||
												Math.abs(F.currentSize.height - Y) <= W) &&
												(Y = F.persistedSize?.height ?? J.height),
												(!F.persistWidth ||
													Math.abs(F.currentSize.width - X) <= W) &&
													(X = F.persistedSize?.width ?? J.width),
												this.w.store(new t.$pgb(X, Y));
										}
										this.v.unlockPreference(), (F = void 0);
									}
								}),
							),
							(this.p = t.$fhb(this.element.domNode, t.$(".message"))),
							(this.q = t.$fhb(this.element.domNode, t.$(".tree")));
						const x = this.C.add(U.createInstance($.$zDb, this.I));
						x.onDidClose(this.toggleDetails, this, this.C),
							(this.u = new $.$ADb(x, this.I));
						const H = () =>
							this.element.domNode.classList.toggle(
								"no-icons",
								!this.I.getOption(h.EditorOption.suggest).showIcons,
							);
						H();
						const q = U.createInstance(v.$EDb, this.I);
						this.C.add(q),
							this.C.add(q.onDidToggleDetails(() => this.toggleDetails())),
							(this.r = new i.List(
								"SuggestWidget",
								this.q,
								{
									getHeight: (G) => this.getLayoutInfo().itemHeight,
									getTemplateId: (G) => "suggestion",
								},
								[q],
								{
									alwaysConsumeMouseWheel: !0,
									useShadows: !1,
									mouseSupport: !1,
									multipleSelectionSupport: !1,
									accessibilityProvider: {
										getRole: () => "option",
										getWidgetAriaLabel: () => n.localize(1506, null),
										getWidgetRole: () => "listbox",
										getAriaLabel: (G) => {
											let K = G.textLabel;
											if (typeof G.completion.label != "string") {
												const { detail: Y, description: ie } =
													G.completion.label;
												Y && ie
													? (K = n.localize(1507, null, K, Y, ie))
													: Y
														? (K = n.localize(1508, null, K, Y))
														: ie && (K = n.localize(1509, null, K, ie));
											}
											if (!G.isResolved || !this.W()) return K;
											const { documentation: J, detail: W } = G.completion,
												X = r.$kf(
													"{0}{1}",
													W || "",
													J ? (typeof J == "string" ? J : J.value) : "",
												);
											return n.localize(1510, null, K, X);
										},
									},
								},
							)),
							this.r.style(
								(0, S.$Eyb)({
									listInactiveFocusBackground: e.$FDb,
									listInactiveFocusOutline: f.$PP,
								}),
							),
							(this.s = U.createInstance(c.$xDb, this.element.domNode, y.$ZCb));
						const V = () =>
							this.element.domNode.classList.toggle(
								"with-status-bar",
								this.I.getOption(h.EditorOption.suggest).showStatusBar,
							);
						V(),
							this.C.add(B.onDidColorThemeChange((G) => this.P(G))),
							this.P(B.getColorTheme()),
							this.C.add(this.r.onMouseDown((G) => this.M(G))),
							this.C.add(this.r.onTap((G) => this.M(G))),
							this.C.add(this.r.onDidChangeSelection((G) => this.N(G))),
							this.C.add(this.r.onDidChangeFocus((G) => this.Q(G))),
							this.C.add(this.I.onDidChangeCursorSelection(() => this.L())),
							this.C.add(
								this.I.onDidChangeConfiguration((G) => {
									G.hasChanged(h.EditorOption.suggest) && (V(), H()),
										this.l &&
											(G.hasChanged(h.EditorOption.fontInfo) ||
												G.hasChanged(h.EditorOption.suggestFontSize) ||
												G.hasChanged(h.EditorOption.suggestLineHeight)) &&
											this.r.splice(0, this.r.length, this.l.items);
								}),
							),
							(this.x = y.$YCb.Visible.bindTo(O)),
							(this.y = y.$YCb.DetailsVisible.bindTo(O)),
							(this.z = y.$YCb.MultipleSuggestions.bindTo(O)),
							(this.A = y.$YCb.HasFocusedSuggestion.bindTo(O)),
							this.C.add(
								t.$$fb(this.u.widget.domNode, "keydown", (G) => {
									this.H.fire(G);
								}),
							),
							this.C.add(this.I.onMouseDown((G) => this.K(G)));
					}
					dispose() {
						this.u.widget.dispose(),
							this.u.dispose(),
							this.r.dispose(),
							this.s.dispose(),
							this.C.dispose(),
							this.f?.dispose(),
							this.g.dispose(),
							this.h.dispose(),
							this.B.dispose(),
							this.v.dispose(),
							this.element.dispose();
					}
					K(A) {
						this.u.widget.domNode.contains(A.target.element)
							? this.u.widget.domNode.focus()
							: this.element.domNode.contains(A.target.element) &&
								this.I.focus();
					}
					L() {
						this.c !== k.Hidden && this.v.layout();
					}
					M(A) {
						typeof A.element > "u" ||
							typeof A.index > "u" ||
							(A.browserEvent.preventDefault(),
							A.browserEvent.stopPropagation(),
							this.O(A.element, A.index));
					}
					N(A) {
						A.elements.length && this.O(A.elements[0], A.indexes[0]);
					}
					O(A, R) {
						const O = this.l;
						O && (this.D.fire({ item: A, index: R, model: O }), this.I.focus());
					}
					P(A) {
						this.u.widget.borderWidth = (0, b.$gP)(A.type) ? 2 : 1;
					}
					Q(A) {
						if (this.k) return;
						if (!A.elements.length) {
							this.i && (this.i.cancel(), (this.i = void 0), (this.j = void 0)),
								this.I.setAriaOptions({ activeDescendant: void 0 }),
								this.A.set(!1);
							return;
						}
						if (!this.l) return;
						this.A.set(!0);
						const R = A.elements[0],
							O = A.indexes[0];
						R !== this.j &&
							(this.i?.cancel(),
							(this.i = void 0),
							(this.j = R),
							this.r.reveal(O),
							(this.i = (0, w.$zh)(async (B) => {
								const U = (0, w.$Oh)(() => {
										this.W() && this.showDetails(!0);
									}, 250),
									z = B.onCancellationRequested(() => U.dispose());
								try {
									return await R.resolve(B);
								} finally {
									U.dispose(), z.dispose();
								}
							})),
							this.i
								.then(() => {
									O >= this.r.length ||
										R !== this.r.element(O) ||
										((this.k = !0),
										this.r.splice(O, 1, [R]),
										this.r.setFocus([O]),
										(this.k = !1),
										this.W()
											? this.showDetails(!1)
											: this.element.domNode.classList.remove("docs-side"),
										this.I.setAriaOptions({
											activeDescendant: (0, v.$DDb)(O),
										}));
								})
								.catch(E.$4)),
							this.E.fire({ item: R, index: O, model: this.l });
					}
					R(A) {
						if (this.c !== A)
							switch (
								((this.c = A),
								this.element.domNode.classList.toggle("frozen", A === k.Frozen),
								this.element.domNode.classList.remove("message"),
								A)
							) {
								case k.Hidden:
									t.hide(this.p, this.q, this.s.element),
										this.u.hide(!0),
										this.s.hide(),
										this.v.hide(),
										this.x.reset(),
										this.z.reset(),
										this.A.reset(),
										this.B.cancel(),
										this.element.domNode.classList.remove("visible"),
										this.r.splice(0, this.r.length),
										(this.j = void 0),
										(this.m = void 0),
										(this.o = !1);
									break;
								case k.Loading:
									this.element.domNode.classList.add("message"),
										(this.p.textContent = T.a),
										t.hide(this.q, this.s.element),
										t.show(this.p),
										this.u.hide(),
										this.S(),
										(this.j = void 0),
										(0, I.$pib)(T.a);
									break;
								case k.Empty:
									this.element.domNode.classList.add("message"),
										(this.p.textContent = T.b),
										t.hide(this.q, this.s.element),
										t.show(this.p),
										this.u.hide(),
										this.S(),
										(this.j = void 0),
										(0, I.$pib)(T.b);
									break;
								case k.Open:
									t.hide(this.p), t.show(this.q, this.s.element), this.S();
									break;
								case k.Frozen:
									t.hide(this.p), t.show(this.q, this.s.element), this.S();
									break;
								case k.Details:
									t.hide(this.p),
										t.show(this.q, this.s.element),
										this.u.show(),
										this.S();
									break;
							}
					}
					S() {
						this.s.show(),
							this.v.show(),
							this.T(this.w.restore()),
							this.x.set(!0),
							this.B.cancelAndSet(() => {
								this.element.domNode.classList.add("visible"),
									this.G.fire(this);
							}, 100);
					}
					showTriggered(A, R) {
						this.c === k.Hidden &&
							(this.v.setPosition(this.I.getPosition()),
							(this.d = !!A),
							this.d || (this.f = (0, w.$Oh)(() => this.R(k.Loading), R)));
					}
					showSuggestions(A, R, O, B, U) {
						if (
							(this.v.setPosition(this.I.getPosition()),
							this.f?.dispose(),
							this.i?.cancel(),
							(this.i = void 0),
							this.l !== A && (this.l = A),
							O && this.c !== k.Empty && this.c !== k.Hidden)
						) {
							this.R(k.Frozen);
							return;
						}
						const z = this.l.items.length,
							F = z === 0;
						if ((this.z.set(z > 1), F)) {
							this.R(B ? k.Hidden : k.Empty), (this.l = void 0);
							return;
						}
						(this.j = void 0), this.E.pause(), this.D.pause();
						try {
							this.r.splice(0, this.r.length, this.l.items),
								this.R(O ? k.Frozen : k.Open),
								this.r.reveal(R, 0),
								this.r.setFocus(U ? [] : [R]);
						} finally {
							this.E.resume(), this.D.resume();
						}
						this.g.value = t.$ggb(t.getWindow(this.element.domNode), () => {
							this.g.clear(),
								this.T(this.element.size),
								this.u.widget.domNode.classList.remove("focused");
						});
					}
					focusSelected() {
						this.r.length > 0 && this.r.setFocus([0]);
					}
					selectNextPage() {
						switch (this.c) {
							case k.Hidden:
								return !1;
							case k.Details:
								return this.u.widget.pageDown(), !0;
							case k.Loading:
								return !this.d;
							default:
								return this.r.focusNextPage(), !0;
						}
					}
					selectNext() {
						switch (this.c) {
							case k.Hidden:
								return !1;
							case k.Loading:
								return !this.d;
							default:
								return this.r.focusNext(1, !0), !0;
						}
					}
					selectLast() {
						switch (this.c) {
							case k.Hidden:
								return !1;
							case k.Details:
								return this.u.widget.scrollBottom(), !0;
							case k.Loading:
								return !this.d;
							default:
								return this.r.focusLast(), !0;
						}
					}
					selectPreviousPage() {
						switch (this.c) {
							case k.Hidden:
								return !1;
							case k.Details:
								return this.u.widget.pageUp(), !0;
							case k.Loading:
								return !this.d;
							default:
								return this.r.focusPreviousPage(), !0;
						}
					}
					selectPrevious() {
						switch (this.c) {
							case k.Hidden:
								return !1;
							case k.Loading:
								return !this.d;
							default:
								return this.r.focusPrevious(1, !0), !1;
						}
					}
					selectFirst() {
						switch (this.c) {
							case k.Hidden:
								return !1;
							case k.Details:
								return this.u.widget.scrollTop(), !0;
							case k.Loading:
								return !this.d;
							default:
								return this.r.focusFirst(), !0;
						}
					}
					getFocusedItem() {
						if (
							this.c !== k.Hidden &&
							this.c !== k.Empty &&
							this.c !== k.Loading &&
							this.l &&
							this.r.getFocus().length > 0
						)
							return {
								item: this.r.getFocusedElements()[0],
								index: this.r.getFocus()[0],
								model: this.l,
							};
					}
					getAllSuggestions() {
						if (
							this.c !== k.Hidden &&
							this.c !== k.Empty &&
							this.c !== k.Loading &&
							this.l
						)
							return this.l.items;
					}
					toggleDetailsFocus() {
						this.c === k.Details
							? (this.R(k.Open),
								this.u.widget.domNode.classList.remove("focused"))
							: this.c === k.Open &&
								this.W() &&
								(this.R(k.Details),
								this.u.widget.domNode.classList.add("focused"));
					}
					toggleDetails() {
						this.W()
							? (this.h.clear(),
								this.y.set(!1),
								this.X(!1),
								this.u.hide(),
								this.element.domNode.classList.remove("shows-details"))
							: ((0, $.$yDb)(this.r.getFocusedElements()[0]) || this.o) &&
								(this.c === k.Open ||
									this.c === k.Details ||
									this.c === k.Frozen) &&
								(this.y.set(!0), this.X(!0), this.showDetails(!1));
					}
					showDetails(A) {
						this.h.value = t.$ggb(t.getWindow(this.element.domNode), () => {
							this.h.clear(),
								this.u.show(),
								A
									? this.u.widget.renderLoading()
									: this.u.widget.renderItem(
											this.r.getFocusedElements()[0],
											this.o,
										),
								this.u.widget.isEmpty
									? this.u.hide()
									: (this.V(),
										this.element.domNode.classList.add("shows-details")),
								this.I.focus();
						});
					}
					toggleExplainMode() {
						this.r.getFocusedElements()[0] &&
							((this.o = !this.o),
							this.W() ? this.showDetails(!1) : this.toggleDetails());
					}
					resetPersistedSize() {
						this.w.reset();
					}
					hideWidget() {
						this.g.clear(),
							this.h.clear(),
							this.f?.dispose(),
							this.R(k.Hidden),
							this.F.fire(this),
							this.element.clearSashHoverState();
						const A = this.w.restore(),
							R = Math.ceil(this.getLayoutInfo().itemHeight * 4.3);
						A && A.height < R && this.w.store(A.with(void 0, R));
					}
					isFrozen() {
						return this.c === k.Frozen;
					}
					_afterRender(A) {
						if (A === null) {
							this.W() && this.u.hide();
							return;
						}
						this.c === k.Empty ||
							this.c === k.Loading ||
							(this.W() && !this.u.widget.isEmpty && this.u.show(), this.V());
					}
					T(A) {
						if (!this.I.hasModel() || !this.I.getDomNode()) return;
						const R = t.$ogb(this.element.domNode.ownerDocument.body),
							O = this.getLayoutInfo();
						A || (A = O.defaultSize);
						let B = A.height,
							U = A.width;
						if (
							((this.s.element.style.height = `${O.itemHeight}px`),
							this.c === k.Empty || this.c === k.Loading)
						)
							(B = O.itemHeight + O.borderHeight),
								(U = O.defaultSize.width / 2),
								this.element.enableSashes(!1, !1, !1, !1),
								(this.element.minSize = this.element.maxSize =
									new t.$pgb(U, B)),
								this.v.setPreference(u.ContentWidgetPositionPreference.BELOW);
						else {
							const z = R.width - O.borderHeight - 2 * O.horizontalPadding;
							U > z && (U = z);
							const F = this.l
									? this.l.stats.pLabelLen * O.typicalHalfwidthCharacterWidth
									: U,
								x = O.statusBarHeight + this.r.contentHeight + O.borderHeight,
								H = O.itemHeight + O.statusBarHeight,
								q = t.$tgb(this.I.getDomNode()),
								V = this.I.getScrolledVisiblePosition(this.I.getPosition()),
								G = q.top + V.top + V.height,
								K = Math.min(R.height - G - O.verticalPadding, x),
								J = q.top + V.top - O.verticalPadding,
								W = Math.min(J, x);
							let X = Math.min(Math.max(W, K) + O.borderHeight, x);
							B === this.m?.capped && (B = this.m.wanted),
								B < H && (B = H),
								B > X && (B = X),
								B > K || (this.n && J > 150)
									? (this.v.setPreference(
											u.ContentWidgetPositionPreference.ABOVE,
										),
										this.element.enableSashes(!0, !0, !1, !1),
										(X = W))
									: (this.v.setPreference(
											u.ContentWidgetPositionPreference.BELOW,
										),
										this.element.enableSashes(!1, !0, !0, !1),
										(X = K)),
								(this.element.preferredSize = new t.$pgb(
									F,
									O.defaultSize.height,
								)),
								(this.element.maxSize = new t.$pgb(z, X)),
								(this.element.minSize = new t.$pgb(220, H)),
								(this.m =
									B === x
										? { wanted: this.m?.wanted ?? A.height, capped: B }
										: void 0);
						}
						this.U(U, B);
					}
					U(A, R) {
						const { width: O, height: B } = this.element.maxSize;
						(A = Math.min(O, A)), (R = Math.min(B, R));
						const { statusBarHeight: U } = this.getLayoutInfo();
						this.r.layout(R - U, A),
							(this.q.style.height = `${R - U}px`),
							this.element.layout(R, A),
							this.v.layout(),
							this.V();
					}
					V() {
						this.W() &&
							this.u.placeAtAnchor(
								this.element.domNode,
								this.v.getPosition()?.preference[0] ===
									u.ContentWidgetPositionPreference.BELOW,
							);
					}
					getLayoutInfo() {
						const A = this.I.getOption(h.EditorOption.fontInfo),
							R = (0, m.$Zm)(
								this.I.getOption(h.EditorOption.suggestLineHeight) ||
									A.lineHeight,
								8,
								1e3,
							),
							O =
								!this.I.getOption(h.EditorOption.suggest).showStatusBar ||
								this.c === k.Empty ||
								this.c === k.Loading
									? 0
									: R,
							B = this.u.widget.borderWidth,
							U = 2 * B;
						return {
							itemHeight: R,
							statusBarHeight: O,
							borderWidth: B,
							borderHeight: U,
							typicalHalfwidthCharacterWidth: A.typicalHalfwidthCharacterWidth,
							verticalPadding: 22,
							horizontalPadding: 14,
							defaultSize: new t.$pgb(430, O + 12 * R + U),
						};
					}
					W() {
						return this.J.getBoolean(
							"expandSuggestionDocs",
							o.StorageScope.PROFILE,
							!1,
						);
					}
					X(A) {
						this.J.store(
							"expandSuggestionDocs",
							A,
							o.StorageScope.PROFILE,
							o.StorageTarget.USER,
						);
					}
					forceRenderingAbove() {
						this.n || ((this.n = !0), this.T(this.w.restore()));
					}
					stopForceRenderingAbove() {
						this.n = !1;
					}
				};
				(e.$GDb = D),
					(e.$GDb =
						D =
						T =
							Ne([j(1, o.$lq), j(2, g.$6j), j(3, s.$iP), j(4, p.$Li)], D));
				class M {
					constructor(A, R) {
						(this.g = A),
							(this.h = R),
							(this.allowEditorOverflow = !0),
							(this.suppressMouseDown = !1),
							(this.c = !1),
							(this.d = !1),
							(this.f = !1);
					}
					dispose() {
						this.d && ((this.d = !1), this.h.removeContentWidget(this));
					}
					getId() {
						return "editor.widget.suggestWidget";
					}
					getDomNode() {
						return this.g.element.domNode;
					}
					show() {
						(this.f = !1),
							this.d || ((this.d = !0), this.h.addContentWidget(this));
					}
					hide() {
						this.f || ((this.f = !0), this.layout());
					}
					layout() {
						this.h.layoutContentWidget(this);
					}
					getPosition() {
						return this.f || !this.a || !this.b
							? null
							: { position: this.a, preference: [this.b] };
					}
					beforeRender() {
						const { height: A, width: R } = this.g.element.size,
							{ borderWidth: O, horizontalPadding: B } = this.g.getLayoutInfo();
						return new t.$pgb(R + 2 * O + B, A + 2 * O);
					}
					afterRender(A) {
						this.g._afterRender(A);
					}
					setPreference(A) {
						this.c || (this.b = A);
					}
					lockPreference() {
						this.c = !0;
					}
					unlockPreference() {
						this.c = !1;
					}
					setPosition(A) {
						this.a = A;
					}
				}
				e.$HDb = M;
			},
		),
		
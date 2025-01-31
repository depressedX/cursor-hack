import '../../../../../require.js';
import '../../../../../exports.js';
import '../../browser.js';
import '../../touch.js';
import '../../dom.js';
import '../../keyboardEvent.js';
import '../../mouseEvent.js';
import '../actionbar/actionbar.js';
import '../actionbar/actionViewItems.js';
import '../contextview/contextview.js';
import '../scrollbar/scrollableElement.js';
import '../../../common/actions.js';
import '../../../common/async.js';
import '../../../common/codicons.js';
import '../../../common/codiconsUtil.js';
import '../../../common/themables.js';
import '../../../common/iconLabels.js';
import '../../../common/keyCodes.js';
import '../../../common/lifecycle.js';
import '../../../common/platform.js';
import '../../../common/scrollable.js';
import '../../../common/strings.js';
define(
			de[1168],
			he([
				1, 0, 139, 159, 7, 114, 168, 105, 198, 276, 203, 50, 15, 14, 903, 26,
				274, 27, 3, 12, 195, 37,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*browser*/,
				i /*touch*/,
				w /*dom*/,
				E /*keyboardEvent*/,
				C /*mouseEvent*/,
				d /*actionbar*/,
				m /*actionViewItems*/,
				r /*contextview*/,
				u /*scrollableElement*/,
				a /*actions*/,
				h /*async*/,
				c /*codicons*/,
				n /*codiconsUtil*/,
				g /*themables*/,
				p /*iconLabels*/,
				o /*keyCodes*/,
				f /*lifecycle*/,
				b /*platform*/,
				s /*scrollable*/,
				l /*strings*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.Menu =
						e.$iob =
						e.VerticalDirection =
						e.HorizontalDirection =
						e.$hob =
						e.$gob =
							void 0),
					(e.$kob = P),
					(e.$lob = k),
					(l = mt(l)),
					(e.$gob = /\(&([^\s&])\)|(^|[^&])&([^\s&])/),
					(e.$hob = /(&amp;)?(&amp;)([^\s&])/g);
				var y;
				(function (D) {
					(D[(D.Right = 0)] = "Right"), (D[(D.Left = 1)] = "Left");
				})(y || (e.HorizontalDirection = y = {}));
				var $;
				(function (D) {
					(D[(D.Above = 0)] = "Above"), (D[(D.Below = 1)] = "Below");
				})($ || (e.VerticalDirection = $ = {})),
					(e.$iob = {
						shadowColor: void 0,
						borderColor: void 0,
						foregroundColor: void 0,
						backgroundColor: void 0,
						selectionForegroundColor: void 0,
						selectionBackgroundColor: void 0,
						selectionBorderColor: void 0,
						separatorColor: void 0,
						scrollbarShadow: void 0,
						scrollbarSliderBackground: void 0,
						scrollbarSliderHoverBackground: void 0,
						scrollbarSliderActiveBackground: void 0,
					});
				class v extends d.$eib {
					constructor(M, N, A, R) {
						M.classList.add("monaco-menu-container"),
							M.setAttribute("role", "presentation");
						const O = document.createElement("div");
						O.classList.add("monaco-menu"),
							O.setAttribute("role", "presentation"),
							super(O, {
								orientation: d.ActionsOrientation.VERTICAL,
								actionViewItemProvider: (F) => this.fb(F, A, B),
								context: A.context,
								actionRunner: A.actionRunner,
								ariaLabel: A.ariaLabel,
								ariaRole: "menu",
								focusOnlyEnabledItems: !0,
								triggerKeys: {
									keys: [
										o.KeyCode.Enter,
										...(b.$m || b.$n ? [o.KeyCode.Space] : []),
									],
									keyDown: !0,
								},
							}),
							(this.Z = R),
							(this.X = O),
							(this.z.tabIndex = 0),
							this.ab(M, R),
							this.D(i.$Qhb.addTarget(O)),
							this.D(
								(0, w.$0fb)(O, w.$$gb.KEY_DOWN, (F) => {
									new E.$7fb(F).equals(o.KeyCode.Tab) && F.preventDefault();
								}),
							),
							A.enableMnemonics &&
								this.D(
									(0, w.$0fb)(O, w.$$gb.KEY_DOWN, (F) => {
										const x = F.key.toLocaleLowerCase();
										if (this.U.has(x)) {
											w.$ahb.stop(F, !0);
											const H = this.U.get(x);
											if (
												(H.length === 1 &&
													(H[0] instanceof I &&
														H[0].container &&
														this.cb(H[0].container),
													H[0].onClick(F)),
												H.length > 1)
											) {
												const q = H.shift();
												q && q.container && (this.cb(q.container), H.push(q)),
													this.U.set(x, H);
											}
										}
									}),
								),
							b.$n &&
								this.D(
									(0, w.$0fb)(O, w.$$gb.KEY_DOWN, (F) => {
										const x = new E.$7fb(F);
										x.equals(o.KeyCode.Home) || x.equals(o.KeyCode.PageUp)
											? ((this.t = this.viewItems.length - 1),
												this.P(),
												w.$ahb.stop(F, !0))
											: (x.equals(o.KeyCode.End) ||
													x.equals(o.KeyCode.PageDown)) &&
												((this.t = 0), this.Q(), w.$ahb.stop(F, !0));
									}),
								),
							this.D(
								(0, w.$0fb)(this.domNode, w.$$gb.MOUSE_OUT, (F) => {
									const x = F.relatedTarget;
									(0, w.$Bgb)(x, this.domNode) ||
										((this.t = void 0), this.R(), F.stopPropagation());
								}),
							),
							this.D(
								(0, w.$0fb)(this.z, w.$$gb.MOUSE_OVER, (F) => {
									let x = F.target;
									if (!(!x || !(0, w.$Bgb)(x, this.z) || x === this.z)) {
										for (
											;
											x.parentElement !== this.z && x.parentElement !== null;
										)
											x = x.parentElement;
										if (x.classList.contains("action-item")) {
											const H = this.t;
											this.db(x), H !== this.t && this.R();
										}
									}
								}),
							),
							this.D(i.$Qhb.addTarget(this.z)),
							this.D(
								(0, w.$0fb)(this.z, i.EventType.Tap, (F) => {
									let x = F.initialTarget;
									if (!(!x || !(0, w.$Bgb)(x, this.z) || x === this.z)) {
										for (
											;
											x.parentElement !== this.z && x.parentElement !== null;
										)
											x = x.parentElement;
										if (x.classList.contains("action-item")) {
											const H = this.t;
											this.db(x), H !== this.t && this.R();
										}
									}
								}),
							);
						const B = { parent: this };
						(this.U = new Map()),
							(this.W = this.D(
								new u.$8hb(O, {
									alwaysConsumeMouseWheel: !0,
									horizontal: s.ScrollbarVisibility.Hidden,
									vertical: s.ScrollbarVisibility.Visible,
									verticalScrollbarSize: 7,
									handleMouseWheel: !0,
									useShadows: !0,
								}),
							));
						const U = this.W.getDomNode();
						(U.style.position = ""),
							this.bb(U, R),
							this.D(
								(0, w.$0fb)(O, i.EventType.Change, (F) => {
									w.$ahb.stop(F, !0);
									const x = this.W.getScrollPosition().scrollTop;
									this.W.setScrollPosition({ scrollTop: x - F.translationY });
								}),
							),
							this.D(
								(0, w.$0fb)(U, w.$$gb.MOUSE_UP, (F) => {
									F.preventDefault();
								}),
							);
						const z = (0, w.getWindow)(M);
						(O.style.maxHeight = `${Math.max(10, z.innerHeight - M.getBoundingClientRect().top - 35)}px`),
							(N = N.filter((F, x) =>
								A.submenuIds?.has(F.id)
									? (console.warn(`Found submenu cycle: ${F.id}`), !1)
									: !(
											F instanceof a.$tj &&
											(x === N.length - 1 ||
												x === 0 ||
												N[x - 1] instanceof a.$tj)
										),
							)),
							this.push(N, { icon: !0, label: !0, isMenu: !0 }),
							M.appendChild(this.W.getDomNode()),
							this.W.scanDomNode(),
							this.viewItems
								.filter((F) => !(F instanceof T))
								.forEach((F, x, H) => {
									F.updatePositionInSet(x + 1, H.length);
								});
					}
					ab(M, N) {
						this.Y ||
							((0, w.$Hgb)(M)
								? (this.Y = (0, w.$Rgb)(M))
								: (v.globalStyleSheet || (v.globalStyleSheet = (0, w.$Rgb)()),
									(this.Y = v.globalStyleSheet))),
							(this.Y.textContent = L(N, (0, w.$Hgb)(M)));
					}
					bb(M, N) {
						const A = N.foregroundColor ?? "",
							R = N.backgroundColor ?? "",
							O = N.borderColor ? `1px solid ${N.borderColor}` : "",
							B = "5px",
							U = N.shadowColor ? `0 2px 8px ${N.shadowColor}` : "";
						(M.style.outline = O),
							(M.style.borderRadius = B),
							(M.style.color = A),
							(M.style.backgroundColor = R),
							(M.style.boxShadow = U);
					}
					getContainer() {
						return this.W.getDomNode();
					}
					get onScroll() {
						return this.W.onScroll;
					}
					get scrollOffset() {
						return this.X.scrollTop;
					}
					trigger(M) {
						if (M <= this.viewItems.length && M >= 0) {
							const N = this.viewItems[M];
							if (N instanceof I) super.focus(M), N.open(!0);
							else if (N instanceof S) super.run(N._action, N._context);
							else return;
						}
					}
					cb(M) {
						const N = this.t;
						this.db(M), N !== this.t && this.R();
					}
					db(M) {
						for (let N = 0; N < this.z.children.length; N++) {
							const A = this.z.children[N];
							if (M === A) {
								this.t = N;
								break;
							}
						}
					}
					R(M) {
						super.R(M, !0, !0),
							typeof this.t < "u" &&
								this.W.setScrollPosition({
									scrollTop: Math.round(this.X.scrollTop),
								});
					}
					fb(M, N, A) {
						if (M instanceof a.$tj)
							return new T(N.context, M, { icon: !0 }, this.Z);
						if (M instanceof a.$uj) {
							const R = new I(
								M,
								M.actions,
								A,
								{ ...N, submenuIds: new Set([...(N.submenuIds || []), M.id]) },
								this.Z,
							);
							if (N.enableMnemonics) {
								const O = R.getMnemonic();
								if (O && R.isEnabled()) {
									let B = [];
									this.U.has(O) && (B = this.U.get(O)),
										B.push(R),
										this.U.set(O, B);
								}
							}
							return R;
						} else {
							const R = {
								enableMnemonics: N.enableMnemonics,
								useEventAsContext: N.useEventAsContext,
							};
							if (N.getKeyBinding) {
								const B = N.getKeyBinding(M);
								if (B) {
									const U = B.getLabel();
									U && (R.keybinding = U);
								}
							}
							const O = new S(N.context, M, R, this.Z);
							if (N.enableMnemonics) {
								const B = O.getMnemonic();
								if (B && O.isEnabled()) {
									let U = [];
									this.U.has(B) && (U = this.U.get(B)),
										U.push(O),
										this.U.set(B, U);
								}
							}
							return O;
						}
					}
				}
				e.Menu = v;
				class S extends m.$$ib {
					constructor(M, N, A, R) {
						if (
							((A.isMenu = !0),
							super(N, N, A),
							(this.I = R),
							(this.m = A),
							(this.m.icon = A.icon !== void 0 ? A.icon : !1),
							(this.m.label = A.label !== void 0 ? A.label : !0),
							(this.y = ""),
							this.m.label && A.enableMnemonics)
						) {
							const O = this.action.label;
							if (O) {
								const B = e.$gob.exec(O);
								B && (this.s = (B[1] ? B[1] : B[3]).toLocaleLowerCase());
							}
						}
						(this.h = new h.$Yh(() => {
							this.element &&
								(this.D(
									(0, w.$0fb)(this.element, w.$$gb.MOUSE_UP, (O) => {
										if ((w.$ahb.stop(O, !0), t.$Ofb)) {
											if (
												new C.$2fb((0, w.getWindow)(this.element), O)
													.rightButton
											)
												return;
											this.onClick(O);
										} else
											setTimeout(() => {
												this.onClick(O);
											}, 0);
									}),
								),
								this.D(
									(0, w.$0fb)(this.element, w.$$gb.CONTEXT_MENU, (O) => {
										w.$ahb.stop(O, !0);
									}),
								));
						}, 100)),
							this.D(this.h);
					}
					render(M) {
						super.render(M),
							this.element &&
								((this.container = M),
								(this.g = (0, w.$fhb)(
									this.element,
									(0, w.$)("a.action-menu-item"),
								)),
								this._action.id === a.$tj.ID
									? this.g.setAttribute("role", "presentation")
									: (this.g.setAttribute("role", "menuitem"),
										this.s &&
											this.g.setAttribute("aria-keyshortcuts", `${this.s}`)),
								(this.r = (0, w.$fhb)(
									this.g,
									(0, w.$)(
										"span.menu-item-check" +
											g.ThemeIcon.asCSSSelector(c.$ak.menuSelection),
									),
								)),
								this.r.setAttribute("role", "none"),
								(this.n = (0, w.$fhb)(this.g, (0, w.$)("span.action-label"))),
								this.m.label &&
									this.m.keybinding &&
									((0, w.$fhb)(
										this.g,
										(0, w.$)("span.keybinding"),
									).textContent = this.m.keybinding),
								this.h.schedule(),
								this.G(),
								this.u(),
								this.C(),
								this.t(),
								this.H(),
								this.P());
					}
					blur() {
						super.blur(), this.P();
					}
					focus() {
						super.focus(), this.g?.focus(), this.P();
					}
					updatePositionInSet(M, N) {
						this.g &&
							(this.g.setAttribute("aria-posinset", `${M}`),
							this.g.setAttribute("aria-setsize", `${N}`));
					}
					u() {
						if (this.n && this.m.label) {
							(0, w.$9fb)(this.n);
							let M = (0, p.$$k)(this.action.label);
							if (M) {
								const N = P(M);
								this.m.enableMnemonics || (M = N),
									this.n.setAttribute("aria-label", N.replace(/&&/g, "&"));
								const A = e.$gob.exec(M);
								if (A) {
									(M = l.$nf(M)), (e.$hob.lastIndex = 0);
									let R = e.$hob.exec(M);
									for (; R && R[1]; ) R = e.$hob.exec(M);
									const O = (B) => B.replace(/&amp;&amp;/g, "&amp;");
									R
										? this.n.append(
												l.$tf(O(M.substr(0, R.index)), " "),
												(0, w.$)("u", { "aria-hidden": "true" }, R[3]),
												l.$uf(O(M.substr(R.index + R[0].length)), " "),
											)
										: (this.n.innerText = O(M).trim()),
										this.g?.setAttribute(
											"aria-keyshortcuts",
											(A[1] ? A[1] : A[3]).toLocaleLowerCase(),
										);
								} else this.n.innerText = M.replace(/&&/g, "&").trim();
							}
						}
					}
					C() {}
					G() {
						this.y && this.g && this.g.classList.remove(...this.y.split(" ")),
							this.m.icon && this.n
								? ((this.y = this.action.class || ""),
									this.n.classList.add("icon"),
									this.y && this.n.classList.add(...this.y.split(" ")),
									this.t())
								: this.n && this.n.classList.remove("icon");
					}
					t() {
						this.action.enabled
							? (this.element &&
									(this.element.classList.remove("disabled"),
									this.element.removeAttribute("aria-disabled")),
								this.g &&
									(this.g.classList.remove("disabled"),
									this.g.removeAttribute("aria-disabled"),
									(this.g.tabIndex = 0)))
							: (this.element &&
									(this.element.classList.add("disabled"),
									this.element.setAttribute("aria-disabled", "true")),
								this.g &&
									(this.g.classList.add("disabled"),
									this.g.setAttribute("aria-disabled", "true")));
					}
					H() {
						if (!this.g) return;
						const M = this.action.checked;
						this.g.classList.toggle("checked", !!M),
							M !== void 0
								? (this.g.setAttribute("role", "menuitemcheckbox"),
									this.g.setAttribute("aria-checked", M ? "true" : "false"))
								: (this.g.setAttribute("role", "menuitem"),
									this.g.setAttribute("aria-checked", ""));
					}
					getMnemonic() {
						return this.s;
					}
					P() {
						const M =
								this.element && this.element.classList.contains("focused"),
							N =
								M && this.I.selectionForegroundColor
									? this.I.selectionForegroundColor
									: this.I.foregroundColor,
							A =
								M && this.I.selectionBackgroundColor
									? this.I.selectionBackgroundColor
									: void 0,
							R =
								M && this.I.selectionBorderColor
									? `1px solid ${this.I.selectionBorderColor}`
									: "",
							O = M && this.I.selectionBorderColor ? "-1px" : "";
						this.g &&
							((this.g.style.color = N ?? ""),
							(this.g.style.backgroundColor = A ?? ""),
							(this.g.style.outline = R),
							(this.g.style.outlineOffset = O)),
							this.r && (this.r.style.color = N ?? "");
					}
				}
				class I extends S {
					constructor(M, N, A, R, O) {
						super(M, M, R, O),
							(this.ab = N),
							(this.bb = A),
							(this.cb = R),
							(this.Q = null),
							(this.U = this.D(new f.$Zc())),
							(this.W = !1),
							(this.Z =
								R && R.expandDirection !== void 0
									? R.expandDirection
									: { horizontal: y.Right, vertical: $.Below }),
							(this.X = new h.$Yh(() => {
								this.W && (this.eb(!1), this.gb(!1));
							}, 250)),
							(this.Y = new h.$Yh(() => {
								this.element &&
									!(0, w.$Bgb)((0, w.$Jgb)(), this.element) &&
									this.bb.submenu === this.Q &&
									(this.bb.parent.focus(!1), this.eb(!0));
							}, 750));
					}
					render(M) {
						super.render(M),
							this.element &&
								(this.g &&
									(this.g.classList.add("monaco-submenu-item"),
									(this.g.tabIndex = 0),
									this.g.setAttribute("aria-haspopup", "true"),
									this.hb("false"),
									(this.S = (0, w.$fhb)(
										this.g,
										(0, w.$)(
											"span.submenu-indicator" +
												g.ThemeIcon.asCSSSelector(c.$ak.menuSubmenu),
										),
									)),
									this.S.setAttribute("aria-hidden", "true")),
								this.D(
									(0, w.$0fb)(this.element, w.$$gb.KEY_UP, (N) => {
										const A = new E.$7fb(N);
										(A.equals(o.KeyCode.RightArrow) ||
											A.equals(o.KeyCode.Enter)) &&
											(w.$ahb.stop(N, !0), this.gb(!0));
									}),
								),
								this.D(
									(0, w.$0fb)(this.element, w.$$gb.KEY_DOWN, (N) => {
										const A = new E.$7fb(N);
										(0, w.$Jgb)() === this.g &&
											(A.equals(o.KeyCode.RightArrow) ||
												A.equals(o.KeyCode.Enter)) &&
											w.$ahb.stop(N, !0);
									}),
								),
								this.D(
									(0, w.$0fb)(this.element, w.$$gb.MOUSE_OVER, (N) => {
										this.W || ((this.W = !0), this.X.schedule());
									}),
								),
								this.D(
									(0, w.$0fb)(this.element, w.$$gb.MOUSE_LEAVE, (N) => {
										this.W = !1;
									}),
								),
								this.D(
									(0, w.$0fb)(this.element, w.$$gb.FOCUS_OUT, (N) => {
										this.element &&
											!(0, w.$Bgb)((0, w.$Jgb)(), this.element) &&
											this.Y.schedule();
									}),
								),
								this.D(
									this.bb.parent.onScroll(() => {
										this.bb.submenu === this.Q &&
											(this.bb.parent.focus(!1), this.eb(!0));
									}),
								));
					}
					t() {}
					open(M) {
						this.eb(!1), this.gb(M);
					}
					onClick(M) {
						w.$ahb.stop(M, !0), this.eb(!1), this.gb(!0);
					}
					eb(M) {
						if (this.bb.submenu && (M || this.bb.submenu !== this.Q)) {
							try {
								this.bb.submenu.dispose();
							} catch {}
							(this.bb.submenu = void 0),
								this.hb("false"),
								this.R && (this.U.clear(), (this.R = void 0));
						}
					}
					fb(M, N, A, R) {
						const O = { top: 0, left: 0 };
						return (
							(O.left = (0, r.$hib)(M.width, N.width, {
								position:
									R.horizontal === y.Right
										? r.LayoutAnchorPosition.Before
										: r.LayoutAnchorPosition.After,
								offset: A.left,
								size: A.width,
							})),
							O.left >= A.left &&
								O.left < A.left + A.width &&
								(A.left + 10 + N.width <= M.width && (O.left = A.left + 10),
								(A.top += 10),
								(A.height = 0)),
							(O.top = (0, r.$hib)(M.height, N.height, {
								position: r.LayoutAnchorPosition.Before,
								offset: A.top,
								size: 0,
							})),
							O.top + N.height === A.top &&
								O.top + A.height + N.height <= M.height &&
								(O.top += A.height),
							O
						);
					}
					gb(M = !0) {
						if (this.element)
							if (this.bb.submenu) this.bb.submenu.focus(!1);
							else {
								this.hb("true"),
									(this.R = (0, w.$fhb)(
										this.element,
										(0, w.$)("div.monaco-submenu"),
									)),
									this.R.classList.add(
										"menubar-menu-items-holder",
										"context-view",
									);
								const N = (0, w.getWindow)(
										this.bb.parent.domNode,
									).getComputedStyle(this.bb.parent.domNode),
									A = parseFloat(N.paddingTop || "0") || 0;
								(this.R.style.zIndex = "1"),
									(this.R.style.position = "fixed"),
									(this.R.style.top = "0"),
									(this.R.style.left = "0"),
									(this.bb.submenu = new v(
										this.R,
										this.ab.length ? this.ab : [new a.$vj()],
										this.cb,
										this.I,
									));
								const R = this.element.getBoundingClientRect(),
									O = {
										top: R.top - A,
										left: R.left,
										height: R.height + 2 * A,
										width: R.width,
									},
									B = this.R.getBoundingClientRect(),
									U = (0, w.getWindow)(this.element),
									{ top: z, left: F } = this.fb(
										new w.$pgb(U.innerWidth, U.innerHeight),
										w.$pgb.lift(B),
										O,
										this.Z,
									);
								(this.R.style.left = `${F - B.left}px`),
									(this.R.style.top = `${z - B.top}px`),
									this.U.add(
										(0, w.$0fb)(this.R, w.$$gb.KEY_UP, (x) => {
											new E.$7fb(x).equals(o.KeyCode.LeftArrow) &&
												(w.$ahb.stop(x, !0),
												this.bb.parent.focus(),
												this.eb(!0));
										}),
									),
									this.U.add(
										(0, w.$0fb)(this.R, w.$$gb.KEY_DOWN, (x) => {
											new E.$7fb(x).equals(o.KeyCode.LeftArrow) &&
												w.$ahb.stop(x, !0);
										}),
									),
									this.U.add(
										this.bb.submenu.onDidCancel(() => {
											this.bb.parent.focus(), this.eb(!0);
										}),
									),
									this.bb.submenu.focus(M),
									(this.Q = this.bb.submenu);
							}
					}
					hb(M) {
						this.g && this.g?.setAttribute("aria-expanded", M);
					}
					P() {
						super.P();
						const N =
							this.element &&
							this.element.classList.contains("focused") &&
							this.I.selectionForegroundColor
								? this.I.selectionForegroundColor
								: this.I.foregroundColor;
						this.S && (this.S.style.color = N ?? "");
					}
					dispose() {
						super.dispose(),
							this.Y.dispose(),
							this.Q && (this.Q.dispose(), (this.Q = null)),
							this.R && (this.R = void 0);
					}
				}
				class T extends m.$_ib {
					constructor(M, N, A, R) {
						super(M, N, A), (this.b = R);
					}
					render(M) {
						super.render(M),
							this.I &&
								(this.I.style.borderBottomColor = this.b.separatorColor
									? `${this.b.separatorColor}`
									: "");
					}
				}
				function P(D) {
					const M = e.$gob,
						N = M.exec(D);
					if (!N) return D;
					const A = !N[1];
					return D.replace(M, A ? "$2$3" : "").trim();
				}
				function k(D) {
					const M = (0, n.$9j)()[D.id];
					return `.codicon-${D.id}:before { content: '\\${M.toString(16)}'; }`;
				}
				function L(D, M) {
					let N = `
.monaco-menu {
	font-size: 13px;
	border-radius: 5px;
	min-width: 160px;
}

${k(c.$ak.menuSelection)}
${k(c.$ak.menuSubmenu)}

.monaco-menu .monaco-action-bar {
	text-align: right;
	overflow: hidden;
	white-space: nowrap;
}

.monaco-menu .monaco-action-bar .actions-container {
	display: flex;
	margin: 0 auto;
	padding: 0;
	width: 100%;
	justify-content: flex-end;
}

.monaco-menu .monaco-action-bar.vertical .actions-container {
	display: inline-block;
}

.monaco-menu .monaco-action-bar.reverse .actions-container {
	flex-direction: row-reverse;
}

.monaco-menu .monaco-action-bar .action-item {
	cursor: pointer;
	display: inline-block;
	transition: transform 50ms ease;
	position: relative;  /* DO NOT REMOVE - this is the key to preventing the ghosting icon bug in Chrome 42 */
}

.monaco-menu .monaco-action-bar .action-item.disabled {
	cursor: default;
}

.monaco-menu .monaco-action-bar .action-item .icon,
.monaco-menu .monaco-action-bar .action-item .codicon {
	display: inline-block;
}

.monaco-menu .monaco-action-bar .action-item .codicon {
	display: flex;
	align-items: center;
}

.monaco-menu .monaco-action-bar .action-label {
	font-size: 11px;
	margin-right: 4px;
}

.monaco-menu .monaco-action-bar .action-item.disabled .action-label,
.monaco-menu .monaco-action-bar .action-item.disabled .action-label:hover {
	color: var(--vscode-disabledForeground);
}

/* Vertical actions */

.monaco-menu .monaco-action-bar.vertical {
	text-align: left;
}

.monaco-menu .monaco-action-bar.vertical .action-item {
	display: block;
}

.monaco-menu .monaco-action-bar.vertical .action-label.separator {
	display: block;
	border-bottom: 1px solid var(--vscode-menu-separatorBackground);
	padding-top: 1px;
	padding: 30px;
}

.monaco-menu .secondary-actions .monaco-action-bar .action-label {
	margin-left: 6px;
}

/* Action Items */
.monaco-menu .monaco-action-bar .action-item.select-container {
	overflow: hidden; /* somehow the dropdown overflows its container, we prevent it here to not push */
	flex: 1;
	max-width: 170px;
	min-width: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 10px;
}

.monaco-menu .monaco-action-bar.vertical {
	margin-left: 0;
	overflow: visible;
}

.monaco-menu .monaco-action-bar.vertical .actions-container {
	display: block;
}

.monaco-menu .monaco-action-bar.vertical .action-item {
	padding: 0;
	transform: none;
	display: flex;
}

.monaco-menu .monaco-action-bar.vertical .action-item.active {
	transform: none;
}

.monaco-menu .monaco-action-bar.vertical .action-menu-item {
	flex: 1 1 auto;
	display: flex;
	height: 2em;
	align-items: center;
	position: relative;
	margin: 0 4px;
	border-radius: 4px;
}

.monaco-menu .monaco-action-bar.vertical .action-menu-item:hover .keybinding,
.monaco-menu .monaco-action-bar.vertical .action-menu-item:focus .keybinding {
	opacity: unset;
}

.monaco-menu .monaco-action-bar.vertical .action-label {
	flex: 1 1 auto;
	text-decoration: none;
	padding: 0 1em;
	background: none;
	font-size: 12px;
	line-height: 1;
}

.monaco-menu .monaco-action-bar.vertical .keybinding,
.monaco-menu .monaco-action-bar.vertical .submenu-indicator {
	display: inline-block;
	flex: 2 1 auto;
	padding: 0 1em;
	text-align: right;
	font-size: 12px;
	line-height: 1;
}

.monaco-menu .monaco-action-bar.vertical .submenu-indicator {
	height: 100%;
}

.monaco-menu .monaco-action-bar.vertical .submenu-indicator.codicon {
	font-size: 16px !important;
	display: flex;
	align-items: center;
}

.monaco-menu .monaco-action-bar.vertical .submenu-indicator.codicon::before {
	margin-left: auto;
	margin-right: -20px;
}

.monaco-menu .monaco-action-bar.vertical .action-item.disabled .keybinding,
.monaco-menu .monaco-action-bar.vertical .action-item.disabled .submenu-indicator {
	opacity: 0.4;
}

.monaco-menu .monaco-action-bar.vertical .action-label:not(.separator) {
	display: inline-block;
	box-sizing: border-box;
	margin: 0;
}

.monaco-menu .monaco-action-bar.vertical .action-item {
	position: static;
	overflow: visible;
}

.monaco-menu .monaco-action-bar.vertical .action-item .monaco-submenu {
	position: absolute;
}

.monaco-menu .monaco-action-bar.vertical .action-label.separator {
	width: 100%;
	height: 0px !important;
	opacity: 1;
}

.monaco-menu .monaco-action-bar.vertical .action-label.separator.text {
	padding: 0.7em 1em 0.1em 1em;
	font-weight: bold;
	opacity: 1;
}

.monaco-menu .monaco-action-bar.vertical .action-label:hover {
	color: inherit;
}

.monaco-menu .monaco-action-bar.vertical .menu-item-check {
	position: absolute;
	visibility: hidden;
	width: 1em;
	height: 100%;
}

.monaco-menu .monaco-action-bar.vertical .action-menu-item.checked .menu-item-check {
	visibility: visible;
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Context Menu */

.context-view.monaco-menu-container {
	outline: 0;
	border: none;
	animation: fadeIn 0.083s linear;
	-webkit-app-region: no-drag;
}

.context-view.monaco-menu-container :focus,
.context-view.monaco-menu-container .monaco-action-bar.vertical:focus,
.context-view.monaco-menu-container .monaco-action-bar.vertical :focus {
	outline: 0;
}

.hc-black .context-view.monaco-menu-container,
.hc-light .context-view.monaco-menu-container,
:host-context(.hc-black) .context-view.monaco-menu-container,
:host-context(.hc-light) .context-view.monaco-menu-container {
	box-shadow: none;
}

.hc-black .monaco-menu .monaco-action-bar.vertical .action-item.focused,
.hc-light .monaco-menu .monaco-action-bar.vertical .action-item.focused,
:host-context(.hc-black) .monaco-menu .monaco-action-bar.vertical .action-item.focused,
:host-context(.hc-light) .monaco-menu .monaco-action-bar.vertical .action-item.focused {
	background: none;
}

/* Vertical Action Bar Styles */

.monaco-menu .monaco-action-bar.vertical {
	padding: 4px 0;
}

.monaco-menu .monaco-action-bar.vertical .action-menu-item {
	height: 2em;
}

.monaco-menu .monaco-action-bar.vertical .action-label:not(.separator),
.monaco-menu .monaco-action-bar.vertical .keybinding {
	font-size: inherit;
	padding: 0 2em;
	max-height: 100%;
}

.monaco-menu .monaco-action-bar.vertical .menu-item-check {
	font-size: inherit;
	width: 2em;
}

.monaco-menu .monaco-action-bar.vertical .action-label.separator {
	font-size: inherit;
	margin: 5px 0 !important;
	padding: 0;
	border-radius: 0;
}

.linux .monaco-menu .monaco-action-bar.vertical .action-label.separator,
:host-context(.linux) .monaco-menu .monaco-action-bar.vertical .action-label.separator {
	margin-left: 0;
	margin-right: 0;
}

.monaco-menu .monaco-action-bar.vertical .submenu-indicator {
	font-size: 60%;
	padding: 0 1.8em;
}

.linux .monaco-menu .monaco-action-bar.vertical .submenu-indicator,
:host-context(.linux) .monaco-menu .monaco-action-bar.vertical .submenu-indicator {
	height: 100%;
	mask-size: 10px 10px;
	-webkit-mask-size: 10px 10px;
}

.monaco-menu .action-item {
	cursor: default;
}`;
					if (M) {
						N += `
			/* Arrows */
			.monaco-scrollable-element > .scrollbar > .scra {
				cursor: pointer;
				font-size: 11px !important;
			}

			.monaco-scrollable-element > .visible {
				opacity: 1;

				/* Background rule added for IE9 - to allow clicks on dom node */
				background:rgba(0,0,0,0);

				transition: opacity 100ms linear;
			}
			.monaco-scrollable-element > .invisible {
				opacity: 0;
				pointer-events: none;
			}
			.monaco-scrollable-element > .invisible.fade {
				transition: opacity 800ms linear;
			}

			/* Scrollable Content Inset Shadow */
			.monaco-scrollable-element > .shadow {
				position: absolute;
				display: none;
			}
			.monaco-scrollable-element > .shadow.top {
				display: block;
				top: 0;
				left: 3px;
				height: 3px;
				width: 100%;
			}
			.monaco-scrollable-element > .shadow.left {
				display: block;
				top: 3px;
				left: 0;
				height: 100%;
				width: 3px;
			}
			.monaco-scrollable-element > .shadow.top-left-corner {
				display: block;
				top: 0;
				left: 0;
				height: 3px;
				width: 3px;
			}
		`;
						const A = D.scrollbarShadow;
						A &&
							(N += `
				.monaco-scrollable-element > .shadow.top {
					box-shadow: ${A} 0 6px 6px -6px inset;
				}

				.monaco-scrollable-element > .shadow.left {
					box-shadow: ${A} 6px 0 6px -6px inset;
				}

				.monaco-scrollable-element > .shadow.top.left {
					box-shadow: ${A} 6px 6px 6px -6px inset;
				}
			`);
						const R = D.scrollbarSliderBackground;
						R &&
							(N += `
				.monaco-scrollable-element > .scrollbar > .slider {
					background: ${R};
				}
			`);
						const O = D.scrollbarSliderHoverBackground;
						O &&
							(N += `
				.monaco-scrollable-element > .scrollbar > .slider:hover {
					background: ${O};
				}
			`);
						const B = D.scrollbarSliderActiveBackground;
						B &&
							(N += `
				.monaco-scrollable-element > .scrollbar > .slider.active {
					background: ${B};
				}
			`);
					}
					return N;
				}
			},
		)

import '../../../../require.js';
import '../../../../exports.js';
import '../../../nls.js';
import '../../../base/common/actions.js';
import '../../../base/browser/dom.js';
import '../../../platform/commands/common/commands.js';
import '../../../base/common/lifecycle.js';
import '../../../platform/contextview/browser/contextView.js';
import '../../../platform/theme/common/themeService.js';
import '../../services/activity/common/activity.js';
import '../../../platform/instantiation/common/instantiation.js';
import '../../../base/browser/dnd.js';
import '../../../platform/keybinding/common/keybinding.js';
import '../../../base/common/event.js';
import '../dnd.js';
import '../../../base/browser/ui/actionbar/actionViewItems.js';
import '../../../base/common/codicons.js';
import '../../../base/common/themables.js';
import '../../../platform/hover/browser/hover.js';
import '../../../base/common/async.js';
import '../../../platform/configuration/common/configuration.js';
import '../../../platform/theme/common/colorRegistry.js';
define(
			de[1349],
			he([
				1, 0, 4, 50, 7, 31, 3, 49, 35, 260, 5, 323, 39, 6, 362, 198, 14, 26, 72,
				15, 10, 51,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*actions*/,
				w /*dom*/,
				E /*commands*/,
				C /*lifecycle*/,
				d /*contextView*/,
				m /*themeService*/,
				r /*activity*/,
				u /*instantiation*/,
				a /*dnd*/,
				h /*keybinding*/,
				c /*event*/,
				n /*dnd*/,
				g /*actionViewItems*/,
				p /*codicons*/,
				o /*themables*/,
				f /*hover*/,
				b /*async*/,
				s /*configuration*/,
				l /*colorRegistry*/,
) {
				"use strict";
				var y, $;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$erc =
						e.$drc =
						e.$crc =
						e.$brc =
						e.$arc =
						e.$_qc =
						e.$$qc =
							void 0);
				class v extends i.$rj {
					constructor(N) {
						super(N.id, N.name, N.classNames?.join(" "), !0),
							(this.g = N),
							(this.a = this.D(new c.$re())),
							(this.onDidChangeCompositeBarActionItem = this.a.event),
							(this.b = this.D(new c.$re())),
							(this.onDidChangeActivity = this.b.event);
					}
					get compositeBarActionItem() {
						return this.g;
					}
					set compositeBarActionItem(N) {
						(this.n = N.name), (this.g = N), this.a.fire(this);
					}
					get activity() {
						return this.f;
					}
					set activity(N) {
						(this.f = N), this.b.fire(N);
					}
					activate() {
						this.checked || this.J(!0);
					}
					deactivate() {
						this.checked && this.J(!1);
					}
				}
				e.$$qc = v;
				let S = class extends g.$$ib {
					static {
						y = this;
					}
					static {
						this.b = 0;
					}
					constructor(N, A, R, O, B, U, z) {
						super(null, N, A),
							(this.P = R),
							(this.Q = O),
							(this.R = B),
							(this.S = U),
							(this.U = z),
							(this.I = this.D(new C.$2c())),
							(this.M = this.D(new C.$Zc())),
							(this.O = new b.$Yh(() => this.showHover(), 0)),
							(this.m = A),
							this.D(this.Q.onDidColorThemeChange(this.Y, this)),
							this.D(N.onDidChangeCompositeBarActionItem(() => this.Z())),
							this.D(
								c.Event.filter(
									z.onDidUpdateKeybindings,
									() => this.L !== this.eb(),
								)(() => this.cb()),
							),
							this.D(N.onDidChangeActivity(() => this.ab())),
							this.D((0, C.$Yc)(() => this.O.cancel()));
					}
					get W() {
						return this._action.compositeBarActionItem;
					}
					X() {
						const N = this.Q.getColorTheme(),
							A = this.m.colors(N);
						if (this.g) {
							if (this.m.icon) {
								const R = this._action.checked
									? A.activeForegroundColor
									: A.inactiveForegroundColor;
								this.W.iconUrl
									? ((this.g.style.backgroundColor = R ? R.toString() : ""),
										(this.g.style.color = ""))
									: ((this.g.style.color = R ? R.toString() : ""),
										(this.g.style.backgroundColor = ""));
							} else {
								const R = this._action.checked
										? A.activeForegroundColor
										: A.inactiveForegroundColor,
									O = this._action.checked ? A.activeBorderBottomColor : null;
								(this.g.style.color = R ? R.toString() : ""),
									(this.g.style.borderBottomColor = O ? O.toString() : "");
							}
							this.c.style.setProperty(
								"--insert-border-color",
								A.dragAndDropBorder ? A.dragAndDropBorder.toString() : "",
							);
						}
						if (this.r) {
							const R = A.badgeForeground ?? N.getColor(l.$2P),
								O = A.badgeBackground ?? N.getColor(l.$1P),
								B = N.getColor(l.$OP);
							(this.r.style.color = R ? R.toString() : ""),
								(this.r.style.backgroundColor = O ? O.toString() : ""),
								(this.r.style.borderStyle =
									B && !this.m.compact ? "solid" : ""),
								(this.r.style.borderWidth = B ? "1px" : ""),
								(this.r.style.borderColor = B ? B.toString() : "");
						}
					}
					render(N) {
						super.render(N),
							(this.c = N),
							this.m.icon && this.c.classList.add("icon"),
							this.m.hasPopup
								? (this.c.setAttribute("role", "button"),
									this.c.setAttribute("aria-haspopup", "true"))
								: this.c.setAttribute("role", "tab"),
							this.D(
								(0, w.$0fb)(this.c, w.$$gb.MOUSE_DOWN, () => {
									this.c.classList.add("clicked");
								}),
							),
							this.D(
								(0, w.$0fb)(this.c, w.$$gb.MOUSE_UP, () => {
									this.J && clearTimeout(this.J),
										(this.J = setTimeout(() => {
											this.c.classList.remove("clicked");
										}, 800));
								}),
							),
							(this.g = (0, w.$fhb)(N, (0, w.$)("a"))),
							(this.h = (0, w.$fhb)(N, (0, w.$)(".badge"))),
							(this.r = (0, w.$fhb)(this.h, (0, w.$)(".badge-content"))),
							(0, w.$fhb)(N, (0, w.$)(".active-item-indicator")),
							(0, w.hide)(this.h),
							this.Z(),
							this.X(),
							this.fb();
					}
					Y(N) {
						this.X();
					}
					Z() {
						this.u(), this.ab(), this.cb(), this.X();
					}
					ab() {
						const N = this.action;
						if (!this.h || !this.r || !(N instanceof v)) return;
						const A = N.activity;
						this.I.clear(), (0, w.$9fb)(this.r), (0, w.hide)(this.h);
						const R = this.P(this.W.id);
						if (A && R) {
							const { badge: O } = A,
								B = [];
							if ((this.m.compact && B.push("compact"), O instanceof r.$0qc))
								(0, w.show)(this.h), B.push("progress-badge");
							else if (O instanceof r.$8qc && O.number) {
								let U = O.number.toString();
								if (O.number > 999) {
									const z = O.number / 1e3,
										F = Math.floor(z);
									z > F ? (U = `${F}K+`) : (U = `${z}K`);
								}
								this.m.compact && U.length >= 3 && B.push("compact-content"),
									(this.r.textContent = U),
									(0, w.show)(this.h);
							}
							B.length &&
								(this.h.classList.add(...B),
								(this.I.value = (0, C.$Yc)(() =>
									this.h.classList.remove(...B),
								)));
						}
						this.cb();
					}
					u() {
						(this.g.className = "action-label"),
							this.W.classNames && this.g.classList.add(...this.W.classNames),
							this.m.icon || (this.g.textContent = this.action.label);
					}
					cb() {
						const N = this.db();
						[this.g, this.h, this.c].forEach((A) => {
							A &&
								(A.setAttribute("aria-label", N),
								A.setAttribute("title", ""),
								A.removeAttribute("title"));
						});
					}
					db() {
						this.L = this.eb();
						let N = this.L
							? (0, t.localize)(3046, null, this.W.name, this.L)
							: this.W.name;
						const A = this.action.activity?.badge;
						return (
							A?.getDescription() &&
								(N = (0, t.localize)(3047, null, N, A.getDescription())),
							N
						);
					}
					eb() {
						return (
							this.W.keybindingId
								? this.U.lookupKeybinding(this.W.keybindingId)
								: null
						)?.getLabel();
					}
					fb() {
						this.M.clear(),
							this.cb(),
							this.M.add(
								(0, w.$0fb)(
									this.c,
									w.$$gb.MOUSE_OVER,
									() => {
										this.O.isScheduled() ||
											(Date.now() - y.b < 200
												? this.showHover(!0)
												: this.O.schedule(
														this.S.getValue("workbench.hover.delay"),
													));
									},
									!0,
								),
							),
							this.M.add(
								(0, w.$0fb)(
									this.c,
									w.$$gb.MOUSE_LEAVE,
									(N) => {
										N.target === this.c &&
											((y.b = Date.now()), this.R.hideHover(), this.O.cancel());
									},
									!0,
								),
							),
							this.M.add(
								(0, C.$Yc)(() => {
									this.R.hideHover(), this.O.cancel();
								}),
							);
					}
					showHover(N = !1) {
						if (this.N && !this.N.isDisposed) return;
						const A = this.m.hoverOptions.position();
						this.N = this.R.showHover({
							target: this.c,
							content: this.db(),
							position: { hoverPosition: A },
							persistence: { hideOnKeyDown: !0 },
							appearance: {
								showPointer: !0,
								compact: !0,
								skipFadeInAnimation: N,
							},
						});
					}
					dispose() {
						super.dispose(), this.J && clearTimeout(this.J), this.h.remove();
					}
				};
				(e.$_qc = S),
					(e.$_qc =
						S =
						y =
							Ne([j(3, m.$iP), j(4, f.$Uyb), j(5, s.$gj), j(6, h.$uZ)], S));
				class I extends v {
					constructor(N) {
						super({
							id: "additionalComposites.action",
							name: (0, t.localize)(3048, null),
							classNames: o.ThemeIcon.asClassNameArray(p.$ak.more),
						}),
							(this.c = N);
					}
					async run() {
						this.c();
					}
				}
				e.$arc = I;
				let T = class extends S {
					constructor(N, A, R, O, B, U, z, F, x, H, q, V) {
						super(
							N,
							{ icon: !0, colors: U, hasPopup: !0, hoverOptions: z },
							() => !0,
							x,
							H,
							q,
							V,
						),
							(this.a = A),
							(this.s = R),
							(this.gb = O),
							(this.hb = B),
							(this.ib = F);
					}
					showMenu() {
						this.ib.showContextMenu({
							getAnchor: () => this.c,
							getActions: () => this.jb(),
							getCheckedActionsRepresentation: () => "radio",
						});
					}
					jb() {
						return this.a().map((N) => {
							const A = this.hb(N.id);
							A.checked = this.s() === A.id;
							const R = this.gb(N.id);
							let O;
							return (
								R instanceof r.$8qc && (O = R.number),
								O
									? (A.label = (0, t.localize)(3049, null, N.name, O))
									: (A.label = N.name || ""),
								A
							);
						});
					}
				};
				(e.$brc = T),
					(e.$brc = T =
						Ne(
							[
								j(7, d.$Xxb),
								j(8, m.$iP),
								j(9, f.$Uyb),
								j(10, s.$gj),
								j(11, h.$uZ),
							],
							T,
						));
				let P = class extends i.$rj {
					constructor(N) {
						super("activitybar.manage.extension", (0, t.localize)(3050, null)),
							(this.a = N);
					}
					run(N) {
						return this.a.executeCommand("_extensions.manage", N);
					}
				};
				P = Ne([j(0, E.$ek)], P);
				let k = class extends S {
					static {
						$ = this;
					}
					constructor(N, A, R, O, B, U, z, F, x, H, q, V, G, K) {
						super(A, N, F.areBadgesEnabled.bind(F), V, G, K, H),
							(this.s = A),
							(this.gb = R),
							(this.hb = O),
							(this.ib = B),
							(this.jb = U),
							(this.kb = z),
							(this.lb = F),
							(this.mb = x),
							$.a || ($.a = q.createInstance(P));
					}
					render(N) {
						super.render(N),
							this.H(),
							this.t(),
							this.D(
								(0, w.$0fb)(this.c, w.$$gb.CONTEXT_MENU, (R) => {
									w.$ahb.stop(R, !0), this.ob(N);
								}),
							);
						let A;
						this.D(
							n.$TSb.INSTANCE.registerDraggable(
								this.c,
								() => ({ type: "composite", id: this.W.id }),
								{
									onDragOver: (R) => {
										const O =
											R.dragAndDropData.getData().id !== this.W.id &&
											this.kb.onDragOver(
												R.dragAndDropData,
												this.W.id,
												R.eventData,
											);
										(0, n.$USb)(R.eventData.dataTransfer, "move", O),
											(A = this.nb(N, O, R.eventData));
									},
									onDragLeave: (R) => {
										A = this.nb(N, !1, R.eventData);
									},
									onDragEnd: (R) => {
										A = this.nb(N, !1, R.eventData);
									},
									onDrop: (R) => {
										w.$ahb.stop(R.eventData, !0),
											this.kb.drop(
												R.dragAndDropData,
												this.W.id,
												R.eventData,
												A,
											),
											(A = this.nb(N, !1, R.eventData));
									},
									onDragStart: (R) => {
										R.dragAndDropData.getData().id === this.W.id &&
											(R.eventData.dataTransfer &&
												(R.eventData.dataTransfer.effectAllowed = "move"),
											this.blur());
									},
								},
							),
						),
							[this.h, this.g].forEach((R) =>
								this.D(
									new a.$Nhb(R, () => {
										this.action.checked || this.action.run();
									}),
								),
							),
							this.X();
					}
					nb(N, A, R) {
						const O = N.getBoundingClientRect(),
							B = R.clientX,
							U = R.clientY,
							z = O.bottom - O.top,
							F = O.right - O.left,
							x = U <= O.top + z * 0.4,
							H = U > O.bottom - z * 0.4,
							q = U <= O.top + z * 0.5,
							V = B <= O.left + F * 0.4,
							G = B > O.right - F * 0.4,
							K = B <= O.left + F * 0.5,
							J = N.classList,
							W = {
								vertical: J.contains("top")
									? "top"
									: J.contains("bottom")
										? "bottom"
										: void 0,
								horizontal: J.contains("left")
									? "left"
									: J.contains("right")
										? "right"
										: void 0,
							},
							X = x || (q && !W.vertical) || (!H && W.vertical === "top"),
							Y = H || (!q && !W.vertical) || (!x && W.vertical === "bottom"),
							ie = V || (K && !W.horizontal) || (!G && W.horizontal === "left"),
							ne =
								G || (!K && !W.horizontal) || (!V && W.horizontal === "right");
						if (
							(N.classList.toggle("top", A && X),
							N.classList.toggle("bottom", A && Y),
							N.classList.toggle("left", A && ie),
							N.classList.toggle("right", A && ne),
							!!A)
						)
							return { verticallyBefore: X, horizontallyBefore: ie };
					}
					ob(N) {
						const A = [this.gb, this.hb],
							R = this.ib(this.W.id);
						R.length && A.push(...R),
							this.s.compositeBarActionItem.extensionId &&
								(A.push(new i.$tj()), A.push($.a)),
							this.lb.isPinned(this.W.id)
								? ((this.gb.label = (0, t.localize)(3051, null, this.W.name)),
									(this.gb.checked = !1))
								: (this.gb.label = (0, t.localize)(3052, null, this.W.name)),
							this.lb.areBadgesEnabled(this.W.id)
								? (this.hb.label = (0, t.localize)(3053, null))
								: (this.hb.label = (0, t.localize)(3054, null));
						const U = this.jb();
						U.length && (A.push(new i.$tj()), A.push(...U));
						const z = (0, w.$tgb)(N),
							F = { x: Math.floor(z.left + z.width / 2), y: z.top + z.height };
						this.mb.showContextMenu({
							getAnchor: () => F,
							getActions: () => A,
							getActionsContext: () => this.W.id,
						});
					}
					H() {
						this.action.checked
							? (this.c.classList.add("checked"),
								this.c.setAttribute("aria-label", this.z() ?? this.c.title),
								this.c.setAttribute("aria-expanded", "true"),
								this.c.setAttribute("aria-selected", "true"))
							: (this.c.classList.remove("checked"),
								this.c.setAttribute("aria-label", this.z() ?? this.c.title),
								this.c.setAttribute("aria-expanded", "false"),
								this.c.setAttribute("aria-selected", "false")),
							this.X();
					}
					t() {
						this.element &&
							(this.action.enabled
								? this.element.classList.remove("disabled")
								: this.element.classList.add("disabled"));
					}
					dispose() {
						super.dispose(), this.g.remove();
					}
				};
				(e.$crc = k),
					(e.$crc =
						k =
						$ =
							Ne(
								[
									j(8, d.$Xxb),
									j(9, h.$uZ),
									j(10, u.$Li),
									j(11, m.$iP),
									j(12, f.$Uyb),
									j(13, s.$gj),
								],
								k,
							));
				class L extends i.$rj {
					constructor(N, A) {
						super(
							"show.toggleCompositePinned",
							N ? N.name : (0, t.localize)(3055, null),
						),
							(this.a = N),
							(this.b = A),
							(this.checked = !!this.a && this.b.isPinned(this.a.id));
					}
					async run(N) {
						const A = this.a ? this.a.id : N;
						this.b.isPinned(A) ? this.b.unpin(A) : this.b.pin(A);
					}
				}
				e.$drc = L;
				class D extends i.$rj {
					constructor(N, A) {
						super(
							"show.toggleCompositeBadge",
							N ? N.name : (0, t.localize)(3056, null),
						),
							(this.a = N),
							(this.b = A),
							(this.checked = !1);
					}
					async run(N) {
						const A = this.a ? this.a.id : N;
						this.b.toggleBadgeEnablement(A);
					}
				}
				e.$erc = D;
			},
		),
		
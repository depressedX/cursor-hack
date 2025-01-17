import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/browser/dom.js';
import '../../../base/browser/keyboardEvent.js';
import '../../../base/browser/ui/actionbar/actionViewItems.js';
import '../../../base/browser/ui/dropdown/dropdownActionViewItem.js';
import '../../../base/common/actions.js';
import '../../../base/common/keybindingLabels.js';
import '../../../base/common/keyCodes.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/platform.js';
import '../../../nls.js';
import '../common/actions.js';
import '../../action/common/action.js';
import '../../contextkey/common/contextkey.js';
import '../../contextview/browser/contextView.js';
import '../../instantiation/common/instantiation.js';
import '../../keybinding/common/keybinding.js';
import '../../notification/common/notification.js';
import '../../storage/common/storage.js';
import '../../theme/common/themeService.js';
import '../../../base/common/themables.js';
import '../../theme/common/theme.js';
import '../../../base/common/types.js';
import '../../theme/common/colorRegistry.js';
import '../../theme/browser/defaultStyles.js';
import '../../accessibility/common/accessibility.js';
import '../../../base/common/constants.js';
import '../../../css!vs/platform/actions/browser/menuEntryActionViewItem.js';
define(
			de[92],
			he([
				1, 0, 7, 114, 198, 437, 50, 592, 27, 3, 12, 4, 11, 599, 8, 49, 5, 39,
				40, 21, 35, 26, 212, 28, 51, 106, 91, 58, 2328,
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
					(e.$Oyb = e.$Nyb = e.$Myb = e.$Lyb = void 0),
					(e.$Jyb = P),
					(e.$Kyb = k),
					(e.$Pyb = O);
				function P(B, U, z, F) {
					let x, H, q;
					if (Array.isArray(B)) (q = B), (x = U), (H = z);
					else {
						const K = U;
						(q = B.getActions(K)), (x = z), (H = F);
					}
					const V = t.$Fhb.getInstance(),
						G = V.keyStatus.altKey || ((u.$l || u.$n) && V.keyStatus.shiftKey);
					L(q, x, G, H ? (K) => K === H : (K) => K === "navigation");
				}
				function k(B, U, z, F, x, H) {
					let q, V, G, K, J;
					if (Array.isArray(B)) (J = B), (q = U), (V = z), (G = F), (K = x);
					else {
						const X = U;
						(J = B.getActions(X)), (q = z), (V = F), (G = x), (K = H);
					}
					L(J, q, !1, typeof V == "string" ? (X) => X === V : V, G, K);
				}
				function L(
					B,
					U,
					z,
					F = (q) => q === "navigation",
					x = () => !1,
					H = !1,
				) {
					let q, V;
					Array.isArray(U)
						? ((q = U), (V = U))
						: ((q = U.primary), (V = U.secondary));
					const G = new Set();
					for (const [K, J] of B) {
						let W;
						F(K)
							? ((W = q), W.length > 0 && H && W.push(new C.$tj()))
							: ((W = V), W.length > 0 && W.push(new C.$tj()));
						for (let X of J) {
							z && (X = X instanceof h.$2X && X.alt ? X.alt : X);
							const Y = W.push(X);
							X instanceof C.$uj &&
								G.add({ group: K, action: X, index: Y - 1 });
						}
					}
					for (const { group: K, action: J, index: W } of G) {
						const X = F(K) ? q : V,
							Y = J.actions;
						x(J, K, X.length) && X.splice(W, 1, ...Y);
					}
				}
				let D = class extends w.$_ib {
					dispose() {
						super.dispose(), this.y?.dispose();
					}
					constructor(U, z, F, x, H, q, V, G) {
						super(void 0, U, {
							icon: !!(U.class || U.item.icon),
							label: !U.class && !U.item.icon,
							draggable: z?.draggable,
							keybinding: z?.keybinding,
							hoverDelegate: z?.hoverDelegate,
						}),
							(this.W = z),
							(this.X = F),
							(this.Y = x),
							(this.Z = H),
							(this.ab = q),
							(this.bb = V),
							(this.cb = G),
							(this.n = !1),
							(this.r = this.D(new r.$2c())),
							(this.s = t.$Fhb.getInstance());
					}
					get db() {
						return this._action;
					}
					get eb() {
						return (this.n && this.db.alt) || this.db;
					}
					async onClick(U) {
						U.preventDefault(), U.stopPropagation();
						try {
							await this.actionRunner.run(this.eb, this._context);
						} catch (z) {
							this.Y.error(z);
						}
					}
					render(U) {
						if (this._action.id === T.$GV || this._action.id === T.$HV) {
							this.y && this.y.dispose();
							const z = document.createElement("span");
							z.classList.add("keybinding");
							const F = this.X.lookupKeybinding(this.eb.id, this.Z),
								x = F && F.getLabel();
							(z.textContent = x || ""),
								(z.style.fontSize = "10px"),
								(z.style.opacity = "0.5"),
								(z.style.display = "none"),
								(this.M = z);
							const H = this.Z;
							this.y = H.onDidChangeContext((q) => {
								q.affectsSome(new Set(["focusedView"])) &&
									(H.getContextKeyValue("focusedView") === T.$GX ||
									H.getContextKeyValue("focusedView") === T.$FX
										? (this.fb && clearTimeout(this.fb),
											Date.now() - T.$5V < 3e3
												? (this.fb = setTimeout(
														() => {
															z.style.display = "inline";
														},
														3e3 - (Date.now() - T.$5V),
													))
												: (z.style.display = "inline"))
										: (z.style.display = "none"));
							});
						}
						if (
							(super.render(U),
							U.classList.add("menu-entry"),
							this.m.icon && this.jb(this.db.item),
							this.db.alt)
						) {
							let z = !1;
							const F = () => {
								const x =
									!!this.db.alt?.enabled &&
									(!this.cb.isMotionReduced() || z) &&
									(this.s.keyStatus.altKey || (this.s.keyStatus.shiftKey && z));
								x !== this.n && ((this.n = x), this.u(), this.C(), this.G());
							};
							this.D(this.s.event(F)),
								this.D(
									(0, t.$0fb)(U, "mouseleave", (x) => {
										(z = !1), F();
									}),
								),
								this.D(
									(0, t.$0fb)(U, "mouseenter", (x) => {
										(z = !0), F();
									}),
								),
								F();
						}
					}
					u() {
						this.m.label && this.I && (this.I.textContent = this.eb.label);
					}
					z() {
						const U = this.X.lookupKeybinding(this.eb.id, this.Z),
							z = U && U.getLabel(),
							F = this.eb.tooltip || this.eb.label;
						let x = z ? (0, a.localize)(1653, null, F, z) : F;
						if (!this.n && this.db.alt?.enabled) {
							const H = this.db.alt.tooltip || this.db.alt.label,
								q = this.X.lookupKeybinding(this.db.alt.id, this.Z),
								V = q && q.getLabel(),
								G = V ? (0, a.localize)(1654, null, H, V) : H;
							x = (0, a.localize)(
								1655,
								null,
								x,
								d.$2ob.modifierLabels[u.OS].altKey,
								G,
							);
						}
						return x;
					}
					G() {
						this.m.icon &&
							(this.eb !== this.db
								? this.db.alt && this.jb(this.db.alt.item)
								: this.jb(this.db.item));
					}
					jb(U) {
						this.r.value = void 0;
						const { element: z, I: F } = this;
						if (!z || !F) return;
						const x =
							this.eb.checked && (0, c.$hk)(U.toggled) && U.toggled.icon
								? U.toggled.icon
								: U.icon;
						if (x)
							if (l.ThemeIcon.isThemeIcon(x)) {
								const H = l.ThemeIcon.asClassNameArray(x);
								F.classList.add(...H),
									(this.r.value = (0, r.$Yc)(() => {
										F.classList.remove(...H);
									}));
							} else
								(F.style.backgroundImage = (0, y.$hP)(
									this.ab.getColorTheme().type,
								)
									? (0, t.$vhb)(x.dark)
									: (0, t.$vhb)(x.light)),
									F.classList.add("icon"),
									(this.r.value = (0, r.$Xc)(
										(0, r.$Yc)(() => {
											(F.style.backgroundImage = ""),
												F.classList.remove("icon");
										}),
										this.ab.onDidColorThemeChange(() => {
											this.G();
										}),
									));
					}
				};
				(e.$Lyb = D),
					(e.$Lyb = D =
						Ne(
							[
								j(2, o.$uZ),
								j(3, f.$4N),
								j(4, n.$6j),
								j(5, s.$iP),
								j(6, g.$Xxb),
								j(7, I.$XK),
							],
							D,
						));
				class M extends D {
					render(U) {
						(this.m.label = !0),
							(this.m.icon = !1),
							super.render(U),
							U.classList.add("text-only"),
							U.classList.toggle("use-comma", this.W?.useComma ?? !1);
					}
					u() {
						const U = this.X.lookupKeybinding(this._action.id, this.Z);
						if (!U) return super.u();
						if (this.I) {
							const z = M.c(U);
							this.W?.conversational
								? (this.I.textContent = (0, a.localize)(
										1656,
										null,
										this._action.label,
										z,
									))
								: (this.I.textContent = (0, a.localize)(
										1657,
										null,
										this._action.label,
										z,
									));
						}
					}
					static c(U) {
						return U.getLabel()
							?.replace(/\benter\b/gi, "\u23CE")
							.replace(/\bEscape\b/gi, "Esc");
					}
				}
				e.$Myb = M;
				let N = class extends E.$Pob {
					constructor(U, z, F, x, H) {
						const q = {
							...z,
							menuAsChild: z?.menuAsChild ?? !1,
							classNames:
								z?.classNames ??
								(l.ThemeIcon.isThemeIcon(U.item.icon)
									? l.ThemeIcon.asClassName(U.item.icon)
									: void 0),
							keybindingProvider:
								z?.keybindingProvider ?? ((V) => F.lookupKeybinding(V.id)),
						};
						super(U, { getActions: () => U.actions }, x, q),
							(this.g = F),
							(this.r = x),
							(this.O = H);
					}
					render(U) {
						super.render(U),
							(0, $.$vg)(this.element),
							U.classList.add("menu-entry");
						const z = this._action,
							{ icon: F } = z.item;
						if (F && !l.ThemeIcon.isThemeIcon(F)) {
							this.element.classList.add("icon");
							const x = () => {
								this.element &&
									(this.element.style.backgroundImage = (0, y.$hP)(
										this.O.getColorTheme().type,
									)
										? (0, t.$vhb)(F.dark)
										: (0, t.$vhb)(F.light));
							};
							x(),
								this.D(
									this.O.onDidColorThemeChange(() => {
										x();
									}),
								);
						}
					}
				};
				(e.$Nyb = N),
					(e.$Nyb = N = Ne([j(2, o.$uZ), j(3, g.$Xxb), j(4, s.$iP)], N));
				let A = class extends w.$$ib {
					get onDidChangeDropdownVisibility() {
						return this.g.onDidChangeVisibility;
					}
					constructor(U, z, F, x, H, q, V, G) {
						super(null, U),
							(this.r = F),
							(this.s = x),
							(this.y = H),
							(this.I = q),
							(this.J = V),
							(this.L = G),
							(this.h = null),
							(this.b = z),
							(this.n = `${U.item.submenu.id}_lastActionId`);
						let K;
						const J = z?.persistLastActionId
							? G.get(this.n, b.StorageScope.WORKSPACE)
							: void 0;
						J && (K = U.actions.find((X) => J === X.id)),
							K || (K = U.actions[0]),
							(this.c = this.J.createInstance(D, K, { keybinding: this.N(K) }));
						const W = {
							keybindingProvider: (X) => this.r.lookupKeybinding(X.id),
							...z,
							menuAsChild: z?.menuAsChild ?? !0,
							classNames: z?.classNames ?? ["codicon", "codicon-chevron-down"],
							actionRunner: z?.actionRunner ?? new C.$sj(),
						};
						(this.g = new E.$Pob(U, U.actions, this.y, W)),
							this.D(
								this.g.actionRunner.onDidRun((X) => {
									X.action instanceof h.$2X && this.M(X.action);
								}),
							);
					}
					M(U) {
						this.b?.persistLastActionId &&
							this.L.store(
								this.n,
								U.id,
								b.StorageScope.WORKSPACE,
								b.StorageTarget.MACHINE,
							),
							this.c.dispose(),
							(this.c = this.J.createInstance(D, U, { keybinding: this.N(U) })),
							(this.c.actionRunner = new (class extends C.$sj {
								async q(z, F) {
									await z.run(void 0);
								}
							})()),
							this.h &&
								this.c.render(
									(0, t.$ghb)(this.h, (0, t.$)(".action-container")),
								);
					}
					N(U) {
						let z;
						if (this.b?.renderKeybindingWithDefaultActionLabel) {
							const F = this.r.lookupKeybinding(U.id);
							F && (z = `(${F.getLabel()})`);
						}
						return z;
					}
					setActionContext(U) {
						super.setActionContext(U),
							this.c.setActionContext(U),
							this.g.setActionContext(U);
					}
					render(U) {
						(this.h = U),
							super.render(this.h),
							this.h.classList.add("monaco-dropdown-with-default");
						const z = (0, t.$)(".action-container");
						this.c.render((0, t.$fhb)(this.h, z)),
							this.D(
								(0, t.$0fb)(z, t.$$gb.KEY_DOWN, (x) => {
									const H = new i.$7fb(x);
									H.equals(m.KeyCode.RightArrow) &&
										((this.c.element.tabIndex = -1),
										this.g.focus(),
										H.stopPropagation());
								}),
							);
						const F = (0, t.$)(".dropdown-action-container");
						this.g.render((0, t.$fhb)(this.h, F)),
							this.D(
								(0, t.$0fb)(F, t.$$gb.KEY_DOWN, (x) => {
									const H = new i.$7fb(x);
									H.equals(m.KeyCode.LeftArrow) &&
										((this.c.element.tabIndex = 0),
										this.g.setFocusable(!1),
										this.c.element?.focus(),
										H.stopPropagation());
								}),
							);
					}
					focus(U) {
						U
							? this.g.focus()
							: ((this.c.element.tabIndex = 0), this.c.element.focus());
					}
					blur() {
						(this.c.element.tabIndex = -1), this.g.blur(), this.h.blur();
					}
					setFocusable(U) {
						U
							? (this.c.element.tabIndex = 0)
							: ((this.c.element.tabIndex = -1), this.g.setFocusable(!1));
					}
					dispose() {
						this.c.dispose(), this.g.dispose(), super.dispose();
					}
				};
				(e.$Oyb = A),
					(e.$Oyb = A =
						Ne(
							[
								j(2, o.$uZ),
								j(3, f.$4N),
								j(4, g.$Xxb),
								j(5, h.$YX),
								j(6, p.$Li),
								j(7, b.$lq),
							],
							A,
						));
				let R = class extends w.$ajb {
					constructor(U, z) {
						super(
							null,
							U,
							U.actions.map((F) => ({
								text:
									F.id === C.$tj.ID
										? "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"
										: F.label,
								isDisabled: !F.enabled,
							})),
							0,
							z,
							S.$Fyb,
							{ ariaLabel: U.tooltip, optionsAsChildren: !0 },
						),
							this.select(
								Math.max(
									0,
									U.actions.findIndex((F) => F.checked),
								),
							);
					}
					render(U) {
						super.render(U), (U.style.borderColor = (0, v.$rP)(v.$bS));
					}
					n(U, z) {
						const F = this.action.actions[z];
						F && this.actionRunner.run(F);
					}
				};
				R = Ne([j(1, g.$Wxb)], R);
				function O(B, U, z) {
					return U instanceof h.$2X
						? B.createInstance(D, U, z)
						: U instanceof h.$1X
							? U.item.isSelection
								? B.createInstance(R, U)
								: U.item.rememberDefaultAction
									? B.createInstance(A, U, { ...z, persistLastActionId: !0 })
									: B.createInstance(N, U, z)
							: void 0;
				}
			},
		),
		
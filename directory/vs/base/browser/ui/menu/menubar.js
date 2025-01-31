import '../../../../../require.js';
import '../../../../../exports.js';
import '../../browser.js';
import '../../dom.js';
import '../../keyboardEvent.js';
import '../../mouseEvent.js';
import '../../touch.js';
import './menu.js';
import '../../../common/actions.js';
import '../../../common/arrays.js';
import '../../../common/async.js';
import '../../../common/codicons.js';
import '../../../common/themables.js';
import '../../../common/event.js';
import '../../../common/keyCodes.js';
import '../../../common/lifecycle.js';
import '../../../common/platform.js';
import '../../../common/strings.js';
import '../../../../nls.js';
import '../../window.js';
import '../../../../css!vs/base/browser/ui/menu/menubar.js';
define(
			de[2686],
			he([
				1, 0, 139, 7, 114, 168, 159, 1168, 50, 24, 15, 14, 26, 6, 27, 3, 12, 37,
				4, 75, 2246,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*browser*/,
 i /*dom*/,
 w /*keyboardEvent*/,
 E /*mouseEvent*/,
 C /*touch*/,
 d /*menu*/,
 m /*actions*/,
 r /*arrays*/,
 u /*async*/,
 a /*codicons*/,
 h /*themables*/,
 c /*event*/,
 n /*keyCodes*/,
 g /*lifecycle*/,
 p /*platform*/,
 o /*strings*/,
 f /*nls*/,
 b /*window*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$9ob = void 0),
					(t = mt(t)),
					(i = mt(i)),
					(o = mt(o)),
					(f = mt(f));
				const s = i.$;
				var l;
				(function ($) {
					($[($.HIDDEN = 0)] = "HIDDEN"),
						($[($.VISIBLE = 1)] = "VISIBLE"),
						($[($.FOCUSED = 2)] = "FOCUSED"),
						($[($.OPEN = 3)] = "OPEN");
				})(l || (l = {}));
				class y extends g.$1c {
					static {
						this.OVERFLOW_INDEX = -1;
					}
					constructor(v, S, I) {
						super(),
							(this.F = v),
							(this.G = S),
							(this.H = I),
							(this.h = !1),
							(this.j = !1),
							(this.m = !1),
							(this.n = !1),
							(this.r = !1),
							(this.y = 0),
							(this.z = void 0),
							(this.C = this.D(new g.$Zc())),
							this.F.setAttribute("role", "menubar"),
							this.S && this.F.classList.add("compact"),
							(this.a = []),
							(this.q = new Map()),
							(this.s = l.VISIBLE),
							(this.u = this.D(new c.$re())),
							(this.w = this.D(new c.$re())),
							this.createOverflowMenu(),
							(this.g = this.D(new u.$Yh(() => this.update(), 200))),
							(this.t = this.G.actionRunner ?? this.D(new m.$sj())),
							this.D(
								this.t.onWillRun(() => {
									this.U();
								}),
							),
							this.D(i.$Fhb.getInstance().event(this.cb, this)),
							this.D(
								i.$0fb(this.F, i.$$gb.KEY_DOWN, (P) => {
									const k = new w.$7fb(P);
									let L = !0;
									const D = P.key ? P.key.toLocaleLowerCase() : "",
										M = p.$m && !this.S;
									if (
										k.equals(n.KeyCode.LeftArrow) ||
										(M && k.equals(n.KeyCode.Tab | n.KeyMod.Shift))
									)
										this.W();
									else if (
										k.equals(n.KeyCode.RightArrow) ||
										(M && k.equals(n.KeyCode.Tab))
									)
										this.X();
									else if (k.equals(n.KeyCode.Escape) && this.P && !this.Q)
										this.U();
									else if (
										!this.Q &&
										!k.ctrlKey &&
										this.G.enableMnemonics &&
										this.Z &&
										this.q.has(D)
									) {
										const N = this.q.get(D);
										this.bb(N, !1);
									} else L = !1;
									!this.S &&
										(k.equals(n.KeyCode.Tab | n.KeyMod.Shift) ||
											k.equals(n.KeyCode.Tab)) &&
										k.preventDefault(),
										L && (k.preventDefault(), k.stopPropagation());
								}),
							);
						const T = i.getWindow(this.F);
						this.D(
							i.$0fb(T, i.$$gb.MOUSE_DOWN, () => {
								this.P && this.U();
							}),
						),
							this.D(
								i.$0fb(this.F, i.$$gb.FOCUS_IN, (P) => {
									const k = P;
									k.relatedTarget &&
										(this.F.contains(k.relatedTarget) ||
											(this.f = k.relatedTarget));
								}),
							),
							this.D(
								i.$0fb(this.F, i.$$gb.FOCUS_OUT, (P) => {
									const k = P;
									k.relatedTarget
										? k.relatedTarget &&
											!this.F.contains(k.relatedTarget) &&
											((this.f = void 0), this.U())
										: this.U();
								}),
							),
							this.D(
								i.$0fb(T, i.$$gb.KEY_DOWN, (P) => {
									if (
										!this.G.enableMnemonics ||
										!P.altKey ||
										P.ctrlKey ||
										P.defaultPrevented
									)
										return;
									const k = P.key.toLocaleLowerCase();
									if (!this.q.has(k)) return;
									(this.Z = !0), this.Y(!0);
									const L = this.q.get(k);
									this.bb(L, !1);
								}),
							),
							this.U();
					}
					push(v) {
						(0, r.$6b)(v).forEach((I) => {
							const T = this.a.length,
								P = (0, d.$kob)(I.label),
								k = d.$gob.exec(I.label);
							if (k) {
								const L = k[1] ? k[1] : k[3];
								this.L(this.a.length, L);
							}
							if (this.S) this.a.push(I);
							else {
								const L = s("div.menubar-menu-button", {
										role: "menuitem",
										tabindex: -1,
										"aria-label": P,
										"aria-haspopup": !0,
									}),
									D = s("div.menubar-menu-title", {
										role: "none",
										"aria-hidden": !0,
									});
								L.appendChild(D),
									this.F.insertBefore(L, this.b.buttonElement),
									this.J(D, L, I.label),
									this.D(
										i.$0fb(L, i.$$gb.KEY_UP, (M) => {
											const N = new w.$7fb(M);
											let A = !0;
											(N.equals(n.KeyCode.DownArrow) ||
												N.equals(n.KeyCode.Enter)) &&
											!this.Q
												? ((this.c = { index: T }),
													(this.j = !0),
													(this.O = l.OPEN))
												: (A = !1),
												A && (N.preventDefault(), N.stopPropagation());
										}),
									),
									this.D(C.$Qhb.addTarget(L)),
									this.D(
										i.$0fb(L, C.EventType.Tap, (M) => {
											(this.Q &&
												this.c &&
												this.c.holder &&
												i.$Bgb(M.initialTarget, this.c.holder)) ||
												((this.n = !1),
												this.bb(T, !0),
												M.preventDefault(),
												M.stopPropagation());
										}),
									),
									this.D(
										i.$0fb(L, i.$$gb.MOUSE_DOWN, (M) => {
											if (!new E.$2fb(i.getWindow(L), M).leftButton) {
												M.preventDefault();
												return;
											}
											this.Q ? (this.n = !1) : ((this.n = !0), this.bb(T, !0)),
												M.preventDefault(),
												M.stopPropagation();
										}),
									),
									this.D(
										i.$0fb(L, i.$$gb.MOUSE_UP, (M) => {
											M.defaultPrevented ||
												(this.n ? (this.n = !1) : this.P && this.bb(T, !0));
										}),
									),
									this.D(
										i.$0fb(L, i.$$gb.MOUSE_ENTER, () => {
											this.Q && !this.db(T)
												? (L.focus(), this.eb(), this.fb(T, !1))
												: this.P &&
													!this.Q &&
													((this.c = { index: T }), L.focus());
										}),
									),
									this.a.push({
										label: I.label,
										actions: I.actions,
										buttonElement: L,
										titleElement: D,
									});
							}
						});
					}
					createOverflowMenu() {
						const v = this.S ? f.localize(26, null) : f.localize(27, null),
							S = s("div.menubar-menu-button", {
								role: "menuitem",
								tabindex: this.S ? 0 : -1,
								"aria-label": v,
								"aria-haspopup": !0,
							}),
							I = s(
								"div.menubar-menu-title.toolbar-toggle-more" +
									h.ThemeIcon.asCSSSelector(a.$ak.menuBarMore),
								{ role: "none", "aria-hidden": !0 },
							);
						S.appendChild(I),
							this.F.appendChild(S),
							(S.style.visibility = "hidden"),
							this.D(
								i.$0fb(S, i.$$gb.KEY_UP, (T) => {
									const P = new w.$7fb(T);
									let k = !0;
									const L = [n.KeyCode.Enter];
									this.S
										? (L.push(n.KeyCode.Space),
											this.G.compactMode?.horizontal ===
											d.HorizontalDirection.Right
												? L.push(n.KeyCode.RightArrow)
												: this.G.compactMode?.horizontal ===
														d.HorizontalDirection.Left &&
													L.push(n.KeyCode.LeftArrow))
										: L.push(n.KeyCode.DownArrow),
										L.some((D) => P.equals(D)) && !this.Q
											? ((this.c = { index: y.OVERFLOW_INDEX }),
												(this.j = !0),
												(this.O = l.OPEN))
											: (k = !1),
										k && (P.preventDefault(), P.stopPropagation());
								}),
							),
							this.D(C.$Qhb.addTarget(S)),
							this.D(
								i.$0fb(S, C.EventType.Tap, (T) => {
									(this.Q &&
										this.c &&
										this.c.holder &&
										i.$Bgb(T.initialTarget, this.c.holder)) ||
										((this.n = !1),
										this.bb(y.OVERFLOW_INDEX, !0),
										T.preventDefault(),
										T.stopPropagation());
								}),
							),
							this.D(
								i.$0fb(S, i.$$gb.MOUSE_DOWN, (T) => {
									if (!new E.$2fb(i.getWindow(S), T).leftButton) {
										T.preventDefault();
										return;
									}
									this.Q
										? (this.n = !1)
										: ((this.n = !0), this.bb(y.OVERFLOW_INDEX, !0)),
										T.preventDefault(),
										T.stopPropagation();
								}),
							),
							this.D(
								i.$0fb(S, i.$$gb.MOUSE_UP, (T) => {
									T.defaultPrevented ||
										(this.n
											? (this.n = !1)
											: this.P && this.bb(y.OVERFLOW_INDEX, !0));
								}),
							),
							this.D(
								i.$0fb(S, i.$$gb.MOUSE_ENTER, () => {
									this.Q && !this.db(y.OVERFLOW_INDEX)
										? (this.b.buttonElement.focus(),
											this.eb(),
											this.fb(y.OVERFLOW_INDEX, !1))
										: this.P &&
											!this.Q &&
											((this.c = { index: y.OVERFLOW_INDEX }), S.focus());
								}),
							),
							(this.b = {
								buttonElement: S,
								titleElement: I,
								label: "More",
								actions: [],
							});
					}
					updateMenu(v) {
						const S = this.a.filter((I) => I.label === v.label);
						S && S.length && (S[0].actions = v.actions);
					}
					dispose() {
						super.dispose(),
							this.a.forEach((v) => {
								v.titleElement?.remove(), v.buttonElement?.remove();
							}),
							this.b.titleElement.remove(),
							this.b.buttonElement.remove(),
							(0, g.$Vc)(this.z),
							(this.z = void 0);
					}
					blur() {
						this.U();
					}
					getWidth() {
						if (!this.S && this.a) {
							const v = this.a[0].buttonElement.getBoundingClientRect().left;
							return (
								(this.R
									? this.b.buttonElement.getBoundingClientRect().right
									: this.a[
											this.a.length - 1
										].buttonElement.getBoundingClientRect().right) - v
							);
						}
						return 0;
					}
					getHeight() {
						return this.F.clientHeight;
					}
					toggleFocus() {
						!this.P && this.G.visibility !== "hidden"
							? ((this.Z = !0),
								(this.c = { index: this.y > 0 ? 0 : y.OVERFLOW_INDEX }),
								(this.O = l.FOCUSED))
							: this.Q || this.U();
					}
					I() {
						if (!this.a || !this.a.length) return;
						const v = "overflow-menu-only";
						this.F.classList.toggle(v, !1);
						const S = this.F.offsetWidth;
						let I = 0,
							T = this.S;
						const P = this.y;
						this.y = 0;
						const k = this.a.filter(
							(L) => L.buttonElement !== void 0 && L.titleElement !== void 0,
						);
						for (const L of k) {
							if (!T) {
								const D = L.buttonElement.offsetWidth;
								I + D > S
									? (T = !0)
									: ((I += D),
										this.y++,
										this.y > P &&
											(L.buttonElement.style.visibility = "visible"));
							}
							T && (L.buttonElement.style.visibility = "hidden");
						}
						if (this.y - 1 <= k.length / 4) {
							for (const L of k) L.buttonElement.style.visibility = "hidden";
							(T = !0), (this.y = 0), (I = 0);
						}
						if (this.S) {
							this.b.actions = [];
							for (let D = this.y; D < this.a.length; D++)
								this.b.actions.push(
									new m.$uj(
										`menubar.submenu.${this.a[D].label}`,
										this.a[D].label,
										this.a[D].actions || [],
									),
								);
							const L = this.G.getCompactMenuActions?.();
							L &&
								L.length &&
								(this.b.actions.push(new m.$tj()), this.b.actions.push(...L)),
								(this.b.buttonElement.style.visibility = "visible");
						} else if (T) {
							for (; I + this.b.buttonElement.offsetWidth > S && this.y > 0; ) {
								this.y--;
								const L = k[this.y].buttonElement.offsetWidth;
								(k[this.y].buttonElement.style.visibility = "hidden"), (I -= L);
							}
							this.b.actions = [];
							for (let L = this.y; L < k.length; L++)
								this.b.actions.push(
									new m.$uj(
										`menubar.submenu.${k[L].label}`,
										k[L].label,
										k[L].actions || [],
									),
								);
							this.b.buttonElement.nextElementSibling !==
								k[this.y].buttonElement &&
								(this.b.buttonElement.remove(),
								this.F.insertBefore(
									this.b.buttonElement,
									k[this.y].buttonElement,
								)),
								(this.b.buttonElement.style.visibility = "visible");
						} else
							this.b.buttonElement.remove(),
								this.F.appendChild(this.b.buttonElement),
								(this.b.buttonElement.style.visibility = "hidden");
						this.F.classList.toggle(v, this.y === 0);
					}
					J(v, S, I) {
						const T = (0, d.$kob)(I);
						if (this.G.enableMnemonics) {
							const k = o.$nf(I);
							d.$hob.lastIndex = 0;
							let L = d.$hob.exec(k);
							for (; L && L[1]; ) L = d.$hob.exec(k);
							const D = (M) => M.replace(/&amp;&amp;/g, "&amp;");
							L
								? ((v.innerText = ""),
									v.append(
										o.$tf(D(k.substr(0, L.index)), " "),
										s("mnemonic", { "aria-hidden": "true" }, L[3]),
										o.$uf(D(k.substr(L.index + L[0].length)), " "),
									))
								: (v.innerText = D(k).trim());
						} else v.innerText = T.replace(/&&/g, "&");
						const P = d.$gob.exec(I);
						if (P) {
							const k = P[1] ? P[1] : P[3];
							this.G.enableMnemonics
								? S.setAttribute(
										"aria-keyshortcuts",
										"Alt+" + k.toLocaleLowerCase(),
									)
								: S.removeAttribute("aria-keyshortcuts");
						}
					}
					update(v) {
						if ((v && (this.G = v), this.P)) {
							this.r = !0;
							return;
						}
						this.a.forEach((S) => {
							!S.buttonElement ||
								!S.titleElement ||
								this.J(S.titleElement, S.buttonElement, S.label);
						}),
							this.z ||
								(this.z = i.$hgb(i.getWindow(this.F), () => {
									this.I(), (this.z = void 0);
								})),
							this.U();
					}
					L(v, S) {
						this.q.set(S.toLocaleLowerCase(), v);
					}
					M() {
						this.F.style.display !== "none" &&
							((this.F.style.display = "none"), this.u.fire(!1));
					}
					N() {
						this.F.style.display !== "flex" &&
							((this.F.style.display = "flex"), this.u.fire(!0), this.I());
					}
					get O() {
						return this.s;
					}
					set O(v) {
						if (
							(this.s >= l.FOCUSED &&
								v < l.FOCUSED &&
								this.r &&
								(this.g.schedule(), (this.r = !1)),
							v === this.s)
						)
							return;
						const S = this.isVisible,
							I = this.Q,
							T = this.P;
						switch (((this.s = v), v)) {
							case l.HIDDEN:
								S && this.M(),
									I && this.eb(),
									T &&
										((this.c = void 0),
										this.f && (this.f.focus(), (this.f = void 0)));
								break;
							case l.VISIBLE:
								S || this.N(),
									I && this.eb(),
									T &&
										(this.c &&
											(this.c.index === y.OVERFLOW_INDEX
												? this.b.buttonElement.blur()
												: this.a[this.c.index].buttonElement?.blur()),
										(this.c = void 0),
										this.f && (this.f.focus(), (this.f = void 0)));
								break;
							case l.FOCUSED:
								S || this.N(),
									I && this.eb(),
									this.c &&
										(this.c.index === y.OVERFLOW_INDEX
											? this.b.buttonElement.focus()
											: this.a[this.c.index].buttonElement?.focus());
								break;
							case l.OPEN:
								S || this.N(),
									this.c && (this.eb(), this.fb(this.c.index, this.j));
								break;
						}
						(this.s = v), this.w.fire(this.O >= l.FOCUSED);
					}
					get isVisible() {
						return this.O >= l.VISIBLE;
					}
					get P() {
						return this.O >= l.FOCUSED;
					}
					get Q() {
						return this.O >= l.OPEN;
					}
					get R() {
						return this.S || this.y < this.a.length;
					}
					get S() {
						return this.G.compactMode !== void 0;
					}
					U() {
						this.G.visibility === "toggle" || this.G.visibility === "hidden"
							? (this.O = l.HIDDEN)
							: this.G.visibility === "classic" && t.$Mfb(b.$Bfb)
								? (this.O = l.HIDDEN)
								: (this.O = l.VISIBLE),
							(this.n = !1),
							(this.Z = !1),
							this.Y(!1);
					}
					W() {
						if (!this.c || this.y === 0) return;
						let v = (this.c.index - 1 + this.y) % this.y;
						this.c.index === y.OVERFLOW_INDEX
							? (v = this.y - 1)
							: this.c.index === 0 && this.R && (v = y.OVERFLOW_INDEX),
							v !== this.c.index &&
								(this.Q
									? (this.eb(), this.fb(v))
									: this.P &&
										((this.c.index = v),
										v === y.OVERFLOW_INDEX
											? this.b.buttonElement.focus()
											: this.a[v].buttonElement?.focus()));
					}
					X() {
						if (!this.c || this.y === 0) return;
						let v = (this.c.index + 1) % this.y;
						this.c.index === y.OVERFLOW_INDEX
							? (v = 0)
							: this.c.index === this.y - 1 && (v = y.OVERFLOW_INDEX),
							v !== this.c.index &&
								(this.Q
									? (this.eb(), this.fb(v))
									: this.P &&
										((this.c.index = v),
										v === y.OVERFLOW_INDEX
											? this.b.buttonElement.focus()
											: this.a[v].buttonElement?.focus()));
					}
					Y(v) {
						this.a &&
							this.a.forEach((S) => {
								if (S.titleElement && S.titleElement.children.length) {
									const I = S.titleElement.children.item(0);
									I &&
										(I.style.textDecoration =
											this.G.alwaysOnMnemonics || v ? "underline" : "");
								}
							});
					}
					get Z() {
						return this.h;
					}
					set Z(v) {
						this.h = v;
					}
					get ab() {
						return p.$m
							? !1
							: !this.G.disableAltFocus || this.G.visibility === "toggle";
					}
					get onVisibilityChange() {
						return this.u.event;
					}
					get onFocusStateChange() {
						return this.w.event;
					}
					bb(v, S) {
						this.Q
							? this.db(v)
								? this.U()
								: (this.eb(), this.fb(v, this.j))
							: ((this.c = { index: v }), (this.j = !S), (this.O = l.OPEN));
					}
					cb(v) {
						const S = !v.altKey && !v.ctrlKey && !v.shiftKey && !v.metaKey;
						this.G.visibility !== "hidden" &&
							(v.event &&
								this.ab &&
								n.$ls.toEnum(v.event.code) === n.ScanCode.AltLeft &&
								v.event.preventDefault(),
							this.P &&
								v.lastKeyPressed === "alt" &&
								v.altKey &&
								(this.U(), (this.Z = !1), (this.m = !0)),
							S &&
								v.lastKeyPressed === "alt" &&
								v.lastKeyReleased === "alt" &&
								(this.m ||
									(!this.P && this.ab
										? ((this.Z = !0),
											(this.c = { index: this.y > 0 ? 0 : y.OVERFLOW_INDEX }),
											(this.O = l.FOCUSED))
										: this.Q || this.U())),
							!v.altKey && v.lastKeyReleased === "alt" && (this.m = !1),
							this.G.enableMnemonics &&
								this.a &&
								!this.Q &&
								this.Y((!this.m && v.altKey) || this.Z));
					}
					db(v) {
						return this.c ? this.c.index === v : !1;
					}
					eb() {
						this.c &&
							(this.c.index === y.OVERFLOW_INDEX
								? this.b.buttonElement.focus()
								: this.a[this.c.index].buttonElement?.focus(),
							this.c.holder &&
								(this.c.holder.parentElement?.classList.remove("open"),
								this.c.holder.remove()),
							this.c.widget?.dispose(),
							(this.c = { index: this.c.index })),
							this.C.clear();
					}
					fb(v, S = !0) {
						const I = v >= this.y ? y.OVERFLOW_INDEX : v,
							T = I === y.OVERFLOW_INDEX ? this.b : this.a[I];
						if (!T.actions || !T.buttonElement || !T.titleElement) return;
						const P = s("div.menubar-menu-items-holder", { title: "" });
						T.buttonElement.classList.add("open");
						const k = T.titleElement.getBoundingClientRect(),
							L = i.$ugb(T.titleElement);
						if (this.G.compactMode?.horizontal === d.HorizontalDirection.Right)
							P.style.left = `${k.left + this.F.clientWidth}px`;
						else if (
							this.G.compactMode?.horizontal === d.HorizontalDirection.Left
						) {
							const N = i.getWindow(this.F).innerWidth;
							(P.style.right = `${N - k.left}px`), (P.style.left = "auto");
						} else P.style.left = `${k.left * L}px`;
						this.G.compactMode?.vertical === d.VerticalDirection.Above
							? (P.style.top = `${k.top - this.a.length * 30 + this.F.clientHeight}px`)
							: this.G.compactMode?.vertical === d.VerticalDirection.Below
								? (P.style.top = `${k.top}px`)
								: (P.style.top = `${k.bottom * L}px`),
							T.buttonElement.appendChild(P);
						const D = {
								getKeyBinding: this.G.getKeybinding,
								actionRunner: this.t,
								enableMnemonics:
									this.G.alwaysOnMnemonics ||
									(this.Z && this.G.enableMnemonics),
								ariaLabel: T.buttonElement.getAttribute("aria-label") ?? void 0,
								expandDirection: this.S
									? this.G.compactMode
									: {
											horizontal: d.HorizontalDirection.Right,
											vertical: d.VerticalDirection.Below,
										},
								useEventAsContext: !0,
							},
							M = this.C.add(new d.Menu(P, T.actions, D, this.H));
						this.C.add(
							M.onDidCancel(() => {
								this.O = l.FOCUSED;
							}),
						),
							I !== v ? M.trigger(v - this.y) : M.focus(S),
							(this.c = { index: I, holder: P, widget: M });
					}
				}
				e.$9ob = y;
			},
		)

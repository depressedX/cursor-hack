import '../../../require.js';
import '../../../exports.js';
import './browser.js';
import './canIUse.js';
import './keyboardEvent.js';
import './mouseEvent.js';
import '../common/async.js';
import '../common/errors.js';
import '../common/event.js';
import './dompurify/dompurify.js';
import '../common/keyCodes.js';
import '../common/lifecycle.js';
import '../common/network.js';
import '../common/platform.js';
import '../common/uri.js';
import '../common/hash.js';
import './window.js';
import '../common/numbers.js';
define(
			de[7],
			he([
				1, 0, 139, 459, 114, 168, 15, 29, 6, 920, 27, 3, 23, 12, 9, 136, 75,
				201,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				var f;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Mhb =
						e.$Hhb =
						e.$Fhb =
						e.$Chb =
						e.DetectedFullscreenMode =
						e.Namespace =
						e.$ahb =
						e.$$gb =
						e.$Tgb =
						e.$pgb =
						e.$jgb =
						e.$hgb =
						e.$ggb =
						e.$fgb =
						e.$agb =
						e.$_fb =
						e.$$fb =
						e.onDidUnregisterWindow =
						e.onWillUnregisterWindow =
						e.onDidRegisterWindow =
						e.hasWindow =
						e.getWindowById =
						e.getWindowId =
						e.getWindowsCount =
						e.getWindows =
						e.getDocument =
						e.getWindow =
						e.registerWindow =
							void 0),
					(e.$9fb = b),
					(e.$0fb = l),
					(e.$bgb = T),
					(e.$cgb = P),
					(e.$dgb = k),
					(e.$egb = L),
					(e.$igb = M),
					(e.$kgb = R),
					(e.$lgb = O),
					(e.$mgb = F),
					(e.$ngb = x),
					(e.$ogb = H),
					(e.$qgb = G),
					(e.size = K),
					(e.$sgb = J),
					(e.$tgb = W),
					(e.$ugb = X),
					(e.$vgb = Y),
					(e.$wgb = ie),
					(e.$xgb = ne),
					(e.$ygb = ee),
					(e.$zgb = _),
					(e.$Agb = Q),
					(e.$Bgb = Z),
					(e.$Cgb = re),
					(e.$Dgb = oe),
					(e.$Egb = ae),
					(e.$Fgb = pe),
					(e.$Ggb = $e),
					(e.$Hgb = ye),
					(e.$Igb = ue),
					(e.$Jgb = fe),
					(e.$Kgb = me),
					(e.$Lgb = ve),
					(e.$Mgb = ge),
					(e.$Ngb = be),
					(e.$Ogb = Ce),
					(e.$Pgb = Fe),
					(e.$Qgb = Oe),
					(e.$Rgb = He),
					(e.$Sgb = Ke),
					(e.$Ugb = Te),
					(e.$Vgb = Ee),
					(e.$Wgb = Ue),
					(e.$Xgb = qe),
					(e.$Ygb = Me),
					(e.$Zgb = De),
					(e.$1gb = Re),
					(e.$2gb = je),
					(e.$3gb = Ve),
					(e.$4gb = Ze),
					(e.$5gb = et),
					(e.$6gb = rt),
					(e.$7gb = ft),
					(e.$8gb = bt),
					(e.$9gb = nt),
					(e.$0gb = lt),
					(e.$_gb = ct),
					(e.$bhb = gt),
					(e.$chb = ht),
					(e.$dhb = Nt),
					(e.$ehb = jt),
					(e.$fhb = ti),
					(e.$ghb = kt),
					(e.$hhb = hi),
					(e.$ = ze),
					(e.join = Xe),
					(e.$khb = It),
					(e.show = Lt),
					(e.hide = xt),
					(e.$nhb = Bt),
					(e.$ohb = Gt),
					(e.$phb = Mt),
					(e.$qhb = Ut),
					(e.$rhb = ei),
					(e.$shb = Dt),
					(e.$thb = Jt),
					(e.$uhb = si),
					(e.$vhb = Zt),
					(e.$whb = ci),
					(e.$xhb = ri),
					(e.$yhb = $i),
					(e.$zhb = Wt),
					(e.$Ahb = at),
					(e.$Bhb = pi),
					(e.$Dhb = Ui),
					(e.$Ehb = Gi),
					(e.$Ghb = Oi),
					(e.h = li),
					(e.$Jhb = Vi),
					(e.$Khb = _t),
					(e.$Lhb = Ft),
					(t = mt(t)),
					(m = mt(m)),
					(r = mt(r)),
					(c = mt(c)),
					(f = (function () {
						const $t = new Map();
						(0, p.$Cfb)(p.$Bfb, 1);
						const ut = { window: p.$Bfb, disposables: new a.$Zc() };
						$t.set(p.$Bfb.vscodeWindowId, ut);
						const Et = new m.$re(),
							Tt = new m.$re(),
							qt = new m.$re();
						function At(Yt, ni) {
							return (
								(typeof Yt == "number" ? $t.get(Yt) : void 0) ??
								(ni ? ut : void 0)
							);
						}
						return {
							onDidRegisterWindow: Et.event,
							onWillUnregisterWindow: qt.event,
							onDidUnregisterWindow: Tt.event,
							registerWindow(Yt) {
								if ($t.has(Yt.vscodeWindowId)) return a.$1c.None;
								const ni = new a.$Zc(),
									bi = { window: Yt, disposables: ni.add(new a.$Zc()) };
								return (
									$t.set(Yt.vscodeWindowId, bi),
									ni.add(
										(0, a.$Yc)(() => {
											$t.delete(Yt.vscodeWindowId), Tt.fire(Yt);
										}),
									),
									ni.add(
										l(Yt, e.$$gb.BEFORE_UNLOAD, () => {
											qt.fire(Yt);
										}),
									),
									Et.fire(bi),
									ni
								);
							},
							getWindows() {
								return $t.values();
							},
							getWindowsCount() {
								return $t.size;
							},
							getWindowId(Yt) {
								return Yt.vscodeWindowId;
							},
							hasWindow(Yt) {
								return $t.has(Yt);
							},
							getWindowById: At,
							getWindow(Yt) {
								const ni = Yt;
								if (ni?.ownerDocument?.defaultView)
									return ni.ownerDocument.defaultView.window;
								const bi = Yt;
								return bi?.view ? bi.view.window : p.$Bfb;
							},
							getDocument(Yt) {
								const ni = Yt;
								return (0, e.getWindow)(ni).document;
							},
						};
					})()),
					(e.registerWindow = f.registerWindow),
					(e.getWindow = f.getWindow),
					(e.getDocument = f.getDocument),
					(e.getWindows = f.getWindows),
					(e.getWindowsCount = f.getWindowsCount),
					(e.getWindowId = f.getWindowId),
					(e.getWindowById = f.getWindowById),
					(e.hasWindow = f.hasWindow),
					(e.onDidRegisterWindow = f.onDidRegisterWindow),
					(e.onWillUnregisterWindow = f.onWillUnregisterWindow),
					(e.onDidUnregisterWindow = f.onDidUnregisterWindow);
				function b($t) {
					for (; $t.firstChild; ) $t.firstChild.remove();
				}
				class s {
					constructor(ut, Et, Tt, qt) {
						(this.f = ut),
							(this.g = Et),
							(this.d = Tt),
							(this.j = qt || !1),
							this.f.addEventListener(this.g, this.d, this.j);
					}
					dispose() {
						this.d &&
							(this.f.removeEventListener(this.g, this.d, this.j),
							(this.f = null),
							(this.d = null));
					}
				}
				function l($t, ut, Et, Tt) {
					return new s($t, ut, Et, Tt);
				}
				function y($t, ut) {
					return function (Et) {
						return ut(new E.$2fb($t, Et));
					};
				}
				function $($t) {
					return function (ut) {
						return $t(new w.$7fb(ut));
					};
				}
				const v = function (ut, Et, Tt, qt) {
					let At = Tt;
					return (
						Et === "click" || Et === "mousedown" || Et === "contextmenu"
							? (At = y((0, e.getWindow)(ut), Tt))
							: (Et === "keydown" || Et === "keypress" || Et === "keyup") &&
								(At = $(Tt)),
						l(ut, Et, At, qt)
					);
				};
				e.$$fb = v;
				const S = function (ut, Et, Tt) {
					const qt = y((0, e.getWindow)(ut), Et);
					return T(ut, qt, Tt);
				};
				e.$_fb = S;
				const I = function (ut, Et, Tt) {
					const qt = y((0, e.getWindow)(ut), Et);
					return k(ut, qt, Tt);
				};
				e.$agb = I;
				function T($t, ut, Et) {
					return l(
						$t,
						c.$u && i.$Yfb.pointerEvents
							? e.$$gb.POINTER_DOWN
							: e.$$gb.MOUSE_DOWN,
						ut,
						Et,
					);
				}
				function P($t, ut, Et) {
					return l(
						$t,
						c.$u && i.$Yfb.pointerEvents
							? e.$$gb.POINTER_MOVE
							: e.$$gb.MOUSE_MOVE,
						ut,
						Et,
					);
				}
				function k($t, ut, Et) {
					return l(
						$t,
						c.$u && i.$Yfb.pointerEvents ? e.$$gb.POINTER_UP : e.$$gb.MOUSE_UP,
						ut,
						Et,
					);
				}
				function L($t, ut, Et) {
					return (0, C.$4h)($t, ut, Et);
				}
				class D extends C.$5h {
					constructor(ut, Et) {
						super(ut, Et);
					}
				}
				e.$fgb = D;
				function M($t, ut, Et, Tt) {
					let qt = 0;
					const At = $t.setInterval(() => {
							qt++,
								((typeof Tt == "number" && qt >= Tt) || ut() === !0) &&
									Yt.dispose();
						}, Et),
						Yt = (0, a.$Yc)(() => {
							$t.clearInterval(At);
						});
					return Yt;
				}
				class N extends C.$Xh {
					constructor(ut) {
						super(), (this.g = ut && (0, e.getWindow)(ut));
					}
					cancelAndSet(ut, Et, Tt) {
						return super.cancelAndSet(ut, Et, Tt ?? this.g);
					}
				}
				e.$jgb = N;
				class A {
					constructor(ut, Et = 0) {
						(this.d = ut), (this.priority = Et), (this.f = !1);
					}
					dispose() {
						this.f = !0;
					}
					execute() {
						if (!this.f)
							try {
								this.d();
							} catch (ut) {
								(0, d.$4)(ut);
							}
					}
					static sort(ut, Et) {
						return Et.priority - ut.priority;
					}
				}
				(function () {
					const $t = new Map(),
						ut = new Map(),
						Et = new Map(),
						Tt = new Map(),
						qt = (At) => {
							Et.set(At, !1);
							const Yt = $t.get(At) ?? [];
							for (
								ut.set(At, Yt), $t.set(At, []), Tt.set(At, !0);
								Yt.length > 0;
							)
								Yt.sort(A.sort), Yt.shift().execute();
							Tt.set(At, !1);
						};
					(e.$hgb = (At, Yt, ni = 0) => {
						const bi = (0, e.getWindowId)(At),
							fi = new A(Yt, ni);
						let Ti = $t.get(bi);
						return (
							Ti || ((Ti = []), $t.set(bi, Ti)),
							Ti.push(fi),
							Et.get(bi) ||
								(Et.set(bi, !0), At.requestAnimationFrame(() => qt(bi))),
							fi
						);
					}),
						(e.$ggb = (At, Yt, ni) => {
							const bi = (0, e.getWindowId)(At);
							if (Tt.get(bi)) {
								const fi = new A(Yt, ni);
								let Ti = ut.get(bi);
								return Ti || ((Ti = []), ut.set(bi, Ti)), Ti.push(fi), fi;
							} else return (0, e.$hgb)(At, Yt, ni);
						});
				})();
				function R($t, ut) {
					return (0, e.$hgb)($t, ut, 1e4);
				}
				function O($t, ut) {
					return (0, e.$hgb)($t, ut, -1e4);
				}
				const B = 8,
					U = function ($t, ut) {
						return ut;
					};
				class z extends a.$1c {
					constructor(ut, Et, Tt, qt = U, At = B) {
						super();
						let Yt = null,
							ni = 0;
						const bi = this.D(new C.$Wh()),
							fi = () => {
								(ni = new Date().getTime()), Tt(Yt), (Yt = null);
							};
						this.D(
							l(ut, Et, (Ti) => {
								Yt = qt(Yt, Ti);
								const wt = new Date().getTime() - ni;
								wt >= At ? (bi.cancel(), fi()) : bi.setIfNotSet(fi, At - wt);
							}),
						);
					}
				}
				function F($t, ut, Et, Tt, qt) {
					return new z($t, ut, Et, Tt, qt);
				}
				function x($t) {
					return (0, e.getWindow)($t).getComputedStyle($t, null);
				}
				function H($t, ut) {
					const Et = (0, e.getWindow)($t),
						Tt = Et.document;
					if ($t !== Tt.body) return new V($t.clientWidth, $t.clientHeight);
					if (c.$u && Et?.visualViewport)
						return new V(Et.visualViewport.width, Et.visualViewport.height);
					if (Et?.innerWidth && Et.innerHeight)
						return new V(Et.innerWidth, Et.innerHeight);
					if (Tt.body && Tt.body.clientWidth && Tt.body.clientHeight)
						return new V(Tt.body.clientWidth, Tt.body.clientHeight);
					if (
						Tt.documentElement &&
						Tt.documentElement.clientWidth &&
						Tt.documentElement.clientHeight
					)
						return new V(
							Tt.documentElement.clientWidth,
							Tt.documentElement.clientHeight,
						);
					if (ut) return H(ut);
					throw new Error("Unable to figure out browser width and height");
				}
				class q {
					static d(ut, Et) {
						return parseFloat(Et) || 0;
					}
					static f(ut, Et, Tt) {
						const qt = x(ut),
							At = qt ? qt.getPropertyValue(Et) : "0";
						return q.d(ut, At);
					}
					static getBorderLeftWidth(ut) {
						return q.f(ut, "border-left-width", "borderLeftWidth");
					}
					static getBorderRightWidth(ut) {
						return q.f(ut, "border-right-width", "borderRightWidth");
					}
					static getBorderTopWidth(ut) {
						return q.f(ut, "border-top-width", "borderTopWidth");
					}
					static getBorderBottomWidth(ut) {
						return q.f(ut, "border-bottom-width", "borderBottomWidth");
					}
					static getPaddingLeft(ut) {
						return q.f(ut, "padding-left", "paddingLeft");
					}
					static getPaddingRight(ut) {
						return q.f(ut, "padding-right", "paddingRight");
					}
					static getPaddingTop(ut) {
						return q.f(ut, "padding-top", "paddingTop");
					}
					static getPaddingBottom(ut) {
						return q.f(ut, "padding-bottom", "paddingBottom");
					}
					static getMarginLeft(ut) {
						return q.f(ut, "margin-left", "marginLeft");
					}
					static getMarginTop(ut) {
						return q.f(ut, "margin-top", "marginTop");
					}
					static getMarginRight(ut) {
						return q.f(ut, "margin-right", "marginRight");
					}
					static getMarginBottom(ut) {
						return q.f(ut, "margin-bottom", "marginBottom");
					}
				}
				class V {
					static {
						this.None = new V(0, 0);
					}
					constructor(ut, Et) {
						(this.width = ut), (this.height = Et);
					}
					with(ut = this.width, Et = this.height) {
						return ut !== this.width || Et !== this.height
							? new V(ut, Et)
							: this;
					}
					static is(ut) {
						return (
							typeof ut == "object" &&
							typeof ut.height == "number" &&
							typeof ut.width == "number"
						);
					}
					static lift(ut) {
						return ut instanceof V ? ut : new V(ut.width, ut.height);
					}
					static equals(ut, Et) {
						return ut === Et
							? !0
							: !ut || !Et
								? !1
								: ut.width === Et.width && ut.height === Et.height;
					}
				}
				e.$pgb = V;
				function G($t) {
					let ut = $t.offsetParent,
						Et = $t.offsetTop,
						Tt = $t.offsetLeft;
					for (
						;
						($t = $t.parentNode) !== null &&
						$t !== $t.ownerDocument.body &&
						$t !== $t.ownerDocument.documentElement;
					) {
						Et -= $t.scrollTop;
						const qt = $e($t) ? null : x($t);
						qt &&
							(Tt -= qt.direction !== "rtl" ? $t.scrollLeft : -$t.scrollLeft),
							$t === ut &&
								((Tt += q.getBorderLeftWidth($t)),
								(Et += q.getBorderTopWidth($t)),
								(Et += $t.offsetTop),
								(Tt += $t.offsetLeft),
								(ut = $t.offsetParent));
					}
					return { left: Tt, top: Et };
				}
				function K($t, ut, Et) {
					typeof ut == "number" && ($t.style.width = `${ut}px`),
						typeof Et == "number" && ($t.style.height = `${Et}px`);
				}
				function J($t, ut, Et, Tt, qt, At = "absolute") {
					typeof ut == "number" && ($t.style.top = `${ut}px`),
						typeof Et == "number" && ($t.style.right = `${Et}px`),
						typeof Tt == "number" && ($t.style.bottom = `${Tt}px`),
						typeof qt == "number" && ($t.style.left = `${qt}px`),
						($t.style.position = At);
				}
				function W($t) {
					const ut = $t.getBoundingClientRect(),
						Et = (0, e.getWindow)($t);
					return {
						left: ut.left + Et.scrollX,
						top: ut.top + Et.scrollY,
						width: ut.width,
						height: ut.height,
					};
				}
				function X($t) {
					let ut = $t,
						Et = 1;
					do {
						const Tt = x(ut).zoom;
						Tt != null && Tt !== "1" && (Et *= Tt), (ut = ut.parentElement);
					} while (ut !== null && ut !== ut.ownerDocument.documentElement);
					return Et;
				}
				function Y($t) {
					const ut = q.getMarginLeft($t) + q.getMarginRight($t);
					return $t.offsetWidth + ut;
				}
				function ie($t) {
					const ut = q.getBorderLeftWidth($t) + q.getBorderRightWidth($t),
						Et = q.getPaddingLeft($t) + q.getPaddingRight($t);
					return $t.offsetWidth - ut - Et;
				}
				function ne($t) {
					const ut = q.getMarginLeft($t) + q.getMarginRight($t);
					return $t.scrollWidth + ut;
				}
				function ee($t) {
					const ut = q.getBorderTopWidth($t) + q.getBorderBottomWidth($t),
						Et = q.getPaddingTop($t) + q.getPaddingBottom($t);
					return $t.offsetHeight - ut - Et;
				}
				function _($t) {
					const ut = q.getMarginTop($t) + q.getMarginBottom($t);
					return $t.offsetHeight + ut;
				}
				function te($t, ut) {
					if ($t === null) return 0;
					const Et = G($t),
						Tt = G(ut);
					return Et.left - Tt.left;
				}
				function Q($t, ut) {
					const Et = ut.map((qt) => Math.max(ne(qt), Y(qt)) + te(qt, $t) || 0);
					return Math.max(...Et);
				}
				function Z($t, ut) {
					return !!ut?.contains($t);
				}
				const se = "parentFlowToElementId";
				function re($t, ut) {
					$t.dataset[se] = ut.id;
				}
				function le($t) {
					const ut = $t.dataset[se];
					return typeof ut == "string"
						? $t.ownerDocument.getElementById(ut)
						: null;
				}
				function oe($t, ut) {
					let Et = $t;
					for (; Et; ) {
						if (Et === ut) return !0;
						if (Me(Et)) {
							const Tt = le(Et);
							if (Tt) {
								Et = Tt;
								continue;
							}
						}
						Et = Et.parentNode;
					}
					return !1;
				}
				function ae($t, ut, Et) {
					for (; $t && $t.nodeType === $t.ELEMENT_NODE; ) {
						if ($t.classList.contains(ut)) return $t;
						if (Et) {
							if (typeof Et == "string") {
								if ($t.classList.contains(Et)) return null;
							} else if ($t === Et) return null;
						}
						$t = $t.parentNode;
					}
					return null;
				}
				function pe($t, ut, Et) {
					return !!ae($t, ut, Et);
				}
				function $e($t) {
					return $t && !!$t.host && !!$t.mode;
				}
				function ye($t) {
					return !!ue($t);
				}
				function ue($t) {
					for (; $t.parentNode; ) {
						if ($t === $t.ownerDocument?.body) return null;
						$t = $t.parentNode;
					}
					return $e($t) ? $t : null;
				}
				function fe() {
					let $t = be().activeElement;
					for (; $t?.shadowRoot; ) $t = $t.shadowRoot.activeElement;
					return $t;
				}
				function me($t) {
					return fe() === $t;
				}
				function ve($t) {
					return Z(fe(), $t);
				}
				function ge($t) {
					return $t.ownerDocument === be();
				}
				function be() {
					return (0, e.getWindowsCount)() <= 1
						? p.$Bfb.document
						: (Array.from((0, e.getWindows)())
								.map(({ window: ut }) => ut.document)
								.find((ut) => ut.hasFocus()) ?? p.$Bfb.document);
				}
				function Ce() {
					return be().defaultView?.window ?? p.$Bfb;
				}
				const Le = new Map();
				function Fe($t) {
					return Le.has($t);
				}
				function Oe() {
					return new xe();
				}
				class xe {
					constructor() {
						(this.d = ""), (this.f = void 0);
					}
					setStyle(ut) {
						ut !== this.d &&
							((this.d = ut),
							this.f
								? (this.f.innerText = ut)
								: (this.f = He(
										p.$Bfb.document.head,
										(Et) => (Et.innerText = ut),
									)));
					}
					dispose() {
						this.f && (this.f.remove(), (this.f = void 0));
					}
				}
				function He($t = p.$Bfb.document.head, ut, Et) {
					const Tt = document.createElement("style");
					if (
						((Tt.type = "text/css"),
						(Tt.media = "screen"),
						ut?.(Tt),
						$t.appendChild(Tt),
						Et && Et.add((0, a.$Yc)(() => Tt.remove())),
						$t === p.$Bfb.document.head)
					) {
						const qt = new Set();
						Le.set(Tt, qt);
						for (const { window: At, disposables: Yt } of (0, e.getWindows)()) {
							if (At === p.$Bfb) continue;
							const ni = Yt.add(Je(Tt, qt, At));
							Et?.add(ni);
						}
					}
					return Tt;
				}
				function Ke($t) {
					const ut = new a.$Zc();
					for (const [Et, Tt] of Le) ut.add(Je(Et, Tt, $t));
					return ut;
				}
				function Je($t, ut, Et) {
					const Tt = new a.$Zc(),
						qt = $t.cloneNode(!0);
					Et.document.head.appendChild(qt),
						Tt.add((0, a.$Yc)(() => qt.remove()));
					for (const At of ke($t))
						qt.sheet?.insertRule(At.cssText, qt.sheet?.cssRules.length);
					return (
						Tt.add(
							e.$Tgb.observe($t, Tt, { childList: !0 })(() => {
								qt.textContent = $t.textContent;
							}),
						),
						ut.add(qt),
						Tt.add((0, a.$Yc)(() => ut.delete(qt))),
						Tt
					);
				}
				e.$Tgb = new (class {
					constructor() {
						this.mutationObservers = new Map();
					}
					observe($t, ut, Et) {
						let Tt = this.mutationObservers.get($t);
						Tt || ((Tt = new Map()), this.mutationObservers.set($t, Tt));
						const qt = (0, g.$Aj)(Et);
						let At = Tt.get(qt);
						if (At) At.users += 1;
						else {
							const Yt = new m.$re(),
								ni = new MutationObserver((fi) => Yt.fire(fi));
							ni.observe($t, Et);
							const bi = (At = {
								users: 1,
								observer: ni,
								onDidMutate: Yt.event,
							});
							ut.add(
								(0, a.$Yc)(() => {
									(bi.users -= 1),
										bi.users === 0 &&
											(Yt.dispose(),
											ni.disconnect(),
											Tt?.delete(qt),
											Tt?.size === 0 && this.mutationObservers.delete($t));
								}),
							),
								Tt.set(qt, At);
						}
						return At.onDidMutate;
					}
				})();
				function Te($t = p.$Bfb.document.head) {
					return Ie("meta", $t);
				}
				function Ee($t = p.$Bfb.document.head) {
					return Ie("link", $t);
				}
				function Ie($t, ut = p.$Bfb.document.head) {
					const Et = document.createElement($t);
					return ut.appendChild(Et), Et;
				}
				let Be = null;
				function Se() {
					return Be || (Be = He()), Be;
				}
				function ke($t) {
					return $t?.sheet?.rules
						? $t.sheet.rules
						: $t?.sheet?.cssRules
							? $t.sheet.cssRules
							: [];
				}
				function Ue($t, ut, Et = Se()) {
					if (!(!Et || !ut)) {
						Et.sheet?.insertRule(`${$t} {${ut}}`, 0);
						for (const Tt of Le.get(Et) ?? []) Ue($t, ut, Tt);
					}
				}
				function qe($t, ut = Se()) {
					if (!ut) return;
					const Et = ke(ut),
						Tt = [];
					for (let qt = 0; qt < Et.length; qt++) {
						const At = Et[qt];
						Ae(At) && At.selectorText.indexOf($t) !== -1 && Tt.push(qt);
					}
					for (let qt = Tt.length - 1; qt >= 0; qt--)
						ut.sheet?.deleteRule(Tt[qt]);
					for (const qt of Le.get(ut) ?? []) qe($t, qt);
				}
				function Ae($t) {
					return typeof $t.selectorText == "string";
				}
				function Me($t) {
					return (
						$t instanceof HTMLElement ||
						$t instanceof (0, e.getWindow)($t).HTMLElement
					);
				}
				function De($t) {
					return (
						$t instanceof HTMLAnchorElement ||
						$t instanceof (0, e.getWindow)($t).HTMLAnchorElement
					);
				}
				function Re($t) {
					return (
						$t instanceof HTMLSpanElement ||
						$t instanceof (0, e.getWindow)($t).HTMLSpanElement
					);
				}
				function je($t) {
					return (
						$t instanceof HTMLTextAreaElement ||
						$t instanceof (0, e.getWindow)($t).HTMLTextAreaElement
					);
				}
				function Ve($t) {
					return (
						$t instanceof HTMLInputElement ||
						$t instanceof (0, e.getWindow)($t).HTMLInputElement
					);
				}
				function Ze($t) {
					return (
						$t instanceof HTMLButtonElement ||
						$t instanceof (0, e.getWindow)($t).HTMLButtonElement
					);
				}
				function et($t) {
					return (
						$t instanceof HTMLDivElement ||
						$t instanceof (0, e.getWindow)($t).HTMLDivElement
					);
				}
				function rt($t) {
					return (
						$t instanceof SVGElement ||
						$t instanceof (0, e.getWindow)($t).SVGElement
					);
				}
				function ft($t) {
					return (
						$t instanceof MouseEvent ||
						$t instanceof (0, e.getWindow)($t).MouseEvent
					);
				}
				function bt($t) {
					return (
						$t instanceof KeyboardEvent ||
						$t instanceof (0, e.getWindow)($t).KeyboardEvent
					);
				}
				function nt($t) {
					return (
						$t instanceof PointerEvent ||
						$t instanceof (0, e.getWindow)($t).PointerEvent
					);
				}
				function lt($t) {
					return (
						$t instanceof DragEvent ||
						$t instanceof (0, e.getWindow)($t).DragEvent
					);
				}
				e.$$gb = {
					CLICK: "click",
					AUXCLICK: "auxclick",
					DBLCLICK: "dblclick",
					MOUSE_UP: "mouseup",
					MOUSE_DOWN: "mousedown",
					MOUSE_OVER: "mouseover",
					MOUSE_MOVE: "mousemove",
					MOUSE_OUT: "mouseout",
					MOUSE_ENTER: "mouseenter",
					MOUSE_LEAVE: "mouseleave",
					MOUSE_WHEEL: "wheel",
					POINTER_UP: "pointerup",
					POINTER_DOWN: "pointerdown",
					POINTER_MOVE: "pointermove",
					POINTER_LEAVE: "pointerleave",
					CONTEXT_MENU: "contextmenu",
					WHEEL: "wheel",
					KEY_DOWN: "keydown",
					KEY_PRESS: "keypress",
					KEY_UP: "keyup",
					LOAD: "load",
					BEFORE_UNLOAD: "beforeunload",
					UNLOAD: "unload",
					PAGE_SHOW: "pageshow",
					PAGE_HIDE: "pagehide",
					PASTE: "paste",
					ABORT: "abort",
					ERROR: "error",
					RESIZE: "resize",
					SCROLL: "scroll",
					FULLSCREEN_CHANGE: "fullscreenchange",
					WK_FULLSCREEN_CHANGE: "webkitfullscreenchange",
					SELECT: "select",
					CHANGE: "change",
					SUBMIT: "submit",
					RESET: "reset",
					FOCUS: "focus",
					FOCUS_IN: "focusin",
					FOCUS_OUT: "focusout",
					BLUR: "blur",
					INPUT: "input",
					STORAGE: "storage",
					DRAG_START: "dragstart",
					DRAG: "drag",
					DRAG_ENTER: "dragenter",
					DRAG_LEAVE: "dragleave",
					DRAG_OVER: "dragover",
					DROP: "drop",
					DRAG_END: "dragend",
					ANIMATION_START: t.$Pfb ? "webkitAnimationStart" : "animationstart",
					ANIMATION_END: t.$Pfb ? "webkitAnimationEnd" : "animationend",
					ANIMATION_ITERATION: t.$Pfb
						? "webkitAnimationIteration"
						: "animationiteration",
				};
				function ct($t) {
					const ut = $t;
					return !!(
						ut &&
						typeof ut.preventDefault == "function" &&
						typeof ut.stopPropagation == "function"
					);
				}
				e.$ahb = {
					stop: ($t, ut) => (
						$t.preventDefault(), ut && $t.stopPropagation(), $t
					),
				};
				function gt($t) {
					const ut = [];
					for (let Et = 0; $t && $t.nodeType === $t.ELEMENT_NODE; Et++)
						(ut[Et] = $t.scrollTop), ($t = $t.parentNode);
					return ut;
				}
				function ht($t, ut) {
					for (let Et = 0; $t && $t.nodeType === $t.ELEMENT_NODE; Et++)
						$t.scrollTop !== ut[Et] && ($t.scrollTop = ut[Et]),
							($t = $t.parentNode);
				}
				class Rt extends a.$1c {
					static m(ut) {
						if (Me(ut)) {
							const Et = ue(ut),
								Tt = Et ? Et.activeElement : ut.ownerDocument.activeElement;
							return Z(Tt, ut);
						} else {
							const Et = ut;
							return Z(Et.document.activeElement, Et.document);
						}
					}
					constructor(ut) {
						super(),
							(this.f = this.D(new m.$re())),
							(this.onDidFocus = this.f.event),
							(this.g = this.D(new m.$re())),
							(this.onDidBlur = this.g.event);
						let Et = Rt.m(ut),
							Tt = !1;
						const qt = () => {
								(Tt = !1), Et || ((Et = !0), this.f.fire());
							},
							At = () => {
								Et &&
									((Tt = !0),
									(Me(ut) ? (0, e.getWindow)(ut) : ut).setTimeout(() => {
										Tt && ((Tt = !1), (Et = !1), this.g.fire());
									}, 0));
							};
						(this.j = () => {
							Rt.m(ut) !== Et && (Et ? At() : qt());
						}),
							this.D(l(ut, e.$$gb.FOCUS, qt, !0)),
							this.D(l(ut, e.$$gb.BLUR, At, !0)),
							Me(ut) &&
								(this.D(l(ut, e.$$gb.FOCUS_IN, () => this.j())),
								this.D(l(ut, e.$$gb.FOCUS_OUT, () => this.j())));
					}
					refreshState() {
						this.j();
					}
				}
				function Nt($t) {
					return new Rt($t);
				}
				function jt($t, ut) {
					return $t.after(ut), ut;
				}
				function ti($t, ...ut) {
					if (($t.append(...ut), ut.length === 1 && typeof ut[0] != "string"))
						return ut[0];
				}
				function kt($t, ut) {
					return $t.insertBefore(ut, $t.firstChild), ut;
				}
				function hi($t, ...ut) {
					($t.innerText = ""), ti($t, ...ut);
				}
				const Kt = /([\w\-]+)?(#([\w\-]+))?((\.([\w\-]+))*)/;
				var di;
				(function ($t) {
					($t.HTML = "http://www.w3.org/1999/xhtml"),
						($t.SVG = "http://www.w3.org/2000/svg");
				})(di || (e.Namespace = di = {}));
				function Ye($t, ut, Et, ...Tt) {
					const qt = Kt.exec(ut);
					if (!qt) throw new Error("Bad use of emmet");
					const At = qt[1] || "div";
					let Yt;
					return (
						$t !== di.HTML
							? (Yt = document.createElementNS($t, At))
							: (Yt = document.createElement(At)),
						qt[3] && (Yt.id = qt[3]),
						qt[4] && (Yt.className = qt[4].replace(/\./g, " ").trim()),
						Et &&
							Object.entries(Et).forEach(([ni, bi]) => {
								typeof bi > "u" ||
									(/^on\w+$/.test(ni)
										? (Yt[ni] = bi)
										: ni === "selected"
											? bi && Yt.setAttribute(ni, "true")
											: Yt.setAttribute(ni, bi));
							}),
						Yt.append(...Tt),
						Yt
					);
				}
				function ze($t, ut, ...Et) {
					return Ye(di.HTML, $t, ut, ...Et);
				}
				ze.SVG = function ($t, ut, ...Et) {
					return Ye(di.SVG, $t, ut, ...Et);
				};
				function Xe($t, ut) {
					const Et = [];
					return (
						$t.forEach((Tt, qt) => {
							qt > 0 &&
								(ut instanceof Node
									? Et.push(ut.cloneNode())
									: Et.push(document.createTextNode(ut))),
								Et.push(Tt);
						}),
						Et
					);
				}
				function It($t, ...ut) {
					$t ? Lt(...ut) : xt(...ut);
				}
				function Lt(...$t) {
					for (const ut of $t)
						(ut.style.display = ""), ut.removeAttribute("aria-hidden");
				}
				function xt(...$t) {
					for (const ut of $t)
						(ut.style.display = "none"), ut.setAttribute("aria-hidden", "true");
				}
				function Vt($t, ut) {
					for (; $t && $t.nodeType === $t.ELEMENT_NODE; ) {
						if (Me($t) && $t.hasAttribute(ut)) return $t;
						$t = $t.parentNode;
					}
					return null;
				}
				function Bt($t) {
					!$t ||
						!$t.hasAttribute("tabIndex") ||
						($t.ownerDocument.activeElement === $t &&
							Vt($t.parentElement, "tabIndex")?.focus(),
						$t.removeAttribute("tabindex"));
				}
				function Gt($t) {
					return (ut) => {
						ut.preventDefault(), ut.stopPropagation(), $t(ut);
					};
				}
				function Mt($t) {
					return new Promise((ut) => {
						if (
							$t.document.readyState === "complete" ||
							($t.document && $t.document.body !== null)
						)
							ut(void 0);
						else {
							const Tt = () => {
								$t.window.removeEventListener("DOMContentLoaded", Tt, !1), ut();
							};
							$t.window.addEventListener("DOMContentLoaded", Tt, !1);
						}
					});
				}
				function Ut($t, ut) {
					const Et = $t.devicePixelRatio * ut;
					return Math.max(1, Math.floor(Et)) / $t.devicePixelRatio;
				}
				function ei($t) {
					p.$Bfb.open($t, "_blank", "noopener");
				}
				const mi = 780,
					ii = 640;
				function Dt($t) {
					const ut = Math.floor(
							p.$Bfb.screenLeft + p.$Bfb.innerWidth / 2 - mi / 2,
						),
						Et = Math.floor(p.$Bfb.screenTop + p.$Bfb.innerHeight / 2 - ii / 2);
					p.$Bfb.open(
						$t,
						"_blank",
						`width=${mi},height=${ii},top=${Et},left=${ut}`,
					);
				}
				function Jt($t, ut = !0) {
					const Et = p.$Bfb.open();
					return Et
						? (ut && (Et.opener = null), (Et.location.href = $t), !0)
						: !1;
				}
				function si($t, ut) {
					const Et = () => {
						ut(), (Tt = (0, e.$hgb)($t, Et));
					};
					let Tt = (0, e.$hgb)($t, Et);
					return (0, a.$Yc)(() => Tt.dispose());
				}
				h.$Zg.setPreferredWebSchema(
					/^https:/.test(p.$Bfb.location.href) ? "https" : "http",
				);
				function Zt($t) {
					return $t
						? `url('${h.$7g.uriToBrowserUri($t).toString(!0).replace(/'/g, "%27")}')`
						: "url('')";
				}
				function ci($t) {
					return `'${$t.replace(/'/g, "%27")}'`;
				}
				function ri($t, ut) {
					if ($t !== void 0) {
						const Et = $t.match(/^\s*var\((.+)\)$/);
						if (Et) {
							const Tt = Et[1].split(",", 2);
							return (
								Tt.length === 2 && (ut = ri(Tt[1].trim(), ut)),
								`var(${Tt[0]}, ${ut})`
							);
						}
						return $t;
					}
					return ut;
				}
				function $i($t, ut) {
					let Et;
					if (n.URI.isUri($t)) Et = $t.toString(!0);
					else {
						const At = new Blob([$t]);
						(Et = URL.createObjectURL(At)),
							setTimeout(() => URL.revokeObjectURL(Et));
					}
					const Tt = Ce(),
						qt = document.createElement("a");
					Tt.document.body.appendChild(qt),
						(qt.download = ut),
						(qt.href = Et),
						qt.click(),
						setTimeout(() => qt.remove());
				}
				function Wt() {
					return new Promise(($t) => {
						const ut = Ce(),
							Et = document.createElement("input");
						ut.document.body.appendChild(Et),
							(Et.type = "file"),
							(Et.multiple = !0),
							m.Event.once(m.Event.fromDOMEventEmitter(Et, "input"))(() => {
								$t(Et.files ?? void 0);
							}),
							Et.click(),
							setTimeout(() => Et.remove());
					});
				}
				var tt;
				(function ($t) {
					($t[($t.DOCUMENT = 1)] = "DOCUMENT"),
						($t[($t.BROWSER = 2)] = "BROWSER");
				})(tt || (e.DetectedFullscreenMode = tt = {}));
				function at($t) {
					return $t.document.fullscreenElement ||
						$t.document.webkitFullscreenElement ||
						$t.document.webkitIsFullScreen
						? { mode: tt.DOCUMENT, guess: !1 }
						: $t.innerHeight === $t.screen.height
							? { mode: tt.BROWSER, guess: !1 }
							: (c.$m || c.$n) &&
									$t.outerHeight === $t.screen.height &&
									$t.outerWidth === $t.screen.width
								? { mode: tt.BROWSER, guess: !0 }
								: null;
				}
				function pi($t, ut = !1) {
					const Et = document.createElement("a");
					return (
						r.addHook("afterSanitizeAttributes", (Tt) => {
							for (const qt of ["href", "src"])
								if (Tt.hasAttribute(qt)) {
									const At = Tt.getAttribute(qt);
									if (qt === "href" && At.startsWith("#")) continue;
									if (
										((Et.href = At),
										!$t.includes(Et.protocol.replace(/:$/, "")))
									) {
										if (ut && qt === "src" && Et.href.startsWith("data:"))
											continue;
										Tt.removeAttribute(qt);
									}
								}
						}),
						(0, a.$Yc)(() => {
							r.removeHook("afterSanitizeAttributes");
						})
					);
				}
				const Li = [h.Schemas.http, h.Schemas.https, h.Schemas.command];
				e.$Chb = Object.freeze([
					"a",
					"abbr",
					"b",
					"bdo",
					"blockquote",
					"br",
					"caption",
					"cite",
					"code",
					"col",
					"colgroup",
					"dd",
					"del",
					"details",
					"dfn",
					"div",
					"dl",
					"dt",
					"em",
					"figcaption",
					"figure",
					"h1",
					"h2",
					"h3",
					"h4",
					"h5",
					"h6",
					"hr",
					"i",
					"img",
					"input",
					"ins",
					"kbd",
					"label",
					"li",
					"mark",
					"ol",
					"p",
					"pre",
					"q",
					"rp",
					"rt",
					"ruby",
					"samp",
					"small",
					"small",
					"source",
					"span",
					"strike",
					"strong",
					"sub",
					"summary",
					"sup",
					"table",
					"tbody",
					"td",
					"tfoot",
					"th",
					"thead",
					"time",
					"tr",
					"tt",
					"u",
					"ul",
					"var",
					"video",
					"wbr",
				]);
				const Di = Object.freeze({
					ALLOWED_TAGS: [
						"a",
						"button",
						"blockquote",
						"code",
						"div",
						"h1",
						"h2",
						"h3",
						"h4",
						"h5",
						"h6",
						"hr",
						"input",
						"label",
						"li",
						"p",
						"pre",
						"select",
						"small",
						"span",
						"strong",
						"textarea",
						"ul",
						"ol",
					],
					ALLOWED_ATTR: [
						"href",
						"data-href",
						"data-command",
						"target",
						"title",
						"name",
						"src",
						"alt",
						"class",
						"id",
						"role",
						"tabindex",
						"style",
						"data-code",
						"width",
						"height",
						"align",
						"x-dispatch",
						"required",
						"checked",
						"placeholder",
						"type",
						"start",
					],
					RETURN_DOM: !1,
					RETURN_DOM_FRAGMENT: !1,
					RETURN_TRUSTED_TYPE: !0,
				});
				function Ui($t, ut) {
					const Et = pi(Li);
					try {
						const Tt = r.sanitize(ut, Di);
						$t.innerHTML = Tt;
					} finally {
						Et.dispose();
					}
				}
				function Wi($t) {
					const ut = new Uint16Array($t.length);
					for (let qt = 0; qt < ut.length; qt++) ut[qt] = $t.charCodeAt(qt);
					let Et = "";
					const Tt = new Uint8Array(ut.buffer);
					for (let qt = 0; qt < Tt.length; qt++)
						Et += String.fromCharCode(Tt[qt]);
					return Et;
				}
				function Gi($t) {
					return btoa(Wi($t));
				}
				class qi extends m.$re {
					constructor() {
						super(),
							(this.o = new a.$Zc()),
							(this.D = { altKey: !1, shiftKey: !1, ctrlKey: !1, metaKey: !1 }),
							this.o.add(
								m.Event.runAndSubscribe(
									e.onDidRegisterWindow,
									({ window: ut, disposables: Et }) => this.G(ut, Et),
									{ window: p.$Bfb, disposables: this.o },
								),
							);
					}
					G(ut, Et) {
						Et.add(
							l(
								ut,
								"keydown",
								(Tt) => {
									if (Tt.defaultPrevented) return;
									const qt = new w.$7fb(Tt);
									if (!(qt.keyCode === u.KeyCode.Alt && Tt.repeat)) {
										if (Tt.altKey && !this.D.altKey)
											this.D.lastKeyPressed = "alt";
										else if (Tt.ctrlKey && !this.D.ctrlKey)
											this.D.lastKeyPressed = "ctrl";
										else if (Tt.metaKey && !this.D.metaKey)
											this.D.lastKeyPressed = "meta";
										else if (Tt.shiftKey && !this.D.shiftKey)
											this.D.lastKeyPressed = "shift";
										else if (qt.keyCode !== u.KeyCode.Alt)
											this.D.lastKeyPressed = void 0;
										else return;
										(this.D.altKey = Tt.altKey),
											(this.D.ctrlKey = Tt.ctrlKey),
											(this.D.metaKey = Tt.metaKey),
											(this.D.shiftKey = Tt.shiftKey),
											this.D.lastKeyPressed &&
												((this.D.event = Tt), this.fire(this.D));
									}
								},
								!0,
							),
						),
							Et.add(
								l(
									ut,
									"keyup",
									(Tt) => {
										Tt.defaultPrevented ||
											(!Tt.altKey && this.D.altKey
												? (this.D.lastKeyReleased = "alt")
												: !Tt.ctrlKey && this.D.ctrlKey
													? (this.D.lastKeyReleased = "ctrl")
													: !Tt.metaKey && this.D.metaKey
														? (this.D.lastKeyReleased = "meta")
														: !Tt.shiftKey && this.D.shiftKey
															? (this.D.lastKeyReleased = "shift")
															: (this.D.lastKeyReleased = void 0),
											this.D.lastKeyPressed !== this.D.lastKeyReleased &&
												(this.D.lastKeyPressed = void 0),
											(this.D.altKey = Tt.altKey),
											(this.D.ctrlKey = Tt.ctrlKey),
											(this.D.metaKey = Tt.metaKey),
											(this.D.shiftKey = Tt.shiftKey),
											this.D.lastKeyReleased &&
												((this.D.event = Tt), this.fire(this.D)));
									},
									!0,
								),
							),
							Et.add(
								l(
									ut.document.body,
									"mousedown",
									() => {
										this.D.lastKeyPressed = void 0;
									},
									!0,
								),
							),
							Et.add(
								l(
									ut.document.body,
									"mouseup",
									() => {
										this.D.lastKeyPressed = void 0;
									},
									!0,
								),
							),
							Et.add(
								l(
									ut.document.body,
									"mousemove",
									(Tt) => {
										Tt.buttons && (this.D.lastKeyPressed = void 0);
									},
									!0,
								),
							),
							Et.add(
								l(ut, "blur", () => {
									this.resetKeyStatus();
								}),
							);
					}
					get keyStatus() {
						return this.D;
					}
					get isModifierPressed() {
						return (
							this.D.altKey ||
							this.D.ctrlKey ||
							this.D.metaKey ||
							this.D.shiftKey
						);
					}
					resetKeyStatus() {
						this.H(), this.fire(this.D);
					}
					H() {
						this.D = { altKey: !1, shiftKey: !1, ctrlKey: !1, metaKey: !1 };
					}
					static getInstance() {
						return qi.F || (qi.F = new qi()), qi.F;
					}
					dispose() {
						super.dispose(), this.o.dispose();
					}
				}
				e.$Fhb = qi;
				function Oi($t) {
					const ut = document.cookie.match(
						"(^|[^;]+)\\s*" + $t + "\\s*=\\s*([^;]+)",
					);
					return ut ? ut.pop() : void 0;
				}
				class yi extends a.$1c {
					constructor(ut, Et) {
						super(),
							(this.j = ut),
							(this.m = Et),
							(this.f = 0),
							(this.g = 0),
							this.n();
					}
					n() {
						this.m.onDragStart &&
							this.D(
								l(this.j, e.$$gb.DRAG_START, (ut) => {
									this.m.onDragStart?.(ut);
								}),
							),
							this.m.onDrag &&
								this.D(
									l(this.j, e.$$gb.DRAG, (ut) => {
										this.m.onDrag?.(ut);
									}),
								),
							this.D(
								l(this.j, e.$$gb.DRAG_ENTER, (ut) => {
									this.f++, (this.g = ut.timeStamp), this.m.onDragEnter?.(ut);
								}),
							),
							this.D(
								l(this.j, e.$$gb.DRAG_OVER, (ut) => {
									ut.preventDefault(),
										this.m.onDragOver?.(ut, ut.timeStamp - this.g);
								}),
							),
							this.D(
								l(this.j, e.$$gb.DRAG_LEAVE, (ut) => {
									this.f--,
										this.f === 0 && ((this.g = 0), this.m.onDragLeave?.(ut));
								}),
							),
							this.D(
								l(this.j, e.$$gb.DRAG_END, (ut) => {
									(this.f = 0), (this.g = 0), this.m.onDragEnd?.(ut);
								}),
							),
							this.D(
								l(this.j, e.$$gb.DROP, (ut) => {
									(this.f = 0), (this.g = 0), this.m.onDrop?.(ut);
								}),
							);
					}
				}
				e.$Hhb = yi;
				const Ai =
					/(?<tag>[\w\-]+)?(?:#(?<id>[\w\-]+))?(?<class>(?:\.(?:[\w\-]+))*)(?:@(?<name>(?:[\w\_])+))?/;
				function li($t, ...ut) {
					let Et, Tt;
					Array.isArray(ut[0])
						? ((Et = {}), (Tt = ut[0]))
						: ((Et = ut[0] || {}), (Tt = ut[1]));
					const qt = Ai.exec($t);
					if (!qt || !qt.groups) throw new Error("Bad use of h");
					const At = qt.groups.tag || "div",
						Yt = document.createElement(At);
					qt.groups.id && (Yt.id = qt.groups.id);
					const ni = [];
					if (qt.groups.class)
						for (const fi of qt.groups.class.split("."))
							fi !== "" && ni.push(fi);
					if (Et.className !== void 0)
						for (const fi of Et.className.split(".")) fi !== "" && ni.push(fi);
					ni.length > 0 && (Yt.className = ni.join(" "));
					const bi = {};
					if ((qt.groups.name && (bi[qt.groups.name] = Yt), Tt))
						for (const fi of Tt)
							Me(fi)
								? Yt.appendChild(fi)
								: typeof fi == "string"
									? Yt.append(fi)
									: "root" in fi &&
										(Object.assign(bi, fi), Yt.appendChild(fi.root));
					for (const [fi, Ti] of Object.entries(Et))
						if (fi !== "className")
							if (fi === "style")
								for (const [wt, We] of Object.entries(Ti))
									Yt.style.setProperty(
										wi(wt),
										typeof We == "number" ? We + "px" : "" + We,
									);
							else
								fi === "tabIndex"
									? (Yt.tabIndex = Ti)
									: Yt.setAttribute(wi(fi), Ti.toString());
					return (bi.root = Yt), bi;
				}
				function Vi($t, ...ut) {
					let Et, Tt;
					Array.isArray(ut[0])
						? ((Et = {}), (Tt = ut[0]))
						: ((Et = ut[0] || {}), (Tt = ut[1]));
					const qt = Ai.exec($t);
					if (!qt || !qt.groups) throw new Error("Bad use of h");
					const At = qt.groups.tag || "div",
						Yt = document.createElementNS("http://www.w3.org/2000/svg", At);
					qt.groups.id && (Yt.id = qt.groups.id);
					const ni = [];
					if (qt.groups.class)
						for (const fi of qt.groups.class.split("."))
							fi !== "" && ni.push(fi);
					if (Et.className !== void 0)
						for (const fi of Et.className.split(".")) fi !== "" && ni.push(fi);
					ni.length > 0 && (Yt.className = ni.join(" "));
					const bi = {};
					if ((qt.groups.name && (bi[qt.groups.name] = Yt), Tt))
						for (const fi of Tt)
							Me(fi)
								? Yt.appendChild(fi)
								: typeof fi == "string"
									? Yt.append(fi)
									: "root" in fi &&
										(Object.assign(bi, fi), Yt.appendChild(fi.root));
					for (const [fi, Ti] of Object.entries(Et))
						if (fi !== "className")
							if (fi === "style")
								for (const [wt, We] of Object.entries(Ti))
									Yt.style.setProperty(
										wi(wt),
										typeof We == "number" ? We + "px" : "" + We,
									);
							else
								fi === "tabIndex"
									? (Yt.tabIndex = Ti)
									: Yt.setAttribute(wi(fi), Ti.toString());
					return (bi.root = Yt), bi;
				}
				function wi($t) {
					return $t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
				}
				function _t($t, ut, Et) {
					for (const { name: Tt, value: qt } of $t.attributes)
						(!Et || Et.includes(Tt)) && ut.setAttribute(Tt, qt);
				}
				function ai($t, ut, Et) {
					const Tt = $t.getAttribute(Et);
					Tt ? ut.setAttribute(Et, Tt) : ut.removeAttribute(Et);
				}
				function Ft($t, ut, Et) {
					_t($t, ut, Et);
					const Tt = new a.$Zc();
					return (
						Tt.add(
							e.$Tgb.observe($t, Tt, { attributes: !0, attributeFilter: Et })(
								(qt) => {
									for (const At of qt)
										At.type === "attributes" &&
											At.attributeName &&
											ai($t, ut, At.attributeName);
								},
							),
						),
						Tt
					);
				}
				class Xt {
					constructor(ut, Et, Tt) {
						(this.f = ut), (this.g = Et), (this.d = new Int16Array(8));
						const {
								top: qt,
								left: At,
								right: Yt,
								bottom: ni,
							} = Tt.getBoundingClientRect(),
							bi = this.d;
						let fi = 0;
						(bi[fi++] = At),
							(bi[fi++] = qt),
							(bi[fi++] = Yt),
							(bi[fi++] = qt),
							(bi[fi++] = At),
							(bi[fi++] = ni),
							(bi[fi++] = Yt),
							(bi[fi++] = ni);
					}
					contains(ut, Et) {
						const { d: Tt, f: qt, g: At } = this;
						for (let Yt = 0; Yt < 4; Yt++) {
							const ni = 2 * Yt,
								bi = 2 * ((Yt + 1) % 4);
							if (
								(0, o.$5m)(
									ut,
									Et,
									qt,
									At,
									Tt[ni],
									Tt[ni + 1],
									Tt[bi],
									Tt[bi + 1],
								)
							)
								return !0;
						}
						return !1;
					}
				}
				e.$Mhb = Xt;
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	
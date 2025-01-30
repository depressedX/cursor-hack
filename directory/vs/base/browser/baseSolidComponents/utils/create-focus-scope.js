import '../../../../../require.js';
import '../../../../../exports.js';
import './utils.js';
import './solid-primitives/utils/utils.js';
import './focus.js';
import './tabbable.js';
import '../../../../../external/solid/solid.js';
define(
		de[2624],
		he([1, 0, 369, 302, 1567, 926, 13]),
		function (ce /*require*/,
 e /*exports*/,
 t /*utils*/,
 i /*utils*/,
 w /*focus*/,
 E /*tabbable*/,
 C /*solid*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Skb = n);
			const d = {
					border: "0",
					clip: "rect(0 0 0 0)",
					"clip-path": "inset(50%)",
					height: "1px",
					margin: "0 -1px -1px 0",
					overflow: "hidden",
					padding: "0",
					position: "absolute",
					width: "1px",
					"white-space": "nowrap",
				},
				m = "data-kb-top-layer",
				r = "focusScope.autoFocusOnMount",
				u = "focusScope.autoFocusOnUnmount",
				a = { bubbles: !1, cancelable: !0 };
			function h(g) {
				g && g.focus({ preventScroll: !0 });
			}
			const c = {
				stack: [],
				active() {
					return this.stack[0];
				},
				add(g) {
					g !== this.active() && this.active()?.pause(),
						(this.stack = (0, t.$Njb)(this.stack, g)),
						this.stack.unshift(g);
				},
				remove(g) {
					(this.stack = (0, t.$Njb)(this.stack, g)), this.active()?.resume();
				},
			};
			function n(g, p) {
				const [o, f] = (0, C.createSignal)(!1),
					b = {
						pause() {
							f(!0);
						},
						resume() {
							f(!1);
						},
					};
				let s = null;
				const l = (k) => g.onMountAutoFocus?.(k),
					y = (k) => g.onUnmountAutoFocus?.(k),
					$ = () => (0, t.$Rjb)(p()),
					v = () => {
						const k = $().createElement("span");
						return (
							k.setAttribute("data-focus-trap", ""),
							(k.tabIndex = 0),
							Object.assign(k.style, d),
							k
						);
					},
					S = () => {
						const k = p();
						return k
							? (0, E.$Gkb)(k, !0).filter(
									(L) => !L.hasAttribute("data-focus-trap"),
								)
							: [];
					},
					I = () => {
						const k = S();
						return k.length > 0 ? k[0] : null;
					},
					T = () => {
						const k = S();
						return k.length > 0 ? k[k.length - 1] : null;
					},
					P = () => {
						const k = p();
						if (!k) return !1;
						const L = (0, t.$Pjb)(k);
						return !L || (0, t.$Ojb)(k, L) ? !1 : (0, w.$Qkb)(L);
					};
				(0, C.createEffect)(() => {
					const k = p();
					if (!k) return;
					c.add(b);
					const L = (0, t.$Pjb)(k);
					if (!(0, t.$Ojb)(k, L)) {
						const M = new CustomEvent(r, a);
						k.addEventListener(r, l),
							k.dispatchEvent(M),
							M.defaultPrevented ||
								setTimeout(() => {
									I()?.focus({ preventScroll: !0 }),
										(0, t.$Pjb)(k) === L && k.focus({ preventScroll: !0 });
								}, 0);
					}
					(0, C.onCleanup)(() => {
						k.removeEventListener(r, l),
							setTimeout(() => {
								const M = new CustomEvent(u, a);
								P() && M.preventDefault(),
									k.addEventListener(u, y),
									k.dispatchEvent(M),
									M.defaultPrevented || h(L ?? $().body),
									k.removeEventListener(u, y),
									c.remove(b);
							}, 0);
					});
				}),
					(0, C.createEffect)(() => {
						const k = p();
						if (!k || !(0, i.$_jb)(g.trapFocus) || o()) return;
						const L = (M) => {
								const N = M.target;
								N?.closest(`[${m}]`) || ((0, t.$Ojb)(k, N) ? (s = N) : h(s));
							},
							D = (M) => {
								const A = M.relatedTarget ?? (0, t.$Pjb)(k);
								A?.closest(`[${m}]`) || (0, t.$Ojb)(k, A) || h(s);
							};
						$().addEventListener("focusin", L),
							$().addEventListener("focusout", D),
							(0, C.onCleanup)(() => {
								$().removeEventListener("focusin", L),
									$().removeEventListener("focusout", D);
							});
					}),
					(0, C.createEffect)(() => {
						const k = p();
						if (!k || !(0, i.$_jb)(g.trapFocus) || o()) return;
						const L = v();
						k.insertAdjacentElement("afterbegin", L);
						const D = v();
						k.insertAdjacentElement("beforeend", D);
						function M(A) {
							const R = I(),
								O = T();
							A.relatedTarget === R ? h(O) : h(R);
						}
						L.addEventListener("focusin", M), D.addEventListener("focusin", M);
						const N = new MutationObserver((A) => {
							for (const R of A)
								R.previousSibling === D &&
									(D.remove(), k.insertAdjacentElement("beforeend", D)),
									R.nextSibling === L &&
										(L.remove(), k.insertAdjacentElement("afterbegin", L));
						});
						N.observe(k, { childList: !0, subtree: !1 }),
							(0, C.onCleanup)(() => {
								L.removeEventListener("focusin", M),
									D.removeEventListener("focusin", M),
									L.remove(),
									D.remove(),
									N.disconnect();
							});
					});
			}
		},
	);
	var Yi =
		(this && this.__exportStar) ||
		function (ce, e) {
			for (var t in ce)
				t !== "default" &&
					!Object.prototype.hasOwnProperty.call(e, t) &&
					Ns(e, ce, t);
		};
	
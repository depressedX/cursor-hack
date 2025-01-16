define(
		de[1567],
		he([1, 0, 13, 7, 75, 926, 369, 302, 1566]),
		function (ce, e, t, i, w, E, C, d, m) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Nkb = void 0),
				(e.$Okb = r),
				(e.$Pkb = c),
				(e.$Qkb = n),
				(e.$Rkb = o),
				(i = mt(i)),
				(e.$Nkb = "data-kb-top-layer");
			function r(f, b = () => ({})) {
				return {
					focusNext: (v = {}) => {
						const S = f();
						if (!S) return;
						const {
								from: I = b().from || i.$Ngb().activeElement,
								tabbable: T = b().tabbable,
								wrap: P = b().wrap,
								accept: k = b().accept,
							} = v,
							L = c(S, { tabbable: T, accept: k });
						I && S.contains(I) && (L.currentNode = I);
						let D = L.nextNode();
						return (
							!D && P && ((L.currentNode = S), (D = L.nextNode())),
							D && u(D, !0),
							D
						);
					},
					focusPrevious: (v = {}) => {
						const S = f();
						if (!S) return;
						const {
								from: I = b().from || i.$Ngb().activeElement,
								tabbable: T = b().tabbable,
								wrap: P = b().wrap,
								accept: k = b().accept,
							} = v,
							L = c(S, { tabbable: T, accept: k });
						if (I && S.contains(I)) L.currentNode = I;
						else {
							const M = a(L);
							return M && u(M, !0), M;
						}
						let D = L.previousNode();
						return (
							!D && P && ((L.currentNode = S), (D = a(L))), D && u(D, !0), D
						);
					},
					focusFirst: (v = {}) => {
						const S = f();
						if (!S) return;
						const { tabbable: I = b().tabbable, accept: T = b().accept } = v,
							k = c(S, { tabbable: I, accept: T }).nextNode();
						return k && u(k, !0), k;
					},
					focusLast: (v = {}) => {
						const S = f();
						if (!S) return;
						const { tabbable: I = b().tabbable, accept: T = b().accept } = v,
							P = c(S, { tabbable: I, accept: T }),
							k = a(P);
						return k && u(k, !0), k;
					},
				};
			}
			function u(f, b = !1) {
				if (f != null)
					if (b)
						try {
							f.focus();
						} catch {}
					else
						try {
							f.focus({ preventScroll: !0 });
						} catch {}
			}
			function a(f) {
				let b, s;
				do (s = f.lastChild()), s && (b = s);
				while (s);
				return b;
			}
			function h(f, b) {
				return b.some((s) => s.contains(f));
			}
			function c(f, b, s) {
				const l = b?.tabbable ? E.$Fkb : E.$Ekb,
					y = document.createTreeWalker(f, NodeFilter.SHOW_ELEMENT, {
						acceptNode($) {
							return b?.from?.contains($)
								? NodeFilter.FILTER_REJECT
								: $.matches(l) &&
										(0, E.$Ikb)($) &&
										(!s || h($, s)) &&
										(!b?.accept || b.accept($))
									? NodeFilter.FILTER_ACCEPT
									: NodeFilter.FILTER_SKIP;
						},
					});
				return b?.from && (y.currentNode = b.from), y;
			}
			function n(f) {
				return f.matches(E.$Ekb) && (0, E.$Ikb)(f);
			}
			const g = "interactOutside.pointerDownOutside",
				p = "interactOutside.focusOutside";
			function o(f, b) {
				let s,
					l = d.noop;
				const y = () => (0, C.$Rjb)(b()),
					$ = (k) => f.onPointerDownOutside?.(k),
					v = (k) => f.onFocusOutside?.(k),
					S = (k) => f.onInteractOutside?.(k),
					I = (k) => {
						const L = k.target;
						return !i.$Ygb(L) ||
							L.closest(`[${e.$Nkb}]`) ||
							!(0, C.$Ojb)(y(), L) ||
							(0, C.$Ojb)(b(), L)
							? !1
							: !f.shouldExcludeElement?.(L);
					},
					T = (k) => {
						function L() {
							const D = b(),
								M = k.target;
							if (!D || !M || !I(k)) return;
							const N = (0, m.$Lkb)([$, S]);
							M.addEventListener(g, N, { once: !0 });
							const A = new CustomEvent(g, {
								bubbles: !1,
								cancelable: !0,
								detail: {
									originalEvent: k,
									isContextMenu:
										k.button === 2 || ((0, m.$Mkb)(k) && k.button === 0),
								},
							});
							M.dispatchEvent(A);
						}
						k.pointerType === "touch"
							? (y().removeEventListener("click", L),
								(l = L),
								y().addEventListener("click", L, { once: !0 }))
							: L();
					},
					P = (k) => {
						const L = b(),
							D = k.target;
						if (!L || !D || !I(k)) return;
						const M = (0, m.$Lkb)([v, S]);
						D.addEventListener(p, M, { once: !0 });
						const N = new CustomEvent(p, {
							bubbles: !1,
							cancelable: !0,
							detail: { originalEvent: k, isContextMenu: !1 },
						});
						D.dispatchEvent(N);
					};
				(0, t.createEffect)(() => {
					(0, d.$_jb)(f.isDisabled) ||
						((s = w.$Bfb.setTimeout(() => {
							y().addEventListener("pointerdown", T, !0);
						}, 0)),
						y().addEventListener("focusin", P, !0),
						(0, t.onCleanup)(() => {
							w.$Bfb.clearTimeout(s),
								y().removeEventListener("click", l),
								y().removeEventListener("pointerdown", T, !0),
								y().removeEventListener("focusin", P, !0);
						}));
				});
			}
		},
	); /*!
	 * Portions of this file are based on code from radix-ui-primitives.
	 * MIT Licensed, Copyright (c) 2022 WorkOS.
	 *
	 * Credits to the Radix UI team:
	 * https://github.com/radix-ui/primitives/blob/81b25f4b40c54f72aeb106ca0e64e1e09655153e/packages/react/focus-scope/src/FocusScope.tsx
	 *
	 * Portions of this file are based on code from zag.
	 * MIT Licensed, Copyright (c) 2021 Chakra UI.
	 *
	 * Credits to the Chakra UI team:
	 * https://github.com/chakra-ui/zag/blob/d1dbf9e240803c9e3ed81ebef363739be4273de0/packages/utilities/focus-scope/src/focus-on-child-unmount.ts
	 * https://github.com/chakra-ui/zag/blob/d1dbf9e240803c9e3ed81ebef363739be4273de0/packages/utilities/focus-scope/src/focus-containment.ts
	 */
	
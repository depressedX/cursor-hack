import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/solid.js';
import '../../dom.js';
import '../../window.js';
define(de[369], he([1, 0, 13, 7, 75]), function (ce /*require*/,
 e /*exports*/,
 t /*solid*/,
 i /*dom*/,
 w /*window*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$wjb = E),
				(e.$xjb = C),
				(e.$yjb = d),
				(e.$zjb = m),
				(e.$Ajb = r),
				(e.$Bjb = h),
				(e.$Cjb = c),
				(e.$Djb = n),
				(e.$Ejb = g),
				(e.$Fjb = p),
				(e.$Gjb = o),
				(e.$Hjb = f),
				(e.$Ijb = b),
				(e.$Jjb = s),
				(e.$Kjb = l),
				(e.$Ljb = y),
				(e.$Mjb = $),
				(e.$Njb = v),
				(e.$Ojb = S),
				(e.$Pjb = I),
				(e.$Qjb = T),
				(e.$Rjb = P),
				(e.$Sjb = k),
				(i = mt(i));
			function E(L, D) {
				return (0, t.mergeProps)(L, D);
			} /*!
			 * Original code by Chakra UI
			 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
			 *
			 * Credits to the Chakra UI team:
			 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/assertion.ts
			 */
			function C(L) {
				return typeof L == "number";
			}
			function d(L) {
				return Array.isArray(L);
			}
			function m(L) {
				return Object.prototype.toString.call(L) === "[object String]";
			}
			function r(L) {
				return typeof L == "function";
			}
			function u(L) {
				return typeof w.$Bfb > "u" || w.$Bfb.navigator == null
					? !1
					: w.$Bfb.navigator.userAgentData?.brands.some((D) =>
							L.test(D.brand),
						) || L.test(w.$Bfb.navigator.userAgent);
			}
			function a(L) {
				return typeof w.$Bfb < "u" && w.$Bfb.navigator != null
					? L.test(
							w.$Bfb.navigator.userAgentData?.platform ||
								w.$Bfb.navigator.platform,
						)
					: !1;
			}
			function h() {
				return a(/^Mac/i);
			}
			function c() {
				return a(/^iPhone/i);
			}
			function n() {
				return a(/^iPad/i) || (h() && navigator.maxTouchPoints > 1);
			}
			function g() {
				return c() || n();
			}
			function p() {
				return h() || g();
			}
			function o() {
				return u(/AppleWebKit/i) && !f();
			}
			function f() {
				return u(/Chrome/i);
			}
			function b() {
				return u(/Android/i);
			}
			function s(L) {
				return h() ? L.metaKey : L.ctrlKey;
			}
			function l(L) {
				return p() ? L.altKey : L.ctrlKey;
			}
			function y(L) {
				return (D) => `${L()}-${D}`;
			}
			function $(L, D, M = -1) {
				return M in L ? [...L.slice(0, M), D, ...L.slice(M)] : [...L, D];
			}
			function v(L, D) {
				const M = [...L],
					N = M.indexOf(D);
				return N !== -1 && M.splice(N, 1), M;
			} /*!
			 * Portions of this file are based on code from ariakit.
			 * MIT Licensed, Copyright (c) Diego Haz.
			 *
			 * Credits to the Ariakit team:
			 * https://github.com/ariakit/ariakit/blob/232bc79018ec20967fec1e097a9474aba3bb5be7/packages/ariakit-utils/src/dom.ts
			 */
			function S(L, D) {
				return L ? L === D || L.contains(D) : !1;
			}
			function I(L, D = !1) {
				const { activeElement: M } = P(L);
				if (!M?.nodeName) return null;
				if (k(M) && M.contentDocument) return I(M.contentDocument.body, D);
				if (D) {
					const N = M.getAttribute("aria-activedescendant");
					if (N) {
						const A = P(M).getElementById(N);
						if (A) return A;
					}
				}
				return M;
			}
			function T(L) {
				return P(L).defaultView || i.getWindow(L);
			}
			function P(L) {
				return L ? L.ownerDocument || L : document;
			}
			function k(L) {
				return L.tagName === "IFRAME";
			}
		}),
		
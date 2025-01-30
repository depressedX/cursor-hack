import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/strings.js';
import '../../../core/position.js';
import '../../../core/range.js';
import '../../../core/textLength.js';
define(de[492], he([1, 0, 37, 48, 17, 458]), function (ce /*require*/,
 e /*exports*/,
 t /*strings*/,
 i /*position*/,
 w /*range*/,
 E /*textLength*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$DM = void 0),
				(e.$CM = C),
				(e.$EM = d),
				(e.$FM = r),
				(e.$GM = u),
				(e.$HM = a),
				(e.$IM = h),
				(e.$JM = c),
				(e.$KM = n),
				(e.$LM = g),
				(e.$MM = p),
				(e.$NM = o),
				(e.$OM = f),
				(e.$PM = b),
				(e.$QM = s),
				(e.$RM = l),
				(e.$SM = y),
				(e.$TM = $),
				(e.$UM = v),
				(e.$VM = S),
				(e.$WM = I),
				(e.$XM = T),
				(e.$YM = P);
			function C(k, L, D, M) {
				return k !== D ? r(D - k, M) : r(0, M - L);
			}
			e.$DM = 0;
			function d(k) {
				return k === 0;
			}
			const m = 2 ** 26;
			function r(k, L) {
				return k * m + L;
			}
			function u(k) {
				const L = k,
					D = Math.floor(L / m),
					M = L - D * m;
				return new E.$tL(D, M);
			}
			function a(k) {
				return Math.floor(k / m);
			}
			function h(k) {
				return k;
			}
			function c(k, L) {
				let D = k + L;
				return L >= m && (D = D - (k % m)), D;
			}
			function n(k, L) {
				return k.reduce((D, M) => c(D, L(M)), e.$DM);
			}
			function g(k, L) {
				return k === L;
			}
			function p(k, L) {
				const D = k,
					M = L;
				if (M - D <= 0) return e.$DM;
				const A = Math.floor(D / m),
					R = Math.floor(M / m),
					O = M - R * m;
				if (A === R) {
					const B = D - A * m;
					return r(0, O - B);
				} else return r(R - A, O);
			}
			function o(k, L) {
				return k < L;
			}
			function f(k, L) {
				return k <= L;
			}
			function b(k, L) {
				return k >= L;
			}
			function s(k) {
				const L = k,
					D = Math.floor(L / m),
					M = L - D * m;
				return new i.$hL(D + 1, M + 1);
			}
			function l(k) {
				return r(k.lineNumber - 1, k.column - 1);
			}
			function y(k, L) {
				const D = k,
					M = Math.floor(D / m),
					N = D - M * m,
					A = L,
					R = Math.floor(A / m),
					O = A - R * m;
				return new w.$iL(M + 1, N + 1, R + 1, O + 1);
			}
			function $(k) {
				return k.startLineNumber === k.endLineNumber
					? new E.$tL(0, k.endColumn - k.startColumn)
					: new E.$tL(k.endLineNumber - k.startLineNumber, k.endColumn - 1);
			}
			function v(k, L) {
				return k - L;
			}
			function S(k) {
				const L = (0, t.$zf)(k);
				return r(L.length - 1, L[L.length - 1].length);
			}
			function I(k) {
				const L = (0, t.$zf)(k);
				return new E.$tL(L.length - 1, L[L.length - 1].length);
			}
			function T(k) {
				return k;
			}
			function P(k, L) {
				return k > L ? k : L;
			}
		}),
		
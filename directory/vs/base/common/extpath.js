import '../../../require.js';
import '../../../exports.js';
import './charCode.js';
import './path.js';
import './platform.js';
import './strings.js';
import './types.js';
define(
			de[249],
			he([1, 0, 120, 54, 12, 37, 28]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Eg = d),
					(e.$Fg = m),
					(e.$Gg = r),
					(e.$Hg = u),
					(e.$Ig = a),
					(e.$Jg = g),
					(e.$Kg = p),
					(e.$Lg = o),
					(e.$Mg = f),
					(e.$Ng = b),
					(e.$Og = s),
					(e.$Pg = l),
					(e.$Qg = y),
					(e.$Rg = $),
					(e.$Sg = v),
					(e.$Tg = S),
					(e.$Ug = P);
				function d(k) {
					return k === t.CharCode.Slash || k === t.CharCode.Backslash;
				}
				function m(k) {
					return k.replace(/[\\/]/g, i.$lc.sep);
				}
				function r(k) {
					return (
						k.indexOf("/") === -1 && (k = m(k)),
						/^[a-zA-Z]:(\/|$)/.test(k) && (k = "/" + k),
						k
					);
				}
				function u(k, L = i.$lc.sep) {
					if (!k) return "";
					const D = k.length,
						M = k.charCodeAt(0);
					if (d(M)) {
						if (d(k.charCodeAt(1)) && !d(k.charCodeAt(2))) {
							let A = 3;
							const R = A;
							for (; A < D && !d(k.charCodeAt(A)); A++);
							if (R !== A && !d(k.charCodeAt(A + 1))) {
								for (A += 1; A < D; A++)
									if (d(k.charCodeAt(A)))
										return k.slice(0, A + 1).replace(/[\\/]/g, L);
							}
						}
						return L;
					} else if (f(M) && k.charCodeAt(1) === t.CharCode.Colon)
						return d(k.charCodeAt(2)) ? k.slice(0, 2) + L : k.slice(0, 2);
					let N = k.indexOf("://");
					if (N !== -1) {
						for (N += 3; N < D; N++)
							if (d(k.charCodeAt(N))) return k.slice(0, N + 1);
					}
					return "";
				}
				function a(k) {
					if (!w.$l || !k || k.length < 5) return !1;
					let L = k.charCodeAt(0);
					if (
						L !== t.CharCode.Backslash ||
						((L = k.charCodeAt(1)), L !== t.CharCode.Backslash)
					)
						return !1;
					let D = 2;
					const M = D;
					for (
						;
						D < k.length && ((L = k.charCodeAt(D)), L !== t.CharCode.Backslash);
						D++
					);
					return !(
						M === D ||
						((L = k.charCodeAt(D + 1)), isNaN(L) || L === t.CharCode.Backslash)
					);
				}
				const h = /[\\/:\*\?"<>\|]/g,
					c = /[/]/g,
					n = /^(con|prn|aux|clock\$|nul|lpt[0-9]|com[0-9])(\.(.*?))?$/i;
				function g(k, L = w.$l) {
					const D = L ? h : c;
					return !(
						!k ||
						k.length === 0 ||
						/^\s+$/.test(k) ||
						((D.lastIndex = 0), D.test(k)) ||
						(L && n.test(k)) ||
						k === "." ||
						k === ".." ||
						(L && k[k.length - 1] === ".") ||
						(L && k.length !== k.trim().length) ||
						k.length > 255
					);
				}
				function p(k, L, D) {
					const M = k === L;
					return !D || M ? M : !k || !L ? !1 : (0, E.$Mf)(k, L);
				}
				function o(k, L, D, M = i.sep) {
					if (k === L) return !0;
					if (!k || !L || L.length > k.length) return !1;
					if (D) {
						if (!(0, E.$Nf)(k, L)) return !1;
						if (L.length === k.length) return !0;
						let A = L.length;
						return L.charAt(L.length - 1) === M && A--, k.charAt(A) === M;
					}
					return L.charAt(L.length - 1) !== M && (L += M), k.indexOf(L) === 0;
				}
				function f(k) {
					return (
						(k >= t.CharCode.A && k <= t.CharCode.Z) ||
						(k >= t.CharCode.a && k <= t.CharCode.z)
					);
				}
				function b(k, L) {
					return (
						w.$l && k.endsWith(":") && (k += i.sep),
						(0, i.$nc)(k) || (k = (0, i.$oc)(L, k)),
						(k = (0, i.$mc)(k)),
						s(k)
					);
				}
				function s(k) {
					return (
						w.$l
							? ((k = (0, E.$uf)(k, i.sep)), k.endsWith(":") && (k += i.sep))
							: ((k = (0, E.$uf)(k, i.sep)), k || (k = i.sep)),
						k
					);
				}
				function l(k) {
					const L = (0, i.$mc)(k);
					return w.$l
						? k.length > 3
							? !1
							: y(L) &&
								(k.length === 2 || L.charCodeAt(2) === t.CharCode.Backslash)
						: L === i.$lc.sep;
				}
				function y(k, L = w.$l) {
					return L
						? f(k.charCodeAt(0)) && k.charCodeAt(1) === t.CharCode.Colon
						: !1;
				}
				function $(k, L = w.$l) {
					return y(k, L) ? k[0] : void 0;
				}
				function v(k, L, D) {
					return L.length > k.length
						? -1
						: k === L
							? 0
							: (D && ((k = k.toLowerCase()), (L = L.toLowerCase())),
								k.indexOf(L));
				}
				function S(k) {
					const L = k.split(":");
					let D, M, N;
					for (const A of L) {
						const R = Number(A);
						(0, C.$pg)(R)
							? M === void 0
								? (M = R)
								: N === void 0 && (N = R)
							: (D = D ? [D, A].join(":") : A);
					}
					if (!D)
						throw new Error(
							"Format for `--goto` should be: `FILE:LINE(:COLUMN)`",
						);
					return {
						path: D,
						line: M !== void 0 ? M : void 0,
						column: N !== void 0 ? N : M !== void 0 ? 1 : void 0,
					};
				}
				const I =
						"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
					T = "BDEFGHIJKMOQRSTUVWXYZbdefghijkmoqrstuvwxyz0123456789";
				function P(k, L, D = 8) {
					let M = "";
					for (let A = 0; A < D; A++) {
						let R;
						A === 0 && w.$l && !L && (D === 3 || D === 4) ? (R = T) : (R = I),
							(M += R.charAt(Math.floor(Math.random() * R.length)));
					}
					let N;
					return L ? (N = `${L}-${M}`) : (N = M), k ? (0, i.$oc)(k, N) : N;
				}
			},
		),
		
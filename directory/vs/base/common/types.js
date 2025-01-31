import '../../../require.js';
import '../../../exports.js';
define(de[28], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$lg = t),
				(e.$mg = i),
				(e.$ng = w),
				(e.$og = E),
				(e.$pg = C),
				(e.$qg = d),
				(e.$rg = m),
				(e.$sg = r),
				(e.$tg = u),
				(e.$ug = a),
				(e.$vg = h),
				(e.$wg = c),
				(e.$xg = n),
				(e.$yg = p),
				(e.$zg = o),
				(e.$Ag = f),
				(e.$Bg = b),
				(e.$Cg = s),
				(e.$Dg = l);
			function t(y) {
				return typeof y == "string";
			}
			function i(y) {
				return Array.isArray(y) && y.every(($) => t($));
			}
			function w(y) {
				return (
					typeof y == "object" &&
					y !== null &&
					!Array.isArray(y) &&
					!(y instanceof RegExp) &&
					!(y instanceof Date)
				);
			}
			function E(y) {
				const $ = Object.getPrototypeOf(Uint8Array);
				return typeof y == "object" && y instanceof $;
			}
			function C(y) {
				return typeof y == "number" && !isNaN(y);
			}
			function d(y) {
				return !!y && typeof y[Symbol.iterator] == "function";
			}
			function m(y) {
				return y === !0 || y === !1;
			}
			function r(y) {
				return typeof y > "u";
			}
			function u(y) {
				return !a(y);
			}
			function a(y) {
				return r(y) || y === null;
			}
			function h(y, $) {
				if (!y)
					throw new Error(
						$ ? `Unexpected type, expected '${$}'` : "Unexpected type",
					);
			}
			function c(y) {
				if (a(y))
					throw new Error("Assertion Failed: argument is undefined or null");
				return y;
			}
			function n(...y) {
				const $ = [];
				for (let v = 0; v < y.length; v++) {
					const S = y[v];
					if (a(S))
						throw new Error(
							`Assertion Failed: argument at index ${v} is undefined or null`,
						);
					$.push(S);
				}
				return $;
			}
			const g = Object.prototype.hasOwnProperty;
			function p(y) {
				if (!w(y)) return !1;
				for (const $ in y) if (g.call(y, $)) return !1;
				return !0;
			}
			function o(y) {
				return typeof y == "function";
			}
			function f(...y) {
				return y.length > 0 && y.every(o);
			}
			function b(y, $) {
				const v = Math.min(y.length, $.length);
				for (let S = 0; S < v; S++) s(y[S], $[S]);
			}
			function s(y, $) {
				if (t($)) {
					if (typeof y !== $)
						throw new Error(`argument does not match constraint: typeof ${$}`);
				} else if (o($)) {
					try {
						if (y instanceof $) return;
					} catch {}
					if (
						(!a(y) && y.constructor === $) ||
						($.length === 1 && $.call(void 0, y) === !0)
					)
						return;
					throw new Error(
						"argument does not match one of these constraints: arg instanceof constraint, arg.constructor === constraint, nor constraint(arg) === true",
					);
				}
			}
			function l(y) {
				return y;
			}
		})

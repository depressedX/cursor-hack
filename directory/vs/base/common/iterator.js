import '../../../require.js';
import '../../../exports.js';
define(de[103], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.Iterable = void 0);
			var t;
			(function (i) {
				function w($) {
					return (
						$ && typeof $ == "object" && typeof $[Symbol.iterator] == "function"
					);
				}
				i.is = w;
				const E = Object.freeze([]);
				function C() {
					return E;
				}
				i.empty = C;
				function* d($) {
					yield $;
				}
				i.single = d;
				function m($) {
					return w($) ? $ : d($);
				}
				i.wrap = m;
				function r($) {
					return $ || E;
				}
				i.from = r;
				function* u($) {
					for (let v = $.length - 1; v >= 0; v--) yield $[v];
				}
				i.reverse = u;
				function a($) {
					return !$ || $[Symbol.iterator]().next().done === !0;
				}
				i.isEmpty = a;
				function h($) {
					return $[Symbol.iterator]().next().value;
				}
				i.first = h;
				function c($, v) {
					let S = 0;
					for (const I of $) if (v(I, S++)) return !0;
					return !1;
				}
				i.some = c;
				function n($, v) {
					for (const S of $) if (v(S)) return S;
				}
				i.find = n;
				function* g($, v) {
					for (const S of $) v(S) && (yield S);
				}
				i.filter = g;
				function* p($, v) {
					let S = 0;
					for (const I of $) yield v(I, S++);
				}
				i.map = p;
				function* o($, v) {
					let S = 0;
					for (const I of $) yield* v(I, S++);
				}
				i.flatMap = o;
				function* f(...$) {
					for (const v of $) yield* v;
				}
				i.concat = f;
				function b($, v, S) {
					let I = S;
					for (const T of $) I = v(I, T);
					return I;
				}
				i.reduce = b;
				function* s($, v, S = $.length) {
					for (
						v < 0 && (v += $.length),
							S < 0 ? (S += $.length) : S > $.length && (S = $.length);
						v < S;
						v++
					)
						yield $[v];
				}
				i.slice = s;
				function l($, v = Number.POSITIVE_INFINITY) {
					const S = [];
					if (v === 0) return [S, $];
					const I = $[Symbol.iterator]();
					for (let T = 0; T < v; T++) {
						const P = I.next();
						if (P.done) return [S, i.empty()];
						S.push(P.value);
					}
					return [
						S,
						{
							[Symbol.iterator]() {
								return I;
							},
						},
					];
				}
				i.consume = l;
				async function y($) {
					const v = [];
					for await (const S of $) v.push(S);
					return Promise.resolve(v);
				}
				i.asyncToArray = y;
			})(t || (e.Iterable = t = {}));
		})

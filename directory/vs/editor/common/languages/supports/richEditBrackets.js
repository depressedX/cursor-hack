define(de[934], he([1, 0, 37, 462, 17]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$wM = e.$uM = e.$tM = void 0),
				(e.$vM = p),
				(t = mt(t)),
				(i = mt(i));
			class E {
				constructor(s, l, y, $, v, S) {
					(this._richEditBracketBrand = void 0),
						(this.languageId = s),
						(this.index = l),
						(this.open = y),
						(this.close = $),
						(this.forwardRegex = v),
						(this.reversedRegex = S),
						(this.c = E.e(this.open)),
						(this.d = E.e(this.close));
				}
				isOpen(s) {
					return this.c.has(s);
				}
				isClose(s) {
					return this.d.has(s);
				}
				static e(s) {
					const l = new Set();
					for (const y of s) l.add(y);
					return l;
				}
			}
			e.$tM = E;
			function C(b) {
				const s = b.length;
				b = b.map((S) => [S[0].toLowerCase(), S[1].toLowerCase()]);
				const l = [];
				for (let S = 0; S < s; S++) l[S] = S;
				const y = (S, I) => {
						const [T, P] = S,
							[k, L] = I;
						return T === k || T === L || P === k || P === L;
					},
					$ = (S, I) => {
						const T = Math.min(S, I),
							P = Math.max(S, I);
						for (let k = 0; k < s; k++) l[k] === P && (l[k] = T);
					};
				for (let S = 0; S < s; S++) {
					const I = b[S];
					for (let T = S + 1; T < s; T++) {
						const P = b[T];
						y(I, P) && $(l[S], l[T]);
					}
				}
				const v = [];
				for (let S = 0; S < s; S++) {
					const I = [],
						T = [];
					for (let P = 0; P < s; P++)
						if (l[P] === S) {
							const [k, L] = b[P];
							I.push(k), T.push(L);
						}
					I.length > 0 && v.push({ open: I, close: T });
				}
				return v;
			}
			class d {
				constructor(s, l) {
					this._richEditBracketsBrand = void 0;
					const y = C(l);
					(this.brackets = y.map(
						($, v) =>
							new E(
								s,
								v,
								$.open,
								$.close,
								a($.open, $.close, y, v),
								h($.open, $.close, y, v),
							),
					)),
						(this.forwardRegex = c(this.brackets)),
						(this.reversedRegex = n(this.brackets)),
						(this.textIsBracket = {}),
						(this.textIsOpenBracket = {}),
						(this.maxBracketLength = 0);
					for (const $ of this.brackets) {
						for (const v of $.open)
							(this.textIsBracket[v] = $),
								(this.textIsOpenBracket[v] = !0),
								(this.maxBracketLength = Math.max(
									this.maxBracketLength,
									v.length,
								));
						for (const v of $.close)
							(this.textIsBracket[v] = $),
								(this.textIsOpenBracket[v] = !1),
								(this.maxBracketLength = Math.max(
									this.maxBracketLength,
									v.length,
								));
					}
				}
			}
			e.$uM = d;
			function m(b, s, l, y) {
				for (let $ = 0, v = s.length; $ < v; $++) {
					if ($ === l) continue;
					const S = s[$];
					for (const I of S.open) I.indexOf(b) >= 0 && y.push(I);
					for (const I of S.close) I.indexOf(b) >= 0 && y.push(I);
				}
			}
			function r(b, s) {
				return b.length - s.length;
			}
			function u(b) {
				if (b.length <= 1) return b;
				const s = [],
					l = new Set();
				for (const y of b) l.has(y) || (s.push(y), l.add(y));
				return s;
			}
			function a(b, s, l, y) {
				let $ = [];
				($ = $.concat(b)), ($ = $.concat(s));
				for (let v = 0, S = $.length; v < S; v++) m($[v], l, y, $);
				return ($ = u($)), $.sort(r), $.reverse(), p($);
			}
			function h(b, s, l, y) {
				let $ = [];
				($ = $.concat(b)), ($ = $.concat(s));
				for (let v = 0, S = $.length; v < S; v++) m($[v], l, y, $);
				return ($ = u($)), $.sort(r), $.reverse(), p($.map(o));
			}
			function c(b) {
				let s = [];
				for (const l of b) {
					for (const y of l.open) s.push(y);
					for (const y of l.close) s.push(y);
				}
				return (s = u(s)), p(s);
			}
			function n(b) {
				let s = [];
				for (const l of b) {
					for (const y of l.open) s.push(y);
					for (const y of l.close) s.push(y);
				}
				return (s = u(s)), p(s.map(o));
			}
			function g(b) {
				const s = /^[\w ]+$/.test(b);
				return (b = t.$of(b)), s ? `\\b${b}\\b` : b;
			}
			function p(b, s) {
				const l = `(${b.map(g).join(")|(")})`;
				return t.$xf(l, !0, s);
			}
			const o = (function () {
				function b(y) {
					const $ = new Uint16Array(y.length);
					let v = 0;
					for (let S = y.length - 1; S >= 0; S--) $[v++] = y.charCodeAt(S);
					return i.$IL().decode($);
				}
				let s = null,
					l = null;
				return function ($) {
					return s !== $ && ((s = $), (l = b(s))), l;
				};
			})();
			class f {
				static c(s, l, y, $) {
					const v = y.match(s);
					if (!v) return null;
					const S = y.length - (v.index || 0),
						I = v[0].length,
						T = $ + S;
					return new w.$iL(l, T - I + 1, l, T + 1);
				}
				static findPrevBracketInRange(s, l, y, $, v) {
					const I = o(y).substring(y.length - v, y.length - $);
					return this.c(s, l, I, $);
				}
				static findNextBracketInText(s, l, y, $) {
					const v = y.match(s);
					if (!v) return null;
					const S = v.index || 0,
						I = v[0].length;
					if (I === 0) return null;
					const T = $ + S;
					return new w.$iL(l, T + 1, l, T + 1 + I);
				}
				static findNextBracketInRange(s, l, y, $, v) {
					const S = y.substring($, v);
					return this.findNextBracketInText(s, l, S, $);
				}
			}
			e.$wM = f;
		}),
		
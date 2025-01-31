import '../../../require.js';
import '../../../exports.js';
import './errors.js';
import './arraysFind.js';
define(de[24], he([1, 0, 29, 214]), function (ce /*require*/,
 e /*exports*/,
 t /*errors*/,
 i /*arraysFind*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$ec = e.$dc = e.$cc = e.$ac = e.$_b = e.CompareResult = void 0),
				(e.$wb = w),
				(e.$xb = E),
				(e.$yb = C),
				(e.$zb = d),
				(e.$Ab = m),
				(e.$Bb = r),
				(e.$Cb = u),
				(e.$Db = a),
				(e.$Eb = h),
				(e.$Fb = c),
				(e.$Gb = n),
				(e.$Hb = g),
				(e.$Ib = p),
				(e.top = o),
				(e.$Kb = f),
				(e.$Lb = s),
				(e.$Mb = l),
				(e.$Nb = y),
				(e.$Ob = $),
				(e.$Pb = v),
				(e.$Qb = S),
				(e.$Rb = I),
				(e.$Sb = T),
				(e.$Tb = P),
				(e.$Ub = k),
				(e.$Vb = L),
				(e.$Wb = D),
				(e.$Xb = M),
				(e.$Yb = N),
				(e.$Zb = A),
				(e.$1b = R),
				(e.$2b = O),
				(e.$3b = B),
				(e.$4b = U),
				(e.$5b = z),
				(e.$6b = F),
				(e.$7b = x),
				(e.$8b = H),
				(e.$9b = q),
				(e.$0b = K),
				(e.$$b = J),
				(e.$bc = Y),
				(e.$fc = _);
			function w(te, Q = 0) {
				return te[te.length - (1 + Q)];
			}
			function E(te) {
				if (te.length === 0) throw new Error("Invalid tail call");
				return [te.slice(0, te.length - 1), te[te.length - 1]];
			}
			function C(te, Q, Z = (se, re) => se === re) {
				if (te === Q) return !0;
				if (!te || !Q || te.length !== Q.length) return !1;
				for (let se = 0, re = te.length; se < re; se++)
					if (!Z(te[se], Q[se])) return !1;
				return !0;
			}
			function d(te, Q) {
				const Z = te.length - 1;
				Q < Z && (te[Q] = te[Z]), te.pop();
			}
			function m(te, Q, Z) {
				return r(te.length, (se) => Z(te[se], Q));
			}
			function r(te, Q) {
				let Z = 0,
					se = te - 1;
				for (; Z <= se; ) {
					const re = ((Z + se) / 2) | 0,
						le = Q(re);
					if (le < 0) Z = re + 1;
					else if (le > 0) se = re - 1;
					else return re;
				}
				return -(Z + 1);
			}
			function u(te, Q, Z) {
				if (((te = te | 0), te >= Q.length))
					throw new TypeError("invalid index");
				const se = Q[Math.floor(Q.length * Math.random())],
					re = [],
					le = [],
					oe = [];
				for (const ae of Q) {
					const pe = Z(ae, se);
					pe < 0 ? re.push(ae) : pe > 0 ? le.push(ae) : oe.push(ae);
				}
				return te < re.length
					? u(te, re, Z)
					: te < re.length + oe.length
						? oe[0]
						: u(te - (re.length + oe.length), le, Z);
			}
			function a(te, Q) {
				const Z = [];
				let se;
				for (const re of te.slice(0).sort(Q))
					!se || Q(se[0], re) !== 0 ? ((se = [re]), Z.push(se)) : se.push(re);
				return Z;
			}
			function* h(te, Q) {
				let Z, se;
				for (const re of te)
					se !== void 0 && Q(se, re)
						? Z.push(re)
						: (Z && (yield Z), (Z = [re])),
						(se = re);
				Z && (yield Z);
			}
			function c(te, Q) {
				for (let Z = 0; Z <= te.length; Z++)
					Q(Z === 0 ? void 0 : te[Z - 1], Z === te.length ? void 0 : te[Z]);
			}
			function n(te, Q) {
				for (let Z = 0; Z < te.length; Z++)
					Q(
						Z === 0 ? void 0 : te[Z - 1],
						te[Z],
						Z + 1 === te.length ? void 0 : te[Z + 1],
					);
			}
			function g(te, Q, Z) {
				const se = [];
				function re(ae, pe, $e) {
					if (pe === 0 && $e.length === 0) return;
					const ye = se[se.length - 1];
					ye && ye.start + ye.deleteCount === ae
						? ((ye.deleteCount += pe), ye.toInsert.push(...$e))
						: se.push({ start: ae, deleteCount: pe, toInsert: $e });
				}
				let le = 0,
					oe = 0;
				for (;;) {
					if (le === te.length) {
						re(le, 0, Q.slice(oe));
						break;
					}
					if (oe === Q.length) {
						re(le, te.length - le, []);
						break;
					}
					const ae = te[le],
						pe = Q[oe],
						$e = Z(ae, pe);
					$e === 0
						? ((le += 1), (oe += 1))
						: $e < 0
							? (re(le, 1, []), (le += 1))
							: $e > 0 && (re(le, 0, [pe]), (oe += 1));
				}
				return se;
			}
			function p(te, Q, Z) {
				const se = g(te, Q, Z),
					re = [],
					le = [];
				for (const oe of se)
					re.push(...te.slice(oe.start, oe.start + oe.deleteCount)),
						le.push(...oe.toInsert);
				return { removed: re, added: le };
			}
			function o(te, Q, Z) {
				if (Z === 0) return [];
				const se = te.slice(0, Z).sort(Q);
				return b(te, Q, se, Z, te.length), se;
			}
			function f(te, Q, Z, se, re) {
				return Z === 0
					? Promise.resolve([])
					: new Promise((le, oe) => {
							(async () => {
								const ae = te.length,
									pe = te.slice(0, Z).sort(Q);
								for (
									let $e = Z, ye = Math.min(Z + se, ae);
									$e < ae;
									$e = ye, ye = Math.min(ye + se, ae)
								) {
									if (
										($e > Z && (await new Promise((ue) => setTimeout(ue))),
										re && re.isCancellationRequested)
									)
										throw new t.$9();
									b(te, Q, pe, $e, ye);
								}
								return pe;
							})().then(le, oe);
						});
			}
			function b(te, Q, Z, se, re) {
				for (const le = Z.length; se < re; se++) {
					const oe = te[se];
					if (Q(oe, Z[le - 1]) < 0) {
						Z.pop();
						const ae = (0, i.$ob)(Z, (pe) => Q(oe, pe) < 0);
						Z.splice(ae, 0, oe);
					}
				}
			}
			function s(te) {
				return te.filter((Q) => !!Q);
			}
			function l(te) {
				let Q = 0;
				for (let Z = 0; Z < te.length; Z++)
					te[Z] && ((te[Q] = te[Z]), (Q += 1));
				te.length = Q;
			}
			function y(te, Q, Z) {
				te.splice(Z, 0, te.splice(Q, 1)[0]);
			}
			function $(te) {
				return !Array.isArray(te) || te.length === 0;
			}
			function v(te) {
				return Array.isArray(te) && te.length > 0;
			}
			function S(te, Q = (Z) => Z) {
				const Z = new Set();
				return te.filter((se) => {
					const re = Q(se);
					return Z.has(re) ? !1 : (Z.add(re), !0);
				});
			}
			function I(te) {
				const Q = new Set();
				return (Z) => {
					const se = te(Z);
					return Q.has(se) ? !1 : (Q.add(se), !0);
				};
			}
			function T(te, Q) {
				return te.length > 0 ? te[0] : Q;
			}
			function P(te, Q) {
				return te.length > 0 ? te[te.length - 1] : Q;
			}
			function k(te, Q, Z = (se, re) => se === re) {
				let se = 0;
				for (
					let re = 0, le = Math.min(te.length, Q.length);
					re < le && Z(te[re], Q[re]);
					re++
				)
					se++;
				return se;
			}
			function L(te, Q) {
				let Z = typeof Q == "number" ? te : 0;
				typeof Q == "number" ? (Z = te) : ((Z = 0), (Q = te));
				const se = [];
				if (Z <= Q) for (let re = Z; re < Q; re++) se.push(re);
				else for (let re = Z; re > Q; re--) se.push(re);
				return se;
			}
			function D(te, Q, Z) {
				return te.reduce(
					(se, re) => ((se[Q(re)] = Z ? Z(re) : re), se),
					Object.create(null),
				);
			}
			function M(te, Q) {
				return te.push(Q), () => N(te, Q);
			}
			function N(te, Q) {
				const Z = te.indexOf(Q);
				if (Z > -1) return te.splice(Z, 1), Q;
			}
			function A(te, Q, Z) {
				const se = te.slice(0, Q),
					re = te.slice(Q);
				return se.concat(Z, re);
			}
			function R(te, Q) {
				let Z;
				if (typeof Q == "number") {
					let se = Q;
					Z = () => {
						const re = Math.sin(se++) * 179426549;
						return re - Math.floor(re);
					};
				} else Z = Math.random;
				for (let se = te.length - 1; se > 0; se -= 1) {
					const re = Math.floor(Z() * (se + 1)),
						le = te[se];
					(te[se] = te[re]), (te[re] = le);
				}
			}
			function O(te, Q) {
				const Z = te.indexOf(Q);
				Z > -1 && (te.splice(Z, 1), te.unshift(Q));
			}
			function B(te, Q) {
				const Z = te.indexOf(Q);
				Z > -1 && (te.splice(Z, 1), te.push(Q));
			}
			function U(te, Q) {
				for (const Z of Q) te.push(Z);
			}
			function z(te, Q) {
				return Array.isArray(te) ? te.map(Q) : Q(te);
			}
			function F(te) {
				return Array.isArray(te) ? te : [te];
			}
			function x(te) {
				return te[Math.floor(Math.random() * te.length)];
			}
			function H(te, Q, Z) {
				const se = V(te, Q),
					re = te.length,
					le = Z.length;
				te.length = re + le;
				for (let oe = re - 1; oe >= se; oe--) te[oe + le] = te[oe];
				for (let oe = 0; oe < le; oe++) te[oe + se] = Z[oe];
			}
			function q(te, Q, Z, se) {
				const re = V(te, Q);
				let le = te.splice(re, Z);
				return le === void 0 && (le = []), H(te, re, se), le;
			}
			function V(te, Q) {
				return Q < 0 ? Math.max(Q + te.length, 0) : Math.min(Q, te.length);
			}
			var G;
			(function (te) {
				function Q(le) {
					return le < 0;
				}
				te.isLessThan = Q;
				function Z(le) {
					return le <= 0;
				}
				te.isLessThanOrEqual = Z;
				function se(le) {
					return le > 0;
				}
				te.isGreaterThan = se;
				function re(le) {
					return le === 0;
				}
				(te.isNeitherLessOrGreaterThan = re),
					(te.greaterThan = 1),
					(te.lessThan = -1),
					(te.neitherLessOrGreaterThan = 0);
			})(G || (e.CompareResult = G = {}));
			function K(te, Q) {
				return (Z, se) => Q(te(Z), te(se));
			}
			function J(...te) {
				return (Q, Z) => {
					for (const se of te) {
						const re = se(Q, Z);
						if (!G.isNeitherLessOrGreaterThan(re)) return re;
					}
					return G.neitherLessOrGreaterThan;
				};
			}
			const W = (te, Q) => te - Q;
			e.$_b = W;
			const X = (te, Q) => (0, e.$_b)(te ? 1 : 0, Q ? 1 : 0);
			e.$ac = X;
			function Y(te) {
				return (Q, Z) => -te(Q, Z);
			}
			class ie {
				constructor(Q) {
					(this.g = Q), (this.c = 0), (this.d = this.g.length - 1);
				}
				get length() {
					return this.d - this.c + 1;
				}
				takeWhile(Q) {
					let Z = this.c;
					for (; Z < this.g.length && Q(this.g[Z]); ) Z++;
					const se = Z === this.c ? null : this.g.slice(this.c, Z);
					return (this.c = Z), se;
				}
				takeFromEndWhile(Q) {
					let Z = this.d;
					for (; Z >= 0 && Q(this.g[Z]); ) Z--;
					const se = Z === this.d ? null : this.g.slice(Z + 1, this.d + 1);
					return (this.d = Z), se;
				}
				peek() {
					if (this.length !== 0) return this.g[this.c];
				}
				peekLast() {
					if (this.length !== 0) return this.g[this.d];
				}
				dequeue() {
					const Q = this.g[this.c];
					return this.c++, Q;
				}
				removeLast() {
					const Q = this.g[this.d];
					return this.d--, Q;
				}
				takeCount(Q) {
					const Z = this.g.slice(this.c, this.c + Q);
					return (this.c += Q), Z;
				}
			}
			e.$cc = ie;
			class ne {
				static {
					this.empty = new ne((Q) => {});
				}
				constructor(Q) {
					this.iterate = Q;
				}
				forEach(Q) {
					this.iterate((Z) => (Q(Z), !0));
				}
				toArray() {
					const Q = [];
					return this.iterate((Z) => (Q.push(Z), !0)), Q;
				}
				filter(Q) {
					return new ne((Z) => this.iterate((se) => (Q(se) ? Z(se) : !0)));
				}
				map(Q) {
					return new ne((Z) => this.iterate((se) => Z(Q(se))));
				}
				some(Q) {
					let Z = !1;
					return this.iterate((se) => ((Z = Q(se)), !Z)), Z;
				}
				findFirst(Q) {
					let Z;
					return this.iterate((se) => (Q(se) ? ((Z = se), !1) : !0)), Z;
				}
				findLast(Q) {
					let Z;
					return this.iterate((se) => (Q(se) && (Z = se), !0)), Z;
				}
				findLastMaxBy(Q) {
					let Z,
						se = !0;
					return (
						this.iterate(
							(re) => (
								(se || G.isGreaterThan(Q(re, Z))) && ((se = !1), (Z = re)), !0
							),
						),
						Z
					);
				}
			}
			e.$dc = ne;
			class ee {
				constructor(Q) {
					this.c = Q;
				}
				static createSortPermutation(Q, Z) {
					const se = Array.from(Q.keys()).sort((re, le) => Z(Q[re], Q[le]));
					return new ee(se);
				}
				apply(Q) {
					return Q.map((Z, se) => Q[this.c[se]]);
				}
				inverse() {
					const Q = this.c.slice();
					for (let Z = 0; Z < this.c.length; Z++) Q[this.c[Z]] = Z;
					return new ee(Q);
				}
			}
			e.$ec = ee;
			async function _(te, Q) {
				return (
					await Promise.all(
						te.map(async (se, re) => ({ element: se, ok: await Q(se, re) })),
					)
				).find((se) => se.ok)?.element;
			}
		})

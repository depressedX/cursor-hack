import '../../../require.js';
import '../../../exports.js';
import './charCode.js';
import './map.js';
import './naturalLanguage/korean.js';
import './strings.js';
define(
			de[132],
			he([1, 0, 120, 59, 2218, 37]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5k = e.FuzzyScore = e.$Tk = e.$Sk = void 0),
					(e.or = C),
					(e.$Uk = m),
					(e.$Vk = r),
					(e.$Wk = h),
					(e.$Xk = P),
					(e.$Yk = k),
					(e.$Zk = R),
					(e.$1k = O),
					(e.$2k = B),
					(e.$3k = U),
					(e.$4k = ee),
					(e.$6k = Z),
					(e.$7k = le),
					(e.$8k = oe),
					(E = mt(E));
				function C(...$e) {
					return function (ye, ue) {
						for (let fe = 0, me = $e.length; fe < me; fe++) {
							const ve = $e[fe](ye, ue);
							if (ve) return ve;
						}
						return null;
					};
				}
				(e.$Sk = d.bind(void 0, !1)), (e.$Tk = d.bind(void 0, !0));
				function d($e, ye, ue) {
					if (!ue || ue.length < ye.length) return null;
					let fe;
					return (
						$e ? (fe = E.$Nf(ue, ye)) : (fe = ue.indexOf(ye) === 0),
						fe ? (ye.length > 0 ? [{ start: 0, end: ye.length }] : []) : null
					);
				}
				function m($e, ye) {
					const ue = ye.toLowerCase().indexOf($e.toLowerCase());
					return ue === -1 ? null : [{ start: ue, end: ue + $e.length }];
				}
				function r($e, ye) {
					return u($e.toLowerCase(), ye.toLowerCase(), 0, 0);
				}
				function u($e, ye, ue, fe) {
					if (ue === $e.length) return [];
					if (fe === ye.length) return null;
					if ($e[ue] === ye[fe]) {
						let me = null;
						return (me = u($e, ye, ue + 1, fe + 1))
							? l({ start: fe, end: fe + 1 }, me)
							: null;
					}
					return u($e, ye, ue, fe + 1);
				}
				function a($e) {
					return t.CharCode.a <= $e && $e <= t.CharCode.z;
				}
				function h($e) {
					return t.CharCode.A <= $e && $e <= t.CharCode.Z;
				}
				function c($e) {
					return t.CharCode.Digit0 <= $e && $e <= t.CharCode.Digit9;
				}
				function n($e) {
					return (
						$e === t.CharCode.Space ||
						$e === t.CharCode.Tab ||
						$e === t.CharCode.LineFeed ||
						$e === t.CharCode.CarriageReturn
					);
				}
				const g = new Set();
				"()[]{}<>`'\"-/;:,.?!"
					.split("")
					.forEach(($e) => g.add($e.charCodeAt(0)));
				function p($e) {
					return n($e) || g.has($e);
				}
				function o($e, ye) {
					return $e === ye || (p($e) && p(ye));
				}
				const f = new Map();
				function b($e) {
					if (f.has($e)) return f.get($e);
					let ye;
					const ue = (0, w.$Qk)($e);
					return ue && (ye = ue), f.set($e, ye), ye;
				}
				function s($e) {
					return a($e) || h($e) || c($e);
				}
				function l($e, ye) {
					return (
						ye.length === 0
							? (ye = [$e])
							: $e.end === ye[0].start
								? (ye[0].start = $e.start)
								: ye.unshift($e),
						ye
					);
				}
				function y($e, ye) {
					for (let ue = ye; ue < $e.length; ue++) {
						const fe = $e.charCodeAt(ue);
						if (h(fe) || c(fe) || (ue > 0 && !s($e.charCodeAt(ue - 1))))
							return ue;
					}
					return $e.length;
				}
				function $($e, ye, ue, fe) {
					if (ue === $e.length) return [];
					if (fe === ye.length) return null;
					if ($e[ue] !== ye[fe].toLowerCase()) return null;
					{
						let me = null,
							ve = fe + 1;
						for (
							me = $($e, ye, ue + 1, fe + 1);
							!me && (ve = y(ye, ve)) < ye.length;
						)
							(me = $($e, ye, ue + 1, ve)), ve++;
						return me === null ? null : l({ start: fe, end: fe + 1 }, me);
					}
				}
				function v($e) {
					let ye = 0,
						ue = 0,
						fe = 0,
						me = 0,
						ve = 0;
					for (let Fe = 0; Fe < $e.length; Fe++)
						(ve = $e.charCodeAt(Fe)),
							h(ve) && ye++,
							a(ve) && ue++,
							s(ve) && fe++,
							c(ve) && me++;
					const ge = ye / $e.length,
						be = ue / $e.length,
						Ce = fe / $e.length,
						Le = me / $e.length;
					return {
						upperPercent: ge,
						lowerPercent: be,
						alphaPercent: Ce,
						numericPercent: Le,
					};
				}
				function S($e) {
					const { upperPercent: ye, lowerPercent: ue } = $e;
					return ue === 0 && ye > 0.6;
				}
				function I($e) {
					const {
						upperPercent: ye,
						lowerPercent: ue,
						alphaPercent: fe,
						numericPercent: me,
					} = $e;
					return ue > 0.2 && ye < 0.8 && fe > 0.6 && me < 0.2;
				}
				function T($e) {
					let ye = 0,
						ue = 0,
						fe = 0,
						me = 0;
					for (let ve = 0; ve < $e.length; ve++)
						(fe = $e.charCodeAt(ve)),
							h(fe) && ye++,
							a(fe) && ue++,
							n(fe) && me++;
					return (ye === 0 || ue === 0) && me === 0 ? $e.length <= 30 : ye <= 5;
				}
				function P($e, ye) {
					if (!ye || ((ye = ye.trim()), ye.length === 0) || !T($e)) return null;
					ye.length > 60 && (ye = ye.substring(0, 60));
					const ue = v(ye);
					if (!I(ue)) {
						if (!S(ue)) return null;
						ye = ye.toLowerCase();
					}
					let fe = null,
						me = 0;
					for (
						$e = $e.toLowerCase();
						me < ye.length && (fe = $($e, ye, 0, me)) === null;
					)
						me = y(ye, me + 1);
					return fe;
				}
				function k($e, ye, ue = !1) {
					if (!ye || ye.length === 0) return null;
					let fe = null,
						me = 0;
					for (
						$e = $e.toLowerCase(), ye = ye.toLowerCase();
						me < ye.length && ((fe = L($e, ye, 0, me, ue)), fe === null);
					)
						me = D(ye, me + 1);
					return fe;
				}
				function L($e, ye, ue, fe, me) {
					let ve = 0;
					if (ue === $e.length) return [];
					if (fe === ye.length) return null;
					if (!o($e.charCodeAt(ue), ye.charCodeAt(fe))) {
						const Ce = b($e.charCodeAt(ue));
						if (!Ce) return null;
						for (let Le = 0; Le < Ce.length; Le++)
							if (!o(Ce[Le], ye.charCodeAt(fe + Le))) return null;
						ve += Ce.length - 1;
					}
					let ge = null,
						be = fe + ve + 1;
					if (((ge = L($e, ye, ue + 1, be, me)), !me))
						for (; !ge && (be = D(ye, be)) < ye.length; )
							(ge = L($e, ye, ue + 1, be, me)), be++;
					if (!ge) return null;
					if ($e.charCodeAt(ue) !== ye.charCodeAt(fe)) {
						const Ce = b($e.charCodeAt(ue));
						if (!Ce) return ge;
						for (let Le = 0; Le < Ce.length; Le++)
							if (Ce[Le] !== ye.charCodeAt(fe + Le)) return ge;
					}
					return l({ start: fe, end: fe + ve + 1 }, ge);
				}
				function D($e, ye) {
					for (let ue = ye; ue < $e.length; ue++)
						if (p($e.charCodeAt(ue)) || (ue > 0 && p($e.charCodeAt(ue - 1))))
							return ue;
					return $e.length;
				}
				const M = C(e.$Tk, P, m),
					N = C(e.$Tk, P, r),
					A = new i.$Jc(1e4);
				function R($e, ye, ue = !1) {
					if (typeof $e != "string" || typeof ye != "string") return null;
					let fe = A.get($e);
					fe || ((fe = new RegExp(E.$vf($e), "i")), A.set($e, fe));
					const me = fe.exec(ye);
					return me
						? [{ start: me.index, end: me.index + me[0].length }]
						: ue
							? N($e, ye)
							: M($e, ye);
				}
				function O($e, ye) {
					const ue = Z($e, $e.toLowerCase(), 0, ye, ye.toLowerCase(), 0, {
						firstMatchCanBeWeak: !0,
						boostFullMatch: !0,
					});
					return ue ? U(ue) : null;
				}
				function B($e, ye, ue, fe, me, ve) {
					const ge = Math.min(13, $e.length);
					for (; ue < ge; ue++) {
						const be = Z($e, ye, ue, fe, me, ve, {
							firstMatchCanBeWeak: !0,
							boostFullMatch: !0,
						});
						if (be) return be;
					}
					return [0, ve];
				}
				function U($e) {
					if (typeof $e > "u") return [];
					const ye = [],
						ue = $e[1];
					for (let fe = $e.length - 1; fe > 1; fe--) {
						const me = $e[fe] + ue,
							ve = ye[ye.length - 1];
						ve && ve.end === me
							? (ve.end = me + 1)
							: ye.push({ start: me, end: me + 1 });
					}
					return ye;
				}
				const z = 128;
				function F() {
					const $e = [],
						ye = [];
					for (let ue = 0; ue <= z; ue++) ye[ue] = 0;
					for (let ue = 0; ue <= z; ue++) $e.push(ye.slice(0));
					return $e;
				}
				function x($e) {
					const ye = [];
					for (let ue = 0; ue <= $e; ue++) ye[ue] = 0;
					return ye;
				}
				const H = x(2 * z),
					q = x(2 * z),
					V = F(),
					G = F(),
					K = F(),
					J = !1;
				function W($e, ye, ue, fe, me) {
					function ve(be, Ce, Le = " ") {
						for (; be.length < Ce; ) be = Le + be;
						return be;
					}
					let ge = ` |   |${fe
						.split("")
						.map((be) => ve(be, 3))
						.join("|")}
`;
					for (let be = 0; be <= ue; be++)
						be === 0 ? (ge += " |") : (ge += `${ye[be - 1]}|`),
							(ge +=
								$e[be]
									.slice(0, me + 1)
									.map((Ce) => ve(Ce.toString(), 3))
									.join("|") +
								`
`);
					return ge;
				}
				function X($e, ye, ue, fe) {
					($e = $e.substr(ye)),
						(ue = ue.substr(fe)),
						console.log(W(G, $e, $e.length, ue, ue.length)),
						console.log(W(K, $e, $e.length, ue, ue.length)),
						console.log(W(V, $e, $e.length, ue, ue.length));
				}
				function Y($e, ye) {
					if (ye < 0 || ye >= $e.length) return !1;
					const ue = $e.codePointAt(ye);
					switch (ue) {
						case t.CharCode.Underline:
						case t.CharCode.Dash:
						case t.CharCode.Period:
						case t.CharCode.Space:
						case t.CharCode.Slash:
						case t.CharCode.Backslash:
						case t.CharCode.SingleQuote:
						case t.CharCode.DoubleQuote:
						case t.CharCode.Colon:
						case t.CharCode.DollarSign:
						case t.CharCode.LessThan:
						case t.CharCode.GreaterThan:
						case t.CharCode.OpenParen:
						case t.CharCode.CloseParen:
						case t.CharCode.OpenSquareBracket:
						case t.CharCode.CloseSquareBracket:
						case t.CharCode.OpenCurlyBrace:
						case t.CharCode.CloseCurlyBrace:
							return !0;
						case void 0:
							return !1;
						default:
							return !!E.$6f(ue);
					}
				}
				function ie($e, ye) {
					if (ye < 0 || ye >= $e.length) return !1;
					switch ($e.charCodeAt(ye)) {
						case t.CharCode.Space:
						case t.CharCode.Tab:
							return !0;
						default:
							return !1;
					}
				}
				function ne($e, ye, ue) {
					return ye[$e] !== ue[$e];
				}
				function ee($e, ye, ue, fe, me, ve, ge = !1) {
					for (; ye < ue && me < ve; )
						$e[ye] === fe[me] && (ge && (H[ye] = me), (ye += 1)), (me += 1);
					return ye === ue;
				}
				var _;
				(function ($e) {
					($e[($e.Diag = 1)] = "Diag"),
						($e[($e.Left = 2)] = "Left"),
						($e[($e.LeftLeft = 3)] = "LeftLeft");
				})(_ || (_ = {}));
				var te;
				(function ($e) {
					$e.Default = [-100, 0];
					function ye(ue) {
						return !ue || (ue.length === 2 && ue[0] === -100 && ue[1] === 0);
					}
					$e.isDefault = ye;
				})(te || (e.FuzzyScore = te = {}));
				class Q {
					static {
						this.default = { boostFullMatch: !0, firstMatchCanBeWeak: !1 };
					}
					constructor(ye, ue) {
						(this.firstMatchCanBeWeak = ye), (this.boostFullMatch = ue);
					}
				}
				e.$5k = Q;
				function Z($e, ye, ue, fe, me, ve, ge = Q.default) {
					const be = $e.length > z ? z : $e.length,
						Ce = fe.length > z ? z : fe.length;
					if (
						ue >= be ||
						ve >= Ce ||
						be - ue > Ce - ve ||
						!ee(ye, ue, be, me, ve, Ce, !0)
					)
						return;
					se(be, Ce, ue, ve, ye, me);
					let Le = 1,
						Fe = 1,
						Oe = ue,
						xe = ve;
					const He = [!1];
					for (Le = 1, Oe = ue; Oe < be; Le++, Oe++) {
						const Ie = H[Oe],
							Be = q[Oe],
							Se = Oe + 1 < be ? q[Oe + 1] : Ce;
						for (Fe = Ie - ve + 1, xe = Ie; xe < Se; Fe++, xe++) {
							let ke = Number.MIN_SAFE_INTEGER,
								Ue = !1;
							xe <= Be &&
								(ke = re(
									$e,
									ye,
									Oe,
									ue,
									fe,
									me,
									xe,
									Ce,
									ve,
									V[Le - 1][Fe - 1] === 0,
									He,
								));
							let qe = 0;
							ke !== Number.MAX_SAFE_INTEGER &&
								((Ue = !0), (qe = ke + G[Le - 1][Fe - 1]));
							const Ae = xe > Ie,
								Me = Ae ? G[Le][Fe - 1] + (V[Le][Fe - 1] > 0 ? -5 : 0) : 0,
								De = xe > Ie + 1 && V[Le][Fe - 1] > 0,
								Re = De ? G[Le][Fe - 2] + (V[Le][Fe - 2] > 0 ? -5 : 0) : 0;
							if (De && (!Ae || Re >= Me) && (!Ue || Re >= qe))
								(G[Le][Fe] = Re), (K[Le][Fe] = _.LeftLeft), (V[Le][Fe] = 0);
							else if (Ae && (!Ue || Me >= qe))
								(G[Le][Fe] = Me), (K[Le][Fe] = _.Left), (V[Le][Fe] = 0);
							else if (Ue)
								(G[Le][Fe] = qe),
									(K[Le][Fe] = _.Diag),
									(V[Le][Fe] = V[Le - 1][Fe - 1] + 1);
							else throw new Error("not possible");
						}
					}
					if ((J && X($e, ue, fe, ve), !He[0] && !ge.firstMatchCanBeWeak))
						return;
					Le--, Fe--;
					const Ke = [G[Le][Fe], ve];
					let Je = 0,
						Te = 0;
					for (; Le >= 1; ) {
						let Ie = Fe;
						do {
							const Be = K[Le][Ie];
							if (Be === _.LeftLeft) Ie = Ie - 2;
							else if (Be === _.Left) Ie = Ie - 1;
							else break;
						} while (Ie >= 1);
						Je > 1 &&
							ye[ue + Le - 1] === me[ve + Fe - 1] &&
							!ne(Ie + ve - 1, fe, me) &&
							Je + 1 > V[Le][Ie] &&
							(Ie = Fe),
							Ie === Fe ? Je++ : (Je = 1),
							Te || (Te = Ie),
							Le--,
							(Fe = Ie - 1),
							Ke.push(Fe);
					}
					Ce - ve === be && ge.boostFullMatch && (Ke[0] += 2);
					const Ee = Te - be;
					return (Ke[0] -= Ee), Ke;
				}
				function se($e, ye, ue, fe, me, ve) {
					let ge = $e - 1,
						be = ye - 1;
					for (; ge >= ue && be >= fe; )
						me[ge] === ve[be] && ((q[ge] = be), ge--), be--;
				}
				function re($e, ye, ue, fe, me, ve, ge, be, Ce, Le, Fe) {
					if (ye[ue] !== ve[ge]) return Number.MIN_SAFE_INTEGER;
					let Oe = 1,
						xe = !1;
					return (
						ge === ue - fe
							? (Oe = $e[ue] === me[ge] ? 7 : 5)
							: ne(ge, me, ve) && (ge === 0 || !ne(ge - 1, me, ve))
								? ((Oe = $e[ue] === me[ge] ? 7 : 5), (xe = !0))
								: Y(ve, ge) && (ge === 0 || !Y(ve, ge - 1))
									? (Oe = 5)
									: (Y(ve, ge - 1) || ie(ve, ge - 1)) && ((Oe = 5), (xe = !0)),
						Oe > 1 && ue === fe && (Fe[0] = !0),
						xe || (xe = ne(ge, me, ve) || Y(ve, ge - 1) || ie(ve, ge - 1)),
						ue === fe
							? ge > Ce && (Oe -= xe ? 3 : 5)
							: Le
								? (Oe += xe ? 2 : 0)
								: (Oe += xe ? 0 : 1),
						ge + 1 === be && (Oe -= xe ? 3 : 5),
						Oe
					);
				}
				function le($e, ye, ue, fe, me, ve, ge) {
					return ae($e, ye, ue, fe, me, ve, !0, ge);
				}
				function oe($e, ye, ue, fe, me, ve, ge) {
					return ae($e, ye, ue, fe, me, ve, !1, ge);
				}
				function ae($e, ye, ue, fe, me, ve, ge, be) {
					let Ce = Z($e, ye, ue, fe, me, ve, be);
					if (Ce && !ge) return Ce;
					if ($e.length >= 3) {
						const Le = Math.min(7, $e.length - 1);
						for (let Fe = ue + 1; Fe < Le; Fe++) {
							const Oe = pe($e, Fe);
							if (Oe) {
								const xe = Z(Oe, Oe.toLowerCase(), ue, fe, me, ve, be);
								xe && ((xe[0] -= 3), (!Ce || xe[0] > Ce[0]) && (Ce = xe));
							}
						}
					}
					return Ce;
				}
				function pe($e, ye) {
					if (ye + 1 >= $e.length) return;
					const ue = $e[ye],
						fe = $e[ye + 1];
					if (ue !== fe) return $e.slice(0, ye) + fe + ue + $e.slice(ye + 2);
				}
			},
		),
		
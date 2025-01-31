import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/resources.js';
import '../../../base/common/severity.js';
import '../../../nls.js';
import '../../../base/common/semver/semver.js';
import './extensions.js';
import './extensionsApiProposals.js';
define(
		de[772],
		he([1, 0, 19, 111, 4, 464, 109, 1179]),
		function (ce /*require*/,
 e /*exports*/,
 t /*resources*/,
 i /*severity*/,
 w /*nls*/,
 E /*semver*/,
 C /*extensions*/,
 d /*extensionsApiProposals*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$sq = u),
				(e.$tq = a),
				(e.$uq = h),
				(e.$vq = c),
				(e.$wq = n),
				(e.$xq = g),
				(e.$yq = p),
				(e.$zq = o),
				(i = xi(i)),
				(w = mt(w)),
				(E = mt(E));
			const m = /^(\^|>=)?((\d+)|x)\.((\d+)|x)\.((\d+)|x)(\-.*)?$/,
				r = /^-(\d{4})(\d{2})(\d{2})$/;
			function u(s) {
				return (s = s.trim()), s === "*" || m.test(s);
			}
			function a(s) {
				if (!u(s)) return null;
				if (((s = s.trim()), s === "*"))
					return {
						hasCaret: !1,
						hasGreaterEquals: !1,
						majorBase: 0,
						majorMustEqual: !1,
						minorBase: 0,
						minorMustEqual: !1,
						patchBase: 0,
						patchMustEqual: !1,
						preRelease: null,
					};
				const l = s.match(m);
				return l
					? {
							hasCaret: l[1] === "^",
							hasGreaterEquals: l[1] === ">=",
							majorBase: l[2] === "x" ? 0 : parseInt(l[2], 10),
							majorMustEqual: l[2] !== "x",
							minorBase: l[4] === "x" ? 0 : parseInt(l[4], 10),
							minorMustEqual: l[4] !== "x",
							patchBase: l[6] === "x" ? 0 : parseInt(l[6], 10),
							patchMustEqual: l[6] !== "x",
							preRelease: l[8] || null,
						}
					: null;
			}
			function h(s) {
				if (!s) return null;
				const l = s.majorBase,
					y = s.majorMustEqual,
					$ = s.minorBase;
				let v = s.minorMustEqual;
				const S = s.patchBase;
				let I = s.patchMustEqual;
				s.hasCaret && (l === 0 || (v = !1), (I = !1));
				let T = 0;
				if (s.preRelease) {
					const P = r.exec(s.preRelease);
					if (P) {
						const [, k, L, D] = P;
						T = Date.UTC(Number(k), Number(L) - 1, Number(D));
					}
				}
				return {
					majorBase: l,
					majorMustEqual: y,
					minorBase: $,
					minorMustEqual: v,
					patchBase: S,
					patchMustEqual: I,
					isMinimum: s.hasGreaterEquals,
					notBefore: T,
				};
			}
			function c(s, l, y) {
				let $;
				typeof s == "string" ? ($ = h(a(s))) : ($ = s);
				let v;
				l instanceof Date
					? (v = l.getTime())
					: typeof l == "string" && (v = new Date(l).getTime());
				let S;
				if ((typeof y == "string" ? (S = h(a(y))) : (S = y), !$ || !S))
					return !1;
				const I = $.majorBase,
					T = $.minorBase,
					P = $.patchBase;
				let k = S.majorBase,
					L = S.minorBase,
					D = S.patchBase;
				const M = S.notBefore;
				let N = S.majorMustEqual,
					A = S.minorMustEqual,
					R = S.patchMustEqual;
				return S.isMinimum
					? I > k
						? !0
						: I < k
							? !1
							: T > L
								? !0
								: T < L || (v && v < M)
									? !1
									: P >= D
					: (I === 1 &&
							k === 0 &&
							(!N || !A || !R) &&
							((k = 1), (L = 0), (D = 0), (N = !0), (A = !1), (R = !1)),
						I < k
							? !1
							: I > k
								? !N
								: T < L
									? !1
									: T > L
										? !A
										: P < D
											? !1
											: P > D
												? !R
												: !(v && v < M));
			}
			function n(s, l, y, $, v, S) {
				const I = [];
				if (typeof $.publisher < "u" && typeof $.publisher != "string")
					return I.push([i.default.Error, w.localize(1844, null)]), I;
				if (typeof $.name != "string")
					return I.push([i.default.Error, w.localize(1845, null, "name")]), I;
				if (typeof $.version != "string")
					return (
						I.push([i.default.Error, w.localize(1846, null, "version")]), I
					);
				if (!$.engines)
					return (
						I.push([i.default.Error, w.localize(1847, null, "engines")]), I
					);
				if (typeof $.engines.vscode != "string")
					return (
						I.push([i.default.Error, w.localize(1848, null, "engines.vscode")]),
						I
					);
				if (typeof $.extensionDependencies < "u" && !b($.extensionDependencies))
					return (
						I.push([
							i.default.Error,
							w.localize(1849, null, "extensionDependencies"),
						]),
						I
					);
				if (typeof $.activationEvents < "u") {
					if (!b($.activationEvents))
						return (
							I.push([
								i.default.Error,
								w.localize(1850, null, "activationEvents"),
							]),
							I
						);
					if (typeof $.main > "u" && typeof $.browser > "u")
						return (
							I.push([
								i.default.Error,
								w.localize(1851, null, "activationEvents", "main", "browser"),
							]),
							I
						);
				}
				if (
					(typeof $.extensionKind < "u" &&
						typeof $.main > "u" &&
						I.push([
							i.default.Warning,
							w.localize(1852, null, "extensionKind"),
						]),
					typeof $.main < "u")
				) {
					if (typeof $.main != "string")
						return I.push([i.default.Error, w.localize(1853, null, "main")]), I;
					{
						const k = (0, t.$nh)(y, $.main);
						(0, t.$hh)(k, y) ||
							I.push([
								i.default.Warning,
								w.localize(1854, null, k.path, y.path),
							]);
					}
				}
				if (typeof $.browser < "u") {
					if (typeof $.browser != "string")
						return (
							I.push([i.default.Error, w.localize(1855, null, "browser")]), I
						);
					{
						const k = (0, t.$nh)(y, $.browser);
						(0, t.$hh)(k, y) ||
							I.push([
								i.default.Warning,
								w.localize(1856, null, k.path, y.path),
							]);
					}
				}
				if (!E.valid($.version))
					return I.push([i.default.Error, w.localize(1857, null)]), I;
				const T = [];
				if (!g(s, l, $, v, T)) for (const k of T) I.push([i.default.Error, k]);
				if (S && $.enabledApiProposals?.length) {
					const k = [];
					if (!o([...$.enabledApiProposals], k))
						for (const L of k) I.push([i.default.Error, L]);
				}
				return I;
			}
			function g(s, l, y, $, v) {
				return $ || (typeof y.main > "u" && typeof y.browser > "u")
					? !0
					: f(s, l, y.engines.vscode, v);
			}
			function p(s, l, y) {
				return s === "*" || f(l, y, s);
			}
			function o(s, l) {
				if (s.length === 0) return !0;
				const y = Array.isArray(l) ? l : void 0,
					$ = (y ? void 0 : l) ?? d.allApiProposals,
					v = [],
					S = (0, C.$Nn)(s);
				for (const { proposalName: I, version: T } of S) {
					const P = $[I];
					P && T && P.version !== T && v.push(w.localize(1858, null, I));
				}
				return y?.push(...v), v.length === 0;
			}
			function f(s, l, y, $ = []) {
				const v = h(a(y));
				if (!v) return $.push(w.localize(1859, null, y)), !1;
				if (v.majorBase === 0) {
					if (!v.majorMustEqual || !v.minorMustEqual)
						return $.push(w.localize(1860, null, y)), !1;
				} else if (!v.majorMustEqual)
					return $.push(w.localize(1861, null, y)), !1;
				return c(s, l, v) ? !0 : ($.push(w.localize(1862, null, s, y)), !1);
			}
			function b(s) {
				if (!Array.isArray(s)) return !1;
				for (let l = 0, y = s.length; l < y; l++)
					if (typeof s[l] != "string") return !1;
				return !0;
			}
		},
	)

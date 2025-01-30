import '../../../require.js';
import '../../../exports.js';
import './arrays.js';
import './async.js';
import './charCode.js';
import './extpath.js';
import './map.js';
import './path.js';
import './platform.js';
import './strings.js';
define(
			de[215],
			he([1, 0, 24, 15, 120, 249, 59, 54, 12, 37]),
			function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*async*/,
 w /*charCode*/,
 E /*extpath*/,
 C /*map*/,
 d /*path*/,
 m /*platform*/,
 r /*strings*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Gk = e.$Fk = void 0),
					(e.$Ek = u),
					(e.$Hk = g),
					(e.$Ik = A),
					(e.$Jk = R),
					(e.$Kk = O),
					(e.$Lk = B),
					(e.$Mk = U),
					(e.$Nk = H),
					(e.$Ok = V),
					(e.$Pk = G);
				function u() {
					return Object.create(null);
				}
				(e.$Fk = "**"), (e.$Gk = "/");
				const a = "[/\\\\]",
					h = "[^/\\\\]",
					c = /\//g;
				function n(K, J) {
					switch (K) {
						case 0:
							return "";
						case 1:
							return `${h}*?`;
						default:
							return `(?:${a}|${h}+${a}${J ? `|${a}${h}+` : ""})*?`;
					}
				}
				function g(K, J) {
					if (!K) return [];
					const W = [];
					let X = !1,
						Y = !1,
						ie = "";
					for (const ne of K) {
						switch (ne) {
							case J:
								if (!X && !Y) {
									W.push(ie), (ie = "");
									continue;
								}
								break;
							case "{":
								X = !0;
								break;
							case "}":
								X = !1;
								break;
							case "[":
								Y = !0;
								break;
							case "]":
								Y = !1;
								break;
						}
						ie += ne;
					}
					return ie && W.push(ie), W;
				}
				function p(K) {
					if (!K) return "";
					let J = "";
					const W = g(K, e.$Gk);
					if (W.every((X) => X === e.$Fk)) J = ".*";
					else {
						let X = !1;
						W.forEach((Y, ie) => {
							if (Y === e.$Fk) {
								if (X) return;
								J += n(2, ie === W.length - 1);
							} else {
								let ne = !1,
									ee = "",
									_ = !1,
									te = "";
								for (const Q of Y) {
									if (Q !== "}" && ne) {
										ee += Q;
										continue;
									}
									if (_ && (Q !== "]" || !te)) {
										let Z;
										Q === "-"
											? (Z = Q)
											: (Q === "^" || Q === "!") && !te
												? (Z = "^")
												: Q === e.$Gk
													? (Z = "")
													: (Z = (0, r.$of)(Q)),
											(te += Z);
										continue;
									}
									switch (Q) {
										case "{":
											ne = !0;
											continue;
										case "[":
											_ = !0;
											continue;
										case "}": {
											const se = `(?:${g(ee, ",")
												.map((re) => p(re))
												.join("|")})`;
											(J += se), (ne = !1), (ee = "");
											break;
										}
										case "]": {
											(J += "[" + te + "]"), (_ = !1), (te = "");
											break;
										}
										case "?":
											J += h;
											continue;
										case "*":
											J += n(1);
											continue;
										default:
											J += (0, r.$of)(Q);
									}
								}
								ie < W.length - 1 &&
									(W[ie + 1] !== e.$Fk || ie + 2 < W.length) &&
									(J += a);
							}
							X = Y === e.$Fk;
						});
					}
					return J;
				}
				const o = /^\*\*\/\*\.[\w\.-]+$/,
					f = /^\*\*\/([\w\.-]+)\/?$/,
					b = /^{\*\*\/\*?[\w\.-]+\/?(,\*\*\/\*?[\w\.-]+\/?)*}$/,
					s =
						/^{\*\*\/\*?[\w\.-]+(\/(\*\*)?)?(,\*\*\/\*?[\w\.-]+(\/(\*\*)?)?)*}$/,
					l = /^\*\*((\/[\w\.-]+)+)\/?$/,
					y = /^([\w\.-]+(\/[\w\.-]+)*)\/?$/,
					$ = new C.$Jc(1e4),
					v = function () {
						return !1;
					},
					S = function () {
						return null;
					};
				function I(K, J) {
					if (!K) return S;
					let W;
					typeof K != "string" ? (W = K.pattern) : (W = K), (W = W.trim());
					const X = `${W}_${!!J.trimForExclusions}`;
					let Y = $.get(X);
					if (Y) return T(Y, K);
					let ie;
					return (
						o.test(W)
							? (Y = k(W.substr(4), W))
							: (ie = f.exec(P(W, J)))
								? (Y = L(ie[1], W))
								: (J.trimForExclusions ? s : b).test(W)
									? (Y = D(W, J))
									: (ie = l.exec(P(W, J)))
										? (Y = M(ie[1].substr(1), W, !0))
										: (ie = y.exec(P(W, J)))
											? (Y = M(ie[1], W, !1))
											: (Y = N(W)),
						$.set(X, Y),
						T(Y, K)
					);
				}
				function T(K, J) {
					if (typeof J == "string") return K;
					const W = function (X, Y) {
						return (0, E.$Lg)(X, J.base, !m.$n)
							? K((0, r.$tf)(X.substr(J.base.length), d.sep), Y)
							: null;
					};
					return (
						(W.allBasenames = K.allBasenames),
						(W.allPaths = K.allPaths),
						(W.basenames = K.basenames),
						(W.patterns = K.patterns),
						W
					);
				}
				function P(K, J) {
					return J.trimForExclusions && K.endsWith("/**")
						? K.substr(0, K.length - 2)
						: K;
				}
				function k(K, J) {
					return function (W, X) {
						return typeof W == "string" && W.endsWith(K) ? J : null;
					};
				}
				function L(K, J) {
					const W = `/${K}`,
						X = `\\${K}`,
						Y = function (ne, ee) {
							return typeof ne != "string"
								? null
								: ee
									? ee === K
										? J
										: null
									: ne === K || ne.endsWith(W) || ne.endsWith(X)
										? J
										: null;
						},
						ie = [K];
					return (
						(Y.basenames = ie), (Y.patterns = [J]), (Y.allBasenames = ie), Y
					);
				}
				function D(K, J) {
					const W = x(
							K.slice(1, -1)
								.split(",")
								.map((ee) => I(ee, J))
								.filter((ee) => ee !== S),
							K,
						),
						X = W.length;
					if (!X) return S;
					if (X === 1) return W[0];
					const Y = function (ee, _) {
							for (let te = 0, Q = W.length; te < Q; te++)
								if (W[te](ee, _)) return K;
							return null;
						},
						ie = W.find((ee) => !!ee.allBasenames);
					ie && (Y.allBasenames = ie.allBasenames);
					const ne = W.reduce(
						(ee, _) => (_.allPaths ? ee.concat(_.allPaths) : ee),
						[],
					);
					return ne.length && (Y.allPaths = ne), Y;
				}
				function M(K, J, W) {
					const X = d.sep === d.$lc.sep,
						Y = X ? K : K.replace(c, d.sep),
						ie = d.sep + Y,
						ne = d.$lc.sep + K;
					let ee;
					return (
						W
							? (ee = function (_, te) {
									return typeof _ == "string" &&
										(_ === Y ||
											_.endsWith(ie) ||
											(!X && (_ === K || _.endsWith(ne))))
										? J
										: null;
								})
							: (ee = function (_, te) {
									return typeof _ == "string" && (_ === Y || (!X && _ === K))
										? J
										: null;
								}),
						(ee.allPaths = [(W ? "*/" : "./") + K]),
						ee
					);
				}
				function N(K) {
					try {
						const J = new RegExp(`^${p(K)}$`);
						return function (W) {
							return (
								(J.lastIndex = 0), typeof W == "string" && J.test(W) ? K : null
							);
						};
					} catch {
						return S;
					}
				}
				function A(K, J, W) {
					return !K || typeof J != "string" ? !1 : R(K)(J, void 0, W);
				}
				function R(K, J = {}) {
					if (!K) return v;
					if (typeof K == "string" || O(K)) {
						const W = I(K, J);
						if (W === S) return v;
						const X = function (Y, ie) {
							return !!W(Y, ie);
						};
						return (
							W.allBasenames && (X.allBasenames = W.allBasenames),
							W.allPaths && (X.allPaths = W.allPaths),
							X
						);
					}
					return z(K, J);
				}
				function O(K) {
					const J = K;
					return J
						? typeof J.base == "string" && typeof J.pattern == "string"
						: !1;
				}
				function B(K) {
					return K.allBasenames || [];
				}
				function U(K) {
					return K.allPaths || [];
				}
				function z(K, J) {
					const W = x(
							Object.getOwnPropertyNames(K)
								.map((ee) => F(ee, K[ee], J))
								.filter((ee) => ee !== S),
						),
						X = W.length;
					if (!X) return S;
					if (!W.some((ee) => !!ee.requiresSiblings)) {
						if (X === 1) return W[0];
						const ee = function (Q, Z) {
								let se;
								for (let re = 0, le = W.length; re < le; re++) {
									const oe = W[re](Q, Z);
									if (typeof oe == "string") return oe;
									(0, i.$yh)(oe) && (se || (se = []), se.push(oe));
								}
								return se
									? (async () => {
											for (const re of se) {
												const le = await re;
												if (typeof le == "string") return le;
											}
											return null;
										})()
									: null;
							},
							_ = W.find((Q) => !!Q.allBasenames);
						_ && (ee.allBasenames = _.allBasenames);
						const te = W.reduce(
							(Q, Z) => (Z.allPaths ? Q.concat(Z.allPaths) : Q),
							[],
						);
						return te.length && (ee.allPaths = te), ee;
					}
					const Y = function (ee, _, te) {
							let Q, Z;
							for (let se = 0, re = W.length; se < re; se++) {
								const le = W[se];
								le.requiresSiblings &&
									te &&
									(_ || (_ = (0, d.$sc)(ee)),
									Q || (Q = _.substr(0, _.length - (0, d.$tc)(ee).length)));
								const oe = le(ee, _, Q, te);
								if (typeof oe == "string") return oe;
								(0, i.$yh)(oe) && (Z || (Z = []), Z.push(oe));
							}
							return Z
								? (async () => {
										for (const se of Z) {
											const re = await se;
											if (typeof re == "string") return re;
										}
										return null;
									})()
								: null;
						},
						ie = W.find((ee) => !!ee.allBasenames);
					ie && (Y.allBasenames = ie.allBasenames);
					const ne = W.reduce(
						(ee, _) => (_.allPaths ? ee.concat(_.allPaths) : ee),
						[],
					);
					return ne.length && (Y.allPaths = ne), Y;
				}
				function F(K, J, W) {
					if (J === !1) return S;
					const X = I(K, W);
					if (X === S) return S;
					if (typeof J == "boolean") return X;
					if (J) {
						const Y = J.when;
						if (typeof Y == "string") {
							const ie = (ne, ee, _, te) => {
								if (!te || !X(ne, ee)) return null;
								const Q = Y.replace("$(basename)", () => _),
									Z = te(Q);
								return (0, i.$yh)(Z)
									? Z.then((se) => (se ? K : null))
									: Z
										? K
										: null;
							};
							return (ie.requiresSiblings = !0), ie;
						}
					}
					return X;
				}
				function x(K, J) {
					const W = K.filter((ee) => !!ee.basenames);
					if (W.length < 2) return K;
					const X = W.reduce((ee, _) => {
						const te = _.basenames;
						return te ? ee.concat(te) : ee;
					}, []);
					let Y;
					if (J) {
						Y = [];
						for (let ee = 0, _ = X.length; ee < _; ee++) Y.push(J);
					} else
						Y = W.reduce((ee, _) => {
							const te = _.patterns;
							return te ? ee.concat(te) : ee;
						}, []);
					const ie = function (ee, _) {
						if (typeof ee != "string") return null;
						if (!_) {
							let Q;
							for (Q = ee.length; Q > 0; Q--) {
								const Z = ee.charCodeAt(Q - 1);
								if (Z === w.CharCode.Slash || Z === w.CharCode.Backslash) break;
							}
							_ = ee.substr(Q);
						}
						const te = X.indexOf(_);
						return te !== -1 ? Y[te] : null;
					};
					(ie.basenames = X), (ie.patterns = Y), (ie.allBasenames = X);
					const ne = K.filter((ee) => !ee.basenames);
					return ne.push(ie), ne;
				}
				function H(K, J) {
					return (0, t.$yb)(K, J, (W, X) =>
						typeof W == "string" && typeof X == "string"
							? W === X
							: typeof W != "string" && typeof X != "string"
								? W.base === X.base && W.pattern === X.pattern
								: !1,
					);
				}
				function q(K) {
					return K.startsWith("{") && K.endsWith("}")
						? K.slice(1, -1).split(",")
						: [K];
				}
				function V({ globsNewLineSeparated: K, properGlob: J }) {
					const W = [];
					return (
						K &&
							W.push(
								...K.split(`
`),
							),
						J && W.push(...q(J)),
						W.filter((X) => X !== "").map((X) =>
							X.match(/^[a-zA-Z0-9]/) ? "*" + X : X,
						)
					);
				}
				function G({ globsNewLineSeparated: K, properGlob: J }) {
					const W = V({ globsNewLineSeparated: K, properGlob: J });
					if (W.length !== 0) return `{${W.join(",")}}`;
				}
			},
		),
		
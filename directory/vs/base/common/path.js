import '../../../require.js';
import '../../../exports.js';
import './process.js';
define(de[54], he([1, 0, 344]), function (ce /*require*/,
 e /*exports*/,
 t /*process*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$yc =
					e.sep =
					e.$wc =
					e.$vc =
					e.$uc =
					e.$tc =
					e.$sc =
					e.$rc =
					e.$qc =
					e.$pc =
					e.$oc =
					e.$nc =
					e.$mc =
					e.$lc =
					e.$kc =
						void 0),
				(t = mt(t));
			const i = 65,
				w = 97,
				E = 90,
				C = 122,
				d = 46,
				m = 47,
				r = 92,
				u = 58,
				a = 63;
			class h extends Error {
				constructor(v, S, I) {
					let T;
					typeof S == "string" && S.indexOf("not ") === 0
						? ((T = "must not be"), (S = S.replace(/^not /, "")))
						: (T = "must be");
					const P = v.indexOf(".") !== -1 ? "property" : "argument";
					let k = `The "${v}" ${P} ${T} of type ${S}`;
					(k += `. Received type ${typeof I}`),
						super(k),
						(this.code = "ERR_INVALID_ARG_TYPE");
				}
			}
			function c($, v) {
				if ($ === null || typeof $ != "object") throw new h(v, "Object", $);
			}
			function n($, v) {
				if (typeof $ != "string") throw new h(v, "string", $);
			}
			const g = t.$ic === "win32";
			function p($) {
				return $ === m || $ === r;
			}
			function o($) {
				return $ === m;
			}
			function f($) {
				return ($ >= i && $ <= E) || ($ >= w && $ <= C);
			}
			function b($, v, S, I) {
				let T = "",
					P = 0,
					k = -1,
					L = 0,
					D = 0;
				for (let M = 0; M <= $.length; ++M) {
					if (M < $.length) D = $.charCodeAt(M);
					else {
						if (I(D)) break;
						D = m;
					}
					if (I(D)) {
						if (!(k === M - 1 || L === 1))
							if (L === 2) {
								if (
									T.length < 2 ||
									P !== 2 ||
									T.charCodeAt(T.length - 1) !== d ||
									T.charCodeAt(T.length - 2) !== d
								) {
									if (T.length > 2) {
										const N = T.lastIndexOf(S);
										N === -1
											? ((T = ""), (P = 0))
											: ((T = T.slice(0, N)),
												(P = T.length - 1 - T.lastIndexOf(S))),
											(k = M),
											(L = 0);
										continue;
									} else if (T.length !== 0) {
										(T = ""), (P = 0), (k = M), (L = 0);
										continue;
									}
								}
								v && ((T += T.length > 0 ? `${S}..` : ".."), (P = 2));
							} else
								T.length > 0
									? (T += `${S}${$.slice(k + 1, M)}`)
									: (T = $.slice(k + 1, M)),
									(P = M - k - 1);
						(k = M), (L = 0);
					} else D === d && L !== -1 ? ++L : (L = -1);
				}
				return T;
			}
			function s($) {
				return $ ? `${$[0] === "." ? "" : "."}${$}` : "";
			}
			function l($, v) {
				c(v, "pathObject");
				const S = v.dir || v.root,
					I = v.base || `${v.name || ""}${s(v.ext)}`;
				return S ? (S === v.root ? `${S}${I}` : `${S}${$}${I}`) : I;
			}
			e.$kc = {
				resolve(...$) {
					let v = "",
						S = "",
						I = !1;
					for (let T = $.length - 1; T >= -1; T--) {
						let P;
						if (T >= 0) {
							if (((P = $[T]), n(P, `paths[${T}]`), P.length === 0)) continue;
						} else
							v.length === 0
								? (P = t.cwd())
								: ((P = t.env[`=${v}`] || t.cwd()),
									(P === void 0 ||
										(P.slice(0, 2).toLowerCase() !== v.toLowerCase() &&
											P.charCodeAt(2) === r)) &&
										(P = `${v}\\`));
						const k = P.length;
						let L = 0,
							D = "",
							M = !1;
						const N = P.charCodeAt(0);
						if (k === 1) p(N) && ((L = 1), (M = !0));
						else if (p(N))
							if (((M = !0), p(P.charCodeAt(1)))) {
								let A = 2,
									R = A;
								for (; A < k && !p(P.charCodeAt(A)); ) A++;
								if (A < k && A !== R) {
									const O = P.slice(R, A);
									for (R = A; A < k && p(P.charCodeAt(A)); ) A++;
									if (A < k && A !== R) {
										for (R = A; A < k && !p(P.charCodeAt(A)); ) A++;
										(A === k || A !== R) &&
											((D = `\\\\${O}\\${P.slice(R, A)}`), (L = A));
									}
								}
							} else L = 1;
						else
							f(N) &&
								P.charCodeAt(1) === u &&
								((D = P.slice(0, 2)),
								(L = 2),
								k > 2 && p(P.charCodeAt(2)) && ((M = !0), (L = 3)));
						if (D.length > 0)
							if (v.length > 0) {
								if (D.toLowerCase() !== v.toLowerCase()) continue;
							} else v = D;
						if (I) {
							if (v.length > 0) break;
						} else if (
							((S = `${P.slice(L)}\\${S}`), (I = M), M && v.length > 0)
						)
							break;
					}
					return (S = b(S, !I, "\\", p)), I ? `${v}\\${S}` : `${v}${S}` || ".";
				},
				normalize($) {
					n($, "path");
					const v = $.length;
					if (v === 0) return ".";
					let S = 0,
						I,
						T = !1;
					const P = $.charCodeAt(0);
					if (v === 1) return o(P) ? "\\" : $;
					if (p(P))
						if (((T = !0), p($.charCodeAt(1)))) {
							let L = 2,
								D = L;
							for (; L < v && !p($.charCodeAt(L)); ) L++;
							if (L < v && L !== D) {
								const M = $.slice(D, L);
								for (D = L; L < v && p($.charCodeAt(L)); ) L++;
								if (L < v && L !== D) {
									for (D = L; L < v && !p($.charCodeAt(L)); ) L++;
									if (L === v) return `\\\\${M}\\${$.slice(D)}\\`;
									L !== D && ((I = `\\\\${M}\\${$.slice(D, L)}`), (S = L));
								}
							}
						} else S = 1;
					else
						f(P) &&
							$.charCodeAt(1) === u &&
							((I = $.slice(0, 2)),
							(S = 2),
							v > 2 && p($.charCodeAt(2)) && ((T = !0), (S = 3)));
					let k = S < v ? b($.slice(S), !T, "\\", p) : "";
					return (
						k.length === 0 && !T && (k = "."),
						k.length > 0 && p($.charCodeAt(v - 1)) && (k += "\\"),
						I === void 0 ? (T ? `\\${k}` : k) : T ? `${I}\\${k}` : `${I}${k}`
					);
				},
				isAbsolute($) {
					n($, "path");
					const v = $.length;
					if (v === 0) return !1;
					const S = $.charCodeAt(0);
					return (
						p(S) ||
						(v > 2 && f(S) && $.charCodeAt(1) === u && p($.charCodeAt(2)))
					);
				},
				join(...$) {
					if ($.length === 0) return ".";
					let v, S;
					for (let P = 0; P < $.length; ++P) {
						const k = $[P];
						n(k, "path"),
							k.length > 0 && (v === void 0 ? (v = S = k) : (v += `\\${k}`));
					}
					if (v === void 0) return ".";
					let I = !0,
						T = 0;
					if (typeof S == "string" && p(S.charCodeAt(0))) {
						++T;
						const P = S.length;
						P > 1 &&
							p(S.charCodeAt(1)) &&
							(++T, P > 2 && (p(S.charCodeAt(2)) ? ++T : (I = !1)));
					}
					if (I) {
						for (; T < v.length && p(v.charCodeAt(T)); ) T++;
						T >= 2 && (v = `\\${v.slice(T)}`);
					}
					return e.$kc.normalize(v);
				},
				relative($, v) {
					if ((n($, "from"), n(v, "to"), $ === v)) return "";
					const S = e.$kc.resolve($),
						I = e.$kc.resolve(v);
					if (
						S === I ||
						(($ = S.toLowerCase()), (v = I.toLowerCase()), $ === v)
					)
						return "";
					let T = 0;
					for (; T < $.length && $.charCodeAt(T) === r; ) T++;
					let P = $.length;
					for (; P - 1 > T && $.charCodeAt(P - 1) === r; ) P--;
					const k = P - T;
					let L = 0;
					for (; L < v.length && v.charCodeAt(L) === r; ) L++;
					let D = v.length;
					for (; D - 1 > L && v.charCodeAt(D - 1) === r; ) D--;
					const M = D - L,
						N = k < M ? k : M;
					let A = -1,
						R = 0;
					for (; R < N; R++) {
						const B = $.charCodeAt(T + R);
						if (B !== v.charCodeAt(L + R)) break;
						B === r && (A = R);
					}
					if (R !== N) {
						if (A === -1) return I;
					} else {
						if (M > N) {
							if (v.charCodeAt(L + R) === r) return I.slice(L + R + 1);
							if (R === 2) return I.slice(L + R);
						}
						k > N && ($.charCodeAt(T + R) === r ? (A = R) : R === 2 && (A = 3)),
							A === -1 && (A = 0);
					}
					let O = "";
					for (R = T + A + 1; R <= P; ++R)
						(R === P || $.charCodeAt(R) === r) &&
							(O += O.length === 0 ? ".." : "\\..");
					return (
						(L += A),
						O.length > 0
							? `${O}${I.slice(L, D)}`
							: (I.charCodeAt(L) === r && ++L, I.slice(L, D))
					);
				},
				toNamespacedPath($) {
					if (typeof $ != "string" || $.length === 0) return $;
					const v = e.$kc.resolve($);
					if (v.length <= 2) return $;
					if (v.charCodeAt(0) === r) {
						if (v.charCodeAt(1) === r) {
							const S = v.charCodeAt(2);
							if (S !== a && S !== d) return `\\\\?\\UNC\\${v.slice(2)}`;
						}
					} else if (
						f(v.charCodeAt(0)) &&
						v.charCodeAt(1) === u &&
						v.charCodeAt(2) === r
					)
						return `\\\\?\\${v}`;
					return $;
				},
				dirname($) {
					n($, "path");
					const v = $.length;
					if (v === 0) return ".";
					let S = -1,
						I = 0;
					const T = $.charCodeAt(0);
					if (v === 1) return p(T) ? $ : ".";
					if (p(T)) {
						if (((S = I = 1), p($.charCodeAt(1)))) {
							let L = 2,
								D = L;
							for (; L < v && !p($.charCodeAt(L)); ) L++;
							if (L < v && L !== D) {
								for (D = L; L < v && p($.charCodeAt(L)); ) L++;
								if (L < v && L !== D) {
									for (D = L; L < v && !p($.charCodeAt(L)); ) L++;
									if (L === v) return $;
									L !== D && (S = I = L + 1);
								}
							}
						}
					} else
						f(T) &&
							$.charCodeAt(1) === u &&
							((S = v > 2 && p($.charCodeAt(2)) ? 3 : 2), (I = S));
					let P = -1,
						k = !0;
					for (let L = v - 1; L >= I; --L)
						if (p($.charCodeAt(L))) {
							if (!k) {
								P = L;
								break;
							}
						} else k = !1;
					if (P === -1) {
						if (S === -1) return ".";
						P = S;
					}
					return $.slice(0, P);
				},
				basename($, v) {
					v !== void 0 && n(v, "suffix"), n($, "path");
					let S = 0,
						I = -1,
						T = !0,
						P;
					if (
						($.length >= 2 &&
							f($.charCodeAt(0)) &&
							$.charCodeAt(1) === u &&
							(S = 2),
						v !== void 0 && v.length > 0 && v.length <= $.length)
					) {
						if (v === $) return "";
						let k = v.length - 1,
							L = -1;
						for (P = $.length - 1; P >= S; --P) {
							const D = $.charCodeAt(P);
							if (p(D)) {
								if (!T) {
									S = P + 1;
									break;
								}
							} else
								L === -1 && ((T = !1), (L = P + 1)),
									k >= 0 &&
										(D === v.charCodeAt(k)
											? --k === -1 && (I = P)
											: ((k = -1), (I = L)));
						}
						return (
							S === I ? (I = L) : I === -1 && (I = $.length), $.slice(S, I)
						);
					}
					for (P = $.length - 1; P >= S; --P)
						if (p($.charCodeAt(P))) {
							if (!T) {
								S = P + 1;
								break;
							}
						} else I === -1 && ((T = !1), (I = P + 1));
					return I === -1 ? "" : $.slice(S, I);
				},
				extname($) {
					n($, "path");
					let v = 0,
						S = -1,
						I = 0,
						T = -1,
						P = !0,
						k = 0;
					$.length >= 2 &&
						$.charCodeAt(1) === u &&
						f($.charCodeAt(0)) &&
						(v = I = 2);
					for (let L = $.length - 1; L >= v; --L) {
						const D = $.charCodeAt(L);
						if (p(D)) {
							if (!P) {
								I = L + 1;
								break;
							}
							continue;
						}
						T === -1 && ((P = !1), (T = L + 1)),
							D === d
								? S === -1
									? (S = L)
									: k !== 1 && (k = 1)
								: S !== -1 && (k = -1);
					}
					return S === -1 ||
						T === -1 ||
						k === 0 ||
						(k === 1 && S === T - 1 && S === I + 1)
						? ""
						: $.slice(S, T);
				},
				format: l.bind(null, "\\"),
				parse($) {
					n($, "path");
					const v = { root: "", dir: "", base: "", ext: "", name: "" };
					if ($.length === 0) return v;
					const S = $.length;
					let I = 0,
						T = $.charCodeAt(0);
					if (S === 1)
						return p(T)
							? ((v.root = v.dir = $), v)
							: ((v.base = v.name = $), v);
					if (p(T)) {
						if (((I = 1), p($.charCodeAt(1)))) {
							let A = 2,
								R = A;
							for (; A < S && !p($.charCodeAt(A)); ) A++;
							if (A < S && A !== R) {
								for (R = A; A < S && p($.charCodeAt(A)); ) A++;
								if (A < S && A !== R) {
									for (R = A; A < S && !p($.charCodeAt(A)); ) A++;
									A === S ? (I = A) : A !== R && (I = A + 1);
								}
							}
						}
					} else if (f(T) && $.charCodeAt(1) === u) {
						if (S <= 2) return (v.root = v.dir = $), v;
						if (((I = 2), p($.charCodeAt(2)))) {
							if (S === 3) return (v.root = v.dir = $), v;
							I = 3;
						}
					}
					I > 0 && (v.root = $.slice(0, I));
					let P = -1,
						k = I,
						L = -1,
						D = !0,
						M = $.length - 1,
						N = 0;
					for (; M >= I; --M) {
						if (((T = $.charCodeAt(M)), p(T))) {
							if (!D) {
								k = M + 1;
								break;
							}
							continue;
						}
						L === -1 && ((D = !1), (L = M + 1)),
							T === d
								? P === -1
									? (P = M)
									: N !== 1 && (N = 1)
								: P !== -1 && (N = -1);
					}
					return (
						L !== -1 &&
							(P === -1 || N === 0 || (N === 1 && P === L - 1 && P === k + 1)
								? (v.base = v.name = $.slice(k, L))
								: ((v.name = $.slice(k, P)),
									(v.base = $.slice(k, L)),
									(v.ext = $.slice(P, L)))),
						k > 0 && k !== I ? (v.dir = $.slice(0, k - 1)) : (v.dir = v.root),
						v
					);
				},
				sep: "\\",
				delimiter: ";",
				win32: null,
				posix: null,
			};
			const y = (() => {
				if (g) {
					const $ = /\\/g;
					return () => {
						const v = t.cwd().replace($, "/");
						return v.slice(v.indexOf("/"));
					};
				}
				return () => t.cwd();
			})();
			(e.$lc = {
				resolve(...$) {
					let v = "",
						S = !1;
					for (let I = $.length - 1; I >= -1 && !S; I--) {
						const T = I >= 0 ? $[I] : y();
						n(T, `paths[${I}]`),
							T.length !== 0 &&
								((v = `${T}/${v}`), (S = T.charCodeAt(0) === m));
					}
					return (v = b(v, !S, "/", o)), S ? `/${v}` : v.length > 0 ? v : ".";
				},
				normalize($) {
					if ((n($, "path"), $.length === 0)) return ".";
					const v = $.charCodeAt(0) === m,
						S = $.charCodeAt($.length - 1) === m;
					return (
						($ = b($, !v, "/", o)),
						$.length === 0
							? v
								? "/"
								: S
									? "./"
									: "."
							: (S && ($ += "/"), v ? `/${$}` : $)
					);
				},
				isAbsolute($) {
					return n($, "path"), $.length > 0 && $.charCodeAt(0) === m;
				},
				join(...$) {
					if ($.length === 0) return ".";
					let v;
					for (let S = 0; S < $.length; ++S) {
						const I = $[S];
						n(I, "path"),
							I.length > 0 && (v === void 0 ? (v = I) : (v += `/${I}`));
					}
					return v === void 0 ? "." : e.$lc.normalize(v);
				},
				relative($, v) {
					if (
						(n($, "from"),
						n(v, "to"),
						$ === v ||
							(($ = e.$lc.resolve($)), (v = e.$lc.resolve(v)), $ === v))
					)
						return "";
					const S = 1,
						I = $.length,
						T = I - S,
						P = 1,
						k = v.length - P,
						L = T < k ? T : k;
					let D = -1,
						M = 0;
					for (; M < L; M++) {
						const A = $.charCodeAt(S + M);
						if (A !== v.charCodeAt(P + M)) break;
						A === m && (D = M);
					}
					if (M === L)
						if (k > L) {
							if (v.charCodeAt(P + M) === m) return v.slice(P + M + 1);
							if (M === 0) return v.slice(P + M);
						} else
							T > L &&
								($.charCodeAt(S + M) === m ? (D = M) : M === 0 && (D = 0));
					let N = "";
					for (M = S + D + 1; M <= I; ++M)
						(M === I || $.charCodeAt(M) === m) &&
							(N += N.length === 0 ? ".." : "/..");
					return `${N}${v.slice(P + D)}`;
				},
				toNamespacedPath($) {
					return $;
				},
				dirname($) {
					if ((n($, "path"), $.length === 0)) return ".";
					const v = $.charCodeAt(0) === m;
					let S = -1,
						I = !0;
					for (let T = $.length - 1; T >= 1; --T)
						if ($.charCodeAt(T) === m) {
							if (!I) {
								S = T;
								break;
							}
						} else I = !1;
					return S === -1
						? v
							? "/"
							: "."
						: v && S === 1
							? "//"
							: $.slice(0, S);
				},
				basename($, v) {
					v !== void 0 && n(v, "ext"), n($, "path");
					let S = 0,
						I = -1,
						T = !0,
						P;
					if (v !== void 0 && v.length > 0 && v.length <= $.length) {
						if (v === $) return "";
						let k = v.length - 1,
							L = -1;
						for (P = $.length - 1; P >= 0; --P) {
							const D = $.charCodeAt(P);
							if (D === m) {
								if (!T) {
									S = P + 1;
									break;
								}
							} else
								L === -1 && ((T = !1), (L = P + 1)),
									k >= 0 &&
										(D === v.charCodeAt(k)
											? --k === -1 && (I = P)
											: ((k = -1), (I = L)));
						}
						return (
							S === I ? (I = L) : I === -1 && (I = $.length), $.slice(S, I)
						);
					}
					for (P = $.length - 1; P >= 0; --P)
						if ($.charCodeAt(P) === m) {
							if (!T) {
								S = P + 1;
								break;
							}
						} else I === -1 && ((T = !1), (I = P + 1));
					return I === -1 ? "" : $.slice(S, I);
				},
				extname($) {
					n($, "path");
					let v = -1,
						S = 0,
						I = -1,
						T = !0,
						P = 0;
					for (let k = $.length - 1; k >= 0; --k) {
						const L = $.charCodeAt(k);
						if (L === m) {
							if (!T) {
								S = k + 1;
								break;
							}
							continue;
						}
						I === -1 && ((T = !1), (I = k + 1)),
							L === d
								? v === -1
									? (v = k)
									: P !== 1 && (P = 1)
								: v !== -1 && (P = -1);
					}
					return v === -1 ||
						I === -1 ||
						P === 0 ||
						(P === 1 && v === I - 1 && v === S + 1)
						? ""
						: $.slice(v, I);
				},
				format: l.bind(null, "/"),
				parse($) {
					n($, "path");
					const v = { root: "", dir: "", base: "", ext: "", name: "" };
					if ($.length === 0) return v;
					const S = $.charCodeAt(0) === m;
					let I;
					S ? ((v.root = "/"), (I = 1)) : (I = 0);
					let T = -1,
						P = 0,
						k = -1,
						L = !0,
						D = $.length - 1,
						M = 0;
					for (; D >= I; --D) {
						const N = $.charCodeAt(D);
						if (N === m) {
							if (!L) {
								P = D + 1;
								break;
							}
							continue;
						}
						k === -1 && ((L = !1), (k = D + 1)),
							N === d
								? T === -1
									? (T = D)
									: M !== 1 && (M = 1)
								: T !== -1 && (M = -1);
					}
					if (k !== -1) {
						const N = P === 0 && S ? 1 : P;
						T === -1 || M === 0 || (M === 1 && T === k - 1 && T === P + 1)
							? (v.base = v.name = $.slice(N, k))
							: ((v.name = $.slice(N, T)),
								(v.base = $.slice(N, k)),
								(v.ext = $.slice(T, k)));
					}
					return P > 0 ? (v.dir = $.slice(0, P - 1)) : S && (v.dir = "/"), v;
				},
				sep: "/",
				delimiter: ":",
				win32: null,
				posix: null,
			}),
				(e.$lc.win32 = e.$kc.win32 = e.$kc),
				(e.$lc.posix = e.$kc.posix = e.$lc),
				(e.$mc = g ? e.$kc.normalize : e.$lc.normalize),
				(e.$nc = g ? e.$kc.isAbsolute : e.$lc.isAbsolute),
				(e.$oc = g ? e.$kc.join : e.$lc.join),
				(e.$pc = g ? e.$kc.resolve : e.$lc.resolve),
				(e.$qc = g ? e.$kc.relative : e.$lc.relative),
				(e.$rc = g ? e.$kc.dirname : e.$lc.dirname),
				(e.$sc = g ? e.$kc.basename : e.$lc.basename),
				(e.$tc = g ? e.$kc.extname : e.$lc.extname),
				(e.$uc = g ? e.$kc.format : e.$lc.format),
				(e.$vc = g ? e.$kc.parse : e.$lc.parse),
				(e.$wc = g ? e.$kc.toNamespacedPath : e.$lc.toNamespacedPath),
				(e.sep = g ? e.$kc.sep : e.$lc.sep),
				(e.$yc = g ? e.$kc.delimiter : e.$lc.delimiter);
		})

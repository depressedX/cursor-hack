import '../../../require.js';
import '../../../exports.js';
define(de[529], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$4pb = e.$3pb = e.$2pb = void 0),
				(e.Ok = E),
				(e.Err = C);
			class t {
				constructor() {
					this.ok_ = !1;
				}
				ok() {
					return this.ok_;
				}
				context(m) {
					return this.ok_ ? this : C(`${m}: ${this.err}`);
				}
			}
			e.$2pb = t;
			class i extends t {
				constructor(m) {
					super(), (this.ok_ = !0), (this.v = m), (this.err = void 0);
				}
			}
			e.$3pb = i;
			class w extends t {
				constructor(m) {
					super(), (this.ok_ = !1), (this.err = m), (this.v = void 0);
				}
			}
			e.$4pb = w;
			function E(d) {
				return new i(d);
			}
			function C(d) {
				return new w(d);
			}
		}),
		(function (ce, e) {
			if (typeof exports == "object" && typeof module == "object")
				module.exports = e();
			else if (typeof define == "function" && define.amd)
				define("vs/base/common/semver/semver", [], e);
			else {
				var t = e();
				for (var i in t) (typeof exports == "object" ? exports : ce)[i] = t[i];
			}
		})(typeof self < "u" ? self : this, function () {
			return (function (ce) {
				var e = {};
				function t(i) {
					if (e[i]) return e[i].exports;
					var w = (e[i] = { i, l: !1, exports: {} });
					return ce[i].call(w.exports, w, w.exports, t), (w.l = !0), w.exports;
				}
				return (
					(t.m = ce),
					(t.c = e),
					(t.d = function (i, w, E) {
						t.o(i, w) ||
							Object.defineProperty(i, w, { enumerable: !0, get: E });
					}),
					(t.r = function (i) {
						typeof Symbol < "u" &&
							Symbol.toStringTag &&
							Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }),
							Object.defineProperty(i, "__esModule", { value: !0 });
					}),
					(t.t = function (i, w) {
						if (
							(1 & w && (i = t(i)),
							8 & w || (4 & w && typeof i == "object" && i && i.__esModule))
						)
							return i;
						var E = Object.create(null);
						if (
							(t.r(E),
							Object.defineProperty(E, "default", { enumerable: !0, value: i }),
							2 & w && typeof i != "string")
						)
							for (var C in i)
								t.d(
									E,
									C,
									function (d) {
										return i[d];
									}.bind(null, C),
								);
						return E;
					}),
					(t.n = function (i) {
						var w =
							i && i.__esModule
								? function () {
										return i.default;
									}
								: function () {
										return i;
									};
						return t.d(w, "a", w), w;
					}),
					(t.o = function (i, w) {
						return Object.prototype.hasOwnProperty.call(i, w);
					}),
					(t.p = ""),
					t((t.s = 0))
				);
			})([
				function (ce, e, t) {
					(function (i) {
						var w;
						(e = ce.exports = X),
							(w =
								typeof i == "object" &&
								i.env &&
								i.env.NODE_DEBUG &&
								/\bsemver\b/i.test(i.env.NODE_DEBUG)
									? function () {
											var me = Array.prototype.slice.call(arguments, 0);
											me.unshift("SEMVER"), console.log.apply(console, me);
										}
									: function () {}),
							(e.SEMVER_SPEC_VERSION = "2.0.0");
						var E = 256,
							C = Number.MAX_SAFE_INTEGER || 9007199254740991,
							d = (e.re = []),
							m = (e.src = []),
							r = 0,
							u = r++;
						m[u] = "0|[1-9]\\d*";
						var a = r++;
						m[a] = "[0-9]+";
						var h = r++;
						m[h] = "\\d*[a-zA-Z-][a-zA-Z0-9-]*";
						var c = r++;
						m[c] = "(" + m[u] + ")\\.(" + m[u] + ")\\.(" + m[u] + ")";
						var n = r++;
						m[n] = "(" + m[a] + ")\\.(" + m[a] + ")\\.(" + m[a] + ")";
						var g = r++;
						m[g] = "(?:" + m[u] + "|" + m[h] + ")";
						var p = r++;
						m[p] = "(?:" + m[a] + "|" + m[h] + ")";
						var o = r++;
						m[o] = "(?:-(" + m[g] + "(?:\\." + m[g] + ")*))";
						var f = r++;
						m[f] = "(?:-?(" + m[p] + "(?:\\." + m[p] + ")*))";
						var b = r++;
						m[b] = "[0-9A-Za-z-]+";
						var s = r++;
						m[s] = "(?:\\+(" + m[b] + "(?:\\." + m[b] + ")*))";
						var l = r++,
							y = "v?" + m[c] + m[o] + "?" + m[s] + "?";
						m[l] = "^" + y + "$";
						var $ = "[v=\\s]*" + m[n] + m[f] + "?" + m[s] + "?",
							v = r++;
						m[v] = "^" + $ + "$";
						var S = r++;
						m[S] = "((?:<|>)?=?)";
						var I = r++;
						m[I] = m[a] + "|x|X|\\*";
						var T = r++;
						m[T] = m[u] + "|x|X|\\*";
						var P = r++;
						m[P] =
							"[v=\\s]*(" +
							m[T] +
							")(?:\\.(" +
							m[T] +
							")(?:\\.(" +
							m[T] +
							")(?:" +
							m[o] +
							")?" +
							m[s] +
							"?)?)?";
						var k = r++;
						m[k] =
							"[v=\\s]*(" +
							m[I] +
							")(?:\\.(" +
							m[I] +
							")(?:\\.(" +
							m[I] +
							")(?:" +
							m[f] +
							")?" +
							m[s] +
							"?)?)?";
						var L = r++;
						m[L] = "^" + m[S] + "\\s*" + m[P] + "$";
						var D = r++;
						m[D] = "^" + m[S] + "\\s*" + m[k] + "$";
						var M = r++;
						m[M] =
							"(?:^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])";
						var N = r++;
						m[N] = "(?:~>?)";
						var A = r++;
						(m[A] = "(\\s*)" + m[N] + "\\s+"), (d[A] = new RegExp(m[A], "g"));
						var R = r++;
						m[R] = "^" + m[N] + m[P] + "$";
						var O = r++;
						m[O] = "^" + m[N] + m[k] + "$";
						var B = r++;
						m[B] = "(?:\\^)";
						var U = r++;
						(m[U] = "(\\s*)" + m[B] + "\\s+"), (d[U] = new RegExp(m[U], "g"));
						var z = r++;
						m[z] = "^" + m[B] + m[P] + "$";
						var F = r++;
						m[F] = "^" + m[B] + m[k] + "$";
						var x = r++;
						m[x] = "^" + m[S] + "\\s*(" + $ + ")$|^$";
						var H = r++;
						m[H] = "^" + m[S] + "\\s*(" + y + ")$|^$";
						var q = r++;
						(m[q] = "(\\s*)" + m[S] + "\\s*(" + $ + "|" + m[P] + ")"),
							(d[q] = new RegExp(m[q], "g"));
						var V = r++;
						m[V] = "^\\s*(" + m[P] + ")\\s+-\\s+(" + m[P] + ")\\s*$";
						var G = r++;
						m[G] = "^\\s*(" + m[k] + ")\\s+-\\s+(" + m[k] + ")\\s*$";
						var K = r++;
						m[K] = "(<|>)?=?\\s*\\*";
						for (var J = 0; J < 35; J++)
							w(J, m[J]), d[J] || (d[J] = new RegExp(m[J]));
						function W(me, ve) {
							if (me instanceof X) return me;
							if (
								typeof me != "string" ||
								me.length > E ||
								!(ve ? d[v] : d[l]).test(me)
							)
								return null;
							try {
								return new X(me, ve);
							} catch {
								return null;
							}
						}
						function X(me, ve) {
							if (me instanceof X) {
								if (me.loose === ve) return me;
								me = me.version;
							} else if (typeof me != "string")
								throw new TypeError("Invalid Version: " + me);
							if (me.length > E)
								throw new TypeError(
									"version is longer than " + E + " characters",
								);
							if (!(this instanceof X)) return new X(me, ve);
							w("SemVer", me, ve), (this.loose = ve);
							var ge = me.trim().match(ve ? d[v] : d[l]);
							if (!ge) throw new TypeError("Invalid Version: " + me);
							if (
								((this.raw = me),
								(this.major = +ge[1]),
								(this.minor = +ge[2]),
								(this.patch = +ge[3]),
								this.major > C || this.major < 0)
							)
								throw new TypeError("Invalid major version");
							if (this.minor > C || this.minor < 0)
								throw new TypeError("Invalid minor version");
							if (this.patch > C || this.patch < 0)
								throw new TypeError("Invalid patch version");
							ge[4]
								? (this.prerelease = ge[4].split(".").map(function (be) {
										if (/^[0-9]+$/.test(be)) {
											var Ce = +be;
											if (Ce >= 0 && Ce < C) return Ce;
										}
										return be;
									}))
								: (this.prerelease = []),
								(this.build = ge[5] ? ge[5].split(".") : []),
								this.format();
						}
						(e.parse = W),
							(e.valid = function (me, ve) {
								var ge = W(me, ve);
								return ge ? ge.version : null;
							}),
							(e.clean = function (me, ve) {
								var ge = W(me.trim().replace(/^[=v]+/, ""), ve);
								return ge ? ge.version : null;
							}),
							(e.SemVer = X),
							(X.prototype.format = function () {
								return (
									(this.version =
										this.major + "." + this.minor + "." + this.patch),
									this.prerelease.length &&
										(this.version += "-" + this.prerelease.join(".")),
									this.version
								);
							}),
							(X.prototype.toString = function () {
								return this.version;
							}),
							(X.prototype.compare = function (me) {
								return (
									w("SemVer.compare", this.version, this.loose, me),
									me instanceof X || (me = new X(me, this.loose)),
									this.compareMain(me) || this.comparePre(me)
								);
							}),
							(X.prototype.compareMain = function (me) {
								return (
									me instanceof X || (me = new X(me, this.loose)),
									ie(this.major, me.major) ||
										ie(this.minor, me.minor) ||
										ie(this.patch, me.patch)
								);
							}),
							(X.prototype.comparePre = function (me) {
								if (
									(me instanceof X || (me = new X(me, this.loose)),
									this.prerelease.length && !me.prerelease.length)
								)
									return -1;
								if (!this.prerelease.length && me.prerelease.length) return 1;
								if (!this.prerelease.length && !me.prerelease.length) return 0;
								var ve = 0;
								do {
									var ge = this.prerelease[ve],
										be = me.prerelease[ve];
									if (
										(w("prerelease compare", ve, ge, be),
										ge === void 0 && be === void 0)
									)
										return 0;
									if (be === void 0) return 1;
									if (ge === void 0) return -1;
									if (ge !== be) return ie(ge, be);
								} while (++ve);
							}),
							(X.prototype.inc = function (me, ve) {
								switch (me) {
									case "premajor":
										(this.prerelease.length = 0),
											(this.patch = 0),
											(this.minor = 0),
											this.major++,
											this.inc("pre", ve);
										break;
									case "preminor":
										(this.prerelease.length = 0),
											(this.patch = 0),
											this.minor++,
											this.inc("pre", ve);
										break;
									case "prepatch":
										(this.prerelease.length = 0),
											this.inc("patch", ve),
											this.inc("pre", ve);
										break;
									case "prerelease":
										this.prerelease.length === 0 && this.inc("patch", ve),
											this.inc("pre", ve);
										break;
									case "major":
										(this.minor === 0 &&
											this.patch === 0 &&
											this.prerelease.length !== 0) ||
											this.major++,
											(this.minor = 0),
											(this.patch = 0),
											(this.prerelease = []);
										break;
									case "minor":
										(this.patch === 0 && this.prerelease.length !== 0) ||
											this.minor++,
											(this.patch = 0),
											(this.prerelease = []);
										break;
									case "patch":
										this.prerelease.length === 0 && this.patch++,
											(this.prerelease = []);
										break;
									case "pre":
										if (this.prerelease.length === 0) this.prerelease = [0];
										else {
											for (var ge = this.prerelease.length; --ge >= 0; )
												typeof this.prerelease[ge] == "number" &&
													(this.prerelease[ge]++, (ge = -2));
											ge === -1 && this.prerelease.push(0);
										}
										ve &&
											(this.prerelease[0] === ve
												? isNaN(this.prerelease[1]) &&
													(this.prerelease = [ve, 0])
												: (this.prerelease = [ve, 0]));
										break;
									default:
										throw new Error("invalid increment argument: " + me);
								}
								return this.format(), (this.raw = this.version), this;
							}),
							(e.inc = function (me, ve, ge, be) {
								typeof ge == "string" && ((be = ge), (ge = void 0));
								try {
									return new X(me, ge).inc(ve, be).version;
								} catch {
									return null;
								}
							}),
							(e.diff = function (me, ve) {
								if (te(me, ve)) return null;
								var ge = W(me),
									be = W(ve);
								if (ge.prerelease.length || be.prerelease.length) {
									for (var Ce in ge)
										if (
											(Ce === "major" || Ce === "minor" || Ce === "patch") &&
											ge[Ce] !== be[Ce]
										)
											return "pre" + Ce;
									return "prerelease";
								}
								for (var Ce in ge)
									if (
										(Ce === "major" || Ce === "minor" || Ce === "patch") &&
										ge[Ce] !== be[Ce]
									)
										return Ce;
							}),
							(e.compareIdentifiers = ie);
						var Y = /^[0-9]+$/;
						function ie(me, ve) {
							var ge = Y.test(me),
								be = Y.test(ve);
							return (
								ge && be && ((me = +me), (ve = +ve)),
								ge && !be ? -1 : be && !ge ? 1 : me < ve ? -1 : me > ve ? 1 : 0
							);
						}
						function ne(me, ve, ge) {
							return new X(me, ge).compare(new X(ve, ge));
						}
						function ee(me, ve, ge) {
							return ne(me, ve, ge) > 0;
						}
						function _(me, ve, ge) {
							return ne(me, ve, ge) < 0;
						}
						function te(me, ve, ge) {
							return ne(me, ve, ge) === 0;
						}
						function Q(me, ve, ge) {
							return ne(me, ve, ge) !== 0;
						}
						function Z(me, ve, ge) {
							return ne(me, ve, ge) >= 0;
						}
						function se(me, ve, ge) {
							return ne(me, ve, ge) <= 0;
						}
						function re(me, ve, ge, be) {
							var Ce;
							switch (ve) {
								case "===":
									typeof me == "object" && (me = me.version),
										typeof ge == "object" && (ge = ge.version),
										(Ce = me === ge);
									break;
								case "!==":
									typeof me == "object" && (me = me.version),
										typeof ge == "object" && (ge = ge.version),
										(Ce = me !== ge);
									break;
								case "":
								case "=":
								case "==":
									Ce = te(me, ge, be);
									break;
								case "!=":
									Ce = Q(me, ge, be);
									break;
								case ">":
									Ce = ee(me, ge, be);
									break;
								case ">=":
									Ce = Z(me, ge, be);
									break;
								case "<":
									Ce = _(me, ge, be);
									break;
								case "<=":
									Ce = se(me, ge, be);
									break;
								default:
									throw new TypeError("Invalid operator: " + ve);
							}
							return Ce;
						}
						function le(me, ve) {
							if (me instanceof le) {
								if (me.loose === ve) return me;
								me = me.value;
							}
							if (!(this instanceof le)) return new le(me, ve);
							w("comparator", me, ve),
								(this.loose = ve),
								this.parse(me),
								this.semver === oe
									? (this.value = "")
									: (this.value = this.operator + this.semver.version),
								w("comp", this);
						}
						(e.rcompareIdentifiers = function (me, ve) {
							return ie(ve, me);
						}),
							(e.major = function (me, ve) {
								return new X(me, ve).major;
							}),
							(e.minor = function (me, ve) {
								return new X(me, ve).minor;
							}),
							(e.patch = function (me, ve) {
								return new X(me, ve).patch;
							}),
							(e.compare = ne),
							(e.compareLoose = function (me, ve) {
								return ne(me, ve, !0);
							}),
							(e.rcompare = function (me, ve, ge) {
								return ne(ve, me, ge);
							}),
							(e.sort = function (me, ve) {
								return me.sort(function (ge, be) {
									return e.compare(ge, be, ve);
								});
							}),
							(e.rsort = function (me, ve) {
								return me.sort(function (ge, be) {
									return e.rcompare(ge, be, ve);
								});
							}),
							(e.gt = ee),
							(e.lt = _),
							(e.eq = te),
							(e.neq = Q),
							(e.gte = Z),
							(e.lte = se),
							(e.cmp = re),
							(e.Comparator = le);
						var oe = {};
						function ae(me, ve) {
							if (me instanceof ae)
								return me.loose === ve ? me : new ae(me.raw, ve);
							if (me instanceof le) return new ae(me.value, ve);
							if (!(this instanceof ae)) return new ae(me, ve);
							if (
								((this.loose = ve),
								(this.raw = me),
								(this.set = me
									.split(/\s*\|\|\s*/)
									.map(function (ge) {
										return this.parseRange(ge.trim());
									}, this)
									.filter(function (ge) {
										return ge.length;
									})),
								!this.set.length)
							)
								throw new TypeError("Invalid SemVer Range: " + me);
							this.format();
						}
						function pe(me) {
							return !me || me.toLowerCase() === "x" || me === "*";
						}
						function $e(me, ve, ge, be, Ce, Le, Fe, Oe, xe, He, Ke, Je, Te) {
							return (
								(ve = pe(ge)
									? ""
									: pe(be)
										? ">=" + ge + ".0.0"
										: pe(Ce)
											? ">=" + ge + "." + be + ".0"
											: ">=" + ve) +
								" " +
								(Oe = pe(xe)
									? ""
									: pe(He)
										? "<" + (+xe + 1) + ".0.0"
										: pe(Ke)
											? "<" + xe + "." + (+He + 1) + ".0"
											: Je
												? "<=" + xe + "." + He + "." + Ke + "-" + Je
												: "<=" + Oe)
							).trim();
						}
						function ye(me, ve) {
							for (var ge = 0; ge < me.length; ge++)
								if (!me[ge].test(ve)) return !1;
							if (ve.prerelease.length) {
								for (ge = 0; ge < me.length; ge++)
									if (
										(w(me[ge].semver),
										me[ge].semver !== oe && me[ge].semver.prerelease.length > 0)
									) {
										var be = me[ge].semver;
										if (
											be.major === ve.major &&
											be.minor === ve.minor &&
											be.patch === ve.patch
										)
											return !0;
									}
								return !1;
							}
							return !0;
						}
						function ue(me, ve, ge) {
							try {
								ve = new ae(ve, ge);
							} catch {
								return !1;
							}
							return ve.test(me);
						}
						function fe(me, ve, ge, be) {
							var Ce, Le, Fe, Oe, xe;
							switch (((me = new X(me, be)), (ve = new ae(ve, be)), ge)) {
								case ">":
									(Ce = ee), (Le = se), (Fe = _), (Oe = ">"), (xe = ">=");
									break;
								case "<":
									(Ce = _), (Le = Z), (Fe = ee), (Oe = "<"), (xe = "<=");
									break;
								default:
									throw new TypeError('Must provide a hilo val of "<" or ">"');
							}
							if (ue(me, ve, be)) return !1;
							for (var He = 0; He < ve.set.length; ++He) {
								var Ke = ve.set[He],
									Je = null,
									Te = null;
								if (
									(Ke.forEach(function (Ee) {
										Ee.semver === oe && (Ee = new le(">=0.0.0")),
											(Je = Je || Ee),
											(Te = Te || Ee),
											Ce(Ee.semver, Je.semver, be)
												? (Je = Ee)
												: Fe(Ee.semver, Te.semver, be) && (Te = Ee);
									}),
									Je.operator === Oe ||
										Je.operator === xe ||
										((!Te.operator || Te.operator === Oe) &&
											Le(me, Te.semver)) ||
										(Te.operator === xe && Fe(me, Te.semver)))
								)
									return !1;
							}
							return !0;
						}
						(le.prototype.parse = function (me) {
							var ve = this.loose ? d[x] : d[H],
								ge = me.match(ve);
							if (!ge) throw new TypeError("Invalid comparator: " + me);
							(this.operator = ge[1]),
								this.operator === "=" && (this.operator = ""),
								ge[2]
									? (this.semver = new X(ge[2], this.loose))
									: (this.semver = oe);
						}),
							(le.prototype.toString = function () {
								return this.value;
							}),
							(le.prototype.test = function (me) {
								return (
									w("Comparator.test", me, this.loose),
									this.semver === oe ||
										(typeof me == "string" && (me = new X(me, this.loose)),
										re(me, this.operator, this.semver, this.loose))
								);
							}),
							(le.prototype.intersects = function (me, ve) {
								if (!(me instanceof le))
									throw new TypeError("a Comparator is required");
								var ge;
								if (this.operator === "")
									return (ge = new ae(me.value, ve)), ue(this.value, ge, ve);
								if (me.operator === "")
									return (ge = new ae(this.value, ve)), ue(me.semver, ge, ve);
								var be = !(
										(this.operator !== ">=" && this.operator !== ">") ||
										(me.operator !== ">=" && me.operator !== ">")
									),
									Ce = !(
										(this.operator !== "<=" && this.operator !== "<") ||
										(me.operator !== "<=" && me.operator !== "<")
									),
									Le = this.semver.version === me.semver.version,
									Fe = !(
										(this.operator !== ">=" && this.operator !== "<=") ||
										(me.operator !== ">=" && me.operator !== "<=")
									),
									Oe =
										re(this.semver, "<", me.semver, ve) &&
										(this.operator === ">=" || this.operator === ">") &&
										(me.operator === "<=" || me.operator === "<"),
									xe =
										re(this.semver, ">", me.semver, ve) &&
										(this.operator === "<=" || this.operator === "<") &&
										(me.operator === ">=" || me.operator === ">");
								return be || Ce || (Le && Fe) || Oe || xe;
							}),
							(e.Range = ae),
							(ae.prototype.format = function () {
								return (
									(this.range = this.set
										.map(function (me) {
											return me.join(" ").trim();
										})
										.join("||")
										.trim()),
									this.range
								);
							}),
							(ae.prototype.toString = function () {
								return this.range;
							}),
							(ae.prototype.parseRange = function (me) {
								var ve = this.loose;
								(me = me.trim()), w("range", me, ve);
								var ge = ve ? d[G] : d[V];
								(me = me.replace(ge, $e)),
									w("hyphen replace", me),
									(me = me.replace(d[q], "$1$2$3")),
									w("comparator trim", me, d[q]),
									(me = (me = (me = me.replace(d[A], "$1~")).replace(
										d[U],
										"$1^",
									))
										.split(/\s+/)
										.join(" "));
								var be = ve ? d[x] : d[H],
									Ce = me
										.split(" ")
										.map(function (Le) {
											return (function (Fe, Oe) {
												return (
													w("comp", Fe),
													(Fe = (function (xe, He) {
														return xe
															.trim()
															.split(/\s+/)
															.map(function (Ke) {
																return (function (Je, Te) {
																	w("caret", Je, Te);
																	var Ee = Te ? d[F] : d[z];
																	return Je.replace(
																		Ee,
																		function (Ie, Be, Se, ke, Ue) {
																			var qe;
																			return (
																				w("caret", Je, Ie, Be, Se, ke, Ue),
																				pe(Be)
																					? (qe = "")
																					: pe(Se)
																						? (qe =
																								">=" +
																								Be +
																								".0.0 <" +
																								(+Be + 1) +
																								".0.0")
																						: pe(ke)
																							? (qe =
																									Be === "0"
																										? ">=" +
																											Be +
																											"." +
																											Se +
																											".0 <" +
																											Be +
																											"." +
																											(+Se + 1) +
																											".0"
																										: ">=" +
																											Be +
																											"." +
																											Se +
																											".0 <" +
																											(+Be + 1) +
																											".0.0")
																							: Ue
																								? (w("replaceCaret pr", Ue),
																									Ue.charAt(0) !== "-" &&
																										(Ue = "-" + Ue),
																									(qe =
																										Be === "0"
																											? Se === "0"
																												? ">=" +
																													Be +
																													"." +
																													Se +
																													"." +
																													ke +
																													Ue +
																													" <" +
																													Be +
																													"." +
																													Se +
																													"." +
																													(+ke + 1)
																												: ">=" +
																													Be +
																													"." +
																													Se +
																													"." +
																													ke +
																													Ue +
																													" <" +
																													Be +
																													"." +
																													(+Se + 1) +
																													".0"
																											: ">=" +
																												Be +
																												"." +
																												Se +
																												"." +
																												ke +
																												Ue +
																												" <" +
																												(+Be + 1) +
																												".0.0"))
																								: (w("no pr"),
																									(qe =
																										Be === "0"
																											? Se === "0"
																												? ">=" +
																													Be +
																													"." +
																													Se +
																													"." +
																													ke +
																													" <" +
																													Be +
																													"." +
																													Se +
																													"." +
																													(+ke + 1)
																												: ">=" +
																													Be +
																													"." +
																													Se +
																													"." +
																													ke +
																													" <" +
																													Be +
																													"." +
																													(+Se + 1) +
																													".0"
																											: ">=" +
																												Be +
																												"." +
																												Se +
																												"." +
																												ke +
																												" <" +
																												(+Be + 1) +
																												".0.0")),
																				w("caret return", qe),
																				qe
																			);
																		},
																	);
																})(Ke, He);
															})
															.join(" ");
													})(Fe, Oe)),
													w("caret", Fe),
													(Fe = (function (xe, He) {
														return xe
															.trim()
															.split(/\s+/)
															.map(function (Ke) {
																return (function (Je, Te) {
																	var Ee = Te ? d[O] : d[R];
																	return Je.replace(
																		Ee,
																		function (Ie, Be, Se, ke, Ue) {
																			var qe;
																			return (
																				w("tilde", Je, Ie, Be, Se, ke, Ue),
																				pe(Be)
																					? (qe = "")
																					: pe(Se)
																						? (qe =
																								">=" +
																								Be +
																								".0.0 <" +
																								(+Be + 1) +
																								".0.0")
																						: pe(ke)
																							? (qe =
																									">=" +
																									Be +
																									"." +
																									Se +
																									".0 <" +
																									Be +
																									"." +
																									(+Se + 1) +
																									".0")
																							: Ue
																								? (w("replaceTilde pr", Ue),
																									Ue.charAt(0) !== "-" &&
																										(Ue = "-" + Ue),
																									(qe =
																										">=" +
																										Be +
																										"." +
																										Se +
																										"." +
																										ke +
																										Ue +
																										" <" +
																										Be +
																										"." +
																										(+Se + 1) +
																										".0"))
																								: (qe =
																										">=" +
																										Be +
																										"." +
																										Se +
																										"." +
																										ke +
																										" <" +
																										Be +
																										"." +
																										(+Se + 1) +
																										".0"),
																				w("tilde return", qe),
																				qe
																			);
																		},
																	);
																})(Ke, He);
															})
															.join(" ");
													})(Fe, Oe)),
													w("tildes", Fe),
													(Fe = (function (xe, He) {
														return (
															w("replaceXRanges", xe, He),
															xe
																.split(/\s+/)
																.map(function (Ke) {
																	return (function (Je, Te) {
																		Je = Je.trim();
																		var Ee = Te ? d[D] : d[L];
																		return Je.replace(
																			Ee,
																			function (Ie, Be, Se, ke, Ue, qe) {
																				w("xRange", Je, Ie, Be, Se, ke, Ue, qe);
																				var Ae = pe(Se),
																					Me = Ae || pe(ke),
																					De = Me || pe(Ue);
																				return (
																					Be === "=" && De && (Be = ""),
																					Ae
																						? (Ie =
																								Be === ">" || Be === "<"
																									? "<0.0.0"
																									: "*")
																						: Be && De
																							? (Me && (ke = 0),
																								De && (Ue = 0),
																								Be === ">"
																									? ((Be = ">="),
																										Me
																											? ((Se = +Se + 1),
																												(ke = 0),
																												(Ue = 0))
																											: De &&
																												((ke = +ke + 1),
																												(Ue = 0)))
																									: Be === "<=" &&
																										((Be = "<"),
																										Me
																											? (Se = +Se + 1)
																											: (ke = +ke + 1)),
																								(Ie =
																									Be +
																									Se +
																									"." +
																									ke +
																									"." +
																									Ue))
																							: Me
																								? (Ie =
																										">=" +
																										Se +
																										".0.0 <" +
																										(+Se + 1) +
																										".0.0")
																								: De &&
																									(Ie =
																										">=" +
																										Se +
																										"." +
																										ke +
																										".0 <" +
																										Se +
																										"." +
																										(+ke + 1) +
																										".0"),
																					w("xRange return", Ie),
																					Ie
																				);
																			},
																		);
																	})(Ke, He);
																})
																.join(" ")
														);
													})(Fe, Oe)),
													w("xrange", Fe),
													(Fe = (function (xe, He) {
														return (
															w("replaceStars", xe, He),
															xe.trim().replace(d[K], "")
														);
													})(Fe, Oe)),
													w("stars", Fe),
													Fe
												);
											})(Le, ve);
										})
										.join(" ")
										.split(/\s+/);
								return (
									this.loose &&
										(Ce = Ce.filter(function (Le) {
											return !!Le.match(be);
										})),
									(Ce = Ce.map(function (Le) {
										return new le(Le, ve);
									}))
								);
							}),
							(ae.prototype.intersects = function (me, ve) {
								if (!(me instanceof ae))
									throw new TypeError("a Range is required");
								return this.set.some(function (ge) {
									return ge.every(function (be) {
										return me.set.some(function (Ce) {
											return Ce.every(function (Le) {
												return be.intersects(Le, ve);
											});
										});
									});
								});
							}),
							(e.toComparators = function (me, ve) {
								return new ae(me, ve).set.map(function (ge) {
									return ge
										.map(function (be) {
											return be.value;
										})
										.join(" ")
										.trim()
										.split(" ");
								});
							}),
							(ae.prototype.test = function (me) {
								if (!me) return !1;
								typeof me == "string" && (me = new X(me, this.loose));
								for (var ve = 0; ve < this.set.length; ve++)
									if (ye(this.set[ve], me)) return !0;
								return !1;
							}),
							(e.satisfies = ue),
							(e.maxSatisfying = function (me, ve, ge) {
								var be = null,
									Ce = null;
								try {
									var Le = new ae(ve, ge);
								} catch {
									return null;
								}
								return (
									me.forEach(function (Fe) {
										Le.test(Fe) &&
											((be && Ce.compare(Fe) !== -1) ||
												(Ce = new X((be = Fe), ge)));
									}),
									be
								);
							}),
							(e.minSatisfying = function (me, ve, ge) {
								var be = null,
									Ce = null;
								try {
									var Le = new ae(ve, ge);
								} catch {
									return null;
								}
								return (
									me.forEach(function (Fe) {
										Le.test(Fe) &&
											((be && Ce.compare(Fe) !== 1) ||
												(Ce = new X((be = Fe), ge)));
									}),
									be
								);
							}),
							(e.validRange = function (me, ve) {
								try {
									return new ae(me, ve).range || "*";
								} catch {
									return null;
								}
							}),
							(e.ltr = function (me, ve, ge) {
								return fe(me, ve, "<", ge);
							}),
							(e.gtr = function (me, ve, ge) {
								return fe(me, ve, ">", ge);
							}),
							(e.outside = fe),
							(e.prerelease = function (me, ve) {
								var ge = W(me, ve);
								return ge && ge.prerelease.length ? ge.prerelease : null;
							}),
							(e.intersects = function (me, ve, ge) {
								return (
									(me = new ae(me, ge)),
									(ve = new ae(ve, ge)),
									me.intersects(ve)
								);
							}),
							(e.coerce = function (me) {
								if (me instanceof X) return me;
								if (typeof me != "string") return null;
								var ve = me.match(d[M]);
								return ve == null
									? null
									: W(
											(ve[1] || "0") +
												"." +
												(ve[2] || "0") +
												"." +
												(ve[3] || "0"),
										);
							});
					}).call(this, t(1));
				},
				function (ce, e) {
					var t,
						i,
						w = (ce.exports = {});
					function E() {
						throw new Error("setTimeout has not been defined");
					}
					function C() {
						throw new Error("clearTimeout has not been defined");
					}
					function d(p) {
						if (t === setTimeout) return setTimeout(p, 0);
						if ((t === E || !t) && setTimeout)
							return (t = setTimeout), setTimeout(p, 0);
						try {
							return t(p, 0);
						} catch {
							try {
								return t.call(null, p, 0);
							} catch {
								return t.call(this, p, 0);
							}
						}
					}
					(function () {
						try {
							t = typeof setTimeout == "function" ? setTimeout : E;
						} catch {
							t = E;
						}
						try {
							i = typeof clearTimeout == "function" ? clearTimeout : C;
						} catch {
							i = C;
						}
					})();
					var m,
						r = [],
						u = !1,
						a = -1;
					function h() {
						u &&
							m &&
							((u = !1),
							m.length ? (r = m.concat(r)) : (a = -1),
							r.length && c());
					}
					function c() {
						if (!u) {
							var p = d(h);
							u = !0;
							for (var o = r.length; o; ) {
								for (m = r, r = []; ++a < o; ) m && m[a].run();
								(a = -1), (o = r.length);
							}
							(m = null),
								(u = !1),
								(function (f) {
									if (i === clearTimeout) return clearTimeout(f);
									if ((i === C || !i) && clearTimeout)
										return (i = clearTimeout), clearTimeout(f);
									try {
										i(f);
									} catch {
										try {
											return i.call(null, f);
										} catch {
											return i.call(this, f);
										}
									}
								})(p);
						}
					}
					function n(p, o) {
						(this.fun = p), (this.array = o);
					}
					function g() {}
					(w.nextTick = function (p) {
						var o = new Array(arguments.length - 1);
						if (arguments.length > 1)
							for (var f = 1; f < arguments.length; f++)
								o[f - 1] = arguments[f];
						r.push(new n(p, o)), r.length !== 1 || u || d(c);
					}),
						(n.prototype.run = function () {
							this.fun.apply(null, this.array);
						}),
						(w.title = "browser"),
						(w.browser = !0),
						(w.env = {}),
						(w.argv = []),
						(w.version = ""),
						(w.versions = {}),
						(w.on = g),
						(w.addListener = g),
						(w.once = g),
						(w.off = g),
						(w.removeListener = g),
						(w.removeAllListeners = g),
						(w.emit = g),
						(w.prependListener = g),
						(w.prependOnceListener = g),
						(w.listeners = function (p) {
							return [];
						}),
						(w.binding = function (p) {
							throw new Error("process.binding is not supported");
						}),
						(w.cwd = function () {
							return "/";
						}),
						(w.chdir = function (p) {
							throw new Error("process.chdir is not supported");
						}),
						(w.umask = function () {
							return 0;
						});
				},
			]);
		})

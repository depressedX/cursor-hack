define(de[10], he([1, 0, 28, 9, 5]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ConfigurationTarget = e.$gj = void 0),
				(e.$hj = E),
				(e.$ij = C),
				(e.$jj = m),
				(e.$kj = r),
				(e.$lj = u),
				(e.$mj = a),
				(e.$nj = h),
				(e.$oj = n),
				(e.$pj = g),
				(e.$qj = p),
				(t = mt(t)),
				(e.$gj = (0, w.$Mi)("configurationService"));
			function E(o) {
				return (
					o &&
					typeof o == "object" &&
					(!o.overrideIdentifier || typeof o.overrideIdentifier == "string") &&
					(!o.resource || o.resource instanceof i.URI)
				);
			}
			function C(o) {
				return (
					o &&
					typeof o == "object" &&
					(!o.overrideIdentifiers || Array.isArray(o.overrideIdentifiers)) &&
					!o.overrideIdentifier &&
					(!o.resource || o.resource instanceof i.URI)
				);
			}
			var d;
			(function (o) {
				(o[(o.APPLICATION = 1)] = "APPLICATION"),
					(o[(o.USER = 2)] = "USER"),
					(o[(o.USER_LOCAL = 3)] = "USER_LOCAL"),
					(o[(o.USER_REMOTE = 4)] = "USER_REMOTE"),
					(o[(o.WORKSPACE = 5)] = "WORKSPACE"),
					(o[(o.WORKSPACE_FOLDER = 6)] = "WORKSPACE_FOLDER"),
					(o[(o.DEFAULT = 7)] = "DEFAULT"),
					(o[(o.MEMORY = 8)] = "MEMORY");
			})(d || (e.ConfigurationTarget = d = {}));
			function m(o) {
				switch (o) {
					case d.APPLICATION:
						return "APPLICATION";
					case d.USER:
						return "USER";
					case d.USER_LOCAL:
						return "USER_LOCAL";
					case d.USER_REMOTE:
						return "USER_REMOTE";
					case d.WORKSPACE:
						return "WORKSPACE";
					case d.WORKSPACE_FOLDER:
						return "WORKSPACE_FOLDER";
					case d.DEFAULT:
						return "DEFAULT";
					case d.MEMORY:
						return "MEMORY";
				}
			}
			function r(o) {
				return (
					o.applicationValue !== void 0 ||
					o.userValue !== void 0 ||
					o.userLocalValue !== void 0 ||
					o.userRemoteValue !== void 0 ||
					o.workspaceValue !== void 0 ||
					o.workspaceFolderValue !== void 0
				);
			}
			function u(o, f) {
				const b = Object.create(null);
				for (const s in o) a(b, s, o[s], f);
				return b;
			}
			function a(o, f, b, s) {
				const l = f.split("."),
					y = l.pop();
				let $ = o;
				for (let v = 0; v < l.length; v++) {
					const S = l[v];
					let I = $[S];
					switch (typeof I) {
						case "undefined":
							I = $[S] = Object.create(null);
							break;
						case "object":
							if (I === null) {
								s(`Ignoring ${f} as ${l.slice(0, v + 1).join(".")} is null`);
								return;
							}
							break;
						default:
							s(
								`Ignoring ${f} as ${l.slice(0, v + 1).join(".")} is ${JSON.stringify(I)}`,
							);
							return;
					}
					$ = I;
				}
				if (typeof $ == "object" && $ !== null)
					try {
						$[y] = b;
					} catch {
						s(`Ignoring ${f} as ${l.join(".")} is ${JSON.stringify($)}`);
					}
				else s(`Ignoring ${f} as ${l.join(".")} is ${JSON.stringify($)}`);
			}
			function h(o, f) {
				const b = f.split(".");
				c(o, b);
			}
			function c(o, f) {
				const b = f.shift();
				if (f.length === 0) {
					delete o[b];
					return;
				}
				if (Object.keys(o).indexOf(b) !== -1) {
					const s = o[b];
					typeof s == "object" &&
						!Array.isArray(s) &&
						(c(s, f), Object.keys(s).length === 0 && delete o[b]);
				}
			}
			function n(o, f, b) {
				function s($, v) {
					let S = $;
					for (const I of v) {
						if (typeof S != "object" || S === null) return;
						S = S[I];
					}
					return S;
				}
				const l = f.split("."),
					y = s(o, l);
				return typeof y > "u" ? b : y;
			}
			function g(o, f, b) {
				Object.keys(f).forEach((s) => {
					s !== "__proto__" &&
						(s in o
							? t.$ng(o[s]) && t.$ng(f[s])
								? g(o[s], f[s], b)
								: b && (o[s] = f[s])
							: (o[s] = f[s]));
				});
			}
			function p(o) {
				return o.replace(/[\[\]]/g, "");
			}
		}),
		define(
			de[2711],
			he([1, 0, 6, 3, 48, 61, 67, 10]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$SAc = void 0);
				let m = class extends i.$1c {
					constructor(u, a, h) {
						super(),
							(this.b = u),
							(this.c = a),
							(this.f = h),
							(this.a = this.D(new t.$re())),
							(this.onDidChangeConfiguration = this.a.event),
							this.D(
								this.b.onDidChangeConfiguration((c) => this.a.fire(this.m(c))),
							);
					}
					getValue(u, a, h) {
						return typeof h == "string"
							? this.h(u, w.$hL.isIPosition(a) ? a : null, h)
							: this.h(u, null, typeof a == "string" ? a : void 0);
					}
					updateValue(u, a, h, c) {
						const n = this.j(u, null),
							g = this.b.inspect(a, { resource: u, overrideIdentifier: n });
						c === void 0 && (c = this.g(g, n));
						const p = n && g.overrideIdentifiers?.includes(n) ? n : void 0;
						return this.b.updateValue(
							a,
							h,
							{ resource: u, overrideIdentifier: p },
							c,
						);
					}
					g(u, a) {
						if (a) {
							if (u.memory?.override !== void 0)
								return d.ConfigurationTarget.MEMORY;
							if (u.workspaceFolder?.override !== void 0)
								return d.ConfigurationTarget.WORKSPACE_FOLDER;
							if (u.workspace?.override !== void 0)
								return d.ConfigurationTarget.WORKSPACE;
							if (u.userRemote?.override !== void 0)
								return d.ConfigurationTarget.USER_REMOTE;
							if (u.userLocal?.override !== void 0)
								return d.ConfigurationTarget.USER_LOCAL;
						}
						return u.memory?.value !== void 0
							? d.ConfigurationTarget.MEMORY
							: u.workspaceFolder?.value !== void 0
								? d.ConfigurationTarget.WORKSPACE_FOLDER
								: u.workspace?.value !== void 0
									? d.ConfigurationTarget.WORKSPACE
									: u.userRemote?.value !== void 0
										? d.ConfigurationTarget.USER_REMOTE
										: d.ConfigurationTarget.USER_LOCAL;
					}
					h(u, a, h) {
						const c = u ? this.j(u, a) : void 0;
						return typeof h > "u"
							? this.b.getValue({ resource: u, overrideIdentifier: c })
							: this.b.getValue(h, { resource: u, overrideIdentifier: c });
					}
					inspect(u, a, h) {
						const c = u ? this.j(u, a) : void 0;
						return this.b.inspect(h, { resource: u, overrideIdentifier: c });
					}
					j(u, a) {
						const h = this.c.getModel(u);
						return h
							? a
								? h.getLanguageIdAtPosition(a.lineNumber, a.column)
								: h.getLanguageId()
							: this.f.guessLanguageIdByFilepathOrFirstLine(u);
					}
					m(u) {
						return {
							affectedKeys: u.affectedKeys,
							affectsConfiguration: (a, h) => {
								const c = a ? this.j(a, null) : void 0;
								return u.affectsConfiguration(h, {
									resource: a,
									overrideIdentifier: c,
								});
							},
						};
					}
				};
				(e.$SAc = m),
					(e.$SAc = m = Ne([j(0, d.$gj), j(1, C.$QO), j(2, E.$nM)], m));
			},
		),
		define(
			de[1603],
			he([1, 0, 33, 29, 9, 17, 67, 31, 69, 1599, 10]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$VBb = a),
					(e.$WBb = h);
				async function a(f, b, s, l = !0) {
					return p(new c(), f, b, s, l);
				}
				function h(f, b, s, l) {
					return Promise.resolve(s.provideColorPresentations(f, b, l));
				}
				class c {
					constructor() {}
					async compute(b, s, l, y) {
						const $ = await b.provideDocumentColors(s, l);
						if (Array.isArray($))
							for (const v of $) y.push({ colorInfo: v, provider: b });
						return Array.isArray($);
					}
				}
				class n {
					constructor() {}
					async compute(b, s, l, y) {
						const $ = await b.provideDocumentColors(s, l);
						if (Array.isArray($))
							for (const v of $)
								y.push({
									range: v.range,
									color: [
										v.color.red,
										v.color.green,
										v.color.blue,
										v.color.alpha,
									],
								});
						return Array.isArray($);
					}
				}
				class g {
					constructor(b) {
						this.a = b;
					}
					async compute(b, s, l, y) {
						const $ = await b.provideColorPresentations(
							s,
							this.a,
							t.CancellationToken.None,
						);
						return Array.isArray($) && y.push(...$), Array.isArray($);
					}
				}
				async function p(f, b, s, l, y) {
					let $ = !1,
						v;
					const S = [],
						I = b.ordered(s);
					for (let T = I.length - 1; T >= 0; T--) {
						const P = I[T];
						if (P instanceof r.$UBb) v = P;
						else
							try {
								(await f.compute(P, s, l, S)) && ($ = !0);
							} catch (k) {
								(0, i.$5)(k);
							}
					}
					return $ ? S : v && y ? (await f.compute(v, s, l, S), S) : [];
				}
				function o(f, b) {
					const { colorProvider: s } = f.get(m.$k3),
						l = f.get(C.$QO).getModel(b);
					if (!l) throw (0, i.$$)();
					const y = f
						.get(u.$gj)
						.getValue("editor.defaultColorDecorators", { resource: b });
					return {
						model: l,
						colorProviderRegistry: s,
						isDefaultColorDecoratorsEnabled: y,
					};
				}
				d.$fk.registerCommand(
					"_executeDocumentColorProvider",
					function (f, ...b) {
						const [s] = b;
						if (!(s instanceof w.URI)) throw (0, i.$$)();
						const {
							model: l,
							colorProviderRegistry: y,
							isDefaultColorDecoratorsEnabled: $,
						} = o(f, s);
						return p(new n(), y, l, t.CancellationToken.None, $);
					},
				),
					d.$fk.registerCommand(
						"_executeColorPresentationProvider",
						function (f, ...b) {
							const [s, l] = b,
								{ uri: y, range: $ } = l;
							if (
								!(y instanceof w.URI) ||
								!Array.isArray(s) ||
								s.length !== 4 ||
								!E.$iL.isIRange($)
							)
								throw (0, i.$$)();
							const {
									model: v,
									colorProviderRegistry: S,
									isDefaultColorDecoratorsEnabled: I,
								} = o(f, y),
								[T, P, k, L] = s;
							return p(
								new g({
									range: $,
									color: { red: T, green: P, blue: k, alpha: L },
								}),
								S,
								v,
								t.CancellationToken.None,
								I,
							);
						},
					);
			},
		),
		define(
			de[8],
			he([1, 0, 120, 12, 37, 2704, 5, 4, 29]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6j =
						e.$5j =
						e.$4j =
						e.$3j =
						e.$2j =
						e.$1j =
						e.$Zj =
						e.$Yj =
						e.$Xj =
						e.$Wj =
						e.$Vj =
						e.$Uj =
						e.$Tj =
						e.$Sj =
						e.$Rj =
						e.$Qj =
						e.$Pj =
						e.$Oj =
						e.$Nj =
						e.$Kj =
						e.$Jj =
						e.ContextKeyExprType =
							void 0),
					(e.$Ij = u),
					(e.$Lj = v),
					(e.$Mj = S),
					(e.$7j = X);
				const r = new Map();
				r.set("false", !1),
					r.set("true", !0),
					r.set("isMac", i.$m),
					r.set("isLinux", i.$n),
					r.set("isWindows", i.$l),
					r.set("isWeb", i.$r),
					r.set("isMacNative", i.$m && !i.$r),
					r.set("isEdge", i.$K),
					r.set("isFirefox", i.$I),
					r.set("isChrome", i.$H),
					r.set("isSafari", i.$J);
				function u(ne, ee) {
					if (r.get(ne) !== void 0)
						throw (0, m.$$)(
							"contextkey.setConstant(k, v) invoked with already set constant `k`",
						);
					r.set(ne, ee);
				}
				const a = Object.prototype.hasOwnProperty;
				var h;
				(function (ne) {
					(ne[(ne.False = 0)] = "False"),
						(ne[(ne.True = 1)] = "True"),
						(ne[(ne.Defined = 2)] = "Defined"),
						(ne[(ne.Not = 3)] = "Not"),
						(ne[(ne.Equals = 4)] = "Equals"),
						(ne[(ne.NotEquals = 5)] = "NotEquals"),
						(ne[(ne.And = 6)] = "And"),
						(ne[(ne.Regex = 7)] = "Regex"),
						(ne[(ne.NotRegex = 8)] = "NotRegex"),
						(ne[(ne.Or = 9)] = "Or"),
						(ne[(ne.In = 10)] = "In"),
						(ne[(ne.NotIn = 11)] = "NotIn"),
						(ne[(ne.Greater = 12)] = "Greater"),
						(ne[(ne.GreaterEquals = 13)] = "GreaterEquals"),
						(ne[(ne.Smaller = 14)] = "Smaller"),
						(ne[(ne.SmallerEquals = 15)] = "SmallerEquals"),
						(ne[(ne.Function = 16)] = "Function");
				})(h || (e.ContextKeyExprType = h = {}));
				const c = { regexParsingWithErrorRecovery: !0 },
					n = (0, d.localize)(1685, null),
					g = (0, d.localize)(1686, null),
					p = (0, d.localize)(1687, null),
					o = (0, d.localize)(1688, null),
					f = (0, d.localize)(1689, null),
					b = (0, d.localize)(1690, null),
					s = (0, d.localize)(1691, null),
					l = (0, d.localize)(1692, null);
				class y {
					static {
						this.c = new Error();
					}
					get lexingErrors() {
						return this.d.errors;
					}
					get parsingErrors() {
						return this.h;
					}
					constructor(ee = c) {
						(this.k = ee),
							(this.d = new E.$Hj()),
							(this.f = []),
							(this.g = 0),
							(this.h = []),
							(this.v = /g|y/g);
					}
					parse(ee) {
						if (ee === "") {
							this.h.push({
								message: n,
								offset: 0,
								lexeme: "",
								additionalInfo: g,
							});
							return;
						}
						(this.f = this.d.reset(ee).scan()), (this.g = 0), (this.h = []);
						try {
							const _ = this.l();
							if (!this.E()) {
								const te = this.D(),
									Q = te.type === E.TokenType.Str ? b : void 0;
								throw (
									(this.h.push({
										message: f,
										offset: te.offset,
										lexeme: E.$Hj.getLexeme(te),
										additionalInfo: Q,
									}),
									y.c)
								);
							}
							return _;
						} catch (_) {
							if (_ !== y.c) throw _;
							return;
						}
					}
					l() {
						return this.m();
					}
					m() {
						const ee = [this.o()];
						for (; this.y(E.TokenType.Or); ) {
							const _ = this.o();
							ee.push(_);
						}
						return ee.length === 1 ? ee[0] : $.or(...ee);
					}
					o() {
						const ee = [this.s()];
						for (; this.y(E.TokenType.And); ) {
							const _ = this.s();
							ee.push(_);
						}
						return ee.length === 1 ? ee[0] : $.and(...ee);
					}
					s() {
						if (this.y(E.TokenType.Neg)) {
							const ee = this.D();
							switch (ee.type) {
								case E.TokenType.True:
									return this.z(), P.INSTANCE;
								case E.TokenType.False:
									return this.z(), k.INSTANCE;
								case E.TokenType.LParen: {
									this.z();
									const _ = this.l();
									return this.A(E.TokenType.RParen, o), _?.negate();
								}
								case E.TokenType.Str:
									return this.z(), R.create(ee.lexeme);
								default:
									throw this.B("KEY | true | false | '(' expression ')'", ee);
							}
						}
						return this.t();
					}
					t() {
						const ee = this.D();
						switch (ee.type) {
							case E.TokenType.True:
								return this.z(), $.true();
							case E.TokenType.False:
								return this.z(), $.false();
							case E.TokenType.LParen: {
								this.z();
								const _ = this.l();
								return this.A(E.TokenType.RParen, o), _;
							}
							case E.TokenType.Str: {
								const _ = ee.lexeme;
								if ((this.z(), this.y(E.TokenType.RegexOp))) {
									const Q = this.D();
									if (!this.k.regexParsingWithErrorRecovery) {
										if ((this.z(), Q.type !== E.TokenType.RegexStr))
											throw this.B("REGEX", Q);
										const Z = Q.lexeme,
											se = Z.lastIndexOf("/"),
											re =
												se === Z.length - 1
													? void 0
													: this.w(Z.substring(se + 1));
										let le;
										try {
											le = new RegExp(Z.substring(1, se), re);
										} catch {
											throw this.B("REGEX", Q);
										}
										return x.create(_, le);
									}
									switch (Q.type) {
										case E.TokenType.RegexStr:
										case E.TokenType.Error: {
											const Z = [Q.lexeme];
											this.z();
											let se = this.D(),
												re = 0;
											for (let $e = 0; $e < Q.lexeme.length; $e++)
												Q.lexeme.charCodeAt($e) === t.CharCode.OpenParen
													? re++
													: Q.lexeme.charCodeAt($e) === t.CharCode.CloseParen &&
														re--;
											for (
												;
												!this.E() &&
												se.type !== E.TokenType.And &&
												se.type !== E.TokenType.Or;
											) {
												switch (se.type) {
													case E.TokenType.LParen:
														re++;
														break;
													case E.TokenType.RParen:
														re--;
														break;
													case E.TokenType.RegexStr:
													case E.TokenType.QuotedStr:
														for (let $e = 0; $e < se.lexeme.length; $e++)
															se.lexeme.charCodeAt($e) === t.CharCode.OpenParen
																? re++
																: Q.lexeme.charCodeAt($e) ===
																		t.CharCode.CloseParen && re--;
												}
												if (re < 0) break;
												Z.push(E.$Hj.getLexeme(se)), this.z(), (se = this.D());
											}
											const le = Z.join(""),
												oe = le.lastIndexOf("/"),
												ae =
													oe === le.length - 1
														? void 0
														: this.w(le.substring(oe + 1));
											let pe;
											try {
												pe = new RegExp(le.substring(1, oe), ae);
											} catch {
												throw this.B("REGEX", Q);
											}
											return $.regex(_, pe);
										}
										case E.TokenType.QuotedStr: {
											const Z = Q.lexeme;
											this.z();
											let se = null;
											if (!(0, w.$jf)(Z)) {
												const re = Z.indexOf("/"),
													le = Z.lastIndexOf("/");
												if (re !== le && re >= 0) {
													const oe = Z.slice(re + 1, le),
														ae = Z[le + 1] === "i" ? "i" : "";
													try {
														se = new RegExp(oe, ae);
													} catch {
														throw this.B("REGEX", Q);
													}
												}
											}
											if (se === null) throw this.B("REGEX", Q);
											return x.create(_, se);
										}
										default:
											throw this.B("REGEX", this.D());
									}
								}
								if (this.y(E.TokenType.Not)) {
									this.A(E.TokenType.In, p);
									const Q = this.u();
									return $.notIn(_, Q);
								}
								switch (this.D().type) {
									case E.TokenType.Eq: {
										this.z();
										const Q = this.u();
										if (this.x().type === E.TokenType.QuotedStr)
											return $.equals(_, Q);
										switch (Q) {
											case "true":
												return $.has(_);
											case "false":
												return $.not(_);
											default:
												return $.equals(_, Q);
										}
									}
									case E.TokenType.NotEq: {
										this.z();
										const Q = this.u();
										if (this.x().type === E.TokenType.QuotedStr)
											return $.notEquals(_, Q);
										switch (Q) {
											case "true":
												return $.not(_);
											case "false":
												return $.has(_);
											default:
												return $.notEquals(_, Q);
										}
									}
									case E.TokenType.Lt:
										return this.z(), z.create(_, this.u());
									case E.TokenType.LtEq:
										return this.z(), F.create(_, this.u());
									case E.TokenType.Gt:
										return this.z(), B.create(_, this.u());
									case E.TokenType.GtEq:
										return this.z(), U.create(_, this.u());
									case E.TokenType.In:
										return this.z(), $.in(_, this.u());
									default:
										return $.has(_);
								}
							}
							case E.TokenType.EOF:
								throw (
									(this.h.push({
										message: s,
										offset: ee.offset,
										lexeme: "",
										additionalInfo: l,
									}),
									y.c)
								);
							default:
								throw this.B(
									`true | false | KEY 
	| KEY '=~' REGEX 
	| KEY ('==' | '!=' | '<' | '<=' | '>' | '>=' | 'in' | 'not' 'in') value`,
									this.D(),
								);
						}
					}
					u() {
						const ee = this.D();
						switch (ee.type) {
							case E.TokenType.Str:
							case E.TokenType.QuotedStr:
								return this.z(), ee.lexeme;
							case E.TokenType.True:
								return this.z(), "true";
							case E.TokenType.False:
								return this.z(), "false";
							case E.TokenType.In:
								return this.z(), "in";
							default:
								return "";
						}
					}
					w(ee) {
						return ee.replaceAll(this.v, "");
					}
					x() {
						return this.f[this.g - 1];
					}
					y(ee) {
						return this.C(ee) ? (this.z(), !0) : !1;
					}
					z() {
						return this.E() || this.g++, this.x();
					}
					A(ee, _) {
						if (this.C(ee)) return this.z();
						throw this.B(_, this.D());
					}
					B(ee, _, te) {
						const Q = (0, d.localize)(1693, null, ee, E.$Hj.getLexeme(_)),
							Z = _.offset,
							se = E.$Hj.getLexeme(_);
						return (
							this.h.push({
								message: Q,
								offset: Z,
								lexeme: se,
								additionalInfo: te,
							}),
							y.c
						);
					}
					C(ee) {
						return this.D().type === ee;
					}
					D() {
						return this.f[this.g];
					}
					E() {
						return this.D().type === E.TokenType.EOF;
					}
				}
				e.$Jj = y;
				class $ {
					static false() {
						return P.INSTANCE;
					}
					static true() {
						return k.INSTANCE;
					}
					static has(ee) {
						return L.create(ee);
					}
					static equals(ee, _) {
						return D.create(ee, _);
					}
					static notEquals(ee, _) {
						return A.create(ee, _);
					}
					static regex(ee, _) {
						return x.create(ee, _);
					}
					static in(ee, _) {
						return M.create(ee, _);
					}
					static notIn(ee, _) {
						return N.create(ee, _);
					}
					static not(ee) {
						return R.create(ee);
					}
					static and(...ee) {
						return V.create(ee, null, !0);
					}
					static or(...ee) {
						return G.create(ee, null, !0);
					}
					static greater(ee, _) {
						return B.create(ee, _);
					}
					static greaterEquals(ee, _) {
						return U.create(ee, _);
					}
					static smaller(ee, _) {
						return z.create(ee, _);
					}
					static smallerEquals(ee, _) {
						return F.create(ee, _);
					}
					static function(ee) {
						return T.create(ee);
					}
					static {
						this.c = new y({ regexParsingWithErrorRecovery: !1 });
					}
					static deserialize(ee) {
						return ee == null ? void 0 : this.c.parse(ee);
					}
				}
				e.$Kj = $;
				function v(ne) {
					const ee = new y({ regexParsingWithErrorRecovery: !1 });
					return ne.map(
						(_) => (
							ee.parse(_),
							ee.lexingErrors.length > 0
								? ee.lexingErrors.map((te) => ({
										errorMessage: te.additionalInfo
											? (0, d.localize)(1694, null, te.additionalInfo)
											: (0, d.localize)(1695, null),
										offset: te.offset,
										length: te.lexeme.length,
									}))
								: ee.parsingErrors.length > 0
									? ee.parsingErrors.map((te) => ({
											errorMessage: te.additionalInfo
												? `${te.message}. ${te.additionalInfo}`
												: te.message,
											offset: te.offset,
											length: te.lexeme.length,
										}))
									: []
						),
					);
				}
				function S(ne, ee) {
					const _ = ne ? ne.substituteConstants() : void 0,
						te = ee ? ee.substituteConstants() : void 0;
					return !_ && !te ? !0 : !_ || !te ? !1 : _.equals(te);
				}
				function I(ne, ee) {
					return ne.cmp(ee);
				}
				class T {
					static create(ee) {
						return new T(ee);
					}
					constructor(ee) {
						(this.type = h.Function), (this.c = ee);
					}
					cmp(ee) {
						return this.type - ee.type;
					}
					equals(ee) {
						return ee.type === this.type && ee.c === this.c;
					}
					substituteConstants() {
						return this;
					}
					evaluate(ee) {
						return this.c();
					}
					serialize() {
						return "(arbitrary function)";
					}
					keys() {
						return [];
					}
					map(ee) {
						return this;
					}
					negate() {
						return new T(() => !this.c());
					}
				}
				e.$Nj = T;
				class P {
					static {
						this.INSTANCE = new P();
					}
					constructor() {
						this.type = h.False;
					}
					cmp(ee) {
						return this.type - ee.type;
					}
					equals(ee) {
						return ee.type === this.type;
					}
					substituteConstants() {
						return this;
					}
					evaluate(ee) {
						return !1;
					}
					serialize() {
						return "false";
					}
					keys() {
						return [];
					}
					map(ee) {
						return this;
					}
					negate() {
						return k.INSTANCE;
					}
				}
				e.$Oj = P;
				class k {
					static {
						this.INSTANCE = new k();
					}
					constructor() {
						this.type = h.True;
					}
					cmp(ee) {
						return this.type - ee.type;
					}
					equals(ee) {
						return ee.type === this.type;
					}
					substituteConstants() {
						return this;
					}
					evaluate(ee) {
						return !0;
					}
					serialize() {
						return "true";
					}
					keys() {
						return [];
					}
					map(ee) {
						return this;
					}
					negate() {
						return P.INSTANCE;
					}
				}
				e.$Pj = k;
				class L {
					static create(ee, _ = null) {
						const te = r.get(ee);
						return typeof te == "boolean"
							? te
								? k.INSTANCE
								: P.INSTANCE
							: new L(ee, _);
					}
					constructor(ee, _) {
						(this.key = ee), (this.c = _), (this.type = h.Defined);
					}
					cmp(ee) {
						return ee.type !== this.type
							? this.type - ee.type
							: J(this.key, ee.key);
					}
					equals(ee) {
						return ee.type === this.type ? this.key === ee.key : !1;
					}
					substituteConstants() {
						const ee = r.get(this.key);
						return typeof ee == "boolean"
							? ee
								? k.INSTANCE
								: P.INSTANCE
							: this;
					}
					evaluate(ee) {
						return !!ee.getValue(this.key);
					}
					serialize() {
						return this.key;
					}
					keys() {
						return [this.key];
					}
					map(ee) {
						return ee.mapDefined(this.key);
					}
					negate() {
						return this.c || (this.c = R.create(this.key, this)), this.c;
					}
				}
				e.$Qj = L;
				class D {
					static create(ee, _, te = null) {
						if (typeof _ == "boolean")
							return _ ? L.create(ee, te) : R.create(ee, te);
						const Q = r.get(ee);
						return typeof Q == "boolean"
							? _ === (Q ? "true" : "false")
								? k.INSTANCE
								: P.INSTANCE
							: new D(ee, _, te);
					}
					constructor(ee, _, te) {
						(this.c = ee), (this.d = _), (this.f = te), (this.type = h.Equals);
					}
					cmp(ee) {
						return ee.type !== this.type
							? this.type - ee.type
							: W(this.c, this.d, ee.c, ee.d);
					}
					equals(ee) {
						return ee.type === this.type
							? this.c === ee.c && this.d === ee.d
							: !1;
					}
					substituteConstants() {
						const ee = r.get(this.c);
						if (typeof ee == "boolean") {
							const _ = ee ? "true" : "false";
							return this.d === _ ? k.INSTANCE : P.INSTANCE;
						}
						return this;
					}
					evaluate(ee) {
						return ee.getValue(this.c) == this.d;
					}
					serialize() {
						return `${this.c} == '${this.d}'`;
					}
					keys() {
						return [this.c];
					}
					map(ee) {
						return ee.mapEquals(this.c, this.d);
					}
					negate() {
						return this.f || (this.f = A.create(this.c, this.d, this)), this.f;
					}
				}
				e.$Rj = D;
				class M {
					static create(ee, _) {
						return new M(ee, _);
					}
					constructor(ee, _) {
						(this.d = ee), (this.f = _), (this.type = h.In), (this.c = null);
					}
					cmp(ee) {
						return ee.type !== this.type
							? this.type - ee.type
							: W(this.d, this.f, ee.d, ee.f);
					}
					equals(ee) {
						return ee.type === this.type
							? this.d === ee.d && this.f === ee.f
							: !1;
					}
					substituteConstants() {
						return this;
					}
					evaluate(ee) {
						const _ = ee.getValue(this.f),
							te = ee.getValue(this.d);
						return Array.isArray(_)
							? _.includes(te)
							: typeof te == "string" && typeof _ == "object" && _ !== null
								? a.call(_, te)
								: !1;
					}
					serialize() {
						return `${this.d} in '${this.f}'`;
					}
					keys() {
						return [this.d, this.f];
					}
					map(ee) {
						return ee.mapIn(this.d, this.f);
					}
					negate() {
						return this.c || (this.c = N.create(this.d, this.f)), this.c;
					}
				}
				e.$Sj = M;
				class N {
					static create(ee, _) {
						return new N(ee, _);
					}
					constructor(ee, _) {
						(this.d = ee),
							(this.f = _),
							(this.type = h.NotIn),
							(this.c = M.create(ee, _));
					}
					cmp(ee) {
						return ee.type !== this.type
							? this.type - ee.type
							: this.c.cmp(ee.c);
					}
					equals(ee) {
						return ee.type === this.type ? this.c.equals(ee.c) : !1;
					}
					substituteConstants() {
						return this;
					}
					evaluate(ee) {
						return !this.c.evaluate(ee);
					}
					serialize() {
						return `${this.d} not in '${this.f}'`;
					}
					keys() {
						return this.c.keys();
					}
					map(ee) {
						return ee.mapNotIn(this.d, this.f);
					}
					negate() {
						return this.c;
					}
				}
				e.$Tj = N;
				class A {
					static create(ee, _, te = null) {
						if (typeof _ == "boolean")
							return _ ? R.create(ee, te) : L.create(ee, te);
						const Q = r.get(ee);
						return typeof Q == "boolean"
							? _ === (Q ? "true" : "false")
								? P.INSTANCE
								: k.INSTANCE
							: new A(ee, _, te);
					}
					constructor(ee, _, te) {
						(this.c = ee),
							(this.d = _),
							(this.f = te),
							(this.type = h.NotEquals);
					}
					cmp(ee) {
						return ee.type !== this.type
							? this.type - ee.type
							: W(this.c, this.d, ee.c, ee.d);
					}
					equals(ee) {
						return ee.type === this.type
							? this.c === ee.c && this.d === ee.d
							: !1;
					}
					substituteConstants() {
						const ee = r.get(this.c);
						if (typeof ee == "boolean") {
							const _ = ee ? "true" : "false";
							return this.d === _ ? P.INSTANCE : k.INSTANCE;
						}
						return this;
					}
					evaluate(ee) {
						return ee.getValue(this.c) != this.d;
					}
					serialize() {
						return `${this.c} != '${this.d}'`;
					}
					keys() {
						return [this.c];
					}
					map(ee) {
						return ee.mapNotEquals(this.c, this.d);
					}
					negate() {
						return this.f || (this.f = D.create(this.c, this.d, this)), this.f;
					}
				}
				e.$Uj = A;
				class R {
					static create(ee, _ = null) {
						const te = r.get(ee);
						return typeof te == "boolean"
							? te
								? P.INSTANCE
								: k.INSTANCE
							: new R(ee, _);
					}
					constructor(ee, _) {
						(this.c = ee), (this.d = _), (this.type = h.Not);
					}
					cmp(ee) {
						return ee.type !== this.type
							? this.type - ee.type
							: J(this.c, ee.c);
					}
					equals(ee) {
						return ee.type === this.type ? this.c === ee.c : !1;
					}
					substituteConstants() {
						const ee = r.get(this.c);
						return typeof ee == "boolean"
							? ee
								? P.INSTANCE
								: k.INSTANCE
							: this;
					}
					evaluate(ee) {
						return !ee.getValue(this.c);
					}
					serialize() {
						return `!${this.c}`;
					}
					keys() {
						return [this.c];
					}
					map(ee) {
						return ee.mapNot(this.c);
					}
					negate() {
						return this.d || (this.d = L.create(this.c, this)), this.d;
					}
				}
				e.$Vj = R;
				function O(ne, ee) {
					if (typeof ne == "string") {
						const _ = parseFloat(ne);
						isNaN(_) || (ne = _);
					}
					return typeof ne == "string" || typeof ne == "number"
						? ee(ne)
						: P.INSTANCE;
				}
				class B {
					static create(ee, _, te = null) {
						return O(_, (Q) => new B(ee, Q, te));
					}
					constructor(ee, _, te) {
						(this.c = ee), (this.d = _), (this.f = te), (this.type = h.Greater);
					}
					cmp(ee) {
						return ee.type !== this.type
							? this.type - ee.type
							: W(this.c, this.d, ee.c, ee.d);
					}
					equals(ee) {
						return ee.type === this.type
							? this.c === ee.c && this.d === ee.d
							: !1;
					}
					substituteConstants() {
						return this;
					}
					evaluate(ee) {
						return typeof this.d == "string"
							? !1
							: parseFloat(ee.getValue(this.c)) > this.d;
					}
					serialize() {
						return `${this.c} > ${this.d}`;
					}
					keys() {
						return [this.c];
					}
					map(ee) {
						return ee.mapGreater(this.c, this.d);
					}
					negate() {
						return this.f || (this.f = F.create(this.c, this.d, this)), this.f;
					}
				}
				e.$Wj = B;
				class U {
					static create(ee, _, te = null) {
						return O(_, (Q) => new U(ee, Q, te));
					}
					constructor(ee, _, te) {
						(this.c = ee),
							(this.d = _),
							(this.f = te),
							(this.type = h.GreaterEquals);
					}
					cmp(ee) {
						return ee.type !== this.type
							? this.type - ee.type
							: W(this.c, this.d, ee.c, ee.d);
					}
					equals(ee) {
						return ee.type === this.type
							? this.c === ee.c && this.d === ee.d
							: !1;
					}
					substituteConstants() {
						return this;
					}
					evaluate(ee) {
						return typeof this.d == "string"
							? !1
							: parseFloat(ee.getValue(this.c)) >= this.d;
					}
					serialize() {
						return `${this.c} >= ${this.d}`;
					}
					keys() {
						return [this.c];
					}
					map(ee) {
						return ee.mapGreaterEquals(this.c, this.d);
					}
					negate() {
						return this.f || (this.f = z.create(this.c, this.d, this)), this.f;
					}
				}
				e.$Xj = U;
				class z {
					static create(ee, _, te = null) {
						return O(_, (Q) => new z(ee, Q, te));
					}
					constructor(ee, _, te) {
						(this.c = ee), (this.d = _), (this.f = te), (this.type = h.Smaller);
					}
					cmp(ee) {
						return ee.type !== this.type
							? this.type - ee.type
							: W(this.c, this.d, ee.c, ee.d);
					}
					equals(ee) {
						return ee.type === this.type
							? this.c === ee.c && this.d === ee.d
							: !1;
					}
					substituteConstants() {
						return this;
					}
					evaluate(ee) {
						return typeof this.d == "string"
							? !1
							: parseFloat(ee.getValue(this.c)) < this.d;
					}
					serialize() {
						return `${this.c} < ${this.d}`;
					}
					keys() {
						return [this.c];
					}
					map(ee) {
						return ee.mapSmaller(this.c, this.d);
					}
					negate() {
						return this.f || (this.f = U.create(this.c, this.d, this)), this.f;
					}
				}
				e.$Yj = z;
				class F {
					static create(ee, _, te = null) {
						return O(_, (Q) => new F(ee, Q, te));
					}
					constructor(ee, _, te) {
						(this.c = ee),
							(this.d = _),
							(this.f = te),
							(this.type = h.SmallerEquals);
					}
					cmp(ee) {
						return ee.type !== this.type
							? this.type - ee.type
							: W(this.c, this.d, ee.c, ee.d);
					}
					equals(ee) {
						return ee.type === this.type
							? this.c === ee.c && this.d === ee.d
							: !1;
					}
					substituteConstants() {
						return this;
					}
					evaluate(ee) {
						return typeof this.d == "string"
							? !1
							: parseFloat(ee.getValue(this.c)) <= this.d;
					}
					serialize() {
						return `${this.c} <= ${this.d}`;
					}
					keys() {
						return [this.c];
					}
					map(ee) {
						return ee.mapSmallerEquals(this.c, this.d);
					}
					negate() {
						return this.f || (this.f = B.create(this.c, this.d, this)), this.f;
					}
				}
				e.$Zj = F;
				class x {
					static create(ee, _) {
						return new x(ee, _);
					}
					constructor(ee, _) {
						(this.d = ee), (this.f = _), (this.type = h.Regex), (this.c = null);
					}
					cmp(ee) {
						if (ee.type !== this.type) return this.type - ee.type;
						if (this.d < ee.d) return -1;
						if (this.d > ee.d) return 1;
						const _ = this.f ? this.f.source : "",
							te = ee.f ? ee.f.source : "";
						return _ < te ? -1 : _ > te ? 1 : 0;
					}
					equals(ee) {
						if (ee.type === this.type) {
							const _ = this.f ? this.f.source : "",
								te = ee.f ? ee.f.source : "";
							return this.d === ee.d && _ === te;
						}
						return !1;
					}
					substituteConstants() {
						return this;
					}
					evaluate(ee) {
						const _ = ee.getValue(this.d);
						return this.f ? this.f.test(_) : !1;
					}
					serialize() {
						const ee = this.f
							? `/${this.f.source}/${this.f.flags}`
							: "/invalid/";
						return `${this.d} =~ ${ee}`;
					}
					keys() {
						return [this.d];
					}
					map(ee) {
						return ee.mapRegex(this.d, this.f);
					}
					negate() {
						return this.c || (this.c = H.create(this)), this.c;
					}
				}
				e.$1j = x;
				class H {
					static create(ee) {
						return new H(ee);
					}
					constructor(ee) {
						(this.c = ee), (this.type = h.NotRegex);
					}
					cmp(ee) {
						return ee.type !== this.type
							? this.type - ee.type
							: this.c.cmp(ee.c);
					}
					equals(ee) {
						return ee.type === this.type ? this.c.equals(ee.c) : !1;
					}
					substituteConstants() {
						return this;
					}
					evaluate(ee) {
						return !this.c.evaluate(ee);
					}
					serialize() {
						return `!(${this.c.serialize()})`;
					}
					keys() {
						return this.c.keys();
					}
					map(ee) {
						return new H(this.c.map(ee));
					}
					negate() {
						return this.c;
					}
				}
				e.$2j = H;
				function q(ne) {
					let ee = null;
					for (let _ = 0, te = ne.length; _ < te; _++) {
						const Q = ne[_].substituteConstants();
						if (ne[_] !== Q && ee === null) {
							ee = [];
							for (let Z = 0; Z < _; Z++) ee[Z] = ne[Z];
						}
						ee !== null && (ee[_] = Q);
					}
					return ee === null ? ne : ee;
				}
				class V {
					static create(ee, _, te) {
						return V.d(ee, _, te);
					}
					constructor(ee, _) {
						(this.expr = ee), (this.c = _), (this.type = h.And);
					}
					cmp(ee) {
						if (ee.type !== this.type) return this.type - ee.type;
						if (this.expr.length < ee.expr.length) return -1;
						if (this.expr.length > ee.expr.length) return 1;
						for (let _ = 0, te = this.expr.length; _ < te; _++) {
							const Q = I(this.expr[_], ee.expr[_]);
							if (Q !== 0) return Q;
						}
						return 0;
					}
					equals(ee) {
						if (ee.type === this.type) {
							if (this.expr.length !== ee.expr.length) return !1;
							for (let _ = 0, te = this.expr.length; _ < te; _++)
								if (!this.expr[_].equals(ee.expr[_])) return !1;
							return !0;
						}
						return !1;
					}
					substituteConstants() {
						const ee = q(this.expr);
						return ee === this.expr ? this : V.create(ee, this.c, !1);
					}
					evaluate(ee) {
						for (let _ = 0, te = this.expr.length; _ < te; _++)
							if (!this.expr[_].evaluate(ee)) return !1;
						return !0;
					}
					static d(ee, _, te) {
						const Q = [];
						let Z = !1;
						for (const se of ee)
							if (se) {
								if (se.type === h.True) {
									Z = !0;
									continue;
								}
								if (se.type === h.False) return P.INSTANCE;
								if (se.type === h.And) {
									Q.push(...se.expr);
									continue;
								}
								Q.push(se);
							}
						if (Q.length === 0 && Z) return k.INSTANCE;
						if (Q.length !== 0) {
							if (Q.length === 1) return Q[0];
							Q.sort(I);
							for (let se = 1; se < Q.length; se++)
								Q[se - 1].equals(Q[se]) && (Q.splice(se, 1), se--);
							if (Q.length === 1) return Q[0];
							for (; Q.length > 1; ) {
								const se = Q[Q.length - 1];
								if (se.type !== h.Or) break;
								Q.pop();
								const re = Q.pop(),
									le = Q.length === 0,
									oe = G.create(
										se.expr.map((ae) => V.create([ae, re], null, te)),
										null,
										le,
									);
								oe && (Q.push(oe), Q.sort(I));
							}
							if (Q.length === 1) return Q[0];
							if (te) {
								for (let se = 0; se < Q.length; se++)
									for (let re = se + 1; re < Q.length; re++)
										if (Q[se].negate().equals(Q[re])) return P.INSTANCE;
								if (Q.length === 1) return Q[0];
							}
							return new V(Q, _);
						}
					}
					serialize() {
						return this.expr.map((ee) => ee.serialize()).join(" && ");
					}
					keys() {
						const ee = [];
						for (const _ of this.expr) ee.push(..._.keys());
						return ee;
					}
					map(ee) {
						return new V(
							this.expr.map((_) => _.map(ee)),
							null,
						);
					}
					negate() {
						if (!this.c) {
							const ee = [];
							for (const _ of this.expr) ee.push(_.negate());
							this.c = G.create(ee, this, !0);
						}
						return this.c;
					}
				}
				e.$3j = V;
				class G {
					static create(ee, _, te) {
						return G.d(ee, _, te);
					}
					constructor(ee, _) {
						(this.expr = ee), (this.c = _), (this.type = h.Or);
					}
					cmp(ee) {
						if (ee.type !== this.type) return this.type - ee.type;
						if (this.expr.length < ee.expr.length) return -1;
						if (this.expr.length > ee.expr.length) return 1;
						for (let _ = 0, te = this.expr.length; _ < te; _++) {
							const Q = I(this.expr[_], ee.expr[_]);
							if (Q !== 0) return Q;
						}
						return 0;
					}
					equals(ee) {
						if (ee.type === this.type) {
							if (this.expr.length !== ee.expr.length) return !1;
							for (let _ = 0, te = this.expr.length; _ < te; _++)
								if (!this.expr[_].equals(ee.expr[_])) return !1;
							return !0;
						}
						return !1;
					}
					substituteConstants() {
						const ee = q(this.expr);
						return ee === this.expr ? this : G.create(ee, this.c, !1);
					}
					evaluate(ee) {
						for (let _ = 0, te = this.expr.length; _ < te; _++)
							if (this.expr[_].evaluate(ee)) return !0;
						return !1;
					}
					static d(ee, _, te) {
						let Q = [],
							Z = !1;
						if (ee) {
							for (let se = 0, re = ee.length; se < re; se++) {
								const le = ee[se];
								if (le) {
									if (le.type === h.False) {
										Z = !0;
										continue;
									}
									if (le.type === h.True) return k.INSTANCE;
									if (le.type === h.Or) {
										Q = Q.concat(le.expr);
										continue;
									}
									Q.push(le);
								}
							}
							if (Q.length === 0 && Z) return P.INSTANCE;
							Q.sort(I);
						}
						if (Q.length !== 0) {
							if (Q.length === 1) return Q[0];
							for (let se = 1; se < Q.length; se++)
								Q[se - 1].equals(Q[se]) && (Q.splice(se, 1), se--);
							if (Q.length === 1) return Q[0];
							if (te) {
								for (let se = 0; se < Q.length; se++)
									for (let re = se + 1; re < Q.length; re++)
										if (Q[se].negate().equals(Q[re])) return k.INSTANCE;
								if (Q.length === 1) return Q[0];
							}
							return new G(Q, _);
						}
					}
					serialize() {
						return this.expr.map((ee) => ee.serialize()).join(" || ");
					}
					keys() {
						const ee = [];
						for (const _ of this.expr) ee.push(..._.keys());
						return ee;
					}
					map(ee) {
						return new G(
							this.expr.map((_) => _.map(ee)),
							null,
						);
					}
					negate() {
						if (!this.c) {
							const ee = [];
							for (const _ of this.expr) ee.push(_.negate());
							for (; ee.length > 1; ) {
								const _ = ee.shift(),
									te = ee.shift(),
									Q = [];
								for (const Z of ie(_))
									for (const se of ie(te)) Q.push(V.create([Z, se], null, !1));
								ee.unshift(G.create(Q, null, !1));
							}
							this.c = G.create(ee, this, !0);
						}
						return this.c;
					}
				}
				e.$4j = G;
				class K extends L {
					static {
						this.d = [];
					}
					static all() {
						return K.d.values();
					}
					constructor(ee, _, te) {
						super(ee, null),
							(this.f = _),
							typeof te == "object"
								? K.d.push({ ...te, key: ee })
								: te !== !0 &&
									K.d.push({
										key: ee,
										description: te,
										type: _ != null ? typeof _ : void 0,
									});
					}
					bindTo(ee) {
						return ee.createKey(this.key, this.f);
					}
					getValue(ee) {
						return ee.getContextKeyValue(this.key);
					}
					toNegated() {
						return this.negate();
					}
					isEqualTo(ee) {
						return D.create(this.key, ee);
					}
					notEqualsTo(ee) {
						return A.create(this.key, ee);
					}
				}
				(e.$5j = K), (e.$6j = (0, C.$Mi)("contextKeyService"));
				function J(ne, ee) {
					return ne < ee ? -1 : ne > ee ? 1 : 0;
				}
				function W(ne, ee, _, te) {
					return ne < _ ? -1 : ne > _ ? 1 : ee < te ? -1 : ee > te ? 1 : 0;
				}
				function X(ne, ee) {
					if (ne.type === h.False || ee.type === h.True) return !0;
					if (ne.type === h.Or)
						return ee.type === h.Or ? Y(ne.expr, ee.expr) : !1;
					if (ee.type === h.Or) {
						for (const _ of ee.expr) if (X(ne, _)) return !0;
						return !1;
					}
					if (ne.type === h.And) {
						if (ee.type === h.And) return Y(ee.expr, ne.expr);
						for (const _ of ne.expr) if (X(_, ee)) return !0;
						return !1;
					}
					return ne.equals(ee);
				}
				function Y(ne, ee) {
					let _ = 0,
						te = 0;
					for (; _ < ne.length && te < ee.length; ) {
						const Q = ne[_].cmp(ee[te]);
						if (Q < 0) return !1;
						Q === 0 && _++, te++;
					}
					return _ === ne.length;
				}
				function ie(ne) {
					return ne.type === h.Or ? ne.expr : [ne];
				}
			},
		),
		
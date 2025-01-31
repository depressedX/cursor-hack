import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/async.js';
import '../../../base/common/color.js';
import '../../../base/common/event.js';
import '../../../nls.js';
import '../../jsonschemas/common/jsonContributionRegistry.js';
import '../../registry/common/platform.js';
define(
			de[778],
			he([1, 0, 15, 97, 6, 4, 250, 30]),
			function (ce /*require*/,
 e /*exports*/,
 t /*async*/,
 i /*color*/,
 w /*event*/,
 E /*nls*/,
 C /*jsonContributionRegistry*/,
 d /*platform*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$omc = e.SemanticTokenRule = e.$lmc = e.$kmc = void 0),
					(e.$mmc = s),
					(e.$nmc = $),
					(E = mt(E)),
					(d = mt(d));
				const m = "*",
					r = ":",
					u = ".",
					a = "\\w+[-_\\w+]*";
				e.$kmc = `^${a}$`;
				const h = `^(${a}|\\*)(\\${u}${a})*(${r}${a})?$`,
					c = "^(\\s*(italic|bold|underline|strikethrough))*\\s*$";
				class n {
					constructor(P, k, L, D, M) {
						(this.foreground = P),
							(this.bold = k),
							(this.underline = L),
							(this.strikethrough = D),
							(this.italic = M);
					}
				}
				(e.$lmc = n),
					(function (T) {
						function P(A) {
							return {
								_foreground:
									A.foreground === void 0
										? null
										: i.$UL.Format.CSS.formatHexA(A.foreground, !0),
								_bold: A.bold === void 0 ? null : A.bold,
								_underline: A.underline === void 0 ? null : A.underline,
								_italic: A.italic === void 0 ? null : A.italic,
								_strikethrough:
									A.strikethrough === void 0 ? null : A.strikethrough,
							};
						}
						T.toJSONObject = P;
						function k(A) {
							if (A) {
								const R = (B) => (typeof B == "boolean" ? B : void 0),
									O = (B) => (typeof B == "string" ? i.$UL.fromHex(B) : void 0);
								return new T(
									O(A._foreground),
									R(A._bold),
									R(A._underline),
									R(A._strikethrough),
									R(A._italic),
								);
							}
						}
						T.fromJSONObject = k;
						function L(A, R) {
							return A === R
								? !0
								: A !== void 0 &&
										R !== void 0 &&
										(A.foreground instanceof i.$UL
											? A.foreground.equals(R.foreground)
											: R.foreground === void 0) &&
										A.bold === R.bold &&
										A.underline === R.underline &&
										A.strikethrough === R.strikethrough &&
										A.italic === R.italic;
						}
						T.equals = L;
						function D(A) {
							return A instanceof T;
						}
						T.is = D;
						function M(A) {
							return new T(
								A.foreground,
								A.bold,
								A.underline,
								A.strikethrough,
								A.italic,
							);
						}
						T.fromData = M;
						function N(A, R, O, B, U, z) {
							let F;
							if ((A !== void 0 && (F = i.$UL.fromHex(A)), R !== void 0)) {
								O = z = B = U = !1;
								const x = /italic|bold|underline|strikethrough/g;
								let H;
								for (; (H = x.exec(R)); )
									switch (H[0]) {
										case "bold":
											O = !0;
											break;
										case "italic":
											z = !0;
											break;
										case "underline":
											B = !0;
											break;
										case "strikethrough":
											U = !0;
											break;
									}
							}
							return new T(F, O, B, U, z);
						}
						T.fromSettings = N;
					})(n || (e.$lmc = n = {}));
				var g;
				(function (T) {
					function P(M, N) {
						if (N && typeof N._selector == "string" && N._style) {
							const A = n.fromJSONObject(N._style);
							if (A)
								try {
									return {
										selector: M.parseTokenSelector(N._selector),
										style: A,
									};
								} catch {}
						}
					}
					T.fromJSONObject = P;
					function k(M) {
						return {
							_selector: M.selector.id,
							_style: n.toJSONObject(M.style),
						};
					}
					T.toJSONObject = k;
					function L(M, N) {
						return M === N
							? !0
							: M !== void 0 &&
									N !== void 0 &&
									M.selector &&
									N.selector &&
									M.selector.id === N.selector.id &&
									n.equals(M.style, N.style);
					}
					T.equals = L;
					function D(M) {
						return (
							M &&
							M.selector &&
							typeof M.selector.id == "string" &&
							n.is(M.style)
						);
					}
					T.is = D;
				})(g || (e.SemanticTokenRule = g = {}));
				const p = {
					TokenClassificationContribution:
						"base.contributions.tokenClassification",
				};
				class o {
					constructor() {
						(this.c = new w.$re()),
							(this.onDidChangeSchema = this.c.event),
							(this.d = 0),
							(this.f = 1),
							(this.j = []),
							(this.m = {
								type: "object",
								properties: {},
								patternProperties: { [h]: v() },
								additionalProperties: !1,
								definitions: {
									style: {
										type: "object",
										description: E.localize(2373, null),
										properties: {
											foreground: {
												type: "string",
												description: E.localize(2374, null),
												format: "color-hex",
												default: "#ff0000",
											},
											background: {
												type: "string",
												deprecationMessage: E.localize(2375, null),
											},
											fontStyle: {
												type: "string",
												description: E.localize(2376, null),
												pattern: c,
												patternErrorMessage: E.localize(2377, null),
												defaultSnippets: [
													{ label: E.localize(2378, null), bodyText: '""' },
													{ body: "italic" },
													{ body: "bold" },
													{ body: "underline" },
													{ body: "strikethrough" },
													{ body: "italic bold" },
													{ body: "italic underline" },
													{ body: "italic strikethrough" },
													{ body: "bold underline" },
													{ body: "bold strikethrough" },
													{ body: "underline strikethrough" },
													{ body: "italic bold underline" },
													{ body: "italic bold strikethrough" },
													{ body: "italic underline strikethrough" },
													{ body: "bold underline strikethrough" },
													{ body: "italic bold underline strikethrough" },
												],
											},
											bold: {
												type: "boolean",
												description: E.localize(2379, null),
											},
											italic: {
												type: "boolean",
												description: E.localize(2380, null),
											},
											underline: {
												type: "boolean",
												description: E.localize(2381, null),
											},
											strikethrough: {
												type: "boolean",
												description: E.localize(2382, null),
											},
										},
										defaultSnippets: [
											{
												body: {
													foreground: "${1:#FF0000}",
													fontStyle: "${2:bold}",
												},
											},
										],
									},
								},
							}),
							(this.g = Object.create(null)),
							(this.h = Object.create(null)),
							(this.l = Object.create(null));
					}
					registerTokenType(P, k, L, D) {
						if (!P.match(e.$kmc)) throw new Error("Invalid token type id.");
						if (L && !L.match(e.$kmc))
							throw new Error("Invalid token super type id.");
						const N = {
							num: this.d++,
							id: P,
							superType: L,
							description: k,
							deprecationMessage: D,
						};
						this.g[P] = N;
						const A = v(k, D);
						(this.m.properties[P] = A), (this.l = Object.create(null));
					}
					registerTokenModifier(P, k, L) {
						if (!P.match(e.$kmc)) throw new Error("Invalid token modifier id.");
						const D = this.f;
						this.f = this.f * 2;
						const M = { num: D, id: P, description: k, deprecationMessage: L };
						(this.h[P] = M), (this.m.properties[`*.${P}`] = v(k, L));
					}
					parseTokenSelector(P, k) {
						const L = s(P, k);
						return L.type
							? {
									match: (D, M, N) => {
										let A = 0;
										if (L.language !== void 0) {
											if (L.language !== N) return -1;
											A += 10;
										}
										if (L.type !== m) {
											const O = this.n(D).indexOf(L.type);
											if (O === -1) return -1;
											A += 100 - O;
										}
										for (const R of L.modifiers)
											if (M.indexOf(R) === -1) return -1;
										return A + L.modifiers.length * 100;
									},
									id: `${[L.type, ...L.modifiers.sort()].join(".")}${L.language !== void 0 ? ":" + L.language : ""}`,
								}
							: { match: () => -1, id: "$invalid" };
					}
					registerTokenStyleDefault(P, k) {
						this.j.push({ selector: P, defaults: k });
					}
					deregisterTokenStyleDefault(P) {
						const k = P.id;
						this.j = this.j.filter((L) => L.selector.id !== k);
					}
					deregisterTokenType(P) {
						delete this.g[P],
							delete this.m.properties[P],
							(this.l = Object.create(null));
					}
					deregisterTokenModifier(P) {
						delete this.h[P], delete this.m.properties[`*.${P}`];
					}
					getTokenTypes() {
						return Object.keys(this.g).map((P) => this.g[P]);
					}
					getTokenModifiers() {
						return Object.keys(this.h).map((P) => this.h[P]);
					}
					getTokenStylingSchema() {
						return this.m;
					}
					getTokenStylingDefaultRules() {
						return this.j;
					}
					n(P) {
						let k = this.l[P];
						if (!k) {
							this.l[P] = k = [P];
							let L = this.g[P];
							for (; L && L.superType; )
								k.push(L.superType), (L = this.g[L.superType]);
						}
						return k;
					}
					toString() {
						const P = (k, L) => {
							const D = k.indexOf(".") === -1 ? 0 : 1,
								M = L.indexOf(".") === -1 ? 0 : 1;
							return D !== M ? D - M : k.localeCompare(L);
						};
						return Object.keys(this.g)
							.sort(P)
							.map((k) => `- \`${k}\`: ${this.g[k].description}`)
							.join(`
`);
					}
				}
				const f = r.charCodeAt(0),
					b = u.charCodeAt(0);
				function s(T, P) {
					let k = T.length,
						L = P;
					const D = [];
					for (let N = k - 1; N >= 0; N--) {
						const A = T.charCodeAt(N);
						if (A === f || A === b) {
							const R = T.substring(N + 1, k);
							(k = N), A === f ? (L = R) : D.push(R);
						}
					}
					return { type: T.substring(0, k), modifiers: D, language: L };
				}
				const l = y();
				d.$Io.add(p.TokenClassificationContribution, l);
				function y() {
					const T = new o();
					function P(L, D, M = [], N, A) {
						return T.registerTokenType(L, D, N, A), M && k(L, M), L;
					}
					function k(L, D) {
						try {
							const M = T.parseTokenSelector(L);
							T.registerTokenStyleDefault(M, { scopesToProbe: D });
						} catch (M) {
							console.log(M);
						}
					}
					return (
						P("comment", E.localize(2383, null), [["comment"]]),
						P("string", E.localize(2384, null), [["string"]]),
						P("keyword", E.localize(2385, null), [["keyword.control"]]),
						P("number", E.localize(2386, null), [["constant.numeric"]]),
						P("regexp", E.localize(2387, null), [["constant.regexp"]]),
						P("operator", E.localize(2388, null), [["keyword.operator"]]),
						P("namespace", E.localize(2389, null), [["entity.name.namespace"]]),
						P("type", E.localize(2390, null), [
							["entity.name.type"],
							["support.type"],
						]),
						P("struct", E.localize(2391, null), [["entity.name.type.struct"]]),
						P("class", E.localize(2392, null), [
							["entity.name.type.class"],
							["support.class"],
						]),
						P("interface", E.localize(2393, null), [
							["entity.name.type.interface"],
						]),
						P("enum", E.localize(2394, null), [["entity.name.type.enum"]]),
						P("typeParameter", E.localize(2395, null), [
							["entity.name.type.parameter"],
						]),
						P("function", E.localize(2396, null), [
							["entity.name.function"],
							["support.function"],
						]),
						P(
							"member",
							E.localize(2397, null),
							[],
							"method",
							"Deprecated use `method` instead",
						),
						P("method", E.localize(2398, null), [
							["entity.name.function.member"],
							["support.function"],
						]),
						P("macro", E.localize(2399, null), [
							["entity.name.function.preprocessor"],
						]),
						P("variable", E.localize(2400, null), [
							["variable.other.readwrite"],
							["entity.name.variable"],
						]),
						P("parameter", E.localize(2401, null), [["variable.parameter"]]),
						P("property", E.localize(2402, null), [
							["variable.other.property"],
						]),
						P("enumMember", E.localize(2403, null), [
							["variable.other.enummember"],
						]),
						P("event", E.localize(2404, null), [["variable.other.event"]]),
						P("decorator", E.localize(2405, null), [
							["entity.name.decorator"],
							["entity.name.function"],
						]),
						P("label", E.localize(2406, null), void 0),
						T.registerTokenModifier(
							"declaration",
							E.localize(2407, null),
							void 0,
						),
						T.registerTokenModifier(
							"documentation",
							E.localize(2408, null),
							void 0,
						),
						T.registerTokenModifier("static", E.localize(2409, null), void 0),
						T.registerTokenModifier("abstract", E.localize(2410, null), void 0),
						T.registerTokenModifier(
							"deprecated",
							E.localize(2411, null),
							void 0,
						),
						T.registerTokenModifier(
							"modification",
							E.localize(2412, null),
							void 0,
						),
						T.registerTokenModifier("async", E.localize(2413, null), void 0),
						T.registerTokenModifier("readonly", E.localize(2414, null), void 0),
						k("variable.readonly", [["variable.other.constant"]]),
						k("property.readonly", [["variable.other.constant.property"]]),
						k("type.defaultLibrary", [["support.type"]]),
						k("class.defaultLibrary", [["support.class"]]),
						k("interface.defaultLibrary", [["support.class"]]),
						k("variable.defaultLibrary", [
							["support.variable"],
							["support.other.variable"],
						]),
						k("variable.defaultLibrary.readonly", [["support.constant"]]),
						k("property.defaultLibrary", [["support.variable.property"]]),
						k("property.defaultLibrary.readonly", [
							["support.constant.property"],
						]),
						k("function.defaultLibrary", [["support.function"]]),
						k("member.defaultLibrary", [["support.function"]]),
						T
					);
				}
				function $() {
					return l;
				}
				function v(T, P) {
					return {
						description: T,
						deprecationMessage: P,
						defaultSnippets: [{ body: "${1:#ff0000}" }],
						anyOf: [
							{ type: "string", format: "color-hex" },
							{ $ref: "#/definitions/style" },
						],
					};
				}
				e.$omc = "vscode://schemas/token-styling";
				const S = d.$Io.as(C.$Jo.JSONContribution);
				S.registerSchema(e.$omc, l.getTokenStylingSchema());
				const I = new t.$Yh(() => S.notifySchemaChanged(e.$omc), 200);
				l.onDidChangeSchema(() => {
					I.isScheduled() || I.schedule();
				});
			},
		)

define(de[1856], he([1, 0, 4, 97, 28]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$UZ = d),
				(e.$VZ = m),
				(t = mt(t));
			function E(p, ...o) {
				return o.some((f) => p.includes(f));
			}
			function C(p) {
				return p === "" || (0, w.$ug)(p);
			}
			function d(p) {
				const o = Array.isArray(p.type) ? p.type : [p.type],
					f = E(o, "null"),
					b =
						(E(o, "number") || E(o, "integer")) &&
						(o.length === 1 || (o.length === 2 && f)),
					s = h(p),
					l = a(p),
					y = c(p),
					$ = n(p);
				return (v) => {
					if (f && C(v)) return "";
					const S = [];
					if (y) {
						const I = y(v);
						I && S.push(I);
					}
					if ($) {
						const I = $(v);
						I && S.push(I);
					}
					return (
						p.type === "boolean" &&
							v !== !0 &&
							v !== !1 &&
							S.push(t.localize(12590, null)),
						b &&
							(C(v) || typeof v == "boolean" || Array.isArray(v) || isNaN(+v)
								? S.push(t.localize(12591, null))
								: S.push(
										...s.filter((I) => !I.isValid(+v)).map((I) => I.message),
									)),
						p.type === "string" &&
							(p.enum && !(0, w.$mg)(p.enum)
								? S.push(t.localize(12592, null))
								: (0, w.$lg)(v)
									? S.push(
											...l.filter((I) => !I.isValid(v)).map((I) => I.message),
										)
									: S.push(t.localize(12593, null))),
						S.length
							? p.errorMessage
								? [p.errorMessage, ...S].join(" ")
								: S.join(" ")
							: ""
					);
				};
			}
			function m(p, o) {
				if (typeof o > "u") return;
				if (!(Array.isArray(o) ? o : [o]).some((b) => r(p, b)))
					return t.localize(12594, null, JSON.stringify(o));
			}
			function r(p, o) {
				const f = typeof p;
				return o === "boolean"
					? f === "boolean"
					: o === "object"
						? p && !Array.isArray(p) && f === "object"
						: o === "null"
							? p === null
							: o === "array"
								? Array.isArray(p)
								: o === "string"
									? f === "string"
									: o === "number" || o === "integer"
										? f === "number"
										: !0;
			}
			function u(p) {
				try {
					return new RegExp(p, "u");
				} catch {
					try {
						return new RegExp(p);
					} catch {
						return console.error(t.localize(12595, null), p), /.*/;
					}
				}
			}
			function a(p) {
				const o =
					/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
				let f;
				return (
					typeof p.pattern == "string" && (f = u(p.pattern)),
					[
						{
							enabled: p.maxLength !== void 0,
							isValid: (b) => b.length <= p.maxLength,
							message: t.localize(12596, null, p.maxLength),
						},
						{
							enabled: p.minLength !== void 0,
							isValid: (b) => b.length >= p.minLength,
							message: t.localize(12597, null, p.minLength),
						},
						{
							enabled: f !== void 0,
							isValid: (b) => f.test(b),
							message:
								p.patternErrorMessage || t.localize(12598, null, p.pattern),
						},
						{
							enabled: p.format === "color-hex",
							isValid: (b) => i.$UL.Format.CSS.parseHex(b),
							message: t.localize(12599, null),
						},
						{
							enabled: p.format === "uri" || p.format === "uri-reference",
							isValid: (b) => !!b.length,
							message: t.localize(12600, null),
						},
						{
							enabled: p.format === "uri" || p.format === "uri-reference",
							isValid: (b) => o.test(b),
							message: t.localize(12601, null),
						},
						{
							enabled: p.format === "uri",
							isValid: (b) => {
								const s = b.match(o);
								return !!(s && s[2]);
							},
							message: t.localize(12602, null),
						},
						{
							enabled: p.enum !== void 0,
							isValid: (b) => p.enum.includes(b),
							message: t.localize(
								12603,
								null,
								p.enum ? p.enum.map((b) => `"${b}"`).join(", ") : "[]",
							),
						},
					].filter((b) => b.enabled)
				);
			}
			function h(p) {
				const o = Array.isArray(p.type) ? p.type : [p.type],
					f = E(o, "null"),
					b = E(o, "integer") && (o.length === 1 || (o.length === 2 && f));
				if (
					!(
						E(o, "number", "integer") &&
						(o.length === 1 || (o.length === 2 && f))
					)
				)
					return [];
				let l, y;
				return (
					typeof p.exclusiveMaximum == "boolean"
						? (l = p.exclusiveMaximum ? p.maximum : void 0)
						: (l = p.exclusiveMaximum),
					typeof p.exclusiveMinimum == "boolean"
						? (y = p.exclusiveMinimum ? p.minimum : void 0)
						: (y = p.exclusiveMinimum),
					[
						{
							enabled: l !== void 0 && (p.maximum === void 0 || l <= p.maximum),
							isValid: ($) => $ < l,
							message: t.localize(12604, null, l),
						},
						{
							enabled: y !== void 0 && (p.minimum === void 0 || y >= p.minimum),
							isValid: ($) => $ > y,
							message: t.localize(12605, null, y),
						},
						{
							enabled: p.maximum !== void 0 && (l === void 0 || l > p.maximum),
							isValid: ($) => $ <= p.maximum,
							message: t.localize(12606, null, p.maximum),
						},
						{
							enabled: p.minimum !== void 0 && (y === void 0 || y < p.minimum),
							isValid: ($) => $ >= p.minimum,
							message: t.localize(12607, null, p.minimum),
						},
						{
							enabled: p.multipleOf !== void 0,
							isValid: ($) => $ % p.multipleOf === 0,
							message: t.localize(12608, null, p.multipleOf),
						},
						{
							enabled: b,
							isValid: ($) => $ % 1 === 0,
							message: t.localize(12609, null),
						},
					].filter(($) => $.enabled)
				);
			}
			function c(p) {
				if (p.type === "array" && p.items && !Array.isArray(p.items)) {
					const o = p.items;
					if (o && !Array.isArray(o.type)) {
						const f = (b) => "'" + b + "'";
						return (b) => {
							if (!b) return null;
							let s = "";
							if (!Array.isArray(b))
								return (
									(s += t.localize(12610, null)),
									(s += `
`),
									s
								);
							const l = b;
							if (
								(p.uniqueItems &&
									new Set(l).size < l.length &&
									((s += t.localize(12611, null)),
									(s += `
`)),
								p.minItems &&
									l.length < p.minItems &&
									((s += t.localize(12612, null, p.minItems)),
									(s += `
`)),
								p.maxItems &&
									l.length > p.maxItems &&
									((s += t.localize(12613, null, p.maxItems)),
									(s += `
`)),
								o.type === "string")
							) {
								if (!(0, w.$mg)(l))
									return (
										(s += t.localize(12614, null)),
										(s += `
`),
										s
									);
								if (typeof o.pattern == "string") {
									const $ = u(o.pattern);
									l.forEach((v) => {
										$.test(v) ||
											(s +=
												o.patternErrorMessage ||
												t.localize(12615, null, f(v), f(o.pattern)));
									});
								}
								const y = o.enum;
								y &&
									l.forEach(($) => {
										y.indexOf($) === -1 &&
											((s += t.localize(
												12616,
												null,
												f($),
												"[" + y.map(f).join(", ") + "]",
											)),
											(s += `
`));
									});
							} else
								(o.type === "integer" || o.type === "number") &&
									l.forEach((y) => {
										const $ = g(o, y);
										$ &&
											(s += `${y}: ${$}
`);
									});
							return s;
						};
					}
				}
				return null;
			}
			function n(p) {
				if (p.type === "object") {
					const {
						properties: o,
						patternProperties: f,
						additionalProperties: b,
					} = p;
					return (s) => {
						if (!s) return null;
						const l = [];
						return (
							(0, w.$ng)(s)
								? Object.keys(s).forEach((y) => {
										const $ = s[y];
										if (o && y in o) {
											const v = g(o[y], $);
											v &&
												l.push(`${y}: ${v}
`);
											return;
										}
										if (f) {
											for (const v in f)
												if (RegExp(v).test(y)) {
													const S = g(f[v], $);
													S &&
														l.push(`${y}: ${S}
`);
													return;
												}
										}
										if (b === !1) l.push(t.localize(12618, null, y));
										else if (typeof b == "object") {
											const v = g(b, $);
											v &&
												l.push(`${y}: ${v}
`);
										}
									})
								: l.push(t.localize(12617, null)),
							l.length
								? p.errorMessage
									? [p.errorMessage, ...l].join(" ")
									: l.join(" ")
								: ""
						);
					};
				}
				return null;
			}
			function g(p, o) {
				return d(p)(o);
			}
		}),
		define(
			de[838],
			he([
				1, 0, 24, 6, 187, 3, 17, 104, 4, 10, 81, 39, 30, 416, 131, 261, 1856,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5Z =
						e.$3Z =
						e.$2Z =
						e.$1Z =
						e.$ZZ =
						e.$YZ =
						e.$XZ =
						e.$WZ =
							void 0),
					(e.$4Z = k),
					(m = mt(m)),
					(e.$WZ = {
						startLineNumber: -1,
						startColumn: -1,
						endLineNumber: -1,
						endColumn: -1,
					});
				function o(D) {
					return (
						D.startLineNumber === -1 &&
						D.startColumn === -1 &&
						D.endLineNumber === -1 &&
						D.endColumn === -1
					);
				}
				class f extends c.$PO {
					constructor() {
						super(...arguments), (this.j = new Map());
					}
					updateResultGroup(M, N) {
						return N ? this.j.set(M, N) : this.j.delete(M), this.n(), this.t();
					}
					n() {
						const M = new Set();
						[...this.j.keys()]
							.sort((N, A) => this.j.get(N).order - this.j.get(A).order)
							.forEach((N) => {
								const A = this.j.get(N);
								(A.result.filterMatches = A.result.filterMatches.filter(
									(R) => !M.has(R.setting.key),
								)),
									A.result.filterMatches.forEach((R) => M.add(R.setting.key));
							});
					}
					filterSettings(M, N, A) {
						const R = this.r,
							O = [];
						for (const B of R) {
							const U = N(B);
							for (const z of B.sections)
								for (const F of z.settings) {
									const x = A(F, B);
									(U || x) &&
										O.push({
											setting: F,
											matches: x && x.matches,
											matchType: x?.matchType ?? n.SettingMatchType.None,
											score: x?.score ?? 0,
										});
								}
						}
						return O;
					}
					getPreference(M) {
						for (const N of this.settingsGroups)
							for (const A of N.sections)
								for (const R of A.settings) if (M === R.key) return R;
					}
					q(M) {
						const N = Object.create(null);
						let A = !1;
						return (
							M.forEach((R) => {
								R.result.metadata && ((N[R.id] = R.result.metadata), (A = !0));
							}),
							A ? N : null
						);
					}
					get r() {
						return this.settingsGroups;
					}
				}
				class b extends f {
					constructor(M, N) {
						super(),
							(this.z = N),
							(this.y = this.D(new i.$re())),
							(this.onDidChangeGroups = this.y.event),
							(this.w = M.object.textEditorModel),
							this.D(this.onWillDispose(() => M.dispose())),
							this.D(
								this.w.onDidChangeContent(() => {
									(this.u = void 0), this.y.fire();
								}),
							);
					}
					get uri() {
						return this.w.uri;
					}
					get configurationTarget() {
						return this.z;
					}
					get settingsGroups() {
						return this.u || this.F(), this.u;
					}
					get content() {
						return this.w.getValue();
					}
					findValueMatches(M, N) {
						return this.w
							.findMatches(M, N.valueRange, !1, !1, null, !1)
							.map((A) => A.range);
					}
					C(M, N) {
						return N.length === 0;
					}
					F() {
						this.u = l(this.w, (M, N) => this.C(M, N));
					}
					t() {
						const M = [...this.j.values()];
						if (!M.length) return;
						const N = [],
							A = [];
						M.forEach((U) => {
							U.result.filterMatches.forEach((z) => {
								N.push(z.setting), z.matches && A.push(...z.matches);
							});
						});
						let R;
						const O = this.settingsGroups[0];
						O &&
							(R = {
								id: O.id,
								range: O.range,
								sections: [{ settings: N }],
								title: O.title,
								titleRange: O.titleRange,
								order: O.order,
								extensionInfo: O.extensionInfo,
							});
						const B = this.q(M);
						return {
							allGroups: this.settingsGroups,
							filteredGroups: R ? [R] : [],
							matches: A,
							metadata: B,
						};
					}
				}
				e.$XZ = b;
				let s = class extends f {
					constructor(M, N) {
						super(),
							(this.z = M),
							(this.u = this.D(new i.$re())),
							(this.onDidChangeGroups = this.u.event),
							(this.w = []),
							(this.y = !1),
							this.D(
								N.onDidChangeConfiguration((A) => {
									A.source === r.ConfigurationTarget.DEFAULT &&
										((this.y = !0), this.u.fire());
								}),
							),
							this.D(
								h.$Io.as(u.$No.Configuration).onDidSchemaChange((A) => {
									(this.y = !0), this.u.fire();
								}),
							);
					}
					get r() {
						return this.settingsGroups.slice(1);
					}
					get settingsGroups() {
						const M = this.z.getSettingsGroups(this.y);
						return (this.y = !1), [...M, ...this.w];
					}
					setAdditionalGroups(M) {
						this.w = M;
					}
					findValueMatches(M, N) {
						return [];
					}
					t() {
						throw new Error("Not supported");
					}
				};
				(e.$YZ = s), (e.$YZ = s = Ne([j(1, r.$gj)], s));
				function l(D, M) {
					const N = [];
					let A = null,
						R = null,
						O = [];
					const B = [];
					let U = -1;
					const z = {
						startLineNumber: 0,
						startColumn: 0,
						endLineNumber: 0,
						endColumn: 0,
					};
					function F(H, q, V) {
						if (
							(Array.isArray(O) ? O.push(H) : R && (O[R] = H),
							B.length === U + 1 || (B.length === U + 2 && A !== null))
						) {
							const G =
								B.length === U + 1
									? N[N.length - 1]
									: A.overrides[A.overrides.length - 1];
							if (G) {
								const K = D.getPositionAt(q),
									J = D.getPositionAt(q + V);
								(G.value = H),
									(G.valueRange = {
										startLineNumber: K.lineNumber,
										startColumn: K.column,
										endLineNumber: J.lineNumber,
										endColumn: J.column,
									}),
									(G.range = Object.assign(G.range, {
										endLineNumber: J.lineNumber,
										endColumn: J.column,
									}));
							}
						}
					}
					const x = {
						onObjectBegin: (H, q) => {
							if (M(R, B)) {
								U = B.length;
								const G = D.getPositionAt(H);
								(z.startLineNumber = G.lineNumber), (z.startColumn = G.column);
							}
							const V = {};
							F(V, H, q), (O = V), (R = null), B.push(O);
						},
						onObjectProperty: (H, q, V) => {
							if (
								((R = H),
								B.length === U + 1 || (B.length === U + 2 && A !== null))
							) {
								const G = D.getPositionAt(q),
									K = {
										description: [],
										descriptionIsMarkdown: !1,
										key: H,
										keyRange: {
											startLineNumber: G.lineNumber,
											startColumn: G.column + 1,
											endLineNumber: G.lineNumber,
											endColumn: G.column + V,
										},
										range: {
											startLineNumber: G.lineNumber,
											startColumn: G.column,
											endLineNumber: 0,
											endColumn: 0,
										},
										value: null,
										valueRange: e.$WZ,
										descriptionRanges: [],
										overrides: [],
										overrideOf: A ?? void 0,
									};
								B.length === U + 1
									? (N.push(K), u.$Xo.test(H) && (A = K))
									: A.overrides.push(K);
							}
						},
						onObjectEnd: (H, q) => {
							if (
								((O = B.pop()),
								U !== -1 &&
									(B.length === U + 1 || (B.length === U + 2 && A !== null)))
							) {
								const V =
									B.length === U + 1
										? N[N.length - 1]
										: A.overrides[A.overrides.length - 1];
								if (V) {
									const G = D.getPositionAt(H + q);
									(V.valueRange = Object.assign(V.valueRange, {
										endLineNumber: G.lineNumber,
										endColumn: G.column,
									})),
										(V.range = Object.assign(V.range, {
											endLineNumber: G.lineNumber,
											endColumn: G.column,
										}));
								}
								B.length === U + 1 && (A = null);
							}
							if (B.length === U) {
								const V = D.getPositionAt(H);
								(z.endLineNumber = V.lineNumber),
									(z.endColumn = V.column),
									(U = -1);
							}
						},
						onArrayBegin: (H, q) => {
							const V = [];
							F(V, H, q), B.push(O), (O = V), (R = null);
						},
						onArrayEnd: (H, q) => {
							if (
								((O = B.pop()),
								B.length === U + 1 || (B.length === U + 2 && A !== null))
							) {
								const V =
									B.length === U + 1
										? N[N.length - 1]
										: A.overrides[A.overrides.length - 1];
								if (V) {
									const G = D.getPositionAt(H + q);
									(V.valueRange = Object.assign(V.valueRange, {
										endLineNumber: G.lineNumber,
										endColumn: G.column,
									})),
										(V.range = Object.assign(V.range, {
											endLineNumber: G.lineNumber,
											endColumn: G.column,
										}));
								}
							}
						},
						onLiteralValue: F,
						onError: (H) => {
							const q = N[N.length - 1];
							q && (o(q.range) || o(q.keyRange) || o(q.valueRange)) && N.pop();
						},
					};
					return (
						D.isDisposed() || (0, w.$ko)(D.getValue(), x),
						N.length > 0
							? [
									{
										sections: [{ settings: N }],
										title: "",
										titleRange: e.$WZ,
										range: z,
									},
								]
							: []
					);
				}
				class y extends b {
					constructor() {
						super(...arguments), (this.H = []);
					}
					get configurationGroups() {
						return this.H;
					}
					F() {
						super.F(), (this.H = l(this.w, (M, N) => N.length === 0));
					}
					C(M, N) {
						return M === "settings" && N.length === 1;
					}
				}
				e.$ZZ = y;
				class $ extends E.$1c {
					constructor(M, N, A) {
						super(),
							(this.r = M),
							(this.target = N),
							(this.configurationService = A),
							(this.n = new Map()),
							(this.q = this.D(new i.$re())),
							(this.onDidChange = this.q.event),
							this.D(
								A.onDidChangeConfiguration((R) => {
									R.source === r.ConfigurationTarget.DEFAULT &&
										(this.u(), this.q.fire());
								}),
							);
					}
					getContent(M = !1) {
						return (!this.h || M) && this.t(), this.h;
					}
					getContentWithoutMostCommonlyUsed(M = !1) {
						return (!this.j || M) && this.t(), this.j;
					}
					getSettingsGroups(M = !1) {
						return (!this.f || M) && this.t(), this.f;
					}
					t() {
						(this.f = this.w()),
							(this.h = this.M(this.f, 0)),
							(this.j = this.M(this.f, 1));
					}
					u() {
						(this.h = void 0), (this.j = void 0), (this.f = void 0);
					}
					w() {
						const M = this.getRegisteredGroups();
						return this.z(M), [this.C(), ...M];
					}
					getRegisteredGroups() {
						const M = h.$Io.as(u.$No.Configuration).getConfigurations().slice(),
							N = this.G(
								M.sort(this.L).reduce((A, R, O, B) => this.F(R, A, B), []),
							);
						return this.y(N);
					}
					y(M) {
						return (
							M.forEach((N) => {
								N.sections.forEach((A) => {
									A.settings.sort((R, O) => R.key.localeCompare(O.key));
								});
							}),
							M
						);
					}
					z(M) {
						this.n = new Map();
						for (const N of M)
							for (const A of N.sections)
								for (const R of A.settings) this.n.set(R.key, R);
					}
					C() {
						const M = (0, t.$Lb)(
							this.r.map((N) => {
								const A = this.n.get(N);
								return A
									? {
											description: A.description,
											key: A.key,
											value: A.value,
											keyRange: e.$WZ,
											range: e.$WZ,
											valueRange: e.$WZ,
											overrides: [],
											scope: u.ConfigurationScope.RESOURCE,
											type: A.type,
											enum: A.enum,
											enumDescriptions: A.enumDescriptions,
											descriptionRanges: [],
										}
									: null;
							}),
						);
						return {
							id: "mostCommonlyUsed",
							range: e.$WZ,
							title: m.localize(12588, null),
							titleRange: e.$WZ,
							sections: [{ settings: M }],
						};
					}
					F(M, N, A, R, O) {
						O = O || {};
						let B = M.title;
						if (!B) {
							const U = A.find((z) => z.id === M.id && z.title);
							U && (B = U.title);
						}
						if (
							(B &&
								(R
									? (R.sections[R.sections.length - 1].title = B)
									: ((R = N.find(
											(U) =>
												U.title === B &&
												U.extensionInfo?.id === M.extensionInfo?.id,
										)),
										R ||
											((R = {
												sections: [{ settings: [] }],
												id: M.id || "",
												title: B || "",
												titleRange: e.$WZ,
												order: M.order,
												range: e.$WZ,
												extensionInfo: M.extensionInfo,
											}),
											N.push(R)))),
							M.properties)
						) {
							R ||
								((R = {
									sections: [{ settings: [] }],
									id: M.id || "",
									title: M.id || "",
									titleRange: e.$WZ,
									order: M.order,
									range: e.$WZ,
									extensionInfo: M.extensionInfo,
								}),
								N.push(R));
							const U = [];
							for (const z of [
								...R.sections[R.sections.length - 1].settings,
								...this.H(M),
							])
								O[z.key] || (U.push(z), (O[z.key] = !0));
							U.length && (R.sections[R.sections.length - 1].settings = U);
						}
						return M.allOf?.forEach((U) => this.F(U, N, A, R, O)), N;
					}
					G(M) {
						const N = [];
						for (const A of M)
							(A.sections = A.sections.filter((R) => R.settings.length > 0)),
								A.sections.length && N.push(A);
						return N;
					}
					H(M) {
						const N = [],
							A = M.properties,
							R = M.extensionInfo,
							O = M.extensionInfo?.id === M.id ? M.title : M.id;
						for (const B in A) {
							const U = A[B];
							if (this.J(U)) {
								const z = U.default;
								let F = U.markdownDescription || U.description || "";
								typeof F != "string" && (F = "");
								const x = F.split(`
`),
									H = u.$Xo.test(B) ? this.I(U.default) : [];
								let q;
								U.type === "array" &&
									U.items &&
									!Array.isArray(U.items) &&
									U.items.type &&
									(U.items.enum
										? (q = "enum")
										: Array.isArray(U.items.type) || (q = U.items.type));
								const V = U.type === "object" ? U.properties : void 0,
									G = U.type === "object" ? U.patternProperties : void 0,
									K = U.type === "object" ? U.additionalProperties : void 0;
								let J = U.enum,
									W = U.markdownEnumDescriptions ?? U.enumDescriptions,
									X = !!U.markdownEnumDescriptions;
								q === "enum" &&
									!Array.isArray(U.items) &&
									((J = U.items.enum),
									(W =
										U.items.markdownEnumDescriptions ??
										U.items.enumDescriptions),
									(X = !!U.items.markdownEnumDescriptions));
								let Y = !1;
								U.type === "object" &&
									!U.additionalProperties &&
									U.properties &&
									Object.keys(U.properties).length &&
									(Y = Object.keys(U.properties).every(
										(ee) => U.properties[ee].type === "boolean",
									));
								let ie = !1;
								u.$Xo.test(B) && (ie = !0);
								let ne;
								if (!ie) {
									const ee = U;
									ee && ee.defaultValueSource && (ne = ee.defaultValueSource);
								}
								!J &&
									(U.enumItemLabels || W || X) &&
									console.error(
										`The setting ${B} has enum-related fields, but doesn't have an enum field. This setting may render improperly in the Settings editor.`,
									),
									N.push({
										key: B,
										value: z,
										description: x,
										descriptionIsMarkdown: !!U.markdownDescription,
										range: e.$WZ,
										keyRange: e.$WZ,
										valueRange: e.$WZ,
										descriptionRanges: [],
										overrides: H,
										scope: U.scope,
										type: U.type,
										arrayItemType: q,
										objectProperties: V,
										objectPatternProperties: G,
										objectAdditionalProperties: K,
										enum: J,
										enumDescriptions: W,
										enumDescriptionsAreMarkdown: X,
										enumItemLabels: U.enumItemLabels,
										uniqueItems: U.uniqueItems,
										tags: U.tags,
										disallowSyncIgnore: U.disallowSyncIgnore,
										restricted: U.restricted,
										extensionInfo: R,
										deprecationMessage:
											U.markdownDeprecationMessage || U.deprecationMessage,
										deprecationMessageIsMarkdown:
											!!U.markdownDeprecationMessage,
										validator: (0, p.$UZ)(U),
										allKeysAreBoolean: Y,
										editPresentation: U.editPresentation,
										order: U.order,
										nonLanguageSpecificDefaultValueSource: ne,
										isLanguageTagSetting: ie,
										categoryLabel: O,
									});
							}
						}
						return N;
					}
					I(M) {
						return Object.keys(M).map((N) => ({
							key: N,
							value: M[N],
							description: [],
							descriptionIsMarkdown: !1,
							range: e.$WZ,
							keyRange: e.$WZ,
							valueRange: e.$WZ,
							descriptionRanges: [],
							overrides: [],
						}));
					}
					J(M) {
						return M.scope
							? this.target === r.ConfigurationTarget.WORKSPACE_FOLDER
								? g.$MZ.indexOf(M.scope) !== -1
								: this.target === r.ConfigurationTarget.WORKSPACE
									? g.$LZ.indexOf(M.scope) !== -1
									: !0
							: !0;
					}
					L(M, N) {
						if (typeof M.order != "number") return 1;
						if (typeof N.order != "number") return -1;
						if (M.order === N.order) {
							const A = M.title || "",
								R = N.title || "";
							return A.localeCompare(R);
						}
						return M.order - N.order;
					}
					M(M, N) {
						const A = new S();
						for (let R = N; R < M.length; R++)
							A.pushGroup(M[R], R === N, R === M.length - 1);
						return A.getContent();
					}
				}
				e.$1Z = $;
				class v extends f {
					constructor(M, N, A) {
						super(),
							(this.y = M),
							(this.z = A),
							(this.w = this.D(new i.$re())),
							(this.onDidChangeGroups = this.w.event),
							this.D(A.onDidChange(() => this.w.fire())),
							(this.u = N.object.textEditorModel),
							this.D(this.onWillDispose(() => N.dispose()));
					}
					get uri() {
						return this.y;
					}
					get target() {
						return this.z.target;
					}
					get settingsGroups() {
						return this.z.getSettingsGroups();
					}
					get r() {
						return this.settingsGroups.slice(1);
					}
					t() {
						if (this.u.isDisposed()) return;
						const M = [...this.j.values()].sort((U, z) => U.order - z.order),
							N = M.filter((U) => U.result.filterMatches.length),
							A = (0, t.$wb)(this.settingsGroups).range.endLineNumber + 2,
							{ settingsGroups: R, matches: O } = this.G(N, A),
							B = this.q(M);
						return M.length
							? {
									allGroups: this.settingsGroups,
									filteredGroups: R,
									matches: O,
									metadata: B,
								}
							: void 0;
					}
					G(M, N) {
						const A = N - 1,
							R = new S(A),
							O = [],
							B = [];
						M.length &&
							(R.pushLine(","),
							M.forEach((q) => {
								const V = this.J(q);
								O.push(V), B.push(...this.H(R, V, q.result.filterMatches));
							}));
						const U =
								R.getContent() +
								`
`,
							z = this.u.getLineCount(),
							F = new d.$kL(N, 1, N, 1),
							x = {
								text: U,
								forceMoveMarkers: !0,
								range: new C.$iL(N, 1, z, 1),
							};
						this.u.pushEditOperations([F], [x], () => [F]);
						const H = Math.min(N + 60, this.u.getLineCount());
						return (
							this.u.tokenization.forceTokenization(H),
							{ matches: B, settingsGroups: O }
						);
					}
					H(M, N, A) {
						return (
							(A = A.map((O) => ({
								setting: O.setting,
								score: O.score,
								matches:
									O.matches &&
									O.matches.map(
										(B) =>
											new C.$iL(
												B.startLineNumber - O.setting.range.startLineNumber,
												B.startColumn,
												B.endLineNumber - O.setting.range.startLineNumber,
												B.endColumn,
											),
									),
							}))),
							M.pushGroup(N),
							A.map((O) => O.matches || []).flatMap((O, B) => {
								const U = N.sections[0].settings[B];
								return O.map(
									(z) =>
										new C.$iL(
											z.startLineNumber + U.range.startLineNumber,
											z.startColumn,
											z.endLineNumber + U.range.startLineNumber,
											z.endColumn,
										),
								);
							})
						);
					}
					I(M) {
						return {
							description: M.description,
							scope: M.scope,
							type: M.type,
							enum: M.enum,
							enumDescriptions: M.enumDescriptions,
							key: M.key,
							value: M.value,
							range: M.range,
							overrides: [],
							overrideOf: M.overrideOf,
							tags: M.tags,
							deprecationMessage: M.deprecationMessage,
							keyRange: e.$WZ,
							valueRange: e.$WZ,
							descriptionIsMarkdown: void 0,
							descriptionRanges: [],
						};
					}
					findValueMatches(M, N) {
						return [];
					}
					getPreference(M) {
						for (const N of this.settingsGroups)
							for (const A of N.sections)
								for (const R of A.settings) if (R.key === M) return R;
					}
					J(M) {
						return {
							id: M.id,
							range: e.$WZ,
							title: M.label,
							titleRange: e.$WZ,
							sections: [
								{
									settings: M.result.filterMatches.map((N) =>
										this.I(N.setting),
									),
								},
							],
						};
					}
				}
				e.$2Z = v;
				class S {
					get f() {
						return this.d.length + this.j;
					}
					get h() {
						return this.d[this.d.length - 1] || "";
					}
					constructor(M = 0) {
						(this.j = M), (this.d = []);
					}
					pushLine(...M) {
						this.d.push(...M);
					}
					pushGroup(M, N, A) {
						this.d.push(N ? "[{" : "{");
						const R = this.k(M, "  ");
						if (R) {
							const O = R.range.endLineNumber - this.j,
								B = this.d[O - 2];
							this.d[O - 2] = B.substring(0, B.length - 1);
						}
						this.d.push(A ? "}]" : "},");
					}
					k(M, N) {
						let A = null;
						const R = this.f + 1;
						for (const O of M.sections) {
							if (O.title) {
								const B = this.f + 1;
								this.q([O.title], N, this.d),
									(O.titleRange = {
										startLineNumber: B,
										startColumn: 1,
										endLineNumber: this.f,
										endColumn: this.h.length,
									});
							}
							if (O.settings.length)
								for (const B of O.settings) this.n(B, N), (A = B);
						}
						return (
							(M.range = {
								startLineNumber: R,
								startColumn: 1,
								endLineNumber: this.f,
								endColumn: this.h.length,
							}),
							A
						);
					}
					getContent() {
						return this.d.join(`
`);
					}
					n(M, N) {
						const A = this.f + 1;
						this.o(M, N);
						let R = N;
						const O = JSON.stringify(M.key);
						(R += O),
							(M.keyRange = {
								startLineNumber: this.f + 1,
								startColumn: R.indexOf(M.key) + 1,
								endLineNumber: this.f + 1,
								endColumn: M.key.length,
							}),
							(R += ": ");
						const B = this.f + 1;
						this.p(M, R, N),
							(M.valueRange = {
								startLineNumber: B,
								startColumn: R.length + 1,
								endLineNumber: this.f,
								endColumn: this.h.length + 1,
							}),
							(this.d[this.d.length - 1] += ","),
							this.d.push(""),
							(M.range = {
								startLineNumber: A,
								startColumn: 1,
								endLineNumber: this.f,
								endColumn: this.h.length,
							});
					}
					o(M, N) {
						const A = (B) => B.replace(/`#(.*)#`/g, (U, z) => `\`${z}\``);
						M.descriptionRanges = [];
						const R = N + "// ",
							O = M.deprecationMessage?.split(/\n/g) ?? [];
						for (let B of [...O, ...M.description])
							(B = A(B)),
								this.d.push(R + B),
								M.descriptionRanges.push({
									startLineNumber: this.f,
									startColumn: this.h.indexOf(B) + 1,
									endLineNumber: this.f,
									endColumn: this.h.length,
								});
						M.enum &&
							M.enumDescriptions?.some((B) => !!B) &&
							M.enumDescriptions.forEach((B, U) => {
								const z = P(String(M.enum[U])),
									F = B ? `${z}: ${A(B)}` : z,
									x = F.split(/\n/g);
								(x[0] = " - " + x[0]),
									this.d.push(...x.map((H) => `${N}// ${H}`)),
									M.descriptionRanges.push({
										startLineNumber: this.f,
										startColumn: this.h.indexOf(F) + 1,
										endLineNumber: this.f,
										endColumn: this.h.length,
									});
							});
					}
					p(M, N, A) {
						const R = JSON.stringify(M.value, null, A);
						if (R && typeof M.value == "object")
							if (M.overrides && M.overrides.length) {
								this.d.push(N + " {");
								for (const U of M.overrides) this.n(U, A + A), this.d.pop();
								const O = M.overrides[M.overrides.length - 1],
									B = this.d[O.range.endLineNumber - 2];
								(this.d[O.range.endLineNumber - 2] = B.substring(
									0,
									B.length - 1,
								)),
									this.d.push(A + "}");
							} else {
								const O = R.split(`
`);
								this.d.push(N + O[0]);
								for (let B = 1; B < O.length; B++) this.d.push(A + O[B]);
							}
						else this.d.push(N + R);
					}
					q(M, N, A) {
						for (const R of M) A.push(N + "// " + R);
					}
				}
				class I extends S {
					constructor(M = "	") {
						super(0), (this.r = M);
					}
					pushGroup(M) {
						this.k(M, this.r);
					}
				}
				class T extends E.$1c {
					constructor(M) {
						super(),
							(this.j = M),
							(this.f = null),
							(this.h = this.D(new i.$re())),
							(this.onDidContentChanged = this.h.event),
							this.D(
								M.onDidChange(() => {
									(this.f = null), this.h.fire();
								}),
							);
					}
					get content() {
						if (this.f === null) {
							const M = new I();
							M.pushLine("{");
							for (const N of this.j.getRegisteredGroups()) M.pushGroup(N);
							M.pushLine("}"), (this.f = M.getContent());
						}
						return this.f;
					}
				}
				e.$3Z = T;
				function P(D) {
					return D && D.replace(/\n/g, "\\n").replace(/\r/g, "\\r");
				}
				function k(D) {
					return (
						"// " +
						m.localize(12589, null) +
						`
` +
						D.getDefaultKeybindingsContent()
					);
				}
				let L = class {
					constructor(M, N) {
						(this.f = M), (this.h = N);
					}
					get uri() {
						return this.f;
					}
					get content() {
						return this.d || (this.d = k(this.h)), this.d;
					}
					getPreference() {
						return null;
					}
					dispose() {}
				};
				(e.$5Z = L), (e.$5Z = L = Ne([j(1, a.$uZ)], L));
			},
		),
		define(
			de[3539],
			he([
				1, 0, 131, 24, 37, 132, 5, 3, 468, 119, 157, 33, 109, 10, 20, 1013,
				1505, 838,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				var f, b;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$kEc = e.$jEc = e.$iEc = void 0),
					(w = mt(w));
				let s = class extends d.$1c {
					constructor(k, L, D, M) {
						super(),
							(this.g = k),
							(this.h = L),
							(this.j = D),
							(this.n = M),
							(this.c = this.j.getInstalled(h.ExtensionType.User).then((N) =>
								N.filter((A) => this.n.isEnabled(A))
									.filter(
										(A) =>
											A.manifest &&
											A.manifest.contributes &&
											A.manifest.contributes.configuration,
									)
									.filter((A) => !!A.identifier.uuid),
							));
					}
					get q() {
						return this.h.getValue().workbench.settings
							.enableNaturalLanguageSearch;
					}
					getRemoteSearchProvider(k) {
						if (this.q)
							return (
								(this.f ??= this.g.createInstance(T)),
								this.f.setFilter(k),
								this.f
							);
					}
					getLocalSearchProvider(k) {
						return this.g.createInstance(y, k);
					}
				};
				(e.$iEc = s),
					(e.$iEc = s =
						Ne([j(0, C.$Li), j(1, c.$gj), j(2, r.$Hp), j(3, u.$IQb)], s));
				function l(P) {
					return P.replace(/[":]/g, " ").replace(/  /g, " ").trim();
				}
				let y = class {
					static {
						f = this;
					}
					static {
						this.EXACT_MATCH_SCORE = 1e4;
					}
					static {
						this.START_SCORE = 1e3;
					}
					constructor(k, L) {
						(this.c = k), (this.d = L), (this.c = l(this.c));
					}
					searchModel(k, L) {
						if (!this.c) return Promise.resolve(null);
						let D = f.START_SCORE;
						const M = (R) => {
								const { matches: O, matchType: B } = new $(
										this.c,
										R,
										!0,
										!0,
										(z, F) => k.findValueMatches(z, F),
										this.d,
									),
									U = this.c === R.key ? f.EXACT_MATCH_SCORE : D--;
								return O.length ? { matches: O, matchType: B, score: U } : null;
							},
							N = k.filterSettings(this.c, this.e(this.c), M),
							A = N.find((R) => R.score === f.EXACT_MATCH_SCORE);
						return A
							? Promise.resolve({ filterMatches: [A], exactMatch: !0 })
							: Promise.resolve({ filterMatches: N });
					}
					e(k) {
						const L = w.$xf(k, !1, { global: !0 });
						return (D) => D.id !== "defaultOverrides" && L.test(D.title);
					}
				};
				(e.$jEc = y), (e.$jEc = y = f = Ne([j(1, c.$gj)], y));
				let $ = class {
					constructor(k, L, D, M, N, A) {
						(this.c = M),
							(this.d = A),
							(this.matchType = t.SettingMatchType.None),
							(this.matches = (0, i.$Qb)(
								this.e(k, L),
								(R) =>
									`${R.startLineNumber}_${R.startColumn}_${R.endLineNumber}_${R.endColumn}_`,
							));
					}
					e(k, L) {
						return this.g(k, L);
					}
					f(k) {
						return k
							.replace(/[-._]/g, " ")
							.replace(/([a-z]+)([A-Z])/g, "$1 $2")
							.replace(/([A-Za-z]+)(\d+)/g, "$1 $2")
							.replace(/(\d+)([A-Za-z]+)/g, "$1 $2")
							.toLowerCase();
					}
					g(k, L) {
						const D = new Map(),
							M = new Map(),
							N = new Map(),
							A = new Set(k.split(" ")),
							R = this.f(L.key);
						for (const F of A) {
							const x = (0, E.$Yk)(F, R, !0);
							x?.length &&
								M.set(
									F,
									x.map((H) => this.h(L, H)),
								);
						}
						M.size === A.size
							? (this.matchType |= t.SettingMatchType.KeyMatch)
							: M.clear();
						const O = (0, E.$Uk)(k, L.key);
						if (
							(O?.length &&
								(M.set(
									L.key,
									O.map((F) => this.h(L, F)),
								),
								(this.matchType |= t.SettingMatchType.KeyMatch)),
							L.overrides?.length &&
								this.matchType & t.SettingMatchType.KeyMatch)
						)
							return (
								(this.matchType = t.SettingMatchType.LanguageTagSettingMatch),
								[...(M.size ? Array.from(M.values()).flat() : [])]
							);
						if (this.c) {
							for (const F of A)
								for (let x = 0; x < L.description.length; x++) {
									const H = (0, E.$Uk)(F, L.description[x]);
									H?.length &&
										D.set(
											F,
											H.map((q) => this.i(L, q, x)),
										);
								}
							D.size === A.size
								? (this.matchType |= t.SettingMatchType.DescriptionOrValueMatch)
								: D.clear();
						}
						if (L.enum?.length) {
							for (const F of L.enum)
								if (typeof F == "string") {
									N.clear();
									for (const x of A) {
										const H = (0, E.$Uk)(x, F);
										H?.length &&
											N.set(
												x,
												H.map((q) => this.j(L, q)),
											);
									}
									if (N.size === A.size) {
										this.matchType |=
											t.SettingMatchType.DescriptionOrValueMatch;
										break;
									} else N.clear();
								}
						} else {
							const F = this.d.getValue(L.key);
							if (typeof F == "string") {
								for (const x of A) {
									const H = (0, E.$Uk)(x, F);
									H?.length &&
										N.set(
											x,
											H.map((q) => this.j(L, q)),
										);
								}
								N.size === A.size
									? (this.matchType |=
											t.SettingMatchType.DescriptionOrValueMatch)
									: N.clear();
							}
						}
						const B = D.size ? Array.from(D.values()).flat() : [],
							U = M.size ? Array.from(M.values()).flat() : [],
							z = N.size ? Array.from(N.values()).flat() : [];
						return [...B, ...U, ...z];
					}
					h(k, L) {
						return {
							startLineNumber: k.keyRange.startLineNumber,
							startColumn: k.keyRange.startColumn + L.start,
							endLineNumber: k.keyRange.startLineNumber,
							endColumn: k.keyRange.startColumn + L.end,
						};
					}
					i(k, L, D) {
						const M = k.descriptionRanges[D];
						return M
							? {
									startLineNumber: M.startLineNumber,
									startColumn: M.startColumn + L.start,
									endLineNumber: M.endLineNumber,
									endColumn: M.startColumn + L.end,
								}
							: o.$WZ;
					}
					j(k, L) {
						return {
							startLineNumber: k.valueRange.startLineNumber,
							startColumn: k.valueRange.startColumn + L.start + 1,
							endLineNumber: k.valueRange.startLineNumber,
							endColumn: k.valueRange.startColumn + L.end + 1,
						};
					}
				};
				(e.$kEc = $), (e.$kEc = $ = Ne([j(5, c.$gj)], $));
				class v {
					constructor(k) {
						(this.f = k), (this.c = []), (this.d = {});
					}
					updateModel(k) {
						k !== this.e && ((this.e = k), this.g());
					}
					g() {
						if (
							((this.c = []), (this.d = {}), !(!this.e || !this.f.isEnabled()))
						) {
							for (const k of this.e.settingsGroups)
								if (k.id !== "mostCommonlyUsed")
									for (const L of k.sections)
										for (const D of L.settings)
											this.c.push(D.key), (this.d[D.key] = D);
						}
					}
					getSettingKeys() {
						return this.c;
					}
					getSettingsRecord() {
						return this.d;
					}
				}
				let S = class {
					static {
						b = this;
					}
					static {
						this.c = 0.73;
					}
					static {
						this.d = 5;
					}
					constructor(k) {
						(this.g = k), (this.f = ""), (this.e = new v(k));
					}
					setFilter(k) {
						this.f = l(k);
					}
					async searchModel(k, L) {
						return !this.f || !this.g.isEnabled()
							? null
							: (this.e.updateModel(k), { filterMatches: await this.h(L) });
					}
					async h(k) {
						const L = this.e.getSettingsRecord(),
							D = [],
							M = await this.g.getRelatedInformation(
								this.f,
								[g.RelatedInformationType.SettingInformation],
								k ?? a.CancellationToken.None,
							);
						M.sort((N, A) => A.weight - N.weight);
						for (const N of M) {
							if (N.weight < b.c || D.length === b.d) break;
							const A = N.setting;
							D.push({
								setting: L[A],
								matches: [L[A].range],
								matchType: t.SettingMatchType.RemoteMatch,
								score: N.weight,
							});
						}
						return D;
					}
				};
				S = b = Ne([j(0, g.$97)], S);
				class I {
					static {
						this.c = 50;
					}
					static {
						this.d = 0.7;
					}
					static {
						this.e = 5;
					}
					constructor() {
						(this.g = ""), (this.h = []), (this.i = {});
					}
					setFilter(k) {
						this.g = l(k);
					}
					keyToLabel(k) {
						return k
							.replace(/[-._]/g, " ")
							.replace(/([a-z]+)([A-Z])/g, "$1 $2")
							.replace(/([A-Za-z]+)(\d+)/g, "$1 $2")
							.replace(/(\d+)([A-Za-z]+)/g, "$1 $2")
							.toLowerCase();
					}
					settingItemToEmbeddingString(k) {
						let L = `Setting Id: ${k.key}
`;
						return (
							(L += `Label: ${this.keyToLabel(k.key)}
`),
							(L += `Description: ${k.description}
`),
							L
						);
					}
					async searchModel(k, L) {
						if (!this.g) return null;
						if (this.f !== k) {
							(this.f = k), (this.h = []), (this.i = {});
							for (const D of k.settingsGroups)
								if (D.id !== "mostCommonlyUsed")
									for (const M of D.sections)
										for (const N of M.settings)
											this.h.push({
												key: N.key,
												textChunks: [this.settingItemToEmbeddingString(N)],
											}),
												(this.i[N.key] = N);
						}
						return { filterMatches: await this.j(L) };
					}
					async j(k) {
						const L = [],
							D = new p.$8pb();
						D.updateDocuments(this.h);
						const M = D.calculateScores(this.g, k ?? a.CancellationToken.None);
						M.sort((A, R) => R.score - A.score);
						const N = M[0].score;
						if (N < I.c) return [];
						for (const A of M) {
							if (A.score / N < I.d || L.length === I.e) break;
							const R = A.key;
							L.push({
								setting: this.i[R],
								matches: [this.i[R].range],
								matchType: t.SettingMatchType.RemoteMatch,
								score: A.score,
							});
						}
						return L;
					}
				}
				let T = class {
					constructor(k) {
						(this.f = k), (this.e = "");
					}
					g() {
						this.f.isEnabled() && (this.c ??= new S(this.f)),
							(this.d ??= new I());
					}
					setFilter(k) {
						this.g(),
							(this.e = k),
							this.c && this.c.setFilter(k),
							this.d.setFilter(k);
					}
					searchModel(k, L) {
						return this.e
							? this.c
								? this.c
										.searchModel(k, L)
										.then((D) =>
											D?.filterMatches.length ? D : this.d.searchModel(k, L),
										)
								: this.d.searchModel(k, L)
							: Promise.resolve(null);
					}
				};
				(T = Ne([j(0, g.$97)], T)),
					(0, n.$lK)(m.$hBc, s, n.InstantiationType.Delayed);
			},
		),
		
import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/event.js';
import '../../../../base/common/json.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/core/selection.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/registry/common/platform.js';
import '../../../common/editor/editorModel.js';
import './preferences.js';
import '../../configuration/common/configuration.js';
import './preferencesValidation.js';
define(
			de[838],
			he([
				1, 0, 24, 6, 187, 3, 17, 104, 4, 10, 81, 39, 30, 416, 131, 261, 1856,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*event*/,
 w /*json*/,
 E /*lifecycle*/,
 C /*range*/,
 d /*selection*/,
 m /*nls*/,
 r /*configuration*/,
 u /*configurationRegistry*/,
 a /*keybinding*/,
 h /*platform*/,
 c /*editorModel*/,
 n /*preferences*/,
 g /*configuration*/,
 p /*preferencesValidation*/) {
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
		)

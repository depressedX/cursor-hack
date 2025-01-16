define(de[250], he([1, 0, 6, 2217, 30]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Jo = void 0),
				(w = mt(w)),
				(e.$Jo = { JSONContribution: "base.contributions.json" });
			function E(m) {
				return m.length > 0 && m.charAt(m.length - 1) === "#"
					? m.substring(0, m.length - 1)
					: m;
			}
			class C {
				constructor() {
					(this.b = new t.$re()),
						(this.onDidChangeSchema = this.b.event),
						(this.a = {});
				}
				registerSchema(r, u) {
					(this.a[E(r)] = u), this.b.fire(r);
				}
				notifySchemaChanged(r) {
					this.b.fire(r);
				}
				getSchemaContributions() {
					return { schemas: this.a };
				}
				getSchemaContent(r) {
					const u = this.a[r];
					return u ? (0, i.$dk)(u) : void 0;
				}
				hasSchemaContent(r) {
					return !!this.a[r];
				}
			}
			const d = new C();
			w.$Io.add(e.$Jo.JSONContribution, d);
		}),
		define(
			de[81],
			he([1, 0, 24, 6, 28, 4, 10, 250, 30]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Xo =
						e.$Wo =
						e.$Vo =
						e.$Uo =
						e.$To =
						e.$So =
						e.$Ro =
						e.$Qo =
						e.$Po =
						e.$Oo =
						e.ConfigurationScope =
						e.$No =
						e.EditPresentationTypes =
							void 0),
					(e.$Yo = g),
					(e.$Zo = p),
					(e.$1o = o),
					(e.$2o = b),
					(e.$3o = s),
					(e.$4o = l),
					(e.$5o = y),
					(w = mt(w)),
					(E = mt(E));
				var r;
				(function ($) {
					($.Multiline = "multilineText"), ($.Singleline = "singlelineText");
				})(r || (e.EditPresentationTypes = r = {})),
					(e.$No = { Configuration: "base.contributions.configuration" });
				var u;
				(function ($) {
					($[($.APPLICATION = 1)] = "APPLICATION"),
						($[($.MACHINE = 2)] = "MACHINE"),
						($[($.WINDOW = 3)] = "WINDOW"),
						($[($.RESOURCE = 4)] = "RESOURCE"),
						($[($.LANGUAGE_OVERRIDABLE = 5)] = "LANGUAGE_OVERRIDABLE"),
						($[($.MACHINE_OVERRIDABLE = 6)] = "MACHINE_OVERRIDABLE");
				})(u || (e.ConfigurationScope = u = {})),
					(e.$Oo = { properties: {}, patternProperties: {} }),
					(e.$Po = { properties: {}, patternProperties: {} }),
					(e.$Qo = { properties: {}, patternProperties: {} }),
					(e.$Ro = { properties: {}, patternProperties: {} }),
					(e.$So = { properties: {}, patternProperties: {} }),
					(e.$To = { properties: {}, patternProperties: {} }),
					(e.$Uo = "vscode://schemas/settings/resourceLanguage"),
					(e.$Vo = "vscode://schemas/settings/configurationDefaults");
				const a = m.$Io.as(d.$Jo.JSONContribution);
				class h {
					constructor() {
						(this.a = []),
							(this.i = new Set()),
							(this.j = new i.$re()),
							(this.onDidSchemaChange = this.j.event),
							(this.k = new i.$re()),
							(this.onDidUpdateConfiguration = this.k.event),
							(this.b = new Map()),
							(this.c = {
								id: "defaultOverrides",
								title: E.localize(1674, null),
								properties: {},
							}),
							(this.d = [this.c]),
							(this.h = {
								properties: {},
								patternProperties: {},
								additionalProperties: !0,
								allowTrailingCommas: !0,
								allowComments: !0,
							}),
							(this.e = {}),
							(this.f = new Map()),
							(this.g = {}),
							a.registerSchema(e.$Uo, this.h),
							this.z();
					}
					registerConfiguration(v, S = !0) {
						this.registerConfigurations([v], S);
					}
					registerConfigurations(v, S = !0) {
						const I = new Set();
						this.r(v, S, I),
							a.registerSchema(e.$Uo, this.h),
							this.j.fire(),
							this.k.fire({ properties: I });
					}
					deregisterConfigurations(v) {
						const S = new Set();
						this.s(v, S),
							a.registerSchema(e.$Uo, this.h),
							this.j.fire(),
							this.k.fire({ properties: S });
					}
					updateConfigurations({ add: v, remove: S }) {
						const I = new Set();
						this.s(S, I),
							this.r(v, !1, I),
							a.registerSchema(e.$Uo, this.h),
							this.j.fire(),
							this.k.fire({ properties: I });
					}
					registerDefaultConfigurations(v) {
						const S = new Set();
						this.l(v, S),
							this.j.fire(),
							this.k.fire({ properties: S, defaultsOverrides: !0 });
					}
					l(v, S) {
						this.a.push(...v);
						const I = [];
						for (const { overrides: T, source: P } of v)
							for (const k in T) {
								S.add(k);
								const L =
										this.b.get(k) ??
										this.b.set(k, { configurationDefaultOverrides: [] }).get(k),
									D = T[k];
								if (
									(L.configurationDefaultOverrides.push({
										value: D,
										source: P,
									}),
									e.$Xo.test(k))
								) {
									const M = this.o(
										k,
										D,
										P,
										L.configurationDefaultOverrideValue,
									);
									if (!M) continue;
									(L.configurationDefaultOverrideValue = M),
										this.n(k, M, P),
										I.push(...g(k));
								} else {
									const M = this.p(
										k,
										D,
										P,
										L.configurationDefaultOverrideValue,
									);
									if (!M) continue;
									L.configurationDefaultOverrideValue = M;
									const N = this.e[k];
									N && (this.A(k, N), this.w(k, N));
								}
							}
						this.q(I);
					}
					deregisterDefaultConfigurations(v) {
						const S = new Set();
						this.m(v, S),
							this.j.fire(),
							this.k.fire({ properties: S, defaultsOverrides: !0 });
					}
					m(v, S) {
						for (const I of v) {
							const T = this.a.indexOf(I);
							T !== -1 && this.a.splice(T, 1);
						}
						for (const { overrides: I, source: T } of v)
							for (const P in I) {
								const k = this.b.get(P);
								if (!k) continue;
								const L = k.configurationDefaultOverrides.findIndex((D) =>
									T ? D.source?.id === T.id : D.value === I[P],
								);
								if (L !== -1) {
									if (
										(k.configurationDefaultOverrides.splice(L, 1),
										k.configurationDefaultOverrides.length === 0 &&
											this.b.delete(P),
										e.$Xo.test(P))
									) {
										let D;
										for (const M of k.configurationDefaultOverrides)
											D = this.o(P, M.value, M.source, D);
										D && !w.$yg(D.value)
											? ((k.configurationDefaultOverrideValue = D),
												this.n(P, D, T))
											: (this.b.delete(P),
												delete this.e[P],
												delete this.c.properties[P]);
									} else {
										let D;
										for (const N of k.configurationDefaultOverrides)
											D = this.p(P, N.value, N.source, D);
										k.configurationDefaultOverrideValue = D;
										const M = this.e[P];
										M && (this.A(P, M), this.w(P, M));
									}
									S.add(P);
								}
							}
						this.y();
					}
					n(v, S, I) {
						const T = {
							type: "object",
							default: S.value,
							description: E.localize(1675, null, (0, C.$qj)(v)),
							$ref: e.$Uo,
							defaultDefaultValue: S.value,
							source: I,
							defaultValueSource: I,
						};
						(this.e[v] = T), (this.c.properties[v] = T);
					}
					o(v, S, I, T) {
						const P = T?.value || {},
							k = T?.source ?? new Map();
						if (!(k instanceof Map)) {
							console.error("objectConfigurationSources is not a Map");
							return;
						}
						for (const L of Object.keys(S)) {
							const D = S[L];
							if (w.$ng(D) && (w.$sg(P[L]) || w.$ng(P[L]))) {
								if (((P[L] = { ...(P[L] ?? {}), ...D }), I))
									for (const N in D) k.set(`${L}.${N}`, I);
							} else (P[L] = D), I ? k.set(L, I) : k.delete(L);
						}
						return { value: P, source: k };
					}
					p(v, S, I, T) {
						const P = this.e[v],
							k = T?.value ?? P?.defaultDefaultValue;
						let L = I;
						if (
							w.$ng(S) &&
							((P !== void 0 && P.type === "object") ||
								(P === void 0 && (w.$sg(k) || w.$ng(k))))
						) {
							if (((L = T?.source ?? new Map()), !(L instanceof Map))) {
								console.error("defaultValueSource is not a Map");
								return;
							}
							for (const M in S) I && L.set(`${v}.${M}`, I);
							S = { ...(w.$ng(k) ? k : {}), ...S };
						}
						return { value: S, source: L };
					}
					deltaConfiguration(v) {
						let S = !1;
						const I = new Set();
						v.removedDefaults && (this.m(v.removedDefaults, I), (S = !0)),
							v.addedDefaults && (this.l(v.addedDefaults, I), (S = !0)),
							v.removedConfigurations && this.s(v.removedConfigurations, I),
							v.addedConfigurations && this.r(v.addedConfigurations, !1, I),
							this.j.fire(),
							this.k.fire({ properties: I, defaultsOverrides: S });
					}
					notifyConfigurationSchemaUpdated(...v) {
						this.j.fire();
					}
					registerOverrideIdentifiers(v) {
						this.q(v), this.j.fire();
					}
					q(v) {
						for (const S of v) this.i.add(S);
						this.y();
					}
					r(v, S, I) {
						v.forEach((T) => {
							this.u(T, S, T.extensionInfo, T.restrictedProperties, void 0, I),
								this.d.push(T),
								this.v(T);
						});
					}
					s(v, S) {
						const I = (T) => {
							if (T.properties)
								for (const P in T.properties) {
									S.add(P);
									const k = this.e[P];
									k?.policy?.name && this.f.delete(k.policy.name),
										delete this.e[P],
										this.x(P, T.properties[P]);
								}
							T.allOf?.forEach((P) => I(P));
						};
						for (const T of v) {
							I(T);
							const P = this.d.indexOf(T);
							P !== -1 && this.d.splice(P, 1);
						}
					}
					u(v, S = !0, I, T, P = u.WINDOW, k) {
						P = w.$ug(v.scope) ? P : v.scope;
						const L = v.properties;
						if (L)
							for (const M in L) {
								const N = L[M];
								if (S && b(M, N)) {
									delete L[M];
									continue;
								}
								if (
									((N.source = I),
									(N.defaultDefaultValue = L[M].default),
									this.A(M, N),
									e.$Xo.test(M)
										? (N.scope = void 0)
										: ((N.scope = w.$ug(N.scope) ? P : N.scope),
											(N.restricted = w.$ug(N.restricted)
												? !!T?.includes(M)
												: N.restricted)),
									L[M].hasOwnProperty("included") && !L[M].included)
								) {
									(this.g[M] = L[M]), delete L[M];
									continue;
								} else
									(this.e[M] = L[M]),
										L[M].policy?.name && this.f.set(L[M].policy.name, M);
								!L[M].deprecationMessage &&
									L[M].markdownDeprecationMessage &&
									(L[M].deprecationMessage = L[M].markdownDeprecationMessage),
									k.add(M);
							}
						const D = v.allOf;
						if (D) for (const M of D) this.u(M, S, I, T, P, k);
					}
					getConfigurations() {
						return this.d;
					}
					getConfigurationProperties() {
						return this.e;
					}
					getPolicyConfigurations() {
						return this.f;
					}
					getExcludedConfigurationProperties() {
						return this.g;
					}
					getRegisteredDefaultConfigurations() {
						return [...this.a];
					}
					getConfigurationDefaultsOverrides() {
						const v = new Map();
						for (const [S, I] of this.b)
							I.configurationDefaultOverrideValue &&
								v.set(S, I.configurationDefaultOverrideValue);
						return v;
					}
					v(v) {
						const S = (I) => {
							const T = I.properties;
							if (T) for (const k in T) this.w(k, T[k]);
							I.allOf?.forEach(S);
						};
						S(v);
					}
					w(v, S) {
						switch (((e.$Oo.properties[v] = S), S.scope)) {
							case u.APPLICATION:
								e.$Po.properties[v] = S;
								break;
							case u.MACHINE:
								e.$Qo.properties[v] = S;
								break;
							case u.MACHINE_OVERRIDABLE:
								e.$Ro.properties[v] = S;
								break;
							case u.WINDOW:
								e.$So.properties[v] = S;
								break;
							case u.RESOURCE:
								e.$To.properties[v] = S;
								break;
							case u.LANGUAGE_OVERRIDABLE:
								(e.$To.properties[v] = S), (this.h.properties[v] = S);
								break;
						}
					}
					x(v, S) {
						switch ((delete e.$Oo.properties[v], S.scope)) {
							case u.APPLICATION:
								delete e.$Po.properties[v];
								break;
							case u.MACHINE:
								delete e.$Qo.properties[v];
								break;
							case u.MACHINE_OVERRIDABLE:
								delete e.$Ro.properties[v];
								break;
							case u.WINDOW:
								delete e.$So.properties[v];
								break;
							case u.RESOURCE:
							case u.LANGUAGE_OVERRIDABLE:
								delete e.$To.properties[v], delete this.h.properties[v];
								break;
						}
					}
					y() {
						for (const v of this.i.values()) {
							const S = `[${v}]`,
								I = {
									type: "object",
									description: E.localize(1676, null),
									errorMessage: E.localize(1677, null),
									$ref: e.$Uo,
								};
							this.A(S, I),
								(e.$Oo.properties[S] = I),
								(e.$Po.properties[S] = I),
								(e.$Qo.properties[S] = I),
								(e.$Ro.properties[S] = I),
								(e.$So.properties[S] = I),
								(e.$To.properties[S] = I);
						}
					}
					z() {
						const v = {
							type: "object",
							description: E.localize(1678, null),
							errorMessage: E.localize(1679, null),
							$ref: e.$Uo,
						};
						(e.$Oo.patternProperties[e.$Wo] = v),
							(e.$Po.patternProperties[e.$Wo] = v),
							(e.$Qo.patternProperties[e.$Wo] = v),
							(e.$Ro.patternProperties[e.$Wo] = v),
							(e.$So.patternProperties[e.$Wo] = v),
							(e.$To.patternProperties[e.$Wo] = v),
							this.j.fire();
					}
					A(v, S) {
						const I = this.b.get(v)?.configurationDefaultOverrideValue;
						let T, P;
						I &&
							(!S.disallowConfigurationDefault || !I.source) &&
							((T = I.value), (P = I.source)),
							w.$sg(T) && ((T = S.defaultDefaultValue), (P = void 0)),
							w.$sg(T) && (T = o(S.type)),
							(S.default = T),
							(S.defaultValueSource = P);
					}
				}
				const c = "\\[([^\\]]+)\\]",
					n = new RegExp(c, "g");
				(e.$Wo = `^(${c})+$`), (e.$Xo = new RegExp(e.$Wo));
				function g($) {
					const v = [];
					if (e.$Xo.test($)) {
						let S = n.exec($);
						for (; S?.length; ) {
							const I = S[1].trim();
							I && v.push(I), (S = n.exec($));
						}
					}
					return (0, t.$Qb)(v);
				}
				function p($) {
					return $.reduce((v, S) => `${v}[${S}]`, "");
				}
				function o($) {
					switch (Array.isArray($) ? $[0] : $) {
						case "boolean":
							return !1;
						case "integer":
						case "number":
							return 0;
						case "string":
							return "";
						case "array":
							return [];
						case "object":
							return {};
						default:
							return null;
					}
				}
				const f = new h();
				m.$Io.add(e.$No.Configuration, f);
				function b($, v) {
					return $.trim()
						? e.$Xo.test($)
							? E.localize(1681, null, $)
							: f.getConfigurationProperties()[$] !== void 0
								? E.localize(1682, null, $)
								: v.policy?.name &&
										f.getPolicyConfigurations().get(v.policy?.name) !== void 0
									? E.localize(
											1683,
											null,
											$,
											v.policy?.name,
											f.getPolicyConfigurations().get(v.policy?.name),
										)
									: null
						: E.localize(1680, null);
				}
				function s() {
					const $ = [],
						v = f.getConfigurationProperties();
					for (const S of Object.keys(v)) $.push([S, v[S].scope]);
					return (
						$.push(["launch", u.RESOURCE]), $.push(["task", u.RESOURCE]), $
					);
				}
				function l($) {
					const v = {};
					for (const S of $) {
						const I = S.properties;
						if (w.$ng(I)) for (const T in I) v[T] = I[T];
						S.allOf && Object.assign(v, l(S.allOf));
					}
					return v;
				}
				function y($) {
					switch ($) {
						case "application":
							return u.APPLICATION;
						case "machine":
							return u.MACHINE;
						case "resource":
							return u.RESOURCE;
						case "machine-overridable":
							return u.MACHINE_OVERRIDABLE;
						case "language-overridable":
							return u.LANGUAGE_OVERRIDABLE;
						default:
							return u.WINDOW;
					}
				}
			},
		),
		define(
			de[602],
			he([1, 0, 1525, 38, 910, 4, 81, 30]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$DAb = void 0),
					(e.$EAb = h),
					(e.$FAb = c),
					(E = mt(E)),
					(e.$DAb = Object.freeze({
						id: "editor",
						order: 5,
						type: "object",
						title: E.localize(252, null),
						scope: C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
					}));
				const m = {
					...e.$DAb,
					properties: {
						"editor.tabSize": {
							type: "number",
							default: w.$RK.tabSize,
							minimum: 1,
							markdownDescription: E.localize(
								253,
								null,
								"`#editor.detectIndentation#`",
							),
						},
						"editor.indentSize": {
							anyOf: [
								{ type: "string", enum: ["tabSize"] },
								{ type: "number", minimum: 1 },
							],
							default: "tabSize",
							markdownDescription: E.localize(254, null),
						},
						"editor.insertSpaces": {
							type: "boolean",
							default: w.$RK.insertSpaces,
							markdownDescription: E.localize(
								255,
								null,
								"`#editor.detectIndentation#`",
							),
						},
						"editor.detectIndentation": {
							type: "boolean",
							default: w.$RK.detectIndentation,
							markdownDescription: E.localize(
								256,
								null,
								"`#editor.tabSize#`",
								"`#editor.insertSpaces#`",
							),
						},
						"editor.trimAutoWhitespace": {
							type: "boolean",
							default: w.$RK.trimAutoWhitespace,
							description: E.localize(257, null),
						},
						"editor.largeFileOptimizations": {
							type: "boolean",
							default: w.$RK.largeFileOptimizations,
							description: E.localize(258, null),
						},
						"editor.wordBasedSuggestions": {
							enum: [
								"off",
								"currentDocument",
								"matchingDocuments",
								"allDocuments",
							],
							default: "matchingDocuments",
							enumDescriptions: [
								E.localize(259, null),
								E.localize(260, null),
								E.localize(261, null),
								E.localize(262, null),
							],
							description: E.localize(263, null),
						},
						"editor.semanticHighlighting.enabled": {
							enum: [!0, !1, "configuredByTheme"],
							enumDescriptions: [
								E.localize(264, null),
								E.localize(265, null),
								E.localize(266, null),
							],
							default: "configuredByTheme",
							description: E.localize(267, null),
						},
						"editor.stablePeek": {
							type: "boolean",
							default: !1,
							markdownDescription: E.localize(268, null),
						},
						"editor.maxTokenizationLineLength": {
							type: "integer",
							default: 2e4,
							description: E.localize(269, null),
						},
						"editor.experimental.asyncTokenization": {
							type: "boolean",
							default: !0,
							description: E.localize(270, null),
							tags: ["experimental"],
						},
						"editor.experimental.asyncTokenizationLogging": {
							type: "boolean",
							default: !1,
							description: E.localize(271, null),
						},
						"editor.experimental.asyncTokenizationVerification": {
							type: "boolean",
							default: !1,
							description: E.localize(272, null),
							tags: ["experimental"],
						},
						"editor.experimental.treeSitterTelemetry": {
							type: "boolean",
							default: !1,
							markdownDescription: E.localize(273, null),
							tags: ["experimental"],
						},
						"editor.language.brackets": {
							type: ["array", "null"],
							default: null,
							description: E.localize(274, null),
							items: {
								type: "array",
								items: [
									{ type: "string", description: E.localize(275, null) },
									{ type: "string", description: E.localize(276, null) },
								],
							},
						},
						"editor.language.colorizedBracketPairs": {
							type: ["array", "null"],
							default: null,
							description: E.localize(277, null),
							items: {
								type: "array",
								items: [
									{ type: "string", description: E.localize(278, null) },
									{ type: "string", description: E.localize(279, null) },
								],
							},
						},
						"diffEditor.maxComputationTime": {
							type: "number",
							default: t.$5xb.maxComputationTime,
							description: E.localize(280, null),
						},
						"diffEditor.maxFileSize": {
							type: "number",
							default: t.$5xb.maxFileSize,
							description: E.localize(281, null),
						},
						"diffEditor.renderSideBySide": {
							type: "boolean",
							default: t.$5xb.renderSideBySide,
							description: E.localize(282, null),
						},
						"diffEditor.renderSideBySideInlineBreakpoint": {
							type: "number",
							default: t.$5xb.renderSideBySideInlineBreakpoint,
							description: E.localize(283, null),
						},
						"diffEditor.useInlineViewWhenSpaceIsLimited": {
							type: "boolean",
							default: t.$5xb.useInlineViewWhenSpaceIsLimited,
							description: E.localize(284, null),
						},
						"diffEditor.renderMarginRevertIcon": {
							type: "boolean",
							default: t.$5xb.renderMarginRevertIcon,
							description: E.localize(285, null),
						},
						"diffEditor.renderGutterMenu": {
							type: "boolean",
							default: t.$5xb.renderGutterMenu,
							description: E.localize(286, null),
						},
						"diffEditor.ignoreTrimWhitespace": {
							type: "boolean",
							default: t.$5xb.ignoreTrimWhitespace,
							description: E.localize(287, null),
						},
						"diffEditor.renderIndicators": {
							type: "boolean",
							default: t.$5xb.renderIndicators,
							description: E.localize(288, null),
						},
						"diffEditor.codeLens": {
							type: "boolean",
							default: t.$5xb.diffCodeLens,
							description: E.localize(289, null),
						},
						"diffEditor.wordWrap": {
							type: "string",
							enum: ["off", "on", "inherit"],
							default: t.$5xb.diffWordWrap,
							markdownEnumDescriptions: [
								E.localize(290, null),
								E.localize(291, null),
								E.localize(292, null, "`#editor.wordWrap#`"),
							],
						},
						"diffEditor.diffAlgorithm": {
							type: "string",
							enum: ["legacy", "advanced"],
							default: t.$5xb.diffAlgorithm,
							markdownEnumDescriptions: [
								E.localize(293, null),
								E.localize(294, null),
							],
							tags: ["experimental"],
						},
						"diffEditor.hideUnchangedRegions.enabled": {
							type: "boolean",
							default: t.$5xb.hideUnchangedRegions.enabled,
							markdownDescription: E.localize(295, null),
						},
						"diffEditor.hideUnchangedRegions.revealLineCount": {
							type: "integer",
							default: t.$5xb.hideUnchangedRegions.revealLineCount,
							markdownDescription: E.localize(296, null),
							minimum: 1,
						},
						"diffEditor.hideUnchangedRegions.minimumLineCount": {
							type: "integer",
							default: t.$5xb.hideUnchangedRegions.minimumLineCount,
							markdownDescription: E.localize(297, null),
							minimum: 1,
						},
						"diffEditor.hideUnchangedRegions.contextLineCount": {
							type: "integer",
							default: t.$5xb.hideUnchangedRegions.contextLineCount,
							markdownDescription: E.localize(298, null),
							minimum: 1,
						},
						"diffEditor.experimental.showMoves": {
							type: "boolean",
							default: t.$5xb.experimental.showMoves,
							markdownDescription: E.localize(299, null),
						},
						"diffEditor.experimental.showEmptyDecorations": {
							type: "boolean",
							default: t.$5xb.experimental.showEmptyDecorations,
							description: E.localize(300, null),
						},
						"diffEditor.experimental.useTrueInlineView": {
							type: "boolean",
							default: t.$5xb.experimental.useTrueInlineView,
							description: E.localize(301, null),
						},
					},
				};
				function r(g) {
					return typeof g.type < "u" || typeof g.anyOf < "u";
				}
				for (const g of i.editorOptionsRegistry) {
					const p = g.schema;
					if (typeof p < "u")
						if (r(p)) m.properties[`editor.${g.name}`] = p;
						else
							for (const o in p)
								Object.hasOwnProperty.call(p, o) && (m.properties[o] = p[o]);
				}
				let u = null;
				function a() {
					return (
						u === null &&
							((u = Object.create(null)),
							Object.keys(m.properties).forEach((g) => {
								u[g] = !0;
							})),
						u
					);
				}
				function h(g) {
					return a()[`editor.${g}`] || !1;
				}
				function c(g) {
					return a()[`diffEditor.${g}`] || !1;
				}
				d.$Io.as(C.$No.Configuration).registerConfiguration(m);
			},
		),
		define(
			de[172],
			he([1, 0, 4, 6, 30, 266, 81]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$M = e.$0M = e.$9M = e.$8M = e.$7M = void 0),
					(t = mt(t)),
					(e.$7M = { ModesRegistry: "editor.modesRegistry" });
				class d {
					constructor() {
						(this.b = new i.$re()),
							(this.onDidChangeLanguages = this.b.event),
							(this.a = []);
					}
					registerLanguage(r) {
						return (
							this.a.push(r),
							this.b.fire(void 0),
							{
								dispose: () => {
									for (let u = 0, a = this.a.length; u < a; u++)
										if (this.a[u] === r) {
											this.a.splice(u, 1);
											return;
										}
								},
							}
						);
					}
					getLanguages() {
						return this.a;
					}
				}
				(e.$8M = d),
					(e.$9M = new d()),
					w.$Io.add(e.$7M.ModesRegistry, e.$9M),
					(e.$0M = "plaintext"),
					(e.$$M = ".txt"),
					e.$9M.registerLanguage({
						id: e.$0M,
						extensions: [e.$$M],
						aliases: [t.localize(817, null), "text"],
						mimetypes: [E.$EK.text],
					}),
					w.$Io
						.as(C.$No.Configuration)
						.registerDefaultConfigurations([
							{
								overrides: {
									"[plaintext]": {
										"editor.unicodeHighlight.ambiguousCharacters": !1,
										"editor.unicodeHighlight.invisibleCharacters": !1,
									},
								},
							},
						]);
			},
		),
		define(
			de[251],
			he([1, 0, 267, 432, 29, 6, 3, 321, 38, 61, 172, 597, 41, 2282]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				var c;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Qzb = void 0),
					(e.$Rzb = g);
				let n = class {
					static {
						c = this;
					}
					static {
						this._ttpTokenizer = (0, i.$bjb)("tokenizeToString", {
							createHTML(f) {
								return f;
							},
						});
					}
					constructor(f, b, s) {
						(this.b = f),
							(this.c = b),
							(this.d = s),
							(this.a = new E.$re()),
							(this.onDidRenderAsync = this.a.event);
					}
					dispose() {
						this.a.dispose();
					}
					render(f, b, s) {
						if (!f)
							return {
								element: document.createElement("span"),
								dispose: () => {},
							};
						const l = new C.$Zc(),
							y = l.add((0, t.$Uib)(f, { ...this.f(f, l), ...b }, s));
						return (
							y.element.classList.add("rendered-markdown"),
							{ element: y.element, dispose: () => l.dispose() }
						);
					}
					f(f, b) {
						return {
							codeBlockRenderer: async (s, l) => {
								let y;
								s
									? (y = this.c.getLanguageIdByLanguageName(s))
									: this.b.editor &&
										(y = this.b.editor.getModel()?.getLanguageId()),
									y || (y = u.$0M);
								const $ = await (0, a.$cwb)(this.c, l, y),
									v = document.createElement("span");
								if (
									((v.innerHTML = c._ttpTokenizer?.createHTML($) ?? $),
									this.b.editor)
								) {
									const S = this.b.editor.getOption(m.EditorOption.fontInfo);
									(0, d.$jsb)(v, S);
								} else
									this.b.codeBlockFontFamily &&
										(v.style.fontFamily = this.b.codeBlockFontFamily);
								return (
									this.b.codeBlockFontSize !== void 0 &&
										(v.style.fontSize = this.b.codeBlockFontSize),
									v
								);
							},
							asyncRenderCallback: () => this.a.fire(),
							actionHandler: {
								callback: (s) => g(this.d, s, f.isTrusted),
								disposables: b,
							},
						};
					}
				};
				(e.$Qzb = n), (e.$Qzb = n = c = Ne([j(1, r.$nM), j(2, h.$7rb)], n));
				async function g(o, f, b) {
					try {
						return await o.open(f, {
							fromUserGesture: !0,
							allowContributedOpeners: !0,
							allowCommands: p(b),
						});
					} catch (s) {
						return (0, w.$4)(s), !1;
					}
				}
				function p(o) {
					return o === !0
						? !0
						: o && Array.isArray(o.enabledCommands)
							? o.enabledCommands
							: !1;
				}
			},
		),
		define(
			de[2770],
			he([
				1, 0, 3, 6, 7, 39, 27, 10, 38, 160, 235, 276, 41, 5, 251, 94, 4, 12, 91,
				127, 2261,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$y$b = void 0),
					(w = mt(w));
				const s = w.$;
				var l;
				(function (S) {
					(S[(S.PointerSize = 3)] = "PointerSize"),
						(S[(S.HoverBorderWidth = 2)] = "HoverBorderWidth"),
						(S[(S.HoverWindowEdgeMargin = 2)] = "HoverWindowEdgeMargin");
				})(l || (l = {}));
				let y = class extends u.$Uhb {
					get Q() {
						return w.getWindow(this.r.targetElements[0]);
					}
					get R() {
						return w.getWindow(this.r.targetElements[0]).document
							.documentElement;
					}
					get isDisposed() {
						return this.t;
					}
					get isMouseIn() {
						return this.b.isMouseIn;
					}
					get domNode() {
						return this.c.containerDomNode;
					}
					get onDispose() {
						return this.S.event;
					}
					get onRequestLayout() {
						return this.U.event;
					}
					get anchor() {
						return this.w === r.HoverPosition.BELOW
							? a.AnchorPosition.BELOW
							: a.AnchorPosition.ABOVE;
					}
					get x() {
						return this.L;
					}
					get y() {
						return this.M;
					}
					get isLocked() {
						return this.N;
					}
					set isLocked(I) {
						this.N !== I &&
							((this.N = I), this.h.classList.toggle("locked", this.N));
					}
					constructor(I, T, P, k, L, D) {
						super(),
							(this.W = T),
							(this.X = P),
							(this.Y = k),
							(this.Z = L),
							(this.ab = D),
							(this.a = new t.$Zc()),
							(this.t = !1),
							(this.J = !1),
							(this.L = 0),
							(this.M = 0),
							(this.N = !1),
							(this.O = !1),
							(this.P = !1),
							(this.S = this.D(new i.$re())),
							(this.U = this.D(new i.$re())),
							(this.s =
								I.linkHandler ||
								((B) =>
									(0, n.$Rzb)(
										this.Y,
										B,
										(0, g.$el)(I.content) ? I.content.isTrusted : void 0,
									))),
							(this.r =
								"targetElements" in I.target ? I.target : new v(I.target)),
							(this.g = I.appearance?.showPointer
								? s("div.workbench-hover-pointer")
								: void 0),
							(this.c = this.D(new r.$9hb())),
							this.c.containerDomNode.classList.add(
								"workbench-hover",
								"fadeIn",
							),
							I.appearance?.compact &&
								this.c.containerDomNode.classList.add(
									"workbench-hover",
									"compact",
								),
							I.appearance?.skipFadeInAnimation &&
								this.c.containerDomNode.classList.add("skip-fade-in"),
							I.additionalClasses &&
								this.c.containerDomNode.classList.add(...I.additionalClasses),
							I.position?.forcePosition && (this.J = !0),
							I.trapFocus && (this.O = !0),
							(this.w = I.position?.hoverPosition ?? r.HoverPosition.ABOVE),
							this.j(this.c.containerDomNode, (B) => B.stopPropagation()),
							this.u(this.c.containerDomNode, (B) => {
								B.equals(C.KeyCode.Escape) && this.dispose();
							}),
							this.D(w.$0fb(this.Q, "blur", () => this.dispose()));
						const M = s("div.hover-row.markdown-hover"),
							N = s("div.hover-contents");
						if (typeof I.content == "string")
							(N.textContent = I.content), (N.style.whiteSpace = "pre-wrap");
						else if (w.$Ygb(I.content))
							N.appendChild(I.content), N.classList.add("html-hover-contents");
						else {
							const B = I.content,
								U = this.Z.createInstance(n.$Qzb, {
									codeBlockFontFamily:
										this.X.getValue("editor").fontFamily ||
										m.EDITOR_FONT_DEFAULTS.fontFamily,
								}),
								{ element: z } = U.render(B, {
									actionHandler: {
										callback: (F) => this.s(F),
										disposables: this.a,
									},
									asyncRenderCallback: () => {
										N.classList.add("code-hover-contents"),
											this.layout(),
											this.U.fire();
									},
								});
							N.appendChild(z);
						}
						if (
							(M.appendChild(N),
							this.c.contentsDomNode.appendChild(M),
							I.actions && I.actions.length > 0)
						) {
							const B = s("div.hover-row.status-bar"),
								U = s("div.actions");
							I.actions.forEach((z) => {
								const F = this.W.lookupKeybinding(z.commandId),
									x = F ? F.getLabel() : null;
								r.$0hb.render(
									U,
									{
										label: z.label,
										commandId: z.commandId,
										run: (H) => {
											z.run(H), this.dispose();
										},
										iconClass: z.iconClass,
									},
									x,
								);
							}),
								B.appendChild(U),
								this.c.containerDomNode.appendChild(B);
						}
						(this.h = s("div.workbench-hover-container")),
							this.g && this.h.appendChild(this.g),
							this.h.appendChild(this.c.containerDomNode);
						let A;
						if (
							(I.actions && I.actions.length > 0
								? (A = !1)
								: I.persistence?.hideOnHover === void 0
									? (A =
											typeof I.content == "string" ||
											((0, g.$el)(I.content) &&
												!I.content.value.includes("](") &&
												!I.content.value.includes("</a>")))
									: (A = I.persistence.hideOnHover),
							I.appearance?.showHoverHint)
						) {
							const B = s("div.hover-row.status-bar"),
								U = s("div.info");
							(U.textContent = (0, p.localize)(
								187,
								null,
								o.$m ? "Option" : "Alt",
							)),
								B.appendChild(U),
								this.c.containerDomNode.appendChild(B);
						}
						const R = [...this.r.targetElements];
						A || R.push(this.h);
						const O = this.D(new $(R));
						if (
							(this.D(
								O.onMouseOut(() => {
									this.N || this.dispose();
								}),
							),
							A)
						) {
							const B = [...this.r.targetElements, this.h];
							(this.b = this.D(new $(B))),
								this.D(
									this.b.onMouseOut(() => {
										this.N || this.dispose();
									}),
								);
						} else this.b = O;
					}
					bb() {
						if (!this.O || this.P) return;
						this.P = !0;
						const I = this.c.containerDomNode,
							T = this.cb(this.c.containerDomNode);
						if (T) {
							const P = w.$ghb(this.h, s("div")),
								k = w.$fhb(this.h, s("div"));
							(P.tabIndex = 0),
								(k.tabIndex = 0),
								this.D(
									w.$0fb(k, "focus", (L) => {
										I.focus(), L.preventDefault();
									}),
								),
								this.D(
									w.$0fb(P, "focus", (L) => {
										T.focus(), L.preventDefault();
									}),
								);
						}
					}
					cb(I) {
						if (I.hasChildNodes())
							for (let T = 0; T < I.childNodes.length; T++) {
								const P = I.childNodes.item(I.childNodes.length - T - 1);
								if (P.nodeType === P.ELEMENT_NODE) {
									const L = P;
									if (typeof L.tabIndex == "number" && L.tabIndex >= 0)
										return L;
								}
								const k = this.cb(P);
								if (k) return k;
							}
					}
					render(I) {
						I.appendChild(this.h);
						const P =
							this.h.contains(this.h.ownerDocument.activeElement) &&
							(0, r.$$hb)(
								this.X.getValue("accessibility.verbosity.hover") === !0 &&
									this.ab.isScreenReaderOptimized(),
								this.W.lookupKeybinding(
									"editor.action.accessibleView",
								)?.getAriaLabel(),
							);
						P && (0, b.$pib)(P), this.layout(), this.bb();
					}
					layout() {
						this.c.containerDomNode.classList.remove("right-aligned"),
							(this.c.contentsDomNode.style.maxHeight = "");
						const I = (R) => {
								const O = w.$ugb(R),
									B = R.getBoundingClientRect();
								return {
									top: B.top * O,
									bottom: B.bottom * O,
									right: B.right * O,
									left: B.left * O,
								};
							},
							T = this.r.targetElements.map((R) => I(R)),
							{ top: P, right: k, bottom: L, left: D } = T[0],
							M = k - D,
							N = L - P,
							A = {
								top: P,
								right: k,
								bottom: L,
								left: D,
								width: M,
								height: N,
								center: { x: D + M / 2, y: P + N / 2 },
							};
						if (
							(this.fb(A),
							this.gb(A),
							this.hb(A),
							(this.h.style.padding = ""),
							(this.h.style.margin = ""),
							this.g)
						) {
							switch (this.w) {
								case r.HoverPosition.RIGHT:
									(A.left += l.PointerSize),
										(A.right += l.PointerSize),
										(this.h.style.paddingLeft = `${l.PointerSize}px`),
										(this.h.style.marginLeft = `${-l.PointerSize}px`);
									break;
								case r.HoverPosition.LEFT:
									(A.left -= l.PointerSize),
										(A.right -= l.PointerSize),
										(this.h.style.paddingRight = `${l.PointerSize}px`),
										(this.h.style.marginRight = `${-l.PointerSize}px`);
									break;
								case r.HoverPosition.BELOW:
									(A.top += l.PointerSize),
										(A.bottom += l.PointerSize),
										(this.h.style.paddingTop = `${l.PointerSize}px`),
										(this.h.style.marginTop = `${-l.PointerSize}px`);
									break;
								case r.HoverPosition.ABOVE:
									(A.top -= l.PointerSize),
										(A.bottom -= l.PointerSize),
										(this.h.style.paddingBottom = `${l.PointerSize}px`),
										(this.h.style.marginBottom = `${-l.PointerSize}px`);
									break;
							}
							(A.center.x = A.left + M / 2), (A.center.y = A.top + N / 2);
						}
						this.db(A),
							this.eb(A),
							this.g &&
								(this.g.classList.remove("top"),
								this.g.classList.remove("left"),
								this.g.classList.remove("right"),
								this.g.classList.remove("bottom"),
								this.ib(A)),
							this.c.onContentsChanged();
					}
					db(I) {
						const T = this.c.containerDomNode.clientWidth + l.HoverBorderWidth;
						this.r.x !== void 0
							? (this.L = this.r.x)
							: this.w === r.HoverPosition.RIGHT
								? (this.L = I.right)
								: this.w === r.HoverPosition.LEFT
									? (this.L = I.left - T)
									: (this.g
											? (this.L =
													I.center.x - this.c.containerDomNode.clientWidth / 2)
											: (this.L = I.left),
										this.L + T >= this.R.clientWidth &&
											(this.c.containerDomNode.classList.add("right-aligned"),
											(this.L = Math.max(
												this.R.clientWidth - T - l.HoverWindowEdgeMargin,
												this.R.clientLeft,
											)))),
							this.L < this.R.clientLeft &&
								(this.L = I.left + l.HoverWindowEdgeMargin);
					}
					eb(I) {
						this.r.y !== void 0
							? (this.M = this.r.y)
							: this.w === r.HoverPosition.ABOVE
								? (this.M = I.top)
								: this.w === r.HoverPosition.BELOW
									? (this.M = I.bottom - 2)
									: this.g
										? (this.M =
												I.center.y + this.c.containerDomNode.clientHeight / 2)
										: (this.M = I.bottom),
							this.M > this.Q.innerHeight && (this.M = I.bottom);
					}
					fb(I) {
						if (this.r.x !== void 0) return;
						const T = this.g ? l.PointerSize : 0;
						if (this.J) {
							const P = T + l.HoverBorderWidth;
							this.w === r.HoverPosition.RIGHT
								? (this.c.containerDomNode.style.maxWidth = `${this.R.clientWidth - I.right - P}px`)
								: this.w === r.HoverPosition.LEFT &&
									(this.c.containerDomNode.style.maxWidth = `${I.left - P}px`);
							return;
						}
						this.w === r.HoverPosition.RIGHT
							? this.R.clientWidth - I.right <
									this.c.containerDomNode.clientWidth + T &&
								(I.left >= this.c.containerDomNode.clientWidth + T
									? (this.w = r.HoverPosition.LEFT)
									: (this.w = r.HoverPosition.BELOW))
							: this.w === r.HoverPosition.LEFT &&
								(I.left < this.c.containerDomNode.clientWidth + T &&
									(this.R.clientWidth - I.right >=
									this.c.containerDomNode.clientWidth + T
										? (this.w = r.HoverPosition.RIGHT)
										: (this.w = r.HoverPosition.BELOW)),
								I.left - this.c.containerDomNode.clientWidth - T <=
									this.R.clientLeft && (this.w = r.HoverPosition.RIGHT));
					}
					gb(I) {
						if (this.r.y !== void 0 || this.J) return;
						const T = this.g ? l.PointerSize : 0;
						this.w === r.HoverPosition.ABOVE
							? I.top - this.c.containerDomNode.clientHeight - T < 0 &&
								(this.w = r.HoverPosition.BELOW)
							: this.w === r.HoverPosition.BELOW &&
								I.bottom + this.c.containerDomNode.clientHeight + T >
									this.Q.innerHeight &&
								(this.w = r.HoverPosition.ABOVE);
					}
					hb(I) {
						let T = this.Q.innerHeight / 2;
						if (this.J) {
							const P = (this.g ? l.PointerSize : 0) + l.HoverBorderWidth;
							this.w === r.HoverPosition.ABOVE
								? (T = Math.min(T, I.top - P))
								: this.w === r.HoverPosition.BELOW &&
									(T = Math.min(T, this.Q.innerHeight - I.bottom - P));
						}
						if (
							((this.c.containerDomNode.style.maxHeight = `${T}px`),
							this.c.contentsDomNode.clientHeight <
								this.c.contentsDomNode.scrollHeight)
						) {
							const P = `${this.c.scrollbar.options.verticalScrollbarSize}px`;
							this.c.contentsDomNode.style.paddingRight !== P &&
								(this.c.contentsDomNode.style.paddingRight = P);
						}
					}
					ib(I) {
						if (this.g)
							switch (this.w) {
								case r.HoverPosition.LEFT:
								case r.HoverPosition.RIGHT: {
									this.g.classList.add(
										this.w === r.HoverPosition.LEFT ? "right" : "left",
									);
									const T = this.c.containerDomNode.clientHeight;
									T > I.height
										? (this.g.style.top = `${I.center.y - (this.M - T) - l.PointerSize}px`)
										: (this.g.style.top = `${Math.round(T / 2) - l.PointerSize}px`);
									break;
								}
								case r.HoverPosition.ABOVE:
								case r.HoverPosition.BELOW: {
									this.g.classList.add(
										this.w === r.HoverPosition.ABOVE ? "bottom" : "top",
									);
									const T = this.c.containerDomNode.clientWidth;
									let P = Math.round(T / 2) - l.PointerSize;
									const k = this.L + P;
									(k < I.left || k > I.right) &&
										(P = I.center.x - this.L - l.PointerSize),
										(this.g.style.left = `${P}px`);
									break;
								}
							}
					}
					focus() {
						this.c.containerDomNode.focus();
					}
					hide() {
						this.dispose();
					}
					dispose() {
						this.t ||
							(this.S.fire(),
							this.h.remove(),
							this.a.dispose(),
							this.r.dispose(),
							super.dispose()),
							(this.t = !0);
					}
				};
				(e.$y$b = y),
					(e.$y$b = y =
						Ne(
							[
								j(1, E.$uZ),
								j(2, d.$gj),
								j(3, h.$7rb),
								j(4, c.$Li),
								j(5, f.$XK),
							],
							y,
						));
				class $ extends u.$Uhb {
					get onMouseOut() {
						return this.c.event;
					}
					get isMouseIn() {
						return this.a;
					}
					constructor(I) {
						super(),
							(this.g = I),
							(this.a = !0),
							(this.c = this.D(new i.$re())),
							this.g.forEach((T) => this.m(T, () => this.h(T))),
							this.g.forEach((T) => this.q(T, () => this.r(T)));
					}
					h(I) {
						(this.a = !0), this.t(I);
					}
					r(I) {
						(this.a = !1), this.s(I);
					}
					s(I) {
						this.t(I), (this.b = w.getWindow(I).setTimeout(() => this.w(), 0));
					}
					t(I) {
						this.b && (w.getWindow(I).clearTimeout(this.b), (this.b = void 0));
					}
					w() {
						this.a || this.c.fire();
					}
				}
				class v {
					constructor(I) {
						(this.a = I), (this.targetElements = [this.a]);
					}
					dispose() {}
				}
			},
		),
		define(
			de[152],
			he([
				1, 0, 6, 3, 37, 409, 532, 2560, 2691, 912, 2723, 934, 5, 10, 61, 20,
				172, 2692,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$fN = e.$eN = e.$dN = e.$bN = e.$aN = e.$_M = void 0),
					(e.$cN = v),
					(w = mt(w));
				class f {
					constructor(M) {
						this.languageId = M;
					}
					affects(M) {
						return this.languageId ? this.languageId === M : !0;
					}
				}
				(e.$_M = f), (e.$aN = (0, h.$Mi)("languageConfigurationService"));
				let b = class extends i.$1c {
					constructor(M, N) {
						super(),
							(this.h = M),
							(this.j = N),
							(this.c = this.D(new k())),
							(this.f = this.D(new t.$re())),
							(this.onDidChange = this.f.event),
							(this.g = new Map());
						const A = new Set(Object.values(l));
						this.D(
							this.h.onDidChangeConfiguration((R) => {
								const O = R.change.keys.some((U) => A.has(U)),
									B = R.change.overrides
										.filter(([U, z]) => z.some((F) => A.has(F)))
										.map(([U]) => U);
								if (O) this.g.clear(), this.f.fire(new f(void 0));
								else
									for (const U of B)
										this.j.isRegisteredLanguageId(U) &&
											(this.g.delete(U), this.f.fire(new f(U)));
							}),
						),
							this.D(
								this.c.onDidChange((R) => {
									this.g.delete(R.languageId), this.f.fire(new f(R.languageId));
								}),
							);
					}
					register(M, N, A) {
						return this.c.register(M, N, A);
					}
					getLanguageConfiguration(M) {
						let N = this.g.get(M);
						return (
							N || ((N = s(M, this.c, this.h, this.j)), this.g.set(M, N)), N
						);
					}
				};
				(e.$bN = b), (e.$bN = b = Ne([j(0, c.$gj), j(1, n.$nM)], b));
				function s(D, M, N, A) {
					let R = M.getLanguageConfiguration(D);
					if (!R) {
						if (!A.isRegisteredLanguageId(D)) return new L(D, {});
						R = new L(D, {});
					}
					const O = y(R.languageId, N),
						B = I([R.underlyingConfig, O]);
					return new L(R.languageId, B);
				}
				const l = {
					brackets: "editor.language.brackets",
					colorizedBracketPairs: "editor.language.colorizedBracketPairs",
				};
				function y(D, M) {
					const N = M.getValue(l.brackets, { overrideIdentifier: D }),
						A = M.getValue(l.colorizedBracketPairs, { overrideIdentifier: D });
					return { brackets: $(N), colorizedBracketPairs: $(A) };
				}
				function $(D) {
					if (Array.isArray(D))
						return D.map((M) => {
							if (!(!Array.isArray(M) || M.length !== 2)) return [M[0], M[1]];
						}).filter((M) => !!M);
				}
				function v(D, M, N) {
					const A = D.getLineContent(M);
					let R = w.$Cf(A);
					return R.length > N - 1 && (R = R.substring(0, N - 1)), R;
				}
				class S {
					constructor(M) {
						(this.languageId = M),
							(this.f = null),
							(this.c = []),
							(this.d = 0),
							(this.f = null);
					}
					register(M, N) {
						const A = new T(M, N, ++this.d);
						return (
							this.c.push(A),
							(this.f = null),
							(0, i.$Yc)(() => {
								for (let R = 0; R < this.c.length; R++)
									if (this.c[R] === A) {
										this.c.splice(R, 1), (this.f = null);
										break;
									}
							})
						);
					}
					getResolvedConfiguration() {
						if (!this.f) {
							const M = this.g();
							M && (this.f = new L(this.languageId, M));
						}
						return this.f;
					}
					g() {
						return this.c.length === 0
							? null
							: (this.c.sort(T.cmp), I(this.c.map((M) => M.configuration)));
					}
				}
				function I(D) {
					let M = {
						comments: void 0,
						brackets: void 0,
						wordPattern: void 0,
						indentationRules: void 0,
						onEnterRules: void 0,
						autoClosingPairs: void 0,
						surroundingPairs: void 0,
						autoCloseBefore: void 0,
						folding: void 0,
						colorizedBracketPairs: void 0,
						__electricCharacterSupport: void 0,
					};
					for (const N of D)
						M = {
							comments: N.comments || M.comments,
							brackets: N.brackets || M.brackets,
							wordPattern: N.wordPattern || M.wordPattern,
							indentationRules: N.indentationRules || M.indentationRules,
							onEnterRules: N.onEnterRules || M.onEnterRules,
							autoClosingPairs: N.autoClosingPairs || M.autoClosingPairs,
							surroundingPairs: N.surroundingPairs || M.surroundingPairs,
							autoCloseBefore: N.autoCloseBefore || M.autoCloseBefore,
							folding: N.folding || M.folding,
							colorizedBracketPairs:
								N.colorizedBracketPairs || M.colorizedBracketPairs,
							__electricCharacterSupport:
								N.__electricCharacterSupport || M.__electricCharacterSupport,
						};
					return M;
				}
				class T {
					constructor(M, N, A) {
						(this.configuration = M), (this.priority = N), (this.order = A);
					}
					static cmp(M, N) {
						return M.priority === N.priority
							? M.order - N.order
							: M.priority - N.priority;
					}
				}
				class P {
					constructor(M) {
						this.languageId = M;
					}
				}
				e.$dN = P;
				class k extends i.$1c {
					constructor() {
						super(),
							(this.c = new Map()),
							(this.f = this.D(new t.$re())),
							(this.onDidChange = this.f.event),
							this.D(
								this.register(
									p.$0M,
									{
										brackets: [
											["(", ")"],
											["[", "]"],
											["{", "}"],
										],
										surroundingPairs: [
											{ open: "{", close: "}" },
											{ open: "[", close: "]" },
											{ open: "(", close: ")" },
											{ open: "<", close: ">" },
											{ open: '"', close: '"' },
											{ open: "'", close: "'" },
											{ open: "`", close: "`" },
										],
										colorizedBracketPairs: [],
										folding: { offSide: !0 },
									},
									0,
								),
							);
					}
					register(M, N, A = 0) {
						let R = this.c.get(M);
						R || ((R = new S(M)), this.c.set(M, R));
						const O = R.register(N, A);
						return (
							this.f.fire(new P(M)),
							(0, i.$Yc)(() => {
								O.dispose(), this.f.fire(new P(M));
							})
						);
					}
					getLanguageConfiguration(M) {
						return this.c.get(M)?.getResolvedConfiguration() || null;
					}
				}
				e.$eN = k;
				class L {
					constructor(M, N) {
						(this.languageId = M),
							(this.underlyingConfig = N),
							(this.c = null),
							(this.d = null),
							(this.f =
								this.underlyingConfig.brackets ||
								this.underlyingConfig.indentationRules ||
								this.underlyingConfig.onEnterRules
									? new u.$6M(this.underlyingConfig)
									: null),
							(this.comments = L.g(this.underlyingConfig)),
							(this.characterPair = new d.$3M(this.underlyingConfig)),
							(this.wordDefinition =
								this.underlyingConfig.wordPattern || E.$TK),
							(this.indentationRules = this.underlyingConfig.indentationRules),
							this.underlyingConfig.indentationRules
								? (this.indentRulesSupport = new r.$5M(
										this.underlyingConfig.indentationRules,
									))
								: (this.indentRulesSupport = null),
							(this.foldingRules = this.underlyingConfig.folding || {}),
							(this.bracketsNew = new o.$xM(M, this.underlyingConfig));
					}
					getWordDefinition() {
						return (0, E.$UK)(this.wordDefinition);
					}
					get brackets() {
						return (
							!this.c &&
								this.underlyingConfig.brackets &&
								(this.c = new a.$uM(
									this.languageId,
									this.underlyingConfig.brackets,
								)),
							this.c
						);
					}
					get electricCharacter() {
						return this.d || (this.d = new m.$4M(this.brackets)), this.d;
					}
					onEnter(M, N, A, R) {
						return this.f ? this.f.onEnter(M, N, A, R) : null;
					}
					getAutoClosingPairs() {
						return new C.$sM(this.characterPair.getAutoClosingPairs());
					}
					getAutoCloseBeforeSet(M) {
						return this.characterPair.getAutoCloseBeforeSet(M);
					}
					getSurroundingPairs() {
						return this.characterPair.getSurroundingPairs();
					}
					static g(M) {
						const N = M.comments;
						if (!N) return null;
						const A = {};
						if (
							(N.lineComment && (A.lineCommentToken = N.lineComment),
							N.blockComment)
						) {
							const [R, O] = N.blockComment;
							(A.blockCommentStartToken = R), (A.blockCommentEndToken = O);
						}
						return A;
					}
				}
				(e.$fN = L), (0, g.$lK)(e.$aN, b, g.InstantiationType.Delayed);
			},
		),
		define(
			de[2771],
			he([
				1, 0, 15, 3, 1584, 540, 17, 74, 152, 2764, 67, 125, 24, 34, 162, 29, 69,
				1147, 342, 196, 75, 7, 83, 935, 1541,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Oyc = e.$Nyc = void 0),
					(d = mt(d));
				const S = 5 * 60 * 1e3;
				function I(M, N) {
					const A = M.getModel(N);
					return !(!A || A.isTooLargeForSyncing());
				}
				let T = class extends i.$1c {
					constructor(N, A, R, O, B, U) {
						super(),
							(this.g = B),
							(this.a = A),
							(this.b = this.D(new k(N, this.a))),
							(this.f = O),
							this.D(
								U.linkProvider.register(
									{ language: "*", hasAccessToAllModels: !0 },
									{
										provideLinks: async (z, F) => {
											if (!I(this.a, z.uri))
												return Promise.resolve({ links: [] });
											const H = await (await this.h([z.uri])).$computeLinks(
												z.uri.toString(),
											);
											return H && { links: H };
										},
									},
								),
							),
							this.D(
								U.completionProvider.register(
									"*",
									new P(this.b, R, this.a, this.g),
								),
							);
					}
					dispose() {
						super.dispose();
					}
					canComputeUnicodeHighlights(N) {
						return I(this.a, N);
					}
					async computedUnicodeHighlights(N, A, R) {
						return (await this.h([N])).$computeUnicodeHighlights(
							N.toString(),
							A,
							R,
						);
					}
					async computeDiff(N, A, R, O) {
						const U = await (await this.h([N, A], !0)).$computeDiff(
							N.toString(),
							A.toString(),
							R,
							O,
						);
						if (!U) return null;
						return {
							identical: U.identical,
							quitEarly: U.quitEarly,
							changes: F(U.changes),
							moves: U.moves.map(
								(x) =>
									new o.$FL(
										new f.$BL(new b.$rL(x[0], x[1]), new b.$rL(x[2], x[3])),
										F(x[4]),
									),
							),
						};
						function F(x) {
							return x.map(
								(H) =>
									new f.$CL(
										new b.$rL(H[0], H[1]),
										new b.$rL(H[2], H[3]),
										H[4]?.map(
											(q) =>
												new f.$DL(
													new C.$iL(q[0], q[1], q[2], q[3]),
													new C.$iL(q[4], q[5], q[6], q[7]),
												),
										),
									),
							);
						}
					}
					async computeWordDiff_FOR_STRINGS_SMALLER_THAN_100_KB_ONLY(N, A, R) {
						const B = await (await this.h([])).$computeWordDiff(N, A, R);
						return {
							identical: B.identical,
							quitEarly: B.quitEarly,
							changes: B.changes.map((z) => ({
								value: z[0],
								added: z[1],
								removed: z[2],
							})),
						};
					}
					async computeLinesDiff(N, A, R) {
						const B = new y.$Bs({ original: N, modified: A }).toBinary();
						return await (await this.h([])).$computeLinesDiff(B, R);
					}
					canComputeDirtyDiff(N, A) {
						return I(this.a, N) && I(this.a, A);
					}
					async computeDirtyDiff(N, A, R) {
						return (await this.h([N, A])).$computeDirtyDiff(
							N.toString(),
							A.toString(),
							R,
						);
					}
					async computeMoreMinimalEdits(N, A, R = !1) {
						if ((0, h.$Pb)(A)) {
							if (!I(this.a, N)) return Promise.resolve(A);
							const O = n.$le.create(),
								B = this.h([N]).then((U) =>
									U.$computeMoreMinimalEdits(N.toString(), A, R),
								);
							return (
								B.finally(() =>
									this.f.trace(
										"FORMAT#computeMoreMinimalEdits",
										N.toString(!0),
										O.elapsed(),
									),
								),
								Promise.race([B, (0, t.$Nh)(1e3).then(() => A)])
							);
						} else return Promise.resolve(void 0);
					}
					computeHumanReadableDiff(N, A) {
						if ((0, h.$Pb)(A)) {
							if (!I(this.a, N)) return Promise.resolve(A);
							const R = n.$le.create(),
								O = {
									ignoreTrimWhitespace: !1,
									maxComputationTimeMs: 1e3,
									computeMoves: !1,
								},
								B = this.h([N])
									.then((U) => U.$computeHumanReadableDiff(N.toString(), A, O))
									.catch(
										(U) => (
											(0, g.$4)(U), this.computeMoreMinimalEdits(N, A, !0)
										),
									);
							return (
								B.finally(() =>
									this.f.trace(
										"FORMAT#computeHumanReadableDiff",
										N.toString(!0),
										R.elapsed(),
									),
								),
								B
							);
						} else return Promise.resolve(void 0);
					}
					canNavigateValueSet(N) {
						return I(this.a, N);
					}
					async navigateValueSet(N, A, R) {
						const O = this.a.getModel(N);
						if (!O) return null;
						const B = this.g
								.getLanguageConfiguration(O.getLanguageId())
								.getWordDefinition(),
							U = B.source,
							z = B.flags;
						return (await this.h([N])).$navigateValueSet(
							N.toString(),
							A,
							R,
							U,
							z,
						);
					}
					canComputeWordRanges(N) {
						return I(this.a, N);
					}
					async computeWordRanges(N, A) {
						const R = this.a.getModel(N);
						if (!R) return Promise.resolve(null);
						const O = this.g
								.getLanguageConfiguration(R.getLanguageId())
								.getWordDefinition(),
							B = O.source,
							U = O.flags;
						return (await this.h([N])).$computeWordRanges(
							N.toString(),
							A,
							B,
							U,
						);
					}
					async findSectionHeaders(N, A) {
						return (await this.h([N])).$findSectionHeaders(N.toString(), A);
					}
					async computeDefaultDocumentColors(N) {
						return (await this.h([N])).$computeDefaultDocumentColors(
							N.toString(),
						);
					}
					async h(N, A = !1) {
						return await (await this.b.withWorker()).workerWithSyncedResources(
							N,
							A,
						);
					}
				};
				(e.$Nyc = T),
					(e.$Nyc = T =
						Ne(
							[j(1, u.$QO), j(2, a.$XO), j(3, c.$ik), j(4, m.$aN), j(5, p.$k3)],
							T,
						));
				class P {
					constructor(N, A, R, O) {
						(this.e = O),
							(this._debugDisplayName = "wordbasedCompletions"),
							(this.a = N),
							(this.b = A),
							(this.d = R);
					}
					async provideCompletionItems(N, A) {
						if (N.uri.scheme === "aiEditorBox-anysphere") return;
						const R = this.b.getValue(N.uri, A, "editor");
						if (R.wordBasedSuggestions === "off") return;
						const O = [];
						if (R.wordBasedSuggestions === "currentDocument")
							I(this.d, N.uri) && O.push(N.uri);
						else
							for (const q of this.d.getModels())
								I(this.d, q.uri) &&
									(q === N
										? O.unshift(q.uri)
										: (R.wordBasedSuggestions === "allDocuments" ||
												q.getLanguageId() === N.getLanguageId()) &&
											O.push(q.uri));
						if (O.length === 0) return;
						const B = this.e
								.getLanguageConfiguration(N.getLanguageId())
								.getWordDefinition(),
							U = N.getWordAtPosition(A),
							z = U
								? new C.$iL(
										A.lineNumber,
										U.startColumn,
										A.lineNumber,
										U.endColumn,
									)
								: C.$iL.fromPositions(A),
							F = z.setEndPosition(A.lineNumber, A.column),
							H = await (await this.a.withWorker()).textualSuggest(
								O,
								U?.word,
								B,
							);
						if (H)
							return {
								duration: H.duration,
								suggestions: H.words.map((q) => ({
									kind: d.CompletionItemKind.Text,
									label: q,
									insertText: q,
									range: { insert: F, replace: z },
								})),
							};
					}
				}
				let k = class extends i.$1c {
					constructor(N, A) {
						super(),
							(this.g = N),
							(this.a = A),
							(this.b = null),
							(this.f = new Date().getTime()),
							this.D(new l.$jgb()).cancelAndSet(
								() => this.j(),
								Math.round(S / 2),
								s.$Bfb,
							),
							this.D(this.a.onModelRemoved((O) => this.h()));
					}
					dispose() {
						this.b && (this.b.dispose(), (this.b = null)), super.dispose();
					}
					h() {
						if (!this.b) return;
						this.a.getModels().length === 0 &&
							(this.b.dispose(), (this.b = null));
					}
					j() {
						if (!this.b) return;
						new Date().getTime() - this.f > S &&
							(this.b.dispose(), (this.b = null));
					}
					withWorker() {
						return (
							(this.f = new Date().getTime()),
							this.b || (this.b = new D(this.g, !1, this.a)),
							Promise.resolve(this.b)
						);
					}
				};
				k = Ne([j(1, u.$QO)], k);
				class L {
					constructor(N) {
						(this.a = N), (this.proxy = this.a);
					}
					dispose() {
						this.a.dispose();
					}
					setChannel(N, A) {
						throw new Error("Not supported");
					}
					getChannel(N) {
						throw new Error("Not supported");
					}
				}
				let D = class extends i.$1c {
					constructor(N, A, R) {
						super(),
							(this.j = N),
							(this.h = !1),
							(this.a = R),
							(this.b = A),
							(this.f = null),
							(this.g = null);
					}
					fhr(N, A) {
						throw new Error("Not implemented!");
					}
					n() {
						if (!this.f)
							try {
								(this.f = this.D((0, E.$ijb)(this.j))),
									v.$6wb.setChannel(this.f, this.t());
							} catch (N) {
								(0, w.logOnceWebWorkerWarning)(N), (this.f = this.s());
							}
						return this.f;
					}
					async q() {
						try {
							const N = this.n().proxy;
							return await N.$ping(), N;
						} catch (N) {
							return (
								(0, w.logOnceWebWorkerWarning)(N),
								(this.f = this.s()),
								this.f.proxy
							);
						}
					}
					s() {
						return new L(new r.EditorSimpleWorker(this.t(), null));
					}
					t() {
						return { $fhr: (N, A) => this.fhr(N, A) };
					}
					u(N) {
						return (
							this.g || (this.g = this.D(new $.$wxb(N, this.a, this.b))), this.g
						);
					}
					async workerWithSyncedResources(N, A = !1) {
						if (this.h) return Promise.reject((0, g.$0)());
						const R = await this.q();
						return this.u(R).ensureSyncedResources(N, A), R;
					}
					async textualSuggest(N, A, R) {
						const O = await this.workerWithSyncedResources(N),
							B = R.source,
							U = R.flags;
						return O.$textualSuggest(
							N.map((z) => z.toString()),
							A,
							B,
							U,
						);
					}
					dispose() {
						super.dispose(), (this.h = !0);
					}
				};
				(e.$Oyc = D), (e.$Oyc = D = Ne([j(2, u.$QO)], D));
			},
		),
		
import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/arrays.js';
import '../../../base/common/event.js';
import '../../../base/common/types.js';
import '../../../nls.js';
import './configuration.js';
import '../../jsonschemas/common/jsonContributionRegistry.js';
import '../../registry/common/platform.js';
define(
			de[81],
			he([1, 0, 24, 6, 28, 4, 10, 250, 30]),
			function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*event*/,
 w /*types*/,
 E /*nls*/,
 C /*configuration*/,
 d /*jsonContributionRegistry*/,
 m /*platform*/) {
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
		)

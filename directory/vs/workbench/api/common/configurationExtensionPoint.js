import '../../../../require.js';
import '../../../../exports.js';
import '../../../nls.js';
import '../../../base/common/objects.js';
import '../../../platform/registry/common/platform.js';
import '../../services/extensions/common/extensionsRegistry.js';
import '../../../platform/configuration/common/configurationRegistry.js';
import '../../../platform/jsonschemas/common/jsonContributionRegistry.js';
import '../../services/configuration/common/configuration.js';
import '../../../base/common/types.js';
import '../../../platform/extensions/common/extensions.js';
import '../../services/extensionManagement/common/extensionFeatures.js';
import '../../../base/common/lifecycle.js';
import '../../../platform/instantiation/common/descriptors.js';
import '../../../base/common/htmlContent.js';
define(
			de[3323],
			he([1, 0, 4, 82, 30, 175, 81, 250, 261, 28, 109, 244, 3, 102, 94]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*objects*/,
 w /*platform*/,
 E /*extensionsRegistry*/,
 C /*configurationRegistry*/,
 d /*jsonContributionRegistry*/,
 m /*configuration*/,
 r /*types*/,
 u /*extensions*/,
 a /*extensionFeatures*/,
 h /*lifecycle*/,
 c /*descriptors*/,
 n /*htmlContent*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(t = mt(t)),
					(i = mt(i));
				const g = w.$Io.as(d.$Jo.JSONContribution),
					p = w.$Io.as(C.$No.Configuration),
					o = {
						type: "object",
						defaultSnippets: [{ body: { title: "", properties: {} } }],
						properties: {
							title: { description: t.localize(2660, null), type: "string" },
							order: { description: t.localize(2661, null), type: "integer" },
							properties: {
								description: t.localize(2662, null),
								type: "object",
								propertyNames: {
									pattern: "\\S+",
									patternErrorMessage: t.localize(2663, null),
								},
								additionalProperties: {
									anyOf: [
										{
											title: t.localize(2664, null),
											$ref: "http://json-schema.org/draft-07/schema#",
										},
										{
											type: "object",
											properties: {
												scope: {
													type: "string",
													enum: [
														"application",
														"machine",
														"window",
														"resource",
														"language-overridable",
														"machine-overridable",
													],
													default: "window",
													enumDescriptions: [
														t.localize(2665, null),
														t.localize(2666, null),
														t.localize(2667, null),
														t.localize(2668, null),
														t.localize(2669, null),
														t.localize(2670, null),
													],
													markdownDescription: t.localize(2671, null),
												},
												enumDescriptions: {
													type: "array",
													items: { type: "string" },
													description: t.localize(2672, null),
												},
												markdownEnumDescriptions: {
													type: "array",
													items: { type: "string" },
													description: t.localize(2673, null),
												},
												enumItemLabels: {
													type: "array",
													items: { type: "string" },
													markdownDescription: t.localize(2674, null, "`enum`"),
												},
												markdownDescription: {
													type: "string",
													description: t.localize(2675, null),
												},
												deprecationMessage: {
													type: "string",
													description: t.localize(2676, null),
												},
												markdownDeprecationMessage: {
													type: "string",
													description: t.localize(2677, null),
												},
												editPresentation: {
													type: "string",
													enum: ["singlelineText", "multilineText"],
													enumDescriptions: [
														t.localize(2678, null),
														t.localize(2679, null),
													],
													default: "singlelineText",
													description: t.localize(2680, null),
												},
												order: {
													type: "integer",
													description: t.localize(2681, null),
												},
												ignoreSync: {
													type: "boolean",
													description: t.localize(2682, null),
												},
											},
										},
									],
								},
							},
						},
					};
				let f;
				const b = E.$n2.registerExtensionPoint({
					extensionPoint: "configurationDefaults",
					jsonSchema: { $ref: C.$Vo },
				});
				b.setHandler(($, { added: v, removed: S }) => {
					f && p.deltaConfiguration(f);
					const I = (f = {});
					if (
						(queueMicrotask(() => {
							f === I && (p.deltaConfiguration(f), (f = void 0));
						}),
						S.length)
					) {
						const T = S.map((P) => ({
							overrides: i.$vo(P.value),
							source: {
								id: P.description.identifier.value,
								displayName: P.description.displayName,
							},
						}));
						f.removedDefaults = T;
					}
					if (v.length) {
						const T = p.getConfigurationProperties(),
							P = [
								C.ConfigurationScope.MACHINE_OVERRIDABLE,
								C.ConfigurationScope.WINDOW,
								C.ConfigurationScope.RESOURCE,
								C.ConfigurationScope.LANGUAGE_OVERRIDABLE,
							],
							k = v.map((L) => {
								const D = i.$vo(L.value);
								for (const M of Object.keys(D)) {
									const N = T[M];
									if (N?.disallowConfigurationDefault) {
										L.collector.warn(t.localize(2683, null, M)), delete D[M];
										continue;
									}
									if (!C.$Xo.test(M) && N?.scope && !P.includes(N.scope)) {
										L.collector.warn(t.localize(2684, null, M)), delete D[M];
										continue;
									}
								}
								return {
									overrides: D,
									source: {
										id: L.description.identifier.value,
										displayName: L.description.displayName,
									},
								};
							});
						f.addedDefaults = k;
					}
				});
				const s = E.$n2.registerExtensionPoint({
						extensionPoint: "configuration",
						deps: [b],
						jsonSchema: {
							description: t.localize(2685, null),
							oneOf: [o, { type: "array", items: o }],
						},
					}),
					l = new u.$In();
				s.setHandler(($, { added: v, removed: S }) => {
					if (((f ??= {}), S.length)) {
						const k = [];
						for (const L of S)
							k.push(...(l.get(L.description.identifier) || [])),
								l.delete(L.description.identifier);
						f.removedConfigurations = k;
					}
					const I = new Set();
					function T(k, L) {
						const D = i.$vo(k);
						return (
							D.title &&
								typeof D.title != "string" &&
								L.collector.error(t.localize(2686, null)),
							P(D, L),
							(D.id = k.id || L.description.identifier.value),
							(D.extensionInfo = {
								id: L.description.identifier.value,
								displayName: L.description.displayName,
							}),
							(D.restrictedProperties =
								L.description.capabilities?.untrustedWorkspaces?.supported ===
								"limited"
									? L.description.capabilities?.untrustedWorkspaces
											.restrictedConfigurations
									: void 0),
							(D.title =
								D.title ||
								L.description.displayName ||
								L.description.identifier.value),
							D
						);
					}
					function P(k, L) {
						const D = k.properties;
						if (D) {
							typeof D != "object" &&
								(L.collector.error(t.localize(2687, null)),
								(k.properties = {}));
							for (const N in D) {
								const A = D[N],
									R = (0, C.$2o)(N, A);
								if (R) {
									delete D[N], L.collector.warn(R);
									continue;
								}
								if (I.has(N)) {
									delete D[N], L.collector.warn(t.localize(2688, null, N));
									continue;
								}
								if (!(0, r.$ng)(A)) {
									delete D[N], L.collector.error(t.localize(2689, null, N));
									continue;
								}
								I.add(N),
									(A.scope = A.scope
										? (0, C.$5o)(A.scope.toString())
										: C.ConfigurationScope.WINDOW);
							}
						}
						const M = k.allOf;
						if (M) {
							L.collector.error(t.localize(2690, null));
							for (const N of M) P(N, L);
						}
					}
					if (v.length) {
						const k = [];
						for (const L of v) {
							const D = [],
								M = L.value;
							Array.isArray(M)
								? M.forEach((N) => D.push(T(N, L)))
								: D.push(T(M, L)),
								l.set(L.description.identifier, D),
								k.push(...D);
						}
						f.addedConfigurations = k;
					}
					p.deltaConfiguration(f), (f = void 0);
				}),
					g.registerSchema("vscode://schemas/workspaceConfig", {
						allowComments: !0,
						allowTrailingCommas: !0,
						default: { folders: [{ path: "" }], settings: {} },
						required: ["folders"],
						properties: {
							folders: {
								minItems: 0,
								uniqueItems: !0,
								description: t.localize(2691, null),
								items: {
									type: "object",
									defaultSnippets: [{ body: { path: "$1" } }],
									oneOf: [
										{
											properties: {
												path: {
													type: "string",
													description: t.localize(2692, null),
												},
												name: {
													type: "string",
													description: t.localize(2693, null),
												},
											},
											required: ["path"],
										},
										{
											properties: {
												uri: {
													type: "string",
													description: t.localize(2694, null),
												},
												name: {
													type: "string",
													description: t.localize(2695, null),
												},
											},
											required: ["uri"],
										},
									],
								},
							},
							settings: {
								type: "object",
								default: {},
								description: t.localize(2696, null),
								$ref: m.$CZ,
							},
							launch: {
								type: "object",
								default: { configurations: [], compounds: [] },
								description: t.localize(2697, null),
								$ref: m.$EZ,
							},
							tasks: {
								type: "object",
								default: { version: "2.0.0", tasks: [] },
								description: t.localize(2698, null),
								$ref: m.$FZ,
							},
							extensions: {
								type: "object",
								default: {},
								description: t.localize(2699, null),
								$ref: "vscode://schemas/extensions",
							},
							remoteAuthority: {
								type: "string",
								doNotSuggest: !0,
								description: t.localize(2700, null),
							},
							transient: {
								type: "boolean",
								doNotSuggest: !0,
								description: t.localize(2701, null),
							},
						},
						errorMessage: t.localize(2702, null),
					});
				class y extends h.$1c {
					constructor() {
						super(...arguments), (this.type = "table");
					}
					shouldRender(v) {
						return !!v.contributes?.configuration;
					}
					render(v) {
						const S = v.contributes?.configuration
								? Array.isArray(v.contributes.configuration)
									? v.contributes.configuration
									: [v.contributes.configuration]
								: [],
							I = (0, C.$4o)(S),
							T = I ? Object.keys(I) : [],
							P = [
								t.localize(2703, null),
								t.localize(2704, null),
								t.localize(2705, null),
							],
							k = T.sort((L, D) => L.localeCompare(D)).map((L) => [
								new n.$cl().appendMarkdown(`\`${L}\``),
								I[L].markdownDescription
									? new n.$cl(I[L].markdownDescription, !1)
									: (I[L].description ?? ""),
								new n.$cl().appendCodeblock(
									"json",
									JSON.stringify(
										(0, r.$sg)(I[L].default)
											? (0, C.$1o)(I[L].type)
											: I[L].default,
										null,
										2,
									),
								),
							]);
						return { data: { headers: P, rows: k }, dispose: () => {} };
					}
				}
				w.$Io
					.as(a.Extensions.ExtensionFeaturesRegistry)
					.registerExtensionFeature({
						id: "configuration",
						label: t.localize(2706, null),
						access: { canToggle: !1 },
						renderer: new c.$Ji(y),
					});
			},
		),
		
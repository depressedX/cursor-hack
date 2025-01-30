import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/types.js';
import './debug.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../services/configurationResolver/common/configurationResolver.js';
import '../../../services/configurationResolver/common/configurationResolverUtils.js';
import '../../../../editor/common/services/textResourceConfiguration.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/network.js';
import './debugUtils.js';
import '../../../../platform/telemetry/common/telemetryUtils.js';
import '../../../services/environment/common/environmentService.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../base/common/objects.js';
define(
			de[3280],
			he([1, 0, 4, 28, 112, 10, 358, 1796, 125, 9, 23, 396, 269, 78, 8, 82]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*types*/,
 w /*debug*/,
 E /*configuration*/,
 C /*configurationResolver*/,
 d /*configurationResolverUtils*/,
 m /*textResourceConfiguration*/,
 r /*uri*/,
 u /*network*/,
 a /*debugUtils*/,
 h /*telemetryUtils*/,
 c /*environmentService*/,
 n /*contextkey*/,
 g /*objects*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$NQc = void 0),
					(t = mt(t)),
					(d = mt(d));
				let p = class {
					constructor(f, b, s, l, y, $, v, S, I) {
						(this.f = f),
							(this.g = l),
							(this.h = y),
							(this.i = $),
							(this.j = v),
							(this.k = S),
							(this.l = I),
							(this.b = []),
							(this.a = { type: b.type }),
							this.merge(b, s),
							(this.d =
								typeof this.a.when == "string"
									? n.$Kj.deserialize(this.a.when)
									: void 0),
							(this.e =
								typeof this.a.hiddenWhen == "string"
									? n.$Kj.deserialize(this.a.hiddenWhen)
									: void 0);
					}
					merge(f, b) {
						function s(l, y, $, v = 0) {
							return (0, i.$ng)(l)
								? ((0, i.$ng)(y) &&
										Object.keys(y).forEach((S) => {
											S !== "__proto__" &&
												((0, i.$ng)(l[S]) && (0, i.$ng)(y[S])
													? s(l[S], y[S], $, v + 1)
													: S in l
														? $ && ((v === 0 && S === "type") || (l[S] = y[S]))
														: (l[S] = y[S]));
										}),
									l)
								: y;
						}
						this.b.indexOf(b) < 0 &&
							(this.b.push(b),
							s(this.a, f, b.isBuiltin),
							(0, a.$p3)(f) && (this.c = b));
					}
					async startDebugging(f, b) {
						const s = this.k.getModel().getSession(b);
						return await this.k.startDebugging(
							void 0,
							f,
							{ parentSession: s },
							void 0,
						);
					}
					async createDebugAdapter(f) {
						await this.f.activateDebuggers(
							"onDebugAdapterProtocolTracker",
							this.type,
						);
						const b = this.f.createDebugAdapter(f);
						if (b) return Promise.resolve(b);
						throw new Error(t.localize(5836, null, this.type));
					}
					async substituteVariables(f, b) {
						const s = await this.f.substituteVariables(this.type, f, b);
						return await this.i.resolveWithInteractionReplace(
							f,
							s,
							"launch",
							this.variables,
							s.__configurationTarget,
						);
					}
					runInTerminal(f, b) {
						return this.f.runInTerminal(this.type, f, b);
					}
					get label() {
						return this.a.label || this.a.type;
					}
					get type() {
						return this.a.type;
					}
					get variables() {
						return this.a.variables;
					}
					get configurationSnippets() {
						return this.a.configurationSnippets;
					}
					get languages() {
						return this.a.languages;
					}
					get when() {
						return this.d;
					}
					get hiddenWhen() {
						return this.e;
					}
					get enabled() {
						return !this.d || this.l.contextMatchesRules(this.d);
					}
					get isHiddenFromDropdown() {
						return this.e ? this.l.contextMatchesRules(this.e) : !1;
					}
					get strings() {
						return this.a.strings ?? this.a.uiMessages;
					}
					interestedInLanguage(f) {
						return !!(this.languages && this.languages.indexOf(f) >= 0);
					}
					hasInitialConfiguration() {
						return !!this.a.initialConfigurations;
					}
					hasDynamicConfigurationProviders() {
						return this.k
							.getConfigurationManager()
							.hasDebugConfigurationProvider(
								this.type,
								w.DebugConfigurationProviderTriggerKind.Dynamic,
							);
					}
					hasConfigurationProvider() {
						return this.k
							.getConfigurationManager()
							.hasDebugConfigurationProvider(this.type);
					}
					getInitialConfigurationContent(f) {
						let b = this.a.initialConfigurations || [];
						f && (b = b.concat(f));
						const s =
								this.h.getEOL(
									r.URI.from({ scheme: u.Schemas.untitled, path: "1" }),
								) ===
								`\r
`
									? `\r
`
									: `
`,
							l = JSON.stringify(b, null, "	")
								.split(`
`)
								.map((T) => "	" + T)
								.join(s)
								.trim(),
							y = t.localize(5837, null),
							$ = t.localize(5838, null),
							v = t.localize(
								5839,
								null,
								"https://go.microsoft.com/fwlink/?linkid=830387",
							);
						let S = [
							"{",
							`	// ${y}`,
							`	// ${$}`,
							`	// ${v}`,
							'	"version": "0.2.0",',
							`	"configurations": ${l}`,
							"}",
						].join(s);
						const I = this.g.getValue();
						return (
							I.editor &&
								I.editor.insertSpaces &&
								(S = S.replace(
									new RegExp("	", "g"),
									" ".repeat(I.editor.tabSize),
								)),
							Promise.resolve(S)
						);
					}
					getMainExtensionDescriptor() {
						return this.c || this.b[0];
					}
					getCustomTelemetryEndpoint() {
						const f = this.a.aiKey;
						if (!f) return;
						const b = (0, h.$3p)(this.j.remoteAuthority) !== "other";
						return {
							id: `${this.getMainExtensionDescriptor().publisher}.${this.type}`,
							aiKey: f,
							sendErrorTelemetry: b,
						};
					}
					getSchemaAttributes(f) {
						return this.a.configurationAttributes
							? Object.keys(this.a.configurationAttributes).map((b) => {
									const s = `${this.type}:${b}`,
										l = `${this.type}:${b}:platform`,
										y = this.a.configurationAttributes[b],
										$ = ["name", "type", "request"];
									(y.required =
										y.required && y.required.length ? $.concat(y.required) : $),
										(y.additionalProperties = !1),
										(y.type = "object"),
										y.properties || (y.properties = {});
									const v = y.properties;
									(v.type = {
										enum: [this.type],
										enumDescriptions: [this.label],
										description: t.localize(5840, null),
										pattern: "^(?!node2)",
										deprecationMessage:
											this.a.deprecated ||
											(this.enabled ? void 0 : (0, w.$Y5)(this.type)),
										doNotSuggest: !!this.a.deprecated,
										errorMessage: t.localize(5841, null),
										patternErrorMessage: t.localize(5842, null),
									}),
										(v.request = {
											enum: [b],
											description: t.localize(5843, null),
										});
									for (const I in f.common.properties)
										v[I] = { $ref: `#/definitions/common/properties/${I}` };
									Object.keys(v).forEach((I) => {
										d.$MQc(v[I]);
									}),
										(f[s] = { ...y }),
										(f[l] = {
											type: "object",
											additionalProperties: !1,
											properties: (0, g.$Do)(
												v,
												(I) => I !== "type" && I !== "request" && I !== "name",
											),
										});
									const S = { ...y };
									return (
										(S.properties = {
											...v,
											windows: {
												$ref: `#/definitions/${l}`,
												description: t.localize(5844, null),
											},
											osx: {
												$ref: `#/definitions/${l}`,
												description: t.localize(5845, null),
											},
											linux: {
												$ref: `#/definitions/${l}`,
												description: t.localize(5846, null),
											},
										}),
										S
									);
								})
							: null;
					}
				};
				(e.$NQc = p),
					(e.$NQc = p =
						Ne(
							[
								j(3, E.$gj),
								j(4, m.$YO),
								j(5, C.$zeb),
								j(6, c.$r8),
								j(7, w.$75),
								j(8, n.$6j),
							],
							p,
						));
			},
		),
		
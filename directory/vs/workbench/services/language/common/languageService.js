import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../editor/common/services/languagesAssociations.js';
import '../../../../base/common/resources.js';
import '../../../../editor/common/languages/language.js';
import '../../../../editor/common/services/languageService.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/environment/common/environment.js';
import '../../../../platform/files/common/files.js';
import '../../extensions/common/extensions.js';
import '../../extensions/common/extensionsRegistry.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/log/common/log.js';
import '../../../../base/common/lifecycle.js';
import '../../extensionManagement/common/extensionFeatures.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/htmlContent.js';
import '../../../../base/common/types.js';
define(
			de[701],
			he([
				1, 0, 4, 671, 19, 61, 2774, 10, 113, 22, 53, 175, 20, 34, 3, 244, 30,
				102, 24, 94, 28,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*languagesAssociations*/,
				w /*resources*/,
				E /*language*/,
				C /*languageService*/,
				d /*configuration*/,
				m /*environment*/,
				r /*files*/,
				u /*extensions*/,
				a /*extensionsRegistry*/,
				h /*extensions*/,
				c /*log*/,
				n /*lifecycle*/,
				g /*extensionFeatures*/,
				p /*platform*/,
				o /*descriptors*/,
				f /*arrays*/,
				b /*htmlContent*/,
				s /*types*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$rYb = e.$qYb = void 0),
					(e.$qYb = a.$n2.registerExtensionPoint({
						extensionPoint: "languages",
						jsonSchema: {
							description: (0, t.localize)(12528, null),
							type: "array",
							items: {
								type: "object",
								defaultSnippets: [
									{
										body: {
											id: "${1:languageId}",
											aliases: ["${2:label}"],
											extensions: ["${3:extension}"],
											configuration: "./language-configuration.json",
										},
									},
								],
								properties: {
									id: {
										description: (0, t.localize)(12529, null),
										type: "string",
									},
									aliases: {
										description: (0, t.localize)(12530, null),
										type: "array",
										items: { type: "string" },
									},
									extensions: {
										description: (0, t.localize)(12531, null),
										default: [".foo"],
										type: "array",
										items: { type: "string" },
									},
									filenames: {
										description: (0, t.localize)(12532, null),
										type: "array",
										items: { type: "string" },
									},
									filenamePatterns: {
										description: (0, t.localize)(12533, null),
										type: "array",
										items: { type: "string" },
									},
									mimetypes: {
										description: (0, t.localize)(12534, null),
										type: "array",
										items: { type: "string" },
									},
									firstLine: {
										description: (0, t.localize)(12535, null),
										type: "string",
									},
									configuration: {
										description: (0, t.localize)(12536, null),
										type: "string",
										default: "./language-configuration.json",
									},
									icon: {
										type: "object",
										description: (0, t.localize)(12537, null),
										properties: {
											light: {
												description: (0, t.localize)(12538, null),
												type: "string",
											},
											dark: {
												description: (0, t.localize)(12539, null),
												type: "string",
											},
										},
									},
								},
							},
						},
						activationEventsGenerator: (S, I) => {
							for (const T of S)
								T.id && T.configuration && I.push(`onLanguage:${T.id}`);
						},
					}));
				class l extends n.$1c {
					constructor() {
						super(...arguments), (this.type = "table");
					}
					shouldRender(I) {
						return !!I.contributes?.languages;
					}
					render(I) {
						const T = I.contributes,
							P = T?.languages || [],
							k = [];
						for (const R of P)
							v(R) &&
								k.push({
									id: R.id,
									name: (R.aliases || [])[0] || R.id,
									extensions: R.extensions || [],
									hasGrammar: !1,
									hasSnippets: !1,
								});
						const L = (0, f.$Wb)(k, (R) => R.id);
						if (
							((T?.grammars || []).forEach((R) => {
								if (!(0, s.$lg)(R.language)) return;
								let O = L[R.language];
								O
									? (O.hasGrammar = !0)
									: ((O = {
											id: R.language,
											name: R.language,
											extensions: [],
											hasGrammar: !0,
											hasSnippets: !1,
										}),
										(L[O.id] = O),
										k.push(O));
							}),
							(T?.snippets || []).forEach((R) => {
								if (!(0, s.$lg)(R.language)) return;
								let O = L[R.language];
								O
									? (O.hasSnippets = !0)
									: ((O = {
											id: R.language,
											name: R.language,
											extensions: [],
											hasGrammar: !1,
											hasSnippets: !0,
										}),
										(L[O.id] = O),
										k.push(O));
							}),
							!k.length)
						)
							return { data: { headers: [], rows: [] }, dispose: () => {} };
						const N = [
								(0, t.localize)(12540, null),
								(0, t.localize)(12541, null),
								(0, t.localize)(12542, null),
								(0, t.localize)(12543, null),
								(0, t.localize)(12544, null),
							],
							A = k
								.sort((R, O) => R.id.localeCompare(O.id))
								.map((R) => [
									R.id,
									R.name,
									new b.$cl().appendMarkdown(
										`${R.extensions.map((O) => `\`${O}\``).join("&nbsp;")}`,
									),
									R.hasGrammar ? "\u2714\uFE0E" : "\u2014",
									R.hasSnippets ? "\u2714\uFE0E" : "\u2014",
								]);
						return { data: { headers: N, rows: A }, dispose: () => {} };
					}
				}
				p.$Io
					.as(g.Extensions.ExtensionFeaturesRegistry)
					.registerExtensionFeature({
						id: "languages",
						label: (0, t.localize)(12545, null),
						access: { canToggle: !1 },
						renderer: new o.$Ji(l),
					});
				let y = class extends C.$pYb {
					constructor(I, T, P, k) {
						super(P.verbose || P.isExtensionDevelopment || !P.isBuilt),
							(this.t = k),
							(this.r = T),
							(this.s = I),
							e.$qYb.setHandler((L) => {
								const D = [];
								for (let M = 0, N = L.length; M < N; M++) {
									const A = L[M];
									if (!Array.isArray(A.value)) {
										A.collector.error(
											(0, t.localize)(12546, null, e.$qYb.name),
										);
										continue;
									}
									for (let R = 0, O = A.value.length; R < O; R++) {
										const B = A.value[R];
										if (v(B, A.collector)) {
											let U;
											B.configuration &&
												(U = (0, w.$nh)(
													A.description.extensionLocation,
													B.configuration,
												)),
												D.push({
													id: B.id,
													extensions: B.extensions,
													filenames: B.filenames,
													filenamePatterns: B.filenamePatterns,
													firstLine: B.firstLine,
													aliases: B.aliases,
													mimetypes: B.mimetypes,
													configuration: U,
													icon: B.icon && {
														light: (0, w.$nh)(
															A.description.extensionLocation,
															B.icon.light,
														),
														dark: (0, w.$nh)(
															A.description.extensionLocation,
															B.icon.dark,
														),
													},
												});
										}
									}
								}
								this.n.setDynamicLanguages(D);
							}),
							this.u(),
							this.D(
								this.r.onDidChangeConfiguration((L) => {
									L.affectsConfiguration(r.$Ll) && this.u();
								}),
							),
							this.s.whenInstalledExtensionsRegistered().then(() => {
								this.u();
							}),
							this.D(
								this.onDidRequestRichLanguageFeatures((L) => {
									this.s.activateByEvent(`onLanguage:${L}`),
										this.s.activateByEvent("onLanguage");
								}),
							);
					}
					u() {
						const I = this.r.getValue();
						(0, i.$kYb)(),
							I.files?.associations &&
								Object.keys(I.files.associations).forEach((T) => {
									const P = I.files.associations[T];
									if (typeof P != "string") {
										this.t.warn(
											`Ignoring configured 'files.associations' for '${T}' because its type is not a string but '${typeof P}'`,
										);
										return;
									}
									const k = this.getMimeType(P) || `text/x-${P}`;
									(0, i.$iYb)({ id: P, mime: k, filepattern: T });
								}),
							this.g.fire();
					}
				};
				(e.$rYb = y),
					(e.$rYb = y =
						Ne([j(0, u.$q2), j(1, d.$gj), j(2, m.$Ti), j(3, c.$ik)], y));
				function $(S) {
					return typeof S > "u"
						? !0
						: Array.isArray(S)
							? S.every((I) => typeof I == "string")
							: !1;
				}
				function v(S, I) {
					return S
						? typeof S.id != "string"
							? (I?.error((0, t.localize)(12548, null, "id")), !1)
							: $(S.extensions)
								? $(S.filenames)
									? typeof S.firstLine < "u" && typeof S.firstLine != "string"
										? (I?.error((0, t.localize)(12551, null, "firstLine")), !1)
										: typeof S.configuration < "u" &&
												typeof S.configuration != "string"
											? (I?.error(
													(0, t.localize)(12552, null, "configuration"),
												),
												!1)
											: $(S.aliases)
												? $(S.mimetypes)
													? typeof S.icon < "u" &&
														(typeof S.icon != "object" ||
															typeof S.icon.light != "string" ||
															typeof S.icon.dark != "string")
														? (I?.error(
																(0, t.localize)(
																	12555,
																	null,
																	"icon",
																	"light",
																	"dark",
																),
															),
															!1)
														: !0
													: (I?.error(
															(0, t.localize)(12554, null, "mimetypes"),
														),
														!1)
												: (I?.error((0, t.localize)(12553, null, "aliases")),
													!1)
									: (I?.error((0, t.localize)(12550, null, "filenames")), !1)
								: (I?.error((0, t.localize)(12549, null, "extensions")), !1)
						: (I?.error((0, t.localize)(12547, null, e.$qYb.name)), !1);
				}
				(0, h.$lK)(E.$nM, y, h.InstantiationType.Eager);
			},
		)

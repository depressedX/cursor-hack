import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/registry/common/platform.js';
define(
			de[1223],
			he([1, 0, 6, 4, 81, 20, 5, 30]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$prc = e.$orc = e.$nrc = void 0),
					(e.$nrc = (0, C.$Mi)("IEditorBreadcrumbsService"));
				class m {
					constructor() {
						this.a = new Map();
					}
					register(a, h) {
						if (this.a.has(a))
							throw new Error(`group (${a}) has already a widget`);
						return this.a.set(a, h), { dispose: () => this.a.delete(a) };
					}
					getWidget(a) {
						return this.a.get(a);
					}
				}
				(e.$orc = m), (0, E.$lK)(e.$nrc, m, E.InstantiationType.Delayed);
				class r {
					constructor() {}
					static {
						this.IsEnabled = r.a("breadcrumbs.enabled");
					}
					static {
						this.UseQuickPick = r.a("breadcrumbs.useQuickPick");
					}
					static {
						this.FilePath = r.a("breadcrumbs.filePath");
					}
					static {
						this.SymbolPath = r.a("breadcrumbs.symbolPath");
					}
					static {
						this.SymbolSortOrder = r.a("breadcrumbs.symbolSortOrder");
					}
					static {
						this.Icons = r.a("breadcrumbs.icons");
					}
					static {
						this.TitleScrollbarSizing = r.a(
							"workbench.editor.titleScrollbarSizing",
						);
					}
					static {
						this.FileExcludes = r.a("files.exclude");
					}
					static a(a) {
						return {
							bindTo(h) {
								const c = new t.$re(),
									n = h.onDidChangeConfiguration((g) => {
										g.affectsConfiguration(a) && c.fire(void 0);
									});
								return new (class {
									constructor() {
										(this.name = a), (this.onDidChange = c.event);
									}
									getValue(g) {
										return g ? h.getValue(a, g) : h.getValue(a);
									}
									updateValue(g, p) {
										return p ? h.updateValue(a, g, p) : h.updateValue(a, g);
									}
									dispose() {
										n.dispose(), c.dispose();
									}
								})();
							},
						};
					}
				}
				(e.$prc = r),
					d.$Io
						.as(w.$No.Configuration)
						.registerConfiguration({
							id: "breadcrumbs",
							title: (0, i.localize)(3067, null),
							order: 101,
							type: "object",
							properties: {
								"breadcrumbs.enabled": {
									description: (0, i.localize)(3068, null),
									type: "boolean",
									default: !0,
								},
								"breadcrumbs.filePath": {
									description: (0, i.localize)(3069, null),
									type: "string",
									default: "on",
									enum: ["on", "off", "last"],
									enumDescriptions: [
										(0, i.localize)(3070, null),
										(0, i.localize)(3071, null),
										(0, i.localize)(3072, null),
									],
								},
								"breadcrumbs.symbolPath": {
									description: (0, i.localize)(3073, null),
									type: "string",
									default: "on",
									enum: ["on", "off", "last"],
									enumDescriptions: [
										(0, i.localize)(3074, null),
										(0, i.localize)(3075, null),
										(0, i.localize)(3076, null),
									],
								},
								"breadcrumbs.symbolSortOrder": {
									description: (0, i.localize)(3077, null),
									type: "string",
									default: "position",
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									enum: ["position", "name", "type"],
									enumDescriptions: [
										(0, i.localize)(3078, null),
										(0, i.localize)(3079, null),
										(0, i.localize)(3080, null),
									],
								},
								"breadcrumbs.icons": {
									description: (0, i.localize)(3081, null),
									type: "boolean",
									default: !0,
								},
								"breadcrumbs.showFiles": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3082, null),
								},
								"breadcrumbs.showModules": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3083, null),
								},
								"breadcrumbs.showNamespaces": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3084, null),
								},
								"breadcrumbs.showPackages": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3085, null),
								},
								"breadcrumbs.showClasses": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3086, null),
								},
								"breadcrumbs.showMethods": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3087, null),
								},
								"breadcrumbs.showProperties": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3088, null),
								},
								"breadcrumbs.showFields": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3089, null),
								},
								"breadcrumbs.showConstructors": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3090, null),
								},
								"breadcrumbs.showEnums": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3091, null),
								},
								"breadcrumbs.showInterfaces": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3092, null),
								},
								"breadcrumbs.showFunctions": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3093, null),
								},
								"breadcrumbs.showVariables": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3094, null),
								},
								"breadcrumbs.showConstants": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3095, null),
								},
								"breadcrumbs.showStrings": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3096, null),
								},
								"breadcrumbs.showNumbers": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3097, null),
								},
								"breadcrumbs.showBooleans": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3098, null),
								},
								"breadcrumbs.showArrays": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3099, null),
								},
								"breadcrumbs.showObjects": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3100, null),
								},
								"breadcrumbs.showKeys": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3101, null),
								},
								"breadcrumbs.showNull": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3102, null),
								},
								"breadcrumbs.showEnumMembers": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3103, null),
								},
								"breadcrumbs.showStructs": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3104, null),
								},
								"breadcrumbs.showEvents": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3105, null),
								},
								"breadcrumbs.showOperators": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3106, null),
								},
								"breadcrumbs.showTypeParameters": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3107, null),
								},
							},
						});
			},
		),
		
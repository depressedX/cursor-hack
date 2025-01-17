import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/contrib/folding/browser/folding.js';
import '../../../../nls.js';
import '../../../../platform/registry/common/platform.js';
import '../../../common/contributions.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../editor/common/config/editorConfigurationSchema.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../services/extensions/common/extensions.js';
import '../../../../platform/configuration/common/configuration.js';
define(
			de[3428],
			he([1, 0, 3, 350, 4, 30, 55, 81, 602, 52, 53, 10]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				var h;
				Object.defineProperty(e, "__esModule", { value: !0 }), (w = mt(w));
				let c = class extends t.$1c {
					static {
						h = this;
					}
					static {
						this.configName = "editor.defaultFoldingRangeProvider";
					}
					static {
						this.extensionIds = [];
					}
					static {
						this.extensionItemLabels = [];
					}
					static {
						this.extensionDescriptions = [];
					}
					constructor(g, p) {
						super(),
							(this.c = g),
							(this.f = p),
							this.B.add(this.c.onDidChangeExtensions(this.g, this)),
							this.B.add(
								i.$ZNb.setFoldingRangeProviderSelector(this.h.bind(this)),
							),
							this.g();
					}
					async g() {
						await this.c.whenInstalledExtensionsRegistered(),
							(h.extensionIds.length = 0),
							(h.extensionItemLabels.length = 0),
							(h.extensionDescriptions.length = 0),
							h.extensionIds.push(null),
							h.extensionItemLabels.push(w.localize(7040, null)),
							h.extensionDescriptions.push(w.localize(7041, null));
						const g = [],
							p = [];
						for (const f of this.c.extensions)
							(f.main || f.browser) &&
								(f.categories?.find((b) => b === "Programming Languages")
									? g.push(f)
									: p.push(f));
						const o = (f, b) => f.name.localeCompare(b.name);
						for (const f of g.sort(o))
							h.extensionIds.push(f.identifier.value),
								h.extensionItemLabels.push(f.displayName ?? ""),
								h.extensionDescriptions.push(f.description ?? "");
						for (const f of p.sort(o))
							h.extensionIds.push(f.identifier.value),
								h.extensionItemLabels.push(f.displayName ?? ""),
								h.extensionDescriptions.push(f.description ?? "");
					}
					h(g, p) {
						const o = this.f.getValue(h.configName, {
							overrideIdentifier: p.getLanguageId(),
						});
						if (o) return g.filter((f) => f.id === o);
					}
				};
				(c = h = Ne([j(0, u.$q2), j(1, a.$gj)], c)),
					E.$Io
						.as(d.$No.Configuration)
						.registerConfiguration({
							...m.$DAb,
							properties: {
								[c.configName]: {
									description: w.localize(7042, null),
									type: ["string", "null"],
									default: null,
									enum: c.extensionIds,
									enumItemLabels: c.extensionItemLabels,
									markdownEnumDescriptions: c.extensionDescriptions,
								},
							},
						}),
					E.$Io
						.as(C.Extensions.Workbench)
						.registerWorkbenchContribution(c, r.LifecyclePhase.Restored);
			},
		),
		
import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../../../nls.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/extensions/common/extensions.js';
import '../../../../platform/extensions/common/extensionsApiProposals.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/registry/common/platform.js';
import '../../environment/common/environmentService.js';
import '../../extensionManagement/common/extensionFeatures.js';
import '../../../../base/common/htmlContent.js';
define(
			de[3322],
			he([1, 0, 24, 4, 3, 109, 1179, 102, 34, 62, 30, 78, 244, 94]),
			function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*nls*/,
 w /*lifecycle*/,
 E /*extensions*/,
 C /*extensionsApiProposals*/,
 d /*descriptors*/,
 m /*log*/,
 r /*productService*/,
 u /*platform*/,
 a /*environmentService*/,
 h /*extensionFeatures*/,
 c /*htmlContent*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$W4c = void 0);
				let n = class {
					constructor(o, f, b) {
						if (
							((this.e = o),
							(this.f = f),
							(this.c = new Set(
								(f.extensionEnabledProposedApi ?? []).map((s) =>
									E.$Gn.toKey(s),
								),
							)),
							(this.b =
								!f.isBuilt ||
								(f.isExtensionDevelopment && b.quality !== "stable") ||
								(this.c.size === 0 &&
									Array.isArray(f.extensionEnabledProposedApi))),
							(this.d = new Map()),
							b.extensionEnabledApiProposals)
						)
							for (const [s, l] of Object.entries(
								b.extensionEnabledApiProposals,
							)) {
								const y = E.$Gn.toKey(s),
									$ = l.filter((v) =>
										C.allApiProposals[v]
											? !0
											: (o.warn(
													`Via 'product.json#extensionEnabledApiProposals' extension '${y}' wants API proposal '${v}' but that proposal DOES NOT EXIST. Likely, the proposal has been finalized (check 'vscode.d.ts') or was abandoned.`,
												),
												!1),
									);
								this.d.set(y, $);
							}
					}
					updateEnabledApiProposals(o) {
						for (const f of o) this.g(f);
					}
					g(o) {
						const f = E.$Gn.toKey(o.identifier);
						if (
							((0, t.$Pb)(o.enabledApiProposals) &&
								(o.enabledApiProposals = o.enabledApiProposals.filter((b) => {
									const s = !!C.allApiProposals[b];
									return (
										s ||
											this.e.error(
												`Extension '${f}' wants API proposal '${b}' but that proposal DOES NOT EXIST. Likely, the proposal has been finalized (check 'vscode.d.ts') or was abandoned.`,
											),
										s
									);
								})),
							this.d.has(f))
						) {
							const b = this.d.get(f),
								s = new Set(b),
								l = new Set(o.enabledApiProposals),
								y = new Set([...l].filter(($) => !s.has($)));
							y.size > 0 &&
								(this.e.error(`Extension '${f}' appears in product.json but enables LESS API proposals than the extension wants.
package.json (LOSES): ${[...l].join(", ")}
product.json (WINS): ${[...s].join(", ")}`),
								this.f.isExtensionDevelopment &&
									(this.e.error(
										`Proceeding with EXTRA proposals (${[...y].join(", ")}) because extension is in development mode. Still, this EXTENSION WILL BE BROKEN unless product.json is updated.`,
									),
									b.push(...y))),
								(o.enabledApiProposals = b);
							return;
						}
						this.b ||
							this.c.has(f) ||
							(!o.isBuiltin &&
								(0, t.$Pb)(o.enabledApiProposals) &&
								(this.e.error(
									`Extension '${o.identifier.value} CANNOT USE these API proposals '${o.enabledApiProposals?.join(", ") || "*"}'. You MUST start in extension development mode or use the --enable-proposed-api command line flag`,
								),
								(o.enabledApiProposals = [])));
					}
				};
				(e.$W4c = n),
					(e.$W4c = n = Ne([j(0, m.$ik), j(1, a.$r8), j(2, r.$Bk)], n));
				class g extends w.$1c {
					constructor() {
						super(...arguments), (this.type = "markdown");
					}
					shouldRender(o) {
						return (
							!!o.originalEnabledApiProposals?.length ||
							!!o.enabledApiProposals?.length
						);
					}
					render(o) {
						const f =
								o.originalEnabledApiProposals ?? o.enabledApiProposals ?? [],
							b = new c.$cl();
						if (f.length)
							for (const s of f)
								b.appendMarkdown(`- \`${s}\`
`);
						return { data: b, dispose: () => {} };
					}
				}
				u.$Io
					.as(h.Extensions.ExtensionFeaturesRegistry)
					.registerExtensionFeature({
						id: "enabledApiProposals",
						label: (0, i.localize)(12350, null),
						access: { canToggle: !1 },
						renderer: new d.$Ji(g),
					});
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	
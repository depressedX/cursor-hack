import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../services/environment/electron-sandbox/environmentService.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../services/extensions/common/extensions.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/files/common/files.js';
import '../../../../base/common/buffer.js';
import '../../../../base/common/uri.js';
import '../../../../platform/product/common/productService.js';
define(
			de[3307],
			he([1, 0, 151, 30, 81, 53, 31, 22, 76, 9, 62]),
			function (ce /*require*/,
 e /*exports*/,
 t /*environmentService*/,
 i /*platform*/,
 w /*configurationRegistry*/,
 E /*extensions*/,
 C /*commands*/,
 d /*files*/,
 m /*buffer*/,
 r /*uri*/,
 u /*productService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$igd = void 0);
				let a = class {
					constructor(c, n, g, p, o) {
						(this.c = n), (this.d = g), (this.e = p), (this.f = o);
						const f = c.args["export-default-configuration"];
						f && this.g(r.URI.file(f));
					}
					async g(c) {
						try {
							await this.c.whenInstalledExtensionsRegistered(), await this.h(c);
						} finally {
							this.d.executeCommand("workbench.action.quit");
						}
					}
					async h(c) {
						const n = this.i(),
							g = JSON.stringify(n, void 0, "  ");
						await this.e.writeFile(c, m.$Te.fromString(g));
					}
					i() {
						const c = i.$Io.as(w.$No.Configuration),
							n = c.getConfigurations().slice(),
							g = [],
							p = new Set(),
							o = (l, y) => {
								if (p.has(l)) {
									console.warn("Setting is registered twice: " + l);
									return;
								}
								p.add(l);
								const $ = {
									name: l,
									description: y.description || y.markdownDescription || "",
									default: y.default,
									type: y.type,
								};
								y.enum && ($.enum = y.enum),
									(y.enumDescriptions || y.markdownEnumDescriptions) &&
										($.enumDescriptions =
											y.enumDescriptions || y.markdownEnumDescriptions),
									g.push($);
							},
							f = (l) => {
								if (l.properties)
									for (const y in l.properties) o(y, l.properties[y]);
								l.allOf?.forEach(f);
							};
						n.forEach(f);
						const b = c.getExcludedConfigurationProperties();
						for (const l in b) o(l, b[l]);
						return {
							settings: g.sort((l, y) => l.name.localeCompare(y.name)),
							buildTime: Date.now(),
							commit: this.f.commit,
							buildNumber: this.f.settingsSearchBuildId,
						};
					}
				};
				(e.$igd = a),
					(e.$igd = a =
						Ne(
							[
								j(0, t.$ucd),
								j(1, E.$q2),
								j(2, C.$ek),
								j(3, d.$ll),
								j(4, u.$Bk),
							],
							a,
						));
			},
		)

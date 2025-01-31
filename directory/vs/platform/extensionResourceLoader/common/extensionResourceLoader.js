import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/platform.js';
import '../../../base/common/strings.js';
import '../../../base/common/uri.js';
import '../../instantiation/common/instantiation.js';
import '../../externalServices/common/serviceMachineId.js';
import '../../telemetry/common/telemetry.js';
import '../../telemetry/common/telemetryUtils.js';
import '../../../base/common/network.js';
import '../../extensions/common/extensions.js';
define(
			de[546],
			he([1, 0, 12, 37, 9, 5, 678, 32, 269, 23, 109]),
			function (ce /*require*/,
 e /*exports*/,
 t /*platform*/,
 i /*strings*/,
 w /*uri*/,
 E /*instantiation*/,
 C /*serviceMachineId*/,
 d /*telemetry*/,
 m /*telemetryUtils*/,
 r /*network*/,
 u /*extensions*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$dYb = e.$bYb = void 0),
					(e.$cYb = h);
				const a = "/web-extension-resource/";
				e.$bYb = (0, E.$Mi)("extensionResourceLoaderService");
				function h(n, g) {
					if (n.query !== `target=${g}`) return;
					const p = n.path.split("/");
					if (p[3])
						return (
							(p[3] = `${p[3]}+${g}`),
							n.with({ query: null, path: p.join("/") })
						);
				}
				class c {
					constructor(g, p, o, f, b) {
						(this.c = g),
							(this.d = p),
							(this.e = o),
							(this.f = f),
							(this.g = b),
							o.extensionsGallery &&
								((this.a = o.extensionsGallery.resourceUrlTemplate),
								(this.b = this.a ? this.k(w.URI.parse(this.a)) : void 0));
					}
					get supportsExtensionGalleryResources() {
						return this.a !== void 0;
					}
					getExtensionGalleryResourceURL(
						{ publisher: g, name: p, version: o, targetPlatform: f },
						b,
					) {
						if (this.a) {
							const s = w.URI.parse(
								(0, i.$lf)(this.a, {
									publisher: g,
									name: p,
									version:
										f !== void 0 &&
										f !== u.TargetPlatform.UNDEFINED &&
										f !== u.TargetPlatform.UNKNOWN &&
										f !== u.TargetPlatform.UNIVERSAL
											? `${o}+${f}`
											: o,
									path: "extension",
								}),
							);
							return this.l(s)
								? s.with({ scheme: r.$Zg.getPreferredWebSchema() })
								: s;
						}
					}
					isExtensionGalleryResource(g) {
						return !!this.b && this.b === this.k(g);
					}
					async h() {
						const g = {
							"X-Client-Name": `${this.e.applicationName}${t.$r ? "-web" : ""}`,
							"X-Client-Version": this.e.version,
						};
						return (
							(0, m.$Xp)(this.e, this.f) &&
								(0, m.$Zp)(this.g) === d.TelemetryLevel.USAGE &&
								(g["X-Machine-Id"] = await this.j()),
							this.e.commit && (g["X-Client-Commit"] = this.e.commit),
							g
						);
					}
					j() {
						return (
							this.i ||
								(this.i = (0, C.getServiceMachineId)(this.f, this.c, this.d)),
							this.i
						);
					}
					k(g) {
						if (this.l(g)) return g.authority;
						const p = g.authority.indexOf(".");
						return p !== -1 ? g.authority.substring(p + 1) : void 0;
					}
					l(g) {
						const p = g.path,
							o = r.$Zg.getServerRootPath();
						return p.startsWith(o) && p.startsWith(a, o.length);
					}
				}
				e.$dYb = c;
			},
		)

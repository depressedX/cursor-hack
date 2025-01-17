import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/extensions/common/extensions.js';
import '../../../../base/common/platform.js';
import '../../environment/common/environmentService.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/extensionManagement/common/extensionManagementUtil.js';
import '../../../../base/common/network.js';
import '../../../../base/common/uri.js';
import '../../../../platform/extensionResourceLoader/common/extensionResourceLoader.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/extensionManagement/common/extensionNls.js';
import '../../../../platform/log/common/log.js';
import '../../../../base/browser/window.js';
define(
			de[3291],
			he([1, 0, 109, 12, 78, 68, 20, 154, 23, 9, 546, 62, 1598, 34, 75]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zwc = void 0);
				let g = class {
					constructor(o, f, b, s, l) {
						if (((this.c = b), (this.d = l), (this.a = []), i.$r)) {
							const y = s.extensionsGallery?.nlsBaseUrl;
							y &&
								s.commit &&
								!i.Language.isDefaultVariant() &&
								(this.b = r.URI.joinPath(
									r.URI.parse(y),
									s.commit,
									s.version,
									i.Language.value(),
								));
							const $ = m.$7g.asBrowserUri(m.$2g);
							if ($) {
								let v = [];
								if (o.isBuilt) v = [];
								else {
									const S = n.$Bfb.document.getElementById(
											"vscode-workbench-builtin-extensions",
										),
										I = S ? S.getAttribute("data-settings") : void 0;
									if (I)
										try {
											v = JSON.parse(I);
										} catch {}
								}
								this.a = v.map(async (S) => {
									const I = (0, d.$_p)(
										S.packageJSON.publisher,
										S.packageJSON.name,
									);
									return {
										identifier: { id: I },
										location: f.extUri.joinPath($, S.extensionPath),
										type: t.ExtensionType.System,
										isBuiltin: !0,
										manifest: S.packageNLS
											? await this.f(I, S.packageJSON, S.packageNLS)
											: S.packageJSON,
										readmeUrl: S.readmePath
											? f.extUri.joinPath($, S.readmePath)
											: void 0,
										changelogUrl: S.changelogPath
											? f.extUri.joinPath($, S.changelogPath)
											: void 0,
										targetPlatform: t.TargetPlatform.WEB,
										validations: [],
										isValid: !0,
									};
								});
							}
						}
					}
					async scanBuiltinExtensions() {
						return [...(await Promise.all(this.a))];
					}
					async f(o, f, b) {
						if (!this.b) return (0, h.$cr)(this.d, f, b);
						const s = r.URI.joinPath(this.b, o, "package");
						try {
							const l = await this.c.readExtensionResource(s),
								y = JSON.parse(l.toString());
							return (0, h.$cr)(this.d, f, y, b);
						} catch (l) {
							return this.d.error(l), (0, h.$cr)(this.d, f, b);
						}
					}
				};
				(e.$zwc = g),
					(e.$zwc = g =
						Ne(
							[
								j(0, w.$r8),
								j(1, E.$Vl),
								j(2, u.$bYb),
								j(3, a.$Bk),
								j(4, c.$ik),
							],
							g,
						)),
					(0, C.$lK)(t.$Pn, g, C.InstantiationType.Delayed);
			},
		),
		
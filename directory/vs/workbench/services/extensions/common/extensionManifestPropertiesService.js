import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/extensions/common/extensions.js';
import './extensionsRegistry.js';
import '../../../../platform/extensionManagement/common/extensionManagementUtil.js';
import '../../../../base/common/arrays.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../base/common/lifecycle.js';
import '../../workspaces/common/workspaceTrust.js';
import '../../../../base/common/types.js';
import '../../../../platform/workspace/common/workspaceTrust.js';
import '../../../../platform/log/common/log.js';
import '../../../../base/common/platform.js';
define(
			de[384],
			he([1, 0, 10, 109, 175, 154, 24, 62, 5, 20, 3, 1059, 28, 174, 34, 12]),
			function (ce /*require*/,
 e /*exports*/,
 t /*configuration*/,
 i /*extensions*/,
 w /*extensionsRegistry*/,
 E /*extensionManagementUtil*/,
 C /*arrays*/,
 d /*productService*/,
 m /*instantiation*/,
 r /*extensions*/,
 u /*lifecycle*/,
 a /*workspaceTrust*/,
 h /*types*/,
 c /*workspaceTrust*/,
 n /*log*/,
 g /*platform*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$KSb = e.$JSb = void 0),
					(e.$JSb = (0, m.$Mi)("extensionManifestPropertiesService"));
				let p = class extends u.$1c {
					constructor(f, b, s, l) {
						super(),
							(this.m = f),
							(this.n = b),
							(this.q = s),
							(this.s = l),
							(this.a = null),
							(this.b = null),
							(this.c = null),
							(this.f = null),
							(this.g = null),
							(this.h = new i.$In());
						const y = b.inspect(a.$DSb).userValue || {};
						for (const $ of Object.keys(y)) this.h.set($, y[$]);
						if (((this.j = new Map()), f.extensionUntrustedWorkspaceSupport))
							for (const $ of Object.keys(f.extensionUntrustedWorkspaceSupport))
								this.j.set($, f.extensionUntrustedWorkspaceSupport[$]);
					}
					prefersExecuteOnUI(f) {
						const b = this.getExtensionKind(f);
						return b.length > 0 && b[0] === "ui";
					}
					prefersExecuteOnWorkspace(f) {
						const b = this.getExtensionKind(f);
						return b.length > 0 && b[0] === "workspace";
					}
					prefersExecuteOnWeb(f) {
						const b = this.getExtensionKind(f);
						return b.length > 0 && b[0] === "web";
					}
					canExecuteOnUI(f) {
						return this.getExtensionKind(f).some((s) => s === "ui");
					}
					canExecuteOnWorkspace(f) {
						return this.getExtensionKind(f).some((s) => s === "workspace");
					}
					canExecuteOnWeb(f) {
						return this.getExtensionKind(f).some((s) => s === "web");
					}
					getExtensionKind(f) {
						const b = this.t(f),
							s = this.w(f);
						if (s && s.length > 0) {
							const l = [];
							for (const y of s) y !== "-web" && l.push(y);
							return (
								s.includes("-web") &&
									!l.length &&
									(l.push("ui"), l.push("workspace")),
								g.$r &&
									!s.includes("-web") &&
									!s.includes("web") &&
									b.includes("web") &&
									l.push("web"),
								l
							);
						}
						return b;
					}
					getUserConfiguredExtensionKind(f) {
						if (this.c === null) {
							const s = new i.$In(),
								l = this.n.getValue("remote.extensionKind") || {};
							for (const y of Object.keys(l)) s.set(y, l[y]);
							this.c = s;
						}
						const b = this.c.get(f.id);
						return b ? this.H(b) : void 0;
					}
					getExtensionUntrustedWorkspaceSupportType(f) {
						if (!this.q.isWorkspaceTrustEnabled() || !f.main) return !0;
						const b = this.F(f),
							s = this.G(f);
						return b !== void 0
							? b
							: s?.override !== void 0
								? s.override
								: f.capabilities?.untrustedWorkspaces?.supported !== void 0
									? f.capabilities.untrustedWorkspaces.supported
									: s?.default !== void 0
										? s.default
										: !1;
					}
					getExtensionVirtualWorkspaceSupportType(f) {
						const b = this.C(f);
						if (b !== void 0) return b;
						const s = this.z(f);
						if (s?.override !== void 0) return s.override;
						const l = f.capabilities?.virtualWorkspaces;
						if ((0, h.$rg)(l)) return l;
						if (l) {
							const y = l.supported;
							if ((0, h.$rg)(y) || y === "limited") return y;
						}
						return s?.default !== void 0 ? s.default : !0;
					}
					t(f) {
						if (f.main)
							return f.browser
								? g.$r
									? ["workspace", "web"]
									: ["workspace"]
								: ["workspace"];
						if (f.browser) return ["web"];
						let b = [...i.$Dn];
						if (
							(((0, C.$Pb)(f.extensionPack) ||
								(0, C.$Pb)(f.extensionDependencies)) &&
								(b = g.$r ? ["workspace", "web"] : ["workspace"]),
							f.contributes)
						)
							for (const s of Object.keys(f.contributes)) {
								const l = this.u(s);
								l.length && (b = b.filter((y) => l.includes(y)));
							}
						return (
							b.length ||
								this.s.warn(
									"Cannot deduce extensionKind for extension",
									(0, E.$_p)(f.publisher, f.name),
								),
							b
						);
					}
					u(f) {
						if (this.a === null) {
							const s = new Map();
							w.$n2
								.getExtensionPoints()
								.forEach((l) => s.set(l.name, l.defaultExtensionKind || [])),
								(this.a = s);
						}
						let b = this.a.get(f);
						return b ||
							((b = this.m.extensionPointExtensionKind
								? this.m.extensionPointExtensionKind[f]
								: void 0),
							b)
							? b
							: g.$r
								? ["workspace", "web"]
								: ["workspace"];
					}
					w(f) {
						const b = { id: (0, E.$_p)(f.publisher, f.name) };
						let s = this.getUserConfiguredExtensionKind(b);
						return typeof s < "u"
							? this.H(s)
							: ((s = this.y(f)),
								typeof s < "u"
									? s
									: ((s = f.extensionKind),
										typeof s < "u"
											? ((s = this.H(s)),
												s.filter((l) => ["ui", "workspace"].includes(l)))
											: null));
					}
					y(f) {
						if (this.b === null) {
							const s = new i.$In();
							if (this.m.extensionKind)
								for (const l of Object.keys(this.m.extensionKind))
									s.set(l, this.m.extensionKind[l]);
							this.b = s;
						}
						const b = (0, E.$_p)(f.publisher, f.name);
						return this.b.get(b);
					}
					z(f) {
						if (this.f === null) {
							const s = new i.$In();
							if (this.m.extensionVirtualWorkspacesSupport)
								for (const l of Object.keys(
									this.m.extensionVirtualWorkspacesSupport,
								))
									s.set(l, this.m.extensionVirtualWorkspacesSupport[l]);
							this.f = s;
						}
						const b = (0, E.$_p)(f.publisher, f.name);
						return this.f.get(b);
					}
					C(f) {
						if (this.g === null) {
							const s = new i.$In(),
								l =
									this.n.getValue("extensions.supportVirtualWorkspaces") || {};
							for (const y of Object.keys(l)) l[y] !== void 0 && s.set(y, l[y]);
							this.g = s;
						}
						const b = (0, E.$_p)(f.publisher, f.name);
						return this.g.get(b);
					}
					F(f) {
						const b = (0, E.$_p)(f.publisher, f.name),
							s = this.h.get(b);
						if (s && (s.version === void 0 || s.version === f.version))
							return s.supported;
					}
					G(f) {
						const b = (0, E.$_p)(f.publisher, f.name);
						return this.j.get(b);
					}
					H(f) {
						return Array.isArray(f)
							? f
							: f === "ui"
								? ["ui", "workspace"]
								: [f];
					}
				};
				(e.$KSb = p),
					(e.$KSb = p =
						Ne([j(0, d.$Bk), j(1, t.$gj), j(2, c.$oO), j(3, n.$ik)], p)),
					(0, r.$lK)(e.$JSb, p, r.InstantiationType.Delayed);
			},
		)

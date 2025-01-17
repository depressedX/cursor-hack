import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/uri.js';
import '../../../platform/registry/common/platform.js';
import '../../../platform/configuration/common/configurationRegistry.js';
import '../../../platform/workspace/common/workspace.js';
import '../common/extHost.protocol.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../../../platform/configuration/common/configuration.js';
import '../../../platform/environment/common/environment.js';
define(
			de[3342],
			he([1, 0, 9, 30, 81, 25, 88, 101, 10, 113]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Rmc = void 0);
				let u = class {
					constructor(h, c, n, g) {
						(this.b = c), (this.c = n), (this.d = g);
						const p = h.getProxy(C.$mbb.ExtHostConfiguration);
						p.$initializeConfiguration(this.f()),
							(this.a = n.onDidChangeConfiguration((o) => {
								p.$acceptConfigurationChanged(this.f(), o.change);
							}));
					}
					f() {
						const h = {
							...this.c.getConfigurationData(),
							configurationScopes: [],
						};
						return (
							(!this.d.isBuilt || this.d.isExtensionDevelopment) &&
								(h.configurationScopes = (0, w.$3o)()),
							h
						);
					}
					dispose() {
						this.a.dispose();
					}
					$updateConfigurationOption(h, c, n, g, p) {
						return (
							(g = {
								resource: g?.resource ? t.URI.revive(g.resource) : void 0,
								overrideIdentifier: g?.overrideIdentifier,
							}),
							this.g(h, c, n, g, p)
						);
					}
					$removeConfigurationOption(h, c, n, g) {
						return (
							(n = {
								resource: n?.resource ? t.URI.revive(n.resource) : void 0,
								overrideIdentifier: n?.overrideIdentifier,
							}),
							this.g(h, c, void 0, n, g)
						);
					}
					g(h, c, n, g, p) {
						h = h ?? this.i(c, g);
						const o = this.c.inspect(c, g);
						switch (h) {
							case m.ConfigurationTarget.MEMORY:
								return this.h(c, n, h, o?.memory?.override, g, p);
							case m.ConfigurationTarget.WORKSPACE_FOLDER:
								return this.h(c, n, h, o?.workspaceFolder?.override, g, p);
							case m.ConfigurationTarget.WORKSPACE:
								return this.h(c, n, h, o?.workspace?.override, g, p);
							case m.ConfigurationTarget.USER_REMOTE:
								return this.h(c, n, h, o?.userRemote?.override, g, p);
							default:
								return this.h(c, n, h, o?.userLocal?.override, g, p);
						}
					}
					h(h, c, n, g, p, o) {
						return (
							(p =
								o === !0
									? p
									: o === !1
										? { resource: p.resource }
										: p.overrideIdentifier && g !== void 0
											? p
											: { resource: p.resource }),
							this.c.updateValue(h, c, p, n, { donotNotifyError: !0 })
						);
					}
					i(h, c) {
						if (
							c.resource &&
							this.b.getWorkbenchState() === E.WorkbenchState.WORKSPACE
						) {
							const n = i.$Io
								.as(w.$No.Configuration)
								.getConfigurationProperties();
							if (
								n[h] &&
								(n[h].scope === w.ConfigurationScope.RESOURCE ||
									n[h].scope === w.ConfigurationScope.LANGUAGE_OVERRIDABLE)
							)
								return m.ConfigurationTarget.WORKSPACE_FOLDER;
						}
						return m.ConfigurationTarget.WORKSPACE;
					}
				};
				(e.$Rmc = u),
					(e.$Rmc = u =
						Ne(
							[
								(0, d.$tmc)(C.$lbb.MainThreadConfiguration),
								j(1, E.$Vi),
								j(2, m.$gj),
								j(3, r.$Ti),
							],
							u,
						));
			},
		),
		
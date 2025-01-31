import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/strings.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../../platform/registry/common/platform.js';
import '../../../common/contributions.js';
import './actions/signOutOfAccountAction.js';
import '../../../services/authentication/common/authentication.js';
import '../../../services/environment/browser/environmentService.js';
import '../../../services/extensionManagement/common/extensionFeatures.js';
import '../../../services/extensions/common/extensionsRegistry.js';
import './actions/manageTrustedExtensionsForAccountAction.js';
define(
			de[3412],
			he([
				1, 0, 3, 37, 4, 11, 31, 8, 102, 30, 55, 3245, 357, 286, 244, 175, 3305,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*strings*/,
 w /*nls*/,
 E /*actions*/,
 C /*commands*/,
 d /*contextkey*/,
 m /*descriptors*/,
 r /*platform*/,
 u /*contributions*/,
 a /*signOutOfAccountAction*/,
 h /*authentication*/,
 c /*environmentService*/,
 n /*extensionFeatures*/,
 g /*extensionsRegistry*/,
 p /*manageTrustedExtensionsForAccountAction*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$b1c = void 0);
				const o = C.$fk.registerCommand(
						"workbench.getCodeExchangeProxyEndpoints",
						function ($, v) {
							return $.get(c.$5rb).options?.codeExchangeProxyEndpoints;
						},
					),
					f = {
						type: "object",
						additionalProperties: !1,
						properties: {
							id: { type: "string", description: (0, w.localize)(4449, null) },
							label: {
								type: "string",
								description: (0, w.localize)(4450, null),
							},
						},
					},
					b = g.$n2.registerExtensionPoint({
						extensionPoint: "authentication",
						jsonSchema: {
							description: (0, w.localize)(4451, null),
							type: "array",
							items: f,
						},
						activationEventsGenerator: ($, v) => {
							for (const S of $)
								S.id && v.push(`onAuthenticationRequest:${S.id}`);
						},
					});
				class s extends t.$1c {
					constructor() {
						super(...arguments), (this.type = "table");
					}
					shouldRender(v) {
						return !!v.contributes?.authentication;
					}
					render(v) {
						const S = v.contributes?.authentication || [];
						if (!S.length)
							return { data: { headers: [], rows: [] }, dispose: () => {} };
						const I = [
								(0, w.localize)(4452, null),
								(0, w.localize)(4453, null),
							],
							T = S.sort((P, k) => P.label.localeCompare(k.label)).map((P) => [
								P.label,
								P.id,
							]);
						return { data: { headers: I, rows: T }, dispose: () => {} };
					}
				}
				const l = r.$Io
					.as(n.Extensions.ExtensionFeaturesRegistry)
					.registerExtensionFeature({
						id: "authentication",
						label: (0, w.localize)(4454, null),
						access: { canToggle: !1 },
						renderer: new m.$Ji(s),
					});
				let y = class extends t.$1c {
					static {
						this.ID = "workbench.contrib.authentication";
					}
					constructor(v, S) {
						super(),
							(this.f = v),
							(this.g = S),
							(this.c = E.$ZX.appendMenuItem(E.$XX.AccountsContext, {
								command: {
									id: "noAuthenticationProviders",
									title: (0, w.localize)(4455, null),
									precondition: d.$Kj.false(),
								},
							})),
							this.D(o),
							this.D(l),
							v.getProviderIds().length && this.q(),
							this.m(),
							this.h(),
							this.j(),
							this.n();
					}
					h() {
						b.setHandler((v, { added: S, removed: I }) => {
							S.forEach((P) => {
								for (const k of P.value) {
									if ((0, i.$jf)(k.id)) {
										P.collector.error((0, w.localize)(4456, null));
										continue;
									}
									if ((0, i.$jf)(k.label)) {
										P.collector.error((0, w.localize)(4457, null));
										continue;
									}
									this.f.declaredProviders.some((L) => L.id === k.id)
										? P.collector.error((0, w.localize)(4458, null, k.id))
										: this.f.registerDeclaredAuthenticationProvider(k);
								}
							}),
								I.flatMap((P) => P.value).forEach((P) => {
									const k = this.f.declaredProviders.find((L) => L.id === P.id);
									k && this.f.unregisterDeclaredAuthenticationProvider(k.id);
								});
						});
					}
					j() {
						if (this.g.options?.authenticationProviders?.length)
							for (const v of this.g.options.authenticationProviders)
								this.f.registerAuthenticationProvider(v.id, v);
					}
					m() {
						this.D(
							this.f.onDidRegisterAuthenticationProvider((v) => {
								this.q();
							}),
						),
							this.D(
								this.f.onDidUnregisterAuthenticationProvider((v) => {
									this.f.getProviderIds().length ||
										(this.c = E.$ZX.appendMenuItem(E.$XX.AccountsContext, {
											command: {
												id: "noAuthenticationProviders",
												title: (0, w.localize)(4459, null),
												precondition: d.$Kj.false(),
											},
										}));
								}),
							);
					}
					n() {
						this.D((0, E.$4X)(a.$_Zc)), this.D((0, E.$4X)(p.$a1c));
					}
					q() {
						this.c?.dispose(), (this.c = void 0);
					}
				};
				(e.$b1c = y),
					(e.$b1c = y = Ne([j(0, h.$$7), j(1, c.$5rb)], y)),
					(0, u.$s6)(y.ID, y, u.WorkbenchPhase.AfterRestored);
			},
		)

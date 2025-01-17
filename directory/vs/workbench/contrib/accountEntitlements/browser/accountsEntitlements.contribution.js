import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/registry/common/platform.js';
import '../../../common/contributions.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../services/authentication/common/authentication.js';
import '../../../../platform/actions/common/actions.js';
import '../../../services/activity/common/activity.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/extensionManagement/common/extensionManagement.js';
import '../../../../platform/extensions/common/extensions.js';
import '../../../../platform/storage/common/storage.js';
import '../../../services/extensions/common/extensions.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../common/configuration.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/request/common/request.js';
import '../../../../base/common/cancellation.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../base/common/platform.js';
define(
			de[3547],
			he([
				1, 0, 30, 55, 3, 8, 31, 32, 357, 11, 260, 62, 119, 109, 21, 53, 81, 224,
				4, 10, 327, 33, 57, 12,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				const v = "workbench.accounts.experimental.showEntitlements";
				let S = class extends w.$1c {
					constructor(P, k, L, D, M, N, A, R, O, B) {
						super(),
							(this.f = P),
							(this.g = k),
							(this.h = L),
							(this.j = D),
							(this.m = M),
							(this.n = N),
							(this.q = A),
							(this.r = R),
							(this.s = O),
							(this.t = B),
							(this.a = !1),
							(this.b = new E.$5j(v, !1).bindTo(this.f)),
							(this.c = this.D(new w.$2c())),
							!(!this.j.gitHubEntitlement || $.$r) &&
								this.n.getInstalled().then(async (U) => {
									U.find((F) =>
										c.$Gn.equals(
											F.identifier.id,
											this.j.gitHubEntitlement.extensionId,
										),
									)
										? this.z()
										: this.u();
								});
					}
					u() {
						this.m.getBoolean(v, n.StorageScope.APPLICATION) !== !1 &&
							(this.D(
								this.r.onDidChangeExtensions(async (P) => {
									for (const k of P.added)
										if (
											c.$Gn.equals(
												this.j.gitHubEntitlement.extensionId,
												k.identifier,
											)
										) {
											this.z();
											return;
										}
								}),
							),
							this.D(
								this.h.onDidChangeSessions(async (P) => {
									P.providerId === this.j.gitHubEntitlement.providerId &&
									P.event.added?.length
										? await this.y(P.event.added[0])
										: P.providerId === this.j.gitHubEntitlement.providerId &&
											P.event.removed?.length &&
											(this.b.set(!1), this.c.clear());
								}),
							),
							this.D(
								this.h.onDidRegisterAuthenticationProvider(async (P) => {
									P.id === this.j.gitHubEntitlement.providerId &&
										(await this.y((await this.h.getSessions(P.id))[0]));
								}),
							));
					}
					async w(P) {
						if (this.a) return [!1, ""];
						const k = await this.t.request(
							{
								type: "GET",
								url: this.j.gitHubEntitlement.entitlementUrl,
								headers: { Authorization: `Bearer ${P.accessToken}` },
							},
							l.CancellationToken.None,
						);
						if (k.res.statusCode && k.res.statusCode !== 200) return [!1, ""];
						const L = await (0, s.$Eq)(k);
						if (!L) return [!1, ""];
						let D;
						try {
							D = JSON.parse(L);
						} catch {
							return [!1, ""];
						}
						if (
							!(this.j.gitHubEntitlement.enablementKey in D) ||
							!D[this.j.gitHubEntitlement.enablementKey]
						)
							return (
								this.g.publicLog2("entitlements.enabled", { enabled: !1 }),
								[!1, ""]
							);
						this.g.publicLog2("entitlements.enabled", { enabled: !0 }),
							(this.a = !0);
						const M = D.organization_list;
						return [
							!0,
							M && M.length > 0 ? (M[0].name ? M[0].name : M[0].login) : void 0,
						];
					}
					async y(P) {
						if (!P) return;
						const k = this.s.inspect(v).value ?? !1,
							[L, D] = await this.w(P);
						L &&
							k &&
							(this.C(D), this.b.set(k), this.g.publicLog2(v, { enabled: !0 }));
					}
					z() {
						this.m.store(
							v,
							!1,
							n.StorageScope.APPLICATION,
							n.StorageTarget.MACHINE,
						),
							this.b.set(!1),
							this.c.clear();
					}
					async C(P) {
						const k = P
								? this.j.gitHubEntitlement.command.title.replace("{{org}}", P)
								: this.j.gitHubEntitlement.command.titleWithoutPlaceHolder,
							L = new u.$8qc(1, () => k);
						(this.c.value = this.q.showAccountsActivity({ badge: L })),
							this.f.onDidChangeContext((D) => {
								D.affectsSome(new Set([v])) &&
									(this.f.getContextKeyValue(v) || this.c.clear());
							}),
							this.D(
								(0, r.$4X)(
									class extends r.$3X {
										constructor() {
											super({
												id: "workbench.action.entitlementAction",
												title: k,
												f1: !1,
												menu: {
													id: r.$XX.AccountsContext,
													group: "5_AccountsEntitlements",
													when: E.$Kj.equals(v, !0),
												},
											});
										}
										async run(D) {
											const M = D.get(a.$Bk),
												N = D.get(C.$ek),
												A = D.get(E.$6j),
												R = D.get(n.$lq),
												O = D.get(y.$GO),
												B = D.get(d.$km);
											(
												await O.confirm({
													type: "question",
													message: M.gitHubEntitlement.confirmationMessage,
													primaryButton: M.gitHubEntitlement.confirmationAction,
												})
											).confirmed
												? (N.executeCommand(
														M.gitHubEntitlement.command.action,
														M.gitHubEntitlement.extensionId,
													),
													B.publicLog2("accountsEntitlements.action", {
														command: M.gitHubEntitlement.command.action,
													}))
												: B.publicLog2("accountsEntitlements.action", {
														command:
															M.gitHubEntitlement.command.action + "-dismissed",
													}),
												new E.$5j(v, !1).bindTo(A).set(!1),
												R.store(
													v,
													!1,
													n.StorageScope.APPLICATION,
													n.StorageTarget.MACHINE,
												);
										}
									},
								),
							);
					}
				};
				(S = Ne(
					[
						j(0, E.$6j),
						j(1, d.$km),
						j(2, m.$$7),
						j(3, a.$Bk),
						j(4, n.$lq),
						j(5, h.$Hp),
						j(6, u.$7qc),
						j(7, g.$q2),
						j(8, b.$gj),
						j(9, s.$Aq),
					],
					S,
				)),
					t.$Io
						.as(p.$No.Configuration)
						.registerConfiguration({
							...o.$u6,
							properties: {
								"workbench.accounts.experimental.showEntitlements": {
									scope: p.ConfigurationScope.MACHINE,
									type: "boolean",
									default: !1,
									tags: ["experimental"],
									description: (0, f.localize)(4427, null),
								},
							},
						}),
					(0, i.$s6)(
						"workbench.contrib.entitlements",
						S,
						i.WorkbenchPhase.BlockRestore,
					);
			},
		),
		
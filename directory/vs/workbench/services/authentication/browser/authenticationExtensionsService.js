import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../platform/storage/common/storage.js';
import '../../activity/common/activity.js';
import './authenticationAccessService.js';
import './authenticationUsageService.js';
import '../common/authentication.js';
define(
			de[3246],
			he([1, 0, 3, 4, 11, 31, 57, 20, 40, 63, 21, 260, 621, 822, 357]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*nls*/,
 w /*actions*/,
 E /*commands*/,
 C /*dialogs*/,
 d /*extensions*/,
 m /*notification*/,
 r /*quickInput*/,
 u /*storage*/,
 a /*activity*/,
 h /*authenticationAccessService*/,
 c /*authenticationUsageService*/,
 n /*authentication*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$kyc = void 0),
					(i = mt(i));
				const g = " ";
				let p = class extends t.$1c {
					constructor(f, b, s, l, y, $, v) {
						super(),
							(this.f = f),
							(this.g = b),
							(this.h = s),
							(this.j = l),
							(this.m = y),
							(this.n = $),
							(this.q = v),
							(this.a = new Map()),
							(this.b = new Map()),
							(this.c = this.D(new t.$2c())),
							this.r();
					}
					r() {
						this.D(
							this.m.onDidChangeSessions(async (f) => {
								f.event.added?.length &&
									(await this.s(f.providerId, f.event.added)),
									f.event.removed?.length &&
										(await this.t(f.providerId, f.event.removed)),
									this.u();
							}),
						),
							this.D(
								this.m.onDidUnregisterAuthenticationProvider((f) => {
									const b = this.b.get(f.id) || {};
									Object.keys(b).forEach((s) => {
										this.w(f.id, s);
									});
								}),
							);
					}
					async s(f, b) {
						const s = this.a.get(f);
						s &&
							Object.keys(s).forEach((l) => {
								b.some((y) => y.scopes.slice().join(g) === l) &&
									(s[l]?.disposables.forEach(($) => $.dispose()),
									delete s[l],
									Object.keys(s).length === 0
										? this.a.delete(f)
										: this.a.set(f, s));
							});
					}
					async t(f, b) {
						const s = this.b.get(f);
						s &&
							Object.keys(s).forEach((l) => {
								b.forEach((y) => {
									const $ = s[l].possibleSessions.findIndex(
										(v) => v.id === y.id,
									);
									$ && s[l].possibleSessions.splice($, 1);
								}),
									s[l].possibleSessions.length || this.w(f, l);
							});
					}
					u() {
						this.c.clear();
						let f = 0;
						if (
							(this.a.forEach((b) => {
								Object.keys(b).forEach((s) => {
									f += b[s].requestingExtensionIds.length;
								});
							}),
							this.b.forEach((b) => {
								f += Object.keys(b).length;
							}),
							f > 0)
						) {
							const b = new a.$8qc(f, () => i.localize(12091, null));
							this.c.value = this.f.showAccountsActivity({ badge: b });
						}
					}
					w(f, b) {
						const s = this.b.get(f) || {};
						s[b] && ((0, t.$Vc)(s[b].disposables), delete s[b], this.u());
					}
					updateSessionPreference(f, b, s) {
						const l = `${b}-${f}-${s.scopes.join(g)}`;
						this.g.store(
							l,
							s.id,
							u.StorageScope.WORKSPACE,
							u.StorageTarget.MACHINE,
						),
							this.g.store(
								l,
								s.id,
								u.StorageScope.APPLICATION,
								u.StorageTarget.MACHINE,
							);
					}
					getSessionPreference(f, b, s) {
						const l = `${b}-${f}-${s.join(g)}`;
						return (
							this.g.get(l, u.StorageScope.WORKSPACE) ??
							this.g.get(l, u.StorageScope.APPLICATION)
						);
					}
					removeSessionPreference(f, b, s) {
						const l = `${b}-${f}-${s.join(g)}`;
						this.g.remove(l, u.StorageScope.WORKSPACE),
							this.g.remove(l, u.StorageScope.APPLICATION);
					}
					async y(f, b, s, l) {
						let y;
						(function (v) {
							(v[(v.Allow = 0)] = "Allow"),
								(v[(v.Deny = 1)] = "Deny"),
								(v[(v.Cancel = 2)] = "Cancel");
						})(y || (y = {}));
						const { result: $ } = await this.h.prompt({
							type: m.Severity.Info,
							message: i.localize(12092, null, l, f.label, b),
							buttons: [
								{ label: i.localize(12093, null), run: () => y.Allow },
								{ label: i.localize(12094, null), run: () => y.Deny },
							],
							cancelButton: { run: () => y.Cancel },
						});
						return (
							$ !== y.Cancel &&
								(this.q.updateAllowedExtensions(f.id, b, [
									{ id: s, name: l, allowed: $ === y.Allow },
								]),
								this.w(f.id, s)),
							$ === y.Allow
						);
					}
					async selectSession(f, b, s, l, y) {
						const $ = await this.m.getAccounts(f);
						if (!$.length) throw new Error("No accounts available");
						const v = new t.$Zc(),
							S = v.add(this.j.createQuickPick());
						S.ignoreFocusOut = !0;
						const I = y.map((P) => ({ label: P.account.label, session: P })),
							T = new Set(y.map((P) => P.account.label));
						return (
							$.forEach((P) => {
								T.has(P.label) || I.push({ label: P.label, account: P });
							}),
							I.push({ label: i.localize(12095, null) }),
							(S.items = I),
							(S.title = i.localize(
								12096,
								null,
								s,
								this.m.getProvider(f).label,
							)),
							(S.placeholder = i.localize(12097, null, s)),
							await new Promise((P, k) => {
								v.add(
									S.onDidAccept(async (L) => {
										S.dispose();
										let D = S.selectedItems[0].session;
										if (!D) {
											const N = S.selectedItems[0].account;
											try {
												D = await this.m.createSession(f, l, { account: N });
											} catch (A) {
												k(A);
												return;
											}
										}
										const M = D.account.label;
										this.q.updateAllowedExtensions(f, M, [
											{ id: b, name: s, allowed: !0 },
										]),
											this.updateSessionPreference(f, b, D),
											this.w(f, b),
											P(D);
									}),
								),
									v.add(
										S.onDidHide((L) => {
											S.selectedItems[0] ||
												k("User did not consent to account access"),
												v.dispose();
										}),
									),
									S.show();
							})
						);
					}
					async z(f, b, s, l) {
						const $ = (this.b.get(f.id) || {})[b];
						if (!$ || !f) return;
						const v = $.possibleSessions;
						let S;
						if (f.supportsMultipleAccounts)
							try {
								S = await this.selectSession(f.id, b, s, l, v);
							} catch {}
						else (await this.y(f, v[0].account.label, b, s)) && (S = v[0]);
						S && this.n.addAccountUsage(f.id, S.account.label, b, s);
					}
					requestSessionAccess(f, b, s, l, y) {
						const $ = this.b.get(f) || {};
						if ($[b]) return;
						const S = this.m.getProvider(f),
							I = w.$ZX.appendMenuItem(w.$XX.AccountsContext, {
								group: "3_accessRequests",
								command: {
									id: `${f}${b}Access`,
									title: i.localize(12098, null, S.label, s),
								},
							}),
							T = E.$fk.registerCommand({
								id: `${f}${b}Access`,
								handler: async (P) => {
									this.z(S, b, s, l);
								},
							});
						($[b] = { possibleSessions: y, disposables: [I, T] }),
							this.b.set(f, $),
							this.u();
					}
					async requestNewSession(f, b, s, l) {
						this.m.isAuthenticationProviderRegistered(f) ||
							(await new Promise((k, L) => {
								const D = this.m.onDidRegisterAuthenticationProvider((M) => {
									M.id === f && (D.dispose(), k());
								});
							}));
						let y;
						try {
							y = this.m.getProvider(f);
						} catch {
							return;
						}
						const $ = this.a.get(f),
							v = b.join(g);
						if ($ && $[v] && $[v].requestingExtensionIds.includes(s)) return;
						const I = `${f}:${s}:signIn${Object.keys($ || []).length}`,
							T = w.$ZX.appendMenuItem(w.$XX.AccountsContext, {
								group: "2_signInRequests",
								command: { id: I, title: i.localize(12099, null, y.label, l) },
							}),
							P = E.$fk.registerCommand({
								id: I,
								handler: async (k) => {
									const D = await k.get(n.$$7).createSession(f, b);
									this.q.updateAllowedExtensions(f, D.account.label, [
										{ id: s, name: l, allowed: !0 },
									]),
										this.updateSessionPreference(f, s, D);
								},
							});
						if ($) {
							const k = $[v] || { disposables: [], requestingExtensionIds: [] };
							($[v] = {
								disposables: [...k.disposables, T, P],
								requestingExtensionIds: [...k.requestingExtensionIds, s],
							}),
								this.a.set(f, $);
						} else
							this.a.set(f, {
								[v]: { disposables: [T, P], requestingExtensionIds: [s] },
							});
						this.u();
					}
				};
				(e.$kyc = p),
					(e.$kyc = p =
						Ne(
							[
								j(0, a.$7qc),
								j(1, u.$lq),
								j(2, C.$GO),
								j(3, r.$DJ),
								j(4, n.$$7),
								j(5, c.$dqc),
								j(6, h.$dsb),
							],
							p,
						)),
					(0, d.$lK)(n.$_7, p, d.InstantiationType.Delayed);
			},
		),
		
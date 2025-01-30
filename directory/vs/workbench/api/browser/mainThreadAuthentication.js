import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/lifecycle.js';
import '../../../nls.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../../services/authentication/common/authentication.js';
import '../common/extHost.protocol.js';
import '../../../platform/dialogs/common/dialogs.js';
import '../../../base/common/severity.js';
import '../../../platform/notification/common/notification.js';
import '../../services/extensions/common/extensions.js';
import '../../../platform/telemetry/common/telemetry.js';
import '../../../base/common/event.js';
import '../../../platform/product/common/productService.js';
import '../../../platform/configuration/common/configuration.js';
import '../../services/authentication/browser/authenticationAccessService.js';
import '../../services/authentication/browser/authenticationUsageService.js';
import '../../services/authentication/browser/authenticationService.js';
import '../../../base/common/uri.js';
import '../../../platform/opener/common/opener.js';
import '../../../base/common/errors.js';
define(
		de[3338],
		he([
			1, 0, 3, 4, 101, 357, 88, 57, 111, 40, 53, 32, 6, 62, 10, 621, 822, 830,
			9, 41, 29,
		]),
		function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*nls*/,
 w /*extHostCustomers*/,
 E /*authentication*/,
 C /*extHost.protocol*/,
 d /*dialogs*/,
 m /*severity*/,
 r /*notification*/,
 u /*extensions*/,
 a /*telemetry*/,
 h /*event*/,
 c /*productService*/,
 n /*configuration*/,
 g /*authenticationAccessService*/,
 p /*authenticationUsageService*/,
 o /*authenticationService*/,
 f /*uri*/,
 b /*opener*/,
 s /*errors*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$gqc = e.$fqc = void 0),
				(i = mt(i)),
				(m = xi(m));
			class l extends t.$1c {
				constructor(v, S, I, T, P, k) {
					super(),
						(this.a = v),
						(this.id = S),
						(this.label = I),
						(this.supportsMultipleAccounts = T),
						(this.b = P),
						(this.onDidChangeSessions = k.event);
				}
				async getSessions(v, S) {
					return this.a.$getSessions(this.id, v, S);
				}
				createSession(v, S) {
					return this.a.$createSession(this.id, v, S);
				}
				async removeSession(v) {
					await this.a.$removeSession(this.id, v),
						this.b.info(i.localize(2522, null));
				}
			}
			e.$fqc = l;
			let y = class extends t.$1c {
				constructor(v, S, I, T, P, k, L, D, M, N, A, R) {
					super(),
						(this.c = S),
						(this.f = I),
						(this.g = T),
						(this.h = P),
						(this.j = k),
						(this.m = L),
						(this.n = D),
						(this.q = M),
						(this.r = N),
						(this.s = A),
						(this.t = R),
						(this.b = this.D(new t.$0c())),
						(this.a = v.getProxy(C.$mbb.ExtHostAuthentication)),
						this.D(
							this.c.onDidChangeSessions((O) => {
								this.a.$onDidChangeAuthenticationSessions(
									O.providerId,
									O.label,
								);
							}),
						);
				}
				async $registerAuthenticationProvider(v, S, I) {
					const T = new h.$re();
					this.b.set(v, T);
					const P = new l(this.a, v, S, I, this.m, T);
					this.c.registerAuthenticationProvider(v, P);
				}
				$unregisterAuthenticationProvider(v) {
					this.b.deleteAndDispose(v),
						this.c.unregisterAuthenticationProvider(v);
				}
				async $ensureProvider(v) {
					if (!this.c.isAuthenticationProviderRegistered(v))
						return await this.n.activateByEvent(
							(0, o.$fsb)(v),
							u.ActivationKind.Immediate,
						);
				}
				$sendDidChangeSessions(v, S) {
					const I = this.b.get(v);
					I instanceof h.$re && I.fire(S);
				}
				$removeSession(v, S) {
					return this.c.removeSession(v, S);
				}
				async u(v) {
					const S = `In order to provide better results for @git, Cursor wants to sign in with ${v}.`;
					let I;
					(function (P) {
						(P[(P.Allow = 0)] = "Allow"),
							(P[(P.DontAskAgain = 1)] = "DontAskAgain"),
							(P[(P.Cancel = 2)] = "Cancel");
					})(I || (I = {}));
					const T = await this.j.prompt({
						type: m.default.Info,
						message: S,
						buttons: [
							{ label: i.localize(2523, null), run: () => I.Allow },
							{ label: i.localize(2524, null), run: () => I.DontAskAgain },
							{ label: i.localize(2525, null), run: () => I.Cancel },
						],
					});
					return (
						T.result === I.DontAskAgain &&
							(await this.s.updateValue(
								"cursor-retrieval.canAttemptGithubLogin",
								!1,
							)),
						T.result === I.Allow
					);
				}
				async w(v, S, I, T) {
					let P;
					v.id.startsWith(E.$07)
						? (P = i.localize(2526, null, S, v.label))
						: (P = I
								? i.localize(2527, null, S, v.label)
								: i.localize(2528, null, S, v.label));
					const k = [
						{
							label: i.localize(2529, null),
							run() {
								return !0;
							},
						},
					];
					T?.learnMore &&
						k.push({
							label: i.localize(2530, null),
							run: async () => {
								const D = this.w(v, S, I, T);
								return (
									await this.t.open(f.URI.revive(T.learnMore), {
										allowCommands: !0,
									}),
									await D
								);
							},
						});
					const { result: L } = await this.j.prompt({
						type: m.default.Info,
						message: P,
						buttons: k,
						detail: T?.detail,
						cancelButton: !0,
					});
					return L ?? !1;
				}
				async y(v, S) {
					const I = await this.j.prompt({
						message: i.localize(2531, null),
						detail: i.localize(2532, null, v, S),
						type: m.default.Warning,
						cancelButton: !0,
						buttons: [
							{ label: i.localize(2533, null, v), run: () => v },
							{ label: i.localize(2534, null, S), run: () => S },
						],
					});
					if (!I.result) throw new s.$9();
					return I.result === v;
				}
				async z(v, S, I, T, P) {
					const k = await this.c.getSessions(v, S, P.account, !0),
						L = this.c.getProvider(v);
					if (P.forceNewSession && P.createIfNone)
						throw new Error(
							"Invalid combination of options. Please remove one of the following: forceNewSession, createIfNone",
						);
					if (P.forceNewSession && P.silent)
						throw new Error(
							"Invalid combination of options. Please remove one of the following: forceNewSession, silent",
						);
					if (P.createIfNone && P.silent)
						throw new Error(
							"Invalid combination of options. Please remove one of the following: createIfNone, silent",
						);
					if (
						(P.clearSessionPreference &&
							this.f.removeSessionPreference(v, I, S),
						!P.forceNewSession && k.length)
					) {
						if (L.supportsMultipleAccounts) {
							const M = this.f.getSessionPreference(v, I, S);
							if (M) {
								const N = k.find((A) => A.id === M);
								if (N && this.g.isAccessAllowed(v, N.account.label, I))
									return N;
							}
						} else if (this.g.isAccessAllowed(v, k[0].account.label, I))
							return k[0];
					}
					if (P.createIfNone || P.forceNewSession) {
						let M;
						typeof P.forceNewSession == "object" && (M = P.forceNewSession);
						const N = !!(P.forceNewSession && k.length);
						let A;
						if (
							(this.r.cursorTrustedExtensionAuthAccess?.includes(I)
								? (A = await this.u(L.label))
								: (A = await this.w(L, T, N, M)),
							!A)
						)
							throw new Error("User did not consent to login.");
						let R;
						if (k?.length && !P.forceNewSession)
							R =
								L.supportsMultipleAccounts && !P.account
									? await this.f.selectSession(v, I, T, S, k)
									: k[0];
						else {
							let O = P.account;
							if (!O) {
								const B = this.f.getSessionPreference(v, I, S);
								O = B ? k.find((U) => U.id === B)?.account : void 0;
							}
							do
								R = await this.c.createSession(v, S, {
									activateImmediate: !0,
									account: O,
								});
							while (
								O &&
								O.label !== R.account.label &&
								!(await this.y(R.account.label, O.label))
							);
						}
						return (
							this.g.updateAllowedExtensions(v, R.account.label, [
								{ id: I, name: T, allowed: !0 },
							]),
							this.f.updateSessionPreference(v, I, R),
							R
						);
					}
					const D = k.find((M) =>
						this.g.isAccessAllowed(v, M.account.label, I),
					);
					if (D) return D;
					P.silent ||
						(k.length
							? this.f.requestSessionAccess(v, I, T, S, k)
							: await this.f.requestNewSession(v, S, I, T));
				}
				async $getSession(v, S, I, T, P) {
					const k = await this.z(v, S, I, T, P);
					return (
						k &&
							(this.C(I, v), this.h.addAccountUsage(v, k.account.label, I, T)),
						k
					);
				}
				async $getAccounts(v) {
					return await this.c.getAccounts(v);
				}
				C(v, S) {
					this.q.publicLog2("authentication.providerUsage", {
						providerId: S,
						extensionId: v,
					});
				}
			};
			(e.$gqc = y),
				(e.$gqc = y =
					Ne(
						[
							(0, w.$tmc)(C.$lbb.MainThreadAuthentication),
							j(1, E.$$7),
							j(2, E.$_7),
							j(3, g.$dsb),
							j(4, p.$dqc),
							j(5, d.$GO),
							j(6, r.$4N),
							j(7, u.$q2),
							j(8, a.$km),
							j(9, c.$Bk),
							j(10, n.$gj),
							j(11, b.$7rb),
						],
						y,
					));
		},
	),
		
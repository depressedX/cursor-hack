import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import './extHost.protocol.js';
import './extHostTypes.js';
import '../../../platform/extensions/common/extensions.js';
import '../../services/authentication/common/authentication.js';
import '../../../platform/instantiation/common/instantiation.js';
import './extHostRpcService.js';
define(
			Pe[195],
			Ne([1, 0, 4, 6, 11, 25, 292, 5, 21]),
			function (we, t, e, r, S, N, P, I, l) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$fhd = t.$ehd = void 0),
					(t.$ehd = (0, I.$Mi)("IExtHostAuthentication"));
				let n = class {
					constructor(d) {
						(this.b = new Map()),
							(this.c = new e.$re()),
							(this.onDidChangeSessions = this.c.event),
							(this.d = new p()),
							(this.a = d.getProxy(r.$lbb.MainThreadAuthentication));
					}
					async getSession(d, k, g, c = {}) {
						const h = N.$Gn.toKey(d.identifier),
							$ = [...g].sort().join(" ");
						return await this.d.getOrCreate(`${h} ${k} ${$}`, async () => {
							await this.a.$ensureProvider(k);
							const T = d.displayName || d.name;
							return this.a.$getSession(k, g, h, T, c);
						});
					}
					async getAccounts(d) {
						return (
							await this.a.$ensureProvider(d), await this.a.$getAccounts(d)
						);
					}
					async removeSession(d, k) {
						const g = this.b.get(d);
						return g
							? g.provider.removeSession(k)
							: this.a.$removeSession(d, k);
					}
					registerAuthenticationProvider(d, k, g, c) {
						if (this.b.get(d))
							throw new Error(
								`An authentication provider with id '${d}' is already registered.`,
							);
						this.b.set(d, {
							label: k,
							provider: g,
							options: c ?? { supportsMultipleAccounts: !1 },
						});
						const h = g.onDidChangeSessions(($) =>
							this.a.$sendDidChangeSessions(d, $),
						);
						return (
							this.a.$registerAuthenticationProvider(
								d,
								k,
								c?.supportsMultipleAccounts ?? !1,
							),
							new S.$nbb(() => {
								h.dispose(),
									this.b.delete(d),
									this.a.$unregisterAuthenticationProvider(d);
							})
						);
					}
					async $createSession(d, k, g) {
						const c = this.b.get(d);
						if (c) return await c.provider.createSession(k, g);
						throw new Error(
							`Unable to find authentication provider with handle: ${d}`,
						);
					}
					async $removeSession(d, k) {
						const g = this.b.get(d);
						if (g) return await g.provider.removeSession(k);
						throw new Error(
							`Unable to find authentication provider with handle: ${d}`,
						);
					}
					async $getSessions(d, k, g) {
						const c = this.b.get(d);
						if (c) return await c.provider.getSessions(k, g);
						throw new Error(
							`Unable to find authentication provider with handle: ${d}`,
						);
					}
					$onDidChangeAuthenticationSessions(d, k) {
						return (
							d.startsWith(P.$07) ||
								this.c.fire({ provider: { id: d, label: k } }),
							Promise.resolve()
						);
					}
				};
				(t.$fhd = n), (t.$fhd = n = wt([rt(0, l.$08)], n));
				class p {
					constructor() {
						this.a = new Map();
					}
					getOrCreate(d, k) {
						const g = this.a.get(d);
						if (g) return g;
						const c = k().finally(() => this.a.delete(d));
						return this.a.set(d, c), c;
					}
				}
			},
		),
		
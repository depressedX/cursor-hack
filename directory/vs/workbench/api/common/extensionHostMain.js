import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/errors.js';
import '../../../base/common/performance.js';
import '../../../base/common/uri.js';
import './extHost.protocol.js';
import '../../services/extensions/common/rpcProtocol.js';
import '../../../platform/log/common/log.js';
import '../../../platform/instantiation/common/extensions.js';
import '../../../platform/instantiation/common/serviceCollection.js';
import './extHostInitDataService.js';
import '../../../platform/instantiation/common/instantiationService.js';
import './extHostRpcService.js';
import './extHostUriTransformerService.js';
import './extHostExtensionService.js';
import './extHostTelemetry.js';
define(
			Pe[606],
			Ne([1, 0, 12, 91, 2, 6, 555, 14, 108, 180, 34, 486, 21, 112, 75, 143]),
			function (we, t, e, r, S, N, P, I, l, n, p, y, d, k, g, c) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$njd = t.$mjd = void 0),
					(e = tt(e)),
					(r = tt(r));
				class h {
					static async installEarlyHandler(a) {
						Error.stackTraceLimit = 100;
						const u = a.get(I.$ik),
							f = a.get(d.$08).getProxy(N.$lbb.MainThreadErrors);
						e.setUnexpectedErrorHandler((o) => {
							u.error(o);
							const w = e.$6(o);
							f.$onUnexpectedError(w);
						});
					}
					static async installFullHandler(a) {
						const u = a.get(I.$ik),
							s = a.get(d.$08),
							f = a.get(g.$6hd),
							o = a.get(c.$6db),
							w = s.getProxy(N.$lbb.MainThreadExtensionService),
							m = s.getProxy(N.$lbb.MainThreadErrors),
							E = await f.getExtensionPathIndex(),
							R = new WeakMap();
						function C(J, L) {
							if (R.has(J)) return R.get(J).stack;
							let b = "",
								F,
								D;
							for (const z of L)
								(b += `
	at ${z.toString()}`),
									(D = z.getFileName()),
									!F && D && (F = E.findSubstr(S.URI.file(D)));
							const M = `${J.name || "Error"}: ${J.message || ""}${b}`;
							return (
								R.set(J, { extensionIdentifier: F?.identifier, stack: M }), M
							);
						}
						const O = Symbol("prepareStackTrace wrapped");
						let A = C;
						Object.defineProperty(Error, "prepareStackTrace", {
							configurable: !1,
							get() {
								return A;
							},
							set(J) {
								if (J === C || !J || J[O]) {
									A = J || C;
									return;
								}
								(A = function (L, b) {
									return C(L, b), J.call(Error, L, b);
								}),
									Object.assign(A, { [O]: !0 });
							},
						}),
							e.setUnexpectedErrorHandler((J) => {
								u.error(J);
								const L = e.$6(J),
									b = R.get(J);
								if (!b?.extensionIdentifier) {
									m.$onUnexpectedError(L);
									return;
								}
								w.$onExtensionRuntimeError(b.extensionIdentifier, L);
								const F = o.onExtensionError(b.extensionIdentifier, J);
								u.trace("forwarded error to extension?", F, b);
							});
					}
				}
				t.$mjd = h;
				class $ {
					constructor(a, u, s, f, o) {
						(this.a = s),
							(this.b = new P.$Q4c(a, null, f)),
							(u = $.e(u, this.b));
						const w = new n.$Ki(...(0, l.$mK)());
						w.set(p.$98, { _serviceBrand: void 0, ...u, messagePorts: o }),
							w.set(d.$08, new d.$$8(this.b)),
							w.set(k.$j9, new k.$k9(f)),
							w.set(g.$4hd, s);
						const m = new y.$Yr(w, !0);
						m.invokeFunction(h.installEarlyHandler),
							(this.d = m.invokeFunction((E) => E.get(I.$ik))),
							r.mark("code/extHost/didCreateServices"),
							this.a.pid
								? this.d.info(`Extension host with pid ${this.a.pid} started`)
								: this.d.info("Extension host started"),
							this.d.trace("initData", u),
							(this.c = m.invokeFunction((E) => E.get(g.$6hd))),
							this.c.initialize(),
							m.invokeFunction(h.installFullHandler);
					}
					async asBrowserUri(a) {
						const u = this.b.getProxy(N.$lbb.MainThreadExtensionService);
						return S.URI.revive(await u.$asBrowserUri(a));
					}
					terminate(a) {
						this.c.terminate(a);
					}
					static e(a, u) {
						a.extensions.allExtensions.forEach((f) => {
							f.extensionLocation = S.URI.revive(
								u.transformIncomingURIs(f.extensionLocation),
							);
						}),
							(a.environment.appRoot = S.URI.revive(
								u.transformIncomingURIs(a.environment.appRoot),
							));
						const s = a.environment.extensionDevelopmentLocationURI;
						return (
							s &&
								(a.environment.extensionDevelopmentLocationURI = s.map((f) =>
									S.URI.revive(u.transformIncomingURIs(f)),
								)),
							(a.environment.extensionTestsLocationURI = S.URI.revive(
								u.transformIncomingURIs(
									a.environment.extensionTestsLocationURI,
								),
							)),
							(a.environment.globalStorageHome = S.URI.revive(
								u.transformIncomingURIs(a.environment.globalStorageHome),
							)),
							(a.environment.workspaceStorageHome = S.URI.revive(
								u.transformIncomingURIs(a.environment.workspaceStorageHome),
							)),
							(a.environment.extensionTelemetryLogResource = S.URI.revive(
								u.transformIncomingURIs(
									a.environment.extensionTelemetryLogResource,
								),
							)),
							(a.nlsBaseUrl = S.URI.revive(
								u.transformIncomingURIs(a.nlsBaseUrl),
							)),
							(a.logsLocation = S.URI.revive(
								u.transformIncomingURIs(a.logsLocation),
							)),
							(a.workspace = u.transformIncomingURIs(a.workspace)),
							a
						);
					}
				}
				t.$njd = $;
			},
		),
		
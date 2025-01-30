import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/actions.js';
import '../../../base/common/cancellation.js';
import '../../../base/common/errors.js';
import '../../../base/common/network.js';
import '../../../base/common/severity.js';
import '../../../base/common/uri.js';
import '../../../nls.js';
import '../../../platform/commands/common/commands.js';
import '../../../platform/extensionManagement/common/extensionManagementUtil.js';
import '../../../platform/notification/common/notification.js';
import '../../../platform/remote/common/remoteAuthorityResolver.js';
import '../common/extHost.protocol.js';
import '../../contrib/extensions/common/extensions.js';
import '../../services/environment/common/environmentService.js';
import '../../services/extensionManagement/common/extensionManagement.js';
import '../../services/extensions/common/extensionHostKind.js';
import '../../services/extensions/common/extensions.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../../services/host/browser/host.js';
import '../../services/timer/browser/timerService.js';
define(
		de[3731],
		he([
			1, 0, 50, 33, 29, 23, 111, 9, 4, 31, 154, 40, 211, 88, 141, 78, 157, 517,
			53, 101, 87, 520,
		]),
		function (			ce /*require*/,
			e /*exports*/,
			t /*actions*/,
			i /*cancellation*/,
			w /*errors*/,
			E /*network*/,
			C /*severity*/,
			d /*uri*/,
			m /*nls*/,
			r /*commands*/,
			u /*extensionManagementUtil*/,
			a /*notification*/,
			h /*remoteAuthorityResolver*/,
			c /*extHost.protocol*/,
			n /*extensions*/,
			g /*environmentService*/,
			p /*extensionManagement*/,
			o /*extensionHostKind*/,
			f /*extensions*/,
			b /*extHostCustomers*/,
			s /*host*/,
			l /*timerService*/,
) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$1nc = void 0),
				(C = xi(C));
			let y = class {
				constructor(P, k, L, D, M, N, A, R, O) {
					(this.d = k),
						(this.f = L),
						(this.g = D),
						(this.h = M),
						(this.j = N),
						(this.k = A),
						(this.l = R),
						(this.m = O),
						(this.a = P.extensionHostKind);
					const B = P;
					(this.c = B.internalExtensionService),
						B._setExtensionHostProxy(
							new $(P.getProxy(c.$mbb.ExtHostExtensionService)),
						),
						B._setAllMainProxyIdentifiers(
							Object.keys(c.$lbb).map((U) => c.$lbb[U]),
						);
				}
				dispose() {}
				$getExtension(P) {
					return this.d.getExtension(P);
				}
				$activateExtension(P, k) {
					return this.c._activateById(P, k);
				}
				async $onWillActivateExtension(P) {
					this.c._onWillActivateExtension(P);
				}
				$onDidActivateExtension(P, k, L, D, M) {
					this.c._onDidActivateExtension(P, k, L, D, M);
				}
				$onExtensionRuntimeError(P, k) {
					const L = (0, w.$7)(k);
					this.c._onExtensionRuntimeError(P, L),
						console.error(`[${P.value}]${L.message}`),
						console.error(L.stack);
				}
				async $onExtensionActivationError(P, k, L) {
					const D = (0, w.$7)(k);
					if ((this.c._onDidActivateExtensionError(P, D), L)) {
						const N = await this.d.getExtension(P.value);
						if (N) {
							const R = (await this.g.queryLocal()).find((O) =>
								(0, u.$7p)(O.identifier, { id: L.dependency }),
							);
							if (R?.local) {
								await this.o(N, R.local);
								return;
							} else {
								await this.p(N, L.dependency);
								return;
							}
						}
					}
					if (!this.m.isBuilt || this.m.isExtensionDevelopment) {
						this.f.error(D);
						return;
					}
					console.error(D.message);
				}
				async o(P, k) {
					const L = P.displayName || P.name;
					if (this.j.isEnabled(k))
						this.f.notify({
							severity: C.default.Error,
							message: (0, m.localize)(
								2540,
								null,
								L,
								k.manifest.displayName || k.manifest.name,
							),
							actions: {
								primary: [
									new t.$rj("reload", (0, m.localize)(2541, null), "", !0, () =>
										this.h.reload(),
									),
								],
							},
						});
					else {
						const D = this.j.getEnablementState(k);
						D === p.EnablementState.DisabledByVirtualWorkspace
							? this.f.notify({
									severity: C.default.Error,
									message: (0, m.localize)(
										2542,
										null,
										L,
										k.manifest.displayName || k.manifest.name,
									),
								})
							: D === p.EnablementState.DisabledByTrustRequirement
								? this.f.notify({
										severity: C.default.Error,
										message: (0, m.localize)(
											2543,
											null,
											L,
											k.manifest.displayName || k.manifest.name,
										),
										actions: {
											primary: [
												new t.$rj(
													"manageWorkspaceTrust",
													(0, m.localize)(2544, null),
													"",
													!0,
													() => this.l.executeCommand("workbench.trust.manage"),
												),
											],
										},
									})
								: this.j.canChangeEnablement(k)
									? this.f.notify({
											severity: C.default.Error,
											message: (0, m.localize)(
												2545,
												null,
												L,
												k.manifest.displayName || k.manifest.name,
											),
											actions: {
												primary: [
													new t.$rj(
														"enable",
														(0, m.localize)(2546, null),
														"",
														!0,
														() =>
															this.j
																.setEnablement(
																	[k],
																	D === p.EnablementState.DisabledGlobally
																		? p.EnablementState.EnabledGlobally
																		: p.EnablementState.EnabledWorkspace,
																)
																.then(
																	() => this.h.reload(),
																	(M) => this.f.error(M),
																),
													),
												],
											},
										})
									: this.f.notify({
											severity: C.default.Error,
											message: (0, m.localize)(
												2547,
												null,
												L,
												k.manifest.displayName || k.manifest.name,
											),
										});
					}
				}
				async p(P, k) {
					const L = P.displayName || P.name;
					let D = null;
					try {
						D = (
							await this.g.getExtensions([{ id: k }], i.CancellationToken.None)
						)[0];
					} catch {}
					D
						? this.f.notify({
								severity: C.default.Error,
								message: (0, m.localize)(
									2548,
									null,
									L,
									D.displayName,
									D.publisherDisplayName,
								),
								actions: {
									primary: [
										new t.$rj(
											"install",
											(0, m.localize)(2549, null),
											"",
											!0,
											() =>
												this.g.install(D).then(
													() => this.h.reload(),
													(M) => this.f.error(M),
												),
										),
									],
								},
							})
						: this.f.error((0, m.localize)(2550, null, L, k));
				}
				async $setPerformanceMarks(P) {
					this.a === o.ExtensionHostKind.LocalProcess
						? this.k.setPerformanceMarks("localExtHost", P)
						: this.a === o.ExtensionHostKind.LocalWebWorker
							? this.k.setPerformanceMarks("workerExtHost", P)
							: this.k.setPerformanceMarks("remoteExtHost", P);
				}
				async $asBrowserUri(P) {
					return E.$7g.uriToBrowserUri(d.URI.revive(P));
				}
			};
			(e.$1nc = y),
				(e.$1nc = y =
					Ne(
						[
							(0, b.$tmc)(c.$lbb.MainThreadExtensionService),
							j(1, f.$q2),
							j(2, a.$4N),
							j(3, n.$MQb),
							j(4, s.$asb),
							j(5, p.$IQb),
							j(6, l.$Xnc),
							j(7, r.$ek),
							j(8, g.$r8),
						],
						y,
					));
			class $ {
				constructor(P) {
					this.a = P;
				}
				async resolveAuthority(P, k) {
					return v(await this.a.$resolveAuthority(P, k));
				}
				async getCanonicalURI(P, k) {
					const L = await this.a.$getCanonicalURI(P, k);
					return L && d.URI.revive(L);
				}
				startExtensionHost(P) {
					return this.a.$startExtensionHost(P);
				}
				extensionTestsExecute() {
					return this.a.$extensionTestsExecute();
				}
				activateByEvent(P, k) {
					return this.a.$activateByEvent(P, k);
				}
				activate(P, k) {
					return this.a.$activate(P, k);
				}
				setRemoteEnvironment(P) {
					return this.a.$setRemoteEnvironment(P);
				}
				updateRemoteConnectionData(P) {
					return this.a.$updateRemoteConnectionData(P);
				}
				deltaExtensions(P) {
					return this.a.$deltaExtensions(P);
				}
				test_latency(P) {
					return this.a.$test_latency(P);
				}
				test_up(P) {
					return this.a.$test_up(P);
				}
				test_down(P) {
					return this.a.$test_down(P);
				}
			}
			function v(T) {
				return T.type === "ok"
					? {
							type: "ok",
							value: { ...T.value, authority: S(T.value.authority) },
						}
					: T;
			}
			function S(T) {
				return { ...T, connectTo: I(T.connectTo) };
			}
			function I(T) {
				return T.type === h.RemoteConnectionType.WebSocket
					? new h.$5l(T.host, T.port)
					: new h.$4l(T.id);
			}
		},
	),
		
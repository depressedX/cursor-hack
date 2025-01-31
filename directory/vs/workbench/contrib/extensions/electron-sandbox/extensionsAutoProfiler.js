import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/buffer.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/network.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/ternarySearchTree.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/uuid.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/extensions/common/extensions.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/profiling/electron-sandbox/profileAnalysisWorkerService.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../common/runtimeExtensionsInput.js';
import './extensionsSlowActions.js';
import './runtimeExtensionsEditor.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/environment/electron-sandbox/environmentService.js';
import '../../../services/extensions/common/extensionHostKind.js';
import '../../../services/extensions/common/extensions.js';
import '../../../services/extensions/electron-sandbox/extensionHostProfiler.js';
import '../../../services/timer/browser/timerService.js';
define(
			de[3732],
			he([
				1, 0, 15, 76, 33, 29, 23, 19, 387, 9, 47, 4, 10, 109, 22, 5, 34, 40,
				1651, 32, 985, 1806, 1295, 18, 151, 517, 53, 1823, 520,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*async*/,
				i /*buffer*/,
				w /*cancellation*/,
				E /*errors*/,
				C /*network*/,
				d /*resources*/,
				m /*ternarySearchTree*/,
				r /*uri*/,
				u /*uuid*/,
				a /*nls*/,
				h /*configuration*/,
				c /*extensions*/,
				n /*files*/,
				g /*instantiation*/,
				p /*log*/,
				o /*notification*/,
				f /*profileAnalysisWorkerService*/,
				b /*telemetry*/,
				s /*runtimeExtensionsInput*/,
				l /*extensionsSlowActions*/,
				y /*runtimeExtensionsEditor*/,
				$ /*editorService*/,
				v /*environmentService*/,
				S /*extensionHostKind*/,
				I /*extensions*/,
				T /*extensionHostProfiler*/,
				P /*timerService*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$agd = void 0);
				let k = class {
					constructor(D, M, N, A, R, O, B, U, z, F, x, H) {
						(this.f = D),
							(this.g = M),
							(this.h = N),
							(this.i = A),
							(this.j = R),
							(this.k = O),
							(this.l = B),
							(this.m = U),
							(this.n = z),
							(this.o = F),
							(this.p = x),
							(this.a = new c.$Hn()),
							(this.d = -1),
							H.perfBaseline.then((q) => {
								q < 0 ||
									((this.d = q),
									(this.c = D.onDidChangeResponsiveChange(this.q, this)));
							});
					}
					dispose() {
						this.c?.dispose(), this.b?.dispose(!0);
					}
					async q(D) {
						if (D.extensionHostKind !== S.ExtensionHostKind.LocalProcess)
							return;
						const M = await D.getInspectListener(!0);
						if (M) {
							if (D.isResponsive && this.b)
								this.b.cancel(),
									this.i.info(
										"UNRESPONSIVE extension host: received responsive event and cancelling profiling session",
									);
							else if (!D.isResponsive && !this.b) {
								const N = new w.$Ce();
								this.b = N;
								let A;
								try {
									A = await this.l
										.createInstance(T.$$fd, M.host, M.port)
										.start();
								} catch {
									this.b = void 0;
									return;
								}
								this.i.info(
									"UNRESPONSIVE extension host: starting to profile NOW",
								);
								try {
									await (0, t.$Nh)(5e3, N.token);
								} catch {}
								try {
									this.r(await A.stop());
								} catch (R) {
									(0, E.$4)(R);
								} finally {
									this.b = void 0;
								}
							}
						}
					}
					async r(D) {
						if (
							(await this.f.whenInstalledExtensionsRegistered(),
							this.o.getValue("application.experimental.rendererProfiling"))
						) {
							const H = m.$Si.forUris();
							H.fill(this.f.extensions.map((q) => [q.extensionLocation, q])),
								await this.n.analyseBottomUp(
									D.data,
									(q) =>
										H.findSubstr(r.URI.parse(q))?.identifier.value ??
										"<<not-found>>",
									this.d,
									!1,
								);
						}
						const M = this.f.extensions
								.filter((H) => H.extensionLocation.scheme === C.Schemas.file)
								.map((H) => [H.extensionLocation, c.$Gn.toKey(H.identifier)]),
							N = await this.n.analyseByLocation(D.data, M);
						let A = 0,
							R = "",
							O = -1;
						for (const [H, q] of N) (A += q), q > O && ((O = q), (R = H));
						const B = O / (A / 100),
							U = await this.f.getExtension(R);
						if (!U) return;
						const z = (0, u.$9g)(),
							F = (0, d.$nh)(
								this.m.tmpDir,
								`exthost-${Math.random().toString(16).slice(2, 8)}.cpuprofile`,
							);
						if (
							(await this.p.writeFile(
								F,
								i.$Te.fromString(JSON.stringify(D.data)),
							),
							this.i.warn(
								`UNRESPONSIVE extension host: '${R}' took ${B}% of ${O / 1e3}ms, saved PROFILE here: '${F}'`,
							),
							this.h.publicLog2("exthostunresponsive", {
								sessionId: z,
								duration: A,
								data: N.map((H) => H[0]).flat(),
								id: c.$Gn.toKey(U.identifier),
							}),
							this.g.setUnresponsiveProfile(U.identifier, D),
							!(B >= 95 && O >= 5e6))
						)
							return;
						const x = await this.l.invokeFunction(l.$Xfd, U, D);
						x &&
							(this.a.has(U.identifier) ||
								this.a.size >= 3 ||
								(this.a.add(U.identifier),
								this.j.prompt(
									o.Severity.Warning,
									(0, a.localize)(6617, null, U.displayName || U.name),
									[
										{
											label: (0, a.localize)(6618, null),
											run: () =>
												this.k.openEditor(s.$UTc.instance, { pinned: !0 }),
										},
										x,
									],
									{ priority: o.NotificationPriority.SILENT },
								)));
					}
				};
				(e.$agd = k),
					(e.$agd = k =
						Ne(
							[
								j(0, I.$q2),
								j(1, y.$Yfd),
								j(2, b.$km),
								j(3, p.$ik),
								j(4, o.$4N),
								j(5, $.$IY),
								j(6, g.$Li),
								j(7, v.$ucd),
								j(8, f.$acd),
								j(9, h.$gj),
								j(10, n.$ll),
								j(11, P.$Xnc),
							],
							k,
						));
			},
		)

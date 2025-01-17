import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/parts/ipc/common/ipc.js';
import '../../environment/common/environmentService.js';
import '../../../../platform/remote/common/remoteAgentConnection.js';
import '../../../../platform/remote/common/remoteAuthorityResolver.js';
import './remoteAgentEnvironmentChannel.js';
import '../../../../base/common/event.js';
import '../../../../platform/sign/common/sign.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/product/common/productService.js';
import '../../userDataProfile/common/userDataProfile.js';
import '../../../../platform/remote/common/remoteSocketFactoryService.js';
define(
			de[3786],
			he([1, 0, 3, 305, 78, 604, 211, 3542, 6, 952, 34, 62, 133, 773]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$r3c = void 0);
				let n = class extends t.$1c {
					constructor(o, f, b, s, l, y, $) {
						super(),
							(this.f = o),
							(this.g = f),
							(this.h = b),
							(this.j = l),
							this.h.remoteAuthority
								? (this.a = this.D(
										new g(
											this.h.remoteAuthority,
											s.commit,
											s.quality,
											this.f,
											this.j,
											y,
											$,
										),
									))
								: (this.a = null),
							(this.b = null);
					}
					getConnection() {
						return this.a;
					}
					getEnvironment() {
						return this.getRawEnvironment().then(void 0, () => null);
					}
					getRawEnvironment() {
						return (
							this.b ||
								(this.b = this.m(async (o, f) => {
									const b = await d.$qK.getEnvironmentData(
										o,
										f.remoteAuthority,
										this.g.currentProfile.isDefault
											? void 0
											: this.g.currentProfile.id,
									);
									return (
										this.j._setAuthorityConnectionToken(
											f.remoteAuthority,
											b.connectionToken,
										),
										b
									);
								}, null)),
							this.b
						);
					}
					getExtensionHostExitInfo(o) {
						return this.m(
							(f, b) => d.$qK.getExtensionHostExitInfo(f, b.remoteAuthority, o),
							null,
						);
					}
					getDiagnosticInfo(o) {
						return this.m((f) => d.$qK.getDiagnosticInfo(f, o), void 0);
					}
					updateTelemetryLevel(o) {
						return this.n((f) => d.$qK.updateTelemetryLevel(f, o), void 0);
					}
					registerAuthId(o) {
						return this.n((f) => d.$qK.registerAuthId(f, o), void 0);
					}
					logTelemetry(o, f) {
						return this.n((b) => d.$qK.logTelemetry(b, o, f), void 0);
					}
					flushTelemetry() {
						return this.n((o) => d.$qK.flushTelemetry(o), void 0);
					}
					getRoundTripTime() {
						return this.n(
							async (o) => {
								const f = Date.now();
								return await d.$qK.ping(o), Date.now() - f;
							},
							void 0,
						);
					}
					async endConnection() {
						this.a && (await this.a.end(), this.a.dispose());
					}
					m(o, f) {
						const b = this.getConnection();
						return b
							? b.withChannel("remoteextensionsenvironment", (s) => o(s, b))
							: Promise.resolve(f);
					}
					n(o, f) {
						const b = this.getConnection();
						return b
							? b.withChannel("telemetry", (s) => o(s, b))
							: Promise.resolve(f);
					}
				};
				(e.$r3c = n),
					(e.$r3c = n =
						Ne(
							[
								j(0, c.$8l),
								j(1, h.$P8),
								j(2, w.$r8),
								j(3, a.$Bk),
								j(4, C.$3l),
								j(5, r.$$l),
								j(6, u.$ik),
							],
							n,
						));
				class g extends t.$1c {
					constructor(o, f, b, s, l, y, $) {
						super(),
							(this.h = f),
							(this.j = b),
							(this.m = s),
							(this.n = l),
							(this.q = y),
							(this.r = $),
							(this.a = this.D(new m.$re())),
							(this.onReconnecting = this.a.event),
							(this.b = this.D(new m.$re())),
							(this.onDidStateChange = this.b.event),
							(this.end = () => Promise.resolve()),
							(this.remoteAuthority = o),
							(this.f = null);
					}
					getChannel(o) {
						return (0, i.$si)(this.s().then((f) => f.getChannel(o)));
					}
					withChannel(o, f) {
						const b = this.getChannel(o);
						return f(b);
					}
					registerChannel(o, f) {
						this.s().then((b) => b.registerChannel(o, f));
					}
					async getInitialConnectionTimeMs() {
						try {
							await this.s();
						} catch {}
						return this.g;
					}
					s() {
						return this.f || (this.f = this.t()), this.f;
					}
					async t() {
						let o = !0;
						const f = {
							commit: this.h,
							quality: this.j,
							addressProvider: {
								getAddress: async () => {
									o ? (o = !1) : this.a.fire(void 0);
									const { authority: l } = await this.n.resolveAuthority(
										this.remoteAuthority,
									);
									return {
										connectTo: l.connectTo,
										connectionToken: l.connectionToken,
									};
								},
							},
							remoteSocketFactoryService: this.m,
							signService: this.q,
							logService: this.r,
							ipcLogger: null,
						};
						let b;
						const s = Date.now();
						try {
							b = this.D(await (0, E.$_l)(f, this.remoteAuthority, "renderer"));
						} finally {
							this.g = Date.now() - s;
						}
						return (
							b.protocol.onDidDispose(() => {
								b.dispose();
							}),
							(this.end = () => (
								b.protocol.sendDisconnect(), b.protocol.drain()
							)),
							this.D(b.onDidStateChange((l) => this.b.fire(l))),
							b.client
						);
					}
				}
			},
		),
		
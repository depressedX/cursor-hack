import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../base/parts/ipc/common/ipc.net.js';
import '../../../platform/remote/common/managedSocket.js';
import '../../../platform/remote/common/remoteAuthorityResolver.js';
import '../../../platform/remote/common/remoteSocketFactoryService.js';
import '../common/extHost.protocol.js';
import '../../services/extensions/common/extHostCustomers.js';
define(
			de[3358],
			he([1, 0, 6, 3, 760, 2784, 211, 773, 88, 101]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$eoc = e.$doc = void 0);
				let u = class extends i.$1c {
					constructor(c, n) {
						super(),
							(this.f = n),
							(this.b = new Map()),
							(this.c = new Map()),
							(this.a = c.getProxy(m.$mbb.ExtHostManagedSockets));
					}
					async $registerSocketFactory(c) {
						const n = this,
							g = new (class {
								supports(p) {
									return p.id === c;
								}
								connect(p, o, f, b) {
									return new Promise((s, l) => {
										if (p.id !== c) return l(new Error("Invalid connectTo"));
										const y = p.id;
										n.a
											.$openRemoteSocket(y)
											.then(($) => {
												const v = {
													onClose: new t.$re(),
													onData: new t.$re(),
													onEnd: new t.$re(),
												};
												n.c.set($, v),
													a.connect($, n.a, o, f, b, v).then(
														(S) => {
															S.onDidDispose(() => n.c.delete($)), s(S);
														},
														(S) => {
															n.c.delete($), l(S);
														},
													);
											})
											.catch(l);
									});
								}
							})();
						this.b.set(c, this.f.register(C.RemoteConnectionType.Managed, g));
					}
					async $unregisterSocketFactory(c) {
						this.b.get(c)?.dispose();
					}
					$onDidManagedSocketHaveData(c, n) {
						this.c.get(c)?.onData.fire(n);
					}
					$onDidManagedSocketClose(c, n) {
						this.c
							.get(c)
							?.onClose.fire({
								type: w.SocketCloseEventType.NodeSocketCloseEvent,
								error: n ? new Error(n) : void 0,
								hadError: !!n,
							}),
							this.c.delete(c);
					}
					$onDidManagedSocketEnd(c) {
						this.c.get(c)?.onEnd.fire();
					}
				};
				(e.$doc = u),
					(e.$doc = u =
						Ne([(0, r.$tmc)(m.$lbb.MainThreadManagedSockets), j(1, d.$8l)], u));
				class a extends E.$coc {
					static connect(c, n, g, p, o, f) {
						const b = new a(c, n, o, f);
						return (0, E.$boc)(b, g, p, o, f);
					}
					constructor(c, n, g, p) {
						super(g, p), (this.c = c), (this.j = n);
					}
					write(c) {
						this.j.$remoteSocketWrite(this.c, c);
					}
					h() {
						this.j.$remoteSocketEnd(this.c);
					}
					drain() {
						return this.j.$remoteSocketDrain(this.c);
					}
				}
				e.$eoc = a;
			},
		),
		
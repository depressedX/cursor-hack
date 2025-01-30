import '../../../../require.js';
import '../../../../exports.js';
import './extHost.protocol.js';
import '../../../platform/instantiation/common/instantiation.js';
import '../../../base/common/lifecycle.js';
import './extHostRpcService.js';
import '../../../base/common/buffer.js';
define(
			Pe[191],
			Ne([1, 0, 6, 5, 3, 21, 22]),
			function (we, t, e, r, S, N, P) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$3hd = t.$2hd = void 0),
					(t.$2hd = (0, r.$Mi)("IExtHostManagedSockets"));
				let I = class {
					constructor(y) {
						(this.b = 0),
							(this.c = null),
							(this.d = new Map()),
							(this.a = y.getProxy(e.$lbb.MainThreadManagedSockets));
					}
					setFactory(y, d) {
						for (const k of this.d.values()) k.dispose();
						this.c && this.a.$unregisterSocketFactory(this.c.socketFactoryId),
							(this.c = new l(y, d)),
							this.a.$registerSocketFactory(this.c.socketFactoryId);
					}
					async $openRemoteSocket(y) {
						if (!this.c || this.c.socketFactoryId !== y)
							throw new Error(`No socket factory with id ${y}`);
						const d = ++this.b,
							k = await this.c.makeConnection(),
							g = new S.$Zc();
						return (
							this.d.set(d, new n(d, k, g)),
							g.add((0, S.$Yc)(() => this.d.delete(d))),
							g.add(
								k.onDidEnd(() => {
									this.a.$onDidManagedSocketEnd(d), g.dispose();
								}),
							),
							g.add(
								k.onDidClose((c) => {
									this.a.$onDidManagedSocketClose(d, c?.stack ?? c?.message),
										g.dispose();
								}),
							),
							g.add(
								k.onDidReceiveMessage((c) =>
									this.a.$onDidManagedSocketHaveData(d, P.$Te.wrap(c)),
								),
							),
							d
						);
					}
					$remoteSocketWrite(y, d) {
						this.d.get(y)?.actual.send(d.buffer);
					}
					$remoteSocketEnd(y) {
						const d = this.d.get(y);
						d && (d.actual.end(), d.dispose());
					}
					async $remoteSocketDrain(y) {
						await this.d.get(y)?.actual.drain?.();
					}
				};
				(t.$3hd = I), (t.$3hd = I = wt([rt(0, N.$08)], I));
				class l {
					constructor(y, d) {
						(this.socketFactoryId = y), (this.makeConnection = d);
					}
				}
				class n extends S.$1c {
					constructor(y, d, k) {
						super(), (this.socketId = y), (this.actual = d), this.D(k);
					}
				}
			},
		),
		
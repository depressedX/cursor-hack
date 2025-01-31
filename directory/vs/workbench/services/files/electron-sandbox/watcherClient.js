import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/parts/ipc/common/ipc.js';
import '../../../../platform/files/common/watcher.js';
define(de[3383], he([1, 0, 305, 938]), function (ce /*require*/,
 e /*exports*/,
 t /*ipc*/,
 i /*watcher*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Vcd = void 0);
			class w extends i.$xr {
				constructor(C, d, m, r) {
					super(C, d, m), (this.C = r), this.r();
				}
				q(C) {
					return t.ProxyChannel.toService(
						(0, t.$si)(
							(async () => {
								const { client: m, onDidTerminate: r } = C.add(
									await this.C.createWorker({
										moduleId: "vs/platform/files/node/watcher/watcherMain",
										type: "fileWatcher",
									}),
								);
								return (
									r.then(({ reason: u }) => {
										u?.code === 0
											? this.y(
													`terminated by itself with code ${u.code}, signal: ${u.signal}`,
												)
											: this.s(
													`terminated by itself unexpectedly with code ${u?.code}, signal: ${u?.signal} (ETERM)`,
												);
									}),
									m.getChannel("watcher")
								);
							})(),
						),
					);
				}
			}
			e.$Vcd = w;
		})

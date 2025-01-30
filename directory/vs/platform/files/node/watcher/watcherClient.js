import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/network.js';
import '../../../../base/parts/ipc/common/ipc.js';
import '../../../../base/parts/ipc/node/ipc.cp.js';
import '../../common/watcher.js';
define(
			Pe[485],
			Ne([1, 0, 16, 136, 469, 109]),
			function (we, t, e, r, S, N) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }), (t.$Lr = void 0);
				class P extends N.$xr {
					constructor(l, n, p) {
						super(l, n, p), this.r();
					}
					q(l) {
						const n = l.add(
							new S.$Kr(e.$7g.asFileUri("bootstrap-fork").fsPath, {
								serverName: "File Watcher",
								args: ["--type=fileWatcher"],
								env: {
									VSCODE_AMD_ENTRYPOINT:
										"vs/platform/files/node/watcher/watcherMain",
									VSCODE_PIPE_LOGGING: "true",
									VSCODE_VERBOSE_LOGGING: "true",
								},
							}),
						);
						return (
							l.add(
								n.onDidProcessExit(({ code: p, signal: y }) =>
									this.s(
										`terminated by itself with code ${p}, signal: ${y} (ETERM)`,
									),
								),
							),
							r.ProxyChannel.toService((0, r.$ti)(n.getChannel("watcher")))
						);
					}
				}
				t.$Lr = P;
			},
		),
		
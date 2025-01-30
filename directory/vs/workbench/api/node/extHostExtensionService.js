import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/performance.js';
import '../common/extHost.api.impl.js';
import '../common/extHostRequireInterceptor.js';
import './proxyResolver.js';
import '../common/extHostExtensionService.js';
import './extHostDownloadService.js';
import '../../../base/common/uri.js';
import '../../../base/common/network.js';
import '../common/extHostTypes.js';
import './extHostCLIServer.js';
import '../../../base/node/extpath.js';
import './extHostConsoleForwarder.js';
import './extHostDiskFileSystemProvider.js';
define(
			Pe[624],
			Ne([1, 0, 91, 611, 605, 517, 75, 593, 2, 16, 11, 623, 176, 553, 592]),
			function (we, t, e, r, S, N, P, I, l, n, p, y, d, k, g) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$Yjd = void 0),
					(e = tt(e));
				class c extends S.$ljd {
					j() {
						const T = this,
							a = globalThis._VSCODE_NODE_MODULES.module,
							u = a._load;
						a._load = function (w, m, E) {
							return (
								(w = f(w)),
								T.a.has(w)
									? T.a
											.get(w)
											.load(w, l.URI.file((0, d.$Qr)(m.filename)), (R) =>
												u.apply(this, [R, m, E]),
											)
									: u.apply(this, arguments)
							);
						};
						const s = a._resolveLookupPaths;
						a._resolveLookupPaths = (o, w) => s.call(this, f(o), w);
						const f = (o) => {
							for (const w of T.b) {
								const m = w(o);
								if (m) {
									o = m;
									break;
								}
							}
							return o;
						};
					}
				}
				class h extends P.$5hd {
					constructor() {
						super(...arguments),
							(this.extensionRuntime = p.ExtensionRuntime.Node);
					}
					async wb() {
						this.h.createInstance(k.$Wjd);
						const T = this.h.invokeFunction(r.$hjd);
						if (
							(this.h.createInstance(I.$Vjd),
							this.f.remote.isRemote && this.f.remote.authority)
						) {
							const s = this.h.createInstance(y.$beb);
							process.env.VSCODE_IPC_HOOK_CLI = s.ipcHandlePath;
						}
						this.h.createInstance(g.$Xjd),
							await this.h
								.createInstance(c, T, { mine: this.J, all: this.L })
								.install(),
							e.mark("code/extHost/didInitAPI");
						const u = await this.m.getConfigProvider();
						await (0, N.$Ujd)(this.j, u, this, this.q, this.y, this.f),
							e.mark("code/extHost/didInitProxyResolver");
					}
					xb(T) {
						return T.main;
					}
					async yb(T, a, u) {
						if (a.scheme !== n.Schemas.file)
							throw new Error(
								`Cannot load URI: '${a}', must be of file-scheme`,
							);
						let s = null;
						u.codeLoadingStart(),
							this.q.trace(
								`ExtensionService#loadCommonJSModule ${a.toString(!0)}`,
							),
							this.q.flush();
						const f = T?.identifier.value;
						T && (await this.u.initializeLocalizedMessages(T));
						try {
							f && e.mark(`code/extHost/willLoadExtensionCode/${f}`),
								(s = (we.__$__nodeRequire ?? we)(a.fsPath));
						} finally {
							f && e.mark(`code/extHost/didLoadExtensionCode/${f}`),
								u.codeLoadingStop();
						}
						return s;
					}
					async $setRemoteEnvironment(T) {
						if (this.f.remote.isRemote)
							for (const a in T) {
								const u = T[a];
								u === null ? delete process.env[a] : (process.env[a] = u);
							}
					}
				}
				t.$Yjd = h;
			},
		),
		
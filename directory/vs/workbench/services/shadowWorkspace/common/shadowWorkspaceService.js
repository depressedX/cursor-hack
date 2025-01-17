import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../proto/aiserver/v1/shadow_workspace_pb.js';
import '../../../../base/common/constants.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/uri.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../environment/common/environmentService.js';
import '../../lifecycle/common/lifecycle.js';
define(
			de[626],
			he([1, 0, 454, 58, 3, 12, 9, 10, 20, 5, 25, 78, 52]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$l7b = e.$k7b = void 0),
					(e.$k7b = (0, r.$Mi)("IShadowWorkspaceService"));
				let c = class extends w.$1c {
					constructor(g, p, o, f) {
						super(),
							(this.b = g),
							(this.c = p),
							(this.f = o),
							(this.g = f),
							(this.a = []),
							(this.h = !1),
							this.D(
								this.g.onWillShutdown((b) => {
									const s = (async () => {
										const l = new Promise(($) => setTimeout($, 2e3)),
											y = this.closeShadowWorkspace();
										await Promise.race([l, y]);
									})();
									b.join(s, {
										id: "shadow-workspace-close",
										label: "Closing Shadow Workspace",
									});
								}),
							),
							this.b.onDidChangeConfiguration((b) => {
								b.affectsConfiguration(i.$KW) &&
									(this.enabled() || this.closeShadowWorkspace());
							});
					}
					registerShadowWorkspaceManager(g) {
						this.a.push(g);
					}
					enabled() {
						return this.b.getValue(i.$KW) ?? !1;
					}
					dispose() {
						this.closeShadowWorkspace(), super.dispose();
					}
					async openShadowWorkspace() {
						if (this.h)
							throw new Error(
								"Already opening a shadow workspace. Please wait a bit.",
							);
						try {
							this.h = !0;
							for (const g of this.a)
								if (g.hasOpenShadowWorkspace()) return { didReuse: !0 };
							if ((await this.closeShadowWorkspace(), !this.enabled()))
								throw new Error("Shadow workspace is not enabled");
							for (const g of this.a)
								if (g.available())
									return await g.openShadowWorkspace(), { didReuse: !1 };
							throw new Error("No shadow workspace manager available");
						} finally {
							this.h = !1;
						}
					}
					async closeShadowWorkspace() {
						this.q();
						for (const g of this.a)
							try {
								await g.closeShadowWorkspace();
							} catch (p) {
								console.error("Failed to close shadow workspace", p);
							}
					}
					j(g) {
						if (E.$l) return `\\\\.\\pipe\\ipc-cursor-sw-${g}-sock`;
						let p = C.URI.joinPath(this.f.cacheHome, `sw${g}.sock`);
						if (p.fsPath.length > 103) {
							const o = p.fsPath.length - 103;
							if (g.length - o < 7)
								throw new Error(
									"Failed to create socket path! Cache home directory is too long.",
								);
							const f = g.substring(o);
							p = C.URI.joinPath(this.f.cacheHome, `sw${f}.sock`);
						}
						return p.fsPath;
					}
					getServerSocketPath() {
						if (this.f.shadowWindowForWorkspaceId)
							return this.j(this.f.shadowWindowForWorkspaceId);
					}
					getClientSocketPath() {
						return this.j(this.c.getWorkspace().id);
					}
					async getClient(g) {
						if (!this.enabled())
							throw (
								(this.closeShadowWorkspace(),
								new Error("Shadow workspace is not enabled"))
							);
						const { didReuse: p } = await this.openShadowWorkspace();
						if (this.n === void 0) {
							if (this.m === void 0)
								throw new Error("No client provider found.");
							this.n = this.m(this.getClientSocketPath());
						}
						try {
							const o = await this.n,
								f = p ? 2 : 4;
							let b = 0;
							for (; b < f; ) {
								b++;
								try {
									const s = o.shadowHealthCheck(new t.$rx({})),
										l = new Promise(($) =>
											setTimeout(() => $("timedout"), 2e3),
										);
									if ((await Promise.race([s, l])) === "timedout")
										throw new Error("Timed out waiting for health check");
									return o;
								} catch (s) {
									if (b > f) throw s;
									await new Promise((l) => setTimeout(l, b * b * 1e3));
								}
							}
							throw new Error("Failed to get client");
						} catch (o) {
							if ((console.error("Failed to get client", o), (g ?? 0) > 1))
								throw new Error("Failed to get client after 2 attempts");
							return (
								await this.closeShadowWorkspace(),
								await new Promise((f) => setTimeout(f, 1e3)),
								await this.getClient((g ?? 0) + 1)
							);
						}
					}
					q() {
						this.n = void 0;
					}
					provideClient(g) {
						return (
							(this.m = g),
							{
								dispose: () => {
									this.m === g && ((this.m = void 0), (this.n = void 0));
								},
							}
						);
					}
				};
				(e.$l7b = c),
					(e.$l7b = c =
						Ne([j(0, d.$gj), j(1, u.$Vi), j(2, a.$r8), j(3, h.$n6)], c)),
					(0, m.$lK)(e.$k7b, c, m.InstantiationType.Delayed);
			},
		),
		
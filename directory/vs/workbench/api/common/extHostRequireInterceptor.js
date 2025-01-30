import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/performance.js';
import '../../../base/common/uri.js';
import './extHost.protocol.js';
import './extHostConfiguration.js';
import '../../services/extensions/common/extensions.js';
import '../../../platform/extensions/common/extensions.js';
import './extHostRpcService.js';
import './extHostInitDataService.js';
import '../../../platform/instantiation/common/instantiation.js';
import './extHostExtensionService.js';
import '../../../platform/log/common/log.js';
import '../../../base/common/strings.js';
define(
			Pe[605],
			Ne([1, 0, 91, 2, 6, 56, 29, 25, 21, 34, 5, 75, 14, 15]),
			function (we, t, e, r, S, N, P, I, l, n, p, y, d, k) {
				"use strict";
				var g;
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$ljd = void 0),
					(e = tt(e));
				let c = class {
					constructor(u, s, f, o, w, m, E) {
						(this.c = u),
							(this.d = s),
							(this.e = f),
							(this.f = o),
							(this.g = w),
							(this.h = m),
							(this.i = E),
							(this.a = new Map()),
							(this.b = []);
					}
					async install() {
						this.j(), e.mark("code/extHost/willWaitForConfig");
						const u = await this.f.getConfigProvider();
						e.mark("code/extHost/didWaitForConfig");
						const s = await this.g.getExtensionPathIndex();
						this.register(new $(this.c, s, this.d, u, this.i)),
							this.register(this.e.createInstance(h)),
							this.h.remote.isRemote &&
								this.register(
									this.e.createInstance(T, s, this.h.environment.appUriScheme),
								);
					}
					register(u) {
						if ("nodeModuleName" in u)
							if (Array.isArray(u.nodeModuleName))
								for (const s of u.nodeModuleName) this.a.set(s, u);
							else this.a.set(u.nodeModuleName, u);
						typeof u.alternativeModuleName == "function" &&
							this.b.push((s) => u.alternativeModuleName(s));
					}
				};
				(t.$ljd = c),
					(t.$ljd = c =
						wt(
							[
								rt(2, p.$Li),
								rt(3, N.$phd),
								rt(4, y.$6hd),
								rt(5, n.$98),
								rt(6, d.$ik),
							],
							c,
						));
				let h = class {
					static {
						g = this;
					}
					static {
						this.a = new Map([
							["vscode-ripgrep", "@vscode/ripgrep"],
							["vscode-windows-registry", "@vscode/windows-registry"],
						]);
					}
					constructor(u) {
						if (u.environment.appRoot && g.a.size) {
							const s = (0, k.$of)(this.c(u.environment.appRoot.fsPath)),
								f = "[a-z0-9_.-]",
								o = `@${f}+\\/${f}+|${f}+`,
								w = "node_modules|node_modules\\.asar(?:\\.unpacked)?";
							this.b = new RegExp(`^(${s}/${w}\\/)(${o})(.*)$`, "i");
						}
					}
					alternativeModuleName(u) {
						if (!this.b) return;
						const s = this.b.exec(this.c(u));
						if (!s) return;
						const [, f, o, w] = s,
							m = g.a.get(o);
						if (m !== void 0)
							return (
								console.warn(
									`${o} as been renamed to ${m}, please update your imports`,
								),
								f + m + w
							);
					}
					c(u) {
						return u.replace(/\\/g, "/");
					}
				};
				h = g = wt([rt(0, n.$98)], h);
				class $ {
					constructor(u, s, f, o, w) {
						(this.c = u),
							(this.d = s),
							(this.e = f),
							(this.f = o),
							(this.g = w),
							(this.nodeModuleName = "vscode"),
							(this.a = new I.$In());
					}
					load(u, s) {
						const f = this.d.findSubstr(s);
						if (f) {
							let o = this.a.get(f.identifier);
							return (
								o ||
									((o = this.c(f, this.e, this.f)),
									this.a.set(f.identifier, o)),
								o
							);
						}
						if (!this.b) {
							let o = "";
							this.d.forEach(
								(w, m) =>
									(o += `	${m} -> ${w.identifier.value}
`),
							),
								this.g.warn(`Could not identify extension for 'vscode' require call from ${s}. These are the extension path mappings: 
${o}`),
								(this.b = this.c(P.$o2, this.e, this.f));
						}
						return this.b;
					}
				}
				let T = class {
					constructor(u, s, f) {
						(this.e = u),
							(this.f = s),
							(this.nodeModuleName = ["open", "opn"]),
							(this.d = f.getProxy(S.$lbb.MainThreadTelemetry));
						const o = f.getProxy(S.$lbb.MainThreadWindow);
						this.c = (w, m) => {
							const E = r.URI.parse(w);
							return m
								? this.g(w, m)
								: E.scheme === "http" || E.scheme === "https"
									? o.$openUri(E, w, { allowTunneling: !0 })
									: E.scheme === "mailto" || E.scheme === this.f
										? o.$openUri(E, w, {})
										: this.g(w, m);
						};
					}
					load(u, s, f) {
						const o = this.e.findSubstr(s);
						return (
							o && ((this.a = o.identifier.value), this.h()),
							(this.b = f(u)),
							this.c
						);
					}
					g(u, s) {
						return this.i(), this.b(u, s);
					}
					h() {
						this.a &&
							this.d.$publicLog2("shimming.open", { extension: this.a });
					}
					i() {
						this.a &&
							this.d.$publicLog2("shimming.open.call.noForward", {
								extension: this.a,
							});
					}
				};
				T = wt([rt(2, l.$08)], T);
			},
		),
		
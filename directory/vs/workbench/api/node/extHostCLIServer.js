import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/parts/ipc/node/ipc.net.js';
import '../../../../http.js';
import '../../../../fs.js';
import '../common/extHostCommands.js';
import '../../../base/common/uri.js';
import '../../../platform/log/common/log.js';
import '../../../platform/workspace/common/workspace.js';
define(
			Pe[623],
			Ne([1, 0, 199, 518, 59, 44, 2, 14, 61]),
			function (we, t, e, r, S, N, P, I, l) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$beb = t.$aeb = void 0),
					(r = tt(r)),
					(S = tt(S));
				class n {
					constructor(d, k, g) {
						(this.b = d),
							(this.c = k),
							(this.f = g),
							(this.a = r.createServer((c, h) => this.h(c, h))),
							this.g().catch((c) => (k.error(c), ""));
					}
					get ipcHandlePath() {
						return this.f;
					}
					async g() {
						try {
							this.a.listen(this.ipcHandlePath),
								this.a.on("error", (d) => this.c.error(d));
						} catch {
							this.c.error("Could not start open from terminal server.");
						}
						return this.f;
					}
					h(d, k) {
						const g = (h, $) => {
								k.writeHead(h, { "content-type": "application/json" }),
									k.end(JSON.stringify($ || null), (T) => T && this.c.error(T));
							},
							c = [];
						d.setEncoding("utf8"),
							d.on("data", (h) => c.push(h)),
							d.on("end", async () => {
								try {
									const h = JSON.parse(c.join(""));
									let $;
									switch (h.type) {
										case "open":
											$ = await this.i(h);
											break;
										case "openExternal":
											$ = await this.j(h);
											break;
										case "status":
											$ = await this.l(h);
											break;
										case "extensionManagement":
											$ = await this.k(h);
											break;
										default:
											g(404, `Unknown message type: ${h.type}`);
											break;
									}
									g(200, $);
								} catch (h) {
									const $ = h instanceof Error ? h.message : JSON.stringify(h);
									g(500, $),
										this.c.error("Error while processing pipe request", h);
								}
							});
					}
					async i(d) {
						const {
								fileURIs: k,
								folderURIs: g,
								forceNewWindow: c,
								diffMode: h,
								mergeMode: $,
								addMode: T,
								forceReuseWindow: a,
								gotoLineMode: u,
								waitMarkerFilePath: s,
								remoteAuthority: f,
							} = d,
							o = [];
						if (Array.isArray(g))
							for (const R of g)
								try {
									o.push({ folderUri: P.URI.parse(R) });
								} catch {}
						if (Array.isArray(k))
							for (const R of k)
								try {
									(0, l.$fj)(R)
										? o.push({ workspaceUri: P.URI.parse(R) })
										: o.push({ fileUri: P.URI.parse(R) });
								} catch {}
						const w = s ? P.URI.file(s) : void 0,
							E = {
								forceNewWindow: c,
								diffMode: h,
								mergeMode: $,
								addMode: T,
								gotoLineMode: u,
								forceReuseWindow: a,
								preferNewWindow: !a && !w && !T,
								waitMarkerFileURI: w,
								remoteAuthority: f,
							};
						this.b.executeCommand("_remoteCLI.windowOpen", o, E);
					}
					async j(d) {
						for (const k of d.uris) {
							const g = P.URI.parse(k),
								c = g.scheme === "file" ? g : k;
							await this.b.executeCommand("_remoteCLI.openExternal", c);
						}
					}
					async k(d) {
						const k = (c) =>
								c?.map((h) => (/\.vsix$/i.test(h) ? P.URI.parse(h) : h)),
							g = {
								list: d.list,
								install: k(d.install),
								uninstall: k(d.uninstall),
								force: d.force,
							};
						return await this.b.executeCommand(
							"_remoteCLI.manageExtensions",
							g,
						);
					}
					async l(d) {
						return await this.b.executeCommand("_remoteCLI.getSystemStatus");
					}
					dispose() {
						this.a.close(),
							this.f &&
								process.platform !== "win32" &&
								S.existsSync(this.f) &&
								S.unlinkSync(this.f);
					}
				}
				t.$aeb = n;
				let p = class extends n {
					constructor(d, k) {
						super(d, k, (0, e.$Ei)());
					}
				};
				(t.$beb = p), (t.$beb = p = wt([rt(0, N.$8db), rt(1, I.$ik)], p));
			},
		),
		
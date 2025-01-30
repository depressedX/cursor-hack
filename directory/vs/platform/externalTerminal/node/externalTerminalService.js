import '../../../../require.js';
import '../../../../exports.js';
import '../../../../child_process.js';
import '../../../base/common/decorators.js';
import '../../../base/common/network.js';
import '../../../base/common/path.js';
import '../../../base/common/platform.js';
import '../../../base/common/processes.js';
import '../../../base/node/pfs.js';
import '../../../base/node/processes.js';
import '../../../nls.js';
import '../common/externalTerminal.js';
define(
			Pe[479],
			Ne([1, 0, 81, 89, 16, 18, 13, 174, 43, 177, 10, 478]),
			function (we, t, e, r, S, N, P, I, l, n, p, y) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.LinuxExternalTerminalService =
						t.MacExternalTerminalService =
						t.WindowsExternalTerminalService =
							void 0),
					(e = tt(e)),
					(N = tt(N)),
					(P = tt(P)),
					(l = tt(l)),
					(n = tt(n)),
					(p = tt(p));
				const d = p.localize(1863, null);
				class k {
					async getDefaultTerminalForPlatforms() {
						return {
							windows: g.getDefaultTerminalWindows(),
							linux: await h.getDefaultTerminalLinuxReady(),
							osx: "xterm",
						};
					}
				}
				class g extends k {
					static {
						this.CMD = "cmd.exe";
					}
					openTerminal(s, f) {
						return this.spawnTerminal(e, s, n.$Mm(), f);
					}
					spawnTerminal(s, f, o, w) {
						const m = f.windowsExec || g.getDefaultTerminalWindows();
						w && w[1] === ":" && (w = w[0].toUpperCase() + w.substr(1));
						const E = N.$sc(m, ".exe").toLowerCase();
						if (E === "cmder")
							return s.spawn(m, w ? [w] : void 0), Promise.resolve(void 0);
						const R = ["/c", "start", "/wait"];
						return (
							m.indexOf(" ") >= 0 && R.push(m),
							R.push(m),
							E === "wt" && R.push("-d ."),
							new Promise((C, O) => {
								const A = $(process),
									J = s.spawn(o, R, { cwd: w, env: A, detached: !0 });
								J.on("error", O), J.on("exit", () => C());
							})
						);
					}
					async runInTerminal(s, f, o, w, m) {
						const E =
								"windowsExec" in m && m.windowsExec
									? m.windowsExec
									: g.getDefaultTerminalWindows(),
							R = await g.getWtExePath();
						return new Promise((C, O) => {
							const A = `"${f} - ${d}"`,
								J = `"${o.join('" "')}" & pause`,
								L = Object.assign({}, $(process), w);
							Object.keys(L)
								.filter((z) => L[z] === null)
								.forEach((z) => delete L[z]);
							const b = { cwd: f, env: L, windowsVerbatimArguments: !0 };
							let F, D;
							N.$sc(E, ".exe") === "wt"
								? ((F = E), (D = ["-d", ".", g.CMD, "/c", J]))
								: R
									? ((F = R), (D = ["-d", ".", E, "/c", J]))
									: ((F = g.CMD),
										(D = ["/c", "start", A, "/wait", E, "/c", `"${J}"`])),
								e.spawn(F, D, b).on("error", (z) => {
									O(T(z));
								}),
								C(void 0);
						});
					}
					static getDefaultTerminalWindows() {
						if (!g._DEFAULT_TERMINAL_WINDOWS) {
							const s = !!process.env.hasOwnProperty("PROCESSOR_ARCHITEW6432");
							g._DEFAULT_TERMINAL_WINDOWS = `${process.env.windir ? process.env.windir : "C:\\Windows"}\\${s ? "Sysnative" : "System32"}\\cmd.exe`;
						}
						return g._DEFAULT_TERMINAL_WINDOWS;
					}
					static async getWtExePath() {
						try {
							const s = await n.win32.findExecutable("wt");
							return (await l.Promises.exists(s)) ? s : void 0;
						} catch {
							return;
						}
					}
				}
				(t.WindowsExternalTerminalService = g),
					wt([r.$ei], g, "getWtExePath", null);
				class c extends k {
					static {
						this.OSASCRIPT = "/usr/bin/osascript";
					}
					openTerminal(s, f) {
						return this.spawnTerminal(e, s, f);
					}
					runInTerminal(s, f, o, w, m) {
						const E = m.osxExec || y.DEFAULT_TERMINAL_OSX;
						return new Promise((R, C) => {
							if (E === y.DEFAULT_TERMINAL_OSX || E === "iTerm.app") {
								const O =
										E === y.DEFAULT_TERMINAL_OSX
											? "TerminalHelper"
											: "iTermHelper",
									J = [
										S.$7g.asFileUri(
											`vs/workbench/contrib/externalTerminal/node/${O}.scpt`,
										).fsPath,
										"-t",
										s || d,
										"-w",
										f,
									];
								for (const F of o) J.push("-a"), J.push(F);
								if (w) {
									const F = Object.assign({}, $(process), w);
									for (const D in F) {
										const M = F[D];
										M === null
											? (J.push("-u"), J.push(D))
											: (J.push("-e"), J.push(`${D}=${M}`));
									}
								}
								let L = "";
								const b = e.spawn(c.OSASCRIPT, J);
								b.on("error", (F) => {
									C(T(F));
								}),
									b.stderr.on("data", (F) => {
										L += F.toString();
									}),
									b.on("exit", (F) => {
										if (F === 0) R(void 0);
										else if (L) {
											const D = L.split(
												`
`,
												1,
											);
											C(new Error(D[0]));
										} else C(new Error(p.localize(1864, null, O, F)));
									});
							} else C(new Error(p.localize(1865, null, E)));
						});
					}
					spawnTerminal(s, f, o) {
						const w = f.osxExec || y.DEFAULT_TERMINAL_OSX;
						return new Promise((m, E) => {
							const R = ["-a", w];
							o && R.push(o);
							const C = $(process),
								O = s.spawn("/usr/bin/open", R, { cwd: o, env: C });
							O.on("error", E), O.on("exit", () => m());
						});
					}
				}
				t.MacExternalTerminalService = c;
				class h extends k {
					static {
						this.WAIT_MESSAGE = p.localize(1866, null);
					}
					openTerminal(s, f) {
						return this.spawnTerminal(e, s, f);
					}
					runInTerminal(s, f, o, w, m) {
						const E = m.linuxExec
							? Promise.resolve(m.linuxExec)
							: h.getDefaultTerminalLinuxReady();
						return new Promise((R, C) => {
							const O = [];
							E.then((A) => {
								A.indexOf("gnome-terminal") >= 0 ? O.push("-x") : O.push("-e"),
									O.push("bash"),
									O.push("-c");
								const J = `${a(o)}; echo; read -p "${h.WAIT_MESSAGE}" -n1;`;
								O.push(`''${J}''`);
								const L = Object.assign({}, $(process), w);
								Object.keys(L)
									.filter((M) => L[M] === null)
									.forEach((M) => delete L[M]);
								const b = { cwd: f, env: L };
								let F = "";
								const D = e.spawn(A, O, b);
								D.on("error", (M) => {
									C(T(M));
								}),
									D.stderr.on("data", (M) => {
										F += M.toString();
									}),
									D.on("exit", (M) => {
										if (M === 0) R(void 0);
										else if (F) {
											const z = F.split(
												`
`,
												1,
											);
											C(new Error(z[0]));
										} else C(new Error(p.localize(1867, null, A, M)));
									});
							});
						});
					}
					static async getDefaultTerminalLinuxReady() {
						if (!h._DEFAULT_TERMINAL_LINUX_READY)
							if (!P.$n)
								h._DEFAULT_TERMINAL_LINUX_READY = Promise.resolve("xterm");
							else {
								const s = await l.Promises.exists("/etc/debian_version");
								h._DEFAULT_TERMINAL_LINUX_READY = new Promise((f) => {
									s
										? f("x-terminal-emulator")
										: process.env.DESKTOP_SESSION === "gnome" ||
												process.env.DESKTOP_SESSION === "gnome-classic"
											? f("gnome-terminal")
											: process.env.DESKTOP_SESSION === "kde-plasma"
												? f("konsole")
												: process.env.COLORTERM
													? f(process.env.COLORTERM)
													: process.env.TERM
														? f(process.env.TERM)
														: f("xterm");
								});
							}
						return h._DEFAULT_TERMINAL_LINUX_READY;
					}
					spawnTerminal(s, f, o) {
						const w = f.linuxExec
							? Promise.resolve(f.linuxExec)
							: h.getDefaultTerminalLinuxReady();
						return new Promise((m, E) => {
							w.then((R) => {
								const C = $(process),
									O = s.spawn(R, [], { cwd: o, env: C });
								O.on("error", E), O.on("exit", () => m());
							});
						});
					}
				}
				t.LinuxExternalTerminalService = h;
				function $(u) {
					const s = { ...u.env };
					return (0, I.$zm)(s), s;
				}
				function T(u) {
					return "errno" in u &&
						u.errno === "ENOENT" &&
						"path" in u &&
						typeof u.path == "string"
						? new Error(p.localize(1868, null, u.path))
						: u;
				}
				function a(u) {
					let s = "";
					for (const f of u)
						f.indexOf(" ") >= 0 ? (s += '"' + f + '"') : (s += f), (s += " ");
					return s;
				}
			},
		),
		
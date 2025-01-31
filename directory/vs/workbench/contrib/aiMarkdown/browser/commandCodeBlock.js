import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/extpath.js';
import '../../../../platform/terminal/common/terminal.js';
define(
			de[1708],
			he([1, 0, 19, 9, 12, 249, 117]),
			function (ce /*require*/,
 e /*exports*/,
 t /*resources*/,
 i /*uri*/,
 w /*platform*/,
 E /*extpath*/,
 C /*terminal*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$o$b = e.$n$b = void 0),
					(e.$p$b = a);
				const d = async (c) => {
					let n = await c.terminalService.getActiveOrCreateInstance({
						acceptsInput: !0,
					});
					return (
						(n.titleSource === C.TitleEventSource.Process ||
							n.hasChildProcesses) &&
							((n = await c.terminalService.createTerminal()),
							c.terminalService.setActiveInstance(n),
							await c.terminalService.revealActiveTerminal(),
							await new Promise((g) => {
								const p = n.onData(() => {
									p.dispose(), setTimeout(g, 200);
								});
							})),
						n
					);
				};
				e.$n$b = d;
				const m = async (c, n, g, p) => {
					try {
						if (p === "zsh" || p === "bash") {
							const o = await (0, e.$n$b)(c);
							if ((await o.focusWhenReady(), g !== void 0)) {
								const f = await o.getCwd();
								if (g !== f && o.shellType !== void 0) {
									const b = c.workspaceContextService.resolveRelativePath(g),
										s = r(c, b, f);
									if (h(s)) {
										const l = a(
											o.shellType,
											["cd", s],
											!1,
											void 0,
											o.os === w.OperatingSystem.Windows,
										);
										let y;
										try {
											const $ = new Promise((v) => {
												let S = 0;
												y = o.onLineData((I) => {
													S++, S == 2 && v();
												});
											});
											await o.sendText(l, !0, !0),
												await Promise.race([
													$,
													new Promise((v) => setTimeout(v, 500)),
												]);
										} finally {
											y && y.dispose();
										}
									}
								}
							}
							await o.sendText(n, !0, !0);
						}
					} catch {}
				};
				e.$o$b = m;
				const r = (c, n, g) => {
					const p = i.URI.file(g),
						o = (0, t.$ph)(p, n);
					return o !== void 0 && o.length < n.path.length ? o : n.path;
				};
				var u;
				(function (c) {
					(c[(c.cmd = 0)] = "cmd"),
						(c[(c.powershell = 1)] = "powershell"),
						(c[(c.bash = 2)] = "bash");
				})(u || (u = {}));
				function a(c, n, g, p, o, f) {
					c = c.trim().toLowerCase();
					let b;
					c.indexOf("powershell") >= 0 || c.indexOf("pwsh") >= 0
						? (b = u.powershell)
						: c.indexOf("cmd.exe") >= 0
							? (b = u.cmd)
							: c.indexOf("bash") >= 0
								? (b = u.bash)
								: o
									? (b = u.cmd)
									: (b = u.bash);
					let s,
						l = "";
					switch (b) {
						case u.powershell:
							if (
								((s = (y) => (
									(y = y.replace(/\'/g, "''")),
									y.length > 0 && y.charAt(y.length - 1) === "\\"
										? `'${y}\\'`
										: `'${y}'`
								)),
								p)
							) {
								const y = (0, E.$Rg)(p);
								y && (l += `${y}:; `), (l += `cd ${s(p)}; `);
							}
							if (f)
								for (const y in f) {
									const $ = f[y];
									$ === null
										? (l += `Remove-Item env:${y}; `)
										: (l += `\${env:${y}}='${$}'; `);
								}
							if (n.length > 0) {
								const y = n.shift(),
									$ = g ? y : s(y);
								l += $[0] === "'" ? `& ${$} ` : `${$} `;
								for (const v of n)
									(l += v === "<" || v === ">" || g ? v : s(v)), (l += " ");
							}
							break;
						case u.cmd:
							if (
								((s = (y) => (
									(y = y.replace(/\"/g, '""')),
									(y = y.replace(/([><!^&|])/g, "^$1")),
									' "'.split("").some(($) => y.includes($)) || y.length === 0
										? `"${y}"`
										: y
								)),
								p)
							) {
								const y = (0, E.$Rg)(p);
								y && (l += `${y}: && `), (l += `cd ${s(p)} && `);
							}
							if (f) {
								l += 'cmd /C "';
								for (const y in f) {
									let $ = f[y];
									$ === null
										? (l += `set "${y}=" && `)
										: (($ = $.replace(/[&^|<>]/g, (v) => `^${v}`)),
											(l += `set "${y}=${$}" && `));
								}
							}
							for (const y of n)
								(l += y === "<" || y === ">" || g ? y : s(y)), (l += " ");
							f && (l += '"');
							break;
						case u.bash: {
							s = ($) => (
								($ = $.replace(/(["'\\\$!><#()\[\]*&^| ;{}?`])/g, "\\$1")),
								$.length === 0 ? '""' : $
							);
							const y = ($) =>
								/[^\w@%\/+=,.:^-]/.test($)
									? `'${$.replace(/'/g, "'\\''")}'`
									: $;
							if ((p && (l += `cd ${s(p)} ; `), f)) {
								l += "/usr/bin/env";
								for (const $ in f) {
									const v = f[$];
									v === null
										? (l += ` -u ${y($)}`)
										: (l += ` ${y(`${$}=${v}`)}`);
								}
								l += " ";
							}
							for (const $ of n)
								(l += $ === "<" || $ === ">" || g ? $ : s($)), (l += " ");
							break;
						}
					}
					return l;
				}
				const h = (c) => c !== void 0 && c.trim().length > 0;
			},
		)

import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../child_process.js';
import '../../../../base/common/extpath.js';
import '../../../../base/common/platform.js';
define(Pe[525], Ne([1, 0, 81, 42, 13]), function (we, t, e, r, S) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }),
				(t.$vjd = P),
				(t.$wjd = l),
				(e = tt(e)),
				(S = tt(S));
			function N(n, p) {
				return new Promise((y, d) => {
					let k = "";
					const g = e.spawn(n, p);
					g.pid &&
						g.stdout.on("data", (c) => {
							k += c.toString();
						}),
						g.on("error", (c) => {
							d(c);
						}),
						g.on("close", (c) => {
							y(k);
						});
				});
			}
			async function P(n) {
				if (n)
					if (S.$l) {
						const p = await new Promise((y, d) => {
							we(["@vscode/windows-process-tree"], y, d);
						}).then(tt);
						return new Promise((y) => {
							p.getProcessTree(n, (d) => {
								y(!!d && d.children.length > 0);
							});
						});
					} else
						return N("/usr/bin/pgrep", ["-lP", String(n)]).then(
							(p) => {
								const y = p.trim();
								return !(y.length === 0 || y.indexOf(" tmux") >= 0);
							},
							(p) => !0,
						);
				return Promise.resolve(!0);
			}
			var I;
			(function (n) {
				(n[(n.cmd = 0)] = "cmd"),
					(n[(n.powershell = 1)] = "powershell"),
					(n[(n.bash = 2)] = "bash");
			})(I || (I = {}));
			function l(n, p, y, d, k) {
				n = n.trim().toLowerCase();
				let g;
				n.indexOf("powershell") >= 0 || n.indexOf("pwsh") >= 0
					? (g = I.powershell)
					: n.indexOf("cmd.exe") >= 0
						? (g = I.cmd)
						: n.indexOf("bash") >= 0
							? (g = I.bash)
							: S.$l
								? (g = I.cmd)
								: (g = I.bash);
				let c,
					h = " ";
				switch (g) {
					case I.powershell:
						if (
							((c = ($) => (
								($ = $.replace(/\'/g, "''")),
								$.length > 0 && $.charAt($.length - 1) === "\\"
									? `'${$}\\'`
									: `'${$}'`
							)),
							d)
						) {
							const $ = (0, r.$Rg)(d);
							$ && (h += `${$}:; `), (h += `cd ${c(d)}; `);
						}
						if (k)
							for (const $ in k) {
								const T = k[$];
								T === null
									? (h += `Remove-Item env:${$}; `)
									: (h += `\${env:${$}}='${T}'; `);
							}
						if (p.length > 0) {
							const $ = p.shift(),
								T = y ? $ : c($);
							h += T[0] === "'" ? `& ${T} ` : `${T} `;
							for (const a of p)
								(h += a === "<" || a === ">" || y ? a : c(a)), (h += " ");
						}
						break;
					case I.cmd:
						if (
							((c = ($) => (
								($ = $.replace(/\"/g, '""')),
								($ = $.replace(/([><!^&|])/g, "^$1")),
								' "'.split("").some((T) => $.includes(T)) || $.length === 0
									? `"${$}"`
									: $
							)),
							d)
						) {
							const $ = (0, r.$Rg)(d);
							$ && (h += `${$}: && `), (h += `cd ${c(d)} && `);
						}
						if (k) {
							h += 'cmd /C "';
							for (const $ in k) {
								let T = k[$];
								T === null
									? (h += `set "${$}=" && `)
									: ((T = T.replace(/[&^|<>]/g, (a) => `^${a}`)),
										(h += `set "${$}=${T}" && `));
							}
						}
						for (const $ of p)
							(h += $ === "<" || $ === ">" || y ? $ : c($)), (h += " ");
						k && (h += '"');
						break;
					case I.bash: {
						c = (T) => (
							(T = T.replace(/(["'\\\$!><#()\[\]*&^| ;{}?`])/g, "\\$1")),
							T.length === 0 ? '""' : T
						);
						const $ = (T) =>
							/[^\w@%\/+=,.:^-]/.test(T) ? `'${T.replace(/'/g, "'\\''")}'` : T;
						if ((d && (h += `cd ${c(d)} ; `), k)) {
							h += "/usr/bin/env";
							for (const T in k) {
								const a = k[T];
								a === null ? (h += ` -u ${$(T)}`) : (h += ` ${$(`${T}=${a}`)}`);
							}
							h += " ";
						}
						for (const T of p)
							(h += T === "<" || T === ">" || y ? T : c(T)), (h += " ");
						break;
					}
				}
				return h;
			}
		}),
		
import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/path.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/processes.js';
import '../../../../platform/terminal/common/terminal.js';
import '../../../../base/common/platform.js';
import '../../../../platform/terminal/common/terminalEnvironment.js';
import '../../../../base/common/types.js';
define(
			de[1262],
			he([1, 0, 54, 9, 919, 117, 12, 775, 28]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Geb = r),
					(e.$Heb = a),
					(e.$Ieb = n),
					(e.$Jeb = g),
					(e.$Keb = p),
					(e.$Leb = f),
					(e.$Meb = b),
					(e.$Neb = s),
					(e.$Oeb = l),
					(t = mt(t));
				function r(y, $) {
					if ($)
						if (C.$l)
							for (const v in $) {
								let S = v;
								for (const T in y)
									if (v.toLowerCase() === T.toLowerCase()) {
										S = T;
										break;
									}
								const I = $[v];
								I !== void 0 && u(y, S, I);
							}
						else
							Object.keys($).forEach((v) => {
								const S = $[v];
								S !== void 0 && u(y, v, S);
							});
				}
				function u(y, $, v) {
					typeof v == "string" ? (y[$] = v) : delete y[$];
				}
				function a(y, $, v, S) {
					(y.TERM_PROGRAM = "vscode"),
						$ && (y.TERM_PROGRAM_VERSION = $),
						n(y, S) && (y.LANG = g(v)),
						(y.COLORTERM = "truecolor");
				}
				function h(y, $) {
					if ($)
						for (const v of Object.keys($)) {
							const S = $[v];
							S != null && (y[v] = S);
						}
				}
				async function c(y, $) {
					return (
						await Promise.all(
							Object.entries($).map(async ([v, S]) => {
								if (typeof S == "string")
									try {
										$[v] = await y(S);
									} catch {
										$[v] = S;
									}
							}),
						),
						$
					);
				}
				function n(y, $) {
					if ($ === "on") return !0;
					if ($ === "auto") {
						const v = y.LANG;
						return (
							!v ||
							(v.search(/\.UTF\-8$/) === -1 &&
								v.search(/\.utf8$/) === -1 &&
								v.search(/\.euc.+/) === -1)
						);
					}
					return !1;
				}
				function g(y) {
					const $ = y ? y.split("-") : [],
						v = $.length;
					if (v === 0) return "en_US.UTF-8";
					if (v === 1) {
						const S = {
							af: "ZA",
							am: "ET",
							be: "BY",
							bg: "BG",
							ca: "ES",
							cs: "CZ",
							da: "DK",
							de: "DE",
							el: "GR",
							en: "US",
							es: "ES",
							et: "EE",
							eu: "ES",
							fi: "FI",
							fr: "FR",
							he: "IL",
							hr: "HR",
							hu: "HU",
							hy: "AM",
							is: "IS",
							it: "IT",
							ja: "JP",
							kk: "KZ",
							ko: "KR",
							lt: "LT",
							nl: "NL",
							no: "NO",
							pl: "PL",
							pt: "BR",
							ro: "RO",
							ru: "RU",
							sk: "SK",
							sl: "SI",
							sr: "YU",
							sv: "SE",
							tr: "TR",
							uk: "UA",
							zh: "CN",
						};
						$[0] in S && $.push(S[$[0]]);
					} else $[1] = $[1].toUpperCase();
					return $.join("_") + ".UTF-8";
				}
				async function p(y, $, v, S, I, T) {
					if (y.cwd) {
						const k = typeof y.cwd == "object" ? y.cwd.fsPath : y.cwd,
							L = await o(k, v);
						return (0, d.$Deb)(L || k);
					}
					let P;
					return (
						!y.ignoreConfigurationCwd &&
							I &&
							(v && (I = await o(I, v, T)),
							I && (t.$nc(I) ? (P = I) : S && (P = t.$oc(S.fsPath, I)))),
						P || (P = S ? S.fsPath : $ || ""),
						(0, d.$Deb)(P)
					);
				}
				async function o(y, $, v) {
					if ($)
						try {
							return await $(y);
						} catch (S) {
							v?.error("Could not resolve terminal cwd", S);
							return;
						}
					return y;
				}
				function f(y, $, v) {
					if (v) return (S) => v.resolveWithEnvironment($, y, S);
				}
				async function b(y, $, v, S, I, T) {
					const P = {};
					if (y.strictEnv) h(P, y.env);
					else {
						h(P, T);
						const k = { ...$ };
						v && (k && (await c(v, k)), y.env && (await c(v, y.env))),
							C.$m &&
								(P.VSCODE_NODE_OPTIONS &&
									((P.NODE_OPTIONS = P.VSCODE_NODE_OPTIONS),
									delete P.VSCODE_NODE_OPTIONS),
								P.VSCODE_NODE_REPL_EXTERNAL_MODULE &&
									((P.NODE_REPL_EXTERNAL_MODULE =
										P.VSCODE_NODE_REPL_EXTERNAL_MODULE),
									delete P.VSCODE_NODE_REPL_EXTERNAL_MODULE)),
							(0, w.$zm)(P, "VSCODE_IPC_HOOK_CLI"),
							r(P, k),
							r(P, y.env),
							a(P, S, C.$z, I);
					}
					return P;
				}
				async function s(y, $, v, S, I, T, P = C.$l) {
					let k;
					if (
						((0, m.$lg)(y)
							? (k = y)
							: ((k = y.fsPath),
								P && T !== C.OperatingSystem.Windows
									? (k = k.replace(/\\/g, "/"))
									: !P &&
										T === C.OperatingSystem.Windows &&
										(k = k.replace(/\//g, "\\"))),
						!$)
					)
						return k;
					const L = k.includes(" "),
						D = k.includes("(") || k.includes(")"),
						M = t.$sc($, ".exe"),
						N =
							M === "pwsh" ||
							v === "pwsh" ||
							M === "powershell" ||
							v === "powershell";
					if (N && (L || k.includes("'")))
						return `& '${k.replace(/'/g, "''")}'`;
					if (D && N) return `& '${k}'`;
					if (T === C.OperatingSystem.Windows) {
						if (S !== void 0)
							return S === E.WindowsShellType.GitBash
								? (0, d.$Beb)(k.replace(/\\/g, "/"))
								: S === E.WindowsShellType.Wsl
									? I?.getWslPath(k, "win-to-unix") || k
									: L
										? `"${k}"`
										: k;
						const A = $.toLowerCase();
						return A.includes("wsl") ||
							(A.includes("bash.exe") && !A.toLowerCase().includes("git"))
							? I?.getWslPath(k, "win-to-unix") || k
							: L
								? `"${k}"`
								: k;
					}
					return (0, d.$Beb)(k);
				}
				function l(y, $, v) {
					const S = typeof y == "string" ? i.URI.parse(y) : y;
					let I = S ? ($.getWorkspaceFolder(S) ?? void 0) : void 0;
					if (!I) {
						const T = v.getLastActiveWorkspaceRoot();
						I = T ? ($.getWorkspaceFolder(T) ?? void 0) : void 0;
					}
					return I;
				}
			},
		),
		
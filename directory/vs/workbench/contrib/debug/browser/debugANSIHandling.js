define(de[3150], he([1, 0, 97, 512]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$BJc = w),
				(e.$CJc = E),
				(e.$DJc = C);
			function w(d, m, r, u) {
				const a = document.createElement("span"),
					h = d.length;
				let c = [],
					n,
					g,
					p,
					o = !1,
					f = 0,
					b = "";
				for (; f < h; ) {
					let I = !1;
					if (d.charCodeAt(f) === 27 && d.charAt(f + 1) === "[") {
						const T = f;
						f += 2;
						let P = "";
						for (; f < h; ) {
							const k = d.charAt(f);
							if (((P += k), f++, k.match(/^[ABCDHIJKfhmpsu]$/))) {
								I = !0;
								break;
							}
						}
						if (I) {
							if (
								(E(a, b, c, m, u, n, g, p),
								(b = ""),
								P.match(
									/^(?:[34][0-8]|9[0-7]|10[0-7]|[0-9]|2[1-5,7-9]|[34]9|5[8,9]|1[0-9])(?:;[349][0-7]|10[0-7]|[013]|[245]|[34]9)?(?:;[012]?[0-9]?[0-9])*;?m$/,
								))
							) {
								const k = P.slice(0, -1)
									.split(";")
									.filter((L) => L !== "")
									.map((L) => parseInt(L, 10));
								if (k[0] === 38 || k[0] === 48 || k[0] === 58) {
									const L =
										k[0] === 38
											? "foreground"
											: k[0] === 48
												? "background"
												: "underline";
									k[1] === 5 ? v(k, L) : k[1] === 2 && $(k, L);
								} else y(k);
							}
						} else f = T;
					}
					I === !1 && ((b += d.charAt(f)), f++);
				}
				return b && E(a, b, c, m, u, n, g, p), a;
				function s(I, T) {
					I === "foreground"
						? (n = T)
						: I === "background"
							? (g = T)
							: I === "underline" && (p = T),
						(c = c.filter((P) => P !== `code-${I}-colored`)),
						T !== void 0 && c.push(`code-${I}-colored`);
				}
				function l() {
					const I = n;
					s("foreground", g), s("background", I);
				}
				function y(I) {
					for (const T of I)
						switch (T) {
							case 0: {
								(c = []), (n = void 0), (g = void 0);
								break;
							}
							case 1: {
								(c = c.filter((P) => P !== "code-bold")), c.push("code-bold");
								break;
							}
							case 2: {
								(c = c.filter((P) => P !== "code-dim")), c.push("code-dim");
								break;
							}
							case 3: {
								(c = c.filter((P) => P !== "code-italic")),
									c.push("code-italic");
								break;
							}
							case 4: {
								(c = c.filter(
									(P) =>
										P !== "code-underline" && P !== "code-double-underline",
								)),
									c.push("code-underline");
								break;
							}
							case 5: {
								(c = c.filter((P) => P !== "code-blink")), c.push("code-blink");
								break;
							}
							case 6: {
								(c = c.filter((P) => P !== "code-rapid-blink")),
									c.push("code-rapid-blink");
								break;
							}
							case 7: {
								o || ((o = !0), l());
								break;
							}
							case 8: {
								(c = c.filter((P) => P !== "code-hidden")),
									c.push("code-hidden");
								break;
							}
							case 9: {
								(c = c.filter((P) => P !== "code-strike-through")),
									c.push("code-strike-through");
								break;
							}
							case 10: {
								c = c.filter((P) => !P.startsWith("code-font"));
								break;
							}
							case 11:
							case 12:
							case 13:
							case 14:
							case 15:
							case 16:
							case 17:
							case 18:
							case 19:
							case 20: {
								(c = c.filter((P) => !P.startsWith("code-font"))),
									c.push(`code-font-${T - 10}`);
								break;
							}
							case 21: {
								(c = c.filter(
									(P) =>
										P !== "code-underline" && P !== "code-double-underline",
								)),
									c.push("code-double-underline");
								break;
							}
							case 22: {
								c = c.filter((P) => P !== "code-bold" && P !== "code-dim");
								break;
							}
							case 23: {
								c = c.filter(
									(P) => P !== "code-italic" && P !== "code-font-10",
								);
								break;
							}
							case 24: {
								c = c.filter(
									(P) =>
										P !== "code-underline" && P !== "code-double-underline",
								);
								break;
							}
							case 25: {
								c = c.filter(
									(P) => P !== "code-blink" && P !== "code-rapid-blink",
								);
								break;
							}
							case 27: {
								o && ((o = !1), l());
								break;
							}
							case 28: {
								c = c.filter((P) => P !== "code-hidden");
								break;
							}
							case 29: {
								c = c.filter((P) => P !== "code-strike-through");
								break;
							}
							case 53: {
								(c = c.filter((P) => P !== "code-overline")),
									c.push("code-overline");
								break;
							}
							case 55: {
								c = c.filter((P) => P !== "code-overline");
								break;
							}
							case 39: {
								s("foreground", void 0);
								break;
							}
							case 49: {
								s("background", void 0);
								break;
							}
							case 59: {
								s("underline", void 0);
								break;
							}
							case 73: {
								(c = c.filter(
									(P) => P !== "code-superscript" && P !== "code-subscript",
								)),
									c.push("code-superscript");
								break;
							}
							case 74: {
								(c = c.filter(
									(P) => P !== "code-superscript" && P !== "code-subscript",
								)),
									c.push("code-subscript");
								break;
							}
							case 75: {
								c = c.filter(
									(P) => P !== "code-superscript" && P !== "code-subscript",
								);
								break;
							}
							default: {
								S(T);
								break;
							}
						}
				}
				function $(I, T) {
					if (
						I.length >= 5 &&
						I[2] >= 0 &&
						I[2] <= 255 &&
						I[3] >= 0 &&
						I[3] <= 255 &&
						I[4] >= 0 &&
						I[4] <= 255
					) {
						const P = new t.$RL(I[2], I[3], I[4]);
						s(T, P);
					}
				}
				function v(I, T) {
					let P = I[2];
					const k = C(P);
					if (k) s(T, k);
					else if (P >= 0 && P <= 15) {
						if (T === "underline") {
							const L = r.getColorTheme(),
								D = i.$hHb[P],
								M = L.getColor(D);
							M && s(T, M.rgba);
							return;
						}
						(P += 30),
							P >= 38 && (P += 52),
							T === "background" && (P += 10),
							S(P);
					}
				}
				function S(I) {
					const T = r.getColorTheme();
					let P, k;
					if (
						(I >= 30 && I <= 37
							? ((k = I - 30), (P = "foreground"))
							: I >= 90 && I <= 97
								? ((k = I - 90 + 8), (P = "foreground"))
								: I >= 40 && I <= 47
									? ((k = I - 40), (P = "background"))
									: I >= 100 &&
										I <= 107 &&
										((k = I - 100 + 8), (P = "background")),
						k !== void 0 && P)
					) {
						const L = i.$hHb[k],
							D = T.getColor(L);
						D && s(P, D.rgba);
					}
				}
			}
			function E(d, m, r, u, a, h, c, n) {
				if (!d || !m) return;
				const g = u.linkify(m, !0, a);
				(g.className = r.join(" ")),
					h && (g.style.color = t.$UL.Format.CSS.formatRGB(new t.$UL(h))),
					c &&
						(g.style.backgroundColor = t.$UL.Format.CSS.formatRGB(
							new t.$UL(c),
						)),
					n &&
						(g.style.textDecorationColor = t.$UL.Format.CSS.formatRGB(
							new t.$UL(n),
						)),
					d.appendChild(g);
			}
			function C(d) {
				if (d % 1 === 0)
					if (d >= 16 && d <= 231) {
						d -= 16;
						let m = d % 6;
						d = (d - m) / 6;
						let r = d % 6;
						d = (d - r) / 6;
						let u = d;
						const a = 255 / 5;
						return (
							(m = Math.round(m * a)),
							(r = Math.round(r * a)),
							(u = Math.round(u * a)),
							new t.$RL(u, r, m)
						);
					} else if (d >= 232 && d <= 255) {
						d -= 232;
						const m = Math.round((d / 23) * 255);
						return new t.$RL(m, m, m);
					} else return;
			}
		}),
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
		
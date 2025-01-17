import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/uri.js';
import '../../../../../nls.js';
import './quickFix.js';
define(de[3164], he([1, 0, 9, 4, 998]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.QuickFixSource =
					e.$FWc =
					e.$EWc =
					e.$DWc =
					e.$CWc =
					e.$BWc =
					e.$AWc =
					e.$zWc =
					e.$yWc =
					e.$xWc =
					e.$wWc =
						void 0),
				(e.$GWc = C),
				(e.$HWc = d),
				(e.$IWc = m),
				(e.$JWc = r),
				(e.$KWc = u),
				(e.$LWc = a),
				(e.$MWc = h),
				(e.$NWc = c),
				(e.$wWc = /git/),
				(e.$xWc = /and can be fast-forwarded/),
				(e.$yWc = /git\s+push/),
				(e.$zWc = /error: did you mean `--(.+)` \(with two dashes\)\?/),
				(e.$AWc = /(?:(most similar commands? (is|are)))/),
				(e.$BWc =
					/(?:address already in use (?:0\.0\.0\.0|127\.0\.0\.1|localhost|::):|Unable to bind [^ ]*:|can't listen on port |listen EADDRINUSE [^ ]*:)(?<portNumber>\d{4,5})/),
				(e.$CWc = /git push --set-upstream origin (?<branchName>[^\s]+)/),
				(e.$DWc =
					/remote:\s*(?<link>https:\/\/github\.com\/.+\/.+\/pull\/new\/.+)/),
				(e.$EWc = /Suggestion \[General\]:/),
				(e.$FWc = /Suggestion \[cmd-not-found\]:/);
			var E;
			(function (n) {
				n.Builtin = "builtin";
			})(E || (e.QuickFixSource = E = {}));
			function C() {
				return {
					id: "Git Similar",
					type: "internal",
					commandLineMatcher: e.$wWc,
					outputMatcher: {
						lineMatcher: e.$AWc,
						anchor: "bottom",
						offset: 0,
						length: 10,
					},
					commandExitResult: "error",
					getQuickFixes: (n) => {
						const g = n.outputMatch?.regexMatch[0];
						if (!g || !n.outputMatch) return;
						const p = [],
							o = n.outputMatch.outputLines.findIndex((b) => b.includes(g)) + 1,
							f = n.outputMatch.outputLines.map((b) => b.trim());
						for (let b = o; b < f.length; b++) {
							const s = f[b];
							s &&
								p.push({
									id: "Git Similar",
									type: w.TerminalQuickFixType.TerminalCommand,
									terminalCommand: n.commandLine.replace(
										/git\s+[^\s]+/,
										() => `git ${s}`,
									),
									shouldExecute: !0,
									source: E.Builtin,
								});
						}
						return p;
					},
				};
			}
			function d() {
				return {
					id: "Git Pull",
					type: "internal",
					commandLineMatcher: e.$wWc,
					outputMatcher: {
						lineMatcher: e.$xWc,
						anchor: "bottom",
						offset: 0,
						length: 8,
					},
					commandExitResult: "success",
					getQuickFixes: (n) => ({
						type: w.TerminalQuickFixType.TerminalCommand,
						id: "Git Pull",
						terminalCommand: "git pull",
						shouldExecute: !0,
						source: E.Builtin,
					}),
				};
			}
			function m() {
				return {
					id: "Git Two Dashes",
					type: "internal",
					commandLineMatcher: e.$wWc,
					outputMatcher: {
						lineMatcher: e.$zWc,
						anchor: "bottom",
						offset: 0,
						length: 2,
					},
					commandExitResult: "error",
					getQuickFixes: (n) => {
						const g = n?.outputMatch?.regexMatch?.[1];
						if (g)
							return {
								type: w.TerminalQuickFixType.TerminalCommand,
								id: "Git Two Dashes",
								terminalCommand: n.commandLine.replace(
									` -${g}`,
									() => ` --${g}`,
								),
								shouldExecute: !0,
								source: E.Builtin,
							};
					},
				};
			}
			function r(n) {
				return {
					id: "Free Port",
					type: "internal",
					commandLineMatcher: /.+/,
					outputMatcher: {
						lineMatcher: e.$BWc,
						anchor: "bottom",
						offset: 0,
						length: 30,
					},
					commandExitResult: "error",
					getQuickFixes: (g) => {
						const p = g?.outputMatch?.regexMatch?.groups?.portNumber;
						if (!p) return;
						const o = (0, i.localize)(10559, null, p);
						return {
							type: w.TerminalQuickFixType.Port,
							class: void 0,
							tooltip: o,
							id: "Free Port",
							label: o,
							enabled: !0,
							source: E.Builtin,
							run: () => n(p, g.commandLine),
						};
					},
				};
			}
			function u() {
				return {
					id: "Git Push Set Upstream",
					type: "internal",
					commandLineMatcher: e.$yWc,
					outputMatcher: {
						lineMatcher: e.$CWc,
						anchor: "bottom",
						offset: 0,
						length: 8,
					},
					commandExitResult: "error",
					getQuickFixes: (n) => {
						const g = n.outputMatch,
							p = "git push --set-upstream origin ${group:branchName}";
						if (!g) return;
						const o = g.regexMatch.groups;
						if (!o) return;
						const f = [];
						let b = p;
						for (const [s, l] of Object.entries(o)) {
							const y = `\${group:${s}}`;
							if (!p.includes(y)) return [];
							b = b.replaceAll(y, () => l);
						}
						if (b)
							return (
								f.push({
									type: w.TerminalQuickFixType.TerminalCommand,
									id: "Git Push Set Upstream",
									terminalCommand: b,
									shouldExecute: !0,
									source: E.Builtin,
								}),
								f
							);
					},
				};
			}
			function a() {
				return {
					id: "Git Create Pr",
					type: "internal",
					commandLineMatcher: e.$yWc,
					outputMatcher: {
						lineMatcher: e.$DWc,
						anchor: "bottom",
						offset: 4,
						length: 12,
					},
					commandExitResult: "success",
					getQuickFixes: (n) => {
						const g = n?.outputMatch?.regexMatch?.groups?.link?.trimEnd();
						return g
							? {
									id: "Git Create Pr",
									label: (0, i.localize)(10560, null, g),
									enabled: !0,
									type: w.TerminalQuickFixType.Opener,
									uri: t.URI.parse(g),
									source: E.Builtin,
								}
							: void 0;
					},
				};
			}
			function h() {
				return {
					id: "Pwsh General Error",
					type: "internal",
					commandLineMatcher: /.+/,
					outputMatcher: {
						lineMatcher: e.$EWc,
						anchor: "bottom",
						offset: 0,
						length: 10,
					},
					commandExitResult: "error",
					getQuickFixes: (n) => {
						const g = n.outputMatch?.regexMatch.input?.split(`
`);
						if (!g) return;
						let p = 0,
							o = !1;
						for (; p < g.length; p++)
							if (g[p].match(e.$EWc)) {
								o = !0;
								break;
							}
						if (!o) return;
						const f = g[p + 1]
							.match(/The most similar commands are: (?<values>.+)./)
							?.groups?.values?.split(", ");
						if (!f) return;
						const b = [];
						for (const s of f)
							b.push({
								id: "Pwsh General Error",
								type: w.TerminalQuickFixType.TerminalCommand,
								terminalCommand: s,
								source: E.Builtin,
							});
						return b;
					},
				};
			}
			function c() {
				return {
					id: "Unix Command Not Found",
					type: "internal",
					commandLineMatcher: /.+/,
					outputMatcher: {
						lineMatcher: e.$FWc,
						anchor: "bottom",
						offset: 0,
						length: 10,
					},
					commandExitResult: "error",
					getQuickFixes: (n) => {
						const g = n.outputMatch?.regexMatch.input?.split(`
`);
						if (!g) return;
						let p = 0,
							o = !1;
						for (; p < g.length; p++)
							if (g[p].match(e.$FWc)) {
								o = !0;
								break;
							}
						if (!o) return;
						const f = [];
						let b = !1;
						for (; p < g.length; p++) {
							const s = g[p].trim();
							if (s.length === 0) break;
							const l = s.match(
								/You also have .+ installed, you can run '(?<command>.+)' instead./,
							)?.groups?.command;
							if (l) {
								f.push({
									id: "Pwsh Unix Command Not Found Error",
									type: w.TerminalQuickFixType.TerminalCommand,
									terminalCommand: l,
									source: E.Builtin,
								}),
									(b = !1);
								continue;
							}
							if (
								s.match(/Command '.+' not found, but can be installed with:/)
							) {
								b = !0;
								continue;
							}
							b &&
								f.push({
									id: "Pwsh Unix Command Not Found Error",
									type: w.TerminalQuickFixType.TerminalCommand,
									terminalCommand: s.trim(),
									source: E.Builtin,
								});
						}
						return f;
					},
				};
			}
		}),
		
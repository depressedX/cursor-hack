import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../child_process.js';
import '../../../../base/common/path.js';
import '../../../../base/common/normalization.js';
import '../../../../base/common/extpath.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/strings.js';
import './ripgrepSearchUtils.js';
import '../../../../../@vscode/ripgrep.js';
define(
			Pe[613],
			Ne([1, 0, 81, 18, 132, 42, 13, 15, 198, 614]),
			function (we, t, e, r, S, N, P, I, l, n) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$Djd = d),
					(t.$Ejd = $),
					(t.$Fjd = a),
					(e = tt(e)),
					(r = tt(r)),
					(N = tt(N)),
					(I = tt(I));
				function p() {
					let u = n.rgPath.replace(
						/\bnode_modules\.asar\b/,
						"node_modules.asar.unpacked",
					);
					return (u = (0, l.$zjd)(u)), u;
				}
				const y = p();
				function d(u, s, f, o, w) {
					const m = k(u, s, f, o, w),
						E = s.folder.fsPath;
					return {
						cmd: e.spawn(y, m.args, { cwd: E }),
						rgDiskPath: y,
						siblingClauses: m.siblingClauses,
						rgArgs: m,
						cwd: E,
					};
				}
				function k(u, s, f, o, w) {
					const m = [
						"--files",
						"--hidden",
						"--case-sensitive",
						"--no-require-git",
					];
					c([s], f, !1).forEach((R) => {
						const C = (0, l.$yjd)(R);
						if ((m.push("-g", C), P.$m)) {
							const O = (0, S.$Cm)(C);
							O !== C && m.push("-g", O);
						}
					});
					const E = g([s], o, void 0, !1);
					return (
						E.globArgs.forEach((R) => {
							const C = `!${(0, l.$yjd)(R)}`;
							if ((m.push("-g", C), P.$m)) {
								const O = (0, S.$Cm)(C);
								O !== C && m.push("-g", O);
							}
						}),
						s.disregardIgnoreFiles !== !1
							? m.push("--no-ignore")
							: s.disregardParentIgnoreFiles !== !1 &&
								m.push("--no-ignore-parent"),
						s.ignoreSymlinks || m.push("--follow"),
						u.exists && m.push("--quiet"),
						w && m.push("--threads", `${w}`),
						m.push("--no-config"),
						s.disregardGlobalIgnoreFiles && m.push("--no-ignore-global"),
						{ args: m, siblingClauses: E.siblingClauses }
					);
				}
				function g(u, s, f, o = !0) {
					const w = [];
					let m = {};
					return (
						u.forEach((E) => {
							const R = Object.assign({}, E.excludePattern || {}, s || {}),
								C = h(R, o ? E.folder.fsPath : void 0, f);
							w.push(...C.globArgs),
								C.siblingClauses && (m = Object.assign(m, C.siblingClauses));
						}),
						{ globArgs: w, siblingClauses: m }
					);
				}
				function c(u, s, f = !0) {
					const o = [];
					return (
						u.forEach((w) => {
							const m = Object.assign({}, s || {}, w.includePattern || {}),
								E = h(m, f ? w.folder.fsPath : void 0);
							o.push(...E.globArgs);
						}),
						o
					);
				}
				function h(u, s, f) {
					const o = [],
						w = {};
					return (
						Object.keys(u).forEach((m) => {
							if ((f && f.has(m)) || !m) return;
							const E = u[m];
							(m = T(s ? $(s, m) : m)),
								m.startsWith("\\\\")
									? (m = "\\\\" + m.substr(2).replace(/\\/g, "/"))
									: (m = m.replace(/\\/g, "/")),
								typeof E == "boolean" && E
									? (m.startsWith("\\\\") && (m += "**"), o.push(a(m)))
									: E && E.when && (w[m] = E);
						}),
						{ globArgs: o, siblingClauses: w }
					);
				}
				function $(u, s) {
					return r.$nc(s) ? s : r.$oc(u, s);
				}
				function T(u) {
					return (u = I.$uf(u, "\\")), I.$uf(u, "/");
				}
				function a(u) {
					return N.$Hg(u).toLowerCase() === "c:/"
						? u.replace(/^c:[/\\]/i, "/")
						: u;
				}
			},
		),
		
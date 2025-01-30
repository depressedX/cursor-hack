import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/extpath.js';
import '../../../base/common/json.js';
import '../../../base/common/jsonEdit.js';
import '../../../base/common/labels.js';
import '../../../base/common/network.js';
import '../../../base/common/path.js';
import '../../../base/common/platform.js';
import '../../../base/common/resources.js';
import '../../../base/common/uri.js';
import '../../instantiation/common/instantiation.js';
import '../../remote/common/remoteHosts.js';
import '../../workspace/common/workspace.js';
define(
			de[256],
			he([1, 0, 249, 187, 586, 222, 23, 54, 12, 19, 9, 5, 438, 25]),
			function (ce /*require*/,
 e /*exports*/,
 t /*extpath*/,
 i /*json*/,
 w /*jsonEdit*/,
 E /*labels*/,
 C /*network*/,
 d /*path*/,
 m /*platform*/,
 r /*resources*/,
 u /*uri*/,
 a /*instantiation*/,
 h /*remoteHosts*/,
 c /*workspace*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$cRb = void 0),
					(e.$dRb = n),
					(e.$eRb = g),
					(e.$fRb = p),
					(e.$gRb = o),
					(e.$hRb = s),
					(e.$iRb = y),
					(e.$jRb = $),
					(e.$kRb = P),
					(e.$lRb = k),
					(i = mt(i)),
					(w = mt(w)),
					(e.$cRb = (0, a.$Mi)("workspacesService"));
				function n(L) {
					return L.hasOwnProperty("workspace");
				}
				function g(L) {
					return L.hasOwnProperty("folderUri");
				}
				function p(L) {
					return L.hasOwnProperty("fileUri");
				}
				function o(L) {
					return f(L) || b(L);
				}
				function f(L) {
					const D = L;
					return (
						typeof D?.path == "string" && (!D.name || typeof D.name == "string")
					);
				}
				function b(L) {
					const D = L;
					return (
						typeof D?.uri == "string" && (!D.name || typeof D.name == "string")
					);
				}
				function s(L, D, M, N, A) {
					if (L.scheme !== N.scheme) return { name: M, uri: L.toString(!0) };
					let R = D ? void 0 : A.relativePath(N, L);
					if (R !== void 0) R.length === 0 ? (R = ".") : m.$l && (R = l(R));
					else if (L.scheme === C.Schemas.file)
						(R = L.fsPath), m.$l && (R = l(R));
					else if (A.isEqualAuthority(L.authority, N.authority)) R = L.path;
					else return { name: M, uri: L.toString(!0) };
					return { name: M, path: R };
				}
				function l(L) {
					return (L = (0, E.$xO)(L)), (0, t.$Ig)(L) || (L = (0, t.$Fg)(L)), L;
				}
				function y(L, D, M) {
					const N = [],
						A = new Set(),
						R = M.dirname(D);
					for (const O of L) {
						let B;
						if (f(O)) O.path && (B = M.resolvePath(R, O.path));
						else if (b(O))
							try {
								(B = u.URI.parse(O.uri)),
									B.path[0] !== d.$lc.sep &&
										(B = B.with({ path: d.$lc.sep + B.path }));
							} catch (U) {
								console.warn(U);
							}
						if (B) {
							const U = M.getComparisonKey(B);
							if (!A.has(U)) {
								A.add(U);
								const z = O.name || M.basenameOrAuthority(B);
								N.push(new c.$7i({ uri: B, name: z, index: N.length }, O));
							}
						}
					}
					return N;
				}
				function $(L, D, M, N, A) {
					const R = v(D, L),
						O = A.dirname(D),
						B = A.dirname(N),
						U = [];
					for (const H of R.folders) {
						const q = f(H) ? A.resolvePath(O, H.path) : u.URI.parse(H.uri);
						let V;
						M ? (V = !1) : (V = !f(H) || (0, d.$nc)(H.path)),
							U.push(s(q, V, H.name, B, A));
					}
					const z = {
							insertSpaces: !1,
							tabSize: 4,
							eol:
								m.$n || m.$m
									? `
`
									: `\r
`,
						},
						F = w.$ro(L, ["folders"], U, z);
					let x = w.$uo(L, F);
					return (
						(0, r.$sh)(R.remoteAuthority, (0, h.$wn)(N)) &&
							(x = w.$uo(x, w.$qo(x, ["remoteAuthority"], z))),
						x
					);
				}
				function v(L, D) {
					const M = i.$do(D);
					if (M && Array.isArray(M.folders))
						M.folders = M.folders.filter((N) => o(N));
					else throw new Error(`${L} looks like an invalid workspace file.`);
					return M;
				}
				function S(L) {
					return (
						L.workspace &&
						typeof L.workspace == "object" &&
						typeof L.workspace.id == "string" &&
						typeof L.workspace.configPath == "string"
					);
				}
				function I(L) {
					return typeof L.folderUri == "string";
				}
				function T(L) {
					return typeof L.fileUri == "string";
				}
				function P(L, D) {
					const M = { workspaces: [], files: [] };
					if (L) {
						const N = function (R, O) {
								for (let B = 0; B < R.length; B++)
									try {
										O(R[B], B);
									} catch (U) {
										D.warn(
											`Error restoring recent entry ${JSON.stringify(R[B])}: ${U.toString()}. Skip entry.`,
										);
									}
							},
							A = L;
						Array.isArray(A.entries) &&
							N(A.entries, (R) => {
								const O = R.label,
									B = R.remoteAuthority;
								S(R)
									? M.workspaces.push({
											label: O,
											remoteAuthority: B,
											workspace: {
												id: R.workspace.id,
												configPath: u.URI.parse(R.workspace.configPath),
											},
										})
									: I(R)
										? M.workspaces.push({
												label: O,
												remoteAuthority: B,
												folderUri: u.URI.parse(R.folderUri),
											})
										: T(R) &&
											M.files.push({
												label: O,
												remoteAuthority: B,
												fileUri: u.URI.parse(R.fileUri),
											});
							});
					}
					return M;
				}
				function k(L) {
					const D = { entries: [] };
					for (const M of L.workspaces)
						g(M)
							? D.entries.push({
									folderUri: M.folderUri.toString(),
									label: M.label,
									remoteAuthority: M.remoteAuthority,
								})
							: D.entries.push({
									workspace: {
										id: M.workspace.id,
										configPath: M.workspace.configPath.toString(),
									},
									label: M.label,
									remoteAuthority: M.remoteAuthority,
								});
					for (const M of L.files)
						D.entries.push({
							fileUri: M.fileUri.toString(),
							label: M.label,
							remoteAuthority: M.remoteAuthority,
						});
					return D;
				}
			},
		),
		
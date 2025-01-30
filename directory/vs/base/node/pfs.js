import '../../../require.js';
import '../../../exports.js';
import '../../../fs.js';
import '../../../os.js';
import '../../../util.js';
import '../common/async.js';
import '../common/extpath.js';
import '../common/normalization.js';
import '../common/path.js';
import '../common/platform.js';
import '../common/resources.js';
import '../common/uri.js';
define(
			Pe[43],
			Ne([1, 0, 59, 106, 627, 9, 42, 132, 18, 13, 24, 2]),
			function (we, t, e, r, S, N, P, I, l, n, p, y) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.Promises = t.SymlinkSupport = t.RimRafMode = void 0),
					(t.rimrafSync = h),
					(t.readdirSync = a),
					(t.whenDeleted = f),
					(t.configureFlushOnWrite = R),
					(t.writeFileSync = O),
					(e = tt(e));
				var d;
				(function (H) {
					(H[(H.UNLINK = 0)] = "UNLINK"), (H[(H.MOVE = 1)] = "MOVE");
				})(d || (t.RimRafMode = d = {}));
				async function k(H, B = d.UNLINK, U) {
					if ((0, P.$Pg)(H))
						throw new Error("rimraf - will refuse to recursively delete root");
					return B === d.UNLINK ? c(H) : g(H, U);
				}
				async function g(H, B = (0, P.$Ug)((0, r.tmpdir)())) {
					try {
						try {
							await e.promises.rename(H, B);
						} catch (U) {
							return U.code === "ENOENT" ? void 0 : c(H);
						}
						c(B).catch((U) => {});
					} catch (U) {
						if (U.code !== "ENOENT") throw U;
					}
				}
				async function c(H) {
					return e.promises.rm(H, { recursive: !0, force: !0, maxRetries: 3 });
				}
				function h(H) {
					if ((0, P.$Pg)(H))
						throw new Error("rimraf - will refuse to recursively delete root");
					e.rmSync(H, { recursive: !0, force: !0, maxRetries: 3 });
				}
				async function $(H, B) {
					return u(await (B ? T(H) : e.promises.readdir(H)));
				}
				async function T(H) {
					try {
						return await e.promises.readdir(H, { withFileTypes: !0 });
					} catch (Z) {
						console.warn(
							"[node.js fs] readdir with filetypes failed with error: ",
							Z,
						);
					}
					const B = [],
						U = await $(H);
					for (const Z of U) {
						let W = !1,
							G = !1,
							fe = !1;
						try {
							const ae = await e.promises.lstat((0, l.$oc)(H, Z));
							(W = ae.isFile()),
								(G = ae.isDirectory()),
								(fe = ae.isSymbolicLink());
						} catch (ae) {
							console.warn(
								"[node.js fs] unexpected error from lstat after readdir: ",
								ae,
							);
						}
						B.push({
							name: Z,
							isFile: () => W,
							isDirectory: () => G,
							isSymbolicLink: () => fe,
						});
					}
					return B;
				}
				function a(H) {
					return u(e.readdirSync(H));
				}
				function u(H) {
					return H.map((B) =>
						typeof B == "string"
							? n.$m
								? (0, I.$Bm)(B)
								: B
							: ((B.name = n.$m ? (0, I.$Bm)(B.name) : B.name), B),
					);
				}
				async function s(H) {
					const B = await $(H),
						U = [];
					for (const Z of B)
						(await o.existsDirectory((0, l.$oc)(H, Z))) && U.push(Z);
					return U;
				}
				function f(H, B = 1e3) {
					return new Promise((U) => {
						let Z = !1;
						const W = setInterval(() => {
							Z ||
								((Z = !0),
								e.access(H, (G) => {
									(Z = !1), G && (clearInterval(W), U(void 0));
								}));
						}, B);
					});
				}
				var o;
				(function (H) {
					async function B(W) {
						let G;
						try {
							if (((G = await e.promises.lstat(W)), !G.isSymbolicLink()))
								return { stat: G };
						} catch {}
						try {
							return {
								stat: await e.promises.stat(W),
								symbolicLink: G?.isSymbolicLink() ? { dangling: !1 } : void 0,
							};
						} catch (fe) {
							if (fe.code === "ENOENT" && G)
								return { stat: G, symbolicLink: { dangling: !0 } };
							if (n.$l && fe.code === "EACCES")
								try {
									return {
										stat: await e.promises.stat(await e.promises.readlink(W)),
										symbolicLink: { dangling: !1 },
									};
								} catch (ae) {
									if (ae.code === "ENOENT" && G)
										return { stat: G, symbolicLink: { dangling: !0 } };
									throw ae;
								}
							throw fe;
						}
					}
					H.stat = B;
					async function U(W) {
						try {
							const { stat: G, symbolicLink: fe } = await H.stat(W);
							return G.isFile() && fe?.dangling !== !0;
						} catch {}
						return !1;
					}
					H.existsFile = U;
					async function Z(W) {
						try {
							const { stat: G, symbolicLink: fe } = await H.stat(W);
							return G.isDirectory() && fe?.dangling !== !0;
						} catch {}
						return !1;
					}
					H.existsDirectory = Z;
				})(o || (t.SymlinkSupport = o = {}));
				const w = new N.$Vh();
				function m(H, B, U) {
					return w.queueFor(
						y.URI.file(H),
						() => {
							const Z = A(U);
							return new Promise((W, G) =>
								C(H, B, Z, (fe) => (fe ? G(fe) : W())),
							);
						},
						p.$eh,
					);
				}
				let E = !0;
				function R(H) {
					E = H;
				}
				function C(H, B, U, Z) {
					if (!E) return e.writeFile(H, B, { mode: U.mode, flag: U.flag }, Z);
					e.open(H, U.flag, U.mode, (W, G) => {
						if (W) return Z(W);
						e.writeFile(G, B, (fe) => {
							if (fe) return e.close(G, () => Z(fe));
							e.fdatasync(
								G,
								(ae) => (
									ae &&
										(console.warn(
											"[node.js fs] fdatasync is now disabled for this session because it failed: ",
											ae,
										),
										R(!1)),
									e.close(G, (Se) => Z(Se))
								),
							);
						});
					});
				}
				function O(H, B, U) {
					const Z = A(U);
					if (!E) return e.writeFileSync(H, B, { mode: Z.mode, flag: Z.flag });
					const W = e.openSync(H, Z.flag, Z.mode);
					try {
						e.writeFileSync(W, B);
						try {
							e.fdatasyncSync(W);
						} catch (G) {
							console.warn(
								"[node.js fs] fdatasyncSync is now disabled for this session because it failed: ",
								G,
							),
								R(!1);
						}
					} finally {
						e.closeSync(W);
					}
				}
				function A(H) {
					return H
						? {
								mode: typeof H.mode == "number" ? H.mode : 438,
								flag: typeof H.flag == "string" ? H.flag : "w",
							}
						: { mode: 438, flag: "w" };
				}
				async function J(H, B, U = 6e4) {
					if (H !== B)
						try {
							n.$l && typeof U == "number"
								? await L(H, B, Date.now(), U)
								: await e.promises.rename(H, B);
						} catch (Z) {
							if (
								(H.toLowerCase() !== B.toLowerCase() && Z.code === "EXDEV") ||
								H.endsWith(".")
							)
								await b(H, B, { preserveSymlinks: !1 }), await k(H, d.MOVE);
							else throw Z;
						}
				}
				async function L(H, B, U, Z, W = 0) {
					try {
						return await e.promises.rename(H, B);
					} catch (G) {
						if (G.code !== "EACCES" && G.code !== "EPERM" && G.code !== "EBUSY")
							throw G;
						if (Date.now() - U >= Z)
							throw (
								(console.error(
									`[node.js fs] rename failed after ${W} retries with error: ${G}`,
								),
								G)
							);
						if (W === 0) {
							let fe = !1;
							try {
								const { stat: ae } = await o.stat(B);
								ae.isFile() || (fe = !0);
							} catch {}
							if (fe) throw G;
						}
						return (
							await (0, N.$Nh)(Math.min(100, W * 10)), L(H, B, U, Z, W + 1)
						);
					}
				}
				async function b(H, B, U) {
					return D(H, B, {
						root: { source: H, target: B },
						options: U,
						handledSourcePaths: new Set(),
					});
				}
				const F = 511;
				async function D(H, B, U) {
					if (U.handledSourcePaths.has(H)) return;
					U.handledSourcePaths.add(H);
					const { stat: Z, symbolicLink: W } = await o.stat(H);
					if (W) {
						if (U.options.preserveSymlinks)
							try {
								return await Q(H, B, U);
							} catch {}
						if (W.dangling) return;
					}
					return Z.isDirectory() ? M(H, B, Z.mode & F, U) : z(H, B, Z.mode & F);
				}
				async function M(H, B, U, Z) {
					await e.promises.mkdir(B, { recursive: !0, mode: U });
					const W = await $(H);
					for (const G of W) await D((0, l.$oc)(H, G), (0, l.$oc)(B, G), Z);
				}
				async function z(H, B, U) {
					await e.promises.copyFile(H, B), await e.promises.chmod(B, U);
				}
				async function Q(H, B, U) {
					let Z = await e.promises.readlink(H);
					(0, P.$Lg)(Z, U.root.source, !n.$n) &&
						(Z = (0, l.$oc)(U.root.target, Z.substr(U.root.source.length + 1))),
						await e.promises.symlink(Z, B);
				}
				t.Promises = new (class {
					get read() {
						return (H, B, U, Z, W) =>
							new Promise((G, fe) => {
								e.read(H, B, U, Z, W, (ae, Se, he) =>
									ae ? fe(ae) : G({ bytesRead: Se, buffer: he }),
								);
							});
					}
					get write() {
						return (H, B, U, Z, W) =>
							new Promise((G, fe) => {
								e.write(H, B, U, Z, W, (ae, Se, he) =>
									ae ? fe(ae) : G({ bytesWritten: Se, buffer: he }),
								);
							});
					}
					get fdatasync() {
						return (0, S.promisify)(e.fdatasync);
					}
					get open() {
						return (0, S.promisify)(e.open);
					}
					get close() {
						return (0, S.promisify)(e.close);
					}
					get realpath() {
						return (0, S.promisify)(e.realpath);
					}
					async exists(H) {
						try {
							return await e.promises.access(H), !0;
						} catch {
							return !1;
						}
					}
					get readdir() {
						return $;
					}
					get readDirsInDir() {
						return s;
					}
					get writeFile() {
						return m;
					}
					get rm() {
						return k;
					}
					get rename() {
						return J;
					}
					get copy() {
						return b;
					}
				})();
			},
		),
		
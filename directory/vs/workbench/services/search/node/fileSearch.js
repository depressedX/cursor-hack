import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../child_process.js';
import '../../../../../fs.js';
import '../../../../base/common/path.js';
import '../../../../../string_decoder.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/errorMessage.js';
import '../../../../base/common/glob.js';
import '../../../../base/common/normalization.js';
import '../../../../base/common/extpath.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/stopwatch.js';
import '../../../../base/common/strings.js';
import '../../../../base/common/types.js';
import '../../../../base/node/pfs.js';
import '../common/search.js';
import './ripgrepFileSearch.js';
import '../../../../base/common/fuzzyScorer.js';
define(
			Pe[615],
			Ne([
				1, 0, 81, 59, 18, 616, 20, 73, 51, 132, 42, 13, 57, 15, 19, 43, 41, 613,
				270,
			]),
			function (we, t, e, r, S, N, P, I, l, n, p, y, d, k, g, c, h, $, T) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$Hjd = t.$Gjd = void 0),
					(e = tt(e)),
					(r = tt(r)),
					(S = tt(S)),
					(P = tt(P)),
					(l = tt(l)),
					(n = tt(n)),
					(y = tt(y)),
					(k = tt(k)),
					(g = tt(g));
				const a = new Set();
				process.on("exit", () => {
					a.forEach((w) => w());
				});
				class u {
					constructor(m) {
						(this.c = null),
							(this.h = null),
							(this.l = !1),
							(this.m = null),
							(this.r = null),
							(this.s = 0),
							(this.a = m),
							(this.b = m.filePattern || ""),
							(this.d = m.includePattern && l.$Jk(m.includePattern)),
							(this.f = m.maxResults || null),
							(this.g = !!m.exists),
							(this.v = Object.create(null)),
							(this.k = 0),
							(this.j = !1),
							(this.o = 0),
							(this.p = 0),
							(this.q = []),
							this.b &&
								(this.c = m.shouldGlobMatchFilePattern
									? null
									: (0, T.$hs)(this.b).normalizedLowercase),
							(this.u = m.excludePattern && l.$Jk(m.excludePattern)),
							(this.t = new Map()),
							m.folderQueries.forEach((E) => {
								const R = {};
								E.excludePattern?.forEach((O) => {
									Object.assign(
										R,
										O.pattern || {},
										this.a.excludePattern || {},
									);
								}),
									E.excludePattern?.length ||
										Object.assign(R, this.a.excludePattern || {});
								const C = E.folder.fsPath;
								m.folderQueries
									.map((O) => O.folder.fsPath)
									.filter((O) => O !== C)
									.forEach((O) => {
										(0, p.$Lg)(O, C) && (R[S.$qc(C, O)] = !0);
									}),
									this.t.set(C, new f(R, C));
							});
					}
					cancel() {
						(this.l = !0), a.forEach((m) => m());
					}
					walk(m, E, R, C, O, A) {
						if (((this.m = d.$le.create(!1)), this.l)) return A(null, this.j);
						E.forEach((J) => {
							const L = S.$sc(J.fsPath);
							(this.u && this.u(J.fsPath, L)) ||
								this.J(C, { relativePath: J.fsPath, searchPath: void 0 });
						}),
							(this.r = d.$le.create(!1)),
							this.w(
								m,
								(J, L) => {
									this.x(this.y, this, J, R, C, O, (b) => {
										if (b) {
											const F = (0, I.$xj)(b);
											console.error(F), this.q.push(F), L(b, void 0);
										} else L(null, void 0);
									});
								},
								(J, L) => {
									this.m.stop();
									const b = J ? P.$Lb(J)[0] : null;
									A(b, this.j);
								},
							);
					}
					w(m, E, R) {
						const C = new Array(m.length),
							O = new Array(m.length);
						let A = !1,
							J = 0;
						if (m.length === 0) return R(null, []);
						m.forEach((L, b) => {
							E(L, (F, D) => {
								if (
									(F
										? ((A = !0), (C[b] = null), (O[b] = F))
										: ((C[b] = D), (O[b] = null)),
									++J === m.length)
								)
									return R(A ? O : null, C);
							});
						});
					}
					x(m, E, ...R) {
						try {
							m.apply(E, R);
						} catch (C) {
							R[R.length - 1](C);
						}
					}
					y(m, E, R, C, O) {
						const A = m.folder.fsPath,
							J = y.$m,
							L = () => z && z.kill();
						a.add(L);
						let b = (U) => {
								a.delete(L), (b = () => {}), O(U);
							},
							F = "";
						const D = this.D(),
							M = (0, $.$Djd)(
								this.a,
								m,
								this.a.includePattern,
								this.t.get(m.folder.fsPath).expression,
								E,
							),
							z = M.cmd,
							Q = !Object.keys(M.siblingClauses).length,
							H = M.rgArgs.args
								.map((U) => (U.match(/^-/) ? U : `'${U}'`))
								.join(" ");
						let B = `${M.rgDiskPath} ${H}
 - cwd: ${M.cwd}`;
						M.rgArgs.siblingClauses &&
							(B += `
 - Sibling clauses: ${JSON.stringify(M.rgArgs.siblingClauses)}`),
							C({ message: B }),
							(this.s = 0),
							this.z(z, "utf8", C, (U, Z, W) => {
								if (U) {
									b(U);
									return;
								}
								if (this.j) {
									b();
									return;
								}
								const fe = (F + (J ? n.$Bm(Z || "") : Z)).split(`
`);
								if (W) {
									const ae = fe.length;
									(fe[ae - 1] = fe[ae - 1].trim()), fe[ae - 1] || fe.pop();
								} else F = fe.pop() || "";
								if (
									fe.length &&
									fe[0].indexOf(`
`) !== -1
								) {
									b(new Error("Splitting up files failed"));
									return;
								}
								if (((this.s += fe.length), Q)) {
									for (const ae of fe)
										if (
											(this.J(R, {
												base: A,
												relativePath: ae,
												searchPath: this.N(m, ae),
											}),
											this.j)
										) {
											L();
											break;
										}
									(W || this.j) && b();
									return;
								}
								this.G(m, D, A, fe, R), W && (this.H(D, A, R), b());
							});
					}
					spawnFindCmd(m) {
						const E = this.t.get(m.folder.fsPath),
							R = E.getBasenameTerms(),
							C = E.getPathTerms(),
							O = ["-L", "."];
						if (R.length || C.length) {
							O.push("-not", "(", "(");
							for (const A of R) O.push("-name", A), O.push("-o");
							for (const A of C) O.push("-path", A), O.push("-o");
							O.pop(), O.push(")", "-prune", ")");
						}
						return (
							O.push("-type", "f"), e.spawn("find", O, { cwd: m.folder.fsPath })
						);
					}
					readStdout(m, E, R) {
						let C = "";
						this.z(
							m,
							E,
							() => {},
							(O, A, J) => {
								if (O) {
									R(O);
									return;
								}
								(C += A), J && R(null, C);
							},
						);
					}
					z(m, E, R, C) {
						let O = (L, b, F) => {
								(L || F) && ((O = () => {}), this.r?.stop()), C(L, b, F);
							},
							A = !1;
						m.stdout
							? (this.A(m.stdout, E, O), m.stdout.once("data", () => (A = !0)))
							: R({ message: "stdout is null" });
						let J;
						m.stderr
							? (J = this.B(m.stderr))
							: R({ message: "stderr is null" }),
							m.on("error", (L) => {
								O(L);
							}),
							m.on("close", (L) => {
								let b;
								!A && (b = this.C(J, E)) && o(b)
									? O(
											new Error(
												`command failed with error code ${L}: ${this.C(J, E)}`,
											),
										)
									: (this.g && L === 0 && (this.j = !0), O(null, "", !0));
							});
					}
					A(m, E, R) {
						const C = new N.StringDecoder(E);
						return (
							m.on("data", (O) => {
								R(null, C.write(O));
							}),
							C
						);
					}
					B(m) {
						const E = [];
						return (
							m.on("data", (R) => {
								E.push(R);
							}),
							E
						);
					}
					C(m, E) {
						const R = new N.StringDecoder(E);
						return m.map((C) => R.write(C)).join("");
					}
					D() {
						const m = { rootEntries: [], pathToEntries: Object.create(null) };
						return (m.pathToEntries["."] = m.rootEntries), m;
					}
					G(m, { pathToEntries: E }, R, C, O) {
						C.indexOf(this.b) !== -1 &&
							this.J(O, {
								base: R,
								relativePath: this.b,
								searchPath: this.N(m, this.b),
							});
						const A = (J) => {
							const L = S.$sc(J),
								b = S.$rc(J);
							let F = E[b];
							F || ((F = E[b] = []), A(b)),
								F.push({
									base: R,
									relativePath: J,
									basename: L,
									searchPath: this.N(m, J),
								});
						};
						C.forEach(A);
					}
					H({ rootEntries: m, pathToEntries: E }, R, C) {
						const O = this,
							A = this.t.get(R),
							J = this.b;
						function L(b) {
							O.o++;
							const F = (0, h.$K7)(() => b.map((D) => D.basename));
							for (let D = 0, M = b.length; D < M; D++) {
								const z = b[D],
									{ relativePath: Q, basename: H } = z;
								if (A.test(Q, H, J !== H ? F : void 0)) continue;
								const B = E[Q];
								if (B) L(B);
								else {
									if ((O.p++, Q === J)) continue;
									O.J(C, z);
								}
								if (O.j) break;
							}
						}
						L(m);
					}
					getStats() {
						return {
							cmdTime: this.r.elapsed(),
							fileWalkTime: this.m.elapsed(),
							directoriesWalked: this.o,
							filesWalked: this.p,
							cmdResultCount: this.s,
						};
					}
					I(m, E, R, C, O) {
						const A = m.folder,
							J = (0, h.$K7)(() => R);
						this.w(
							R,
							(L, b) => {
								if (this.l || this.j) return b(null);
								const F = E ? [E, L].join(S.sep) : L;
								if (
									this.t
										.get(m.folder.fsPath)
										.test(F, L, this.a.filePattern !== L ? J : void 0)
								)
									return b(null);
								const D = [A.fsPath, F].join(S.sep);
								r.lstat(D, (M, z) => {
									if (M || this.l || this.j) return b(null);
									this.L(D, z, (Q, H) =>
										Q || this.l || this.j
											? b(null)
											: H.isDirectory()
												? (this.o++,
													this.M(D, z, (B, U) =>
														B || this.l || this.j || ((U = U || ""), this.v[U])
															? b(null)
															: ((this.v[U] = !0),
																c.Promises.readdir(D).then(
																	(Z) => {
																		if (this.l || this.j) return b(null);
																		this.I(m, F, Z, C, (W) => b(W || null));
																	},
																	(Z) => {
																		b(null);
																	},
																)),
													))
												: (this.p++,
													F === this.b ||
														(this.h && g.$pg(H.size) && H.size > this.h) ||
														this.J(C, {
															base: A.fsPath,
															relativePath: F,
															searchPath: this.N(m, F),
														}),
													b(null, void 0)),
									);
								});
							},
							(L) => {
								const b = L && P.$Lb(L);
								return O(b && b.length > 0 ? b[0] : void 0);
							},
						);
					}
					J(m, E) {
						this.K(E) &&
							(!this.d || this.d(E.relativePath, S.$sc(E.relativePath))) &&
							(this.k++,
							(this.g || (this.f && this.k > this.f)) && (this.j = !0),
							this.j || m(E));
					}
					K(m) {
						if (this.b) {
							if (this.b === "*") return !0;
							if (this.c) return (0, h.$F7)(m, this.c);
							if (this.b) return (0, h.$F7)(m, this.b, !1);
						}
						return !0;
					}
					L(m, E, R) {
						return E.isSymbolicLink() ? r.stat(m, R) : R(null, E);
					}
					M(m, E, R) {
						return E.isSymbolicLink()
							? r.realpath(m, (C, O) => (C ? R(C) : R(null, O)))
							: R(null, m);
					}
					N(m, E) {
						return m.folderName ? S.$oc(m.folderName, E) : E;
					}
				}
				t.$Gjd = u;
				class s {
					constructor(m, E) {
						(this.a = m.folderQueries),
							(this.b = m.extraFileResources || []),
							(this.d = E),
							(this.c = new u(m));
					}
					search(m, E, R) {
						this.c.walk(this.a, this.b, this.d, m, E, (C, O) => {
							R(C, { limitHit: O, stats: this.c.getStats(), messages: [] });
						});
					}
					cancel() {
						this.c.cancel();
					}
				}
				t.$Hjd = s;
				class f {
					constructor(m, E) {
						(this.expression = m), (this.c = E), this.d(m);
					}
					d(m) {
						let E, R;
						Object.keys(m)
							.filter((C) => m[C])
							.forEach((C) => {
								S.$nc(C)
									? ((E = E || l.$Ek()), (E[C] = m[C]))
									: ((R = R || l.$Ek()), (R[C] = m[C]));
							}),
							(this.a = E && l.$Jk(E, { trimForExclusions: !0 })),
							(this.b = R && l.$Jk(R, { trimForExclusions: !0 }));
					}
					test(m, E, R) {
						return (
							(this.b && this.b(m, E, R)) ||
							(this.a && this.a(S.$oc(this.c, m), E, R))
						);
					}
					getBasenameTerms() {
						const m = [];
						return (
							this.a && m.push(...l.$Lk(this.a)),
							this.b && m.push(...l.$Lk(this.b)),
							m
						);
					}
					getPathTerms() {
						const m = [];
						return (
							this.a && m.push(...l.$Mk(this.a)),
							this.b && m.push(...l.$Mk(this.b)),
							m
						);
					}
				}
				function o(w) {
					const m = w.trim().split(`
`),
						E = m[0].trim();
					if (E.startsWith("Error parsing regex")) return E;
					if (E.startsWith("regex parse error"))
						return k.$dg(m[m.length - 1].trim());
					if (
						E.startsWith("error parsing glob") ||
						E.startsWith("unsupported encoding")
					)
						return E.charAt(0).toUpperCase() + E.substr(1);
					if (E === "Literal '\\n' not allowed.")
						return "Literal '\\n' currently not supported";
					if (E.startsWith("Literal ")) return E;
				}
			},
		),
		
import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../utils/common/ignore.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../editor/common/services/languagesAssociations.js';
import '../../search/common/search.js';
import '../../../../base/common/cancellation.js';
import '../../ai/browser/gitContextService.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../platform/storage/common/storage.js';
define(
		de[632],
		he([1, 0, 22, 20, 25, 1325, 5, 671, 186, 33, 359, 45, 21]),
		function (ce /*require*/,
 e /*exports*/,
 t /*files*/,
 i /*extensions*/,
 w /*workspace*/,
 E /*ignore*/,
 C /*instantiation*/,
 d /*languagesAssociations*/,
 m /*search*/,
 r /*cancellation*/,
 u /*gitContextService*/,
 a /*reactiveStorageService*/,
 h /*storage*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$M9b = e.$L9b = e.$K9b = e.$J9b = void 0),
				(E = xi(E)),
				(e.$J9b = (0, C.$Mi)("sourceFilesService"));
			const c = (v) =>
				v.startsWith("/") || v.startsWith("\\") ? (0, e.$K9b)(v.slice(1)) : v;
			e.$K9b = c;
			const n = (v) =>
				v.endsWith("/") || v.endsWith("\\") ? v.slice(0, -1) : v;
			e.$L9b = n;
			const g = 1e3 * 60 * 60 * 5,
				p = 1e3 * 60 * 10;
			async function o(v, S) {
				return (await S.readFile(v)).value.toString().split(`
`);
			}
			const f = (v) =>
				`\`\`\`${v.relativePath}

\`\`\``.length + v.sizeBytes;
			class b {
				constructor(S) {
					(this.e = S), (this.d = []), (this.c = S);
				}
				async acquire() {
					return this.c > 0
						? (this.c--, Promise.resolve())
						: new Promise((S) => {
								this.d.push(S);
							});
				}
				release() {
					if ((this.c++, this.d.length > 0)) {
						this.c--;
						const S = this.d.shift();
						S && S();
					}
				}
			}
			const s = (v, S) => {
					const { relativePath: I, name: T, sizeBytes: P, children: k } = v;
					return {
						path: S.asRelativePath(I),
						name: T,
						sizeBytes: P,
						children: k?.map((D) => s(D, S)),
					};
				},
				l = (v, S, I, T, P, k) => {
					const { path: L, name: D, sizeBytes: M, children: N } = v,
						A = k ? [] : [...P, D],
						R = {
							workspaceId: S,
							relativePath: I.resolveRelativePath(L),
							name: D,
							sizeBytes: M,
							children: N?.map((O) => l(O, S, I, T, A, !1)),
						};
					return T.set(A.join("/"), R), R;
				},
				y = (v, S, I) => {
					const T = new Map();
					return { ...l(v, S, I, T, [], !0), index: T };
				};
			let $ = class {
				constructor(S, I, T, P, k, L) {
					(this.e = S),
						(this.f = I),
						(this.g = T),
						(this.h = P),
						(this.i = k),
						(this.j = L),
						(this.d = 0),
						(this.l = new Map()),
						(this.m = new Map()),
						(this.v = 0),
						(this.c = new b(500));
				}
				k() {
					if (!this.i.applicationUserPersistentStorage.longContextFlagEnabled2)
						throw new Error(
							"Running SourceFilesService when long context flag is not enabled - this should never happen",
						);
				}
				n(S) {
					const I = S.sourceTree.workspaceId;
					this.l.set(I, S);
					const T = JSON.stringify({
						sourceTree: s(S.sourceTree, this.e),
						lastComputed: S.lastComputed,
					});
					this.j.store(
						"cachedSourceTree",
						T,
						h.StorageScope.WORKSPACE,
						h.StorageTarget.USER,
					);
				}
				o() {
					const S = this.e.getWorkspace().id,
						I = this.l.get(S);
					if (I) return I;
					const T = this.j.getObject(
						"cachedSourceTree",
						h.StorageScope.WORKSPACE,
					);
					if (T) {
						const P = T.sourceTree,
							L = { sourceTree: y(P, S, this.e), lastComputed: T.lastComputed };
						return this.n(L), L;
					}
				}
				async p(S) {
					this.k();
					const I = this.e.getWorkspace();
					if (!I) throw new Error("Workspace not found");
					if (I.folders.length === 0) return;
					const T = I.folders.at(0)?.uri;
					if (!T) return;
					const P = I.id,
						k = this.o();
					if (k && !(Date.now() - k.lastComputed > g)) return k.sourceTree;
					if (this.m.has(P)) {
						const A = this.m.get(P);
						if (!(Date.now() - A.lastComputed > p))
							return await A.sourceTreePromise;
					}
					const L = Date.now(),
						D = {
							lastComputed: L,
							sourceTreePromise: this.q(T, this.e, I, this.f, S),
						};
					this.m.set(P, D);
					const M = await D.sourceTreePromise;
					this.m.get(P) === D && this.m.delete(P);
					const N = { sourceTree: M, lastComputed: L };
					return this.n(N), M;
				}
				async q(S, I, T, P, k) {
					if (this.d > 5)
						throw new Error("Too many failures in a row. Giving up for now.");
					const L = performance.now();
					if (S === void 0) throw new Error("Folder not found: " + S);
					const D =
						await I.getWorkspace().folders[0].toResource(".cursorignore");
					let M = [];
					try {
						M = await o(D, P);
					} catch {}
					let N = 0;
					const A = 1e5,
						R = () => (N > A ? !0 : (N++, !1));
					try {
						const O = new Map(),
							B = await this.s(
								S,
								[],
								M,
								[
									".git",
									"yarn.lock",
									"package-lock.json",
									"pnpm-lock.yaml",
									"node_modules",
									"__pycache__",
								],
								O,
								T,
								P,
								R,
								k,
							);
						return (this.d = 0), { ...B, index: O };
					} catch (O) {
						throw (this.d++, O);
					}
				}
				async s(S, I, T, P, k, L, D, M, N) {
					const A = (q) => (k.set(I.join("/"), q), q);
					let R;
					try {
						N?.throttleFileStat && (await this.c.acquire()),
							this.k(),
							(R = await D.resolve(S, { resolveTo: [S] }));
					} finally {
						N?.throttleFileStat && (await this.c.release());
					}
					if (!R) throw new Error("File not found");
					if (R?.isFile && R.size)
						try {
							return A({
								workspaceId: L.id,
								relativePath: L.folders[0].toResource(I.join("/")),
								name: R.name,
								sizeBytes: R.size,
							});
						} catch {
							throw new Error("File not found");
						}
					const O = R.children ?? [],
						B = R.isDirectory ? O : [],
						U = B.find((q) => q.name === ".gitignore"),
						z = U ? [...P, ...(await o(U.resource, D))] : P,
						F = (0, E.default)().add(T).add(z),
						x = (q) => [...I, q.name];
					if (M())
						throw new Error("Too many stats performed. Giving up for now.");
					const H = await Promise.all(
						B.filter((q) => !F.ignores(x(q).join("/"))).map(
							async (q) => await this.s(q.resource, x(q), T, z, k, L, D, M, N),
						),
					);
					return A({
						workspaceId: L.id,
						relativePath: L.folders[0].toResource(I.join("/")),
						name: R.name,
						sizeBytes: H.reduce((q, V) => q + V.sizeBytes, 0),
						children: H,
					});
				}
				async getFolderSize(S, I) {
					this.k();
					const T = await this.p(I);
					return T ? T.index.get((0, e.$K9b)(S))?.sizeBytes : 0;
				}
				async isSourceFile(S, I) {
					if ((this.k(), !S)) return !1;
					const T = (0, d.$lYb)(this.e.getWorkspace().folders[0].toResource(S)),
						P = 5e4,
						k = 2e5,
						L = !!T.find(
							(M) =>
								M.startsWith("application/") && !M.includes("octet-stream"),
						);
					if (!!T.find((M) => M.startsWith("text/"))) {
						const M = await this.p(I);
						if (!M) return !1;
						const N = M.index.get((0, e.$K9b)(S));
						return N ? N.sizeBytes < k : !0;
					}
					if (L) {
						const M = await this.p(I);
						if (!M) return !1;
						const N = M.index.get((0, e.$K9b)(S));
						if (!N) return !1;
						const A = N.sizeBytes < P;
						return (
							A || console.log("application file is too big", S, N.sizeBytes), A
						);
					}
					return !1;
				}
				async getFilesOfFolder(S, I) {
					if ((this.k(), !S)) return [];
					const { recursive: T = !0, throttleFileStat: P } = I ?? {},
						k = await this.p({ throttleFileStat: P ?? !1 });
					if (!k) return [];
					const L = k.index.get((0, e.$K9b)(S));
					if (!L) throw new Error("Folder not found: " + S);
					await this.w();
					const D = [];
					return await this.x(L, D, S, T), D;
				}
				async getFilesOfSearch(S) {
					this.k();
					const I = await this.p();
					if (!I) return [];
					const T = await this.g.textSearch(
						{
							type: m.QueryType.Text,
							contentPattern: {
								pattern: S,
								isCaseSensitive: !1,
								isWordMatch: !1,
							},
							folderQueries: [{ folder: I.relativePath }],
						},
						r.CancellationToken.None,
					);
					return await Promise.all(
						T.results.map(async (P) => ({
							relativePath: P.resource.path,
							content: (await this.f.readFile(P.resource)).value.toString(),
						})),
					);
				}
				t(S, I, T) {
					const P = S.map((N) => ({ ...N })),
						k = [...P].sort((N, A) => A.score - N.score);
					let L = 0,
						D = 0,
						M = 0;
					return (
						k.forEach((N, A) => {
							const R = f(N);
							L + R > I || T.has(N.relativePath)
								? ((N.truncated = !0), (N.sizeBytes = 0), D++)
								: ((L += R), M++);
						}),
						P
					);
				}
				async w() {
					const I = (O) => 1 - 0.75 * (Math.min(1e3, O) / 999),
						k = (this.u?.size ?? 0) > 0 ? 3e5 : 3e4;
					if (this.u && Date.now() - this.v < k) return this.u;
					const L = new Map(),
						D = await Promise.all(
							Array.from({ length: 1e3 }, async (O, B) => {
								try {
									return await this.h.getFilenamesInCommit(B);
								} catch {
									return [];
								}
							}),
						);
					try {
						[
							(await this.h.getGitDiff())?.map((B) => B.to).filter((B) => B) ??
								[],
							...D,
						].forEach((B, U) => {
							B.forEach((z) => {
								L.set(z, (L.get(z) ?? 0) + I(U));
							});
						});
					} catch {}
					const M = Math.min(...L.values()),
						N = Math.max(...L.values()),
						A = 1e-6,
						R = new Map();
					return (
						L.forEach((O, B) => {
							R.set(B, (O - M) / (N - M + A));
						}),
						(this.u = R),
						(this.v = Date.now()),
						R
					);
				}
				async shrinkBagsOfFiles_MAY_RETURN_TRUNCATED_OR_EMPTY_FILES(S, I) {
					if (
						(this.k(),
						S.map((B) => B.reduce((U, z) => U + f(z), 0)).reduce(
							(B, U) => B + U,
							0,
						) <= I)
					)
						return S;
					const k = S.map((B) => Math.sqrt(B.length)),
						L = k.reduce((B, U) => B + U, 0),
						D = I / L,
						N = S.map((B, U) => Math.round(k[U] * D))
							.reduce((B, U) => [...B, B[B.length - 1] + U], [0])
							.slice(1),
						A = new Set();
					let R = 0;
					return S.map((B, U) => {
						const F = N[U] - R,
							x = this.t(B, F, A);
						x.forEach((q) => {
							q.truncated || A.add(q.relativePath);
						});
						const H = x.reduce((q, V) => q + f(V), 0);
						return (R += H), x;
					});
				}
				async folderFilesContentlessToFolderFiles(S) {
					return (
						this.k(),
						(
							await Promise.allSettled(
								S.map(async (T) => {
									const P = this.e
											.getWorkspace()
											.folders[0].toResource(T.relativePath),
										k = T.truncated
											? "<truncated for length>"
											: (await this.f.readFile(P)).value.toString();
									return { ...T, content: k };
								}),
							)
						).flatMap((T) => (T.status === "fulfilled" ? T.value : []))
					);
				}
				async x(S, I, T, P) {
					if (S.children)
						for (const k of S.children) {
							const L = T + "/" + k.name;
							k.children && !P
								? I.push({
										relativePath: L,
										sizeBytes: 0,
										truncated: !0,
										score: 0,
									})
								: await this.x(k, I, L, P);
						}
					else if (await this.isSourceFile(S.relativePath.path)) {
						const k = await this.w();
						k.has((0, e.$K9b)(T)),
							I.push({
								relativePath: T,
								sizeBytes: S.sizeBytes,
								truncated: !1,
								score: k.get((0, e.$K9b)(T)) ?? 0,
							});
					} else
						I.push({ relativePath: T, sizeBytes: 0, truncated: !0, score: 0 });
				}
			};
			(e.$M9b = $),
				(e.$M9b = $ =
					Ne(
						[
							j(0, w.$Vi),
							j(1, t.$ll),
							j(2, m.$p7),
							j(3, u.$$Db),
							j(4, a.$0zb),
							j(5, h.$lq),
						],
						$,
					)),
				(0, i.$lK)(e.$J9b, $, i.InstantiationType.Eager);
		},
	)

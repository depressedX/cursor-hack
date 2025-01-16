define(de[3917], he([1, 0, 3914, 20, 717]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(0, i.$lK)(w.$a2c, t.$H5c, i.InstantiationType.Delayed);
		}),
		define(
			de[3918],
			he([
				1, 0, 4, 25, 423, 256, 81, 30, 31, 24, 19, 40, 22, 78, 57, 222, 85, 87,
				23, 44, 68, 174, 261, 129, 133, 3,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$j5c = void 0);
				let I = class extends S.$1c {
					constructor(P, k, L, D, M, N, A, R, O, B, U, z, F, x, H, q) {
						super(),
							(this.a = P),
							(this.b = k),
							(this.c = L),
							(this.f = D),
							(this.g = M),
							(this.h = N),
							(this.j = A),
							(this.m = R),
							(this.n = O),
							(this.q = B),
							(this.r = U),
							(this.s = z),
							(this.t = F),
							(this.u = x),
							(this.w = H),
							(this.y = q);
					}
					async pickNewWorkspacePath() {
						const P = [f.Schemas.file];
						this.n.remoteAuthority && P.unshift(f.Schemas.vscodeRemote);
						let k = await this.q.showSaveDialog({
							saveLabel: (0, g.$DO)((0, t.localize)(13167, null)),
							title: (0, t.localize)(13168, null),
							filters: i.$$i,
							defaultUri: (0, u.$nh)(
								await this.q.defaultWorkspacePath(),
								this.z(),
							),
							availableFileSystems: P,
						});
						if (k)
							return (
								(0, i.$fj)(k) || (k = k.with({ path: `${k.path}.${i.$9i}` })), k
							);
					}
					z() {
						const P = this.R()?.configPath;
						if (P && (0, i.$ej)(P, this.n)) return (0, u.$kh)(P);
						const k = (0, r.$Sb)(this.b.getWorkspace().folders);
						return k ? `${(0, u.$kh)(k.uri)}.${i.$9i}` : `workspace.${i.$9i}`;
					}
					async updateFolders(P, k, L, D) {
						const M = this.b.getWorkspace().folders;
						let N = [];
						typeof k == "number" && (N = M.slice(P, P + k).map((B) => B.uri));
						let A = [];
						Array.isArray(L) &&
							(A = L.map((B) => ({ uri: (0, u.$uh)(B.uri), name: B.name })));
						const R = N.length > 0,
							O = A.length > 0;
						if (!(!O && !R))
							return O && !R
								? this.F(A, P, D)
								: R && !O
									? this.removeFolders(N)
									: this.G(N)
										? this.createAndEnterWorkspace(A)
										: this.b.getWorkbenchState() !== i.WorkbenchState.WORKSPACE
											? this.F(A, P, D)
											: this.C(A, N, P, D);
					}
					async C(P, k, L, D = !1) {
						try {
							await this.b.updateFolders(P, k, L);
						} catch (M) {
							if (D) throw M;
							this.J(M);
						}
					}
					addFolders(P, k = !1) {
						const L = P.map((D) => ({ uri: (0, u.$uh)(D.uri), name: D.name }));
						return this.F(L, void 0, k);
					}
					async F(P, k, L = !1) {
						const D = this.b.getWorkbenchState(),
							M = this.n.remoteAuthority;
						if (
							(M &&
								(P = P.filter(
									(N) =>
										N.uri.scheme !== f.Schemas.file &&
										(N.uri.scheme !== f.Schemas.vscodeRemote ||
											(0, u.$sh)(N.uri.authority, M)),
								)),
							D !== i.WorkbenchState.WORKSPACE)
						) {
							let N = this.b
								.getWorkspace()
								.folders.map((A) => ({ uri: A.uri }));
							return (
								N.splice(typeof k == "number" ? k : N.length, 0, ...P),
								(N = (0, r.$Qb)(N, (A) =>
									this.t.extUri.getComparisonKey(A.uri),
								)),
								(D === i.WorkbenchState.EMPTY && N.length === 0) ||
								(D === i.WorkbenchState.FOLDER && N.length === 1)
									? void 0
									: this.createAndEnterWorkspace(N)
							);
						}
						try {
							await this.b.addFolders(P, k);
						} catch (N) {
							if (L) throw N;
							this.J(N);
						}
					}
					async removeFolders(P, k = !1) {
						if (this.G(P)) return this.createAndEnterWorkspace([]);
						try {
							await this.b.removeFolders(P);
						} catch (L) {
							if (k) throw L;
							this.J(L);
						}
					}
					G(P) {
						if (this.b.getWorkbenchState() === i.WorkbenchState.FOLDER) {
							const k = this.b.getWorkspace().folders[0];
							return P.some((L) => this.t.extUri.isEqual(L, k.uri));
						}
						return !1;
					}
					async createAndEnterWorkspace(P, k) {
						if (k && !(await this.isValidTargetWorkspacePath(k))) return;
						const L = this.n.remoteAuthority,
							D = await this.m.createUntitledWorkspace(P, L);
						if (k)
							try {
								await this.H(D, k);
							} finally {
								await this.m.deleteUntitledWorkspace(D);
							}
						else
							(k = D.configPath),
								this.y.currentProfile.isDefault ||
									(await this.w.setProfileForWorkspace(
										D,
										this.y.currentProfile,
									));
						return this.enterWorkspace(k);
					}
					async saveAndEnterWorkspace(P) {
						const k = this.R();
						if (k) {
							if ((0, u.$gh)(k.configPath, P)) return this.I(k);
							if (await this.isValidTargetWorkspacePath(P))
								return await this.H(k, P), this.enterWorkspace(P);
						}
					}
					async isValidTargetWorkspacePath(P) {
						return !0;
					}
					async H(P, k) {
						const L = P.configPath;
						if (!(0, i.$aj)(k, this.n) && !this.y.currentProfile.isDefault) {
							const R = await this.m.getWorkspaceIdentifier(k);
							await this.w.setProfileForWorkspace(R, this.y.currentProfile);
						}
						if (this.t.extUri.isEqual(L, k)) return;
						const M = (0, i.$aj)(L, this.n),
							N = await this.h.readFile(L),
							A = (0, E.$jRb)(N.value.toString(), L, M, k, this.t.extUri);
						await this.j.create([
							{ resource: k, value: A, options: { overwrite: !0 } },
						]),
							await this.Q(k);
					}
					async I(P) {
						const k = P.configPath,
							L = this.j.files.get(k);
						if (L) {
							await L.save({ force: !0, reason: b.SaveReason.EXPLICIT });
							return;
						}
						if (await this.h.exists(k)) return;
						const M = { folders: [] },
							N = (0, E.$jRb)(
								JSON.stringify(M, null, "	"),
								k,
								!1,
								k,
								this.t.extUri,
							);
						await this.j.create([{ resource: k, value: N }]);
					}
					J(P) {
						switch (P.code) {
							case w.JSONEditingErrorCode.ERROR_INVALID_FILE:
								this.L();
								break;
							default:
								this.f.error(P.message);
						}
					}
					L() {
						const P = (0, t.localize)(13169, null);
						this.M(P);
					}
					M(P) {
						this.f.prompt(a.Severity.Error, P, [
							{
								label: (0, t.localize)(13170, null),
								run: () =>
									this.g.executeCommand(
										"workbench.action.openWorkspaceConfigFile",
									),
							},
						]);
					}
					async N(P) {
						if (this.n.extensionTestsLocationURI)
							throw new Error(
								"Entering a new workspace is not possible in tests.",
							);
						const k = await this.m.getWorkspaceIdentifier(P);
						return (
							this.b.getWorkbenchState() === i.WorkbenchState.FOLDER &&
								(await this.O(k)),
							await this.c.initialize(k),
							this.m.enterWorkspace(P)
						);
					}
					O(P) {
						return this.P(P, (k) => k.scope === C.ConfigurationScope.WINDOW);
					}
					copyWorkspaceSettings(P, k) {
						return this.P(P, void 0, k);
					}
					P(P, k, L) {
						const D = d.$Io
								.as(C.$No.Configuration)
								.getConfigurationProperties(),
							M = {};
						for (const N of this.c.keys().workspace)
							if (D[N]) {
								if (k && !k(D[N])) continue;
								M[N] = this.c.inspect(N).workspaceValue;
							}
						for (const [N, A] of Object.entries(L?.overrides || {})) M[N] = A;
						return this.a.write(
							P.configPath,
							[{ path: ["settings"], value: M }],
							!0,
						);
					}
					async Q(P) {
						this.b.getWorkbenchState() !== i.WorkbenchState.EMPTY &&
							this.u.isWorkspaceTrusted() &&
							(await this.u.setUrisTrust([P], !0));
					}
					R() {
						const P = (0, i.$1i)(this.b.getWorkspace());
						if ((0, i.$2i)(P)) return P;
					}
				};
				(e.$j5c = I),
					(e.$j5c = I =
						Ne(
							[
								j(0, w.$$Qb),
								j(1, i.$Vi),
								j(2, y.$RZ),
								j(3, a.$4N),
								j(4, m.$ek),
								j(5, h.$ll),
								j(6, p.$kZ),
								j(7, E.$cRb),
								j(8, c.$r8),
								j(9, n.$IO),
								j(10, n.$GO),
								j(11, o.$asb),
								j(12, s.$Vl),
								j(13, l.$pO),
								j(14, $.$Xl),
								j(15, v.$P8),
							],
							I,
						));
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[632],
		he([1, 0, 22, 20, 25, 1325, 5, 671, 186, 33, 359, 45, 21]),
		function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
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
	),
		define(
			de[3919],
			he([1, 0, 322, 59, 12, 19, 9, 63, 44, 1271, 444, 819, 632]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$V_b = c);
				async function c(n, g, p) {
					let o = (0, h.$K9b)(n),
						f = (0, h.$L9b)(o);
					w.$l && (f = f.replaceAll("/", "\\"));
					let s = (
						await g.anythingQuickAccessProvider.getFilePicks(
							(0, t.$hs)(f),
							new i.$Gc(),
							p.token,
						)
					).map((T) => T.resource ?? C.URI.parse(""));
					const y = g.editorService
						.getEditors(m.EditorsOrder.MOST_RECENTLY_ACTIVE)
						.map((T) => T.editor.resource)
						.filter((T) => T !== void 0);
					s = s.concat(y);
					let $ = [];
					try {
						const T = await g.commandService.executeCommand(
								"git.api.getRepositories",
							),
							P = s.map((k) => k.toString());
						$ = (
							await Promise.all(
								T.map(async (k) => {
									const L = P.filter((D) => D.startsWith(k));
									return k && L.length > 0
										? await g.commandService.executeCommand(
												"git.api.checkIgnore",
												k,
												L,
											)
										: [];
								}),
							)
						).flat();
					} catch (T) {
						console.error("ERROR during git call to ignored files"),
							console.error(T);
					}
					let v = (0, a.$Q_b)(g, s);
					v = v.filter((T) => {
						let P = g.workspaceContextService.asRelativePath(T).toLowerCase(),
							k = [[0], [0]];
						for (let L = 0; L < P.length; L++)
							k[0].push(k[0][L]),
								k[1].push(Math.max(k[1][L], Math.min(f.length, k[0][L] + 1))),
								k[0][L] < f.length &&
									P[L] === f[k[0][L]] &&
									(k[0][L + 1] = k[0][L] + 1),
								k[1][L] < f.length &&
									P[L] === f[k[1][L]] &&
									(k[1][L + 1] = k[1][L] + 1);
						return k[1][P.length] >= f.length;
					});
					const S = v.map((T) => {
						let P = 9;
						const k = g.workspaceContextService.asRelativePath(T).toLowerCase(),
							L = (0, E.$kh)(T).toLowerCase().replaceAll("\\", "/"),
							D = f.toLowerCase(),
							M = !1;
						if (k.endsWith(D) || (k + "/").endsWith(D)) P = 16;
						else if (L.startsWith(D)) P = 15;
						else if (L.includes(D) && M) P = 14;
						else if (L.includes(D)) P = 13;
						else {
							const N = (0, a.$O_b)(D, L);
							if (N > 0 && M) P = 12 + N / 4;
							else if (N > 0) P = 11 + N / 4;
							else {
								const A = (0, a.$O_b)(D, k);
								A > 0 && M
									? (P = 10 + A / 4)
									: A > 0
										? (P = 9 + A / 4)
										: (P = 8);
							}
						}
						return (
							r.$J_b.test(T.path) && (P = 7),
							r.$K_b.test(T.path) && (P = 6),
							$.includes(T.path) && (P = 5),
							{ folder: T, score: P }
						);
					});
					S.sort((T, P) => P.score - T.score);
					const I = (0, t.$hs)(f);
					return S.map((T) => {
						const P = (0, E.$kh)(T.folder).replaceAll("\\", "/"),
							k = g.workspaceContextService
								.asRelativePath(T.folder)
								.replaceAll("\\", "/"),
							{ labelMatch: L, descriptionMatch: D } = (0, t.$fs)(
								{ label: P, description: k },
								I,
								!0,
								d.$CJ,
								g.anythingQuickAccessProvider.scorerCache,
							);
						return {
							name: P,
							type: u.EverythingSearchOptionType.Folder,
							score: T.score,
							uri: T.folder,
							secondaryText: k,
							labelMatches: L,
							descriptionMatches: D,
						};
					});
				}
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[3920],
		he([
			1, 0, 3, 298, 155, 606, 126, 354, 42, 356, 25, 9, 632, 22, 28, 359, 107,
			83, 1045, 467, 1325, 90, 148, 837, 186, 45, 226, 5, 361,
		]),
		function (
			ce,
			e,
			t,
			i,
			w,
			E,
			C,
			d,
			m,
			r,
			u,
			a,
			h,
			c,
			n,
			g,
			p,
			o,
			f,
			b,
			s,
			l,
			y,
			$,
			v,
			S,
			I,
			T,
			P,
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$P9b = void 0),
				(s = xi(s));
			let k = class extends t.$1c {
				constructor(D, M, N, A, R, O, B, U, z, F, x, H, q, V) {
					super(),
						(this.j = D),
						(this.q = M),
						(this.r = N),
						(this.t = A),
						(this.u = R),
						(this.w = O),
						(this.y = B),
						(this.z = U),
						(this.C = z),
						(this.F = F),
						(this.G = x),
						(this.H = H),
						(this.I = q),
						(this.J = V),
						(this.a = new Set([
							"package-lock.json",
							"yarn.lock",
							"pnpm-lock.yaml",
							".git",
							"node_modules",
							"__pycache__",
						])),
						(this.b = {}),
						(this.f = []),
						(this.g = !1),
						(this.h = this.J.createInstance(P.$M8)),
						this.S(),
						this.I.setIsUriCursorIgnored(this.shouldIgnoreUri.bind(this));
				}
				getMentions(D, M, N) {
					if ((0, i.$Ygc)(M)) {
						const A = (0, i.$Zgc)(M, N);
						return (D.mentions[M]?.[A] || []).map((R) => R.uuid);
					} else return (D.mentions[M] || []).map((A) => A.uuid);
				}
				async getImagesFromImageSelection({
					setContext: D,
					getContext: M,
					disableImageRemoval: N,
				}) {
					const A = M().selectedImages ?? [];
					return (
						await Promise.all(
							A.map(async (O) => {
								const B = () => {
									if (N) return;
									const U = M().selectedImages ?? [];
									this.removeContext({
										contextType: "selectedImages",
										setContext: D,
										getContext: M,
										index: U.findIndex((z) =>
											(0, i.$1gc)("selectedImages", z, O),
										),
									});
								};
								return this.resizeImage(O, B, 2048);
							}),
						)
					).filter(n.$tg);
				}
				async getNotepadsContext(D) {
					try {
						const M = D.notepads?.map((A) => A.notepadId) ?? [];
						return (
							await Promise.all(
								M.map(async (A) => {
									const R = this.z.getNotepadData(A);
									if (!R) return null;
									const O = (0, i.$2gc)();
									for (const q of Object.keys(R.context))
										(0, i.$Ygc)(q)
											? (O[q] = this.L(R.context[q], D[q], q))
											: D[q] === void 0 && (O[q] = R.context[q]);
									const [B, U, z, F] = await Promise.all([
											this.getCodeChunks(O),
											this.getCommitDetailsFromPartialCommits(
												O.selectedCommits ?? [],
											),
											this.getPullRequestDetailsFromPartialPullRequests(
												O.selectedPullRequests ?? [],
											),
											this.getDiffDetailsFromGitDiff({
												gitDiff: O.gitDiff,
												gitDiffFromBranchToMain: O.gitDiffFromBranchToMain,
											}),
										]),
										H = (O.folderSelections ?? []).map((q) => q.relativePath);
									return {
										name: R.name,
										text: R.text,
										attachedCodeChunks: B,
										attachedFolders: H,
										commits: U,
										pullRequests: z,
										gitDiffs: F,
										images: [],
									};
								}),
							)
						).filter((A) => (0, n.$tg)(A));
					} catch (M) {
						return console.error("Error in getNotepadsContext:", M), [];
					}
				}
				L(D, M, N) {
					return M ? D.filter((A) => !M.some((R) => (0, i.$1gc)(N, A, R))) : D;
				}
				async resizeImage(D, M, N = 2048) {
					return (0, f.$F7b)(D, M, this.u, N);
				}
				async getCodeChunksFromTerminalSelections(D) {
					try {
						return (
							await Promise.all(
								D.map(async (N) => {
									const A = await (0, d.$7fc)(this.y, a.URI.from(N.uri));
									if (A !== void 0)
										return await this.getCodeChunksFromCodeSelection(A);
								}),
							)
						).filter((N) => N !== void 0);
					} catch (M) {
						return console.error(M), [];
					}
				}
				async getDiffDetailsFromGitDiff({
					gitDiff: D,
					gitDiffFromBranchToMain: M,
					baseRef: N,
					unifiedContextLines: A,
					ref: R,
				}) {
					try {
						let O = [];
						return (
							D &&
								O.push(
									this.w.getGitDiff().then((B) => {
										if (B !== void 0)
											return new o.$Cs({
												diffs: B.map((U) => this.fileDiffToProtoDiff(U)),
												diffType: o.GitDiff_DiffType.DIFF_TO_HEAD,
											});
									}),
								),
							M &&
								O.push(
									this.w
										.getBranchDiff({
											baseRef: N,
											unifiedContextLines: A,
											ref: R,
										})
										.then((B) => {
											if (B !== void 0)
												return new o.$Cs({
													diffs: B.map((U) => this.fileDiffToProtoDiff(U)),
													diffType: o.GitDiff_DiffType.DIFF_FROM_BRANCH_TO_MAIN,
												});
										}),
								),
							await Promise.all(O).then((B) => B.filter((U) => U !== void 0))
						);
					} catch (O) {
						return console.error("Error in getDiffDetailsFromGitDiff:", O), [];
					}
				}
				async getCurrentBranch() {
					return await this.w.getCurrentBranch();
				}
				async getDefaultBranch() {
					return await this.w.getDefaultBranch();
				}
				async getGitUser() {
					return await this.w.getGitUser();
				}
				async getLastCommit() {
					const D = await this.w.getLastCommits(1);
					return D.length > 0 ? D[0] : void 0;
				}
				async getPullRequestDetailsFromPartialPullRequests(D) {
					try {
						return (
							await Promise.all(D.map(async (N) => this.w.getFullPr(N.number)))
						)
							.filter((N) => N !== void 0)
							.map(
								(N) =>
									new C.$_A({
										title: N.title,
										body: N.body,
										diff:
											N?.diff?.map((A) => this.fileDiffToProtoDiff(A)) ?? [],
									}),
							);
					} catch (M) {
						return (
							console.error(
								"Error in getPullRequestDetailsFromPartialPullRequests:",
								M,
							),
							[]
						);
					}
				}
				async getCommitDetailsFromPartialCommits(D) {
					try {
						return (
							await Promise.all(D.map(async (A) => this.w.getFullCommit(A.sha)))
						)
							.filter((A) => A !== void 0)
							.map(
								(A) =>
									new C.$$A({
										sha: A.sha,
										message: A.message,
										description: A.description,
										diff: A.diff.map((R) => this.fileDiffToProtoDiff(R)),
									}),
							);
					} catch (M) {
						return (
							console.error("Error in getCommitDetailsFromPartialCommits:", M),
							[]
						);
					}
				}
				fileDiffToProtoDiff(D) {
					return new o.$Ds({
						from: D.from,
						to: D.to,
						chunks: D.chunks.map(
							(M) =>
								new o.$Es({
									content: M.content,
									lines: M.changes.map((N) => N.content),
									oldStart: M.oldStart,
									oldLines: M.oldLines,
									newStart: M.newStart,
									newLines: M.newLines,
								}),
						),
					});
				}
				async getCodeChunks(D, M) {
					const N = D.fileSelections,
						A = D.selections,
						R = D.folderSelections ?? [],
						O = D.terminalFiles ?? [],
						B = D.terminalSelections ?? [];
					return (
						await Promise.all([
							(
								await Promise.all(
									A.map((F) => this.getCodeChunksFromCodeSelection(F)),
								)
							).filter(n.$tg),
							this.getCodeChunksFromFileSelections(N, { ...M, context: D }),
							...(R ?? []).map((F) => this.getCodeChunksFromFolder(F, M)),
							(
								await Promise.all(
									B.map((F) => this.getCodeChunksFromCodeSelection(F)),
								)
							).filter(n.$tg),
							this.getCodeChunksFromTerminalSelections(O),
						])
					)
						.flat()
						.filter(n.$tg);
				}
				async getCodeChunksFromFileSelections(D, M) {
					try {
						return (
							await Promise.allSettled(
								D.map(async (A) => {
									const R = a.URI.revive(A.uri),
										O = M?.worktreePath
											? this.getWorktreeUri(R, M.worktreePath)
											: R,
										B = await (0, d.$2fc)(this.q, this.r, { ...A, uri: O });
									if (B === void 0) return;
									const z =
										(M?.context
											? this.getMentions(M.context, "fileSelections", A)
											: []
										).length > 0
											? C.ConversationMessage_CodeChunk_Intent.MENTIONED_FILE
											: C.ConversationMessage_CodeChunk_Intent.COMPOSER_FILE;
									return await this.getCodeChunksFromCodeSelection(
										{ ...B, uri: A.uri },
										{ intent: z },
									);
								}),
							)
						)
							.filter((A) => A.status === "fulfilled")
							.map((A) => A.value)
							.filter(n.$tg);
					} catch (N) {
						return console.error(N), [];
					}
				}
				getWorktreeUri(D, M) {
					return a.URI.joinPath(a.URI.file(M), this.t.asRelativePath(D));
				}
				async getCodeChunksFromCodeSelection(D, M) {
					if (
						(await new Promise((N) =>
							this.addOnCursorIgnoreLoadedCallback(() => N(void 0)),
						),
						!this.shouldIgnoreUri(D.uri))
					)
						try {
							const N = D?.rawText?.split(`
`) ?? [""];
							if (N.length === 0) return;
							const A = Math.min(
									D.range.positionLineNumber,
									D.range.selectionStartLineNumber,
								),
								R = this.t.asRelativePath(a.URI.revive(D.uri));
							return new C.$TA({
								relativeWorkspacePath: R,
								startLineNumber: A,
								lines: N,
								summarizationStrategy:
									{
										none: C.ConversationMessage_CodeChunk_SummarizationStrategy
											.NONE_UNSPECIFIED,
										embeddings:
											C.ConversationMessage_CodeChunk_SummarizationStrategy
												.EMBEDDED,
										summarized:
											C.ConversationMessage_CodeChunk_SummarizationStrategy
												.SUMMARIZED,
									}[D.summarizationStrategy ?? "none"] ??
									C.ConversationMessage_CodeChunk_SummarizationStrategy
										.NONE_UNSPECIFIED,
								intent:
									M?.intent ??
									C.ConversationMessage_CodeChunk_Intent.CODE_SELECTION,
							});
						} catch (N) {
							console.error(N);
							return;
						}
				}
				async getCodeChunksFromFolder(D, M) {
					const { relativePath: N } = D,
						A = this.t.resolveRelativePath((0, h.$K9b)(N)),
						R = M?.worktreePath
							? a.URI.joinPath(a.URI.file(M.worktreePath), N)
							: A,
						O = this.M(R),
						B = this.t.getWorkspaceFolder(A)?.uri,
						U = B === void 0 ? [] : await this.M(B),
						z = (0, s.default)()
							.add(await O)
							.add(await U),
						F = 4e5,
						x = [];
					return (
						await this.N(R, z, x, F), this.getCodeChunksFromFileSelections(x, M)
					);
				}
				async M(D) {
					const M = a.URI.joinPath(D, ".gitignore");
					try {
						return (await this.u.readFile(M)).value
							.toString()
							.split(`
`)
							.filter((A) => A.trim() !== "" && !A.startsWith("#"));
					} catch {
						return [];
					}
				}
				async N(D, M, N, A) {
					const O = await this.u.resolve(D, { resolveMetadata: !0 });
					let B = 0;
					if (O.isDirectory && O.children)
						for (const U of O.children) {
							const z = a.URI.joinPath(D, U.name),
								F = this.t.asRelativePath(z);
							if (!(M.ignores(F) || this.a.has(U.name))) {
								if (U.isDirectory) {
									const x = await this.M(z);
									M.add(x), (B += await this.N(z, M, N, A - B));
								} else if (await this.O(F)) {
									const x = U.size ?? 0;
									if (B + x > A || N.length >= 25) return B;
									N.push({ uri: z }), (B += x);
								}
								if (B >= A || N.length >= 25) return B;
							}
						}
					return B;
				}
				async O(D) {
					const M = this.t.resolveRelativePath(D),
						N = await this.u.resolve(M, { resolveMetadata: !0 });
					return !N.isDirectory && !N.isSymbolicLink;
				}
				addContext(D) {
					const {
						contextType: M,
						value: N,
						setContext: A,
						mention: R,
						undoRedoUri: O,
						getContext: B,
					} = D;
					if (M === "fileSelections") {
						const U = N;
						if (this.shouldIgnoreUri(U.uri)) return;
					}
					(0, i.$Ygc)(M)
						? this.P({
								...D,
								value: { ...N, addedWithoutMention: R === void 0 },
							})
						: (A(M, N),
							R &&
								A("mentions", M, (U) => [
									...(U?.filter((z) => z.uuid !== R.uuid) || []),
									R,
								])),
						O &&
							this.j.pushElement(
								new E.$x7b(
									"Add Context",
									"add-context",
									O,
									() => {
										const { undoRedoUri: U, ...z } = D,
											F = B();
										let x;
										(0, i.$Ygc)(M) &&
											((x = F[M].findIndex((H) => (0, i.$1gc)(M, H, N))),
											(x = x === -1 ? void 0 : x)),
											this.removeContext({ ...z, index: x });
									},
									() => {
										const { undoRedoUri: U, ...z } = D;
										this.addContext({ ...z });
									},
								),
							);
				}
				P(D) {
					const { contextType: M, value: N, setContext: A, mention: R } = D;
					if (
						(A(M, (O) => {
							const B = O || [];
							return B.some((F) => (0, i.$1gc)(M, F, N)) ? O : [...B, N];
						}),
						R)
					) {
						const O = (0, i.$Zgc)(M, N);
						A("mentions", M, O, (B) => [
							...(B?.filter((U) => U.uuid !== R.uuid) || []),
							R,
						]);
					}
				}
				removeContext(D) {
					const {
							contextType: M,
							setContext: N,
							index: A,
							undoRedoUri: R,
							getContext: O,
						} = D,
						B = O();
					let U, z;
					return (
						(0, i.$Ygc)(M)
							? ((z = B[M]?.[A]), (U = this.Q(D)))
							: ((z = B[M]),
								(U = B.mentions[M] || []),
								N(M, void 0),
								N("mentions", M, [])),
						R &&
							this.j.pushElement(
								new E.$x7b(
									"Remove Context",
									"remove-context",
									R,
									() => {
										const { undoRedoUri: F, ...x } = D;
										this.addContext({ ...x, value: z });
									},
									() => {
										const { undoRedoUri: F, ...x } = D,
											H = O();
										let q;
										(0, i.$Ygc)(M) &&
											((q = H[M].findIndex((V) => (0, i.$1gc)(M, V, z))),
											(q = q === -1 ? void 0 : q)),
											this.removeContext({ ...x, index: q });
									},
								),
							),
						U
					);
				}
				Q(D) {
					const { contextType: M, index: N, setContext: A, getContext: R } = D;
					let O = [];
					return (
						A(M, (B) => {
							if (!B) return B;
							if (N === void 0) {
								const F = B.slice(0, -1),
									x = B[B.length - 1];
								return (O = this.R({ ...D, item: x })), F;
							}
							const U = B.filter((F, x) => x !== N),
								z = B[N];
							return (O = this.R({ ...D, item: z })), U;
						}),
						O
					);
				}
				R(D) {
					const { contextType: M, item: N, setContext: A } = D,
						R = (0, i.$Zgc)(M, N);
					let O = [];
					return (
						A("mentions", M, R, (B) => (B === void 0 ? B : ((O = B), []))), O
					);
				}
				removeMention(D) {
					const { setContext: M, uuid: N, getContext: A } = D,
						R = A();
					let O, B, U;
					for (const [z, F] of Object.entries(R.mentions))
						if ((0, i.$Ygc)(z)) {
							for (const [x, H] of Object.entries(F))
								if (H.findIndex((V) => V.uuid === N) !== -1) {
									const V = R[z],
										G = V.findIndex((J) => (0, i.$Zgc)(z, J) === x),
										K = V[G];
									H.length === 1 &&
									(!("addedWithoutMention" in K) || !K.addedWithoutMention)
										? ((O = z), (B = G), (U = K))
										: M("mentions", z, x, (J) =>
												J?.filter((W) => W.uuid !== N),
											);
									break;
								}
						} else if (F.findIndex((H) => H.uuid === N) !== -1) {
							F.length === 1
								? ((O = z), (U = R[z]))
								: M("mentions", z, (H) => H?.filter((q) => q.uuid !== N));
							break;
						}
					O &&
						this.removeContext({
							contextType: O,
							setContext: M,
							index: B,
							getContext: A,
						});
				}
				removeAllListContext(D) {
					const {
							contextType: M,
							setContext: N,
							getContext: A,
							undoRedoUri: R,
						} = D,
						O = A();
					if (!(0, i.$Ygc)(M))
						throw new Error(`${M} is not a list context type`);
					const B = O[M] || [],
						U = O.mentions[M] || {},
						z = Object.values(U).flat();
					return (
						N(M, []),
						N("mentions", M, {}),
						R &&
							this.j.pushElement(
								new E.$x7b(
									"Remove All List Context",
									"remove-all-list-context",
									R,
									() => {
										N(M, B), N("mentions", M, U);
									},
									() => {
										N(M, []), N("mentions", M, {});
									},
								),
							),
						z
					);
				}
				async getLinterErrorsForFiles(D) {
					const M = [];
					for (const N of D) {
						const R = this.C.read({ resource: N })
							.filter((O) => O.severity === l.MarkerSeverity.Error)
							.map(
								(O) =>
									new y.$yF({
										message: O.message,
										source: O.source,
										range: new o.$Ns({
											startPosition: {
												line: O.startLineNumber,
												column: O.startColumn,
											},
											endPosition: {
												line: O.endLineNumber,
												column: O.endColumn,
											},
										}),
										relativeWorkspacePath: this.t.asRelativePath(N),
									}),
							);
						if (R.length > 0) {
							const O = new o.$4s({
								relativeWorkspacePath: this.t.asRelativePath(N),
								errors: R,
								fileContents: (
									await this.F.getCurrentFileInfo(N, {
										actuallyReadFromOverrideURI: !0,
									})
								)?.contents,
							});
							M.push(O);
						}
					}
					return M;
				}
				addOnCursorIgnoreLoadedCallback(D) {
					this.g ? D() : this.f.push(D);
				}
				async S() {
					(this.g = !0), this.f.forEach((D) => D()), (this.f = []);
				}
				shouldIgnoreUri(D) {
					return !1;
				}
				U(D, M) {
					const N = D.toString();
					return N.startsWith(M) ? N.slice(M.length) : N;
				}
				isCursorIgnoreLoaded() {
					return this.g;
				}
				async filterCursorIgnoredFiles(D, M) {
					return (
						await new Promise((N) =>
							this.addOnCursorIgnoreLoadedCallback(() => N(void 0)),
						),
						D.filter((N) => !this.shouldIgnoreUri(M(N)))
					);
				}
				isCodeChunkEqualToSelection(D, M) {
					if (
						D.intent !== C.ConversationMessage_CodeChunk_Intent.CODE_SELECTION
					)
						return !1;
					const N = a.URI.revive(M.uri),
						A = this.t.asRelativePath(N);
					if (D.relativeWorkspacePath !== A) return !1;
					const R = D.startLineNumber,
						O = Math.min(
							M.range.positionLineNumber,
							M.range.selectionStartLineNumber,
						);
					if (R !== O) return !1;
					const B = D.lines.length,
						U =
							Math.abs(
								M.range.positionLineNumber - M.range.selectionStartLineNumber,
							) + 1;
					return B === U;
				}
			};
			(e.$P9b = k),
				(e.$P9b = k =
					Ne(
						[
							j(0, w.$GN),
							j(1, m.$MO),
							j(2, r.$zIb),
							j(3, u.$Vi),
							j(4, c.$ll),
							j(5, g.$$Db),
							j(6, p.$iIb),
							j(7, b.$y9b),
							j(8, l.$aM),
							j(9, $.$N9b),
							j(10, v.$p7),
							j(11, S.$0zb),
							j(12, I.$J6b),
							j(13, T.$Li),
						],
						k,
					));
		},
	),
		
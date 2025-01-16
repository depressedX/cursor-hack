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
	
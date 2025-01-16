define(
			de[4006],
			he([
				1, 0, 29, 3, 12, 9, 4, 113, 22, 5, 73, 40, 118, 226, 627, 327, 174, 25,
				101, 1315, 356, 361, 18, 186, 449, 88, 781, 44, 24, 1671, 137, 367, 76,
				232, 197,
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
				k,
				L,
				D,
				M,
				N,
				A,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$9oc = void 0);
				let R = class {
					constructor(
						B,
						U,
						z,
						F,
						x,
						H,
						q,
						V,
						G,
						K,
						J,
						W,
						X,
						Y,
						ie,
						ne,
						ee,
						_,
						te,
						Q,
						Z,
						se,
					) {
						(this.e = U),
							(this.g = z),
							(this.h = F),
							(this.i = x),
							(this.j = H),
							(this.k = q),
							(this.l = V),
							(this.n = G),
							(this.o = K),
							(this.q = J),
							(this.r = W),
							(this.s = Y),
							(this.t = ie),
							(this.u = ne),
							(this.v = ee),
							(this.w = _),
							(this.x = te),
							(this.y = Q),
							(this.z = Z),
							(this.A = se),
							(this.a = new i.$Zc()),
							(this.b = Object.create(null)),
							(this.d = this.o.createInstance(l.$M8)),
							(this.H = new Map()),
							(this.I = new Map()),
							(this.J = new Map()),
							(this.c = B.getProxy(S.$mbb.ExtHostWorkspace));
						const re = this.g.getWorkspace();
						re.configuration && !w.$p && !X.hasProvider(re.configuration)
							? this.c.$initializeWorkspace(this.D(re), this.F())
							: this.g
									.getCompleteWorkspace()
									.then((le) =>
										this.c.$initializeWorkspace(this.D(le), this.F()),
									),
							this.g.onDidChangeWorkspaceFolders(this.C, this, this.a),
							this.g.onDidChangeWorkbenchState(this.C, this, this.a),
							this.s.onDidChangeTrust(this.G, this, this.a);
					}
					dispose() {
						this.a.dispose();
						for (const B in this.b) this.b[B].cancel();
					}
					$updateWorkspaceFolders(B, U, z, F) {
						const x = F.map((H) => ({
							uri: E.URI.revive(H.uri),
							name: H.name,
						}));
						return (
							this.l.status(this.B(B, x.length, z), { hideAfter: 10 * 1e3 }),
							this.k.updateFolders(U, z, x, !0)
						);
					}
					B(B, U, z) {
						let F;
						const x = U > 0,
							H = z > 0;
						return (
							x && !H
								? U === 1
									? (F = (0, C.localize)(2585, null, B))
									: (F = (0, C.localize)(2586, null, B, U))
								: H && !x
									? z === 1
										? (F = (0, C.localize)(2587, null, B))
										: (F = (0, C.localize)(2588, null, B, z))
									: (F = (0, C.localize)(2589, null, B)),
							F
						);
					}
					C() {
						this.c.$acceptWorkspaceData(this.D(this.g.getWorkspace()));
					}
					D(B) {
						return this.g.getWorkbenchState() === o.WorkbenchState.EMPTY
							? null
							: {
									configuration: B.configuration || void 0,
									isUntitled: B.configuration
										? (0, o.$aj)(B.configuration, this.r)
										: !1,
									folders: B.folders,
									id: B.id,
									name: this.q.getWorkspaceLabel(B),
									transient: B.transient,
								};
					}
					$startFileSearch(B, U, z) {
						const F = E.URI.revive(B),
							x = this.g.getWorkspace(),
							H = this.d.file(F ? [F] : x.folders, (0, A.$ji)(U));
						return this.e.fileSearch(H, z).then(
							(q) => q.results.map((V) => V.resource),
							(q) => ((0, t.$8)(q) ? null : Promise.reject(q)),
						);
					}
					$startTextSearch(B, U, z, F, x) {
						const H = E.URI.revive(U),
							q = this.g.getWorkspace(),
							V = H ? [H] : q.folders.map((W) => W.uri),
							G = this.d.text(B, V, (0, A.$ji)(z));
						G._reason = "startTextSearch";
						const K = (W) => {
							W.results && this.c.$handleTextSearchResult(W, F);
						};
						return this.e.textSearch(G, x, K).then(
							(W) => ({ limitHit: W.limitHit }),
							(W) => ((0, t.$8)(W) ? null : Promise.reject(W)),
						);
					}
					$checkExists(B, U, z) {
						return this.o.invokeFunction((F) => (0, b.$7oc)(F, B, U, z));
					}
					async $save(B, U) {
						const z = E.URI.revive(B),
							F = [
								...this.j.findEditors(z, {
									supportSideBySide: T.SideBySideEditor.PRIMARY,
								}),
							],
							x = await this.j.save(F, {
								reason: T.SaveReason.EXPLICIT,
								saveAs: U.saveAs,
								force: !U.saveAs,
							});
						return (0, P.$Sb)(this.E(x));
					}
					E(B) {
						return B.success
							? (0, P.$Lb)(
									B.editors.map((U) =>
										T.$A1.getCanonicalUri(U, {
											supportSideBySide: T.SideBySideEditor.PRIMARY,
										}),
									),
								)
							: [];
					}
					$saveAll(B) {
						return this.j
							.saveAll({ includeUntitled: B })
							.then((U) => U.success);
					}
					$resolveProxy(B) {
						return this.n.resolveProxy(B);
					}
					$lookupAuthorization(B) {
						return this.n.lookupAuthorization(B);
					}
					$lookupKerberosAuthorization(B) {
						return this.n.lookupKerberosAuthorization(B);
					}
					$loadCertificates() {
						return this.n.loadCertificates();
					}
					$requestWorkspaceTrust(B) {
						return this.t.requestWorkspaceTrust(B);
					}
					F() {
						return this.s.isWorkspaceTrusted();
					}
					G() {
						this.c.$onDidGrantWorkspaceTrust();
					}
					$registerEditSessionIdentityProvider(B, U) {
						const z = this.h.registerEditSessionIdentityProvider({
							scheme: U,
							getEditSessionIdentifier: async (F, x) =>
								this.c.$getEditSessionIdentifier(F.uri, x),
							provideEditSessionIdentityMatch: async (F, x, H, q) =>
								this.c.$provideEditSessionIdentityMatch(F.uri, x, H, q),
						});
						this.H.set(B, z), this.a.add(z);
					}
					$unregisterEditSessionIdentityProvider(B) {
						this.H.get(B)?.dispose(), this.H.delete(B);
					}
					$registerControlProvider(B, U) {
						const z = (F) => this.c.$controlGetDataframeSummary(F);
						if (U === "vscode-jupyter") {
							const F = this.u.registerControlProvider(U, {
								getDataframeSummary: z,
							});
							this.I.set(B, F), this.a.add(F);
						} else if (U === "git") {
							const F = async (x, H) =>
								await this.c
									.$controlGetFullDiff(x, H)
									.then((q) =>
										q
											? {
													changes: q.changes.map((V) => ({
														...V,
														change: { ...V.change, status: V.change.status },
													})),
													fullDiffText: q.fullDiffText,
												}
											: void 0,
									);
							this.v.registerDiffProvider({ getFullDiff: F });
						} else if (U === "cursor-retrieval") {
							const F = async (q) => await this.c.$controlGetTokenizedQuery(q);
							this.w.registerTokenizationProvider({ getTokenizedQuery: F });
							const x = async (q) => {
								const V = new D.$bx(q).toBinary();
								return await this.c.$controlAppendCppTelem(
									M.$Te.wrap(V),
									this.A.reactivePrivacyMode(),
								);
							};
							this.y.registerCppTelemProvider({ appendCppTelem: x });
							const H = async (q, V) => {
								await this.c.$controlStreamCpp(q, V);
							};
							this.z.registerDiffingProvider({
								streamCpp: H,
								cancelCpp: this.c.$controlCancelCpp,
								flushCpp: this.c.$controlFlushCpp,
								getCppReport: this.c.$controlGetCppReport,
							});
						} else if (U === "cursor-tokenize") {
							const F = async (x, H) => await this.c.$controlTokenizeBPE(x, H);
							this.x.registerBPETokenizerProvider({ tokenizeBPE: F });
						}
					}
					$unregisterControlProvider(B) {
						this.I.get(B)?.dispose(), this.I.delete(B);
					}
					$registerCanonicalUriProvider(B, U) {
						const z = this.i.registerCanonicalUriProvider({
							scheme: U,
							provideCanonicalUri: async (F, x, H) => {
								const q = await this.c.$provideCanonicalUri(F, x, H);
								return q && E.URI.revive(q);
							},
						});
						this.J.set(B, z), this.a.add(z);
					}
					$unregisterCanonicalUriProvider(B) {
						this.J.get(B)?.dispose(), this.J.delete(B);
					}
				};
				(e.$9oc = R),
					(e.$9oc = R =
						Ne(
							[
								(0, f.$tmc)(S.$lbb.MainThreadWorkspace),
								j(1, $.$p7),
								j(2, o.$Vi),
								j(3, I.$O8),
								j(4, k.$8oc),
								j(5, y.$IY),
								j(6, v.$mRb),
								j(7, a.$4N),
								j(8, g.$Aq),
								j(9, r.$Li),
								j(10, u.$3N),
								j(11, d.$Ti),
								j(12, m.$ll),
								j(13, p.$pO),
								j(14, p.$qO),
								j(15, h.$Nfc),
								j(16, c.$J6b),
								j(17, n.$O6b),
								j(18, s.$zIb),
								j(19, L.$hfc),
								j(20, L.$jfc),
								j(21, N.$x6b),
							],
							R,
						));
			},
		),
		
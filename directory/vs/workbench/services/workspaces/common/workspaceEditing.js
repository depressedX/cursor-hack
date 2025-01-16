define(de[449], he([1, 0, 5]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$mRb = void 0),
				(e.$mRb = (0, t.$Mi)("workspaceEditingService"));
		}),
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
		define(
			de[633],
			he([
				1, 0, 4, 25, 449, 19, 33, 222, 31, 22, 73, 63, 252, 67, 61, 57, 9, 23,
				256, 165,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qRb = e.$pRb = e.$oRb = e.$nRb = void 0),
					(e.$nRb = "addRootFolder"),
					(e.$oRb = (0, t.localize2)(3005, "Add Folder to Workspace...")),
					(e.$pRb = "setRootFolder"),
					(e.$qRb = "_workbench.pickWorkspaceFolder"),
					m.$fk.registerCommand({
						id: "workbench.action.files.openFileFolderInNewWindow",
						handler: (l) =>
							l.get(g.$IO).pickFileFolderAndOpen({ forceNewWindow: !0 }),
					}),
					m.$fk.registerCommand({
						id: "_files.pickFolderAndOpen",
						handler: (l, y) => l.get(g.$IO).pickFolderAndOpen(y),
					}),
					m.$fk.registerCommand({
						id: "workbench.action.files.openFolderInNewWindow",
						handler: (l) =>
							l.get(g.$IO).pickFolderAndOpen({ forceNewWindow: !0 }),
					}),
					m.$fk.registerCommand({
						id: "workbench.action.files.openFileInNewWindow",
						handler: (l) =>
							l.get(g.$IO).pickFileAndOpen({ forceNewWindow: !0 }),
					}),
					m.$fk.registerCommand({
						id: "workbench.action.openWorkspaceInNewWindow",
						handler: (l) =>
							l.get(g.$IO).pickWorkspaceAndOpen({ forceNewWindow: !0 }),
					}),
					m.$fk.registerCommand({
						id: e.$nRb,
						handler: async (l) => {
							const y = l.get(w.$mRb),
								$ = await s(l);
							!$ ||
								!$.length ||
								(await y.addFolders($.map((v) => ({ uri: v }))));
						},
					}),
					m.$fk.registerCommand({
						id: e.$pRb,
						handler: async (l) => {
							const y = l.get(w.$mRb),
								$ = l.get(i.$Vi),
								v = await s(l);
							!v ||
								!v.length ||
								(await y.updateFolders(
									0,
									$.getWorkspace().folders.length,
									v.map((S) => ({ uri: S })),
								));
						},
					});
				async function s(l) {
					const y = l.get(g.$IO),
						$ = l.get(b.$I8);
					return await y.showOpenDialog({
						openLabel: (0, d.$DO)((0, t.localize)(3002, null)),
						title: (0, t.localize)(3003, null),
						canSelectFolders: !0,
						canSelectMany: !0,
						defaultUri: await y.defaultFolderPath(),
						availableFileSystems: [$.defaultUriScheme],
					});
				}
				m.$fk.registerCommand(e.$qRb, async function (l, y) {
					const $ = l.get(a.$DJ),
						v = l.get(u.$3N),
						S = l.get(i.$Vi),
						I = l.get(c.$QO),
						T = l.get(n.$nM),
						P = S.getWorkspace().folders;
					if (!P.length) return;
					const k = P.map((N) => {
							const A = N.name,
								R = v.getUriLabel((0, E.$mh)(N.uri), { relative: !0 });
							return {
								label: A,
								description: R !== A ? R : void 0,
								folder: N,
								iconClasses: (0, h.$BDb)(I, T, N.uri, r.FileKind.ROOT_FOLDER),
							};
						}),
						L = (y ? y[0] : void 0) || Object.create(null);
					L.activeItem || (L.activeItem = k[0]),
						L.placeHolder || (L.placeHolder = (0, t.localize)(3004, null)),
						typeof L.matchOnDescription != "boolean" &&
							(L.matchOnDescription = !0);
					const D = (y ? y[1] : void 0) || C.CancellationToken.None,
						M = await $.pick(k, L, D);
					if (M) return P[k.indexOf(M)];
				}),
					m.$fk.registerCommand({
						id: "vscode.openFolder",
						handler: (l, y, $) => {
							const v = l.get(m.$ek);
							if ((typeof $ == "boolean" && ($ = { forceNewWindow: $ }), !y)) {
								const P = { forceNewWindow: $?.forceNewWindow };
								return (
									$?.forceLocalWindow &&
										((P.remoteAuthority = null),
										(P.availableFileSystems = ["file"])),
									v.executeCommand("_files.pickFolderAndOpen", P)
								);
							}
							const S = p.URI.from(y, !0),
								I = {
									forceNewWindow: $?.forceNewWindow,
									forceReuseWindow: $?.forceReuseWindow,
									noRecentEntry: $?.noRecentEntry,
									remoteAuthority: $?.forceLocalWindow ? null : void 0,
									forceProfile: $?.forceProfile,
									forceTempProfile: $?.forceTempProfile,
								},
								T =
									(0, i.$fj)(S) || S.scheme === o.Schemas.untitled
										? { workspaceUri: S }
										: { folderUri: S };
							return v.executeCommand("_files.windowOpen", [T], I);
						},
						metadata: {
							description:
								"Open a folder or workspace in the current window or new window depending on the newWindow argument. Note that opening in the same window will shutdown the current extension host process and start a new one on the given folder/workspace unless the newWindow parameter is set to true.",
							args: [
								{
									name: "uri",
									description:
										"(optional) Uri of the folder or workspace file to open. If not provided, a native dialog will ask the user for the folder",
									constraint: (l) => l == null || l instanceof p.URI,
								},
								{
									name: "options",
									description:
										"(optional) Options. Object with the following properties: `forceNewWindow`: Whether to open the folder/workspace in a new window or the same. Defaults to opening in the same window. `forceReuseWindow`: Whether to force opening the folder/workspace in the same window.  Defaults to false. `noRecentEntry`: Whether the opened URI will appear in the 'Open Recent' list. Defaults to false. Note, for backward compatibility, options can also be of type boolean, representing the `forceNewWindow` setting.",
									constraint: (l) =>
										l === void 0 ||
										typeof l == "object" ||
										typeof l == "boolean",
								},
							],
						},
					}),
					m.$fk.registerCommand({
						id: "vscode.newWindow",
						handler: (l, y) => {
							const $ = l.get(m.$ek),
								v = {
									forceReuseWindow: y && y.reuseWindow,
									remoteAuthority: y && y.remoteAuthority,
								};
							return $.executeCommand("_files.newWindow", v);
						},
						metadata: {
							description:
								"Opens an new window depending on the newWindow argument.",
							args: [
								{
									name: "options",
									description:
										"(optional) Options. Object with the following properties: `reuseWindow`: Whether to open a new window or the same. Defaults to opening in a new window. ",
									constraint: (l) => l === void 0 || typeof l == "object",
								},
							],
						},
					}),
					m.$fk.registerCommand(
						"_workbench.removeFromRecentlyOpened",
						function (l, y) {
							return l.get(f.$cRb).removeRecentlyOpened([y]);
						},
					),
					m.$fk.registerCommand({
						id: "vscode.removeFromRecentlyOpened",
						handler: (l, y) => {
							const $ = l.get(f.$cRb);
							return (
								typeof y == "string"
									? (y = y.match(/^[^:/?#]+:\/\//)
											? p.URI.parse(y)
											: p.URI.file(y))
									: (y = p.URI.revive(y)),
								$.removeRecentlyOpened([y])
							);
						},
						metadata: {
							description:
								"Removes an entry with the given path from the recently opened list.",
							args: [
								{
									name: "path",
									description:
										"URI or URI string to remove from recently opened.",
									constraint: (l) => typeof l == "string" || l instanceof p.URI,
								},
							],
						},
					}),
					m.$fk.registerCommand(
						"_workbench.addToRecentlyOpened",
						async function (l, y) {
							const $ = l.get(f.$cRb),
								v = y.uri,
								S = y.label,
								I = y.remoteAuthority;
							let T;
							return (
								y.type === "workspace"
									? (T = {
											workspace: await $.getWorkspaceIdentifier(v),
											label: S,
											remoteAuthority: I,
										})
									: y.type === "folder"
										? (T = { folderUri: v, label: S, remoteAuthority: I })
										: (T = { fileUri: v, label: S, remoteAuthority: I }),
								$.addRecentlyOpened([T])
							);
						},
					),
					m.$fk.registerCommand(
						"_workbench.getRecentlyOpened",
						async function (l) {
							return l.get(f.$cRb).getRecentlyOpened();
						},
					);
			},
		),
		define(
			de[853],
			he([
				1, 0, 4, 25, 449, 18, 31, 633, 57, 11, 100, 87, 27, 8, 78, 256, 43, 179,
				445, 99,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ltc = e.$Ktc = e.$Jtc = e.$Itc = e.$Htc = e.$Gtc = void 0);
				const s = (0, t.localize2)(2991, "Workspaces");
				class l extends r.$3X {
					static {
						this.ID = "workbench.action.files.openFile";
					}
					constructor() {
						super({
							id: l.ID,
							title: (0, t.localize2)(2992, "Open File..."),
							category: b.$ck.File,
							f1: !0,
							keybinding: {
								when: o.$8Lb.toNegated(),
								weight: p.KeybindingWeight.WorkbenchContrib,
								primary: h.KeyMod.CtrlCmd | h.KeyCode.KeyO,
							},
						});
					}
					async run(A, R) {
						return A.get(m.$IO).pickFileAndOpen({
							forceNewWindow: !1,
							telemetryExtraData: R,
						});
					}
				}
				e.$Gtc = l;
				class y extends r.$3X {
					static {
						this.ID = "workbench.action.files.openFolder";
					}
					constructor() {
						super({
							id: y.ID,
							title: (0, t.localize2)(2993, "Open Folder..."),
							category: b.$ck.File,
							f1: !0,
							precondition: u.$yPb,
							keybinding: {
								weight: p.KeybindingWeight.WorkbenchContrib,
								primary: void 0,
								linux: {
									primary: (0, h.$os)(h.$ps, h.KeyMod.CtrlCmd | h.KeyCode.KeyO),
								},
								win: {
									primary: (0, h.$os)(h.$ps, h.KeyMod.CtrlCmd | h.KeyCode.KeyO),
								},
							},
						});
					}
					async run(A, R) {
						return A.get(m.$IO).pickFolderAndOpen({
							forceNewWindow: !1,
							telemetryExtraData: R,
						});
					}
				}
				e.$Htc = y;
				class $ extends r.$3X {
					static {
						this.ID = "workbench.action.files.openFolderViaWorkspace";
					}
					constructor() {
						super({
							id: $.ID,
							title: (0, t.localize2)(2994, "Open Folder..."),
							category: b.$ck.File,
							f1: !0,
							precondition: c.$Kj.and(
								u.$yPb.toNegated(),
								u.$wPb.isEqualTo("workspace"),
							),
							keybinding: {
								weight: p.KeybindingWeight.WorkbenchContrib,
								primary: h.KeyMod.CtrlCmd | h.KeyCode.KeyO,
							},
						});
					}
					run(A) {
						return A.get(C.$ek).executeCommand(d.$pRb);
					}
				}
				e.$Itc = $;
				class v extends r.$3X {
					static {
						this.ID = "workbench.action.files.openFileFolder";
					}
					static {
						this.LABEL = (0, t.localize2)(2995, "Open...");
					}
					constructor() {
						super({
							id: v.ID,
							title: v.LABEL,
							category: b.$ck.File,
							f1: !0,
							precondition: c.$Kj.and(o.$8Lb, u.$yPb),
							keybinding: {
								weight: p.KeybindingWeight.WorkbenchContrib,
								primary: h.KeyMod.CtrlCmd | h.KeyCode.KeyO,
							},
						});
					}
					async run(A, R) {
						return A.get(m.$IO).pickFileFolderAndOpen({
							forceNewWindow: !1,
							telemetryExtraData: R,
						});
					}
				}
				e.$Jtc = v;
				class S extends r.$3X {
					static {
						this.ID = "workbench.action.openWorkspace";
					}
					constructor() {
						super({
							id: S.ID,
							title: (0, t.localize2)(2996, "Open Workspace from File..."),
							category: b.$ck.File,
							f1: !0,
							precondition: u.$zPb,
						});
					}
					async run(A, R) {
						return A.get(m.$IO).pickWorkspaceAndOpen({ telemetryExtraData: R });
					}
				}
				class I extends r.$3X {
					static {
						this.ID = "workbench.action.createAIProject";
					}
					constructor() {
						super({
							id: I.ID,
							title: {
								value: (0, t.localize)(2980, null),
								original: "Create Codebase with AI...",
							},
							category: b.$ck.File,
							f1: !0,
							precondition: u.$zPb,
						});
					}
					async run(A, R) {
						return A.get(f.$38b).renderModal();
					}
				}
				class T extends r.$3X {
					static {
						this.ID = "workbench.action.closeFolder";
					}
					constructor() {
						super({
							id: T.ID,
							title: (0, t.localize2)(2997, "Close Workspace"),
							category: s,
							f1: !0,
							precondition: c.$Kj.and(u.$wPb.notEqualsTo("empty"), u.$APb),
							keybinding: {
								weight: p.KeybindingWeight.WorkbenchContrib,
								primary: (0, h.$os)(h.$ps, h.KeyCode.KeyF),
								mac: { primary: (0, h.$os)(h.$qs, h.KeyCode.KeyF) },
							},
						});
					}
					async run(A) {
						const R = A.get(a.$asb),
							O = A.get(n.$r8);
						return R.openWindow({
							forceReuseWindow: !0,
							remoteAuthority: O.remoteAuthority,
						});
					}
				}
				class P extends r.$3X {
					static {
						this.ID = "workbench.action.openWorkspaceConfigFile";
					}
					constructor() {
						super({
							id: P.ID,
							title: (0, t.localize2)(
								2998,
								"Open Workspace Configuration File",
							),
							category: s,
							f1: !0,
							precondition: u.$wPb.isEqualTo("workspace"),
						});
					}
					async run(A) {
						const R = A.get(i.$Vi),
							O = A.get(E.$IY),
							B = R.getWorkspace().configuration;
						B && (await O.openEditor({ resource: B, options: { pinned: !0 } }));
					}
				}
				class k extends r.$3X {
					static {
						this.ID = "workbench.action.addRootFolder";
					}
					constructor() {
						super({
							id: k.ID,
							title: d.$oRb,
							category: s,
							f1: !0,
							precondition: c.$Kj.or(u.$zPb, u.$wPb.isEqualTo("workspace")),
						});
					}
					run(A) {
						return A.get(C.$ek).executeCommand(d.$nRb);
					}
				}
				e.$Ktc = k;
				class L extends r.$3X {
					static {
						this.ID = "workbench.action.removeRootFolder";
					}
					constructor() {
						super({
							id: L.ID,
							title: (0, t.localize2)(2999, "Remove Folder from Workspace..."),
							category: s,
							f1: !0,
							precondition: c.$Kj.and(
								u.$xPb.notEqualsTo("0"),
								c.$Kj.or(u.$zPb, u.$wPb.isEqualTo("workspace")),
							),
						});
					}
					async run(A) {
						const R = A.get(C.$ek),
							O = A.get(w.$mRb),
							B = await R.executeCommand(d.$qRb);
						B && (await O.removeFolders([B.uri]));
					}
				}
				e.$Ltc = L;
				class D extends r.$3X {
					static {
						this.ID = "workbench.action.saveWorkspaceAs";
					}
					constructor() {
						super({
							id: D.ID,
							title: (0, t.localize2)(3e3, "Save Workspace As..."),
							category: s,
							f1: !0,
							precondition: u.$zPb,
						});
					}
					async run(A) {
						const R = A.get(w.$mRb),
							O = A.get(i.$Vi),
							B = await R.pickNewWorkspacePath();
						if (B && (0, i.$fj)(B))
							switch (O.getWorkbenchState()) {
								case i.WorkbenchState.EMPTY:
								case i.WorkbenchState.FOLDER: {
									const U = O.getWorkspace().folders.map((z) => ({
										uri: z.uri,
									}));
									return R.createAndEnterWorkspace(U, B);
								}
								case i.WorkbenchState.WORKSPACE:
									return R.saveAndEnterWorkspace(B);
							}
					}
				}
				class M extends r.$3X {
					static {
						this.ID = "workbench.action.duplicateWorkspaceInNewWindow";
					}
					constructor() {
						super({
							id: M.ID,
							title: (0, t.localize2)(
								3001,
								"Duplicate As Workspace in New Window",
							),
							category: s,
							f1: !0,
							precondition: u.$zPb,
						});
					}
					async run(A) {
						const R = A.get(i.$Vi),
							O = A.get(w.$mRb),
							B = A.get(a.$asb),
							U = A.get(g.$cRb),
							z = A.get(n.$r8),
							F = R.getWorkspace().folders,
							x = z.remoteAuthority,
							H = await U.createUntitledWorkspace(F, x);
						return (
							await O.copyWorkspaceSettings(H),
							B.openWindow([{ workspaceUri: H.configPath }], {
								forceNewWindow: !0,
								remoteAuthority: x,
							})
						);
					}
				}
				(0, r.$4X)(k),
					(0, r.$4X)(L),
					(0, r.$4X)(l),
					(0, r.$4X)(y),
					(0, r.$4X)($),
					(0, r.$4X)(v),
					(0, r.$4X)(S),
					(0, r.$4X)(P),
					(0, r.$4X)(T),
					(0, r.$4X)(I),
					(0, r.$4X)(D),
					(0, r.$4X)(M),
					r.$ZX.appendMenuItem(r.$XX.MenubarFileMenu, {
						group: "2_open",
						command: { id: l.ID, title: (0, t.localize)(2981, null) },
						order: 1,
						when: o.$8Lb.toNegated(),
					}),
					r.$ZX.appendMenuItem(r.$XX.MenubarFileMenu, {
						group: "2_open",
						command: { id: y.ID, title: (0, t.localize)(2982, null) },
						order: 2,
						when: u.$yPb,
					}),
					r.$ZX.appendMenuItem(r.$XX.MenubarFileMenu, {
						group: "2_open",
						command: { id: $.ID, title: (0, t.localize)(2983, null) },
						order: 2,
						when: c.$Kj.and(u.$yPb.toNegated(), u.$wPb.isEqualTo("workspace")),
					}),
					r.$ZX.appendMenuItem(r.$XX.MenubarFileMenu, {
						group: "2_open",
						command: { id: v.ID, title: (0, t.localize)(2984, null) },
						order: 1,
						when: c.$Kj.and(o.$8Lb, u.$yPb),
					}),
					r.$ZX.appendMenuItem(r.$XX.MenubarFileMenu, {
						group: "2_open",
						command: { id: S.ID, title: (0, t.localize)(2985, null) },
						order: 3,
						when: u.$zPb,
					}),
					r.$ZX.appendMenuItem(r.$XX.MenubarFileMenu, {
						group: "3_workspace",
						command: { id: d.$nRb, title: (0, t.localize)(2986, null) },
						when: c.$Kj.or(u.$zPb, u.$wPb.isEqualTo("workspace")),
						order: 1,
					}),
					r.$ZX.appendMenuItem(r.$XX.MenubarFileMenu, {
						group: "3_workspace",
						command: { id: D.ID, title: (0, t.localize)(2987, null) },
						order: 2,
						when: u.$zPb,
					}),
					r.$ZX.appendMenuItem(r.$XX.MenubarFileMenu, {
						group: "3_workspace",
						command: { id: M.ID, title: (0, t.localize)(2988, null) },
						order: 3,
						when: u.$zPb,
					}),
					r.$ZX.appendMenuItem(r.$XX.MenubarFileMenu, {
						group: "6_close",
						command: { id: T.ID, title: (0, t.localize)(2989, null) },
						order: 3,
						when: c.$Kj.and(u.$wPb.isEqualTo("folder"), u.$APb),
					}),
					r.$ZX.appendMenuItem(r.$XX.MenubarFileMenu, {
						group: "6_close",
						command: { id: T.ID, title: (0, t.localize)(2990, null) },
						order: 3,
						when: c.$Kj.and(u.$wPb.isEqualTo("workspace"), u.$APb),
					});
			},
		),
		define(
			de[362],
			he([
				1, 0, 323, 7, 24, 489, 6, 3, 197, 266, 23, 12, 19, 9, 347, 22, 5, 73,
				41, 30, 25, 256, 44, 18, 87, 85, 449, 75, 2224,
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
					(e.$VSb =
						e.$TSb =
						e.$SSb =
						e.$RSb =
						e.$QSb =
						e.$OSb =
						e.$MSb =
						e.$LSb =
							void 0),
					(e.$NSb = D),
					(e.$PSb = N),
					(e.$USb = U),
					(e.$WSb = H);
				class k {
					constructor(V) {
						this.identifier = V;
					}
				}
				e.$LSb = k;
				class L {
					constructor(V) {
						this.identifier = V;
					}
				}
				e.$MSb = L;
				async function D(q) {
					const V = [],
						G = r.$EK.uriList.toLowerCase();
					if (q.has(G))
						try {
							const K = await q.get(G)?.asString(),
								J = JSON.stringify(E.$ZL.parse(K ?? ""));
							V.push(...(0, n.$kzb)(J));
						} catch {}
					return V;
				}
				let M = class {
					constructor(V, G, K, J, W, X, Y, ie) {
						(this.a = V),
							(this.b = G),
							(this.c = K),
							(this.d = J),
							(this.f = W),
							(this.g = X),
							(this.h = Y),
							(this.i = ie);
					}
					async handleDrop(V, G, K, J, W) {
						const X = await this.i.invokeFunction((ne) => (0, n.$jzb)(ne, V));
						if (!X.length) return;
						if ((await this.g.focus(G), this.a.allowWorkspaceOpen)) {
							const ne = (0, w.$Lb)(
								X.filter(
									(ee) =>
										ee.allowWorkspaceOpen &&
										ee.resource?.scheme === u.Schemas.file,
								).map((ee) => ee.resource),
							);
							if (ne.length > 0 && (await this.j(ne))) return;
						}
						const Y = (0, w.$Lb)(
							X.filter(
								(ne) => ne.isExternal && ne.resource?.scheme === u.Schemas.file,
							).map((ne) => ne.resource),
						);
						Y.length &&
							this.c.addRecentlyOpened(Y.map((ne) => ({ fileUri: ne })));
						const ie = K?.();
						await this.d.openEditors(
							X.map((ne) => ({
								...ne,
								resource: ne.resource,
								options: { ...ne.options, ...W, pinned: !0 },
							})),
							ie,
							{ validateTrust: !0 },
						),
							J?.(ie);
					}
					async j(V) {
						const G = [],
							K = [];
						return (
							await Promise.all(
								V.map(async (J) => {
									if ((0, s.$fj)(J)) {
										G.push({ workspaceUri: J });
										return;
									}
									try {
										const W = await this.b.stat(J);
										W.isDirectory &&
											(G.push({ folderUri: W.resource }),
											K.push({ uri: W.resource }));
									} catch {}
								}),
							),
							G.length === 0
								? !1
								: (G.length > K.length || K.length === 1
										? await this.g.openWindow(G)
										: (0, s.$bj)(this.h.getWorkspace())
											? await this.f.addFolders(K)
											: await this.f.createAndEnterWorkspace(K),
									!0)
						);
					}
				};
				(e.$OSb = M),
					(e.$OSb = M =
						Ne(
							[
								j(1, g.$ll),
								j(2, l.$cRb),
								j(3, $.$IY),
								j(4, I.$mRb),
								j(5, v.$asb),
								j(6, s.$Vi),
								j(7, p.$Li),
							],
							M,
						));
				function N(q, V, G, K) {
					if (V.length === 0 || !G.dataTransfer) return;
					const J = q.get(S.$kZ),
						W = q.get($.$IY),
						X = q.get(g.$ll),
						Y = q.get(o.$3N),
						ie = (0, w.$Lb)(
							V.map((Q) =>
								c.URI.isUri(Q)
									? { resource: Q }
									: (0, y.$x1)(Q)
										? c.URI.isUri(Q.editor.resource)
											? { resource: Q.editor.resource }
											: void 0
										: Q,
							),
						),
						ne = ie.filter(({ resource: Q }) => X.hasProvider(Q));
					if (!K?.disableStandardTransfer) {
						const Q = a.$l
							? `\r
`
							: `
`;
						G.dataTransfer.setData(
							t.$Ohb.TEXT,
							ne
								.map(({ resource: se }) => Y.getUriLabel(se, { noPrefix: !0 }))
								.join(Q),
						);
						const Z = ne.find(({ isDirectory: se }) => !se);
						if (Z) {
							const se = u.$7g.uriToFileUri(Z.resource);
							se.scheme === u.Schemas.file &&
								G.dataTransfer.setData(
									t.$Ohb.DOWNLOAD_URL,
									[r.$EK.binary, (0, h.$kh)(Z.resource), se.toString()].join(
										":",
									),
								);
						}
					}
					const ee = ne.filter(({ isDirectory: Q }) => !Q);
					ee.length &&
						G.dataTransfer.setData(
							t.$Ohb.RESOURCES,
							JSON.stringify(ee.map(({ resource: Q }) => Q.toString())),
						);
					const _ = b.$Io.as(n.$nzb.DragAndDropContribution).getAll();
					for (const Q of _) Q.setData(ie, G);
					const te = [];
					for (const Q of V) {
						let Z;
						if ((0, y.$x1)(Q)) {
							const se = Q.editor.toUntyped({ preserveViewState: Q.groupId });
							se && (Z = { ...se, resource: y.$A1.getCanonicalUri(se) });
						} else if (c.URI.isUri(Q)) {
							const { selection: se, uri: re } = (0, f.$9rb)(Q);
							Z = { resource: re, options: se ? { selection: se } : void 0 };
						} else Q.isDirectory || (Z = { resource: Q.resource });
						if (Z) {
							{
								const se = Z.resource;
								if (se) {
									const re = J.files.get(se);
									re &&
										(typeof Z.languageId != "string" &&
											(Z.languageId = re.getLanguageId()),
										typeof Z.encoding != "string" &&
											(Z.encoding = re.getEncoding()),
										typeof Z.contents != "string" &&
											re.isDirty() &&
											!re.textEditorModel.isTooLargeForHeapOperation() &&
											(Z.contents = re.textEditorModel.getValue())),
										Z.options?.viewState ||
											(Z.options = {
												...Z.options,
												viewState: (() => {
													for (const le of W.visibleEditorPanes)
														if ((0, h.$gh)(le.input.resource, se)) {
															const oe = le.getViewState();
															if (oe) return oe;
														}
												})(),
											});
								}
							}
							te.push(Z);
						}
					}
					if (te.length) {
						G.dataTransfer.setData(n.$hzb.EDITORS, (0, m.$hi)(te));
						const Q = [];
						for (const Z of te)
							Z.resource
								? Q.push(Z.resource)
								: (0, y.$j1)(Z)
									? Z.modified.resource && Q.push(Z.modified.resource)
									: (0, y.$m1)(Z)
										? Z.primary.resource && Q.push(Z.primary.resource)
										: (0, y.$o1)(Z) && Q.push(Z.result.resource);
						K?.disableStandardTransfer ||
							G.dataTransfer.setData(
								r.$EK.uriList,
								E.$ZL.create(Q.slice(0, 1)),
							),
							G.dataTransfer.setData(t.$Ohb.INTERNAL_URI_LIST, E.$ZL.create(Q));
					}
				}
				class A {
					constructor(V, G) {
						(this.a = V), (this.b = G);
					}
					update(V) {}
					getData() {
						return { type: this.a, id: this.b };
					}
				}
				e.$QSb = A;
				class R {
					constructor(V) {
						this.a = V;
					}
					get id() {
						return this.a;
					}
				}
				e.$RSb = R;
				class O {
					constructor(V) {
						this.a = V;
					}
					get id() {
						return this.a;
					}
				}
				e.$SSb = O;
				class B extends d.$1c {
					static get INSTANCE() {
						return B.a || ((B.a = new B()), (0, d.$Tc)(B.a)), B.a;
					}
					constructor() {
						super(),
							(this.b = n.$ozb.getInstance()),
							(this.c = this.D(new C.$re())),
							(this.f = this.D(new C.$re())),
							this.D(
								this.f.event((V) => {
									const G = V.dragAndDropData.getData().id,
										K = V.dragAndDropData.getData().type;
									this.g(K)?.getData().id === G &&
										this.b.clearData(K === "view" ? O.prototype : R.prototype);
								}),
							);
					}
					g(V) {
						if (this.b.hasData(V === "view" ? O.prototype : R.prototype)) {
							const G = this.b.getData(
								V === "view" ? O.prototype : R.prototype,
							);
							if (G && G[0]) return new A(V, G[0].id);
						}
					}
					h(V, G) {
						this.b.setData(
							[G === "view" ? new O(V) : new R(V)],
							G === "view" ? O.prototype : R.prototype,
						);
					}
					registerTarget(V, G) {
						const K = new d.$Zc();
						return (
							K.add(
								new i.$Hhb(V, {
									onDragEnter: (J) => {
										if ((J.preventDefault(), G.onDragEnter)) {
											const W = this.g("composite") || this.g("view");
											W && G.onDragEnter({ eventData: J, dragAndDropData: W });
										}
									},
									onDragLeave: (J) => {
										const W = this.g("composite") || this.g("view");
										G.onDragLeave &&
											W &&
											G.onDragLeave({ eventData: J, dragAndDropData: W });
									},
									onDrop: (J) => {
										if (G.onDrop) {
											const W = this.g("composite") || this.g("view");
											if (!W) return;
											G.onDrop({ eventData: J, dragAndDropData: W }),
												this.f.fire({ eventData: J, dragAndDropData: W });
										}
									},
									onDragOver: (J) => {
										if ((J.preventDefault(), G.onDragOver)) {
											const W = this.g("composite") || this.g("view");
											if (!W) return;
											G.onDragOver({ eventData: J, dragAndDropData: W });
										}
									},
								}),
							),
							G.onDragStart &&
								this.c.event(
									(J) => {
										G.onDragStart(J);
									},
									this,
									K,
								),
							G.onDragEnd &&
								this.f.event(
									(J) => {
										G.onDragEnd(J);
									},
									this,
									K,
								),
							this.D(K)
						);
					}
					registerDraggable(V, G, K) {
						V.draggable = !0;
						const J = new d.$Zc();
						return (
							J.add(
								new i.$Hhb(V, {
									onDragStart: (W) => {
										const { id: X, type: Y } = G();
										this.h(X, Y),
											W.dataTransfer?.setDragImage(V, 0, 0),
											this.c.fire({ eventData: W, dragAndDropData: this.g(Y) });
									},
									onDragEnd: (W) => {
										const { type: X } = G(),
											Y = this.g(X);
										Y && this.f.fire({ eventData: W, dragAndDropData: Y });
									},
									onDragEnter: (W) => {
										if (K.onDragEnter) {
											const X = this.g("composite") || this.g("view");
											if (!X) return;
											X && K.onDragEnter({ eventData: W, dragAndDropData: X });
										}
									},
									onDragLeave: (W) => {
										const X = this.g("composite") || this.g("view");
										X && K.onDragLeave?.({ eventData: W, dragAndDropData: X });
									},
									onDrop: (W) => {
										if (K.onDrop) {
											const X = this.g("composite") || this.g("view");
											if (!X) return;
											K.onDrop({ eventData: W, dragAndDropData: X }),
												this.f.fire({ eventData: W, dragAndDropData: X });
										}
									},
									onDragOver: (W) => {
										if (K.onDragOver) {
											const X = this.g("composite") || this.g("view");
											if (!X) return;
											K.onDragOver({ eventData: W, dragAndDropData: X });
										}
									},
								}),
							),
							K.onDragStart &&
								this.c.event(
									(W) => {
										K.onDragStart(W);
									},
									this,
									J,
								),
							K.onDragEnd &&
								this.f.event(
									(W) => {
										K.onDragEnd(W);
									},
									this,
									J,
								),
							this.D(J)
						);
					}
				}
				e.$TSb = B;
				function U(q, V, G) {
					q && (q.dropEffect = G ? V : "none");
				}
				let z = class {
					constructor(V, G) {
						(this.a = V), (this.b = G);
					}
					getDragURI(V) {
						const G = this.a(V);
						return G ? G.toString() : null;
					}
					getDragLabel(V) {
						const G = (0, w.$Lb)(V.map(this.a));
						return G.length === 1
							? (0, h.$kh)(G[0])
							: G.length > 1
								? String(G.length)
								: void 0;
					}
					onDragStart(V, G) {
						const K = [];
						for (const J of V.elements) {
							const W = this.a(J);
							W && K.push(W);
						}
						K.length && this.b.invokeFunction((J) => N(J, K, G));
					}
					onDragOver(V, G, K, J, W) {
						return !1;
					}
					drop(V, G, K, J, W) {}
					dispose() {}
				};
				(e.$VSb = z), (e.$VSb = z = Ne([j(1, p.$Li)], z));
				class F extends d.$1c {
					static {
						this.a = "monaco-workbench-global-dragged-over";
					}
					constructor() {
						super(),
							(this.b = this.D(new P.$Efb(F.a))),
							(this.f = !1),
							this.c();
					}
					c() {
						this.D(
							C.Event.runAndSubscribe(
								i.onDidRegisterWindow,
								({ window: V, disposables: G }) => {
									G.add((0, i.$0fb)(V, i.$$gb.DRAG_OVER, () => this.g(!1), !0)),
										G.add(
											(0, i.$0fb)(V, i.$$gb.DRAG_LEAVE, () => this.h(!1), !0),
										);
								},
								{ window: T.$Bfb, disposables: this.B },
							),
						),
							this.D(
								this.b.onDidReceiveData((V) => {
									V === !0 ? this.g(!0) : this.h(!0);
								}),
							);
					}
					get isDraggedOver() {
						return this.f;
					}
					g(V) {
						this.f !== !0 && ((this.f = !0), V || this.b.postData(!0));
					}
					h(V) {
						this.f !== !1 && ((this.f = !1), V || this.b.postData(!1));
					}
				}
				const x = new F();
				function H() {
					return x.isDraggedOver;
				}
			},
		),
		define(
			de[1349],
			he([
				1, 0, 4, 50, 7, 31, 3, 49, 35, 260, 5, 323, 39, 6, 362, 198, 14, 26, 72,
				15, 10, 51,
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
			) {
				"use strict";
				var y, $;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$erc =
						e.$drc =
						e.$crc =
						e.$brc =
						e.$arc =
						e.$_qc =
						e.$$qc =
							void 0);
				class v extends i.$rj {
					constructor(N) {
						super(N.id, N.name, N.classNames?.join(" "), !0),
							(this.g = N),
							(this.a = this.D(new c.$re())),
							(this.onDidChangeCompositeBarActionItem = this.a.event),
							(this.b = this.D(new c.$re())),
							(this.onDidChangeActivity = this.b.event);
					}
					get compositeBarActionItem() {
						return this.g;
					}
					set compositeBarActionItem(N) {
						(this.n = N.name), (this.g = N), this.a.fire(this);
					}
					get activity() {
						return this.f;
					}
					set activity(N) {
						(this.f = N), this.b.fire(N);
					}
					activate() {
						this.checked || this.J(!0);
					}
					deactivate() {
						this.checked && this.J(!1);
					}
				}
				e.$$qc = v;
				let S = class extends g.$$ib {
					static {
						y = this;
					}
					static {
						this.b = 0;
					}
					constructor(N, A, R, O, B, U, z) {
						super(null, N, A),
							(this.P = R),
							(this.Q = O),
							(this.R = B),
							(this.S = U),
							(this.U = z),
							(this.I = this.D(new C.$2c())),
							(this.M = this.D(new C.$Zc())),
							(this.O = new b.$Yh(() => this.showHover(), 0)),
							(this.m = A),
							this.D(this.Q.onDidColorThemeChange(this.Y, this)),
							this.D(N.onDidChangeCompositeBarActionItem(() => this.Z())),
							this.D(
								c.Event.filter(
									z.onDidUpdateKeybindings,
									() => this.L !== this.eb(),
								)(() => this.cb()),
							),
							this.D(N.onDidChangeActivity(() => this.ab())),
							this.D((0, C.$Yc)(() => this.O.cancel()));
					}
					get W() {
						return this._action.compositeBarActionItem;
					}
					X() {
						const N = this.Q.getColorTheme(),
							A = this.m.colors(N);
						if (this.g) {
							if (this.m.icon) {
								const R = this._action.checked
									? A.activeForegroundColor
									: A.inactiveForegroundColor;
								this.W.iconUrl
									? ((this.g.style.backgroundColor = R ? R.toString() : ""),
										(this.g.style.color = ""))
									: ((this.g.style.color = R ? R.toString() : ""),
										(this.g.style.backgroundColor = ""));
							} else {
								const R = this._action.checked
										? A.activeForegroundColor
										: A.inactiveForegroundColor,
									O = this._action.checked ? A.activeBorderBottomColor : null;
								(this.g.style.color = R ? R.toString() : ""),
									(this.g.style.borderBottomColor = O ? O.toString() : "");
							}
							this.c.style.setProperty(
								"--insert-border-color",
								A.dragAndDropBorder ? A.dragAndDropBorder.toString() : "",
							);
						}
						if (this.r) {
							const R = A.badgeForeground ?? N.getColor(l.$2P),
								O = A.badgeBackground ?? N.getColor(l.$1P),
								B = N.getColor(l.$OP);
							(this.r.style.color = R ? R.toString() : ""),
								(this.r.style.backgroundColor = O ? O.toString() : ""),
								(this.r.style.borderStyle =
									B && !this.m.compact ? "solid" : ""),
								(this.r.style.borderWidth = B ? "1px" : ""),
								(this.r.style.borderColor = B ? B.toString() : "");
						}
					}
					render(N) {
						super.render(N),
							(this.c = N),
							this.m.icon && this.c.classList.add("icon"),
							this.m.hasPopup
								? (this.c.setAttribute("role", "button"),
									this.c.setAttribute("aria-haspopup", "true"))
								: this.c.setAttribute("role", "tab"),
							this.D(
								(0, w.$0fb)(this.c, w.$$gb.MOUSE_DOWN, () => {
									this.c.classList.add("clicked");
								}),
							),
							this.D(
								(0, w.$0fb)(this.c, w.$$gb.MOUSE_UP, () => {
									this.J && clearTimeout(this.J),
										(this.J = setTimeout(() => {
											this.c.classList.remove("clicked");
										}, 800));
								}),
							),
							(this.g = (0, w.$fhb)(N, (0, w.$)("a"))),
							(this.h = (0, w.$fhb)(N, (0, w.$)(".badge"))),
							(this.r = (0, w.$fhb)(this.h, (0, w.$)(".badge-content"))),
							(0, w.$fhb)(N, (0, w.$)(".active-item-indicator")),
							(0, w.hide)(this.h),
							this.Z(),
							this.X(),
							this.fb();
					}
					Y(N) {
						this.X();
					}
					Z() {
						this.u(), this.ab(), this.cb(), this.X();
					}
					ab() {
						const N = this.action;
						if (!this.h || !this.r || !(N instanceof v)) return;
						const A = N.activity;
						this.I.clear(), (0, w.$9fb)(this.r), (0, w.hide)(this.h);
						const R = this.P(this.W.id);
						if (A && R) {
							const { badge: O } = A,
								B = [];
							if ((this.m.compact && B.push("compact"), O instanceof r.$0qc))
								(0, w.show)(this.h), B.push("progress-badge");
							else if (O instanceof r.$8qc && O.number) {
								let U = O.number.toString();
								if (O.number > 999) {
									const z = O.number / 1e3,
										F = Math.floor(z);
									z > F ? (U = `${F}K+`) : (U = `${z}K`);
								}
								this.m.compact && U.length >= 3 && B.push("compact-content"),
									(this.r.textContent = U),
									(0, w.show)(this.h);
							}
							B.length &&
								(this.h.classList.add(...B),
								(this.I.value = (0, C.$Yc)(() =>
									this.h.classList.remove(...B),
								)));
						}
						this.cb();
					}
					u() {
						(this.g.className = "action-label"),
							this.W.classNames && this.g.classList.add(...this.W.classNames),
							this.m.icon || (this.g.textContent = this.action.label);
					}
					cb() {
						const N = this.db();
						[this.g, this.h, this.c].forEach((A) => {
							A &&
								(A.setAttribute("aria-label", N),
								A.setAttribute("title", ""),
								A.removeAttribute("title"));
						});
					}
					db() {
						this.L = this.eb();
						let N = this.L
							? (0, t.localize)(3046, null, this.W.name, this.L)
							: this.W.name;
						const A = this.action.activity?.badge;
						return (
							A?.getDescription() &&
								(N = (0, t.localize)(3047, null, N, A.getDescription())),
							N
						);
					}
					eb() {
						return (
							this.W.keybindingId
								? this.U.lookupKeybinding(this.W.keybindingId)
								: null
						)?.getLabel();
					}
					fb() {
						this.M.clear(),
							this.cb(),
							this.M.add(
								(0, w.$0fb)(
									this.c,
									w.$$gb.MOUSE_OVER,
									() => {
										this.O.isScheduled() ||
											(Date.now() - y.b < 200
												? this.showHover(!0)
												: this.O.schedule(
														this.S.getValue("workbench.hover.delay"),
													));
									},
									!0,
								),
							),
							this.M.add(
								(0, w.$0fb)(
									this.c,
									w.$$gb.MOUSE_LEAVE,
									(N) => {
										N.target === this.c &&
											((y.b = Date.now()), this.R.hideHover(), this.O.cancel());
									},
									!0,
								),
							),
							this.M.add(
								(0, C.$Yc)(() => {
									this.R.hideHover(), this.O.cancel();
								}),
							);
					}
					showHover(N = !1) {
						if (this.N && !this.N.isDisposed) return;
						const A = this.m.hoverOptions.position();
						this.N = this.R.showHover({
							target: this.c,
							content: this.db(),
							position: { hoverPosition: A },
							persistence: { hideOnKeyDown: !0 },
							appearance: {
								showPointer: !0,
								compact: !0,
								skipFadeInAnimation: N,
							},
						});
					}
					dispose() {
						super.dispose(), this.J && clearTimeout(this.J), this.h.remove();
					}
				};
				(e.$_qc = S),
					(e.$_qc =
						S =
						y =
							Ne([j(3, m.$iP), j(4, f.$Uyb), j(5, s.$gj), j(6, h.$uZ)], S));
				class I extends v {
					constructor(N) {
						super({
							id: "additionalComposites.action",
							name: (0, t.localize)(3048, null),
							classNames: o.ThemeIcon.asClassNameArray(p.$ak.more),
						}),
							(this.c = N);
					}
					async run() {
						this.c();
					}
				}
				e.$arc = I;
				let T = class extends S {
					constructor(N, A, R, O, B, U, z, F, x, H, q, V) {
						super(
							N,
							{ icon: !0, colors: U, hasPopup: !0, hoverOptions: z },
							() => !0,
							x,
							H,
							q,
							V,
						),
							(this.a = A),
							(this.s = R),
							(this.gb = O),
							(this.hb = B),
							(this.ib = F);
					}
					showMenu() {
						this.ib.showContextMenu({
							getAnchor: () => this.c,
							getActions: () => this.jb(),
							getCheckedActionsRepresentation: () => "radio",
						});
					}
					jb() {
						return this.a().map((N) => {
							const A = this.hb(N.id);
							A.checked = this.s() === A.id;
							const R = this.gb(N.id);
							let O;
							return (
								R instanceof r.$8qc && (O = R.number),
								O
									? (A.label = (0, t.localize)(3049, null, N.name, O))
									: (A.label = N.name || ""),
								A
							);
						});
					}
				};
				(e.$brc = T),
					(e.$brc = T =
						Ne(
							[
								j(7, d.$Xxb),
								j(8, m.$iP),
								j(9, f.$Uyb),
								j(10, s.$gj),
								j(11, h.$uZ),
							],
							T,
						));
				let P = class extends i.$rj {
					constructor(N) {
						super("activitybar.manage.extension", (0, t.localize)(3050, null)),
							(this.a = N);
					}
					run(N) {
						return this.a.executeCommand("_extensions.manage", N);
					}
				};
				P = Ne([j(0, E.$ek)], P);
				let k = class extends S {
					static {
						$ = this;
					}
					constructor(N, A, R, O, B, U, z, F, x, H, q, V, G, K) {
						super(A, N, F.areBadgesEnabled.bind(F), V, G, K, H),
							(this.s = A),
							(this.gb = R),
							(this.hb = O),
							(this.ib = B),
							(this.jb = U),
							(this.kb = z),
							(this.lb = F),
							(this.mb = x),
							$.a || ($.a = q.createInstance(P));
					}
					render(N) {
						super.render(N),
							this.H(),
							this.t(),
							this.D(
								(0, w.$0fb)(this.c, w.$$gb.CONTEXT_MENU, (R) => {
									w.$ahb.stop(R, !0), this.ob(N);
								}),
							);
						let A;
						this.D(
							n.$TSb.INSTANCE.registerDraggable(
								this.c,
								() => ({ type: "composite", id: this.W.id }),
								{
									onDragOver: (R) => {
										const O =
											R.dragAndDropData.getData().id !== this.W.id &&
											this.kb.onDragOver(
												R.dragAndDropData,
												this.W.id,
												R.eventData,
											);
										(0, n.$USb)(R.eventData.dataTransfer, "move", O),
											(A = this.nb(N, O, R.eventData));
									},
									onDragLeave: (R) => {
										A = this.nb(N, !1, R.eventData);
									},
									onDragEnd: (R) => {
										A = this.nb(N, !1, R.eventData);
									},
									onDrop: (R) => {
										w.$ahb.stop(R.eventData, !0),
											this.kb.drop(
												R.dragAndDropData,
												this.W.id,
												R.eventData,
												A,
											),
											(A = this.nb(N, !1, R.eventData));
									},
									onDragStart: (R) => {
										R.dragAndDropData.getData().id === this.W.id &&
											(R.eventData.dataTransfer &&
												(R.eventData.dataTransfer.effectAllowed = "move"),
											this.blur());
									},
								},
							),
						),
							[this.h, this.g].forEach((R) =>
								this.D(
									new a.$Nhb(R, () => {
										this.action.checked || this.action.run();
									}),
								),
							),
							this.X();
					}
					nb(N, A, R) {
						const O = N.getBoundingClientRect(),
							B = R.clientX,
							U = R.clientY,
							z = O.bottom - O.top,
							F = O.right - O.left,
							x = U <= O.top + z * 0.4,
							H = U > O.bottom - z * 0.4,
							q = U <= O.top + z * 0.5,
							V = B <= O.left + F * 0.4,
							G = B > O.right - F * 0.4,
							K = B <= O.left + F * 0.5,
							J = N.classList,
							W = {
								vertical: J.contains("top")
									? "top"
									: J.contains("bottom")
										? "bottom"
										: void 0,
								horizontal: J.contains("left")
									? "left"
									: J.contains("right")
										? "right"
										: void 0,
							},
							X = x || (q && !W.vertical) || (!H && W.vertical === "top"),
							Y = H || (!q && !W.vertical) || (!x && W.vertical === "bottom"),
							ie = V || (K && !W.horizontal) || (!G && W.horizontal === "left"),
							ne =
								G || (!K && !W.horizontal) || (!V && W.horizontal === "right");
						if (
							(N.classList.toggle("top", A && X),
							N.classList.toggle("bottom", A && Y),
							N.classList.toggle("left", A && ie),
							N.classList.toggle("right", A && ne),
							!!A)
						)
							return { verticallyBefore: X, horizontallyBefore: ie };
					}
					ob(N) {
						const A = [this.gb, this.hb],
							R = this.ib(this.W.id);
						R.length && A.push(...R),
							this.s.compositeBarActionItem.extensionId &&
								(A.push(new i.$tj()), A.push($.a)),
							this.lb.isPinned(this.W.id)
								? ((this.gb.label = (0, t.localize)(3051, null, this.W.name)),
									(this.gb.checked = !1))
								: (this.gb.label = (0, t.localize)(3052, null, this.W.name)),
							this.lb.areBadgesEnabled(this.W.id)
								? (this.hb.label = (0, t.localize)(3053, null))
								: (this.hb.label = (0, t.localize)(3054, null));
						const U = this.jb();
						U.length && (A.push(new i.$tj()), A.push(...U));
						const z = (0, w.$tgb)(N),
							F = { x: Math.floor(z.left + z.width / 2), y: z.top + z.height };
						this.mb.showContextMenu({
							getAnchor: () => F,
							getActions: () => A,
							getActionsContext: () => this.W.id,
						});
					}
					H() {
						this.action.checked
							? (this.c.classList.add("checked"),
								this.c.setAttribute("aria-label", this.z() ?? this.c.title),
								this.c.setAttribute("aria-expanded", "true"),
								this.c.setAttribute("aria-selected", "true"))
							: (this.c.classList.remove("checked"),
								this.c.setAttribute("aria-label", this.z() ?? this.c.title),
								this.c.setAttribute("aria-expanded", "false"),
								this.c.setAttribute("aria-selected", "false")),
							this.X();
					}
					t() {
						this.element &&
							(this.action.enabled
								? this.element.classList.remove("disabled")
								: this.element.classList.add("disabled"));
					}
					dispose() {
						super.dispose(), this.g.remove();
					}
				};
				(e.$crc = k),
					(e.$crc =
						k =
						$ =
							Ne(
								[
									j(8, d.$Xxb),
									j(9, h.$uZ),
									j(10, u.$Li),
									j(11, m.$iP),
									j(12, f.$Uyb),
									j(13, s.$gj),
								],
								k,
							));
				class L extends i.$rj {
					constructor(N, A) {
						super(
							"show.toggleCompositePinned",
							N ? N.name : (0, t.localize)(3055, null),
						),
							(this.a = N),
							(this.b = A),
							(this.checked = !!this.a && this.b.isPinned(this.a.id));
					}
					async run(N) {
						const A = this.a ? this.a.id : N;
						this.b.isPinned(A) ? this.b.unpin(A) : this.b.pin(A);
					}
				}
				e.$drc = L;
				class D extends i.$rj {
					constructor(N, A) {
						super(
							"show.toggleCompositeBadge",
							N ? N.name : (0, t.localize)(3056, null),
						),
							(this.a = N),
							(this.b = A),
							(this.checked = !1);
					}
					async run(N) {
						const A = this.a ? this.a.id : N;
						this.b.toggleBadgeEnablement(A);
					}
				}
				e.$erc = D;
			},
		),
		define(
			de[4007],
			he([1, 0, 4, 50, 5, 105, 1349, 7, 168, 49, 235, 28, 6, 60, 362, 159]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Muc = e.$Luc = void 0);
				class p {
					constructor(s, l, y, $, v, S) {
						(this.a = s),
							(this.b = l),
							(this.d = y),
							(this.f = $),
							(this.g = v),
							(this.h = S);
					}
					drop(s, l, y, $) {
						const v = s.getData();
						if (v.type === "composite") {
							const S = this.a.getViewContainerById(v.id);
							this.a.getViewContainerLocation(S) === this.b
								? l && this.g(v.id, l, $)
								: this.a.moveViewContainerToLocation(
										S,
										this.b,
										this.j(l, $),
										"dnd",
									);
						}
						if (v.type === "view") {
							const S = this.a.getViewDescriptorById(v.id);
							if (S && S.canMoveView) {
								this.a.moveViewToLocation(S, this.b, "dnd");
								const I = this.a.getViewContainerByViewId(S.id);
								l && this.g(I.id, l, $),
									this.f(I.id, !0).then((T) => {
										T?.openView(S.id, !0);
									});
							}
						}
					}
					onDragEnter(s, l, y) {
						return this.k(s, l);
					}
					onDragOver(s, l, y) {
						return this.k(s, l);
					}
					j(s, l) {
						if (!s) return;
						const y = this.h(),
							$ =
								this.d === E.ActionsOrientation.HORIZONTAL
									? l?.horizontallyBefore
									: l?.verticallyBefore;
						return (
							y.filter((v) => v.visible).findIndex((v) => v.id === s) +
							($ ? 0 : 1)
						);
					}
					k(s, l) {
						const y = s.getData();
						if (y.type === "composite") {
							const $ = this.a.getViewContainerById(y.id);
							return this.a.getViewContainerLocation($) === this.b
								? y.id !== l
								: !0;
						} else {
							const $ = this.a.getViewDescriptorById(y.id);
							return !(!$ || !$.canMoveView);
						}
					}
				}
				e.$Luc = p;
				let o = class extends u.$Uhb {
					constructor(s, l, y, $, v) {
						super(),
							(this.w = l),
							(this.y = y),
							(this.J = $),
							(this.L = v),
							(this.a = this.D(new h.$re())),
							(this.onDidChange = this.a.event),
							(this.r = new f(s, l)),
							(this.s = []),
							(this.t = new Map()),
							this.P(this.r.visibleItems);
					}
					getCompositeBarItems() {
						return [...this.r.items];
					}
					setCompositeBarItems(s) {
						this.r.setItems(s), this.Q();
					}
					getPinnedComposites() {
						return this.r.pinnedItems;
					}
					getVisibleComposites() {
						return this.r.visibleItems;
					}
					create(s) {
						const l = s.appendChild((0, d.$)(".composite-bar"));
						(this.g = this.D(
							new E.$eib(l, {
								actionViewItemProvider: ($, v) => {
									if ($ instanceof C.$arc) return this.n;
									const S = this.r.findItem($.id);
									return (
										S &&
										this.y.createInstance(
											C.$crc,
											{
												...v,
												draggable: !0,
												colors: this.w.colors,
												icon: this.w.icon,
												hoverOptions: this.w.activityHoverOptions,
												compact: this.w.compact,
											},
											$,
											S.pinnedAction,
											S.toggleBadgeAction,
											(I) => this.w.getContextMenuActionsForComposite(I),
											() => this.getContextMenuActions(),
											this.w.dndHandler,
											this,
										)
									);
								},
								orientation: this.w.orientation,
								ariaLabel: (0, t.localize)(3045, null),
								ariaRole: "tablist",
								preventLoopNavigation: this.w.preventLoopNavigation,
								triggerKeys: { keyDown: !0 },
							}),
						)),
							this.D(
								(0, d.$0fb)(s, d.$$gb.CONTEXT_MENU, ($) =>
									this.S((0, d.getWindow)(s), $),
								),
							),
							this.D(g.$Qhb.addTarget(s)),
							this.D(
								(0, d.$0fb)(s, g.EventType.Contextmenu, ($) =>
									this.S((0, d.getWindow)(s), $),
								),
							);
						let y;
						return (
							this.D(
								n.$TSb.INSTANCE.registerTarget(s, {
									onDragOver: ($) => {
										const v = this.getVisibleComposites();
										if (
											!v.length ||
											($.eventData.target && (0, d.$Bgb)($.eventData.target, l))
										) {
											y = this.N(s, !1, !1, !0);
											return;
										}
										const S = this.M(l, $.eventData),
											I = S ? v[0] : v[v.length - 1],
											T = this.w.dndHandler.onDragOver(
												$.dragAndDropData,
												I.id,
												$.eventData,
											);
										(0, n.$USb)($.eventData.dataTransfer, "move", T),
											(y = this.N(s, T, S, !0));
									},
									onDragLeave: ($) => {
										y = this.N(s, !1, !1, !1);
									},
									onDragEnd: ($) => {
										y = this.N(s, !1, !1, !1);
									},
									onDrop: ($) => {
										const v = this.getVisibleComposites();
										if (v.length) {
											const S = this.M(l, $.eventData) ? v[0] : v[v.length - 1];
											this.w.dndHandler.drop(
												$.dragAndDropData,
												S.id,
												$.eventData,
												y,
											);
										}
										y = this.N(s, !1, !1, !1);
									},
								}),
							),
							l
						);
					}
					M(s, l) {
						const y = s.getBoundingClientRect(),
							$ = l.clientX,
							v = l.clientY;
						switch (this.w.orientation) {
							case E.ActionsOrientation.HORIZONTAL:
								return $ < y.left;
							case E.ActionsOrientation.VERTICAL:
								return v < y.top;
						}
					}
					N(s, l, y, $) {
						if (
							(s.classList.toggle("dragged-over", $),
							s.classList.toggle("dragged-over-head", l && y),
							s.classList.toggle("dragged-over-tail", l && !y),
							!!l)
						)
							return { verticallyBefore: y, horizontallyBefore: y };
					}
					focus(s) {
						this.g?.focus(s);
					}
					recomputeSizes() {
						this.P(this.r.visibleItems), this.Q();
					}
					layout(s) {
						(this.b = s),
							!(s.height === 0 || s.width === 0) &&
								(this.t.size === 0 && this.P(this.r.visibleItems), this.Q());
					}
					addComposite({ id: s, name: l, order: y, requestedIndex: $ }) {
						this.r.add(s, l, y, $) && (this.P([this.r.findItem(s)]), this.Q());
					}
					removeComposite(s) {
						this.isPinned(s) && this.unpin(s), this.r.remove(s) && this.Q();
					}
					hideComposite(s) {
						this.r.hide(s) && (this.O(s), this.Q());
					}
					activateComposite(s) {
						const l = this.r.activeItem;
						this.r.activate(s) &&
							(this.s.indexOf(s) === -1 ||
								(this.r.activeItem && !this.r.activeItem.pinned) ||
								(l && !l.pinned)) &&
							this.Q();
					}
					deactivateComposite(s) {
						const l = this.r.activeItem;
						this.r.deactivate() && l && !l.pinned && this.Q();
					}
					async pin(s, l) {
						this.r.setPinned(s, !0) &&
							(this.Q(),
							l && (await this.w.openComposite(s), this.activateComposite(s)));
					}
					unpin(s) {
						this.r.setPinned(s, !1) && (this.Q(), this.O(s));
					}
					areBadgesEnabled(s) {
						return this.L.getViewContainerBadgeEnablementState(s);
					}
					toggleBadgeEnablement(s) {
						this.L.setViewContainerBadgeEnablementState(
							s,
							!this.areBadgesEnabled(s),
						),
							this.Q();
						const l = this.r.findItem(s);
						l && (l.activityAction.activity = l.activityAction.activity);
					}
					O(s) {
						const l = this.w.getDefaultCompositeId();
						!this.r.activeItem ||
							this.r.activeItem.id !== s ||
							(this.deactivateComposite(s),
							l && l !== s && this.isPinned(l)
								? this.w.openComposite(l, !0)
								: this.w.openComposite(this.s.filter((y) => y !== s)[0]));
					}
					isPinned(s) {
						return this.r.findItem(s)?.pinned;
					}
					move(s, l, y) {
						if (y !== void 0) {
							const $ = this.r.items.findIndex((S) => S.id === s);
							let v = this.r.items.findIndex((S) => S.id === l);
							$ >= 0 &&
								v >= 0 &&
								(!y && $ > v && v++,
								y && $ < v && v--,
								v < this.r.items.length &&
									v >= 0 &&
									v !== $ &&
									this.r.move(this.r.items[$].id, this.r.items[v].id) &&
									setTimeout(() => this.Q(), 0));
						} else this.r.move(s, l) && setTimeout(() => this.Q(), 0);
					}
					getAction(s) {
						return this.r.findItem(s)?.activityAction;
					}
					P(s) {
						const l = this.w.compositeSize;
						if (l) s.forEach((y) => this.t.set(y.id, l));
						else {
							const y = this.g;
							if (y && this.b && this.b.height !== 0 && this.b.width !== 0) {
								const $ = y.viewItems.length;
								y.push(s.map((v) => v.activityAction)),
									s.map((v, S) =>
										this.t.set(
											v.id,
											this.w.orientation === E.ActionsOrientation.VERTICAL
												? y.getHeight($ + S)
												: y.getWidth($ + S),
										),
									),
									s.forEach(() => y.pull(y.viewItems.length - 1));
							}
						}
					}
					Q() {
						const s = this.g;
						if (!s || !this.b) return;
						let l = this.r.visibleItems
								.filter(
									(T) =>
										T.pinned ||
										(this.r.activeItem && this.r.activeItem.id === T.id),
								)
								.map((T) => T.id),
							y = l.length;
						const $ = l.length;
						let v = 0;
						const S =
							this.w.orientation === E.ActionsOrientation.VERTICAL
								? this.b.height
								: this.b.width;
						for (let T = 0; T < l.length; T++) {
							const P = this.t.get(l[T]);
							if (v + P > S) {
								y = T;
								break;
							}
							v += P;
						}
						for (
							$ > y && (l = l.slice(0, y)),
								this.r.activeItem &&
									l.every(
										(T) => !!this.r.activeItem && T !== this.r.activeItem.id,
									) &&
									((v += this.t.get(this.r.activeItem.id)),
									l.push(this.r.activeItem.id));
							v > S && l.length;
						) {
							const T = l.length > 1 ? l.splice(l.length - 2, 1)[0] : l.pop();
							v -= this.t.get(T);
						}
						for (
							$ > l.length && (v += this.w.overflowActionSize);
							v > S && l.length;
						) {
							const T =
								l.length > 1 && l[l.length - 1] === this.r.activeItem?.id
									? l.splice(l.length - 2, 1)[0]
									: l.pop();
							v -= this.t.get(T);
						}
						$ === l.length &&
							this.h &&
							(s.pull(s.length() - 1),
							this.h.dispose(),
							(this.h = void 0),
							this.n?.dispose(),
							(this.n = void 0));
						const I = [];
						this.s.forEach((T, P) => {
							l.includes(T) || I.push(P);
						}),
							I.reverse().forEach((T) => {
								s.pull(T), this.s.splice(T, 1);
							}),
							l.forEach((T, P) => {
								const k = this.s.indexOf(T);
								P !== k &&
									(k !== -1 && (s.pull(k), this.s.splice(k, 1)),
									s.push(this.r.findItem(T).activityAction, {
										label: !0,
										icon: this.w.icon,
										index: P,
									}),
									this.s.splice(P, 0, T));
							}),
							$ > l.length &&
								!this.h &&
								((this.h = this.D(
									this.y.createInstance(C.$arc, () => {
										this.n?.showMenu();
									}),
								)),
								(this.n = this.D(
									this.y.createInstance(
										C.$brc,
										this.h,
										() => this.R(),
										() => (this.r.activeItem ? this.r.activeItem.id : void 0),
										(T) => this.r.findItem(T)?.activity[0]?.badge,
										this.w.getOnCompositeClickAction,
										this.w.colors,
										this.w.activityHoverOptions,
									),
								)),
								s.push(this.h, { label: !1, icon: !0 })),
							this.a.fire();
					}
					R() {
						let s = this.r.visibleItems
							.filter((l) => l.pinned)
							.map((l) => l.id);
						return (
							this.r.activeItem &&
								!this.r.activeItem.pinned &&
								s.push(this.r.activeItem.id),
							(s = s.filter((l) => !this.s.includes(l))),
							this.r.visibleItems
								.filter((l) => s.includes(l.id))
								.map((l) => ({
									id: l.id,
									name: this.getAction(l.id)?.label || l.name,
								}))
						);
					}
					S(s, l) {
						d.$ahb.stop(l, !0);
						const y = new m.$2fb(s, l);
						this.J.showContextMenu({
							getAnchor: () => y,
							getActions: () => this.getContextMenuActions(l),
						});
					}
					getContextMenuActions(s) {
						const l = this.r.visibleItems.map(
							({ id: y, name: $, activityAction: v }) =>
								(0, i.$wj)({
									id: y,
									label: this.getAction(y).label || $ || y,
									checked: this.isPinned(y),
									enabled: v.enabled,
									run: () => {
										this.isPinned(y) ? this.unpin(y) : this.pin(y, !0);
									},
								}),
						);
						return this.w.fillExtraContextMenuActions(l, s), l;
					}
				};
				(e.$Muc = o),
					(e.$Muc = o = Ne([j(2, w.$Li), j(3, r.$Xxb), j(4, c.$K1)], o));
				class f {
					get items() {
						return this.a;
					}
					constructor(s, l) {
						(this.a = []), (this.b = l), this.setItems(s);
					}
					setItems(s) {
						(this.a = []),
							(this.a = s.map((l) =>
								this.d(l.id, l.name, l.order, l.pinned, l.visible),
							));
					}
					get visibleItems() {
						return this.items.filter((s) => s.visible);
					}
					get pinnedItems() {
						return this.items.filter((s) => s.visible && s.pinned);
					}
					d(s, l, y, $, v) {
						const S = this.b;
						return {
							id: s,
							name: l,
							pinned: $,
							order: y,
							visible: v,
							activity: [],
							get activityAction() {
								return S.getActivityAction(s);
							},
							get pinnedAction() {
								return S.getCompositePinnedAction(s);
							},
							get toggleBadgeAction() {
								return S.getCompositeBadgeAction(s);
							},
						};
					}
					add(s, l, y, $) {
						const v = this.findItem(s);
						if (v) {
							let S = !1;
							return (
								(v.name = l),
								(0, a.$ug)(y) || ((S = v.order !== y), (v.order = y)),
								v.visible || ((v.visible = !0), (S = !0)),
								S
							);
						} else {
							const S = this.d(s, l, y, !0, !0);
							if ((0, a.$ug)($))
								if ((0, a.$ug)(y)) this.items.push(S);
								else {
									let I = 0;
									for (
										;
										I < this.items.length &&
										typeof this.items[I].order == "number" &&
										this.items[I].order < y;
									)
										I++;
									this.items.splice(I, 0, S);
								}
							else {
								let I = 0,
									T = $;
								for (; T > 0 && I < this.items.length; )
									this.items[I++].visible && T--;
								this.items.splice(I, 0, S);
							}
							return !0;
						}
					}
					remove(s) {
						for (let l = 0; l < this.items.length; l++)
							if (this.items[l].id === s) return this.items.splice(l, 1), !0;
						return !1;
					}
					hide(s) {
						for (const l of this.items)
							if (l.id === s) return l.visible ? ((l.visible = !1), !0) : !1;
						return !1;
					}
					move(s, l) {
						const y = this.f(s),
							$ = this.f(l);
						if (y === -1 || $ === -1) return !1;
						const v = this.items.splice(y, 1)[0];
						return this.items.splice($, 0, v), (v.pinned = !0), !0;
					}
					setPinned(s, l) {
						for (const y of this.items)
							if (y.id === s) return y.pinned !== l ? ((y.pinned = l), !0) : !1;
						return !1;
					}
					activate(s) {
						if (!this.activeItem || this.activeItem.id !== s) {
							this.activeItem && this.deactivate();
							for (const l of this.items)
								if (l.id === s)
									return (
										(this.activeItem = l),
										this.activeItem.activityAction.activate(),
										!0
									);
						}
						return !1;
					}
					deactivate() {
						return this.activeItem
							? (this.activeItem.activityAction.deactivate(),
								(this.activeItem = void 0),
								!0)
							: !1;
					}
					findItem(s) {
						return this.items.filter((l) => l.id === s)[0];
					}
					f(s) {
						for (let l = 0; l < this.items.length; l++)
							if (this.items[l].id === s) return l;
						return -1;
					}
				}
			},
		),
		define(
			de[4008],
			he([
				1, 0, 323, 7, 595, 15, 3, 12, 28, 4, 10, 5, 30, 51, 35, 25, 347, 362,
				548, 44, 123, 66, 18, 764, 749, 45, 2338,
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
				var I;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Fuc = void 0);
				function T(D) {
					return D.getValue("editor.dropIntoEditor.enabled");
				}
				function P(D) {
					return D.shiftKey;
				}
				let k = class extends n.$pP {
					static {
						I = this;
					}
					static {
						this.a = "monaco-workbench-editor-drop-overlay";
					}
					get disposed() {
						return !!this.j;
					}
					constructor(M, N, A, R, O, B, U, z, F) {
						super(N),
							(this.y = M),
							(this.z = A),
							(this.C = R),
							(this.F = O),
							(this.G = B),
							(this.H = U),
							(this.I = z),
							(this.J = F),
							(this.r = p.$ozb.getInstance()),
							(this.s = p.$ozb.getInstance()),
							(this.t = p.$ozb.getInstance()),
							(this.m = this.D(new E.$Yh(() => this.dispose(), 300))),
							(this.u = T(this.z) && this.N()),
							this.L();
					}
					L() {
						const M = this.W(),
							N = (this.b = document.createElement("div"));
						(N.id = I.a),
							(N.style.top = `${M}px`),
							this.y.element.appendChild(N),
							this.y.element.classList.add("dragged-over"),
							this.D(
								(0, C.$Yc)(() => {
									N.remove(), this.y.element.classList.remove("dragged-over");
								}),
							),
							(this.c = document.createElement("div")),
							this.c.classList.add("editor-group-overlay-indicator"),
							N.appendChild(this.c),
							this.u &&
								((this.f = (0, w.$kib)(
									(0, r.localize)(3440, null, d.$m ? "\u21E7" : "Shift"),
									{},
								)),
								this.f.classList.add("editor-group-overlay-drop-into-prompt"),
								this.c.appendChild(this.f)),
							this.M(N),
							this.updateStyles();
					}
					updateStyles() {
						const M = (0, m.$wg)(this.c);
						M.style.backgroundColor = this.w(s.$kFb) || "";
						const N = this.w(c.$PP);
						if (
							((M.style.outlineColor = N || ""),
							(M.style.outlineOffset = N ? "-2px" : ""),
							(M.style.outlineStyle = N ? "dashed" : ""),
							(M.style.outlineWidth = N ? "2px" : ""),
							this.f)
						) {
							(this.f.style.backgroundColor = this.w(s.$mFb) ?? ""),
								(this.f.style.color = this.w(s.$lFb) ?? "");
							const A = this.w(s.$nFb);
							A
								? ((this.f.style.borderWidth = "1px"),
									(this.f.style.borderStyle = "solid"),
									(this.f.style.borderColor = A))
								: (this.f.style.borderWidth = "0");
						}
					}
					M(M) {
						this.D(
							new i.$Hhb(M, {
								onDragOver: (N) => {
									if (this.u && P(N)) {
										this.dispose();
										return;
									}
									const A = (0, i.$Ogb)().document.elementsFromPoint(
											N.clientX,
											N.clientY,
										),
										R = A.find((x) => x.classList.contains("full-input-box"));
									if (R && R.querySelector(".aislash-editor-input")) {
										const H = new DragEvent(N.type, N);
										R.dispatchEvent(H), this.X();
										return;
									}
									const O = A.find(
										(x) => x.className === "aislash-editor-input",
									);
									if (O) {
										const x = new DragEvent(N.type, N);
										O.dispatchEvent(x), this.X();
										return;
									}
									const B = this.s.hasData(o.$MSb.prototype),
										U = this.r.hasData(o.$LSb.prototype);
									!U &&
										!B &&
										N.dataTransfer &&
										(N.dataTransfer.dropEffect = "copy");
									let z = !0;
									if (B) z = this.Q(N);
									else if (U) {
										const x = this.r.getData(o.$LSb.prototype);
										Array.isArray(x) &&
											x.length > 0 &&
											(z = this.Q(N, x[0].identifier));
									}
									if (!z) {
										const x = this.O();
										if (x === this.y && (B || (U && x.count < 2))) {
											this.X();
											return;
										}
									}
									let F = !!this.G.partOptions.splitOnDragAndDrop;
									this.R(N) && (F = !F),
										this.S(N.offsetX, N.offsetY, B, F),
										this.J.setNonPersistentStorage(
											"reactiveDragTakeover",
											Date.now(),
										),
										this.m.isScheduled() && this.m.cancel();
								},
								onDragLeave: (N) => this.dispose(),
								onDragEnd: (N) => this.dispose(),
								onDrop: (N) => {
									const A = (0, i.$Ogb)().document.elementsFromPoint(
											N.clientX,
											N.clientY,
										),
										R = A.find((B) => B.classList.contains("full-input-box"));
									if (
										R &&
										(N.preventDefault(),
										R.querySelector(".aislash-editor-input"))
									) {
										const U = new DragEvent(N.type, N);
										R.dispatchEvent(U), this.X(), this.dispose();
										return;
									}
									const O = A.find(
										(B) => B.className === "aislash-editor-input",
									);
									if (O) {
										const B = new DragEvent(N.type, N);
										O.dispatchEvent(B), this.X(), this.dispose();
										return;
									}
									i.$ahb.stop(N, !0),
										this.dispose(),
										this.g && this.P(N, this.g.splitDirection);
								},
							}),
						),
							this.D(
								(0, i.$0fb)(M, i.$$gb.MOUSE_OVER, () => {
									this.m.isScheduled() || this.m.schedule();
								}),
							);
					}
					N() {
						return !!this.y.activeEditor?.hasCapability(
							b.EditorInputCapabilities.CanDropIntoEditor,
						);
					}
					O() {
						if (this.s.hasData(o.$MSb.prototype)) {
							const M = this.s.getData(o.$MSb.prototype);
							if (Array.isArray(M) && M.length > 0)
								return this.G.getGroup(M[0].identifier);
						} else if (this.r.hasData(o.$LSb.prototype)) {
							const M = this.r.getData(o.$LSb.prototype);
							if (Array.isArray(M) && M.length > 0)
								return this.G.getGroup(M[0].identifier.groupId);
						}
					}
					async P(M, N) {
						const A = () => {
							let R;
							return (
								typeof N == "number"
									? (R = this.G.addGroup(this.y, N))
									: (R = this.y),
								R
							);
						};
						if (this.s.hasData(o.$MSb.prototype)) {
							const R = this.s.getData(o.$MSb.prototype);
							if (Array.isArray(R) && R.length > 0) {
								const O = this.G.getGroup(R[0].identifier);
								if (O) {
									if (typeof N != "number" && O === this.y) return;
									let B;
									if (typeof N == "number")
										this.Q(M)
											? (B = this.G.copyGroup(O, this.y, N))
											: (B = this.G.moveGroup(O, this.y, N));
									else {
										let U;
										this.Q(M) && (U = { mode: l.MergeGroupMode.COPY_EDITORS }),
											this.G.mergeGroup(O, this.y, U);
									}
									B && this.G.activateGroup(B);
								}
								this.s.clearData(o.$MSb.prototype);
							}
						} else if (this.r.hasData(o.$LSb.prototype)) {
							const R = this.r.getData(o.$LSb.prototype);
							if (Array.isArray(R) && R.length > 0) {
								const O = R,
									B = R[0].identifier,
									U = this.G.getGroup(B.groupId);
								if (U) {
									const z = this.Q(M, B);
									let F;
									if (
										this.G.partOptions.closeEmptyGroups &&
										U.count === 1 &&
										typeof N == "number" &&
										!z
									)
										F = this.G.moveGroup(U, this.y, N);
									else {
										if (((F = A()), U === F)) return;
										const x = O.map((H) => ({
											editor: H.identifier.editor,
											options: (0, f.$IEb)(U, H.identifier.editor, {
												pinned: !0,
												sticky: U.isSticky(H.identifier.editor),
											}),
										}));
										z ? U.copyEditors(x, F) : U.moveEditors(x, F);
									}
									F.focus();
								}
								this.r.clearData(o.$LSb.prototype);
							}
						} else if (this.t.hasData(v.$b3b.prototype)) {
							const R = this.t.getData(v.$b3b.prototype);
							if (Array.isArray(R) && R.length > 0) {
								const O = [];
								for (const B of R) {
									const U = await this.H.removeDragOperationTransfer(
										B.identifier,
									);
									if (U) {
										const z = await (0, o.$NSb)(U);
										O.push(
											...z.map((F) => ({
												...F,
												options: { ...F.options, pinned: !0 },
											})),
										);
									}
								}
								O.length && this.F.openEditors(O, A(), { validateTrust: !0 });
							}
							this.t.clearData(v.$b3b.prototype);
						} else
							this.C.createInstance(o.$OSb, {
								allowWorkspaceOpen: !d.$r || (0, g.$bj)(this.I.getWorkspace()),
							}).handleDrop(
								M,
								(0, i.getWindow)(this.y.element),
								() => A(),
								(O) => O?.focus(),
							);
					}
					Q(M, N) {
						return N?.editor.hasCapability(b.EditorInputCapabilities.Singleton)
							? !1
							: (M.ctrlKey && !d.$m) || (M.altKey && d.$m);
					}
					R(M) {
						return (M.altKey && !d.$m) || (M.shiftKey && d.$m);
					}
					S(M, N, A, R) {
						const O = this.G.partOptions.openSideBySideDirection === "right",
							B = this.y.element.clientWidth,
							U = this.y.element.clientHeight - this.W();
						let z, F;
						R
							? (A ? (z = O ? 0.3 : 0.1) : (z = 0.1),
								A ? (F = O ? 0.1 : 0.3) : (F = 0.1))
							: ((z = 0), (F = 0));
						const x = B * z,
							H = U * F,
							q = B / 3,
							V = U / 3;
						let G;
						switch (
							(M > x && M < B - x && N > H && N < U - H
								? (G = void 0)
								: O
									? M < q
										? (G = l.GroupDirection.LEFT)
										: M > q * 2
											? (G = l.GroupDirection.RIGHT)
											: N < U / 2
												? (G = l.GroupDirection.UP)
												: (G = l.GroupDirection.DOWN)
									: N < V
										? (G = l.GroupDirection.UP)
										: N > V * 2
											? (G = l.GroupDirection.DOWN)
											: M < B / 2
												? (G = l.GroupDirection.LEFT)
												: (G = l.GroupDirection.RIGHT),
							G)
						) {
							case l.GroupDirection.UP:
								this.U({ top: "0", left: "0", width: "100%", height: "50%" }),
									this.Y(!1);
								break;
							case l.GroupDirection.DOWN:
								this.U({ top: "50%", left: "0", width: "100%", height: "50%" }),
									this.Y(!1);
								break;
							case l.GroupDirection.LEFT:
								this.U({ top: "0", left: "0", width: "50%", height: "100%" }),
									this.Y(!1);
								break;
							case l.GroupDirection.RIGHT:
								this.U({ top: "0", left: "50%", width: "50%", height: "100%" }),
									this.Y(!1);
								break;
							default:
								this.U({ top: "0", left: "0", width: "100%", height: "100%" }),
									this.Y(!0);
						}
						const K = (0, m.$wg)(this.c);
						(K.style.opacity = "1"),
							setTimeout(() => K.classList.add("overlay-move-transition"), 0),
							(this.g = { splitDirection: G });
					}
					U(M) {
						const [N, A] = (0, m.$xg)(this.b, this.c),
							R = this.W();
						R
							? (N.style.height = `calc(100% - ${R}px)`)
							: (N.style.height = "100%"),
							(A.style.top = M.top),
							(A.style.left = M.left),
							(A.style.width = M.width),
							(A.style.height = M.height);
					}
					W() {
						return !this.y.isEmpty && this.G.partOptions.showTabs === "multiple"
							? this.y.titleHeight.offset
							: 0;
					}
					X() {
						const M = (0, m.$wg)(this.c);
						this.U({ top: "0", left: "0", width: "100%", height: "100%" }),
							(M.style.opacity = "0"),
							M.classList.remove("overlay-move-transition"),
							(this.g = void 0);
					}
					Y(M) {
						this.f && (this.f.style.opacity = M ? "1" : "0");
					}
					contains(M) {
						return M === this.b || M === this.c;
					}
					dispose() {
						super.dispose(), (this.j = !0);
					}
				};
				k = I = Ne(
					[
						j(1, n.$iP),
						j(2, u.$gj),
						j(3, a.$Li),
						j(4, y.$IY),
						j(5, l.$EY),
						j(6, $.$c3b),
						j(7, g.$Vi),
						j(8, S.$0zb),
					],
					k,
				);
				let L = class extends n.$pP {
					constructor(M, N, A, R, O, B) {
						super(R),
							(this.g = M),
							(this.j = N),
							(this.m = A),
							(this.r = O),
							(this.s = B),
							(this.b = 0),
							(this.c = p.$ozb.getInstance()),
							(this.f = p.$ozb.getInstance()),
							this.u();
					}
					get t() {
						if (this.a && !this.a.disposed) return this.a;
					}
					u() {
						this.D((0, i.$0fb)(this.g, i.$$gb.DRAG_ENTER, (M) => this.y(M))),
							this.D((0, i.$0fb)(this.g, i.$$gb.DRAG_LEAVE, () => this.z()));
						for (const M of [this.g, (0, i.getWindow)(this.g)])
							this.D((0, i.$0fb)(M, i.$$gb.DRAG_END, () => this.C()));
					}
					y(M) {
						if (T(this.r) && P(M)) return;
						if (
							(this.b++,
							!this.c.hasData(o.$LSb.prototype) &&
								!this.f.hasData(o.$MSb.prototype) &&
								M.dataTransfer)
						) {
							const A = h.$Io.as(p.$nzb.DragAndDropContribution).getAll(),
								R = Array.from(A).map((O) => O.dataFormatKey);
							if (
								!(0, p.$mzb)(
									M,
									t.$Ohb.FILES,
									p.$hzb.FILES,
									t.$Ohb.RESOURCES,
									p.$hzb.EDITORS,
									...R,
								)
							) {
								M.dataTransfer.dropEffect = "none";
								return;
							}
						}
						this.G(!0);
						const N = M.target;
						if (N && (this.t && !this.t.contains(N) && this.H(), !this.t)) {
							const A = this.F(N);
							A && (this.a = this.s.createInstance(k, A));
						}
					}
					z() {
						this.b--, this.b === 0 && this.G(!1);
					}
					C() {
						(this.b = 0), this.G(!1), this.H();
					}
					F(M) {
						return this.m.groups.find(
							(A) => (0, i.$Bgb)(M, A.element) || this.j.containsGroup?.(A),
						);
					}
					G(M) {
						this.g.classList.toggle("dragged-over", M);
					}
					dispose() {
						super.dispose(), this.H();
					}
					H() {
						this.t && (this.t.dispose(), (this.a = void 0));
					}
				};
				(e.$Fuc = L),
					(e.$Fuc = L =
						Ne([j(2, l.$EY), j(3, n.$iP), j(4, u.$gj), j(5, a.$Li)], L));
			},
		),
		define(
			de[1055],
			he([
				1, 0, 4, 323, 7, 168, 105, 50, 3, 92, 11, 8, 49, 5, 39, 40, 63, 51, 35,
				362, 217, 44, 100, 276, 28, 139, 29, 313, 173, 347, 231, 247, 66, 12,
				87, 128, 95, 2343,
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
				R,
				O,
			) {
				"use strict";
				var B;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qtc = e.$ptc = void 0);
				class U extends d.$sj {
					constructor(x) {
						super(), (this.a = x);
					}
					run(x, H) {
						let q = this.a;
						return (
							H?.preserveFocus && (q = { ...this.a, preserveFocus: !0 }),
							super.run(x, q)
						);
					}
				}
				e.$ptc = U;
				let z = class extends f.$pP {
					static {
						B = this;
					}
					static {
						this.f = { normal: 35, compact: 22 };
					}
					constructor(x, H, q, V, G, K, J, W, X, Y, ie, ne, ee, _) {
						super(ne),
							(this.N = x),
							(this.O = H),
							(this.P = q),
							(this.Q = V),
							(this.R = G),
							(this.S = K),
							(this.U = J),
							(this.W = W),
							(this.X = X),
							(this.Y = Y),
							(this.Z = ie),
							(this.$ = ee),
							(this.ab = _),
							(this.a = k.$ozb.getInstance()),
							(this.b = k.$ozb.getInstance()),
							(this.c = k.$ozb.getInstance()),
							(this.m = this.D(new m.$Zc())),
							(this.r = this.D(new m.$Zc())),
							(this.s = this.D(this.W.createScoped(x)));
						const te = this.D(this.U.createChild(new R.$Ki([a.$6j, this.s])));
						(this.t = this.D(te.createInstance(y.$BQb))),
							(this.u = y.$KPb.bindTo(this.s)),
							(this.z = y.$LPb.bindTo(this.s)),
							(this.C = y.$MPb.bindTo(this.s)),
							(this.F = y.$NPb.bindTo(this.s)),
							(this.G = y.$UPb.bindTo(this.s)),
							(this.H = y.$SPb.bindTo(this.s)),
							(this.I = y.$XPb.bindTo(this.s)),
							(this.J = y.$3Pb.bindTo(this.s)),
							(this.L = !1),
							(this.M = (0, O.$cib)("mouse")),
							this.bb(x);
					}
					bb(x) {
						this.yb();
					}
					get cb() {
						return (
							this.P.partOptions.editorActionsLocation === "default" &&
							this.P.partOptions.showTabs !== "none"
						);
					}
					db(x, H) {
						(this.g = document.createElement("div")),
							this.g.classList.add(...H),
							x.appendChild(this.g),
							this.eb(this.g);
					}
					eb(x) {
						const H = this.cb,
							q = !!this.j;
						H && !q
							? this.fb(x)
							: !H &&
								q &&
								(this.j?.getElement().remove(),
								(this.j = void 0),
								this.m.clear(),
								this.r.clear()),
							x.classList.toggle("hidden", !H);
					}
					fb(x) {
						const H = { groupId: this.Q.id };
						(this.j = this.m.add(
							this.U.createInstance(P.$Syb, x, {
								actionViewItemProvider: (q, V) => this.gb(q, V),
								orientation: C.ActionsOrientation.HORIZONTAL,
								ariaLabel: (0, t.localize)(3545, null),
								getKeyBinding: (q) => this.tb(q),
								actionRunner: this.m.add(new U(H)),
								anchorAlignmentProvider: () => $.AnchorAlignment.RIGHT,
								renderDropdownAsChildElement: this.L,
								telemetrySource: "editorPart",
								resetMenu: u.$XX.EditorTitle,
								overflowBehavior: { maxItems: 9, exempted: D.$CWb },
								highlightToggledItems: !0,
							}),
						)),
							(this.j.context = H),
							this.m.add(
								this.j.actionRunner.onDidRun((q) => {
									q.error && !(0, I.$8)(q.error) && this.Y.error(q.error);
								}),
							);
					}
					gb(x, H) {
						const q = this.Q.activeEditorPane;
						if (q instanceof s.$JEb) {
							const V = q.getActionViewItem(x, H);
							if (V) return V;
						}
						return (0, r.$Pyb)(this.U, x, { ...H, menuAsChild: this.L });
					}
					hb() {
						if (!this.cb) return;
						this.r.clear();
						const x = this.Q.createEditorActions(this.r);
						this.r.add(x.onDidChange(() => this.hb()));
						const H = (0, v.$wg)(this.j),
							{ primary: q, secondary: V } = this.ib(x.actions);
						H.setActions((0, C.$fib)(q), (0, C.$fib)(V));
					}
					jb() {
						return this.Q.activeEditorPane?.scopedContextKeyService ?? this.W;
					}
					lb() {
						if (!this.cb) return;
						(0, v.$wg)(this.j).setActions([], []);
					}
					mb(x, H) {
						if (x.target !== H) return !1;
						const q = this.pb(x);
						this.b.setData([new b.$MSb(this.Q.id)], b.$MSb.prototype),
							x.dataTransfer && (x.dataTransfer.effectAllowed = "copyMove");
						let V = !1;
						if (
							(this.P.partOptions.showTabs === "multiple"
								? (V = this.rb(
										this.Q.getEditors(l.EditorsOrder.SEQUENTIAL),
										x,
										q,
									))
								: this.Q.activeEditor &&
									(V = this.rb([this.Q.activeEditor], x, q)),
							!V &&
								S.$Ofb &&
								x.dataTransfer?.setData(i.$Ohb.TEXT, String(this.Q.label)),
							this.Q.activeEditor)
						) {
							let G = this.Q.activeEditor.getName();
							this.P.partOptions.showTabs === "multiple" &&
								this.Q.count > 1 &&
								(G = (0, t.localize)(3546, null, G, this.Q.count - 1)),
								(0, i.$Phb)(
									x,
									G,
									"monaco-editor-group-drag-image",
									this.w(o.$ES),
									this.w(o.$FS),
								);
						}
						return q;
					}
					async nb(x, H, q, V) {
						if (
							(this.b.clearData(b.$MSb.prototype),
							x.target !== q || !V || (0, b.$WSb)())
						)
							return;
						const G = await this.ob(x, q);
						if (!G) return;
						const K = G.activeGroup;
						this.P.mergeGroup(this.Q, K.id, {
							mode: this.qb(H ?? x, K.id)
								? M.MergeGroupMode.MOVE_EDITORS
								: M.MergeGroupMode.COPY_EDITORS,
						}),
							K.focus();
					}
					async ob(x, H) {
						const { point: q, display: V } =
								(await this.ab.getCursorScreenPoint()) ?? {
									point: { x: x.screenX, y: x.screenY },
								},
							G = (0, w.$Ogb)();
						if (
							G.document.visibilityState === "visible" &&
							G.document.hasFocus() &&
							q.x >= G.screenX &&
							q.x <= G.screenX + G.outerWidth &&
							q.y >= G.screenY &&
							q.y <= G.screenY + G.outerHeight
						)
							return;
						const K = H.offsetWidth / 2,
							J = 30 + H.offsetHeight / 2,
							W = { x: q.x - K, y: q.y - J };
						return (
							V && (W.x < V.x && (W.x = V.x), W.y < V.y && (W.y = V.y)),
							this.O.createAuxiliaryEditorPart({ bounds: W })
						);
					}
					pb(x) {
						return this.P.partOptions.dragToOpenWindow ? !x.altKey : x.altKey;
					}
					qb(x, H, q) {
						return q?.hasCapability(l.EditorInputCapabilities.Singleton)
							? !0
							: !((x.ctrlKey && !N.$m) || (x.altKey && N.$m)) ||
									H === this.Q.id;
					}
					rb(x, H, q) {
						return x.length
							? (this.U.invokeFunction(
									b.$PSb,
									x.map((V) => ({ editor: V, groupId: this.Q.id })),
									H,
									{ disableStandardTransfer: q },
								),
								!0)
							: !1;
					}
					sb(x, H, q) {
						this.t.set(
							l.$A1.getOriginalUri(x, {
								supportSideBySide: l.SideBySideEditor.PRIMARY,
							}),
						),
							this.u.set(this.R.isPinned(x)),
							this.z.set(this.R.isFirst(x)),
							this.C.set(this.R.isLast(x)),
							this.F.set(this.R.isSticky(x)),
							this.J.set(this.R.isLocked),
							this.H.set(
								x.hasCapability(l.EditorInputCapabilities.CanSplitInGroup),
							),
							this.I.set(x.typeId === T.$iY.ID),
							(0, y.$CQb)(this.G, x, this.$);
						let V = q;
						(0, w.$7gb)(H) && (V = new E.$2fb((0, w.getWindow)(q), H)),
							this.S.showContextMenu({
								getAnchor: () => V,
								menuId: u.$XX.EditorTitleContext,
								menuActionOptions: { shouldForwardArgs: !0, arg: this.t.get() },
								contextKeyService: this.s,
								getActionsContext: () => ({
									groupId: this.Q.id,
									editorIndex: this.Q.getIndexOfEditor(x),
								}),
								getKeyBinding: (G) => this.X.lookupKeybinding(G.id, this.s),
								onHide: () => this.P.activeGroup.focus(),
							});
					}
					tb(x) {
						return this.X.lookupKeybinding(x.id, this.jb());
					}
					ub(x) {
						const H = this.tb(x);
						return H ? (H.getLabel() ?? void 0) : void 0;
					}
					get vb() {
						return this.P.partOptions.tabHeight !== "compact"
							? B.f.normal
							: B.f.compact;
					}
					wb(x) {
						return x.getTitle(l.Verbosity.LONG);
					}
					xb() {
						return this.M;
					}
					yb() {
						this.N.style.setProperty(
							"--editor-group-tab-height",
							`${this.vb}px`,
						);
					}
					updateOptions(x, H) {
						x.tabHeight !== H.tabHeight && this.yb(),
							(x.editorActionsLocation !== H.editorActionsLocation ||
								x.showTabs !== H.showTabs) &&
								this.g &&
								(this.eb(this.g), this.hb());
					}
				};
				(e.$qtc = z),
					(e.$qtc =
						z =
						B =
							Ne(
								[
									j(5, h.$Xxb),
									j(6, c.$Li),
									j(7, a.$6j),
									j(8, n.$uZ),
									j(9, g.$4N),
									j(10, p.$DJ),
									j(11, f.$iP),
									j(12, L.$E6),
									j(13, A.$asb),
								],
								z,
							));
			},
		),
		define(
			de[1935],
			he([
				1, 0, 12, 222, 44, 192, 114, 159, 27, 233, 105, 49, 5, 39, 8, 11, 1055,
				63, 3, 203, 195, 59, 35, 123, 51, 362, 40, 66, 7, 4, 1340, 28, 18, 19,
				15, 165, 54, 24, 212, 139, 82, 116, 247, 168, 764, 749, 231, 1700, 87,
				29, 323, 2345,
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
				R,
				O,
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
			) {
				"use strict";
				var ie;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ktc = void 0);
				let ne = class extends p.$qtc {
					static {
						ie = this;
					}
					static {
						this.zb = { default: 3, large: 10 };
					}
					static {
						this.Ab = { compact: 38, shrink: 80, fit: 120 };
					}
					static {
						this.Bb = 1500;
					}
					static {
						this.Cb = 150;
					}
					static {
						this.Db = 1.5;
					}
					constructor(
						_,
						te,
						Q,
						Z,
						se,
						re,
						le,
						oe,
						ae,
						pe,
						$e,
						ye,
						ue,
						fe,
						me,
						ve,
						ge,
					) {
						super(_, te, Q, Z, se, re, le, oe, ae, pe, $e, ye, ve, ge),
							(this.Wb = ue),
							(this.Xb = fe),
							(this.Yb = me),
							(this.Jb = this.D(
								this.U.createInstance(L.$Trc, L.$Trc.ID, L.$Trc.LABEL),
							)),
							(this.Kb = this.D(
								this.U.createInstance(L.$Src, L.$Src.ID, L.$Src.LABEL),
							)),
							(this.Lb = this.D(this.U.createInstance(r.$uPb, r.$tPb))),
							(this.Mb = []),
							(this.Ob = []),
							(this.Pb = []),
							(this.Qb = { container: P.$pgb.None, available: P.$pgb.None }),
							(this.Rb = this.D(new f.$2c())),
							(this.Tb = t.$l ? O.$kc : O.$lc),
							(this.Ub = 0),
							(this.Vb = !1),
							(this.mc = this.D(new A.$Yh(() => this.nc(), 0))),
							(async () => (this.Tb = await this.Xb.path))(),
							this.D(this.Lb.onDidChangeDecorations(() => this.fc()));
					}
					bb(_) {
						super.bb(_),
							(this.Eb = _),
							(this.Fb = document.createElement("div")),
							this.Fb.classList.add("tabs-and-actions-container"),
							this.Eb.appendChild(this.Fb),
							(this.Gb = document.createElement("div")),
							this.Gb.setAttribute("role", "tablist"),
							(this.Gb.draggable = !0),
							this.Gb.classList.add("tabs-container"),
							this.D(d.$Qhb.addTarget(this.Gb)),
							(this.Ib = this.D(new f.$Zc())),
							this.bc(!1),
							(this.Hb = this.$b(this.Gb)),
							this.Fb.appendChild(this.Hb.getDomNode()),
							this.ec(this.Gb, this.Hb),
							this.db(this.Fb, ["editor-actions"]),
							this.Vc();
					}
					$b(_) {
						const te = this.D(
							new b.$5hb(_, {
								horizontal: s.ScrollbarVisibility.Auto,
								horizontalScrollbarSize: this.dc(),
								vertical: s.ScrollbarVisibility.Hidden,
								scrollYToX: !0,
								useShadows: !1,
							}),
						);
						return (
							this.D(
								te.onScroll((Q) => {
									Q.scrollLeftChanged && (_.scrollLeft = Q.scrollLeft);
								}),
							),
							te
						);
					}
					ac() {
						this.Hb?.updateOptions({ horizontalScrollbarSize: this.dc() });
					}
					bc(_) {
						const [te, Q] = (0, D.$xg)(this.Gb, this.Ib);
						Q.clear();
						const Z = this.P.partOptions;
						Z.tabSizing === "fixed"
							? (te.style.setProperty(
									"--tab-sizing-fixed-min-width",
									`${Z.tabSizingFixedMinWidth}px`,
								),
								te.style.setProperty(
									"--tab-sizing-fixed-max-width",
									`${Z.tabSizingFixedMaxWidth}px`,
								),
								Q.add(
									(0, P.$0fb)(te, P.$$gb.MOUSE_ENTER, () => {
										this.Vb = !0;
									}),
								),
								Q.add(
									(0, P.$0fb)(te, P.$$gb.MOUSE_LEAVE, () => {
										(this.Vb = !1), this.cc(!1);
									}),
								))
							: _ &&
								(te.style.removeProperty("--tab-sizing-fixed-min-width"),
								te.style.removeProperty("--tab-sizing-fixed-max-width"),
								this.cc(!1));
					}
					cc(_) {
						this.oc((te, Q, Z) => {
							if (_) {
								const { width: se } = Z.getBoundingClientRect();
								Z.style.setProperty("--tab-sizing-current-width", `${se}px`);
							} else Z.style.removeProperty("--tab-sizing-current-width");
						});
					}
					dc() {
						return this.P.partOptions.titleScrollbarSizing !== "large"
							? ie.zb.default
							: ie.zb.large;
					}
					ec(_, te) {
						this.D(
							(0, P.$0fb)(_, P.$$gb.SCROLL, () => {
								_.classList.contains("scroll") &&
									te.setScrollPosition({ scrollLeft: _.scrollLeft });
							}),
						);
						for (const re of [d.EventType.Tap, P.$$gb.DBLCLICK])
							this.D(
								(0, P.$0fb)(_, re, (le) => {
									if (re === P.$$gb.DBLCLICK) {
										if (le.target !== _) return;
									} else if (le.tapCount !== 2 || le.initialTarget !== _)
										return;
									P.$ahb.stop(le),
										this.Wb.openEditor(
											{
												resource: void 0,
												options: {
													pinned: !0,
													index: this.Q.count,
													override: w.$b1.id,
												},
											},
											this.Q.id,
										);
								}),
							);
						this.D(
							(0, P.$0fb)(_, P.$$gb.MOUSE_DOWN, (re) => {
								re.button === 1 && re.preventDefault();
							}),
						),
							t.$n &&
								this.D(
									(0, P.$0fb)(_, P.$$gb.MOUSE_UP, (re) => {
										re.button === 1 && re.preventDefault();
									}),
								);
						let Q,
							Z = !1;
						this.D(
							new P.$Hhb(_, {
								onDragStart: (re) => {
									Z = this.mb(re, _);
								},
								onDrag: (re) => {
									Q = re;
								},
								onDragEnter: (re) => {
									if ((_.classList.add("scroll"), re.target === _)) {
										if (!this.vc(re)) {
											re.dataTransfer && (re.dataTransfer.dropEffect = "none");
											return;
										}
										this.a.hasData(S.$LSb.prototype) ||
											(re.dataTransfer &&
												(re.dataTransfer.dropEffect = "copy")),
											this.wc(_, !0, re);
									}
								},
								onDragLeave: (re) => {
									this.wc(_, !1, re), _.classList.remove("scroll");
								},
								onDragEnd: (re) => {
									this.wc(_, !1, re),
										_.classList.remove("scroll"),
										this.nb(re, Q, _, Z);
								},
								onDrop: (re) => {
									if (
										(this.wc(_, !1, re),
										_.classList.remove("scroll"),
										re.target === _)
									) {
										const le = this.b.hasData(S.$MSb.prototype);
										this.bd(re, le ? this.Q.count : this.R.count, _);
									}
								},
							}),
						),
							this.D(
								(0, P.$0fb)(_, P.$$gb.MOUSE_WHEEL, (re) => {
									const le = this.Q.activeEditor;
									if (!le || this.Q.count < 2) return;
									if (this.P.partOptions.scrollToSwitchTabs === !0) {
										if (re.shiftKey) return;
									} else if (!re.shiftKey) return;
									const oe = Date.now();
									if (
										oe - this.Ub <
										ie.Cb - 2 * (Math.abs(re.deltaX) + Math.abs(re.deltaY))
									)
										return;
									this.Ub = oe;
									let ae;
									if (re.deltaX + re.deltaY < -ie.Db) ae = -1;
									else if (re.deltaX + re.deltaY > ie.Db) ae = 1;
									else return;
									const pe = this.Q.getEditorByIndex(
										this.Q.getIndexOfEditor(le) + ae,
									);
									pe && (this.Q.openEditor(pe), P.$ahb.stop(re, !0));
								}),
							);
						const se = (re) => {
							P.$ahb.stop(re);
							let le = _;
							(0, P.$7gb)(re) &&
								(le = new q.$2fb((0, P.getWindow)(this.N), re)),
								this.S.showContextMenu({
									getAnchor: () => le,
									menuId: g.$XX.EditorTabsBarContext,
									contextKeyService: this.W,
									menuActionOptions: { shouldForwardArgs: !0 },
									getActionsContext: () => ({ groupId: this.Q.id }),
									getKeyBinding: (oe) => this.tb(oe),
									onHide: () => this.Q.focus(),
								});
						};
						this.D((0, P.$0fb)(_, d.EventType.Contextmenu, (re) => se(re))),
							this.D((0, P.$0fb)(_, P.$$gb.CONTEXT_MENU, (re) => se(re)));
					}
					fc() {
						this.layout(this.Qb);
					}
					hb() {
						super.hb(), this.layout(this.Qb);
					}
					openEditor(_, te) {
						const Q = this.hc();
						return (
							te?.focusTabControl && this.pc(_, (Z, se, re) => re.focus()), Q
						);
					}
					openEditors(_) {
						return this.hc();
					}
					hc() {
						this.Vc();
						const [_, te] = (0, D.$xg)(this.Gb, this.Hb);
						for (let le = _.children.length; le < this.R.count; le++)
							_.appendChild(this.rc(le, _, te));
						const Q = this.ic(),
							Z = this.Nb,
							se = this.Mb.length;
						this.Fc();
						let re = !1;
						return (
							Q || se !== this.Mb.length || !this.jc(Z, this.Nb)
								? (this.Ic({ forceRevealActiveTab: !0 }), (re = !0))
								: this.layout(this.Qb, { forceRevealActiveTab: !0 }),
							re
						);
					}
					ic() {
						return !!(
							(!this.Nb?.editor && this.R.activeEditor) ||
							(this.Nb?.editor && !this.R.activeEditor) ||
							!this.Nb?.editor ||
							!this.R.isActive(this.Nb.editor)
						);
					}
					jc(_, te) {
						return _ === te
							? !0
							: !_ || !te
								? !1
								: _.name === te.name &&
									_.description === te.description &&
									_.forceDescription === te.forceDescription &&
									_.title === te.title &&
									_.ariaLabel === te.ariaLabel;
					}
					beforeCloseEditor(_) {
						if (this.Vb && this.P.partOptions.tabSizing === "fixed") {
							const te = this.R.isLast(_);
							this.cc(!te);
						}
					}
					closeEditor(_) {
						this.kc();
					}
					closeEditors(_) {
						this.kc();
					}
					kc() {
						if (this.R.count) {
							const _ = (0, D.$wg)(this.Gb);
							for (; _.children.length > this.R.count; )
								_.lastChild?.remove(), (0, f.$Vc)(this.Pb.pop());
							this.Fc(), this.Ic({ forceRevealActiveTab: !0 });
						} else
							this.Gb && (0, P.$9fb)(this.Gb),
								(this.Pb = (0, f.$Vc)(this.Pb)),
								this.Lb.clear(),
								(this.Mb = []),
								(this.Nb = void 0),
								(this.Ob = []),
								this.lb(),
								this.Vc();
					}
					moveEditor(_, te, Q) {
						const Z = this.Mb[te];
						this.Mb.splice(te, 1),
							this.Mb.splice(Q, 0, Z),
							this.oc(
								(se, re, le, oe, ae, pe) => {
									this.Jc(se, re, le, oe, ae, pe);
								},
								Math.min(te, Q),
								Math.max(te, Q),
							),
							this.layout(this.Qb, { forceRevealActiveTab: !0 });
					}
					pinEditor(_) {
						this.pc(_, (te, Q, Z, se, re) => this.Kc(te, Q, Z, se, re));
					}
					stickEditor(_) {
						this.lc(_);
					}
					unstickEditor(_) {
						this.lc(_);
					}
					lc(_) {
						this.pc(_, (te, Q, Z, se, re, le) => this.Jc(te, Q, Z, se, re, le)),
							this.oc((te, Q, Z, se, re) => {
								this.Oc(Q, Z);
							}),
							this.layout(this.Qb, { forceRevealActiveTab: !0 });
					}
					setActive(_) {
						this.oc((te, Q, Z, se, re, le) => {
							this.Lc(_, te, Z, le);
						}),
							this.hb(),
							this.layout(this.Qb, { forceRevealActiveTab: !0 });
					}
					updateEditorSelections() {
						this.oc((_, te, Q, Z, se, re) => {
							this.Lc(this.P.activeGroup === this.Q, _, Q, re);
						});
					}
					updateEditorLabel(_) {
						this.mc.schedule();
					}
					nc() {
						this.Fc(),
							this.oc((_, te, Q, Z, se) => {
								this.Kc(_, te, Q, Z, se);
							}),
							this.layout(this.Qb);
					}
					updateEditorDirty(_) {
						this.pc(_, (te, Q, Z, se, re, le) =>
							this.Lc(this.P.activeGroup === this.Q, te, Z, le),
						);
					}
					updateOptions(_, te) {
						super.updateOptions(_, te),
							_.labelFormat !== te.labelFormat && this.Fc(),
							_.titleScrollbarSizing !== te.titleScrollbarSizing && this.ac(),
							_.alwaysShowEditorActions !== te.alwaysShowEditorActions &&
								this.hb(),
							(_.tabSizingFixedMinWidth !== te.tabSizingFixedMinWidth ||
								_.tabSizingFixedMaxWidth !== te.tabSizingFixedMaxWidth ||
								_.tabSizing !== te.tabSizing) &&
								this.bc(!0),
							(_.labelFormat !== te.labelFormat ||
								_.tabActionLocation !== te.tabActionLocation ||
								_.tabActionCloseVisibility !== te.tabActionCloseVisibility ||
								_.tabActionUnpinVisibility !== te.tabActionUnpinVisibility ||
								_.tabSizing !== te.tabSizing ||
								_.pinnedTabSizing !== te.pinnedTabSizing ||
								_.showIcons !== te.showIcons ||
								_.hasIcons !== te.hasIcons ||
								_.highlightModifiedTabs !== te.highlightModifiedTabs ||
								_.wrapTabs !== te.wrapTabs ||
								!(0, F.$zo)(_.decorations, te.decorations)) &&
								this.Ic();
					}
					updateStyles() {
						this.Ic();
					}
					oc(_, te, Q) {
						this.R.getEditors(w.EditorsOrder.SEQUENTIAL).forEach((Z, se) => {
							(typeof te == "number" && te > se) ||
								(typeof Q == "number" && Q < se) ||
								this.qc(se, Z, _);
						});
					}
					pc(_, te) {
						this.qc(this.R.indexOf(_), _, te);
					}
					qc(_, te, Q) {
						const se = (0, D.$wg)(this.Gb).children[_],
							re = this.Lb.get(_),
							le = this.Mb[_],
							oe = this.Ob[_];
						se && re && le && Q(te, _, se, re, le, oe);
					}
					rc(_, te, Q) {
						const Z = document.createElement("div");
						(Z.draggable = !0),
							Z.setAttribute("role", "tab"),
							Z.classList.add("tab"),
							this.D(d.$Qhb.addTarget(Z));
						const se = document.createElement("div");
						se.classList.add("tab-border-top-container"), Z.appendChild(se);
						const re = this.Lb.create(Z, { hoverDelegate: this.xb() }),
							le = document.createElement("div");
						le.classList.add("tab-actions"), Z.appendChild(le);
						const oe = this,
							ae = new p.$ptc({
								groupId: this.Q.id,
								get editorIndex() {
									return oe.sc(_);
								},
							}),
							pe = new u.$eib(le, {
								ariaLabel: (0, k.localize)(3547, null),
								actionRunner: ae,
							}),
							$e = pe.onWillRun((ve) => {
								ve.action.id === this.Jb.id && this.$c();
							}),
							ye = (0, f.$Xc)(pe, $e, (0, f.$Yc)((0, B.$Xb)(this.Ob, pe))),
							ue = document.createElement("div");
						ue.classList.add("tab-fade-hider"), Z.appendChild(ue);
						const fe = document.createElement("div");
						fe.classList.add("tab-border-bottom-container"), Z.appendChild(fe);
						const me = this.uc(Z, _, te, Q);
						return this.Pb.push((0, f.$Xc)(me, ye, ae, re)), Z;
					}
					sc(_) {
						const te = (0, D.$wg)(this.R.getEditorByIndex(_));
						return this.Q.getIndexOfEditor(te);
					}
					uc(_, te, Q, Z) {
						const se = new f.$Zc(),
							re = async (pe, $e) => {
								if (
									(_.blur(),
									(0, P.$7gb)(pe) && (pe.button !== 0 || (t.$m && pe.ctrlKey)))
								) {
									pe.button === 1 && pe.preventDefault();
									return;
								}
								if (this.ad(pe)) return;
								const ye = this.R.getEditorByIndex(te);
								if (ye)
									if (pe.shiftKey) {
										let ue;
										if (this.tc && this.R.isSelected(this.tc)) ue = this.tc;
										else {
											const fe = (0, D.$wg)(this.Q.activeEditor);
											(this.tc = fe), (ue = fe);
										}
										await this.Cc(ye, ue);
									} else if ((pe.ctrlKey && !t.$m) || (pe.metaKey && t.$m))
										this.R.isSelected(ye)
											? await this.Dc(ye)
											: (await this.Bc(ye), (this.tc = ye));
									else {
										const ue = this.R.isSelected(ye)
											? this.Q.selectedEditors.filter((fe) => !fe.matches(ye))
											: [];
										await this.Q.openEditor(
											ye,
											{
												preserveFocus: $e,
												activation: x.EditorActivation.ACTIVATE,
											},
											{ inactiveSelection: ue, focusTabControl: !0 },
										);
									}
							},
							le = (pe) => {
								P.$ahb.stop(pe);
								const $e = this.R.getEditorByIndex(te);
								$e && this.sb($e, pe, _);
							};
						se.add((0, P.$0fb)(_, P.$$gb.MOUSE_DOWN, (pe) => re(pe, !1))),
							se.add((0, P.$0fb)(_, d.EventType.Tap, (pe) => re(pe, !0))),
							se.add(
								(0, P.$0fb)(_, d.EventType.Change, (pe) => {
									Z.setScrollPosition({
										scrollLeft:
											Z.getScrollPosition().scrollLeft - pe.translationX,
									});
								}),
							),
							se.add(
								(0, P.$0fb)(_, P.$$gb.MOUSE_UP, async (pe) => {
									if (
										(P.$ahb.stop(pe),
										_.blur(),
										((0, P.$7gb)(pe) &&
											(pe.button !== 0 || (t.$m && pe.ctrlKey))) ||
											this.ad(pe))
									)
										return;
									!((pe.ctrlKey && !t.$m) || (pe.metaKey && t.$m)) &&
										!pe.shiftKey &&
										this.Q.selectedEditors.length > 1 &&
										(await this.Ec());
								}),
							),
							se.add(
								(0, P.$0fb)(_, P.$$gb.AUXCLICK, (pe) => {
									if (pe.button === 1) {
										P.$ahb.stop(pe, !0);
										const $e = this.R.getEditorByIndex(te);
										if ($e) {
											if (
												(0, w.$z1)(
													this.R,
													$e,
													w.EditorCloseMethod.MOUSE,
													this.P.partOptions,
												)
											)
												return;
											this.$c(),
												this.Jb.run({
													groupId: this.Q.id,
													editorIndex: this.Q.getIndexOfEditor($e),
												});
										}
									}
								}),
							),
							se.add(
								(0, P.$0fb)(_, P.$$gb.KEY_DOWN, (pe) => {
									const $e = new C.$7fb(pe);
									$e.shiftKey && $e.keyCode === m.KeyCode.F10 && le(pe);
								}),
							),
							se.add(
								(0, P.$0fb)(_, d.EventType.Contextmenu, (pe) => {
									le(pe);
								}),
							),
							se.add(
								(0, P.$0fb)(_, P.$$gb.KEY_UP, (pe) => {
									const $e = new C.$7fb(pe);
									let ye = !1;
									if (
										$e.equals(m.KeyCode.Enter) ||
										$e.equals(m.KeyCode.Space)
									) {
										ye = !0;
										const ue = this.R.getEditorByIndex(te);
										ue && this.Q.openEditor(ue);
									} else if (
										[
											m.KeyCode.LeftArrow,
											m.KeyCode.RightArrow,
											m.KeyCode.UpArrow,
											m.KeyCode.DownArrow,
											m.KeyCode.Home,
											m.KeyCode.End,
										].some((ue) => $e.equals(ue))
									) {
										let ue = this.sc(te);
										$e.equals(m.KeyCode.LeftArrow) ||
										$e.equals(m.KeyCode.UpArrow)
											? (ue = ue - 1)
											: $e.equals(m.KeyCode.RightArrow) ||
													$e.equals(m.KeyCode.DownArrow)
												? (ue = ue + 1)
												: $e.equals(m.KeyCode.Home)
													? (ue = 0)
													: (ue = this.Q.count - 1);
										const fe = this.Q.getEditorByIndex(ue);
										fe &&
											((ye = !0),
											this.Q.openEditor(
												fe,
												{ preserveFocus: !0 },
												{ focusTabControl: !0 },
											));
									}
									ye && P.$ahb.stop(pe, !0),
										Z.setScrollPosition({ scrollLeft: Q.scrollLeft });
								}),
							);
						for (const pe of [d.EventType.Tap, P.$$gb.DBLCLICK])
							se.add(
								(0, P.$0fb)(_, pe, ($e) => {
									if (pe === P.$$gb.DBLCLICK) P.$ahb.stop($e);
									else if ($e.tapCount !== 2) return;
									const ye = this.R.getEditorByIndex(te);
									if (ye && this.R.isPinned(ye))
										switch (
											this.P.partOptions.doubleClickTabToToggleEditorGroupSizes
										) {
											case "maximize":
												this.P.toggleMaximizeGroup(this.Q);
												break;
											case "expand":
												this.P.toggleExpandGroup(this.Q);
												break;
											case "off":
												break;
										}
									else this.Q.pinEditor(ye);
								}),
							);
						se.add(
							(0, P.$0fb)(
								_,
								P.$$gb.CONTEXT_MENU,
								(pe) => {
									P.$ahb.stop(pe, !0);
									const $e = this.R.getEditorByIndex(te);
									$e && this.sb($e, pe, _);
								},
								!0,
							),
						);
						let oe,
							ae = !1;
						return (
							se.add(
								new P.$Hhb(_, {
									onDragStart: (pe) => {
										const $e = this.R.getEditorByIndex(te);
										if (!$e) return;
										ae = this.pb(pe);
										const ye = this.Q.selectedEditors;
										if (
											(this.a.setData(
												ye.map(
													(ue) =>
														new S.$LSb({ editor: ue, groupId: this.Q.id }),
												),
												S.$LSb.prototype,
											),
											pe.dataTransfer)
										)
											if (
												((pe.dataTransfer.effectAllowed = "copyMove"),
												ye.length > 1)
											) {
												const ue = `${$e.getName()} + ${ye.length - 1}`;
												(0, Y.$Phb)(
													pe,
													ue,
													"monaco-editor-group-drag-image",
													this.w(v.$ES),
													this.w(v.$FS),
												);
											} else pe.dataTransfer.setDragImage(_, 0, 0);
										this.rb(ye, pe, ae),
											(0, P.$hgb)((0, P.getWindow)(this.N), () =>
												this.wc(_, !1, pe, te),
											);
									},
									onDrag: (pe) => {
										oe = pe;
									},
									onDragEnter: (pe) => {
										if (!this.vc(pe)) {
											pe.dataTransfer && (pe.dataTransfer.dropEffect = "none");
											return;
										}
										this.a.hasData(S.$LSb.prototype) ||
											(pe.dataTransfer &&
												(pe.dataTransfer.dropEffect = "copy")),
											this.wc(_, !0, pe, te);
									},
									onDragOver: (pe, $e) => {
										if ($e >= ie.Bb) {
											const ye = this.R.getEditorByIndex(te);
											ye &&
												this.R.activeEditor !== ye &&
												this.Q.openEditor(ye, { preserveFocus: !0 });
										}
										this.wc(_, !0, pe, te);
									},
									onDragEnd: async (pe) => {
										this.wc(_, !1, pe, te);
										const $e = this.a.getData(S.$LSb.prototype);
										if (
											(this.a.clearData(S.$LSb.prototype),
											!ae || (0, S.$WSb)() || !$e || $e.length === 0)
										)
											return;
										const ye = await this.ob(pe, _);
										if (!ye) return;
										const ue = ye.activeGroup,
											fe = $e.map((me) => ({ editor: me.identifier.editor }));
										this.qb(oe ?? pe, ue.id, $e[0].identifier.editor)
											? this.Q.moveEditors(fe, ue)
											: this.Q.copyEditors(fe, ue),
											ue.focus();
									},
									onDrop: (pe) => {
										this.wc(_, !1, pe, te);
										let $e = te;
										this.zc(pe, _) === "right" && $e++, this.bd(pe, $e, Q);
									},
								}),
							),
							se
						);
					}
					vc(_) {
						if (this.b.hasData(S.$MSb.prototype)) {
							const te = this.b.getData(S.$MSb.prototype);
							return !(
								Array.isArray(te) &&
								te.length > 0 &&
								te[0].identifier === this.Q.id
							);
						}
						return !!(
							this.a.hasData(S.$LSb.prototype) ||
							(_.dataTransfer && _.dataTransfer.types.length > 0)
						);
					}
					wc(_, te, Q, Z) {
						const se = typeof Z == "number";
						let re;
						te
							? se
								? (re = this.Ac(Q, Z, _))
								: (re = {
										leftElement: _.lastElementChild,
										rightElement: void 0,
									})
							: (re = void 0),
							this.yc(re);
					}
					yc(_) {
						const te = this.xc;
						if (
							te === _ ||
							(te &&
								_ &&
								te.leftElement === _.leftElement &&
								te.rightElement === _.rightElement)
						)
							return;
						const Q = "drop-target-left",
							Z = "drop-target-right";
						te &&
							(te.leftElement?.classList.remove(Q),
							te.rightElement?.classList.remove(Z)),
							_ &&
								(_.leftElement?.classList.add(Q),
								_.rightElement?.classList.add(Z)),
							(this.xc = _);
					}
					zc(_, te) {
						const Q = te.getBoundingClientRect();
						return _.clientX - Q.left <= Q.width / 2 ? "left" : "right";
					}
					Ac(_, te, Q) {
						const Z = this.zc(_, Q) === "left",
							se = te === this.R.count - 1;
						if (Z && te === 0) return { leftElement: void 0, rightElement: Q };
						if (!Z && se) return { leftElement: Q, rightElement: void 0 };
						const le = Z ? Q.previousElementSibling : Q,
							oe = Z ? Q : Q.nextElementSibling;
						return { leftElement: le, rightElement: oe };
					}
					async Bc(_) {
						this.Q.isActive(_) ||
							(await this.Q.setSelection(_, this.Q.selectedEditors));
					}
					async Cc(_, te) {
						const Q = this.Q.getIndexOfEditor(_);
						if (Q === -1) throw new X.$gb();
						const Z = this.Q.getIndexOfEditor(te);
						if (Z === -1) throw new X.$gb();
						let se = this.Q.selectedEditors,
							re = Z;
						for (; re >= 0 && re <= this.Q.count - 1; ) {
							re = Z < Q ? re - 1 : re + 1;
							const $e = this.Q.getEditorByIndex(re);
							if (!$e || !this.Q.isSelected($e)) break;
							se = se.filter((ye) => !ye.matches($e));
						}
						const le = Z < Q ? Z : Q,
							oe = Z < Q ? Q : Z,
							ae = this.Q.getEditors(w.EditorsOrder.SEQUENTIAL).slice(
								le,
								oe + 1,
							);
						for (const $e of ae) this.Q.isSelected($e) || se.push($e);
						const pe = se.filter(($e) => !$e.matches(_));
						await this.Q.setSelection(_, pe);
					}
					async Dc(_) {
						const te = this.Q.isActive(_);
						if (te && this.Q.selectedEditors.length === 1) return;
						let Q = (0, D.$wg)(this.Q.activeEditor);
						if (te) {
							const se = this.Q.getEditors(w.EditorsOrder.MOST_RECENTLY_ACTIVE);
							for (let re = 1; re < se.length; re++) {
								const le = se[re];
								if (this.Q.isSelected(le)) {
									Q = le;
									break;
								}
							}
						}
						const Z = this.Q.selectedEditors.filter(
							(se) => !se.matches(_) && !se.matches(Q),
						);
						await this.Q.setSelection(Q, Z);
					}
					async Ec() {
						if (this.Q.selectedEditors.length > 1) {
							const _ = (0, D.$wg)(this.Q.activeEditor);
							await this.Q.setSelection(_, []);
						}
					}
					Fc() {
						const { labelFormat: _ } = this.P.partOptions,
							{ verbosity: te, shortenDuplicates: Q } = this.Hc(_),
							Z = [];
						let se = -1;
						this.R.getEditors(w.EditorsOrder.SEQUENTIAL).forEach((re, le) => {
							Z.push({
								editor: re,
								name: re.getName(),
								description: re.getDescription(te),
								forceDescription: re.hasCapability(
									w.EditorInputCapabilities.ForceDescription,
								),
								title: re.getTitle(w.Verbosity.LONG),
								ariaLabel: (0, E.$yVb)(re, le, this.Q, this.O.count),
							}),
								re === this.R.activeEditor && (se = le);
						}),
							Q && this.Gc(Z),
							(this.Mb = Z),
							(this.Nb = Z[se]);
					}
					Gc(_) {
						const te = new Map();
						for (const Q of _)
							typeof Q.description == "string"
								? (0, l.$Dc)(te, Q.name, []).push(Q)
								: (Q.description = "");
						for (const [, Q] of te) {
							if (Q.length === 1 && !Q[0].forceDescription) {
								Q[0].description = "";
								continue;
							}
							const Z = new Map();
							for (const oe of Q) (0, l.$Dc)(Z, oe.description, []).push(oe);
							let se = !1;
							for (const [, oe] of Z)
								if (!se && oe.length > 1) {
									const [ae, ...pe] = oe.map(({ editor: $e }) =>
										$e.getDescription(w.Verbosity.LONG),
									);
									se = pe.some(($e) => $e !== ae);
								}
							if (se) {
								Z.clear();
								for (const oe of Q)
									(oe.description = oe.editor.getDescription(w.Verbosity.LONG)),
										(0, l.$Dc)(Z, oe.description, []).push(oe);
							}
							const re = [];
							for (const [oe] of Z) re.push(oe);
							if (re.length === 1) {
								for (const oe of Z.get(re[0]) || [])
									oe.forceDescription || (oe.description = "");
								continue;
							}
							const le = (0, i.$AO)(re, this.Tb.sep);
							re.forEach((oe, ae) => {
								for (const pe of Z.get(oe) || []) pe.description = le[ae];
							});
						}
					}
					Hc(_) {
						switch (_) {
							case "short":
								return { verbosity: w.Verbosity.SHORT, shortenDuplicates: !1 };
							case "medium":
								return { verbosity: w.Verbosity.MEDIUM, shortenDuplicates: !1 };
							case "long":
								return { verbosity: w.Verbosity.LONG, shortenDuplicates: !1 };
							default:
								return { verbosity: w.Verbosity.MEDIUM, shortenDuplicates: !0 };
						}
					}
					Ic(_) {
						if (this.Fb) {
							let te = this.w($.$gFb);
							!te &&
								(0, U.$gP)(this.h.type) &&
								(te = this.w($.$YEb) || this.w(v.$OP)),
								te
									? (this.Fb.classList.add("tabs-border-bottom"),
										this.Fb.style.setProperty(
											"--tabs-border-bottom-color",
											te.toString(),
										))
									: (this.Fb.classList.remove("tabs-border-bottom"),
										this.Fb.style.removeProperty("--tabs-border-bottom-color"));
						}
						this.oc((te, Q, Z, se, re, le) => {
							this.Jc(te, Q, Z, se, re, le);
						}),
							this.hb(),
							this.layout(this.Qb, _);
					}
					Jc(_, te, Q, Z, se, re) {
						const le = this.R.isSticky(te),
							oe = this.P.partOptions;
						this.Kc(_, te, Q, Z, se);
						const ae = le && oe.tabActionUnpinVisibility,
							pe = !ae && oe.tabActionCloseVisibility,
							$e = ae || pe;
						let ye;
						$e ? (ye = ae ? this.Kb : this.Jb) : (ye = le ? this.Kb : this.Jb),
							re.hasAction(ye) ||
								(re.isEmpty() || re.clear(),
								re.push(ye, { icon: !0, label: !1, keybinding: this.ub(ye) })),
							Q.classList.toggle("pinned-action-off", le && !ae),
							Q.classList.toggle("close-action-off", !ae && !pe);
						for (const fe of ["left", "right"])
							Q.classList.toggle(
								`tab-actions-${fe}`,
								$e && oe.tabActionLocation === fe,
							);
						const ue =
							le && oe.pinnedTabSizing === "shrink" ? "shrink" : oe.tabSizing;
						for (const fe of ["fit", "shrink", "fixed"])
							Q.classList.toggle(`sizing-${fe}`, ue === fe);
						Q.classList.toggle("has-icon", oe.showIcons && oe.hasIcons),
							Q.classList.toggle("sticky", le);
						for (const fe of ["normal", "compact", "shrink"])
							Q.classList.toggle(
								`sticky-${fe}`,
								le && oe.pinnedTabSizing === fe,
							);
						if (!oe.wrapTabs && le && oe.pinnedTabSizing !== "normal") {
							let fe = 0;
							switch (oe.pinnedTabSizing) {
								case "compact":
									fe = ie.Ab.compact;
									break;
								case "shrink":
									fe = ie.Ab.shrink;
									break;
							}
							Q.style.left = `${te * fe}px`;
						} else Q.style.left = "auto";
						this.Oc(te, Q), this.Lc(this.P.activeGroup === this.Q, _, Q, re);
					}
					Kc(_, te, Q, Z, se) {
						const re = this.P.partOptions;
						let le,
							oe = !1,
							ae = !!re.decorations?.badges;
						const pe = !!re.decorations?.colors;
						let $e;
						re.pinnedTabSizing === "compact" && this.R.isSticky(te)
							? ((le =
									re.showIcons && re.hasIcons
										? ""
										: se.name?.charAt(0).toUpperCase()),
								($e = ""),
								(oe = !0),
								(ae = !1))
							: ((le = se.name), ($e = se.description || "")),
							se.ariaLabel &&
								(Q.setAttribute("aria-label", se.ariaLabel),
								Q.setAttribute("aria-description", "")),
							Z.setResource(
								{
									name: le,
									description: $e,
									resource: w.$A1.getOriginalUri(_, {
										supportSideBySide: w.SideBySideEditor.BOTH,
									}),
								},
								{
									title: this.wb(_),
									extraClasses: (0, B.$Lb)(
										["tab-label", ae ? "tab-label-has-badge" : void 0].concat(
											_.getLabelExtraClasses(),
										),
									),
									italic: !this.R.isPinned(_),
									forceLabel: oe,
									fileDecorations: { colors: pe, badges: ae },
									icon: _.getIcon(),
									hideIcon: re.showIcons === !1,
								},
							);
						const ye = w.$A1.getOriginalUri(_, {
							supportSideBySide: w.SideBySideEditor.PRIMARY,
						});
						ye
							? Q.setAttribute("data-resource-name", (0, N.$jh)(ye))
							: Q.removeAttribute("data-resource-name");
					}
					Lc(_, te, Q, Z) {
						const se = this.R.isActive(te),
							re = this.Nc(_, se, te, Q);
						this.Mc(_, !re, te, Q, Z);
					}
					Mc(_, te, Q, Z, se) {
						const re = this.R.isActive(Q),
							le = this.R.isSelected(Q);
						if (
							(Z.classList.toggle("active", re),
							Z.classList.toggle("selected", le),
							Z.setAttribute("aria-selected", re ? "true" : "false"),
							(Z.tabIndex = re ? 0 : -1),
							se.setFocusable(re),
							re)
						) {
							const ae = this.w(_ ? $.$1Eb : $.$2Eb);
							Z.classList.toggle("tab-border-bottom", !!ae),
								Z.style.setProperty("--tab-border-bottom-color", ae ?? "");
						}
						let oe = null;
						te &&
							(re && (oe = this.w(_ ? $.$3Eb : $.$4Eb)),
							oe === null && le && (oe = this.w($.$5Eb))),
							Z.classList.toggle("tab-border-top", !!oe),
							Z.style.setProperty("--tab-border-top-color", oe ?? "");
					}
					Nc(_, te, Q, Z) {
						let se = !1;
						if (Q.isDirty() && !Q.isSaving())
							if (
								(Z.classList.add("dirty"),
								this.P.partOptions.highlightModifiedTabs)
							) {
								let re;
								_ && te
									? (re = this.w($.$$Eb))
									: _ && !te
										? (re = this.w($.$_Eb))
										: !_ && te
											? (re = this.w($.$aFb))
											: (re = this.w($.$bFb)),
									re &&
										((se = !0),
										Z.classList.add("dirty-border-top"),
										Z.style.setProperty("--tab-dirty-border-top-color", re));
							} else
								Z.classList.remove("dirty-border-top"),
									Z.style.removeProperty("--tab-dirty-border-top-color");
						else
							Z.classList.remove("dirty", "dirty-border-top"),
								Z.style.removeProperty("--tab-dirty-border-top-color");
						return se;
					}
					Oc(_, te) {
						const Z = this.R.isSticky(_) && this.R.stickyCount === _ + 1,
							se = this.R.stickyCount !== this.R.count,
							re =
								(Z && se ? this.w($.$ZEb) : void 0) ||
								this.w($.$YEb) ||
								this.w(v.$OP);
						(te.style.borderRight = re ? `1px solid ${re}` : ""),
							(te.style.outlineColor = this.w(v.$PP) || "");
					}
					ib(_) {
						return this.P.activeGroup === this.Q
							? _
							: {
									primary: this.P.partOptions.alwaysShowEditorActions
										? _.primary
										: _.primary.filter((Q) => Q.id === H.$0Vb),
									secondary: _.secondary,
								};
					}
					getHeight() {
						return this.Qb.used ? this.Qb.used.height : this.Qc();
					}
					Qc() {
						let _;
						return (
							this.Wc
								? this.P.partOptions.wrapTabs &&
									this.Fb?.classList.contains("wrapping")
									? (_ = this.Fb.offsetHeight)
									: (_ = this.vb)
								: (_ = 0),
							_
						);
					}
					layout(_, te) {
						if ((Object.assign(this.Qb, _), this.Wc)) {
							if (!this.Rb.value) {
								const Q = (0, P.$hgb)((0, P.getWindow)(this.N), () => {
									this.Rc(this.Qb, this.Rb.value?.options), this.Rb.clear();
								});
								this.Rb.value = { options: te, dispose: () => Q.dispose() };
							}
							te?.forceRevealActiveTab &&
								(this.Rb.value.options = {
									...this.Rb.value.options,
									forceRevealActiveTab: !0,
								});
						}
						return (
							this.Qb.used ||
								(this.Qb.used = new P.$pgb(_.container.width, this.Qc())),
							this.Qb.used
						);
					}
					Rc(_, te) {
						_.container !== P.$pgb.None &&
							_.available !== P.$pgb.None &&
							this.Sc(_, te);
						const Q = this.Qb.used,
							Z = (this.Qb.used = new P.$pgb(_.container.width, this.Qc()));
						Q && Q.height !== Z.height && this.Q.relayout();
					}
					Sc(_, te) {
						this.Tc(_) || this.Uc(te);
					}
					Tc(_) {
						const [te, Q, Z, se] = (0, D.$xg)(
								this.Fb,
								this.Gb,
								this.g,
								this.Hb,
							),
							re = te.classList.contains("wrapping");
						let le = re;
						function oe(ae) {
							(le = ae),
								te.classList.toggle("wrapping", le),
								Q.style.setProperty(
									"--last-tab-margin-right",
									le ? `${Z.offsetWidth}px` : "0",
								);
							for (const pe of Q.children) pe.classList.remove("last-in-row");
						}
						if (this.P.partOptions.wrapTabs) {
							const ae = Q.offsetWidth,
								pe = Q.scrollWidth,
								$e = () => {
									const ye = this.Zc();
									return ye
										? !(ye.offsetWidth + Z.offsetWidth - _.available.width > 1)
										: !0;
								};
							(le || (pe > ae && $e())) && oe(!0),
								le &&
									(Q.offsetHeight > _.available.height ||
										(pe === ae && Q.offsetHeight === this.vb) ||
										!$e()) &&
									oe(!1);
						} else re && oe(!1);
						if (le && !re) {
							const ae = Q.offsetWidth;
							se.setScrollDimensions({ width: ae, scrollWidth: ae });
						}
						if (le) {
							const ae = new Map();
							let pe, $e;
							for (const ye of Q.children) {
								const ue = ye,
									fe = ue.offsetTop;
								fe !== pe && ((pe = fe), $e && ae.set($e, !0)),
									($e = ue),
									ae.set(ue, !1);
							}
							$e && ae.set($e, !0);
							for (const [ye, ue] of ae) ye.classList.toggle("last-in-row", ue);
						}
						return le;
					}
					Uc(_) {
						const [te, Q] = (0, D.$xg)(this.Gb, this.Hb),
							Z = te.offsetWidth,
							se = te.scrollWidth;
						let re = 0;
						if (this.R.stickyCount > 0) {
							let Le = 0;
							switch (this.P.partOptions.pinnedTabSizing) {
								case "compact":
									Le = ie.Ab.compact;
									break;
								case "shrink":
									Le = ie.Ab.shrink;
									break;
							}
							re = this.R.stickyCount * Le;
						}
						const le = this.R.activeEditor
								? this.Xc(this.R.activeEditor)
								: void 0,
							[oe, ae] = le ?? [void 0, void 0];
						let pe =
								this.P.partOptions.pinnedTabSizing !== "normal" &&
								typeof ae == "number" &&
								this.R.isSticky(ae),
							$e = Z - re;
						this.R.stickyCount > 0 && $e < ie.Ab.fit
							? (te.classList.add("disable-sticky-tabs"),
								($e = Z),
								(re = 0),
								(pe = !1))
							: te.classList.remove("disable-sticky-tabs");
						let ye, ue;
						!this.Sb && oe && ((ye = oe.offsetLeft), (ue = oe.offsetWidth));
						const { width: fe, scrollWidth: me } = Q.getScrollDimensions();
						Q.setScrollDimensions({ width: Z, scrollWidth: se });
						const ve = fe !== Z || me !== se;
						if (
							this.Sb ||
							typeof ye != "number" ||
							typeof ue != "number" ||
							pe ||
							(!ve && !_?.forceRevealActiveTab)
						) {
							this.Sb = !1;
							return;
						}
						const ge = Q.getScrollPosition().scrollLeft,
							be = ue <= $e,
							Ce = ye - re;
						be && ge + $e < Ce + ue
							? Q.setScrollPosition({ scrollLeft: ge + (Ce + ue - (ge + $e)) })
							: (ge > Ce || !be) && Q.setScrollPosition({ scrollLeft: Ce });
					}
					Vc() {
						(0, D.$wg)(this.Fb).classList.toggle("empty", !this.Wc),
							!this.Wc && this.Qb && (this.Qb.used = void 0);
					}
					get Wc() {
						return this.R.count > 0;
					}
					Xc(_) {
						const te = this.R.indexOf(_),
							Q = this.Yc(te);
						if (Q) return [Q, te];
					}
					Yc(_) {
						if (_ >= 0) return (0, D.$wg)(this.Gb).children[_];
					}
					Zc() {
						return this.Yc(this.R.count - 1);
					}
					$c() {
						this.Sb = !0;
					}
					ad(_) {
						let te;
						return (
							(0, P.$7gb)(_)
								? (te = _.target || _.srcElement)
								: (te = _.initialTarget),
							!!(0, P.$Egb)(te, "action-item", "tab")
						);
					}
					async bd(_, te, Q) {
						P.$ahb.stop(_, !0),
							this.wc(Q, !1, _, te),
							Q.classList.remove("scroll");
						let Z = this.R instanceof J.$jtc ? te + this.Q.stickyCount : te;
						const se = {
							sticky: this.R instanceof J.$itc && this.R.stickyCount === Z,
							index: Z,
						};
						if (this.b.hasData(S.$MSb.prototype)) {
							const re = this.b.getData(S.$MSb.prototype);
							if (Array.isArray(re) && re.length > 0) {
								const le = this.O.getGroup(re[0].identifier);
								if (le) {
									const oe = { index: Z };
									this.qb(_, le.id) ||
										(oe.mode = T.MergeGroupMode.COPY_EDITORS),
										this.P.mergeGroup(le, this.Q, oe);
								}
								this.Q.focus(), this.b.clearData(S.$MSb.prototype);
							}
						} else if (this.a.hasData(S.$LSb.prototype)) {
							const re = this.a.getData(S.$LSb.prototype);
							if (Array.isArray(re) && re.length > 0) {
								const le = this.O.getGroup(re[0].identifier.groupId);
								if (le)
									for (const oe of re) {
										const ae = oe.identifier.editor;
										if (le.id !== oe.identifier.groupId) continue;
										const pe = le.getIndexOfEditor(ae);
										le === this.Q && pe < Z && Z--,
											this.qb(_, oe.identifier.groupId, ae)
												? le.moveEditor(ae, this.Q, { ...se, index: Z })
												: le.copyEditor(ae, this.Q, { ...se, index: Z }),
											Z++;
									}
							}
							this.Q.focus(), this.a.clearData(S.$LSb.prototype);
						} else if (this.c.hasData(G.$b3b.prototype)) {
							const re = this.c.getData(G.$b3b.prototype);
							if (Array.isArray(re) && re.length > 0) {
								const le = [];
								for (const oe of re) {
									const ae = await this.Yb.removeDragOperationTransfer(
										oe.identifier,
									);
									if (ae) {
										const pe = await (0, S.$NSb)(ae);
										le.push(
											...pe.map(($e) => ({
												...$e,
												options: { ...$e.options, pinned: !0, index: Z },
											})),
										);
									}
								}
								this.Wb.openEditors(le, this.Q, { validateTrust: !0 });
							}
							this.c.clearData(G.$b3b.prototype);
						} else
							this.U.createInstance(S.$OSb, {
								allowWorkspaceOpen: !1,
							}).handleDrop(
								_,
								(0, P.getWindow)(this.N),
								() => this.Q,
								() => this.Q.focus(),
								se,
							);
					}
					dispose() {
						super.dispose(), (this.Pb = (0, f.$Vc)(this.Pb));
					}
				};
				(e.$ktc = ne),
					(e.$ktc =
						ne =
						ie =
							Ne(
								[
									j(5, a.$Xxb),
									j(6, h.$Li),
									j(7, n.$6j),
									j(8, c.$uZ),
									j(9, I.$4N),
									j(10, o.$DJ),
									j(11, y.$iP),
									j(12, M.$IY),
									j(13, R.$I8),
									j(14, V.$c3b),
									j(15, K.$E6),
									j(16, W.$asb),
								],
								ne,
							)),
					(0, y.$oP)((ee, _) => {
						const te = ee.getColor($.$YEb);
						te &&
							_.addRule(`
			.monaco-workbench .part.editor > .content .editor-group-container > .title > .tabs-and-actions-container.wrapping .tabs-container > .tab {
				border-bottom: 1px solid ${te};
			}
		`);
						const Q = ee.getColor(v.$PP);
						Q &&
							_.addRule(`
			.monaco-workbench .part.editor > .content .editor-group-container.active > .title .tabs-container > .tab.active,
			.monaco-workbench .part.editor > .content .editor-group-container.active > .title .tabs-container > .tab.active:hover  {
				outline: 1px solid;
				outline-offset: -5px;
			}

			.monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab.selected:not(.active):not(:hover)  {
				outline: 1px dotted;
				outline-offset: -5px;
			}

			.monaco-workbench .part.editor > .content .editor-group-container.active > .title .tabs-container > .tab.active:focus {
				outline-style: dashed;
			}

			.monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab.active {
				outline: 1px dotted;
				outline-offset: -5px;
			}

			.monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab:hover  {
				outline: 1px dashed;
				outline-offset: -5px;
			}

			.monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab.active > .tab-actions .action-label,
			.monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab.active:hover > .tab-actions .action-label,
			.monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab.dirty > .tab-actions .action-label,
			.monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab.sticky > .tab-actions .action-label,
			.monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab:hover > .tab-actions .action-label {
				opacity: 1 !important;
			}
		`);
						const Z = ee.getColor(v.$OP);
						Z &&
							_.addRule(`
			.monaco-workbench .part.editor > .content .editor-group-container > .title .editor-actions {
				outline: 1px solid ${Z}
			}
		`);
						const se = ee.getColor($.$UEb);
						se &&
							_.addRule(`
			.monaco-workbench .part.editor > .content .editor-group-container.active > .title .tabs-container > .tab:not(.selected):hover {
				background-color: ${se} !important;
			}
		`);
						const re = ee.getColor($.$VEb);
						re &&
							_.addRule(`
			.monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab:not(.selected):hover  {
				background-color: ${re} !important;
			}
		`);
						const le = ee.getColor($.$WEb);
						le &&
							_.addRule(`
			.monaco-workbench .part.editor > .content .editor-group-container.active > .title .tabs-container > .tab:not(.selected):hover  {
				color: ${le} !important;
			}
		`);
						const oe = ee.getColor($.$XEb);
						oe &&
							_.addRule(`
			.monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab:not(.selected):hover  {
				color: ${oe} !important;
			}
		`);
						const ae = ee.getColor($.$8Eb);
						ae &&
							_.addRule(`
			.monaco-workbench .part.editor > .content .editor-group-container.active > .title .tabs-container > .tab:hover > .tab-border-bottom-container {
				display: block;
				position: absolute;
				left: 0;
				pointer-events: none;
				width: 100%;
				z-index: 10;
				bottom: 0;
				height: 1px;
				background-color: ${ae};
			}
		`);
						const pe = ee.getColor($.$9Eb);
						if (
							(pe &&
								_.addRule(`
			.monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab:hover > .tab-border-bottom-container  {
				display: block;
				position: absolute;
				left: 0;
				pointer-events: none;
				width: 100%;
				z-index: 10;
				bottom: 0;
				height: 1px;
				background-color: ${pe};
			}
		`),
							!(0, U.$gP)(ee.type) && !z.$Rfb && !Q)
						) {
							const $e = (0, $.$LEb)(ee),
								ye = ee.getColor(v.$8P),
								ue = ee.getColor($.$fFb),
								fe = ee.getColor($.$kFb);
							let me;
							ue && ye && (me = ue.flatten(ye, ye, $e));
							let ve;
							ue && ye && fe && ye && (ve = ue.flatten(ye, fe, ye, $e));
							const ge = (xe, He, Ke = !1) => `
			.monaco-workbench .part.editor > .content:not(.dragged-over) .editor-group-container${Ke ? ".active" : ""} > .title .tabs-container > .tab.sizing-shrink:not(.dragged):not(.sticky-compact):hover > .tab-label > .monaco-icon-label-container::after,
			.monaco-workbench .part.editor > .content:not(.dragged-over) .editor-group-container${Ke ? ".active" : ""} > .title .tabs-container > .tab.sizing-fixed:not(.dragged):not(.sticky-compact):hover > .tab-label > .monaco-icon-label-container::after {
				background: linear-gradient(to left, ${xe}, transparent) !important;
			}

			.monaco-workbench .part.editor > .content.dragged-over .editor-group-container${Ke ? ".active" : ""} > .title .tabs-container > .tab.sizing-shrink:not(.dragged):not(.sticky-compact):hover > .tab-label > .monaco-icon-label-container::after,
			.monaco-workbench .part.editor > .content.dragged-over .editor-group-container${Ke ? ".active" : ""} > .title .tabs-container > .tab.sizing-fixed:not(.dragged):not(.sticky-compact):hover > .tab-label > .monaco-icon-label-container::after {
				background: linear-gradient(to left, ${He}, transparent) !important;
			}
		`;
							if (se && me && ve) {
								const xe = se.flatten(me),
									He = se.flatten(ve);
								_.addRule(ge(xe, He, !0));
							}
							if (re && me && ve) {
								const xe = re.flatten(me),
									He = re.flatten(ve);
								_.addRule(ge(xe, He));
							}
							if (fe && ve) {
								const xe = fe.flatten(ve);
								_.addRule(`
				.monaco-workbench .part.editor > .content.dragged-over .editor-group-container.active > .title .tabs-container > .tab.sizing-shrink.dragged-over:not(.active):not(.dragged):not(.sticky-compact) > .tab-label > .monaco-icon-label-container::after,
				.monaco-workbench .part.editor > .content.dragged-over .editor-group-container:not(.active) > .title .tabs-container > .tab.sizing-shrink.dragged-over:not(.dragged):not(.sticky-compact) > .tab-label > .monaco-icon-label-container::after,
				.monaco-workbench .part.editor > .content.dragged-over .editor-group-container.active > .title .tabs-container > .tab.sizing-fixed.dragged-over:not(.active):not(.dragged):not(.sticky-compact) > .tab-label > .monaco-icon-label-container::after,
				.monaco-workbench .part.editor > .content.dragged-over .editor-group-container:not(.active) > .title .tabs-container > .tab.sizing-fixed.dragged-over:not(.dragged):not(.sticky-compact) > .tab-label > .monaco-icon-label-container::after {
					background: linear-gradient(to left, ${xe}, transparent) !important;
				}
		`);
							}
							const be = (xe, He, Ke, Je) => `
				.monaco-workbench .part.editor > .content:not(.dragged-over) .editor-group-container${Ke ? ".active" : ":not(.active)"} > .title .tabs-container > .tab.sizing-shrink${Je ? ".active" : ""}:not(.dragged):not(.sticky-compact) > .tab-label > .monaco-icon-label-container::after,
				.monaco-workbench .part.editor > .content:not(.dragged-over) .editor-group-container${Ke ? ".active" : ":not(.active)"} > .title .tabs-container > .tab.sizing-fixed${Je ? ".active" : ""}:not(.dragged):not(.sticky-compact) > .tab-label > .monaco-icon-label-container::after {
					background: linear-gradient(to left, ${xe}, transparent);
				}

				.monaco-workbench .part.editor > .content.dragged-over .editor-group-container${Ke ? ".active" : ":not(.active)"} > .title .tabs-container > .tab.sizing-shrink${Je ? ".active" : ""}:not(.dragged):not(.sticky-compact) > .tab-label > .monaco-icon-label-container::after,
				.monaco-workbench .part.editor > .content.dragged-over .editor-group-container${Ke ? ".active" : ":not(.active)"} > .title .tabs-container > .tab.sizing-fixed${Je ? ".active" : ""}:not(.dragged):not(.sticky-compact) > .tab-label > .monaco-icon-label-container::after {
					background: linear-gradient(to left, ${He}, transparent);
				}
		`,
								Ce = ee.getColor($.$MEb);
							if (Ce && me && ve) {
								const xe = Ce.flatten(me),
									He = Ce.flatten(ve);
								_.addRule(be(xe, He, !0, !0));
							}
							const Le = ee.getColor($.$NEb);
							if (Le && me && ve) {
								const xe = Le.flatten(me),
									He = Le.flatten(ve);
								_.addRule(be(xe, He, !1, !0));
							}
							const Fe = ee.getColor($.$OEb);
							if (Fe && me && ve) {
								const xe = Fe.flatten(me),
									He = Fe.flatten(ve);
								_.addRule(be(xe, He, !0, !1));
							}
							const Oe = ee.getColor($.$PEb);
							if (Oe && me && ve) {
								const xe = Oe.flatten(me),
									He = Oe.flatten(ve);
								_.addRule(be(xe, He, !1, !1));
							}
						}
					});
			},
		),
		define(
			de[4009],
			he([1, 0, 7, 5, 1935, 3, 1700]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$mtc = void 0);
				let d = class extends E.$1c {
					constructor(r, u, a, h, c, n) {
						super(),
							(this.f = r),
							(this.g = a),
							(this.h = h),
							(this.j = c),
							(this.m = n);
						const g = this.D(new C.$itc(this.j)),
							p = this.D(new C.$jtc(this.j));
						(this.a = this.D(
							this.m.createInstance(w.$ktc, this.f, u, this.g, this.h, g),
						)),
							(this.b = this.D(
								this.m.createInstance(w.$ktc, this.f, u, this.g, this.h, p),
							)),
							this.n();
					}
					n() {
						(this.c = this.j.activeEditor
							? this.s(this.j.activeEditor)
							: void 0),
							this.q();
					}
					q() {
						if (this.h.count === 0) return;
						const r = this.f.classList.contains("two-tab-bars"),
							u = this.h.count !== this.h.stickyCount && this.h.stickyCount > 0;
						this.f.classList.toggle("two-tab-bars", u),
							r !== u && this.h.relayout();
					}
					r() {
						return (
							this.c !==
							(this.j.activeEditor ? this.s(this.j.activeEditor) : void 0)
						);
					}
					s(r) {
						return this.j.isSticky(r) ? this.a : this.b;
					}
					openEditor(r, u) {
						const a = this.r(),
							c = this.s(r).openEditor(r, u) || a;
						return c && this.t(), c;
					}
					openEditors(r) {
						const u = r.filter((p) => this.j.isSticky(p)),
							a = r.filter((p) => !this.j.isSticky(p)),
							h = this.r(),
							c = this.a.openEditors(u),
							n = this.b.openEditors(a),
							g = c || n || h;
						return g && this.t(), g;
					}
					t() {
						this.n();
					}
					beforeCloseEditor(r) {
						this.s(r).beforeCloseEditor(r);
					}
					closeEditor(r) {
						this.a.closeEditor(r), this.b.closeEditor(r), this.u();
					}
					closeEditors(r) {
						const u = r.filter((h) => this.j.isSticky(h)),
							a = r.filter((h) => !this.j.isSticky(h));
						this.a.closeEditors(u), this.b.closeEditors(a), this.u();
					}
					u() {
						this.n();
					}
					moveEditor(r, u, a, h) {
						h
							? (this.j.isSticky(r)
									? (this.a.openEditor(r), this.b.closeEditor(r))
									: (this.a.closeEditor(r), this.b.openEditor(r)),
								this.n())
							: this.j.isSticky(r)
								? this.a.moveEditor(r, u, a, h)
								: this.b.moveEditor(
										r,
										u - this.j.stickyCount,
										a - this.j.stickyCount,
										h,
									);
					}
					pinEditor(r) {
						this.s(r).pinEditor(r);
					}
					stickEditor(r) {
						this.b.closeEditor(r), this.a.openEditor(r), this.n();
					}
					unstickEditor(r) {
						this.a.closeEditor(r), this.b.openEditor(r), this.n();
					}
					setActive(r) {
						this.a.setActive(r), this.b.setActive(r);
					}
					updateEditorSelections() {
						this.a.updateEditorSelections(), this.b.updateEditorSelections();
					}
					updateEditorLabel(r) {
						this.s(r).updateEditorLabel(r);
					}
					updateEditorDirty(r) {
						this.s(r).updateEditorDirty(r);
					}
					updateOptions(r, u) {
						this.a.updateOptions(r, u), this.b.updateOptions(r, u);
					}
					layout(r) {
						const u = this.a.layout(r),
							a = {
								container: r.container,
								available: new t.$pgb(
									r.available.width,
									r.available.height - u.height,
								),
							},
							h = this.b.layout(a);
						return new t.$pgb(r.container.width, u.height + h.height);
					}
					getHeight() {
						return this.a.getHeight() + this.b.getHeight();
					}
					dispose() {
						this.f.classList.toggle("two-tab-bars", !1), super.dispose();
					}
				};
				(e.$mtc = d), (e.$mtc = d = Ne([j(5, i.$Li)], d));
			},
		),
		
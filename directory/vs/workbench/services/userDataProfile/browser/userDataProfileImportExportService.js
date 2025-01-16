define(
		de[3895],
		he([
			1, 0, 4, 20, 5, 6, 133, 3, 57, 68, 85, 22, 9, 129, 1922, 1921, 1923, 1924,
			1902, 3890, 1613, 41, 84, 53, 63, 76, 19, 37, 23, 33, 111, 121, 327, 62,
			28, 15, 2541,
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
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$lxc = void 0),
				(L = xi(L));
			function O(q) {
				const V = q;
				return !!(
					V &&
					typeof V == "object" &&
					V.name &&
					typeof V.name == "string" &&
					((0, A.$sg)(V.icon) || typeof V.icon == "string") &&
					((0, A.$sg)(V.settings) || typeof V.settings == "string") &&
					((0, A.$sg)(V.globalState) || typeof V.globalState == "string") &&
					((0, A.$sg)(V.extensions) || typeof V.extensions == "string")
				);
			}
			let B = class extends d.$1c {
				constructor(V, G, K, J, W, X, Y, ie, ne, ee, _, te, Q) {
					super(),
						(this.c = V),
						(this.f = G),
						(this.g = K),
						(this.h = J),
						(this.j = W),
						(this.m = X),
						(this.n = Y),
						(this.q = ie),
						(this.r = ne),
						(this.s = ee),
						(this.t = _),
						(this.u = te),
						(this.w = Q),
						(this.a = new Map()),
						this.registerProfileContentHandler(
							P.Schemas.file,
							(this.b = V.createInstance(U)),
						);
				}
				registerProfileContentHandler(V, G) {
					if (this.a.has(V))
						throw new Error(
							`Profile content handler with id '${V}' already registered.`,
						);
					return (
						this.a.set(V, G),
						(0, d.$Yc)(() => this.unregisterProfileContentHandler(V))
					);
				}
				unregisterProfileContentHandler(V) {
					this.a.delete(V);
				}
				async createFromProfile(V, G, K) {
					const J = new d.$Zc();
					let W;
					J.add(K.onCancellationRequested(() => W.cancel()));
					let X;
					return this.n
						.withProgress(
							{
								location: y.ProgressLocation.Notification,
								delay: 500,
								sticky: !0,
								cancellable: !0,
							},
							async (Y) => {
								const ie = (ne) =>
									Y.report({ message: (0, t.localize)(12913, null, ne) });
								W = (0, R.$zh)(async (ne) => {
									const _ = await J.add(
										this.c.createInstance(H, V, {
											...G?.resourceTypeFlags,
											extensions: !1,
										}),
									).getProfileTemplate(G.name ?? V.name, G?.icon);
									(X = await this.H(
										{ ..._, name: G.name ?? _.name },
										!!G.transient,
										G,
									)),
										X &&
											(ne.isCancellationRequested ||
												(await this.y(_, X, G, ie, ne)));
								});
								try {
									await W,
										X &&
											(G?.resourceTypeFlags?.extensions ?? !0) &&
											(ie((0, t.localize)(12914, null)),
											await this.c.createInstance(f.$bxc).copy(V, X, !1));
								} catch {
									X && (await this.h.removeProfile(X), (X = void 0));
								}
								return X;
							},
							() => W.cancel(),
						)
						.finally(() => J.dispose());
				}
				async createProfileFromTemplate(V, G, K) {
					const J = new d.$Zc();
					let W;
					J.add(K.onCancellationRequested(() => W.cancel()));
					let X;
					return this.n
						.withProgress(
							{
								location: y.ProgressLocation.Notification,
								delay: 500,
								sticky: !0,
								cancellable: !0,
							},
							async (Y) => {
								const ie = (ne) =>
									Y.report({ message: (0, t.localize)(12915, null, ne) });
								W = (0, R.$zh)(async (ne) => {
									(X = await this.H(
										{ ...V, name: G.name ?? V.name },
										!!G.transient,
										G,
									)),
										X &&
											(ne.isCancellationRequested ||
												(await this.y(V, X, G, ie, ne)));
								});
								try {
									await W;
								} catch {
									X && (await this.h.removeProfile(X), (X = void 0));
								}
								return X;
							},
							() => W.cancel(),
						)
						.finally(() => J.dispose());
				}
				async y(V, G, K, J, W) {
					V.settings &&
						(K.resourceTypeFlags?.settings ?? !0) &&
						!G.useDefaultFlags?.settings &&
						(J((0, t.localize)(12916, null)),
						await this.c.createInstance(n.$Swc).apply(V.settings, G)),
						!W.isCancellationRequested &&
							(V.keybindings &&
								(K.resourceTypeFlags?.keybindings ?? !0) &&
								!G.useDefaultFlags?.keybindings &&
								(J((0, t.localize)(12917, null)),
								await this.c.createInstance(g.$Vwc).apply(V.keybindings, G)),
							!W.isCancellationRequested &&
								(V.tasks &&
									(K.resourceTypeFlags?.tasks ?? !0) &&
									!G.useDefaultFlags?.tasks &&
									(J((0, t.localize)(12918, null)),
									await this.c.createInstance(o.$2wc).apply(V.tasks, G)),
								!W.isCancellationRequested &&
									(V.snippets &&
										(K.resourceTypeFlags?.snippets ?? !0) &&
										!G.useDefaultFlags?.snippets &&
										(J((0, t.localize)(12919, null)),
										await this.c.createInstance(p.$Ywc).apply(V.snippets, G)),
									!W.isCancellationRequested &&
										(V.globalState &&
											!G.useDefaultFlags?.globalState &&
											(J((0, t.localize)(12920, null)),
											await this.c
												.createInstance(b.$gxc)
												.apply(V.globalState, G)),
										!W.isCancellationRequested &&
											V.extensions &&
											(K.resourceTypeFlags?.extensions ?? !0) &&
											!G.useDefaultFlags?.extensions &&
											(J((0, t.localize)(12921, null)),
											await this.c
												.createInstance(f.$bxc)
												.apply(V.extensions, G, J, W))))));
				}
				async exportProfile(V, G) {
					const K = new d.$Zc();
					try {
						const J = K.add(this.c.createInstance(H, V, G));
						await this.z(J, y.ProgressLocation.Notification);
					} finally {
						K.dispose();
					}
				}
				async createTroubleshootProfile() {
					const V = this.c.createInstance(H, this.f.currentProfile, void 0);
					try {
						const G = await V.getProfileTemplate(
							(0, t.localize)(12922, null),
							void 0,
						);
						await this.n.withProgress(
							{
								location: y.ProgressLocation.Notification,
								delay: 1e3,
								sticky: !0,
							},
							async (K) => {
								const J = (X) =>
										K.report({ message: (0, t.localize)(12923, null, X) }),
									W = await this.C(
										G,
										!0,
										!1,
										{ useDefaultFlags: this.f.currentProfile.useDefaultFlags },
										J,
									);
								W &&
									(J((0, t.localize)(12924, null)),
									await this.c
										.createInstance(f.$bxc)
										.copy(this.f.currentProfile, W, !0),
									J((0, t.localize)(12925, null)),
									await this.g.switchProfile(W));
							},
						);
					} finally {
						V.dispose();
					}
				}
				async z(V, G) {
					const K = await V.getProfileToExport();
					if (!K) return;
					const J = new d.$Zc();
					try {
						await this.n.withProgress(
							{ location: G, title: (0, t.localize)(12926, null, C.$Z8.value) },
							async (W) => {
								const X = await this.G(K.name);
								if (!X) return;
								const Y = this.a.get(X);
								if (!Y) return;
								const ie = await Y.saveProfile(
									K.name.replace("/", "-"),
									JSON.stringify(K),
									k.CancellationToken.None,
								);
								if (!ie) return;
								const ne = (0, t.localize)(12927, null, K.name);
								if (Y.extensionId) {
									const ee = [],
										_ = this.u.webUrl
											? `${this.u.webUrl}/${C.$S8}/${X}/${ie.id}`
											: (0, C.$T8)(`/${X}/${ie.id}`, this.u).toString();
									ee.push({
										label: (0, t.localize)(12928, null),
										run: () => this.r.writeText(_),
									}),
										this.u.webUrl
											? ee.push({
													label: (0, t.localize)(12929, null),
													run: async () => {
														await this.s.open(_);
													},
												})
											: ee.push({
													label: (0, t.localize)(12930, null, Y.name),
													run: async () => {
														await this.s.open(ie.link.toString());
													},
												}),
										await this.q.prompt({
											type: L.default.Info,
											message: ne,
											buttons: ee,
											cancelButton: (0, t.localize)(12931, null),
										});
								} else await this.q.info(ne);
							},
						);
					} finally {
						J.dispose();
					}
				}
				async resolveProfileTemplate(V, G) {
					const K = await this.F(V);
					if (K === null) return null;
					let J;
					try {
						J = JSON.parse(K);
					} catch {
						throw new Error((0, t.localize)(12932, null));
					}
					if (!O(J)) throw new Error((0, t.localize)(12933, null));
					return (
						G?.name && (J.name = G.name),
						G?.icon && (J.icon = G.icon),
						G?.resourceTypeFlags?.settings === !1 && (J.settings = void 0),
						G?.resourceTypeFlags?.keybindings === !1 &&
							(J.keybindings = void 0),
						G?.resourceTypeFlags?.snippets === !1 && (J.snippets = void 0),
						G?.resourceTypeFlags?.tasks === !1 && (J.tasks = void 0),
						G?.resourceTypeFlags?.globalState === !1 &&
							(J.globalState = void 0),
						G?.resourceTypeFlags?.extensions === !1 && (J.extensions = void 0),
						J
					);
				}
				async C(V, G, K, J, W) {
					const X = await this.H(V, G, J);
					if (X)
						return (
							V.settings &&
								!X.useDefaultFlags?.settings &&
								(W((0, t.localize)(12934, null)),
								await this.c.createInstance(n.$Swc).apply(V.settings, X)),
							V.keybindings &&
								!X.useDefaultFlags?.keybindings &&
								(W((0, t.localize)(12935, null)),
								await this.c.createInstance(g.$Vwc).apply(V.keybindings, X)),
							V.tasks &&
								!X.useDefaultFlags?.tasks &&
								(W((0, t.localize)(12936, null)),
								await this.c.createInstance(o.$2wc).apply(V.tasks, X)),
							V.snippets &&
								!X.useDefaultFlags?.snippets &&
								(W((0, t.localize)(12937, null)),
								await this.c.createInstance(p.$Ywc).apply(V.snippets, X)),
							V.globalState &&
								!X.useDefaultFlags?.globalState &&
								(W((0, t.localize)(12938, null)),
								await this.c.createInstance(b.$gxc).apply(V.globalState, X)),
							V.extensions &&
								K &&
								!X.useDefaultFlags?.extensions &&
								(W((0, t.localize)(12939, null)),
								await this.c.createInstance(f.$bxc).apply(V.extensions, X)),
							X
						);
				}
				async F(V) {
					if (await this.b.canHandle(V))
						return this.b.readProfile(V, k.CancellationToken.None);
					if ((0, C.$V8)(V)) {
						let K, J;
						V.authority === C.$S8
							? ((J = this.w.extUri.basename(V)),
								(K = this.w.extUri.basename(this.w.extUri.dirname(V))))
							: ((K = V.authority.substring(C.$U8.length)),
								(J = h.URI.parse(V.path.substring(1)))),
							await this.j.activateByEvent(`onProfile:${K}`);
						const W = this.a.get(K);
						if (W) return W.readProfile(J, k.CancellationToken.None);
					}
					await this.j.activateByEvent("onProfile");
					for (const K of this.a.values()) {
						const J = await K.readProfile(V, k.CancellationToken.None);
						if (J !== null) return J;
					}
					const G = await this.t.request(
						{ type: "GET", url: V.toString(!0) },
						k.CancellationToken.None,
					);
					if (G.res.statusCode === 200) return await (0, M.$Eq)(G);
					{
						const K = await (0, M.$Eq)(G);
						throw new Error(
							`Failed to get profile from URL: ${V.toString()}. Status code: ${G.res.statusCode}. Message: ${K}`,
						);
					}
				}
				async G(V) {
					if ((await this.j.activateByEvent("onProfile"), this.a.size === 1))
						return this.a.keys().next().value;
					const G = [];
					for (const [J, W] of this.a)
						G.push({ id: J, label: W.name, description: W.description });
					return (
						await this.m.pick(G.reverse(), {
							title: (0, t.localize)(12940, null, V),
							hideInput: !0,
						})
					)?.id;
				}
				async H(V, G, K) {
					const J = V.name,
						W = this.h.profiles.find((X) => X.name === J);
					if (W) {
						if (G)
							return this.h.createNamedProfile(`${J} ${this.I(J)}`, {
								...K,
								transient: G,
							});
						const { confirmed: X } = await this.q.confirm({
							type: L.default.Info,
							message: (0, t.localize)(12941, null, J),
							primaryButton: (0, t.localize)(12942, null),
						});
						return X ? (W.isDefault ? W : this.h.updateProfile(W, K)) : void 0;
					} else return this.h.createNamedProfile(J, { ...K, transient: G });
				}
				I(V) {
					const G = new RegExp(`${(0, T.$of)(V)}\\s(\\d+)`);
					let K = 0;
					for (const J of this.h.profiles) {
						const W = G.exec(J.name),
							X = W ? parseInt(W[1]) : 0;
						K = X > K ? X : K;
					}
					return K + 1;
				}
			};
			(e.$lxc = B),
				(e.$lxc = B =
					Ne(
						[
							j(0, w.$Li),
							j(1, C.$P8),
							j(2, C.$Q8),
							j(3, c.$Xl),
							j(4, $.$q2),
							j(5, v.$DJ),
							j(6, y.$8N),
							j(7, m.$GO),
							j(8, D.$Vxb),
							j(9, l.$7rb),
							j(10, M.$Aq),
							j(11, N.$Bk),
							j(12, r.$Vl),
						],
						B,
					));
			let U = class {
				constructor(V, G, K, J, W) {
					(this.a = V),
						(this.b = G),
						(this.c = K),
						(this.d = J),
						(this.e = W),
						(this.name = (0, t.localize)(12943, null)),
						(this.description = (0, t.localize)(12944, null));
				}
				async saveProfile(V, G, K) {
					const J = await this.a.showSaveDialog({
						title: (0, t.localize)(12945, null),
						filters: C.$28,
						defaultUri: this.b.extUri.joinPath(
							await this.a.defaultFilePath(),
							`${V}.${C.$18}`,
						),
					});
					return J
						? (await this.e.create([
								{ resource: J, value: G, options: { overwrite: !0 } },
							]),
							{ link: J, id: J.toString() })
						: null;
				}
				async canHandle(V) {
					return (
						V.scheme !== P.Schemas.http &&
						V.scheme !== P.Schemas.https &&
						V.scheme !== this.d.urlProtocol &&
						(await this.c.canHandleResource(V))
					);
				}
				async readProfile(V, G) {
					return (await this.canHandle(V))
						? (await this.c.readFile(V, void 0, G)).value.toString()
						: null;
				}
				async selectProfile() {
					const V = await this.a.showOpenDialog({
						canSelectFolders: !1,
						canSelectFiles: !0,
						canSelectMany: !1,
						filters: C.$28,
						title: (0, t.localize)(12946, null),
					});
					return V ? V[0] : null;
				}
			};
			U = Ne(
				[j(0, m.$IO), j(1, r.$Vl), j(2, a.$ll), j(3, N.$Bk), j(4, u.$kZ)],
				U,
			);
			const z = "userdataprofileexport",
				F = "userdataprofileexportpreview";
			let x = class extends d.$1c {
				constructor(V) {
					super(),
						(this.b = V),
						(this.a = this.D(new E.$re())),
						(this.onDidChangeRoots = this.a.event),
						(this.c = []);
				}
				async getChildren(V) {
					if (V) {
						const G = await V.getChildren();
						if (G)
							for (const K of G)
								K.parent.checkbox &&
									K.checkbox &&
									(K.checkbox.isChecked =
										K.parent.checkbox.isChecked && K.checkbox.isChecked);
						return G;
					} else return (this.f = void 0), this.a.fire(), this.getRoots();
				}
				getRoots() {
					return (
						this.f ||
							(this.f = (async () => {
								this.c = await this.h();
								for (const V of this.c)
									(V.checkbox = {
										isChecked: !V.isFromDefaultProfile(),
										tooltip: (0, t.localize)(12947, null, V.label.label),
										accessibilityInformation: {
											label: (0, t.localize)(12948, null, V.label.label),
										},
									}),
										V.isFromDefaultProfile() &&
											(V.description = (0, t.localize)(12949, null));
								return this.c;
							})()),
						this.f
					);
				}
				isEnabled(V) {
					return V !== void 0
						? this.c.some((G) => G.type === V && this.g(G))
						: this.c.some((G) => this.g(G));
				}
				async getProfileTemplate(V, G) {
					const K = await this.getRoots();
					let J, W, X, Y, ie, ne;
					for (const ee of K)
						this.g(ee) &&
							(ee instanceof n.$Twc
								? (J = await ee.getContent())
								: ee instanceof g.$Wwc
									? (W = await ee.getContent())
									: ee instanceof o.$3wc
										? (X = await ee.getContent())
										: ee instanceof p.$Zwc
											? (Y = await ee.getContent())
											: ee instanceof f.$cxc
												? (ie = await ee.getContent())
												: ee instanceof b.$hxc && (ne = await ee.getContent()));
					return {
						name: V,
						icon: G,
						settings: J,
						keybindings: W,
						tasks: X,
						snippets: Y,
						extensions: ie,
						globalState: ne,
					};
				}
				g(V) {
					return V.checkbox
						? V.checkbox.isChecked ||
								!!V.children?.some((G) => G.checkbox?.isChecked)
						: !0;
				}
			};
			x = Ne([j(0, v.$DJ)], x);
			let H = class extends x {
				constructor(V, G, K, J, W) {
					super(K),
						(this.profile = V),
						(this.m = G),
						(this.n = J),
						(this.q = W),
						(this.j = this.D(new d.$Zc()));
				}
				async h() {
					this.j.clear(),
						this.j.add(this.n.registerProvider(z, this.D(new s.$kxc())));
					const V = this.D(new s.$kxc());
					this.j.add(this.n.registerProvider(F, V));
					const G = [],
						K = this.s(this.profile);
					if (this.m?.settings ?? !0) {
						const J = this.q.createInstance(n.$Swc),
							W = await J.getContent(this.profile);
						await J.apply(W, K);
						const X = this.q.createInstance(n.$Twc, K);
						(await X.hasContent()) && G.push(X);
					}
					if (this.m?.keybindings ?? !0) {
						const J = this.q.createInstance(g.$Vwc),
							W = await J.getContent(this.profile);
						await J.apply(W, K);
						const X = this.q.createInstance(g.$Wwc, K);
						(await X.hasContent()) && G.push(X);
					}
					if (this.m?.snippets ?? !0) {
						const J = this.q.createInstance(p.$Ywc),
							W = await J.getContent(this.profile);
						await J.apply(W, K);
						const X = this.q.createInstance(p.$Zwc, K);
						(await X.hasContent()) && G.push(X);
					}
					if (this.m?.tasks ?? !0) {
						const J = this.q.createInstance(o.$2wc),
							W = await J.getContent(this.profile);
						await J.apply(W, K);
						const X = this.q.createInstance(o.$3wc, K);
						(await X.hasContent()) && G.push(X);
					}
					if (this.m?.globalState ?? !0) {
						const J = (0, I.$nh)(K.globalStorageHome, "globalState.json").with({
								scheme: F,
							}),
							W = this.q.createInstance(b.$ixc, K, J),
							X = await W.getContent();
						X &&
							(await this.n.writeFile(
								J,
								S.$Te.fromString(JSON.stringify(JSON.parse(X), null, "	")),
							),
							G.push(W));
					}
					if (this.m?.extensions ?? !0) {
						const J = this.q.createInstance(f.$dxc, K);
						(await J.hasContent()) && G.push(J);
					}
					return V.setReadOnly(!0), G;
				}
				s(V) {
					return {
						id: V.id,
						name: V.name,
						location: V.location,
						isDefault: V.isDefault,
						shortName: V.shortName,
						icon: V.icon,
						globalStorageHome: V.globalStorageHome,
						settingsResource: V.settingsResource.with({ scheme: z }),
						keybindingsResource: V.keybindingsResource.with({ scheme: z }),
						tasksResource: V.tasksResource.with({ scheme: z }),
						snippetsHome: V.snippetsHome.with({ scheme: z }),
						extensionsResource: V.extensionsResource,
						cacheHome: V.cacheHome,
						useDefaultFlags: V.useDefaultFlags,
						isTransient: V.isTransient,
					};
				}
				async getProfileToExport() {
					let V = this.profile.name;
					return this.profile.isDefault &&
						((V = await this.b.input({
							placeHolder: (0, t.localize)(12950, null),
							title: (0, t.localize)(12951, null),
							async validateInput(G) {
								if (!G.trim()) return (0, t.localize)(12952, null);
							},
						})),
						!V)
						? null
						: super.getProfileTemplate(V, this.profile.icon);
				}
			};
			(H = Ne([j(2, v.$DJ), j(3, a.$ll), j(4, w.$Li)], H)),
				(0, i.$lK)(C.$W8, B, i.InstantiationType.Delayed);
		},
	),
		
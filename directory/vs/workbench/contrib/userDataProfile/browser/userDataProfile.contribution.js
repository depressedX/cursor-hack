define(de[3894], he([1, 0, 55, 3893, 3778]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(0, t.$s6)(i.$w1c.ID, i.$w1c, t.WorkbenchPhase.BlockRestore);
		});
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
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
		define(
			de[1925],
			he([1, 0, 6, 334, 848, 3, 227, 33, 15, 34, 335, 408]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Kpc = void 0);
				let h = class extends E.$1c {
					get model() {
						return this.a;
					}
					constructor(n, g, p, o, f, b, s, l, y, $, v) {
						super(),
							(this.typeId = n),
							(this.resource = g),
							(this.name = p),
							(this.hasAssociatedFilePath = o),
							(this.j = f),
							(this.m = b),
							(this.n = s),
							(this.q = l),
							(this.r = $),
							(this.s = v),
							(this.capabilities = this.j
								? i.WorkingCopyCapabilities.Untitled |
									i.WorkingCopyCapabilities.Scratchpad
								: i.WorkingCopyCapabilities.Untitled),
							(this.a = void 0),
							(this.b = this.D(new t.$re())),
							(this.onDidChangeContent = this.b.event),
							(this.c = this.D(new t.$re())),
							(this.onDidChangeDirty = this.c.event),
							(this.f = this.D(new t.$re())),
							(this.onDidSave = this.f.event),
							(this.g = this.D(new t.$re())),
							(this.onDidRevert = this.g.event),
							(this.h = this.D(new t.$re())),
							(this.onWillDispose = this.h.event),
							(this.t =
								this.hasAssociatedFilePath ||
								!!(this.m && this.m.markModified !== !1)),
							this.D(y.registerWorkingCopy(this));
					}
					isDirty() {
						return this.t && !this.j;
					}
					isModified() {
						return this.t;
					}
					u(n) {
						this.t !== n && ((this.t = n), this.j || this.c.fire());
					}
					async resolve() {
						if ((this.C("resolve()"), this.isResolved())) {
							this.C("resolve() - exit (already resolved)");
							return;
						}
						let n;
						const g = await this.r.resolve(this);
						g
							? (this.C("resolve() - with backup"), (n = g.value))
							: this.m?.value
								? (this.C("resolve() - with initial contents"),
									(n = this.m.value))
								: (this.C("resolve() - empty"), (n = (0, a.$Oe)())),
							await this.w(n),
							this.u(
								this.hasAssociatedFilePath ||
									!!g ||
									!!(this.m && this.m.markModified !== !1),
							),
							(g || this.m) && this.b.fire();
					}
					async w(n) {
						this.C("doCreateModel()"),
							(this.a = this.D(
								await this.n.createModel(
									this.resource,
									n,
									d.CancellationToken.None,
								),
							)),
							this.y(this.a);
					}
					y(n) {
						this.D(n.onDidChangeContent((g) => this.z(g))),
							this.D(n.onWillDispose(() => this.dispose()));
					}
					z(n) {
						!this.hasAssociatedFilePath && n.isInitial
							? this.u(!1)
							: this.u(!0),
							this.b.fire();
					}
					isResolved() {
						return !!this.model;
					}
					get backupDelay() {
						return this.model?.configuration?.backupDelay;
					}
					async backup(n) {
						let g;
						return (
							this.isResolved()
								? (g = await (0, m.$Ah)(
										this.model.snapshot(w.SnapshotContext.Backup, n),
										n,
									))
								: this.m && (g = this.m.value),
							{ content: g }
						);
					}
					async save(n) {
						this.C("save()");
						const g = await this.q(this, n);
						return (
							g && this.f.fire({ reason: n?.reason, source: n?.source }), g
						);
					}
					async revert() {
						this.C("revert()"), this.u(!1), this.g.fire(), this.dispose();
					}
					dispose() {
						this.C("dispose()"), this.h.fire(), super.dispose();
					}
					C(n) {
						this.s.trace(
							`[untitled file working copy] ${n}`,
							this.resource.toString(),
							this.typeId,
						);
					}
				};
				(e.$Kpc = h),
					(e.$Kpc = h = Ne([j(8, C.$gY), j(9, u.$WO), j(10, r.$ik)], h));
			},
		),
		define(
			de[3896],
			he([1, 0, 3, 9, 1925, 6, 23, 227, 73, 34, 335, 22, 1911, 59]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Lpc = void 0);
				let n = class extends h.$Ipc {
					constructor(p, o, f, b, s, l, y, $) {
						super(b, l, y),
							(this.u = p),
							(this.w = o),
							(this.y = f),
							(this.z = s),
							(this.C = $),
							(this.r = this.D(new E.$re())),
							(this.onDidChangeDirty = this.r.event),
							(this.s = this.D(new E.$re())),
							(this.onWillDispose = this.s.event),
							(this.t = new c.$Gc());
					}
					async resolve(p) {
						const o = this.F(p);
						return await o.resolve(), o;
					}
					F(p = Object.create(null)) {
						const o = this.G(p);
						if (o.untitledResource) {
							const f = this.get(o.untitledResource);
							if (f) return f;
						}
						return this.H(o);
					}
					G(p) {
						const o = Object.create(null);
						return (
							p.associatedResource
								? ((o.untitledResource = i.URI.from({
										scheme: C.Schemas.untitled,
										authority: p.associatedResource.authority,
										fragment: p.associatedResource.fragment,
										path: p.associatedResource.path,
										query: p.associatedResource.query,
									})),
									(o.associatedResource = p.associatedResource))
								: (p.untitledResource?.scheme === C.Schemas.untitled &&
										(o.untitledResource = p.untitledResource),
									(o.isScratchpad = p.isScratchpad)),
							(o.contents = p.contents),
							o
						);
					}
					H(p) {
						let o = p.untitledResource;
						if (!o) {
							let b = 1;
							do
								(o = i.URI.from({
									scheme: C.Schemas.untitled,
									path: p.isScratchpad ? `Scratchpad-${b}` : `Untitled-${b}`,
									query: this.u ? `typeId=${this.u}` : void 0,
								})),
									b++;
							while (this.j(o));
						}
						const f = new w.$Kpc(
							this.u,
							o,
							this.z.getUriBasenameLabel(o),
							!!p.associatedResource,
							!!p.isScratchpad,
							p.contents,
							this.w,
							this.y,
							this.C,
							this.h,
							this.g,
						);
						return this.I(f), f;
					}
					I(p) {
						const o = new t.$Zc();
						o.add(p.onDidChangeDirty(() => this.r.fire(p))),
							o.add(p.onWillDispose(() => this.s.fire(p))),
							this.t.set(p.resource, o),
							this.m(p.resource, p),
							p.isDirty() && this.r.fire(p);
					}
					n(p) {
						const o = super.n(p),
							f = this.t.get(p);
						return f && ((0, t.$Vc)(f), this.t.delete(p)), o;
					}
					dispose() {
						super.dispose(), (0, t.$Vc)(this.t.values()), this.t.clear();
					}
				};
				(e.$Lpc = n),
					(e.$Lpc = n =
						Ne(
							[j(3, a.$ll), j(4, m.$3N), j(5, r.$ik), j(6, u.$WO), j(7, d.$gY)],
							n,
						));
			},
		),
		define(
			de[336],
			he([1, 0, 5, 20, 6, 15, 24, 3, 22, 33, 227, 68, 3856, 3853]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$jZ = e.$iZ = void 0),
					(e.$iZ = (0, t.$Mi)("workingCopyFileService"));
				let n = class extends d.$1c {
					constructor(p, o, f, b) {
						super(),
							(this.g = p),
							(this.h = o),
							(this.j = f),
							(this.m = b),
							(this.a = this.D(new w.$te())),
							(this.onWillRunWorkingCopyFileOperation = this.a.event),
							(this.b = this.D(new w.$te())),
							(this.onDidFailWorkingCopyFileOperation = this.b.event),
							(this.c = this.D(new w.$te())),
							(this.onDidRunWorkingCopyFileOperation = this.c.event),
							(this.f = 0),
							(this.q = this.D(this.j.createInstance(h.$9Y))),
							(this.s = this.D(this.j.createInstance(c.$hZ))),
							(this.t = []),
							this.D(
								this.registerWorkingCopyProvider((s) =>
									this.h.workingCopies.filter((l) =>
										this.g.hasProvider(s)
											? this.m.extUri.isEqualOrParent(l.resource, s)
											: this.m.extUri.isEqual(l.resource, s),
									),
								),
							);
					}
					create(p, o, f) {
						return this.doCreateFileOrFolder(p, !0, o, f);
					}
					createFolder(p, o, f) {
						return this.doCreateFileOrFolder(p, !1, o, f);
					}
					async doCreateFileOrFolder(p, o, f, b) {
						if (p.length === 0) return [];
						if (o) {
							const v = (
								await E.Promises.settled(
									p.map((S) =>
										this.g.canCreateFile(S.resource, {
											overwrite: S.overwrite,
										}),
									),
								)
							).find((S) => S instanceof Error);
							if (v instanceof Error) throw v;
						}
						const s = p.map(($) => ({ target: $.resource }));
						await this.r(s, m.FileOperation.CREATE, b, f);
						const l = {
							correlationId: this.f++,
							operation: m.FileOperation.CREATE,
							files: s,
						};
						await this.a.fireAsync(l, r.CancellationToken.None);
						let y;
						try {
							o
								? (y = await E.Promises.settled(
										p.map(($) =>
											this.g.createFile($.resource, $.contents, {
												overwrite: $.overwrite,
											}),
										),
									))
								: (y = await E.Promises.settled(
										p.map(($) => this.g.createFolder($.resource)),
									));
						} catch ($) {
							throw (await this.b.fireAsync(l, r.CancellationToken.None), $);
						}
						return await this.c.fireAsync(l, r.CancellationToken.None), y;
					}
					async move(p, o, f) {
						return this.n(p, !0, o, f);
					}
					async copy(p, o, f) {
						return this.n(p, !1, o, f);
					}
					async n(p, o, f, b) {
						const s = [];
						for (const {
							file: { source: $, target: v },
							overwrite: S,
						} of p) {
							const I = await (o
								? this.g.canMove($, v, S)
								: this.g.canCopy($, v, S));
							if (I instanceof Error) throw I;
						}
						const l = p.map(($) => $.file);
						await this.r(
							l,
							o ? m.FileOperation.MOVE : m.FileOperation.COPY,
							b,
							f,
						);
						const y = {
							correlationId: this.f++,
							operation: o ? m.FileOperation.MOVE : m.FileOperation.COPY,
							files: l,
						};
						await this.a.fireAsync(y, r.CancellationToken.None);
						try {
							for (const {
								file: { source: $, target: v },
								overwrite: S,
							} of p) {
								if (!this.m.extUri.isEqual($, v)) {
									const I = o
										? [...this.getDirty($), ...this.getDirty(v)]
										: this.getDirty(v);
									await E.Promises.settled(
										I.map((T) => T.revert({ soft: !0 })),
									);
								}
								o
									? s.push(await this.g.move($, v, S))
									: s.push(await this.g.copy($, v, S));
							}
						} catch ($) {
							throw (await this.b.fireAsync(y, r.CancellationToken.None), $);
						}
						return await this.c.fireAsync(y, r.CancellationToken.None), s;
					}
					async delete(p, o, f) {
						for (const l of p) {
							const y = await this.g.canDelete(l.resource, {
								recursive: l.recursive,
								useTrash: l.useTrash,
							});
							if (y instanceof Error) throw y;
						}
						const b = p.map((l) => ({ target: l.resource }));
						await this.r(b, m.FileOperation.DELETE, f, o);
						const s = {
							correlationId: this.f++,
							operation: m.FileOperation.DELETE,
							files: b,
						};
						await this.a.fireAsync(s, r.CancellationToken.None);
						for (const l of p) {
							const y = this.getDirty(l.resource);
							await E.Promises.settled(y.map(($) => $.revert({ soft: !0 })));
						}
						try {
							for (const l of p)
								await this.g.del(l.resource, {
									recursive: l.recursive,
									useTrash: l.useTrash,
								});
						} catch (l) {
							throw (await this.b.fireAsync(s, r.CancellationToken.None), l);
						}
						await this.c.fireAsync(s, r.CancellationToken.None);
					}
					addFileOperationParticipant(p) {
						return this.q.addFileOperationParticipant(p);
					}
					r(p, o, f, b) {
						return this.q.participate(p, o, f, b);
					}
					get hasSaveParticipants() {
						return this.s.length > 0;
					}
					addSaveParticipant(p) {
						return this.s.addSaveParticipant(p);
					}
					runSaveParticipants(p, o, f, b) {
						return this.s.participate(p, o, f, b);
					}
					registerWorkingCopyProvider(p) {
						const o = (0, C.$Xb)(this.t, p);
						return (0, d.$Yc)(o);
					}
					getDirty(p) {
						const o = new Set();
						for (const f of this.t)
							for (const b of f(p)) b.isDirty() && o.add(b);
						return Array.from(o);
					}
				};
				(e.$jZ = n),
					(e.$jZ = n =
						Ne([j(0, m.$ll), j(1, u.$gY), j(2, t.$Li), j(3, a.$Vl)], n)),
					(0, i.$lK)(e.$iZ, n, i.InstantiationType.Delayed);
			},
		),
		define(
			de[3897],
			he([
				1, 0, 7, 15, 33, 29, 6, 3, 23, 54, 19, 9, 47, 4, 57, 22, 5, 73, 21, 155,
				831, 88, 849, 625, 3680, 355, 623, 446, 66, 18, 78, 53, 165, 1910, 334,
				336, 227,
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
					(e.$1oc = void 0),
					(l = mt(l));
				var U;
				(function (H) {
					(H[(H.Custom = 0)] = "Custom"), (H[(H.Text = 1)] = "Text");
				})(U || (U = {}));
				let z = class extends d.$1c {
					constructor(q, V, G, K, J, W, X, Y, ie, ne, ee, _) {
						super(),
							(this.g = V),
							(this.h = G),
							(this.j = Y),
							(this.m = ie),
							(this.n = ne),
							(this.q = ee),
							(this.r = _),
							(this.b = this.D(new d.$0c())),
							(this.c = new Map()),
							(this.f = new S.$6Ib("mainThreadCustomEditors.origins", J)),
							(this.a = q.getProxy(l.$mbb.ExtHostCustomEditors)),
							this.D(
								X.registerWorkingCopyProvider((te) => {
									const Q = [];
									for (const Z of W.workingCopies)
										Z instanceof x &&
											(0, u.$hh)(te, Z.editorResource) &&
											Q.push(Z);
									return Q;
								}),
							),
							this.D(
								_.registerResolver({
									canResolve: (te) => (
										te instanceof y.$tnc &&
											K.activateByEvent(`onCustomEditor:${te.viewType}`),
										!1
									),
									resolveWebview: () => {
										throw new Error("not implemented");
									},
								}),
							),
							this.D(
								X.onWillRunWorkingCopyFileOperation(async (te) => this.w(te)),
							);
					}
					$registerTextEditorProvider(q, V, G, K, J) {
						this.s(U.Text, (0, s.$Mmc)(q), V, G, K, !0, J);
					}
					$registerCustomEditorProvider(q, V, G, K, J) {
						this.s(U.Custom, (0, s.$Mmc)(q), V, G, {}, K, J);
					}
					s(q, V, G, K, J, W, X) {
						if (this.b.has(G))
							throw new Error(`Provider for ${G} already registered`);
						const Y = new d.$Zc();
						Y.add(
							this.j.registerCustomEditorCapabilities(G, {
								supportsMultipleEditorsPerDocument: W,
							}),
						),
							Y.add(
								this.r.registerResolver({
									canResolve: (ie) => ie instanceof y.$tnc && ie.viewType === G,
									resolveWebview: async (ie, ne) => {
										const ee = (0, h.$9g)(),
											_ = ie.resource;
										(ie.webview.origin = this.f.getOrigin(G, V.id)),
											this.h.addWebviewInput(ee, ie, {
												serializeBuffersForPostMessage: X,
											}),
											(ie.webview.options = K),
											(ie.webview.extension = V);
										let te = ie.backupId;
										ie.oldResource &&
											!ie.backupId &&
											((te = this.c.get(ie.oldResource.toString())?.backupId),
											this.c.delete(ie.oldResource.toString()));
										let Q;
										try {
											Q = await this.t(q, _, G, { backupId: te }, ne);
										} catch (Z) {
											(0, E.$4)(Z),
												ie.webview.setHtml(
													this.g.getWebviewResolvedFailedContent(G),
												);
											return;
										}
										if (ne.isCancellationRequested) {
											Q.dispose();
											return;
										}
										ie.webview.onDidDispose(() => {
											if (Q.object.isDirty()) {
												const Z = Q.object.onDidChangeDirty(() => {
													Q.object.isDirty() || (Z.dispose(), Q.dispose());
												});
												return;
											}
											Q.dispose();
										}),
											J.supportsMove &&
												ie.onMove(async (Z) => {
													const se = Q;
													(Q = await this.t(
														q,
														Z,
														G,
														{},
														w.CancellationToken.None,
													)),
														this.a.$onMoveCustomEditor(ee, Z, G),
														se.dispose();
												});
										try {
											await this.a.$resolveCustomEditor(
												_,
												ee,
												G,
												{
													title: ie.getTitle(),
													contentOptions: ie.webview.contentOptions,
													options: ie.webview.options,
													active: ie === this.n.activeEditor,
												},
												(0, T.$b8)(this.m, ie.group || 0),
												ne,
											);
										} catch (Z) {
											(0, E.$4)(Z),
												ie.webview.setHtml(
													this.g.getWebviewResolvedFailedContent(G),
												),
												Q.dispose();
											return;
										}
									},
								}),
							),
							this.b.set(G, Y);
					}
					$unregisterEditorProvider(q) {
						if (!this.b.has(q))
							throw new Error(`No provider for ${q} registered`);
						this.b.deleteAndDispose(q),
							this.j.models.disposeAllModelsForView(q);
					}
					async t(q, V, G, K, J) {
						const W = this.j.models.tryRetain(V, G);
						if (W) return W;
						switch (q) {
							case U.Text: {
								const X = v.$Zoc.create(this.q, G, V);
								return this.j.models.add(V, G, X);
							}
							case U.Custom: {
								const X = x.create(
									this.q,
									this.a,
									G,
									V,
									K,
									() =>
										Array.from(this.h.webviewInputs).filter(
											(Y) => Y instanceof y.$tnc && (0, u.$gh)(Y.resource, V),
										),
									J,
								);
								return this.j.models.add(V, G, X);
							}
						}
					}
					async $onDidEdit(q, V, G, K) {
						(await this.u(q, V)).pushEdit(G, K);
					}
					async $onContentChange(q, V) {
						(await this.u(q, V)).changeContent();
					}
					async u(q, V) {
						const G = a.URI.revive(q),
							K = await this.j.models.get(G, V);
						if (!K || !(K instanceof x))
							throw new Error("Could not find model for webview editor");
						return K;
					}
					async w(q) {
						q.operation === g.FileOperation.MOVE &&
							q.waitUntil(
								(async () => {
									const V = [];
									for (const G of q.files)
										G.source &&
											V.push(...(await this.j.models.getAllModels(G.source)));
									for (const G of V)
										if (G instanceof x && G.isDirty()) {
											const K = await G.backup(w.CancellationToken.None);
											K.meta && this.c.set(G.editorResource.toString(), K.meta);
										}
								})(),
							);
					}
				};
				(e.$1oc = z),
					(e.$1oc = z =
						Ne(
							[
								j(3, D.$q2),
								j(4, f.$lq),
								j(5, O.$gY),
								j(6, R.$iZ),
								j(7, $.$jnc),
								j(8, P.$EY),
								j(9, k.$IY),
								j(10, p.$Li),
								j(11, I.$qnc),
							],
							z,
						));
				var F;
				(function (H) {
					let q;
					(function (G) {
						(G[(G.Allowed = 0)] = "Allowed"),
							(G[(G.NotAllowed = 1)] = "NotAllowed"),
							(G[(G.Pending = 2)] = "Pending");
					})((q = H.Type || (H.Type = {}))),
						(H.Allowed = Object.freeze({ type: q.Allowed })),
						(H.NotAllowed = Object.freeze({ type: q.NotAllowed }));
					class V {
						constructor(K) {
							(this.operation = K), (this.type = q.Pending);
						}
					}
					H.Pending = V;
				})(F || (F = {}));
				let x = (B = class extends N.$eZ {
					static async create(q, V, G, K, J, W, X) {
						const Y = W();
						let ie;
						Y.length !== 0 && (ie = Y[0].untitledDocumentData);
						const { editable: ne } = await V.$createCustomDocument(
							K,
							G,
							J.backupId,
							ie,
							X,
						);
						return q.createInstance(B, V, G, K, !!J.backupId, ne, !!ie, W);
					}
					constructor(q, V, G, K, J, W, X, Y, ie, ne, ee, _, te, Q, Z) {
						super(B.M(V, G), ie),
							(this.w = q),
							(this.y = V),
							(this.z = G),
							(this.C = J),
							(this.F = X),
							(this.G = Y),
							(this.H = ne),
							(this.I = ee),
							(this.J = _),
							(this.L = Q),
							(this.j = !1),
							(this.m = F.Allowed),
							(this.q = -1),
							(this.r = -1),
							(this.s = []),
							(this.t = !1),
							(this.typeId = A.$OO),
							(this.O = this.D(new C.$re())),
							(this.onDidChangeDirty = this.O.event),
							(this.P = this.D(new C.$re())),
							(this.onDidChangeContent = this.P.event),
							(this.Q = this.D(new C.$re())),
							(this.onDidSave = this.Q.event),
							(this.onDidChangeReadonly = C.Event.None),
							(this.j = K),
							J &&
								(this.D(te.registerWorkingCopy(this)),
								this.D(
									Z.onWillStop((se) => {
										this.isDirty() &&
											se.veto(
												(async () => !(await this.save()))(),
												(0, c.localize)(2537, null, this.name),
											);
									}),
								)),
							W && (this.t = !0);
					}
					get editorResource() {
						return this.z;
					}
					dispose() {
						this.C && this.I.removeElements(this.z),
							this.w.$disposeCustomDocument(this.z, this.y),
							super.dispose();
					}
					static M(q, V) {
						const G = q.replace(/[^a-z0-9\-_]/gi, "-"),
							K = `/${(0, t.$Ehb)(V.with({ query: null, fragment: null }).toString(!0))}`;
						return a.URI.from({
							scheme: m.Schemas.vscodeCustomEditor,
							authority: G,
							path: K,
							query: JSON.stringify(V.toJSON()),
						});
					}
					get name() {
						return (0, r.$sc)(this.H.getUriLabel(this.z));
					}
					get capabilities() {
						return this.N()
							? A.WorkingCopyCapabilities.Untitled
							: A.WorkingCopyCapabilities.None;
					}
					isDirty() {
						return this.t ? !0 : this.s.length > 0 ? this.r !== this.q : this.j;
					}
					N() {
						return this.z.scheme === m.Schemas.untitled;
					}
					isReadonly() {
						return !this.C;
					}
					get viewType() {
						return this.y;
					}
					get backupId() {
						return this.n;
					}
					pushEdit(q, V) {
						if (!this.C) throw new Error("Document is not editable");
						this.W(() => {
							this.U(q), (this.q = this.s.length - 1);
						}),
							this.I.pushElement({
								type: b.UndoRedoElementType.Resource,
								resource: this.z,
								label: V ?? (0, c.localize)(2538, null),
								code: "undoredo.customEditorEdit",
								undo: () => this.R(),
								redo: () => this.S(),
								rebase: () => {},
							});
					}
					changeContent() {
						this.W(() => {
							this.t = !0;
						});
					}
					async R() {
						if (!this.C || this.q < 0) return;
						const q = this.s[this.q];
						this.W(() => {
							--this.q;
						}),
							await this.w.$undo(this.z, this.viewType, q, this.isDirty());
					}
					async S() {
						if (!this.C || this.q >= this.s.length - 1) return;
						const q = this.s[this.q + 1];
						this.W(() => {
							++this.q;
						}),
							await this.w.$redo(this.z, this.viewType, q, this.isDirty());
					}
					U(q) {
						const V = this.q + 1,
							G = this.s.length - this.q,
							K =
								typeof q == "number"
									? this.s.splice(V, G, q)
									: this.s.splice(V, G);
						K.length && this.w.$disposeEdits(this.z, this.y, K);
					}
					W(q) {
						const V = this.isDirty();
						q(), this.P.fire(), this.isDirty() !== V && this.O.fire();
					}
					async revert(q) {
						this.C &&
							((this.q === this.r && !this.t && !this.j) ||
								(q?.soft ||
									this.w.$revert(
										this.z,
										this.viewType,
										w.CancellationToken.None,
									),
								this.W(() => {
									(this.t = !1), (this.j = !1), (this.q = this.r), this.U();
								})));
					}
					async save(q) {
						const V = !!(await this.saveCustomEditor(q));
						return (
							V && this.Q.fire({ reason: q?.reason, source: q?.source }), V
						);
					}
					async saveCustomEditor(q) {
						if (!this.C) return;
						if (this.N()) {
							const G = await this.X(q);
							return G
								? (await this.saveCustomEditorAs(this.z, G, q), G)
								: void 0;
						}
						const V = (0, i.$zh)((G) =>
							this.w.$onSave(this.z, this.viewType, G),
						);
						this.u?.cancel(), (this.u = V);
						try {
							await V,
								this.u === V &&
									this.W(() => {
										(this.t = !1), (this.r = this.q), (this.j = !1);
									});
						} finally {
							this.u === V && (this.u = void 0);
						}
						return this.z;
					}
					X(q) {
						if (!this.N()) throw new Error("Resource is not untitled");
						const V = this.J.remoteAuthority,
							G = (0, u.$xh)(this.z, V, this.L.defaultUriScheme);
						return this.G.pickFileToSave(G, q?.availableFileSystems);
					}
					async saveCustomEditorAs(q, V, G) {
						return this.C
							? (await (0, i.$zh)((K) =>
									this.w.$onSaveAs(this.z, this.viewType, V, K),
								),
								this.W(() => {
									this.r = this.q;
								}),
								!0)
							: (await this.a.copy(q, V, !1), !0);
					}
					get canHotExit() {
						return typeof this.n == "string" && this.m.type === F.Type.Allowed;
					}
					async backup(q) {
						const V = this.F();
						if (!V.length)
							throw new Error("No editors found for resource, cannot back up");
						const G = V[0],
							J = {
								meta: {
									viewType: this.viewType,
									editorResource: this.z,
									backupId: "",
									extension: G.extension
										? {
												id: G.extension.id.value,
												location: G.extension.location,
											}
										: void 0,
									webview: {
										origin: G.webview.origin,
										options: G.webview.options,
										state: G.webview.state,
									},
								},
							};
						if (!this.C) return J;
						this.m.type === F.Type.Pending && this.m.operation.cancel();
						const W = new F.Pending(
							(0, i.$zh)((Y) =>
								this.w.$backup(this.z.toJSON(), this.viewType, Y),
							),
						);
						(this.m = W),
							q.onCancellationRequested(() => {
								W.operation.cancel();
							});
						let X = "";
						try {
							const Y = await W.operation;
							this.m === W &&
								((this.m = F.Allowed), (J.meta.backupId = Y), (this.n = Y));
						} catch (Y) {
							if ((0, E.$8)(Y)) throw Y;
							this.m === W && (this.m = F.NotAllowed),
								Y.message && (X = Y.message);
						}
						if (this.m === F.Allowed) return J;
						throw new Error(`Cannot backup in this state: ${X}`);
					}
				});
				x = B = Ne(
					[
						j(7, n.$IO),
						j(8, g.$ll),
						j(9, o.$3N),
						j(10, b.$GN),
						j(11, L.$r8),
						j(12, O.$gY),
						j(13, M.$I8),
						j(14, D.$q2),
					],
					x,
				);
			},
		),
		define(
			de[1342],
			he([
				1, 0, 163, 3, 23, 9, 64, 67, 42, 22, 88, 85, 78, 19, 336, 68, 6, 165,
				59, 29,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$4mc = e.$3mc = void 0);
				class s {
					constructor(v, S = 1e3 * 60 * 3, I = 1024 * 1024 * 80, T = 50) {
						(this.c = v),
							(this.d = S),
							(this.f = I),
							(this.g = T),
							(this.a = new Array()),
							(this.b = 0);
					}
					dispose() {
						this.a = (0, i.$Vc)(this.a);
					}
					remove(v) {
						for (const S of [...this.a])
							this.c.isEqualOrParent(S.uri, v) && S.dispose();
					}
					add(v, S, I = 0) {
						const T = () => {
								const L = this.a.indexOf(k);
								L >= 0 &&
									((this.b -= I),
									S.dispose(),
									clearTimeout(P),
									this.a.splice(L, 1));
							},
							P = setTimeout(T, this.d),
							k = { uri: v, length: I, dispose: T };
						this.a.push(k), (this.b += I), this.h();
					}
					h() {
						for (; this.b > this.f; ) this.a[0].dispose();
						const v = Math.ceil(this.g * 1.2);
						this.a.length >= v && (0, i.$Vc)(this.a.slice(0, v - this.g));
					}
				}
				e.$3mc = s;
				class l extends i.$1c {
					constructor(v, S, I, T) {
						super(),
							(this.b = v),
							(this.c = S),
							(this.f = I),
							(this.g = T),
							(this.a = this.b.getVersionId()),
							this.B.add(
								this.b.onDidChangeContent((P) => {
									(this.a = P.versionId),
										this.f.$acceptModelChanged(
											this.b.uri,
											P,
											this.g.isDirty(this.b.uri),
										),
										this.isCaughtUpWithContentChanges() &&
											this.c.fire(this.b.uri);
								}),
							);
					}
					isCaughtUpWithContentChanges() {
						return this.b.getVersionId() === this.a;
					}
				}
				let y = class extends i.$1c {
					constructor(v, S, I, T, P, k, L, D, M) {
						super(),
							(this.g = S),
							(this.h = I),
							(this.j = T),
							(this.n = P),
							(this.q = k),
							(this.r = L),
							(this.s = M),
							(this.a = this.B.add(new p.$re())),
							(this.onIsCaughtUpWithContentChanges = this.a.event),
							(this.c = new f.$Gc()),
							(this.f = this.B.add(new s(L.extUri))),
							(this.b = v.getProxy(u.$mbb.ExtHostDocuments)),
							this.B.add(S.onModelLanguageChanged(this.u, this)),
							this.B.add(
								I.files.onDidSave((N) => {
									this.t(N.model.resource) &&
										this.b.$acceptModelSaved(N.model.resource);
								}),
							),
							this.B.add(
								I.files.onDidChangeDirty((N) => {
									this.t(N.resource) &&
										this.b.$acceptDirtyStateChanged(N.resource, N.isDirty());
								}),
							),
							this.B.add(
								D.onDidRunWorkingCopyFileOperation((N) => {
									const A = N.operation === r.FileOperation.MOVE;
									if (A || N.operation === r.FileOperation.DELETE)
										for (const R of N.files) {
											const O = A ? R.source : R.target;
											O && this.f.remove(O);
										}
								}),
							);
					}
					dispose() {
						(0, i.$Vc)(this.c.values()), this.c.clear(), super.dispose();
					}
					isCaughtUpWithContentChanges(v) {
						const S = this.c.get(v);
						return S ? S.isCaughtUpWithContentChanges() : !0;
					}
					t(v) {
						const S = this.g.getModel(v);
						return !!S && (0, C.$TN)(S);
					}
					handleModelAdded(v) {
						(0, C.$TN)(v) &&
							this.c.set(v.uri, new l(v, this.a, this.b, this.h));
					}
					u(v) {
						const { model: S } = v;
						this.c.has(S.uri) &&
							this.b.$acceptModelLanguageChanged(S.uri, S.getLanguageId());
					}
					handleModelRemoved(v) {
						this.c.has(v) && (this.c.get(v).dispose(), this.c.delete(v));
					}
					async $trySaveDocument(v) {
						return !!(await this.h.save(E.URI.revive(v)));
					}
					async $tryOpenDocument(v) {
						const S = E.URI.revive(v);
						if (!S.scheme || !(S.fsPath || S.authority))
							throw new b.$fb(
								"Invalid uri. Scheme and authority or path must be set.",
							);
						const I = this.r.asCanonicalUri(S);
						let T;
						switch (I.scheme) {
							case w.Schemas.untitled:
								T = this.y(I);
								break;
							case w.Schemas.file:
							default:
								T = this.w(I);
								break;
						}
						let P;
						try {
							P = await T;
						} catch (k) {
							throw new b.$fb(
								`cannot open ${I.toString()}. Detail: ${(0, t.$xj)(k)}`,
							);
						}
						if (P)
							if (c.$dh.isEqual(P, I)) {
								if (this.c.has(I)) return I;
								throw new b.$fb(
									`cannot open ${I.toString()}. Detail: Files above 50MB cannot be synchronized with extensions.`,
								);
							} else
								throw new b.$fb(
									`cannot open ${I.toString()}. Detail: Actual document opened as ${P.toString()}`,
								);
						else throw new b.$fb(`cannot open ${I.toString()}`);
					}
					$tryCreateDocument(v) {
						return this.z(
							void 0,
							v ? v.language : void 0,
							v ? v.content : void 0,
						);
					}
					async w(v) {
						const S = await this.n.createModelReference(v);
						return (
							this.f.add(v, S, S.object.textEditorModel.getValueLength()),
							S.object.textEditorModel.uri
						);
					}
					async y(v) {
						const S = (0, c.$xh)(
							v,
							this.q.remoteAuthority,
							this.s.defaultUriScheme,
						);
						return (await this.j.exists(S))
							? Promise.reject(new Error("file already exists"))
							: await this.z(v.path ? v : void 0);
					}
					async z(v, S, I) {
						const T = this.h.untitled.create({
								associatedResource: v,
								languageId: S,
								initialValue: I,
							}),
							P = T.resource,
							k = await this.n.createModelReference(P);
						if (!this.c.has(P))
							throw (
								(k.dispose(),
								new Error(`expected URI ${P.toString()} to have come to LIFE`))
							);
						return (
							this.f.add(P, k, k.object.textEditorModel.getValueLength()),
							p.Event.once(T.onDidRevert)(() => this.f.remove(P)),
							this.b.$acceptDirtyStateChanged(P, !0),
							P
						);
					}
				};
				(e.$4mc = y),
					(e.$4mc = y =
						Ne(
							[
								j(1, d.$QO),
								j(2, a.$kZ),
								j(3, r.$ll),
								j(4, m.$MO),
								j(5, h.$r8),
								j(6, g.$Vl),
								j(7, n.$iZ),
								j(8, o.$I8),
							],
							y,
						));
			},
		),
		define(
			de[3898],
			he([
				1, 0, 6, 3, 56, 65, 64, 67, 42, 22, 101, 1342, 1820, 1913, 88, 718, 446,
				18, 66, 85, 78, 336, 68, 121, 165, 456, 142, 60, 10,
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
					(e.$inc = void 0);
				class k {
					constructor(O) {
						(this.editor = O), (this.id = `${O.getId()},${O.getModel().id}`);
					}
				}
				class L {
					constructor(O, B, U, z, F, x) {
						(this.removedDocuments = O),
							(this.addedDocuments = B),
							(this.removedEditors = U),
							(this.addedEditors = z),
							(this.oldActiveEditor = F),
							(this.newActiveEditor = x),
							(this.isEmpty =
								this.removedDocuments.length === 0 &&
								this.addedDocuments.length === 0 &&
								this.removedEditors.length === 0 &&
								this.addedEditors.length === 0 &&
								F === x);
					}
					toString() {
						let O = `DocumentAndEditorStateDelta
`;
						return (
							(O += `	Removed Documents: [${this.removedDocuments.map((B) => B.uri.toString(!0)).join(", ")}]
`),
							(O += `	Added Documents: [${this.addedDocuments.map((B) => B.uri.toString(!0)).join(", ")}]
`),
							(O += `	Removed Editors: [${this.removedEditors.map((B) => B.id).join(", ")}]
`),
							(O += `	Added Editors: [${this.addedEditors.map((B) => B.id).join(", ")}]
`),
							(O += `	New Active Editor: ${this.newActiveEditor}
`),
							O
						);
					}
				}
				class D {
					static compute(O, B) {
						if (!O)
							return new L(
								[],
								[...B.documents.values()],
								[],
								[...B.textEditors.values()],
								void 0,
								B.activeEditor,
							);
						const U = (0, S.$f)(O.documents, B.documents),
							z = (0, S.$g)(O.textEditors, B.textEditors),
							F = O.activeEditor !== B.activeEditor ? O.activeEditor : void 0,
							x = O.activeEditor !== B.activeEditor ? B.activeEditor : void 0;
						return new L(U.removed, U.added, z.removed, z.added, F, x);
					}
					constructor(O, B, U) {
						(this.documents = O),
							(this.textEditors = B),
							(this.activeEditor = U);
					}
				}
				var M;
				(function (R) {
					(R[(R.Editor = 0)] = "Editor"), (R[(R.Panel = 1)] = "Panel");
				})(M || (M = {}));
				let N = class {
					constructor(O, B, U, z, F) {
						(this.g = O),
							(this.h = B),
							(this.i = U),
							(this.j = z),
							(this.k = F),
							(this.a = new i.$Zc()),
							(this.b = new i.$0c()),
							(this.f = M.Editor),
							this.h.onModelAdded(this.o, this, this.a),
							this.h.onModelRemoved((x) => this.p(), this, this.a),
							this.j.onDidActiveEditorChange((x) => this.p(), this, this.a),
							this.i.onCodeEditorAdd(this.l, this, this.a),
							this.i.onCodeEditorRemove(this.n, this, this.a),
							this.i.listCodeEditors().forEach(this.l, this),
							t.Event.filter(
								this.k.onDidPaneCompositeOpen,
								(x) =>
									x.viewContainerLocation === T.ViewContainerLocation.Panel,
							)((x) => (this.f = M.Panel), void 0, this.a),
							t.Event.filter(
								this.k.onDidPaneCompositeClose,
								(x) =>
									x.viewContainerLocation === T.ViewContainerLocation.Panel,
							)((x) => (this.f = M.Editor), void 0, this.a),
							this.j.onDidVisibleEditorsChange(
								(x) => (this.f = M.Editor),
								void 0,
								this.a,
							),
							this.p();
					}
					dispose() {
						this.a.dispose(), this.b.dispose();
					}
					l(O) {
						this.b.set(
							O.getId(),
							(0, i.$Xc)(
								O.onDidChangeModel(() => this.p()),
								O.onDidFocusEditorText(() => this.p()),
								O.onDidFocusEditorWidget(() => this.p(O)),
							),
						),
							this.p();
					}
					n(O) {
						const B = O.getId();
						this.b.has(B) && (this.b.deleteAndDispose(B), this.p());
					}
					o(O) {
						if ((0, C.$TN)(O)) {
							if (!this.c) {
								this.p();
								return;
							}
							(this.c = new D(
								this.c.documents.add(O),
								this.c.textEditors,
								this.c.activeEditor,
							)),
								this.g(new L([], [O], [], [], void 0, void 0));
						}
					}
					p(O) {
						const B = new Set();
						for (const H of this.h.getModels()) (0, C.$TN)(H) && B.add(H);
						const U = new Map();
						let z = null;
						for (const H of this.i.listCodeEditors()) {
							if (H.isSimpleWidget) continue;
							const q = H.getModel();
							if (
								H.hasModel() &&
								q &&
								(0, C.$TN)(q) &&
								!q.isDisposed() &&
								this.h.getModel(q.uri)
							) {
								const V = new k(H);
								U.set(V.id, V),
									(H.hasTextFocus() || (O === H && H.hasWidgetFocus())) &&
										(z = V.id);
							}
						}
						if (!z) {
							let H;
							if (
								(this.f === M.Editor
									? (H = this.r() || this.q())
									: (H = this.q() || this.r()),
								H)
							)
								for (const q of U.values()) H === q.editor && (z = q.id);
						}
						const F = new D(B, U, z),
							x = D.compute(this.c, F);
						x.isEmpty || ((this.c = F), this.g(x));
					}
					q() {
						const O = this.k.getActivePaneComposite(
							T.ViewContainerLocation.Panel,
						);
						if (O instanceof g.$BVb) {
							const B = O.getControl();
							if ((0, w.$0sb)(B)) return B;
						}
					}
					r() {
						let O = this.j.activeTextEditorControl;
						return (0, w.$$sb)(O) && (O = O.getModifiedEditor()), O;
					}
				};
				N = Ne([j(1, d.$QO), j(2, E.$dtb), j(3, o.$IY), j(4, I.$6Sb)], N);
				let A = class {
					constructor(O, B, U, z, F, x, H, q, V, G, K, J, W, X, Y) {
						(this.h = B),
							(this.i = U),
							(this.j = z),
							(this.k = q),
							(this.l = W),
							(this.a = new i.$Zc()),
							(this.g = new Map()),
							(this.b = O.getProxy(n.$mbb.ExtHostDocumentsAndEditors)),
							(this.c = this.a.add(
								new a.$4mc(O, this.h, this.i, x, H, G, J, K, X),
							)),
							O.set(n.$lbb.MainThreadDocuments, this.c),
							(this.f = this.a.add(new c.$hnc(this, O, F, this.j, this.k, Y))),
							O.set(n.$lbb.MainThreadTextEditors, this.f),
							this.a.add(new N((ie) => this.n(ie), B, F, this.j, V));
					}
					dispose() {
						this.a.dispose();
					}
					n(O) {
						const B = [],
							U = [],
							z = O.removedDocuments.map((H) => H.uri);
						for (const H of O.addedEditors) {
							const q = new h.$6mc(
								H.id,
								H.editor.getModel(),
								H.editor,
								{ onGainedFocus() {}, onLostFocus() {} },
								this.c,
								this.h,
								this.l,
							);
							this.g.set(H.id, q), U.push(q);
						}
						for (const { id: H } of O.removedEditors) {
							const q = this.g.get(H);
							q && (q.dispose(), this.g.delete(H), B.push(H));
						}
						const F = Object.create(null);
						let x = !0;
						O.newActiveEditor !== void 0 &&
							((x = !1), (F.newActiveEditor = O.newActiveEditor)),
							z.length > 0 && ((x = !1), (F.removedDocuments = z)),
							B.length > 0 && ((x = !1), (F.removedEditors = B)),
							O.addedDocuments.length > 0 &&
								((x = !1),
								(F.addedDocuments = O.addedDocuments.map((H) => this.o(H)))),
							O.addedEditors.length > 0 &&
								((x = !1), (F.addedEditors = U.map((H) => this.p(H)))),
							x ||
								(this.b.$acceptDocumentsAndEditorsDelta(F),
								z.forEach(this.c.handleModelRemoved, this.c),
								O.addedDocuments.forEach(this.c.handleModelAdded, this.c),
								B.forEach(this.f.handleTextEditorRemoved, this.f),
								U.forEach(this.f.handleTextEditorAdded, this.f));
					}
					o(O) {
						return {
							uri: O.uri,
							versionId: O.getVersionId(),
							lines: O.getLinesContent(),
							EOL: O.getEOL(),
							languageId: O.getLanguageId(),
							isDirty: this.i.isDirty(O.uri),
						};
					}
					p(O) {
						const B = O.getProperties();
						return {
							id: O.getId(),
							documentUri: O.getModel().uri,
							options: B.options,
							selections: B.selections,
							visibleRanges: B.visibleRanges,
							editorPosition: this.q(O),
						};
					}
					q(O) {
						for (const B of this.j.visibleEditorPanes)
							if (O.matches(B)) return (0, p.$b8)(this.k, B.group);
					}
					findTextEditorIdFor(O) {
						for (const [B, U] of this.g) if (U.matches(O)) return B;
					}
					getIdOfCodeEditor(O) {
						for (const [B, U] of this.g) if (U.getCodeEditor() === O) return B;
					}
					getEditor(O) {
						return this.g.get(O);
					}
				};
				(e.$inc = A),
					(e.$inc = A =
						Ne(
							[
								u.$umc,
								j(1, d.$QO),
								j(2, b.$kZ),
								j(3, o.$IY),
								j(4, E.$dtb),
								j(5, r.$ll),
								j(6, m.$MO),
								j(7, f.$EY),
								j(8, I.$6Sb),
								j(9, s.$r8),
								j(10, l.$iZ),
								j(11, y.$Vl),
								j(12, $.$Vxb),
								j(13, v.$I8),
								j(14, P.$gj),
							],
							A,
						));
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[3899],
		he([
			1, 0, 3, 22, 101, 88, 4, 336, 199, 84, 15, 33, 57, 111, 21, 11, 34, 113,
			68, 1303, 215, 37, 9, 10, 938, 25,
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
				(e.$3nc = void 0),
				(c = xi(c));
			let T = class {
				static {
					I = this;
				}
				static {
					this.MementoKeyAdditionalEdits = "file.particpants.additionalEdits";
				}
				constructor(k, L, D, M, N, A, R, O, B, U, z, F, x) {
					(this.d = L),
						(this.f = z),
						(this.g = F),
						(this.h = x),
						(this.b = new t.$Zc()),
						(this.c = new t.$0c()),
						(this.a = k.getProxy(E.$mbb.ExtHostFileSystemEventService)),
						this.b.add(
							L.onDidFilesChange((V) => {
								this.a.$onFileEvent({
									created: V.rawAdded,
									changed: V.rawUpdated,
									deleted: V.rawDeleted,
								});
							}),
						);
					const H = this,
						q = new (class {
							async participate(V, G, K, J, W) {
								if (K?.isUndoing) return;
								const X = new a.$Ce(W),
									Y = setTimeout(() => X.cancel(), J),
									ie = await N.withProgress(
										{
											location: r.ProgressLocation.Notification,
											title: this.a(G),
											cancellable: !0,
											delay: Math.min(J / 2, 3e3),
										},
										() => {
											const _ = H.a.$onWillRunFileOperation(G, V, J, X.token);
											return (0, u.$Ah)(_, X.token);
										},
										() => {
											X.cancel();
										},
									).finally(() => {
										X.dispose(), clearTimeout(Y);
									});
								if (!ie || ie.edit.edits.length === 0) return;
								const ne = ie.edit.edits.some(
									(_) => _.metadata?.needsConfirmation,
								);
								let ee = R.getBoolean(
									I.MementoKeyAdditionalEdits,
									n.StorageScope.PROFILE,
								);
								if ((B.extensionTestsLocationURI && (ee = !1), ee === void 0)) {
									let _;
									if (
										(ie.extensionNames.length === 1
											? G === i.FileOperation.CREATE
												? (_ = (0, C.localize)(
														2551,
														null,
														ie.extensionNames[0],
													))
												: G === i.FileOperation.COPY
													? (_ = (0, C.localize)(
															2552,
															null,
															ie.extensionNames[0],
														))
													: G === i.FileOperation.MOVE
														? (_ = (0, C.localize)(
																2553,
																null,
																ie.extensionNames[0],
															))
														: (_ = (0, C.localize)(
																2554,
																null,
																ie.extensionNames[0],
															))
											: G === i.FileOperation.CREATE
												? (_ = (0, C.localize)(
														2555,
														null,
														ie.extensionNames.length,
													))
												: G === i.FileOperation.COPY
													? (_ = (0, C.localize)(
															2556,
															null,
															ie.extensionNames.length,
														))
													: G === i.FileOperation.MOVE
														? (_ = (0, C.localize)(
																2557,
																null,
																ie.extensionNames.length,
															))
														: (_ = (0, C.localize)(
																2558,
																null,
																ie.extensionNames.length,
															)),
										ne)
									) {
										const { confirmed: te } = await A.confirm({
											type: c.default.Info,
											message: _,
											primaryButton: (0, C.localize)(2559, null),
											cancelButton: (0, C.localize)(2560, null),
										});
										if (((ee = !0), !te)) return;
									} else {
										let te;
										(function (se) {
											(se[(se.OK = 0)] = "OK"),
												(se[(se.Preview = 1)] = "Preview"),
												(se[(se.Cancel = 2)] = "Cancel");
										})(te || (te = {}));
										const { result: Q, checkboxChecked: Z } = await A.prompt({
											type: c.default.Info,
											message: _,
											buttons: [
												{
													label: (0, C.localize)(2561, null),
													run: () => te.OK,
												},
												{
													label: (0, C.localize)(2562, null),
													run: () => te.Preview,
												},
											],
											cancelButton: {
												label: (0, C.localize)(2563, null),
												run: () => te.Cancel,
											},
											checkbox: { label: (0, C.localize)(2564, null) },
										});
										if (Q === te.Cancel) return;
										(ee = Q === te.Preview),
											Z &&
												R.store(
													I.MementoKeyAdditionalEdits,
													ee,
													n.StorageScope.PROFILE,
													n.StorageTarget.USER,
												);
									}
								}
								O.info(
									"[onWill-handler] applying additional workspace edit from extensions",
									ie.extensionNames,
								),
									await M.apply((0, b.$xmc)(ie.edit, U), {
										undoRedoGroupId: K?.undoRedoGroupId,
										showPreview: ee,
									});
							}
							a(V) {
								switch (V) {
									case i.FileOperation.CREATE:
										return (0, C.localize)(2565, null);
									case i.FileOperation.MOVE:
										return (0, C.localize)(2566, null);
									case i.FileOperation.COPY:
										return (0, C.localize)(2567, null);
									case i.FileOperation.DELETE:
										return (0, C.localize)(2568, null);
									case i.FileOperation.WRITE:
										return (0, C.localize)(2569, null);
								}
							}
						})();
					this.b.add(D.addFileOperationParticipant(q)),
						this.b.add(
							D.onDidRunWorkingCopyFileOperation((V) =>
								this.a.$onDidRunFileOperation(V.operation, V.files),
							),
						);
				}
				async $watch(k, L, D, M, N) {
					const A = y.URI.revive(D),
						R = { ...M };
					if (R.recursive)
						try {
							(await this.d.stat(A)).isDirectory || (R.recursive = !1);
						} catch {}
					if (N) {
						this.g.trace(
							`MainThreadFileSystemEventService#$watch(): request to start watching correlated (extension: ${k}, path: ${A.toString(!0)}, recursive: ${R.recursive}, session: ${L})`,
						);
						const O = new t.$Zc(),
							B = O.add(this.d.createWatcher(A, R));
						O.add(
							B.onDidChange((U) => {
								this.a.$onFileEvent({
									session: L,
									created: U.rawAdded,
									changed: U.rawUpdated,
									deleted: U.rawDeleted,
								});
							}),
						),
							this.c.set(L, O);
					} else {
						this.g.trace(
							`MainThreadFileSystemEventService#$watch(): request to start watching uncorrelated (extension: ${k}, path: ${A.toString(!0)}, recursive: ${R.recursive}, session: ${L})`,
						);
						const O = this.f.getWorkspaceFolder(A);
						if (R.recursive && R.excludes.length === 0) {
							const U = this.h.getValue();
							if (U.files?.watcherExclude)
								for (const z in U.files.watcherExclude)
									z && U.files.watcherExclude[z] === !0 && R.excludes.push(z);
						} else if (!R.recursive && O) {
							const U = this.h.getValue();
							if (U.files?.watcherExclude) {
								for (const z in U.files.watcherExclude)
									if (z && U.files.watcherExclude[z] === !0) {
										R.includes || (R.includes = []);
										const F = `${(0, l.$uf)(z, "/")}/${s.$Fk}`;
										R.includes.push((0, v.$Ar)(O.uri.fsPath, F));
									}
							}
							if (!R.includes || R.includes.length === 0) {
								this.g.trace(
									`MainThreadFileSystemEventService#$watch(): ignoring request to start watching because path is inside workspace and no excludes are configured (extension: ${k}, path: ${A.toString(!0)}, recursive: ${R.recursive}, session: ${L})`,
								);
								return;
							}
						}
						const B = this.d.watch(A, R);
						this.c.set(L, B);
					}
				}
				$unwatch(k) {
					this.c.has(k) &&
						(this.g.trace(
							`MainThreadFileSystemEventService#$unwatch(): request to stop watching (session: ${k})`,
						),
						this.c.deleteAndDispose(k));
				}
				dispose() {
					this.b.dispose(), this.c.dispose();
				}
			};
			(e.$3nc = T),
				(e.$3nc =
					T =
					I =
						Ne(
							[
								(0, w.$tmc)(E.$lbb.MainThreadFileSystemEventService),
								j(1, i.$ll),
								j(2, d.$iZ),
								j(3, m.$rzb),
								j(4, r.$8N),
								j(5, h.$GO),
								j(6, n.$lq),
								j(7, p.$ik),
								j(8, o.$Ti),
								j(9, f.$Vl),
								j(10, S.$Vi),
								j(11, p.$ik),
								j(12, $.$gj),
							],
							T,
						)),
				(0, g.$4X)(
					class extends g.$3X {
						constructor() {
							super({
								id: "files.participants.resetChoice",
								title: {
									value: (0, C.localize)(2570, null),
									original: "Reset choice for 'File operation needs preview'",
								},
								f1: !0,
							});
						}
						run(k) {
							k.get(n.$lq).remove(
								T.MementoKeyAdditionalEdits,
								n.StorageScope.PROFILE,
							);
						}
					},
				);
		},
	),
		define(
			de[3900],
			he([1, 0, 3, 59, 9, 1342, 70, 509, 68, 88, 1027, 622]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Epc = void 0);
				let h = class {
					constructor(n, g, p) {
						(this.f = g),
							(this.g = p),
							(this.a = new t.$Zc()),
							(this.c = new i.$Gc()),
							(this.b = n.getProxy(r.$mbb.ExtHostNotebookDocuments)),
							(this.d = new E.$3mc(this.g.extUri)),
							this.a.add(
								this.f.onDidChangeDirty((o) =>
									this.b.$acceptDirtyStateChanged(o.resource, o.isDirty()),
								),
							),
							this.a.add(
								this.f.onDidSaveNotebook((o) => this.b.$acceptModelSaved(o)),
							),
							this.a.add(
								g.onWillFailWithConflict((o) => {
									this.d.remove(o.resource);
								}),
							);
					}
					dispose() {
						this.a.dispose(), this.d.dispose(), (0, t.$Vc)(this.c.values());
					}
					handleNotebooksAdded(n) {
						for (const g of n) {
							const p = new t.$Zc();
							p.add(
								g.onDidChangeContent((o) => {
									const f = { versionId: o.versionId, rawEvents: [] };
									for (const s of o.rawEvents)
										switch (s.kind) {
											case C.NotebookCellsChangeType.ModelChange:
												f.rawEvents.push({
													kind: s.kind,
													changes: s.changes.map((l) => [
														l[0],
														l[1],
														l[2].map((y) => u.NotebookDto.toNotebookCellDto(y)),
													]),
												});
												break;
											case C.NotebookCellsChangeType.Move:
												f.rawEvents.push({
													kind: s.kind,
													index: s.index,
													length: s.length,
													newIdx: s.newIdx,
												});
												break;
											case C.NotebookCellsChangeType.Output:
												f.rawEvents.push({
													kind: s.kind,
													index: s.index,
													outputs: s.outputs.map(
														u.NotebookDto.toNotebookOutputDto,
													),
												});
												break;
											case C.NotebookCellsChangeType.OutputItem:
												f.rawEvents.push({
													kind: s.kind,
													index: s.index,
													outputId: s.outputId,
													outputItems: s.outputItems.map(
														u.NotebookDto.toNotebookOutputItemDto,
													),
													append: s.append,
												});
												break;
											case C.NotebookCellsChangeType.ChangeCellLanguage:
											case C.NotebookCellsChangeType.ChangeCellContent:
											case C.NotebookCellsChangeType.ChangeCellMetadata:
											case C.NotebookCellsChangeType.ChangeCellInternalMetadata:
												f.rawEvents.push(s);
												break;
										}
									const b = o.rawEvents.find(
										(s) =>
											s.kind ===
											C.NotebookCellsChangeType.ChangeDocumentMetadata,
									);
									this.b.$acceptModelChanged(
										g.uri,
										new a.$uO(f),
										this.f.isDirty(g.uri),
										b ? g.metadata : void 0,
									);
								}),
							),
								this.c.set(g.uri, p);
						}
					}
					handleNotebooksRemoved(n) {
						for (const g of n) this.c.get(g)?.dispose(), this.c.delete(g);
					}
					async $tryCreateNotebook(n) {
						if (n.content) {
							const g = await this.f.resolve(
								{ untitledResource: void 0 },
								n.viewType,
							);
							if (
								(g.object.notebook.onWillDispose(() => {
									g.dispose();
								}),
								this.b.$acceptDirtyStateChanged(g.object.resource, !0),
								n.content)
							) {
								const p = u.NotebookDto.fromNotebookDataDto(n.content);
								g.object.notebook.reset(
									p.cells,
									p.metadata,
									g.object.notebook.transientOptions,
								);
							}
							return g.object.notebook.uri;
						} else
							return (await this.f.createUntitledNotebookTextModel(n.viewType))
								.uri;
					}
					async $tryOpenNotebook(n) {
						const g = w.URI.revive(n),
							p = await this.f.resolve(g, void 0);
						return (
							n.scheme === "untitled" &&
								p.object.notebook.onWillDispose(() => {
									p.dispose();
								}),
							this.d.add(g, p),
							g
						);
					}
					async $trySaveNotebook(n) {
						const g = w.URI.revive(n),
							p = await this.f.resolve(g),
							o = await p.object.save();
						return p.dispose(), o;
					}
				};
				(e.$Epc = h), (e.$Epc = h = Ne([j(1, d.$OIb), j(2, m.$Vl)], h));
			},
		),
		define(
			de[3901],
			he([
				1, 0, 456, 3, 5, 34, 3900, 1027, 3483, 101, 446, 108, 293, 161, 66, 18,
				88, 622,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				var f;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Gpc = void 0);
				class b {
					static delta(y, $) {
						if (!y)
							return {
								addedDocuments: [...$.documents],
								removedDocuments: [],
								addedEditors: [...$.textEditors.values()],
								removedEditors: [],
								visibleEditors: [...$.visibleEditors].map((P) => P[0]),
							};
						const v = (0, t.$f)(y.documents, $.documents),
							S = (0, t.$g)(y.textEditors, $.textEditors),
							I = y.activeEditor !== $.activeEditor ? $.activeEditor : void 0,
							T = (0, t.$g)(y.visibleEditors, $.visibleEditors);
						return {
							addedDocuments: v.added,
							removedDocuments: v.removed.map((P) => P.uri),
							addedEditors: S.added,
							removedEditors: S.removed.map((P) => P.getId()),
							newActiveEditor: I,
							visibleEditors:
								T.added.length === 0 && T.removed.length === 0
									? void 0
									: [...$.visibleEditors].map((P) => P[0]),
						};
					}
					constructor(y, $, v, S) {
						(this.documents = y),
							(this.textEditors = $),
							(this.activeEditor = v),
							(this.visibleEditors = S);
					}
				}
				let s = (f = class {
					constructor(y, $, v, S, I, T, P) {
						(this.h = v),
							(this.i = S),
							(this.j = I),
							(this.k = T),
							(this.l = P),
							(this.b = new i.$Zc()),
							(this.c = new i.$0c()),
							(this.a = y.getProxy(p.$mbb.ExtHostNotebook)),
							(this.f = $.createInstance(C.$Epc, y)),
							(this.g = $.createInstance(m.$Fpc, y)),
							y.set(p.$lbb.MainThreadNotebookDocuments, this.f),
							y.set(p.$lbb.MainThreadNotebookEditors, this.g),
							this.h.onWillAddNotebookDocument(() => this.o(), this, this.b),
							this.h.onDidRemoveNotebookDocument(() => this.o(), this, this.b),
							this.j.onDidActiveEditorChange(() => this.o(), this, this.b),
							this.j.onDidVisibleEditorsChange(() => this.o(), this, this.b),
							this.i.onDidAddNotebookEditor(this.m, this, this.b),
							this.i.onDidRemoveNotebookEditor(this.n, this, this.b),
							this.o();
					}
					dispose() {
						this.f.dispose(),
							this.g.dispose(),
							this.b.dispose(),
							this.c.dispose();
					}
					m(y) {
						this.c.set(
							y.getId(),
							(0, i.$Xc)(
								y.onDidChangeModel(() => this.o()),
								y.onDidFocusWidget(() => this.o(y)),
							),
						),
							this.o();
					}
					n(y) {
						this.c.deleteAndDispose(y.getId()), this.o();
					}
					o(y) {
						const $ = new Map(),
							v = new Map();
						for (const P of this.i.listNotebookEditors())
							P.hasModel() && $.set(P.getId(), P);
						const S = (0, a.$eJb)(this.j.activeEditorPane);
						let I = null;
						S ? (I = S.getId()) : y?.textModel && (I = y.getId()),
							I &&
								!$.has(I) &&
								(this.l.trace(
									"MainThreadNotebooksAndEditors#_updateState: active editor is not in editors list",
									I,
									$.keys(),
								),
								(I = null));
						for (const P of this.j.visibleEditorPanes) {
							const k = (0, a.$eJb)(P);
							k?.hasModel() && $.has(k.getId()) && v.set(k.getId(), k);
						}
						const T = new b(new Set(this.h.listNotebookDocuments()), $, I, v);
						this.p(b.delta(this.d, T)), (this.d = T);
					}
					p(y) {
						if (f.q(y)) return;
						const $ = {
							removedDocuments: y.removedDocuments,
							removedEditors: y.removedEditors,
							newActiveEditor: y.newActiveEditor,
							visibleEditors: y.visibleEditors,
							addedDocuments: y.addedDocuments.map(f.r),
							addedEditors: y.addedEditors.map(this.s, this),
						};
						this.a.$acceptDocumentAndEditorsDelta(new o.$uO($)),
							this.g.handleEditorsRemoved(y.removedEditors),
							this.f.handleNotebooksRemoved(y.removedDocuments),
							this.f.handleNotebooksAdded(y.addedDocuments),
							this.g.handleEditorsAdded(y.addedEditors);
					}
					static q(y) {
						return !(
							(y.addedDocuments !== void 0 && y.addedDocuments.length > 0) ||
							(y.removedDocuments !== void 0 &&
								y.removedDocuments.length > 0) ||
							(y.addedEditors !== void 0 && y.addedEditors.length > 0) ||
							(y.removedEditors !== void 0 && y.removedEditors.length > 0) ||
							(y.visibleEditors !== void 0 && y.visibleEditors.length > 0) ||
							y.newActiveEditor !== void 0
						);
					}
					static r(y) {
						return {
							viewType: y.viewType,
							uri: y.uri,
							metadata: y.metadata,
							versionId: y.versionId,
							cells: y.cells.map(d.NotebookDto.toNotebookCellDto),
						};
					}
					s(y) {
						const $ = this.j.visibleEditorPanes.find(
							(v) => (0, a.$eJb)(v) === y,
						);
						return {
							id: y.getId(),
							documentUri: y.textModel.uri,
							selections: y.getSelections(),
							visibleRanges: y.visibleRanges,
							viewColumn: $ && (0, u.$b8)(this.k, $.group),
						};
					}
				});
				(e.$Gpc = s),
					(e.$Gpc =
						s =
						f =
							Ne(
								[
									r.$umc,
									j(1, w.$Li),
									j(2, c.$MIb),
									j(3, h.$n5b),
									j(4, g.$IY),
									j(5, n.$EY),
									j(6, E.$ik),
								],
								s,
							));
			},
		),
		define(
			de[3902],
			he([1, 0, 3, 5, 3897, 3442, 831, 3376, 88, 101]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5oc = void 0),
					(m = mt(m));
				let u = class extends t.$1c {
					constructor(h, c) {
						super();
						const n = this.D(c.createInstance(C.$Lmc, h));
						h.set(m.$lbb.MainThreadWebviews, n);
						const g = this.D(c.createInstance(E.$Soc, h, n));
						h.set(m.$lbb.MainThreadWebviewPanels, g);
						const p = this.D(c.createInstance(w.$1oc, h, n, g));
						h.set(m.$lbb.MainThreadCustomEditors, p);
						const o = this.D(c.createInstance(d.$4oc, h, n));
						h.set(m.$lbb.MainThreadWebviewViews, o);
					}
				};
				(e.$5oc = u), (e.$5oc = u = Ne([r.$umc, j(1, i.$Li)], u));
			},
		),
		define(
			de[3903],
			he([1, 0, 22, 10, 336, 155, 5, 34, 33, 24, 85, 23]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				var h;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$9Mc = void 0);
				class c {
					constructor() {
						this.uris = [];
					}
					async perform() {
						return this;
					}
					toString() {
						return "(noop)";
					}
				}
				class n {
					constructor(S, I, T) {
						(this.newUri = S),
							(this.oldUri = I),
							(this.options = T),
							(this.type = "rename");
					}
				}
				let g = (h = class {
					constructor(S, I, T, P) {
						(this.a = S), (this.b = I), (this.c = T), (this.d = P);
					}
					get uris() {
						return this.a.flatMap((S) => [S.newUri, S.oldUri]);
					}
					async perform(S) {
						const I = [],
							T = [];
						for (const P of this.a)
							(P.options.overwrite === void 0 &&
								P.options.ignoreIfExists &&
								(await this.d.exists(P.newUri))) ||
								(I.push({
									file: { source: P.oldUri, target: P.newUri },
									overwrite: P.options.overwrite,
								}),
								T.push(new n(P.oldUri, P.newUri, P.options)));
						return I.length === 0
							? new c()
							: (await this.c.move(I, S, this.b),
								new h(T, { isUndoing: !0 }, this.c, this.d));
					}
					toString() {
						return `(rename ${this.a.map((S) => `${S.oldUri} to ${S.newUri}`).join(", ")})`;
					}
				});
				g = h = Ne([j(2, w.$iZ), j(3, t.$ll)], g);
				class p {
					constructor(S, I, T) {
						(this.newUri = S),
							(this.oldUri = I),
							(this.options = T),
							(this.type = "copy");
					}
				}
				let o = class {
					constructor(S, I, T, P, k) {
						(this.a = S),
							(this.b = I),
							(this.c = T),
							(this.d = P),
							(this.e = k);
					}
					get uris() {
						return this.a.flatMap((S) => [S.newUri, S.oldUri]);
					}
					async perform(S) {
						const I = [];
						for (const k of this.a)
							(k.options.overwrite === void 0 &&
								k.options.ignoreIfExists &&
								(await this.d.exists(k.newUri))) ||
								I.push({
									file: { source: k.oldUri, target: k.newUri },
									overwrite: k.options.overwrite,
								});
						if (I.length === 0) return new c();
						const T = await this.c.copy(I, S, this.b),
							P = [];
						for (let k = 0; k < T.length; k++) {
							const L = T[k],
								D = this.a[k];
							P.push(
								new s(
									L.resource,
									{
										recursive: !0,
										folder: this.a[k].options.folder || L.isDirectory,
										...D.options,
									},
									!1,
								),
							);
						}
						return this.e.createInstance(l, P, { isUndoing: !0 });
					}
					toString() {
						return `(copy ${this.a.map((S) => `${S.oldUri} to ${S.newUri}`).join(", ")})`;
					}
				};
				o = Ne([j(2, w.$iZ), j(3, t.$ll), j(4, C.$Li)], o);
				class f {
					constructor(S, I, T) {
						(this.newUri = S),
							(this.options = I),
							(this.contents = T),
							(this.type = "create");
					}
				}
				let b = class {
					constructor(S, I, T, P, k, L) {
						(this.a = S),
							(this.b = I),
							(this.c = T),
							(this.d = P),
							(this.e = k),
							(this.f = L);
					}
					get uris() {
						return this.a.map((S) => S.newUri);
					}
					async perform(S) {
						const I = [],
							T = [],
							P = [];
						for (const k of this.a)
							if (
								k.newUri.scheme !== a.Schemas.untitled &&
								!(
									k.options.overwrite === void 0 &&
									k.options.ignoreIfExists &&
									(await this.c.exists(k.newUri))
								)
							) {
								if (k.options.folder) I.push({ resource: k.newUri });
								else {
									const L =
										typeof k.contents < "u"
											? k.contents
											: await this.f.getEncodedReadable(k.newUri);
									T.push({
										resource: k.newUri,
										contents: L,
										overwrite: k.options.overwrite,
									});
								}
								P.push(
									new s(k.newUri, k.options, !k.options.folder && !k.contents),
								);
							}
						return I.length === 0 && T.length === 0
							? new c()
							: (await this.d.createFolder(I, S, this.b),
								await this.d.create(T, S, this.b),
								this.e.createInstance(l, P, { isUndoing: !0 }));
					}
					toString() {
						return `(create ${this.a.map((S) => (S.options.folder ? `folder ${S.newUri}` : `file ${S.newUri} with ${S.contents?.byteLength || 0} bytes`)).join(", ")})`;
					}
				};
				b = Ne([j(2, t.$ll), j(3, w.$iZ), j(4, C.$Li), j(5, u.$kZ)], b);
				class s {
					constructor(S, I, T) {
						(this.oldUri = S),
							(this.options = I),
							(this.undoesCreate = T),
							(this.type = "delete");
					}
				}
				let l = class {
					constructor(S, I, T, P, k, L, D) {
						(this.a = S),
							(this.b = I),
							(this.c = T),
							(this.d = P),
							(this.e = k),
							(this.f = L),
							(this.g = D);
					}
					get uris() {
						return this.a.map((S) => S.oldUri);
					}
					async perform(S) {
						const I = [],
							T = [];
						for (const P of this.a) {
							let k;
							try {
								k = await this.d.resolve(P.oldUri, { resolveMetadata: !0 });
							} catch {
								if (!P.options.ignoreIfNotExists)
									throw new Error(
										`${P.oldUri} does not exist and can not be deleted`,
									);
								continue;
							}
							I.push({
								resource: P.oldUri,
								recursive: P.options.recursive,
								useTrash:
									!P.options.skipTrashBin &&
									this.d.hasCapability(
										P.oldUri,
										t.FileSystemProviderCapabilities.Trash,
									) &&
									this.e.getValue("files.enableTrash"),
							});
							let L;
							if (
								!P.undoesCreate &&
								!P.options.folder &&
								!(
									typeof P.options.maxSize == "number" &&
									k.size > P.options.maxSize
								)
							)
								try {
									L = await this.d.readFile(P.oldUri);
								} catch (D) {
									this.g.error(D);
								}
							L !== void 0 && T.push(new f(P.oldUri, P.options, L.value));
						}
						return I.length === 0
							? new c()
							: (await this.c.delete(I, S, this.b),
								T.length === 0
									? new c()
									: this.f.createInstance(b, T, { isUndoing: !0 }));
					}
					toString() {
						return `(delete ${this.a.map((S) => S.oldUri).join(", ")})`;
					}
				};
				l = Ne(
					[j(2, w.$iZ), j(3, t.$ll), j(4, i.$gj), j(5, C.$Li), j(6, d.$ik)],
					l,
				);
				class y {
					constructor(S, I, T, P) {
						(this.label = S),
							(this.code = I),
							(this.operations = T),
							(this.confirmBeforeUndo = P),
							(this.type = E.UndoRedoElementType.Workspace),
							(this.resources = T.flatMap((k) => k.uris));
					}
					async undo() {
						await this.a();
					}
					async redo() {
						await this.a();
					}
					async a() {
						for (let S = 0; S < this.operations.length; S++) {
							const T = await this.operations[S].perform(
								m.CancellationToken.None,
							);
							this.operations[S] = T;
						}
					}
					toString() {
						return this.operations.map((S) => String(S)).join(", ");
					}
				}
				let $ = class {
					constructor(S, I, T, P, k, L, D, M, N, A) {
						(this.a = S),
							(this.b = I),
							(this.c = T),
							(this.d = P),
							(this.e = k),
							(this.f = L),
							(this.g = D),
							(this.h = M),
							(this.j = N),
							(this.k = A);
					}
					async apply() {
						const S = [],
							I = { undoRedoGroupId: this.c.id },
							T = [];
						for (const L of this.h)
							L.newResource && L.oldResource && !L.options?.copy
								? T.push(new n(L.newResource, L.oldResource, L.options ?? {}))
								: L.newResource && L.oldResource && L.options?.copy
									? T.push(new p(L.newResource, L.oldResource, L.options ?? {}))
									: !L.newResource && L.oldResource
										? T.push(new s(L.oldResource, L.options ?? {}, !1))
										: L.newResource &&
											!L.oldResource &&
											T.push(
												new f(
													L.newResource,
													L.options ?? {},
													await L.options.contents,
												),
											);
						if (T.length === 0) return [];
						const P = [];
						P[0] = [T[0]];
						for (let L = 1; L < T.length; L++) {
							const D = T[L],
								M = (0, r.$wb)(P);
							M?.[0].type === D.type ? M.push(D) : P.push([D]);
						}
						for (const L of P) {
							if (this.g.isCancellationRequested) break;
							let D;
							switch (L[0].type) {
								case "rename":
									D = this.j.createInstance(g, L, I);
									break;
								case "copy":
									D = this.j.createInstance(o, L, I);
									break;
								case "delete":
									D = this.j.createInstance(l, L, I);
									break;
								case "create":
									D = this.j.createInstance(b, L, I);
									break;
							}
							if (D) {
								const M = await D.perform(this.g);
								S.push(M);
							}
							this.f.report(void 0);
						}
						const k = new y(this.a, this.b, S, this.e);
						return this.k.pushElement(k, this.c, this.d), k.resources;
					}
				};
				(e.$9Mc = $), (e.$9Mc = $ = Ne([j(8, C.$Li), j(9, E.$GN)], $));
			},
		),
		define(
			de[3904],
			he([
				1, 0, 33, 3, 273, 59, 56, 199, 38, 4, 10, 81, 57, 20, 5, 34, 84, 30,
				155, 572, 3903, 3005, 18, 52, 227,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$Mc = void 0);
				function S(k) {
					return k.map((L) => {
						if (d.$tzb.is(L)) return d.$tzb.lift(L);
						if (d.$uzb.is(L)) return d.$uzb.lift(L);
						if (b.$hJb.is(L)) return b.$hJb.lift(L);
						throw new Error("Unsupported edit");
					});
				}
				let I = class {
					constructor(L, D, M, N, A, R, O, B, U, z, F) {
						(this.a = L),
							(this.b = D),
							(this.c = M),
							(this.d = N),
							(this.f = A),
							(this.g = R),
							(this.h = O),
							(this.j = B),
							(this.k = U),
							(this.l = z),
							(this.m = F);
					}
					ariaMessage() {
						const L = new E.$Gc(),
							D = new E.$Gc();
						let M = 0;
						for (const N of this.g)
							N instanceof d.$tzb
								? ((M += 1), D.set(N.resource, !0))
								: N instanceof d.$uzb &&
									L.set(N.oldResource ?? N.newResource, !0);
						return this.g.length === 0
							? (0, r.localize)(4462, null)
							: L.size === 0
								? M > 1 && D.size > 1
									? (0, r.localize)(4463, null, M, D.size)
									: (0, r.localize)(4464, null, M)
								: (0, r.localize)(4465, null, M, D.size, L.size);
					}
					async perform() {
						if (this.g.length === 0) return [];
						const L = [1];
						for (let R = 1; R < this.g.length; R++)
							Object.getPrototypeOf(this.g[R - 1]) ===
							Object.getPrototypeOf(this.g[R])
								? L[L.length - 1]++
								: L.push(1);
						const D = this.g.length > 1 ? 0 : void 0;
						this.d.report({ increment: D, total: 100 });
						const M = {
								report: (R) =>
									this.d.report({ increment: 100 / this.g.length }),
							},
							N = [];
						let A = 0;
						for (const R of L) {
							if (this.f.isCancellationRequested) break;
							const O = this.g.slice(A, A + R);
							O[0] instanceof d.$uzb
								? N.push(await this.n(O, this.h, this.j, this.k, M))
								: O[0] instanceof d.$tzb
									? N.push(await this.o(O, this.h, this.j, M))
									: O[0] instanceof b.$hJb
										? N.push(await this.p(O, this.h, this.j, M))
										: console.log("UNKNOWN EDIT"),
								(A = A + R);
						}
						return N.flat();
					}
					async n(L, D, M, N, A) {
						return (
							this.m.debug("_performFileEdits", JSON.stringify(L)),
							await this.l
								.createInstance(
									s.$9Mc,
									this.a || (0, r.localize)(4466, null),
									this.b || "undoredo.workspaceEdit",
									D,
									M,
									N,
									A,
									this.f,
									L,
								)
								.apply()
						);
					}
					async o(L, D, M, N) {
						return (
							this.m.debug("_performTextEdits", JSON.stringify(L)),
							await this.l
								.createInstance(
									l.$0Mc,
									this.a || (0, r.localize)(4467, null),
									this.b || "undoredo.workspaceEdit",
									this.c,
									D,
									M,
									N,
									this.f,
									L,
								)
								.apply()
						);
					}
					async p(L, D, M, N) {
						return (
							this.m.debug("_performCellEdits", JSON.stringify(L)),
							await this.l.createInstance(b.$iJb, D, M, N, this.f, L).apply()
						);
					}
				};
				I = Ne([j(9, n.$Li), j(10, g.$ik)], I);
				let T = class {
					constructor(L, D, M, N, A, R, O) {
						(this.c = L),
							(this.d = D),
							(this.f = M),
							(this.g = N),
							(this.h = A),
							(this.j = R),
							(this.k = O),
							(this.a = new w.$$c());
					}
					setPreviewHandler(L) {
						return (
							(this.b = L),
							(0, i.$Yc)(() => {
								this.b === L && (this.b = void 0);
							})
						);
					}
					hasPreviewHandler() {
						return !!this.b;
					}
					async apply(L, D) {
						let M = S(Array.isArray(L) ? L : L.edits);
						if (M.length === 0)
							return {
								ariaSummary: (0, r.localize)(4468, null),
								isApplied: !1,
							};
						this.b &&
							(D?.showPreview ||
								M.some((z) => z.metadata?.needsConfirmation)) &&
							(M = await this.b(M, D));
						let N = D?.editor;
						if (!N) {
							const z = this.f.activeTextEditorControl;
							(0, C.$0sb)(z)
								? (N = z)
								: (0, C.$$sb)(z) && (N = z.getModifiedEditor());
						}
						N && N.getOption(m.EditorOption.readOnly) && (N = void 0);
						let A,
							R = () => {};
						if (typeof D?.undoRedoGroupId == "number") {
							for (const z of this.a)
								if (z.id === D.undoRedoGroupId) {
									A = z;
									break;
								}
						}
						A || ((A = new f.$IN()), (R = this.a.push(A)));
						const O = D?.quotableLabel || D?.label,
							B = this.c.createInstance(
								I,
								O,
								D?.code,
								N,
								D?.progress ?? p.$0N.None,
								D?.token ?? t.CancellationToken.None,
								M,
								A,
								D?.undoRedoSource,
								!!D?.confirmBeforeUndo,
							);
						let U;
						try {
							U = this.g.onBeforeShutdown((F) =>
								F.veto(this.m(O, F.reason), "veto.blukEditService"),
							);
							const z = await B.perform();
							return (
								D?.respectAutoSaveConfig &&
									this.k.getValue(P) === !0 &&
									z.length > 1 &&
									(await this.l(z)),
								{ ariaSummary: B.ariaMessage(), isApplied: M.length > 0 }
							);
						} catch (z) {
							throw (this.d.error(z), z);
						} finally {
							U?.dispose(), R();
						}
					}
					async l(L) {
						const D = new E.$Hc(L),
							M = this.j.dirtyWorkingCopies.map(async (A) => {
								D.has(A.resource) && (await A.save());
							}),
							N = await Promise.allSettled(M);
						for (const A of N) A.status === "rejected" && this.d.warn(A.reason);
					}
					async m(L, D) {
						let M, N;
						switch (D) {
							case $.ShutdownReason.CLOSE:
								(M = (0, r.localize)(4469, null)),
									(N = (0, r.localize)(4470, null));
								break;
							case $.ShutdownReason.LOAD:
								(M = (0, r.localize)(4471, null)),
									(N = (0, r.localize)(4472, null));
								break;
							case $.ShutdownReason.RELOAD:
								(M = (0, r.localize)(4473, null)),
									(N = (0, r.localize)(4474, null));
								break;
							default:
								(M = (0, r.localize)(4475, null)),
									(N = (0, r.localize)(4476, null));
								break;
						}
						return !(
							await this.h.confirm({
								message: M,
								detail: (0, r.localize)(
									4477,
									null,
									L || (0, r.localize)(4478, null),
								),
								primaryButton: N,
							})
						).confirmed;
					}
				};
				(e.$$Mc = T),
					(e.$$Mc = T =
						Ne(
							[
								j(0, n.$Li),
								j(1, g.$ik),
								j(2, y.$IY),
								j(3, $.$n6),
								j(4, h.$GO),
								j(5, v.$gY),
								j(6, u.$gj),
							],
							T,
						)),
					(0, c.$lK)(d.$rzb, T, c.InstantiationType.Delayed);
				const P = "files.refactoring.autoSave";
				o.$Io
					.as(a.$No.Configuration)
					.registerConfiguration({
						id: "files",
						properties: {
							[P]: {
								description: (0, r.localize)(4479, null),
								default: !0,
								type: "boolean",
							},
						},
					});
			},
		),
		define(
			de[3905],
			he([
				1, 0, 4, 163, 6, 9, 1920, 3, 5, 59, 22, 15, 29, 3676, 40, 336, 19, 122,
				172, 68,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$r4c = void 0);
				let s = class extends d.$1c {
					get models() {
						return [...this.r.values()];
					}
					constructor(y, $, v, S, I) {
						super(),
							(this.y = y),
							(this.z = $),
							(this.C = v),
							(this.F = S),
							(this.G = I),
							(this.a = this.D(new w.$re({ leakWarningThreshold: 500 }))),
							(this.onDidCreate = this.a.event),
							(this.b = this.D(new w.$re())),
							(this.onDidResolve = this.b.event),
							(this.c = this.D(new w.$re())),
							(this.onDidRemove = this.c.event),
							(this.f = this.D(new w.$re())),
							(this.onDidChangeDirty = this.f.event),
							(this.g = this.D(new w.$re())),
							(this.onDidChangeReadonly = this.g.event),
							(this.h = this.D(new w.$re())),
							(this.onDidChangeOrphaned = this.h.event),
							(this.j = this.D(new w.$re())),
							(this.onDidSaveError = this.j.event),
							(this.m = this.D(new w.$re())),
							(this.onDidSave = this.m.event),
							(this.n = this.D(new w.$re())),
							(this.onDidRevert = this.n.event),
							(this.q = this.D(new w.$re())),
							(this.onDidChangeEncoding = this.q.event),
							(this.r = new r.$Gc()),
							(this.s = new r.$Gc()),
							(this.t = new r.$Gc()),
							(this.u = new r.$Gc()),
							(this.w = this.D(new a.$Vh())),
							(this.saveErrorHandler = (() => {
								const T = this.C;
								return {
									onSaveError(P, k) {
										T.error(
											(0, t.localize)(12676, null, k.name, (0, i.$xj)(P, !1)),
										);
									},
								};
							})()),
							(this.O = new Map()),
							(this.$ = this.D(this.y.createInstance(c.$q4c))),
							this.H();
					}
					H() {
						this.D(this.z.onDidFilesChange((y) => this.I(y))),
							this.D(
								this.z.onDidChangeFileSystemProviderCapabilities((y) =>
									this.J(y),
								),
							),
							this.D(
								this.z.onDidChangeFileSystemProviderRegistrations((y) =>
									this.L(y),
								),
							),
							this.D(
								this.F.onWillRunWorkingCopyFileOperation((y) => this.P(y)),
							),
							this.D(
								this.F.onDidFailWorkingCopyFileOperation((y) => this.Q(y)),
							),
							this.D(this.F.onDidRunWorkingCopyFileOperation((y) => this.R(y)));
					}
					I(y) {
						for (const $ of this.models)
							$.isDirty() ||
								(y.contains(
									$.resource,
									u.FileChangeType.UPDATED,
									u.FileChangeType.ADDED,
								) &&
									this.N($));
					}
					J(y) {
						this.M(y.scheme);
					}
					L(y) {
						y.added && this.M(y.scheme);
					}
					M(y) {
						for (const $ of this.models)
							$.isDirty() || (y === $.resource.scheme && this.N($));
					}
					N(y) {
						this.w.queueSize(y.resource) <= 1 &&
							this.w.queueFor(y.resource, async () => {
								try {
									await this.U(y);
								} catch (v) {
									(0, h.$4)(v);
								}
							});
					}
					P(y) {
						if (
							y.operation === u.FileOperation.MOVE ||
							y.operation === u.FileOperation.COPY
						) {
							const $ = [];
							for (const { source: v, target: S } of y.files)
								if (v) {
									if (this.G.extUri.isEqual(v, S)) continue;
									const I = [];
									for (const T of this.models)
										this.G.extUri.isEqualOrParent(T.resource, v) && I.push(T);
									for (const T of I) {
										const P = T.resource;
										let k;
										this.G.extUri.isEqual(P, v)
											? (k = S)
											: (k = (0, p.$nh)(S, P.path.substr(v.path.length + 1))),
											$.push({
												source: P,
												target: k,
												languageId: T.getLanguageId(),
												encoding: T.getEncoding(),
												snapshot: T.isDirty() ? T.createSnapshot() : void 0,
											});
									}
								}
							this.O.set(y.correlationId, $);
						}
					}
					Q(y) {
						if (
							y.operation === u.FileOperation.MOVE ||
							y.operation === u.FileOperation.COPY
						) {
							const $ = this.O.get(y.correlationId);
							$ &&
								(this.O.delete(y.correlationId),
								$.forEach((v) => {
									v.snapshot && this.get(v.source)?.setDirty(!0);
								}));
						}
					}
					R(y) {
						switch (y.operation) {
							case u.FileOperation.CREATE:
								y.waitUntil(
									(async () => {
										for (const { target: $ } of y.files) {
											const v = this.get($);
											v && !v.isDisposed() && (await v.revert());
										}
									})(),
								);
								break;
							case u.FileOperation.MOVE:
							case u.FileOperation.COPY:
								y.waitUntil(
									(async () => {
										const $ = this.O.get(y.correlationId);
										$ &&
											(this.O.delete(y.correlationId),
											await a.Promises.settled(
												$.map(async (v) => {
													const S = this.G.asCanonicalUri(v.target),
														I = await this.resolve(S, {
															reload: { async: !1 },
															contents: v.snapshot
																? (0, o.$9X)(v.snapshot)
																: void 0,
															encoding: v.encoding,
														});
													v.languageId &&
														v.languageId !== f.$0M &&
														I.getLanguageId() === f.$0M &&
														(0, p.$lh)(S) !== f.$$M &&
														I.updateTextEditorModel(void 0, v.languageId);
												}),
											));
									})(),
								);
								break;
						}
					}
					get(y) {
						return this.r.get(y);
					}
					S(y) {
						return this.r.has(y);
					}
					async U(y) {
						await this.X(y.resource),
							!(y.isDirty() || y.isDisposed() || !this.S(y.resource)) &&
								(await this.W(y, { reload: { async: !1 } }));
					}
					async resolve(y, $) {
						const v = this.X(y);
						return v && (await v), this.W(y, $);
					}
					async W(y, $) {
						let v, S;
						E.URI.isUri(y)
							? ((S = y), (v = this.get(S)))
							: ((S = y.resource), (v = y));
						let I,
							T = !1;
						if (v)
							$?.contents
								? (I = v.resolve($))
								: $?.reload
									? $.reload.async
										? ((I = Promise.resolve()),
											(async () => {
												try {
													await v.resolve($);
												} catch (P) {
													(0, h.$4)(P);
												}
											})())
										: (I = v.resolve($))
									: (I = Promise.resolve());
						else {
							T = !0;
							const P = (v = this.y.createInstance(
								C.$xvc,
								S,
								$ ? $.encoding : void 0,
								$ ? $.languageId : void 0,
							));
							(I = v.resolve($)), this.Z(P);
						}
						this.u.set(S, I),
							this.add(S, v),
							T && (this.a.fire(v), v.isDirty() && this.f.fire(v));
						try {
							await I;
						} catch (P) {
							throw (T && v.dispose(), P);
						} finally {
							this.u.delete(S);
						}
						return (
							$?.languageId && v.setLanguageId($.languageId),
							T && v.isDirty() && this.f.fire(v),
							v
						);
					}
					X(y) {
						if (this.u.get(y)) return this.Y(y);
					}
					async Y(y) {
						let $;
						for (; this.u.has(y); ) {
							const v = this.u.get(y);
							if (v === $) return;
							$ = v;
							try {
								await v;
							} catch {}
						}
					}
					Z(y) {
						const $ = new d.$Zc();
						$.add(y.onDidResolve((v) => this.b.fire({ model: y, reason: v }))),
							$.add(y.onDidChangeDirty(() => this.f.fire(y))),
							$.add(y.onDidChangeReadonly(() => this.g.fire(y))),
							$.add(y.onDidChangeOrphaned(() => this.h.fire(y))),
							$.add(y.onDidSaveError(() => this.j.fire(y))),
							$.add(y.onDidSave((v) => this.m.fire({ model: y, ...v }))),
							$.add(y.onDidRevert(() => this.n.fire(y))),
							$.add(y.onDidChangeEncoding(() => this.q.fire(y))),
							this.s.set(y.resource, $);
					}
					add(y, $) {
						if (this.r.get(y) === $) return;
						this.t.get(y)?.dispose(),
							this.r.set(y, $),
							this.t.set(
								y,
								$.onWillDispose(() => this.remove(y)),
							);
					}
					remove(y) {
						const $ = this.r.delete(y),
							v = this.t.get(y);
						v && ((0, d.$Vc)(v), this.t.delete(y));
						const S = this.s.get(y);
						S && ((0, d.$Vc)(S), this.s.delete(y)), $ && this.c.fire(y);
					}
					addSaveParticipant(y) {
						return this.$.addSaveParticipant(y);
					}
					runSaveParticipants(y, $, v, S) {
						return this.$.participate(y, $, v, S);
					}
					canDispose(y) {
						return y.isDisposed() || (!this.u.has(y.resource) && !y.isDirty())
							? !0
							: this.ab(y);
					}
					async ab(y) {
						const $ = this.X(y.resource);
						return $
							? (await $, this.canDispose(y))
							: y.isDirty()
								? (await w.Event.toPromise(y.onDidChangeDirty),
									this.canDispose(y))
								: !0;
					}
					dispose() {
						super.dispose(),
							this.r.clear(),
							this.u.clear(),
							(0, d.$Vc)(this.t.values()),
							this.t.clear(),
							(0, d.$Vc)(this.s.values()),
							this.s.clear();
					}
				};
				(e.$r4c = s),
					(e.$r4c = s =
						Ne(
							[j(0, m.$Li), j(1, u.$ll), j(2, n.$4N), j(3, g.$iZ), j(4, b.$Vl)],
							s,
						));
			},
		),
		define(
			de[3906],
			he([
				1, 0, 4, 85, 44, 52, 22, 3, 54, 78, 631, 1339, 3905, 5, 23, 122, 67, 19,
				57, 76, 125, 172, 170, 702, 65, 165, 336, 68, 25, 842, 408, 61, 34, 33,
				700, 472, 6, 14, 51, 24,
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
			) {
				"use strict";
				var F;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$t4c = e.$s4c = void 0);
				let x = class extends d.$1c {
					static {
						F = this;
					}
					static {
						this.a = w.$p1.registerSource(
							"textFileCreate.source",
							(0, t.localize)(12660, null),
						);
					}
					static {
						this.b = w.$p1.registerSource(
							"textFileOverwrite.source",
							(0, t.localize)(12661, null),
						);
					}
					constructor(
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
						re,
						le,
						oe,
					) {
						super(),
							(this.f = V),
							(this.g = G),
							(this.h = K),
							(this.j = J),
							(this.m = W),
							(this.n = X),
							(this.q = Y),
							(this.r = ie),
							(this.s = ne),
							(this.t = ee),
							(this.u = _),
							(this.w = te),
							(this.z = Q),
							(this.C = Z),
							(this.F = se),
							(this.G = re),
							(this.H = le),
							(this.I = oe),
							(this.files = this.D(this.j.createInstance(h.$r4c))),
							(this.untitled = this.g),
							this.J();
					}
					J() {
						const V = this.D(
							new (class extends d.$1c {
								constructor(G) {
									super(),
										(this.b = G),
										(this.label = (0, t.localize)(12662, null)),
										(this.a = this.D(new O.$re())),
										(this.onDidChange = this.a.event),
										this.c();
								}
								c() {
									this.D(
										this.b.onDidResolve(({ model: G }) => {
											(G.isReadonly() ||
												G.hasState(i.TextFileEditorModelState.ORPHAN)) &&
												this.a.fire([G.resource]);
										}),
									),
										this.D(this.b.onDidRemove((G) => this.a.fire([G]))),
										this.D(
											this.b.onDidChangeReadonly((G) =>
												this.a.fire([G.resource]),
											),
										),
										this.D(
											this.b.onDidChangeOrphaned((G) =>
												this.a.fire([G.resource]),
											),
										);
								}
								provideDecorations(G) {
									const K = this.b.get(G);
									if (!K || K.isDisposed()) return;
									const J = K.isReadonly(),
										W = K.hasState(i.TextFileEditorModelState.ORPHAN);
									if (J && W)
										return {
											color: U.$TS,
											letter: B.$ak.lockSmall,
											strikethrough: !0,
											tooltip: (0, t.localize)(12663, null),
										};
									if (J)
										return {
											letter: B.$ak.lockSmall,
											tooltip: (0, t.localize)(12664, null),
										};
									if (W)
										return {
											color: U.$TS,
											strikethrough: !0,
											tooltip: (0, t.localize)(12665, null),
										};
								}
							})(this.files),
						);
						this.D(this.I.registerDecorationsProvider(V));
					}
					get encoding() {
						return (
							this.L || (this.L = this.D(this.j.createInstance(H))), this.L
						);
					}
					async read(V, G) {
						const [K, J] = await this.M(V, { ...G, preferUnbuffered: !0 });
						return {
							...K,
							encoding: J.detected.encoding || k.$NY,
							value: await (0, L.$Ke)(J.stream, (W) => W.join("")),
						};
					}
					async readStream(V, G) {
						const [K, J] = await this.M(V, G);
						return {
							...K,
							encoding: J.detected.encoding || k.$NY,
							value: await (0, g.$8X)(J.stream),
						};
					}
					async M(V, G) {
						const K = new N.$Ce();
						let J;
						if (G?.preferUnbuffered) {
							const W = await this.f.readFile(V, G, K.token);
							J = { ...W, value: (0, b.$8e)(W.value) };
						} else J = await this.f.readFileStream(V, G, K.token);
						try {
							const W = await this.N(V, J.value, G);
							return [J, W];
						} catch (W) {
							throw (
								(K.dispose(!0),
								W.decodeStreamErrorKind ===
								k.DecodeStreamErrorKind.STREAM_IS_BINARY
									? new i.$lZ(
											(0, t.localize)(12666, null),
											i.TextFileOperationResult.FILE_IS_BINARY,
											G,
										)
									: W)
							);
						}
					}
					async create(V, G) {
						const K = await Promise.all(
							V.map(async (J) => {
								const W = await this.getEncodedReadable(J.resource, J.value);
								return {
									resource: J.resource,
									contents: W,
									overwrite: J.options?.overwrite,
								};
							}),
						);
						return this.z.create(K, N.CancellationToken.None, G);
					}
					async write(V, G, K) {
						const J = await this.getEncodedReadable(V, G, K);
						return K?.writeElevated && this.H.isSupported(V)
							? this.H.writeFileElevated(V, J, K)
							: this.f.writeFile(V, J, K);
					}
					async getEncodedReadable(V, G, K) {
						const { encoding: J, addBOM: W } =
							await this.encoding.getWriteEncoding(V, K);
						if (J === k.$NY && !W)
							return typeof G > "u" ? void 0 : (0, i.$pZ)(G);
						G = G || "";
						const X = typeof G == "string" ? (0, i.$oZ)(G) : G;
						return (0, k.$XY)(X, J, { addBOM: W });
					}
					async getDecodedStream(V, G, K) {
						return (await this.N(V, G, K)).stream;
					}
					N(V, G, K) {
						return (0, k.$WY)(G, {
							acceptTextOnly: K?.acceptTextOnly ?? !1,
							guessEncoding:
								K?.autoGuessEncoding ||
								this.s.getValue(V, "files.autoGuessEncoding"),
							candidateGuessEncodings:
								K?.candidateGuessEncodings ||
								this.s.getValue(V, "files.candidateGuessEncodings"),
							overwriteEncoding: async (J) => {
								const { encoding: W } =
									await this.encoding.getPreferredReadEncoding(
										V,
										K,
										J ?? void 0,
									);
								return W;
							},
						});
					}
					async save(V, G) {
						if (V.scheme === n.Schemas.untitled) {
							const K = this.untitled.get(V);
							if (K) {
								let J;
								if (
									(K.hasAssociatedFilePath
										? (J = await this.S(V))
										: (J = await this.r.pickFileToSave(
												await this.S(V),
												G?.availableFileSystems,
											)),
									J)
								)
									return this.saveAs(V, J, G);
							}
						} else {
							const K = this.files.get(V);
							if (K) return (await K.save(G)) ? V : void 0;
						}
					}
					async saveAs(V, G, K) {
						if (
							(G ||
								(G = await this.r.pickFileToSave(
									await this.S(K?.suggestedTarget ?? V),
									K?.availableFileSystems,
								)),
							!!G)
						) {
							if (this.t.isReadonly(G))
								if (await this.R(G)) this.t.updateReadonly(G, !1);
								else return;
							return (0, o.$gh)(V, G)
								? this.save(V, { ...K, force: !0 })
								: this.f.hasProvider(V) &&
										this.C.extUri.isEqual(V, G) &&
										(await this.f.exists(V))
									? (await this.z.move(
											[{ file: { source: V, target: G } }],
											N.CancellationToken.None,
										),
										(await this.save(V, K)) || (await this.save(G, K)),
										G)
									: this.O(V, G, K);
						}
					}
					async O(V, G, K) {
						let J = !1;
						const W = this.files.get(V);
						if (W?.isResolved()) J = await this.P(W, V, G, K);
						else if (this.f.hasProvider(V))
							await this.f.copy(V, G, !0), (J = !0);
						else {
							const X = this.m.getModel(V);
							X && (J = await this.P(X, V, G, K));
						}
						if (J) {
							try {
								await this.revert(V);
							} catch (X) {
								this.G.error(X);
							}
							return G;
						}
					}
					async P(V, G, K, J) {
						let W;
						const X = V;
						typeof X.getEncoding == "function" && (W = X.getEncoding());
						let Y = !1,
							ie = this.files.get(K);
						if (ie?.isResolved()) Y = !0;
						else {
							(Y = await this.f.exists(K)),
								Y || (await this.create([{ resource: K, value: "" }]));
							try {
								ie = await this.files.resolve(K, { encoding: W });
							} catch (te) {
								if (
									Y &&
									(te.textFileOperationResult ===
										i.TextFileOperationResult.FILE_IS_BINARY ||
										te.fileOperationResult ===
											C.FileOperationResult.FILE_TOO_LARGE)
								)
									return await this.f.del(K), this.P(V, G, K, J);
								throw te;
							}
						}
						let ne;
						if (
							(V instanceof a.$6Y &&
							V.hasAssociatedFilePath &&
							Y &&
							this.C.extUri.isEqual(
								K,
								(0, o.$xh)(
									V.resource,
									this.n.remoteAuthority,
									this.w.defaultUriScheme,
								),
							)
								? (ne = await this.Q(K))
								: (ne = !0),
							!ne)
						)
							return !1;
						let ee;
						V instanceof $.$VO
							? V.isResolved() && (ee = V.textEditorModel ?? void 0)
							: (ee = V);
						let _;
						if ((ie.isResolved() && (_ = ie.textEditorModel), ee && _)) {
							ie.updatePreferredEncoding(W),
								this.m.updateModel(_, (0, g.$9X)(ee.createSnapshot()));
							const te = ee.getLanguageId(),
								Q = _.getLanguageId();
							te !== l.$0M && Q === l.$0M && _.setLanguage(te);
							const Z = this.u.getTransientModelProperties(ee);
							if (Z)
								for (const [se, re] of Z)
									this.u.setTransientModelProperty(_, se, re);
						}
						return (
							J?.source || (J = { ...J, source: Y ? F.b : F.a }),
							ie.save({ ...J, from: G })
						);
					}
					async Q(V) {
						const { confirmed: G } = await this.q.confirm({
							type: "warning",
							message: (0, t.localize)(12667, null, (0, o.$kh)(V)),
							detail: (0, t.localize)(
								12668,
								null,
								(0, o.$kh)(V),
								(0, o.$kh)((0, o.$mh)(V)),
							),
							primaryButton: (0, t.localize)(12669, null),
						});
						return G;
					}
					async R(V) {
						const { confirmed: G } = await this.q.confirm({
							type: "warning",
							message: (0, t.localize)(12670, null, (0, o.$kh)(V)),
							detail: (0, t.localize)(12671, null),
							primaryButton: (0, t.localize)(12672, null),
						});
						return G;
					}
					async S(V) {
						if (this.f.hasProvider(V)) return V;
						const G = this.n.remoteAuthority,
							K = await this.r.defaultFilePath();
						let J;
						if (V.scheme === n.Schemas.untitled) {
							const W = this.untitled.get(V);
							if (W) {
								if (W.hasAssociatedFilePath)
									return (0, o.$xh)(V, G, this.w.defaultUriScheme);
								let X;
								(await this.w.hasValidBasename((0, o.$nh)(K, W.name), W.name))
									? (X = W.name)
									: (X = (0, o.$kh)(V));
								const Y = W.getLanguageId();
								Y && Y !== l.$0M ? (J = this.suggestFilename(Y, X)) : (J = X);
							}
						}
						return J || (J = (0, o.$kh)(V)), (0, o.$nh)(K, J);
					}
					suggestFilename(V, G) {
						if (!this.F.getLanguageName(V)) return G;
						const J = (0, m.$tc)(G),
							W = this.F.getExtensions(V);
						if (W.includes(J)) return G;
						const X = (0, z.$Sb)(W);
						if (X)
							return J ? `${G.substring(0, G.indexOf(J))}${X}` : `${G}${X}`;
						const Y = this.F.getFilenames(V);
						return Y.includes(G) ? G : ((0, z.$Sb)(Y) ?? G);
					}
					async revert(V, G) {
						if (V.scheme === n.Schemas.untitled) {
							const K = this.untitled.get(V);
							if (K) return K.revert(G);
						} else {
							const K = this.files.get(V);
							if (K && (K.isDirty() || G?.force)) return K.revert(G);
						}
					}
					isDirty(V) {
						const G =
							V.scheme === n.Schemas.untitled
								? this.untitled.get(V)
								: this.files.get(V);
						return G ? G.isDirty() : !1;
					}
				};
				(e.$s4c = x),
					(e.$s4c =
						x =
						F =
							Ne(
								[
									j(0, C.$ll),
									j(1, u.$7Y),
									j(2, E.$n6),
									j(3, c.$Li),
									j(4, p.$QO),
									j(5, r.$r8),
									j(6, f.$GO),
									j(7, f.$IO),
									j(8, s.$XO),
									j(9, y.$_Y),
									j(10, v.$dtb),
									j(11, S.$I8),
									j(12, I.$iZ),
									j(13, T.$Vl),
									j(14, D.$nM),
									j(15, M.$ik),
									j(16, A.$dZ),
									j(17, R.$sPb),
								],
								x,
							));
				let H = class extends d.$1c {
					get b() {
						return this.a;
					}
					set b(V) {
						this.a = V;
					}
					constructor(V, G, K, J) {
						super(),
							(this.f = V),
							(this.g = G),
							(this.h = K),
							(this.j = J),
							(this.a = this.n()),
							this.m();
					}
					m() {
						this.D(
							this.h.onDidChangeWorkspaceFolders(() => (this.b = this.n())),
						);
					}
					n() {
						const V = [];
						return (
							V.push({ parent: this.g.userRoamingDataHome, encoding: k.$NY }),
							V.push({ extension: P.$9i, encoding: k.$NY }),
							V.push({
								parent: this.g.untitledWorkspacesHome,
								encoding: k.$NY,
							}),
							this.h.getWorkspace().folders.forEach((G) => {
								V.push({
									parent: (0, o.$nh)(G.uri, ".vscode"),
									encoding: k.$NY,
								});
							}),
							V
						);
					}
					async getWriteEncoding(V, G) {
						const { encoding: K, hasBOM: J } =
							await this.getPreferredWriteEncoding(V, G ? G.encoding : void 0);
						return { encoding: K, addBOM: J };
					}
					async getPreferredWriteEncoding(V, G) {
						const K = await this.q(V, G);
						return {
							encoding: K,
							hasBOM: K === k.$PY || K === k.$QY || K === k.$OY,
						};
					}
					async getPreferredReadEncoding(V, G, K) {
						let J;
						G?.encoding
							? K === k.$OY && G.encoding === k.$NY
								? (J = k.$OY)
								: (J = G.encoding)
							: typeof K == "string"
								? (J = K)
								: this.f.getValue(V, "files.encoding") === k.$OY && (J = k.$NY);
						const W = await this.q(V, J);
						return {
							encoding: W,
							hasBOM: W === k.$PY || W === k.$QY || W === k.$OY,
						};
					}
					async q(V, G) {
						let K;
						const J = this.r(V);
						return (
							J
								? (K = J)
								: G
									? (K = G)
									: (K = this.f.getValue(V, "files.encoding")),
							K !== k.$NY && (!K || !(await (0, k.$YY)(K))) && (K = k.$NY),
							K
						);
					}
					r(V) {
						if (this.b?.length) {
							for (const G of this.b)
								if (
									(G.parent && this.j.extUri.isEqualOrParent(V, G.parent)) ||
									(G.extension && (0, o.$lh)(V) === `.${G.extension}`)
								)
									return G.encoding;
						}
					}
				};
				(e.$t4c = H),
					(e.$t4c = H =
						Ne([j(0, s.$XO), j(1, r.$r8), j(2, P.$Vi), j(3, T.$Vl)], H));
			},
		),
		define(
			de[3907],
			he([
				1, 0, 4, 3906, 85, 20, 22, 125, 631, 52, 5, 67, 151, 57, 170, 65, 165,
				336, 68, 61, 700, 34, 15, 472,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$odd = void 0);
				let v = class extends i.$s4c {
					constructor(I, T, P, k, L, D, M, N, A, R, O, B, U, z, F, x, H, q) {
						super(I, T, P, k, L, D, M, N, A, R, O, B, U, z, F, H, x, q),
							(this.n = D),
							this.U();
					}
					U() {
						this.D(
							this.h.onWillShutdown((I) =>
								I.join(this.W(), {
									id: "join.textFiles",
									label: (0, t.localize)(12677, null),
								}),
							),
						);
					}
					async W() {
						let I;
						for (
							;
							(I = this.files.models.filter((T) =>
								T.hasState(w.TextFileEditorModelState.PENDING_SAVE),
							)).length > 0;
						)
							await y.Promises.settled(
								I.map((T) =>
									T.joinState(w.TextFileEditorModelState.PENDING_SAVE),
								),
							);
					}
					async read(I, T) {
						return (T = this.X(T)), super.read(I, T);
					}
					async readStream(I, T) {
						return (T = this.X(T)), super.readStream(I, T);
					}
					X(I) {
						let T;
						I ? (T = I) : (T = Object.create(null));
						let P;
						return (
							T.limits
								? (P = T.limits)
								: ((P = Object.create(null)), (T = { ...T, limits: P })),
							T
						);
					}
				};
				(e.$odd = v),
					(e.$odd = v =
						Ne(
							[
								j(0, C.$ll),
								j(1, m.$7Y),
								j(2, r.$n6),
								j(3, u.$Li),
								j(4, a.$QO),
								j(5, h.$ucd),
								j(6, c.$GO),
								j(7, c.$IO),
								j(8, d.$XO),
								j(9, n.$_Y),
								j(10, g.$dtb),
								j(11, p.$I8),
								j(12, o.$iZ),
								j(13, f.$Vl),
								j(14, b.$nM),
								j(15, s.$dZ),
								j(16, l.$ik),
								j(17, $.$sPb),
							],
							v,
						)),
					(0, E.$lK)(w.$kZ, v, E.InstantiationType.Eager);
			},
		),
		define(
			de[1052],
			he([
				1, 0, 4, 6, 33, 22, 44, 227, 334, 15, 34, 28, 336, 170, 335, 40, 136,
				163, 50, 12, 403, 18, 700, 1910, 848, 84,
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
					(e.$gZ = e.StoredFileWorkingCopyState = void 0),
					(e.$fZ = P);
				var T;
				(function (L) {
					(L[(L.SAVED = 0)] = "SAVED"),
						(L[(L.DIRTY = 1)] = "DIRTY"),
						(L[(L.PENDING_SAVE = 2)] = "PENDING_SAVE"),
						(L[(L.CONFLICT = 3)] = "CONFLICT"),
						(L[(L.ORPHAN = 4)] = "ORPHAN"),
						(L[(L.ERROR = 5)] = "ERROR");
				})(T || (e.StoredFileWorkingCopyState = T = {}));
				function P(L) {
					return !!L.stat;
				}
				let k = class extends $.$eZ {
					static {
						I = this;
					}
					get model() {
						return this.j;
					}
					constructor(D, M, N, A, R, O, B, U, z, F, x, H, q, V, G, K) {
						super(M, O),
							(this.typeId = D),
							(this.name = N),
							(this.w = A),
							(this.y = R),
							(this.z = B),
							(this.C = U),
							(this.F = z),
							(this.G = F),
							(this.H = H),
							(this.I = q),
							(this.J = V),
							(this.L = G),
							(this.N = K),
							(this.capabilities = m.WorkingCopyCapabilities.None),
							(this.j = void 0),
							(this.m = this.D(new i.$re())),
							(this.onDidChangeContent = this.m.event),
							(this.n = this.D(new i.$re())),
							(this.onDidResolve = this.n.event),
							(this.q = this.D(new i.$re())),
							(this.onDidChangeDirty = this.q.event),
							(this.r = this.D(new i.$re())),
							(this.onDidSaveError = this.r.event),
							(this.s = this.D(new i.$re())),
							(this.onDidSave = this.s.event),
							(this.t = this.D(new i.$re())),
							(this.onDidRevert = this.t.event),
							(this.u = this.D(new i.$re())),
							(this.onDidChangeReadonly = this.u.event),
							(this.P = !1),
							(this.bb = !1),
							(this.gb = 0),
							(this.ib = void 0),
							(this.jb = new r.$8h()),
							(this.kb = !1),
							(this.rb = !1),
							(this.sb = !1),
							this.D(x.registerWorkingCopy(this)),
							this.O();
					}
					O() {
						this.D(this.F.onDidChangeReadonly(() => this.u.fire()));
					}
					isDirty() {
						return this.P;
					}
					markModified() {
						this.R(!0);
					}
					R(D) {
						if (!this.isResolved()) return;
						const M = this.P;
						this.S(D), D !== M && this.q.fire();
					}
					S(D) {
						const M = this.P,
							N = this.rb,
							A = this.sb,
							R = this.Q;
						return (
							D
								? (this.P = !0)
								: ((this.P = !1),
									(this.rb = !1),
									(this.sb = !1),
									this.isResolved() && (this.Q = this.model.versionId)),
							() => {
								(this.P = M), (this.rb = N), (this.sb = A), (this.Q = R);
							}
						);
					}
					isResolved() {
						return !!this.model;
					}
					async resolve(D) {
						if ((this.tb("resolve() - enter"), this.isDisposed())) {
							this.tb(
								"resolve() - exit - without resolving because file working copy is disposed",
							);
							return;
						}
						if (!D?.contents && (this.P || this.jb.isRunning())) {
							this.tb(
								"resolve() - exit - without resolving because file working copy is dirty or being saved",
							);
							return;
						}
						return this.U(D);
					}
					async U(D) {
						if (D?.contents) return this.W(D.contents);
						if (!(!this.isResolved() && (await this.X()))) return this.Z(D);
					}
					async W(D) {
						this.tb("resolveFromBuffer()");
						let M, N, A, R;
						try {
							const O = await this.a.stat(this.resource);
							(M = O.mtime),
								(N = O.ctime),
								(A = O.size),
								(R = O.etag),
								this.g(!1);
						} catch (O) {
							(M = Date.now()),
								(N = Date.now()),
								(A = 0),
								(R = E.$Ql),
								this.g(
									O.fileOperationResult ===
										E.FileOperationResult.FILE_NOT_FOUND,
								);
						}
						return this.$(
							{
								resource: this.resource,
								name: this.name,
								mtime: M,
								ctime: N,
								size: A,
								etag: R,
								value: D,
								readonly: !1,
								locked: !1,
							},
							!0,
						);
					}
					async X() {
						const D = await this.G.resolve(this);
						return this.isResolved()
							? (this.tb(
									"resolveFromBackup() - exit - withoutresolving because previously new file working copy got created meanwhile",
								),
								!0)
							: D
								? (await this.Y(D), !0)
								: !1;
					}
					async Y(D) {
						this.tb("doResolveFromBackup()"),
							await this.$(
								{
									resource: this.resource,
									name: this.name,
									mtime: D.meta ? D.meta.mtime : Date.now(),
									ctime: D.meta ? D.meta.ctime : Date.now(),
									size: D.meta ? D.meta.size : 0,
									etag: D.meta ? D.meta.etag : E.$Ql,
									value: D.value,
									readonly: !1,
									locked: !1,
								},
								!0,
							),
							D.meta && D.meta.orphaned && this.g(!0);
					}
					async Z(D) {
						this.tb("resolveFromFile()");
						const M = D?.forceReadFromFile;
						let N;
						M
							? (N = E.$Ql)
							: this.lastResolvedFileStat &&
								(N = this.lastResolvedFileStat.etag);
						const A = this.gb;
						try {
							const R = await this.a.readFileStream(this.resource, {
								etag: N,
								limits: D?.limits,
							});
							if ((this.g(!1), A !== this.gb)) {
								this.tb(
									"resolveFromFile() - exit - without resolving because file working copy content changed",
								);
								return;
							}
							await this.$(R, !1);
						} catch (R) {
							const O = R.fileOperationResult;
							if (
								(this.g(O === E.FileOperationResult.FILE_NOT_FOUND),
								this.isResolved() &&
									O === E.FileOperationResult.FILE_NOT_MODIFIED_SINCE)
							) {
								R instanceof E.$Il && this.qb(R.stat);
								return;
							}
							if (
								this.isResolved() &&
								O === E.FileOperationResult.FILE_NOT_FOUND &&
								!M
							)
								return;
							throw R;
						}
					}
					async $(D, M) {
						if ((this.tb("resolveFromContent() - enter"), this.isDisposed())) {
							this.tb(
								"resolveFromContent() - exit - because working copy is disposed",
							);
							return;
						}
						this.qb({
							resource: this.resource,
							name: D.name,
							mtime: D.mtime,
							ctime: D.ctime,
							size: D.size,
							etag: D.etag,
							readonly: D.readonly,
							locked: D.locked,
							isFile: !0,
							isDirectory: !1,
							isSymbolicLink: !1,
							children: void 0,
						}),
							this.isResolved()
								? await this.cb(D.value)
								: await this.ab(D.value),
							this.R(!!M),
							this.n.fire();
					}
					async ab(D) {
						this.tb("doCreateModel()"),
							(this.j = this.D(
								await this.w.createModel(
									this.resource,
									D,
									w.CancellationToken.None,
								),
							)),
							this.db(this.j);
					}
					async cb(D) {
						this.tb("doUpdateModel()"), (this.bb = !0);
						try {
							await this.model?.update(D, w.CancellationToken.None);
						} finally {
							this.bb = !1;
						}
					}
					db(D) {
						this.D(
							D.onDidChangeContent((M) =>
								this.eb(D, M.isUndoing || M.isRedoing),
							),
						),
							this.D(D.onWillDispose(() => this.dispose()));
					}
					eb(D, M) {
						if (
							(this.tb("onModelContentChanged() - enter"),
							this.gb++,
							this.tb(`onModelContentChanged() - new versionId ${this.gb}`),
							M && (this.ib = Date.now()),
							!this.bb && !this.isReadonly())
						)
							if (D.versionId === this.Q) {
								this.tb(
									"onModelContentChanged() - model content changed back to last saved version",
								);
								const N = this.P;
								this.R(!1), N && this.t.fire();
							} else
								this.tb(
									"onModelContentChanged() - model content changed and marked as dirty",
								),
									this.R(!0);
						this.m.fire();
					}
					async fb() {
						this.isDisposed() || (await this.y({ forceReadFromFile: !0 }));
					}
					get backupDelay() {
						return this.model?.configuration?.backupDelay;
					}
					async backup(D) {
						let M;
						this.lastResolvedFileStat &&
							(M = {
								mtime: this.lastResolvedFileStat.mtime,
								ctime: this.lastResolvedFileStat.ctime,
								size: this.lastResolvedFileStat.size,
								etag: this.lastResolvedFileStat.etag,
								orphaned: this.isOrphaned(),
							});
						let N;
						return (
							this.isResolved() &&
								(N = await (0, r.$Ah)(
									this.model.snapshot(v.SnapshotContext.Backup, D),
									D,
								)),
							{ meta: M, content: N }
						);
					}
					static {
						this.hb = 500;
					}
					async save(D = Object.create(null)) {
						return this.isResolved()
							? this.isReadonly()
								? (this.tb("save() - ignoring request for readonly resource"),
									!1)
								: (this.hasState(T.CONFLICT) || this.hasState(T.ERROR)) &&
										(D.reason === C.SaveReason.AUTO ||
											D.reason === C.SaveReason.FOCUS_CHANGE ||
											D.reason === C.SaveReason.WINDOW_CHANGE)
									? (this.tb(
											"save() - ignoring auto save request for file working copy that is in conflict or error",
										),
										!1)
									: (this.tb("save() - enter"),
										await this.lb(D),
										this.tb("save() - exit"),
										this.hasState(T.SAVED))
							: !1;
					}
					async lb(D) {
						typeof D.reason != "number" && (D.reason = C.SaveReason.EXPLICIT);
						const M = this.gb;
						if (
							(this.tb(`doSave(${M}) - enter with versionId ${M}`), this.kb)
						) {
							this.tb(
								`doSave(${M}) - exit - refusing to save() recursively from save participant`,
							);
							return;
						}
						if (this.jb.isRunning(M))
							return (
								this.tb(
									`doSave(${M}) - exit - found a running save for versionId ${M}`,
								),
								this.jb.running
							);
						if (!D.force && !this.P) {
							this.tb(
								`doSave(${M}) - exit - because not dirty and/or versionId is different (this.isDirty: ${this.P}, this.versionId: ${this.gb})`,
							);
							return;
						}
						if (this.jb.isRunning())
							return (
								this.tb(`doSave(${M}) - exit - because busy saving`),
								this.jb.cancelRunning(),
								this.jb.queue(() => this.lb(D))
							);
						this.isResolved() && this.model.pushStackElement();
						const N = new w.$Ce();
						return this.N.withProgress(
							{
								title: (0, t.localize)(13129, null, this.name),
								location: S.ProgressLocation.Window,
								cancellable: !0,
								delay: this.isDirty() ? 3e3 : 5e3,
							},
							(A) => this.mb(M, D, A, N),
							() => {
								N.cancel();
							},
						).finally(() => {
							N.dispose();
						});
					}
					mb(D, M, N, A) {
						return this.jb.run(
							D,
							(async () => {
								if (
									this.isResolved() &&
									!M.skipSaveParticipants &&
									this.C.hasSaveParticipants
								)
									try {
										if (
											M.reason === C.SaveReason.AUTO &&
											typeof this.ib == "number"
										) {
											const B = Date.now() - this.ib;
											B < I.hb && (await (0, r.$Nh)(I.hb - B));
										}
										if (!A.token.isCancellationRequested) {
											this.kb = !0;
											try {
												await this.C.runSaveParticipants(
													this,
													{
														reason: M.reason ?? C.SaveReason.EXPLICIT,
														savedFrom: M.from,
													},
													N,
													A.token,
												);
											} finally {
												this.kb = !1;
											}
										}
									} catch (B) {
										this.z.error(
											`[stored file working copy] runSaveParticipants(${D}) - resulted in an error: ${B.toString()}`,
											this.resource.toString(),
											this.typeId,
										);
									}
								if (
									A.token.isCancellationRequested ||
									this.isDisposed() ||
									!this.isResolved()
								)
									return;
								(D = this.gb),
									(this.sb = !1),
									N.report({ message: (0, t.localize)(13130, null) }),
									this.tb(`doSave(${D}) - before write()`);
								const R = (0, a.$wg)(this.lastResolvedFileStat),
									O = this;
								return this.jb.run(
									D,
									(async () => {
										try {
											const B = {
												mtime: R.mtime,
												etag:
													M.ignoreModifiedSince ||
													!this.F.preventSaveConflicts(R.resource)
														? E.$Ql
														: R.etag,
												unlock: M.writeUnlock,
											};
											let U;
											if (typeof O.model.save == "function")
												try {
													U = await O.model.save(B, A.token);
												} catch (z) {
													if (A.token.isCancellationRequested) return;
													throw z;
												}
											else {
												const z = await (0, r.$Ah)(
													O.model.snapshot(v.SnapshotContext.Save, A.token),
													A.token,
												);
												if (A.token.isCancellationRequested) return;
												A.dispose(),
													M?.writeElevated && this.L.isSupported(R.resource)
														? (U = await this.L.writeFileElevated(
																R.resource,
																(0, a.$wg)(z),
																B,
															))
														: (U = await this.a.writeFile(
																R.resource,
																(0, a.$wg)(z),
																B,
															));
											}
											this.nb(U, D, M);
										} catch (B) {
											this.ob(B, D, M);
										}
									})(),
									() => A.cancel(),
								);
							})(),
							() => A.cancel(),
						);
					}
					nb(D, M, N) {
						this.qb(D),
							M === this.gb
								? (this.tb(
										`handleSaveSuccess(${M}) - setting dirty to false because versionId did not change`,
									),
									this.R(!1))
								: this.tb(
										`handleSaveSuccess(${M}) - not setting dirty to false because versionId did change meanwhile`,
									),
							this.g(!1),
							this.s.fire({ reason: N.reason, stat: D, source: N.source });
					}
					ob(D, M, N) {
						if (
							((N.ignoreErrorHandler ? this.z.trace : this.z.error).apply(
								this.z,
								[
									`[stored file working copy] handleSaveError(${M}) - exit - resulted in a save error: ${D.toString()}`,
									this.resource.toString(),
									this.typeId,
								],
							),
							N.ignoreErrorHandler)
						)
							throw D;
						this.R(!0),
							(this.sb = !0),
							D.fileOperationResult ===
								E.FileOperationResult.FILE_MODIFIED_SINCE && (this.rb = !0),
							this.pb(D, N),
							this.r.fire();
					}
					pb(D, M) {
						const N = D,
							A = [];
						let R;
						if (
							N.fileOperationResult ===
							E.FileOperationResult.FILE_MODIFIED_SINCE
						)
							(R = (0, t.localize)(13131, null, this.name)),
								A.push(
									(0, f.$wj)({
										id: "fileWorkingCopy.overwrite",
										label: (0, t.localize)(13132, null),
										run: () =>
											this.save({
												...M,
												ignoreModifiedSince: !0,
												reason: C.SaveReason.EXPLICIT,
											}),
									}),
								),
								A.push(
									(0, f.$wj)({
										id: "fileWorkingCopy.revert",
										label: (0, t.localize)(13133, null),
										run: () => this.revert(),
									}),
								);
						else {
							const U =
									N.fileOperationResult ===
									E.FileOperationResult.FILE_WRITE_LOCKED,
								z = U && N.options?.unlock,
								F =
									N.fileOperationResult ===
									E.FileOperationResult.FILE_PERMISSION_DENIED,
								x = this.L.isSupported(this.resource);
							(0, o.$yj)(D) && A.push(...D.actions),
								x && (F || z)
									? A.push(
											(0, f.$wj)({
												id: "fileWorkingCopy.saveElevated",
												label: z
													? b.$l
														? (0, t.localize)(13134, null)
														: (0, t.localize)(13135, null)
													: b.$l
														? (0, t.localize)(13136, null)
														: (0, t.localize)(13137, null),
												run: () => {
													this.save({
														...M,
														writeElevated: !0,
														writeUnlock: z,
														reason: C.SaveReason.EXPLICIT,
													});
												},
											}),
										)
									: U
										? A.push(
												(0, f.$wj)({
													id: "fileWorkingCopy.unlock",
													label: (0, t.localize)(13138, null),
													run: () =>
														this.save({
															...M,
															writeUnlock: !0,
															reason: C.SaveReason.EXPLICIT,
														}),
												}),
											)
										: A.push(
												(0, f.$wj)({
													id: "fileWorkingCopy.retry",
													label: (0, t.localize)(13139, null),
													run: () =>
														this.save({ ...M, reason: C.SaveReason.EXPLICIT }),
												}),
											),
								A.push(
									(0, f.$wj)({
										id: "fileWorkingCopy.saveAs",
										label: (0, t.localize)(13140, null),
										run: async () => {
											const H = this.I.findEditor(this);
											H &&
												((
													await this.J.save(H, {
														saveAs: !0,
														reason: C.SaveReason.EXPLICIT,
													})
												).success ||
													this.pb(D, M));
										},
									}),
								),
								A.push(
									(0, f.$wj)({
										id: "fileWorkingCopy.revert",
										label: (0, t.localize)(13141, null),
										run: () => this.revert(),
									}),
								),
								U
									? z && x
										? (R = b.$l
												? (0, t.localize)(13142, null, this.name)
												: (0, t.localize)(13143, null, this.name))
										: (R = (0, t.localize)(13144, null, this.name))
									: x && F
										? (R = b.$l
												? (0, t.localize)(13145, null, this.name)
												: (0, t.localize)(13146, null, this.name))
										: (R = (0, t.localize)(
												13147,
												null,
												this.name,
												(0, o.$xj)(D, !1),
											));
						}
						const O = this.H.notify({
								id: `${(0, p.$Aj)(this.resource.toString())}`,
								severity: g.Severity.Error,
								message: R,
								actions: { primary: A },
							}),
							B = this.D(
								i.Event.once(i.Event.any(this.onDidSave, this.onDidRevert))(
									() => O.close(),
								),
							);
						this.D(i.Event.once(O.onDidClose)(() => B.dispose()));
					}
					qb(D) {
						const M = this.isReadonly();
						this.lastResolvedFileStat
							? this.lastResolvedFileStat.mtime <= D.mtime
								? (this.lastResolvedFileStat = D)
								: (this.lastResolvedFileStat = {
										...this.lastResolvedFileStat,
										readonly: D.readonly,
										locked: D.locked,
									})
							: (this.lastResolvedFileStat = D),
							this.isReadonly() !== M && this.u.fire();
					}
					async revert(D) {
						if (!this.isResolved() || (!this.P && !D?.force)) return;
						this.tb("revert()");
						const M = this.P,
							N = this.S(!1);
						if (!D?.soft)
							try {
								await this.fb();
							} catch (R) {
								if (
									R.fileOperationResult !== E.FileOperationResult.FILE_NOT_FOUND
								)
									throw (N(), R);
							}
						this.t.fire(), M && this.q.fire();
					}
					hasState(D) {
						switch (D) {
							case T.CONFLICT:
								return this.rb;
							case T.DIRTY:
								return this.P;
							case T.ERROR:
								return this.sb;
							case T.ORPHAN:
								return this.isOrphaned();
							case T.PENDING_SAVE:
								return this.jb.isRunning();
							case T.SAVED:
								return !this.P;
						}
					}
					async joinState(D) {
						return this.jb.running;
					}
					isReadonly() {
						return this.F.isReadonly(this.resource, this.lastResolvedFileStat);
					}
					tb(D) {
						this.z.trace(
							`[stored file working copy] ${D}`,
							this.resource.toString(),
							this.typeId,
						);
					}
					dispose() {
						this.tb("dispose()"),
							(this.rb = !1),
							(this.sb = !1),
							(this.j = void 0),
							super.dispose();
					}
				};
				(e.$gZ = k),
					(e.$gZ =
						k =
						I =
							Ne(
								[
									j(5, E.$ll),
									j(6, u.$ik),
									j(7, h.$iZ),
									j(8, c.$_Y),
									j(9, n.$WO),
									j(10, d.$gY),
									j(11, g.$4N),
									j(12, s.$bZ),
									j(13, l.$IY),
									j(14, y.$dZ),
									j(15, S.$8N),
								],
								k,
							));
			},
		),
		define(
			de[1343],
			he([
				1, 0, 76, 29, 6, 3, 23, 82, 28, 10, 32, 416, 70, 557, 161, 170, 848,
				1052, 334,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				var b;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ppc = e.$Opc = e.$Npc = void 0);
				let s = (b = class extends a.$PO {
					constructor(v, S, I, T, P, k) {
						super(),
							(this.resource = v),
							(this.r = S),
							(this.viewType = I),
							(this.s = T),
							(this.t = k),
							(this.a = this.D(new w.$re())),
							(this.b = this.D(new w.$re())),
							(this.c = this.D(new w.$re())),
							(this.g = this.D(new w.$re())),
							(this.j = this.D(new w.$re())),
							(this.onDidChangeDirty = this.a.event),
							(this.onDidSave = this.b.event),
							(this.onDidChangeOrphaned = this.c.event),
							(this.onDidChangeReadonly = this.g.event),
							(this.onDidRevertUntitled = this.j.event),
							(this.n = this.D(new E.$Zc())),
							(this.q = P);
					}
					dispose() {
						this.m?.dispose(), super.dispose();
					}
					get notebook() {
						return this.m?.model?.notebookModel;
					}
					isResolved() {
						return !!this.m?.model?.notebookModel;
					}
					async canDispose() {
						return this.m && b.u(this.m)
							? this.s.stored.canDispose(this.m)
							: !0;
					}
					isDirty() {
						return this.m?.isDirty() ?? !1;
					}
					isModified() {
						return this.m?.isModified() ?? !1;
					}
					isOrphaned() {
						return (
							b.u(this.m) &&
							this.m.hasState(o.StoredFileWorkingCopyState.ORPHAN)
						);
					}
					hasAssociatedFilePath() {
						return !b.u(this.m) && !!this.m?.hasAssociatedFilePath;
					}
					isReadonly() {
						return b.u(this.m)
							? this.m?.isReadonly()
							: this.t.isReadonly(this.resource);
					}
					get hasErrorState() {
						return this.m && "hasState" in this.m
							? this.m.hasState(o.StoredFileWorkingCopyState.ERROR)
							: !1;
					}
					revert(v) {
						return (0, m.$vg)(this.isResolved()), this.m.revert(v);
					}
					save(v) {
						return (0, m.$vg)(this.isResolved()), this.m.save(v);
					}
					async load(v) {
						return (
							!this.m || !this.m.model
								? (this.resource.scheme === C.Schemas.untitled
										? (this.r
												? (this.m = await this.s.resolve({
														associatedResource: this.resource,
													}))
												: (this.m = await this.s.resolve({
														untitledResource: this.resource,
														isScratchpad: this.q,
													})),
											this.m.onDidRevert(() => this.j.fire()))
										: ((this.m = await this.s.resolve(this.resource, {
												limits: v?.limits,
												reload: v?.forceReadFromFile
													? { async: !1, force: !0 }
													: void 0,
											})),
											this.n.add(this.m.onDidSave((S) => this.b.fire(S))),
											this.n.add(
												this.m.onDidChangeOrphaned(() => this.c.fire()),
											),
											this.n.add(
												this.m.onDidChangeReadonly(() => this.g.fire()),
											)),
									this.n.add(
										this.m.onDidChangeDirty(() => this.a.fire(), void 0),
									),
									this.n.add(
										this.m.onWillDispose(() => {
											this.n.clear(), this.m?.model?.dispose();
										}),
									))
								: await this.s.resolve(this.resource, {
										reload: {
											async: !v?.forceReadFromFile,
											force: v?.forceReadFromFile,
										},
										limits: v?.limits,
									}),
							(0, m.$vg)(this.isResolved()),
							this
						);
					}
					async saveAs(v) {
						const S = await this.s.saveAs(this.resource, v);
						if (S) return { resource: S.resource };
					}
					static u(v) {
						return !(v && v.capabilities & f.WorkingCopyCapabilities.Untitled);
					}
				});
				(e.$Npc = s), (e.$Npc = s = b = Ne([j(5, g.$_Y)], s));
				class l extends E.$1c {
					constructor(v, S, I, T, P) {
						super(),
							(this.b = v),
							(this.c = S),
							(this.f = I),
							(this.g = T),
							(this.h = P),
							(this.a = this.D(new w.$re())),
							(this.onDidChangeContent = this.a.event),
							(this.configuration = void 0),
							(this.onWillDispose = v.onWillDispose.bind(v)),
							this.D(
								v.onDidChangeContent((L) => {
									for (const D of L.rawEvents)
										if (
											D.kind !== h.NotebookCellsChangeType.Initialize &&
											!D.transient
										) {
											this.a.fire({
												isRedoing: !1,
												isUndoing: !1,
												isInitial: !1,
											});
											break;
										}
								}),
							);
						const k = this.f.getValue(h.$56.remoteSaving);
						(k || v.uri.scheme === C.Schemas.vscodeRemote) &&
							(this.configuration = { backupDelay: 1e4 }),
							k && this.j().catch(console.error);
					}
					async j() {
						await this.getNotebookSerializer(),
							(this.save = async (v, S) => {
								try {
									let I = this.c.tryGetDataProviderSync(
										this.notebookModel.viewType,
									)?.serializer;
									if (
										(I ||
											(this.h.info(
												"WorkingCopyModel",
												"No serializer found for notebook model, checking if provider still needs to be resolved",
											),
											(I = await this.getNotebookSerializer())),
										S.isCancellationRequested)
									)
										throw new i.$9();
									return await I.save(this.b.uri, this.b.versionId, v, S);
								} catch (I) {
									throw (
										(S.isCancellationRequested ||
											this.g.publicLogError2("notebook/SaveError", {
												isRemote: this.b.uri.scheme === C.Schemas.vscodeRemote,
												error: I,
											}),
										I)
									);
								}
							});
					}
					dispose() {
						this.b.dispose(), super.dispose();
					}
					get notebookModel() {
						return this.b;
					}
					async snapshot(v, S) {
						const I = await this.getNotebookSerializer(),
							T = {
								metadata: (0, d.$Do)(
									this.b.metadata,
									(L) => !I.options.transientDocumentMetadata[L],
								),
								cells: [],
							};
						let P = 0;
						for (const L of this.b.cells) {
							const D = {
									cellKind: L.cellKind,
									language: L.language,
									mime: L.mime,
									source: L.getValue(),
									outputs: [],
									internalMetadata: L.internalMetadata,
								},
								M = this.f.getValue(h.$56.outputBackupSizeLimit) * 1024;
							if (
								v === p.SnapshotContext.Backup &&
								M > 0 &&
								(L.outputs.forEach((N) => {
									N.outputs.forEach((A) => {
										P += A.data.byteLength;
									});
								}),
								P > M)
							)
								throw new Error("Notebook too large to backup");
							(D.outputs = I.options.transientOutputs ? [] : L.outputs),
								(D.metadata = (0, d.$Do)(
									L.metadata,
									(N) => !I.options.transientCellMetadata[N],
								)),
								T.cells.push(D);
						}
						const k = await I.notebookToData(T);
						if (S.isCancellationRequested) throw new i.$9();
						return (0, t.$8e)(k);
					}
					async update(v, S) {
						const I = await this.getNotebookSerializer(),
							T = await (0, t.$6e)(v),
							P = await I.dataToNotebook(T);
						if (S.isCancellationRequested) throw new i.$9();
						this.h.info(
							"WorkingCopyModel",
							"Notebook content updated from file system - " +
								this.b.uri.toString(),
						),
							this.b.reset(P.cells, P.metadata, I.options);
					}
					async getNotebookSerializer() {
						const v = await this.c.withNotebookDataProvider(
							this.notebookModel.viewType,
						);
						if (!(v instanceof n.$NIb))
							throw new Error("CANNOT open file notebook with this provider");
						return v.serializer;
					}
					get versionId() {
						return this.b.alternativeVersionId;
					}
					pushStackElement() {
						this.b.pushStackElement();
					}
				}
				e.$Opc = l;
				let y = class {
					constructor(v, S, I, T, P) {
						(this.a = v),
							(this.b = S),
							(this.c = I),
							(this.d = T),
							(this.f = P);
					}
					async createModel(v, S, I) {
						const T =
							this.b.getNotebookTextModel(v) ??
							(await this.b.createNotebookTextModel(this.a, v, S));
						return new l(T, this.b, this.c, this.d, this.f);
					}
				};
				(e.$Ppc = y),
					(e.$Ppc = y =
						Ne([j(1, n.$MIb), j(2, r.$gj), j(3, u.$km), j(4, c.$P2b)], y));
			},
		),
		define(
			de[3908],
			he([1, 0, 4, 5, 101, 88, 15, 336, 1343]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Qpc = void 0);
				class r {
					constructor(h) {
						this.a = h.getProxy(E.$mbb.ExtHostNotebookDocumentSaveParticipant);
					}
					async participate(h, c, n, g) {
						if (!h.model || !(h.model instanceof m.$Opc)) return;
						let p;
						const o = new Promise((f, b) => {
							(p = setTimeout(
								() => b(new Error((0, t.localize)(2576, null))),
								1750,
							)),
								this.a
									.$participateInSave(h.resource, c.reason, g)
									.then((s) => {
										clearTimeout(p);
									})
									.then(f, b);
						});
						return (0, C.$Bh)(o, g);
					}
				}
				let u = class {
					constructor(h, c, n) {
						(this.b = n),
							(this.a = this.b.addSaveParticipant(c.createInstance(r, h)));
					}
					dispose() {
						this.a.dispose();
					}
				};
				(e.$Qpc = u), (e.$Qpc = u = Ne([w.$umc, j(1, i.$Li), j(2, d.$iZ)], u));
			},
		),
		define(
			de[1926],
			he([
				1, 0, 318, 3, 19, 199, 1148, 48, 17, 74, 200, 69, 42, 393, 291, 674,
				254, 4, 10, 5, 34, 30, 174, 55, 44, 108, 70, 1343, 18, 52, 39, 336,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$VFc = e.$UFc = void 0);
				let M = class {
					constructor(H, q, V, G, K, J) {
						(this.c = H),
							(this.d = q),
							(this.e = V),
							(this.f = G),
							(this.g = K),
							(this.h = J);
					}
					async participate(H, q, V, G) {
						if (
							!H.model ||
							!(H.model instanceof T.$Opc) ||
							q.reason === v.SaveReason.AUTO ||
							!this.h.getValue(I.$56.formatOnSave)
						)
							return;
						V.report({ message: (0, o.localize)(7811, null) });
						const J = H.model.notebookModel,
							W = await this.e.invokeFunction(
								B.checkAndRunFormatCodeAction,
								J,
								V,
								G,
							),
							X = new i.$Zc();
						try {
							if (!W) {
								const Y = await Promise.all(
									J.cells.map(async (ie) => {
										const ne = await this.f.createModelReference(ie.uri);
										X.add(ne);
										const ee = ne.object.textEditorModel,
											_ = await (0, g.$Rhc)(
												this.c,
												this.d,
												ee,
												g.FormattingMode.Silent,
												G,
											),
											te = [];
										return _
											? (te.push(
													..._.map(
														(Q) => new E.$tzb(ee.uri, Q, ee.getVersionId()),
													),
												),
												te)
											: [];
									}),
								);
								await this.g.apply(Y.flat(), {
									label: (0, o.localize)(7812, null),
									code: "undoredo.formatNotebook",
								});
							}
						} finally {
							V.report({ increment: 100 }), X.dispose();
						}
					}
				};
				M = Ne(
					[
						j(0, u.$Cxb),
						j(1, a.$k3),
						j(2, b.$Li),
						j(3, h.$MO),
						j(4, E.$rzb),
						j(5, f.$gj),
					],
					M,
				);
				let N = class {
					constructor(H, q, V, G) {
						(this.c = H), (this.d = q), (this.e = V), (this.f = G);
					}
					async participate(H, q, V, G) {
						const K = this.c.getValue("files.trimTrailingWhitespace"),
							J = this.c.getValue(
								"files.trimTrailingWhitespaceInRegexAndStrings",
							);
						K && (await this.g(H, q.reason === v.SaveReason.AUTO, J, V));
					}
					async g(H, q, V, G) {
						if (!H.model || !(H.model instanceof T.$Opc)) return;
						const K = new i.$Zc(),
							J = H.model.notebookModel,
							W = U(this.d);
						let X = [],
							Y = [];
						try {
							const ne = (
								await Promise.all(
									J.cells.map(async (ee) => {
										if (ee.cellKind !== I.CellKind.Code) return [];
										const _ = await this.e.createModelReference(ee.uri);
										K.add(_);
										const te = _.object.textEditorModel;
										if (
											W &&
											ee.uri.toString() === W.getModel()?.uri.toString() &&
											((Y = W.getSelections() ?? []), q)
										) {
											X = Y.map((re) => re.getPosition());
											const se = p.$aDb.get(W)?.getSessionEnclosingRange();
											if (se)
												for (
													let re = se.startLineNumber;
													re <= se.endLineNumber;
													re++
												)
													X.push(new d.$hL(re, te.getLineMaxColumn(re)));
										}
										const Z = (0, C.$Qic)(te, X, V);
										return Z.length
											? Z.map(
													(se) =>
														new E.$tzb(
															te.uri,
															{ ...se, text: se.text || "" },
															te.getVersionId(),
														),
												)
											: [];
									}),
								)
							)
								.flat()
								.filter((ee) => ee !== void 0);
							await this.f.apply(ne, {
								label: (0, o.localize)(7813, null),
								code: "undoredo.notebookTrimTrailingWhitespace",
							});
						} finally {
							G.report({ increment: 100 }), K.dispose();
						}
					}
				};
				N = Ne([j(0, f.$gj), j(1, P.$IY), j(2, h.$MO), j(3, E.$rzb)], N);
				let A = class {
					constructor(H, q, V) {
						(this.c = H), (this.d = q), (this.e = V);
					}
					async participate(H, q, V, G) {
						this.c.getValue("files.trimFinalNewlines") &&
							(await this.g(H, q.reason === v.SaveReason.AUTO, V));
					}
					f(H) {
						for (let q = H.getLineCount(); q >= 1; q--)
							if (H.getLineLength(q)) return q;
						return 0;
					}
					async g(H, q, V) {
						if (!H.model || !(H.model instanceof T.$Opc)) return;
						const G = new i.$Zc(),
							K = H.model.notebookModel,
							J = U(this.d);
						try {
							const X = (
								await Promise.all(
									K.cells.map(async (Y) => {
										if (Y.cellKind !== I.CellKind.Code) return;
										let ie = 0;
										const ne =
											J && Y.uri.toString() === J.getModel()?.uri.toString();
										if (q && ne) {
											const Z = J.getSelections() ?? [];
											for (const se of Z)
												ie = Math.max(ie, se.selectionStartLineNumber);
										}
										const ee = Y.textBuffer,
											_ = this.f(ee),
											te = Math.max(_ + 1, ie + 1);
										if (te > ee.getLineCount()) return;
										const Q = new m.$iL(
											te,
											1,
											ee.getLineCount(),
											ee.getLineLastNonWhitespaceColumn(ee.getLineCount()),
										);
										if (!Q.isEmpty())
											return new E.$tzb(
												Y.uri,
												{ range: Q, text: "" },
												Y.textModel?.getVersionId(),
											);
									}),
								)
							)
								.flat()
								.filter((Y) => Y !== void 0);
							await this.e.apply(X, {
								label: (0, o.localize)(7814, null),
								code: "undoredo.trimFinalNewLines",
							});
						} finally {
							V.report({ increment: 100 }), G.dispose();
						}
					}
				};
				A = Ne([j(0, f.$gj), j(1, P.$IY), j(2, E.$rzb)], A);
				let R = class {
					constructor(H, q, V) {
						(this.c = H), (this.d = q), (this.e = V);
					}
					async participate(H, q, V, G) {
						this.c.getValue(I.$56.insertFinalNewline) &&
							(await this.f(H, q.reason === v.SaveReason.AUTO, V));
					}
					async f(H, q, V) {
						if (!H.model || !(H.model instanceof T.$Opc)) return;
						const G = new i.$Zc(),
							K = H.model.notebookModel,
							J = U(this.e);
						let W;
						J && (W = J.getSelections() ?? []);
						try {
							const Y = (
								await Promise.all(
									K.cells.map(async (ie) => {
										if (ie.cellKind !== I.CellKind.Code) return;
										const ne = ie.textBuffer.getLineCount(),
											ee =
												ie.textBuffer.getLineFirstNonWhitespaceColumn(ne) === 0;
										if (!(!ne || ee))
											return new E.$tzb(
												ie.uri,
												{
													range: new m.$iL(
														ne + 1,
														ie.textBuffer.getLineLength(ne),
														ne + 1,
														ie.textBuffer.getLineLength(ne),
													),
													text: ie.textBuffer.getEOL(),
												},
												ie.textModel?.getVersionId(),
											);
									}),
								)
							).filter((ie) => ie !== void 0);
							await this.d.apply(Y, {
								label: (0, o.localize)(7815, null),
								code: "undoredo.insertFinalNewLine",
							}),
								J && W && J.setSelections(W);
						} finally {
							V.report({ increment: 100 }), G.dispose();
						}
					}
				};
				R = Ne([j(0, f.$gj), j(1, E.$rzb), j(2, P.$IY)], R);
				let O = class {
					constructor(H, q, V, G, K, J) {
						(this.c = H),
							(this.d = q),
							(this.e = V),
							(this.f = G),
							(this.g = K),
							(this.h = J);
					}
					async participate(H, q, V, G) {
						if (
							!this.e.isWorkspaceTrusted() ||
							!H.model ||
							!(H.model instanceof T.$Opc)
						)
							return;
						let J = "";
						if (q.reason === v.SaveReason.AUTO) return;
						if (q.reason === v.SaveReason.EXPLICIT) J = "explicit";
						else return;
						const W = H.model.notebookModel,
							X = this.c.getValue(I.$56.codeActionsOnSave),
							Y = Array.isArray(X) ? X : Object.keys(X).filter((Q) => X[Q]),
							ie = this.i(Y),
							ne = ie.filter(
								(Q) => X[Q.value] === "never" || X[Q.value] === !1,
							),
							ee = ie.filter((Q) => X[Q.value] === J || X[Q.value] === !0),
							_ = ee.filter((Q) => !n.$GAb.Notebook.contains(Q)),
							te = ee.filter((Q) => n.$GAb.Notebook.contains(Q));
						if (te.length) {
							const Q = new i.$Zc();
							V.report({ message: (0, o.localize)(7816, null) });
							try {
								const Z = W.cells[0],
									se = await this.f.createModelReference(Z.uri);
								Q.add(se);
								const re = se.object.textEditorModel;
								await this.g.invokeFunction(
									B.applyOnSaveGenericCodeActions,
									re,
									te,
									ne,
									V,
									G,
								);
							} catch {
								this.d.error("Failed to apply notebook code action on save");
							} finally {
								V.report({ increment: 100 }), Q.dispose();
							}
						}
						if (_.length) {
							Array.isArray(X) ||
								_.sort((Z, se) =>
									n.$GAb.SourceFixAll.contains(Z)
										? n.$GAb.SourceFixAll.contains(se)
											? 0
											: -1
										: n.$GAb.SourceFixAll.contains(se)
											? 1
											: 0,
								);
							const Q = new i.$Zc();
							V.report({ message: (0, o.localize)(7817, null) });
							try {
								await Promise.all(
									W.cells.map(async (Z) => {
										const se = await this.f.createModelReference(Z.uri);
										Q.add(se);
										const re = se.object.textEditorModel;
										await this.g.invokeFunction(
											B.applyOnSaveGenericCodeActions,
											re,
											_,
											ne,
											V,
											G,
										);
									}),
								);
							} catch {
								this.d.error("Failed to apply code action on save");
							} finally {
								V.report({ increment: 100 }), Q.dispose();
							}
						}
					}
					i(H) {
						const q = H.map((V) => new t.$1L(V));
						return q.filter((V) =>
							q.every((G) => G.equals(V) || !G.contains(V)),
						);
					}
				};
				O = Ne(
					[
						j(0, f.$gj),
						j(1, s.$ik),
						j(2, y.$pO),
						j(3, h.$MO),
						j(4, b.$Li),
						j(5, L.$uZ),
					],
					O,
				);
				class B {
					static async checkAndRunFormatCodeAction(H, q, V, G) {
						const K = H.get(b.$Li),
							J = H.get(h.$MO),
							W = H.get(s.$ik),
							X = H.get(f.$gj),
							Y = new i.$Zc();
						let ie = !1;
						V.report({ message: (0, o.localize)(7818, null) });
						try {
							const ne = q.cells[0],
								ee = await J.createModelReference(ne.uri);
							Y.add(ee);
							const _ = ee.object.textEditorModel,
								te = X.getValue(I.$56.defaultFormatter);
							ie = await K.invokeFunction(
								B.applyOnSaveFormatCodeAction,
								_,
								new t.$1L("notebook.format"),
								[],
								te,
								V,
								G,
							);
						} catch {
							W.error("Failed to apply notebook format action on save");
						} finally {
							V.report({ increment: 100 }), Y.dispose();
						}
						return ie;
					}
					static async applyOnSaveGenericCodeActions(H, q, V, G, K, J) {
						const W = H.get(b.$Li),
							X = H.get(a.$k3),
							Y = H.get(L.$uZ),
							ie = H.get(s.$ik),
							ne = new (class {
								constructor() {
									this.c = new Set();
								}
								d() {
									K.report({
										message: (0, o.localize)(
											7819,
											null,
											[...this.c].map((ee) => `'${ee}'`).join(", "),
											"command:workbench.action.openSettings?%5B%22notebook.codeActionsOnSave%22%5D",
										),
									});
								}
								report(ee) {
									ee.displayName &&
										!this.c.has(ee.displayName) &&
										(this.c.add(ee.displayName), this.d());
								}
							})();
						for (const ee of V) {
							const _ = await B.getActionsToRun(q, ee, G, X, Y, ne, J);
							if (J.isCancellationRequested) {
								_.dispose();
								return;
							}
							try {
								for (const te of _.validActions) {
									const Q = te.action.edit?.edits;
									let Z = !1;
									if (!te.action.kind?.startsWith("notebook"))
										for (const se of Q ?? []) {
											const re = se;
											if (!(re.resource && (0, w.$gh)(re.resource, q.uri))) {
												Z = !0;
												break;
											}
										}
									if (Z) {
										ie.warn(
											"Failed to apply code action on save, applied to multiple resources.",
										);
										continue;
									}
									if (
										(K.report({
											message: (0, o.localize)(7820, null, te.action.title),
										}),
										await W.invokeFunction(
											c.$VAb,
											te,
											c.ApplyCodeActionReason.OnSave,
											{},
											J,
										),
										J.isCancellationRequested)
									)
										return;
								}
							} catch {
							} finally {
								_.dispose();
							}
						}
					}
					static async applyOnSaveFormatCodeAction(H, q, V, G, K, J, W) {
						const X = H.get(b.$Li),
							Y = H.get(a.$k3),
							ie = H.get(L.$uZ),
							ne = H.get(s.$ik),
							ee = new (class {
								constructor() {
									this.c = new Set();
								}
								d() {
									J.report({
										message: (0, o.localize)(
											7821,
											null,
											[...this.c].map((te) => `'${te}'`).join(", "),
											"command:workbench.action.openSettings?%5B%22notebook.defaultFormatter%22%5D",
										),
									});
								}
								report(te) {
									te.displayName &&
										!this.c.has(te.displayName) &&
										(this.c.add(te.displayName), this.d());
								}
							})(),
							_ = await B.getActionsToRun(q, V, G, Y, ie, ee, W);
						if (
							(_.validActions.length > 1 &&
								!K &&
								ne.warn(
									"More than one format code action is provided, the 0th one will be used. A default can be specified via `notebook.defaultFormatter` in your settings.",
								),
							W.isCancellationRequested)
						)
							return _.dispose(), !1;
						try {
							const te = K
								? _.validActions.find((Q) => Q.provider?.extensionId === K)
								: _.validActions[0];
							if (
								!te ||
								(J.report({
									message: (0, o.localize)(7822, null, te.action.title),
								}),
								await X.invokeFunction(
									c.$VAb,
									te,
									c.ApplyCodeActionReason.OnSave,
									{},
									W,
								),
								W.isCancellationRequested)
							)
								return !1;
						} catch {
							return (
								ne.error("Failed to apply notebook format code action on save"),
								!1
							);
						} finally {
							_.dispose();
						}
						return !0;
					}
					static getActionsToRun(H, q, V, G, K, J, W) {
						return (0, c.$UAb)(
							G.codeActionProvider,
							H,
							H.getFullModelRange(),
							{
								type: r.CodeActionTriggerType.Invoke,
								triggerAction: n.CodeActionTriggerSource.OnSave,
								filter: { include: q, excludes: V, includeSourceActions: !0 },
							},
							J,
							W,
							K,
						);
					}
				}
				e.$UFc = B;
				function U(x) {
					const H = x.activeEditorPane;
					return (0, S.$eJb)(H)?.activeCodeEditor;
				}
				let z = class extends i.$1c {
					constructor(H, q) {
						super(), (this.c = H), (this.f = q), this.g();
					}
					g() {
						this.D(this.f.addSaveParticipant(this.c.createInstance(N))),
							this.D(this.f.addSaveParticipant(this.c.createInstance(O))),
							this.D(this.f.addSaveParticipant(this.c.createInstance(M))),
							this.D(this.f.addSaveParticipant(this.c.createInstance(R))),
							this.D(this.f.addSaveParticipant(this.c.createInstance(A)));
					}
				};
				(e.$VFc = z),
					(e.$VFc = z = Ne([j(0, b.$Li), j(1, D.$iZ)], z)),
					l.$Io
						.as($.Extensions.Workbench)
						.registerWorkbenchContribution(z, k.LifecyclePhase.Restored);
			},
		),
		define(
			de[3909],
			he([
				1, 0, 4, 33, 27, 3, 46, 199, 71, 200, 69, 42, 674, 11, 8, 5, 43, 84,
				238, 108, 176, 18, 611, 70, 10, 52, 30, 55, 161, 1926,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$WFc = void 0),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: "notebook.format",
									title: (0, t.localize2)(7775, "Format Notebook"),
									category: f.$p5b,
									precondition: n.$Kj.and(s.$mJb, s.$tJb),
									keybinding: {
										when: m.EditorContextKeys.editorTextFocus.toNegated(),
										primary: w.KeyMod.Shift | w.KeyMod.Alt | w.KeyCode.KeyF,
										linux: {
											primary:
												w.KeyMod.CtrlCmd | w.KeyMod.Shift | w.KeyCode.KeyI,
										},
										weight: p.KeybindingWeight.WorkbenchContrib,
									},
									f1: !0,
									menu: {
										id: c.$XX.EditorContext,
										when: n.$Kj.and(
											m.EditorContextKeys.inCompositeEditor,
											m.EditorContextKeys.hasDocumentFormattingProvider,
										),
										group: "1_modification",
										order: 1.3,
									},
								});
							}
							async run(N) {
								const A = N.get(l.$IY),
									R = N.get(a.$MO),
									O = N.get(r.$Cxb),
									B = N.get(u.$k3),
									U = N.get(d.$rzb),
									z = N.get(g.$Li),
									F = (0, b.$eJb)(A.activeEditorPane);
								if (!F || !F.hasModel()) return;
								const x = F.textModel,
									H = await z.invokeFunction(
										k.$UFc.checkAndRunFormatCodeAction,
										x,
										o.$0N.None,
										i.CancellationToken.None,
									),
									q = new E.$Zc();
								try {
									if (!H) {
										const V = await Promise.all(
											x.cells.map(async (G) => {
												const K = await R.createModelReference(G.uri);
												q.add(K);
												const J = K.object.textEditorModel,
													W = await (0, h.$Rhc)(
														O,
														B,
														J,
														h.FormattingMode.Explicit,
														i.CancellationToken.None,
													),
													X = [];
												if (W) {
													for (const Y of W)
														X.push(new d.$tzb(J.uri, Y, J.getVersionId()));
													return X;
												}
												return [];
											}),
										);
										await U.apply(V.flat(), {
											label: (0, t.localize)(7772, null),
											code: "undoredo.formatNotebook",
										});
									}
								} finally {
									q.dispose();
								}
							}
						},
					),
					(0, C.$ntb)(
						class extends C.$itb {
							constructor() {
								super({
									id: "notebook.formatCell",
									label: (0, t.localize)(7773, null),
									alias: "Format Cell",
									precondition: n.$Kj.and(
										s.$mJb,
										s.$tJb,
										m.EditorContextKeys.inCompositeEditor,
										m.EditorContextKeys.writable,
										m.EditorContextKeys.hasDocumentFormattingProvider,
									),
									kbOpts: {
										kbExpr: n.$Kj.and(m.EditorContextKeys.editorTextFocus),
										primary: w.KeyMod.Shift | w.KeyMod.Alt | w.KeyCode.KeyF,
										linux: {
											primary:
												w.KeyMod.CtrlCmd | w.KeyMod.Shift | w.KeyCode.KeyI,
										},
										weight: p.KeybindingWeight.EditorContrib,
									},
									contextMenuOpts: { group: "1_modification", order: 1.301 },
								});
							}
							async run(A, R) {
								R.hasModel() &&
									(await A.get(g.$Li).invokeFunction(
										h.$Nhc,
										R,
										h.FormattingMode.Explicit,
										o.$0N.None,
										i.CancellationToken.None,
										!0,
									));
							}
						},
					);
				let L = class {
					constructor(A, R, O, B, U, z) {
						(this.a = A),
							(this.b = R),
							(this.c = O),
							(this.d = B),
							(this.e = U),
							(this.f = z);
					}
					async onWillExecuteCell(A) {
						if (!this.e.getValue($.$56.formatOnCellExecution)) return;
						const O = new E.$Zc();
						try {
							const B = await Promise.all(
								A.map(async (U) => {
									const z = this.f.getNotebookTextModel(U.notebook);
									if (!z) return [];
									let F;
									for (const G of z.cells)
										if (G.handle === U.cellHandle) {
											F = G;
											break;
										}
									if (!F) return [];
									const x = await this.c.createModelReference(F.uri);
									O.add(x);
									const H = x.object.textEditorModel,
										q = await (0, h.$Rhc)(
											this.d,
											this.b,
											H,
											h.FormattingMode.Silent,
											i.CancellationToken.None,
										),
										V = [];
									return q
										? (V.push(
												...q.map((G) => new d.$tzb(H.uri, G, H.getVersionId())),
											),
											V)
										: [];
								}),
							);
							await this.a.apply(B.flat(), {
								label: (0, t.localize)(7774, null),
								code: "undoredo.notebooks.onWillExecuteFormat",
							});
						} finally {
							O.dispose();
						}
					}
				};
				L = Ne(
					[
						j(0, d.$rzb),
						j(1, u.$k3),
						j(2, a.$MO),
						j(3, r.$Cxb),
						j(4, v.$gj),
						j(5, P.$MIb),
					],
					L,
				);
				let D = class extends E.$1c {
					constructor(A, R) {
						super(), (this.a = A), (this.b = R), this.c();
					}
					c() {
						this.D(
							this.b.registerExecutionParticipant(this.a.createInstance(L)),
						);
					}
				};
				(e.$WFc = D),
					(e.$WFc = D = Ne([j(0, g.$Li), j(1, y.$c6)], D)),
					I.$Io
						.as(T.Extensions.Workbench)
						.registerWorkbenchContribution(D, S.LifecyclePhase.Restored);
			},
		),
		define(
			de[3910],
			he([
				1, 0, 4, 3, 6, 1052, 59, 15, 22, 52, 9, 73, 34, 19, 336, 68, 33, 335,
				1911, 40, 18, 700, 170, 403, 227, 12, 29, 848, 84,
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
					(e.$Jpc = void 0);
				let k = class extends f.$Ipc {
					constructor(D, M, N, A, R, O, B, U, z, F, x, H, q, V, G, K) {
						super(N, O, U),
							(this.I = D),
							(this.J = M),
							(this.L = A),
							(this.N = R),
							(this.O = B),
							(this.P = z),
							(this.Q = F),
							(this.R = x),
							(this.S = H),
							(this.U = q),
							(this.X = V),
							(this.Y = G),
							(this.Z = K),
							(this.r = this.D(new w.$re())),
							(this.onDidResolve = this.r.event),
							(this.s = this.D(new w.$re())),
							(this.onDidChangeDirty = this.s.event),
							(this.t = this.D(new w.$re())),
							(this.onDidChangeReadonly = this.t.event),
							(this.u = this.D(new w.$re())),
							(this.onDidChangeOrphaned = this.u.event),
							(this.w = this.D(new w.$re())),
							(this.onDidSaveError = this.w.event),
							(this.y = this.D(new w.$re())),
							(this.onDidSave = this.y.event),
							(this.z = this.D(new w.$re())),
							(this.onDidRevert = this.z.event),
							(this.C = this.D(new w.$re())),
							(this.onDidRemove = this.C.event),
							(this.F = new C.$Gc()),
							(this.G = new C.$Gc()),
							(this.H = this.D(new d.$Vh())),
							(this.hb = new Map()),
							this.$();
					}
					$() {
						this.D(this.f.onDidFilesChange((D) => this.eb(D))),
							this.D(
								this.f.onDidChangeFileSystemProviderCapabilities((D) =>
									this.cb(D),
								),
							),
							this.D(
								this.f.onDidChangeFileSystemProviderRegistrations((D) =>
									this.db(D),
								),
							),
							this.D(
								this.O.onWillRunWorkingCopyFileOperation((D) => this.ib(D)),
							),
							this.D(
								this.O.onDidFailWorkingCopyFileOperation((D) => this.jb(D)),
							),
							this.D(
								this.O.onDidRunWorkingCopyFileOperation((D) => this.kb(D)),
							),
							S.$r
								? this.D(
										this.L.onBeforeShutdown((D) =>
											D.veto(this.ab(), "veto.fileWorkingCopyManager"),
										),
									)
								: this.D(
										this.L.onWillShutdown((D) =>
											D.join(this.bb(), {
												id: "join.fileWorkingCopyManager",
												label: (0, t.localize)(13148, null),
											}),
										),
									);
					}
					ab() {
						return !!this.workingCopies.some((D) =>
							D.hasState(E.StoredFileWorkingCopyState.PENDING_SAVE),
						);
					}
					async bb() {
						let D;
						for (
							;
							(D = this.workingCopies.filter((M) =>
								M.hasState(E.StoredFileWorkingCopyState.PENDING_SAVE),
							)).length > 0;
						)
							await d.Promises.settled(
								D.map((M) =>
									M.joinState(E.StoredFileWorkingCopyState.PENDING_SAVE),
								),
							);
					}
					cb(D) {
						this.fb(D.scheme);
					}
					db(D) {
						D.added && this.fb(D.scheme);
					}
					eb(D) {
						this.fb(D);
					}
					fb(D) {
						for (const M of this.workingCopies) {
							if (M.isDirty()) continue;
							let N = !1;
							typeof D == "string"
								? (N = D === M.resource.scheme)
								: (N = D.contains(
										M.resource,
										m.FileChangeType.UPDATED,
										m.FileChangeType.ADDED,
									)),
								N && this.gb(M);
						}
					}
					gb(D) {
						this.H.queueSize(D.resource) <= 1 &&
							this.H.queueFor(D.resource, async () => {
								try {
									await this.lb(D);
								} catch (N) {
									this.g.error(N);
								}
							});
					}
					ib(D) {
						(D.operation === m.FileOperation.MOVE ||
							D.operation === m.FileOperation.COPY) &&
							D.waitUntil(
								(async () => {
									const M = [];
									for (const { source: N, target: A } of D.files)
										if (N) {
											if (this.P.extUri.isEqual(N, A)) continue;
											const R = [];
											for (const O of this.workingCopies)
												this.P.extUri.isEqualOrParent(O.resource, N) &&
													R.push(O);
											for (const O of R) {
												const B = O.resource;
												let U;
												this.P.extUri.isEqual(B, N)
													? (U = A)
													: (U = (0, c.$nh)(
															A,
															B.path.substr(N.path.length + 1),
														)),
													M.push({
														source: B,
														target: U,
														snapshot: O.isDirty()
															? await O.model?.snapshot(
																	T.SnapshotContext.Save,
																	p.CancellationToken.None,
																)
															: void 0,
													});
											}
										}
									this.hb.set(D.correlationId, M);
								})(),
							);
					}
					jb(D) {
						if (
							D.operation === m.FileOperation.MOVE ||
							D.operation === m.FileOperation.COPY
						) {
							const M = this.hb.get(D.correlationId);
							if (M) {
								this.hb.delete(D.correlationId);
								for (const N of M)
									N.snapshot && this.get(N.source)?.markModified();
							}
						}
					}
					kb(D) {
						switch (D.operation) {
							case m.FileOperation.CREATE:
								D.waitUntil(
									(async () => {
										for (const { target: M } of D.files) {
											const N = this.get(M);
											N && !N.isDisposed() && (await N.revert());
										}
									})(),
								);
								break;
							case m.FileOperation.MOVE:
							case m.FileOperation.COPY:
								D.waitUntil(
									(async () => {
										const M = this.hb.get(D.correlationId);
										M &&
											(this.hb.delete(D.correlationId),
											await d.Promises.settled(
												M.map(async (N) => {
													const A = this.P.asCanonicalUri(N.target);
													await this.resolve(A, {
														reload: { async: !1 },
														contents: N.snapshot,
													});
												}),
											));
									})(),
								);
								break;
						}
					}
					async lb(D) {
						await this.nb(D.resource),
							!(D.isDirty() || D.isDisposed() || !this.j(D.resource)) &&
								(await this.mb(D, { reload: { async: !1 } }));
					}
					async resolve(D, M) {
						const N = this.nb(D);
						return N && (await N), this.mb(D, M);
					}
					async mb(D, M) {
						let N, A;
						u.URI.isUri(D)
							? ((A = D), (N = this.get(A)))
							: ((A = D.resource), (N = D));
						let R,
							O = !1;
						const B = {
							contents: M?.contents,
							forceReadFromFile: M?.reload?.force,
							limits: M?.limits,
						};
						N
							? M?.contents
								? (R = N.resolve(B))
								: M?.reload
									? M.reload.async
										? ((R = Promise.resolve()),
											(async () => {
												try {
													await N.resolve(B);
												} catch (U) {
													(0, I.$4)(U);
												}
											})())
										: (R = N.resolve(B))
									: (R = Promise.resolve())
							: ((O = !0),
								(N = new E.$gZ(
									this.I,
									A,
									this.N.getUriBasenameLabel(A),
									this.J,
									async (U) => {
										await this.resolve(A, { ...U, reload: { async: !1 } });
									},
									this.f,
									this.g,
									this.O,
									this.Q,
									this.h,
									this.R,
									this.S,
									this.U,
									this.X,
									this.Y,
									this.Z,
								)),
								(R = N.resolve(B)),
								this.pb(N)),
							this.G.set(A, R),
							this.m(A, N),
							O && N.isDirty() && this.s.fire(N);
						try {
							await R;
						} catch (U) {
							throw (O && N.dispose(), U);
						} finally {
							this.G.delete(A);
						}
						return O && N.isDirty() && this.s.fire(N), N;
					}
					nb(D) {
						if (this.G.get(D)) return this.ob(D);
					}
					async ob(D) {
						let M;
						for (; this.G.has(D); ) {
							const N = this.G.get(D);
							if (N === M) return;
							M = N;
							try {
								await N;
							} catch {}
						}
					}
					pb(D) {
						const M = new i.$Zc();
						M.add(D.onDidResolve(() => this.r.fire(D))),
							M.add(D.onDidChangeDirty(() => this.s.fire(D))),
							M.add(D.onDidChangeReadonly(() => this.t.fire(D))),
							M.add(D.onDidChangeOrphaned(() => this.u.fire(D))),
							M.add(D.onDidSaveError(() => this.w.fire(D))),
							M.add(D.onDidSave((N) => this.y.fire({ workingCopy: D, ...N }))),
							M.add(D.onDidRevert(() => this.z.fire(D))),
							this.F.set(D.resource, M);
					}
					n(D) {
						const M = super.n(D),
							N = this.F.get(D);
						return (
							N && ((0, i.$Vc)(N), this.F.delete(D)), M && this.C.fire(D), M
						);
					}
					canDispose(D) {
						return D.isDisposed() || (!this.G.has(D.resource) && !D.isDirty())
							? !0
							: this.rb(D);
					}
					async rb(D) {
						const M = this.nb(D.resource);
						return M
							? (await M, this.canDispose(D))
							: D.isDirty()
								? (await w.Event.toPromise(D.onDidChangeDirty),
									this.canDispose(D))
								: !0;
					}
					dispose() {
						super.dispose(),
							this.G.clear(),
							(0, i.$Vc)(this.F.values()),
							this.F.clear();
					}
				};
				(e.$Jpc = k),
					(e.$Jpc = k =
						Ne(
							[
								j(2, m.$ll),
								j(3, r.$n6),
								j(4, a.$3N),
								j(5, h.$ik),
								j(6, n.$iZ),
								j(7, o.$WO),
								j(8, g.$Vl),
								j(9, y.$_Y),
								j(10, v.$gY),
								j(11, b.$4N),
								j(12, $.$bZ),
								j(13, s.$IY),
								j(14, l.$dZ),
								j(15, P.$8N),
							],
							k,
						));
			},
		),
		define(
			de[3911],
			he([
				1, 0, 4, 6, 15, 33, 3, 19, 9, 57, 22, 44, 78, 165, 68, 1052, 3910, 1925,
				3896, 336, 848, 73, 34, 40, 18, 700, 170, 52, 335, 403, 227, 23, 472,
				14, 51, 84,
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
				var O;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Mpc = void 0);
				let B = class extends C.$1c {
					static {
						O = this;
					}
					static {
						this.a = a.$p1.registerSource(
							"fileWorkingCopyCreate.source",
							(0, t.localize)(13117, null),
						);
					}
					static {
						this.b = a.$p1.registerSource(
							"fileWorkingCopyReplace.source",
							(0, t.localize)(13118, null),
						);
					}
					constructor(
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
						re,
						le,
					) {
						super(),
							(this.c = z),
							(this.f = F),
							(this.g = x),
							(this.h = H),
							(this.j = G),
							(this.m = K),
							(this.n = W),
							(this.q = X),
							(this.r = Y),
							(this.s = Q),
							(this.t = Z),
							(this.u = se),
							(this.w = re),
							(this.stored = this.D(
								new p.$Jpc(
									this.c,
									this.f,
									H,
									q,
									V,
									G,
									K,
									J,
									W,
									Y,
									ie,
									ne,
									ee,
									_,
									te,
									le,
								),
							)),
							(this.untitled = this.D(
								new f.$Lpc(
									this.c,
									this.g,
									async (oe, ae) =>
										!!(await this.saveAs(oe.resource, void 0, ae)),
									H,
									V,
									G,
									J,
									ie,
								),
							)),
							(this.onDidCreate = i.Event.any(
								this.stored.onDidCreate,
								this.untitled.onDidCreate,
							)),
							this.y();
					}
					y() {
						const z = this.D(
							new (class extends C.$1c {
								constructor(F) {
									super(),
										(this.b = F),
										(this.label = (0, t.localize)(13119, null)),
										(this.a = this.D(new i.$re())),
										(this.onDidChange = this.a.event),
										this.c();
								}
								c() {
									this.D(
										this.b.onDidResolve((F) => {
											(F.isReadonly() ||
												F.hasState(g.StoredFileWorkingCopyState.ORPHAN)) &&
												this.a.fire([F.resource]);
										}),
									),
										this.D(this.b.onDidRemove((F) => this.a.fire([F]))),
										this.D(
											this.b.onDidChangeReadonly((F) =>
												this.a.fire([F.resource]),
											),
										),
										this.D(
											this.b.onDidChangeOrphaned((F) =>
												this.a.fire([F.resource]),
											),
										);
								}
								provideDecorations(F) {
									const x = this.b.get(F);
									if (!x || x.isDisposed()) return;
									const H = x.isReadonly(),
										q = x.hasState(g.StoredFileWorkingCopyState.ORPHAN);
									if (H && q)
										return {
											color: A.$TS,
											letter: N.$ak.lockSmall,
											strikethrough: !0,
											tooltip: (0, t.localize)(13120, null),
										};
									if (H)
										return {
											letter: N.$ak.lockSmall,
											tooltip: (0, t.localize)(13121, null),
										};
									if (q)
										return {
											color: A.$TS,
											strikethrough: !0,
											tooltip: (0, t.localize)(13122, null),
										};
								}
							})(this.stored),
						);
						this.D(this.w.registerDecorationsProvider(z));
					}
					get workingCopies() {
						return [
							...this.stored.workingCopies,
							...this.untitled.workingCopies,
						];
					}
					get(z) {
						return this.stored.get(z) ?? this.untitled.get(z);
					}
					resolve(z, F) {
						return m.URI.isUri(z)
							? z.scheme === D.Schemas.untitled
								? this.untitled.resolve({ untitledResource: z })
								: this.stored.resolve(z, F)
							: this.untitled.resolve(z);
					}
					async saveAs(z, F, x) {
						if (!F) {
							const H = this.get(z);
							H instanceof o.$Kpc && H.hasAssociatedFilePath
								? (F = await this.I(z))
								: (F = await this.q.pickFileToSave(
										await this.I(x?.suggestedTarget ?? z),
										x?.availableFileSystems,
									));
						}
						if (F) {
							if (this.r.isReadonly(F))
								if (await this.H(F)) this.r.updateReadonly(F, !1);
								else return;
							return this.h.hasProvider(z) && (0, d.$gh)(z, F)
								? this.z(z, { ...x, force: !0 })
								: this.h.hasProvider(z) &&
										this.n.extUri.isEqual(z, F) &&
										(await this.h.exists(z))
									? (await this.m.move(
											[{ file: { source: z, target: F } }],
											E.CancellationToken.None,
										),
										(await this.z(z, x)) ?? (await this.z(F, x)))
									: this.C(z, F, x);
						}
					}
					async z(z, F) {
						const x = this.stored.get(z);
						if (x && (await x.save(F))) return x;
					}
					async C(z, F, x) {
						let H;
						const q = this.get(z);
						q?.isResolved()
							? (H = await q.model.snapshot(
									s.SnapshotContext.Save,
									E.CancellationToken.None,
								))
							: (H = (await this.h.readFileStream(z)).value);
						const { targetFileExists: V, targetStoredFileWorkingCopy: G } =
							await this.F(z, F);
						if (
							!(
								(q instanceof o.$Kpc &&
									q.hasAssociatedFilePath &&
									V &&
									this.n.extUri.isEqual(
										F,
										(0, d.$xh)(
											q.resource,
											this.t.remoteAuthority,
											this.s.defaultUriScheme,
										),
									) &&
									!(await this.G(F))) ||
								(await G.model?.update(H, E.CancellationToken.None),
								x?.source || (x = { ...x, source: V ? O.b : O.a }),
								!(await G.save({ ...x, from: z, force: !0 })))
							)
						) {
							try {
								await q?.revert();
							} catch (J) {
								this.j.error(J);
							}
							return G;
						}
					}
					async F(z, F) {
						let x = !1,
							H = this.stored.get(F);
						return (
							H?.isResolved()
								? (x = !0)
								: ((x = await this.h.exists(F)),
									x ||
										(await this.m.create(
											[{ resource: F }],
											E.CancellationToken.None,
										)),
									this.n.extUri.isEqual(z, F) && this.get(z)
										? (H = await this.stored.resolve(z))
										: (H = await this.stored.resolve(F))),
							{ targetFileExists: x, targetStoredFileWorkingCopy: H }
						);
					}
					async G(z) {
						const { confirmed: F } = await this.u.confirm({
							type: "warning",
							message: (0, t.localize)(13123, null, (0, d.$kh)(z)),
							detail: (0, t.localize)(
								13124,
								null,
								(0, d.$kh)(z),
								(0, d.$kh)((0, d.$mh)(z)),
							),
							primaryButton: (0, t.localize)(13125, null),
						});
						return F;
					}
					async H(z) {
						const { confirmed: F } = await this.u.confirm({
							type: "warning",
							message: (0, t.localize)(13126, null, (0, d.$kh)(z)),
							detail: (0, t.localize)(13127, null),
							primaryButton: (0, t.localize)(13128, null),
						});
						return F;
					}
					async I(z) {
						if (this.h.hasProvider(z)) return z;
						const F = this.get(z);
						if (F instanceof o.$Kpc && F.hasAssociatedFilePath)
							return (0, d.$xh)(
								z,
								this.t.remoteAuthority,
								this.s.defaultUriScheme,
							);
						const x = await this.q.defaultFilePath();
						if (F) {
							const H = (0, d.$nh)(x, F.name);
							if (await this.s.hasValidBasename(H, F.name)) return H;
						}
						return (0, d.$nh)(x, (0, d.$kh)(z));
					}
					async destroy() {
						await w.Promises.settled([
							this.stored.destroy(),
							this.untitled.destroy(),
						]);
					}
				};
				(e.$Mpc = B),
					(e.$Mpc =
						B =
						O =
							Ne(
								[
									j(3, u.$ll),
									j(4, T.$n6),
									j(5, l.$3N),
									j(6, y.$ik),
									j(7, b.$iZ),
									j(8, P.$WO),
									j(9, n.$Vl),
									j(10, r.$IO),
									j(11, I.$_Y),
									j(12, L.$gY),
									j(13, $.$4N),
									j(14, k.$bZ),
									j(15, v.$IY),
									j(16, S.$dZ),
									j(17, c.$I8),
									j(18, h.$r8),
									j(19, r.$GO),
									j(20, M.$sPb),
									j(21, R.$8N),
								],
								B,
							));
			},
		),
		define(
			de[3912],
			he([
				1, 0, 5, 9, 70, 1343, 3, 161, 6, 53, 68, 59, 3911, 23, 1849, 28, 33, 10,
				32, 557,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qFc = void 0);
				let s = class extends C.$6c {
					constructor($, v, S, I, T) {
						super(),
							(this.r = $),
							(this.s = v),
							(this.t = S),
							(this.u = I),
							(this.w = T),
							(this.f = new C.$Zc()),
							(this.g = new Map()),
							(this.h = new Map()),
							(this.j = new m.$re()),
							(this.onDidSaveNotebook = this.j.event),
							(this.m = new m.$re()),
							(this.onDidChangeDirty = this.m.event),
							(this.n = new a.$Gc()),
							(this.q = new Set());
					}
					dispose() {
						this.f.dispose(),
							this.j.dispose(),
							this.m.dispose(),
							(0, C.$Vc)(this.h.values()),
							(0, C.$Vc)(this.g.values());
					}
					isDirty($) {
						return this.n.get($) ?? !1;
					}
					async b($, v, S, I, T) {
						this.q.delete($);
						const P = i.URI.parse($),
							k = w.$66.create(v);
						let L = this.g.get(k);
						if (!L) {
							const R = new E.$Ppc(v, this.s, this.t, this.u, this.w);
							(L = this.r.createInstance(h.$Mpc, k, R, R)), this.g.set(k, L);
						}
						const D =
								T ||
								(v === "interactive" &&
									this.t.getValue(w.$56.InteractiveWindowPromptToSave) !== !0),
							N = await this.r
								.createInstance(E.$Npc, P, S, v, L, D)
								.load({ limits: I });
						let A;
						return (
							this.h.set(
								N,
								(0, C.$Xc)(
									N.onDidSave(() => this.j.fire(N.resource)),
									N.onDidChangeDirty(() => {
										const R = N.isDirty();
										this.n.set(N.resource, R),
											R && !A
												? (A = this.acquire($, v))
												: A && (A.dispose(), (A = void 0)),
											this.m.fire(N);
									}),
									(0, C.$Yc)(() => A?.dispose()),
								),
							),
							N
						);
					}
					c($, v) {
						this.q.add($),
							(async () => {
								try {
									const S = await v;
									if (
										!this.q.has($) ||
										(S instanceof E.$Npc && (await S.canDispose()),
										!this.q.has($))
									)
										return;
									this.h.get(S)?.dispose(), this.h.delete(S), S.dispose();
								} catch (S) {
									this.w.error(
										"NotebookModelCollection",
										"FAILED to destory notebook - " + S,
									);
								} finally {
									this.q.delete($);
								}
							})();
					}
				};
				s = Ne(
					[j(0, t.$Li), j(1, d.$MIb), j(2, o.$gj), j(3, f.$km), j(4, b.$P2b)],
					s,
				);
				let l = class {
					constructor($, v, S, I) {
						(this.c = v),
							(this.d = S),
							(this.e = I),
							(this.b = new m.$te()),
							(this.onWillFailWithConflict = this.b.event),
							(this.a = $.createInstance(s)),
							(this.onDidSaveNotebook = this.a.onDidSaveNotebook),
							(this.onDidChangeDirty = this.a.onDidChangeDirty);
					}
					dispose() {
						this.a.dispose();
					}
					isDirty($) {
						return this.a.isDirty($);
					}
					f($) {
						const v = this.c.getContributedNotebookType((0, g.$wg)($));
						if (!v) throw new Error("UNKNOWN notebook type: " + $);
						const S = n.$LIb.possibleFileEnding(v.selectors) ?? "";
						for (let I = 1; ; I++) {
							const T = i.URI.from({
								scheme: c.Schemas.untitled,
								path: `Untitled-${I}${S}`,
								query: $,
							});
							if (!this.c.getNotebookTextModel(T)) return T;
						}
					}
					async g($, v) {
						if (!$ && !v)
							throw new Error(
								"Must provide at least one of resource or viewType",
							);
						if ($?.scheme === w.CellUri.scheme)
							throw new Error(
								`CANNOT open a cell-uri as notebook. Tried with ${$.toString()}`,
							);
						const S = this.e.asCanonicalUri($ ?? this.f(v)),
							I = this.c.getNotebookTextModel(S);
						if (!v)
							if (I) v = I.viewType;
							else {
								await this.d.whenInstalledExtensionsRegistered();
								const T = this.c.getContributedNotebookTypes(S);
								v =
									T.find((P) => P.priority === "exclusive")?.id ??
									T.find((P) => P.priority === "default")?.id ??
									T[0]?.id;
							}
						if (!v) throw new Error(`Missing viewType for '${S}'`);
						if (I && I.viewType !== v) {
							await this.b.fireAsync(
								{ resource: S, viewType: v },
								p.CancellationToken.None,
							);
							const T = this.c.getNotebookTextModel(S)?.viewType;
							if (T && T !== v)
								throw new Error(
									`A notebook with view type '${T}' already exists for '${S}', CANNOT create another notebook with view type ${v}`,
								);
						}
						return { resource: S, viewType: v };
					}
					async createUntitledNotebookTextModel($) {
						const v = this.e.asCanonicalUri(this.f($));
						return await this.c.createNotebookTextModel($, v);
					}
					async resolve($, v, S) {
						let I, T;
						i.URI.isUri($)
							? (I = $)
							: $.untitledResource &&
								($.untitledResource.scheme === c.Schemas.untitled
									? (I = $.untitledResource)
									: ((I = $.untitledResource.with({
											scheme: c.Schemas.untitled,
										})),
										(T = !0)));
						const P = await this.g(I, v),
							k = this.a.acquire(
								P.resource.toString(),
								P.viewType,
								T,
								S?.limits,
								S?.scratchpad,
							);
						try {
							return {
								object: await k.object,
								dispose() {
									k.dispose();
								},
							};
						} catch (L) {
							throw (k.dispose(), L);
						}
					}
				};
				(e.$qFc = l),
					(e.$qFc = l =
						Ne([j(0, t.$Li), j(1, d.$MIb), j(2, r.$q2), j(3, u.$Vl)], l));
			},
		),
		define(
			de[3913],
			he([
				1, 0, 4, 15, 33, 3, 59, 10, 155, 68, 44, 165, 1052, 717, 227, 23, 970,
				25, 22,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				var b;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$E5c = void 0);
				let s = class extends E.$1c {
					static {
						b = this;
					}
					static {
						this.a = {
							ENABLED: "workbench.localHistory.enabled",
							SIZE_LIMIT: "workbench.localHistory.maxFileSize",
							EXCLUDES: "workbench.localHistory.exclude",
						};
					}
					static {
						this.b = u.$p1.registerSource(
							"undoRedo.source",
							(0, t.localize)(13153, null),
						);
					}
					constructor(y, $, v, S, I, T, P, k) {
						super(),
							(this.m = y),
							(this.n = $),
							(this.q = v),
							(this.r = S),
							(this.s = I),
							(this.t = T),
							(this.u = P),
							(this.w = k),
							(this.c = this.D(new i.$Sh(c.$b2c))),
							(this.f = this.D(
								new i.$6h(() =>
									this.D(
										new p.$0Y(
											(D) => this.s.getValue(b.a.EXCLUDES, { resource: D }),
											(D) => D.affectsConfiguration(b.a.EXCLUDES),
											this.u,
											this.s,
										),
									),
								),
							)),
							(this.g = new C.$Gc((L) => this.q.extUri.getComparisonKey(L))),
							(this.h = new C.$Gc((L) => this.q.extUri.getComparisonKey(L))),
							(this.j = new C.$Gc((L) => this.q.extUri.getComparisonKey(L))),
							this.y();
					}
					y() {
						this.D(this.w.onDidRunOperation((y) => this.z(y))),
							this.D(this.m.onDidChangeContent((y) => this.C(y))),
							this.D(this.m.onDidSave((y) => this.G(y)));
					}
					async z(y) {
						if (!this.J(y)) return;
						const $ = y.resource,
							v = y.target.resource,
							S = await this.n.moveEntries($, v);
						for (const I of S) {
							const T = this.F(I);
							this.j.set(I, T);
						}
					}
					C(y) {
						const $ = this.F(y.resource);
						this.h.set(y.resource, $ + 1);
					}
					F(y) {
						return this.h.get(y) || 0;
					}
					G(y) {
						if (!this.I(y)) return;
						const $ = this.F(y.workingCopy.resource);
						if (this.j.get(y.workingCopy.resource) === $) return;
						this.g.get(y.workingCopy.resource)?.dispose(!0);
						const v = new w.$Ce();
						this.g.set(y.workingCopy.resource, v),
							this.c.queue(async () => {
								if (v.token.isCancellationRequested) return;
								const S = this.F(y.workingCopy.resource);
								let I = y.source;
								y.source || (I = this.H(y)),
									await this.n.addEntry(
										{
											resource: y.workingCopy.resource,
											source: I,
											timestamp: y.stat.mtime,
										},
										v.token,
									),
									this.j.set(y.workingCopy.resource, S),
									!v.token.isCancellationRequested &&
										this.g.delete(y.workingCopy.resource);
							});
					}
					H(y) {
						const $ = this.t.getLastElement(y.workingCopy.resource);
						if ($)
							return $.code === "undoredo.textBufferEdit" ? void 0 : $.label;
						const v = this.t.getElements(y.workingCopy.resource);
						if (v.future.length > 0 || v.past.length > 0) return b.b;
					}
					I(y) {
						return (0, h.$fZ)(y) ? this.L(y.workingCopy.resource, y.stat) : !1;
					}
					J(y) {
						return y.isOperation(f.FileOperation.MOVE)
							? this.L(y.target.resource, y.target)
							: !1;
					}
					L(y, $) {
						if (
							y.scheme !== this.r.defaultUriScheme &&
							y.scheme !== g.Schemas.vscodeUserData &&
							y.scheme !== g.Schemas.inMemory
						)
							return !1;
						const v = 1024 * this.s.getValue(b.a.SIZE_LIMIT, { resource: y });
						return $.size > v ||
							this.s.getValue(b.a.ENABLED, { resource: y }) === !1
							? !1
							: !this.f.value.matches(y);
					}
				};
				(e.$E5c = s),
					(e.$E5c =
						s =
						b =
							Ne(
								[
									j(0, n.$gY),
									j(1, c.$a2c),
									j(2, r.$Vl),
									j(3, a.$I8),
									j(4, d.$gj),
									j(5, m.$GN),
									j(6, o.$Vi),
									j(7, f.$ll),
								],
								s,
							));
			},
		),
		define(
			de[3914],
			he([
				1, 0, 4, 6, 28, 30, 55, 52, 3913, 3, 717, 22, 143, 9, 15, 19, 78, 136,
				249, 33, 59, 68, 73, 76, 34, 44, 10, 24, 37,
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
				var k, L;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$H5c = e.$G5c = e.$F5c = void 0);
				class D {
					static {
						this.ENTRIES_FILE = "entries.json";
					}
					static {
						this.a = S.$p1.registerSource(
							"default.source",
							(0, t.localize)(13149, null),
						);
					}
					static {
						this.b = {
							MAX_ENTRIES: "workbench.localHistory.maxFileEntries",
							MERGE_PERIOD: "workbench.localHistory.mergeWindow",
						};
					}
					constructor(R, O, B, U, z, F, x, H, q, V, G) {
						(this.n = O),
							(this.o = B),
							(this.q = U),
							(this.r = z),
							(this.s = F),
							(this.t = x),
							(this.u = H),
							(this.v = q),
							(this.w = V),
							(this.x = G),
							(this.c = []),
							(this.d = void 0),
							(this.f = void 0),
							(this.g = void 0),
							(this.h = void 0),
							(this.i = void 0),
							(this.j = void 0),
							(this.k = 0),
							(this.l = this.k),
							(this.m = new n.$Sh(1)),
							this.y(R);
					}
					y(R) {
						(this.f = R),
							(this.g = this.v.getUriBasenameLabel(R)),
							(this.j = new RegExp(
								`[A-Za-z0-9]{4}${(0, P.$of)((0, g.$lh)(R))}`,
							)),
							(this.h = this.z(this.n, R)),
							(this.i = (0, g.$nh)(this.h, D.ENTRIES_FILE)),
							(this.c = []),
							(this.d = void 0);
					}
					z(R, O) {
						return (0, g.$nh)(R, (0, o.$Aj)(O.toString()).toString(16));
					}
					async addEntry(R = D.a, O = void 0, B = Date.now(), U) {
						let z;
						const F = (0, T.$Tb)(this.c);
						if (F && F.source === R) {
							const H = this.x.getValue(D.b.MERGE_PERIOD, { resource: this.f });
							B - F.timestamp <= H * 1e3 && (z = F);
						}
						let x;
						return (
							z
								? (x = await this.B(z, R, O, B, U))
								: (x = await this.A(R, O, B, U)),
							this.t.flushOnChange &&
								!U.isCancellationRequested &&
								(await this.store(U)),
							x
						);
					}
					async A(R, O = void 0, B, U) {
						const z = (0, w.$wg)(this.f),
							F = (0, w.$wg)(this.g),
							x = (0, w.$wg)(this.h),
							H = `${(0, f.$Ug)(void 0, void 0, 4)}${(0, g.$lh)(z)}`,
							q = (0, g.$nh)(x, H);
						await this.u.cloneFile(z, q);
						const V = {
							id: H,
							workingCopy: { resource: z, name: F },
							location: q,
							timestamp: B,
							source: R,
							sourceDescription: O,
						};
						return this.c.push(V), this.k++, this.o.fire({ entry: V }), V;
					}
					async B(R, O, B = void 0, U, z) {
						const F = (0, w.$wg)(this.f);
						return (
							await this.u.cloneFile(F, R.location),
							(R.source = O),
							(R.sourceDescription = B),
							(R.timestamp = U),
							this.k++,
							this.r.fire({ entry: R }),
							R
						);
					}
					async removeEntry(R, O) {
						if ((await this.C(), O.isCancellationRequested)) return !1;
						const B = this.c.indexOf(R);
						return B === -1
							? !1
							: (await this.I(R),
								this.c.splice(B, 1),
								this.k++,
								this.s.fire({ entry: R }),
								this.t.flushOnChange &&
									!O.isCancellationRequested &&
									(await this.store(O)),
								!0);
					}
					async updateEntry(R, O, B) {
						await this.C(),
							!(B.isCancellationRequested || this.c.indexOf(R) === -1) &&
								((R.source = O.source),
								this.k++,
								this.q.fire({ entry: R }),
								this.t.flushOnChange &&
									!B.isCancellationRequested &&
									(await this.store(B)));
					}
					async getEntries() {
						await this.C();
						const R = this.x.getValue(D.b.MAX_ENTRIES, { resource: this.f });
						return this.c.length > R ? this.c.slice(this.c.length - R) : this.c;
					}
					async hasEntries(R) {
						return R || (await this.C()), this.c.length > 0;
					}
					C() {
						return this.d || (this.d = this.D()), this.d;
					}
					async D() {
						const R = await this.E();
						for (const O of this.c) R.set(O.id, O);
						this.c = Array.from(R.values()).sort(
							(O, B) => O.timestamp - B.timestamp,
						);
					}
					async E() {
						const R = (0, w.$wg)(this.f),
							O = (0, w.$wg)(this.g),
							[B, U] = await Promise.all([this.K(), this.L()]),
							z = new Map();
						if (U)
							for (const F of U)
								z.set(F.name, {
									id: F.name,
									workingCopy: { resource: R, name: O },
									location: F.resource,
									timestamp: F.mtime,
									source: D.a,
									sourceDescription: void 0,
								});
						if (B)
							for (const F of B.entries) {
								const x = z.get(F.id);
								x &&
									z.set(F.id, {
										...x,
										timestamp: F.timestamp,
										source: F.source ?? x.source,
										sourceDescription:
											F.sourceDescription ?? x.sourceDescription,
									});
							}
						return z;
					}
					async moveEntries(R, O, B) {
						const U = Date.now(),
							z = this.v.getUriLabel((0, w.$wg)(this.f)),
							F = (0, w.$wg)(this.h),
							x = (0, w.$wg)(R.h);
						try {
							for (const G of this.c)
								await this.u.move(G.location, (0, g.$nh)(x, G.id), !0);
							await this.u.del(F, { recursive: !0 });
						} catch (G) {
							if (!this.M(G))
								try {
									await this.u.move(F, x, !0);
								} catch (K) {
									this.M(K) || this.N(K);
								}
						}
						const H = (0, T.$Qb)([...this.c, ...R.c], (G) => G.id).sort(
								(G, K) => G.timestamp - K.timestamp,
							),
							q = (0, w.$wg)(R.f);
						this.y(q);
						const V = (0, w.$wg)(R.g);
						for (const G of H)
							this.c.push({
								id: G.id,
								location: (0, g.$nh)(x, G.id),
								source: G.source,
								sourceDescription: G.sourceDescription,
								timestamp: G.timestamp,
								workingCopy: { resource: q, name: V },
							});
						await this.addEntry(O, z, U, B), await this.store(B);
					}
					async store(R) {
						this.F() &&
							(await this.m.queue(async () => {
								if (!(R.isCancellationRequested || !this.F())) return this.G(R);
							}));
					}
					F() {
						return this.l !== this.k;
					}
					async G(R) {
						const O = (0, w.$wg)(this.h);
						if ((await this.C(), R.isCancellationRequested)) return;
						await this.H();
						const B = this.k;
						if (this.c.length === 0)
							try {
								await this.u.del(O, { recursive: !0 });
							} catch (U) {
								this.N(U);
							}
						else await this.J();
						this.l = B;
					}
					async H() {
						const R = this.x.getValue(D.b.MAX_ENTRIES, { resource: this.f });
						if (this.c.length <= R) return;
						const O = this.c.slice(0, this.c.length - R),
							B = this.c.slice(this.c.length - R);
						for (const U of O) await this.I(U);
						this.c = B;
						for (const U of O) this.s.fire({ entry: U });
					}
					async I(R) {
						try {
							await this.u.del(R.location);
						} catch (O) {
							this.N(O);
						}
					}
					async J() {
						const R = (0, w.$wg)(this.f),
							O = (0, w.$wg)(this.i),
							B = {
								version: 1,
								resource: R.toString(),
								entries: this.c.map((U) => ({
									id: U.id,
									source: U.source !== D.a ? U.source : void 0,
									sourceDescription: U.sourceDescription,
									timestamp: U.timestamp,
								})),
							};
						await this.u.writeFile(O, $.$Te.fromString(JSON.stringify(B)));
					}
					async K() {
						const R = (0, w.$wg)(this.i);
						let O;
						try {
							O = JSON.parse((await this.u.readFile(R)).value.toString());
						} catch (B) {
							this.M(B) || this.N(B);
						}
						return O;
					}
					async L() {
						const R = (0, w.$wg)(this.h),
							O = (0, w.$wg)(this.j);
						let B;
						try {
							B = (await this.u.resolve(R, { resolveMetadata: !0 })).children;
						} catch (U) {
							this.M(U) || this.N(U);
						}
						if (B)
							return B.filter(
								(U) => !(0, g.$gh)(U.resource, this.i) && O.test(U.name),
							);
					}
					M(R) {
						return (
							R instanceof a.$Gl &&
							R.fileOperationResult === a.FileOperationResult.FILE_NOT_FOUND
						);
					}
					N(R) {
						this.w.trace("[Working Copy History Service]", R);
					}
				}
				e.$F5c = D;
				let M = class extends r.$1c {
					static {
						k = this;
					}
					static {
						this.a = S.$p1.registerSource(
							"moved.source",
							(0, t.localize)(13150, null),
						);
					}
					static {
						this.b = S.$p1.registerSource(
							"renamed.source",
							(0, t.localize)(13151, null),
						);
					}
					constructor(R, O, B, U, z, F, x) {
						super(),
							(this.r = R),
							(this.s = O),
							(this.t = B),
							(this.u = U),
							(this.w = z),
							(this.y = F),
							(this.z = x),
							(this.c = this.D(new i.$re())),
							(this.onDidAddEntry = this.c.event),
							(this.f = this.D(new i.$re())),
							(this.onDidChangeEntry = this.f.event),
							(this.g = this.D(new i.$re())),
							(this.onDidReplaceEntry = this.g.event),
							(this.h = this.D(new i.$re())),
							(this.onDidMoveEntries = this.h.event),
							(this.j = this.D(new i.$re())),
							(this.onDidRemoveEntry = this.j.event),
							(this.m = this.D(new i.$re())),
							(this.onDidRemoveEntries = this.m.event),
							(this.n = new n.$0h()),
							(this.q = new s.$Gc((H) => this.u.extUri.getComparisonKey(H))),
							this.C();
					}
					async C() {
						let R;
						try {
							const O = await this.s.getEnvironment();
							O && (R = O.localHistoryHome);
						} catch (O) {
							this.y.trace(O);
						}
						R || (R = this.t.localHistoryHome), this.n.complete(R);
					}
					async moveEntries(R, O) {
						const B = new n.$Sh(u.$b2c),
							U = [];
						for (const [F, x] of this.q) {
							if (!this.u.extUri.isEqualOrParent(F, R)) continue;
							let H;
							if (this.u.extUri.isEqual(R, F)) H = O;
							else {
								const V = (0, f.$Sg)(F.path, R.path);
								H = (0, g.$nh)(O, F.path.substr(V + R.path.length + 1));
							}
							let q;
							this.u.extUri.isEqual((0, g.$mh)(F), (0, g.$mh)(H))
								? (q = k.b)
								: (q = k.a),
								U.push(B.queue(() => this.F(x, q, F, H)));
						}
						if (!U.length) return [];
						const z = await Promise.all(U);
						return this.h.fire(), z;
					}
					async F(R, O, B, U) {
						const z = await this.G(U);
						return (
							await R.moveEntries(z, O, b.CancellationToken.None),
							this.q.delete(B),
							this.q.set(U, R),
							U
						);
					}
					async addEntry({ resource: R, source: O, timestamp: B }, U) {
						if (!this.r.hasProvider(R)) return;
						const z = await this.G(R);
						if (!U.isCancellationRequested) return z.addEntry(O, void 0, B, U);
					}
					async updateEntry(R, O, B) {
						const U = await this.G(R.workingCopy.resource);
						if (!B.isCancellationRequested) return U.updateEntry(R, O, B);
					}
					async removeEntry(R, O) {
						const B = await this.G(R.workingCopy.resource);
						return O.isCancellationRequested ? !1 : B.removeEntry(R, O);
					}
					async removeAll(R) {
						const O = await this.n.p;
						R.isCancellationRequested ||
							(this.q.clear(),
							await this.r.del(O, { recursive: !0 }),
							this.m.fire());
					}
					async getEntries(R, O) {
						const B = await this.G(R);
						return O.isCancellationRequested
							? []
							: ((await B.getEntries()) ?? []);
					}
					async getAll(R) {
						const O = await this.n.p;
						if (R.isCancellationRequested) return [];
						const B = new s.$Gc();
						for (const [U, z] of this.q)
							(await z.hasEntries(!0)) && B.set(U, !0);
						try {
							const U = await this.r.resolve(O);
							if (U.children) {
								const z = new n.$Sh(u.$b2c),
									F = [];
								for (const x of U.children)
									F.push(
										z.queue(async () => {
											if (!R.isCancellationRequested)
												try {
													const H = JSON.parse(
														(
															await this.r.readFile(
																(0, g.$nh)(x.resource, D.ENTRIES_FILE),
															)
														).value.toString(),
													);
													H.entries.length > 0 &&
														B.set(c.URI.parse(H.resource), !0);
												} catch {}
										}),
									);
								await Promise.all(F);
							}
						} catch {}
						return Array.from(B.keys());
					}
					async G(R) {
						const O = await this.n.p;
						let B = this.q.get(R);
						return (
							B ||
								((B = new D(
									R,
									O,
									this.c,
									this.f,
									this.g,
									this.j,
									this.H(),
									this.r,
									this.w,
									this.y,
									this.z,
								)),
								this.q.set(R, B)),
							B
						);
					}
				};
				(e.$G5c = M),
					(e.$G5c =
						M =
						k =
							Ne(
								[
									j(0, a.$ll),
									j(1, h.$$m),
									j(2, p.$r8),
									j(3, l.$Vl),
									j(4, y.$3N),
									j(5, v.$ik),
									j(6, I.$gj),
								],
								M,
							));
				let N = class extends M {
					static {
						L = this;
					}
					static {
						this.I = 5 * 60 * 1e3;
					}
					constructor(R, O, B, U, z, F, x, H) {
						super(R, O, B, U, z, x, H),
							(this.N = F),
							(this.J = typeof this.t.remoteAuthority == "string"),
							(this.L = this.D(new b.$Ce())),
							(this.M = this.D(new n.$Yh(() => this.S(this.L.token), L.I))),
							this.O();
					}
					O() {
						this.J ||
							(this.D(this.N.onWillShutdown((R) => this.Q(R))),
							this.D(
								i.Event.any(
									this.onDidAddEntry,
									this.onDidChangeEntry,
									this.onDidReplaceEntry,
									this.onDidRemoveEntry,
								)(() => this.R()),
							));
					}
					H() {
						return { flushOnChange: this.J };
					}
					Q(R) {
						this.M.dispose(),
							this.L.dispose(!0),
							R.join(this.S(R.token), {
								id: "join.workingCopyHistory",
								label: (0, t.localize)(13152, null),
							});
					}
					R() {
						this.M.isScheduled() || this.M.schedule();
					}
					async S(R) {
						const O = new n.$Sh(u.$b2c),
							B = [],
							U = Array.from(this.q.values());
						for (const z of U)
							B.push(
								O.queue(async () => {
									if (!R.isCancellationRequested)
										try {
											await z.store(R);
										} catch (F) {
											this.y.trace(F);
										}
								}),
							);
						await Promise.all(B);
					}
				};
				(e.$H5c = N),
					(e.$H5c =
						N =
						L =
							Ne(
								[
									j(0, a.$ll),
									j(1, h.$$m),
									j(2, p.$r8),
									j(3, l.$Vl),
									j(4, y.$3N),
									j(5, d.$n6),
									j(6, v.$ik),
									j(7, I.$gj),
								],
								N,
							)),
					E.$Io
						.as(C.Extensions.Workbench)
						.registerWorkbenchContribution(m.$E5c, d.LifecyclePhase.Restored);
			},
		),
		define(
			de[3915],
			he([
				1, 0, 4, 335, 170, 227, 334, 52, 57, 25, 12, 22, 110, 3854, 34, 18, 44,
				113, 33, 84, 15, 403, 66,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Wdd = void 0);
				let $ = class extends c.$z5c {
					static {
						this.ID = "workbench.contrib.nativeWorkingCopyBackupTracker";
					}
					constructor(S, I, T, P, k, L, D, M, N, A, R, O, B, U) {
						super(S, T, N, P, I, O, B, U),
							(this.Y = k),
							(this.Z = L),
							(this.$ = D),
							(this.ab = M),
							(this.bb = A),
							(this.cb = R);
					}
					async q(S) {
						this.O();
						const { resume: I } = this.P();
						try {
							const T = this.b.modifiedWorkingCopies;
							return T.length ? await this.eb(S, T) : await this.nb();
						} finally {
							I();
						}
					}
					async eb(S, I) {
						const T = I.filter(
							(P) =>
								!(P.capabilities & C.WorkingCopyCapabilities.Untitled) &&
								this.g.getAutoSaveMode(P.resource).mode !== w.AutoSaveMode.OFF,
						);
						if (T.length > 0) {
							try {
								await this.lb(T, p.SaveReason.AUTO);
							} catch (k) {
								this.c.error(
									`[backup tracker] error saving modified working copies: ${k}`,
								);
							}
							const P = this.b.modifiedWorkingCopies;
							return P.length ? this.fb(P, S) : this.ob([...I]);
						}
						return this.fb(I, S);
					}
					async fb(S, I) {
						let T = [],
							P;
						const k = await this.gb(I, S);
						if (k.length > 0)
							try {
								const D = await this.jb(k);
								if (((T = D.backups), (P = D.error), T.length === S.length))
									return !1;
							} catch (D) {
								P = D;
							}
						const L = S.filter((D) => !T.includes(D));
						if (P)
							return this.bb.isExtensionDevelopment
								? (this.c.error(
										`[backup tracker] error creating backups: ${P}`,
									),
									!1)
								: this.hb((0, t.localize)(13155, null), L, P, I);
						try {
							return await this.kb(L);
						} catch (D) {
							return this.bb.isExtensionDevelopment
								? (this.c.error(
										`[backup tracker] error saving or reverting modified working copies: ${D}`,
									),
									!1)
								: this.hb((0, t.localize)(13156, null), L, D, I);
						}
					}
					async gb(S, I) {
						if (!this.g.isHotExitEnabled) return [];
						if (this.bb.isExtensionDevelopment) return I;
						switch (S) {
							case d.ShutdownReason.CLOSE:
								return this.$.getWorkbenchState() !== r.WorkbenchState.EMPTY &&
									this.g.hotExitConfiguration === a.$Kl.ON_EXIT_AND_WINDOW_CLOSE
									? I
									: u.$m || (await this.ab.getWindowCount()) > 1
										? this.$.getWorkbenchState() !== r.WorkbenchState.EMPTY
											? I.filter(
													(T) =>
														T.capabilities &
														C.WorkingCopyCapabilities.Scratchpad,
												)
											: []
										: I;
							case d.ShutdownReason.QUIT:
								return I;
							case d.ShutdownReason.RELOAD:
								return I;
							case d.ShutdownReason.LOAD:
								return this.$.getWorkbenchState() !== r.WorkbenchState.EMPTY
									? this.g.hotExitConfiguration ===
										a.$Kl.ON_EXIT_AND_WINDOW_CLOSE
										? I
										: I.filter(
												(T) =>
													T.capabilities & C.WorkingCopyCapabilities.Scratchpad,
											)
									: [];
						}
					}
					async hb(S, I, T, P) {
						this.c.error(`[backup tracker] ${S}: ${T}`);
						const k = I.filter((N) => N.isModified()),
							L = (0, t.localize)(13157, null),
							D = k.length
								? `${(0, m.$JO)(k.map((N) => N.name))}
${L}`
								: L,
							{ result: M } = await this.Z.prompt({
								type: "error",
								message: S,
								detail: D,
								buttons: [
									{ label: (0, t.localize)(13158, null), run: () => !0 },
									{ label: this.ib(P), run: () => !1 },
								],
							});
						return M ?? !0;
					}
					ib(S) {
						switch (S) {
							case d.ShutdownReason.CLOSE:
							case d.ShutdownReason.LOAD:
								return (0, t.localize)(13159, null);
							case d.ShutdownReason.QUIT:
								return (0, t.localize)(13160, null);
							case d.ShutdownReason.RELOAD:
								return (0, t.localize)(13161, null);
						}
					}
					async jb(S) {
						const I = [];
						let T;
						return (
							await this.qb(
								async (P) => {
									try {
										await s.Promises.settled(
											S.map(async (k) => {
												const L = this.I(k);
												if (this.a.hasBackupSync(k, L)) I.push(k);
												else {
													const D = await k.backup(P);
													if (
														P.isCancellationRequested ||
														(await this.a.backup(k, D.content, L, D.meta, P),
														P.isCancellationRequested)
													)
														return;
													I.push(k);
												}
											}),
										);
									} catch (k) {
										T = k;
									}
								},
								(0, t.localize)(13162, null),
								(0, t.localize)(13163, null),
							),
							{ backups: I, error: T }
						);
					}
					async kb(S) {
						const I = await this.Y.showSaveConfirm(S.map((T) => T.name));
						if (I === m.ConfirmResult.SAVE) {
							const T = this.b.modifiedCount;
							try {
								await this.lb(S, p.SaveReason.EXPLICIT);
							} catch (k) {
								this.c.error(
									`[backup tracker] error saving modified working copies: ${k}`,
								);
							}
							return T - this.b.modifiedCount < S.length ? !0 : this.ob(S);
						} else if (I === m.ConfirmResult.DONT_SAVE) {
							try {
								await this.mb(S);
							} catch (T) {
								this.c.error(
									`[backup tracker] error reverting modified working copies: ${T}`,
								);
							}
							return this.ob(S);
						}
						return !0;
					}
					lb(S, I) {
						return this.qb(
							async () => {
								const T = { skipSaveParticipants: !0, reason: I };
								let P;
								S.length === this.b.modifiedCount &&
									(P = (
										await this.j.saveAll({
											includeUntitled: { includeScratchpad: !0 },
											...T,
										})
									).success),
									P !== !1 &&
										(await s.Promises.settled(
											S.map((k) =>
												k.isModified() ? k.save(T) : Promise.resolve(!0),
											),
										));
							},
							(0, t.localize)(13164, null),
							void 0,
							S.some(
								(T) =>
									T.capabilities & C.WorkingCopyCapabilities.Untitled ||
									T.capabilities & C.WorkingCopyCapabilities.Scratchpad,
							)
								? b.ProgressLocation.Window
								: b.ProgressLocation.Dialog,
						);
					}
					mb(S) {
						return this.qb(
							async () => {
								const I = { soft: !0 };
								S.length === this.b.modifiedCount &&
									(await this.j.revertAll(I)),
									await s.Promises.settled(
										S.map((T) =>
											T.isModified() ? T.revert(I) : Promise.resolve(),
										),
									);
							},
							(0, t.localize)(13165, null),
						);
					}
					nb() {
						return this.ob({
							except:
								this.$.getWorkbenchState() === r.WorkbenchState.EMPTY
									? []
									: Array.from(this.Q),
						});
					}
					async ob(S) {
						return await this.pb(S), !1;
					}
					async pb(S) {
						this.U &&
							(await this.qb(
								async () => {
									try {
										Array.isArray(S)
											? await s.Promises.settled(
													S.map((I) => this.a.discardBackup(I)),
												)
											: await this.a.discardBackups(S);
									} catch (I) {
										this.c.error(
											`[backup tracker] error discarding backups: ${I}`,
										);
									}
								},
								(0, t.localize)(13166, null),
							));
					}
					qb(S, I, T, P = b.ProgressLocation.Dialog) {
						const k = new f.$Ce();
						return this.cb.withProgress(
							{ location: P, cancellable: !0, delay: 800, title: I, detail: T },
							() => (0, s.$Ah)(S(k.token), k.token),
							() => k.dispose(!0),
						);
					}
				};
				(e.$Wdd = $),
					(e.$Wdd = $ =
						Ne(
							[
								j(0, i.$WO),
								j(1, w.$_Y),
								j(2, E.$gY),
								j(3, d.$n6),
								j(4, m.$IO),
								j(5, m.$GO),
								j(6, r.$Vi),
								j(7, h.$y7c),
								j(8, n.$ik),
								j(9, o.$Ti),
								j(10, b.$8N),
								j(11, l.$bZ),
								j(12, g.$IY),
								j(13, y.$EY),
							],
							$,
						));
			},
		),
		define(
			de[3916],
			he([1, 0, 4, 1912, 9, 20, 335, 22, 34, 151, 55, 52, 3915]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Xdd = void 0);
				let c = class extends i.$w5c {
					constructor(g, p, o, f) {
						super(
							g.backupPath
								? w.URI.file(g.backupPath).with({
										scheme: g.userRoamingDataHome.scheme,
									})
								: void 0,
							p,
							o,
						),
							(this.c = f),
							this.j();
					}
					j() {
						this.D(
							this.c.onWillShutdown((g) =>
								g.join(this.joinBackups(), {
									id: "join.workingCopyBackups",
									label: (0, t.localize)(13154, null),
								}),
							),
						);
					}
				};
				(e.$Xdd = c),
					(e.$Xdd = c =
						Ne([j(0, r.$ucd), j(1, d.$ll), j(2, m.$ik), j(3, a.$n6)], c)),
					(0, E.$lK)(C.$WO, c, E.InstantiationType.Eager),
					(0, u.$s6)(h.$Wdd.ID, h.$Wdd, u.WorkbenchPhase.BlockStartup);
			},
		),
		
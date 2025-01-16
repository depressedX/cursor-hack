define(
			de[3891],
			he([
				1, 0, 50, 6, 26, 4, 5, 32, 129, 133, 3, 9, 82, 416, 1902, 1922, 1921,
				1924, 1923, 14, 57, 1613, 22, 47, 15, 87, 33, 247, 18, 31, 10, 224, 59,
				29, 12, 62, 41,
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
					(e.$q1c = e.$p1c = e.$o1c = e.$n1c = void 0),
					(e.$l1c = U),
					(e.$m1c = z);
				function U(G) {
					return G.resourceType !== void 0;
				}
				function z(G) {
					return G.label !== void 0;
				}
				let F = class extends u.$1c {
					constructor(K, J, W, X, Y, ie, ne, ee) {
						super(),
							(this.g = Y),
							(this.h = ie),
							(this.j = ne),
							(this.m = ee),
							(this.c = this.D(new i.$re())),
							(this.onDidChange = this.c.event),
							(this.f = this.D(new v.$Yh(() => this.H(), 500))),
							(this.n = ""),
							(this.t = !1),
							(this.w = !1),
							(this.n = K),
							(this.q = J),
							(this.s = W),
							(this.t = X),
							this.D(
								this.onDidChange((_) => {
									_.message || this.validate(), this.save();
								}),
							);
					}
					get name() {
						return this.n;
					}
					set name(K) {
						(K = K.trim()),
							this.n !== K && ((this.n = K), this.c.fire({ name: !0 }));
					}
					get icon() {
						return this.q;
					}
					set icon(K) {
						this.q !== K && ((this.q = K), this.c.fire({ icon: !0 }));
					}
					get flags() {
						return this.s;
					}
					set flags(K) {
						(0, h.$zo)(this.s, K) || ((this.s = K), this.c.fire({ flags: !0 }));
					}
					get active() {
						return this.t;
					}
					set active(K) {
						this.t !== K && ((this.t = K), this.c.fire({ active: !0 }));
					}
					get message() {
						return this.u;
					}
					set message(K) {
						this.u !== K && ((this.u = K), this.c.fire({ message: !0 }));
					}
					get disabled() {
						return this.w;
					}
					set disabled(K) {
						this.w !== K && ((this.w = K), this.c.fire({ disabled: !0 }));
					}
					getFlag(K) {
						return this.flags?.[K] ?? !1;
					}
					setFlag(K, J) {
						const W = this.flags ? { ...this.flags } : {};
						J ? (W[K] = !0) : delete W[K], (this.flags = W);
					}
					validate() {
						if (!this.name) {
							this.message = (0, E.localize)(11208, null);
							return;
						}
						if (
							this.shouldValidateName() &&
							this.name !== this.getInitialName() &&
							this.h.profiles.some((K) => K.name === this.name)
						) {
							this.message = (0, E.localize)(11209, null, this.name);
							return;
						}
						if (
							this.flags &&
							this.flags.settings &&
							this.flags.keybindings &&
							this.flags.tasks &&
							this.flags.snippets &&
							this.flags.extensions
						) {
							this.message = (0, E.localize)(11210, null);
							return;
						}
						this.message = void 0;
					}
					async getChildren(K) {
						if (K === void 0) {
							const J = [
								m.ProfileResourceType.Settings,
								m.ProfileResourceType.Keybindings,
								m.ProfileResourceType.Tasks,
								m.ProfileResourceType.Snippets,
								m.ProfileResourceType.Extensions,
							];
							return Promise.all(
								J.map(async (W) => {
									const X =
										W === m.ProfileResourceType.Settings ||
										W === m.ProfileResourceType.Keybindings ||
										W === m.ProfileResourceType.Tasks
											? await this.y(W)
											: [];
									return {
										handle: W,
										checkbox: void 0,
										resourceType: W,
										action: X.length
											? new t.$rj(
													"_open",
													(0, E.localize)(11211, null),
													w.ThemeIcon.asClassName(b.$ak.goToFile),
													!0,
													() => X[0]?.action?.run(),
												)
											: void 0,
									};
								}),
							);
						}
						return this.y(K);
					}
					async y(K) {
						return [];
					}
					async z(K, J) {
						K = this.getFlag(J) ? this.h.defaultProfile : K;
						let W = [];
						switch (J) {
							case m.ProfileResourceType.Settings:
								W = await this.m.createInstance(g.$Twc, K).getChildren();
								break;
							case m.ProfileResourceType.Keybindings:
								W = await this.m.createInstance(p.$Wwc, K).getChildren();
								break;
							case m.ProfileResourceType.Snippets:
								W =
									(await this.m.createInstance(f.$Zwc, K).getChildren()) ?? [];
								break;
							case m.ProfileResourceType.Tasks:
								W = await this.m.createInstance(o.$3wc, K).getChildren();
								break;
							case m.ProfileResourceType.Extensions:
								W = await this.m.createInstance(n.$dxc, K).getChildren();
								break;
						}
						return W.map((X) => this.C(X));
					}
					C(K) {
						return {
							handle: K.handle,
							checkbox: K.checkbox,
							label: K.label?.label ?? "",
							resource: a.URI.revive(K.resourceUri),
							icon: K.themeIcon,
							action: new t.$rj(
								"_openChild",
								(0, E.localize)(11212, null),
								w.ThemeIcon.asClassName(b.$ak.goToFile),
								!0,
								async () => {
									K.parent.type === m.ProfileResourceType.Extensions
										? await this.j.executeCommand(
												"extension.open",
												K.handle,
												void 0,
												!0,
												void 0,
												!0,
											)
										: K.resourceUri &&
											(await this.j.executeCommand(
												T.$zWb,
												K.resourceUri,
												[P.$KY],
												void 0,
											));
								},
							),
						};
					}
					getInitialName() {
						return "";
					}
					shouldValidateName() {
						return !0;
					}
					save() {
						this.f.schedule();
					}
					F(K) {
						return (
							this.name !== K.name ||
							this.icon !== K.icon ||
							!(0, h.$zo)(this.flags ?? {}, K.useDefaultFlags ?? {})
						);
					}
					async G(K) {
						if (!this.F(K) || (this.validate(), this.message)) return;
						const J = this.flags
							? this.flags.settings &&
								this.flags.keybindings &&
								this.flags.tasks &&
								this.flags.globalState &&
								this.flags.extensions
								? void 0
								: this.flags
							: void 0;
						return await this.g.updateProfile(K, {
							name: this.name,
							icon: this.icon,
							useDefaultFlags: K.useDefaultFlags && !J ? {} : J,
						});
					}
				};
				(e.$n1c = F),
					(e.$n1c = F =
						Ne([j(4, r.$Q8), j(5, m.$Xl), j(6, k.$ek), j(7, C.$Li)], F));
				let x = class extends F {
					get profile() {
						return this.I;
					}
					constructor(K, J, W, X, Y, ie, ne, ee, _) {
						super(
							K.name,
							K.icon,
							K.useDefaultFlags,
							X.currentProfile.id === K.id,
							ie,
							ne,
							ee,
							_,
						),
							(this.I = K),
							(this.titleButtons = J),
							(this.actions = W),
							(this.J = X),
							(this.L = Y),
							(this.M = !1),
							(this.M = this.L.getValue(D.$C6) === this.profile.name),
							this.D(
								Y.onDidChangeConfiguration((te) => {
									te.affectsConfiguration(D.$C6) &&
										(this.isNewWindowProfile =
											this.L.getValue(D.$C6) === this.profile.name);
								}),
							),
							this.D(
								this.J.onDidChangeCurrentProfile(
									() =>
										(this.active =
											this.J.currentProfile.id === this.profile.id),
								),
							),
							this.D(
								this.h.onDidChangeProfiles(({ updated: te }) => {
									const Q = te.find((Z) => Z.id === this.profile.id);
									Q &&
										((this.I = Q), this.reset(), this.c.fire({ profile: !0 }));
								}),
							);
					}
					reset() {
						(this.name = this.I.name),
							(this.icon = this.I.icon),
							(this.flags = this.I.useDefaultFlags);
					}
					async toggleNewWindowProfile() {
						this.M
							? await this.L.updateValue(D.$C6, null)
							: await this.L.updateValue(D.$C6, this.profile.name);
					}
					get isNewWindowProfile() {
						return this.M;
					}
					set isNewWindowProfile(K) {
						this.M !== K &&
							((this.M = K), this.c.fire({ newWindowProfile: !0 }));
					}
					async toggleCurrentWindowProfile() {
						this.J.currentProfile.id === this.profile.id
							? await this.g.switchProfile(this.h.defaultProfile)
							: await this.g.switchProfile(this.profile);
					}
					async H() {
						await this.G(this.profile);
					}
					async y(K) {
						return this.z(this.profile, K);
					}
					getInitialName() {
						return this.profile.name;
					}
				};
				(e.$o1c = x),
					(e.$o1c = x =
						Ne(
							[
								j(3, r.$P8),
								j(4, L.$gj),
								j(5, r.$Q8),
								j(6, m.$Xl),
								j(7, k.$ek),
								j(8, C.$Li),
							],
							x,
						));
				const H = "userdataprofiletemplatepreview";
				let q = class extends F {
					get copyFromTemplates() {
						return this.I;
					}
					constructor(K, J, W, X, Y, ie, ne, ee, _, te) {
						super(K, void 0, void 0, !1, ne, ee, _, te),
							(this.titleButtons = W),
							(this.actions = X),
							(this.O = Y),
							(this.P = ie),
							(this.I = new M.$Gc()),
							(this.L = null),
							(this.M = K),
							(this.Q = J),
							(this.R = this.U(J)),
							this.W(),
							this.D(this.O.registerProvider(H, this.D(new l.$kxc())));
					}
					get copyFrom() {
						return this.Q;
					}
					set copyFrom(K) {
						this.Q !== K &&
							((this.Q = K),
							this.c.fire({ copyFrom: !0 }),
							(this.flags = void 0),
							(this.copyFlags = this.U(K)),
							K instanceof a.URI && (this.J?.cancel(), (this.J = void 0)),
							this.W());
					}
					get copyFlags() {
						return this.R;
					}
					set copyFlags(K) {
						(0, h.$zo)(this.R, K) ||
							((this.R = K), this.c.fire({ copyFlags: !0 }));
					}
					get previewProfile() {
						return this.S;
					}
					set previewProfile(K) {
						this.S !== K && ((this.S = K), this.c.fire({ preview: !0 }));
					}
					U(K) {
						return K
							? {
									settings: !0,
									keybindings: !0,
									snippets: !0,
									tasks: !0,
									extensions: !0,
								}
							: void 0;
					}
					async W() {
						this.disabled = !0;
						try {
							if (this.copyFrom instanceof a.URI) {
								await this.resolveTemplate(this.copyFrom),
									this.L &&
										(this.copyFromTemplates.set(this.copyFrom, this.L.name),
										this.M === this.name &&
											(this.name = this.M = this.L.name ?? ""),
										this.N === this.icon && (this.icon = this.N = this.L.icon),
										this.setCopyFlag(
											m.ProfileResourceType.Settings,
											!!this.L.settings,
										),
										this.setCopyFlag(
											m.ProfileResourceType.Keybindings,
											!!this.L.keybindings,
										),
										this.setCopyFlag(
											m.ProfileResourceType.Tasks,
											!!this.L.tasks,
										),
										this.setCopyFlag(
											m.ProfileResourceType.Snippets,
											!!this.L.snippets,
										),
										this.setCopyFlag(
											m.ProfileResourceType.Extensions,
											!!this.L.extensions,
										),
										this.c.fire({ copyFromInfo: !0 }));
								return;
							}
							if ((0, m.$Wl)(this.copyFrom)) {
								this.M === this.name &&
									(this.name = this.M =
										(0, E.localize)(11213, null, this.copyFrom.name)),
									this.N === this.icon &&
										(this.icon = this.N = this.copyFrom.icon),
									this.setCopyFlag(m.ProfileResourceType.Settings, !0),
									this.setCopyFlag(m.ProfileResourceType.Keybindings, !0),
									this.setCopyFlag(m.ProfileResourceType.Tasks, !0),
									this.setCopyFlag(m.ProfileResourceType.Snippets, !0),
									this.setCopyFlag(m.ProfileResourceType.Extensions, !0),
									this.c.fire({ copyFromInfo: !0 });
								return;
							}
							this.M === this.name &&
								(this.name = this.M = (0, E.localize)(11214, null)),
								this.N === this.icon && (this.icon = this.N = void 0),
								this.setCopyFlag(m.ProfileResourceType.Settings, !1),
								this.setCopyFlag(m.ProfileResourceType.Keybindings, !1),
								this.setCopyFlag(m.ProfileResourceType.Tasks, !1),
								this.setCopyFlag(m.ProfileResourceType.Snippets, !1),
								this.setCopyFlag(m.ProfileResourceType.Extensions, !1),
								this.c.fire({ copyFromInfo: !0 });
						} finally {
							this.disabled = !1;
						}
					}
					async resolveTemplate(K) {
						return (
							this.J ||
								(this.J = (0, v.$zh)(async (J) => {
									const W = await this.P.resolveProfileTemplate(K);
									J.isCancellationRequested || (this.L = W);
								})),
							await this.J,
							this.L
						);
					}
					hasResource(K) {
						if (this.L)
							switch (K) {
								case m.ProfileResourceType.Settings:
									return !!this.L.settings;
								case m.ProfileResourceType.Keybindings:
									return !!this.L.keybindings;
								case m.ProfileResourceType.Snippets:
									return !!this.L.snippets;
								case m.ProfileResourceType.Tasks:
									return !!this.L.tasks;
								case m.ProfileResourceType.Extensions:
									return !!this.L.extensions;
							}
						return !0;
					}
					getCopyFlag(K) {
						return this.copyFlags?.[K] ?? !1;
					}
					setCopyFlag(K, J) {
						const W = this.copyFlags ? { ...this.copyFlags } : {};
						(W[K] = J), (this.copyFlags = W);
					}
					getCopyFromName() {
						if ((0, m.$Wl)(this.copyFrom)) return this.copyFrom.name;
						if (this.copyFrom instanceof a.URI)
							return this.copyFromTemplates.get(this.copyFrom);
					}
					async y(K) {
						return this.getFlag(K)
							? this.z(this.h.defaultProfile, K)
							: this.getCopyFlag(K)
								? this.copyFrom instanceof a.URI
									? (await this.resolveTemplate(this.copyFrom),
										this.L ? this.Y(this.L, K) : [])
									: this.copyFrom
										? this.z(this.copyFrom, K)
										: []
								: [];
					}
					async Y(K, J) {
						const W = (0, m.$Zl)(
							(0, $.$9g)(),
							this.name,
							a.URI.file("/root").with({ scheme: H }),
							a.URI.file("/cache").with({ scheme: H }),
						);
						switch (J) {
							case m.ProfileResourceType.Settings:
								return K.settings
									? (await this.m.createInstance(g.$Swc).apply(K.settings, W),
										this.z(W, J))
									: [];
							case m.ProfileResourceType.Keybindings:
								return K.keybindings
									? (await this.m
											.createInstance(p.$Vwc)
											.apply(K.keybindings, W),
										this.z(W, J))
									: [];
							case m.ProfileResourceType.Snippets:
								return K.snippets
									? (await this.m.createInstance(f.$Ywc).apply(K.snippets, W),
										this.z(W, J))
									: [];
							case m.ProfileResourceType.Tasks:
								return K.tasks
									? (await this.m.createInstance(o.$2wc).apply(K.tasks, W),
										this.z(W, J))
									: [];
							case m.ProfileResourceType.Extensions:
								return K.extensions
									? (
											await this.m
												.createInstance(n.$exc, K.extensions)
												.getChildren()
										).map((Y) => this.C(Y))
									: [];
						}
						return [];
					}
					shouldValidateName() {
						return !this.copyFrom;
					}
					getInitialName() {
						return this.previewProfile?.name ?? "";
					}
					async H() {
						if (this.previewProfile) {
							const K = await this.G(this.previewProfile);
							K && (this.previewProfile = K);
						}
					}
				};
				(e.$p1c = q),
					(e.$p1c = q =
						Ne(
							[
								j(4, y.$ll),
								j(5, r.$W8),
								j(6, r.$Q8),
								j(7, m.$Xl),
								j(8, k.$ek),
								j(9, C.$Li),
							],
							q,
						));
				let V = class extends c.$PO {
					static {
						B = this;
					}
					static getInstance(K) {
						return B.c || (B.c = K.createInstance(B)), B.c;
					}
					get profiles() {
						return this.g
							.map(([K]) => K)
							.sort((K, J) =>
								K instanceof q
									? 1
									: J instanceof q || (K instanceof x && K.profile.isDefault)
										? -1
										: J instanceof x && J.profile.isDefault
											? 1
											: K.name.localeCompare(J.name),
							);
					}
					constructor(K, J, W, X, Y, ie, ne, ee, _, te) {
						super(),
							(this.q = K),
							(this.s = J),
							(this.t = W),
							(this.u = X),
							(this.w = Y),
							(this.y = ie),
							(this.z = ne),
							(this.C = ee),
							(this.F = _),
							(this.G = te),
							(this.g = []),
							(this.m = this.D(new i.$re())),
							(this.onDidChange = this.m.event);
						for (const Q of J.profiles) Q.isTransient || this.g.push(this.I(Q));
						this.D(
							(0, u.$Yc)(() =>
								this.g.splice(0, this.g.length).map(([, Q]) => Q.dispose()),
							),
						),
							this.D(J.onDidChangeProfiles((Q) => this.H(Q)));
					}
					H(K) {
						let J = !1;
						for (const W of K.added)
							!W.isTransient &&
								W.name !== this.j?.name &&
								((J = !0), this.g.push(this.I(W)));
						for (const W of K.removed) {
							W.id === this.j?.previewProfile?.id &&
								(this.j.previewProfile = void 0);
							const X = this.g.findIndex(
								([Y]) => Y instanceof x && Y.profile.id === W.id,
							);
							X !== -1 &&
								((J = !0), this.g.splice(X, 1).map(([, Y]) => Y.dispose()));
						}
						J && this.m.fire(void 0);
					}
					getTemplates() {
						return (
							this.n || (this.n = this.t.getBuiltinProfileTemplates()), this.n
						);
					}
					I(K) {
						const J = new u.$Zc(),
							W = J.add(
								new t.$rj(
									"userDataProfile.activate",
									(0, E.localize)(11215, null),
									w.ThemeIcon.asClassName(b.$ak.check),
									!0,
									() => this.t.switchProfile(te.profile),
								),
							),
							X = J.add(
								new t.$rj(
									"userDataProfile.copyFromProfile",
									(0, E.localize)(11216, null),
									w.ThemeIcon.asClassName(b.$ak.copy),
									!0,
									() => this.createNewProfile(te.profile),
								),
							),
							Y = J.add(
								new t.$rj(
									"userDataProfile.export",
									(0, E.localize)(11217, null),
									w.ThemeIcon.asClassName(b.$ak.export),
									!0,
									() => this.u.exportProfile(K),
								),
							),
							ie = J.add(
								new t.$rj(
									"userDataProfile.delete",
									(0, E.localize)(11218, null),
									w.ThemeIcon.asClassName(b.$ak.trash),
									!0,
									() => this.O(te.profile),
								),
							),
							ne = J.add(
								new t.$rj(
									"userDataProfile.newWindow",
									(0, E.localize)(11219, null),
									w.ThemeIcon.asClassName(b.$ak.emptyWindow),
									!0,
									() => this.P(te.profile),
								),
							),
							ee = [];
						ee.push(W), ee.push(ne);
						const _ = [];
						_.push(X),
							_.push(Y),
							K.isDefault || (_.push(new t.$tj()), _.push(ie));
						const te = J.add(this.G.createInstance(x, K, [[], []], [ee, _]));
						return (
							(W.enabled = this.q.currentProfile.id !== te.profile.id),
							J.add(
								this.q.onDidChangeCurrentProfile(
									() =>
										(W.enabled = this.q.currentProfile.id !== te.profile.id),
								),
							),
							[te, J]
						);
					}
					async createNewProfile(K) {
						if (this.j) {
							if (
								!(
									await this.w.confirm({
										type: "info",
										message: (0, E.localize)(11220, null),
										primaryButton: (0, E.localize)(11221, null),
										cancelButton: (0, E.localize)(11222, null),
									})
								).confirmed
							)
								return;
							this.revert();
						}
						if (K instanceof a.URI)
							try {
								await this.u.resolveProfileTemplate(K);
							} catch (J) {
								this.w.error((0, N.$bb)(J));
								return;
							}
						if (!this.j) {
							const J = new u.$Zc(),
								W = new I.$Ce();
							J.add((0, u.$Yc)(() => W.dispose(!0)));
							const X = [],
								Y = [],
								ie = J.add(
									new t.$rj(
										"userDataProfile.create",
										(0, E.localize)(11223, null),
										void 0,
										!0,
										() => this.saveNewProfile(!1, W.token),
									),
								);
							X.push(ie),
								A.$r &&
									K instanceof a.URI &&
									(0, r.$V8)(K) &&
									X.push(
										new t.$rj(
											"userDataProfile.createInDesktop",
											(0, E.localize)(11224, null, this.C.nameLong),
											void 0,
											!0,
											() => this.F.open(K, { openExternal: !0 }),
										),
									);
							const ne = J.add(
								new t.$rj(
									"userDataProfile.cancel",
									(0, E.localize)(11225, null),
									w.ThemeIcon.asClassName(b.$ak.trash),
									!0,
									() => this.N(),
								),
							);
							Y.push(ne);
							const ee = J.add(
								new t.$rj(
									"userDataProfile.preview",
									(0, E.localize)(11226, null),
									w.ThemeIcon.asClassName(b.$ak.openPreview),
									!0,
									() => this.L(W.token),
								),
							);
							A.$r || Y.push(ee);
							const _ = J.add(
								new t.$rj(
									"userDataProfile.export",
									(0, E.localize)(11227, null),
									w.ThemeIcon.asClassName(b.$ak.export),
									(0, m.$Wl)(K),
									() => this.M(W.token),
								),
							);
							this.j = J.add(
								this.G.createInstance(
									q,
									K ? "" : (0, E.localize)(11228, null),
									K,
									[X, Y],
									[[ne], [_]],
								),
							);
							const te = () => {
								ie.enabled &&
									(this.j?.copyFrom &&
									this.s.profiles.some((Q) => Q.name === this.j?.name)
										? (ie.label = (0, E.localize)(11229, null))
										: (ie.label = (0, E.localize)(11230, null)));
							};
							te(),
								J.add(
									this.j.onDidChange((Q) => {
										Q.preview && (ee.checked = !!this.j?.previewProfile),
											(Q.disabled || Q.message) &&
												(ee.enabled = ie.enabled =
													!this.j?.disabled && !this.j?.message),
											(Q.name || Q.copyFrom) &&
												(te(), (_.enabled = (0, m.$Wl)(this.j?.copyFrom)));
									}),
								),
								J.add(
									this.s.onDidChangeProfiles((Q) => {
										te(), this.j?.validate();
									}),
								),
								this.g.push([this.j, J]),
								this.m.fire(this.j);
						}
						return this.j;
					}
					revert() {
						this.J(), this.m.fire(void 0);
					}
					J() {
						if (this.j) {
							const K = this.g.findIndex(([J]) => J === this.j);
							K !== -1 && this.g.splice(K, 1).map(([, J]) => J.dispose()),
								(this.j = void 0);
						}
					}
					async L(K) {
						if (!this.j || this.j.previewProfile) return;
						const J = await this.saveNewProfile(!0, K);
						J && ((this.j.previewProfile = J), await this.P(J));
					}
					async M(K) {
						if (!this.j || !(0, m.$Wl)(this.j.copyFrom)) return;
						const J = (0, m.$Zl)(
							(0, $.$9g)(),
							this.j.name,
							this.j.copyFrom.location,
							this.j.copyFrom.cacheHome,
							{ icon: this.j.icon, useDefaultFlags: this.j.flags },
							this.s.defaultProfile,
						);
						await this.u.exportProfile(J, this.j.copyFlags);
					}
					async saveNewProfile(K, J) {
						if (!this.j || (this.j.validate(), this.j.message)) return;
						this.j.disabled = !0;
						let W;
						try {
							if (this.j.previewProfile)
								K ||
									(W = await this.t.updateProfile(this.j.previewProfile, {
										transient: !1,
									}));
							else {
								const { flags: X, icon: Y, name: ie, copyFrom: ne } = this.j,
									ee = X
										? X.settings &&
											X.keybindings &&
											X.tasks &&
											X.globalState &&
											X.extensions
											? void 0
											: X
										: void 0,
									_ = {
										source:
											ne instanceof a.URI
												? "template"
												: (0, m.$Wl)(ne)
													? "profile"
													: ne
														? "external"
														: void 0,
									};
								if (ne instanceof a.URI) {
									const te = await this.j.resolveTemplate(ne);
									te &&
										(this.y.publicLog2("userDataProfile.createFromTemplate", _),
										(W = await this.u.createProfileFromTemplate(
											te,
											{
												name: ie,
												useDefaultFlags: ee,
												icon: Y,
												resourceTypeFlags: this.j.copyFlags,
												transient: K,
											},
											J ?? I.CancellationToken.None,
										)));
								} else
									(0, m.$Wl)(ne)
										? (this.y.publicLog2(
												"userDataProfile.createFromProfile",
												_,
											),
											(W = await this.u.createFromProfile(
												ne,
												{
													name: ie,
													useDefaultFlags: ee,
													icon: Y,
													resourceTypeFlags: this.j.copyFlags,
													transient: K,
												},
												J ?? I.CancellationToken.None,
											)))
										: (this.y.publicLog2(
												"userDataProfile.createEmptyProfile",
												_,
											),
											(W = await this.t.createProfile(ie, {
												useDefaultFlags: ee,
												icon: Y,
												transient: K,
											})));
							}
						} finally {
							this.j && (this.j.disabled = !1);
						}
						if (J?.isCancellationRequested) {
							if (W)
								try {
									await this.t.removeProfile(W);
								} catch {}
							return;
						}
						if (W && !W.isTransient && this.j) {
							this.J();
							const X = this.g.find(([Y]) => Y.name === W.name);
							X
								? this.m.fire(X[0])
								: this.H({
										added: [W],
										removed: [],
										updated: [],
										all: this.s.profiles,
									});
						}
						return W;
					}
					async N() {
						this.j &&
							(this.j.previewProfile &&
								(await this.t.removeProfile(this.j.previewProfile)),
							this.J(),
							this.m.fire(void 0));
					}
					async O(K) {
						(
							await this.w.confirm({
								type: "info",
								message: (0, E.localize)(11231, null, K.name),
								primaryButton: (0, E.localize)(11232, null),
								cancelButton: (0, E.localize)(11233, null),
							})
						).confirmed && (await this.t.removeProfile(K));
					}
					async P(K) {
						await this.z.openWindow({ forceProfile: K.name });
					}
				};
				(e.$q1c = V),
					(e.$q1c =
						V =
						B =
							Ne(
								[
									j(0, r.$P8),
									j(1, m.$Xl),
									j(2, r.$Q8),
									j(3, r.$W8),
									j(4, s.$GO),
									j(5, d.$km),
									j(6, S.$asb),
									j(7, R.$Bk),
									j(8, O.$7rb),
									j(9, C.$Li),
								],
								V,
							));
			},
		),
		
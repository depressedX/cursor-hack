define(de[297], he([1, 0, 6, 30, 8, 5]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$q8 =
					e.$p8 =
					e.OutputChannelUpdateMode =
					e.$o8 =
					e.$n8 =
					e.$m8 =
					e.$l8 =
					e.$k8 =
					e.$j8 =
					e.$i8 =
					e.$h8 =
					e.$g8 =
					e.$f8 =
					e.$e8 =
					e.$d8 =
						void 0),
				(e.$d8 = "text/x-code-output"),
				(e.$e8 = "Log"),
				(e.$f8 = "text/x-code-log-output"),
				(e.$g8 = "log"),
				(e.$h8 = "workbench.panel.output"),
				(e.$i8 = new w.$5j("inOutput", !1)),
				(e.$j8 = new w.$5j("activeLogOutput", !1)),
				(e.$k8 = new w.$5j("activeLogOutput.levelSettable", !1)),
				(e.$l8 = new w.$5j("activeLogOutput.level", "")),
				(e.$m8 = new w.$5j("activeLogOutput.levelIsDefault", !1)),
				(e.$n8 = new w.$5j("outputView.scrollLock", !1)),
				(e.$o8 = (0, E.$Mi)("outputService"));
			var C;
			(function (m) {
				(m[(m.Append = 1)] = "Append"),
					(m[(m.Replace = 2)] = "Replace"),
					(m[(m.Clear = 3)] = "Clear");
			})(C || (e.OutputChannelUpdateMode = C = {})),
				(e.$p8 = { OutputChannels: "workbench.contributions.outputChannels" });
			class d {
				constructor() {
					(this.a = new Map()),
						(this.b = new t.$re()),
						(this.onDidRegisterChannel = this.b.event),
						(this.c = new t.$re()),
						(this.onDidRemoveChannel = this.c.event);
				}
				registerChannel(r) {
					this.a.has(r.id) || (this.a.set(r.id, r), this.b.fire(r.id));
				}
				getChannels() {
					const r = [];
					return this.a.forEach((u) => r.push(u)), r;
				}
				getChannel(r) {
					return this.a.get(r);
				}
				removeChannel(r) {
					this.a.delete(r), this.c.fire(r);
				}
			}
			i.$Io.add(e.$p8.OutputChannels, new d()),
				(e.$q8 = new w.$5j("activeOutputChannel", ""));
		}),
		define(
			de[1852],
			he([1, 0, 4, 50, 34, 63, 9, 22, 78, 19, 18, 297, 269, 1019, 14, 26, 3]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				var o;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$IMc = e.$HMc = void 0),
					(t = mt(t));
				let f = class extends i.$rj {
					static {
						o = this;
					}
					static {
						this.ID = "workbench.action.setLogLevel";
					}
					static {
						this.TITLE = t.localize2(7435, "Set Log Level...");
					}
					constructor(l, y, $, v, S, I) {
						super(l, y), (this.c = $), (this.f = v), (this.g = S), (this.h = I);
					}
					async run() {
						const l = await this.r();
						l !== null &&
							((0, w.$kk)(l) ? this.f.setLogLevel(l) : await this.t(l));
					}
					async r() {
						const l = await this.h.getDefaultLogLevels(),
							y = [],
							$ = [],
							v = this.f.getLogLevel();
						for (const I of this.g.getChannelDescriptors()) {
							if (!o.isLevelSettable(I) || !I.file) continue;
							const T = this.f.getLogLevel(I.file) ?? v,
								P = {
									id: I.id,
									resource: I.file,
									label: I.label,
									description: T !== v ? this.L(T) : void 0,
									extensionId: I.extensionId,
								};
							I.extensionId ? y.push(P) : $.push(P);
						}
						const S = [];
						return (
							S.push({ type: "separator", label: t.localize(7424, null) }),
							S.push(...this.y(l.default, this.f.getLogLevel(), !0)),
							y.length &&
								(S.push({ type: "separator", label: t.localize(7425, null) }),
								S.push(...y.sort((I, T) => I.label.localeCompare(T.label)))),
							S.push({ type: "separator", label: t.localize(7426, null) }),
							S.push(...$.sort((I, T) => I.label.localeCompare(T.label))),
							new Promise((I, T) => {
								const P = new p.$Zc(),
									k = P.add(this.c.createQuickPick({ useSeparators: !0 }));
								(k.placeholder = t.localize(7427, null)), (k.items = S);
								let L;
								P.add(
									k.onDidTriggerItemButton((D) => {
										k.hide(), this.h.setDefaultLogLevel(D.item.level);
									}),
								),
									P.add(
										k.onDidAccept((D) => {
											(L = k.selectedItems[0]), k.hide();
										}),
									),
									P.add(
										k.onDidHide(() => {
											const D = L ? (L.level ?? L) : null;
											P.dispose(), I(D);
										}),
									),
									k.show();
							})
						);
					}
					static isLevelSettable(l) {
						return (
							l.log && l.file !== void 0 && l.id !== h.$Up && l.id !== h.$Vp
						);
					}
					async t(l) {
						const y = await this.h.getDefaultLogLevels(),
							$ =
								y.extensions.find(
									(I) => I[0] === l.extensionId?.toLowerCase(),
								)?.[1] ?? y.default,
							v = this.f.getLogLevel(l.resource) ?? $,
							S = this.y($, v, !!l.extensionId);
						return new Promise((I, T) => {
							const P = new p.$Zc(),
								k = P.add(this.c.createQuickPick());
							(k.placeholder = l
								? t.localize(7428, null, l?.label)
								: t.localize(7429, null)),
								(k.items = S),
								(k.activeItems = S.filter(
									(D) => D.level === this.f.getLogLevel(),
								));
							let L;
							P.add(
								k.onDidTriggerItemButton((D) => {
									k.hide(),
										this.h.setDefaultLogLevel(D.item.level, l.extensionId);
								}),
							),
								P.add(
									k.onDidAccept((D) => {
										(L = k.selectedItems[0]), k.hide();
									}),
								),
								P.add(
									k.onDidHide(() => {
										L && this.f.setLogLevel(l.resource, L.level),
											P.dispose(),
											I();
									}),
								),
								k.show();
						});
					}
					y(l, y, $) {
						const v = $
							? {
									iconClass: g.ThemeIcon.asClassName(n.$ak.checkAll),
									tooltip: t.localize(7430, null),
								}
							: void 0;
						return [
							{
								label: this.L(w.LogLevel.Trace, y),
								level: w.LogLevel.Trace,
								description: this.M(w.LogLevel.Trace, l),
								buttons: v && l !== w.LogLevel.Trace ? [v] : void 0,
							},
							{
								label: this.L(w.LogLevel.Debug, y),
								level: w.LogLevel.Debug,
								description: this.M(w.LogLevel.Debug, l),
								buttons: v && l !== w.LogLevel.Debug ? [v] : void 0,
							},
							{
								label: this.L(w.LogLevel.Info, y),
								level: w.LogLevel.Info,
								description: this.M(w.LogLevel.Info, l),
								buttons: v && l !== w.LogLevel.Info ? [v] : void 0,
							},
							{
								label: this.L(w.LogLevel.Warning, y),
								level: w.LogLevel.Warning,
								description: this.M(w.LogLevel.Warning, l),
								buttons: v && l !== w.LogLevel.Warning ? [v] : void 0,
							},
							{
								label: this.L(w.LogLevel.Error, y),
								level: w.LogLevel.Error,
								description: this.M(w.LogLevel.Error, l),
								buttons: v && l !== w.LogLevel.Error ? [v] : void 0,
							},
							{
								label: this.L(w.LogLevel.Off, y),
								level: w.LogLevel.Off,
								description: this.M(w.LogLevel.Off, l),
								buttons: v && l !== w.LogLevel.Off ? [v] : void 0,
							},
						];
					}
					L(l, y) {
						const $ = (0, w.$yk)(l).value;
						return l === y ? `$(check) ${$}` : $;
					}
					M(l, y) {
						return y === l ? t.localize(7431, null) : void 0;
					}
				};
				(e.$HMc = f),
					(e.$HMc =
						f =
						o =
							Ne([j(2, E.$DJ), j(3, w.$jk), j(4, a.$o8), j(5, c.$GMc)], f));
				let b = class extends i.$rj {
					static {
						this.ID = "workbench.action.openSessionLogFile";
					}
					static {
						this.TITLE = t.localize2(7436, "Open Window Log File (Session)...");
					}
					constructor(l, y, $, v, S, I) {
						super(l, y), (this.c = $), (this.f = v), (this.g = S), (this.h = I);
					}
					async run() {
						const l = await this.g.pick(
							this.r().then((y) =>
								y.map(($, v) => ({
									id: $.toString(),
									label: (0, r.$kh)($),
									description: v === 0 ? t.localize(7432, null) : void 0,
								})),
							),
							{ canPickMany: !1, placeHolder: t.localize(7433, null) },
						);
						if (l) {
							const y = await this.g.pick(
								this.t(C.URI.parse(l.id)).then(($) =>
									$.map((v) => ({ id: v.toString(), label: (0, r.$kh)(v) })),
								),
								{ canPickMany: !1, placeHolder: t.localize(7434, null) },
							);
							if (y)
								return this.h
									.openEditor({
										resource: C.URI.parse(y.id),
										options: { pinned: !0 },
									})
									.then(() => {});
						}
					}
					async r() {
						const l = this.c.logsHome.with({ scheme: this.c.logFile.scheme }),
							y = [l],
							$ = await this.f.resolve((0, r.$mh)(l));
						return (
							$.children &&
								y.push(
									...$.children
										.filter(
											(v) =>
												!(0, r.$gh)(v.resource, l) &&
												v.isDirectory &&
												/^\d{8}T\d{6}$/.test(v.name),
										)
										.sort()
										.reverse()
										.map((v) => v.resource),
								),
							y
						);
					}
					async t(l) {
						const y = await this.f.resolve(l);
						return y.children
							? y.children.filter(($) => !$.isDirectory).map(($) => $.resource)
							: [];
					}
				};
				(e.$IMc = b),
					(e.$IMc = b =
						Ne([j(2, m.$r8), j(3, d.$ll), j(4, E.$DJ), j(5, u.$IY)], b));
			},
		),
		define(
			de[3523],
			he([
				1, 0, 4, 30, 99, 11, 1852, 55, 22, 297, 3, 34, 52, 5, 6, 705, 15, 29,
				1019, 8, 59, 68, 23,
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
					(t = mt(t)),
					(0, E.$4X)(
						class extends E.$3X {
							constructor() {
								super({
									id: C.$HMc.ID,
									title: C.$HMc.TITLE,
									category: w.$ck.Developer,
									f1: !0,
								});
							}
							run(S) {
								return S.get(c.$Li)
									.createInstance(C.$HMc, C.$HMc.ID, C.$HMc.TITLE.value)
									.run();
							}
						},
					),
					(0, E.$4X)(
						class extends E.$3X {
							constructor() {
								super({
									id: "workbench.action.setDefaultLogLevel",
									title: t.localize2(7422, "Set Default Log Level"),
									category: w.$ck.Developer,
								});
							}
							run(S, I, T) {
								return S.get(f.$GMc).setDefaultLogLevel(I, T);
							}
						},
					);
				let $ = class extends u.$1c {
					constructor(I, T, P, k, L) {
						super(),
							(this.f = I),
							(this.g = T),
							(this.h = P),
							(this.j = k),
							(this.m = L),
							(this.a = new s.$Lc()),
							(this.b = i.$Io.as(r.$p8.OutputChannels)),
							(this.c = this.D(new u.$0c()));
						const D = a.$Ak.bindTo(P);
						D.set((0, a.$xk)(T.getLogLevel())),
							this.D(
								T.onDidChangeLogLevel((M) => {
									(0, a.$kk)(M) && D.set((0, a.$xk)(T.getLogLevel()));
								}),
							),
							this.n(T.getRegisteredLoggers()),
							this.D(
								T.onDidChangeLoggers(({ added: M, removed: N }) => {
									this.n(M), this.r(N);
								}),
							),
							this.D(
								T.onDidChangeVisibility(([M, N]) => {
									const A = T.getRegisteredLogger(M);
									A && (N ? this.s(A) : this.t(A));
								}),
							),
							this.w(),
							this.D(
								n.Event.filter(P.onDidChangeContext, (M) =>
									M.affectsSome(this.a),
								)(() => this.q()),
							);
					}
					n(I) {
						for (const T of I) {
							if (T.when) {
								const P = b.$Kj.deserialize(T.when);
								if (P) {
									for (const k of P.keys()) this.a.add(k);
									if (!this.h.contextMatchesRules(P)) continue;
								}
							}
							T.hidden || this.s(T);
						}
					}
					q() {
						for (const I of this.g.getRegisteredLoggers())
							I.when &&
								(this.h.contextMatchesRules(b.$Kj.deserialize(I.when))
									? this.s(I)
									: this.t(I));
					}
					r(I) {
						for (const T of I) {
							if (T.when) {
								const P = b.$Kj.deserialize(T.when);
								if (P) for (const k of P.keys()) this.a.delete(k);
							}
							this.t(T);
						}
					}
					s(I) {
						const T = this.b.getChannel(I.id);
						if (T && this.m.extUri.isEqual(T.file, I.resource)) return;
						const P = new u.$Zc(),
							k = (0, p.$zh)(async (L) => {
								await (0, m.$Sl)(I.resource, this.j);
								try {
									await this.u(I.resource, 1, L);
									const D = this.b.getChannel(I.id),
										M =
											D?.file?.scheme === y.Schemas.vscodeRemote
												? this.g.getRegisteredLogger(D.file)
												: void 0;
									M && this.t(M);
									const N = D && I.resource.scheme === y.Schemas.vscodeRemote,
										A = N ? `${I.id}.remote` : I.id,
										R = N
											? t.localize(7421, null, I.name ?? I.id)
											: (I.name ?? I.id);
									this.b.registerChannel({
										id: A,
										label: R,
										file: I.resource,
										log: !0,
										extensionId: I.extensionId,
									}),
										P.add((0, u.$Yc)(() => this.b.removeChannel(A))),
										M && this.s(M);
								} catch (D) {
									(0, o.$8)(D) ||
										this.f.error(
											"Error while registering log channel",
											I.resource.toString(),
											(0, o.$bb)(D),
										);
								}
							});
						P.add((0, u.$Yc)(() => k.cancel())),
							this.c.set(I.resource.toString(), P);
					}
					t(I) {
						this.c.deleteAndDispose(I.resource.toString());
					}
					async u(I, T, P) {
						if (!(await this.j.exists(I))) {
							if (P.isCancellationRequested) throw new o.$9();
							if (T > 10)
								throw new Error(
									"Timed out while waiting for file to be created",
								);
							this.f.debug(
								"[Registering Log Channel] File does not exist. Waiting for 1s to retry.",
								I.toString(),
							),
								await (0, p.$Nh)(1e3, P),
								await this.u(I, T + 1, P);
						}
					}
					w() {
						this.D(
							(0, E.$4X)(
								class extends E.$3X {
									constructor() {
										super({
											id: g.$0Sb,
											title: t.localize2(7423, "Show Window Log"),
											category: w.$ck.Developer,
											f1: !0,
										});
									}
									async run(T) {
										T.get(r.$o8).showChannel(g.$9Sb);
									}
								},
							),
						);
					}
				};
				$ = Ne(
					[j(0, a.$ik), j(1, a.$jk), j(2, b.$6j), j(3, m.$ll), j(4, l.$Vl)],
					$,
				);
				let v = class {
					constructor(I) {
						I.migrateLogLevels();
					}
				};
				(v = Ne([j(0, f.$GMc)], v)),
					i.$Io
						.as(d.Extensions.Workbench)
						.registerWorkbenchContribution($, h.LifecyclePhase.Restored),
					i.$Io
						.as(d.Extensions.Workbench)
						.registerWorkbenchContribution(v, h.LifecyclePhase.Eventually);
			},
		),
		define(
			de[3524],
			he([1, 0, 15, 67, 25, 297, 3, 69, 540, 935]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				var u;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$_Tc = void 0);
				let a = class extends C.$1c {
					static {
						u = this;
					}
					static {
						this.a = 3 * 60 * 1e3;
					}
					constructor(n, g, p) {
						super(),
							(this.g = n),
							(this.h = g),
							(this.j = p),
							(this.c = new t.$Yh(() => this.s(), u.a)),
							this.m(),
							this.n();
					}
					m() {
						this.D(this.g.onDidChangeWorkspaceFolders(() => this.n()));
					}
					n() {
						this.g.getWorkspace().folders.length > 0
							? this.f ||
								(this.f = this.j.linkProvider.register(
									[
										{ language: E.$e8, scheme: "*" },
										{ language: E.$g8, scheme: "*" },
									],
									{
										provideLinks: async (g) => {
											const p = await this.r(g.uri);
											return p && { links: p };
										},
									},
								))
							: ((0, C.$Vc)(this.f), (this.f = void 0)),
							this.s(),
							this.c.cancel();
					}
					q() {
						return (
							this.c.schedule(),
							this.b || (this.b = new h(this.g, this.h)),
							this.b
						);
					}
					async r(n) {
						return this.q().provideLinks(n);
					}
					s() {
						this.b && (this.b.dispose(), (this.b = void 0));
					}
				};
				(e.$_Tc = a),
					(e.$_Tc = a = u = Ne([j(0, w.$Vi), j(1, i.$QO), j(2, d.$k3)], a));
				let h = class extends C.$1c {
					constructor(n, g) {
						super(),
							(this.f = n),
							(this.a = this.D(
								(0, m.$ijb)(
									"vs/workbench/contrib/output/common/outputLinkComputer",
									"OutputLinkDetectionWorker",
								),
							)),
							(this.b = r.$wxb.create(this.a, g)),
							(this.c = this.g());
					}
					async g() {
						await this.a.proxy.$setWorkspaceFolders(
							this.f.getWorkspace().folders.map((n) => n.uri.toString()),
						);
					}
					async provideLinks(n) {
						return (
							await this.c,
							await this.b.ensureSyncedResources([n]),
							this.a.proxy.$computeLinks(n.toString())
						);
					}
				};
				h = Ne([j(0, w.$Vi), j(1, i.$QO)], h);
			},
		),
		define(
			de[3525],
			he([
				1, 0, 5, 19, 200, 6, 15, 22, 67, 3, 28, 188, 48, 17, 76, 34, 33, 297,
				29,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$7Tc = e.$6Tc = void 0),
					(i = mt(i));
				class b extends r.$1c {
					constructor(v, S, I) {
						super(),
							(this.h = v),
							(this.j = S),
							(this.m = I),
							(this.a = new E.$re()),
							(this.onDidContentChange = this.a.event),
							(this.b = !1),
							(this.f = new C.$Kh(500));
					}
					watch(v) {
						this.b ||
							((this.g = v),
							this.n(),
							this.m.trace("Started polling", this.h.toString()),
							(this.b = !0));
					}
					n() {
						const v = () => this.q().then(() => this.n());
						this.f.trigger(v).catch((S) => {
							if (!(0, f.$8)(S)) throw S;
						});
					}
					async q() {
						const v = await this.j.stat(this.h);
						v.etag !== this.g && ((this.g = v.etag), this.a.fire(v.size));
					}
					unwatch() {
						this.b &&
							(this.f.cancel(),
							(this.b = !1),
							this.m.trace("Stopped polling", this.h.toString()));
					}
					dispose() {
						this.unwatch(), super.dispose();
					}
				}
				let s = class extends r.$1c {
					constructor(v, S, I, T, P, k, L) {
						super(),
							(this.t = v),
							(this.u = S),
							(this.w = I),
							(this.y = T),
							(this.z = P),
							(this.C = L),
							(this.a = this.D(new E.$re())),
							(this.onDispose = this.a.event),
							(this.f = ""),
							(this.g = null),
							(this.h = null),
							(this.j = !1),
							(this.m = this.D(new r.$2c())),
							(this.n = this.D(new C.$Kh(300))),
							(this.r = 0),
							(this.s = 0),
							(this.b = this.D(new b(this.w, this.y, k))),
							this.D(this.b.onDidContentChange((D) => this.P(D))),
							this.D((0, r.$Yc)(() => this.b.unwatch()));
					}
					append(v) {
						throw new Error("Not supported");
					}
					replace(v) {
						throw new Error("Not supported");
					}
					clear() {
						this.update(o.OutputChannelUpdateMode.Clear, this.s, !0);
					}
					update(v, S, I) {
						(this.g ? this.g : Promise.resolve()).then(() => this.G(v, S, I));
					}
					loadModel() {
						return (
							(this.g = C.Promises.withAsyncBody(async (v, S) => {
								try {
									let I = "";
									if (await this.y.exists(this.w)) {
										const T = await this.y.readFile(this.w, {
											position: this.r,
										});
										(this.s = this.r + T.value.byteLength),
											(this.f = T.etag),
											(I = T.value.toString());
									} else (this.r = 0), (this.s = 0);
									v(this.F(I));
								} catch (I) {
									S(I);
								}
							})),
							this.g
						);
					}
					F(v) {
						if (this.h) this.h.setValue(v);
						else {
							(this.h = this.z.createModel(v, this.u, this.t)),
								this.b.watch(this.f);
							const S = this.h.onWillDispose(() => {
								this.N(), this.b.unwatch(), (this.h = null), (0, r.$Vc)(S);
							});
						}
						return this.h;
					}
					G(v, S, I) {
						if (
							((v === o.OutputChannelUpdateMode.Clear ||
								v === o.OutputChannelUpdateMode.Replace) &&
								((this.r = this.s = (0, u.$pg)(S) ? S : this.s), this.N()),
							!this.h)
						)
							return;
						(this.j = !0), this.m.value || (this.m.value = new p.$Ce());
						const T = this.m.value.token;
						v === o.OutputChannelUpdateMode.Clear
							? this.H(this.h)
							: v === o.OutputChannelUpdateMode.Replace
								? (this.q = this.J(this.h, T).finally(() => (this.q = void 0)))
								: this.I(this.h, I, T);
					}
					H(v) {
						this.M(
							v,
							[a.$jL.delete(v.getFullModelRange())],
							n.$Te.fromString(""),
						);
					}
					I(v, S, I) {
						this.n
							.trigger(
								async () => {
									if (I.isCancellationRequested) return;
									if (this.q) {
										try {
											await this.q;
										} catch {}
										if (I.isCancellationRequested) return;
									}
									const T = await this.O();
									if (I.isCancellationRequested) return;
									const P = v.getLineCount(),
										k = v.getLineMaxColumn(P),
										L = [a.$jL.insert(new h.$hL(P, k), T.toString())];
									this.M(v, L, T);
								},
								S ? 0 : void 0,
							)
							.catch((T) => {
								if (!(0, f.$8)(T)) throw T;
							});
					}
					async J(v, S) {
						const I = await this.O();
						if (S.isCancellationRequested) return;
						const T = await this.L(v, I.toString());
						S.isCancellationRequested || this.M(v, T, I);
					}
					async L(v, S) {
						if (!S) return [a.$jL.delete(v.getFullModelRange())];
						if (S !== v.getValue()) {
							const I = await this.C.computeMoreMinimalEdits(v.uri, [
								{ text: S.toString(), range: v.getFullModelRange() },
							]);
							if (I?.length)
								return I.map((T) => a.$jL.replace(c.$iL.lift(T.range), T.text));
						}
						return [];
					}
					M(v, S, I) {
						S.length && v.applyEdits(S),
							(this.s = this.s + I.byteLength),
							(this.j = !1);
					}
					N() {
						this.m.value?.cancel(),
							(this.m.value = void 0),
							this.n.cancel(),
							(this.q = void 0),
							(this.j = !1);
					}
					async O() {
						const v = await this.y.readFile(this.w, { position: this.s });
						return (this.f = v.etag), v.value;
					}
					P(v) {
						this.h &&
							(this.j ||
								((0, u.$pg)(v) &&
									this.s > v &&
									this.update(o.OutputChannelUpdateMode.Clear, 0, !0)),
							this.update(o.OutputChannelUpdateMode.Append, void 0, !1));
					}
					Q() {
						return !!this.h;
					}
					dispose() {
						this.a.fire(), super.dispose();
					}
				};
				(e.$6Tc = s),
					(e.$6Tc = s =
						Ne([j(3, d.$ll), j(4, m.$QO), j(5, g.$ik), j(6, w.$Cxb)], s));
				let l = class extends s {
					constructor(v, S, I, T, P, k, L, D, M) {
						super(S, I, T, P, k, D, M),
							(this.R = L.createLogger(T, {
								logLevel: "always",
								donotRotate: !0,
								donotUseFormatters: !0,
								hidden: !0,
							})),
							(this.S = 0);
					}
					append(v) {
						this.U(v),
							this.update(o.OutputChannelUpdateMode.Append, void 0, this.Q());
					}
					replace(v) {
						const S = this.S;
						this.U(v), this.update(o.OutputChannelUpdateMode.Replace, S, !0);
					}
					U(v) {
						(this.S += n.$Te.fromString(v).byteLength),
							this.R.info(v),
							this.Q() && this.R.flush();
					}
				};
				l = Ne(
					[j(4, d.$ll), j(5, m.$QO), j(6, g.$jk), j(7, g.$ik), j(8, w.$Cxb)],
					l,
				);
				let y = class extends r.$1c {
					constructor(v, S, I, T, P, k) {
						super(),
							(this.f = P),
							(this.g = k),
							(this.a = this.D(new E.$re())),
							(this.onDispose = this.a.event),
							(this.b = this.h(v, S, I, T));
					}
					async h(v, S, I, T) {
						const P = await T,
							k = i.$nh(P, `${v.replace(/[\\/:\*\?"<>\|]/g, "")}.log`);
						await this.g.createFile(k);
						const L = this.D(this.f.createInstance(l, v, S, I, k));
						return this.D(L.onDispose(() => this.a.fire())), L;
					}
					append(v) {
						this.b.then((S) => S.append(v));
					}
					update(v, S, I) {
						this.b.then((T) => T.update(v, S, I));
					}
					loadModel() {
						return this.b.then((v) => v.loadModel());
					}
					clear() {
						this.b.then((v) => v.clear());
					}
					replace(v) {
						this.b.then((S) => S.replace(v));
					}
				};
				(e.$7Tc = y), (e.$7Tc = y = Ne([j(4, t.$Li), j(5, d.$ll)], y));
			},
		),
		define(
			de[1853],
			he([1, 0, 20, 78, 5, 22, 275, 19, 3525]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$9Tc = e.$8Tc = void 0),
					(e.$8Tc = (0, w.$Mi)("outputChannelModelService"));
				let r = class {
					constructor(a, h, c) {
						(this.b = a),
							(this.c = h),
							(this.d = null),
							(this.a = (0, d.$nh)(
								c.windowLogsPath,
								`output_${(0, C.$gn)(new Date()).replace(/-|:|\.\d+Z$/g, "")}`,
							));
					}
					createOutputChannelModel(a, h, c, n) {
						return n
							? this.c.createInstance(m.$6Tc, h, c, n)
							: this.c.createInstance(m.$7Tc, a, h, c, this.e);
					}
					get e() {
						return (
							this.d ||
								(this.d = this.b.createFolder(this.a).then(() => this.a)),
							this.d
						);
					}
				};
				(e.$9Tc = r),
					(e.$9Tc = r = Ne([j(0, E.$ll), j(1, w.$Li), j(2, i.$r8)], r)),
					(0, t.$lK)(e.$8Tc, r, t.InstantiationType.Delayed);
			},
		),
		
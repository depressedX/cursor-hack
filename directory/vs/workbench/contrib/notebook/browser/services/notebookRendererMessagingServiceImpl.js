define(de[3311], he([1, 0, 6, 3, 53]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$sFc = void 0);
			let E = class extends i.$1c {
				constructor(d) {
					super(),
						(this.f = d),
						(this.a = new Map()),
						(this.b = new Map()),
						(this.c = this.D(new t.$re())),
						(this.onShouldPostMessage = this.c.event);
				}
				receiveMessage(d, m, r) {
					if (d === void 0) {
						const u = [...this.b.values()].map((a) =>
							a.receiveMessageHandler?.(m, r),
						);
						return Promise.all(u).then((a) => a.some((h) => !!h));
					}
					return (
						this.b.get(d)?.receiveMessageHandler?.(m, r) ?? Promise.resolve(!1)
					);
				}
				prepare(d) {
					if (this.a.has(d)) return;
					const m = [];
					this.a.set(d, m),
						this.f.activateByEvent(`onRenderer:${d}`).then(() => {
							for (const r of m) this.c.fire(r);
							this.a.set(d, void 0);
						});
				}
				getScoped(d) {
					const m = this.b.get(d);
					if (m) return m;
					const r = {
						postMessage: (u, a) => this.g(d, u, a),
						dispose: () => this.b.delete(d),
					};
					return this.b.set(d, r), r;
				}
				g(d, m, r) {
					this.a.has(m) || this.prepare(m);
					const u = this.a.get(m),
						a = { rendererId: m, editorId: d, message: r };
					u === void 0 ? this.c.fire(a) : u.push(a);
				}
			};
			(e.$sFc = E), (e.$sFc = E = Ne([j(0, w.$q2)], E));
		}),
		define(
			de[1810],
			he([1, 0, 3, 6, 258, 103, 5, 3130, 21, 138, 25, 535, 19, 24, 10, 8, 53]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$UPc = e.$TPc = void 0);
				function o(s) {
					return `${s.contextValue}:${s.label}${s.rootUri ? `:${s.rootUri.toString()}` : ""}`;
				}
				function f(s, l) {
					if (!l.provider.rootUri) return l.provider.label;
					const y = s.getWorkspaceFolder(l.provider.rootUri);
					return y?.uri.toString() === l.provider.rootUri.toString()
						? y.name
						: (0, h.$kh)(l.provider.rootUri);
				}
				e.$TPc = {
					RepositorySortKey: new g.$5j(
						"scmRepositorySortKey",
						w.ISCMRepositorySortKey.DiscoveryTime,
					),
				};
				let b = class {
					get repositories() {
						return this.f.map((l) => l.repository);
					}
					get visibleRepositories() {
						return this.j === w.ISCMRepositorySortKey.DiscoveryTime
							? this.f
									.filter((l) => l.selectionIndex !== -1)
									.sort((l, y) => l.selectionIndex - y.selectionIndex)
									.map((l) => l.repository)
							: this.f
									.filter((l) => l.selectionIndex !== -1)
									.map((l) => l.repository);
					}
					set visibleRepositories(l) {
						const y = new Set(l),
							$ = new Set(),
							v = new Set();
						for (const S of this.f)
							!y.has(S.repository) &&
								S.selectionIndex !== -1 &&
								((S.selectionIndex = -1), v.add(S.repository)),
								y.has(S.repository) &&
									(S.selectionIndex === -1 && $.add(S.repository),
									(S.selectionIndex = l.indexOf(S.repository)));
						($.size === 0 && v.size === 0) ||
							(this.h.fire({ added: $, removed: v }),
							this.f.find((S) => S.focused && S.selectionIndex === -1) &&
								this.focus(
									this.f.find((S) => S.selectionIndex !== -1)?.repository,
								));
					}
					get focusedRepository() {
						return this.f.find((l) => l.focused)?.repository;
					}
					constructor(l, y, $, v, S, I, T) {
						(this.l = S),
							(this.m = I),
							(this.n = T),
							(this.a = !1),
							(this.b = !1),
							(this.d = new t.$Zc()),
							(this.f = []),
							(this.g = new i.$re()),
							(this.onDidChangeRepositories = this.g.event),
							(this.h = new i.$re()),
							(this.onDidChangeVisibleRepositories = i.Event.any(
								this.h.event,
								i.Event.debounce(
									this.g.event,
									(P, k) => {
										if (!P) return k;
										const L = new Set(P.added),
											D = new Set(P.removed);
										for (const M of k.added) D.has(M) ? D.delete(M) : L.add(M);
										for (const M of k.removed)
											L.has(M) ? L.delete(M) : D.add(M);
										return { added: L, removed: D };
									},
									0,
									void 0,
									void 0,
									void 0,
									this.d,
								),
							)),
							(this.i = new i.$re()),
							(this.onDidFocusRepository = this.i.event),
							(this.menus = v.createInstance(d.$SPc));
						try {
							this.c = JSON.parse(
								I.get(
									"scm:view:visibleRepositories",
									m.StorageScope.WORKSPACE,
									"",
								),
							);
						} catch {}
						(this.j = this.c?.sortKey ?? this.t()),
							(this.k = e.$TPc.RepositorySortKey.bindTo(y)),
							this.k.set(this.j),
							l.onDidAddRepository(this.o, this, this.d),
							l.onDidRemoveRepository(this.p, this, this.d);
						for (const P of l.repositories) this.o(P);
						I.onWillSaveState(this.v, this, this.d),
							$.onWillStop(
								() => {
									this.v(), (this.a = !1);
								},
								this,
								this.d,
							);
					}
					o(l) {
						this.a || this.w();
						const y = {
							repository: l,
							discoveryTime: Date.now(),
							focused: !1,
							selectionIndex: -1,
						};
						let $ = E.Iterable.empty();
						if (this.c && !this.a) {
							const S = this.c.all.indexOf(o(l.provider));
							if (S === -1) {
								const I = [];
								this.u(this.f, y),
									this.f.forEach((T, P) => {
										T.selectionIndex === -1 && I.push(T.repository),
											(T.selectionIndex = P);
									}),
									this.g.fire({ added: I, removed: E.Iterable.empty() }),
									(this.b = !1);
								return;
							}
							if (this.c.visible.indexOf(S) === -1) {
								if (this.b) {
									this.u(this.f, y),
										this.g.fire({
											added: E.Iterable.empty(),
											removed: E.Iterable.empty(),
										});
									return;
								}
							} else
								this.b ||
									(($ = [...this.visibleRepositories]),
									this.f.forEach((I) => {
										(I.focused = !1), (I.selectionIndex = -1);
									}),
									(this.b = !0));
						}
						const v = this.s();
						this.u(this.f, { ...y, selectionIndex: v + 1 }),
							this.g.fire({ added: [y.repository], removed: $ }),
							this.f.find((S) => S.focused) || this.focus(l);
					}
					p(l) {
						this.a || this.w();
						const y = this.f.findIndex((S) => S.repository === l);
						if (y === -1) return;
						let $ = E.Iterable.empty();
						const v = this.f.splice(y, 1);
						this.f.length > 0 &&
							this.visibleRepositories.length === 0 &&
							((this.f[0].selectionIndex = 0), ($ = [this.f[0].repository])),
							this.g.fire({ added: $, removed: v.map((S) => S.repository) }),
							v.length === 1 &&
								v[0].focused &&
								this.visibleRepositories.length > 0 &&
								this.focus(this.visibleRepositories[0]);
					}
					isVisible(l) {
						return (
							this.f.find((y) => y.repository === l)?.selectionIndex !== -1
						);
					}
					toggleVisibility(l, y) {
						if (typeof y > "u") y = !this.isVisible(l);
						else if (this.isVisible(l) === y) return;
						if (y) this.visibleRepositories = [...this.visibleRepositories, l];
						else {
							const $ = this.visibleRepositories.indexOf(l);
							$ > -1 &&
								(this.visibleRepositories = [
									...this.visibleRepositories.slice(0, $),
									...this.visibleRepositories.slice($ + 1),
								]);
						}
					}
					toggleSortKey(l) {
						(this.j = l),
							this.k.set(this.j),
							this.f.sort(this.q.bind(this)),
							this.g.fire({
								added: E.Iterable.empty(),
								removed: E.Iterable.empty(),
							});
					}
					focus(l) {
						(l && !this.isVisible(l)) ||
							(this.f.forEach((y) => (y.focused = y.repository === l)),
							this.f.find((y) => y.focused) && this.i.fire(l));
					}
					q(l, y) {
						if (this.j === w.ISCMRepositorySortKey.DiscoveryTime)
							return l.discoveryTime - y.discoveryTime;
						if (
							this.j === "path" &&
							l.repository.provider.rootUri &&
							y.repository.provider.rootUri
						)
							return (0, a.$as)(
								l.repository.provider.rootUri.fsPath,
								y.repository.provider.rootUri.fsPath,
							);
						const $ = f(this.n, l.repository),
							v = f(this.n, y.repository),
							S = (0, a.$3r)($, v);
						return S === 0 &&
							l.repository.provider.rootUri &&
							y.repository.provider.rootUri
							? (0, a.$as)(
									l.repository.provider.rootUri.fsPath,
									y.repository.provider.rootUri.fsPath,
								)
							: S;
					}
					s() {
						return this.f.length === 0
							? -1
							: Math.max(...this.f.map((l) => l.selectionIndex));
					}
					t() {
						switch (this.l.getValue("scm.repositories.sortOrder")) {
							case "discovery time":
								return w.ISCMRepositorySortKey.DiscoveryTime;
							case "name":
								return w.ISCMRepositorySortKey.Name;
							case "path":
								return w.ISCMRepositorySortKey.Path;
							default:
								return w.ISCMRepositorySortKey.DiscoveryTime;
						}
					}
					u(l, y) {
						const $ = (0, c.$Ab)(l, y, this.q.bind(this));
						l.splice($ < 0 ? ~$ : $, 0, y);
					}
					v() {
						if (!this.a) return;
						const l = this.repositories.map(($) => o($.provider)),
							y = this.visibleRepositories.map(($) => l.indexOf(o($.provider)));
						(this.c = { all: l, sortKey: this.j, visible: y }),
							this.m.store(
								"scm:view:visibleRepositories",
								JSON.stringify(this.c),
								m.StorageScope.WORKSPACE,
								m.StorageTarget.MACHINE,
							);
					}
					w() {
						this.x();
					}
					x() {
						this.a || (this.a = !0);
					}
					dispose() {
						this.d.dispose(), this.g.dispose(), this.h.dispose();
					}
				};
				(e.$UPc = b),
					Ne([(0, r.$fi)(5e3)], b.prototype, "w", null),
					(e.$UPc = b =
						Ne(
							[
								j(0, w.$c7),
								j(1, g.$6j),
								j(2, p.$q2),
								j(3, C.$Li),
								j(4, n.$gj),
								j(5, m.$lq),
								j(6, u.$Vi),
							],
							b,
						));
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[3312],
		he([1, 0, 145, 107, 4, 14, 806, 111, 31, 53]),
		function (ce, e, t, i, w, E, C, d, m, r) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$eIb = e.$dIb = void 0),
				(d = xi(d));
			let u = class {
				constructor(p, o, f, b, s) {
					(this.a = p),
						(this.b = o),
						(this.c = f),
						(this.d = b),
						(this.f = s),
						(this.requiresAction = !0);
				}
				g(p) {
					const o = new Set();
					c(o, this.a.added.values()),
						c(o, this.a.removed.values()),
						c(o, this.a.changed.values());
					let f = (0, w.localize)(9965, null);
					return (f += h(this.c, p, this.f, o)), f;
				}
				h() {
					return [
						{
							label: (0, w.localize)(9966, null),
							run: () => this.d.getInstanceFromId(this.b)?.relaunch(),
							commandId: t.TerminalCommandId.Relaunch,
						},
					];
				}
				getStatus(p) {
					return {
						id: C.TerminalStatus.RelaunchNeeded,
						severity: d.default.Warning,
						icon: E.$ak.warning,
						tooltip: this.g(p),
						hoverActions: this.h(),
					};
				}
			};
			(e.$dIb = u), (e.$dIb = u = Ne([j(3, i.$iIb), j(4, r.$q2)], u));
			let a = class {
				constructor(p, o, f) {
					(this.a = p), (this.b = o), (this.c = f), (this.requiresAction = !1);
				}
				d(p) {
					const o = new Set();
					c(o, this.a.getVariableMap(p).values());
					let f = (0, w.localize)(9967, null);
					return (f += h(this.a, p, this.c, o)), f;
				}
				f(p) {
					return [
						{
							label: (0, w.localize)(9968, null),
							run: () =>
								this.b.executeCommand(
									t.TerminalCommandId.ShowEnvironmentContributions,
									p,
								),
							commandId: t.TerminalCommandId.ShowEnvironmentContributions,
						},
					];
				}
				getStatus(p) {
					return {
						id: C.TerminalStatus.EnvironmentVariableInfoChangesActive,
						severity: d.default.Info,
						tooltip: this.d(p),
						hoverActions: this.f(p),
					};
				}
			};
			(e.$eIb = a), (e.$eIb = a = Ne([j(1, m.$ek), j(2, r.$q2)], a));
			function h(g, p, o, f) {
				const b = [
						`
`,
					],
					s = g.getDescriptionMap(void 0),
					l = g.getDescriptionMap(p);
				for (const y of f) {
					const $ = s.get(y);
					$ &&
						(b.push(`
- \`${n(y, o)}\``),
						b.push(`: ${$}`));
					const v = l.get(y);
					if (v) {
						const S = $ ? ` (${(0, w.localize)(9969, null)})` : "";
						b.push(`
- \`${n(y, o)}${S}\``),
							b.push(`: ${v}`);
					}
					!$ &&
						!v &&
						b.push(`
- \`${n(y, o)}\``);
				}
				return b.join("");
			}
			function c(g, p) {
				for (const o of p) for (const f of o) g.add(f.extensionIdentifier);
			}
			function n(g, p) {
				return p.extensions.find((o) => o.id === g)?.displayName || g;
			}
		},
	),
		define(
			de[3313],
			he([1, 0, 6, 138, 21, 53, 1655, 774, 691, 3]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$JVc = void 0);
				let u = class extends r.$1c {
					get onDidChangeCollections() {
						return this.a.event;
					}
					constructor(h, c) {
						super(),
							(this.b = h),
							(this.f = c),
							(this.collections = new Map()),
							(this.a = this.D(new t.$re())),
							this.f.remove(
								m.TerminalStorageKeys.DeprecatedEnvironmentVariableCollections,
								w.StorageScope.WORKSPACE,
							);
						const n = this.f.get(
							m.TerminalStorageKeys.EnvironmentVariableCollections,
							w.StorageScope.WORKSPACE,
						);
						n &&
							(JSON.parse(n).forEach((p) =>
								this.collections.set(p.extensionIdentifier, {
									persistent: !0,
									map: (0, d.$bK)(p.collection),
									descriptionMap: (0, d.$cK)(p.description),
								}),
							),
							this.s()),
							(this.mergedCollection = this.q()),
							this.D(this.b.onDidChangeExtensions(() => this.s()));
					}
					set(h, c) {
						this.collections.set(h, c), this.g();
					}
					delete(h) {
						this.collections.delete(h), this.g();
					}
					g() {
						this.h(), (this.mergedCollection = this.q()), this.m();
					}
					h() {
						this.j();
					}
					j() {
						const h = [];
						this.collections.forEach((n, g) => {
							n.persistent &&
								h.push({
									extensionIdentifier: g,
									collection: (0, d.$_J)(this.collections.get(g).map),
									description: (0, d.$aK)(n.descriptionMap),
								});
						});
						const c = JSON.stringify(h);
						this.f.store(
							m.TerminalStorageKeys.EnvironmentVariableCollections,
							c,
							w.StorageScope.WORKSPACE,
							w.StorageTarget.MACHINE,
						);
					}
					m() {
						this.n();
					}
					n() {
						this.a.fire(this.mergedCollection);
					}
					q() {
						return new C.$fK(this.collections);
					}
					async s() {
						await this.b.whenInstalledExtensionsRegistered();
						const h = this.b.extensions;
						let c = !1;
						this.collections.forEach((n, g) => {
							h.some((o) => o.identifier.value === g) ||
								(this.collections.delete(g), (c = !0));
						}),
							c && this.g();
					}
				};
				(e.$JVc = u),
					Ne([(0, i.$gi)(1e3)], u.prototype, "h", null),
					Ne([(0, i.$fi)(1e3)], u.prototype, "m", null),
					(e.$JVc = u = Ne([j(0, E.$q2), j(1, w.$lq)], u));
			},
		),
		
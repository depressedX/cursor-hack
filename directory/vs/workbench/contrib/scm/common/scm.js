define(de[258], he([1, 0, 5]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$e7 =
					e.$d7 =
					e.ISCMRepositorySortKey =
					e.SCMInputChangeReason =
					e.InputValidationType =
					e.$c7 =
					e.$b7 =
					e.$a7 =
					e.$_6 =
					e.$$6 =
						void 0),
				(e.$$6 = "workbench.view.scm"),
				(e.$_6 = "workbench.scm"),
				(e.$a7 = "workbench.scm.repositories"),
				(e.$b7 = "workbench.scm.history"),
				(e.$c7 = (0, t.$Mi)("scm"));
			var i;
			(function (C) {
				(C[(C.Error = 0)] = "Error"),
					(C[(C.Warning = 1)] = "Warning"),
					(C[(C.Information = 2)] = "Information");
			})(i || (e.InputValidationType = i = {}));
			var w;
			(function (C) {
				(C[(C.HistoryPrevious = 0)] = "HistoryPrevious"),
					(C[(C.HistoryNext = 1)] = "HistoryNext");
			})(w || (e.SCMInputChangeReason = w = {}));
			var E;
			(function (C) {
				(C.DiscoveryTime = "discoveryTime"),
					(C.Name = "name"),
					(C.Path = "path");
			})(E || (e.ISCMRepositorySortKey = E = {})),
				(e.$d7 = (0, t.$Mi)("scmView")),
				(e.$e7 = "workbench.editor.scmChangesEditor");
		}),
		define(
			de[3130],
			he([1, 0, 24, 6, 3, 4, 92, 11, 8, 5, 128, 258, 652]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$SPc = e.$RPc = e.$QPc = e.$PPc = void 0);
				function h(b, s) {
					return b.id === s.id;
				}
				const c = new w.$Zc();
				d.$ZX.onDidChangeMenu((b) => {
					if (b.has(d.$XX.SCMTitle)) {
						c.clear();
						for (const s of d.$ZX.getMenuItems(d.$XX.SCMTitle))
							c.add(d.$ZX.appendMenuItem(d.$XX.SCMSourceControlInline, s));
					}
				});
				let n = class {
					get actions() {
						return this.c;
					}
					get secondaryActions() {
						return this.d;
					}
					constructor(s, l) {
						(this.c = []),
							(this.d = []),
							(this.f = new i.$re()),
							(this.onDidChangeTitle = this.f.event),
							(this.g = new w.$Zc()),
							(this.menu = s.createMenu(d.$XX.SCMTitle, l)),
							this.g.add(this.menu),
							this.menu.onDidChange(this.h, this, this.g),
							this.h();
					}
					h() {
						const s = [],
							l = [];
						(0, C.$Kyb)(
							this.menu,
							{ shouldForwardArgs: !0 },
							{ primary: s, secondary: l },
						),
							!((0, t.$yb)(s, this.c, h) && (0, t.$yb)(l, this.d, h)) &&
								((this.c = s), (this.d = l), this.f.fire());
					}
					dispose() {
						this.g.dispose();
					}
				};
				(e.$PPc = n), (e.$PPc = n = Ne([j(0, d.$YX), j(1, m.$6j)], n));
				class g {
					get resourceGroupMenu() {
						return (
							this.c ||
								(this.c = this.i.createMenu(
									d.$XX.SCMResourceGroupContext,
									this.h,
								)),
							this.c
						);
					}
					get resourceFolderMenu() {
						return (
							this.d ||
								(this.d = this.i.createMenu(
									d.$XX.SCMResourceFolderContext,
									this.h,
								)),
							this.d
						);
					}
					constructor(s, l) {
						(this.h = s), (this.i = l);
					}
					getResourceMenu(s) {
						if (typeof s.contextValue > "u")
							return (
								this.f ||
									(this.f = this.i.createMenu(
										d.$XX.SCMResourceContext,
										this.h,
									)),
								this.f
							);
						this.g || (this.g = new Map());
						let l = this.g.get(s.contextValue);
						if (!l) {
							const y = this.h.createOverlay([
									["scmResourceState", s.contextValue],
								]),
								$ = this.i.createMenu(d.$XX.SCMResourceContext, y);
							(l = {
								menu: $,
								dispose() {
									$.dispose();
								},
							}),
								this.g.set(s.contextValue, l);
						}
						return l.menu;
					}
					dispose() {
						this.c?.dispose(),
							this.d?.dispose(),
							this.f?.dispose(),
							this.g &&
								((0, w.$Vc)(this.g.values()),
								this.g.clear(),
								(this.g = void 0));
					}
				}
				let p = class {
					get repositoryContextMenu() {
						return (
							this.f ||
								((this.f = this.j.createMenu(d.$XX.SCMSourceControl, this.c)),
								this.h.add(this.f)),
							this.f
						);
					}
					get historyProviderMenu() {
						return (
							this.i.historyProvider.get() &&
								!this.g &&
								((this.g = new o(this.c, this.j)), this.h.add(this.g)),
							this.g
						);
					}
					constructor(s, l, y, $) {
						(this.i = s),
							(this.j = $),
							(this.d = new Map()),
							(this.h = new w.$Zc()),
							(this.c = l.createOverlay([
								["scmProvider", s.contextValue],
								["scmProviderRootUri", s.rootUri?.toString()],
								["scmProviderHasRootUri", !!s.rootUri],
							]));
						const v = new u.$Ki([m.$6j, this.c]);
						(y = y.createChild(v, this.h)),
							(this.titleMenu = y.createInstance(n)),
							this.h.add(this.titleMenu),
							(this.repositoryMenu = $.createMenu(
								d.$XX.SCMSourceControlInline,
								this.c,
							)),
							this.h.add(this.repositoryMenu),
							s.onDidChangeResourceGroups(this.l, this, this.h),
							this.l();
					}
					getResourceGroupMenu(s) {
						return this.k(s).resourceGroupMenu;
					}
					getResourceMenu(s) {
						return this.k(s.resourceGroup).getResourceMenu(s);
					}
					getResourceFolderMenu(s) {
						return this.k(s).resourceFolderMenu;
					}
					k(s) {
						let l = this.d.get(s);
						if (!l) {
							const y = this.c.createOverlay([
								["scmResourceGroup", s.id],
								[
									"multiDiffEditorEnableViewChanges",
									s.multiDiffEditorEnableViewChanges,
								],
							]);
							(l = new g(y, this.j)), this.d.set(s, l);
						}
						return l;
					}
					l() {
						for (const s of this.d.keys())
							this.i.groups.includes(s) ||
								(this.d.get(s)?.dispose(), this.d.delete(s));
					}
					dispose() {
						this.h.dispose(), this.d.forEach((s) => s.dispose());
					}
				};
				(e.$QPc = p),
					(e.$QPc = p = Ne([j(1, m.$6j), j(2, r.$Li), j(3, d.$YX)], p));
				let o = class {
					constructor(s, l) {
						(this.g = s),
							(this.h = l),
							(this.c = new Map()),
							(this.d = new Map()),
							(this.f = new w.$Zc());
					}
					getHistoryItemMenu(s) {
						return this.i(s);
					}
					getHistoryItemMenu2(s) {
						return this.j(s);
					}
					getHistoryItemGroupMenu(s) {
						return s.direction === "incoming"
							? this.h.createMenu(d.$XX.SCMIncomingChanges, this.g)
							: this.k(d.$XX.SCMOutgoingChanges, s);
					}
					getHistoryItemGroupContextMenu(s) {
						return s.direction === "incoming"
							? this.h.createMenu(d.$XX.SCMIncomingChangesContext, this.g)
							: this.k(d.$XX.SCMOutgoingChangesContext, s);
					}
					i(s) {
						let l = this.c.get(s);
						if (!l) {
							let y;
							s.historyItemGroup.direction === "incoming"
								? (y =
										s.type === "allChanges"
											? d.$XX.SCMIncomingChangesAllChangesContext
											: d.$XX.SCMIncomingChangesHistoryItemContext)
								: (y =
										s.type === "allChanges"
											? d.$XX.SCMOutgoingChangesAllChangesContext
											: d.$XX.SCMOutgoingChangesHistoryItemContext);
							const $ = this.g.createOverlay([
								["scmHistoryItemFileCount", s.statistics?.files ?? 0],
							]);
							(l = this.h.createMenu(y, $)), this.c.set(s, l);
						}
						return l;
					}
					j(s) {
						let l = this.d.get(s);
						return (
							l ||
								((l = this.h.createMenu(d.$XX.SCMChangesContext, this.g)),
								this.d.set(s, l)),
							l
						);
					}
					k(s, l) {
						const y = this.g.createOverlay([
							[
								"scmHistoryItemGroupHasRemote",
								!!l.repository.provider.historyProvider
									.get()
									?.currentHistoryItemGroup.get()?.remote,
							],
						]);
						return this.h.createMenu(s, y);
					}
					dispose() {
						this.f.dispose();
					}
				};
				(e.$RPc = o), (e.$RPc = o = Ne([j(0, m.$6j), j(1, d.$YX)], o));
				let f = class {
					constructor(s, l) {
						(this.f = l),
							(this.c = new w.$Zc()),
							(this.d = new Map()),
							(this.titleMenu = l.createInstance(n)),
							s.onDidRemoveRepository(this.g, this, this.c);
					}
					g(s) {
						this.d.get(s.provider)?.dispose(), this.d.delete(s.provider);
					}
					getRepositoryMenus(s) {
						let l = this.d.get(s);
						if (!l) {
							const y = this.f.createInstance(p, s);
							(l = {
								menus: y,
								dispose: () => {
									y.dispose(), this.d.delete(s);
								},
							}),
								this.d.set(s, l);
						}
						return l.menus;
					}
					dispose() {
						this.c.dispose();
					}
				};
				(e.$SPc = f),
					(e.$SPc = f = Ne([j(0, a.$c7), j(1, r.$Li)], f)),
					d.$ZX.appendMenuItem(d.$XX.SCMResourceContext, {
						title: (0, E.localize)(8992, null),
						submenu: d.$XX.SCMResourceContextShare,
						group: "45_share",
						order: 3,
					});
			},
		),
		define(
			de[1257],
			he([
				1, 0, 3, 77, 7, 258, 495, 49, 31, 50, 614, 106, 173, 11, 8, 39, 32, 72,
				95, 652,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				var b;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$OPc = e.$NPc = void 0);
				class s extends r.$sj {
					constructor($) {
						super(), (this.a = $);
					}
					async q($, v) {
						if (!($ instanceof c.$2X)) return super.q($, v);
						const S = this.a().map((T) => T.provider),
							I = S.some((T) => T === v) ? S : [v];
						await $.run(...I);
					}
				}
				e.$NPc = s;
				let l = class {
					static {
						b = this;
					}
					static {
						this.TEMPLATE_ID = "repository";
					}
					get templateId() {
						return b.TEMPLATE_ID;
					}
					constructor($, v, S, I, T, P, k, L, D, M) {
						(this.a = $),
							(this.b = v),
							(this.d = S),
							(this.f = I),
							(this.g = T),
							(this.h = P),
							(this.i = k),
							(this.j = L),
							(this.k = D),
							(this.l = M);
					}
					renderTemplate($) {
						$.classList.contains("monaco-tl-contents") &&
							$.parentElement.parentElement
								.querySelector(".monaco-tl-twistie")
								.classList.add("force-twistie");
						const v = (0, w.$fhb)($, (0, w.$)(".scm-provider")),
							S = (0, w.$fhb)(v, (0, w.$)(".label")),
							I = this.h.setupManagedHover((0, f.$cib)("mouse"), S, "", {}),
							T = (0, w.$fhb)(S, (0, w.$)("span.name")),
							P = (0, w.$fhb)(S, (0, w.$)("span.description")),
							k = (0, w.$fhb)(v, (0, w.$)(".actions")),
							L = new h.$Syb(
								k,
								{ actionViewItemProvider: this.b, resetMenu: this.a },
								this.j,
								this.f,
								this.g,
								this.i,
								this.d,
								this.l,
							),
							D = (0, w.$fhb)(v, (0, w.$)(".count")),
							M = new C.$Hob(D, {}, a.$zyb),
							N = L.onDidChangeDropdownVisibility((R) =>
								v.classList.toggle("active", R),
							),
							A = (0, t.$Xc)(I, N, L);
						return {
							label: S,
							labelCustomHover: I,
							name: T,
							description: P,
							countContainer: D,
							count: M,
							toolBar: L,
							elementDisposables: new t.$Zc(),
							templateDisposable: A,
						};
					}
					renderElement($, v, S, I) {
						const T = (0, u.$oPc)($) ? $ : $.element;
						(S.name.textContent = T.provider.name),
							T.provider.rootUri
								? (S.labelCustomHover.update(
										`${T.provider.label}: ${T.provider.rootUri.fsPath}`,
									),
									(S.description.textContent = T.provider.label))
								: (S.labelCustomHover.update(T.provider.label),
									(S.description.textContent = ""));
						let P = [],
							k = [],
							L = [];
						const D = () => {
							S.toolBar.setActions([...P, ...k], L);
						};
						S.elementDisposables.add(
							(0, i.autorun)((A) => {
								(P = (T.provider.statusBarCommands.read(A) ?? []).map(
									(O) => new u.$FPc(O, this.d),
								)),
									D();
							}),
						),
							S.elementDisposables.add(
								(0, i.autorun)((A) => {
									const R = T.provider.count.read(A) ?? (0, u.$IPc)(T.provider);
									S.countContainer.setAttribute("data-count", String(R)),
										S.count.setCount(R);
								}),
							);
						const M = this.k.menus.getRepositoryMenus(T.provider),
							N =
								this.a === c.$XX.SCMTitle ? M.titleMenu.menu : M.repositoryMenu;
						S.elementDisposables.add(
							(0, u.$CPc)(N, (A, R) => {
								(k = A), (L = R), D();
							}),
						),
							(S.toolBar.context = T.provider);
					}
					renderCompressedElements() {
						throw new Error("Should never happen since node is incompressible");
					}
					disposeElement($, v, S) {
						S.elementDisposables.clear();
					}
					disposeTemplate($) {
						$.elementDisposables.dispose(), $.templateDisposable.dispose();
					}
				};
				(e.$OPc = l),
					(e.$OPc =
						l =
						b =
							Ne(
								[
									j(2, m.$ek),
									j(3, n.$6j),
									j(4, d.$Xxb),
									j(5, o.$Uyb),
									j(6, g.$uZ),
									j(7, c.$YX),
									j(8, E.$d7),
									j(9, p.$km),
								],
								l,
							));
			},
		),
		define(
			de[3131],
			he([1, 0, 3, 6, 258, 34, 8, 21, 647, 59, 9, 103, 25, 23, 68]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$LPc = void 0);
				class g extends t.$1c {
					get value() {
						return this.a;
					}
					get placeholder() {
						return this.c;
					}
					set placeholder(l) {
						(this.c = l), this.f.fire(l);
					}
					get enabled() {
						return this.g;
					}
					set enabled(l) {
						(this.g = l), this.h.fire(l);
					}
					get visible() {
						return this.j;
					}
					set visible(l) {
						(this.j = l), this.m.fire(l);
					}
					setFocus() {
						this.n.fire();
					}
					showValidationMessage(l, y) {
						this.q.fire({ message: l, type: y });
					}
					get validateInput() {
						return this.r;
					}
					set validateInput(l) {
						(this.r = l), this.s.fire();
					}
					constructor(l, y) {
						super(),
							(this.repository = l),
							(this.w = y),
							(this.a = ""),
							(this.b = new i.$re()),
							(this.onDidChange = this.b.event),
							(this.c = ""),
							(this.f = new i.$re()),
							(this.onDidChangePlaceholder = this.f.event),
							(this.g = !0),
							(this.h = new i.$re()),
							(this.onDidChangeEnablement = this.h.event),
							(this.j = !0),
							(this.m = new i.$re()),
							(this.onDidChangeVisibility = this.m.event),
							(this.n = new i.$re()),
							(this.onDidChangeFocus = this.n.event),
							(this.q = new i.$re()),
							(this.onDidChangeValidationMessage = this.q.event),
							(this.r = () => Promise.resolve(void 0)),
							(this.s = new i.$re()),
							(this.onDidChangeValidateInput = this.s.event),
							(this.u = !1),
							this.repository.provider.rootUri
								? ((this.t = y.getHistory(
										this.repository.provider.label,
										this.repository.provider.rootUri,
									)),
									this.D(
										this.w.onWillSaveHistory(($) => {
											this.t.isAtEnd() && this.y(),
												this.u && $.historyDidIndeedChange(),
												(this.u = !1);
										}),
									))
								: (this.t = new m.$Kob([""], 100)),
							(this.a = this.t.current());
					}
					setValue(l, y, $) {
						l !== this.a &&
							(y || (this.t.replaceLast(this.a), this.t.add(l), (this.u = !0)),
							(this.a = l),
							this.b.fire({ value: l, reason: $ }));
					}
					showNextHistoryValue() {
						if (this.t.isAtEnd()) return;
						this.t.has(this.value) || (this.y(), this.t.resetCursor());
						const l = this.t.next();
						this.setValue(l, !0, w.SCMInputChangeReason.HistoryNext);
					}
					showPreviousHistoryValue() {
						this.t.isAtEnd()
							? this.y()
							: this.t.has(this.a) || (this.y(), this.t.resetCursor());
						const l = this.t.previous();
						this.setValue(l, !0, w.SCMInputChangeReason.HistoryPrevious);
					}
					y() {
						const l = this.t.replaceLast(this.a);
						this.u = this.u || l !== this.a;
					}
				}
				class p {
					get selected() {
						return this.a;
					}
					constructor(l, y, $, v) {
						(this.id = l),
							(this.provider = y),
							(this.c = $),
							(this.a = !1),
							(this.b = new i.$re()),
							(this.onDidChangeSelection = this.b.event),
							(this.input = new g(this, v));
					}
					setSelected(l) {
						this.a !== l && ((this.a = l), this.b.fire(l));
					}
					dispose() {
						this.c.dispose(), this.provider.dispose();
					}
				}
				class o {
					constructor() {
						this.a = !1;
					}
					get didChangeHistory() {
						return this.a;
					}
					historyDidIndeedChange() {
						this.a = !0;
					}
				}
				let f = class {
					constructor(l, y) {
						(this.d = l),
							(this.f = y),
							(this.a = new t.$Zc()),
							(this.b = new Map()),
							(this.c = this.a.add(new i.$re())),
							(this.onWillSaveHistory = this.c.event),
							(this.b = new Map());
						const $ = this.d.getObject(
							"scm.history",
							d.StorageScope.WORKSPACE,
							[],
						);
						for (const [v, S, I] of $) {
							let T = this.b.get(v);
							T || ((T = new r.$Gc()), this.b.set(v, T)),
								T.set(S, new m.$Kob(I, 100));
						}
						this.h() && this.g(),
							this.a.add(
								this.d.onDidChangeValue(
									d.StorageScope.WORKSPACE,
									"scm.history",
									this.a,
								)((v) => {
									if (v.external && v.key === "scm.history") {
										const S = this.d.getObject(
											"scm.history",
											d.StorageScope.WORKSPACE,
											[],
										);
										for (const [I, T, P] of S) {
											const k = this.getHistory(I, T);
											for (const L of a.Iterable.reverse(P)) k.prepend(L);
										}
									}
								}),
							),
							this.a.add(
								this.d.onWillSaveState((v) => {
									const S = new o();
									this.c.fire(S), S.didChangeHistory && this.g();
								}),
							);
					}
					g() {
						const l = [];
						for (const [y, $] of this.b)
							for (const [v, S] of $)
								(S.size === 1 && S.current() === "") || l.push([y, v, [...S]]);
						this.d.store(
							"scm.history",
							l,
							d.StorageScope.WORKSPACE,
							d.StorageTarget.USER,
						);
					}
					getHistory(l, y) {
						let $ = this.b.get(l);
						$ || (($ = new r.$Gc()), this.b.set(l, $));
						let v = $.get(y);
						return v || ((v = new m.$Kob([""], 100)), $.set(y, v)), v;
					}
					h() {
						let l = !1;
						const y = a.Iterable.filter(
							this.d.keys(d.StorageScope.APPLICATION, d.StorageTarget.MACHINE),
							($) => $.startsWith("scm/input:"),
						);
						for (const $ of y)
							try {
								const v = JSON.parse(
										this.d.get($, d.StorageScope.APPLICATION, ""),
									),
									S = /^scm\/input:([^:]+):(.+)$/.exec($);
								if (
									!S ||
									!Array.isArray(v?.history) ||
									!Number.isInteger(v?.timestamp)
								) {
									this.d.remove($, d.StorageScope.APPLICATION);
									continue;
								}
								const [, I, T] = S,
									P = u.URI.file(T);
								if (this.f.getWorkspaceFolder(P)) {
									const k = this.getHistory(I, P);
									for (const L of a.Iterable.reverse(v.history)) k.prepend(L);
									(l = !0), this.d.remove($, d.StorageScope.APPLICATION);
								}
							} catch {
								this.d.remove($, d.StorageScope.APPLICATION);
							}
						return l;
					}
					dispose() {
						this.a.dispose();
					}
				};
				f = Ne([j(0, d.$lq), j(1, h.$Vi)], f);
				let b = class {
					get repositories() {
						return this._repositories.values();
					}
					get repositoryCount() {
						return this._repositories.size;
					}
					constructor(l, y, $, v, S) {
						(this.g = l),
							(this.h = S),
							(this._repositories = new Map()),
							(this.c = new i.$re()),
							(this.onDidAddRepository = this.c.event),
							(this.d = new i.$re()),
							(this.onDidRemoveRepository = this.d.event),
							(this.f = new i.$re()),
							(this.onDidUpdateRepository = this.f.event),
							(this.a = new f(v, y)),
							(this.b = $.createKey("scm.providerCount", 0));
					}
					registerSCMProvider(l) {
						if (
							(this.g.trace("SCMService#registerSCMProvider"),
							this._repositories.has(l.id))
						)
							throw new Error(`SCM Provider ${l.id} already exists.`);
						const y = (0, t.$Yc)(() => {
								this._repositories.delete(l.id),
									this.d.fire($),
									this.b.set(this._repositories.size);
							}),
							$ = new p(l.id, l, y, this.a);
						return (
							this._repositories.set(l.id, $),
							this.c.fire($),
							$.provider.onDidChange(() => this.f.fire($)),
							this.b.set(this._repositories.size),
							$
						);
					}
					getRepository(l) {
						if (typeof l == "string") return this._repositories.get(l);
						if (
							l.scheme !== c.Schemas.file &&
							l.scheme !== c.Schemas.vscodeRemote
						)
							return;
						let y,
							$ = Number.POSITIVE_INFINITY;
						for (const v of this.repositories) {
							const S = v.provider.rootUri;
							if (!S) continue;
							const I = this.h.extUri.relativePath(S, l);
							I &&
								!/^\.\./.test(I) &&
								I.length < $ &&
								((y = v), ($ = I.length));
						}
						return y;
					}
				};
				(e.$LPc = b),
					(e.$LPc = b =
						Ne(
							[j(0, E.$ik), j(1, h.$Vi), j(2, C.$6j), j(3, d.$lq), j(4, n.$Vl)],
							b,
						));
			},
		),
		define(
			de[1748],
			he([1, 0, 7, 268, 235, 14, 6, 27, 4, 413, 664, 10, 8, 39, 106, 95]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nOc = e.$mOc = e.$lOc = void 0),
					(t = mt(t)),
					(m = mt(m));
				let p = class extends w.$Uhb {
					static {
						this.OPTION_CHANGE = "optionChange";
					}
					constructor(s, l, y, $, v, S) {
						super(),
							(this.n = l),
							(this.r = $),
							(this.s = v),
							(this.t = S),
							(this.g = this.D(new C.$re())),
							(this.onSubmit = this.g.event),
							(this.h = this.D(new C.$re())),
							(this.onCancel = this.h.event),
							(y = { ariaLabel: m.localize(9141, null), ...y }),
							(this.a = y.width ?? 100),
							this.J(y),
							s.appendChild(this.b);
					}
					dispose() {
						super.dispose(), this.inputFocusTracker?.dispose();
					}
					setWidth(s) {
						(this.a = s), this.n.layout(), this.w();
					}
					getValue() {
						return this.c.value;
					}
					setValue(s) {
						this.c.value !== s && (this.c.value = s);
					}
					select() {
						this.c.select();
					}
					focus() {
						this.c.focus();
					}
					inputHasFocus() {
						return this.c.hasFocus();
					}
					w() {
						this.c.width = this.a - this.y() - 2;
					}
					y() {
						return 0;
					}
					getHistory() {
						return this.c.getHistory();
					}
					clearHistory() {
						this.c.clearHistory();
					}
					prependHistory(s) {
						this.c.prependHistory(s);
					}
					clear() {
						this.setValue("");
					}
					onSearchSubmit() {
						this.c.addToHistory();
					}
					showNextTerm() {
						this.c.showNextValue();
					}
					showPreviousTerm() {
						this.c.showPreviousValue();
					}
					J(s) {
						(this.b = document.createElement("div")),
							this.b.classList.add("monaco-findInput"),
							(this.c = new r.$VCb(
								this.b,
								this.n,
								{
									placeholder: s.placeholder,
									showPlaceholderOnFocus: s.showPlaceholderOnFocus,
									tooltip: s.tooltip,
									ariaLabel: s.ariaLabel,
									validationOptions: { validation: void 0 },
									history: s.history || [],
									showHistoryHint: () => (0, u.$NMb)(this.t),
									inputBoxStyles: s.inputBoxStyles,
								},
								this.r,
							)),
							this.D(this.c.onDidChange(() => this.g.fire(!0))),
							(this.inputFocusTracker = t.$dhb(this.c.inputElement)),
							this.z(this.c.inputElement, (y) => this.M(y));
						const l = document.createElement("div");
						(l.className = "controls"),
							this.L(l),
							this.b.appendChild(l),
							this.w();
					}
					L(s) {}
					M(s) {
						switch (s.keyCode) {
							case d.KeyCode.Enter:
								this.onSearchSubmit(), this.g.fire(!1);
								return;
							case d.KeyCode.Escape:
								this.h.fire();
								return;
						}
					}
				};
				(e.$lOc = p),
					(e.$lOc = p = Ne([j(3, h.$6j), j(4, a.$gj), j(5, c.$uZ)], p));
				let o = class extends p {
					constructor(s, l, y, $, v, S) {
						super(s, l, y, $, v, S),
							(this.N = this.D(new C.$re())),
							(this.onChangeSearchInEditorsBox = this.N.event);
					}
					dispose() {
						super.dispose(), this.O.dispose();
					}
					onlySearchInOpenEditors() {
						return this.O.checked;
					}
					setOnlySearchInOpenEditors(s) {
						(this.O.checked = s), this.N.fire();
					}
					y() {
						return super.y() + this.O.width();
					}
					L(s) {
						(this.O = this.D(
							new i.$8ib({
								icon: E.$ak.book,
								title: m.localize(9142, null),
								isChecked: !1,
								hoverDelegate: (0, g.$cib)("element"),
								...n.$pyb,
							}),
						)),
							this.D(
								this.O.onChange((l) => {
									this.N.fire(), l || this.c.focus();
								}),
							),
							s.appendChild(this.O.domNode),
							super.L(s);
					}
				};
				(e.$mOc = o),
					(e.$mOc = o = Ne([j(3, h.$6j), j(4, a.$gj), j(5, c.$uZ)], o));
				let f = class extends p {
					constructor(s, l, y, $, v, S) {
						super(s, l, y, $, v, S),
							(this.N = this.D(new C.$re())),
							(this.onChangeIgnoreBox = this.N.event);
					}
					dispose() {
						super.dispose(), this.O.dispose();
					}
					useExcludesAndIgnoreFiles() {
						return this.O.checked;
					}
					setUseExcludesAndIgnoreFiles(s) {
						(this.O.checked = s), this.N.fire();
					}
					y() {
						return super.y() + this.O.width();
					}
					L(s) {
						(this.O = this.D(
							new i.$8ib({
								icon: E.$ak.exclude,
								actionClassName: "useExcludesAndIgnoreFiles",
								title: m.localize(9143, null),
								isChecked: !0,
								hoverDelegate: (0, g.$cib)("element"),
								...n.$pyb,
							}),
						)),
							this.D(
								this.O.onChange((l) => {
									this.N.fire(), l || this.c.focus();
								}),
							),
							s.appendChild(this.O.domNode),
							super.L(s);
					}
				};
				(e.$nOc = f),
					(e.$nOc = f = Ne([j(3, h.$6j), j(4, a.$gj), j(5, c.$uZ)], f));
			},
		),
		
import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/event.js';
import '../common/scm.js';
import '../../../../base/common/iterator.js';
import '../../../../platform/instantiation/common/instantiation.js';
import './menus.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../base/common/decorators.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../base/common/comparers.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/arrays.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../services/extensions/common/extensions.js';
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
	
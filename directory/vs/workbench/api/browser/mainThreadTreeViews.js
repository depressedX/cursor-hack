import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/lifecycle.js';
import '../common/extHost.protocol.js';
import '../../common/views.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../../../base/common/arrays.js';
import '../../../platform/notification/common/notification.js';
import '../../../base/common/types.js';
import '../../../platform/registry/common/platform.js';
import '../../services/extensions/common/extensions.js';
import '../../../platform/log/common/log.js';
import '../../../base/common/dataTransfer.js';
import '../common/shared/dataTransferCache.js';
import '../common/extHostTypeConverters.js';
import '../../services/views/common/viewsService.js';
define(
			de[3801],
			he([1, 0, 3, 88, 60, 101, 24, 40, 28, 30, 53, 34, 489, 1697, 1836, 89]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Joc = void 0),
					(n = mt(n));
				let p = class extends t.$1c {
					constructor(s, l, y, $, v) {
						super(),
							(this.f = l),
							(this.g = y),
							(this.h = $),
							(this.j = v),
							(this.b = this.D(new t.$0c())),
							(this.c = new Map()),
							(this.a = s.getProxy(i.$mbb.ExtHostTreeViews));
					}
					async $registerTreeViewDataProvider(s, l) {
						this.j.trace(
							"MainThreadTreeViews#$registerTreeViewDataProvider",
							s,
							l,
						),
							this.h.whenInstalledExtensionsRegistered().then(() => {
								const y = new f(s, this.a, this.g),
									$ = new t.$Zc();
								this.b.set(s, { dataProvider: y, dispose: () => $.dispose() });
								const v =
										l.hasHandleDrag || l.hasHandleDrop
											? new o(
													s,
													l.dropMimeTypes,
													l.dragMimeTypes,
													l.hasHandleDrag,
													this.a,
												)
											: void 0,
									S = this.q(s);
								S
									? ((S.showCollapseAllAction = l.showCollapseAll),
										(S.canSelectMany = l.canSelectMany),
										(S.manuallyManageCheckboxes = l.manuallyManageCheckboxes),
										(S.dragAndDropController = v),
										v && this.c.set(s, v),
										(S.dataProvider = y),
										this.n(s, S, $),
										this.a.$setVisible(s, S.visible))
									: this.g.error("No view is registered with id: " + s);
							});
					}
					$reveal(s, l, y) {
						return (
							this.j.trace(
								"MainThreadTreeViews#$reveal",
								s,
								l?.item,
								l?.parentChain,
								y,
							),
							this.f.openView(s, y.focus).then(() => {
								const $ = this.q(s);
								if ($ && l)
									return this.m(
										$,
										this.b.get(s).dataProvider,
										l.item,
										l.parentChain,
										y,
									);
							})
						);
					}
					$refresh(s, l) {
						this.j.trace("MainThreadTreeViews#$refresh", s, l);
						const y = this.q(s),
							$ = this.b.get(s);
						if (y && $) {
							const v = $.dataProvider.getItemsToRefresh(l);
							return y.refresh(v.length ? v : void 0);
						}
						return Promise.resolve();
					}
					$setMessage(s, l) {
						this.j.trace("MainThreadTreeViews#$setMessage", s, l.toString());
						const y = this.q(s);
						y && (y.message = l);
					}
					$setTitle(s, l, y) {
						this.j.trace("MainThreadTreeViews#$setTitle", s, l, y);
						const $ = this.q(s);
						$ && (($.title = l), ($.description = y));
					}
					$setBadge(s, l) {
						this.j.trace(
							"MainThreadTreeViews#$setBadge",
							s,
							l?.value,
							l?.tooltip,
						);
						const y = this.q(s);
						y && (y.badge = l);
					}
					$resolveDropFileData(s, l, y) {
						const $ = this.c.get(s);
						if (!$) throw new Error("Unknown tree");
						return $.resolveDropFileData(l, y);
					}
					async $disposeTree(s) {
						const l = this.q(s);
						l && (l.dataProvider = void 0), this.b.deleteAndDispose(s);
					}
					async m(s, l, y, $, v) {
						v = v || { select: !1, focus: !1 };
						const S = (0, m.$ug)(v.select) ? !1 : v.select,
							I = (0, m.$ug)(v.focus) ? !1 : v.focus;
						let T = Math.min(
							(0, m.$pg)(v.expand) ? v.expand : v.expand === !0 ? 1 : 0,
							3,
						);
						l.isEmpty() && (await s.refresh());
						for (const k of $) {
							const L = l.getItem(k.handle);
							L && (await s.expand(L));
						}
						const P = l.getItem(y.handle);
						if (P) {
							await s.reveal(P),
								S && s.setSelection([P]),
								I === !1 ? s.setFocus() : I && s.setFocus(P);
							let k = [P];
							for (; k.length > 0 && T > 0; T--)
								await s.expand(k),
									(k = k.reduce((L, D) => {
										const M = l.getItem(D.handle);
										return (
											M &&
												M.children &&
												M.children.length &&
												L.push(...M.children),
											L
										);
									}, []));
						}
					}
					n(s, l, y) {
						y.add(
							l.onDidExpandItem(($) => this.a.$setExpanded(s, $.handle, !0)),
						),
							y.add(
								l.onDidCollapseItem(($) =>
									this.a.$setExpanded(s, $.handle, !1),
								),
							),
							y.add(
								l.onDidChangeSelectionAndFocus(($) =>
									this.a.$setSelectionAndFocus(
										s,
										$.selection.map(({ handle: v }) => v),
										$.focus.handle,
									),
								),
							),
							y.add(l.onDidChangeVisibility(($) => this.a.$setVisible(s, $))),
							y.add(
								l.onDidChangeCheckboxState(($) => {
									this.a.$changeCheckboxState(
										s,
										$.map((v) => ({
											treeItemHandle: v.handle,
											newState: v.checkbox?.isChecked ?? !1,
										})),
									);
								}),
							);
					}
					q(s) {
						const l = r.$Io.as(w.Extensions.ViewsRegistry).getView(s);
						return l ? l.treeView : null;
					}
					dispose() {
						for (const s of this.b) {
							const l = this.q(s[0]);
							l && (l.dataProvider = void 0);
						}
						this.b.dispose(), this.c.clear(), super.dispose();
					}
				};
				(e.$Joc = p),
					(e.$Joc = p =
						Ne(
							[
								(0, E.$tmc)(i.$lbb.MainThreadTreeViews),
								j(1, g.$HMb),
								j(2, d.$4N),
								j(3, u.$q2),
								j(4, a.$ik),
							],
							p,
						));
				class o {
					constructor(s, l, y, $, v) {
						(this.b = s),
							(this.dropMimeTypes = l),
							(this.dragMimeTypes = y),
							(this.hasWillDrop = $),
							(this.c = v),
							(this.a = new c.$4nc());
					}
					async handleDrop(s, l, y, $, v, S) {
						const I = this.a.add(s);
						try {
							const T = await n.DataTransfer.from(s);
							return y.isCancellationRequested
								? void 0
								: await this.c.$handleDrop(
										this.b,
										I.id,
										T,
										l?.handle,
										y,
										$,
										v,
										S,
									);
						} finally {
							I.dispose();
						}
					}
					async handleDrag(s, l, y) {
						if (!this.hasWillDrop) return;
						const $ = await this.c.$handleDrag(this.b, s, l, y);
						if (!$) return;
						const v = new h.$XL();
						return (
							$.items.forEach(([S, I]) => {
								v.replace(S, (0, h.$VL)(I.asString));
							}),
							v
						);
					}
					resolveDropFileData(s, l) {
						return this.a.resolveFileData(s, l);
					}
				}
				class f {
					constructor(s, l, y) {
						(this.c = s),
							(this.d = l),
							(this.e = y),
							(this.a = new Map()),
							(this.b = this.d.$hasResolve(this.c));
					}
					getChildren(s) {
						return (
							s || this.a.clear(),
							this.d.$getChildren(this.c, s ? s.handle : void 0).then(
								(l) => this.f(l),
								(l) => (w.$M1.is(l) || this.e.error(l), []),
							)
						);
					}
					getItemsToRefresh(s) {
						const l = [];
						if (s)
							for (const y of Object.keys(s)) {
								const $ = this.getItem(y);
								if ($) {
									const v = s[y];
									if ((this.g($, v), y === v.handle)) l.push($);
									else {
										this.a.delete(y), this.a.set($.handle, $);
										const S = v.parentHandle
											? this.a.get(v.parentHandle)
											: null;
										S && l.push(S);
									}
								}
							}
						return l;
					}
					getItem(s) {
						return this.a.get(s);
					}
					isEmpty() {
						return this.a.size === 0;
					}
					async f(s) {
						if (s === void 0) return;
						const l = [],
							y = await this.b;
						if (s)
							for (const $ of s) {
								const v = new w.$L1(
									$,
									y ? (S) => this.d.$resolve(this.c, $.handle, S) : void 0,
								);
								this.a.set($.handle, v), l.push(v);
							}
						return l;
					}
					g(s, l) {
						if (((l.children = l.children ? l.children : void 0), s)) {
							const y = (0, C.$Qb)([
								...Object.keys(s instanceof w.$L1 ? s.asTreeItem() : s),
								...Object.keys(l),
							]);
							for (const $ of y) s[$] = l[$];
							s instanceof w.$L1 && s.resetResolve();
						}
					}
				}
			},
		),
		
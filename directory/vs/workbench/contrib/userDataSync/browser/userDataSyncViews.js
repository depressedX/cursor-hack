import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/registry/common/platform.js';
import '../../../common/views.js';
import '../../../../nls.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../browser/parts/views/treeView.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/userDataSync/common/userDataSync.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../base/common/uri.js';
import '../../../services/editor/common/editorService.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../base/common/date.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/actions.js';
import '../../../services/userDataSync/common/userDataSync.js';
import '../../../../platform/userDataSync/common/userDataSyncMachines.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../base/common/resources.js';
import '../../../browser/parts/editor/editorCommands.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/environment/common/environment.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/userDataProfile/common/userDataProfile.js';
import './userDataSyncConflictsView.js';
define(
			de[4050],
			he([
				1, 0, 30, 60, 4, 102, 854, 5, 150, 11, 8, 9, 18, 35, 275, 57, 6, 3, 14,
				50, 522, 965, 63, 40, 19, 247, 22, 113, 68, 31, 129, 4049,
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
					(e.$d1c = void 0);
				let M = class extends o.$1c {
					constructor(F, x, H, q, V) {
						super(),
							(this.f = x),
							(this.g = H),
							(this.h = q),
							(this.j = V),
							this.n(F);
					}
					n(F) {
						this.q(F),
							this.s(F, !0),
							this.r(F),
							this.s(F, !1),
							this.w(F),
							this.t(F);
					}
					q(F) {
						const x = t.$Io.as(i.Extensions.ViewsRegistry),
							H = (0, w.localize2)(11355, "Conflicts"),
							q = {
								id: s.$1xc,
								name: H,
								ctorDescriptor: new E.$Ji(D.$c1c),
								when: u.$Kj.and(s.$Vxc, s.$Wxc),
								canToggleVisibility: !1,
								canMoveView: !1,
								treeView: this.f.createInstance(C.$Stc, s.$1xc, H.value),
								collapsed: !1,
								order: 100,
							};
						x.registerViews([q], F);
					}
					r(F) {
						const x = "workbench.views.sync.machines",
							H = (0, w.localize2)(11356, "Synced Machines"),
							q = this.f.createInstance(C.$Stc, x, H.value),
							V = this.f.createInstance(B, q);
						(q.showRefreshAction = !0),
							(q.canSelectMany = !0),
							(q.dataProvider = V),
							this.D(
								p.Event.any(
									this.h.onDidChange,
									this.j.onDidResetRemote,
								)(() => q.refresh()),
							);
						const G = t.$Io.as(i.Extensions.ViewsRegistry),
							K = {
								id: x,
								name: H,
								ctorDescriptor: new E.$Ji(C.$Ptc),
								when: u.$Kj.and(
									s.$Rxc.notEqualsTo(m.SyncStatus.Uninitialized),
									s.$Txc.isEqualTo(s.AccountStatus.Available),
									s.$Uxc,
								),
								canToggleVisibility: !0,
								canMoveView: !1,
								treeView: q,
								collapsed: !1,
								order: 300,
							};
						G.registerViews([K], F),
							this.D(
								(0, r.$4X)(
									class extends r.$3X {
										constructor() {
											super({
												id: "workbench.actions.sync.editMachineName",
												title: (0, w.localize)(11328, null),
												icon: f.$ak.edit,
												menu: {
													id: r.$XX.ViewItemContext,
													when: u.$Kj.and(u.$Kj.equals("view", x)),
													group: "inline",
												},
											});
										}
										async run(J, W) {
											(await V.rename(W.$treeItemHandle)) &&
												(await q.refresh());
										}
									},
								),
							),
							this.D(
								(0, r.$4X)(
									class extends r.$3X {
										constructor() {
											super({
												id: "workbench.actions.sync.turnOffSyncOnMachine",
												title: (0, w.localize)(11329, null),
												menu: {
													id: r.$XX.ViewItemContext,
													when: u.$Kj.and(
														u.$Kj.equals("view", x),
														u.$Kj.equals("viewItem", "sync-machine"),
													),
												},
											});
										}
										async run(J, W, X) {
											(await V.disable(
												(X || [W]).map((Y) => Y.$treeItemHandle),
											)) && (await q.refresh());
										}
									},
								),
							);
					}
					s(F, x) {
						const H = `workbench.views.sync.${x ? "remote" : "local"}Activity`,
							q = x
								? (0, w.localize2)(11357, "Sync Activity (Remote)")
								: (0, w.localize2)(11358, "Sync Activity (Local)"),
							V = this.f.createInstance(C.$Stc, H, q.value);
						(V.showCollapseAllAction = !0),
							(V.showRefreshAction = !0),
							(V.dataProvider = x
								? this.f.createInstance(R)
								: this.f.createInstance(A)),
							this.D(
								p.Event.any(
									this.g.onDidChangeResourceEnablement,
									this.g.onDidChangeEnablement,
									this.j.onDidResetLocal,
									this.j.onDidResetRemote,
								)(() => V.refresh()),
							);
						const G = t.$Io.as(i.Extensions.ViewsRegistry),
							K = {
								id: H,
								name: q,
								ctorDescriptor: new E.$Ji(C.$Ptc),
								when: u.$Kj.and(
									s.$Rxc.notEqualsTo(m.SyncStatus.Uninitialized),
									s.$Txc.isEqualTo(s.AccountStatus.Available),
									s.$Uxc,
								),
								canToggleVisibility: !0,
								canMoveView: !1,
								treeView: V,
								collapsed: !1,
								order: x ? 200 : 400,
								hideByDefault: !x,
							};
						G.registerViews([K], F), this.u(H);
					}
					t(F) {
						const x = "workbench.views.sync.externalActivity",
							H = (0, w.localize2)(11359, "Sync Activity (Developer)"),
							q = this.f.createInstance(O, void 0),
							V = this.f.createInstance(C.$Stc, x, H.value);
						(V.showCollapseAllAction = !1),
							(V.showRefreshAction = !1),
							(V.dataProvider = q);
						const G = t.$Io.as(i.Extensions.ViewsRegistry),
							K = {
								id: x,
								name: H,
								ctorDescriptor: new E.$Ji(C.$Ptc),
								when: s.$Uxc,
								canToggleVisibility: !0,
								canMoveView: !1,
								treeView: V,
								collapsed: !1,
								hideByDefault: !1,
							};
						G.registerViews([K], F),
							this.D(
								(0, r.$4X)(
									class extends r.$3X {
										constructor() {
											super({
												id: "workbench.actions.sync.loadActivity",
												title: (0, w.localize)(11330, null),
												icon: f.$ak.cloudUpload,
												menu: {
													id: r.$XX.ViewTitle,
													when: u.$Kj.equals("view", x),
													group: "navigation",
												},
											});
										}
										async run(J) {
											const X = await J.get(g.$IO).showOpenDialog({
												title: (0, w.localize)(11331, null),
												canSelectFiles: !0,
												canSelectFolders: !0,
												canSelectMany: !1,
											});
											X?.[0] &&
												((q.activityDataResource = X[0]), await V.refresh());
										}
									},
								),
							);
					}
					u(F) {
						this.D(
							(0, r.$4X)(
								class extends r.$3X {
									constructor() {
										super({
											id: `workbench.actions.sync.${F}.resolveResource`,
											title: (0, w.localize)(11332, null),
											menu: {
												id: r.$XX.ViewItemContext,
												when: u.$Kj.and(
													u.$Kj.equals("view", F),
													u.$Kj.regex("viewItem", /sync-resource-.*/i),
												),
											},
										});
									}
									async run(x, H) {
										const { resource: q } = JSON.parse(H.$treeItemHandle);
										await x
											.get(h.$IY)
											.openEditor({
												resource: a.URI.parse(q),
												options: { pinned: !0 },
											});
									}
								},
							),
						),
							this.D(
								(0, r.$4X)(
									class extends r.$3X {
										constructor() {
											super({
												id: `workbench.actions.sync.${F}.compareWithLocal`,
												title: (0, w.localize)(11333, null),
												menu: {
													id: r.$XX.ViewItemContext,
													when: u.$Kj.and(
														u.$Kj.equals("view", F),
														u.$Kj.regex(
															"viewItem",
															/sync-associatedResource-.*/i,
														),
													),
												},
											});
										}
										async run(x, H) {
											const q = x.get(k.$ek),
												{ resource: V, comparableResource: G } = JSON.parse(
													H.$treeItemHandle,
												),
												K = a.URI.parse(V),
												J = a.URI.parse(G);
											return q.executeCommand(
												S.$AWb,
												K,
												J,
												(0, w.localize)(
													11334,
													null,
													(0, w.localize)(11335, null, (0, v.$kh)(K)),
													(0, w.localize)(11336, null, (0, v.$kh)(J)),
												),
												void 0,
											);
										}
									},
								),
							),
							this.D(
								(0, r.$4X)(
									class extends r.$3X {
										constructor() {
											super({
												id: `workbench.actions.sync.${F}.replaceCurrent`,
												title: (0, w.localize)(11337, null),
												icon: f.$ak.discard,
												menu: {
													id: r.$XX.ViewItemContext,
													when: u.$Kj.and(
														u.$Kj.equals("view", F),
														u.$Kj.regex("viewItem", /sync-resource-.*/i),
														u.$Kj.notEquals(
															"viewItem",
															`sync-resource-${m.SyncResource.Profiles}`,
														),
													),
													group: "inline",
												},
											});
										}
										async run(x, H) {
											const q = x.get(g.$GO),
												V = x.get(m.$5Rb),
												{ syncResourceHandle: G, syncResource: K } = JSON.parse(
													H.$treeItemHandle,
												);
											if (
												(
													await q.confirm({
														message: (0, w.localize)(
															11338,
															null,
															(0, s.$Oxc)(K),
														),
														type: "info",
														title: s.$Pxc.value,
													})
												).confirmed
											)
												return V.replace({
													created: G.created,
													uri: a.URI.revive(G.uri),
												});
										}
									},
								),
							);
					}
					w(F) {
						const x = "workbench.views.sync.troubleshoot",
							H = (0, w.localize2)(11360, "Troubleshoot"),
							q = this.f.createInstance(C.$Stc, x, H.value),
							V = this.f.createInstance(U);
						(q.showRefreshAction = !0), (q.dataProvider = V);
						const G = t.$Io.as(i.Extensions.ViewsRegistry),
							K = {
								id: x,
								name: H,
								ctorDescriptor: new E.$Ji(C.$Ptc),
								when: s.$Uxc,
								canToggleVisibility: !0,
								canMoveView: !1,
								treeView: q,
								collapsed: !1,
								order: 500,
								hideByDefault: !0,
							};
						G.registerViews([K], F);
					}
				};
				(e.$d1c = M),
					(e.$d1c = M =
						Ne([j(1, d.$Li), j(2, m.$4Rb), j(3, l.$FRb), j(4, m.$5Rb)], M));
				let N = class {
					constructor(F, x, H, q, V, G) {
						(this.f = F),
							(this.g = x),
							(this.h = H),
							(this.i = q),
							(this.j = V),
							(this.k = G),
							(this.d = new Map());
					}
					async getChildren(F) {
						try {
							if (!F) return await this.l();
							if (F.profile || F.handle === this.k.defaultProfile.id) {
								let x = this.d.get(F.handle);
								return (
									x || this.d.set(F.handle, (x = this.o(F.profile))), await x
								);
							}
							return F.syncResourceHandle ? await this.n(F) : [];
						} catch (x) {
							throw (
								(x instanceof m.$YRb || (x = m.$YRb.toUserDataSyncError(x)),
								x instanceof m.$YRb &&
								x.code === m.UserDataSyncErrorCode.IncompatibleRemoteContent
									? this.j.notify({
											severity: $.Severity.Error,
											message: x.message,
											actions: {
												primary: [
													new b.$rj(
														"reset",
														(0, w.localize)(11339, null),
														void 0,
														!0,
														() => this.i.resetSyncedData(),
													),
												],
											},
										})
									: this.j.error(x),
								x)
							);
						}
					}
					async l() {
						this.d.clear();
						const F = [],
							x = await this.q();
						if (x.length) {
							const H = {
								handle: this.k.defaultProfile.id,
								label: { label: this.k.defaultProfile.name },
								collapsibleState: i.TreeItemCollapsibleState.Expanded,
							};
							F.push(H);
						} else {
							const H = await this.o();
							F.push(...H);
						}
						for (const H of x) {
							const q = {
								handle: H.id,
								label: { label: H.name },
								collapsibleState: i.TreeItemCollapsibleState.Collapsed,
								profile: H,
							};
							F.push(q);
						}
						return F;
					}
					async n(F) {
						const x = F.syncResourceHandle,
							H = await this.g.getAssociatedResources(x),
							q = x.previous
								? await this.g.getAssociatedResources(x.previous)
								: [];
						return H.map(({ resource: V, comparableResource: G }) => {
							const K = JSON.stringify({
									resource: V.toString(),
									comparableResource: G.toString(),
								}),
								J = q.find(
									(W) => (0, v.$kh)(W.resource) === (0, v.$kh)(V),
								)?.resource;
							return {
								handle: K,
								collapsibleState: i.TreeItemCollapsibleState.None,
								resourceUri: V,
								command: J
									? {
											id: S.$AWb,
											title: "",
											arguments: [
												J,
												V,
												(0, w.localize)(
													11340,
													null,
													`${(0, v.$kh)(V)} (${(0, n.$dn)(x.previous.created, !0)})`,
													`${(0, v.$kh)(V)} (${(0, n.$dn)(x.created, !0)})`,
												),
												void 0,
											],
										}
									: { id: S.$zWb, title: "", arguments: [V, void 0, void 0] },
								contextValue: `sync-associatedResource-${x.syncResource}`,
							};
						});
					}
					async o(F) {
						const x = [],
							q = (
								await Promise.all(
									m.$PRb.map(async (V) => {
										const G = await this.r(V, F);
										return G.map((K, J) => ({
											...K,
											syncResource: V,
											previous: G[J + 1],
										}));
									}),
								)
							)
								.flat()
								.sort((V, G) => G.created - V.created);
						for (const V of q) {
							const G = JSON.stringify({
								syncResourceHandle: V,
								syncResource: V.syncResource,
							});
							x.push({
								handle: G,
								collapsibleState: i.TreeItemCollapsibleState.Collapsed,
								label: { label: (0, s.$Oxc)(V.syncResource) },
								description: (0, n.$dn)(V.created, !0),
								tooltip: new Date(V.created).toLocaleString(),
								themeIcon: c.$lP,
								syncResourceHandle: V,
								contextValue: `sync-resource-${V.syncResource}`,
							});
						}
						return x;
					}
				};
				N = Ne(
					[
						j(0, m.$5Rb),
						j(1, m.$6Rb),
						j(2, m.$7Rb),
						j(3, s.$Nxc),
						j(4, $.$4N),
						j(5, L.$Xl),
					],
					N,
				);
				class A extends N {
					r(F, x) {
						return this.g.getLocalSyncResourceHandles(F, x);
					}
					async q() {
						return this.k.profiles
							.filter((F) => !F.isDefault)
							.map((F) => ({ id: F.id, collection: F.id, name: F.name }));
					}
				}
				let R = class extends N {
					constructor(F, x, H, q, V, G, K) {
						super(F, x, H, V, G, K), (this.t = q);
					}
					async getChildren(F) {
						return F || (this.s = void 0), super.getChildren(F);
					}
					u() {
						return this.s === void 0 && (this.s = this.t.getMachines()), this.s;
					}
					r(F, x) {
						return this.g.getRemoteSyncResourceHandles(F, x);
					}
					q() {
						return this.g.getRemoteSyncedProfiles();
					}
					async n(F) {
						const x = await super.n(F);
						if (x.length) {
							const H = await this.g.getMachineId(F.syncResourceHandle);
							if (H) {
								const V = (await this.u()).find(({ id: G }) => G === H);
								x[0].description = V?.isCurrent
									? (0, w.localize)(11341, null)
									: V?.name;
							}
						}
						return x;
					}
				};
				R = Ne(
					[
						j(0, m.$5Rb),
						j(1, m.$6Rb),
						j(2, m.$7Rb),
						j(3, l.$FRb),
						j(4, s.$Nxc),
						j(5, $.$4N),
						j(6, L.$Xl),
					],
					R,
				);
				let O = class extends N {
					constructor(F, x, H, q, V, G, K, J, W) {
						super(x, H, q, V, G, K),
							(this.activityDataResource = F),
							(this.u = J),
							(this.v = W);
					}
					async getChildren(F) {
						if (!F) {
							if (((this.s = void 0), !this.activityDataResource)) return [];
							if ((await this.u.resolve(this.activityDataResource)).isDirectory)
								this.t = this.activityDataResource;
							else {
								this.t = this.v.extUri.joinPath(
									this.v.extUri.dirname(this.activityDataResource),
									"remoteActivity",
								);
								try {
									await this.u.del(this.t, { recursive: !0 });
								} catch {}
								await this.f.extractActivityData(
									this.activityDataResource,
									this.t,
								);
							}
						}
						return super.getChildren(F);
					}
					r(F, x) {
						return this.g.getLocalSyncResourceHandles(F, x, this.t);
					}
					async q() {
						return this.g.getLocalSyncedProfiles(this.t);
					}
					async n(F) {
						const x = await super.n(F);
						if (x.length) {
							const H = await this.g.getMachineId(F.syncResourceHandle);
							if (H) {
								const V = (await this.z()).find(({ id: G }) => G === H);
								x[0].description = V?.isCurrent
									? (0, w.localize)(11342, null)
									: V?.name;
							}
						}
						return x;
					}
					z() {
						return (
							this.s === void 0 &&
								(this.s = this.g.getLocalSyncedMachines(this.t)),
							this.s
						);
					}
				};
				O = Ne(
					[
						j(1, m.$5Rb),
						j(2, m.$6Rb),
						j(3, m.$7Rb),
						j(4, s.$Nxc),
						j(5, $.$4N),
						j(6, L.$Xl),
						j(7, I.$ll),
						j(8, P.$Vl),
					],
					O,
				);
				let B = class {
					constructor(F, x, H, q, V, G) {
						(this.f = F),
							(this.g = x),
							(this.h = H),
							(this.i = q),
							(this.j = V),
							(this.k = G);
					}
					async getChildren(F) {
						F || (this.d = void 0);
						try {
							let x = await this.l();
							return (
								(x = x
									.filter((H) => !H.disabled)
									.sort((H, q) => (H.isCurrent ? -1 : 1))),
								(this.f.message = x.length
									? void 0
									: (0, w.localize)(11343, null)),
								x.map(({ id: H, name: q, isCurrent: V, platform: G }) => ({
									handle: H,
									collapsibleState: i.TreeItemCollapsibleState.None,
									label: { label: q },
									description: V ? (0, w.localize)(11344, null) : void 0,
									themeIcon: G && (0, l.$GRb)(G) ? f.$ak.globe : f.$ak.vm,
									contextValue: "sync-machine",
								}))
							);
						} catch (x) {
							return this.i.error(x), [];
						}
					}
					l() {
						return this.d === void 0 && (this.d = this.g.getMachines()), this.d;
					}
					async disable(F) {
						const H = (await this.l()).filter(({ id: G }) => F.includes(G));
						if (!H.length)
							throw new Error((0, w.localize)(11345, null, F.join(",")));
						if (
							!(
								await this.j.confirm({
									type: "info",
									message:
										H.length > 1
											? (0, w.localize)(11346, null)
											: (0, w.localize)(11347, null, H[0].name),
									primaryButton: (0, w.localize)(11348, null),
								})
							).confirmed
						)
							return !1;
						H.some((G) => G.isCurrent) && (await this.k.turnoff(!1));
						const V = H.filter((G) => !G.isCurrent).map((G) => [G.id, !1]);
						return V.length && (await this.g.setEnablements(V)), !0;
					}
					async rename(F) {
						const x = new o.$Zc(),
							H = x.add(this.h.createInputBox());
						(H.placeholder = (0, w.localize)(11349, null)),
							(H.busy = !0),
							H.show();
						const q = await this.l(),
							V = q.find(({ id: K }) => K === F);
						if (!V)
							throw (
								(H.hide(),
								x.dispose(),
								new Error((0, w.localize)(11350, null, F)))
							);
						(H.busy = !1), (H.value = V.name);
						const G = (K) => (
							(K = K.trim()),
							K && !q.some((J) => J.id !== F && J.name === K) ? K : null
						);
						return (
							x.add(
								H.onDidChangeValue(
									() =>
										(H.validationMessage = G(H.value)
											? ""
											: (0, w.localize)(11351, null)),
								),
							),
							new Promise((K, J) => {
								x.add(
									H.onDidAccept(async () => {
										const W = G(H.value);
										if ((x.dispose(), W && W !== V.name))
											try {
												await this.g.renameMachine(F, W), K(!0);
											} catch (X) {
												J(X);
											}
										else K(!1);
									}),
								);
							})
						);
					}
				};
				B = Ne(
					[j(1, l.$FRb), j(2, y.$DJ), j(3, $.$4N), j(4, g.$GO), j(5, s.$Nxc)],
					B,
				);
				let U = class {
					constructor(F, x, H, q) {
						(this.d = F), (this.f = x), (this.g = H), (this.h = q);
					}
					async getChildren(F) {
						return F
							? F.handle === "LAST_SYNC_STATES"
								? this.i()
								: F.handle === "SYNC_LOGS"
									? this.j()
									: []
							: [
									{
										handle: "SYNC_LOGS",
										collapsibleState: i.TreeItemCollapsibleState.Collapsed,
										label: { label: (0, w.localize)(11352, null) },
										themeIcon: f.$ak.folder,
									},
									{
										handle: "LAST_SYNC_STATES",
										collapsibleState: i.TreeItemCollapsibleState.Collapsed,
										label: { label: (0, w.localize)(11353, null) },
										themeIcon: f.$ak.folder,
									},
								];
					}
					async i() {
						const F = [];
						for (const x of m.$PRb) {
							const H = (0, m.$RRb)(void 0, x, this.g, this.h.extUri);
							(await this.d.exists(H)) &&
								F.push({
									handle: H.toString(),
									label: { label: (0, s.$Oxc)(x) },
									collapsibleState: i.TreeItemCollapsibleState.None,
									resourceUri: H,
									command: {
										id: S.$zWb,
										title: "",
										arguments: [H, void 0, void 0],
									},
								});
						}
						return F;
					}
					async j() {
						const F = await this.f.getAllLogResources(),
							x = [];
						for (const H of F) {
							const q = this.h.extUri.dirname(H);
							x.push({
								handle: H.toString(),
								collapsibleState: i.TreeItemCollapsibleState.None,
								resourceUri: H,
								label: { label: this.h.extUri.basename(q) },
								description: this.h.extUri.isEqual(q, this.g.logsHome)
									? (0, w.localize)(11354, null)
									: void 0,
								command: {
									id: S.$zWb,
									title: "",
									arguments: [H, void 0, void 0],
								},
							});
						}
						return x;
					}
				};
				U = Ne([j(0, I.$ll), j(1, s.$Nxc), j(2, T.$Ti), j(3, P.$Vl)], U);
			},
		),
		
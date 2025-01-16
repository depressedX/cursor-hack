define(
			de[4061],
			he([1, 0, 33, 6, 197, 10, 113, 22, 21, 32, 68, 1222, 150, 685, 1952]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$V1c = void 0);
				class g {
					async writeResource() {}
					async getAllResourceRefs() {
						return [];
					}
					async resolveResourceContent() {
						return null;
					}
				}
				class p {
					constructor() {
						(this.a = new i.$re()),
							(this.onDidChangeEnablement = this.a.event),
							(this.b = new i.$re()),
							(this.onDidChangeResourceEnablement = this.b.event);
					}
					isEnabled() {
						return !0;
					}
					canToggleEnablement() {
						return !0;
					}
					setEnablement(b) {}
					isResourceEnabled(b) {
						return !0;
					}
					setResourceEnablement(b, s) {}
					getResourceSyncStateVersion(b) {}
				}
				let o = class extends a.$$xc {
					constructor(b, s, l, y, $, v, S, I, T, P, k, L) {
						const D = new g(),
							M = new p();
						super(
							{ syncResource: h.SyncResource.WorkspaceState, profile: b },
							s,
							$,
							v,
							T,
							l,
							D,
							M,
							S,
							y,
							I,
							P,
						),
							(this.vb = k),
							(this.wb = L),
							(this.pb = 1);
					}
					async sync() {
						const b = new t.$Ce(),
							s = await this.vb.getWorkspaceStateFolders(b.token);
						if (!s.length) return;
						await this.I.flush();
						const l = this.I.keys(
							m.StorageScope.WORKSPACE,
							m.StorageTarget.USER,
						);
						if (!l.length) return;
						const y = {};
						l.forEach((v) => {
							const S = this.I.get(v, m.StorageScope.WORKSPACE);
							S && (y[v] = S);
						});
						const $ = { folders: s, storage: y, version: this.pb };
						await this.wb.write("workspaceState", (0, w.$hi)($));
					}
					async apply() {
						const b = this.wb.lastReadResources.get("editSessions")?.content,
							s = b ? JSON.parse(b).workspaceStateId : void 0,
							l = await this.wb.read("workspaceState", s);
						if (!l) return null;
						const y = (0, w.$ii)(l.content);
						if (!y)
							return (
								this.O.info(
									"Skipping initializing workspace state because remote workspace state does not exist.",
								),
								null
							);
						const $ = new t.$Ce(),
							v = await this.vb.matches(y.folders, $.token);
						if (!v)
							return (
								this.O.info(
									"Skipping initializing workspace state because remote workspace state does not match current workspace.",
								),
								null
							);
						const S = {};
						for (const I of Object.keys(y.storage)) S[I] = y.storage[I];
						if (Object.keys(S).length) {
							const I = [];
							for (const T of Object.keys(S))
								try {
									const P = (0, w.$ii)(S[T]);
									v(P),
										I.push({
											key: T,
											value: P,
											scope: m.StorageScope.WORKSPACE,
											target: m.StorageTarget.USER,
										});
								} catch {
									I.push({
										key: T,
										value: S[T],
										scope: m.StorageScope.WORKSPACE,
										target: m.StorageTarget.USER,
									});
								}
							this.I.storeAll(I, !0);
						}
						return this.wb.delete("workspaceState", l.ref), null;
					}
					tb(b, s, l, y) {
						throw new Error("Method not implemented.");
					}
					async qb(b, s, l, y, $) {
						return [];
					}
					rb(b, s) {
						throw new Error("Method not implemented.");
					}
					sb(b, s, l, y) {
						throw new Error("Method not implemented.");
					}
					async ub(b) {
						return !0;
					}
					async hasLocalData() {
						return !1;
					}
					async resolveContent(b) {
						return null;
					}
				};
				(e.$V1c = o),
					(e.$V1c = o =
						Ne(
							[
								j(4, d.$ll),
								j(5, C.$Ti),
								j(6, r.$km),
								j(7, E.$gj),
								j(8, m.$lq),
								j(9, u.$Vl),
								j(10, n.$T1c),
								j(11, c.$z1c),
							],
							o,
						));
			},
		),
		
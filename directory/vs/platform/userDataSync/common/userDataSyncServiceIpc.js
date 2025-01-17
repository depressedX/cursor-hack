import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/uri.js';
import '../../userDataProfile/common/userDataProfile.js';
import './userDataSync.js';
define(
			de[2939],
			he([1, 0, 6, 3, 9, 129, 150]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$n9c = e.$m9c = void 0);
				function d(h, c) {
					return {
						...h,
						profile: (0, E.$Yl)(h.profile, c.profilesHome.scheme),
					};
				}
				function m(h) {
					return { created: h.created, uri: w.URI.revive(h.uri) };
				}
				class r {
					constructor(c, n, g) {
						(this.c = c),
							(this.d = n),
							(this.f = g),
							(this.a = new Map()),
							(this.b = new t.$re());
					}
					listen(c, n) {
						switch (n) {
							case "onDidChangeStatus":
								return this.c.onDidChangeStatus;
							case "onDidChangeConflicts":
								return this.c.onDidChangeConflicts;
							case "onDidChangeLocal":
								return this.c.onDidChangeLocal;
							case "onDidChangeLastSyncTime":
								return this.c.onDidChangeLastSyncTime;
							case "onSyncErrors":
								return this.c.onSyncErrors;
							case "onDidResetLocal":
								return this.c.onDidResetLocal;
							case "onDidResetRemote":
								return this.c.onDidResetRemote;
							case "manualSync/onSynchronizeResources":
								return this.b.event;
						}
						throw new Error(
							`[UserDataSyncServiceChannel] Event not found: ${n}`,
						);
					}
					async call(c, n, g) {
						try {
							return await this.g(c, n, g);
						} catch (p) {
							throw (this.f.error(p), p);
						}
					}
					async g(c, n, g) {
						switch (n) {
							case "_getInitialData":
								return Promise.resolve([
									this.c.status,
									this.c.conflicts,
									this.c.lastSyncTime,
								]);
							case "reset":
								return this.c.reset();
							case "resetRemote":
								return this.c.resetRemote();
							case "resetLocal":
								return this.c.resetLocal();
							case "hasPreviouslySynced":
								return this.c.hasPreviouslySynced();
							case "hasLocalData":
								return this.c.hasLocalData();
							case "resolveContent":
								return this.c.resolveContent(w.URI.revive(g[0]));
							case "accept":
								return this.c.accept(
									d(g[0], this.d),
									w.URI.revive(g[1]),
									g[2],
									g[3],
								);
							case "replace":
								return this.c.replace(m(g[0]));
							case "cleanUpRemoteData":
								return this.c.cleanUpRemoteData();
							case "getRemoteActivityData":
								return this.c.saveRemoteActivityData(w.URI.revive(g[0]));
							case "extractActivityData":
								return this.c.extractActivityData(
									w.URI.revive(g[0]),
									w.URI.revive(g[1]),
								);
							case "createManualSyncTask":
								return this.i();
						}
						if (n.startsWith("manualSync/")) {
							const p = n.substring(11),
								o = g[0],
								f = this.h(o);
							switch (((g = g.slice(1)), p)) {
								case "merge":
									return f.merge();
								case "apply":
									return f.apply().then(() => this.a.delete(this.j(f.id)));
								case "stop":
									return f.stop().finally(() => this.a.delete(this.j(f.id)));
							}
						}
						throw new Error("Invalid call");
					}
					h(c) {
						const n = this.a.get(this.j(c));
						if (!n) throw new Error(`Manual sync taks not found: ${c}`);
						return n;
					}
					async i() {
						const c = await this.c.createManualSyncTask();
						return this.a.set(this.j(c.id), c), c.id;
					}
					j(c) {
						return `manualSyncTask-${c}`;
					}
				}
				e.$m9c = r;
				let u = class extends i.$1c {
					get status() {
						return this.b;
					}
					get onDidChangeLocal() {
						return this.a.listen("onDidChangeLocal");
					}
					get conflicts() {
						return this.f;
					}
					get lastSyncTime() {
						return this.h;
					}
					get onDidResetLocal() {
						return this.a.listen("onDidResetLocal");
					}
					get onDidResetRemote() {
						return this.a.listen("onDidResetRemote");
					}
					constructor(c, n) {
						super(),
							(this.n = n),
							(this.b = C.SyncStatus.Uninitialized),
							(this.c = this.D(new t.$re())),
							(this.onDidChangeStatus = this.c.event),
							(this.f = []),
							(this.g = this.D(new t.$re())),
							(this.onDidChangeConflicts = this.g.event),
							(this.h = void 0),
							(this.j = this.D(new t.$re())),
							(this.onDidChangeLastSyncTime = this.j.event),
							(this.m = this.D(new t.$re())),
							(this.onSyncErrors = this.m.event),
							(this.a = {
								call(g, p, o) {
									return c.call(g, p, o).then(null, (f) => {
										throw C.$YRb.toUserDataSyncError(f);
									});
								},
								listen(g, p) {
									return c.listen(g, p);
								},
							}),
							this.a.call("_getInitialData").then(([g, p, o]) => {
								this.q(g),
									this.s(p),
									o && this.t(o),
									this.D(this.a.listen("onDidChangeStatus")((f) => this.q(f))),
									this.D(
										this.a.listen("onDidChangeLastSyncTime")((f) => this.t(f)),
									);
							}),
							this.D(this.a.listen("onDidChangeConflicts")((g) => this.s(g))),
							this.D(
								this.a.listen("onSyncErrors")((g) =>
									this.m.fire(
										g.map((p) => ({
											...p,
											error: C.$YRb.toUserDataSyncError(p.error),
										})),
									),
								),
							);
					}
					createSyncTask() {
						throw new Error("not supported");
					}
					async createManualSyncTask() {
						const c = await this.a.call("createManualSyncTask"),
							n = this;
						return new a(c, {
							async call(p, o, f) {
								return n.a.call(
									`manualSync/${p}`,
									[c, ...(Array.isArray(o) ? o : [o])],
									f,
								);
							},
							listen() {
								throw new Error("not supported");
							},
						});
					}
					reset() {
						return this.a.call("reset");
					}
					resetRemote() {
						return this.a.call("resetRemote");
					}
					resetLocal() {
						return this.a.call("resetLocal");
					}
					hasPreviouslySynced() {
						return this.a.call("hasPreviouslySynced");
					}
					hasLocalData() {
						return this.a.call("hasLocalData");
					}
					accept(c, n, g, p) {
						return this.a.call("accept", [c, n, g, p]);
					}
					resolveContent(c) {
						return this.a.call("resolveContent", [c]);
					}
					cleanUpRemoteData() {
						return this.a.call("cleanUpRemoteData");
					}
					replace(c) {
						return this.a.call("replace", [c]);
					}
					saveRemoteActivityData(c) {
						return this.a.call("getRemoteActivityData", [c]);
					}
					extractActivityData(c, n) {
						return this.a.call("extractActivityData", [c, n]);
					}
					async q(c) {
						(this.b = c), this.c.fire(c);
					}
					async s(c) {
						(this.f = c.map((n) => ({
							syncResource: n.syncResource,
							profile: (0, E.$Yl)(n.profile, this.n.profilesHome.scheme),
							conflicts: n.conflicts.map((g) => ({
								...g,
								baseResource: w.URI.revive(g.baseResource),
								localResource: w.URI.revive(g.localResource),
								remoteResource: w.URI.revive(g.remoteResource),
								previewResource: w.URI.revive(g.previewResource),
							})),
						}))),
							this.g.fire(this.f);
					}
					t(c) {
						this.h !== c && ((this.h = c), this.j.fire(c));
					}
				};
				(e.$n9c = u), (e.$n9c = u = Ne([j(1, E.$Xl)], u));
				class a extends i.$1c {
					constructor(c, n) {
						super(), (this.id = c), (this.a = n);
					}
					async merge() {
						return this.a.call("merge");
					}
					async apply() {
						return this.a.call("apply");
					}
					stop() {
						return this.a.call("stop");
					}
					dispose() {
						this.a.call("dispose"), super.dispose();
					}
				}
			},
		),
		
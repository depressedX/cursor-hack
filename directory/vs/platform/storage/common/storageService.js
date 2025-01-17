import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/async.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/network.js';
import '../../../base/common/resources.js';
import '../../../base/parts/storage/common/storage.js';
import './storage.js';
import './storageIpc.js';
import '../../userDataProfile/common/userDataProfile.js';
define(
			de[2901],
			he([1, 0, 15, 3, 23, 19, 1174, 21, 1639, 129]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$J9c = void 0);
				class u extends d.$nq {
					constructor(h, c, n, g) {
						super(),
							(this.db = h),
							(this.eb = c),
							(this.fb = n),
							(this.gb = g),
							(this.s = this.eb.defaultProfile),
							(this.X = this.hb()),
							(this.Y = this.eb.currentProfile),
							(this.Z = this.D(new i.$Zc())),
							(this.$ = this.ib(this.Y)),
							(this.ab = this.db?.id),
							(this.bb = this.D(new i.$Zc())),
							(this.cb = this.jb(this.db));
					}
					hb() {
						const h = this.D(new m.$6wc(this.fb.getChannel("storage"))),
							c = this.D(new C.$hq(h));
						return (
							this.D(
								c.onDidChangeStorage((n) =>
									this.u(d.StorageScope.APPLICATION, n),
								),
							),
							c
						);
					}
					ib(h) {
						this.Z.clear(), (this.Y = h);
						let c;
						if ((0, d.$oq)(h)) c = this.X;
						else {
							const n = this.Z.add(
								new m.$7wc(this.fb.getChannel("storage"), h),
							);
							c = this.Z.add(new C.$hq(n));
						}
						return (
							this.Z.add(
								c.onDidChangeStorage((n) => this.u(d.StorageScope.PROFILE, n)),
							),
							c
						);
					}
					jb(h) {
						this.bb.clear(), (this.ab = h?.id);
						let c;
						if (h) {
							const n = this.bb.add(
								new m.$8wc(this.fb.getChannel("storage"), h),
							);
							(c = this.bb.add(new C.$hq(n))),
								this.bb.add(
									c.onDidChangeStorage((g) =>
										this.u(d.StorageScope.WORKSPACE, g),
									),
								);
						}
						return c;
					}
					async Q() {
						await t.Promises.settled([
							this.X.init(),
							this.$.init(),
							this.cb?.init() ?? Promise.resolve(),
						]);
					}
					R(h) {
						switch (h) {
							case d.StorageScope.APPLICATION:
								return this.X;
							case d.StorageScope.PROFILE:
								return this.$;
							default:
								return this.cb;
						}
					}
					S(h) {
						switch (h) {
							case d.StorageScope.APPLICATION:
								return this.s.globalStorageHome.with({ scheme: w.Schemas.file })
									.fsPath;
							case d.StorageScope.PROFILE:
								return this.Y?.globalStorageHome.with({
									scheme: w.Schemas.file,
								}).fsPath;
							default:
								return this.ab
									? `${(0, E.$nh)(this.gb.workspaceStorageHome, this.ab, "state.vscdb").with({ scheme: w.Schemas.file }).fsPath}`
									: void 0;
						}
					}
					async close() {
						this.t(), this.w(d.WillSaveStateReason.SHUTDOWN);
						for (const h of this.N)
							try {
								await h();
							} catch (c) {
								console.error(c);
							}
						await t.Promises.settled([
							this.X.close(),
							this.$.close(),
							this.cb?.close() ?? Promise.resolve(),
						]);
					}
					async U(h) {
						if (!this.O(this.Y, h)) return;
						const c = this.$,
							n = c.items;
						c !== this.X && (await c.close()),
							(this.$ = this.ib(h)),
							await this.$.init(),
							this.P(n, this.$, d.StorageScope.PROFILE);
					}
					async W(h, c) {
						const n = this.cb,
							g = n?.items ?? new Map();
						await n?.close(),
							(this.cb = this.jb(h)),
							await this.cb.init(),
							this.P(g, this.cb, d.StorageScope.WORKSPACE);
					}
					hasScope(h) {
						return (0, r.$Wl)(h) ? this.Y.id === h.id : this.ab === h.id;
					}
				}
				e.$J9c = u;
			},
		),
		
import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../fs.js';
import '../../../../base/common/lifecycle.js';
import '../../common/watcher.js';
import '../../../../base/common/event.js';
import '../../common/files.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/async.js';
import '../../../../base/common/hash.js';
define(
			Pe[481],
			Ne([1, 0, 59, 3, 109, 4, 32, 2, 9, 78]),
			function (we, t, e, r, S, N, P, I, l, n) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }), (t.$Mr = void 0);
				class p extends r.$1c {
					constructor() {
						super(),
							(this.a = this.D(new N.$re())),
							(this.onDidChangeFile = this.a.event),
							(this.b = this.D(new N.$re())),
							(this.onDidLogMessage = this.b.event),
							(this.c = this.D(new N.$re())),
							(this.f = this.c.event),
							(this.g = new Map()),
							(this.h = new Map()),
							(this.j = this.D(new r.$0c())),
							(this.m = new Set()),
							(this.n = this.D(new l.$Kh(this.w()))),
							(this.q = 5007),
							(this.r = new l.$0h()),
							(this.R = !1),
							this.D(
								this.f((d) =>
									this.y({
										id: this.t(d),
										correlationId: this.s(d) ? d.correlationId : void 0,
										path: d.path,
									}),
								),
							);
					}
					s(d) {
						return (0, S.$tr)(d);
					}
					t(d) {
						return this.s(d) ? d.correlationId : (0, n.$Aj)(d);
					}
					async watch(d) {
						this.r.isSettled || this.r.complete(), (this.r = new l.$0h());
						try {
							this.g.clear(), this.h.clear();
							for (const k of d)
								this.s(k)
									? this.g.set(k.correlationId, k)
									: this.h.set(this.t(k), k);
							for (const [k] of this.j)
								!this.h.has(k) &&
									!this.g.has(k) &&
									(this.j.deleteAndDispose(k), this.m.delete(k));
							return await this.u(!1);
						} finally {
							this.r.complete();
						}
					}
					u(d) {
						const k = [];
						for (const [g, c] of [...this.h, ...this.g])
							this.j.has(g) || k.push(c);
						return this.n.trigger(() => this.N(k), d ? this.w() : 0);
					}
					w() {
						return 800;
					}
					isSuspended(d) {
						const k = this.t(d);
						return this.m.has(k) ? "polling" : this.j.has(k);
					}
					async y(d) {
						if (this.j.has(d.id)) return;
						const k = new r.$Zc();
						this.j.set(d.id, k),
							await this.r.p,
							!k.isDisposed && (this.C(d, k), this.u(!0));
					}
					z(d) {
						this.j.deleteAndDispose(d.id), this.m.delete(d.id), this.u(!1);
					}
					C(d, k) {
						this.F(d, k)
							? (this.P(
									`reusing an existing recursive watcher to monitor ${d.path}`,
								),
								this.m.delete(d.id))
							: (this.G(d, k), this.m.add(d.id));
					}
					F(d, k) {
						const g = this.O?.subscribe(d.path, (c, h) => {
							k.isDisposed ||
								(c
									? this.C(d, k)
									: h?.type === P.FileChangeType.ADDED && this.H(d));
						});
						return g ? (k.add(g), !0) : !1;
					}
					G(d, k) {
						let g = !1;
						const c = (h, $) => {
							if (k.isDisposed) return;
							const T = this.I(h),
								a = this.I($),
								u = g;
							(g = T), !T && (a || u) && this.H(d);
						};
						this.P(
							`starting fs.watchFile() on ${d.path} (correlationId: ${d.correlationId})`,
						);
						try {
							(0, e.watchFile)(d.path, { persistent: !1, interval: this.q }, c);
						} catch (h) {
							this.Q(
								`fs.watchFile() failed with error ${h} on path ${d.path} (correlationId: ${d.correlationId})`,
							);
						}
						k.add(
							(0, r.$Yc)(() => {
								this.P(
									`stopping fs.watchFile() on ${d.path} (correlationId: ${d.correlationId})`,
								);
								try {
									(0, e.unwatchFile)(d.path, c);
								} catch (h) {
									this.Q(
										`fs.unwatchFile() failed with error ${h} on path ${d.path} (correlationId: ${d.correlationId})`,
									);
								}
							}),
						);
					}
					H(d) {
						this.P(
							`detected ${d.path} exists again, resuming watcher (correlationId: ${d.correlationId})`,
						);
						const k = {
							resource: I.URI.file(d.path),
							type: P.FileChangeType.ADDED,
							cId: d.correlationId,
						};
						this.a.fire([k]), this.J(k, d), this.z(d);
					}
					I(d) {
						return d.ctimeMs === 0 && d.ino === 0;
					}
					async stop() {
						this.j.clearAndDisposeAll(), this.m.clear();
					}
					J(d, k) {
						if (this.R) {
							const g = ` >> normalized ${d.type === P.FileChangeType.ADDED ? "[ADDED]" : d.type === P.FileChangeType.DELETED ? "[DELETED]" : "[CHANGED]"} ${d.resource.fsPath}`;
							this.L(g, k);
						}
					}
					L(d, k) {
						this.R &&
							this.P(
								`${d}${typeof k.correlationId == "number" ? ` <${k.correlationId}> ` : ""}`,
							);
					}
					M(d) {
						return `${d.path} (excludes: ${d.excludes.length > 0 ? d.excludes : "<none>"}, includes: ${d.includes && d.includes.length > 0 ? JSON.stringify(d.includes) : "<all>"}, filter: ${(0, S.$Dr)(d.filter)}, correlationId: ${typeof d.correlationId == "number" ? d.correlationId : "<none>"})`;
					}
					async setVerboseLogging(d) {
						this.R = d;
					}
				}
				t.$Mr = p;
			},
		),
		
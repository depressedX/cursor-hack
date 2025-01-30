import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/event.js';
import '../../../../base/common/types.js';
import '../../../../platform/registry/common/platform.js';
import '../../../common/contributions.js';
import '../../lifecycle/common/lifecycle.js';
import './workingCopyHistoryTracker.js';
import '../../../../base/common/lifecycle.js';
import './workingCopyHistory.js';
import '../../../../platform/files/common/files.js';
import '../../remote/common/remoteAgentService.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/async.js';
import '../../../../base/common/resources.js';
import '../../environment/common/environmentService.js';
import '../../../../base/common/hash.js';
import '../../../../base/common/extpath.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/map.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../platform/label/common/label.js';
import '../../../../base/common/buffer.js';
import '../../../../platform/log/common/log.js';
import '../../../common/editor.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/strings.js';
define(
			de[3914],
			he([
				1, 0, 4, 6, 28, 30, 55, 52, 3913, 3, 717, 22, 143, 9, 15, 19, 78, 136,
				249, 33, 59, 68, 73, 76, 34, 44, 10, 24, 37,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*event*/,
				w /*types*/,
				E /*platform*/,
				C /*contributions*/,
				d /*lifecycle*/,
				m /*workingCopyHistoryTracker*/,
				r /*lifecycle*/,
				u /*workingCopyHistory*/,
				a /*files*/,
				h /*remoteAgentService*/,
				c /*uri*/,
				n /*async*/,
				g /*resources*/,
				p /*environmentService*/,
				o /*hash*/,
				f /*extpath*/,
				b /*cancellation*/,
				s /*map*/,
				l /*uriIdentity*/,
				y /*label*/,
				$ /*buffer*/,
				v /*log*/,
				S /*editor*/,
				I /*configuration*/,
				T /*arrays*/,
				P /*strings*/,
) {
				"use strict";
				var k, L;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$H5c = e.$G5c = e.$F5c = void 0);
				class D {
					static {
						this.ENTRIES_FILE = "entries.json";
					}
					static {
						this.a = S.$p1.registerSource(
							"default.source",
							(0, t.localize)(13149, null),
						);
					}
					static {
						this.b = {
							MAX_ENTRIES: "workbench.localHistory.maxFileEntries",
							MERGE_PERIOD: "workbench.localHistory.mergeWindow",
						};
					}
					constructor(R, O, B, U, z, F, x, H, q, V, G) {
						(this.n = O),
							(this.o = B),
							(this.q = U),
							(this.r = z),
							(this.s = F),
							(this.t = x),
							(this.u = H),
							(this.v = q),
							(this.w = V),
							(this.x = G),
							(this.c = []),
							(this.d = void 0),
							(this.f = void 0),
							(this.g = void 0),
							(this.h = void 0),
							(this.i = void 0),
							(this.j = void 0),
							(this.k = 0),
							(this.l = this.k),
							(this.m = new n.$Sh(1)),
							this.y(R);
					}
					y(R) {
						(this.f = R),
							(this.g = this.v.getUriBasenameLabel(R)),
							(this.j = new RegExp(
								`[A-Za-z0-9]{4}${(0, P.$of)((0, g.$lh)(R))}`,
							)),
							(this.h = this.z(this.n, R)),
							(this.i = (0, g.$nh)(this.h, D.ENTRIES_FILE)),
							(this.c = []),
							(this.d = void 0);
					}
					z(R, O) {
						return (0, g.$nh)(R, (0, o.$Aj)(O.toString()).toString(16));
					}
					async addEntry(R = D.a, O = void 0, B = Date.now(), U) {
						let z;
						const F = (0, T.$Tb)(this.c);
						if (F && F.source === R) {
							const H = this.x.getValue(D.b.MERGE_PERIOD, { resource: this.f });
							B - F.timestamp <= H * 1e3 && (z = F);
						}
						let x;
						return (
							z
								? (x = await this.B(z, R, O, B, U))
								: (x = await this.A(R, O, B, U)),
							this.t.flushOnChange &&
								!U.isCancellationRequested &&
								(await this.store(U)),
							x
						);
					}
					async A(R, O = void 0, B, U) {
						const z = (0, w.$wg)(this.f),
							F = (0, w.$wg)(this.g),
							x = (0, w.$wg)(this.h),
							H = `${(0, f.$Ug)(void 0, void 0, 4)}${(0, g.$lh)(z)}`,
							q = (0, g.$nh)(x, H);
						await this.u.cloneFile(z, q);
						const V = {
							id: H,
							workingCopy: { resource: z, name: F },
							location: q,
							timestamp: B,
							source: R,
							sourceDescription: O,
						};
						return this.c.push(V), this.k++, this.o.fire({ entry: V }), V;
					}
					async B(R, O, B = void 0, U, z) {
						const F = (0, w.$wg)(this.f);
						return (
							await this.u.cloneFile(F, R.location),
							(R.source = O),
							(R.sourceDescription = B),
							(R.timestamp = U),
							this.k++,
							this.r.fire({ entry: R }),
							R
						);
					}
					async removeEntry(R, O) {
						if ((await this.C(), O.isCancellationRequested)) return !1;
						const B = this.c.indexOf(R);
						return B === -1
							? !1
							: (await this.I(R),
								this.c.splice(B, 1),
								this.k++,
								this.s.fire({ entry: R }),
								this.t.flushOnChange &&
									!O.isCancellationRequested &&
									(await this.store(O)),
								!0);
					}
					async updateEntry(R, O, B) {
						await this.C(),
							!(B.isCancellationRequested || this.c.indexOf(R) === -1) &&
								((R.source = O.source),
								this.k++,
								this.q.fire({ entry: R }),
								this.t.flushOnChange &&
									!B.isCancellationRequested &&
									(await this.store(B)));
					}
					async getEntries() {
						await this.C();
						const R = this.x.getValue(D.b.MAX_ENTRIES, { resource: this.f });
						return this.c.length > R ? this.c.slice(this.c.length - R) : this.c;
					}
					async hasEntries(R) {
						return R || (await this.C()), this.c.length > 0;
					}
					C() {
						return this.d || (this.d = this.D()), this.d;
					}
					async D() {
						const R = await this.E();
						for (const O of this.c) R.set(O.id, O);
						this.c = Array.from(R.values()).sort(
							(O, B) => O.timestamp - B.timestamp,
						);
					}
					async E() {
						const R = (0, w.$wg)(this.f),
							O = (0, w.$wg)(this.g),
							[B, U] = await Promise.all([this.K(), this.L()]),
							z = new Map();
						if (U)
							for (const F of U)
								z.set(F.name, {
									id: F.name,
									workingCopy: { resource: R, name: O },
									location: F.resource,
									timestamp: F.mtime,
									source: D.a,
									sourceDescription: void 0,
								});
						if (B)
							for (const F of B.entries) {
								const x = z.get(F.id);
								x &&
									z.set(F.id, {
										...x,
										timestamp: F.timestamp,
										source: F.source ?? x.source,
										sourceDescription:
											F.sourceDescription ?? x.sourceDescription,
									});
							}
						return z;
					}
					async moveEntries(R, O, B) {
						const U = Date.now(),
							z = this.v.getUriLabel((0, w.$wg)(this.f)),
							F = (0, w.$wg)(this.h),
							x = (0, w.$wg)(R.h);
						try {
							for (const G of this.c)
								await this.u.move(G.location, (0, g.$nh)(x, G.id), !0);
							await this.u.del(F, { recursive: !0 });
						} catch (G) {
							if (!this.M(G))
								try {
									await this.u.move(F, x, !0);
								} catch (K) {
									this.M(K) || this.N(K);
								}
						}
						const H = (0, T.$Qb)([...this.c, ...R.c], (G) => G.id).sort(
								(G, K) => G.timestamp - K.timestamp,
							),
							q = (0, w.$wg)(R.f);
						this.y(q);
						const V = (0, w.$wg)(R.g);
						for (const G of H)
							this.c.push({
								id: G.id,
								location: (0, g.$nh)(x, G.id),
								source: G.source,
								sourceDescription: G.sourceDescription,
								timestamp: G.timestamp,
								workingCopy: { resource: q, name: V },
							});
						await this.addEntry(O, z, U, B), await this.store(B);
					}
					async store(R) {
						this.F() &&
							(await this.m.queue(async () => {
								if (!(R.isCancellationRequested || !this.F())) return this.G(R);
							}));
					}
					F() {
						return this.l !== this.k;
					}
					async G(R) {
						const O = (0, w.$wg)(this.h);
						if ((await this.C(), R.isCancellationRequested)) return;
						await this.H();
						const B = this.k;
						if (this.c.length === 0)
							try {
								await this.u.del(O, { recursive: !0 });
							} catch (U) {
								this.N(U);
							}
						else await this.J();
						this.l = B;
					}
					async H() {
						const R = this.x.getValue(D.b.MAX_ENTRIES, { resource: this.f });
						if (this.c.length <= R) return;
						const O = this.c.slice(0, this.c.length - R),
							B = this.c.slice(this.c.length - R);
						for (const U of O) await this.I(U);
						this.c = B;
						for (const U of O) this.s.fire({ entry: U });
					}
					async I(R) {
						try {
							await this.u.del(R.location);
						} catch (O) {
							this.N(O);
						}
					}
					async J() {
						const R = (0, w.$wg)(this.f),
							O = (0, w.$wg)(this.i),
							B = {
								version: 1,
								resource: R.toString(),
								entries: this.c.map((U) => ({
									id: U.id,
									source: U.source !== D.a ? U.source : void 0,
									sourceDescription: U.sourceDescription,
									timestamp: U.timestamp,
								})),
							};
						await this.u.writeFile(O, $.$Te.fromString(JSON.stringify(B)));
					}
					async K() {
						const R = (0, w.$wg)(this.i);
						let O;
						try {
							O = JSON.parse((await this.u.readFile(R)).value.toString());
						} catch (B) {
							this.M(B) || this.N(B);
						}
						return O;
					}
					async L() {
						const R = (0, w.$wg)(this.h),
							O = (0, w.$wg)(this.j);
						let B;
						try {
							B = (await this.u.resolve(R, { resolveMetadata: !0 })).children;
						} catch (U) {
							this.M(U) || this.N(U);
						}
						if (B)
							return B.filter(
								(U) => !(0, g.$gh)(U.resource, this.i) && O.test(U.name),
							);
					}
					M(R) {
						return (
							R instanceof a.$Gl &&
							R.fileOperationResult === a.FileOperationResult.FILE_NOT_FOUND
						);
					}
					N(R) {
						this.w.trace("[Working Copy History Service]", R);
					}
				}
				e.$F5c = D;
				let M = class extends r.$1c {
					static {
						k = this;
					}
					static {
						this.a = S.$p1.registerSource(
							"moved.source",
							(0, t.localize)(13150, null),
						);
					}
					static {
						this.b = S.$p1.registerSource(
							"renamed.source",
							(0, t.localize)(13151, null),
						);
					}
					constructor(R, O, B, U, z, F, x) {
						super(),
							(this.r = R),
							(this.s = O),
							(this.t = B),
							(this.u = U),
							(this.w = z),
							(this.y = F),
							(this.z = x),
							(this.c = this.D(new i.$re())),
							(this.onDidAddEntry = this.c.event),
							(this.f = this.D(new i.$re())),
							(this.onDidChangeEntry = this.f.event),
							(this.g = this.D(new i.$re())),
							(this.onDidReplaceEntry = this.g.event),
							(this.h = this.D(new i.$re())),
							(this.onDidMoveEntries = this.h.event),
							(this.j = this.D(new i.$re())),
							(this.onDidRemoveEntry = this.j.event),
							(this.m = this.D(new i.$re())),
							(this.onDidRemoveEntries = this.m.event),
							(this.n = new n.$0h()),
							(this.q = new s.$Gc((H) => this.u.extUri.getComparisonKey(H))),
							this.C();
					}
					async C() {
						let R;
						try {
							const O = await this.s.getEnvironment();
							O && (R = O.localHistoryHome);
						} catch (O) {
							this.y.trace(O);
						}
						R || (R = this.t.localHistoryHome), this.n.complete(R);
					}
					async moveEntries(R, O) {
						const B = new n.$Sh(u.$b2c),
							U = [];
						for (const [F, x] of this.q) {
							if (!this.u.extUri.isEqualOrParent(F, R)) continue;
							let H;
							if (this.u.extUri.isEqual(R, F)) H = O;
							else {
								const V = (0, f.$Sg)(F.path, R.path);
								H = (0, g.$nh)(O, F.path.substr(V + R.path.length + 1));
							}
							let q;
							this.u.extUri.isEqual((0, g.$mh)(F), (0, g.$mh)(H))
								? (q = k.b)
								: (q = k.a),
								U.push(B.queue(() => this.F(x, q, F, H)));
						}
						if (!U.length) return [];
						const z = await Promise.all(U);
						return this.h.fire(), z;
					}
					async F(R, O, B, U) {
						const z = await this.G(U);
						return (
							await R.moveEntries(z, O, b.CancellationToken.None),
							this.q.delete(B),
							this.q.set(U, R),
							U
						);
					}
					async addEntry({ resource: R, source: O, timestamp: B }, U) {
						if (!this.r.hasProvider(R)) return;
						const z = await this.G(R);
						if (!U.isCancellationRequested) return z.addEntry(O, void 0, B, U);
					}
					async updateEntry(R, O, B) {
						const U = await this.G(R.workingCopy.resource);
						if (!B.isCancellationRequested) return U.updateEntry(R, O, B);
					}
					async removeEntry(R, O) {
						const B = await this.G(R.workingCopy.resource);
						return O.isCancellationRequested ? !1 : B.removeEntry(R, O);
					}
					async removeAll(R) {
						const O = await this.n.p;
						R.isCancellationRequested ||
							(this.q.clear(),
							await this.r.del(O, { recursive: !0 }),
							this.m.fire());
					}
					async getEntries(R, O) {
						const B = await this.G(R);
						return O.isCancellationRequested
							? []
							: ((await B.getEntries()) ?? []);
					}
					async getAll(R) {
						const O = await this.n.p;
						if (R.isCancellationRequested) return [];
						const B = new s.$Gc();
						for (const [U, z] of this.q)
							(await z.hasEntries(!0)) && B.set(U, !0);
						try {
							const U = await this.r.resolve(O);
							if (U.children) {
								const z = new n.$Sh(u.$b2c),
									F = [];
								for (const x of U.children)
									F.push(
										z.queue(async () => {
											if (!R.isCancellationRequested)
												try {
													const H = JSON.parse(
														(
															await this.r.readFile(
																(0, g.$nh)(x.resource, D.ENTRIES_FILE),
															)
														).value.toString(),
													);
													H.entries.length > 0 &&
														B.set(c.URI.parse(H.resource), !0);
												} catch {}
										}),
									);
								await Promise.all(F);
							}
						} catch {}
						return Array.from(B.keys());
					}
					async G(R) {
						const O = await this.n.p;
						let B = this.q.get(R);
						return (
							B ||
								((B = new D(
									R,
									O,
									this.c,
									this.f,
									this.g,
									this.j,
									this.H(),
									this.r,
									this.w,
									this.y,
									this.z,
								)),
								this.q.set(R, B)),
							B
						);
					}
				};
				(e.$G5c = M),
					(e.$G5c =
						M =
						k =
							Ne(
								[
									j(0, a.$ll),
									j(1, h.$$m),
									j(2, p.$r8),
									j(3, l.$Vl),
									j(4, y.$3N),
									j(5, v.$ik),
									j(6, I.$gj),
								],
								M,
							));
				let N = class extends M {
					static {
						L = this;
					}
					static {
						this.I = 5 * 60 * 1e3;
					}
					constructor(R, O, B, U, z, F, x, H) {
						super(R, O, B, U, z, x, H),
							(this.N = F),
							(this.J = typeof this.t.remoteAuthority == "string"),
							(this.L = this.D(new b.$Ce())),
							(this.M = this.D(new n.$Yh(() => this.S(this.L.token), L.I))),
							this.O();
					}
					O() {
						this.J ||
							(this.D(this.N.onWillShutdown((R) => this.Q(R))),
							this.D(
								i.Event.any(
									this.onDidAddEntry,
									this.onDidChangeEntry,
									this.onDidReplaceEntry,
									this.onDidRemoveEntry,
								)(() => this.R()),
							));
					}
					H() {
						return { flushOnChange: this.J };
					}
					Q(R) {
						this.M.dispose(),
							this.L.dispose(!0),
							R.join(this.S(R.token), {
								id: "join.workingCopyHistory",
								label: (0, t.localize)(13152, null),
							});
					}
					R() {
						this.M.isScheduled() || this.M.schedule();
					}
					async S(R) {
						const O = new n.$Sh(u.$b2c),
							B = [],
							U = Array.from(this.q.values());
						for (const z of U)
							B.push(
								O.queue(async () => {
									if (!R.isCancellationRequested)
										try {
											await z.store(R);
										} catch (F) {
											this.y.trace(F);
										}
								}),
							);
						await Promise.all(B);
					}
				};
				(e.$H5c = N),
					(e.$H5c =
						N =
						L =
							Ne(
								[
									j(0, a.$ll),
									j(1, h.$$m),
									j(2, p.$r8),
									j(3, l.$Vl),
									j(4, y.$3N),
									j(5, d.$n6),
									j(6, v.$ik),
									j(7, I.$gj),
								],
								N,
							)),
					E.$Io
						.as(C.Extensions.Workbench)
						.registerWorkbenchContribution(m.$E5c, d.LifecyclePhase.Restored);
			},
		),
		
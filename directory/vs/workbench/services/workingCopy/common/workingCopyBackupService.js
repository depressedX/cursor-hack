import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/objects.js';
import '../../../../base/common/async.js';
import '../../../../platform/files/common/files.js';
import '../../../../base/common/map.js';
import '../../../../base/common/stream.js';
import '../../../../base/common/buffer.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/log/common/log.js';
import '../../../../base/common/network.js';
import '../../../../base/common/hash.js';
import '../../../../base/common/types.js';
import './workingCopy.js';
define(
			de[1912],
			he([1, 0, 19, 9, 24, 82, 15, 22, 59, 408, 76, 3, 34, 23, 136, 28, 334]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				var o;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$x5c = e.$w5c = e.$v5c = void 0),
					(e.$y5c = y);
				class f {
					static async create(I, T) {
						const P = new f(I, T);
						return await P.d(), P;
					}
					constructor(I, T) {
						(this.b = I), (this.c = T), (this.a = new m.$Gc());
					}
					async d() {
						try {
							const I = await this.c.resolve(this.b);
							I.children &&
								(await C.Promises.settled(
									I.children
										.filter((T) => T.isDirectory)
										.map(async (T) => {
											const P = await this.c.resolve(T.resource);
											if (P.children)
												for (const k of P.children)
													k.isDirectory || this.add(k.resource);
										}),
								));
						} catch {}
					}
					add(I, T = 0, P) {
						this.a.set(I, { versionId: T, meta: (0, E.$vo)(P) });
					}
					update(I, T) {
						const P = this.a.get(I);
						P && (P.meta = (0, E.$vo)(T));
					}
					count() {
						return this.a.size;
					}
					has(I, T, P) {
						const k = this.a.get(I);
						return !(
							!k ||
							(typeof T == "number" && T !== k.versionId) ||
							(P && !(0, E.$zo)(P, k.meta))
						);
					}
					get() {
						return Array.from(this.a.keys());
					}
					remove(I) {
						this.a.delete(I);
					}
					clear() {
						this.a.clear();
					}
				}
				e.$v5c = f;
				let b = class extends a.$1c {
					constructor(I, T, P) {
						super(), (this.b = T), (this.g = P), (this.a = this.D(this.h(I)));
					}
					h(I) {
						return I ? new s(I, this.b, this.g) : new l();
					}
					reinitialize(I) {
						this.a instanceof s &&
							(I ? this.a.initialize(I) : (this.a = new l()));
					}
					hasBackups() {
						return this.a.hasBackups();
					}
					hasBackupSync(I, T, P) {
						return this.a.hasBackupSync(I, T, P);
					}
					backup(I, T, P, k, L) {
						return this.a.backup(I, T, P, k, L);
					}
					discardBackup(I, T) {
						return this.a.discardBackup(I, T);
					}
					discardBackups(I) {
						return this.a.discardBackups(I);
					}
					getBackups() {
						return this.a.getBackups();
					}
					resolve(I) {
						return this.a.resolve(I);
					}
					toBackupResource(I) {
						return this.a.toBackupResource(I);
					}
					joinBackups() {
						return this.a.joinBackups();
					}
				};
				(e.$w5c = b), (e.$w5c = b = Ne([j(1, d.$ll), j(2, h.$ik)], b));
				let s = class extends a.$1c {
					static {
						o = this;
					}
					static {
						this.a = `
`;
					}
					static {
						this.b = 10;
					}
					static {
						this.c = " ";
					}
					static {
						this.f = 1e4;
					}
					constructor(I, T, P) {
						super(),
							(this.m = I),
							(this.n = T),
							(this.q = P),
							(this.g = this.D(new C.$Vh())),
							(this.j = void 0),
							this.initialize(I);
					}
					initialize(I) {
						(this.m = I), (this.h = this.r());
					}
					async r() {
						return (this.j = await f.create(this.m, this.n)), this.j;
					}
					async hasBackups() {
						const I = await this.h;
						return await this.joinBackups(), I.count() > 0;
					}
					hasBackupSync(I, T, P) {
						if (!this.j) return !1;
						const k = this.toBackupResource(I);
						return this.j.has(k, T, P);
					}
					async backup(I, T, P, k, L) {
						const D = await this.h;
						if (L?.isCancellationRequested) return;
						const M = this.toBackupResource(I);
						if (!D.has(M, P, k))
							return this.g.queueFor(M, async () => {
								if (L?.isCancellationRequested || D.has(M, P, k)) return;
								let N = this.s(I, k);
								N.length >= o.f && (N = this.s(I));
								const A = u.$Te.fromString(N);
								let R;
								(0, r.$Fe)(T)
									? (R = (0, u.$_e)(A, T))
									: T
										? (R = (0, u.$$e)(A, T))
										: (R = u.$Te.concat([A, u.$Te.fromString("")])),
									await this.n.writeFile(M, R),
									D.add(M, P, k);
							});
					}
					s(I, T) {
						return `${I.resource.toString()}${o.c}${JSON.stringify({ ...T, typeId: I.typeId })}${o.a}`;
					}
					async discardBackups(I) {
						const T = await this.h,
							P = I?.except;
						if (Array.isArray(P) && P.length > 0) {
							const k = new m.$Gc();
							for (const L of P) k.set(this.toBackupResource(L), !0);
							await C.Promises.settled(
								T.get().map(async (L) => {
									k.has(L) || (await this.t(L));
								}),
							);
						} else await this.u(this.m), T.clear();
					}
					discardBackup(I, T) {
						const P = this.toBackupResource(I);
						return this.t(P, T);
					}
					async t(I, T) {
						const P = await this.h;
						if (!T?.isCancellationRequested)
							return this.g.queueFor(I, async () => {
								T?.isCancellationRequested || (await this.u(I), P.remove(I));
							});
					}
					async u(I) {
						try {
							await this.n.del(I, { recursive: !0 });
						} catch (T) {
							if (
								T.fileOperationResult !== d.FileOperationResult.FILE_NOT_FOUND
							)
								throw T;
						}
					}
					async getBackups() {
						const I = await this.h;
						await this.joinBackups();
						const T = await Promise.all(I.get().map((P) => this.w(P, I)));
						return (0, w.$Lb)(T);
					}
					async w(I, T) {
						let P;
						return (
							await this.g.queueFor(I, async () => {
								if (!T.has(I)) return;
								const k = await this.y(I, o.a, o.f);
								if (!k) return;
								const L = k.indexOf(o.c);
								let D, M;
								L > 0
									? ((D = k.substring(0, L)), (M = k.substr(L + 1)))
									: ((D = k), (M = void 0));
								const { typeId: N, meta: A } = this.z(M);
								T.update(I, A),
									(P = { typeId: N ?? p.$OO, resource: i.URI.parse(D) });
							}),
							P
						);
					}
					async y(I, T, P) {
						const k = (
								await this.n.readFile(I, { length: P })
							).value.toString(),
							L = k.indexOf(T);
						if (L >= 0) return k.substr(0, L);
					}
					async resolve(I) {
						const T = this.toBackupResource(I),
							P = await this.h;
						let k;
						return (
							await this.g.queueFor(T, async () => {
								if (!P.has(T)) return;
								const L = await this.n.readFileStream(T),
									D = await (0, r.$Me)(L.value, 1),
									M = u.$Te.concat(D.buffer),
									N = M.buffer.indexOf(o.b);
								if (N === -1) {
									this.q.trace(
										`Backup: Could not find meta end marker in ${T}. The file is probably corrupt (filesize: ${L.size}).`,
									);
									return;
								}
								const A = M.slice(0, N).toString();
								let R;
								const O = A.indexOf(o.c);
								O !== -1 && (R = this.z(A.substr(O + 1)).meta), P.update(T, R);
								const B = M.slice(N + 1);
								let U;
								D.ended ? (U = (0, u.$8e)(B)) : (U = (0, u.$_e)(B, D.stream)),
									(k = { value: U, meta: R });
							}),
							k
						);
					}
					z(I) {
						let T, P;
						if (I)
							try {
								(P = JSON.parse(I)),
									(T = P?.typeId),
									typeof P?.typeId == "string" &&
										(delete P.typeId, (0, g.$yg)(P) && (P = void 0));
							} catch {}
						return { typeId: T, meta: P };
					}
					toBackupResource(I) {
						return (0, t.$nh)(this.m, I.resource.scheme, y(I));
					}
					joinBackups() {
						return this.g.whenDrained();
					}
				};
				s = o = Ne([j(1, d.$ll), j(2, h.$ik)], s);
				class l extends a.$1c {
					constructor() {
						super(), (this.a = new m.$Gc());
					}
					async hasBackups() {
						return this.a.size > 0;
					}
					hasBackupSync(I, T) {
						const P = this.toBackupResource(I);
						return this.a.has(P);
					}
					async backup(I, T, P, k, L) {
						const D = this.toBackupResource(I);
						this.a.set(D, {
							typeId: I.typeId,
							content:
								T instanceof u.$Te
									? T
									: T
										? (0, r.$Fe)(T)
											? await (0, u.$6e)(T)
											: (0, u.$4e)(T)
										: u.$Te.fromString(""),
							meta: k,
						});
					}
					async resolve(I) {
						const T = this.toBackupResource(I),
							P = this.a.get(T);
						if (P) return { value: (0, u.$8e)(P.content), meta: P.meta };
					}
					async getBackups() {
						return Array.from(this.a.entries()).map(([I, T]) => ({
							typeId: T.typeId,
							resource: I,
						}));
					}
					async discardBackup(I) {
						this.a.delete(this.toBackupResource(I));
					}
					async discardBackups(I) {
						const T = I?.except;
						if (Array.isArray(T) && T.length > 0) {
							const P = new m.$Gc();
							for (const k of T) P.set(this.toBackupResource(k), !0);
							for (const k of await this.getBackups())
								P.has(this.toBackupResource(k)) ||
									(await this.discardBackup(k));
						} else this.a.clear();
					}
					toBackupResource(I) {
						return i.URI.from({ scheme: c.Schemas.inMemory, path: y(I) });
					}
					async joinBackups() {}
				}
				e.$x5c = l;
				function y(S) {
					let I;
					if (S.typeId.length > 0) {
						const T = v(S.typeId);
						S.resource.path
							? (I = (0, t.$nh)(S.resource, T))
							: (I = S.resource.with({ path: T }));
					} else I = S.resource;
					return $(I);
				}
				function $(S) {
					const I =
						S.scheme === c.Schemas.file || S.scheme === c.Schemas.untitled
							? S.fsPath
							: S.toString();
					return v(I);
				}
				function v(S) {
					return (0, n.$Aj)(S).toString(16);
				}
			},
		),
		
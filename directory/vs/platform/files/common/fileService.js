import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/arrays.js';
import '../../../base/common/async.js';
import '../../../base/common/buffer.js';
import '../../../base/common/cancellation.js';
import '../../../base/common/event.js';
import '../../../base/common/hash.js';
import '../../../base/common/iterator.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/ternarySearchTree.js';
import '../../../base/common/network.js';
import '../../../base/common/performance.js';
import '../../../base/common/resources.js';
import '../../../base/common/stream.js';
import '../../../nls.js';
import './files.js';
import './io.js';
import '../../log/common/log.js';
import '../../../base/common/errors.js';
define(
			de[2742],
			he([
				1, 0, 24, 15, 76, 33, 6, 136, 103, 3, 387, 23, 240, 19, 408, 4, 22,
				2731, 34, 29,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*async*/,
 w /*buffer*/,
 E /*cancellation*/,
 C /*event*/,
 d /*hash*/,
 m /*iterator*/,
 r /*lifecycle*/,
 u /*ternarySearchTree*/,
 a /*network*/,
 h /*performance*/,
 c /*resources*/,
 n /*stream*/,
 g /*nls*/,
 p /*files*/,
 o /*io*/,
 f /*log*/,
 b /*errors*/) {
				"use strict";
				var s;
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$sr = void 0);
				let l = class extends r.$1c {
					static {
						s = this;
					}
					constructor($) {
						super(),
							(this.b = $),
							(this.a = 256 * 1024),
							(this.c = this.D(new C.$re())),
							(this.onDidChangeFileSystemProviderRegistrations = this.c.event),
							(this.f = this.D(new C.$re())),
							(this.onWillActivateFileSystemProvider = this.f.event),
							(this.g = this.D(new C.$re())),
							(this.onDidChangeFileSystemProviderCapabilities = this.g.event),
							(this.h = new Map()),
							(this.q = this.D(new C.$re())),
							(this.onDidRunOperation = this.q.event),
							(this.X = this.D(new C.$re())),
							(this.Y = this.D(new C.$re())),
							(this.onDidFilesChange = this.Y.event),
							(this.Z = this.D(new C.$re())),
							(this.onDidWatchError = this.Z.event),
							(this.$ = new Map()),
							(this.cb = this.D(new i.$Vh()));
					}
					registerProvider($, v) {
						if (this.h.has($))
							throw new Error(
								`A filesystem provider for the scheme '${$}' is already registered.`,
							);
						(0, h.mark)(`code/registerFilesystem/${$}`);
						const S = new r.$Zc();
						return (
							this.h.set($, v),
							this.c.fire({ added: !0, scheme: $, provider: v }),
							S.add(
								v.onDidChangeFile((I) => {
									const T = new p.$El(I, !this.S(v));
									this.X.fire(T), T.hasCorrelation() || this.Y.fire(T);
								}),
							),
							typeof v.onDidWatchError == "function" &&
								S.add(v.onDidWatchError((I) => this.Z.fire(new Error(I)))),
							S.add(
								v.onDidChangeCapabilities(() =>
									this.g.fire({ provider: v, scheme: $ }),
								),
							),
							(0, r.$Yc)(() => {
								this.c.fire({ added: !1, scheme: $, provider: v }),
									this.h.delete($),
									(0, r.$Vc)(S);
							})
						);
					}
					getProvider($) {
						return this.h.get($);
					}
					async activateProvider($) {
						const v = [];
						this.f.fire({
							scheme: $,
							join(S) {
								v.push(S);
							},
						}),
							!this.h.has($) && (await i.Promises.settled(v));
					}
					async canHandleResource($) {
						return await this.activateProvider($.scheme), this.hasProvider($);
					}
					hasProvider($) {
						return this.h.has($.scheme);
					}
					hasCapability($, v) {
						const S = this.h.get($.scheme);
						return !!(S && S.capabilities & v);
					}
					listCapabilities() {
						return m.Iterable.map(this.h, ([$, v]) => ({
							scheme: $,
							capabilities: v.capabilities,
						}));
					}
					async j($) {
						if (!(0, c.$rh)($))
							throw new p.$Gl(
								(0, g.localize)(1883, null, this.sb($)),
								p.FileOperationResult.FILE_INVALID_PATH,
							);
						await this.activateProvider($.scheme);
						const v = this.h.get($.scheme);
						if (!v) {
							const S = new b.$fb();
							throw (
								((S.message = (0, g.localize)(1884, null, $.toString())), S)
							);
						}
						return v;
					}
					async m($) {
						const v = await this.j($);
						if ((0, p.$rl)(v) || (0, p.$ol)(v) || (0, p.$sl)(v)) return v;
						throw new Error(
							`Filesystem provider for scheme '${$.scheme}' neither has FileReadWrite, FileReadStream nor FileOpenReadWriteClose capability which is needed for the read operation.`,
						);
					}
					async n($) {
						const v = await this.j($);
						if ((0, p.$rl)(v) || (0, p.$ol)(v)) return v;
						throw new Error(
							`Filesystem provider for scheme '${$.scheme}' neither has FileReadWrite nor FileOpenReadWriteClose capability which is needed for the write operation.`,
						);
					}
					async resolve($, v) {
						try {
							return await this.r($, v);
						} catch (S) {
							throw (0, p.$Bl)(S) === p.FileSystemProviderErrorCode.FileNotFound
								? new p.$Gl(
										(0, g.localize)(1885, null, this.sb($)),
										p.FileOperationResult.FILE_NOT_FOUND,
									)
								: (0, p.$zl)(S);
						}
					}
					async r($, v) {
						const S = await this.j($),
							I = this.S(S),
							T = v?.resolveTo,
							P = v?.resolveSingleChildDescendants,
							k = v?.resolveMetadata,
							L = await S.stat($);
						let D;
						return this.s(
							S,
							$,
							L,
							void 0,
							!!k,
							(M, N) => (
								D ||
									((D = u.$Si.forUris(() => !I)),
									D.set($, !0),
									T && D.fill(!0, T)),
								D.get(M.resource) ||
								D.findSuperstr(M.resource.with({ query: null, fragment: null }))
									? !0
									: M.isDirectory && P
										? N === 1
										: !1
							),
						);
					}
					async s($, v, S, I, T, P) {
						const { providerExtUri: k } = this.R($),
							L = {
								resource: v,
								name: k.basename(v),
								isFile: (S.type & p.FileType.File) !== 0,
								isDirectory: (S.type & p.FileType.Directory) !== 0,
								isSymbolicLink: (S.type & p.FileType.SymbolicLink) !== 0,
								mtime: S.mtime,
								ctime: S.ctime,
								size: S.size,
								readonly:
									!!((S.permissions ?? 0) & p.FilePermission.Readonly) ||
									!!(
										$.capabilities & p.FileSystemProviderCapabilities.Readonly
									),
								locked: !!((S.permissions ?? 0) & p.FilePermission.Locked),
								etag: (0, p.$Rl)({ mtime: S.mtime, size: S.size }),
								children: void 0,
							};
						if (L.isDirectory && P(L, I)) {
							try {
								const D = await $.readdir(v),
									M = await i.Promises.settled(
										D.map(async ([N, A]) => {
											try {
												const R = k.joinPath(v, N),
													O = T ? await $.stat(R) : { type: A };
												return await this.s($, R, O, D.length, T, P);
											} catch (R) {
												return this.b.trace(R), null;
											}
										}),
									);
								L.children = (0, t.$Lb)(M);
							} catch (D) {
								this.b.trace(D), (L.children = []);
							}
							return L;
						}
						return L;
					}
					async resolveAll($) {
						return i.Promises.settled(
							$.map(async (v) => {
								try {
									return {
										stat: await this.r(v.resource, v.options),
										success: !0,
									};
								} catch (S) {
									return this.b.trace(S), { stat: void 0, success: !1 };
								}
							}),
						);
					}
					async stat($) {
						const v = await this.j($),
							S = await v.stat($);
						return this.s(v, $, S, void 0, !0, () => !1);
					}
					async exists($) {
						const v = await this.j($);
						try {
							return !!(await v.stat($));
						} catch {
							return !1;
						}
					}
					async canCreateFile($, v) {
						try {
							await this.t($, v);
						} catch (S) {
							return S;
						}
						return !0;
					}
					async t($, v) {
						if (!v?.overwrite && (await this.exists($)))
							throw new p.$Gl(
								(0, g.localize)(1886, null, this.sb($)),
								p.FileOperationResult.FILE_MODIFIED_SINCE,
								v,
							);
					}
					async createFile($, v = w.$Te.fromString(""), S) {
						await this.t($, S);
						const I = await this.writeFile($, v);
						return this.q.fire(new p.$Dl($, p.FileOperation.CREATE, I)), I;
					}
					async writeFile($, v, S) {
						const I = this.qb(await this.n($), $),
							{ providerExtUri: T } = this.R(I);
						let P = S;
						if ((0, p.$ul)(I) && !P?.atomic) {
							const k = I.enforceAtomicWriteFile?.($);
							k && (P = { ...S, atomic: k });
						}
						try {
							(await this.u(I, $, P)) || (await this.U(I, T.dirname($)));
							let L;
							if ((0, p.$ol)(I) && !(v instanceof w.$Te))
								if ((0, n.$Fe)(v)) {
									const D = await (0, n.$Me)(v, 3);
									D.ended ? (L = w.$Te.concat(D.buffer)) : (L = D);
								} else L = (0, n.$Je)(v, (D) => w.$Te.concat(D), 3);
							else L = v;
							!(0, p.$rl)(I) ||
							((0, p.$ol)(I) && L instanceof w.$Te) ||
							((0, p.$ol)(I) && (0, p.$ul)(I) && P?.atomic)
								? await this.hb(I, $, P, L)
								: await this.db(
										I,
										$,
										P,
										L instanceof w.$Te ? (0, w.$5e)(L) : L,
									),
								this.q.fire(new p.$Dl($, p.FileOperation.WRITE));
						} catch (k) {
							throw new p.$Gl(
								(0, g.localize)(
									1887,
									null,
									this.sb($),
									(0, p.$zl)(k).toString(),
								),
								(0, p.$Cl)(k),
								P,
							);
						}
						return this.resolve($, { resolveMetadata: !0 });
					}
					async u($, v, S) {
						const I = !!S?.unlock;
						if (
							I &&
							!(
								$.capabilities &
								p.FileSystemProviderCapabilities.FileWriteUnlock
							)
						)
							throw new Error((0, g.localize)(1888, null, this.sb(v)));
						if (!!S?.atomic) {
							if (
								!(
									$.capabilities &
									p.FileSystemProviderCapabilities.FileAtomicWrite
								)
							)
								throw new Error((0, g.localize)(1889, null, this.sb(v)));
							if (
								!(
									$.capabilities &
									p.FileSystemProviderCapabilities.FileReadWrite
								)
							)
								throw new Error((0, g.localize)(1890, null, this.sb(v)));
							if (I) throw new Error((0, g.localize)(1891, null, this.sb(v)));
						}
						let P;
						try {
							P = await $.stat(v);
						} catch {
							return;
						}
						if (P.type & p.FileType.Directory)
							throw new p.$Gl(
								(0, g.localize)(1892, null, this.sb(v)),
								p.FileOperationResult.FILE_IS_DIRECTORY,
								S,
							);
						if (
							(this.rb(v, P),
							typeof S?.mtime == "number" &&
								typeof S.etag == "string" &&
								S.etag !== p.$Ql &&
								typeof P.mtime == "number" &&
								typeof P.size == "number" &&
								S.mtime < P.mtime &&
								S.etag !== (0, p.$Rl)({ mtime: S.mtime, size: P.size }))
						)
							throw new p.$Gl(
								(0, g.localize)(1893, null),
								p.FileOperationResult.FILE_MODIFIED_SINCE,
								S,
							);
						return P;
					}
					async readFile($, v, S) {
						const I = await this.m($);
						return v?.atomic ? this.w(I, $, v, S) : this.z(I, $, v, S);
					}
					async w($, v, S, I) {
						return new Promise((T, P) => {
							this.cb.queueFor(
								v,
								async () => {
									try {
										const k = await this.z($, v, S, I);
										T(k);
									} catch (k) {
										P(k);
									}
								},
								this.R($).providerExtUri,
							);
						});
					}
					async z($, v, S, I) {
						const T = await this.C($, v, { ...S, preferUnbuffered: !0 }, I);
						return { ...T, value: await (0, w.$6e)(T.value) };
					}
					async readFileStream($, v, S) {
						const I = await this.m($);
						return this.C(I, $, v, S);
					}
					async C($, v, S, I) {
						const T = new E.$Ce(I);
						let P = S;
						(0, p.$tl)($) &&
							$.enforceAtomicReadFile?.(v) &&
							(P = { ...S, atomic: !0 });
						const k = this.J(v, P).then(
							(D) => D,
							(D) => {
								throw (T.dispose(!0), D);
							},
						);
						let L;
						try {
							return (
								typeof P?.etag == "string" && P.etag !== p.$Ql && (await k),
								(P?.atomic && (0, p.$tl)($)) ||
								!((0, p.$rl)($) || (0, p.$sl)($)) ||
								((0, p.$ol)($) && P?.preferUnbuffered)
									? (L = this.I($, v, P))
									: (0, p.$sl)($)
										? (L = this.G($, v, T.token, P))
										: (L = this.H($, v, T.token, P)),
								L.on("end", () => T.dispose()),
								L.on("error", () => T.dispose()),
								{ ...(await k), value: L }
							);
						} catch (D) {
							throw (L && (await (0, n.$Ke)(L)), this.F(D, v, P));
						}
					}
					F($, v, S) {
						const I = (0, g.localize)(
							1894,
							null,
							this.sb(v),
							(0, p.$zl)($).toString(),
						);
						return $ instanceof p.$Il
							? new p.$Il(I, $.stat, S)
							: $ instanceof p.$Hl
								? new p.$Hl(I, $.fileOperationResult, $.size, $.options)
								: new p.$Gl(I, (0, p.$Cl)($), S);
					}
					G($, v, S, I = Object.create(null)) {
						const T = $.readFileStream(v, I, S);
						return (0, n.$Qe)(
							T,
							{
								data: (P) => (P instanceof w.$Te ? P : w.$Te.wrap(P)),
								error: (P) => this.F(P, v, I),
							},
							(P) => w.$Te.concat(P),
						);
					}
					H($, v, S, I = Object.create(null)) {
						const T = (0, w.$0e)();
						return (
							(0, o.$rr)(
								$,
								v,
								T,
								(P) => P,
								{
									...I,
									bufferSize: this.a,
									errorTransformer: (P) => this.F(P, v, I),
								},
								S,
							),
							T
						);
					}
					I($, v, S) {
						const I = (0, n.$He)((T) => w.$Te.concat(T));
						return (
							(async () => {
								try {
									let T;
									S?.atomic && (0, p.$tl)($)
										? (T = await $.readFile(v, { atomic: !0 }))
										: (T = await $.readFile(v)),
										typeof S?.position == "number" && (T = T.slice(S.position)),
										typeof S?.length == "number" && (T = T.slice(0, S.length)),
										this.L(v, T.byteLength, S),
										I.end(w.$Te.wrap(T));
								} catch (T) {
									I.error(T), I.end();
								}
							})(),
							I
						);
					}
					async J($, v) {
						const S = await this.resolve($, { resolveMetadata: !0 });
						if (S.isDirectory)
							throw new p.$Gl(
								(0, g.localize)(1895, null, this.sb($)),
								p.FileOperationResult.FILE_IS_DIRECTORY,
								v,
							);
						if (
							typeof v?.etag == "string" &&
							v.etag !== p.$Ql &&
							v.etag === S.etag
						)
							throw new p.$Il((0, g.localize)(1896, null), S, v);
						return this.L($, S.size, v), S;
					}
					L($, v, S) {
						if (typeof S?.limits?.size == "number" && v > S.limits.size)
							throw new p.$Hl(
								(0, g.localize)(1897, null, this.sb($)),
								p.FileOperationResult.FILE_TOO_LARGE,
								v,
								S,
							);
					}
					async canMove($, v, S) {
						return this.M($, v, "move", S);
					}
					async canCopy($, v, S) {
						return this.M($, v, "copy", S);
					}
					async M($, v, S, I) {
						if ($.toString() !== v.toString())
							try {
								const T =
										S === "move"
											? this.qb(await this.n($), $)
											: await this.m($),
									P = this.qb(await this.n(v), v);
								await this.Q(T, $, P, v, S, I);
							} catch (T) {
								return T;
							}
						return !0;
					}
					async move($, v, S) {
						const I = this.qb(await this.n($), $),
							T = this.qb(await this.n(v), v),
							P = await this.N(I, $, T, v, "move", !!S),
							k = await this.resolve(v, { resolveMetadata: !0 });
						return (
							this.q.fire(
								new p.$Dl(
									$,
									P === "move" ? p.FileOperation.MOVE : p.FileOperation.COPY,
									k,
								),
							),
							k
						);
					}
					async copy($, v, S) {
						const I = await this.m($),
							T = this.qb(await this.n(v), v),
							P = await this.N(I, $, T, v, "copy", !!S),
							k = await this.resolve(v, { resolveMetadata: !0 });
						return (
							this.q.fire(
								new p.$Dl(
									$,
									P === "copy" ? p.FileOperation.COPY : p.FileOperation.MOVE,
									k,
								),
							),
							k
						);
					}
					async N($, v, S, I, T, P) {
						if (v.toString() === I.toString()) return T;
						const { exists: k, isSameResourceWithDifferentPathCase: L } =
							await this.Q($, v, S, I, T, P);
						if (
							(k && !L && P && (await this.del(I, { recursive: !0 })),
							await this.U(S, this.R(S).providerExtUri.dirname(I)),
							T === "copy")
						) {
							if ($ === S && (0, p.$pl)($))
								await $.copy(v, I, { overwrite: P });
							else {
								const D = await this.resolve(v);
								D.isDirectory
									? await this.P($, D, S, I)
									: await this.O($, v, S, I);
							}
							return T;
						} else
							return $ === S
								? (await $.rename(v, I, { overwrite: P }), T)
								: (await this.N($, v, S, I, "copy", P),
									await this.del(v, { recursive: !0 }),
									"copy");
					}
					async O($, v, S, I) {
						if ((0, p.$rl)($) && (0, p.$rl)(S)) return this.jb($, v, S, I);
						if ((0, p.$rl)($) && (0, p.$ol)(S)) return this.pb($, v, S, I);
						if ((0, p.$ol)($) && (0, p.$rl)(S)) return this.nb($, v, S, I);
						if ((0, p.$ol)($) && (0, p.$ol)(S)) return this.lb($, v, S, I);
					}
					async P($, v, S, I) {
						await S.mkdir(I),
							Array.isArray(v.children) &&
								(await i.Promises.settled(
									v.children.map(async (T) => {
										const P = this.R(S).providerExtUri.joinPath(I, T.name);
										return T.isDirectory
											? this.P($, await this.resolve(T.resource), S, P)
											: this.O($, T.resource, S, P);
									}),
								));
					}
					async Q($, v, S, I, T, P) {
						let k = !1;
						if ($ === S) {
							const { providerExtUri: D, isPathCaseSensitive: M } = this.R($);
							if ((M || (k = D.isEqual(v, I)), k && T === "copy"))
								throw new Error(
									(0, g.localize)(1898, null, this.sb(v), this.sb(I)),
								);
							if (!k && D.isEqualOrParent(I, v))
								throw new Error(
									(0, g.localize)(1899, null, this.sb(v), this.sb(I)),
								);
						}
						const L = await this.exists(I);
						if (L && !k) {
							if (!P)
								throw new p.$Gl(
									(0, g.localize)(1900, null, this.sb(v), this.sb(I)),
									p.FileOperationResult.FILE_MOVE_CONFLICT,
								);
							if ($ === S) {
								const { providerExtUri: D } = this.R($);
								if (D.isEqualOrParent(v, I))
									throw new Error(
										(0, g.localize)(1901, null, this.sb(v), this.sb(I)),
									);
							}
						}
						return { exists: L, isSameResourceWithDifferentPathCase: k };
					}
					R($) {
						const v = this.S($);
						return {
							providerExtUri: v ? c.$dh : c.$fh,
							isPathCaseSensitive: v,
						};
					}
					S($) {
						return !!(
							$.capabilities &
							p.FileSystemProviderCapabilities.PathCaseSensitive
						);
					}
					async createFolder($) {
						const v = this.qb(await this.j($), $);
						await this.U(v, $);
						const S = await this.resolve($, { resolveMetadata: !0 });
						return this.q.fire(new p.$Dl($, p.FileOperation.CREATE, S)), S;
					}
					async U($, v) {
						const S = [],
							{ providerExtUri: I } = this.R($);
						for (; !I.isEqual(v, I.dirname(v)); )
							try {
								if (!((await $.stat(v)).type & p.FileType.Directory))
									throw new Error((0, g.localize)(1902, null, this.sb(v)));
								break;
							} catch (T) {
								if (
									(0, p.$Bl)(T) !== p.FileSystemProviderErrorCode.FileNotFound
								)
									throw T;
								S.push(I.basename(v)), (v = I.dirname(v));
							}
						for (let T = S.length - 1; T >= 0; T--) {
							v = I.joinPath(v, S[T]);
							try {
								await $.mkdir(v);
							} catch (P) {
								if ((0, p.$Bl)(P) !== p.FileSystemProviderErrorCode.FileExists)
									throw P;
							}
						}
					}
					async canDelete($, v) {
						try {
							await this.W($, v);
						} catch (S) {
							return S;
						}
						return !0;
					}
					async W($, v) {
						const S = this.qb(await this.j($), $),
							I = !!v?.useTrash;
						if (I && !(S.capabilities & p.FileSystemProviderCapabilities.Trash))
							throw new Error((0, g.localize)(1903, null, this.sb($)));
						const T = v?.atomic;
						if (
							T &&
							!(
								S.capabilities &
								p.FileSystemProviderCapabilities.FileAtomicDelete
							)
						)
							throw new Error((0, g.localize)(1904, null, this.sb($)));
						if (I && T)
							throw new Error((0, g.localize)(1905, null, this.sb($)));
						let P;
						try {
							P = await S.stat($);
						} catch {}
						if (P) this.rb($, P);
						else
							throw new p.$Gl(
								(0, g.localize)(1906, null, this.sb($)),
								p.FileOperationResult.FILE_NOT_FOUND,
							);
						if (!!!v?.recursive) {
							const L = await this.resolve($);
							if (
								L.isDirectory &&
								Array.isArray(L.children) &&
								L.children.length > 0
							)
								throw new Error((0, g.localize)(1907, null, this.sb($)));
						}
						return S;
					}
					async del($, v) {
						const S = await this.W($, v);
						let I = v;
						if ((0, p.$vl)(S) && !I?.atomic) {
							const L = S.enforceAtomicDelete?.($);
							L && (I = { ...v, atomic: L });
						}
						const T = !!I?.useTrash,
							P = !!I?.recursive,
							k = I?.atomic ?? !1;
						await S.delete($, { recursive: P, useTrash: T, atomic: k }),
							this.q.fire(new p.$Dl($, p.FileOperation.DELETE));
					}
					async cloneFile($, v) {
						const S = await this.j($),
							I = this.qb(await this.n(v), v);
						if (!(S === I && this.R(S).providerExtUri.isEqual($, v)))
							return S === I && (0, p.$ql)(S)
								? S.cloneFile($, v)
								: (await this.U(I, this.R(I).providerExtUri.dirname(v)),
									S === I && (0, p.$pl)(S)
										? this.cb.queueFor(
												$,
												() => S.copy($, v, { overwrite: !0 }),
												this.R(S).providerExtUri,
											)
										: this.cb.queueFor(
												$,
												() => this.O(S, $, I, v),
												this.R(S).providerExtUri,
											));
					}
					static {
						this.ab = 0;
					}
					createWatcher($, v) {
						return this.watch($, { ...v, correlationId: s.ab++ });
					}
					watch($, v = { recursive: !1, excludes: [] }) {
						const S = new r.$Zc();
						let I = !1,
							T = () => {
								I = !0;
							};
						S.add((0, r.$Yc)(() => T())),
							(async () => {
								try {
									const k = await this.bb($, v);
									I ? (0, r.$Vc)(k) : (T = () => (0, r.$Vc)(k));
								} catch (k) {
									this.b.error(k);
								}
							})();
						const P = v.correlationId;
						if (typeof P == "number") {
							const k = S.add(new C.$re());
							return (
								S.add(
									this.X.event((D) => {
										D.correlates(P) && k.fire(D);
									}),
								),
								{ onDidChange: k.event, dispose: () => S.dispose() }
							);
						}
						return S;
					}
					async bb($, v) {
						const S = await this.j($),
							I = (0, d.$Aj)([this.R(S).providerExtUri.getComparisonKey($), v]);
						let T = this.$.get(I);
						return (
							T ||
								((T = { count: 0, disposable: S.watch($, v) }),
								this.$.set(I, T)),
							(T.count += 1),
							(0, r.$Yc)(() => {
								T &&
									(T.count--,
									T.count === 0 &&
										((0, r.$Vc)(T.disposable), this.$.delete(I)));
							})
						);
					}
					dispose() {
						super.dispose();
						for (const [, $] of this.$) (0, r.$Vc)($.disposable);
						this.$.clear();
					}
					async db($, v, S, I) {
						return this.cb.queueFor(
							v,
							async () => {
								const T = await $.open(v, {
									create: !0,
									unlock: S?.unlock ?? !1,
								});
								try {
									(0, n.$Fe)(I) || (0, n.$Ge)(I)
										? await this.eb($, T, I)
										: await this.fb($, T, I);
								} catch (P) {
									throw (0, p.$zl)(P);
								} finally {
									await $.close(T);
								}
							},
							this.R($).providerExtUri,
						);
					}
					async eb($, v, S) {
						let I = 0,
							T;
						if ((0, n.$Ge)(S)) {
							if (S.buffer.length > 0) {
								const P = w.$Te.concat(S.buffer);
								await this.gb($, v, P, P.byteLength, I, 0), (I += P.byteLength);
							}
							if (S.ended) return;
							T = S.stream;
						} else T = S;
						return new Promise((P, k) => {
							(0, n.$Le)(T, {
								onData: async (L) => {
									T.pause();
									try {
										await this.gb($, v, L, L.byteLength, I, 0);
									} catch (D) {
										return k(D);
									}
									(I += L.byteLength), setTimeout(() => T.resume());
								},
								onError: (L) => k(L),
								onEnd: () => P(),
							});
						});
					}
					async fb($, v, S) {
						let I = 0,
							T;
						for (; (T = S.read()) !== null; )
							await this.gb($, v, T, T.byteLength, I, 0), (I += T.byteLength);
					}
					async gb($, v, S, I, T, P) {
						let k = 0;
						for (; k < I; ) {
							const L = await $.write(v, T + k, S.buffer, P + k, I - k);
							k += L;
						}
					}
					async hb($, v, S, I) {
						return this.cb.queueFor(
							v,
							() => this.ib($, v, S, I),
							this.R($).providerExtUri,
						);
					}
					async ib($, v, S, I) {
						let T;
						I instanceof w.$Te
							? (T = I)
							: (0, n.$Fe)(I)
								? (T = await (0, w.$6e)(I))
								: (0, n.$Ge)(I)
									? (T = await (0, w.$7e)(I))
									: (T = (0, w.$4e)(I)),
							await $.writeFile(v, T.buffer, {
								create: !0,
								overwrite: !0,
								unlock: S?.unlock ?? !1,
								atomic: S?.atomic ?? !1,
							});
					}
					async jb($, v, S, I) {
						return this.cb.queueFor(
							I,
							() => this.kb($, v, S, I),
							this.R(S).providerExtUri,
						);
					}
					async kb($, v, S, I) {
						let T, P;
						try {
							(T = await $.open(v, { create: !1 })),
								(P = await S.open(I, { create: !0, unlock: !1 }));
							const k = w.$Te.alloc(this.a);
							let L = 0,
								D = 0,
								M = 0;
							do
								(M = await $.read(T, L, k.buffer, D, k.byteLength - D)),
									await this.gb(S, P, k, M, L, D),
									(L += M),
									(D += M),
									D === k.byteLength && (D = 0);
							while (M > 0);
						} catch (k) {
							throw (0, p.$zl)(k);
						} finally {
							await i.Promises.settled([
								typeof T == "number" ? $.close(T) : Promise.resolve(),
								typeof P == "number" ? S.close(P) : Promise.resolve(),
							]);
						}
					}
					async lb($, v, S, I) {
						return this.cb.queueFor(
							I,
							() => this.mb($, v, S, I),
							this.R(S).providerExtUri,
						);
					}
					async mb($, v, S, I) {
						return S.writeFile(I, await $.readFile(v), {
							create: !0,
							overwrite: !0,
							unlock: !1,
							atomic: !1,
						});
					}
					async nb($, v, S, I) {
						return this.cb.queueFor(
							I,
							() => this.ob($, v, S, I),
							this.R(S).providerExtUri,
						);
					}
					async ob($, v, S, I) {
						const T = await S.open(I, { create: !0, unlock: !1 });
						try {
							const P = await $.readFile(v);
							await this.gb(S, T, w.$Te.wrap(P), P.byteLength, 0, 0);
						} catch (P) {
							throw (0, p.$zl)(P);
						} finally {
							await S.close(T);
						}
					}
					async pb($, v, S, I) {
						const T = await (0, w.$6e)(this.H($, v, E.CancellationToken.None));
						await this.hb(S, I, void 0, T);
					}
					qb($, v) {
						if ($.capabilities & p.FileSystemProviderCapabilities.Readonly)
							throw new p.$Gl(
								(0, g.localize)(1908, null, this.sb(v)),
								p.FileOperationResult.FILE_PERMISSION_DENIED,
							);
						return $;
					}
					rb($, v) {
						if ((v.permissions ?? 0) & p.FilePermission.Readonly)
							throw new p.$Gl(
								(0, g.localize)(1909, null, this.sb($)),
								p.FileOperationResult.FILE_PERMISSION_DENIED,
							);
					}
					sb($) {
						return $.scheme === a.Schemas.file ? $.fsPath : $.toString(!0);
					}
				};
				(e.$sr = l), (e.$sr = l = s = Ne([j(0, f.$ik)], l));
			},
		)

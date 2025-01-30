import '../../../../require.js';
import '../../../../exports.js';
import '../../../../fs.js';
import '../../../base/common/async.js';
import '../../../base/common/map.js';
import '../../../base/common/buffer.js';
import '../../../base/common/event.js';
import '../../../base/common/extpath.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/path.js';
import '../../../base/common/platform.js';
import '../../../base/common/resources.js';
import '../../../base/common/stream.js';
import '../../../base/node/pfs.js';
import '../../../nls.js';
import '../common/files.js';
import '../common/io.js';
import '../common/diskFileSystemProvider.js';
import './watcher/watcherClient.js';
import './watcher/nodejs/nodejsClient.js';
define(
			Pe[488],
			Ne([
				1, 0, 59, 9, 33, 22, 4, 42, 3, 18, 13, 24, 170, 43, 10, 32, 480, 487,
				485, 484,
			]),
			function (we, t, e, r, S, N, P, I, l, n, p, y, d, k, g, c, h, $, T, a) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }), (t.$Vr = void 0);
				class u extends $.$Er {
					static {
						this.L = !1;
					}
					constructor(f, o) {
						super(f, o),
							(this.onDidChangeCapabilities = P.Event.None),
							(this.P = new S.$Gc((w) => y.$eh.getComparisonKey(w))),
							(this.X = new Map()),
							(this.Y = new Map()),
							(this.Z = new Map());
					}
					get capabilities() {
						return (
							this.M ||
								((this.M =
									c.FileSystemProviderCapabilities.FileReadWrite |
									c.FileSystemProviderCapabilities.FileOpenReadWriteClose |
									c.FileSystemProviderCapabilities.FileReadStream |
									c.FileSystemProviderCapabilities.FileFolderCopy |
									c.FileSystemProviderCapabilities.FileWriteUnlock |
									c.FileSystemProviderCapabilities.FileAtomicRead |
									c.FileSystemProviderCapabilities.FileAtomicWrite |
									c.FileSystemProviderCapabilities.FileAtomicDelete |
									c.FileSystemProviderCapabilities.FileClone),
								p.$n &&
									(this.M |=
										c.FileSystemProviderCapabilities.PathCaseSensitive)),
							this.M
						);
					}
					async stat(f) {
						try {
							const { stat: o, symbolicLink: w } = await k.SymlinkSupport.stat(
								this.I(f),
							);
							return {
								type: this.O(o, w),
								ctime: o.birthtime.getTime(),
								mtime: o.mtime.getTime(),
								size: o.size,
								permissions: o.mode & 128 ? void 0 : c.FilePermission.Locked,
							};
						} catch (o) {
							throw this.hb(o);
						}
					}
					async N(f) {
						try {
							return await this.stat(f);
						} catch {
							return;
						}
					}
					async readdir(f) {
						try {
							const o = await k.Promises.readdir(this.I(f), {
									withFileTypes: !0,
								}),
								w = [];
							return (
								await Promise.all(
									o.map(async (m) => {
										try {
											let E;
											m.isSymbolicLink()
												? (E = (await this.stat((0, y.$nh)(f, m.name))).type)
												: (E = this.O(m)),
												w.push([m.name, E]);
										} catch (E) {
											this.a.trace(E);
										}
									}),
								),
								w
							);
						} catch (o) {
							throw this.hb(o);
						}
					}
					O(f, o) {
						let w;
						return (
							o?.dangling
								? (w = c.FileType.Unknown)
								: f.isFile()
									? (w = c.FileType.File)
									: f.isDirectory()
										? (w = c.FileType.Directory)
										: (w = c.FileType.Unknown),
							o && (w |= c.FileType.SymbolicLink),
							w
						);
					}
					async Q(f) {
						const o = this.I(f);
						this.R(
							`[Disk FileSystemProvider]: createResourceLock() - request to acquire resource lock (${o})`,
						);
						let w;
						for (; (w = this.P.get(f)); )
							this.R(
								`[Disk FileSystemProvider]: createResourceLock() - waiting for resource lock to be released (${o})`,
							),
								await w.wait();
						const m = new r.$Lh();
						return (
							this.P.set(f, m),
							this.R(
								`[Disk FileSystemProvider]: createResourceLock() - new resource lock created (${o})`,
							),
							(0, l.$Yc)(() => {
								this.R(
									`[Disk FileSystemProvider]: createResourceLock() - resource lock dispose() (${o})`,
								),
									this.P.get(f) === m &&
										(this.R(
											`[Disk FileSystemProvider]: createResourceLock() - resource lock removed from resource-lock map (${o})`,
										),
										this.P.delete(f)),
									this.R(
										`[Disk FileSystemProvider]: createResourceLock() - resource lock barrier open() (${o})`,
									),
									m.open();
							})
						);
					}
					async readFile(f, o) {
						let w;
						try {
							o?.atomic &&
								(this.R(
									`[Disk FileSystemProvider]: atomic read operation started (${this.I(f)})`,
								),
								(w = await this.Q(f)));
							const m = this.I(f);
							return await e.promises.readFile(m);
						} catch (m) {
							throw this.hb(m);
						} finally {
							w?.dispose();
						}
					}
					R(f) {
						u.L && this.a.trace(f);
					}
					readFileStream(f, o, w) {
						const m = (0, d.$He)(
							(E) => N.$Te.concat(E.map((R) => N.$Te.wrap(R))).buffer,
						);
						return (
							(0, h.$rr)(
								this,
								f,
								m,
								(E) => E.buffer,
								{ ...o, bufferSize: 256 * 1024 },
								w,
							),
							m
						);
					}
					async writeFile(f, o, w) {
						return w?.atomic !== !1 && w?.atomic?.postfix && (await this.S(f))
							? this.U(
									f,
									(0, y.$nh)(
										(0, y.$mh)(f),
										`${(0, y.$kh)(f)}${w.atomic.postfix}`,
									),
									o,
									w,
								)
							: this.W(f, o, w);
					}
					async S(f) {
						try {
							const o = this.I(f),
								{ symbolicLink: w } = await k.SymlinkSupport.stat(o);
							if (w) return !1;
						} catch {}
						return !0;
					}
					async U(f, o, w, m) {
						const E = new l.$Zc();
						try {
							E.add(await this.Q(f)),
								E.add(await this.Q(o)),
								await this.W(o, w, m, !0);
							try {
								await this.rename(o, f, { overwrite: !0 });
							} catch (R) {
								try {
									await this.delete(o, {
										recursive: !1,
										useTrash: !1,
										atomic: !1,
									});
								} catch {}
								throw R;
							}
						} finally {
							E.dispose();
						}
					}
					async W(f, o, w, m) {
						let E;
						try {
							const R = this.I(f);
							if (!w.create || !w.overwrite) {
								if (await k.Promises.exists(R)) {
									if (!w.overwrite)
										throw (0, c.$yl)(
											(0, g.localize)(1913, null),
											c.FileSystemProviderErrorCode.FileExists,
										);
								} else if (!w.create)
									throw (0, c.$yl)(
										(0, g.localize)(1914, null),
										c.FileSystemProviderErrorCode.FileNotFound,
									);
							}
							(E = await this.open(f, { create: !0, unlock: w.unlock }, m)),
								await this.write(E, 0, o, 0, o.byteLength);
						} catch (R) {
							throw await this.ib(f, R);
						} finally {
							typeof E == "number" && (await this.close(E));
						}
					}
					static {
						this.$ = !0;
					}
					static configureFlushOnWrite(f) {
						u.$ = f;
					}
					async open(f, o, w) {
						const m = this.I(f);
						let E;
						(0, c.$ml)(o) && !w && (E = await this.Q(f));
						let R;
						try {
							if ((0, c.$ml)(o) && o.unlock)
								try {
									const { stat: O } = await k.SymlinkSupport.stat(m);
									O.mode & 128 || (await e.promises.chmod(m, O.mode | 128));
								} catch (O) {
									O.code !== "ENOENT" && this.a.trace(O);
								}
							let C;
							if ((0, c.$ml)(o)) {
								if (p.$l)
									try {
										await e.promises.truncate(m, 0), (C = "r+");
									} catch (O) {
										O.code !== "ENOENT" && this.a.trace(O);
									}
								C || (C = "w");
							} else C = "r";
							R = await k.Promises.open(m, C);
						} catch (C) {
							throw (
								(E?.dispose(), (0, c.$ml)(o) ? await this.ib(f, C) : this.hb(C))
							);
						}
						if ((this.X.set(R, 0), (0, c.$ml)(o) && this.Z.set(R, f), E)) {
							const C = this.Y.get(R);
							this.R(
								`[Disk FileSystemProvider]: open() - storing lock for handle ${R} (${m})`,
							),
								this.Y.set(R, E),
								C &&
									(this.R(
										`[Disk FileSystemProvider]: open() - disposing a previous lock that was still stored on same handle ${R} (${m})`,
									),
									C.dispose());
						}
						return R;
					}
					async close(f) {
						const o = this.Y.get(f);
						try {
							if ((this.X.delete(f), this.Z.delete(f) && u.$))
								try {
									await k.Promises.fdatasync(f);
								} catch (w) {
									u.configureFlushOnWrite(!1), this.a.error(w);
								}
							return await k.Promises.close(f);
						} catch (w) {
							throw this.hb(w);
						} finally {
							o &&
								(this.Y.get(f) === o &&
									(this.R(
										`[Disk FileSystemProvider]: close() - resource lock removed from handle-lock map ${f}`,
									),
									this.Y.delete(f)),
								this.R(
									`[Disk FileSystemProvider]: close() - disposing lock for handle ${f}`,
								),
								o.dispose());
						}
					}
					async read(f, o, w, m, E) {
						const R = this.ab(f, o);
						let C = null;
						try {
							C = (await k.Promises.read(f, w, m, E, R)).bytesRead;
						} catch (O) {
							throw this.hb(O);
						} finally {
							this.bb(f, R, C);
						}
						return C;
					}
					ab(f, o) {
						return o === this.X.get(f) ? null : o;
					}
					bb(f, o, w) {
						const m = this.X.get(f);
						typeof m == "number" &&
							(typeof o == "number" ||
								(typeof w == "number"
									? this.X.set(f, m + w)
									: this.X.delete(f)));
					}
					async write(f, o, w, m, E) {
						return (0, r.$7h)(() => this.cb(f, o, w, m, E), 100, 3);
					}
					async cb(f, o, w, m, E) {
						const R = this.ab(f, o);
						let C = null;
						try {
							C = (await k.Promises.write(f, w, m, E, R)).bytesWritten;
						} catch (O) {
							throw await this.ib(this.Z.get(f), O);
						} finally {
							this.bb(f, R, C);
						}
						return C;
					}
					async mkdir(f) {
						try {
							await e.promises.mkdir(this.I(f));
						} catch (o) {
							throw this.hb(o);
						}
					}
					async delete(f, o) {
						try {
							const w = this.I(f);
							if (o.recursive) {
								let m;
								o?.atomic !== !1 &&
									o.atomic.postfix &&
									(m = (0, n.$oc)(
										(0, n.$rc)(w),
										`${(0, n.$sc)(w)}${o.atomic.postfix}`,
									)),
									await k.Promises.rm(w, k.RimRafMode.MOVE, m);
							} else
								try {
									await e.promises.unlink(w);
								} catch (m) {
									if (m.code === "EPERM" || m.code === "EISDIR") {
										let E = !1;
										try {
											const { stat: R, symbolicLink: C } =
												await k.SymlinkSupport.stat(w);
											E = R.isDirectory() && !C;
										} catch {}
										if (E) await e.promises.rmdir(w);
										else throw m;
									} else throw m;
								}
						} catch (w) {
							throw this.hb(w);
						}
					}
					async rename(f, o, w) {
						const m = this.I(f),
							E = this.I(o);
						if (m !== E)
							try {
								await this.db(f, o, "move", w.overwrite),
									await k.Promises.rename(m, E);
							} catch (R) {
								throw (
									((R.code === "EINVAL" ||
										R.code === "EBUSY" ||
										R.code === "ENAMETOOLONG") &&
										(R = new Error(
											(0, g.localize)(
												1915,
												null,
												(0, n.$sc)(m),
												(0, n.$sc)((0, n.$rc)(E)),
												R.toString(),
											),
										)),
									this.hb(R))
								);
							}
					}
					async copy(f, o, w) {
						const m = this.I(f),
							E = this.I(o);
						if (m !== E)
							try {
								await this.db(f, o, "copy", w.overwrite),
									await k.Promises.copy(m, E, { preserveSymlinks: !0 });
							} catch (R) {
								throw (
									((R.code === "EINVAL" ||
										R.code === "EBUSY" ||
										R.code === "ENAMETOOLONG") &&
										(R = new Error(
											(0, g.localize)(
												1916,
												null,
												(0, n.$sc)(m),
												(0, n.$sc)((0, n.$rc)(E)),
												R.toString(),
											),
										)),
									this.hb(R))
								);
							}
					}
					async db(f, o, w, m) {
						const E = this.I(f),
							R = this.I(o);
						let C = !1;
						if (
							(!!(
								this.capabilities &
								c.FileSystemProviderCapabilities.PathCaseSensitive
							) || (C = (0, I.$Kg)(E, R, !0)),
							C)
						) {
							if (w === "copy")
								throw (0, c.$yl)(
									(0, g.localize)(1917, null),
									c.FileSystemProviderErrorCode.FileExists,
								);
							if (w === "move") return;
						}
						const A = await this.N(f);
						if (!A)
							throw (0, c.$yl)(
								(0, g.localize)(1918, null),
								c.FileSystemProviderErrorCode.FileNotFound,
							);
						const J = await this.N(o);
						if (J) {
							if (!m)
								throw (0, c.$yl)(
									(0, g.localize)(1919, null),
									c.FileSystemProviderErrorCode.FileExists,
								);
							(A.type & c.FileType.File && J.type & c.FileType.File) ||
								(await this.delete(o, {
									recursive: !0,
									useTrash: !1,
									atomic: !1,
								}));
						}
					}
					async cloneFile(f, o) {
						return this.eb(f, o, !1);
					}
					async eb(f, o, w) {
						const m = this.I(f),
							E = this.I(o),
							R = !!(
								this.capabilities &
								c.FileSystemProviderCapabilities.PathCaseSensitive
							);
						if ((0, I.$Kg)(m, E, !R)) return;
						const C = new l.$Zc();
						try {
							C.add(await this.Q(f)),
								C.add(await this.Q(o)),
								w && (await e.promises.mkdir((0, n.$rc)(E), { recursive: !0 })),
								await e.promises.copyFile(m, E);
						} catch (O) {
							if (O.code === "ENOENT" && !w) return this.eb(f, o, !0);
							throw this.hb(O);
						} finally {
							C.dispose();
						}
					}
					s(f, o, w) {
						return new T.$Lr(
							(m) => f(m),
							(m) => o(m),
							w,
						);
					}
					F(f, o, w) {
						return new a.$Ur(
							(m) => f(m),
							(m) => o(m),
							w,
						);
					}
					hb(f) {
						if (f instanceof c.$xl) return f;
						let o = f,
							w;
						switch (f.code) {
							case "ENOENT":
								w = c.FileSystemProviderErrorCode.FileNotFound;
								break;
							case "EISDIR":
								w = c.FileSystemProviderErrorCode.FileIsADirectory;
								break;
							case "ENOTDIR":
								w = c.FileSystemProviderErrorCode.FileNotADirectory;
								break;
							case "EEXIST":
								w = c.FileSystemProviderErrorCode.FileExists;
								break;
							case "EPERM":
							case "EACCES":
								w = c.FileSystemProviderErrorCode.NoPermissions;
								break;
							case "ERR_UNC_HOST_NOT_ALLOWED":
								(o = `${f.message}. Please update the 'security.allowedUNCHosts' setting if you want to allow this host.`),
									(w = c.FileSystemProviderErrorCode.Unknown);
								break;
							default:
								w = c.FileSystemProviderErrorCode.Unknown;
						}
						return (0, c.$yl)(o, w);
					}
					async ib(f, o) {
						let w = this.hb(o);
						if (f && w.code === c.FileSystemProviderErrorCode.NoPermissions)
							try {
								const { stat: m } = await k.SymlinkSupport.stat(this.I(f));
								m.mode & 128 ||
									(w = (0, c.$yl)(
										o,
										c.FileSystemProviderErrorCode.FileWriteLocked,
									));
							} catch (m) {
								this.a.trace(m);
							}
						return w;
					}
				}
				t.$Vr = u;
			},
		),
		
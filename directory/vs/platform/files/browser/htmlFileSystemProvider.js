import '../../../../require.js';
import '../../../../exports.js';
import '../../../nls.js';
import '../../../base/common/uri.js';
import '../../../base/common/buffer.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/network.js';
import '../../../base/common/path.js';
import '../../../base/common/platform.js';
import '../../../base/common/resources.js';
import '../../../base/common/stream.js';
import '../common/files.js';
import './webFileSystemAccess.js';
define(
			de[2730],
			he([1, 0, 4, 9, 76, 6, 3, 23, 54, 12, 19, 408, 22, 762]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$gzb = void 0);
				class n {
					get capabilities() {
						return (
							this.b ||
								((this.b =
									h.FileSystemProviderCapabilities.FileReadWrite |
									h.FileSystemProviderCapabilities.FileReadStream),
								r.$n &&
									(this.b |=
										h.FileSystemProviderCapabilities.PathCaseSensitive)),
							this.b
						);
					}
					constructor(p, o, f) {
						(this.c = p),
							(this.d = o),
							(this.e = f),
							(this.onDidChangeCapabilities = E.Event.None),
							(this.onDidChangeFile = E.Event.None),
							(this.a = r.$n ? u.$dh : u.$fh),
							(this.f = new Map()),
							(this.g = new Map());
					}
					async stat(p) {
						try {
							const o = await this.getHandle(p);
							if (!o)
								throw this.m(
									p,
									"No such file or directory, stat",
									h.FileSystemProviderErrorCode.FileNotFound,
								);
							if (c.WebFileSystemAccess.isFileSystemFileHandle(o)) {
								const f = await o.getFile();
								return {
									type: h.FileType.File,
									mtime: f.lastModified,
									ctime: 0,
									size: f.size,
								};
							}
							return {
								type: h.FileType.Directory,
								mtime: 0,
								ctime: 0,
								size: 0,
							};
						} catch (o) {
							throw this.l(o);
						}
					}
					async readdir(p) {
						try {
							const o = await this.j(p);
							if (!o)
								throw this.m(
									p,
									"No such file or directory, readdir",
									h.FileSystemProviderErrorCode.FileNotFound,
								);
							const f = [];
							for await (const [b, s] of o)
								f.push([
									b,
									c.WebFileSystemAccess.isFileSystemFileHandle(s)
										? h.FileType.File
										: h.FileType.Directory,
								]);
							return f;
						} catch (o) {
							throw this.l(o);
						}
					}
					readFileStream(p, o, f) {
						const b = (0, a.$He)(
							(s) => w.$Te.concat(s.map((l) => w.$Te.wrap(l))).buffer,
							{ highWaterMark: 10 },
						);
						return (
							(async () => {
								try {
									const s = await this.i(p);
									if (!s)
										throw this.m(
											p,
											"No such file or directory, readFile",
											h.FileSystemProviderErrorCode.FileNotFound,
										);
									const l = await s.getFile();
									if (
										typeof o.length == "number" ||
										typeof o.position == "number"
									) {
										let y = new Uint8Array(await l.arrayBuffer());
										typeof o?.position == "number" && (y = y.slice(o.position)),
											typeof o?.length == "number" &&
												(y = y.slice(0, o.length)),
											b.end(y);
									} else {
										const y = l.stream().getReader();
										let $ = await y.read();
										for (
											;
											!$.done &&
											!(
												f.isCancellationRequested ||
												(await b.write($.value), f.isCancellationRequested)
											);
										)
											$ = await y.read();
										b.end(void 0);
									}
								} catch (s) {
									b.error(this.l(s)), b.end();
								}
							})(),
							b
						);
					}
					async readFile(p) {
						try {
							const o = await this.i(p);
							if (!o)
								throw this.m(
									p,
									"No such file or directory, readFile",
									h.FileSystemProviderErrorCode.FileNotFound,
								);
							const f = await o.getFile();
							return new Uint8Array(await f.arrayBuffer());
						} catch (o) {
							throw this.l(o);
						}
					}
					async writeFile(p, o, f) {
						try {
							let b = await this.i(p);
							if (!f.create || !f.overwrite) {
								if (b) {
									if (!f.overwrite)
										throw this.m(
											p,
											"File already exists, writeFile",
											h.FileSystemProviderErrorCode.FileExists,
										);
								} else if (!f.create)
									throw this.m(
										p,
										"No such file, writeFile",
										h.FileSystemProviderErrorCode.FileNotFound,
									);
							}
							if (!b) {
								const l = await this.j(this.a.dirname(p));
								if (!l)
									throw this.m(
										p,
										"No such parent directory, writeFile",
										h.FileSystemProviderErrorCode.FileNotFound,
									);
								if (
									((b = await l.getFileHandle(this.a.basename(p), {
										create: !0,
									})),
									!b)
								)
									throw this.m(
										p,
										"Unable to create file , writeFile",
										h.FileSystemProviderErrorCode.Unknown,
									);
							}
							const s = await b.createWritable();
							await s.write(o), await s.close();
						} catch (b) {
							throw this.l(b);
						}
					}
					async mkdir(p) {
						try {
							const o = await this.j(this.a.dirname(p));
							if (!o)
								throw this.m(
									p,
									"No such parent directory, mkdir",
									h.FileSystemProviderErrorCode.FileNotFound,
								);
							await o.getDirectoryHandle(this.a.basename(p), { create: !0 });
						} catch (o) {
							throw this.l(o);
						}
					}
					async delete(p, o) {
						try {
							const f = await this.j(this.a.dirname(p));
							if (!f)
								throw this.m(
									p,
									"No such parent directory, delete",
									h.FileSystemProviderErrorCode.FileNotFound,
								);
							return f.removeEntry(this.a.basename(p), {
								recursive: o.recursive,
							});
						} catch (f) {
							throw this.l(f);
						}
					}
					async rename(p, o, f) {
						try {
							if (this.a.isEqual(p, o)) return;
							const b = await this.i(p);
							if (b) {
								const s = await b.getFile(),
									l = new Uint8Array(await s.arrayBuffer());
								await this.writeFile(o, l, {
									create: !0,
									overwrite: f.overwrite,
									unlock: !1,
									atomic: !1,
								}),
									await this.delete(p, {
										recursive: !1,
										useTrash: !1,
										atomic: !1,
									});
							} else
								throw this.m(
									p,
									(0, t.localize)(1869, null),
									h.FileSystemProviderErrorCode.Unavailable,
								);
						} catch (b) {
							throw this.l(b);
						}
					}
					watch(p, o) {
						return C.$1c.None;
					}
					registerFileHandle(p) {
						return this.h(p, this.f);
					}
					registerDirectoryHandle(p) {
						return this.h(p, this.g);
					}
					get directories() {
						return this.g.values();
					}
					async h(p, o) {
						let f = `/${p.name}`;
						if (o.has(f) && !(await o.get(f)?.isSameEntry(p))) {
							const b = (0, m.$tc)(p.name),
								s = (0, m.$sc)(p.name, b);
							let l = 1;
							do f = `/${s}-${l++}${b}`;
							while (o.has(f) && !(await o.get(f)?.isSameEntry(p)));
						}
						o.set(f, p);
						try {
							await this.c?.runInTransaction(this.d, "readwrite", (b) =>
								b.put(p, f),
							);
						} catch (b) {
							this.e.error(b);
						}
						return i.URI.from({ scheme: d.Schemas.file, path: f });
					}
					async getHandle(p) {
						let o = await this.k(p);
						if (!o) {
							const f = await this.j(this.a.dirname(p));
							if (f) {
								const b = u.$dh.basename(p);
								try {
									o = await f.getFileHandle(b);
								} catch {
									try {
										o = await f.getDirectoryHandle(b);
									} catch {}
								}
							}
						}
						return o;
					}
					async i(p) {
						const o = await this.k(p);
						if (o instanceof FileSystemFileHandle) return o;
						const f = await this.j(this.a.dirname(p));
						try {
							return await f?.getFileHandle(u.$dh.basename(p));
						} catch {
							return;
						}
					}
					async j(p) {
						const o = await this.k(p);
						if (o instanceof FileSystemDirectoryHandle) return o;
						const f = this.a.dirname(p);
						if (this.a.isEqual(f, p)) return;
						const b = await this.j(f);
						try {
							return await b?.getDirectoryHandle(u.$dh.basename(p));
						} catch {
							return;
						}
					}
					async k(p) {
						if (this.a.dirname(p).path !== "/") return;
						const o = p.path.replace(/\/$/, ""),
							f = this.f.get(o) ?? this.g.get(o);
						if (f) return f;
						const b = await this.c?.runInTransaction(this.d, "readonly", (s) =>
							s.get(o),
						);
						if (c.WebFileSystemAccess.isFileSystemHandle(b)) {
							let s = (await b.queryPermission()) === "granted";
							try {
								s || (s = (await b.requestPermission()) === "granted");
							} catch (l) {
								this.e.error(l);
							}
							if (s)
								return (
									c.WebFileSystemAccess.isFileSystemFileHandle(b)
										? this.f.set(o, b)
										: c.WebFileSystemAccess.isFileSystemDirectoryHandle(b) &&
											this.g.set(o, b),
									b
								);
						}
						throw this.m(
							p,
							"No file system handle registered",
							h.FileSystemProviderErrorCode.Unavailable,
						);
					}
					l(p) {
						if (p instanceof h.$xl) return p;
						let o = h.FileSystemProviderErrorCode.Unknown;
						return (
							p.name === "NotAllowedError" &&
								((p = new Error((0, t.localize)(1870, null))),
								(o = h.FileSystemProviderErrorCode.Unavailable)),
							(0, h.$yl)(p, o)
						);
					}
					m(p, o, f) {
						return (0, h.$yl)(new Error(`${o} (${(0, m.$mc)(p.path)})`), f);
					}
				}
				e.$gzb = n;
			},
		),
		
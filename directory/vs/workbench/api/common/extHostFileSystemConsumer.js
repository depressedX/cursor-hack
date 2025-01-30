import '../../../../require.js';
import '../../../../exports.js';
import './extHost.protocol.js';
import '../../../platform/files/common/files.js';
import './extHostTypes.js';
import '../../../base/common/buffer.js';
import '../../../platform/instantiation/common/instantiation.js';
import './extHostRpcService.js';
import './extHostFileSystemInfo.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/async.js';
import '../../../base/common/resources.js';
import '../../../base/common/network.js';
define(
			Pe[115],
			Ne([1, 0, 6, 32, 11, 22, 5, 21, 92, 3, 9, 24, 16]),
			function (we, t, e, r, S, N, P, I, l, n, p, y, d) {
				"use strict";
				var k;
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$uhd = t.$thd = void 0),
					(r = tt(r));
				let g = (k = class {
					constructor(h, $) {
						(this.b = new Map()),
							(this.c = new p.$Vh()),
							(this.a = h.getProxy(e.$lbb.MainThreadFileSystem));
						const T = this;
						this.value = Object.freeze({
							async stat(a) {
								try {
									let u;
									const s = T.b.get(a.scheme);
									return (
										s
											? (await T.a.$ensureActivation(a.scheme),
												(u = await s.impl.stat(a)))
											: (u = await T.a.$stat(a)),
										{
											type: u.type,
											ctime: u.ctime,
											mtime: u.mtime,
											size: u.size,
											permissions:
												u.permissions === r.FilePermission.Readonly
													? 1
													: void 0,
										}
									);
								} catch (u) {
									k.e(u);
								}
							},
							async readDirectory(a) {
								try {
									const u = T.b.get(a.scheme);
									return u
										? (await T.a.$ensureActivation(a.scheme),
											(await u.impl.readDirectory(a)).slice())
										: await T.a.$readdir(a);
								} catch (u) {
									return k.e(u);
								}
							},
							async createDirectory(a) {
								try {
									const u = T.b.get(a.scheme);
									return u && !u.isReadonly
										? (await T.a.$ensureActivation(a.scheme),
											await T.d(u.impl, u.extUri, a))
										: await T.a.$mkdir(a);
								} catch (u) {
									return k.e(u);
								}
							},
							async readFile(a) {
								try {
									const u = T.b.get(a.scheme);
									return u
										? (await T.a.$ensureActivation(a.scheme),
											(await u.impl.readFile(a)).slice())
										: (await T.a.$readFile(a)).buffer;
								} catch (u) {
									return k.e(u);
								}
							},
							async writeFile(a, u) {
								try {
									const s = T.b.get(a.scheme);
									return s && !s.isReadonly
										? (await T.a.$ensureActivation(a.scheme),
											await T.d(s.impl, s.extUri, s.extUri.dirname(a)),
											await T.c.queueFor(a, () =>
												Promise.resolve(
													s.impl.writeFile(a, u, { create: !0, overwrite: !0 }),
												),
											))
										: await T.a.$writeFile(a, N.$Te.wrap(u));
								} catch (s) {
									return k.e(s);
								}
							},
							async delete(a, u) {
								try {
									const s = T.b.get(a.scheme);
									return s && !s.isReadonly && !u?.useTrash
										? (await T.a.$ensureActivation(a.scheme),
											await s.impl.delete(a, { recursive: !1, ...u }))
										: await T.a.$delete(a, {
												recursive: !1,
												useTrash: !1,
												atomic: !1,
												...u,
											});
								} catch (s) {
									return k.e(s);
								}
							},
							async rename(a, u, s) {
								try {
									return await T.a.$rename(a, u, { overwrite: !1, ...s });
								} catch (f) {
									return k.e(f);
								}
							},
							async copy(a, u, s) {
								try {
									return await T.a.$copy(a, u, { overwrite: !1, ...s });
								} catch (f) {
									return k.e(f);
								}
							},
							isWritableFileSystem(a) {
								const u = $.getCapabilities(a);
								if (typeof u == "number")
									return !(u & r.FileSystemProviderCapabilities.Readonly);
							},
						});
					}
					async d(h, $, T) {
						const a = [];
						for (; !$.isEqual(T, $.dirname(T)); )
							try {
								if (!((await h.stat(T)).type & r.FileType.Directory))
									throw S.$Gcb.FileExists(
										`Unable to create folder '${T.scheme === d.Schemas.file ? T.fsPath : T.toString(!0)}' that already exists but is not a directory`,
									);
								break;
							} catch (u) {
								if (r.$Bl(u) !== r.FileSystemProviderErrorCode.FileNotFound)
									throw u;
								a.push($.basename(T)), (T = $.dirname(T));
							}
						for (let u = a.length - 1; u >= 0; u--) {
							T = $.joinPath(T, a[u]);
							try {
								await h.createDirectory(T);
							} catch (s) {
								if (r.$Bl(s) !== r.FileSystemProviderErrorCode.FileExists)
									throw s;
							}
						}
					}
					static e(h) {
						if (h instanceof S.$Gcb) throw h;
						if (h instanceof r.$xl)
							switch (h.code) {
								case r.FileSystemProviderErrorCode.FileExists:
									throw S.$Gcb.FileExists(h.message);
								case r.FileSystemProviderErrorCode.FileNotFound:
									throw S.$Gcb.FileNotFound(h.message);
								case r.FileSystemProviderErrorCode.FileNotADirectory:
									throw S.$Gcb.FileNotADirectory(h.message);
								case r.FileSystemProviderErrorCode.FileIsADirectory:
									throw S.$Gcb.FileIsADirectory(h.message);
								case r.FileSystemProviderErrorCode.NoPermissions:
									throw S.$Gcb.NoPermissions(h.message);
								case r.FileSystemProviderErrorCode.Unavailable:
									throw S.$Gcb.Unavailable(h.message);
								default:
									throw new S.$Gcb(h.message, h.name);
							}
						if (!(h instanceof Error)) throw new S.$Gcb(String(h));
						if (h.name === "ENOPRO" || h.message.includes("ENOPRO"))
							throw S.$Gcb.Unavailable(h.message);
						switch (h.name) {
							case r.FileSystemProviderErrorCode.FileExists:
								throw S.$Gcb.FileExists(h.message);
							case r.FileSystemProviderErrorCode.FileNotFound:
								throw S.$Gcb.FileNotFound(h.message);
							case r.FileSystemProviderErrorCode.FileNotADirectory:
								throw S.$Gcb.FileNotADirectory(h.message);
							case r.FileSystemProviderErrorCode.FileIsADirectory:
								throw S.$Gcb.FileIsADirectory(h.message);
							case r.FileSystemProviderErrorCode.NoPermissions:
								throw S.$Gcb.NoPermissions(h.message);
							case r.FileSystemProviderErrorCode.Unavailable:
								throw S.$Gcb.Unavailable(h.message);
							default:
								throw new S.$Gcb(h.message, h.name);
						}
					}
					addFileSystemProvider(h, $, T) {
						return (
							this.b.set(h, {
								impl: $,
								extUri: T?.isCaseSensitive ? y.$dh : y.$fh,
								isReadonly: !!T?.isReadonly,
							}),
							(0, n.$Yc)(() => this.b.delete(h))
						);
					}
					getFileSystemProviderExtUri(h) {
						return this.b.get(h)?.extUri ?? y.$dh;
					}
				});
				(t.$thd = g),
					(t.$thd = g = k = wt([rt(0, I.$08), rt(1, l.$88)], g)),
					(t.$uhd = (0, P.$Mi)("IExtHostConsumerFileSystem"));
			},
		),
		
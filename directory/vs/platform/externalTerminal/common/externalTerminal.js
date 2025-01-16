define(de[1612], he([1, 0, 5]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.DEFAULT_TERMINAL_OSX = e.IExternalTerminalService = void 0),
				(e.IExternalTerminalService = (0, t.$Mi)("externalTerminal")),
				(e.DEFAULT_TERMINAL_OSX = "Terminal.app");
		}),
		define(
			de[22],
			he([1, 0, 387, 54, 37, 28, 9, 4, 5, 12, 23, 149]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Tl =
						e.$Ql =
						e.FileKind =
						e.$Pl =
						e.$Ol =
						e.$Nl =
						e.$Ml =
						e.$Ll =
						e.$Kl =
						e.$Jl =
						e.FileOperationResult =
						e.$Il =
						e.$Hl =
						e.$Gl =
						e.$El =
						e.FileChangeType =
						e.$Dl =
						e.FileOperation =
						e.$xl =
						e.FileSystemProviderErrorCode =
						e.FileSystemProviderCapabilities =
						e.FileChangeFilter =
						e.FilePermission =
						e.FileType =
						e.$ll =
							void 0),
					(e.$ml = h),
					(e.$nl = p),
					(e.$ol = f),
					(e.$pl = b),
					(e.$ql = s),
					(e.$rl = l),
					(e.$sl = y),
					(e.$tl = $),
					(e.$ul = v),
					(e.$vl = S),
					(e.$wl = I),
					(e.$yl = k),
					(e.$zl = L),
					(e.$Al = D),
					(e.$Bl = M),
					(e.$Cl = N),
					(e.$Fl = U),
					(e.$Rl = V),
					(e.$Sl = G),
					(e.$Ul = J),
					(e.$ll = (0, m.$Mi)("fileService"));
				function h(W) {
					return W.create === !0;
				}
				var c;
				(function (W) {
					(W[(W.Unknown = 0)] = "Unknown"),
						(W[(W.File = 1)] = "File"),
						(W[(W.Directory = 2)] = "Directory"),
						(W[(W.SymbolicLink = 64)] = "SymbolicLink");
				})(c || (e.FileType = c = {}));
				var n;
				(function (W) {
					(W[(W.Readonly = 1)] = "Readonly"), (W[(W.Locked = 2)] = "Locked");
				})(n || (e.FilePermission = n = {}));
				var g;
				(function (W) {
					(W[(W.UPDATED = 2)] = "UPDATED"),
						(W[(W.ADDED = 4)] = "ADDED"),
						(W[(W.DELETED = 8)] = "DELETED");
				})(g || (e.FileChangeFilter = g = {}));
				function p(W) {
					const X = W;
					return !!X && typeof X.onDidChange == "function";
				}
				var o;
				(function (W) {
					(W[(W.None = 0)] = "None"),
						(W[(W.FileReadWrite = 2)] = "FileReadWrite"),
						(W[(W.FileOpenReadWriteClose = 4)] = "FileOpenReadWriteClose"),
						(W[(W.FileReadStream = 16)] = "FileReadStream"),
						(W[(W.FileFolderCopy = 8)] = "FileFolderCopy"),
						(W[(W.PathCaseSensitive = 1024)] = "PathCaseSensitive"),
						(W[(W.Readonly = 2048)] = "Readonly"),
						(W[(W.Trash = 4096)] = "Trash"),
						(W[(W.FileWriteUnlock = 8192)] = "FileWriteUnlock"),
						(W[(W.FileAtomicRead = 16384)] = "FileAtomicRead"),
						(W[(W.FileAtomicWrite = 32768)] = "FileAtomicWrite"),
						(W[(W.FileAtomicDelete = 65536)] = "FileAtomicDelete"),
						(W[(W.FileClone = 131072)] = "FileClone");
				})(o || (e.FileSystemProviderCapabilities = o = {}));
				function f(W) {
					return !!(W.capabilities & o.FileReadWrite);
				}
				function b(W) {
					return !!(W.capabilities & o.FileFolderCopy);
				}
				function s(W) {
					return !!(W.capabilities & o.FileClone);
				}
				function l(W) {
					return !!(W.capabilities & o.FileOpenReadWriteClose);
				}
				function y(W) {
					return !!(W.capabilities & o.FileReadStream);
				}
				function $(W) {
					return f(W) ? !!(W.capabilities & o.FileAtomicRead) : !1;
				}
				function v(W) {
					return f(W) ? !!(W.capabilities & o.FileAtomicWrite) : !1;
				}
				function S(W) {
					return !!(W.capabilities & o.FileAtomicDelete);
				}
				function I(W) {
					return !!(W.capabilities & o.Readonly);
				}
				var T;
				(function (W) {
					(W.FileExists = "EntryExists"),
						(W.FileNotFound = "EntryNotFound"),
						(W.FileNotADirectory = "EntryNotADirectory"),
						(W.FileIsADirectory = "EntryIsADirectory"),
						(W.FileExceedsStorageQuota = "EntryExceedsStorageQuota"),
						(W.FileTooLarge = "EntryTooLarge"),
						(W.FileWriteLocked = "EntryWriteLocked"),
						(W.NoPermissions = "NoPermissions"),
						(W.Unavailable = "Unavailable"),
						(W.Unknown = "Unknown");
				})(T || (e.FileSystemProviderErrorCode = T = {}));
				class P extends Error {
					static create(X, Y) {
						const ie = new P(X.toString(), Y);
						return D(ie, Y), ie;
					}
					constructor(X, Y) {
						super(X), (this.code = Y);
					}
				}
				e.$xl = P;
				function k(W, X) {
					return P.create(W, X);
				}
				function L(W) {
					return W || k((0, d.localize)(1877, null), T.Unknown);
				}
				function D(W, X) {
					return (W.name = X ? `${X} (FileSystemError)` : "FileSystemError"), W;
				}
				function M(W) {
					if (!W) return T.Unknown;
					if (W instanceof P) return W.code;
					const X = /^(.+) \(FileSystemError\)$/.exec(W.name);
					if (!X) return T.Unknown;
					switch (X[1]) {
						case T.FileExists:
							return T.FileExists;
						case T.FileIsADirectory:
							return T.FileIsADirectory;
						case T.FileNotADirectory:
							return T.FileNotADirectory;
						case T.FileNotFound:
							return T.FileNotFound;
						case T.FileTooLarge:
							return T.FileTooLarge;
						case T.FileWriteLocked:
							return T.FileWriteLocked;
						case T.NoPermissions:
							return T.NoPermissions;
						case T.Unavailable:
							return T.Unavailable;
					}
					return T.Unknown;
				}
				function N(W) {
					if (W instanceof z) return W.fileOperationResult;
					switch (M(W)) {
						case T.FileNotFound:
							return H.FILE_NOT_FOUND;
						case T.FileIsADirectory:
							return H.FILE_IS_DIRECTORY;
						case T.FileNotADirectory:
							return H.FILE_NOT_DIRECTORY;
						case T.FileWriteLocked:
							return H.FILE_WRITE_LOCKED;
						case T.NoPermissions:
							return H.FILE_PERMISSION_DENIED;
						case T.FileExists:
							return H.FILE_MOVE_CONFLICT;
						case T.FileTooLarge:
							return H.FILE_TOO_LARGE;
						default:
							return H.FILE_OTHER_ERROR;
					}
				}
				var A;
				(function (W) {
					(W[(W.CREATE = 0)] = "CREATE"),
						(W[(W.DELETE = 1)] = "DELETE"),
						(W[(W.MOVE = 2)] = "MOVE"),
						(W[(W.COPY = 3)] = "COPY"),
						(W[(W.WRITE = 4)] = "WRITE");
				})(A || (e.FileOperation = A = {}));
				class R {
					constructor(X, Y, ie) {
						(this.resource = X), (this.operation = Y), (this.target = ie);
					}
					isOperation(X) {
						return this.operation === X;
					}
				}
				e.$Dl = R;
				var O;
				(function (W) {
					(W[(W.UPDATED = 0)] = "UPDATED"),
						(W[(W.ADDED = 1)] = "ADDED"),
						(W[(W.DELETED = 2)] = "DELETED");
				})(O || (e.FileChangeType = O = {}));
				class B {
					static {
						this.a = null;
					}
					constructor(X, Y) {
						(this.c = Y),
							(this.b = void 0),
							(this.d = new a.$Y(() => {
								const ie = t.$Si.forUris(() => this.c);
								return ie.fill(this.rawAdded.map((ne) => [ne, !0])), ie;
							})),
							(this.f = new a.$Y(() => {
								const ie = t.$Si.forUris(() => this.c);
								return ie.fill(this.rawUpdated.map((ne) => [ne, !0])), ie;
							})),
							(this.g = new a.$Y(() => {
								const ie = t.$Si.forUris(() => this.c);
								return ie.fill(this.rawDeleted.map((ne) => [ne, !0])), ie;
							})),
							(this.rawAdded = []),
							(this.rawUpdated = []),
							(this.rawDeleted = []);
						for (const ie of X) {
							switch (ie.type) {
								case O.ADDED:
									this.rawAdded.push(ie.resource);
									break;
								case O.UPDATED:
									this.rawUpdated.push(ie.resource);
									break;
								case O.DELETED:
									this.rawDeleted.push(ie.resource);
									break;
							}
							this.b !== B.a &&
								(typeof ie.cId == "number"
									? this.b === void 0
										? (this.b = ie.cId)
										: this.b !== ie.cId && (this.b = B.a)
									: this.b !== void 0 && (this.b = B.a));
						}
					}
					contains(X, ...Y) {
						return this.h(X, { includeChildren: !1 }, ...Y);
					}
					affects(X, ...Y) {
						return this.h(X, { includeChildren: !0 }, ...Y);
					}
					h(X, Y, ...ie) {
						if (!X) return !1;
						const ne = ie.length > 0;
						return !!(
							((!ne || ie.includes(O.ADDED)) &&
								(this.d.value.get(X) ||
									(Y.includeChildren && this.d.value.findSuperstr(X)))) ||
							((!ne || ie.includes(O.UPDATED)) &&
								(this.f.value.get(X) ||
									(Y.includeChildren && this.f.value.findSuperstr(X)))) ||
							((!ne || ie.includes(O.DELETED)) &&
								(this.g.value.findSubstr(X) ||
									(Y.includeChildren && this.g.value.findSuperstr(X))))
						);
					}
					gotAdded() {
						return this.rawAdded.length > 0;
					}
					gotDeleted() {
						return this.rawDeleted.length > 0;
					}
					gotUpdated() {
						return this.rawUpdated.length > 0;
					}
					correlates(X) {
						return this.b === X;
					}
					hasCorrelation() {
						return typeof this.b == "number";
					}
				}
				e.$El = B;
				function U(W, X, Y) {
					return !W || !X || W === X || X.length > W.length
						? !1
						: (X.charAt(X.length - 1) !== i.sep && (X += i.sep),
							Y ? (0, w.$Nf)(W, X) : W.indexOf(X) === 0);
				}
				class z extends Error {
					constructor(X, Y, ie) {
						super(X), (this.fileOperationResult = Y), (this.options = ie);
					}
				}
				e.$Gl = z;
				class F extends z {
					constructor(X, Y, ie, ne) {
						super(X, Y, ne), (this.fileOperationResult = Y), (this.size = ie);
					}
				}
				e.$Hl = F;
				class x extends z {
					constructor(X, Y, ie) {
						super(X, H.FILE_NOT_MODIFIED_SINCE, ie), (this.stat = Y);
					}
				}
				e.$Il = x;
				var H;
				(function (W) {
					(W[(W.FILE_IS_DIRECTORY = 0)] = "FILE_IS_DIRECTORY"),
						(W[(W.FILE_NOT_FOUND = 1)] = "FILE_NOT_FOUND"),
						(W[(W.FILE_NOT_MODIFIED_SINCE = 2)] = "FILE_NOT_MODIFIED_SINCE"),
						(W[(W.FILE_MODIFIED_SINCE = 3)] = "FILE_MODIFIED_SINCE"),
						(W[(W.FILE_MOVE_CONFLICT = 4)] = "FILE_MOVE_CONFLICT"),
						(W[(W.FILE_WRITE_LOCKED = 5)] = "FILE_WRITE_LOCKED"),
						(W[(W.FILE_PERMISSION_DENIED = 6)] = "FILE_PERMISSION_DENIED"),
						(W[(W.FILE_TOO_LARGE = 7)] = "FILE_TOO_LARGE"),
						(W[(W.FILE_INVALID_PATH = 8)] = "FILE_INVALID_PATH"),
						(W[(W.FILE_NOT_DIRECTORY = 9)] = "FILE_NOT_DIRECTORY"),
						(W[(W.FILE_OTHER_ERROR = 10)] = "FILE_OTHER_ERROR");
				})(H || (e.FileOperationResult = H = {})),
					(e.$Jl = {
						OFF: "off",
						AFTER_DELAY: "afterDelay",
						ON_FOCUS_CHANGE: "onFocusChange",
						ON_WINDOW_CHANGE: "onWindowChange",
					}),
					(e.$Kl = {
						OFF: "off",
						ON_EXIT: "onExit",
						ON_EXIT_AND_WINDOW_CLOSE: "onExitAndWindowClose",
					}),
					(e.$Ll = "files.associations"),
					(e.$Ml = "files.exclude"),
					(e.$Nl = "files.readonlyInclude"),
					(e.$Ol = "files.readonlyExclude"),
					(e.$Pl = "files.readonlyFromPermissions");
				var q;
				(function (W) {
					(W[(W.FILE = 0)] = "FILE"),
						(W[(W.FOLDER = 1)] = "FOLDER"),
						(W[(W.ROOT_FOLDER = 2)] = "ROOT_FOLDER");
				})(q || (e.FileKind = q = {})),
					(e.$Ql = "");
				function V(W) {
					if (!(typeof W.size != "number" || typeof W.mtime != "number"))
						return W.mtime.toString(29) + W.size.toString(31);
				}
				async function G(W, X) {
					if (!X.hasProvider(C.URI.from({ scheme: W.scheme })))
						return new Promise((Y) => {
							const ie = X.onDidChangeFileSystemProviderRegistrations((ne) => {
								ne.scheme === W.scheme && ne.added && (ie.dispose(), Y());
							});
						});
				}
				class K {
					static {
						this.KB = 1024;
					}
					static {
						this.MB = K.KB * K.KB;
					}
					static {
						this.GB = K.MB * K.KB;
					}
					static {
						this.TB = K.GB * K.KB;
					}
					static formatSize(X) {
						return (
							(0, E.$pg)(X) || (X = 0),
							X < K.KB
								? (0, d.localize)(1878, null, X.toFixed(0))
								: X < K.MB
									? (0, d.localize)(1879, null, (X / K.KB).toFixed(2))
									: X < K.GB
										? (0, d.localize)(1880, null, (X / K.MB).toFixed(2))
										: X < K.TB
											? (0, d.localize)(1881, null, (X / K.GB).toFixed(2))
											: (0, d.localize)(1882, null, (X / K.TB).toFixed(2))
						);
					}
				}
				e.$Tl = K;
				function J(W) {
					const X =
						typeof W == "string" || W?.scheme === u.Schemas.vscodeRemote;
					return typeof W != "string" && W?.scheme === u.Schemas.file
						? 1024 * K.MB
						: X
							? 10 * K.MB
							: r.$r
								? 50 * K.MB
								: 1024 * K.MB;
				}
			},
		),
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
		define(
			de[1613],
			he([1, 0, 76, 6, 3, 19, 408, 22]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$kxc = void 0),
					(E = mt(E));
				class m {
					constructor(h) {
						(this.type = d.FileType.File),
							(this.ctime = Date.now()),
							(this.mtime = Date.now()),
							(this.size = 0),
							(this.name = h);
					}
				}
				class r {
					constructor(h) {
						(this.type = d.FileType.Directory),
							(this.ctime = Date.now()),
							(this.mtime = Date.now()),
							(this.size = 0),
							(this.name = h),
							(this.entries = new Map());
					}
				}
				class u extends w.$1c {
					constructor() {
						super(...arguments),
							(this.a = 0),
							(this.b = new Map()),
							(this.f = this.D(new i.$re())),
							(this.onDidChangeCapabilities = this.f.event),
							(this.g =
								d.FileSystemProviderCapabilities.FileReadWrite |
								d.FileSystemProviderCapabilities.PathCaseSensitive),
							(this.root = new r("")),
							(this.q = this.D(new i.$re())),
							(this.onDidChangeFile = this.q.event),
							(this.r = []);
					}
					get capabilities() {
						return this.g;
					}
					setReadOnly(h) {
						const c = !!(this.g & d.FileSystemProviderCapabilities.Readonly);
						h !== c &&
							((this.g = h
								? d.FileSystemProviderCapabilities.Readonly |
									d.FileSystemProviderCapabilities.PathCaseSensitive |
									d.FileSystemProviderCapabilities.FileReadWrite
								: d.FileSystemProviderCapabilities.FileReadWrite |
									d.FileSystemProviderCapabilities.PathCaseSensitive),
							this.f.fire());
					}
					async stat(h) {
						return this.h(h, !1);
					}
					async readdir(h) {
						const c = this.j(h, !1),
							n = [];
						return c.entries.forEach((g, p) => n.push([p, g.type])), n;
					}
					async readFile(h) {
						const c = this.m(h, !1).data;
						if (c) return c;
						throw (0, d.$yl)(
							"file not found",
							d.FileSystemProviderErrorCode.FileNotFound,
						);
					}
					readFileStream(h) {
						const c = this.m(h, !1).data,
							n = (0, C.$He)(
								(g) => t.$Te.concat(g.map((p) => t.$Te.wrap(p))).buffer,
							);
						return n.end(c), n;
					}
					async writeFile(h, c, n) {
						const g = E.$kh(h),
							p = this.n(h);
						let o = p.entries.get(g);
						if (o instanceof r)
							throw (0, d.$yl)(
								"file is directory",
								d.FileSystemProviderErrorCode.FileIsADirectory,
							);
						if (!o && !n.create)
							throw (0, d.$yl)(
								"file not found",
								d.FileSystemProviderErrorCode.FileNotFound,
							);
						if (o && n.create && !n.overwrite)
							throw (0, d.$yl)(
								"file exists already",
								d.FileSystemProviderErrorCode.FileExists,
							);
						o ||
							((o = new m(g)),
							p.entries.set(g, o),
							this.t({ type: d.FileChangeType.ADDED, resource: h })),
							(o.mtime = Date.now()),
							(o.size = c.byteLength),
							(o.data = c),
							this.t({ type: d.FileChangeType.UPDATED, resource: h });
					}
					open(h, c) {
						const n = this.m(h, !1).data;
						if (n) {
							const g = this.a++;
							return this.b.set(g, n), Promise.resolve(g);
						}
						throw (0, d.$yl)(
							"file not found",
							d.FileSystemProviderErrorCode.FileNotFound,
						);
					}
					close(h) {
						return this.b.delete(h), Promise.resolve();
					}
					read(h, c, n, g, p) {
						const o = this.b.get(h);
						if (!o)
							throw (0, d.$yl)(
								"No file with that descriptor open",
								d.FileSystemProviderErrorCode.Unavailable,
							);
						const f = t.$Te.wrap(o).slice(c, c + p);
						return n.set(f.buffer, g), Promise.resolve(f.byteLength);
					}
					write(h, c, n, g, p) {
						const o = this.b.get(h);
						if (!o)
							throw (0, d.$yl)(
								"No file with that descriptor open",
								d.FileSystemProviderErrorCode.Unavailable,
							);
						const f = t.$Te.wrap(n).slice(g, g + p);
						return o.set(f.buffer, c), Promise.resolve(f.byteLength);
					}
					async rename(h, c, n) {
						if (!n.overwrite && this.h(c, !0))
							throw (0, d.$yl)(
								"file exists already",
								d.FileSystemProviderErrorCode.FileExists,
							);
						const g = this.h(h, !1),
							p = this.n(h),
							o = this.n(c),
							f = E.$kh(c);
						p.entries.delete(g.name),
							(g.name = f),
							o.entries.set(f, g),
							this.t(
								{ type: d.FileChangeType.DELETED, resource: h },
								{ type: d.FileChangeType.ADDED, resource: c },
							);
					}
					async delete(h, c) {
						const n = E.$mh(h),
							g = E.$kh(h),
							p = this.j(n, !1);
						p.entries.has(g) &&
							(p.entries.delete(g),
							(p.mtime = Date.now()),
							(p.size -= 1),
							this.t(
								{ type: d.FileChangeType.UPDATED, resource: n },
								{ resource: h, type: d.FileChangeType.DELETED },
							));
					}
					async mkdir(h) {
						if (this.h(h, !0))
							throw (0, d.$yl)(
								"file exists already",
								d.FileSystemProviderErrorCode.FileExists,
							);
						const c = E.$kh(h),
							n = E.$mh(h),
							g = this.j(n, !1),
							p = new r(c);
						g.entries.set(p.name, p),
							(g.mtime = Date.now()),
							(g.size += 1),
							this.t(
								{ type: d.FileChangeType.UPDATED, resource: n },
								{ type: d.FileChangeType.ADDED, resource: h },
							);
					}
					h(h, c) {
						const n = h.path.split("/");
						let g = this.root;
						for (const p of n) {
							if (!p) continue;
							let o;
							if ((g instanceof r && (o = g.entries.get(p)), !o)) {
								if (c) return;
								throw (0, d.$yl)(
									"file not found",
									d.FileSystemProviderErrorCode.FileNotFound,
								);
							}
							g = o;
						}
						return g;
					}
					j(h, c) {
						const n = this.h(h, c);
						if (n instanceof r) return n;
						throw (0, d.$yl)(
							"file not a directory",
							d.FileSystemProviderErrorCode.FileNotADirectory,
						);
					}
					m(h, c) {
						const n = this.h(h, c);
						if (n instanceof m) return n;
						throw (0, d.$yl)(
							"file is a directory",
							d.FileSystemProviderErrorCode.FileIsADirectory,
						);
					}
					n(h) {
						const c = E.$mh(h);
						return this.j(c, !1);
					}
					watch(h, c) {
						return w.$1c.None;
					}
					t(...h) {
						this.r.push(...h),
							this.s && clearTimeout(this.s),
							(this.s = setTimeout(() => {
								this.q.fire(this.r), (this.r.length = 0);
							}, 5));
					}
					dispose() {
						super.dispose(), this.b.clear();
					}
				}
				e.$kxc = u;
			},
		),
		
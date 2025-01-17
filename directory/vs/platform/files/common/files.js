import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/ternarySearchTree.js';
import '../../../base/common/path.js';
import '../../../base/common/strings.js';
import '../../../base/common/types.js';
import '../../../base/common/uri.js';
import '../../../nls.js';
import '../../instantiation/common/instantiation.js';
import '../../../base/common/platform.js';
import '../../../base/common/network.js';
import '../../../base/common/lazy.js';
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
		
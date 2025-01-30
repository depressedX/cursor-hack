import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/uri.js';
import './extHost.protocol.js';
import '../../../platform/files/common/files.js';
import '../../../base/common/lifecycle.js';
import './extHostTypes.js';
import './extHostTypeConverters.js';
import '../../../editor/common/languages/linkComputer.js';
import '../../../base/common/strings.js';
import '../../../base/common/charCode.js';
import '../../../base/common/buffer.js';
import '../../services/extensions/common/extensions.js';
import '../../../base/common/htmlContent.js';
define(
			Pe[569],
			Ne([1, 0, 2, 6, 32, 3, 11, 17, 460, 15, 31, 22, 29, 135]),
			function (we, t, e, r, S, N, P, I, l, n, p, y, d, k) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$pid = void 0),
					(S = tt(S)),
					(I = tt(I));
				class g {
					constructor() {
						this.a = [];
					}
					add($) {
						(this.b = void 0), this.a.push($);
					}
					delete($) {
						const T = this.a.indexOf($);
						T >= 0 && (this.a.splice(T, 1), (this.b = void 0));
					}
					c() {
						if (!this.b) {
							const $ = this.a.sort(),
								T = [];
							let a,
								u,
								s = l.State.LastKnownState,
								f = l.State.LastKnownState;
							for (const o of $) {
								let w = a ? (0, n.$Of)(a, o) : 0;
								for (w === 0 ? (u = l.State.Start) : (u = f); w < o.length; w++)
									w + 1 === o.length
										? ((s = f), (f = l.State.BeforeColon))
										: (f += 1),
										T.push([u, o.toUpperCase().charCodeAt(w), f]),
										T.push([u, o.toLowerCase().charCodeAt(w), f]),
										(u = f);
								(a = o), (f = s);
							}
							T.push([
								l.State.BeforeColon,
								p.CharCode.Colon,
								l.State.AfterColon,
							]),
								T.push([l.State.AfterColon, p.CharCode.Slash, l.State.End]),
								(this.b = new l.$Zwb(T));
						}
					}
					provideDocumentLinks($) {
						this.c();
						const T = [],
							a = l.$1wb.computeLinks(
								{
									getLineContent(u) {
										return $.lineAt(u - 1).text;
									},
									getLineCount() {
										return $.lineCount;
									},
								},
								this.b,
							);
						for (const u of a) {
							const s = I.DocumentLink.to(u);
							s.target && T.push(s);
						}
						return T;
					}
				}
				class c {
					constructor($, T) {
						(this.i = T),
							(this.b = new g()),
							(this.c = new Map()),
							(this.d = new Set()),
							(this.f = new Map()),
							(this.h = 0),
							(this.a = $.getProxy(r.$lbb.MainThreadFileSystem));
					}
					dispose() {
						this.g?.dispose();
					}
					registerFileSystemProvider($, T, a, u = {}) {
						if ((c.j(a), this.d.has(T)))
							throw new Error(
								`a provider for the scheme '${T}' is already registered`,
							);
						this.g ||
							(this.g = this.i.registerDocumentLinkProvider($, "*", this.b));
						const s = this.h++;
						this.b.add(T), this.d.add(T), this.c.set(s, a);
						let f = S.FileSystemProviderCapabilities.FileReadWrite;
						u.isCaseSensitive &&
							(f += S.FileSystemProviderCapabilities.PathCaseSensitive),
							u.isReadonly && (f += S.FileSystemProviderCapabilities.Readonly),
							typeof a.copy == "function" &&
								(f += S.FileSystemProviderCapabilities.FileFolderCopy),
							typeof a.open == "function" &&
								typeof a.close == "function" &&
								typeof a.read == "function" &&
								typeof a.write == "function" &&
								((0, d.$u2)($, "fsChunks"),
								(f += S.FileSystemProviderCapabilities.FileOpenReadWriteClose));
						let o;
						u.isReadonly &&
							(0, k.$el)(u.isReadonly) &&
							u.isReadonly.value !== "" &&
							(o = {
								value: u.isReadonly.value,
								isTrusted: u.isReadonly.isTrusted,
								supportThemeIcons: u.isReadonly.supportThemeIcons,
								supportHtml: u.isReadonly.supportHtml,
								baseUri: u.isReadonly.baseUri,
								uris: u.isReadonly.uris,
							}),
							this.a.$registerFileSystemProvider(s, T, f, o).catch((m) => {
								console.error(
									`FAILED to register filesystem provider of ${$.identifier.value}-extension for the scheme ${T}`,
								),
									console.error(m);
							});
						const w = a.onDidChangeFile((m) => {
							const E = [];
							for (const R of m) {
								const { uri: C, type: O } = R;
								if (C.scheme !== T) continue;
								let A;
								switch (O) {
									case P.FileChangeType.Changed:
										A = S.FileChangeType.UPDATED;
										break;
									case P.FileChangeType.Created:
										A = S.FileChangeType.ADDED;
										break;
									case P.FileChangeType.Deleted:
										A = S.FileChangeType.DELETED;
										break;
									default:
										throw new Error("Unknown FileChangeType");
								}
								E.push({ resource: C, type: A });
							}
							this.a.$onFileSystemChange(s, E);
						});
						return (0, N.$Yc)(() => {
							w.dispose(),
								this.b.delete(T),
								this.d.delete(T),
								this.c.delete(s),
								this.a.$unregisterProvider(s);
						});
					}
					static j($) {
						if (!$) throw new Error("MISSING provider");
						if (typeof $.watch != "function")
							throw new Error("Provider does NOT implement watch");
						if (typeof $.stat != "function")
							throw new Error("Provider does NOT implement stat");
						if (typeof $.readDirectory != "function")
							throw new Error("Provider does NOT implement readDirectory");
						if (typeof $.createDirectory != "function")
							throw new Error("Provider does NOT implement createDirectory");
						if (typeof $.readFile != "function")
							throw new Error("Provider does NOT implement readFile");
						if (typeof $.writeFile != "function")
							throw new Error("Provider does NOT implement writeFile");
						if (typeof $.delete != "function")
							throw new Error("Provider does NOT implement delete");
						if (typeof $.rename != "function")
							throw new Error("Provider does NOT implement rename");
					}
					static k($) {
						const { type: T, ctime: a, mtime: u, size: s, permissions: f } = $;
						return { type: T, ctime: a, mtime: u, size: s, permissions: f };
					}
					$stat($, T) {
						return Promise.resolve(this.l($).stat(e.URI.revive(T))).then((a) =>
							c.k(a),
						);
					}
					$readdir($, T) {
						return Promise.resolve(this.l($).readDirectory(e.URI.revive(T)));
					}
					$readFile($, T) {
						return Promise.resolve(this.l($).readFile(e.URI.revive(T))).then(
							(a) => y.$Te.wrap(a),
						);
					}
					$writeFile($, T, a, u) {
						return Promise.resolve(
							this.l($).writeFile(e.URI.revive(T), a.buffer, u),
						);
					}
					$delete($, T, a) {
						return Promise.resolve(this.l($).delete(e.URI.revive(T), a));
					}
					$rename($, T, a, u) {
						return Promise.resolve(
							this.l($).rename(e.URI.revive(T), e.URI.revive(a), u),
						);
					}
					$copy($, T, a, u) {
						const s = this.l($);
						if (!s.copy)
							throw new Error('FileSystemProvider does not implement "copy"');
						return Promise.resolve(s.copy(e.URI.revive(T), e.URI.revive(a), u));
					}
					$mkdir($, T) {
						return Promise.resolve(this.l($).createDirectory(e.URI.revive(T)));
					}
					$watch($, T, a, u) {
						const s = this.l($).watch(e.URI.revive(a), u);
						this.f.set(T, s);
					}
					$unwatch($, T) {
						const a = this.f.get(T);
						a && (a.dispose(), this.f.delete(T));
					}
					$open($, T, a) {
						const u = this.l($);
						if (!u.open)
							throw new Error('FileSystemProvider does not implement "open"');
						return Promise.resolve(u.open(e.URI.revive(T), a));
					}
					$close($, T) {
						const a = this.l($);
						if (!a.close)
							throw new Error('FileSystemProvider does not implement "close"');
						return Promise.resolve(a.close(T));
					}
					$read($, T, a, u) {
						const s = this.l($);
						if (!s.read)
							throw new Error('FileSystemProvider does not implement "read"');
						const f = y.$Te.alloc(u);
						return Promise.resolve(s.read(T, a, f.buffer, 0, u)).then((o) =>
							f.slice(0, o),
						);
					}
					$write($, T, a, u) {
						const s = this.l($);
						if (!s.write)
							throw new Error('FileSystemProvider does not implement "write"');
						return Promise.resolve(s.write(T, a, u.buffer, 0, u.byteLength));
					}
					l($) {
						const T = this.c.get($);
						if (!T) {
							const a = new Error();
							throw ((a.name = "ENOPRO"), (a.message = "no provider"), a);
						}
						return T;
					}
				}
				t.$pid = c;
			},
		),
		
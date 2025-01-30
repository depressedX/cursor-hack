import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/uri.js';
import '../../../../platform/files/common/files.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/buffer.js';
define(
			de[1737],
			he([1, 0, 6, 3, 9, 22, 19, 76]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*uri*/,
 E /*files*/,
 C /*resources*/,
 d /*buffer*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$c2c = void 0);
				class m {
					static {
						this.SCHEMA = "vscode-local-history";
					}
					static toLocalHistoryFileSystem(u) {
						const a = {
							location: u.location.toString(!0),
							associatedResource: u.associatedResource.toString(!0),
						};
						return u.associatedResource.with({
							scheme: m.SCHEMA,
							query: JSON.stringify(a),
						});
					}
					static fromLocalHistoryFileSystem(u) {
						const a = JSON.parse(u.query);
						return {
							location: w.URI.parse(a.location),
							associatedResource: w.URI.parse(a.associatedResource),
						};
					}
					static {
						this.a = w.URI.from({ scheme: m.SCHEMA, path: "/empty" });
					}
					static {
						this.EMPTY = { location: m.a, associatedResource: m.a };
					}
					get capabilities() {
						return (
							E.FileSystemProviderCapabilities.FileReadWrite |
							E.FileSystemProviderCapabilities.Readonly
						);
					}
					constructor(u) {
						(this.b = u),
							(this.c = new Map()),
							(this.onDidChangeCapabilities = t.Event.None),
							(this.onDidChangeFile = t.Event.None);
					}
					async d(u) {
						const a = u.scheme;
						let h = this.c.get(a);
						if (!h) {
							const c = this.b.getProvider(a);
							c
								? (h = Promise.resolve(c))
								: (h = new Promise((n) => {
										const g = this.b.onDidChangeFileSystemProviderRegistrations(
											(p) => {
												p.added &&
													p.provider &&
													p.scheme === a &&
													(g.dispose(), n(p.provider));
											},
										);
									})),
								this.c.set(a, h);
						}
						return h;
					}
					async stat(u) {
						const a = m.fromLocalHistoryFileSystem(u).location;
						return (0, C.$gh)(m.a, a)
							? { type: E.FileType.File, ctime: 0, mtime: 0, size: 0 }
							: (await this.d(a)).stat(a);
					}
					async readFile(u) {
						const a = m.fromLocalHistoryFileSystem(u).location;
						if ((0, C.$gh)(m.a, a)) return d.$Te.fromString("").buffer;
						const h = await this.d(a);
						if ((0, E.$ol)(h)) return h.readFile(a);
						throw new Error("Unsupported");
					}
					async writeFile(u, a, h) {}
					async mkdir(u) {}
					async readdir(u) {
						return [];
					}
					async rename(u, a, h) {}
					async delete(u, a) {}
					watch(u, a) {
						return i.$1c.None;
					}
				}
				e.$c2c = m;
			},
		),
		
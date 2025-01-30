import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/buffer.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/resources.js';
import '../../../base/common/stream.js';
import './files.js';
define(
			de[1613],
			he([1, 0, 76, 6, 3, 19, 408, 22]),
			function (ce /*require*/,
 e /*exports*/,
 t /*buffer*/,
 i /*event*/,
 w /*lifecycle*/,
 E /*resources*/,
 C /*stream*/,
 d /*files*/) {
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
		
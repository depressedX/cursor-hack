import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/buffer.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/numbers.js';
import '../../../../base/common/assert.js';
import '../../../../platform/files/common/files.js';
import '../common/debug.js';
define(
			de[3051],
			he([1, 0, 76, 6, 3, 201, 229, 22, 112]),
			function (ce /*require*/,
 e /*exports*/,
 t /*buffer*/,
 i /*event*/,
 w /*lifecycle*/,
 E /*numbers*/,
 C /*assert*/,
 d /*files*/,
 m /*debug*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$VQc = void 0);
				const r = /range=([0-9]+):([0-9]+)/;
				class u {
					constructor(c) {
						(this.d = c),
							(this.a = 0),
							(this.b = new Map()),
							(this.c = new i.$re()),
							(this.onDidChangeCapabilities = i.Event.None),
							(this.onDidChangeFile = this.c.event),
							(this.capabilities =
								0 |
								d.FileSystemProviderCapabilities.PathCaseSensitive |
								d.FileSystemProviderCapabilities.FileOpenReadWriteClose),
							c.onDidEndSession(({ session: n }) => {
								for (const [g, p] of this.b) p.session === n && this.close(g);
							});
					}
					watch(c, n) {
						if (n.recursive) return (0, w.$Yc)(() => {});
						const { session: g, memoryReference: p, offset: o } = this.f(c),
							f = new w.$Zc();
						return (
							f.add(
								g.onDidChangeState(() => {
									(g.state === m.State.Running ||
										g.state === m.State.Inactive) &&
										this.c.fire([
											{ type: d.FileChangeType.DELETED, resource: c },
										]);
								}),
							),
							f.add(
								g.onDidInvalidateMemory((b) => {
									b.body.memoryReference === p &&
										((o &&
											(b.body.offset >= o.toOffset ||
												b.body.offset + b.body.count < o.fromOffset)) ||
											this.c.fire([
												{ resource: c, type: d.FileChangeType.UPDATED },
											]));
								}),
							),
							f
						);
					}
					stat(c) {
						const { readOnly: n } = this.f(c);
						return Promise.resolve({
							type: d.FileType.File,
							mtime: 0,
							ctime: 0,
							size: 0,
							permissions: n ? d.FilePermission.Readonly : void 0,
						});
					}
					mkdir() {
						throw (0, d.$yl)(
							"Not allowed",
							d.FileSystemProviderErrorCode.NoPermissions,
						);
					}
					readdir() {
						throw (0, d.$yl)(
							"Not allowed",
							d.FileSystemProviderErrorCode.NoPermissions,
						);
					}
					delete() {
						throw (0, d.$yl)(
							"Not allowed",
							d.FileSystemProviderErrorCode.NoPermissions,
						);
					}
					rename() {
						throw (0, d.$yl)(
							"Not allowed",
							d.FileSystemProviderErrorCode.NoPermissions,
						);
					}
					open(c, n) {
						const { session: g, memoryReference: p, offset: o } = this.f(c),
							f = this.a++;
						let b = g.getMemory(p);
						return (
							o && (b = new a(b, o)),
							this.b.set(f, { session: g, region: b }),
							Promise.resolve(f)
						);
					}
					close(c) {
						return (
							this.b.get(c)?.region.dispose(),
							this.b.delete(c),
							Promise.resolve()
						);
					}
					async writeFile(c, n) {
						const { offset: g } = this.f(c);
						if (!g)
							throw (0, d.$yl)(
								"Range must be present to read a file",
								d.FileSystemProviderErrorCode.FileNotFound,
							);
						const p = await this.open(c, { create: !1 });
						try {
							await this.write(p, g.fromOffset, n, 0, n.length);
						} finally {
							this.close(p);
						}
					}
					async readFile(c) {
						const { offset: n } = this.f(c);
						if (!n)
							throw (0, d.$yl)(
								"Range must be present to read a file",
								d.FileSystemProviderErrorCode.FileNotFound,
							);
						const g = new Uint8Array(n.toOffset - n.fromOffset),
							p = await this.open(c, { create: !1 });
						try {
							return await this.read(p, n.fromOffset, g, 0, g.length), g;
						} finally {
							this.close(p);
						}
					}
					async read(c, n, g, p, o) {
						const f = this.b.get(c);
						if (!f)
							throw (0, d.$yl)(
								"No file with that descriptor open",
								d.FileSystemProviderErrorCode.Unavailable,
							);
						const b = await f.region.read(n, o);
						let s = 0;
						for (const l of b)
							switch (l.type) {
								case m.MemoryRangeType.Unreadable:
									return s;
								case m.MemoryRangeType.Error:
									if (s > 0) return s;
									throw (0, d.$yl)(
										l.error,
										d.FileSystemProviderErrorCode.Unknown,
									);
								case m.MemoryRangeType.Valid: {
									const y = Math.max(0, n - l.offset),
										$ = l.data.slice(
											y,
											Math.min(l.data.byteLength, y + (o - s)),
										);
									g.set($.buffer, p + s), (s += $.byteLength);
									break;
								}
								default:
									(0, C.$kd)(l);
							}
						return s;
					}
					write(c, n, g, p, o) {
						const f = this.b.get(c);
						if (!f)
							throw (0, d.$yl)(
								"No file with that descriptor open",
								d.FileSystemProviderErrorCode.Unavailable,
							);
						return f.region.write(n, t.$Te.wrap(g).slice(p, p + o));
					}
					f(c) {
						if (c.scheme !== m.$55)
							throw (0, d.$yl)(
								`Cannot open file with scheme ${c.scheme}`,
								d.FileSystemProviderErrorCode.FileNotFound,
							);
						const n = this.d.getModel().getSession(c.authority);
						if (!n)
							throw (0, d.$yl)(
								"Debug session not found",
								d.FileSystemProviderErrorCode.FileNotFound,
							);
						let g;
						const p = r.exec(c.query);
						p && (g = { fromOffset: Number(p[1]), toOffset: Number(p[2]) });
						const [, o] = c.path.split("/");
						return {
							session: n,
							offset: g,
							readOnly: !n.capabilities.supportsWriteMemoryRequest,
							sessionId: c.authority,
							memoryReference: decodeURIComponent(o),
						};
					}
				}
				e.$VQc = u;
				class a extends w.$1c {
					constructor(c, n) {
						super(),
							(this.c = c),
							(this.range = n),
							(this.a = new i.$re()),
							(this.onDidInvalidate = this.a.event),
							(this.b = this.range.toOffset - this.range.fromOffset),
							(this.writable = c.writable),
							this.D(c),
							this.D(
								c.onDidInvalidate((g) => {
									const p = (0, E.$Zm)(g.fromOffset - n.fromOffset, 0, this.b),
										o = (0, E.$Zm)(g.toOffset - n.fromOffset, 0, this.b);
									o > p && this.a.fire({ fromOffset: p, toOffset: o });
								}),
							);
					}
					read(c, n) {
						if (c < 0) throw new RangeError(`Invalid fromOffset: ${c}`);
						return this.c.read(
							this.range.fromOffset + c,
							this.range.fromOffset + Math.min(n, this.b),
						);
					}
					write(c, n) {
						return this.c.write(this.range.fromOffset + c, n);
					}
				}
			},
		),
		
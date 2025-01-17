import '../../../../require.js';
import '../../../../exports.js';
import '../../instantiation/common/instantiation.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../storage/common/storage.js';
import './extensionManagementUtil.js';
import '../../product/common/productService.js';
import '../../../base/common/arrays.js';
import '../../log/common/log.js';
import '../../../base/common/types.js';
define(
			de[677],
			he([1, 0, 5, 6, 3, 21, 154, 62, 24, 34, 28]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				var a;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2N = e.$1N = void 0),
					(e.$1N = (0, t.$Mi)("IExtensionStorageService"));
				const h = /^extensionKeys\/([^.]+\..+)@(\d+\.\d+\.\d+(-.*)?)$/;
				let c = class extends w.$1c {
					static {
						a = this;
					}
					static {
						this.a = 512 * 1024;
					}
					static b(g) {
						return `extensionKeys/${(0, C.$$p)(g.id)}@${g.version}`;
					}
					static c(g) {
						const p = h.exec(g);
						if (p && p[1]) return { id: p[1], version: p[2] };
					}
					static async removeOutdatedExtensionVersions(g, p) {
						const o = await g.getInstalled(),
							f = [];
						for (const [b, s] of a.f(p)) {
							const l = o.find((y) => (0, C.$7p)(y.identifier, { id: b }))
								?.manifest.version;
							for (const y of s) l !== y && f.push(a.b({ id: b, version: y }));
						}
						for (const b of f) p.remove(b, E.StorageScope.PROFILE);
					}
					static f(g) {
						const p = new Map(),
							o = g.keys(E.StorageScope.PROFILE, E.StorageTarget.MACHINE);
						for (const f of o) {
							const b = a.c(f);
							if (b) {
								let s = p.get(b.id.toLowerCase());
								s || p.set(b.id.toLowerCase(), (s = [])), s.push(b.version);
							}
						}
						return p;
					}
					constructor(g, p, o) {
						super(),
							(this.j = g),
							(this.m = p),
							(this.n = o),
							(this.g = this.D(new i.$re())),
							(this.onDidChangeExtensionStorageToSync = this.g.event),
							(this.h = a.f(g)),
							this.D(
								this.j.onDidChangeValue(
									E.StorageScope.PROFILE,
									void 0,
									this.D(new w.$Zc()),
								)((f) => this.q(f)),
							);
					}
					q(g) {
						if (this.h.has(g.key.toLowerCase())) {
							this.g.fire();
							return;
						}
						const p = a.c(g.key);
						if (p) {
							if (this.j.get(g.key, E.StorageScope.PROFILE) === void 0)
								this.h.delete(p.id.toLowerCase());
							else {
								let o = this.h.get(p.id.toLowerCase());
								o || this.h.set(p.id.toLowerCase(), (o = [])),
									o.push(p.version),
									this.g.fire();
							}
							return;
						}
					}
					r(g) {
						if ((0, u.$lg)(g)) return g;
						const p = g.manifest ? g.manifest.publisher : g.publisher,
							o = g.manifest ? g.manifest.name : g.name;
						return (0, C.$0p)(p, o);
					}
					getExtensionState(g, p) {
						const o = this.r(g),
							f = this.getExtensionStateRaw(g, p);
						if (f)
							try {
								return JSON.parse(f);
							} catch (b) {
								this.n.error(
									`[mainThreadStorage] unexpected error parsing storage contents (extensionId: ${o}, global: ${p}): ${b}`,
								);
							}
					}
					getExtensionStateRaw(g, p) {
						const o = this.r(g),
							f = this.j.get(
								o,
								p ? E.StorageScope.PROFILE : E.StorageScope.WORKSPACE,
							);
						return (
							f &&
								f?.length > a.a &&
								this.n.warn(
									`[mainThreadStorage] large extension state detected (extensionId: ${o}, global: ${p}): ${f.length / 1024}kb. Consider to use 'storageUri' or 'globalStorageUri' to store this data on disk instead.`,
								),
							f
						);
					}
					setExtensionState(g, p, o) {
						const f = this.r(g);
						p === void 0
							? this.j.remove(
									f,
									o ? E.StorageScope.PROFILE : E.StorageScope.WORKSPACE,
								)
							: this.j.store(
									f,
									JSON.stringify(p),
									o ? E.StorageScope.PROFILE : E.StorageScope.WORKSPACE,
									E.StorageTarget.MACHINE,
								);
					}
					setKeysForSync(g, p) {
						this.j.store(
							a.b(g),
							JSON.stringify(p),
							E.StorageScope.PROFILE,
							E.StorageTarget.MACHINE,
						);
					}
					getKeysForSync(g) {
						const p = this.m.extensionSyncedKeys?.[g.id.toLowerCase()],
							o = this.j.get(a.b(g), E.StorageScope.PROFILE),
							f = o ? JSON.parse(o) : void 0;
						return f && p ? (0, m.$Qb)([...f, ...p]) : f || p;
					}
					addToMigrationList(g, p) {
						if (g !== p) {
							const o = this.s.filter((f) => !f.includes(g) && !f.includes(p));
							o.push([g, p]), (this.s = o);
						}
					}
					getSourceExtensionToMigrate(g) {
						const p = this.s.find(([, o]) => g === o);
						return p ? p[0] : void 0;
					}
					get s() {
						const g = this.j.get(
							"extensionStorage.migrationList",
							E.StorageScope.APPLICATION,
							"[]",
						);
						try {
							const p = JSON.parse(g);
							if (Array.isArray(p)) return p;
						} catch {}
						return [];
					}
					set s(g) {
						g.length
							? this.j.store(
									"extensionStorage.migrationList",
									JSON.stringify(g),
									E.StorageScope.APPLICATION,
									E.StorageTarget.MACHINE,
								)
							: this.j.remove(
									"extensionStorage.migrationList",
									E.StorageScope.APPLICATION,
								);
					}
				};
				(e.$2N = c),
					(e.$2N = c = a = Ne([j(0, E.$lq), j(1, d.$Bk), j(2, r.$ik)], c));
			},
		),
		
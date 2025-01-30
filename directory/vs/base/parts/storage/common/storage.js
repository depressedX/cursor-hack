import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../common/async.js';
import '../../../common/event.js';
import '../../../common/lifecycle.js';
import '../../../common/marshalling.js';
import '../../../common/types.js';
define(
			de[1174],
			he([1, 0, 15, 6, 3, 197, 28]),
			function (ce /*require*/,
 e /*exports*/,
 t /*async*/,
 i /*event*/,
 w /*lifecycle*/,
 E /*marshalling*/,
 C /*types*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$iq = e.$hq = e.StorageState = e.StorageHint = void 0),
					(e.$gq = m);
				var d;
				(function (h) {
					(h[(h.STORAGE_DOES_NOT_EXIST = 0)] = "STORAGE_DOES_NOT_EXIST"),
						(h[(h.STORAGE_IN_MEMORY = 1)] = "STORAGE_IN_MEMORY");
				})(d || (e.StorageHint = d = {}));
				function m(h) {
					const c = h;
					return c?.changed instanceof Map || c?.deleted instanceof Set;
				}
				var r;
				(function (h) {
					(h[(h.None = 0)] = "None"),
						(h[(h.Initialized = 1)] = "Initialized"),
						(h[(h.Closed = 2)] = "Closed");
				})(r || (e.StorageState = r = {}));
				class u extends w.$1c {
					static {
						this.a = 100;
					}
					constructor(c, n = Object.create(null)) {
						super(),
							(this.q = c),
							(this.r = n),
							(this.b = this.D(new i.$ue())),
							(this.onDidChangeStorage = this.b.event),
							(this.c = r.None),
							(this.f = new Map()),
							(this.g = this.D(new t.$Kh(u.a))),
							(this.h = new Set()),
							(this.j = new Map()),
							(this.m = void 0),
							(this.n = []),
							this.s();
					}
					s() {
						this.D(this.q.onDidChangeItemsExternal((c) => this.t(c)));
					}
					t(c) {
						this.b.pause();
						try {
							c.changed?.forEach((n, g) => this.u(g, n)),
								c.deleted?.forEach((n) => this.u(n, void 0));
						} finally {
							this.b.resume();
						}
					}
					u(c, n) {
						if (this.c === r.Closed) return;
						let g = !1;
						(0, C.$ug)(n)
							? (g = this.f.delete(c))
							: this.f.get(c) !== n && (this.f.set(c, n), (g = !0)),
							g && this.b.fire({ key: c, external: !0 });
					}
					get items() {
						return this.f;
					}
					get size() {
						return this.f.size;
					}
					async init() {
						this.c === r.None &&
							((this.c = r.Initialized),
							this.r.hint !== d.STORAGE_DOES_NOT_EXIST &&
								(this.f = await this.q.getItems()));
					}
					cursorDiskKVGet(c) {
						return this.q.cursorDiskKVGet(c);
					}
					cursorDiskKVSet(c, n) {
						return this.q.cursorDiskKVSet(c, n);
					}
					get(c, n) {
						const g = this.f.get(c);
						return (0, C.$ug)(g) ? n : g;
					}
					getBoolean(c, n) {
						const g = this.get(c);
						return (0, C.$ug)(g) ? n : g === "true";
					}
					getNumber(c, n) {
						const g = this.get(c);
						return (0, C.$ug)(g) ? n : parseInt(g, 10);
					}
					getObject(c, n) {
						const g = this.get(c);
						return (0, C.$ug)(g) ? n : (0, E.$ii)(g);
					}
					async set(c, n, g = !1) {
						if (this.c === r.Closed) return;
						if ((0, C.$ug)(n)) return this.delete(c, g);
						const p =
							(0, C.$ng)(n) || Array.isArray(n) ? (0, E.$hi)(n) : String(n);
						if (this.f.get(c) !== p)
							return (
								this.f.set(c, p),
								this.j.set(c, p),
								this.h.delete(c),
								this.b.fire({ key: c, external: g }),
								this.C()
							);
					}
					async delete(c, n = !1) {
						if (!(this.c === r.Closed || !this.f.delete(c)))
							return (
								this.h.has(c) || this.h.add(c),
								this.j.delete(c),
								this.b.fire({ key: c, external: n }),
								this.C()
							);
					}
					async optimize() {
						if (this.c !== r.Closed)
							return await this.flush(0), this.q.optimize();
					}
					async close() {
						return this.m || (this.m = this.w()), this.m;
					}
					async w() {
						this.c = r.Closed;
						try {
							await this.C(0);
						} catch {}
						await this.q.close(() => this.f);
					}
					get y() {
						return this.j.size > 0 || this.h.size > 0;
					}
					async z() {
						if (!this.y) return;
						const c = { insert: this.j, delete: this.h };
						return (
							(this.h = new Set()),
							(this.j = new Map()),
							this.q.updateItems(c).finally(() => {
								if (!this.y) for (; this.n.length; ) this.n.pop()?.();
							})
						);
					}
					async flush(c) {
						if (!(this.c === r.Closed || this.m)) return this.C(c);
					}
					async C(c) {
						return this.r.hint === d.STORAGE_IN_MEMORY
							? this.z()
							: this.g.trigger(() => this.z(), c);
					}
					async whenFlushed() {
						if (this.y) return new Promise((c) => this.n.push(c));
					}
					isInMemory() {
						return this.r.hint === d.STORAGE_IN_MEMORY;
					}
				}
				e.$hq = u;
				class a {
					constructor() {
						(this.onDidChangeItemsExternal = i.Event.None),
							(this.a = new Map());
					}
					async getItems() {
						return this.a;
					}
					async cursorDiskKVGet(c) {}
					async cursorDiskKVSet(c, n) {}
					async updateItems(c) {
						c.insert?.forEach((n, g) => this.a.set(g, n)),
							c.delete?.forEach((n) => this.a.delete(n));
					}
					async optimize() {}
					async close() {}
				}
				e.$iq = a;
			},
		),
		
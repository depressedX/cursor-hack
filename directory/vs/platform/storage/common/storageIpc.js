import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
define(de[1639], he([1, 0, 6, 3]), function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$9wc = e.$8wc = e.$7wc = e.$6wc = void 0),
				(e.$4wc = w),
				(e.$5wc = E);
			function w(h) {
				return (
					typeof h == "object" &&
					h !== null &&
					"key" in h &&
					typeof h.key == "string"
				);
			}
			function E(h) {
				return (
					typeof h == "object" &&
					h !== null &&
					"key" in h &&
					typeof h.key == "string" &&
					"value" in h &&
					typeof h.value == "string"
				);
			}
			class C extends i.$1c {
				constructor(c, n, g) {
					super(), (this.a = c), (this.b = n), (this.c = g);
				}
				async getItems() {
					const c = { profile: this.b, workspace: this.c },
						n = await this.a.call("getItems", c);
					return new Map(n);
				}
				async cursorDiskKVGet(c) {
					const n = { profile: this.b, workspace: this.c, key: c };
					return this.a.call("cursorDiskKVGet", n);
				}
				async cursorDiskKVSet(c, n) {
					const g = { profile: this.b, workspace: this.c, key: c, value: n };
					return this.a.call("cursorDiskKVSet", g);
				}
				updateItems(c) {
					const n = { profile: this.b, workspace: this.c };
					return (
						c.insert && (n.insert = Array.from(c.insert.entries())),
						c.delete && (n.delete = Array.from(c.delete.values())),
						this.a.call("updateItems", n)
					);
				}
				optimize() {
					const c = { profile: this.b, workspace: this.c };
					return this.a.call("optimize", c);
				}
			}
			class d extends C {
				constructor(c, n) {
					super(c, n, void 0),
						(this.f = this.D(new t.$re())),
						(this.onDidChangeItemsExternal = this.f.event),
						this.g();
				}
				g() {
					this.D(
						this.a.listen("onDidChangeStorage", { profile: this.b })((c) =>
							this.h(c),
						),
					);
				}
				h(c) {
					(Array.isArray(c.changed) || Array.isArray(c.deleted)) &&
						this.f.fire({
							changed: c.changed ? new Map(c.changed) : void 0,
							deleted: c.deleted ? new Set(c.deleted) : void 0,
						});
				}
			}
			class m extends d {
				constructor(c) {
					super(c, void 0);
				}
				async close() {
					this.dispose();
				}
			}
			e.$6wc = m;
			class r extends d {
				constructor(c, n) {
					super(c, n);
				}
				async close() {
					this.dispose();
				}
			}
			e.$7wc = r;
			class u extends C {
				constructor(c, n) {
					super(c, void 0, n), (this.onDidChangeItemsExternal = t.Event.None);
				}
				async close() {
					this.dispose();
				}
			}
			e.$8wc = u;
			class a {
				constructor(c) {
					this.a = c;
				}
				isUsed(c) {
					const n = { payload: c, profile: void 0, workspace: void 0 };
					return this.a.call("isUsed", n);
				}
			}
			e.$9wc = a;
		}),
		
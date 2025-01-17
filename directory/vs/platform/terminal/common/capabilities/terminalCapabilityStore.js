import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
define(de[675], he([1, 0, 6, 3]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$LHb = e.$KHb = void 0);
			class w extends i.$1c {
				constructor() {
					super(...arguments),
						(this.a = new Map()),
						(this.b = this.D(new t.$re())),
						(this.onDidRemoveCapabilityType = this.b.event),
						(this.f = this.D(new t.$re())),
						(this.onDidAddCapabilityType = this.f.event),
						(this.g = this.D(new t.$re())),
						(this.onDidRemoveCapability = this.g.event),
						(this.h = this.D(new t.$re())),
						(this.onDidAddCapability = this.h.event);
				}
				get items() {
					return this.a.keys();
				}
				add(d, m) {
					this.a.set(d, m),
						this.f.fire(d),
						this.h.fire({ id: d, capability: m });
				}
				get(d) {
					return this.a.get(d);
				}
				remove(d) {
					const m = this.a.get(d);
					m &&
						(this.a.delete(d),
						this.b.fire(d),
						this.h.fire({ id: d, capability: m }));
				}
				has(d) {
					return this.a.has(d);
				}
			}
			e.$KHb = w;
			class E extends i.$1c {
				constructor() {
					super(...arguments),
						(this._stores = []),
						(this.a = this.D(new t.$re())),
						(this.onDidRemoveCapabilityType = this.a.event),
						(this.b = this.D(new t.$re())),
						(this.onDidAddCapabilityType = this.b.event),
						(this.f = this.D(new t.$re())),
						(this.onDidRemoveCapability = this.f.event),
						(this.g = this.D(new t.$re())),
						(this.onDidAddCapability = this.g.event);
				}
				get items() {
					return this.h();
				}
				*h() {
					for (const d of this._stores) for (const m of d.items) yield m;
				}
				has(d) {
					for (const m of this._stores)
						for (const r of m.items) if (r === d) return !0;
					return !1;
				}
				get(d) {
					for (const m of this._stores) {
						const r = m.get(d);
						if (r) return r;
					}
				}
				add(d) {
					this._stores.push(d);
					for (const m of d.items)
						this.b.fire(m), this.g.fire({ id: m, capability: d.get(m) });
					this.D(d.onDidAddCapabilityType((m) => this.b.fire(m))),
						this.D(d.onDidAddCapability((m) => this.g.fire(m))),
						this.D(d.onDidRemoveCapabilityType((m) => this.a.fire(m))),
						this.D(d.onDidRemoveCapability((m) => this.f.fire(m)));
				}
			}
			e.$LHb = E;
		}),
		
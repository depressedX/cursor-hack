import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import './capabilities.js';
define(de[2821], he([1, 0, 6, 3, 189]), function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*capabilities*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$QHb = void 0);
			class E extends i.$1c {
				constructor(d) {
					super(),
						(this.f = d),
						(this.type = w.TerminalCapability.BufferMarkDetection),
						(this.a = new Map()),
						(this.b = new Map()),
						(this.c = this.D(new t.$re())),
						(this.onMarkAdded = this.c.event);
				}
				*markers() {
					for (const d of this.a.values()) yield d;
					for (const d of this.b.values()) yield d;
				}
				addMark(d) {
					const m = d?.marker || this.f.registerMarker(),
						r = d?.id;
					m &&
						(r
							? (this.a.set(r, m), m.onDispose(() => this.a.delete(r)))
							: (this.b.set(m.id, m), m.onDispose(() => this.b.delete(m.id))),
						this.c.fire({
							marker: m,
							id: r,
							hidden: d?.hidden,
							hoverMessage: d?.hoverMessage,
						}));
				}
				getMark(d) {
					return this.a.get(d);
				}
			}
			e.$QHb = E;
		})

import '../../../require.js';
import '../../../exports.js';
import './is-message.js';
define(de[2042], he([1, 0, 524]), function (ce /*require*/,
 e /*exports*/,
 t /*is-message*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.toPlainMessage = i);
			function i(E) {
				if (!(0, t.isMessage)(E)) return E;
				const C = E.getType(),
					d = {};
				for (const m of C.fields.byMember()) {
					const r = E[m.localName];
					let u;
					if (m.repeated) u = r.map((a) => w(a));
					else if (m.kind == "map") {
						u = {};
						for (const [a, h] of Object.entries(r)) u[a] = w(h);
					} else
						m.kind == "oneof"
							? (u = m.findField(r.case)
									? { case: r.case, value: w(r.value) }
									: { case: void 0 })
							: (u = w(r));
					d[m.localName] = u;
				}
				return d;
			}
			function w(E) {
				if (E === void 0) return E;
				if ((0, t.isMessage)(E)) return i(E);
				if (E instanceof Uint8Array) {
					const C = new Uint8Array(E.byteLength);
					return C.set(E), C;
				}
				return E;
			}
		});
	var Yi =
		(this && this.__exportStar) ||
		function (ce, e) {
			for (var t in ce)
				t !== "default" &&
					!Object.prototype.hasOwnProperty.call(e, t) &&
					Ns(e, ce, t);
		};
	
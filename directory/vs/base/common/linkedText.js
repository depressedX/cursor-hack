import '../../../require.js';
import '../../../exports.js';
import './decorators.js';
define(de[488], he([1, 0, 138]), function (ce /*require*/,
 e /*exports*/,
 t /*decorators*/) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.$Ypb = void 0),
			(e.$Zpb = E);
		class i {
			constructor(d) {
				this.nodes = d;
			}
			toString() {
				return this.nodes
					.map((d) => (typeof d == "string" ? d : d.label))
					.join("");
			}
		}
		(e.$Ypb = i), Ne([t.$ei], i.prototype, "toString", null);
		const w =
			/\[([^\]]+)\]\(((?:https?:\/\/|command:|file:)[^\)\s]+)(?: (["'])(.+?)(\3))?\)/gi;
		function E(C) {
			const d = [];
			let m = 0,
				r;
			for (; (r = w.exec(C)); ) {
				r.index - m > 0 && d.push(C.substring(m, r.index));
				const [, u, a, , h] = r;
				h
					? d.push({ label: u, href: a, title: h })
					: d.push({ label: u, href: a }),
					(m = r.index + r[0].length);
			}
			return m < C.length && d.push(C.substring(m)), new i(d);
		}
	})

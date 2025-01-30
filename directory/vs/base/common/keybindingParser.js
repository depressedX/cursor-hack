import '../../../require.js';
import '../../../exports.js';
import './keyCodes.js';
import './keybindings.js';
define(de[918], he([1, 0, 27, 343]), function (ce /*require*/,
 e /*exports*/,
 t /*keyCodes*/,
 i /*keybindings*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Xpb = void 0);
			class w {
				static a(C) {
					C = C.toLowerCase().trim();
					let d = !1,
						m = !1,
						r = !1,
						u = !1,
						a;
					do
						(a = !1),
							/^ctrl(\+|\-)/.test(C) && ((d = !0), (C = C.substr(5)), (a = !0)),
							/^shift(\+|\-)/.test(C) &&
								((m = !0), (C = C.substr(6)), (a = !0)),
							/^alt(\+|\-)/.test(C) && ((r = !0), (C = C.substr(4)), (a = !0)),
							/^meta(\+|\-)/.test(C) && ((u = !0), (C = C.substr(5)), (a = !0)),
							/^win(\+|\-)/.test(C) && ((u = !0), (C = C.substr(4)), (a = !0)),
							/^cmd(\+|\-)/.test(C) && ((u = !0), (C = C.substr(4)), (a = !0));
					while (a);
					let h;
					const c = C.indexOf(" ");
					return (
						c > 0
							? ((h = C.substring(0, c)), (C = C.substring(c)))
							: ((h = C), (C = "")),
						{ remains: C, ctrl: d, shift: m, alt: r, meta: u, key: h }
					);
				}
				static b(C) {
					const d = this.a(C),
						m = d.key.match(/^\[([^\]]+)\]$/);
					if (m) {
						const u = m[1],
							a = t.$ls.lowerCaseToEnum(u);
						return [new i.$us(d.ctrl, d.shift, d.alt, d.meta, a), d.remains];
					}
					const r = t.KeyCodeUtils.fromUserSettings(d.key);
					return [new i.$ts(d.ctrl, d.shift, d.alt, d.meta, r), d.remains];
				}
				static parseKeybinding(C) {
					if (!C) return null;
					const d = [];
					let m;
					for (; C.length > 0; ) ([m, C] = this.b(C)), d.push(m);
					return d.length > 0 ? new i.$vs(d) : null;
				}
			}
			e.$Xpb = w;
		}),
		
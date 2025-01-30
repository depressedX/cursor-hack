import '../../../../require.js';
import '../../../../exports.js';
define(de[1526], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$xvb = void 0);
			class t {
				static {
					this.Empty = new t(0, 0, 0, 0);
				}
				constructor(w, E, C, d) {
					(this._rgba8Brand = void 0),
						(this.r = t._clamp(w)),
						(this.g = t._clamp(E)),
						(this.b = t._clamp(C)),
						(this.a = t._clamp(d));
				}
				equals(w) {
					return (
						this.r === w.r && this.g === w.g && this.b === w.b && this.a === w.a
					);
				}
				static _clamp(w) {
					return w < 0 ? 0 : w > 255 ? 255 : w | 0;
				}
			}
			e.$xvb = t;
		}),
		
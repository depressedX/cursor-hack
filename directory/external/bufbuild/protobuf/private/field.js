import '../../../../require.js';
import '../../../../exports.js';
import './names.js';
import './assert.js';
define(de[2029], he([1, 0, 723, 451]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.InternalOneofInfo = void 0);
			class w {
				constructor(C) {
					(this.kind = "oneof"),
						(this.repeated = !1),
						(this.packed = !1),
						(this.opt = !1),
						(this.req = !1),
						(this.default = void 0),
						(this.fields = []),
						(this.name = C),
						(this.localName = (0, t.localOneofName)(C));
				}
				addField(C) {
					(0, i.assert)(
						C.oneof === this,
						`field ${C.name} not one of ${this.name}`,
					),
						this.fields.push(C);
				}
				findField(C) {
					if (!this._lookup) {
						this._lookup = Object.create(null);
						for (let d = 0; d < this.fields.length; d++)
							this._lookup[this.fields[d].localName] = this.fields[d];
					}
					return this._lookup[C];
				}
			}
			e.InternalOneofInfo = w;
		}),
		
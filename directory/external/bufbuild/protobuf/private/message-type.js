import '../../../../require.js';
import '../../../../exports.js';
import '../message.js';
define(de[2028], he([1, 0, 339]), function (ce /*require*/,
 e /*exports*/,
 t /*message*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.makeMessageType = i);
			function i(w, E, C, d) {
				const m = d?.localName ?? E.substring(E.lastIndexOf(".") + 1),
					r = {
						[m]: function (u) {
							w.util.initFields(this), w.util.initPartial(u, this);
						},
					}[m];
				return (
					Object.setPrototypeOf(r.prototype, new t.Message()),
					Object.assign(r, {
						runtime: w,
						typeName: E,
						fields: w.util.newFieldList(C),
						fromBinary(u, a) {
							return new r().fromBinary(u, a);
						},
						fromJson(u, a) {
							return new r().fromJson(u, a);
						},
						fromJsonString(u, a) {
							return new r().fromJsonString(u, a);
						},
						equals(u, a) {
							return w.util.equals(r, u, a);
						},
					}),
					r
				);
			}
		})

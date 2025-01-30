import '../../../require.js';
import '../../../exports.js';
import './message.js';
define(de[524], he([1, 0, 339]), function (ce /*require*/,
 e /*exports*/,
 t /*message*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.isMessage = i);
			function i(w, E) {
				if (
					w === null ||
					typeof w != "object" ||
					!Object.getOwnPropertyNames(t.Message.prototype).every(
						(d) => d in w && typeof w[d] == "function",
					)
				)
					return !1;
				const C = w.getType();
				return C === null ||
					typeof C != "function" ||
					!("typeName" in C) ||
					typeof C.typeName != "string"
					? !1
					: E === void 0
						? !0
						: C.typeName == E.typeName;
			}
		}),
		
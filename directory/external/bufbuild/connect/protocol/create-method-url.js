define(de[871], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.createMethodUrl = t);
			function t(i, w, E) {
				const C = typeof w == "string" ? w : w.typeName,
					d = typeof E == "string" ? E : E.name;
				return i.toString().replace(/\/?$/, `/${C}/${d}`);
			}
		}),
		
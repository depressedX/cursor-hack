define(de[423], he([1, 0, 5]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$_Qb = e.JSONEditingErrorCode = e.$$Qb = void 0),
				(e.$$Qb = (0, t.$Mi)("jsonEditingService"));
			var i;
			(function (E) {
				E[(E.ERROR_INVALID_FILE = 0)] = "ERROR_INVALID_FILE";
			})(i || (e.JSONEditingErrorCode = i = {}));
			class w extends Error {
				constructor(C, d) {
					super(C), (this.code = d);
				}
			}
			e.$_Qb = w;
		}),
		
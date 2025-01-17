import '../../../require.js';
import '../../../exports.js';
define(de[1092], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.SentryError = void 0);
			class t extends Error {
				constructor(w, E = "warn") {
					super(w),
						(this.message = w),
						(this.name = new.target.prototype.constructor.name),
						Object.setPrototypeOf(this, new.target.prototype),
						(this.logLevel = E);
				}
			}
			e.SentryError = t;
		}),
		
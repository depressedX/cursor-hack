import '../../../../require.js';
import '../../../../exports.js';
import '../code.js';
import '../connect-error.js';
define(de[2015], he([1, 0, 202, 213]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.parseTimeout = w);
			function w(E, C) {
				if (E === null) return {};
				const d = /^\d{1,10}$/.exec(E);
				if (d === null)
					return {
						error: new i.ConnectError(
							`protocol error: invalid connect timeout value: ${E}`,
							t.Code.InvalidArgument,
						),
					};
				const m = parseInt(d[0]);
				return m > C
					? {
							timeoutMs: m,
							error: new i.ConnectError(
								`timeout ${m}ms must be <= ${C}`,
								t.Code.InvalidArgument,
							),
						}
					: { timeoutMs: parseInt(d[0]) };
			}
		}),
		
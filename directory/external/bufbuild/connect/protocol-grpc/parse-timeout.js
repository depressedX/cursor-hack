define(de[1392], he([1, 0, 202, 213]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.parseTimeout = w);
			function w(E, C) {
				if (E === null) return {};
				const d = /^(\d{1,8})([HMSmun])$/.exec(E);
				if (d === null)
					return {
						error: new i.ConnectError(
							`protocol error: invalid grpc timeout value: ${E}`,
							t.Code.InvalidArgument,
						),
					};
				const r =
					{ H: 60 * 60 * 1e3, M: 60 * 1e3, S: 1e3, m: 1, u: 0.001, n: 1e-6 }[
						d[2]
					] * parseInt(d[1]);
				return r > C
					? {
							timeoutMs: r,
							error: new i.ConnectError(
								`timeout ${r}ms must be <= ${C}`,
								t.Code.InvalidArgument,
							),
						}
					: { timeoutMs: r };
			}
		}),
		
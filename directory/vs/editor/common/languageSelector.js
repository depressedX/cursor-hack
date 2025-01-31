import '../../../require.js';
import '../../../exports.js';
import '../../base/common/glob.js';
import '../../base/common/path.js';
define(de[933], he([1, 0, 215, 54]), function (ce /*require*/,
 e /*exports*/,
 t /*glob*/,
 i /*path*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$3L = w),
				(e.$4L = E);
			function w(C, d, m, r, u, a) {
				if (Array.isArray(C)) {
					let h = 0;
					for (const c of C) {
						const n = w(c, d, m, r, u, a);
						if (n === 10) return n;
						n > h && (h = n);
					}
					return h;
				} else {
					if (typeof C == "string")
						return r ? (C === "*" ? 5 : C === m ? 10 : 0) : 0;
					if (C) {
						const {
							language: h,
							pattern: c,
							scheme: n,
							hasAccessToAllModels: g,
							notebookType: p,
						} = C;
						if (!r && !g) return 0;
						p && u && (d = u);
						let o = 0;
						if (n)
							if (n === d.scheme) o = 10;
							else if (n === "*") o = 5;
							else return 0;
						if (h)
							if (h === m) o = 10;
							else if (h === "*") o = Math.max(o, 5);
							else return 0;
						if (p)
							if (p === a) o = 10;
							else if (p === "*" && a !== void 0) o = Math.max(o, 5);
							else return 0;
						if (c) {
							let f;
							if (
								(typeof c == "string"
									? (f = c)
									: (f = { ...c, base: (0, i.$mc)(c.base) }),
								f === d.fsPath || (0, t.$Ik)(f, d.fsPath))
							)
								o = 10;
							else return 0;
						}
						return o;
					} else return 0;
				}
			}
			function E(C) {
				return typeof C == "string"
					? !1
					: Array.isArray(C)
						? C.some(E)
						: !!C.notebookType;
			}
		})

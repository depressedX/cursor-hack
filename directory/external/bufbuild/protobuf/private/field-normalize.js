import '../../../../require.js';
import '../../../../exports.js';
import './field.js';
import './names.js';
import '../scalar.js';
define(de[1397], he([1, 0, 2029, 723, 429]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.normalizeFieldInfos = E);
			function E(C, d) {
				const m = [];
				let r;
				for (const u of typeof C == "function" ? C() : C) {
					const a = u;
					if (
						((a.localName = (0, i.localFieldName)(u.name, u.oneof !== void 0)),
						(a.jsonName = u.jsonName ?? (0, i.fieldJsonName)(u.name)),
						(a.repeated = u.repeated ?? !1),
						u.kind == "scalar" && (a.L = u.L ?? w.LongType.BIGINT),
						(a.delimited = u.delimited ?? !1),
						(a.req = u.req ?? !1),
						(a.opt = u.opt ?? !1),
						u.packed === void 0 &&
							(d
								? (a.packed =
										u.kind == "enum" ||
										(u.kind == "scalar" &&
											u.T != w.ScalarType.BYTES &&
											u.T != w.ScalarType.STRING))
								: (a.packed = !1)),
						u.oneof !== void 0)
					) {
						const h = typeof u.oneof == "string" ? u.oneof : u.oneof.name;
						(!r || r.name != h) && (r = new t.InternalOneofInfo(h)),
							(a.oneof = r),
							r.addField(a);
					}
					m.push(a);
				}
				return m;
			}
		}),
		
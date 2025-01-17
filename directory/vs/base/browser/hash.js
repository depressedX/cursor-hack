import '../../../require.js';
import '../../../exports.js';
import '../common/buffer.js';
import '../common/hash.js';
define(de[530], he([1, 0, 76, 136]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$ojb = w),
				(e.$pjb = E);
			async function w(C) {
				if (globalThis?.crypto?.subtle) {
					const d = t.$Te.fromString(C, { dontUseNodeBuffer: !0 }).buffer,
						m = await globalThis.crypto.subtle.digest({ name: "sha-1" }, d);
					return (0, i.$Fj)(m);
				} else {
					const d = new i.$Gj();
					return d.update(C), d.digest();
				}
			}
			async function E(C) {
				const m = new TextEncoder().encode(C),
					r = await crypto.subtle.digest("SHA-256", m);
				return (0, i.$Fj)(r);
			}
		}),
		
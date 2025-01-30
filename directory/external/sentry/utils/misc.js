import '../../../require.js';
import '../../../exports.js';
import './object.js';
import './string.js';
import './worldwide.js';
define(de[727], he([1, 0, 528, 881, 365]), function (ce /*require*/,
 e /*exports*/,
 t /*object*/,
 i /*string*/,
 w /*worldwide*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.uuid4 = E),
				(e.getEventDescription = d),
				(e.addExceptionTypeValue = m),
				(e.addExceptionMechanism = r),
				(e.parseSemver = h),
				(e.addContextToFrame = c),
				(e.checkOrSetAlreadyCaught = n),
				(e.arrayify = g);
			function E() {
				const p = w.GLOBAL_OBJ,
					o = p.crypto || p.msCrypto;
				let f = () => Math.random() * 16;
				try {
					if (o && o.randomUUID) return o.randomUUID().replace(/-/g, "");
					o &&
						o.getRandomValues &&
						(f = () => {
							const b = new Uint8Array(1);
							return o.getRandomValues(b), b[0];
						});
				} catch {}
				return ("10000000100040008000" + 1e11).replace(/[018]/g, (b) =>
					(b ^ ((f() & 15) >> (b / 4))).toString(16),
				);
			}
			function C(p) {
				return p.exception && p.exception.values
					? p.exception.values[0]
					: void 0;
			}
			function d(p) {
				const { message: o, event_id: f } = p;
				if (o) return o;
				const b = C(p);
				return b
					? b.type && b.value
						? `${b.type}: ${b.value}`
						: b.type || b.value || f || "<unknown>"
					: f || "<unknown>";
			}
			function m(p, o, f) {
				const b = (p.exception = p.exception || {}),
					s = (b.values = b.values || []),
					l = (s[0] = s[0] || {});
				l.value || (l.value = o || ""), l.type || (l.type = f || "Error");
			}
			function r(p, o) {
				const f = C(p);
				if (!f) return;
				const b = { type: "generic", handled: !0 },
					s = f.mechanism;
				if (((f.mechanism = { ...b, ...s, ...o }), o && "data" in o)) {
					const l = { ...(s && s.data), ...o.data };
					f.mechanism.data = l;
				}
			}
			const u =
				/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
			function a(p) {
				return parseInt(p || "", 10);
			}
			function h(p) {
				const o = p.match(u) || [],
					f = a(o[1]),
					b = a(o[2]),
					s = a(o[3]);
				return {
					buildmetadata: o[5],
					major: isNaN(f) ? void 0 : f,
					minor: isNaN(b) ? void 0 : b,
					patch: isNaN(s) ? void 0 : s,
					prerelease: o[4],
				};
			}
			function c(p, o, f = 5) {
				if (o.lineno === void 0) return;
				const b = p.length,
					s = Math.max(Math.min(b - 1, o.lineno - 1), 0);
				o.pre_context = p
					.slice(Math.max(0, s - f), s)
					.map((y) => (0, i.snipLine)(y, 0));
				const l = Math.min(b - 1, s);
				(o.context_line = (0, i.snipLine)(p[l], o.colno || 0)),
					(o.post_context = p
						.slice(Math.min(s + 1, b), s + 1 + f)
						.map((y) => (0, i.snipLine)(y, 0)));
			}
			function n(p) {
				if (p && p.__sentry_captured__) return !0;
				try {
					(0, t.addNonEnumerableProperty)(p, "__sentry_captured__", !0);
				} catch {}
				return !1;
			}
			function g(p) {
				return Array.isArray(p) ? p : [p];
			}
		}),
		
import '../../../../require.js';
import '../../../../exports.js';
import '../../core/index.js';
import '../../utils/index.js';
define(de[2134], he([1, 0, 144, 80]), function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*index*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.contextLinesIntegration = void 0),
				(e.applySourceContextToFrame = r);
			const w = i.GLOBAL_OBJ,
				E = 7,
				C = "ContextLines",
				d = (u = {}) => {
					const a = u.frameContextLines != null ? u.frameContextLines : E;
					return {
						name: C,
						processEvent(h) {
							return m(h, a);
						},
					};
				};
			e.contextLinesIntegration = (0, t.defineIntegration)(d);
			function m(u, a) {
				const h = w.document,
					c = w.location && (0, i.stripUrlQueryAndFragment)(w.location.href);
				if (!h || !c) return u;
				const n = u.exception && u.exception.values;
				if (!n || !n.length) return u;
				const g = h.documentElement.innerHTML;
				if (!g) return u;
				const p = [
					"<!DOCTYPE html>",
					"<html>",
					...g.split(`
`),
					"</html>",
				];
				return (
					n.forEach((o) => {
						const f = o.stacktrace;
						f && f.frames && (f.frames = f.frames.map((b) => r(b, p, c, a)));
					}),
					u
				);
			}
			function r(u, a, h, c) {
				return (
					u.filename !== h ||
						!u.lineno ||
						!a.length ||
						(0, i.addContextToFrame)(a, u, c),
					u
				);
			}
		})

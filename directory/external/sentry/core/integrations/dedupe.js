import '../../../../require.js';
import '../../../../exports.js';
import '../../utils/index.js';
import '../integration.js';
import '../debug-build.js';
define(de[2107], he([1, 0, 80, 316, 263]), function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*integration*/,
 w /*debug-build*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.dedupeIntegration = void 0),
				(e._shouldDropEvent = d);
			const E = "Dedupe",
				C = () => {
					let c;
					return {
						name: E,
						processEvent(n) {
							if (n.type) return n;
							try {
								if (d(n, c))
									return (
										w.DEBUG_BUILD &&
											t.logger.warn(
												"Event dropped due to being a duplicate of previously captured event.",
											),
										null
									);
							} catch {}
							return (c = n);
						},
					};
				};
			e.dedupeIntegration = (0, i.defineIntegration)(C);
			function d(c, n) {
				return n ? !!(m(c, n) || r(c, n)) : !1;
			}
			function m(c, n) {
				const g = c.message,
					p = n.message;
				return !(
					(!g && !p) ||
					(g && !p) ||
					(!g && p) ||
					g !== p ||
					!a(c, n) ||
					!u(c, n)
				);
			}
			function r(c, n) {
				const g = h(n),
					p = h(c);
				return !(
					!g ||
					!p ||
					g.type !== p.type ||
					g.value !== p.value ||
					!a(c, n) ||
					!u(c, n)
				);
			}
			function u(c, n) {
				let g = (0, t.getFramesFromEvent)(c),
					p = (0, t.getFramesFromEvent)(n);
				if (!g && !p) return !0;
				if ((g && !p) || (!g && p) || ((g = g), (p = p), p.length !== g.length))
					return !1;
				for (let o = 0; o < p.length; o++) {
					const f = p[o],
						b = g[o];
					if (
						f.filename !== b.filename ||
						f.lineno !== b.lineno ||
						f.colno !== b.colno ||
						f.function !== b.function
					)
						return !1;
				}
				return !0;
			}
			function a(c, n) {
				let g = c.fingerprint,
					p = n.fingerprint;
				if (!g && !p) return !0;
				if ((g && !p) || (!g && p)) return !1;
				(g = g), (p = p);
				try {
					return g.join("") === p.join("");
				} catch {
					return !1;
				}
			}
			function h(c) {
				return c.exception && c.exception.values && c.exception.values[0];
			}
		}),
		
import '../../../../require.js';
import '../../../../exports.js';
import '../../utils/index.js';
import '../integration.js';
define(de[2114], he([1, 0, 80, 316]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.rewriteFramesIntegration = void 0),
				(e.generateIteratee = E);
			const w = "RewriteFrames";
			e.rewriteFramesIntegration = (0, i.defineIntegration)((C = {}) => {
				const d = C.root,
					m = C.prefix || "app:///",
					r = "window" in t.GLOBAL_OBJ && t.GLOBAL_OBJ.window !== void 0,
					u = C.iteratee || E({ isBrowser: r, root: d, prefix: m });
				function a(c) {
					try {
						return {
							...c,
							exception: {
								...c.exception,
								values: c.exception.values.map((n) => ({
									...n,
									...(n.stacktrace && { stacktrace: h(n.stacktrace) }),
								})),
							},
						};
					} catch {
						return c;
					}
				}
				function h(c) {
					return { ...c, frames: c && c.frames && c.frames.map((n) => u(n)) };
				}
				return {
					name: w,
					processEvent(c) {
						let n = c;
						return (
							c.exception && Array.isArray(c.exception.values) && (n = a(n)), n
						);
					},
				};
			});
			function E({ isBrowser: C, root: d, prefix: m }) {
				return (r) => {
					if (!r.filename) return r;
					const u =
							/^[a-zA-Z]:\\/.test(r.filename) ||
							(r.filename.includes("\\") && !r.filename.includes("/")),
						a = /^\//.test(r.filename);
					if (C) {
						if (d) {
							const h = r.filename;
							h.indexOf(d) === 0 && (r.filename = h.replace(d, m));
						}
					} else if (u || a) {
						const h = u
								? r.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/")
								: r.filename,
							c = d ? (0, t.relative)(d, h) : (0, t.basename)(h);
						r.filename = `${m}${c}`;
					}
					return r;
				};
			}
		}),
		
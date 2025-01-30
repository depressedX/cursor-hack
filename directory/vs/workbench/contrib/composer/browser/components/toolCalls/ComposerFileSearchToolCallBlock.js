import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/solid/web.js';
import './ComposerSearchToolCallBlock.js';
import '../../../../../../platform/tracing/common/tracing.js';
define(de[4207], he([1, 0, 2, 861, 216]), function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*ComposerSearchToolCallBlock*/,
 w /*tracing*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ComposerFileSearchToolCallBlock = C);
			function E() {
				var d =
						typeof SuppressedError == "function"
							? SuppressedError
							: function (a, h) {
									var c = Error();
									return (
										(c.name = "SuppressedError"),
										(c.error = a),
										(c.suppressed = h),
										c
									);
								},
					m = {},
					r = [];
				function u(a, h) {
					if (h != null) {
						if (Object(h) !== h)
							throw new TypeError(
								"using declarations can only be used with objects, functions, null, or undefined.",
							);
						if (a)
							var c =
								h[Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")];
						if (
							c === void 0 &&
							((c = h[Symbol.dispose || Symbol.for("Symbol.dispose")]), a)
						)
							var n = c;
						if (typeof c != "function")
							throw new TypeError("Object is not disposable.");
						n &&
							(c = function () {
								try {
									n.call(h);
								} catch (g) {
									return Promise.reject(g);
								}
							}),
							r.push({ v: h, d: c, a });
					} else a && r.push({ d: h, a });
					return h;
				}
				return {
					e: m,
					u: u.bind(null, !1),
					a: u.bind(null, !0),
					d: function () {
						var a,
							h = this.e,
							c = 0;
						function n() {
							for (; (a = r.pop()); )
								try {
									if (!a.a && c === 1)
										return (c = 0), r.push(a), Promise.resolve().then(n);
									if (a.d) {
										var p = a.d.call(a.v);
										if (a.a) return (c |= 2), Promise.resolve(p).then(n, g);
									} else c |= 1;
								} catch (o) {
									return g(o);
								}
							if (c === 1)
								return h !== m ? Promise.reject(h) : Promise.resolve();
							if (h !== m) throw h;
						}
						function g(p) {
							return (h = h !== m ? new d(p, h) : p), n();
						}
						return n();
					},
				};
			}
			function C(d) {
				try {
					var m = E();
					const r = m.u((0, w.span)("ComposerFileSearchToolCallBlock"));
					return (0, t.createComponent)(i.ComposerSearchToolCallBlock, {
						get searchContext() {
							return `"${d.query}"`;
						},
						get results() {
							return d.results.map((u) => ({ uri: u.uri, metadata: u }));
						},
						onResultClick: (u) => d.onResultClick(u.uri),
						get maxHeight() {
							return d.maxHeight;
						},
						get isLoading() {
							return d.isLoading;
						},
						formatResult: (u) => ({ description: "" }),
						resultCountText: (u) => `${u} ${u === 1 ? "file" : "files"}`,
						statusText: (u) => (u ? "Searching files..." : "Searched files"),
					});
				} catch (r) {
					m.e = r;
				} finally {
					m.d();
				}
			}
		}),
		
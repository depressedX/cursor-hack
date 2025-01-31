import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import './ComposerSingleFileToolCallBlock.js';
import '../../../../../../platform/tracing/common/tracing.js';
define(de[4292], he([1, 0, 2, 2, 1380, 216]), function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*ComposerSingleFileToolCallBlock*/,
 E /*tracing*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ComposerCreateFileToolCallBlock = d);
			function C() {
				var m =
						typeof SuppressedError == "function"
							? SuppressedError
							: function (h, c) {
									var n = Error();
									return (
										(n.name = "SuppressedError"),
										(n.error = h),
										(n.suppressed = c),
										n
									);
								},
					r = {},
					u = [];
				function a(h, c) {
					if (c != null) {
						if (Object(c) !== c)
							throw new TypeError(
								"using declarations can only be used with objects, functions, null, or undefined.",
							);
						if (h)
							var n =
								c[Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")];
						if (
							n === void 0 &&
							((n = c[Symbol.dispose || Symbol.for("Symbol.dispose")]), h)
						)
							var g = n;
						if (typeof n != "function")
							throw new TypeError("Object is not disposable.");
						g &&
							(n = function () {
								try {
									g.call(c);
								} catch (p) {
									return Promise.reject(p);
								}
							}),
							u.push({ v: c, d: n, a: h });
					} else h && u.push({ d: c, a: h });
					return c;
				}
				return {
					e: r,
					u: a.bind(null, !1),
					a: a.bind(null, !0),
					d: function () {
						var h,
							c = this.e,
							n = 0;
						function g() {
							for (; (h = u.pop()); )
								try {
									if (!h.a && n === 1)
										return (n = 0), u.push(h), Promise.resolve().then(g);
									if (h.d) {
										var o = h.d.call(h.v);
										if (h.a) return (n |= 2), Promise.resolve(o).then(g, p);
									} else n |= 1;
								} catch (f) {
									return p(f);
								}
							if (n === 1)
								return c !== r ? Promise.reject(c) : Promise.resolve();
							if (c !== r) throw c;
						}
						function p(o) {
							return (c = c !== r ? new m(o, c) : o), g();
						}
						return g();
					},
				};
			}
			function d(m) {
				try {
					var r = C();
					const u = r.u((0, E.span)("ComposerCreateFileToolCallBlock"));
					return (0, t.createComponent)(
						w.ComposerSingleFileToolCallBlock,
						(0, i.mergeProps)(m, {
							actionText: "Create file",
							loadingText: "Creating file",
						}),
					);
				} catch (u) {
					r.e = u;
				} finally {
					r.d();
				}
			}
		})

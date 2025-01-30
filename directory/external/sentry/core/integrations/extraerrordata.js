import '../../../../require.js';
import '../../../../exports.js';
import '../../utils/index.js';
import '../integration.js';
import '../debug-build.js';
define(de[2108], he([1, 0, 80, 316, 263]), function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*integration*/,
 w /*debug-build*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.extraErrorDataIntegration = void 0);
			const E = "ExtraErrorData",
				C = (r = {}) => {
					const { depth: u = 3, captureErrorCause: a = !0 } = r;
					return {
						name: E,
						processEvent(h, c, n) {
							const { maxValueLength: g = 250 } = n.getOptions();
							return d(h, c, u, a, g);
						},
					};
				};
			e.extraErrorDataIntegration = (0, i.defineIntegration)(C);
			function d(r, u = {}, a, h, c) {
				if (!u.originalException || !(0, t.isError)(u.originalException))
					return r;
				const n =
						u.originalException.name || u.originalException.constructor.name,
					g = m(u.originalException, h, c);
				if (g) {
					const p = { ...r.contexts },
						o = (0, t.normalize)(g, a);
					return (
						(0, t.isPlainObject)(o) &&
							((0, t.addNonEnumerableProperty)(
								o,
								"__sentry_skip_normalization__",
								!0,
							),
							(p[n] = o)),
						{ ...r, contexts: p }
					);
				}
				return r;
			}
			function m(r, u, a) {
				try {
					const h = [
							"name",
							"message",
							"stack",
							"line",
							"column",
							"fileName",
							"lineNumber",
							"columnNumber",
							"toJSON",
						],
						c = {};
					for (const n of Object.keys(r)) {
						if (h.indexOf(n) !== -1) continue;
						const g = r[n];
						c[n] =
							(0, t.isError)(g) || typeof g == "string"
								? (0, t.truncate)(`${g}`, a)
								: g;
					}
					if (
						(u &&
							r.cause !== void 0 &&
							(c.cause = (0, t.isError)(r.cause)
								? r.cause.toString()
								: r.cause),
						typeof r.toJSON == "function")
					) {
						const n = r.toJSON();
						for (const g of Object.keys(n)) {
							const p = n[g];
							c[g] = (0, t.isError)(p) ? p.toString() : p;
						}
					}
					return c;
				} catch (h) {
					w.DEBUG_BUILD &&
						t.logger.error(
							"Unable to extract extra data from the Error object:",
							h,
						);
				}
				return null;
			}
		}),
		
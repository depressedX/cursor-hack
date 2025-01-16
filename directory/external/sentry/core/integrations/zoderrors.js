define(de[2117], he([1, 0, 80, 316]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.zodErrorsIntegration = void 0),
				(e.applyZodErrorsToEvent = r);
			const w = 10,
				E = "ZodErrors";
			function C(a) {
				return (
					(0, t.isError)(a) && a.name === "ZodError" && Array.isArray(a.errors)
				);
			}
			function d(a) {
				return {
					...a,
					path:
						"path" in a && Array.isArray(a.path) ? a.path.join(".") : void 0,
					keys: "keys" in a ? JSON.stringify(a.keys) : void 0,
					unionErrors:
						"unionErrors" in a ? JSON.stringify(a.unionErrors) : void 0,
				};
			}
			function m(a) {
				const h = new Set();
				for (const n of a.issues) n.path && n.path[0] && h.add(n.path[0]);
				const c = Array.from(h);
				return `Failed to validate keys: ${(0, t.truncate)(c.join(", "), 100)}`;
			}
			function r(a, h, c) {
				return !h.exception ||
					!h.exception.values ||
					!c ||
					!c.originalException ||
					!C(c.originalException) ||
					c.originalException.issues.length === 0
					? h
					: {
							...h,
							exception: {
								...h.exception,
								values: [
									{ ...h.exception.values[0], value: m(c.originalException) },
									...h.exception.values.slice(1),
								],
							},
							extra: {
								...h.extra,
								"zoderror.issues": c.originalException.errors
									.slice(0, a)
									.map(d),
							},
						};
			}
			const u = (a = {}) => {
				const h = a.limit || w;
				return {
					name: E,
					processEvent(c, n) {
						return r(h, c, n);
					},
				};
			};
			e.zodErrorsIntegration = (0, i.defineIntegration)(u);
		}),
		
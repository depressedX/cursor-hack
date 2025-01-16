define(
			de[882],
			he([1, 0, 430, 1422, 528, 725]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.normalize = C),
					(e.normalizeToSize = d),
					(e.normalizeUrlToBase = c);
				function C(n, g = 100, p = 1 / 0) {
					try {
						return m("", n, g, p);
					} catch (o) {
						return { ERROR: `**non-serializable** (${o})` };
					}
				}
				function d(n, g = 3, p = 100 * 1024) {
					const o = C(n, g);
					return h(o) > p ? d(n, g - 1, p) : o;
				}
				function m(n, g, p = 1 / 0, o = 1 / 0, f = (0, i.memoBuilder)()) {
					const [b, s] = f;
					if (
						g == null ||
						["boolean", "string"].includes(typeof g) ||
						(typeof g == "number" && Number.isFinite(g))
					)
						return g;
					const l = r(n, g);
					if (!l.startsWith("[object ")) return l;
					if (g.__sentry_skip_normalization__) return g;
					const y =
						typeof g.__sentry_override_normalization_depth__ == "number"
							? g.__sentry_override_normalization_depth__
							: p;
					if (y === 0) return l.replace("object ", "");
					if (b(g)) return "[Circular ~]";
					const $ = g;
					if ($ && typeof $.toJSON == "function")
						try {
							const T = $.toJSON();
							return m("", T, y - 1, o, f);
						} catch {}
					const v = Array.isArray(g) ? [] : {};
					let S = 0;
					const I = (0, w.convertToPlainObject)(g);
					for (const T in I) {
						if (!Object.prototype.hasOwnProperty.call(I, T)) continue;
						if (S >= o) {
							v[T] = "[MaxProperties ~]";
							break;
						}
						const P = I[T];
						(v[T] = m(T, P, y - 1, o, f)), S++;
					}
					return s(g), v;
				}
				function r(n, g) {
					try {
						if (n === "domain" && g && typeof g == "object" && g._events)
							return "[Domain]";
						if (n === "domainEmitter") return "[DomainEmitter]";
						if (typeof global < "u" && g === global) return "[Global]";
						if (typeof window < "u" && g === window) return "[Window]";
						if (typeof document < "u" && g === document) return "[Document]";
						if ((0, t.isVueViewModel)(g)) return "[VueViewModel]";
						if ((0, t.isSyntheticEvent)(g)) return "[SyntheticEvent]";
						if (typeof g == "number" && !Number.isFinite(g)) return `[${g}]`;
						if (typeof g == "function")
							return `[Function: ${(0, E.getFunctionName)(g)}]`;
						if (typeof g == "symbol") return `[${String(g)}]`;
						if (typeof g == "bigint") return `[BigInt: ${String(g)}]`;
						const p = u(g);
						return /^HTML(\w*)Element$/.test(p)
							? `[HTMLElement: ${p}]`
							: `[object ${p}]`;
					} catch (p) {
						return `**non-serializable** (${p})`;
					}
				}
				function u(n) {
					const g = Object.getPrototypeOf(n);
					return g ? g.constructor.name : "null prototype";
				}
				function a(n) {
					return ~-encodeURI(n).split(/%..|./).length;
				}
				function h(n) {
					return a(JSON.stringify(n));
				}
				function c(n, g) {
					const p = g
						.replace(/\\/g, "/")
						.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
					let o = n;
					try {
						o = decodeURI(n);
					} catch {}
					return o
						.replace(/\\/g, "/")
						.replace(/webpack:\/?/g, "")
						.replace(new RegExp(`(file://)?/*${p}/*`, "ig"), "app:///");
				}
			},
		),
		
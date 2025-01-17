import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/color.js';
import '../../../../base/common/types.js';
define(de[1856], he([1, 0, 4, 97, 28]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$UZ = d),
				(e.$VZ = m),
				(t = mt(t));
			function E(p, ...o) {
				return o.some((f) => p.includes(f));
			}
			function C(p) {
				return p === "" || (0, w.$ug)(p);
			}
			function d(p) {
				const o = Array.isArray(p.type) ? p.type : [p.type],
					f = E(o, "null"),
					b =
						(E(o, "number") || E(o, "integer")) &&
						(o.length === 1 || (o.length === 2 && f)),
					s = h(p),
					l = a(p),
					y = c(p),
					$ = n(p);
				return (v) => {
					if (f && C(v)) return "";
					const S = [];
					if (y) {
						const I = y(v);
						I && S.push(I);
					}
					if ($) {
						const I = $(v);
						I && S.push(I);
					}
					return (
						p.type === "boolean" &&
							v !== !0 &&
							v !== !1 &&
							S.push(t.localize(12590, null)),
						b &&
							(C(v) || typeof v == "boolean" || Array.isArray(v) || isNaN(+v)
								? S.push(t.localize(12591, null))
								: S.push(
										...s.filter((I) => !I.isValid(+v)).map((I) => I.message),
									)),
						p.type === "string" &&
							(p.enum && !(0, w.$mg)(p.enum)
								? S.push(t.localize(12592, null))
								: (0, w.$lg)(v)
									? S.push(
											...l.filter((I) => !I.isValid(v)).map((I) => I.message),
										)
									: S.push(t.localize(12593, null))),
						S.length
							? p.errorMessage
								? [p.errorMessage, ...S].join(" ")
								: S.join(" ")
							: ""
					);
				};
			}
			function m(p, o) {
				if (typeof o > "u") return;
				if (!(Array.isArray(o) ? o : [o]).some((b) => r(p, b)))
					return t.localize(12594, null, JSON.stringify(o));
			}
			function r(p, o) {
				const f = typeof p;
				return o === "boolean"
					? f === "boolean"
					: o === "object"
						? p && !Array.isArray(p) && f === "object"
						: o === "null"
							? p === null
							: o === "array"
								? Array.isArray(p)
								: o === "string"
									? f === "string"
									: o === "number" || o === "integer"
										? f === "number"
										: !0;
			}
			function u(p) {
				try {
					return new RegExp(p, "u");
				} catch {
					try {
						return new RegExp(p);
					} catch {
						return console.error(t.localize(12595, null), p), /.*/;
					}
				}
			}
			function a(p) {
				const o =
					/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
				let f;
				return (
					typeof p.pattern == "string" && (f = u(p.pattern)),
					[
						{
							enabled: p.maxLength !== void 0,
							isValid: (b) => b.length <= p.maxLength,
							message: t.localize(12596, null, p.maxLength),
						},
						{
							enabled: p.minLength !== void 0,
							isValid: (b) => b.length >= p.minLength,
							message: t.localize(12597, null, p.minLength),
						},
						{
							enabled: f !== void 0,
							isValid: (b) => f.test(b),
							message:
								p.patternErrorMessage || t.localize(12598, null, p.pattern),
						},
						{
							enabled: p.format === "color-hex",
							isValid: (b) => i.$UL.Format.CSS.parseHex(b),
							message: t.localize(12599, null),
						},
						{
							enabled: p.format === "uri" || p.format === "uri-reference",
							isValid: (b) => !!b.length,
							message: t.localize(12600, null),
						},
						{
							enabled: p.format === "uri" || p.format === "uri-reference",
							isValid: (b) => o.test(b),
							message: t.localize(12601, null),
						},
						{
							enabled: p.format === "uri",
							isValid: (b) => {
								const s = b.match(o);
								return !!(s && s[2]);
							},
							message: t.localize(12602, null),
						},
						{
							enabled: p.enum !== void 0,
							isValid: (b) => p.enum.includes(b),
							message: t.localize(
								12603,
								null,
								p.enum ? p.enum.map((b) => `"${b}"`).join(", ") : "[]",
							),
						},
					].filter((b) => b.enabled)
				);
			}
			function h(p) {
				const o = Array.isArray(p.type) ? p.type : [p.type],
					f = E(o, "null"),
					b = E(o, "integer") && (o.length === 1 || (o.length === 2 && f));
				if (
					!(
						E(o, "number", "integer") &&
						(o.length === 1 || (o.length === 2 && f))
					)
				)
					return [];
				let l, y;
				return (
					typeof p.exclusiveMaximum == "boolean"
						? (l = p.exclusiveMaximum ? p.maximum : void 0)
						: (l = p.exclusiveMaximum),
					typeof p.exclusiveMinimum == "boolean"
						? (y = p.exclusiveMinimum ? p.minimum : void 0)
						: (y = p.exclusiveMinimum),
					[
						{
							enabled: l !== void 0 && (p.maximum === void 0 || l <= p.maximum),
							isValid: ($) => $ < l,
							message: t.localize(12604, null, l),
						},
						{
							enabled: y !== void 0 && (p.minimum === void 0 || y >= p.minimum),
							isValid: ($) => $ > y,
							message: t.localize(12605, null, y),
						},
						{
							enabled: p.maximum !== void 0 && (l === void 0 || l > p.maximum),
							isValid: ($) => $ <= p.maximum,
							message: t.localize(12606, null, p.maximum),
						},
						{
							enabled: p.minimum !== void 0 && (y === void 0 || y < p.minimum),
							isValid: ($) => $ >= p.minimum,
							message: t.localize(12607, null, p.minimum),
						},
						{
							enabled: p.multipleOf !== void 0,
							isValid: ($) => $ % p.multipleOf === 0,
							message: t.localize(12608, null, p.multipleOf),
						},
						{
							enabled: b,
							isValid: ($) => $ % 1 === 0,
							message: t.localize(12609, null),
						},
					].filter(($) => $.enabled)
				);
			}
			function c(p) {
				if (p.type === "array" && p.items && !Array.isArray(p.items)) {
					const o = p.items;
					if (o && !Array.isArray(o.type)) {
						const f = (b) => "'" + b + "'";
						return (b) => {
							if (!b) return null;
							let s = "";
							if (!Array.isArray(b))
								return (
									(s += t.localize(12610, null)),
									(s += `
`),
									s
								);
							const l = b;
							if (
								(p.uniqueItems &&
									new Set(l).size < l.length &&
									((s += t.localize(12611, null)),
									(s += `
`)),
								p.minItems &&
									l.length < p.minItems &&
									((s += t.localize(12612, null, p.minItems)),
									(s += `
`)),
								p.maxItems &&
									l.length > p.maxItems &&
									((s += t.localize(12613, null, p.maxItems)),
									(s += `
`)),
								o.type === "string")
							) {
								if (!(0, w.$mg)(l))
									return (
										(s += t.localize(12614, null)),
										(s += `
`),
										s
									);
								if (typeof o.pattern == "string") {
									const $ = u(o.pattern);
									l.forEach((v) => {
										$.test(v) ||
											(s +=
												o.patternErrorMessage ||
												t.localize(12615, null, f(v), f(o.pattern)));
									});
								}
								const y = o.enum;
								y &&
									l.forEach(($) => {
										y.indexOf($) === -1 &&
											((s += t.localize(
												12616,
												null,
												f($),
												"[" + y.map(f).join(", ") + "]",
											)),
											(s += `
`));
									});
							} else
								(o.type === "integer" || o.type === "number") &&
									l.forEach((y) => {
										const $ = g(o, y);
										$ &&
											(s += `${y}: ${$}
`);
									});
							return s;
						};
					}
				}
				return null;
			}
			function n(p) {
				if (p.type === "object") {
					const {
						properties: o,
						patternProperties: f,
						additionalProperties: b,
					} = p;
					return (s) => {
						if (!s) return null;
						const l = [];
						return (
							(0, w.$ng)(s)
								? Object.keys(s).forEach((y) => {
										const $ = s[y];
										if (o && y in o) {
											const v = g(o[y], $);
											v &&
												l.push(`${y}: ${v}
`);
											return;
										}
										if (f) {
											for (const v in f)
												if (RegExp(v).test(y)) {
													const S = g(f[v], $);
													S &&
														l.push(`${y}: ${S}
`);
													return;
												}
										}
										if (b === !1) l.push(t.localize(12618, null, y));
										else if (typeof b == "object") {
											const v = g(b, $);
											v &&
												l.push(`${y}: ${v}
`);
										}
									})
								: l.push(t.localize(12617, null)),
							l.length
								? p.errorMessage
									? [p.errorMessage, ...l].join(" ")
									: l.join(" ")
								: ""
						);
					};
				}
				return null;
			}
			function g(p, o) {
				return d(p)(o);
			}
		}),
		
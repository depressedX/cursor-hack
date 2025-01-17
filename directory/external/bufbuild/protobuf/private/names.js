import '../../../../require.js';
import '../../../../exports.js';
define(de[723], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.safeIdentifier = e.safeObjectProperty = e.fieldJsonName = void 0),
				(e.localName = t),
				(e.localFieldName = i),
				(e.localOneofName = w),
				(e.findEnumSharedPrefix = E);
			function t(g) {
				switch (g.kind) {
					case "field":
						return i(g.name, g.oneof !== void 0);
					case "oneof":
						return w(g.name);
					case "enum":
					case "message":
					case "service":
					case "extension": {
						const p = g.file.proto.package,
							o = p === void 0 ? 0 : p.length + 1,
							f = g.typeName.substring(o).replace(/\./g, "_");
						return (0, e.safeObjectProperty)((0, e.safeIdentifier)(f));
					}
					case "enum_value": {
						let p = g.name;
						const o = g.parent.sharedPrefix;
						return (
							o !== void 0 && (p = p.substring(o.length)),
							(0, e.safeObjectProperty)(p)
						);
					}
					case "rpc": {
						let p = g.name;
						return p.length == 0
							? p
							: ((p = p[0].toLowerCase() + p.substring(1)),
								(0, e.safeObjectProperty)(p));
					}
				}
			}
			function i(g, p) {
				const o = d(g);
				return p ? o : (0, e.safeObjectProperty)(h(o));
			}
			function w(g) {
				return i(g, !1);
			}
			e.fieldJsonName = d;
			function E(g, p) {
				const o = C(g) + "_";
				for (const f of p) {
					if (!f.toLowerCase().startsWith(o)) return;
					const b = f.substring(o.length);
					if (b.length == 0 || /^\d/.test(b)) return;
				}
				return o;
			}
			function C(g) {
				return (
					g.substring(0, 1) + g.substring(1).replace(/[A-Z]/g, (p) => "_" + p)
				).toLowerCase();
			}
			function d(g) {
				let p = !1;
				const o = [];
				for (let f = 0; f < g.length; f++) {
					let b = g.charAt(f);
					switch (b) {
						case "_":
							p = !0;
							break;
						case "0":
						case "1":
						case "2":
						case "3":
						case "4":
						case "5":
						case "6":
						case "7":
						case "8":
						case "9":
							o.push(b), (p = !1);
							break;
						default:
							p && ((p = !1), (b = b.toUpperCase())), o.push(b);
							break;
					}
				}
				return o.join("");
			}
			const m = new Set([
					"break",
					"case",
					"catch",
					"class",
					"const",
					"continue",
					"debugger",
					"default",
					"delete",
					"do",
					"else",
					"export",
					"extends",
					"false",
					"finally",
					"for",
					"function",
					"if",
					"import",
					"in",
					"instanceof",
					"new",
					"null",
					"return",
					"super",
					"switch",
					"this",
					"throw",
					"true",
					"try",
					"typeof",
					"var",
					"void",
					"while",
					"with",
					"yield",
					"enum",
					"implements",
					"interface",
					"let",
					"package",
					"private",
					"protected",
					"public",
					"static",
					"Object",
					"bigint",
					"number",
					"boolean",
					"string",
					"object",
					"globalThis",
					"Uint8Array",
					"Partial",
				]),
				r = new Set(["constructor", "toString", "toJSON", "valueOf"]),
				u = new Set([
					"getType",
					"clone",
					"equals",
					"fromBinary",
					"fromJson",
					"fromJsonString",
					"toBinary",
					"toJson",
					"toJsonString",
					"toObject",
				]),
				a = (g) => `${g}$`,
				h = (g) => (u.has(g) ? a(g) : g),
				c = (g) => (r.has(g) ? a(g) : g);
			e.safeObjectProperty = c;
			const n = (g) => (m.has(g) ? a(g) : g);
			e.safeIdentifier = n;
		}),
		
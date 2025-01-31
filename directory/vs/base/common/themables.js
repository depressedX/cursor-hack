import '../../../require.js';
import '../../../exports.js';
import './codicons.js';
define(de[26], he([1, 0, 14]), function (ce /*require*/,
 e /*exports*/,
 t /*codicons*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ThemeIcon = e.ThemeColor = void 0),
				(e.$bk = w);
			var i;
			(function (C) {
				function d(m) {
					return m && typeof m == "object" && typeof m.id == "string";
				}
				C.isThemeColor = d;
			})(i || (e.ThemeColor = i = {}));
			function w(C) {
				return { id: C };
			}
			var E;
			(function (C) {
				(C.iconNameSegment = "[A-Za-z0-9]+"),
					(C.iconNameExpression = "[A-Za-z0-9-]+"),
					(C.iconModifierExpression = "~[A-Za-z]+"),
					(C.iconNameCharacter = "[A-Za-z0-9~-]");
				const d = new RegExp(
					`^(${C.iconNameExpression})(${C.iconModifierExpression})?$`,
				);
				function m(f) {
					const b = d.exec(f.id);
					if (!b) return m(t.$ak.error);
					const [, s, l] = b,
						y = ["codicon", "codicon-" + s];
					return l && y.push("codicon-modifier-" + l.substring(1)), y;
				}
				C.asClassNameArray = m;
				function r(f) {
					return m(f).join(" ");
				}
				C.asClassName = r;
				function u(f) {
					return "." + m(f).join(".");
				}
				C.asCSSSelector = u;
				function a(f) {
					return (
						f &&
						typeof f == "object" &&
						typeof f.id == "string" &&
						(typeof f.color > "u" || i.isThemeColor(f.color))
					);
				}
				C.isThemeIcon = a;
				const h = new RegExp(
					`^\\$\\((${C.iconNameExpression}(?:${C.iconModifierExpression})?)\\)$`,
				);
				function c(f) {
					const b = h.exec(f);
					if (!b) return;
					const [, s] = b;
					return { id: s };
				}
				C.fromString = c;
				function n(f) {
					return { id: f };
				}
				C.fromId = n;
				function g(f, b) {
					let s = f.id;
					const l = s.lastIndexOf("~");
					return (
						l !== -1 && (s = s.substring(0, l)),
						b && (s = `${s}~${b}`),
						{ id: s }
					);
				}
				C.modify = g;
				function p(f) {
					const b = f.id.lastIndexOf("~");
					if (b !== -1) return f.id.substring(b + 1);
				}
				C.getModifier = p;
				function o(f, b) {
					return f.id === b.id && f.color?.id === b.color?.id;
				}
				C.isEqual = o;
			})(E || (e.ThemeIcon = E = {}));
		})

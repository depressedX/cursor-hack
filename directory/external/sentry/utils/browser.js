import '../../../require.js';
import '../../../exports.js';
import './is.js';
import './worldwide.js';
define(de[1429], he([1, 0, 430, 365]), function (ce /*require*/,
 e /*exports*/,
 t /*is*/,
 i /*worldwide*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.htmlTreeAsString = C),
				(e.getLocationHref = m),
				(e.getDomElement = r),
				(e.getComponentName = u);
			const w = i.GLOBAL_OBJ,
				E = 80;
			function C(a, h = {}) {
				if (!a) return "<unknown>";
				try {
					let c = a;
					const n = 5,
						g = [];
					let p = 0,
						o = 0;
					const f = " > ",
						b = f.length;
					let s;
					const l = Array.isArray(h) ? h : h.keyAttrs,
						y = (!Array.isArray(h) && h.maxStringLength) || E;
					for (
						;
						c &&
						p++ < n &&
						((s = d(c, l)),
						!(s === "html" || (p > 1 && o + g.length * b + s.length >= y)));
					)
						g.push(s), (o += s.length), (c = c.parentNode);
					return g.reverse().join(f);
				} catch {
					return "<unknown>";
				}
			}
			function d(a, h) {
				const c = a,
					n = [];
				if (!c || !c.tagName) return "";
				if (w.HTMLElement && c instanceof HTMLElement && c.dataset) {
					if (c.dataset.sentryComponent) return c.dataset.sentryComponent;
					if (c.dataset.sentryElement) return c.dataset.sentryElement;
				}
				n.push(c.tagName.toLowerCase());
				const g =
					h && h.length
						? h
								.filter((o) => c.getAttribute(o))
								.map((o) => [o, c.getAttribute(o)])
						: null;
				if (g && g.length)
					g.forEach((o) => {
						n.push(`[${o[0]}="${o[1]}"]`);
					});
				else {
					c.id && n.push(`#${c.id}`);
					const o = c.className;
					if (o && (0, t.isString)(o)) {
						const f = o.split(/\s+/);
						for (const b of f) n.push(`.${b}`);
					}
				}
				const p = ["aria-label", "type", "name", "title", "alt"];
				for (const o of p) {
					const f = c.getAttribute(o);
					f && n.push(`[${o}="${f}"]`);
				}
				return n.join("");
			}
			function m() {
				try {
					return w.document.location.href;
				} catch {
					return "";
				}
			}
			function r(a) {
				return w.document && w.document.querySelector
					? w.document.querySelector(a)
					: null;
			}
			function u(a) {
				if (!w.HTMLElement) return null;
				let h = a;
				const c = 5;
				for (let n = 0; n < c; n++) {
					if (!h) return null;
					if (h instanceof HTMLElement) {
						if (h.dataset.sentryComponent) return h.dataset.sentryComponent;
						if (h.dataset.sentryElement) return h.dataset.sentryElement;
					}
					h = h.parentNode;
				}
				return null;
			}
		})

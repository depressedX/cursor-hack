import '../../../require.js';
import '../../../exports.js';
import '../lexical/api.js';
import './constants.js';
define(de[1157], he([1, 0, 164, 1413]), function (ce /*require*/,
 e /*exports*/,
 t /*api*/,
 i /*constants*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.getDOMTextNode = w),
				(e.getDOMIndexWithinParent = E),
				(e.createDOMRange = C),
				(e.createRectsFromDOMRange = d),
				(e.getStyleObjectFromRawCSS = m),
				(e.getStyleObjectFromCSS = r),
				(e.getCSSFromStyleObject = u);
			function w(a) {
				let h = a;
				for (; h != null; ) {
					if (h.nodeType === Node.TEXT_NODE) return h;
					h = h.firstChild;
				}
				return null;
			}
			function E(a) {
				const h = a.parentNode;
				if (h == null) throw new Error("Should never happen");
				return [h, Array.from(h.childNodes).indexOf(a)];
			}
			function C(a, h, c, n, g) {
				const p = h.getKey(),
					o = n.getKey(),
					f = document.createRange();
				let b = a.getElementByKey(p),
					s = a.getElementByKey(o),
					l = c,
					y = g;
				if (
					((0, t.$isTextNode)(h) && (b = w(b)),
					(0, t.$isTextNode)(n) && (s = w(s)),
					h === void 0 || n === void 0 || b === null || s === null)
				)
					return null;
				b.nodeName === "BR" && ([b, l] = E(b)),
					s.nodeName === "BR" && ([s, y] = E(s));
				const $ = b.firstChild;
				b === s &&
					$ != null &&
					$.nodeName === "BR" &&
					l === 0 &&
					y === 0 &&
					(y = 1);
				try {
					f.setStart(b, l), f.setEnd(s, y);
				} catch {
					return null;
				}
				return (
					f.collapsed &&
						(l !== y || p !== o) &&
						(f.setStart(s, y), f.setEnd(b, l)),
					f
				);
			}
			function d(a, h) {
				const c = a.getRootElement();
				if (c === null) return [];
				const n = c.getBoundingClientRect(),
					g = getComputedStyle(c),
					p = parseFloat(g.paddingLeft) + parseFloat(g.paddingRight),
					o = Array.from(h.getClientRects());
				let f = o.length;
				o.sort((s, l) => {
					const y = s.top - l.top;
					return Math.abs(y) <= 3 ? s.left - l.left : y;
				});
				let b;
				for (let s = 0; s < f; s++) {
					const l = o[s],
						y =
							b &&
							b.top <= l.top &&
							b.top + b.height > l.top &&
							b.left + b.width > l.left,
						$ = l.width + p === n.width;
					if (y || $) {
						o.splice(s--, 1), f--;
						continue;
					}
					b = l;
				}
				return o;
			}
			function m(a) {
				const h = {},
					c = a.split(";");
				for (const n of c)
					if (n !== "") {
						const [g, p] = n.split(/:([^]+)/);
						h[g.trim()] = p.trim();
					}
				return h;
			}
			function r(a) {
				let h = i.CSS_TO_STYLES.get(a);
				return h === void 0 && ((h = m(a)), i.CSS_TO_STYLES.set(a, h)), h;
			}
			function u(a) {
				let h = "";
				for (const c in a) c && (h += `${c}: ${a[c]};`);
				return h;
			}
		}),
		
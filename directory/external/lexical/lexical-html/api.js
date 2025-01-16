define(de[2594], he([1, 0, 921, 164]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$generateNodesFromDOM = w),
				(e.$generateHtmlFromNodes = E),
				(e.$appendNodesToHTML = C),
				(e.getConversionFunction = d),
				(e.$createNodesFromDOM = r);
			function w(u, a) {
				const h = a.body ? a.body.childNodes : [];
				let c = [];
				for (let n = 0; n < h.length; n++) {
					const g = h[n];
					if (!m.has(g.nodeName)) {
						const p = r(g, u);
						p !== null && (c = c.concat(p));
					}
				}
				return c;
			}
			function E(u, a) {
				if (typeof document > "u" || typeof window > "u")
					throw new Error(
						"To use $generateHtmlFromNodes in headless mode please initialize a headless browser implementation such as JSDom before calling this function.",
					);
				const h = document.createElement("div"),
					n = (0, i.$getRoot)().getChildren();
				for (let g = 0; g < n.length; g++) {
					const p = n[g];
					C(u, p, h, a);
				}
				return h.innerHTML;
			}
			function C(u, a, h, c = null) {
				let n = c != null ? a.isSelected(c) : !0;
				const g = (0, i.$isElementNode)(a) && a.excludeFromCopy("html");
				let p = a;
				if (c !== null) {
					let l = (0, t.$cloneWithProperties)(a);
					(l =
						(0, i.$isTextNode)(l) && c != null
							? (0, t.$sliceSelectedTextNodeContent)(c, l)
							: l),
						(p = l);
				}
				const o = (0, i.$isElementNode)(p) ? p.getChildren() : [],
					{ element: f, after: b } = p.exportDOM(u);
				if (!f) return !1;
				const s = document.createDocumentFragment();
				for (let l = 0; l < o.length; l++) {
					const y = o[l],
						$ = C(u, y, s, c);
					!n &&
						(0, i.$isElementNode)(a) &&
						$ &&
						a.extractWithChild(y, c, "html") &&
						(n = !0);
				}
				if (n && !g) {
					if ((f.append(s), h.append(f), b)) {
						const l = b.call(p, f);
						l && f.replaceWith(l);
					}
				} else h.append(s);
				return n;
			}
			function d(u, a) {
				const { nodeName: h } = u,
					c = a._htmlConversions.get(h.toLowerCase());
				let n = null;
				if (c !== void 0)
					for (const g of c) {
						const p = g(u);
						p !== null && (n === null || n.priority < p.priority) && (n = p);
					}
				return n !== null ? n.conversion : null;
			}
			const m = new Set(["STYLE", "SCRIPT"]);
			function r(u, a, h = new Map(), c) {
				let n = [];
				if (m.has(u.nodeName)) return n;
				let g = null;
				const p = d(u, a),
					o = p ? p(u) : null;
				let f = null;
				if (o !== null) {
					f = o.after;
					const l = o.node;
					if (((g = Array.isArray(l) ? l[l.length - 1] : l), g !== null)) {
						for (const [, y] of h) if (((g = y(g, c)), !g)) break;
						g && n.push(...(Array.isArray(l) ? l : [g]));
					}
					o.forChild != null && h.set(u.nodeName, o.forChild);
				}
				const b = u.childNodes;
				let s = [];
				for (let l = 0; l < b.length; l++) s.push(...r(b[l], a, new Map(h), g));
				return (
					f != null && (s = f(s)),
					g == null
						? (n = n.concat(s))
						: (0, i.$isElementNode)(g) && g.append(...s),
					n
				);
			}
		}),
		
import '../../../../../require.js';
import '../../../../../exports.js';
import './utils.js';
import '../../dom.js';
define(de[926], he([1, 0, 369, 7]), function (ce, e, t, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.$Fkb = e.$Ekb = void 0),
			(e.$Gkb = d),
			(e.$Hkb = m),
			(e.$Ikb = u),
			(e.$Jkb = c);
		const w = [
				"input:not([type='hidden']):not([disabled])",
				"select:not([disabled])",
				"textarea:not([disabled])",
				"button:not([disabled])",
				"a[href]",
				"area[href]",
				"[tabindex]",
				"iframe",
				"object",
				"embed",
				"audio[controls]",
				"video[controls]",
				"[contenteditable]:not([contenteditable='false'])",
			],
			E = [...w, '[tabindex]:not([tabindex="-1"]):not([disabled])'];
		(e.$Ekb =
			w.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])"),
			(e.$Fkb = E.join(':not([hidden]):not([tabindex="-1"]),'));
		function C(n) {
			return n.matches(e.$Ekb) && u(n);
		}
		function d(n, g) {
			const o = Array.from(n.querySelectorAll(e.$Ekb)).filter(m);
			return (
				g && m(n) && o.unshift(n),
				o.forEach((f, b) => {
					if ((0, t.$Sjb)(f) && f.contentDocument) {
						const s = f.contentDocument.body,
							l = d(s, !1);
						o.splice(b, 1, ...l);
					}
				}),
				o
			);
		}
		function m(n) {
			return C(n) && !r(n);
		}
		function r(n) {
			return parseInt(n.getAttribute("tabindex") || "0", 10) < 0;
		}
		function u(n, g) {
			return (
				n.nodeName !== "#comment" &&
				a(n) &&
				h(n, g) &&
				(!n.parentElement || u(n.parentElement, n))
			);
		}
		function a(n) {
			if (!(0, i.$Ygb)(n) && !(n instanceof SVGElement)) return !1;
			const { display: g, visibility: p } = n.style;
			let o = g !== "none" && p !== "hidden" && p !== "collapse";
			if (o) {
				if (!n.ownerDocument.defaultView) return o;
				const { getComputedStyle: f } = n.ownerDocument.defaultView,
					{ display: b, visibility: s } = f(n);
				o = b !== "none" && s !== "hidden" && s !== "collapse";
			}
			return o;
		}
		function h(n, g) {
			return (
				!n.hasAttribute("hidden") &&
				(n.nodeName === "DETAILS" && g && g.nodeName !== "SUMMARY"
					? n.hasAttribute("open")
					: !0)
			);
		}
		function c(n) {
			const g = (0, t.$Pjb)(n);
			if (!g) return !1;
			if ((0, t.$Ojb)(n, g)) return !0;
			{
				const p = g.getAttribute("aria-activedescendant");
				return !p || !("id" in n)
					? !1
					: p === n.id
						? !0
						: !!n.querySelector(`#${CSS.escape(p)}`);
			}
		}
	}); /*!
	 * Portions of this file are based on code from react-spectrum.
	 * Apache License Version 2.0, Copyright 2020 Adobe.
	 *
	 * Credits to the React Spectrum team:
	 * https://github.com/adobe/react-spectrum/blob/f6e686fe9d3b983d48650980c1ecfdde320bc62f/packages/@react-aria/focus/src/FocusScope.tsx
	 */
	
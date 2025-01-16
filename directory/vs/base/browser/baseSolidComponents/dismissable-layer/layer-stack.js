define(de[2628], he([1, 0, 115, 7]), function (ce, e, t, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.$vlb = void 0),
			(i = mt(i));
		let w,
			E = !1;
		const C = [];
		function d(b) {
			return C.findIndex((s) => s.node === b);
		}
		function m(b) {
			return C[d(b)];
		}
		function r(b) {
			return C[C.length - 1].node === b;
		}
		function u() {
			return C.filter((b) => b.isPointerBlocking);
		}
		function a() {
			return [...u()].slice(-1)[0];
		}
		function h() {
			return u().length > 0;
		}
		function c(b) {
			const s = d(a()?.node);
			return d(b) < s;
		}
		function n(b) {
			C.push(b);
		}
		function g(b) {
			const s = d(b);
			s < 0 || C.splice(s, 1);
		}
		function p() {
			C.forEach(({ node: b }) => {
				b.style.pointerEvents = c(b) ? "none" : "auto";
			});
		}
		function o(b) {
			if (h() && !E) {
				const s = (0, t.$Rjb)(b);
				(w = i.$Ngb().body.style.pointerEvents),
					(s.body.style.pointerEvents = "none"),
					(E = !0);
			}
		}
		function f(b) {
			if (h()) return;
			const s = (0, t.$Rjb)(b);
			(s.body.style.pointerEvents = w),
				s.body.style.length === 0 && s.body.removeAttribute("style"),
				(E = !1);
		}
		e.$vlb = {
			layers: C,
			isTopMostLayer: r,
			hasPointerBlockingLayer: h,
			isBelowPointerBlockingLayer: c,
			addLayer: n,
			removeLayer: g,
			indexOf: d,
			find: m,
			assignPointerEventToLayers: p,
			disableBodyPointerEvents: o,
			restoreBodyPointerEvents: f,
		};
	}),
		
define(de[1188], he([1, 0, 27, 5]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Hvc = void 0),
				(e.$Ivc = w),
				(e.$Jvc = E),
				(e.$Kvc = C),
				(e.$Lvc = m),
				(e.$Mvc = u),
				(e.$Hvc = (0, i.$Mi)("keyboardLayoutService"));
			function w(a, h) {
				return !a || !h
					? !1
					: !!(
							(a.name && h.name && a.name === h.name) ||
							(a.id && h.id && a.id === h.id) ||
							(a.model &&
								h.model &&
								a.model === h.model &&
								a.layout === h.layout)
						);
			}
			function E(a) {
				if (!a) return { label: "", description: "" };
				if (a.name) return { label: a.text, description: "" };
				if (a.id) {
					const c = a;
					return c.localizedName
						? { label: c.localizedName, description: "" }
						: /^com\.apple\.keylayout\./.test(c.id)
							? {
									label: c.id
										.replace(/^com\.apple\.keylayout\./, "")
										.replace(/-/, " "),
									description: "",
								}
							: /^.*inputmethod\./.test(c.id)
								? {
										label: c.id
											.replace(/^.*inputmethod\./, "")
											.replace(/[-\.]/, " "),
										description: `Input Method (${c.lang})`,
									}
								: { label: c.lang, description: "" };
				}
				return { label: a.layout, description: "" };
			}
			function C(a) {
				return a.name ? a.name : a.id ? a.id : a.layout;
			}
			function d(a, h) {
				return !a && !h
					? !0
					: !a || !h
						? !1
						: a.vkey === h.vkey &&
							a.value === h.value &&
							a.withShift === h.withShift &&
							a.withAltGr === h.withAltGr &&
							a.withShiftAltGr === h.withShiftAltGr;
			}
			function m(a, h) {
				if (!a && !h) return !0;
				if (!a || !h) return !1;
				for (let c = 0; c < t.ScanCode.MAX_VALUE; c++) {
					const n = t.$ls.toString(c),
						g = a[n],
						p = h[n];
					if (!d(g, p)) return !1;
				}
				return !0;
			}
			function r(a, h) {
				return !a && !h
					? !0
					: !a || !h
						? !1
						: a.value === h.value &&
							a.withShift === h.withShift &&
							a.withAltGr === h.withAltGr &&
							a.withShiftAltGr === h.withShiftAltGr;
			}
			function u(a, h) {
				if (!a && !h) return !0;
				if (!a || !h) return !1;
				for (let c = 0; c < t.ScanCode.MAX_VALUE; c++) {
					const n = t.$ls.toString(c),
						g = a[n],
						p = h[n];
					if (!r(g, p)) return !1;
				}
				return !0;
			}
		}),
		
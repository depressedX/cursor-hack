define(de[2672], he([1, 0, 2, 2, 13, 2670]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$wnb = C);
			function C(d) {
				const [m, r] = (0, w.splitProps)(d, [
						"value",
						"defaultValue",
						"onChange",
						"multiple",
					]),
					u = (0, w.createMemo)(() => {
						if (m.value != null) return m.multiple ? m.value : [m.value];
					}),
					a = (0, w.createMemo)(() => {
						if (m.defaultValue != null)
							return m.multiple ? m.defaultValue : [m.defaultValue];
					}),
					h = (c) => {
						m.onChange?.(m.multiple ? c : c[0]);
					};
				return (0, t.createComponent)(
					E.$nnb,
					(0, i.mergeProps)(
						{
							get value() {
								return u();
							},
							get defaultValue() {
								return a();
							},
							onChange: h,
							get selectionMode() {
								return m.multiple ? "multiple" : "single";
							},
							get disallowEmptySelection() {
								return !m.multiple;
							},
						},
						r,
					),
				);
			}
		}),
		
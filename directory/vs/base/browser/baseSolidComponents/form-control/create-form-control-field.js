define(de[2631], he([1, 0, 115, 13, 737]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$8mb = void 0),
				(e.$9mb = E),
				(e.$8mb = ["id", "aria-label", "aria-labelledby", "aria-describedby"]);
			function E(C) {
				const d = (0, w.$5mb)(),
					m = (0, t.$wjb)({ id: d.generateId("field") }, C);
				return (
					(0, i.createEffect)(() =>
						(0, i.onCleanup)(d.registerField((0, t.access)(m.id))),
					),
					{
						fieldProps: {
							id: () => (0, t.access)(m.id),
							ariaLabel: () => (0, t.access)(m["aria-label"]),
							ariaLabelledBy: () =>
								d.getAriaLabelledBy(
									(0, t.access)(m.id),
									(0, t.access)(m["aria-label"]),
									(0, t.access)(m["aria-labelledby"]),
								),
							ariaDescribedBy: () =>
								d.getAriaDescribedBy((0, t.access)(m["aria-describedby"])),
						},
					}
				);
			}
		}),
		
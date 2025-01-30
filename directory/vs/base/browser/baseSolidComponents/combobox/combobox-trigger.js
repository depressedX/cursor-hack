import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../utils/api.js';
import '../../../../../external/solid/solid.js';
import '../button/api.js';
import '../form-control/api.js';
import './combobox-context.js';
define(
			de[2637],
			he([1, 0, 2, 2, 2, 115, 13, 2626, 593, 486]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*api*/,
 C /*solid*/,
 d /*api*/,
 m /*api*/,
 r /*combobox-context*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$xnb = u),
					(d = mt(d));
				function u(a) {
					const h = (0, m.$5mb)(),
						c = (0, r.$2mb)(),
						n = (0, E.$wjb)({ id: c.generateId("trigger") }, a),
						[g, p] = (0, C.splitProps)(n, [
							"ref",
							"disabled",
							"onPointerDown",
							"onClick",
							"aria-labelledby",
						]),
						o = () =>
							g.disabled || c.isDisabled() || h.isDisabled() || h.isReadOnly(),
						f = (l) => {
							(0, E.$Kkb)(l, g.onPointerDown),
								(l.currentTarget.dataset.pointerType = l.pointerType),
								!o() &&
									l.pointerType !== "touch" &&
									l.button === 0 &&
									(l.preventDefault(), c.toggle(!1, "manual"));
						},
						b = (l) => {
							(0, E.$Kkb)(l, g.onClick),
								o() ||
									(l.currentTarget.dataset.pointerType === "touch" &&
										c.toggle(!1, "manual"),
									c.inputRef()?.focus());
						},
						s = () =>
							h.getAriaLabelledBy(
								p.id,
								c.triggerAriaLabel(),
								g["aria-labelledby"],
							);
					return (0, t.createComponent)(
						d.Root,
						(0, i.mergeProps)(
							{
								ref(l) {
									const y = (0, E.mergeRefs)(c.setTriggerRef, g.ref);
									typeof y == "function" && y(l);
								},
								get disabled() {
									return o();
								},
								tabIndex: "-1",
								"aria-haspopup": "listbox",
								get "aria-expanded"() {
									return c.isOpen();
								},
								get "aria-controls"() {
									return (0, w.memo)(() => !!c.isOpen())()
										? c.listboxId()
										: void 0;
								},
								get "aria-label"() {
									return c.triggerAriaLabel();
								},
								get "aria-labelledby"() {
									return s();
								},
								onPointerDown: f,
								onClick: b,
							},
							() => c.dataset(),
							p,
						),
					);
				}
			},
		),
		
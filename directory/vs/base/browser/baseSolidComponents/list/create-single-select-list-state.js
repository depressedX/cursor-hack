import '../../../../../require.js';
import '../../../../../exports.js';
import '../utils/api.js';
import '../../../../../external/solid/solid.js';
import '../utils/api.js';
import './create-list-state.js';
define(
		de[2649],
		he([1, 0, 115, 13, 115, 1569]),
		function (ce /*require*/,
 e /*exports*/,
 t /*api*/,
 i /*solid*/,
 w /*api*/,
 E /*create-list-state*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Zmb = C);
			function C(d) {
				const [m, r] = (0, w.$okb)({
						value: () => (0, t.access)(d.selectedKey),
						defaultValue: () => (0, t.access)(d.defaultSelectedKey),
						onChange: (p) => d.onSelectionChange?.(p),
					}),
					u = (0, i.createMemo)(() => {
						const p = m();
						return p != null ? [p] : [];
					}),
					[, a] = (0, i.splitProps)(d, ["onSelectionChange"]),
					h = (0, i.mergeProps)(a, {
						selectionMode: "single",
						disallowEmptySelection: !0,
						allowDuplicateSelectionEvents: !0,
						selectedKeys: u,
						onSelectionChange: (p) => {
							const o = p.values().next().value;
							typeof o == "string" &&
								(o === m() && d.onSelectionChange?.(o), r(o));
						},
					}),
					{ collection: c, selectionManager: n } = (0, E.$Wmb)(h),
					g = (0, i.createMemo)(() => {
						const p = m();
						return p != null ? c().getItem(p) : void 0;
					});
				return {
					collection: c,
					selectionManager: n,
					selectedKey: m,
					setSelectedKey: r,
					selectedItem: g,
				};
			}
		},
	);
	var Yi =
		(this && this.__exportStar) ||
		function (ce, e) {
			for (var t in ce)
				t !== "default" &&
					!Object.prototype.hasOwnProperty.call(e, t) &&
					Ns(e, ce, t);
		};
	
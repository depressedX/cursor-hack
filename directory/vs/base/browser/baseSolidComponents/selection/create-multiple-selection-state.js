import '../../../../../require.js';
import '../../../../../exports.js';
import '../utils/api.js';
import '../../../../../external/solid/solid.js';
import './create-controllable-selection-signal.js';
import './types.js';
define(
		de[2645],
		he([1, 0, 115, 13, 2644, 739]),
		function (ce /*require*/,
 e /*exports*/,
 t /*api*/,
 i /*solid*/,
 w /*create-controllable-selection-signal*/,
 E /*types*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Qmb = d);
			function C(m, r) {
				if (m.size !== r.size) return !1;
				for (const u of m) if (!r.has(u)) return !1;
				return !0;
			}
			function d(m) {
				const r = (0, t.$wjb)(
						{ selectionMode: "none", selectionBehavior: "toggle" },
						m,
					),
					[u, a] = (0, i.createSignal)(!1),
					[h, c] = (0, i.createSignal)(),
					n = (0, i.createMemo)(() => {
						const $ = (0, t.access)(r.selectedKeys);
						if ($) return new E.$Omb($);
					}),
					g = (0, i.createMemo)(() => {
						const $ = (0, t.access)(r.defaultSelectedKeys);
						return $ ? new E.$Omb($) : new E.$Omb();
					}),
					[p, o] = (0, w.$Pmb)({
						value: n,
						defaultValue: g,
						onChange: ($) => r.onSelectionChange?.($),
					}),
					[f, b] = (0, i.createSignal)((0, t.access)(r.selectionBehavior)),
					s = () => (0, t.access)(r.selectionMode),
					l = () => (0, t.access)(r.disallowEmptySelection) ?? !1,
					y = ($) => {
						((0, t.access)(r.allowDuplicateSelectionEvents) || !C($, p())) &&
							o($);
					};
				return (
					(0, i.createEffect)(() => {
						const $ = p();
						(0, t.access)(r.selectionBehavior) === "replace" &&
							f() === "toggle" &&
							typeof $ == "object" &&
							$.size === 0 &&
							b("replace");
					}),
					(0, i.createEffect)(() => {
						b((0, t.access)(r.selectionBehavior) ?? "toggle");
					}),
					{
						selectionMode: s,
						disallowEmptySelection: l,
						selectionBehavior: f,
						setSelectionBehavior: b,
						isFocused: u,
						setFocused: a,
						focusedKey: h,
						setFocusedKey: c,
						selectedKeys: p,
						setSelectedKeys: y,
					}
				);
			}
		},
	); /*!
	 * Portions of this file are based on code from react-spectrum.
	 * Apache License Version 2.0, Copyright 2020 Adobe.
	 *
	 * Credits to the React Spectrum team:
	 * https://github.com/adobe/react-spectrum/blob/8f2f2acb3d5850382ebe631f055f88c704aa7d17/packages/@react-aria/selection/src/useSelectableItem.ts
	 */
	
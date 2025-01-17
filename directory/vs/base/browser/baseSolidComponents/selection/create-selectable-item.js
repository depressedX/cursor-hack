import '../../../../../require.js';
import '../../../../../exports.js';
import '../utils/api.js';
import '../../../../../external/solid/solid.js';
import '../../dom.js';
import '../utils/api.js';
define(de[2646], he([1, 0, 115, 13, 7, 115]), function (ce, e, t, i, w, E) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.$Tmb = C),
			(w = mt(w));
		function C(d, m) {
			const r = () => (0, t.access)(d.selectionManager),
				u = () => (0, t.access)(d.key),
				a = () => (0, t.access)(d.shouldUseVirtualFocus),
				h = (S) => {
					r().selectionMode() !== "none" &&
						(r().selectionMode() === "single"
							? r().isSelected(u()) && !r().disallowEmptySelection()
								? r().toggleSelection(u())
								: r().replaceSelection(u())
							: S && S.shiftKey
								? r().extendSelection(u())
								: r().selectionBehavior() === "toggle" ||
										(0, E.$Jjb)(S) ||
										("pointerType" in S && S.pointerType === "touch")
									? r().toggleSelection(u())
									: r().replaceSelection(u()));
				},
				c = () => r().isSelected(u()),
				n = () => (0, t.access)(d.disabled) || r().isDisabled(u()),
				g = () => !n() && r().canSelectItem(u());
			let p = null;
			const o = (S) => {
					g() &&
						((p = S.pointerType),
						S.pointerType === "mouse" &&
							S.button === 0 &&
							!(0, t.access)(d.shouldSelectOnPressUp) &&
							h(S));
				},
				f = (S) => {
					g() &&
						S.pointerType === "mouse" &&
						S.button === 0 &&
						(0, t.access)(d.shouldSelectOnPressUp) &&
						(0, t.access)(d.allowsDifferentPressOrigin) &&
						h(S);
				},
				b = (S) => {
					g() &&
						(((0, t.access)(d.shouldSelectOnPressUp) &&
							!(0, t.access)(d.allowsDifferentPressOrigin)) ||
							p !== "mouse") &&
						h(S);
				},
				s = (S) => {
					!g() ||
						!["Enter", " "].includes(S.key) ||
						((0, E.$Kjb)(S) ? r().toggleSelection(u()) : h(S));
				},
				l = (S) => {
					n() && S.preventDefault();
				},
				y = (S) => {
					const I = m();
					a() || n() || !I || (S.target === I && r().setFocusedKey(u()));
				},
				$ = (0, i.createMemo)(() => {
					if (!(a() || n())) return u() === r().focusedKey() ? 0 : -1;
				}),
				v = (0, i.createMemo)(() =>
					(0, t.access)(d.virtualized) ? void 0 : u(),
				);
			return (
				(0, i.createEffect)(
					(0, i.on)(
						[m, u, a, () => r().focusedKey(), () => r().isFocused()],
						([S, I, T, P, k]) => {
							S &&
								I === P &&
								k &&
								!T &&
								w.$Ngb().activeElement !== S &&
								(d.focus ? d.focus() : S.focus({ preventScroll: !0 }));
						},
					),
				),
				{
					isSelected: c,
					isDisabled: n,
					allowsSelection: g,
					tabIndex: $,
					dataKey: v,
					onPointerDown: o,
					onPointerUp: f,
					onClick: b,
					onKeyDown: s,
					onMouseDown: l,
					onFocus: y,
				}
			);
		}
	}); /*!
	 * Portions of this file are based on code from react-spectrum.
	 * Apache License Version 2.0, Copyright 2020 Adobe.
	 *
	 * Credits to the React Spectrum team:
	 * https://github.com/adobe/react-spectrum/blob/8f2f2acb3d5850382ebe631f055f88c704aa7d17/packages/@react-aria/selection/src/useTypeSelect.ts
	 */
	
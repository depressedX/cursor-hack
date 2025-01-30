import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../utils/api.js';
import '../../../../../external/solid/solid.js';
import '../form-control/api.js';
import '../listbox/api.js';
import './combobox-context.js';
define(
			de[2652],
			he([1, 0, 2, 2, 115, 13, 593, 1571, 486]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*api*/,
 E /*solid*/,
 C /*api*/,
 d /*api*/,
 m /*combobox-context*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$lnb = r),
					(d = mt(d));
				function r(u) {
					const a = (0, C.$5mb)(),
						h = (0, m.$2mb)(),
						c = (0, w.$wjb)({ id: h.generateId("listbox") }, u),
						[n, g] = (0, E.splitProps)(c, ["ref"]),
						p = () => a.getAriaLabelledBy(g.id, h.listboxAriaLabel(), void 0);
					return (
						(0, E.createEffect)(() =>
							(0, E.onCleanup)(h.registerListboxId(g.id)),
						),
						(0, t.createComponent)(
							d.Root,
							(0, i.mergeProps)(
								{
									ref(o) {
										const f = (0, w.mergeRefs)(h.setListboxRef, n.ref);
										typeof f == "function" && f(o);
									},
									get state() {
										return h.listState();
									},
									get autoFocus() {
										return h.autoFocus();
									},
									shouldUseVirtualFocus: !0,
									shouldSelectOnPressUp: !0,
									shouldFocusOnHover: !0,
									get "aria-label"() {
										return h.listboxAriaLabel();
									},
									get "aria-labelledby"() {
										return p();
									},
									get renderItem() {
										return h.renderItem;
									},
									get renderSection() {
										return h.renderSection;
									},
								},
								g,
							),
						)
					);
				}
			},
		); /*!
	 * Portions of this file are based on code from react-spectrum.
	 * Apache License Version 2.0, Copyright 2020 Adobe.
	 *
	 * Credits to the React Spectrum team:
	 * https://github.com/adobe/react-spectrum/blob/8f2f2acb3d5850382ebe631f055f88c704aa7d17/packages/@react-aria/selection/src/utils.ts
	 */
	
import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../utils/api.js';
import '../../../../../external/solid/solid.js';
import '../dismissable-layer/api.js';
import '../popper/api.js';
import '../utils/api.js';
import './combobox-context.js';
define(
			de[2671],
			he([1, 0, 2, 2, 2, 115, 13, 2629, 1164, 115, 486]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*api*/,
 C /*solid*/,
 d /*api*/,
 m /*api*/,
 r /*api*/,
 u /*combobox-context*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$3mb = a);
				function a(h) {
					let c;
					const n = (0, u.$2mb)(),
						[g, p] = (0, C.splitProps)(h, [
							"ref",
							"id",
							"style",
							"onCloseAutoFocus",
							"onFocusOutside",
						]),
						o = () => {
							n.close(), n.resetInputValue();
						},
						f = (b) => {
							g.onFocusOutside?.(b),
								n.isOpen() && n.isModal() && b.preventDefault();
						};
					return (
						(0, r.$Vkb)({
							ownerRef: () => c,
							isDisabled: () =>
								!(n.isOpen() && (n.isModal() || n.preventScroll())),
						}),
						(0, r.$Skb)(
							{
								trapFocus: () => n.isOpen() && n.isModal(),
								onMountAutoFocus: (b) => {
									b.preventDefault();
								},
								onUnmountAutoFocus: (b) => {
									g.onCloseAutoFocus?.(b),
										b.defaultPrevented ||
											(n.inputRef()?.focus({ preventScroll: !0 }),
											b.preventDefault());
								},
							},
							() => c,
						),
						(0, t.createComponent)(C.Show, {
							get when() {
								return n.contentPresence.isPresent();
							},
							get children() {
								return (0, t.createComponent)(m.$Glb, {
									get children() {
										return (0, t.createComponent)(
											d.$ylb,
											(0, i.mergeProps)(
												{
													ref(b) {
														const s = (0, E.mergeRefs)((l) => {
															n.setContentRef(l),
																n.contentPresence.setRef(l),
																(c = l);
														}, g.ref);
														typeof s == "function" && s(b);
													},
													get disableOutsidePointerEvents() {
														return (
															(0, w.memo)(() => !!n.isModal())() && n.isOpen()
														);
													},
													get excludedElements() {
														return [n.controlRef];
													},
													get style() {
														return {
															"--kb-combobox-content-transform-origin":
																"var(--kb-popper-content-transform-origin)",
															position: "relative",
															...g.style,
														};
													},
													onFocusOutside: f,
													onDismiss: o,
												},
												() => n.dataset(),
												p,
											),
										);
									},
								});
							},
						})
					);
				}
			},
		),
		
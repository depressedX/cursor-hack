import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../utils/api.js';
import '../../../../../external/solid/solid.js';
import '../utils/polymorphic.js';
import '../utils/api.js';
import './layer-stack.js';
import '../../../../../external/solid/solid.js';
define(
			de[2629],
			he([1, 0, 2, 2, 115, 13, 494, 115, 2628, 13]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wlb = void 0),
					(e.$xlb = u),
					(e.$ylb = a),
					(e.$wlb = (0, r.createContext)());
				function u() {
					return (0, r.useContext)(e.$wlb);
				}
				function a(h) {
					let c;
					const n = u(),
						[g, p] = (0, E.splitProps)(h, [
							"ref",
							"disableOutsidePointerEvents",
							"excludedElements",
							"onEscapeKeyDown",
							"onPointerDownOutside",
							"onFocusOutside",
							"onInteractOutside",
							"onDismiss",
							"bypassTopMostLayerCheck",
						]),
						o = new Set([]),
						f = ($) => {
							o.add($);
							const v = n?.registerNestedLayer($);
							return () => {
								o.delete($), v?.();
							};
						},
						b = ($) =>
							c
								? g.excludedElements?.some((v) => (0, w.$Ojb)(v(), $)) ||
									[...o].some((v) => (0, w.$Ojb)(v, $))
								: !1,
						s = ($) => {
							!c ||
								m.$vlb.isBelowPointerBlockingLayer(c) ||
								(!g.bypassTopMostLayerCheck && !m.$vlb.isTopMostLayer(c)) ||
								(g.onPointerDownOutside?.($),
								g.onInteractOutside?.($),
								$.defaultPrevented || g.onDismiss?.());
						},
						l = ($) => {
							g.onFocusOutside?.($),
								g.onInteractOutside?.($),
								$.defaultPrevented || g.onDismiss?.();
						};
					(0, d.$Rkb)(
						{
							shouldExcludeElement: b,
							onPointerDownOutside: s,
							onFocusOutside: l,
						},
						() => c,
					),
						(0, d.$Dkb)({
							ownerDocument: () => (0, w.$Rjb)(c),
							onEscapeKeyDown: ($) => {
								!c ||
									!m.$vlb.isTopMostLayer(c) ||
									(g.onEscapeKeyDown?.($),
									!$.defaultPrevented &&
										g.onDismiss &&
										($.preventDefault(), g.onDismiss()));
							},
						}),
						(0, E.onMount)(() => {
							if (!c) return;
							m.$vlb.addLayer({
								node: c,
								isPointerBlocking: g.disableOutsidePointerEvents,
								dismiss: g.onDismiss,
							});
							const $ = n?.registerNestedLayer(c);
							m.$vlb.assignPointerEventToLayers(),
								m.$vlb.disableBodyPointerEvents(c),
								(0, E.onCleanup)(() => {
									c &&
										(m.$vlb.removeLayer(c),
										$?.(),
										m.$vlb.assignPointerEventToLayers(),
										m.$vlb.restoreBodyPointerEvents(c));
								});
						}),
						(0, E.createEffect)(
							(0, E.on)(
								[() => c, () => g.disableOutsidePointerEvents],
								([$, v]) => {
									if (!$) return;
									const S = m.$vlb.find($);
									S &&
										S.isPointerBlocking !== v &&
										((S.isPointerBlocking = v),
										m.$vlb.assignPointerEventToLayers()),
										v && m.$vlb.disableBodyPointerEvents($),
										(0, E.onCleanup)(() => {
											m.$vlb.restoreBodyPointerEvents($);
										});
								},
								{ defer: !0 },
							),
						);
					const y = { registerNestedLayer: f };
					return (0, t.createComponent)(e.$wlb.Provider, {
						value: y,
						get children() {
							return (0, t.createComponent)(
								C.$5kb,
								(0, i.mergeProps)(
									{
										as: "div",
										ref($) {
											const v = (0, w.mergeRefs)((S) => (c = S), g.ref);
											typeof v == "function" && v($);
										},
									},
									p,
								),
							);
						},
					});
				}
			},
		); /*!
	 * Portions of this file are based on code from react-spectrum.
	 * Apache License Version 2.0, Copyright 2020 Adobe.
	 *
	 * Credits to the React Spectrum team:
	 * https://github.com/adobe/react-spectrum/blob/70e7caf1946c423bc9aa9cb0e50dbdbe953d239b/packages/@react-aria/label/src/useField.ts
	 */
	
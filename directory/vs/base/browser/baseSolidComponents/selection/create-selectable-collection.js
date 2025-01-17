import '../../../../../require.js';
import '../../../../../exports.js';
import '../utils/api.js';
import '../../../../../external/solid/solid.js';
import '../../dom.js';
import './create-type-select.js';
import '../utils/api.js';
define(
		de[2647],
		he([1, 0, 115, 13, 7, 1568, 115]),
		function (ce, e, t, i, w, E, C) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Smb = d),
				(w = mt(w));
			function d(m, r, u) {
				const a = {
						selectOnFocus: () =>
							(0, t.access)(m.selectionManager).selectionBehavior() ===
							"replace",
					},
					h = (0, i.mergeProps)(a, m),
					c = () => u?.() ?? r();
				let n = { top: 0, left: 0 };
				(0, t.createEventListener)(
					() => ((0, t.access)(h.isVirtualized) ? void 0 : c()),
					"scroll",
					() => {
						const y = c();
						y && (n = { top: y.scrollTop, left: y.scrollLeft });
					},
				);
				const { typeSelectHandlers: g } = (0, E.$Rmb)({
						isDisabled: () => (0, t.access)(h.disallowTypeAhead),
						keyboardDelegate: () => (0, t.access)(h.keyboardDelegate),
						selectionManager: () => (0, t.access)(h.selectionManager),
					}),
					p = (y) => {
						(0, t.$Kkb)(y, g.onKeyDown),
							y.altKey && y.key === "Tab" && y.preventDefault();
						const $ = r();
						if (!$?.contains(y.target)) return;
						const v = (0, t.access)(h.selectionManager),
							S = (0, t.access)(h.selectOnFocus),
							I = (L) => {
								L != null &&
									(v.setFocusedKey(L),
									y.shiftKey && v.selectionMode() === "multiple"
										? v.extendSelection(L)
										: S && !(0, C.$Kjb)(y) && v.replaceSelection(L));
							},
							T = (0, t.access)(h.keyboardDelegate),
							P = (0, t.access)(h.shouldFocusWrap),
							k = v.focusedKey();
						switch (y.key) {
							case "ArrowDown": {
								if (T.getKeyBelow) {
									y.preventDefault();
									let L;
									k != null ? (L = T.getKeyBelow(k)) : (L = T.getFirstKey?.()),
										L == null && P && (L = T.getFirstKey?.(k)),
										I(L);
								}
								break;
							}
							case "ArrowUp": {
								if (T.getKeyAbove) {
									y.preventDefault();
									let L;
									k != null ? (L = T.getKeyAbove(k)) : (L = T.getLastKey?.()),
										L == null && P && (L = T.getLastKey?.(k)),
										I(L);
								}
								break;
							}
							case "ArrowLeft": {
								if (T.getKeyLeftOf) {
									y.preventDefault();
									let L;
									k != null ? (L = T.getKeyLeftOf(k)) : (L = T.getLastKey?.()),
										I(L);
								}
								break;
							}
							case "ArrowRight": {
								if (T.getKeyRightOf) {
									y.preventDefault();
									let L;
									k != null
										? (L = T.getKeyRightOf(k))
										: (L = T.getFirstKey?.()),
										I(L);
								}
								break;
							}
							case "Home":
								if (T.getFirstKey) {
									y.preventDefault();
									const L = T.getFirstKey(k, (0, C.$Jjb)(y));
									L != null &&
										(v.setFocusedKey(L),
										(0, C.$Jjb)(y) &&
										y.shiftKey &&
										v.selectionMode() === "multiple"
											? v.extendSelection(L)
											: S && v.replaceSelection(L));
								}
								break;
							case "End":
								if (T.getLastKey) {
									y.preventDefault();
									const L = T.getLastKey(k, (0, C.$Jjb)(y));
									L != null &&
										(v.setFocusedKey(L),
										(0, C.$Jjb)(y) &&
										y.shiftKey &&
										v.selectionMode() === "multiple"
											? v.extendSelection(L)
											: S && v.replaceSelection(L));
								}
								break;
							case "PageDown":
								if (T.getKeyPageBelow && k != null) {
									y.preventDefault();
									const L = T.getKeyPageBelow(k);
									I(L);
								}
								break;
							case "PageUp":
								if (T.getKeyPageAbove && k != null) {
									y.preventDefault();
									const L = T.getKeyPageAbove(k);
									I(L);
								}
								break;
							case "a":
								(0, C.$Jjb)(y) &&
									v.selectionMode() === "multiple" &&
									(0, t.access)(h.disallowSelectAll) !== !0 &&
									(y.preventDefault(), v.selectAll());
								break;
							case "Escape":
								y.defaultPrevented ||
									(y.preventDefault(),
									(0, t.access)(h.disallowEmptySelection) ||
										v.clearSelection());
								break;
							case "Tab":
								if (!(0, t.access)(h.allowsTabNavigation)) {
									if (y.shiftKey) $.focus();
									else {
										const L = (0, t.$Pkb)($, { tabbable: !0 });
										let D, M;
										do (M = L.lastChild()), M && (D = M);
										while (M);
										D &&
											!D.contains(w.$Ngb().activeElement) &&
											D.focus({ preventScroll: !0 });
									}
									break;
								}
						}
					},
					o = (y) => {
						const $ = (0, t.access)(h.selectionManager),
							v = (0, t.access)(h.keyboardDelegate),
							S = (0, t.access)(h.selectOnFocus);
						if ($.isFocused()) {
							y.currentTarget.contains(y.target) || $.setFocused(!1);
							return;
						}
						if (y.currentTarget.contains(y.target)) {
							if (($.setFocused(!0), $.focusedKey() == null)) {
								const I = (P) => {
										P != null &&
											($.setFocusedKey(P), S && $.replaceSelection(P));
									},
									T = y.relatedTarget;
								T &&
								y.currentTarget.compareDocumentPosition(T) &
									Node.DOCUMENT_POSITION_FOLLOWING
									? I($.lastSelectedKey() ?? v.getLastKey?.())
									: I($.firstSelectedKey() ?? v.getFirstKey?.());
							} else if (!(0, t.access)(h.isVirtualized)) {
								const I = c();
								if (I) {
									(I.scrollTop = n.top), (I.scrollLeft = n.left);
									const T = I.querySelector(`[data-key="${$.focusedKey()}"]`);
									T && (T.focus({ preventScroll: !0 }), (0, t.$7kb)(I, T));
								}
							}
						}
					},
					f = (y) => {
						const $ = (0, t.access)(h.selectionManager);
						y.currentTarget.contains(y.relatedTarget) || $.setFocused(!1);
					},
					b = (y) => {
						c() === y.target && y.preventDefault();
					},
					s = () => {
						const y = (0, t.access)(h.autoFocus);
						if (!y) return;
						const $ = (0, t.access)(h.selectionManager),
							v = (0, t.access)(h.keyboardDelegate);
						let S;
						y === "first" && (S = v.getFirstKey?.()),
							y === "last" && (S = v.getLastKey?.());
						const I = $.selectedKeys();
						I.size && (S = I.values().next().value),
							$.setFocused(!0),
							$.setFocusedKey(S);
						const T = r();
						T &&
							S == null &&
							!(0, t.access)(h.shouldUseVirtualFocus) &&
							T.focus({ preventScroll: !0 });
					};
				return (
					(0, i.onMount)(() => {
						h.deferAutoFocus ? setTimeout(s, 0) : s();
					}),
					(0, i.createEffect)(
						(0, i.on)(
							[
								c,
								() => (0, t.access)(h.isVirtualized),
								() => (0, t.access)(h.selectionManager).focusedKey(),
							],
							(y) => {
								const [$, v, S] = y;
								if (v) S && h.scrollToKey?.(S);
								else if (S && $) {
									const I = $.querySelector(`[data-key="${S}"]`);
									I && (0, t.$7kb)($, I);
								}
							},
						),
					),
					{
						tabIndex: (0, i.createMemo)(() => {
							if (!(0, t.access)(h.shouldUseVirtualFocus))
								return (0, t.access)(h.selectionManager).focusedKey() == null
									? 0
									: -1;
						}),
						onKeyDown: p,
						onMouseDown: b,
						onFocusIn: o,
						onFocusOut: f,
					}
				);
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
	
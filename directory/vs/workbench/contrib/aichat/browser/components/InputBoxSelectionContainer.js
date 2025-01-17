import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import './InputBoxSelection.js';
import '../../../controlCommon/browser/solid.js';
import '../../../../../base/common/themables.js';
import '../../../../../base/common/codicons.js';
import '../../../../services/utils/browser/isPureClick.js';
import '../../../ui/browser/hooks/useThemeHooks.js';
define(
			de[1365],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 4143, 36, 26, 14, 1046, 331]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$ecc = s);
				const f = (0, t.template)("<div><div><div>"),
					b = (0, t.template)("<div><div>");
				function s(l) {
					const y = (0, c.$odc)(),
						$ = (0, o.$g$b)(y.themeService),
						[v, S] = (0, a.createSignal)(0),
						[I, T] = (0, a.createSignal)(
							l.each.map((M, N) =>
								l.collapseByDefault ||
								("collapseByDefault" in M && M.collapseByDefault === !0)
									? !1
									: N === l.each.length - 1,
							),
						);
					(0, a.createEffect)(() => {
						T(
							l.each.map((M, N) =>
								l.collapseByDefault ||
								("collapseByDefault" in M && M.collapseByDefault === !0)
									? !1
									: N === l.each.length - 1,
							),
						);
					});
					const P = (0, a.createMemo)(() =>
						l.isFocused
							? l.showContainerUnconditionally
								? l.isRunning
								: l.isRunning || l.each.length === 1
							: !1,
					);
					(0, a.createEffect)(() => {
						if (!l.containerRef || !l.each.length || !l.show || !l.isFocused)
							return;
						const M = (N) => {
							const A = P();
							if (
								l.each.length > 1 &&
								N.key === "Enter" &&
								(N.metaKey || N.ctrlKey)
							) {
								N.preventDefault(), N.stopImmediatePropagation(), k();
								return;
							}
							if ((0, p.$dcc)(N, "Enter")) {
								if (
									(N.stopImmediatePropagation(),
									N.preventDefault(),
									l.each.length === 1 || A)
								) {
									const R = [...I()];
									(R[v()] = !R[v()]), T(R);
								} else l.startRunning?.();
								return;
							}
							if (A) {
								if ((0, p.$dcc)(N, "Escape")) {
									N.stopImmediatePropagation(),
										N.preventDefault(),
										l.stopRunning?.(),
										l.each.length === 1 && l.stopFocused?.();
									return;
								}
								if ((0, p.$dcc)(N, "ArrowDown")) {
									N.stopImmediatePropagation(),
										N.preventDefault(),
										v() === l.each.length - 1
											? (l.stopRunning?.(), S(0))
											: S(v() + 1);
									return;
								}
								if ((0, p.$dcc)(N, "ArrowUp")) {
									N.stopImmediatePropagation(),
										N.preventDefault(),
										v() === 0 ? (l.stopRunning?.(), S(0)) : S(v() - 1);
									return;
								}
								if ((0, p.$dcc)(N, "Backspace")) {
									N.stopImmediatePropagation(),
										N.preventDefault(),
										l.each.length === 1
											? (l.stopRunning?.(), l.stopFocused?.(), S(0))
											: S(v() - 1),
										l.boxPropsFunc(l.each[v()], v, !0).onRemove?.();
									return;
								}
								l.onKeyboardDown?.(N, l.each[v()]);
							}
						};
						l.containerRef.addEventListener("keydown", M),
							(0, a.onCleanup)(() => {
								l.containerRef &&
									l.containerRef.removeEventListener("keydown", M);
							});
					}),
						(0, a.createEffect)(() => {
							if (l.each.length > I().length) {
								const M =
									!l.collapseByDefault && l.each.length - I().length === 1;
								T([
									...(l.collapseOthersOnAdd ? I().map(() => !1) : I()),
									...Array.from(
										{ length: l.each.length - I().length },
										() => M,
									),
								]);
							}
						});
					const k = () => {
							I().filter((M) => !!M).length > 0
								? T(l.each.map(() => !1))
								: T(l.each.map(() => !0));
						},
						L = (0, a.createMemo)(() =>
							l.each.map((M, N) => l.boxPropsFunc(M, () => N)),
						),
						D = (0, a.createMemo)(() =>
							typeof l.title == "string" ? l.title : void 0,
						);
					return (0, C.createComponent)(a.Show, {
						get when() {
							return l.show === void 0 ? !0 : l.show;
						},
						get children() {
							const M = b(),
								N = M.firstChild;
							return (
								(0, r.insert)(
									M,
									(0, C.createComponent)(a.Show, {
										get when() {
											return (
												(l.each.length > 1 ||
													l.showContainerUnconditionally ||
													(l.showContainerOnSingleItem &&
														l.each.length === 1)) &&
												l.title
											);
										},
										get children() {
											const A = f(),
												R = A.firstChild,
												O = R.firstChild;
											return (
												A.style.setProperty("margin-bottom", "2px"),
												A.style.setProperty("font-size", "0.7rem"),
												A.style.setProperty("font-weight", "500"),
												A.style.setProperty("color", "rgb(147, 146, 147)"),
												A.style.setProperty("flex", "1"),
												A.style.setProperty("display", "flex"),
												A.style.setProperty("align-items", "center"),
												A.style.setProperty("justify-content", "space-between"),
												(0, r.insert)(A, () => l.title, R),
												R.style.setProperty("display", "flex"),
												R.style.setProperty("gap", "4px"),
												R.style.setProperty("align-items", "center"),
												R.style.setProperty("justify-content", "center"),
												R.style.setProperty("margin-right", "2px"),
												O.addEventListener("click", (B) => {
													B.stopPropagation(), k();
												}),
												O.style.setProperty("cursor", "pointer"),
												O.style.setProperty("font-size", "1em"),
												(0, m.effect)(() =>
													(0, d.className)(
														O,
														(I().filter((B) => !!B).length > 0
															? n.ThemeIcon.asClassName(g.$ak.collapseAll)
															: n.ThemeIcon.asClassName(g.$ak.expandAll)) +
															" clickable",
													),
												),
												A
											);
										},
									}),
									N,
								),
								N.style.setProperty("position", "relative"),
								N.style.setProperty("display", "flex"),
								N.style.setProperty("flex-direction", "column"),
								N.style.setProperty("gap", "4px"),
								(0, r.insert)(
									N,
									(0, C.createComponent)(a.For, {
										get each() {
											return l.each;
										},
										children: (A, R) =>
											(0, C.createComponent)(
												h.$9fc,
												(0, i.mergeProps)(() => L()[R()], {
													item: A,
													get isOpen() {
														return I()[R()];
													},
													setIsOpen: (O) => {
														const B = [...I()];
														(B[R()] = O), T(B);
													},
													get canBePinned() {
														return l.canBePinned;
													},
													onRemove: () => {
														L()[R()].onRemove?.();
														const O = [...I()];
														O.splice(R(), 1), T(O);
													},
													onTitleClick: () => {
														const O = L()[R()];
														if (O.onTitleClick) {
															O.onTitleClick();
															return;
														}
														const B = [...I()];
														(B[R()] = !B[R()]), T(B);
													},
													get showBorders() {
														return l.renderItemBorders;
													},
													get isFocused() {
														return (0, u.memo)(() => !!P())() && v() === R();
													},
													get type() {
														return l.type;
													},
													get showCloseButton() {
														return l.showCloseButton;
													},
													get children() {
														return l.children(A, R);
													},
												}),
											),
									}),
								),
								(0, m.effect)(
									(A) => {
										const R = D(),
											O = D(),
											B =
												l.each.length > 1 ||
												l.showContainerUnconditionally ||
												(l.showContainerOnSingleItem && l.each.length === 1)
													? l.class
													: "",
											U = {
												margin: "0px 0.5rem",
												"border-radius": "4px",
												border: "1px solid transparent",
												"border-color":
													l.isFocused && !P() ? $() : "transparent",
												...(l.each.length > 1 ||
												(l.showContainerOnSingleItem && l.each.length === 1)
													? {
															"background-color":
																"var(--vscode-editor-background)",
															padding: "4px",
															"padding-left": l.morePaddingLeft ? "6px" : "4px",
														}
													: {}),
												...l.style,
											};
										return (
											R !== A._v$ && (0, E.setAttribute)(M, "id", (A._v$ = R)),
											O !== A._v$2 &&
												(0, E.setAttribute)(M, "title", (A._v$2 = O)),
											B !== A._v$3 && (0, d.className)(M, (A._v$3 = B)),
											(A._v$4 = (0, w.style)(M, U, A._v$4)),
											A
										);
									},
									{ _v$: void 0, _v$2: void 0, _v$3: void 0, _v$4: void 0 },
								),
								M
							);
						},
					});
				}
			},
		),
		
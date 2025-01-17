import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/common/constants.js';
import '../../../../../base/common/platform.js';
import '../../../../../base/common/uuid.js';
import '../../../aiConfig/browser/aiConfigHelper.js';
import './useComposerDataHandle.js';
import '../../../controlCommon/browser/solid.js';
import '../../../../services/selectedContext/browser/hooks/useContextPills.js';
import '../../../../services/utils/browser/isPureClick.js';
define(
			de[4400],
			he([1, 0, 13, 7, 58, 12, 47, 270, 177, 36, 1385, 1046]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.useComposerPills = h);
				function h(c, n, g) {
					const p = (0, r.$odc)(),
						[o, f] = (0, t.createSignal)(-1),
						{ composerDataService: b } = p,
						s = g.inputDelegate,
						{ currentComposer: l } = (0, m.useComposerDataHandle)(() => c()),
						y = (0, t.createMemo)(() => {
							if (g.bubbleId) {
								const N = b.getComposerBubble(l().composerId, g.bubbleId);
								if (!N || !N.context)
									throw new Error("[composer] No context available");
								return N.context;
							}
							const M = c().data;
							if (!M)
								throw new Error("[composer] No current composer available");
							return M.context;
						}),
						[$] = (0, d.$K0b)(w.$DW, p.configurationService, !1),
						v = (0, t.createMemo)(() => {
							const M = (0, u.$jbc)(y, n)();
							return !n || !$(), M;
						}),
						S = (0, C.$9g)(),
						I = `add-file-pill-${l().composerId}-${S}`;
					function T(M, N) {
						return M === -2
							? I
							: N
								? `pill-${l().composerId}-${M}-${N.type}-${S}`
								: `pill-${l().composerId}-${M}-${S}`;
					}
					function P(M, N = !0) {
						const A = o();
						let R = A;
						const O =
							M.type === "gitGraphFileSuggestion"
								? v().length
								: v().filter((U) => U.type !== "gitGraphFileSuggestion").length;
						A === O - 1 ? (R = A - 1) : A === 0 && O === 1 && (R = -1);
						const B = () => {
							R === -1 ? (f(-1), s.isFocused() || s.focus()) : f(R);
						};
						setTimeout(() => {
							B();
						}),
							M.onRemove?.(N);
					}
					function k(M) {
						(g.disablePillClicks && M.type !== "gitGraphFileSuggestion") ||
							M.onClick?.();
					}
					const L = () => {
							if (g.filePickerOpen()) return;
							const M = T(o(), v()[o()]),
								N = (0, i.$Ogb)()?.document.getElementById(M);
							N && N.focus();
						},
						D = () => {
							const M = v();
							if (M.length === 0) return !1;
							const N = M.slice()
								.reverse()
								.find((A) => A.type !== "gitGraphFileSuggestion");
							return N?.onRemove ? (P(N, !0), !0) : !1;
						};
					return (
						(0, t.createEffect)(() => {
							const M = g.filePickerOpen,
								N = g.handleAddPillClick,
								A = g.barRef,
								R = (O) => {
									if (
										M() ||
										(A() &&
											!A().contains((0, i.$Ogb)()?.document.activeElement) &&
											!((0, i.$Ogb)()?.document.activeElement).contains(A()))
									)
										return;
									const B = o(),
										U = v().length,
										z = E.$m
											? O.ctrlKey && !O.metaKey
											: O.metaKey && !O.ctrlKey;
									if (B !== -1)
										if ((0, a.$dcc)(O, "Escape"))
											O.preventDefault(),
												O.stopImmediatePropagation(),
												f(-1),
												s?.focus();
										else if ((0, a.$dcc)(O, "ArrowDown"))
											O.preventDefault(),
												O.stopImmediatePropagation(),
												f(-1),
												s?.focus();
										else if (
											(0, a.$dcc)(O, "ArrowRight") ||
											(z && O.key === "l")
										) {
											if (
												(O.preventDefault(),
												O.stopImmediatePropagation(),
												U === 0)
											)
												return;
											B === -2 ? f(0) : B === U - 1 ? f(-2) : f(B + 1);
										} else if (
											(0, a.$dcc)(O, "ArrowLeft") ||
											(z && O.key === "h")
										) {
											if (
												(O.preventDefault(),
												O.stopImmediatePropagation(),
												U === 0)
											)
												return;
											f(B === 0 ? -2 : B === -2 ? U - 1 : B - 1);
										} else
											(0, a.$dcc)(O, "Enter")
												? (O.preventDefault(),
													O.stopImmediatePropagation(),
													B === -2 ? N(O) : k(v()[B]))
												: (0, a.$dcc)(O, "Backspace") ||
														(0, a.$dcc)(O, "Delete")
													? (O.preventDefault(),
														O.stopImmediatePropagation(),
														B >= 0 && P(v()[B]))
													: (O.preventDefault(),
														O.stopImmediatePropagation(),
														f(-1),
														s?.focus());
								};
							(0, i.$Ogb)()?.document.addEventListener("keydown", R),
								(0, t.onCleanup)(() => {
									(0, i.$Ogb)()?.document.removeEventListener("keydown", R);
								});
						}),
						(0, t.createEffect)(() => {
							o() !== -1 && L();
						}),
						{
							allPills: v,
							selectedPillIndex: o,
							setSelectedPillIndex: f,
							generatePillIdByIndex: T,
							onPillsRemoveWrapper: P,
							deleteLastPill: D,
							onPillsClickWrapper: k,
						}
					);
				}
			},
		),
		
define(
			de[3609],
			he([1, 0, 27, 936, 46, 38, 17, 71, 1037, 601, 91, 43, 448, 74, 4, 905]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$iic =
						e.$hic =
						e.$gic =
						e.$fic =
						e.$eic =
						e.$dic =
						e.$cic =
						e.$bic =
						e.$aic =
						e.$_hc =
						e.$$hc =
						e.$0hc =
							void 0),
					(n = mt(n));
				var g;
				(function (P) {
					(P.NoAutoFocus = "noAutoFocus"),
						(P.FocusIfVisible = "focusIfVisible"),
						(P.AutoFocusImmediately = "autoFocusImmediately");
				})(g || (g = {}));
				class p extends w.$itb {
					constructor() {
						super({
							id: i.$bCb,
							label: n.localize(1172, null),
							metadata: {
								description: n.localize2(
									1185,
									"Show or focus the editor hover which shows documentation, references, and other content for a symbol at the current cursor position.",
								),
								args: [
									{
										name: "args",
										schema: {
											type: "object",
											properties: {
												focus: {
													description:
														"Controls if and when the hover should take focus upon being triggered by this action.",
													enum: [
														g.NoAutoFocus,
														g.FocusIfVisible,
														g.AutoFocusImmediately,
													],
													enumDescriptions: [
														n.localize(1173, null),
														n.localize(1174, null),
														n.localize(1175, null),
													],
													default: g.FocusIfVisible,
												},
											},
										},
									},
								],
							},
							alias: "Show or Focus Hover",
							precondition: void 0,
							kbOpts: {
								kbExpr: d.EditorContextKeys.editorTextFocus,
								primary: (0, t.$os)(t.$ps, t.KeyMod.CtrlCmd | t.KeyCode.KeyI),
								mac: {
									primary: (0, t.$os)(t.$qs, t.KeyMod.CtrlCmd | t.KeyCode.KeyI),
								},
								weight: a.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(k, L, D) {
						if (!L.hasModel()) return;
						const M = h.$whc.get(L);
						if (!M) return;
						const N = D?.focus;
						let A = g.FocusIfVisible;
						Object.values(g).includes(N)
							? (A = N)
							: typeof N == "boolean" && N && (A = g.AutoFocusImmediately);
						const R = (B) => {
								const U = L.getPosition(),
									z = new C.$iL(U.lineNumber, U.column, U.lineNumber, U.column);
								M.showContentHover(
									z,
									r.HoverStartMode.Immediate,
									r.HoverStartSource.Keyboard,
									B,
								);
							},
							O =
								L.getOption(E.EditorOption.accessibilitySupport) ===
								u.AccessibilitySupport.Enabled;
						M.isHoverVisible
							? A !== g.NoAutoFocus
								? M.focus()
								: R(O)
							: R(O || A === g.AutoFocusImmediately);
					}
				}
				e.$0hc = p;
				class o extends w.$itb {
					constructor() {
						super({
							id: i.$cCb,
							label: n.localize(1176, null),
							alias: "Show Definition Preview Hover",
							precondition: void 0,
							metadata: {
								description: n.localize2(
									1186,
									"Show the definition preview hover in the editor.",
								),
							},
						});
					}
					run(k, L) {
						const D = h.$whc.get(L);
						if (!D) return;
						const M = L.getPosition();
						if (!M) return;
						const N = new C.$iL(M.lineNumber, M.column, M.lineNumber, M.column),
							A = m.$YOb.get(L);
						if (!A) return;
						A.startFindDefinitionFromCursor(M).then(() => {
							D.showContentHover(
								N,
								r.HoverStartMode.Immediate,
								r.HoverStartSource.Keyboard,
								!0,
							);
						});
					}
				}
				e.$$hc = o;
				class f extends w.$itb {
					constructor() {
						super({
							id: i.$dCb,
							label: n.localize(1177, null),
							alias: "Scroll Up Hover",
							precondition: d.EditorContextKeys.hoverFocused,
							kbOpts: {
								kbExpr: d.EditorContextKeys.hoverFocused,
								primary: t.KeyCode.UpArrow,
								weight: a.KeybindingWeight.EditorContrib,
							},
							metadata: {
								description: n.localize2(1187, "Scroll up the editor hover."),
							},
						});
					}
					run(k, L) {
						const D = h.$whc.get(L);
						D && D.scrollUp();
					}
				}
				e.$_hc = f;
				class b extends w.$itb {
					constructor() {
						super({
							id: i.$eCb,
							label: n.localize(1178, null),
							alias: "Scroll Down Hover",
							precondition: d.EditorContextKeys.hoverFocused,
							kbOpts: {
								kbExpr: d.EditorContextKeys.hoverFocused,
								primary: t.KeyCode.DownArrow,
								weight: a.KeybindingWeight.EditorContrib,
							},
							metadata: {
								description: n.localize2(1188, "Scroll down the editor hover."),
							},
						});
					}
					run(k, L) {
						const D = h.$whc.get(L);
						D && D.scrollDown();
					}
				}
				e.$aic = b;
				class s extends w.$itb {
					constructor() {
						super({
							id: i.$fCb,
							label: n.localize(1179, null),
							alias: "Scroll Left Hover",
							precondition: d.EditorContextKeys.hoverFocused,
							kbOpts: {
								kbExpr: d.EditorContextKeys.hoverFocused,
								primary: t.KeyCode.LeftArrow,
								weight: a.KeybindingWeight.EditorContrib,
							},
							metadata: {
								description: n.localize2(1189, "Scroll left the editor hover."),
							},
						});
					}
					run(k, L) {
						const D = h.$whc.get(L);
						D && D.scrollLeft();
					}
				}
				e.$bic = s;
				class l extends w.$itb {
					constructor() {
						super({
							id: i.$gCb,
							label: n.localize(1180, null),
							alias: "Scroll Right Hover",
							precondition: d.EditorContextKeys.hoverFocused,
							kbOpts: {
								kbExpr: d.EditorContextKeys.hoverFocused,
								primary: t.KeyCode.RightArrow,
								weight: a.KeybindingWeight.EditorContrib,
							},
							metadata: {
								description: n.localize2(
									1190,
									"Scroll right the editor hover.",
								),
							},
						});
					}
					run(k, L) {
						const D = h.$whc.get(L);
						D && D.scrollRight();
					}
				}
				e.$cic = l;
				class y extends w.$itb {
					constructor() {
						super({
							id: i.$hCb,
							label: n.localize(1181, null),
							alias: "Page Up Hover",
							precondition: d.EditorContextKeys.hoverFocused,
							kbOpts: {
								kbExpr: d.EditorContextKeys.hoverFocused,
								primary: t.KeyCode.PageUp,
								secondary: [t.KeyMod.Alt | t.KeyCode.UpArrow],
								weight: a.KeybindingWeight.EditorContrib,
							},
							metadata: {
								description: n.localize2(1191, "Page up the editor hover."),
							},
						});
					}
					run(k, L) {
						const D = h.$whc.get(L);
						D && D.pageUp();
					}
				}
				e.$dic = y;
				class $ extends w.$itb {
					constructor() {
						super({
							id: i.$iCb,
							label: n.localize(1182, null),
							alias: "Page Down Hover",
							precondition: d.EditorContextKeys.hoverFocused,
							kbOpts: {
								kbExpr: d.EditorContextKeys.hoverFocused,
								primary: t.KeyCode.PageDown,
								secondary: [t.KeyMod.Alt | t.KeyCode.DownArrow],
								weight: a.KeybindingWeight.EditorContrib,
							},
							metadata: {
								description: n.localize2(1192, "Page down the editor hover."),
							},
						});
					}
					run(k, L) {
						const D = h.$whc.get(L);
						D && D.pageDown();
					}
				}
				e.$eic = $;
				class v extends w.$itb {
					constructor() {
						super({
							id: i.$jCb,
							label: n.localize(1183, null),
							alias: "Go To Bottom Hover",
							precondition: d.EditorContextKeys.hoverFocused,
							kbOpts: {
								kbExpr: d.EditorContextKeys.hoverFocused,
								primary: t.KeyCode.Home,
								secondary: [t.KeyMod.CtrlCmd | t.KeyCode.UpArrow],
								weight: a.KeybindingWeight.EditorContrib,
							},
							metadata: {
								description: n.localize2(
									1193,
									"Go to the top of the editor hover.",
								),
							},
						});
					}
					run(k, L) {
						const D = h.$whc.get(L);
						D && D.goToTop();
					}
				}
				e.$fic = v;
				class S extends w.$itb {
					constructor() {
						super({
							id: i.$kCb,
							label: n.localize(1184, null),
							alias: "Go To Bottom Hover",
							precondition: d.EditorContextKeys.hoverFocused,
							kbOpts: {
								kbExpr: d.EditorContextKeys.hoverFocused,
								primary: t.KeyCode.End,
								secondary: [t.KeyMod.CtrlCmd | t.KeyCode.DownArrow],
								weight: a.KeybindingWeight.EditorContrib,
							},
							metadata: {
								description: n.localize2(
									1194,
									"Go to the bottom of the editor hover.",
								),
							},
						});
					}
					run(k, L) {
						const D = h.$whc.get(L);
						D && D.goToBottom();
					}
				}
				e.$gic = S;
				class I extends w.$itb {
					constructor() {
						super({
							id: i.$lCb,
							label: i.$nCb,
							alias: "Increase Hover Verbosity Level",
							precondition: d.EditorContextKeys.hoverVisible,
						});
					}
					run(k, L, D) {
						const M = h.$whc.get(L);
						if (!M) return;
						const N = D?.index !== void 0 ? D.index : M.focusedHoverPartIndex();
						M.updateHoverVerbosityLevel(
							c.HoverVerbosityAction.Increase,
							N,
							D?.focus,
						);
					}
				}
				e.$hic = I;
				class T extends w.$itb {
					constructor() {
						super({
							id: i.$oCb,
							label: i.$qCb,
							alias: "Decrease Hover Verbosity Level",
							precondition: d.EditorContextKeys.hoverVisible,
						});
					}
					run(k, L, D) {
						const M = h.$whc.get(L);
						if (!M) return;
						const N = D?.index !== void 0 ? D.index : M.focusedHoverPartIndex();
						h.$whc
							.get(L)
							?.updateHoverVerbosityLevel(
								c.HoverVerbosityAction.Decrease,
								N,
								D?.focus,
							);
					}
				}
				e.$iic = T;
			},
		),
		
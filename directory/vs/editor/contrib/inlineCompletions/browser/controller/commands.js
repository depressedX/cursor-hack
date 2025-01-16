define(
			de[1928],
			he([
				1, 0, 27, 77, 407, 46, 71, 1154, 765, 501, 1344, 373, 4, 11, 10, 8, 43,
				1279, 137,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$hec =
						e.$gec =
						e.$fec =
						e.$eec =
						e.$dec =
						e.$cec =
						e.$bec =
						e.$aec =
							void 0),
					(h = mt(h));
				class b extends E.$itb {
					static {
						this.ID = d.$vCb;
					}
					constructor() {
						super({
							id: b.ID,
							label: h.localize(1237, null),
							alias: "Show Next Inline Suggestion",
							precondition: g.$Kj.and(
								C.EditorContextKeys.writable,
								m.$_Cb.inlineSuggestionVisible,
							),
							kbOpts: {
								weight: 100,
								primary: t.KeyMod.Alt | t.KeyCode.BracketRight,
							},
						});
					}
					async run(P, k) {
						r.$O1b.get(k)?.model.get()?.next();
					}
				}
				e.$aec = b;
				class s extends E.$itb {
					static {
						this.ID = d.$uCb;
					}
					constructor() {
						super({
							id: s.ID,
							label: h.localize(1238, null),
							alias: "Show Previous Inline Suggestion",
							precondition: g.$Kj.and(
								C.EditorContextKeys.writable,
								m.$_Cb.inlineSuggestionVisible,
							),
							kbOpts: {
								weight: 100,
								primary: t.KeyMod.Alt | t.KeyCode.BracketLeft,
							},
						});
					}
					async run(P, k) {
						r.$O1b.get(k)?.model.get()?.previous();
					}
				}
				e.$bec = s;
				class l extends E.$itb {
					constructor() {
						super({
							id: "editor.action.inlineSuggest.trigger",
							label: h.localize(1239, null),
							alias: "Trigger Inline Suggestion",
							precondition: C.EditorContextKeys.writable,
						});
					}
					async run(P, k) {
						const L = r.$O1b.get(k);
						await (0, w.$9d)(async (D) => {
							await L?.model.get()?.triggerExplicitly(D),
								L?.playAccessibilitySignal(D);
						});
					}
				}
				e.$cec = l;
				class y extends E.$itb {
					constructor() {
						super({
							id: "editor.action.inlineSuggest.acceptNextWord",
							label: h.localize(1240, null),
							alias: "Accept Next Word Of Inline Suggestion",
							precondition: g.$Kj.and(
								C.EditorContextKeys.writable,
								g.$Kj.or(m.$_Cb.inlineSuggestionVisible, o.$$dc),
							),
							kbOpts: {
								weight: p.KeybindingWeight.EditorContrib + 1,
								primary: t.KeyMod.CtrlCmd | t.KeyCode.RightArrow,
								kbExpr: g.$Kj.and(
									C.EditorContextKeys.writable,
									g.$Kj.or(m.$_Cb.inlineSuggestionVisible, o.$$dc),
								),
							},
							menuOpts: [
								{
									menuId: c.$XX.InlineSuggestionToolbar,
									title: h.localize(1241, null),
									group: "primary",
									order: 2,
								},
							],
						});
					}
					async run(P, k) {
						const L = P?.get(f.$jfc),
							D = P?.get(g.$6j);
						if (
							(L && (await L.acceptNextWord())) ||
							D === void 0 ||
							!D.getContextKeyValue(m.$_Cb.inlineSuggestionVisible.key)
						)
							return;
						const M = r.$O1b.get(k);
						await M?.model.get()?.acceptNextWord(M.editor);
					}
				}
				e.$dec = y;
				class $ extends E.$itb {
					constructor() {
						super({
							id: "editor.action.inlineSuggest.acceptNextLine",
							label: h.localize(1242, null),
							alias: "Accept Next Line Of Inline Suggestion",
							precondition: g.$Kj.and(
								C.EditorContextKeys.writable,
								m.$_Cb.inlineSuggestionVisible,
							),
							kbOpts: { weight: p.KeybindingWeight.EditorContrib + 1 },
							menuOpts: [
								{
									menuId: c.$XX.InlineSuggestionToolbar,
									title: h.localize(1243, null),
									group: "secondary",
									order: 2,
								},
							],
						});
					}
					async run(P, k) {
						const L = r.$O1b.get(k);
						await L?.model.get()?.acceptNextLine(L.editor),
							u.$8dc.get(k)?.copilotLineAccepted();
					}
				}
				e.$eec = $;
				class v extends E.$itb {
					constructor() {
						super({
							id: d.$tCb,
							label: h.localize(1244, null),
							alias: "Accept Inline Suggestion",
							precondition: m.$_Cb.inlineSuggestionVisible,
							menuOpts: [
								{
									menuId: c.$XX.InlineSuggestionToolbar,
									title: h.localize(1245, null),
									group: "primary",
									order: 1,
								},
							],
							kbOpts: {
								primary: t.KeyCode.Tab,
								weight: 200,
								kbExpr: g.$Kj.and(
									m.$_Cb.inlineSuggestionVisible,
									C.EditorContextKeys.tabMovesFocus.toNegated(),
									m.$_Cb.inlineSuggestionHasIndentationLessThanTabSize,
									a.$YCb.Visible.toNegated(),
									C.EditorContextKeys.hoverFocused.toNegated(),
								),
							},
						});
					}
					async run(P, k) {
						const L = r.$O1b.get(k);
						L && (L.model.get()?.accept(L.editor), L.editor.focus()),
							u.$8dc.get(k)?.copilotLineAccepted();
					}
				}
				e.$fec = v;
				class S extends E.$itb {
					static {
						this.ID = "editor.action.inlineSuggest.hide";
					}
					constructor() {
						super({
							id: S.ID,
							label: h.localize(1246, null),
							alias: "Hide Inline Suggestion",
							precondition: m.$_Cb.inlineSuggestionVisible,
							kbOpts: { weight: 100, primary: t.KeyCode.Escape },
						});
					}
					async run(P, k) {
						const L = r.$O1b.get(k);
						(0, i.transaction)((D) => {
							L?.model.get()?.stop(D);
						});
					}
				}
				e.$gec = S;
				class I extends c.$3X {
					static {
						this.ID = "editor.action.inlineSuggest.toggleAlwaysShowToolbar";
					}
					constructor() {
						super({
							id: I.ID,
							title: h.localize(1247, null),
							f1: !1,
							precondition: void 0,
							menu: [
								{
									id: c.$XX.InlineSuggestionToolbar,
									group: "secondary",
									order: 10,
								},
							],
							toggled: g.$Kj.equals(
								"config.editor.inlineSuggest.showToolbar",
								"always",
							),
						});
					}
					async run(P, k) {
						const L = P.get(n.$gj),
							M =
								L.getValue("editor.inlineSuggest.showToolbar") === "always"
									? "onHover"
									: "always";
						L.updateValue("editor.inlineSuggest.showToolbar", M);
					}
				}
				e.$hec = I;
			},
		),
		
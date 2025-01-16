define(
			de[4171],
			he([
				1, 0, 12, 4, 10, 89, 377, 615, 405, 1368, 18, 8, 28, 11, 43, 27, 547,
				483, 91, 7,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(i = mt(i)),
					(C = mt(C)),
					(d = mt(d)),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.ToggleQueryDetailsActionId,
									title: i.localize2(9240, "Toggle Query Details"),
									category: o.$oOc,
									keybinding: {
										weight: n.KeybindingWeight.WorkbenchContrib,
										when: a.$Kj.or(C.$ooc.SearchViewFocusedKey, d.$vOc),
										primary: g.KeyMod.CtrlCmd | g.KeyMod.Shift | g.KeyCode.KeyJ,
									},
								});
							}
							run(k, ...L) {
								const D = k.get(a.$6j).getContext((0, b.$Jgb)());
								if (D.getValue(d.$vOc.serialize()))
									k.get(u.$IY).activeEditorPane.toggleQueryDetails(L[0]?.show);
								else if (D.getValue(C.$ooc.SearchViewFocusedKey.serialize())) {
									const M = (0, o.$rOc)(k.get(E.$HMb));
									(0, h.$wg)(M).toggleQueryDetails(void 0, L[0]?.show);
								}
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.CloseReplaceWidgetActionId,
									title: i.localize2(9241, "Close Replace Widget"),
									category: o.$oOc,
									keybinding: {
										weight: n.KeybindingWeight.WorkbenchContrib,
										when: a.$Kj.and(
											C.$ooc.SearchViewVisibleKey,
											C.$ooc.ReplaceInputBoxFocusedKey,
										),
										primary: g.KeyCode.Escape,
									},
								});
							}
							run(k) {
								const L = (0, o.$rOc)(k.get(E.$HMb));
								return (
									L &&
										(L.searchAndReplaceWidget.toggleReplace(!1),
										L.searchAndReplaceWidget.focus()),
									Promise.resolve(null)
								);
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.ToggleCaseSensitiveCommandId,
									title: i.localize2(9242, "Toggle Case Sensitive"),
									category: o.$oOc,
									keybinding: Object.assign(
										{
											weight: n.KeybindingWeight.WorkbenchContrib,
											when: t.$m
												? a.$Kj.and(
														C.$ooc.SearchViewFocusedKey,
														C.$ooc.FileMatchOrFolderMatchFocusKey.toNegated(),
													)
												: C.$ooc.SearchViewFocusedKey,
										},
										p.$d2b,
									),
								});
							}
							async run(k) {
								s(k);
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.ToggleWholeWordCommandId,
									title: i.localize2(9243, "Toggle Whole Word"),
									keybinding: Object.assign(
										{
											weight: n.KeybindingWeight.WorkbenchContrib,
											when: C.$ooc.SearchViewFocusedKey,
										},
										p.$e2b,
									),
									category: o.$oOc,
								});
							}
							async run(k) {
								return l(k);
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.ToggleRegexCommandId,
									title: i.localize2(9244, "Toggle Regex"),
									keybinding: Object.assign(
										{
											weight: n.KeybindingWeight.WorkbenchContrib,
											when: C.$ooc.SearchViewFocusedKey,
										},
										p.$f2b,
									),
									category: o.$oOc,
								});
							}
							async run(k) {
								return y(k);
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.TogglePreserveCaseId,
									title: i.localize2(9245, "Toggle Preserve Case"),
									keybinding: Object.assign(
										{
											weight: n.KeybindingWeight.WorkbenchContrib,
											when: C.$ooc.SearchViewFocusedKey,
										},
										p.$h2b,
									),
									category: o.$oOc,
								});
							}
							async run(k) {
								return $(k);
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.OpenMatch,
									title: i.localize2(9246, "Open Match"),
									category: o.$oOc,
									keybinding: {
										weight: n.KeybindingWeight.WorkbenchContrib,
										when: a.$Kj.and(
											C.$ooc.SearchViewVisibleKey,
											C.$ooc.FileMatchOrMatchFocusKey,
										),
										primary: g.KeyCode.Enter,
										mac: {
											primary: g.KeyCode.Enter,
											secondary: [g.KeyMod.CtrlCmd | g.KeyCode.DownArrow],
										},
									},
								});
							}
							run(k) {
								const L = (0, o.$rOc)(k.get(E.$HMb));
								if (L) {
									const D = L.getControl(),
										M = L.getControl(),
										N = D.getFocus()[0];
									N instanceof m.$JNc
										? M.toggleCollapsed(N)
										: L.open(D.getFocus()[0], !1, !1, !0);
								}
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.OpenMatchToSide,
									title: i.localize2(9247, "Open Match To Side"),
									category: o.$oOc,
									keybinding: {
										weight: n.KeybindingWeight.WorkbenchContrib,
										when: a.$Kj.and(
											C.$ooc.SearchViewVisibleKey,
											C.$ooc.FileMatchOrMatchFocusKey,
										),
										primary: g.KeyMod.CtrlCmd | g.KeyCode.Enter,
										mac: { primary: g.KeyMod.WinCtrl | g.KeyCode.Enter },
									},
								});
							}
							run(k) {
								const L = (0, o.$rOc)(k.get(E.$HMb));
								if (L) {
									const D = L.getControl();
									L.open(D.getFocus()[0], !1, !0, !0);
								}
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.AddCursorsAtSearchResults,
									title: i.localize2(9248, "Add Cursors at Search Results"),
									keybinding: {
										weight: n.KeybindingWeight.WorkbenchContrib,
										when: a.$Kj.and(
											C.$ooc.SearchViewVisibleKey,
											C.$ooc.FileMatchOrMatchFocusKey,
										),
										primary: g.KeyMod.CtrlCmd | g.KeyMod.Shift | g.KeyCode.KeyL,
									},
									category: o.$oOc,
								});
							}
							async run(k) {
								const L = (0, o.$rOc)(k.get(E.$HMb));
								if (L) {
									const D = L.getControl();
									L.openEditorWithMultiCursor(D.getFocus()[0]);
								}
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.FocusNextInputActionId,
									title: i.localize2(9249, "Focus Next Input"),
									category: o.$oOc,
									keybinding: {
										weight: n.KeybindingWeight.WorkbenchContrib,
										when: a.$Kj.or(
											a.$Kj.and(d.$vOc, C.$ooc.InputBoxFocusedKey),
											a.$Kj.and(
												C.$ooc.SearchViewVisibleKey,
												C.$ooc.InputBoxFocusedKey,
											),
										),
										primary: g.KeyMod.CtrlCmd | g.KeyCode.DownArrow,
									},
								});
							}
							async run(k) {
								const L = k.get(u.$IY);
								L.activeEditor instanceof r.$SOc &&
									L.activeEditorPane.focusNextInput(),
									(0, o.$rOc)(k.get(E.$HMb))?.focusNextInputBox();
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.FocusPreviousInputActionId,
									title: i.localize2(9250, "Focus Previous Input"),
									category: o.$oOc,
									keybinding: {
										weight: n.KeybindingWeight.WorkbenchContrib,
										when: a.$Kj.or(
											a.$Kj.and(d.$vOc, C.$ooc.InputBoxFocusedKey),
											a.$Kj.and(
												C.$ooc.SearchViewVisibleKey,
												C.$ooc.InputBoxFocusedKey,
												C.$ooc.SearchInputBoxFocusedKey.toNegated(),
											),
										),
										primary: g.KeyMod.CtrlCmd | g.KeyCode.UpArrow,
									},
								});
							}
							async run(k) {
								const L = k.get(u.$IY);
								L.activeEditor instanceof r.$SOc &&
									L.activeEditorPane.focusPrevInput(),
									(0, o.$rOc)(k.get(E.$HMb))?.focusPreviousInputBox();
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.FocusSearchFromResults,
									title: i.localize2(9251, "Focus Search From Results"),
									category: o.$oOc,
									keybinding: {
										weight: n.KeybindingWeight.WorkbenchContrib,
										when: a.$Kj.and(
											C.$ooc.SearchViewVisibleKey,
											a.$Kj.or(C.$ooc.FirstMatchFocusKey, f.$YK),
										),
										primary: g.KeyMod.CtrlCmd | g.KeyCode.UpArrow,
									},
								});
							}
							run(k) {
								(0, o.$rOc)(k.get(E.$HMb))?.focusPreviousInputBox();
							}
						},
					),
					(0, c.$4X)(
						class ba extends c.$3X {
							static {
								this.a = "search.searchOnType";
							}
							constructor() {
								super({
									id: C.SearchCommandIds.ToggleSearchOnTypeActionId,
									title: i.localize2(9252, "Toggle Search on Type"),
									category: o.$oOc,
								});
							}
							async run(k) {
								const L = k.get(w.$gj),
									D = L.getValue(ba.a);
								return L.updateValue(ba.a, !D);
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.FocusSearchListCommandID,
									title: i.localize2(9253, "Focus List"),
									category: o.$oOc,
									f1: !0,
								});
							}
							async run(k) {
								v(k);
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.FocusNextSearchResultActionId,
									title: i.localize2(9254, "Focus Next Search Result"),
									keybinding: [
										{
											primary: g.KeyCode.F4,
											weight: n.KeybindingWeight.WorkbenchContrib,
										},
									],
									category: o.$oOc,
									f1: !0,
									precondition: a.$Kj.or(C.$ooc.HasSearchResults, d.$vOc),
								});
							}
							async run(k) {
								return await S(k);
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.FocusPreviousSearchResultActionId,
									title: i.localize2(9255, "Focus Previous Search Result"),
									keybinding: [
										{
											primary: g.KeyMod.Shift | g.KeyCode.F4,
											weight: n.KeybindingWeight.WorkbenchContrib,
										},
									],
									category: o.$oOc,
									f1: !0,
									precondition: a.$Kj.or(C.$ooc.HasSearchResults, d.$vOc),
								});
							}
							async run(k) {
								return await I(k);
							}
						},
					),
					(0, c.$4X)(
						class extends c.$3X {
							constructor() {
								super({
									id: C.SearchCommandIds.ReplaceInFilesActionId,
									title: i.localize2(9256, "Replace in Files"),
									keybinding: [
										{
											primary:
												g.KeyMod.CtrlCmd | g.KeyMod.Shift | g.KeyCode.KeyH,
											weight: n.KeybindingWeight.WorkbenchContrib,
										},
									],
									category: o.$oOc,
									f1: !0,
									menu: [
										{
											id: c.$XX.MenubarEditMenu,
											group: "4_find_global",
											order: 2,
										},
									],
								});
							}
							async run(k) {
								return await T(k, !0);
							}
						},
					);
				function s(P) {
					(0, o.$rOc)(P.get(E.$HMb))?.toggleCaseSensitive();
				}
				function l(P) {
					(0, o.$rOc)(P.get(E.$HMb))?.toggleWholeWords();
				}
				function y(P) {
					(0, o.$rOc)(P.get(E.$HMb))?.toggleRegex();
				}
				function $(P) {
					(0, o.$rOc)(P.get(E.$HMb))?.togglePreserveCase();
				}
				const v = (P) => {
					const k = P.get(E.$HMb);
					(0, o.$uOc)(k).then((L) => {
						L?.moveFocusToResults();
					});
				};
				async function S(P) {
					const k = P.get(u.$IY);
					return k.activeEditor instanceof r.$SOc
						? k.activeEditorPane.focusNextResult()
						: (0, o.$uOc)(P.get(E.$HMb)).then((D) => {
								D?.selectNextMatch();
							});
				}
				async function I(P) {
					const k = P.get(u.$IY);
					return k.activeEditor instanceof r.$SOc
						? k.activeEditorPane.focusPreviousResult()
						: (0, o.$uOc)(P.get(E.$HMb)).then((D) => {
								D?.selectPreviousMatch();
							});
				}
				async function T(P, k) {
					return (0, o.$uOc)(P.get(E.$HMb), !1).then((L) => {
						if (L) {
							L.searchAndReplaceWidget.toggleReplace(k);
							const M = L.updateTextFromFindWidgetOrSelection({
								allowUnselectedWord: !k,
							});
							L.searchAndReplaceWidget.focus(void 0, M, M);
						}
					});
				}
			},
		),
		
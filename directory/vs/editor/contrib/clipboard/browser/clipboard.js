define(
			de[787],
			he([
				1, 0, 139, 7, 27, 12, 942, 46, 65, 38, 98, 71, 609, 4, 11, 121, 8, 43,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$CAb = e.$BAb = e.$AAb = void 0),
					(t = mt(t)),
					(E = mt(E)),
					(c = mt(c));
				const f = "9_cutcopypaste",
					b = E.$p || document.queryCommandSupported("cut"),
					s = E.$p || document.queryCommandSupported("copy"),
					l =
						typeof navigator.clipboard > "u" || t.$Ofb
							? document.queryCommandSupported("paste")
							: !0;
				function y(S) {
					return S.register(), S;
				}
				(e.$AAb = b
					? y(
							new d.$ftb({
								id: "editor.action.clipboardCutAction",
								precondition: void 0,
								kbOpts: E.$p
									? {
											primary: w.KeyMod.CtrlCmd | w.KeyCode.KeyX,
											win: {
												primary: w.KeyMod.CtrlCmd | w.KeyCode.KeyX,
												secondary: [w.KeyMod.Shift | w.KeyCode.Delete],
											},
											weight: o.KeybindingWeight.EditorContrib,
										}
									: void 0,
								menuOpts: [
									{
										menuId: n.$XX.MenubarEditMenu,
										group: "2_ccp",
										title: c.localize(880, null),
										order: 1,
									},
									{
										menuId: n.$XX.EditorContext,
										group: f,
										title: c.localize(881, null),
										when: a.EditorContextKeys.writable,
										order: 1,
									},
									{
										menuId: n.$XX.CommandPalette,
										group: "",
										title: c.localize(882, null),
										order: 1,
									},
									{
										menuId: n.$XX.SimpleEditorContext,
										group: f,
										title: c.localize(883, null),
										when: a.EditorContextKeys.writable,
										order: 1,
									},
								],
							}),
						)
					: void 0),
					(e.$BAb = s
						? y(
								new d.$ftb({
									id: "editor.action.clipboardCopyAction",
									precondition: void 0,
									kbOpts: E.$p
										? {
												primary: w.KeyMod.CtrlCmd | w.KeyCode.KeyC,
												win: {
													primary: w.KeyMod.CtrlCmd | w.KeyCode.KeyC,
													secondary: [w.KeyMod.CtrlCmd | w.KeyCode.Insert],
												},
												weight: o.KeybindingWeight.EditorContrib,
											}
										: void 0,
									menuOpts: [
										{
											menuId: n.$XX.MenubarEditMenu,
											group: "2_ccp",
											title: c.localize(884, null),
											order: 2,
										},
										{
											menuId: n.$XX.EditorContext,
											group: f,
											title: c.localize(885, null),
											order: 2,
										},
										{
											menuId: n.$XX.CommandPalette,
											group: "",
											title: c.localize(886, null),
											order: 1,
										},
										{
											menuId: n.$XX.SimpleEditorContext,
											group: f,
											title: c.localize(887, null),
											order: 2,
										},
									],
								}),
							)
						: void 0),
					n.$ZX.appendMenuItem(n.$XX.MenubarEditMenu, {
						submenu: n.$XX.MenubarCopy,
						title: c.localize2(893, "Copy As"),
						group: "2_ccp",
						order: 3,
					}),
					n.$ZX.appendMenuItem(n.$XX.EditorContext, {
						submenu: n.$XX.EditorContextCopy,
						title: c.localize2(894, "Copy As"),
						group: f,
						order: 3,
					}),
					n.$ZX.appendMenuItem(n.$XX.EditorContext, {
						submenu: n.$XX.EditorContextShare,
						title: c.localize2(895, "Share"),
						group: "11_share",
						order: -1,
						when: p.$Kj.and(
							p.$Kj.notEquals("resourceScheme", "output"),
							a.EditorContextKeys.editorTextFocus,
						),
					}),
					n.$ZX.appendMenuItem(n.$XX.ExplorerContext, {
						submenu: n.$XX.ExplorerContextShare,
						title: c.localize2(896, "Share"),
						group: "11_share",
						order: -1,
					}),
					(e.$CAb = l
						? y(
								new d.$ftb({
									id: "editor.action.clipboardPasteAction",
									precondition: void 0,
									kbOpts: E.$p
										? {
												primary: w.KeyMod.CtrlCmd | w.KeyCode.KeyV,
												win: {
													primary: w.KeyMod.CtrlCmd | w.KeyCode.KeyV,
													secondary: [w.KeyMod.Shift | w.KeyCode.Insert],
												},
												linux: {
													primary: w.KeyMod.CtrlCmd | w.KeyCode.KeyV,
													secondary: [w.KeyMod.Shift | w.KeyCode.Insert],
												},
												weight: o.KeybindingWeight.EditorContrib,
											}
										: void 0,
									menuOpts: [
										{
											menuId: n.$XX.MenubarEditMenu,
											group: "2_ccp",
											title: c.localize(888, null),
											order: 4,
										},
										{
											menuId: n.$XX.EditorContext,
											group: f,
											title: c.localize(889, null),
											when: a.EditorContextKeys.writable,
											order: 4,
										},
										{
											menuId: n.$XX.CommandPalette,
											group: "",
											title: c.localize(890, null),
											order: 1,
										},
										{
											menuId: n.$XX.SimpleEditorContext,
											group: f,
											title: c.localize(891, null),
											when: a.EditorContextKeys.writable,
											order: 4,
										},
									],
								}),
							)
						: void 0);
				class $ extends d.$itb {
					constructor() {
						super({
							id: "editor.action.clipboardCopyWithSyntaxHighlightingAction",
							label: c.localize(892, null),
							alias: "Copy With Syntax Highlighting",
							precondition: void 0,
							kbOpts: {
								kbExpr: a.EditorContextKeys.textInputFocus,
								primary: 0,
								weight: o.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(I, T) {
						!T.hasModel() ||
							(!T.getOption(r.EditorOption.emptySelectionClipboard) &&
								T.getSelection().isEmpty()) ||
							((C.$5ub.forceCopyWithSyntaxHighlighting = !0),
							T.focus(),
							T.getContainerDomNode().ownerDocument.execCommand("copy"),
							(C.$5ub.forceCopyWithSyntaxHighlighting = !1));
					}
				}
				function v(S, I) {
					S &&
						(S.addImplementation(1e4, "code-editor", (T, P) => {
							const k = T.get(m.$dtb).getFocusedCodeEditor();
							if (k && k.hasTextFocus()) {
								const L = k.getOption(r.EditorOption.emptySelectionClipboard),
									D = k.getSelection();
								return (
									(D && D.isEmpty() && !L) ||
										k.getContainerDomNode().ownerDocument.execCommand(I),
									!0
								);
							}
							return !1;
						}),
						S.addImplementation(
							0,
							"generic-dom",
							(T, P) => ((0, i.$Ngb)().execCommand(I), !0),
						));
				}
				v(e.$AAb, "cut"),
					v(e.$BAb, "copy"),
					e.$CAb &&
						(e.$CAb.addImplementation(1e4, "code-editor", (S, I) => {
							const T = S.get(m.$dtb),
								P = S.get(g.$Vxb),
								k = T.getFocusedCodeEditor();
							return k && k.hasTextFocus()
								? k.getContainerDomNode().ownerDocument.execCommand("paste")
									? (h.$zAb.get(k)?.finishedPaste() ?? Promise.resolve())
									: E.$r
										? (async () => {
												const D = await P.readText();
												if (D !== "") {
													const M = C.$6ub.INSTANCE.get(D);
													let N = !1,
														A = null,
														R = null;
													M &&
														((N =
															k.getOption(
																r.EditorOption.emptySelectionClipboard,
															) && !!M.isFromEmptySelection),
														(A =
															typeof M.multicursorText < "u"
																? M.multicursorText
																: null),
														(R = M.mode)),
														k.trigger("keyboard", u.Handler.Paste, {
															text: D,
															pasteOnNewLine: N,
															multicursorText: A,
															mode: R,
														});
												}
											})()
										: !0
								: !1;
						}),
						e.$CAb.addImplementation(
							0,
							"generic-dom",
							(S, I) => ((0, i.$Ngb)().execCommand("paste"), !0),
						)),
					s && (0, d.$ntb)($);
			},
		),
		
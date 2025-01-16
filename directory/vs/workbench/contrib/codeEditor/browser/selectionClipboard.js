define(de[504], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$aYb = void 0),
				(e.$aYb = "editor.contrib.selectionClipboard");
		}),
		define(
			de[3021],
			he([1, 0, 4, 11, 10, 8, 65, 38, 498, 48, 104]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$WXc = void 0);
				class a extends i.$3X {
					static {
						this.ID = "editor.action.toggleColumnSelection";
					}
					constructor() {
						super({
							id: a.ID,
							title: {
								...(0, t.localize2)(4904, "Toggle Column Selection Mode"),
								mnemonicTitle: (0, t.localize)(4903, null),
							},
							f1: !0,
							toggled: E.$Kj.equals("config.editor.columnSelection", !0),
							menu: {
								id: i.$XX.MenubarSelectionMenu,
								group: "4_config",
								order: 2,
							},
						});
					}
					async run(c) {
						const n = c.get(w.$gj),
							g = c.get(C.$dtb),
							p = n.getValue("editor.columnSelection"),
							o = this.a(g);
						await n.updateValue("editor.columnSelection", !p);
						const f = n.getValue("editor.columnSelection");
						if (
							!o ||
							o !== this.a(g) ||
							p === f ||
							!o.hasModel() ||
							typeof p != "boolean" ||
							typeof f != "boolean"
						)
							return;
						const b = o._getViewModel();
						if (o.getOption(d.EditorOption.columnSelection)) {
							const s = o.getSelection(),
								l = new r.$hL(
									s.selectionStartLineNumber,
									s.selectionStartColumn,
								),
								y =
									b.coordinatesConverter.convertModelPositionToViewPosition(l),
								$ = new r.$hL(s.positionLineNumber, s.positionColumn),
								v =
									b.coordinatesConverter.convertModelPositionToViewPosition($);
							m.CoreNavigationCommands.MoveTo.runCoreEditorCommand(b, {
								position: l,
								viewPosition: y,
							});
							const S = b.cursorConfig.visibleColumnFromColumn(b, v);
							m.CoreNavigationCommands.ColumnSelect.runCoreEditorCommand(b, {
								position: $,
								viewPosition: v,
								doColumnSelect: !0,
								mouseColumn: S + 1,
							});
						} else {
							const s = b.getCursorColumnSelectData(),
								l = b.cursorConfig.columnFromVisibleColumn(
									b,
									s.fromViewLineNumber,
									s.fromViewVisualColumn,
								),
								y = b.coordinatesConverter.convertViewPositionToModelPosition(
									new r.$hL(s.fromViewLineNumber, l),
								),
								$ = b.cursorConfig.columnFromVisibleColumn(
									b,
									s.toViewLineNumber,
									s.toViewVisualColumn,
								),
								v = b.coordinatesConverter.convertViewPositionToModelPosition(
									new r.$hL(s.toViewLineNumber, $),
								);
							o.setSelection(
								new u.$kL(y.lineNumber, y.column, v.lineNumber, v.column),
							);
						}
					}
					a(c) {
						const n = c.getFocusedCodeEditor();
						return n || c.getActiveCodeEditor();
					}
				}
				(e.$WXc = a), (0, i.$4X)(a);
			},
		),
		define(
			de[3022],
			he([1, 0, 4, 11, 10, 8, 99]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$XXc = void 0);
				class d extends i.$3X {
					static {
						this.ID = "editor.action.toggleMinimap";
					}
					constructor() {
						super({
							id: d.ID,
							title: {
								...(0, t.localize2)(4906, "Toggle Minimap"),
								mnemonicTitle: (0, t.localize)(4905, null),
							},
							category: C.$ck.View,
							f1: !0,
							toggled: E.$Kj.equals("config.editor.minimap.enabled", !0),
							menu: {
								id: i.$XX.MenubarAppearanceMenu,
								group: "4_editor",
								order: 1,
							},
						});
					}
					async run(r) {
						const u = r.get(w.$gj),
							a = !u.getValue("editor.minimap.enabled");
						return u.updateValue("editor.minimap.enabled", a);
					}
				}
				(e.$XXc = d), (0, i.$4X)(d);
			},
		),
		define(
			de[3023],
			he([1, 0, 4, 11, 10, 8, 99]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ZXc = void 0);
				class d extends i.$3X {
					static {
						this.ID = "editor.action.toggleRenderControlCharacter";
					}
					constructor() {
						super({
							id: d.ID,
							title: {
								...(0, t.localize2)(4912, "Toggle Control Characters"),
								mnemonicTitle: (0, t.localize)(4911, null),
							},
							category: C.$ck.View,
							f1: !0,
							toggled: E.$Kj.equals(
								"config.editor.renderControlCharacters",
								!0,
							),
							menu: {
								id: i.$XX.MenubarAppearanceMenu,
								group: "4_editor",
								order: 5,
							},
						});
					}
					run(r) {
						const u = r.get(w.$gj),
							a = !u.getValue("editor.renderControlCharacters");
						return u.updateValue("editor.renderControlCharacters", a);
					}
				}
				(e.$ZXc = d), (0, i.$4X)(d);
			},
		),
		define(
			de[3024],
			he([1, 0, 4, 11, 10, 8, 99]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				class d extends i.$3X {
					static {
						this.ID = "editor.action.toggleRenderWhitespace";
					}
					constructor() {
						super({
							id: d.ID,
							title: {
								...(0, t.localize2)(4914, "Toggle Render Whitespace"),
								mnemonicTitle: (0, t.localize)(4913, null),
							},
							category: C.$ck.View,
							f1: !0,
							toggled: E.$Kj.notEquals(
								"config.editor.renderWhitespace",
								"none",
							),
							menu: {
								id: i.$XX.MenubarAppearanceMenu,
								group: "4_editor",
								order: 4,
							},
						});
					}
					run(r) {
						const u = r.get(w.$gj),
							a = u.getValue("editor.renderWhitespace");
						let h;
						return (
							a === "none" ? (h = "all") : (h = "none"),
							u.updateValue("editor.renderWhitespace", h)
						);
					}
				}
				(0, i.$4X)(d);
			},
		),
		define(
			de[3025],
			he([1, 0, 540, 2771, 152, 69, 67, 125, 34]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$QAc = void 0);
				let r = class extends i.$Nyc {
					constructor(a, h, c, n, g) {
						const p = new t.$hjb(
							"vs/editor/common/services/editorSimpleWorker",
							"TextEditorWorker",
						);
						super(p, a, h, c, n, g);
					}
				};
				(e.$QAc = r),
					(e.$QAc = r =
						Ne(
							[j(0, C.$QO), j(1, d.$XO), j(2, m.$ik), j(3, w.$aN), j(4, E.$k3)],
							r,
						));
			},
		),
		
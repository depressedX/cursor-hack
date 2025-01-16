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
		
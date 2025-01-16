define(
			de[521],
			he([1, 0, 375, 254, 328, 394, 504, 714, 46, 35, 51]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$xYb = a),
					(e.$yYb = h),
					(e.$zYb = c);
				function a(n) {
					return {
						wordWrap: "on",
						overviewRulerLanes: 0,
						glyphMargin: !1,
						lineNumbers: "off",
						folding: !1,
						selectOnLineNumbers: !1,
						hideCursorInOverviewRuler: !0,
						selectionHighlight: !1,
						scrollbar: { horizontal: "hidden", alwaysConsumeMouseWheel: !1 },
						lineDecorationsWidth: 0,
						overviewRulerBorder: !1,
						scrollBeyondLastLine: !1,
						renderLineHighlight: "none",
						fixedOverflowWidgets: !0,
						acceptSuggestionOnEnter: "smart",
						dragAndDrop: !1,
						revealHorizontalRightPadding: 5,
						minimap: { enabled: !1 },
						guides: { indentation: !1 },
						accessibilitySupport: n.getValue("editor.accessibilitySupport"),
						cursorBlinking: n.getValue("editor.cursorBlinking"),
					};
				}
				function h() {
					return {
						isSimpleWidget: !0,
						contributions:
							m.EditorExtensionsRegistry.getSomeEditorContributions([
								E.$_Xb.ID,
								C.$aYb,
								t.$2Mb.ID,
								w.$KDb.ID,
								i.$aDb.ID,
								d.$wYb.ID,
							]),
					};
				}
				function c(n) {
					return (0, r.$oP)((g, p) => {
						const o = g.getColor(u.$QP);
						if (o) {
							const f = g.getColor(u.$TR);
							f &&
								(p.addRule(
									`${n} .monaco-editor-background { background-color: ${f}; } `,
								),
								p.addRule(
									`${n} .monaco-editor .selected-text { background-color: ${f.transparent(0.4)}; }`,
								));
							const b = g.getColor(u.$UR);
							b &&
								p.addRule(
									`${n} .monaco-editor .view-line span.inline-selected-text { color: ${b}; }`,
								),
								p.addRule(
									`${n} .monaco-editor .focused .selected-text { background-color: ${o}; }`,
								);
						} else
							p.addRule(
								`${n} .monaco-editor .focused .selected-text { background-color: ${g.getColor(u.$rQ)}; }`,
							);
					});
				}
			},
		),
		
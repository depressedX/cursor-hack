import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/themables.js';
import '../../../../base/common/codicons.js';
import '../../../../editor/common/config/editorOptions.js';
define(
			de[2968],
			he([1, 0, 3, 56, 7, 26, 14, 38]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (w = mt(w));
				class m extends t.$1c {
					constructor(u, a) {
						super(),
							(this.g = u),
							(this.h = a),
							(this.c = !1),
							(this.allowEditorOverflow = !0),
							(this.f = "top");
						const h = this.g.getOptions().get(d.EditorOption.fontFamily);
						(this.a = w.$("div.tooltipEditorUiWidget")),
							this.g.addOverlayWidget(this),
							this.g.layoutOverlayWidget(this),
							(this.a.style.zIndex = "1000"),
							(this.a.style.display = "flex"),
							(this.a.style.flexDirection = "column"),
							(this.a.style.justifyContent = "flex-start"),
							(this.a.style.alignItems = "center"),
							(this.a.style.width = "100%"),
							(this.a.style.height = "100%"),
							(this.a.style.top = "0px"),
							(this.a.style.bottom = "0px"),
							(this.a.style.left = "0px"),
							(this.a.style.right = "0px"),
							(this.a.style.pointerEvents = "none"),
							(this.b = w.$fhb(
								this.a,
								w.$("div.cursorPredictionOutOfRangeIndicator"),
							)),
							(this.b.style.display = "flex"),
							(this.b.style.alignItems = "center"),
							(this.b.style.width = "fit-content"),
							(this.b.style.marginTop = "8px"),
							(this.b.style.marginBottom = "4px"),
							(this.b.style.padding = "0px 4px"),
							(this.b.style.lineHeight = "130%"),
							(this.b.style.borderRadius = "4px"),
							(this.b.style.backgroundColor =
								"var(--vscode-editor-background)"),
							(this.b.style.border =
								"1px solid var(--vscode-editorWarning-foreground)"),
							(this.b.style.color = "var(--vscode-editor-foreground)"),
							(this.b.style.zIndex = "1000"),
							(this.b.style.fontSize = "10px"),
							(this.b.style.gap = "4px"),
							(this.b.style.fontFamily = h);
						const c = w.$fhb(
							this.b,
							w.$("div.cursorPredictionOutOfRangeIndicatorText"),
						);
						c.textContent = "Tab to jump";
						const n = w.$fhb(
							this.b,
							w.$("div.cursorPredictionOutOfRangeIndicatorIcon"),
						);
						(n.className = E.ThemeIcon.asClassName(C.$ak.arrowDown)),
							(n.style.fontSize = "10px"),
							this.D(
								this.g.onDidChangeModelOptions((p) => {
									const o = this.g.getOptions().get(d.EditorOption.fontFamily);
									o && (this.b.style.fontFamily = o);
								}),
							);
						const g = () => {
							const p =
									this.g.getModel()?.getDecorationRange(this.h)
										?.startLineNumber ?? -1,
								o = this.g.getVisibleRanges();
							if (p === -1) {
								this.b.style.visibility = "hidden";
								return;
							}
							let f = o[0].startLineNumber,
								b = o[0].endLineNumber;
							const s = o.some((l) =>
								l.startLineNumber <= p && p <= l.endLineNumber + 1
									? !0
									: (l.startLineNumber < f && (f = l.startLineNumber),
										l.endLineNumber > b && (b = l.endLineNumber),
										!1),
							);
							s ||
								(o && o.length > 0
									? (this.f = f > p ? "top" : "bottom")
									: (this.f = "bottom"),
								(n.style.transform =
									this.f === "top" ? "rotate(180deg)" : "rotate(0deg)"),
								(this.a.style.justifyContent =
									this.f === "top" ? "flex-start" : "flex-end")),
								(this.b.style.visibility = s ? "hidden" : "visible");
						};
						this.D(this.g.onDidScrollChange(g)),
							this.D(this.g.onDidChangeCursorPosition(g)),
							this.D(this.g.onDidChangeCursorSelection(g)),
							g();
					}
					getPosition() {
						return { preference: i.OverlayWidgetPositionPreference.TOP_CENTER };
					}
					dispose() {
						this.c ||
							(super.dispose(),
							this.g.removeOverlayWidget(this),
							this.a.remove(),
							(this.c = !0));
					}
					getId() {
						return "tooltip.editorUiWidget";
					}
					getDomNode() {
						return this.a;
					}
				}
				e.default = m;
			},
		),
		
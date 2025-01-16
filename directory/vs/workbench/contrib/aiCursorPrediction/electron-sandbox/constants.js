define(de[2967], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$afd = e.$_ed = e.$$ed = void 0),
				(e.$$ed = 500),
				(e.$_ed = 0.1),
				(e.$afd = "default");
		}),
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
		define(
			de[1705],
			he([1, 0, 20, 5, 31, 180, 3]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ZZc = void 0),
					(e.$ZZc = (0, i.$Mi)("AIFeedbackOpenService"));
				let d = class extends C.$1c {
					constructor(r, u, a) {
						super(),
							(this.b = r),
							(this.c = u),
							(this.f = a),
							(this.a = "aiFeedback.open.service"),
							(this.popupListeners = []),
							(this.closePopupListeners = []),
							(this.openPopup = () => {
								for (let h of this.popupListeners)
									console.log("listener running in AI feedback open service"),
										h(this.b, this.c, this.f);
							}),
							(this.closePopup = () => {
								for (let h of this.closePopupListeners) h();
							}),
							(this.addPopupListener = (h) => {
								this.popupListeners.push(h);
							}),
							(this.addClosePopupListener = (h) => {
								this.closePopupListeners.push(h);
							});
					}
					dispose() {
						super.dispose();
					}
				};
				(d = Ne([j(0, E.$jEb), j(1, i.$Li), j(2, w.$ek)], d)),
					(0, t.$lK)(e.$ZZc, d, t.InstantiationType.Delayed);
			},
		),
		define(
			de[2969],
			he([1, 0, 58, 27, 11, 43, 1705]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2Zc = e.$1Zc = void 0);
				class d extends w.$3X {
					static {
						this.LABEL = "Cursor: Report Issue";
					}
					constructor() {
						super({
							id: t.$rX,
							title: { value: d.LABEL, original: d.LABEL },
							f1: !0,
							keybinding: {
								primary: (0, i.$os)(i.$ps, i.KeyMod.CtrlCmd | i.KeyCode.KeyG),
								mac: {
									primary: (0, i.$os)(i.$qs, i.KeyMod.CtrlCmd | i.KeyCode.KeyG),
								},
								weight: E.KeybindingWeight.WorkbenchContrib,
							},
						});
					}
					run(u, ...a) {
						u.get(C.$ZZc).openPopup();
					}
				}
				(e.$1Zc = d), (0, w.$4X)(d);
				class m extends w.$3X {
					static {
						this.LABEL = "Cursor: Give Feedback";
					}
					constructor() {
						super({
							id: "cursor.giveFeedback",
							title: { value: m.LABEL, original: m.LABEL },
							f1: !0,
						});
					}
					run(u, ...a) {
						u.get(C.$ZZc).openPopup();
					}
				}
				(e.$2Zc = m), (0, w.$4X)(m);
			},
		),
		
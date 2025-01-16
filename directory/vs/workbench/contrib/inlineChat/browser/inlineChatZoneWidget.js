define(
			de[4081],
			he([
				1, 0, 7, 127, 3, 28, 38, 680, 4, 8, 5, 257, 1357, 19, 491, 98, 10, 34,
				11, 283,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$Yb = void 0),
					(i = mt(i));
				let s = class extends d.$FLb {
					constructor($, v, S, I, T, P) {
						super(v, {
							showFrame: !1,
							showArrow: !1,
							isAccessible: !0,
							className: "inline-chat-widget",
							keepEditorSelection: !0,
							showInHiddenAreas: !0,
							ordinal: 5e4,
						}),
							(this.d = S),
							(this.i = I),
							(this.a = this.o.add(new l(this.editor))),
							(this.b = a.$6Kb.bindTo(T)),
							this.o.add(
								(0, w.$Yc)(() => {
									this.b.reset();
								}),
							),
							(this.widget = this.d.createInstance(h.$0Yb, $, this.editor, {
								statusMenuId: {
									menu: a.$jLb,
									options: {
										buttonConfigProvider: (D, M) => {
											const N = M > 0;
											return new Set([a.$eLb, a.$gLb, a.$hLb]).has(D.id)
												? { isSecondary: N, showIcon: !0, showLabel: !1 }
												: { isSecondary: N };
										},
									},
								},
								secondaryMenuId: a.$kLb,
								chatWidgetViewOptions: {
									menus: {
										executeToolbar: f.$XX.ChatExecute,
										telemetrySource: "interactiveEditorWidget-toolbar",
									},
									rendererOptions: {
										renderTextEditsAsSummary: (D) =>
											(0, c.$gh)(D, v.getModel()?.uri) &&
											P.getValue(a.InlineChatConfigKeys.Mode) ===
												a.EditMode.Live,
									},
								},
							})),
							this.o.add(this.widget);
						let k;
						this.o.add(
							this.widget.chatWidget.onWillMaybeChangeHeight(() => {
								this.position && (k = this.r(this.position));
							}),
						),
							this.o.add(
								this.widget.onDidChangeHeight(() => {
									if (this.position) {
										k ??= this.r(this.position);
										const D = this.m();
										this.F(D.linesValue), k(), (k = void 0);
									}
								}),
							),
							this.create(),
							this.o.add(
								(0, t.$0fb)(
									this.domNode,
									"click",
									(D) => {
										!this.editor.hasWidgetFocus() &&
											!this.widget.hasFocus() &&
											this.editor.focus();
									},
									!0,
								),
							);
						const L = () => {
							!this.position || !this.editor.hasModel()
								? this.b.reset()
								: this.position.lineNumber ===
										this.editor.getPosition().lineNumber
									? this.b.set("above")
									: this.position.lineNumber + 1 ===
											this.editor.getPosition().lineNumber
										? this.b.set("below")
										: this.b.reset();
						};
						this.o.add(this.editor.onDidChangeCursorPosition((D) => L())),
							this.o.add(this.editor.onDidFocusEditorText((D) => L())),
							L();
					}
					C($) {
						$.appendChild(this.widget.domNode);
					}
					E($) {
						const v = this.editor.getLayoutInfo();
						let S = v.contentWidth - (v.glyphMarginWidth + v.decorationsWidth);
						(S = Math.min(640, S)),
							(this.c = new t.$pgb(S, $)),
							this.widget.layout(this.c);
					}
					m() {
						const $ = this.widget.contentHeight,
							v = this.editor.getLayoutInfo().height,
							S = Math.min($, Math.max(this.widget.minHeight, v * 0.42));
						return {
							linesValue: S / this.editor.getOption(C.EditorOption.lineHeight),
							pixelsValue: S,
						};
					}
					D($) {
						this.c && this.E(this.c.height);
					}
					show($) {
						(0, E.$vg)(this.container);
						const v = this.editor.getLayoutInfo(),
							S = v.glyphMarginWidth + v.decorationsWidth + v.lineNumbersWidth;
						this.container.style.marginLeft = `${S}px`;
						const I = this.r($);
						super.show($, this.m().linesValue),
							this.widget.chatWidget.setVisible(!0),
							this.widget.focus(),
							I(),
							this.a.enable();
					}
					updatePositionAndHeight($) {
						const v = this.r($);
						super.updatePositionAndHeight($, this.m().linesValue), v();
					}
					r($) {
						const v = n.$vwb.capture(this.editor),
							S = $.lineNumber <= 1 ? 1 : 1 + $.lineNumber,
							I = this.editor.getScrollTop(),
							P = this.editor.getTopForLineNumber(S) - this.m().pixelsValue;
						return (this.widget.chatWidget.viewModel
							?.getItems()
							.find((L) => (0, b.$$Tb)(L) && L.response.value.length > 0) &&
							P < I) ||
							this.a.didScrollUpOrDown
							? this.a.runIgnored(() => {
									v.restore(this.editor);
								})
							: this.a.runIgnored(() => {
									v.restore(this.editor);
									const L = this.editor.getScrollTop(),
										D = this.editor.getTopForLineNumber(S),
										M = D - this.m().pixelsValue,
										N = this.editor.getLayoutInfo().height,
										A = this.editor.getBottomForLineNumber(S);
									let R = M,
										O = !1;
									A >= L + N && ((R = A - N), (O = !0)),
										(R < L || O) &&
											(this.i.trace("[IE] REVEAL zone", {
												zoneTop: M,
												lineTop: D,
												lineBottom: A,
												scrollTop: L,
												newScrollTop: R,
												forceScrollTop: O,
											}),
											this.editor.setScrollTop(R, g.ScrollType.Immediate));
								});
					}
					A($, v) {}
					t($) {
						return $.width - $.minimap.minimapWidth;
					}
					hide() {
						const $ = n.$vwb.capture(this.editor);
						this.a.disable(),
							this.b.reset(),
							this.widget.reset(),
							this.widget.chatWidget.setVisible(!1),
							super.hide(),
							i.$pib((0, m.localize)(7108, null)),
							$.restore(this.editor);
					}
				};
				(e.$$Yb = s),
					(e.$$Yb = s =
						Ne([j(2, u.$Li), j(3, o.$ik), j(4, r.$6j), j(5, p.$gj)], s));
				class l {
					constructor($) {
						(this.d = $), (this.b = !1), (this.c = new w.$2c());
					}
					dispose() {
						this.c.dispose();
					}
					enable() {
						(this.a = void 0),
							(this.c.value = this.d.onDidScrollChange(($) => {
								!$.scrollTopChanged ||
									this.b ||
									(this.c.clear(), (this.a = !0));
							}));
					}
					disable() {
						this.c.clear(), (this.a = void 0);
					}
					runIgnored($) {
						return () => {
							this.b = !0;
							try {
								return $();
							} finally {
								this.b = !1;
							}
						};
					}
					get didScrollUpOrDown() {
						return this.a;
					}
				}
			},
		),
		
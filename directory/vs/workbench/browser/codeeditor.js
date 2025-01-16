define(
			de[824],
			he([1, 0, 6, 3, 19, 56, 281, 38, 248, 64, 122, 1676, 11, 8, 5, 39, 18]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				var o;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$w4b = e.$v4b = e.$u4b = void 0);
				let f = class extends i.$1c {
					static {
						o = this;
					}
					constructor(y) {
						super(),
							(this.g = y),
							(this.a = this.D(new t.$re())),
							(this.onHighlightRemoved = this.a.event),
							(this.b = null),
							(this.c = null),
							(this.f = this.D(new i.$Zc()));
					}
					removeHighlightRange() {
						if (this.c && this.b) {
							const y = this.b;
							this.c.changeDecorations(($) => {
								$.removeDecoration(y);
							}),
								this.a.fire();
						}
						this.b = null;
					}
					highlightRange(y, $) {
						($ = $ ?? this.j(y)),
							(0, E.$0sb)($)
								? this.h($, y)
								: (0, E.$atb)($) &&
									(0, E.$0sb)($.activeCodeEditor) &&
									this.h($.activeCodeEditor, y);
					}
					h(y, $) {
						this.removeHighlightRange(),
							y.changeDecorations((v) => {
								this.b = v.addDecoration($.range, this.r($.isWholeLine));
							}),
							this.m(y);
					}
					j(y) {
						const $ = this.g.activeEditor?.resource;
						if (
							$ &&
							(0, w.$gh)($, y.resource) &&
							(0, E.$0sb)(this.g.activeTextEditorControl)
						)
							return this.g.activeTextEditorControl;
					}
					m(y) {
						this.c !== y &&
							(this.f.clear(),
							(this.c = y),
							this.f.add(
								this.c.onDidChangeCursorPosition(($) => {
									($.reason === m.CursorChangeReason.NotSet ||
										$.reason === m.CursorChangeReason.Explicit ||
										$.reason === m.CursorChangeReason.Undo ||
										$.reason === m.CursorChangeReason.Redo) &&
										this.removeHighlightRange();
								}),
							),
							this.f.add(
								this.c.onDidChangeModel(() => {
									this.removeHighlightRange();
								}),
							),
							this.f.add(
								this.c.onDidDispose(() => {
									this.removeHighlightRange(), (this.c = null);
								}),
							));
					}
					static {
						this.n = u.$eY.register({
							description: "codeeditor-range-highlight-whole",
							stickiness: r.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							className: "rangeHighlight",
							isWholeLine: !0,
						});
					}
					static {
						this.q = u.$eY.register({
							description: "codeeditor-range-highlight",
							stickiness: r.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							className: "rangeHighlight",
						});
					}
					r(y = !0) {
						return y ? o.n : o.q;
					}
					dispose() {
						super.dispose(),
							this.c?.getModel() &&
								(this.removeHighlightRange(), (this.c = null));
					}
				};
				(e.$u4b = f), (e.$u4b = f = o = Ne([j(0, p.$IY)], f));
				let b = class extends a.$r4b {
					constructor(y, $, v, S) {
						super(
							v && S.lookupKeybinding(v)
								? `${$} (${S.lookupKeybinding(v).getLabel()})`
								: $,
						),
							(this.g = y);
					}
					getId() {
						return "editor.overlayWidget.floatingClickWidget";
					}
					getPosition() {
						return {
							preference: E.OverlayWidgetPositionPreference.BOTTOM_RIGHT_CORNER,
						};
					}
					render() {
						super.render(), this.g.addOverlayWidget(this);
					}
					dispose() {
						this.g.removeOverlayWidget(this), super.dispose();
					}
				};
				(e.$v4b = b), (e.$v4b = b = Ne([j(3, g.$uZ)], b));
				let s = class extends a.$s4b {
					static {
						this.ID = "editor.contrib.floatingClickMenu";
					}
					constructor(y, $, v, S) {
						super(h.$XX.EditorContent, v, S),
							(this.m = y),
							(this.n = $),
							this.f();
					}
					g(y) {
						return this.n.createInstance(b, this.m, y.label, y.id);
					}
					j() {
						return (
							!(this.m instanceof C.$wDb) &&
							this.m?.hasModel() &&
							!this.m.getOption(d.EditorOption.inDiffEditor)
						);
					}
					h() {
						return this.m.getModel()?.uri;
					}
				};
				(e.$w4b = s),
					(e.$w4b = s = Ne([j(1, n.$Li), j(2, h.$YX), j(3, c.$6j)], s));
			},
		),
		
define(
			de[1185],
			he([1, 0, 7, 433, 3, 77, 319, 542, 38]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ujc = void 0);
				class r extends w.$1c {
					static get(h) {
						return h.getContribution(r.ID);
					}
					static {
						this.ID = "editor.contrib.placeholderText";
					}
					constructor(h) {
						super(),
							(this.j = h),
							(this.a = (0, d.$Uwb)(this.j)),
							(this.b = this.a.getOption(m.EditorOption.placeholder)),
							(this.c = (0, E.derivedOpts)(
								{ owner: this, equalsFn: i.$ed },
								(c) => {
									const n = this.b.read(c);
									if (n && this.a.valueIsEmpty.read(c))
										return { placeholder: n };
								},
							)),
							(this.f = u(this, (c) => this.c.read(c)?.placeholder !== void 0)),
							(this.g = (0, C.$Xd)((c, n) => {
								if (!this.f.read(c)) return;
								const g = (0, t.h)("div.editorPlaceholder");
								n.add(
									(0, E.autorun)((p) => {
										const o = this.c.read(p),
											f = o?.placeholder !== void 0;
										(g.root.style.display = f ? "block" : "none"),
											(g.root.innerText = o?.placeholder ?? "");
									}),
								),
									n.add(
										(0, E.autorun)((p) => {
											const o = this.a.layoutInfo.read(p);
											(g.root.style.left = `${o.contentLeft}px`),
												(g.root.style.width =
													o.contentWidth - o.verticalScrollbarWidth + "px"),
												(g.root.style.top = `${this.j.getTopForLineNumber(0)}px`);
										}),
									),
									n.add(
										(0, E.autorun)((p) => {
											(g.root.style.fontFamily = this.a
												.getOption(m.EditorOption.fontFamily)
												.read(p)),
												(g.root.style.fontSize =
													this.a.getOption(m.EditorOption.fontSize).read(p) +
													"px"),
												(g.root.style.lineHeight =
													this.a.getOption(m.EditorOption.lineHeight).read(p) +
													"px");
										}),
									),
									n.add(
										this.a.createOverlayWidget({
											allowEditorOverflow: !1,
											minContentWidthInPx: (0, E.constObservable)(0),
											position: (0, E.constObservable)(null),
											domNode: g.root,
										}),
									);
							})),
							this.g.recomputeInitiallyAndOnChange(this.B);
					}
				}
				e.$Ujc = r;
				function u(a, h) {
					return (0, E.derivedObservableWithCache)(a, (c, n) =>
						n === !0 ? !0 : h(c),
					);
				}
			},
		),
		
define(de[4261], he([1, 0, 2, 36, 4258]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$3zc = void 0);
			const E = (C, d, m, r, u) =>
				(0, i.$ndc)(
					() =>
						(0, t.createComponent)(w.$2zc, {
							bugbot: m,
							get onClose() {
								return u?.onClose;
							},
							delegate: r,
						}),
					C,
					d,
					{ onClose: u?.onClose },
				);
			e.$3zc = E;
		}),
		define(
			de[4262],
			he([1, 0, 217, 32, 35, 21, 5, 4261]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				var m;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$4zc = void 0);
				let r = class extends t.$JEb {
					static {
						m = this;
					}
					static {
						this.ID = "bugbotEditor";
					}
					constructor(a, h, c, n, g) {
						super(m.ID, a, h, c, n), (this.b = g);
					}
					Y(a) {}
					async setInput(a, h, c, n) {
						await super.setInput(a, h, c, n), this.a && this.a.dispose();
						const g = this.getContainer();
						g &&
							((g.tabIndex = 0),
							g.setAttribute("role", "document"),
							(g.style.outline = "none"),
							(this.a = (0, d.$3zc)(g, this.b, a.bugbot, this, {
								onClose: () => {
									this.group.closeEditor(this.input);
								},
							})));
					}
					clearInput() {
						super.clearInput(), this.a?.dispose(), (this.a = void 0);
					}
					layout(a) {}
					focus() {
						super.focus();
						const a = this.getContainer();
						a && a.focus();
					}
					dispose() {
						this.a?.dispose(), (this.a = void 0), super.dispose();
					}
				};
				(e.$4zc = r),
					(e.$4zc =
						r =
						m =
							Ne([j(1, i.$km), j(2, w.$iP), j(3, E.$lq), j(4, C.$Li)], r));
			},
		),
		define(
			de[4263],
			he([1, 0, 30, 192, 1719, 4262, 102, 44]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					t.$Io
						.as(d.$a1.EditorPane)
						.registerEditorPane(
							i.$vVb.create(E.$4zc, E.$4zc.ID, "Bug Bot Report"),
							[new C.$Ji(w.$jzc)],
						),
					t.$Io
						.as(d.$a1.EditorFactory)
						.registerEditorSerializer(w.$jzc.TypeID, w.$kzc);
			},
		),
		
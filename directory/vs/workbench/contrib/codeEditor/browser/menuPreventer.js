define(de[394], he([1, 0, 27, 3, 46]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$_Xb = void 0);
			class E extends i.$1c {
				static {
					this.ID = "editor.contrib.menuPreventer";
				}
				constructor(d) {
					super(),
						(this.a = d),
						(this.b = !1),
						(this.c = !1),
						this.D(
							this.a.onMouseDown((m) => {
								this.b && (this.c = !0);
							}),
						),
						this.D(
							this.a.onKeyDown((m) => {
								m.equals(t.KeyMod.Alt) &&
									(this.b || (this.c = !1), (this.b = !0));
							}),
						),
						this.D(
							this.a.onKeyUp((m) => {
								m.equals(t.KeyMod.Alt) &&
									(this.c && m.preventDefault(), (this.b = !1), (this.c = !1));
							}),
						);
				}
			}
			(e.$_Xb = E),
				(0, w.$qtb)(
					E.ID,
					E,
					w.EditorContributionInstantiation.BeforeFirstInteraction,
				);
		}),
		define(
			de[3020],
			he([1, 0, 46, 65, 8, 5, 31, 394, 375, 35, 40, 91, 152, 69, 308, 206]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$vZc = e.$uZc = e.$tZc = void 0),
					(e.$tZc = new w.$5j("commentEditorFocused", !1)),
					(e.$uZc = 10);
				let p = class extends g.$rwb {
					constructor(f, b, s, l, y, $, v, S, I, T, P, k) {
						const L = {
							isSimpleWidget: !0,
							contributions:
								t.EditorExtensionsRegistry.getSomeEditorContributions([
									d.$_Xb.ID,
									m.$2Mb.ID,
								]),
						};
						super(f, b, L, s, l, y, $, v, S, I, T, P, k);
					}
					$() {
						return t.EditorExtensionsRegistry.getEditorActions();
					}
					static getEditorOptions(f) {
						return {
							wordWrap: "off",
							glyphMargin: !1,
							fontFamily: f.getValue("editor.fontFamily"),
							scrollbar: {
								vertical: "hidden",
								horizontal: "auto",
								verticalScrollbarSize: 0,
								handleMouseWheel: !0,
								alwaysConsumeMouseWheel: !1,
								useShadows: !0,
								verticalHasArrows: !1,
								horizontalHasArrows: !1,
								horizontalScrollbarSize: e.$uZc,
							},
							scrollBeyondLastLine: !1,
							renderLineHighlight: "none",
							renderWhitespace: "none",
							minimap: { enabled: !1 },
							quickSuggestions: !1,
							automaticLayout: !1,
							automaticLayoutIgnoreHeight: !0,
							guides: { indentation: !1 },
						};
					}
				};
				(e.$vZc = p),
					(e.$vZc = p =
						Ne(
							[
								j(2, E.$Li),
								j(3, i.$dtb),
								j(4, C.$ek),
								j(5, w.$6j),
								j(6, r.$iP),
								j(7, u.$4N),
								j(8, a.$XK),
								j(9, h.$aN),
								j(10, c.$k3),
								j(11, n.$5X),
							],
							p,
						));
			},
		),
		
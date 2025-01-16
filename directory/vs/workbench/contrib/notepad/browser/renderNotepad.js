define(de[4328], he([1, 0, 2, 36, 4327]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$mAc = E);
			function E(C, d, m, r) {
				return (0, i.$ndc)(
					() =>
						(0, t.createComponent)(w.$lAc, {
							notepadId: C,
							get onEscape() {
								return r.isInEditor ? void 0 : r.onClose;
							},
							get isInEditor() {
								return r.isInEditor;
							},
							get setEditor() {
								return r.setEditor;
							},
						}),
					d,
					m,
				);
			}
		}),
		define(
			de[4329],
			he([1, 0, 217, 32, 35, 21, 5, 4328, 45]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				var r;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nAc = void 0);
				let u = class extends t.$JEb {
					static {
						r = this;
					}
					static {
						this.ID = "notepadEditor";
					}
					constructor(h, c, n, g, p, o) {
						super(r.ID, h, c, n, g), (this.c = p), (this.f = o);
					}
					Y(h) {}
					async setInput(h, c, n, g) {
						await super.setInput(h, c, n, g);
						const p = h.notepad;
						this.j && this.j.dispose(),
							(this.j = this.f.onChangeEffectManuallyDisposed({
								deps: [() => p.name],
								onChange: () => {
									h.setName(p.name);
								},
							})),
							this.a && this.a.dispose(),
							this.b && (this.b.dispose(), (this.b = void 0));
						const o = this.getContainer();
						o &&
							(this.a = (0, d.$mAc)(p.id, o, this.c, {
								isInEditor: !0,
								setEditor: (f) => (f ? (this.b = f) : (this.b = void 0)),
								onClose: () => {
									this.group.closeEditor(this.input);
								},
							}));
					}
					layout(h) {}
					focus() {
						this.b?.focus();
					}
					dispose() {
						this.a?.dispose(), super.dispose();
					}
				};
				(e.$nAc = u),
					(e.$nAc =
						u =
						r =
							Ne(
								[
									j(1, i.$km),
									j(2, w.$iP),
									j(3, E.$lq),
									j(4, C.$Li),
									j(5, m.$0zb),
								],
								u,
							));
			},
		),
		define(
			de[4330],
			he([
				1, 0, 30, 192, 1744, 4329, 102, 44, 60, 864, 79, 4, 14, 4027, 558, 8,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$yAc = void 0),
					t.$Io
						.as(d.$a1.EditorPane)
						.registerEditorPane(
							i.$vVb.create(E.$nAc, E.$nAc.ID, "Notepad Editor"),
							[new C.$Ji(w.$6zc)],
						),
					t.$Io
						.as(d.$a1.EditorFactory)
						.registerEditorSerializer(w.$6zc.TypeID, w.$7zc);
				const p = (0, u.$$O)(
					"timeline-view-icon",
					h.$ak.history,
					(0, a.localize)(8236, null),
				);
				class o {
					constructor() {
						(this.id = n.$B9b),
							(this.name = { value: "Notepads", original: "Notepads" }),
							(this.containerIcon = p),
							(this.ctorDescriptor = new C.$Ji(c.$xAc)),
							(this.order = 2),
							(this.weight = 30),
							(this.collapsed = !0),
							(this.canToggleVisibility = !1),
							(this.hideByDefault = !0),
							(this.canMoveView = !0),
							(this.when = g.$Kj.equals("notepadIsEnabled", !0)),
							(this.focusCommand = { id: "notepad.focus" });
					}
				}
				(e.$yAc = o),
					t.$Io.as(m.Extensions.ViewsRegistry).registerViews([new o()], r.$sAc);
			},
		),
		
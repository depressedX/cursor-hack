define(
			de[2806],
			he([1, 0, 27, 46, 8, 43, 33, 273, 5, 20, 4]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Lzb = void 0);
				const a = (0, m.$Mi)("IEditorCancelService"),
					h = new w.$5j(
						"cancellableOperation",
						!1,
						(0, u.localize)(1003, null),
					);
				(0, r.$lK)(
					a,
					class {
						constructor() {
							this.a = new WeakMap();
						}
						add(n, g) {
							let p = this.a.get(n);
							p ||
								((p = n.invokeWithinContext((f) => {
									const b = h.bindTo(f.get(w.$6j)),
										s = new d.$$c();
									return { key: b, tokens: s };
								})),
								this.a.set(n, p));
							let o;
							return (
								p.key.set(!0),
								(o = p.tokens.push(g)),
								() => {
									o && (o(), p.key.set(!p.tokens.isEmpty()), (o = void 0));
								}
							);
						}
						cancel(n) {
							const g = this.a.get(n);
							if (!g) return;
							const p = g.tokens.pop();
							p && (p.cancel(), g.key.set(!g.tokens.isEmpty()));
						}
					},
					r.InstantiationType.Delayed,
				);
				class c extends C.$Ce {
					constructor(g, p) {
						super(p),
							(this.editor = g),
							(this.a = g.invokeWithinContext((o) => o.get(a).add(g, this)));
					}
					dispose() {
						this.a(), super.dispose();
					}
				}
				(e.$Lzb = c),
					(0, i.$mtb)(
						new (class extends i.$htb {
							constructor() {
								super({
									id: "editor.cancelOperation",
									kbOpts: {
										weight: E.KeybindingWeight.EditorContrib,
										primary: t.KeyCode.Escape,
									},
									precondition: h,
								});
							}
							runEditorCommand(n, g) {
								n.get(a).cancel(g);
							}
						})(),
					);
			},
		),
		
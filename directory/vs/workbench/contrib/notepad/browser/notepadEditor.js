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
		
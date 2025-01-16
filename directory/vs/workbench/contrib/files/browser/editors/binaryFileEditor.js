define(
			de[3864],
			he([1, 0, 4, 1336, 32, 35, 844, 220, 21, 116, 231, 44, 296]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				var c;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2Mc = void 0);
				let n = class extends i.$puc {
					static {
						c = this;
					}
					static {
						this.ID = d.$RUb;
					}
					constructor(p, o, f, b, s) {
						super(c.ID, p, { openInternal: (l, y) => this.gb(l, y) }, o, f, s),
							(this.fb = b);
					}
					async gb(p, o) {
						if (p instanceof C.$nec && this.group.activeEditor) {
							const f = this.group.activeEditor,
								b = f?.toUntyped();
							if (!b) return;
							let s = await this.fb.resolveEditor(
								{ ...b, options: { ...o, override: r.EditorResolution.PICK } },
								this.group,
							);
							if (s === u.ResolvedStatus.NONE) s = void 0;
							else if (s === u.ResolvedStatus.ABORT) return;
							if ((0, a.$v1)(s))
								for (const l of s.editor instanceof h.$GVb
									? [s.editor.original, s.editor.modified]
									: [s.editor])
									l instanceof C.$nec &&
										(l.setForceOpenAsText(), l.setPreferredLanguageId(d.$SUb));
							await this.group.replaceEditors([
								{
									editor: f,
									replacement: s?.editor ?? p,
									options: { ...(s?.options ?? o) },
								},
							]);
						}
					}
					getTitle() {
						return this.input
							? this.input.getName()
							: (0, t.localize)(6654, null);
					}
				};
				(e.$2Mc = n),
					(e.$2Mc =
						n =
						c =
							Ne([j(1, w.$km), j(2, E.$iP), j(3, u.$E6), j(4, m.$lq)], n));
			},
		),
		
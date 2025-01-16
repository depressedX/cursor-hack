define(
			de[2812],
			he([1, 0, 94, 3, 46, 38, 2696, 440, 4]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$mlc = void 0),
					(m = mt(m));
				class r extends i.$1c {
					static {
						this.ID = "editor.contrib.readOnlyMessageController";
					}
					constructor(a) {
						super(),
							(this.a = a),
							this.D(this.a.onDidAttemptReadOnlyEdit(() => this.b()));
					}
					b() {
						const a = d.$Szb.get(this.a);
						if (a && this.a.hasModel()) {
							let h = this.a.getOptions().get(E.EditorOption.readOnlyMessage);
							h ||
								((0, C.$jlc)(this.a.getModel().uri).ok() &&
									(h = new t.$cl(m.localize(1399, null))),
								this.a.isSimpleWidget
									? (h = new t.$cl(m.localize(1400, null)))
									: (h = new t.$cl(m.localize(1401, null)))),
								a.showMessage(h, this.a.getPosition());
						}
					}
				}
				(e.$mlc = r),
					(0, w.$qtb)(
						r.ID,
						r,
						w.EditorContributionInstantiation.BeforeFirstInteraction,
					);
			},
		),
		
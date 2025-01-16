define(
			de[3415],
			he([1, 0, 29, 3, 65, 588, 5, 55]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let m = class extends i.$1c {
					static {
						this.ID = "workbench.contrib.editorFeaturesInstantiator";
					}
					constructor(u, a) {
						super(),
							(this.b = a),
							(this.a = !1),
							this.D(u.onWillCreateCodeEditor(() => this.c())),
							this.D(u.onWillCreateDiffEditor(() => this.c())),
							(u.listCodeEditors().length > 0 ||
								u.listDiffEditors().length > 0) &&
								this.c();
					}
					c() {
						if (this.a) return;
						this.a = !0;
						const u = (0, E.$TBb)();
						for (const a of u)
							try {
								const h = this.b.createInstance(a);
								typeof h.dispose == "function" && this.D(h);
							} catch (h) {
								(0, t.$4)(h);
							}
					}
				};
				(m = Ne([j(0, w.$dtb), j(1, C.$Li)], m)),
					(0, d.$s6)(m.ID, m, d.WorkbenchPhase.BlockRestore);
			},
		),
		
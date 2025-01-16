define(
			de[3352],
			he([1, 0, 3, 172, 88, 101, 1245]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Rpc = void 0);
				let d = class {
					constructor(r, u) {
						(this.b = new t.$Zc()),
							(this.a = r.getProxy(w.$mbb.ExtHostInteractive)),
							this.b.add(
								u.onWillAddInteractiveDocument((a) => {
									this.a.$willAddInteractiveDocument(
										a.inputUri,
										`
`,
										i.$0M,
										a.notebookUri,
									);
								}),
							),
							this.b.add(
								u.onWillRemoveInteractiveDocument((a) => {
									this.a.$willRemoveInteractiveDocument(
										a.inputUri,
										a.notebookUri,
									);
								}),
							);
					}
					dispose() {
						this.b.dispose();
					}
				};
				(e.$Rpc = d),
					(e.$Rpc = d =
						Ne([(0, E.$tmc)(w.$lbb.MainThreadInteractive), j(1, C.$unc)], d));
			},
		),
		
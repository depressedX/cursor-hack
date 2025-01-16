define(
			de[3360],
			he([1, 0, 3, 88, 101, 1255]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Hpc = void 0);
				let C = class extends t.$1c {
					constructor(m, r) {
						super(),
							(this.b = r),
							(this.a = m.getProxy(i.$mbb.ExtHostNotebookRenderers)),
							this.D(
								r.onShouldPostMessage((u) => {
									this.a.$postRendererMessage(
										u.editorId,
										u.rendererId,
										u.message,
									);
								}),
							);
					}
					$postMessage(m, r, u) {
						return this.b.receiveMessage(m, r, u);
					}
				};
				(e.$Hpc = C),
					(e.$Hpc = C =
						Ne(
							[(0, w.$tmc)(i.$lbb.MainThreadNotebookRenderers), j(1, E.$Q2b)],
							C,
						));
			},
		),
		
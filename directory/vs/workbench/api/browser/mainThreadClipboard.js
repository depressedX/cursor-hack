define(
			de[3340],
			he([1, 0, 101, 88, 121, 308]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Pmc = void 0);
				let C = class {
					constructor(m, r, u) {
						(this.a = r), (this.b = u);
					}
					dispose() {}
					$readText() {
						return this.a.readText();
					}
					$writeText(m) {
						return (
							this.b.registerEvent("editor.copy.vim_mode"), this.a.writeText(m)
						);
					}
				};
				(e.$Pmc = C),
					(e.$Pmc = C =
						Ne(
							[
								(0, t.$tmc)(i.$lbb.MainThreadClipboard),
								j(1, w.$Vxb),
								j(2, E.$5X),
							],
							C,
						));
			},
		),
		
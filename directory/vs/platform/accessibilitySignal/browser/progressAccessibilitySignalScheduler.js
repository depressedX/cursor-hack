define(de[1650], he([1, 0, 15, 3, 184]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$LIc = void 0);
			const E = 5e3;
			let C = class extends i.$1c {
				constructor(m, r, u) {
					super(),
						(this.c = u),
						(this.a = new t.$Yh(() => {
							this.b = this.c.playSignalLoop(w.$Twb.progress, r ?? E);
						}, m)),
						this.a.schedule();
				}
				dispose() {
					super.dispose(), this.b?.dispose(), this.a.dispose();
				}
			};
			(e.$LIc = C), (e.$LIc = C = Ne([j(2, w.$Owb)], C));
		}),
		
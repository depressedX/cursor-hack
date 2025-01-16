define(de[3049], he([1, 0, 8]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$LQc = void 0);
			let i = class {
				constructor(E, C) {
					(this.b = E),
						(this.c = C),
						(this.a =
							typeof E.when == "string" ? t.$Kj.deserialize(E.when) : void 0);
				}
				get language() {
					return this.b.language;
				}
				get enabled() {
					return !this.a || this.c.contextMatchesRules(this.a);
				}
			};
			(e.$LQc = i), (e.$LQc = i = Ne([j(1, t.$6j)], i));
		}),
		
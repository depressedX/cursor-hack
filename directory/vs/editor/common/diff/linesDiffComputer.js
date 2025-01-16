define(de[1147], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$FL = e.$EL = void 0);
			class t {
				constructor(E, C, d) {
					(this.changes = E), (this.moves = C), (this.hitTimeout = d);
				}
			}
			e.$EL = t;
			class i {
				constructor(E, C) {
					(this.lineRangeMapping = E), (this.changes = C);
				}
				flip() {
					return new i(
						this.lineRangeMapping.flip(),
						this.changes.map((E) => E.flip()),
					);
				}
			}
			e.$FL = i;
		}),
		
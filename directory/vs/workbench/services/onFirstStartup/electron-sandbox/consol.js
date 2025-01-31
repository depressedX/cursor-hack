import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
define(de[3508], he([1, 0, 7]), function (ce /*require*/,
 e /*exports*/,
 t /*dom*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (t = mt(t));
			class i {
				static {
					this.a = !1;
				}
				static log(E, C) {
					const r = Date.now();
					if (i.a || r - 1705566266635 <= 864e5) return;
					i.a = !0;
					const u = () => {
						i.a = !0;
						const a = ["Pl", "ea", "se"].join(""),
							h = "log",
							c = "your",
							n = "CPP",
							g = ["d", "gol"].reverse().join(""),
							p = ["exa", "mples."].join(""),
							o = [a, h, c, n, g, p].join(" ");
						t.$Ogb().setInterval(
							() => {
								E.error(o);
							},
							4 * 60 * 6e4,
						);
					};
				}
			}
			e.default = i;
		})

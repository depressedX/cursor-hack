import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/filters.js';
import '../../../../base/common/glob.js';
import '../../../../base/browser/ui/tree/tree.js';
import '../common/replModel.js';
import '../common/debugModel.js';
define(
			de[3686],
			he([1, 0, 132, 215, 264, 843, 300]),
			function (ce /*require*/,
 e /*exports*/,
 t /*filters*/,
 i /*glob*/,
 w /*tree*/,
 E /*replModel*/,
 C /*debugModel*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$AJc = void 0);
				class d {
					constructor() {
						this.a = [];
					}
					static {
						this.matchQuery = t.$Zk;
					}
					set filterQuery(r) {
						if (((this.a = []), (r = r.trim()), r && r !== "")) {
							const u = (0, i.$Hk)(r, ",")
								.map((a) => a.trim())
								.filter((a) => !!a.length);
							for (const a of u)
								a.startsWith("\\")
									? this.a.push({ type: "include", query: a.slice(1) })
									: a.startsWith("!")
										? this.a.push({ type: "exclude", query: a.slice(1) })
										: this.a.push({ type: "include", query: a });
						}
					}
					filter(r, u) {
						if (
							r instanceof E.$$Hc ||
							r instanceof E.$_Hc ||
							r instanceof C.$K3
						)
							return w.TreeVisibility.Visible;
						let a = !1,
							h = !1;
						const c = r.toString(!0);
						for (const { type: n, query: g } of this.a) {
							if (n === "exclude" && d.matchQuery(g, c)) return !1;
							n === "include" && ((a = !0), d.matchQuery(g, c) && (h = !0));
						}
						return a ? h : typeof u < "u" ? u : w.TreeVisibility.Visible;
					}
				}
				e.$AJc = d;
			},
		),
		
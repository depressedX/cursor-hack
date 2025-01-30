import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/hover/hoverDelegateFactory.js';
import '../../../../base/common/date.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/platform.js';
import '../common/commentsConfiguration.js';
define(
			de[1726],
			he([1, 0, 7, 95, 275, 3, 12, 791]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*hoverDelegateFactory*/,
 w /*date*/,
 E /*lifecycle*/,
 C /*platform*/,
 d /*commentsConfiguration*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$r3b = void 0),
					(t = mt(t));
				class m extends E.$1c {
					constructor(u, a, h, c) {
						super(),
							(this.g = u),
							(this.a = t.$fhb(h, t.$("span.timestamp"))),
							(this.a.style.display = "none"),
							(this.c = this.h),
							(this.f = this.D(
								a.setupManagedHover((0, i.$cib)("mouse"), this.a, ""),
							)),
							this.setTimestamp(c);
					}
					get h() {
						return this.g.getValue(d.$32b).useRelativeTime;
					}
					async setTimestamp(u) {
						(u !== this.b || this.h !== this.c) && this.j(u),
							(this.b = u),
							(this.c = this.h);
					}
					j(u) {
						if (!u) (this.a.textContent = ""), (this.a.style.display = "none");
						else if (u !== this.b || this.h !== this.c) {
							this.a.style.display = "";
							let a, h;
							this.h ? ((a = this.m(u)), (h = this.n(u))) : (a = this.n(u)),
								(this.a.textContent = a),
								this.f.update(h ?? "");
						}
					}
					m(u) {
						return (0, w.$dn)(u, !0, !0);
					}
					n(u) {
						return u.toLocaleString(C.$z);
					}
				}
				e.$r3b = m;
			},
		),
		
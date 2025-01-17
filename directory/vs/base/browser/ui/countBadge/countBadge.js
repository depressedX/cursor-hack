import '../../../../../require.js';
import '../../../../../exports.js';
import '../../dom.js';
import '../../../common/strings.js';
import '../../../../css!vs/base/browser/ui/countBadge/countBadge.js';
define(de[495], he([1, 0, 7, 37, 2237]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Hob = e.$Gob = void 0),
				(e.$Gob = {
					badgeBackground: "#4D4D4D",
					badgeForeground: "#FFFFFF",
					badgeBorder: void 0,
				});
			class w {
				constructor(C, d, m) {
					(this.e = d),
						(this.f = m),
						(this.b = 0),
						(this.a = (0, t.$fhb)(C, (0, t.$)(".monaco-count-badge"))),
						(this.c = this.e.countFormat || "{0}"),
						(this.d = this.e.titleFormat || ""),
						this.setCount(this.e.count || 0);
				}
				setCount(C) {
					(this.b = C), this.g();
				}
				setCountFormat(C) {
					(this.c = C), this.g();
				}
				setTitleFormat(C) {
					(this.d = C), this.g();
				}
				g() {
					(this.a.textContent = (0, i.$kf)(this.c, this.b)),
						(this.a.title = (0, i.$kf)(this.d, this.b)),
						(this.a.style.backgroundColor = this.f.badgeBackground ?? ""),
						(this.a.style.color = this.f.badgeForeground ?? ""),
						this.f.badgeBorder &&
							(this.a.style.border = `1px solid ${this.f.badgeBorder}`);
				}
			}
			e.$Hob = w;
		}),
		
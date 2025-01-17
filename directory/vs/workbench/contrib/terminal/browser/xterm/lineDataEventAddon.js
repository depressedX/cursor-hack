import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/platform.js';
define(de[3147], he([1, 0, 6, 3, 12]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$9Uc = void 0);
			class E extends i.$1c {
				constructor(d) {
					super(),
						(this.f = d),
						(this.b = !1),
						(this.c = this.D(new t.$re())),
						(this.onLineData = this.c.event);
				}
				async activate(d) {
					this.a = d;
					const m = d.buffer;
					await this.f,
						this.D(
							d.onLineFeed(() => {
								const r = m.active.getLine(m.active.baseY + m.active.cursorY);
								r &&
									!r.isWrapped &&
									this.g(m.active, m.active.baseY + m.active.cursorY - 1);
							}),
						),
						this.D(
							(0, i.$Yc)(() => {
								this.g(m.active, m.active.baseY + m.active.cursorY);
							}),
						);
				}
				setOperatingSystem(d) {
					if (
						!(this.b || !this.a) &&
						((this.b = !0), d === w.OperatingSystem.Windows)
					) {
						const m = this.a;
						this.D(
							m.parser.registerCsiHandler({ final: "H" }, () => {
								const r = m.buffer;
								return this.g(r.active, r.active.baseY + r.active.cursorY), !1;
							}),
						);
					}
				}
				g(d, m) {
					let r = d.getLine(m);
					if (!r) return;
					let u = r.translateToString(!0);
					for (; m > 0 && r.isWrapped && ((r = d.getLine(--m)), !!r); )
						u = r.translateToString(!1) + u;
					this.c.fire(u);
				}
			}
			e.$9Uc = E;
		}),
		
import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/common/collections.js';
import '../../../../../../base/common/event.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../../base/common/types.js';
import '../../../common/notebookRange.js';
define(
			de[1742],
			he([1, 0, 456, 6, 3, 28, 442]),
			function (ce /*require*/,
 e /*exports*/,
 t /*collections*/,
 i /*event*/,
 w /*lifecycle*/,
 E /*types*/,
 C /*notebookRange*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1Fc = void 0);
				class d extends w.$1c {
					get visibleCells() {
						return this.c;
					}
					constructor(r) {
						super(),
							(this.f = r),
							(this.a = this.D(new i.$re())),
							(this.onDidChangeVisibleCells = this.a.event),
							(this.b = this.D(new w.$Zc())),
							(this.c = []),
							this.D(this.f.onDidChangeVisibleRanges(this.j, this)),
							this.D(this.f.onDidChangeModel(this.g, this)),
							this.j();
					}
					g() {
						this.b.clear(),
							this.f.hasModel() &&
								this.b.add(this.f.onDidChangeViewCells(() => this.h())),
							this.h();
					}
					h() {
						this.a.fire({ added: [], removed: Array.from(this.c) }),
							(this.c = []),
							this.j();
					}
					j() {
						if (!this.f.hasModel()) return;
						const r = (0, C.$j6)(this.f.visibleRanges)
								.map((g) => this.f.cellAt(g))
								.filter(E.$tg),
							u = new Set(r.map((g) => g.handle)),
							a = new Set(this.c.map((g) => g.handle)),
							h = (0, t.$f)(a, u),
							c = h.added.map((g) => this.f.getCellByHandle(g)).filter(E.$tg),
							n = h.removed.map((g) => this.f.getCellByHandle(g)).filter(E.$tg);
						(this.c = r), this.a.fire({ added: c, removed: n });
					}
				}
				e.$1Fc = d;
			},
		)

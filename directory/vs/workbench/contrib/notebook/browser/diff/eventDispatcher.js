import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
define(de[1254], he([1, 0, 6, 3]), function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$MEc = e.$LEc = e.$KEc = e.NotebookDiffViewEventType = void 0);
			var w;
			(function (m) {
				(m[(m.LayoutChanged = 1)] = "LayoutChanged"),
					(m[(m.CellLayoutChanged = 2)] = "CellLayoutChanged");
			})(w || (e.NotebookDiffViewEventType = w = {}));
			class E {
				constructor(r, u) {
					(this.source = r), (this.value = u), (this.type = w.LayoutChanged);
				}
			}
			e.$KEc = E;
			class C {
				constructor(r) {
					(this.source = r), (this.type = w.CellLayoutChanged);
				}
			}
			e.$LEc = C;
			class d extends i.$1c {
				constructor() {
					super(...arguments),
						(this.a = this.D(new t.$re())),
						(this.onDidChangeLayout = this.a.event),
						(this.b = this.D(new t.$re())),
						(this.onDidChangeCellLayout = this.b.event);
				}
				emit(r) {
					for (let u = 0, a = r.length; u < a; u++) {
						const h = r[u];
						switch (h.type) {
							case w.LayoutChanged:
								this.a.fire(h);
								break;
							case w.CellLayoutChanged:
								this.b.fire(h);
								break;
						}
					}
				}
			}
			e.$MEc = d;
		}),
		
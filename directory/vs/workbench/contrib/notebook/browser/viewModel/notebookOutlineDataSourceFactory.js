import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import './notebookOutlineDataSource.js';
define(de[1306], he([1, 0, 3, 5, 3520]), function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*instantiation*/,
 w /*notebookOutlineDataSource*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$H4b = e.$G4b = void 0);
			let E = class extends t.$6c {
				constructor(m) {
					super(), (this.f = m);
				}
				b(m, r) {
					return this.f.createInstance(w.$y4b, r);
				}
				c(m, r) {
					r.dispose();
				}
			};
			(E = Ne([j(0, i.$Li)], E)),
				(e.$G4b = (0, i.$Mi)("INotebookCellOutlineDataSourceFactory"));
			let C = class {
				constructor(m) {
					this.a = m.createInstance(E);
				}
				getOrCreate(m) {
					return this.a.acquire(m.getId(), m);
				}
			};
			(e.$H4b = C), (e.$H4b = C = Ne([j(0, i.$Li)], C));
		})

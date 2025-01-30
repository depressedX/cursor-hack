import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../base/common/types.js';
import '../../../../platform/instantiation/common/instantiation.js';
define(de[1258], he([1, 0, 6, 21, 28, 5]), function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*storage*/,
 w /*types*/,
 E /*instantiation*/) {
			"use strict";
			var C;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$cPc = e.$bPc = void 0),
				(e.$bPc = (0, E.$Mi)("searchHistoryService"));
			let d = class {
				static {
					C = this;
				}
				static {
					this.SEARCH_HISTORY_KEY = "workbench.search.history";
				}
				constructor(r) {
					(this.b = r),
						(this.a = new t.$re()),
						(this.onDidClearHistory = this.a.event);
				}
				clearHistory() {
					this.b.remove(C.SEARCH_HISTORY_KEY, i.StorageScope.WORKSPACE),
						this.a.fire();
				}
				load() {
					let r;
					const u = this.b.get(C.SEARCH_HISTORY_KEY, i.StorageScope.WORKSPACE);
					if (u)
						try {
							r = JSON.parse(u);
						} catch {}
					return r || {};
				}
				save(r) {
					(0, w.$yg)(r)
						? this.b.remove(C.SEARCH_HISTORY_KEY, i.StorageScope.WORKSPACE)
						: this.b.store(
								C.SEARCH_HISTORY_KEY,
								JSON.stringify(r),
								i.StorageScope.WORKSPACE,
								i.StorageTarget.USER,
							);
				}
			};
			(e.$cPc = d), (e.$cPc = d = C = Ne([j(0, i.$lq)], d));
		}),
		
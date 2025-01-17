import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../platform/storage/common/storage.js';
import './outline.js';
define(de[3121], he([1, 0, 6, 21, 802]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$1Yc = void 0);
			class E {
				constructor() {
					(this.a = !1),
						(this.b = !0),
						(this.c = w.OutlineSortOrder.ByPosition),
						(this.d = new t.$re()),
						(this.onDidChange = this.d.event);
				}
				dispose() {
					this.d.dispose();
				}
				set followCursor(d) {
					d !== this.a && ((this.a = d), this.d.fire({ followCursor: !0 }));
				}
				get followCursor() {
					return this.a;
				}
				get filterOnType() {
					return this.b;
				}
				set filterOnType(d) {
					d !== this.b && ((this.b = d), this.d.fire({ filterOnType: !0 }));
				}
				set sortBy(d) {
					d !== this.c && ((this.c = d), this.d.fire({ sortBy: !0 }));
				}
				get sortBy() {
					return this.c;
				}
				persist(d) {
					d.store(
						"outline/state",
						JSON.stringify({
							followCursor: this.followCursor,
							sortBy: this.sortBy,
							filterOnType: this.filterOnType,
						}),
						i.StorageScope.WORKSPACE,
						i.StorageTarget.MACHINE,
					);
				}
				restore(d) {
					const m = d.get("outline/state", i.StorageScope.WORKSPACE);
					if (!m) return;
					let r;
					try {
						r = JSON.parse(m);
					} catch {
						return;
					}
					(this.followCursor = r.followCursor),
						(this.sortBy = r.sortBy ?? w.OutlineSortOrder.ByPosition),
						typeof r.filterOnType == "boolean" &&
							(this.filterOnType = r.filterOnType);
				}
			}
			e.$1Yc = E;
		}),
		
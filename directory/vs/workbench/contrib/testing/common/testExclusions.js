import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/iterator.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/storage/common/storage.js';
import './observableValue.js';
import './storedValue.js';
define(
			de[3177],
			he([1, 0, 103, 3, 21, 810, 515]),
			function (ce /*require*/,
 e /*exports*/,
 t /*iterator*/,
 i /*lifecycle*/,
 w /*storage*/,
 E /*observableValue*/,
 C /*storedValue*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$rqc = void 0);
				let d = class extends i.$1c {
					constructor(r) {
						super(),
							(this.b = r),
							(this.a = this.D(
								E.$qqc.stored(
									new C.$oqc(
										{
											key: "excludedTestItems",
											scope: w.StorageScope.WORKSPACE,
											target: w.StorageTarget.MACHINE,
											serialization: {
												deserialize: (u) => new Set(JSON.parse(u)),
												serialize: (u) => JSON.stringify([...u]),
											},
										},
										this.b,
									),
									new Set(),
								),
							)),
							(this.onTestExclusionsChanged = this.a.onDidChange);
					}
					get hasAny() {
						return this.a.value.size > 0;
					}
					get all() {
						return this.a.value;
					}
					toggle(r, u) {
						u !== !0 && this.a.value.has(r.item.extId)
							? (this.a.value = new Set(
									t.Iterable.filter(this.a.value, (a) => a !== r.item.extId),
								))
							: u !== !1 &&
								!this.a.value.has(r.item.extId) &&
								(this.a.value = new Set([...this.a.value, r.item.extId]));
					}
					contains(r) {
						return this.a.value.has(r.item.extId);
					}
					clear() {
						this.a.value = new Set();
					}
				};
				(e.$rqc = d), (e.$rqc = d = Ne([j(0, w.$lq)], d));
			},
		),
		
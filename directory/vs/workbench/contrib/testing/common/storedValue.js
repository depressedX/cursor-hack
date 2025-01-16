define(de[515], he([1, 0, 3, 21]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$oqc = void 0);
			const w = {
				deserialize: (C) => JSON.parse(C),
				serialize: (C) => JSON.stringify(C),
			};
			let E = class extends t.$1c {
				constructor(d, m) {
					super(),
						(this.h = m),
						(this.b = d.key),
						(this.c = d.scope),
						(this.f = d.target),
						(this.a = d.serialization ?? w),
						(this.onDidChange = this.h.onDidChangeValue(
							this.c,
							this.b,
							this.D(new t.$Zc()),
						));
				}
				get(d) {
					if (this.g === void 0) {
						const m = this.h.get(this.b, this.c);
						this.g = m === void 0 ? d : this.a.deserialize(m);
					}
					return this.g;
				}
				store(d) {
					(this.g = d),
						this.h.store(this.b, this.a.serialize(d), this.c, this.f);
				}
				delete() {
					this.h.remove(this.b, this.c);
				}
			};
			(e.$oqc = E), (e.$oqc = E = Ne([j(1, i.$lq)], E));
		}),
		define(
			de[3177],
			he([1, 0, 103, 3, 21, 810, 515]),
			function (ce, e, t, i, w, E, C) {
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
		
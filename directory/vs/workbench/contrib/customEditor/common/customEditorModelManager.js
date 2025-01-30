import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/functional.js';
define(de[3047], he([1, 0, 288]), function (ce /*require*/,
 e /*exports*/,
 t /*functional*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$zSc = void 0);
			class i {
				constructor() {
					this.a = new Map();
				}
				async getAllModels(E) {
					const C = `${E.toString()}@@@`,
						d = [];
					for (const [m, r] of this.a)
						m.startsWith(C) && r.model && d.push(await r.model);
					return d;
				}
				async get(E, C) {
					const d = this.b(E, C);
					return this.a.get(d)?.model;
				}
				tryRetain(E, C) {
					const d = this.b(E, C),
						m = this.a.get(d);
					if (m)
						return (
							m.counter++,
							m.model.then((r) => ({
								object: r,
								dispose: (0, t.$hb)(() => {
									--m.counter <= 0 &&
										(m.model.then((u) => u.dispose()), this.a.delete(d));
								}),
							}))
						);
				}
				add(E, C, d) {
					const m = this.b(E, C);
					if (this.a.get(m)) throw new Error("Model already exists");
					return (
						this.a.set(m, { viewType: C, model: d, counter: 0 }),
						this.tryRetain(E, C)
					);
				}
				disposeAllModelsForView(E) {
					for (const [C, d] of this.a)
						d.viewType === E &&
							(d.model.then((m) => m.dispose()), this.a.delete(C));
				}
				b(E, C) {
					return `${E.toString()}@@@${C}`;
				}
			}
			e.$zSc = i;
		}),
		
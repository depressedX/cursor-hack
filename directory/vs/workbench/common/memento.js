import '../../../require.js';
import '../../../exports.js';
import '../../platform/storage/common/storage.js';
import '../../base/common/types.js';
import '../../base/common/errors.js';
define(de[282], he([1, 0, 21, 28, 29]), function (ce /*require*/,
 e /*exports*/,
 t /*storage*/,
 i /*types*/,
 w /*errors*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$eEb = void 0);
			class E {
				static {
					this.a = new Map();
				}
				static {
					this.b = new Map();
				}
				static {
					this.c = new Map();
				}
				static {
					this.d = "memento/";
				}
				constructor(m, r) {
					(this.f = r), (this.e = E.d + m);
				}
				getMemento(m, r) {
					switch (m) {
						case t.StorageScope.WORKSPACE: {
							let u = E.c.get(this.e);
							return (
								u || ((u = new C(this.e, m, r, this.f)), E.c.set(this.e, u)),
								u.getMemento()
							);
						}
						case t.StorageScope.PROFILE: {
							let u = E.b.get(this.e);
							return (
								u || ((u = new C(this.e, m, r, this.f)), E.b.set(this.e, u)),
								u.getMemento()
							);
						}
						case t.StorageScope.APPLICATION: {
							let u = E.a.get(this.e);
							return (
								u || ((u = new C(this.e, m, r, this.f)), E.a.set(this.e, u)),
								u.getMemento()
							);
						}
					}
				}
				onDidChangeValue(m, r) {
					return this.f.onDidChangeValue(m, this.e, r);
				}
				saveMemento() {
					E.c.get(this.e)?.save(),
						E.b.get(this.e)?.save(),
						E.a.get(this.e)?.save();
				}
				reloadMemento(m) {
					let r;
					switch (m) {
						case t.StorageScope.APPLICATION:
							r = E.a.get(this.e);
							break;
						case t.StorageScope.PROFILE:
							r = E.b.get(this.e);
							break;
						case t.StorageScope.WORKSPACE:
							r = E.c.get(this.e);
							break;
					}
					r?.reload();
				}
				static clear(m) {
					switch (m) {
						case t.StorageScope.WORKSPACE:
							E.c.clear();
							break;
						case t.StorageScope.PROFILE:
							E.b.clear();
							break;
						case t.StorageScope.APPLICATION:
							E.a.clear();
							break;
					}
				}
			}
			e.$eEb = E;
			class C {
				constructor(m, r, u, a) {
					(this.b = m),
						(this.c = r),
						(this.d = u),
						(this.e = a),
						(this.a = this.f());
				}
				f() {
					try {
						return this.e.getObject(this.b, this.c, {});
					} catch (m) {
						(0, w.$4)(
							`[memento]: failed to parse contents: ${m} (id: ${this.b}, scope: ${this.c}, contents: ${this.e.get(this.b, this.c)})`,
						);
					}
					return {};
				}
				getMemento() {
					return this.a;
				}
				reload() {
					for (const m of Object.getOwnPropertyNames(this.a)) delete this.a[m];
					Object.assign(this.a, this.f());
				}
				save() {
					(0, i.$yg)(this.a)
						? this.e.remove(this.b, this.c)
						: this.e.store(this.b, this.a, this.c, this.d);
				}
			}
		})

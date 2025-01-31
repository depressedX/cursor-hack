import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../base/common/iterator.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/linkedList.js';
import '../../../base/common/types.js';
import '../../instantiation/common/instantiation.js';
define(
			de[31],
			he([1, 0, 6, 103, 3, 273, 28, 5]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*iterator*/,
 w /*lifecycle*/,
 E /*linkedList*/,
 C /*types*/,
 d /*instantiation*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$fk = e.$ek = void 0),
					(e.$ek = (0, d.$Mi)("commandService")),
					(e.$fk = new (class {
						constructor() {
							(this.a = new Map()),
								(this.b = new t.$re()),
								(this.onDidRegisterCommand = this.b.event);
						}
						registerCommand(m, r) {
							if (!m) throw new Error("invalid command");
							if (typeof m == "string") {
								if (!r) throw new Error("invalid command");
								return this.registerCommand({ id: m, handler: r });
							}
							if (m.metadata && Array.isArray(m.metadata.args)) {
								const n = [];
								for (const p of m.metadata.args) n.push(p.constraint);
								const g = m.handler;
								m.handler = function (p, ...o) {
									return (0, C.$Bg)(o, n), g(p, ...o);
								};
							}
							const { id: u } = m;
							let a = this.a.get(u);
							a || ((a = new E.$$c()), this.a.set(u, a));
							const h = a.unshift(m),
								c = (0, w.$Yc)(() => {
									h(), this.a.get(u)?.isEmpty() && this.a.delete(u);
								});
							return this.b.fire(u), c;
						}
						registerCommandAlias(m, r) {
							return e.$fk.registerCommand(m, (u, ...a) =>
								u.get(e.$ek).executeCommand(r, ...a),
							);
						}
						getCommand(m) {
							const r = this.a.get(m);
							if (!(!r || r.isEmpty())) return i.Iterable.first(r);
						}
						getCommands() {
							const m = new Map();
							for (const r of this.a.keys()) {
								const u = this.getCommand(r);
								u && m.set(r, u);
							}
							return m;
						}
					})()),
					e.$fk.registerCommand("noop", () => {});
			},
		)

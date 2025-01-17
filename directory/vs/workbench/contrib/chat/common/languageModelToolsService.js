import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/event.js';
import '../../../../base/common/iterator.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../services/extensions/common/extensions.js';
define(
			de[569],
			he([1, 0, 15, 6, 103, 3, 8, 5, 53]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$F2 = e.$E2 = void 0),
					(e.$E2 = (0, d.$Mi)("ILanguageModelToolsService"));
				let r = class extends E.$1c {
					constructor(a, h) {
						super(),
							(this.g = a),
							(this.h = h),
							(this.a = new i.$re()),
							(this.onDidChangeTools = this.a.event),
							(this.b = new t.$Yh(() => this.a.fire(), 750)),
							(this.c = new Map()),
							(this.f = new Set()),
							this.D(
								this.h.onDidChangeContext((c) => {
									c.affectsSome(this.f) && this.b.schedule();
								}),
							);
					}
					registerToolData(a) {
						if (this.c.has(a.id))
							throw new Error(`Tool "${a.id}" is already registered.`);
						return (
							this.c.set(a.id, { data: a }),
							this.b.schedule(),
							a.when?.keys().forEach((h) => this.f.add(h)),
							(0, E.$Yc)(() => {
								this.c.delete(a.id), this.j(), this.b.schedule();
							})
						);
					}
					j() {
						this.f.clear();
						for (const a of this.c.values())
							a.data.when?.keys().forEach((h) => this.f.add(h));
					}
					registerToolImplementation(a, h) {
						const c = this.c.get(a);
						if (!c) throw new Error(`Tool "${a}" was not contributed.`);
						if (c.impl)
							throw new Error(`Tool "${a}" already has an implementation.`);
						return (
							(c.impl = h),
							(0, E.$Yc)(() => {
								c.impl = void 0;
							})
						);
					}
					getTools() {
						const a = w.Iterable.map(this.c.values(), (h) => h.data);
						return w.Iterable.filter(
							a,
							(h) => !h.when || this.h.contextMatchesRules(h.when),
						);
					}
					getTool(a) {
						return this.m(a)?.data;
					}
					m(a) {
						const h = this.c.get(a);
						if (h && (!h.data.when || this.h.contextMatchesRules(h.data.when)))
							return h;
					}
					getToolByName(a) {
						for (const h of this.getTools()) if (h.name === a) return h;
					}
					async invokeTool(a, h, c) {
						let n = this.c.get(a.toolId);
						if (!n) throw new Error(`Tool ${a.toolId} was not contributed`);
						if (
							!n.impl &&
							(await this.g.activateByEvent(`onLanguageModelTool:${a.toolId}`),
							(n = this.c.get(a.toolId)),
							!n?.impl)
						)
							throw new Error(
								`Tool ${a.toolId} does not have an implementation registered.`,
							);
						return n.impl.invoke(a, h, c);
					}
				};
				(e.$F2 = r), (e.$F2 = r = Ne([j(0, m.$q2), j(1, C.$6j)], r));
			},
		),
		
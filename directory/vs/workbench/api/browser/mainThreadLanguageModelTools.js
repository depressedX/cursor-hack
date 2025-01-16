define(de[3354], he([1, 0, 3, 88, 569, 101]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Hmc = void 0);
			let C = class extends t.$1c {
				constructor(m, r) {
					super(),
						(this.f = r),
						(this.b = this.D(new t.$0c())),
						(this.c = new Map()),
						(this.a = m.getProxy(i.$mbb.ExtHostLanguageModelTools)),
						this.D(
							this.f.onDidChangeTools((u) =>
								this.a.$onDidChangeTools([...this.f.getTools()]),
							),
						);
				}
				async $getTools() {
					return Array.from(this.f.getTools());
				}
				$invokeTool(m, r) {
					return this.f.invokeTool(
						m,
						(u, a) => this.a.$countTokensForInvocation(m.callId, u, a),
						r,
					);
				}
				$countTokensForInvocation(m, r, u) {
					const a = this.c.get(m);
					if (!a) throw new Error(`Tool invocation call ${m} not found`);
					return a(r, u);
				}
				$registerTool(m) {
					const r = this.f.registerToolImplementation(m, {
						invoke: async (u, a, h) => {
							try {
								return this.c.set(u.callId, a), await this.a.$invokeTool(u, h);
							} finally {
								this.c.delete(u.callId);
							}
						},
					});
					this.b.set(m, r);
				}
				$unregisterTool(m) {
					this.b.deleteAndDispose(m);
				}
			};
			(e.$Hmc = C),
				(e.$Hmc = C =
					Ne(
						[(0, E.$tmc)(i.$lbb.MainThreadLanguageModelTools), j(1, w.$E2)],
						C,
					));
		}),
		
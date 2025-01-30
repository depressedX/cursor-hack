import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/async.js';
import '../../../base/common/cancellation.js';
import '../../../base/common/errors.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/marshalling.js';
import '../../../base/common/uuid.js';
import './extHost.protocol.js';
import './extHostTypeConverters.js';
define(
			Pe[572],
			Ne([1, 0, 9, 23, 12, 3, 50, 38, 6, 17]),
			function (we, t, e, r, S, N, P, I, l, n) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$Kid = void 0),
					(n = tt(n));
				class p {
					constructor(d) {
						(this.a = new Map()),
							(this.c = new Map()),
							(this.d = new Map()),
							(this.b = d.getProxy(l.$lbb.MainThreadLanguageModelTools)),
							this.b.$getTools().then((k) => {
								for (const g of k) this.d.set(g.id, (0, P.$ji)(g));
							});
					}
					async $countTokensForInvocation(d, k, g) {
						const c = this.c.get(d);
						if (!c) throw new Error(`Tool invocation call ${d} not found`);
						return await c(k, g);
					}
					async invokeTool(d, k, g) {
						const c = (0, I.$9g)();
						k.tokenOptions && this.c.set(c, k.tokenOptions.countTokens);
						try {
							const h = await this.b.$invokeTool(
								{
									toolId: d,
									callId: c,
									parameters: k.parameters,
									tokenBudget: k.tokenOptions?.tokenBudget,
								},
								g,
							);
							return n.LanguageModelToolResult.to(h);
						} finally {
							this.c.delete(c);
						}
					}
					$onDidChangeTools(d) {
						this.d.clear();
						for (const k of d) this.d.set(k.id, k);
					}
					get tools() {
						return Array.from(this.d.values()).map((d) =>
							n.LanguageModelToolDescription.to(d),
						);
					}
					async $invokeTool(d, k) {
						const g = this.a.get(d.toolId);
						if (!g) throw new Error(`Unknown tool ${d.toolId}`);
						const c = { parameters: d.parameters };
						d.tokenBudget !== void 0 &&
							(c.tokenOptions = {
								tokenBudget: d.tokenBudget,
								countTokens:
									this.c.get(d.callId) ||
									(($, T = r.CancellationToken.None) =>
										this.b.$countTokensForInvocation(d.callId, $, T)),
							});
						const h = await (0, e.$Ah)(Promise.resolve(g.tool.invoke(c, k)), k);
						if (!h) throw new S.$9();
						for (const $ of Object.keys(h))
							if (h[$] instanceof Promise)
								throw new Error(`Tool result for '${$}' cannot be a Promise`);
						return n.LanguageModelToolResult.from(h);
					}
					registerTool(d, k, g) {
						return (
							this.a.set(k, { extension: d, tool: g }),
							this.b.$registerTool(k),
							(0, N.$Yc)(() => {
								this.a.delete(k), this.b.$unregisterTool(k);
							})
						);
					}
				}
				t.$Kid = p;
			},
		),
		
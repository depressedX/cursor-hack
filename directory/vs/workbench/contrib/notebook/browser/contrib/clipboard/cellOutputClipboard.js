define(de[1837], he([1, 0, 70]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$W3b = void 0),
				(e.$V3b = i);
			async function i(w, E, C, d) {
				const m = E.model,
					r =
						w && e.$W3b.includes(w)
							? m.outputs.find((h) => h.mime === w)
							: m.outputs.find((h) => e.$W3b.includes(h.mime));
				if (((w = r?.mime), !w || !r)) return;
				const u = new TextDecoder();
				let a = u.decode(r.data.buffer);
				if ((0, t.$76)(w)) {
					const h = E.cellViewModel;
					let c = h.outputsViewModels.indexOf(E) + 1;
					for (; c < h.model.outputs.length; ) {
						const g = h.model.outputs[c].outputs.find((p) =>
							(0, t.$76)(p.mime),
						);
						if (!g) break;
						(a = a + u.decode(g.data.buffer)), (c = c + 1);
					}
				}
				w.endsWith("error") &&
					(a = a.replace(/\\u001b\[[0-9;]*m/gi, "").replaceAll(
						"\\n",
						`
`,
					));
				try {
					await C.writeText(a);
				} catch (h) {
					d.error(`Failed to copy content: ${h}`);
				}
			}
			e.$W3b = [
				"text/latex",
				"text/html",
				"application/vnd.code.notebook.error",
				"application/vnd.code.notebook.stdout",
				"application/x.notebook.stdout",
				"application/x.notebook.stream",
				"application/vnd.code.notebook.stderr",
				"application/x.notebook.stderr",
				"text/plain",
				"text/markdown",
				"application/json",
			];
		}),
		define(
			de[3468],
			he([1, 0, 15, 3, 9, 30, 55, 112, 70, 611, 190, 52]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let h = class extends i.$1c {
					constructor(n, g) {
						super(),
							(this.c = n),
							(this.f = g),
							(this.a = new Set()),
							this.D(
								n.getModel().onDidChangeCallStack(() => {
									this.g(!0), this.b.schedule();
								}),
							),
							(this.b = this.D(new t.$Yh(() => this.g(!1), 2e3)));
					}
					async g(n) {
						const g = new Set();
						for (const p of this.c.getModel().getSessions())
							for (const o of p.getAllThreads()) {
								let f = o.getCallStack();
								n && !f.length && (f = o.getStaleCallStack()),
									f.forEach((b) => {
										m.CellUri.parse(b.source.uri) &&
											(g.add(b.source.uri.toString()),
											this.h(b.source.uri, !0));
									});
							}
						for (const p of this.a)
							g.has(p) || (this.h(w.URI.parse(p), !1), this.a.delete(p));
						g.forEach((p) => this.a.add(p));
					}
					h(n, g) {
						if (m.CellUri.parse(n)) {
							const o = this.f.getCellExecution(n);
							o &&
								(o.isPaused !== g || !o.didPause) &&
								o.update([
									{
										editType: r.CellExecutionUpdateType.ExecutionState,
										didPause: !0,
										isPaused: g,
									},
								]);
						}
					}
				};
				(h = Ne([j(0, d.$75), j(1, u.$d6)], h)),
					E.$Io
						.as(C.Extensions.Workbench)
						.registerWorkbenchContribution(h, a.LifecyclePhase.Restored);
			},
		),
		
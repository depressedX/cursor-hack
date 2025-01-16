define(
			de[1235],
			he([1, 0, 6, 5, 21, 282, 153, 981]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$UYb = e.$TYb = void 0),
					(e.$TYb = (0, i.$Mi)("IChatWidgetHistoryService"));
				let m = class {
					constructor(u) {
						(this.c = new t.$re()),
							(this.onDidClearHistory = this.c.event),
							(this.a = new E.$eEb("interactive-session", u));
						const a = this.a.getMemento(
							w.StorageScope.WORKSPACE,
							w.StorageTarget.MACHINE,
						);
						for (const h in a.history)
							a.history[h] = a.history[h].map((c) =>
								typeof c == "string" ? { text: c } : c,
							);
						this.b = a;
					}
					getHistory(u) {
						const a = this.d(u);
						return this.b.history?.[a] ?? [];
					}
					d(u) {
						return u === C.ChatAgentLocation.Panel ? d.$b3 : u;
					}
					saveHistory(u, a) {
						this.b.history || (this.b.history = {});
						const h = this.d(u);
						(this.b.history[h] = a), this.a.saveMemento();
					}
					clearHistory() {
						(this.b.history = {}), this.a.saveMemento(), this.c.fire();
					}
				};
				(e.$UYb = m), (e.$UYb = m = Ne([j(0, w.$lq)], m));
			},
		),
		
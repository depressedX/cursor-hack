define(de[270], he([1, 0, 13]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$K0b = i);
			function i(w, E, C) {
				const [d, m] = (0, t.createSignal)(C);
				return (
					(0, t.createEffect)(() => {
						const u = E.getValue(w);
						m(u);
						const a = E.onDidChangeConfiguration((h) => {
							if (h.affectsConfiguration(w)) {
								const c = E.getValue(w);
								m(c);
							}
						});
						(0, t.onCleanup)(() => {
							a.dispose();
						});
					}),
					[
						d,
						(u) => {
							E.updateValue(w, u);
						},
					]
				);
			}
		}),
		
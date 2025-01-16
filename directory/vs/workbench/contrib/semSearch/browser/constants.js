define(de[1750], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$I9b = void 0);
			const t = "semsearch";
			e.$I9b = {
				USE_SYMBOL_RANGE: !1,
				DESCRIPTION_TYPE: "resource",
				HIGH_SCORING_THRESHOLD: 100,
				HIGH_SCORING_CAP_ITEMS: 6,
			};
		}),
		define(
			de[3135],
			he([1, 0, 11, 27, 4, 43, 179]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				class d extends t.$3X {
					static {
						this.ID = "workbench.action.semanticSearch";
					}
					constructor() {
						super({
							id: d.ID,
							title: {
								value: (0, w.localize)(9418, null),
								original: "Semantic Search",
							},
							f1: !0,
							keybinding: [
								{
									weight: E.KeybindingWeight.WorkbenchContrib,
									primary: i.KeyMod.Alt | i.KeyCode.KeyF,
								},
								{
									weight: E.KeybindingWeight.WorkbenchContrib,
									primary: i.KeyMod.CtrlCmd | i.KeyMod.Shift | i.KeyCode.KeyG,
									when: C.$4Lb,
								},
							],
						});
					}
					async run(u) {
						try {
						} catch (a) {
							console.error(a);
						}
					}
				}
				class m extends t.$3X {
					static {
						this.ID = "workbench.action.globalSemanticSearch";
					}
					constructor() {
						super({
							id: m.ID,
							title: {
								value: (0, w.localize)(9419, null),
								original: "Global Semantic Search",
							},
							f1: !0,
							keybinding: [
								{
									weight: E.KeybindingWeight.WorkbenchContrib,
									primary: i.KeyMod.Alt | i.KeyMod.Shift | i.KeyCode.KeyF,
								},
								{
									weight: E.KeybindingWeight.WorkbenchContrib,
									primary: i.KeyMod.CtrlCmd | i.KeyCode.KeyG,
									when: C.$4Lb,
								},
							],
						});
					}
					async run(u) {
						try {
						} catch (a) {
							console.error(a);
						}
					}
				}
			},
		),
		
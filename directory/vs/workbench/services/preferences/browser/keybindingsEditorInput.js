define(
			de[1310],
			he([1, 0, 14, 12, 4, 5, 79, 223, 1309]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				var r;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$tvc = void 0),
					(w = mt(w));
				const u = (0, C.$$O)(
					"keybindings-editor-label-icon",
					t.$ak.keyboard,
					w.localize(12572, null),
				);
				let a = class extends d.$LO {
					static {
						r = this;
					}
					static {
						this.ID = "workbench.input.keybindings";
					}
					constructor(c) {
						super(),
							(this.searchOptions = null),
							(this.resource = void 0),
							(this.keybindingsModel = c.createInstance(m.$svc, i.OS));
					}
					get typeId() {
						return r.ID;
					}
					getName() {
						return w.localize(12573, null);
					}
					getIcon() {
						return u;
					}
					async resolve() {
						return this.keybindingsModel;
					}
					matches(c) {
						return c instanceof r;
					}
					dispose() {
						this.keybindingsModel.dispose(), super.dispose();
					}
				};
				(e.$tvc = a), (e.$tvc = a = r = Ne([j(0, E.$Li)], a));
			},
		),
		
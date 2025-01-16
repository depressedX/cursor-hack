define(
			de[1312],
			he([1, 0, 14, 23, 9, 4, 79, 223, 131]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				var r;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$uvc = void 0),
					(E = mt(E));
				const u = (0, C.$$O)(
					"settings-editor-label-icon",
					t.$ak.settings,
					E.localize(12586, null),
				);
				let a = class extends d.$LO {
					static {
						r = this;
					}
					static {
						this.ID = "workbench.input.settings2";
					}
					constructor(c) {
						super(),
							(this.resource = w.URI.from({
								scheme: i.Schemas.vscodeSettings,
								path: "settingseditor",
							})),
							(this.a = c.createSettings2EditorModel());
					}
					matches(c) {
						return super.matches(c) || c instanceof r;
					}
					get typeId() {
						return r.ID;
					}
					getName() {
						return E.localize(12587, null);
					}
					getIcon() {
						return u;
					}
					async resolve() {
						return this.a;
					}
					dispose() {
						this.a.dispose(), super.dispose();
					}
				};
				(e.$uvc = a), (e.$uvc = a = r = Ne([j(0, m.$7Z)], a));
			},
		),
		
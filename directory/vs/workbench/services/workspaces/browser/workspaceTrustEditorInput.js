define(
			de[4002],
			he([1, 0, 14, 23, 9, 4, 79, 44, 223]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$m2c = void 0);
				const r = (0, C.$$O)(
					"workspace-trust-editor-label-icon",
					t.$ak.shield,
					(0, E.localize)(13171, null),
				);
				class u extends m.$LO {
					constructor() {
						super(...arguments),
							(this.resource = w.URI.from({
								scheme: i.Schemas.vscodeWorkspaceTrust,
								path: "workspaceTrustEditor",
							}));
					}
					static {
						this.ID = "workbench.input.workspaceTrust";
					}
					get capabilities() {
						return (
							d.EditorInputCapabilities.Readonly |
							d.EditorInputCapabilities.Singleton
						);
					}
					get typeId() {
						return u.ID;
					}
					matches(h) {
						return super.matches(h) || h instanceof u;
					}
					getName() {
						return (0, E.localize)(13172, null);
					}
					getIcon() {
						return r;
					}
				}
				e.$m2c = u;
			},
		),
		
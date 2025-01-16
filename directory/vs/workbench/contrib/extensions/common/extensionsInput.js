define(
			de[1243],
			he([1, 0, 23, 9, 4, 44, 223, 154, 54, 14, 79]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$KQb = void 0);
				const a = (0, u.$$O)(
					"extensions-editor-label-icon",
					r.$ak.extensions,
					(0, w.localize)(6590, null),
				);
				class h extends C.$LO {
					static {
						this.ID = "workbench.extensions.input2";
					}
					get typeId() {
						return h.ID;
					}
					get capabilities() {
						return (
							E.EditorInputCapabilities.Readonly |
							E.EditorInputCapabilities.Singleton
						);
					}
					get resource() {
						return i.URI.from({
							scheme: t.Schemas.extension,
							path: (0, m.$oc)(this.a.identifier.id, "extension"),
						});
					}
					constructor(n) {
						super(), (this.a = n);
					}
					get extension() {
						return this.a;
					}
					getName() {
						return (0, w.localize)(6591, null, this.a.displayName);
					}
					getIcon() {
						return a;
					}
					matches(n) {
						return super.matches(n)
							? !0
							: n instanceof h && (0, d.$7p)(this.a.identifier, n.a.identifier);
					}
				}
				e.$KQb = h;
			},
		),
		
define(
			de[985],
			he([1, 0, 4, 9, 44, 223, 14, 79]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$UTc = void 0),
					(t = mt(t));
				const m = (0, d.$$O)(
					"runtime-extensions-editor-label-icon",
					C.$ak.extensions,
					t.localize(6596, null),
				);
				class r extends E.$LO {
					constructor() {
						super(...arguments),
							(this.resource = i.URI.from({
								scheme: "runtime-extensions",
								path: "default",
							}));
					}
					static {
						this.ID = "workbench.runtimeExtensions.input";
					}
					get typeId() {
						return r.ID;
					}
					get capabilities() {
						return (
							w.EditorInputCapabilities.Readonly |
							w.EditorInputCapabilities.Singleton
						);
					}
					static get instance() {
						return (
							(!r._instance || r._instance.isDisposed()) &&
								(r._instance = new r()),
							r._instance
						);
					}
					getName() {
						return t.localize(6597, null);
					}
					getIcon() {
						return m;
					}
					matches(a) {
						return super.matches(a) ? !0 : a instanceof r;
					}
				}
				e.$UTc = r;
			},
		),
		
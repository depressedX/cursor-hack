define(de[1731], he([1, 0, 4, 119]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$8Qb = e.$7Qb = e.$6Qb = void 0),
				(e.$6Qb = "vscode://schemas/extensions"),
				(e.$7Qb = {
					id: e.$6Qb,
					allowComments: !0,
					allowTrailingCommas: !0,
					type: "object",
					title: (0, t.localize)(6585, null),
					additionalProperties: !1,
					properties: {
						recommendations: {
							type: "array",
							description: (0, t.localize)(6586, null),
							items: {
								type: "string",
								pattern: i.$rp,
								errorMessage: (0, t.localize)(6587, null),
							},
						},
						unwantedRecommendations: {
							type: "array",
							description: (0, t.localize)(6588, null),
							items: {
								type: "string",
								pattern: i.$rp,
								errorMessage: (0, t.localize)(6589, null),
							},
						},
					},
				}),
				(e.$8Qb = [
					"{",
					"	// See https://go.microsoft.com/fwlink/?LinkId=827846 to learn about workspace recommendations.",
					"	// Extension identifier format: ${publisher}.${name}. Example: vscode.csharp",
					"",
					"	// List of extensions which should be recommended for users of this workspace.",
					'	"recommendations": [',
					"		",
					"	],",
					"	// List of extensions recommended by VS Code that should not be recommended for users of this workspace.",
					'	"unwantedRecommendations": [',
					"		",
					"	]",
					"}",
				].join(`
`));
		}),
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
		
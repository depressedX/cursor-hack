define(
			de[3576],
			he([1, 0, 24, 3, 4, 102, 30, 625, 244, 175, 701]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ASc = void 0),
					(w = mt(w));
				const a = Object.freeze({
						viewType: "viewType",
						displayName: "displayName",
						selector: "selector",
						priority: "priority",
					}),
					h = {
						description: w.localize(5127, null),
						type: "array",
						defaultSnippets: [
							{
								body: [
									{
										[a.viewType]: "$1",
										[a.displayName]: "$2",
										[a.selector]: [{ filenamePattern: "$3" }],
									},
								],
							},
						],
						items: {
							type: "object",
							required: [a.viewType, a.displayName, a.selector],
							properties: {
								[a.viewType]: {
									type: "string",
									markdownDescription: w.localize(5128, null),
								},
								[a.displayName]: {
									type: "string",
									description: w.localize(5129, null),
								},
								[a.selector]: {
									type: "array",
									description: w.localize(5130, null),
									items: {
										type: "object",
										defaultSnippets: [{ body: { filenamePattern: "$1" } }],
										properties: {
											filenamePattern: {
												type: "string",
												description: w.localize(5131, null),
											},
										},
									},
								},
								[a.priority]: {
									type: "string",
									markdownDeprecationMessage: w.localize(5132, null),
									enum: [
										d.CustomEditorPriority.default,
										d.CustomEditorPriority.option,
									],
									markdownEnumDescriptions: [
										w.localize(5133, null),
										w.localize(5134, null),
									],
									default: "default",
								},
							},
						},
					};
				e.$ASc = r.$n2.registerExtensionPoint({
					extensionPoint: "customEditors",
					deps: [u.$qYb],
					jsonSchema: h,
					activationEventsGenerator: (n, g) => {
						for (const p of n) {
							const o = p[a.viewType];
							o && g.push(`onCustomEditor:${o}`);
						}
					},
				});
				class c extends i.$1c {
					constructor() {
						super(...arguments), (this.type = "table");
					}
					shouldRender(g) {
						return !!g.contributes?.customEditors;
					}
					render(g) {
						const p = g.contributes?.customEditors || [];
						if (!p.length)
							return { data: { headers: [], rows: [] }, dispose: () => {} };
						const o = [
								w.localize(5135, null),
								w.localize(5136, null),
								w.localize(5137, null),
							],
							f = p.map((b) => [
								b.viewType,
								b.priority ?? "",
								(0, t.$Lb)(b.selector.map((s) => s.filenamePattern)).join(", "),
							]);
						return { data: { headers: o, rows: f }, dispose: () => {} };
					}
				}
				C.$Io
					.as(m.Extensions.ExtensionFeaturesRegistry)
					.registerExtensionFeature({
						id: "customEditors",
						label: w.localize(5138, null),
						access: { canToggle: !1 },
						renderer: new E.$Ji(c),
					});
			},
		),
		
define(
			de[3325],
			he([1, 0, 3, 19, 26, 4, 8, 34, 569, 175]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$YIc = void 0),
					(r = mt(r));
				const u = r.$n2.registerExtensionPoint({
					extensionPoint: "languageModelTools",
					activationEventsGenerator: (c, n) => {
						for (const g of c) n.push(`onLanguageModelTool:${g.id}`);
					},
					jsonSchema: {
						description: (0, E.localize)(4774, null),
						type: "array",
						items: {
							additionalProperties: !1,
							type: "object",
							defaultSnippets: [{ body: { name: "", description: "" } }],
							required: ["id", "modelDescription"],
							properties: {
								id: {
									description: (0, E.localize)(4775, null),
									type: "string",
									pattern: "^[\\w-]+$",
								},
								name: {
									description: (0, E.localize)(
										4776,
										null,
										"`canBeInvokedManually`",
									),
									type: "string",
									pattern: "^[\\w-]+$",
								},
								displayName: {
									description: (0, E.localize)(4777, null),
									type: "string",
								},
								userDescription: {
									description: (0, E.localize)(4778, null),
									type: "string",
								},
								modelDescription: {
									description: (0, E.localize)(4779, null),
									type: "string",
								},
								parametersSchema: {
									description: (0, E.localize)(4780, null),
									type: "object",
									$ref: "http://json-schema.org/draft-07/schema#",
								},
								canBeInvokedManually: {
									description: (0, E.localize)(4781, null),
									type: "boolean",
								},
								icon: {
									description: (0, E.localize)(4782, null),
									anyOf: [
										{ type: "string" },
										{
											type: "object",
											properties: {
												light: {
													description: (0, E.localize)(4783, null),
													type: "string",
												},
												dark: {
													description: (0, E.localize)(4784, null),
													type: "string",
												},
											},
										},
									],
								},
								when: {
									markdownDescription: (0, E.localize)(4785, null),
									type: "string",
								},
							},
						},
					},
				});
				function a(c, n) {
					return `${c.value}/${n}`;
				}
				let h = class {
					static {
						this.ID = "workbench.contrib.toolsExtensionPointHandler";
					}
					constructor(n, g) {
						(this.a = new t.$0c()),
							u.setHandler((p, o) => {
								for (const f of o.added)
									for (const b of f.value) {
										if (!b.id || !b.modelDescription) {
											g.error(
												`Extension '${f.description.identifier.value}' CANNOT register tool without name and modelDescription: ${JSON.stringify(b)}`,
											);
											continue;
										}
										if (!b.id.match(/^[\w-]+$/)) {
											g.error(
												`Extension '${f.description.identifier.value}' CANNOT register tool with invalid id: ${b.id}. The id must match /^[\\w-]+$/.`,
											);
											continue;
										}
										if (b.canBeInvokedManually && !b.name) {
											g.error(
												`Extension '${f.description.identifier.value}' CANNOT register tool with 'canBeInvokedManually' set without a name: ${JSON.stringify(b)}`,
											);
											continue;
										}
										const s = b.icon;
										let l;
										typeof s == "string"
											? (l = w.ThemeIcon.fromString(s) ?? {
													dark: (0, i.$nh)(f.description.extensionLocation, s),
													light: (0, i.$nh)(f.description.extensionLocation, s),
												})
											: s &&
												(l = {
													dark: (0, i.$nh)(
														f.description.extensionLocation,
														s.dark,
													),
													light: (0, i.$nh)(
														f.description.extensionLocation,
														s.light,
													),
												});
										const y = {
												...b,
												icon: l,
												when: b.when ? C.$Kj.deserialize(b.when) : void 0,
											},
											$ = n.registerToolData(y);
										this.a.set(a(f.description.identifier, b.id), $);
									}
								for (const f of o.removed)
									for (const b of f.value)
										this.a.deleteAndDispose(a(f.description.identifier, b.id));
							});
					}
				};
				(e.$YIc = h), (e.$YIc = h = Ne([j(0, m.$E2), j(1, d.$ik)], h));
			},
		),
		
define(
			de[3471],
			he([1, 0, 4, 175, 70, 3, 102, 244, 30]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qEc = e.$pEc = e.$oEc = void 0),
					(t = mt(t));
				const r = Object.freeze({
						type: "type",
						displayName: "displayName",
						selector: "selector",
						priority: "priority",
					}),
					u = Object.freeze({
						id: "id",
						displayName: "displayName",
						mimeTypes: "mimeTypes",
						entrypoint: "entrypoint",
						hardDependencies: "dependencies",
						optionalDependencies: "optionalDependencies",
						requiresMessaging: "requiresMessaging",
					}),
					a = Object.freeze({
						type: "type",
						entrypoint: "entrypoint",
						localResourceRoots: "localResourceRoots",
					}),
					h = {
						description: t.localize(8116, null),
						type: "array",
						defaultSnippets: [
							{
								body: [
									{
										type: "",
										displayName: "",
										selector: [{ filenamePattern: "" }],
									},
								],
							},
						],
						items: {
							type: "object",
							required: [r.type, r.displayName, r.selector],
							properties: {
								[r.type]: {
									type: "string",
									description: t.localize(8117, null),
								},
								[r.displayName]: {
									type: "string",
									description: t.localize(8118, null),
								},
								[r.selector]: {
									type: "array",
									description: t.localize(8119, null),
									items: {
										type: "object",
										properties: {
											filenamePattern: {
												type: "string",
												description: t.localize(8120, null),
											},
											excludeFileNamePattern: {
												type: "string",
												description: t.localize(8121, null),
											},
										},
									},
								},
								[r.priority]: {
									type: "string",
									markdownDeprecationMessage: t.localize(8122, null),
									enum: [
										w.NotebookEditorPriority.default,
										w.NotebookEditorPriority.option,
									],
									markdownEnumDescriptions: [
										t.localize(8123, null),
										t.localize(8124, null),
									],
									default: "default",
								},
							},
						},
					},
					c = Object.freeze({
						id: "",
						displayName: "",
						mimeTypes: [""],
						entrypoint: "",
					}),
					n = {
						description: t.localize(8125, null),
						type: "array",
						defaultSnippets: [{ body: [c] }],
						items: {
							defaultSnippets: [{ body: c }],
							allOf: [
								{
									type: "object",
									required: [u.id, u.displayName],
									properties: {
										[u.id]: {
											type: "string",
											description: t.localize(8126, null),
										},
										[u.displayName]: {
											type: "string",
											description: t.localize(8127, null),
										},
										[u.hardDependencies]: {
											type: "array",
											uniqueItems: !0,
											items: { type: "string" },
											markdownDescription: t.localize(8128, null),
										},
										[u.optionalDependencies]: {
											type: "array",
											uniqueItems: !0,
											items: { type: "string" },
											markdownDescription: t.localize(8129, null),
										},
										[u.requiresMessaging]: {
											default: "never",
											enum: ["always", "optional", "never"],
											enumDescriptions: [
												t.localize(8130, null),
												t.localize(8131, null),
												t.localize(8132, null),
											],
											description: t.localize(8133, null),
										},
									},
								},
								{
									oneOf: [
										{
											required: [u.entrypoint, u.mimeTypes],
											properties: {
												[u.mimeTypes]: {
													type: "array",
													description: t.localize(8134, null),
													items: { type: "string" },
												},
												[u.entrypoint]: {
													description: t.localize(8135, null),
													type: "string",
												},
											},
										},
										{
											required: [u.entrypoint],
											properties: {
												[u.entrypoint]: {
													description: t.localize(8136, null),
													type: "object",
													required: ["extends", "path"],
													properties: {
														extends: {
															type: "string",
															description: t.localize(8137, null),
														},
														path: {
															type: "string",
															description: t.localize(8138, null),
														},
													},
												},
											},
										},
									],
								},
							],
						},
					},
					g = {
						description: t.localize(8139, null),
						type: "array",
						defaultSnippets: [{ body: [{ type: "", entrypoint: "" }] }],
						items: {
							type: "object",
							required: [a.type, a.entrypoint],
							properties: {
								[a.type]: {
									type: "string",
									description: t.localize(8140, null),
								},
								[a.entrypoint]: {
									type: "string",
									description: t.localize(8141, null),
								},
								[a.localResourceRoots]: {
									type: "array",
									items: { type: "string" },
									description: t.localize(8142, null),
								},
							},
						},
					};
				(e.$oEc = i.$n2.registerExtensionPoint({
					extensionPoint: "notebooks",
					jsonSchema: h,
					activationEventsGenerator: (f, b) => {
						for (const s of f)
							s.type && b.push(`onNotebookSerializer:${s.type}`);
					},
				})),
					(e.$pEc = i.$n2.registerExtensionPoint({
						extensionPoint: "notebookRenderer",
						jsonSchema: n,
						activationEventsGenerator: (f, b) => {
							for (const s of f) s.id && b.push(`onRenderer:${s.id}`);
						},
					})),
					(e.$qEc = i.$n2.registerExtensionPoint({
						extensionPoint: "notebookPreload",
						jsonSchema: g,
					}));
				class p extends E.$1c {
					constructor() {
						super(...arguments), (this.type = "table");
					}
					shouldRender(b) {
						return !!b.contributes?.notebooks;
					}
					render(b) {
						const s = b.contributes?.notebooks || [];
						if (!s.length)
							return { data: { headers: [], rows: [] }, dispose: () => {} };
						const l = [t.localize(8143, null), t.localize(8144, null)],
							y = s
								.sort(($, v) => $.type.localeCompare(v.type))
								.map(($) => [$.type, $.displayName]);
						return { data: { headers: l, rows: y }, dispose: () => {} };
					}
				}
				class o extends E.$1c {
					constructor() {
						super(...arguments), (this.type = "table");
					}
					shouldRender(b) {
						return !!b.contributes?.notebookRenderer;
					}
					render(b) {
						const s = b.contributes?.notebookRenderer || [];
						if (!s.length)
							return { data: { headers: [], rows: [] }, dispose: () => {} };
						const l = [t.localize(8145, null), t.localize(8146, null)],
							y = s
								.sort(($, v) => $.displayName.localeCompare(v.displayName))
								.map(($) => [$.displayName, $.mimeTypes.join(",")]);
						return { data: { headers: l, rows: y }, dispose: () => {} };
					}
				}
				m.$Io
					.as(d.Extensions.ExtensionFeaturesRegistry)
					.registerExtensionFeature({
						id: "notebooks",
						label: t.localize(8147, null),
						access: { canToggle: !1 },
						renderer: new C.$Ji(p),
					}),
					m.$Io
						.as(d.Extensions.ExtensionFeaturesRegistry)
						.registerExtensionFeature({
							id: "notebookRenderer",
							label: t.localize(8148, null),
							access: { canToggle: !1 },
							renderer: new C.$Ji(o),
						});
			},
		),
		
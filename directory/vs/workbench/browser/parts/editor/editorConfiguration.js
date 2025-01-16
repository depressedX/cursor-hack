define(
			de[3575],
			he([1, 0, 4, 30, 3, 81, 224, 231, 53, 24, 6, 78, 22]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				var c;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zuc = void 0);
				let n = class extends w.$1c {
					static {
						c = this;
					}
					static {
						this.ID = "workbench.contrib.dynamicEditorConfigurations";
					}
					static {
						this.a = new Set([
							"terminalEditor",
							"mainThreadWebview-simpleBrowser.view",
							"mainThreadWebview-browserPreview",
						]);
					}
					static {
						this.b = [
							{
								id: "workbench.input.interactive",
								label: (0, t.localize)(3432, null),
								priority: d.RegisteredEditorPriority.builtin,
							},
							{
								id: "mainThreadWebview-markdown.preview",
								label: (0, t.localize)(3433, null),
								priority: d.RegisteredEditorPriority.builtin,
							},
							{
								id: "mainThreadWebview-simpleBrowser.view",
								label: (0, t.localize)(3434, null),
								priority: d.RegisteredEditorPriority.builtin,
							},
							{
								id: "mainThreadWebview-browserPreview",
								label: (0, t.localize)(3435, null),
								priority: d.RegisteredEditorPriority.builtin,
							},
						];
					}
					static {
						this.c = new Set([
							"vscode-interactive-input",
							"interactive",
							"vscode.markdown.preview.editor",
						]);
					}
					constructor(p, o, f) {
						super(),
							(this.n = p),
							(this.q = f),
							(this.f = i.$Io.as(E.$No.Configuration)),
							(async () => (
								await o.whenInstalledExtensionsRegistered(), this.s(), this.r()
							))();
					}
					r() {
						this.D(
							u.Event.debounce(
								this.n.onDidChangeEditorRegistrations,
								(p, o) => o,
							)(() => this.s()),
						);
					}
					s() {
						const p = [...this.n.getEditors(), ...c.b].filter(
								(v) => !c.c.has(v.id),
							),
							o = this.n
								.getEditors()
								.filter(
									(v) => v.priority !== d.RegisteredEditorPriority.exclusive,
								)
								.map((v) => v.id),
							f = Object.create(null);
						for (const v of p)
							f[v.id] = {
								type: "boolean",
								default: c.a.has(v.id),
								description: v.label,
							};
						const b = Object.create(null);
						for (const v of p) b[v.id] = c.a.has(v.id);
						const s = this.g;
						this.g = {
							...C.$v6,
							properties: {
								"workbench.editor.autoLockGroups": {
									type: "object",
									description: (0, t.localize)(3436, null),
									properties: f,
									default: b,
									additionalProperties: !1,
								},
							},
						};
						const l = this.h;
						this.h = {
							...C.$v6,
							properties: {
								"workbench.editor.defaultBinaryEditor": {
									type: "string",
									default: "",
									enum: [...o, ""],
									description: (0, t.localize)(3437, null),
								},
							},
						};
						const y = this.j;
						this.j = {
							...C.$v6,
							properties: {
								"workbench.editorAssociations": {
									type: "object",
									markdownDescription: (0, t.localize)(3438, null),
									patternProperties: { ".*": { type: "string", enum: o } },
								},
							},
						};
						const $ = this.m;
						(this.m = {
							...C.$v6,
							properties: {
								"workbench.editorLargeFileConfirmation": {
									type: "number",
									default: (0, h.$Ul)(this.q.remoteAuthority) / h.$Tl.MB,
									minimum: 1,
									scope: E.ConfigurationScope.RESOURCE,
									markdownDescription: (0, t.localize)(3439, null),
								},
							},
						}),
							this.f.updateConfigurations({
								add: [this.g, this.h, this.j, this.m],
								remove: (0, r.$Lb)([s, l, y, $]),
							});
					}
				};
				(e.$zuc = n),
					(e.$zuc = n = c = Ne([j(0, d.$E6), j(1, m.$q2), j(2, a.$r8)], n));
			},
		),
		
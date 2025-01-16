define(de[1033], he([1, 0, 81, 224, 4, 30]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.externalUriOpenersConfigurationNode =
					e.externalUriOpenersSettingId =
					e.defaultExternalUriOpenerId =
						void 0),
				(e.updateContributedOpeners = m),
				(w = mt(w)),
				(e.defaultExternalUriOpenerId = "default"),
				(e.externalUriOpenersSettingId = "workbench.externalUriOpeners");
			const C = { type: "string", enum: [] },
				d =
					"\n- `https://microsoft.com`: Matches this specific domain using https\n- `https://microsoft.com:8080`: Matches this specific domain on this port using https\n- `https://microsoft.com:*`: Matches this specific domain on any port using https\n- `https://microsoft.com/foo`: Matches `https://microsoft.com/foo` and `https://microsoft.com/foo/bar`, but not `https://microsoft.com/foobar` or `https://microsoft.com/bar`\n- `https://*.microsoft.com`: Match all domains ending in `microsoft.com` using https\n- `microsoft.com`: Match this specific domain using either http or https\n- `*.microsoft.com`: Match all domains ending in `microsoft.com` using either http or https\n- `http://192.168.0.1`: Matches this specific IP using http\n- `http://192.168.0.*`: Matches all IP's with this prefix using http\n- `*`: Match all domains using either http or https";
			e.externalUriOpenersConfigurationNode = {
				...i.$v6,
				properties: {
					[e.externalUriOpenersSettingId]: {
						type: "object",
						markdownDescription: w.localize(6646, null),
						defaultSnippets: [{ body: { "example.com": "$1" } }],
						additionalProperties: {
							anyOf: [
								{
									type: "string",
									markdownDescription: w.localize(6647, null, d),
								},
								{
									type: "string",
									markdownDescription: w.localize(6648, null, d),
									enum: [e.defaultExternalUriOpenerId],
									enumDescriptions: [w.localize(6649, null)],
								},
								C,
							],
						},
					},
				},
			};
			function m(r, u) {
				(C.enum = r),
					(C.enumDescriptions = u),
					E.$Io
						.as(t.$No.Configuration)
						.notifyConfigurationSchemaUpdated(
							e.externalUriOpenersConfigurationNode,
						);
			}
		}),
		define(
			de[3554],
			he([1, 0, 3, 21, 282, 1033, 53]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				var d;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ContributedExternalUriOpenersStore = void 0);
				let m = class extends t.$1c {
					static {
						d = this;
					}
					static {
						this.STORAGE_ID = "externalUriOpeners";
					}
					constructor(u, a) {
						super(),
							(this._extensionService = a),
							(this._openers = new Map()),
							(this._memento = new w.$eEb(d.STORAGE_ID, u)),
							(this._mementoObject = this._memento.getMemento(
								i.StorageScope.PROFILE,
								i.StorageTarget.MACHINE,
							));
						for (const [h, c] of Object.entries(this._mementoObject || {}))
							this.add(h, c.extensionId, { isCurrentlyRegistered: !1 });
						this.invalidateOpenersOnExtensionsChanged(),
							this.D(
								this._extensionService.onDidChangeExtensions(() =>
									this.invalidateOpenersOnExtensionsChanged(),
								),
							),
							this.D(
								this._extensionService.onDidChangeExtensionsStatus(() =>
									this.invalidateOpenersOnExtensionsChanged(),
								),
							);
					}
					didRegisterOpener(u, a) {
						this.add(u, a, { isCurrentlyRegistered: !0 });
					}
					add(u, a, h) {
						const c = this._openers.get(u);
						if (c) {
							c.isCurrentlyRegistered =
								c.isCurrentlyRegistered || h.isCurrentlyRegistered;
							return;
						}
						const n = {
							extensionId: a,
							isCurrentlyRegistered: h.isCurrentlyRegistered,
						};
						this._openers.set(u, n),
							(this._mementoObject[u] = n),
							this._memento.saveMemento(),
							this.updateSchema();
					}
					delete(u) {
						this._openers.delete(u),
							delete this._mementoObject[u],
							this._memento.saveMemento(),
							this.updateSchema();
					}
					async invalidateOpenersOnExtensionsChanged() {
						await this._extensionService.whenInstalledExtensionsRegistered();
						const u = this._extensionService.extensions;
						for (const [a, h] of this._openers) {
							const c = u.find((n) => n.identifier.value === h.extensionId);
							c
								? this._extensionService.canRemoveExtension(c) ||
									h.isCurrentlyRegistered ||
									this.delete(a)
								: this.delete(a);
						}
					}
					updateSchema() {
						const u = [],
							a = [];
						for (const [h, c] of this._openers)
							u.push(h), a.push(c.extensionId);
						(0, E.updateContributedOpeners)(u, a);
					}
				};
				(e.ContributedExternalUriOpenersStore = m),
					(e.ContributedExternalUriOpenersStore =
						m =
						d =
							Ne([j(0, i.$lq), j(1, C.$q2)], m));
			},
		),
		define(
			de[1034],
			he([
				1, 0, 24, 103, 3, 273, 12, 9, 74, 4, 10, 5, 34, 41, 63, 1033, 1783, 131,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ExternalUriOpenerService = e.IExternalUriOpenerService = void 0),
					(m = mt(m)),
					(r = mt(r)),
					(e.IExternalUriOpenerService = (0, a.$Mi)(
						"externalUriOpenerService",
					));
				let f = class extends w.$1c {
					constructor(s, l, y, $, v) {
						super(),
							(this.configurationService = l),
							(this.logService = y),
							(this.preferencesService = $),
							(this.quickInputService = v),
							(this._providers = new E.$$c()),
							this.D(s.registerExternalOpener(this));
					}
					registerExternalOpenerProvider(s) {
						return { dispose: this._providers.push(s) };
					}
					async getOpeners(s, l, y, $) {
						const v = await this.getAllOpenersForUri(s);
						if (v.size === 0) return [];
						if (y.preferredOpenerId) {
							if (y.preferredOpenerId === g.defaultExternalUriOpenerId)
								return [];
							const P = v.get(y.preferredOpenerId);
							if (P) return [P];
						}
						const S = this.getConfiguredOpenerForUri(v, s);
						if (S) return S === g.defaultExternalUriOpenerId ? [] : [S];
						const I = [];
						if (
							(await Promise.all(
								Array.from(v.values()).map(async (P) => {
									let k;
									try {
										k = await P.canOpen(y.sourceUri, $);
									} catch (L) {
										this.logService.error(L);
										return;
									}
									switch (k) {
										case m.ExternalUriOpenerPriority.Option:
										case m.ExternalUriOpenerPriority.Default:
										case m.ExternalUriOpenerPriority.Preferred:
											I.push({ opener: P, priority: k });
											break;
									}
								}),
							),
							I.length === 0)
						)
							return [];
						const T = (0, t.$Sb)(
							I.filter(
								(P) => P.priority === m.ExternalUriOpenerPriority.Preferred,
							),
						);
						return T
							? [T.opener]
							: !l &&
									I.every(
										(P) => P.priority === m.ExternalUriOpenerPriority.Option,
									)
								? []
								: I.map((P) => P.opener);
					}
					async openExternal(s, l, y) {
						const $ = typeof s == "string" ? d.URI.parse(s) : s,
							v = await this.getOpeners($, !1, l, y);
						return v.length === 0
							? !1
							: v.length === 1
								? v[0].openExternalUri($, l, y)
								: this.showOpenerPrompt(v, $, l, y);
					}
					async getOpener(s, l, y) {
						const $ = await this.getOpeners(s, !0, l, y);
						if ($.length >= 1) return $[0];
					}
					async getAllOpenersForUri(s) {
						const l = new Map();
						return (
							await Promise.all(
								i.Iterable.map(this._providers, async (y) => {
									for await (const $ of y.getOpeners(s)) l.set($.id, $);
								}),
							),
							l
						);
					}
					getConfiguredOpenerForUri(s, l) {
						const y =
							this.configurationService.getValue(
								g.externalUriOpenersSettingId,
							) || {};
						for (const [$, v] of Object.entries(y))
							if ((0, p.$YXb)(l, $)) {
								if (v === g.defaultExternalUriOpenerId) return "default";
								const S = s.get(v);
								if (S) return S;
							}
					}
					async showOpenerPrompt(s, l, y, $) {
						const v = s.map((I) => ({ label: I.label, opener: I }));
						v.push(
							{
								label: C.$r ? r.localize(6650, null) : r.localize(6651, null),
								opener: void 0,
							},
							{ type: "separator" },
							{ label: r.localize(6652, null), opener: "configureDefault" },
						);
						const S = await this.quickInputService.pick(v, {
							placeHolder: r.localize(6653, null, l.toString()),
						});
						return S
							? typeof S.opener > "u"
								? !1
								: S.opener === "configureDefault"
									? (await this.preferencesService.openUserSettings({
											jsonEditor: !0,
											revealSetting: {
												key: g.externalUriOpenersSettingId,
												edit: !0,
											},
										}),
										!0)
									: S.opener.openExternalUri(l, y, $)
							: !0;
					}
				};
				(e.ExternalUriOpenerService = f),
					(e.ExternalUriOpenerService = f =
						Ne(
							[
								j(0, c.$7rb),
								j(1, u.$gj),
								j(2, h.$ik),
								j(3, o.$7Z),
								j(4, n.$DJ),
							],
							f,
						));
			},
		),
		define(
			de[3555],
			he([1, 0, 50, 29, 3, 23, 4, 40, 41, 21, 88, 1033, 3554, 1034, 53, 101]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Noc = void 0);
				let p = class extends w.$1c {
					constructor(f, b, s, l, y, $) {
						super(),
							(this.f = l),
							(this.g = y),
							(this.h = $),
							(this.b = new Map()),
							(this.a = f.getProxy(u.$mbb.ExtHostUriOpeners)),
							this.D(s.registerExternalOpenerProvider(this)),
							(this.c = this.D(new h.ContributedExternalUriOpenersStore(b, l)));
					}
					async *getOpeners(f) {
						if (
							!(f.scheme !== E.Schemas.http && f.scheme !== E.Schemas.https)
						) {
							await this.f.activateByEvent(`onOpenExternalUri:${f.scheme}`);
							for (const [b, s] of this.b)
								s.schemes.has(f.scheme) && (yield this.j(b, s));
						}
					}
					j(f, b) {
						return {
							id: f,
							label: b.label,
							canOpen: (s, l) => this.a.$canOpenUri(f, s, l),
							openExternalUri: async (s, l, y) => {
								try {
									await this.a.$openUri(
										f,
										{ resolvedUri: s, sourceUri: l.sourceUri },
										y,
									);
								} catch ($) {
									if (!(0, i.$8)($)) {
										const v = new t.$rj(
											"default",
											(0, C.localize)(2582, null),
											void 0,
											void 0,
											async () => {
												await this.g.open(s, {
													allowTunneling: !1,
													allowContributedOpeners: a.defaultExternalUriOpenerId,
												});
											},
										);
										(v.tooltip = s.toString()),
											this.h.notify({
												severity: d.Severity.Error,
												message: (0, C.localize)(2583, null, f, $.toString()),
												actions: { primary: [v] },
											});
									}
								}
								return !0;
							},
						};
					}
					async $registerUriOpener(f, b, s, l) {
						if (this.b.has(f))
							throw new Error(`Opener with id '${f}' already registered`);
						this.b.set(f, { schemes: new Set(b), label: l, extensionId: s }),
							this.c.didRegisterOpener(f, s.value);
					}
					async $unregisterUriOpener(f) {
						this.b.delete(f), this.c.delete(f);
					}
					dispose() {
						super.dispose(), this.b.clear();
					}
				};
				(e.$Noc = p),
					(e.$Noc = p =
						Ne(
							[
								(0, g.$tmc)(u.$lbb.MainThreadUriOpeners),
								j(1, r.$lq),
								j(2, c.IExternalUriOpenerService),
								j(3, n.$q2),
								j(4, m.$7rb),
								j(5, d.$4N),
							],
							p,
						));
			},
		),
		define(
			de[3556],
			he([1, 0, 81, 20, 30, 1033, 1034]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, i.$lK)(
						C.IExternalUriOpenerService,
						C.ExternalUriOpenerService,
						i.InstantiationType.Delayed,
					),
					w.$Io
						.as(t.$No.Configuration)
						.registerConfiguration(E.externalUriOpenersConfigurationNode);
			},
		),
		define(
			de[3557],
			he([1, 0, 65, 178, 8, 1857, 207, 257]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$mJc = void 0);
				class m {
					constructor() {
						(this.priority = 106),
							(this.name = "inlineChat"),
							(this.type = i.AccessibleViewType.Help),
							(this.when = w.$Kj.or(d.$ZKb, C.$21));
					}
					getProvider(u) {
						const a =
							u.get(t.$dtb).getActiveCodeEditor() ||
							u.get(t.$dtb).getFocusedCodeEditor();
						if (a) return (0, E.$xIc)(u, a, "inlineChat");
					}
				}
				e.$mJc = m;
			},
		),
		define(
			de[1858],
			he([1, 0, 7, 127, 460, 6, 3, 12, 56, 38, 4, 10, 39, 130, 986]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				var g;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$sJc = void 0),
					(t = mt(t));
				let p = class extends C.$1c {
					static {
						g = this;
					}
					static {
						this.a = "replInput.widget.emptyHint";
					}
					constructor(f, b, s) {
						super(),
							(this.f = f),
							(this.g = b),
							(this.h = s),
							(this.c = ""),
							this.D(
								this.f.onDidChangeConfiguration((y) => {
									this.b &&
										y.hasChanged(r.EditorOption.fontInfo) &&
										this.f.applyFontInfo(this.b);
								}),
							);
						const l = E.Event.debounce(
							this.f.onDidFocusEditorText,
							() => {},
							500,
						);
						this.D(
							l(() => {
								this.f.hasTextFocus() &&
									this.c &&
									b.getValue(c.AccessibilityVerbositySettingId.ReplInputHint) &&
									(0, i.$pib)(this.c);
							}),
						),
							this.D(
								b.onDidChangeConfiguration((y) => {
									y.affectsConfiguration(n.$rJc.executeWithShiftEnter) &&
										this.j();
								}),
							),
							this.f.addContentWidget(this);
					}
					getId() {
						return g.a;
					}
					getPosition() {
						return {
							position: { lineNumber: 1, column: 1 },
							preference: [m.ContentWidgetPositionPreference.EXACT],
						};
					}
					getDomNode() {
						return (
							this.b ||
								((this.b = t.$(".empty-editor-hint")),
								(this.b.style.width = "max-content"),
								(this.b.style.paddingLeft = "4px"),
								this.j(),
								this.D(
									t.$0fb(this.b, "click", () => {
										this.f.focus();
									}),
								),
								this.f.applyFontInfo(this.b)),
							this.b
						);
					}
					j() {
						if (!this.b) return;
						for (; this.b.firstChild; ) this.b.removeChild(this.b.firstChild);
						const f = t.$("div.empty-hint-text");
						(f.style.cursor = "text"), (f.style.whiteSpace = "nowrap");
						const b = this.m(),
							s = b?.getLabel();
						if (b && s) {
							const l = (0, u.localize)(7170, null, s),
								[y, $] = l.split(s).map((S) => {
									const I = t.$("span", void 0, S);
									return (I.style.fontStyle = "italic"), I;
								});
							f.appendChild(y);
							const v = new w.$7ob(f, d.OS);
							v.set(b),
								(v.element.style.width = "min-content"),
								(v.element.style.display = "inline"),
								f.appendChild($),
								this.b.append(f),
								(this.c = l.concat(
									(0, u.localize)(
										7171,
										null,
										c.AccessibilityVerbositySettingId.ReplInputHint,
									),
								));
						}
					}
					m() {
						const f = this.h.lookupKeybindings("interactive.execute"),
							b = this.g.getValue(n.$rJc.executeWithShiftEnter),
							s = (l, y = "") => {
								const $ = l.getDispatchChords(),
									v = y + "Enter",
									S = y + "[Enter]";
								return $.length === 1 && ($[0] === v || $[0] === S);
							};
						if (b) {
							const l = f.find((y) => s(y, "shift+"));
							if (l) return l;
						} else {
							let l = f.find((y) => s(y));
							if (
								l ||
								((l = this.h
									.lookupKeybindings("python.execInREPLEnter")
									.find((y) => s(y))),
								l)
							)
								return l;
						}
						return f?.[0];
					}
					dispose() {
						super.dispose(), this.f.removeContentWidget(this);
					}
				};
				(e.$sJc = p), (e.$sJc = p = g = Ne([j(1, a.$gj), j(2, h.$uZ)], p));
			},
		),
		define(
			de[3558],
			he([1, 0, 176, 4, 178, 130, 18, 65]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nIc = void 0),
					(e.$oIc = r),
					(e.$pIc = u);
				class m {
					constructor() {
						(this.priority = 105),
							(this.name = "notebook"),
							(this.when = t.$pJb),
							(this.type = w.AccessibleViewType.Help);
					}
					getProvider(h) {
						const c =
							h.get(d.$dtb).getActiveCodeEditor() ||
							h.get(d.$dtb).getFocusedCodeEditor() ||
							h.get(C.$IY).activeEditorPane;
						if (c) return u(h, c);
					}
				}
				e.$nIc = m;
				function r() {
					return [
						(0, i.localize)(8071, null),
						(0, i.localize)(8072, null, "<keybinding:notebook.cell.edit>"),
						(0, i.localize)(8073, null, "<keybinding:notebook.cell.quitEdit>"),
						(0, i.localize)(
							8074,
							null,
							"<keybinding:notebook.cell.focusInOutput>",
						),
						(0, i.localize)(
							8075,
							null,
							"<keybinding:notebook.focusNextEditor>",
						),
						(0, i.localize)(
							8076,
							null,
							"<keybinding:notebook.focusPreviousEditor>",
						),
						(0, i.localize)(8077, null),
						(0, i.localize)(
							8078,
							null,
							"<keybinding:notebook.cell.executeAndFocusContainer>",
						),
						(0, i.localize)(
							8079,
							null,
							"<keybinding:notebook.cell.insertCodeCellAbove>",
							"<keybinding:notebook.cell.insertCodeCellBelow>",
						),
						(0, i.localize)(8080, null),
					].join(`
`);
				}
				function u(a, h) {
					const c = r();
					return new w.$ILb(
						w.AccessibleViewProviderId.Notebook,
						{ type: w.AccessibleViewType.Help },
						() => c,
						() => h.focus(),
						E.AccessibilityVerbositySettingId.Notebook,
					);
				}
			},
		),
		define(
			de[3559],
			he([1, 0, 6, 3, 77, 4, 130, 417, 70, 190]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Y4b = void 0),
					(E = mt(E));
				class u extends i.$1c {
					constructor(h, c, n, g) {
						super(),
							(this.c = h),
							(this.f = c),
							(this.g = n),
							(this.h = g),
							(this.a = new t.$re()),
							(this.b = this.a.event),
							this.D(
								t.Event.debounce(
									this.c.onDidChangeExecution,
									(p, o) => this.m(p, o),
									100,
								)((p) => {
									const o = this.f();
									if (o)
										for (const f of p) {
											const b = o.getCellByHandle(f);
											b && this.a.fire(b);
										}
								}, this),
							);
					}
					getAriaLabel(h) {
						const c = t.Event.filter(this.b, (n) => n === h);
						return (0, w.observableFromEvent)(this, c, () => {
							const n = this.f();
							if (!n) return "";
							const g = n.getCellIndex(h);
							return g >= 0 ? this.j(g, h) : "";
						});
					}
					j(h, c) {
						const n = this.c.getCellExecution(c.uri)?.state,
							g =
								n === m.NotebookCellExecutionState.Executing
									? ", executing"
									: n === m.NotebookCellExecutionState.Pending
										? ", pending"
										: "";
						return `Cell ${h}, ${c.cellKind === m.CellKind.Markup ? "markdown" : "code"} cell${g}`;
					}
					getWidgetAriaLabel() {
						const h = this.g
							.lookupKeybinding(d.AccessibilityCommandId.OpenAccessibilityHelp)
							?.getLabel();
						return this.h.getValue(C.AccessibilityVerbositySettingId.Notebook)
							? h
								? E.localize(8081, null, h)
								: E.localize(8082, null, h)
							: E.localize(8083, null);
					}
					m(h, c) {
						const n = this.f(),
							g = h || [];
						return (
							n &&
								c.type === r.NotebookExecutionType.cell &&
								c.affectsNotebook(n.uri) &&
								g.indexOf(c.cellHandle) < 0 &&
								g.push(c.cellHandle),
							g
						);
					}
				}
				e.$Y4b = u;
			},
		),
		define(
			de[3560],
			he([1, 0, 178, 8, 130, 108, 176, 18]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qIc = void 0),
					(e.$rIc = r);
				class m {
					constructor() {
						(this.priority = 100),
							(this.name = "notebook"),
							(this.type = t.AccessibleViewType.View),
							(this.when = i.$Kj.and(
								C.$rJb,
								i.$Kj.equals("resourceExtname", ".ipynb"),
							));
					}
					getProvider(a) {
						const h = a.get(d.$IY);
						return r(h);
					}
				}
				e.$qIc = m;
				function r(u) {
					const a = u.activeEditorPane,
						h = (0, E.$eJb)(a),
						c = h?.getViewModel(),
						n = c?.getSelections(),
						g = c?.notebookDocument;
					if (!n || !g || !h?.textModel) return;
					const p = c.viewCells[n[0].start];
					let o = "";
					const f = new TextDecoder();
					for (let b = 0; b < p.outputsViewModels.length; b++) {
						const s = p.outputsViewModels[b],
							l = p.model.outputs[b],
							[y, $] = s.resolveMimeTypes(h.textModel, void 0),
							v = y[$].mimeType;
						let S = l.outputs.find((P) => P.mime === v);
						(!S || v.startsWith("image")) &&
							(S = l.outputs.find((P) => !P.mime.startsWith("image")));
						let I = `${v}`;
						S &&
							((I = f.decode(S.data.slice(0, 1e5).buffer)),
							S.data.byteLength > 1e5 && (I = I + "...(truncated)"),
							v.endsWith("error") &&
								(I = I.replace(/\\u001b\[[0-9;]*m/gi, "").replaceAll(
									"\\n",
									`
`,
								)));
						const T =
							p.outputsViewModels.length > 1
								? `Cell output ${b + 1} of ${p.outputsViewModels.length}
`
								: "";
						o = o.concat(`${T}${I}
`);
					}
					if (o)
						return new t.$ILb(
							t.AccessibleViewProviderId.Notebook,
							{ type: t.AccessibleViewType.View },
							() => o,
							() => {
								h?.setFocus(n[0]), a?.focus();
							},
							w.AccessibilityVerbositySettingId.Notebook,
						);
				}
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[3561],
		he([1, 0, 143, 78, 4, 12, 32, 438, 823, 41, 87, 21, 62, 57, 14, 111]),
		function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$HXc = void 0),
				(g = xi(g));
			const p = "remote.unsupportedConnectionChoice",
				o = "workbench.banner.remote.unsupportedConnection.dismissed";
			let f = class {
				constructor(s, l, y, $, v, S, I, T, P) {
					(this.a = s),
						(this.b = l),
						(this.c = y),
						(this.d = $),
						(this.e = v),
						(this.f = S),
						(this.g = I),
						(this.h = T),
						(this.i = P),
						this.b.remoteAuthority && this.k();
				}
				async j() {
					let s;
					(function (v) {
						(v[(v.Allow = 1)] = "Allow"),
							(v[(v.LearnMore = 2)] = "LearnMore"),
							(v[(v.Cancel = 0)] = "Cancel");
					})(s || (s = {}));
					const { result: l, checkboxChecked: y } = await this.e.prompt({
						type: g.default.Warning,
						message: (0, w.localize)(8743, null, this.i.nameLong),
						buttons: [
							{ label: (0, w.localize)(8744, null), run: () => s.Allow },
							{
								label: (0, w.localize)(8745, null),
								run: async () => (
									await this.f.open(
										"https://aka.ms/vscode-remote/faq/old-linux",
									),
									s.LearnMore
								),
							},
						],
						cancelButton: { run: () => s.Cancel },
						checkbox: { label: (0, w.localize)(8746, null) },
					});
					if (l === s.LearnMore) return await this.j();
					const $ = l === s.Allow;
					return (
						$ &&
							y &&
							this.h.store(
								`${p}.${this.b.remoteAuthority}`,
								$,
								a.StorageScope.PROFILE,
								a.StorageTarget.MACHINE,
							),
						$
					);
				}
				async k() {
					try {
						const s = await this.a.getRawEnvironment();
						if (s && s.isUnsupportedGlibc) {
							let l = this.h.getBoolean(
								`${p}.${this.b.remoteAuthority}`,
								a.StorageScope.PROFILE,
							);
							if ((l === void 0 && (l = await this.j()), l)) {
								const y = this.h.get(`${o}`, a.StorageScope.PROFILE) ?? "";
								if (
									y.slice(0, y.lastIndexOf(".")) !==
									this.i.version.slice(0, this.i.version.lastIndexOf("."))
								) {
									const v = [
										{
											label: (0, w.localize)(8747, null),
											href: "https://aka.ms/vscode-remote/faq/old-linux",
										},
									];
									this.d.show({
										id: "unsupportedGlibcWarning.banner",
										message: (0, w.localize)(8748, null, this.i.nameLong),
										actions: v,
										icon: n.$ak.warning,
										closeLabel: `Do not show again in v${this.i.version}`,
										onClose: () => {
											this.h.store(
												`${o}`,
												this.i.version,
												a.StorageScope.PROFILE,
												a.StorageTarget.MACHINE,
											);
										},
									});
								}
							} else {
								this.g.openWindow({
									forceReuseWindow: !0,
									remoteAuthority: null,
								});
								return;
							}
						}
						this.c.publicLog2("remoteConnectionSuccess", {
							web: E.$r,
							connectionTimeMs: await this.a
								.getConnection()
								?.getInitialConnectionTimeMs(),
							remoteName: (0, d.$xn)(this.b.remoteAuthority),
						}),
							await this.l();
					} catch (s) {
						this.c.publicLog2("remoteConnectionFailure", {
							web: E.$r,
							connectionTimeMs: await this.a
								.getConnection()
								?.getInitialConnectionTimeMs(),
							remoteName: (0, d.$xn)(this.b.remoteAuthority),
							message: s ? s.message : "",
						});
					}
				}
				async l() {
					const s = await t.$_m.measure(this.a);
					s !== void 0 &&
						this.c.publicLog2("remoteConnectionLatency", {
							web: E.$r,
							remoteName: (0, d.$xn)(this.b.remoteAuthority),
							latencyMs: s.current,
						});
				}
			};
			(e.$HXc = f),
				(e.$HXc = f =
					Ne(
						[
							j(0, t.$$m),
							j(1, i.$r8),
							j(2, C.$km),
							j(3, m.$$uc),
							j(4, c.$GO),
							j(5, r.$7rb),
							j(6, u.$asb),
							j(7, a.$lq),
							j(8, h.$Bk),
						],
						f,
					));
		},
	),
		define(
			de[3562],
			he([
				1, 0, 55, 30, 52, 73, 12, 23, 143, 34, 4, 3, 81, 22, 57, 78, 25, 24, 11,
				99, 604, 665, 2706, 1620,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nXc = void 0);
				let v = class {
					static {
						this.ID = "workbench.contrib.remoteLabel";
					}
					constructor(D, M) {
						(this.a = D), (this.b = M), this.c();
					}
					c() {
						this.b.getEnvironment().then((D) => {
							const M = D?.os || C.OS,
								N = {
									label: "${path}",
									separator: M === C.OperatingSystem.Windows ? "\\" : "/",
									tildify: M !== C.OperatingSystem.Windows,
									normalizeDriveLetter: M === C.OperatingSystem.Windows,
									workspaceSuffix: C.$r ? void 0 : d.Schemas.vscodeRemote,
								};
							this.a.registerFormatter({
								scheme: d.Schemas.vscodeRemote,
								formatting: N,
							}),
								D &&
									this.a.registerFormatter({
										scheme: d.Schemas.vscodeUserData,
										formatting: N,
									});
						});
					}
				};
				(e.$nXc = v), (e.$nXc = v = Ne([j(0, E.$3N), j(1, m.$$m)], v));
				let S = class extends a.$1c {
					constructor(D, M, N) {
						super();
						const A = D.getConnection();
						A &&
							(A.registerChannel("download", new y.$hp(M)),
							A.withChannel("logger", async (R) => this.D(new $.$2J(N, R))));
					}
				};
				S = Ne([j(0, m.$$m), j(1, l.$gp), j(2, r.$jk)], S);
				let I = class extends a.$1c {
					static {
						this.ID = "workbench.contrib.remoteInvalidWorkspaceDetector";
					}
					constructor(D, M, N, A, R, O) {
						super(),
							(this.a = D),
							(this.b = M),
							(this.c = N),
							(this.f = A),
							(this.g = R),
							this.c.remoteAuthority &&
								O.getEnvironment().then((B) => {
									B && this.h();
								});
					}
					async h() {
						const D = this.f.getWorkspace(),
							M = D.configuration ?? (0, o.$Sb)(D.folders)?.uri;
						if (!M || (await this.a.exists(M))) return;
						if (
							(
								await this.b.confirm({
									type: "warning",
									message: (0, u.localize)(8870, null),
									detail: (0, u.localize)(8871, null),
									primaryButton: (0, u.localize)(8872, null),
								})
							).confirmed
						)
							return D.configuration
								? this.g.pickWorkspaceAndOpen({})
								: this.g.pickFolderAndOpen({});
					}
				};
				I = Ne(
					[
						j(0, c.$ll),
						j(1, n.$GO),
						j(2, g.$r8),
						j(3, p.$Vi),
						j(4, n.$IO),
						j(5, m.$$m),
					],
					I,
				);
				const T = i.$Io.as(t.Extensions.Workbench);
				if (
					((0, t.$s6)(v.ID, v, t.WorkbenchPhase.BlockStartup),
					T.registerWorkbenchContribution(S, w.LifecyclePhase.Restored),
					(0, t.$s6)(I.ID, I, t.WorkbenchPhase.BlockStartup),
					!0)
				) {
					class L extends f.$3X {
						constructor() {
							super({
								id: "workbench.action.triggerReconnect",
								title: (0, u.localize2)(8914, "Connection: Trigger Reconnect"),
								category: b.$ck.Developer,
								f1: !0,
							});
						}
						async run(N) {
							s.$hm.debugTriggerReconnection();
						}
					}
					class D extends f.$3X {
						constructor() {
							super({
								id: "workbench.action.pauseSocketWriting",
								title: (0, u.localize2)(
									8915,
									"Connection: Pause socket writing",
								),
								category: b.$ck.Developer,
								f1: !0,
							});
						}
						async run(N) {
							s.$hm.debugPauseSocketWriting();
						}
					}
					(0, f.$4X)(L), (0, f.$4X)(D);
				}
				const k = {
					type: "string",
					enum: ["ui", "workspace"],
					enumDescriptions: [
						(0, u.localize)(8873, null),
						(0, u.localize)(8874, null),
					],
				};
				i.$Io
					.as(h.$No.Configuration)
					.registerConfiguration({
						id: "remote",
						title: (0, u.localize)(8875, null),
						type: "object",
						properties: {
							"remote.extensionKind": {
								type: "object",
								markdownDescription: (0, u.localize)(8876, null),
								patternProperties: {
									"([a-z0-9A-Z][a-z0-9-A-Z]*)\\.([a-z0-9A-Z][a-z0-9-A-Z]*)$": {
										oneOf: [{ type: "array", items: k }, k],
										default: ["ui"],
									},
								},
								default: { "pub.name": ["ui"] },
							},
							"remote.restoreForwardedPorts": {
								type: "boolean",
								markdownDescription: (0, u.localize)(8877, null),
								default: !0,
							},
							"remote.autoForwardPorts": {
								type: "boolean",
								markdownDescription: (0, u.localize)(8878, null),
								default: !0,
							},
							"remote.autoForwardPortsSource": {
								type: "string",
								markdownDescription: (0, u.localize)(
									8879,
									null,
									"`#remote.autoForwardPorts#`",
								),
								enum: ["process", "output", "hybrid"],
								enumDescriptions: [
									(0, u.localize)(8880, null),
									(0, u.localize)(8881, null),
									(0, u.localize)(8882, null),
								],
								default: "process",
							},
							"remote.autoForwardPortsFallback": {
								type: "number",
								default: 20,
								markdownDescription: (0, u.localize)(8883, null),
							},
							"remote.forwardOnOpen": {
								type: "boolean",
								description: (0, u.localize)(8884, null),
								default: !0,
							},
							"remote.portsAttributes": {
								type: "object",
								patternProperties: {
									"(^\\d+(-\\d+)?$)|(.+)": {
										type: "object",
										description: (0, u.localize)(8885, null),
										properties: {
											onAutoForward: {
												type: "string",
												enum: [
													"notify",
													"openBrowser",
													"openBrowserOnce",
													"openPreview",
													"silent",
													"ignore",
												],
												enumDescriptions: [
													(0, u.localize)(8886, null),
													(0, u.localize)(8887, null),
													(0, u.localize)(8888, null),
													(0, u.localize)(8889, null),
													(0, u.localize)(8890, null),
													(0, u.localize)(8891, null),
												],
												description: (0, u.localize)(8892, null),
												default: "notify",
											},
											elevateIfNeeded: {
												type: "boolean",
												description: (0, u.localize)(8893, null),
												default: !1,
											},
											label: {
												type: "string",
												description: (0, u.localize)(8894, null),
												default: (0, u.localize)(8895, null),
											},
											requireLocalPort: {
												type: "boolean",
												markdownDescription: (0, u.localize)(8896, null),
												default: !1,
											},
											protocol: {
												type: "string",
												enum: ["http", "https"],
												description: (0, u.localize)(8897, null),
											},
										},
										default: {
											label: (0, u.localize)(8898, null),
											onAutoForward: "notify",
										},
									},
								},
								markdownDescription: (0, u.localize)(8899, null),
								defaultSnippets: [
									{
										body: {
											"${1:3000}": {
												label: "${2:Application}",
												onAutoForward: "openPreview",
											},
										},
									},
								],
								errorMessage: (0, u.localize)(8900, null),
								additionalProperties: !1,
								default: {
									443: { protocol: "https" },
									8443: { protocol: "https" },
								},
							},
							"remote.otherPortsAttributes": {
								type: "object",
								properties: {
									onAutoForward: {
										type: "string",
										enum: [
											"notify",
											"openBrowser",
											"openPreview",
											"silent",
											"ignore",
										],
										enumDescriptions: [
											(0, u.localize)(8901, null),
											(0, u.localize)(8902, null),
											(0, u.localize)(8903, null),
											(0, u.localize)(8904, null),
											(0, u.localize)(8905, null),
										],
										description: (0, u.localize)(8906, null),
										default: "notify",
									},
									elevateIfNeeded: {
										type: "boolean",
										description: (0, u.localize)(8907, null),
										default: !1,
									},
									label: {
										type: "string",
										description: (0, u.localize)(8908, null),
										default: (0, u.localize)(8909, null),
									},
									requireLocalPort: {
										type: "boolean",
										markdownDescription: (0, u.localize)(8910, null),
										default: !1,
									},
									protocol: {
										type: "string",
										enum: ["http", "https"],
										description: (0, u.localize)(8911, null),
									},
								},
								defaultSnippets: [{ body: { onAutoForward: "ignore" } }],
								markdownDescription: (0, u.localize)(
									8912,
									null,
									"`#remote.portsAttributes#`",
								),
								additionalProperties: !1,
							},
							"remote.localPortHost": {
								type: "string",
								enum: ["localhost", "allInterfaces"],
								default: "localhost",
								description: (0, u.localize)(8913, null),
							},
						},
					});
			},
		),
		define(
			de[3563],
			he([1, 0, 4, 81, 52, 30, 224, 55, 3127, 12]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					E.$Io
						.as(d.Extensions.Workbench)
						.registerWorkbenchContribution(m.$lPc, w.LifecyclePhase.Restored),
					E.$Io
						.as(i.$No.Configuration)
						.registerConfiguration({
							...C.$v6,
							properties: {
								"workbench.sash.size": {
									type: "number",
									default: r.$u ? 20 : 4,
									minimum: 1,
									maximum: 20,
									description: (0, t.localize)(8961, null),
								},
								"workbench.sash.hoverDelay": {
									type: "number",
									default: 300,
									minimum: 0,
									maximum: 2e3,
									description: (0, t.localize)(8962, null),
								},
							},
						});
			},
		),
		define(
			de[3564],
			he([
				1, 0, 33, 14, 94, 27, 4, 11, 121, 10, 8, 44, 57, 20, 43, 40, 41, 30, 25,
				100, 55, 3136, 1751, 52, 18, 84, 65, 81, 224, 3, 2490,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
			) {
				"use strict";
				var L;
				Object.defineProperty(e, "__esModule", { value: !0 });
				const D = [
					d.$XX.EditorContextShare,
					d.$XX.SCMResourceContextShare,
					d.$XX.OpenEditorsContextShare,
					d.$XX.EditorTitleContextShare,
					d.$XX.MenubarShare,
					d.$XX.ExplorerContextShare,
				];
				let M = class {
					static {
						L = this;
					}
					static {
						this.a = "workbench.experimental.share.enabled";
					}
					constructor(R, O) {
						(this.c = R),
							(this.d = O),
							this.d.getValue(L.a) && this.f(),
							this.d.onDidChangeConfiguration((B) => {
								if (B.affectsConfiguration(L.a)) {
									const U = this.d.getValue(L.a);
									U === !0 && this.b === void 0
										? this.f()
										: U === !1 &&
											this.b !== void 0 &&
											(this.b?.clear(), (this.b = void 0));
								}
							});
					}
					f() {
						this.b || (this.b = new k.$Zc()),
							this.b.add(
								(0, d.$4X)(
									class fa extends d.$3X {
										static {
											this.ID = "workbench.action.share";
										}
										static {
											this.LABEL = (0, C.localize2)(9426, "Share...");
										}
										constructor() {
											super({
												id: fa.ID,
												title: fa.LABEL,
												f1: !0,
												icon: i.$ak.linkExternal,
												precondition: u.$Kj.and(
													l.$L2c.notEqualsTo(0),
													b.$xPb.notEqualsTo(0),
												),
												keybinding: {
													weight: n.KeybindingWeight.WorkbenchContrib,
													primary:
														E.KeyMod.Alt | E.KeyMod.CtrlCmd | E.KeyCode.KeyS,
												},
												menu: [{ id: d.$XX.CommandCenter, order: 1e3 }],
											});
										}
										async run(B, ...U) {
											const z = B.get(y.$Oqc),
												F = B.get(v.$IY)?.activeEditor,
												x =
													(F &&
														a.$A1.getOriginalUri(F, {
															supportSideBySide: a.SideBySideEditor.PRIMARY,
														})) ??
													B.get(f.$Vi).getWorkspace().folders[0].uri,
												H = B.get(m.$Vxb),
												q = B.get(h.$GO),
												V = B.get(p.$7rb),
												G = B.get(S.$8N),
												K =
													B.get(I.$dtb).getActiveCodeEditor()?.getSelection() ??
													void 0,
												J = await G.withProgress(
													{
														location: S.ProgressLocation.Window,
														detail: (0, C.localize)(9420, null),
													},
													async () =>
														z.provideShare(
															{ resourceUri: x, selection: K },
															t.CancellationToken.None,
														),
												);
											if (J) {
												const W = J.toString(),
													X = typeof J == "string";
												await H.writeText(W),
													q.prompt({
														type: g.Severity.Info,
														message: X
															? (0, C.localize)(9421, null)
															: (0, C.localize)(9422, null),
														custom: {
															icon: i.$ak.check,
															markdownDetails: [
																{
																	markdown: new w.$cl(
																		`<div aria-label='${W}'>${W}</div>`,
																		{ supportHtml: !0 },
																	),
																	classes: [
																		X
																			? "share-dialog-input-text"
																			: "share-dialog-input-link",
																	],
																},
															],
														},
														cancelButton: (0, C.localize)(9423, null),
														buttons: X
															? []
															: [
																	{
																		label: (0, C.localize)(9424, null),
																		run: () => {
																			V.open(J, { openExternal: !0 });
																		},
																	},
																],
													});
											}
										}
									},
								),
							);
						const R = this.c.getShareActions();
						for (const O of D)
							for (const B of R) this.b.add(d.$ZX.appendMenuItem(O, B));
					}
				};
				(M = L = Ne([j(0, y.$Oqc), j(1, r.$gj)], M)),
					(0, c.$lK)(y.$Oqc, l.$M2c, c.InstantiationType.Delayed),
					o.$Io
						.as(s.Extensions.Workbench)
						.registerWorkbenchContribution(M, $.LifecyclePhase.Eventually),
					o.$Io
						.as(T.$No.Configuration)
						.registerConfiguration({
							...P.$v6,
							properties: {
								"workbench.experimental.share.enabled": {
									type: "boolean",
									default: !1,
									tags: ["experimental"],
									markdownDescription: (0, C.localize)(
										9425,
										null,
										"`#window.commandCenter#`",
										"`true`",
									),
									restricted: !1,
								},
							},
						});
			},
		),
		define(
			de[3565],
			he([1, 0, 15, 117, 1762, 143]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$fUc = void 0);
				let C = class extends w.$eUc {
					constructor(m, r, u, a, h) {
						super(m, r),
							(this.r = u),
							(this.s = a),
							(this.t = h),
							(this.q = new t.$Lh());
					}
					async start() {
						if (!(await this.s.getEnvironment()))
							throw new Error("Could not fetch remote environment");
						this.t.trace("Spawning remote agent process", {
							terminalId: this.id,
						});
						const r = await this.r.start(this.id);
						return (r && "message" in r) || this.q.open(), r;
					}
					async detach(m) {
						return await this.q.wait(), this.r.detachFromProcess(this.id, m);
					}
					shutdown(m) {
						this.q.wait().then((r) => {
							this.r.shutdown(this.id, m);
						});
					}
					input(m) {
						this.c ||
							this.q.wait().then((r) => {
								this.r.input(this.id, m);
							});
					}
					processBinary(m) {
						return this.r.processBinary(this.id, m);
					}
					resize(m, r) {
						this.c ||
							(this.b.cols === m && this.b.rows === r) ||
							this.q.wait().then((u) => {
								(this.b.cols = m),
									(this.b.rows = r),
									this.r.resize(this.id, m, r);
							});
					}
					async clearBuffer() {
						await this.r.clearBuffer(this.id);
					}
					freePortKillProcess(m) {
						if (!this.r.freePortKillProcess)
							throw new Error(
								"freePortKillProcess does not exist on the local pty service",
							);
						return this.r.freePortKillProcess(m);
					}
					acknowledgeDataEvent(m) {
						this.c ||
							this.q.wait().then((r) => {
								this.r.acknowledgeDataEvent(this.id, m);
							});
					}
					async setUnicodeVersion(m) {
						return this.r.setUnicodeVersion(this.id, m);
					}
					async refreshProperty(m) {
						return this.r.refreshProperty(this.id, m);
					}
					async updateProperty(m, r) {
						return this.r.updateProperty(this.id, m, r);
					}
					handleOrphanQuestion() {
						this.r.orphanQuestionReply(this.id);
					}
				};
				(e.$fUc = C), (e.$fUc = C = Ne([j(3, E.$$m), j(4, i.$YJ)], C));
			},
		),
		define(
			de[3566],
			he([
				1, 0, 23, 344, 10, 25, 358, 245, 12, 117, 145, 54, 14, 79, 143, 138, 26,
				9, 82, 955, 107, 3,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$l6c = e.$k6c = void 0),
					(a = mt(a));
				const y = "Generated";
				class $ extends l.$1c {
					get defaultProfileName() {
						return this.c;
					}
					constructor(I, T, P, k, L, D, M, N) {
						super(),
							(this.f = I),
							(this.g = T),
							(this.h = P),
							(this.j = k),
							(this.m = L),
							(this.n = D),
							(this.q = M),
							(this.r = N),
							(this.b = (0, c.$_O)()),
							this.r.getConnection()
								? this.r.getEnvironment().then((A) => (this.a = A?.os || m.OS))
								: (this.a = m.OS),
							this.D(
								this.g.onDidChangeConfiguration((A) => {
									(A.affectsConfiguration(
										r.TerminalSettingId.DefaultProfileWindows,
									) ||
										A.affectsConfiguration(
											r.TerminalSettingId.DefaultProfileMacOs,
										) ||
										A.affectsConfiguration(
											r.TerminalSettingId.DefaultProfileLinux,
										)) &&
										this.s();
								}),
							),
							this.D(this.n.onDidChangeAvailableProfiles(() => this.s()));
					}
					async s() {
						this.a &&
							(this.c = (
								await this.getDefaultProfile({
									remoteAuthority: this.r.getConnection()?.remoteAuthority,
									os: this.a,
								})
							)?.profileName);
					}
					resolveIcon(I, T) {
						if (I.icon) {
							I.icon = this.t(I.icon) || this.getDefaultIcon();
							return;
						}
						if (I.customPtyImplementation) {
							I.icon = this.getDefaultIcon();
							return;
						}
						if (I.executable) return;
						const P = this.y(T);
						P && (I.icon = P.icon), I.icon || (I.icon = this.getDefaultIcon());
					}
					getDefaultIcon(I) {
						return (
							this.b.getIcon(
								this.g.getValue(r.TerminalSettingId.TabsDefaultIcon, {
									resource: I,
								}),
							) || h.$ak.terminal
						);
					}
					async resolveShellLaunchConfig(I, T) {
						let P;
						I.executable
							? (P = await this.F(
									{
										path: I.executable,
										args: I.args,
										profileName: y,
										isDefault: !1,
									},
									T,
								))
							: (P = await this.getDefaultProfile(T)),
							(I.executable = P.path),
							(I.args = P.args),
							P.env &&
								(I.env ? (I.env = { ...I.env, ...P.env }) : (I.env = P.env));
						const k = I === void 0 || typeof I.cwd == "string" ? void 0 : I.cwd;
						(I.icon =
							this.t(I.icon) || this.t(P.icon) || this.getDefaultIcon(k)),
							P.overrideName && (I.name = P.profileName),
							(I.color =
								I.color ||
								P.color ||
								this.g.getValue(r.TerminalSettingId.TabsDefaultColor, {
									resource: k,
								})),
							I.useShellEnvironment === void 0 &&
								(I.useShellEnvironment = this.g.getValue(
									r.TerminalSettingId.InheritEnv,
								));
					}
					async getDefaultShell(I) {
						return (await this.getDefaultProfile(I)).path;
					}
					async getDefaultShellArgs(I) {
						return (await this.getDefaultProfile(I)).args || [];
					}
					async getDefaultProfile(I) {
						return this.F(await this.u(I), I);
					}
					getEnvironment(I) {
						return this.f.getEnvironment(I);
					}
					t(I) {
						if (I) {
							if (typeof I == "string") return p.ThemeIcon.fromId(I);
							if (p.ThemeIcon.isThemeIcon(I)) return I;
							if (o.URI.isUri(I) || (0, b.$7J)(I)) return o.URI.revive(I);
							if (typeof I == "object" && "light" in I && "dark" in I) {
								const T = I;
								if (
									(o.URI.isUri(T.light) || (0, b.$7J)(T.light)) &&
									(o.URI.isUri(T.dark) || (0, b.$7J)(T.dark))
								)
									return {
										light: o.URI.revive(T.light),
										dark: o.URI.revive(T.dark),
									};
							}
						}
					}
					async u(I) {
						if (I.allowAutomationShell) {
							const P = this.C(I);
							if (P) return P;
						}
						await this.n.profilesReady;
						const T = this.y(I.os);
						return T ? this.w(I, T) : this.w(I, await this.z(I));
					}
					w(I, T) {
						if (I.allowAutomationShell) {
							const P = (0, f.$vo)(T);
							return (P.icon = h.$ak.tools), P;
						}
						return T;
					}
					y(I) {
						return this.n.getDefaultProfile(I);
					}
					async z(I) {
						const T = await this.f.getDefaultSystemShell(
							I.remoteAuthority,
							I.os,
						);
						if (I.os === m.OS) {
							let L = this.n.availableProfiles.find(
								(D) => a.$vc(D.path).name === a.$vc(T).name,
							);
							if (L)
								return (
									I.allowAutomationShell &&
										((L = (0, f.$vo)(L)), (L.icon = h.$ak.tools)),
									L
								);
						}
						let P;
						I.os === m.OperatingSystem.Macintosh &&
						a.$vc(T).name.match(/(zsh|bash)/)
							? (P = ["--login"])
							: (P = []);
						const k = this.I(T);
						return { profileName: y, path: T, args: P, icon: k, isDefault: !1 };
					}
					C(I) {
						const T = this.g.getValue(
							`terminal.integrated.automationProfile.${this.H(I.os)}`,
						);
						if (this.J(T, I.os))
							return (T.icon = this.t(T.icon) || h.$ak.tools), T;
					}
					async F(I, T) {
						const P = await this.f.getEnvironment(T.remoteAuthority);
						if (T.os === m.OperatingSystem.Windows) {
							const D = !!P.hasOwnProperty("PROCESSOR_ARCHITEW6432"),
								M = P.windir;
							if (!D && M) {
								const N = a
									.$oc(M, "Sysnative")
									.replace(/\//g, "\\")
									.toLowerCase();
								I.path &&
									I.path.toLowerCase().indexOf(N) === 0 &&
									(I.path = a.$oc(M, "System32", I.path.substr(N.length + 1)));
							}
							I.path && (I.path = I.path.replace(/\//g, "\\"));
						}
						const k = this.j.getLastActiveWorkspaceRoot(
								T.remoteAuthority ? t.Schemas.vscodeRemote : t.Schemas.file,
							),
							L = k ? (this.q.getWorkspaceFolder(k) ?? void 0) : void 0;
						return (
							(I.path = await this.G(I.path, P, L)),
							I.args &&
								(typeof I.args == "string"
									? (I.args = await this.G(I.args, P, L))
									: (I.args = await Promise.all(
											I.args.map((D) => this.G(D, P, L)),
										))),
							I
						);
					}
					async G(I, T, P) {
						try {
							I = await this.h.resolveWithEnvironment(T, P, I);
						} catch (k) {
							this.m.error("Could not resolve shell", k);
						}
						return I;
					}
					H(I) {
						switch (I) {
							case m.OperatingSystem.Linux:
								return "linux";
							case m.OperatingSystem.Macintosh:
								return "osx";
							case m.OperatingSystem.Windows:
								return "windows";
						}
					}
					I(I) {
						switch (a.$vc(I).name) {
							case "bash":
								return h.$ak.terminalBash;
							case "pwsh":
							case "powershell":
								return h.$ak.terminalPowershell;
							case "tmux":
								return h.$ak.terminalTmux;
							case "cmd":
								return h.$ak.terminalCmd;
							default:
								return;
						}
					}
					J(I, T) {
						return I == null || typeof I != "object"
							? !1
							: "path" in I && typeof I.path == "string";
					}
				}
				(e.$k6c = $), Ne([(0, g.$fi)(200)], $.prototype, "s", null);
				let v = class extends $ {
					constructor(I, T, P, k, L, D, M, N) {
						super(
							{
								getDefaultSystemShell: async (A, R) => {
									const O = await L.getBackend(A);
									return !A || !O
										? R === m.OperatingSystem.Windows
											? "pwsh"
											: "bash"
										: O.getDefaultSystemShell(R);
								},
								getEnvironment: async (A) => {
									const R = await L.getBackend(A);
									return !A || !R ? i.env : R.getEnvironment();
								},
							},
							T,
							I,
							P,
							k,
							D,
							M,
							N,
						);
					}
				};
				(e.$l6c = v),
					(e.$l6c = v =
						Ne(
							[
								j(0, C.$zeb),
								j(1, w.$gj),
								j(2, d.$Feb),
								j(3, r.$YJ),
								j(4, s.$mIb),
								j(5, u.$teb),
								j(6, E.$Vi),
								j(7, n.$$m),
							],
							v,
						));
			},
		),
		define(
			de[1314],
			he([1, 0, 344, 3, 59, 10, 22, 5, 21, 117, 9, 143, 23, 12, 54]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$oUc = void 0),
					(e.$kUc = f),
					(e.$lUc = s),
					(e.$mUc = y),
					(e.$nUc = $),
					(e.$pUc = S),
					(e.$qUc = I),
					(e.$rUc = T),
					(e.$sUc = P),
					(e.$tUc = k),
					(e.$uUc = L);
				var g;
				(function (N) {
					N[(N.DefaultHistoryLimit = 100)] = "DefaultHistoryLimit";
				})(g || (g = {}));
				var p;
				(function (N) {
					(N.Entries = "terminal.history.entries"),
						(N.Timestamp = "terminal.history.timestamp");
				})(p || (p = {}));
				let o;
				function f(N) {
					return o || (o = N.get(d.$Li).createInstance(v, "commands")), o;
				}
				let b;
				function s(N) {
					return b || (b = N.get(d.$Li).createInstance(v, "dirs")), b;
				}
				const l = new Map();
				async function y(N, A) {
					const R = l.get(A);
					if (R === null) return [];
					if (R !== void 0) return R;
					let O;
					switch (A) {
						case r.PosixShellType.Bash:
							O = await S(N);
							break;
						case r.GeneralShellType.PowerShell:
							O = await P(N);
							break;
						case r.PosixShellType.Zsh:
							O = await I(N);
							break;
						case r.PosixShellType.Fish:
							O = await k(N);
							break;
						case r.GeneralShellType.Python:
							O = await T(N);
							break;
						default:
							return [];
					}
					if (O === void 0) return l.set(A, null), [];
					const B = Array.from(O);
					return l.set(A, B), B;
				}
				function $() {
					l.clear();
				}
				let v = class extends i.$1c {
					get entries() {
						return this.n(), this.a.entries();
					}
					constructor(A, R, O) {
						super(),
							(this.h = A),
							(this.j = R),
							(this.m = O),
							(this.b = 0),
							(this.f = !1),
							(this.g = !0),
							(this.a = new w.$Jc(this.t())),
							this.D(
								this.j.onDidChangeConfiguration((B) => {
									B.affectsConfiguration(
										r.TerminalSettingId.ShellIntegrationCommandHistory,
									) && (this.a.limit = this.t());
								}),
							),
							this.D(
								this.m.onDidChangeValue(
									m.StorageScope.APPLICATION,
									this.u(),
									this.B,
								)(() => {
									this.g ||
										(this.g =
											this.m.getNumber(
												this.u(),
												m.StorageScope.APPLICATION,
												0,
											) !== this.b);
								}),
							);
					}
					add(A, R) {
						this.n(), this.a.set(A, R), this.s();
					}
					remove(A) {
						this.n(), this.a.delete(A), this.s();
					}
					clear() {
						this.n(), this.a.clear(), this.s();
					}
					n() {
						this.f || (this.q(), (this.f = !0)),
							this.g && (this.a.clear(), this.q(), (this.g = !1));
					}
					q() {
						this.b = this.m.getNumber(this.u(), m.StorageScope.APPLICATION, 0);
						const A = this.r();
						if (A) for (const R of A.entries) this.a.set(R.key, R.value);
					}
					r() {
						const A = this.m.get(this.w(), m.StorageScope.APPLICATION);
						if (A === void 0 || A.length === 0) return;
						let R;
						try {
							R = JSON.parse(A);
						} catch {
							return;
						}
						return R;
					}
					s() {
						const A = { entries: [] };
						this.a.forEach((R, O) => A.entries.push({ key: O, value: R })),
							this.m.store(
								this.w(),
								JSON.stringify(A),
								m.StorageScope.APPLICATION,
								m.StorageTarget.MACHINE,
							),
							(this.b = Date.now()),
							this.m.store(
								this.u(),
								this.b,
								m.StorageScope.APPLICATION,
								m.StorageTarget.MACHINE,
							);
					}
					t() {
						const A = this.j.getValue(
							r.TerminalSettingId.ShellIntegrationCommandHistory,
						);
						return typeof A == "number" ? A : g.DefaultHistoryLimit;
					}
					u() {
						return `${p.Timestamp}.${this.h}`;
					}
					w() {
						return `${p.Entries}.${this.h}`;
					}
				};
				(e.$oUc = v), (e.$oUc = v = Ne([j(1, E.$gj), j(2, m.$lq)], v));
				async function S(N) {
					const A = N.get(C.$ll),
						R = N.get(a.$$m),
						O = await R.getEnvironment();
					if (O?.os === c.OperatingSystem.Windows || (!O && c.$l)) return;
					const B = await M(t.env.HOME, ".bash_history", !1, A, R);
					if (B === void 0) return;
					const U = B.split(`
`),
						z = new Set();
					let F, x, H;
					for (let q = 0; q < U.length; q++) {
						(F = U[q]),
							x === void 0
								? (x = F)
								: (x += `
${F}`);
						for (let V = 0; V < F.length; V++)
							H ? F[V] === H && (H = void 0) : F[V].match(/['"]/) && (H = F[V]);
						H === void 0 && (x.length > 0 && z.add(x.trim()), (x = void 0));
					}
					return z.values();
				}
				async function I(N) {
					const A = N.get(C.$ll),
						R = N.get(a.$$m),
						O = await R.getEnvironment();
					if (O?.os === c.OperatingSystem.Windows || (!O && c.$l)) return;
					const B = await M(t.env.HOME, ".zsh_history", !1, A, R);
					if (B === void 0) return;
					const U = B.split(/\:\s\d+\:\d+;/),
						z = new Set();
					for (let F = 0; F < U.length; F++) {
						const x = U[F]
							.replace(
								/\\\n/g,
								`
`,
							)
							.trim();
						x.length > 0 && z.add(x);
					}
					return z.values();
				}
				async function T(N) {
					const A = N.get(C.$ll),
						R = N.get(a.$$m),
						O = await M(t.env.HOME, ".python_history", !1, A, R);
					if (O === void 0) return;
					const B = O.split(`
`),
						U = new Set();
					return (
						B.forEach((z) => {
							z.trim().length > 0 && U.add(z.trim());
						}),
						U.values()
					);
				}
				async function P(N) {
					const A = N.get(C.$ll),
						R = N.get(a.$$m);
					let O, B;
					const U = await R.getEnvironment(),
						z = U?.os === c.OperatingSystem.Windows || (!U && c.$l);
					z
						? ((O = t.env.APPDATA),
							(B =
								"Microsoft\\Windows\\PowerShell\\PSReadLine\\ConsoleHost_history.txt"))
						: ((O = t.env.HOME),
							(B =
								".local/share/powershell/PSReadline/ConsoleHost_history.txt"));
					const F = await M(O, B, z, A, R);
					if (F === void 0) return;
					const x = F.split(`
`),
						H = new Set();
					let q, V, G;
					for (let K = 0; K < x.length; K++) {
						if (
							((q = x[K]),
							V === void 0
								? (V = q)
								: (V += `
${q}`),
							!q.endsWith("`"))
						) {
							const J = V.trim();
							J.length > 0 && H.add(J), (V = void 0);
							continue;
						}
						for (let J = 0; J < q.length; J++)
							G ? q[J] === G && (G = void 0) : q[J].match(/`/) && (G = q[J]);
						if (G) (V = V.replace(/`$/, "")), (G = void 0);
						else {
							const J = V.trim();
							J.length > 0 && H.add(J), (V = void 0);
						}
					}
					return H.values();
				}
				async function k(N) {
					const A = N.get(C.$ll),
						R = N.get(a.$$m),
						O = await R.getEnvironment();
					if (O?.os === c.OperatingSystem.Windows || (!O && c.$l)) return;
					const U = await (t.env.XDG_DATA_HOME
						? M(t.env.XDG_DATA_HOME, "fish/fish_history", !1, A, R)
						: M(t.env.HOME, ".local/share/fish/fish_history", !1, A, R));
					if (U === void 0) return;
					const z = new Set(),
						F = U.split(`
`)
							.filter((x) => x.startsWith("- cmd:"))
							.map((x) => x.substring(6).trimStart());
					for (let x = 0; x < F.length; x++) {
						const H = L(F[x]).trim();
						H.length > 0 && z.add(H);
					}
					return z.values();
				}
				function L(N) {
					return D(
						/(^|[^\\])((?:\\\\)*)(\\n)/g,
						N,
						`$1$2
`,
					);
				}
				function D(N, A, R) {
					let O,
						B = A;
					for (;;) if (((O = B), (B = B.replace(N, R)), B === O)) return B;
				}
				async function M(N, A, R, O, B) {
					if (!N) return;
					const U = B.getConnection(),
						z = !!U?.remoteAuthority,
						F = u.URI.from({
							scheme: z ? h.Schemas.vscodeRemote : h.Schemas.file,
							authority: z ? U.remoteAuthority : void 0,
							path: u.URI.file((0, n.$oc)(N, A)).path,
						});
					let x;
					try {
						x = await O.readFile(F);
					} catch (H) {
						if (
							H instanceof C.$Gl &&
							H.fileOperationResult === C.FileOperationResult.FILE_NOT_FOUND
						)
							return;
						throw H;
					}
					if (x !== void 0) return x.value.toString();
				}
			},
		),
		define(
			de[3567],
			he([
				1, 0, 268, 12, 67, 42, 4, 5, 63, 189, 775, 51, 26, 689, 1314, 691, 469,
				9, 275, 18, 1678, 21, 178, 3,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
			) {
				"use strict";
				var v;
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$8Uc = S);
				async function S(T, P, k, L, D, M) {
					if (!P.xterm) return;
					const N = T.get(b.$IY),
						A = T.get(d.$Li),
						R = T.get(m.$DJ),
						O = T.get(l.$lq),
						B = T.get(y.$HLb),
						U = `${g.TerminalStorageKeys.PinnedRecentCommandsPrefix}.${P.shellType}`;
					let z,
						F = [];
					const x = new Set(),
						H = {
							iconClass: h.ThemeIcon.asClassName(c.$5Hb),
							tooltip: (0, C.localize)(10142, null),
						},
						q = {
							iconClass: h.ThemeIcon.asClassName(c.$6Hb),
							tooltip: (0, C.localize)(10143, null),
							alwaysVisible: !1,
						};
					if (L === "command") {
						let _ = function (re) {
							return re
								.replace(/\r?\n/g, "\u23CE")
								.replace(/\s\s\s+/g, "\u22EF");
						};
						z = i.$m
							? (0, C.localize)(10144, null)
							: (0, C.localize)(10145, null);
						const ie = P.capabilities.get(
								r.TerminalCapability.CommandDetection,
							),
							ne = ie?.commands,
							ee = ie?.executingCommand;
						if ((ee && x.add(ee), ne && ne.length > 0)) {
							for (const re of ne) {
								const le = re.command.trim();
								if (le.length === 0 || x.has(le)) continue;
								let oe = (0, u.$Ceb)(
									re.cwd,
									P.userHome,
									P.os === i.OperatingSystem.Windows ? "\\" : "/",
								);
								re.exitCode &&
									(re.exitCode === -1
										? (oe += " failed")
										: (oe += ` exitCode: ${re.exitCode}`)),
									(oe = oe.trim());
								const ae = [q],
									pe = F.length > 0 ? F[F.length - 1] : void 0;
								if (pe?.type !== "separator" && pe?.label === le) {
									(pe.id = re.timestamp.toString()), (pe.description = oe);
									continue;
								}
								F.push({
									label: _(le),
									rawLabel: le,
									description: oe,
									id: re.timestamp.toString(),
									command: re,
									buttons: re.hasOutput() ? ae : void 0,
								}),
									x.add(le);
							}
							F = F.reverse();
						}
						ee &&
							F.unshift({ label: _(ee), rawLabel: ee, description: ie.cwd }),
							F.length > 0 &&
								F.unshift({
									type: "separator",
									label: p.$hUc.currentSessionCategory,
								});
						const te = A.invokeFunction(n.$kUc),
							Q = [];
						for (const [re, le] of te.entries)
							!x.has(re) &&
								le.shellType === P.shellType &&
								(Q.unshift({ label: _(re), rawLabel: re, buttons: [H] }),
								x.add(re));
						Q.length > 0 &&
							F.push(
								{ type: "separator", label: p.$hUc.previousSessionCategory },
								...Q,
							);
						const Z = await A.invokeFunction(n.$mUc, P.shellType),
							se = [];
						for (const re of Z)
							x.has(re) || se.unshift({ label: _(re), rawLabel: re });
						se.length > 0 &&
							F.push(
								{
									type: "separator",
									label: (0, C.localize)(10146, null, P.shellType),
								},
								...se,
							);
					} else {
						z = i.$m
							? (0, C.localize)(10147, null)
							: (0, C.localize)(10148, null);
						const ie =
							P.capabilities.get(r.TerminalCapability.CwdDetection)?.cwds || [];
						if (ie && ie.length > 0) {
							for (const _ of ie) F.push({ label: _, rawLabel: _ });
							(F = F.reverse()),
								F.unshift({
									type: "separator",
									label: p.$hUc.currentSessionCategory,
								});
						}
						const ne = A.invokeFunction(n.$lUc),
							ee = [];
						for (const [_, te] of ne.entries)
							(te === null || te.remoteAuthority === P.remoteAuthority) &&
								!ie.includes(_) &&
								ee.unshift({ label: _, rawLabel: _, buttons: [H] });
						ee.length > 0 &&
							F.push(
								{ type: "separator", label: p.$hUc.previousSessionCategory },
								...ee,
							);
					}
					if (F.length === 0) return;
					const V = new $.$Zc(),
						G = V.add(
							new t.$8ib({
								title: "Fuzzy search",
								icon: c.$7Hb,
								isChecked: D === "fuzzy",
								inputActiveOptionBorder: (0, a.$rP)(a.$WR),
								inputActiveOptionForeground: (0, a.$rP)(a.$ZR),
								inputActiveOptionBackground: (0, a.$rP)(a.$YR),
							}),
						);
					V.add(
						G.onChange(() => {
							A.invokeFunction(
								S,
								P,
								k,
								L,
								G.checked ? "fuzzy" : "contiguous",
								J.value,
							);
						}),
					);
					const K = V.add(A.createInstance(I)),
						J = V.add(R.createQuickPick({ useSeparators: !0 })),
						W = F;
					(J.items = [...W]),
						(J.sortByLabel = !1),
						(J.placeholder = z),
						(J.matchOnLabelMode = D || "contiguous"),
						(J.toggles = [G]),
						V.add(
							J.onDidTriggerItemButton(async (ie) => {
								if (ie.button === H)
									L === "command"
										? A.invokeFunction(n.$kUc)?.remove(ie.item.label)
										: A.invokeFunction(n.$lUc)?.remove(ie.item.label);
								else if (ie.button === q) {
									const ne = ie.item.command,
										ee = ne?.getOutput();
									if (ee && ne?.command) {
										const _ = await K.provideTextContent(
											o.URI.from({
												scheme: I.scheme,
												path: `${ne.command}... ${(0, f.$dn)(ne.timestamp, !0)}`,
												fragment: ee,
												query: `terminal-output-${ne.timestamp}-${P.instanceId}`,
											}),
										);
										_ && (await N.openEditor({ resource: _.uri }));
									}
								}
								await A.invokeFunction(S, P, k, L, D, M);
							}),
						),
						V.add(
							J.onDidChangeValue(async (ie) => {
								ie || (await A.invokeFunction(S, P, k, L, D, ie));
							}),
						);
					let X = !1;
					function Y() {
						(X = !1),
							P.xterm?.markTracker.restoreScrollState(),
							P.xterm?.markTracker.clear();
					}
					return (
						V.add(
							J.onDidChangeActive(async () => {
								const ie = P.xterm;
								if (!ie) return;
								const [ne] = J.activeItems;
								if (ne)
									if ("command" in ne && ne.command && ne.command.marker) {
										X || (ie.markTracker.saveScrollState(), (X = !0));
										const ee = ne.command.getPromptRowCount(),
											_ = ne.command.getCommandRowCount();
										ie.markTracker.revealRange({
											start: { x: 1, y: ne.command.marker.line - (ee - 1) + 1 },
											end: {
												x: P.cols,
												y: ne.command.marker.line + (_ - 1) + 1,
											},
										});
									} else Y();
							}),
						),
						V.add(
							J.onDidAccept(async () => {
								const ie = J.activeItems[0];
								let ne;
								L === "cwd"
									? (ne = `cd ${await P.preparePathForShell(ie.rawLabel)}`)
									: (ne = ie.rawLabel),
									J.hide(),
									P.runCommand(ne, !J.keyMods.alt),
									J.keyMods.alt && P.focus(),
									Y();
							}),
						),
						V.add(J.onDidHide(() => Y())),
						M && (J.value = M),
						new Promise((ie) => {
							k.set(!0),
								V.add((0, s.$7Uc)(O, U, J, !0)),
								V.add(
									J.onDidHide(() => {
										k.set(!1),
											B.showLastProvider(y.AccessibleViewProviderId.Terminal),
											ie(),
											V.dispose();
									}),
								);
						})
					);
				}
				let I = class extends $.$1c {
					static {
						v = this;
					}
					static {
						this.scheme = "TERMINAL_OUTPUT";
					}
					constructor(P, k) {
						super(),
							(this.a = k),
							this.D(P.registerTextModelContentProvider(v.scheme, this));
					}
					async provideTextContent(P) {
						const k = this.a.getModel(P);
						return k && !k.isDisposed()
							? k
							: this.a.createModel(P.fragment, null, P, !1);
					}
				};
				I = v = Ne([j(0, E.$MO), j(1, w.$QO)], I);
			},
		),
		define(
			de[1859],
			he([
				1, 0, 81, 4, 145, 117, 12, 30, 14, 1201, 224, 996, 1764, 1763, 808, 809,
				1264, 1770,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$HVc = void 0),
					(e.$IVc = y);
				const f =
					`
- ` +
					[
						"`${cwd}`: " + (0, i.localize)(10231, null),
						"`${cwdFolder}`: " + (0, i.localize)(10232, null),
						"`${workspaceFolder}`: " + (0, i.localize)(10233, null),
						"`${workspaceFolderName}`: " + (0, i.localize)(10234, null),
						"`${local}`: " + (0, i.localize)(10235, null),
						"`${process}`: " + (0, i.localize)(10236, null),
						"`${separator}`: " + (0, i.localize)(10237, null, "(` - `)"),
						"`${sequence}`: " + (0, i.localize)(10238, null),
						"`${task}`: " + (0, i.localize)(10239, null),
					].join(`
- `);
				let b = (0, i.localize)(10240, null);
				b += f;
				let s = (0, i.localize)(10241, null);
				(s += f), (e.$HVc = C.$m ? 12 : 14);
				const l = {
					id: "terminal",
					order: 100,
					title: (0, i.localize)(10242, null),
					type: "object",
					properties: {
						[E.TerminalSettingId.SendKeybindingsToShell]: {
							markdownDescription: (0, i.localize)(
								10243,
								null,
								"`#terminal.integrated.commandsToSkipShell#`",
							),
							type: "boolean",
							default: !1,
						},
						[E.TerminalSettingId.TabsDefaultColor]: {
							description: (0, i.localize)(10244, null),
							...r.$8J,
							scope: t.ConfigurationScope.RESOURCE,
						},
						[E.TerminalSettingId.TabsDefaultIcon]: {
							description: (0, i.localize)(10245, null),
							...r.$9J,
							default: m.$ak.terminal.id,
							scope: t.ConfigurationScope.RESOURCE,
						},
						[E.TerminalSettingId.TabsEnabled]: {
							description: (0, i.localize)(10246, null),
							type: "boolean",
							default: !0,
						},
						[E.TerminalSettingId.TabsEnableAnimation]: {
							description: (0, i.localize)(10247, null),
							type: "boolean",
							default: !0,
						},
						[E.TerminalSettingId.TabsHideCondition]: {
							description: (0, i.localize)(10248, null),
							type: "string",
							enum: ["never", "singleTerminal", "singleGroup"],
							enumDescriptions: [
								(0, i.localize)(10249, null),
								(0, i.localize)(10250, null),
								(0, i.localize)(10251, null),
							],
							default: "singleTerminal",
						},
						[E.TerminalSettingId.TabsShowActiveTerminal]: {
							description: (0, i.localize)(10252, null),
							type: "string",
							enum: [
								"always",
								"singleTerminal",
								"singleTerminalOrNarrow",
								"never",
							],
							enumDescriptions: [
								(0, i.localize)(10253, null),
								(0, i.localize)(10254, null),
								(0, i.localize)(10255, null),
								(0, i.localize)(10256, null),
							],
							default: "singleTerminalOrNarrow",
						},
						[E.TerminalSettingId.TabsShowActions]: {
							description: (0, i.localize)(10257, null),
							type: "string",
							enum: [
								"always",
								"singleTerminal",
								"singleTerminalOrNarrow",
								"never",
							],
							enumDescriptions: [
								(0, i.localize)(10258, null),
								(0, i.localize)(10259, null),
								(0, i.localize)(10260, null),
								(0, i.localize)(10261, null),
							],
							default: "singleTerminalOrNarrow",
						},
						[E.TerminalSettingId.TabsLocation]: {
							type: "string",
							enum: ["left", "right"],
							enumDescriptions: [
								(0, i.localize)(10262, null),
								(0, i.localize)(10263, null),
							],
							default: "right",
							description: (0, i.localize)(10264, null),
						},
						[E.TerminalSettingId.DefaultLocation]: {
							type: "string",
							enum: [
								E.TerminalLocationString.Editor,
								E.TerminalLocationString.TerminalView,
							],
							enumDescriptions: [
								(0, i.localize)(10265, null),
								(0, i.localize)(10266, null),
							],
							default: "view",
							description: (0, i.localize)(10267, null),
						},
						[E.TerminalSettingId.TabsFocusMode]: {
							type: "string",
							enum: ["singleClick", "doubleClick"],
							enumDescriptions: [
								(0, i.localize)(10268, null),
								(0, i.localize)(10269, null),
							],
							default: "doubleClick",
							description: (0, i.localize)(10270, null),
						},
						[E.TerminalSettingId.MacOptionIsMeta]: {
							description: (0, i.localize)(10271, null),
							type: "boolean",
							default: !1,
						},
						[E.TerminalSettingId.MacOptionClickForcesSelection]: {
							description: (0, i.localize)(10272, null),
							type: "boolean",
							default: !1,
						},
						[E.TerminalSettingId.AltClickMovesCursor]: {
							markdownDescription: (0, i.localize)(
								10273,
								null,
								"`#editor.multiCursorModifier#`",
								"`'alt'`",
							),
							type: "boolean",
							default: !0,
						},
						[E.TerminalSettingId.CopyOnSelection]: {
							description: (0, i.localize)(10274, null),
							type: "boolean",
							default: !1,
						},
						[E.TerminalSettingId.EnableMultiLinePasteWarning]: {
							markdownDescription: (0, i.localize)(10275, null),
							type: "string",
							enum: ["auto", "always", "never"],
							markdownEnumDescriptions: [
								(0, i.localize)(10276, null),
								(0, i.localize)(10277, null),
								(0, i.localize)(10278, null),
							],
							default: "auto",
						},
						[E.TerminalSettingId.DrawBoldTextInBrightColors]: {
							description: (0, i.localize)(10279, null),
							type: "boolean",
							default: !0,
						},
						[E.TerminalSettingId.FontFamily]: {
							markdownDescription: (0, i.localize)(
								10280,
								null,
								"`#editor.fontFamily#`",
							),
							type: "string",
						},
						[E.TerminalSettingId.FontSize]: {
							description: (0, i.localize)(10281, null),
							type: "number",
							default: e.$HVc,
							minimum: 6,
							maximum: 100,
						},
						[E.TerminalSettingId.LetterSpacing]: {
							description: (0, i.localize)(10282, null),
							type: "number",
							default: w.$jeb,
						},
						[E.TerminalSettingId.LineHeight]: {
							description: (0, i.localize)(10283, null),
							type: "number",
							default: w.$leb,
						},
						[E.TerminalSettingId.MinimumContrastRatio]: {
							markdownDescription: (0, i.localize)(10284, null),
							type: "number",
							default: 4.5,
							tags: ["accessibility"],
						},
						[E.TerminalSettingId.TabStopWidth]: {
							markdownDescription: (0, i.localize)(10285, null),
							type: "number",
							minimum: 1,
							default: 8,
						},
						[E.TerminalSettingId.FastScrollSensitivity]: {
							markdownDescription: (0, i.localize)(10286, null),
							type: "number",
							default: 5,
						},
						[E.TerminalSettingId.MouseWheelScrollSensitivity]: {
							markdownDescription: (0, i.localize)(10287, null),
							type: "number",
							default: 1,
						},
						[E.TerminalSettingId.BellDuration]: {
							markdownDescription: (0, i.localize)(10288, null),
							type: "number",
							default: 1e3,
						},
						[E.TerminalSettingId.FontWeight]: {
							anyOf: [
								{
									type: "number",
									minimum: w.$meb,
									maximum: w.$neb,
									errorMessage: (0, i.localize)(10289, null),
								},
								{
									type: "string",
									pattern: "^(normal|bold|1000|[1-9][0-9]{0,2})$",
								},
								{ enum: w.$qeb },
							],
							description: (0, i.localize)(10290, null),
							default: "normal",
						},
						[E.TerminalSettingId.FontWeightBold]: {
							anyOf: [
								{
									type: "number",
									minimum: w.$meb,
									maximum: w.$neb,
									errorMessage: (0, i.localize)(10291, null),
								},
								{
									type: "string",
									pattern: "^(normal|bold|1000|[1-9][0-9]{0,2})$",
								},
								{ enum: w.$qeb },
							],
							description: (0, i.localize)(10292, null),
							default: "bold",
						},
						[E.TerminalSettingId.CursorBlinking]: {
							description: (0, i.localize)(10293, null),
							type: "boolean",
							default: !1,
						},
						[E.TerminalSettingId.CursorStyle]: {
							description: (0, i.localize)(10294, null),
							enum: ["block", "line", "underline"],
							default: "block",
						},
						[E.TerminalSettingId.CursorStyleInactive]: {
							description: (0, i.localize)(10295, null),
							enum: ["outline", "block", "line", "underline", "none"],
							default: "outline",
						},
						[E.TerminalSettingId.CursorWidth]: {
							markdownDescription: (0, i.localize)(
								10296,
								null,
								"`#terminal.integrated.cursorStyle#`",
								"`line`",
							),
							type: "number",
							default: 1,
						},
						[E.TerminalSettingId.Scrollback]: {
							description: (0, i.localize)(10297, null),
							type: "number",
							default: 1e3,
						},
						[E.TerminalSettingId.DetectLocale]: {
							markdownDescription: (0, i.localize)(10298, null),
							type: "string",
							enum: ["auto", "off", "on"],
							markdownEnumDescriptions: [
								(0, i.localize)(10299, null),
								(0, i.localize)(10300, null),
								(0, i.localize)(10301, null),
							],
							default: "auto",
						},
						[E.TerminalSettingId.GpuAcceleration]: {
							type: "string",
							enum: ["auto", "on", "off"],
							markdownEnumDescriptions: [
								(0, i.localize)(10302, null),
								(0, i.localize)(10303, null),
								(0, i.localize)(10304, null),
							],
							default: "auto",
							description: (0, i.localize)(10305, null),
						},
						[E.TerminalSettingId.TerminalTitleSeparator]: {
							type: "string",
							default: " - ",
							markdownDescription: (0, i.localize)(
								10306,
								null,
								`\`#${E.TerminalSettingId.TerminalTitle}#\``,
								`\`#${E.TerminalSettingId.TerminalDescription}#\``,
							),
						},
						[E.TerminalSettingId.TerminalTitle]: {
							type: "string",
							default: "${process}",
							markdownDescription: b,
						},
						[E.TerminalSettingId.TerminalDescription]: {
							type: "string",
							default: "${task}${separator}${local}${separator}${cwdFolder}",
							markdownDescription: s,
						},
						[E.TerminalSettingId.RightClickBehavior]: {
							type: "string",
							enum: ["default", "copyPaste", "paste", "selectWord", "nothing"],
							enumDescriptions: [
								(0, i.localize)(10307, null),
								(0, i.localize)(10308, null),
								(0, i.localize)(10309, null),
								(0, i.localize)(10310, null),
								(0, i.localize)(10311, null),
							],
							default: C.$m ? "selectWord" : C.$l ? "copyPaste" : "default",
							description: (0, i.localize)(10312, null),
						},
						[E.TerminalSettingId.MiddleClickBehavior]: {
							type: "string",
							enum: ["default", "paste"],
							enumDescriptions: [
								(0, i.localize)(10313, null),
								(0, i.localize)(10314, null),
							],
							default: "default",
							description: (0, i.localize)(10315, null),
						},
						[E.TerminalSettingId.Cwd]: {
							restricted: !0,
							description: (0, i.localize)(10316, null),
							type: "string",
							default: void 0,
							scope: t.ConfigurationScope.RESOURCE,
						},
						[E.TerminalSettingId.ConfirmOnExit]: {
							description: (0, i.localize)(10317, null),
							type: "string",
							enum: ["never", "always", "hasChildProcesses"],
							enumDescriptions: [
								(0, i.localize)(10318, null),
								(0, i.localize)(10319, null),
								(0, i.localize)(10320, null),
							],
							default: "never",
						},
						[E.TerminalSettingId.ConfirmOnKill]: {
							description: (0, i.localize)(10321, null),
							type: "string",
							enum: ["never", "editor", "panel", "always"],
							enumDescriptions: [
								(0, i.localize)(10322, null),
								(0, i.localize)(10323, null),
								(0, i.localize)(10324, null),
								(0, i.localize)(10325, null),
							],
							default: "editor",
						},
						[E.TerminalSettingId.EnableBell]: {
							markdownDeprecationMessage: (0, i.localize)(10326, null),
							type: "boolean",
							default: !1,
						},
						[E.TerminalSettingId.EnableVisualBell]: {
							description: (0, i.localize)(10327, null),
							type: "boolean",
							default: !1,
						},
						[E.TerminalSettingId.CommandsToSkipShell]: {
							markdownDescription: (0, i.localize)(
								10328,
								null,
								w.$web
									.sort()
									.map(($) => `- ${$}`)
									.join(`
`),
								`[${(0, i.localize)(10329, null)}](command:workbench.action.openRawDefaultSettings '${(0, i.localize)(10330, null)}')`,
							),
							type: "array",
							items: { type: "string" },
							default: [],
						},
						[E.TerminalSettingId.AllowChords]: {
							markdownDescription: (0, i.localize)(
								10331,
								null,
								"`#terminal.integrated.commandsToSkipShell#`",
							),
							type: "boolean",
							default: !0,
						},
						[E.TerminalSettingId.AllowMnemonics]: {
							markdownDescription: (0, i.localize)(10332, null),
							type: "boolean",
							default: !1,
						},
						[E.TerminalSettingId.EnvMacOs]: {
							restricted: !0,
							markdownDescription: (0, i.localize)(10333, null),
							type: "object",
							additionalProperties: { type: ["string", "null"] },
							default: {},
						},
						[E.TerminalSettingId.EnvLinux]: {
							restricted: !0,
							markdownDescription: (0, i.localize)(10334, null),
							type: "object",
							additionalProperties: { type: ["string", "null"] },
							default: {},
						},
						[E.TerminalSettingId.EnvWindows]: {
							restricted: !0,
							markdownDescription: (0, i.localize)(10335, null),
							type: "object",
							additionalProperties: { type: ["string", "null"] },
							default: {},
						},
						[E.TerminalSettingId.EnvironmentChangesIndicator]: {
							markdownDescription: (0, i.localize)(10336, null),
							type: "string",
							enum: ["off", "on", "warnonly"],
							enumDescriptions: [
								(0, i.localize)(10337, null),
								(0, i.localize)(10338, null),
								(0, i.localize)(10339, null),
							],
							default: "warnonly",
						},
						[E.TerminalSettingId.EnvironmentChangesRelaunch]: {
							markdownDescription: (0, i.localize)(10340, null),
							type: "boolean",
							default: !0,
						},
						[E.TerminalSettingId.ShowExitAlert]: {
							description: (0, i.localize)(10341, null),
							type: "boolean",
							default: !0,
						},
						[E.TerminalSettingId.ExperimentalWindowsUseConptyDll]: {
							markdownDescription: (0, i.localize)(10342, null),
							type: "boolean",
							default: !1,
						},
						[E.TerminalSettingId.SplitCwd]: {
							description: (0, i.localize)(10343, null),
							type: "string",
							enum: ["workspaceRoot", "initial", "inherited"],
							enumDescriptions: [
								(0, i.localize)(10344, null),
								(0, i.localize)(10345, null),
								(0, i.localize)(10346, null),
							],
							default: "inherited",
						},
						[E.TerminalSettingId.WindowsEnableConpty]: {
							description: (0, i.localize)(10347, null),
							type: "boolean",
							default: !0,
						},
						[E.TerminalSettingId.WordSeparators]: {
							markdownDescription: (0, i.localize)(10348, null),
							type: "string",
							default: " ()[]{}',\"`\u2500\u2018\u2019\u201C\u201D|",
						},
						[E.TerminalSettingId.EnableFileLinks]: {
							description: (0, i.localize)(10349, null),
							type: "string",
							enum: ["off", "on", "notRemote"],
							enumDescriptions: [
								(0, i.localize)(10350, null),
								(0, i.localize)(10351, null),
								(0, i.localize)(10352, null),
							],
							default: "on",
						},
						[E.TerminalSettingId.AllowedLinkSchemes]: {
							description: (0, i.localize)(10353, null),
							type: "array",
							items: { type: "string" },
							default: [
								"file",
								"http",
								"https",
								"mailto",
								"vscode",
								"vscode-insiders",
							],
						},
						[E.TerminalSettingId.UnicodeVersion]: {
							type: "string",
							enum: ["6", "11"],
							enumDescriptions: [
								(0, i.localize)(10354, null),
								(0, i.localize)(10355, null),
							],
							default: "11",
							description: (0, i.localize)(10356, null),
						},
						[E.TerminalSettingId.EnablePersistentSessions]: {
							description: (0, i.localize)(10357, null),
							type: "boolean",
							default: !0,
						},
						[E.TerminalSettingId.PersistentSessionReviveProcess]: {
							markdownDescription: (0, i.localize)(10358, null),
							type: "string",
							enum: ["onExit", "onExitAndWindowClose", "never"],
							markdownEnumDescriptions: [
								(0, i.localize)(10359, null),
								(0, i.localize)(10360, null),
								(0, i.localize)(10361, null),
							],
							default: "onExit",
						},
						[E.TerminalSettingId.HideOnStartup]: {
							description: (0, i.localize)(10362, null),
							type: "string",
							enum: ["never", "whenEmpty", "always"],
							markdownEnumDescriptions: [
								(0, i.localize)(10363, null),
								(0, i.localize)(10364, null),
								(0, i.localize)(10365, null),
							],
							default: "never",
						},
						[E.TerminalSettingId.CustomGlyphs]: {
							markdownDescription: (0, i.localize)(
								10366,
								null,
								`\`#${E.TerminalSettingId.GpuAcceleration}#\``,
							),
							type: "boolean",
							default: !0,
						},
						[E.TerminalSettingId.RescaleOverlappingGlyphs]: {
							markdownDescription: (0, i.localize)(10367, null),
							type: "boolean",
							default: !0,
						},
						[E.TerminalSettingId.AutoReplies]: {
							markdownDescription: (0, i.localize)(
								10368,
								null,
								'`"Terminate batch job (Y/N)": "Y\\r"`',
								'`"\\r"`',
							),
							type: "object",
							additionalProperties: {
								oneOf: [
									{ type: "string", description: (0, i.localize)(10369, null) },
									{ type: "null" },
								],
							},
							default: {},
						},
						[E.TerminalSettingId.ShellIntegrationEnabled]: {
							restricted: !0,
							markdownDescription: (0, i.localize)(
								10370,
								null,
								"`#terminal.integrated.shellIntegrations.decorationsEnabled#`",
								"`#editor.accessibilitySupport#`",
							),
							type: "boolean",
							default: !0,
						},
						[E.TerminalSettingId.ShellIntegrationDecorationsEnabled]: {
							restricted: !0,
							markdownDescription: (0, i.localize)(10371, null),
							type: "string",
							enum: ["both", "gutter", "overviewRuler", "never"],
							enumDescriptions: [
								(0, i.localize)(10372, null),
								(0, i.localize)(10373, null),
								(0, i.localize)(10374, null),
								(0, i.localize)(10375, null),
							],
							default: "both",
						},
						[E.TerminalSettingId.ShellIntegrationCommandHistory]: {
							restricted: !0,
							markdownDescription: (0, i.localize)(10376, null),
							type: "number",
							default: 100,
						},
						[E.TerminalSettingId.SmoothScrolling]: {
							markdownDescription: (0, i.localize)(10377, null),
							type: "boolean",
							default: !1,
						},
						[E.TerminalSettingId.IgnoreBracketedPasteMode]: {
							markdownDescription: (0, i.localize)(
								10378,
								null,
								"`\\x1b[200~`",
								"`\\x1b[201~`",
							),
							type: "boolean",
							default: !1,
						},
						[E.TerminalSettingId.EnableImages]: {
							restricted: !0,
							markdownDescription: (0, i.localize)(
								10379,
								null,
								`\`#${E.TerminalSettingId.GpuAcceleration}#\``,
							),
							type: "boolean",
							default: !1,
						},
						[E.TerminalSettingId.FocusAfterRun]: {
							markdownDescription: (0, i.localize)(10380, null),
							enum: ["terminal", "accessible-buffer", "none"],
							default: "none",
							tags: ["accessibility"],
							markdownEnumDescriptions: [
								(0, i.localize)(10381, null),
								(0, i.localize)(10382, null),
								(0, i.localize)(10383, null),
							],
						},
						...a.$AVc,
						...h.$CVc,
						...c.$DVc,
						...n.$GHb,
						...g.$gIb,
						...p.$FVc,
						...o.$GVc,
					},
				};
				function y() {
					d.$Io.as(t.$No.Configuration).registerConfiguration(l);
				}
				d.$Io.as(u.$z6.ConfigurationMigration).registerConfigurationMigrations([
					{
						key: E.TerminalSettingId.EnableBell,
						migrateFn: ($, v) => {
							const S = [];
							let I =
								v("accessibility.signals.terminalBell")?.announcement ??
								v("accessibility.alert.terminalBell");
							return (
								I !== void 0 &&
									typeof I != "string" &&
									(I = I ? "auto" : "off"),
								S.push([
									"accessibility.signals.terminalBell",
									{ value: { sound: $ ? "on" : "off", announcement: I } },
								]),
								S.push([E.TerminalSettingId.EnableBell, { value: void 0 }]),
								S.push([E.TerminalSettingId.EnableVisualBell, { value: $ }]),
								S
							);
						},
					},
				]);
			},
		),
		define(
			de[3568],
			he([1, 0, 29, 10, 117, 25, 107, 3566, 145, 358, 245, 143]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$mgd = void 0);
				let h = class extends d.$k6c {
					constructor(n, g, p, o, f, b, s, l) {
						super(
							{
								getDefaultSystemShell: async (y, $) => {
									const v = await l.getBackend(y);
									if (!v)
										throw new t.$fb(
											`Cannot get default system shell when there is no backend for remote authority '${y}'`,
										);
									return v.getDefaultSystemShell($);
								},
								getEnvironment: async (y) => {
									const $ = await l.getBackend(y);
									if (!$)
										throw new t.$fb(
											`Cannot get environment when there is no backend for remote authority '${y}'`,
										);
									return $.getEnvironment();
								},
							},
							g,
							n,
							p,
							o,
							b,
							f,
							s,
						);
					}
				};
				(e.$mgd = h),
					(e.$mgd = h =
						Ne(
							[
								j(0, r.$zeb),
								j(1, i.$gj),
								j(2, u.$Feb),
								j(3, w.$YJ),
								j(4, E.$Vi),
								j(5, m.$teb),
								j(6, a.$$m),
								j(7, C.$mIb),
							],
							h,
						));
			},
		),
		define(
			de[3569],
			he([1, 0, 3, 4, 31, 8, 5, 117, 417, 145, 10, 996, 995, 1766, 178, 130]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$LVc = e.ClassName = void 0);
				var p;
				(function (f) {
					(f.Active = "active"), (f.EditorTextArea = "textarea");
				})(p || (e.ClassName = p = {}));
				let o = class extends t.$1c {
					onClose() {
						E.$Kj
							.and(
								g.$NLb,
								E.$Kj.equals(
									g.$SLb.key,
									n.AccessibleViewProviderId.TerminalHelp,
								),
							)
							?.evaluate(this.c.getContext(null))
							? this.f.executeCommand(
									h.TerminalAccessibilityCommandId.FocusAccessibleBuffer,
								)
							: this.b.focus(),
							this.dispose();
					}
					constructor(b, s, l, y, $, v) {
						super(),
							(this.b = b),
							(this.c = y),
							(this.f = $),
							(this.g = v),
							(this.id = n.AccessibleViewProviderId.TerminalHelp),
							(this.a = !1),
							(this.options = {
								type: n.AccessibleViewType.Help,
								readMoreUrl:
									"https://code.visualstudio.com/docs/editor/accessibility#_terminal-accessibility",
							}),
							(this.verbositySettingKey =
								g.AccessibilityVerbositySettingId.Terminal),
							(this.a =
								s.shellIntegration.status === d.ShellIntegrationStatus.VSCode);
					}
					provideContent() {
						const b = [
							(0, i.localize)(
								10434,
								null,
								h.TerminalAccessibilityCommandId.FocusAccessibleBuffer,
							),
							(0, i.localize)(10435, null),
							(0, i.localize)(
								10436,
								null,
								c.TerminalLinksCommandId.OpenDetectedLink,
							),
							(0, i.localize)(10437, null, r.TerminalCommandId.NewWithProfile),
							(0, i.localize)(10438, null, d.TerminalSettingId.FocusAfterRun),
						];
						return (
							this.g.getValue(
								a.TerminalAccessibilitySettingId
									.AccessibleViewFocusOnCommandExecution,
							) || b.push((0, i.localize)(10439, null)),
							this.b.shellType === d.WindowsShellType.CommandPrompt &&
								b.push((0, i.localize)(10440, null)),
							this.a
								? (b.push((0, i.localize)(10441, null)),
									b.push(
										"- " +
											(0, i.localize)(
												10442,
												null,
												h.TerminalAccessibilityCommandId
													.AccessibleBufferGoToNextCommand,
											),
									),
									b.push(
										"- " +
											(0, i.localize)(
												10443,
												null,
												h.TerminalAccessibilityCommandId
													.AccessibleBufferGoToPreviousCommand,
											),
									),
									b.push(
										"- " +
											(0, i.localize)(
												10444,
												null,
												m.AccessibilityCommandId.GoToSymbol,
											),
									),
									b.push(
										"- " +
											(0, i.localize)(
												10445,
												null,
												r.TerminalCommandId.RunRecentCommand,
											),
									),
									b.push(
										"- " +
											(0, i.localize)(
												10446,
												null,
												r.TerminalCommandId.GoToRecentDirectory,
											),
									))
								: b.push((0, i.localize)(10447, null)),
							b.join(`
`)
						);
					}
				};
				(e.$LVc = o),
					(e.$LVc = o =
						Ne([j(2, C.$Li), j(3, E.$6j), j(4, w.$ek), j(5, u.$gj)], o));
			},
		),
		define(
			de[3570],
			he([1, 0, 6, 3, 67, 178, 10, 8, 189, 130, 107, 996]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$NVc = void 0);
				let h = class extends i.$1c {
					constructor(n, g, p, o, f, b, s) {
						super(),
							(this.c = n),
							(this.f = g),
							(this.id = E.AccessibleViewProviderId.Terminal),
							(this.options = {
								type: E.AccessibleViewType.View,
								language: "terminal",
								id: E.AccessibleViewProviderId.Terminal,
							}),
							(this.verbositySettingKey =
								r.AccessibilityVerbositySettingId.Terminal),
							(this.a = new t.$re()),
							(this.onDidRequestClearLastProvider = this.a.event),
							(this.options.customHelp = p),
							(this.options.position = f.getValue(
								a.TerminalAccessibilitySettingId
									.AccessibleViewPreserveCursorPosition,
							)
								? "initial-bottom"
								: "bottom"),
							this.D(
								this.c.onDisposed(() =>
									this.a.fire(E.AccessibleViewProviderId.Terminal),
								),
							),
							this.D(
								f.onDidChangeConfiguration((l) => {
									l.affectsConfiguration(
										a.TerminalAccessibilitySettingId
											.AccessibleViewPreserveCursorPosition,
									) &&
										(this.options.position = f.getValue(
											a.TerminalAccessibilitySettingId
												.AccessibleViewPreserveCursorPosition,
										)
											? "initial-bottom"
											: "bottom");
								}),
							),
							(this.b = s.activeInstance),
							this.D(
								s.onDidChangeActiveInstance(() => {
									s.activeInstance &&
										this.b?.instanceId !== s.activeInstance?.instanceId &&
										(this.a.fire(E.AccessibleViewProviderId.Terminal),
										(this.b = s.activeInstance));
								}),
							);
					}
					onClose() {
						this.c.focus();
					}
					provideContent() {
						return (
							this.f.update(),
							this.f.lines.join(`
`)
						);
					}
					getSymbols() {
						const n = this.g() ?? [],
							g = [];
						for (const p of n) {
							const o = p.command.command;
							o && g.push({ label: o, lineNumber: p.lineNumber });
						}
						return g;
					}
					g() {
						const n = this.c.capabilities.get(
								m.TerminalCapability.CommandDetection,
							),
							g = n?.commands,
							p = n?.currentCommand;
						if (!g?.length) return;
						const o = [];
						for (const f of g) {
							const b = this.h(f);
							b !== void 0 &&
								o.push({ command: f, lineNumber: b, exitCode: f.exitCode });
						}
						if (p) {
							const f = this.h(p);
							f !== void 0 && o.push({ command: p, lineNumber: f });
						}
						return o;
					}
					h(n) {
						let g;
						if (
							("marker" in n
								? (g = n.marker?.line)
								: "commandStartMarker" in n && (g = n.commandStartMarker?.line),
							!(g === void 0 || g < 0) &&
								((g = this.f.bufferToEditorLineMapping.get(g)), g !== void 0))
						)
							return g + 1;
					}
				};
				(e.$NVc = h),
					(e.$NVc = h =
						Ne([j(3, w.$QO), j(4, C.$gj), j(5, d.$6j), j(6, u.$iIb)], h));
			},
		),
		define(
			de[3571],
			he([
				1, 0, 9, 4, 11, 31, 52, 63, 30, 465, 55, 3276, 1018, 3278, 3279, 99, 81,
				224, 1292, 20,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				class s extends w.$3X {
					constructor() {
						super({
							id: "workbench.action.url.openUrl",
							title: (0, i.localize2)(11126, "Open URL"),
							category: g.$ck.Developer,
							f1: !0,
						});
					}
					async run($) {
						const v = $.get(d.$DJ),
							S = $.get(r.$2rb);
						return v
							.input({ prompt: (0, i.localize)(11124, null) })
							.then((I) => {
								if (I) {
									const T = t.URI.parse(I);
									S.open(T, { originalUrl: I });
								}
							});
					}
				}
				(0, w.$4X)(s),
					E.$fk.registerCommand(h.$UXb),
					w.$ZX.appendMenuItem(w.$XX.CommandPalette, {
						command: { id: h.$UXb.id, title: h.$UXb.description.description },
					}),
					m.$Io
						.as(u.Extensions.Workbench)
						.registerWorkbenchContribution(n.$tSc, C.LifecyclePhase.Restored),
					(0, u.$s6)(c.$sSc.ID, c.$sSc, u.WorkbenchPhase.BlockRestore),
					(0, u.$s6)(
						a.ExternalUriResolverContribution.ID,
						a.ExternalUriResolverContribution,
						u.WorkbenchPhase.BlockRestore,
					),
					m.$Io
						.as(p.$No.Configuration)
						.registerConfiguration({
							...o.$v6,
							properties: {
								"workbench.trustedDomains.promptInTrustedWorkspace": {
									scope: p.ConfigurationScope.APPLICATION,
									type: "boolean",
									default: !1,
									description: (0, i.localize)(11125, null),
								},
							},
						}),
					(0, b.$lK)(f.$ZXb, f.$1Xb, b.InstantiationType.Delayed);
			},
		),
		define(
			de[708],
			he([1, 0, 4, 5, 282, 32, 21, 20, 10, 62, 30, 2816, 224, 81, 113]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$i4b = e.$h4b = void 0),
					(e.$h4b = (0, i.$Mi)("WorkbenchAssignmentService"));
				class g {
					constructor(s) {
						(this.b = s),
							(this.a = s.getMemento(
								C.StorageScope.APPLICATION,
								C.StorageTarget.MACHINE,
							));
					}
					async getValue(s, l) {
						return (await this.a[s]) || l;
					}
					setValue(s, l) {
						(this.a[s] = l), this.b.saveMemento();
					}
				}
				class p {
					constructor(s, l) {
						(this.b = s), (this.c = l);
					}
					get assignmentContext() {
						return this.a?.split(";");
					}
					setSharedProperty(s, l) {
						s === this.c.tasConfig?.assignmentContextTelemetryPropertyName &&
							(this.a = l),
							this.b.setExperimentProperty(s, l);
					}
					postEvent(s, l) {
						const y = {};
						for (const [$, v] of l.entries()) y[$] = v;
						this.b.publicLog(s, y);
					}
				}
				let o = class extends a.$g4b {
					constructor(s, l, y, $, v) {
						super(
							s.machineId,
							y,
							$,
							v,
							new p(s, $),
							new g(new w.$eEb("experiment.service.memento", l)),
						),
							(this.l = s);
					}
					get d() {
						return this.f.getValue("workbench.enableExperiments") === !0;
					}
					async getTreatment(s) {
						const l = await super.getTreatment(s);
						return (
							this.l.publicLog2("tasClientReadTreatmentComplete", {
								treatmentName: s,
								treatmentValue: JSON.stringify(l),
							}),
							l
						);
					}
					async getCurrentExperiments() {
						if (this.a && this.d)
							return await this.a, this.i?.assignmentContext;
					}
				};
				(e.$i4b = o),
					(e.$i4b = o =
						Ne(
							[j(0, E.$km), j(1, C.$lq), j(2, m.$gj), j(3, r.$Bk), j(4, n.$Ti)],
							o,
						)),
					(0, d.$lK)(e.$h4b, o, d.InstantiationType.Delayed),
					u.$Io
						.as(c.$No.Configuration)
						.registerConfiguration({
							...h.$v6,
							properties: {
								"workbench.enableExperiments": {
									type: "boolean",
									description: (0, t.localize)(12090, null),
									default: !0,
									scope: c.ConfigurationScope.APPLICATION,
									restricted: !0,
									tags: ["usesOnlineServices"],
								},
							},
						});
			},
		),
		define(
			de[3572],
			he([
				1, 0, 15, 33, 163, 29, 6, 94, 103, 3, 197, 162, 9, 4, 10, 8, 5, 34, 84,
				21, 32, 25, 153, 207, 441, 329, 1022, 3013, 829, 503, 1023, 708, 53,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$XIc = void 0);
				const N = "interactive.sessions",
					A = "chat.workspaceTransfer",
					R = 1e3 * 60,
					O = 25;
				class B {
					constructor(x, H) {
						(this.cancellationTokenSource = x), (this.requestId = H);
					}
					dispose() {
						this.cancellationTokenSource.dispose();
					}
					cancel() {
						this.cancellationTokenSource.cancel();
					}
				}
				let U = class extends r.$1c {
					get transferredSessionData() {
						return this.j;
					}
					constructor(x, H, q, V, G, K, J, W, X, Y, ie, ne) {
						super(),
							(this.t = x),
							(this.u = H),
							(this.w = q),
							(this.y = V),
							(this.z = G),
							(this.C = K),
							(this.F = J),
							(this.G = W),
							(this.H = X),
							(this.I = ne),
							(this.c = this.D(new r.$0c())),
							(this.f = this.D(new r.$0c())),
							(this.h = new Set()),
							(this.m = this.D(new C.$re())),
							(this.onDidPerformUserAction = this.m.event),
							(this.n = this.D(new C.$re())),
							(this.onDidDisposeSession = this.n.event),
							(this.q = this.D(new r.$0c())),
							(this.s = this.y.createInstance(T.$WIc));
						const ee = !K.getWorkspace().folders.length,
							_ = x.get(
								N,
								ee ? b.StorageScope.APPLICATION : b.StorageScope.WORKSPACE,
								"",
							);
						if (_) {
							this.g = this.O(_);
							const se = Object.keys(this.g).length;
							se > 0 &&
								this.M("constructor", `Restored ${se} persisted sessions`);
						} else this.g = {};
						const te = this.P(),
							Q = te?.chat;
						Q &&
							(this.M("constructor", `Transferred session ${Q.sessionId}`),
							(this.g[Q.sessionId] = Q),
							(this.j = { sessionId: Q.sessionId, inputValue: te.inputValue })),
							this.D(x.onWillSaveState(() => this.J()));
						const Z = $.$R1.bindTo(ie);
						Y.getTreatment("chatVoteUpEnabled").then((se) => Z.set(!!se));
					}
					isEnabled(x) {
						return this.H.getContributedDefaultAgent(x) !== void 0;
					}
					J() {
						const x = Array.from(this.c.values())
							.filter((q) => q.initialLocation === y.ChatAgentLocation.Panel)
							.filter((q) => q.getRequests().length > 0);
						if (!this.C.getWorkspace().folders.length) this.L(x);
						else {
							let q = x;
							(q = q.concat(
								Object.values(this.g)
									.filter((G) => !this.c.has(G.sessionId))
									.filter((G) => G.requests.length),
							)),
								q.sort((G, K) => (K.creationDate ?? 0) - (G.creationDate ?? 0)),
								(q = q.slice(0, O)),
								q.length &&
									this.M("onWillSaveState", `Persisting ${q.length} sessions`);
							const V = JSON.stringify(q);
							q.length &&
								this.M("onWillSaveState", `Persisting ${V.length} chars`),
								this.t.store(
									N,
									V,
									b.StorageScope.WORKSPACE,
									b.StorageTarget.MACHINE,
								);
						}
						this.h.clear();
					}
					L(x) {
						const H = this.t.get(N, b.StorageScope.APPLICATION, ""),
							q = this.g;
						let V;
						if (H) {
							V = this.O(H);
							const W = Object.keys(V).length;
							W > 0 &&
								this.M("constructor", `Restored ${W} persisted sessions`);
						} else V = {};
						this.h.forEach((W) => delete V[W]),
							Object.values(q).forEach((W) => {
								const X = V[W.sessionId];
								X && W.requests.length > X.requests.length
									? (V[W.sessionId] = W)
									: !X && W.isNew && ((W.isNew = !1), (V[W.sessionId] = W));
							}),
							(this.g = V);
						const G = { ...this.g };
						for (const W of x) G[W.sessionId] = W;
						let K = Object.values(G);
						K.sort((W, X) => (X.creationDate ?? 0) - (W.creationDate ?? 0)),
							(K = K.slice(0, O));
						const J = JSON.stringify(K);
						this.t.store(
							N,
							J,
							b.StorageScope.APPLICATION,
							b.StorageTarget.MACHINE,
						);
					}
					notifyUserAction(x) {
						this.s.notifyUserAction(x), this.m.fire(x);
					}
					setChatSessionTitle(x, H) {
						const q = this.c.get(x);
						if (q) {
							q.setCustomTitle(H);
							return;
						}
						const V = this.g[x];
						V && (V.customTitle = H);
					}
					M(x, H) {
						H
							? this.u.trace(`ChatService#${x}: ${H}`)
							: this.u.trace(`ChatService#${x}`);
					}
					N(x, H) {
						this.u.error(`ChatService#${x} ${H}`);
					}
					O(x) {
						try {
							const H = (0, u.$ji)(JSON.parse(x));
							if (!Array.isArray(H)) throw new Error("Expected array");
							return H.reduce((V, G) => {
								for (const K of G.requests)
									Array.isArray(K.response)
										? (K.response = K.response.map((J) =>
												typeof J == "string" ? new d.$cl(J) : J,
											))
										: typeof K.response == "string" &&
											(K.response = [new d.$cl(K.response)]);
								return (V[G.sessionId] = (0, v.$52)(G)), V;
							}, {});
						} catch (H) {
							return (
								this.N(
									"deserializeChats",
									`Malformed session data: ${H}. [${x.substring(0, 20)}${x.length > 20 ? "..." : ""}]`,
								),
								{}
							);
						}
					}
					P() {
						const x = this.t.getObject(A, b.StorageScope.PROFILE, []),
							H = this.C.getWorkspace().folders[0]?.uri;
						if (!H) return;
						const q = H.toString(),
							V = Date.now(),
							G = x.find(
								(J) =>
									h.URI.revive(J.toWorkspace).toString() === q &&
									V - J.timestampInMilliseconds < R,
							),
							K = x.filter(
								(J) =>
									h.URI.revive(J.toWorkspace).toString() !== q &&
									V - J.timestampInMilliseconds < R,
							);
						return (
							this.t.store(
								A,
								JSON.stringify(K),
								b.StorageScope.PROFILE,
								b.StorageTarget.MACHINE,
							),
							G
						);
					}
					getHistory() {
						const H = Object.values(this.g)
							.filter((V) => V.requests.length > 0)
							.filter((V) => !this.c.has(V.sessionId))
							.filter((V) => !V.isImported)
							.map((V) => {
								const G = V.customTitle ?? v.$82.getDefaultTitle(V.requests);
								return {
									sessionId: V.sessionId,
									title: G,
									lastMessageDate: V.lastMessageDate,
									isActive: !1,
								};
							});
						return [
							...Array.from(this.c.values())
								.filter((V) => !V.isImported)
								.map((V) => {
									const G = V.title || (0, c.localize)(4764, null);
									return {
										sessionId: V.sessionId,
										title: G,
										lastMessageDate: V.lastMessageDate,
										isActive: !0,
									};
								}),
							...H,
						];
					}
					removeHistoryEntry(x) {
						this.g[x] && (this.h.add(x), delete this.g[x], this.J());
					}
					clearAllHistoryEntries() {
						Object.values(this.g).forEach((x) => this.h.add(x.sessionId)),
							(this.g = {}),
							this.J();
					}
					startSession(x, H) {
						return this.M("startSession"), this.Q(void 0, x, H);
					}
					Q(x, H, q) {
						const V = this.y.createInstance(v.$82, x, H);
						return this.c.set(V.sessionId, V), this.R(V, q), V;
					}
					async R(x, H) {
						try {
							this.M("initializeSession", `Initialize session ${x.sessionId}`),
								x.startInitialize(),
								await this.w.whenInstalledExtensionsRegistered();
							const q =
								this.H.getContributedDefaultAgent(x.initialLocation) ??
								this.H.getContributedDefaultAgent(y.ChatAgentLocation.Panel);
							if (!q) throw new E.$fb("No default agent contributed");
							await this.w.activateByEvent(`onChatParticipant:${q.id}`);
							const V = this.H.getActivatedAgents().find((J) => J.id === q.id);
							if (!V) throw new E.$fb("No default agent registered");
							const G = x.welcomeMessage
									? void 0
									: ((await V.provideWelcomeMessage?.(x.initialLocation, H)) ??
										void 0),
								K =
									G &&
									this.y.createInstance(
										v.$92,
										G.map((J) => (typeof J == "string" ? new d.$cl(J) : J)),
										(await V.provideSampleQuestions?.(x.initialLocation, H)) ??
											[],
									);
							x.initialize(K);
						} catch (q) {
							this.M("startSession", `initializeSession failed: ${q}`),
								x.setInitializationError(q),
								this.c.deleteAndDispose(x.sessionId),
								this.n.fire({
									sessionId: x.sessionId,
									reason: "initializationFailed",
								});
						}
					}
					getSession(x) {
						return this.c.get(x);
					}
					getOrRestoreSession(x) {
						this.M("getOrRestoreSession", `sessionId: ${x}`);
						const H = this.c.get(x);
						if (H) return H;
						const q = (0, u.$ji)(this.g[x]);
						if (q)
							return (
								x === this.transferredSessionData?.sessionId &&
									(this.j = void 0),
								this.Q(
									q,
									q.initialLocation ?? y.ChatAgentLocation.Panel,
									i.CancellationToken.None,
								)
							);
					}
					loadSessionFromContent(x) {
						return this.Q(
							x,
							x.initialLocation ?? y.ChatAgentLocation.Panel,
							i.CancellationToken.None,
						);
					}
					async resendRequest(x, H) {
						const q = this.c.get(x.session.sessionId);
						if (!q && q !== x.session)
							throw new Error(`Unknown session: ${x.session.sessionId}`);
						await q.waitForInitialization();
						const V = this.f.get(x.session.sessionId);
						V &&
							(this.M(
								"resendRequest",
								`Session ${x.session.sessionId} already has a pending request, cancelling...`,
							),
							V.cancel());
						const G = H?.location ?? q.initialLocation,
							K = H?.attempt ?? 0,
							J = !H?.noCommandDetection,
							W = this.H.getDefaultAgent(G);
						q.removeRequest(x.id, v.ChatRequestRemovalReason.Resend);
						const X = {
							...H,
							locationData: x.locationData,
							attachedContext: x.attachedContext,
						};
						await this.W(q, q.sessionId, x.message, K, J, W, G, X)
							.responseCompletePromise;
					}
					async sendRequest(x, H, q) {
						if (
							(this.M(
								"sendRequest",
								`sessionId: ${x}, message: ${H.substring(0, 20)}${H.length > 20 ? "[...]" : ""}}`,
							),
							!H.trim() && !q?.slashCommand && !q?.agentId)
						) {
							this.M("sendRequest", "Rejected empty message");
							return;
						}
						const V = this.c.get(x);
						if (!V) throw new Error(`Unknown session: ${x}`);
						if ((await V.waitForInitialization(), this.f.has(x))) {
							this.M(
								"sendRequest",
								`Session ${x} already has a pending request`,
							);
							return;
						}
						const G = q?.location ?? V.initialLocation,
							K = q?.attempt ?? 0,
							J = this.H.getDefaultAgent(G),
							W = this.S(x, H, G, q),
							X = W.parts.find((ie) => ie instanceof S.$U2)?.agent ?? J,
							Y = W.parts.find((ie) => ie instanceof S.$V2);
						return {
							...this.W(V, x, W, K, !q?.noCommandDetection, J, G, q),
							agent: X,
							slashCommand: Y?.command,
						};
					}
					S(x, H, q, V) {
						let G = V?.parserContext;
						if (V?.agentId) {
							const J = this.H.getAgent(V.agentId);
							if (!J) throw new Error(`Unknown agent: ${V.agentId}`);
							G = { selectedAgent: J };
							const W = V.slashCommand ? ` ${S.$R2}${V.slashCommand}` : "";
							H = `${S.$Q2}${J.name}${W} ${H}`;
						}
						return this.y.createInstance(I.$G2).parseChatRequest(x, H, q, G);
					}
					U(x) {
						this.q.get(x)?.cancel();
						const H = new i.$Ce();
						return this.q.set(x, H), H.token;
					}
					W(x, H, q, V, G, K, J, W) {
						const X = this.U(H);
						let Y;
						const ie =
								"kind" in q
									? void 0
									: q.parts.find(($e) => $e instanceof S.$U2),
							ne =
								"kind" in q
									? void 0
									: q.parts.find(($e) => $e instanceof S.$V2),
							ee =
								"kind" in q
									? void 0
									: q.parts.find(($e) => $e instanceof S.$W2),
							_ = [...x.getRequests()];
						let te = !1;
						const Q = ee ? "slashCommand" : "string",
							Z = new t.$0h();
						let se = !1;
						function re() {
							!se && Y?.response && (Z.complete(Y.response), (se = !0));
						}
						const le = new i.$Ce(),
							oe = le.token,
							pe = (async () => {
								const $e = (ve) => {
									oe.isCancellationRequested ||
										((te = !0),
										ve.kind === "markdownContent"
											? this.M(
													"sendRequest",
													`Provider returned progress for session ${x.sessionId}, ${ve.content.value.length} chars`,
												)
											: this.M(
													"sendRequest",
													`Provider returned progress: ${JSON.stringify(ve)}`,
												),
										x.acceptResponseProgress(Y, ve),
										re());
								};
								let ye, ue;
								const fe = new a.$le(!1),
									me = oe.onCancellationRequested(() => {
										this.M(
											"sendRequest",
											`Request for session ${x.sessionId} was cancelled`,
										),
											this.z.publicLog2("interactiveSessionProviderInvoked", {
												timeToFirstProgress: void 0,
												totalTime: fe.elapsed(),
												result: "cancelled",
												requestType: Q,
												agent: ie?.agent.id ?? "",
												agentExtensionId: ie?.agent.extensionId.value ?? "",
												slashCommand: ne
													? ne.command.name
													: ee?.slashCommand.command,
												chatSessionId: x.sessionId,
												location: J,
												citations: Y?.response?.codeCitations.length ?? 0,
												numCodeBlocks: z(Y.response?.response.toString() ?? "")
													.length,
												isParticipantDetected: !!ye,
											}),
											x.cancelRequest(Y);
									});
								try {
									let ve, ge, be;
									if (ie || (K && !ee)) {
										const Ce = async (Je, Te, Ee, Ie, Be) => {
											const Se = { variables: [] };
											Y =
												Ie ??
												x.addRequest(
													q,
													Se,
													V,
													Je,
													Te,
													W?.confirmation,
													W?.locationData,
													W?.attachedContext,
												);
											const ke = await this.G.resolveVariables(
												q,
												Y.attachedContext,
												x,
												$e,
												oe,
											);
											x.updateRequest(Y, ke);
											const Ue = (0, S.$N2)(Y.message),
												qe = (0, v.$02)(ke, Ue.diff);
											return {
												sessionId: H,
												requestId: Y.id,
												agentId: Je.id,
												message: Ue.message,
												command: Te?.name,
												variables: qe,
												enableCommandDetection: Ee,
												isParticipantDetected: Be,
												attempt: V,
												location: J,
												locationData: Y.locationData,
												acceptedConfirmationData: W?.acceptedConfirmationData,
												rejectedConfirmationData: W?.rejectedConfirmationData,
											};
										};
										if (
											this.I.getValue(
												"chat.experimental.detectParticipant.enabled",
											) !== !1 &&
											this.H.hasChatParticipantDetectionProviders() &&
											!ie &&
											!ee &&
											G
										) {
											const Je = this.X(_, x.sessionId, J, K.id),
												Te = await Ce(K, ne?.command, G, void 0, !1),
												Ee = await this.H.detectAgentOrCommand(
													Te,
													Je,
													{ location: J },
													oe,
												);
											Ee &&
												this.H.getAgent(Ee.agent.id)?.locations?.includes(J) &&
												(Y.response?.setAgent(Ee.agent, Ee.command),
												(ye = Ee.agent),
												(ue = Ee.command));
										}
										const Le = ye ?? ie?.agent ?? K,
											Fe = ue ?? ne?.command;
										await this.w.activateByEvent(`onChatParticipant:${Le.id}`);
										const Oe = this.X(_, x.sessionId, J, Le.id),
											xe = await Ce(Le, Fe, G, Y, !!ye),
											He = this.f.get(H);
										He && !He.requestId && (He.requestId = xe.requestId), re();
										const Ke = await this.H.invokeAgent(Le.id, xe, $e, Oe, oe);
										(ve = Ke),
											(ge = this.H.getFollowups(Le.id, xe, Ke, Oe, X)),
											(be =
												x.getRequests().length === 1 && !x.customTitle
													? this.H.getChatTitle(
															K.id,
															this.X(x.getRequests(), x.sessionId, J, Le.id),
															i.CancellationToken.None,
														)
													: void 0);
									} else if (ee && this.F.hasCommand(ee.slashCommand.command)) {
										(Y = x.addRequest(q, { variables: [] }, V)), re();
										const Ce = [];
										for (const Oe of x.getRequests())
											Oe.response &&
												(Ce.push({
													role: L.ChatMessageRole.User,
													content: [{ type: "text", value: Oe.message.text }],
												}),
												Ce.push({
													role: L.ChatMessageRole.Assistant,
													content: [
														{
															type: "text",
															value: Oe.response.response.toString(),
														},
													],
												}));
										const Le = q.text,
											Fe = await this.F.executeCommand(
												ee.slashCommand.command,
												Le.substring(
													ee.slashCommand.command.length + 1,
												).trimStart(),
												new f.$0N((Oe) => {
													$e(Oe);
												}),
												Ce,
												J,
												oe,
											);
										(ge = Promise.resolve(Fe?.followUp)), (ve = {});
									} else throw new Error("Cannot handle request");
									if (oe.isCancellationRequested) return;
									{
										ve ||
											(this.M(
												"sendRequest",
												`Provider returned no response for session ${x.sessionId}`,
											),
											(ve = {
												errorDetails: { message: (0, c.localize)(4765, null) },
											}));
										const Ce = ve.errorDetails?.responseIsFiltered
												? "filtered"
												: ve.errorDetails && te
													? "errorWithOutput"
													: ve.errorDetails
														? "error"
														: "success",
											Le = ne ? ne.command.name : ee?.slashCommand.command;
										this.z.publicLog2("interactiveSessionProviderInvoked", {
											timeToFirstProgress: ve.timings?.firstProgress,
											totalTime: ve.timings?.totalElapsed,
											result: Ce,
											requestType: Q,
											agent: ie?.agent.id ?? "",
											agentExtensionId: ie?.agent.extensionId.value ?? "",
											slashCommand: Le,
											chatSessionId: x.sessionId,
											isParticipantDetected: !!ye,
											location: J,
											citations: Y.response?.codeCitations.length ?? 0,
											numCodeBlocks: z(Y.response?.response.toString() ?? "")
												.length,
										}),
											x.setResponse(Y, ve),
											re(),
											this.M(
												"sendRequest",
												`Provider returned response for session ${x.sessionId}`,
											),
											x.completeResponse(Y),
											ge &&
												ge.then((Fe) => {
													x.setFollowups(Y, Fe),
														this.s.retrievedFollowups(
															ie?.agent.id ?? "",
															Le,
															Fe?.length ?? 0,
														);
												}),
											be?.then((Fe) => {
												Fe && x.setCustomTitle(Fe);
											});
									}
								} catch (ve) {
									if (
										(this.z.publicLog2("interactiveSessionProviderInvoked", {
											timeToFirstProgress: void 0,
											totalTime: void 0,
											result: "error",
											requestType: Q,
											agent: ie?.agent.id ?? "",
											agentExtensionId: ie?.agent.extensionId.value ?? "",
											slashCommand: ne
												? ne.command.name
												: ee?.slashCommand.command,
											chatSessionId: x.sessionId,
											location: J,
											citations: 0,
											numCodeBlocks: 0,
											isParticipantDetected: !!ye,
										}),
										this.u.error(
											`Error while handling chat request: ${(0, w.$xj)(ve, !0)}`,
										),
										Y)
									) {
										const be = { errorDetails: { message: ve.message } };
										x.setResponse(Y, be), re(), x.completeResponse(Y);
									}
								} finally {
									me.dispose();
								}
							})();
						return (
							this.f.set(x.sessionId, new B(le)),
							pe.finally(() => {
								this.f.deleteAndDispose(x.sessionId);
							}),
							{ responseCreatedPromise: Z.p, responseCompletePromise: pe }
						);
					}
					X(x, H, q, V) {
						const G = [];
						for (const K of x) {
							if (!K.response) continue;
							const J = this.H.getDefaultAgent(q)?.id;
							if (V !== K.response.agent?.id && V !== J) continue;
							const W = (0, S.$N2)(K.message),
								X = {
									sessionId: H,
									requestId: K.id,
									agentId: K.response.agent?.id ?? "",
									message: W.message,
									command: K.response.slashCommand?.name,
									variables: (0, v.$02)(K.variableData, W.diff),
									location: y.ChatAgentLocation.Panel,
								};
							G.push({
								request: X,
								response: K.response.response.value,
								result: K.response.result ?? {},
							});
						}
						return G;
					}
					async removeRequest(x, H) {
						const q = this.c.get(x);
						if (!q) throw new Error(`Unknown session: ${x}`);
						await q.waitForInitialization();
						const V = this.f.get(x);
						V?.requestId === H && (V.cancel(), this.f.deleteAndDispose(x)),
							q.removeRequest(H);
					}
					async adoptRequest(x, H) {
						if (!(H instanceof v.$22))
							throw new TypeError(
								"Can only adopt requests of type ChatRequestModel",
							);
						const q = this.c.get(x);
						if (!q) throw new Error(`Unknown session: ${x}`);
						await q.waitForInitialization();
						const V = H.session;
						if ((q.adoptRequest(H), H.response && !H.response.isComplete)) {
							const G = this.f.deleteAndLeak(V.sessionId);
							G && ((G.requestId = H.id), this.f.set(q.sessionId, G));
						}
					}
					async addCompleteRequest(x, H, q, V, G) {
						this.M("addCompleteRequest", `message: ${H}`);
						const K = this.c.get(x);
						if (!K) throw new Error(`Unknown session: ${x}`);
						await K.waitForInitialization();
						const J =
								typeof H == "string"
									? this.y.createInstance(I.$G2).parseChatRequest(x, H)
									: H,
							W = K.addRequest(J, q || { variables: [] }, V ?? 0);
						if (typeof G.message == "string")
							K.acceptResponseProgress(W, {
								content: new d.$cl(G.message),
								kind: "markdownContent",
							});
						else for (const X of G.message) K.acceptResponseProgress(W, X, !0);
						K.setResponse(W, G.result || {}),
							G.followups !== void 0 && K.setFollowups(W, G.followups),
							K.completeResponse(W);
					}
					cancelCurrentRequestForSession(x) {
						this.M("cancelCurrentRequestForSession", `sessionId: ${x}`),
							this.f.get(x)?.cancel(),
							this.f.deleteAndDispose(x);
					}
					clearSession(x) {
						this.M("clearSession", `sessionId: ${x}`);
						const H = this.c.get(x);
						if (!H) throw new Error(`Unknown session: ${x}`);
						if (H.initialLocation === y.ChatAgentLocation.Panel) {
							const q = JSON.parse(JSON.stringify(H));
							(q.isNew = !0), (this.g[x] = q);
						}
						this.c.deleteAndDispose(x),
							this.f.get(x)?.cancel(),
							this.f.deleteAndDispose(x),
							this.n.fire({ sessionId: x, reason: "cleared" });
					}
					hasSessions() {
						return !!Object.values(this.g);
					}
					transferChatSession(x, H) {
						const q = m.Iterable.find(
							this.c.values(),
							(G) => G.sessionId === x.sessionId,
						);
						if (!q)
							throw new Error(
								`Failed to transfer session. Unknown session ID: ${x.sessionId}`,
							);
						const V = this.t.getObject(A, b.StorageScope.PROFILE, []);
						V.push({
							chat: q.toJSON(),
							timestampInMilliseconds: Date.now(),
							toWorkspace: H,
							inputValue: x.inputValue,
						}),
							this.t.store(
								A,
								JSON.stringify(V),
								b.StorageScope.PROFILE,
								b.StorageTarget.MACHINE,
							),
							this.M(
								"transferChatSession",
								`Transferred session ${q.sessionId} to workspace ${H.toString()}`,
							);
					}
				};
				(e.$XIc = U),
					(e.$XIc = U =
						Ne(
							[
								j(0, b.$lq),
								j(1, o.$ik),
								j(2, M.$q2),
								j(3, p.$Li),
								j(4, s.$km),
								j(5, l.$Vi),
								j(6, P.$L2),
								j(7, k.$D2),
								j(8, y.$c3),
								j(9, D.$h4b),
								j(10, g.$6j),
								j(11, n.$gj),
							],
							U,
						));
				function z(F) {
					const x = F.split(`
`),
						H = [];
					let q;
					for (let V = 0; V < x.length; V++) {
						const G = x[V];
						if (q)
							new RegExp(`^\\s*${q.delimiter}\\s*$`).test(G) &&
								(H.push(q.languageId), (q = void 0));
						else {
							const K = G.match(/^(\s*)(`{3,}|~{3,})(\w*)/);
							K && (q = { delimiter: K[2], languageId: K[3] });
						}
					}
					return H;
				}
			},
		),
		define(
			de[3573],
			he([
				1, 0, 139, 75, 320, 11, 10, 8, 119, 109, 20, 769, 51, 35, 174, 123, 376,
				708, 357, 157, 1297,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$cgd = void 0),
					(e.$dgd = y),
					(e.$egd = $);
				let l = class {
					constructor(I, T, P, k, L, D, M, N, A, R, O, B) {
						(this.b = I),
							(this.c = T),
							(this.d = P),
							(this.f = k),
							(this.g = L),
							(this.h = D),
							(this.i = M),
							(this.j = N),
							(this.k = A),
							(this.l = R),
							(this.m = O),
							(this.n = B),
							(this.a = new r.$Hn()),
							w.$P.on("vscode:triggerReporterMenu", async (U, z) => {
								const F = z.extensionId;
								this.l
									.getMenuActions(E.$XX.IssueReporter, this.m, {
										renderShortTitle: !0,
									})
									.flatMap((H) => H[1])
									.forEach(async (H) => {
										try {
											H.item &&
												"source" in H.item &&
												H.item.source?.id === F &&
												(this.a.add(F), await H.run());
										} catch (q) {
											console.error(q);
										}
									}),
									this.a.has(F) ||
										w.$P.send(
											`vscode:triggerReporterMenuResponse:${F}`,
											void 0,
										);
							});
					}
					async openReporter(I = {}) {
						const T = [],
							P = [],
							k = I;
						try {
							const B = (await this.f.getInstalled()).filter(
								(U) =>
									this.g.isEnabled(U) ||
									(I.extensionId && U.identifier.id === I.extensionId),
							);
							T.push(
								...B.map((U) => {
									const { manifest: z } = U,
										F = z.contributes ? Object.keys(z.contributes) : [],
										x =
											!z.main &&
											!z.browser &&
											F.length === 1 &&
											F[0] === "themes",
										H = U.type === r.ExtensionType.System;
									return {
										name: z.name,
										publisher: z.publisher,
										version: z.version,
										repositoryUrl: z.repository && z.repository.url,
										bugsUrl: z.bugs && z.bugs.url,
										displayName: z.displayName,
										id: U.identifier.id,
										data: I.data,
										uri: I.uri,
										isTheme: x,
										isBuiltin: H,
										extensionData: "Extensions data loading",
									};
								}),
							),
								P.push(
									...B.map((U) => {
										const { manifest: z } = U,
											F = z.contributes ? Object.keys(z.contributes) : [],
											x =
												!z.main &&
												!z.browser &&
												F.length === 1 &&
												F[0] === "themes",
											H = U.type === r.ExtensionType.System;
										return {
											name: z.name,
											publisher: z.publisher,
											version: z.version,
											repositoryUrl: z.repository && z.repository.url,
											bugsUrl: z.bugs && z.bugs.url,
											displayName: z.displayName,
											id: U.identifier.id,
											data: I.data,
											uri: I.uri,
											isTheme: x,
											isBuiltin: H,
											extensionData: "Extensions data loading",
										};
									}),
								);
						} catch (O) {
							T.push({
								name: "Workbench Issue Service",
								publisher: "Unknown",
								version: "0.0.0",
								repositoryUrl: void 0,
								bugsUrl: void 0,
								extensionData: "Extensions data loading",
								displayName: `Extensions not loaded: ${O}`,
								id: "workbench.issue",
								isTheme: !1,
								isBuiltin: !0,
							}),
								P.push({
									name: "Workbench Issue Service",
									publisher: "Unknown",
									version: "0.0.0",
									repositoryUrl: void 0,
									bugsUrl: void 0,
									extensionData: "Extensions data loading",
									displayName: `Extensions not loaded: ${O}`,
									id: "workbench.issue",
									isTheme: !1,
									isBuiltin: !0,
								});
						}
						const L = await this.i.getCurrentExperiments();
						let D = "";
						try {
							D = (await this.j.getSessions("github")).filter((U) =>
								U.scopes.includes("repo"),
							)[0]?.accessToken;
						} catch {}
						let M = !1;
						try {
							M = !(await this.k.isPure()).isPure;
						} catch {}
						const N = this.d.getColorTheme(),
							A = Object.assign(
								{
									styles: y(N),
									zoomLevel: (0, t.$Hfb)(i.$Bfb),
									enabledExtensions: T,
									experiments: L?.join(`
`),
									restrictedMode: !this.h.isWorkspaceTrusted(),
									isUnsupported: M,
									githubAccessToken: D,
								},
								I,
							),
							R = Object.assign(
								{
									styles: $(N),
									zoomLevel: (0, t.$Hfb)(i.$Bfb),
									enabledExtensions: P,
									experiments: L?.join(`
`),
									restrictedMode: !this.h.isWorkspaceTrusted(),
									isUnsupported: M,
									githubAccessToken: D,
								},
								k,
							);
						return (
							A.extensionId &&
								(T.some((B) => r.$Gn.equals(B.id, A.extensionId)) ||
									console.error(
										`Extension with ID ${A.extensionId} does not exist.`,
									)),
							A.extensionId &&
								this.a.has(A.extensionId) &&
								(w.$P.send(
									`vscode:triggerReporterMenuResponse:${A.extensionId}`,
									A,
								),
								this.a.delete(new r.$Gn(A.extensionId))),
							this.n.getValue("issueReporter.experimental.auxWindow")
								? this.c.openReporter(A)
								: this.b.openReporter(R)
						);
					}
				};
				(e.$cgd = l),
					(e.$cgd = l =
						Ne(
							[
								j(0, a.$4Xb),
								j(1, p.$6Xb),
								j(2, c.$iP),
								j(3, m.$Hp),
								j(4, b.$IQb),
								j(5, n.$pO),
								j(6, o.$h4b),
								j(7, f.$$7),
								j(8, s.$k4c),
								j(9, E.$YX),
								j(10, d.$6j),
								j(11, C.$gj),
							],
							l,
						));
				function y(S) {
					return {
						backgroundColor: v(S, g.$wGb),
						color: v(S, h.$IP),
						textLinkColor: v(S, h.$RP),
						textLinkActiveForeground: v(S, h.$SP),
						inputBackground: v(S, h.$TR),
						inputForeground: v(S, h.$UR),
						inputBorder: v(S, h.$VR),
						inputActiveBorder: v(S, h.$WR),
						inputErrorBorder: v(S, h.$0R),
						inputErrorBackground: v(S, h.$8R),
						inputErrorForeground: v(S, h.$9R),
						buttonBackground: v(S, h.$eS),
						buttonForeground: v(S, h.$cS),
						buttonHoverBackground: v(S, h.$fS),
						sliderActiveColor: v(S, h.$6P),
						sliderBackgroundColor: v(S, g.$wGb),
						sliderHoverColor: v(S, h.$5P),
					};
				}
				function $(S) {
					return {
						backgroundColor: v(S, g.$wGb),
						color: v(S, h.$IP),
						textLinkColor: v(S, h.$RP),
						textLinkActiveForeground: v(S, h.$SP),
						inputBackground: v(S, h.$TR),
						inputForeground: v(S, h.$UR),
						inputBorder: v(S, h.$VR),
						inputActiveBorder: v(S, h.$WR),
						inputErrorBorder: v(S, h.$0R),
						inputErrorBackground: v(S, h.$8R),
						inputErrorForeground: v(S, h.$9R),
						buttonBackground: v(S, h.$eS),
						buttonForeground: v(S, h.$cS),
						buttonHoverBackground: v(S, h.$fS),
						sliderActiveColor: v(S, h.$6P),
						sliderBackgroundColor: v(S, h.$4P),
						sliderHoverColor: v(S, h.$5P),
					};
				}
				function v(S, I) {
					const T = S.getColor(I);
					return T ? T.toString() : void 0;
				}
				(0, u.$lK)(p.$7Xb, l, u.InstantiationType.Delayed);
			},
		),
		define(
			de[3574],
			he([
				1, 0, 7, 203, 461, 50, 6, 3, 195, 92, 11, 10, 49, 5, 39, 238, 70, 1855,
				801, 18, 708, 15, 173, 72,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$k4b = e.RenderLabel = void 0),
					(e.$j4b = S),
					(e.$l4b = N),
					(e.$m4b = A),
					(t = mt(t));
				var v;
				(function (O) {
					(O[(O.Always = 0)] = "Always"),
						(O[(O.Never = 1)] = "Never"),
						(O[(O.Dynamic = 2)] = "Dynamic");
				})(v || (e.RenderLabel = v = {}));
				function S(O) {
					switch (O) {
						case !0:
							return v.Always;
						case !1:
							return v.Never;
						case "always":
							return v.Always;
						case "never":
							return v.Never;
						case "dynamic":
							return v.Dynamic;
					}
				}
				const I = 21,
					T = 21,
					P = 8;
				class k {
					constructor(B, U, z, F) {
						(this.notebookEditor = B),
							(this.editorToolbar = U),
							(this.goToMenu = z),
							(this.instantiationService = F);
					}
					actionProvider(B, U) {
						if (B.id === g.$o5b)
							return this.instantiationService.createInstance(
								o.$c4b,
								B,
								this.notebookEditor,
								U,
							);
						if (B instanceof u.$2X)
							return this.instantiationService.createInstance(f.$N3b, B, {
								hoverDelegate: U.hoverDelegate,
							});
						if (
							B instanceof u.$1X &&
							B.item.submenu.id === u.$XX.NotebookCellExecuteGoTo.id
						)
							return this.instantiationService.createInstance(
								f.$O3b,
								B,
								{ hoverDelegate: U.hoverDelegate },
								!0,
								{
									getActions: () =>
										this.goToMenu
											.getActions()
											.find(([z]) => z === "navigation/execute")?.[1] ?? [],
								},
								this.actionProvider.bind(this),
							);
					}
					calculateActions(B) {
						const U = this.editorToolbar.primaryActions,
							z = this.editorToolbar.secondaryActions,
							F = N(U, z, B);
						return {
							primaryActions: F.primaryActions.map((x) => x.action),
							secondaryActions: F.secondaryActions,
						};
					}
				}
				class L {
					constructor(B, U, z, F) {
						(this.notebookEditor = B),
							(this.editorToolbar = U),
							(this.goToMenu = z),
							(this.instantiationService = F);
					}
					actionProvider(B, U) {
						if (B.id === g.$o5b)
							return this.instantiationService.createInstance(
								o.$c4b,
								B,
								this.notebookEditor,
								U,
							);
						if (B instanceof u.$2X)
							return this.instantiationService.createInstance(r.$Lyb, B, {
								hoverDelegate: U.hoverDelegate,
							});
						if (B instanceof u.$1X)
							return B.item.submenu.id === u.$XX.NotebookCellExecuteGoTo.id
								? this.instantiationService.createInstance(
										f.$O3b,
										B,
										{ hoverDelegate: U.hoverDelegate },
										!1,
										{
											getActions: () =>
												this.goToMenu
													.getActions()
													.find(([z]) => z === "navigation/execute")?.[1] ?? [],
										},
										this.actionProvider.bind(this),
									)
								: this.instantiationService.createInstance(r.$Nyb, B, {
										hoverDelegate: U.hoverDelegate,
									});
					}
					calculateActions(B) {
						const U = this.editorToolbar.primaryActions,
							z = this.editorToolbar.secondaryActions,
							F = N(U, z, B);
						return {
							primaryActions: F.primaryActions.map((x) => x.action),
							secondaryActions: F.secondaryActions,
						};
					}
				}
				class D {
					constructor(B, U, z, F) {
						(this.notebookEditor = B),
							(this.editorToolbar = U),
							(this.goToMenu = z),
							(this.instantiationService = F);
					}
					actionProvider(B, U) {
						if (B.id === g.$o5b)
							return this.instantiationService.createInstance(
								o.$c4b,
								B,
								this.notebookEditor,
								U,
							);
						const z = this.editorToolbar.primaryActions.find(
							(F) => F.action.id === B.id,
						);
						return !z || z.renderLabel
							? B instanceof u.$2X
								? this.instantiationService.createInstance(f.$N3b, B, {
										hoverDelegate: U.hoverDelegate,
									})
								: B instanceof u.$1X &&
										B.item.submenu.id === u.$XX.NotebookCellExecuteGoTo.id
									? this.instantiationService.createInstance(
											f.$O3b,
											B,
											{ hoverDelegate: U.hoverDelegate },
											!0,
											{
												getActions: () =>
													this.goToMenu
														.getActions()
														.find(([F]) => F === "navigation/execute")?.[1] ??
													[],
											},
											this.actionProvider.bind(this),
										)
									: void 0
							: (B instanceof u.$2X &&
									this.instantiationService.createInstance(r.$Lyb, B, {
										hoverDelegate: U.hoverDelegate,
									}),
								B instanceof u.$1X
									? B.item.submenu.id === u.$XX.NotebookCellExecuteGoTo.id
										? this.instantiationService.createInstance(
												f.$O3b,
												B,
												{ hoverDelegate: U.hoverDelegate },
												!1,
												{
													getActions: () =>
														this.goToMenu
															.getActions()
															.find(([F]) => F === "navigation/execute")?.[1] ??
														[],
												},
												this.actionProvider.bind(this),
											)
										: this.instantiationService.createInstance(r.$Nyb, B, {
												hoverDelegate: U.hoverDelegate,
											})
									: void 0);
					}
					calculateActions(B) {
						const U = this.editorToolbar.primaryActions,
							z = this.editorToolbar.secondaryActions,
							F = A(U, z, B);
						return {
							primaryActions: F.primaryActions.map((x) => x.action),
							secondaryActions: F.secondaryActions,
						};
					}
				}
				let M = class extends d.$1c {
					get primaryActions() {
						return this.n;
					}
					get secondaryActions() {
						return this.q;
					}
					set visible(B) {
						this.w !== B && ((this.w = B), this.y.fire(B));
					}
					get useGlobalToolbar() {
						return this.s;
					}
					constructor(B, U, z, F, x, H, q, V, G, K, J) {
						super(),
							(this.notebookEditor = B),
							(this.contextKeyService = U),
							(this.notebookOptions = z),
							(this.domNode = F),
							(this.F = x),
							(this.G = H),
							(this.H = q),
							(this.I = V),
							(this.J = G),
							(this.L = K),
							(this.M = J),
							(this.s = !1),
							(this.u = v.Always),
							(this.w = !1),
							(this.y = this.D(new C.$re())),
							(this.onDidChangeVisibility = this.y.event),
							(this.z = null),
							(this.n = []),
							(this.q = []),
							this.N(),
							this.D(
								C.Event.debounce(
									this.J.onDidActiveEditorChange,
									(W, X) => W,
									200,
								)(this.O, this),
							),
							this.P();
					}
					N() {
						(this.f = document.createElement("div")),
							this.f.classList.add("notebook-toolbar-left"),
							(this.c = new i.$8hb(this.f, {
								vertical: m.ScrollbarVisibility.Hidden,
								horizontal: m.ScrollbarVisibility.Visible,
								horizontalScrollbarSize: 3,
								useShadows: !1,
								scrollYToX: !0,
							})),
							this.D(this.c),
							t.$fhb(this.domNode, this.c.getDomNode()),
							(this.g = document.createElement("div")),
							this.g.classList.add("notebook-toolbar-right"),
							t.$fhb(this.domNode, this.g);
					}
					O() {
						if (
							this.J.activeEditorPane?.getId() === p.$O6 &&
							this.J.activeEditorPane.getControl() === this.notebookEditor
						) {
							this.S();
							return;
						}
					}
					P() {
						(this.h = this.D(
							this.I.createMenu(
								this.notebookEditor.creationOptions.menuIds.notebookToolbar,
								this.contextKeyService,
							),
						)),
							(this.j = this.D(
								this.I.createMenu(
									u.$XX.NotebookCellExecuteGoTo,
									this.contextKeyService,
								),
							)),
							(this.s = this.notebookOptions.getDisplayOptions().globalToolbar),
							(this.u = this.R(this.G.getValue(p.$56.globalToolbarShowLabel))),
							this.Q();
						const B = {
								ui: !0,
								notebookEditor: this.notebookEditor,
								source: "notebookToolbar",
							},
							U = (q, V) => {
								if (q.id === g.$o5b)
									return this.F.createInstance(
										o.$c4b,
										q,
										this.notebookEditor,
										V,
									);
								if (this.u !== v.Never) {
									const G = this.n.find((K) => K.action.id === q.id);
									return G && G.renderLabel
										? q instanceof u.$2X
											? this.F.createInstance(f.$N3b, q, {
													hoverDelegate: V.hoverDelegate,
												})
											: void 0
										: q instanceof u.$2X
											? this.F.createInstance(r.$Lyb, q, {
													hoverDelegate: V.hoverDelegate,
												})
											: void 0;
								} else
									return q instanceof u.$2X
										? this.F.createInstance(r.$Lyb, q, {
												hoverDelegate: V.hoverDelegate,
											})
										: void 0;
							},
							z = this.D(this.F.createInstance($.$Vyb, "element", !0, {}));
						z.setInstantHoverTimeLimit(600);
						const F = {
							hiddenItemStrategy: y.HiddenItemStrategy.RenderInSecondaryGroup,
							resetMenu: u.$XX.NotebookToolbar,
							actionViewItemProvider: (q, V) => this.t.actionProvider(q, V),
							getKeyBinding: (q) => this.L.lookupKeybinding(q.id),
							renderDropdownAsChildElement: !0,
							hoverDelegate: z,
						};
						(this.m = this.F.createInstance(y.$Syb, this.f, F)),
							this.D(this.m),
							(this.m.context = B),
							(this.r = new w.$jpb(this.g, this.H, {
								getKeyBinding: (q) => this.L.lookupKeybinding(q.id),
								actionViewItemProvider: U,
								renderDropdownAsChildElement: !0,
								hoverDelegate: z,
							})),
							this.D(this.r),
							(this.r.context = B),
							this.S();
						let x = !1,
							H;
						this.D(
							this.h.onDidChange(() => {
								if (x) {
									H = () => this.S();
									return;
								}
								this.notebookEditor.isVisible && this.S();
							}),
						),
							this.D(
								this.m.onDidChangeDropdownVisibility((q) => {
									(x = q),
										H &&
											!q &&
											(setTimeout(() => {
												H?.();
											}, 0),
											(H = void 0));
								}),
							),
							this.D(
								this.notebookOptions.onDidChangeOptions((q) => {
									q.globalToolbar !== void 0 &&
										((this.s =
											this.notebookOptions.getDisplayOptions().globalToolbar),
										this.S());
								}),
							),
							this.D(
								this.G.onDidChangeConfiguration((q) => {
									if (q.affectsConfiguration(p.$56.globalToolbarShowLabel)) {
										(this.u = this.R(
											this.G.getValue(p.$56.globalToolbarShowLabel),
										)),
											this.Q(),
											this.m.getElement().remove(),
											this.m.dispose(),
											(this.m = this.F.createInstance(y.$Syb, this.f, F)),
											this.D(this.m),
											(this.m.context = B),
											this.S();
										return;
									}
								}),
							),
							this.M &&
								this.M.getTreatment("nbtoolbarineditor").then((q) => {
									q !== void 0 && this.s !== q && ((this.s = q), this.S());
								});
					}
					Q() {
						switch (this.u) {
							case v.Always:
								this.t = new k(this.notebookEditor, this, this.j, this.F);
								break;
							case v.Never:
								this.t = new L(this.notebookEditor, this, this.j, this.F);
								break;
							case v.Dynamic:
								this.t = new D(this.notebookEditor, this, this.j, this.F);
								break;
						}
					}
					R(B) {
						switch (B) {
							case !0:
								return v.Always;
							case !1:
								return v.Never;
							case "always":
								return v.Always;
							case "never":
								return v.Never;
							case "dynamic":
								return v.Dynamic;
						}
					}
					S() {
						if (!this.notebookEditor.hasModel()) {
							this.C?.dispose(), (this.C = void 0), (this.visible = !1);
							return;
						}
						this.C ||
							(this.s
								? (this.C = (0, l.$Oh)(async () => {
										await this.U(), (this.visible = !0), (this.C = void 0);
									}, 50))
								: ((this.domNode.style.display = "none"),
									(this.C = void 0),
									(this.visible = !1)));
					}
					async U() {
						const B = this.h.getActions({
							shouldForwardArgs: !0,
							renderShortTitle: !0,
						});
						this.domNode.style.display = "flex";
						const U = B.filter((q) => /^navigation/.test(q[0])),
							z = [];
						U.sort((q, V) =>
							q[0] === "navigation" ? 1 : V[0] === "navigation" ? -1 : 0,
						).forEach((q, V) => {
							z.push(...q[1]), V < U.length - 1 && z.push(new E.$tj());
						});
						const F = B.find((q) => /^status/.test(q[0])),
							x = F ? F[1] : [],
							H = B.filter(
								(q) => !/^navigation/.test(q[0]) && !/^status/.test(q[0]),
							).reduce((q, V) => (q.push(...V[1]), q), []);
						this.m.setActions([], []),
							(this.n = z.map((q) => ({
								action: q,
								size: q instanceof E.$tj ? 1 : 0,
								renderLabel: !0,
								visible: !0,
							}))),
							this.m.setActions(z, H),
							(this.q = H),
							this.r.setActions(x, []),
							(this.q = H),
							this.z &&
								this.z.width >= 0 &&
								this.z.height >= 0 &&
								this.W(this.m),
							this.X();
					}
					W(B) {
						for (let U = 0; U < B.getItemsLength(); U++) {
							const z = B.getItemAction(U);
							if (z && z.id !== "toolbar.toggle.more") {
								const F = this.n.find((x) => x.action.id === z.id);
								F && (F.size = B.getItemWidth(U));
							}
						}
					}
					X() {
						const B = this.m,
							U = this.r;
						if (B && U && this.z && this.z.height >= 0 && this.z.width >= 0) {
							if (
								(this.n.length === 0 &&
									B.getItemsLength() !== this.n.length &&
									this.W(this.m),
								this.n.length === 0)
							)
								return;
							const z = (U.getItemsLength() ? U.getItemWidth(0) : 0) + P,
								F = this.z.width - z - (P + T) - P - P,
								x = this.t.calculateActions(F);
							this.m.setActions(x.primaryActions, x.secondaryActions);
						}
					}
					layout(B) {
						(this.z = B),
							this.s
								? (this.domNode.style.display = "flex")
								: (this.domNode.style.display = "none"),
							this.X();
					}
					dispose() {
						(this.m.context = void 0),
							(this.r.context = void 0),
							this.m.dispose(),
							this.r.dispose(),
							(this.m = null),
							(this.r = null),
							this.C?.dispose(),
							(this.C = void 0),
							super.dispose();
					}
				};
				(e.$k4b = M),
					(e.$k4b = M =
						Ne(
							[
								j(4, c.$Li),
								j(5, a.$gj),
								j(6, h.$Xxb),
								j(7, u.$YX),
								j(8, b.$IY),
								j(9, n.$uZ),
								j(10, s.$h4b),
							],
							M,
						));
				function N(O, B, U) {
					return R(O, B, U, !1);
				}
				function A(O, B, U) {
					if (O.length === 0)
						return { primaryActions: [], secondaryActions: B };
					const z = O.filter((q) => q.size !== 0).length;
					if (
						O.map((q) => q.size).reduce((q, V) => q + V, 0) + (z - 1) * P <=
						U
					)
						return (
							O.forEach((q) => {
								q.renderLabel = !0;
							}),
							R(O, B, U, !1)
						);
					if (z * I + (z - 1) * P > U)
						return (
							O.forEach((q) => {
								q.renderLabel = !1;
							}),
							R(O, B, U, !0)
						);
					let x = 0,
						H = -1;
					for (let q = 0; q < O.length; q++)
						if (((x += O[q].size + P), O[q].action instanceof E.$tj)) {
							const V = O.slice(q + 1).filter((K) => K.size !== 0);
							x + (V.length === 0 ? 0 : V.length * I + (V.length - 1) * P) <=
								U && (H = q);
						} else continue;
					return H < 0
						? (O.forEach((q) => {
								q.renderLabel = !1;
							}),
							R(O, B, U, !0))
						: (O.slice(0, H + 1).forEach((q) => {
								q.renderLabel = !0;
							}),
							O.slice(H + 1).forEach((q) => {
								q.renderLabel = !1;
							}),
							{ primaryActions: O, secondaryActions: B });
				}
				function R(O, B, U, z) {
					const F = [],
						x = [];
					let H = 0,
						q = !1,
						V = !1;
					if (O.length === 0)
						return { primaryActions: [], secondaryActions: B };
					for (let G = 0; G < O.length; G++) {
						const K = O[G],
							J = z ? (K.size === 0 ? 0 : I) : K.size;
						if (
							!(
								K.action instanceof E.$tj &&
								F.length > 0 &&
								F[F.length - 1].action instanceof E.$tj
							) &&
							!(K.action instanceof E.$tj && !q)
						)
							if (H + J <= U && !V)
								(H += P + J),
									F.push(K),
									J !== 0 && (q = !0),
									K.action instanceof E.$tj && (q = !1);
							else if (((V = !0), J === 0)) F.push(K);
							else {
								if (K.action instanceof E.$tj) continue;
								x.push(K.action);
							}
					}
					for (let G = F.length - 1; G > 0; G--) {
						const K = F[G];
						if (K.size !== 0) {
							K.action instanceof E.$tj && F.splice(G, 1);
							break;
						}
					}
					if (
						(F.length && F[F.length - 1].action instanceof E.$tj && F.pop(),
						x.length !== 0 && x.push(new E.$tj()),
						z)
					) {
						const G = F.findIndex(
							(K) => K.action.id === "notebook.cell.insertMarkdownCellBelow",
						);
						G !== -1 && F.splice(G, 1);
					}
					return { primaryActions: F, secondaryActions: [...x, ...B] };
				}
			},
		),
		define(
			de[231],
			he([1, 0, 215, 23, 54, 19, 4, 224, 81, 5, 30]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ResolvedStatus =
						e.RegisteredEditorPriority =
						e.$F6 =
						e.$E6 =
							void 0),
					(e.$G6 = g),
					(e.$H6 = p),
					(t = mt(t)),
					(e.$E6 = (0, r.$Mi)("editorResolverService")),
					(e.$F6 = "workbench.editorAssociations");
				const a = u.$Io.as(m.$No.Configuration),
					h = {
						...d.$v6,
						properties: {
							"workbench.editorAssociations": {
								type: "object",
								markdownDescription: (0, C.localize)(12248, null),
								additionalProperties: { type: "string" },
							},
						},
					};
				a.registerConfiguration(h);
				var c;
				(function (o) {
					(o.builtin = "builtin"),
						(o.option = "option"),
						(o.exclusive = "exclusive"),
						(o.default = "default");
				})(c || (e.RegisteredEditorPriority = c = {}));
				var n;
				(function (o) {
					(o[(o.ABORT = 1)] = "ABORT"), (o[(o.NONE = 2)] = "NONE");
				})(n || (e.ResolvedStatus = n = {}));
				function g(o) {
					switch (o) {
						case c.exclusive:
							return 5;
						case c.default:
							return 4;
						case c.builtin:
							return 3;
						case c.option:
						default:
							return 1;
					}
				}
				function p(o, f) {
					if (
						new Set([
							i.Schemas.extension,
							i.Schemas.webviewPanel,
							i.Schemas.vscodeWorkspaceTrust,
							i.Schemas.walkThrough,
							i.Schemas.vscodeSettings,
							i.Schemas.aiSettings,
							i.Schemas.aiChat,
						]).has(f.scheme)
					)
						return !1;
					const l =
						typeof o == "string" && o.indexOf(w.$lc.sep) >= 0
							? `${f.scheme}:${f.path}`
							: (0, E.$kh)(f);
					return t.$Ik(
						typeof o == "string" ? o.toLowerCase() : o,
						l.toLowerCase(),
					);
				}
			},
		),
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
		define(
			de[625],
			he([1, 0, 24, 4, 8, 5, 231]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nnc =
						e.$mnc =
						e.CustomEditorPriority =
						e.$lnc =
						e.$knc =
						e.$jnc =
							void 0),
					(i = mt(i)),
					(e.$jnc = (0, E.$Mi)("customEditorService")),
					(e.$knc = new w.$5j("activeCustomEditorId", "", {
						type: "string",
						description: i.localize(5126, null),
					})),
					(e.$lnc = new w.$5j("focusedCustomEditorIsEditable", !1));
				var d;
				(function (a) {
					(a.default = "default"),
						(a.builtin = "builtin"),
						(a.option = "option");
				})(d || (e.CustomEditorPriority = d = {}));
				class m {
					constructor(h) {
						(this.id = h.id),
							(this.displayName = h.displayName),
							(this.providerDisplayName = h.providerDisplayName),
							(this.priority = h.priority),
							(this.selector = h.selector);
					}
					matches(h) {
						return this.selector.some(
							(c) => c.filenamePattern && (0, C.$H6)(c.filenamePattern, h),
						);
					}
				}
				e.$mnc = m;
				class r {
					constructor(h) {
						this.allEditors = (0, t.$Qb)(h, (c) => c.id);
					}
					get length() {
						return this.allEditors.length;
					}
					get defaultEditor() {
						return this.allEditors.find((h) => {
							switch (h.priority) {
								case C.RegisteredEditorPriority.default:
								case C.RegisteredEditorPriority.builtin:
									return this.allEditors.every((c) => c === h || u(c, h));
								default:
									return !1;
							}
						});
					}
					get bestAvailableEditor() {
						return Array.from(this.allEditors).sort(
							(c, n) => (0, C.$G6)(c.priority) - (0, C.$G6)(n.priority),
						)[0];
					}
				}
				e.$nnc = r;
				function u(a, h) {
					return (0, C.$G6)(a.priority) < (0, C.$G6)(h.priority);
				}
			},
		),
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
		define(
			de[3577],
			he([1, 0, 6, 3, 4, 21, 282, 625, 3576, 231]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$BSc = void 0),
					(w = mt(w));
				class u extends i.$1c {
					static {
						this.a = "customEditors";
					}
					static {
						this.b = "editors";
					}
					constructor(c) {
						super(),
							(this.c = new Map()),
							(this.g = this.D(new t.$re())),
							(this.onChange = this.g.event),
							(this.f = new C.$eEb(u.a, c));
						const n = this.f.getMemento(
							E.StorageScope.PROFILE,
							E.StorageTarget.MACHINE,
						);
						for (const g of n[u.b] || []) this.j(new d.$mnc(g));
						m.$ASc.setHandler((g) => {
							this.h(g);
						});
					}
					h(c) {
						this.c.clear();
						for (const g of c)
							for (const p of g.value)
								this.j(
									new d.$mnc({
										id: p.viewType,
										displayName: p.displayName,
										providerDisplayName: g.description.isBuiltin
											? w.localize(5125, null)
											: g.description.displayName ||
												g.description.identifier.value,
										selector: p.selector || [],
										priority: a(p, g.description),
									}),
								);
						const n = this.f.getMemento(
							E.StorageScope.PROFILE,
							E.StorageTarget.MACHINE,
						);
						(n[u.b] = Array.from(this.c.values())),
							this.f.saveMemento(),
							this.g.fire();
					}
					[Symbol.iterator]() {
						return this.c.values();
					}
					get(c) {
						return this.c.get(c);
					}
					getContributedEditors(c) {
						return Array.from(this.c.values()).filter((n) => n.matches(c));
					}
					j(c) {
						if (this.c.has(c.id)) {
							console.error(
								`Custom editor with id '${c.id}' already registered`,
							);
							return;
						}
						this.c.set(c.id, c);
					}
				}
				e.$BSc = u;
				function a(h, c) {
					switch (h.priority) {
						case r.RegisteredEditorPriority.default:
						case r.RegisteredEditorPriority.option:
							return h.priority;
						case r.RegisteredEditorPriority.builtin:
							return c.isBuiltin
								? r.RegisteredEditorPriority.builtin
								: r.RegisteredEditorPriority.default;
						default:
							return r.RegisteredEditorPriority.default;
					}
				}
			},
		),
		define(
			de[3578],
			he([
				1, 0, 215, 24, 3, 19, 9, 10, 116, 44, 66, 23, 231, 63, 4, 40, 32, 20,
				21, 53, 34, 1291, 5, 313, 6,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
			) {
				"use strict";
				var S;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Avc = void 0),
					(t = mt(t));
				let I = class extends w.$1c {
					static {
						S = this;
					}
					static {
						this.g = "promptOpenWith.configureDefault";
					}
					static {
						this.h = "editorOverrideService.cache";
					}
					static {
						this.j = "editorOverrideService.conflictingDefaults";
					}
					constructor(P, k, L, D, M, N, A, R, O) {
						super(),
							(this.s = P),
							(this.t = k),
							(this.u = L),
							(this.w = D),
							(this.y = M),
							(this.z = N),
							(this.C = A),
							(this.F = R),
							(this.G = O),
							(this.f = this.D(new v.$ue())),
							(this.onDidChangeEditorRegistrations = this.f.event),
							(this.m = new Map()),
							(this.n = new Map()),
							(this.q = !0),
							(this.r = new Set(
								JSON.parse(
									this.C.get(S.h, f.StorageScope.PROFILE, JSON.stringify([])),
								),
							)),
							this.C.remove(S.h, f.StorageScope.PROFILE),
							this.D(
								this.C.onWillSaveState(() => {
									this.X();
								}),
							),
							this.D(
								this.F.onDidRegisterExtensions(() => {
									this.r = void 0;
								}),
							);
					}
					H(P, k) {
						const L = P,
							D = this.t.invokeFunction(l.$ydc, L, k);
						if (D instanceof Promise) return D.then(([M, N]) => [L, M, N]);
						{
							const [M, N] = D;
							return [L, M, N];
						}
					}
					async resolveEditor(P, k) {
						if (((this.n = this.J()), (0, r.$m1)(P))) return this.I(P, k);
						let L;
						const D = this.H(P, k);
						if ((D instanceof Promise ? (L = await D) : (L = D), !L))
							return h.ResolvedStatus.NONE;
						const [M, N, A] = L;
						A && (M.options = { ...M.options, activation: A });
						let R = r.$A1.getCanonicalUri(M, {
							supportSideBySide: r.SideBySideEditor.PRIMARY,
						});
						if (
							(this.r &&
								R &&
								this.Y(R) &&
								(await this.F.whenInstalledExtensionsRegistered()),
							R === void 0)
						)
							R = C.URI.from({ scheme: a.Schemas.untitled });
						else if (R.scheme === void 0 || R === null)
							return h.ResolvedStatus.NONE;
						if (M.options?.override === m.EditorResolution.PICK) {
							const z = await this.U(M);
							if (!z) return h.ResolvedStatus.ABORT;
							M.options = z;
						}
						let { editor: O, conflictingDefault: B } = this.N(
							R,
							M.options?.override,
						);
						if (!O && (M.options?.override || (0, r.$v1)(P)))
							return h.ResolvedStatus.NONE;
						if (!O) {
							const z = this.N(R, r.$b1.id);
							if (((O = z?.editor), (B = z?.conflictingDefault), !O))
								return h.ResolvedStatus.NONE;
						}
						if ((0, r.$j1)(M) && M.options?.override === void 0) {
							let z = r.$A1.getCanonicalUri(M, {
								supportSideBySide: r.SideBySideEditor.SECONDARY,
							});
							z || (z = C.URI.from({ scheme: a.Schemas.untitled }));
							const { editor: F } = this.N(z, void 0);
							if (!F || O.editorInfo.id !== F.editorInfo.id) {
								const { editor: x, conflictingDefault: H } = this.N(
									R,
									r.$b1.id,
								);
								(O = x), (B = H);
							}
							if (!O) return h.ResolvedStatus.NONE;
						}
						if (
							((M.options = { override: O.editorInfo.id, ...M.options }),
							O.editorFactoryObject.createDiffEditorInput === void 0 &&
								(0, r.$j1)(M))
						)
							return h.ResolvedStatus.NONE;
						const U = await this.O(M, N, O);
						return (
							B && U && (await this.R(R, O.editorInfo.label, M, U.editor, N)),
							U
								? (this.W(U.editor),
									U.editor.editorId !== O.editorInfo.id &&
										this.G.warn(
											`Editor ID Mismatch: ${U.editor.editorId} !== ${O.editorInfo.id}. This will cause bugs. Please ensure editorInput.editorId matches the registered id`,
										),
									{ ...U, group: N })
								: h.ResolvedStatus.ABORT
						);
					}
					async I(P, k) {
						const L = await this.resolveEditor(P.primary, k);
						if (!(0, r.$w1)(L)) return h.ResolvedStatus.NONE;
						const D = await this.resolveEditor(P.secondary, L.group ?? k);
						return (0, r.$w1)(D)
							? {
									group: L.group ?? D.group,
									editor: this.t.createInstance(
										$.$iY,
										P.label,
										P.description,
										D.editor,
										L.editor,
									),
									options: P.options,
								}
							: h.ResolvedStatus.NONE;
					}
					bufferChangeEvents(P) {
						this.f.pause();
						try {
							P();
						} finally {
							this.f.resume();
						}
					}
					registerEditor(P, k, L, D) {
						let M = this.m.get(P);
						M === void 0 && ((M = new Map()), this.m.set(P, M));
						let N = M.get(k.id);
						N === void 0 && (N = []);
						const A = (0, i.$Xb)(N, {
							globPattern: P,
							editorInfo: k,
							options: L,
							editorFactoryObject: D,
						});
						return (
							M.set(k.id, N),
							(this.q = !0),
							this.f.fire(),
							(0, w.$Yc)(() => {
								A(),
									N && N.length === 0 && M?.delete(k.id),
									(this.q = !0),
									this.f.fire();
							})
						);
					}
					getAssociationsForResource(P) {
						let L = this.getAllUserAssociations().filter(
							(M) => M.filenamePattern && (0, h.$H6)(M.filenamePattern, P),
						);
						L = L.sort(
							(M, N) =>
								(N.filenamePattern?.length ?? 0) -
								(M.filenamePattern?.length ?? 0),
						);
						const D = this.L;
						return L.filter((M) =>
							D.find((N) => N.editorInfo.id === M.viewType),
						);
					}
					getAllUserAssociations() {
						const P = this.u.inspect(h.$F6) || {},
							k = P.defaultValue ?? {},
							L = P.workspaceValue ?? {},
							D = P.userValue ?? {},
							M = { ...L };
						for (const [A, R] of Object.entries({ ...k, ...D }))
							M[A] === void 0 && (M[A] = R);
						const N = [];
						for (const [A, R] of Object.entries(M)) {
							const O = { filenamePattern: A, viewType: R };
							N.push(O);
						}
						return N;
					}
					J() {
						if (!this.q) return this.n;
						this.q = !1;
						const P = new Map();
						for (const [k, L] of this.m) {
							const D = [];
							for (const M of L.values()) {
								let N;
								for (const A of M)
									N ||
										(N = {
											editorInfo: A.editorInfo,
											globPattern: A.globPattern,
											options: {},
											editorFactoryObject: {},
										}),
										(N.options = { ...N.options, ...A.options }),
										(N.editorFactoryObject = {
											...N.editorFactoryObject,
											...A.editorFactoryObject,
										});
								N && D.push(N);
							}
							P.set(k, D);
						}
						return P;
					}
					get L() {
						return Array.from(this.n.values()).flat();
					}
					updateUserAssociations(P, k) {
						const L = { viewType: k, filenamePattern: P },
							D = this.getAllUserAssociations(),
							M = Object.create(null);
						for (const N of [...D, L])
							N.filenamePattern && (M[N.filenamePattern] = N.viewType);
						this.u.updateValue(h.$F6, M);
					}
					M(P) {
						const k = this.getAssociationsForResource(P),
							L = [];
						for (const [D, M] of this.n)
							for (const N of M)
								((k.find((R) => R.viewType === N.editorInfo.id) &&
									N.editorInfo.priority !==
										h.RegisteredEditorPriority.exclusive) ||
									(0, h.$H6)(D, P)) &&
									L.push(N);
						return L.sort((D, M) =>
							(0, h.$G6)(M.editorInfo.priority) ===
								(0, h.$G6)(D.editorInfo.priority) &&
							typeof M.globPattern == "string" &&
							typeof D.globPattern == "string"
								? M.globPattern.length - D.globPattern.length
								: (0, h.$G6)(M.editorInfo.priority) -
									(0, h.$G6)(D.editorInfo.priority),
						);
					}
					getEditors(P) {
						if (((this.n = this.J()), C.URI.isUri(P))) {
							const k = this.M(P);
							return k.find(
								(L) =>
									L.editorInfo.priority ===
									h.RegisteredEditorPriority.exclusive,
							)
								? []
								: k.map((L) => L.editorInfo);
						}
						return (0, i.$Qb)(
							this.L.map((k) => k.editorInfo),
							(k) => k.id,
						);
					}
					N(P, k) {
						const L = (B, U) =>
							B.find((z) =>
								z.options && z.options.canSupportResource !== void 0
									? z.editorInfo.id === U && z.options.canSupportResource(P)
									: z.editorInfo.id === U,
							);
						if (k && k !== m.EditorResolution.EXCLUSIVE_ONLY) {
							const B = this.L;
							return { editor: L(B, k), conflictingDefault: !1 };
						}
						const D = this.M(P),
							M = this.getAssociationsForResource(P),
							N =
								k === m.EditorResolution.EXCLUSIVE_ONLY
									? h.RegisteredEditorPriority.exclusive
									: h.RegisteredEditorPriority.builtin;
						let A = D.filter(
							(B) =>
								(0, h.$G6)(B.editorInfo.priority) >= (0, h.$G6)(N) &&
								B.editorInfo.id !== r.$b1.id,
						);
						if (A.length === 0)
							return {
								editor:
									M[0] && N !== h.RegisteredEditorPriority.exclusive
										? L(D, M[0].viewType)
										: void 0,
								conflictingDefault: !1,
							};
						const R =
							A[0].editorInfo.priority === h.RegisteredEditorPriority.exclusive
								? A[0].editorInfo.id
								: M[0]?.viewType || A[0].editorInfo.id;
						let O = !1;
						return (
							(A = A.filter(
								(B) =>
									B.editorInfo.priority !==
									h.RegisteredEditorPriority.exclusive,
							)),
							M.length === 0 && A.length > 1 && (O = !0),
							{ editor: L(D, R), conflictingDefault: O }
						);
					}
					async O(P, k, L) {
						let D = P.options;
						const M = r.$A1.getCanonicalUri(P, {
							supportSideBySide: r.SideBySideEditor.PRIMARY,
						});
						if (
							(D &&
								typeof D.activation > "u" &&
								(D = {
									...D,
									activation: D.preserveFocus
										? m.EditorActivation.RESTORE
										: void 0,
								}),
							(0, r.$o1)(P))
						) {
							if (!L.editorFactoryObject.createMergeEditorInput) return;
							const O = await L.editorFactoryObject.createMergeEditorInput(
								P,
								k,
							);
							return { editor: O.editor, options: O.options ?? D };
						}
						if ((0, r.$j1)(P)) {
							if (!L.editorFactoryObject.createDiffEditorInput) return;
							const O = await L.editorFactoryObject.createDiffEditorInput(P, k);
							return { editor: O.editor, options: O.options ?? D };
						}
						if ((0, r.$l1)(P)) {
							if (!L.editorFactoryObject.createInlineMultiDiffEditorInput)
								return;
							const O =
								await L.editorFactoryObject.createInlineMultiDiffEditorInput(
									P,
									k,
								);
							return { editor: O.editor, options: O.options ?? D };
						}
						if ((0, r.$k1)(P)) {
							if (!L.editorFactoryObject.createMultiDiffEditorInput) return;
							const O = await L.editorFactoryObject.createMultiDiffEditorInput(
								P,
								k,
							);
							return { editor: O.editor, options: O.options ?? D };
						}
						if ((0, r.$m1)(P))
							throw new Error(
								"Untyped side by side editor input not supported here.",
							);
						if ((0, r.$n1)(P)) {
							if (!L.editorFactoryObject.createUntitledEditorInput) return;
							const O = await L.editorFactoryObject.createUntitledEditorInput(
								P,
								k,
							);
							return { editor: O.editor, options: O.options ?? D };
						}
						if (M === void 0)
							throw new Error(
								"Undefined resource on non untitled editor input.",
							);
						if (
							typeof L.options?.singlePerResource == "function"
								? L.options.singlePerResource()
								: L.options?.singlePerResource
						) {
							const O = this.Q(M, L.editorInfo.id);
							if (O.length) {
								const B = await this.P(O, k);
								return B ? { editor: B, options: D } : void 0;
							}
						}
						if (!L.editorFactoryObject.createEditorInput) return;
						const A = await L.editorFactoryObject.createEditorInput(P, k);
						return (D = A.options ?? D), { editor: A.editor, options: D };
					}
					async P(P, k) {
						const L = P[0];
						for (const { editor: D, group: M } of P)
							if (D !== L.editor && !(await M.closeEditor(D))) return;
						if (!(k.id !== L.group.id && !L.group.moveEditor(L.editor, k)))
							return L.editor;
					}
					Q(P, k) {
						const L = [],
							D = (0, i.$Qb)([...this.s.groups]);
						for (const M of D)
							for (const N of M.editors)
								(0, E.$gh)(N.resource, P) &&
									N.editorId === k &&
									L.push({ editor: N, group: M });
						return L;
					}
					async R(P, k, L, D, M) {
						const N = this.M(P),
							A = JSON.parse(this.C.get(S.j, f.StorageScope.PROFILE, "{}")),
							R = `*${(0, E.$lh)(P)}`,
							O = () => {
								(A[R] = []),
									N.forEach((z) => A[R].push(z.editorInfo.id)),
									this.C.store(
										S.j,
										JSON.stringify(A),
										f.StorageScope.PROFILE,
										f.StorageTarget.MACHINE,
									);
							};
						if (A[R] && A[R].find((z) => z === D.editorId)) return;
						const U = this.y
							.prompt(g.Severity.Warning, (0, n.localize)(12239, null), [
								{
									label: (0, n.localize)(12240, null),
									run: async () => {
										const z = await this.U(L, !0);
										if (!z) return;
										L.options = z;
										const F = await this.resolveEditor(L, M);
										F === h.ResolvedStatus.ABORT ||
											F === h.ResolvedStatus.NONE ||
											M.replaceEditors([
												{
													editor: D,
													replacement: F.editor,
													options: F.options ?? z,
												},
											]);
									},
								},
								{ label: (0, n.localize)(12241, null, k), run: O },
							])
							.onDidClose(() => {
								O(), U.dispose();
							});
					}
					S(P, k) {
						const L = (0, i.$Sb)(this.s.activeGroup.findEditors(P));
						let D =
							P.scheme === a.Schemas.untitled
								? this.L.filter(
										(U) =>
											U.editorInfo.priority !==
											h.RegisteredEditorPriority.exclusive,
									)
								: this.M(P);
						D = (0, i.$Qb)(D, (U) => U.editorInfo.id);
						const M = this.getAssociationsForResource(P)[0]?.viewType;
						D = D.sort((U, z) =>
							U.editorInfo.id === r.$b1.id
								? -1
								: z.editorInfo.id === r.$b1.id
									? 1
									: (0, h.$G6)(z.editorInfo.priority) -
										(0, h.$G6)(U.editorInfo.priority),
						);
						const N = [],
							A = (0, n.localize)(12242, null),
							R = (0, n.localize)(12243, null),
							O = (0, n.localize)(12244, null);
						let B = M;
						if (
							(!B &&
								D.length > 2 &&
								D[1]?.editorInfo.priority !==
									h.RegisteredEditorPriority.option &&
								(B = D[1]?.editorInfo.id),
							B || (B = r.$b1.id),
							D.forEach((U) => {
								const z = L?.editorId ?? r.$b1.id,
									F = L ? U.editorInfo.id === z : !1,
									x = U.editorInfo.id === B,
									H = {
										id: U.editorInfo.id,
										label: U.editorInfo.label,
										description: F && x ? O : F ? A : x ? R : void 0,
										detail: U.editorInfo.detail ?? U.editorInfo.priority,
									};
								N.push(H);
							}),
							!k && (0, E.$lh)(P) !== "")
						) {
							const U = { type: "separator" };
							N.push(U);
							const z = {
								id: S.g,
								label: (0, n.localize)(12245, null, `*${(0, E.$lh)(P)}`),
							};
							N.push(z);
						}
						return N;
					}
					async U(P, k) {
						let L = r.$A1.getOriginalUri(P, {
							supportSideBySide: r.SideBySideEditor.PRIMARY,
						});
						L === void 0 && (L = C.URI.from({ scheme: a.Schemas.untitled }));
						const D = this.S(L, k),
							M = new w.$Zc(),
							N = M.add(this.w.createQuickPick({ useSeparators: !0 })),
							A = k
								? (0, n.localize)(12246, null, `*${(0, E.$lh)(L)}`)
								: (0, n.localize)(12247, null, (0, E.$kh)(L));
						(N.placeholder = A), (N.canAcceptInBackground = !0), (N.items = D);
						const R = N.items.find((B) => B.type === "item");
						R && (N.selectedItems = [R]);
						const O = await new Promise((B) => {
							M.add(
								N.onDidAccept((U) => {
									let z;
									N.selectedItems.length === 1 &&
										(z = {
											item: N.selectedItems[0],
											keyMods: N.keyMods,
											openInBackground: U.inBackground,
										}),
										L &&
											k &&
											z?.item.id &&
											this.updateUserAssociations(
												`*${(0, E.$lh)(L)}`,
												z.item.id,
											),
										B(z);
								}),
							),
								M.add(
									N.onDidHide(() => {
										M.dispose(), B(void 0);
									}),
								),
								M.add(
									N.onDidTriggerItemButton((U) => {
										B({ item: U.item, openInBackground: !1 }),
											L &&
												U.item &&
												U.item.id &&
												this.updateUserAssociations(
													`*${(0, E.$lh)(L)}`,
													U.item.id,
												);
									}),
								),
								N.show();
						});
						if ((N.dispose(), O))
							return O.item.id === S.g
								? this.U(P, !0)
								: {
										...P.options,
										override: O.item.id,
										preserveFocus:
											O.openInBackground || P.options?.preserveFocus,
									};
					}
					W(P) {
						P.editorId &&
							this.z.publicLog2("override.viewType", { viewType: P.editorId });
					}
					X() {
						const P = new Set();
						for (const [L, D] of this.n)
							D.find(
								(N) =>
									N.editorInfo.priority !== h.RegisteredEditorPriority.option &&
									N.editorInfo.id !== r.$b1.id,
							) && (t.$Kk(L) ? P.add(`${L.pattern}`) : P.add(L));
						const k = this.getAllUserAssociations();
						for (const L of k) L.filenamePattern && P.add(L.filenamePattern);
						this.C.store(
							S.h,
							JSON.stringify(Array.from(P)),
							f.StorageScope.PROFILE,
							f.StorageTarget.MACHINE,
						);
					}
					Y(P) {
						if (!this.r) return !1;
						for (const k of this.r) if ((0, h.$H6)(k, P)) return !0;
						return !1;
					}
				};
				(e.$Avc = I),
					(e.$Avc =
						I =
						S =
							Ne(
								[
									j(0, u.$EY),
									j(1, y.$Li),
									j(2, d.$gj),
									j(3, c.$DJ),
									j(4, g.$4N),
									j(5, p.$km),
									j(6, f.$lq),
									j(7, b.$q2),
									j(8, s.$ik),
								],
								I,
							)),
					(0, o.$lK)(h.$E6, I, o.InstantiationType.Eager);
			},
		),
		define(
			de[165],
			he([1, 0, 249, 23, 54, 12, 19, 9, 5, 349, 25, 78, 143]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				var c;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$J8 = e.$I8 = void 0),
					(e.$I8 = (0, m.$Mi)("pathService"));
				let n = (c = class {
					constructor(p, o, f, b) {
						(this.d = p),
							(this.e = o),
							(this.f = f),
							(this.g = b),
							(this.a = (async () =>
								(await this.e.getEnvironment())?.os || E.OS)()),
							(this.b = (async () => {
								const s = await this.e.getEnvironment();
								return (this.c = s?.userHome ?? p);
							})());
					}
					hasValidBasename(p, o, f) {
						return typeof o == "string" || typeof o > "u"
							? this.a.then((b) => this.h(p, b, o))
							: this.h(p, o, f);
					}
					h(p, o, f) {
						return p.scheme === i.Schemas.file ||
							p.scheme === i.Schemas.vscodeRemote
							? (0, t.$Jg)(f ?? (0, C.$kh)(p), o === E.OperatingSystem.Windows)
							: !0;
					}
					get defaultUriScheme() {
						return c.findDefaultUriScheme(this.f, this.g);
					}
					static findDefaultUriScheme(p, o) {
						if (p.remoteAuthority) return i.Schemas.vscodeRemote;
						const f = (0, r.$F8)(o.getWorkspace());
						if (f) return f;
						const b = o.getWorkspace().folders[0];
						if (b) return b.uri.scheme;
						const s = o.getWorkspace().configuration;
						return s ? s.scheme : i.Schemas.file;
					}
					userHome(p) {
						return p?.preferLocal ? this.d : this.b;
					}
					get resolvedUserHome() {
						return this.c;
					}
					get path() {
						return this.a.then((p) =>
							p === E.OperatingSystem.Windows ? w.$kc : w.$lc,
						);
					}
					async fileURI(p) {
						let o = "";
						if (
							((await this.a) === E.OperatingSystem.Windows &&
								(p = p.replace(/\\/g, "/")),
							p[0] === "/" && p[1] === "/")
						) {
							const b = p.indexOf("/", 2);
							b === -1
								? ((o = p.substring(2)), (p = "/"))
								: ((o = p.substring(2, b)), (p = p.substring(b) || "/"));
						}
						return d.URI.from({
							scheme: i.Schemas.file,
							authority: o,
							path: p,
							query: "",
							fragment: "",
						});
					}
				});
				(e.$J8 = n),
					(e.$J8 = n = c = Ne([j(1, h.$$m), j(2, a.$r8), j(3, u.$Vi)], n));
			},
		),
		define(
			de[709],
			he([
				1, 0, 7, 114, 95, 27, 23, 54, 12, 9, 4, 10, 22, 72, 41, 374, 18, 78,
				165,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$7Hc = e.DebugLinkHoverBehavior = void 0),
					(d = mt(d)),
					(m = mt(m));
				const b = "\\u0000-\\u0020\\u007f-\\u009f",
					s = new RegExp(
						"(?:[a-zA-Z][a-zA-Z0-9+.-]{2,}:\\/\\/|data:|www\\.)[^\\s" +
							b +
							'"]{2,}[^\\s' +
							b +
							`"')}\\],:;.!?]`,
						"ug",
					),
					l = /(?:[a-zA-Z]:(?:(?:\\|\/)[\w\.-]*)+)/,
					y = /(?:(?:\~|\.)(?:(?:\\|\/)[\w\.-]*)+)/,
					$ = new RegExp(`(${l.source}|${y.source})`),
					v = /((?:\~|\.)?(?:\/[\w\.-]*)+)/,
					S = /(?:\:([\d]+))?(?:\:([\d]+))?/,
					I = new RegExp(`${m.$l ? $.source : v.source}${S.source}`, "g"),
					T = /:([\d]+)(?::([\d]+))?$/,
					P = 2e3;
				var k;
				(function (D) {
					(D[(D.Rich = 0)] = "Rich"),
						(D[(D.Basic = 1)] = "Basic"),
						(D[(D.None = 2)] = "None");
				})(k || (e.DebugLinkHoverBehavior = k = {}));
				let L = class {
					constructor(M, N, A, R, O, B, U, z) {
						(this.a = M),
							(this.b = N),
							(this.c = A),
							(this.d = R),
							(this.f = O),
							(this.g = B),
							(this.h = U),
							(this.j = z);
					}
					linkify(M, N, A, R, O) {
						if (N) {
							const U = M.split(`
`);
							for (let x = 0; x < U.length - 1; x++)
								U[x] =
									U[x] +
									`
`;
							U[U.length - 1] || U.pop();
							const z = U.map((x) => this.linkify(x, !1, A, R));
							if (z.length === 1) return z[0];
							const F = document.createElement("span");
							return z.forEach((x) => F.appendChild(x)), F;
						}
						const B = document.createElement("span");
						for (const U of this.o(M))
							try {
								switch (U.kind) {
									case "text":
										B.appendChild(document.createTextNode(U.value));
										break;
									case "web":
										B.appendChild(this.k(R ? M : void 0, U.value, O));
										break;
									case "path": {
										const z = U.captures[0],
											F = U.captures[1] ? Number(U.captures[1]) : 0,
											x = U.captures[2] ? Number(U.captures[2]) : 0;
										B.appendChild(
											this.l(R ? M : void 0, U.value, z, F, x, A, O),
										);
										break;
									}
								}
							} catch {
								B.appendChild(document.createTextNode(U.value));
							}
						return B;
					}
					linkifyLocation(M, N, A, R) {
						const O = this.m(M);
						return (
							this.n(O, void 0, M, R, async (B) => {
								const U = await A.resolveLocationReference(N);
								await U.source.openInEditor(
									this.a,
									{
										startLineNumber: U.line,
										startColumn: U.column,
										endLineNumber: U.endLine ?? U.line,
										endColumn: U.endColumn ?? U.column,
									},
									B,
								);
							}),
							O
						);
					}
					k(M, N, A) {
						const R = this.m(N);
						let O = r.URI.parse(N);
						const B = T.exec(O.path);
						return (
							B &&
								(O = O.with({
									path: O.path.slice(0, B.index),
									fragment: `L${B[0].slice(1)}`,
								})),
							this.n(R, O, M, A, async () => {
								if (O.scheme === C.Schemas.file) {
									const U = O.fsPath,
										z = await this.d.path,
										F = d.$mc(
											z.sep === d.$lc.sep && m.$l
												? U.replace(/\\/g, d.$lc.sep)
												: U,
										),
										x = r.URI.parse(F);
									if (!(await this.b.exists(x))) return;
									await this.a.openEditor({
										resource: x,
										options: {
											pinned: !0,
											selection: B
												? { startLineNumber: +B[1], startColumn: +B[2] }
												: void 0,
										},
									});
									return;
								}
								this.c.open(N, {
									allowTunneling:
										!!this.g.remoteAuthority &&
										this.h.getValue("remote.forwardOnOpen"),
								});
							}),
							R
						);
					}
					l(M, N, A, R, O, B, U) {
						if (A[0] === "/" && A[1] === "/") return document.createTextNode(N);
						const z = { selection: { startLineNumber: R, startColumn: O } };
						if (A[0] === ".") {
							if (!B) return document.createTextNode(N);
							const H = B.toResource(A),
								q = this.m(N);
							return (
								this.n(q, H, M, U, (V) =>
									this.a.openEditor({
										resource: H,
										options: { ...z, preserveFocus: V },
									}),
								),
								q
							);
						}
						if (A[0] === "~") {
							const H = this.d.resolvedUserHome;
							H && (A = d.$oc(H.fsPath, A.substring(1)));
						}
						const F = this.m(N);
						F.tabIndex = 0;
						const x = r.URI.file(d.$mc(A));
						return (
							this.b
								.stat(x)
								.then((H) => {
									H.isDirectory ||
										this.n(F, x, M, U, (q) =>
											this.a.openEditor({
												resource: x,
												options: { ...z, preserveFocus: q },
											}),
										);
								})
								.catch(() => {}),
							F
						);
					}
					m(M) {
						const N = document.createElement("a");
						return (N.textContent = M), N;
					}
					n(M, N, A, R, O) {
						M.classList.add("link");
						const B =
								N && this.f.canTunnel(N)
									? (0, u.localize)(5675, null)
									: (0, u.localize)(5676, null),
							U = (M.ariaLabel = A
								? m.$m
									? (0, u.localize)(5677, null, B, A)
									: (0, u.localize)(5678, null, B, A)
								: m.$m
									? (0, u.localize)(5679, null, B)
									: (0, u.localize)(5680, null, B));
						R?.type === k.Rich
							? R.store.add(
									this.j.setupManagedHover((0, w.$cib)("element"), M, U),
								)
							: R?.type !== k.None && (M.title = U),
							(M.onmousemove = (z) => {
								M.classList.toggle("pointer", m.$m ? z.metaKey : z.ctrlKey);
							}),
							(M.onmouseleave = () => M.classList.remove("pointer")),
							(M.onclick = (z) => {
								const F = (0, t.getWindow)(M).getSelection();
								!F ||
									F.type === "Range" ||
									((m.$m ? z.metaKey : z.ctrlKey) &&
										(z.preventDefault(), z.stopImmediatePropagation(), O(!1)));
							}),
							(M.onkeydown = (z) => {
								const F = new i.$7fb(z);
								(F.keyCode === E.KeyCode.Enter ||
									F.keyCode === E.KeyCode.Space) &&
									(F.preventDefault(),
									F.stopPropagation(),
									O(F.keyCode === E.KeyCode.Space));
							});
					}
					o(M) {
						if (M.length > P) return [{ kind: "text", value: M, captures: [] }];
						const N = [s, I],
							A = ["web", "path"],
							R = [],
							O = (B, U) => {
								if (U >= N.length) {
									R.push({ value: B, kind: "text", captures: [] });
									return;
								}
								const z = N[U];
								let F = 0,
									x;
								for (z.lastIndex = 0; (x = z.exec(B)) !== null; ) {
									const q = B.substring(F, x.index);
									q && O(q, U + 1);
									const V = x[0];
									R.push({ value: V, kind: A[U], captures: x.slice(1) }),
										(F = x.index + V.length);
								}
								const H = B.substring(F);
								H && O(H, U + 1);
							};
						return O(M, 0), R;
					}
				};
				(e.$7Hc = L),
					(e.$7Hc = L =
						Ne(
							[
								j(0, p.$IY),
								j(1, h.$ll),
								j(2, n.$7rb),
								j(3, f.$I8),
								j(4, g.$cO),
								j(5, o.$r8),
								j(6, a.$gj),
								j(7, c.$Uyb),
							],
							L,
						));
			},
		),
		define(
			de[3579],
			he([1, 0, 4, 7, 680, 112, 15, 35, 26, 51, 5, 709, 38, 105, 50, 79, 2432]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$FQc = void 0),
					(t = mt(t)),
					(i = mt(i));
				const p = i.$,
					o = (0, r.$wP)(
						"debugExceptionWidget.border",
						"#a31515",
						t.localize(5670, null),
					),
					f = (0, r.$wP)(
						"debugExceptionWidget.background",
						{
							dark: "#420b0d",
							light: "#f1dfde",
							hcDark: "#420b0d",
							hcLight: "#f1dfde",
						},
						t.localize(5671, null),
					);
				let b = class extends w.$FLb {
					constructor(l, y, $, v, S) {
						super(l, {
							showFrame: !0,
							showArrow: !0,
							isAccessible: !0,
							frameWidth: 1,
							className: "exception-widget-container",
						}),
							(this.b = y),
							(this.c = $),
							(this.d = S),
							this.i(v.getColorTheme()),
							this.o.add(v.onDidColorThemeChange(this.i.bind(this))),
							this.create();
						const I = new C.$Yh(() => this.E(void 0, void 0), 50);
						this.o.add(this.editor.onDidLayoutChange(() => I.schedule())),
							this.o.add(I);
					}
					i(l) {
						this.a = l.getColor(f);
						const y = l.getColor(o);
						this.style({ arrowColor: y, frameColor: y });
					}
					q() {
						this.container &&
							(this.container.style.backgroundColor = this.a
								? this.a.toString()
								: ""),
							super.q();
					}
					C(l) {
						this.B("exception-widget");
						const y = this.editor.getOption(h.EditorOption.fontInfo);
						(l.style.fontSize = `${y.fontSize}px`),
							(l.style.lineHeight = `${y.lineHeight}px`),
							(l.tabIndex = 0);
						const $ = p(".title"),
							v = p(".label");
						i.$fhb($, v);
						const S = p(".actions");
						i.$fhb($, S),
							(v.textContent = this.b.id
								? t.localize(5672, null, this.b.id)
								: t.localize(5673, null));
						let I = v.textContent;
						if (
							(new c.$eib(S).push(
								new n.$rj(
									"editor.closeExceptionWidget",
									t.localize(5674, null),
									m.ThemeIcon.asClassName(g.$bP),
									!0,
									async () => {
										this.editor.getContribution(E.$Z5)?.closeExceptionWidget();
									},
								),
								{ label: !1, icon: !0 },
							),
							i.$fhb(l, $),
							this.b.description)
						) {
							const P = p(".description");
							(P.textContent = this.b.description),
								(I += ", " + this.b.description),
								i.$fhb(l, P);
						}
						if (this.b.details && this.b.details.stackTrace) {
							const P = p(".stack-trace"),
								L = this.d
									.createInstance(a.$7Hc)
									.linkify(
										this.b.details.stackTrace,
										!0,
										this.c ? this.c.root : void 0,
										void 0,
										{ type: a.DebugLinkHoverBehavior.Rich, store: this.o },
									);
							P.appendChild(L),
								i.$fhb(l, P),
								(I += ", " + this.b.details.stackTrace);
						}
						l.setAttribute("aria-label", I);
					}
					E(l, y) {
						this.container.style.height = "initial";
						const $ = this.editor.getOption(h.EditorOption.lineHeight),
							v = Math.round($ / 3),
							S = Math.ceil((this.container.offsetHeight + v) / $);
						this.F(S);
					}
					focus() {
						this.container?.focus();
					}
					hasFocus() {
						return this.container ? i.$Lgb(this.container) : !1;
					}
				};
				(e.$FQc = b), (e.$FQc = b = Ne([j(3, d.$iP), j(4, u.$Li)], b));
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[3580],
		he([
			1, 0, 6, 3, 23, 12, 4, 776, 10, 5, 62, 438, 32, 189, 2824, 675, 117, 2827,
			25, 3312, 107, 807, 1655, 774, 145, 1262, 358, 78, 245, 165, 143, 424,
			111, 40, 47, 7, 75, 775, 809,
		]),
		function (
			ce,
			e,
			t,
			i,
			w,
			E,
			C,
			d,
			m,
			r,
			u,
			a,
			h,
			c,
			n,
			g,
			p,
			o,
			f,
			b,
			s,
			l,
			y,
			$,
			v,
			S,
			I,
			T,
			P,
			k,
			L,
			D,
			M,
			N,
			A,
			R,
			O,
			B,
			U,
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$hIb = void 0),
				(S = mt(S)),
				(M = xi(M));
			var z;
			(function (G) {
				(G[(G.ErrorLaunchThresholdDuration = 500)] =
					"ErrorLaunchThresholdDuration"),
					(G[(G.LatencyMeasuringInterval = 1e3)] = "LatencyMeasuringInterval");
			})(z || (z = {}));
			var F;
			(function (G) {
				(G[(G.Process = 0)] = "Process"),
					(G[(G.PsuedoTerminal = 1)] = "PsuedoTerminal");
			})(F || (F = {}));
			let x = class extends i.$1c {
				get persistentProcessId() {
					return this.b?.id;
				}
				get shouldPersist() {
					return (
						!!this.reconnectionProperties ||
						(this.b ? this.b.shouldPersist : !1)
					);
				}
				get hasWrittenData() {
					return this.n;
				}
				get hasChildProcesses() {
					return this.q;
				}
				get reconnectionProperties() {
					return (
						this.y?.attachPersistentProcess?.reconnectionProperties ||
						this.y?.reconnectionProperties ||
						void 0
					);
				}
				get extEnvironmentVariableCollection() {
					return this.j;
				}
				constructor(
					K,
					J,
					W,
					X,
					Y,
					ie,
					ne,
					ee,
					_,
					te,
					Q,
					Z,
					se,
					re,
					le,
					oe,
					ae,
					pe,
					$e,
					ye,
				) {
					super(),
						(this.R = K),
						(this.S = Y),
						(this.U = ie),
						(this.W = ne),
						(this.X = ee),
						(this.Y = _),
						(this.Z = te),
						(this.$ = Q),
						(this.ab = Z),
						(this.bb = se),
						(this.cb = re),
						(this.db = le),
						(this.eb = oe),
						(this.fb = ae),
						(this.gb = pe),
						(this.hb = $e),
						(this.ib = ye),
						(this.processState = v.ProcessState.Uninitialized),
						(this.capabilities = this.D(new g.$KHb())),
						(this.a = !1),
						(this.b = null),
						(this.f = F.Process),
						(this.g = []),
						(this.n = !1),
						(this.q = !1),
						(this.s = !1),
						(this.w = !1),
						(this.z = { cols: 0, rows: 0 }),
						(this.C = this.D(new t.$re())),
						(this.onPtyDisconnect = this.C.event),
						(this.F = this.D(new t.$re())),
						(this.onPtyReconnect = this.F.event),
						(this.G = this.D(new t.$re())),
						(this.onProcessReady = this.G.event),
						(this.H = this.D(new t.$re())),
						(this.onProcessStateChange = this.H.event),
						(this.I = this.D(new t.$re())),
						(this.onBeforeProcessData = this.I.event),
						(this.J = this.D(new t.$re())),
						(this.onProcessData = this.J.event),
						(this.L = this.D(new t.$re())),
						(this.onProcessReplayComplete = this.L.event),
						(this.M = this.D(new t.$re())),
						(this.onDidChangeProperty = this.M.event),
						(this.N = this.D(new t.$re())),
						(this.onEnvironmentVariableInfoChanged = this.N.event),
						(this.O = this.D(new t.$re())),
						(this.onProcessExit = this.O.event),
						(this.P = this.D(new t.$re())),
						(this.onRestoreCommands = this.P.event),
						(this.Q = S.$Oeb(J, this.X, this.S)),
						(this.ptyProcessReady = this.jb()),
						(this.m = new H((ue) => this.b?.acknowledgeDataEvent(ue))),
						(this.t = this.D(this.U.createInstance(V))),
						this.D(
							this.t.onProcessData((ue) => {
								const me = { data: typeof ue == "string" ? ue : ue.data };
								this.I.fire(me),
									me.data &&
										me.data.length > 0 &&
										(typeof ue != "string" && (ue.data = me.data),
										this.J.fire(
											typeof ue != "string"
												? ue
												: { data: me.data, trackCommit: !1 },
										));
							}),
						),
						J && typeof J == "object"
							? (this.remoteAuthority = (0, a.$wn)(J))
							: (this.remoteAuthority = this.Z.remoteAuthority),
						W &&
							((this.j = new y.$fK(W)),
							this.D(this.cb.onDidChangeCollections((ue) => this.qb(ue))),
							(this.environmentVariableInfo = this.U.createInstance(
								b.$eIb,
								this.j,
							)),
							this.N.fire(this.environmentVariableInfo)),
						(this.shellIntegrationNonce = X ?? (0, A.$9g)());
				}
				async freePortKillProcess(K) {
					try {
						this.b?.freePortKillProcess &&
							(await this.b?.freePortKillProcess(K));
					} catch (J) {
						this.ib.notify({
							message: (0, C.localize)(10126, null, K, J),
							severity: M.default.Warning,
						});
					}
				}
				dispose(K = !1) {
					(this.a = !0),
						this.b &&
							(this.pb(v.ProcessState.KilledByUser),
							this.b.shutdown(K),
							(this.b = null)),
						super.dispose();
				}
				jb() {
					return new Promise((K) => {
						const J = t.Event.once(this.onProcessReady)(() => {
							this.W.debug(
								`Terminal process ready (shellProcessId: ${this.shellProcessId})`,
							),
								this.B.delete(J),
								K(void 0);
						});
						this.B.add(J);
					});
				}
				async detachFromProcess(K) {
					await this.b?.detach?.(K), (this.b = null);
				}
				async createProcess(K, J, W, X = !0) {
					(this.y = K), (this.z.cols = J), (this.z.rows = W);
					let Y;
					if (K.customPtyImplementation)
						(this.f = F.PsuedoTerminal),
							(Y = K.customPtyImplementation(this.R, J, W));
					else {
						const ne = await this.gb.getBackend(this.remoteAuthority);
						if (!ne)
							throw new Error(
								`No terminal backend registered for remote authority '${this.remoteAuthority}'`,
							);
						this.backend = ne;
						const ee = S.$Leb(
							this.Q,
							await this.eb.getEnvironment(this.remoteAuthority),
							this.Y,
						);
						if (
							((this.userHome = this.bb.resolvedUserHome?.fsPath),
							(this.os = E.OS),
							this.remoteAuthority)
						) {
							const _ = await this.bb.userHome();
							this.userHome = _.path;
							const te = await this.ab.getEnvironment();
							if (!te)
								throw new Error(
									`Failed to get remote environment for remote authority "${this.remoteAuthority}"`,
								);
							(this.userHome = te.userHome.path), (this.os = te.os);
							const Q = await this.kb(ne, ee, K),
								Z =
									((this.fb.getValue(D.TaskSettingId.Reconnection) &&
										K.reconnectionProperties) ||
										!K.isFeatureTerminal) &&
									this.db.config.enablePersistentSessions &&
									!K.isTransient;
							if (K.attachPersistentProcess) {
								const se = await ne.attachToProcess(
									K.attachPersistentProcess.id,
								);
								se
									? (Y = se)
									: (this.W.warn(
											"Attach to process failed for terminal",
											K.attachPersistentProcess,
										),
										(K.attachPersistentProcess = void 0));
							}
							if (!Y) {
								await this.eb.resolveShellLaunchConfig(K, {
									remoteAuthority: this.remoteAuthority,
									os: this.os,
								});
								const se = {
									shellIntegration: {
										enabled: this.fb.getValue(
											p.TerminalSettingId.ShellIntegrationEnabled,
										),
										suggestEnabled: this.fb.getValue(
											U.TerminalSuggestSettingId.Enabled,
										),
										nonce: this.shellIntegrationNonce,
									},
									windowsEnableConpty: this.db.config.windowsEnableConpty,
									windowsUseConptyDll:
										this.db.config.experimental?.windowsUseConptyDll ?? !1,
									environmentVariableCollections: this.j?.collections
										? (0, $.$dK)(this.j.collections)
										: void 0,
									workspaceFolder: this.Q,
								};
								try {
									Y = await ne.createProcess(
										K,
										"",
										J,
										W,
										this.db.config.unicodeVersion,
										Q,
										se,
										Z,
									);
								} catch (re) {
									if (re?.message === "Could not fetch remote environment") {
										this.W.trace(
											"Could not fetch remote environment, silently failing",
										);
										return;
									}
									throw re;
								}
							}
							this.a || this.mb(ne);
						} else {
							if (K.attachPersistentProcess) {
								const _ = K.attachPersistentProcess.findRevivedId
									? await ne.attachToRevivedProcess(
											K.attachPersistentProcess.id,
										)
									: await ne.attachToProcess(K.attachPersistentProcess.id);
								_
									? (Y = _)
									: (this.W.warn(
											"Attach to process failed for terminal",
											K.attachPersistentProcess,
										),
										(K.attachPersistentProcess = void 0));
							}
							Y || (Y = await this.lb(ne, K, J, W, this.userHome, ee)),
								this.a || this.mb(ne);
						}
					}
					if (this.a) {
						Y.shutdown(!1);
						return;
					}
					(this.b = Y),
						this.pb(v.ProcessState.Launching),
						(this.os === E.OperatingSystem.Linux ||
							this.os === E.OperatingSystem.Macintosh) &&
							this.capabilities.add(
								c.TerminalCapability.NaiveCwdDetection,
								new n.$bIb(this.b),
							),
						this.t.newProcess(this.b, X),
						this.u && (0, i.$Vc)(this.u),
						(this.u = [
							Y.onProcessReady((ne) => {
								(this.shellProcessId = ne.pid),
									(this.h = ne.cwd),
									this.M.fire({
										type: p.ProcessPropertyType.InitialCwd,
										value: this.h,
									}),
									this.G.fire(ne),
									this.g.length > 0 &&
										this.b &&
										(Y.input(this.g.join("")), (this.g.length = 0));
							}),
							Y.onProcessExit((ne) => this.ob(ne)),
							Y.onDidChangeProperty(({ type: ne, value: ee }) => {
								switch (ne) {
									case p.ProcessPropertyType.HasChildProcesses:
										this.q = ee;
										break;
									case p.ProcessPropertyType.FailedShellIntegrationActivation:
										this.hb?.publicLog2(
											"terminal/shellIntegrationActivationFailureCustomArgs",
										);
										break;
								}
								this.M.fire({ type: ne, value: ee });
							}),
						]),
						Y.onProcessReplayComplete &&
							this.u.push(Y.onProcessReplayComplete(() => this.L.fire())),
						Y.onRestoreCommands &&
							this.u.push(Y.onRestoreCommands((ne) => this.P.fire(ne))),
						setTimeout(() => {
							this.processState === v.ProcessState.Launching &&
								this.pb(v.ProcessState.Running);
						}, z.ErrorLaunchThresholdDuration);
					const ie = await Y.start();
					if (ie) return ie;
					(0, R.$egb)((0, R.$Ogb)(), () => {
						this.backend?.getLatency().then((ne) => {
							this.W.info(`Latency measurements for ${this.remoteAuthority ?? "local"} backend
${ne
	.map((ee) => `${ee.label}: ${ee.latency.toFixed(2)}ms`)
	.join(`
`)}`);
						});
					});
				}
				async relaunch(K, J, W, X) {
					return (
						(this.ptyProcessReady = this.jb()),
						this.W.trace(`Relaunching terminal instance ${this.R}`),
						this.w && ((this.w = !1), this.F.fire()),
						(this.n = !1),
						this.createProcess(K, J, W, X)
					);
				}
				async kb(K, J, W) {
					const X = S.$Oeb(W.cwd, this.X, this.S),
						Y = E.$l ? "windows" : E.$m ? "osx" : "linux",
						ie = this.fb.getValue(`terminal.integrated.env.${Y}`);
					let ne;
					W.useShellEnvironment
						? (ne = await K.getShellEnvironment())
						: (ne = await this.eb.getEnvironment(this.remoteAuthority));
					const ee = await S.$Meb(
						W,
						ie,
						J,
						this.$.version,
						this.db.config.detectLocale,
						ne,
					);
					return (
						!this.a &&
							(0, B.$Eeb)(W) &&
							((this.j = this.cb.mergedCollection),
							this.D(this.cb.onDidChangeCollections((_) => this.qb(_))),
							await this.j.applyToProcessEnvironment(
								ee,
								{ workspaceFolder: X },
								J,
							),
							this.j.getVariableMap({ workspaceFolder: X }).size &&
								((this.environmentVariableInfo = this.U.createInstance(
									b.$eIb,
									this.j,
								)),
								this.N.fire(this.environmentVariableInfo))),
						ee
					);
				}
				async lb(K, J, W, X, Y, ie) {
					await this.eb.resolveShellLaunchConfig(J, {
						remoteAuthority: void 0,
						os: E.OS,
					});
					const ne = this.S.getLastActiveWorkspaceRoot(w.Schemas.file),
						ee = await S.$Keb(J, Y, ie, ne, this.db.config.cwd, this.W),
						_ = await this.kb(K, ie, J),
						te = {
							shellIntegration: {
								enabled: this.fb.getValue(
									p.TerminalSettingId.ShellIntegrationEnabled,
								),
								suggestEnabled: this.fb.getValue(
									U.TerminalSuggestSettingId.Enabled,
								),
								nonce: this.shellIntegrationNonce,
							},
							windowsEnableConpty: this.db.config.windowsEnableConpty,
							windowsUseConptyDll:
								this.db.config.experimental?.windowsUseConptyDll ?? !1,
							environmentVariableCollections: this.j
								? (0, $.$dK)(this.j.collections)
								: void 0,
							workspaceFolder: this.Q,
						},
						Q =
							((this.fb.getValue(D.TaskSettingId.Reconnection) &&
								J.reconnectionProperties) ||
								!J.isFeatureTerminal) &&
							this.db.config.enablePersistentSessions &&
							!J.isTransient;
					return await K.createProcess(
						J,
						ee,
						W,
						X,
						this.db.config.unicodeVersion,
						_,
						te,
						Q,
					);
				}
				mb(K) {
					this.s ||
						((this.s = !0),
						this.D(
							K.onPtyHostUnresponsive(() => {
								(this.w = !0), this.C.fire();
							}),
						),
						(this.r = K.onPtyHostResponsive(() => {
							(this.w = !1), this.F.fire();
						})),
						this.D((0, i.$Yc)(() => this.r?.dispose())),
						this.D(
							K.onPtyHostRestart(async () => {
								if (
									(this.w || ((this.w = !0), this.C.fire()),
									this.r?.dispose(),
									(this.r = void 0),
									this.y)
								)
									if (this.y.isFeatureTerminal && !this.reconnectionProperties)
										this.ob(-1);
									else {
										const J = (0, C.localize)(10127, null);
										this.J.fire({
											data: (0, d.$aIb)(J, { loudFormatting: !0 }),
											trackCommit: !1,
										}),
											await this.relaunch(this.y, this.z.cols, this.z.rows, !1);
									}
							}),
						));
				}
				async getBackendOS() {
					let K = E.OS;
					if (this.remoteAuthority) {
						const J = await this.ab.getEnvironment();
						if (!J)
							throw new Error(
								`Failed to get remote environment for remote authority "${this.remoteAuthority}"`,
							);
						K = J.os;
					}
					return K;
				}
				setDimensions(K, J, W) {
					if (W) {
						this.nb(K, J);
						return;
					}
					return this.ptyProcessReady.then(() => this.nb(K, J));
				}
				async setUnicodeVersion(K) {
					return this.b?.setUnicodeVersion(K);
				}
				nb(K, J) {
					if (this.b) {
						try {
							this.b.resize(K, J);
						} catch (W) {
							if (W.code !== "EPIPE" && W.code !== "ERR_IPC_CHANNEL_CLOSED")
								throw W;
						}
						(this.z.cols = K), (this.z.rows = J);
					}
				}
				async write(K) {
					await this.ptyProcessReady,
						this.t.disableSeamlessRelaunch(),
						(this.n = !0),
						this.shellProcessId || this.f === F.PsuedoTerminal
							? this.b && this.b.input(K)
							: this.g.push(K);
				}
				async processBinary(K) {
					await this.ptyProcessReady,
						this.t.disableSeamlessRelaunch(),
						(this.n = !0),
						this.b?.processBinary(K);
				}
				get initialCwd() {
					return this.h ?? "";
				}
				async refreshProperty(K) {
					if (!this.b)
						throw new Error("Cannot refresh property when process is not set");
					return this.b.refreshProperty(K);
				}
				async updateProperty(K, J) {
					return this.b?.updateProperty(K, J);
				}
				acknowledgeDataEvent(K) {
					this.m.ack(K);
				}
				ob(K) {
					(this.b = null),
						this.processState === v.ProcessState.Launching &&
							this.pb(v.ProcessState.KilledDuringLaunch),
						this.processState === v.ProcessState.Running &&
							this.pb(v.ProcessState.KilledByProcess),
						this.O.fire(K);
				}
				pb(K) {
					(this.processState = K), this.H.fire();
				}
				qb(K) {
					const J = this.j.diff(K, { workspaceFolder: this.Q });
					if (J === void 0) {
						this.environmentVariableInfo instanceof b.$dIb &&
							((this.environmentVariableInfo = this.U.createInstance(
								b.$eIb,
								this.j,
							)),
							this.N.fire(this.environmentVariableInfo));
						return;
					}
					(this.environmentVariableInfo = this.U.createInstance(
						b.$dIb,
						J,
						this.R,
						K,
					)),
						this.N.fire(this.environmentVariableInfo);
				}
				async clearBuffer() {
					this.b?.clearBuffer?.();
				}
			};
			(e.$hIb = x),
				(e.$hIb = x =
					Ne(
						[
							j(4, P.$Feb),
							j(5, r.$Li),
							j(6, p.$YJ),
							j(7, f.$Vi),
							j(8, I.$zeb),
							j(9, T.$r8),
							j(10, u.$Bk),
							j(11, L.$$m),
							j(12, k.$I8),
							j(13, l.$ceb),
							j(14, s.$jIb),
							j(15, v.$reb),
							j(16, m.$gj),
							j(17, s.$mIb),
							j(18, h.$km),
							j(19, N.$4N),
						],
						x,
					));
			class H {
				constructor(K) {
					(this.b = K), (this.a = 0);
				}
				ack(K) {
					for (this.a += K; this.a > p.FlowControlConstants.CharCountAckSize; )
						(this.a -= p.FlowControlConstants.CharCountAckSize),
							this.b(p.FlowControlConstants.CharCountAckSize);
				}
			}
			var q;
			(function (G) {
				(G[(G.RecordTerminalDuration = 1e4)] = "RecordTerminalDuration"),
					(G[(G.SwapWaitMaximumDuration = 3e3)] = "SwapWaitMaximumDuration");
			})(q || (q = {}));
			let V = class extends i.$1c {
				get onProcessData() {
					return this.q.event;
				}
				constructor(K) {
					super(), (this.r = K), (this.m = !1), (this.q = this.D(new t.$re()));
				}
				newProcess(K, J) {
					if (
						(this.h?.dispose(),
						this.j?.shutdown(!1),
						(this.j = K),
						!this.a || !J || this.m)
					) {
						this.f?.dispose(),
							([this.a, this.f] = this.t(K)),
							this.m && J && this.q.fire("\x1Bc"),
							(this.h = K.onProcessData((X) => this.q.fire(X))),
							(this.m = !1);
						return;
					}
					this.b && this.triggerSwap(),
						(this.n = O.$Bfb.setTimeout(
							() => this.triggerSwap(),
							q.SwapWaitMaximumDuration,
						)),
						this.h?.dispose(),
						this.f?.dispose();
					const W = this.t(K);
					[this.b, this.g] = W;
				}
				disableSeamlessRelaunch() {
					(this.m = !0), this.s(), this.triggerSwap();
				}
				triggerSwap() {
					if (
						(this.n && (O.$Bfb.clearTimeout(this.n), (this.n = void 0)),
						!this.a)
					)
						return;
					if (!this.b) {
						(this.a = void 0), this.f?.dispose();
						return;
					}
					const K = this.u(this.a),
						J = this.u(this.b);
					K === J
						? this.r.trace("Seamless terminal relaunch - identical content")
						: (this.r.trace("Seamless terminal relaunch - resetting content"),
							this.q.fire({ data: `\x1Bc${J}`, trackCommit: !1 })),
						this.h?.dispose(),
						(this.h = this.j.onProcessData((W) => this.q.fire(W))),
						(this.a = this.b),
						this.f?.dispose(),
						(this.f = this.g),
						(this.b = void 0);
				}
				s() {
					this.n ||
						((this.a = void 0),
						this.f?.dispose(),
						(this.b = void 0),
						this.g?.dispose());
				}
				t(K) {
					const J = new o.$cIb(0, 0),
						W = K.onProcessData((X) =>
							J.handleData(typeof X == "string" ? X : X.data),
						);
					return [J, W];
				}
				u(K) {
					return K.generateReplayEventSync()
						.events.filter((J) => !!J.data)
						.map((J) => J.data)
						.join("");
				}
			};
			V = Ne([j(0, p.$YJ)], V);
		},
	),
		define(
			de[3581],
			he([1, 0, 151, 10, 31, 25, 18, 63, 358, 20, 3252, 73, 1020, 165, 53, 21]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Edd = void 0);
				let p = class extends u.$N5c {
					constructor(f, b, s, l, y, $, v, S, I, T, P) {
						super(
							{ getAppRoot: () => b.appRoot, getExecPath: () => b.execPath },
							S.getShellEnv(),
							f,
							s,
							l,
							y,
							$,
							v,
							I,
							T,
							P,
						);
					}
				};
				(e.$Edd = p),
					(e.$Edd = p =
						Ne(
							[
								j(0, C.$IY),
								j(1, t.$ucd),
								j(2, i.$gj),
								j(3, w.$ek),
								j(4, E.$Vi),
								j(5, d.$DJ),
								j(6, a.$3N),
								j(7, h.$Cdd),
								j(8, c.$I8),
								j(9, n.$q2),
								j(10, g.$lq),
							],
							p,
						)),
					(0, r.$lK)(m.$zeb, p, r.InstantiationType.Delayed);
			},
		),
		define(
			de[1860],
			he([
				1, 0, 4, 19, 82, 22, 63, 9, 12, 57, 73, 25, 40, 67, 61, 252, 23, 78,
				143, 8, 37, 39, 249, 6, 3, 15, 18, 222, 44, 165, 91, 7,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$m5c =
						e.$l5c =
						e.OpenLocalFileFolderCommand =
						e.OpenLocalFolderCommand =
						e.SaveLocalFileCommand =
						e.OpenLocalFileCommand =
							void 0),
					(t = mt(t)),
					(i = mt(i)),
					(w = mt(w));
				var M;
				(function (U) {
					(U.ID = "workbench.action.files.openLocalFile"),
						(U.LABEL = t.localize(12220, null));
					function z() {
						return (F) =>
							F.get(r.$IO).pickFileAndOpen({
								forceNewWindow: !1,
								availableFileSystems: [p.Schemas.file],
							});
					}
					U.handler = z;
				})(M || (e.OpenLocalFileCommand = M = {}));
				var N;
				(function (U) {
					(U.ID = "workbench.action.files.saveLocalFile"),
						(U.LABEL = t.localize(12221, null));
					function z() {
						return (F) => {
							const x = F.get(I.$IY),
								H = x.activeEditorPane;
							return H
								? x.save(
										{ groupId: H.group.id, editor: H.input },
										{
											saveAs: !0,
											availableFileSystems: [p.Schemas.file],
											reason: P.SaveReason.EXPLICIT,
										},
									)
								: Promise.resolve(void 0);
						};
					}
					U.handler = z;
				})(N || (e.SaveLocalFileCommand = N = {}));
				var A;
				(function (U) {
					(U.ID = "workbench.action.files.openLocalFolder"),
						(U.LABEL = t.localize(12222, null));
					function z() {
						return (F) =>
							F.get(r.$IO).pickFolderAndOpen({
								forceNewWindow: !1,
								availableFileSystems: [p.Schemas.file],
							});
					}
					U.handler = z;
				})(A || (e.OpenLocalFolderCommand = A = {}));
				var R;
				(function (U) {
					(U.ID = "workbench.action.files.openLocalFileFolder"),
						(U.LABEL = t.localize(12223, null));
					function z() {
						return (F) =>
							F.get(r.$IO).pickFileFolderAndOpen({
								forceNewWindow: !1,
								availableFileSystems: [p.Schemas.file],
							});
					}
					U.handler = z;
				})(R || (e.OpenLocalFileFolderCommand = R = {}));
				var O;
				(function (U) {
					(U[(U.Updated = 0)] = "Updated"),
						(U[(U.UpdatedWithTrailing = 1)] = "UpdatedWithTrailing"),
						(U[(U.Updating = 2)] = "Updating"),
						(U[(U.NotUpdated = 3)] = "NotUpdated"),
						(U[(U.InvalidPath = 4)] = "InvalidPath");
				})(O || (O = {})),
					(e.$l5c = new b.$5j("remoteFileDialogVisible", !1));
				let B = class {
					constructor(z, F, x, H, q, V, G, K, J, W, X, Y, ie, ne) {
						(this.B = z),
							(this.C = F),
							(this.D = x),
							(this.E = H),
							(this.F = q),
							(this.G = V),
							(this.H = G),
							(this.I = K),
							(this.J = J),
							(this.K = W),
							(this.L = X),
							(this.M = Y),
							(this.N = ne),
							(this.d = !1),
							(this.f = !0),
							(this.g = !1),
							(this.k = !1),
							(this.o = ""),
							(this.p = ""),
							(this.u = !1),
							(this.x = "/"),
							(this.y = new $.$re()),
							(this.A = [this.y]),
							(this.h = this.J.remoteAuthority),
							(this.n = e.$l5c.bindTo(ie)),
							(this.m = this.L.defaultUriScheme);
					}
					set busy(z) {
						this.c.busy !== z && ((this.c.busy = z), this.y.fire(z));
					}
					get busy() {
						return this.c.busy;
					}
					async showOpenDialog(z = {}) {
						(this.m = this.Q(z.availableFileSystems, z.defaultUri)),
							(this.r = await this.S()),
							(this.t = await this.S(!0));
						const F = this.O(z);
						return F ? ((this.a = F), this.T()) : Promise.resolve(void 0);
					}
					async showSaveDialog(z) {
						(this.m = this.Q(z.availableFileSystems, z.defaultUri)),
							(this.r = await this.S()),
							(this.t = await this.S(!0)),
							(this.k = !0);
						const F = this.O(z, !0);
						return F
							? ((this.a = F),
								(this.a.canSelectFolders = !0),
								(this.a.canSelectFiles = !0),
								new Promise((x) => {
									this.T(!0).then((H) => {
										x(H);
									});
								}))
							: Promise.resolve(void 0);
					}
					O(z, F = !1) {
						let x, H;
						if (
							(z.defaultUri &&
								((x = this.m === z.defaultUri.scheme ? z.defaultUri : void 0),
								(H = F ? i.$kh(z.defaultUri) : void 0)),
							x || ((x = this.r), H && (x = i.$nh(x, H))),
							this.m !== p.Schemas.file && !this.B.hasProvider(x))
						) {
							this.F.info(t.localize(12224, null, x.toString()));
							return;
						}
						const q = w.$vo(z);
						return (q.defaultUri = x), q;
					}
					P(z, F) {
						z.startsWith("\\\\") || (z = z.replace(/\\/g, "/"));
						const x =
								this.m === p.Schemas.file
									? d.URI.file(z)
									: d.URI.from({
											scheme: this.m,
											path: z,
											query: F?.query,
											fragment: F?.fragment,
										}),
							H =
								x.scheme === p.Schemas.file ? void 0 : (this.h ?? F?.authority);
						return i.$xh(x, H, H ? this.L.defaultUriScheme : x.scheme);
					}
					Q(z, F) {
						return z && z.length > 0
							? F && z.indexOf(F.scheme) >= 0
								? F.scheme
								: z[0]
							: F
								? F.scheme
								: p.Schemas.file;
					}
					async R() {
						return (
							this.w === void 0 && (this.w = await this.K.getEnvironment()),
							this.w
						);
					}
					S(z = !1) {
						return z
							? this.L.userHome({ preferLocal: this.m === p.Schemas.file })
							: this.G.preferredHome(this.m);
					}
					async T(z = !1) {
						(this.g = !!this.a.canSelectFolders),
							(this.f = !!this.a.canSelectFiles),
							(this.x = this.D.getSeparator(this.m, this.h)),
							(this.d = !1),
							(this.u = await this.pb());
						let F = this.a.defaultUri
								? this.a.defaultUri
								: this.E.getWorkspace().folders[0].uri,
							x;
						const H = i.$lh(F);
						if (this.a.defaultUri) {
							try {
								x = await this.B.stat(this.a.defaultUri);
							} catch {}
							(!x || !x.isDirectory) &&
								((F = i.$mh(this.a.defaultUri)),
								(this.l = i.$kh(this.a.defaultUri)));
						}
						return new Promise((q) => {
							if (
								((this.c = this.C.createQuickPick()),
								(this.busy = !0),
								(this.c.matchOnLabel = !1),
								(this.c.sortByLabel = !1),
								(this.c.ignoreFocusOut = !0),
								(this.c.ok = !0),
								this.m !== p.Schemas.file &&
									this.a &&
									this.a.availableFileSystems &&
									this.a.availableFileSystems.length > 1 &&
									this.a.availableFileSystems.indexOf(p.Schemas.file) > -1)
							) {
								(this.c.customButton = !0),
									(this.c.customLabel = t.localize(12225, null));
								let W;
								z ? (W = N) : (W = this.f ? (this.g ? R : M) : A);
								const X = this.M.lookupKeybinding(W.ID);
								if (X) {
									const Y = X.getLabel();
									Y &&
										(this.c.customHover = (0, s.$kf)("{0} ({1})", W.LABEL, Y));
								}
							}
							let V = 0,
								G = !1;
							(this.b = i.$mh(F)),
								(this.o = ""),
								(this.p = ""),
								(this.c.title = this.a.title),
								(this.c.value = this.nb(this.b, !0)),
								(this.c.valueSelection = [
									this.c.value.length,
									this.c.value.length,
								]);
							function K(W, X) {
								X && ((X = i.$vh(X, W.x)), (X = i.$uh(X))),
									q(X),
									W.n.set(!1),
									W.c.dispose(),
									(0, v.$Vc)(W.A);
							}
							this.c.onDidCustom(() => {
								if (!(G || this.busy))
									return (
										(G = !0),
										V++,
										this.a.availableFileSystems &&
											this.a.availableFileSystems.length > 1 &&
											(this.a.availableFileSystems =
												this.a.availableFileSystems.slice(1)),
										this.c.hide(),
										z
											? this.G.showSaveDialog(this.a).then((W) => {
													K(this, W);
												})
											: this.G.showOpenDialog(this.a).then((W) => {
													K(this, W ? W[0] : void 0);
												})
									);
							});
							function J(W) {
								if (W.busy) {
									W.y.event((X) => {
										X || J(W);
									});
									return;
								} else if (G) return;
								(G = !0),
									V++,
									W.$().then((X) => {
										X
											? (W.c.hide(), K(W, X))
											: W.d
												? K(W, void 0)
												: (V--, (G = !1));
									});
							}
							this.c.onDidAccept((W) => {
								J(this);
							}),
								this.c.onDidChangeActive((W) => {
									if (((G = !1), W.length === 1 && this.X())) {
										this.c.validationMessage = void 0;
										const X = this.Y();
										(0, s.$Mf)(this.c.value.substring(0, X.length), X) ||
											((this.c.valueSelection = [0, this.c.value.length]),
											this.hb(X, X)),
											this.gb(X, this.o, W[0], !0);
									}
								}),
								this.c.onDidChangeValue(async (W) => this.U(W)),
								this.c.onDidHide(() => {
									(this.d = !0), V === 0 && K(this, void 0);
								}),
								this.c.show(),
								this.n.set(!0),
								this.mb(F, !0, this.l).then(() => {
									this.l
										? (this.c.valueSelection = [
												this.c.value.length - this.l.length,
												this.c.value.length - H.length,
											])
										: (this.c.valueSelection = [
												this.c.value.length,
												this.c.value.length,
											]),
										(this.busy = !1);
								});
						});
					}
					async U(z) {
						try {
							if (this.W())
								if (!(0, s.$Mf)(z, this.Y()) && !this.V(z)) {
									this.c.validationMessage = void 0;
									const F = this.Z();
									let x = O.NotUpdated;
									i.$fh.isEqual(this.b, F) || (x = await this.db(z, F)),
										(x === O.NotUpdated || x === O.UpdatedWithTrailing) &&
											this.fb(z);
								} else (this.c.activeItems = []), (this.o = "");
						} catch {}
					}
					V(z) {
						return (
							this.v &&
							z.length > this.v.length &&
							(0, s.$Mf)(z.substring(0, this.v.length), this.v)
						);
					}
					W() {
						return !(0, s.$Mf)(this.c.value, this.ob(this.b, this.o + this.p));
					}
					X() {
						return (
							this.q !== (this.c.activeItems ? this.c.activeItems[0] : void 0)
						);
					}
					Y() {
						const z = this.nb(this.b);
						return (0, s.$Mf)(this.c.value.substr(0, this.o.length), this.o)
							? (0, s.$Mf)(this.c.value.substr(0, z.length), z)
								? z
								: this.o
							: this.ob(this.b, this.o);
					}
					Z() {
						const z = this.P(this.c.value.trimRight(), this.b),
							F = this.nb(this.b);
						if ((0, s.$Mf)(this.c.value, F)) return this.b;
						const x = this.P(F, this.b),
							H = i.$ph(x, z),
							q =
								this.c.value.length > 1 && F.length > 1
									? (0, s.$Mf)(this.c.value.substr(0, 2), F.substr(0, 2))
									: !1;
						if (H && q) {
							let V = i.$nh(this.b, H);
							const G = i.$kh(z);
							return (
								(G === "." || G === "..") &&
									(V = this.P(this.ob(V, G), this.b)),
								i.$th(z) ? i.$vh(V) : V
							);
						} else return z;
					}
					async $() {
						if (((this.busy = !0), this.c.activeItems.length === 1)) {
							const F = this.c.selectedItems[0];
							if (F.isFolder) {
								if (this.l) await this.mb(F.uri, !0, this.l);
								else {
									const x = this.nb(F.uri);
									(0, s.$Nf)(x, this.c.value) &&
									(0, s.$Mf)(F.label, i.$kh(F.uri))
										? ((this.c.valueSelection = [
												this.nb(this.b).length,
												this.c.value.length,
											]),
											this.hb(x, this.rb(F.uri)))
										: F.label === ".." && (0, s.$Nf)(this.c.value, x)
											? ((this.c.valueSelection = [
													x.length,
													this.c.value.length,
												]),
												this.hb(x, ""))
											: await this.mb(F.uri, !0);
								}
								this.c.busy = !1;
								return;
							}
						} else if (
							(await this.db(this.c.value, this.Z())) !== O.NotUpdated
						) {
							this.c.busy = !1;
							return;
						}
						let z;
						if (
							(this.c.activeItems.length === 0
								? (z = this.Z())
								: this.c.activeItems.length === 1 &&
									(z = this.c.selectedItems[0].uri),
							z && (z = this.ib(z)),
							await this.lb(z))
						)
							return (this.busy = !1), z;
						this.busy = !1;
					}
					ab(z) {
						let F = z,
							x = i.$mh(z);
						for (; !i.$gh(F, x); ) (F = x), (x = i.$mh(x));
						return x;
					}
					bb(z) {
						const F = this.t;
						return z.length > 0 && z[0] === "~"
							? i.$nh(F, z.substring(1))
							: this.P(z);
					}
					cb(z, F) {
						return F.isDirectory && !this.qb(z.path) ? i.$vh(z) : z;
					}
					async db(z, F) {
						if (z.length > 0 && z[0] === "~") {
							const x = this.bb(z);
							return (await this.mb(x, !0)) ? O.UpdatedWithTrailing : O.Updated;
						} else {
							if (z === "\\")
								return (
									(F = this.ab(this.b)),
									(z = this.nb(F)),
									(await this.mb(F, !0)) ? O.UpdatedWithTrailing : O.Updated
								);
							{
								const x = i.$fh.isEqual(this.b, F),
									H = i.$fh.isEqual(this.b, i.$mh(F)),
									q = i.$fh.isEqualOrParent(this.b, i.$mh(F)),
									V = !q && !H;
								if (!x && (this.qb(z) || q || V)) {
									let G;
									try {
										G = await this.B.stat(F);
									} catch {}
									if (G && G.isDirectory && i.$kh(F) !== "." && this.qb(z))
										return (
											(F = this.cb(F, G)),
											(await this.mb(F)) ? O.UpdatedWithTrailing : O.Updated
										);
									if (this.qb(z))
										return (
											(this.c.validationMessage = t.localize(12226, null)),
											(this.v = z),
											O.InvalidPath
										);
									{
										let K = i.$mh(F);
										const J = i.$uh(i.$vh(this.b)),
											W = i.$uh(i.$vh(K));
										if (
											!i.$fh.isEqual(J, W) &&
											(!/^[a-zA-Z]:$/.test(this.c.value) ||
												!(0, s.$Mf)(
													this.nb(this.b).substring(0, this.c.value.length),
													this.c.value,
												))
										) {
											let X;
											try {
												X = await this.B.stat(K);
											} catch {}
											if (X && X.isDirectory)
												return (
													(this.v = void 0),
													(K = this.cb(K, X)),
													(await this.mb(K, !1, i.$kh(F)))
														? O.UpdatedWithTrailing
														: O.Updated
												);
										}
									}
								}
							}
						}
						return (this.v = void 0), O.NotUpdated;
					}
					eb(z) {
						const F = i.$lh(z);
						this.l && F && (this.l = i.$kh(z));
					}
					fb(z) {
						z = this.nb(this.bb(z));
						const F = this.P(z),
							x = i.$kh(F),
							H = this.Y();
						if (
							(0, s.$Mf)(H, z.substring(0, H.length)) ||
							(0, s.$Mf)(z, H.substring(0, z.length))
						) {
							let V = !1;
							for (let G = 0; G < this.c.items.length; G++) {
								const K = this.c.items[G];
								if (this.gb(z, x, K)) {
									V = !0;
									break;
								}
							}
							if (!V) {
								const G =
									x.length >= 2 ? H.substring(H.length - x.length + 2) : "";
								(this.o = G === x ? x : ""),
									(this.p = ""),
									(this.c.activeItems = []),
									this.eb(F);
							}
						} else
							(this.o = x),
								(this.p = ""),
								(this.c.activeItems = []),
								this.eb(F);
					}
					gb(z, F, x, H = !1) {
						if (this.busy) return (this.o = F), (this.p = ""), !1;
						const q = x.label;
						return q === ".."
							? ((this.o = ""),
								(this.p = ""),
								(this.q = x),
								H && (0, D.$Ngb)().execCommand("insertText", !1, ""),
								!1)
							: !H &&
									q.length >= F.length &&
									(0, s.$Mf)(q.substr(0, F.length), F)
								? ((this.o = F),
									(this.q = x),
									(this.p = ""),
									x.isFolder || !this.l
										? (this.c.activeItems = [x])
										: (this.c.activeItems = []),
									!0)
								: H && !(0, s.$Mf)(this.rb(x.uri), this.o + this.p)
									? ((this.o = ""),
										this.N.isScreenReaderOptimized() || (this.p = this.jb(q)),
										(this.q = x),
										this.N.isScreenReaderOptimized() ||
											((this.c.valueSelection = [
												this.nb(this.b, !0).length,
												this.c.value.length,
											]),
											this.hb(this.ob(this.b, this.p), this.p),
											(this.c.valueSelection = [
												this.c.value.length - this.p.length,
												this.c.value.length,
											])),
										!0)
									: ((this.o = F), (this.p = ""), !1);
					}
					hb(z, F) {
						this.c.inputHasFocus()
							? ((0, D.$Ngb)().execCommand("insertText", !1, F),
								this.c.value !== z && ((this.c.value = z), this.U(z)))
							: ((this.c.value = z), this.U(z));
					}
					ib(z) {
						let F = z;
						if (
							this.k &&
							this.a.filters &&
							this.a.filters.length > 0 &&
							!i.$th(z)
						) {
							let x = !1;
							const H = i.$lh(z).substr(1);
							for (let q = 0; q < this.a.filters.length; q++) {
								for (let V = 0; V < this.a.filters[q].extensions.length; V++)
									if (
										this.a.filters[q].extensions[V] === "*" ||
										this.a.filters[q].extensions[V] === H
									) {
										x = !0;
										break;
									}
								if (x) break;
							}
							x ||
								(F = i.$nh(
									i.$mh(z),
									i.$kh(z) + "." + this.a.filters[0].extensions[0],
								));
						}
						return F;
					}
					jb(z) {
						return z.length > 1 && this.qb(z) ? z.substr(0, z.length - 1) : z;
					}
					kb(z, F) {
						const x = this.C.createQuickPick();
						(x.title = F),
							(x.ignoreFocusOut = !0),
							(x.ok = !0),
							(x.customButton = !0),
							(x.customLabel = t.localize(12227, null)),
							(x.value = this.nb(z));
						let H = !1;
						return new Promise((q) => {
							x.onDidAccept(() => {
								(H = !0), x.hide(), q(!0);
							}),
								x.onDidHide(() => {
									H || q(!1), this.c.show(), (this.d = !1), x.dispose();
								}),
								x.onDidChangeValue(() => {
									x.hide();
								}),
								x.onDidCustom(() => {
									x.hide();
								}),
								x.show();
						});
					}
					async lb(z) {
						if (z === void 0)
							return (
								(this.c.validationMessage = t.localize(12228, null)),
								Promise.resolve(!1)
							);
						let F, x;
						try {
							(x = await this.B.stat(i.$mh(z))), (F = await this.B.stat(z));
						} catch {}
						if (this.k) {
							if (F && F.isDirectory)
								return (
									(this.c.validationMessage = t.localize(12229, null)),
									Promise.resolve(!1)
								);
							if (F) {
								const H = t.localize(12230, null, i.$kh(z));
								return this.kb(z, H);
							} else if ((0, y.$Jg)(i.$kh(z), this.u))
								if (x)
									if (x.isDirectory) {
										if (x.readonly)
											return (
												(this.c.validationMessage = t.localize(12234, null)),
												Promise.resolve(!1)
											);
									} else
										return (
											(this.c.validationMessage = t.localize(12233, null)),
											Promise.resolve(!1)
										);
								else {
									const H = t.localize(12232, null, i.$kh(i.$mh(z)));
									return this.kb(z, H);
								}
							else
								return (
									(this.c.validationMessage = t.localize(12231, null)),
									Promise.resolve(!1)
								);
						} else if (F) {
							if (z.path === "/" && this.u)
								return (
									(this.c.validationMessage = t.localize(12236, null)),
									Promise.resolve(!1)
								);
							if (F.isDirectory && !this.g)
								return (
									(this.c.validationMessage = t.localize(12237, null)),
									Promise.resolve(!1)
								);
							if (!F.isDirectory && !this.f)
								return (
									(this.c.validationMessage = t.localize(12238, null)),
									Promise.resolve(!1)
								);
						} else
							return (
								(this.c.validationMessage = t.localize(12235, null)),
								Promise.resolve(!1)
							);
						return Promise.resolve(!0);
					}
					async mb(z, F = !1, x) {
						(this.busy = !0), (this.p = "");
						const H = !!x;
						let q = !1;
						const V = (0, S.$zh)(async (G) => {
							let K;
							try {
								(K = await this.B.resolve(z)),
									K.isDirectory ||
										((x = i.$kh(z)), (z = i.$mh(z)), (K = void 0), (q = !0));
							} catch {}
							const J = x ? this.ob(z, x) : this.nb(z, !0);
							return (
								(this.b = this.qb(z.path) ? z : i.$vh(z, this.x)),
								(this.o = x || ""),
								this.tb(K, this.b, G).then((W) =>
									G.isCancellationRequested
										? ((this.busy = !1), !1)
										: ((this.c.itemActivation = C.ItemActivation.NONE),
											(this.c.items = W),
											!(0, s.$Mf)(this.c.value, J) &&
												F &&
												((this.c.valueSelection = [0, this.c.value.length]),
												this.hb(J, J)),
											F && x && H
												? (this.c.valueSelection = [
														this.c.value.length - x.length,
														this.c.value.length - x.length,
													])
												: x ||
													(this.c.valueSelection = [
														this.c.value.length,
														this.c.value.length,
													]),
											(this.busy = !1),
											(this.z = void 0),
											q),
								)
							);
						});
						return this.z !== void 0 && this.z.cancel(), (this.z = V), V;
					}
					nb(z, F = !1) {
						let x = (0, T.$xO)(z.fsPath, this.u).replace(/\n/g, "");
						return (
							this.x === "/"
								? (x = x.replace(/\\/g, this.x))
								: (x = x.replace(/\//g, this.x)),
							F && !this.qb(x) && (x = x + this.x),
							x
						);
					}
					ob(z, F) {
						return F === ".." || F === "."
							? this.nb(z, !0) + F
							: this.nb(i.$nh(z, F));
					}
					async pb() {
						let z = m.$l;
						const F = await this.R();
						return F && (z = F.os === m.OperatingSystem.Windows), z;
					}
					qb(z) {
						return /[\/\\]$/.test(z);
					}
					rb(z) {
						const F = this.nb(z, !0),
							x = this.nb(i.$mh(z), !0);
						return F.substring(x.length);
					}
					async sb(z) {
						const F = this.b.with({ scheme: p.Schemas.file, authority: "" }),
							x = i.$mh(F);
						if (!i.$gh(F, x)) {
							const H = i.$mh(z);
							if (await this.B.exists(H))
								return { label: "..", uri: i.$vh(H, this.x), isFolder: !0 };
						}
					}
					async tb(z, F, x) {
						const H = [],
							q = await this.sb(F);
						try {
							z || (z = await this.B.resolve(F));
							const G = z.children
								? await Promise.all(z.children.map((K) => this.vb(K, F, x)))
								: [];
							for (const K of G) K && H.push(K);
						} catch (G) {
							console.log(G);
						}
						if (x.isCancellationRequested) return [];
						const V = H.sort((G, K) => {
							if (G.isFolder !== K.isFolder) return G.isFolder ? -1 : 1;
							const J = this.qb(G.label)
									? G.label.substr(0, G.label.length - 1)
									: G.label,
								W = this.qb(K.label)
									? K.label.substr(0, K.label.length - 1)
									: K.label;
							return J.localeCompare(W);
						});
						return q && V.unshift(q), V;
					}
					ub(z) {
						if (this.a.filters) {
							for (let F = 0; F < this.a.filters.length; F++)
								for (let x = 0; x < this.a.filters[F].extensions.length; x++) {
									const H = this.a.filters[F].extensions[x];
									if (H === "*" || z.path.endsWith("." + H)) return !0;
								}
							return !1;
						}
						return !0;
					}
					async vb(z, F, x) {
						if (x.isCancellationRequested) return;
						let H = i.$nh(F, z.name);
						if (z.isDirectory) {
							const q = i.$kh(H);
							return (
								(H = i.$vh(H, this.x)),
								{
									label: q,
									uri: H,
									isFolder: !0,
									iconClasses: (0, g.$BDb)(
										this.H,
										this.I,
										H || void 0,
										E.FileKind.FOLDER,
									),
								}
							);
						} else if (!z.isDirectory && this.f && this.ub(H))
							return {
								label: z.name,
								uri: H,
								isFolder: !1,
								iconClasses: (0, g.$BDb)(this.H, this.I, H || void 0),
							};
					}
				};
				(e.$m5c = B),
					(e.$m5c = B =
						Ne(
							[
								j(0, E.$ll),
								j(1, C.$DJ),
								j(2, u.$3N),
								j(3, a.$Vi),
								j(4, h.$4N),
								j(5, r.$IO),
								j(6, c.$QO),
								j(7, n.$nM),
								j(8, o.$r8),
								j(9, f.$$m),
								j(10, k.$I8),
								j(11, l.$uZ),
								j(12, b.$6j),
								j(13, L.$XK),
							],
							B,
						));
			},
		),
		define(
			de[3582],
			he([
				1, 0, 4, 30, 143, 3, 12, 27, 43, 55, 52, 73, 31, 23, 53, 320, 151, 604,
				10, 81, 211, 1860, 25, 32, 269, 8, 110, 21,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (t = mt(t));
				let P = class {
					constructor(R, O) {
						g.$P.on("vscode:getDiagnosticInfo", (B, U) => {
							const z = R.getConnection();
							if (z) {
								const F = O.getHostLabel(
									c.Schemas.vscodeRemote,
									z.remoteAuthority,
								);
								R.getDiagnosticInfo(U.args)
									.then((x) => {
										x &&
											((x.hostName = F),
											w.$_m.latency?.high &&
												(x.latency = {
													average: w.$_m.latency.average,
													current: w.$_m.latency.current,
												})),
											g.$P.send(U.replyChannel, x);
									})
									.catch((x) => {
										const H =
											x && x.message
												? `Connection to '${F}' could not be established  ${x.message}`
												: `Connection to '${F}' could not be established `;
										g.$P.send(U.replyChannel, { hostName: F, errorMessage: H });
									});
							} else g.$P.send(U.replyChannel);
						});
					}
				};
				P = Ne([j(0, w.$$m), j(1, a.$3N)], P);
				let k = class {
					constructor(R, O, B) {
						const U = R.getConnection();
						U &&
							U.onDidStateChange(async (z) => {
								if (z.type === o.PersistentConnectionEventType.ConnectionGain) {
									const F = await O.resolveAuthority(U.remoteAuthority);
									F.options &&
										F.options.extensionHostEnv &&
										(await B.setRemoteEnvironment(F.options.extensionHostEnv));
								}
							});
					}
				};
				k = Ne([j(0, w.$$m), j(1, s.$3l), j(2, n.$q2)], k);
				let L = class extends E.$1c {
					static {
						this.ID = "workbench.contrib.remoteTelemetryEnablementUpdater";
					}
					constructor(R, O) {
						super(),
							(this.a = R),
							(this.b = O),
							this.c(),
							this.D(
								O.onDidChangeConfiguration((B) => {
									B.affectsConfiguration($.$wm) && this.c();
								}),
							);
					}
					c() {
						return this.a.updateTelemetryLevel((0, v.$Zp)(this.b));
					}
				};
				L = Ne([j(0, w.$$m), j(1, f.$gj)], L);
				let D = class extends E.$1c {
					static {
						this.ID = "workbench.contrib.remoteEmptyWorkbenchPresentation";
					}
					constructor(R, O, B, U, z) {
						super();
						function F() {
							const J = B.getValue("workbench.startupEditor");
							return J !== "welcomePage" && J !== "welcomePageInEmptyWorkbench";
						}
						function x() {
							return F();
						}
						const {
							remoteAuthority: H,
							filesToDiff: q,
							filesToMerge: V,
							filesToOpenOrCreate: G,
							filesToWait: K,
						} = R;
						H &&
							z.getWorkbenchState() === y.WorkbenchState.EMPTY &&
							!q?.length &&
							!V?.length &&
							!G?.length &&
							!K &&
							O.resolveAuthority(H).then(() => {
								F() && U.executeCommand("workbench.view.explorer"),
									x() &&
										U.executeCommand(
											"workbench.action.terminal.toggleTerminal",
										);
							});
					}
				};
				D = Ne(
					[j(0, p.$ucd), j(1, s.$3l), j(2, f.$gj), j(3, h.$ek), j(4, y.$Vi)],
					D,
				);
				let M = class extends E.$1c {
					static {
						this.ID = "workbench.contrib.wslContextKeyInitializer";
					}
					constructor(R, O, B, U) {
						super();
						const z = "wslFeatureInstalled",
							F = "remote.wslFeatureInstalled",
							x = B.getBoolean(F, T.StorageScope.APPLICATION, void 0),
							q = new S.$5j(z, !!x, t.localize(8916, null)).bindTo(R);
						x === void 0 &&
							U.when(u.LifecyclePhase.Eventually).then(async () => {
								O.hasWSLFeatureInstalled().then((V) => {
									V &&
										(q.set(!0),
										B.store(
											F,
											!0,
											T.StorageScope.APPLICATION,
											T.StorageTarget.MACHINE,
										));
								});
							});
					}
				};
				M = Ne([j(0, S.$6j), j(1, I.$y7c), j(2, T.$lq), j(3, u.$n6)], M);
				const N = i.$Io.as(r.Extensions.Workbench);
				N.registerWorkbenchContribution(P, u.LifecyclePhase.Eventually),
					N.registerWorkbenchContribution(k, u.LifecyclePhase.Eventually),
					(0, r.$s6)(L.ID, L, r.WorkbenchPhase.BlockRestore),
					(0, r.$s6)(D.ID, D, r.WorkbenchPhase.BlockRestore),
					C.$l && (0, r.$s6)(M.ID, M, r.WorkbenchPhase.BlockRestore),
					i.$Io
						.as(b.$No.Configuration)
						.registerConfiguration({
							id: "remote",
							title: t.localize(8917, null),
							type: "object",
							properties: {
								"remote.downloadExtensionsLocally": {
									type: "boolean",
									markdownDescription: t.localize(8918, null),
									default: !1,
								},
							},
						}),
					C.$m
						? m.$TX.registerCommandAndKeybindingRule({
								id: l.OpenLocalFileFolderCommand.ID,
								weight: m.KeybindingWeight.WorkbenchContrib,
								primary: d.KeyMod.CtrlCmd | d.KeyCode.KeyO,
								when: l.$l5c,
								metadata: {
									description: l.OpenLocalFileFolderCommand.LABEL,
									args: [],
								},
								handler: l.OpenLocalFileFolderCommand.handler(),
							})
						: (m.$TX.registerCommandAndKeybindingRule({
								id: l.OpenLocalFileCommand.ID,
								weight: m.KeybindingWeight.WorkbenchContrib,
								primary: d.KeyMod.CtrlCmd | d.KeyCode.KeyO,
								when: l.$l5c,
								metadata: {
									description: l.OpenLocalFileCommand.LABEL,
									args: [],
								},
								handler: l.OpenLocalFileCommand.handler(),
							}),
							m.$TX.registerCommandAndKeybindingRule({
								id: l.OpenLocalFolderCommand.ID,
								weight: m.KeybindingWeight.WorkbenchContrib,
								primary: (0, d.$os)(d.$ps, d.KeyMod.CtrlCmd | d.KeyCode.KeyO),
								mac: {
									primary: (0, d.$os)(d.$qs, d.KeyMod.CtrlCmd | d.KeyCode.KeyO),
								},
								when: l.$l5c,
								metadata: {
									description: l.OpenLocalFolderCommand.LABEL,
									args: [],
								},
								handler: l.OpenLocalFolderCommand.handler(),
							})),
					m.$TX.registerCommandAndKeybindingRule({
						id: l.SaveLocalFileCommand.ID,
						weight: m.KeybindingWeight.WorkbenchContrib,
						primary: d.KeyMod.CtrlCmd | d.KeyMod.Shift | d.KeyCode.KeyS,
						when: l.$l5c,
						metadata: { description: l.SaveLocalFileCommand.LABEL, args: [] },
						handler: l.SaveLocalFileCommand.handler(),
					});
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[3583],
		he([
			1, 0, 4, 253, 57, 25, 245, 78, 19, 54, 5, 1860, 256, 10, 22, 41, 87, 111,
			24, 37, 61, 73, 165, 23, 172, 31, 65, 18, 116, 34, 45,
		]),
		function (
			ce,
			e,
			t,
			i,
			w,
			E,
			C,
			d,
			m,
			r,
			u,
			a,
			h,
			c,
			n,
			g,
			p,
			o,
			f,
			b,
			s,
			l,
			y,
			$,
			v,
			S,
			I,
			T,
			P,
			k,
			L,
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$n5c = void 0),
				(t = mt(t)),
				(m = mt(m)),
				(o = xi(o));
			let D = class {
				constructor(N, A, R, O, B, U, z, F, x, H, q, V, G, K, J, W, X, Y) {
					(this.a = N),
						(this.b = A),
						(this.c = R),
						(this.d = O),
						(this.f = B),
						(this.g = U),
						(this.h = z),
						(this.i = F),
						(this.j = x),
						(this.k = H),
						(this.l = q),
						(this.m = V),
						(this.n = G),
						(this.o = K),
						(this.p = J),
						(this.q = W),
						(this.r = X),
						(this.s = Y);
				}
				async defaultFilePath(N = this.H(), A = this.I()) {
					let R = this.c.getLastActiveFile(N, A);
					return (
						R ? (R = m.$mh(R)) : (R = this.c.getLastActiveWorkspaceRoot(N, A)),
						R || (R = await this.preferredHome(N)),
						R
					);
				}
				async defaultFolderPath(N = this.H(), A = this.I()) {
					let R = this.c.getLastActiveWorkspaceRoot(N, A);
					return (
						R || (R = this.c.getLastActiveFile(N, A)),
						R ? m.$mh(R) : this.preferredHome(N)
					);
				}
				async preferredHome(N = this.H()) {
					const A = N === $.Schemas.file,
						R = this.g.inspect("files.dialog.defaultPath"),
						O = A ? R.userLocalValue : R.userRemoteValue;
					if (O && (A ? (0, r.$nc)(O) : (await this.n.path).isAbsolute(O))) {
						const U = A ? (0, r.$mc)(O) : (await this.n.path).normalize(O),
							z = m.$xh(
								await this.n.fileURI(U),
								this.d.remoteAuthority,
								this.n.defaultUriScheme,
							);
						if (await this.h.exists(z)) return z;
					}
					return this.n.userHome({ preferLocal: A });
				}
				async defaultWorkspacePath(N = this.H()) {
					let A;
					if (this.b.getWorkbenchState() === E.WorkbenchState.WORKSPACE) {
						const R = this.b.getWorkspace().configuration;
						R?.scheme === N &&
							(0, E.$ej)(R, this.d) &&
							!(0, E.$bj)(R) &&
							(A = m.$mh(R));
					}
					return A || (A = await this.defaultFilePath(N)), A;
				}
				async showSaveConfirm(N) {
					return this.t()
						? (this.r.trace(
								"FileDialogService: refused to show save confirmation dialog in tests.",
							),
							w.ConfirmResult.DONT_SAVE)
						: this.u(N);
				}
				t() {
					return (this.d.isExtensionDevelopment &&
						this.d.extensionTestsLocationURI) ||
						this.d.shadowWindowForWorkspaceId
						? !0
						: !!this.d.enableSmokeTestDriver;
				}
				async u(N) {
					if (N.length === 0) return w.ConfirmResult.DONT_SAVE;
					let A,
						R = t.localize(12197, null);
					N.length === 1
						? (A = t.localize(
								12198,
								null,
								typeof N[0] == "string" ? N[0] : m.$kh(N[0]),
							))
						: ((A = t.localize(12199, null, N.length)),
							(R =
								(0, w.$JO)(N) +
								`
` +
								R));
					const { result: O } = await this.j.prompt({
						type: o.default.Warning,
						message: A,
						detail: R,
						buttons: [
							{
								label:
									N.length > 1
										? t.localize(12200, null)
										: t.localize(12201, null),
								run: () => w.ConfirmResult.SAVE,
							},
							{
								label: t.localize(12202, null),
								run: () => w.ConfirmResult.DONT_SAVE,
							},
						],
						cancelButton: { run: () => w.ConfirmResult.CANCEL },
					});
					return O;
				}
				v(N, A) {
					return N === $.Schemas.untitled
						? [$.Schemas.file]
						: N !== $.Schemas.file
							? [N, $.Schemas.file]
							: [N];
				}
				async w(N, A, R) {
					const O = t.localize(12203, null),
						B = this.v(N),
						U = await this.F({
							canSelectFiles: !0,
							canSelectFolders: !0,
							canSelectMany: !1,
							defaultUri: A.defaultUri,
							title: O,
							availableFileSystems: B,
						});
					if (U) {
						const z = await this.h.stat(U),
							F = z.isDirectory ? { folderUri: U } : { fileUri: U };
						!(0, i.$tY)(F) && (0, i.$vY)(F) && this.y(F.fileUri),
							z.isDirectory || A.forceNewWindow || R
								? await this.a.openWindow([F], {
										forceNewWindow: A.forceNewWindow,
										remoteAuthority: A.remoteAuthority,
									})
								: await this.p.openEditors(
										[
											{
												resource: U,
												options: {
													source: P.EditorOpenSource.USER,
													pinned: !0,
												},
											},
										],
										void 0,
										{ validateTrust: !0 },
									);
					}
				}
				async x(N, A, R) {
					const O = t.localize(12204, null),
						B = this.v(N),
						U = await this.F({
							canSelectFiles: !0,
							canSelectFolders: !1,
							canSelectMany: !1,
							defaultUri: A.defaultUri,
							title: O,
							availableFileSystems: B,
						});
					U &&
						(this.y(U),
						A.forceNewWindow || R
							? await this.a.openWindow([{ fileUri: U }], {
									forceNewWindow: A.forceNewWindow,
									remoteAuthority: A.remoteAuthority,
								})
							: await this.p.openEditors(
									[
										{
											resource: U,
											options: { source: P.EditorOpenSource.USER, pinned: !0 },
										},
									],
									void 0,
									{ validateTrust: !0 },
								));
				}
				y(N) {
					this.l.addRecentlyOpened([
						{ fileUri: N, label: this.m.getUriLabel(N) },
					]);
				}
				async z(N, A) {
					const R = t.localize(12205, null),
						O = this.v(N, !0),
						B = await this.F({
							canSelectFiles: !1,
							canSelectFolders: !0,
							canSelectMany: !1,
							defaultUri: A.defaultUri,
							title: R,
							availableFileSystems: O,
						});
					if (B)
						return this.a.openWindow([{ folderUri: B }], {
							forceNewWindow: A.forceNewWindow,
							remoteAuthority: A.remoteAuthority,
						});
				}
				async A(N, A) {
					const R = t.localize(12206, null),
						O = [{ name: t.localize(12207, null), extensions: [E.$9i] }],
						B = this.v(N, !0),
						U = await this.F({
							canSelectFiles: !0,
							canSelectFolders: !1,
							canSelectMany: !1,
							defaultUri: A.defaultUri,
							title: R,
							filters: O,
							availableFileSystems: B,
						});
					if (U)
						return this.a.openWindow([{ workspaceUri: U }], {
							forceNewWindow: A.forceNewWindow,
							remoteAuthority: A.remoteAuthority,
						});
				}
				async B(N, A) {
					A.availableFileSystems || (A.availableFileSystems = this.v(N)),
						(A.title = t.localize(12208, null));
					const R = await this.G(A);
					return R && this.y(R), R;
				}
				async C(N, A) {
					return (
						A.availableFileSystems || (A.availableFileSystems = this.v(N)),
						this.G(A)
					);
				}
				async D(N, A) {
					A.availableFileSystems ||
						(A.availableFileSystems = this.v(N, A.canSelectFolders));
					const R = await this.F(A);
					return R ? [R] : void 0;
				}
				E() {
					return this.f.createInstance(a.$m5c);
				}
				F(N) {
					return this.E().showOpenDialog(N);
				}
				G(N) {
					return this.E().showSaveDialog(N);
				}
				H(N) {
					return N ?? this.n.defaultUriScheme;
				}
				I() {
					return this.d.remoteAuthority;
				}
				J(N) {
					return (
						(N.availableFileSystems && N.availableFileSystems[0]) ||
						this.H(N.defaultUri?.scheme)
					);
				}
				K(N) {
					if (N.availableFileSystems && N.availableFileSystems.length > 0)
						return N.availableFileSystems;
					const A = [$.Schemas.file];
					return this.d.remoteAuthority && A.unshift($.Schemas.vscodeRemote), A;
				}
				L(N, A) {
					const R = {
							defaultUri: N,
							title: t.localize(12209, null),
							availableFileSystems: A,
						},
						O = N ? m.$lh(N) : void 0;
					let B;
					const U = this.k.getSortedRegisteredLanguageNames(),
						z = (0, f.$Lb)(
							U.map(({ languageName: F, languageId: x }) => {
								const H = this.k.getExtensions(x);
								if (!H.length) return null;
								const q = {
										name: F,
										extensions: (0, f.$Qb)(H)
											.slice(0, 10)
											.map((G) => (0, b.$sf)(G, ".")),
									},
									V = O || v.$$M;
								if (!B && H.includes(V)) {
									B = q;
									const G = (0, b.$sf)(V, ".");
									return (
										q.extensions.includes(G) || q.extensions.unshift(G), null
									);
								}
								return q;
							}),
						);
					return (
						!B &&
							O &&
							(B = {
								name: (0, b.$sf)(O, ".").toUpperCase(),
								extensions: [(0, b.$sf)(O, ".")],
							}),
						(R.filters = (0, f.$Lb)([
							{ name: t.localize(12210, null), extensions: ["*"] },
							B,
							...z,
							{ name: t.localize(12211, null), extensions: [""] },
						])),
						R
					);
				}
			};
			(e.$n5c = D),
				(e.$n5c = D =
					Ne(
						[
							j(0, p.$asb),
							j(1, E.$Vi),
							j(2, C.$Feb),
							j(3, d.$r8),
							j(4, u.$Li),
							j(5, c.$gj),
							j(6, n.$ll),
							j(7, g.$7rb),
							j(8, w.$GO),
							j(9, s.$nM),
							j(10, h.$cRb),
							j(11, l.$3N),
							j(12, y.$I8),
							j(13, S.$ek),
							j(14, T.$IY),
							j(15, I.$dtb),
							j(16, k.$ik),
							j(17, L.$0zb),
						],
						D,
					));
		},
	),
		define(
			de[3584],
			he([
				1, 0, 87, 57, 25, 245, 78, 9, 5, 10, 20, 22, 41, 110, 3583, 23, 61, 256,
				73, 165, 31, 65, 18, 34, 45, 7,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pdd = void 0);
				let I = class extends n.$n5c {
					constructor(P, k, L, D, M, N, A, R, O, B, U, z, F, x, H, q, V, G, K) {
						super(P, k, L, D, M, N, A, R, B, U, z, F, x, H, q, V, G, K),
							(this.M = O);
					}
					N(P) {
						return {
							forceNewWindow: P.forceNewWindow,
							telemetryExtraData: P.telemetryExtraData,
							defaultPath: P.defaultUri?.fsPath,
						};
					}
					O(P) {
						const k = this.g.getValue("files.simpleDialog.enable") === !0,
							L = this.g.getValue("window.openFilesInNewWindow") === "on";
						return {
							useSimplified:
								(P !== g.Schemas.file && P !== g.Schemas.vscodeUserData) || k,
							isSetting: L,
						};
					}
					async pickFileFolderAndOpen(P) {
						const k = this.J(P);
						P.defaultUri || (P.defaultUri = await this.defaultFilePath(k));
						const L = this.O(k);
						return L.useSimplified
							? this.w(k, P, L.isSetting)
							: this.M.pickFileFolderAndOpen(this.N(P));
					}
					async pickFileAndOpen(P) {
						const k = this.J(P);
						P.defaultUri || (P.defaultUri = await this.defaultFilePath(k));
						const L = this.O(k);
						return L.useSimplified
							? this.x(k, P, L.isSetting)
							: this.M.pickFileAndOpen(this.N(P));
					}
					async pickFolderAndOpen(P) {
						const k = this.J(P);
						return (
							P.defaultUri || (P.defaultUri = await this.defaultFolderPath(k)),
							this.O(k).useSimplified
								? this.z(k, P)
								: this.M.pickFolderAndOpen(this.N(P))
						);
					}
					async pickWorkspaceAndOpen(P) {
						P.availableFileSystems = this.K(P);
						const k = this.J(P);
						return (
							P.defaultUri ||
								(P.defaultUri = await this.defaultWorkspacePath(k)),
							this.O(k).useSimplified
								? this.A(k, P)
								: this.M.pickWorkspaceAndOpen(this.N(P))
						);
					}
					async pickFileToSave(P, k) {
						const L = this.J({ defaultUri: P, availableFileSystems: k }),
							D = this.L(P, k);
						if (this.O(L).useSimplified) return this.B(L, D);
						{
							const M = await this.M.showSaveDialog(this.P(D));
							if (M && !M.canceled && M.filePath) {
								const N = d.URI.file(M.filePath);
								return this.y(N), N;
							}
						}
					}
					P(P) {
						return (
							(P.defaultUri = P.defaultUri
								? d.URI.file(P.defaultUri.path)
								: void 0),
							{
								defaultPath: P.defaultUri?.fsPath,
								buttonLabel: P.saveLabel,
								filters: P.filters,
								title: P.title,
								targetWindowId: (0, S.$Ogb)().vscodeWindowId,
							}
						);
					}
					async showSaveDialog(P) {
						const k = this.J(P);
						if (this.O(k).useSimplified) return this.C(k, P);
						const L = await this.M.showSaveDialog(this.P(P));
						if (L && !L.canceled && L.filePath) return d.URI.file(L.filePath);
					}
					async showOpenDialog(P) {
						const k = this.J(P);
						if (this.O(k).useSimplified) return this.D(k, P);
						const L = {
							title: P.title,
							defaultPath: P.defaultUri?.fsPath,
							buttonLabel: P.openLabel,
							filters: P.filters,
							properties: [],
							targetWindowId: (0, S.$Ogb)().vscodeWindowId,
						};
						L.properties.push("createDirectory"),
							P.canSelectFiles && L.properties.push("openFile"),
							P.canSelectFolders && L.properties.push("openDirectory"),
							P.canSelectMany && L.properties.push("multiSelections");
						const D = await this.M.showOpenDialog(L);
						return D && Array.isArray(D.filePaths) && D.filePaths.length > 0
							? D.filePaths.map(d.URI.file)
							: void 0;
					}
				};
				(e.$pdd = I),
					(e.$pdd = I =
						Ne(
							[
								j(0, t.$asb),
								j(1, w.$Vi),
								j(2, E.$Feb),
								j(3, C.$r8),
								j(4, m.$Li),
								j(5, r.$gj),
								j(6, a.$ll),
								j(7, h.$7rb),
								j(8, c.$y7c),
								j(9, i.$GO),
								j(10, p.$nM),
								j(11, o.$cRb),
								j(12, f.$3N),
								j(13, b.$I8),
								j(14, s.$ek),
								j(15, y.$IY),
								j(16, l.$dtb),
								j(17, $.$ik),
								j(18, v.$0zb),
							],
							I,
						)),
					(0, u.$lK)(i.$IO, I, u.InstantiationType.Delayed);
			},
		),
		define(
			de[3585],
			he([
				1, 0, 4, 9, 3, 54, 6, 55, 30, 78, 25, 19, 222, 73, 175, 215, 52, 20,
				165, 53, 12, 143, 23, 21, 282, 24,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$swc = void 0);
				const I = n.$n2.registerExtensionPoint({
						extensionPoint: "resourceLabelFormatters",
						jsonSchema: {
							description: (0, t.localize)(12515, null),
							type: "array",
							items: {
								type: "object",
								required: ["scheme", "formatting"],
								properties: {
									scheme: {
										type: "string",
										description: (0, t.localize)(12516, null),
									},
									authority: {
										type: "string",
										description: (0, t.localize)(12517, null),
									},
									formatting: {
										description: (0, t.localize)(12518, null),
										type: "object",
										properties: {
											label: {
												type: "string",
												description: (0, t.localize)(12519, null),
											},
											separator: {
												type: "string",
												description: (0, t.localize)(12520, null),
											},
											stripPathStartingSeparator: {
												type: "boolean",
												description: (0, t.localize)(12521, null),
											},
											tildify: {
												type: "boolean",
												description: (0, t.localize)(12522, null),
											},
											workspaceSuffix: {
												type: "string",
												description: (0, t.localize)(12523, null),
											},
										},
									},
								},
							},
						},
					}),
					T = /\//g,
					P = /\$\{(scheme|authoritySuffix|authority|path|(query)\.(.+?))\}/g;
				function k(N) {
					return !!(N && N[2] === ":");
				}
				let L = class {
					constructor(A) {
						(this.a = new Map()),
							I.setHandler((R, O) => {
								for (const B of O.added)
									for (const U of B.value) {
										const z = { ...U };
										typeof z.formatting.label != "string" &&
											(z.formatting.label = "${authority}${path}"),
											typeof z.formatting.separator != "string" &&
												(z.formatting.separator = E.sep),
											!(0, b.$t2)(
												B.description,
												"contribLabelFormatterWorkspaceTooltip",
											) &&
												z.formatting.workspaceTooltip &&
												(z.formatting.workspaceTooltip = void 0),
											this.a.set(z, A.registerFormatter(z));
									}
								for (const B of O.removed)
									for (const U of B.value) (0, w.$Vc)(this.a.get(U));
							});
					}
				};
				(L = Ne([j(0, c.$3N)], L)),
					m.$Io
						.as(d.Extensions.Workbench)
						.registerWorkbenchContribution(L, p.LifecyclePhase.Restored);
				const D = 50;
				let M = class extends w.$1c {
					constructor(A, R, O, B, U, z) {
						super(),
							(this.m = A),
							(this.n = R),
							(this.q = O),
							(this.r = B),
							(this.b = this.D(new C.$re({ leakWarningThreshold: 400 }))),
							(this.onDidChangeFormatters = this.b.event),
							(this.h = s.OS),
							(this.j =
								O.defaultUriScheme === y.Schemas.file
									? this.q.userHome({ preferLocal: !0 })
									: void 0);
						const F = (this.c = new v.$eEb(
							"cachedResourceLabelFormatters2",
							U,
						));
						(this.g = F.getMemento(
							$.StorageScope.PROFILE,
							$.StorageTarget.MACHINE,
						)),
							(this.a = this.g?.formatters?.slice() || []),
							this.s();
					}
					async s() {
						const A = await this.r.getEnvironment();
						(this.h = A?.os ?? s.OS), (this.j = await this.q.userHome());
					}
					findFormatting(A) {
						let R;
						for (const O of this.a)
							if (O.scheme === A.scheme) {
								if (!O.authority && (!R || O.priority)) {
									R = O;
									continue;
								}
								if (!O.authority) continue;
								(0, g.$Ik)(
									O.authority.toLowerCase(),
									A.authority.toLowerCase(),
								) &&
									(!R ||
										!R.authority ||
										O.authority.length > R.authority.length ||
										(O.authority.length === R.authority.length &&
											O.priority)) &&
									(R = O);
							}
						return R ? R.formatting : void 0;
					}
					getUriLabel(A, R = {}) {
						let O = this.findFormatting(A);
						O && R.separator && (O = { ...O, separator: R.separator });
						const B = this.t(A, O, R);
						return !O && R.separator ? B.replace(T, R.separator) : B;
					}
					t(A, R, O = {}) {
						if (!R)
							return (0, h.$wO)(A, {
								os: this.h,
								tildify: this.j ? { userHome: this.j } : void 0,
								relative: O.relative
									? {
											noPrefix: O.noPrefix,
											getWorkspace: () => this.n.getWorkspace(),
											getWorkspaceFolder: (B) => this.n.getWorkspaceFolder(B),
										}
									: void 0,
							});
						if (O.relative && this.n) {
							let B = this.n.getWorkspaceFolder(A);
							if (!B) {
								const U = this.n.getWorkspace(),
									z = (0, S.$Sb)(U.folders);
								z &&
									A.scheme !== z.uri.scheme &&
									A.path.startsWith(E.$lc.sep) &&
									(B = this.n.getWorkspaceFolder(z.uri.with({ path: A.path })));
							}
							if (B) {
								const U = this.y(B.uri, R, O.noPrefix);
								let z = this.y(A, R, O.noPrefix),
									F = 0;
								for (; z[F] && z[F] === U[F]; ) F++;
								if (
									(!z[F] || z[F] === R.separator
										? (z = z.substring(1 + F))
										: F === U.length &&
											B.uri.path === E.$lc.sep &&
											(z = z.substring(F)),
									this.n.getWorkspace().folders.length > 1 && !O.noPrefix)
								) {
									const H = B?.name ?? (0, a.$jh)(B.uri);
									z = z ? `${H} \u2022 ${z}` : H;
								}
								return z;
							}
						}
						return this.y(A, R, O.noPrefix);
					}
					getUriBasenameLabel(A) {
						const R = this.findFormatting(A),
							O = this.t(A, R);
						let B;
						return (
							R?.separator === E.$kc.sep
								? (B = E.$kc)
								: R?.separator === E.$lc.sep
									? (B = E.$lc)
									: (B = this.h === s.OperatingSystem.Windows ? E.$kc : E.$lc),
							B.basename(O)
						);
					}
					getWorkspaceLabel(A, R) {
						if ((0, u.$4i)(A)) {
							const O = (0, u.$1i)(A);
							return (0, u.$Wi)(O) || (0, u.$2i)(O)
								? this.getWorkspaceLabel(O, R)
								: "";
						}
						return i.URI.isUri(A)
							? this.w(A, R)
							: (0, u.$Wi)(A)
								? this.w(A.uri, R)
								: (0, u.$2i)(A)
									? this.u(A.configPath, R)
									: "";
					}
					u(A, R) {
						if ((0, u.$aj)(A, this.m)) return (0, t.localize)(12524, null);
						if ((0, u.$bj)(A)) return (0, t.localize)(12525, null);
						let O = (0, a.$kh)(A);
						O.endsWith(u.$9i) && (O = O.substr(0, O.length - u.$9i.length - 1));
						let B;
						switch (R?.verbose) {
							case c.Verbosity.SHORT:
								B = O;
								break;
							case c.Verbosity.LONG:
								B = (0, t.localize)(
									12526,
									null,
									this.getUriLabel((0, a.$nh)((0, a.$mh)(A), O)),
								);
								break;
							case c.Verbosity.MEDIUM:
							default:
								B = (0, t.localize)(12527, null, O);
								break;
						}
						return R?.verbose === c.Verbosity.SHORT ? B : this.z(B, A);
					}
					w(A, R) {
						let O;
						switch (R?.verbose) {
							case c.Verbosity.LONG:
								O = this.getUriLabel(A);
								break;
							case c.Verbosity.SHORT:
							case c.Verbosity.MEDIUM:
							default:
								O = (0, a.$kh)(A) || E.$lc.sep;
								break;
						}
						return R?.verbose === c.Verbosity.SHORT ? O : this.z(O, A);
					}
					getSeparator(A, R) {
						return (
							this.findFormatting(i.URI.from({ scheme: A, authority: R }))
								?.separator || E.$lc.sep
						);
					}
					getHostLabel(A, R) {
						return (
							this.findFormatting(i.URI.from({ scheme: A, authority: R }))
								?.workspaceSuffix ||
							R ||
							""
						);
					}
					getHostTooltip(A, R) {
						return this.findFormatting(i.URI.from({ scheme: A, authority: R }))
							?.workspaceTooltip;
					}
					registerCachedFormatter(A) {
						const R = (this.g.formatters ??= []);
						let O = R.findIndex(
							(B) => B.scheme === A.scheme && B.authority === A.authority,
						);
						if ((O === -1 && R.length >= D && (O = D - 1), O === -1))
							R.unshift(A);
						else {
							for (let B = O; B > 0; B--) R[B] = R[B - 1];
							R[0] = A;
						}
						return this.c.saveMemento(), this.registerFormatter(A);
					}
					registerFormatter(A) {
						return (
							this.a.push(A),
							this.b.fire({ scheme: A.scheme }),
							{
								dispose: () => {
									(this.a = this.a.filter((R) => R !== A)),
										this.b.fire({ scheme: A.scheme });
								},
							}
						);
					}
					y(A, R, O) {
						let B = R.label.replace(P, (U, z, F, x) => {
							switch (z) {
								case "scheme":
									return A.scheme;
								case "authority":
									return A.authority;
								case "authoritySuffix": {
									const H = A.authority.indexOf("+");
									return H === -1 ? A.authority : A.authority.slice(H + 1);
								}
								case "path":
									return R.stripPathStartingSeparator
										? A.path.slice(A.path[0] === R.separator ? 1 : 0)
										: A.path;
								default: {
									if (F === "query") {
										const { query: H } = A;
										if (H && H[0] === "{" && H[H.length - 1] === "}")
											try {
												return JSON.parse(H)[x] || "";
											} catch {}
									}
									return "";
								}
							}
						});
						return (
							R.normalizeDriveLetter &&
								k(B) &&
								(B = B.charAt(1).toUpperCase() + B.substr(2)),
							R.tildify &&
								!O &&
								this.j &&
								(B = (0, h.$yO)(B, this.j.fsPath, this.h)),
							R.authorityPrefix && A.authority && (B = R.authorityPrefix + B),
							B.replace(T, R.separator)
						);
					}
					z(A, R) {
						const O = this.findFormatting(R),
							B =
								O && typeof O.workspaceSuffix == "string"
									? O.workspaceSuffix
									: void 0;
						return B ? `${A} [${B}]` : A;
					}
				};
				(e.$swc = M),
					(e.$swc = M =
						Ne(
							[
								j(0, r.$r8),
								j(1, u.$Vi),
								j(2, f.$I8),
								j(3, l.$$m),
								j(4, $.$lq),
								j(5, p.$n6),
							],
							M,
						)),
					(0, o.$lK)(c.$3N, M, o.InstantiationType.Delayed);
			},
		),
		define(
			de[3586],
			he([1, 0, 67, 960, 125, 10, 20, 155, 165, 5]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Rvc = void 0);
				let u = class extends i.$ZMb {
					constructor(h, c, n, g, p) {
						super(h, c, n, p), (this.Q = g);
					}
					M(h) {
						return super.M(h) || h.scheme === this.Q.defaultUriScheme;
					}
				};
				(e.$Rvc = u),
					(e.$Rvc = u =
						Ne(
							[j(0, E.$gj), j(1, w.$YO), j(2, d.$GN), j(3, m.$I8), j(4, r.$Li)],
							u,
						)),
					(0, C.$lK)(t.$QO, u, C.InstantiationType.Delayed);
			},
		),
		define(
			de[3587],
			he([1, 0, 20, 143, 151, 165, 25]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Hdd = void 0);
				let d = class extends E.$J8 {
					constructor(r, u, a) {
						super(u.userHome, r, u, a);
					}
				};
				(e.$Hdd = d),
					(e.$Hdd = d = Ne([j(0, i.$$m), j(1, w.$ucd), j(2, C.$Vi)], d)),
					(0, t.$lK)(E.$I8, d, t.InstantiationType.Delayed);
			},
		),
		define(
			de[3588],
			he([1, 0, 29, 3, 23, 12, 1614]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Web = e.$Veb = void 0),
					(e.$Veb = "remoteFilesystem");
				class d extends C.$Ueb {
					static register(r, u, a) {
						const h = r.getConnection();
						if (!h) return i.$1c.None;
						const c = new i.$Zc(),
							n = (async () => {
								try {
									const g = await r.getRawEnvironment();
									g
										? u.registerProvider(
												w.Schemas.vscodeRemote,
												c.add(new d(g, h)),
											)
										: a.error(
												"Cannot register remote filesystem provider. Remote environment doesnot exist.",
											);
								} catch (g) {
									a.error(
										"Cannot register remote filesystem provider. Error while fetching remote environment.",
										(0, t.$bb)(g),
									);
								}
							})();
						return (
							c.add(
								u.onWillActivateFileSystemProvider((g) => {
									g.scheme === w.Schemas.vscodeRemote && g.join(n);
								}),
							),
							c
						);
					}
					constructor(r, u) {
						super(u.getChannel(e.$Veb), {
							pathCaseSensitive: r.os === E.OperatingSystem.Linux,
						});
					}
				}
				e.$Web = d;
			},
		),
		define(
			de[839],
			he([
				1, 0, 4, 138, 6, 136, 3, 9, 10, 57, 34, 211, 21, 374, 25, 78, 53, 33,
				28, 82, 8,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$C8 =
						e.$B8 =
						e.OnPortForward =
						e.$w8 =
						e.$v8 =
						e.TunnelSource =
						e.TunnelCloseReason =
						e.$t8 =
						e.$s8 =
							void 0),
					(e.$u8 = S),
					(e.$x8 = P),
					(e.$y8 = k),
					(e.$z8 = L),
					(e.$A8 = M),
					(t = mt(t));
				const l = 10 * 1e3,
					y = "remote.tunnels.toRestore",
					$ = "remote.tunnels.toRestoreExpiration",
					v = 1e3 * 60 * 60 * 24 * 14;
				(e.$s8 = "onTunnel"),
					(e.$t8 = new s.$5j(
						"forwardedPortsViewEnabled",
						!1,
						t.localize(12638, null),
					));
				function S(R) {
					const O = R.match(
						/^([a-zA-Z0-9_-]+(?:\.[a-zA-Z0-9_-]+)*:)?([0-9]+)$/,
					);
					if (O)
						return {
							host: O[1]?.substring(0, O[1].length - 1) || "localhost",
							port: Number(O[2]),
						};
				}
				var I;
				(function (R) {
					(R.Other = "Other"),
						(R.User = "User"),
						(R.AutoForwardEnd = "AutoForwardEnd");
				})(I || (e.TunnelCloseReason = I = {}));
				var T;
				(function (R) {
					(R[(R.User = 0)] = "User"),
						(R[(R.Auto = 1)] = "Auto"),
						(R[(R.Extension = 2)] = "Extension");
				})(T || (e.TunnelSource = T = {})),
					(e.$v8 = { source: T.User, description: t.localize(12639, null) }),
					(e.$w8 = { source: T.Auto, description: t.localize(12640, null) });
				function P(R, O, B) {
					const U = R.get(L(O, B));
					if (U) return U;
					if ((0, c.$iO)(O))
						for (const z of c.$hO) {
							const F = L(z, B);
							if (R.has(F)) return R.get(F);
						}
					else if ((0, c.$kO)(O))
						for (const z of c.$jO) {
							const F = L(z, B);
							if (R.has(F)) return R.get(F);
						}
				}
				function k(R, O, B) {
					const U = P(R, O, B);
					if (U) return U;
					const z = (0, c.$kO)(O)
						? "localhost"
						: (0, c.$iO)(O)
							? "0.0.0.0"
							: void 0;
					if (z) return P(R, z, B);
				}
				function L(R, O) {
					return R + ":" + O;
				}
				var D;
				(function (R) {
					(R.Notify = "notify"),
						(R.OpenBrowser = "openBrowser"),
						(R.OpenBrowserOnce = "openBrowserOnce"),
						(R.OpenPreview = "openPreview"),
						(R.Silent = "silent"),
						(R.Ignore = "ignore");
				})(D || (e.OnPortForward = D = {}));
				function M(R) {
					return (
						R &&
						"host" in R &&
						typeof R.host == "string" &&
						"port" in R &&
						typeof R.port == "number" &&
						(!("detail" in R) || typeof R.detail == "string") &&
						(!("pid" in R) || typeof R.pid == "string")
					);
				}
				class N extends C.$1c {
					static {
						this.c = "remote.portsAttributes";
					}
					static {
						this.f = "remote.otherPortsAttributes";
					}
					static {
						this.g = /^(\d+)\-(\d+)$/;
					}
					static {
						this.h = /^([a-z0-9\-]+):(\d{1,5})$/;
					}
					constructor(O) {
						super(),
							(this.q = O),
							(this.j = []),
							(this.n = new w.$re()),
							(this.onDidChangeAttributes = this.n.event),
							this.D(
								O.onDidChangeConfiguration((B) => {
									(B.affectsConfiguration(N.c) ||
										B.affectsConfiguration(N.f)) &&
										this.r();
								}),
							),
							this.r();
					}
					r() {
						(this.j = this.w()), this.n.fire();
					}
					getAttributes(O, B, U) {
						let z = this.u(O, B, U, this.j, 0);
						const F = {
							label: void 0,
							onAutoForward: void 0,
							elevateIfNeeded: void 0,
							requireLocalPort: void 0,
							protocol: void 0,
						};
						for (; z >= 0; ) {
							const x = this.j[z];
							x.key === O
								? ((F.onAutoForward = x.onAutoForward ?? F.onAutoForward),
									(F.elevateIfNeeded =
										x.elevateIfNeeded !== void 0
											? x.elevateIfNeeded
											: F.elevateIfNeeded),
									(F.label = x.label ?? F.label),
									(F.requireLocalPort = x.requireLocalPort),
									(F.protocol = x.protocol))
								: ((F.onAutoForward = F.onAutoForward ?? x.onAutoForward),
									(F.elevateIfNeeded =
										F.elevateIfNeeded !== void 0
											? F.elevateIfNeeded
											: x.elevateIfNeeded),
									(F.label = F.label ?? x.label),
									(F.requireLocalPort =
										F.requireLocalPort !== void 0
											? F.requireLocalPort
											: void 0),
									(F.protocol = F.protocol ?? x.protocol)),
								(z = this.u(O, B, U, this.j, z + 1));
						}
						return F.onAutoForward !== void 0 ||
							F.elevateIfNeeded !== void 0 ||
							F.label !== void 0 ||
							F.requireLocalPort !== void 0 ||
							F.protocol !== void 0
							? F
							: this.z();
					}
					s(O) {
						return O.start !== void 0 && O.end !== void 0;
					}
					t(O) {
						return (
							O.host !== void 0 &&
							O.port !== void 0 &&
							(0, f.$lg)(O.host) &&
							(0, f.$pg)(O.port)
						);
					}
					u(O, B, U, z, F) {
						if (F >= z.length) return -1;
						const x = !(0, c.$iO)(B) && !(0, c.$kO)(B),
							q = z
								.slice(F)
								.findIndex((V) =>
									(0, f.$pg)(V.key)
										? x
											? !1
											: V.key === O
										: this.s(V.key)
											? x
												? !1
												: O >= V.key.start && O <= V.key.end
											: this.t(V.key)
												? O === V.key.port && B === V.key.host
												: U
													? V.key.test(U)
													: !1,
								);
						return q >= 0 ? q + F : -1;
					}
					w() {
						const O = this.q.getValue(N.c);
						if (!O || !(0, f.$ng)(O)) return [];
						const B = [];
						for (const z in O) {
							if (z === void 0) continue;
							const F = O[z];
							let x;
							if (Number(z)) x = Number(z);
							else if ((0, f.$lg)(z))
								if (N.g.test(z)) {
									const H = z.match(N.g);
									x = { start: Number(H[1]), end: Number(H[2]) };
								} else if (N.h.test(z)) {
									const H = z.match(N.h);
									x = { host: H[1], port: Number(H[2]) };
								} else {
									let H;
									try {
										H = RegExp(z);
									} catch {}
									H && (x = H);
								}
							x &&
								B.push({
									key: x,
									elevateIfNeeded: F.elevateIfNeeded,
									onAutoForward: F.onAutoForward,
									label: F.label,
									requireLocalPort: F.requireLocalPort,
									protocol: F.protocol,
								});
						}
						const U = this.q.getValue(N.f);
						return (
							U &&
								(this.m = {
									elevateIfNeeded: U.elevateIfNeeded,
									label: U.label,
									onAutoForward: U.onAutoForward,
									requireLocalPort: U.requireLocalPort,
									protocol: U.protocol,
								}),
							this.y(B)
						);
					}
					y(O) {
						function B(U, z) {
							return (0, f.$pg)(U.key)
								? U.key
								: z.s(U.key)
									? U.key.start
									: z.t(U.key)
										? U.key.port
										: Number.MAX_VALUE;
						}
						return O.sort((U, z) => B(U, this) - B(z, this));
					}
					z() {
						return this.m;
					}
					static providedActionToAction(O) {
						switch (O) {
							case c.ProvidedOnAutoForward.Notify:
								return D.Notify;
							case c.ProvidedOnAutoForward.OpenBrowser:
								return D.OpenBrowser;
							case c.ProvidedOnAutoForward.OpenBrowserOnce:
								return D.OpenBrowserOnce;
							case c.ProvidedOnAutoForward.OpenPreview:
								return D.OpenPreview;
							case c.ProvidedOnAutoForward.Silent:
								return D.Silent;
							case c.ProvidedOnAutoForward.Ignore:
								return D.Ignore;
							default:
								return;
						}
					}
					async addAttributes(O, B, U) {
						const F = this.q.inspect(N.c).userRemoteValue;
						let x;
						!F || !(0, f.$ng)(F) ? (x = {}) : (x = (0, b.$vo)(F)),
							x[`${O}`] || (x[`${O}`] = {});
						for (const H in B) x[`${O}`][H] = B[H];
						return this.q.updateValue(N.c, x, U);
					}
				}
				e.$B8 = N;
				let A = class extends C.$1c {
					constructor(O, B, U, z, F, x, H, q, V, G) {
						super(),
							(this.H = O),
							(this.I = B),
							(this.J = U),
							(this.L = z),
							(this.M = F),
							(this.N = x),
							(this.O = H),
							(this.P = q),
							(this.Q = V),
							(this.R = G),
							(this.c = new Map()),
							(this.g = new w.$re()),
							(this.onForwardPort = this.g.event),
							(this.h = new w.$re()),
							(this.onClosePort = this.h.event),
							(this.j = new w.$re()),
							(this.onPortName = this.j.event),
							(this.n = new w.$re()),
							(this.onCandidatesChanged = this.n.event),
							(this.s = new w.$re()),
							(this.onEnvironmentTunnelsSet = this.s.event),
							(this.t = !1),
							(this.u = void 0),
							(this.y = !1),
							(this.z = new w.$re()),
							(this.C = new Map()),
							(this.F = new Map()),
							(this.G = []),
							(this.db = new Date()),
							(this.configPortsAttributes = new N(U)),
							(this.r = this.ab()),
							this.D(
								this.configPortsAttributes.onDidChangeAttributes(this.jb, this),
							),
							(this.forwarded = new Map()),
							(this.f = new Map()),
							this.H.tunnels.then(async (K) => {
								const J = await this.getAttributes(
									K.map((W) => ({
										port: W.tunnelRemotePort,
										host: W.tunnelRemoteHost,
									})),
								);
								for (const W of K)
									if (W.localAddress) {
										const X = L(W.tunnelRemoteHost, W.tunnelRemotePort),
											Y = k(
												this.m ?? new Map(),
												W.tunnelRemoteHost,
												W.tunnelRemotePort,
											);
										this.forwarded.set(X, {
											remotePort: W.tunnelRemotePort,
											remoteHost: W.tunnelRemoteHost,
											localAddress: W.localAddress,
											protocol:
												J?.get(W.tunnelRemotePort)?.protocol ??
												c.TunnelProtocol.Http,
											localUri: await this.X(
												W.localAddress,
												J?.get(W.tunnelRemotePort),
											),
											localPort: W.tunnelLocalPort,
											name: J?.get(W.tunnelRemotePort)?.label,
											runningProcess: Y?.detail,
											hasRunningProcess: !!Y,
											pid: Y?.pid,
											privacy: W.privacy,
											source: e.$v8,
										}),
											this.f.set(X, W);
									}
							}),
							(this.detected = new Map()),
							this.D(
								this.H.onTunnelOpened(async (K) => {
									const J = L(K.tunnelRemoteHost, K.tunnelRemotePort);
									if (
										!k(
											this.forwarded,
											K.tunnelRemoteHost,
											K.tunnelRemotePort,
										) &&
										!k(this.detected, K.tunnelRemoteHost, K.tunnelRemotePort) &&
										!k(this.c, K.tunnelRemoteHost, K.tunnelRemotePort) &&
										K.localAddress
									) {
										const W = k(
												this.m ?? new Map(),
												K.tunnelRemoteHost,
												K.tunnelRemotePort,
											),
											X = (
												await this.getAttributes([
													{
														port: K.tunnelRemotePort,
														host: K.tunnelRemoteHost,
													},
												])
											)?.get(K.tunnelRemotePort);
										this.forwarded.set(J, {
											remoteHost: K.tunnelRemoteHost,
											remotePort: K.tunnelRemotePort,
											localAddress: K.localAddress,
											protocol: X?.protocol ?? c.TunnelProtocol.Http,
											localUri: await this.X(K.localAddress, X),
											localPort: K.tunnelLocalPort,
											name: X?.label,
											closeable: !0,
											runningProcess: W?.detail,
											hasRunningProcess: !!W,
											pid: W?.pid,
											privacy: K.privacy,
											source: e.$v8,
										});
									}
									await this.cb(),
										this.f.set(J, K),
										this.g.fire(this.forwarded.get(J));
								}),
							),
							this.D(this.H.onTunnelClosed((K) => this.W(K, I.Other))),
							this.U();
					}
					S() {
						return this.Q.extensions.find((O) =>
							O.activationEvents?.includes(e.$s8),
						)
							? (this.R.createKey(e.$t8.key, !0), !0)
							: !1;
					}
					U() {
						if (this.S()) return;
						const O = this.D(
							this.Q.onDidRegisterExtensions(() => {
								this.S() && O.dispose();
							}),
						);
					}
					async W(O, B) {
						const U = L(O.host, O.port);
						this.forwarded.has(U) &&
							(this.forwarded.delete(U), await this.cb(), this.h.fire(O));
					}
					X(O, B) {
						if (O.startsWith("http")) return d.URI.parse(O);
						const U = B?.protocol ?? "http";
						return d.URI.parse(`${U}://${O}`);
					}
					async Y(O) {
						const B = this.N.getWorkspace(),
							U = B.configuration
								? (0, E.$Aj)(B.configuration.path)
								: B.folders.length > 0
									? (0, E.$Aj)(B.folders[0].uri.path)
									: void 0;
						if (U === void 0) {
							this.O.debug(
								"Could not get workspace hash for forwarded ports storage key.",
							);
							return;
						}
						return `${O}.${this.L.remoteAuthority}.${U}`;
					}
					async Z() {
						return this.Y(y);
					}
					async $() {
						return this.Y($);
					}
					async ab() {
						const O = this.I.get(y, h.StorageScope.WORKSPACE);
						if (O)
							return (
								this.I.remove(y, h.StorageScope.WORKSPACE), await this.cb(), O
							);
						const B = await this.Z();
						if (B) return this.I.get(B, h.StorageScope.PROFILE);
					}
					async restoreForwarded() {
						if ((this.bb(), this.J.getValue("remote.restoreForwardedPorts"))) {
							const O = await this.r;
							if (O && O !== this.w) {
								const B = JSON.parse(O) ?? [];
								this.O.trace(
									`ForwardedPorts: (TunnelModel) restoring ports ${B.map((U) => U.remotePort).join(", ")}`,
								);
								for (const U of B) {
									const z = k(this.detected, U.remoteHost, U.remotePort);
									(U.source.source !== T.Extension && !z) ||
									(U.source.source === T.Extension && z)
										? await this.fb({
												remote: { host: U.remoteHost, port: U.remotePort },
												local: U.localPort,
												name: U.name,
												elevateIfNeeded: !0,
												source: U.source,
											})
										: U.source.source === T.Extension &&
											!z &&
											this.C.set(L(U.remoteHost, U.remotePort), U);
								}
							}
						}
						if (((this.y = !0), this.z.fire(), !this.u)) {
							const O = await this.Z();
							(this.u = this.D(new C.$Zc())),
								this.u.add(
									this.I.onDidChangeValue(
										h.StorageScope.PROFILE,
										void 0,
										this.u,
									)(async (B) => {
										B.key === O &&
											((this.r = Promise.resolve(
												this.I.get(O, h.StorageScope.PROFILE),
											)),
											await this.restoreForwarded());
									}),
								);
						}
					}
					bb() {
						const O = this.I.keys(
							h.StorageScope.PROFILE,
							h.StorageTarget.USER,
						).filter((B) => B.startsWith($));
						for (const B of O) {
							const U = this.I.getNumber(B, h.StorageScope.PROFILE);
							if (U && U < Date.now()) {
								this.r = Promise.resolve(void 0);
								const z = B.replace($, y);
								this.I.remove(B, h.StorageScope.PROFILE),
									this.I.remove(z, h.StorageScope.PROFILE);
							}
						}
					}
					async cb() {
						if (this.J.getValue("remote.restoreForwardedPorts")) {
							const O = Array.from(this.forwarded.values()),
								B = O.map((x) => ({
									remoteHost: x.remoteHost,
									remotePort: x.remotePort,
									localPort: x.localPort,
									name: x.name,
									localAddress: x.localAddress,
									localUri: x.localUri,
									protocol: x.protocol,
									source: x.source,
								}));
							let U;
							O.length > 0 && (U = JSON.stringify(B));
							const z = await this.Z(),
								F = await this.$();
							!U && z && F
								? (this.I.remove(z, h.StorageScope.PROFILE),
									this.I.remove(F, h.StorageScope.PROFILE))
								: U !== this.w &&
									z &&
									F &&
									(this.I.store(
										z,
										U,
										h.StorageScope.PROFILE,
										h.StorageTarget.USER,
									),
									this.I.store(
										F,
										Date.now() + v,
										h.StorageScope.PROFILE,
										h.StorageTarget.USER,
									)),
								(this.w = U);
						}
					}
					async eb(O, B, U) {
						if (
							!O.tunnelLocalPort ||
							!U?.requireLocalPort ||
							O.tunnelLocalPort === B
						)
							return;
						const z = new Date();
						if (this.db.getTime() + l > z.getTime()) return;
						this.db = z;
						const F = t.localize(
							12641,
							null,
							B,
							O.tunnelRemotePort,
							O.tunnelLocalPort,
						);
						return this.P.info(F);
					}
					async forward(O, B) {
						return (
							!this.y &&
								this.L.remoteAuthority &&
								(await w.Event.toPromise(this.z.event)),
							this.fb(O, B)
						);
					}
					async fb(O, B) {
						await this.Q.activateByEvent(e.$s8);
						const U = k(this.forwarded, O.remote.host, O.remote.port);
						B =
							B ??
							(B !== null
								? (await this.getAttributes([O.remote]))?.get(O.remote.port)
								: void 0);
						const z = O.local !== void 0 ? O.local : O.remote.port;
						let F;
						if (U) return this.hb(U, O, B);
						{
							const x = this.L.remoteAuthority,
								H = x
									? {
											getAddress: async () =>
												(await this.M.resolveAuthority(x)).authority,
										}
									: void 0,
								q = L(O.remote.host, O.remote.port);
							this.c.set(q, !0), (O = this.gb(q, O));
							const V = await this.H.openTunnel(
								H,
								O.remote.host,
								O.remote.port,
								void 0,
								z,
								O.elevateIfNeeded ? O.elevateIfNeeded : B?.elevateIfNeeded,
								O.privacy,
								B?.protocol,
							);
							if (typeof V == "string") F = V;
							else if (V && V.localAddress) {
								const G = k(this.m ?? new Map(), O.remote.host, O.remote.port),
									K = V.protocol
										? V.protocol === c.TunnelProtocol.Https
											? c.TunnelProtocol.Https
											: c.TunnelProtocol.Http
										: (B?.protocol ?? c.TunnelProtocol.Http),
									J = {
										remoteHost: V.tunnelRemoteHost,
										remotePort: V.tunnelRemotePort,
										localPort: V.tunnelLocalPort,
										name: B?.label ?? O.name,
										closeable: !0,
										localAddress: V.localAddress,
										protocol: K,
										localUri: await this.X(V.localAddress, B),
										runningProcess: G?.detail,
										hasRunningProcess: !!G,
										pid: G?.pid,
										source: O.source ?? e.$v8,
										privacy: V.privacy,
									};
								return (
									this.forwarded.set(q, J),
									this.f.set(q, V),
									this.c.delete(q),
									await this.cb(),
									await this.eb(V, z, B),
									this.g.fire(J),
									V
								);
							}
							this.c.delete(q);
						}
						return F;
					}
					gb(O, B) {
						const U = this.C.has(O) ? this.C : this.F.has(O) ? this.F : void 0;
						if (U) {
							const z = U.get(O);
							U.delete(O),
								z &&
									((B.name = z.name ?? B.name),
									(B.local =
										("local" in z
											? z.local
											: "localPort" in z
												? z.localPort
												: void 0) ?? B.local),
									(B.privacy = B.privacy));
						}
						return B;
					}
					async hb(O, B, U) {
						const z = U?.label ?? B.name;
						let F;
						(function (H) {
							(H[(H.None = 0)] = "None"),
								(H[(H.Fire = 1)] = "Fire"),
								(H[(H.Reopen = 2)] = "Reopen");
						})(F || (F = {}));
						let x = F.None;
						switch (
							(z !== O.name && ((O.name = z), (x = F.Fire)),
							(U?.protocol || O.protocol !== c.TunnelProtocol.Http) &&
								U?.protocol !== O.protocol &&
								((B.source = O.source), (x = F.Reopen)),
							B.privacy && O.privacy !== B.privacy && (x = F.Reopen),
							x)
						) {
							case F.Fire: {
								this.g.fire();
								break;
							}
							case F.Reopen:
								await this.close(O.remoteHost, O.remotePort, I.User),
									await this.fb(B, U);
						}
						return k(this.f, B.remote.host, B.remote.port);
					}
					async name(O, B, U) {
						const z = k(this.forwarded, O, B),
							F = L(O, B);
						if (z) {
							(z.name = U), await this.cb(), this.j.fire({ host: O, port: B });
							return;
						} else
							this.detected.has(F) &&
								((this.detected.get(F).name = U),
								this.j.fire({ host: O, port: B }));
					}
					async close(O, B, U) {
						const z = L(O, B),
							F = this.forwarded.get(z);
						return (
							U === I.AutoForwardEnd &&
								F &&
								F.source.source === T.Auto &&
								this.F.set(z, {
									local: F.localPort,
									name: F.name,
									privacy: F.privacy,
								}),
							await this.H.closeTunnel(O, B),
							this.W({ host: O, port: B }, U)
						);
					}
					address(O, B) {
						const U = L(O, B);
						return (this.forwarded.get(U) || this.detected.get(U))
							?.localAddress;
					}
					get environmentTunnelsSet() {
						return this.t;
					}
					addEnvironmentTunnels(O) {
						if (O)
							for (const B of O) {
								const U = k(
										this.m ?? new Map(),
										B.remoteAddress.host,
										B.remoteAddress.port,
									),
									z =
										typeof B.localAddress == "string"
											? B.localAddress
											: L(B.localAddress.host, B.localAddress.port);
								this.detected.set(
									L(B.remoteAddress.host, B.remoteAddress.port),
									{
										remoteHost: B.remoteAddress.host,
										remotePort: B.remoteAddress.port,
										localAddress: z,
										protocol: c.TunnelProtocol.Http,
										localUri: this.X(z),
										closeable: !1,
										runningProcess: U?.detail,
										hasRunningProcess: !!U,
										pid: U?.pid,
										privacy: c.TunnelPrivacyId.ConstantPrivate,
										source: {
											source: T.Extension,
											description: t.localize(12642, null),
										},
									},
								),
									this.H.setEnvironmentTunnel(
										B.remoteAddress.host,
										B.remoteAddress.port,
										z,
										c.TunnelPrivacyId.ConstantPrivate,
										c.TunnelProtocol.Http,
									);
							}
						(this.t = !0), this.s.fire(), this.g.fire();
					}
					setCandidateFilter(O) {
						this.q = O;
					}
					async setCandidates(O) {
						let B = O;
						this.q && (B = await this.q(O));
						const U = this.ib(B);
						this.O.trace(
							`ForwardedPorts: (TunnelModel) removed candidates ${Array.from(
								U.values(),
							)
								.map((z) => z.port)
								.join(", ")}`,
						),
							this.n.fire(U);
					}
					ib(O) {
						const B = this.m ?? new Map(),
							U = new Map();
						return (
							(this.m = U),
							O.forEach((z) => {
								const F = L(z.host, z.port);
								U.set(F, {
									host: z.host,
									port: z.port,
									detail: z.detail,
									pid: z.pid,
								}),
									B.has(F) && B.delete(F);
								const x = k(this.forwarded, z.host, z.port);
								x &&
									((x.runningProcess = z.detail),
									(x.hasRunningProcess = !0),
									(x.pid = z.pid));
							}),
							B.forEach((z, F) => {
								const x = S(F);
								if (!x) return;
								const H = k(this.forwarded, x.host, x.port);
								H &&
									((H.runningProcess = void 0),
									(H.hasRunningProcess = !1),
									(H.pid = void 0));
								const q = k(this.detected, x.host, x.port);
								q &&
									((q.runningProcess = void 0),
									(q.hasRunningProcess = !1),
									(q.pid = void 0));
							}),
							B
						);
					}
					get candidates() {
						return this.m ? Array.from(this.m.values()) : [];
					}
					get candidatesOrUndefined() {
						return this.m ? this.candidates : void 0;
					}
					async jb() {
						const O = Array.from(this.forwarded.values()),
							B = await this.getAttributes(
								O.map((U) => ({ port: U.remotePort, host: U.remoteHost })),
								!1,
							);
						if (B)
							for (const U of O) {
								const z = B.get(U.remotePort);
								(z?.protocol || U.protocol !== c.TunnelProtocol.Http) &&
									z?.protocol !== U.protocol &&
									(await this.fb(
										{
											remote: { host: U.remoteHost, port: U.remotePort },
											local: U.localPort,
											name: U.name,
											source: U.source,
										},
										z,
									)),
									z &&
										z.label &&
										z.label !== U.name &&
										(await this.name(U.remoteHost, U.remotePort, z.label));
							}
					}
					async getAttributes(O, B = !0) {
						const U = new Map(),
							z = new Map();
						O.forEach((V) => {
							const G = k(this.m ?? new Map(), c.$hO[0], V.port) ?? V;
							if (G) {
								U.set(V.port, G);
								const K = M(G) ? G.pid : void 0;
								z.has(K) || z.set(K, []), z.get(K)?.push(V.port);
							}
						});
						const F = new Map();
						if (
							(O.forEach((V) => {
								const G = this.configPortsAttributes.getAttributes(
									V.port,
									V.host,
									U.get(V.port)?.detail,
								);
								G && F.set(V.port, G);
							}),
							this.G.length === 0 || !B)
						)
							return F.size > 0 ? F : void 0;
						const x = await Promise.all(
								this.G.flatMap((V) =>
									Array.from(z.entries()).map((G) => {
										const K = G[1],
											J = U.get(K[0]);
										return V.providePortAttributes(
											K,
											J?.pid,
											J?.detail,
											o.CancellationToken.None,
										);
									}),
								),
							),
							H = new Map();
						if (
							(x.forEach((V) =>
								V.forEach((G) => {
									G && H.set(G.port, G);
								}),
							),
							!F && !H)
						)
							return;
						const q = new Map();
						return (
							O.forEach((V) => {
								const G = F.get(V.port),
									K = H.get(V.port);
								q.set(V.port, {
									elevateIfNeeded: G?.elevateIfNeeded,
									label: G?.label,
									onAutoForward:
										G?.onAutoForward ??
										N.providedActionToAction(K?.autoForwardAction),
									requireLocalPort: G?.requireLocalPort,
									protocol: G?.protocol,
								});
							}),
							q
						);
					}
					addAttributesProvider(O) {
						this.G.push(O);
					}
				};
				(e.$C8 = A),
					Ne([(0, i.$fi)(1e3)], A.prototype, "cb", null),
					(e.$C8 = A =
						Ne(
							[
								j(0, c.$cO),
								j(1, h.$lq),
								j(2, m.$gj),
								j(3, g.$r8),
								j(4, a.$3l),
								j(5, n.$Vi),
								j(6, u.$ik),
								j(7, r.$GO),
								j(8, p.$q2),
								j(9, s.$6j),
							],
							A,
						));
			},
		),
		define(
			de[519],
			he([1, 0, 4, 6, 5, 20, 21, 374, 839, 175]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.TunnelEditId =
						e.TunnelType =
						e.$bqc =
						e.$aqc =
						e.$_pc =
						e.$$pc =
						e.$0pc =
						e.$9pc =
						e.$8pc =
						e.$7pc =
						e.$6pc =
						e.$5pc =
							void 0),
					(t = mt(t)),
					(e.$5pc = (0, w.$Mi)("remoteExplorerService")),
					(e.$6pc = "remote.explorerType"),
					(e.$7pc = "~remote.forwardedPorts"),
					(e.$8pc = "~remote.forwardedPortsContainer"),
					(e.$9pc = "remote.autoForwardPorts"),
					(e.$0pc = "remote.autoForwardPortsSource"),
					(e.$$pc = "remote.autoForwardPortsFallback"),
					(e.$_pc = "process"),
					(e.$aqc = "output"),
					(e.$bqc = "hybrid");
				var u;
				(function (g) {
					(g.Candidate = "Candidate"),
						(g.Detected = "Detected"),
						(g.Forwarded = "Forwarded"),
						(g.Add = "Add");
				})(u || (e.TunnelType = u = {}));
				var a;
				(function (g) {
					(g[(g.None = 0)] = "None"),
						(g[(g.New = 1)] = "New"),
						(g[(g.Label = 2)] = "Label"),
						(g[(g.LocalPort = 3)] = "LocalPort");
				})(a || (e.TunnelEditId = a = {}));
				const h = {
						type: "object",
						required: ["id"],
						properties: {
							id: { description: t.localize(12630, null), type: "string" },
						},
					},
					c = r.$n2.registerExtensionPoint({
						extensionPoint: "remoteHelp",
						jsonSchema: {
							description: t.localize(12631, null),
							type: "object",
							properties: {
								getStarted: {
									description: t.localize(12632, null),
									oneOf: [{ type: "string" }, h],
								},
								documentation: {
									description: t.localize(12633, null),
									type: "string",
								},
								feedback: {
									description: t.localize(12634, null),
									type: "string",
									markdownDeprecationMessage: t.localize(
										12635,
										null,
										"`reportIssue`",
									),
								},
								reportIssue: {
									description: t.localize(12636, null),
									type: "string",
								},
								issues: {
									description: t.localize(12637, null),
									type: "string",
								},
							},
						},
					});
				let n = class {
					constructor(p, o, f) {
						(this.j = p),
							(this.k = o),
							(this.a = []),
							(this.b = new i.$re()),
							(this.onDidChangeTargetType = this.b.event),
							(this.c = new i.$re()),
							(this.onDidChangeHelpInformation = this.c.event),
							(this.d = []),
							(this.g = new i.$re()),
							(this.onDidChangeEditable = this.g.event),
							(this.h = new i.$re()),
							(this.onEnabledPortsFeatures = this.h.event),
							(this.i = !1),
							(this.namedProcesses = new Map()),
							(this.e = f.createInstance(m.$C8)),
							c.setHandler((b) => {
								this.d.push(...b), this.c.fire(b);
							});
					}
					get helpInformation() {
						return this.d;
					}
					set targetType(p) {
						const o = this.a.length > 0 ? this.a[0] : "",
							f = p.length > 0 ? p[0] : "";
						o !== f &&
							((this.a = p),
							this.j.store(
								e.$6pc,
								this.a.toString(),
								C.StorageScope.WORKSPACE,
								C.StorageTarget.MACHINE,
							),
							this.j.store(
								e.$6pc,
								this.a.toString(),
								C.StorageScope.PROFILE,
								C.StorageTarget.USER,
							),
							this.b.fire(this.a));
					}
					get targetType() {
						return this.a;
					}
					get tunnelModel() {
						return this.e;
					}
					forward(p, o) {
						return this.tunnelModel.forward(p, o);
					}
					close(p, o) {
						return this.tunnelModel.close(p.host, p.port, o);
					}
					setTunnelInformation(p) {
						p?.features && this.k.setTunnelFeatures(p.features),
							this.tunnelModel.addEnvironmentTunnels(p?.environmentTunnels);
					}
					setEditable(p, o, f) {
						f
							? (this.f = { tunnelItem: p, data: f, editId: o })
							: (this.f = void 0),
							this.g.fire(p ? { tunnel: p, editId: o } : void 0);
					}
					getEditableData(p, o) {
						return this.f &&
							((!p && p === this.f.tunnelItem) ||
								(p &&
									this.f.tunnelItem?.remotePort === p.remotePort &&
									this.f.tunnelItem.remoteHost === p.remoteHost &&
									this.f.editId === o))
							? this.f.data
							: void 0;
					}
					setCandidateFilter(p) {
						return p
							? (this.tunnelModel.setCandidateFilter(p),
								{
									dispose: () => {
										this.tunnelModel.setCandidateFilter(void 0);
									},
								})
							: { dispose: () => {} };
					}
					onFoundNewCandidates(p) {
						this.tunnelModel.setCandidates(p);
					}
					restore() {
						return this.tunnelModel.restoreForwarded();
					}
					enablePortsFeatures() {
						(this.i = !0), this.h.fire();
					}
					get portsFeaturesEnabled() {
						return this.i;
					}
				};
				(n = Ne([j(0, C.$lq), j(1, d.$cO), j(2, w.$Li)], n)),
					(0, E.$lK)(e.$5pc, n, E.InstantiationType.Delayed);
			},
		),
		define(
			de[3589],
			he([
				1, 0, 4, 88, 3466, 101, 519, 374, 3, 40, 10, 34, 143, 30, 81, 8, 839,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$cqc = void 0),
					(t = mt(t));
				let o = class extends m.$1c {
					constructor(b, s, l, y, $, v, S, I) {
						super(),
							(this.f = s),
							(this.g = l),
							(this.h = y),
							(this.j = $),
							(this.m = v),
							(this.n = S),
							(this.q = I),
							(this.b = !1),
							(this.c = new Map()),
							(this.s = !1),
							(this.a = b.getProxy(i.$mbb.ExtHostTunnelService)),
							this.D(l.onTunnelOpened(() => this.a.$onDidTunnelsChange())),
							this.D(l.onTunnelClosed(() => this.a.$onDidTunnelsChange()));
					}
					r() {
						return (
							(!!this.j.getValue(C.$9pc) || this.g.hasTunnelProvider) &&
							this.j.getValue(C.$0pc) !== C.$aqc
						);
					}
					async $setRemoteTunnelService(b) {
						this.f.namedProcesses.set(b, "Code Extension Host"),
							this.f.portsFeaturesEnabled
								? this.a.$registerCandidateFinder(this.r())
								: this.D(
										this.f.onEnabledPortsFeatures(() =>
											this.a.$registerCandidateFinder(this.r()),
										),
									),
							this.D(
								this.j.onDidChangeConfiguration(async (s) => {
									if (
										s.affectsConfiguration(C.$9pc) ||
										s.affectsConfiguration(C.$0pc)
									)
										return this.a.$registerCandidateFinder(this.r());
								}),
							),
							this.D(
								this.g.onAddedTunnelProvider(() =>
									this.a.$registerCandidateFinder(this.r()),
								),
							);
					}
					async $registerPortsAttributesProvider(b, s) {
						this.c.set(s, b),
							this.s ||
								(this.f.tunnelModel.addAttributesProvider(this), (this.s = !0));
					}
					async $unregisterPortsAttributesProvider(b) {
						this.c.delete(b);
					}
					async providePortAttributes(b, s, l, y) {
						if (this.c.size === 0) return [];
						const $ = Array.from(this.c.entries())
							.filter((v) => {
								const S = v[1],
									I =
										typeof S.portRange == "number"
											? [S.portRange, S.portRange + 1]
											: S.portRange,
									T = I ? b.some((k) => I[0] <= k && k < I[1]) : !0,
									P = !S.commandPattern || (l && l.match(S.commandPattern));
								return T && P;
							})
							.map((v) => v[0]);
						return $.length === 0
							? []
							: this.a.$providePortAttributes($, b, s, l, y);
					}
					async $openTunnel(b, s) {
						const l = await this.f.forward({
							remote: b.remoteAddress,
							local: b.localAddressPort,
							name: b.label,
							source: { source: p.TunnelSource.Extension, description: s },
							elevateIfNeeded: !1,
						});
						if (!(!l || typeof l == "string"))
							return (
								!this.b &&
									b.localAddressPort !== void 0 &&
									l.tunnelLocalPort !== void 0 &&
									this.g.isPortPrivileged(b.localAddressPort) &&
									l.tunnelLocalPort !== b.localAddressPort &&
									this.g.canElevate &&
									this.t(b, l, s),
								w.TunnelDtoConverter.fromServiceTunnel(l)
							);
					}
					async t(b, s, l) {
						return this.h.prompt(
							r.Severity.Info,
							t.localize(
								2580,
								null,
								l,
								b.remoteAddress.port,
								b.localAddressPort,
							),
							[
								{
									label: t.localize(2581, null, s.tunnelRemotePort),
									run: async () => {
										(this.b = !0),
											await this.f.close(
												{ host: s.tunnelRemoteHost, port: s.tunnelRemotePort },
												p.TunnelCloseReason.Other,
											),
											await this.f.forward({
												remote: b.remoteAddress,
												local: b.localAddressPort,
												name: b.label,
												source: {
													source: p.TunnelSource.Extension,
													description: l,
												},
												elevateIfNeeded: !0,
											}),
											(this.b = !1);
									},
								},
							],
						);
					}
					async $closeTunnel(b) {
						return this.f.close(b, p.TunnelCloseReason.Other);
					}
					async $getTunnels() {
						return (await this.g.tunnels).map((b) => ({
							remoteAddress: {
								port: b.tunnelRemotePort,
								host: b.tunnelRemoteHost,
							},
							localAddress: b.localAddress,
							privacy: b.privacy,
							protocol: b.protocol,
						}));
					}
					async $onFoundNewCandidates(b) {
						this.f.onFoundNewCandidates(b);
					}
					async $setTunnelProvider(b) {
						const s = {
							forwardPort: (l, y) =>
								this.a.$forwardPort(l, y).then((v) => {
									if (v) {
										if (typeof v == "string") return v;
									} else return;
									const S = v;
									return (
										this.m.trace(
											`ForwardedPorts: (MainThreadTunnelService) New tunnel established by tunnel provider: ${S?.remoteAddress.host}:${S?.remoteAddress.port}`,
										),
										{
											tunnelRemotePort: S.remoteAddress.port,
											tunnelRemoteHost: S.remoteAddress.host,
											localAddress:
												typeof S.localAddress == "string"
													? S.localAddress
													: (0, p.$z8)(
															S.localAddress.host,
															S.localAddress.port,
														),
											tunnelLocalPort:
												typeof S.localAddress != "string"
													? S.localAddress.port
													: void 0,
											public: S.public,
											privacy: S.privacy,
											protocol: S.protocol ?? d.TunnelProtocol.Http,
											dispose: async (I) => (
												this.m.trace(
													`ForwardedPorts: (MainThreadTunnelService) Closing tunnel from tunnel provider: ${S?.remoteAddress.host}:${S?.remoteAddress.port}`,
												),
												this.a.$closeTunnel(
													{
														host: S.remoteAddress.host,
														port: S.remoteAddress.port,
													},
													I,
												)
											),
										}
									);
								}),
						};
						b && this.g.setTunnelFeatures(b),
							this.g.setTunnelProvider(s),
							this.q.createKey(p.$t8.key, !0);
					}
					async $setCandidateFilter() {
						this.f.setCandidateFilter((b) => this.a.$applyCandidateFilter(b));
					}
					async $setCandidatePortSource(b) {
						this.n
							.getEnvironment()
							.then(() => {
								switch (b) {
									case i.CandidatePortSource.None: {
										c.$Io
											.as(n.$No.Configuration)
											.registerDefaultConfigurations([
												{ overrides: { "remote.autoForwardPorts": !1 } },
											]);
										break;
									}
									case i.CandidatePortSource.Output: {
										c.$Io
											.as(n.$No.Configuration)
											.registerDefaultConfigurations([
												{
													overrides: {
														"remote.autoForwardPortsSource": C.$aqc,
													},
												},
											]);
										break;
									}
									case i.CandidatePortSource.Hybrid: {
										c.$Io
											.as(n.$No.Configuration)
											.registerDefaultConfigurations([
												{
													overrides: {
														"remote.autoForwardPortsSource": C.$bqc,
													},
												},
											]);
										break;
									}
									default:
								}
							})
							.catch(() => {});
					}
				};
				(e.$cqc = o),
					(e.$cqc = o =
						Ne(
							[
								(0, E.$tmc)(i.$lbb.MainThreadTunnelService),
								j(1, C.$5pc),
								j(2, d.$cO),
								j(3, r.$4N),
								j(4, u.$gj),
								j(5, a.$ik),
								j(6, h.$$m),
								j(7, g.$6j),
							],
							o,
						));
			},
		),
		
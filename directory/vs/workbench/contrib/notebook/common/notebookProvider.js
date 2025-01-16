define(de[1849], he([1, 0, 215, 54, 70]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$LIb = void 0),
				(t = mt(t));
			class E {
				get selectors() {
					return this.a;
				}
				get options() {
					return this.b;
				}
				constructor(d) {
					(this.extension = d.extension),
						(this.id = d.id),
						(this.displayName = d.displayName),
						(this.a =
							d.selectors?.map((m) => ({
								include: m.filenamePattern,
								exclude: m.excludeFileNamePattern || "",
							})) || []),
						(this.priority = d.priority),
						(this.providerDisplayName = d.providerDisplayName),
						(this.b = {
							transientCellMetadata: {},
							transientDocumentMetadata: {},
							transientOutputs: !1,
							cellContentMetadata: {},
						});
				}
				update(d) {
					d.selectors && (this.a = d.selectors),
						d.options && (this.b = d.options);
				}
				matches(d) {
					return this.selectors?.some((m) => E.selectorMatches(m, d));
				}
				static selectorMatches(d, m) {
					if (
						(typeof d == "string" &&
							t.$Ik(d.toLowerCase(), (0, i.$sc)(m.fsPath).toLowerCase())) ||
						(t.$Kk(d) && t.$Ik(d, (0, i.$sc)(m.fsPath).toLowerCase()))
					)
						return !0;
					if (!(0, w.$36)(d)) return !1;
					const r = d.include,
						u = d.exclude;
					return t.$Ik(r, (0, i.$sc)(m.fsPath).toLowerCase())
						? !(u && t.$Ik(u, (0, i.$sc)(m.fsPath).toLowerCase()))
						: !1;
				}
				static possibleFileEnding(d) {
					for (const m of d) {
						const r = E.c(m);
						if (r) return r;
					}
				}
				static c(d) {
					const m = /^.*(\.[a-zA-Z0-9_-]+)$/;
					let r;
					if (typeof d == "string") r = d;
					else if (t.$Kk(d)) r = d.pattern;
					else if (d.include) return E.c(d.include);
					if (r) {
						const u = m.exec(r);
						if (u) return u[1];
					}
				}
			}
			e.$LIb = E;
		}),
		define(
			de[1850],
			he([
				1, 0, 42, 125, 10, 57, 22, 73, 44, 987, 70, 360, 509, 161, 399, 18, 53,
				170,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				var f;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wJc = void 0);
				let b = class extends a.$TIb {
					static {
						f = this;
					}
					static {
						this.ID = "workbench.editorinputs.replEditorInput";
					}
					constructor(l, y, $, v, S, I, T, P, k, L, D, M, N, A, R) {
						super(
							l,
							void 0,
							"jupyter-notebook",
							{},
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
						),
							(this.historyService = N),
							(this.bb = A),
							(this.ab = !1),
							(this.Z =
								l.scheme === "untitled" &&
								R.getValue(u.$56.InteractiveWindowPromptToSave) !== !0),
							(this.$ = y ?? this.cb(l));
					}
					cb(l) {
						if (!l) return "REPL";
						if (l.scheme === "untitled") {
							const $ = new RegExp("Untitled-(\\d+).").exec(l.path);
							if ($?.length === 2) return `REPL - ${$[1]}`;
						}
						const y = l.path.split("/").pop();
						return y ? `REPL - ${y}` : "REPL";
					}
					get typeId() {
						return f.ID;
					}
					get editorId() {
						return "repl";
					}
					getName() {
						return this.$;
					}
					get editorInputs() {
						return [this];
					}
					get capabilities() {
						const l = super.capabilities,
							y = this.Z ? m.EditorInputCapabilities.Scratchpad : 0;
						return l | m.EditorInputCapabilities.Readonly | y;
					}
					async resolve() {
						const l = await super.resolve();
						return l && (await this.db(l.notebook)), l;
					}
					async db(l) {
						const y = l.cells[l.cells.length - 1];
						(!y ||
							y.cellKind === u.CellKind.Markup ||
							y.outputs.length > 0 ||
							y.internalMetadata.executionOrder !== void 0) &&
							l.applyEdits(
								[
									{
										editType: u.CellEditType.Replace,
										index: l.cells.length,
										count: 0,
										cells: [
											{
												cellKind: u.CellKind.Code,
												language: "python",
												mime: void 0,
												outputs: [],
												source: "",
											},
										],
									},
								],
								!0,
								void 0,
								() => {},
								void 0,
								!1,
							);
					}
					async resolveInput(l) {
						if (this.Y) return this.Y.object.textEditorModel;
						const y = l.cells[l.cells.length - 1];
						if (!y)
							throw new Error(
								"The REPL editor requires at least one cell for the input box.",
							);
						return (
							(this.Y = await this.bb.createModelReference(y.uri)),
							this.Y.object.textEditorModel
						);
					}
					dispose() {
						this.ab ||
							((this.ab = !0),
							this.c?.object.revert({ soft: !0 }),
							this.Y?.dispose(),
							super.dispose());
					}
				};
				(e.$wJc = b),
					(e.$wJc =
						b =
						f =
							Ne(
								[
									j(2, c.$MIb),
									j(3, h.$OIb),
									j(4, E.$IO),
									j(5, d.$3N),
									j(6, C.$ll),
									j(7, o.$_Y),
									j(8, p.$q2),
									j(9, g.$IY),
									j(10, i.$XO),
									j(11, n.$QIb),
									j(12, r.$wnc),
									j(13, t.$MO),
									j(14, w.$gj),
								],
								b,
							));
			},
		),
		define(
			de[3506],
			he([1, 0, 413, 1839, 4, 14, 95, 268, 6]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$EOc = void 0),
					(w = mt(w));
				const r = w.localize(9273, null);
				class u extends t.$WCb {
					constructor(c, n, g, p, o, f, b, s, l) {
						super(c, n, g, p),
							(this.contextMenuService = o),
							(this.instantiationService = f),
							(this.filters = b),
							(this.ab = !1),
							(this.bb = this.D(new m.$re())),
							(this.onDidChangeAIToggle = this.bb.event),
							(this.cb = !1),
							(this.g = this.D(new i.$QFc(b, o, f, g, w.localize(9274, null)))),
							(this.$ = this.D(
								new a({ appendTitle: "", isChecked: !1, ...g.toggleStyles }),
							)),
							this.setAdditionalToggles([this.$]),
							this.db(),
							this.y.appendChild(this.g.container),
							this.g.container.classList.add("monaco-custom-toggle"),
							(this.filterVisible = l),
							(this.sparkleVisible = s),
							this.D(
								this.$.onChange(() => {
									this.J && (this.J.visible = !this.$.checked),
										this.L && (this.L.visible = !this.$.checked),
										this.M && (this.M.visible = !this.$.checked),
										this.$.checked
											? (this.g.visible = !1)
											: (this.filterVisible = this.cb),
										this.db();
								}),
							);
					}
					db() {
						this.inputBox.paddingRight =
							(this.M?.visible ? this.M.width() : 0) +
							(this.L?.visible ? this.L.width() : 0) +
							(this.J?.visible ? this.J.width() : 0) +
							(this.g.visible ? this.g.width() : 0) +
							(this.$.visible ? this.$.width() : 0);
					}
					set sparkleVisible(c) {
						(this.$.visible = c), this.db();
					}
					set filterVisible(c) {
						(this.cb = c),
							!(this.$.visible && this.$.checked) &&
								((this.g.visible = c), this.updateFilterStyles(), this.db());
					}
					setEnabled(c) {
						super.setEnabled(c),
							c && (!this.ab || !this.g.visible)
								? this.J?.enable()
								: this.J?.disable();
					}
					updateFilterStyles() {
						(this.ab =
							!this.filters.markupInput ||
							!this.filters.markupPreview ||
							!this.filters.codeInput ||
							!this.filters.codeOutput),
							this.g.applyStyles(this.ab);
					}
					get isAIEnabled() {
						return this.$.checked;
					}
				}
				e.$EOc = u;
				class a extends d.$8ib {
					constructor(c) {
						super({
							icon: E.$ak.sparkle,
							title: r + c.appendTitle,
							isChecked: c.isChecked,
							hoverDelegate: c.hoverDelegate ?? (0, C.$cib)("element"),
							inputActiveOptionBorder: c.inputActiveOptionBorder,
							inputActiveOptionForeground: c.inputActiveOptionForeground,
							inputActiveOptionBackground: c.inputActiveOptionBackground,
						});
					}
				}
			},
		),
		define(
			de[837],
			he([
				1, 0, 5, 22, 25, 17, 83, 356, 42, 20, 18, 3, 44, 23, 66, 108, 48, 56,
				191,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$O9b = e.$N9b = void 0),
					(e.$N9b = (0, t.$Mi)("aiFileInfoService"));
				let b = class extends a.$1c {
					constructor(l, y, $, v, S, I) {
						super(),
							(this.a = l),
							(this.b = y),
							(this.f = $),
							(this.h = v),
							(this.j = S),
							(this.m = I),
							(this.q = []),
							(this.r = !1),
							this._setupActiveGroupTracking();
					}
					get controlProvider() {
						return this.n;
					}
					registerControlProvider(l, y) {
						if (this.n) throw new Error("ControlProvider already registered");
						return (
							(this.n = y),
							(0, a.$Yc)(() => {
								this.n = void 0;
							})
						);
					}
					async getCurrentFileInfo(l, y) {
						if (y?.actuallyReadFromOverrideURI === !0 && l !== void 0) {
							const I = (await this.j.createModelReference(l)).object
									.textEditorModel,
								T = I.getValue(),
								P = I.getLanguageIdAtPosition(1, 1) ?? "";
							return new C.$Ws({
								cursorPosition: void 0,
								selection: void 0,
								relativeWorkspacePath: this.f.asRelativePath(l),
								contents: T,
								contentsStartAtLine: 1,
								languageId: P,
								alternativeVersionId: I.getAlternativeVersionId(),
								totalNumberOfLines: I.getLineCount(),
								workspaceRootPath:
									this.f.getWorkspaceFolder(l)?.uri.fsPath ?? "",
							});
						}
						const $ = this.getCurrentFileInfoSyncWithoutDataframes(l);
						if ($ === void 0) return $;
						let v = await this.getDataframesFromNotebook();
						return (
							v || (v = []),
							($.dataframes = v),
							($.contents = await this.h.cleanText(
								$.contents,
								$.relativeWorkspacePath,
							)),
							$
						);
					}
					async getDataframesFromNotebook() {
						const l = this.m.activeEditorPane?.input?.resource;
						if (!l || !l.path.endsWith(".ipynb")) return;
						if (!l) return [];
						const y = await this.controlProvider?.getDataframeSummary(l);
						return y
							? y.map(
									($) =>
										new C.$1s({
											name: $.name,
											shape: $.shape,
											dataDimensionality: $.dataDimensionality,
											columns: $.columns.map(
												(v) => new C.$2s({ key: v.key, type: v.type }),
											),
											rowCount: $.rowCount,
											indexColumn: $.indexColumn,
										}),
								)
							: [];
					}
					_setupActiveGroupTracking() {
						const l = (y) => {
							y !== void 0 &&
								((this.q = this.q.filter(($) => $ !== y)), this.q.push(y));
						};
						this.D(
							this.a.mainPart.onDidLayout(() => {
								if (this.r) return;
								this.r = !0;
								const y = this.a.groups.map(($) => $.id);
								(this.q = y.filter(($) => !this.q.includes($)).concat(this.q)),
									l(this.a.activeGroup.id);
							}),
						),
							this.D(
								this.a.onDidChangeActiveGroup((y) => {
									l(y.id);
								}),
							);
					}
					getLastActiveFileEditor() {
						let l = this.m.activeEditorPane;
						if (l?.input?.resource && (0, f.$n6b)(l.input.resource.scheme))
							return l;
						for (const y of this.q.slice().reverse())
							if (
								((l = this.a.getGroup(y)?.activeEditorPane),
								!(!l?.input?.resource || !(0, f.$n6b)(l.input.resource.scheme)))
							)
								break;
						return l;
					}
					getCurrentFileInfoSyncWithoutDataframes(l) {
						const y = this.getLastActiveFileEditor(),
							$ = y?.getControl();
						let v = l ?? h.$A1.getOriginalUri(y?.input);
						if (v?.scheme === c.Schemas.aiChat) return;
						const S = (0, g.$eJb)(y);
						let I = "",
							T,
							P,
							k;
						if (S) {
							const O = S.getCellsInRange();
							let B = S.getActiveCell()?.id,
								U = O.findIndex((V) => V.id === B);
							const z = O.map((V) => V.getText()),
								x = O.map((V) => V.model.outputs).map((V) => {
									const G = V.map((K) =>
										K.outputs
											.map((W) => {
												if (W.mime === "text/plain") return W.data.toString();
												if (W.mime === "application/vnd.code.notebook.error") {
													const X = W.data.toString();
													let Y = JSON.parse(X);
													const ie = Y.stack
														.replace(
															/\x1B\[([0-9]{1,2}(;[0-9]{1,2})?)?[m|K]/g,
															"",
														)
														.replace(/\u001b\[0/g, "");
													return (
														(Y = { ...Y, stack: ie }),
														JSON.stringify(Y, null, 2)
													);
												} else if (
													W.mime === "application/vnd.code.notebook.stderr"
												)
													return W.data.toString();
												return "";
											})
											.join(`

`),
									).join(`

`);
									return G.length > 400
										? G.slice(0, 200) +
												`
...output cropped...
` +
												G.slice(-200)
										: G;
								});
							let H = 0;
							(I = z
								.map((V, G) => {
									if (V === "" || V === void 0) return "";
									const K = `in[${G}]: ${V}`;
									if (x[G] === "" || x[G] === void 0) return K;
									const J = `out[${G}]: ${x[G]}`;
									return `${K}

${J}`;
								})
								.map(
									(V, G) => (
										G < U &&
											(H =
												H +
												V.split(`
`).length +
												2),
										V
									),
								)
								.join(`

`)),
								(v = S.textModel?.uri ?? v),
								(T = new p.$hL(H + 1, 1)),
								(P = new E.$iL(T.lineNumber, 1, T.lineNumber, 1));
						} else {
							const O = y?.getControl();
							if (
								((T = O?.getPosition() ?? new p.$hL(1, 1)),
								(P =
									O?.getSelection() ??
									new E.$iL(T.lineNumber, T.column, T.lineNumber, T.column)),
								(0, o.$$sb)(O))
							) {
								const U = O.getModel(),
									z = U?.original.getValue(),
									F = U?.modified.getValue();
								(I = `Original File:
${z}
Modified File:
${F}`),
									(v = U?.modified.uri);
							} else if ((0, o.$_sb)(O)) I = "";
							else {
								const B = O?.getModel();
								(I = B?.getValue() ?? ""), (k = B?.getAlternativeVersionId());
							}
						}
						let L = "";
						(0, o.$0sb)($) &&
							(L =
								$.getModel()?.getLanguageIdAtPosition(T.lineNumber, T.column) ??
								"");
						const D = new C.$ys({
								line: T.lineNumber - 1,
								column: T.column - 1,
							}),
							M = new C.$Ns({
								startPosition: new C.$ys({
									line: P.startLineNumber - 1,
									column: P.startColumn - 1,
								}),
								endPosition: new C.$ys({
									line: P.endLineNumber - 1,
									column: P.endColumn - 1,
								}),
							}),
							N = I.split(`
`).length;
						let A = 1;
						if (I.length > 100 * 2e4) {
							const B = I.split(`
`),
								U = D.line;
							let z = Math.max(0, U - Math.floor(2e3 / 2)),
								F = Math.min(B.length, U + Math.ceil(2e3 / 2));
							F - z < 2e3 &&
								(z === 0
									? (F = Math.min(B.length, z + 2e3))
									: F === B.length && (z = Math.max(0, F - 2e3))),
								(A = z + 1),
								(I = B.slice(z, F).join(`
`)),
								(D.line -= z),
								(M.startPosition.line -= z),
								(M.endPosition.line -= z);
						}
						return new C.$Ws({
							cursorPosition: D,
							selection: M,
							relativeWorkspacePath: v ? this.f.asRelativePath(v) : "",
							contents: I,
							contentsStartAtLine: A,
							languageId: L,
							alternativeVersionId: k,
							totalNumberOfLines: N,
						});
					}
				};
				(e.$O9b = b),
					(e.$O9b = b =
						Ne(
							[
								j(0, n.$EY),
								j(1, i.$ll),
								j(2, w.$Vi),
								j(3, d.$zIb),
								j(4, m.$MO),
								j(5, u.$IY),
							],
							b,
						)),
					(0, r.$lK)(e.$N9b, b, r.InstantiationType.Delayed);
			},
		),
		define(
			de[3507],
			he([1, 0, 4, 40, 610, 3, 6, 20, 50, 21]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				var u;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Hwc = void 0);
				let a = class extends E.$1c {
					static {
						u = this;
					}
					constructor(c) {
						super(),
							(this.c = c),
							(this.model = this.D(new w.$Cwc())),
							(this.a = this.D(new C.$re())),
							(this.onDidAddNotification = this.a.event),
							(this.b = this.D(new C.$re())),
							(this.onDidRemoveNotification = this.b.event),
							(this.j = this.D(new C.$re())),
							(this.onDidChangeFilter = this.j.event),
							(this.m = this.c.getBoolean(u.g, r.StorageScope.APPLICATION, !1)),
							(this.n = (() => {
								const n = new Map();
								for (const g of this.c.getObject(
									u.h,
									r.StorageScope.APPLICATION,
									[],
								))
									n.set(g.id, g);
								return n;
							})()),
							this.s(),
							this.f();
					}
					f() {
						this.D(
							this.model.onDidChangeNotification((c) => {
								switch (c.kind) {
									case w.NotificationChangeType.ADD:
									case w.NotificationChangeType.REMOVE: {
										const n =
												typeof c.item.sourceId == "string" &&
												typeof c.item.source == "string"
													? { id: c.item.sourceId, label: c.item.source }
													: c.item.source,
											g = {
												message: c.item.message.original,
												severity: c.item.severity,
												source: n,
												priority: c.item.priority,
											};
										c.kind === w.NotificationChangeType.ADD &&
											((0, i.$5N)(n) &&
												(this.n.has(n.id)
													? this.q(n)
													: this.setFilter({
															...n,
															filter: i.NotificationsFilter.OFF,
														})),
											this.a.fire(g)),
											c.kind === w.NotificationChangeType.REMOVE &&
												this.b.fire(g);
										break;
									}
								}
							}),
						);
					}
					static {
						this.g = "notifications.doNotDisturbMode";
					}
					static {
						this.h = "notifications.perSourceDoNotDisturbMode";
					}
					setFilter(c) {
						if (typeof c == "number") {
							if (this.m === (c === i.NotificationsFilter.ERROR)) return;
							(this.m = c === i.NotificationsFilter.ERROR),
								this.c.store(
									u.g,
									this.m,
									r.StorageScope.APPLICATION,
									r.StorageTarget.MACHINE,
								),
								this.s(),
								this.j.fire();
						} else {
							const n = this.n.get(c.id);
							if (n?.filter === c.filter && n.label === c.label) return;
							this.n.set(c.id, { id: c.id, label: c.label, filter: c.filter }),
								this.r(),
								this.s();
						}
					}
					getFilter(c) {
						return c
							? (this.n.get(c.id)?.filter ?? i.NotificationsFilter.OFF)
							: this.m
								? i.NotificationsFilter.ERROR
								: i.NotificationsFilter.OFF;
					}
					q(c) {
						const n = this.n.get(c.id);
						n &&
							n.label !== c.label &&
							(this.n.set(c.id, { id: c.id, label: c.label, filter: n.filter }),
							this.r());
					}
					r() {
						this.c.store(
							u.h,
							JSON.stringify([...this.n.values()]),
							r.StorageScope.APPLICATION,
							r.StorageTarget.MACHINE,
						);
					}
					getFilters() {
						return [...this.n.values()];
					}
					s() {
						this.model.setFilter({
							global: this.m
								? i.NotificationsFilter.ERROR
								: i.NotificationsFilter.OFF,
							sources: new Map(
								[...this.n.values()].map((c) => [c.id, c.filter]),
							),
						});
					}
					removeFilter(c) {
						this.n.delete(c) && (this.r(), this.s());
					}
					info(c) {
						if (Array.isArray(c)) {
							for (const n of c) this.info(n);
							return;
						}
						this.model.addNotification({
							severity: i.Severity.Info,
							message: c,
						});
					}
					warn(c) {
						if (Array.isArray(c)) {
							for (const n of c) this.warn(n);
							return;
						}
						this.model.addNotification({
							severity: i.Severity.Warning,
							message: c,
						});
					}
					error(c) {
						if (Array.isArray(c)) {
							for (const n of c) this.error(n);
							return;
						}
						this.model.addNotification({
							severity: i.Severity.Error,
							message: c,
						});
					}
					notify(c) {
						const n = new E.$Zc();
						if (c.neverShowAgain) {
							const p = this.t(c.neverShowAgain),
								o = c.neverShowAgain.id;
							if (this.c.getBoolean(o, p)) return new i.$6N();
							const f = n.add(
									new m.$rj(
										"workbench.notification.neverShowAgain",
										(0, t.localize)(12570, null),
										void 0,
										!0,
										async () => {
											g.close(), this.c.store(o, !0, p, r.StorageTarget.USER);
										},
									),
								),
								b = {
									primary: c.actions?.primary || [],
									secondary: c.actions?.secondary || [],
								};
							c.neverShowAgain.isSecondary
								? (b.secondary = [...b.secondary, f])
								: (b.primary = [f, ...b.primary]),
								(c.actions = b);
						}
						const g = this.model.addNotification(c);
						return C.Event.once(g.onDidClose)(() => n.dispose()), g;
					}
					t(c) {
						switch (c.scope) {
							case i.NeverShowAgainScope.APPLICATION:
								return r.StorageScope.APPLICATION;
							case i.NeverShowAgainScope.PROFILE:
								return r.StorageScope.PROFILE;
							case i.NeverShowAgainScope.WORKSPACE:
								return r.StorageScope.WORKSPACE;
							default:
								return r.StorageScope.APPLICATION;
						}
					}
					prompt(c, n, g, p) {
						const o = new E.$Zc();
						if (p?.neverShowAgain) {
							const $ = this.t(p.neverShowAgain),
								v = p.neverShowAgain.id;
							if (this.c.getBoolean(v, $)) return new i.$6N();
							const S = {
								label: (0, t.localize)(12571, null),
								run: () => this.c.store(v, !0, $, r.StorageTarget.USER),
								isSecondary: p.neverShowAgain.isSecondary,
							};
							p.neverShowAgain.isSecondary ? (g = [...g, S]) : (g = [S, ...g]);
						}
						let f = !1;
						const b = [],
							s = [];
						g.forEach(($, v) => {
							const S = new w.$Gwc(`workbench.dialog.choice.${v}`, $);
							$.isSecondary ? s.push(S) : b.push(S),
								o.add(
									S.onDidRun(() => {
										(f = !0), $.keepOpen || y.close();
									}),
								),
								o.add(S);
						});
						const l = { primary: b, secondary: s },
							y = this.notify({
								severity: c,
								message: n,
								actions: l,
								sticky: p?.sticky,
								priority: p?.priority,
							});
						return (
							C.Event.once(y.onDidClose)(() => {
								o.dispose(),
									p && typeof p.onCancel == "function" && !f && p.onCancel();
							}),
							y
						);
					}
					status(c, n) {
						return this.model.showStatusMessage(c, n);
					}
				};
				(e.$Hwc = a),
					(e.$Hwc = a = u = Ne([j(0, r.$lq)], a)),
					(0, d.$lK)(i.$4N, a, d.InstantiationType.Delayed);
			},
		),
		
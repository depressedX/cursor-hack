define(de[78], he([1, 0, 5, 113]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$r8 = void 0),
				(e.$r8 = (0, t.$Ni)(i.$Ti));
		}),
		define(
			de[3280],
			he([1, 0, 4, 28, 112, 10, 358, 1796, 125, 9, 23, 396, 269, 78, 8, 82]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$NQc = void 0),
					(t = mt(t)),
					(d = mt(d));
				let p = class {
					constructor(f, b, s, l, y, $, v, S, I) {
						(this.f = f),
							(this.g = l),
							(this.h = y),
							(this.i = $),
							(this.j = v),
							(this.k = S),
							(this.l = I),
							(this.b = []),
							(this.a = { type: b.type }),
							this.merge(b, s),
							(this.d =
								typeof this.a.when == "string"
									? n.$Kj.deserialize(this.a.when)
									: void 0),
							(this.e =
								typeof this.a.hiddenWhen == "string"
									? n.$Kj.deserialize(this.a.hiddenWhen)
									: void 0);
					}
					merge(f, b) {
						function s(l, y, $, v = 0) {
							return (0, i.$ng)(l)
								? ((0, i.$ng)(y) &&
										Object.keys(y).forEach((S) => {
											S !== "__proto__" &&
												((0, i.$ng)(l[S]) && (0, i.$ng)(y[S])
													? s(l[S], y[S], $, v + 1)
													: S in l
														? $ && ((v === 0 && S === "type") || (l[S] = y[S]))
														: (l[S] = y[S]));
										}),
									l)
								: y;
						}
						this.b.indexOf(b) < 0 &&
							(this.b.push(b),
							s(this.a, f, b.isBuiltin),
							(0, a.$p3)(f) && (this.c = b));
					}
					async startDebugging(f, b) {
						const s = this.k.getModel().getSession(b);
						return await this.k.startDebugging(
							void 0,
							f,
							{ parentSession: s },
							void 0,
						);
					}
					async createDebugAdapter(f) {
						await this.f.activateDebuggers(
							"onDebugAdapterProtocolTracker",
							this.type,
						);
						const b = this.f.createDebugAdapter(f);
						if (b) return Promise.resolve(b);
						throw new Error(t.localize(5836, null, this.type));
					}
					async substituteVariables(f, b) {
						const s = await this.f.substituteVariables(this.type, f, b);
						return await this.i.resolveWithInteractionReplace(
							f,
							s,
							"launch",
							this.variables,
							s.__configurationTarget,
						);
					}
					runInTerminal(f, b) {
						return this.f.runInTerminal(this.type, f, b);
					}
					get label() {
						return this.a.label || this.a.type;
					}
					get type() {
						return this.a.type;
					}
					get variables() {
						return this.a.variables;
					}
					get configurationSnippets() {
						return this.a.configurationSnippets;
					}
					get languages() {
						return this.a.languages;
					}
					get when() {
						return this.d;
					}
					get hiddenWhen() {
						return this.e;
					}
					get enabled() {
						return !this.d || this.l.contextMatchesRules(this.d);
					}
					get isHiddenFromDropdown() {
						return this.e ? this.l.contextMatchesRules(this.e) : !1;
					}
					get strings() {
						return this.a.strings ?? this.a.uiMessages;
					}
					interestedInLanguage(f) {
						return !!(this.languages && this.languages.indexOf(f) >= 0);
					}
					hasInitialConfiguration() {
						return !!this.a.initialConfigurations;
					}
					hasDynamicConfigurationProviders() {
						return this.k
							.getConfigurationManager()
							.hasDebugConfigurationProvider(
								this.type,
								w.DebugConfigurationProviderTriggerKind.Dynamic,
							);
					}
					hasConfigurationProvider() {
						return this.k
							.getConfigurationManager()
							.hasDebugConfigurationProvider(this.type);
					}
					getInitialConfigurationContent(f) {
						let b = this.a.initialConfigurations || [];
						f && (b = b.concat(f));
						const s =
								this.h.getEOL(
									r.URI.from({ scheme: u.Schemas.untitled, path: "1" }),
								) ===
								`\r
`
									? `\r
`
									: `
`,
							l = JSON.stringify(b, null, "	")
								.split(`
`)
								.map((T) => "	" + T)
								.join(s)
								.trim(),
							y = t.localize(5837, null),
							$ = t.localize(5838, null),
							v = t.localize(
								5839,
								null,
								"https://go.microsoft.com/fwlink/?linkid=830387",
							);
						let S = [
							"{",
							`	// ${y}`,
							`	// ${$}`,
							`	// ${v}`,
							'	"version": "0.2.0",',
							`	"configurations": ${l}`,
							"}",
						].join(s);
						const I = this.g.getValue();
						return (
							I.editor &&
								I.editor.insertSpaces &&
								(S = S.replace(
									new RegExp("	", "g"),
									" ".repeat(I.editor.tabSize),
								)),
							Promise.resolve(S)
						);
					}
					getMainExtensionDescriptor() {
						return this.c || this.b[0];
					}
					getCustomTelemetryEndpoint() {
						const f = this.a.aiKey;
						if (!f) return;
						const b = (0, h.$3p)(this.j.remoteAuthority) !== "other";
						return {
							id: `${this.getMainExtensionDescriptor().publisher}.${this.type}`,
							aiKey: f,
							sendErrorTelemetry: b,
						};
					}
					getSchemaAttributes(f) {
						return this.a.configurationAttributes
							? Object.keys(this.a.configurationAttributes).map((b) => {
									const s = `${this.type}:${b}`,
										l = `${this.type}:${b}:platform`,
										y = this.a.configurationAttributes[b],
										$ = ["name", "type", "request"];
									(y.required =
										y.required && y.required.length ? $.concat(y.required) : $),
										(y.additionalProperties = !1),
										(y.type = "object"),
										y.properties || (y.properties = {});
									const v = y.properties;
									(v.type = {
										enum: [this.type],
										enumDescriptions: [this.label],
										description: t.localize(5840, null),
										pattern: "^(?!node2)",
										deprecationMessage:
											this.a.deprecated ||
											(this.enabled ? void 0 : (0, w.$Y5)(this.type)),
										doNotSuggest: !!this.a.deprecated,
										errorMessage: t.localize(5841, null),
										patternErrorMessage: t.localize(5842, null),
									}),
										(v.request = {
											enum: [b],
											description: t.localize(5843, null),
										});
									for (const I in f.common.properties)
										v[I] = { $ref: `#/definitions/common/properties/${I}` };
									Object.keys(v).forEach((I) => {
										d.$MQc(v[I]);
									}),
										(f[s] = { ...y }),
										(f[l] = {
											type: "object",
											additionalProperties: !1,
											properties: (0, g.$Do)(
												v,
												(I) => I !== "type" && I !== "request" && I !== "name",
											),
										});
									const S = { ...y };
									return (
										(S.properties = {
											...v,
											windows: {
												$ref: `#/definitions/${l}`,
												description: t.localize(5844, null),
											},
											osx: {
												$ref: `#/definitions/${l}`,
												description: t.localize(5845, null),
											},
											linux: {
												$ref: `#/definitions/${l}`,
												description: t.localize(5846, null),
											},
										}),
										S
									);
								})
							: null;
					}
				};
				(e.$NQc = p),
					(e.$NQc = p =
						Ne(
							[
								j(3, E.$gj),
								j(4, m.$YO),
								j(5, C.$zeb),
								j(6, c.$r8),
								j(7, w.$75),
								j(8, n.$6j),
							],
							p,
						));
			},
		),
		define(
			de[1019],
			he([1, 0, 34, 5, 78, 22, 423, 28, 1178, 20, 187, 3, 6]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$GMc = void 0),
					(e.$GMc = (0, i.$Mi)("IDefaultLogLevelsService"));
				let c = class extends a.$1c {
					constructor(g, p, o, f, b) {
						super(),
							(this.b = g),
							(this.c = p),
							(this.f = o),
							(this.g = f),
							(this.h = b),
							(this.a = this.D(new h.$re())),
							(this.onDidChangeDefaultLogLevels = this.a.event);
					}
					async getDefaultLogLevels() {
						const g = await this.n();
						return {
							default: g?.default ?? this.r(),
							extensions: g?.extensions ?? this.s(),
						};
					}
					async getDefaultLogLevel(g) {
						const p = (await this.n()) ?? {};
						return g ? ((g = g.toLowerCase()), this.j(p, g)) : this.j(p);
					}
					async setDefaultLogLevel(g, p) {
						const o = (await this.n()) ?? {};
						if (p) {
							p = p.toLowerCase();
							const f = this.j(o, p);
							o.extensions = o.extensions ?? [];
							const b = o.extensions.find(([l]) => l === p);
							b ? (b[1] = g) : o.extensions.push([p, g]), await this.m(o);
							const s = [...this.h.getRegisteredLoggers()].filter(
								(l) => l.extensionId && l.extensionId.toLowerCase() === p,
							);
							for (const { resource: l } of s)
								this.h.getLogLevel(l) === f && this.h.setLogLevel(l, g);
						} else {
							const f = this.j(o);
							(o.default = g),
								await this.m(o),
								this.h.getLogLevel() === f && this.h.setLogLevel(g);
						}
						this.a.fire();
					}
					j(g, p) {
						if (p) {
							const o = g.extensions?.find(([f]) => f === p);
							if (o) return o[1];
						}
						return g.default ?? (0, t.$wk)(this.b);
					}
					async m(g) {
						const p = [];
						(0, d.$sg)(g.default) || p.push((0, t.$xk)(g.default));
						for (const [o, f] of g.extensions ?? [])
							p.push(`${o}=${(0, t.$xk)(f)}`);
						await this.f.write(
							this.b.argvResource,
							[{ path: ["log-level"], value: p.length ? p : void 0 }],
							!0,
						);
					}
					async n() {
						const g = { extensions: [] },
							p = await this.q();
						for (const o of p) {
							const f = m.$hn.exec(o);
							if (f && f[1] && f[2]) {
								const b = (0, t.$zk)(f[2]);
								(0, d.$sg)(b) || g.extensions?.push([f[1].toLowerCase(), b]);
							} else {
								const b = (0, t.$zk)(o);
								(0, d.$sg)(b) || (g.default = b);
							}
						}
						return !(0, d.$sg)(g.default) || g.extensions?.length ? g : void 0;
					}
					async migrateLogLevels() {
						const g = await this.q(),
							p = /^([^.]+\..+):(.+)$/;
						if (g.some((o) => p.test(o))) {
							const o = await this.n();
							o && (await this.m(o));
						}
					}
					async q() {
						try {
							const g = await this.c.readFile(this.b.argvResource),
								p = (0, u.$do)(g.value.toString());
							return (0, d.$lg)(p["log-level"])
								? [p["log-level"]]
								: Array.isArray(p["log-level"])
									? p["log-level"]
									: [];
						} catch (g) {
							(0, E.$Cl)(g) !== E.FileOperationResult.FILE_NOT_FOUND &&
								this.g.error(g);
						}
						return [];
					}
					r() {
						return (0, t.$wk)(this.b);
					}
					s() {
						const g = [];
						for (const [p, o] of this.b.extensionLogLevel ?? []) {
							const f = (0, t.$zk)(o);
							(0, d.$sg)(f) || g.push([p, f]);
						}
						return g;
					}
				};
				(c = Ne(
					[j(0, w.$r8), j(1, E.$ll), j(2, C.$$Qb), j(3, t.$ik), j(4, t.$jk)],
					c,
				)),
					(0, r.$lK)(e.$GMc, c, r.InstantiationType.Delayed);
			},
		),
		define(
			de[1293],
			he([
				1, 0, 7, 114, 105, 198, 235, 50, 6, 94, 27, 3, 23, 19, 9, 56, 64, 4,
				413, 664, 10, 8, 49, 5, 39, 73, 51, 26, 25, 612, 78, 61, 95, 72,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$dBc = e.$cBc = e.$bBc = e.$aBc = void 0),
					(t = mt(t));
				let A = class extends E.$$ib {
					constructor(z, F, x, H) {
						super(null, z),
							(this.I = F),
							(this.J = x),
							(this.L = H),
							(this.b = new Map());
						const q = this.I.getWorkspace();
						(this.a = q.folders.length === 1 ? q.folders[0] : null),
							this.D(this.I.onDidChangeWorkspaceFolders(() => this.P()));
					}
					get folder() {
						return this.a;
					}
					set folder(z) {
						(this.a = z), this.Q();
					}
					setCount(z, F) {
						const x = this.I.getWorkspaceFolder(z);
						if (!x) throw new Error("unknown folder");
						const H = x.uri;
						this.b.set(H.toString(), F), this.Q();
					}
					render(z) {
						(this.element = z),
							(this.c = z),
							(this.r = t.$(".action-title")),
							(this.s = t.$(".action-details")),
							(this.y = t.$(
								".dropdown-icon.hide" + T.ThemeIcon.asCSSSelector(k.$1Ac),
							)),
							(this.g = t.$(
								"a.action-label.folder-settings",
								{ role: "button", "aria-haspopup": "true", tabindex: "0" },
								this.r,
								this.s,
								this.y,
							)),
							(this.h = this.D(
								this.L.setupManagedHover((0, M.$cib)("mouse"), this.g, ""),
							)),
							this.D(t.$0fb(this.g, t.$$gb.MOUSE_DOWN, (F) => t.$ahb.stop(F))),
							this.D(t.$0fb(this.g, t.$$gb.CLICK, (F) => this.onClick(F))),
							this.D(t.$0fb(this.c, t.$$gb.KEY_UP, (F) => this.M(F))),
							t.$fhb(this.c, this.g),
							this.Q();
					}
					M(z) {
						switch (new i.$7fb(z).keyCode) {
							case u.KeyCode.Enter:
							case u.KeyCode.Space:
								this.onClick(z);
								return;
						}
					}
					onClick(z) {
						t.$ahb.stop(z, !0),
							!this.folder || this._action.checked
								? this.R()
								: this._action.run(this.a);
					}
					t() {
						this.Q();
					}
					H() {
						this.Q();
					}
					P() {
						const z = this.a,
							F = this.I.getWorkspace();
						z &&
							(this.a =
								F.folders.filter((x) => (0, c.$gh)(x.uri, z.uri))[0] ||
								F.folders[0]),
							(this.a = this.a
								? this.a
								: F.folders.length === 1
									? F.folders[0]
									: null),
							this.Q(),
							this._action.checked && this._action.run(this.a);
					}
					Q() {
						let z = 0;
						this.b.forEach((x) => (z += x));
						const F = this.I.getWorkspace();
						if (this.a) {
							(this.r.textContent = this.a.name), this.h.update(this.a.name);
							const x = this.U(this._action.label, z);
							(this.s.textContent = x),
								this.y.classList.toggle(
									"hide",
									F.folders.length === 1 || !this._action.checked,
								);
						} else {
							const x = this.U(this._action.label, z);
							(this.r.textContent = x),
								(this.s.textContent = ""),
								this.h.update(this._action.label),
								this.y.classList.remove("hide");
						}
						this.g.classList.toggle("checked", this._action.checked),
							this.c.classList.toggle("disabled", !this._action.enabled);
					}
					R() {
						this.J.showContextMenu({
							getAnchor: () => this.c,
							getActions: () => this.S(),
							getActionViewItem: () => {},
							onHide: () => {
								this.g.blur();
							},
						});
					}
					S() {
						const z = [],
							F = this.I.getWorkspace().folders;
						return (
							this.I.getWorkbenchState() === P.WorkbenchState.WORKSPACE &&
								F.length > 0 &&
								z.push(
									...F.map((x, H) => {
										const q = this.b.get(x.uri.toString());
										return {
											id: "folderSettingsTarget" + H,
											label: this.U(x.name, q),
											tooltip: this.U(x.name, q),
											checked:
												!!this.folder && (0, c.$gh)(this.folder.uri, x.uri),
											enabled: !0,
											class: void 0,
											run: () => this._action.run(x),
										};
									}),
								),
							z
						);
					}
					U(z, F) {
						return F && (z += ` (${F})`), z;
					}
				};
				(e.$aBc = A),
					(e.$aBc = A = Ne([j(1, P.$Vi), j(2, y.$Xxb), j(3, N.$Uyb)], A));
				let R = class extends C.$Uhb {
					constructor(z, F, x, H, q, V, G) {
						super(),
							(this.y = x),
							(this.J = H),
							(this.L = q),
							(this.M = V),
							(this.N = G),
							(this.t = null),
							(this.w = this.D(new m.$re())),
							(this.onDidTargetChange = this.w.event),
							(this.s = F ?? {}),
							this.P(z),
							this.D(this.y.onDidChangeWorkbenchState(() => this.Q())),
							this.D(this.y.onDidChangeWorkspaceFolders(() => this.R()));
					}
					O() {
						const z = this.L.remoteAuthority,
							F = z && this.M.getHostLabel(h.Schemas.vscodeRemote, z);
						(this.b.label = (0, o.localize)(8468, null)),
							(this.c.label =
								(0, o.localize)(8469, null) + (F ? ` [${F}]` : "")),
							(this.g.label = (0, o.localize)(8470, null)),
							(this.h.label = (0, o.localize)(8471, null));
					}
					P(z) {
						const F = t.$fhb(z, t.$(".settings-tabs-widget"));
						(this.a = this.D(
							new w.$eib(F, {
								orientation: w.ActionsOrientation.HORIZONTAL,
								focusOnlyEnabledItems: !0,
								ariaLabel: (0, o.localize)(8472, null),
								ariaRole: "tablist",
								actionViewItemProvider: (q, V) =>
									q.id === "folderSettings" ? this.r : void 0,
							}),
						)),
							(this.b = new d.$rj("userSettings", "", ".settings-tab", !0, () =>
								this.updateTarget(s.ConfigurationTarget.USER_LOCAL),
							)),
							(this.b.tooltip = (0, o.localize)(8473, null)),
							(this.c = new d.$rj(
								"userSettingsRemote",
								"",
								".settings-tab",
								!0,
								() => this.updateTarget(s.ConfigurationTarget.USER_REMOTE),
							));
						const x = this.L.remoteAuthority,
							H = x && this.M.getHostLabel(h.Schemas.vscodeRemote, x);
						(this.c.tooltip =
							(0, o.localize)(8474, null) + (H ? ` [${H}]` : "")),
							(this.g = new d.$rj(
								"workspaceSettings",
								"",
								".settings-tab",
								!1,
								() => this.updateTarget(s.ConfigurationTarget.WORKSPACE),
							)),
							(this.h = new d.$rj(
								"folderSettings",
								"",
								".settings-tab",
								!1,
								async (q) => {
									this.updateTarget(
										(0, P.$5i)(q) ? q.uri : s.ConfigurationTarget.USER_LOCAL,
									);
								},
							)),
							(this.r = this.J.createInstance(A, this.h)),
							this.O(),
							this.R(),
							this.a.push([this.b, this.c, this.g, this.h]);
					}
					get settingsTarget() {
						return this.t;
					}
					set settingsTarget(z) {
						(this.t = z),
							(this.b.checked =
								s.ConfigurationTarget.USER_LOCAL === this.settingsTarget),
							(this.c.checked =
								s.ConfigurationTarget.USER_REMOTE === this.settingsTarget),
							(this.g.checked =
								s.ConfigurationTarget.WORKSPACE === this.settingsTarget),
							this.settingsTarget instanceof n.URI
								? ((this.r.action.checked = !0),
									(this.r.folder = this.y.getWorkspaceFolder(
										this.settingsTarget,
									)))
								: (this.r.action.checked = !1);
					}
					setResultCount(z, F) {
						if (z === s.ConfigurationTarget.WORKSPACE) {
							let x = (0, o.localize)(8475, null);
							F && (x += ` (${F})`), (this.g.label = x);
						} else if (z === s.ConfigurationTarget.USER_LOCAL) {
							let x = (0, o.localize)(8476, null);
							F && (x += ` (${F})`), (this.b.label = x);
						} else z instanceof n.URI && this.r.setCount(z, F);
					}
					updateLanguageFilterIndicators(z) {
						if ((this.O(), z)) {
							const F = this.N.getLanguageName(z);
							if (F) {
								const x = ` [${F}]`;
								(this.b.label += x),
									(this.c.label += x),
									(this.g.label += x),
									(this.h.label += x);
							}
						}
					}
					Q() {
						(this.r.folder = null),
							this.R(),
							this.settingsTarget === s.ConfigurationTarget.WORKSPACE &&
								this.y.getWorkbenchState() === P.WorkbenchState.WORKSPACE &&
								this.updateTarget(s.ConfigurationTarget.USER_LOCAL);
					}
					updateTarget(z) {
						return (
							this.settingsTarget === z ||
								(z instanceof n.URI &&
									this.settingsTarget instanceof n.URI &&
									(0, c.$gh)(this.settingsTarget, z)) ||
								((this.settingsTarget = z), this.w.fire(this.settingsTarget)),
							Promise.resolve(void 0)
						);
					}
					async R() {
						this.a.domNode.classList.toggle(
							"empty-workbench",
							this.y.getWorkbenchState() === P.WorkbenchState.EMPTY,
						),
							(this.c.enabled = !!(
								this.s.enableRemoteSettings && this.L.remoteAuthority
							)),
							(this.g.enabled =
								this.y.getWorkbenchState() !== P.WorkbenchState.EMPTY),
							(this.r.action.enabled =
								this.y.getWorkbenchState() === P.WorkbenchState.WORKSPACE &&
								this.y.getWorkspace().folders.length > 0),
							(this.g.tooltip = (0, o.localize)(8477, null));
					}
				};
				(e.$bBc = R),
					(e.$bBc = R =
						Ne(
							[j(2, P.$Vi), j(3, $.$Li), j(4, L.$r8), j(5, S.$3N), j(6, D.$nM)],
							R,
						));
				let O = class extends C.$Uhb {
					constructor(z, F, x, H, q, V) {
						super(),
							(this.s = F),
							(this.t = x),
							(this.w = H),
							(this.y = q),
							(this.J = V),
							(this.h = this.D(new m.$re())),
							(this.onDidChange = this.h.event),
							(this.r = this.D(new m.$re())),
							(this.onFocus = this.r.event),
							this.L(z);
					}
					L(z) {
						(this.domNode = t.$fhb(z, t.$("div.settings-header-widget"))),
							this.M(
								t.$fhb(this.domNode, t.$("div.settings-search-container")),
							),
							(this.g = t.$fhb(
								this.domNode,
								t.$("div.settings-search-controls"),
							)),
							this.s.showResultCount &&
								((this.a = t.$fhb(this.g, t.$(".settings-count-widget"))),
								(this.a.style.backgroundColor = (0, I.$rP)(I.$1P)),
								(this.a.style.color = (0, I.$rP)(I.$2P)),
								(this.a.style.border = `1px solid ${(0, I.$rP)(I.$OP)}`)),
							this.inputBox.inputElement.setAttribute(
								"aria-live",
								this.s.ariaLive || "off",
							),
							this.s.ariaLabelledBy &&
								this.inputBox.inputElement.setAttribute(
									"aria-labelledBy",
									this.s.ariaLabelledBy,
								);
						const F = this.D(t.$dhb(this.inputBox.inputElement));
						this.D(F.onDidFocus(() => this.r.fire()));
						const x = this.s.focusKey;
						x &&
							(this.D(F.onDidFocus(() => x.set(!0))),
							this.D(F.onDidBlur(() => x.set(!1))));
					}
					M(z) {
						this.b = z;
						const F = t.$fhb(this.b, t.$("div.settings-search-input"));
						(this.inputBox = this.D(this.N(F))),
							this.D(this.inputBox.onDidChange((x) => this.h.fire(x)));
					}
					N(z) {
						const F = () => (0, b.$NMb)(this.J);
						return new f.$VCb(
							z,
							this.t,
							{ ...this.s, showHistoryHint: F },
							this.y,
						);
					}
					showMessage(z) {
						this.a &&
							z !== this.a.textContent &&
							((this.a.textContent = z),
							this.inputBox.inputElement.setAttribute("aria-label", z),
							(this.inputBox.inputElement.style.paddingRight =
								this.O() + "px"));
					}
					layout(z) {
						z.width < 400
							? (this.a?.classList.add("hide"),
								(this.inputBox.inputElement.style.paddingRight = "0px"))
							: (this.a?.classList.remove("hide"),
								(this.inputBox.inputElement.style.paddingRight =
									this.O() + "px"));
					}
					O() {
						return (this.a ? t.$vgb(this.a) : 0) + 20;
					}
					focus() {
						this.inputBox.focus(), this.getValue() && this.inputBox.select();
					}
					hasFocus() {
						return this.inputBox.hasFocus();
					}
					clear() {
						this.inputBox.value = "";
					}
					getValue() {
						return this.inputBox.value;
					}
					setValue(z) {
						return (this.inputBox.value = z);
					}
					dispose() {
						this.s.focusKey?.set(!1), super.dispose();
					}
				};
				(e.$cBc = O),
					(e.$cBc = O =
						Ne([j(2, y.$Wxb), j(3, $.$Li), j(4, l.$6j), j(5, v.$uZ)], O));
				class B extends a.$1c {
					constructor(z) {
						super(),
							(this.g = z),
							(this.a = -1),
							(this.b = []),
							(this.c = this.g.createDecorationsCollection()),
							(this.f = this.D(new m.$re())),
							(this.onClick = this.f.event),
							this.D(
								this.g.onMouseDown((F) => {
									F.target.type !== g.MouseTargetType.GUTTER_GLYPH_MARGIN ||
										F.target.detail.isAfterLines ||
										!this.isVisible() ||
										this.f.fire(F);
								}),
							);
					}
					get preferences() {
						return this.b;
					}
					getLine() {
						return this.a;
					}
					show(z, F, x) {
						this.b = x;
						const H = [];
						(this.a = z),
							H.push({
								options: {
									description: "edit-preference-widget-decoration",
									glyphMarginClassName: T.ThemeIcon.asClassName(k.$7Ac),
									glyphMarginHoverMessage: new r.$cl().appendText(F),
									stickiness:
										p.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
								},
								range: {
									startLineNumber: z,
									startColumn: 1,
									endLineNumber: z,
									endColumn: 1,
								},
							}),
							this.c.set(H);
					}
					hide() {
						this.c.clear();
					}
					isVisible() {
						return this.c.length > 0;
					}
					dispose() {
						this.hide(), super.dispose();
					}
				}
				e.$dBc = B;
			},
		),
		define(
			de[1804],
			he([
				1, 0, 4, 12, 3, 6, 460, 235, 27, 7, 127, 114, 194, 39, 49, 5, 51, 98,
				1293, 15, 8, 106, 2475,
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
				var y, $;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$gBc = e.$fBc = e.$eBc = void 0),
					(t = mt(t)),
					(r = mt(r)),
					(u = mt(u));
				let v = class extends f.$cBc {
					constructor(P, k, L, D, M, N) {
						super(P, k, L, D, M, N),
							(this.R = this.D(new w.$Zc())),
							(this.S = this.D(new E.$re())),
							(this.onKeybinding = this.S.event),
							(this.U = this.D(new E.$re())),
							(this.onEnter = this.U.event),
							(this.W = this.D(new E.$re())),
							(this.onEscape = this.W.event),
							(this.X = this.D(new E.$re())),
							(this.onBlur = this.X.event),
							this.D((0, w.$Yc)(() => this.stopRecordingKeys())),
							(this.P = null),
							(this.Q = "");
					}
					clear() {
						(this.P = null), super.clear();
					}
					startRecordingKeys() {
						this.R.add(
							r.$0fb(this.inputBox.inputElement, r.$$gb.KEY_DOWN, (P) =>
								this.Y(new a.$7fb(P)),
							),
						),
							this.R.add(
								r.$0fb(this.inputBox.inputElement, r.$$gb.BLUR, () =>
									this.X.fire(),
								),
							),
							this.R.add(
								r.$0fb(this.inputBox.inputElement, r.$$gb.INPUT, () => {
									this.setInputValue(this.Q);
								}),
							);
					}
					stopRecordingKeys() {
						(this.P = null), this.R.clear();
					}
					setInputValue(P) {
						(this.Q = P), (this.inputBox.value = this.Q);
					}
					Y(P) {
						if (
							(P.preventDefault(),
							P.stopPropagation(),
							!this.s.recordEnter && P.equals(m.KeyCode.Enter))
						) {
							this.U.fire();
							return;
						}
						if (P.equals(m.KeyCode.Escape)) {
							this.W.fire();
							return;
						}
						this.Z(P);
					}
					Z(P) {
						const k = this.J.resolveKeyboardEvent(P),
							L = `code: ${P.browserEvent.code}, keyCode: ${P.browserEvent.keyCode}, key: ${P.browserEvent.key} => UI: ${k.getAriaLabel()}, user settings: ${k.getUserSettingsLabel()}, dispatch: ${k.getDispatchChords()[0]}`,
							D = this.s;
						this.P || (this.P = []),
							this.P.length > 0 &&
							this.P[this.P.length - 1].getDispatchChords()[0] === null
								? (this.P[this.P.length - 1] = k)
								: (this.P.length === 2 && (this.P = []), this.P.push(k));
						const N = this.P.map((A) => A.getUserSettingsLabel() || "").join(
							" ",
						);
						this.setInputValue(D.quoteRecordedKeys ? `"${N}"` : N),
							(this.inputBox.inputElement.title = L),
							this.S.fire(this.P);
					}
				};
				(e.$eBc = v),
					(e.$eBc = v =
						Ne([j(2, n.$Wxb), j(3, g.$Li), j(4, s.$6j), j(5, c.$uZ)], v));
				let S = class extends d.$Uhb {
					static {
						y = this;
					}
					static {
						this.a = 400;
					}
					static {
						this.b = 110;
					}
					constructor(P, k) {
						super(),
							(this.M = k),
							(this.s = this.D(new w.$Zc())),
							(this.t = null),
							(this.w = !1),
							(this.y = this.D(new E.$re())),
							(this.J = this.D(new E.$re())),
							(this.onDidChange = this.J.event),
							(this.L = this.D(new E.$re())),
							(this.onShowExistingKeybidings = this.L.event),
							(this.g = (0, h.$Shb)(document.createElement("div"))),
							this.g.setDisplay("none"),
							this.g.setClassName("defineKeybindingWidget"),
							this.g.setWidth(y.a),
							this.g.setHeight(y.b);
						const L = t.localize(8374, null);
						r.$fhb(this.g.domNode, r.$(".message", void 0, L)),
							(this.g.domNode.style.backgroundColor = (0, p.$rP)(p.$bQ)),
							(this.g.domNode.style.color = (0, p.$rP)(p.$cQ)),
							(this.g.domNode.style.boxShadow = `0 2px 8px ${(0, p.$rP)(p.$bR)}`),
							(this.h = this.D(
								this.M.createInstance(v, this.g.domNode, {
									ariaLabel: L,
									history: [],
									inputBoxStyles: l.$wyb,
								}),
							)),
							this.h.startRecordingKeys(),
							this.D(this.h.onKeybinding((D) => this.N(D))),
							this.D(this.h.onEnter(() => this.R())),
							this.D(this.h.onEscape(() => this.Q())),
							this.D(this.h.onBlur(() => this.P())),
							(this.n = r.$fhb(this.g.domNode, r.$(".output"))),
							(this.r = r.$fhb(this.g.domNode, r.$(".existing"))),
							P && r.$fhb(P, this.g.domNode);
					}
					get domNode() {
						return this.g.domNode;
					}
					define() {
						return (
							this.h.clear(),
							b.Promises.withAsyncBody(async (P) => {
								this.w ||
									((this.w = !0),
									this.g.setDisplay("block"),
									(this.t = null),
									this.h.setInputValue(""),
									r.$9fb(this.n),
									r.$9fb(this.r),
									await (0, b.$Nh)(0),
									this.h.focus());
								const k = this.y.event(() => {
									P(this.O()), k.dispose();
								});
							})
						);
					}
					layout(P) {
						const k = Math.round((P.height - y.b) / 2);
						this.g.setTop(k);
						const L = Math.round((P.width - y.a) / 2);
						this.g.setLeft(L);
					}
					printExisting(P) {
						if (P > 0) {
							const k = r.$("span.existingText"),
								L =
									P === 1
										? t.localize(8375, null, P)
										: t.localize(8376, null, P);
							r.$fhb(k, document.createTextNode(L)),
								u.$oib(L),
								this.r.appendChild(k),
								(k.onmousedown = (D) => {
									D.preventDefault();
								}),
								(k.onmouseup = (D) => {
									D.preventDefault();
								}),
								(k.onclick = () => {
									this.L.fire(this.O());
								});
						}
					}
					N(P) {
						if (
							(this.s.clear(),
							(this.t = P),
							r.$9fb(this.n),
							r.$9fb(this.r),
							this.s
								.add(new C.$7ob(this.n, i.OS, l.$jyb))
								.set(this.t?.[0] ?? void 0),
							this.t)
						)
							for (let D = 1; D < this.t.length; D++)
								this.n.appendChild(
									document.createTextNode(t.localize(8377, null)),
								),
									this.s.add(new C.$7ob(this.n, i.OS, l.$jyb)).set(this.t[D]);
						const L = this.O();
						L && this.J.fire(L);
					}
					O() {
						let P = null;
						return (
							this.t &&
								(P = this.t.map((k) => k.getUserSettingsLabel()).join(" ")),
							P
						);
					}
					P() {
						(this.t = null), this.R();
					}
					Q() {
						this.t === null
							? this.R()
							: ((this.t = null),
								this.h.clear(),
								r.$9fb(this.n),
								r.$9fb(this.r));
					}
					R() {
						this.g.setDisplay("none"), (this.w = !1), this.y.fire();
					}
				};
				(e.$fBc = S), (e.$fBc = S = y = Ne([j(1, g.$Li)], S));
				let I = class extends w.$1c {
					static {
						$ = this;
					}
					static {
						this.a = "editor.contrib.defineKeybindingWidget";
					}
					constructor(P, k) {
						super(),
							(this.f = P),
							(this.b = this.D(k.createInstance(S, null))),
							this.f.addOverlayWidget(this);
					}
					getId() {
						return $.a;
					}
					getDomNode() {
						return this.b.domNode;
					}
					getPosition() {
						return { preference: null };
					}
					dispose() {
						this.f.removeOverlayWidget(this), super.dispose();
					}
					start() {
						this.f.hasModel() &&
							this.f.revealPositionInCenterIfOutsideViewport(
								this.f.getPosition(),
								o.ScrollType.Smooth,
							);
						const P = this.f.getLayoutInfo();
						return (
							this.b.layout(new r.$pgb(P.width, P.height)), this.b.define()
						);
					}
				};
				(e.$gBc = I), (e.$gBc = I = $ = Ne([j(1, g.$Li)], I));
			},
		),
		define(
			de[1805],
			he([
				1, 0, 139, 7, 15, 76, 33, 6, 3, 23, 9, 47, 4, 91, 11, 10, 49, 22, 5, 34,
				40, 211, 32, 374, 2889, 1126, 3211, 355, 3212, 1784, 78,
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
					(e.$f6c = void 0);
				var D;
				(function (A) {
					let R;
					(function (B) {
						(B[(B.Initializing = 0)] = "Initializing"),
							(B[(B.Ready = 1)] = "Ready");
					})((R = A.Type || (A.Type = {})));
					class O {
						constructor(U) {
							(this.pendingMessages = U), (this.type = R.Initializing);
						}
					}
					(A.Initializing = O), (A.Ready = { type: R.Ready });
				})(D || (D = {}));
				const M = "webviewId";
				let N = class extends m.$1c {
					get c() {
						return typeof this.b == "number"
							? (0, i.getWindowById)(this.b)?.window
							: void 0;
					}
					get h() {
						return "browser";
					}
					get n() {
						return this.m;
					}
					get isFocused() {
						return !(
							!this.q ||
							!this.c ||
							(this.c.document.activeElement &&
								this.c.document.activeElement !== this.n)
						);
					}
					constructor(R, O, B, U, z, F, x, H, q, V, G, K, J) {
						super(),
							(this.N = O),
							(this.O = F),
							(this.P = x),
							(this.Q = H),
							(this.R = q),
							(this.S = V),
							(this.U = G),
							(this.W = J),
							(this.a = (0, a.$9g)()),
							(this.b = void 0),
							(this.j = 4),
							(this.r = new D.Initializing([])),
							(this.u = this.D(new C.$Ce())),
							(this.C = this.D(new w.$Kh(50))),
							(this.F = this.D(new d.$re())),
							(this.G = this.F.event),
							(this.I = new Map()),
							(this.checkImeCompletionState = !0),
							(this.L = !1),
							(this.X = this.D(new d.$re())),
							(this.onMissingCsp = this.X.event),
							(this.Y = this.D(new d.$re())),
							(this.onDidClickLink = this.Y.event),
							(this.Z = this.D(new d.$re())),
							(this.onDidReload = this.Z.event),
							(this.$ = this.D(new d.$re())),
							(this.onMessage = this.$.event),
							(this.ab = this.D(new d.$re())),
							(this.onDidScroll = this.ab.event),
							(this.bb = this.D(new d.$re())),
							(this.onDidWheel = this.bb.event),
							(this.cb = this.D(new d.$re())),
							(this.onDidUpdateState = this.cb.event),
							(this.db = this.D(new d.$re())),
							(this.onDidFocus = this.db.event),
							(this.eb = this.D(new d.$re())),
							(this.onDidBlur = this.eb.event),
							(this.fb = this.D(new d.$re())),
							(this.onFatalError = this.fb.event),
							(this.gb = this.D(new d.$re())),
							(this.onDidDispose = this.gb.event),
							(this.rb = !1),
							(this.Db = this.D(new d.$re())),
							(this.hasFindResult = this.Db.event),
							(this.Eb = this.D(new d.$re())),
							(this.onDidStopFind = this.Eb.event),
							(this.providedViewType = R.providedViewType),
							(this.origin = R.origin ?? this.a),
							(this.M = R.options),
							(this.extension = R.extension),
							(this.s = {
								html: "",
								title: R.title,
								options: R.contentOptions,
								state: void 0,
							}),
							(this.t = this.D(
								new v.$YIb(
									() => this.extension?.location,
									() => this.s.options.portMapping || [],
									this.U,
								),
							)),
							(this.m = this.ib(R.options, R.contentOptions)),
							this.D(
								this.qb("no-csp-found", () => {
									this.sb();
								}),
							),
							this.D(
								this.qb("did-click-link", ({ uri: W }) => {
									this.Y.fire(W);
								}),
							),
							this.D(
								this.qb("onmessage", ({ message: W, transfer: X }) => {
									this.$.fire({ message: W, transfer: X });
								}),
							),
							this.D(
								this.qb("did-scroll", ({ scrollYPercentage: W }) => {
									this.ab.fire({ scrollYPercentage: W });
								}),
							),
							this.D(
								this.qb("do-reload", () => {
									this.reload();
								}),
							),
							this.D(
								this.qb("do-update-state", (W) => {
									(this.state = W), this.cb.fire(W);
								}),
							),
							this.D(
								this.qb("did-focus", () => {
									this.vb(!0);
								}),
							),
							this.D(
								this.qb("did-blur", () => {
									this.vb(!1);
								}),
							),
							this.D(
								this.qb("did-scroll-wheel", (W) => {
									this.bb.fire(W);
								}),
							),
							this.D(
								this.qb("did-find", ({ didFind: W }) => {
									this.Db.fire(W);
								}),
							),
							this.D(
								this.qb("fatal-error", (W) => {
									z.error((0, h.localize)(11368, null, W.message)),
										this.fb.fire({ message: W.message });
								}),
							),
							this.D(
								this.qb("did-keydown", (W) => {
									this.wb("keydown", W);
								}),
							),
							this.D(
								this.qb("did-keyup", (W) => {
									this.wb("keyup", W);
								}),
							),
							this.D(
								this.qb("did-context-menu", (W) => {
									if (!this.n || !this.w) return;
									const X = this.n.getBoundingClientRect(),
										Y = this.w.createOverlay([
											...Object.entries(W.context),
											[M, this.providedViewType],
										]);
									U.showContextMenu({
										menuId: n.$XX.WebviewContext,
										menuActionOptions: { shouldForwardArgs: !0 },
										contextKeyService: Y,
										getActionsContext: () => ({
											...W.context,
											webview: this.providedViewType,
										}),
										getAnchor: () => ({
											x: X.x + W.clientX,
											y: X.y + W.clientY,
										}),
									}),
										this.hb("set-context-menu-visible", { visible: !0 });
								}),
							),
							this.D(
								this.qb("load-resource", async (W) => {
									try {
										const X = (0, k.$W2b)(W.authority),
											Y = u.URI.from({
												scheme: W.scheme,
												authority: X,
												path: decodeURIComponent(W.path),
												query: W.query ? decodeURIComponent(W.query) : W.query,
											});
										this.zb(W.id, Y, W.ifNoneMatch);
									} catch {
										this.hb("did-load-resource", {
											id: W.id,
											status: 404,
											path: W.path,
										});
									}
								}),
							),
							this.D(
								this.qb("load-localhost", (W) => {
									this.Bb(W.id, W.origin);
								}),
							),
							this.D(
								d.Event.runAndSubscribe(O.onThemeDataChanged, () => this.ub()),
							),
							this.D(J.onDidChangeReducedMotion(() => this.ub())),
							this.D(J.onDidChangeScreenReaderOptimized(() => this.ub())),
							this.D(
								U.onDidHideContextMenu(() =>
									this.hb("set-context-menu-visible", { visible: !1 }),
								),
							),
							(this.z = B.getValue("window.confirmBeforeClose")),
							this.D(
								B.onDidChangeConfiguration((W) => {
									W.affectsConfiguration("window.confirmBeforeClose") &&
										((this.z = B.getValue("window.confirmBeforeClose")),
										this.hb("set-confirm-before-close", this.z));
								}),
							),
							this.D(
								this.qb("drag-start", () => {
									this.lb();
								}),
							),
							this.D(
								this.qb("drag", (W) => {
									this.xb("drag", W);
								}),
							),
							R.options.enableFindWidget &&
								(this.J = this.D(K.createInstance(P.$e6c, this)));
					}
					dispose() {
						if (
							((this.L = !0),
							this.n?.remove(),
							(this.m = void 0),
							(this.H = void 0),
							this.r.type === D.Type.Initializing)
						) {
							for (const R of this.r.pendingMessages) R.resolve(!1);
							this.r.pendingMessages = [];
						}
						this.gb.fire(), this.u.dispose(!0), super.dispose();
					}
					setContextKeyService(R) {
						this.w = R;
					}
					postMessage(R, O) {
						return this.hb("message", { message: R, transfer: O });
					}
					async hb(R, O, B = []) {
						if (this.r.type === D.Type.Initializing) {
							const { promise: U, resolve: z } = (0, w.$Fh)();
							return (
								this.r.pendingMessages.push({
									channel: R,
									data: O,
									transferable: B,
									resolve: z,
								}),
								U
							);
						} else return this.pb(R, O, B);
					}
					ib(R, O) {
						const B = document.createElement("iframe");
						(B.name = this.a),
							(B.className = `webview ${R.customClasses || ""}`),
							B.sandbox.add(
								"allow-scripts",
								"allow-same-origin",
								"allow-forms",
								"allow-pointer-lock",
								"allow-downloads",
							);
						const U = ["cross-origin-isolated", "autoplay"];
						return (
							t.$Ofb || U.push("clipboard-read", "clipboard-write"),
							B.setAttribute("allow", U.join("; ")),
							(B.style.border = "none"),
							(B.style.width = "100%"),
							(B.style.height = "100%"),
							(B.focus = () => {
								this.Cb();
							}),
							B
						);
					}
					jb(R, O, B, U) {
						const z = {
							id: this.a,
							origin: this.origin,
							swVersion: String(this.j),
							extensionId: O?.id.value ?? "",
							platform: this.h,
							"vscode-resource-base-authority": k.$T2b,
							parentOrigin: U.origin,
						};
						this.M.disableServiceWorker && (z.disableServiceWorker = "true"),
							this.O.remoteAuthority &&
								(z.remoteAuthority = this.O.remoteAuthority),
							B.purpose && (z.purpose = B.purpose),
							r.COI.addSearchParam(z, !0, !0);
						const F = new URLSearchParams(z).toString(),
							x = t.$Ofb ? "index-no-csp.html" : "index.html";
						this.n.setAttribute("src", `${this.nb(R)}/${x}?${F}`);
					}
					mountTo(R, O) {
						if (this.n) {
							(this.b = O.vscodeWindowId),
								(this.f = (0, S.$1fb)(O.origin, this.origin).then(
									(B) => (this.g = B),
								)),
								this.f.then((B) => {
									this.L || this.jb(B, this.extension, this.M, O);
								}),
								this.kb(O),
								this.J && R.appendChild(this.J.getDomNode());
							for (const B of [
								i.$$gb.MOUSE_DOWN,
								i.$$gb.MOUSE_MOVE,
								i.$$gb.DROP,
							])
								this.D(
									(0, i.$0fb)(R, B, () => {
										this.mb();
									}),
								);
							for (const B of [R, O])
								this.D(
									(0, i.$0fb)(B, i.$$gb.DRAG_END, () => {
										this.mb();
									}),
								);
							(R.id = this.a), R.appendChild(this.n);
						}
					}
					kb(R) {
						const O = this.D(
							(0, i.$0fb)(R, "message", (B) => {
								if (!(!this.g || B?.data?.target !== this.a)) {
									if (B.origin !== this.ob(this.g)) {
										console.log(
											`Skipped renderer receiving message due to mismatched origins: ${B.origin} ${this.ob}`,
										);
										return;
									}
									if (B.data.channel === "webview-ready") {
										if (this.H) return;
										this.Q.debug(`Webview(${this.a}): webview ready`),
											(this.H = B.ports[0]),
											(this.H.onmessage = (U) => {
												const z = this.I.get(U.data.channel);
												if (!z) {
													console.log(
														`No handlers found for '${U.data.channel}'`,
													);
													return;
												}
												z?.forEach((F) => F(U.data.data, U));
											}),
											this.n?.classList.add("ready"),
											this.r.type === D.Type.Initializing &&
												this.r.pendingMessages.forEach(
													({ channel: U, data: z, resolve: F }) =>
														F(this.pb(U, z)),
												),
											(this.r = D.Ready),
											O.dispose();
									}
								}
							}),
						);
					}
					lb() {
						this.n && (this.n.style.pointerEvents = "none");
					}
					mb() {
						this.n && (this.n.style.pointerEvents = "auto");
					}
					nb(R) {
						const O = this.O.webviewExternalEndpoint;
						if (!O)
							throw new Error(
								"'webviewExternalEndpoint' has not been configured. Webviews will not work!",
							);
						const B = O.replace("{{uuid}}", R);
						return B[B.length - 1] === "/" ? B.slice(0, B.length - 1) : B;
					}
					ob(R) {
						const O = u.URI.parse(this.nb(R));
						return O.scheme + "://" + O.authority.toLowerCase();
					}
					pb(R, O, B = []) {
						return this.n && this.H
							? (this.H.postMessage({ channel: R, args: O }, B), !0)
							: !1;
					}
					qb(R, O) {
						let B = this.I.get(R);
						return (
							B || ((B = new Set()), this.I.set(R, B)),
							B.add(O),
							(0, m.$Yc)(() => {
								this.I.get(R)?.delete(O);
							})
						);
					}
					sb() {
						if (!this.rb && ((this.rb = !0), this.extension?.id)) {
							this.O.isExtensionDevelopment && this.X.fire(this.extension.id);
							const R = { extension: this.extension.id.value };
							this.S.publicLog2("webviewMissingCsp", R);
						}
					}
					reload() {
						this.tb(this.s);
						const R = this.D(
							this.qb("did-load", () => {
								this.Z.fire(), R.dispose();
							}),
						);
					}
					setHtml(R) {
						this.tb({ ...this.s, html: R }), this.F.fire(R);
					}
					setTitle(R) {
						(this.s = { ...this.s, title: R }), this.hb("set-title", R);
					}
					set contentOptions(R) {
						if (
							(this.Q.debug(`Webview(${this.a}): will update content options`),
							(0, T.$4Ib)(R, this.s.options))
						) {
							this.Q.debug(
								`Webview(${this.a}): skipping content options update`,
							);
							return;
						}
						this.tb({ ...this.s, options: R });
					}
					set localResourcesRoot(R) {
						this.s = {
							...this.s,
							options: { ...this.s.options, localResourceRoots: R },
						};
					}
					set state(R) {
						this.s = { ...this.s, state: R };
					}
					set initialScrollProgress(R) {
						this.hb("initial-scroll-position", R);
					}
					tb(R) {
						this.Q.debug(`Webview(${this.a}): will update content`),
							(this.s = R);
						const O = !!this.s.options.allowScripts;
						this.hb("content", {
							contents: this.s.html,
							title: this.s.title,
							options: {
								allowMultipleAPIAcquire:
									!!this.s.options.allowMultipleAPIAcquire,
								allowScripts: O,
								allowForms: this.s.options.allowForms ?? O,
							},
							state: this.s.state,
							cspSource: k.$U2b,
							confirmBeforeClose: this.z,
						});
					}
					ub() {
						let {
							styles: R,
							activeTheme: O,
							themeLabel: B,
							themeId: U,
						} = this.N.getWebviewThemeData();
						this.M.transformCssVariables &&
							(R = this.M.transformCssVariables(R));
						const z = this.W.isMotionReduced(),
							F = this.W.isScreenReaderOptimized();
						this.hb("styles", {
							styles: R,
							activeTheme: O,
							themeId: U,
							themeLabel: B,
							reduceMotion: z,
							screenReader: F,
						});
					}
					vb(R) {
						(this.q = R), R ? this.db.fire() : this.eb.fire();
					}
					wb(R, O) {
						const B = new KeyboardEvent(R, O);
						Object.defineProperty(B, "target", { get: () => this.n }),
							this.c?.dispatchEvent(B);
					}
					xb(R, O) {
						const B = new DragEvent(R, O);
						Object.defineProperty(B, "target", { get: () => this.n }),
							this.c?.dispatchEvent(B);
					}
					windowDidDragStart() {
						this.lb();
					}
					windowDidDragEnd() {
						this.mb();
					}
					selectAll() {
						this.yb("selectAll");
					}
					copy() {
						this.yb("copy");
					}
					paste() {
						this.yb("paste");
					}
					cut() {
						this.yb("cut");
					}
					undo() {
						this.yb("undo");
					}
					redo() {
						this.yb("redo");
					}
					yb(R) {
						this.n && this.hb("execCommand", R);
					}
					async zb(R, O, B) {
						try {
							const U = await (0, I.$d6c)(
								O,
								{
									ifNoneMatch: B,
									roots: this.s.options.localResourceRoots || [],
								},
								this.P,
								this.Q,
								this.u.token,
							);
							switch (U.type) {
								case I.WebviewResourceResponse.Type.Success: {
									const z = await this.Ab(U.stream);
									return this.hb(
										"did-load-resource",
										{
											id: R,
											status: 200,
											path: O.path,
											mime: U.mimeType,
											data: z,
											etag: U.etag,
											mtime: U.mtime,
										},
										[z],
									);
								}
								case I.WebviewResourceResponse.Type.NotModified:
									return this.hb("did-load-resource", {
										id: R,
										status: 304,
										path: O.path,
										mime: U.mimeType,
										mtime: U.mtime,
									});
								case I.WebviewResourceResponse.Type.AccessDenied:
									return this.hb("did-load-resource", {
										id: R,
										status: 401,
										path: O.path,
									});
							}
						} catch {}
						return this.hb("did-load-resource", {
							id: R,
							status: 404,
							path: O.path,
						});
					}
					async Ab(R) {
						return (await (0, E.$6e)(R)).buffer.buffer;
					}
					async Bb(R, O) {
						const B = this.O.remoteAuthority,
							U = B ? await this.R.resolveAuthority(B) : void 0,
							z = U ? await this.t.getRedirect(U.authority, O) : void 0;
						return this.hb("did-load-localhost", {
							id: R,
							origin: O,
							location: z,
						});
					}
					focus() {
						this.Cb(), this.vb(!0);
					}
					Cb() {
						if (this.n) {
							try {
								this.n.contentWindow?.focus();
							} catch {}
							this.C.trigger(async () => {
								!this.isFocused ||
									!this.n ||
									(this.c?.document.activeElement &&
										this.c.document.activeElement !== this.n &&
										this.c.document.activeElement?.tagName !== "BODY") ||
									(this.c?.document.body?.focus(), this.hb("focus", void 0));
							});
						}
					}
					find(R, O) {
						this.n && this.hb("find", { value: R, previous: O });
					}
					updateFind(R) {
						!R || !this.n || this.hb("find", { value: R });
					}
					stopFind(R) {
						this.n &&
							(this.hb("find-stop", { clearSelection: !R }), this.Eb.fire());
					}
					showFind(R = !0) {
						this.J?.reveal(void 0, R);
					}
					hideFind(R = !0) {
						this.J?.hide(R);
					}
					runFindAction(R) {
						this.J?.find(R);
					}
				};
				(e.$f6c = N),
					(e.$f6c = N =
						Ne(
							[
								j(2, g.$gj),
								j(3, p.$Xxb),
								j(4, s.$4N),
								j(5, L.$r8),
								j(6, o.$ll),
								j(7, b.$ik),
								j(8, l.$3l),
								j(9, y.$km),
								j(10, $.$cO),
								j(11, f.$Li),
								j(12, c.$XK),
							],
							N,
						));
			},
		),
		define(
			de[3281],
			he([
				1, 0, 15, 23, 408, 305, 91, 10, 49, 22, 5, 371, 34, 110, 40, 211, 32,
				374, 1805, 1785, 78,
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
					(e.$Igd = void 0);
				let l = class extends f.$f6c {
					get h() {
						return "electron";
					}
					constructor($, v, S, I, T, P, k, L, D, M, N, A, R, O, B) {
						super($, v, M, S, A, k, T, D, L, P, I, O, B),
							(this.Lb = R),
							(this.Gb = !1),
							(this.Jb = this.D(new t.$Jh(200))),
							(this.Fb = new b.$Fgd(M, N, R)),
							(this.Ib = E.ProxyChannel.toService(N.getChannel("webview"))),
							$.options.enableFindWidget &&
								(this.D(
									this.G((U) => {
										this.Gb &&
											this.Hb !== U &&
											(this.stopFind(!1), (this.Hb = U));
									}),
								),
								this.D(
									this.Ib.onFoundInFrame((U) => {
										this.Db.fire(U.matches > 0);
									}),
								));
					}
					dispose() {
						this.Fb.didBlur(), super.dispose();
					}
					nb($) {
						return `${i.Schemas.vscodeWebview}://${$}`;
					}
					Ab($) {
						return (0, w.$Ke)($, (v) => {
							const S = v.reduce((k, L) => k + L.byteLength, 0),
								I = new ArrayBuffer(S),
								T = new Uint8Array(I);
							let P = 0;
							for (const k of v) T.set(k.buffer, P), (P += k.byteLength);
							return I;
						});
					}
					find($, v) {
						if (this.n)
							if (!this.Gb) this.updateFind($);
							else {
								const S = { forward: !v, findNext: !1, matchCase: !1 };
								this.Ib.findInFrame(
									{ windowId: this.Lb.windowId },
									this.a,
									$,
									S,
								);
							}
					}
					updateFind($) {
						if (!$ || !this.n) return;
						const v = { forward: !0, findNext: !0, matchCase: !1 };
						this.Jb.trigger(() => {
							(this.Gb = !0),
								this.Ib.findInFrame(
									{ windowId: this.Lb.windowId },
									this.a,
									$,
									v,
								);
						});
					}
					stopFind($) {
						this.n &&
							(this.Jb.cancel(),
							(this.Gb = !1),
							this.Ib.stopFindInFrame({ windowId: this.Lb.windowId }, this.a, {
								keepSelection: $,
							}),
							this.Eb.fire());
					}
					vb($) {
						super.vb($), $ ? this.Fb.didFocus() : this.Fb.didBlur();
					}
				};
				(e.$Igd = l),
					(e.$Igd = l =
						Ne(
							[
								j(2, m.$Xxb),
								j(3, o.$cO),
								j(4, r.$ll),
								j(5, p.$km),
								j(6, s.$r8),
								j(7, g.$3l),
								j(8, h.$ik),
								j(9, d.$gj),
								j(10, a.$V8c),
								j(11, n.$4N),
								j(12, c.$y7c),
								j(13, u.$Li),
								j(14, C.$XK),
							],
							l,
						));
			},
		),
		
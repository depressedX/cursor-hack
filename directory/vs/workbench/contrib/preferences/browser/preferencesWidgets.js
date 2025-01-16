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
		
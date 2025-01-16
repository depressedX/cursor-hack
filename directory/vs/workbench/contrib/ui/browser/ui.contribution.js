define(de[4358], he([1, 0, 4357, 1934]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 });
		}),
		define(
			de[4359],
			he([
				1, 0, 7, 105, 183, 292, 203, 50, 14, 138, 6, 27, 222, 3, 488, 23, 195,
				9, 4, 81, 49, 57, 5, 73, 93, 497, 30, 349, 21, 32, 51, 25, 35, 26, 174,
				217, 984, 141, 261, 384, 68, 154, 157, 54, 249, 114, 62, 79, 106, 12,
				39, 19,
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
				z,
				F,
				x,
				H,
				q,
				V,
				G,
				K,
				J,
				W,
				X,
				Y,
				ie,
			) {
				"use strict";
				var ne, ee, _, te;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$o2c = e.$n2c = void 0),
					(e.$n2c = (0, J.$$O)(
						"workspace-trust-banner",
						m.$ak.shield,
						(0, f.localize)(11730, null),
					));
				const Q = (0, J.$$O)(
						"workspace-trust-editor-check",
						m.$ak.check,
						(0, f.localize)(11731, null),
					),
					Z = (0, J.$$O)(
						"workspace-trust-editor-cross",
						m.$ak.x,
						(0, f.localize)(11732, null),
					),
					se = (0, J.$$O)(
						"workspace-trust-editor-folder-picker",
						m.$ak.folder,
						(0, f.localize)(11733, null),
					),
					re = (0, J.$$O)(
						"workspace-trust-editor-edit-folder",
						m.$ak.edit,
						(0, f.localize)(11734, null),
					),
					le = (0, J.$$O)(
						"workspace-trust-editor-remove-folder",
						m.$ak.close,
						(0, f.localize)(11735, null),
					);
				let oe = class extends c.$1c {
					constructor(ge, be, Ce, Le, Fe, Oe, xe) {
						super(),
							(this.n = ge),
							(this.q = be),
							(this.r = Ce),
							(this.t = Le),
							(this.w = Fe),
							(this.y = Oe),
							(this.z = xe),
							(this.c = this.D(new u.$re())),
							(this.onDidAcceptEdit = this.c.event),
							(this.f = this.D(new u.$re())),
							(this.onDidRejectEdit = this.f.event),
							(this.g = this.D(new u.$re())),
							(this.onEdit = this.g.event),
							(this.h = this.D(new u.$re())),
							(this.onDelete = this.h.event),
							(this.m = ge.appendChild(
								(0, t.$)(".workspace-trusted-folders-description"),
							));
						const He = ge.appendChild((0, t.$)(".trusted-uris-table")),
							Ke = ge.appendChild((0, t.$)(".trusted-uris-button-bar"));
						(this.j = this.q.createInstance(
							v.$AMb,
							"WorkspaceTrust",
							He,
							new ae(),
							[
								{
									label: (0, f.localize)(11736, null),
									tooltip: "",
									weight: 1,
									templateId: ue.TEMPLATE_ID,
									project(Ee) {
										return Ee;
									},
								},
								{
									label: (0, f.localize)(11737, null),
									tooltip: "",
									weight: 8,
									templateId: $e.TEMPLATE_ID,
									project(Ee) {
										return Ee;
									},
								},
								{
									label: "",
									tooltip: "",
									weight: 1,
									minimumWidth: 75,
									maximumWidth: 75,
									templateId: pe.TEMPLATE_ID,
									project(Ee) {
										return Ee;
									},
								},
							],
							[
								this.q.createInstance(ue),
								this.q.createInstance($e, this),
								this.q.createInstance(pe, this, this.G),
							],
							{
								horizontalScrolling: !1,
								alwaysConsumeMouseWheel: !1,
								openOnSingleClick: !1,
								multipleSelectionSupport: !1,
								accessibilityProvider: {
									getAriaLabel: (Ee) => {
										const Ie = ye(this.y, Ee);
										return Ie === void 0 || Ie.length === 0
											? (0, f.localize)(11738, null, this.y.getUriLabel(Ee.uri))
											: (0, f.localize)(
													11739,
													null,
													this.y.getUriLabel(Ee.uri),
													Ie,
												);
									},
									getWidgetAriaLabel: () => (0, f.localize)(11740, null),
								},
								identityProvider: {
									getId(Ee) {
										return Ee.uri.toString();
									},
								},
							},
						)),
							this.D(
								this.j.onDidOpen((Ee) => {
									Ee &&
										Ee.element &&
										!Ee.browserEvent?.defaultPrevented &&
										this.edit(Ee.element, !0);
								}),
							);
						const Je = this.D(new w.$rob(Ke)),
							Te = this.D(
								Je.addButton({
									title: (0, f.localize)(11741, null),
									...W.$lyb,
								}),
							);
						(Te.label = (0, f.localize)(11742, null)),
							this.D(
								Te.onDidClick(async () => {
									const Ee = await this.z.showOpenDialog({
										canSelectFiles: !1,
										canSelectFolders: !0,
										canSelectMany: !1,
										defaultUri: this.G,
										openLabel: (0, f.localize)(11743, null),
										title: (0, f.localize)(11744, null),
									});
									Ee && this.t.setUrisTrust(Ee, !0);
								}),
							),
							this.D(
								this.t.onDidChangeTrustedFolders(() => {
									this.updateTable();
								}),
							);
					}
					C(ge) {
						const be = this.H.indexOf(ge);
						if (be === -1) {
							for (let Ce = 0; Ce < this.H.length; Ce++)
								if (this.H[Ce].uri === ge.uri) return Ce;
						}
						return be;
					}
					F(ge, be = !0) {
						const Ce = this.C(ge);
						Ce !== -1 &&
							(be && (this.j.domFocus(), this.j.setFocus([Ce])),
							this.j.setSelection([Ce]));
					}
					get G() {
						return this.r.getWorkspace().folders[0]?.uri || o.URI.file("/");
					}
					get H() {
						const ge = this.r.getWorkspace(),
							be = ge.folders.map((Fe) => Fe.uri);
						return (
							ge.configuration && be.push(ge.configuration),
							this.t
								.getTrustedUris()
								.map((Fe) => {
									let Oe = !1;
									for (const xe of be)
										Oe = Oe || this.w.extUri.isEqualOrParent(xe, Fe);
									return { uri: Fe, parentOfWorkspaceItem: Oe };
								})
								.sort((Fe, Oe) => {
									if (Fe.uri.scheme !== Oe.uri.scheme) {
										if (Fe.uri.scheme === g.Schemas.file) return -1;
										if (Oe.uri.scheme === g.Schemas.file) return 1;
									}
									const xe = Fe.uri.path.endsWith(".code-workspace"),
										He = Oe.uri.path.endsWith(".code-workspace");
									if (xe !== He) {
										if (xe) return 1;
										if (He) return -1;
									}
									return Fe.uri.fsPath.localeCompare(Oe.uri.fsPath);
								})
						);
					}
					layout() {
						this.j.layout(
							this.H.length * ae.ROW_HEIGHT + ae.HEADER_ROW_HEIGHT,
							void 0,
						);
					}
					updateTable() {
						const ge = this.H;
						this.n.classList.toggle("empty", ge.length === 0),
							(this.m.innerText = ge.length
								? (0, f.localize)(11745, null)
								: (0, f.localize)(11746, null)),
							this.j.splice(0, Number.POSITIVE_INFINITY, this.H),
							this.layout();
					}
					validateUri(ge, be) {
						if (!be) return null;
						if (be.uri.scheme === "vscode-vfs") {
							const Ce = ge.split(q.$lc.sep).filter((Le) => Le.length);
							if (Ce.length === 0 && ge.startsWith(q.$lc.sep))
								return {
									type: E.MessageType.WARNING,
									content: (0, f.localize)(11747, null, ye(this.y, be)),
								};
							if (Ce.length === 1)
								return {
									type: E.MessageType.WARNING,
									content: (0, f.localize)(11748, null, Ce[0], ye(this.y, be)),
								};
							if (Ce.length > 2)
								return {
									type: E.MessageType.ERROR,
									content: (0, f.localize)(11749, null, ge),
								};
						}
						return null;
					}
					acceptEdit(ge, be) {
						const Ce = this.t.getTrustedUris(),
							Le = Ce.findIndex((Fe) => this.w.extUri.isEqual(Fe, ge.uri));
						Le >= Ce.length || Le === -1 ? Ce.push(be) : (Ce[Le] = be),
							this.t.setTrustedUris(Ce),
							this.c.fire(ge);
					}
					rejectEdit(ge) {
						this.f.fire(ge);
					}
					async delete(ge) {
						this.j.focusNext(),
							await this.t.setUrisTrust([ge.uri], !1),
							this.j.getFocus().length === 0 && this.j.focusLast(),
							this.h.fire(ge),
							this.j.domFocus();
					}
					async edit(ge, be) {
						if (
							(ge.uri.scheme === g.Schemas.file ||
								(ge.uri.scheme === this.G.scheme &&
									this.w.extUri.isEqualAuthority(
										this.G.authority,
										ge.uri.authority,
									) &&
									!(0, T.$D8)(ge.uri))) &&
							be
						) {
							const Le = await this.z.showOpenDialog({
								canSelectFiles: !1,
								canSelectFolders: !0,
								canSelectMany: !1,
								defaultUri: ge.uri,
								openLabel: (0, f.localize)(11750, null),
								title: (0, f.localize)(11751, null),
							});
							Le ? this.acceptEdit(ge, Le[0]) : this.rejectEdit(ge);
						} else this.F(ge), this.g.fire(ge);
					}
				};
				oe = Ne(
					[
						j(1, y.$Li),
						j(2, D.$Vi),
						j(3, A.$pO),
						j(4, F.$Vl),
						j(5, $.$3N),
						j(6, l.$IO),
					],
					oe,
				);
				class ae {
					constructor() {
						this.headerRowHeight = ae.HEADER_ROW_HEIGHT;
					}
					static {
						this.HEADER_ROW_HEIGHT = 30;
					}
					static {
						this.ROW_HEIGHT = 24;
					}
					getHeight(ge) {
						return ae.ROW_HEIGHT;
					}
				}
				let pe = class {
					static {
						ne = this;
					}
					static {
						this.TEMPLATE_ID = "actions";
					}
					constructor(ge, be, Ce) {
						(this.c = ge),
							(this.d = be),
							(this.f = Ce),
							(this.templateId = ne.TEMPLATE_ID);
					}
					renderTemplate(ge) {
						const be = ge.appendChild((0, t.$)(".actions"));
						return { actionBar: new i.$eib(be) };
					}
					renderElement(ge, be, Ce, Le) {
						Ce.actionBar.clear();
						const Fe =
								ge.uri.scheme === g.Schemas.file ||
								(ge.uri.scheme === this.d.scheme &&
									this.f.extUri.isEqualAuthority(
										this.d.authority,
										ge.uri.authority,
									) &&
									!(0, T.$D8)(ge.uri)),
							Oe = [];
						Fe && Oe.push(this.h(ge)),
							Oe.push(this.g(ge)),
							Oe.push(this.j(ge)),
							Ce.actionBar.push(Oe, { icon: !0 });
					}
					g(ge) {
						return {
							label: "",
							class: N.ThemeIcon.asClassName(re),
							enabled: !0,
							id: "editTrustedUri",
							tooltip: (0, f.localize)(11752, null),
							run: () => {
								this.c.edit(ge, !1);
							},
						};
					}
					h(ge) {
						return {
							label: "",
							class: N.ThemeIcon.asClassName(se),
							enabled: !0,
							id: "pickerTrustedUri",
							tooltip: (0, f.localize)(11753, null),
							run: () => {
								this.c.edit(ge, !0);
							},
						};
					}
					j(ge) {
						return {
							label: "",
							class: N.ThemeIcon.asClassName(le),
							enabled: !0,
							id: "deleteTrustedUri",
							tooltip: (0, f.localize)(11754, null),
							run: async () => {
								await this.c.delete(ge);
							},
						};
					}
					disposeTemplate(ge) {
						ge.actionBar.dispose();
					}
				};
				pe = ne = Ne([j(2, F.$Vl)], pe);
				let $e = class {
					static {
						ee = this;
					}
					static {
						this.TEMPLATE_ID = "path";
					}
					constructor(ge, be) {
						(this.d = ge), (this.f = be), (this.templateId = ee.TEMPLATE_ID);
					}
					renderTemplate(ge) {
						const be = ge.appendChild((0, t.$)(".path")),
							Ce = be.appendChild((0, t.$)("div.path-label")),
							Le = new E.$Mob(be, this.f, {
								validationOptions: {
									validation: (xe) => this.d.validateUri(xe, this.c),
								},
								inputBoxStyles: W.$wyb,
							}),
							Fe = new c.$Zc(),
							Oe = Fe.add(new c.$Zc());
						return {
							element: be,
							pathLabel: Ce,
							pathInput: Le,
							disposables: Fe,
							renderDisposables: Oe,
						};
					}
					renderElement(ge, be, Ce, Le) {
						Ce.renderDisposables.clear(),
							(this.c = ge),
							Ce.renderDisposables.add(
								this.d.onEdit(async (Ke) => {
									ge === Ke &&
										(Ce.element.classList.add("input-mode"),
										Ce.pathInput.focus(),
										Ce.pathInput.select(),
										(Ce.element.parentElement.style.paddingLeft = "0px"));
								}),
							),
							Ce.renderDisposables.add(
								(0, t.$0fb)(Ce.pathInput.element, t.$$gb.DBLCLICK, (Ke) => {
									t.$ahb.stop(Ke);
								}),
							);
						const Fe = () => {
								Ce.element.classList.remove("input-mode"),
									(Ce.element.parentElement.style.paddingLeft = "5px");
							},
							Oe = () => {
								Fe();
								const Ke = Ce.pathInput.value,
									Je = (0, V.$Qg)(Ke)
										? ge.uri.with({ path: q.$lc.sep + (0, V.$Fg)(Ke) })
										: ge.uri.with({ path: Ke });
								(Ce.pathLabel.innerText = this.g(Je)),
									Je && this.d.acceptEdit(ge, Je);
							},
							xe = () => {
								Fe(), (Ce.pathInput.value = He), this.d.rejectEdit(ge);
							};
						Ce.renderDisposables.add(
							(0, t.$$fb)(Ce.pathInput.inputElement, t.$$gb.KEY_DOWN, (Ke) => {
								let Je = !1;
								Ke.equals(a.KeyCode.Enter)
									? (Oe(), (Je = !0))
									: Ke.equals(a.KeyCode.Escape) && (xe(), (Je = !0)),
									Je && (Ke.preventDefault(), Ke.stopPropagation());
							}),
						),
							Ce.renderDisposables.add(
								(0, t.$0fb)(Ce.pathInput.inputElement, t.$$gb.BLUR, () => {
									xe();
								}),
							);
						const He = this.g(ge.uri);
						(Ce.pathInput.value = He),
							(Ce.pathLabel.innerText = He),
							Ce.element.classList.toggle(
								"current-workspace-parent",
								ge.parentOfWorkspaceItem,
							);
					}
					disposeTemplate(ge) {
						ge.disposables.dispose(), ge.renderDisposables.dispose();
					}
					g(ge) {
						if (ge.scheme === g.Schemas.file) return (0, h.$xO)(ge.fsPath);
						if (ge.path.startsWith(q.$lc.sep)) {
							const be = ge.path.substring(1);
							if ((0, V.$Qg)(be, !0))
								return (0, h.$xO)(q.$kc.normalize(be), !0);
						}
						return ge.path;
					}
				};
				$e = ee = Ne([j(1, s.$Wxb)], $e);
				function ye(ve, ge) {
					return ge.uri.authority
						? ve.getHostLabel(ge.uri.scheme, ge.uri.authority)
						: (0, f.localize)(11755, null);
				}
				let ue = class {
					static {
						_ = this;
					}
					static {
						this.TEMPLATE_ID = "host";
					}
					constructor(ge) {
						(this.c = ge), (this.templateId = _.TEMPLATE_ID);
					}
					renderTemplate(ge) {
						const be = new c.$Zc(),
							Ce = be.add(new c.$Zc()),
							Le = ge.appendChild((0, t.$)(".host")),
							Fe = Le.appendChild((0, t.$)("div.host-label")),
							Oe = Le.appendChild((0, t.$)("div.button-bar"));
						return {
							element: Le,
							hostContainer: Fe,
							buttonBarContainer: Oe,
							disposables: be,
							renderDisposables: Ce,
						};
					}
					renderElement(ge, be, Ce, Le) {
						Ce.renderDisposables.clear(),
							Ce.renderDisposables.add({
								dispose: () => {
									(0, t.$9fb)(Ce.buttonBarContainer);
								},
							}),
							(Ce.hostContainer.innerText = ye(this.c, ge)),
							Ce.element.classList.toggle(
								"current-workspace-parent",
								ge.parentOfWorkspaceItem,
							),
							(Ce.hostContainer.style.display = ""),
							(Ce.buttonBarContainer.style.display = "none");
					}
					disposeTemplate(ge) {
						ge.disposables.dispose();
					}
				};
				ue = _ = Ne([j(0, $.$3N)], ue);
				let fe = class extends R.$JEb {
					static {
						te = this;
					}
					static {
						this.ID = "workbench.editor.workspaceTrust";
					}
					constructor(ge, be, Ce, Le, Fe, Oe, xe, He, Ke, Je, Te, Ee, Ie) {
						super(te.ID, ge, be, Ce, Le),
							(this.ib = Fe),
							(this.jb = Oe),
							(this.kb = xe),
							(this.lb = He),
							(this.mb = Ke),
							(this.nb = Je),
							(this.ob = Te),
							(this.pb = Ee),
							(this.qb = Ie),
							(this.xb = !1),
							(this.yb = this.D(new c.$Zc())),
							(this.Lb = []);
					}
					Y(ge) {
						(this.c = (0, t.$fhb)(
							ge,
							(0, t.$)(".workspace-trust-editor", { tabindex: "0" }),
						)),
							this.Bb(this.c);
						const be = (0, t.$)(".workspace-trust-editor-body");
						(this.cb = this.D(
							new C.$8hb(be, {
								horizontal: p.ScrollbarVisibility.Hidden,
								vertical: p.ScrollbarVisibility.Auto,
							}),
						)),
							(0, t.$fhb)(this.c, this.cb.getDomNode()),
							this.Db(be),
							this.Cb(be),
							this.c.style.setProperty(
								"--workspace-trust-selected-color",
								(0, L.$rP)(L.$eS),
							),
							this.c.style.setProperty(
								"--workspace-trust-unselected-color",
								(0, L.$rP)(L.$iS),
							),
							this.c.style.setProperty(
								"--workspace-trust-check-color",
								(0, L.$rP)(O.$NKb),
							),
							this.c.style.setProperty(
								"--workspace-trust-x-color",
								(0, L.$rP)(L.$gQ),
							),
							this.D(
								(0, t.$0fb)(this.c, t.$$gb.KEY_DOWN, (Ce) => {
									const Le = new G.$7fb(Ce);
									if (
										Le.equals(a.KeyCode.UpArrow) ||
										Le.equals(a.KeyCode.DownArrow)
									) {
										const Fe = [this.f, this.eb, this.fb, this.gb];
										let xe = Fe.findIndex((He) => (0, t.$Lgb)(He));
										Le.equals(a.KeyCode.DownArrow)
											? xe++
											: Le.equals(a.KeyCode.UpArrow) &&
												((xe = Math.max(0, xe)), xe--),
											(xe += Fe.length),
											(xe %= Fe.length),
											Fe[xe].focus();
									} else
										Le.equals(a.KeyCode.Escape)
											? this.c.focus()
											: Le.equals(a.KeyMod.CtrlCmd | a.KeyCode.Enter)
												? this.mb.canSetWorkspaceTrust() &&
													this.mb.setWorkspaceTrust(
														!this.mb.isWorkspaceTrusted(),
													)
												: Le.equals(
														a.KeyMod.CtrlCmd | a.KeyMod.Shift | a.KeyCode.Enter,
													) &&
													this.mb.canSetParentFolderTrust() &&
													this.mb.setParentFolderTrust(!0);
								}),
							);
					}
					focus() {
						super.focus(), this.c.focus();
					}
					async setInput(ge, be, Ce, Le) {
						await super.setInput(ge, be, Ce, Le),
							!Le.isCancellationRequested &&
								(await this.mb.workspaceTrustInitialized,
								this.sb(),
								await this.zb());
					}
					sb() {
						this.D(this.jb.onChange(() => this.zb())),
							this.D(this.nb.onDidChangeRestrictedSettings(() => this.zb())),
							this.D(this.mb.onDidChangeTrust(() => this.zb())),
							this.D(this.mb.onDidChangeTrustedFolders(() => this.zb()));
					}
					tb(ge) {
						return ge
							? "workspace-trust-header workspace-trust-trusted"
							: "workspace-trust-header workspace-trust-untrusted";
					}
					ub(ge) {
						if (ge) {
							if (this.mb.isWorkspaceTrustForced())
								return (0, f.localize)(11756, null);
							switch (this.ib.getWorkbenchState()) {
								case D.WorkbenchState.EMPTY:
									return (0, f.localize)(11757, null);
								case D.WorkbenchState.FOLDER:
									return (0, f.localize)(11758, null);
								case D.WorkbenchState.WORKSPACE:
									return (0, f.localize)(11759, null);
							}
						}
						return (0, f.localize)(11760, null);
					}
					vb(ge) {
						return N.ThemeIcon.asClassNameArray(e.$n2c);
					}
					wb(ge) {
						let be = "",
							Ce = "";
						switch (this.ib.getWorkbenchState()) {
							case D.WorkbenchState.EMPTY: {
								(be = ge
									? (0, f.localize)(11761, null)
									: (0, f.localize)(11762, null)),
									(Ce = ge
										? (0, f.localize)(11763, null)
										: (0, f.localize)(11764, null));
								break;
							}
							case D.WorkbenchState.FOLDER: {
								(be = ge
									? (0, f.localize)(11765, null)
									: (0, f.localize)(11766, null)),
									(Ce = ge
										? (0, f.localize)(11767, null)
										: (0, f.localize)(11768, null));
								break;
							}
							case D.WorkbenchState.WORKSPACE: {
								(be = ge
									? (0, f.localize)(11769, null)
									: (0, f.localize)(11770, null)),
									(Ce = ge
										? (0, f.localize)(11771, null)
										: (0, f.localize)(11772, null));
								break;
							}
						}
						return [be, Ce];
					}
					async zb() {
						if (this.xb) return;
						(this.xb = !0), this.yb.clear();
						const ge = this.mb.isWorkspaceTrusted();
						this.c.classList.toggle("trusted", ge),
							this.c.classList.toggle("untrusted", !ge),
							(this.m.innerText = this.ub(ge)),
							(this.j.className = "workspace-trust-title-icon"),
							this.j.classList.add(...this.vb(ge)),
							(this.r.innerText = "");
						const be = (0, t.$fhb)(this.r, (0, t.$)("div"));
						be.innerText = ge
							? (0, f.localize)(11773, null)
							: (0, f.localize)(11774, null, this.pb.nameShort);
						const Ce = (0, t.$fhb)(this.r, (0, t.$)("div")),
							Le = (0, f.localize)(
								11775,
								null,
								"command:workbench.trust.configure",
							);
						for (const He of (0, n.$Zpb)(Le).nodes)
							typeof He == "string"
								? (0, t.$fhb)(Ce, document.createTextNode(He))
								: this.yb.add(
										this.lb.createInstance(
											S.Link,
											Ce,
											{ ...He, tabIndex: -1 },
											{},
										),
									);
						(this.f.className = this.tb(ge)),
							this.c.setAttribute(
								"aria-label",
								`${(0, f.localize)(11776, null)}:  ${this.f.innerText}`,
							);
						const Fe = this.nb.restrictedSettings,
							Oe = I.$Io.as(b.$No.Configuration),
							xe = Fe.default.filter((He) => {
								const Ke = Oe.getConfigurationProperties()[He];
								if (
									Ke.scope === b.ConfigurationScope.APPLICATION ||
									Ke.scope === b.ConfigurationScope.MACHINE
								)
									return !1;
								if (Ke.deprecationMessage || Ke.markdownDeprecationMessage) {
									if (Fe.workspace?.includes(He)) return !0;
									if (Fe.workspaceFolder) {
										for (const Je of Fe.workspaceFolder.values())
											if (Je.includes(He)) return !0;
									}
									return !1;
								}
								return !0;
							}).length;
						this.Eb(xe, this.Ab()),
							this.hb.updateTable(),
							(this.cb.getDomNode().style.height = `calc(100% - ${this.f.clientHeight}px)`),
							this.cb.scanDomNode(),
							(this.xb = !1);
					}
					Ab() {
						const ge = new Set(),
							be = (0, T.$H8)(this.ib.getWorkspace()),
							Ce = this.jb.local.filter((Le) => Le.local).map((Le) => Le.local);
						for (const Le of Ce) {
							const Fe = this.ob.getEnablementState(Le);
							if (
								(Fe !== H.EnablementState.EnabledGlobally &&
									Fe !== H.EnablementState.EnabledWorkspace &&
									Fe !== H.EnablementState.DisabledByTrustRequirement &&
									Fe !== H.EnablementState.DisabledByExtensionDependency) ||
								(be &&
									this.kb.getExtensionVirtualWorkspaceSupportType(
										Le.manifest,
									) === !1)
							)
								continue;
							if (
								this.kb.getExtensionUntrustedWorkspaceSupportType(
									Le.manifest,
								) !== !0
							) {
								ge.add(Le.identifier.id);
								continue;
							}
							(0, x.$eq)(Ce, Le).some(
								(xe) =>
									this.kb.getExtensionUntrustedWorkspaceSupportType(
										xe.manifest,
									) === !1,
							) && ge.add(Le.identifier.id);
						}
						return ge.size;
					}
					Bb(ge) {
						(this.f = (0, t.$fhb)(
							ge,
							(0, t.$)(".workspace-trust-header", { tabIndex: "0" }),
						)),
							(this.g = (0, t.$fhb)(
								this.f,
								(0, t.$)(".workspace-trust-title"),
							)),
							(this.j = (0, t.$fhb)(
								this.g,
								(0, t.$)(".workspace-trust-title-icon"),
							)),
							(this.m = (0, t.$fhb)(
								this.g,
								(0, t.$)(".workspace-trust-title-text"),
							)),
							(this.r = (0, t.$fhb)(
								this.f,
								(0, t.$)(".workspace-trust-description"),
							));
					}
					Cb(ge) {
						this.gb = (0, t.$fhb)(
							ge,
							(0, t.$)(".workspace-trust-settings", { tabIndex: "0" }),
						);
						const be = (0, t.$fhb)(
							this.gb,
							(0, t.$)(".workspace-trusted-folders-title"),
						);
						(be.innerText = (0, f.localize)(11777, null)),
							(this.hb = this.D(this.lb.createInstance(oe, this.gb)));
					}
					Db(ge) {
						(this.db = (0, t.$fhb)(ge, (0, t.$)(".workspace-trust-features"))),
							(this.eb = (0, t.$fhb)(
								this.db,
								(0, t.$)(".workspace-trust-limitations.trusted", {
									tabIndex: "0",
								}),
							)),
							(this.fb = (0, t.$fhb)(
								this.db,
								(0, t.$)(".workspace-trust-limitations.untrusted", {
									tabIndex: "0",
								}),
							));
					}
					async Eb(ge, be) {
						(0, t.$9fb)(this.eb), (0, t.$9fb)(this.fb);
						const [Ce, Le] = this.wb(!0);
						this.Jb(this.eb, Ce, Le);
						const Fe =
							this.ib.getWorkbenchState() === D.WorkbenchState.EMPTY
								? [
										(0, f.localize)(11778, null),
										(0, f.localize)(11779, null),
										(0, f.localize)(11780, null),
									]
								: [
										(0, f.localize)(11781, null),
										(0, f.localize)(11782, null),
										(0, f.localize)(11783, null),
										(0, f.localize)(11784, null),
									];
						this.Kb(this.eb, Fe, N.ThemeIcon.asClassNameArray(Q));
						const [Oe, xe] = this.wb(!1);
						this.Jb(this.fb, Oe, xe);
						const He =
							this.ib.getWorkbenchState() === D.WorkbenchState.EMPTY
								? [
										(0, f.localize)(11785, null),
										(0, f.localize)(11786, null),
										me((0, f.localize)(11787, null, be, `command:${B.$YQb}`)),
									]
								: [
										(0, f.localize)(11788, null),
										(0, f.localize)(11789, null),
										me(
											ge
												? (0, f.localize)(
														11790,
														null,
														ge,
														"command:settings.filterUntrusted",
													)
												: (0, f.localize)(11791, null),
										),
										me((0, f.localize)(11792, null, be, `command:${B.$YQb}`)),
									];
						this.Kb(this.fb, He, N.ThemeIcon.asClassNameArray(Z)),
							this.mb.isWorkspaceTrusted()
								? this.mb.canSetWorkspaceTrust()
									? this.Hb(this.fb)
									: this.Ib(this.fb)
								: this.mb.canSetWorkspaceTrust() && this.Gb(this.eb);
					}
					Fb(ge, be, Ce) {
						const Le = (0, t.$fhb)(
								ge,
								(0, t.$)(".workspace-trust-buttons-row"),
							),
							Fe = (0, t.$fhb)(Le, (0, t.$)(".workspace-trust-buttons")),
							Oe = this.yb.add(new w.$rob(Fe));
						for (const { action: xe, keybinding: He } of be) {
							const Ke = Oe.addButtonWithDescription(W.$lyb);
							(Ke.label = xe.label),
								(Ke.enabled = Ce !== void 0 ? Ce : xe.enabled),
								(Ke.description = He.getLabel()),
								(Ke.element.ariaLabel =
									xe.label +
									", " +
									(0, f.localize)(11793, null, He.getAriaLabel())),
								this.yb.add(
									Ke.onDidClick((Je) => {
										Je && t.$ahb.stop(Je, !0), xe.run();
									}),
								);
						}
					}
					Gb(ge) {
						const Ce = [
							{
								action: new d.$rj(
									"workspace.trust.button.action.grant",
									(0, f.localize)(11794, null),
									void 0,
									!0,
									async () => {
										await this.mb.setWorkspaceTrust(!0);
									},
								),
								keybinding: this.qb.resolveUserBinding(
									X.$m ? "Cmd+Enter" : "Ctrl+Enter",
								)[0],
							},
						];
						if (this.mb.canSetParentFolderTrust()) {
							const Le = (0, D.$1i)(this.ib.getWorkspace()),
								Fe = (0, ie.$kh)((0, ie.$mh)(Le.uri)),
								Oe = (0, t.$fhb)(ge, (0, t.$)(".trust-message-box"));
							Oe.innerText = (0, f.localize)(11795, null, Fe);
							const xe = new d.$rj(
								"workspace.trust.button.action.grantParent",
								(0, f.localize)(11796, null),
								void 0,
								!0,
								async () => {
									await this.mb.setParentFolderTrust(!0);
								},
							);
							Ce.push({
								action: xe,
								keybinding: this.qb.resolveUserBinding(
									X.$m ? "Cmd+Shift+Enter" : "Ctrl+Shift+Enter",
								)[0],
							});
						}
						this.Fb(ge, Ce);
					}
					Hb(ge) {
						this.Fb(ge, [
							{
								action: new d.$rj(
									"workspace.trust.button.action.deny",
									(0, f.localize)(11797, null),
									void 0,
									!0,
									async () => {
										await this.mb.setWorkspaceTrust(!1);
									},
								),
								keybinding: this.qb.resolveUserBinding(
									X.$m ? "Cmd+Enter" : "Ctrl+Enter",
								)[0],
							},
						]);
					}
					Ib(ge) {
						if (this.ib.getWorkbenchState() === D.WorkbenchState.EMPTY) return;
						const be = (0, t.$fhb)(
							ge,
							(0, t.$)(".workspace-trust-untrusted-description"),
						);
						this.mb.isWorkspaceTrustForced()
							? (be.innerText = (0, f.localize)(11800, null))
							: (be.innerText =
									this.ib.getWorkbenchState() === D.WorkbenchState.WORKSPACE
										? (0, f.localize)(11798, null)
										: (0, f.localize)(11799, null));
					}
					Jb(ge, be, Ce) {
						const Le = (0, t.$fhb)(
								ge,
								(0, t.$)(".workspace-trust-limitations-header"),
							),
							Fe = (0, t.$fhb)(
								Le,
								(0, t.$)(".workspace-trust-limitations-title"),
							),
							Oe = (0, t.$fhb)(
								Fe,
								(0, t.$)(".workspace-trust-limitations-title-text"),
							),
							xe = (0, t.$fhb)(
								Le,
								(0, t.$)(".workspace-trust-limitations-subtitle"),
							);
						(Oe.innerText = be), (xe.innerText = Ce);
					}
					Kb(ge, be, Ce) {
						const Le = (0, t.$fhb)(
								ge,
								(0, t.$)(".workspace-trust-limitations-list-container"),
							),
							Fe = (0, t.$fhb)(Le, (0, t.$)("ul"));
						for (const Oe of be) {
							const xe = (0, t.$fhb)(Fe, (0, t.$)("li")),
								He = (0, t.$fhb)(xe, (0, t.$)(".list-item-icon")),
								Ke = (0, t.$fhb)(xe, (0, t.$)(".list-item-text"));
							He.classList.add(...Ce);
							const Je = (0, n.$Zpb)(Oe);
							for (const Te of Je.nodes)
								typeof Te == "string"
									? (0, t.$fhb)(Ke, document.createTextNode(Te))
									: this.yb.add(
											this.lb.createInstance(
												S.Link,
												Ke,
												{ ...Te, tabIndex: -1 },
												{},
											),
										);
						}
					}
					layout(ge) {
						this.isVisible() &&
							(this.hb.layout(),
							this.Lb.forEach((be) => {
								be.layout();
							}),
							this.cb.scanDomNode());
					}
				};
				(e.$o2c = fe),
					Ne([(0, r.$fi)(100)], fe.prototype, "zb", null),
					(e.$o2c =
						fe =
						te =
							Ne(
								[
									j(1, k.$km),
									j(2, M.$iP),
									j(3, P.$lq),
									j(4, D.$Vi),
									j(5, B.$MQb),
									j(6, z.$JSb),
									j(7, y.$Li),
									j(8, A.$pO),
									j(9, U.$RZ),
									j(10, H.$IQb),
									j(11, K.$Bk),
									j(12, Y.$uZ),
								],
								fe,
							));
				function me(ve) {
					const ge = /(.*)\[(.+)\]\s*\((.+)\)(.*)/;
					return ve.replace(ge, "$1[$2]($3)$4");
				}
			},
		),
		define(
			de[4360],
			he([
				1, 0, 102, 3, 4, 11, 81, 57, 5, 40, 30, 174, 55, 52, 14, 18, 8, 31, 166,
				192, 4359, 4002, 1059, 44, 32, 25, 54, 10, 94, 21, 87, 823, 349, 141,
				78, 468, 131, 73, 62, 1787, 12, 143, 224, 19, 9, 113, 22, 2534,
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
				z,
				F,
				x,
				H,
				q,
				V,
				G,
				K,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$r2c = e.$q2c = e.$p2c = void 0);
				const J = "workbench.banner.restrictedMode",
					W = "workspace.trust.startupPrompt.shown",
					X = "workbench.banner.restrictedMode.dismissed";
				let Y = class extends i.$1c {
					constructor(se, re, le) {
						super(),
							(this.a = z.$eQc.IsEnabled.bindTo(se)),
							this.a.set(re.isWorkspaceTrustEnabled()),
							(this.c = z.$eQc.IsTrusted.bindTo(se)),
							this.c.set(le.isWorkspaceTrusted()),
							this.D(le.onDidChangeTrust((oe) => this.c.set(oe)));
					}
				};
				(e.$p2c = Y),
					(e.$p2c = Y = Ne([j(0, p.$6j), j(1, a.$oO), j(2, a.$pO)], Y)),
					u.$Io
						.as(h.Extensions.Workbench)
						.registerWorkbenchContribution(Y, c.LifecyclePhase.Restored);
				let ie = class extends i.$1c {
					static {
						this.ID = "workbench.contrib.workspaceTrustRequestHandler";
					}
					constructor(se, re, le, oe, ae) {
						super(),
							(this.a = se),
							(this.c = re),
							(this.f = le),
							(this.g = oe),
							(this.h = ae),
							this.m();
					}
					get j() {
						return !(0, S.$Wi)((0, S.$1i)(this.f.getWorkspace()));
					}
					m() {
						this.D(
							this.h.onDidInitiateOpenFilesTrustRequest(async () => {
								await this.g.workspaceResolved;
								const se = [
									this.f.getWorkbenchState() !== S.WorkbenchState.EMPTY
										? (0, w.localize)(11665, null)
										: (0, w.localize)(11666, null),
									(0, w.localize)(11667, null),
								];
								await this.a.prompt({
									type: r.Severity.Info,
									message:
										this.f.getWorkbenchState() !== S.WorkbenchState.EMPTY
											? (0, w.localize)(11668, null)
											: (0, w.localize)(11669, null),
									buttons: [
										{
											label: (0, w.localize)(11670, null),
											run: ({ checkboxChecked: re }) =>
												this.h.completeOpenFilesTrustRequest(
													a.WorkspaceTrustUriResponse.Open,
													!!re,
												),
										},
										{
											label: (0, w.localize)(11671, null),
											run: ({ checkboxChecked: re }) =>
												this.h.completeOpenFilesTrustRequest(
													a.WorkspaceTrustUriResponse.OpenInNewWindow,
													!!re,
												),
										},
									],
									cancelButton: {
										run: () =>
											this.h.completeOpenFilesTrustRequest(
												a.WorkspaceTrustUriResponse.Cancel,
											),
									},
									checkbox: {
										label: (0, w.localize)(11672, null),
										checked: !1,
									},
									custom: {
										icon: n.$ak.shield,
										markdownDetails: se.map((re) => ({
											markdown: new P.$cl(re),
										})),
									},
								});
							}),
						),
							this.D(
								this.h.onDidInitiateWorkspaceTrustRequest(async (se) => {
									await this.g.workspaceResolved;
									const re = this.j
											? (0, w.localize)(11673, null)
											: (0, w.localize)(11674, null),
										le = (0, w.localize)(11675, null),
										oe = se?.message ?? le,
										ae = se?.buttons ?? [
											{
												label: this.j
													? (0, w.localize)(11676, null)
													: (0, w.localize)(11677, null),
												type: "ContinueWithTrust",
											},
											{ label: (0, w.localize)(11678, null), type: "Manage" },
										];
									ae.some(($e) => $e.type === "Cancel") ||
										ae.push({
											label: (0, w.localize)(11679, null),
											type: "Cancel",
										});
									const { result: pe } = await this.a.prompt({
										type: r.Severity.Info,
										message: re,
										custom: {
											icon: n.$ak.shield,
											markdownDetails: [
												{ markdown: new P.$cl(oe) },
												{ markdown: new P.$cl((0, w.localize)(11680, null)) },
											],
										},
										buttons: ae
											.filter(($e) => $e.type !== "Cancel")
											.map(($e) => ({ label: $e.label, run: () => $e.type })),
										cancelButton: (() => {
											const $e = ae.find((ye) => ye.type === "Cancel");
											if ($e) return { label: $e.label, run: () => $e.type };
										})(),
									});
									switch (pe) {
										case "ContinueWithTrust":
											await this.h.completeWorkspaceTrustRequest(!0);
											break;
										case "ContinueWithoutTrust":
											await this.h.completeWorkspaceTrustRequest(void 0);
											break;
										case "Manage":
											this.h.cancelWorkspaceTrustRequest(),
												await this.c.executeCommand(z.$fQc);
											break;
										case "Cancel":
											this.h.cancelWorkspaceTrustRequest();
											break;
									}
								}),
							);
					}
				};
				(e.$q2c = ie),
					(e.$q2c = ie =
						Ne(
							[j(0, d.$GO), j(1, o.$ek), j(2, S.$Vi), j(3, a.$pO), j(4, a.$qO)],
							ie,
						));
				let ne = class extends i.$1c {
					constructor(
						se,
						re,
						le,
						oe,
						ae,
						pe,
						$e,
						ye,
						ue,
						fe,
						me,
						ve,
						ge,
						be,
						Ce,
					) {
						super(),
							(this.f = se),
							(this.g = re),
							(this.h = le),
							(this.j = oe),
							(this.m = ae),
							(this.n = pe),
							(this.q = $e),
							(this.r = ye),
							(this.s = ue),
							(this.t = fe),
							(this.u = me),
							(this.w = ve),
							(this.y = ge),
							(this.z = be),
							(this.C = Ce),
							(this.a = "status.workspaceTrust"),
							(this.c = this.D(new i.$2c())),
							(async () => {
								if (
									(await this.j.workspaceTrustInitialized,
									this.h.isWorkspaceTrustEnabled())
								)
									if (
										(this.F(),
										this.S(this.j.isWorkspaceTrusted()),
										this.u.hasFocus)
									)
										this.I();
									else {
										const Le = this.u.onDidChangeFocus((Fe) => {
											Fe && (Le.dispose(), this.I());
										});
									}
							})();
					}
					F() {
						this.D(
							this.g.onWillChangeWorkspaceFolders((se) => {
								if (se.fromCache || !this.h.isWorkspaceTrustEnabled()) return;
								const re = async (le) => {
									if (
										this.j.isWorkspaceTrusted() &&
										(le.changes.added.length || le.changes.changed.length)
									) {
										const ae = await Promise.all(
											le.changes.added.map((pe) =>
												this.j.getUriTrustInfo(pe.uri),
											),
										);
										if (!ae.map((pe) => pe.trusted).every((pe) => pe)) {
											const { confirmed: pe } = await this.f.confirm({
												type: r.Severity.Info,
												message: (0, w.localize)(11681, null),
												detail: (0, w.localize)(11682, null),
												cancelButton: (0, w.localize)(11683, null),
												custom: { icon: n.$ak.shield },
											});
											await this.j.setUrisTrust(
												ae.map(($e) => $e.uri),
												pe,
											);
										}
									}
								};
								return se.join(re(se));
							}),
						),
							this.D(
								this.j.onDidChangeTrust((se) => {
									this.G(se);
								}),
							),
							this.D(
								this.r.onDidInitiateWorkspaceTrustRequestOnStartup(async () => {
									let se, re, le, oe;
									const ae = await this.M();
									ae && this.w.aiGeneratedWorkspaceTrust
										? ((se = this.w.aiGeneratedWorkspaceTrust.title),
											(re =
												this.w.aiGeneratedWorkspaceTrust
													.startupTrustRequestLearnMore),
											(le = this.w.aiGeneratedWorkspaceTrust.trustOption),
											(oe = this.w.aiGeneratedWorkspaceTrust.dontTrustOption))
										: console.warn(
												"AI generated workspace trust dialog contents not available.",
											);
									const pe =
										se ??
										(this.L
											? (0, w.localize)(11684, null)
											: (0, w.localize)(11685, null));
									let $e;
									const ye = (0, S.$1i)(this.g.getWorkspace()),
										ue = (0, S.$Wi)(ye),
										fe = (0, S.$Xi)(ye);
									if (!ae && this.j.canSetParentFolderTrust()) {
										const me = (0, q.$kh)((0, q.$mh)(ye.uri));
										$e = (0, w.localize)(11686, null, me);
									}
									this.H(
										pe,
										{
											label: le ?? (0, w.localize)(11687, null),
											sublabel: ue
												? (0, w.localize)(11688, null)
												: (0, w.localize)(11689, null),
										},
										{
											label: oe ?? (0, w.localize)(11690, null),
											sublabel: ue
												? (0, w.localize)(11691, null)
												: (0, w.localize)(11692, null),
										},
										[
											ue
												? (0, w.localize)(11694, null, this.w.nameShort)
												: (0, w.localize)(11693, null, this.w.nameShort),
											re ?? (0, w.localize)(11695, null),
											fe
												? ""
												: `\`${this.t.getWorkspaceLabel(ye, { verbose: B.Verbosity.LONG })}\``,
										],
										$e,
									);
								}),
							);
					}
					G(se) {
						const re = this.N(!se);
						this.S(se), re && (se ? this.s.hide(J) : this.s.show(re));
					}
					async H(se, re, le, oe, ae) {
						await this.f.prompt({
							type: r.Severity.Info,
							message: se,
							checkbox: ae ? { label: ae } : void 0,
							buttons: [
								{
									label: re.label,
									run: async ({ checkboxChecked: pe }) => {
										pe
											? await this.j.setParentFolderTrust(!0)
											: await this.r.completeWorkspaceTrustRequest(!0);
									},
								},
								{
									label: le.label,
									run: () => {
										this.G(!1), this.r.cancelWorkspaceTrustRequest();
									},
								},
							],
							custom: {
								buttonDetails: [re.sublabel, le.sublabel],
								disableCloseAction: !0,
								icon: n.$ak.shield,
								markdownDetails: oe.map((pe) => ({ markdown: new P.$cl(pe) })),
							},
						}),
							this.q.store(
								W,
								!0,
								k.StorageScope.WORKSPACE,
								k.StorageTarget.MACHINE,
							);
					}
					async I() {
						if (this.j.isWorkspaceTrusted()) {
							this.G(!0);
							return;
						}
						if (this.j.canSetWorkspaceTrust()) {
							if ((0, M.$H8)(this.g.getWorkspace())) {
								this.G(!1);
								return;
							}
							if (this.g.getWorkbenchState() === S.WorkbenchState.EMPTY) {
								this.G(!1);
								return;
							}
							if (this.J === "never") {
								this.G(!1);
								return;
							}
							if (
								this.J === "once" &&
								this.q.getBoolean(W, k.StorageScope.WORKSPACE, !1)
							) {
								this.G(!1);
								return;
							}
							this.r.requestWorkspaceTrustOnStartup();
						}
					}
					get J() {
						return this.m.getValue(y.$zSb);
					}
					get L() {
						return !(0, S.$Wi)((0, S.$1i)(this.g.getWorkspace()));
					}
					async M() {
						const se = V.URI.joinPath(
							this.z.workspaceStorageHome,
							"aiGeneratedWorkspaces.json",
						);
						return await this.C.exists(se).then(async (re) => {
							if (re)
								try {
									const le = await this.C.readFile(se);
									if (
										JSON.parse(le.value.toString()).indexOf(
											this.g.getWorkspace().folders[0].uri.toString(),
										) > -1
									)
										return !0;
								} catch {}
							return !1;
						});
					}
					N(se) {
						const re = this.q.getBoolean(X, k.StorageScope.WORKSPACE, !1);
						if (this.Q === "never" || (this.Q === "untilDismissed" && re))
							return;
						const le = [
							{
								label: (0, w.localize)(11696, null),
								href: "command:" + z.$fQc,
							},
							{
								label: (0, w.localize)(11697, null),
								href: "https://aka.ms/vscode-workspace-trust",
							},
						];
						return {
							id: J,
							icon: s.$n2c,
							ariaLabel: this.O(),
							message: this.P(),
							actions: le,
							onClose: () => {
								se &&
									this.q.store(
										X,
										!0,
										k.StorageScope.WORKSPACE,
										k.StorageTarget.MACHINE,
									);
							},
						};
					}
					O() {
						switch (this.g.getWorkbenchState()) {
							case S.WorkbenchState.EMPTY:
								return (0, w.localize)(11698, null);
							case S.WorkbenchState.FOLDER:
								return (0, w.localize)(11699, null);
							case S.WorkbenchState.WORKSPACE:
								return (0, w.localize)(11700, null);
						}
					}
					P() {
						switch (this.g.getWorkbenchState()) {
							case S.WorkbenchState.EMPTY:
								return (0, w.localize)(11701, null);
							case S.WorkbenchState.FOLDER:
								return (0, w.localize)(11702, null);
							case S.WorkbenchState.WORKSPACE:
								return (0, w.localize)(11703, null);
						}
					}
					get Q() {
						const se = this.m.getValue(y.$ASb);
						return se !== "always" &&
							F.$r &&
							!this.y.getConnection()?.remoteAuthority
							? "never"
							: se;
					}
					R() {
						let se = "",
							re;
						switch (this.g.getWorkbenchState()) {
							case S.WorkbenchState.EMPTY: {
								(se = (0, w.localize)(11704, null)),
									(re = {
										value: (0, w.localize)(
											11705,
											null,
											`command:${N.$YQb}`,
											`command:${z.$fQc}`,
										),
										isTrusted: !0,
										supportThemeIcons: !0,
									});
								break;
							}
							case S.WorkbenchState.FOLDER: {
								(se = (0, w.localize)(11706, null)),
									(re = {
										value: (0, w.localize)(
											11707,
											null,
											`command:${N.$YQb}`,
											`command:${z.$fQc}`,
										),
										isTrusted: !0,
										supportThemeIcons: !0,
									});
								break;
							}
							case S.WorkbenchState.WORKSPACE: {
								(se = (0, w.localize)(11708, null)),
									(re = {
										value: (0, w.localize)(
											11709,
											null,
											`command:${N.$YQb}`,
											`command:${z.$fQc}`,
										),
										isTrusted: !0,
										supportThemeIcons: !0,
									});
								break;
							}
						}
						return {
							name: (0, w.localize)(11710, null),
							text: `$(shield) ${(0, w.localize)(11711, null)}`,
							ariaLabel: se,
							tooltip: re,
							command: z.$fQc,
							kind: "prominent",
						};
					}
					S(se) {
						if (se && this.c.value) {
							this.c.clear();
							return;
						}
						if (!se && !this.c.value) {
							const re = this.R();
							this.c.value = this.n.addEntry(
								re,
								this.a,
								f.StatusbarAlignment.LEFT,
								0.99 * Number.MAX_VALUE,
							);
						}
					}
				};
				(e.$r2c = ne),
					(e.$r2c = ne =
						Ne(
							[
								j(0, d.$GO),
								j(1, S.$Vi),
								j(2, a.$oO),
								j(3, a.$pO),
								j(4, T.$gj),
								j(5, f.$d6b),
								j(6, k.$lq),
								j(7, a.$qO),
								j(8, D.$$uc),
								j(9, B.$3N),
								j(10, L.$asb),
								j(11, U.$Bk),
								j(12, x.$$m),
								j(13, G.$Ti),
								j(14, K.$ll),
							],
							ne,
						)),
					(0, h.$s6)(ie.ID, ie, h.WorkbenchPhase.BlockRestore),
					u.$Io
						.as(h.Extensions.Workbench)
						.registerWorkbenchContribution(ne, c.LifecyclePhase.Restored);
				class ee {
					canSerialize(se) {
						return !0;
					}
					serialize(se) {
						return "";
					}
					deserialize(se) {
						return se.createInstance(l.$m2c);
					}
				}
				u.$Io.as($.$a1.EditorFactory).registerEditorSerializer(l.$m2c.ID, ee),
					u.$Io
						.as($.$a1.EditorPane)
						.registerEditorPane(
							b.$vVb.create(s.$o2c, s.$o2c.ID, (0, w.localize)(11712, null)),
							[new t.$Ji(l.$m2c)],
						);
				const _ = "workbench.trust.configure",
					te = (0, w.localize2)(11727, "Workspaces");
				(0, E.$4X)(
					class extends E.$3X {
						constructor() {
							super({
								id: _,
								title: (0, w.localize2)(
									11728,
									"Configure Workspace Trust Settings",
								),
								precondition: p.$Kj.and(
									z.$eQc.IsEnabled,
									p.$Kj.equals(`config.${y.$ySb}`, !0),
								),
								category: te,
								f1: !0,
							});
						}
						run(Z) {
							Z.get(O.$7Z).openUserSettings({
								jsonEditor: !1,
								query: `@tag:${R.$VBc}`,
							});
						}
					},
				),
					(0, E.$4X)(
						class extends E.$3X {
							constructor() {
								super({
									id: z.$fQc,
									title: (0, w.localize2)(11729, "Manage Workspace Trust"),
									precondition: p.$Kj.and(
										z.$eQc.IsEnabled,
										p.$Kj.equals(`config.${y.$ySb}`, !0),
									),
									category: te,
									f1: !0,
								});
							}
							run(Z) {
								const se = Z.get(g.$IY),
									le = Z.get(m.$Li).createInstance(l.$m2c);
								se.openEditor(le, { pinned: !0 });
							}
						},
					),
					u.$Io
						.as(C.$No.Configuration)
						.registerConfiguration({
							...H.$w6,
							properties: {
								[y.$ySb]: {
									type: "boolean",
									default: !1,
									description: (0, w.localize)(11713, null),
									tags: [R.$VBc],
									scope: C.ConfigurationScope.APPLICATION,
								},
								[y.$zSb]: {
									type: "string",
									default: "once",
									description: (0, w.localize)(11714, null),
									tags: [R.$VBc],
									scope: C.ConfigurationScope.APPLICATION,
									enum: ["always", "once", "never"],
									enumDescriptions: [
										(0, w.localize)(11715, null),
										(0, w.localize)(11716, null),
										(0, w.localize)(11717, null),
									],
								},
								[y.$ASb]: {
									type: "string",
									default: "untilDismissed",
									description: (0, w.localize)(11718, null),
									tags: [R.$VBc],
									scope: C.ConfigurationScope.APPLICATION,
									enum: ["always", "untilDismissed", "never"],
									enumDescriptions: [
										(0, w.localize)(11719, null),
										(0, w.localize)(11720, null),
										(0, w.localize)(11721, null),
									],
								},
								[y.$BSb]: {
									type: "string",
									default: "prompt",
									markdownDescription: (0, w.localize)(11722, null, y.$CSb),
									tags: [R.$VBc],
									scope: C.ConfigurationScope.APPLICATION,
									enum: ["prompt", "open", "newWindow"],
									enumDescriptions: [
										(0, w.localize)(11723, null),
										(0, w.localize)(11724, null),
										(0, w.localize)(11725, null),
									],
								},
								[y.$CSb]: {
									type: "boolean",
									default: !0,
									markdownDescription: (0, w.localize)(11726, null, y.$BSb),
									tags: [R.$VBc],
									scope: C.ConfigurationScope.APPLICATION,
								},
							},
						});
				let Q = class extends i.$1c {
					constructor(se, re, le, oe, ae) {
						super(),
							(this.a = se),
							(this.c = re),
							(this.f = le),
							(this.g = oe),
							(this.h = ae),
							this.h.workspaceTrustInitialized.then(() => {
								this.j(),
									this.m(this.h.isWorkspaceTrusted()),
									this.D(this.h.onDidChangeTrust((pe) => this.m(pe)));
							});
					}
					j() {
						if (!this.g.isWorkspaceTrustEnabled()) {
							const se = this.a.disableWorkspaceTrust;
							this.c.publicLog2("workspaceTrustDisabled", {
								reason: se ? "cli" : "setting",
							});
							return;
						}
						this.c.publicLog2("workspaceTrustFolderCounts", {
							trustedFoldersCount: this.h.getTrustedUris().length,
						});
					}
					async m(se) {
						if (
							this.g.isWorkspaceTrustEnabled() &&
							(this.c.publicLog2("workspaceTrustStateChanged", {
								workspaceId: this.f.getWorkspace().id,
								isTrusted: se,
							}),
							se)
						) {
							const re = (le) => {
								let oe = (0, I.$pc)(le),
									ae = 0;
								for (; (0, I.$rc)(oe) !== oe && ae < 100; )
									(oe = (0, I.$rc)(oe)), ae++;
								return ae;
							};
							for (const le of this.f.getWorkspace().folders) {
								const { trusted: oe, uri: ae } = await this.h.getUriTrustInfo(
									le.uri,
								);
								if (!oe) continue;
								const pe = re(le.uri.fsPath),
									$e = re(ae.fsPath),
									ye = pe - $e;
								this.c.publicLog2("workspaceFolderDepthBelowTrustedFolder", {
									workspaceFolderDepth: pe,
									trustedFolderDepth: $e,
									delta: ye,
								});
							}
						}
					}
				};
				(Q = Ne(
					[j(0, A.$r8), j(1, v.$km), j(2, S.$Vi), j(3, a.$oO), j(4, a.$pO)],
					Q,
				)),
					u.$Io
						.as(h.Extensions.Workbench)
						.registerWorkbenchContribution(Q, c.LifecyclePhase.Restored);
			},
		),
		define(
			de[4361],
			he([1, 0, 124, 33, 3, 22, 5, 25, 721, 819, 819, 398, 186, 54, 287]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$9yc = void 0);
				let g = class extends a.$Xyc {
					constructor(f, b, s, l, y) {
						super(),
							(this.b = f),
							(this.c = b),
							(this.d = s),
							(this.e = l),
							(this.f = y),
							(this.a = this.e.createInstance(m.$S9b));
					}
					async call(f, b, s, l) {
						if (!f)
							throw new Error(
								"No fileSearch parameters provided. Need to give a query.",
							);
						const y = "fileSearchToolMaxResults";
						this.f.maybeRefreshConfig(y);
						const $ = this.f.getCachedConfig(y) ?? 10,
							v = new i.$Ce(),
							S = await this.a.doGetPicksPublic(
								f.query,
								{
									enableEditorSymbolSearch: !0,
									excludeNotepads: !0,
									excludeSemanticSearch: !0,
									excludeCursorIgnore: !0,
								},
								new w.$Zc(),
								v.token,
							);
						let I = [];
						if ((0, u.$R_b)(S)) {
							const [P, k] = await Promise.all([
								Promise.resolve(S.picks),
								S.additionalPicks,
							]);
							I = [...p(P), ...p(k)];
						} else if (S instanceof Promise) {
							const P = await S;
							I = p(P);
						} else I = p(S);
						const T = new t.$Xx({
							files: I.slice(0, $).map((P) => ({ uri: P.uri.fsPath })),
							numResults: I.length,
							limitHit: I.length >= $,
						});
						return console.log("[fileSearchHandler] result:", T), T;
					}
				};
				(e.$9yc = g),
					(e.$9yc = g =
						Ne(
							[
								j(0, E.$ll),
								j(1, d.$Vi),
								j(2, h.$p7),
								j(3, C.$Li),
								j(4, n.$H7b),
							],
							g,
						));
				function p(o) {
					return (
						(0, r.$S_b)(o) && (o = o.items),
						o
							.filter((f) => "resource" in f && f.resource !== void 0)
							.map((f) => ({
								uri: f.resource,
								fileName: (0, c.$sc)(f.resource.fsPath),
								isCurrentFile: !1,
								labelMatches: f.highlights?.label || [],
								descriptionMatches: f.highlights?.description || [],
							}))
					);
				}
			},
		),
		define(
			de[4362],
			he([
				1, 0, 124, 33, 3, 22, 5, 63, 25, 721, 819, 287, 398, 241, 42, 821, 54,
				271,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$4yc = void 0);
				let f = class extends h.$Xyc {
					constructor(l, y, $, v, S, I, T, P) {
						super(),
							(this.b = l),
							(this.c = y),
							(this.d = $),
							(this.e = v),
							(this.g = S),
							(this.h = I),
							(this.i = T),
							(this.j = P),
							(this.a = this.h.createInstance(r.$S9b));
					}
					async k(l, y) {
						const $ = new i.$Ce();
						try {
							const v = await this.a.doGetPicksPublic(
								l,
								{
									enableEditorSymbolSearch: !1,
									excludeNotepads: !0,
									excludeSemanticSearch: !0,
									excludeCursorIgnore: !0,
								},
								new w.$Zc(),
								$.token,
							);
							let S = [];
							if ((0, u.$R_b)(v)) {
								const [I, T] = await Promise.all([
									Promise.resolve(v.picks),
									v.additionalPicks,
								]);
								S = [...b(I), ...b(T)].map((k) => k.uri);
							} else if (v instanceof Promise) {
								const I = await v;
								S = b(I).map((P) => P.uri);
							} else S = b(v).map((T) => T.uri);
							return S.filter(
								(I) => I.scheme === "file" || I.scheme === "vscode-remote",
							)
								.slice(0, y)
								.map((I) => this.i.asRelativePath(I));
						} catch (v) {
							return console.error("Error finding similar files:", v), [];
						} finally {
							$.dispose();
						}
					}
					async call(l, y, $) {
						if (!l)
							throw new Error(
								"No read file parameters provided. Need to give at least the path.",
							);
						const v = await this.b.getMagicURIForText(l.relativeWorkspacePath);
						if (v && this.j.shouldIgnoreUri(v))
							throw new Error(
								`Could not find file ${l.relativeWorkspacePath} in the workspace.`,
							);
						if (!v) {
							const k = await this.k(l.relativeWorkspacePath, 3),
								L =
									k.length > 0
										? `Could not find file '${l.relativeWorkspacePath}'. Did you mean one of:
${k
	.map((D) => `- ${D}`)
	.join(`
`)}`
										: `Could not find file '${l.relativeWorkspacePath}' in the workspace.`;
							throw new g.$3yc({
								clientVisibleErrorMessage: L,
								modelVisibleErrorMessage: L,
								actualErrorMessage: `File not found: ${l.relativeWorkspacePath}`,
							});
						}
						const S =
								this.e.getCachedConfig("readFilesToolMaxFileSizeInBytes") ??
								2e6,
							I = (S / 1e6).toFixed(2),
							T = await this.c.stat(v);
						if (T.size > S)
							throw new g.$3yc({
								clientVisibleErrorMessage: `File is too large, >${I}MB`,
								modelVisibleErrorMessage: `The file is too large to read, was >${I}MB`,
								actualErrorMessage: `File is too large to read, was >${I}MB, size: ${T.size} bytes`,
							});
						let P;
						try {
							P = await this.d.createModelReference(v);
							const k = P.object.textEditorModel.getValue(),
								L = k.split(`
`),
								D = "readFilesToolMaxLines",
								M = "readFileToolMaxChars";
							this.e.maybeRefreshConfig(D), this.e.maybeRefreshConfig(M);
							const N = this.e.getCachedConfig(D) ?? 250,
								A = this.e.getCachedConfig(M) ?? 1e5,
								R = !(l.readEntireFile && l.fileIsAllowedToBeReadEntirely),
								O = l.readEntireFile && !l.fileIsAllowedToBeReadEntirely;
							let B = !1;
							if (R) {
								let U,
									z,
									F,
									x = !1;
								O
									? ((U = l.startLineOneIndexed ?? 1),
										(z = l.endLineOneIndexedInclusive ?? N + U - 1),
										(F = !1))
									: l.endLineOneIndexedInclusive === void 0 ||
											l.startLineOneIndexed === void 0
										? ((x = !0), (U = 1), (z = N), (F = !1))
										: l.endLineOneIndexedInclusive - l.startLineOneIndexed > N
											? ((U = l.startLineOneIndexed),
												(z = l.startLineOneIndexed + N),
												(F = !0))
											: ((U = l.startLineOneIndexed),
												(z = l.endLineOneIndexedInclusive),
												(F = !1));
								const H = Math.max(U, 1),
									q = Math.min(z, L.length);
								let V = L.slice(H - 1, q).join(`
`);
								return (
									V.length > A &&
										((B = !0),
										(V = V.slice(0, A)),
										(V = V.split(`
`)
											.slice(0, -1)
											.join(`
`))),
									new t.$5x({
										contents: V,
										didDowngradeToLineRange: O,
										didShortenLineRange: F,
										didShortenCharRange: B,
										didSetDefaultLineRange: x,
										fullFileContents: k,
										startLineOneIndexed: H,
										endLineOneIndexedInclusive: q,
										relativeWorkspacePath: l.relativeWorkspacePath,
									})
								);
							} else {
								let U = k;
								return (
									U.length > A &&
										((B = !0),
										(U = U.slice(0, A)),
										(U = U.split(`
`)
											.slice(0, -1)
											.join(`
`))),
									new t.$5x({
										contents: U,
										fullFileContents: k,
										didDowngradeToLineRange: !1,
										didShortenCharRange: B,
									})
								);
							}
						} finally {
							P?.dispose();
						}
					}
				};
				(e.$4yc = f),
					(e.$4yc = f =
						Ne(
							[
								j(0, c.$q8b),
								j(1, E.$ll),
								j(2, n.$MO),
								j(3, a.$H7b),
								j(4, d.$DJ),
								j(5, C.$Li),
								j(6, m.$Vi),
								j(7, o.$Q9b),
							],
							f,
						));
				function b(s) {
					return (
						(0, u.$S_b)(s) && (s = s.items),
						s
							.filter((l) => "resource" in l && l.resource !== void 0)
							.map((l) => ({
								uri: l.resource,
								fileName: (0, p.$sc)(l.resource.fsPath),
								isCurrentFile: !1,
								labelMatches: l.highlights?.label || [],
								descriptionMatches: l.highlights?.description || [],
							}))
					);
				}
			},
		),
		define(
			de[4363],
			he([
				1, 0, 124, 3, 20, 5, 398, 3644, 126, 209, 167, 3930, 3931, 4362, 3929,
				3977, 4361, 3645, 3975, 3976, 821, 3979, 29, 3978, 45, 86,
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
					(e.$ezc = e.$dzc = void 0),
					(e.$dzc = (0, E.$Mi)("toolV2Service"));
				let I = class extends i.$1c {
					constructor(k, L, D) {
						super(),
							(this.a = k),
							(this.b = L),
							(this.c = D),
							this.a.registerHandler(
								t.ClientSideToolV2.READ_SEMSEARCH_FILES,
								d.$Yyc,
							),
							this.a.registerHandler(t.ClientSideToolV2.RIPGREP_SEARCH, a.$1yc),
							this.a.registerHandler(t.ClientSideToolV2.READ_FILE, c.$4yc),
							this.a.registerHandler(t.ClientSideToolV2.LIST_DIR, n.$5yc),
							this.a.registerHandler(t.ClientSideToolV2.EDIT_FILE, g.$8yc),
							this.a.registerHandler(t.ClientSideToolV2.FILE_SEARCH, p.$9yc),
							this.a.registerHandler(
								t.ClientSideToolV2.SEMANTIC_SEARCH_FULL,
								o.$0yc,
							),
							this.a.registerHandler(t.ClientSideToolV2.CREATE_FILE, f.$$yc),
							this.a.registerHandler(t.ClientSideToolV2.DELETE_FILE, b.$_yc),
							this.a.registerHandler(t.ClientSideToolV2.REAPPLY, l.$azc),
							this.a.registerHandler(t.ClientSideToolV2.PARALLEL_APPLY, $.$bzc),
							this.a.registerHandler(
								t.ClientSideToolV2.RUN_TERMINAL_COMMAND_V2,
								h.$2yc,
							),
							this.a.registerHandler(
								t.ClientSideToolV2.RUN_TERMINAL_COMMAND,
								T(t.ClientSideToolV2.RUN_TERMINAL_COMMAND),
								!0,
							),
							this.a.registerHandler(
								t.ClientSideToolV2.READ_FILE_FOR_IMPORTS,
								T(t.ClientSideToolV2.READ_FILE_FOR_IMPORTS),
								!0,
							);
					}
					async runStreamingTool(k, L, D, M) {
						if (k.tool === t.ClientSideToolV2.UNSPECIFIED)
							throw new Error(
								"[composer] ToolFormer: tool call is unspecified",
							);
						await this.a
							.getHandler(k.tool)
							.streamedCall(k.params.value, L, k.toolCallId, D, M);
					}
					async finishStreamingTool(k, L, D) {
						if (k.tool === t.ClientSideToolV2.UNSPECIFIED)
							throw new Error(
								"[composer] ToolFormer: tool call is unspecified",
							);
						const N = await this.a
							.getHandler(k.tool)
							.finishStream(k.params.value, L, k.toolCallId, D);
						return new t.$Mx({
							tool: k.tool,
							result: { case: C.$Uyc[k.tool].returnName, value: N },
						});
					}
					async runTool(k, L, D, M) {
						const N = this.b.getToolFormer(D);
						if (!N)
							throw new Error("[composer] ToolFormer: capability not found");
						const A = N.getAbortSignal();
						return new Promise((R, O) => {
							(async () => {
								try {
									if (k.tool === t.ClientSideToolV2.UNSPECIFIED)
										throw new Error(
											"[composer] ToolFormer: tool call is unspecified",
										);
									const z = await this.a
											.getHandler(k.tool)
											.call(k.params.value, L, k.toolCallId, D, M),
										F = new t.$Mx({
											tool: k.tool,
											result: { case: C.$Uyc[k.tool].returnName, value: z },
										});
									R(F);
								} catch (U) {
									O(U);
								}
							})(),
								A.addEventListener("abort", () => {
									try {
										if (k.tool === t.ClientSideToolV2.UNSPECIFIED)
											throw new Error(
												"[composer] ToolFormer: tool call is unspecified",
											);
										const U = N.getBubbleDataByToolCallId(k.toolCallId);
										U
											? R(
													new t.$Mx({
														tool: k.tool,
														result: {
															case: C.$Uyc[k.tool].returnName,
															value: U.result,
														},
													}),
												)
											: O(new y.$9());
									} catch (U) {
										O(U);
									}
								});
						});
					}
					async setupTool(k, L, D) {
						if (k.tool === t.ClientSideToolV2.UNSPECIFIED)
							throw new Error(
								"[composer] ToolFormer: tool call is unspecified",
							);
						return await this.a
							.getHandler(k.tool)
							.setup(k.params.value, L, k.toolCallId, D);
					}
					async *toolWrappedStream(k, L, D, M) {
						const A = (
							M?.composerId
								? this.b.getComposerData(M.composerId)
								: void 0
						)
							? this.b.getComposerCapability(
									M?.composerId,
									u.ComposerCapabilityRequest_ComposerCapabilityType
										.TOOL_FORMER,
								)
							: void 0;
						if (!A)
							throw new Error("[composer] ToolFormer: capability not found");
						let R, O;
						try {
							for await (const B of L)
								if (B.response.case === "conversationSummary") {
									const U = B.response.value;
									this.b.updateComposerDataSetStore(M?.composerId || "", (z) =>
										z(
											"conversation",
											(F) =>
												F.serverBubbleId ===
													U.truncationLastBubbleIdInclusive ||
												F.bubbleId === U.truncationLastBubbleIdInclusive,
											"cachedConversationSummary",
											U,
										),
									);
								} else if (B.response.case === "clientSideToolV2Call") {
									const U = B.response.value;
									try {
										if (U.tool === t.ClientSideToolV2.UNSPECIFIED)
											throw new Error(
												"[composer] ToolFormer: tool call is unspecified",
											);
										if (R !== U.toolCallId) {
											await A.handleInitialToolCall({
												toolCallId: U.toolCallId,
												toolCallType: U.tool,
												params: U.params,
												name: U.name,
												rawArgs: U.rawArgs,
												isStreaming: U.isStreaming,
											});
											try {
												O = await this.setupTool(U, D, M?.composerId || "");
											} catch (F) {
												if (F instanceof C.$Vyc) {
													k.push(
														new m.$hA({
															request: {
																case: "clientSideToolV2Result",
																value: this.f(U),
															},
														}),
													);
													continue;
												}
												throw F;
											}
											A.startShowCancelAndResumeTimeout(U.isStreaming);
										}
										let z = D;
										if (
											(U.timeoutMs &&
												((z = new AbortController()),
												D.signal.addEventListener("abort", () => {
													z.abort();
												}),
												setTimeout(() => {
													z.abort();
												}, U.timeoutMs)),
											this.c.nonPersistentStorage.composerState
												.shouldSimulateToolFormerError)
										)
											throw new s.$3yc({
												clientVisibleErrorMessage: "Simulated tool call error",
												modelVisibleErrorMessage: "Simulated tool call error",
												actualErrorMessage: "Simulated tool call error",
											});
										if (U.isStreaming)
											if (R === void 0)
												if (U.isLastMessage) {
													const F = await this.runTool(
														U,
														z,
														M?.composerId || "",
														O,
													);
													A.handleToolResult(F, U.toolCallId),
														k.push(
															new m.$hA({
																request: {
																	case: "clientSideToolV2Result",
																	value: F,
																},
															}),
														),
														(R = void 0);
												} else
													this.runStreamingTool(U, z, M?.composerId || "", !0),
														(R = U.toolCallId);
											else if (!U.isLastMessage)
												this.runStreamingTool(U, z, M?.composerId || "", !1);
											else {
												const F = await this.finishStreamingTool(
													U,
													z,
													M?.composerId || "",
												);
												A.handleToolResult(F, U.toolCallId),
													k.push(
														new m.$hA({
															request: {
																case: "clientSideToolV2Result",
																value: F,
															},
														}),
													),
													(R = void 0);
											}
										else {
											const F = await this.runTool(
												U,
												z,
												M?.composerId || "",
												O,
											);
											F.result.case !== void 0 &&
												A.handleToolResult(F, U.toolCallId),
												k.push(
													new m.$hA({
														request: {
															case: "clientSideToolV2Result",
															value: F,
														},
													}),
												);
										}
									} catch (z) {
										const F = U.tool,
											x = F in C.$Uyc ? C.$Uyc[F]?.paramName : "unknown";
										console.error(
											`[ToolV2Service] Error executing tool ${U.tool} (${x}):`,
											{
												toolCallId: U.toolCallId,
												name: U.name,
												isStreaming: U.isStreaming,
												error:
													z instanceof Error
														? {
																name: z.name,
																message: z.message,
																stack: z.stack,
															}
														: z,
											},
										);
										let H = z.message,
											q = z.message;
										z instanceof s.$3yc &&
											((H = z.modelVisibleErrorMessage),
											(q = z.clientVisibleErrorMessage),
											console.error("[ToolV2Service] ToolCallError details:", {
												clientMessage: q,
												modelMessage: H,
												actualError: z.actualErrorMessage,
											}));
										const V = new t.$Mx({
											tool: U.tool,
											error: {
												clientVisibleErrorMessage: q,
												modelVisibleErrorMessage: H,
											},
										});
										k.push(
											new m.$hA({
												request: { case: "clientSideToolV2Result", value: V },
											}),
										);
									}
								} else
									B.response.case === "streamUnifiedChatResponse" &&
										(yield B.response.value);
						} catch (B) {
							throw (
								(console.error(
									"[composer] ToolFormer: error in toolWrappedStream",
									R,
								),
								A.handleToolError(B),
								B)
							);
						}
					}
					f(k) {
						switch (k.tool) {
							case t.ClientSideToolV2.RUN_TERMINAL_COMMAND_V2:
								return new t.$Mx({
									tool: k.tool,
									result: {
										case: "runTerminalCommandV2Result",
										value: new t.$My({ output: "", rejected: !0 }),
									},
								});
							case t.ClientSideToolV2.DELETE_FILE:
								return new t.$Mx({
									tool: k.tool,
									result: {
										case: "deleteFileResult",
										value: new t.$Iy({ rejected: !0 }),
									},
								});
							default:
								throw new Error(
									`[composer] ToolFormer: no rejected tool result for tool ${k.tool}`,
								);
						}
					}
				};
				(e.$ezc = I),
					(e.$ezc = I =
						Ne([j(0, C.$Tyc), j(1, r.IComposerDataService), j(2, v.$0zb)], I)),
					(0, w.$lK)(e.$dzc, I, w.InstantiationType.Delayed);
				function T(P) {
					const k = S.proto3.getEnumType(t.ClientSideToolV2).values[P].name,
						L = P;
					return class {
						async call(D, M, N, A, R) {
							throw new s.$3yc({
								clientVisibleErrorMessage: `Tool ${k} is not supported in this client`,
								modelVisibleErrorMessage: `Tool ${k} is not supported in this client`,
								actualErrorMessage: `Tool ${k} with id ${L} is not supported in this client`,
							});
						}
						async streamedCall(D, M, N, A, R) {
							throw new s.$3yc({
								clientVisibleErrorMessage: `Tool ${k} is not supported in this client`,
								modelVisibleErrorMessage: `Tool ${k} is not supported in this client`,
								actualErrorMessage: `Tool ${k} with id ${L} is not supported in this client`,
							});
						}
						async finishStream(D, M, N, A) {
							throw new s.$3yc({
								clientVisibleErrorMessage: `Tool ${k} is not supported in this client`,
								modelVisibleErrorMessage: `Tool ${k} is not supported in this client`,
								actualErrorMessage: `Tool ${k} with id ${L} is not supported in this client`,
							});
						}
						async setup(D, M, N, A) {
							throw new s.$3yc({
								clientVisibleErrorMessage: `Tool ${k} is not supported in this client`,
								modelVisibleErrorMessage: `Tool ${k} is not supported in this client`,
								actualErrorMessage: `Tool ${k} with id ${L} is not supported in this client`,
							});
						}
					};
				}
			},
		);
	var ms =
			(this && this.__addDisposableResource) ||
			function (ce, e, t) {
				if (e != null) {
					if (typeof e != "object" && typeof e != "function")
						throw new TypeError("Object expected.");
					var i, w;
					if (t) {
						if (!Symbol.asyncDispose)
							throw new TypeError("Symbol.asyncDispose is not defined.");
						i = e[Symbol.asyncDispose];
					}
					if (i === void 0) {
						if (!Symbol.dispose)
							throw new TypeError("Symbol.dispose is not defined.");
						(i = e[Symbol.dispose]), t && (w = i);
					}
					if (typeof i != "function")
						throw new TypeError("Object not disposable.");
					w &&
						(i = function () {
							try {
								w.call(this);
							} catch (E) {
								return Promise.reject(E);
							}
						}),
						ce.stack.push({ value: e, dispose: i, async: t });
				} else t && ce.stack.push({ async: !0 });
				return e;
			},
		ps =
			(this && this.__disposeResources) ||
			(function (ce) {
				return function (e) {
					function t(C) {
						(e.error = e.hasError
							? new ce(C, e.error, "An error was suppressed during disposal.")
							: C),
							(e.hasError = !0);
					}
					var i,
						w = 0;
					function E() {
						for (; (i = e.stack.pop()); )
							try {
								if (!i.async && w === 1)
									return (w = 0), e.stack.push(i), Promise.resolve().then(E);
								if (i.dispose) {
									var C = i.dispose.call(i.value);
									if (i.async)
										return (
											(w |= 2),
											Promise.resolve(C).then(E, function (d) {
												return t(d), E();
											})
										);
								} else w |= 1;
							} catch (d) {
								t(d);
							}
						if (w === 1)
							return e.hasError ? Promise.reject(e.error) : Promise.resolve();
						if (e.hasError) throw e.error;
					}
					return E();
				};
			})(
				typeof SuppressedError == "function"
					? SuppressedError
					: function (ce, e, t) {
							var i = new Error(t);
							return (
								(i.name = "SuppressedError"),
								(i.error = ce),
								(i.suppressed = e),
								i
							);
						},
			);
	define(
		de[4364],
		he([
			1, 0, 340, 193, 341, 148, 1112, 126, 167, 581, 272, 83, 15, 1497, 76, 6,
			3, 23, 54, 19, 28, 9, 47, 65, 606, 383, 196, 17, 342, 61, 200, 67, 42,
			668, 10, 8, 280, 116, 22, 20, 5, 73, 41, 45, 134, 155, 25, 44, 478, 354,
			1053, 287, 1269, 219, 262, 793, 225, 1318, 209, 1828, 426, 506, 844, 712,
			560, 107, 1007, 837, 137, 118, 285, 477, 480, 359, 226, 4363, 191, 356,
			401, 232, 66, 18, 52, 271, 298, 299, 89, 397, 90, 58, 216, 124, 852, 617,
			559, 398, 779, 170, 85, 1296, 169, 302, 3044, 795,
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
			z,
			F,
			x,
			H,
			q,
			V,
			G,
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
			ue,
			fe,
			me,
			ve,
			ge,
			be,
			Ce,
			Le,
			Fe,
			Oe,
			xe,
			He,
			Ke,
			Je,
			Te,
			Ee,
			Ie,
			Be,
			Se,
			ke,
			Ue,
			qe,
			Ae,
			Me,
			De,
			Re,
			je,
			Ve,
			Ze,
			et,
			rt,
			ft,
			bt,
			nt,
			lt,
			ct,
			gt,
			ht,
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 });
			const Rt = !1,
				Nt = 500,
				jt = 1e3,
				ti = 10,
				kt = 1e6,
				hi = { shouldGracefullyFallBackOnTimeout: !0 };
			let Kt = class extends p.$1c {
				constructor(
					Ye,
					ze,
					Xe,
					It,
					Lt,
					xt,
					Vt,
					Bt,
					Gt,
					Mt,
					Ut,
					ei,
					mi,
					ii,
					Dt,
					Jt,
					si,
					Zt,
					ci,
					ri,
					$i,
					Wt,
					tt,
					at,
					pi,
					Li,
					Di,
					Ui,
					Wi,
					Gi,
					qi,
					Oi,
					yi,
					Ai,
					li,
					Vi,
					wi,
					_t,
					ai,
					Ft,
					Xt,
					$t,
					ut,
					Et,
					Tt,
					qt,
					At,
				) {
					super(),
						(this.reactiveStorageService = Ye),
						(this.instantiationService = ze),
						(this.workspaceContextService = Xe),
						(this.aiService = It),
						(this.textModelService = Lt),
						(this.dataScrubbingService = xt),
						(this.fastEditService = Vt),
						(this.inlineDiffService = Bt),
						(this.fileService = Gt),
						(this.editorService = Mt),
						(this.cursorCredsService = Ut),
						(this.editorGroupsService = ei),
						(this.contextKeyService = mi),
						(this.openerService = ii),
						(this.repositoryService = Dt),
						(this.viewsService = Jt),
						(this.composerDataService = si),
						(this.cursorAuthenticationService = Zt),
						(this.editorWorkerService = ci),
						(this.terminalService = ri),
						(this.recentFilesTrackerService = $i),
						(this.aiErrorService = Wt),
						(this.selectedContextService = tt),
						(this.aiFeatureStatusService = at),
						(this.everythingProviderService = pi),
						(this.aiAssertService = Li),
						(this.gitContextService = Di),
						(this.lifecycleService = Ui),
						(this.undoRedoService = Wi),
						(this.configurationService = Gi),
						(this.modelService = qi),
						(this.languageService = Oi),
						(this.composerViewsService = yi),
						(this.labelService = Ai),
						(this.contextBankService = li),
						(this.composerUtilsService = Vi),
						(this._codeEditorService = wi),
						(this.aiFileInfoService = _t),
						(this.toolV2Service = ai),
						(this.analyticsService = Ft),
						(this.markerService = Xt),
						(this.aiApplyToFileActionsService = $t),
						(this.terminalExecutionService = ut),
						(this.prettyDialogService = Et),
						(this.toolsV2HandlerRegistryService = Tt),
						(this.filesConfigurationService = qt),
						(this.textFileService = At),
						(this._shouldOpenNextAppliedFile = !1),
						(this._composerEditingStates = new Map()),
						(this._isTurningCachedCodeBlocksToDiffs = !1),
						(this._fileWatchers = new Map()),
						(this._uriToCachedCodeBlocks = new Map()),
						(this._uriToCachedCodeBlocksQueue = new Map()),
						(this._composerApplyingDiffsState = new Map()),
						(this._ignoreChangesToContext = new Set()),
						(this._fastApplyQueue = new h.$Sh(ti)),
						(this._skipHandleAbortChat = new Set()),
						(this._recentlyResumed = !1),
						(this._onDidReset = this.D(new g.$re())),
						(this.onDidReset = this._onDidReset.event),
						(this._onDidOpenComposer = this.D(new g.$re())),
						(this.onDidOpenComposer = this._onDidOpenComposer.event),
						(this._onDidInsertTerminalText = this.D(new g.$re())),
						(this.onDidInsertTerminalText =
							this._onDidInsertTerminalText.event),
						(this._onContextRemoved = this.D(new g.$re())),
						(this.onContextRemoved = this._onContextRemoved.event),
						(this._onProjectContextRemoved = this.D(new g.$re())),
						(this.onProjectContextRemoved =
							this._onProjectContextRemoved.event),
						(this._onDidEnableDisableComposer = this.D(new g.$re())),
						(this.onDidEnableDisableComposer =
							this._onDidEnableDisableComposer.event),
						(this._onShouldShowPreview = this.D(new g.$re())),
						(this.onShouldShowPreview = this._onShouldShowPreview.event),
						(this._onShouldClearLexical = this.D(new g.$re())),
						(this.onShouldClearLexical = this._onShouldClearLexical.event),
						(this._onTurningCodeBlockToCodePill = this.D(new g.$re())),
						(this.onTurningCodeBlockToCodePill =
							this._onTurningCodeBlockToCodePill.event),
						(this._onShouldForceText = this.D(new g.$re())),
						(this.onShouldForceText = this._onShouldForceText.event),
						(this._onDidSendRequest = this.D(new g.$re())),
						(this.onDidSendRequest = this._onDidSendRequest.event),
						(this._onDidAiEditFile = this.D(new g.$re())),
						(this.onDidAiEditFile = this._onDidAiEditFile.event),
						(this._onDidFinishApplyingCodeBlock = this.D(new g.$re())),
						(this.onDidFinishApplyingCodeBlock =
							this._onDidFinishApplyingCodeBlock.event),
						(this._onDidSubmitChat = this.D(new g.$re())),
						(this.onDidSubmitChat = this._onDidSubmitChat.event),
						(this._onDidFinishAiEditToolCall = this.D(new g.$re())),
						(this.onDidFinishAiEditToolCall =
							this._onDidFinishAiEditToolCall.event),
						(this.latestSubmitWarmCacheRequestTimes = []),
						(this.recentTimeWindow = 60 * 1e3),
						(this.maxRecentRequests = 10),
						(this.reapply = async (gi, ki, Pi) => {
							const Hi = { stack: [], error: void 0, hasError: !1 };
							try {
								const Ji = ms(Hi, (0, De.span)("ComposerService.reapply"), !1),
									cn = this.composerDataService.getComposerData(gi);
								if (!cn) return;
								const un = this.composerDataService.getLatestCodeBlockVersion(
										cn.composerId,
										ki,
									),
									yn = Pi !== void 0 ? Pi : un,
									Rn = cn.codeBlockData[ki.toString()][yn];
								Rn?.isNotApplied &&
									this.composerDataService.updateComposerCodeBlock(
										cn.composerId,
										ki,
										yn,
										{ isNotApplied: !1 },
									),
									Rn && cn.composerId
										? await this.runFastApplyOnCodeBlock(
												cn.composerId,
												{ ...Rn },
												{ isReapply: !0 },
											)
										: console.error(
												`[composer] Unable to reapply version ${yn} for ${ki.toString()}`,
											);
							} catch (Ji) {
								(Hi.error = Ji), (Hi.hasError = !0);
							} finally {
								ps(Hi);
							}
						}),
						(this.reapplyLastMessage = (gi) => {
							const ki = { stack: [], error: void 0, hasError: !1 };
							try {
								const Pi = ms(
										ki,
										(0, De.span)("ComposerService.reapplyLastMessage"),
										!1,
									),
									Hi = this.composerDataService.getLastAiBubble(gi);
								if (!Hi?.codeBlocks) return;
								for (const Ji of Hi.codeBlocks) {
									const cn = this.composerDataService.getComposerCodeBlock(
										gi,
										Ji.uri,
										Ji.version,
									);
									(cn?.isNoOp || cn?.status === "cancelled") &&
										this.reapply(gi, Ji.uri);
								}
							} catch (Pi) {
								(ki.error = Pi), (ki.hasError = !0);
							} finally {
								ps(ki);
							}
						}),
						(this.editorListeners = new Map()),
						this.composerViewsService.setOpenComposer(async (gi, ki) =>
							this.openComposer(gi, ki),
						),
						this.initializeEditorListeners().catch(console.error),
						this.reactiveStorageService.setApplicationUserPersistentStorage(
							"composerState",
							"isComposerEnabled2",
							!0,
						),
						(this.chatClient = this.instantiationService.createInstance(
							ge.$q6b,
							{ service: C.$cbb },
						));
					const Yt = (gi, ki, Pi) => {
							const Hi = { stack: [], error: void 0, hasError: !1 };
							try {
								const Ji = ms(
									Hi,
									(0, De.span)(
										"ComposerService.abortAndRemoveApplyGenerationUUID",
									),
									!1,
								);
								if (!this.getComposer(gi)) return;
								const un = this.composerDataService.getComposerCodeBlock(
									gi,
									ki,
									Pi,
								);
								un?.applyGenerationUUID &&
									(this.abortGenerationUUID(un.applyGenerationUUID),
									this.composerDataService.updateComposerCodeBlock(gi, ki, Pi, {
										applyGenerationUUID: void 0,
									}));
							} catch (Ji) {
								(Hi.error = Ji), (Hi.hasError = !0);
							} finally {
								ps(Hi);
							}
						},
						ni = (gi) => {
							const ki = { stack: [], error: void 0, hasError: !1 };
							try {
								const Pi = ms(
									ki,
									(0, De.span)("ComposerService.handleDiffRemoval"),
									!1,
								);
								if (!gi.composerId) return;
								gi.accepted ? fi(gi.diffInfo, !1) : bi(gi.diffInfo, !1);
							} catch (Pi) {
								(ki.error = Pi), (ki.hasError = !0);
							} finally {
								ps(ki);
							}
						},
						bi = (gi, ki = !0) => {
							const Pi = { stack: [], error: void 0, hasError: !1 };
							try {
								const Hi = ms(
										Pi,
										(0, De.span)("ComposerService.handleDiffReject"),
										!1,
									),
									{ composerId: Ji, version: cn } = gi.composerMetadata ?? {};
								if (!Ji || cn === void 0) return;
								const un = this.getComposer(Ji);
								if (
									!un ||
									!this.composerDataService.getComposerCodeBlock(Ji, gi.uri, cn)
								)
									return;
								if (!this.isCodeBlockRegisteredAsCached(Ji, gi.uri, cn)) {
									this.composerDataService.setCodeBlockStatus(
										Ji,
										gi.uri,
										cn,
										"rejected",
									);
									const _i = this.composerDataService.getLastHumanBubble(Ji),
										Bn = this.workspaceContextService.asRelativePath(gi.uri);
									if (_i) {
										const Mn = (zn) => {
											const $n = (zn ?? []).find((Ln) => Ln.filePath === Bn);
											if ($n) {
												const Ln = { ...$n };
												return (
													$n.userResponseType ===
													d.UserResponseToSuggestedCodeBlock_UserResponseType
														.REJECT
														? ((Ln.userResponseType =
																d.UserResponseToSuggestedCodeBlock_UserResponseType.REJECT),
															(Ln.userModificationsToSuggestedCodeBlocks =
																void 0))
														: (Ln.userResponseType =
																d.UserResponseToSuggestedCodeBlock_UserResponseType.MODIFY),
													[...(zn ?? []).filter((wn) => wn.filePath !== Bn), Ln]
												);
											} else
												return [
													...(zn ?? []),
													{
														userResponseType:
															d
																.UserResponseToSuggestedCodeBlock_UserResponseType
																.REJECT,
														filePath: Bn,
													},
												];
										};
										un.currentBubbleId
											? this.composerDataService.updateComposerDataSetStore(
													Ji,
													(zn) => {
														zn(
															"conversation",
															($n) => $n.bubbleId === un.currentBubbleId,
															"userResponsesToSuggestedCodeBlocks",
															Mn,
														);
													},
												)
											: this.composerDataService.updateComposerDataSetStore(
													Ji,
													(zn) => {
														zn("userResponsesToSuggestedCodeBlocks", Mn);
													},
												);
									}
									Yt(Ji, gi.uri, cn);
								}
								this.deleteNewFileAndMaybeFolder(Ji, gi.uri).then((_i) => {
									_i || (ki && this.saveFile(gi.uri, { force: !0 }));
								});
							} catch (Hi) {
								(Pi.error = Hi), (Pi.hasError = !0);
							} finally {
								ps(Pi);
							}
						},
						fi = (gi, ki = !0) => {
							const Pi = { stack: [], error: void 0, hasError: !1 };
							try {
								const Hi = ms(
										Pi,
										(0, De.span)("ComposerService.handleDiffAccept"),
										!1,
									),
									{ composerId: Ji, version: cn } = gi.composerMetadata ?? {};
								if (!Ji || cn === void 0) return;
								const un = this.getComposer(Ji);
								if (
									!un ||
									!this.composerDataService.getComposerCodeBlock(Ji, gi.uri, cn)
								)
									return;
								const Rn = this.workspaceContextService.asRelativePath(gi.uri);
								if (this.composerDataService.getLastHumanBubble(Ji)) {
									const Bn = (Mn) => {
										const zn = (Mn ?? []).find(($n) => $n.filePath === Rn);
										if (zn) {
											const $n = { ...zn };
											return (
												zn.userResponseType ===
												d.UserResponseToSuggestedCodeBlock_UserResponseType
													.ACCEPT
													? (($n.userResponseType =
															d.UserResponseToSuggestedCodeBlock_UserResponseType.ACCEPT),
														($n.userModificationsToSuggestedCodeBlocks =
															void 0))
													: ($n.userResponseType =
															d.UserResponseToSuggestedCodeBlock_UserResponseType.MODIFY),
												[...(Mn ?? []).filter((Ln) => Ln.filePath !== Rn), $n]
											);
										} else
											return [
												...(Mn ?? []),
												{
													userResponseType:
														d.UserResponseToSuggestedCodeBlock_UserResponseType
															.ACCEPT,
													filePath: Rn,
												},
											];
									};
									un.currentBubbleId
										? this.composerDataService.updateComposerDataSetStore(
												Ji,
												(Mn) => {
													Mn(
														"conversation",
														(zn) => zn.bubbleId === un.currentBubbleId,
														"userResponsesToSuggestedCodeBlocks",
														Bn,
													);
												},
											)
										: this.composerDataService.updateComposerDataSetStore(
												Ji,
												(Mn) => {
													Mn("userResponsesToSuggestedCodeBlocks", Bn);
												},
											);
								}
								ki && this.saveFile(gi.uri, { force: !0 }),
									this.composerDataService.setCodeBlockStatus(
										Ji,
										gi.uri,
										cn,
										"accepted",
									),
									Yt(Ji, gi.uri, cn),
									this.removeFileFromNewlyCreatedFilesAndFolders(Ji, gi.uri);
							} catch (Hi) {
								(Pi.error = Hi), (Pi.hasError = !0);
							} finally {
								ps(Pi);
							}
						},
						Ti = (gi, ki) => {
							const Pi = { stack: [], error: void 0, hasError: !1 };
							try {
								const Hi = ms(
										Pi,
										(0, De.span)("ComposerService.handlePartialDiff"),
										!1,
									),
									{ composerId: Ji, version: cn } =
										gi.diffInfo.composerMetadata ?? {};
								if (!Ji || cn === void 0) return;
								const un = this.getComposer(Ji);
								if (!un) return;
								const { diffInfo: yn, isDone: Rn, change: _i } = gi;
								if (!_i) return;
								const Bn = this.composerDataService.getLastHumanBubble(Ji),
									Mn = this.workspaceContextService.asRelativePath(yn.uri);
								if (Bn) {
									let zn;
									if (ki === "rejected") {
										const Ln = _i.rejected.map((Yn) => `- ${Yn}`),
											wn = _i.accepted.map((Yn) => `+ ${Yn}`),
											Hn = [...Ln, ...wn];
										zn = new a.$Es({ content: "", lines: Hn });
									}
									const $n = (Ln) => {
										const wn = (Ln ?? []).find((Hn) => Hn.filePath === Mn);
										if (wn) {
											const Hn = { ...wn };
											return (
												zn &&
													Hn.userModificationsToSuggestedCodeBlocks?.chunks.push(
														zn,
													),
												wn.userResponseType ===
													d.UserResponseToSuggestedCodeBlock_UserResponseType
														.ACCEPT && ki === "accepted"
													? (Hn.userResponseType =
															d.UserResponseToSuggestedCodeBlock_UserResponseType.ACCEPT)
													: wn.userResponseType ===
																d
																	.UserResponseToSuggestedCodeBlock_UserResponseType
																	.REJECT && ki === "rejected"
														? (Hn.userResponseType =
																d.UserResponseToSuggestedCodeBlock_UserResponseType.REJECT)
														: (Hn.userResponseType =
																d.UserResponseToSuggestedCodeBlock_UserResponseType.MODIFY),
												[...(Ln ?? []).filter((Yn) => Yn.filePath !== Mn), Hn]
											);
										} else
											return [
												...(Ln ?? []),
												{
													userResponseType:
														ki === "accepted"
															? d
																	.UserResponseToSuggestedCodeBlock_UserResponseType
																	.ACCEPT
															: d
																	.UserResponseToSuggestedCodeBlock_UserResponseType
																	.REJECT,
													filePath: Mn,
													userModificationsToSuggestedCodeBlocks: new a.$Ds({
														from: Mn,
														to: Mn,
														chunks: zn ? [zn] : [],
													}),
												},
											];
									};
									un.currentBubbleId
										? this.composerDataService.updateComposerDataSetStore(
												Ji,
												(Ln) => {
													Ln(
														"conversation",
														(wn) => wn.bubbleId === un.currentBubbleId,
														"userResponsesToSuggestedCodeBlocks",
														$n,
													);
												},
											)
										: this.composerDataService.updateComposerDataSetStore(
												Ji,
												(Ln) => {
													Ln("userResponsesToSuggestedCodeBlocks", $n);
												},
											);
								}
								Rn && (ki === "accepted" ? fi(yn) : bi(yn));
							} catch (Hi) {
								(Pi.error = Hi), (Pi.hasError = !0);
							} finally {
								ps(Pi);
							}
						},
						wt = (gi) => {
							const ki = { stack: [], error: void 0, hasError: !1 };
							try {
								const Pi = ms(
										ki,
										(0, De.span)("ComposerService.handleAddDiffFromUndoRedo"),
										!1,
									),
									{ composerId: Hi, version: Ji } = gi.composerMetadata ?? {};
								if (
									!Hi ||
									Ji === void 0 ||
									!this.getComposer(Hi) ||
									!this.composerDataService.getComposerCodeBlock(Hi, gi.uri, Ji)
								)
									return;
								this.composerDataService.updateComposerCodeBlock(
									Hi,
									gi.uri,
									Ji,
									{ status: "completed" },
								),
									console.log(
										`[composer] Restored diff for ${gi.uri.toString()} with version ${Ji}`,
									);
							} catch (Pi) {
								(ki.error = Pi), (ki.hasError = !0);
							} finally {
								ps(ki);
							}
						};
					if (
						(this.D(this.inlineDiffService.onDidAcceptDiff(fi)),
						this.D(this.inlineDiffService.onDidRejectDiff((gi) => bi(gi))),
						this.D(
							this.inlineDiffService.onDidRemoveDiffFromUndoRedo((gi) =>
								ni(gi),
							),
						),
						this.D(
							this.inlineDiffService.onDidAddDiffFromUndoRedo((gi) => wt(gi)),
						),
						this.D(
							this.inlineDiffService.onDidAcceptPartialDiff((gi) =>
								Ti(gi, "accepted"),
							),
						),
						this.D(
							this.inlineDiffService.onDidRejectPartialDiff((gi) =>
								Ti(gi, "rejected"),
							),
						),
						this.D(
							this.editorService.onDidVisibleEditorsChange((gi) => {
								const ki = { stack: [], error: void 0, hasError: !1 };
								try {
									const Pi = ms(
											ki,
											(0, De.span)("ComposerService.onDidVisibleEditorsChange"),
											!1,
										),
										Hi = this.composerDataService.getComposerData(
											this.composerDataService.selectedComposerId,
										);
									Hi &&
										!Hi.hasChangedContext &&
										(this.isComposerEmpty(
											this.composerDataService.selectedComposerId,
										) ||
											Hi.conversation.length === 0) &&
										this.refreshReactiveContextItem(
											this.composerDataService.selectedComposerId,
										);
									const Ji = this.composerDataService.getComposerData(
										this.composerDataService.selectedChatId,
									);
									Ji &&
										!Ji.hasChangedContext &&
										this.refreshReactiveContextItem(
											this.composerDataService.selectedChatId,
										);
								} catch (Pi) {
									(ki.error = Pi), (ki.hasError = !0);
								} finally {
									ps(ki);
								}
							}),
						),
						this.D(
							this.editorService.onDidActiveEditorChange((gi) => {
								const ki = { stack: [], error: void 0, hasError: !1 };
								try {
									const Pi = ms(
											ki,
											(0, De.span)("ComposerService.onDidActiveEditorChange"),
											!1,
										),
										Hi = this.composerDataService.getComposerData(
											this.composerDataService.selectedComposerId,
										);
									Hi &&
										!Hi.hasChangedContext &&
										(this.isComposerEmpty(
											this.composerDataService.selectedComposerId,
										) ||
											Hi.conversation.length === 0) &&
										this.refreshReactiveContextItem(
											this.composerDataService.selectedComposerId,
										);
									const Ji = this.composerDataService.getComposerData(
										this.composerDataService.selectedChatId,
									);
									Ji &&
										!Ji.hasChangedContext &&
										(this.isComposerEmpty(
											this.composerDataService.selectedChatId,
										) ||
											Ji.conversation.length === 0) &&
										this.refreshReactiveContextItem(
											this.composerDataService.selectedChatId,
										);
								} catch (Pi) {
									(ki.error = Pi), (ki.hasError = !0);
								} finally {
									ps(ki);
								}
							}),
						),
						this.D(
							this.reactiveStorageService.onChangeEffectManuallyDisposed({
								deps: [
									() =>
										this.reactiveStorageService.applicationUserPersistentStorage
											.composerState.mainComposerMode,
								],
								onChange: () => {
									const gi = { stack: [], error: void 0, hasError: !1 };
									try {
										const ki = ms(
												gi,
												(0, De.span)(
													"ComposerService.onChangeEffectManuallyDisposed",
												),
												!1,
											),
											Pi = this.composerDataService.getComposerData(
												this.composerDataService.selectedComposerId,
											);
										Pi &&
											!Pi.hasChangedContext &&
											(this.isComposerEmpty(
												this.composerDataService.selectedComposerId,
											) ||
												Pi.conversation.length === 0) &&
											this.refreshReactiveContextItem(
												this.composerDataService.selectedComposerId,
											);
										const Hi = this.composerDataService.getComposerData(
											this.composerDataService.selectedChatId,
										);
										Hi &&
											!Hi.hasChangedContext &&
											(this.isComposerEmpty(
												this.composerDataService.selectedChatId,
											) ||
												Hi.conversation.length === 0) &&
											this.refreshReactiveContextItem(
												this.composerDataService.selectedChatId,
											);
									} catch (ki) {
										(gi.error = ki), (gi.hasError = !0);
									} finally {
										ps(gi);
									}
								},
							}),
						),
						this.D(
							this.fileService.onDidFilesChange((gi) => {
								const ki = Array.from(
									new Set([
										...this._uriToCachedCodeBlocks.keys(),
										...this._uriToCachedCodeBlocksQueue.keys(),
									]),
								);
								for (const Pi of ki) {
									const Hi = l.URI.parse(Pi);
									if (gi.contains(Hi)) {
										const Ji =
											this._uriToCachedCodeBlocksQueue.get(Hi.toString()) ?? [];
										this.markUriAsOutdated(Hi, Ji.length > 0),
											Ji.length > 0 &&
												(this._uriToCachedCodeBlocks.set(Hi.toString(), Ji),
												this._uriToCachedCodeBlocksQueue.delete(Hi.toString()));
									}
								}
							}),
						),
						!this.reactiveStorageService.workspaceUserPersistentStorage
							.composerState)
					) {
						const gi = { stack: [], error: void 0, hasError: !1 };
						try {
							const ki = ms(
								gi,
								(0, De.span)(
									"ComposerService.setWorkspaceUserPersistentStorage",
								),
								!1,
							);
							this.reactiveStorageService.setWorkspaceUserPersistentStorage(
								"composerState",
								{ horizontalBarSize: 520, tabHeight: 400 },
							);
						} catch (ki) {
							(gi.error = ki), (gi.hasError = !0);
						} finally {
							ps(gi);
						}
					}
					const We = te.composerIsEnabled.bindTo(this.contextKeyService);
					We.set(
						this.reactiveStorageService.applicationUserPersistentStorage
							.composerState.isComposerEnabled2,
					),
						this.D(
							this.reactiveStorageService.onChangeEffectManuallyDisposed({
								deps: [
									() =>
										this.reactiveStorageService.applicationUserPersistentStorage
											.composerState.isComposerEnabled2,
								],
								onChange: ({ deps: gi }) => {
									const ki = { stack: [], error: void 0, hasError: !1 };
									try {
										const Pi = ms(
											ki,
											(0, De.span)(
												"ComposerService.onChangeEffectManuallyDisposed",
											),
											!1,
										);
										this._onDidEnableDisableComposer.fire({ enabled: gi[0] });
									} catch (Pi) {
										(ki.error = Pi), (ki.hasError = !0);
									} finally {
										ps(ki);
									}
								},
							}),
						),
						this.D(
							this.reactiveStorageService.onChangeEffectManuallyDisposed({
								deps: [
									() => {
										const gi =
											this.composerDataService.allComposersData
												.selectedComposerHandle;
										return gi ? gi.data.context.fileSelections : [];
									},
								],
								onChange: () => {
									const gi = { stack: [], error: void 0, hasError: !1 };
									try {
										const ki = ms(
											gi,
											(0, De.span)(
												"ComposerService.onChangeEffectManuallyDisposed",
											),
											!1,
										);
										this.composerDataService.getContextGraphFilesFromFileSelections(
											this.composerDataService.selectedComposerId,
										);
									} catch (ki) {
										(gi.error = ki), (gi.hasError = !0);
									} finally {
										ps(gi);
									}
								},
							}),
						),
						this.D(
							this.reactiveStorageService.onChangeEffectManuallyDisposed({
								deps: [
									() => {
										const gi =
											this.composerDataService.allComposersData
												.selectedChatHandle;
										return gi ? gi.data.context.fileSelections : [];
									},
								],
								onChange: () => {
									const gi = { stack: [], error: void 0, hasError: !1 };
									try {
										const ki = ms(
											gi,
											(0, De.span)(
												"ComposerService.onChangeEffectManuallyDisposed",
											),
											!1,
										);
										this.composerDataService.getContextGraphFilesFromFileSelections(
											this.composerDataService.selectedChatId,
										);
									} catch (ki) {
										(gi.error = ki), (gi.hasError = !0);
									} finally {
										ps(gi);
									}
								},
							}),
						);
					const _e = (gi) => {
						const ki = [];
						for (const Pi of Se.$Xgc)
							ki.push(() => {
								const Hi = this.composerDataService.getComposerData(
									gi
										? this.composerDataService.selectedChatId
										: this.composerDataService.selectedComposerId,
								);
								return Hi ? Hi.context[Pi] : [];
							});
						return ki;
					};
					this.D(
						this.reactiveStorageService.onChangeEffectManuallyDisposed({
							deps: _e(),
							onChange: () => {
								const gi = { stack: [], error: void 0, hasError: !1 };
								try {
									const ki = ms(
										gi,
										(0, De.span)(
											"ComposerService.onChangeEffectManuallyDisposed",
										),
										!1,
									);
									if (
										this._ignoreChangesToContext.has(
											this.composerDataService.selectedComposerId,
										)
									)
										this._ignoreChangesToContext.delete(
											this.composerDataService.selectedComposerId,
										);
									else
										try {
											this.updateComposer(
												this.composerDataService.selectedComposerId,
												{ hasChangedContext: !0 },
											);
										} catch {}
								} catch (ki) {
									(gi.error = ki), (gi.hasError = !0);
								} finally {
									ps(gi);
								}
							},
						}),
					),
						this.D(
							this.reactiveStorageService.onChangeEffectManuallyDisposed({
								deps: _e(!0),
								onChange: () => {
									const gi = { stack: [], error: void 0, hasError: !1 };
									try {
										const ki = ms(
											gi,
											(0, De.span)(
												"ComposerService.onChangeEffectManuallyDisposed",
											),
											!1,
										);
										if (
											this._ignoreChangesToContext.has(
												this.composerDataService.selectedChatId,
											)
										)
											this._ignoreChangesToContext.delete(
												this.composerDataService.selectedChatId,
											);
										else
											try {
												this.updateComposer(
													this.composerDataService.selectedChatId,
													{ hasChangedContext: !0 },
												);
											} catch {}
									} catch (ki) {
										(gi.error = ki), (gi.hasError = !0);
									} finally {
										ps(gi);
									}
								},
							}),
						),
						We.set(this.isComposerEnabled()),
						this.selectedContextService.addOnCursorIgnoreLoadedCallback(() => {
							this.refreshReactiveContextItemAtStartup().catch(console.error);
						}),
						this.D(
							this.reactiveStorageService.onChangeEffectManuallyDisposed({
								deps: [
									() =>
										this.reactiveStorageService.applicationUserPersistentStorage
											.aiSettings.composerModel,
								],
								onChange: () => {
									this.handleUserSwitchedModel(
										this.composerDataService.selectedComposerId,
									);
								},
							}),
						),
						this.D(
							this.reactiveStorageService.onChangeEffectManuallyDisposed({
								deps: [() => this.composerDataService.selectedComposerId],
								onChange: ({ deps: gi, prevDeps: ki }) => {
									const Pi = gi?.[0],
										Hi = ki?.[0];
									Pi !== Hi && Hi && this.close(Hi, { skipHiding: !0 });
								},
							}),
						),
						this.D(
							this.composerViewsService.onDidChangeChatPaneVisibility((gi) => {
								this.reactiveStorageService.setNonPersistentStorage({
									shouldShowInsertChatWidget: gi,
								});
							}),
						),
						this.composerDataService.setOnInlineDiffsLoadedHook(
							this.onInlineDiffsLoadedHook.bind(this),
						);
					let Si = !0;
					this.aiFeatureStatusService.maybeRefreshFeatureStatus(
						"autoSaveAgenticEdits",
					);
				}
				get applicationComposerSettings() {
					return this.reactiveStorageService.applicationUserPersistentStorage
						.composerState;
				}
				shouldCache(Ye, ze) {
					const Xe = this.composerDataService.getComposerFromIdOrHandle(Ye);
					if (!Xe)
						throw new Error(
							"[composer] shouldCache called for non-existent composer",
						);
					if (ze !== void 0) {
						const It = this.composerDataService.getComposerCodeBlock(
							Ye,
							ze.uri,
							ze.version,
						);
						if (It && It.isNotApplied) return !0;
					}
					return this.composerDataService.getComposerForceMode(Ye) === "chat"
						? !1
						: Xe.composerId !== this.composerDataService.selectedComposerId ||
								this.isBackground(Xe.composerId);
				}
				updateComposer(Ye, ze) {
					this.composerDataService.updateComposerData(Ye, ze);
				}
				getComposer(Ye) {
					const ze = this.composerDataService.getComposerData(Ye);
					if (!ze) {
						console.error(
							"[composer] getComposer called for non-existent composer",
							Ye,
						);
						return;
					}
					return ze;
				}
				getComposerEditingState(Ye) {
					let ze = this._composerEditingStates.get(Ye);
					return (
						ze ||
							((ze = {
								fastApplyQueue: {},
								fastApplyRunningMap: {},
								codeEditorsMap: {},
							}),
							this._composerEditingStates.set(Ye, ze)),
						ze
					);
				}
				getApplyingDiffsState(Ye) {
					let ze = this._composerApplyingDiffsState.get(Ye);
					return (
						ze ||
							((ze = {
								isReactivatingApplyingDiffs: {},
								applyingDiffsBacklogLines: {},
							}),
							this._composerApplyingDiffsState.set(Ye, ze)),
						ze
					);
				}
				resetComposerEditingState(Ye) {
					this._composerEditingStates.delete(Ye);
				}
				unregisterCachedCodeBlock(Ye, ze, Xe) {
					this.composerDataService.updateComposerCodeBlock(Ye, ze, Xe, {
						isCached: !1,
						isNotApplied: !1,
					});
					const It = typeof Ye == "string" ? Ye : Ye.data.composerId,
						xt = (this._uriToCachedCodeBlocks.get(ze.toString()) ?? []).filter(
							(Gt) => Gt.composerId !== It || Gt.version !== Xe,
						),
						Bt = (
							this._uriToCachedCodeBlocksQueue.get(ze.toString()) ?? []
						).filter((Gt) => Gt.composerId !== It || Gt.version !== Xe);
					if (xt.length === 0 && Bt.length === 0) {
						this._fileWatchers.get(ze.toString())?.dispose(),
							this._fileWatchers.delete(ze.toString()),
							this._uriToCachedCodeBlocks.delete(ze.toString()),
							this._uriToCachedCodeBlocksQueue.delete(ze.toString());
						return;
					}
					this._uriToCachedCodeBlocks.set(ze.toString(), xt),
						this._uriToCachedCodeBlocksQueue.set(ze.toString(), Bt);
				}
				unregisterAllCachedCodeBlocks(Ye) {
					const ze = this.composerDataService.getAllCachedCodeBlocks(Ye);
					for (const Xe of ze)
						this.unregisterCachedCodeBlock(Ye, Xe.uri, Xe.version);
				}
				registerCachedCodeBlock(Ye, ze, Xe, It) {
					if (
						(this.composerDataService.updateComposerCodeBlock(Ye, ze, Xe, {
							isCached: !0,
						}),
						!this._fileWatchers.has(ze.toString()))
					) {
						const Lt = this.fileService.watch(ze);
						this._fileWatchers.set(ze.toString(), Lt);
					}
					if (It) {
						const Lt =
							this._uriToCachedCodeBlocksQueue.get(ze.toString()) ?? [];
						this._uriToCachedCodeBlocksQueue.set(ze.toString(), [
							...Lt.filter((Bt) => Bt.composerId !== Ye || Bt.version !== Xe),
							{ composerId: Ye, version: Xe },
						]);
						const Vt = (
							this._uriToCachedCodeBlocks.get(ze.toString()) ?? []
						).filter((Bt) => Bt.composerId !== Ye || Bt.version !== Xe);
						this._uriToCachedCodeBlocks.set(ze.toString(), Vt);
					} else {
						const Lt = this._uriToCachedCodeBlocks.get(ze.toString()) ?? [];
						this._uriToCachedCodeBlocks.set(ze.toString(), [
							...Lt.filter((xt) => xt.composerId !== Ye || xt.version !== Xe),
							{ composerId: Ye, version: Xe },
						]);
					}
				}
				markUriAsOutdated(Ye, ze) {
					if (
						!this._uriToCachedCodeBlocks.has(Ye.toString()) ||
						!this._fileWatchers.has(Ye.toString())
					)
						return;
					const Xe = this._uriToCachedCodeBlocks.get(Ye.toString()) ?? [];
					for (const { composerId: It, version: Lt } of Xe) {
						const xt = this.composerDataService.getComposerCodeBlock(
							It,
							Ye,
							Lt,
						);
						xt && xt.isNotApplied
							? (this.composerDataService.updateComposerDataSetStore(It, (Vt) =>
									Vt(
										"codeBlockData",
										Ye.toString(),
										(Bt) => Bt.version === Lt,
										"originalModelDiffWrtV0",
										void 0,
									),
								),
								this.composerDataService.updateComposerDataSetStore(It, (Vt) =>
									Vt(
										"codeBlockData",
										Ye.toString(),
										(Bt) => Bt.version === Lt,
										"newModelDiffWrtV0",
										void 0,
									),
								))
							: (this.composerDataService.setCodeBlockStatus(
									It,
									Ye,
									Lt,
									"outdated",
								),
								this.composerDataService.updateComposerCodeBlock(It, Ye, Lt, {
									isCached: !1,
								}));
					}
					ze ||
						(this._fileWatchers.get(Ye.toString())?.dispose(),
						this._fileWatchers.delete(Ye.toString())),
						this._uriToCachedCodeBlocks.delete(Ye.toString()),
						this._uriToCachedCodeBlocksQueue.delete(Ye.toString());
				}
				isNewFile(Ye, ze) {
					return !!this.getComposer(Ye)?.newlyCreatedFiles.some(
						(It) => It.uri.toString() === ze.toString(),
					);
				}
				async createNewFileAndMaybeFolder(Ye, ze, Xe) {
					if (!this.getComposer(Ye) || !Ye) return [];
					const Lt = await this.fileService.exists(ze),
						xt = [];
					if (!Lt) {
						let Vt = ze.fsPath;
						for (; Vt.length > 0; ) {
							const Mt = Vt.split("/").slice(0, -1).join("/");
							if (await this.fileService.exists(l.URI.file(Mt))) break;
							xt.push({ uri: l.URI.file(Mt) }), (Vt = Mt);
						}
						await this.fileService.createFile(ze, n.$Te.fromString(" "), {
							overwrite: Xe,
						});
						const Bt = 10;
						let Gt = 0;
						for (; !(await this.fileService.exists(ze)) && Gt < Bt; )
							await new Promise((Mt) => setTimeout(Mt, Nt)), Gt++;
						if (Gt === Bt)
							return (
								console.error(
									`[composer] Failed to create file ${ze.toString()} after ${Bt} attempts`,
								),
								[]
							);
					}
					return xt;
				}
				async checkToCreateNewFile(Ye, ze, Xe) {
					const It = this.composerDataService.getComposerFromIdOrHandle(Ye);
					if (!It || !Ye) return [];
					if (await this.fileService.exists(ze)) return [];
					const xt = await this.createNewFileAndMaybeFolder(Ye, ze, Xe),
						Vt = [],
						Bt = new Set(
							It?.newlyCreatedFolders.map((Ut) => Ut.uri.toString()) ?? [],
						);
					for (const Ut of xt) Bt.has(Ut.uri.toString()) || Vt.push(Ut);
					const Mt = !It?.newlyCreatedFiles?.some(
						(Ut) => Ut.uri.toString() === ze.toString(),
					)
						? [{ uri: ze }]
						: [];
					return (
						this.updateComposer(Ye, {
							newlyCreatedFiles: [...(It?.newlyCreatedFiles ?? []), ...Mt],
							newlyCreatedFolders: [...(It?.newlyCreatedFolders ?? []), ...Vt],
						}),
						xt
					);
				}
				async deleteFolder(Ye) {
					if (await this.fileService.exists(Ye))
						try {
							await this.fileService.del(Ye, { recursive: !0 });
						} catch (ze) {
							console.error(`Error deleting folder ${Ye.toString()}:`, ze);
						}
				}
				async deleteFile(Ye) {
					const ze = this.inlineDiffService.diffInfos.filter(
						(Xe) => Xe.uri.toString() === Ye.toString(),
					);
					for (const Xe of ze) this.inlineDiffService.remove(Xe.diffId);
					try {
						if (await this.fileService.exists(Ye)) {
							const It = await this.textModelService.createModelReference(Ye);
							It.object.textEditorModel.setValue(" ");
							const Lt = this.filesConfigurationService.disableAutoSave(Ye);
							await this.saveFile(Ye, {
								force: !0,
								waitForEditorToOpen: !0,
								overwrite: !0,
							}),
								Lt.dispose(),
								It.dispose(),
								await this.fileService.del(Ye, { recursive: !0 });
						}
						const Xe = this.editorService.findEditors(Ye);
						if (Xe.length > 0)
							for (const It of Xe)
								await this.editorService.revert(It, { force: !0 }),
									await this.editorService.closeEditor(It);
					} catch (Xe) {
						console.error(`Error deleting file ${Ye.toString()}:`, Xe);
					}
				}
				async deleteNewFileAndMaybeFolder(Ye, ze) {
					const Xe = this.getComposer(Ye);
					if (
						!Xe ||
						!Ye ||
						!Xe.newlyCreatedFiles?.find(
							(Lt) => Lt.uri.toString() === ze.toString(),
						)
					)
						return !1;
					try {
						await this.deleteFile(ze);
						const Lt =
							Xe.newlyCreatedFiles?.filter(
								(Bt) => Bt.uri.toString() !== ze.toString(),
							) ?? [];
						let xt = (0, i.unwrap)(Xe.newlyCreatedFolders) ?? [];
						const Vt = xt.filter((Bt) =>
							ze.toString().startsWith(Bt.uri.toString()),
						);
						for (const Bt of Vt)
							(
								(
									await this.fileService.resolve(Bt.uri, {
										resolveMetadata: !0,
									})
								).children ?? []
							).filter((Ut) => !Ut.isDirectory).length === 0 &&
								(await this.fileService.del(Bt.uri, {
									recursive: !0,
									useTrash: !0,
								}),
								(xt = xt.filter(
									(Ut) => Ut.uri.toString() !== Bt.uri.toString(),
								)));
						return (
							this.updateComposer(Ye, {
								newlyCreatedFiles: Lt,
								newlyCreatedFolders: xt,
							}),
							!0
						);
					} catch (Lt) {
						return (
							console.error(`Error deleting file ${ze.toString()}:`, Lt), !1
						);
					}
				}
				removeFileFromNewlyCreatedFilesAndFolders(Ye, ze) {
					const Xe = this.getComposer(Ye);
					!Xe ||
						!Ye ||
						this.updateComposer(Ye, {
							newlyCreatedFiles:
								Xe.newlyCreatedFiles?.filter(
									(It) => It.uri.toString() !== ze.toString(),
								) ?? [],
							newlyCreatedFolders:
								Xe.newlyCreatedFolders?.filter(
									(It) => !ze.toString().startsWith(It.uri.toString()),
								) ?? [],
						});
				}
				async saveFiles(Ye, ze) {
					await Promise.allSettled(
						Ye.map(async (Xe) => {
							await this.saveFile(Xe, ze);
						}),
					);
				}
				async saveFile(Ye, ze) {
					if (ze?.overwrite)
						return !!(await this.textFileService.save(Ye, {
							reason: J.SaveReason.EXPLICIT,
							skipSaveParticipants: ze?.skipSaveParticipants ?? !1,
							force: ze?.force ?? !1,
							ignoreModifiedSince: !0,
						}));
					let Xe = this.editorService.findEditors(Ye);
					if (
						(Xe.length === 0 &&
							ze?.waitForEditorToOpen &&
							(await new Promise((Lt) => {
								setTimeout(Lt, 1e3),
									this.editorService.onWillOpenEditor((xt) => {
										xt.editor.resource?.toString() === Ye.toString() &&
											Lt(void 0);
									});
							})),
						(Xe = this.editorService.findEditors(Ye)),
						Xe.length === 0)
					) {
						const Lt = this.editorService.editors
							.filter(
								(xt) =>
									xt instanceof nt.$RIb &&
									xt.preferredResource.toString() === Ye.toString(),
							)
							.map((xt) => xt.resource)
							.filter((xt) => xt !== void 0);
						Lt.length > 0 && (Xe = this.editorService.findEditors(Lt[0]));
					}
					return Xe.length === 0
						? !!(await this.textFileService.save(Ye, {
								reason: J.SaveReason.EXPLICIT,
								skipSaveParticipants: ze?.skipSaveParticipants ?? !1,
								force: ze?.force ?? !1,
								showPrettyDialogOnError: !0,
							}))
						: (
								await this.editorService.save(Xe, {
									reason: J.SaveReason.EXPLICIT,
									skipSaveParticipants: ze?.skipSaveParticipants ?? !1,
									force: ze?.force ?? !1,
									showPrettyDialogOnError: !0,
								})
							).success;
				}
				cleanUpComposer(Ye, ze) {
					const Xe = this.getComposer(Ye);
					if (!Xe) {
						console.error("[composer] no composer found for id", Ye);
						return;
					}
					this.cancelAll(Ye, {
						skipRejectDiffs: ze?.skipRejectDiffs,
						rejectSilently: ze?.rejectSilently,
					}),
						this.resetComposerEditingState(Ye),
						this._composerApplyingDiffsState.set(Ye, {
							isReactivatingApplyingDiffs: {},
							applyingDiffsBacklogLines: {},
						}),
						this.unregisterAllCachedCodeBlocks(Ye),
						ze?.skipCapabilitiesDisposal ||
							Xe.capabilities.forEach((It) => It.dispose());
				}
				async resetComposer(Ye, ze, Xe) {
					const It = this.getComposer(Ye);
					if (
						!It ||
						(this.shouldShowAcceptRejectAll(Ye) &&
							(await this.prettyDialogService.openDialog({
								title: "Are you sure to reset?",
								message:
									"You have changes that have not been accepted or rejected. Resetting will revert these changes.",
								cancelButton: { id: "cancel", label: "Cancel" },
								primaryButton: { id: "reset", label: "Reset" },
							})) !== "reset")
					)
						return;
					const xt = !this.isComposerContextUntouched(Ye),
						Vt = It.text,
						Bt = It.richText,
						Gt = ze?.text ? ze.text : xt ? Vt : "",
						Mt = ze?.richText ? ze.richText : xt ? Bt : "",
						Ut = this.composerDataService.getComposerForceMode(Ye),
						ei = (0, Z.getComposerDataToSave)(It, !1),
						mi = await this.composerUtilsService.createCurrentCheckpoint(Ye);
					this.cleanUpComposer(Ye);
					let ii = [],
						Dt = (0, Se.$2gc)();
					if (xt) {
						for (const si of Se.$Xgc)
							!It.context[si] ||
								!It.context.mentions[si] ||
								((0, Se.$Ygc)(si)
									? (Dt[si] = It.context[si].filter((Zt) => {
											const ci = (0, Se.$Zgc)(si, Zt);
											return (
												It.context.mentions[si] &&
												It.context.mentions[si][ci]?.length > 0
											);
										}))
									: It.context.mentions[si]?.length > 0 &&
										(Dt[si] = It.context[si]));
						Dt.mentions = (0, Se.$3gc)();
						for (const si of Se.$Xgc)
							if ((0, Se.$Ygc)(si))
								for (const Zt of Dt[si]) {
									const ci = (0, Se.$Zgc)(si, Zt);
									Dt.mentions[si] || (Dt.mentions[si] = {}),
										(Dt.mentions[si][ci] = It.context.mentions[si]?.[ci] || []);
								}
							else Dt.mentions[si] = It.context.mentions[si];
					}
					ii = (0, _.getComposerCapabilities)(
						this.instantiationService,
						this.reactiveStorageService,
						Ye,
						[],
					);
					const Jt = {
						...(0, Q.createEmptyComposer)(),
						forceMode: Ut,
						composerId: It.composerId ?? (0, y.$9g)(),
						createdAt: It.createdAt ?? Date.now(),
						richText: Mt,
						text: Gt,
						hasChangedContext: !1,
						context: Dt,
						backgroundInfo: It.backgroundInfo,
						capabilities: ii,
						isAgentic: this.getIsNewConversationAgentic(Ut),
						...ze,
					};
					console.log("[composer] new state", Jt, ze),
						this.undoRedoService.removeElements(
							this.getUndoRedoUri(Jt.composerId),
						),
						this.undoRedoService.pushElement(
							new v.$x7b(
								"Reset Composer",
								"reset-composer",
								this.getUndoRedoUri(Jt.composerId),
								() => {
									this.cleanUpComposer(Jt.composerId, {
										skipCapabilitiesDisposal: !0,
									}),
										ei.tabs[0].type !== "extra" &&
											(ei.tabs = [{ type: "extra" }, ...ei.tabs]),
										(ei.selectedTabIndex = ei.tabs.findIndex(
											(ci) => ci.type === "composer",
										));
									const { capabilities: si, ...Zt } = ei;
									this.updateComposer(Jt.composerId, Zt),
										mi !== void 0 &&
											this.checkoutToCheckpoint(Jt.composerId, mi);
								},
								() => {
									this._ignoreChangesToContext.add(Jt.composerId),
										this.updateComposer(Jt.composerId, Jt),
										Xe || this.refreshReactiveContextItem(Jt.composerId),
										this._onDidReset.fire({ composerId: Jt.composerId });
								},
							),
						),
						this.composerViewsService.isPrevBubbleFocused(Jt.composerId) &&
							this.focus(Jt.composerId),
						this._ignoreChangesToContext.add(Jt.composerId),
						this.updateComposer(Jt.composerId, Jt),
						Xe || this.refreshReactiveContextItem(Jt.composerId),
						this._onDidReset.fire({ composerId: Jt.composerId });
				}
				acceptDiff(Ye, ze) {
					this.analyticsService.trackEvent("composer.accept_diff", {
						source: "composer",
					});
					const Xe = this.composerDataService.getInlineDiff(Ye, ze);
					if (!Xe) {
						console.error("[composer] no diff id for uri", ze);
						return;
					}
					this.inlineDiffService.acceptDiff(Xe.id);
				}
				rejectDiff(Ye, ze, Xe) {
					this.analyticsService.trackEvent("composer.reject_diff", {
						source: "composer",
					});
					const It = this.composerDataService.getInlineDiff(Ye, ze);
					if (!It) {
						console.error("[composer] no diff id for uri", ze);
						return;
					}
					this.inlineDiffService.rejectDiff(It.id, {
						dontBreakConsolidation: Xe?.dontBreakConsolidation,
						rejectSilently: Xe?.rejectSilently,
					}),
						this.inlineDiffService.remove(It.id);
				}
				async acceptCached(Ye, ze, Xe) {
					if (!this.composerDataService.getComposerData(Ye)) return;
					const Lt = this.composerDataService.getComposerCodeBlock(Ye, ze, Xe);
					if (!Lt || Lt.isCached !== !0 || !Lt.newModelDiffWrtV0) {
						console.error("[composer] no cached code block for uri", ze);
						return;
					}
					this.unregisterCachedCodeBlock(Ye, ze, Lt.version);
					const xt = this.composerUtilsService.getCodeBlockNewModelLines(
						Ye,
						ze,
						Lt.version,
					);
					if (!xt) {
						console.error("[composer] no new model lines for uri", ze);
						return;
					}
					await this.inlineDiffService.applyNewModelLinesToFile({
						uri: ze,
						newModelLines: xt,
					}),
						this.composerDataService.setCodeBlockStatus(
							Ye,
							ze,
							Lt.version,
							"accepted",
						);
				}
				rejectCached(Ye, ze) {
					const Xe = this.composerDataService.getComposerData(Ye);
					if (!Xe) return;
					const It = Xe.codeBlockData[ze.toString()].find(
						(Lt) => Lt.isCached === !0,
					);
					if (!It || It.isCached !== !0) {
						console.error("[composer] no cached code block for uri", ze);
						return;
					}
					this.unregisterCachedCodeBlock(Ye, ze, It.version),
						this.composerDataService.setCodeBlockStatus(
							Ye,
							ze,
							It.version,
							"rejected",
						);
				}
				async accept(Ye, ze, Xe) {
					this.shouldCache(Ye)
						? this.acceptCached(Ye, ze, Xe)
						: this.acceptDiff(Ye, ze);
				}
				reject(Ye, ze, Xe) {
					this.shouldCache(Ye)
						? this.rejectCached(Ye, ze)
						: this.rejectDiff(Ye, ze);
				}
				async acceptAllCached(Ye) {
					const ze = this.composerDataService.getComposerData(Ye);
					if (!ze) return;
					const Xe = this.composerDataService.getAllCachedCodeBlocks(
							ze.composerId,
						),
						It = new Map();
					for (const Lt of Xe) It.set(Lt.uri, Lt.version);
					for (const [Lt, xt] of It) this.acceptCached(Ye, Lt, xt);
				}
				rejectAllCached(Ye) {
					const ze = this.composerDataService.getAllCachedCodeBlocks(Ye);
					this.unregisterAllCachedCodeBlocks(Ye);
					for (const Xe of ze)
						this.composerDataService.setCodeBlockStatus(
							Ye,
							Xe.uri,
							Xe.version,
							"rejected",
						);
				}
				acceptAllDiffs(Ye) {
					const ze = this.composerDataService.getAllInlineDiffs(Ye);
					for (const Xe of ze) this.acceptDiff(Ye, Xe.uri);
				}
				rejectAllDiffs(Ye, ze) {
					const Xe = this.composerDataService.getComposerData(Ye);
					if (!Xe) return;
					const It = this.getComposerEditingState(Ye);
					for (const xt of Object.keys(It.fastApplyQueue)) {
						const Vt = l.URI.parse(xt),
							Bt = It.fastApplyQueue[xt];
						if (!(xt in Xe.codeBlockData)) {
							delete It.fastApplyQueue[xt];
							continue;
						}
						const Gt = Xe.codeBlockData[Vt.toString()].filter(
							(Mt) => Mt.status === "apply_pending",
						);
						for (const Mt of Gt)
							this.composerDataService.setCodeBlockStatus(
								Ye,
								Mt.uri,
								Mt.version,
								"rejected",
							);
						Bt.clear(), delete It.fastApplyQueue[xt];
					}
					const Lt = this.composerDataService.getAllInlineDiffs(Ye);
					for (const xt of Lt)
						this.rejectDiff(Ye, xt.uri, { rejectSilently: ze?.rejectSilently });
					(It.fastApplyQueue = {}), (It.fastApplyRunningMap = {});
				}
				async acceptAll(Ye) {
					this.analyticsService.trackEvent("composer.accept_all"),
						this.shouldCache(Ye)
							? await this.acceptAllCached(Ye)
							: this.acceptAllDiffs(Ye);
				}
				rejectAll(Ye, ze) {
					this.analyticsService.trackEvent("composer.reject_all"),
						this.shouldCache(Ye)
							? this.rejectAllCached(Ye)
							: this.rejectAllDiffs(Ye, ze);
				}
				shouldShowAcceptRejectAll(Ye) {
					const ze = this.composerDataService.getComposerData(Ye);
					if (!ze) return !1;
					const Xe = this.composerDataService.getAllInlineDiffs(Ye);
					return this.shouldCache(ze.composerId)
						? this.composerDataService
								.getAllCachedCodeBlocks(ze.composerId)
								.some(
									(Lt) =>
										Lt.status === "cancelled" || Lt.status === "completed",
								)
						: Xe.length > 0;
				}
				shouldShowAcceptReject(Ye, ze, Xe) {
					const It = this.composerDataService.getComposerData(Ye);
					if (
						!It ||
						(It.codeBlockData[ze.toString()] ?? []).some(
							(xt) => xt.status === "applying" || xt.status === "generating",
						)
					)
						return !1;
					if (this.shouldCache(It.composerId))
						return (It.codeBlockData[ze.toString()] ?? []).some(
							(Vt) =>
								(Vt.status === "cancelled" || Vt.status === "completed") &&
								Vt.isCached === !0,
						);
					{
						const xt = this.composerDataService.getInlineDiff(
							It.composerId,
							ze,
						);
						return xt
							? Xe !== void 0
								? xt.composerMetadata?.version === Xe
								: !0
							: !1;
					}
				}
				cacheAllDiffs(Ye) {
					const ze = this.composerDataService.getComposerFromIdOrHandle(Ye);
					if (!ze) return;
					const Xe = this.composerDataService.getAllInlineDiffs(ze.composerId);
					for (const It of Xe) {
						if (
							(console.log("[composer] caching diff", It.uri.toString()),
							It.composerMetadata?.version === void 0)
						) {
							console.error(
								"[composer] caching diff with undefined version",
								It.uri.toString(),
							);
							continue;
						}
						this.registerCachedCodeBlock(
							ze.composerId,
							It.uri,
							It.composerMetadata.version,
							!0,
						),
							this.rejectDiff(ze.composerId, It.uri, {
								dontBreakConsolidation: !0,
							});
					}
				}
				cancelOrRejectAllCodeBlocks(Ye) {
					const ze = this.getComposerEditingState(Ye);
					(ze.fastApplyQueue = {}), (ze.fastApplyRunningMap = {});
					const Xe = this.composerDataService.getComposerData(Ye);
					if (Xe) {
						for (const It of Object.keys(Xe.codeBlockData ?? {})) {
							const Lt = l.URI.parse(It),
								xt = this.composerDataService.getLatestCodeBlockVersion(Ye, Lt),
								Vt = this.composerDataService.getCodeBlockStatus(Ye, Lt, xt);
							Vt === "applying"
								? this.cancelApply(Ye, Lt)
								: Vt === "generating" &&
									this.composerDataService.updateComposerCodeBlock(Ye, Lt, xt, {
										status: "aborted",
									});
						}
						this.rejectAllDiffs(Ye);
					}
				}
				cancelApply(Ye, ze) {
					const Xe = this.composerDataService.getComposerData(Ye);
					if (!Xe) return !1;
					const It = Xe.codeBlockData[ze.toString()].find(
						(Lt) => Lt.status === "applying",
					);
					return It
						? (It.applyGenerationUUID &&
								this.abortGenerationUUID(It.applyGenerationUUID),
							this.composerDataService.updateComposerCodeBlock(
								Ye,
								ze,
								It.version,
								{ status: "cancelled", applyGenerationUUID: void 0 },
							),
							this.saveFile(ze, { force: !0 }),
							!0)
						: (console.error(
								"[composer] cancelApply called for uri that is not applying",
								ze,
							),
							!1);
				}
				cancelChat(Ye) {
					const ze = this.composerDataService.getComposerData(Ye);
					!ze ||
						ze.status !== "generating" ||
						(this.cancelAllCapabilities(ze.composerId),
						ze.chatGenerationUUID &&
							this.abortGenerationUUID(ze.chatGenerationUUID),
						this.updateComposer(ze.composerId, {
							chatGenerationUUID: void 0,
							status: "aborted",
						}),
						this.composerDataService.setGeneratingCapabilitiesToAborted(
							ze.composerId,
						),
						this.composerDataService.setLoadingToolFormerToolsToCancelled(
							ze.composerId,
						));
				}
				async cancelCurrentStep(Ye) {
					const ze = this.getComposer(Ye);
					if (!ze) return;
					if (
						ze.status === "generating" &&
						!this.composerDataService.getIsBlockingUserDecision(Ye)
					) {
						await this.cancelChat(Ye);
						return;
					}
					const Xe = this.composerDataService.getPendingUserDecisionGroup(Ye);
					if (Xe.length > 0) {
						for (const Lt of Xe) Lt.reject();
						return;
					}
					if (
						this.composerDataService
							.getCodeBlocksOfStatuses(Ye, "applying")
							.filter((Lt) => !Lt.isNotApplied).length > 0
					) {
						await this.cancelAllApplies(Ye);
						return;
					}
					if (this.composerDataService.isRunningCapabilities(Ye)) {
						await this.cancelAllCapabilities(Ye);
						return;
					}
				}
				cancelAllApplies(Ye) {
					const ze = this.composerDataService.getComposerData(Ye);
					if (!ze) return;
					const Xe = this.getComposerEditingState(ze.composerId);
					(Xe.fastApplyQueue = {}), (Xe.fastApplyRunningMap = {});
					const It = this.composerDataService.getCodeBlocksOfStatuses(
						ze.composerId,
						"apply_pending",
					);
					for (const Vt of It)
						this.composerDataService.setCodeBlockStatus(
							ze.composerId,
							Vt.uri,
							Vt.version,
							"cancelled",
						);
					const Lt = this.composerDataService.getCodeBlocksOfStatuses(
							ze.composerId,
							"applying",
						),
						xt = new Set(Lt.map(({ uri: Vt }) => Vt.toString()));
					for (const Vt of xt) this.cancelApply(Ye, l.URI.parse(Vt));
				}
				cancelAllCapabilities(Ye) {
					const ze = this.composerDataService.getComposerData(Ye);
					ze &&
						ze.capabilities.forEach((Xe) => {
							typeof Xe.cancel == "function" && Xe.cancel();
						});
				}
				cancelAll(Ye, ze) {
					const Xe = this.composerDataService.getComposerData(Ye);
					Xe &&
						(this.cancelChat(Xe.composerId),
						this.cancelAllApplies(Xe.composerId),
						this.cancelAllCapabilities(Xe.composerId),
						ze?.skipRejectDiffs ||
							this.rejectAllDiffs(Xe.composerId, {
								rejectSilently: ze?.rejectSilently,
							}));
				}
				computeCacheKey(Ye) {
					const ze = {
						fileSelections: Ye.context.fileSelections.length,
						selections: Ye.context.selections.length,
						folderSelections: Ye.context.folderSelections?.length ?? 0,
						selectedCommits: Ye.context.selectedCommits?.length ?? 0,
						selectedPullRequests: Ye.context.selectedPullRequests?.length ?? 0,
						selectedDocs: Ye.context.selectedDocs?.length ?? 0,
						externalLinks: Ye.context.externalLinks?.length ?? 0,
						bubbleId: Ye.conversation.at(-1)?.bubbleId,
						modelName:
							this.reactiveStorageService.applicationUserPersistentStorage
								.aiSettings.composerModel,
					};
					return (
						(ze.files = Ye.context.fileSelections.map((Xe) => ({
							uri: Xe.uri.toString(),
							isCurrentFile: Xe.isCurrentFile,
						}))),
						(ze.folders = Ye.context.folderSelections?.map((Xe) => ({
							uri: Xe.relativePath,
						}))),
						JSON.stringify(ze)
					);
				}
				handleUserDidType(Ye) {
					if (
						((async () => {
							try {
								await Promise.resolve(),
									await this.aiFeatureStatusService.maybeRefreshFeatureStatus(
										"cacheComposerPrompts",
									);
								const Gt = this.aiFeatureStatusService.getCachedFeatureStatus(
									"cacheComposerPrompts",
								);
								Gt !==
									this.reactiveStorageService.applicationUserPersistentStorage
										.cacheComposerPrompts &&
									this.reactiveStorageService.setApplicationUserPersistentStorage(
										"cacheComposerPrompts",
										Gt,
									);
							} catch (Gt) {
								console.error(
									"[composer] error refreshing cacheComposerPrompts",
									Gt,
								);
							}
						})(),
						!this.reactiveStorageService.applicationUserPersistentStorage
							.cacheComposerPrompts)
					)
						return;
					this.maybeInvalidateCache(Ye);
					const ze = this.getComposer(Ye);
					if (!ze) return;
					let Xe = ze.cachingStatus ?? {
						promptIsCached: !1,
						numCharsTypedSincePromptChanged: 0,
					};
					const It =
						ze.conversation.filter(
							(Gt) => Gt.type === d.ConversationMessage_MessageType.AI,
						).length > 0;
					(async () => {
						await this.aiFeatureStatusService.maybeRefreshConfig(
							"composerKeystrokesBeforeCaching",
						),
							await this.aiFeatureStatusService.maybeRefreshConfig(
								"composerKeystrokesBeforeCachingFollowups",
							),
							await this.aiFeatureStatusService.maybeRefreshConfig(
								"composerKeystrokesBeforeCachingFollowupsTurboMode",
							);
					})().catch(() => {});
					const Lt =
							this.aiFeatureStatusService.getCachedConfig(
								"composerKeystrokesBeforeCaching",
							) ?? 3,
						xt =
							this.aiFeatureStatusService.getCachedConfig(
								"composerKeystrokesBeforeCachingFollowups",
							) ?? 25,
						Vt =
							this.aiFeatureStatusService.getCachedConfig(
								"composerKeystrokesBeforeCachingFollowupsTurboMode",
							) ?? 5,
						Bt = It
							? this.reactiveStorageService.applicationUserPersistentStorage
									.turboModeOptions.useTurboMode === !0
								? Vt
								: xt
							: Lt;
					Xe.promptIsCached ||
						(Xe.numCharsTypedSincePromptChanged > Bt
							? (this.maybeSubmitWarmCacheRequest(Ye, ze.text, {
									richText: ze.richText,
								}),
								this.updateComposer(Ye, {
									cachingStatus: {
										promptIsCached: !0,
										promptLastCachedAt: Date.now(),
										cacheKey: this.computeCacheKey(ze),
									},
								}))
							: this.updateComposer(Ye, {
									cachingStatus: {
										...Xe,
										numCharsTypedSincePromptChanged:
											Xe.numCharsTypedSincePromptChanged + 1,
									},
								}));
				}
				handleUserUsedFilePicker(Ye) {
					this.reactiveStorageService.applicationUserPersistentStorage
						.cacheComposerPrompts && this.maybeInvalidateCache(Ye);
				}
				handleUserSwitchedModel(Ye) {
					this.maybeInvalidateCache(Ye);
				}
				maybeInvalidateCache(Ye) {
					const ze = this.getComposer(Ye);
					if (!ze) return;
					const Xe = 5 * 60 * 1e3,
						{ cachingStatus: It } = ze;
					It?.promptIsCached === !0 &&
						(Date.now() - It.promptLastCachedAt > Xe ||
							It.cacheKey !== this.computeCacheKey(ze)) &&
						this.updateComposer(Ye, {
							cachingStatus: {
								promptIsCached: !1,
								numCharsTypedSincePromptChanged: 0,
							},
						});
				}
				async maybeSubmitWarmCacheRequest(Ye, ze, Xe) {
					if (
						!this.reactiveStorageService.applicationUserPersistentStorage
							.cacheComposerPrompts
					)
						return;
					const It = this.composerDataService.getComposerForceMode(Ye);
					if (
						It === "edit" &&
						(this.latestSubmitWarmCacheRequestTimes.push(Date.now()),
						(this.latestSubmitWarmCacheRequestTimes =
							this.latestSubmitWarmCacheRequestTimes.filter(
								(Lt) => Date.now() - Lt < this.recentTimeWindow,
							)),
						this.aiAssertService.assert(
							this.latestSubmitWarmCacheRequestTimes.length <=
								this.maxRecentRequests,
							"Too many recent warm cache requests! Please post in #bug-reports!",
						),
						!(
							this.latestSubmitWarmCacheRequestTimes.length >
							this.maxRecentRequests
						))
					)
						try {
							let Lt = this.getComposer(Ye);
							if (
								!Lt ||
								!!Lt.isAgentic ||
								[...Lt.conversation]
									.reverse()
									.find(
										(ut) => ut.type === d.ConversationMessage_MessageType.HUMAN,
									)?.isAgentic === !0
							)
								return;
							try {
								if (
									await this.composerUtilsService.runCapabilitiesForProcess(
										Ye,
										"start-submit-chat",
										{
											composerId: Ye,
											isCapabilityIteration: !1,
											submitChatProps: { text: ze, extra: Xe },
											isCacheWarming: !0,
										},
									)
								)
									return;
							} catch {
								return;
							}
							let Bt = (0, ke.$6gc)(Lt.context),
								Gt = [...(Lt.userResponsesToSuggestedCodeBlocks ?? [])];
							const Mt = Lt.currentBubbleId;
							let Ut = [...Lt.conversation];
							if (Mt !== void 0) {
								const ut = this.composerDataService.getComposerBubble(Ye, Mt);
								if (!ut) throw Error("[composer] bubble is undefined");
								const Et = ut.context;
								if (!Et) throw Error("[composer] bubble context is undefined");
								(Bt = (0, ke.$6gc)(Et)),
									(Gt = [...(ut.userResponsesToSuggestedCodeBlocks ?? [])]);
								const Tt = (0, ke.$bhc)((0, ke.$6gc)(Et));
							}
							const ei = Bt.fileSelections.map((ut) => (0, ke.$8gc)(ut)),
								mi = Lt.tabs
									.filter((ut) => ut.type === "code")
									.map((ut) => ut.uri.toString()),
								ii = Array.from(new Set([...ei, ...mi])).map((ut) => ({
									uri: l.URI.parse(ut),
									fileName: (0, f.$sc)(ut),
								})),
								Dt = {
									...Bt,
									usesCodebase:
										Bt.usesCodebase !== void 0 && Bt.usesCodebase !== !1
											? Bt
											: void 0,
									useDiffReview: !1,
								},
								Jt = { ...Dt, fileSelections: ii };
							if (Jt.useWeb || Jt.usesCodebase) return;
							const si = await this.aiService.aiClient(),
								Zt = (0, Q.createDefaultConversationMessage)();
							Ut = [
								...Ut,
								{
									...Zt,
									richText: Xe?.richText ?? ze,
									context: Dt,
									text: ze,
									userResponsesToSuggestedCodeBlocks: Gt,
								},
							];
							let ci,
								ri = (0, y.$9g)(),
								[$i, Wt] = this.aiService.registerNewGeneration({
									generationUUID: ri,
									metadata: void 0,
								});
							const tt = new Set([
									...Object.keys(Lt.codeBlockData ?? {}),
									...ii.map((ut) => ut.uri.toString()),
								]),
								at = Array.from(tt).map((ut) => l.URI.parse(ut)),
								pi = this.selectedContextService.getLinterErrorsForFiles(at),
								Li = this.selectedContextService.getCodeChunks(
									{ ...Jt },
									{ worktreePath: Lt.backgroundInfo?.worktreePath },
								),
								Di = this.composerDataService.getRelevantFiles(Ye),
								Ui =
									It === "edit"
										? this.composerUtilsService.getRecentlyViewedFileInfo(Li)
										: () => Promise.resolve([]),
								[Wi, Gi, qi, Oi] = await Promise.all([Li, Di, pi, Ui]),
								yi = Ut.at(-1);
							if (yi === void 0) throw new Error("last message is undefined");
							(Ut = [
								...Ut.slice(0, -1),
								{
									...yi,
									attachedCodeChunks: Wi,
									relevantFiles: [
										...Gi.map((ut) =>
											this.workspaceContextService.asRelativePath(
												l.URI.revive(ut.uri),
											),
										),
									],
									multiFileLinterErrors: [
										...qi.map((ut) => new a.$5s({ ...ut })),
									],
									...Oi,
								},
							]),
								(Lt = this.getComposer(Ye));
							const Ai =
								await this.composerUtilsService.populateCodeChunksInConversation(
									Ut,
								);
							let li = Ai;
							if (
								(It === "edit" &&
									(li =
										await this.composerUtilsService.populateRedDiffsInConversation(
											Ai,
										)),
								!this.getComposer(Ye) || Wt.signal.aborted)
							)
								return;
							const wi =
									await this.composerUtilsService.populateConversationWithExtraContext(
										li,
										Ye,
										{ disableImageRemoval: !0, lastBubbleContext: Jt },
									),
								ai = this.getModelDetails("composer");
							let Ft = await this.aiService.getCurrentFileInfo();
							const Xt = {
								conversation: wi,
								allowLongFileScan: !0,
								explicitContext: await this.aiService.getExplicitContext(),
								documentationIdentifiers: (Dt.selectedDocs ?? []).map(
									(ut) => ut.docId,
								),
								quotes: Jt.quotes ?? [],
								canHandleFilenamesAfterLanguageIds: !0,
								modelDetails: ai,
								useWeb: Jt.useWeb ? "full_search" : void 0,
								externalLinks: Jt.externalLinks ?? [],
								projectContext: ci,
								diffsForCompressingFiles: [],
								compressEdits: !0,
								shouldCache:
									this.reactiveStorageService.applicationUserPersistentStorage
										.cacheComposerPrompts,
								multiFileLinterErrors: qi,
								currentFile: Ft,
								useNewCompressionScheme: !0,
								additionalRankedContext: [],
								fileDiffHistories: [],
							};
							try {
								await this.composerUtilsService.runCapabilitiesForProcess(
									Ye,
									"mutate-request",
									{
										composerId: Ye,
										humanBubbleId: Zt.bubbleId,
										isCapabilityIteration: !1,
										contextUsed: Jt,
										isCacheWarming: !0,
									},
									{ request: Xt },
								);
							} catch {
								return;
							}
							const $t = await si.warmComposerCache(Xt, { signal: Wt.signal });
							ri && this.abortGenerationUUID(ri);
						} catch {
						} finally {
						}
				}
				async debouncedMaybeKeepComposerCacheWarm(Ye, ze, Xe) {
					const It = this.composerDataService.getComposerForceMode(Ye);
					await this.aiFeatureStatusService
						.maybeRefreshConfig("keepCacheWarmTimeout")
						.catch(() => {});
					const Lt =
						this.aiFeatureStatusService.getCachedConfig(
							"keepCacheWarmTimeout",
						) ?? 4.5 * 60 * 1e3;
					let xt;
					const Vt = this.D(
						this.onDidSendRequest(() => {
							xt !== void 0 && clearTimeout(xt), Vt.dispose();
						}),
					);
					xt = setTimeout(async () => {
						if (
							(Vt.dispose(),
							this.composerDataService.getSelectedIdByForceMode(It) !== Ye)
						)
							return;
						(await this.aiService.aiClient())
							.keepComposerCacheWarm({
								request: Xe,
								requestId: ze,
								isComposerVisible: this.composerViewsService.isShowing(Ye),
							})
							.catch((Mt) => {});
					}, Lt);
				}
				shouldSkipCapabilities(Ye, ze) {
					return Ye === "*" || (Ye ?? []).includes(ze);
				}
				async submitChatMaybeAbortCurrent(Ye, ze, Xe) {
					try {
						await this.composerUtilsService.ensureCapabilitiesAreLoaded(Ye);
					} catch (ri) {
						console.error(
							"[composer] error ensuring capabilities are loaded",
							ri,
						);
						return;
					}
					this._onDidSubmitChat.fire({
						composerId: Ye,
						bubbleId: Xe?.bubbleId,
					});
					const It = Date.now(),
						Lt = this.applicationComposerSettings.unification
							? this.applicationComposerSettings.isAutoApplyEnabled
								? "edit"
								: "chat"
							: this.composerDataService.getComposerForceMode(Ye);
					Xe = {
						skipRegisteringCodeBlocks: Xe?.isThought ? !0 : void 0,
						capabilityProcessesToSkip:
							Lt === "chat"
								? [
										"start-submit-chat",
										"before-submit-chat",
										"after-submit-chat",
										"composer-settled",
									]
								: Xe?.capabilityProcessesToSkip,
						...(Xe ?? {}),
					};
					const xt = this.getComposer(Ye);
					if (!xt) {
						console.error("[composer] submitted without state!");
						return;
					}
					const Vt = !!xt.isAgentic;
					if (
						(this.reactiveStorageService.nonPersistentStorage.composerState
							.isTestingHttp2Disabled
							? !0
							: (this.configurationService.getValue(V.$xJ) ?? !1)) &&
						Vt
					) {
						await this.prettyDialogService.openDialog({
							title: "HTTP2 Not Supported",
							message: "Agentic mode is not supported when HTTP2 is disabled",
							primaryButton: { id: "dismiss", label: "Dismiss" },
						}),
							this.cancelChat(Ye),
							console.error("[composer] HTTP2 Not Supported");
						return;
					}
					if (
						!this.shouldSkipCapabilities(
							Xe?.capabilityProcessesToSkip,
							"start-submit-chat",
						)
					)
						try {
							if (
								await this.composerUtilsService.runCapabilitiesForProcess(
									Ye,
									"start-submit-chat",
									{
										composerId: Ye,
										isCapabilityIteration: Xe?.isCapabilityIteration,
										submitChatProps: { text: ze, extra: Xe },
									},
								)
							)
								return;
						} catch (ri) {
							console.error(
								"[composer] error running capabilities for start-submit-chat",
								ri,
							),
								this.updateComposer(Ye, { status: "aborted" });
							return;
						}
					let Gt = new AbortController(),
						Mt = !1,
						Ut = !1,
						ei = !1,
						mi = (0, y.$9g)(),
						ii,
						Dt,
						Jt = (0, Se.$2gc)();
					const si = () => {
							const ri = this.composerDataService.getLastAiBubbleId(Ye);
							ri &&
								(this.composerDataService.updateComposerBubble(Ye, ri, {
									errorDetails: void 0,
								}),
								(this._recentlyResumed = !0),
								this.submitChatMaybeAbortCurrent(Ye, "", {
									...Xe,
									isCapabilityIteration: !0,
									bubbleId: void 0,
									skipAddNewHumanMessage: !0,
								}));
						},
						Zt = () => {
							ii &&
								this.submitChatMaybeAbortCurrent(Ye, ze, {
									...Xe,
									bubbleId: ii.bubbleId,
								});
						},
						ci = (ri) => {
							const $i =
									this.aiErrorService.shouldShowImmediateErrorMessage(ri),
								Wt = this.getComposer(Ye),
								tt = this.composerDataService.getLastAiBubbleId(Ye),
								at =
									Vt &&
									this.composerDataService
										.getLastAiBubbles(Ye)
										.some((pi) => (pi.text.length ?? 0) > 0);
							if ($i && Wt) {
								const pi = (0, Ke.$X6b)(ri);
								this.composerDataService.updateComposerDataSetStore(Ye, (Li) =>
									Li(
										"conversation",
										(Di) => Di.bubbleId === tt,
										"errorDetails",
										{
											generationUUID: mi,
											error: pi,
											message: ri?.rawMessage,
											rerun: Zt,
											resume: at ? si : void 0,
										},
									),
								);
							}
						};
					try {
						this.updateComposer(Ye, { status: "generating" }),
							this.composerDataService.clearActionButtons(Ye),
							(Xe.bubbleId = Xe?.bubbleId ?? xt.currentBubbleId);
						let ri = (0, ke.$6gc)(xt.context),
							$i = [...(xt.userResponsesToSuggestedCodeBlocks ?? [])];
						if (Xe?.bubbleId !== void 0) {
							const fi = this.composerDataService.getComposerBubble(
								Ye,
								Xe.bubbleId,
							);
							if (fi && fi.context) {
								const Ti = fi.context;
								(ri = (0, ke.$6gc)(Ti)),
									($i = [...(fi.userResponsesToSuggestedCodeBlocks ?? [])]);
								const wt = (0, ke.$bhc)((0, ke.$6gc)(Ti));
								this.updateComposer(Ye, { context: wt });
							}
						}
						this.composerDataService.updateComposerDataSetStore(Ye, (fi) =>
							fi("currentBubbleId", void 0),
						),
							this.composerDataService.updateComposerDataSetStore(Ye, (fi) =>
								fi("latestCheckpoint", void 0),
							),
							this.undoRedoService.setElementsValidFlag(
								this.getUndoRedoUri(Ye),
								!1,
								(fi) => fi.code === "reset-composer",
							);
						const Wt = {
							...ri,
							usesCodebase:
								ri.usesCodebase !== void 0 && ri.usesCodebase !== !1
									? ri
									: Xe?.usesCodebase,
							useDiffReview: ri.useDiffReview ?? Xe?.useDiffReview,
						};
						if (!Xe?.isCapabilityIteration) {
							if ((this.removeNonPersistentContext(Ye), Lt === "chat")) {
								this.removeAllListContext({
									composerId: Ye,
									contextType: "fileSelections",
									addToUndoRedo: !1,
								});
								const fi = this.getCurrentFile();
								fi !== void 0 &&
									ri.fileSelections.some(
										(Ti) =>
											(0, Se.$Zgc)("fileSelections", Ti) ===
											(0, Se.$Zgc)("fileSelections", fi),
									) &&
									this.resetContext(Ye);
							}
							this._onShouldClearLexical.fire({
								composerId: Ye,
								bubbleId: Xe?.bubbleId,
							}),
								this.composerViewsService.focus(Ye, !0);
						}
						const tt = (0, _.getFilteredAndSortedCapabilities)(xt.capabilities);
						if (tt.length === 0 && Xe?.isCapabilityIteration) {
							console.error(
								"[composer] submitted capability iteration without capabilities!",
							);
							return;
						}
						const at = await this.aiService.aiClient();
						let pi,
							Li = !1;
						if (Xe?.bubbleId) {
							const fi = Xe.bubbleId ?? xt.currentBubbleId,
								Ti = this.composerDataService.getComposerBubble(Ye, fi),
								wt = xt.conversation.findIndex((Ji) => Ji.bubbleId === fi);
							if (!Ti) throw Error("[composer] current bubble is undefined");
							let We;
							Ti.type === d.ConversationMessage_MessageType.HUMAN
								? ((We =
										wt !== -1 ? xt.conversation[wt + 1]?.bubbleId : void 0),
									(Li = !0))
								: (We = fi);
							const _e = xt.conversation.slice(wt + 1),
								Si = xt.conversation.slice(0, wt),
								gi = (Ji) => {
									const cn = this.composerDataService.getComposerCapability(
										Ye,
										m.ComposerCapabilityRequest_ComposerCapabilityType
											.TOOL_FORMER,
									);
									if (!cn) return !1;
									const un = cn.getBubbleData(Ji.bubbleId);
									return un
										? un.tool === Re.ClientSideToolV2.RUN_TERMINAL_COMMAND_V2
										: !1;
								},
								ki = _e.some(gi),
								Pi = Si.some(gi);
							if (ki) {
								const Ji = tt.find(
									(cn) =>
										cn.type ===
										m.ComposerCapabilityRequest_ComposerCapabilityType
											.TOOL_FORMER,
								);
								Ji && Ji.clearSessionId();
							}
							We && this.composerUtilsService.removeMessagesAfterBubble(Ye, We);
							const Hi =
								await this.composerUtilsService.createCurrentCheckpoint(Ye);
							Li
								? this.composerDataService.updateComposerBubble(Ye, fi, {
										...(0, Q.createDefaultConversationMessage)(),
										richText: Xe?.richText ?? ze,
										text: ze,
										userResponsesToSuggestedCodeBlocks: $i,
										context: Wt,
										checkpoint: Hi,
										isCapabilityIteration: Xe?.isCapabilityIteration,
										existedSubsequentTerminalCommand: ki,
										existedPreviousTerminalCommand: Pi,
									})
								: this.composerDataService.updateComposerBubble(Ye, fi, {
										existedSubsequentTerminalCommand: ki,
										existedPreviousTerminalCommand: Pi,
									});
						}
						const Di = Wt.fileSelections.map((fi) => (0, ke.$8gc)(fi)),
							Ui = Lt === "edit" ? Object.keys(xt.codeBlockData) : [],
							Gi = (
								await Promise.all(
									(
										await Promise.all(
											Array.from(new Set([...Di, ...Ui])).map(async (fi) => ({
												uri: fi,
												exists: await this.fileService.exists(l.URI.parse(fi)),
											})),
										)
									)
										.filter((fi) => fi.exists)
										.map((fi) => fi.uri),
								)
							).map((fi) => ({
								uri: l.URI.parse(fi),
								fileName: (0, f.$sc)(fi),
							}));
						if (
							((Jt = { ...Wt, fileSelections: Gi }),
							(Vt || Jt.usesCodebase) &&
								this.reactiveStorageService.applicationUserPersistentStorage
									.checklistState?.doneCommandEnter !== !0)
						) {
							const fi =
								this.reactiveStorageService.applicationUserPersistentStorage
									.checklistState;
							this.reactiveStorageService.setApplicationUserPersistentStorage(
								"checklistState",
								(Ti) => ({ ...(Ti ?? {}), doneCommandEnter: !0 }),
							);
						}
						if (Xe?.skipAddNewHumanMessage || Li) {
							const fi = this.composerDataService.getLastHumanBubbleId(Ye);
							if (!fi)
								throw new Error(
									"[composer] submitted capability iteration without a last human bubble id!",
								);
							const Ti = this.composerDataService.getComposerBubble(Ye, fi);
							if (!Ti)
								throw new Error(
									"[composer] submitted capability iteration without a last human message!",
								);
							ii = Ti;
						} else {
							const fi =
								await this.composerUtilsService.createCurrentCheckpoint(Ye);
							(ii = {
								...(0, Q.createDefaultConversationMessage)(),
								richText: Xe?.richText ?? ze,
								text: ze,
								userResponsesToSuggestedCodeBlocks: $i,
								context: Wt,
								checkpoint: fi,
								isCapabilityIteration: Xe?.isCapabilityIteration,
							}),
								this.composerDataService.updateComposerDataSetStore(Ye, (Ti) =>
									Ti("conversation", [...xt.conversation, ii]),
								);
						}
						if (
							!this.shouldSkipCapabilities(
								Xe?.capabilityProcessesToSkip,
								"before-submit-chat",
							)
						)
							try {
								if (
									await this.composerUtilsService.runCapabilitiesForProcess(
										Ye,
										"before-submit-chat",
										{
											composerId: Ye,
											humanBubbleId: ii.bubbleId,
											isCapabilityIteration: Xe?.isCapabilityIteration,
											contextUsed: Jt,
											submitChatProps: { text: ze, extra: Xe },
										},
									)
								)
									return;
							} catch (fi) {
								console.error(
									"[composer] error running capabilities for before-submit-chat",
									fi,
								),
									this.handleAbortChat(Ye, ii.bubbleId);
								return;
							}
						if (
							(this.updateComposer(Ye, {
								currentBubbleId: void 0,
								editingBubbleId: void 0,
							}),
							xt.chatGenerationUUID)
						) {
							const fi = xt.chatGenerationUUID;
							this.updateComposer(Ye, { chatGenerationUUID: void 0 }),
								this._skipHandleAbortChat.add(Ye),
								this.abortGenerationUUID(fi),
								await new Promise((Ti) => setTimeout(Ti, 50)),
								this._skipHandleAbortChat.delete(Ye);
						}
						(Gt = this.aiService.registerNewGeneration({
							generationUUID: mi,
							metadata:
								Lt === "chat"
									? {
											type: "chat",
											tabId: xt.composerId,
											bubbleId: ii.bubbleId,
											chatType: "chat",
										}
									: { type: "composer", textDescription: ze },
						})[1]),
							this.updateComposer(Ye, {
								chatGenerationUUID: mi,
								latestChatGenerationUUID: mi,
								generatingBubbleIds: [],
								status: "generating",
								lastUpdatedAt: Date.now(),
							}),
							(Dt = {
								...(0, Q.createDefaultConversationMessage)(),
								codeBlocks: [],
								type: d.ConversationMessage_MessageType.AI,
								text: "",
								isThought: Xe?.isThought,
								isCapabilityIteration: Xe?.isCapabilityIteration,
								timingInfo: {
									clientStartTime: It,
									clientRpcSendTime: Date.now(),
								},
							});
						const qi = this.isUsingAPIKeys(Ye),
							Oi = this.cursorAuthenticationService.membershipType();
						if (
							qi &&
							Lt !== "chat" &&
							Oi === V.MembershipType.FREE &&
							this.cursorAuthenticationService.isAuthenticated()
						) {
							this.updateComposer(Ye, {
								conversation: [...xt.conversation, Dt],
								status: "aborted",
							}),
								this.composerDataService.updateComposerDataSetStore(Ye, (fi) =>
									fi(
										"conversation",
										(Ti) => Ti.bubbleId === Dt.bubbleId,
										"errorDetails",
										{
											generationUUID: mi,
											error: new a.$at({
												error: a.ErrorDetails_Error.UNSPECIFIED,
												details: {
													title: "Cursor Pro Required",
													detail:
														"Composer relies on custom models that cannot be billed to an API key. Please disable API keys and use a Pro or Business subscription.",
												},
											}),
											message:
												"Composer relies on custom models that cannot be billed to an API key. Please disable API keys and use a Pro or Business subscription.",
											rerun: Zt,
										},
									),
								);
							return;
						}
						const yi = new Set([
								...Object.keys(xt.codeBlockData ?? {}),
								...Gi.map((fi) => fi.uri.toString()),
							]),
							Ai = Array.from(yi).map((fi) => l.URI.parse(fi)),
							li =
								Lt === "chat"
									? Promise.resolve([])
									: this.selectedContextService.getLinterErrorsForFiles(Ai),
							Vi = this.selectedContextService.getCodeChunks(
								{ ...Jt, folderSelections: Vt ? [] : Jt.folderSelections },
								{ worktreePath: xt.backgroundInfo?.worktreePath },
							),
							wi = this.composerDataService.getRelevantFiles(Ye),
							_t = this.getEnvironmentInfo(),
							ai =
								Lt === "edit"
									? this.composerUtilsService.getRecentlyViewedFileInfo(Vi)
									: () => Promise.resolve([]),
							[Ft, Xt, $t, ut, Et] = await Promise.all([li, Vi, wi, ai, _t]);
						(pi = Ft),
							this.composerDataService.updateComposerDataSetStore(Ye, (fi) =>
								fi("conversation", (Ti) => Ti.bubbleId === ii.bubbleId, {
									attachedCodeChunks: Lt !== "chat" ? Xt : [],
									relevantFiles: [
										...$t.map((Ti) =>
											this.workspaceContextService.asRelativePath(
												l.URI.revive(Ti.uri),
											),
										),
									],
									multiFileLinterErrors: [
										...pi.map(
											(Ti) => new a.$4s({ ...Ti, fileContents: void 0 }),
										),
									],
									...ut,
									isAgentic: Vt,
								}),
							);
						const Tt = (0, i.unwrap)(xt.conversation).map((fi) => ({ ...fi }));
						if (Lt === "chat") {
							const fi = Tt.findIndex((Ti) => Ti.bubbleId === ii.bubbleId);
							Tt[fi].attachedCodeChunks = Xt;
						}
						const qt =
							await this.composerUtilsService.populateCodeChunksInConversation(
								Tt,
								Lt === "chat",
							);
						let At = qt;
						Lt === "edit" &&
							(At =
								await this.composerUtilsService.populateRedDiffsInConversation(
									qt,
								));
						for (const fi of At)
							this.composerDataService.updateComposerDataSetStore(Ye, (Ti) =>
								Ti(
									"conversation",
									(wt) => wt.bubbleId === fi.bubbleId,
									"diffsForCompressingFiles",
									fi.diffsForCompressingFiles,
								),
							);
						this.updateComposer(Ye, { userResponsesToSuggestedCodeBlocks: [] });
						let Yt = "";
						const ni =
							await this.composerUtilsService.populateConversationWithExtraContext(
								At,
								Ye,
								{
									lastBubbleContext: Jt,
									removeContext: (fi) => this.removeContext(fi),
								},
							);
						await (async () => {
							if (!Gt.signal.aborted)
								try {
									const fi = ni,
										Ti = Lt === "chat" ? "regular-chat" : "composer",
										wt = this.getModelDetails(Ti);
									Xe?.modelOverride && (wt.modelName = Xe.modelOverride);
									let We = await this.aiService.getCurrentFileInfo();
									const _e = await this.repositoryService.getNewRepoInfo();
									let Si;
									_e &&
										this.repositoryService.isIndexedMainLocalRepository() &&
										(Si = new u.$mv(_e));
									const gi = [...fi]
											.reverse()
											.map((Nn) => Nn.conversationSummary)
											.filter((Nn) => Nn !== void 0)[0],
										ki = gi?.clientShouldStartSendingFromInclusiveBubbleId;
									let Pi = ki
										? fi.findIndex(
												(Nn) => (Nn.serverBubbleId ?? Nn.bubbleId) === ki,
											)
										: 0;
									Pi === -1 && (Pi = 0);
									const Hi = fi.slice(Pi);
									if (Lt === "chat") {
										Jt.fileSelections.some(
											(Fn) =>
												this.workspaceContextService.asRelativePath(
													l.URI.revive(Fn.uri),
												) === We?.relativeWorkspacePath,
										) || (We = void 0);
										const Nn = new Map();
										Hi.forEach((Fn, Gn) => {
											Fn.type === d.ConversationMessage_MessageType.HUMAN &&
												((Fn.attachedCodeChunks = Fn.attachedCodeChunks.filter(
													(Dn) =>
														Dn.startLineNumber !== 1 ||
														Dn.relativeWorkspacePath !==
															We?.relativeWorkspacePath,
												)),
												Fn.attachedCodeChunks.forEach((Dn) => {
													if (Dn.startLineNumber === 1)
														if (!Nn.has(Dn.relativeWorkspacePath))
															Nn.set(Dn.relativeWorkspacePath, {
																firstMentionIndex: Gn,
																lastMentionIndex: Gn,
															});
														else {
															const jn = Nn.get(Dn.relativeWorkspacePath);
															jn &&
																jn.lastMentionIndex < Gn &&
																(jn.lastMentionIndex = Gn);
														}
												}));
										}),
											Hi.forEach((Fn, Gn) => {
												Fn.type === d.ConversationMessage_MessageType.HUMAN &&
													Fn.attachedCodeChunks.forEach((Dn) => {
														if (Dn.startLineNumber !== 1) return;
														const jn = Nn.get(Dn.relativeWorkspacePath);
														if (
															jn !== void 0 &&
															Gn === jn.firstMentionIndex &&
															jn.firstMentionIndex !== jn.lastMentionIndex
														) {
															const rs = Hi.at(
																jn.lastMentionIndex,
															)?.attachedCodeChunks;
															rs &&
																(Dn.lines =
																	rs.find(
																		(Js) =>
																			Dn.relativeWorkspacePath ===
																			Js.relativeWorkspacePath,
																	)?.lines ?? Dn.lines);
														}
													});
											}),
											Hi.forEach((Fn, Gn) => {
												Fn.type === d.ConversationMessage_MessageType.HUMAN &&
													(Fn.attachedCodeChunks = Fn.attachedCodeChunks.filter(
														(Dn) => {
															if (
																Dn.startLineNumber !== 1 ||
																Dn.intent ===
																	d.ConversationMessage_CodeChunk_Intent
																		.MENTIONED_FILE ||
																(Dn.intent ===
																	d.ConversationMessage_CodeChunk_Intent
																		.COMPOSER_FILE &&
																	Hi.slice(0, Gn)
																		.reverse()
																		.find(
																			(ts) =>
																				ts.type ===
																				d.ConversationMessage_MessageType.HUMAN,
																		)
																		?.attachedCodeChunks.some(
																			(ts) =>
																				ts.relativeWorkspacePath ===
																					ts.relativeWorkspacePath &&
																				(ts.intent ===
																					d.ConversationMessage_CodeChunk_Intent
																						.MENTIONED_FILE ||
																					ts.intent ===
																						d
																							.ConversationMessage_CodeChunk_Intent
																							.COMPOSER_FILE),
																		) === void 0)
															)
																return !0;
															const jn = Nn.get(Dn.relativeWorkspacePath);
															return !(
																jn !== void 0 && Gn !== jn.firstMentionIndex
															);
														},
													));
											});
									}
									const Ji = {
										conversation: Hi,
										fullConversationHeadersOnly: fi.map((Nn) => ({
											bubbleId: Nn.bubbleId,
											type: Nn.type,
											serverBubbleId: Nn.serverBubbleId,
										})),
										conversationSummary: gi,
										allowLongFileScan: !0,
										explicitContext: await this.aiService.getExplicitContext(),
										documentationIdentifiers: (Jt.selectedDocs ?? []).map(
											(Nn) => Nn.docId,
										),
										quotes: Jt.quotes ?? [],
										canHandleFilenamesAfterLanguageIds: !0,
										modelDetails: wt,
										multiFileLinterErrors: [],
										useWeb: Jt.useWeb ? "full_search" : void 0,
										externalLinks: Jt.externalLinks ?? [],
										diffsForCompressingFiles: [],
										compressEdits: !0,
										shouldCache:
											this.reactiveStorageService
												.applicationUserPersistentStorage.cacheComposerPrompts,
										currentFile: We,
										fileDiffHistories: [],
										useNewCompressionScheme: !0,
										additionalRankedContext: [],
										isChat: Lt === "chat",
										conversationId: xt.composerId,
										repositoryInfo: Si,
										repositoryInfoShouldQueryStaging: this.cursorCredsService
											.getRepoBackendUrl()
											.includes("dev-staging.cursor.sh"),
										environmentInfo: Et,
										isAgentic: Vt,
										linterErrors:
											Lt === "chat" && Jt.useLinterErrors
												? await (0, qe.$0fc)(
														this.markerService,
														this.workspaceContextService,
														this.aiService,
													)
												: void 0,
										supportedTools:
											this.toolsV2HandlerRegistryService.getAvailableTools(),
										enableYoloMode:
											this.reactiveStorageService
												.applicationUserPersistentStorage.composerState
												.useYoloMode ?? !1,
										yoloPrompt:
											this.reactiveStorageService
												.applicationUserPersistentStorage.composerState
												.yoloPrompt ?? "",
									};
									if (
										!this.shouldSkipCapabilities(
											Xe?.capabilityProcessesToSkip,
											"mutate-request",
										)
									)
										try {
											await this.composerUtilsService.runCapabilitiesForProcess(
												Ye,
												"mutate-request",
												{
													composerId: Ye,
													humanBubbleId: ii.bubbleId,
													isCapabilityIteration: Xe?.isCapabilityIteration,
													contextUsed: Jt,
												},
												{ request: Ji },
											);
										} catch (Nn) {
											console.error(
												"[composer] error running capabilities for mutate-request",
												Nn,
											),
												this.handleAbortChat(Ye, ii.bubbleId);
											return;
										}
									if (
										((Dt.capabilitiesRan =
											this.composerDataService.getComposerBubble(
												Ye,
												ii.bubbleId,
											)?.capabilitiesRan),
										Gt.signal.aborted)
									)
										return;
									const cn = await this.chatClient.get(),
										un = new d.$AA(Ji);
									let yn;
									const Rn =
										await this.composerUtilsService.getShouldChatUseTools();
									if (Lt === "chat" && (!Vt || !Rn))
										Jt.usesCodebase
											? (yn = at.streamChatContext(Ji, {
													signal: Gt.signal,
													headers: (0, xe.$m6b)(mi),
												}))
											: (yn = at.streamChat(Ji, {
													signal: Gt.signal,
													headers: (0, xe.$m6b)(mi),
												}));
									else if (Vt) {
										const Nn = new c.$Kpb(6e5);
										Nn.push(
											new d.$hA({
												request: {
													case: "streamUnifiedChatRequest",
													value: Ji,
												},
											}),
										);
										const Fn = cn.streamUnifiedChatWithTools(Nn, {
											signal: Gt.signal,
											headers: (0, xe.$m6b)(mi),
										});
										yn = this.toolV2Service.toolWrappedStream(Nn, Fn, Gt, {
											composerId: Ye,
										});
									} else
										Jt.usesCodebase
											? (yn = at.streamComposerContext(Ji, {
													signal: Gt.signal,
													headers: (0, xe.$m6b)(mi),
												}))
											: (yn = cn.streamUnifiedChat(un, {
													signal: Gt.signal,
													headers: (0, xe.$m6b)(mi),
												}));
									this.updateComposer(Ye, {
										conversation: [...xt.conversation, Dt],
										generatingBubbleIds: [
											...(xt.generatingBubbleIds ?? []),
											Dt.bubbleId,
										],
										status: "generating",
									});
									let _i = (0, ve.$Mfc)(yn);
									const Bn = this.composerUtilsService.handleStreamComposer({
										streamer:
											this.composerUtilsService.intermediateChunkMiddleware(
												_i,
												Ye,
												Dt.bubbleId,
											),
										abortController: Gt,
										generationUUID: mi,
										composerId: Ye,
										startTime: It,
									});
									this._onDidSendRequest.fire(),
										(async () => {
											await this.aiFeatureStatusService
												.maybeRefreshFeatureStatus("keepComposerCacheWarm")
												.catch(() => {}),
												this.aiFeatureStatusService.getCachedFeatureStatus(
													"keepComposerCacheWarm",
												) &&
													(await this.debouncedMaybeKeepComposerCacheWarm(
														Ye,
														mi,
														new E.$iH(Ji),
													));
										})().catch((Nn) => {});
									const Mn = this.aiService.streamResponse({
											modelDetails: wt,
											generationUUID: mi,
											streamer: Bn,
											streamerURL:
												w.$q0.typeName +
												"/" +
												w.$q0.methods.streamComposer.name,
											source: "composer",
											rethrowCancellation: !0,
											failSilently: !1,
										}),
										zn =
											await this.composerUtilsService.runCapabilitiesForProcess(
												Ye,
												"process-stream",
												{
													composerId: Ye,
													humanBubbleId: ii.bubbleId,
													aiBubbleId: Dt.bubbleId,
													stream: Mn,
													generationUUID: mi,
													startTime: It,
													submitChatProps: { text: ze, extra: Xe },
												},
											),
										$n =
											this.reactiveStorageService
												.applicationUserPersistentStorage.composerState
												.selectedFakeStreamerId,
										Ln = $n
											? gt.allComposerFakeStreamers.find((Nn) => Nn.id === $n)
											: void 0,
										wn = Ln ? (0, ht.createComposerFakeStreamer)(Ln)() : zn,
										Hn = this.processCodeBlocks(Ye, wn, {
											skipRegisteringCodeBlocks: Xe?.skipRegisteringCodeBlocks,
											skipOnSettled: this.shouldSkipCapabilities(
												Xe?.capabilityProcessesToSkip,
												"composer-settled",
											),
											isCapabilityIteration: Xe?.isCapabilityIteration,
											isChatMode: Lt === "chat",
											passTimingInfo: !0,
										});
									let Yn,
										Es = Dt.text;
									for await (const Nn of Hn) {
										const Fn = this.composerDataService.getLastAiBubbleId(Ye);
										if (!Fn) throw new Error("[composer] No ai bubble id");
										if (
											(Yn !== Fn &&
												((Yn = Fn),
												(Es =
													this.composerDataService.getComposerBubble(Ye, Fn)
														?.text ?? "")),
											(ei = !0),
											Nn.timingInfo)
										) {
											Dt.timingInfo &&
												this.composerDataService.updateComposerDataSetStore(
													Ye,
													(Dn) => {
														Dn(
															"conversation",
															(jn) => jn.bubbleId === Fn,
															"timingInfo",
															(jn) => {
																const rs = Nn.timingInfo;
																if (!(!rs || !jn))
																	return {
																		...jn,
																		serverStartTime: rs.serverStartTime,
																		serverFirstTokenTime:
																			rs.serverFirstTokenTime,
																		serverRequestSentTime:
																			rs.serverRequestSentTime,
																		serverEndTime: rs.serverEndTime,
																	};
															},
														);
													},
												);
											continue;
										}
										if (
											this.reactiveStorageService.nonPersistentStorage
												.composerState.shouldSimulateServerError
										)
											throw (
												(console.log("[composer] Simulating server error"),
												new t.ConnectError("Simulated server error"))
											);
										if (
											this.reactiveStorageService.nonPersistentStorage
												.composerState.shouldSimulateTimeoutServerErrorOnce
										) {
											console.log("[composer] Simulating timeout server error");
											const Dn = new t.ConnectError(
												"Simulated timeout server error",
												t.Code.DeadlineExceeded,
												void 0,
												[new a.$at({ error: a.ErrorDetails_Error.TIMEOUT })],
											);
											throw (
												(this.reactiveStorageService.setNonPersistentStorage(
													"composerState",
													"shouldSimulateTimeoutServerErrorOnce",
													!1,
												),
												Dn)
											);
										}
										const { text: Gn } = Nn;
										if (!Gn) {
											Nn.isBigFile &&
												this.updateComposer(Ye, { isReadingLongFile: !0 });
											continue;
										}
										xt?.isReadingLongFile &&
											this.updateComposer(Ye, { isReadingLongFile: !1 }),
											(Es += Gn),
											(Yt += Gn),
											this.composerDataService.updateComposerDataSetStore(
												Ye,
												(Dn) =>
													Dn(
														"conversation",
														(jn) => jn.bubbleId === Fn,
														"text",
														Es,
													),
											);
									}
									(Ut = !0), (this._recentlyResumed = !1);
								} catch (fi) {
									if (
										(console.error("[composer] Error in AI response:", fi),
										fi instanceof t.ConnectError && !this._recentlyResumed)
									) {
										const Ti = (0, Ke.$X6b)(fi);
										if (Ti && Ti.error === a.ErrorDetails_Error.TIMEOUT) {
											si();
											return;
										}
									}
									(this._recentlyResumed = !1),
										(Mt = !0),
										this.composerDataService.setGeneratingCodeBlocksToAborted(
											Ye,
										),
										this.composerDataService.setGeneratingCapabilitiesToAborted(
											Ye,
										),
										this.composerDataService.setGeneratingCapabilityCodeBlocksToAborted(
											Ye,
										),
										ci(fi),
										ii && this.handleAbortChat(Ye, ii.bubbleId);
								}
						})();
					} catch (ri) {
						(Mt = !0),
							console.error(
								"[composer] submitChatMaybeAbortCurrent errored!",
								ri,
							);
					} finally {
						const ri = Gt.signal.aborted || xt?.status === "aborted";
						!ei && !ri && ci(new t.ConnectError("No response from model")),
							mi && this.abortGenerationUUID(mi);
						let $i;
						const Wt = [];
						if (Dt) {
							const at = xt.conversation.findIndex(
								(pi) => pi.bubbleId === Dt.bubbleId,
							);
							for (let pi = at; pi < xt.conversation.length; pi++) {
								const Li = xt.conversation[pi];
								if (Li.type === d.ConversationMessage_MessageType.AI)
									Wt.push(Li.bubbleId), ($i = Li.bubbleId);
								else break;
							}
						}
						const tt =
							xt.chatGenerationUUID !== void 0 &&
							this.isActiveGeneration(xt.chatGenerationUUID);
						if (
							(this.updateComposer(Ye, {
								generatingBubbleIds:
									xt?.generatingBubbleIds?.filter((at) => !Wt.includes(at)) ??
									[],
								chatGenerationUUID: tt ? xt.chatGenerationUUID : void 0,
							}),
							!Ut || !ei || Mt || xt?.status === "aborted"
								? (console.error(
										"[composer] Failed to get complete AI response",
									),
									xt?.conversation.length
										? this.updateComposer(Ye, { status: "aborted" })
										: this.updateComposer(Ye, { status: "none" }))
								: this.updateComposer(Ye, { status: "completed" }),
							!this.shouldSkipCapabilities(
								Xe?.capabilityProcessesToSkip,
								"after-submit-chat",
							) &&
								xt.status !== "aborted" &&
								$i &&
								ii)
						)
							try {
								await this.composerUtilsService.runCapabilitiesForProcess(
									Ye,
									"after-submit-chat",
									{
										composerId: Ye,
										humanBubbleId: ii.bubbleId,
										aiBubbleId: $i,
										isCapabilityIteration: Xe?.isCapabilityIteration,
									},
								);
							} catch (at) {
								console.error(
									"[composer] error running capabilities for after-submit-chat",
									at,
								),
									this.updateComposer(Ye, { status: "aborted" });
							}
						if (
							(Xe?.onFinish?.(),
							this.reactiveStorageService.applicationUserPersistentStorage
								.checklistState?.doneCommandL !== !0)
						) {
							const at =
								this.reactiveStorageService.applicationUserPersistentStorage
									.checklistState;
							this.reactiveStorageService.setApplicationUserPersistentStorage(
								"checklistState",
								(pi) => ({ ...(pi ?? {}), doneCommandL: !0 }),
							);
						}
						if (
							this.reactiveStorageService.applicationUserPersistentStorage
								.checklistState?.doneAddingCodeSelection !== !0 &&
							(Jt.fileSelections.length > 0 || Jt.selections.length > 0)
						) {
							const at =
								this.reactiveStorageService.applicationUserPersistentStorage
									.checklistState;
							this.reactiveStorageService.setApplicationUserPersistentStorage(
								"checklistState",
								(pi) => ({ ...(pi ?? {}), doneAddingCodeSelection: !0 }),
							);
						}
						this.shouldSkipCapabilities(
							Xe?.capabilityProcessesToSkip,
							"composer-settled",
						) || this.maybeRunOnComposerSettled(Ye),
							await this.renameComposer(Ye),
							Dt &&
								Dt.timingInfo &&
								this.composerDataService.updateComposerDataSetStore(Ye, (at) =>
									at(
										"conversation",
										(pi) => pi.bubbleId === Dt.bubbleId,
										"timingInfo",
										(pi) => {
											if (pi)
												return {
													...pi,
													clientSettleTime: Date.now(),
													clientEndTime: Date.now(),
												};
										},
									),
								);
					}
				}
				async warmFastApply(Ye, ze) {
					const Xe = this.getComposer(Ye),
						It = this.composerDataService.getComposerForceMode(Ye);
					if (!Xe) {
						console.error("[composer] No composer found for warmFastApply");
						return;
					}
					if (
						!this.composerDataService.getComposerCodeBlock(
							Ye,
							ze.uri,
							ze.version,
						)
					) {
						console.error(
							"[composer] No reactive code block found for warmFastApply",
						);
						return;
					}
					if (!this.composerDataService.getLastHumanBubble(Ye)) {
						console.error(
							"[composer] No last user message found for warmFastApply",
						);
						return;
					}
					if (!(await this.fileService.exists(ze.uri))) return;
					let Vt;
					It === "chat"
						? (Vt = r.FastApplySource.CACHED_APPLY)
						: (Vt = (await this.composerUtilsService.isAgenticComposer(Ye))
								? r.FastApplySource.COMPOSER_AGENT
								: r.FastApplySource.COMPOSER);
					try {
						await this.fastEditService.warmFastApply({
							uri: ze.uri,
							conversationHistory:
								this.composerUtilsService.processConversationForFastEdit(
									Ye,
									Xe.conversation,
									ze,
								),
							generationUUID: (0, y.$9g)(),
							source: Vt,
						});
					} catch (Bt) {
						console.error("[composer] Error in warmFastApply:", Bt);
					}
				}
				handleAbortChat(Ye, ze) {
					const Xe = this.getComposer(Ye);
					if (!Xe || this._skipHandleAbortChat.has(Ye)) return;
					const It = this.composerDataService.getComposerBubble(Ye, ze),
						Lt = Xe.conversation.findIndex((Gt) => Gt.bubbleId === ze);
					if (!It || ze !== this.composerDataService.getLastHumanBubbleId(Ye))
						return;
					const xt = Xe.conversation
						.slice(Lt + 1)
						.filter((Gt) => Gt.type === d.ConversationMessage_MessageType.AI)
						.map((Gt) =>
							this.composerDataService.getComposerBubble(Ye, Gt.bubbleId),
						)
						.filter(s.$tg);
					if (
						xt.some((Gt) =>
							(Gt.codeBlocks ?? [])
								.map((Ut) =>
									this.composerDataService.getComposerCodeBlock(
										Ye,
										Ut.uri,
										Ut.version,
									),
								)
								.filter(s.$tg)
								.some(
									(Ut) => Ut.status !== "generating" && Ut.status !== "aborted",
								),
						)
					)
						return;
					if (
						xt.every((Gt) => Gt.text.length === 0 && Gt.errorDetails === void 0)
					) {
						this.composerDataService.updateComposerDataSetStore(Ye, (ei) =>
							ei("conversation", (mi) => mi.slice(0, Lt)),
						);
						const Gt = (0, ke.$6gc)(It.context || (0, Se.$2gc)()),
							Mt = It.text,
							Ut = It.richText;
						this.updateComposer(Ye, { text: Mt, richText: Ut, context: Gt }),
							this._onShouldForceText.fire({ composerId: Ye }),
							this.composerViewsService.focus(Ye, !0);
					} else
						Xe.text.length === 0 &&
							!It.isCapabilityIteration &&
							this.composerDataService.getLastHumanBubbleId(Ye) === ze &&
							!xt.some((Gt) => Gt.capabilityType !== void 0) &&
							(this.updateComposer(Ye, { editingBubbleId: ze }),
							this.composerViewsService.focusPrevBubble(Ye));
				}
				async runFastApplyOnCodeBlock(Ye, ze, Xe) {
					const It = this.composerDataService.getCodeBlockStatus(
						Ye,
						ze.uri,
						ze.version,
					);
					if (
						(this.composerDataService.setCodeBlockStatus(
							Ye,
							ze.uri,
							ze.version,
							"apply_pending",
						),
						Xe?.shouldAutoApply === !1)
					)
						return this._fastApplyQueue.queue(() =>
							this.runFastApplyOnCodeBlockInternal(Ye, ze, {
								...Xe,
								cameFromGenerating:
									It === "generating" || Xe?.cameFromGenerating,
								isReapply: Xe?.isReapply,
							}),
						);
					const Lt = ze.uri.toString(),
						xt = this.getComposerEditingState(Ye);
					xt.fastApplyQueue[Lt] || (xt.fastApplyQueue[Lt] = new h.$Sh(1));
					const Vt = xt.fastApplyQueue[Lt].queue(() =>
						this._fastApplyQueue.queue(() =>
							this.runFastApplyOnCodeBlockInternal(Ye, ze, {
								...Xe,
								cameFromGenerating:
									It === "generating" || Xe?.cameFromGenerating,
								isReapply: Xe?.isReapply,
							}),
						),
					);
					return (
						(xt.fastApplyRunningMap[Lt] = !0),
						xt.fastApplyQueue[Lt].whenIdle().then(() => {
							(xt.fastApplyRunningMap[Lt] = !1), delete xt.fastApplyQueue[Lt];
						}),
						Vt
					);
				}
				async runFastApplyOnCodeBlockInternal(Ye, ze, Xe) {
					Xe = { shouldAutoApply: !0, ...Xe };
					let It = this.getComposer(Ye);
					if (!It) {
						console.log("[composer] no state");
						return;
					}
					let Lt = ze.uri;
					if (
						(Lt ||
							(It &&
								It.context.fileSelections.length === 1 &&
								(Lt = l.URI.revive(It.context.fileSelections[0].uri))),
						!Lt)
					) {
						console.log("[composer] no path found for codeblock");
						return;
					}
					const xt = this.composerDataService.getComposerForceMode(Ye);
					let Vt = It.codeBlockData?.[Lt.toString()]?.find((Dt) => Dt.isCached);
					for (; Vt; )
						this.unregisterCachedCodeBlock(Ye, Lt, Vt.version),
							(Vt = It.codeBlockData?.[Lt.toString()]?.find(
								(Dt) => Dt.isCached,
							));
					const Bt = ze.version,
						Gt = Lt.toString();
					console.log("[composer] running fast apply on", Gt, Bt),
						this.composerDataService.setCodeBlockStatus(Ye, Lt, Bt, "applying");
					const Mt = (0, y.$9g)(),
						ei = !(await this.fileService.exists(Lt));
					let mi = [];
					if (ei && Xe?.shouldAutoApply)
						mi = await this.checkToCreateNewFile(Ye, Lt, !0);
					else if (ei && !Xe?.shouldAutoApply) return;
					this._shouldOpenNextAppliedFile &&
						(this.openerService.open(Lt, {
							openToSide: !1,
							editorOptions: {
								revealIfVisible: !0,
								revealIfOpened: !0,
								source: B.EditorOpenSource.USER,
								preserveFocus: !0,
							},
							fromUserGesture: !0,
						}),
						(this._shouldOpenNextAppliedFile = !1));
					let ii = !1;
					try {
						if (xt === "edit") {
							const pi = this.composerDataService.getLastBubbleWhere(
									Ye,
									(Di) => !!Di.checkpoint,
								),
								Li = pi?.checkpoint;
							if (
								pi &&
								Xe?.cameFromGenerating &&
								!Li?.files.some((Ui) => Ui.uri.toString() === ze.uri.toString())
							) {
								const Wi = (
										await this.composerDataService.getMaybeCachedModelReference(
											Ye,
											ze.uri,
										)
									).object.textEditorModel.getLinesContent(),
									Gi = await this.composerUtilsService.computeLineDiffs(
										Ye,
										ze.uri,
										Wi,
									),
									qi = [
										"conversation",
										(Oi) => Oi.bubbleId === pi.bubbleId,
										"checkpoint",
									];
								Li === void 0 &&
									!this.isChat(Ye) &&
									this.composerDataService.updateComposerDataSetStore(
										Ye,
										(Oi) => Oi(...qi, (0, Q.createEmptyCheckpoint)()),
									),
									this.composerDataService.updateComposerDataSetStore(
										Ye,
										(Oi) =>
											Oi(
												...qi,
												(0, i.produce)((yi) => {
													yi &&
														(yi.files.push({
															uri: ze.uri,
															originalModelDiffWrtV0: Gi,
															isNewlyCreated: ei,
														}),
														yi.newlyCreatedFolders.push(...mi));
												}),
											),
									);
							}
						}
						const Dt = ze.content;
						let Jt,
							si = new Promise((pi) => {
								Jt = pi;
							}),
							Zt,
							ci = 0,
							ri = !1;
						const Wt =
								(this.composerDataService.getInlineDiff(Ye, Lt, Bt) !==
									void 0 &&
									!ze.isChained) ||
								Xe?.shouldAutoApply === !1,
							tt = async ({
								newModelLines: pi,
								originalModelLines: Li,
								isChained: Di,
							}) => {
								if ((console.log("[composer] apply done"), xt === "edit")) {
									const [Ui, Wi] = await Promise.all([
											this.composerUtilsService.computeLineDiffs(Ye, Lt, pi),
											this.composerUtilsService.computeLineDiffs(Ye, Lt, Li),
										]),
										Gi = [
											{ key: "isChained", value: Di ?? !1 },
											{ key: "newModelDiffWrtV0", value: Ui ?? [] },
											{ key: "originalModelDiffWrtV0", value: Wi ?? [] },
										];
									for (const qi of Gi)
										this.composerDataService.updateComposerDataSetStore(
											Ye,
											(Oi) =>
												Oi(
													"codeBlockData",
													Lt.toString(),
													Bt,
													qi.key,
													qi.value,
												),
										);
								}
								(ri = !0), (ii = !1), Jt();
							},
							at = () => {
								(ri = !0), (ii = !0), Jt();
							};
						for (; ci < lt.COMPOSER_STREAM_RETRY_MAX_ATTEMPTS && !ri; ) {
							if (
								(ci++,
								this.isChat(Ye) &&
									!this.applicationComposerSettings.unification)
							) {
								ri = !0;
								const Li = this.getComposer(Ye);
								if (!Li) {
									console.log("[composer] no state");
									return;
								}
								const Di = Xe?.overrideUri ?? ze.uri;
								let Ui = !0;
								if (Xe?.shouldAutoApply === !1) {
									this.aiApplyToFileActionsService.cacheCodeBlockApplyComposer({
										uri: Di,
										codeblock: ze.content,
										source: r.FastApplySource.CACHED_APPLY,
										parentRequestId:
											Li?.latestChatGenerationUUID ?? Li?.chatGenerationUUID,
										conversationHistory:
											this.composerUtilsService.processConversationForFastEdit(
												Ye,
												Li.conversation,
												ze,
											),
										onApplyDone: tt,
										onApplyFailed: at,
									});
									return;
								} else
									Xe?.range === void 0 &&
										Xe?.isReapply !== !0 &&
										(await this.aiApplyToFileActionsService.maybeApplyCachedEntry(
											{
												uri: Di,
												codeblockContent: ze.content,
												menuString: je.$S0b,
												range: "fullfile",
												composerMetadata: { composerId: Ye, version: Bt },
											},
										)) === "didApply" &&
										((Ui = !1), (si = Promise.resolve()));
								Ui &&
									(await this.aiApplyToFileActionsService.applyComposerMaybeWithExistingStreamer(
										{
											uri: Di,
											codeblock: ze.content,
											source: r.FastApplySource.CLICKED_APPLY,
											parentRequestId:
												Li?.latestChatGenerationUUID ?? Li?.chatGenerationUUID,
											conversationHistory:
												this.composerUtilsService.processConversationForFastEdit(
													Ye,
													Li.conversation,
													ze,
												),
											isReapply: Xe?.isReapply ?? !1,
											range: Xe?.range,
											onApplyDone: tt,
											onApplyFailed: at,
											composerMetadata: { composerId: Ye, version: Bt },
										},
									));
							} else {
								const Li = (await this.composerUtilsService.isAgenticComposer(
									Ye,
								))
									? r.FastApplySource.COMPOSER_AGENT
									: r.FastApplySource.COMPOSER;
								Zt = await this.fastEditService.performAndYieldChatEdit({
									skipAddToPromptHistory: !0,
									composerMetadata: { composerId: Ye, version: Bt },
									conversationHistory:
										this.composerUtilsService.processConversationForFastEdit(
											Ye,
											It.conversation,
											ze,
										),
									source: Li,
									generationUUID: Mt,
									parentRequestId:
										It?.latestChatGenerationUUID ?? It?.chatGenerationUUID,
									clickedCodeBlockContents: Dt,
									options: {
										overrideCurrentFileURI: Xe?.overrideUri ?? Lt,
										overrideLineRange: Xe?.range,
										rejectChangesInURI:
											Xe?.shouldAutoApply === !1 ? !1 : void 0,
										rerun: () => {
											this.reapply(Ye, Lt, Bt);
										},
									},
									shouldChainPrevious: !Wt,
									linesDiffComputerOptions: hi,
									inlineDiffServiceLookalikePure:
										this.getInlineDiffServiceLookalikePure(Ye, Lt, Bt),
									onApplyDone: tt,
									onApplyFailed: at,
									isReapply: Xe?.isReapply,
								});
							}
							this.composerDataService.updateComposerCodeBlock(
								Ye,
								ze.uri,
								ze.version,
								{ applyGenerationUUID: Mt, latestApplyGenerationUUID: Mt },
							);
							let pi = !1;
							if (Zt) {
								let Li = ct.noop;
								const Di = new Promise((Gi) => {
									Li = () => Gi(void 0);
								});
								let Ui;
								Ui = setTimeout(() => {
									Li(), (pi = !0);
								}, lt.COMPOSER_STREAM_CHUNK_TIMEOUT_MS);
								const Wi = new Promise((Gi) => {
									(async () => {
										if (!Zt) {
											Gi(void 0);
											return;
										}
										try {
											for await (const qi of Zt)
												clearTimeout(Ui),
													(Ui = setTimeout(() => {
														Li(), (pi = !0);
													}, lt.COMPOSER_STREAM_CHUNK_TIMEOUT_MS));
										} catch (qi) {
											console.error("[balta] error in stream", qi);
										} finally {
											Gi(void 0);
										}
									})();
								});
								await Promise.race([Wi, Di]),
									ci === 0 &&
										pi &&
										this.reactiveStorageService.nonPersistentStorage
											.composerState.shouldSimulateApplyHanging &&
										this.reactiveStorageService.setNonPersistentStorage(
											"composerState",
											"shouldSimulateApplyHanging",
											!1,
										);
							}
							pi ? this.abortGenerationUUID(Mt) : await si;
						}
						this.composerDataService.getCodeBlockStatus(Ye, Lt, Bt) !==
							"outdated" &&
							this.composerDataService.setCodeBlockStatus(
								Ye,
								Lt,
								Bt,
								"completed",
							),
							this.shouldCache(Ye, { uri: Lt, version: Bt }) ||
								this._onDidAiEditFile.fire({ path: Lt, version: Bt });
					} catch (Dt) {
						(ii = !0),
							console.error("[composer] error in runFastApplyOnCodeBlock", Dt);
					} finally {
						ii &&
							(this.composerDataService.setCodeBlockStatus(
								Ye,
								Lt,
								Bt,
								"cancelled",
							),
							(Xe.skipOnSettled = !0)),
							this.composerDataService.updateComposerDataSetStore(Ye, (ri) =>
								ri(
									"codeBlockData",
									Lt.toString(),
									Bt,
									"intermediateModelLines",
									[],
								),
							);
						const Dt = this.composerDataService.getInlineDiff(Ye, Lt, Bt),
							Jt = Dt && Dt.changes.length === 0;
						Jt && this.inlineDiffService.remove(Dt.id),
							this.composerDataService.updateComposerCodeBlock(
								Ye,
								ze.uri,
								ze.version,
								{ applyGenerationUUID: void 0, isNoOp: Jt },
							),
							await this.runAfterApply(Ye, Mt);
						const si = await this.textModelService.createModelReference(Lt),
							Zt = si.object.textEditorModel.getValue(),
							ci = this.workspaceContextService.asRelativePath(
								si.object.textEditorModel.uri,
							);
						await this.everythingProviderService.onlyLocalProvider?.runCommand(
							V.ComposerEditHistoryActions.ResetModel,
							{ relativePath: ci, currentModelValue: Zt, modelVersion: Bt },
						),
							si.dispose(),
							Xe?.cameFromGenerating &&
								!Xe?.skipOnSettled &&
								this.maybeRunOnComposerSettled(Ye),
							this._onDidFinishApplyingCodeBlock.fire({
								composerId: Ye,
								uri: Lt,
								version: Bt,
							}),
							console.log("[composer] fast apply done", Ye, Gt, Bt);
					}
				}
				async runAfterApply(Ye, ze) {
					const Xe = this.composerDataService.getLastHumanBubbleId(Ye),
						It = Xe
							? this.composerDataService.getComposerBubble(Ye, Xe)
							: void 0,
						Lt = this.composerDataService.getLastBubbleId(Ye),
						xt = this.composerDataService.getLastBubble(Ye);
					if (!Xe || !It) {
						console.error(
							"[composer] after apply was run without a previous human bubble",
						);
						return;
					}
					if (!Lt || !xt || xt.type !== d.ConversationMessage_MessageType.AI) {
						console.error(
							"[composer] after apply was run without a previous ai bubble",
						);
						return;
					}
					await this.composerUtilsService.runCapabilitiesForProcess(
						Ye,
						"after-apply",
						{ composerId: Ye, humanBubbleId: Xe, aiBubbleId: Lt },
					);
				}
				async fixLinterErrorWithAI({
					errorMessage: Ye,
					editorUri: ze,
					range: Xe,
					addToCurrent: It = !1,
					forceMode: Lt,
				}) {
					const xt = this.composerDataService.getSelectedIdByForceMode(Lt),
						Vt = this._codeEditorService.getActiveCodeEditor();
					if ((this.openComposer(xt), !Vt?.hasModel())) return;
					const Bt = Vt.getModel();
					if (!Bt) return;
					const Gt = Vt.getPosition();
					(!Gt || !Xe.containsPosition(Gt)) &&
						Vt.setPosition(Xe.getStartPosition());
					const Mt = Math.max(1, Xe.startLineNumber - 1),
						Ut = Math.min(Bt.getLineCount(), Xe.endLineNumber + 2),
						ei = new T.$iL(Mt, 1, Ut, Bt.getLineMaxColumn(Ut)),
						mi = `For the code present, we get this error:
\`\`\`
${Ye}
\`\`\`
How can I resolve this? If you propose a fix, please make it concise.`;
					if (
						this.composerDataService.getLastHumanBubble(xt)?.text === mi &&
						this.getComposer(xt)?.status === "generating"
					)
						return;
					It || (await this.createComposer({ forceMode: Lt }));
					const ii = this.composerDataService.getSelectedIdByForceMode(Lt);
					this.updateComposer(ii, { text: mi, richText: mi });
					const Dt = await this.getEditorCode(ei, Vt);
					Dt &&
						this.addContext({
							composerId: ii,
							contextType: "selections",
							value: Dt,
							shouldShowPreview: !1,
						}),
						this.addContext({
							composerId: ii,
							contextType: "fileSelections",
							value: { uri: l.URI.parse(ze) },
							shouldShowPreview: !1,
						}),
						this._onShouldForceText.fire({ composerId: ii }),
						await this.submitChatMaybeAbortCurrent(ii, mi, { mode: "edit" });
				}
				async fixBugReport(Ye, ze, Xe, It) {
					await this.createComposer({ forceMode: It });
					const Lt = new Set(),
						xt = new Set(),
						Vt = this.composerDataService.getSelectedIdByForceMode(It);
					for (const Mt of Ye.locations) {
						const Ut = this.workspaceContextService.resolveRelativePath(
							Mt.file,
						);
						if (!Ut) {
							console.error("[composer] no uri for", Mt.file);
							continue;
						}
						Lt.add(Ut), xt.add(Mt.file);
						const ei = ze[Mt.file];
						if (!ei) {
							console.error("[composer] no file contents for", Mt.file);
							continue;
						}
						const mi = (0, ne.$Ryc)(
							Mt,
							ei,
							this.workspaceContextService,
							this.languageService,
						);
						if (!mi) {
							console.error("[composer] no selection for", Mt);
							continue;
						}
						this.addContext({
							composerId: Vt,
							contextType: "selections",
							value: mi,
							shouldShowPreview: !1,
						}),
							this.addContext({
								composerId: Vt,
								contextType: "fileSelections",
								value: { uri: Ut },
								shouldShowPreview: !1,
							});
					}
					const Bt = `Fix this bug in ${Array.from(xt)
						.map((Mt) => `\`${Mt}\``)
						.join(", ")}:
\`\`\`
${Ye.description}
\`\`\``;
					this.updateComposer(Vt, { text: Bt });
					const Gt = await (0, ne.$Qyc)({
						report: Ye,
						fileSnapshots: ze,
						fileSnapshotsPreDiff: Xe,
						workspaceContextService: this.workspaceContextService,
						modelService: this.modelService,
						editorWorkerService: this.editorWorkerService,
					});
					Gt &&
						this.addContext({
							composerId: Vt,
							contextType: "selections",
							value: Gt,
							shouldShowPreview: !1,
						}),
						await this.submitChatMaybeAbortCurrent(Vt, Bt);
				}
				async turnCachedCodeBlockToDiff(Ye, ze, Xe) {
					const It = this.composerDataService.getComposerCodeBlock(Ye, ze, Xe);
					!It ||
						It.isCached !== !0 ||
						(this.unregisterCachedCodeBlock(Ye, ze, Xe),
						await this.turnApplyToInlineDiff(Ye, ze, Xe));
				}
				async turnAllCachedCodeBlocksToDiffs(Ye) {
					if (this._isTurningCachedCodeBlocksToDiffs) {
						console.log(
							"[composer] turnAllCachedCodeBlocksToDiffs is already running, skipping",
						);
						return;
					}
					this._isTurningCachedCodeBlocksToDiffs = !0;
					try {
						const ze = this.composerDataService.getComposerFromIdOrHandle(Ye);
						if (!ze) return;
						const Xe = this.composerDataService.getAllCachedCodeBlocks(
							ze.composerId,
						);
						for (const It of Xe)
							It.status !== "applying" &&
								(await this.turnCachedCodeBlockToDiff(
									ze.composerId,
									It.uri,
									It.version,
								));
					} finally {
						this._isTurningCachedCodeBlocksToDiffs = !1;
					}
				}
				async turnApplyToInlineDiff(Ye, ze, Xe, It) {
					const Lt = this.composerDataService.getComposerCodeBlock(Ye, ze, Xe);
					if (!Lt || !Lt.newModelDiffWrtV0) {
						console.error("[composer] no latest code block for uri", ze);
						return;
					}
					if (It?.shouldChain) {
						const si = new rt.$y7b(
							"Undo Chain Diff",
							"undo-chain-diff",
							void 0,
							ze,
							() => {},
							() => {},
						);
						this.inlineDiffService.pushUndoElement(si, {
							breakConsolidation: !0,
						});
						const Zt =
							this.reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
								(ci) => ci.uri.toString() === ze.toString(),
							);
						if (!Zt) {
							console.error(
								"[composer] cannot chain apply without prev inline diff",
								ze,
							);
							return;
						}
						this.inlineDiffService.cancelDiff(Zt.id),
							this.inlineDiffService.rejectDiff(Zt.id, {
								close: !0,
								rejectSilently: !0,
								dontBreakConsolidation: !0,
							});
					} else {
						const si =
							this.reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
								(Zt) => Zt.uri.toString() === ze.toString(),
							);
						si && this.inlineDiffService.remove(si.id);
					}
					console.log("[composer] turning cached to diff", ze, Lt.status),
						(await this.fileService.exists(ze)) ||
							(await this.checkToCreateNewFile(Ye, ze, !0));
					const Bt = (
						await this.composerDataService.getMaybeCachedModelReference(Ye, ze)
					).object;
					if (It?.setOriginalModelLines) {
						const si =
							await this.composerUtilsService.getCodeBlockOriginalModelLines(
								Ye,
								ze,
								Xe,
								{ shouldChain: !0 },
							);
						si &&
							Bt.textEditorModel.setValue(
								si.join(`
`),
							);
					}
					const Mt = {
							startLineNumber: 1,
							endLineNumberExclusive: Bt.textEditorModel.getLineCount() + 1,
						},
						Ut = Bt.textEditorModel
							.getLinesContent()
							.slice(Mt.startLineNumber - 1, Mt.endLineNumberExclusive - 1),
						ei = (0, y.$9g)(),
						mi = {
							uri: ze,
							generationUUID: ei,
							currentRange: Mt,
							originalTextLines: Ut,
							prompt: "hi2",
							isHidden: !1,
							attachedToPromptBar: !1,
							source: Ce.$a0b,
							createdAt: Date.now(),
							composerMetadata: { composerId: Ye, version: Xe },
						},
						Dt = (await this.inlineDiffService.addActiveDiff(mi)).id,
						Jt = this.composerUtilsService.getCodeBlockNewModelLines(
							Ye,
							ze,
							Xe,
						);
					if (!Jt) {
						console.error("[composer] no new model lines for", ze, Xe);
						return;
					}
					this.inlineDiffService.addLinesToDiff(Dt, Jt),
						this.inlineDiffService.finishDiffSuccess(Dt),
						this.composerDataService.updateComposerCodeBlock(Ye, ze, Xe, {
							lastDiffId: Dt,
						}),
						this.composerDataService.setCodeBlockStatus(
							Ye,
							ze,
							Lt.version,
							"completed",
						),
						this._onDidAiEditFile.fire({ path: ze, version: Lt.version });
				}
				async reactivateApplyingCodeBlocks(Ye) {
					const ze = this.composerDataService.getComposerFromIdOrHandle(Ye);
					if (!ze) return;
					const Xe = this.composerDataService.getCodeBlocksOfStatuses(
						Ye,
						"applying",
					);
					for (const It of Xe)
						It.isCached &&
							(this.composerDataService.doesFileHaveInlineDiff(
								ze.composerId,
								It.uri,
							) ||
								(await this.reactivateApplyingCodeBlock(Ye, It)));
				}
				async reactivateApplyingCodeBlock(Ye, ze) {
					if (!ze || ze.status !== "applying") {
						console.error("[composer] no latest code block for", ze);
						return;
					}
					console.log(
						"[composer] reactivating applying code block",
						ze.uri,
						ze.status,
					),
						this.unregisterCachedCodeBlock(Ye, ze.uri, ze.version);
					const Xe = ze.uri;
					(await this.fileService.exists(Xe)) ||
						(await this.checkToCreateNewFile(Ye, Xe, !0));
					const xt = (
							await this.composerDataService.getMaybeCachedModelReference(
								typeof Ye == "string" ? Ye : Ye.data.composerId,
								Xe,
							)
						).object,
						Vt = xt.textEditorModel.getValue(),
						Bt = xt.textEditorModel.getLineCount(),
						Gt = new I.$rL(1, Bt + 1),
						Mt = xt.textEditorModel
							.getLinesContent()
							.slice(Gt.startLineNumber - 1, Gt.endLineNumberExclusive - 1),
						Ut = (0, y.$9g)(),
						ei = {
							uri: Xe,
							generationUUID: Ut,
							currentRange: Gt,
							originalTextLines: Mt,
							prompt: "hi3",
							isHidden: !1,
							attachedToPromptBar: !1,
							source: Ce.$a0b,
							createdAt: Date.now(),
							composerMetadata: {
								composerId: typeof Ye == "string" ? Ye : Ye.data.composerId,
								version: ze.version,
							},
						},
						mi = this.getApplyingDiffsState(
							typeof Ye == "string" ? Ye : Ye.data.composerId,
						);
					mi.isReactivatingApplyingDiffs[Xe.toString()] = !0;
					try {
						const ii = ze.intermediateModelLines ?? [];
						let Dt = [];
						if (ii.length > 0) {
							const Zt = await this.editorWorkerService.computeLinesDiff(
								Mt,
								ii,
								{
									ignoreTrimWhitespace: !1,
									computeMoves: !1,
									maxComputationTimeMs: 500,
									...hi,
								},
							);
							let ci = Zt.changes;
							Zt.hitTimeout &&
								(ci = [new P.$CL(Gt, new I.$rL(1, ii.length + 1), void 0)]);
							const ri = ci.map(($i) => ({
								original: $i.original,
								modified: ii.slice(
									$i.modified.startLineNumber - 1,
									$i.modified.endLineNumberExclusive - 1,
								),
							}));
							Dt = this.fastEditService.applyDiffToLines(
								Vt.split(`
`),
								ri,
							);
						}
						if (
							!ze.isNotApplied &&
							(this.shouldCache(Ye, { uri: Xe, version: ze.version }) ||
								mi.isReactivatingApplyingDiffs[Xe.toString()] === !1)
						) {
							(mi.applyingDiffsBacklogLines[Xe.toString()] = []),
								(mi.isReactivatingApplyingDiffs[Xe.toString()] = !1);
							return;
						}
						const si = (await this.inlineDiffService.addActiveDiff(ei)).id;
						this.inlineDiffService.addLinesToDiff(si, Dt);
					} catch (ii) {
						console.error(
							"[composer] error in reactivateApplyingCodeBlock",
							ii,
						);
					} finally {
						mi.isReactivatingApplyingDiffs[Xe.toString()] = !1;
					}
				}
				async computeGlobalDiffTrajectories(Ye) {
					if (Ye || !this.applicationComposerSettings.useDiffHistory) return [];
					try {
						return await this.everythingProviderService.onlyLocalProvider?.runCommand(
							V.ComposerEditHistoryActions.CompileGlobalDiffTrajectories,
							{},
						);
					} catch (ze) {
						return (
							console.error(
								"[composer] error in computeGlobalDiffTrajectories",
								ze,
							),
							[]
						);
					}
				}
				async getEnvironmentInfo() {
					const Ye =
						await this.everythingProviderService.onlyLocalProvider?.runCommand(
							V.ExtHostInfoActions.GetExtHostInfo,
							null,
						);
					return {
						exthostPlatform: Ye?.platform,
						exthostArch: Ye?.arch,
						exthostRelease: Ye?.release,
						exthostShell: Ye?.shell,
						localTimestamp: new Date().toISOString(),
						workspaceUris: this.workspaceContextService
							.getWorkspace()
							.folders.map((ze) => ze.uri.toString()),
					};
				}
				setHorizontalBarSize(Ye) {
					this.updateWorkspacePersistentState({ horizontalBarSize: Ye });
				}
				setTabHeight(Ye) {
					this.updateWorkspacePersistentState({ tabHeight: Ye });
				}
				getHorizontalBarSize() {
					return (
						this.reactiveStorageService.workspaceUserPersistentStorage
							.composerState?.horizontalBarSize ?? 520
					);
				}
				getTabHeight() {
					return (
						this.reactiveStorageService.workspaceUserPersistentStorage
							.composerState?.tabHeight ?? 400
					);
				}
				isComposerEnabled() {
					return this.applicationComposerSettings.isComposerEnabled2;
				}
				setIsComposerEnabled(Ye) {
					this.reactiveStorageService.setApplicationUserPersistentStorage(
						"composerState",
						"isComposerEnabled2",
						Ye,
					);
				}
				async referenceOpenEditors(Ye) {
					const Xe = this.editorGroupsService
							.getGroups(Te.GroupsOrder.MOST_RECENTLY_ACTIVE)
							.map((Vt) =>
								Vt.editors
									.filter(
										(Bt) =>
											Bt.resource &&
											this.isCompatibleScheme(Bt.resource.scheme),
									)
									.map((Bt) => Bt.resource),
							)
							.flat(),
						It = Xe.filter(
							(Vt) =>
								Vt.scheme !== o.Schemas.notepad &&
								Vt.scheme !== o.Schemas.vscodeTerminal,
						),
						Lt = Xe.filter((Vt) => Vt.scheme === o.Schemas.vscodeTerminal),
						xt = Xe.filter((Vt) => Vt.scheme === o.Schemas.notepad);
					for (const Vt of It)
						this.addContext({
							composerId: Ye,
							contextType: "fileSelections",
							value: { uri: Vt },
						});
					for (const Vt of Lt)
						this.addContext({
							composerId: Ye,
							contextType: "terminalFiles",
							value: { uri: Vt },
						});
					for (const Vt of xt)
						this.addContext({
							composerId: Ye,
							contextType: "notepads",
							value: { notepadId: Vt.path },
						});
				}
				async shouldComposerAutoApply(Ye) {
					const ze = this.getComposer(Ye);
					return ze
						? this.applicationComposerSettings.unification
							? !!ze.isAgentic
							: this.composerDataService.getComposerForceMode(Ye) === "edit"
						: !1;
				}
				async shouldAutoApplyURI(Ye, ze) {
					return this.getComposer(Ye)
						? this.applicationComposerSettings.autoApplyFilesOutsideContext ||
							this.composerDataService
								.getAssociatedFileUris(Ye)
								.some((Lt) => Lt.toString() === ze.toString())
							? !0
							: !(await this.fileService.exists(ze))
						: !1;
				}
				isUsingAPIKeys(Ye) {
					const ze =
						this.reactiveStorageService.applicationUserPersistentStorage
							.aiSettings.composerModel ?? "claude-3.5-sonnet";
					return ze.toLowerCase().includes("gpt")
						? this.reactiveStorageService.applicationUserPersistentStorage
								.useOpenAIKey
						: ze.toLowerCase().includes("claude")
							? this.reactiveStorageService.applicationUserPersistentStorage
									.useClaudeKey
							: ze.toLowerCase().includes("gemini")
								? this.reactiveStorageService.applicationUserPersistentStorage
										.useGoogleKey
								: !0;
				}
				async *processCodeBlocks(Ye, ze, Xe) {
					let It = null,
						Lt = !1,
						xt = "",
						Vt,
						Bt,
						Gt = !1,
						Mt = null,
						Ut = Xe?.offsetCodeBlockIdx ?? 0,
						ei = 0;
					const mi = (si, Zt, ci, ri) => {
							const $i = this.composerDataService.getComposerBubble(Ye, Zt);
							if (!$i) throw new Error("[composer] Bubble not found");
							Mt.content += xt.slice(0, ri);
							const Wt = $i.capabilityCodeBlocks.length - 1;
							if (!this.composerDataService.getComposerData(Ye))
								throw new Error("[composer] Composer not found");
							this.composerDataService.updateComposerCapabilityCodeBlock(
								Ye,
								Zt,
								Wt,
								{ content: Mt.content },
							);
							const at = {
								composerId: Ye,
								humanBubbleId: ci,
								aiBubbleId: Zt,
								isCapabilityIteration: Xe?.isCapabilityIteration,
								capabilityCodeBlock: Mt,
							};
							this.composerUtilsService.runCapabilitiesForProcess(
								Ye,
								"process-codeblock",
								at,
							),
								Ut++,
								(Mt = null);
						},
						ii = async (si, Zt) => {
							const ci = xt.slice(0, Zt);
							if (
								si &&
								si.uri !== void 0 &&
								si.version !== void 0 &&
								!Xe?.skipRegisteringCodeBlocks
							)
								if (
									((It.content += ci),
									this.composerDataService.updateComposerCodeBlock(
										Ye,
										It.uri,
										It.version,
										{ content: It.content },
									),
									Xe?.runApplyOnCodeBlock)
								)
									await Xe.runApplyOnCodeBlock(Ye, {
										uri: It.uri,
										version: It.version,
										content: It.content,
										status: "none",
									});
								else {
									const $i = this.composerDataService.getComposerCodeBlock(
										Ye,
										It.uri,
										It.version,
									);
									(It.isNotApplied && $i?.status !== "generating") ||
										this.runFastApplyOnCodeBlock(
											Ye,
											{
												uri: It.uri,
												version: It.version,
												content: It.content,
												status: "generating",
											},
											{
												shouldAutoApply: !It.isNotApplied,
												skipOnSettled: Xe?.skipOnSettled,
												mode: Xe?.isChatMode ? "chat" : "edit",
											},
										);
								}
							Ut++, (It = null);
						};
					for await (const si of ze) {
						const Zt = this.composerDataService.getLastAiBubbleId(Ye),
							ci = this.composerDataService.getLastHumanBubbleId(Ye);
						if (!Zt || !ci)
							throw new Error("[composer] No ai or human bubble id");
						const { text: ri } = si;
						if (!ri) {
							Xe?.passTimingInfo && si.timingInfo !== void 0 && (yield si);
							continue;
						}
						for (xt += ri; xt.length > 0; )
							if (Lt) {
								const $i = Gt && Mt,
									Wt =
										It &&
										It.uri !== void 0 &&
										It.version !== void 0 &&
										!Xe?.skipRegisteringCodeBlocks;
								if (lt.ENABLED_BETTER_MARKDOWN_PARSING) {
									const Di = xt.match(
										new RegExp(`^(?:\\r?\\n)([\\t ]${Bt})\`{${Vt}}\\S+`),
									);
									if (Di) {
										ei++,
											$i
												? (Mt.content += xt.slice(0, Di.index + Di[0].length))
												: Wt &&
													((It.content += xt.slice(0, Di.index + Di[0].length)),
													this.composerDataService.updateComposerCodeBlock(
														Ye,
														It.uri,
														It.version,
														{ content: It.content },
													)),
											(xt = xt.slice(Di.index + Di[0].length));
										continue;
									}
								}
								const tt = new RegExp(
										`^(?:\\r?\\n)([\\t ]{${Bt}})\`{${Vt}}\\s*(?:\\r?\\n)`,
									),
									at = /^(?:\r?\n)[\t ]*`*\s*/,
									pi = new RegExp(`^(?:\\r?\\n)([\\t ]{${Bt}})\`{${Vt}}`),
									Li = xt.match(tt);
								if (Li) {
									if (lt.ENABLED_BETTER_MARKDOWN_PARSING && ei > 0) {
										ei--,
											$i
												? (Mt.content += xt.slice(0, Li.index + Li[0].length))
												: Wt &&
													((It.content += xt.slice(0, Li.index + Li[0].length)),
													this.composerDataService.updateComposerCodeBlock(
														Ye,
														It.uri,
														It.version,
														{ content: It.content },
													)),
											(xt = xt.slice(Li.index + Li[0].length));
										continue;
									}
									(Lt = !1),
										$i ? mi(Mt, Zt, ci, Li.index) : It && ii(It, Li.index),
										(xt = xt.slice(Li.index + Li[0].length)),
										(Vt = void 0),
										(Bt = void 0),
										(Gt = !1);
								} else {
									const Di = xt.match(at),
										Ui = xt.match(pi);
									if ((Di && Di[0].length === xt.length) || Ui) break;
									{
										const Wi = xt.charAt(0);
										$i
											? (Mt.content += Wi)
											: Wt &&
												((It.content += Wi),
												this.composerDataService.updateComposerCodeBlock(
													Ye,
													It.uri,
													It.version,
													{ content: It.content },
												)),
											(xt = xt.slice(Wi.length));
									}
								}
							} else {
								const $i = /^(\n|\n\n)?[\t ]*```+([^\n]*)\n/,
									Wt = /^(\n|\n\n)?[\t ]*```+[^\n]*$/,
									tt = xt.match($i);
								if (tt) {
									Lt = !0;
									const at = tt[0],
										pi = tt[2];
									(Vt = at.match(/^(\n|\n\n)?(```+)/)?.[2]?.length ?? 3),
										(Bt =
											at.match(/^(\n|\n\n)?([\t ]*)```+/m)?.[2]?.length ?? 0);
									let Li = "",
										Di = null;
									if (pi.includes(":")) {
										const Wi = pi.split(":");
										Wi.length === 2 &&
											((Li = Wi[0].trim()), (Di = Wi[1].trim()));
									} else
										pi?.includes(".")
											? ((Li = pi.split(".").pop()?.trim() ?? ""), (Di = pi))
											: (Li = pi?.trim() ?? "");
									const Ui = Q.ComposerCapabilitiesCodeBlockAliases.find(
										(Wi) => Wi === Li,
									);
									if (((xt = xt.slice(tt[0].length)), Ui))
										(Gt = !0),
											(Mt = {
												type: Ui,
												content: "",
												status: "generating",
												codeBlockIdx: Ut,
												arg: Di ?? void 0,
											}),
											this.composerDataService.updateComposerDataSetStore(
												Ye,
												(Wi) =>
													Wi(
														"conversation",
														(Gi) => Gi.bubbleId === Zt,
														"capabilityCodeBlocks",
														(Gi) => [
															...(Gi ?? []),
															{
																type: Ui,
																status: "generating",
																codeBlockIdx: Ut,
																arg: Di ?? void 0,
															},
														],
													),
											);
									else if (
										((It = { language: Li, filePath: Di, content: "" }), Di)
									) {
										const Wi =
												this.workspaceContextService.resolveRelativePath(Di),
											Gi = await this.shouldComposerAutoApply(Ye),
											qi = await this.shouldAutoApplyURI(Ye, Wi);
										if (!Xe?.skipRegisteringCodeBlocks) {
											const { languageId: Oi } =
													this.languageService.createByLanguageNameOrFilepathOrFirstLine(
														Li ?? "",
														null,
														void 0,
													),
												yi = this.registerNewCodeBlock(Ye, Wi, It.content, Ut, {
													languageId: Oi,
													status: "generating",
													isNotApplied:
														(!Gi || !qi) &&
														(!this.applicationComposerSettings
															.isAutoApplyEnabled ||
															!this.applicationComposerSettings.unification),
													ignoreTurningCodeBlockToCodePill:
														Xe?.ignoreTurningCodeBlockToCodePill,
												});
											this.warmFastApply(Ye, {
												uri: yi.uri,
												version: yi.version,
												content: It.content,
												status: "generating",
											}),
												(It.uri = yi.uri),
												(It.version = yi.version),
												(It.isNotApplied = yi.isNotApplied);
										}
									}
								} else {
									if (xt.match(Wt)) break;
									{
										const pi = xt.indexOf(`
`);
										if (pi !== -1) xt = xt.slice(pi + 1);
										else break;
									}
								}
							}
						yield si;
					}
					const Dt = this.composerDataService.getLastAiBubbleId(Ye),
						Jt = this.composerDataService.getLastHumanBubbleId(Ye);
					if (!Dt || !Jt)
						throw new Error("[composer] No ai or human bubble id");
					if (Lt) {
						const si = Gt && Mt,
							Zt =
								It &&
								It.uri !== void 0 &&
								It.version !== void 0 &&
								!Xe?.skipRegisteringCodeBlocks,
							ci = new RegExp(`^(?:\\r?\\n)([\\t ]{${Bt}})\`{${Vt}}$`),
							ri = xt.match(ci);
						ri
							? ((Lt = !1),
								si ? mi(Mt, Dt, Jt, ri.index) : Zt && ii(It, ri.index),
								(xt = xt.slice(ri.index + ri[0].length)),
								(Vt = void 0),
								(Bt = void 0),
								(Gt = !1))
							: si
								? this.composerDataService.updateComposerCapabilityCodeBlock(
										Ye,
										Dt,
										Ut,
										{ status: "aborted" },
									)
								: Zt &&
									(this.composerDataService.updateComposerCodeBlock(
										Ye,
										It.uri,
										It.version,
										{ content: It.content },
									),
									this.composerDataService.setCodeBlockStatus(
										Ye,
										It.uri,
										It.version,
										"aborted",
									));
					}
				}
				updateWorkspacePersistentState(Ye) {
					this.reactiveStorageService.setWorkspaceUserPersistentStorage(
						"composerState",
						{
							...this.reactiveStorageService.workspaceUserPersistentStorage
								.composerState,
							...Ye,
						},
					);
				}
				abortGenerationUUID(Ye) {
					const ze = this.aiService.streamingAbortControllers.get(Ye);
					ze &&
						(ze.abort(), this.aiService.streamingAbortControllers.delete(Ye));
				}
				isActiveGeneration(Ye) {
					return this.aiService.streamingAbortControllers.has(Ye);
				}
				removeNonPersistentContext(Ye) {
					this.removeAllListContext({
						composerId: Ye,
						contextType: "selectedImages",
						addToUndoRedo: !1,
					}),
						this.removeAllListContext({
							composerId: Ye,
							contextType: "selections",
							addToUndoRedo: !1,
						}),
						this.removeAllListContext({
							composerId: Ye,
							contextType: "terminalSelections",
							addToUndoRedo: !1,
						}),
						this.removeAllListContext({
							composerId: Ye,
							contextType: "externalLinks",
							addToUndoRedo: !1,
						}),
						this.removeAllListContext({
							composerId: Ye,
							contextType: "editTrailContexts",
							addToUndoRedo: !1,
						});
				}
				async refreshReactiveContextItemAtStartup() {
					const Ye = await this.composerDataService.getSelectedComposerHandle();
					try {
						Ye && this.refreshReactiveContextItem(Ye.data.composerId);
					} finally {
						Ye?.dispose();
					}
				}
				refreshReactiveContextItem(Ye, ze, Xe) {
					const It = this.getComposer(Ye);
					if (
						!It ||
						(It.hasChangedContext && !Xe) ||
						!this.selectedContextService.isCursorIgnoreLoaded()
					)
						return;
					const Lt = ze
						? this.composerDataService.getComposerBubble(Ye, ze)?.context
						: It.context;
					if (!Lt) throw new Error("[composer] Context not found");
					const xt = this.composerDataService.getComposerForceMode(Ye),
						Vt = Lt.fileSelections,
						Bt = Lt.notepads ?? [],
						Gt = Lt.terminalFiles ?? [],
						Mt = [],
						Ut = [],
						ei = [];
					if (xt === "edit") {
						const si = this.editorService.getEditors(
								J.EditorsOrder.MOST_RECENTLY_ACTIVE,
							),
							Zt = new Set(si.map((ri) => ri.groupId)),
							ci = Array.from(Zt)
								.map(
									(ri) => this.editorGroupsService.getGroup(ri)?.activeEditor,
								)
								.filter(s.$tg);
						for (const ri of ci)
							if (
								!(!ri?.resource || !this.isCompatibleScheme(ri.resource.scheme))
							)
								if (ri.resource.scheme === o.Schemas.notepad) {
									const $i = ri.resource.path;
									Ut.push({
										notepadId: $i,
										addedWithoutMention: !0,
										autoContext: !0,
									});
								} else if (ri.resource.scheme === o.Schemas.vscodeTerminal) {
									const $i = ri.resource;
									ei.push({
										uri: $i,
										addedWithoutMention: !0,
										autoContext: !0,
									});
								} else {
									const $i = ri.resource;
									this.selectedContextService.shouldIgnoreUri($i) ||
										Mt.push({
											uri: $i,
											addedWithoutMention: !0,
											autoContext: !0,
										});
								}
					} else if (xt === "chat") {
						const Zt = this.getCurrentFile()?.uri;
						if (!Zt) return;
						if (Zt.scheme === o.Schemas.notepad) {
							const ci = Zt.path;
							ci &&
								Ut.push({
									notepadId: ci,
									addedWithoutMention: !0,
									autoContext: !0,
								});
						} else
							Zt.scheme === o.Schemas.vscodeTerminal
								? ei.push({ uri: Zt, addedWithoutMention: !0, autoContext: !0 })
								: this.selectedContextService.shouldIgnoreUri(Zt) ||
									Mt.push({
										uri: Zt,
										addedWithoutMention: !0,
										autoContext: !0,
									});
					}
					Vt.forEach((si) => {
						Mt.some((Zt) =>
							b.$dh.isEqual(l.URI.revive(Zt.uri), l.URI.revive(si.uri)),
						) ||
							(this.selectedContextService.getMentions(Lt, "fileSelections", si)
								.length > 0 &&
								!this.selectedContextService.shouldIgnoreUri(si.uri) &&
								Mt.push(si));
					}),
						Bt.forEach((si) => {
							Ut.some((Zt) => Zt.notepadId === si.notepadId) ||
								(this.selectedContextService.getMentions(Lt, "notepads", si)
									.length > 0 &&
									Ut.push(si));
						}),
						Gt.forEach((si) => {
							ei.some((Zt) =>
								b.$dh.isEqual(l.URI.revive(Zt.uri), l.URI.revive(si.uri)),
							) ||
								(this.selectedContextService.getMentions(
									Lt,
									"terminalFiles",
									si,
								).length > 0 &&
									ei.push(si));
						});
					const mi = (si, Zt) => {
							const ci = new Map();
							return (
								si.forEach((ri) => {
									const $i = (0, Se.$Zgc)(Zt, ri);
									ci.has($i) || ci.set($i, ri);
								}),
								Array.from(ci.values())
							);
						},
						ii = mi(Mt, "fileSelections"),
						Dt = mi(Ut, "notepads"),
						Jt = mi(ei, "terminalFiles");
					this._ignoreChangesToContext.add(Ye),
						ze
							? this.composerDataService.updateComposerDataSetStore(
									Ye,
									(si) => {
										si("conversation", (Zt) => Zt.bubbleId === ze, "context", {
											fileSelections: ii,
											notepads: Dt,
											terminalFiles: Jt,
										});
									},
								)
							: this.composerDataService.updateComposerDataSetStore(
									Ye,
									(si) => {
										si("context", {
											fileSelections: ii,
											notepads: Dt,
											terminalFiles: Jt,
										});
									},
								);
				}
				async insertSelectionIntoComposer(Ye, ze) {
					if (!this.getComposer(Ye)) return;
					let It;
					ze?.origin === "editor"
						? (It = await this.getEditorCode())
						: ze?.origin === "terminal" && (It = await this.getTerminalText()),
						It &&
							this.addContextToLastFocused({
								composerId: Ye,
								contextType:
									ze?.origin === "terminal"
										? "terminalSelections"
										: "selections",
								value: It,
							});
				}
				async getEditorCode(Ye, ze) {
					return await (0, X.$Yfc)(
						this.aiService,
						this.dataScrubbingService,
						Ye,
						ze,
					);
				}
				isComposerEmpty(Ye) {
					const ze = this.getComposer(Ye);
					return ze
						? ze.conversation.length === 0 && ze.text.trim() === ""
						: !0;
				}
				isComposerConversationEmpty(Ye) {
					const ze = this.getComposer(Ye);
					return ze ? ze.conversation.length === 0 : !0;
				}
				isComposerContextUntouched(Ye) {
					const ze = this.getComposer(Ye);
					return ze ? ze.hasChangedContext !== !0 : !0;
				}
				isComposerUntouched(Ye) {
					return (
						this.isComposerEmpty(Ye) && this.isComposerContextUntouched(Ye)
					);
				}
				canComposerSubmit(Ye, ze) {
					const Xe = this.getComposer(Ye);
					if (!Xe) return !1;
					const It = this.composerDataService.getPendingUserDecisionGroup(Ye);
					if (Xe.status === "generating" && !ze && !It) return !1;
					const Lt = this.composerDataService.getComposerCapability(
						Ye,
						m.ComposerCapabilityRequest_ComposerCapabilityType.EDIT_TRAIL,
					);
					if (ze) {
						const Bt = Xe.conversation.find((Ut) => Ut.bubbleId === ze);
						if (!Bt) return !1;
						const Gt =
								(Bt.context?.editTrailContexts?.length ?? 0) > 0 ||
								(Xe.chatGenerationUUID === void 0 &&
									(Lt?.state?.().hasModifiedAnyModel ?? !1)),
							Mt =
								(Bt.context?.notepads?.length ?? 0) > 0 &&
								Xe.status !== "generating";
						return Bt.text.trim() !== "" || Gt || Mt;
					}
					const xt =
							(Xe.context.editTrailContexts?.length ?? 0) > 0 ||
							(Xe.chatGenerationUUID === void 0 &&
								(Lt?.state?.().hasModifiedAnyModel ?? !1)),
						Vt =
							(Xe.context.notepads?.length ?? 0) > 0 &&
							Xe.status !== "generating";
					return Xe.text.trim() !== "" || xt || Vt;
				}
				async close(Ye, ze) {
					const Xe = this.composerDataService.getComposerForceMode(Ye);
					if (
						(ze?.skipHiding || (this.hide(Ye), this.blur(Ye)),
						(this.composerViewsService.isShowing(Ye) && !ze?.skipHiding) ||
							Xe === "chat" ||
							Ye === this.composerDataService.selectedComposerId)
					)
						return;
					const It = await this.composerDataService.getComposerHandleById(Ye);
					if (!It) throw new Error("[composer] No composer data handle found");
					try {
						const Lt = this.composerDataService.getAllInlineDiffs(Ye);
						for (const xt of Lt) {
							if (xt?.composerMetadata?.version === void 0) {
								console.error("[composer] Inline diff has no version", xt);
								continue;
							}
							if (xt && "newTextLines" in xt && "originalTextLines" in xt) {
								const Vt = await this.composerUtilsService.computeLineDiffs(
										Ye,
										xt.uri,
										xt.newTextLines,
									),
									Bt = await this.composerUtilsService.computeLineDiffs(
										Ye,
										xt.uri,
										xt.originalTextLines,
									);
								Vt &&
									this.composerDataService.updateComposerCodeBlock(
										It,
										xt.uri,
										xt.composerMetadata.version,
										{ newModelDiffWrtV0: Vt, originalModelDiffWrtV0: Bt },
									);
							}
						}
						this.cacheAllDiffs(It),
							setTimeout(() => {
								this.saveFiles(
									Lt.map((xt) => xt.uri),
									{ force: !0 },
								);
							}, 100);
					} finally {
						It.dispose();
					}
				}
				handleOpenComposerPane(Ye, ze) {
					this.openComposer(Ye, { ...ze, view: "pane" });
				}
				handleOpenComposerEditor(Ye, ze) {
					this.openComposer(Ye, { ...ze, view: "editor" });
				}
				handleOpenComposerBar(Ye, ze) {
					this.openComposer(Ye, { ...ze, view: "bar" });
				}
				handleOpenComposer(Ye, ze) {
					switch (this.getComposerLocation(Ye)) {
						case "editor":
							this.handleOpenComposerEditor(Ye, ze);
							break;
						case "pane":
							this.handleOpenComposerPane(Ye, ze);
							break;
						case "bar":
							this.handleOpenComposerBar(Ye, ze);
							break;
					}
				}
				async openComposer(Ye, ze) {
					const Xe = this.composerDataService.getComposerForceMode(Ye),
						It = this.composerDataService.getSelectedIdByForceMode(Xe);
					if (ze?.insertSelection) {
						const Vt = this.terminalService.getActiveInstance()?.hasFocus ?? !1;
						await this.insertSelectionIntoComposer(Ye, {
							origin: Vt ? "terminal" : "editor",
						});
					}
					if (Ye === It) {
						await this.showAndFocus(Ye, ze);
						return;
					}
					if (Xe !== "chat") {
						if (
							this.composerDataService.selectedChatId === Ye &&
							!this.applicationComposerSettings.unification
						) {
							console.error(
								"[balta] For some reason, we are opening an edit composer but that same composer is already selected as a chat composer, for now we will just open the chat composer",
							);
							return;
						}
						this.composerDataService.setAllComposersData(
							"selectedComposerId",
							Ye,
						);
					} else {
						if (this.composerDataService.selectedComposerId === Ye) {
							console.error(
								"[balta] For some reason, we are opening a chat composer but that same composer is already selected as an edit composer, for now we will just open the edit composer",
							);
							return;
						}
						this.composerDataService.setAllComposersData("selectedChatId", Ye);
					}
					const Lt = await this.composerDataService.getComposerHandleById(Ye);
					if (!Lt) throw new Error("[composer] No composer data handle found");
					try {
						await this.showAndFocus(Ye, ze),
							Xe === "edit" &&
								(this._onDidOpenComposer.fire(),
								this.shouldCache(Lt) ||
									(await this.turnAllCachedCodeBlocksToDiffs(Lt),
									await this.reactivateApplyingCodeBlocks(Lt)));
					} finally {
						Lt.dispose();
					}
				}
				getIsNewConversationAgentic(Ye) {
					return Ye === "chat"
						? !1
						: this.reactiveStorageService.applicationUserPersistentStorage
								.composerState.defaultUseToolsInEdit === !0;
				}
				async createComposer(Ye) {
					Ye = { ...Ye, forceMode: Ye?.forceMode ?? "edit" };
					const Xe = this.terminalService.getActiveInstance()?.hasFocus ?? !1;
					this.applicationComposerSettings.unification &&
						(Ye.forceMode = "edit");
					const It = this.composerDataService.getSelectedIdByForceMode(
							Ye.forceMode,
						),
						Lt = this.composerDataService.getComposerData(It);
					if (this.shouldShowAcceptRejectAll(It) && Lt?.forceMode !== "chat") {
						const Jt = await this.prettyDialogService.openDialog({
							title: "Are you sure to create a new composer?",
							message: [
								{
									message:
										"You have changes that have not been accepted or rejected, and creating a new composer will undo these changes.",
								},
								{
									message:
										"Note: You can always come back to this composer later.",
									isDeemphasized: !0,
								},
							],
							cancelButton: { id: "cancel", label: "Cancel" },
							extraButtons: [
								{ id: "create_and_close", label: "Create and close changes" },
							],
							primaryButton: { id: "create", label: "Create and keep changes" },
						});
						if (Jt !== "create" && Jt !== "create_and_close") return;
						Jt === "create" && (await this.acceptAll(It));
					}
					if (
						!Ye?.ignoreEmptyCheck &&
						this.isComposerEmpty(It) &&
						(!Ye?.backgroundInfo || !!Lt?.backgroundInfo)
					) {
						await this.resetComposer(
							It,
							Ye?.partialState,
							Ye?.dontRefreshReactiveContext,
						),
							Ye?.insertSelection &&
								(await this.insertSelectionIntoComposer(It, {
									origin: Xe ? "terminal" : "editor",
								})),
							await this.showAndFocus(It, Ye);
						return;
					}
					const Bt = (0, y.$9g)();
					let Gt, Mt, Ut, ei;
					const mi = (0, _.getComposerCapabilities)(
							this.instantiationService,
							this.reactiveStorageService,
							Bt,
							[],
						),
						ii = Ye?.forceMode ?? "edit",
						Dt = {
							...(0, Q.createEmptyComposer)(Bt),
							...Ye?.partialState,
							backgroundInfo: Gt,
							capabilities: mi,
							forceMode: ii,
							isAgentic: this.getIsNewConversationAgentic(ii),
						};
					if (
						(this.composerDataService.appendComposer(Dt),
						Ye?.forceMode === "chat" &&
							this.composerDataService.selectedComposerId === Bt)
					) {
						console.error(
							"[balta] For some reason, we are opening a chat composer but that same composer is already selected as an edit composer, for now we will just exit early",
						);
						return;
					} else if (
						Ye?.forceMode !== "chat" &&
						this.composerDataService.selectedChatId === Bt &&
						!this.applicationComposerSettings.unification
					) {
						console.error(
							"[balta] For some reason, we are opening an edit composer but that same composer is already selected as a chat composer, for now we will just exit early",
						);
						return;
					}
					this.composerDataService.setAllComposersData(
						Ye?.forceMode === "chat" ? "selectedChatId" : "selectedComposerId",
						Bt,
					),
						await this.resetComposer(
							Bt,
							Ye?.partialState,
							Ye?.dontRefreshReactiveContext,
						),
						Ye?.insertSelection &&
							(await this.insertSelectionIntoComposer(Bt, {
								origin: Xe ? "terminal" : "editor",
							})),
						await this.showAndFocus(Bt, Ye);
				}
				async deleteComposer(Ye) {
					const ze = await this.composerDataService.getComposerHandleById(Ye);
					if (!ze) {
						console.error(
							"[composer] trying to delete non-existent composer",
							Ye,
						);
						return;
					}
					const Xe = this.composerDataService.getComposerForceMode(Ye),
						It = this.composerDataService.getSelectedIdByForceMode(Xe);
					try {
						const Lt = ze.data;
						if ((console.log("[composer] deleting composer", Ye), Ye === It)) {
							const xt =
								this.composerDataService.allComposersData.allComposers.filter(
									(Vt) =>
										Vt.composerId !== Ye &&
										this.composerDataService.getComposerForceMode(Vt) === Xe,
								);
							if (xt.length > 0) {
								const Vt = xt[0].composerId;
								this.openComposer(Vt, { skipShowAndFocus: !0 });
							} else {
								this.resetComposer(Ye), this.close(Ye);
								return;
							}
						}
						try {
							this.cleanUpComposer(Ye);
						} catch (xt) {
							console.error(`[composer] Error cleaning up composer ${Ye}:`, xt);
						}
						this.composerDataService.deleteComposer(Ye);
					} finally {
						ze?.dispose();
					}
				}
				async saveAll(Ye, ze) {
					this.analyticsService.trackEvent("composer.save_all");
					const Xe = this.composerDataService
						.getLatestCodeBlocksOfStatuses(Ye, Q.SAVE_RELATED_STATUSES)
						.map((It) => It.uri);
					await this.saveFiles(Xe, ze);
				}
				maybeUpdateFileSelectionsFromCmdI(Ye) {
					const ze = this.getComposer(Ye);
					if (!ze) return;
					const Xe = ze.context.fileSelections,
						It = ze.context.notepads ?? [],
						Lt = ze.context.terminalFiles ?? [],
						xt = this.editorService.getEditors(
							J.EditorsOrder.MOST_RECENTLY_ACTIVE,
						),
						Vt = new Set(xt.map((Dt) => Dt.groupId)),
						Bt = Array.from(Vt)
							.map((Dt) => this.editorGroupsService.getGroup(Dt)?.activeEditor)
							.filter(s.$tg),
						Gt = [],
						Mt = [],
						Ut = [];
					for (const Dt of Bt)
						!Dt?.resource ||
							!this.isCompatibleScheme(Dt.resource.scheme) ||
							(Dt.resource.scheme === o.Schemas.notepad &&
							Dt.resource &&
							!Mt.some((Jt) => Jt.notepadId === Dt.resource.path)
								? Mt.push({ notepadId: Dt.resource.path })
								: Dt.resource.scheme === o.Schemas.vscodeTerminal &&
										Dt.resource &&
										!Ut.some((Jt) =>
											b.$dh.isEqual(
												l.URI.revive(Jt.uri),
												l.URI.revive(Dt.resource),
											),
										)
									? Ut.push({ uri: Dt.resource })
									: Dt.resource &&
										!Gt.some((Jt) =>
											b.$dh.isEqual(
												l.URI.revive(Jt.uri),
												l.URI.revive(Dt.resource),
											),
										) &&
										(this.selectedContextService.shouldIgnoreUri(Dt.resource) ||
											Gt.push({ uri: Dt.resource })));
					const ei =
							Xe.length === Gt.length &&
							Xe.every((Dt) =>
								Gt.some((Jt) =>
									b.$dh.isEqual(l.URI.revive(Jt.uri), l.URI.revive(Dt.uri)),
								),
							),
						mi =
							It.length === Mt.length &&
							It.every((Dt) => Mt.some((Jt) => Jt.notepadId === Dt.notepadId)),
						ii =
							Lt.length === Ut.length &&
							Lt.every((Dt) =>
								Ut.some((Jt) =>
									b.$dh.isEqual(l.URI.revive(Jt.uri), l.URI.revive(Dt.uri)),
								),
							);
					if (ei && mi && ii) {
						const Dt = this.editorService.activeEditor;
						if (Dt && Dt.resource) {
							const Jt = [],
								si = [],
								Zt = [];
							Dt.resource.scheme === o.Schemas.notepad
								? Jt.push({ notepadId: Dt.resource.path })
								: Dt.resource.scheme === o.Schemas.vscodeTerminal
									? si.push({ uri: Dt.resource })
									: this.selectedContextService.shouldIgnoreUri(Dt.resource) ||
										Zt.push({ uri: Dt.resource }),
								this._ignoreChangesToContext.add(Ye),
								this.composerDataService.updateComposerDataSetStore(Ye, (ci) =>
									ci("context", {
										fileSelections: Zt,
										notepads: Jt,
										terminalFiles: si,
									}),
								);
						}
					} else
						Xe.length + It.length + Lt.length === 1 &&
							this.refreshReactiveContextItem(Ye);
				}
				isCompatibleScheme(Ye) {
					return [
						o.Schemas.file,
						o.Schemas.vscodeRemote,
						o.Schemas.vscodeNotebook,
						o.Schemas.notepad,
						o.Schemas.vscodeTerminal,
					].includes(Ye);
				}
				getCurrentFile() {
					const Ye = this.aiFileInfoService.getLastActiveFileEditor();
					if (!Ye) return;
					const ze = J.$A1.getOriginalUri(Ye.input);
					if (ze && this.isCompatibleScheme(ze.scheme))
						return { uri: ze, isCurrentFile: !0 };
				}
				getInlineDiffServiceLookalikePure(Ye, ze, Xe) {
					return {
						addLinesToDiff: (It, Lt) => {
							this.composerDataService.updateComposerDataSetStore(Ye, (Vt) =>
								Vt(
									"codeBlockData",
									ze.toString(),
									(Bt) => Bt.status === "applying",
									"intermediateModelLines",
									(Bt) => [...(Bt ?? []), ...Lt],
								),
							);
							const xt = this.getApplyingDiffsState(Ye);
							if (!this.shouldCache(Ye, { uri: ze, version: Xe }))
								if (xt.isReactivatingApplyingDiffs[ze.toString()])
									xt.applyingDiffsBacklogLines[ze.toString()] ||
										(xt.applyingDiffsBacklogLines[ze.toString()] = []),
										xt.applyingDiffsBacklogLines[ze.toString()].push(...Lt);
								else {
									if (!this.getComposer(Ye))
										throw new Error("[composer] composer not found");
									const Bt = this.composerDataService.getInlineDiff(Ye, ze);
									if (Bt) {
										const Gt = xt.applyingDiffsBacklogLines[ze.toString()];
										return (
											Gt &&
												Gt.length > 0 &&
												(console.log("[composer] backlog lines", Gt),
												(Lt = [...Gt, ...Lt]),
												(xt.applyingDiffsBacklogLines[ze.toString()] = [])),
											this.inlineDiffService.addLinesToDiff(Bt.id, Lt)
										);
									} else console.error("[composer] no diff id for uri", ze);
								}
						},
						addActiveDiff: async (It) => {
							const Lt = { stack: [], error: void 0, hasError: !1 };
							try {
								const xt = ms(
									Lt,
									(0, De.span)(
										"ComposerService.getInlineDiffServiceLookalikePure.addActiveDiff",
									),
									!1,
								);
								this.composerDataService.updateComposerDataSetStore(Ye, (Bt) =>
									Bt(
										"codeBlockData",
										ze.toString(),
										(Gt) => Gt.status === "applying",
										"intermediateModelLines",
										[],
									),
								);
								const Vt = this.getApplyingDiffsState(Ye);
								if (
									((Vt.applyingDiffsBacklogLines[ze.toString()] = []),
									(Vt.isReactivatingApplyingDiffs[ze.toString()] = !1),
									this.shouldCache(Ye, { uri: ze, version: Xe }))
								) {
									const Bt = (0, y.$9g)();
									return this.registerCachedCodeBlock(Ye, ze, Xe), { id: Bt };
								} else {
									const Bt = await this.inlineDiffService.addActiveDiff(It);
									return (
										this.composerDataService.updateComposerCodeBlock(
											Ye,
											ze,
											Xe,
											{ lastDiffId: Bt.id },
										),
										Bt
									);
								}
							} catch (xt) {
								(Lt.error = xt), (Lt.hasError = !0);
							} finally {
								ps(Lt);
							}
						},
						finishDiffSuccess: (It) => {
							const Lt = { stack: [], error: void 0, hasError: !1 };
							try {
								const xt = ms(
									Lt,
									(0, De.span)(
										"ComposerService.getInlineDiffServiceLookalikePure.finishDiffSuccess",
									),
									!1,
								);
								if (!this.shouldCache(Ye, { uri: ze, version: Xe })) {
									if (!this.getComposer(Ye))
										throw new Error("[composer] composer not found");
									const Bt = this.composerDataService.getInlineDiff(Ye, ze);
									if (Bt)
										return this.inlineDiffService.finishDiffSuccess(Bt.id);
									console.error("[composer] no diff id for uri", ze);
								}
							} catch (xt) {
								(Lt.error = xt), (Lt.hasError = !0);
							} finally {
								ps(Lt);
							}
						},
						cancelDiff: (It) => {
							const Lt = { stack: [], error: void 0, hasError: !1 };
							try {
								const xt = ms(
									Lt,
									(0, De.span)(
										"ComposerService.getInlineDiffServiceLookalikePure.cancelDiff",
									),
									!1,
								);
								if (!this.shouldCache(Ye, { uri: ze, version: Xe })) {
									if (!this.getComposer(Ye))
										throw new Error("[composer] composer not found");
									const Bt = this.composerDataService.getInlineDiff(Ye, ze);
									if (Bt) return this.inlineDiffService.cancelDiff(Bt.id);
									console.error("[composer] no diff id for uri", ze);
								}
							} catch (xt) {
								(Lt.error = xt), (Lt.hasError = !0);
							} finally {
								ps(Lt);
							}
						},
					};
				}
				isCodeBlockRegisteredAsCached(Ye, ze, Xe) {
					const It =
							!!this._uriToCachedCodeBlocks
								.get(ze.toString())
								?.some((xt) => xt.version === Xe && xt.composerId === Ye) ||
							!!this._uriToCachedCodeBlocksQueue
								.get(ze.toString())
								?.some((xt) => xt.version === Xe && xt.composerId === Ye),
						Lt = this.composerDataService.getComposerCodeBlock(
							Ye,
							ze,
							Xe,
						)?.isCached;
					return It && Lt;
				}
				async getTerminalText(Ye) {
					return await (0, X.$Zfc)(
						this.terminalService,
						this.dataScrubbingService,
						!1,
						Ye,
					);
				}
				getUndoRedoUri(Ye, ze) {
					return l.URI.from({
						scheme: "composer",
						path: `${Ye}${ze ? `:${ze}` : ""}`,
					});
				}
				addContext(Ye) {
					const {
						composerId: ze,
						contextType: Xe,
						value: It,
						uuid: Lt,
						addToUndoRedo: xt = !0,
						shouldShowPreview: Vt = !0,
					} = Ye;
					this.selectedContextService.addContext({
						contextType: Xe,
						value: It,
						setContext: (...Bt) => {
							this.composerDataService.updateComposerDataSetStore(ze, (Gt) =>
								Gt("context", ...Bt),
							);
						},
						getContext: () => {
							const Bt = this.getComposer(ze);
							if (!Bt) throw new Error("[composer] Composer not found");
							return Bt.context;
						},
						undoRedoUri: xt ? this.getUndoRedoUri(ze) : void 0,
						mention: Lt ? { uuid: Lt } : void 0,
					}),
						Vt &&
							setTimeout(() => {
								let Bt;
								const Gt = this.getComposer(ze);
								if (!Gt) throw new Error("[composer] Composer not found");
								(0, Se.$Ygc)(Xe) &&
									(Bt = Gt.context[Xe].findIndex((Mt) =>
										(0, Se.$1gc)(Xe, Mt, It),
									)),
									Bt !== -1 &&
										this._onShouldShowPreview.fire({
											composerId: ze,
											contextType: Xe,
											index: Bt,
										});
							});
				}
				removeAllListContext(Ye) {
					const {
							composerId: ze,
							bubbleId: Xe,
							contextType: It,
							addToUndoRedo: Lt = !0,
						} = Ye,
						xt = this.selectedContextService.removeAllListContext({
							contextType: It,
							setContext: (...Vt) => {
								Xe
									? this.composerDataService.updateComposerDataSetStore(
											ze,
											(Bt) =>
												Bt(
													"conversation",
													(Gt) => Gt.bubbleId === Xe,
													"context",
													...Vt,
												),
										)
									: this.composerDataService.updateComposerDataSetStore(
											ze,
											(Bt) => Bt("context", ...Vt),
										);
							},
							getContext: () => {
								const Vt = this.getComposer(ze);
								if (!Vt) throw new Error("[composer] Composer not found");
								if (Xe) {
									const Bt = this.composerDataService.getComposerBubble(ze, Xe);
									if (!Bt || !Bt.context)
										throw new Error("[composer] Bubble not found");
									return Bt.context;
								}
								return Vt.context;
							},
							undoRedoUri: Lt ? this.getUndoRedoUri(ze, Xe) : void 0,
						});
					return (
						this._onContextRemoved.fire({
							composerId: ze,
							contextType: It,
							removedMentionIds: xt.map((Vt) => Vt.uuid),
						}),
						xt
					);
				}
				removeContext(Ye) {
					const {
							composerId: ze,
							contextType: Xe,
							index: It,
							addToUndoRedo: Lt = !0,
						} = Ye,
						xt = this.selectedContextService.removeContext({
							contextType: Xe,
							setContext: (...Vt) => {
								this.composerDataService.updateComposerDataSetStore(ze, (Bt) =>
									Bt("context", ...Vt),
								);
							},
							getContext: () => {
								const Vt = this.getComposer(ze);
								if (!Vt) throw new Error("[composer] Composer not found");
								return Vt.context;
							},
							index: It,
							undoRedoUri: Lt ? this.getUndoRedoUri(ze) : void 0,
						});
					return (
						this._onContextRemoved.fire({
							composerId: ze,
							contextType: Xe,
							removedMentionIds: xt.map((Vt) => Vt.uuid),
						}),
						xt
					);
				}
				removeMention(Ye, ze) {
					this.selectedContextService.removeMention({
						uuid: ze,
						setContext: (...Xe) => {
							this.composerDataService.updateComposerDataSetStore(Ye, (It) =>
								It("context", ...Xe),
							);
						},
						getContext: () => {
							const Xe = this.getComposer(Ye);
							if (!Xe) throw new Error("[composer] Composer not found");
							return Xe.context;
						},
						undoRedoUri: this.getUndoRedoUri(Ye),
					});
				}
				addBubbleContext(Ye) {
					const {
						composerId: ze,
						bubbleId: Xe,
						contextType: It,
						value: Lt,
						uuid: xt,
						addToUndoRedo: Vt = !0,
					} = Ye;
					this.selectedContextService.addContext({
						contextType: It,
						value: Lt,
						setContext: (...Bt) => {
							this.composerDataService.updateComposerDataSetStore(ze, (Gt) =>
								Gt(
									"conversation",
									(Mt) => Mt.bubbleId === Xe,
									"context",
									...Bt,
								),
							);
						},
						getContext: () => {
							const Bt = this.composerDataService.getComposerBubble(ze, Xe);
							if (!Bt || !Bt.context)
								throw new Error("[composer] Bubble not found");
							return Bt.context;
						},
						undoRedoUri: Vt ? this.getUndoRedoUri(ze, Xe) : void 0,
						mention: xt ? { uuid: xt } : void 0,
					});
				}
				removeBubbleContext(Ye) {
					const {
							composerId: ze,
							bubbleId: Xe,
							contextType: It,
							index: Lt,
							addToUndoRedo: xt = !0,
						} = Ye,
						Vt = this.selectedContextService.removeContext({
							contextType: It,
							setContext: (...Bt) => {
								this.composerDataService.updateComposerDataSetStore(ze, (Gt) =>
									Gt(
										"conversation",
										(Mt) => Mt.bubbleId === Xe,
										"context",
										...Bt,
									),
								);
							},
							getContext: () => {
								const Bt = this.composerDataService.getComposerBubble(ze, Xe);
								if (!Bt || !Bt.context)
									throw new Error("[composer] Bubble not found");
								return Bt.context;
							},
							index: Lt,
							undoRedoUri: xt ? this.getUndoRedoUri(ze, Xe) : void 0,
						});
					return (
						this._onContextRemoved.fire({
							composerId: ze,
							bubbleId: Xe,
							contextType: It,
							removedMentionIds: Vt.map((Bt) => Bt.uuid),
						}),
						Vt
					);
				}
				removeBubbleMention(Ye, ze, Xe) {
					this.selectedContextService.removeMention({
						uuid: Xe,
						setContext: (...It) => {
							this.composerDataService.updateComposerDataSetStore(Ye, (Lt) =>
								Lt(
									"conversation",
									(xt) => xt.bubbleId === ze,
									"context",
									...It,
								),
							);
						},
						getContext: () => {
							const It = this.composerDataService.getComposerBubble(Ye, ze);
							if (!It || !It.context)
								throw new Error("[composer] Bubble not found");
							return It.context;
						},
						undoRedoUri: this.getUndoRedoUri(Ye, ze),
					});
				}
				resetContext(Ye, ze) {
					if (!this.getComposer(Ye)) {
						console.error(`[composer] No composer found for ID: ${Ye}`);
						return;
					}
					for (const It of Se.$Xgc)
						(0, Se.$Ygc)(It)
							? this.removeAllListContext({
									composerId: Ye,
									bubbleId: ze,
									contextType: It,
									addToUndoRedo: !1,
								})
							: ze
								? this.removeBubbleContext({
										composerId: Ye,
										bubbleId: ze,
										contextType: It,
										addToUndoRedo: !1,
									})
								: this.removeContext({
										composerId: Ye,
										contextType: It,
										addToUndoRedo: !1,
									});
					ze || this.updateComposer(Ye, { hasChangedContext: !1 }),
						this.refreshReactiveContextItem(Ye, ze, !0),
						console.log(`[composer] Reset context for composer ID: ${Ye}`);
				}
				addContextToLastFocused(Ye) {
					const ze = this.getComposer(Ye.composerId);
					ze &&
						(ze.lastFocusedBubbleId
							? this.addBubbleContext({
									...Ye,
									bubbleId: ze.lastFocusedBubbleId,
								})
							: this.addContext({ ...Ye }));
				}
				async checkoutToCheckpoint(Ye, ze, Xe) {
					const It = this.composerDataService.getComposerFromIdOrHandle(Ye);
					if (!It) {
						console.error("[composer] No composer found for the given ID");
						return;
					}
					const Lt = It.composerId,
						xt = typeof ze == "string";
					if (xt && It.currentBubbleId === ze) {
						console.log("[composer] Already at the target message");
						return;
					}
					let Vt;
					if (
						xt &&
						((Vt = It.conversation.findIndex((Dt) => Dt.bubbleId === ze)),
						Vt === -1)
					) {
						console.error(
							"[composer] No message found with the given bubble ID or message has no checkpoint",
						);
						return;
					}
					if (
						await this.composerUtilsService.isCheckpointSameAsCurrent(Lt, ze)
					) {
						console.log(
							"[composer] Checkout to message is the same as current",
						),
							this.cancelChat(Lt),
							this.updateComposer(Lt, {
								currentBubbleId: xt ? ze : void 0,
								editingBubbleId: xt ? ze : void 0,
							}),
							setTimeout(() => {
								this.getPrevEditingBubbleInputDelegate(Lt).focus();
							}, 0);
						return;
					}
					if (
						!Xe?.skipDialog &&
						xt &&
						(await this.prettyDialogService.openDialog({
							title: "Revert file changes?",
							message:
								'This will undo all changes after this point. You can restore them via "Checkout to latest changes" at the end of the conversation.',
							cancelButton: { id: "cancel", label: "Cancel" },
							primaryButton: { id: "continue", label: "Continue" },
						})) !== "continue"
					)
						return;
					this.cancelChat(Lt);
					let Gt = new Set(),
						Mt = new Map(),
						Ut = new Set();
					const ei = It.currentBubbleId
						? It.conversation.findIndex(
								(Dt) => Dt.bubbleId === It.currentBubbleId,
							)
						: It.conversation.length;
					let mi = !xt;
					if (
						(Vt && (mi = Vt > ei),
						this.analyticsService.trackEvent("composer.checkout_to_message", {
							messageIndex: Vt,
							isMovingForward: mi,
						}),
						It.currentBubbleId === void 0)
					) {
						const Dt = await this.composerUtilsService.createCurrentCheckpoint(
							Lt,
							It.latestCheckpoint,
						);
						if (!Dt) return;
						this.updateComposer(Lt, { latestCheckpoint: Dt });
					} else {
						const Dt = It.conversation.find(
							(Jt) => Jt.bubbleId === It.currentBubbleId,
						);
						if (Dt) {
							const Jt = Dt.checkpoint,
								si = await this.composerUtilsService.createCurrentCheckpoint(
									Lt,
									Jt,
								);
							if (!si) return;
							this.composerDataService.updateComposerDataSetStore(Lt, (Zt) =>
								Zt(
									"conversation",
									(ci) => ci.bubbleId === It.currentBubbleId,
									"checkpoint",
									si,
								),
							);
						}
					}
					const ii = xt ? It.conversation[Vt].checkpoint : ze;
					if (!ii)
						throw new Error(
							"[composer] No checkpoint found for the given bubble ID",
						);
					if (xt)
						({
							filesToRevert: Gt,
							intermediateFiles: Mt,
							foldersToDelete: Ut,
						} = this.composerUtilsService.getFilesToRevertForCheckpoint(
							Lt,
							Vt,
							ei,
							ii,
						));
					else {
						const Dt = new Set(
							ii.activeInlineDiffs?.map((Jt) => Jt.uri.toString()) ?? [],
						);
						Gt = new Set(
							ii.files
								.map((Jt) => Jt.uri.toString())
								.filter((Jt) => !Dt.has(Jt)),
						);
					}
					for (const Dt of Gt)
						try {
							const Jt = l.URI.parse(Dt);
							let si;
							if (ii.files.some((Zt) => Zt.uri.toString() === Dt))
								si = ii.files.find((Zt) => Zt.uri.toString() === Dt);
							else {
								const Zt = Mt.get(Dt);
								Zt &&
									(si = Zt.checkpoint.files.find(
										(ci) => ci.uri.toString() === Dt,
									));
							}
							if (si) {
								if (si.isNewlyCreated)
									await this.deleteFile(Jt),
										console.log(`[composer] Deleted newly created file ${Dt}`);
								else {
									await this.createNewFileAndMaybeFolder(Lt, si.uri, !0);
									const ri = (
											await this.composerDataService.getMaybeCachedModelReference(
												Lt,
												Jt,
											)
										).object.textEditorModel,
										$i = ri.getLinesContent(),
										Wt =
											this.composerUtilsService.getCodeBlockLinesByDiff(
												Lt,
												Jt,
												si.originalModelDiffWrtV0 ?? [],
											) ?? [];
									if (Wt.length === 0) {
										console.error(
											`[composer] Empty originalModelLines for ${Jt.toString()}`,
										);
										continue;
									}
									($i.length !== Wt.length ||
										$i.join(`
`) !==
											Wt.join(`
`)) &&
										(ri.setValue(
											Wt.join(`
`),
										),
										await this.saveFile(Jt, {
											force: !0,
											waitForEditorToOpen: !0,
											overwrite: !0,
										}));
								}
								const Zt =
									this.reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
										(ci) => ci.uri.toString() === Dt,
									);
								Zt && this.inlineDiffService.remove(Zt.id),
									console.log(
										`[composer] Processed file ${Dt} for revert operation`,
									);
							}
						} catch (Jt) {
							console.error(`[composer] Error processing file ${Dt}:`, Jt);
						}
					for (const Dt of Ut)
						try {
							await this.deleteFolder(l.URI.parse(Dt)),
								console.log(`[composer] Deleted newly created folder ${Dt}`);
						} catch (Jt) {
							console.error(`[composer] Error deleting folder ${Dt}:`, Jt);
						}
					for (const Dt of ii.nonExistentFiles)
						await this.deleteFile(Dt.uri),
							console.log(
								`[composer] Deleted non existent file ${Dt.uri.toString()}`,
							);
					this.updateComposer(Lt, {
						currentBubbleId: xt ? ze : void 0,
						editingBubbleId: xt ? ze : void 0,
						newlyCreatedFiles: [...ii.inlineDiffNewlyCreatedResources.files],
						newlyCreatedFolders: [
							...ii.inlineDiffNewlyCreatedResources.folders,
						],
					}),
						setTimeout(() => {
							this.getPrevEditingBubbleInputDelegate(Lt).focus();
						}, 0),
						ii.activeInlineDiffs.forEach(async (Dt) => {
							const { uri: Jt, version: si } = Dt;
							await this.turnApplyToInlineDiff(Lt, Jt, si, {
								setOriginalModelLines: !0,
							});
						}),
						console.log(
							`[composer] Completed reverting to ${xt ? "message " + ze : "checkpoint"}`,
						);
				}
				async checkoutToLatest(Ye) {
					const ze = this.composerDataService.getComposerFromIdOrHandle(Ye);
					if (!ze) {
						console.error("[composer] No composer found for the given ID");
						return;
					}
					if (!ze.latestCheckpoint) {
						console.error(
							"[composer] No latest checkpoint found for the composer",
						);
						return;
					}
					return this.checkoutToCheckpoint(Ye, ze.latestCheckpoint);
				}
				async syncComposerWorktreeBranch(Ye) {
					const ze = this.composerDataService.getComposerData(Ye);
					if (!ze || !ze.backgroundInfo)
						throw new Error(
							"[composer] No composer found for the given ID, or no background info",
						);
					const { localBranchName: Xe, worktreePath: It } = ze.backgroundInfo;
					try {
						await this.acceptAllCached(Ye);
						const Lt = Object.keys(ze.codeBlockData);
						for (const xt of Lt) {
							const Vt = ze.codeBlockData[xt],
								Bt = Vt[Vt.length - 1],
								Mt = this.composerUtilsService
									.getCodeBlockNewModelLines(Ye, l.URI.parse(xt), Bt.version)
									?.join(`
`);
							!Mt ||
								Mt.length === 0 ||
								(await this.fileService.writeFile(
									l.URI.parse(xt),
									n.$Te.fromString(Mt),
								));
						}
						await this.gitContextService.syncWorktreeToBranch(It, Xe);
					} catch (Lt) {
						console.error(
							`[composer] Error syncing worktree for composer ${ze.composerId}:`,
							Lt,
						);
					}
				}
				async checkIfBackgroundComposerIsCorrupted(Ye) {
					const ze = this.getComposer(Ye);
					if (!ze || !ze.backgroundInfo) return !1;
					const { worktreePath: Xe } = ze.backgroundInfo;
					return !(await this.fileService.exists(l.URI.parse(Xe)));
				}
				isBackground(Ye) {
					return (
						this.composerDataService.getComposerFromIdOrHandle(Ye)
							?.backgroundInfo !== void 0
					);
				}
				getModelDetails(Ye) {
					const ze = this.aiService.getModelDetails({
							specificModelField: Ye ?? "composer",
						}),
						Xe = ["claude-3.5-sonnet", "claude-3-5-sonnet-20241022"];
					return ze.apiKey === void 0 &&
						this.reactiveStorageService.applicationUserPersistentStorage
							.turboModeOptions.useTurboMode === !0 &&
						ze.modelName !== void 0 &&
						Xe.includes(ze.modelName)
						? new a.$Zs({ ...ze, modelName: "claude-3-5-sonnet-turbo" })
						: ze;
				}
				showInfoBox(Ye) {
					this.reactiveStorageService.setNonPersistentStorage(
						"composerState",
						"infoBoxMessage",
						Ye,
					);
				}
				getAllCachedCodeBlocks(Ye) {
					const ze = this.getComposer(Ye);
					if (!ze) throw Error("[composer] composer doesn't exist");
					const { codeBlockData: Xe } = ze;
					return Object.values(Xe)
						.flat()
						.filter(({ isCached: Lt }) => Lt === !0);
				}
				async readFileContents(Ye) {
					try {
						return (await this.fileService.readFile(Ye)).value.toString();
					} catch (ze) {
						return console.error("Error reading file:", ze), "";
					}
				}
				async getSortedCandidateFiles(Ye, ze) {
					const Xe = this.getComposer(Ye);
					if (!Xe) return [];
					const It = Xe.text,
						Lt = ze?.skipSemSearch ?? !1,
						[xt, Vt, Bt, Gt, Mt] = await Promise.all([
							this.recentFilesTrackerService.getRecentlyViewedFiles(ue.$h0b),
							Lt
								? Promise.resolve([])
								: this.repositoryService.parallelSearch(It, 30, 15, {
										raceNRequests: 6,
										fast: !0,
									}),
							Xe?.gitGraphFileSuggestions?.length
								? Promise.resolve(Xe.gitGraphFileSuggestions)
								: this.composerDataService.getContextGraphFilesFromFileSelections(
										Ye,
									),
							this.everythingProviderService.onlyLocalProvider?.runCommand(
								V.EditHistoryActions.CompileGlobalDiffTrajectories,
								{},
							),
							this.aiService.aiClient(),
						]),
						Ut = Vt.sort((Zt, ci) => ci.score - Zt.score)
							.map((Zt) => {
								if (Zt.codeBlock)
									return {
										uri: this.workspaceContextService.resolveRelativePath(
											Zt.codeBlock.relativeWorkspacePath,
										),
										score: Zt.score,
									};
							})
							.filter(s.$tg)
							.slice(0, ue.$i0b);
					if (!Xe) return [];
					const ei =
							Xe.context.fileSelections.length > 0
								? l.URI.revive(Xe.context.fileSelections[0].uri)
								: void 0,
						[mi, ii] = ei
							? await Promise.all([
									this.readFileContents(ei),
									{
										line: this.editorService.activeTextEditorControl?.getPosition()
											?.lineNumber,
										column:
											this.editorService.activeTextEditorControl?.getPosition()
												?.column,
									},
								])
							: [void 0, void 0],
						Dt = ei
							? {
									relativeWorkspacePath:
										this.workspaceContextService.asRelativePath(ei),
									contents: mi,
									cursorPosition: ii,
								}
							: void 0,
						Jt = [
							{ text: Xe.text, type: d.ConversationMessage_MessageType.HUMAN },
						],
						si =
							(Xe.text === void 0 || Xe.text.trim().length === 0) &&
							Xe.context.fileSelections.length === 1;
					return await (0, ue.$l0b)(
						Gt,
						Bt,
						xt,
						Ut,
						si,
						Dt,
						Jt,
						Mt,
						this.workspaceContextService,
						this.fileService,
					);
				}
				shouldRenameComposer(Ye) {
					const ze = Ye.conversation.filter(
						(Xe) => Xe.type === d.ConversationMessage_MessageType.AI,
					).length;
					return ze >= 1 && (!Ye.name || ze === 1);
				}
				async renameComposer(Ye) {
					const ze = this.getComposer(Ye);
					if (!(!ze || !this.shouldRenameComposer(ze)))
						try {
							const It = await (await this.aiService.aiClient()).nameTab({
								messages: ze.conversation,
							});
							if (It.name)
								await this.composerDataService.updateComposerDataAsync(
									Ye,
									(Lt) => Lt("name", It.name),
								);
							else {
								const Lt = ze.conversation[0];
								Lt &&
									Lt.type === d.ConversationMessage_MessageType.HUMAN &&
									(await this.composerDataService.updateComposerDataAsync(
										Ye,
										(xt) =>
											xt(
												"name",
												Lt.text
													.trim()
													.split(`
`)[0]
													.split(" ")
													.slice(0, 10)
													.join(" ") ?? "",
											),
									));
							}
						} catch (Xe) {
							console.error("Error renaming composer", Xe);
						}
				}
				maybeRunOnComposerSettled(Ye) {
					return this.isComposerSettled(Ye)
						? (this.onComposerSettled(Ye), !0)
						: !1;
				}
				isComposerSettled(Ye) {
					const ze = this.getComposer(Ye);
					if (!ze) return !0;
					const Xe = (
							this.composerDataService.getLastAiBubble(Ye)?.codeBlocks ?? []
						)
							.map((Vt) =>
								this.composerDataService.getComposerCodeBlock(
									Ye,
									Vt.uri,
									Vt.version,
								),
							)
							.filter(s.$tg),
						It = Xe.some((Vt) => Vt.status === "applying"),
						Lt = Xe.some((Vt) => Vt.status === "cancelled"),
						xt = ze.status === "generating";
					return !It && !xt && !Lt;
				}
				async onComposerSettled(Ye) {
					let ze = this.getComposer(Ye);
					if (!ze || ze.status === "aborted") return;
					console.log("[composer] on composer settled", Ye);
					const Xe = this.composerDataService.getLastHumanBubbleId(Ye),
						It = Xe
							? this.composerDataService.getComposerBubble(Ye, Xe)
							: void 0,
						Lt = this.composerDataService.getLastBubbleId(Ye),
						xt = this.composerDataService.getLastBubble(Ye);
					if (!Xe || !It) {
						console.error(
							"[composer] on settled was run without a previous human bubble",
						);
						return;
					}
					if (!Lt || !xt || xt.type !== d.ConversationMessage_MessageType.AI) {
						console.error(
							"[composer] on settled was run without a previous ai bubble",
						);
						return;
					}
					this.composerDataService.updateComposerDataSetStore(Ye, (Bt) =>
						Bt(
							"conversation",
							(Gt) => Gt.bubbleId === Lt,
							"timingInfo",
							(Gt) => {
								if (Gt) return { ...Gt, clientSettleTime: Date.now() };
							},
						),
					);
					const Vt = {
						composerId: Ye,
						humanBubbleId: Xe,
						aiBubbleId: Lt,
						isCapabilityIteration: !!It.isCapabilityIteration,
					};
					try {
						(await this.composerUtilsService.runCapabilitiesForProcess(
							Ye,
							"composer-settled",
							Vt,
						))
							? this.submitChatMaybeAbortCurrent(Ye, "", {
									isCapabilityIteration: !0,
								})
							: this.isComposerSettled(Ye) && this.onComposerDone(Ye, Vt);
					} catch (Bt) {
						console.error(
							"[composer] error running capabilities for composer-settled",
							Bt,
						);
					}
				}
				async onComposerDone(Ye, ze) {
					await this.composerUtilsService.runCapabilitiesForProcess(
						Ye,
						"composer-done",
						ze,
					);
				}
				dispose() {
					super.dispose();
				}
				registerNewCodeBlock(Ye, ze, Xe, It, Lt) {
					const xt = this.getComposer(Ye);
					if (!xt)
						throw new Error("[composer] No composer found for the given ID");
					const Vt = Lt?.bubbleId
							? xt.conversation.findIndex((Jt) => Jt.bubbleId === Lt.bubbleId)
							: xt.conversation.length - 1,
						Bt = xt.conversation[Vt];
					if (!Bt || Bt.type !== d.ConversationMessage_MessageType.AI)
						throw new Error("[composer] No AI message found");
					const Gt = ze.toString(),
						Mt = Bt.codeBlocks?.filter((Jt) => Jt.uri.toString() === Gt) ?? [],
						Ut = this.composerDataService.getLatestCodeBlockVersionForMessage(
							Ye,
							ze,
							Vt,
							It,
						);
					let ei,
						mi = [];
					const ii = Mt.findIndex((Jt) => Jt.codeBlockIdx > It);
					ii === -1
						? (ei = Ut + 1)
						: ((ei = Mt[ii].version),
							(mi = Mt.slice(ii).map((Jt) => ({
								version: Jt.version,
								codeBlockIdx: Jt.codeBlockIdx,
								messageIdx: Vt,
							}))));
					for (let Jt = Vt + 1; Jt < xt.conversation.length; Jt++) {
						const si =
							xt.conversation[Jt].codeBlocks?.filter(
								(Zt) => Zt.uri.toString() === Gt && Zt.version >= ei,
							) ?? [];
						mi.push(
							...si.map((Zt) => ({
								version: Zt.version,
								codeBlockIdx: Zt.codeBlockIdx,
								messageIdx: Jt,
							})),
						);
					}
					xt.status !== "generating" &&
						!Lt?.ignoreTurningCodeBlockToCodePill &&
						this._onTurningCodeBlockToCodePill.fire({
							uri: ze,
							version: ei,
							messageIndex: Vt,
						});
					for (let Jt = mi.length - 1; Jt >= 0; Jt--) {
						const { version: si, codeBlockIdx: Zt, messageIdx: ci } = mi[Jt];
						this.updateCodeBlockVersion(Ye, ze, si, si + 1, Zt, ci);
					}
					const Dt = {
						uri: ze,
						content: Xe,
						version: ei,
						status: Lt?.status ?? "none",
						isNotApplied: Lt?.isNotApplied,
						languageId: Lt?.languageId,
						codeBlockIdentifier: Lt?.codeBlockIdentifier,
					};
					return (
						this.composerDataService.updateComposerDataSetStore(Ye, (Jt) =>
							Jt("codeBlockData", Gt, (si) => {
								const Zt = [...(si || [])],
									ci = Zt.findIndex((ri) => ri.version >= ei);
								return ci === -1 ? Zt.push(Dt) : Zt.splice(ci, 0, Dt), Zt;
							}),
						),
						this.composerDataService.updateComposerDataSetStore(Ye, (Jt) =>
							Jt("conversation", Vt, "codeBlocks", (si) => {
								const Zt = [...(si || [])],
									ci = Zt.findIndex(($i) => $i.codeBlockIdx > It),
									ri = { uri: ze, version: ei, codeBlockIdx: It };
								return ci === -1 ? Zt.push(ri) : Zt.splice(ci, 0, ri), Zt;
							}),
						),
						this.composerDataService.updateComposerDataSetStore(Ye, (Jt) =>
							Jt("tabs", (si) => {
								const Zt = { type: "code", uri: ze, version: ei },
									ci = si.findIndex(
										(ri) => ri.type === "code" && ri.uri.toString() === Gt,
									);
								return (
									ci !== -1 && si.splice(ci, 1),
									[si[0], si[1], Zt, ...si.slice(2)]
								);
							}),
						),
						this.composerDataService.getComposerForceMode(Ye) !== "chat" &&
							Dt.version === 0 &&
							xt.originalModelLines[Gt] === void 0 &&
							this.composerUtilsService.getContentsOfFile(Ye, ze).then((si) => {
								(si = si ?? [" "]),
									this.composerDataService.updateComposerDataSetStore(
										Ye,
										(Zt) => Zt("originalModelLines", Gt, si),
									);
							}),
						Dt
					);
				}
				updateCodeBlockVersion(Ye, ze, Xe, It, Lt, xt) {
					if (!this.getComposer(Ye))
						throw new Error("[composer] No composer found for the given ID");
					const Bt = ze.toString();
					this.composerDataService.updateComposerDataSetStore(Ye, (Gt) =>
						Gt(
							"codeBlockData",
							Bt,
							(Mt) =>
								Mt?.map((Ut) =>
									Ut.version === Xe ? { ...Ut, version: It } : Ut,
								) ?? [],
						),
					),
						this.composerDataService.updateComposerDataSetStore(Ye, (Gt) =>
							Gt(
								"conversation",
								(Mt, Ut) => Ut === xt,
								"codeBlocks",
								(Mt) =>
									Mt?.map((Ut) =>
										Ut.uri.toString() === Bt &&
										Ut.version === Xe &&
										Ut.codeBlockIdx === Lt
											? { ...Ut, version: It }
											: Ut,
									) ?? [],
							),
						);
				}
				async openDiffEditor(Ye, ze) {
					const Xe = this.getComposer(Ye);
					if (!Xe) return;
					const It = Xe.tabs.find(
						(xt) => xt.type === "code" && xt.uri.toString() === ze.toString(),
					);
					if (!It) return;
					const Lt = this.editorService.findEditors({
						typeId: re.ComposerDiffEditorInput.ID,
						resource: ze,
					});
					if (Lt.length > 0) await this.editorService.openEditor(Lt[0].editor);
					else {
						const xt = Date.now(),
							Vt = l.URI.parse(`inmemory://diff/original/${xt}`),
							Bt =
								this.languageService.createByLanguageNameOrFilepathOrFirstLine(
									null,
									It.uri,
									void 0,
								);
						if (!Bt) return;
						const Gt = Xe.codeBlockData[ze.toString()]?.find(
								(ci) => ci.version === It.version,
							),
							Ut = (
								this.composerUtilsService.getCodeBlockLinesByDiff(
									Xe.composerId,
									ze,
									Gt?.originalModelDiffWrtV0 ?? [],
								) ?? []
							).join(`
`),
							ei = this.modelService.createModel(Ut, Bt, Vt),
							mi = this.instantiationService.createInstance(
								W.$S1b,
								Vt,
								"Original",
								void 0,
								Bt.languageId,
								Ut,
							),
							ii = this.instantiationService.createInstance(
								ae.$nec,
								ze,
								void 0,
								void 0,
								void 0,
								void 0,
								void 0,
								void 0,
							),
							Dt = this.composerDataService.getLatestCodeBlockVersion(
								Xe.composerId,
								ze,
							),
							Jt = It.version,
							si = this.instantiationService.createInstance(
								re.ComposerDiffEditorInput,
								`Review: ${this.labelService.getUriBasenameLabel(ze)}`,
								`${Jt + 1}/${Dt + 1}`,
								mi,
								ii,
								void 0,
							);
						await this.editorGroupsService.activeGroup.openEditor(si),
							si.register(this.D(ei)),
							si.register(this.D(ii)),
							si.register(
								this.D({
									dispose: () => {
										this.closeDiffEditor(ze);
									},
								}),
							);
					}
				}
				async closeDiffEditor(Ye) {
					const ze = this.editorService.findEditors({
						typeId: re.ComposerDiffEditorInput.ID,
						resource: Ye,
					});
					for (const Xe of ze) await this.editorService.closeEditor(Xe);
				}
				async openOrUpdateMultiDiffEditor(Ye) {
					const ze = this.composerDataService.selectedComposer;
					if (!ze) return;
					const Xe = this.composerUtilsService.constructDiffResources(
							ze.composerId,
						),
						It = this.editorService.findEditors({
							typeId: pe.$Lnc.ID,
							resource: Q.MULTI_DIFF_SOURCE,
						});
					if (Xe.length === 0) {
						It.length > 0 &&
							(await this.editorService.closeEditor({
								editor: It[0].editor,
								groupId: this.editorGroupsService.activeGroup.id,
							}));
						return;
					}
					const Lt = pe.$Lnc.fromResourceMultiDiffEditorInput(
						{
							label: "Review: Active Composer",
							resources: Xe,
							multiDiffSource: Q.MULTI_DIFF_SOURCE,
						},
						this.instantiationService,
					);
					It.length > 0
						? this.editorService.activeEditor === It[0].editor
							? await this.editorService.replaceEditors(
									[{ editor: It[0].editor, replacement: Lt }],
									this.editorGroupsService.activeGroup,
								)
							: (await this.editorService.closeEditor({
									editor: It[0].editor,
									groupId: this.editorGroupsService.activeGroup.id,
								}),
								await this.editorService.openEditor(Lt, {
									inactive: !!Ye?.skipOpen,
									pinned: !0,
								}))
						: Ye?.skipOpen ||
							(await this.editorService.openEditor(Lt, {
								inactive: !!Ye?.skipOpen,
								pinned: !0,
							}));
				}
				showComposerHistory() {
					this.reactiveStorageService.setNonPersistentStorage(
						"composerState",
						"shouldShowComposerHistory",
						!0,
					),
						this.composerViewsService.getComposerLocation(
							this.composerDataService.selectedComposerId,
						) !== "pane" && this.viewsService.openView(Me.$FX);
				}
				showChatHistory() {
					this.reactiveStorageService.setNonPersistentStorage(
						"composerState",
						"shouldShowChatHistory",
						!0,
					),
						this.composerViewsService.getComposerLocation(
							this.composerDataService.selectedChatId,
						) === "editor" && this.viewsService.openView(Me.$GX);
				}
				async insertIntoChat(Ye, ze) {
					this.updateComposer(Ye, { text: ze.message, richText: ze.message }),
						this.getInputDelegate(Ye).focus(),
						await this.submitChatMaybeAbortCurrent(
							this.composerDataService.selectedChatId,
							ze.message,
							{ usesCodebase: ze.isCodebaseContext },
						);
				}
				async applyCachedCodeBlock(Ye, ze, Xe, It) {
					const Lt = It?.applyToCurrentFile
						? this.editorService.activeEditor?.resource
						: ze;
					if (!Lt) return;
					let xt = this.composerDataService.getComposerCodeBlock(Ye, ze, Xe);
					if (
						!(!xt || !xt.isNotApplied) &&
						(xt.uri.toString() !== Lt.toString() &&
							(Xe = this.composerUtilsService.changeCodeBlockUri(
								Ye,
								ze,
								Lt,
								Xe,
							)),
						(xt = this.composerDataService.getComposerCodeBlock(Ye, Lt, Xe)),
						!!xt)
					) {
						if (
							(this.unregisterCachedCodeBlock(Ye, Lt, Xe),
							this.applicationComposerSettings.unification)
						) {
							if (xt.status === "applying")
								await this.reactivateApplyingCodeBlock(Ye, xt);
							else {
								let Vt = !1;
								const Bt = !!xt.newModelDiffWrtV0,
									Gt =
										this.reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
											(ei) => ei.uri.toString() === Lt.toString(),
										)?.id,
									Mt = await this.composerUtilsService.getContentsOfFile(
										Ye,
										Lt,
									),
									Ut = this.composerUtilsService.getCodeBlockOriginalModelLines(
										Ye,
										Lt,
										Xe,
									);
								Mt &&
									Ut &&
									Mt.join(`
`) !==
										Ut.join(`
`) &&
									(Vt = !0),
									Bt && !Vt
										? Gt
											? await this.turnApplyToInlineDiff(Ye, ze, Xe, {
													shouldChain: !0,
												})
											: await this.turnApplyToInlineDiff(Ye, ze, Xe)
										: this.runFastApplyOnCodeBlock(Ye, xt, {
												range: It?.range,
											});
							}
							return;
						}
						this.composerDataService.updateComposerCodeBlock(Ye, Lt, Xe, {
							newModelDiffWrtV0: void 0,
							originalModelDiffWrtV0: void 0,
							intermediateModelLines: void 0,
						}),
							this.runFastApplyOnCodeBlock(Ye, xt, { range: It?.range });
					}
				}
				handleAiEditToolCallFinished() {
					this._onDidFinishAiEditToolCall.fire();
				}
				getDebugInfo() {
					return {
						shouldOpenNextAppliedFile: this._shouldOpenNextAppliedFile,
						composerEditingStates: this._composerEditingStates,
						isTurningCachedCodeBlocksToDiffs:
							this._isTurningCachedCodeBlocksToDiffs,
						fileWatchers: this._fileWatchers,
						uriToCachedCodeBlocks: this._uriToCachedCodeBlocks,
						uriToCachedCodeBlocksQueue: this._uriToCachedCodeBlocksQueue,
						composerApplyingDiffsState: this._composerApplyingDiffsState,
						ignoreChangesToContext: this._ignoreChangesToContext,
						fastApplyQueue: this._fastApplyQueue,
						settings: this.applicationComposerSettings,
					};
				}
				async formatDiffHistory(Ye, ze, Xe, It) {
					if (Xe.getValueLength() > kt) return;
					const Lt =
						await this.everythingProviderService.onlyLocalProvider?.runCommand(
							V.ComposerEditHistoryActions.FormatDiffHistory,
							{
								uri: Xe.uri.toString(),
								changes: Ye.changes,
								behavior: { type: "whitespace compatible" },
								modelVersion: Xe.getVersionId(),
								eol: It,
							},
						);
					if (Lt === void 0)
						throw new Error(
							"Format Diff History not registered in extension host",
						);
					return Lt;
				}
				async registerModelListenerToEditorModel(Ye, ze) {
					const Xe = this.workspaceContextService.asRelativePath(ze.uri);
					if (
						[
							"vscode-notebook-cell",
							"file",
							"vscode-remote",
							"untitled",
							"inmemory-anysphere",
						].includes(ze.uri.scheme)
					) {
						if (
							(await this.everythingProviderService.onlyLocalProvider?.runCommand(
								V.ComposerEditHistoryActions.GetModelValue,
								{ relativePath: Xe },
							)) === void 0
						) {
							let Lt = ze.getValue();
							if (Lt !== void 0) {
								const xt =
									await this.everythingProviderService.onlyLocalProvider?.runCommand(
										V.ComposerEditHistoryActions.InitModel,
										{
											relativePath: Xe,
											currentModelValue: Lt,
											modelVersion: ze.getVersionId(),
										},
									);
							}
						}
						this.D(
							ze.onDidChangeContent(async (Lt) => {
								try {
									await this.formatDiffHistory(Lt, Ye, ze, ze.getEOL());
								} catch (xt) {
									console.error(
										"[ComposerService] formatDiffHistory error",
										xt,
									);
								}
							}),
						);
					}
				}
				async registerEditorListenersToEditor(Ye) {
					const ze = Ye.getId();
					this.editorListeners.set(ze, [
						Ye.onDidDispose(() => {
							this.editorListeners.get(ze)?.forEach((Xe) => Xe.dispose()),
								this.editorListeners.delete(ze);
						}),
					]);
					try {
						this.editorListeners.has(ze) || this.editorListeners.set(ze, []);
						const Xe = Ye.getModel();
						Xe !== null &&
							(await this.registerModelListenerToEditorModel(Ye, Xe)),
							this.editorListeners.has(ze) || this.editorListeners.set(ze, []),
							this.editorListeners.get(ze).push(
								this.D(
									Ye.onDidChangeModel(() => {
										const It = Ye.getModel();
										It !== null &&
											this.registerModelListenerToEditorModel(Ye, It);
									}),
								),
							),
							this.editorListeners.has(ze) || this.editorListeners.set(ze, []);
					} catch (Xe) {
						console.error("ComposerService: error", Xe);
					}
				}
				async initializeEditorListeners() {
					if (Rt) {
						for (
							let Ye = 0;
							Ye < 1e3 &&
							(await this.everythingProviderService.onlyLocalProvider?.runCommand(
								V.ComposerEditHistoryActions.Ack,
								null,
							)) !== !0;
							Ye++
						)
							await new Promise((ze) => setTimeout(ze, 50));
						for (let Ye of this._codeEditorService.listCodeEditors())
							await this.registerEditorListenersToEditor(Ye);
						this.editorListeners.set("global", [
							this.D(
								this._codeEditorService.onCodeEditorAdd((Ye) => {
									this.registerEditorListenersToEditor(Ye);
								}),
							),
						]);
					}
				}
				async applyCachedCodeBlocksOfLastMessage(Ye) {
					const ze = this.composerDataService.getLastAiBubble(Ye);
					if (ze)
						for (const Xe of ze.codeBlocks ?? [])
							await this.applyCachedCodeBlock(Ye, Xe.uri, Xe.version);
				}
				clearText(Ye) {
					this.composerDataService.updateComposerData(Ye, {
						text: "",
						richText: "",
					}),
						this._onShouldClearLexical.fire({ composerId: Ye });
				}
				async onInlineDiffsLoadedHook(Ye) {
					const ze = new Set();
					console.log("[balta] onInlineDiffsLoadedHook", Ye);
					for (const Xe of Ye) {
						if (
							Xe.composerId !== this.composerDataService.selectedComposerId ||
							ze.has(Xe.uri.toString())
						)
							continue;
						const It = await this.composerUtilsService.getContentsOfFile(
							Xe.composerId,
							Xe.uri,
						);
						if (!It) continue;
						const Lt = await this.composerUtilsService.computeLineDiffs(
							Xe.composerId,
							Xe.uri,
							It,
						);
						this.composerDataService.updateComposerCodeBlock(
							Xe.composerId,
							Xe.uri,
							Xe.version,
							{ newModelDiffWrtV0: Lt },
						);
						const xt = this.textFileService.isDirty(Xe.uri);
						await this.turnApplyToInlineDiff(
							Xe.composerId,
							Xe.uri,
							Xe.version,
							{ setOriginalModelLines: !0 },
						),
							ze.add(Xe.uri.toString()),
							xt || (await this.saveFile(Xe.uri, { force: !0 }));
					}
				}
				focus(Ye, ze) {
					this.composerViewsService.focus(Ye, ze);
				}
				getComposerLocation(Ye) {
					return this.composerViewsService.getComposerLocation(Ye);
				}
				setComposerLocation(Ye, ze) {
					this.composerViewsService.setComposerLocation(Ye, ze);
				}
				getInputDelegate(Ye) {
					return this.composerViewsService.getInputDelegate(Ye);
				}
				getPrevEditingBubbleInputDelegate(Ye) {
					return this.composerViewsService.getPrevEditingBubbleInputDelegate(
						Ye,
					);
				}
				hide(Ye) {
					this.composerViewsService.hide(Ye);
				}
				blur(Ye) {
					this.composerViewsService.blur(Ye);
				}
				focusPrevBubble(Ye) {
					this.composerViewsService.focusPrevBubble(Ye);
				}
				async showAndFocus(Ye, ze) {
					await this.composerViewsService.showAndFocus(Ye, ze);
				}
				isChat(Ye) {
					const ze = this.getComposer(Ye);
					return this.composerDataService.getComposerForceMode(Ye) === "chat";
				}
			};
			Ne(
				[(0, De.$KOb)("ComposerService.updateComposer")],
				Kt.prototype,
				"updateComposer",
				null,
			),
				Ne(
					[(0, De.$KOb)("ComposerService.getComposer")],
					Kt.prototype,
					"getComposer",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.getComposerEditingState")],
					Kt.prototype,
					"getComposerEditingState",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.getApplyingDiffsState")],
					Kt.prototype,
					"getApplyingDiffsState",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.resetComposerEditingState")],
					Kt.prototype,
					"resetComposerEditingState",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.unregisterCachedCodeBlock")],
					Kt.prototype,
					"unregisterCachedCodeBlock",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.unregisterAllCachedCodeBlocks")],
					Kt.prototype,
					"unregisterAllCachedCodeBlocks",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.registerCachedCodeBlock")],
					Kt.prototype,
					"registerCachedCodeBlock",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.markUriAsOutdated")],
					Kt.prototype,
					"markUriAsOutdated",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.isNewFile")],
					Kt.prototype,
					"isNewFile",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.createNewFileAndMaybeFolder")],
					Kt.prototype,
					"createNewFileAndMaybeFolder",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.checkToCreateNewFile")],
					Kt.prototype,
					"checkToCreateNewFile",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.deleteFolder")],
					Kt.prototype,
					"deleteFolder",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.deleteFile")],
					Kt.prototype,
					"deleteFile",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.deleteNewFileAndMaybeFolder")],
					Kt.prototype,
					"deleteNewFileAndMaybeFolder",
					null,
				),
				Ne(
					[
						(0, De.$KOb)(
							"ComposerService.removeFileFromNewlyCreatedFilesAndFolders",
						),
					],
					Kt.prototype,
					"removeFileFromNewlyCreatedFilesAndFolders",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.saveFiles")],
					Kt.prototype,
					"saveFiles",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.saveFile")],
					Kt.prototype,
					"saveFile",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.cleanUpComposer")],
					Kt.prototype,
					"cleanUpComposer",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.resetComposer")],
					Kt.prototype,
					"resetComposer",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.isComposerContextUntouched")],
					Kt.prototype,
					"isComposerContextUntouched",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.isComposerUntouched")],
					Kt.prototype,
					"isComposerUntouched",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.canComposerSubmit")],
					Kt.prototype,
					"canComposerSubmit",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.close")],
					Kt.prototype,
					"close",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.handleOpenComposerPane")],
					Kt.prototype,
					"handleOpenComposerPane",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.handleOpenComposerEditor")],
					Kt.prototype,
					"handleOpenComposerEditor",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.handleOpenComposerBar")],
					Kt.prototype,
					"handleOpenComposerBar",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.handleOpenComposer")],
					Kt.prototype,
					"handleOpenComposer",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.openComposer")],
					Kt.prototype,
					"openComposer",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.createComposer")],
					Kt.prototype,
					"createComposer",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.deleteComposer")],
					Kt.prototype,
					"deleteComposer",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.saveAll")],
					Kt.prototype,
					"saveAll",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.maybeUpdateFileSelectionsFromCmdI")],
					Kt.prototype,
					"maybeUpdateFileSelectionsFromCmdI",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.getCurrentFile")],
					Kt.prototype,
					"getCurrentFile",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.getInlineDiffServiceLookalikePure")],
					Kt.prototype,
					"getInlineDiffServiceLookalikePure",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.isCodeBlockRegisteredAsCached")],
					Kt.prototype,
					"isCodeBlockRegisteredAsCached",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.getTerminalText")],
					Kt.prototype,
					"getTerminalText",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.getUndoRedoUri")],
					Kt.prototype,
					"getUndoRedoUri",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.addContext")],
					Kt.prototype,
					"addContext",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.removeAllListContext")],
					Kt.prototype,
					"removeAllListContext",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.removeContext")],
					Kt.prototype,
					"removeContext",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.removeMention")],
					Kt.prototype,
					"removeMention",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.addBubbleContext")],
					Kt.prototype,
					"addBubbleContext",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.removeBubbleContext")],
					Kt.prototype,
					"removeBubbleContext",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.removeBubbleMention")],
					Kt.prototype,
					"removeBubbleMention",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.resetContext")],
					Kt.prototype,
					"resetContext",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.addContextToLastFocused")],
					Kt.prototype,
					"addContextToLastFocused",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.checkoutToCheckpoint")],
					Kt.prototype,
					"checkoutToCheckpoint",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.checkoutToLatest")],
					Kt.prototype,
					"checkoutToLatest",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.syncComposerWorktreeBranch")],
					Kt.prototype,
					"syncComposerWorktreeBranch",
					null,
				),
				Ne(
					[
						(0, De.$KOb)(
							"ComposerService.checkIfBackgroundComposerIsCorrupted",
						),
					],
					Kt.prototype,
					"checkIfBackgroundComposerIsCorrupted",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.isBackground")],
					Kt.prototype,
					"isBackground",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.getModelDetails")],
					Kt.prototype,
					"getModelDetails",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.showInfoBox")],
					Kt.prototype,
					"showInfoBox",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.getAllCachedCodeBlocks")],
					Kt.prototype,
					"getAllCachedCodeBlocks",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.readFileContents")],
					Kt.prototype,
					"readFileContents",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.getSortedCandidateFiles")],
					Kt.prototype,
					"getSortedCandidateFiles",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.shouldRenameComposer")],
					Kt.prototype,
					"shouldRenameComposer",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.renameComposer")],
					Kt.prototype,
					"renameComposer",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.maybeRunOnComposerSettled")],
					Kt.prototype,
					"maybeRunOnComposerSettled",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.isComposerSettled")],
					Kt.prototype,
					"isComposerSettled",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.onComposerSettled")],
					Kt.prototype,
					"onComposerSettled",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.registerNewCodeBlock")],
					Kt.prototype,
					"registerNewCodeBlock",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.updateCodeBlockVersion")],
					Kt.prototype,
					"updateCodeBlockVersion",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.openDiffEditor")],
					Kt.prototype,
					"openDiffEditor",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.closeDiffEditor")],
					Kt.prototype,
					"closeDiffEditor",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.openOrUpdateMultiDiffEditor")],
					Kt.prototype,
					"openOrUpdateMultiDiffEditor",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.showComposerHistory")],
					Kt.prototype,
					"showComposerHistory",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.showChatHistory")],
					Kt.prototype,
					"showChatHistory",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.insertIntoChat")],
					Kt.prototype,
					"insertIntoChat",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.applyCachedCodeBlock")],
					Kt.prototype,
					"applyCachedCodeBlock",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.handleAiEditToolCallFinished")],
					Kt.prototype,
					"handleAiEditToolCallFinished",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.getDebugInfo")],
					Kt.prototype,
					"getDebugInfo",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.formatDiffHistory")],
					Kt.prototype,
					"formatDiffHistory",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.registerModelListenerToEditorModel")],
					Kt.prototype,
					"registerModelListenerToEditorModel",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.registerEditorListenersToEditor")],
					Kt.prototype,
					"registerEditorListenersToEditor",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.initializeEditorListeners")],
					Kt.prototype,
					"initializeEditorListeners",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.applyCachedCodeBlocksOfLastMessage")],
					Kt.prototype,
					"applyCachedCodeBlocksOfLastMessage",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.applyCachedCodeBlocksOfLastMessage")],
					Kt.prototype,
					"onInlineDiffsLoadedHook",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.focus")],
					Kt.prototype,
					"focus",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.getComposerLocation")],
					Kt.prototype,
					"getComposerLocation",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.setComposerLocation")],
					Kt.prototype,
					"setComposerLocation",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.getInputDelegate")],
					Kt.prototype,
					"getInputDelegate",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.getPrevEditingBubbleInputDelegate")],
					Kt.prototype,
					"getPrevEditingBubbleInputDelegate",
					null,
				),
				Ne([(0, De.$KOb)("ComposerService.hide")], Kt.prototype, "hide", null),
				Ne([(0, De.$KOb)("ComposerService.blur")], Kt.prototype, "blur", null),
				Ne(
					[(0, De.$KOb)("ComposerService.focusPrevBubble")],
					Kt.prototype,
					"focusPrevBubble",
					null,
				),
				Ne(
					[(0, De.$KOb)("ComposerService.showAndFocus")],
					Kt.prototype,
					"showAndFocus",
					null,
				),
				(Kt = Ne(
					[
						j(0, q.$0zb),
						j(1, F.$Li),
						j(2, K.$Vi),
						j(3, ve.$Nfc),
						j(4, M.$MO),
						j(5, He.$zIb),
						j(6, Ce.$$9b),
						j(7, S.$27b),
						j(8, U.$ll),
						j(9, Ee.$IY),
						j(10, be.$i6b),
						j(11, Te.$EY),
						j(12, R.$6j),
						j(13, H.$7rb),
						j(14, Fe.$J6b),
						j(15, Ue.$HMb),
						j(16, se.IComposerDataService),
						j(17, Je.$x6b),
						j(18, L.$Cxb),
						j(19, ye.$iIb),
						j(20, $e.$lcc),
						j(21, Ke.$W6b),
						j(22, Be.$Q9b),
						j(23, ie.$H7b),
						j(24, O.$3Db),
						j(25, N.$kcc),
						j(26, Le.$$Db),
						j(27, Ie.$n6),
						j(28, G.$GN),
						j(29, A.$gj),
						j(30, D.$QO),
						j(31, k.$nM),
						j(32, oe.IComposerViewsService),
						j(33, x.$3N),
						j(34, Y.$Wcc),
						j(35, le.IComposerUtilsService),
						j(36, $.$dtb),
						j(37, fe.$N9b),
						j(38, Oe.$dzc),
						j(39, me.$ifc),
						j(40, Ae.$aM),
						j(41, je.$R0b),
						j(42, Ve.$Ycc),
						j(43, Ze.$hdc),
						j(44, et.$Tyc),
						j(45, ft.$_Y),
						j(46, bt.$kZ),
					],
					Kt,
				)),
				(0, z.$lK)(ee.IComposerService, Kt, z.InstantiationType.Delayed);
		},
	),
		define(
			de[4365],
			he([1, 0, 2, 2, 2, 13, 228, 54, 28, 1365, 135, 36]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Mdc = p);
				const h = (0, t.template)("<span><span></span><span></span><span>"),
					c = (0, t.template)(
						"<div><span>DEV ONLY</span>Ranked Contexts Viewer",
					),
					n = (0, t.template)("<pre>"),
					g = (o) => {
						const f = (0, a.$odc)(),
							b = (0, E.createMemo)(() =>
								o.item.intent?.type === C.ContextIntent_Type.AUTOMATIC
									? "auto"
									: o.item.intent?.type === C.ContextIntent_Type.USER_ADDED
										? "user"
										: "unspecified",
							),
							s = (0, E.createMemo)(() => {
								if (o.item.item.case === "fileChunk") {
									const l = (0, d.$sc)(o.item.item.value.relativeWorkspacePath),
										y = o.item.item.value.startLineNumber;
									return `${l}:${y}`;
								}
								return null;
							});
						return (() => {
							const l = h(),
								y = l.firstChild,
								$ = y.nextSibling,
								v = $.nextSibling;
							return (
								l.style.setProperty("display", "flex"),
								l.style.setProperty("align-items", "center"),
								l.style.setProperty("gap", "4px"),
								l.style.setProperty("color", "var(--vscode-editor-foreground)"),
								y.style.setProperty("opacity", "0.3"),
								y.style.setProperty(
									"background",
									"var(--vscode-input-placeholderForeground)",
								),
								y.style.setProperty("padding", "1px 2px"),
								y.style.setProperty("line-height", "90%"),
								y.style.setProperty("border-radius", "2px"),
								(0, w.insert)(y, b),
								(0, w.insert)($, () => o.item.item.case),
								v.style.setProperty("opacity", "0.5"),
								(0, w.insert)(v, s),
								l
							);
						})();
					};
				function p(o) {
					const f = (0, a.$odc)(),
						b = (0, E.createMemo)(() =>
							f.aiContextSessionService.getReactiveReadonlyContextSession(
								o.contextSessionUuid,
							),
						),
						s = (0, E.createMemo)(() => {
							const l = b()
								?.intents.map((y) => y.items)
								.flat()
								.filter(m.$tg);
							return l
								? l.sort(
										(y, $) => ($?.status?.score ?? 0) - (y?.status?.score ?? 0),
									)
								: [];
						});
					return (0, i.createComponent)(r.$ecc, {
						get title() {
							return (() => {
								const l = c(),
									y = l.firstChild;
								return (
									y.style.setProperty("background", "teal"),
									y.style.setProperty("color", "white"),
									y.style.setProperty("padding", "1px 2px"),
									y.style.setProperty("line-height", "90%"),
									y.style.setProperty("border-radius", "2px"),
									y.style.setProperty("margin-right", "4px"),
									l
								);
							})();
						},
						collapseByDefault: !0,
						renderItemBorders: !0,
						collapseOthersOnAdd: !0,
						get isRunning() {
							return o.isRunning;
						},
						get stopRunning() {
							return o.stopRunning;
						},
						get startRunning() {
							return o.startRunning;
						},
						get isFocused() {
							return o.isFocused;
						},
						get stopFocused() {
							return o.stopFocused;
						},
						get containerRef() {
							return o.containerRef;
						},
						get each() {
							return s();
						},
						class: "prompt-bar-selection-container",
						style: { "background-color": "#606d7822" },
						type: "all-context-items-by-score",
						get show() {
							return s().length > 0;
						},
						boxPropsFunc: (l) => ({
							title: (0, i.createComponent)(g, {
								get item() {
									return l.item;
								},
							}),
							subTitle: `Score: ${l.status?.score === void 0 ? "no score" : l.status?.score}`,
							onTitleClick: () => {
								console.log(JSON.parse(JSON.stringify(l)));
							},
						}),
						children: (l) =>
							(0, i.createComponent)(u.$w0b, {
								scrollingDirection: "both",
								get children() {
									const y = n();
									return (
										y.style.setProperty("min-height", "100px"),
										y.style.setProperty("padding", "0.5rem"),
										(0, w.insert)(y, () => JSON.stringify(l.item, null, 2)),
										y
									);
								},
							}),
					});
				}
			},
		),
		define(
			de[2e3],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 13, 228, 14, 12, 19, 26, 9, 116, 1365,
				156, 523, 4181, 135, 36, 2537,
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
					(e.$Idc = F),
					(e.$Jdc = ne),
					(e.$Kdc = ee),
					(e.$Ldc = _);
				const v = (0, t.template)("<div>"),
					S = (0, t.template)(
						'<div class="context-file-mode-selector"><div class="context-file-mode-selector-tooltip">Change mode',
					),
					I = (0, t.template)("<div>Change mode"),
					T = (0, t.template)("<div>Chat history"),
					P = (0, t.template)("<div><div></div><div>"),
					k = (0, t.template)("<div>todo: "),
					L = (0, t.template)("<div><code>"),
					D = (0, t.template)("<div>:<pre><code>"),
					M = (0, t.template)("<div>Nearby definitions"),
					N = (0, t.template)(
						'<div class="context-file-mode-selector-tooltip"><span>View context',
					),
					A = (0, t.template)(
						'<div class="clickable context-view-context-button"><span>',
					),
					R = (0, t.template)("<span>(hold <!>)"),
					O = (0, t.template)("<div><div></div><div><span></span></div><div>"),
					B = (0, t.template)("<div>View context");
				function U(te, Q) {
					if (te === Q) return !0;
					if (
						typeof te != "object" ||
						typeof Q != "object" ||
						te == null ||
						Q == null
					)
						return !1;
					const Z = Object.keys(te),
						se = Object.keys(Q);
					if (Z.length !== se.length) return !1;
					for (const re of Z)
						if (!se.includes(re) || !U(te[re], Q[re])) return !1;
					return !0;
				}
				let z = !0;
				z = !1;
				function F(te) {
					const Q = (0, $.$odc)(),
						Z = (0, u.createMemo)(() =>
							Q.aiContextSessionService.getReactiveReadonlyContextSession(
								te.contextSessionUuid,
							),
						),
						[se, re] = (0, u.createSignal)(!1),
						le = (0, u.createMemo)(
							() =>
								Z()?.intents.filter(
									(ge) => ge.intent.type === a.ContextIntent_Type.USER_ADDED,
								) ?? [],
						),
						oe = (0, u.createMemo)(() =>
							le().filter((ge) => ge.intent.intent.case === "codeSelection"),
						),
						ae = (0, u.createMemo)(() =>
							le().filter((ge) => ge.intent.intent.case === "file"),
						),
						pe = (0, u.createMemo)(() =>
							le().filter((ge) => ge.intent.intent.case === "cmdKDefinitions"),
						),
						$e = (0, u.createMemo)(() =>
							le().filter((ge) => ge.intent.intent.case === "chatHistory"),
						),
						ye = (0, u.createMemo)(
							() =>
								Z()?.intents.filter(
									(ge) => ge.intent.type === a.ContextIntent_Type.AUTOMATIC,
								) ?? [],
						),
						[ue, fe] = (0, u.createSignal)(void 0),
						me = (0, u.createMemo)(() => ({
							class: "prompt-bar-selection-container",
							renderItemBorders: !0,
							stopRunning: () => te.setRunningSection?.(null),
							stopFocused: te.stopFocusedSection,
							containerRef: te.containerRef,
							collapseOthersOnAdd: !0,
							collapseByDefault: te.collapseByDefault ?? !1,
						})),
						ve = (0, u.createMemo)(() => le().length > 0);
					return (0, m.createComponent)(u.Show, {
						get when() {
							return !z && Z();
						},
						get fallback() {
							return (() => {
								const ge = v();
								return ge.style.setProperty("height", "4px"), ge;
							})();
						},
						children: (ge) => [
							(0, m.createComponent)(u.Show, {
								get when() {
									return pe().length > 0;
								},
								get children() {
									return (0, m.createComponent)(
										f.$ecc,
										(0, d.mergeProps)(
											{
												title: "Definitions",
												get each() {
													return pe();
												},
												get isFocused() {
													return te.focusedSection === "ctx-definitions";
												},
												get isRunning() {
													return te.runningSection === "ctx-definitions";
												},
												type: "intent-definition",
												get show() {
													return pe().length > 0;
												},
												startRunning: () =>
													te.setRunningSection?.("ctx-definitions"),
											},
											me,
											{
												boxPropsFunc: (be) => ({
													title: "Nearby definitions",
													icon: g.ThemeIcon.asClassName(
														h.$ak.symbolTypeParameter,
													),
													customToolbar: (0, m.createComponent)(ee, {
														intent: be,
														get contextSession() {
															return ge();
														},
													}),
													onRemove: () => {
														Q.aiContextSessionService.updateContextSession(
															ge().uuid,
															{
																removedIntentUuids: [be.intent.uuid],
																upsertedIntents: [],
																rerankEndpoint: void 0,
															},
														);
													},
													alwaysShowToolbar: !0,
												}),
												children: (be) =>
													(0, m.createComponent)(Y, { intent: be }),
											},
										),
									);
								},
							}),
							(0, m.createComponent)(u.Show, {
								get when() {
									return $e().length > 0;
								},
								get children() {
									return (0, m.createComponent)(
										f.$ecc,
										(0, d.mergeProps)(
											{
												title: "Chat history",
												get each() {
													return $e();
												},
												get show() {
													return $e().length > 0;
												},
												get isFocused() {
													return te.focusedSection === "ctx-chat-history";
												},
												get isRunning() {
													return te.runningSection === "ctx-chat-history";
												},
												startRunning: () =>
													te.setRunningSection?.("ctx-chat-history"),
												type: "intent-chat-history",
											},
											me,
											{
												boxPropsFunc: (be) => ({
													title: "Chat history",
													icon: g.ThemeIcon.asClassName(
														h.$ak.commentDiscussion,
													),
													customToolbar: (0, m.createComponent)(ee, {
														intent: be,
														get contextSession() {
															return ge();
														},
													}),
													onRemove: () => {
														Q.aiContextSessionService.updateContextSession(
															ge().uuid,
															{
																removedIntentUuids: [be.intent.uuid],
																upsertedIntents: [],
																rerankEndpoint: void 0,
															},
														);
													},
													alwaysShowToolbar: !0,
												}),
												children: (be) =>
													(0, m.createComponent)(W, { intent: be }),
											},
										),
									);
								},
							}),
							(0, m.createComponent)(u.Show, {
								get when() {
									return oe().length > 0;
								},
								get children() {
									return (0, m.createComponent)(
										f.$ecc,
										(0, d.mergeProps)(
											{
												title: "Code",
												get each() {
													return oe();
												},
												get show() {
													return oe().length > 0;
												},
												type: "intent-code",
												get isFocused() {
													return te.focusedSection === "ctx-code";
												},
												startRunning: () => te.setRunningSection?.("ctx-code"),
												get isRunning() {
													return te.runningSection === "ctx-code";
												},
											},
											me,
											{
												boxPropsFunc: (be) => {
													const Ce =
															Q.workspaceContextService.resolveRelativePath(
																be.intent.intent.value.relativeWorkspacePath,
															),
														Le = () => {
															Q.openerService.open(Ce, {
																openToSide: !1,
																editorOptions: {
																	revealIfVisible: !0,
																	revealIfOpened: !0,
																	source: o.EditorOpenSource.USER,
																},
																fromUserGesture: !0,
															});
														};
													return {
														title: (0, n.$kh)(Ce),
														icon: (0, m.createComponent)(b.$k$b, {
															get fileName() {
																return Ce.fsPath;
															},
															get workspaceContextService() {
																return Q.workspaceContextService;
															},
															get modelService() {
																return Q.modelService;
															},
															get languageService() {
																return Q.languageService;
															},
														}),
														subTitle:
															be.intent.intent.value.relativeWorkspacePath,
														onTitleClick: Le,
														customToolbar: (0, m.createComponent)(ee, {
															intent: be,
															get contextSession() {
																return ge();
															},
														}),
														onRemove: () => {
															Q.aiContextSessionService.updateContextSession(
																ge().uuid,
																{
																	removedIntentUuids: [be.intent.uuid],
																	upsertedIntents: [],
																	rerankEndpoint: void 0,
																},
															);
														},
														alwaysShowToolbar: !0,
													};
												},
												children: (be) =>
													(0, m.createComponent)(K, { intent: be }),
											},
										),
									);
								},
							}),
							(0, m.createComponent)(u.Show, {
								get when() {
									return ae().length > 0;
								},
								get children() {
									return (0, m.createComponent)(
										f.$ecc,
										(0, d.mergeProps)(
											{
												title: "Files",
												get each() {
													return ae();
												},
												get show() {
													return ae().length > 0;
												},
												type: "intent-file",
											},
											me,
											{
												get isFocused() {
													return te.focusedSection === "ctx-files";
												},
												startRunning: () => te.setRunningSection?.("ctx-files"),
												get isRunning() {
													return te.runningSection === "ctx-files";
												},
												onKeyboardDown: (be, Ce) => {
													if (
														(be.key === "m" || be.key === "/") &&
														(be.ctrlKey || be.metaKey)
													) {
														be.preventDefault(), be.stopImmediatePropagation();
														const Le = Object.keys(a.ContextIntent_File_Mode)
																.map((He) => parseInt(He))
																.filter((He) => !isNaN(He)),
															Fe = Ce.intent.intent.value.mode,
															Oe = Le.indexOf(Fe);
														if (Oe === -1) {
															console.warn("wot?");
															return;
														}
														const xe =
															Le[
																((be.shiftKey && be.key !== "/"
																	? Oe - 1
																	: Oe + 1) +
																	Le.length) %
																	Le.length
															];
														Q.aiContextSessionService.updateContextSession(
															ge().uuid,
															{
																removedIntentUuids: [],
																upsertedIntents: [
																	{
																		uuid: Ce.intent.uuid,
																		type: Ce.intent.type,
																		intent: {
																			case: "file",
																			value: {
																				relativeWorkspacePath:
																					Ce.intent.intent.value
																						.relativeWorkspacePath,
																				mode: xe,
																			},
																		},
																	},
																],
																rerankEndpoint: void 0,
															},
														);
													}
												},
												boxPropsFunc: (be, Ce, Le) => {
													const Fe =
															Q.workspaceContextService.resolveRelativePath(
																be.intent.intent.value.relativeWorkspacePath,
															),
														Oe = () => {
															Q.openerService.open(Fe, {
																openToSide: !1,
																editorOptions: {
																	revealIfVisible: !0,
																	revealIfOpened: !0,
																	source: o.EditorOpenSource.USER,
																},
																fromUserGesture: !0,
															});
														};
													return {
														title: (0, n.$kh)(Fe),
														icon: (0, m.createComponent)(b.$k$b, {
															get fileName() {
																return Fe.fsPath;
															},
															get workspaceContextService() {
																return Q.workspaceContextService;
															},
															get modelService() {
																return Q.modelService;
															},
															get languageService() {
																return Q.languageService;
															},
														}),
														subTitle:
															be.intent.intent.value.relativeWorkspacePath,
														onTitleClick: Oe,
														customToolbar: Le
															? []
															: [
																	(() => {
																		const xe = S(),
																			He = xe.firstChild;
																		return (
																			xe.addEventListener("click", (Ke) => {
																				Ke.stopPropagation();
																			}),
																			xe.style.setProperty(
																				"position",
																				"relative",
																			),
																			He.style.setProperty("z-index", "100"),
																			He.style.setProperty("height", "17px"),
																			He.style.setProperty(
																				"position",
																				"absolute",
																			),
																			He.style.setProperty(
																				"top",
																				"calc(100% + 4px)",
																			),
																			He.style.setProperty("left", "50%"),
																			He.style.setProperty(
																				"transform",
																				"translateX(-50%)",
																			),
																			He.style.setProperty(
																				"padding",
																				"2px 4px",
																			),
																			He.style.setProperty(
																				"border-radius",
																				"2px",
																			),
																			He.style.setProperty(
																				"background-color",
																				"var(--vscode-editorWidget-background)",
																			),
																			He.style.setProperty(
																				"border",
																				"1px solid var(--vscode-input-border)",
																			),
																			He.style.setProperty(
																				"font-size",
																				"0.6rem",
																			),
																			He.style.setProperty("flex", "1"),
																			(0, E.insert)(
																				xe,
																				(0, m.createComponent)(s.$Mbc, {
																					get value() {
																						return a.ContextIntent_File_Mode[
																							be.intent.intent.value.mode
																						];
																					},
																					buttonStyle: {
																						"font-size": "0.8em",
																						"margin-right": "3px",
																					},
																					get items() {
																						return Object.keys(
																							a.ContextIntent_File_Mode,
																						)
																							.flatMap((Ke) => {
																								const Je = parseInt(Ke);
																								return isNaN(Je) ? [] : [Je];
																							})
																							.map((Ke) => ({
																								id: a.ContextIntent_File_Mode[
																									Ke
																								],
																								label: (() => {
																									switch (Ke) {
																										case a
																											.ContextIntent_File_Mode
																											.FULL:
																											return "full file";
																										case a
																											.ContextIntent_File_Mode
																											.OUTLINE:
																											return "outline";
																										case a
																											.ContextIntent_File_Mode
																											.CHUNKS:
																											return "chunks";
																										case a
																											.ContextIntent_File_Mode
																											.UNSPECIFIED:
																											return "auto";
																										default:
																											return "unknown";
																									}
																								})(),
																							}));
																					},
																					origLabel: "",
																					useLabel: !0,
																					onSelect: (Ke) => {
																						const Je =
																							a.ContextIntent_File_Mode[Ke];
																						Q.aiContextSessionService.updateContextSession(
																							ge().uuid,
																							{
																								removedIntentUuids: [],
																								upsertedIntents: [
																									{
																										uuid: be.intent.uuid,
																										type: be.intent.type,
																										intent: {
																											case: "file",
																											value: {
																												relativeWorkspacePath:
																													be.intent.intent.value
																														.relativeWorkspacePath,
																												mode: Je,
																											},
																										},
																									},
																								],
																								rerankEndpoint: void 0,
																							},
																						);
																					},
																				}),
																				null,
																			),
																			xe
																		);
																	})(),
																	(0, m.createComponent)(ee, {
																		intent: be,
																		get contextSession() {
																			return ge();
																		},
																	}),
																],
														onRemove: () => {
															Q.aiContextSessionService.updateContextSession(
																ge().uuid,
																{
																	removedIntentUuids: [be.intent.uuid],
																	upsertedIntents: [],
																	rerankEndpoint: void 0,
																},
															);
														},
														alwaysShowToolbar: !0,
													};
												},
												children: (be) =>
													(0, m.createComponent)(q, { intent: be }),
											},
										),
									);
								},
							}),
							(0, m.createComponent)(u.Show, {
								get when() {
									return ve() && te.bottomHeightWhenVisible;
								},
								get children() {
									const be = v();
									return (
										(0, C.effect)(() =>
											`${te.bottomHeightWhenVisible}px` != null
												? be.style.setProperty(
														"height",
														`${te.bottomHeightWhenVisible}px`,
													)
												: be.style.removeProperty("height"),
										),
										be
									);
								},
							}),
						],
					});
				}
				function x(te) {
					return (() => {
						const Q = v();
						return (
							Q.style.setProperty(
								"border",
								"1px solid var(--vscode-input-border)",
							),
							(0, E.insert)(
								Q,
								(0, m.createComponent)(u.Switch, {
									get children() {
										return [
											(0, m.createComponent)(u.Match, {
												get when() {
													return (
														te.intent.intent.intent.case === "cmdKDefinitions"
													);
												},
												get children() {
													return (0, m.createComponent)(ie, {
														get intent() {
															return te.intent;
														},
														get contextSession() {
															return te.contextSession;
														},
													});
												},
											}),
											(0, m.createComponent)(u.Match, {
												get when() {
													return te.intent.intent.intent.case === "chatHistory";
												},
												get children() {
													return (0, m.createComponent)(J, {
														get intent() {
															return te.intent;
														},
														get contextSession() {
															return te.contextSession;
														},
													});
												},
											}),
											(0, m.createComponent)(u.Match, {
												get when() {
													return te.intent.intent.intent.case === "file";
												},
												get children() {
													return (0, m.createComponent)(H, {
														get intent() {
															return te.intent;
														},
														get contextSession() {
															return te.contextSession;
														},
													});
												},
											}),
											(0, m.createComponent)(u.Match, {
												get when() {
													return (
														te.intent.intent.intent.case === "codeSelection"
													);
												},
												get children() {
													return (0, m.createComponent)(G, {
														get intent() {
															return te.intent;
														},
														get contextSession() {
															return te.contextSession;
														},
													});
												},
											}),
										];
									},
								}),
							),
							Q
						);
					})();
				}
				function H(te) {
					const Q = (0, $.$odc)(),
						Z = (0, u.createMemo)(() =>
							Q.workspaceContextService.resolveRelativePath(
								te.intent.intent.intent.value.relativeWorkspacePath,
							),
						),
						se = () => {
							Q.openerService.open(Z(), {
								openToSide: !1,
								editorOptions: {
									revealIfVisible: !0,
									revealIfOpened: !0,
									source: o.EditorOpenSource.USER,
								},
								fromUserGesture: !0,
							});
						},
						[re, le] = (0, u.createSignal)(!1);
					return [
						(0, m.createComponent)(_, {
							get contextSession() {
								return te.contextSession;
							},
							get leftItems() {
								return [
									(0, m.createComponent)(b.$k$b, {
										get fileName() {
											return Z().fsPath;
										},
										get workspaceContextService() {
											return Q.workspaceContextService;
										},
										get modelService() {
											return Q.modelService;
										},
										get languageService() {
											return Q.languageService;
										},
									}),
									(() => {
										const oe = v();
										return (
											oe.addEventListener("click", se),
											oe.style.setProperty("cursor", "pointer"),
											(0, E.insert)(oe, () => (0, n.$kh)(Z())),
											oe
										);
									})(),
									(() => {
										const oe = v();
										return (
											oe.addEventListener("click", se),
											oe.style.setProperty("opacity", "0.5"),
											oe.style.setProperty("margin-left", "5px"),
											oe.style.setProperty("flex-shrink", "1"),
											oe.style.setProperty("min-width", "0"),
											oe.style.setProperty("cursor", "pointer"),
											oe.style.setProperty("font-size", "0.8em"),
											(0, E.insert)(
												oe,
												(0, m.createComponent)(y.$w0b, {
													scrollingDirection: "horizontal",
													style: { width: "100%", "white-space": "nowrap" },
													get children() {
														return te.intent.intent.intent.value
															.relativeWorkspacePath;
													},
												}),
											),
											oe
										);
									})(),
								];
							},
							get rightItems() {
								return (() => {
									const oe = v();
									return (
										oe.addEventListener("mouseleave", () => le(!1)),
										oe.addEventListener("mouseenter", () => le(!0)),
										oe.style.setProperty("position", "relative"),
										(0, E.insert)(
											oe,
											(() => {
												const ae = (0, r.memo)(() => !!re());
												return () =>
													ae() &&
													(() => {
														const pe = I();
														return (
															pe.style.setProperty("z-index", "100"),
															pe.style.setProperty("position", "absolute"),
															pe.style.setProperty("top", "22px"),
															pe.style.setProperty("right", "0px"),
															pe.style.setProperty("padding", "2px 4px"),
															pe.style.setProperty("border-radius", "2px"),
															pe.style.setProperty(
																"background-color",
																"var(--vscode-editorWidget-background)",
															),
															pe.style.setProperty(
																"border",
																"1px solid var(--vscode-input-border)",
															),
															pe.style.setProperty("font-size", "1em"),
															pe.style.setProperty("width", "fit-content"),
															pe.style.setProperty("white-space", "nowrap"),
															pe
														);
													})();
											})(),
											null,
										),
										(0, E.insert)(
											oe,
											(0, m.createComponent)(s.$Mbc, {
												get value() {
													return a.ContextIntent_File_Mode[
														te.intent.intent.intent.value.mode
													];
												},
												buttonStyle: {
													"font-size": "0.8em",
													"margin-right": "3px",
												},
												get items() {
													return Object.keys(a.ContextIntent_File_Mode)
														.flatMap((ae) => {
															const pe = parseInt(ae);
															return isNaN(pe) ? [] : [pe];
														})
														.map((ae) => ({
															id: a.ContextIntent_File_Mode[ae],
															label: (() => {
																switch (ae) {
																	case a.ContextIntent_File_Mode.FULL:
																		return "full file";
																	case a.ContextIntent_File_Mode.OUTLINE:
																		return "outline";
																	case a.ContextIntent_File_Mode.CHUNKS:
																		return "chunks";
																	case a.ContextIntent_File_Mode.UNSPECIFIED:
																		return "auto";
																	default:
																		return "unknown";
																}
															})(),
														}));
												},
												origLabel: "",
												useLabel: !0,
												onSelect: (ae) => {
													const pe = a.ContextIntent_File_Mode[ae];
													Q.aiContextSessionService.updateContextSession(
														te.contextSession.uuid,
														{
															removedIntentUuids: [],
															upsertedIntents: [
																{
																	uuid: te.intent.intent.uuid,
																	type: te.intent.intent.type,
																	intent: {
																		case: "file",
																		value: {
																			relativeWorkspacePath:
																				te.intent.intent.intent.value
																					.relativeWorkspacePath,
																			mode: pe,
																		},
																	},
																},
															],
															rerankEndpoint: void 0,
														},
													);
												},
											}),
											null,
										),
										oe
									);
								})();
							},
							get intent() {
								return te.intent;
							},
						}),
						(0, m.createComponent)(l.$Hdc, {
							get content() {
								return { case: "file", uri: Z() };
							},
							style: {
								border: "none",
								background: "var(--vscode-editor-background)",
							},
						}),
					];
				}
				function q(te) {
					const Q = (0, $.$odc)(),
						Z = (0, u.createMemo)(() =>
							Q.workspaceContextService.resolveRelativePath(
								te.intent.intent.intent.value.relativeWorkspacePath,
							),
						);
					return (0, m.createComponent)(l.$Hdc, {
						get content() {
							return { case: "file", uri: Z() };
						},
						style: {
							border: "none",
							background: "var(--vscode-editor-background)",
						},
					});
				}
				function V() {
					let te = "abcdefghijklmnopqrstuvwxyz",
						Q = "";
					for (let Z = 0; Z < 10; Z++)
						Q += te.charAt(Math.floor(Math.random() * te.length));
					return p.URI.parse(`aichat-code-block-anysphere://${Q}`);
				}
				function G(te) {
					const Q = (0, $.$odc)(),
						Z = (0, u.createMemo)(() => te.intent);
					let se = "";
					const le = /```(\w*)/.exec(Z().intent.intent.value.text);
					le && (se = le[1]);
					const oe =
						Q.languageService.createByLanguageNameOrFilepathOrFirstLine(
							se,
							null,
							void 0,
						);
					Q.languageService.createByLanguageNameOrFilepathOrFirstLine(
						se,
						null,
						void 0,
					);
					let ae = V();
					const pe = Z()
							.intent.intent.value.text.split(`
`)
							.slice(1, -1),
						$e = Q.modelService.createModel(
							pe.join(`
`),
							oe,
							ae,
							!1,
						),
						ye = (0, u.createMemo)(() =>
							Q.workspaceContextService.resolveRelativePath(
								Z().intent.intent.value.relativeWorkspacePath,
							),
						),
						ue = () => {
							Q.openerService.open(ye(), {
								openToSide: !1,
								editorOptions: {
									revealIfVisible: !0,
									revealIfOpened: !0,
									source: o.EditorOpenSource.USER,
								},
								fromUserGesture: !0,
							});
						};
					return [
						(0, m.createComponent)(_, {
							get contextSession() {
								return te.contextSession;
							},
							get leftItems() {
								return [
									(0, m.createComponent)(b.$k$b, {
										get fileName() {
											return ye().fsPath;
										},
										get workspaceContextService() {
											return Q.workspaceContextService;
										},
										get modelService() {
											return Q.modelService;
										},
										get languageService() {
											return Q.languageService;
										},
									}),
									(() => {
										const fe = v();
										return (
											fe.addEventListener("click", ue),
											fe.style.setProperty("cursor", "pointer"),
											(0, E.insert)(fe, () => (0, n.$kh)(ye())),
											fe
										);
									})(),
									(() => {
										const fe = v();
										return (
											fe.addEventListener("click", ue),
											fe.style.setProperty("opacity", "0.5"),
											fe.style.setProperty("margin-left", "5px"),
											fe.style.setProperty("flex-shrink", "1"),
											fe.style.setProperty("min-width", "0"),
											fe.style.setProperty("cursor", "pointer"),
											fe.style.setProperty("font-size", "0.8em"),
											(0, E.insert)(
												fe,
												(0, m.createComponent)(y.$w0b, {
													scrollingDirection: "horizontal",
													style: { width: "100%", "white-space": "nowrap" },
													get children() {
														return te.intent.intent.intent.value
															.relativeWorkspacePath;
													},
												}),
											),
											fe
										);
									})(),
								];
							},
							get rightItems() {
								return [];
							},
							get intent() {
								return te.intent;
							},
						}),
						(0, m.createComponent)(l.$Hdc, {
							content: { case: "model", model: $e },
							style: {
								border: "none",
								background: "var(--vscode-editor-background)",
							},
						}),
					];
				}
				function K(te) {
					const Q = (0, $.$odc)(),
						Z = (0, u.createMemo)(() => te.intent);
					let se = "";
					const le = /```(\w*)/.exec(Z().intent.intent.value.text);
					le && (se = le[1]);
					const oe =
						Q.languageService.createByLanguageNameOrFilepathOrFirstLine(
							se,
							null,
							void 0,
						);
					Q.languageService.createByLanguageNameOrFilepathOrFirstLine(
						se,
						null,
						void 0,
					);
					let ae = V();
					const pe = Z()
							.intent.intent.value.text.split(`
`)
							.slice(1, -1),
						$e = Q.modelService.createModel(
							pe.join(`
`),
							oe,
							ae,
							!1,
						);
					return (0, m.createComponent)(l.$Hdc, {
						content: { case: "model", model: $e },
						style: {
							border: "none",
							background: "var(--vscode-editor-background)",
						},
					});
				}
				function J(te) {
					return [
						(0, m.createComponent)(_, {
							get contextSession() {
								return te.contextSession;
							},
							get leftItems() {
								return [
									(() => {
										const Q = v();
										return (
											Q.style.setProperty("font-size", "1em"),
											Q.style.setProperty("margin-right", "5px"),
											Q.style.setProperty("margin-left", "2px"),
											(0, C.effect)(() =>
												(0, w.className)(
													Q,
													g.ThemeIcon.asClassName(h.$ak.commentDiscussion),
												),
											),
											Q
										);
									})(),
									T(),
								];
							},
							get rightItems() {
								return [];
							},
							get intent() {
								return te.intent;
							},
						}),
						(0, m.createComponent)(y.$w0b, {
							scrollingDirection: "horizontal",
							get children() {
								const Q = v();
								return (
									Q.style.setProperty("display", "flex"),
									Q.style.setProperty("flex-direction", "row"),
									Q.style.setProperty("height", "150px"),
									(0, E.insert)(
										Q,
										(0, m.createComponent)(u.For, {
											get each() {
												return te.intent.items;
											},
											children: (Z) =>
												(0, m.createComponent)(u.Show, {
													get when() {
														return (
															Z.item.item.case === "chatHistory" &&
															Z.item.item.value
														);
													},
													children: (se) =>
														(0, m.createComponent)(X, {
															get item() {
																return se();
															},
														}),
												}),
										}),
									),
									Q
								);
							},
						}),
					];
				}
				function W(te) {
					return (0, m.createComponent)(y.$w0b, {
						scrollingDirection: "horizontal",
						get children() {
							const Q = v();
							return (
								Q.style.setProperty("display", "flex"),
								Q.style.setProperty("flex-direction", "row"),
								Q.style.setProperty("height", "150px"),
								(0, E.insert)(
									Q,
									(0, m.createComponent)(u.For, {
										get each() {
											return te.intent.items;
										},
										children: (Z) =>
											(0, m.createComponent)(u.Show, {
												get when() {
													return (
														Z.item.item.case === "chatHistory" &&
														Z.item.item.value
													);
												},
												children: (se) =>
													(0, m.createComponent)(X, {
														get item() {
															return se();
														},
													}),
											}),
									}),
								),
								Q
							);
						},
					});
				}
				function X(te) {
					const Q = (0, u.createMemo)(() => {
						const Z = [],
							se = [];
						let re = te.item;
						for (; re !== void 0; )
							Z.push(re.userMessage),
								se.push(re.assistantResponse),
								(re = re.chatHistory);
						return (
							Z.reverse(),
							se.reverse(),
							{ userMessages: Z, assistantResponses: se }
						);
					});
					return (() => {
						const Z = v();
						return (
							(0, E.insert)(
								Z,
								(0, m.createComponent)(u.For, {
									get each() {
										return Q().userMessages;
									},
									children: (se, re) =>
										(() => {
											const le = P(),
												oe = le.firstChild,
												ae = oe.nextSibling;
											return (
												(0, E.insert)(oe, se),
												(0, E.insert)(ae, () => Q().assistantResponses[re()]),
												le
											);
										})(),
								}),
							),
							Z
						);
					})();
				}
				function Y(te) {
					return (0, m.createComponent)(y.$w0b, {
						scrollingDirection: "horizontal",
						get children() {
							const Q = v();
							return (
								Q.style.setProperty("display", "flex"),
								Q.style.setProperty("flex-direction", "row"),
								Q.style.setProperty("height", "150px"),
								(0, E.insert)(
									Q,
									(0, m.createComponent)(u.Show, {
										get when() {
											return te.intent.items.length === 0;
										},
										children: "Loading...",
									}),
									null,
								),
								(0, E.insert)(
									Q,
									(0, m.createComponent)(u.For, {
										get each() {
											return te.intent.items;
										},
										children: (Z) =>
											(0, m.createComponent)(u.Switch, {
												get children() {
													return [
														(0, m.createComponent)(u.Match, {
															get when() {
																return (
																	Z.item.item.case === "goToDefinitionResult" &&
																	Z.item.item.value
																);
															},
															children: (se) =>
																(() => {
																	const re = v();
																	return (
																		re.style.setProperty("font-size", "7px"),
																		re.style.setProperty("width", "180px"),
																		re.style.setProperty("line-height", "7px"),
																		re.style.setProperty("overflow", "hidden"),
																		(0, E.insert)(
																			re,
																			(0, m.createComponent)(u.Show, {
																				get when() {
																					return se().definitionChunk;
																				},
																				children: (le) =>
																					(() => {
																						const oe = L(),
																							ae = oe.firstChild;
																						return (
																							ae.style.setProperty(
																								"white-space",
																								"pre-wrap",
																							),
																							(0, E.insert)(
																								ae,
																								() => le().chunkContents,
																							),
																							oe
																						);
																					})(),
																			}),
																		),
																		re
																	);
																})(),
														}),
														(0, m.createComponent)(u.Match, {
															get when() {
																return (
																	Z.item.item.case === "fileChunk" &&
																	Z.item.item.value
																);
															},
															children: (se) =>
																(() => {
																	const re = D(),
																		le = re.firstChild,
																		oe = le.nextSibling,
																		ae = oe.firstChild;
																	return (
																		(0, E.insert)(
																			re,
																			() => se().relativeWorkspacePath,
																			le,
																		),
																		(0, E.insert)(
																			re,
																			() => se().startLineNumber,
																			oe,
																		),
																		(0, E.insert)(ae, () => se().chunkContents),
																		re
																	);
																})(),
														}),
														(0, m.createComponent)(u.Match, {
															when: !0,
															get children() {
																const se = k(),
																	re = se.firstChild;
																return (
																	(0, E.insert)(
																		se,
																		() => Z.item.item.case,
																		null,
																	),
																	se
																);
															},
														}),
													];
												},
											}),
									}),
									null,
								),
								Q
							);
						},
					});
				}
				function ie(te) {
					return [
						(0, m.createComponent)(_, {
							get contextSession() {
								return te.contextSession;
							},
							get leftItems() {
								return [
									(() => {
										const Q = v();
										return (
											Q.style.setProperty("font-size", "1em"),
											Q.style.setProperty("margin-right", "5px"),
											Q.style.setProperty("margin-left", "2px"),
											(0, C.effect)(() =>
												(0, w.className)(
													Q,
													g.ThemeIcon.asClassName(h.$ak.symbolTypeParameter),
												),
											),
											Q
										);
									})(),
									M(),
								];
							},
							get rightItems() {
								return [];
							},
							get intent() {
								return te.intent;
							},
						}),
						(0, m.createComponent)(y.$w0b, {
							scrollingDirection: "horizontal",
							get children() {
								const Q = v();
								return (
									Q.style.setProperty("display", "flex"),
									Q.style.setProperty("flex-direction", "row"),
									Q.style.setProperty("height", "150px"),
									(0, E.insert)(
										Q,
										(0, m.createComponent)(u.Show, {
											get when() {
												return te.intent.items.length === 0;
											},
											children: "Loading...",
										}),
										null,
									),
									(0, E.insert)(
										Q,
										(0, m.createComponent)(u.For, {
											get each() {
												return te.intent.items;
											},
											children: (Z) =>
												(0, m.createComponent)(u.Switch, {
													get children() {
														return [
															(0, m.createComponent)(u.Match, {
																get when() {
																	return (
																		Z.item.item.case ===
																			"goToDefinitionResult" &&
																		Z.item.item.value
																	);
																},
																children: (se) =>
																	(() => {
																		const re = v();
																		return (
																			re.style.setProperty("font-size", "7px"),
																			re.style.setProperty("width", "180px"),
																			re.style.setProperty(
																				"line-height",
																				"7px",
																			),
																			re.style.setProperty(
																				"overflow",
																				"hidden",
																			),
																			(0, E.insert)(
																				re,
																				(0, m.createComponent)(u.Show, {
																					get when() {
																						return se().definitionChunk;
																					},
																					children: (le) =>
																						(() => {
																							const oe = L(),
																								ae = oe.firstChild;
																							return (
																								ae.style.setProperty(
																									"white-space",
																									"pre-wrap",
																								),
																								(0, E.insert)(
																									ae,
																									() => le().chunkContents,
																								),
																								oe
																							);
																						})(),
																				}),
																			),
																			re
																		);
																	})(),
															}),
															(0, m.createComponent)(u.Match, {
																get when() {
																	return (
																		Z.item.item.case === "fileChunk" &&
																		Z.item.item.value
																	);
																},
																children: (se) =>
																	(() => {
																		const re = D(),
																			le = re.firstChild,
																			oe = le.nextSibling,
																			ae = oe.firstChild;
																		return (
																			(0, E.insert)(
																				re,
																				() => se().relativeWorkspacePath,
																				le,
																			),
																			(0, E.insert)(
																				re,
																				() => se().startLineNumber,
																				oe,
																			),
																			(0, E.insert)(
																				ae,
																				() => se().chunkContents,
																			),
																			re
																		);
																	})(),
															}),
															(0, m.createComponent)(u.Match, {
																when: !0,
																get children() {
																	const se = k(),
																		re = se.firstChild;
																	return (
																		(0, E.insert)(
																			se,
																			() => Z.item.item.case,
																			null,
																		),
																		se
																	);
																},
															}),
														];
													},
												}),
										}),
										null,
									),
									Q
								);
							},
						}),
					];
				}
				function ne(te) {
					let Q;
					switch (te.item.item.case) {
						case "fileChunk":
							Q = `${te.item.item.value.relativeWorkspacePath} from line ${te.item.item.value.startLineNumber}:

${te.item.item.value.chunkContents}`;
							break;
						case "outlineChunk":
							Q = `Outline of ${te.item.item.value.relativeWorkspacePath} from line ${te.item.item.value.fullRange?.startLineNumber} to ${te.item.item.value.fullRange?.endLineNumberInclusive}:

${te.item.item.value.contents}`;
							break;
						default:
							Q = `unknown case ${te.item.item.case}`;
							break;
					}
					return (
						(te.status?.shownToTheModel === !0 ? "SHOWN" : "NOT SHOWN") +
						": " +
						Q
					);
				}
				function ee(te) {
					const Q = (0, $.$odc)(),
						Z = (0, u.createMemo)(() =>
							te.intent.items.filter((oe) => oe.status?.shownToTheModel === !0),
						),
						se = (0, u.createMemo)(() =>
							Z().length === 0 &&
							te.intent.error !== void 0 &&
							te.intent.error.message.length > 0
								? te.intent.error.message
								: void 0,
						),
						[re, le] = (0, u.createSignal)(!1);
					return (() => {
						const oe = A(),
							ae = oe.firstChild;
						return (
							oe.addEventListener("click", (pe) => {
								pe.stopPropagation();
								const $e = [...te.intent.items]
										.sort((me, ve) =>
											me.status?.score === void 0
												? 1
												: ve.status?.score === void 0
													? -1
													: ve.status.score - me.status.score,
										)
										.map((me) => ne(me))
										.join(`

----------------

`),
									ye = Q.languageService.createById("plaintext"),
									fe = {
										resource: Q.modelService.createModel(se() ?? $e, ye).uri,
										options: {
											preserveFocus: !1,
											pinned: !0,
											revealIfVisible: !0,
										},
									};
								Q.editorService.openEditor(fe);
							}),
							oe.addEventListener("mouseleave", () => {
								le(!1);
							}),
							oe.addEventListener("mouseenter", () => le(!0)),
							oe.style.setProperty("font-size", "0.8em"),
							oe.style.setProperty("cursor", "pointer"),
							oe.style.setProperty("display", "flex"),
							oe.style.setProperty("flex-direction", "row"),
							oe.style.setProperty("align-items", "center"),
							oe.style.setProperty("gap", "2px"),
							oe.style.setProperty("position", "relative"),
							oe.style.setProperty("border-radius", "2px"),
							oe.style.setProperty("z-index", "100"),
							oe.style.setProperty("padding", "0px 2px"),
							(0, E.insert)(
								oe,
								(0, m.createComponent)(u.Show, {
									get when() {
										return re();
									},
									get children() {
										const pe = N(),
											$e = pe.firstChild;
										return (
											pe.style.setProperty("z-index", "100"),
											pe.style.setProperty("position", "absolute"),
											pe.style.setProperty("top", "calc(100% + 4px)"),
											pe.style.setProperty("left", "50%"),
											pe.style.setProperty("transform", "translateX(-50%)"),
											pe.style.setProperty("padding", "2px 4px"),
											pe.style.setProperty("border-radius", "2px"),
											pe.style.setProperty(
												"background-color",
												"var(--vscode-editorWidget-background)",
											),
											pe.style.setProperty(
												"border",
												"1px solid var(--vscode-input-border)",
											),
											pe.style.setProperty("font-size", "0.6rem"),
											pe.style.setProperty("flex", "1"),
											$e.style.setProperty("display", "block"),
											(0, E.insert)(
												pe,
												(() => {
													const ye = (0, r.memo)(
														() =>
															!!["file", "codeSelection"].includes(
																te.intent.intent.intent.case,
															),
													);
													return () =>
														ye() &&
														(() => {
															const ue = R(),
																fe = ue.firstChild,
																me = fe.nextSibling,
																ve = me.nextSibling;
															return (
																(0, E.insert)(ue, c.$m ? "\u2325" : "alt", me),
																ue
															);
														})();
												})(),
												null,
											),
											pe
										);
									},
								}),
								ae,
							),
							(0, E.insert)(
								oe,
								(0, m.createComponent)(u.Show, {
									get when() {
										return te.intent.items.every((pe) => pe.status === void 0);
									},
									get fallback() {
										return [
											(0, r.memo)(() => Z().length),
											"/",
											(0, r.memo)(() => te.intent.items.length),
										];
									},
									get children() {
										return te.intent.items.length;
									},
								}),
								ae,
							),
							ae.addEventListener("click", (pe) => {
								pe.stopPropagation(),
									Q.aiContextSessionService.updateContextSession(
										te.contextSession.uuid,
										{
											removedIntentUuids: [te.intent.intent.uuid],
											upsertedIntents: [],
											rerankEndpoint: void 0,
										},
									);
							}),
							ae.style.setProperty("font-size", "1em"),
							ae.style.setProperty("margin-left", "1px"),
							(0, C.effect)(
								(pe) => {
									const $e = se(),
										ye =
											Z().length === 0 &&
											!(
												te.intent.items.every((fe) => fe.status === void 0) &&
												se() === void 0
											)
												? "red"
												: "var(--vscode-foreground)",
										ue =
											te.intent.items.every((fe) => fe.status === void 0) &&
											se() === void 0
												? g.ThemeIcon.asClassName(h.$ak.issues)
												: Z().length === 0
													? g.ThemeIcon.asClassName(h.$ak.error)
													: g.ThemeIcon.asClassName(h.$ak.pass);
									return (
										$e !== pe._v$ &&
											(0, i.setAttribute)(oe, "title", (pe._v$ = $e)),
										ye !== pe._v$2 &&
											((pe._v$2 = ye) != null
												? ae.style.setProperty("color", ye)
												: ae.style.removeProperty("color")),
										ue !== pe._v$3 && (0, w.className)(ae, (pe._v$3 = ue)),
										pe
									);
								},
								{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
							),
							oe
						);
					})();
				}
				function _(te) {
					const Q = (0, $.$odc)(),
						Z = (0, u.createMemo)(() =>
							te.intent.items.filter((oe) => oe.status?.shownToTheModel === !0),
						),
						se = (0, u.createMemo)(() =>
							Z().length === 0 &&
							te.intent.error !== void 0 &&
							te.intent.error.message.length > 0
								? te.intent.error.message
								: void 0,
						),
						[re, le] = (0, u.createSignal)(!1);
					return (() => {
						const oe = O(),
							ae = oe.firstChild,
							pe = ae.nextSibling,
							$e = pe.firstChild,
							ye = pe.nextSibling;
						return (
							oe.style.setProperty("display", "flex"),
							oe.style.setProperty("flex-direction", "row"),
							oe.style.setProperty(
								"background-color",
								"var(--vscode-input-background)",
							),
							oe.style.setProperty(
								"border-bottom",
								"1px solid var(--vscode-input-border)",
							),
							oe.style.setProperty("align-items", "center"),
							oe.style.setProperty("position", "relative"),
							(0, E.insert)(oe, () => te.leftItems, ae),
							ae.style.setProperty("flex-grow", "1"),
							ae.style.setProperty("margin-right", "2px"),
							ae.style.setProperty("margin-left", "2px"),
							(0, E.insert)(oe, () => te.rightItems, pe),
							(0, E.insert)(
								oe,
								(() => {
									const ue = (0, r.memo)(() => !!re());
									return () =>
										ue() &&
										(() => {
											const fe = B(),
												me = fe.firstChild;
											return (
												fe.style.setProperty("z-index", "100"),
												fe.style.setProperty("position", "absolute"),
												fe.style.setProperty("top", "24px"),
												fe.style.setProperty("right", "2px"),
												fe.style.setProperty("padding", "2px 4px"),
												fe.style.setProperty("border-radius", "2px"),
												fe.style.setProperty(
													"background-color",
													"var(--vscode-editorWidget-background)",
												),
												fe.style.setProperty(
													"border",
													"1px solid var(--vscode-input-border)",
												),
												fe.style.setProperty("font-size", "1em"),
												(0, E.insert)(
													fe,
													(() => {
														const ve = (0, r.memo)(
															() =>
																te.intent.intent.intent.case === "file" ||
																te.intent.intent.intent.case ===
																	"codeSelection",
														);
														return () =>
															ve()
																? [
																		" ",
																		(() => {
																			const ge = R(),
																				be = ge.firstChild,
																				Ce = be.nextSibling,
																				Le = Ce.nextSibling;
																			return (
																				ge.style.setProperty(
																					"font-size",
																					"0.8em",
																				),
																				(0, E.insert)(
																					ge,
																					c.$m ? "\u2325" : "alt",
																					Ce,
																				),
																				ge
																			);
																		})(),
																	]
																: null;
													})(),
													null,
												),
												fe
											);
										})();
								})(),
								pe,
							),
							pe.addEventListener("click", () => {
								const ue = [...te.intent.items]
										.sort((ge, be) =>
											ge.status?.score === void 0
												? 1
												: be.status?.score === void 0
													? -1
													: be.status.score - ge.status.score,
										)
										.map((ge) => ne(ge))
										.join(`

----------------

`),
									fe = Q.languageService.createById("plaintext"),
									ve = {
										resource: Q.modelService.createModel(se() ?? ue, fe).uri,
										options: {
											preserveFocus: !1,
											pinned: !0,
											revealIfVisible: !0,
										},
									};
								Q.editorService.openEditor(ve);
							}),
							pe.addEventListener("mouseleave", () => {
								le(!1);
							}),
							pe.addEventListener("mouseenter", () => le(!0)),
							pe.style.setProperty("font-size", "0.8em"),
							pe.style.setProperty("cursor", "pointer"),
							pe.style.setProperty("display", "flex"),
							pe.style.setProperty("flex-direction", "row"),
							pe.style.setProperty("align-items", "center"),
							pe.style.setProperty("margin-right", "3px"),
							pe.style.setProperty("opacity", "0.5"),
							pe.style.setProperty(
								"background-color",
								"var(--vscode-toolbar-hoverBackground)",
							),
							pe.style.setProperty("margin", "2px 4px 2px 0px"),
							pe.style.setProperty("padding", "0px 2px 0px 4px"),
							pe.style.setProperty("border-radius", "2px"),
							(0, E.insert)(
								pe,
								(0, m.createComponent)(u.Show, {
									get when() {
										return te.intent.items.every((ue) => ue.status === void 0);
									},
									get fallback() {
										return [
											(0, r.memo)(() => Z().length),
											"/",
											(0, r.memo)(() => te.intent.items.length),
										];
									},
									get children() {
										return te.intent.items.length;
									},
								}),
								$e,
							),
							$e.addEventListener("click", (ue) => {
								Q.aiContextSessionService.updateContextSession(
									te.contextSession.uuid,
									{
										removedIntentUuids: [te.intent.intent.uuid],
										upsertedIntents: [],
										rerankEndpoint: void 0,
									},
								);
							}),
							$e.style.setProperty("font-size", "1em"),
							$e.style.setProperty("margin-left", "1px"),
							ye.addEventListener("click", (ue) => {
								Q.aiContextSessionService.updateContextSession(
									te.contextSession.uuid,
									{
										removedIntentUuids: [te.intent.intent.uuid],
										upsertedIntents: [],
										rerankEndpoint: void 0,
									},
								);
							}),
							ye.style.setProperty("cursor", "pointer"),
							ye.style.setProperty("z-index", "1"),
							ye.style.setProperty("font-size", "1em"),
							ye.style.setProperty("margin-right", "3px"),
							ye.style.setProperty(
								"border-left",
								"1px solid var(--vscode-input-border)",
							),
							ye.style.setProperty("padding-left", "3px"),
							(0, C.effect)(
								(ue) => {
									const fe = se(),
										me =
											Z().length === 0 &&
											!(
												te.intent.items.every((be) => be.status === void 0) &&
												se() === void 0
											)
												? "red"
												: "var(--vscode-foreground)",
										ve =
											te.intent.items.every((be) => be.status === void 0) &&
											se() === void 0
												? g.ThemeIcon.asClassName(h.$ak.issues)
												: Z().length === 0
													? g.ThemeIcon.asClassName(h.$ak.error)
													: g.ThemeIcon.asClassName(h.$ak.pass),
										ge = g.ThemeIcon.asClassName(h.$ak.x);
									return (
										fe !== ue._v$4 &&
											(0, i.setAttribute)(pe, "title", (ue._v$4 = fe)),
										me !== ue._v$5 &&
											((ue._v$5 = me) != null
												? $e.style.setProperty("color", me)
												: $e.style.removeProperty("color")),
										ve !== ue._v$6 && (0, w.className)($e, (ue._v$6 = ve)),
										ge !== ue._v$7 && (0, w.className)(ye, (ue._v$7 = ge)),
										ue
									);
								},
								{ _v$4: void 0, _v$5: void 0, _v$6: void 0, _v$7: void 0 },
							),
							oe
						);
					})();
				}
			},
		),
		define(
			de[4366],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4250, 4221, 4195, 4222, 158, 13, 193,
				83, 14, 58, 6, 26, 47, 606, 104, 499, 534, 354, 450, 310, 338, 36, 108,
				479, 2e3, 1364, 1363, 1980, 1365, 397, 228, 1046, 4365, 862, 383, 4185,
				4184, 331, 1376, 12, 906, 2305, 1137,
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
				z,
				F,
				x,
				H,
				q,
				V,
				G,
				K,
				J,
				W,
				X,
				Y,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Qdc = se),
					(e.$Rdc = re);
				const ie = (0, t.template)("<div>"),
					ne = (0, t.template)(
						'<div><div tabindex="0"><div></div><div><div><div></div></div><div tabindex="-1" class="prompt-bar-selections compact"></div><div><div></div><div>',
					),
					ee = (0, t.template)("<div><div>"),
					_ = 5,
					te = 1,
					Q = (oe) => {
						let ae;
						return (
							oe
								? (ae = oe.activeEditorPane)
								: (ae = (0, M.$odc)().editorService.activeEditorPane),
							ae === void 0 ? !1 : !!(0, N.$eJb)(ae)
						);
					},
					Z = (oe) => {
						const ae = oe.activeEditorPane;
						if (ae === void 0) return;
						const pe = (0, N.$eJb)(ae);
						if (pe === void 0) return;
						const $e = pe.getActiveCell();
						$e !== void 0 && pe.executeNotebookCells([$e]);
					};
				function se(oe, ae, pe, $e, ye, ue, fe, me, ve) {
					const ge = ae.id;
					return (0, M.$ndc)(
						() =>
							(0, u.createComponent)(T.$m8b.Provider, {
								get value() {
									return {
										nonPersistentStorage: ye.nonPersistentStorage,
										setNonPersistentStorage: ye.setNonPersistentStorage,
										isNotebook: Q(),
										runCurrentlyActiveCell: Z,
									};
								},
								get children() {
									return (0, u.createComponent)(re, {
										id: ge,
										onClose: pe,
										delegate: ue,
										setEditor: me,
										lexicalEditor: fe,
										onFocusChange: ve,
									});
								},
							}),
						oe,
						$e,
					);
				}
				function re(oe) {
					const ae = (0, M.$odc)(),
						pe = (0, T.$n8b)(),
						$e = (0, p.createMemo)(() =>
							pe.nonPersistentStorage.promptBars.find((zi) => zi.id === oe.id),
						),
						ye = (0, p.createMemo)(() => {
							const Fi = $e();
							if (!(Fi === void 0 || !Fi.diffId)) return Je(Fi.diffId);
						}),
						ue = (0, p.createMemo)(() => {
							const Fi = $e();
							if (Fi === void 0 || !Fi.diffId) return;
							const zi = ye();
							if (!zi) return;
							const Zi = ae.inlineDiffService.getHandlerByDiffId(zi.id);
							if (!(!Zi || !(0, G.$47b)(Zi))) return Zi;
						}),
						[fe, me] = (0, p.createSignal)({}),
						ve = (0, p.createMemo)(
							() =>
								ae.reactiveStorageService.applicationUserPersistentStorage
									.allowMultiCmdKGenerations,
						),
						ge = (0, p.createMemo)(() => {
							const Fi = $e();
							if (Fi === void 0 || !Fi.diffId) return [];
							const zi = ye();
							return !zi || !("orderedGenerationUUIDs" in zi)
								? []
								: (zi.orderedGenerationUUIDs ?? []);
						});
					(0, p.createEffect)(() => {
						const Fi = ge();
						me((zi) => {
							const Zi = { ...(0, o.unwrap)(zi) };
							for (const nn of Fi) Zi[nn] || (Zi[nn] = "generating");
							return Zi;
						});
					}),
						(0, p.createEffect)(() => {
							const Fi = ue();
							if (!Fi) {
								me({});
								return;
							}
							const zi = Fi.onGenerationStatusChanged((Zi) => {
								console.log("generation status changed", Zi),
									me((nn) => ({ ...nn, [Zi.generationUUID]: Zi.status }));
							});
							(0, p.onCleanup)(() => {
								zi.dispose();
							});
						});
					const be = (0, p.createMemo)(() => {
							const Fi = $e();
							if (Fi === void 0 || !Fi.diffId) return -1;
							const zi = ye(),
								Zi = ge();
							return zi?.generationUUID ? Zi.indexOf(zi.generationUUID) : -1;
						}),
						Ce = () => [
							{
								modelDetails: ae.aiService.getModelDetails({
									specificModelField: "cmd-k",
								}),
								generationUUID: (0, $.$9g)(),
							},
						];
					(0, p.createEffect)(() => {
						ae.reactiveStorageService.applicationUserPersistentStorage
							.cmdKGenerationConfigs ||
							ae.reactiveStorageService.setApplicationUserPersistentStorage(
								"cmdKGenerationConfigs",
								Ce(),
							);
					});
					const Le = (Fi) => {
							$e()?.data.inputBoxDelegate.focus(Fi);
						},
						Fe = () => {
							Le();
						},
						Oe = $e()?.editorId;
					let xe = ae.codeEditorService
						.listCodeEditors()
						.find((Fi) => Fi !== void 0 && Fi.getId() === Oe);
					const He = () => {
							if ($e() !== void 0)
								return ae.cmdKService.getPromptBarCurrentRange(
									$e(),
									xe?.getModel(),
								);
						},
						Ke = () => {
							const Fi = He();
							return Fi
								? Fi.startLineNumber < Fi.endLineNumberExclusive - 1
								: !0;
						},
						Je = (Fi) => {
							const zi = pe.nonPersistentStorage.inlineDiffs,
								Zi = Fi ?? $e()?.diffId;
							return zi.find((nn) => nn.id === Zi);
						};
					let Te = {
						...(0, k.$Rac)(),
						namespace: "prompt-input" + $e()?.id,
						onError: (Fi) => {
							console.error(Fi);
						},
					};
					const [Ee, Ie] = (0, p.createSignal)(0),
						[Be, Se] = (0, p.createSignal)(!1);
					(0, p.createEffect)(() => {
						Be()
							? (_t(null), Ft(null), oe.onFocusChange(!0))
							: oe.onFocusChange(!1);
					});
					const [ke, Ue] = (0, p.createSignal)($e()?.data.initText),
						[qe, Ae] = (0, p.createSignal)(""),
						[Me, De] = (0, p.createSignal)(!1);
					(0, p.createEffect)(() => {
						const Fi = pe.nonPersistentStorage.promptBars.find(
							(zi) => zi.id === oe.id,
						);
						if (
							qe().length > 0 &&
							Fi?.preloadedRequest === void 0 &&
							!Me() &&
							gi()
						) {
							if (Fi === void 0) return;
							const zi = He();
							if (zi === void 0) return;
							De(!0),
								ae.cmdKService2.preloadEditWithSelection(
									(Zi) => {
										const nn = pe.nonPersistentStorage.promptBars.find(
											(fn) => fn.id === oe.id,
										);
										nn &&
											pe.setNonPersistentStorage(
												"promptBars",
												(fn) => fn.id === nn.id,
												"preloadedRequest",
												Zi,
											);
									},
									zi,
									Fi.uri,
									Fi.cellId,
								);
						}
					}),
						(0, p.createEffect)(() => {
							const Fi = pe.nonPersistentStorage.promptBars.find(
									(xn) => xn.id === oe.id,
								),
								zi = qe();
							if (Fi === void 0) return;
							const fn = Je()?.currentRange ?? He();
							fn !== void 0 &&
								ae.aiContextSessionService.updateContextSession(
									Fi.contextSessionUuid,
									{
										input: {
											case: "cmd-k",
											fileUri: Fi.uri,
											query: zi,
											replaceRange: fn,
											queryHistory: Fi.queryHistory?.current,
											chatHistory: Fi.inlineChatHistory?.current,
										},
										removedIntentUuids: [],
										upsertedIntents: [],
										rerankEndpoint: (xn) => (
											ae.reactiveStorageService.applicationUserPersistentStorage
												.allowMultiCmdKGenerations,
											ae.cmdKService.rerankCmdK(xn)
										),
									},
								);
						});
					const Re = (Fi) => {
							const zi = pe.nonPersistentStorage.promptBars.find(
								(Zi) => Zi.id === oe.id,
							);
							zi &&
								pe.setNonPersistentStorage(
									"promptBars",
									(Zi) => Zi.id === zi.id,
									"data",
									(Zi) => ({ ...Zi, ...Fi }),
								);
						},
						je = () => {
							ae.commandService.executeCommand("editor.action.resizePromptBar");
						};
					(0, p.onCleanup)(() => {
						if (!oe.id) return;
						const Fi = pe.nonPersistentStorage.promptBars.find(
							(zi) => zi.id === oe.id,
						);
						Fi !== void 0 &&
							Fi.data.initText !== ke() &&
							Re({ initText: ke() });
					});
					const Ve = (Fi) => {
							const zi = pe.nonPersistentStorage.promptBars.find(
								(Zi) => Zi.id === oe.id,
							);
							zi !== void 0 &&
								(Re({ ...zi.data, selections: [...zi.data.selections, Fi] }),
								Ie(zi.data.selections.length));
						},
						Ze = (Fi) => {
							const zi = pe.nonPersistentStorage.promptBars.find(
								(Zi) => Zi.id === oe.id,
							);
							zi !== void 0 &&
								(Re({
									...zi.data,
									selections: zi.data.selections.filter((Zi, nn) => nn !== Fi),
								}),
								Ie(zi.data.selections.length));
						},
						et = (Fi) => {
							const zi = pe.nonPersistentStorage.promptBars.find(
								(Zi) => Zi.id === oe.id,
							);
							zi !== void 0 &&
								Re({
									...zi.data,
									selectedLinks: [...(zi.data.selectedLinks ?? []), Fi],
								});
						},
						rt = (Fi) => {
							const zi = pe.nonPersistentStorage.promptBars.find(
								(Zi) => Zi.id === oe.id,
							);
							zi !== void 0 &&
								Re({
									...zi.data,
									selectedLinks: zi.data.selectedLinks?.filter(
										(Zi) => Zi.uuid !== Fi,
									),
								});
						},
						ft = (Fi) => {
							async function zi() {
								const Zi = pe.nonPersistentStorage.promptBars.find(
									(fn) => fn.id === oe.id,
								);
								if (Zi === void 0) return;
								const nn = await (0, P.$2fc)(
									ae.textModelService,
									ae.dataScrubbingService,
									Fi,
								);
								nn &&
									(Re({ ...Zi.data, selections: [...Zi.data.selections, nn] }),
									Ie(Zi.data.selections.length));
							}
							zi();
						},
						bt = (Fi) => {
							const zi = pe.nonPersistentStorage.promptBars.find(
								(Zi) => Zi.id === oe.id,
							);
							zi !== void 0 &&
								(Re({
									...zi.data,
									selections: zi.data.selections.filter((Zi, nn) => nn !== Fi),
								}),
								Ie(zi.data.selections.length));
						},
						nt = (Fi) => {
							const zi = pe.nonPersistentStorage.promptBars.find(
								(Zi) => Zi.id === oe.id,
							);
							zi !== void 0 &&
								Re({
									...zi.data,
									selectedCommits: [...(zi.data.selectedCommits ?? []), Fi],
								});
						},
						lt = (Fi) => {
							const zi = pe.nonPersistentStorage.promptBars.find(
								(Zi) => Zi.id === oe.id,
							);
							zi !== void 0 &&
								Re({
									...zi.data,
									selectedCommits: zi.data.selectedCommits?.filter(
										(Zi, nn) => nn !== Fi,
									),
								});
						},
						ct = (Fi) => {
							const zi = pe.nonPersistentStorage.promptBars.find(
								(Zi) => Zi.id === oe.id,
							);
							zi !== void 0 &&
								Re({
									...zi.data,
									selectedDocs: [...(zi.data.selectedDocs ?? []), Fi],
								});
						},
						gt = (Fi) => {
							const zi = pe.nonPersistentStorage.promptBars.find(
								(Zi) => Zi.id === oe.id,
							);
							zi !== void 0 &&
								Re({
									...zi.data,
									selectedDocs: zi.data.selectedDocs?.filter(
										(Zi) => Zi.uuid !== Fi,
									),
								});
						},
						ht = (Fi, zi) => {
							const Zi = pe.nonPersistentStorage.promptBars.find(
								(nn) => nn.id === oe.id,
							);
							Zi !== void 0 &&
								Re({ ...Zi.data, images: [{ ...zi, uuid: Fi }] });
						},
						Rt = (Fi) => {
							const zi = pe.nonPersistentStorage.promptBars.find(
								(Zi) => Zi.id === oe.id,
							);
							zi !== void 0 &&
								Re({
									...zi.data,
									images: zi.data.images?.filter((Zi) => Zi.uuid !== Fi),
								});
						},
						Nt = () => {
							const Fi = pe.nonPersistentStorage.promptBars.find(
								(zi) => zi.id === oe.id,
							);
							Fi !== void 0 && Re({ ...Fi.data, useWeb: !0 });
						},
						jt = () => {
							const Fi = pe.nonPersistentStorage.promptBars.find(
								(zi) => zi.id === oe.id,
							);
							Fi !== void 0 && Re({ ...Fi.data, useWeb: !1 });
						},
						ti = ({ shouldResetMultiFileEditState: Fi }) => {
							const zi = pe.nonPersistentStorage.promptBars.find(
								(Zi) => Zi.id === oe.id,
							);
							zi !== void 0 &&
								(zi.abortController?.abort(),
								pe.setNonPersistentStorage(
									"promptBars",
									(Zi) => Zi.id === zi.id,
									"abortController",
									void 0,
								),
								Xe(!1),
								Fi && kt(),
								Le());
						},
						kt = () => {
							const Fi = Dt();
							Fi && Zt([...si(), Fi]),
								Jt(void 0),
								ri(T.MultiFileEditingState.None),
								at(0),
								Li([]),
								Wt([]),
								Ui("");
						},
						hi = () => {
							pe.nonPersistentStorage.promptBars
								.filter(
									(zi) => zi.dependencyPromptBarIds?.includes(oe.id) ?? !1,
								)
								.forEach((zi) => {
									zi.abortController?.abort(),
										ae.commandService.executeCommand(s.$RW, zi.id, !0);
								});
						},
						Kt = () => {
							ae.commandService.executeCommand(s.$4W, oe.id);
						},
						di = (Fi) => {
							ae.commandService.executeCommand(s.$5W, oe.id, Fi);
						},
						Ye = () => {
							pe.nonPersistentStorage.promptBars.find(
								(zi) => zi.id === oe.id,
							) !== void 0 &&
								(Le(), ae.commandService.executeCommand(s.$RW, oe.id));
						};
					(0, p.onMount)(() => {
						Le();
					});
					const ze = () =>
							pe.nonPersistentStorage.promptBars.find((zi) => zi.id === oe.id)
								?.generating ?? !1,
						Xe = (Fi) => {
							const zi = pe.nonPersistentStorage.promptBars.find(
								(Zi) => Zi.id === oe.id,
							);
							zi &&
								pe.setNonPersistentStorage(
									"promptBars",
									(Zi) => Zi.id === zi.id,
									"generating",
									Fi,
								);
						};
					(0, p.createEffect)(() => {
						je(),
							setTimeout(() => {
								je();
							}, 10);
					});
					const [It, Lt] = (0, p.createSignal)(!1),
						xt = () => {
							if (
								pe.nonPersistentStorage.promptBars.find(
									(Zi) => Zi.id === oe.id,
								) === void 0
							)
								return;
							const zi = Je()?.currentRange;
							if (zi !== void 0)
								return new S.$kL(
									zi.startLineNumber,
									1,
									zi.endLineNumberExclusive,
									1,
								);
						},
						Vt = (Fi) => {
							const zi = pe.nonPersistentStorage.promptBars.find(
								(fn) => fn.id === oe.id,
							);
							if (zi === void 0) return [];
							const Zi = ae.markerService;
							return Fi === void 0 ? [] : (0, A.$L7b)(Zi, zi.uri, Fi);
						};
					let Bt;
					const Gt = (0, p.createMemo)(() => {
							const Fi = pe.nonPersistentStorage.promptBars.find(
								(zi) => zi.id === oe.id,
							);
							return Fi === void 0
								? !1
								: Fi?.originalRequest !== void 0 || Fi?.queryHistory !== void 0;
						}),
						Mt = (0, p.createMemo)(() => {
							const Fi = pe.nonPersistentStorage.promptBars.find(
								(zi) => zi.id === oe.id,
							);
							return Fi === void 0
								? !1
								: Fi.queryHistory?.current.query?.query === s.$$V;
						}),
						Ut = () => {
							const Fi = pe.nonPersistentStorage.promptBars.find(
								(zi) => zi.id === oe.id,
							);
							return qe().length === 0 && Fi?.data.selections.length === 0;
						},
						[ei, mi] = (0, p.createSignal)(void 0),
						ii = (0, p.createMemo)(
							() =>
								ae.reactiveStorageService.nonPersistentStorage.inprogressAIGenerations.find(
									(zi) => zi.generationUUID === ei(),
								)?.queuePositionResponse,
						),
						[Dt, Jt] = (0, p.createSignal)(),
						[si, Zt] = (0, p.createSignal)([]),
						[ci, ri] = (0, p.createSignal)(T.MultiFileEditingState.None),
						[$i, Wt] = (0, p.createSignal)([]),
						[tt, at] = (0, p.createSignal)(0),
						[pi, Li] = (0, p.createSignal)([]),
						[Di, Ui] = (0, p.createSignal)(""),
						Wi = (0, p.createMemo)(() => ci() !== T.MultiFileEditingState.None),
						Gi = async () => {
							ze() !== !0 && Wi() !== !0
								? (Jt((0, $.$9g)()),
									le({
										promptBarStore: pe,
										setGenerating: Xe,
										selectedFilesToEdit: pi,
										setMultiFileEditingState: ri,
										inProgressMultiFileEditGenerationUUID: Dt,
										canceledMultiFileEditGenerationUUIDs: si,
										setPotentialFilesToEdit: Wt,
										setSelectedFilesToEdit: Li,
										setPotentialFilesToEditCurrentIndex: at,
										plainText: qe,
										vsContext: ae,
										id: oe.id,
										onSubmit: Oi,
									}))
								: ci() === T.MultiFileEditingState.WaitingForUserInput &&
									Oi({ editMode: T.EditMode.MultiFile });
						},
						qi = async () => {
							const Fi = ke() ?? "",
								zi = qe() ?? "",
								Zi = xe?.getModel();
							if (Zi == null) return;
							const nn = He();
							if (nn === void 0) return;
							const fn = {
								startLineNumber: nn.startLineNumber,
								startColumn: 1,
								endLineNumber: nn.endLineNumberExclusive - 1,
								endColumn: Zi.getLineMaxColumn(nn.endLineNumberExclusive - 1),
							};
							yi(),
								ae.hallucinatedFunctionsDataService.createHallucinatedFunction(
									Zi,
									fn,
									{ prompt: { richText: Fi, plainText: zi } },
								);
						},
						Oi = async ({
							fixSubmit: Fi,
							fastMode: zi,
							chatMode: Zi,
							editMode: nn,
						}) => {
							const fn = Date.now();
							if (ze()) return;
							ae.tooltipService.registerEvent("editor.cmdk.submit");
							const xn = !0;
							if ((Bt?.dispose(), Ut())) return;
							let Sn = pe.nonPersistentStorage.promptBars.find(
								(Pn) => Pn.id === oe.id,
							);
							if (Sn === void 0) return;
							const Un = xt(),
								as = Vt(Un),
								Qn =
									Un === void 0
										? ""
										: ae.modelService.getModel(Sn.uri)?.getValueInRange(Un);
							try {
								if (
									(pe.setNonPersistentStorage(
										"promptBars",
										(Pn) => Pn.id === Sn?.id,
										"preventFollowupFromBeingAdded",
										!0,
									),
									ti({
										shouldResetMultiFileEditState: nn !== T.EditMode.MultiFile,
									}),
									ze())
								) {
									ti({
										shouldResetMultiFileEditState: nn !== T.EditMode.MultiFile,
									});
									return;
								}
								if (Fi !== !0) _e(void 0);
								else {
									const Pn = (Sn.fixingErrorCounter ?? 0) + 1;
									_e(`Attempting fix (${Pn}/${s.$pX})...`);
								}
							} finally {
								(Sn.preventFollowupFromBeingAdded = !1),
									pe.setNonPersistentStorage(
										"promptBars",
										(Pn) => Pn.id === Sn?.id,
										"preventFollowupFromBeingAdded",
										!1,
									);
							}
							Xe(!0), Lt(!1);
							let $s;
							const Us = Dt(),
								_n = qe();
							ae.aiFeatureStatusService.maybeRefreshFeatureStatus(
								"shouldUseReranking",
							);
							const sn =
									ae.aiFeatureStatusService.getCachedFeatureStatus(
										"shouldUseReranking",
									),
								{
									abortController: dn,
									generationUUID: An,
									promise: vn,
								} = ae.cmdKService2.submitEditWithSelection({
									options: {
										fastMode: zi,
										chatMode: Zi ?? !1,
										useContextSession: xn,
										preloadedRequest: (0, o.unwrap)(Sn.preloadedRequest),
										originalRequest: Sn.originalRequest?.current,
										contextSessionUuid: Sn.contextSessionUuid,
										queryHistory: Sn.queryHistory?.current,
										fileUri: Sn.uri,
										diffRange: Je()?.currentRange,
										rejectCurrentDiff: () => {
											di({ removeFollowupToo: !1 });
										},
										useReranker: sn,
										useWeb: Sn.data.useWeb ?? !1,
									},
									promptBarId: oe.id,
									query: qe(),
									selectedLinks: Sn.data.selectedLinks ?? [],
									structuredQuery: ke() ?? qe(),
									lineRange: He() ?? {
										startLineNumber: 1,
										endLineNumberExclusive: 1,
									},
									images: Sn.data.images ?? [],
									codeBlocks: Sn.data.selections,
									docs: Sn.data.selectedDocs ?? [],
									startTime: fn,
									focusEditor: () => {
										Le();
									},
									diffIdCallback: (Pn) => {
										const es = pe.nonPersistentStorage.promptBars.find(
											(ls) => ls.id === oe.id,
										);
										es &&
											pe.setNonPersistentStorage(
												"promptBars",
												(ls) => ls.id === es.id,
												"diffId",
												Pn,
											);
									},
									doneCallback: async () => {
										try {
											Bt?.dispose();
											const Pn = Date.now();
											let es = !1;
											const ls = () => {
												if (es === !0) return;
												const Jn = pe.nonPersistentStorage.promptBars.find(
													(ss) => ss.id === oe.id,
												);
												Jn &&
													Fi === !0 &&
													(Jn.fixingErrorCounter ?? 0) + 1 < s.$pX &&
													(pe.setNonPersistentStorage(
														"promptBars",
														(ss) => ss.id === Jn.id,
														"fixingErrorCounter",
														(Jn.fixingErrorCounter ?? 0) + 1,
													),
													(es = !0),
													Oi({ fixSubmit: !0 }));
											};
											(Bt = ae.markerService.onMarkerChanged(() => {
												Vt(xt()).length > 0 &&
													(Lt(!0),
													Fi === !0 && _e("Not fully fixed"),
													Date.now() - Pn < 1e3 && ls());
											})),
												Fi === !0 &&
													setTimeout(() => {
														Vt(xt()).length > 0
															? (ls(), _e("Not fully fixed"))
															: es === !1 && _e("Fixed");
													}, 1e3);
										} finally {
											kt(), Xe(!1);
										}
									},
									cancelGenerationWithNoChangesCallback: () => {
										Xe(!1), ri(T.MultiFileEditingState.None), Le();
									},
									rejectCallback: () => {
										Gt() || (ti({ shouldResetMultiFileEditState: !0 }), hi());
									},
									spoofedSelection: Fi === !0 || Gt() ? Qn : void 0,
									spoofedDiagnostics: Fi === !0 || Gt() ? as : void 0,
									spoofedCellId: Sn?.cellId,
									rerun: () => {
										Oi({ fixSubmit: !1 });
									},
								});
							mi(An),
								(Sn = pe.nonPersistentStorage.promptBars.find(
									(Pn) => Pn.id === oe.id,
								)),
								Sn &&
									pe.setNonPersistentStorage(
										"promptBars",
										(Pn) => Pn.id === Sn.id,
										"abortController",
										dn,
									),
								await vn;
						},
						yi = (Fi) => {
							ae.commandService.executeCommand(s.$RW, oe.id, Fi);
						},
						Ai = (0, p.createMemo)(() => [
							"ctx-definitions",
							"ctx-chat-history",
							"ctx-code",
							"ctx-files",
							"code",
							"docs",
							...(ae.reactiveStorageService.applicationUserPersistentStorage
								.showAllCmdKContexts
								? ["all-context-items-by-score"]
								: []),
						]),
						li = (0, p.createMemo)(() => {
							const Fi = {
									"ctx-definitions": !1,
									"ctx-chat-history": !1,
									"ctx-code": !1,
									"ctx-files": !1,
									code: !1,
									docs: !1,
									"all-context-items-by-score": !1,
								},
								zi = $e();
							if (!zi) return Fi;
							const Zi =
								ae.aiContextSessionService.getReactiveReadonlyContextSession(
									zi?.contextSessionUuid,
								);
							if (!Zi) return Fi;
							let nn = !1,
								fn = !1,
								xn = !1,
								Sn = !1;
							for (const Un of Zi.intents)
								Un.intent.type === x.ContextIntent_Type.USER_ADDED &&
									(Un.intent.intent.case === "cmdKDefinitions"
										? (nn = !0)
										: Un.intent.intent.case === "chatHistory"
											? (fn = !0)
											: Un.intent.intent.case === "codeSelection"
												? (xn = !0)
												: Un.intent.intent.case === "file" && (Sn = !0));
							return {
								"ctx-chat-history": fn,
								"ctx-definitions": nn,
								"ctx-code": xn,
								"ctx-files": Sn,
								code: !!zi.data?.selections?.length,
								docs: !!zi.data?.selectedDocs?.length,
								"all-context-items-by-score":
									!!ae.reactiveStorageService.applicationUserPersistentStorage
										.showAllCmdKContexts,
							};
						}),
						Vi = (0, p.createMemo)(() => Ai().filter((Fi) => li()[Fi])),
						[wi, _t] = (0, p.createSignal)(null),
						[ai, Ft] = (0, p.createSignal)(null),
						Xt = 40;
					let $t = null;
					const ut = (Fi) => {
							if (!wi() || ai() || Be() || Bn()) return;
							const zi = Fi.ctrlKey || Fi.metaKey;
							if ((0, H.$dcc)(Fi, "Escape")) {
								Fi.stopImmediatePropagation(),
									Fi.preventDefault(),
									_t(null),
									Ft(null),
									Le();
								return;
							}
							if ((0, H.$dcc)(Fi, "ArrowDown")) {
								Fi.stopImmediatePropagation(), Fi.preventDefault(), qt()();
								return;
							}
							if ((0, H.$dcc)(Fi, "ArrowUp")) {
								Fi.stopImmediatePropagation(), Fi.preventDefault(), Tt()(Fi);
								return;
							}
							Fi.key, Fi.key;
						},
						Et = (Fi) => {
							const zi = ae.window.getSelection();
							if (!zi || zi.rangeCount === 0) return !1;
							try {
								const Zi = zi.getRangeAt(0);
								if (Zi.collapsed) {
									const nn = Zi.cloneRange();
									return (
										nn.selectNodeContents(Fi),
										nn.setEnd(Zi.endContainer, Zi.endOffset),
										nn.toString() === ""
									);
								}
							} catch {}
							return !1;
						},
						Tt = (0, p.createMemo)(() => {
							const Fi = oe.lexicalEditor(),
								zi = Vi(),
								Zi = wi();
							return (nn) => {
								if (Bn() || ai()) return !1;
								const fn = Fi?.getRootElement(),
									xn = Et(fn);
								if (!zi.length) return !1;
								if (Zi) {
									const Sn = zi.indexOf(Zi);
									if (Sn === -1) return !1;
									const Un = Sn - 1;
									if (Un < 0) return !0;
									_t(zi[Un]);
								} else {
									if (!Be() || !fn) return !1;
									if (!xn) return !0;
									_t(zi[zi.length - 1]), Fi?.blur();
								}
								return !0;
							};
						}),
						qt = (0, p.createMemo)(() => () => {
							if (Bn() || ai()) return !1;
							const Fi = Vi();
							if (!Fi.length) return !1;
							const zi = wi();
							if (!zi) return !1;
							const Zi = Fi.indexOf(zi);
							if (Zi === -1) return !1;
							const nn = Zi + 1;
							return nn >= Fi.length ? (os()(), !1) : (_t(Fi[nn]), !0);
						}),
						At = (Fi) => Fi.altKey,
						Yt = (Fi) => {
							const zi = $e(),
								Zi = xe?.getModel();
							if (zi && xe && Zi && !zi.diffId) {
								const nn = ae.cmdKService.getPromptBarCurrentRange(zi, Zi);
								return (
									nn &&
										(Zi.changeDecorations((fn) => {
											const xn = Zi.getLineCount(),
												Sn = Math.max(1, nn.startLineNumber),
												as = ((Qn) => Math.min(xn, Math.max(Sn, Qn)))(
													nn.endLineNumberExclusive + Fi - 1,
												);
											return (
												fn.changeDecoration(zi.currentRangeDecorationId, {
													endColumn: Zi.getLineMaxColumn(as),
													endLineNumber: as,
													startColumn: Zi.getLineMinColumn(nn.startLineNumber),
													startLineNumber: nn.startLineNumber,
												}),
												!0
											);
										}),
										ae.commandService.executeCommand(s.$QW, xe)),
									!0
								);
							}
							return !1;
						};
					let ni;
					const bi = [
						{
							command: g.KEY_COMMAND_Y_OR_CNTRL_SHIFT_Y_COMMAND,
							callback: (Fi) => {
								if (ci() === T.MultiFileEditingState.WaitingForUserInput) {
									const zi = $i().at(tt());
									zi !== void 0 && Li([...pi().filter((fn) => fn !== zi), zi]);
									const Zi = tt(),
										nn = Zi + 1 >= $i().length ? 0 : Zi + 1;
									return at(nn), Fi.stopPropagation(), !0;
								}
								return (
									ae.commandService.executeCommand(T.$$7b),
									Fi.stopPropagation(),
									!0
								);
							},
						},
						{
							command: g.KEY_COMMAND_SLASH_COMMAND,
							callback: (Fi) => {
								if (ve()) {
									const zi =
										ae.reactiveStorageService.applicationUserPersistentStorage
											.cmdKGenerationConfigs?.[0]?.modelDetails?.modelName;
									if (zi) {
										const Zi = ae.aiSettingsService.getAvailableModelsReactive({
												isLongContextOrDebuggerMode: !1,
												isChat: !1,
											}),
											fn = (Zi.findIndex((xn) => xn === zi) + 1) % Zi.length;
										fi(Zi[fn], 0);
									}
									return !1;
								} else
									return Fi.altKey && ni
										? (ni(), Fi.preventDefault(), Fi.stopPropagation(), !0)
										: (ae.commandService.executeCommand(s.$9V, {
												isLongContextMode: !1,
												specificModelField: "cmd-k",
											}),
											Fi.stopPropagation(),
											!0);
							},
						},
						{
							command: g.KEY_COMMAND_N_COMMAND,
							callback: (Fi) => {
								if (ci() === T.MultiFileEditingState.WaitingForUserInput) {
									const zi = $i().at(tt());
									zi !== void 0 && Li([...pi().filter((nn) => nn !== zi)]);
									const Zi = tt() + 1 >= $i().length ? 0 : tt() + 1;
									return at(Zi), Fi.stopPropagation(), !0;
								}
								return (
									ae.commandService.executeCommand(T.$b8b),
									Fi.stopPropagation(),
									!0
								);
							},
						},
						{
							command: g.KEY_COMMAND_K_COMMAND,
							callback: (Fi) => {
								if (ci() === T.MultiFileEditingState.WaitingForUserInput) {
									const zi = tt() - 1 < 0 ? $i().length - 1 : tt() - 1;
									return at(zi), Fi.stopPropagation(), !0;
								}
								return (
									ae.editorService.activeEditorPane?.focus(),
									Fi.stopPropagation(),
									!0
								);
							},
						},
						{
							command: g.KEY_COMMAND_J_COMMAND,
							callback: (Fi) => {
								if (ci() === T.MultiFileEditingState.WaitingForUserInput) {
									const zi = tt() + 1 >= $i().length ? 0 : tt() + 1;
									return at(zi), Fi.stopPropagation(), !0;
								}
								return !1;
							},
						},
						{
							command: g.KEY_COMMAND_SHIFT_K_COMMAND,
							callback: (Fi) => (
								ae.commandService.executeCommand(I.$t7b, {
									promptBarId: oe.id,
									invocationType: "toggle",
								}),
								Fi.stopPropagation(),
								!0
							),
						},
						{
							command: g.KEY_COMMAND_ENTER_COMMAND,
							callback: (Fi) =>
								pe.nonPersistentStorage.promptBars.find((Zi) => Zi.id === oe.id)
									?.diffId !== void 0 && ze() !== !0
									? (Kt(), !0)
									: ae.reactiveStorageService.applicationUserPersistentStorage
												.hallucinatedFunctionsEnabled === !0
										? (qi(), !0)
										: !1,
						},
						{
							command: g.KEY_BACKSPACE_DELETE_COMMAND,
							callback: (Fi) => {
								const zi = pe.nonPersistentStorage.promptBars.find(
									(Zi) => Zi.id === oe.id,
								);
								return ze()
									? (ti({ shouldResetMultiFileEditState: !0 }),
										hi(),
										Fi.stopPropagation(),
										!0)
									: zi?.diffId !== void 0
										? Gt() && qe().length > 0
											? !1
											: (di({ removeFollowupToo: !0 }),
												hi(),
												ri(T.MultiFileEditingState.None),
												Fi.stopPropagation(),
												!0)
										: !1;
							},
						},
						{
							command: g.KEY_TAB_COMMAND,
							callback: (Fi) => {
								if (Q(ae.editorService) && !ze() && Je())
									return Z(ae.editorService), Fi.stopPropagation(), !0;
								{
									if (!ve()) return !1;
									const zi = be();
									if (zi === -1) return !1;
									const Zi = ge(),
										nn = Fi.shiftKey
											? (zi - 1 + Zi.length) % Zi.length
											: (zi + 1) % Zi.length;
									let fn = $e()?.diffId;
									if (fn) {
										Fi.stopPropagation(), Fi.preventDefault();
										const xn =
											ae.inlineDiffService.toggleSelectedGenerationAndReturnIsActive(
												fn,
												nn + 1,
											);
										return xn !== void 0 && Xe(xn), Fi.stopPropagation(), !0;
									}
									return !1;
								}
							},
						},
						{
							command: g.KEY_ALT_UP_COMMAND,
							callback: (Fi) => (($t = null), Es(!1), !0),
						},
						{
							command: g.KEY_ARROW_UP_COMMAND,
							callback: (Fi) =>
								At(Fi) && Yt(Fi.shiftKey ? -3 : -1)
									? (Fi.preventDefault(), !0)
									: Tt()(Fi),
						},
						{
							command: g.KEY_ARROW_DOWN_COMMAND,
							callback: (Fi) =>
								At(Fi) && Yt(Fi.shiftKey ? 3 : 1)
									? (Fi.preventDefault(), !0)
									: qt()(),
						},
					];
					(0, p.createEffect)(() => {
						Vi().length === 0 && wi() !== null && _t(null);
					});
					const fi = (Fi, zi) => {
							if (
								!ae.reactiveStorageService.applicationUserPersistentStorage
									.cmdKGenerationConfigs
							)
								return;
							const Zi = $e();
							if (!Zi) return;
							const nn = ae.aiService.getModelDetails({
								specificModelField: "cmd-k",
							});
							if (Zi.multiGenerationConfigs) {
								ae.reactiveStorageService.setNonPersistentStorage(
									"promptBars",
									(xn) => xn.id === Zi.id,
									"multiGenerationConfigs",
									(0, o.produce)((xn) => {
										xn &&
											(xn[zi].modelDetails = new f.$Zs({
												...nn,
												modelName: Fi,
											}));
									}),
								);
								const fn = $e()?.multiGenerationConfigs;
								fn &&
									ae.reactiveStorageService.setApplicationUserPersistentStorage(
										"cmdKGenerationConfigs",
										fn,
									);
							} else
								ae.reactiveStorageService.setApplicationUserPersistentStorage(
									"cmdKGenerationConfigs",
									(0, o.produce)((fn) => {
										fn &&
											(fn[zi].modelDetails = new f.$Zs({
												...nn,
												modelName: Fi,
											}));
									}),
								);
						},
						[Ti, wt] = (0, p.createSignal)(0),
						[We, _e] = (0, p.createSignal)(void 0),
						Si = () => {
							const Fi = pe.nonPersistentStorage.promptBars.find(
								(fn) => fn.id === oe.id,
							);
							if (xe === void 0 || Fi === void 0) return;
							const zi = He();
							if (zi === void 0) return;
							const Zi = xe.getVisibleRanges();
							let nn = !1;
							for (const fn of Zi)
								if (
									zi.startLineNumber >= fn.startLineNumber &&
									zi.startLineNumber <= fn.endLineNumber
								) {
									nn = !0;
									break;
								}
							if (nn)
								return xe.getOffsetForColumn(
									zi.startLineNumber,
									Fi.indentColumn ?? 1,
								);
						},
						gi = (0, p.createMemo)(() => !1),
						ki = () => {
							if (xe === void 0) return 0;
							const Fi = xe.getLayoutInfo();
							return (
								Fi.minimap.renderMinimap === 0 ||
									(Fi.minimap.minimapWidth > 0 && Fi.minimap.minimapLeft === 0),
								Fi.verticalScrollbarWidth
							);
						},
						[Pi, Hi] = (0, p.createSignal)(0),
						Ji = (0, p.createMemo)(() => (Pi(), Si())),
						[cn, un] = (0, p.createSignal)(Ji() ?? 0),
						[yn, Rn] = (0, p.createSignal)(ki());
					(0, p.onMount)(() => {
						if (xe) {
							const Fi = l.Event.defer(xe.onDidScrollChange)(() => {
									Hi(Pi() + 1);
									const nn = Ji();
									nn !== void 0 && un(nn);
								}),
								zi = l.Event.defer(xe.onDidChangeModelDecorations)(() => {
									Hi(Pi() + 1);
									const nn = Ji();
									nn !== void 0 && un(nn);
								}),
								Zi = l.Event.defer(xe.onDidLayoutChange)(() => {
									Rn(ki());
								});
							(0, p.onCleanup)(() => {
								Fi.dispose(), zi.dispose(), Zi.dispose();
							});
						}
					});
					const _i = (0, p.createMemo)(() => !Gt() || qe().length > 0 || Mt()),
						[Bn, Mn] = (0, p.createSignal)(!1),
						zn = (0, u.createComponent)(p.Show, {
							get when() {
								return $e()?.forceRerenderInputBox;
							},
							keyed: !0,
							children: (Fi) => {
								const zi = pe.nonPersistentStorage.promptBars.find(
										(nn) => nn.id === oe.id,
									),
									Zi =
										zi?.data.initText ??
										ae.aiService.getLastDraftMessage() ??
										"";
								return (
									Ue(Zi),
									Ae(Zi),
									(0, u.createComponent)(
										k.$Uac,
										(0, m.mergeProps)(L.$w_b, {
											readonly: !1,
											supportsGit: !1,
											supportsCommitNotes: !1,
											supportsLint: !1,
											showDocs: !0,
											supportsCodebase: !1,
											supportsLink: !0,
											supportsFolderSelections: !1,
											supportsWeb: !0,
											allowGhostTextAtSymbols: !1,
											get shouldAutoParseLink() {
												return ae.reactiveStorageService
													.applicationUserPersistentStorage
													.shouldAutoParseCmdKLinks;
											},
											addWeb: Nt,
											removeWeb: jt,
											useArrowsForHistory: !0,
											initText: Zi,
											isLongContextMode: !1,
											source: "editor.cmdk",
											onMentionsMenuOpen: () => Mn(!0),
											onMentionsMenuClose: () => Mn(!1),
											get placeholder() {
												return (0, r.memo)(() => !Gt())()
													? (0, r.memo)(() => !!$e()?.chatResponse)()
														? `Follow-up or ${Ke() ? "edit" : "new code"} instructions`
														: `${Ke() ? "Editing" : "New code"} instructions... (\u21C5 for history, @ for code / documentation)`
													: (Wi()
															? "Follow-up..."
															: "Follow-up instructions...") +
															` ${ae.keybindingService?.lookupKeybindings(I.$t7b).at(-1)?.getLabel()}`;
											},
											insertLink: et,
											removeLink: rt,
											get linksSelections() {
												return zi?.data.selectedLinks ?? [];
											},
											get delegate() {
												return $e()?.data.delegate;
											},
											get inputBoxDelegate() {
												return $e()?.data.inputBoxDelegate;
											},
											insertSelection: Ve,
											get selections() {
												return $e()?.data.selections ?? [];
											},
											editorConfig: () => Te,
											removeSelection: Ze,
											addImage: ht,
											removeImage: Rt,
											insertFileSelection: ft,
											fileSelections: [],
											removeFileSelection: bt,
											insertDocs: ct,
											get selectedDocs() {
												return zi?.data.selectedDocs ?? [];
											},
											removeDocs: gt,
											insertCommit: nt,
											removeCommit: lt,
											get commits() {
												return $e()?.data.selectedCommits ?? [];
											},
											get setEditor() {
												return oe.setEditor;
											},
											setText: (nn) => {
												Ae(nn), ae.aiService.setLastDraftMessage(nn);
												const fn = pe.nonPersistentStorage.promptBars.find(
													(xn) => xn.id === oe.id,
												);
												fn !== void 0 &&
													ae.fastContextService.computeEmbeddingsChunks(
														fn.id,
														nn,
													);
											},
											setRichText: (nn) => {
												Ue(nn), Re({ initText: nn });
											},
											onEscape: () => {
												const nn = pe.nonPersistentStorage.promptBars.find(
													(fn) => fn.id === oe.id,
												);
												ze() || nn?.diffId !== void 0
													? ae.editorService.activeEditorPane?.focus()
													: yi();
											},
											onSubmit: (nn) => {
												Oi({
													fixSubmit: !1,
													fastMode: !1,
													chatMode: nn.altKey,
													editMode: T.EditMode.SingleFile,
												});
											},
											setIsFocused: (nn) => {
												Se(nn);
											},
											externalHistoryBundle: {
												runExternalUndo: () => {
													const nn = pe.nonPersistentStorage.promptBars.find(
														(fn) => fn.id === oe.id,
													);
													nn !== void 0 && ae.undoRedoService.undo(nn.uri);
												},
												runExternalRedo: () => {
													const nn = pe.nonPersistentStorage.promptBars.find(
														(fn) => fn.id === oe.id,
													);
													nn !== void 0 && ae.undoRedoService.redo(nn.uri);
												},
												addToExternalUndoStack: (nn) => {
													const fn = pe.nonPersistentStorage.promptBars.find(
														(xn) => xn.id === oe.id,
													);
													fn !== void 0 &&
														ae.undoRedoService.pushElement(
															new v.$x7b(
																"Lexical Operation",
																"lexical-op",
																fn.uri,
																() => {
																	ae.commandService.executeCommand(s.$OW, {
																		historyState: nn.historyState,
																		promptBarId: oe.id,
																	});
																},
																() => {
																	ae.commandService.executeCommand(s.$PW, {
																		historyState: nn.historyState,
																		promptBarId: oe.id,
																	});
																},
															),
														);
												},
											},
											extraCommandListeners: bi,
											get contextSessionUuid() {
												return $e()?.contextSessionUuid;
											},
											setContentHeight: wt,
										}),
									)
								);
							},
						}),
						[$n, Ln] = (0, p.createSignal)(0),
						[wn, Hn] = (0, p.createSignal)(0);
					(0, p.createEffect)((Fi) => (Fi !== wn() && je(), wn()));
					const [Yn, Es] = (0, p.createSignal)(!1),
						Nn = () => Es(!Yn());
					let Fn, Gn;
					(0, p.onMount)(() => {
						const Fi = new ResizeObserver((zi) => {
							for (const Zi of zi) {
								const { width: nn, height: fn } = Zi.contentRect;
								Ln(nn), Hn(fn);
							}
						});
						Fn && Fi.observe(Fn),
							(0, p.onCleanup)(() => {
								Fi.disconnect();
							});
					}),
						(0, p.createEffect)(() => {
							Gn && oe.delegate.registerBigContainer(Gn);
						});
					const [Dn, jn] = (0, p.createSignal)([]),
						rs = (0, W.$f$b)(ae.themeService);
					(0, p.createEffect)(() => {
						Promise.all(
							($e()?.data.selectedDocs?.filter((Fi) => Fi) ?? []).map((Fi) =>
								(0, P.$3fc)(ae.aiService, ae.reactiveStorageService, Fi).then(
									(zi) => (zi ? (0, U.$Cbc)(zi, ae) : null),
								),
							),
						).then((Fi) => {
							jn(Fi.filter((zi) => zi !== null));
						});
					});
					const Js = (0, p.createMemo)(() =>
						[...pe.nonPersistentStorage.promptBars].sort(
							(zi, Zi) => zi.createdAt - Zi.createdAt,
						),
					);
					let ts = !1;
					const js =
							"We are not sure how you reached this state - please email the devs at hi@cursor.sh. This message will disappear when you restart.",
						os = (0, p.createMemo)(() => () => {
							Ft(null),
								Le(() => {
									setTimeout(() => {
										const Fi = $e()?.data.inputBoxDelegate.getRef();
										if (Fi) {
											const zi = ae.window.document.createRange();
											zi.setStart(Fi, 0),
												zi.setEnd(Fi, 0),
												ae.window.getSelection()?.removeAllRanges(),
												ae.window.getSelection()?.addRange(zi);
										}
									}, 1);
								}),
								_t(null);
						});
					let En;
					(0, p.createEffect)(() => {
						wi() && En?.focus();
					});
					const ns = (0, p.createMemo)(
						() =>
							$e()?.multiGenerationConfigs ??
							ae.reactiveStorageService.applicationUserPersistentStorage
								.cmdKGenerationConfigs ??
							[],
					);
					return (0, u.createComponent)(p.Show, {
						get when() {
							return $e() !== void 0;
						},
						get fallback() {
							return js;
						},
						get children() {
							const Fi = ne(),
								zi = Fi.firstChild,
								Zi = zi.firstChild,
								nn = Zi.nextSibling,
								fn = nn.firstChild,
								xn = fn.firstChild,
								Sn = fn.nextSibling,
								Un = Sn.nextSibling,
								as = Un.firstChild,
								Qn = as.nextSibling;
							Fi.style.setProperty("display", "flex"),
								Fi.style.setProperty("flex-direction", "column"),
								Fi.style.setProperty("gap", "4px"),
								(0, d.insert)(
									Fi,
									(0, u.createComponent)(p.Show, {
										get when() {
											return (0, r.memo)(() => !!ve())() && ns().length > te;
										},
										get children() {
											const sn = ie();
											return (
												sn.style.setProperty("padding", "0 10px"),
												sn.style.setProperty("padding-top", "4px"),
												sn.style.setProperty("position", "relative"),
												sn.style.setProperty("z-index", "1000002"),
												sn.style.setProperty("font-size", "10px"),
												sn.style.setProperty(
													"color",
													"var(--vscode-input-placeholderForeground)",
												),
												sn.style.setProperty("display", "flex"),
												sn.style.setProperty("align-items", "center"),
												sn.style.setProperty("gap", "4px"),
												(0, d.insert)(
													sn,
													(0, u.createComponent)(p.For, {
														get each() {
															return ns();
														},
														children: (dn, An) =>
															(0, u.createComponent)(K.$Odc, {
																get canDelete() {
																	return (
																		(0, r.memo)(() => ns().length > te)() &&
																		!ye()
																	);
																},
																onDelete: () => {
																	ae.reactiveStorageService.setApplicationUserPersistentStorage(
																		"cmdKGenerationConfigs",
																		(0, o.produce)((vn) => {
																			vn && vn.splice(An(), 1);
																		}),
																	),
																		ns().length === te &&
																			ae.commandService.executeCommand(
																				s.$0V,
																				ns()[0].modelDetails.modelName,
																				!1,
																				"cmd-k",
																			),
																		ae.commandService.executeCommand(
																			"editor.action.resizePromptBar",
																		);
																},
																get modelName() {
																	return dn.modelDetails.modelName ?? "";
																},
																get canChangeModel() {
																	return !ye();
																},
																get status() {
																	return fe()[dn.generationUUID];
																},
																onClick: (vn) => {
																	let Pn = $e()?.diffId;
																	if (Pn) {
																		vn.stopPropagation(), vn.preventDefault();
																		const es =
																			ae.inlineDiffService.toggleSelectedGenerationAndReturnIsActive(
																				Pn,
																				An() + 1,
																			);
																		es !== void 0 && Xe(es),
																			vn.stopPropagation();
																	}
																},
																onChangeModel: (vn) => {
																	fi(vn, An());
																},
																get isActive() {
																	return (0, r.memo)(() => be() !== -1)()
																		? An() === be()
																		: !1;
																},
															}),
													}),
													null,
												),
												(0, d.insert)(
													sn,
													(0, u.createComponent)(p.Show, {
														get when() {
															return (
																(0, r.memo)(() => ns().length < _)() && !ye()
															);
														},
														get children() {
															return (0, u.createComponent)(J.$Pdc, {
																onSelect: (dn) => {
																	ae.reactiveStorageService.setApplicationUserPersistentStorage(
																		"cmdKGenerationConfigs",
																		(0, o.produce)((An) => {
																			if (An) {
																				const vn = ae.aiService.getModelDetails(
																					{ specificModelField: "cmd-k" },
																				);
																				An.unshift({
																					generationUUID: (0, $.$9g)(),
																					modelDetails: new f.$Zs({
																						...vn,
																						modelName: dn,
																					}),
																				});
																			}
																		}),
																	);
																},
															});
														},
													}),
													null,
												),
												(0, C.effect)(() =>
													`${cn()}px` != null
														? sn.style.setProperty("margin-left", `${cn()}px`)
														: sn.style.removeProperty("margin-left"),
												),
												sn
											);
										},
									}),
									zi,
								),
								zi.addEventListener("blur", () => {
									Se(!1);
								}),
								zi.addEventListener("focus", (sn) => {
									Se(!0);
								}),
								zi.addEventListener("keydown", (sn) => {
									const dn = oe.lexicalEditor();
									dn !== void 0 && (0, g.simulateLexicalKeyPress)(sn, dn);
								});
							const $s = Gn;
							typeof $s == "function" ? (0, E.use)($s, zi) : (Gn = zi),
								(0, d.insert)(
									zi,
									(0, u.createComponent)(p.Show, {
										get when() {
											return Yn();
										},
										get children() {
											return (0, u.createComponent)(c.$Fdc, {
												get contextSessionUuid() {
													return $e()?.contextSessionUuid;
												},
												get contentHeight() {
													return Ti();
												},
												get leftOffset() {
													return cn();
												},
												get containerHeight() {
													return wn();
												},
											});
										},
									}),
									Zi,
								);
							const Us = Fn;
							typeof Us == "function" ? (0, E.use)(Us, nn) : (Fn = nn),
								nn.style.setProperty("z-index", "1000001"),
								nn.style.setProperty("position", "relative"),
								nn.style.setProperty("padding", "4px 4px 0px 4px"),
								nn.style.setProperty("max-width", "500px"),
								nn.style.setProperty("width", "500px"),
								nn.style.setProperty("min-width", "450px"),
								nn.style.setProperty("margin-left", "2px"),
								nn.style.setProperty("font-size", "12px"),
								nn.style.setProperty("line-height", "1.5em"),
								nn.style.setProperty(
									"background-color",
									"var(--vscode-editor-background)",
								),
								nn.style.setProperty("color", "var(--vscode-foreground)"),
								nn.style.setProperty("border-radius", "5px"),
								nn.style.setProperty("box-sizing", "border-box"),
								nn.style.setProperty("overflow-y", "auto"),
								nn.style.setProperty("overflow-x", "hidden"),
								nn.style.setProperty(
									"box-shadow",
									"0 4px 8px var(--vscode-inlineChat-shadow)",
								),
								(0, d.insert)(
									nn,
									(0, u.createComponent)(p.Show, {
										get when() {
											return (
												(0, r.memo)(() => We() !== void 0)() &&
												We()?.trim() !== ""
											);
										},
										get children() {
											const sn = ie();
											return (
												sn.style.setProperty("padding", "0px 4px 2px 0.5rem"),
												sn.style.setProperty(
													"color",
													"var(--vscode-input-placeholderForeground)",
												),
												sn.style.setProperty("text-transform", "uppercase"),
												sn.style.setProperty("font-size", "10px"),
												(0, d.insert)(sn, We),
												sn
											);
										},
									}),
									fn,
								),
								(0, d.insert)(
									nn,
									(0, u.createComponent)(p.Show, {
										get when() {
											return pe.nonPersistentStorage.promptBars.length > 1;
										},
										get children() {
											const sn = ie();
											return (
												sn.style.setProperty("position", "absolute"),
												sn.style.setProperty("right", "14px"),
												sn.style.setProperty("top", "-5.5px"),
												sn.style.setProperty(
													"color",
													"var(--vscode-input-placeholderForeground)",
												),
												sn.style.setProperty("cursor", "pointer"),
												sn.style.setProperty("z-index", "1000002"),
												sn.style.setProperty("padding", "4px"),
												sn.style.setProperty("font-size", "8px"),
												(0, d.insert)(
													sn,
													() =>
														`${Js().findIndex((dn) => dn.id === oe.id) + 1}/${pe.nonPersistentStorage.promptBars.length}`,
												),
												sn
											);
										},
									}),
									fn,
								),
								fn.addEventListener("click", (sn) => {
									yi(!0), sn.stopPropagation();
								}),
								fn.style.setProperty("position", "absolute"),
								fn.style.setProperty("right", "-4px"),
								fn.style.setProperty("top", "-4px"),
								fn.style.setProperty(
									"color",
									"var(--vscode-input-placeholderForeground)",
								),
								fn.style.setProperty("cursor", "pointer"),
								fn.style.setProperty("z-index", "1000002"),
								fn.style.setProperty("padding", "4px"),
								xn.style.setProperty("font-size", "14px"),
								Sn.addEventListener("keydown", ut),
								Sn.addEventListener("blur", () => {
									_t(null), Ft(null);
								});
							const _n = En;
							return (
								typeof _n == "function" ? (0, E.use)(_n, Sn) : (En = Sn),
								Sn.style.setProperty("display", "flex"),
								Sn.style.setProperty("flex-direction", "column"),
								Sn.style.setProperty("margin-top", "0.5rem"),
								Sn.style.setProperty("margin-bottom", "0.25rem"),
								Sn.style.setProperty("gap", "0.25rem"),
								(0, d.insert)(
									Sn,
									(0, u.createComponent)(p.Show, {
										get when() {
											return (
												(0, r.memo)(
													() => ($e()?.data.images.length ?? 0) > 0,
												)() && $e()?.data.images
											);
										},
										children: (sn) =>
											(0, u.createComponent)(p.For, {
												get each() {
													return sn();
												},
												children: (dn) =>
													(0, u.createComponent)(O.$Gbc, {
														image: dn,
														removeImage: () => Rt(dn.uuid),
														get style() {
															return {
																border: "1px solid " + rs(),
																"border-radius": "4px",
																margin: "0px 0.5rem",
																"margin-bottom": "0",
															};
														},
													}),
											}),
									}),
									null,
								),
								(0, d.insert)(
									Sn,
									(0, u.createComponent)(p.Show, {
										get when() {
											return $e();
										},
										get fallback() {
											return (() => {
												const sn = ie();
												return sn.style.setProperty("height", "4px"), sn;
											})();
										},
										children: (sn) =>
											(0, u.createComponent)(R.$Idc, {
												style: { padding: "0px 0.5rem 2px 0.5rem" },
												get contextSessionUuid() {
													return sn().contextSessionUuid;
												},
												get focusedSection() {
													return wi();
												},
												get runningSection() {
													return ai();
												},
												setRunningSection: Ft,
												stopFocusedSection: os,
												containerRef: Fn,
											}),
									}),
									null,
								),
								(0, d.insert)(
									Sn,
									(0, u.createComponent)(p.Show, {
										get when() {
											return (
												(0, r.memo)(() => !!$e()?.data.selections)() &&
												($e()?.data.selections.length ?? 0) > 0
											);
										},
										get children() {
											return (0, u.createComponent)(z.$ecc, {
												class: "prompt-bar-selection-container",
												get each() {
													return $e()?.data.selections.filter((sn) => sn) ?? [];
												},
												get isFocused() {
													return wi() === "code";
												},
												get isRunning() {
													return ai() === "code";
												},
												startRunning: () => Ft("code"),
												stopRunning: () => Ft(null),
												get stopFocused() {
													return os();
												},
												containerRef: Fn,
												get show() {
													return (
														($e()?.data.selections.filter((sn) => sn).length ??
															0) > 0
													);
												},
												type: "code",
												renderItemBorders: !0,
												collapseOthersOnAdd: !0,
												boxPropsFunc: (sn, dn) =>
													(0, F.$cgc)(sn, dn, ae, Ze, {
														alwaysShowToolbar: !0,
													}),
												title: "Code selections",
												children: (sn, dn) =>
													(0, u.createComponent)(B.$xbc, {
														selection: sn,
														style: {
															background: "var(--vscode-editor-background)",
														},
													}),
											});
										},
									}),
									null,
								),
								(0, d.insert)(
									Sn,
									(0, u.createComponent)(p.Show, {
										get when() {
											return ($e()?.data.selectedDocs?.length ?? 0) > 0;
										},
										get children() {
											return (0, u.createComponent)(z.$ecc, {
												class: "prompt-bar-selection-container",
												get isFocused() {
													return wi() === "docs";
												},
												get isRunning() {
													return ai() === "docs";
												},
												startRunning: () => Ft("docs"),
												stopRunning: () => Ft(null),
												get stopFocused() {
													return os();
												},
												get show() {
													return ($e()?.data.selectedDocs ?? []).length > 0;
												},
												containerRef: Fn,
												get each() {
													return (
														$e()?.data.selectedDocs?.filter((sn) => sn) ?? []
													);
												},
												title: "Docs",
												type: "doc",
												renderItemBorders: !0,
												collapseOthersOnAdd: !0,
												boxPropsFunc: (sn) => {
													const dn =
														ae.reactiveStorageService.applicationUserPersistentStorage.personalDocs.find(
															(An) => An.identifier === sn.docId,
														);
													return {
														title: sn.name,
														subTitle:
															dn && (dn.lastUploadedAt || dn.createdAt)
																? `Indexed ${(0, X.$F_b)(dn?.lastUploadedAt || dn?.createdAt || "")}`
																: void 0,
														icon: y.ThemeIcon.asClassName(b.$ak.book),
														onTitleClick() {
															ae.commandService.executeCommand(
																s.$QV,
																"features",
															);
														},
														alwaysShowToolbar: !0,
														onRemove() {
															sn.uuid && gt(sn.uuid);
														},
													};
												},
												children: (sn) => {
													if (sn != null)
														return (() => {
															const dn = ie();
															return (
																dn.style.setProperty("position", "relative"),
																(0, d.insert)(
																	dn,
																	(0, u.createComponent)(U.$Dbc, {
																		selection: sn,
																	}),
																),
																dn
															);
														})();
												},
											});
										},
									}),
									null,
								),
								(0, d.insert)(
									Sn,
									(0, u.createComponent)(p.Show, {
										get when() {
											return (
												(0, r.memo)(
													() =>
														!!ae.reactiveStorageService
															.applicationUserPersistentStorage
															.showAllCmdKContexts,
												)() && $e()
											);
										},
										children: (sn) =>
											(0, u.createComponent)(q.$Mdc, {
												get isFocused() {
													return wi() === "all-context-items-by-score";
												},
												get isRunning() {
													return ai() === "all-context-items-by-score";
												},
												startRunning: () => Ft("all-context-items-by-score"),
												stopRunning: () => Ft(null),
												get stopFocused() {
													return os();
												},
												containerRef: Fn,
												get contextSessionUuid() {
													return sn().contextSessionUuid;
												},
											}),
									}),
									null,
								),
								(0, d.insert)(
									nn,
									(0, u.createComponent)(p.Show, {
										get when() {
											return (0, r.memo)(() => !!Gt())() && $e();
										},
										children: (sn) =>
											(() => {
												const dn = ee(),
													An = dn.firstChild;
												return (
													An.addEventListener("click", (vn) => {
														Fe(), vn.stopPropagation();
													}),
													An.style.setProperty("padding", "0px 0.5rem"),
													An.style.setProperty("white-space", "pre-wrap"),
													An.style.setProperty("word-wrap", "break-word"),
													(0, d.insert)(An, () =>
														(0, A.$N7b)({
															req:
																sn().originalRequest !== void 0
																	? {
																			case: "originalRequest",
																			req: sn().originalRequest.current,
																		}
																	: {
																			case: "cmdKQueryHistory",
																			queryHistory: sn().queryHistory.current,
																		},
															previousStructuredTextsNewestFirst:
																sn().previousStructuredTextsNewestFirst,
														}),
													),
													(0, d.insert)(
														dn,
														(0, u.createComponent)(p.Show, {
															get when() {
																return (
																	(0, r.memo)(
																		() =>
																			!!(_i() || (!ze() && $e()?.chatResponse)),
																	)() &&
																	!(
																		!ze() &&
																		$e()?.chatResponse &&
																		qe().length > 0
																	)
																);
															},
															get fallback() {
																return (0, u.createComponent)(p.Show, {
																	get when() {
																		return (
																			_i() || (!ze() && $e()?.chatResponse)
																		);
																	},
																	get children() {
																		const vn = ie();
																		return (
																			vn.style.setProperty("height", "0.5rem"),
																			vn
																		);
																	},
																});
															},
															get children() {
																const vn = ie();
																return (
																	vn.style.setProperty(
																		"background-color",
																		"var(--vscode-input-foreground)",
																	),
																	vn.style.setProperty("height", "0.5px"),
																	vn.style.setProperty("margin", "0px 0.5rem"),
																	vn.style.setProperty(
																		"max-width",
																		"calc(100% - 1rem)",
																	),
																	vn.style.setProperty("width", "60px"),
																	vn.style.setProperty("opacity", "0.3"),
																	vn.style.setProperty(
																		"margin-bottom",
																		"0.5rem",
																	),
																	vn.style.setProperty("margin-top", "0.3rem"),
																	vn
																);
															},
														}),
														null,
													),
													(0, C.effect)(() =>
														(_i() || (!ze() && $e()?.chatResponse)
															? "0.5"
															: "1") != null
															? dn.style.setProperty(
																	"opacity",
																	_i() || (!ze() && $e()?.chatResponse)
																		? "0.5"
																		: "1",
																)
															: dn.style.removeProperty("opacity"),
													),
													dn
												);
											})(),
									}),
									Un,
								),
								(0, d.insert)(
									nn,
									(0, u.createComponent)(p.Show, {
										get when() {
											return (0, r.memo)(() => !ze())() && $e()?.chatResponse;
										},
										children: (sn) => [
											(() => {
												const dn = ee(),
													An = dn.firstChild;
												return (
													(0, d.insert)(
														dn,
														(0, u.createComponent)(p.Show, {
															get when() {
																return $e()?.inlineChatHistory;
															},
															children: (vn) =>
																(() => {
																	const Pn = ie();
																	return (
																		Pn.style.setProperty(
																			"padding",
																			"0.5rem 0.5rem",
																		),
																		Pn.style.setProperty("padding-top", "0rem"),
																		Pn.style.setProperty(
																			"white-space",
																			"pre-wrap",
																		),
																		Pn.style.setProperty(
																			"word-wrap",
																			"break-word",
																		),
																		Pn.style.setProperty(
																			"font-style",
																			"italic",
																		),
																		(0, d.insert)(
																			Pn,
																			() => vn().current.userMessage,
																		),
																		Pn
																	);
																})(),
														}),
														An,
													),
													An.style.setProperty("padding", "0 0.5rem"),
													An.style.setProperty("white-space", "normal"),
													(0, d.insert)(
														An,
														(0, u.createComponent)(D.$4$b, {
															get rawText() {
																return sn();
															},
															get finished() {
																return !ze();
															},
															codeBlockProps: { shouldRecompute: 1 },
														}),
													),
													(0, C.effect)(
														(vn) => {
															const Pn = qe().length > 0 ? "0.5" : "1",
																es = Gt() ? "0rem" : "0.5rem";
															return (
																Pn !== vn._v$11 &&
																	((vn._v$11 = Pn) != null
																		? dn.style.setProperty("opacity", Pn)
																		: dn.style.removeProperty("opacity")),
																es !== vn._v$12 &&
																	((vn._v$12 = es) != null
																		? An.style.setProperty("padding-bottom", es)
																		: An.style.removeProperty(
																				"padding-bottom",
																			)),
																vn
															);
														},
														{ _v$11: void 0, _v$12: void 0 },
													),
													dn
												);
											})(),
											(0, u.createComponent)(p.Show, {
												get when() {
													return qe().length > 0;
												},
												get children() {
													const dn = ie();
													return (
														dn.style.setProperty(
															"background-color",
															"var(--vscode-input-foreground)",
														),
														dn.style.setProperty("height", "0.5px"),
														dn.style.setProperty("margin", "0px 0.5rem"),
														dn.style.setProperty(
															"max-width",
															"calc(100% - 1rem)",
														),
														dn.style.setProperty("width", "60px"),
														dn.style.setProperty("opacity", "0.3"),
														dn.style.setProperty("margin-bottom", "0.5rem"),
														dn.style.setProperty("margin-top", "0.3rem"),
														dn
													);
												},
											}),
										],
									}),
									Un,
								),
								Un.style.setProperty("display", "flex"),
								(0, d.insert)(as, zn),
								(0, d.insert)(
									Un,
									(0, u.createComponent)(p.Show, {
										get when() {
											return (0, r.memo)(() => !!ze())() && $e()?.chatResponse;
										},
										children: (sn) =>
											(() => {
												const dn = ie();
												return (
													dn.style.setProperty("padding", "0 0.5rem"),
													dn.style.setProperty("padding-top", "0.5rem"),
													dn.style.setProperty("white-space", "normal"),
													(0, d.insert)(
														dn,
														(0, u.createComponent)(D.$4$b, {
															get rawText() {
																return sn();
															},
															get finished() {
																return !ze();
															},
															codeBlockProps: { shouldRecompute: 1 },
														}),
													),
													dn
												);
											})(),
									}),
									Qn,
								),
								(0, d.insert)(
									Un,
									(0, u.createComponent)(p.Show, {
										when: ts,
										get children() {
											return (0, u.createComponent)(n.$Gdc, {
												get id() {
													return oe.id;
												},
												get multiFileEditingState() {
													return ci();
												},
												setMultiFileEditingState: ri,
												get potentialFilesToEdit() {
													return $i();
												},
												get potentialFilesToEditCurrentIndex() {
													return tt();
												},
												setPotentialFilesToEditCurrentIndex: at,
												get selectedFilesToEdit() {
													return pi();
												},
												setSelectedFilesToEdit: Li,
											});
										},
									}),
									Qn,
								),
								Qn.style.setProperty("flex-shrink", "0"),
								Qn.style.setProperty("padding-top", "1px"),
								(0, d.insert)(
									Qn,
									(0, u.createComponent)(a.$tdc, {
										get id() {
											return oe.id;
										},
										get generating() {
											return ze();
										},
										get hideModelToggle() {
											return (0, r.memo)(() => !!ve())() && ns().length > te;
										},
										onModelToggleClose: () => {
											Le();
										},
										get onOverwriteModelSelect() {
											return ve()
												? (sn) =>
														ns()[0].modelDetails.modelName === sn
															? !1
															: (ae.reactiveStorageService.setApplicationUserPersistentStorage(
																	"cmdKGenerationConfigs",
																	(0, o.produce)((An) => {
																		if (An) {
																			const vn = ae.aiService.getModelDetails({
																				specificModelField: "cmd-k",
																			});
																			An.unshift({
																				generationUUID: (0, $.$9g)(),
																				modelDetails: new f.$Zs({
																					...vn,
																					modelName: sn,
																				}),
																			});
																		}
																	}),
																),
																ae.commandService.executeCommand(
																	"editor.action.resizePromptBar",
																),
																!0)
												: void 0;
										},
										get fastModeEnabled() {
											return gi();
										},
										get hasStackedInputBox() {
											return _i();
										},
										get statusUpdateMessages() {
											return $e()?.statusUpdate ?? [];
										},
										onSubmit: Oi,
										onFixErrors: () => {
											const sn = pe.nonPersistentStorage.promptBars.find(
												(dn) => dn.id === oe.id,
											);
											sn !== void 0 &&
												((sn.fixingErrorCounter = 0),
												pe.setNonPersistentStorage(
													"promptBars",
													(dn) => dn.id === sn.id,
													"fixingErrorCounter",
													0,
												),
												Oi({ fixSubmit: !0 }));
										},
										rejectCurrentDiff: () => di({ removeFollowupToo: !0 }),
										removePromptBar: Ye,
										acceptCurrentDiff: Kt,
										cancelCurrentDiff: ti,
										get isEdit() {
											return Ke();
										},
										get plainText() {
											return qe();
										},
										get containerWidth() {
											return $n();
										},
										get isFocused() {
											return Be();
										},
										readonly: !1,
										get areErrorsVisible() {
											return It();
										},
										get queuePositionResponse() {
											return ii();
										},
										get multiFileEditingState() {
											return ci();
										},
										get isMultiFileEditing() {
											return Wi();
										},
										onMultiFileEditSubmit: Gi,
										onImplementInBackgroundSubmit: qi,
										toggleContextSummaryVisible: Nn,
										setTriggerFn: (sn) => {
											ni = sn;
										},
										buttonHint: `${Y.$m ? "\u2318\u2325/" : "ctrl+alt+/"} open menu`,
									}),
								),
								(0, d.insert)(
									nn,
									(0, u.createComponent)(p.Show, {
										when: ts,
										get children() {
											return (0, u.createComponent)(h.$Edc, {
												get id() {
													return oe.id;
												},
												get multiFileEditChainOfThought() {
													return Di();
												},
											});
										},
									}),
									null,
								),
								(0, d.insert)(
									nn,
									(0, u.createComponent)(p.Show, {
										get when() {
											return $e()?.errorDetails;
										},
										children: (sn) =>
											(() => {
												const dn = ie();
												return (
													dn.style.setProperty("padding-bottom", "16px"),
													(0, d.insert)(
														dn,
														(0, u.createComponent)(V.$0ac, {
															get generationUUID() {
																return sn().generationUUID;
															},
															get error() {
																return sn().error;
															},
															get message() {
																return sn().message;
															},
															get rerun() {
																return sn().rerun;
															},
														}),
													),
													dn
												);
											})(),
									}),
									null,
								),
								(0, C.effect)(
									(sn) => {
										const dn = {
												"padding-top": ve() && ns().length > te ? "0px" : "4px",
												"box-sizing": "border-box",
												outline: "none",
												"flex-direction": "row",
												display: "flex",
												"z-index": 100,
												width: "100%",
												...($e()?.top
													? { top: `${$e()?.top}px`, position: "absolute" }
													: {}),
											},
											An = `${cn()}px`,
											vn = `${2 + yn()}px`,
											Pn =
												"1px solid " +
												(Be()
													? "var(--vscode-commandCenter-activeBorder)"
													: "var(--vscode-commandCenter-inactiveBorder)"),
											es = y.ThemeIcon.asClassName(b.$ak.x),
											ls = _i() ? "column" : "row-reverse",
											Jn = _i() ? void 0 : "center",
											ss = Wi() ? 0 : 1,
											us = _i() ? void 0 : "3px",
											Rs = Wi() ? 1 : void 0;
										return (
											(sn._v$ = (0, w.style)(zi, dn, sn._v$)),
											An !== sn._v$2 &&
												((sn._v$2 = An) != null
													? Zi.style.setProperty("width", An)
													: Zi.style.removeProperty("width")),
											vn !== sn._v$3 &&
												((sn._v$3 = vn) != null
													? nn.style.setProperty("margin-right", vn)
													: nn.style.removeProperty("margin-right")),
											Pn !== sn._v$4 &&
												((sn._v$4 = Pn) != null
													? nn.style.setProperty("border", Pn)
													: nn.style.removeProperty("border")),
											es !== sn._v$5 && (0, i.className)(xn, (sn._v$5 = es)),
											ls !== sn._v$6 &&
												((sn._v$6 = ls) != null
													? Un.style.setProperty("flex-direction", ls)
													: Un.style.removeProperty("flex-direction")),
											Jn !== sn._v$7 &&
												((sn._v$7 = Jn) != null
													? Un.style.setProperty("align-items", Jn)
													: Un.style.removeProperty("align-items")),
											ss !== sn._v$8 &&
												((sn._v$8 = ss) != null
													? as.style.setProperty("flex-grow", ss)
													: as.style.removeProperty("flex-grow")),
											us !== sn._v$9 &&
												((sn._v$9 = us) != null
													? as.style.setProperty("padding-bottom", us)
													: as.style.removeProperty("padding-bottom")),
											Rs !== sn._v$10 &&
												((sn._v$10 = Rs) != null
													? Qn.style.setProperty("flex-grow", Rs)
													: Qn.style.removeProperty("flex-grow")),
											sn
										);
									},
									{
										_v$: void 0,
										_v$2: void 0,
										_v$3: void 0,
										_v$4: void 0,
										_v$5: void 0,
										_v$6: void 0,
										_v$7: void 0,
										_v$8: void 0,
										_v$9: void 0,
										_v$10: void 0,
									},
								),
								Fi
							);
						},
					});
				}
				const le = async (oe) => {
					let ae = oe.promptBarStore.nonPersistentStorage.promptBars.find(
						(ye) => ye.id === oe.id,
					);
					if (ae === void 0) return;
					oe.setGenerating(!0),
						oe.setMultiFileEditingState(
							T.MultiFileEditingState.FindingLocations,
						);
					const pe = oe.inProgressMultiFileEditGenerationUUID(),
						$e = oe.plainText();
					for (let ye = 0; ye < 5; ye++) {
						const ue = await oe.vsContext.cmdKService2.getFilesForMultiFileEdit(
							{ promptBarId: ae.id, topK: T.$l8b, query: $e },
						);
						if (pe && !oe.canceledMultiFileEditGenerationUUIDs().includes(pe)) {
							if (ue.length > 0) {
								oe.setPotentialFilesToEdit(
									ue.map((fe) => fe.relativeWorkspacePath),
								),
									oe.setSelectedFilesToEdit(
										ue
											.filter((fe) => fe.userAdded)
											.map((fe) => fe.relativeWorkspacePath),
									),
									oe.setPotentialFilesToEditCurrentIndex(
										oe.selectedFilesToEdit().length,
									),
									oe.setMultiFileEditingState(
										T.MultiFileEditingState.WaitingForUserInput,
									);
								return;
							}
						} else return;
					}
					oe.onSubmit({ editMode: T.EditMode.SingleFile });
				};
			},
		),
		define(
			de[2001],
			he([1, 0, 7, 3, 65, 71, 4366, 31, 8, 5, 39, 45, 205, 670, 18, 906]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Tdc = void 0),
					(e.$Sdc = p),
					(t = mt(t));
				function g() {
					return new c.$KN();
				}
				function p(f, b) {
					return {
						delegate: g(),
						inputBoxDelegate: new h.$Zzb(),
						initText: f ?? "",
						selections: b ?? [],
						images: [],
					};
				}
				let o = class extends i.$1c {
					constructor(b, s, l, y, $, v, S, I) {
						super(),
							(this.id = b),
							(this.keybindingService = s),
							(this.codeEditorService = l),
							(this.editorService = y),
							(this.instantiationService = $),
							(this.commandService = v),
							(this.contextKeyService = S),
							(this.reactiveStorageService = I),
							(this.bigContainer = null),
							(this.reactiveStorageRoot = this.D(
								this.reactiveStorageService.createScoped(this),
							));
						const T = E.EditorContextKeys.editorPromptBarFocused.bindTo(S);
						(this.a = t.$("div.inlineDiffViewZone")),
							this.D(
								(0, C.$Qdc)(
									this.a,
									this,
									() => {
										I.setNonPersistentStorage(
											"promptBars",
											I.nonPersistentStorage.promptBars.filter(
												(P) => P.id !== this.id,
											),
										);
									},
									this.instantiationService,
									this.reactiveStorageService,
									this,
									() => this.editor,
									(P) => {
										this.editor = P;
									},
									(P) => T.set(P),
								),
							);
					}
					dispose() {
						super.dispose();
					}
					registerBigContainer(b) {
						this.bigContainer = b;
					}
					getDomNode() {
						return this.a;
					}
				};
				(e.$Tdc = o),
					(e.$Tdc = o =
						Ne(
							[
								j(1, u.$uZ),
								j(2, w.$dtb),
								j(3, n.$IY),
								j(4, r.$Li),
								j(5, d.$ek),
								j(6, m.$6j),
								j(7, a.$0zb),
							],
							o,
						));
			},
		),
		define(
			de[2002],
			he([
				1, 0, 922, 58, 3, 46, 65, 383, 71, 64, 2001, 8, 5, 45, 18, 479, 31, 19,
				1928, 10,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				var s;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$kec = e.$iec = void 0),
					(e.$jec = I),
					(e.$iec = "editor.action.resizePromptBar");
				class l extends E.$itb {
					constructor() {
						super({
							id: i.$OW,
							label: "Undo Lexical",
							alias: "Undo Lexical",
							precondition: void 0,
						});
					}
					run(k, L, D) {
						T.get(L)?.undoLexical(D.historyState, D.promptBarId);
					}
				}
				(0, E.$ntb)(l);
				class y extends E.$itb {
					constructor() {
						super({
							id: i.$PW,
							label: "Redo Lexical",
							alias: "Redo Lexical",
							precondition: void 0,
						});
					}
					run(k, L, D) {
						T.get(L)?.redoLexical(D.historyState, D.promptBarId);
					}
				}
				(0, E.$ntb)(y);
				class $ extends E.$itb {
					constructor() {
						super({
							id: i.$QW,
							label: "Render View Zone",
							alias: "Render View Zone",
							precondition: void 0,
						});
					}
					run(k, L, D) {
						T.get(L)?.render();
					}
				}
				(0, E.$ntb)($);
				class v extends E.$itb {
					constructor() {
						super({
							id: e.$iec,
							label: "Resize All Heights",
							alias: "Resize All Heights",
							precondition: void 0,
						});
					}
					run(k, L) {
						T.get(L)?.resizeAllHeights();
					}
				}
				(0, E.$ntb)(v);
				function S(P) {
					const k = P.bigContainer;
					return Math.max(62, (k?.scrollHeight ?? 0) + 6);
				}
				function I(P, k) {
					return P.endLineNumberExclusive <= k.startLineNumber
						? d.RangeWhereIs.After
						: P.startLineNumber > k.endLineNumber ||
								(P.startLineNumber === k.endLineNumber &&
									k.endColumn <= 1 &&
									k.startLineNumber !== k.endLineNumber)
							? d.RangeWhereIs.Before
							: d.RangeWhereIs.Overlap;
				}
				let T = class extends w.$1c {
					static {
						s = this;
					}
					static {
						this.ID = "editor.contrib.promptBarController";
					}
					static get(k) {
						return k.getContribution(s.ID);
					}
					constructor(k, L, D, M, N, A, R, O, B) {
						super(),
							(this.j = L),
							(this.m = D),
							(this.n = M),
							(this.q = N),
							(this.s = A),
							(this.t = R),
							(this.u = O),
							(this.w = B),
							(this.f = {}),
							(this.g = []),
							(this.b = k),
							(this.a = this.D(this.m.createScoped(this))),
							this.D(
								this.w.onDidChangeConfiguration((U) => {
									U.affectsConfiguration(i.$sW) && this.render(this.b);
								}),
							),
							(this.h = m.EditorContextKeys.editorHasPromptBar.bindTo(this.q)),
							this.a.onChangeEffect({
								deps: [
									() => this.m.nonPersistentStorage.promptBars,
									() => this.m.nonPersistentStorage.inlineDiffs,
									() =>
										this.m.nonPersistentStorage.promptBars.map((U) => U.diffId),
									() =>
										this.m.nonPersistentStorage.inlineDiffs.map(
											(U) => U.currentRange,
										),
								],
								onChange: ({ deps: U, prevDeps: z, prevReturnValue: F }) => {
									const x = [],
										H = U[0];
									let q = !1;
									if (H)
										for (const V of H) {
											let G;
											z && z[0] && (G = z[0].find((X) => X.id === V.id)),
												(!G || V !== G) && (q = !0);
											let K = F?.find((X) => X.id === V.id),
												J = K?.r;
											if (
												o.$dh.isEqual(this.b.getModel()?.uri, V.uri) &&
												V.diffId === void 0 &&
												F &&
												J &&
												(z === void 0 || G !== void 0) &&
												K?.id === V.id
											) {
												const X = this.b
													.getModel()
													?.deltaDecorations(
														[V.currentRangeDecorationId],
														[
															{
																range: {
																	startLineNumber: J.startLineNumber,
																	endLineNumber: J.endLineNumberExclusive - 1,
																	startColumn: 1,
																	endColumn:
																		this.b
																			.getModel()
																			?.getLineMaxColumn(
																				J.endLineNumberExclusive - 1,
																			) ?? 1,
																},
																options: {
																	description: "promptBar-tracking-range",
																	isWholeLine: !0,
																},
															},
														],
													)[0];
												X !== void 0 &&
													this.m.setNonPersistentStorage(
														"promptBars",
														(Y) => Y.id === V.id,
														"currentRangeDecorationId",
														X,
													),
													(J = null);
											}
											const W = this.m.nonPersistentStorage.inlineDiffs.find(
												(X) => X.id === V.diffId,
											);
											W
												? x.push({ r: { ...W.currentRange }, id: V.id })
												: V.id === K?.id
													? x.push({ r: J, id: V.id })
													: x.push({ r: null, id: V.id });
										}
									return this.render(), x;
								},
							}),
							this.D(
								this.b.onDidChangeModel(() => {
									this.render();
								}),
							),
							this.D(
								this.b.onDidScrollChange(() => {
									this.updateTops();
								}),
							),
							this.D(
								this.s.onCodeEditorAdd((U) => {
									this.render(U);
								}),
							),
							this.D(
								this.s.onCodeEditorRemove(() => {
									this.render();
								}),
							),
							this.D(
								this.b.onDidChangeModelContent((U) => {
									this.render(), this.resizeAllHeights();
								}),
							);
					}
					updateTops() {
						const k = this.b.getModel();
						if (!k) return;
						const L = this.b.getScrollTop();
						let D = !1;
						for (const M of this.m.nonPersistentStorage.promptBars)
							if (M.editorId === this.b.getId() && M.visible !== !1) {
								const N = this.t.getPromptBarCurrentRange(M, k),
									A = N?.startLineNumber ?? 1,
									R = N?.endLineNumberExclusive ?? 2,
									O = this.f[M.id];
								if (O === void 0) continue;
								const B = O.getDomNode();
								if (B === void 0) continue;
								const U = Math.min(120, S(O) ?? 0),
									z = S(O) ?? 0,
									F = parseInt(B.style.top);
								if (isNaN(F)) continue;
								const x = this.b.getTopForLineNumber(R);
								if (L > F + z - U && L < x) {
									(D = !0), this.releaseViewZoneStackingContext();
									const H = Math.min(L - (z - U), x - z);
									this.m.setNonPersistentStorage(
										"promptBars",
										(q) => q.id === M.id,
										"top",
										H - F,
									);
								} else
									this.m.setNonPersistentStorage(
										"promptBars",
										(H) => H.id === M.id,
										"top",
										void 0,
									);
							}
						D || this.reenableStackingContext();
					}
					releaseViewZoneStackingContext() {
						const k = Object.keys(this.f)[0],
							D = this.f[k]?.getDomNode()?.parentElement?.parentElement;
						D &&
							D.classList.contains("lines-content") &&
							D.style.contain === "strict" &&
							D.style.transform === "translate3d(0px, 0px, 0px)" &&
							((D.style.contain = "none"), (D.style.transform = "none"));
					}
					reenableStackingContext() {
						const k = Object.keys(this.f)[0],
							D = this.f[k]?.getDomNode()?.parentElement?.parentElement;
						D &&
							D.classList.contains("lines-content") &&
							D.style.contain === "none" &&
							D.style.transform === "none" &&
							((D.style.contain = "strict"),
							(D.style.transform = "translate3d(0px, 0px, 0px)"));
					}
					undoLexical(k, L) {
						const D = this.f[L];
						D?.editor && (0, t.undo)(D.editor, k);
					}
					redoLexical(k, L) {
						const D = this.f[L];
						D.editor && (0, t.redo)(D.editor, k);
					}
					resizeAllHeights() {
						this.b.changeViewZones((k) => {
							for (const L in this.f) {
								const D = this.f[L].viewZoneId;
								D !== void 0 && k.layoutZone(D);
							}
						});
					}
					render(k) {
						const L = this.w.getValue(i.$sW),
							D = this.b;
						if (
							this.b === void 0 ||
							(k !== void 0 && k.getId() !== this.b.getId())
						)
							return;
						let M = !1;
						const N = this.m.nonPersistentStorage.promptBars;
						if (N) {
							for (const A of N)
								if (
									A.editorId === D.getId() &&
									A.uri.toString() === D.getModel()?.uri.toString()
								)
									M = !0;
								else if (A.editorId) {
									const R = this.s.listCodeEditors();
									if (!R.map((O) => O.getId()).includes(A.editorId)) {
										const O =
											R.find((B) =>
												o.$dh.isEqual(B.getModel()?.uri, A.uri),
											)?.getId() ?? D.getId();
										this.m.setNonPersistentStorage(
											"promptBars",
											(B) => B.id === A.id,
											"editorId",
											O,
										),
											(M = !0);
									}
								}
						}
						this.h.set(M),
							this.b.hasModel() &&
								this.b.changeViewZones((A) => {
									const R = this.b.getWhitespaces(),
										O = new Set(),
										B = [];
									for (const U of this.m.nonPersistentStorage.promptBars) {
										if (U === void 0) continue;
										const z =
											U.uri.toString() === this.b.getModel()?.uri.toString();
										if (z && U.diffId === void 0) {
											const F = this.t.getPromptBarCurrentRange(
												U,
												D.getModel(),
											);
											B.push({
												range: {
													startLineNumber: F?.startLineNumber ?? 1,
													startColumn: 1,
													endLineNumber: (F?.endLineNumberExclusive ?? 2) - 1,
													endColumn: 1,
												},
												options: {
													description: "inline-diff-pending",
													className:
														U.isHeadless === !0
															? "inline-diff-pending-headless"
															: L
																? "inline-diff-pending"
																: "inline-diff-pending-unthemed",
													isWholeLine: !0,
												},
											});
										}
										if (U.visible !== !1 && z) {
											O.add(U.id);
											const F = this.f[U.id]?.viewZoneId;
											if (!R.some((H) => H.id === F)) {
												const H = U.editorId === void 0,
													q = U.editorId !== this.b.getId(),
													V = this.s
														.listCodeEditors()
														.find(
															(te) =>
																te !== void 0 && te.getId() === U.editorId,
														),
													G = o.$dh.isEqual(V?.getModel()?.uri, U.uri);
												if (H)
													this.m.setNonPersistentStorage(
														"promptBars",
														(te) => te.id === U.id,
														"editorId",
														this.b.getId(),
													),
														this.h.set(!0);
												else if (q) continue;
												let K;
												try {
													K = this.j.createInstance(u.$Tdc, U.id);
												} catch (te) {
													console.info("error", te);
													continue;
												}
												this.D(K), this.u.executeCommand(f.$gec.ID);
												const J = this.m,
													W = this.b.getModel(),
													X =
														this.t.getPromptBarCurrentRange(U, W)
															?.startLineNumber ?? 1,
													Y = K.getDomNode(),
													ie = this.t,
													ne = U.id,
													ee = {
														get afterLineNumber() {
															const te = J.nonPersistentStorage.promptBars.find(
																(Q) => Q.id === ne,
															);
															return (
																(ie.getPromptBarCurrentRange(te, W)
																	?.startLineNumber ?? X) - 1
															);
														},
														get heightInPx() {
															return S(K);
														},
														domNode: Y,
														ordinal: i.$OX,
														showInHiddenAreas: !0,
														showEvenWhenNotInViewport: !0,
														afterColumnAffinity: r.PositionAffinity.Right,
													};
												this.f[U.id] = K;
												const _ = A.addZone(ee);
												K.viewZoneId = _;
											}
										}
									}
									this.g = this.b.deltaDecorations(this.g, B);
									for (const U in this.f) {
										const z = this.f[U].viewZoneId;
										z !== void 0 &&
											(O.has(U) ||
												(Object.keys(this.f).length === 1 &&
													this.reenableStackingContext(),
												A.removeZone(z),
												this.f[U].dispose(),
												delete this.f[U],
												this.m.nonPersistentStorage.promptBars.find(
													(x) => x.id === U,
												)?.uri.scheme === "vscode-notebook-cell" &&
													this.m.setNonPersistentStorage(
														"promptBars",
														(x) => x.id === U,
														"editorId",
														void 0,
													),
												this.n.activeEditorPane?.focus()));
									}
								});
					}
				};
				(e.$kec = T),
					(e.$kec =
						T =
						s =
							Ne(
								[
									j(1, h.$Li),
									j(2, c.$0zb),
									j(3, n.$IY),
									j(4, a.$6j),
									j(5, C.$dtb),
									j(6, g.$J7b),
									j(7, p.$ek),
									j(8, b.$gj),
								],
								T,
							)),
					(0, E.$qtb)(T.ID, T, E.EditorContributionInstantiation.Eventually);
			},
		),
		
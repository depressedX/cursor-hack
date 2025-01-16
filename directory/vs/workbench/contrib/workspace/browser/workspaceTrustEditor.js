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
		
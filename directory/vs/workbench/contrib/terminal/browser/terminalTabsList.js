define(
		de[3697],
		he([
			1, 0, 93, 10, 8, 39, 35, 26, 107, 4, 7, 5, 105, 11, 92, 145, 117, 14, 50,
			233, 472, 72, 111, 3, 431, 323, 15, 539, 9, 514, 49, 292, 288, 27, 347,
			469, 52, 237, 690, 1261, 106, 6, 23, 806, 616, 87, 160,
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
				(e.$3Uc = e.TerminalTabsListSizes = void 0),
				(u = mt(u)),
				(y = xi(y));
			const J = u.$;
			var W;
			(function (_) {
				(_[(_.TabHeight = 22)] = "TabHeight"),
					(_[(_.NarrowViewWidth = 46)] = "NarrowViewWidth"),
					(_[(_.WideViewMinimumWidth = 80)] = "WideViewMinimumWidth"),
					(_[(_.DefaultWidth = 120)] = "DefaultWidth"),
					(_[(_.MidpointViewWidth = 63)] = "MidpointViewWidth"),
					(_[(_.ActionbarMinimumWidth = 105)] = "ActionbarMinimumWidth"),
					(_[(_.MaximumWidth = 500)] = "MaximumWidth");
			})(W || (e.TerminalTabsListSizes = W = {}));
			let X = class extends t.$yMb {
				constructor(te, Q, Z, se, re, le, oe, ae, pe, $e, ye, ue) {
					super(
						"TerminalTabsList",
						te,
						{
							getHeight: () => W.TabHeight,
							getTemplateId: () => "terminal.tabs",
						},
						[
							ae.createInstance(Y, te, ae.createInstance(b.$uPb, b.$tPb), () =>
								this.getSelectedElements(),
							),
						],
						{
							horizontalScrolling: !1,
							supportDynamicHeights: !1,
							selectionNavigation: !0,
							identityProvider: { getId: (me) => me?.instanceId },
							accessibilityProvider: ae.createInstance(ie),
							smoothScrolling: re.getValue("workbench.list.smoothScrolling"),
							multipleSelectionSupport: !0,
							paddingBottom: W.TabHeight,
							dnd: ae.createInstance(ne),
							openOnSingleClick: !0,
						},
						Q,
						Z,
						re,
						ae,
					),
						(this.V = re),
						(this.W = le),
						(this.X = oe),
						(this.Y = $e),
						(this.Z = ue);
					const fe = [
						this.X.onDidChangeInstances(() => this.refresh()),
						this.X.onDidChangeGroups(() => this.refresh()),
						this.X.onDidShow(() => this.refresh()),
						this.X.onDidChangeInstanceCapability(() => this.refresh()),
						this.W.onAnyInstanceTitleChange(() => this.refresh()),
						this.W.onAnyInstanceIconChange(() => this.refresh()),
						this.W.onAnyInstancePrimaryStatusChange(() => this.refresh()),
						this.W.onDidChangeConnectionState(() => this.refresh()),
						this.Y.onDidColorThemeChange(() => this.refresh()),
						this.X.onDidChangeActiveInstance((me) => {
							if (me) {
								const ve = this.X.instances.indexOf(me);
								this.setSelection([ve]), this.reveal(ve);
							}
							this.refresh();
						}),
					];
					this.y.add(
						ye.onWillShutdown((me) => {
							(0, $.$Vc)(fe), (fe.length = 0);
						}),
					),
						this.y.add(
							(0, $.$Yc)(() => {
								(0, $.$Vc)(fe), (fe.length = 0);
							}),
						),
						this.y.add(
							this.onMouseDblClick(async (me) => {
								if (this.getFocus().length === 0) {
									const ge = await this.W.createTerminal({
										location: p.TerminalLocation.Panel,
									});
									this.X.setActiveInstance(ge), await ge.focusWhenReady();
								}
								this.W.getEditingTerminal()?.instanceId !==
									me.element?.instanceId &&
									this.ab() === "doubleClick" &&
									this.getFocus().length === 1 &&
									me.element?.focus(!0);
							}),
						),
						this.y.add(
							this.onMouseClick(async (me) => {
								this.W.getEditingTerminal()?.instanceId !==
									me.element?.instanceId &&
									(me.browserEvent.altKey && me.element
										? await this.W.createTerminal({
												location: { parentTerminal: me.element },
											})
										: this.ab() === "singleClick" &&
											this.getSelection().length <= 1 &&
											me.element?.focus(!0));
							}),
						),
						this.y.add(
							this.onContextMenu((me) => {
								if (!me.element) {
									this.setSelection([]);
									return;
								}
								const ve = this.getSelectedElements();
								(!ve || !ve.find((ge) => me.element === ge)) &&
									this.setFocus(me.index !== void 0 ? [me.index] : []);
							}),
						),
						(this.S = B.TerminalContextKeys.tabsSingularSelection.bindTo(Q)),
						(this.U = B.TerminalContextKeys.splitTerminal.bindTo(Q)),
						this.y.add(this.onDidChangeSelection((me) => this.bb())),
						this.y.add(this.onDidChangeFocus(() => this.bb())),
						this.y.add(
							this.onDidOpen(async (me) => {
								const ve = me.element;
								ve &&
									(this.X.setActiveInstance(ve),
									me.editorOptions.preserveFocus ||
										(await ve.focusWhenReady()));
							}),
						),
						this.R ||
							((this.R = this.y.add(ae.createInstance(ee))),
							this.y.add(pe.registerDecorationsProvider(this.R))),
						this.refresh();
				}
				ab() {
					return this.V.getValue(p.TerminalSettingId.TabsFocusMode);
				}
				refresh(te = !0) {
					te && this.W.isEditable(void 0) && this.domFocus(),
						this.splice(0, this.length, this.X.instances.slice());
				}
				focusHover() {
					const te = this.getSelectedElements()[0];
					te &&
						this.Z.showHover(
							{
								...(0, z.$ZUc)(te),
								target: this.getHTMLElement(),
								trapFocus: !0,
							},
							!0,
						);
				}
				bb() {
					this.S.set(this.getSelectedElements().length === 1);
					const te = this.getFocusedElements();
					this.U.set(te.length > 0 && this.X.instanceIsSplit(te[0]));
				}
			};
			(e.$3Uc = X),
				(e.$3Uc = X =
					Ne(
						[
							j(1, w.$6j),
							j(2, t.$fMb),
							j(3, C.$iP),
							j(4, i.$gj),
							j(5, m.$iIb),
							j(6, m.$lIb),
							j(7, a.$Li),
							j(8, s.$sPb),
							j(9, C.$iP),
							j(10, O.$n6),
							j(11, l.$Uyb),
						],
						X,
					));
			let Y = class {
				constructor(te, Q, Z, se, re, le, oe, ae, pe, $e, ye, ue, fe) {
					(this.a = te),
						(this.b = Q),
						(this.c = Z),
						(this.d = se),
						(this.f = re),
						(this.g = le),
						(this.h = oe),
						(this.j = ae),
						(this.k = pe),
						(this.l = $e),
						(this.m = ye),
						(this.n = ue),
						(this.o = fe),
						(this.templateId = "terminal.tabs");
				}
				renderTemplate(te) {
					const Q = u.$fhb(te, J(".terminal-tabs-entry")),
						Z = {},
						se = this.b.create(Q, {
							supportHighlights: !0,
							supportDescriptionHighlights: !0,
							supportIcons: !0,
							hoverDelegate: {
								delay: this.k.getValue("workbench.hover.delay"),
								showHover: (oe) =>
									this.j.showHover({
										...oe,
										actions: Z.hoverActions,
										target: Q,
										persistence: { hideOnHover: !0 },
										appearance: { showPointer: !0 },
										position: {
											hoverPosition:
												this.f.config.tabs.location === "left"
													? K.HoverPosition.RIGHT
													: K.HoverPosition.LEFT,
										},
									}),
							},
						}),
						re = u.$fhb(se.element, J(".actions")),
						le = new h.$eib(re, {
							actionRunner: new V.$yUc(),
							actionViewItemProvider: (oe, ae) =>
								oe instanceof c.$2X
									? this.d.createInstance(n.$Lyb, oe, {
											hoverDelegate: ae.hoverDelegate,
										})
									: void 0,
						});
					return {
						element: Q,
						label: se,
						actionBar: le,
						context: Z,
						elementDisposables: new $.$Zc(),
					};
				}
				shouldHideText() {
					return this.a ? this.a.clientWidth < W.MidpointViewWidth : !1;
				}
				shouldHideActionBar() {
					return this.a ? this.a.clientWidth <= W.ActionbarMinimumWidth : !1;
				}
				renderElement(te, Q, Z) {
					const se = !this.shouldHideText(),
						re = this.h.getGroupForInstance(te);
					if (!re)
						throw new Error(
							`Could not find group for instance "${te.instanceId}"`,
						);
					Z.element.classList.toggle("has-text", se),
						Z.element.classList.toggle(
							"is-active",
							this.h.activeInstance === te,
						);
					let le = "";
					if (re.terminalInstances.length > 1) {
						const ve = re.terminalInstances.indexOf(te);
						ve === 0
							? (le = "\u250C ")
							: ve === re.terminalInstances.length - 1
								? (le = "\u2514 ")
								: (le = "\u251C ");
					}
					const oe = (0, z.$ZUc)(te);
					Z.context.hoverActions = oe.actions;
					const ae = this.d.invokeFunction(k.$Tnc, te),
						pe = !this.shouldHideActionBar();
					let $e = "";
					if (se)
						this.fillActionBar(te, Z),
							($e = le),
							te.icon && ($e += `$(${ae}) ${te.title}`);
					else {
						const ve = te.statusList.primary;
						ve && ve.severity > y.default.Ignore
							? ($e = `${le}$(${ve.icon?.id || ae})`)
							: ($e = `${le}$(${ae})`);
					}
					pe || Z.actionBar.clear(),
						Z.elementDisposables.add(
							u.$0fb(Z.element, u.$$gb.AUXCLICK, (ve) => {
								ve.stopImmediatePropagation(),
									ve.button === 1 && this.g.safeDisposeTerminal(te);
							}),
						);
					const ye = [],
						ue = (0, k.$Onc)(te);
					ue && ye.push(ue);
					const fe = (0, k.$Snc)(te, this.n.getColorTheme().type);
					fe && ye.push(...fe),
						Z.label.setResource(
							{
								resource: te.resource,
								name: $e,
								description: se ? te.description : void 0,
							},
							{
								fileDecorations: { colors: !0, badges: se },
								title: {
									markdown: oe.content,
									markdownNotSupportedFallback: void 0,
								},
								extraClasses: ye,
							},
						);
					const me = this.g.getEditableData(te);
					Z.label.element.classList.toggle("editable-tab", !!me),
						me &&
							(Z.elementDisposables.add(
								this.q(
									Z.label.element.querySelector(".monaco-icon-label-container"),
									te,
									me,
								),
							),
							Z.actionBar.clear());
				}
				q(te, Q, Z) {
					const se = Q.title || "",
						re = new D.$Mob(te, this.o, {
							validationOptions: {
								validation: (pe) => {
									const $e = Z.validationMessage(pe);
									return !$e || $e.severity !== y.default.Error
										? null
										: {
												content: $e.content,
												formatContent: !0,
												type: D.MessageType.ERROR,
											};
								},
							},
							ariaLabel: (0, r.localize)(10157, null),
							inputBoxStyles: F.$wyb,
						});
					(re.element.style.height = "22px"),
						(re.value = se),
						re.focus(),
						re.select({ start: 0, end: se.length });
					const le = (0, M.$hb)((pe, $e) => {
							re.element.style.display = "none";
							const ye = re.value;
							(0, $.$Vc)(ae), re.element.remove(), $e && Z.onFinish(ye, pe);
						}),
						oe = () => {
							if (re.isInputValid()) {
								const pe = Z.validationMessage(re.value);
								pe
									? re.showMessage({
											content: pe.content,
											formatContent: !0,
											type:
												pe.severity === y.default.Info
													? D.MessageType.INFO
													: pe.severity === y.default.Warning
														? D.MessageType.WARNING
														: D.MessageType.ERROR,
										})
									: re.hideMessage();
							}
						};
					oe();
					const ae = [
						re,
						u.$$fb(re.inputElement, u.$$gb.KEY_DOWN, (pe) => {
							pe.stopPropagation(),
								pe.equals(N.KeyCode.Enter)
									? le(re.isInputValid(), !0)
									: pe.equals(N.KeyCode.Escape) && le(!1, !0);
						}),
						u.$$fb(re.inputElement, u.$$gb.KEY_UP, (pe) => {
							oe();
						}),
						u.$0fb(re.inputElement, u.$$gb.BLUR, () => {
							le(re.isInputValid(), !0);
						}),
					];
					return (0, $.$Yc)(() => {
						le(!1, !1);
					});
				}
				disposeElement(te, Q, Z) {
					Z.elementDisposables.clear(), Z.actionBar.clear();
				}
				disposeTemplate(te) {
					te.elementDisposables.dispose(),
						te.label.dispose(),
						te.actionBar.dispose();
				}
				fillActionBar(te, Q) {
					const Z = [
						new f.$rj(
							g.TerminalCommandId.SplitActiveTab,
							R.$hUc.split.short,
							d.ThemeIcon.asClassName(o.$ak.splitHorizontal),
							!0,
							async () => {
								this.r(te, async (se) => {
									this.g.createTerminal({ location: { parentTerminal: se } });
								});
							},
						),
						new f.$rj(
							g.TerminalCommandId.KillActiveTab,
							R.$hUc.kill.short,
							d.ThemeIcon.asClassName(o.$ak.trashcan),
							!0,
							async () => {
								this.r(te, (se) => this.g.safeDisposeTerminal(se));
							},
						),
					];
					Q.actionBar.clear();
					for (const se of Z)
						Q.actionBar.push(se, {
							icon: !0,
							label: !1,
							keybinding: this.l.lookupKeybinding(se.id)?.getLabel(),
						});
				}
				r(te, Q) {
					const Z = this.c();
					if (Z.includes(te)) for (const se of Z) se && Q(se);
					else Q(te);
					this.h.focusTabs(), this.m.lastFocusedList?.focusNext();
				}
			};
			Y = Ne(
				[
					j(3, a.$Li),
					j(4, m.$jIb),
					j(5, m.$iIb),
					j(6, m.$lIb),
					j(7, l.$Uyb),
					j(8, i.$gj),
					j(9, E.$uZ),
					j(10, t.$fMb),
					j(11, C.$iP),
					j(12, L.$Wxb),
				],
				Y,
			);
			let ie = class {
				constructor(te) {
					this.a = te;
				}
				getWidgetAriaLabel() {
					return (0, r.localize)(10158, null);
				}
				getAriaLabel(te) {
					let Q = "";
					const Z = this.a.getGroupForInstance(te);
					if (Z && Z.terminalInstances?.length > 1) {
						const se = Z.terminalInstances.indexOf(te);
						Q = (0, r.localize)(
							10159,
							null,
							te.instanceId,
							te.title,
							se + 1,
							Z.terminalInstances.length,
						);
					} else Q = (0, r.localize)(10160, null, te.instanceId, te.title);
					return Q;
				}
			};
			ie = Ne([j(0, m.$lIb)], ie);
			let ne = class extends $.$1c {
				constructor(te, Q, Z) {
					super(),
						(this.f = te),
						(this.g = Q),
						(this.h = Z),
						(this.b = $.$1c.None),
						(this.c = this.f.getPrimaryBackend());
				}
				getDragURI(te) {
					return this.f.getEditingTerminal()?.instanceId === te.instanceId
						? null
						: te.resource.toString();
				}
				getDragLabel(te, Q) {
					return te.length === 1 ? te[0].title : void 0;
				}
				onDragLeave() {
					(this.a = void 0), this.b.dispose(), (this.b = $.$1c.None);
				}
				onDragStart(te, Q) {
					if (!Q.dataTransfer) return;
					const Z = te.getData();
					if (!Array.isArray(Z)) return;
					const se = Z.filter((re) => "instanceId" in re);
					se.length > 0 &&
						Q.dataTransfer.setData(
							m.TerminalDataTransfers.Terminals,
							JSON.stringify(se.map((re) => re.resource.toString())),
						);
				}
				onDragOver(te, Q, Z, se, re) {
					if (
						te instanceof T.$yib &&
						!(0, A.$mzb)(
							re,
							S.$Ohb.FILES,
							S.$Ohb.RESOURCES,
							m.TerminalDataTransfers.Terminals,
							A.$hzb.FILES,
						)
					)
						return !1;
					const le = this.a !== Q;
					return (
						le && (this.b.dispose(), (this.a = Q)),
						!Q && !(0, A.$mzb)(re, m.TerminalDataTransfers.Terminals)
							? te instanceof T.$wib
							: (le &&
									Q &&
									(this.b = (0, I.$Oh)(
										() => {
											this.f.setActiveInstance(Q), (this.a = void 0);
										},
										500,
										this.B,
									)),
								{
									feedback: Z ? [Z] : void 0,
									accept: !0,
									effect: {
										type: v.ListDragOverEffectType.Move,
										position: v.ListDragOverEffectPosition.Over,
									},
								})
					);
				}
				async drop(te, Q, Z, se, re) {
					this.b.dispose(), (this.a = void 0);
					let le;
					const oe = [],
						ae = (0, U.$VUc)(re);
					if (ae)
						for (const pe of ae) {
							const $e = this.f.getInstanceFromResource(pe);
							if ($e)
								Array.isArray(le) ? le.push($e) : (le = [$e]),
									this.f.moveToTerminalView($e);
							else if (this.c) {
								const ye = (0, U.$TUc)(pe);
								ye.instanceId &&
									oe.push(
										this.c.requestDetachInstance(ye.workspaceId, ye.instanceId),
									);
							}
						}
					if (oe.length) {
						let pe = await Promise.all(oe);
						pe = pe.filter((ye) => ye !== void 0);
						let $e;
						for (const ye of pe)
							$e = await this.f.createTerminal({
								config: { attachPersistentProcess: ye },
							});
						$e && this.f.setActiveInstance($e);
						return;
					}
					if (le === void 0) {
						if (!(te instanceof T.$wib)) {
							this.j(Q, re);
							return;
						}
						const pe = te.getData();
						if (!pe || !Array.isArray(pe)) return;
						le = [];
						for (const $e of pe) "instanceId" in $e && le.push($e);
					}
					if (!Q) {
						this.g.moveGroupToEnd(le), this.f.setActiveInstance(le[0]);
						return;
					}
					this.g.moveGroup(le, Q), this.f.setActiveInstance(le[0]);
				}
				async j(te, Q) {
					if (!te || !Q.dataTransfer) return;
					let Z;
					const se = Q.dataTransfer.getData(S.$Ohb.RESOURCES);
					se && (Z = P.URI.parse(JSON.parse(se)[0]));
					const re = Q.dataTransfer.getData(A.$hzb.FILES);
					!Z && re && (Z = P.URI.file(JSON.parse(re)[0])),
						!Z &&
							Q.dataTransfer.files.length > 0 &&
							this.h.getPathForFile(Q.dataTransfer.files[0]) &&
							(Z = P.URI.file(this.h.getPathForFile(Q.dataTransfer.files[0]))),
						Z &&
							(this.f.setActiveInstance(te),
							te.focus(),
							await te.sendPath(Z, !1));
				}
			};
			ne = Ne([j(0, m.$iIb), j(1, m.$lIb), j(2, G.$asb)], ne);
			let ee = class extends $.$1c {
				constructor(te) {
					super(),
						(this.b = te),
						(this.label = (0, r.localize)(10161, null)),
						(this.a = this.D(new x.$re())),
						(this.onDidChange = this.a.event),
						this.D(
							this.b.onAnyInstancePrimaryStatusChange((Q) =>
								this.a.fire([Q.resource]),
							),
						);
				}
				provideDecorations(te) {
					if (te.scheme !== H.Schemas.vscodeTerminal) return;
					const Q = this.b.getInstanceFromResource(te);
					if (!Q) return;
					const Z = Q?.statusList?.primary;
					if (Z?.icon)
						return {
							color: (0, q.$gHb)(Z.severity),
							letter: Z.icon,
							tooltip: Z.tooltip,
						};
				}
			};
			ee = Ne([j(0, m.$iIb)], ee);
		},
	),
		
import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../nls.js';
import '../../../../../base/common/async.js';
import '../../../../../base/common/actions.js';
import '../../../../../base/browser/dom.js';
import '../../../../../platform/contextview/browser/contextView.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../services/editor/common/editorGroupsService.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../platform/keybinding/common/keybinding.js';
import '../../../../common/editor.js';
import '../fileActions.js';
import '../../common/files.js';
import '../../../../browser/parts/editor/editorActions.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../platform/theme/common/themeService.js';
import '../../../../../platform/theme/common/colorRegistry.js';
import '../../../../../platform/list/browser/listService.js';
import '../../../../../base/browser/ui/list/list.js';
import '../../../../browser/labels.js';
import '../../../../../base/browser/ui/actionbar/actionbar.js';
import '../../../../../platform/telemetry/common/telemetry.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../platform/actions/common/actions.js';
import '../fileConstants.js';
import '../../../../common/contextkeys.js';
import '../../../../../platform/dnd/browser/dnd.js';
import '../../../../browser/dnd.js';
import '../../../../browser/parts/views/viewPane.js';
import '../../../../../base/browser/dnd.js';
import '../../../../../base/common/decorators.js';
import '../../../../../base/browser/ui/list/listView.js';
import '../../../../services/workingCopy/common/workingCopyService.js';
import '../../../../services/workingCopy/common/workingCopy.js';
import '../../../../services/filesConfiguration/common/filesConfigurationService.js';
import '../../../../common/views.js';
import '../../../../../platform/opener/common/opener.js';
import '../../../../../base/browser/ui/splitview/splitview.js';
import '../../../../../base/common/comparers.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/keyCodes.js';
import '../../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../../platform/commands/common/commands.js';
import '../../../../../base/common/network.js';
import '../../../../../base/common/resources.js';
import '../../../../../base/browser/window.js';
import '../../../../browser/parts/editor/editorGroupView.js';
import '../../../../../platform/hover/browser/hover.js';
import '../../../../../platform/files/common/files.js';
import '../../../../../css!vs/workbench/contrib/files/browser/views/media/openeditors.js';
define(
			de[1992],
			he([
				1, 0, 4, 15, 50, 7, 49, 5, 66, 10, 39, 44, 1057, 220, 1340, 8, 35, 51,
				93, 431, 233, 105, 32, 3, 11, 554, 100, 347, 362, 146, 323, 138, 539,
				227, 334, 170, 60, 41, 279, 535, 14, 27, 43, 31, 23, 19, 75, 1984, 72,
				22, 2441,
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
			) {
				"use strict";
				var Y;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pAc = void 0),
					(t = mt(t)),
					(E = mt(E));
				const ie = E.$;
				let ne = class extends k.$TMb {
					static {
						Y = this;
					}
					static {
						this.a = 9;
					}
					static {
						this.b = 0;
					}
					static {
						this.ID = "workbench.explorer.openEditorsView";
					}
					static {
						this.NAME = t.localize2(7011, "Open Editors");
					}
					constructor(
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
					) {
						super(oe, fe, $e, ue, me, pe, ae, Fe, ve, ge, be),
							(this.ab = ye),
							(this.sb = Ce),
							(this.cc = Le),
							(this.dc = Oe),
							(this.r = !1),
							(this.s = []),
							(this.L = !1),
							(this.h = 0),
							(this.t = ue.getValue("explorer.openEditors.sortOrder")),
							this.ec(),
							this.D(this.Ab.onDidChangeConfiguration((xe) => this.qc(xe))),
							this.D(this.sb.onDidChangeDirty((xe) => this.sc(xe)));
					}
					ec() {
						const oe = () => {
								if (!this.isBodyVisible() || !this.m) {
									this.r = !0;
									return;
								}
								this.f?.schedule(this.h);
							},
							ae = this.D(new $.$0c()),
							pe = ($e) => {
								const ye = $e.onDidModelChange((ue) => {
									if (this.f?.isScheduled()) return;
									if (!this.isBodyVisible() || !this.m) {
										this.r = !0;
										return;
									}
									const fe = this.lc($e, ue.editor);
									switch (ue.kind) {
										case a.GroupModelChangeKind.EDITOR_ACTIVE:
											this.pc();
											break;
										case a.GroupModelChangeKind.GROUP_INDEX:
										case a.GroupModelChangeKind.GROUP_LABEL:
											fe >= 0 && this.m.splice(fe, 1, [$e]);
											break;
										case a.GroupModelChangeKind.EDITOR_DIRTY:
										case a.GroupModelChangeKind.EDITOR_STICKY:
										case a.GroupModelChangeKind.EDITOR_CAPABILITIES:
										case a.GroupModelChangeKind.EDITOR_PIN:
										case a.GroupModelChangeKind.EDITOR_LABEL:
											this.m.splice(fe, 1, [new c.$UUb(ue.editor, $e)]),
												this.pc();
											break;
										case a.GroupModelChangeKind.EDITOR_OPEN:
										case a.GroupModelChangeKind.EDITOR_MOVE:
										case a.GroupModelChangeKind.EDITOR_CLOSE:
											oe();
											break;
									}
								});
								ae.set($e.id, ye);
							};
						this.ab.groups.forEach(($e) => pe($e)),
							this.D(
								this.ab.onDidAddGroup(($e) => {
									pe($e), oe();
								}),
							),
							this.D(this.ab.onDidMoveGroup(() => oe())),
							this.D(this.ab.onDidChangeActiveGroup(() => this.pc())),
							this.D(
								this.ab.onDidRemoveGroup(($e) => {
									ae.deleteAndDispose($e.id), oe();
								}),
							);
					}
					Qb(oe) {
						super.Qb(oe, this.title);
						const ae = E.$fhb(oe, ie(".open-editors-dirty-count-container"));
						(this.c = E.$fhb(ae, ie(".dirty-count.monaco-count-badge.long"))),
							(this.c.style.backgroundColor = (0, o.$rP)(o.$1P)),
							(this.c.style.color = (0, o.$rP)(o.$2P)),
							(this.c.style.border = `1px solid ${(0, o.$rP)(o.$OP)}`),
							this.sc();
					}
					W(oe) {
						super.W(oe),
							oe.classList.add("open-editors"),
							oe.classList.add("show-file-icons");
						const ae = new _();
						this.m && this.m.dispose(),
							this.n && this.n.clear(),
							(this.j = new Z(this.t, this.Db, this.ab)),
							(this.n = this.Db.createInstance(s.$uPb, {
								onDidChangeVisibility: this.onDidChangeBodyVisibility,
							})),
							(this.m = this.Db.createInstance(
								f.$yMb,
								"OpenEditors",
								oe,
								ae,
								[
									new te(this.yb, this.Db),
									new Q(this.n, this.Db, this.yb, this.Ab),
								],
								{
									identityProvider: {
										getId: (ye) =>
											ye instanceof c.$UUb ? ye.getId() : ye.id.toString(),
									},
									dnd: this.j,
									overrideStyles: this.Zb().listOverrideStyles,
									accessibilityProvider: new se(),
								},
							)),
							this.D(this.m),
							this.D(this.n);
						let pe = [];
						(this.f = this.D(
							new i.$Yh(() => {
								if (!this.m) return;
								pe = (0, $.$Vc)(pe);
								const ye = this.m.length,
									ue = this.kc();
								this.m.splice(0, this.m.length, ue),
									this.pc(),
									ye !== this.m.length && this.rc(),
									(this.r = !1),
									(this.t === "alphabetical" || this.t === "fullPath") &&
										ue.forEach((fe) => {
											fe instanceof c.$UUb &&
												pe.push(
													fe.editor.onDidChangeLabel(() => this.f?.schedule()),
												);
										});
							}, this.h),
						)),
							this.rc(),
							this.hc(),
							this.D(this.m.onContextMenu((ye) => this.nc(ye))),
							this.D(
								this.m.onMouseMiddleClick((ye) => {
									if (ye && ye.element instanceof c.$UUb) {
										if (
											(0, a.$z1)(
												ye.element.group,
												ye.element.editor,
												a.EditorCloseMethod.MOUSE,
												this.ab.partOptions,
											)
										)
											return;
										ye.element.group.closeEditor(ye.element.editor, {
											preserveFocus: !0,
										});
									}
								}),
							),
							this.D(
								this.m.onDidOpen((ye) => {
									const ue = ye.element;
									if (ue)
										if (ue instanceof c.$UUb) {
											if (
												E.$7gb(ye.browserEvent) &&
												ye.browserEvent.button === 1
											)
												return;
											this.oc(() => {
												this.mc(ue, {
													preserveFocus: ye.editorOptions.preserveFocus,
													pinned: ye.editorOptions.pinned,
													sideBySide: ye.sideBySide,
												});
											});
										} else
											this.oc(() => {
												this.ab.activateGroup(ue),
													ye.editorOptions.preserveFocus || ue.focus();
											});
									else return;
								}),
							),
							this.f.schedule(0),
							this.D(
								this.onDidChangeBodyVisibility((ye) => {
									ye && this.r && this.f?.schedule(0);
								}),
							);
						const $e = this.Cb.getViewContainerModel(
							this.Cb.getViewContainerByViewId(this.id),
						);
						this.D(
							$e.onDidChangeAllViewDescriptors(() => {
								this.rc();
							}),
						);
					}
					hc() {
						if (!this.m) return;
						c.$HUb.bindTo(this.m.contextKeyService),
							c.$IUb.bindTo(this.m.contextKeyService);
						const oe = S.$dVb.bindTo(this.Bb),
							ae = S.$eVb.bindTo(this.Bb),
							pe = S.$fVb.bindTo(this.Bb),
							$e = S.$gVb.bindTo(this.Bb),
							ye = this.Db.createInstance(I.$BQb);
						this.D(ye),
							this.D(
								this.m.onDidChangeFocus((ue) => {
									ye.reset(), oe.reset(), ae.reset(), pe.reset();
									const fe = ue.elements.length ? ue.elements[0] : void 0;
									if (fe instanceof c.$UUb) {
										const me = fe.getResource();
										ae.set(fe.editor.isDirty() && !fe.editor.isSaving()),
											pe.set(!!fe.editor.isReadonly()),
											ye.set(me ?? null);
									} else fe && oe.set(!0);
								}),
							),
							this.D(
								this.m.onDidChangeSelection((ue) => {
									const fe = ue.elements.every((me) => {
										if (me instanceof c.$UUb) {
											const ve = me.getResource();
											return (
												ve &&
												(ve.scheme === V.Schemas.untitled ||
													this.dc.hasProvider(ve))
											);
										}
										return !1;
									});
									$e.set(fe);
								}),
							);
					}
					focus() {
						super.focus(), this.m?.domFocus();
					}
					X(oe, ae) {
						super.X(oe, ae), this.m?.layout(oe, ae);
					}
					get jc() {
						return this.ab.groups.length > 1;
					}
					kc() {
						return (
							(this.s = []),
							this.ab.getGroups(m.GroupsOrder.GRID_APPEARANCE).forEach((oe) => {
								this.jc && this.s.push(oe);
								let ae = oe.editors.map((pe) => new c.$UUb(pe, oe));
								this.t === "alphabetical"
									? (ae = ae.sort((pe, $e) =>
											(0, z.$4r)(pe.editor.getName(), $e.editor.getName()),
										))
									: this.t === "fullPath" &&
										(ae = ae.sort((pe, $e) => {
											const ye = pe.editor.resource,
												ue = $e.editor.resource;
											if (ye === void 0 && ue === void 0)
												return (0, z.$4r)(
													pe.editor.getName(),
													$e.editor.getName(),
												);
											if (ye === void 0) return -1;
											if (ue === void 0) return 1;
											{
												const fe = ye.scheme,
													me = ue.scheme;
												return fe !== V.Schemas.file && me !== V.Schemas.file
													? G.$fh.compare(ye, ue)
													: fe !== V.Schemas.file
														? -1
														: me !== V.Schemas.file
															? 1
															: G.$fh.compare(ye, ue);
											}
										})),
									this.s.push(...ae);
							}),
							this.s
						);
					}
					lc(oe, ae) {
						return ae
							? this.s.findIndex(
									(pe) =>
										pe instanceof c.$UUb &&
										pe.editor === ae &&
										pe.group.id === oe.id,
								)
							: this.s.findIndex(
									(pe) => !(pe instanceof c.$UUb) && pe.id === oe.id,
								);
					}
					mc(oe, ae) {
						oe &&
							(this.Gb.publicLog2("workbenchActionExecuted", {
								id: "workbench.files.openFile",
								from: "openEditors",
							}),
							(ae.sideBySide && ae.preserveFocus) ||
								this.ab.activateGroup(oe.group),
							(ae.sideBySide ? this.ab.sideGroup : oe.group).openEditor(
								oe.editor,
								ae,
							));
					}
					nc(oe) {
						if (!oe.element) return;
						const ae = oe.element;
						this.zb.showContextMenu({
							menuId: v.$XX.OpenEditorsContext,
							menuActionOptions: {
								shouldForwardArgs: !0,
								arg:
									ae instanceof c.$UUb ? a.$A1.getOriginalUri(ae.editor) : {},
							},
							contextKeyService: this.m?.contextKeyService,
							getAnchor: () => oe.anchor,
							getActionsContext: () =>
								ae instanceof c.$UUb
									? {
											groupId: ae.groupId,
											editorIndex: ae.group.getIndexOfEditor(ae.editor),
										}
									: { groupId: ae.id },
						});
					}
					oc(oe) {
						this.L = !0;
						try {
							oe();
						} finally {
							this.L = !1;
						}
					}
					pc() {
						if (!(!this.m || this.L)) {
							if (this.m.length && this.ab.activeGroup) {
								const oe = this.lc(
									this.ab.activeGroup,
									this.ab.activeGroup.activeEditor,
								);
								if (oe >= 0) {
									try {
										this.m.setFocus([oe]),
											this.m.setSelection([oe]),
											this.m.reveal(oe);
									} catch {}
									return;
								}
							}
							this.m.setFocus([]), this.m.setSelection([]);
						}
					}
					qc(oe) {
						oe.affectsConfiguration("explorer.openEditors") && this.rc(),
							(oe.affectsConfiguration("explorer.decorations") ||
								oe.affectsConfiguration("explorer.openEditors.sortOrder")) &&
								((this.t = this.Ab.getValue("explorer.openEditors.sortOrder")),
								this.j && (this.j.sortOrder = this.t),
								this.f?.schedule());
					}
					rc() {
						(this.minimumBodySize =
							this.orientation === U.Orientation.VERTICAL ? this.vc() : 170),
							(this.maximumBodySize =
								this.orientation === U.Orientation.VERTICAL
									? this.uc()
									: Number.POSITIVE_INFINITY);
					}
					sc(oe) {
						if (
							oe &&
							oe.isDirty() &&
							!(oe.capabilities & A.WorkingCopyCapabilities.Untitled) &&
							this.cc.hasShortAutoSaveDelay(oe.resource)
						)
							return;
						const ae = this.sb.dirtyCount;
						ae === 0
							? this.c.classList.add("hidden")
							: ((this.c.textContent = t.localize(7008, null, ae)),
								this.c.classList.remove("hidden"));
					}
					get tc() {
						return this.ab.groups
							.map((oe) => oe.count)
							.reduce((oe, ae) => oe + ae, this.jc ? this.ab.groups.length : 0);
					}
					uc() {
						let oe = this.Ab.getValue("explorer.openEditors.minVisible");
						return (
							typeof oe != "number" && (oe = Y.b),
							this.Cb.getViewContainerModel(
								this.Cb.getViewContainerByViewId(this.id),
							).visibleViewDescriptors.length <= 1
								? Number.POSITIVE_INFINITY
								: Math.max(this.tc, oe) * _.ITEM_HEIGHT
						);
					}
					vc() {
						let oe = this.Ab.getValue("explorer.openEditors.visible");
						return typeof oe != "number" && (oe = Y.a), this.wc(oe);
					}
					wc(oe = Y.a) {
						return Math.min(Math.max(oe, 1), this.tc) * _.ITEM_HEIGHT;
					}
					setStructuralRefreshDelay(oe) {
						this.h = oe;
					}
					getOptimalWidth() {
						if (!this.m) return super.getOptimalWidth();
						const oe = this.m.getHTMLElement(),
							ae = [].slice.call(oe.querySelectorAll(".open-editor > a"));
						return E.$Agb(oe, ae);
					}
				};
				(e.$pAc = ne),
					(e.$pAc =
						ne =
						Y =
							Ne(
								[
									j(1, d.$Li),
									j(2, O.$K1),
									j(3, C.$Xxb),
									j(4, m.$EY),
									j(5, r.$gj),
									j(6, u.$uZ),
									j(7, g.$6j),
									j(8, p.$iP),
									j(9, y.$km),
									j(10, W.$Uyb),
									j(11, N.$gY),
									j(12, R.$_Y),
									j(13, B.$7rb),
									j(14, X.$ll),
								],
								ne,
							));
				class ee extends w.$sj {
					async run(oe) {
						if (this.editor)
							return super.run(oe, {
								groupId: this.editor.groupId,
								editorIndex: this.editor.group.getIndexOfEditor(
									this.editor.editor,
								),
							});
					}
				}
				class _ {
					static {
						this.ITEM_HEIGHT = 22;
					}
					getHeight(oe) {
						return _.ITEM_HEIGHT;
					}
					getTemplateId(oe) {
						return oe instanceof c.$UUb ? Q.ID : te.ID;
					}
				}
				class te {
					static {
						this.ID = "editorgroup";
					}
					constructor(oe, ae) {
						(this.a = oe), (this.b = ae);
					}
					get templateId() {
						return te.ID;
					}
					renderTemplate(oe) {
						const ae = Object.create(null);
						(ae.root = E.$fhb(oe, ie(".editor-group"))),
							(ae.name = E.$fhb(ae.root, ie("span.name"))),
							(ae.actionBar = new l.$eib(oe));
						const pe = this.b.createInstance(h.$_Wb, h.$_Wb.ID, h.$_Wb.LABEL),
							$e = this.a.lookupKeybinding(pe.id);
						ae.actionBar.push(pe, {
							icon: !0,
							label: !1,
							keybinding: $e ? $e.getLabel() : void 0,
						});
						const ye = this.b.createInstance(h.$aXb, h.$aXb.ID, h.$aXb.LABEL),
							ue = this.a.lookupKeybinding(ye.id);
						return (
							ae.actionBar.push(ye, {
								icon: !0,
								label: !1,
								keybinding: ue ? ue.getLabel() : void 0,
							}),
							ae
						);
					}
					renderElement(oe, ae, pe) {
						(pe.editorGroup = oe),
							(pe.name.textContent = oe.label),
							(pe.actionBar.context = { groupId: oe.id });
					}
					disposeTemplate(oe) {
						oe.actionBar.dispose();
					}
				}
				class Q {
					static {
						this.ID = "openeditor";
					}
					constructor(oe, ae, pe, $e) {
						(this.c = oe),
							(this.d = ae),
							(this.f = pe),
							(this.h = $e),
							(this.a = this.d.createInstance(n.$Rrc, n.$Rrc.ID, n.$Rrc.LABEL)),
							(this.b = this.d.createInstance(n.$Src, n.$Src.ID, n.$Src.LABEL));
					}
					get templateId() {
						return Q.ID;
					}
					renderTemplate(oe) {
						const ae = Object.create(null);
						return (
							(ae.container = oe),
							(ae.actionRunner = new ee()),
							(ae.actionBar = new l.$eib(oe, {
								actionRunner: ae.actionRunner,
							})),
							(ae.root = this.c.create(oe)),
							ae
						);
					}
					renderElement(oe, ae, pe) {
						const $e = oe.editor;
						(pe.actionRunner.editor = oe),
							pe.container.classList.toggle(
								"dirty",
								$e.isDirty() && !$e.isSaving(),
							),
							pe.container.classList.toggle("sticky", oe.isSticky()),
							pe.root.setResource(
								{
									resource: a.$A1.getOriginalUri($e, {
										supportSideBySide: a.SideBySideEditor.BOTH,
									}),
									name: $e.getName(),
									description: $e.getDescription(a.Verbosity.MEDIUM),
								},
								{
									italic: oe.isPreview(),
									extraClasses: ["open-editor"].concat(
										oe.editor.getLabelExtraClasses(),
									),
									fileDecorations: this.h.getValue().explorer.decorations,
									title: $e.getTitle(a.Verbosity.LONG),
									icon: $e.getIcon(),
								},
							);
						const ye = oe.isSticky() ? this.b : this.a;
						pe.actionBar.hasAction(ye) ||
							(pe.actionBar.isEmpty() || pe.actionBar.clear(),
							pe.actionBar.push(ye, {
								icon: !0,
								label: !1,
								keybinding: this.f.lookupKeybinding(ye.id)?.getLabel(),
							}));
					}
					disposeTemplate(oe) {
						oe.actionBar.dispose(),
							oe.root.dispose(),
							oe.actionRunner.dispose();
					}
				}
				class Z {
					set sortOrder(oe) {
						this.a = oe;
					}
					constructor(oe, ae, pe) {
						(this.b = ae), (this.c = pe), (this.a = oe);
					}
					get d() {
						return this.b.createInstance(P.$OSb, { allowWorkspaceOpen: !1 });
					}
					getDragURI(oe) {
						if (oe instanceof c.$UUb) {
							const ae = oe.getResource();
							if (ae) return ae.toString();
						}
						return null;
					}
					getDragLabel(oe) {
						if (oe.length > 1) return String(oe.length);
						const ae = oe[0];
						return ae instanceof c.$UUb ? ae.editor.getName() : ae.label;
					}
					onDragStart(oe, ae) {
						const pe = oe.elements,
							$e = [];
						if (pe) for (const ye of pe) ye instanceof c.$UUb && $e.push(ye);
						$e.length && this.b.invokeFunction(P.$PSb, $e, ae);
					}
					onDragOver(oe, ae, pe, $e, ye) {
						if (
							oe instanceof M.$yib &&
							!(0, T.$mzb)(ye, L.$Ohb.FILES, T.$hzb.FILES)
						)
							return !1;
						if (this.a !== "editorOrder")
							return oe instanceof M.$wib
								? !1
								: {
										accept: !0,
										effect: { type: b.ListDragOverEffectType.Move },
										feedback: [-1],
									};
						let ue;
						switch ($e) {
							case M.ListViewTargetSector.TOP:
							case M.ListViewTargetSector.CENTER_TOP:
								ue =
									pe === 0 && ae instanceof J.$Euc
										? b.ListDragOverEffectPosition.After
										: b.ListDragOverEffectPosition.Before;
								break;
							case M.ListViewTargetSector.CENTER_BOTTOM:
							case M.ListViewTargetSector.BOTTOM:
								ue = b.ListDragOverEffectPosition.After;
								break;
						}
						return {
							accept: !0,
							effect: { type: b.ListDragOverEffectType.Move, position: ue },
							feedback: [pe],
						};
					}
					drop(oe, ae, pe, $e, ye) {
						let ue =
								ae instanceof c.$UUb
									? ae.group
									: ae || this.c.groups[this.c.count - 1],
							fe =
								ae instanceof c.$UUb ? ae.group.getIndexOfEditor(ae.editor) : 0;
						switch ($e) {
							case M.ListViewTargetSector.TOP:
							case M.ListViewTargetSector.CENTER_TOP:
								ae instanceof J.$Euc &&
									ue.index !== 0 &&
									((ue = this.c.groups[ue.index - 1]), (fe = ue.count));
								break;
							case M.ListViewTargetSector.BOTTOM:
							case M.ListViewTargetSector.CENTER_BOTTOM:
								ae instanceof c.$UUb && fe++;
								break;
						}
						if (oe instanceof M.$wib) {
							for (const me of oe.elements) {
								const ve = me.group.getIndexOfEditor(me.editor);
								me.group === ue && ve < fe && fe--,
									me.group.moveEditor(me.editor, ue, {
										index: fe,
										preserveFocus: !0,
									}),
									fe++;
							}
							this.c.activateGroup(ue);
						} else
							this.d.handleDrop(
								ye,
								K.$Bfb,
								() => ue,
								() => ue.focus(),
								{ index: fe },
							);
					}
					dispose() {}
				}
				Ne([D.$ei], Z.prototype, "d", null);
				class se {
					getWidgetAriaLabel() {
						return t.localize(7009, null);
					}
					getAriaLabel(oe) {
						return oe instanceof c.$UUb
							? `${oe.editor.getName()}, ${oe.editor.getDescription()}`
							: oe.ariaLabel;
					}
				}
				const re = "workbench.action.toggleEditorGroupLayout";
				(0, v.$4X)(
					class extends v.$3X {
						constructor() {
							super({
								id: "workbench.action.toggleEditorGroupLayout",
								title: t.localize2(
									7012,
									"Toggle Vertical/Horizontal Editor Layout",
								),
								f1: !0,
								keybinding: {
									primary: x.KeyMod.Shift | x.KeyMod.Alt | x.KeyCode.Digit0,
									mac: {
										primary: x.KeyMod.CtrlCmd | x.KeyMod.Alt | x.KeyCode.Digit0,
									},
									weight: H.KeybindingWeight.WorkbenchContrib,
								},
								icon: F.$ak.editorLayout,
								menu: {
									id: v.$XX.ViewTitle,
									group: "navigation",
									when: g.$Kj.and(g.$Kj.equals("view", ne.ID), I.$4Pb),
									order: 10,
								},
							});
						}
						async run(le) {
							const oe = le.get(m.$EY),
								ae =
									oe.orientation === m.GroupOrientation.VERTICAL
										? m.GroupOrientation.HORIZONTAL
										: m.GroupOrientation.VERTICAL;
							oe.setGroupOrientation(ae);
						}
					},
				),
					v.$ZX.appendMenuItem(v.$XX.MenubarLayoutMenu, {
						group: "5_flip",
						command: {
							id: re,
							title: {
								...t.localize2(7013, "Flip Layout"),
								mnemonicTitle: t.localize(7010, null),
							},
						},
						order: 1,
					}),
					(0, v.$4X)(
						class extends v.$3X {
							constructor() {
								super({
									id: "workbench.action.files.saveAll",
									title: S.$aVb,
									f1: !0,
									icon: F.$ak.saveAll,
									menu: {
										id: v.$XX.ViewTitle,
										group: "navigation",
										when: g.$Kj.equals("view", ne.ID),
										order: 20,
									},
								});
							}
							async run(le) {
								await le.get(q.$ek).executeCommand(S.$_Ub);
							}
						},
					),
					(0, v.$4X)(
						class extends v.$3X {
							constructor() {
								super({
									id: "openEditors.closeAll",
									title: n.$Wrc.LABEL,
									f1: !1,
									icon: F.$ak.closeAll,
									menu: {
										id: v.$XX.ViewTitle,
										group: "navigation",
										when: g.$Kj.equals("view", ne.ID),
										order: 30,
									},
								});
							}
							async run(le) {
								const oe = le.get(d.$Li),
									ae = new n.$Wrc();
								await oe.invokeFunction((pe) => ae.run(pe));
							}
						},
					),
					(0, v.$4X)(
						class extends v.$3X {
							constructor() {
								super({
									id: "openEditors.newUntitledFile",
									title: t.localize2(7014, "New Untitled Text File"),
									f1: !1,
									icon: F.$ak.newFile,
									menu: {
										id: v.$XX.ViewTitle,
										group: "navigation",
										when: g.$Kj.equals("view", ne.ID),
										order: 5,
									},
								});
							}
							async run(le) {
								await le.get(q.$ek).executeCommand(S.$oVb);
							}
						},
					);
			},
		),
		
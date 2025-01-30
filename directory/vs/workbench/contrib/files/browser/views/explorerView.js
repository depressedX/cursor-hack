import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../nls.js';
import '../../../../../base/common/performance.js';
import '../../../../../base/common/decorators.js';
import '../../common/files.js';
import '../fileActions.js';
import '../../../../../base/browser/dom.js';
import '../../../../services/layout/browser/layoutService.js';
import './explorerDecorationsProvider.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../platform/keybinding/common/keybinding.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/progress/common/progress.js';
import '../../../../../platform/contextview/browser/contextView.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../common/contextkeys.js';
import '../../../../services/decorations/common/decorations.js';
import '../../../../../platform/list/browser/listService.js';
import '../../../../../base/browser/dnd.js';
import '../../../../services/editor/common/editorService.js';
import '../../../../browser/parts/views/viewPane.js';
import '../../../../../platform/label/common/label.js';
import './explorerViewer.js';
import '../../../../../platform/theme/common/themeService.js';
import '../../../../../base/browser/ui/tree/tree.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/telemetry/common/telemetry.js';
import '../../common/explorerModel.js';
import '../../../../browser/labels.js';
import '../../../../../platform/storage/common/storage.js';
import '../../../../../platform/clipboard/common/clipboardService.js';
import '../../../../../platform/files/common/files.js';
import '../../../../../base/common/event.js';
import '../../../../common/views.js';
import '../../../../services/views/common/viewsService.js';
import '../../../../../platform/opener/common/opener.js';
import '../../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../common/editor.js';
import '../files.js';
import '../../../../../base/common/codicons.js';
import '../../../../../platform/commands/common/commands.js';
import '../../../../services/editor/common/editorResolverService.js';
import '../../../../../platform/editor/common/editor.js';
import '../../../../../base/common/map.js';
import '../../../../../base/browser/ui/list/listWidget.js';
import '../../../../../base/browser/ui/tree/abstractTree.js';
import '../../../../../platform/hover/browser/hover.js';
define(
			de[1351],
			he([
				1, 0, 4, 240, 138, 220, 1057, 7, 96, 4022, 25, 10, 39, 5, 84, 49, 8,
				100, 472, 93, 323, 18, 146, 73, 1945, 35, 264, 11, 32, 710, 233, 21,
				121, 22, 6, 60, 89, 41, 68, 44, 382, 14, 31, 231, 116, 59, 278, 411, 72,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*performance*/,
				w /*decorators*/,
				E /*files*/,
				C /*fileActions*/,
				d /*dom*/,
				m /*layoutService*/,
				r /*explorerDecorationsProvider*/,
				u /*workspace*/,
				a /*configuration*/,
				h /*keybinding*/,
				c /*instantiation*/,
				n /*progress*/,
				g /*contextView*/,
				p /*contextkey*/,
				o /*contextkeys*/,
				f /*decorations*/,
				b /*listService*/,
				s /*dnd*/,
				l /*editorService*/,
				y /*viewPane*/,
				$ /*label*/,
				v /*explorerViewer*/,
				S /*themeService*/,
				I /*tree*/,
				T /*actions*/,
				P /*telemetry*/,
				k /*explorerModel*/,
				L /*labels*/,
				D /*storage*/,
				M /*clipboardService*/,
				N /*files*/,
				A /*event*/,
				R /*views*/,
				O /*viewsService*/,
				B /*opener*/,
				U /*uriIdentity*/,
				z /*editor*/,
				F /*files*/,
				x /*codicons*/,
				H /*commands*/,
				q /*editorResolverService*/,
				V /*editor*/,
				G /*map*/,
				K /*listWidget*/,
				J /*abstractTree*/,
				W /*hover*/,
) {
				"use strict";
				var X;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$HXb = void 0),
					(e.$GXb = ee),
					(e.$IXb = te),
					(t = mt(t)),
					(i = mt(i)),
					(d = mt(d));
				function Y(Q, Z) {
					for (const se of Z)
						if (Q.hasNode(se) && !Q.isCollapsed(se)) {
							for (const [, re] of se.children.entries())
								if (Q.hasNode(re) && Q.isCollapsible(re) && !Q.isCollapsed(re))
									return !0;
						}
					return !1;
				}
				function ie(Q, Z) {
					for (const se of Z)
						if (Q.hasNode(se) && !Q.isCollapsed(se)) return !0;
					return !1;
				}
				const ne = {
					getId: (Q) => (Q instanceof k.$KWb ? `new:${Q.getId()}` : Q.getId()),
				};
				function ee(Q, Z, se, re) {
					let le;
					(le = Q.length ? Q[0] : void 0), se && Z.length > 1 && (le = void 0);
					const oe = le && re.getCompressedNavigationController(le),
						ae = oe && oe.length ? oe[0] : void 0;
					le = ae ? ae.current : le;
					const pe = [];
					for (const $e of Z) {
						const ye = re.getCompressedNavigationController($e),
							ue = ye && ye.length ? ye[0] : void 0;
						if (ue && le && ue === ae) {
							$e === le && pe.push($e);
							continue;
						}
						ue ? pe.push(...ue.items) : pe.push($e);
					}
					return le ? (se && pe.indexOf(le) >= 0 ? pe : [le]) : se ? pe : [];
				}
				let _ = class extends y.$TMb {
					static {
						X = this;
					}
					static {
						this.TREE_VIEW_STATE_STORAGE_KEY =
							"workbench.explorer.treeViewState";
					}
					constructor(
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
					) {
						super(Z, ue, se, me, fe, re, le, Te, be, Ce, Le),
							(this.kc = oe),
							(this.lc = ae),
							(this.mc = pe),
							(this.nc = $e),
							(this.oc = ye),
							(this.pc = ve),
							(this.qc = ge),
							(this.rc = Fe),
							(this.sc = Oe),
							(this.tc = xe),
							(this.uc = He),
							(this.vc = Ke),
							(this.wc = Je),
							(this.hc = !1),
							(this.jc = Z.delegate),
							(this.c = le.createInstance(o.$BQb)),
							this.D(this.c),
							(this.f = E.$zUb.bindTo(fe)),
							(this.g = E.$AUb.bindTo(fe)),
							(this.h = E.$CUb.bindTo(fe)),
							(this.j = E.$DUb.bindTo(fe)),
							(this.m = E.$FUb.bindTo(fe)),
							(this.L = E.$JUb.bindTo(fe)),
							(this.ab = E.$KUb.bindTo(fe)),
							(this.sb = E.$LUb.bindTo(fe)),
							(this.cc = E.$MUb.bindTo(fe)),
							(this.dc = E.$yUb.bindTo(fe)),
							this.rc.registerView(this);
					}
					get autoReveal() {
						return this.hc;
					}
					set autoReveal(Z) {
						this.hc = Z;
					}
					get name() {
						return this.qc.getWorkspaceLabel(this.kc.getWorkspace());
					}
					get title() {
						return this.name;
					}
					set title(Z) {}
					setVisible(Z) {
						this.dc.set(Z), super.setVisible(Z);
					}
					get xc() {
						return C.$3Wb.bindTo(this.Bb);
					}
					get yc() {
						return E.$EUb.bindTo(this.Bb);
					}
					U(Z) {
						super.U(Z), (this.gc = new s.$Nhb(Z, () => this.setExpanded(!0)));
						const se = Z.querySelector(".title"),
							re = () => {
								(se.textContent = this.name),
									this.Sb(this.name),
									(this.ariaHeaderLabel = t.localize(6987, null, this.name)),
									se.setAttribute("aria-label", this.ariaHeaderLabel);
							};
						this.D(this.kc.onDidChangeWorkspaceName(re)),
							this.D(this.qc.onDidChangeFormatters(re)),
							re();
					}
					X(Z, se) {
						super.X(Z, se), this.a.layout(Z, se);
					}
					W(Z) {
						super.W(Z),
							(this.t = Z),
							(this.r = d.$fhb(Z, d.$(".explorer-folders-view"))),
							this.Dc(this.r),
							this.D(
								this.qc.onDidChangeFormatters(() => {
									this.db.fire();
								}),
							),
							this.Ec(void 0),
							this.D(
								this.mc.onDidActiveEditorChange(() => {
									this.Cc();
								}),
							),
							this.D(this.Ab.onDidChangeConfiguration((se) => this.Ec(se))),
							this.D(
								this.onDidChangeBodyVisibility(async (se) => {
									se && (await this.setTreeInput(), this.Kc(), this.Cc(!0));
								}),
							),
							this.D(
								d.$0fb(d.getWindow(this.t), d.$$gb.PASTE, async (se) => {
									!this.hasFocus() ||
										this.g.get() ||
										(se.clipboardData?.files?.length &&
											(await this.wc.executeCommand(
												"filesExplorer.paste",
												se.clipboardData?.files,
											)));
								}),
							);
					}
					focus() {
						if (
							(super.focus(),
							this.a.domFocus(),
							this.a.getFocusedPart() === J.AbstractTreePart.Tree)
						) {
							const Z = this.a.getFocus();
							Z.length === 1 && this.hc && this.a.reveal(Z[0], 0.5);
						}
					}
					hasFocus() {
						return d.$Lgb(this.t);
					}
					getFocus() {
						return this.a.getFocus();
					}
					focusNext() {
						this.a.focusNext();
					}
					focusLast() {
						this.a.focusLast();
					}
					getContext(Z) {
						const se =
							this.a.getFocusedPart() === J.AbstractTreePart.StickyScroll
								? this.a.getStickyScrollFocus()
								: this.a.getFocus();
						return ee(se, this.a.getSelection(), Z, this.n);
					}
					isItemVisible(Z) {
						return this.b ? this.b.filter(Z, I.TreeVisibility.Visible) : !1;
					}
					isItemCollapsed(Z) {
						return this.a.isCollapsed(Z);
					}
					async setEditable(Z, se) {
						se
							? ((this.fc = this.a.options.horizontalScrolling),
								this.fc && this.a.updateOptions({ horizontalScrolling: !1 }),
								await this.a.expand(Z.parent))
							: (this.fc !== void 0 &&
									this.a.updateOptions({ horizontalScrolling: this.fc }),
								(this.fc = void 0),
								this.r.classList.remove("highlight")),
							await this.refresh(!1, Z.parent, !1),
							se
								? (this.r.classList.add("highlight"), this.a.reveal(Z))
								: this.a.domFocus();
					}
					async Cc(Z = this.hc) {
						if (this.hc) {
							const se = z.$A1.getCanonicalUri(this.mc.activeEditor, {
								supportSideBySide: z.SideBySideEditor.PRIMARY,
							});
							if (se) {
								const re = this.a.getFocus(),
									le = this.a.getSelection();
								return re.length === 1 &&
									this.vc.extUri.isEqual(re[0].resource, se) &&
									le.length === 1 &&
									this.vc.extUri.isEqual(le[0].resource, se)
									? void 0
									: this.rc.select(se, Z);
							}
						}
					}
					Dc(Z) {
						(this.b = this.Db.createInstance(v.$zXb)),
							this.D(this.b),
							this.D(this.b.onDidChange(() => this.refresh(!0)));
						const se = this.Db.createInstance(L.$uPb, {
							onDidChangeVisibility: this.onDidChangeBodyVisibility,
						});
						this.D(se);
						const re = (pe) => this.a.updateWidth(pe);
						(this.n = this.Db.createInstance(v.$yXb, Z, se, re)),
							this.D(this.n),
							this.D(te(Z, this.Fb));
						const le = () => this.Ab.getValue("explorer.compactFolders"),
							oe = (pe) =>
								this.Ab.getValue({ resource: pe?.root.resource }).explorer
									.fileNesting;
						(this.a = this.Db.createInstance(
							b.$GMb,
							"FileExplorer",
							Z,
							new v.$uXb(),
							new v.$DXb(),
							[this.n],
							this.Db.createInstance(v.$wXb, this.b),
							{
								compressionEnabled: le(),
								accessibilityProvider: this.n,
								identityProvider: ne,
								keyboardNavigationLabelProvider: {
									getKeyboardNavigationLabel: (pe) => {
										if (!this.rc.isEditable(pe)) return pe.name;
									},
									getCompressedNodeKeyboardNavigationLabel: (pe) => {
										if (!pe.some(($e) => this.rc.isEditable($e)))
											return pe.map(($e) => $e.name).join("/");
									},
								},
								multipleSelectionSupport: !0,
								filter: this.b,
								sorter: this.Db.createInstance(v.$AXb),
								dnd: this.Db.createInstance(v.$BXb, (pe) =>
									this.isItemCollapsed(pe),
								),
								collapseByDefault: (pe) =>
									!(pe instanceof k.$JWb && pe.hasNests && oe(pe).expand),
								autoExpandSingleChildren: !0,
								expandOnlyOnTwistieClick: (pe) => {
									if (pe instanceof k.$JWb) {
										if (pe.hasNests) return !0;
										if (
											this.Ab.getValue("workbench.tree.expandMode") ===
											"doubleClick"
										)
											return !0;
									}
									return !1;
								},
								paddingBottom: v.$uXb.ITEM_HEIGHT,
								overrideStyles: this.Zb().listOverrideStyles,
							},
						)),
							this.D(this.a),
							this.D(this.Fb.onDidColorThemeChange(() => this.a.rerender()));
						const ae = A.Event.filter(this.Ab.onDidChangeConfiguration, (pe) =>
							pe.affectsConfiguration("explorer.compactFolders"),
						);
						this.D(
							ae((pe) => this.a.updateOptions({ compressionEnabled: le() })),
						),
							E.$GUb.bindTo(this.a.contextKeyService),
							E.$IUb.bindTo(this.a.contextKeyService),
							this.D(this.a.onDidChangeFocus((pe) => this.Ic(pe.elements))),
							this.Ic([]),
							this.D(
								this.a.onDidOpen(async (pe) => {
									const $e = pe.element;
									if (!$e) return;
									if (!(d.$8gb(pe.browserEvent) && pe.browserEvent.shiftKey)) {
										if ($e.isDirectory || this.rc.isEditable(void 0)) return;
										this.Gb.publicLog2("workbenchActionExecuted", {
											id: "workbench.files.openFile",
											from: "explorer",
										});
										try {
											this.jc?.willOpenElement(pe.browserEvent),
												await this.mc.openEditor(
													{
														resource: $e.resource,
														options: {
															preserveFocus: pe.editorOptions.preserveFocus,
															pinned: pe.editorOptions.pinned,
															source: V.EditorOpenSource.USER,
														},
													},
													pe.sideBySide ? l.$KY : l.$JY,
												);
										} finally {
											this.jc?.didOpenElement();
										}
									}
								}),
							),
							this.D(this.a.onContextMenu((pe) => this.Hc(pe))),
							this.D(
								this.a.onDidScroll(async (pe) => {
									const $e = this.rc.getEditable();
									pe.scrollTopChanged &&
										$e &&
										this.a.getRelativeTop($e.stat) === null &&
										(await $e.data.onFinish("", !1));
								}),
							),
							this.D(
								this.a.onDidChangeCollapseState((pe) => {
									const $e = pe.node.element?.element;
									$e &&
										this.n
											.getCompressedNavigationController(
												$e instanceof Array ? $e[0] : $e,
											)
											?.forEach((ue) => ue.updateCollapsed(pe.node.collapsed)),
										this.Kc();
								}),
							),
							this.Kc(),
							this.D(
								this.a.onMouseDblClick((pe) => {
									const $e = this.Ab.getValue("workbench.list.scrollByPage");
									pe.element === null && !$e && this.wc.executeCommand(C.$UWb);
								}),
							),
							this.D(
								this.sc.onWillSaveState(() => {
									this.Fc();
								}),
							);
					}
					Ec(Z) {
						if (!Z || Z.affectsConfiguration("explorer.autoReveal")) {
							const se = this.Ab.getValue();
							this.hc = se?.explorer?.autoReveal;
						}
						Z &&
							(Z.affectsConfiguration("explorer.decorations.colors") ||
								Z.affectsConfiguration("explorer.decorations.badges")) &&
							this.refresh(!0);
					}
					Fc() {
						this.sc.store(
							X.TREE_VIEW_STATE_STORAGE_KEY,
							JSON.stringify(this.a.getViewState()),
							D.StorageScope.WORKSPACE,
							D.StorageTarget.MACHINE,
						);
					}
					Gc(Z) {
						const se = this.kc.getWorkspace().folders,
							re = Z ? Z.resource : se[se.length - 1].uri;
						if (
							((Z = Z || this.rc.findClosest(re)),
							this.c.set(re),
							this.f.set(!!Z && Z.isDirectory),
							this.g.set(!!Z && !!Z.isReadonly),
							this.j.set(!!Z && Z.isRoot),
							re)
						) {
							const le = re ? this.nc.getEditors(re).map((oe) => oe.id) : [];
							this.h.set(le.join(","));
						} else this.h.reset();
					}
					async Hc(Z) {
						if ((0, K.$Dib)(Z.browserEvent.target)) return;
						const se = Z.element;
						let re = Z.anchor;
						if (d.$Ygb(re) && se) {
							const pe = this.n.getCompressedNavigationController(se);
							pe &&
								pe.length > 0 &&
								(d.$8gb(Z.browserEvent) || (0, v.$CXb)(Z.browserEvent.target)
									? (re = pe[0].labels[pe[0].index])
									: pe.forEach(($e) => $e.last()));
						}
						this.xc.set(await this.tc.hasResources()), this.Gc(se);
						const le = this.a.getSelection(),
							oe = this.rc.roots;
						let ae;
						if (se instanceof k.$JWb) {
							const pe = this.n.getCompressedNavigationController(se);
							ae = pe && pe.length ? pe[0].current.resource : se.resource;
						} else ae = oe.length === 1 ? oe[0].resource : {};
						this.zb.showContextMenu({
							menuId: T.$XX.ExplorerContext,
							menuActionOptions: { arg: ae, shouldForwardArgs: !0 },
							contextKeyService: this.a.contextKeyService,
							getAnchor: () => re,
							onHide: (pe) => {
								pe && this.a.domFocus();
							},
							getActionsContext: () =>
								se && le && le.indexOf(se) >= 0
									? le.map((pe) => pe.resource)
									: se instanceof k.$JWb
										? [se.resource]
										: [],
						});
					}
					Ic(Z) {
						const se = Z && Z.length ? Z[0] : void 0;
						if ((this.Gc(se), se)) {
							const le = !!this.Ab.getValue().files?.enableTrash,
								oe = this.uc.hasCapability(
									se.resource,
									N.FileSystemProviderCapabilities.Trash,
								);
							this.m.set(le && oe);
						} else this.m.reset();
						const re = se && this.n.getCompressedNavigationController(se);
						if (!re) {
							this.L.set(!1);
							return;
						}
						this.L.set(!0),
							re.forEach((le) => {
								this.Jc(le);
							});
					}
					refresh(Z, se, re = !0) {
						if (!this.a || !this.isBodyVisible() || (se && !this.a.hasNode(se)))
							return Promise.resolve(void 0);
						re && this.rc.isEditable(void 0) && this.a.domFocus();
						const le = se || this.a.getInput();
						return this.a.updateChildren(le, Z, !!se);
					}
					getOptimalWidth() {
						const Z = this.a.getHTMLElement(),
							se = [].slice.call(
								Z.querySelectorAll(".explorer-item .label-name"),
							);
						return d.$Agb(Z, se);
					}
					async setTreeInput() {
						if (!this.isBodyVisible()) return Promise.resolve(void 0);
						this.ec && (await this.ec);
						const Z = !this.a.getInput();
						Z && i.mark("code/willResolveExplorer");
						const se = this.rc.roots;
						let re = se[0];
						(this.kc.getWorkbenchState() !== u.WorkbenchState.FOLDER ||
							se[0].error) &&
							(re = se);
						let le;
						if (this.a && this.a.getInput()) le = this.a.getViewState();
						else {
							const pe = this.sc.get(
								X.TREE_VIEW_STATE_STORAGE_KEY,
								D.StorageScope.WORKSPACE,
							);
							pe && (le = JSON.parse(pe));
						}
						const oe = this.a.getInput(),
							ae = (this.ec = this.a.setInput(re, le).then(async () => {
								if (Array.isArray(re)) {
									if (!le || oe instanceof k.$JWb)
										for (let pe = 0; pe < Math.min(re.length, 5); pe++)
											try {
												await this.a.expand(re[pe]);
											} catch {}
									if (
										(!oe &&
											re.length === 1 &&
											this.Ab.getValue().explorer
												.expandSingleFolderWorkspaces &&
											(await this.a.expand(re[0]).catch(() => {})),
										Array.isArray(oe))
									) {
										const pe = new G.$Gc();
										oe.forEach(($e) => pe.set($e.resource, !0)),
											await Promise.all(
												re.map(async ($e) => {
													if (!pe.has($e.resource))
														try {
															await this.a.expand($e);
														} catch {}
												}),
											);
									}
								}
								Z && i.mark("code/didResolveExplorer");
							}));
						this.lc.withProgress(
							{
								location: n.ProgressLocation.Explorer,
								delay: this.oc.isRestored() ? 800 : 1500,
							},
							(pe) => ae,
						),
							await ae,
							this.ic ||
								((this.ic = new r.$FXb(this.rc, this.kc)),
								this.D(this.pc.registerDecorationsProvider(this.ic)));
					}
					async selectResource(Z, se = this.hc, re = 0) {
						if (re === 2 || !Z || !this.isBodyVisible()) return;
						this.ec && (await this.ec);
						let le = this.rc.findClosestRoot(Z);
						for (; le && le.resource.toString() !== Z.toString(); ) {
							try {
								await this.a.expand(le);
							} catch {
								return this.selectResource(Z, se, re + 1);
							}
							if (!le.children.size) le = null;
							else
								for (const oe of le.children.values()) {
									if (this.vc.extUri.isEqualOrParent(Z, oe.resource)) {
										le = oe;
										break;
									}
									le = null;
								}
						}
						if (le) {
							if (le === this.a.getInput()) {
								this.a.setFocus([]), this.a.setSelection([]);
								return;
							}
							try {
								le.nestedParent && (await this.a.expand(le.nestedParent)),
									(se === !0 || se === "force") &&
										this.a.getRelativeTop(le) === null &&
										this.a.reveal(le, 0.5),
									this.a.setFocus([le]),
									this.a.setSelection([le]);
							} catch {
								return this.selectResource(Z, se, re + 1);
							}
						}
					}
					itemsCopied(Z, se, re) {
						this.xc.set(Z.length > 0),
							this.yc.set(se && Z.length > 0),
							re?.forEach((le) => this.a.rerender(le)),
							se && Z.forEach((le) => this.a.rerender(le));
					}
					expandAll() {
						this.rc.isEditable(void 0) && this.a.domFocus(), this.a.expandAll();
					}
					collapseAll() {
						this.rc.isEditable(void 0) && this.a.domFocus();
						const Z = this.a.getInput();
						if (Array.isArray(Z) && Y(this.a, Z)) {
							Z.forEach((se) => {
								se.children.forEach(
									(re) => this.a.hasNode(re) && this.a.collapse(re, !0),
								);
							});
							return;
						}
						this.a.collapseAll();
					}
					previousCompressedStat() {
						const Z = this.a.getFocus();
						if (!Z.length) return;
						this.n.getCompressedNavigationController(Z[0]).forEach((re) => {
							re.previous(), this.Jc(re);
						});
					}
					nextCompressedStat() {
						const Z = this.a.getFocus();
						if (!Z.length) return;
						this.n.getCompressedNavigationController(Z[0]).forEach((re) => {
							re.next(), this.Jc(re);
						});
					}
					firstCompressedStat() {
						const Z = this.a.getFocus();
						if (!Z.length) return;
						this.n.getCompressedNavigationController(Z[0]).forEach((re) => {
							re.first(), this.Jc(re);
						});
					}
					lastCompressedStat() {
						const Z = this.a.getFocus();
						if (!Z.length) return;
						this.n.getCompressedNavigationController(Z[0]).forEach((re) => {
							re.last(), this.Jc(re);
						});
					}
					Jc(Z) {
						this.ab.set(Z.index === 0), this.sb.set(Z.index === Z.count - 1);
					}
					Kc() {
						const Z = this.a.getInput();
						if (Z === void 0) return;
						const se = Array.isArray(Z) ? Z : Array.from(Z.children.values());
						this.cc.set(ie(this.a, se)), this.Fc();
					}
					dispose() {
						this.gc?.dispose(), super.dispose();
					}
				};
				(e.$HXb = _),
					Ne([w.$ei], _.prototype, "xc", null),
					Ne([w.$ei], _.prototype, "yc", null),
					(e.$HXb =
						_ =
						X =
							Ne(
								[
									j(1, g.$Xxb),
									j(2, R.$K1),
									j(3, c.$Li),
									j(4, u.$Vi),
									j(5, n.$8N),
									j(6, l.$IY),
									j(7, q.$E6),
									j(8, m.$mEb),
									j(9, h.$uZ),
									j(10, p.$6j),
									j(11, a.$gj),
									j(12, f.$sPb),
									j(13, $.$3N),
									j(14, S.$iP),
									j(15, P.$km),
									j(16, W.$Uyb),
									j(17, F.$LWb),
									j(18, D.$lq),
									j(19, M.$Vxb),
									j(20, N.$ll),
									j(21, U.$Vl),
									j(22, H.$ek),
									j(23, B.$7rb),
								],
								_,
							));
				function te(Q, Z) {
					Q.classList.add("file-icon-themable-tree"),
						Q.classList.add("show-file-icons");
					const se = (re) => {
						Q.classList.toggle(
							"align-icons-and-twisties",
							re.hasFileIcons && !re.hasFolderIcons,
						),
							Q.classList.toggle("hide-arrows", re.hidesExplorerArrows === !0);
					};
					return se(Z.getFileIconTheme()), Z.onDidFileIconThemeChange(se);
				}
				(0, T.$4X)(
					class extends T.$3X {
						constructor() {
							super({
								id: "workbench.files.action.createFileFromExplorer",
								title: t.localize(6988, null),
								f1: !1,
								icon: x.$ak.newFile,
								precondition: E.$BUb,
								menu: {
									id: T.$XX.ViewTitle,
									group: "navigation",
									when: p.$Kj.equals("view", E.$wUb),
									order: 10,
								},
							});
						}
						run(Q) {
							Q.get(H.$ek).executeCommand(C.$UWb);
						}
					},
				),
					(0, T.$4X)(
						class extends T.$3X {
							constructor() {
								super({
									id: "workbench.files.action.createFolderFromExplorer",
									title: t.localize(6989, null),
									f1: !1,
									icon: x.$ak.newFolder,
									precondition: E.$BUb,
									menu: {
										id: T.$XX.ViewTitle,
										group: "navigation",
										when: p.$Kj.equals("view", E.$wUb),
										order: 20,
									},
								});
							}
							run(Q) {
								Q.get(H.$ek).executeCommand(C.$WWb);
							}
						},
					),
					(0, T.$4X)(
						class extends T.$3X {
							constructor() {
								super({
									id: "workbench.files.action.refreshFilesExplorer",
									title: t.localize2(6990, "Refresh Explorer"),
									f1: !0,
									icon: x.$ak.refresh,
									menu: {
										id: T.$XX.ViewTitle,
										group: "navigation",
										when: p.$Kj.equals("view", E.$wUb),
										order: 30,
									},
									metadata: {
										description: t.localize2(
											6991,
											"Forces a refresh of the Explorer.",
										),
									},
								});
							}
							async run(Q) {
								const Z = Q.get(O.$HMb),
									se = Q.get(F.$LWb);
								await Z.openView(E.$wUb), await se.refresh();
							}
						},
					),
					(0, T.$4X)(
						class extends T.$3X {
							constructor() {
								super({
									id: "workbench.files.action.collapseExplorerFolders",
									title: t.localize2(6992, "Collapse Folders in Explorer"),
									f1: !0,
									icon: x.$ak.collapseAll,
									menu: {
										id: T.$XX.ViewTitle,
										group: "navigation",
										when: p.$Kj.equals("view", E.$wUb),
										order: 40,
									},
									metadata: {
										description: t.localize2(
											6993,
											"Folds all folders in the Explorer.",
										),
									},
								});
							}
							run(Q) {
								const se = Q.get(O.$HMb).getViewWithId(E.$wUb);
								se !== null && se.collapseAll();
							}
						},
					);
			},
		),
		
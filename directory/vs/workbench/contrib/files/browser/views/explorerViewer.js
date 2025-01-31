import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/common/glob.js';
import '../../../../../base/browser/ui/list/list.js';
import '../../../../../platform/progress/common/progress.js';
import '../../../../../platform/notification/common/notification.js';
import '../../../../../platform/files/common/files.js';
import '../../../../services/layout/browser/layoutService.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/keyCodes.js';
import '../../../../../base/browser/ui/tree/tree.js';
import '../../../../../platform/contextview/browser/contextView.js';
import '../../../../../platform/theme/common/themeService.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../common/files.js';
import '../../../../../base/common/resources.js';
import '../../../../../base/browser/ui/inputbox/inputBox.js';
import '../../../../../nls.js';
import '../../../../../base/common/functional.js';
import '../../../../../base/common/objects.js';
import '../../../../../base/common/path.js';
import '../../common/explorerModel.js';
import '../../../../../base/common/comparers.js';
import '../../../../../platform/dnd/browser/dnd.js';
import '../../../../browser/dnd.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../base/browser/dnd.js';
import '../../../../../base/common/network.js';
import '../../../../../base/browser/ui/list/listView.js';
import '../../../../../base/common/platform.js';
import '../../../../../platform/dialogs/common/dialogs.js';
import '../../../../services/workspaces/common/workspaceEditing.js';
import '../../../../services/editor/common/editorService.js';
import '../fileActions.js';
import '../../../../../base/common/filters.js';
import '../../../../../base/common/event.js';
import '../../../../../platform/label/common/label.js';
import '../../../../../base/common/types.js';
import '../../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../../editor/browser/services/bulkEditService.js';
import '../files.js';
import '../fileImportExport.js';
import '../../../../../base/common/errorMessage.js';
import '../../../../../platform/files/browser/webFileSystemAccess.js';
import '../../../../services/search/common/ignoreFile.js';
import '../../../../../base/common/map.js';
import '../../../../../base/common/ternarySearchTree.js';
import '../../../../../platform/theme/browser/defaultStyles.js';
import '../../../../../base/common/async.js';
import '../../../../services/filesConfiguration/common/filesConfigurationService.js';
import '../../../../../base/browser/window.js';
import '../explorerFileContrib.js';
define(
			de[1945],
			he([
				1, 0, 7, 215, 431, 84, 40, 22, 96, 25, 3, 27, 264, 49, 35, 10, 220, 19,
				292, 4, 288, 82, 54, 710, 535, 347, 362, 5, 323, 23, 539, 12, 57, 449,
				18, 1057, 132, 6, 73, 28, 68, 199, 382, 1944, 163, 762, 1861, 59, 387,
				106, 15, 170, 75, 1732,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*glob*/,
				w /*list*/,
				E /*progress*/,
				C /*notification*/,
				d /*files*/,
				m /*layoutService*/,
				r /*workspace*/,
				u /*lifecycle*/,
				a /*keyCodes*/,
				h /*tree*/,
				c /*contextView*/,
				n /*themeService*/,
				g /*configuration*/,
				p /*files*/,
				o /*resources*/,
				f /*inputBox*/,
				b /*nls*/,
				s /*functional*/,
				l /*objects*/,
				y /*path*/,
				$ /*explorerModel*/,
				v /*comparers*/,
				S /*dnd*/,
				I /*dnd*/,
				T /*instantiation*/,
				P /*dnd*/,
				k /*network*/,
				L /*listView*/,
				D /*platform*/,
				M /*dialogs*/,
				N /*workspaceEditing*/,
				A /*editorService*/,
				R /*fileActions*/,
				O /*filters*/,
				B /*event*/,
				U /*label*/,
				z /*types*/,
				F /*uriIdentity*/,
				x /*bulkEditService*/,
				H /*files*/,
				q /*fileImportExport*/,
				V /*errorMessage*/,
				G /*webFileSystemAccess*/,
				K /*ignoreFile*/,
				J /*map*/,
				W /*ternarySearchTree*/,
				X /*defaultStyles*/,
				Y /*async*/,
				ie /*filesConfigurationService*/,
				ne /*window*/,
				ee /*explorerFileContrib*/,
) {
				"use strict";
				var _, te;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$DXb =
						e.$BXb =
						e.$AXb =
						e.$zXb =
						e.$yXb =
						e.$xXb =
						e.$wXb =
						e.$vXb =
						e.$uXb =
							void 0),
					(e.$CXb = $e),
					(t = mt(t)),
					(i = mt(i)),
					(y = mt(y));
				class Q {
					static {
						this.ITEM_HEIGHT = 22;
					}
					getHeight(me) {
						return Q.ITEM_HEIGHT;
					}
					getTemplateId(me) {
						return re.ID;
					}
				}
				(e.$uXb = Q), (e.$vXb = new B.$re());
				let Z = class {
					constructor(me, ve, ge, be, Ce, Le, Fe, Oe, xe) {
						(this.a = me),
							(this.b = ve),
							(this.f = ge),
							(this.g = be),
							(this.h = Ce),
							(this.j = Le),
							(this.k = Fe),
							(this.l = Oe),
							(this.m = xe);
					}
					hasChildren(me) {
						return (
							Array.isArray(me) ||
							me.hasChildren((ve) =>
								this.a.filter(ve, h.TreeVisibility.Visible),
							)
						);
					}
					getChildren(me) {
						if (Array.isArray(me)) return me;
						const ve = me.error,
							ge = this.k.sortOrderConfiguration.sortOrder,
							be = me.fetchChildren(ge);
						if (Array.isArray(be)) return be;
						const Ce = be.then(
							(Le) => (
								me instanceof $.$JWb &&
									me.isRoot &&
									!me.error &&
									ve &&
									this.l.getWorkbenchState() !== r.WorkbenchState.FOLDER &&
									e.$vXb.fire(me.resource),
								Le
							),
							(Le) => {
								if (me instanceof $.$JWb && me.isRoot)
									if (this.l.getWorkbenchState() === r.WorkbenchState.FOLDER) {
										const Fe = new $.$JWb(
											me.resource,
											this.j,
											this.f,
											this.m,
											void 0,
											void 0,
											!1,
										);
										return (Fe.error = Le), [Fe];
									} else e.$vXb.fire(me.resource);
								else this.g.error(Le);
								return [];
							},
						);
						return (
							this.b.withProgress(
								{
									location: E.ProgressLocation.Explorer,
									delay: this.h.isRestored() ? 800 : 1500,
								},
								(Le) => Ce,
							),
							Ce
						);
					}
				};
				(e.$wXb = Z),
					(e.$wXb = Z =
						Ne(
							[
								j(1, E.$8N),
								j(2, g.$gj),
								j(3, C.$4N),
								j(4, m.$mEb),
								j(5, d.$ll),
								j(6, H.$LWb),
								j(7, r.$Vi),
								j(8, ie.$_Y),
							],
							Z,
						));
				class se {
					static {
						this.ID = 0;
					}
					get index() {
						return this.a;
					}
					get count() {
						return this.items.length;
					}
					get current() {
						return this.items[this.a];
					}
					get currentId() {
						return `${this.h}_${this.index}`;
					}
					get labels() {
						return this.b;
					}
					constructor(me, ve, ge, be, Ce) {
						(this.h = me),
							(this.items = ve),
							(this.j = be),
							(this.k = Ce),
							(this.g = new B.$re()),
							(this.onDidChange = this.g.event),
							(this.a = ve.length - 1),
							this.l(ge),
							(this.f = ge.label.onDidRender(() => this.l(ge)));
					}
					l(me) {
						this.b = Array.from(me.container.querySelectorAll(".label-name"));
						let ve = "";
						for (let ge = 0; ge < this.labels.length; ge++) {
							const be = ve.length
								? `${this.items[ge].name}, compact, ${ve}`
								: this.items[ge].name;
							this.labels[ge].setAttribute("aria-label", be),
								this.labels[ge].setAttribute("aria-level", `${this.j + ge}`),
								(ve = ve.length
									? `${this.items[ge].name} ${ve}`
									: this.items[ge].name);
						}
						this.updateCollapsed(this.k),
							this.a < this.labels.length &&
								this.labels[this.a].classList.add("active");
					}
					previous() {
						this.a <= 0 || this.setIndex(this.a - 1);
					}
					next() {
						this.a >= this.items.length - 1 || this.setIndex(this.a + 1);
					}
					first() {
						this.a !== 0 && this.setIndex(0);
					}
					last() {
						this.a !== this.items.length - 1 &&
							this.setIndex(this.items.length - 1);
					}
					setIndex(me) {
						me < 0 ||
							me >= this.items.length ||
							(this.labels[this.a].classList.remove("active"),
							(this.a = me),
							this.labels[this.a].classList.add("active"),
							this.g.fire());
					}
					updateCollapsed(me) {
						this.k = me;
						for (let ve = 0; ve < this.labels.length; ve++)
							this.labels[ve].setAttribute(
								"aria-expanded",
								me ? "false" : "true",
							);
					}
					dispose() {
						this.g.dispose(), this.f.dispose();
					}
				}
				e.$xXb = se;
				let re = class {
					static {
						_ = this;
					}
					static {
						this.ID = "file";
					}
					constructor(me, ve, ge, be, Ce, Le, Fe, Oe, xe, He, Ke) {
						(this.h = ve),
							(this.j = ge),
							(this.k = be),
							(this.l = Ce),
							(this.m = Le),
							(this.n = Fe),
							(this.o = Oe),
							(this.p = xe),
							(this.q = He),
							(this.t = Ke),
							(this.f = new Map()),
							(this.g = new B.$xe()),
							(this.onDidChangeActiveDescendant = this.g.event),
							(this.a = this.m.getValue());
						const Je = () => {
							const Te = this.m.getValue("workbench.tree.indent"),
								Ee = Math.max(22 - Te, 0);
							me.style.setProperty(
								"--vscode-explorer-align-offset-margin-left",
								`${Ee}px`,
							);
						};
						(this.b = this.m.onDidChangeConfiguration((Te) => {
							Te.affectsConfiguration("explorer") &&
								(this.a = this.m.getValue()),
								Te.affectsConfiguration("workbench.tree.indent") && Je();
						})),
							Je();
					}
					getWidgetAriaLabel() {
						return (0, b.localize)(6994, null);
					}
					get templateId() {
						return _.ID;
					}
					renderTemplate(me) {
						const ve = new u.$Zc(),
							ge = ve.add(this.h.create(me, { supportHighlights: !0 }));
						ve.add(
							ge.onDidRender(() => {
								try {
									Ce.currentContext && this.j(Ce.currentContext);
								} catch {}
							}),
						);
						const be = ee.$tXb.create(this.t, me, ve);
						ve.add(
							ee.$tXb.onDidRegisterDescriptor((Le) => {
								const Fe = Le.create(this.t, me);
								be.push(ve.add(Fe)),
									Fe.setResource(Ce.currentContext?.resource);
							}),
						);
						const Ce = {
							templateDisposables: ve,
							elementDisposables: ve.add(new u.$Zc()),
							label: ge,
							container: me,
							contribs: be,
						};
						return Ce;
					}
					renderElement(me, ve, ge) {
						const be = me.element;
						ge.currentContext = be;
						const Ce = this.n.getEditableData(be);
						ge.label.element.classList.remove("compressed"),
							Ce
								? ((ge.label.element.style.display = "none"),
									ge.contribs.forEach((Le) => Le.setResource(void 0)),
									ge.elementDisposables.add(this.v(ge.container, be, Ce)))
								: ((ge.label.element.style.display = "flex"),
									this.u(be, be.name, void 0, me.filterData, ge));
					}
					renderCompressedElements(me, ve, ge, be) {
						const Ce = me.element.elements[me.element.elements.length - 1];
						ge.currentContext = Ce;
						const Le = me.element.elements.filter((Oe) =>
								this.n.isEditable(Oe),
							),
							Fe = Le.length === 0 ? void 0 : this.n.getEditableData(Le[0]);
						if (Fe)
							ge.label.element.classList.remove("compressed"),
								(ge.label.element.style.display = "none"),
								ge.contribs.forEach((Oe) => Oe.setResource(void 0)),
								ge.elementDisposables.add(this.v(ge.container, Le[0], Fe));
						else {
							ge.label.element.classList.add("compressed"),
								(ge.label.element.style.display = "flex");
							const Oe = `compressed-explorer_${se.ID++}`,
								xe = me.element.elements.map((Je) => Je.name);
							this.u(Ce, xe, Oe, me.filterData, ge);
							const He = new se(
								Oe,
								me.element.elements,
								ge,
								me.depth,
								me.collapsed,
							);
							ge.elementDisposables.add(He);
							const Ke = this.f.get(Ce) ?? [];
							this.f.set(Ce, [...Ke, He]),
								ge.elementDisposables.add(this.g.add(He.onDidChange)),
								ge.elementDisposables.add(
									t.$0fb(ge.container, "mousedown", (Je) => {
										const Te = pe(Je.target);
										Te && He.setIndex(Te.index);
									}),
								),
								ge.elementDisposables.add(
									(0, u.$Yc)(() => {
										const Je = this.f.get(Ce) ?? [],
											Te = Je.findIndex((Ee) => Ee === He);
										if (Te < 0)
											throw new Error(
												"Disposing unknown navigation controller",
											);
										Je.length === 1 ? this.f.delete(Ce) : Je.splice(Te, 1);
									}),
								);
						}
					}
					u(me, ve, ge, be, Ce) {
						Ce.label.element.style.display = "flex";
						const Le = ["explorer-item"];
						this.n.isCut(me) && Le.push("cut");
						const Fe = this.l.getFileIconTheme();
						Ce.container.parentElement?.parentElement
							?.querySelector(".monaco-tl-twistie")
							?.classList.toggle(
								"force-twistie",
								me.hasNests && Fe.hidesExplorerArrows,
							);
						const xe =
								Fe.hasFileIcons &&
								(Fe.hidesExplorerArrows || !Fe.hasFolderIcons),
							He = me.nestedParent && xe;
						Ce.contribs.forEach((Ke) => Ke.setResource(me.resource)),
							Ce.label.setResource(
								{ resource: me.resource, name: ve },
								{
									fileKind: me.isRoot
										? d.FileKind.ROOT_FOLDER
										: me.isDirectory
											? d.FileKind.FOLDER
											: d.FileKind.FILE,
									extraClasses: He
										? [...Le, "align-nest-icon-with-parent-icon"]
										: Le,
									fileDecorations: this.a.explorer.decorations,
									matches: (0, O.$3k)(be),
									separator: this.o.getSeparator(
										me.resource.scheme,
										me.resource.authority,
									),
									domId: ge,
								},
							);
					}
					v(me, ve, ge) {
						const be = this.h.create(me),
							Ce = ["explorer-item", "explorer-item-edited"],
							Le = ve.isRoot
								? d.FileKind.ROOT_FOLDER
								: ve.isDirectory
									? d.FileKind.FOLDER
									: d.FileKind.FILE,
							Fe = this.l.getFileIconTheme(),
							Oe =
								Fe.hasFileIcons &&
								(Fe.hidesExplorerArrows || !Fe.hasFolderIcons),
							xe = ve.nestedParent && Oe,
							He = {
								hidePath: !0,
								hideLabel: !0,
								fileKind: Le,
								extraClasses: xe
									? [...Ce, "align-nest-icon-with-parent-icon"]
									: Ce,
							},
							Ke = ve.name ? (0, o.$mh)(ve.resource) : ve.resource,
							Je = ve.name || "";
						be.setFile((0, o.$nh)(Ke, Je || " "), He),
							(be.element.firstElementChild.style.display = "none");
						const Te = new f.$Mob(be.element, this.k, {
								validationOptions: {
									validation: (Ue) => {
										const qe = ge.validationMessage(Ue);
										return !qe || qe.severity !== C.Severity.Error
											? null
											: {
													content: qe.content,
													formatContent: !0,
													type: f.MessageType.ERROR,
												};
									},
								},
								ariaLabel: (0, b.localize)(6995, null),
								inputBoxStyles: X.$wyb,
							}),
							Ee = Je.lastIndexOf(".");
						let Ie = "prefix";
						(Te.value = Je),
							Te.focus(),
							Te.select({
								start: 0,
								end: Ee > 0 && !ve.isDirectory ? Ee : Je.length,
							});
						const Be = (0, s.$hb)((Ue, qe) => {
								be.element.style.display = "none";
								const Ae = Te.value;
								(0, u.$Vc)(ke), be.element.remove(), qe && ge.onFinish(Ae, Ue);
							}),
							Se = () => {
								if (Te.isInputValid()) {
									const Ue = ge.validationMessage(Te.value);
									Ue
										? Te.showMessage({
												content: Ue.content,
												formatContent: !0,
												type:
													Ue.severity === C.Severity.Info
														? f.MessageType.INFO
														: Ue.severity === C.Severity.Warning
															? f.MessageType.WARNING
															: f.MessageType.ERROR,
											})
										: Te.hideMessage();
								}
							};
						Se();
						const ke = [
							Te,
							Te.onDidChange((Ue) => {
								be.setFile((0, o.$nh)(Ke, Ue || " "), He);
							}),
							t.$$fb(Te.inputElement, t.$$gb.KEY_DOWN, (Ue) => {
								if (Ue.equals(a.KeyCode.F2)) {
									const qe = Te.value.lastIndexOf(".");
									if (ve.isDirectory || qe === -1) return;
									Ie === "prefix"
										? ((Ie = "all"),
											Te.select({ start: 0, end: Te.value.length }))
										: Ie === "all"
											? ((Ie = "suffix"),
												Te.select({ start: qe + 1, end: Te.value.length }))
											: ((Ie = "prefix"), Te.select({ start: 0, end: qe }));
								} else
									Ue.equals(a.KeyCode.Enter)
										? Te.validate() || Be(!0, !0)
										: Ue.equals(a.KeyCode.Escape) && Be(!1, !0);
							}),
							t.$$fb(Te.inputElement, t.$$gb.KEY_UP, (Ue) => {
								Se();
							}),
							t.$0fb(Te.inputElement, t.$$gb.BLUR, async () => {
								for (;;) {
									await (0, Y.$Nh)(0);
									const Ue = Te.inputElement.ownerDocument;
									if (!Ue.hasFocus()) break;
									if (t.$Kgb(Te.inputElement)) return;
									if (
										t.$Ygb(Ue.activeElement) &&
										t.$Fgb(Ue.activeElement, "context-view")
									)
										await B.Event.toPromise(this.q.onDidHideContextMenu);
									else break;
								}
								Be(Te.isInputValid(), !0);
							}),
							be,
						];
						return (0, u.$Yc)(() => {
							Be(!1, !1);
						});
					}
					disposeElement(me, ve, ge) {
						(ge.currentContext = void 0), ge.elementDisposables.clear();
					}
					disposeCompressedElements(me, ve, ge) {
						(ge.currentContext = void 0), ge.elementDisposables.clear();
					}
					disposeTemplate(me) {
						me.templateDisposables.dispose();
					}
					getCompressedNavigationController(me) {
						return this.f.get(me);
					}
					getAriaLabel(me) {
						return me.name;
					}
					getAriaLevel(me) {
						let ve = 0,
							ge = me.parent;
						for (; ge; ) (ge = ge.parent), ve++;
						return (
							this.p.getWorkbenchState() === r.WorkbenchState.WORKSPACE &&
								(ve = ve + 1),
							ve
						);
					}
					getActiveDescendantId(me) {
						return this.f.get(me)?.[0]?.currentId ?? void 0;
					}
					dispose() {
						this.b.dispose();
					}
				};
				(e.$yXb = re),
					(e.$yXb =
						re =
						_ =
							Ne(
								[
									j(3, c.$Wxb),
									j(4, n.$iP),
									j(5, g.$gj),
									j(6, H.$LWb),
									j(7, U.$3N),
									j(8, r.$Vi),
									j(9, c.$Xxb),
									j(10, T.$Li),
								],
								re,
							));
				let le = class {
					constructor(me, ve, ge, be, Ce, Le) {
						(this.k = me),
							(this.l = ve),
							(this.m = ge),
							(this.n = be),
							(this.o = Ce),
							(this.p = Le),
							(this.a = new Map()),
							(this.b = new Set()),
							(this.f = new B.$re()),
							(this.g = []),
							(this.h = new Map()),
							(this.j = new Map()),
							this.g.push(this.k.onDidChangeWorkspaceFolders(() => this.q())),
							this.g.push(
								this.l.onDidChangeConfiguration((Fe) => {
									(Fe.affectsConfiguration("files.exclude") ||
										Fe.affectsConfiguration("explorer.excludeGitIgnore")) &&
										this.q();
								}),
							),
							this.g.push(
								this.p.onDidFilesChange((Fe) => {
									for (const [Oe, xe] of this.h.entries())
										xe.forEach(async (He) => {
											Fe.contains(He, d.FileChangeType.UPDATED) &&
												(await this.t(Oe, He, !0)),
												Fe.contains(He, d.FileChangeType.DELETED) &&
													(this.j.get(Oe)?.delete((0, o.$mh)(He)),
													xe.delete(He),
													this.f.fire());
										});
								}),
							),
							this.g.push(
								this.n.onDidVisibleEditorsChange(() => {
									const Fe = this.n.visibleEditors;
									let Oe = !1;
									for (const xe of Fe) {
										if (!xe.resource) continue;
										const He = this.m.findClosest(xe.resource);
										if (He && He.isExcluded) {
											Oe = !0;
											break;
										}
									}
									for (const xe of this.b)
										if (!Fe.includes(xe)) {
											Oe = !0;
											break;
										}
									Oe && (this.b.clear(), this.f.fire());
								}),
							),
							this.q();
					}
					get onDidChange() {
						return this.f.event;
					}
					q() {
						let me = !1,
							ve = !1;
						this.k.getWorkspace().folders.forEach((ge) => {
							const be = this.l.getValue({ resource: ge.uri }),
								Ce = be?.files?.exclude || Object.create(null),
								Le = be.explorer.excludeGitIgnore;
							if (
								(Le &&
									!this.j.has(ge.uri.toString()) &&
									((ve = !0),
									this.h.set(ge.uri.toString(), new J.$Hc()),
									this.j.set(
										ge.uri.toString(),
										W.$Si.forUris((Oe) => this.o.extUri.ignorePathCasing(Oe)),
									)),
								!Le &&
									this.j.has(ge.uri.toString()) &&
									((ve = !0),
									this.h.delete(ge.uri.toString()),
									this.j.delete(ge.uri.toString())),
								!me)
							) {
								const Oe = this.a.get(ge.uri.toString());
								me = !Oe || !(0, l.$zo)(Oe.original, Ce);
							}
							const Fe = (0, l.$vo)(Ce);
							this.a.set(ge.uri.toString(), {
								original: Fe,
								parsed: i.$Jk(Fe),
							});
						}),
							(me || ve) && (this.b.clear(), this.f.fire());
					}
					async t(me, ve, ge) {
						const be = (0, o.$mh)(ve),
							Ce = this.j.get(me);
						if (!Ce || (!ge && Ce.has(be))) return;
						const Le = await this.p.readFile(ve);
						if (ge) Ce.get(be)?.updateContents(Le.value.toString());
						else {
							const Fe = Ce.findSubstr(be),
								Oe = new K.$sXb(Le.value.toString(), be.path, Fe);
							Ce.set(be, Oe),
								this.h.get(me)?.has(ve) || this.h.get(me)?.add(ve);
						}
						this.f.fire();
					}
					filter(me, ve) {
						return me.name === ".gitignore" &&
							this.j.has(me.root.resource.toString())
							? (this.t(me.root.resource.toString(), me.resource, !1), !0)
							: this.u(me, ve);
					}
					u(me, ve) {
						if (((me.isExcluded = !1), ve === h.TreeVisibility.Hidden))
							return (me.isExcluded = !0), !1;
						if (this.m.getEditableData(me)) return !0;
						const be = this.a
								.get(me.root.resource.toString())
								?.parsed(
									y.$qc(me.root.resource.path, me.resource.path),
									me.name,
									(Oe) => !!(me.parent && me.parent.getChild(Oe)),
								),
							Le = (
								be
									? void 0
									: this.j
											.get(me.root.resource.toString())
											?.findSubstr(me.resource)
							)?.isPathIncludedInTraversal(me.resource.path, me.isDirectory);
						if ((Le === void 0 ? !1 : !Le) || be || me.parent?.isExcluded) {
							me.isExcluded = !0;
							const xe = this.n.visibleEditors.find(
								(He) =>
									He.resource &&
									this.o.extUri.isEqualOrParent(He.resource, me.resource),
							);
							return xe && me.root === this.m.findClosestRoot(me.resource)
								? (this.b.add(xe), !0)
								: !1;
						}
						return !0;
					}
					dispose() {
						(0, u.$Vc)(this.g);
					}
				};
				(e.$zXb = le),
					(e.$zXb = le =
						Ne(
							[
								j(0, r.$Vi),
								j(1, g.$gj),
								j(2, H.$LWb),
								j(3, A.$IY),
								j(4, F.$Vl),
								j(5, d.$ll),
							],
							le,
						));
				let oe = class {
					constructor(me, ve) {
						(this.a = me), (this.b = ve);
					}
					compare(me, ve) {
						if (me.isRoot) {
							if (ve.isRoot) {
								const Oe = this.b.getWorkspaceFolder(me.resource),
									xe = this.b.getWorkspaceFolder(ve.resource);
								return Oe && xe ? Oe.index - xe.index : -1;
							}
							return -1;
						}
						if (ve.isRoot) return 1;
						const ge = this.a.sortOrderConfiguration.sortOrder,
							be = this.a.sortOrderConfiguration.lexicographicOptions;
						this.a.sortOrderConfiguration.reverse && ([me, ve] = [ve, me]);
						let Le, Fe;
						switch (be) {
							case "upper":
								(Le = v.$5r), (Fe = v.$0r);
								break;
							case "lower":
								(Le = v.$6r), (Fe = v.$$r);
								break;
							case "unicode":
								(Le = v.$7r), (Fe = v.$_r);
								break;
							default:
								(Le = v.$4r), (Fe = v.$9r);
						}
						switch (ge) {
							case "type":
								if (me.isDirectory && !ve.isDirectory) return -1;
								if (ve.isDirectory && !me.isDirectory) return 1;
								if (me.isDirectory && ve.isDirectory)
									return Le(me.name, ve.name);
								break;
							case "filesFirst":
								if (me.isDirectory && !ve.isDirectory) return 1;
								if (ve.isDirectory && !me.isDirectory) return -1;
								break;
							case "foldersNestsFiles":
								if (me.isDirectory && !ve.isDirectory) return -1;
								if (ve.isDirectory && !me.isDirectory) return 1;
								if (me.hasNests && !ve.hasNests) return -1;
								if (ve.hasNests && !me.hasNests) return 1;
								break;
							case "mixed":
								break;
							default:
								if (me.isDirectory && !ve.isDirectory) return -1;
								if (ve.isDirectory && !me.isDirectory) return 1;
								break;
						}
						switch (ge) {
							case "type":
								return Fe(me.name, ve.name);
							case "modified":
								return me.mtime !== ve.mtime
									? me.mtime && ve.mtime && me.mtime < ve.mtime
										? 1
										: -1
									: Le(me.name, ve.name);
							default:
								return Le(me.name, ve.name);
						}
					}
				};
				(e.$AXb = oe), (e.$AXb = oe = Ne([j(0, H.$LWb), j(1, r.$Vi)], oe));
				let ae = class {
					static {
						te = this;
					}
					static {
						this.a = "explorer.confirmDragAndDrop";
					}
					constructor(me, ve, ge, be, Ce, Le, Fe, Oe, xe, He) {
						(this.j = me),
							(this.k = ve),
							(this.l = ge),
							(this.m = be),
							(this.n = Ce),
							(this.o = Le),
							(this.p = Fe),
							(this.q = Oe),
							(this.t = xe),
							(this.u = He),
							(this.f = u.$1c.None),
							(this.g = new u.$Zc()),
							(this.h = !1);
						const Ke = (Je) => {
							(!Je || Je.affectsConfiguration("explorer.enableDragAndDrop")) &&
								(this.h = this.p.getValue("explorer.enableDragAndDrop"));
						};
						Ke(void 0),
							this.g.add(this.p.onDidChangeConfiguration((Je) => Ke(Je)));
					}
					onDragOver(me, ve, ge, be, Ce) {
						if (!this.h) return !1;
						if (ve) {
							const Le = te.B(ve, Ce);
							if (Le) {
								const Fe = pe(Ce.target);
								if (Fe && Fe.index < Fe.count - 1) {
									const Oe = this.v(me, Le, ge, be, Ce);
									return Oe
										? (Fe.element !== this.b &&
												((this.b = Fe.element),
												this.f.dispose(),
												(this.f = (0, u.$Yc)(() => {
													Fe.element.classList.remove("drop-target"),
														(this.b = void 0);
												})),
												Fe.element.classList.add("drop-target")),
											typeof Oe == "boolean" ? Oe : { ...Oe, feedback: [] })
										: (this.f.dispose(), !1);
								}
							}
						}
						return this.f.dispose(), this.v(me, ve, ge, be, Ce);
					}
					v(me, ve, ge, be, Ce) {
						const Le = Ce && ((Ce.ctrlKey && !D.$m) || (Ce.altKey && D.$m)),
							Fe = me instanceof L.$yib,
							xe = {
								type:
									Fe || Le
										? w.ListDragOverEffectType.Copy
										: w.ListDragOverEffectType.Move,
								position: w.ListDragOverEffectPosition.Over,
							};
						if (Fe) {
							if (
								!(0, S.$mzb)(Ce, P.$Ohb.FILES, S.$hzb.FILES, P.$Ohb.RESOURCES)
							)
								return !1;
						} else {
							if (me instanceof L.$xib) return !1;
							{
								const He = te.A(me),
									Ke = He.every((Je) => Je.isRoot);
								if (!ve)
									return !Le &&
										He.every((Je) => !!Je.parent && Je.parent.isRoot)
										? !1
										: Ke
											? {
													accept: !0,
													effect: {
														type: w.ListDragOverEffectType.Move,
														position: w.ListDragOverEffectPosition.After,
													},
												}
											: {
													accept: !0,
													bubble: h.TreeDragOverBubble.Down,
													effect: xe,
													autoExpand: !1,
												};
								if (
									!Array.isArray(He) ||
									(!Le && He.every((Je) => Je.isReadonly)) ||
									He.some((Je) =>
										Je.isRoot
											? !1
											: !!(
													this.u.extUri.isEqual(Je.resource, ve.resource) ||
													(!Le &&
														this.u.extUri.isEqual(
															(0, o.$mh)(Je.resource),
															ve.resource,
														)) ||
													this.u.extUri.isEqualOrParent(
														ve.resource,
														Je.resource,
													)
												),
									)
								)
									return !1;
								if (Ke) {
									if (!ve.isRoot) return !1;
									let Je;
									switch (be) {
										case L.ListViewTargetSector.TOP:
										case L.ListViewTargetSector.CENTER_TOP:
											Je = w.ListDragOverEffectPosition.Before;
											break;
										case L.ListViewTargetSector.CENTER_BOTTOM:
										case L.ListViewTargetSector.BOTTOM:
											Je = w.ListDragOverEffectPosition.After;
											break;
									}
									return {
										accept: !0,
										effect: {
											type: w.ListDragOverEffectType.Move,
											position: Je,
										},
									};
								}
							}
						}
						if (ve) {
							if (ve.isDirectory)
								return ve.isReadonly
									? !1
									: {
											accept: !0,
											bubble: h.TreeDragOverBubble.Down,
											effect: xe,
											autoExpand: !0,
										};
							if (
								this.n
									.getWorkspace()
									.folders.every(
										(He) => He.uri.toString() !== ve.resource.toString(),
									)
							)
								return {
									accept: !0,
									bubble: h.TreeDragOverBubble.Up,
									effect: xe,
								};
						} else
							return {
								accept: !0,
								bubble: h.TreeDragOverBubble.Down,
								effect: xe,
							};
						return !1;
					}
					getDragURI(me) {
						return this.k.isEditable(me) ? null : me.resource.toString();
					}
					getDragLabel(me, ve) {
						return me.length === 1 ? te.B(me[0], ve).name : String(me.length);
					}
					onDragStart(me, ve) {
						const ge = te.A(me, ve);
						if (ge && ge.length && ve.dataTransfer) {
							this.q.invokeFunction((Ce) => (0, I.$PSb)(Ce, ge, ve));
							const be = ge
								.filter((Ce) => Ce.resource.scheme === k.Schemas.file)
								.map((Ce) => Ce.resource.fsPath);
							be.length &&
								ve.dataTransfer.setData(S.$hzb.FILES, JSON.stringify(be));
						}
					}
					async drop(me, ve, ge, be, Ce) {
						if ((this.f.dispose(), ve)) {
							const Fe = te.B(ve, Ce);
							Fe && (ve = Fe);
						}
						if (
							(ve ||
								((ve = this.k.roots[this.k.roots.length - 1]),
								(be = L.ListViewTargetSector.BOTTOM)),
							!ve.isDirectory && ve.parent && (ve = ve.parent),
							ve.isReadonly)
						)
							return;
						const Le = ve;
						if (Le)
							try {
								me instanceof L.$yib
									? !D.$r ||
										((0, r.$bj)(this.n.getWorkspace()) &&
											G.WebFileSystemAccess.supported(ne.$Bfb))
										? await this.q
												.createInstance(q.$QWb)
												.import(Le, Ce, ne.$Bfb)
										: await this.q.createInstance(q.$PWb).upload(ve, Ce)
									: await this.w(me, Le, ge, be, Ce);
							} catch (Fe) {
								this.m.error((0, V.$xj)(Fe));
							}
					}
					async w(me, ve, ge, be, Ce) {
						const Le = te.A(me),
							Fe = new Map(Le.map((Je) => [Je, this.j(Je)]));
						for (const [Je, Te] of Fe)
							if (Te) {
								const Ee = Je.nestedChildren;
								if (Ee) for (const Ie of Ee) Fe.set(Ie, !0);
							}
						const Oe = (0, o.$wh)([...Fe.keys()], (Je) => Je.resource),
							xe = (Ce.ctrlKey && !D.$m) || (Ce.altKey && D.$m);
						if (!xe && this.p.getValue(te.a)) {
							const Je =
									Oe.length > 1 && Oe.every((Ie) => Ie.isRoot)
										? (0, b.localize)(6996, null)
										: Oe.length > 1
											? (0, b.localize)(6997, null, Oe.length, ve.name)
											: Oe[0].isRoot
												? (0, b.localize)(6998, null, Oe[0].name)
												: (0, b.localize)(6999, null, Oe[0].name, ve.name),
								Te =
									Oe.length > 1 && !Oe.every((Ie) => Ie.isRoot)
										? (0, M.$JO)(Oe.map((Ie) => Ie.resource))
										: void 0,
								Ee = await this.m.confirm({
									message: Je,
									detail: Te,
									checkbox: { label: (0, b.localize)(7e3, null) },
									primaryButton: (0, b.localize)(7001, null),
								});
							if (!Ee.confirmed) return;
							Ee.checkboxChecked === !0 && (await this.p.updateValue(te.a, !1));
						}
						await this.x(
							Oe.filter((Je) => Je.isRoot),
							ve,
							be,
						);
						const Ke = Oe.filter((Je) => !Je.isRoot);
						return xe ? this.y(Ke, ve) : this.z(Ke, ve);
					}
					async x(me, ve, ge) {
						if (me.length === 0) return;
						const be = this.n.getWorkspace().folders;
						let Ce;
						const Le = [],
							Fe = [],
							Oe = [];
						for (let xe = 0; xe < be.length; xe++) {
							const He = { uri: be[xe].uri, name: be[xe].name };
							ve instanceof $.$JWb &&
								this.u.extUri.isEqual(be[xe].uri, ve.resource) &&
								(Ce = xe);
							for (const Ke of me)
								if (this.u.extUri.isEqual(be[xe].uri, Ke.resource)) {
									Le.push(xe);
									break;
								}
							me.every((Ke) => Ke.resource.toString() !== be[xe].uri.toString())
								? Fe.push(He)
								: Oe.push(He);
						}
						if (Ce === void 0) Ce = Fe.length;
						else {
							switch (ge) {
								case L.ListViewTargetSector.BOTTOM:
								case L.ListViewTargetSector.CENTER_BOTTOM:
									Ce++;
									break;
							}
							for (const xe of Le) xe < Ce && Ce--;
						}
						return (
							Fe.splice(Ce, 0, ...Oe), this.t.updateFolders(0, Fe.length, Fe)
						);
					}
					async y(me, ve) {
						const ge = this.p.getValue().explorer,
							be = [];
						for (const { resource: Fe, isDirectory: Oe } of me) {
							const xe = ge.incrementalNaming === "disabled",
								He = await (0, R.$8Wb)(
									this.k,
									this.o,
									this.m,
									ve,
									{ resource: Fe, isDirectory: Oe, allowOverwrite: xe },
									ge.incrementalNaming,
								);
							if (!He) continue;
							const Ke = new x.$uzb(Fe, He, { copy: !0, overwrite: xe });
							be.push(Ke);
						}
						const Ce = ue(me);
						await this.k.applyBulkEdit(be, {
							confirmBeforeUndo:
								ge.confirmUndo === p.UndoConfirmLevel.Default ||
								ge.confirmUndo === p.UndoConfirmLevel.Verbose,
							undoLabel: (0, b.localize)(7002, null, Ce),
							progressLabel: (0, b.localize)(7003, null, Ce),
						});
						const Le = be
							.filter((Fe) => {
								const Oe = Fe.newResource
									? this.k.findClosest(Fe.newResource)
									: void 0;
								return Oe && !Oe.isDirectory;
							})
							.map((Fe) => ({
								resource: Fe.newResource,
								options: { pinned: !0 },
							}));
						await this.l.openEditors(Le);
					}
					async z(me, ve) {
						const ge = me
								.filter((Le) => !Le.isReadonly)
								.map(
									(Le) =>
										new x.$uzb(Le.resource, (0, o.$nh)(ve.resource, Le.name)),
								),
							be = ue(me),
							Ce = {
								confirmBeforeUndo:
									this.p.getValue().explorer.confirmUndo ===
									p.UndoConfirmLevel.Verbose,
								undoLabel: (0, b.localize)(7004, null, be),
								progressLabel: (0, b.localize)(7005, null, be),
							};
						try {
							await this.k.applyBulkEdit(ge, Ce);
						} catch (Le) {
							if (
								Le.fileOperationResult ===
								d.FileOperationResult.FILE_MOVE_CONFLICT
							) {
								const Fe = [];
								for (const He of ge)
									He.newResource &&
										(await this.o.exists(He.newResource)) &&
										Fe.push(He.newResource);
								const Oe = (0, q.$TWb)(Fe),
									{ confirmed: xe } = await this.m.confirm(Oe);
								xe &&
									(await this.k.applyBulkEdit(
										ge.map(
											(He) =>
												new x.$uzb(He.oldResource, He.newResource, {
													overwrite: !0,
												}),
										),
										Ce,
									));
							} else throw Le;
						}
					}
					static A(me, ve) {
						return me.context
							? me.context
							: ve && me.elements.length === 1
								? ((me.context = [te.B(me.elements[0], ve)]), me.context)
								: me.elements;
					}
					static B(me, ve) {
						const ge = t
								.getWindow(ve)
								.document.elementFromPoint(ve.clientX, ve.clientY),
							be = pe(ge);
						if (be) {
							const { count: Ce, index: Le } = be;
							let Fe = Ce - 1;
							for (; Fe > Le && me.parent; ) (me = me.parent), Fe--;
							return me;
						}
						return me;
					}
					onDragEnd() {
						this.f.dispose();
					}
					dispose() {
						this.f.dispose();
					}
				};
				(e.$BXb = ae),
					(e.$BXb =
						ae =
						te =
							Ne(
								[
									j(1, H.$LWb),
									j(2, A.$IY),
									j(3, M.$GO),
									j(4, r.$Vi),
									j(5, d.$ll),
									j(6, g.$gj),
									j(7, T.$Li),
									j(8, N.$mRb),
									j(9, F.$Vl),
								],
								ae,
							));
				function pe(fe) {
					if (!t.$Ygb(fe)) return null;
					let me = fe;
					for (; me && !me.classList.contains("monaco-list-row"); ) {
						if (
							me.classList.contains("label-name") &&
							me.hasAttribute("data-icon-label-count")
						) {
							const ve = Number(me.getAttribute("data-icon-label-count")),
								ge = Number(me.getAttribute("data-icon-label-index"));
							if ((0, z.$pg)(ve) && (0, z.$pg)(ge))
								return { element: me, count: ve, index: ge };
						}
						me = me.parentElement;
					}
					return null;
				}
				function $e(fe) {
					return !!pe(fe);
				}
				class ye {
					isIncompressible(me) {
						return (
							me.isRoot ||
							!me.isDirectory ||
							me instanceof $.$KWb ||
							!me.parent ||
							me.parent.isRoot
						);
					}
				}
				e.$DXb = ye;
				function ue(fe) {
					return fe.length === 1
						? fe[0].name
						: fe.every((me) => me.isDirectory)
							? (0, b.localize)(7006, null, fe.length)
							: fe.every((me) => !me.isDirectory)
								? (0, b.localize)(7007, null, fe.length)
								: `${fe.length} files and folders`;
				}
			},
		)

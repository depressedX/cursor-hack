import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../nls.js';
import '../../../../../../base/browser/dom.js';
import '../../../../../../base/browser/ui/toolbar/toolbar.js';
import '../../../../../../base/browser/ui/iconLabel/iconLabel.js';
import '../../../../../../base/common/event.js';
import '../../../../../../base/common/filters.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../../base/common/themables.js';
import '../../../../../../editor/common/services/getIconClasses.js';
import '../../../../../../platform/configuration/common/configuration.js';
import '../../../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../../platform/markers/common/markers.js';
import '../../../../../../platform/registry/common/platform.js';
import '../../../../../../platform/theme/common/colorRegistry.js';
import '../../../../../../platform/theme/common/themeService.js';
import '../../../../../common/contributions.js';
import '../../notebookBrowser.js';
import '../../notebookEditor.js';
import '../../../common/notebookCommon.js';
import '../../../../../services/editor/common/editorService.js';
import '../../../../../services/lifecycle/common/lifecycle.js';
import '../../../../../services/outline/browser/outline.js';
import '../../../../../../base/common/cancellation.js';
import '../../../../../../editor/common/core/range.js';
import '../../../../../../base/browser/window.js';
import '../../../../../../platform/contextview/browser/contextView.js';
import '../../../../../../platform/actions/common/actions.js';
import '../../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../../../base/common/async.js';
import '../../../../outline/browser/outline.js';
import '../../../../../../base/common/codicons.js';
import '../../../common/notebookContextKeys.js';
import '../../viewModel/notebookOutlineEntryFactory.js';
import '../../viewModel/notebookOutlineDataSourceFactory.js';
import '../../../common/notebookExecutionStateService.js';
import '../../../../../../editor/common/services/languageFeatures.js';
define(
			de[1958],
			he([
				1, 0, 4, 7, 461, 325, 6, 132, 3, 26, 252, 10, 81, 5, 90, 30, 51, 35, 55,
				108, 1360, 70, 18, 52, 475, 33, 17, 75, 49, 11, 8, 92, 15, 802, 14, 176,
				1301, 1306, 190, 69,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$N4b = e.$M4b = e.$L4b = e.$K4b = e.$J4b = e.$I4b = void 0),
					(i = mt(i));
				class F {
					static {
						this.templateId = "NotebookOutlineRenderer";
					}
					constructor(ee, _, te, Q, Z, se) {
						(this.container = ee),
							(this.iconClass = _),
							(this.iconLabel = te),
							(this.decoration = Q),
							(this.actionMenu = Z),
							(this.elementDisposables = se);
					}
				}
				let x = class {
					constructor(ee, _, te, Q, Z, se, re, le) {
						(this.d = ee),
							(this.f = _),
							(this.g = te),
							(this.h = Q),
							(this.j = Z),
							(this.k = se),
							(this.l = re),
							(this.m = le),
							(this.templateId = F.templateId);
					}
					renderTemplate(ee) {
						const _ = new m.$Zc();
						ee.classList.add("notebook-outline-element", "show-file-icons");
						const te = document.createElement("div");
						ee.append(te);
						const Q = new E.$Xob(ee, { supportHighlights: !0 }),
							Z = document.createElement("div");
						(Z.className = "element-decoration"), ee.append(Z);
						const se = document.createElement("div");
						return (
							(se.className = "action-menu"),
							ee.append(se),
							new F(ee, te, Q, Z, se, _)
						);
					}
					renderElement(ee, _, te, Q) {
						const Z = [],
							se = {
								matches: (0, d.$3k)(ee.filterData),
								labelEscapeNewLines: !0,
								extraClasses: Z,
							},
							re = ee.element.cell.cellKind === l.CellKind.Code;
						ee.element.level >= 8
							? (te.iconClass.className =
									"element-icon " +
									r.ThemeIcon.asClassNameArray(ee.element.icon).join(" "))
							: re &&
									this.g.getFileIconTheme().hasFileIcons &&
									!ee.element.isExecuting
								? ((te.iconClass.className = ""),
									Z.push(...(0, u.$CDb)(ee.element.cell.language ?? "")))
								: (te.iconClass.className =
										"element-icon " +
										r.ThemeIcon.asClassNameArray(ee.element.icon).join(" ")),
							te.iconLabel.setLabel(" " + ee.element.label, void 0, se);
						const { markerInfo: le } = ee.element;
						if (
							(te.container.style.removeProperty("--outline-element-color"),
							(te.decoration.innerText = ""),
							le)
						) {
							const oe = this.h.getValue("problems.visibility");
							!this.h.getValue(v.OutlineConfigKeys.problemsBadges) || !oe
								? (te.decoration.classList.remove("bubble"),
									(te.decoration.innerText = ""))
								: le.count === 0
									? (te.decoration.classList.add("bubble"),
										(te.decoration.innerText = "\uEA71"))
									: (te.decoration.classList.remove("bubble"),
										(te.decoration.innerText =
											le.count > 9 ? "9+" : String(le.count)));
							const pe = this.g
								.getColorTheme()
								.getColor(le.topSev === n.MarkerSeverity.Error ? p.$TS : p.$US);
							if (oe === void 0) return;
							!this.h.getValue(v.OutlineConfigKeys.problemsColors) || !oe
								? (te.container.style.removeProperty("--outline-element-color"),
									te.decoration.style.setProperty(
										"--outline-element-color",
										pe?.toString() ?? "inherit",
									))
								: te.container.style.setProperty(
										"--outline-element-color",
										pe?.toString() ?? "inherit",
									);
						}
						if (this.f === v.OutlineTarget.OutlinePane) {
							const oe = ee.element.cell,
								ae = this.d?.getViewModel();
							if (!ae) return;
							const pe = ae.getCellIndex(oe),
								$e = re ? 0 : ae.getFoldedLength(pe),
								ye = te.elementDisposables.add(
									this.k.createScoped(te.container),
								);
							e.$N4b.CellKind.bindTo(ye).set(
								re ? l.CellKind.Code : l.CellKind.Markup,
							),
								e.$N4b.CellHasChildren.bindTo(ye).set($e > 0),
								e.$N4b.CellHasHeader.bindTo(ye).set(
									ee.element.level !==
										O.NotebookOutlineConstants.NonHeaderOutlineLevel,
								),
								e.$N4b.OutlineElementTarget.bindTo(ye).set(this.f),
								this.n(re, ae, ye, te, oe);
							const ue = te.elementDisposables.add(
									new w.$jpb(te.actionMenu, this.j, {
										actionViewItemProvider: (ve) => {
											if (ve instanceof k.$2X)
												return this.m.createInstance(D.$Lyb, ve, void 0);
										},
									}),
								),
								fe = te.elementDisposables.add(
									this.l.createMenu(k.$XX.NotebookOutlineActionMenu, ye),
								),
								me = H(fe, {
									notebookEditor: this.d,
									outlineEntry: ee.element,
								});
							ue.setActions(me.primary, me.secondary),
								this.o(ue, fe, me, ee.element, te),
								(te.actionMenu.style.padding = "0 0.8em 0 0.4em");
						}
					}
					disposeTemplate(ee) {
						ee.iconLabel.dispose(), ee.elementDisposables.clear();
					}
					disposeElement(ee, _, te, Q) {
						te.elementDisposables.clear(), i.$9fb(te.actionMenu);
					}
					n(ee, _, te, Q, Z) {
						const se = ee ? b.CellFoldingState.None : Z.foldingState,
							re = e.$N4b.CellFoldingState.bindTo(te);
						re.set(se),
							ee ||
								Q.elementDisposables.add(
									_.onDidFoldingStateChanged(() => {
										const le = Z.foldingState;
										e.$N4b.CellFoldingState.bindTo(te).set(le), re.set(le);
									}),
								);
					}
					o(ee, _, te, Q, Z) {
						let se = !1,
							re;
						ee.setActions(te.primary, te.secondary),
							Z.elementDisposables.add(
								_.onDidChange(() => {
									if (se) {
										const oe = H(_, {
											notebookEditor: this.d,
											outlineEntry: Q,
										});
										re = () => ee.setActions(oe.primary, oe.secondary);
										return;
									}
									const le = H(_, { notebookEditor: this.d, outlineEntry: Q });
									ee.setActions(le.primary, le.secondary);
								}),
							),
							Z.container.classList.remove(
								"notebook-outline-toolbar-dropdown-active",
							),
							Z.elementDisposables.add(
								ee.onDidChangeDropdownVisibility((le) => {
									(se = le),
										le
											? Z.container.classList.add(
													"notebook-outline-toolbar-dropdown-active",
												)
											: Z.container.classList.remove(
													"notebook-outline-toolbar-dropdown-active",
												),
										re &&
											!le &&
											((0, M.$Oh)(
												() => {
													re?.();
												},
												0,
												Z.elementDisposables,
											),
											(re = void 0));
								}),
							);
					}
				};
				x = Ne(
					[
						j(2, o.$iP),
						j(3, a.$gj),
						j(4, P.$Xxb),
						j(5, L.$6j),
						j(6, k.$YX),
						j(7, c.$Li),
					],
					x,
				);
				function H(ne, ee) {
					const Q = { primary: [], secondary: [] };
					return (0, D.$Kyb)(ne, { shouldForwardArgs: !0, arg: ee }, Q), Q;
				}
				class q {
					getAriaLabel(ee) {
						return ee.label;
					}
					getWidgetAriaLabel() {
						return "";
					}
				}
				class V {
					getKeyboardNavigationLabel(ee) {
						return ee.label;
					}
				}
				class G {
					getHeight(ee) {
						return 22;
					}
					getTemplateId(ee) {
						return F.templateId;
					}
				}
				let K = class {
					constructor(ee, _, te) {
						(this.g = ee),
							(this.h = _),
							(this.j = te),
							(this.d = new m.$Zc()),
							(this.f = this.h.getValue(l.$56.gotoSymbolsAllSymbols)),
							this.d.add(
								this.h.onDidChangeConfiguration((Q) => {
									Q.affectsConfiguration(l.$56.gotoSymbolsAllSymbols) &&
										(this.f = this.h.getValue(l.$56.gotoSymbolsAllSymbols));
								}),
							);
					}
					getQuickPickElements() {
						const ee = [];
						for (const se of this.g?.object?.entries ?? []) se.asFlatList(ee);
						const _ = [],
							{ hasFileIcons: te } = this.j.getFileIconTheme(),
							Q = (se) => !!se.symbolKind,
							Z = (se) =>
								se.cell.cellKind === l.CellKind.Code &&
								se.level === O.NotebookOutlineConstants.NonHeaderOutlineLevel;
						for (let se = 0; se < ee.length; se++) {
							const re = ee[se],
								le = ee[se + 1];
							if ((!this.f && Q(re)) || (this.f && Z(re) && le && Q(le)))
								continue;
							const oe = te && !re.symbolKind;
							_.push({
								element: re,
								label: oe ? re.label : `$(${re.icon.id}) ${re.label}`,
								ariaLabel: re.label,
								iconClasses: oe ? (0, u.$CDb)(re.cell.language ?? "") : void 0,
							});
						}
						return _;
					}
					dispose() {
						this.d.dispose();
					}
				};
				(e.$I4b = K), (e.$I4b = K = Ne([j(1, a.$gj), j(2, o.$iP)], K));
				let J = class {
					constructor(ee, _) {
						(this.j = ee),
							(this.k = _),
							(this.d = new m.$Zc()),
							(this.f = this.k.getValue(l.$56.outlineShowCodeCells)),
							(this.g = this.k.getValue(l.$56.outlineShowCodeCellSymbols)),
							(this.h = this.k.getValue(l.$56.outlineShowMarkdownHeadersOnly)),
							this.d.add(
								this.k.onDidChangeConfiguration((te) => {
									te.affectsConfiguration(l.$56.outlineShowCodeCells) &&
										(this.f = this.k.getValue(l.$56.outlineShowCodeCells)),
										te.affectsConfiguration(l.$56.outlineShowCodeCellSymbols) &&
											(this.g = this.k.getValue(
												l.$56.outlineShowCodeCellSymbols,
											)),
										te.affectsConfiguration(
											l.$56.outlineShowMarkdownHeadersOnly,
										) &&
											(this.h = this.k.getValue(
												l.$56.outlineShowMarkdownHeadersOnly,
											));
								}),
							);
					}
					getActiveEntry() {
						const ee = this.j?.object?.activeElement;
						if (!ee) return;
						if (!this.l(ee)) return ee;
						let _ = ee.parent;
						for (; _; )
							if (this.l(_)) _ = _.parent;
							else return _;
					}
					l(ee) {
						return !!(
							(this.h &&
								ee.cell.cellKind === l.CellKind.Markup &&
								ee.level ===
									O.NotebookOutlineConstants.NonHeaderOutlineLevel) ||
							(!this.f && ee.cell.cellKind === l.CellKind.Code) ||
							(!this.g &&
								ee.cell.cellKind === l.CellKind.Code &&
								ee.level > O.NotebookOutlineConstants.NonHeaderOutlineLevel)
						);
					}
					*getChildren(ee) {
						const te =
							ee instanceof Y ? (this.j?.object?.entries ?? []) : ee.children;
						for (const Q of te)
							Q.cell.cellKind === l.CellKind.Markup
								? this.h
									? Q.level <
											O.NotebookOutlineConstants.NonHeaderOutlineLevel &&
										(yield Q)
									: yield Q
								: this.f &&
									Q.cell.cellKind === l.CellKind.Code &&
									(this.g
										? yield Q
										: Q.level ===
												O.NotebookOutlineConstants.NonHeaderOutlineLevel &&
											(yield Q));
					}
					dispose() {
						this.d.dispose();
					}
				};
				(e.$J4b = J), (e.$J4b = J = Ne([j(1, a.$gj)], J));
				let W = class {
					constructor(ee, _) {
						(this.g = ee),
							(this.h = _),
							(this.d = new m.$Zc()),
							(this.f = this.h.getValue(l.$56.breadcrumbsShowCodeCells)),
							this.d.add(
								this.h.onDidChangeConfiguration((te) => {
									te.affectsConfiguration(l.$56.breadcrumbsShowCodeCells) &&
										(this.f = this.h.getValue(l.$56.breadcrumbsShowCodeCells));
								}),
							);
					}
					getBreadcrumbElements() {
						const ee = [];
						let _ = this.g?.object?.activeElement;
						for (; _; )
							(this.f || _.cell.cellKind !== l.CellKind.Code) && ee.unshift(_),
								(_ = _.parent);
						return ee;
					}
					dispose() {
						this.d.dispose();
					}
				};
				(e.$K4b = W), (e.$K4b = W = Ne([j(1, a.$gj)], W));
				class X {
					constructor() {
						this.d = new i.$fgb(
							T.$Bfb,
							() => new Intl.Collator(void 0, { numeric: !0 }),
						);
					}
					compareByPosition(ee, _) {
						return ee.index - _.index;
					}
					compareByType(ee, _) {
						return (
							ee.cell.cellKind - _.cell.cellKind ||
							this.d.value.compare(ee.label, _.label)
						);
					}
					compareByName(ee, _) {
						return this.d.value.compare(ee.label, _.label);
					}
				}
				let Y = class {
					get activeElement() {
						if ((this.s(), this.u === v.OutlineTarget.OutlinePane))
							return this.config.treeDataSource.getActiveEntry();
						console.error(
							"activeElement should not be called outside of the OutlinePane",
						);
					}
					get entries() {
						return this.s(), this.m?.object?.entries ?? [];
					}
					get uri() {
						return this.m?.object?.uri;
					}
					get isEmpty() {
						return this.m?.object?.isEmpty ?? !0;
					}
					s() {
						this.j.isTriggered() && (this.j.cancel(), this.G());
					}
					constructor(ee, _, te, Q, Z, se, re, le) {
						(this.t = ee),
							(this.u = _),
							(this.v = te),
							(this.w = Q),
							(this.x = Z),
							(this.y = se),
							(this.z = re),
							(this.A = le),
							(this.outlineKind = "notebookCells"),
							(this.d = new m.$Zc()),
							(this.f = new m.$Zc()),
							(this.g = new m.$Zc()),
							(this.h = new C.$re()),
							(this.onDidChange = this.h.event),
							(this.j = this.d.add(new M.$Jh(300))),
							(this.k = this.d.add(new M.$Jh(200))),
							(this.l = this.d.add(new M.$Jh(2e3))),
							(this.q = this.y.getValue(l.$56.gotoSymbolsAllSymbols)),
							(this.r = this.y.getValue(l.$56.outlineShowCodeCellSymbols)),
							this.B();
						const oe = new G(),
							ae = [this.x.createInstance(x, this.t.getControl(), this.u)],
							pe = new X(),
							$e = {
								collapseByDefault:
									this.u === v.OutlineTarget.Breadcrumbs ||
									(this.u === v.OutlineTarget.OutlinePane &&
										this.y.getValue(v.OutlineConfigKeys.collapseItems) ===
											v.OutlineConfigCollapseItemsValues.Collapsed),
								expandOnlyOnTwistieClick: !0,
								multipleSelectionSupport: !1,
								accessibilityProvider: new q(),
								identityProvider: { getId: (ye) => ye.cell.uri.toString() },
								keyboardNavigationLabelProvider: new V(),
							};
						this.config = {
							treeDataSource: this.n,
							quickPickDataSource: this.o,
							breadcrumbsDataSource: this.p,
							delegate: oe,
							renderers: ae,
							comparator: pe,
							options: $e,
						};
					}
					B() {
						this.C(),
							this.D(),
							this.d.add(
								this.t.onDidChangeModel(() => {
									this.C(), this.D(), this.E();
								}),
							),
							this.d.add(
								this.z.documentSymbolProvider.onDidChange(() => {
									this.F();
								}),
							),
							this.d.add(
								this.t.onDidChangeSelection(() => {
									this.J();
								}),
							),
							this.d.add(
								this.y.onDidChangeConfiguration((ee) => {
									(ee.affectsConfiguration(
										l.$56.outlineShowMarkdownHeadersOnly,
									) ||
										ee.affectsConfiguration(l.$56.outlineShowCodeCells) ||
										ee.affectsConfiguration(l.$56.outlineShowCodeCellSymbols) ||
										ee.affectsConfiguration(l.$56.breadcrumbsShowCodeCells)) &&
										this.H();
								}),
							),
							this.d.add(
								this.A.onDidChangeExecution((ee) => {
									ee.type === U.NotebookExecutionType.cell &&
										this.t.textModel &&
										ee.affectsNotebook(this.t.textModel?.uri) &&
										this.H();
								}),
							),
							this.d.add(
								this.y.onDidChangeConfiguration((ee) => {
									(ee.affectsConfiguration(l.$56.gotoSymbolsAllSymbols) ||
										ee.affectsConfiguration(
											l.$56.outlineShowCodeCellSymbols,
										)) &&
										((this.q = this.y.getValue(l.$56.gotoSymbolsAllSymbols)),
										(this.r = this.y.getValue(
											l.$56.outlineShowCodeCellSymbols,
										)),
										this.E());
								}),
							),
							this.d.add(
								this.v.onDidFileIconThemeChange(() => {
									this.h.fire({});
								}),
							),
							this.G();
					}
					C() {
						const ee = this.t.getControl();
						this.m?.dispose(),
							this.g.clear(),
							ee?.hasModel()
								? ((this.m = this.g.add(
										this.x.invokeFunction((_) => _.get(B.$G4b).getOrCreate(ee)),
									)),
									this.g.add(
										this.m.object.onDidChange(() => {
											this.h.fire({});
										}),
									))
								: (this.m = void 0),
							(this.n = this.g.add(this.x.createInstance(J, this.m))),
							(this.o = this.g.add(this.x.createInstance(K, this.m))),
							(this.p = this.g.add(this.x.createInstance(W, this.m)));
					}
					D() {
						this.f.clear(),
							this.t.textModel &&
								(this.entries.length || this.E(),
								this.f.add(
									this.t.textModel.onDidChangeContent((ee) => {
										ee.rawEvents.some(
											(_) =>
												_.kind ===
													l.NotebookCellsChangeType.ChangeCellContent ||
												_.kind ===
													l.NotebookCellsChangeType
														.ChangeCellInternalMetadata ||
												_.kind === l.NotebookCellsChangeType.Move ||
												_.kind === l.NotebookCellsChangeType.ModelChange,
										) && this.H();
									}),
								));
					}
					async E(ee = S.CancellationToken.None) {
						this.u === v.OutlineTarget.QuickPick && this.q
							? await this.m?.object?.computeFullSymbols(ee)
							: this.u === v.OutlineTarget.OutlinePane &&
								this.r &&
								this.m?.object?.computeFullSymbols(ee);
					}
					async F() {
						this.j.cancel(),
							this.k.cancel(),
							this.l.trigger(() => {
								this.E();
							});
					}
					G() {
						this.m?.object?.recomputeState();
					}
					H() {
						this.k.cancel(),
							this.j.trigger(() => {
								this.G();
							});
					}
					I() {
						this.m?.object?.recomputeActive();
					}
					J() {
						this.k.trigger(() => {
							this.I();
						});
					}
					async reveal(ee, _, te) {
						const Q = {
							..._,
							override: this.t.input?.editorId,
							cellRevealType: b.CellRevealType.NearTopIfOutsideViewport,
							selection: ee.position,
							viewState: void 0,
						};
						await this.w.openEditor(
							{ resource: ee.cell.uri, options: Q },
							te ? y.$KY : void 0,
						);
					}
					preview(ee) {
						const _ = this.t.getControl();
						if (!_) return m.$1c.None;
						if (ee.range) {
							const Z = I.$iL.lift(ee.range);
							_.revealRangeInCenterIfOutsideViewportAsync(ee.cell, Z);
						} else _.revealInCenterIfOutsideViewport(ee.cell);
						const te = _.deltaCellDecorations(
							[],
							[
								{
									handle: ee.cell.handle,
									options: {
										className: "nb-symbolHighlight",
										outputClassName: "nb-symbolHighlight",
									},
								},
							],
						);
						let Q;
						return (
							_.changeModelDecorations((Z) => {
								if (ee.range) {
									const se = [
											{
												range: ee.range,
												options: {
													description:
														"document-symbols-outline-range-highlight",
													className: "rangeHighlight",
													isWholeLine: !0,
												},
											},
										],
										re = { ownerId: ee.cell.handle, decorations: se };
									Q = Z.deltaDecorations([], [re]);
								}
							}),
							(0, m.$Yc)(() => {
								_.deltaCellDecorations(te, []),
									Q?.length &&
										_.changeModelDecorations((Z) => {
											Z.deltaDecorations(Q, []);
										});
							})
						);
					}
					captureViewState() {
						const ee = this.t.getControl(),
							_ = ee?.getEditorViewState();
						return (0, m.$Yc)(() => {
							_ && ee?.restoreListViewState(_);
						});
					}
					dispose() {
						this.h.dispose(),
							this.d.dispose(),
							this.f.dispose(),
							this.g.dispose(),
							this.m?.dispose();
					}
				};
				(e.$L4b = Y),
					(e.$L4b = Y =
						Ne(
							[
								j(2, o.$iP),
								j(3, y.$IY),
								j(4, c.$Li),
								j(5, a.$gj),
								j(6, z.$k3),
								j(7, U.$d6),
							],
							Y,
						));
				let ie = class {
					constructor(ee, _) {
						this.d = _;
						const te = ee.registerOutlineCreator(this);
						this.dispose = () => te.dispose();
					}
					matches(ee) {
						return ee.getId() === s.$B4b.ID;
					}
					async createOutline(ee, _, te) {
						return this.d.createInstance(Y, ee, _);
					}
				};
				(e.$M4b = ie),
					(e.$M4b = ie = Ne([j(0, v.$x4b), j(1, c.$Li)], ie)),
					(e.$N4b = {
						CellKind: new L.$5j("notebookCellKind", void 0),
						CellHasChildren: new L.$5j("notebookCellHasChildren", !1),
						CellHasHeader: new L.$5j("notebookCellHasHeader", !1),
						CellFoldingState: new L.$5j(
							"notebookCellFoldingState",
							b.CellFoldingState.None,
						),
						OutlineElementTarget: new L.$5j(
							"notebookOutlineElementTarget",
							void 0,
						),
					}),
					g.$Io
						.as(f.Extensions.Workbench)
						.registerWorkbenchContribution(ie, $.LifecyclePhase.Eventually),
					g.$Io
						.as(h.$No.Configuration)
						.registerConfiguration({
							id: "notebook",
							order: 100,
							type: "object",
							properties: {
								[l.$56.outlineShowMarkdownHeadersOnly]: {
									type: "boolean",
									default: !0,
									markdownDescription: (0, t.localize)(7801, null),
								},
								[l.$56.outlineShowCodeCells]: {
									type: "boolean",
									default: !1,
									markdownDescription: (0, t.localize)(7802, null),
								},
								[l.$56.outlineShowCodeCellSymbols]: {
									type: "boolean",
									default: !0,
									markdownDescription: (0, t.localize)(7803, null),
								},
								[l.$56.breadcrumbsShowCodeCells]: {
									type: "boolean",
									default: !0,
									markdownDescription: (0, t.localize)(7804, null),
								},
								[l.$56.gotoSymbolsAllSymbols]: {
									type: "boolean",
									default: !0,
									markdownDescription: (0, t.localize)(7805, null),
								},
							},
						}),
					k.$ZX.appendMenuItem(k.$XX.ViewTitle, {
						submenu: k.$XX.NotebookOutlineFilter,
						title: (0, t.localize)(7806, null),
						icon: A.$ak.filter,
						group: "navigation",
						order: -1,
						when: L.$Kj.and(L.$Kj.equals("view", N.IOutlinePane.Id), R.$mJb),
					}),
					(0, k.$4X)(
						class extends k.$3X {
							constructor() {
								super({
									id: "notebook.outline.toggleShowMarkdownHeadersOnly",
									title: (0, t.localize)(7807, null),
									f1: !1,
									toggled: {
										condition: L.$Kj.equals(
											"config.notebook.outline.showMarkdownHeadersOnly",
											!0,
										),
									},
									menu: {
										id: k.$XX.NotebookOutlineFilter,
										group: "0_markdown_cells",
									},
								});
							}
							run(ee, ..._) {
								const te = ee.get(a.$gj),
									Q = te.getValue(l.$56.outlineShowMarkdownHeadersOnly);
								te.updateValue(l.$56.outlineShowMarkdownHeadersOnly, !Q);
							}
						},
					),
					(0, k.$4X)(
						class extends k.$3X {
							constructor() {
								super({
									id: "notebook.outline.toggleCodeCells",
									title: (0, t.localize)(7808, null),
									f1: !1,
									toggled: {
										condition: L.$Kj.equals(
											"config.notebook.outline.showCodeCells",
											!0,
										),
									},
									menu: {
										id: k.$XX.NotebookOutlineFilter,
										order: 1,
										group: "1_code_cells",
									},
								});
							}
							run(ee, ..._) {
								const te = ee.get(a.$gj),
									Q = te.getValue(l.$56.outlineShowCodeCells);
								te.updateValue(l.$56.outlineShowCodeCells, !Q);
							}
						},
					),
					(0, k.$4X)(
						class extends k.$3X {
							constructor() {
								super({
									id: "notebook.outline.toggleCodeCellSymbols",
									title: (0, t.localize)(7809, null),
									f1: !1,
									toggled: {
										condition: L.$Kj.equals(
											"config.notebook.outline.showCodeCellSymbols",
											!0,
										),
									},
									menu: {
										id: k.$XX.NotebookOutlineFilter,
										order: 2,
										group: "1_code_cells",
									},
								});
							}
							run(ee, ..._) {
								const te = ee.get(a.$gj),
									Q = te.getValue(l.$56.outlineShowCodeCellSymbols);
								te.updateValue(l.$56.outlineShowCodeCellSymbols, !Q);
							}
						},
					);
			},
		),
		
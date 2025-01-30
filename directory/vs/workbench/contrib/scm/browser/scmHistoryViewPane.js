import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/platform.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/hover/hoverDelegateFactory.js';
import '../../../../base/browser/ui/iconLabel/iconLabel.js';
import '../../../../base/common/date.js';
import '../../../../base/common/filters.js';
import '../../../../base/common/htmlContent.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/observable.js';
import '../../../../base/common/themables.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/list/browser/listService.js';
import '../../../../platform/observable/common/platformObservableUtils.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../browser/parts/views/viewPane.js';
import '../../../common/views.js';
import './scmHistory.js';
import './scmRepositoryRenderer.js';
import './util.js';
import '../common/scm.js';
import '../../../../base/common/iconLabels.js';
import '../../../services/layout/browser/layoutService.js';
import '../../../../base/browser/ui/hover/hoverWidget.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../base/common/iterator.js';
import '../../../../base/common/async.js';
import '../../../../base/common/uri.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/codicons.js';
import './scmViewPane.js';
import '../../../../platform/actions/browser/toolbar.js';
import '../../../../platform/progress/common/progress.js';
import '../../../../css!vs/workbench/contrib/scm/browser/media/scm.js';
define(
			de[4033],
			he([
				1, 0, 6, 12, 7, 95, 325, 275, 132, 94, 3, 77, 26, 4, 10, 8, 49, 72, 5,
				39, 93, 326, 41, 32, 51, 35, 146, 60, 1747, 1257, 614, 258, 274, 96,
				160, 11, 103, 15, 9, 31, 50, 24, 14, 1947, 173, 84, 652,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*event*/,
				i /*platform*/,
				w /*dom*/,
				E /*hoverDelegateFactory*/,
				C /*iconLabel*/,
				d /*date*/,
				m /*filters*/,
				r /*htmlContent*/,
				u /*lifecycle*/,
				a /*observable*/,
				h /*themables*/,
				c /*nls*/,
				n /*configuration*/,
				g /*contextkey*/,
				p /*contextView*/,
				o /*hover*/,
				f /*instantiation*/,
				b /*keybinding*/,
				s /*listService*/,
				l /*platformObservableUtils*/,
				y /*opener*/,
				$ /*telemetry*/,
				v /*colorRegistry*/,
				S /*themeService*/,
				I /*viewPane*/,
				T /*views*/,
				P /*scmHistory*/,
				k /*scmRepositoryRenderer*/,
				L /*util*/,
				D /*scm*/,
				M /*iconLabels*/,
				N /*layoutService*/,
				A /*hoverWidget*/,
				R /*actions*/,
				O /*iterator*/,
				B /*async*/,
				U /*uri*/,
				z /*commands*/,
				F /*actions*/,
				x /*arrays*/,
				H /*codicons*/,
				q /*scmViewPane*/,
				V /*toolbar*/,
				G /*progress*/,
) {
				"use strict";
				var K, J, W;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$iQc = void 0),
					(i = mt(i));
				const X = (0, v.$wP)(
						"scmGraph.historyItemHoverAdditionsForeground",
						"gitDecoration.addedResourceForeground",
						(0, c.localize)(9069, null),
					),
					Y = (0, v.$wP)(
						"scmGraph.historyItemHoverDeletionsForeground",
						"gitDecoration.deletedResourceForeground",
						(0, c.localize)(9070, null),
					);
				(0, R.$4X)(
					class extends I.$WMb {
						constructor() {
							super({
								id: "workbench.scm.action.refreshGraph",
								title: (0, c.localize)(9071, null),
								viewId: D.$b7,
								f1: !1,
								icon: H.$ak.refresh,
								menu: {
									id: R.$XX.SCMHistoryTitle,
									when: g.$Kj.or(
										g.$Kj.has("scmRepository"),
										g.$Kj.and(
											q.$aQc.RepositoryVisibilityCount.isEqualTo(1),
											g.$Kj.equals("config.scm.alwaysShowRepositories", !1),
										),
									),
									group: "navigation",
									order: 1e3,
								},
							});
						}
						async runInView(pe, $e, ye) {
							const ue = pe.get(D.$c7),
								fe = ye ? ue.getRepository(ye.id) : void 0;
							$e.refresh(fe);
						}
					},
				);
				class ie {
					getHeight() {
						return 22;
					}
					getTemplateId($e) {
						if ((0, L.$oPc)($e)) return ne.TEMPLATE_ID;
						if ((0, L.$wPc)($e)) return ee.TEMPLATE_ID;
						if ((0, L.$xPc)($e)) return _.TEMPLATE_ID;
						throw new Error("Unknown element");
					}
				}
				let ne = class {
					static {
						K = this;
					}
					static {
						this.TEMPLATE_ID = "repository";
					}
					get templateId() {
						return K.TEMPLATE_ID;
					}
					constructor($e, ye, ue, fe, me, ve, ge, be, Ce, Le) {
						(this.a = $e),
							(this.b = ye),
							(this.c = ue),
							(this.d = fe),
							(this.f = me),
							(this.g = ve),
							(this.i = ge),
							(this.j = be),
							(this.k = Ce),
							(this.m = Le);
					}
					renderTemplate($e) {
						$e.classList.contains("monaco-tl-contents") &&
							$e.parentElement.parentElement
								.querySelector(".monaco-tl-twistie")
								.classList.add("force-twistie");
						const ye = (0, w.$fhb)($e, (0, w.$)(".scm-provider")),
							ue = new C.$Xob(ye),
							fe = this.i.setupManagedHover(
								(0, E.$cib)("mouse"),
								ue.element,
								"",
								{},
							),
							me = (0, w.$fhb)(
								ye,
								(0, w.$)("div.state-label.monaco-count-badge.long"),
							),
							ve = new V.$Syb(
								(0, w.$fhb)(ye, (0, w.$)(".actions")),
								{
									actionRunner: this.b,
									actionViewItemProvider: this.c,
									resetMenu: R.$XX.SCMHistoryTitle,
								},
								this.k,
								this.f,
								this.g,
								this.j,
								this.d,
								this.m,
							);
						return {
							label: ue,
							labelCustomHover: fe,
							stateLabel: me,
							toolBar: ve,
							elementDisposables: new u.$Zc(),
							templateDisposable: (0, u.$Xc)(fe, ve),
						};
					}
					renderElement($e, ye, ue, fe) {
						const me = (0, L.$oPc)($e) ? $e : $e.element;
						ue.elementDisposables.add(
							(0, a.autorun)((ve) => {
								const ge = this.a(me).read(ve);
								(ue.stateLabel.style.display = ge !== "" ? "" : "none"),
									(ue.stateLabel.textContent = ge);
							}),
						),
							ue.label.setLabel(me.provider.name),
							ue.labelCustomHover.update(
								me.provider.rootUri
									? `${me.provider.label}: ${me.provider.rootUri.fsPath}`
									: me.provider.label,
							),
							ue.elementDisposables.add(
								(0, a.autorunWithStore)((ve, ge) => {
									const be = me.provider.historyProvider
										.read(ve)
										?.currentHistoryItemGroup.read(ve);
									if (!be) {
										ue.toolBar.setActions([], []);
										return;
									}
									const Ce = this.f.createOverlay([
											["scmRepository", me.id],
											["scmProvider", me.provider.contextValue],
											["scmHistoryItemGroupHasRemote", !!be.remote],
										]),
										Le = this.k.createMenu(R.$XX.SCMHistoryTitle, Ce);
									ge.add(
										(0, L.$CPc)(Le, (Fe, Oe) => {
											ue.toolBar.setActions(Fe, Oe);
										}),
									);
								}),
							),
							(ue.toolBar.context = me.provider);
					}
					disposeElement($e, ye, ue) {
						ue.elementDisposables.clear();
					}
					disposeTemplate($e) {
						$e.elementDisposables.dispose(), $e.templateDisposable.dispose();
					}
				};
				ne = K = Ne(
					[
						j(3, z.$ek),
						j(4, g.$6j),
						j(5, p.$Xxb),
						j(6, o.$Uyb),
						j(7, b.$uZ),
						j(8, R.$YX),
						j(9, $.$km),
					],
					ne,
				);
				let ee = class {
					static {
						J = this;
					}
					static {
						this.TEMPLATE_ID = "history-item";
					}
					get templateId() {
						return J.TEMPLATE_ID;
					}
					constructor($e, ye, ue) {
						(this.a = $e), (this.b = ye), (this.c = ue);
					}
					renderTemplate($e) {
						$e.parentElement.parentElement
							.querySelector(".monaco-tl-twistie")
							.classList.add("force-no-twistie");
						const ye = (0, w.$fhb)($e, (0, w.$)(".history-item")),
							ue = (0, w.$fhb)(ye, (0, w.$)(".graph-container")),
							fe = new C.$Xob(ye, {
								supportIcons: !0,
								supportHighlights: !0,
								supportDescriptionHighlights: !0,
							}),
							me = (0, w.$fhb)(ye, (0, w.$)(".label-container"));
						return (
							ye.appendChild(me),
							{
								element: ye,
								graphContainer: ue,
								label: fe,
								labelContainer: me,
								elementDisposables: new u.$Zc(),
								disposables: new u.$Zc(),
							}
						);
					}
					renderElement($e, ye, ue, fe) {
						const me = $e.element.historyItemViewModel,
							ve = me.historyItem,
							ge = this.b.setupManagedHover(
								this.a,
								ue.element,
								this.f($e.element),
							);
						ue.elementDisposables.add(ge),
							(ue.graphContainer.textContent = ""),
							ue.graphContainer.appendChild((0, P.$6Pc)(me));
						const [be, Ce] = this.g(me, $e.filterData);
						if (
							(ue.label.setLabel(ve.message, ve.author, {
								matches: be,
								descriptionMatches: Ce,
							}),
							(ue.labelContainer.textContent = ""),
							ve.labels)
						) {
							const Le = this.d($e.element.repository);
							for (const Fe of ve.labels)
								Fe.icon &&
									h.ThemeIcon.isThemeIcon(Fe.icon) &&
									Le.includes(Fe.title) &&
									(0, w.$fhb)(
										ue.labelContainer,
										(0, w.$)("div.label"),
									).classList.add(...h.ThemeIcon.asClassNameArray(Fe.icon));
						}
					}
					d($e) {
						const ye = $e.provider.historyProvider
							.get()
							?.currentHistoryItemGroup.get();
						return ye
							? [ye.name, ye.remote?.name, ye.base?.name].filter(
									(ue) => ue !== void 0,
								)
							: [];
					}
					f($e) {
						const ye = this.c.getColorTheme(),
							ue = $e.historyItemViewModel.historyItem,
							fe = $e.repository.provider.historyProvider
								.get()
								?.currentHistoryItemGroup?.get(),
							me = new r.$cl("", { isTrusted: !0, supportThemeIcons: !0 });
						if (ue.author) {
							if (
								(me.appendMarkdown(`$(account) **${ue.author}**`), ue.timestamp)
							) {
								const be = new Intl.DateTimeFormat(i.$z, {
									year: "numeric",
									month: "long",
									day: "numeric",
									hour: "numeric",
									minute: "numeric",
								});
								me.appendMarkdown(
									`, $(history) ${(0, d.$dn)(ue.timestamp, !0, !0)} (${be.format(ue.timestamp)})`,
								);
							}
							me.appendMarkdown(`

`);
						}
						if (
							(me.appendMarkdown(`${ue.message}

`),
							ue.statistics)
						) {
							if (
								(me.appendMarkdown(`---

`),
								me.appendMarkdown(
									`<span>${ue.statistics.files === 1 ? ((0, c.localize))(9072, null, ue.statistics.files) : ((0, c.localize))(9073, null, ue.statistics.files)}</span>`,
								),
								ue.statistics.insertions)
							) {
								const be = ye.getColor(X);
								me.appendMarkdown(
									`,&nbsp;<span style="color:${be};">${ue.statistics.insertions === 1 ? ((0, c.localize))(9074, null, ue.statistics.insertions, "(+)") : ((0, c.localize))(9075, null, ue.statistics.insertions, "(+)")}</span>`,
								);
							}
							if (ue.statistics.deletions) {
								const be = ye.getColor(Y);
								me.appendMarkdown(
									`,&nbsp;<span style="color:${be};">${ue.statistics.deletions === 1 ? ((0, c.localize))(9076, null, ue.statistics.deletions, "(-)") : ((0, c.localize))(9077, null, ue.statistics.deletions, "(-)")}</span>`,
								);
							}
						}
						const ve = this.d($e.repository),
							ge = (ue.labels ?? []).filter((be) => ve.includes(be.title));
						if (ge.length > 0) {
							const be = ye.getColor(P.$1Pc),
								Ce = ye.getColor(P.$2Pc),
								Le = ye.getColor(P.$3Pc),
								Fe = ye.getColor(P.$4Pc);
							me.appendMarkdown(`

---

`),
								me.appendMarkdown(
									ge
										.map((Oe) => {
											const xe =
													Oe.title === fe?.name
														? be
														: Oe.title === fe?.remote?.name
															? Ce
															: Oe.title === fe?.base?.name
																? Le
																: void 0,
												He = h.ThemeIcon.isThemeIcon(Oe.icon) ? Oe.icon.id : "";
											return `<span style="color:${Fe};background-color:${xe};border-radius:2px;">&nbsp;$(${He})&nbsp;${Oe.title}&nbsp;</span>`;
										})
										.join("&nbsp;&nbsp;"),
								);
						}
						return { markdown: me, markdownNotSupportedFallback: ue.message };
					}
					g($e, ye) {
						return ye
							? [
									$e.historyItem.message === ye.label
										? (0, m.$3k)(ye.score)
										: void 0,
									$e.historyItem.author === ye.label
										? (0, m.$3k)(ye.score)
										: void 0,
								]
							: [void 0, void 0];
					}
					disposeElement($e, ye, ue, fe) {
						ue.elementDisposables.clear();
					}
					disposeTemplate($e) {
						$e.disposables.dispose();
					}
				};
				ee = J = Ne([j(1, o.$Uyb), j(2, S.$iP)], ee);
				let _ = class {
					static {
						W = this;
					}
					static {
						this.TEMPLATE_ID = "historyItemLoadMore";
					}
					get templateId() {
						return W.TEMPLATE_ID;
					}
					constructor($e, ye, ue, fe) {
						(this.a = $e), (this.b = ye), (this.c = ue), (this.d = fe);
					}
					renderTemplate($e) {
						$e.parentElement.parentElement
							.querySelector(".monaco-tl-twistie")
							.classList.add("force-no-twistie");
						const ye = (0, w.$fhb)($e, (0, w.$)(".history-item-load-more")),
							ue = (0, w.$fhb)(ye, (0, w.$)(".graph-placeholder")),
							fe = (0, w.$fhb)(ye, (0, w.$)(".history-item-placeholder")),
							me = new C.$Xob(fe, { supportIcons: !0 });
						return {
							element: ye,
							graphPlaceholder: ue,
							historyItemPlaceholderContainer: fe,
							historyItemPlaceholderLabel: me,
							elementDisposables: new u.$Zc(),
							disposables: new u.$Zc(),
						};
					}
					renderElement($e, ye, ue, fe) {
						const me = this.d.visibleRepositories.length,
							ve = this.c.getValue("scm.alwaysShowRepositories") === !0;
						(ue.graphPlaceholder.textContent = ""),
							(ue.graphPlaceholder.style.width = `${P.$ZPc * ($e.element.graphColumns.length + 1)}px`),
							ue.graphPlaceholder.appendChild(
								(0, P.$7Pc)($e.element.graphColumns),
							),
							ue.historyItemPlaceholderContainer.classList.toggle(
								"shimmer",
								me === 1 && !ve,
							),
							me > 1 || ve
								? ue.elementDisposables.add(
										(0, a.autorun)((ge) => {
											const Ce = `$(${this.a($e.element.repository).read(ge) ? "loading~spin" : "fold-down"})`;
											ue.historyItemPlaceholderLabel.setLabel(
												(0, c.localize)(9078, null, Ce),
											);
										}),
									)
								: (ue.historyItemPlaceholderLabel.setLabel(""),
									this.b($e.element.repository));
					}
					disposeTemplate($e) {
						$e.disposables.dispose();
					}
				};
				_ = W = Ne([j(2, n.$gj), j(3, D.$d7)], _);
				class te extends F.$sj {
					constructor($e) {
						super(), (this.a = $e);
					}
					async q($e, ye) {
						if (!($e instanceof R.$2X)) return super.q($e, ye);
						const ue = [];
						ue.push(ye.repository.provider);
						const fe = this.a();
						fe.some((ve) => ve === ye) && fe.length > 1
							? ue.push(
									...fe.map((ve) => ({
										id: ve.historyItemViewModel.historyItem.id,
										parentIds: ve.historyItemViewModel.historyItem.parentIds,
										message: ve.historyItemViewModel.historyItem.message,
										author: ve.historyItemViewModel.historyItem.author,
										icon: ve.historyItemViewModel.historyItem.icon,
										timestamp: ve.historyItemViewModel.historyItem.timestamp,
										statistics: ve.historyItemViewModel.historyItem.statistics,
									})),
								)
							: ue.push({
									id: ye.historyItemViewModel.historyItem.id,
									parentIds: ye.historyItemViewModel.historyItem.parentIds,
									message: ye.historyItemViewModel.historyItem.message,
									author: ye.historyItemViewModel.historyItem.author,
									icon: ye.historyItemViewModel.historyItem.icon,
									timestamp: ye.historyItemViewModel.historyItem.timestamp,
									statistics: ye.historyItemViewModel.historyItem.statistics,
								}),
							await $e.run(...ue);
					}
				}
				let Q = class extends o.$Vyb {
					constructor($e, ye, ue, fe) {
						super("element", !0, () => this.g(), ue, fe),
							(this.a = $e),
							(this.b = ye);
					}
					g() {
						const $e = this.b.getSideBarPosition();
						let ye;
						return (
							this.a === T.ViewContainerLocation.Sidebar
								? (ye =
										$e === N.Position.LEFT
											? A.HoverPosition.RIGHT
											: A.HoverPosition.LEFT)
								: this.a === T.ViewContainerLocation.AuxiliaryBar
									? (ye =
											$e === N.Position.LEFT
												? A.HoverPosition.LEFT
												: A.HoverPosition.RIGHT)
									: (ye = A.HoverPosition.RIGHT),
							{
								additionalClasses: ["history-item-hover"],
								position: { hoverPosition: ye, forcePosition: !0 },
							}
						);
					}
				};
				Q = Ne([j(1, N.$mEb), j(2, n.$gj), j(3, o.$Uyb)], Q);
				let Z = class extends F.$sj {
					constructor($e) {
						super(), (this.a = $e);
					}
					q($e, ye) {
						return this.a.withProgress(
							{ location: D.$b7 },
							async () => await super.q($e, ye),
						);
					}
				};
				Z = Ne([j(0, G.$8N)], Z);
				class se {
					getWidgetAriaLabel() {
						return (0, c.localize)(9079, null);
					}
					getAriaLabel($e) {
						if ((0, L.$oPc)($e))
							return `${$e.provider.name} ${$e.provider.label}`;
						if ((0, L.$wPc)($e)) {
							const ye = $e.historyItemViewModel.historyItem;
							return `${(0, M.$$k)(ye.message).trim()}${ye.author ? `, ${ye.author}` : ""}`;
						} else return "";
					}
				}
				class re {
					getId($e) {
						if ((0, L.$oPc)($e)) return `repo:${$e.provider.id}`;
						if ((0, L.$wPc)($e)) {
							const ye = $e.repository.provider,
								ue = $e.historyItemViewModel.historyItem;
							return `historyItem:${ye.id}/${ue.id}/${ue.parentIds.join(",")}`;
						} else {
							if ((0, L.$xPc)($e))
								return `historyItemLoadMore:${$e.repository.provider.id}}`;
							throw new Error("Invalid tree element");
						}
					}
				}
				class le {
					getKeyboardNavigationLabel($e) {
						if (!(0, L.$oPc)($e)) {
							if ((0, L.$wPc)($e))
								return [
									$e.historyItemViewModel.historyItem.message,
									$e.historyItemViewModel.historyItem.author,
								];
							if ((0, L.$xPc)($e)) return "";
							throw new Error("Invalid tree element");
						}
					}
				}
				let oe = class extends u.$1c {
					constructor($e, ye) {
						super(), (this.b = $e), (this.c = ye), (this.a = new Map());
					}
					async getChildren($e) {
						const ye = this.c.visibleRepositories.length,
							ue = this.b.getValue("scm.alwaysShowRepositories") === !0;
						if ((0, L.$nPc)($e) && (ye > 1 || ue))
							return this.c.visibleRepositories;
						if (((0, L.$nPc)($e) && ye === 1 && !ue) || (0, L.$oPc)($e)) {
							const fe = [];
							$e = (0, L.$oPc)($e) ? $e : this.c.visibleRepositories[0];
							const me = await this.f($e);
							fe.push(...me);
							const ve = (0, x.$wb)(me);
							return (
								ve &&
									ve.historyItemViewModel.outputSwimlanes.length > 0 &&
									fe.push({
										repository: $e,
										graphColumns: ve.historyItemViewModel.outputSwimlanes,
										type: "historyItemLoadMore",
									}),
								fe
							);
						}
						return [];
					}
					hasChildren($e) {
						if ((0, L.$nPc)($e)) return this.c.visibleRepositories.length !== 0;
						if ((0, L.$oPc)($e)) return !0;
						if ((0, L.$wPc)($e)) return !1;
						if ((0, L.$xPc)($e)) return !1;
						throw new Error("hasChildren not implemented.");
					}
					clearState($e) {
						if (!$e) {
							this.a.clear();
							return;
						}
						this.a.delete($e);
					}
					loadMore($e) {
						const ye = this.a.get($e);
						ye && this.a.set($e, { ...ye, loadMore: !0 });
					}
					async f($e) {
						let ye = this.a.get($e);
						const ue = $e.provider.historyProvider.get(),
							fe =
								ye?.currentHistoryItemGroup ??
								ue?.currentHistoryItemGroup.get();
						if (!ue || !fe) return [];
						if (!ye || ye.loadMore) {
							const ve = [
									fe.revision ?? fe.id,
									...(fe.remote ? [fe.remote.revision ?? fe.remote.id] : []),
									...(fe.base ? [fe.base.revision ?? fe.base.id] : []),
								],
								ge = ye?.items ?? [],
								be =
									(await ue.provideHistoryItems2({
										historyItemGroupIds: ve,
										limit: 50,
										skip: ge.length,
									})) ?? [];
							(ye = {
								currentHistoryItemGroup: fe,
								items: [...ge, ...be],
								loadMore: !1,
							}),
								this.a.set($e, ye);
						}
						const me = new Map([[fe.name, P.$1Pc]]);
						return (
							fe.remote && me.set(fe.remote.name, P.$2Pc),
							fe.base && me.set(fe.base.name, P.$3Pc),
							(0, P.$8Pc)(ye.items, me).map((ve) => ({
								repository: $e,
								historyItemViewModel: ve,
								type: "historyItem2",
							}))
						);
					}
					dispose() {
						this.a.clear(), super.dispose();
					}
				};
				oe = Ne([j(0, n.$gj), j(1, D.$d7)], oe);
				let ae = class extends I.$TMb {
					constructor($e, ye, ue, fe, me, ve, ge, be, Ce, Le, Fe, Oe, xe, He) {
						super(
							{ ...$e, titleMenuId: R.$XX.SCMHistoryTitle },
							ge,
							ve,
							me,
							Le,
							Ce,
							be,
							Fe,
							Oe,
							xe,
							He,
						),
							(this.dc = ye),
							(this.ec = ue),
							(this.fc = fe),
							(this.g = new Map()),
							(this.j = new Map()),
							(this.n = new u.$0c()),
							(this.t = new u.$Zc()),
							(this.L = new B.$Hh()),
							(this.ab = new B.$Gh()),
							(this.cc = (0, l.$Mwb)(
								"scm.providerCountBadge",
								"hidden",
								this.Ab,
							)),
							(this.sb = this.xb.createKey(
								"scmHistoryItemGroupHasRemote",
								void 0,
							)),
							(this.m = this.Db.createInstance(Z)),
							this.D(this.m),
							this.D(this.ab);
					}
					X($e, ye) {
						super.X($e, ye), this.b.layout($e, ye);
					}
					W($e) {
						super.W($e),
							(this.a = (0, w.$fhb)(
								$e,
								(0, w.$)(".scm-view.scm-history-view"),
							)),
							this.a.classList.add("file-icon-themable-tree"),
							this.D(
								(0, a.autorun)((ye) => {
									const ue = this.cc.read(ye);
									this.a.classList.toggle(
										"hide-provider-counts",
										ue === "hidden",
									),
										this.a.classList.toggle(
											"auto-provider-counts",
											ue === "auto",
										);
								}),
							),
							this.ic(this.a),
							this.onDidChangeBodyVisibility((ye) => {
								ye
									? this.L.queue(async () => {
											await this.b.setInput(this.ec),
												t.Event.filter(
													this.Ab.onDidChangeConfiguration,
													(ue) =>
														ue.affectsConfiguration(
															"scm.alwaysShowRepositories",
														),
													this.t,
												)(
													() => {
														this.bc(), this.refresh();
													},
													this,
													this.t,
												),
												this.ec.onDidChangeVisibleRepositories(
													this.lc,
													this,
													this.t,
												),
												this.lc({
													added: this.ec.visibleRepositories,
													removed: O.Iterable.empty(),
												}),
												(this.b.scrollTop = 0);
										})
									: (this.c.clearState(),
										this.t.clear(),
										this.n.clearAndDisposeAll());
							});
					}
					getActionRunner() {
						return this.m;
					}
					async refresh($e) {
						this.c.clearState($e),
							await this.tc($e),
							this.rc($e, ""),
							(this.b.scrollTop = 0);
					}
					ic($e) {
						this.f = new re();
						const ye = this.Db.createInstance(
							Q,
							this.Cb.getViewLocationById(this.id),
						);
						this.D(ye),
							(this.c = this.Db.createInstance(oe)),
							this.D(this.c),
							(this.b = this.Db.createInstance(
								s.$FMb,
								"SCM History Tree",
								$e,
								new ie(),
								[
									this.Db.createInstance(
										ne,
										(ue) => this.qc(ue),
										this.m,
										(0, L.$GPc)(this.Db),
									),
									this.Db.createInstance(ee, ye),
									this.Db.createInstance(
										_,
										(ue) => this.oc(ue),
										(ue) => this.pc(ue),
									),
								],
								this.c,
								{
									accessibilityProvider: new se(),
									identityProvider: this.f,
									collapseByDefault: (ue) => !(0, L.$oPc)(ue),
									keyboardNavigationLabelProvider: new le(),
									horizontalScrolling: !1,
									multipleSelectionSupport: !1,
								},
							)),
							this.D(this.b),
							this.b.onDidOpen(this.jc, this, this.B),
							this.b.onContextMenu(this.kc, this, this.B);
					}
					async jc($e) {
						if ($e.element) {
							if ((0, L.$oPc)($e.element)) this.ec.focus($e.element);
							else if ((0, L.$wPc)($e.element)) {
								const ye = $e.element.historyItemViewModel.historyItem,
									ue = ye.parentIds.length > 0 ? ye.parentIds[0] : void 0,
									me = await $e.element.repository.provider.historyProvider
										.get()
										?.provideHistoryItemChanges(ye.id, ue);
								if (me) {
									const ve = `${ye.id.substring(0, 8)} - ${ye.message}`,
										ge = $e.element.repository.provider.rootUri,
										be = ge ? ge.path : $e.element.repository.provider.label,
										Ce = U.URI.from(
											{
												scheme: "scm-history-item",
												path: `${be}/${ue}..${ye.id}`,
											},
											!0,
										);
									await this.dc.executeCommand(
										"_workbench.openMultiDiffEditor",
										{ title: ve, multiDiffSourceUri: Ce, resources: me },
									);
								}
								this.ec.focus($e.element.repository);
							} else if ((0, L.$xPc)($e.element)) {
								const ye = this.ec.visibleRepositories.length,
									ue = this.Ab.getValue("scm.alwaysShowRepositories") === !0;
								(ye > 1 || ue) &&
									(this.pc($e.element.repository), this.b.setSelection([]));
							}
						} else return;
					}
					kc($e) {
						const ye = $e.element;
						if (!ye) return;
						let ue = [],
							fe = ye,
							me = new te(() => this.nc());
						if ((0, L.$oPc)(ye)) {
							const ge = this.ec.menus.getRepositoryMenus(
								ye.provider,
							).repositoryContextMenu;
							(ue = (0, L.$EPc)(ge)),
								(me = new k.$NPc(() => this.mc())),
								(fe = ye.provider);
						} else if ((0, L.$wPc)(ye)) {
							const ge = this.ec.menus
								.getRepositoryMenus(ye.repository.provider)
								.historyProviderMenu?.getHistoryItemMenu2(ye);
							ue = ge ? (0, L.$EPc)(ge) : [];
						}
						me.onWillRun(() => this.b.domFocus()),
							this.zb.showContextMenu({
								getAnchor: () => $e.anchor,
								getActions: () => ue,
								getActionsContext: () => fe,
								actionRunner: me,
							});
					}
					lc({ added: $e, removed: ye }) {
						for (const ue of $e) {
							const fe = new u.$Zc();
							fe.add(
								(0, a.autorun)((me) => {
									const ve = ue.provider.historyProvider.read(me),
										ge = ve?.currentHistoryItemGroupId.read(me),
										be = ve?.currentHistoryItemGroupRevision.read(me),
										Ce = ve?.currentHistoryItemGroupRemoteId.read(me);
									this.ec.visibleRepositories.length === 1
										? this.sb.set(!!Ce)
										: this.sb.reset(),
										!(!ge && !be && !Ce) && this.refresh(ue);
								}),
							),
								fe.add(
									(0, a.autorun)((me) => {
										if (
											!ue.provider.historyProvider
												.read(me)
												?.currentHistoryItemGroupRemoteRevision.read(me)
										)
											return;
										if (this.b.scrollTop === 0) {
											this.refresh(ue);
											return;
										}
										const be = (0, c.localize)(9080, null);
										this.rc(this.sc() ? ue : void 0, be);
									}),
								),
								this.n.set(ue, fe);
						}
						for (const ue of ye)
							this.c.clearState(ue),
								this.g.delete(ue),
								this.j.delete(ue),
								this.n.deleteAndDispose(ue);
						this.tc();
					}
					mc() {
						const $e = this.b
								.getFocus()
								.filter((ue) => !!ue && (0, L.$oPc)(ue)),
							ye = this.b
								.getSelection()
								.filter((ue) => !!ue && (0, L.$oPc)(ue));
						return Array.from(new Set([...$e, ...ye]));
					}
					nc() {
						return this.b
							.getSelection()
							.filter(($e) => !!$e && (0, L.$wPc)($e));
					}
					oc($e) {
						let ye = this.j.get($e);
						return (
							ye ||
								((ye = (0, a.observableValue)(this, !1)), this.j.set($e, ye)),
							ye
						);
					}
					async pc($e) {
						const ye = this.oc($e);
						ye.get() ||
							(ye.set(!0, void 0),
							this.c.loadMore($e),
							await this.tc($e),
							ye.set(!1, void 0));
					}
					qc($e) {
						let ye = this.g.get($e);
						return (
							ye ||
								((ye = (0, a.observableValue)(this, "")), this.g.set($e, ye)),
							ye
						);
					}
					rc($e, ye) {
						$e ? this.qc($e).set(ye, void 0) : this.Ub(ye);
					}
					sc() {
						const $e = this.ec.visibleRepositories.length;
						return (
							this.Ab.getValue("scm.alwaysShowRepositories") === !0 || $e > 1
						);
					}
					tc($e) {
						return this.ab.queue(() =>
							this.L.queue(async () => {
								await this.fc.withProgress({ location: this.id }, async () => {
									$e && this.b.hasNode($e)
										? await this.b.updateChildren($e, void 0, void 0, {})
										: await this.b.updateChildren(void 0, void 0, void 0, {});
								});
							}),
						);
					}
					dispose() {
						this.t.dispose(), this.n.dispose(), super.dispose();
					}
				};
				(e.$iQc = ae),
					(e.$iQc = ae =
						Ne(
							[
								j(1, z.$ek),
								j(2, D.$d7),
								j(3, G.$8N),
								j(4, n.$gj),
								j(5, p.$Xxb),
								j(6, b.$uZ),
								j(7, f.$Li),
								j(8, T.$K1),
								j(9, g.$6j),
								j(10, y.$7rb),
								j(11, S.$iP),
								j(12, $.$km),
								j(13, o.$Uyb),
							],
							ae,
						));
			},
		),
		
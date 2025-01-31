import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/lifecycle.js';
import '../../../browser/parts/views/viewPane.js';
import '../../../../base/browser/dom.js';
import '../common/scm.js';
import '../../../browser/labels.js';
import '../../../../base/browser/ui/countBadge/countBadge.js';
import '../../../services/editor/common/editorService.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../base/common/actions.js';
import '../../../../base/browser/ui/actionbar/actionbar.js';
import '../../../../platform/theme/common/themeService.js';
import './util.js';
import '../../../../platform/list/browser/listService.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../base/common/async.js';
import '../../../../base/common/resourceTree.js';
import '../../../../base/common/iterator.js';
import '../../../../base/common/uri.js';
import '../../../../platform/files/common/files.js';
import '../../../../base/common/comparers.js';
import '../../../../base/common/filters.js';
import '../../../common/views.js';
import '../../../../nls.js';
import '../../../../platform/storage/common/storage.js';
import '../../../common/editor.js';
import '../../../../editor/browser/widget/codeEditor/codeEditorWidget.js';
import '../../codeEditor/browser/simpleEditorOptions.js';
import '../../../../editor/common/services/model.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../codeEditor/browser/menuPreventer.js';
import '../../codeEditor/browser/selectionClipboard.js';
import '../../codeEditor/browser/dictation/editorDictation.js';
import '../../../../editor/contrib/contextmenu/browser/contextmenu.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/strings.js';
import '../../../../editor/contrib/suggest/browser/suggestController.js';
import '../../../../editor/contrib/snippet/browser/snippetController2.js';
import '../../../../platform/instantiation/common/serviceCollection.js';
import '../../../../editor/contrib/colorPicker/browser/colorDetector.js';
import '../../../../editor/contrib/links/browser/links.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/label/common/label.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/browser/fonts.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/themables.js';
import '../../../../base/browser/ui/contextview/contextview.js';
import './scmRepositoryRenderer.js';
import '../../../../platform/theme/common/theme.js';
import '../../../browser/parts/editor/editorCommands.js';
import '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../editor/browser/widget/markdownRenderer/browser/markdownRenderer.js';
import '../../../../base/browser/ui/button/button.js';
import '../../../../platform/notification/common/notification.js';
import './scmViewService.js';
import '../../../../editor/contrib/dnd/browser/dnd.js';
import '../../../../editor/contrib/dropOrPasteInto/browser/copyPasteController.js';
import '../../../../editor/contrib/dropOrPasteInto/browser/dropIntoEditorController.js';
import '../../../../editor/contrib/message/browser/messageController.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import '../../../../editor/contrib/inlineCompletions/browser/controller/inlineCompletionsController.js';
import '../../../../editor/contrib/codeAction/browser/codeActionController.js';
import '../../../../base/common/network.js';
import '../../../browser/dnd.js';
import '../../../../platform/dnd/browser/dnd.js';
import '../../../../editor/contrib/format/browser/formatActions.js';
import '../../../../editor/common/config/editorOptions.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../editor/common/core/editOperation.js';
import '../../../../base/common/iconLabels.js';
import '../../../../base/browser/ui/iconLabel/iconLabel.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/actions/browser/toolbar.js';
import '../../../../base/common/cancellation.js';
import '../../../../platform/actions/browser/dropdownWithPrimaryActionViewItem.js';
import '../../../../base/common/numbers.js';
import '../../../../base/common/htmlContent.js';
import '../../../../platform/hover/browser/hover.js';
import '../../multiDiffEditor/browser/scmMultiDiffSourceResolver.js';
import '../../../../editor/contrib/hover/browser/contentHoverController2.js';
import '../../../../editor/contrib/hover/browser/marginHoverController.js';
import '../../../../base/common/observable.js';
import '../../../../base/browser/ui/hover/hoverDelegateFactory.js';
import './scmHistory.js';
import '../../../../editor/contrib/placeholderText/browser/placeholderTextContribution.js';
import '../../../../base/browser/ui/hover/hoverWidget.js';
import '../../../services/layout/browser/layoutService.js';
import '../../../../base/common/date.js';
import '../../../../platform/observable/common/platformObservableUtils.js';
import '../../../../css!vs/workbench/contrib/scm/browser/media/scm.js';
define(
			de[1947],
			he([
				1, 0, 6, 19, 3, 146, 7, 258, 233, 495, 18, 5, 49, 8, 31, 39, 11, 50,
				105, 35, 614, 93, 10, 15, 1171, 103, 9, 22, 535, 132, 60, 4, 21, 44,
				206, 521, 67, 46, 394, 504, 1259, 375, 12, 37, 328, 254, 128, 785, 963,
				41, 32, 73, 27, 661, 14, 26, 276, 1257, 212, 247, 92, 251, 183, 40,
				1810, 1687, 609, 962, 440, 106, 501, 500, 23, 362, 347, 1649, 38, 68,
				188, 274, 325, 51, 173, 33, 607, 201, 94, 72, 1801, 448, 603, 77, 95,
				1747, 1185, 160, 96, 275, 326, 652,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*event*/,
				i /*resources*/,
				w /*lifecycle*/,
				E /*viewPane*/,
				C /*dom*/,
				d /*scm*/,
				m /*labels*/,
				r /*countBadge*/,
				u /*editorService*/,
				a /*instantiation*/,
				h /*contextView*/,
				c /*contextkey*/,
				n /*commands*/,
				g /*keybinding*/,
				p /*actions*/,
				o /*actions*/,
				f /*actionbar*/,
				b /*themeService*/,
				s /*util*/,
				l /*listService*/,
				y /*configuration*/,
				$ /*async*/,
				v /*resourceTree*/,
				S /*iterator*/,
				I /*uri*/,
				T /*files*/,
				P /*comparers*/,
				k /*filters*/,
				L /*views*/,
				D /*nls*/,
				M /*storage*/,
				N /*editor*/,
				A /*codeEditorWidget*/,
				R /*simpleEditorOptions*/,
				O /*model*/,
				B /*editorExtensions*/,
				U /*menuPreventer*/,
				z /*selectionClipboard*/,
				F /*editorDictation*/,
				x /*contextmenu*/,
				H /*platform*/,
				q /*strings*/,
				V /*suggestController*/,
				G /*snippetController2*/,
				K /*serviceCollection*/,
				J /*colorDetector*/,
				W /*links*/,
				X /*opener*/,
				Y /*telemetry*/,
				ie /*label*/,
				ne /*keyCodes*/,
				ee /*fonts*/,
				_ /*codicons*/,
				te /*themables*/,
				Q /*contextview*/,
				Z /*scmRepositoryRenderer*/,
				se /*theme*/,
				re /*editorCommands*/,
				le /*menuEntryActionViewItem*/,
				oe /*markdownRenderer*/,
				ae /*button*/,
				pe /*notification*/,
				$e /*scmViewService*/,
				ye /*dnd*/,
				ue /*copyPasteController*/,
				fe /*dropIntoEditorController*/,
				me /*messageController*/,
				ve /*defaultStyles*/,
				ge /*inlineCompletionsController*/,
				be /*codeActionController*/,
				Ce /*network*/,
				Le /*dnd*/,
				Fe /*dnd*/,
				Oe /*formatActions*/,
				xe /*editorOptions*/,
				He /*uriIdentity*/,
				Ke /*editOperation*/,
				Je /*iconLabels*/,
				Te /*iconLabel*/,
				Ee /*colorRegistry*/,
				Ie /*toolbar*/,
				Be /*cancellation*/,
				Se /*dropdownWithPrimaryActionViewItem*/,
				ke /*numbers*/,
				Ue /*htmlContent*/,
				qe /*hover*/,
				Ae /*scmMultiDiffSourceResolver*/,
				Me /*contentHoverController2*/,
				De /*marginHoverController*/,
				Re /*observable*/,
				je /*hoverDelegateFactory*/,
				Ve /*scmHistory*/,
				Ze /*placeholderTextContribution*/,
				et /*hoverWidget*/,
				rt /*layoutService*/,
				ft /*date*/,
				bt /*platformObservableUtils*/,
) {
				"use strict";
				var nt, lt, ct, gt, ht, Rt, Nt, jt, ti, kt;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$cQc =
						e.$bQc =
						e.$aQc =
						e.$_Pc =
						e.$$Pc =
						e.$0Pc =
						e.$9Pc =
							void 0),
					(H = mt(H));
				const hi = (0, Ee.$wP)(
						"scm.historyItemAdditionsForeground",
						"gitDecoration.addedResourceForeground",
						(0, D.localize)(9082, null),
					),
					Kt = (0, Ee.$wP)(
						"scm.historyItemDeletionsForeground",
						"gitDecoration.deletedResourceForeground",
						(0, D.localize)(9083, null),
					);
				(0, Ee.$wP)(
					"scm.historyItemStatisticsBorder",
					(0, Ee.$BP)(Ee.$IP, 0.2),
					(0, D.localize)(9084, null),
				),
					(0, Ee.$wP)(
						"scm.historyItemSelectedStatisticsBorder",
						(0, Ee.$BP)(Ee.$FS, 0.2),
						(0, D.localize)(9085, null),
					);
				function di(Ti, wt) {
					if (!wt) return [void 0, void 0];
					if (!wt.label) return [(0, k.$3k)(wt), void 0];
					const We = (0, i.$kh)(Ti),
						_e = wt.label,
						Si = _e.length - We.length,
						gi = (0, k.$3k)(wt.score);
					if (_e === We) return [gi, void 0];
					const ki = [],
						Pi = [];
					for (const Hi of gi)
						Hi.start > Si
							? ki.push({ start: Hi.start - Si, end: Hi.end - Si })
							: Hi.end < Si
								? Pi.push(Hi)
								: (ki.push({ start: 0, end: Hi.end - Si }),
									Pi.push({ start: Hi.start, end: Si }));
					return [ki, Pi];
				}
				let Ye = class {
					static {
						nt = this;
					}
					static {
						this.DEFAULT_HEIGHT = 30;
					}
					static {
						this.TEMPLATE_ID = "actionButton";
					}
					get templateId() {
						return nt.TEMPLATE_ID;
					}
					constructor(wt, We, _e) {
						(this.c = wt), (this.d = We), (this.f = _e), (this.b = new Map());
					}
					renderTemplate(wt) {
						wt.parentElement.parentElement
							.querySelector(".monaco-tl-twistie")
							.classList.add("force-no-twistie"),
							wt.parentElement.parentElement.classList.add(
								"cursor-default",
								"force-no-hover",
							);
						const We = (0, C.$fhb)(wt, (0, C.$)(".button-container")),
							_e = new fi(We, this.d, this.c, this.f);
						return {
							actionButton: _e,
							disposable: w.$1c.None,
							templateDisposable: _e,
						};
					}
					renderElement(wt, We, _e, Si) {
						_e.disposable.dispose();
						const gi = new w.$Zc(),
							ki = wt.element;
						_e.actionButton.setButton(wt.element.button),
							this.b.set(ki, _e.actionButton),
							gi.add({ dispose: () => this.b.delete(ki) }),
							(_e.disposable = gi);
					}
					renderCompressedElements() {
						throw new Error("Should never happen since node is incompressible");
					}
					focusActionButton(wt) {
						this.b.get(wt)?.focus();
					}
					disposeElement(wt, We, _e) {
						_e.disposable.dispose();
					}
					disposeTemplate(wt) {
						wt.disposable.dispose(), wt.templateDisposable.dispose();
					}
				};
				(e.$9Pc = Ye),
					(e.$9Pc =
						Ye =
						nt =
							Ne([j(0, n.$ek), j(1, h.$Xxb), j(2, pe.$4N)], Ye));
				class ze {
					constructor(wt) {
						this.b = wt;
					}
					getDragURI(wt) {
						return (0, s.$sPc)(wt) ? wt.sourceUri.toString() : null;
					}
					onDragStart(wt, We) {
						const _e = ze.c(wt);
						if (We.dataTransfer && _e?.length) {
							this.b.invokeFunction((gi) => (0, Le.$PSb)(gi, _e, We));
							const Si = _e
								.filter((gi) => gi.scheme === Ce.Schemas.file)
								.map((gi) => gi.fsPath);
							Si.length &&
								We.dataTransfer.setData(Fe.$hzb.FILES, JSON.stringify(Si));
						}
					}
					getDragLabel(wt, We) {
						if (wt.length === 1) {
							const _e = wt[0];
							if ((0, s.$sPc)(_e)) return (0, i.$kh)(_e.sourceUri);
						}
						return String(wt.length);
					}
					onDragOver(wt, We, _e, Si, gi) {
						return !0;
					}
					drop(wt, We, _e, Si, gi) {}
					static c(wt) {
						const We = [];
						for (const _e of [...(wt.context ?? []), ...wt.elements])
							(0, s.$sPc)(_e) && We.push(_e.sourceUri);
						return We;
					}
					dispose() {}
				}
				let Xe = class {
					static {
						lt = this;
					}
					static {
						this.DEFAULT_HEIGHT = 26;
					}
					static {
						this.TEMPLATE_ID = "input";
					}
					get templateId() {
						return lt.TEMPLATE_ID;
					}
					constructor(wt, We, _e, Si) {
						(this.f = wt),
							(this.i = We),
							(this.k = _e),
							(this.m = Si),
							(this.b = new Map()),
							(this.c = new WeakMap()),
							(this.d = new WeakMap());
					}
					renderTemplate(wt) {
						wt.parentElement.parentElement
							.querySelector(".monaco-tl-twistie")
							.classList.add("force-no-twistie"),
							wt.parentElement.parentElement.classList.add("force-no-hover");
						const We = new w.$Zc(),
							_e = (0, C.$fhb)(wt, (0, C.$)(".scm-input")),
							Si = this.m.createInstance(Yt, _e, this.i);
						return (
							We.add(Si),
							{
								inputWidget: Si,
								inputWidgetHeight: lt.DEFAULT_HEIGHT,
								elementDisposables: new w.$Zc(),
								templateDisposable: We,
							}
						);
					}
					renderElement(wt, We, _e) {
						const Si = wt.element;
						(_e.inputWidget.input = Si),
							this.b.set(Si, _e.inputWidget),
							_e.elementDisposables.add({ dispose: () => this.b.delete(Si) });
						const gi = this.d.get(Si);
						gi && (_e.inputWidget.selections = gi),
							_e.elementDisposables.add(
								(0, w.$Yc)(() => {
									const Ji = _e.inputWidget.selections;
									Ji && this.d.set(Si, Ji);
								}),
							),
							(_e.inputWidgetHeight = lt.DEFAULT_HEIGHT);
						const ki = () => {
								const Ji = _e.inputWidget.getContentHeight();
								this.c.set(Si, Ji),
									_e.inputWidgetHeight !== Ji &&
										(this.k(Si, Ji + 10),
										(_e.inputWidgetHeight = Ji),
										_e.inputWidget.layout());
							},
							Pi = () => {
								_e.elementDisposables.add(
									_e.inputWidget.onDidChangeContentHeight(ki),
								),
									ki();
							};
						(0, $.$Oh)(Pi, 0, _e.elementDisposables);
						const Hi = () => _e.inputWidget.layout();
						_e.elementDisposables.add(this.f.onDidChange(Hi)), Hi();
					}
					renderCompressedElements() {
						throw new Error("Should never happen since node is incompressible");
					}
					disposeElement(wt, We, _e) {
						_e.elementDisposables.clear();
					}
					disposeTemplate(wt) {
						wt.templateDisposable.dispose();
					}
					getHeight(wt) {
						return (this.c.get(wt) ?? lt.DEFAULT_HEIGHT) + 10;
					}
					getRenderedInputWidget(wt) {
						return this.b.get(wt);
					}
					getFocusedInput() {
						for (const [wt, We] of this.b) if (We.hasFocus()) return wt;
					}
					clearValidation() {
						for (const [, wt] of this.b) wt.clearValidation();
					}
				};
				Xe = lt = Ne([j(3, a.$Li)], Xe);
				let It = class {
					static {
						ct = this;
					}
					static {
						this.TEMPLATE_ID = "resource group";
					}
					get templateId() {
						return ct.TEMPLATE_ID;
					}
					constructor(wt, We) {
						(this.b = wt), (this.c = We);
					}
					renderTemplate(wt) {
						wt.parentElement.parentElement
							.querySelector(".monaco-tl-twistie")
							.classList.add("force-twistie");
						const We = (0, C.$fhb)(wt, (0, C.$)(".resource-group")),
							_e = (0, C.$fhb)(We, (0, C.$)(".name")),
							Si = (0, C.$fhb)(We, (0, C.$)(".actions")),
							gi = new f.$eib(Si, { actionViewItemProvider: this.b }),
							ki = (0, C.$fhb)(We, (0, C.$)(".count")),
							Pi = new r.$Hob(ki, {}, ve.$zyb),
							Hi = (0, w.$Xc)(gi);
						return {
							name: _e,
							count: Pi,
							actionBar: gi,
							elementDisposables: new w.$Zc(),
							disposables: Hi,
						};
					}
					renderElement(wt, We, _e) {
						const Si = wt.element;
						(_e.name.textContent = Si.label),
							_e.actionBar.clear(),
							(_e.actionBar.context = Si),
							_e.count.setCount(Si.resources.length);
						const gi = this.c.menus.getRepositoryMenus(Si.provider);
						_e.elementDisposables.add(
							(0, s.$DPc)(gi.getResourceGroupMenu(Si), _e.actionBar),
						);
					}
					renderCompressedElements(wt, We, _e, Si) {
						throw new Error("Should never happen since node is incompressible");
					}
					disposeElement(wt, We, _e) {
						_e.elementDisposables.clear();
					}
					disposeTemplate(wt) {
						wt.elementDisposables.dispose(), wt.disposables.dispose();
					}
				};
				It = ct = Ne([j(1, d.$d7)], It);
				class Lt extends o.$sj {
					constructor(wt) {
						super(), (this.b = wt);
					}
					async q(wt, We) {
						if (!(wt instanceof p.$2X)) return super.q(wt, We);
						const _e = this.b(),
							ki = (_e.some((Pi) => Pi === We) ? _e : [We])
								.map((Pi) =>
									v.$06.isResourceNode(Pi) ? v.$06.collect(Pi) : [Pi],
								)
								.flat();
						await wt.run(...ki);
					}
				}
				let xt = class {
					static {
						gt = this;
					}
					static {
						this.TEMPLATE_ID = "resource";
					}
					get templateId() {
						return gt.TEMPLATE_ID;
					}
					constructor(wt, We, _e, Si, gi, ki, Pi) {
						(this.d = wt),
							(this.f = We),
							(this.i = _e),
							(this.k = Si),
							(this.m = gi),
							(this.n = ki),
							(this.o = Pi),
							(this.b = new w.$Zc()),
							(this.c = new Map()),
							Pi.onDidColorThemeChange(this.q, this, this.b);
					}
					renderTemplate(wt) {
						const We = (0, C.$fhb)(wt, (0, C.$)(".resource")),
							_e = (0, C.$fhb)(We, (0, C.$)(".name")),
							Si = this.f.create(_e, {
								supportDescriptionHighlights: !0,
								supportHighlights: !0,
							}),
							gi = (0, C.$fhb)(Si.element, (0, C.$)(".actions")),
							ki = new f.$eib(gi, {
								actionViewItemProvider: this.i,
								actionRunner: this.k,
							}),
							Pi = (0, C.$fhb)(We, (0, C.$)(".decoration-icon")),
							Hi = new w.$2c(),
							Ji = (0, w.$Xc)(ki, Si, Hi);
						return {
							element: We,
							name: _e,
							fileLabel: Si,
							decorationIcon: Pi,
							actionBar: ki,
							actionBarMenu: void 0,
							actionBarMenuListener: Hi,
							elementDisposables: new w.$Zc(),
							disposables: Ji,
						};
					}
					renderElement(wt, We, _e) {
						const Si = wt.element,
							gi = v.$06.isResourceNode(Si) ? Si.element : Si,
							ki = v.$06.isResourceNode(Si) ? Si.uri : Si.sourceUri,
							Pi = v.$06.isResourceNode(Si)
								? T.FileKind.FOLDER
								: T.FileKind.FILE,
							Hi = (!v.$06.isResourceNode(Si) && Si.decorations.tooltip) || "",
							Ji = this.d() === at.Tree;
						let cn, un, yn;
						if (v.$06.isResourceNode(Si))
							if (Si.element) {
								const _i = this.n.menus.getRepositoryMenus(
									Si.element.resourceGroup.provider,
								);
								this.p(_e, Si, _i.getResourceMenu(Si.element)),
									_e.element.classList.toggle(
										"faded",
										Si.element.decorations.faded,
									),
									(yn = Si.element.decorations.strikeThrough);
							} else {
								const _i = this.n.menus.getRepositoryMenus(Si.context.provider);
								this.p(_e, Si, _i.getResourceFolderMenu(Si.context)),
									(cn = (0, k.$3k)(wt.filterData)),
									_e.element.classList.remove("faded");
							}
						else {
							const _i = this.n.menus.getRepositoryMenus(
								Si.resourceGroup.provider,
							);
							this.p(_e, Si, _i.getResourceMenu(Si)),
								([cn, un] = di(ki, wt.filterData)),
								_e.element.classList.toggle("faded", Si.decorations.faded),
								(yn = Si.decorations.strikeThrough);
						}
						const Rn = {
							tooltip: Hi,
							uri: ki,
							fileLabelOptions: {
								hidePath: Ji,
								fileKind: Pi,
								matches: cn,
								descriptionMatches: un,
								strikethrough: yn,
							},
							iconResource: gi,
						};
						this.t(_e, Rn),
							this.c.set(_e, Rn),
							_e.elementDisposables.add((0, w.$Yc)(() => this.c.delete(_e))),
							_e.element.setAttribute("data-tooltip", Hi);
					}
					disposeElement(wt, We, _e) {
						_e.elementDisposables.clear();
					}
					renderCompressedElements(wt, We, _e, Si) {
						const gi = wt.element,
							ki = gi.elements[gi.elements.length - 1],
							Pi = gi.elements.map((un) => un.name),
							Hi = T.FileKind.FOLDER,
							Ji = (0, k.$3k)(wt.filterData);
						_e.fileLabel.setResource(
							{ resource: ki.uri, name: Pi },
							{
								fileDecorations: { colors: !1, badges: !0 },
								fileKind: Hi,
								matches: Ji,
								separator: this.m.getSeparator(ki.uri.scheme),
							},
						);
						const cn = this.n.menus.getRepositoryMenus(ki.context.provider);
						this.p(_e, ki, cn.getResourceFolderMenu(ki.context)),
							_e.name.classList.remove("strike-through"),
							_e.element.classList.remove("faded"),
							(_e.decorationIcon.style.display = "none"),
							(_e.decorationIcon.style.backgroundImage = ""),
							_e.element.setAttribute("data-tooltip", "");
					}
					disposeCompressedElements(wt, We, _e, Si) {
						_e.elementDisposables.clear();
					}
					disposeTemplate(wt) {
						wt.elementDisposables.dispose(), wt.disposables.dispose();
					}
					p(wt, We, _e) {
						(!wt.actionBarMenu || wt.actionBarMenu !== _e) &&
							(wt.actionBar.clear(),
							(wt.actionBarMenu = _e),
							(wt.actionBarMenuListener.value = (0, s.$DPc)(_e, wt.actionBar))),
							(wt.actionBar.context = We);
					}
					q() {
						for (const [wt, We] of this.c) this.t(wt, We);
					}
					t(wt, We) {
						const _e = this.o.getColorTheme(),
							Si =
								_e.type === se.ColorScheme.LIGHT
									? We.iconResource?.decorations.icon
									: We.iconResource?.decorations.iconDark;
						wt.fileLabel.setFile(We.uri, {
							...We.fileLabelOptions,
							fileDecorations: { colors: !1, badges: !Si },
						}),
							Si
								? (te.ThemeIcon.isThemeIcon(Si)
										? ((wt.decorationIcon.className = `decoration-icon ${te.ThemeIcon.asClassName(Si)}`),
											Si.color &&
												(wt.decorationIcon.style.color =
													_e.getColor(Si.color.id)?.toString() ?? ""),
											(wt.decorationIcon.style.display = ""),
											(wt.decorationIcon.style.backgroundImage = ""))
										: ((wt.decorationIcon.className = "decoration-icon"),
											(wt.decorationIcon.style.color = ""),
											(wt.decorationIcon.style.display = ""),
											(wt.decorationIcon.style.backgroundImage = (0, C.$vhb)(
												Si,
											))),
									(wt.decorationIcon.title = We.tooltip))
								: ((wt.decorationIcon.className = "decoration-icon"),
									(wt.decorationIcon.style.color = ""),
									(wt.decorationIcon.style.display = "none"),
									(wt.decorationIcon.style.backgroundImage = ""),
									(wt.decorationIcon.title = ""));
					}
					dispose() {
						this.b.dispose();
					}
				};
				xt = gt = Ne([j(4, ie.$3N), j(5, d.$d7), j(6, b.$iP)], xt);
				class Vt extends o.$sj {
					q(wt, We) {
						return wt instanceof p.$2X
							? wt.run(We.repository.provider, We.id)
							: super.q(wt, We);
					}
				}
				let Bt = class {
					static {
						ht = this;
					}
					static {
						this.TEMPLATE_ID = "history-item-group";
					}
					get templateId() {
						return ht.TEMPLATE_ID;
					}
					constructor(wt, We, _e, Si, gi, ki, Pi, Hi) {
						(this.actionRunner = wt),
							(this.b = We),
							(this.c = _e),
							(this.d = Si),
							(this.f = gi),
							(this.i = ki),
							(this.k = Pi),
							(this.m = Hi);
					}
					renderTemplate(wt) {
						wt.parentElement.parentElement
							.querySelector(".monaco-tl-twistie")
							.classList.add("force-twistie");
						const We = (0, C.$fhb)(wt, (0, C.$)(".history-item-group")),
							_e = new Te.$Xob(We, { supportIcons: !0 }),
							Si = (0, C.$ghb)(_e.element, (0, C.$)(".icon-container")),
							gi = new w.$Zc(),
							ki = new Ie.$Syb(
								(0, C.$fhb)(We, (0, C.$)(".actions")),
								{
									actionRunner: this.actionRunner,
									menuOptions: { shouldForwardArgs: !0 },
								},
								this.i,
								this.b,
								this.c,
								this.d,
								this.f,
								this.m,
							);
						gi.add(ki);
						const Pi = (0, C.$fhb)(We, (0, C.$)(".count")),
							Hi = new r.$Hob(Pi, {}, ve.$zyb);
						return {
							iconContainer: Si,
							label: _e,
							toolBar: ki,
							count: Hi,
							elementDisposables: new w.$Zc(),
							templateDisposables: gi,
						};
					}
					renderElement(wt, We, _e, Si) {
						const gi = wt.element;
						(_e.iconContainer.className = "icon-container"),
							gi.icon &&
								te.ThemeIcon.isThemeIcon(gi.icon) &&
								_e.iconContainer.classList.add(
									...te.ThemeIcon.asClassNameArray(gi.icon),
								),
							_e.label.setLabel(gi.label, gi.description, {
								title: gi.ariaLabel,
							}),
							_e.count.setCount(gi.count ?? 0);
						const Pi = this.k.menus.getRepositoryMenus(
							gi.repository.provider,
						).historyProviderMenu;
						if (Pi) {
							const Hi = Pi.getHistoryItemGroupMenu(gi),
								Ji =
									gi.direction === "incoming"
										? p.$XX.SCMIncomingChanges
										: p.$XX.SCMOutgoingChanges;
							_e.elementDisposables.add(
								(0, s.$CPc)(Hi, (cn, un) => {
									_e.toolBar.setActions(cn, un, [Ji]);
								}),
							),
								(_e.toolBar.context = gi);
						} else _e.toolBar.setActions([], []), (_e.toolBar.context = void 0);
					}
					renderCompressedElements(wt, We, _e, Si) {
						throw new Error("Should never happen since node is incompressible");
					}
					disposeElement(wt, We, _e, Si) {
						_e.elementDisposables.clear();
					}
					disposeTemplate(wt) {
						wt.elementDisposables.dispose(), wt.templateDisposables.dispose();
					}
				};
				Bt = ht = Ne(
					[
						j(1, c.$6j),
						j(2, h.$Xxb),
						j(3, g.$uZ),
						j(4, n.$ek),
						j(5, p.$YX),
						j(6, d.$d7),
						j(7, Y.$km),
					],
					Bt,
				);
				class Gt extends o.$sj {
					async q(wt, We) {
						if (!(wt instanceof p.$2X)) return super.q(wt, We);
						const _e = [];
						_e.push(We.historyItemGroup.repository.provider),
							_e.push({
								id: We.id,
								parentIds: We.parentIds,
								message: We.message,
								author: We.author,
								icon: We.icon,
								timestamp: We.timestamp,
								statistics: We.statistics,
							}),
							await wt.run(..._e);
					}
				}
				class Mt extends o.$sj {
					constructor(wt) {
						super(), (this.b = wt);
					}
					async q(wt, We) {
						if (!(wt instanceof p.$2X)) return super.q(wt, We);
						const _e = [];
						_e.push(We.repository.provider);
						const Si = this.b();
						Si.some((ki) => ki === We) && Si.length > 1
							? _e.push(
									...Si.map((ki) => ({
										id: ki.historyItemViewModel.historyItem.id,
										parentIds: ki.historyItemViewModel.historyItem.parentIds,
										message: ki.historyItemViewModel.historyItem.message,
										author: ki.historyItemViewModel.historyItem.author,
										icon: ki.historyItemViewModel.historyItem.icon,
										timestamp: ki.historyItemViewModel.historyItem.timestamp,
										statistics: ki.historyItemViewModel.historyItem.statistics,
									})),
								)
							: _e.push({
									id: We.historyItemViewModel.historyItem.id,
									parentIds: We.historyItemViewModel.historyItem.parentIds,
									message: We.historyItemViewModel.historyItem.message,
									author: We.historyItemViewModel.historyItem.author,
									icon: We.historyItemViewModel.historyItem.icon,
									timestamp: We.historyItemViewModel.historyItem.timestamp,
									statistics: We.historyItemViewModel.historyItem.statistics,
								}),
							await wt.run(..._e);
					}
				}
				let Ut = class extends qe.$Vyb {
					constructor(wt, We, _e, Si) {
						super("element", !0, () => this.C(), _e, Si),
							(this.b = wt),
							(this.z = We);
					}
					C() {
						let wt;
						return (
							this.b === L.ViewContainerLocation.Sidebar
								? (wt =
										this.z === rt.Position.LEFT
											? et.HoverPosition.RIGHT
											: et.HoverPosition.LEFT)
								: this.b === L.ViewContainerLocation.AuxiliaryBar
									? (wt =
											this.z === rt.Position.LEFT
												? et.HoverPosition.LEFT
												: et.HoverPosition.RIGHT)
									: (wt = et.HoverPosition.RIGHT),
							{
								additionalClasses: ["history-item-hover"],
								position: { hoverPosition: wt, forcePosition: !0 },
							}
						);
					}
				};
				Ut = Ne([j(2, y.$gj), j(3, qe.$Uyb)], Ut);
				let ei = class {
					static {
						Rt = this;
					}
					static {
						this.TEMPLATE_ID = "history-item";
					}
					get templateId() {
						return Rt.TEMPLATE_ID;
					}
					constructor(wt, We, _e, Si) {
						(this.b = wt), (this.c = We), (this.d = _e), (this.f = Si);
					}
					renderTemplate(wt) {
						wt.parentElement.parentElement
							.querySelector(".monaco-tl-twistie")
							.classList.add("force-twistie");
						const We = (0, C.$fhb)(wt, (0, C.$)(".history-item")),
							_e = new Te.$Xob(We, {
								supportIcons: !0,
								supportHighlights: !0,
								supportDescriptionHighlights: !0,
							}),
							Si = (0, C.$ghb)(_e.element, (0, C.$)(".icon-container")),
							gi = new w.$Zc(),
							ki = (0, C.$fhb)(We, (0, C.$)(".actions")),
							Pi = new f.$eib(ki, {
								actionRunner: this.b,
								actionViewItemProvider: this.c,
							});
						gi.add(Pi);
						const Hi = (0, C.$fhb)(We, (0, C.$)(".stats-container")),
							Ji = (0, C.$fhb)(Hi, (0, C.$)(".files-label")),
							cn = (0, C.$fhb)(Hi, (0, C.$)(".insertions-label")),
							un = (0, C.$fhb)(Hi, (0, C.$)(".deletions-label")),
							yn = this.d.setupManagedHover((0, je.$cib)("element"), Hi, "");
						return (
							gi.add(yn),
							{
								iconContainer: Si,
								label: _e,
								actionBar: Pi,
								statsContainer: Hi,
								statsCustomHover: yn,
								filesLabel: Ji,
								insertionsLabel: cn,
								deletionsLabel: un,
								elementDisposables: new w.$Zc(),
								disposables: gi,
							}
						);
					}
					renderElement(wt, We, _e, Si) {
						const gi = wt.element;
						(_e.iconContainer.className = "icon-container"),
							gi.icon &&
								te.ThemeIcon.isThemeIcon(gi.icon) &&
								_e.iconContainer.classList.add(
									...te.ThemeIcon.asClassNameArray(gi.icon),
								);
						const ki = this.i(gi),
							[Pi, Hi] = this.k(gi, wt.filterData);
						_e.label.setLabel(gi.message, gi.author, {
							matches: Pi,
							descriptionMatches: Hi,
							title: ki,
						}),
							_e.actionBar.clear(),
							(_e.actionBar.context = gi);
						const Ji = this.f.menus.getRepositoryMenus(
							gi.historyItemGroup.repository.provider,
						);
						if (Ji.historyProviderMenu) {
							const cn = Ji.historyProviderMenu.getHistoryItemMenu(gi);
							_e.elementDisposables.add((0, s.$DPc)(cn, _e.actionBar));
						}
						this.m(wt, We, _e, Si);
					}
					renderCompressedElements(wt, We, _e, Si) {
						throw new Error("Should never happen since node is incompressible");
					}
					i(wt) {
						const We = new Ue.$cl("", { isTrusted: !0, supportThemeIcons: !0 });
						if (
							(wt.author &&
								We.appendMarkdown(`$(account) **${wt.author}**

`),
							wt.timestamp)
						) {
							const _e = new Intl.DateTimeFormat(H.$z, {
								year: "numeric",
								month: "long",
								day: "numeric",
								hour: "numeric",
								minute: "numeric",
							});
							We.appendMarkdown(`$(history) ${_e.format(wt.timestamp)}

`);
						}
						return (
							We.appendMarkdown(wt.message),
							{ markdown: We, markdownNotSupportedFallback: wt.message }
						);
					}
					k(wt, We) {
						return We
							? [
									wt.message === We.label ? (0, k.$3k)(We.score) : void 0,
									wt.author === We.label ? (0, k.$3k)(We.score) : void 0,
								]
							: [void 0, void 0];
					}
					m(wt, We, _e, Si) {
						const gi = wt.element;
						if (gi.statistics) {
							const Pi = [
								gi.statistics.files === 1
									? (0, D.localize)(9086, null, gi.statistics.files)
									: (0, D.localize)(9087, null, gi.statistics.files),
								gi.statistics.insertions === 1
									? (0, D.localize)(9088, null, gi.statistics.insertions, "(+)")
									: gi.statistics.insertions > 1
										? (0, D.localize)(
												9089,
												null,
												gi.statistics.insertions,
												"(+)",
											)
										: "",
								gi.statistics.deletions === 1
									? (0, D.localize)(9090, null, gi.statistics.deletions, "(-)")
									: gi.statistics.deletions > 1
										? (0, D.localize)(
												9091,
												null,
												gi.statistics.deletions,
												"(-)",
											)
										: "",
							]
								.filter((Hi) => Hi !== "")
								.join(", ");
							_e.statsContainer.setAttribute("aria-label", Pi),
								_e.statsCustomHover.update(Pi),
								(_e.filesLabel.textContent = gi.statistics.files.toString()),
								(_e.insertionsLabel.textContent =
									gi.statistics.insertions > 0
										? `+${gi.statistics.insertions}`
										: ""),
								_e.insertionsLabel.classList.toggle(
									"hidden",
									gi.statistics.insertions === 0,
								),
								(_e.deletionsLabel.textContent =
									gi.statistics.deletions > 0
										? `-${gi.statistics.deletions}`
										: ""),
								_e.deletionsLabel.classList.toggle(
									"hidden",
									gi.statistics.deletions === 0,
								);
						}
						_e.statsContainer.classList.toggle(
							"hidden",
							gi.statistics === void 0,
						);
					}
					disposeElement(wt, We, _e, Si) {
						_e.elementDisposables.clear();
					}
					disposeTemplate(wt) {
						wt.disposables.dispose();
					}
				};
				ei = Rt = Ne([j(2, qe.$Uyb), j(3, d.$d7)], ei);
				let mi = class {
					static {
						Nt = this;
					}
					static {
						this.TEMPLATE_ID = "history-item-2";
					}
					get templateId() {
						return Nt.TEMPLATE_ID;
					}
					constructor(wt, We, _e) {
						(this.b = wt), (this.c = We), (this.d = _e);
					}
					renderTemplate(wt) {
						wt.parentElement.parentElement
							.querySelector(".monaco-tl-twistie")
							.classList.add("force-no-twistie");
						const We = (0, C.$fhb)(wt, (0, C.$)(".history-item")),
							_e = (0, C.$fhb)(We, (0, C.$)(".graph-container")),
							Si = new Te.$Xob(We, {
								supportIcons: !0,
								supportHighlights: !0,
								supportDescriptionHighlights: !0,
							}),
							gi = (0, C.$fhb)(We, (0, C.$)(".label-container"));
						return (
							We.appendChild(gi),
							{
								element: We,
								graphContainer: _e,
								label: Si,
								labelContainer: gi,
								elementDisposables: new w.$Zc(),
								disposables: new w.$Zc(),
							}
						);
					}
					renderElement(wt, We, _e, Si) {
						const gi = wt.element.historyItemViewModel,
							ki = gi.historyItem,
							Pi = this.c.setupManagedHover(
								this.b,
								_e.element,
								this.f(wt.element),
							);
						_e.elementDisposables.add(Pi),
							(_e.graphContainer.textContent = ""),
							_e.graphContainer.appendChild((0, Ve.$6Pc)(gi));
						const [Hi, Ji] = this.i(gi, wt.filterData);
						if (
							(_e.label.setLabel(ki.message, ki.author, {
								matches: Hi,
								descriptionMatches: Ji,
							}),
							(_e.labelContainer.textContent = ""),
							ki.labels)
						) {
							const cn = (0, je.$dib)();
							_e.elementDisposables.add(cn);
							for (const un of ki.labels)
								if (un.icon && te.ThemeIcon.isThemeIcon(un.icon)) {
									const yn = (0, C.$fhb)(
										_e.labelContainer,
										(0, C.$)("div.label"),
									);
									yn.classList.add(...te.ThemeIcon.asClassNameArray(un.icon));
									const Rn = this.c.setupManagedHover(cn, yn, un.title);
									_e.elementDisposables.add(Rn);
								}
						}
					}
					renderCompressedElements(wt, We, _e, Si) {
						throw new Error("Should never happen since node is incompressible");
					}
					f(wt) {
						const We = this.d.getColorTheme(),
							_e = wt.historyItemViewModel.historyItem,
							Si = wt.repository.provider.historyProvider
								.get()
								?.currentHistoryItemGroup?.get(),
							gi = new Ue.$cl("", { isTrusted: !0, supportThemeIcons: !0 });
						if (_e.author) {
							if (
								(gi.appendMarkdown(`$(account) **${_e.author}**`), _e.timestamp)
							) {
								const ki = new Intl.DateTimeFormat(H.$z, {
									year: "numeric",
									month: "long",
									day: "numeric",
									hour: "numeric",
									minute: "numeric",
								});
								gi.appendMarkdown(
									`, $(history) ${(0, ft.$dn)(_e.timestamp, !0, !0)} (${ki.format(_e.timestamp)})`,
								);
							}
							gi.appendMarkdown(`

`);
						}
						if (
							(gi.appendMarkdown(`${_e.message}

`),
							_e.statistics)
						) {
							if (
								(gi.appendMarkdown(`---

`),
								gi.appendMarkdown(
									`<span>${_e.statistics.files === 1 ? ((0, D.localize))(9092, null, _e.statistics.files) : ((0, D.localize))(9093, null, _e.statistics.files)}</span>`,
								),
								_e.statistics.insertions)
							) {
								const ki = We.getColor(hi);
								gi.appendMarkdown(
									`,&nbsp;<span style="color:${ki};">${_e.statistics.insertions === 1 ? ((0, D.localize))(9094, null, _e.statistics.insertions, "(+)") : ((0, D.localize))(9095, null, _e.statistics.insertions, "(+)")}</span>`,
								);
							}
							if (_e.statistics.deletions) {
								const ki = We.getColor(Kt);
								gi.appendMarkdown(
									`,&nbsp;<span style="color:${ki};">${_e.statistics.deletions === 1 ? ((0, D.localize))(9096, null, _e.statistics.deletions, "(-)") : ((0, D.localize))(9097, null, _e.statistics.deletions, "(-)")}</span>`,
								);
							}
						}
						if (_e.labels) {
							const ki = We.getColor(Ve.$1Pc),
								Pi = We.getColor(Ve.$2Pc),
								Hi = We.getColor(Ve.$3Pc),
								Ji = We.getColor(Ve.$4Pc);
							gi.appendMarkdown(`

---

`),
								gi.appendMarkdown(
									_e.labels
										.map((cn) => {
											const un =
													cn.title === Si?.name
														? ki
														: cn.title === Si?.remote?.name
															? Pi
															: cn.title === Si?.base?.name
																? Hi
																: void 0,
												yn = te.ThemeIcon.isThemeIcon(cn.icon)
													? cn.icon.id
													: "";
											return `<span style="color:${Ji};background-color:${un};border-radius:2px;">&nbsp;$(${yn})&nbsp;${cn.title}&nbsp;</span>`;
										})
										.join("&nbsp;&nbsp;"),
								);
						}
						return { markdown: gi, markdownNotSupportedFallback: _e.message };
					}
					i(wt, We) {
						return We
							? [
									wt.historyItem.message === We.label
										? (0, k.$3k)(We.score)
										: void 0,
									wt.historyItem.author === We.label
										? (0, k.$3k)(We.score)
										: void 0,
								]
							: [void 0, void 0];
					}
					disposeElement(wt, We, _e, Si) {
						_e.elementDisposables.clear();
					}
					disposeTemplate(wt) {
						wt.disposables.dispose();
					}
				};
				mi = Nt = Ne([j(1, qe.$Uyb), j(2, b.$iP)], mi);
				let ii = class {
					static {
						jt = this;
					}
					static {
						this.TEMPLATE_ID = "historyItemChange";
					}
					get templateId() {
						return jt.TEMPLATE_ID;
					}
					constructor(wt, We, _e) {
						(this.b = wt), (this.c = We), (this.d = _e);
					}
					renderTemplate(wt) {
						const We = (0, C.$fhb)(wt, (0, C.$)(".change")),
							_e = (0, C.$fhb)(We, (0, C.$)(".name")),
							Si = this.c.create(_e, {
								supportDescriptionHighlights: !0,
								supportHighlights: !0,
							}),
							gi = (0, C.$fhb)(We, (0, C.$)(".decoration-icon"));
						return {
							element: We,
							name: _e,
							fileLabel: Si,
							decorationIcon: gi,
							disposables: new w.$Zc(),
						};
					}
					renderElement(wt, We, _e, Si) {
						const gi = wt.element,
							ki = v.$06.isResourceNode(gi)
								? (gi.element?.uri ?? gi.uri)
								: gi.uri,
							Pi = v.$06.isResourceNode(gi)
								? T.FileKind.FOLDER
								: T.FileKind.FILE,
							Hi = this.b() === at.Tree;
						let Ji, cn;
						v.$06.isResourceNode(gi)
							? gi.element || (Ji = (0, k.$3k)(wt.filterData))
							: ([Ji, cn] = di(ki, wt.filterData)),
							_e.fileLabel.setFile(ki, {
								fileDecorations: { colors: !1, badges: !0 },
								fileKind: Pi,
								hidePath: Hi,
								matches: Ji,
								descriptionMatches: cn,
							});
					}
					renderCompressedElements(wt, We, _e, Si) {
						const gi = wt.element,
							ki = gi.elements[gi.elements.length - 1],
							Pi = gi.elements.map((Ji) => Ji.name),
							Hi = (0, k.$3k)(wt.filterData);
						_e.fileLabel.setResource(
							{ resource: ki.uri, name: Pi },
							{
								fileDecorations: { colors: !1, badges: !0 },
								fileKind: T.FileKind.FOLDER,
								matches: Hi,
								separator: this.d.getSeparator(ki.uri.scheme),
							},
						);
					}
					disposeTemplate(wt) {
						wt.disposables.dispose();
					}
				};
				ii = jt = Ne([j(2, ie.$3N)], ii);
				let Dt = class {
					static {
						ti = this;
					}
					static {
						this.TEMPLATE_ID = "separator";
					}
					get templateId() {
						return ti.TEMPLATE_ID;
					}
					constructor(wt, We, _e, Si, gi, ki, Pi) {
						(this.b = wt),
							(this.c = We),
							(this.d = _e),
							(this.f = Si),
							(this.i = gi),
							(this.k = ki),
							(this.m = Pi);
					}
					renderTemplate(wt) {
						wt.parentElement.parentElement
							.querySelector(".monaco-tl-twistie")
							.classList.add("force-no-twistie"),
							wt.parentElement.parentElement.classList.add(
								"cursor-default",
								"force-no-hover",
							);
						const We = new w.$Zc(),
							_e = (0, C.$fhb)(wt, (0, C.$)(".separator-container")),
							Si = new Te.$Xob(_e, { supportIcons: !0 });
						(0, C.$fhb)(_e, (0, C.$)(".separator")), We.add(Si);
						const gi = new Ie.$Syb(
							(0, C.$fhb)(_e, (0, C.$)(".actions")),
							void 0,
							this.k,
							this.c,
							this.d,
							this.f,
							this.i,
							this.m,
						);
						return (
							We.add(gi),
							{
								label: Si,
								toolBar: gi,
								elementDisposables: new w.$Zc(),
								templateDisposables: We,
							}
						);
					}
					renderElement(wt, We, _e, Si) {
						const gi = wt.element.repository.provider,
							Pi = gi.historyProvider.get()?.currentHistoryItemGroup.get();
						_e.label.setLabel(wt.element.label, void 0, {
							title: wt.element.ariaLabel,
						});
						const Hi = this.c.createOverlay([
								["scmHistoryItemGroupHasRemote", !!Pi?.remote],
							]),
							Ji = this.k.createMenu(p.$XX.SCMChangesSeparator, Hi);
						_e.elementDisposables.add(
							(0, s.$CPc)(Ji, (cn, un) => {
								un.splice(0, 0, ...this.b(wt.element.repository), new o.$tj()),
									_e.toolBar.setActions(cn, un, [p.$XX.SCMChangesSeparator]);
							}),
						),
							(_e.toolBar.context = gi);
					}
					renderCompressedElements(wt, We, _e, Si) {
						throw new Error("Should never happen since node is incompressible");
					}
					disposeElement(wt, We, _e, Si) {
						_e.elementDisposables.clear();
					}
					disposeTemplate(wt) {
						wt.elementDisposables.dispose(), wt.templateDisposables.dispose();
					}
				};
				Dt = ti = Ne(
					[
						j(1, c.$6j),
						j(2, h.$Xxb),
						j(3, g.$uZ),
						j(4, n.$ek),
						j(5, p.$YX),
						j(6, Y.$km),
					],
					Dt,
				);
				class Jt {
					constructor(wt) {
						this.b = wt;
					}
					getHeight(wt) {
						return (0, s.$pPc)(wt)
							? this.b.getHeight(wt)
							: (0, s.$qPc)(wt)
								? Ye.DEFAULT_HEIGHT + 10
								: 22;
					}
					getTemplateId(wt) {
						if ((0, s.$oPc)(wt)) return Z.$OPc.TEMPLATE_ID;
						if ((0, s.$pPc)(wt)) return Xe.TEMPLATE_ID;
						if ((0, s.$qPc)(wt)) return Ye.TEMPLATE_ID;
						if ((0, s.$rPc)(wt)) return It.TEMPLATE_ID;
						if ((0, s.$sPc)(wt) || (0, s.$tPc)(wt)) return xt.TEMPLATE_ID;
						if ((0, s.$uPc)(wt)) return Bt.TEMPLATE_ID;
						if ((0, s.$vPc)(wt)) return ei.TEMPLATE_ID;
						if ((0, s.$wPc)(wt)) return mi.TEMPLATE_ID;
						if ((0, s.$yPc)(wt) || (0, s.$zPc)(wt)) return ii.TEMPLATE_ID;
						if ((0, s.$APc)(wt)) return Dt.TEMPLATE_ID;
						throw new Error("Unknown element");
					}
				}
				class si {
					isIncompressible(wt) {
						return v.$06.isResourceNode(wt)
							? wt.childrenCount === 0 || !wt.parent || !wt.parent.parent
							: !0;
					}
				}
				class Zt {
					filter(wt) {
						return (0, s.$rPc)(wt)
							? wt.resources.length > 0 || !wt.hideWhenEmpty
							: !0;
					}
				}
				class ci {
					constructor(wt, We) {
						(this.b = wt), (this.c = We);
					}
					compare(wt, We) {
						if ((0, s.$oPc)(wt)) {
							if (!(0, s.$oPc)(We)) throw new Error("Invalid comparison");
							return 0;
						}
						if ((0, s.$pPc)(wt)) return -1;
						if ((0, s.$pPc)(We)) return 1;
						if ((0, s.$qPc)(wt)) return -1;
						if ((0, s.$qPc)(We)) return 1;
						if ((0, s.$rPc)(wt)) return (0, s.$rPc)(We) ? 0 : -1;
						if ((0, s.$APc)(wt)) return (0, s.$rPc)(We) ? 1 : -1;
						if ((0, s.$uPc)(wt)) return (0, s.$uPc)(We) ? 0 : 1;
						if ((0, s.$vPc)(wt)) {
							if (!(0, s.$vPc)(We)) throw new Error("Invalid comparison");
							return 0;
						}
						if ((0, s.$wPc)(wt)) return (0, s.$wPc)(We) ? 0 : 1;
						if ((0, s.$yPc)(wt) || (0, s.$zPc)(wt)) {
							if (this.b() === at.List) {
								if (!(0, s.$yPc)(We)) throw new Error("Invalid comparison");
								return (0, P.$as)(wt.uri.fsPath, We.uri.fsPath);
							}
							if (!(0, s.$yPc)(We) && !(0, s.$zPc)(We))
								throw new Error("Invalid comparison");
							const Pi = (0, s.$zPc)(wt) ? wt.name : (0, i.$kh)(wt.uri),
								Hi = (0, s.$zPc)(We) ? We.name : (0, i.$kh)(We.uri);
							return (0, P.$3r)(Pi, Hi);
						}
						if (this.b() === at.List) {
							if (this.c() === pi.Name) {
								const Ji = (0, i.$kh)(wt.sourceUri),
									cn = (0, i.$kh)(We.sourceUri);
								return (0, P.$3r)(Ji, cn);
							}
							if (this.c() === pi.Status) {
								const Ji = wt.decorations.tooltip ?? "",
									cn = We.decorations.tooltip ?? "";
								if (Ji !== cn) return (0, q.$Ff)(Ji, cn);
							}
							const Pi = wt.sourceUri.fsPath,
								Hi = We.sourceUri.fsPath;
							return (0, P.$as)(Pi, Hi);
						}
						const _e = v.$06.isResourceNode(wt),
							Si = v.$06.isResourceNode(We);
						if (_e !== Si) return _e ? -1 : 1;
						const gi = v.$06.isResourceNode(wt)
								? wt.name
								: (0, i.$kh)(wt.sourceUri),
							ki = v.$06.isResourceNode(We)
								? We.name
								: (0, i.$kh)(We.sourceUri);
						return (0, P.$3r)(gi, ki);
					}
				}
				e.$0Pc = ci;
				let ri = class {
					constructor(wt, We) {
						(this.b = wt), (this.c = We);
					}
					getKeyboardNavigationLabel(wt) {
						if (v.$06.isResourceNode(wt)) return wt.name;
						if ((0, s.$oPc)(wt) || (0, s.$pPc)(wt) || (0, s.$qPc)(wt)) return;
						if ((0, s.$rPc)(wt)) return wt.label;
						if ((0, s.$uPc)(wt)) return wt.label;
						if ((0, s.$vPc)(wt)) return [wt.message, wt.author];
						if ((0, s.$wPc)(wt))
							return [
								wt.historyItemViewModel.historyItem.message,
								wt.historyItemViewModel.historyItem.author,
							];
						if ((0, s.$APc)(wt)) return wt.label;
						if (this.b() === at.List) {
							const We = (0, s.$sPc)(wt) ? wt.sourceUri : wt.uri;
							return [(0, i.$kh)(We), this.c.getUriLabel(We, { relative: !0 })];
						} else return (0, i.$kh)((0, s.$sPc)(wt) ? wt.sourceUri : wt.uri);
					}
					getCompressedNodeKeyboardNavigationLabel(wt) {
						return wt.map((_e) => _e.name).join("/");
					}
				};
				(e.$$Pc = ri), (e.$$Pc = ri = Ne([j(1, ie.$3N)], ri));
				function $i(Ti) {
					if ((0, s.$oPc)(Ti)) return `repo:${Ti.provider.id}`;
					if ((0, s.$pPc)(Ti)) return `input:${Ti.repository.provider.id}`;
					if ((0, s.$qPc)(Ti))
						return `actionButton:${Ti.repository.provider.id}`;
					if ((0, s.$rPc)(Ti))
						return `resourceGroup:${Ti.provider.id}/${Ti.id}`;
					if ((0, s.$sPc)(Ti)) {
						const wt = Ti.resourceGroup;
						return `resource:${wt.provider.id}/${wt.id}/${Ti.sourceUri.toString()}`;
					} else if ((0, s.$tPc)(Ti)) {
						const wt = Ti.context;
						return `folder:${wt.provider.id}/${wt.id}/$FOLDER/${Ti.uri.toString()}`;
					} else {
						if ((0, s.$uPc)(Ti))
							return `historyItemGroup:${Ti.repository.provider.id}/${Ti.id}`;
						if ((0, s.$vPc)(Ti)) {
							const wt = Ti.historyItemGroup;
							return `historyItem:${wt.repository.provider.id}/${wt.id}/${Ti.id}/${Ti.parentIds.join(",")}`;
						} else if ((0, s.$wPc)(Ti)) {
							const wt = Ti.repository.provider,
								We = Ti.historyItemViewModel.historyItem;
							return `historyItem2:${wt.id}/${We.id}/${We.parentIds.join(",")}`;
						} else if ((0, s.$yPc)(Ti)) {
							const wt = Ti.historyItem,
								We = wt.historyItemGroup;
							return `historyItemChange:${We.repository.provider.id}/${We.id}/${wt.id}/${Ti.uri.toString()}`;
						} else if ((0, s.$zPc)(Ti)) {
							const wt = Ti.context,
								We = wt.historyItemGroup;
							return `folder:${We.repository.provider.id}/${We.id}/${wt.id}/$FOLDER/${Ti.uri.toString()}`;
						} else {
							if ((0, s.$APc)(Ti))
								return `separator:${Ti.repository.provider.id}`;
							throw new Error("Invalid tree element");
						}
					}
				}
				class Wt {
					getId(wt) {
						return $i(wt);
					}
				}
				let tt = class {
					constructor(wt) {
						this.b = wt;
					}
					getWidgetAriaLabel() {
						return (0, D.localize)(9098, null);
					}
					getAriaLabel(wt) {
						if (v.$06.isResourceNode(wt))
							return (
								this.b.getUriLabel(wt.uri, { relative: !0, noPrefix: !0 }) ||
								wt.name
							);
						if ((0, s.$oPc)(wt))
							return `${wt.provider.name} ${wt.provider.label}`;
						if ((0, s.$pPc)(wt)) return (0, D.localize)(9099, null);
						if ((0, s.$qPc)(wt)) return wt.button?.command.title ?? "";
						if ((0, s.$rPc)(wt)) return wt.label;
						if ((0, s.$uPc)(wt))
							return (
								wt.ariaLabel ??
								`${wt.label.trim()}${wt.description ? `, ${wt.description}` : ""}`
							);
						if ((0, s.$vPc)(wt))
							return `${(0, Je.$$k)(wt.message).trim()}${wt.author ? `, ${wt.author}` : ""}`;
						if ((0, s.$wPc)(wt)) {
							const We = wt.historyItemViewModel.historyItem;
							return `${(0, Je.$$k)(We.message).trim()}${We.author ? `, ${We.author}` : ""}`;
						} else if ((0, s.$yPc)(wt)) {
							const We = [(0, i.$kh)(wt.uri)],
								_e = this.b.getUriLabel((0, i.$mh)(wt.uri), {
									relative: !0,
									noPrefix: !0,
								});
							return _e && We.push(_e), We.join(", ");
						} else {
							if ((0, s.$APc)(wt)) return wt.ariaLabel ?? wt.label;
							{
								const We = [];
								We.push((0, i.$kh)(wt.sourceUri)),
									wt.decorations.tooltip && We.push(wt.decorations.tooltip);
								const _e = this.b.getUriLabel((0, i.$mh)(wt.sourceUri), {
									relative: !0,
									noPrefix: !0,
								});
								return _e && We.push(_e), We.join(", ");
							}
						}
					}
				};
				(e.$_Pc = tt), (e.$_Pc = tt = Ne([j(0, ie.$3N)], tt));
				var at;
				(function (Ti) {
					(Ti.List = "list"), (Ti.Tree = "tree");
				})(at || (at = {}));
				var pi;
				(function (Ti) {
					(Ti.Path = "path"), (Ti.Name = "name"), (Ti.Status = "status");
				})(pi || (pi = {}));
				const Li = {
					ViewSort: new p.$XX("SCMViewSort"),
					Repositories: new p.$XX("SCMRepositories"),
					ChangesSettings: new p.$XX("SCMChangesSettings"),
				};
				(e.$aQc = {
					SCMViewMode: new c.$5j("scmViewMode", at.List),
					SCMViewSortKey: new c.$5j("scmViewSortKey", pi.Path),
					SCMViewAreAllRepositoriesCollapsed: new c.$5j(
						"scmViewAreAllRepositoriesCollapsed",
						!1,
					),
					SCMViewIsAnyRepositoryCollapsible: new c.$5j(
						"scmViewIsAnyRepositoryCollapsible",
						!1,
					),
					SCMProvider: new c.$5j("scmProvider", void 0),
					SCMProviderRootUri: new c.$5j("scmProviderRootUri", void 0),
					SCMProviderHasRootUri: new c.$5j("scmProviderHasRootUri", void 0),
					RepositoryCount: new c.$5j("scmRepositoryCount", 0),
					RepositoryVisibilityCount: new c.$5j("scmRepositoryVisibleCount", 0),
					RepositoryVisibility(Ti) {
						return new c.$5j(`scmRepositoryVisible:${Ti.provider.id}`, !1);
					},
				}),
					p.$ZX.appendMenuItem(p.$XX.SCMTitle, {
						title: (0, D.localize)(9100, null),
						submenu: Li.ViewSort,
						when: c.$Kj.and(
							c.$Kj.equals("view", d.$_6),
							e.$aQc.RepositoryCount.notEqualsTo(0),
						),
						group: "0_view&sort",
						order: 1,
					}),
					p.$ZX.appendMenuItem(Li.ViewSort, {
						title: (0, D.localize)(9101, null),
						submenu: Li.Repositories,
						when: c.$Kj.greater(e.$aQc.RepositoryCount.key, 1),
						group: "0_repositories",
					}),
					(0, p.$4X)(
						class extends p.$3X {
							constructor() {
								super({
									id: "workbench.scm.action.scm.viewChanges",
									title: (0, D.localize)(9102, null),
									f1: !1,
									menu: [
										{
											id: p.$XX.SCMChangesContext,
											group: "0_view",
											when: c.$Kj.equals(
												"config.multiDiffEditor.experimental.enabled",
												!0,
											),
										},
									],
								});
							}
							async run(Ti, wt, ...We) {
								const _e = Ti.get(n.$ek);
								if (!wt || We.length === 0) return;
								const Si = We[0],
									gi = We[We.length - 1],
									ki = wt.historyProvider.get();
								if (We.length > 1) {
									const Rn = await ki?.resolveHistoryItemGroupCommonAncestor2([
										Si.id,
										gi.id,
									]);
									if (!Rn || (Rn !== Si.id && Rn !== gi.id)) return;
								}
								const Pi = gi.parentIds.length > 0 ? gi.parentIds[0] : void 0,
									Hi = await ki?.provideHistoryItemChanges(Si.id, Pi);
								if (!Hi?.length) return;
								const Ji =
										We.length === 1
											? `${We[0].id.substring(0, 8)} - ${We[0].message}`
											: (0, D.localize)(
													9103,
													null,
													gi.id.substring(0, 8),
													Si.id.substring(0, 8),
												),
									cn = wt.rootUri,
									un = cn ? cn.path : wt.label,
									yn = I.URI.from(
										{
											scheme: "scm-history-item",
											path: `${un}/${Pi}..${Si.id}`,
										},
										!0,
									);
								_e.executeCommand("_workbench.openMultiDiffEditor", {
									title: Ji,
									multiDiffSourceUri: yn,
									resources: Hi,
								});
							}
						},
					);
				class Di extends p.$3X {
					constructor(wt) {
						super({
							id: `workbench.scm.action.toggleRepositoryVisibility.${wt.provider.id}`,
							title: wt.provider.name,
							f1: !1,
							precondition: c.$Kj.or(
								e.$aQc.RepositoryVisibilityCount.notEqualsTo(1),
								e.$aQc.RepositoryVisibility(wt).isEqualTo(!1),
							),
							toggled: e.$aQc.RepositoryVisibility(wt).isEqualTo(!0),
							menu: { id: Li.Repositories, group: "0_repositories" },
						}),
							(this.b = wt);
					}
					run(wt) {
						wt.get(d.$d7).toggleVisibility(this.b);
					}
				}
				let Ui = class {
					constructor(wt, We, _e) {
						(this.i = wt),
							(this.k = We),
							(this.b = new Map()),
							(this.f = new w.$Zc()),
							(this.c = e.$aQc.RepositoryCount.bindTo(wt)),
							(this.d = e.$aQc.RepositoryVisibilityCount.bindTo(wt)),
							We.onDidChangeVisibleRepositories(this.o, this, this.f),
							_e.onDidAddRepository(this.m, this, this.f),
							_e.onDidRemoveRepository(this.n, this, this.f);
						for (const Si of _e.repositories) this.m(Si);
					}
					m(wt) {
						const We = (0, p.$4X)(
								class extends Di {
									constructor() {
										super(wt);
									}
								},
							),
							_e = e.$aQc.RepositoryVisibility(wt).bindTo(this.i);
						_e.set(this.k.isVisible(wt)),
							this.b.set(wt, {
								contextKey: _e,
								dispose() {
									_e.reset(), We.dispose();
								},
							}),
							this.p();
					}
					n(wt) {
						this.b.get(wt)?.dispose(), this.b.delete(wt), this.p();
					}
					o() {
						let wt = 0;
						for (const [We, _e] of this.b) {
							const Si = this.k.isVisible(We);
							_e.contextKey.set(Si), Si && wt++;
						}
						this.c.set(this.b.size), this.d.set(wt);
					}
					p() {
						this.c.set(this.b.size),
							this.d.set(
								S.Iterable.reduce(
									this.b.keys(),
									(wt, We) => wt + (this.k.isVisible(We) ? 1 : 0),
									0,
								),
							);
					}
					dispose() {
						this.f.dispose(), (0, w.$Vc)(this.b.values()), this.b.clear();
					}
				};
				Ui = Ne([j(0, c.$6j), j(1, d.$d7), j(2, d.$c7)], Ui);
				class Wi extends E.$WMb {
					constructor(wt = "workbench.scm.action.setListViewMode", We = {}) {
						super({
							id: wt,
							title: (0, D.localize)(9104, null),
							viewId: d.$_6,
							f1: !1,
							icon: _.$ak.listTree,
							toggled: e.$aQc.SCMViewMode.isEqualTo(at.List),
							menu: { id: Li.ViewSort, group: "1_viewmode", ...We },
						});
					}
					async runInView(wt, We) {
						We.viewMode = at.List;
					}
				}
				class Gi extends Wi {
					constructor() {
						super("workbench.scm.action.setListViewModeNavigation", {
							id: p.$XX.SCMTitle,
							when: c.$Kj.and(
								c.$Kj.equals("view", d.$_6),
								e.$aQc.RepositoryCount.notEqualsTo(0),
								e.$aQc.SCMViewMode.isEqualTo(at.Tree),
							),
							group: "navigation",
							order: -1e3,
						});
					}
				}
				class qi extends E.$WMb {
					constructor(wt = "workbench.scm.action.setTreeViewMode", We = {}) {
						super({
							id: wt,
							title: (0, D.localize)(9105, null),
							viewId: d.$_6,
							f1: !1,
							icon: _.$ak.listFlat,
							toggled: e.$aQc.SCMViewMode.isEqualTo(at.Tree),
							menu: { id: Li.ViewSort, group: "1_viewmode", ...We },
						});
					}
					async runInView(wt, We) {
						We.viewMode = at.Tree;
					}
				}
				class Oi extends qi {
					constructor() {
						super("workbench.scm.action.setTreeViewModeNavigation", {
							id: p.$XX.SCMTitle,
							when: c.$Kj.and(
								c.$Kj.equals("view", d.$_6),
								e.$aQc.RepositoryCount.notEqualsTo(0),
								e.$aQc.SCMViewMode.isEqualTo(at.List),
							),
							group: "navigation",
							order: -1e3,
						});
					}
				}
				(0, p.$4X)(Wi), (0, p.$4X)(qi), (0, p.$4X)(Gi), (0, p.$4X)(Oi);
				class yi extends E.$WMb {
					constructor(wt, We) {
						super({
							id: `workbench.scm.action.repositories.setSortKey.${wt}`,
							title: We,
							viewId: d.$_6,
							f1: !1,
							toggled: $e.$TPc.RepositorySortKey.isEqualTo(wt),
							menu: [
								{ id: Li.Repositories, group: "1_sort" },
								{ id: p.$XX.SCMSourceControlTitle, group: "1_sort" },
							],
						}),
							(this.b = wt);
					}
					runInView(wt) {
						wt.get(d.$d7).toggleSortKey(this.b);
					}
				}
				class Ai extends yi {
					constructor() {
						super(
							d.ISCMRepositorySortKey.DiscoveryTime,
							(0, D.localize)(9106, null),
						);
					}
				}
				class li extends yi {
					constructor() {
						super(d.ISCMRepositorySortKey.Name, (0, D.localize)(9107, null));
					}
				}
				class Vi extends yi {
					constructor() {
						super(d.ISCMRepositorySortKey.Path, (0, D.localize)(9108, null));
					}
				}
				(0, p.$4X)(Ai), (0, p.$4X)(li), (0, p.$4X)(Vi);
				class wi extends E.$WMb {
					constructor(wt, We) {
						super({
							id: `workbench.scm.action.setSortKey.${wt}`,
							title: We,
							viewId: d.$_6,
							f1: !1,
							toggled: e.$aQc.SCMViewSortKey.isEqualTo(wt),
							precondition: e.$aQc.SCMViewMode.isEqualTo(at.List),
							menu: { id: Li.ViewSort, group: "2_sort" },
						}),
							(this.b = wt);
					}
					async runInView(wt, We) {
						We.viewSortKey = this.b;
					}
				}
				class _t extends wi {
					constructor() {
						super(pi.Name, (0, D.localize)(9109, null));
					}
				}
				class ai extends wi {
					constructor() {
						super(pi.Path, (0, D.localize)(9110, null));
					}
				}
				class Ft extends wi {
					constructor() {
						super(pi.Status, (0, D.localize)(9111, null));
					}
				}
				(0, p.$4X)(_t), (0, p.$4X)(ai), (0, p.$4X)(Ft);
				class Xt extends E.$WMb {
					constructor() {
						super({
							id: "workbench.scm.action.collapseAllRepositories",
							title: (0, D.localize)(9112, null),
							viewId: d.$_6,
							f1: !1,
							icon: _.$ak.collapseAll,
							menu: {
								id: p.$XX.SCMTitle,
								group: "navigation",
								when: c.$Kj.and(
									c.$Kj.equals("view", d.$_6),
									e.$aQc.SCMViewIsAnyRepositoryCollapsible.isEqualTo(!0),
									e.$aQc.SCMViewAreAllRepositoriesCollapsed.isEqualTo(!1),
								),
							},
						});
					}
					async runInView(wt, We) {
						We.collapseAllRepositories();
					}
				}
				class $t extends E.$WMb {
					constructor() {
						super({
							id: "workbench.scm.action.expandAllRepositories",
							title: (0, D.localize)(9113, null),
							viewId: d.$_6,
							f1: !1,
							icon: _.$ak.expandAll,
							menu: {
								id: p.$XX.SCMTitle,
								group: "navigation",
								when: c.$Kj.and(
									c.$Kj.equals("view", d.$_6),
									e.$aQc.SCMViewIsAnyRepositoryCollapsible.isEqualTo(!0),
									e.$aQc.SCMViewAreAllRepositoriesCollapsed.isEqualTo(!0),
								),
							},
						});
					}
					async runInView(wt, We) {
						We.expandAllRepositories();
					}
				}
				(0, p.$4X)(Xt), (0, p.$4X)($t);
				var ut;
				(function (Ti) {
					Ti.CancelAction = "scm.input.cancelAction";
				})(ut || (ut = {}));
				var Et;
				(function (Ti) {
					Ti.LastActionId = "scm.input.lastActionId";
				})(Et || (Et = {}));
				let Tt = class extends o.$sj {
					get runningActions() {
						return this.b;
					}
					constructor(wt, We) {
						super(), (this.n = wt), (this.t = We), (this.b = new Set());
					}
					async q(wt) {
						try {
							if (
								this.runningActions.size !== 0 &&
								(this.c?.cancel(), wt.id === ut.CancelAction)
							)
								return;
							const We = [];
							for (const _e of this.n.repository.provider.groups)
								We.push({
									resourceGroupId: _e.id,
									resources: [..._e.resources.map((Si) => Si.sourceUri)],
								});
							this.b.add(wt),
								(this.c = new Be.$Ce()),
								await wt.run(
									this.n.repository.provider.rootUri,
									We,
									this.c.token,
								);
						} finally {
							this.b.delete(wt),
								this.b.size === 0 &&
									this.t.store(
										Et.LastActionId,
										wt.id,
										M.StorageScope.PROFILE,
										M.StorageTarget.USER,
									);
						}
					}
				};
				Tt = Ne([j(1, M.$lq)], Tt);
				let qt = class extends Ie.$Syb {
					get dropdownActions() {
						return this.b;
					}
					get dropdownAction() {
						return this.c;
					}
					constructor(wt, We, _e, Si, gi, ki, Pi, Hi, Ji) {
						super(
							wt,
							{ resetMenu: p.$XX.SCMInputBox, ...We },
							_e,
							Si,
							gi,
							Pi,
							ki,
							Ji,
						),
							(this.R = _e),
							(this.S = Si),
							(this.U = Hi),
							(this.b = []),
							(this.P = new t.$re()),
							(this.onDidChange = this.P.event),
							(this.Q = this.D(new w.$2c())),
							(this.c = new o.$rj(
								"scmInputMoreActions",
								(0, D.localize)(9114, null),
								"codicon-chevron-down",
							)),
							(this.O = new p.$2X(
								{
									id: ut.CancelAction,
									title: (0, D.localize)(9115, null),
									icon: _.$ak.debugStop,
								},
								void 0,
								void 0,
								void 0,
								void 0,
								Si,
								ki,
							));
					}
					setInput(wt) {
						this.Q.value = new w.$Zc();
						const We = this.S.createOverlay([
								["scmProvider", wt.repository.provider.contextValue],
								[
									"scmProviderRootUri",
									wt.repository.provider.rootUri?.toString(),
								],
								["scmProviderHasRootUri", !!wt.repository.provider.rootUri],
							]),
							_e = this.Q.value.add(
								this.R.createMenu(p.$XX.SCMInputBox, We, {
									emitEventsForSubmenuChanges: !0,
								}),
							),
							Si = () =>
								wt.repository.provider.groups.some(
									(ki) => ki.resources.length > 0,
								),
							gi = () => {
								const ki = [];
								(0, le.$Kyb)(_e, { shouldForwardArgs: !0 }, ki);
								for (const Hi of ki) Hi.enabled = Si();
								this.c.enabled = Si();
								let Pi;
								if (ki.length === 1) Pi = ki[0];
								else if (ki.length > 1) {
									const Hi = this.U.get(
										Et.LastActionId,
										M.StorageScope.PROFILE,
										"",
									);
									Pi = ki.find((Ji) => Ji.id === Hi) ?? ki[0];
								}
								(this.b = ki.length === 1 ? [] : ki),
									super.setActions(Pi ? [Pi] : [], []),
									this.P.fire();
							};
						this.Q.value.add(_e.onDidChange(() => gi())),
							this.Q.value.add(
								wt.repository.provider.onDidChangeResources(() => gi()),
							),
							this.Q.value.add(
								this.U.onDidChangeValue(
									M.StorageScope.PROFILE,
									Et.LastActionId,
									this.Q.value,
								)(() => gi()),
							),
							(this.actionRunner = new Tt(wt, this.U)),
							this.Q.value.add(
								this.actionRunner.onWillRun((ki) => {
									this.actionRunner.runningActions.size === 0 &&
										(super.setActions([this.O], []), this.P.fire());
								}),
							),
							this.Q.value.add(
								this.actionRunner.onDidRun((ki) => {
									this.actionRunner.runningActions.size === 0 && gi();
								}),
							),
							gi();
					}
				};
				qt = Ne(
					[
						j(2, p.$YX),
						j(3, c.$6j),
						j(4, h.$Xxb),
						j(5, n.$ek),
						j(6, g.$uZ),
						j(7, M.$lq),
						j(8, Y.$km),
					],
					qt,
				);
				class At {
					constructor(wt, We) {
						(this.f = wt),
							(this.i = We),
							(this.b = new t.$re()),
							(this.onDidChange = this.b.event),
							(this.c = ee.$njb),
							(this.d = new w.$Zc());
						const _e = t.Event.filter(
							this.i.onDidChangeConfiguration,
							(Si) =>
								Si.affectsConfiguration("editor.accessibilitySupport") ||
								Si.affectsConfiguration("editor.cursorBlinking") ||
								Si.affectsConfiguration("editor.fontFamily") ||
								Si.affectsConfiguration("editor.rulers") ||
								Si.affectsConfiguration("editor.wordWrap") ||
								Si.affectsConfiguration("scm.inputFontFamily") ||
								Si.affectsConfiguration("scm.inputFontSize"),
							this.d,
						);
						this.d.add(_e(() => this.b.fire()));
					}
					getEditorConstructionOptions() {
						const wt = this.k(),
							We = this.m(),
							_e = this.o(We);
						return {
							...(0, R.$xYb)(this.i),
							...this.n(),
							cursorWidth: 1,
							dragAndDrop: !0,
							dropIntoEditor: { enabled: !0 },
							fontFamily: wt,
							fontSize: We,
							formatOnType: !0,
							lineDecorationsWidth: 6,
							lineHeight: _e,
							overflowWidgetsDomNode: this.f,
							padding: { top: 2, bottom: 2 },
							quickSuggestions: !1,
							renderWhitespace: "none",
							scrollbar: { alwaysConsumeMouseWheel: !1, vertical: "hidden" },
							wrappingIndent: "none",
							wrappingStrategy: "advanced",
						};
					}
					getEditorOptions() {
						const wt = this.k(),
							We = this.m(),
							_e = this.o(We),
							Si = this.i.getValue("editor.accessibilitySupport"),
							gi = this.i.getValue("editor.cursorBlinking");
						return {
							...this.n(),
							accessibilitySupport: Si,
							cursorBlinking: gi,
							fontFamily: wt,
							fontSize: We,
							lineHeight: _e,
						};
					}
					k() {
						const wt = this.i.getValue("scm.inputFontFamily").trim();
						return wt.toLowerCase() === "editor"
							? this.i.getValue("editor.fontFamily").trim()
							: wt.length !== 0 && wt.toLowerCase() !== "default"
								? wt
								: this.c;
					}
					m() {
						return this.i.getValue("scm.inputFontSize");
					}
					n() {
						const wt = this.i.inspect("editor.rulers", {
								overrideIdentifier: "scminput",
							}),
							We = wt.overrideIdentifiers?.includes("scminput")
								? xe.EditorOptions.rulers.validate(wt.value)
								: [],
							_e = this.i.inspect("editor.wordWrap", {
								overrideIdentifier: "scminput",
							}),
							Si = _e.overrideIdentifiers?.includes("scminput")
								? xe.EditorOptions.wordWrap.validate(_e.value)
								: "on";
						return { rulers: We, wordWrap: Si };
					}
					o(wt) {
						return Math.round(wt * 1.5);
					}
					dispose() {
						this.d.dispose();
					}
				}
				let Yt = class {
					static {
						kt = this;
					}
					static {
						this.b = {
							[d.InputValidationType.Information]: 5e3,
							[d.InputValidationType.Warning]: 8e3,
							[d.InputValidationType.Error]: 1e4,
						};
					}
					get input() {
						return this.p?.input;
					}
					set input(wt) {
						if (wt === this.input) return;
						if (
							(this.clearValidation(),
							this.d.classList.remove("synthetic-focus"),
							this.t.clear(),
							this.q.set(wt?.repository.id),
							!wt)
						) {
							this.i.setModel(void 0), (this.p = void 0);
							return;
						}
						const We = wt.repository.provider.inputBoxTextModel;
						this.i.setModel(We),
							this.D.getValue("editor.wordBasedSuggestions", {
								resource: We.uri,
							}) !== "off" &&
								this.D.updateValue(
									"editor.wordBasedSuggestions",
									"off",
									{ resource: We.uri },
									y.ConfigurationTarget.MEMORY,
								);
						const _e = new $.$Kh(200),
							Si = async () => {
								const un = this.i.getSelection()?.getStartPosition(),
									yn = un && We.getOffsetAt(un),
									Rn = We.getValue();
								this.A(await wt.validateInput(Rn, yn || 0));
							},
							gi = () => _e.trigger(Si);
						this.t.add(_e), this.t.add(this.i.onDidChangeCursorPosition(gi));
						const ki = this.B.getCreationOptions(
								We.getLanguageId(),
								We.uri,
								We.isForSimpleWidget,
							),
							Pi = t.Event.filter(
								this.i.onKeyDown,
								(un) => un.keyCode === ne.KeyCode.Enter,
								this.t,
							);
						this.t.add(
							Pi(() => We.detectIndentation(ki.insertSpaces, ki.tabSize)),
						),
							We.setValue(wt.value),
							this.t.add(
								wt.onDidChange(({ value: un, reason: yn }) => {
									const Rn = We.getValue();
									if (un === Rn) return;
									We.pushStackElement(),
										We.pushEditOperations(
											null,
											[Ke.$jL.replaceMove(We.getFullModelRange(), un)],
											() => [],
										);
									const _i =
										yn === d.SCMInputChangeReason.HistoryPrevious
											? We.getFullModelRange().getStartPosition()
											: We.getFullModelRange().getEndPosition();
									this.i.setPosition(_i),
										this.i.revealPositionInCenterIfOutsideViewport(_i);
								}),
							),
							this.t.add(wt.onDidChangeFocus(() => this.focus())),
							this.t.add(
								wt.onDidChangeValidationMessage((un) =>
									this.A(un, { focus: !0, timeout: !0 }),
								),
							),
							this.t.add(wt.onDidChangeValidateInput((un) => gi())),
							this.t.add(
								We.onDidChangeContent(() => {
									wt.setValue(We.getValue(), !0), gi();
								}),
							);
						const Hi = () => {
							const un = this.C.lookupKeybinding("scm.acceptInput"),
								yn = un ? un.getLabel() : H.$m ? "Cmd+Enter" : "Ctrl+Enter",
								Rn = (0, q.$kf)(wt.placeholder, yn);
							this.i.updateOptions({ placeholder: Rn });
						};
						this.t.add(wt.onDidChangePlaceholder(Hi)),
							this.t.add(this.C.onDidUpdateKeybindings(Hi)),
							Hi();
						let Ji = "";
						this.t.add(
							(0, Re.autorun)((un) => {
								if (!wt.visible) return;
								const yn = Ji;
								Ji = wt.repository.provider.commitTemplate.read(un);
								const Rn = We.getValue();
								(Rn && Rn !== yn) || We.setValue(Ji);
							}),
						);
						const cn = (un) => {
							this.i.updateOptions({ readOnly: !un });
						};
						this.t.add(wt.onDidChangeEnablement((un) => cn(un))),
							cn(wt.enabled),
							this.n.setInput(wt),
							(this.p = { input: wt, textModel: We });
					}
					get selections() {
						return this.i.getSelections();
					}
					set selections(wt) {
						wt && this.i.setSelections(wt);
					}
					A(wt, We) {
						this.x && (clearTimeout(this.x), (this.x = 0)),
							(this.u = wt),
							this.K(),
							We?.focus && !this.hasFocus() && this.focus(),
							wt &&
								We?.timeout &&
								(this.x = setTimeout(() => this.A(void 0), kt.b[wt.type]));
					}
					constructor(wt, We, _e, Si, gi, ki, Pi, Hi, Ji, cn, un) {
						(this.B = Si),
							(this.C = gi),
							(this.D = ki),
							(this.E = Pi),
							(this.F = Hi),
							(this.G = Ji),
							(this.H = cn),
							(this.I = un),
							(this.o = new w.$Zc()),
							(this.t = new w.$Zc()),
							(this.w = !1),
							(this.y = !1),
							(this.z = !1),
							(this.d = (0, C.$fhb)(wt, (0, C.$)(".scm-editor"))),
							(this.f = (0, C.$fhb)(this.d, (0, C.$)(".scm-editor-container"))),
							(this.m = (0, C.$fhb)(this.d, (0, C.$)(".scm-editor-toolbar"))),
							(this.c = _e.createScoped(this.d)),
							(this.q = this.c.createKey("scmRepository", void 0)),
							(this.k = new At(We, this.D)),
							this.o.add(this.k.onDidChange(this.J, this)),
							this.o.add(this.k);
						const yn = {
								contributions:
									B.EditorExtensionsRegistry.getSomeEditorContributions([
										be.$BBb.ID,
										J.$YBb.ID,
										x.$2Mb.ID,
										ue.$zAb.ID,
										ye.$Hhc.ID,
										fe.$g3b.ID,
										F.$_2b.ID,
										Oe.$Thc.ID,
										Me.$whc.ID,
										De.$2Ob.ID,
										ge.$O1b.ID,
										W.$6Ob.ID,
										U.$_Xb.ID,
										me.$Szb.ID,
										Ze.$Ujc.ID,
										z.$aYb,
										G.$aDb.ID,
										V.$KDb.ID,
									]),
								isSimpleWidget: !0,
							},
							Rn = new K.$Ki([c.$6j, this.c]),
							_i = Pi.createChild(Rn, this.o),
							Bn = this.k.getEditorConstructionOptions();
						(this.i = _i.createInstance(A.$rwb, this.f, Bn, yn)),
							this.o.add(this.i),
							this.o.add(
								this.i.onDidFocusEditorText(() => {
									this.input?.repository && this.F.focus(this.input.repository),
										this.d.classList.add("synthetic-focus"),
										this.K();
								}),
							),
							this.o.add(
								this.i.onDidBlurEditorText(() => {
									this.d.classList.remove("synthetic-focus"),
										setTimeout(() => {
											(!this.u || !this.w) && this.clearValidation();
										}, 0);
								}),
							),
							this.o.add(
								this.i.onDidBlurEditorWidget(() => {
									ue.$zAb.get(this.i)?.clearWidgets(),
										fe.$g3b.get(this.i)?.clearWidgets();
								}),
							);
						const Mn = this.c.createKey("scmInputIsInFirstPosition", !1),
							zn = this.c.createKey("scmInputIsInLastPosition", !1);
						this.o.add(
							this.i.onDidChangeCursorPosition(({ position: $n }) => {
								const Ln = this.i._getViewModel(),
									wn = Ln.getLineCount(),
									Hn = Ln.getLineLength(wn) + 1,
									Yn =
										Ln.coordinatesConverter.convertModelPositionToViewPosition(
											$n,
										);
								Mn.set(Yn.lineNumber === 1 && Yn.column === 1),
									zn.set(Yn.lineNumber === wn && Yn.column === Hn);
							}),
						),
							this.o.add(
								this.i.onDidScrollChange(($n) => {
									this.m.classList.toggle(
										"scroll-decoration",
										$n.scrollTop > 0,
									);
								}),
							),
							t.Event.filter(this.D.onDidChangeConfiguration, ($n) =>
								$n.affectsConfiguration("scm.showInputActionButton"),
							)(() => this.layout(), this, this.o),
							(this.onDidChangeContentHeight = t.Event.signal(
								t.Event.filter(
									this.i.onDidContentSizeChange,
									($n) => $n.contentHeightChanged,
									this.o,
								),
							)),
							(this.n = _i.createInstance(qt, this.m, {
								actionViewItemProvider: ($n, Ln) =>
									$n instanceof p.$2X && this.n.dropdownActions.length > 1
										? Pi.createInstance(
												Se.$OYb,
												$n,
												this.n.dropdownAction,
												this.n.dropdownActions,
												"",
												this.I,
												{
													actionRunner: this.n.actionRunner,
													hoverDelegate: Ln.hoverDelegate,
												},
											)
										: (0, le.$Pyb)(Pi, $n, Ln),
								menuOptions: { shouldForwardArgs: !0 },
							})),
							this.o.add(this.n.onDidChange(() => this.layout())),
							this.o.add(this.n);
					}
					getContentHeight() {
						const wt = this.i.getOption(xe.EditorOption.lineHeight),
							{ top: We, bottom: _e } = this.i.getOption(
								xe.EditorOption.padding,
							),
							Si = this.D.getValue("scm.inputMinLineCount"),
							ki =
								(typeof Si == "number" ? (0, ke.$Zm)(Si, 1, 50) : 1) * wt +
								We +
								_e,
							Pi = this.D.getValue("scm.inputMaxLineCount"),
							Ji =
								(typeof Pi == "number" ? (0, ke.$Zm)(Pi, 1, 50) : 10) * wt +
								We +
								_e;
						return (0, ke.$Zm)(this.i.getContentHeight(), ki, Ji);
					}
					layout() {
						const wt = this.getContentHeight(),
							We = this.L(),
							_e = new C.$pgb(this.d.clientWidth - We, wt);
						if (_e.width < 0) {
							this.y = !0;
							return;
						}
						(this.y = !1), this.i.layout(_e), this.K();
						const Si = this.D.getValue("scm.showInputActionButton") === !0;
						this.m.classList.toggle("hidden", !Si || this.n?.isEmpty() === !0),
							this.z && ((this.z = !1), this.focus());
					}
					focus() {
						if (this.y) {
							(this.y = !1), (this.z = !0);
							return;
						}
						this.i.focus(), this.d.classList.add("synthetic-focus");
					}
					hasFocus() {
						return this.i.hasTextFocus();
					}
					J() {
						this.i.updateOptions(this.k.getEditorOptions());
					}
					K() {
						if (
							(this.clearValidation(),
							this.d.classList.toggle(
								"validation-info",
								this.u?.type === d.InputValidationType.Information,
							),
							this.d.classList.toggle(
								"validation-warning",
								this.u?.type === d.InputValidationType.Warning,
							),
							this.d.classList.toggle(
								"validation-error",
								this.u?.type === d.InputValidationType.Error,
							),
							!this.u || !this.i.hasTextFocus())
						)
							return;
						const wt = new w.$Zc();
						this.v = this.G.showContextView({
							getAnchor: () => this.d,
							render: (We) => {
								(this.d.style.borderBottomLeftRadius = "0"),
									(this.d.style.borderBottomRightRadius = "0");
								const _e = (0, C.$fhb)(
									We,
									(0, C.$)(".scm-editor-validation-container"),
								);
								_e.classList.toggle(
									"validation-info",
									this.u.type === d.InputValidationType.Information,
								),
									_e.classList.toggle(
										"validation-warning",
										this.u.type === d.InputValidationType.Warning,
									),
									_e.classList.toggle(
										"validation-error",
										this.u.type === d.InputValidationType.Error,
									),
									(_e.style.width = `${this.d.clientWidth + 2}px`);
								const Si = (0, C.$fhb)(_e, (0, C.$)(".scm-editor-validation")),
									gi = this.u.message;
								if (typeof gi == "string") Si.textContent = gi;
								else {
									const Ji = (0, C.$dhb)(Si);
									wt.add(Ji),
										wt.add(Ji.onDidFocus(() => (this.w = !0))),
										wt.add(
											Ji.onDidBlur(() => {
												(this.w = !1),
													(this.d.style.borderBottomLeftRadius = "2px"),
													(this.d.style.borderBottomRightRadius = "2px"),
													this.G.hideContextView();
											}),
										);
									const un = wt
										.add(this.E.createInstance(oe.$Qzb, {}))
										.render(gi, {
											actionHandler: {
												callback: (yn) => {
													(0, oe.$Rzb)(this.H, yn, gi.isTrusted),
														(this.d.style.borderBottomLeftRadius = "2px"),
														(this.d.style.borderBottomRightRadius = "2px"),
														this.G.hideContextView();
												},
												disposables: wt,
											},
										});
									wt.add(un), Si.appendChild(un.element);
								}
								const ki = (0, C.$fhb)(
										_e,
										(0, C.$)(".scm-editor-validation-actions"),
									),
									Pi = new f.$eib(ki),
									Hi = new o.$rj(
										"scmInputWidget.validationMessage.close",
										(0, D.localize)(9116, null),
										te.ThemeIcon.asClassName(_.$ak.close),
										!0,
										() => {
											this.G.hideContextView(),
												(this.d.style.borderBottomLeftRadius = "2px"),
												(this.d.style.borderBottomRightRadius = "2px");
										},
									);
								return (
									wt.add(Pi), Pi.push(Hi, { icon: !0, label: !1 }), w.$1c.None
								);
							},
							onHide: () => {
								(this.w = !1),
									(this.d.style.borderBottomLeftRadius = "2px"),
									(this.d.style.borderBottomRightRadius = "2px"),
									wt.dispose();
							},
							anchorAlignment: Q.AnchorAlignment.LEFT,
						});
					}
					L() {
						const wt = this.D.getValue("scm.showInputActionButton");
						return !this.n || !wt || this.n?.isEmpty() === !0
							? 0
							: this.n.dropdownActions.length === 0
								? 26
								: 39;
					}
					clearValidation() {
						this.v?.close(), (this.v = void 0), (this.w = !1);
					}
					dispose() {
						(this.input = void 0),
							this.t.dispose(),
							this.clearValidation(),
							this.o.dispose();
					}
				};
				Yt = kt = Ne(
					[
						j(2, c.$6j),
						j(3, O.$QO),
						j(4, g.$uZ),
						j(5, y.$gj),
						j(6, a.$Li),
						j(7, d.$d7),
						j(8, h.$Wxb),
						j(9, X.$7rb),
						j(10, h.$Xxb),
					],
					Yt,
				);
				let ni = class extends E.$TMb {
					get viewMode() {
						return this.sb;
					}
					set viewMode(wt) {
						this.sb !== wt &&
							((this.sb = wt),
							(this.viewSortKey = this.Lc()),
							this.Oc(),
							this.Ec(),
							this.cc.fire(wt),
							this.kc.set(wt),
							this.Pc(this.Fb.getFileIconTheme()),
							this.xc.store(
								"scm.viewMode",
								wt,
								M.StorageScope.WORKSPACE,
								M.StorageTarget.USER,
							));
					}
					get viewSortKey() {
						return this.dc;
					}
					set viewSortKey(wt) {
						this.dc !== wt &&
							((this.dc = wt),
							this.Oc(),
							this.lc.set(wt),
							this.ec.fire(wt),
							this.sb === at.List &&
								this.xc.store(
									"scm.viewSortKey",
									wt,
									M.StorageScope.WORKSPACE,
									M.StorageTarget.USER,
								));
					}
					constructor(
						wt,
						We,
						_e,
						Si,
						gi,
						ki,
						Pi,
						Hi,
						Ji,
						cn,
						un,
						yn,
						Rn,
						_i,
						Bn,
						Mn,
						zn,
						$n,
						Ln,
					) {
						super(
							{ ...wt, titleMenuId: p.$XX.SCMTitle },
							cn,
							yn,
							Bn,
							Mn,
							_i,
							Rn,
							zn,
							un,
							$n,
							Ln,
						),
							(this.sc = We),
							(this.tc = _e),
							(this.uc = Si),
							(this.vc = gi),
							(this.wc = ki),
							(this.xc = Pi),
							(this.yc = Hi),
							(this.zc = Ji),
							(this.cc = new t.$re()),
							(this.onDidChangeViewMode = this.cc.event),
							(this.ec = new t.$re()),
							(this.onDidChangeViewSortKey = this.ec.event),
							(this.fc = new w.$0c()),
							(this.gc = new w.$Zc()),
							(this.hc = new $.$Hh()),
							(this.ic = new $.$Gh()),
							(this.jc = new $.$Gh()),
							(this.rc = new w.$Zc()),
							(this.sb = this.Kc()),
							(this.dc = this.Lc()),
							(this.kc = e.$aQc.SCMViewMode.bindTo(Mn)),
							this.kc.set(this.sb),
							(this.lc = e.$aQc.SCMViewSortKey.bindTo(Mn)),
							this.lc.set(this.viewSortKey),
							(this.mc = e.$aQc.SCMViewAreAllRepositoriesCollapsed.bindTo(Mn)),
							(this.nc = e.$aQc.SCMViewIsAnyRepositoryCollapsible.bindTo(Mn)),
							(this.oc = e.$aQc.SCMProvider.bindTo(Mn)),
							(this.pc = e.$aQc.SCMProviderRootUri.bindTo(Mn)),
							(this.qc = e.$aQc.SCMProviderHasRootUri.bindTo(Mn)),
							(this.b = new t.$re()),
							(this.c = {
								height: void 0,
								width: void 0,
								onDidChange: this.b.event,
							}),
							this.xc.onDidChangeValue(
								M.StorageScope.WORKSPACE,
								void 0,
								this.rc,
							)(
								(wn) => {
									switch (wn.key) {
										case "scm.viewMode":
											this.viewMode = this.Kc();
											break;
										case "scm.viewSortKey":
											this.viewSortKey = this.Lc();
											break;
									}
								},
								this,
								this.rc,
							),
							this.xc.onWillSaveState(
								(wn) => {
									(this.viewMode = this.Kc()),
										(this.viewSortKey = this.Lc()),
										this.Nc();
								},
								this,
								this.rc,
							),
							t.Event.any(
								this.vc.onDidAddRepository,
								this.vc.onDidRemoveRepository,
							)(() => this.eb.fire(), this, this.rc),
							this.rc.add(this.ic),
							this.rc.add(this.jc);
					}
					X(wt = this.c.height, We = this.c.width) {
						wt !== void 0 &&
							(We !== void 0 && super.X(wt, We),
							(this.c.height = wt),
							(this.c.width = We),
							this.b.fire(),
							(this.m.style.height = `${wt}px`),
							this.n.layout(wt, We));
					}
					W(wt) {
						super.W(wt),
							(this.m = (0, C.$fhb)(wt, (0, C.$)(".scm-view.show-file-icons"))),
							this.m.classList.add("file-icon-themable-tree"),
							this.m.classList.add("show-file-icons");
						const We = () =>
							this.m.classList.toggle(
								"show-actions",
								this.Ab.getValue("scm.alwaysShowActions"),
							);
						t.Event.filter(
							this.Ab.onDidChangeConfiguration,
							(gi) => gi.affectsConfiguration("scm.alwaysShowActions"),
							this.rc,
						)(We, this, this.rc),
							We();
						const _e = () => {
							const gi = this.Ab.getValue("scm.providerCountBadge");
							this.m.classList.toggle("hide-provider-counts", gi === "hidden"),
								this.m.classList.toggle("auto-provider-counts", gi === "auto");
						};
						t.Event.filter(
							this.Ab.onDidChangeConfiguration,
							(gi) => gi.affectsConfiguration("scm.providerCountBadge"),
							this.rc,
						)(_e, this, this.rc),
							_e();
						const Si = this.Mc();
						this.Cc(this.m, Si),
							this.onDidChangeBodyVisibility(
								async (gi) => {
									gi
										? this.hc.queue(async () => {
												await this.n.setInput(this.wc, Si),
													t.Event.filter(
														this.Ab.onDidChangeConfiguration,
														(ki) =>
															ki.affectsConfiguration(
																"scm.alwaysShowRepositories",
															),
														this.gc,
													)(
														() => {
															this.bc(), this.Oc();
														},
														this,
														this.gc,
													),
													t.Event.filter(
														this.Ab.onDidChangeConfiguration,
														(ki) =>
															ki.affectsConfiguration(
																"scm.inputMinLineCount",
															) ||
															ki.affectsConfiguration(
																"scm.inputMaxLineCount",
															) ||
															ki.affectsConfiguration("scm.showActionButton"),
														this.gc,
													)(() => this.Oc(), this, this.gc),
													this.tc.onDidActiveEditorChange(
														this.Ec,
														this,
														this.gc,
													),
													this.wc.onDidChangeVisibleRepositories(
														this.Fc,
														this,
														this.gc,
													),
													this.Fc({
														added: this.wc.visibleRepositories,
														removed: S.Iterable.empty(),
													}),
													typeof this.f == "number" &&
														((this.n.scrollTop = this.f), (this.f = void 0)),
													this.Rc();
											})
										: (this.gc.clear(),
											this.Fc({
												added: S.Iterable.empty(),
												removed: [...this.fc.keys()],
											}),
											(this.f = this.n.scrollTop),
											this.Rc());
								},
								this,
								this.rc,
							),
							this.rc.add(this.Db.createInstance(Ui)),
							this.Fb.onDidFileIconThemeChange(this.Pc, this, this.rc),
							this.Pc(this.Fb.getFileIconTheme());
					}
					Cc(wt, We) {
						const _e = (0, C.$)(
							".scm-overflow-widgets-container.monaco-editor",
						);
						(this.L = this.Db.createInstance(Xe, this.c, _e, (cn, un) => {
							try {
								this.n.updateElementHeight(cn, un);
							} catch {}
						})),
							(this.ab = this.Db.createInstance(Ye)),
							(this.t = this.Db.createInstance(m.$uPb, {
								onDidChangeVisibility: this.onDidChangeBodyVisibility,
							})),
							this.rc.add(this.t);
						const Si = new Lt(() => this.Ic());
						Si.onWillRun(() => this.n.domFocus(), this, this.rc),
							this.rc.add(Si);
						const gi = new Vt();
						gi.onWillRun(() => this.n.domFocus(), this, this.rc),
							this.rc.add(gi);
						const ki = new Gt();
						ki.onWillRun(() => this.n.domFocus(), this, this.rc),
							this.rc.add(ki);
						const Pi = this.Db.createInstance(
							Ut,
							this.Cb.getViewLocationById(this.id),
							this.zc.getSideBarPosition(),
						);
						this.rc.add(Pi);
						const Hi = this.Db.createInstance(bi, () => this.viewMode);
						this.rc.add(Hi);
						const Ji = (0, bt.$Mwb)("scm.compactFolders", !0, this.Ab);
						(this.n = this.Db.createInstance(
							l.$GMb,
							"SCM Tree Repo",
							wt,
							new Jt(this.L),
							new si(),
							[
								this.L,
								this.ab,
								this.Db.createInstance(
									Z.$OPc,
									p.$XX.SCMTitle,
									(0, s.$GPc)(this.Db),
								),
								this.Db.createInstance(It, (0, s.$GPc)(this.Db)),
								this.Db.createInstance(
									xt,
									() => this.viewMode,
									this.t,
									(0, s.$GPc)(this.Db),
									Si,
								),
							],
							Hi,
							{
								horizontalScrolling: !1,
								setRowLineHeight: !1,
								transformOptimization: !1,
								filter: new Zt(),
								dnd: new ze(this.Db),
								identityProvider: new Wt(),
								sorter: new ci(
									() => this.viewMode,
									() => this.viewSortKey,
								),
								keyboardNavigationLabelProvider: this.Db.createInstance(
									ri,
									() => this.viewMode,
								),
								overrideStyles: this.Zb().listOverrideStyles,
								compressionEnabled: Ji.get(),
								collapseByDefault: (cn) =>
									(0, s.$oPc)(cn) ||
									(0, s.$rPc)(cn) ||
									(0, s.$tPc)(cn) ||
									(0, s.$zPc)(cn)
										? !1
										: (We?.expanded ?? []).indexOf($i(cn)) === -1,
								accessibilityProvider: this.Db.createInstance(tt),
							},
						)),
							this.rc.add(this.n),
							this.n.onDidOpen(this.Dc, this, this.rc),
							this.n.onContextMenu(this.Gc, this, this.rc),
							this.n.onDidScroll(this.L.clearValidation, this.L, this.rc),
							t.Event.filter(
								this.n.onDidChangeCollapseState,
								(cn) => (0, s.$oPc)(cn.node.element?.element),
								this.rc,
							)(this.Rc, this, this.rc),
							this.rc.add(
								(0, Re.autorun)((cn) => {
									this.n.updateOptions({ compressionEnabled: Ji.read(cn) });
								}),
							),
							(0, C.$fhb)(wt, _e);
					}
					async Dc(wt) {
						if (wt.element) {
							if ((0, s.$oPc)(wt.element)) {
								this.wc.focus(wt.element);
								return;
							} else if ((0, s.$pPc)(wt.element)) {
								this.wc.focus(wt.element.repository);
								const We = this.L.getRenderedInputWidget(wt.element);
								if (We) {
									We.focus(), this.n.setFocus([], wt.browserEvent);
									const _e = this.n.getSelection();
									_e.length === 1 &&
										_e[0] === wt.element &&
										setTimeout(() => this.n.setSelection([]));
								}
								return;
							} else if ((0, s.$qPc)(wt.element)) {
								this.wc.focus(wt.element.repository),
									this.ab.focusActionButton(wt.element),
									this.n.setFocus([], wt.browserEvent);
								return;
							} else if ((0, s.$rPc)(wt.element)) {
								const We = wt.element.provider,
									_e = S.Iterable.find(
										this.vc.repositories,
										(Si) => Si.provider === We,
									);
								_e && this.wc.focus(_e);
								return;
							} else if ((0, s.$sPc)(wt.element)) {
								if (
									wt.element.command?.id === re.$zWb ||
									wt.element.command?.id === re.$AWb
								)
									if (
										(0, C.$9gb)(wt.browserEvent) &&
										wt.browserEvent.button === 1
									) {
										const Si = wt.element.resourceGroup,
											gi = `${Si.provider.label}: ${Si.label}`;
										await Ae.$XPc.openMultiFileDiffEditor(
											this.tc,
											gi,
											Si.provider.rootUri,
											Si.id,
											{
												...wt.editorOptions,
												viewState: {
													revealData: {
														resource: {
															original: wt.element.multiDiffEditorOriginalUri,
															modified: wt.element.multiDiffEditorModifiedUri,
														},
													},
												},
												preserveFocus: !0,
											},
										);
									} else
										await this.sc.executeCommand(
											wt.element.command.id,
											...(wt.element.command.arguments || []),
											wt,
										);
								else if (
									(await wt.element.open(!!wt.editorOptions.preserveFocus),
									wt.editorOptions.pinned)
								) {
									const Si = this.tc.activeEditorPane;
									Si?.group.pinEditor(Si.input);
								}
								const We = wt.element.resourceGroup.provider,
									_e = S.Iterable.find(
										this.vc.repositories,
										(Si) => Si.provider === We,
									);
								_e && this.wc.focus(_e);
							} else if ((0, s.$tPc)(wt.element)) {
								const We = wt.element.context.provider,
									_e = S.Iterable.find(
										this.vc.repositories,
										(Si) => Si.provider === We,
									);
								_e && this.wc.focus(_e);
								return;
							} else if ((0, s.$uPc)(wt.element)) {
								this.wc.focus(wt.element.repository);
								return;
							} else if ((0, s.$vPc)(wt.element)) {
								this.wc.focus(wt.element.historyItemGroup.repository);
								return;
							} else if ((0, s.$wPc)(wt.element)) {
								const We = wt.element.historyItemViewModel.historyItem,
									_e = We.parentIds.length > 0 ? We.parentIds[0] : void 0,
									gi = await wt.element.repository.provider.historyProvider
										.get()
										?.provideHistoryItemChanges(We.id, _e);
								if (gi) {
									const ki = `${We.id.substring(0, 8)} - ${We.message}`,
										Pi = wt.element.repository.provider.rootUri,
										Hi = Pi ? Pi.path : wt.element.repository.provider.label,
										Ji = I.URI.from(
											{
												scheme: "scm-history-item",
												path: `${Hi}/${_e}..${We.id}`,
											},
											!0,
										);
									await this.sc.executeCommand(
										"_workbench.openMultiDiffEditor",
										{ title: ki, multiDiffSourceUri: Ji, resources: gi },
									);
								}
								this.wc.focus(wt.element.repository);
								return;
							} else if ((0, s.$yPc)(wt.element)) {
								wt.element.originalUri &&
									wt.element.modifiedUri &&
									(await this.sc.executeCommand(
										re.$AWb,
										...(0, s.$BPc)(
											wt.element.uri,
											wt.element.originalUri,
											wt.element.modifiedUri,
										),
										wt,
									)),
									this.wc.focus(
										wt.element.historyItem.historyItemGroup.repository,
									);
								return;
							} else if ((0, s.$zPc)(wt.element)) {
								this.wc.focus(wt.element.context.historyItemGroup.repository);
								return;
							}
						} else return;
					}
					Ec() {
						if (!this.Ab.getValue("scm.autoReveal")) return;
						const wt = N.$A1.getOriginalUri(this.tc.activeEditor, {
							supportSideBySide: N.SideBySideEditor.PRIMARY,
						});
						wt &&
							((this.n
								.getFocus()
								.some(
									(We) =>
										(0, s.$sPc)(We) && this.yc.extUri.isEqual(We.sourceUri, wt),
								) &&
								this.n
									.getSelection()
									.some(
										(We) =>
											(0, s.$sPc)(We) &&
											this.yc.extUri.isEqual(We.sourceUri, wt),
									)) ||
								this.ic.queue(() =>
									this.hc.queue(async () => {
										for (const We of this.wc.visibleRepositories)
											if (this.fc.get(We))
												for (
													let Si = We.provider.groups.length - 1;
													Si >= 0;
													Si--
												) {
													const gi = We.provider.groups[Si],
														ki =
															this.viewMode === at.Tree
																? gi.resourceTree.getNode(wt)?.element
																: gi.resources.find((Pi) =>
																		this.yc.extUri.isEqual(Pi.sourceUri, wt),
																	);
													if (ki) {
														await this.n.expandTo(ki),
															this.n.reveal(ki),
															this.n.setSelection([ki]),
															this.n.setFocus([ki]);
														return;
													}
												}
									}),
								));
					}
					Fc({ added: wt, removed: We }) {
						for (const _e of wt) {
							const Si = new w.$Zc();
							Si.add(_e.provider.onDidChange(() => this.Oc(_e))),
								Si.add(_e.input.onDidChangeVisibility(() => this.Oc(_e))),
								Si.add(
									_e.provider.onDidChangeResourceGroups(() => this.Oc(_e)),
								);
							const gi = Si.add(new w.$0c()),
								ki = () => {
									for (const [Pi] of gi)
										_e.provider.groups.includes(Pi) || gi.deleteAndDispose(Pi);
									for (const Pi of _e.provider.groups)
										if (!gi.has(Pi)) {
											const Hi = new w.$Zc();
											Hi.add(Pi.onDidChange(() => this.Oc(_e))),
												Hi.add(Pi.onDidChangeResources(() => this.Oc(_e))),
												gi.set(Pi, Hi);
										}
								};
							Si.add(_e.provider.onDidChangeResourceGroups(ki)),
								ki(),
								this.fc.set(_e, Si);
						}
						for (const _e of We) this.fc.deleteAndDispose(_e);
						this.Oc(), this.Ec();
					}
					Gc(wt) {
						if (!wt.element) {
							const ki = this.uc.getMenuActions(Li.ViewSort, this.Bb),
								Pi = [];
							return (
								(0, le.$Jyb)(ki, Pi),
								this.zb.showContextMenu({
									getAnchor: () => wt.anchor,
									getActions: () => Pi,
									onHide: () => {},
								})
							);
						}
						const We = wt.element;
						let _e = We,
							Si = [],
							gi = new Lt(() => this.Ic());
						if ((0, s.$oPc)(We)) {
							const Pi = this.wc.menus.getRepositoryMenus(
								We.provider,
							).repositoryContextMenu;
							(_e = We.provider),
								(gi = new Z.$NPc(() => this.Hc())),
								(Si = (0, s.$EPc)(Pi));
						} else if (!((0, s.$pPc)(We) || (0, s.$qPc)(We))) {
							if ((0, s.$rPc)(We)) {
								const Pi = this.wc.menus
									.getRepositoryMenus(We.provider)
									.getResourceGroupMenu(We);
								Si = (0, s.$EPc)(Pi);
							} else if ((0, s.$sPc)(We)) {
								const Pi = this.wc.menus
									.getRepositoryMenus(We.resourceGroup.provider)
									.getResourceMenu(We);
								Si = (0, s.$EPc)(Pi);
							} else if ((0, s.$tPc)(We))
								if (We.element) {
									const Pi = this.wc.menus
										.getRepositoryMenus(We.element.resourceGroup.provider)
										.getResourceMenu(We.element);
									Si = (0, s.$EPc)(Pi);
								} else {
									const Pi = this.wc.menus
										.getRepositoryMenus(We.context.provider)
										.getResourceFolderMenu(We.context);
									Si = (0, s.$EPc)(Pi);
								}
							else if ((0, s.$uPc)(We)) {
								const Pi = this.wc.menus
									.getRepositoryMenus(We.repository.provider)
									.historyProviderMenu?.getHistoryItemGroupContextMenu(We);
								Pi &&
									((gi = new Vt()),
									(0, le.$Jyb)(Pi, { shouldForwardArgs: !0 }, Si));
							} else if ((0, s.$vPc)(We)) {
								const Pi = this.wc.menus
									.getRepositoryMenus(We.historyItemGroup.repository.provider)
									.historyProviderMenu?.getHistoryItemMenu(We);
								Pi && ((gi = new Gt()), (Si = (0, s.$EPc)(Pi)));
							} else if ((0, s.$wPc)(We)) {
								const Pi = this.wc.menus
									.getRepositoryMenus(We.repository.provider)
									.historyProviderMenu?.getHistoryItemMenu2(We);
								Pi && ((gi = new Mt(() => this.Jc())), (Si = (0, s.$EPc)(Pi)));
							}
						}
						gi.onWillRun(() => this.n.domFocus()),
							this.zb.showContextMenu({
								getAnchor: () => wt.anchor,
								getActions: () => Si,
								getActionsContext: () => _e,
								actionRunner: gi,
							});
					}
					Hc() {
						const wt = this.n
								.getFocus()
								.filter((_e) => !!_e && (0, s.$oPc)(_e)),
							We = this.n
								.getSelection()
								.filter((_e) => !!_e && (0, s.$oPc)(_e));
						return Array.from(new Set([...wt, ...We]));
					}
					Ic() {
						return this.n
							.getSelection()
							.filter((wt) => !!wt && !(0, s.$rPc)(wt));
					}
					Jc() {
						return this.n
							.getSelection()
							.filter((wt) => !!wt && (0, s.$wPc)(wt));
					}
					Kc() {
						let wt =
							this.Ab.getValue("scm.defaultViewMode") === "list"
								? at.List
								: at.Tree;
						const We = this.xc.get("scm.viewMode", M.StorageScope.WORKSPACE);
						return typeof We == "string" && (wt = We), wt;
					}
					Lc() {
						if (this.sb === at.Tree) return pi.Path;
						let wt;
						switch (this.Ab.getValue("scm.defaultViewSortKey")) {
							case "name":
								wt = pi.Name;
								break;
							case "status":
								wt = pi.Status;
								break;
							default:
								wt = pi.Path;
								break;
						}
						const _e = this.xc.get("scm.viewSortKey", M.StorageScope.WORKSPACE);
						return typeof _e == "string" && (wt = _e), wt;
					}
					Mc() {
						const wt = this.xc.get("scm.viewState2", M.StorageScope.WORKSPACE);
						if (wt)
							try {
								return JSON.parse(wt);
							} catch {
								return;
							}
					}
					Nc() {
						this.n &&
							this.xc.store(
								"scm.viewState2",
								JSON.stringify(this.n.getViewState()),
								M.StorageScope.WORKSPACE,
								M.StorageTarget.MACHINE,
							);
					}
					Oc(wt) {
						this.jc.queue(() =>
							this.hc.queue(async () => {
								const We = this.L.getFocusedInput();
								wt && this.n.hasNode(wt)
									? await this.n.updateChildren(wt)
									: await this.n.updateChildren(void 0),
									We && this.L.getRenderedInputWidget(We)?.focus(),
									this.Qc(),
									this.Rc();
							}),
						);
					}
					Pc(wt) {
						this.m.classList.toggle(
							"list-view-mode",
							this.viewMode === at.List,
						),
							this.m.classList.toggle(
								"tree-view-mode",
								this.viewMode === at.Tree,
							),
							this.m.classList.toggle(
								"align-icons-and-twisties",
								(this.viewMode === at.List && wt.hasFileIcons) ||
									(wt.hasFileIcons && !wt.hasFolderIcons),
							),
							this.m.classList.toggle(
								"hide-arrows",
								this.viewMode === at.Tree && wt.hidesExplorerArrows === !0,
							);
					}
					Qc() {
						if (
							!this.Ab.getValue("scm.alwaysShowRepositories") &&
							this.fc.size === 1
						) {
							const We = S.Iterable.first(this.fc.keys()).provider;
							this.oc.set(We.contextValue),
								this.pc.set(We.rootUri?.toString()),
								this.qc.set(!!We.rootUri);
						} else this.oc.set(void 0), this.pc.set(void 0), this.qc.set(!1);
					}
					Rc() {
						if (!this.isBodyVisible() || this.fc.size === 1) {
							this.nc.set(!1), this.mc.set(!1);
							return;
						}
						this.nc.set(
							this.wc.visibleRepositories.some(
								(wt) => this.n.hasNode(wt) && this.n.isCollapsible(wt),
							),
						),
							this.mc.set(
								this.wc.visibleRepositories.every(
									(wt) =>
										this.n.hasNode(wt) &&
										(!this.n.isCollapsible(wt) || this.n.isCollapsed(wt)),
								),
							);
					}
					collapseAllRepositories() {
						for (const wt of this.wc.visibleRepositories)
							this.n.isCollapsible(wt) && this.n.collapse(wt);
					}
					expandAllRepositories() {
						for (const wt of this.wc.visibleRepositories)
							this.n.isCollapsible(wt) && this.n.expand(wt);
					}
					focusPreviousInput() {
						this.hc.queue(() => this.Sc(-1));
					}
					focusNextInput() {
						this.hc.queue(() => this.Sc(1));
					}
					async Sc(wt) {
						if (
							!this.wc.focusedRepository ||
							this.wc.visibleRepositories.length === 0
						)
							return;
						let We = this.wc.focusedRepository.input;
						const _e = this.wc.visibleRepositories;
						if (
							!(
								_e.length === 1 &&
								this.L.getRenderedInputWidget(We)?.hasFocus() === !0
							)
						) {
							if (
								_e.length > 1 &&
								this.L.getRenderedInputWidget(We)?.hasFocus() === !0
							) {
								const Si = _e.indexOf(this.wc.focusedRepository),
									gi = (0, ke.rot)(Si + wt, _e.length);
								We = _e[gi].input;
							}
							await this.n.expandTo(We),
								this.n.reveal(We),
								this.L.getRenderedInputWidget(We)?.focus();
						}
					}
					focusPreviousResourceGroup() {
						this.hc.queue(() => this.Tc(-1));
					}
					focusNextResourceGroup() {
						this.hc.queue(() => this.Tc(1));
					}
					async Tc(wt) {
						if (
							!this.wc.focusedRepository ||
							this.wc.visibleRepositories.length === 0
						)
							return;
						const We = (0, C.$Kgb)(this.n.getHTMLElement()),
							_e = this.wc.focusedRepository.provider.groups,
							Si = this.n.getFocus().find((Pi) => (0, s.$rPc)(Pi)),
							gi = We && Si ? _e.indexOf(Si) : -1;
						let ki;
						if (gi === -1) {
							for (const Pi of _e)
								if (this.n.hasNode(Pi)) {
									ki = Pi;
									break;
								}
						} else {
							let Pi = (0, ke.rot)(gi + wt, _e.length);
							for (; Pi !== gi; ) {
								if (this.n.hasNode(_e[Pi])) {
									ki = _e[Pi];
									break;
								}
								Pi = (0, ke.rot)(Pi + wt, _e.length);
							}
						}
						ki &&
							(await this.n.expandTo(ki),
							this.n.reveal(ki),
							this.n.setSelection([ki]),
							this.n.setFocus([ki]),
							this.n.domFocus());
					}
					shouldShowWelcome() {
						return this.vc.repositoryCount === 0;
					}
					getActionsContext() {
						return this.wc.visibleRepositories.length === 1
							? this.wc.visibleRepositories[0].provider
							: void 0;
					}
					focus() {
						super.focus(),
							this.hc.queue(
								() =>
									new Promise((wt) => {
										if (this.isExpanded()) {
											if (this.n.getFocus().length === 0)
												for (const We of this.wc.visibleRepositories) {
													const _e = this.L.getRenderedInputWidget(We.input);
													if (_e) {
														_e.focus(), wt();
														return;
													}
												}
											this.n.domFocus(), wt();
										}
									}),
							);
					}
					dispose() {
						this.gc.dispose(),
							this.rc.dispose(),
							this.fc.dispose(),
							super.dispose();
					}
				};
				(e.$bQc = ni),
					(e.$bQc = ni =
						Ne(
							[
								j(1, n.$ek),
								j(2, u.$IY),
								j(3, p.$YX),
								j(4, d.$c7),
								j(5, d.$d7),
								j(6, M.$lq),
								j(7, He.$Vl),
								j(8, rt.$mEb),
								j(9, g.$uZ),
								j(10, b.$iP),
								j(11, h.$Xxb),
								j(12, a.$Li),
								j(13, L.$K1),
								j(14, y.$gj),
								j(15, c.$6j),
								j(16, X.$7rb),
								j(17, Y.$km),
								j(18, qe.$Uyb),
							],
							ni,
						));
				let bi = class extends w.$1c {
					constructor(wt, We, _e) {
						super(), (this.b = wt), (this.c = We), (this.f = _e);
					}
					async getChildren(wt) {
						const We = this.f.visibleRepositories.length,
							_e = this.c.getValue("scm.showActionButton") === !0,
							Si = this.c.getValue("scm.alwaysShowRepositories") === !0;
						if ((0, s.$nPc)(wt) && (We > 1 || Si))
							return this.f.visibleRepositories;
						if (((0, s.$nPc)(wt) && We === 1 && !Si) || (0, s.$oPc)(wt)) {
							const gi = [];
							wt = (0, s.$oPc)(wt) ? wt : this.f.visibleRepositories[0];
							const ki = wt.provider.actionButton,
								Pi = wt.provider.groups;
							return (
								wt.input.visible && gi.push(wt.input),
								_e &&
									ki &&
									gi.push({ type: "actionButton", repository: wt, button: ki }),
								(Pi.some((Ji) => Ji.resources.length > 0) ||
									(We === 1 && (!_e || !ki))) &&
									gi.push(...Pi),
								gi
							);
						} else if ((0, s.$rPc)(wt)) {
							if (this.b() === at.List) return wt.resources;
							if (this.b() === at.Tree) {
								const gi = [];
								for (const ki of wt.resourceTree.root.children)
									gi.push(
										ki.element && ki.childrenCount === 0 ? ki.element : ki,
									);
								return gi;
							}
						} else if ((0, s.$tPc)(wt) || (0, s.$zPc)(wt)) {
							const gi = [];
							for (const ki of wt.children)
								gi.push(ki.element && ki.childrenCount === 0 ? ki.element : ki);
							return gi;
						}
						return [];
					}
					getParent(wt) {
						if ((0, s.$tPc)(wt)) {
							if (wt.parent === wt.context.resourceTree.root) return wt.context;
							if (wt.parent) return wt.parent;
							throw new Error("Invalid element passed to getParent");
						} else if ((0, s.$sPc)(wt)) {
							if (this.b() === at.List) return wt.resourceGroup;
							const _e = wt.resourceGroup.resourceTree.getNode(
								wt.sourceUri,
							)?.parent;
							if (!_e) throw new Error("Invalid element passed to getParent");
							return _e === wt.resourceGroup.resourceTree.root
								? wt.resourceGroup
								: _e;
						} else {
							if ((0, s.$pPc)(wt)) return wt.repository;
							if ((0, s.$rPc)(wt)) {
								const We = this.f.visibleRepositories.find(
									(_e) => _e.provider === wt.provider,
								);
								if (!We) throw new Error("Invalid element passed to getParent");
								return We;
							} else throw new Error("Unexpected call to getParent");
						}
					}
					hasChildren(wt) {
						if ((0, s.$nPc)(wt)) return this.f.visibleRepositories.length !== 0;
						if ((0, s.$oPc)(wt)) return !0;
						if ((0, s.$pPc)(wt)) return !1;
						if ((0, s.$qPc)(wt)) return !1;
						if ((0, s.$rPc)(wt)) return !0;
						if ((0, s.$sPc)(wt)) return !1;
						if (v.$06.isResourceNode(wt)) return wt.childrenCount > 0;
						if ((0, s.$uPc)(wt)) return !0;
						if ((0, s.$vPc)(wt)) return !0;
						if ((0, s.$wPc)(wt)) return !1;
						if ((0, s.$yPc)(wt)) return !1;
						if ((0, s.$APc)(wt)) return !1;
						throw new Error("hasChildren not implemented.");
					}
				};
				bi = Ne([j(1, y.$gj), j(2, d.$d7)], bi);
				class fi {
					constructor(wt, We, _e, Si) {
						(this.d = wt),
							(this.f = We),
							(this.i = _e),
							(this.k = Si),
							(this.c = new w.$2c());
					}
					dispose() {
						this.c?.dispose();
					}
					setButton(wt) {
						if ((this.m(), !!wt)) {
							if (wt.secondaryCommands?.length) {
								const We = [];
								for (let _e = 0; _e < wt.secondaryCommands.length; _e++) {
									const Si = wt.secondaryCommands[_e];
									for (const gi of Si)
										We.push(
											new o.$rj(
												gi.id,
												gi.title,
												void 0,
												!0,
												async () =>
													await this.n(gi.id, ...(gi.arguments || [])),
											),
										);
									Si.length && We.push(new o.$tj());
								}
								We.pop(),
									(this.b = new ae.$pob(this.d, {
										actions: We,
										addPrimaryActionToDropdown: !1,
										contextMenuProvider: this.f,
										title: wt.command.tooltip,
										supportIcons: !0,
										...ve.$lyb,
									}));
							} else
								this.b = new ae.$oob(this.d, {
									supportIcons: !0,
									supportShortLabel: !!wt.description,
									title: wt.command.tooltip,
									...ve.$lyb,
								});
							(this.b.enabled = wt.enabled),
								(this.b.label = wt.command.title),
								this.b instanceof ae.$oob &&
									wt.description &&
									(this.b.labelShort = wt.description),
								this.b.onDidClick(
									async () =>
										await this.n(
											wt.command.id,
											...(wt.command.arguments || []),
										),
									null,
									this.c.value,
								),
								this.c.value.add(this.b);
						}
					}
					focus() {
						this.b?.focus();
					}
					m() {
						(this.c.value = new w.$Zc()),
							(this.b = void 0),
							(0, C.$9fb)(this.d);
					}
					async n(wt, ...We) {
						try {
							await this.i.executeCommand(wt, ...We);
						} catch (_e) {
							this.k.error(_e);
						}
					}
				}
				(e.$cQc = fi), (0, R.$zYb)(".scm-view .scm-editor-container");
			},
		)

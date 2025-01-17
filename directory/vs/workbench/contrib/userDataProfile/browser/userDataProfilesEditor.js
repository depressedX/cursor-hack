import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/event.js';
import '../../../../base/common/themables.js';
import '../../../../nls.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/userDataProfile/common/userDataProfile.js';
import '../../../browser/parts/editor/editorPane.js';
import '../../../common/editor/editorInput.js';
import '../../../services/userDataProfile/common/userDataProfile.js';
import '../../../../base/browser/ui/splitview/splitview.js';
import '../../../../base/browser/ui/button/button.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../common/theme.js';
import '../../../../platform/list/browser/listService.js';
import '../../../../base/browser/ui/list/list.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/browser/ui/inputbox/inputBox.js';
import '../../../../base/browser/ui/toggle/toggle.js';
import '../../../services/userDataProfile/common/userDataProfileIcons.js';
import '../../../services/userDataProfile/browser/iconSelectBox.js';
import '../../../../base/browser/keyboardEvent.js';
import '../../../../base/common/keyCodes.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../base/browser/ui/hover/hoverWidget.js';
import '../../../../base/browser/ui/selectBox/selectBox.js';
import '../../../../base/common/uri.js';
import '../../../../platform/progress/common/progress.js';
import '../../../../base/common/types.js';
import '../../../../base/common/resources.js';
import '../../../../base/browser/ui/tree/abstractTree.js';
import '../../../browser/labels.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/quickinput/common/quickInput.js';
import './userDataProfilesEditorModel.js';
import '../../../../platform/actions/browser/toolbar.js';
import '../../../../base/browser/ui/hover/hoverDelegateFactory.js';
import '../../../../base/common/codicons.js';
import '../../../../base/browser/ui/radio/radio.js';
import '../../../../base/common/htmlContent.js';
import '../../preferences/common/settingsEditorColorRegistry.js';
import '../../../../base/browser/markdownRenderer.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../css!vs/workbench/contrib/userDataProfile/browser/media/userDataProfilesEditor.js';
define(
			de[3892],
			he([
				1, 0, 7, 50, 6, 26, 4, 49, 5, 21, 32, 35, 129, 217, 223, 133, 279, 183,
				106, 51, 123, 93, 431, 3, 292, 268, 1903, 1896, 114, 27, 72, 160, 596,
				9, 84, 28, 19, 411, 233, 57, 63, 3891, 173, 95, 14, 2683, 94, 613, 267,
				68, 2532,
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
				var Y, ie, ne, ee, _;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$u1c = e.$t1c = e.$s1c = e.$r1c = void 0),
					(e.$r1c = (0, b.$wP)(
						"profiles.sashBorder",
						s.$rFb,
						(0, C.localize)(11150, null),
					));
				const te = (0, f.$Eyb)({
					listActiveSelectionBackground: b.$8P,
					listActiveSelectionForeground: b.$IP,
					listFocusAndSelectionBackground: b.$8P,
					listFocusAndSelectionForeground: b.$IP,
					listFocusBackground: b.$8P,
					listFocusForeground: b.$IP,
					listHoverForeground: b.$IP,
					listHoverBackground: b.$8P,
					listHoverOutline: b.$8P,
					listFocusOutline: b.$8P,
					listInactiveSelectionBackground: b.$8P,
					listInactiveSelectionForeground: b.$IP,
					listInactiveFocusBackground: b.$8P,
					listInactiveFocusOutline: b.$8P,
					treeIndentGuidesStroke: void 0,
					treeInactiveIndentGuidesStroke: void 0,
				});
				let Q = class extends c.$JEb {
					static {
						Y = this;
					}
					static {
						this.ID = "workbench.editor.userDataProfiles";
					}
					constructor(Ke, Je, Te, Ee, Ie, Be, Se, ke) {
						super(Y.ID, Ke, Je, Te, Ee),
							(this.m = Ie),
							(this.r = Be),
							(this.s = Se),
							(this.u = ke),
							(this.j = []);
					}
					layout(Ke, Je) {
						if (this.a && this.b) {
							const Te = Ke.height - 20;
							this.b.layout(this.a?.clientWidth, Te),
								(this.b.el.style.height = `${Te}px`);
						}
					}
					Y(Ke) {
						this.a = (0, t.$fhb)(Ke, (0, t.$)(".profiles-editor"));
						const Je = (0, t.$fhb)(this.a, (0, t.$)(".sidebar-view")),
							Te = (0, t.$fhb)(Je, (0, t.$)(".sidebar-container")),
							Ee = (0, t.$fhb)(this.a, (0, t.$)(".contents-view")),
							Ie = (0, t.$fhb)(Ee, (0, t.$)(".contents-container"));
						(this.f = this.D(this.u.createInstance(re, Ie))),
							(this.b = new p.$vob(this.a, {
								orientation: p.Orientation.HORIZONTAL,
								proportionalLayout: !0,
							})),
							this.db(Te),
							this.b.addView(
								{
									onDidChange: w.Event.None,
									element: Je,
									minimumSize: 200,
									maximumSize: 350,
									layout: (Be, Se, ke) => {
										if (((Je.style.width = `${Be}px`), ke && this.c)) {
											const Ue = ke - 40 - 15;
											(this.c.getHTMLElement().style.height = `${Ue}px`),
												this.c.layout(Ue, Be);
										}
									},
								},
								300,
								void 0,
								!0,
							),
							this.b.addView(
								{
									onDidChange: w.Event.None,
									element: Ee,
									minimumSize: 550,
									maximumSize: Number.POSITIVE_INFINITY,
									layout: (Be, Se, ke) => {
										(Ee.style.width = `${Be}px`),
											ke && this.f?.layout(new t.$pgb(Be, ke));
									},
								},
								p.Sizing.Distribute,
								void 0,
								!0,
							),
							this.gb(),
							this.updateStyles();
					}
					updateStyles() {
						const Ke = this.h.getColor(e.$r1c);
						this.b?.style({ separatorBorder: Ke });
					}
					db(Ke) {
						this.eb((0, t.$fhb)(Ke, (0, t.$)(".new-profile-button")));
						const Je = this.u.createInstance(se),
							Te = new Z();
						this.c = this.D(
							this.u.createInstance(
								l.$yMb,
								"ProfilesList",
								(0, t.$fhb)(Ke, (0, t.$)(".profiles-list")),
								Te,
								[Je],
								{
									multipleSelectionSupport: !1,
									setRowLineHeight: !1,
									horizontalScrolling: !1,
									accessibilityProvider: {
										getAriaLabel(Ee) {
											return Ee?.name ?? "";
										},
										getWidgetAriaLabel() {
											return (0, C.localize)(11151, null);
										},
									},
									openOnSingleClick: !0,
									identityProvider: {
										getId(Ee) {
											return Ee instanceof x.$o1c ? Ee.profile.id : Ee.name;
										},
									},
									alwaysConsumeMouseWheel: !1,
								},
							),
						);
					}
					eb(Ke) {
						const Je = this.D(
							new o.$pob(Ke, {
								actions: {
									getActions: () => {
										const Te = [];
										return (
											this.j.length &&
												(Te.push(
													new i.$uj(
														"from.template",
														(0, C.localize)(11152, null),
														this.fb(),
													),
												),
												Te.push(new i.$tj())),
											Te.push(
												new i.$rj(
													"importProfile",
													(0, C.localize)(11153, null),
													void 0,
													!0,
													() => this.ib(),
												),
											),
											Te
										);
									},
								},
								addPrimaryActionToDropdown: !1,
								contextMenuProvider: this.s,
								supportIcons: !0,
								...f.$lyb,
							}),
						);
						(Je.label = (0, C.localize)(11154, null)),
							this.D(Je.onDidClick((Te) => this.createNewProfile()));
					}
					fb() {
						return this.j.map(
							(Ke) =>
								new i.$rj(`template:${Ke.url}`, Ke.name, void 0, !0, () =>
									this.createNewProfile(N.URI.parse(Ke.url)),
								),
						);
					}
					gb() {
						this.c &&
							(this.D(
								this.c.onDidChangeSelection((Ke) => {
									const [Je] = Ke.elements;
									Je instanceof x.$n1c && this.f?.render(Je);
								}),
							),
							this.D(
								this.c.onContextMenu((Ke) => {
									const Je = [];
									Ke.element || Je.push(...this.hb()),
										Ke.element instanceof x.$n1c &&
											Je.push(...Ke.element.actions[1]),
										Je.length &&
											this.s.showContextMenu({
												getAnchor: () => Ke.anchor,
												getActions: () => Je,
												getActionsContext: () => Ke.element,
											});
								}),
							),
							this.D(
								this.c.onMouseDblClick((Ke) => {
									Ke.element || this.createNewProfile();
								}),
							));
					}
					hb() {
						const Ke = [];
						Ke.push(
							new i.$rj(
								"newProfile",
								(0, C.localize)(11155, null),
								void 0,
								!0,
								() => this.createNewProfile(),
							),
						);
						const Je = this.fb();
						return (
							Je.length &&
								Ke.push(
									new i.$uj("from.template", (0, C.localize)(11156, null), Je),
								),
							Ke.push(new i.$tj()),
							Ke.push(
								new i.$rj(
									"importProfile",
									(0, C.localize)(11157, null),
									void 0,
									!0,
									() => this.ib(),
								),
							),
							Ke
						);
					}
					async ib() {
						const Ke = new $.$Zc(),
							Je = Ke.add(this.m.createQuickPick()),
							Te = (Ee) => {
								const Ie = [];
								Ee &&
									Ie.push({
										label: Je.value,
										description: (0, C.localize)(11158, null),
									}),
									Ie.push({ label: (0, C.localize)(11159, null) }),
									(Je.items = Ie);
							};
						(Je.title = (0, C.localize)(11160, null)),
							(Je.placeholder = (0, C.localize)(11161, null)),
							(Je.ignoreFocusOut = !0),
							Ke.add(Je.onDidChangeValue(Te)),
							Te(),
							(Je.matchOnLabel = !1),
							(Je.matchOnDescription = !1),
							Ke.add(
								Je.onDidAccept(async () => {
									Je.hide();
									const Ee = Je.selectedItems[0];
									if (!Ee) return;
									const Ie =
										Ee.label === Je.value
											? N.URI.parse(Je.value)
											: await this.jb();
									Ie && this.createNewProfile(Ie);
								}),
							),
							Ke.add(Je.onDidHide(() => Ke.dispose())),
							Je.show();
					}
					async createNewProfile(Ke) {
						await this.g?.createNewProfile(Ke);
					}
					selectProfile(Ke) {
						const Je = this.g?.profiles.findIndex(
							(Te) => Te instanceof x.$o1c && Te.profile.id === Ke.id,
						);
						Je !== void 0 && Je >= 0 && this.c?.setSelection([Je]);
					}
					async jb() {
						const Ke = await this.r.showOpenDialog({
							canSelectFolders: !1,
							canSelectFiles: !0,
							canSelectMany: !1,
							filters: g.$28,
							title: (0, C.localize)(11162, null),
						});
						return Ke ? Ke[0] : null;
					}
					async setInput(Ke, Je, Te, Ee) {
						await super.setInput(Ke, Je, Te, Ee),
							(this.g = await Ke.resolve()),
							this.g.getTemplates().then((Ie) => {
								(this.j = Ie), this.f && (this.f.templates = Ie);
							}),
							this.kb(),
							this.D(this.g.onDidChange((Ie) => this.kb(Ie)));
					}
					focus() {
						super.focus(), this.c?.domFocus();
					}
					kb(Ke) {
						if (!this.g) return;
						const Je = this.c?.getSelection()?.[0],
							Te = Je !== void 0 ? this.c?.element(Je) : void 0;
						if ((this.c?.splice(0, this.c.length, this.g.profiles), Ke))
							this.c?.setSelection([this.g.profiles.indexOf(Ke)]);
						else if (Te) {
							if (!this.g.profiles.includes(Te)) {
								const Ee =
									this.g.profiles.find((Ie) => Ie.name === Te.name) ??
									this.g.profiles[0];
								Ee && this.c?.setSelection([this.g.profiles.indexOf(Ee)]);
							}
						} else {
							const Ee =
								this.g.profiles.find((Ie) => Ie.active) ?? this.g.profiles[0];
							Ee && this.c?.setSelection([this.g.profiles.indexOf(Ee)]);
						}
					}
				};
				(e.$s1c = Q),
					(e.$s1c =
						Q =
						Y =
							Ne(
								[
									j(1, u.$km),
									j(2, a.$iP),
									j(3, r.$lq),
									j(4, F.$DJ),
									j(5, z.$IO),
									j(6, d.$Xxb),
									j(7, m.$Li),
								],
								Q,
							));
				class Z {
					getHeight(Ke) {
						return 22;
					}
					getTemplateId() {
						return "profileListElement";
					}
				}
				let se = class {
					constructor(Ke) {
						(this.a = Ke), (this.templateId = "profileListElement");
					}
					renderTemplate(Ke) {
						const Je = new $.$Zc(),
							Te = new $.$Zc();
						Ke.classList.add("profile-list-item");
						const Ee = (0, t.$fhb)(Ke, (0, t.$)(".profile-list-item-icon")),
							Ie = (0, t.$fhb)(Ke, (0, t.$)(".profile-list-item-label")),
							Be = (0, t.$fhb)(
								Ke,
								(0, t.$)(
									`span${E.ThemeIcon.asCSSSelector(V.$ak.circleFilled)}`,
								),
							),
							Se = (0, t.$fhb)(Ke, (0, t.$)(".profile-list-item-description"));
						(0, t.$fhb)(
							Se,
							(0, t.$)(`span${E.ThemeIcon.asCSSSelector(V.$ak.check)}`),
							(0, t.$)("span", void 0, (0, C.localize)(11163, null)),
						);
						const ke = (0, t.$fhb)(
								Ke,
								(0, t.$)(".profile-tree-item-actions-container"),
							),
							Ue = Je.add(
								this.a.createInstance(H.$Syb, ke, {
									hoverDelegate: Je.add((0, q.$dib)()),
									highlightToggledItems: !0,
								}),
							);
						return {
							label: Ie,
							icon: Ee,
							dirty: Be,
							description: Se,
							actionBar: Ue,
							disposables: Je,
							elementDisposables: Te,
						};
					}
					renderElement(Ke, Je, Te, Ee) {
						Te.elementDisposables.clear(),
							(Te.label.textContent = Ke.name),
							Te.label.classList.toggle("new-profile", Ke instanceof x.$p1c),
							(Te.icon.className = E.ThemeIcon.asClassName(
								Ke.icon ? E.ThemeIcon.fromId(Ke.icon) : I.$frc,
							)),
							Te.dirty.classList.toggle("hide", !(Ke instanceof x.$p1c)),
							Te.description.classList.toggle("hide", !Ke.active),
							Ke.onDidChange &&
								Te.elementDisposables.add(
									Ke.onDidChange((Ie) => {
										Ie.name && (Te.label.textContent = Ke.name),
											Ie.icon &&
												(Ke.icon
													? (Te.icon.className = E.ThemeIcon.asClassName(
															E.ThemeIcon.fromId(Ke.icon),
														))
													: (Te.icon.className = "hide")),
											Ie.active &&
												Te.description.classList.toggle("hide", !Ke.active);
									}),
								),
							Te.actionBar.setActions([...Ke.actions[0]], [...Ke.actions[1]]);
					}
					disposeElement(Ke, Je, Te, Ee) {
						Te.elementDisposables.clear();
					}
					disposeTemplate(Ke) {
						Ke.disposables.dispose(), Ke.elementDisposables.dispose();
					}
				};
				se = Ne([j(0, m.$Li)], se);
				let re = class extends $.$1c {
					set templates(Ke) {
						this.g.setTemplates(Ke), this.f.rerender();
					}
					constructor(Ke, Je, Te) {
						super(),
							(this.j = Je),
							(this.m = Te),
							(this.h = this.D(new $.$2c()));
						const Ee = (0, t.$fhb)(Ke, (0, t.$)(".profile-header")),
							Ie = (0, t.$fhb)(Ee, (0, t.$)(".profile-title-container"));
						this.a = (0, t.$fhb)(Ie, (0, t.$)(""));
						const Be = (0, t.$fhb)(Ke, (0, t.$)(".profile-body")),
							Se = new le(),
							ke = this.D(this.m.createInstance(be));
						(this.g = this.D(this.m.createInstance(ge))),
							(this.b = (0, t.$fhb)(Be, (0, t.$)(".profile-tree"))),
							(this.f = this.D(
								this.m.createInstance(
									l.$FMb,
									"ProfileEditor-Tree",
									this.b,
									Se,
									[
										this.D(this.m.createInstance(ue)),
										this.D(this.m.createInstance(fe)),
										this.D(this.m.createInstance(me)),
										this.D(this.m.createInstance(ve)),
										this.g,
										ke,
									],
									this.m.createInstance(oe),
									{
										multipleSelectionSupport: !1,
										horizontalScrolling: !1,
										accessibilityProvider: {
											getAriaLabel(Ue) {
												return Ue?.element ?? "";
											},
											getWidgetAriaLabel() {
												return "";
											},
										},
										identityProvider: {
											getId(Ue) {
												return Ue.element;
											},
										},
										expandOnlyOnTwistieClick: !0,
										renderIndentGuides: B.RenderIndentGuides.None,
										enableStickyScroll: !1,
										openOnSingleClick: !1,
										setRowLineHeight: !1,
										supportDynamicHeights: !0,
										alwaysConsumeMouseWheel: !1,
									},
								),
							)),
							this.f.style(te),
							this.D(
								ke.onDidChangeContentHeight((Ue) =>
									this.f.updateElementHeight(Ue, void 0),
								),
							),
							this.D(
								ke.onDidChangeSelection((Ue) => {
									Ue.selected && (this.f.setFocus([]), this.f.setSelection([]));
								}),
							),
							this.D(
								this.f.onDidChangeContentHeight((Ue) => {
									this.n && this.layout(this.n);
								}),
							),
							this.D(
								this.f.onDidChangeSelection((Ue) => {
									Ue.elements.length && ke.clearSelection();
								}),
							),
							(this.c = (0, t.$fhb)(
								Be,
								(0, t.$)(".profile-row-container.profile-button-container"),
							));
					}
					layout(Ke) {
						this.n = Ke;
						const Je = this.f.contentHeight,
							Te = Math.min(
								Je,
								Ke.height -
									(this.h.value?.element instanceof x.$p1c ? 116 : 54),
							);
						(this.b.style.height = `${Te}px`), this.f.layout(Te, Ke.width);
					}
					render(Ke) {
						if (this.h.value?.element === Ke) return;
						this.h.value?.element instanceof x.$o1c &&
							this.h.value.element.reset(),
							this.f.setInput(Ke);
						const Je = new $.$Zc();
						(this.h.value = { element: Ke, dispose: () => Je.dispose() }),
							(this.a.textContent = Ke.name),
							Je.add(
								Ke.onDidChange((Ie) => {
									Ie.name && (this.a.textContent = Ke.name);
								}),
							);
						const [Te, Ee] = Ke.titleButtons;
						if (Te?.length || Ee?.length) {
							if ((this.c.classList.remove("hide"), Ee?.length))
								for (const Ie of Ee) {
									const Be = Je.add(
										new o.$oob(this.c, { ...f.$lyb, secondary: !0 }),
									);
									(Be.label = Ie.label),
										(Be.enabled = Ie.enabled),
										Je.add(Be.onDidClick(() => this.j.showWhile(Ie.run()))),
										Je.add(
											Ie.onDidChange((Se) => {
												(0, R.$sg)(Se.enabled) || (Be.enabled = Ie.enabled),
													(0, R.$sg)(Se.label) || (Be.label = Ie.label);
											}),
										);
								}
							if (Te?.length)
								for (const Ie of Te) {
									const Be = Je.add(new o.$oob(this.c, { ...f.$lyb }));
									(Be.label = Ie.label),
										(Be.enabled = Ie.enabled),
										Je.add(Be.onDidClick(() => this.j.showWhile(Ie.run()))),
										Je.add(
											Ie.onDidChange((Se) => {
												(0, R.$sg)(Se.enabled) || (Be.enabled = Ie.enabled),
													(0, R.$sg)(Se.label) || (Be.label = Ie.label);
											}),
										),
										Je.add(
											Ke.onDidChange((Se) => {
												Se.message &&
													(Be.setTitle(Ke.message ?? Ie.label),
													Be.element.classList.toggle("error", !!Ke.message));
											}),
										);
								}
						} else this.c.classList.add("hide");
						Ke instanceof x.$p1c && this.f.focusFirst(),
							this.n && this.layout(this.n);
					}
				};
				re = Ne([j(1, A.$bO), j(2, m.$Li)], re);
				class le extends y.$Cib {
					getTemplateId({ element: Ke }) {
						return Ke;
					}
					hasDynamicHeight({ element: Ke }) {
						return Ke === "contents";
					}
					d({ element: Ke }) {
						switch (Ke) {
							case "name":
								return 72;
							case "icon":
								return 68;
							case "copyFrom":
								return 90;
							case "useForCurrent":
							case "useAsDefault":
								return 68;
							case "contents":
								return 250;
						}
					}
				}
				class oe {
					hasChildren(Ke) {
						return Ke instanceof x.$n1c;
					}
					async getChildren(Ke) {
						if (Ke instanceof x.$n1c) {
							const Je = [];
							return (
								Ke instanceof x.$p1c
									? (Je.push({ element: "name", root: Ke }),
										Je.push({ element: "icon", root: Ke }),
										Je.push({ element: "copyFrom", root: Ke }),
										Je.push({ element: "contents", root: Ke }))
									: Ke instanceof x.$o1c &&
										(Ke.profile.isDefault ||
											(Je.push({ element: "name", root: Ke }),
											Je.push({ element: "icon", root: Ke })),
										Je.push({ element: "useAsDefault", root: Ke }),
										Je.push({ element: "contents", root: Ke })),
								Je
							);
						}
						return [];
					}
				}
				class ae {
					getTemplateId(Ke) {
						return Ke.element.resourceType
							? Ke.root instanceof x.$p1c
								? Le.TEMPLATE_ID
								: Ce.TEMPLATE_ID
							: Fe.TEMPLATE_ID;
					}
					getHeight(Ke) {
						return 24;
					}
				}
				let pe = class {
					constructor(Ke) {
						this.a = Ke;
					}
					hasChildren(Ke) {
						if (Ke instanceof x.$n1c) return !0;
						if (Ke.element.resourceType) {
							if (
								Ke.element.resourceType !== h.ProfileResourceType.Extensions &&
								Ke.element.resourceType !== h.ProfileResourceType.Snippets
							)
								return !1;
							if (Ke.root instanceof x.$p1c) {
								const Je = Ke.element.resourceType;
								if (Ke.root.getFlag(Je)) return !0;
								if (
									!Ke.root.hasResource(Je) ||
									Ke.root.copyFrom === void 0 ||
									!Ke.root.getCopyFlag(Je)
								)
									return !1;
							}
							return !0;
						}
						return !1;
					}
					async getChildren(Ke) {
						if (Ke instanceof x.$n1c)
							return (await Ke.getChildren()).map((Te) => ({
								element: Te,
								root: Ke,
							}));
						if (Ke.element.resourceType) {
							const Je = this.a.show(!0, 500);
							try {
								return (await Ke.root.getChildren(Ke.element.resourceType)).map(
									(Ee) => ({ element: Ee, root: Ke.root }),
								);
							} finally {
								Je.done();
							}
						}
						return [];
					}
				};
				pe = Ne([j(0, A.$bO)], pe);
				class $e extends $.$1c {
					a(Ke) {
						switch (Ke) {
							case h.ProfileResourceType.Settings:
								return (0, C.localize)(11164, null);
							case h.ProfileResourceType.Keybindings:
								return (0, C.localize)(11165, null);
							case h.ProfileResourceType.Snippets:
								return (0, C.localize)(11166, null);
							case h.ProfileResourceType.Tasks:
								return (0, C.localize)(11167, null);
							case h.ProfileResourceType.Extensions:
								return (0, C.localize)(11168, null);
						}
						return "";
					}
					disposeElement(Ke, Je, Te, Ee) {
						Te.elementDisposables.clear();
					}
					disposeTemplate(Ke) {
						Ke.disposables.dispose();
					}
				}
				class ye extends $e {
					renderElement({ element: Ke }, Je, Te, Ee) {
						Te.elementDisposables.clear(), (Te.element = Ke);
					}
				}
				let ue = class extends ye {
					constructor(Ke, Je) {
						super(), (this.b = Ke), (this.c = Je), (this.templateId = "name");
					}
					renderTemplate(Ke) {
						const Je = new $.$Zc(),
							Te = Je.add(new $.$Zc());
						let Ee;
						const Ie = (0, t.$fhb)(Ke, (0, t.$)(".profile-row-container"));
						(0, t.$fhb)(
							Ie,
							(0, t.$)(
								".profile-label-element",
								void 0,
								(0, C.localize)(11169, null),
							),
						);
						const Be = Je.add(
							new v.$Mob(Ie, this.c, {
								inputBoxStyles: (0, f.$xyb)({ inputBorder: J.$hCc }),
								ariaLabel: (0, C.localize)(11170, null),
								placeholder: (0, C.localize)(11171, null),
								validationOptions: {
									validation: (Ue) => {
										if (!Ue)
											return {
												content: (0, C.localize)(11172, null),
												type: v.MessageType.WARNING,
											};
										if (Ee?.root.disabled || !Ee?.root.shouldValidateName())
											return null;
										const qe = Ee?.root.getInitialName();
										return (
											(Ue = Ue.trim()),
											qe !== Ue &&
											this.b.profiles.some(
												(Ae) => !Ae.isTransient && Ae.name === Ue,
											)
												? {
														content: (0, C.localize)(11173, null, Ue),
														type: v.MessageType.WARNING,
													}
												: null
										);
									},
								},
							}),
						);
						Be.onDidChange((Ue) => {
							Ee && Ue && (Ee.root.name = Ue);
						});
						const Se = Je.add((0, t.$dhb)(Be.inputElement));
						Je.add(
							Se.onDidBlur(() => {
								Ee && !Be.value && (Be.value = Ee.root.name);
							}),
						);
						const ke = (Ue) => {
							(Be.value = Ue.root.name),
								Be.validate(),
								Ue.root.disabled ? Be.disable() : Be.enable();
						};
						return {
							set element(Ue) {
								(Ee = Ue),
									ke(Ee),
									Te.add(
										Ee.root.onDidChange((qe) => {
											(qe.name || qe.disabled) && ke(Ue),
												qe.profile && Be.validate();
										}),
									);
							},
							disposables: Je,
							elementDisposables: Te,
						};
					}
				};
				ue = Ne([j(0, h.$Xl), j(1, d.$Wxb)], ue);
				let fe = class extends ye {
					constructor(Ke, Je) {
						super(), (this.b = Ke), (this.c = Je), (this.templateId = "icon");
					}
					renderTemplate(Ke) {
						const Je = new $.$Zc(),
							Te = Je.add(new $.$Zc());
						let Ee;
						const Ie = (0, t.$fhb)(Ke, (0, t.$)(".profile-row-container"));
						(0, t.$fhb)(
							Ie,
							(0, t.$)(
								".profile-label-element",
								void 0,
								(0, C.localize)(11174, null),
							),
						);
						const Be = (0, t.$fhb)(Ie, (0, t.$)(".profile-icon-container")),
							Se = (0, t.$fhb)(
								Be,
								(0, t.$)(`${E.ThemeIcon.asCSSSelector(I.$frc)}`, {
									tabindex: "0",
									role: "button",
									"aria-label": (0, C.localize)(11175, null),
								}),
							),
							ke = Je.add(
								this.b.createInstance(T.$iVc, {
									icons: I.$grc,
									inputBoxStyles: f.$wyb,
								}),
							);
						let Ue;
						const qe = () => {
							(Ee?.root instanceof x.$o1c && Ee.root.profile.isDefault) ||
								Ee?.root.disabled ||
								(ke.clearInput(),
								(Ue = this.c.showHover(
									{
										content: ke.domNode,
										target: Se,
										position: { hoverPosition: D.HoverPosition.BELOW },
										persistence: { sticky: !0 },
										appearance: { showPointer: !0 },
									},
									!0,
								)),
								Ue && (ke.layout(new t.$pgb(486, 260)), ke.focus()));
						};
						Je.add(
							(0, t.$0fb)(Se, t.$$gb.CLICK, (Me) => {
								t.$ahb.stop(Me, !0), qe();
							}),
						),
							Je.add(
								(0, t.$0fb)(Se, t.$$gb.KEY_DOWN, (Me) => {
									const De = new P.$7fb(Me);
									(De.equals(k.KeyCode.Enter) || De.equals(k.KeyCode.Space)) &&
										(t.$ahb.stop(De, !0), qe());
								}),
							),
							Je.add(
								(0, t.$0fb)(ke.domNode, t.$$gb.KEY_DOWN, (Me) => {
									const De = new P.$7fb(Me);
									De.equals(k.KeyCode.Escape) &&
										(t.$ahb.stop(De, !0), Ue?.dispose(), Se.focus());
								}),
							),
							Je.add(
								ke.onDidSelect((Me) => {
									Ue?.dispose(), Se.focus(), Ee && (Ee.root.icon = Me.id);
								}),
							),
							(0, t.$fhb)(
								Be,
								(0, t.$)(
									".profile-description-element",
									void 0,
									(0, C.localize)(11176, null),
								),
							);
						const Ae = (Me) => {
							Me.root.icon
								? (Se.className = E.ThemeIcon.asClassName(
										E.ThemeIcon.fromId(Me.root.icon),
									))
								: (Se.className = E.ThemeIcon.asClassName(
										E.ThemeIcon.fromId(I.$frc.id),
									));
						};
						return {
							set element(Me) {
								(Ee = Me),
									Ae(Ee),
									Te.add(
										Ee.root.onDidChange((De) => {
											De.icon && Ae(Me);
										}),
									);
							},
							disposables: Je,
							elementDisposables: Te,
						};
					}
				};
				fe = Ne([j(0, m.$Li), j(1, L.$Uyb)], fe);
				let me = class extends ye {
					constructor(Ke) {
						super(), (this.b = Ke), (this.templateId = "useForCurrent");
					}
					renderTemplate(Ke) {
						const Je = new $.$Zc(),
							Te = Je.add(new $.$Zc());
						let Ee;
						const Ie = (0, t.$fhb)(Ke, (0, t.$)(".profile-row-container"));
						(0, t.$fhb)(
							Ie,
							(0, t.$)(
								".profile-label-element",
								void 0,
								(0, C.localize)(11177, null),
							),
						);
						const Be = (0, t.$fhb)(
								Ie,
								(0, t.$)(".profile-use-for-current-container"),
							),
							Se = (0, C.localize)(11178, null),
							ke = Je.add(new S.$9ib(Se, !1, f.$syb));
						(0, t.$fhb)(Be, ke.domNode);
						const Ue = (0, t.$fhb)(
							Be,
							(0, t.$)(".profile-description-element", void 0, Se),
						);
						Je.add(
							ke.onChange(() => {
								Ee?.root instanceof x.$o1c &&
									Ee.root.toggleCurrentWindowProfile();
							}),
						),
							Je.add(
								(0, t.$0fb)(Ue, t.$$gb.CLICK, () => {
									Ee?.root instanceof x.$o1c &&
										Ee.root.toggleCurrentWindowProfile();
								}),
							);
						const qe = (Me) => {
								(ke.checked =
									Me.root instanceof x.$o1c &&
									this.b.currentProfile.id === Me.root.profile.id),
									ke.checked && this.b.currentProfile.isDefault
										? ke.disable()
										: ke.enable();
							},
							Ae = this;
						return {
							set element(Me) {
								(Ee = Me),
									qe(Ee),
									Te.add(
										Ae.b.onDidChangeCurrentProfile((De) => {
											qe(Me);
										}),
									);
							},
							disposables: Je,
							elementDisposables: Te,
						};
					}
				};
				me = Ne([j(0, g.$P8)], me);
				class ve extends ye {
					constructor() {
						super(...arguments), (this.templateId = "useAsDefault");
					}
					renderTemplate(Ke) {
						const Je = new $.$Zc(),
							Te = Je.add(new $.$Zc());
						let Ee;
						const Ie = (0, t.$fhb)(Ke, (0, t.$)(".profile-row-container"));
						(0, t.$fhb)(
							Ie,
							(0, t.$)(
								".profile-label-element",
								void 0,
								(0, C.localize)(11179, null),
							),
						);
						const Be = (0, t.$fhb)(
								Ie,
								(0, t.$)(".profile-use-as-default-container"),
							),
							Se = (0, C.localize)(11180, null),
							ke = Je.add(new S.$9ib(Se, !1, f.$syb));
						(0, t.$fhb)(Be, ke.domNode);
						const Ue = (0, t.$fhb)(
							Be,
							(0, t.$)(".profile-description-element", void 0, Se),
						);
						Je.add(
							ke.onChange(() => {
								Ee?.root instanceof x.$o1c && Ee.root.toggleNewWindowProfile();
							}),
						),
							Je.add(
								(0, t.$0fb)(Ue, t.$$gb.CLICK, () => {
									Ee?.root instanceof x.$o1c &&
										Ee.root.toggleNewWindowProfile();
								}),
							);
						const qe = (Ae) => {
							ke.checked =
								Ae.root instanceof x.$o1c && Ae.root.isNewWindowProfile;
						};
						return {
							set element(Ae) {
								(Ee = Ae),
									qe(Ee),
									Te.add(
										Ee.root.onDidChange((Me) => {
											Me.newWindowProfile && qe(Ae);
										}),
									);
							},
							disposables: Je,
							elementDisposables: Te,
						};
					}
				}
				let ge = class extends ye {
					constructor(Ke, Je, Te, Ee) {
						super(),
							(this.c = Ke),
							(this.f = Je),
							(this.g = Te),
							(this.h = Ee),
							(this.templateId = "copyFrom"),
							(this.b = []);
					}
					renderTemplate(Ke) {
						const Je = new $.$Zc(),
							Te = Je.add(new $.$Zc());
						let Ee;
						const Ie = (0, t.$fhb)(
							Ke,
							(0, t.$)(".profile-row-container.profile-copy-from-container"),
						);
						(0, t.$fhb)(
							Ie,
							(0, t.$)(
								".profile-label-element",
								void 0,
								(0, C.localize)(11181, null),
							),
						),
							(0, t.$fhb)(
								Ie,
								(0, t.$)(
									".profile-description-element",
									void 0,
									(0, C.localize)(11182, null),
								),
							);
						const Be = Je.add(
							this.f.createInstance(M.$5ib, [], 0, this.h, f.$Fyb, {
								useCustomDrawn: !0,
								ariaLabel: (0, C.localize)(11183, null),
							}),
						);
						Be.render((0, t.$fhb)(Ie, (0, t.$)(".profile-select-container")));
						const Se = (Ue, qe) => {
								Be.setOptions(qe);
								const Ae =
										Ue.copyFrom instanceof N.URI
											? Ue.copyFrom.toString()
											: Ue.copyFrom?.id,
									Me = Ae ? qe.findIndex((De) => De.id === Ae) : 0;
								Be.select(Me);
							},
							ke = this;
						return {
							set element(Ue) {
								if (((Ee = Ue), Ee.root instanceof x.$p1c)) {
									const qe = Ee.root;
									let Ae = ke.j(qe);
									Se(qe, Ae),
										Be.setEnabled(!qe.previewProfile && !qe.disabled),
										Te.add(
											Ee.root.onDidChange((Me) => {
												(Me.copyFrom || Me.copyFromInfo) &&
													((Ae = ke.j(qe)), Se(qe, Ae)),
													(Me.preview || Me.disabled) &&
														Be.setEnabled(!qe.previewProfile && !qe.disabled);
											}),
										),
										Te.add(
											Be.onDidSelect((Me) => {
												qe.copyFrom = Ae[Me.index].source;
											}),
										);
								}
							},
							disposables: Je,
							elementDisposables: Te,
						};
					}
					setTemplates(Ke) {
						this.b = Ke;
					}
					j(Ke) {
						const Je = {
								text: "\u2500\u2500\u2500\u2500\u2500\u2500",
								isDisabled: !0,
							},
							Te = [];
						Te.push({ text: (0, C.localize)(11184, null) });
						for (const [Ee, Ie] of Ke.copyFromTemplates)
							this.b.some((Be) =>
								this.g.extUri.isEqual(N.URI.parse(Be.url), Ee),
							) ||
								Te.push({
									text: `${Ie} (${(0, O.$kh)(Ee)})`,
									id: Ee.toString(),
									source: Ee,
								});
						if (this.b.length) {
							Te.push({ ...Je, decoratorRight: (0, C.localize)(11185, null) });
							for (const Ee of this.b)
								Te.push({
									text: Ee.name,
									id: Ee.url,
									source: N.URI.parse(Ee.url),
								});
						}
						Te.push({ ...Je, decoratorRight: (0, C.localize)(11186, null) });
						for (const Ee of this.c.profiles)
							Te.push({ text: Ee.name, id: Ee.id, source: Ee });
						return Te;
					}
				};
				ge = Ne([j(0, h.$Xl), j(1, m.$Li), j(2, X.$Vl), j(3, d.$Wxb)], ge);
				let be = class extends ye {
					constructor(Ke, Je) {
						super(),
							(this.g = Ke),
							(this.h = Je),
							(this.templateId = "contents"),
							(this.b = this.D(new w.$re())),
							(this.onDidChangeContentHeight = this.b.event),
							(this.c = this.D(new w.$re())),
							(this.onDidChangeSelection = this.c.event);
					}
					renderTemplate(Ke) {
						const Je = new $.$Zc(),
							Te = Je.add(new $.$Zc());
						let Ee;
						const Ie = (0, t.$fhb)(Ke, (0, t.$)(".profile-row-container"));
						(0, t.$fhb)(
							Ie,
							(0, t.$)(
								".profile-label-element",
								void 0,
								(0, C.localize)(11187, null),
							),
						);
						const Be = (0, t.$fhb)(
								Ie,
								(0, t.$)(".profile-description-element"),
							),
							Se = (0, t.$fhb)(Ie, (0, t.$)(".profile-content-tree-header")),
							ke = (0, t.$)(
								".options-header",
								void 0,
								(0, t.$)("span", void 0, (0, C.localize)(11188, null)),
							);
						(0, t.$fhb)(
							Se,
							(0, t.$)(""),
							(0, t.$)("", void 0, (0, C.localize)(11189, null)),
							ke,
							(0, t.$)(".actions-header", void 0, (0, C.localize)(11190, null)),
						);
						const Ue = new ae(),
							qe = (this.f = Je.add(
								this.h.createInstance(
									l.$FMb,
									"ProfileEditor-ContentsTree",
									(0, t.$fhb)(
										Ie,
										(0, t.$)(
											".profile-content-tree.file-icon-themable-tree.show-file-icons",
										),
									),
									Ue,
									[
										this.h.createInstance(Ce),
										this.h.createInstance(Le),
										this.h.createInstance(Fe),
									],
									this.h.createInstance(pe),
									{
										multipleSelectionSupport: !1,
										horizontalScrolling: !1,
										accessibilityProvider: {
											getAriaLabel(De) {
												return (De?.element).resourceType
													? (De?.element).resourceType
													: (De?.element).label
														? (De?.element).label
														: "";
											},
											getWidgetAriaLabel() {
												return "";
											},
										},
										identityProvider: {
											getId(De) {
												return De?.element.handle ? De.element.handle : "";
											},
										},
										expandOnlyOnTwistieClick: !0,
										renderIndentGuides: B.RenderIndentGuides.None,
										enableStickyScroll: !1,
										openOnSingleClick: !1,
										alwaysConsumeMouseWheel: !1,
									},
								),
							));
						this.f.style(te),
							Je.add((0, $.$Yc)(() => (this.f = void 0))),
							Je.add(
								this.f.onDidChangeContentHeight((De) => {
									this.f?.layout(De), Ee && this.b.fire(Ee);
								}),
							),
							Je.add(
								this.f.onDidChangeSelection((De) => {
									Ee &&
										this.c.fire({
											element: Ee,
											selected: !!De.elements.length,
										});
								}),
							),
							Je.add(
								this.f.onDidOpen(async (De) => {
									De.browserEvent &&
										((De.browserEvent.target &&
											De.browserEvent.target.classList.contains(
												S.$9ib.CLASS_NAME,
											)) ||
											(De.element?.element.action &&
												(await De.element.element.action.run())));
								}),
							);
						const Ae = (De) => {
								const Re = (0, C.localize)(11191, null),
									je = new K.$cl().appendMarkdown((0, C.localize)(11192, null));
								if (
									((0, t.$9fb)(Be),
									!(De.root instanceof x.$o1c && De.root.profile.isDefault))
								) {
									if (De.root instanceof x.$p1c) {
										const Ve = De.root.getCopyFromName(),
											Ze =
												Ve === this.g.defaultProfile.name
													? (0, C.localize)(11193, null, Ve)
													: Ve;
										Ze &&
											je.appendMarkdown((0, C.localize)(11194, null, Ze, Ve)),
											je
												.appendMarkdown(Re)
												.appendMarkdown((0, C.localize)(11195, null));
									} else
										De.root instanceof x.$o1c &&
											je
												.appendMarkdown(Re)
												.appendMarkdown(
													(0, C.localize)(
														11196,
														null,
														De.root.profile.name,
														De.root.profile.name,
													),
												);
									(0, t.$fhb)(Be, Te.add((0, W.$Uib)(je)).element);
								}
							},
							Me = this;
						return {
							set element(De) {
								(Ee = De),
									Ae(De),
									De.root instanceof x.$p1c
										? Se.classList.remove("default-profile")
										: De.root instanceof x.$o1c &&
											Se.classList.toggle(
												"default-profile",
												De.root.profile.isDefault,
											),
									qe.setInput(Ee.root),
									Te.add(
										Ee.root.onDidChange((Re) => {
											(Re.copyFrom || Re.copyFlags || Re.flags) &&
												qe.updateChildren(De.root),
												Re.copyFromInfo && (Ae(De), Me.b.fire(De));
										}),
									);
							},
							disposables: Je,
							elementDisposables: new $.$Zc(),
						};
					}
					clearSelection() {
						this.f && (this.f.setSelection([]), this.f.setFocus([]));
					}
				};
				be = Ne([j(0, h.$Xl), j(1, m.$Li)], be);
				let Ce = class extends $e {
					static {
						ie = this;
					}
					static {
						this.TEMPLATE_ID = "ExistingProfileResourceTemplate";
					}
					constructor(Ke) {
						super(), (this.b = Ke), (this.templateId = ie.TEMPLATE_ID);
					}
					renderTemplate(Ke) {
						const Je = new $.$Zc(),
							Te = (0, t.$fhb)(
								Ke,
								(0, t.$)(
									".profile-tree-item-container.existing-profile-resource-type-container",
								),
							),
							Ee = (0, t.$fhb)(Te, (0, t.$)(".profile-resource-type-label")),
							Ie = Je.add(new G.$cpb({ items: [] }));
						(0, t.$fhb)(
							(0, t.$fhb)(Te, (0, t.$)(".profile-resource-options-container")),
							Ie.domNode,
						);
						const Be = (0, t.$fhb)(
								Te,
								(0, t.$)(".profile-resource-actions-container"),
							),
							Se = Je.add(
								this.b.createInstance(H.$Syb, Be, {
									hoverDelegate: Je.add((0, q.$dib)()),
									highlightToggledItems: !0,
								}),
							);
						return {
							label: Ee,
							radio: Ie,
							actionBar: Se,
							disposables: Je,
							elementDisposables: Je.add(new $.$Zc()),
						};
					}
					renderElement({ element: Ke }, Je, Te, Ee) {
						Te.elementDisposables.clear();
						const { element: Ie, root: Be } = Ke;
						if (!(Be instanceof x.$o1c))
							throw new Error(
								"ExistingProfileResourceTreeRenderer can only render existing profile element",
							);
						if ((0, R.$lg)(Ie) || !(0, x.$l1c)(Ie))
							throw new Error("Invalid profile resource element");
						const Se = () => {
								Te.radio.setItems([
									{
										text: (0, C.localize)(11197, null),
										tooltip: (0, C.localize)(11198, null, ke),
										isActive: Be.getFlag(Ie.resourceType),
									},
									{
										text: Be.name,
										tooltip: (0, C.localize)(11199, null, ke, Be.name),
										isActive: !Be.getFlag(Ie.resourceType),
									},
								]);
							},
							ke = this.a(Ie.resourceType);
						(Te.label.textContent = ke),
							Be instanceof x.$o1c && Be.profile.isDefault
								? Te.radio.domNode.classList.add("hide")
								: (Te.radio.domNode.classList.remove("hide"),
									Se(),
									Te.elementDisposables.add(
										Be.onDidChange((Ue) => {
											Ue.name && Se();
										}),
									),
									Te.elementDisposables.add(
										Te.radio.onDidSelect((Ue) =>
											Be.setFlag(Ie.resourceType, Ue === 0),
										),
									)),
							Te.actionBar.setActions(Ie.action ? [Ie.action] : []);
					}
				};
				Ce = ie = Ne([j(0, m.$Li)], Ce);
				let Le = class extends $e {
					static {
						ne = this;
					}
					static {
						this.TEMPLATE_ID = "NewProfileResourceTemplate";
					}
					constructor(Ke, Je) {
						super(),
							(this.b = Ke),
							(this.c = Je),
							(this.templateId = ne.TEMPLATE_ID);
					}
					renderTemplate(Ke) {
						const Je = new $.$Zc(),
							Te = (0, t.$fhb)(
								Ke,
								(0, t.$)(
									".profile-tree-item-container.new-profile-resource-type-container",
								),
							),
							Ee = (0, t.$fhb)(
								Te,
								(0, t.$)(".profile-resource-type-label-container"),
							),
							Ie = (0, t.$fhb)(
								Ee,
								(0, t.$)("span.profile-resource-type-label"),
							),
							Be = Je.add(new G.$cpb({ items: [] }));
						(0, t.$fhb)(
							(0, t.$fhb)(Te, (0, t.$)(".profile-resource-options-container")),
							Be.domNode,
						);
						const Se = (0, t.$fhb)(
								Te,
								(0, t.$)(".profile-resource-actions-container"),
							),
							ke = Je.add(
								this.c.createInstance(H.$Syb, Se, {
									hoverDelegate: Je.add((0, q.$dib)()),
									highlightToggledItems: !0,
								}),
							);
						return {
							label: Ie,
							radio: Be,
							actionBar: ke,
							disposables: Je,
							elementDisposables: Je.add(new $.$Zc()),
						};
					}
					renderElement({ element: Ke }, Je, Te, Ee) {
						Te.elementDisposables.clear();
						const { element: Ie, root: Be } = Ke;
						if (!(Be instanceof x.$p1c))
							throw new Error(
								"NewProfileResourceTreeRenderer can only render new profile element",
							);
						if ((0, R.$lg)(Ie) || !(0, x.$l1c)(Ie))
							throw new Error("Invalid profile resource element");
						const Se = this.a(Ie.resourceType);
						Te.label.textContent = Se;
						const ke = () => {
							const Ue = [
									{
										text: (0, C.localize)(11200, null),
										tooltip: (0, C.localize)(11201, null, Se),
									},
									{
										text: (0, C.localize)(11202, null),
										tooltip: (0, C.localize)(11203, null, Se),
									},
								],
								qe = Be.getCopyFromName(),
								Ae =
									qe === this.b.defaultProfile.name
										? (0, C.localize)(11204, null, qe)
										: qe;
							Be.copyFrom && Ae
								? (Te.radio.setItems([
										{
											text: Ae,
											tooltip: Ae
												? (0, C.localize)(11205, null, Se, Ae)
												: (0, C.localize)(11206, null),
										},
										...Ue,
									]),
									Te.radio.setActiveItem(
										Be.getCopyFlag(Ie.resourceType)
											? 0
											: Be.getFlag(Ie.resourceType)
												? 1
												: 2,
									))
								: (Te.radio.setItems(Ue),
									Te.radio.setActiveItem(Be.getFlag(Ie.resourceType) ? 0 : 1));
						};
						Be.copyFrom
							? Te.elementDisposables.add(
									Te.radio.onDidSelect((Ue) => {
										Be.setFlag(Ie.resourceType, Ue === 1),
											Be.setCopyFlag(Ie.resourceType, Ue === 0);
									}),
								)
							: Te.elementDisposables.add(
									Te.radio.onDidSelect((Ue) => {
										Be.setFlag(Ie.resourceType, Ue === 0);
									}),
								),
							ke(),
							Te.radio.setEnabled(!Be.disabled),
							Te.elementDisposables.add(
								Be.onDidChange((Ue) => {
									Ue.disabled && Te.radio.setEnabled(!Be.disabled),
										(Ue.copyFrom || Ue.copyFromInfo) && ke();
								}),
							),
							Te.actionBar.setActions(Ie.action ? [Ie.action] : []);
					}
				};
				Le = ne = Ne([j(0, h.$Xl), j(1, m.$Li)], Le);
				let Fe = class extends $e {
					static {
						ee = this;
					}
					static {
						this.TEMPLATE_ID = "ProfileResourceChildTreeItemTemplate";
					}
					constructor(Ke) {
						super(),
							(this.f = Ke),
							(this.templateId = ee.TEMPLATE_ID),
							(this.b = Ke.createInstance(U.$uPb, U.$tPb)),
							(this.c = this.D(Ke.createInstance(L.$Vyb, "mouse", !1, {})));
					}
					renderTemplate(Ke) {
						const Je = new $.$Zc(),
							Te = (0, t.$fhb)(
								Ke,
								(0, t.$)(
									".profile-tree-item-container.profile-resource-child-container",
								),
							),
							Ee = Je.add(new S.$9ib("", !1, f.$syb));
						(0, t.$fhb)(Te, Ee.domNode);
						const Ie = Je.add(this.b.create(Te, { hoverDelegate: this.c })),
							Be = (0, t.$fhb)(
								Te,
								(0, t.$)(".profile-resource-actions-container"),
							),
							Se = Je.add(
								this.f.createInstance(H.$Syb, Be, {
									hoverDelegate: Je.add((0, q.$dib)()),
									highlightToggledItems: !0,
								}),
							);
						return {
							checkbox: Ee,
							resourceLabel: Ie,
							actionBar: Se,
							disposables: Je,
							elementDisposables: Je.add(new $.$Zc()),
						};
					}
					renderElement({ element: Ke }, Je, Te, Ee) {
						Te.elementDisposables.clear();
						const { element: Ie } = Ke;
						if ((0, R.$lg)(Ie) || !(0, x.$m1c)(Ie))
							throw new Error("Invalid profile resource element");
						Ie.checkbox
							? (Te.checkbox.domNode.setAttribute("tabindex", "0"),
								Te.checkbox.domNode.classList.remove("hide"),
								(Te.checkbox.checked = Ie.checkbox.isChecked),
								(Te.checkbox.domNode.ariaLabel =
									Ie.checkbox.accessibilityInformation?.label ?? ""),
								Ie.checkbox.accessibilityInformation?.role &&
									(Te.checkbox.domNode.role =
										Ie.checkbox.accessibilityInformation.role))
							: (Te.checkbox.domNode.removeAttribute("tabindex"),
								Te.checkbox.domNode.classList.add("hide")),
							Te.resourceLabel.setResource(
								{
									name: Ie.resource ? (0, O.$kh)(Ie.resource) : Ie.label,
									resource: Ie.resource,
								},
								{
									forceLabel: !0,
									icon: Ie.icon,
									hideIcon: !Ie.resource && !Ie.icon,
								},
							),
							Te.actionBar.setActions(Ie.action ? [Ie.action] : []);
					}
				};
				Fe = ee = Ne([j(0, m.$Li)], Fe);
				let Oe = class extends n.$LO {
					static {
						_ = this;
					}
					static {
						this.ID = "workbench.input.userDataProfiles";
					}
					get dirty() {
						return this.c;
					}
					set dirty(Ke) {
						this.c !== Ke && ((this.c = Ke), this.b.fire());
					}
					constructor(Ke) {
						super(),
							(this.h = Ke),
							(this.resource = void 0),
							(this.c = !1),
							(this.a = x.$q1c.getInstance(this.h)),
							this.D(
								this.a.onDidChange(
									(Je) =>
										(this.dirty = this.a.profiles.some(
											(Te) => Te instanceof x.$p1c,
										)),
								),
							);
					}
					get typeId() {
						return _.ID;
					}
					getName() {
						return (0, C.localize)(11207, null);
					}
					getIcon() {
						return g.$X8;
					}
					async resolve() {
						return await this.a.resolve(), this.a;
					}
					isDirty() {
						return this.dirty;
					}
					async save() {
						return await this.a.saveNewProfile(), this;
					}
					async revert() {
						this.a.revert();
					}
					matches(Ke) {
						return Ke instanceof _;
					}
					dispose() {
						for (const Ke of this.a.profiles)
							Ke instanceof x.$o1c && Ke.reset();
						super.dispose();
					}
				};
				(e.$t1c = Oe), (e.$t1c = Oe = _ = Ne([j(0, m.$Li)], Oe));
				class xe {
					canSerialize(Ke) {
						return !0;
					}
					serialize(Ke) {
						return "";
					}
					deserialize(Ke) {
						return Ke.createInstance(Oe);
					}
				}
				e.$u1c = xe;
			},
		),
		
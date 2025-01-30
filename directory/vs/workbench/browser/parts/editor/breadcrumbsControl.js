import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/mouseEvent.js';
import '../../../../base/browser/ui/breadcrumbs/breadcrumbsWidget.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/async.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/uri.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/list/browser/listService.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../labels.js';
import './breadcrumbs.js';
import './breadcrumbsModel.js';
import './breadcrumbsPicker.js';
import '../../../common/editor.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../../base/browser/pixelRatio.js';
import '../../../../platform/label/common/label.js';
import '../../../../platform/action/common/actionCommonCategories.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../../base/common/codicons.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import '../../../../base/common/event.js';
import '../../../../base/browser/ui/hover/hoverDelegateFactory.js';
import '../../../../css!vs/workbench/browser/parts/editor/media/breadcrumbscontrol.js';
define(
			de[1879],
			he([
				1, 0, 7, 168, 2681, 24, 15, 27, 3, 19, 9, 4, 11, 10, 8, 49, 22, 5, 43,
				93, 63, 233, 1223, 3517, 3678, 44, 18, 66, 345, 73, 99, 79, 14, 106, 6,
				95, 1514,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*mouseEvent*/,
				w /*breadcrumbsWidget*/,
				E /*arrays*/,
				C /*async*/,
				d /*keyCodes*/,
				m /*lifecycle*/,
				r /*resources*/,
				u /*uri*/,
				a /*nls*/,
				h /*actions*/,
				c /*configuration*/,
				n /*contextkey*/,
				g /*contextView*/,
				p /*files*/,
				o /*instantiation*/,
				f /*keybindingsRegistry*/,
				b /*listService*/,
				s /*quickInput*/,
				l /*labels*/,
				y /*breadcrumbs*/,
				$ /*breadcrumbsModel*/,
				v /*breadcrumbsPicker*/,
				S /*editor*/,
				I /*editorService*/,
				T /*editorGroupsService*/,
				P /*pixelRatio*/,
				k /*label*/,
				L /*actionCommonCategories*/,
				D /*iconRegistry*/,
				M /*codicons*/,
				N /*defaultStyles*/,
				A /*event*/,
				R /*hoverDelegateFactory*/,
) {
				"use strict";
				var O;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$yrc = e.$xrc = void 0),
					(t = mt(t));
				class B extends w.$eob {
					constructor(V, G, K) {
						super(),
							(this.model = V),
							(this.element = G),
							(this.options = K),
							(this.c = new m.$Zc());
					}
					dispose() {
						this.c.dispose();
					}
					equals(V) {
						return V instanceof B
							? this.element.element === V.element.element &&
									this.options.showFileIcons === V.options.showFileIcons &&
									this.options.showSymbolIcons === V.options.showSymbolIcons
							: !1;
					}
					render(V) {
						const { element: G, outline: K } = this.element;
						if (G === K) {
							const Y = t.$("span", void 0, "\u2026");
							V.appendChild(Y);
							return;
						}
						const J = K.config.delegate.getTemplateId(G),
							W = K.config.renderers.find((Y) => Y.templateId === J);
						if (!W) {
							V.innerText = "<<NO RENDERER>>";
							return;
						}
						const X = W.renderTemplate(V);
						W.renderElement(
							{
								element: G,
								children: [],
								depth: 0,
								visibleChildrenCount: 0,
								visibleChildIndex: 0,
								collapsible: !1,
								collapsed: !1,
								visible: !0,
								filterData: void 0,
							},
							0,
							X,
							void 0,
						),
							this.c.add(
								(0, m.$Yc)(() => {
									W.disposeTemplate(X);
								}),
							);
					}
				}
				class U extends w.$eob {
					constructor(V, G, K, J, W) {
						super(),
							(this.model = V),
							(this.element = G),
							(this.options = K),
							(this.d = J),
							(this.f = W),
							(this.c = new m.$Zc());
					}
					dispose() {
						this.c.dispose();
					}
					equals(V) {
						return V instanceof U
							? r.$dh.isEqual(this.element.uri, V.element.uri) &&
									this.options.showFileIcons === V.options.showFileIcons &&
									this.options.showSymbolIcons === V.options.showSymbolIcons
							: !1;
					}
					render(V) {
						const G = this.d.create(V, { hoverDelegate: this.f });
						G.setFile(this.element.uri, {
							hidePath: !0,
							hideIcon:
								this.element.kind === p.FileKind.FOLDER ||
								!this.options.showFileIcons,
							fileKind: this.element.kind,
							fileDecorations: {
								colors: this.options.showDecorationColors,
								badges: !1,
							},
						}),
							V.classList.add(p.FileKind[this.element.kind].toLowerCase()),
							this.c.add(G);
					}
				}
				const z = (0, D.$$O)(
					"breadcrumb-separator",
					M.$ak.chevronRight,
					(0, a.localize)(3108, null),
				);
				let F = class {
					static {
						O = this;
					}
					static {
						this.HEIGHT = 22;
					}
					static {
						this.a = { default: 3, large: 8 };
					}
					static {
						this.Payload_Reveal = {};
					}
					static {
						this.Payload_RevealAside = {};
					}
					static {
						this.Payload_Pick = {};
					}
					static {
						this.CK_BreadcrumbsPossible = new n.$5j(
							"breadcrumbsPossible",
							!1,
							(0, a.localize)(3109, null),
						);
					}
					static {
						this.CK_BreadcrumbsVisible = new n.$5j(
							"breadcrumbsVisible",
							!1,
							(0, a.localize)(3110, null),
						);
					}
					static {
						this.CK_BreadcrumbsActive = new n.$5j(
							"breadcrumbsActive",
							!1,
							(0, a.localize)(3111, null),
						);
					}
					get onDidVisibilityChange() {
						return this.q.event;
					}
					constructor(V, G, K, J, W, X, Y, ie, ne, ee, _, te) {
						(this.r = G),
							(this.s = K),
							(this.t = J),
							(this.u = W),
							(this.v = X),
							(this.w = Y),
							(this.z = ie),
							(this.A = ne),
							(this.B = ee),
							(this.j = new m.$Zc()),
							(this.k = new m.$Zc()),
							(this.m = new m.$2c()),
							(this.n = !1),
							(this.q = this.j.add(new A.$re())),
							(this.domNode = document.createElement("div")),
							this.domNode.classList.add("breadcrumbs-control"),
							t.$fhb(V, this.domNode),
							(this.f = y.$prc.UseQuickPick.bindTo(_)),
							(this.g = y.$prc.Icons.bindTo(_)),
							(this.h = y.$prc.TitleScrollbarSizing.bindTo(_)),
							(this.l = this.v.createInstance(l.$uPb, l.$tPb));
						const Q = this.h.getValue() ?? "default",
							Z = G.widgetStyles ?? N.$Byb;
						(this.i = new w.$fob(this.domNode, O.a[Q], z, Z)),
							this.i.onDidSelectItem(this.E, this, this.j),
							this.i.onDidFocusItem(this.D, this, this.j),
							this.i.onDidChangeFocus(this.F, this, this.j),
							(this.b = O.CK_BreadcrumbsPossible.bindTo(this.t)),
							(this.c = O.CK_BreadcrumbsVisible.bindTo(this.t)),
							(this.d = O.CK_BreadcrumbsActive.bindTo(this.t)),
							(this.p = (0, R.$cib)("mouse")),
							this.j.add(te.register(this.s.id, this.i)),
							this.hide();
					}
					dispose() {
						this.j.dispose(),
							this.k.dispose(),
							this.b.reset(),
							this.c.reset(),
							this.d.reset(),
							this.f.dispose(),
							this.g.dispose(),
							this.i.dispose(),
							this.l.dispose(),
							this.domNode.remove();
					}
					get model() {
						return this.m.value;
					}
					layout(V) {
						this.i.layout(V);
					}
					isHidden() {
						return this.domNode.classList.contains("hidden");
					}
					hide() {
						const V = this.isHidden();
						this.k.clear(),
							this.c.set(!1),
							this.domNode.classList.toggle("hidden", !0),
							V || this.q.fire();
					}
					C() {
						const V = this.isHidden();
						this.c.set(!0),
							this.domNode.classList.toggle("hidden", !1),
							V && this.q.fire();
					}
					revealLast() {
						this.i.revealLast();
					}
					update() {
						this.k.clear();
						const V = S.$A1.getCanonicalUri(this.s.activeEditor, {
								supportSideBySide: S.SideBySideEditor.PRIMARY,
							}),
							G = this.isHidden();
						if (!V || !this.z.hasProvider(V))
							return this.b.set(!1), G ? !1 : (this.hide(), !0);
						const K = S.$A1.getOriginalUri(this.s.activeEditor, {
							supportSideBySide: S.SideBySideEditor.PRIMARY,
						});
						this.C(), this.b.set(!0);
						const J = this.v.createInstance(
							$.$src,
							K ?? V,
							this.s.activeEditorPane,
						);
						(this.m.value = J),
							this.domNode.classList.toggle(
								"backslash-path",
								this.B.getSeparator(V.scheme, V.authority) === "\\",
							);
						const W = () => {
								this.domNode.classList.toggle("relative-path", J.isRelative());
								const ee = this.g.getValue(),
									_ = {
										...this.r,
										showFileIcons: this.r.showFileIcons && ee,
										showSymbolIcons: this.r.showSymbolIcons && ee,
									},
									te = J.getElements().map((Q) =>
										Q instanceof $.$qrc
											? new U(J, Q, _, this.l, this.p)
											: new B(J, Q, _),
									);
								te.length === 0
									? (this.i.setEnabled(!1),
										this.i.setItems([
											new (class extends w.$eob {
												render(Q) {
													Q.innerText = (0, a.localize)(3112, null);
												}
												equals(Q) {
													return Q === this;
												}
												dispose() {}
											})(),
										]))
									: (this.i.setEnabled(!0),
										this.i.setItems(te),
										this.i.reveal(te[te.length - 1]));
							},
							X = J.onDidUpdate(W),
							Y = this.g.onDidChange(W);
						W(),
							this.k.clear(),
							this.k.add(X),
							this.k.add((0, m.$Yc)(() => this.m.clear())),
							this.k.add(Y),
							this.k.add((0, m.$Yc)(() => this.i.setItems([])));
						const ie = () => {
							const ee = this.h.getValue() ?? "default";
							this.i.setHorizontalScrollbarSize(O.a[ee]);
						};
						ie();
						const ne = this.h.onDidChange(ie);
						return (
							this.k.add(ne),
							this.k.add({
								dispose: () => {
									this.n && this.u.hideContextView({ source: this });
								},
							}),
							G !== this.isHidden()
						);
					}
					D(V) {
						V.item &&
							this.n &&
							((this.o = void 0), this.i.setSelection(V.item));
					}
					E(V) {
						if (!V.item) return;
						if (V.item === this.o) {
							(this.o = void 0),
								this.i.setFocused(void 0),
								this.i.setSelection(void 0);
							return;
						}
						const { element: G } = V.item;
						this.s.focus();
						const K = this.H(V.payload);
						if (K !== void 0) {
							this.i.setFocused(void 0),
								this.i.setSelection(void 0),
								this.G(V, G, K);
							return;
						}
						if (this.f.getValue()) {
							this.i.setFocused(void 0),
								this.i.setSelection(void 0),
								this.w.quickAccess.show(G instanceof $.$rrc ? "@" : "");
							return;
						}
						let J, W;
						this.u.showContextView({
							render: (X) => {
								V.item instanceof U
									? (J = this.v.createInstance(
											v.$vrc,
											X,
											V.item.model.resource,
										))
									: V.item instanceof B &&
										(J = this.v.createInstance(
											v.$wrc,
											X,
											V.item.model.resource,
										));
								const Y = J.onWillPickElement(() =>
										this.u.hideContextView({ source: this, didPick: !0 }),
									),
									ie = P.$sjb
										.getInstance(t.getWindow(this.domNode))
										.onDidChange(() =>
											this.u.hideContextView({ source: this }),
										),
									ne = t.$dhb(X),
									ee = ne.onDidBlur(() => {
										(this.o = this.i.isDOMFocused() ? V.item : void 0),
											this.u.hideContextView({ source: this });
									});
								return (this.n = !0), this.F(), (0, m.$Xc)(J, Y, ie, ne, ee);
							},
							getAnchor: () => {
								if (!W) {
									const X = t.getWindow(this.domNode),
										Y = X.innerWidth - 8;
									let ie = Math.min(X.innerHeight * 0.7, 300);
									const ne = Math.min(Y, Math.max(240, Y / 4.17)),
										ee = 8;
									let _;
									const te = t.$tgb(V.node.firstChild),
										Q = te.top + te.height + ee;
									Q + ie >= X.innerHeight && (ie = X.innerHeight - Q - 30);
									let Z = te.left;
									if (
										(Z + ne >= Y && (Z = Y - ne), V.payload instanceof i.$2fb)
									) {
										const se = ne - 2 * ee;
										(_ = V.payload.posx - Z),
											_ > se && ((Z = Math.min(Y - ne, Z + _ - se)), (_ = se));
									} else _ = te.left + te.width * 0.3 - Z;
									J.show(G, ie, ne, ee, Math.max(0, _)), (W = { x: Z, y: Q });
								}
								return W;
							},
							onHide: (X) => {
								X?.didPick || J.restoreViewState(),
									(this.n = !1),
									this.F(),
									X?.source === this &&
										(this.i.setFocused(void 0), this.i.setSelection(void 0)),
									J.dispose();
							},
						});
					}
					F() {
						const V = this.i.isDOMFocused() || this.n;
						this.d.set(V);
					}
					async G(V, G, K, J = !1) {
						if (G instanceof $.$qrc)
							if (G.kind === p.FileKind.FILE)
								await this.A.openEditor(
									{ resource: G.uri, options: { pinned: J } },
									K,
								);
							else {
								const W = this.i.getItems(),
									X = W.indexOf(V.item);
								this.i.setFocused(W[X + 1]),
									this.i.setSelection(W[X + 1], O.Payload_Pick);
							}
						else G.outline.reveal(G, { pinned: J }, K === I.$KY, !1);
					}
					H(V) {
						return V === O.Payload_RevealAside
							? I.$KY
							: V === O.Payload_Reveal
								? I.$JY
								: void 0;
					}
				};
				(e.$xrc = F),
					(e.$xrc =
						F =
						O =
							Ne(
								[
									j(3, n.$6j),
									j(4, g.$Wxb),
									j(5, o.$Li),
									j(6, s.$DJ),
									j(7, p.$ll),
									j(8, I.$IY),
									j(9, k.$3N),
									j(10, c.$gj),
									j(11, y.$nrc),
								],
								F,
							));
				let x = class {
					get control() {
						return this.c;
					}
					get onDidEnablementChange() {
						return this.d.event;
					}
					get onDidVisibilityChange() {
						return this.f.event;
					}
					constructor(V, G, K, J, W, X) {
						(this.g = V),
							(this.h = G),
							(this.i = K),
							(this.j = W),
							(this.a = new m.$Zc()),
							(this.b = new m.$Zc()),
							(this.d = this.a.add(new A.$re())),
							(this.f = this.a.add(new A.$re()));
						const Y = this.a.add(y.$prc.IsEnabled.bindTo(J));
						this.a.add(
							Y.onDidChange(() => {
								const ie = Y.getValue();
								!ie && this.c
									? (this.b.clear(), (this.c = void 0), this.d.fire())
									: ie &&
										!this.c &&
										((this.c = this.k()), this.c.update(), this.d.fire());
							}),
						),
							Y.getValue() && (this.c = this.k()),
							this.a.add(
								X.onDidChangeFileSystemProviderRegistrations((ie) => {
									(this.c?.model &&
										this.c.model.resource.scheme !== ie.scheme) ||
										(this.c?.update() && this.d.fire());
								}),
							);
					}
					k() {
						const V = this.b.add(
							this.j.createInstance(F, this.g, this.i, this.h),
						);
						return this.b.add(V.onDidVisibilityChange(() => this.f.fire())), V;
					}
					dispose() {
						this.a.dispose(), this.b.dispose();
					}
				};
				(e.$yrc = x),
					(e.$yrc = x = Ne([j(3, c.$gj), j(4, o.$Li), j(5, p.$ll)], x)),
					(0, h.$4X)(
						class extends h.$3X {
							constructor() {
								super({
									id: "breadcrumbs.toggle",
									title: {
										...(0, a.localize2)(3116, "Toggle Breadcrumbs"),
										mnemonicTitle: (0, a.localize)(3113, null),
									},
									category: L.$ck.View,
									toggled: {
										condition: n.$Kj.equals("config.breadcrumbs.enabled", !0),
										title: (0, a.localize)(3114, null),
										mnemonicTitle: (0, a.localize)(3115, null),
									},
									menu: [
										{ id: h.$XX.CommandPalette },
										{
											id: h.$XX.MenubarAppearanceMenu,
											group: "4_editor",
											order: 2,
										},
										{
											id: h.$XX.NotebookToolbar,
											group: "notebookLayout",
											order: 2,
										},
										{ id: h.$XX.StickyScrollContext },
										{
											id: h.$XX.NotebookStickyScrollContext,
											group: "notebookView",
											order: 2,
										},
									],
								});
							}
							run(V) {
								const G = V.get(c.$gj),
									K = y.$prc.IsEnabled.bindTo(G).getValue();
								y.$prc.IsEnabled.bindTo(G).updateValue(!K);
							}
						},
					);
				function H(q, V) {
					const G = q.get(T.$EY),
						J = q.get(y.$nrc).getWidget(G.activeGroup.id);
					if (J) {
						const W = (0, E.$wb)(J.getItems());
						J.setFocused(W), V && J.setSelection(W, F.Payload_Pick);
					}
				}
				(0, h.$4X)(
					class extends h.$3X {
						constructor() {
							super({
								id: "breadcrumbs.focusAndSelect",
								title: (0, a.localize2)(3117, "Focus and Select Breadcrumbs"),
								precondition: F.CK_BreadcrumbsVisible,
								keybinding: {
									weight: f.KeybindingWeight.WorkbenchContrib,
									primary: d.KeyMod.CtrlCmd | d.KeyMod.Shift | d.KeyCode.Period,
									when: F.CK_BreadcrumbsPossible,
								},
								f1: !0,
							});
						}
						run(V, ...G) {
							H(V, !0);
						}
					},
				),
					(0, h.$4X)(
						class extends h.$3X {
							constructor() {
								super({
									id: "breadcrumbs.focus",
									title: (0, a.localize2)(3118, "Focus Breadcrumbs"),
									precondition: F.CK_BreadcrumbsVisible,
									keybinding: {
										weight: f.KeybindingWeight.WorkbenchContrib,
										primary:
											d.KeyMod.CtrlCmd | d.KeyMod.Shift | d.KeyCode.Semicolon,
										when: F.CK_BreadcrumbsPossible,
									},
									f1: !0,
								});
							}
							run(V, ...G) {
								H(V, !1);
							}
						},
					),
					f.$TX.registerCommandAndKeybindingRule({
						id: "breadcrumbs.toggleToOn",
						weight: f.KeybindingWeight.WorkbenchContrib,
						primary: d.KeyMod.CtrlCmd | d.KeyMod.Shift | d.KeyCode.Period,
						when: n.$Kj.not("config.breadcrumbs.enabled"),
						handler: async (q) => {
							const V = q.get(o.$Li),
								G = q.get(c.$gj),
								K = y.$prc.IsEnabled.bindTo(G);
							return (
								K.getValue() || (await K.updateValue(!0), await (0, C.$Nh)(50)),
								V.invokeFunction(H, !0)
							);
						},
					}),
					f.$TX.registerCommandAndKeybindingRule({
						id: "breadcrumbs.focusNext",
						weight: f.KeybindingWeight.WorkbenchContrib,
						primary: d.KeyCode.RightArrow,
						secondary: [d.KeyMod.CtrlCmd | d.KeyCode.RightArrow],
						mac: {
							primary: d.KeyCode.RightArrow,
							secondary: [d.KeyMod.Alt | d.KeyCode.RightArrow],
						},
						when: n.$Kj.and(F.CK_BreadcrumbsVisible, F.CK_BreadcrumbsActive),
						handler(q) {
							const V = q.get(T.$EY),
								K = q.get(y.$nrc).getWidget(V.activeGroup.id);
							K && K.focusNext();
						},
					}),
					f.$TX.registerCommandAndKeybindingRule({
						id: "breadcrumbs.focusPrevious",
						weight: f.KeybindingWeight.WorkbenchContrib,
						primary: d.KeyCode.LeftArrow,
						secondary: [d.KeyMod.CtrlCmd | d.KeyCode.LeftArrow],
						mac: {
							primary: d.KeyCode.LeftArrow,
							secondary: [d.KeyMod.Alt | d.KeyCode.LeftArrow],
						},
						when: n.$Kj.and(F.CK_BreadcrumbsVisible, F.CK_BreadcrumbsActive),
						handler(q) {
							const V = q.get(T.$EY),
								K = q.get(y.$nrc).getWidget(V.activeGroup.id);
							K && K.focusPrev();
						},
					}),
					f.$TX.registerCommandAndKeybindingRule({
						id: "breadcrumbs.focusNextWithPicker",
						weight: f.KeybindingWeight.WorkbenchContrib + 1,
						primary: d.KeyMod.CtrlCmd | d.KeyCode.RightArrow,
						mac: { primary: d.KeyMod.Alt | d.KeyCode.RightArrow },
						when: n.$Kj.and(
							F.CK_BreadcrumbsVisible,
							F.CK_BreadcrumbsActive,
							b.$nMb,
						),
						handler(q) {
							const V = q.get(T.$EY),
								K = q.get(y.$nrc).getWidget(V.activeGroup.id);
							K && K.focusNext();
						},
					}),
					f.$TX.registerCommandAndKeybindingRule({
						id: "breadcrumbs.focusPreviousWithPicker",
						weight: f.KeybindingWeight.WorkbenchContrib + 1,
						primary: d.KeyMod.CtrlCmd | d.KeyCode.LeftArrow,
						mac: { primary: d.KeyMod.Alt | d.KeyCode.LeftArrow },
						when: n.$Kj.and(
							F.CK_BreadcrumbsVisible,
							F.CK_BreadcrumbsActive,
							b.$nMb,
						),
						handler(q) {
							const V = q.get(T.$EY),
								K = q.get(y.$nrc).getWidget(V.activeGroup.id);
							K && K.focusPrev();
						},
					}),
					f.$TX.registerCommandAndKeybindingRule({
						id: "breadcrumbs.selectFocused",
						weight: f.KeybindingWeight.WorkbenchContrib,
						primary: d.KeyCode.Enter,
						secondary: [d.KeyCode.DownArrow],
						when: n.$Kj.and(F.CK_BreadcrumbsVisible, F.CK_BreadcrumbsActive),
						handler(q) {
							const V = q.get(T.$EY),
								K = q.get(y.$nrc).getWidget(V.activeGroup.id);
							K && K.setSelection(K.getFocused(), F.Payload_Pick);
						},
					}),
					f.$TX.registerCommandAndKeybindingRule({
						id: "breadcrumbs.revealFocused",
						weight: f.KeybindingWeight.WorkbenchContrib,
						primary: d.KeyCode.Space,
						secondary: [d.KeyMod.CtrlCmd | d.KeyCode.Enter],
						when: n.$Kj.and(F.CK_BreadcrumbsVisible, F.CK_BreadcrumbsActive),
						handler(q) {
							const V = q.get(T.$EY),
								K = q.get(y.$nrc).getWidget(V.activeGroup.id);
							K && K.setSelection(K.getFocused(), F.Payload_Reveal);
						},
					}),
					f.$TX.registerCommandAndKeybindingRule({
						id: "breadcrumbs.selectEditor",
						weight: f.KeybindingWeight.WorkbenchContrib + 1,
						primary: d.KeyCode.Escape,
						when: n.$Kj.and(F.CK_BreadcrumbsVisible, F.CK_BreadcrumbsActive),
						handler(q) {
							const V = q.get(T.$EY),
								K = q.get(y.$nrc).getWidget(V.activeGroup.id);
							K &&
								(K.setFocused(void 0),
								K.setSelection(void 0),
								V.activeGroup.activeEditorPane?.focus());
						},
					}),
					f.$TX.registerCommandAndKeybindingRule({
						id: "breadcrumbs.revealFocusedFromTreeAside",
						weight: f.KeybindingWeight.WorkbenchContrib,
						primary: d.KeyMod.CtrlCmd | d.KeyCode.Enter,
						when: n.$Kj.and(
							F.CK_BreadcrumbsVisible,
							F.CK_BreadcrumbsActive,
							b.$nMb,
						),
						handler(q) {
							const V = q.get(I.$IY),
								K = q.get(b.$fMb).lastFocusedList;
							if (!(K instanceof b.$EMb) && !(K instanceof b.$FMb)) return;
							const J = K.getFocus()[0];
							if (u.URI.isUri(J?.resource))
								return V.openEditor(
									{ resource: J.resource, options: { pinned: !0 } },
									I.$KY,
								);
							const W = K.getInput();
							if (W && typeof W.outlineKind == "string")
								return W.reveal(J, { pinned: !0, preserveFocus: !1 }, !0, !1);
						},
					});
			},
		),
		
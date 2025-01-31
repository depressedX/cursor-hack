import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/browser/dom.js';
import '../../../base/browser/ui/list/listPaging.js';
import '../../../base/browser/ui/list/listWidget.js';
import '../../../base/browser/ui/table/tableWidget.js';
import '../../../base/browser/ui/tree/abstractTree.js';
import '../../../base/browser/ui/tree/asyncDataTree.js';
import '../../../base/browser/ui/tree/dataTree.js';
import '../../../base/browser/ui/tree/objectTree.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../nls.js';
import '../../configuration/common/configuration.js';
import '../../configuration/common/configurationRegistry.js';
import '../../contextkey/common/contextkey.js';
import '../../contextkey/common/contextkeys.js';
import '../../contextview/browser/contextView.js';
import '../../instantiation/common/instantiation.js';
import '../../keybinding/common/keybinding.js';
import '../../keybinding/common/keybindingResolver.js';
import '../../registry/common/platform.js';
import '../../theme/browser/defaultStyles.js';
define(
			de[93],
			he([
				1, 0, 7, 1578, 278, 1167, 411, 1170, 1582, 1169, 6, 3, 4, 10, 81, 8,
				179, 49, 5, 39, 390, 30, 106,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*listPaging*/,
				w /*listWidget*/,
				E /*tableWidget*/,
				C /*abstractTree*/,
				d /*asyncDataTree*/,
				m /*dataTree*/,
				r /*objectTree*/,
				u /*event*/,
				a /*lifecycle*/,
				h /*nls*/,
				c /*configuration*/,
				n /*configurationRegistry*/,
				g /*contextkey*/,
				p /*contextkeys*/,
				o /*contextView*/,
				f /*instantiation*/,
				b /*keybinding*/,
				s /*keybindingResolver*/,
				l /*platform*/,
				y /*defaultStyles*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$GMb =
						e.$FMb =
						e.$EMb =
						e.$DMb =
						e.$CMb =
						e.$AMb =
						e.$zMb =
						e.$yMb =
						e.$xMb =
						e.$wMb =
						e.$vMb =
						e.$uMb =
						e.$tMb =
						e.$sMb =
						e.$rMb =
						e.$qMb =
						e.$pMb =
						e.$oMb =
						e.$nMb =
						e.$mMb =
						e.$lMb =
						e.$kMb =
						e.$jMb =
						e.$iMb =
						e.$hMb =
						e.$gMb =
						e.$fMb =
							void 0),
					(e.$BMb = Y),
					(e.$fMb = (0, f.$Mi)("listService"));
				class $ {
					get lastFocusedList() {
						return this.c;
					}
					constructor() {
						(this.a = new a.$Zc()),
							(this.b = []),
							(this.c = void 0),
							(this.d = !1);
					}
					f(fe) {
						fe !== this.c &&
							(this.c?.getHTMLElement().classList.remove("last-focused"),
							(this.c = fe),
							this.c?.getHTMLElement().classList.add("last-focused"));
					}
					register(fe, me) {
						if (
							(this.d ||
								((this.d = !0), new w.$Pib((0, t.$Rgb)(), "").style(y.$Dyb)),
							this.b.some((ge) => ge.widget === fe))
						)
							throw new Error("Cannot register the same widget multiple times");
						const ve = { widget: fe, extraContextKeys: me };
						return (
							this.b.push(ve),
							(0, t.$Kgb)(fe.getHTMLElement()) && this.f(fe),
							(0, a.$Xc)(
								fe.onDidFocus(() => this.f(fe)),
								(0, a.$Yc)(() => this.b.splice(this.b.indexOf(ve), 1)),
								fe.onDidDispose(() => {
									(this.b = this.b.filter((ge) => ge !== ve)),
										this.c === fe && this.f(void 0);
								}),
							)
						);
					}
					dispose() {
						this.a.dispose();
					}
				}
				(e.$gMb = $),
					(e.$hMb = new g.$5j("listScrollAtBoundary", "none")),
					(e.$iMb = g.$Kj.or(
						e.$hMb.isEqualTo("top"),
						e.$hMb.isEqualTo("both"),
					)),
					(e.$jMb = g.$Kj.or(
						e.$hMb.isEqualTo("bottom"),
						e.$hMb.isEqualTo("both"),
					)),
					(e.$kMb = new g.$5j("listFocus", !0)),
					(e.$lMb = new g.$5j("treestickyScrollFocused", !1)),
					(e.$mMb = new g.$5j("listSupportsMultiselect", !0)),
					(e.$nMb = g.$Kj.and(e.$kMb, g.$Kj.not(p.$aMb), e.$lMb.negate())),
					(e.$oMb = new g.$5j("listHasSelectionOrFocus", !1)),
					(e.$pMb = new g.$5j("listDoubleSelection", !1)),
					(e.$qMb = new g.$5j("listMultiSelection", !1)),
					(e.$rMb = new g.$5j("listSelectionNavigation", !1)),
					(e.$sMb = new g.$5j("listSupportsFind", !0)),
					(e.$tMb = new g.$5j("treeElementCanCollapse", !1)),
					(e.$uMb = new g.$5j("treeElementHasParent", !1)),
					(e.$vMb = new g.$5j("treeElementCanExpand", !1)),
					(e.$wMb = new g.$5j("treeElementHasChild", !1)),
					(e.$xMb = new g.$5j("treeFindOpen", !1));
				const v = "listTypeNavigationMode",
					S = "listAutomaticKeyboardNavigation";
				function I(ue, fe) {
					const me = ue.createScoped(fe.getHTMLElement());
					return e.$kMb.bindTo(me), me;
				}
				function T(ue, fe) {
					const me = e.$hMb.bindTo(ue),
						ve = () => {
							const ge = fe.scrollTop === 0,
								be = fe.scrollHeight - fe.renderHeight - fe.scrollTop < 1;
							ge && be
								? me.set("both")
								: ge
									? me.set("top")
									: be
										? me.set("bottom")
										: me.set("none");
						};
					return ve(), fe.onDidScroll(ve);
				}
				const P = "workbench.list.multiSelectModifier",
					k = "workbench.list.openMode",
					L = "workbench.list.horizontalScrolling",
					D = "workbench.list.defaultFindMode",
					M = "workbench.list.typeNavigationMode",
					N = "workbench.list.keyboardNavigation",
					A = "workbench.list.scrollByPage",
					R = "workbench.list.defaultFindMatchType",
					O = "workbench.tree.indent",
					B = "workbench.tree.renderIndentGuides",
					U = "workbench.list.smoothScrolling",
					z = "workbench.list.mouseWheelScrollSensitivity",
					F = "workbench.list.fastScrollSensitivity",
					x = "workbench.tree.expandMode",
					H = "workbench.tree.enableStickyScroll",
					q = "workbench.tree.stickyScrollMaxItemCount";
				function V(ue) {
					return ue.getValue(P) === "alt";
				}
				class G extends a.$1c {
					constructor(fe) {
						super(), (this.b = fe), (this.a = V(fe)), this.c();
					}
					c() {
						this.D(
							this.b.onDidChangeConfiguration((fe) => {
								fe.affectsConfiguration(P) && (this.a = V(this.b));
							}),
						);
					}
					isSelectionSingleChangeEvent(fe) {
						return this.a ? fe.browserEvent.altKey : (0, w.$Mib)(fe);
					}
					isSelectionRangeChangeEvent(fe) {
						return (0, w.$Nib)(fe);
					}
				}
				function K(ue, fe) {
					const me = ue.get(c.$gj),
						ve = ue.get(b.$uZ),
						ge = new a.$Zc();
					return [
						{
							...fe,
							keyboardNavigationDelegate: {
								mightProducePrintableCharacter(Ce) {
									return ve.mightProducePrintableCharacter(Ce);
								},
							},
							smoothScrolling: !!me.getValue(U),
							mouseWheelScrollSensitivity: me.getValue(z),
							fastScrollSensitivity: me.getValue(F),
							multipleSelectionController:
								fe.multipleSelectionController ?? ge.add(new G(me)),
							keyboardNavigationEventFilter: te(ve),
							scrollByPage: !!me.getValue(A),
						},
						ge,
					];
				}
				let J = class extends w.List {
					get onDidOpen() {
						return this.P.onDidOpen;
					}
					constructor(fe, me, ve, ge, be, Ce, Le, Fe, Oe) {
						const xe =
								typeof be.horizontalScrolling < "u"
									? be.horizontalScrolling
									: !!Fe.getValue(L),
							[He, Ke] = Oe.invokeFunction(K, be);
						super(fe, me, ve, ge, {
							keyboardSupport: !1,
							...He,
							horizontalScrolling: xe,
						}),
							this.y.add(Ke),
							(this.contextKeyService = I(Ce, this)),
							this.y.add(T(this.contextKeyService, this)),
							(this.h = e.$mMb.bindTo(this.contextKeyService)),
							this.h.set(be.multipleSelectionSupport !== !1),
							e.$rMb
								.bindTo(this.contextKeyService)
								.set(!!be.selectionNavigation),
							(this.K = e.$oMb.bindTo(this.contextKeyService)),
							(this.L = e.$pMb.bindTo(this.contextKeyService)),
							(this.M = e.$qMb.bindTo(this.contextKeyService)),
							(this.N = be.horizontalScrolling),
							(this.O = V(Fe)),
							this.y.add(this.contextKeyService),
							this.y.add(Le.register(this)),
							this.Q(be.overrideStyles),
							this.y.add(
								this.onDidChangeSelection(() => {
									const Te = this.getSelection(),
										Ee = this.getFocus();
									this.contextKeyService.bufferChangeEvents(() => {
										this.K.set(Te.length > 0 || Ee.length > 0),
											this.M.set(Te.length > 1),
											this.L.set(Te.length === 2);
									});
								}),
							),
							this.y.add(
								this.onDidChangeFocus(() => {
									const Te = this.getSelection(),
										Ee = this.getFocus();
									this.K.set(Te.length > 0 || Ee.length > 0);
								}),
							),
							this.y.add(
								Fe.onDidChangeConfiguration((Te) => {
									Te.affectsConfiguration(P) && (this.O = V(Fe));
									let Ee = {};
									if (Te.affectsConfiguration(L) && this.N === void 0) {
										const Ie = !!Fe.getValue(L);
										Ee = { ...Ee, horizontalScrolling: Ie };
									}
									if (Te.affectsConfiguration(A)) {
										const Ie = !!Fe.getValue(A);
										Ee = { ...Ee, scrollByPage: Ie };
									}
									if (Te.affectsConfiguration(U)) {
										const Ie = !!Fe.getValue(U);
										Ee = { ...Ee, smoothScrolling: Ie };
									}
									if (Te.affectsConfiguration(z)) {
										const Ie = Fe.getValue(z);
										Ee = { ...Ee, mouseWheelScrollSensitivity: Ie };
									}
									if (Te.affectsConfiguration(F)) {
										const Ie = Fe.getValue(F);
										Ee = { ...Ee, fastScrollSensitivity: Ie };
									}
									Object.keys(Ee).length > 0 && this.updateOptions(Ee);
								}),
							),
							(this.P = new ne(this, { configurationService: Fe, ...be })),
							this.y.add(this.P);
					}
					updateOptions(fe) {
						super.updateOptions(fe),
							fe.overrideStyles !== void 0 && this.Q(fe.overrideStyles),
							fe.multipleSelectionSupport !== void 0 &&
								this.h.set(!!fe.multipleSelectionSupport);
					}
					Q(fe) {
						this.style(fe ? (0, y.$Eyb)(fe) : y.$Dyb);
					}
					get useAltAsMultipleSelectionModifier() {
						return this.O;
					}
				};
				(e.$yMb = J),
					(e.$yMb = J =
						Ne([j(5, g.$6j), j(6, e.$fMb), j(7, c.$gj), j(8, f.$Li)], J));
				let W = class extends i.$8ob {
					get onDidOpen() {
						return this.h.onDidOpen;
					}
					constructor(fe, me, ve, ge, be, Ce, Le, Fe, Oe) {
						const xe =
								typeof be.horizontalScrolling < "u"
									? be.horizontalScrolling
									: !!Fe.getValue(L),
							[He, Ke] = Oe.invokeFunction(K, be);
						super(fe, me, ve, ge, {
							keyboardSupport: !1,
							...He,
							horizontalScrolling: xe,
						}),
							(this.c = new a.$Zc()),
							this.c.add(Ke),
							(this.contextKeyService = I(Ce, this)),
							this.c.add(T(this.contextKeyService, this.widget)),
							(this.g = be.horizontalScrolling),
							(this.d = e.$mMb.bindTo(this.contextKeyService)),
							this.d.set(be.multipleSelectionSupport !== !1),
							e.$rMb
								.bindTo(this.contextKeyService)
								.set(!!be.selectionNavigation),
							(this.f = V(Fe)),
							this.c.add(this.contextKeyService),
							this.c.add(Le.register(this)),
							this.j(be.overrideStyles),
							this.c.add(
								Fe.onDidChangeConfiguration((Te) => {
									Te.affectsConfiguration(P) && (this.f = V(Fe));
									let Ee = {};
									if (Te.affectsConfiguration(L) && this.g === void 0) {
										const Ie = !!Fe.getValue(L);
										Ee = { ...Ee, horizontalScrolling: Ie };
									}
									if (Te.affectsConfiguration(A)) {
										const Ie = !!Fe.getValue(A);
										Ee = { ...Ee, scrollByPage: Ie };
									}
									if (Te.affectsConfiguration(U)) {
										const Ie = !!Fe.getValue(U);
										Ee = { ...Ee, smoothScrolling: Ie };
									}
									if (Te.affectsConfiguration(z)) {
										const Ie = Fe.getValue(z);
										Ee = { ...Ee, mouseWheelScrollSensitivity: Ie };
									}
									if (Te.affectsConfiguration(F)) {
										const Ie = Fe.getValue(F);
										Ee = { ...Ee, fastScrollSensitivity: Ie };
									}
									Object.keys(Ee).length > 0 && this.updateOptions(Ee);
								}),
							),
							(this.h = new ne(this, { configurationService: Fe, ...be })),
							this.c.add(this.h);
					}
					updateOptions(fe) {
						super.updateOptions(fe),
							fe.overrideStyles !== void 0 && this.j(fe.overrideStyles),
							fe.multipleSelectionSupport !== void 0 &&
								this.d.set(!!fe.multipleSelectionSupport);
					}
					j(fe) {
						this.style(fe ? (0, y.$Eyb)(fe) : y.$Dyb);
					}
					get useAltAsMultipleSelectionModifier() {
						return this.f;
					}
					dispose() {
						this.c.dispose(), super.dispose();
					}
				};
				(e.$zMb = W),
					(e.$zMb = W =
						Ne([j(5, g.$6j), j(6, e.$fMb), j(7, c.$gj), j(8, f.$Li)], W));
				let X = class extends E.$ipb {
					get onDidOpen() {
						return this.y.onDidOpen;
					}
					constructor(fe, me, ve, ge, be, Ce, Le, Fe, Oe, xe) {
						const He =
								typeof Ce.horizontalScrolling < "u"
									? Ce.horizontalScrolling
									: !!Oe.getValue(L),
							[Ke, Je] = xe.invokeFunction(K, Ce);
						super(fe, me, ve, ge, be, {
							keyboardSupport: !1,
							...Ke,
							horizontalScrolling: He,
						}),
							this.k.add(Je),
							(this.contextKeyService = I(Le, this)),
							this.k.add(T(this.contextKeyService, this)),
							(this.s = e.$mMb.bindTo(this.contextKeyService)),
							this.s.set(Ce.multipleSelectionSupport !== !1),
							e.$rMb
								.bindTo(this.contextKeyService)
								.set(!!Ce.selectionNavigation),
							(this.t = e.$oMb.bindTo(this.contextKeyService)),
							(this.u = e.$pMb.bindTo(this.contextKeyService)),
							(this.v = e.$qMb.bindTo(this.contextKeyService)),
							(this.w = Ce.horizontalScrolling),
							(this.x = V(Oe)),
							this.k.add(this.contextKeyService),
							this.k.add(Fe.register(this)),
							this.z(Ce.overrideStyles),
							this.k.add(
								this.onDidChangeSelection(() => {
									const Ee = this.getSelection(),
										Ie = this.getFocus();
									this.contextKeyService.bufferChangeEvents(() => {
										this.t.set(Ee.length > 0 || Ie.length > 0),
											this.v.set(Ee.length > 1),
											this.u.set(Ee.length === 2);
									});
								}),
							),
							this.k.add(
								this.onDidChangeFocus(() => {
									const Ee = this.getSelection(),
										Ie = this.getFocus();
									this.t.set(Ee.length > 0 || Ie.length > 0);
								}),
							),
							this.k.add(
								Oe.onDidChangeConfiguration((Ee) => {
									Ee.affectsConfiguration(P) && (this.x = V(Oe));
									let Ie = {};
									if (Ee.affectsConfiguration(L) && this.w === void 0) {
										const Be = !!Oe.getValue(L);
										Ie = { ...Ie, horizontalScrolling: Be };
									}
									if (Ee.affectsConfiguration(A)) {
										const Be = !!Oe.getValue(A);
										Ie = { ...Ie, scrollByPage: Be };
									}
									if (Ee.affectsConfiguration(U)) {
										const Be = !!Oe.getValue(U);
										Ie = { ...Ie, smoothScrolling: Be };
									}
									if (Ee.affectsConfiguration(z)) {
										const Be = Oe.getValue(z);
										Ie = { ...Ie, mouseWheelScrollSensitivity: Be };
									}
									if (Ee.affectsConfiguration(F)) {
										const Be = Oe.getValue(F);
										Ie = { ...Ie, fastScrollSensitivity: Be };
									}
									Object.keys(Ie).length > 0 && this.updateOptions(Ie);
								}),
							),
							(this.y = new ee(this, { configurationService: Oe, ...Ce })),
							this.k.add(this.y);
					}
					updateOptions(fe) {
						super.updateOptions(fe),
							fe.overrideStyles !== void 0 && this.z(fe.overrideStyles),
							fe.multipleSelectionSupport !== void 0 &&
								this.s.set(!!fe.multipleSelectionSupport);
					}
					z(fe) {
						this.style(fe ? (0, y.$Eyb)(fe) : y.$Dyb);
					}
					get useAltAsMultipleSelectionModifier() {
						return this.x;
					}
					dispose() {
						this.k.dispose(), super.dispose();
					}
				};
				(e.$AMb = X),
					(e.$AMb = X =
						Ne([j(6, g.$6j), j(7, e.$fMb), j(8, c.$gj), j(9, f.$Li)], X));
				function Y(ue = "keydown", fe, me) {
					const ve = new KeyboardEvent(ue);
					return (
						(ve.preserveFocus = fe),
						(ve.pinned = me),
						(ve.__forceEvent = !0),
						ve
					);
				}
				class ie extends a.$1c {
					constructor(fe, me) {
						super(),
							(this.c = fe),
							(this.b = this.D(new u.$re())),
							(this.onDidOpen = this.b.event),
							this.D(
								u.Event.filter(this.c.onDidChangeSelection, (ve) =>
									(0, t.$8gb)(ve.browserEvent),
								)((ve) => this.f(ve)),
							),
							this.D(
								this.c.onPointer((ve) => this.g(ve.element, ve.browserEvent)),
							),
							this.D(
								this.c.onMouseDblClick((ve) =>
									this.h(ve.element, ve.browserEvent),
								),
							),
							typeof me?.openOnSingleClick != "boolean" &&
							me?.configurationService
								? ((this.a =
										me?.configurationService.getValue(k) !== "doubleClick"),
									this.D(
										me?.configurationService.onDidChangeConfiguration((ve) => {
											ve.affectsConfiguration(k) &&
												(this.a =
													me?.configurationService.getValue(k) !==
													"doubleClick");
										}),
									))
								: (this.a = me?.openOnSingleClick ?? !0);
					}
					f(fe) {
						if (fe.elements.length !== 1) return;
						const me = fe.browserEvent,
							ve = typeof me.preserveFocus == "boolean" ? me.preserveFocus : !0,
							ge = typeof me.pinned == "boolean" ? me.pinned : !ve;
						this.j(this.getSelectedElement(), ve, ge, !1, fe.browserEvent);
					}
					g(fe, me) {
						if (!this.a || me.detail === 2) return;
						const ge = me.button === 1,
							be = !0,
							Ce = ge,
							Le = me.ctrlKey || me.metaKey || me.altKey;
						this.j(fe, be, Ce, Le, me);
					}
					h(fe, me) {
						if (!me) return;
						const ve = me.target;
						if (
							ve.classList.contains("monaco-tl-twistie") ||
							(ve.classList.contains("monaco-icon-label") &&
								ve.classList.contains("folder-icon") &&
								me.offsetX < 16)
						)
							return;
						const be = !1,
							Ce = !0,
							Le = me.ctrlKey || me.metaKey || me.altKey;
						this.j(fe, be, Ce, Le, me);
					}
					j(fe, me, ve, ge, be) {
						fe &&
							this.b.fire({
								editorOptions: {
									preserveFocus: me,
									pinned: ve,
									revealIfVisible: !0,
								},
								sideBySide: ge,
								element: fe,
								browserEvent: be,
							});
					}
				}
				class ne extends ie {
					constructor(fe, me) {
						super(fe, me), (this.c = fe);
					}
					getSelectedElement() {
						return this.c.getSelectedElements()[0];
					}
				}
				class ee extends ie {
					constructor(fe, me) {
						super(fe, me);
					}
					getSelectedElement() {
						return this.c.getSelectedElements()[0];
					}
				}
				class _ extends ie {
					constructor(fe, me) {
						super(fe, me);
					}
					getSelectedElement() {
						return this.c.getSelection()[0] ?? void 0;
					}
				}
				function te(ue) {
					let fe = !1;
					return (me) => {
						if (me.toKeyCodeChord().isModifierKey()) return !1;
						if (fe) return (fe = !1), !1;
						const ve = ue.softDispatch(me, me.target);
						return ve.kind === s.ResultKind.MoreChordsNeeded
							? ((fe = !0), !1)
							: ((fe = !1), ve.kind === s.ResultKind.NoMatchingKb);
					};
				}
				let Q = class extends r.$Dpb {
					get contextKeyService() {
						return this.d.contextKeyService;
					}
					get useAltAsMultipleSelectionModifier() {
						return this.d.useAltAsMultipleSelectionModifier;
					}
					get onDidOpen() {
						return this.d.onDidOpen;
					}
					constructor(fe, me, ve, ge, be, Ce, Le, Fe, Oe) {
						const {
							options: xe,
							getTypeNavigationMode: He,
							disposable: Ke,
						} = Ce.invokeFunction(pe, be);
						super(fe, me, ve, ge, xe),
							this.D.add(Ke),
							(this.d = new $e(this, be, He, be.overrideStyles, Le, Fe, Oe)),
							this.D.add(this.d);
					}
					updateOptions(fe) {
						super.updateOptions(fe), this.d.updateOptions(fe);
					}
				};
				(e.$CMb = Q),
					(e.$CMb = Q =
						Ne([j(5, f.$Li), j(6, g.$6j), j(7, e.$fMb), j(8, c.$gj)], Q));
				let Z = class extends r.$Epb {
					get contextKeyService() {
						return this.c.contextKeyService;
					}
					get useAltAsMultipleSelectionModifier() {
						return this.c.useAltAsMultipleSelectionModifier;
					}
					get onDidOpen() {
						return this.c.onDidOpen;
					}
					constructor(fe, me, ve, ge, be, Ce, Le, Fe, Oe) {
						const {
							options: xe,
							getTypeNavigationMode: He,
							disposable: Ke,
						} = Ce.invokeFunction(pe, be);
						super(fe, me, ve, ge, xe),
							this.D.add(Ke),
							(this.c = new $e(this, be, He, be.overrideStyles, Le, Fe, Oe)),
							this.D.add(this.c);
					}
					updateOptions(fe = {}) {
						super.updateOptions(fe),
							fe.overrideStyles &&
								this.c.updateStyleOverrides(fe.overrideStyles),
							this.c.updateOptions(fe);
					}
				};
				(e.$DMb = Z),
					(e.$DMb = Z =
						Ne([j(5, f.$Li), j(6, g.$6j), j(7, e.$fMb), j(8, c.$gj)], Z));
				let se = class extends m.$Hpb {
					get contextKeyService() {
						return this.u.contextKeyService;
					}
					get useAltAsMultipleSelectionModifier() {
						return this.u.useAltAsMultipleSelectionModifier;
					}
					get onDidOpen() {
						return this.u.onDidOpen;
					}
					constructor(fe, me, ve, ge, be, Ce, Le, Fe, Oe, xe) {
						const {
							options: He,
							getTypeNavigationMode: Ke,
							disposable: Je,
						} = Le.invokeFunction(pe, Ce);
						super(fe, me, ve, ge, be, He),
							this.D.add(Je),
							(this.u = new $e(this, Ce, Ke, Ce.overrideStyles, Fe, Oe, xe)),
							this.D.add(this.u);
					}
					updateOptions(fe = {}) {
						super.updateOptions(fe),
							fe.overrideStyles !== void 0 &&
								this.u.updateStyleOverrides(fe.overrideStyles),
							this.u.updateOptions(fe);
					}
				};
				(e.$EMb = se),
					(e.$EMb = se =
						Ne([j(6, f.$Li), j(7, g.$6j), j(8, e.$fMb), j(9, c.$gj)], se));
				let re = class extends d.$Fpb {
					get contextKeyService() {
						return this.M.contextKeyService;
					}
					get useAltAsMultipleSelectionModifier() {
						return this.M.useAltAsMultipleSelectionModifier;
					}
					get onDidOpen() {
						return this.M.onDidOpen;
					}
					constructor(fe, me, ve, ge, be, Ce, Le, Fe, Oe, xe) {
						const {
							options: He,
							getTypeNavigationMode: Ke,
							disposable: Je,
						} = Le.invokeFunction(pe, Ce);
						super(fe, me, ve, ge, be, He),
							this.u.add(Je),
							(this.M = new $e(this, Ce, Ke, Ce.overrideStyles, Fe, Oe, xe)),
							this.u.add(this.M);
					}
					updateOptions(fe = {}) {
						super.updateOptions(fe),
							fe.overrideStyles &&
								this.M.updateStyleOverrides(fe.overrideStyles),
							this.M.updateOptions(fe);
					}
				};
				(e.$FMb = re),
					(e.$FMb = re =
						Ne([j(6, f.$Li), j(7, g.$6j), j(8, e.$fMb), j(9, c.$gj)], re));
				let le = class extends d.$Gpb {
					get contextKeyService() {
						return this.Q.contextKeyService;
					}
					get useAltAsMultipleSelectionModifier() {
						return this.Q.useAltAsMultipleSelectionModifier;
					}
					get onDidOpen() {
						return this.Q.onDidOpen;
					}
					constructor(fe, me, ve, ge, be, Ce, Le, Fe, Oe, xe, He) {
						const {
							options: Ke,
							getTypeNavigationMode: Je,
							disposable: Te,
						} = Fe.invokeFunction(pe, Le);
						super(fe, me, ve, ge, be, Ce, Ke),
							this.u.add(Te),
							(this.Q = new $e(this, Le, Je, Le.overrideStyles, Oe, xe, He)),
							this.u.add(this.Q);
					}
					updateOptions(fe) {
						super.updateOptions(fe), this.Q.updateOptions(fe);
					}
				};
				(e.$GMb = le),
					(e.$GMb = le =
						Ne([j(7, f.$Li), j(8, g.$6j), j(9, e.$fMb), j(10, c.$gj)], le));
				function oe(ue) {
					const fe = ue.getValue(D);
					if (fe === "highlight") return C.TreeFindMode.Highlight;
					if (fe === "filter") return C.TreeFindMode.Filter;
					const me = ue.getValue(N);
					if (me === "simple" || me === "highlight")
						return C.TreeFindMode.Highlight;
					if (me === "filter") return C.TreeFindMode.Filter;
				}
				function ae(ue) {
					const fe = ue.getValue(R);
					if (fe === "fuzzy") return C.TreeFindMatchType.Fuzzy;
					if (fe === "contiguous") return C.TreeFindMatchType.Contiguous;
				}
				function pe(ue, fe) {
					const me = ue.get(c.$gj),
						ve = ue.get(o.$Wxb),
						ge = ue.get(g.$6j),
						be = ue.get(f.$Li),
						Ce = () => {
							const Ke = ge.getContextKeyValue(v);
							if (Ke === "automatic") return w.TypeNavigationMode.Automatic;
							if (Ke === "trigger" || ge.getContextKeyValue(S) === !1)
								return w.TypeNavigationMode.Trigger;
							const Te = me.getValue(M);
							if (Te === "automatic") return w.TypeNavigationMode.Automatic;
							if (Te === "trigger") return w.TypeNavigationMode.Trigger;
						},
						Le =
							fe.horizontalScrolling !== void 0
								? fe.horizontalScrolling
								: !!me.getValue(L),
						[Fe, Oe] = be.invokeFunction(K, fe),
						xe = fe.paddingBottom,
						He =
							fe.renderIndentGuides !== void 0
								? fe.renderIndentGuides
								: me.getValue(B);
					return {
						getTypeNavigationMode: Ce,
						disposable: Oe,
						options: {
							keyboardSupport: !1,
							...Fe,
							indent:
								typeof me.getValue(O) == "number" ? me.getValue(O) : void 0,
							renderIndentGuides: He,
							smoothScrolling: !!me.getValue(U),
							defaultFindMode: oe(me),
							defaultFindMatchType: ae(me),
							horizontalScrolling: Le,
							scrollByPage: !!me.getValue(A),
							paddingBottom: xe,
							hideTwistiesOfChildlessElements:
								fe.hideTwistiesOfChildlessElements,
							expandOnlyOnTwistieClick:
								fe.expandOnlyOnTwistieClick ?? me.getValue(x) === "doubleClick",
							contextViewProvider: ve,
							findWidgetStyles: y.$yyb,
							enableStickyScroll: !!me.getValue(H),
							stickyScrollMaxItemCount: Number(me.getValue(q)),
						},
					};
				}
				let $e = class {
					get onDidOpen() {
						return this.p.onDidOpen;
					}
					constructor(fe, me, ve, ge, be, Ce, Le) {
						(this.q = fe),
							(this.o = []),
							(this.contextKeyService = I(be, fe)),
							this.o.push(T(this.contextKeyService, fe)),
							(this.a = e.$mMb.bindTo(this.contextKeyService)),
							this.a.set(me.multipleSelectionSupport !== !1),
							e.$rMb
								.bindTo(this.contextKeyService)
								.set(!!me.selectionNavigation),
							(this.b = e.$sMb.bindTo(this.contextKeyService)),
							this.b.set(me.findWidgetEnabled ?? !0),
							(this.c = e.$oMb.bindTo(this.contextKeyService)),
							(this.d = e.$pMb.bindTo(this.contextKeyService)),
							(this.f = e.$qMb.bindTo(this.contextKeyService)),
							(this.g = e.$tMb.bindTo(this.contextKeyService)),
							(this.h = e.$uMb.bindTo(this.contextKeyService)),
							(this.i = e.$vMb.bindTo(this.contextKeyService)),
							(this.j = e.$wMb.bindTo(this.contextKeyService)),
							(this.k = e.$xMb.bindTo(this.contextKeyService)),
							(this.m = e.$lMb.bindTo(this.contextKeyService)),
							(this.n = V(Le)),
							this.updateStyleOverrides(ge);
						const Oe = () => {
								const He = fe.getFocus()[0];
								if (!He) return;
								const Ke = fe.getNode(He);
								this.g.set(Ke.collapsible && !Ke.collapsed),
									this.h.set(!!fe.getParentElement(He)),
									this.i.set(Ke.collapsible && Ke.collapsed),
									this.j.set(!!fe.getFirstElementChild(He));
							},
							xe = new Set();
						xe.add(v),
							xe.add(S),
							this.o.push(
								this.contextKeyService,
								Ce.register(fe),
								fe.onDidChangeSelection(() => {
									const He = fe.getSelection(),
										Ke = fe.getFocus();
									this.contextKeyService.bufferChangeEvents(() => {
										this.c.set(He.length > 0 || Ke.length > 0),
											this.f.set(He.length > 1),
											this.d.set(He.length === 2);
									});
								}),
								fe.onDidChangeFocus(() => {
									const He = fe.getSelection(),
										Ke = fe.getFocus();
									this.c.set(He.length > 0 || Ke.length > 0), Oe();
								}),
								fe.onDidChangeCollapseState(Oe),
								fe.onDidChangeModel(Oe),
								fe.onDidChangeFindOpenState((He) => this.k.set(He)),
								fe.onDidChangeStickyScrollFocused((He) => this.m.set(He)),
								Le.onDidChangeConfiguration((He) => {
									let Ke = {};
									if (
										(He.affectsConfiguration(P) && (this.n = V(Le)),
										He.affectsConfiguration(O))
									) {
										const Je = Le.getValue(O);
										Ke = { ...Ke, indent: Je };
									}
									if (
										He.affectsConfiguration(B) &&
										me.renderIndentGuides === void 0
									) {
										const Je = Le.getValue(B);
										Ke = { ...Ke, renderIndentGuides: Je };
									}
									if (He.affectsConfiguration(U)) {
										const Je = !!Le.getValue(U);
										Ke = { ...Ke, smoothScrolling: Je };
									}
									if (
										He.affectsConfiguration(D) ||
										He.affectsConfiguration(N)
									) {
										const Je = oe(Le);
										Ke = { ...Ke, defaultFindMode: Je };
									}
									if (
										He.affectsConfiguration(M) ||
										He.affectsConfiguration(N)
									) {
										const Je = ve();
										Ke = { ...Ke, typeNavigationMode: Je };
									}
									if (He.affectsConfiguration(R)) {
										const Je = ae(Le);
										Ke = { ...Ke, defaultFindMatchType: Je };
									}
									if (
										He.affectsConfiguration(L) &&
										me.horizontalScrolling === void 0
									) {
										const Je = !!Le.getValue(L);
										Ke = { ...Ke, horizontalScrolling: Je };
									}
									if (He.affectsConfiguration(A)) {
										const Je = !!Le.getValue(A);
										Ke = { ...Ke, scrollByPage: Je };
									}
									if (
										(He.affectsConfiguration(x) &&
											me.expandOnlyOnTwistieClick === void 0 &&
											(Ke = {
												...Ke,
												expandOnlyOnTwistieClick:
													Le.getValue(x) === "doubleClick",
											}),
										He.affectsConfiguration(H))
									) {
										const Je = Le.getValue(H);
										Ke = { ...Ke, enableStickyScroll: Je };
									}
									if (He.affectsConfiguration(q)) {
										const Je = Math.max(1, Le.getValue(q));
										Ke = { ...Ke, stickyScrollMaxItemCount: Je };
									}
									if (He.affectsConfiguration(z)) {
										const Je = Le.getValue(z);
										Ke = { ...Ke, mouseWheelScrollSensitivity: Je };
									}
									if (He.affectsConfiguration(F)) {
										const Je = Le.getValue(F);
										Ke = { ...Ke, fastScrollSensitivity: Je };
									}
									Object.keys(Ke).length > 0 && fe.updateOptions(Ke);
								}),
								this.contextKeyService.onDidChangeContext((He) => {
									He.affectsSome(xe) &&
										fe.updateOptions({ typeNavigationMode: ve() });
								}),
							),
							(this.p = new _(fe, { configurationService: Le, ...me })),
							this.o.push(this.p);
					}
					get useAltAsMultipleSelectionModifier() {
						return this.n;
					}
					updateOptions(fe) {
						fe.multipleSelectionSupport !== void 0 &&
							this.a.set(!!fe.multipleSelectionSupport);
					}
					updateStyleOverrides(fe) {
						this.q.style(fe ? (0, y.$Eyb)(fe) : y.$Dyb);
					}
					dispose() {
						this.o = (0, a.$Vc)(this.o);
					}
				};
				($e = Ne([j(4, g.$6j), j(5, e.$fMb), j(6, c.$gj)], $e)),
					l.$Io
						.as(n.$No.Configuration)
						.registerConfiguration({
							id: "workbench",
							order: 7,
							title: (0, h.localize)(1944, null),
							type: "object",
							properties: {
								[P]: {
									type: "string",
									enum: ["ctrlCmd", "alt"],
									markdownEnumDescriptions: [
										(0, h.localize)(1945, null),
										(0, h.localize)(1946, null),
									],
									default: "ctrlCmd",
									description: (0, h.localize)(1947, null),
								},
								[k]: {
									type: "string",
									enum: ["singleClick", "doubleClick"],
									default: "singleClick",
									description: (0, h.localize)(1948, null),
								},
								[L]: {
									type: "boolean",
									default: !1,
									description: (0, h.localize)(1949, null),
								},
								[A]: {
									type: "boolean",
									default: !1,
									description: (0, h.localize)(1950, null),
								},
								[O]: {
									type: "number",
									default: 8,
									minimum: 4,
									maximum: 40,
									description: (0, h.localize)(1951, null),
								},
								[B]: {
									type: "string",
									enum: ["none", "onHover", "always"],
									default: "onHover",
									description: (0, h.localize)(1952, null),
								},
								[U]: {
									type: "boolean",
									default: !1,
									description: (0, h.localize)(1953, null),
								},
								[z]: {
									type: "number",
									default: 1,
									markdownDescription: (0, h.localize)(1954, null),
								},
								[F]: {
									type: "number",
									default: 5,
									markdownDescription: (0, h.localize)(1955, null),
								},
								[D]: {
									type: "string",
									enum: ["highlight", "filter"],
									enumDescriptions: [
										(0, h.localize)(1956, null),
										(0, h.localize)(1957, null),
									],
									default: "highlight",
									description: (0, h.localize)(1958, null),
								},
								[N]: {
									type: "string",
									enum: ["simple", "highlight", "filter"],
									enumDescriptions: [
										(0, h.localize)(1959, null),
										(0, h.localize)(1960, null),
										(0, h.localize)(1961, null),
									],
									default: "highlight",
									description: (0, h.localize)(1962, null),
									deprecated: !0,
									deprecationMessage: (0, h.localize)(1963, null),
								},
								[R]: {
									type: "string",
									enum: ["fuzzy", "contiguous"],
									enumDescriptions: [
										(0, h.localize)(1964, null),
										(0, h.localize)(1965, null),
									],
									default: "fuzzy",
									description: (0, h.localize)(1966, null),
								},
								[x]: {
									type: "string",
									enum: ["singleClick", "doubleClick"],
									default: "singleClick",
									description: (0, h.localize)(1967, null),
								},
								[H]: {
									type: "boolean",
									default: !0,
									description: (0, h.localize)(1968, null),
								},
								[q]: {
									type: "number",
									minimum: 1,
									default: 7,
									markdownDescription: (0, h.localize)(
										1969,
										null,
										"`#workbench.tree.enableStickyScroll#`",
									),
								},
								[M]: {
									type: "string",
									enum: ["automatic", "trigger"],
									default: "automatic",
									markdownDescription: (0, h.localize)(1970, null),
								},
							},
						});
			},
		)

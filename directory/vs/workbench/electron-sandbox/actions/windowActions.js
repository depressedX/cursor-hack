import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/uri.js';
import '../../../nls.js';
import '../../../platform/window/electron-sandbox/window.js';
import '../../../platform/keybinding/common/keybinding.js';
import '../../../base/browser/browser.js';
import '../../../platform/files/common/files.js';
import '../../../editor/common/services/model.js';
import '../../../editor/common/languages/language.js';
import '../../../platform/quickinput/common/quickInput.js';
import '../../../editor/common/services/getIconClasses.js';
import '../../../platform/configuration/common/configuration.js';
import '../../../platform/native/common/native.js';
import '../../../base/common/codicons.js';
import '../../../base/common/themables.js';
import '../../../platform/workspace/common/workspace.js';
import '../../../platform/actions/common/actions.js';
import '../../../platform/action/common/actionCommonCategories.js';
import '../../../base/common/keyCodes.js';
import '../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../base/common/platform.js';
import '../../../base/browser/dom.js';
import '../../../platform/window/common/window.js';
import '../../../css!vs/workbench/electron-sandbox/actions/media/actions.js';
define(
			de[3218],
			he([
				1, 0, 9, 4, 676, 39, 139, 22, 67, 61, 63, 252, 10, 110, 14, 26, 25, 11,
				99, 27, 43, 12, 7, 253, 2535,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$cdd =
						e.$bdd =
						e.$add =
						e.$_cd =
						e.$$cd =
						e.$0cd =
						e.$9cd =
						e.$8cd =
						e.$7cd =
						e.$6cd =
						e.$5cd =
						e.$4cd =
							void 0);
				class v extends o.$3X {
					static {
						this.ID = "workbench.action.closeWindow";
					}
					constructor() {
						super({
							id: v.ID,
							title: {
								...(0, i.localize2)(11832, "Close Window"),
								mnemonicTitle: (0, i.localize)(11821, null),
							},
							f1: !0,
							keybinding: {
								weight: s.KeybindingWeight.WorkbenchContrib,
								mac: {
									primary: b.KeyMod.CtrlCmd | b.KeyMod.Shift | b.KeyCode.KeyW,
								},
								linux: {
									primary: b.KeyMod.Alt | b.KeyCode.F4,
									secondary: [
										b.KeyMod.CtrlCmd | b.KeyMod.Shift | b.KeyCode.KeyW,
									],
								},
								win: {
									primary: b.KeyMod.Alt | b.KeyCode.F4,
									secondary: [
										b.KeyMod.CtrlCmd | b.KeyMod.Shift | b.KeyCode.KeyW,
									],
								},
							},
							menu: { id: o.$XX.MenubarFileMenu, group: "6_close", order: 4 },
						});
					}
					async run(F) {
						return F.get(c.$y7c).closeWindow({
							targetWindowId: (0, y.$Ogb)().vscodeWindowId,
						});
					}
				}
				e.$4cd = v;
				class S extends o.$3X {
					static {
						this.a = "window.zoomLevel";
					}
					static {
						this.b = "window.zoomPerWindow";
					}
					constructor(F) {
						super(F);
					}
					async c(F, x) {
						const H = F.get(h.$gj);
						let q;
						H.getValue(S.b) !== !1
							? (q = w.ApplyZoomTarget.ACTIVE_WINDOW)
							: (q = w.ApplyZoomTarget.ALL_WINDOWS);
						let V;
						if (typeof x == "number") V = Math.round(x);
						else if (q === w.ApplyZoomTarget.ALL_WINDOWS) V = 0;
						else {
							const G = H.getValue(S.a);
							typeof G == "number" ? (V = G) : (V = 0);
						}
						V > w.$Z8c ||
							V < w.$18c ||
							(q === w.ApplyZoomTarget.ALL_WINDOWS &&
								(await H.updateValue(S.a, V)),
							(0, w.$28c)(V, q));
					}
				}
				class I extends S {
					constructor() {
						super({
							id: "workbench.action.zoomIn",
							title: {
								...(0, i.localize2)(11833, "Zoom In"),
								mnemonicTitle: (0, i.localize)(11822, null),
							},
							category: f.$ck.View,
							f1: !0,
							keybinding: {
								weight: s.KeybindingWeight.WorkbenchContrib,
								primary: b.KeyMod.CtrlCmd | b.KeyCode.Equal,
								secondary: [
									b.KeyMod.CtrlCmd | b.KeyMod.Shift | b.KeyCode.Equal,
									b.KeyMod.CtrlCmd | b.KeyCode.NumpadAdd,
								],
							},
							menu: {
								id: o.$XX.MenubarAppearanceMenu,
								group: "5_zoom",
								order: 1,
							},
						});
					}
					run(F) {
						return super.c(F, (0, C.$Hfb)((0, y.$Ogb)()) + 1);
					}
				}
				e.$5cd = I;
				class T extends S {
					constructor() {
						super({
							id: "workbench.action.zoomOut",
							title: {
								...(0, i.localize2)(11834, "Zoom Out"),
								mnemonicTitle: (0, i.localize)(11823, null),
							},
							category: f.$ck.View,
							f1: !0,
							keybinding: {
								weight: s.KeybindingWeight.WorkbenchContrib,
								primary: b.KeyMod.CtrlCmd | b.KeyCode.Minus,
								secondary: [
									b.KeyMod.CtrlCmd | b.KeyMod.Shift | b.KeyCode.Minus,
									b.KeyMod.CtrlCmd | b.KeyCode.NumpadSubtract,
								],
								linux: {
									primary: b.KeyMod.CtrlCmd | b.KeyCode.Minus,
									secondary: [b.KeyMod.CtrlCmd | b.KeyCode.NumpadSubtract],
								},
							},
							menu: {
								id: o.$XX.MenubarAppearanceMenu,
								group: "5_zoom",
								order: 2,
							},
						});
					}
					run(F) {
						return super.c(F, (0, C.$Hfb)((0, y.$Ogb)()) - 1);
					}
				}
				e.$6cd = T;
				class P extends S {
					constructor() {
						super({
							id: "workbench.action.zoomReset",
							title: {
								...(0, i.localize2)(11835, "Reset Zoom"),
								mnemonicTitle: (0, i.localize)(11824, null),
							},
							category: f.$ck.View,
							f1: !0,
							keybinding: {
								weight: s.KeybindingWeight.WorkbenchContrib,
								primary: b.KeyMod.CtrlCmd | b.KeyCode.Numpad0,
							},
							menu: {
								id: o.$XX.MenubarAppearanceMenu,
								group: "5_zoom",
								order: 3,
							},
						});
					}
					run(F) {
						return super.c(F, !0);
					}
				}
				e.$7cd = P;
				class k extends o.$3X {
					constructor(F) {
						super(F),
							(this.a = {
								iconClass: g.ThemeIcon.asClassName(n.$ak.removeClose),
								tooltip: (0, i.localize)(11825, null),
							}),
							(this.b = {
								iconClass:
									"dirty-window " + g.ThemeIcon.asClassName(n.$ak.closeDirty),
								tooltip: (0, i.localize)(11826, null),
								alwaysVisible: !0,
							});
					}
					async run(F) {
						const x = F.get(u.$DJ),
							H = F.get(E.$uZ),
							q = F.get(m.$QO),
							V = F.get(r.$nM),
							G = F.get(c.$y7c),
							K = (0, y.$Ogb)().vscodeWindowId,
							J = await G.getWindows({ includeAuxiliaryWindows: !0 }),
							W = new Set(),
							X = new Map();
						for (const ee of J)
							if ((0, $.$sY)(ee)) {
								let _ = X.get(ee.parentId);
								_ || ((_ = new Set()), X.set(ee.parentId, _)), _.add(ee);
							} else W.add(ee);
						function Y(ee) {
							return typeof ee?.windowId == "number";
						}
						const ie = [];
						for (const ee of W) {
							const _ = X.get(ee.id);
							X.size > 0 &&
								ie.push({
									type: "separator",
									label: _ ? (0, i.localize)(11827, null) : void 0,
								});
							const te = ee.filename
									? t.URI.file(ee.filename)
									: (0, p.$Wi)(ee.workspace)
										? ee.workspace.uri
										: (0, p.$2i)(ee.workspace)
											? ee.workspace.configPath
											: void 0,
								Q = ee.filename
									? d.FileKind.FILE
									: (0, p.$Wi)(ee.workspace)
										? d.FileKind.FOLDER
										: (0, p.$2i)(ee.workspace)
											? d.FileKind.ROOT_FOLDER
											: d.FileKind.FILE,
								Z = {
									windowId: ee.id,
									label: ee.title,
									ariaLabel: ee.dirty
										? (0, i.localize)(11828, null, ee.title)
										: ee.title,
									iconClasses: (0, a.$BDb)(q, V, te, Q),
									description:
										K === ee.id ? (0, i.localize)(11829, null) : void 0,
									buttons:
										K !== ee.id ? (ee.dirty ? [this.b] : [this.a]) : void 0,
								};
							if ((ie.push(Z), _))
								for (const se of _) {
									const re = {
										windowId: se.id,
										label: se.title,
										iconClasses: (0, a.$BDb)(
											q,
											V,
											se.filename ? t.URI.file(se.filename) : void 0,
											d.FileKind.FILE,
										),
										description:
											K === se.id ? (0, i.localize)(11830, null) : void 0,
										buttons: [this.a],
									};
									ie.push(re);
								}
						}
						const ne = await x.pick(ie, {
							contextKey: "inWindowsPicker",
							activeItem: (() => {
								for (let ee = 0; ee < ie.length; ee++) {
									const _ = ie[ee];
									if (Y(_) && _.windowId === K) {
										let te = ie[ee + 1];
										if (Y(te) || ((te = ie[ee + 2]), Y(te))) return te;
									}
								}
							})(),
							placeHolder: (0, i.localize)(11831, null),
							quickNavigate: this.c()
								? { keybindings: H.lookupKeybindings(this.desc.id) }
								: void 0,
							hideInput: this.c(),
							onDidTriggerItemButton: async (ee) => {
								await G.closeWindow({ targetWindowId: ee.item.windowId }),
									ee.removeItem();
							},
						});
						ne && G.focusWindow({ targetWindowId: ne.windowId });
					}
				}
				class L extends k {
					constructor() {
						super({
							id: "workbench.action.switchWindow",
							title: (0, i.localize2)(11836, "Switch Window..."),
							f1: !0,
							keybinding: {
								weight: s.KeybindingWeight.WorkbenchContrib,
								primary: 0,
								mac: { primary: b.KeyMod.WinCtrl | b.KeyCode.KeyW },
							},
						});
					}
					c() {
						return !1;
					}
				}
				e.$8cd = L;
				class D extends k {
					constructor() {
						super({
							id: "workbench.action.quickSwitchWindow",
							title: (0, i.localize2)(11837, "Quick Switch Window..."),
							f1: !1,
						});
					}
					c() {
						return !0;
					}
				}
				e.$9cd = D;
				function M(z) {
					return l.$m ? z.get(h.$gj).getValue("window.nativeTabs") === !0 : !1;
				}
				const N = function (z) {
					if (M(z)) return z.get(c.$y7c).newWindowTab();
				};
				e.$0cd = N;
				const A = function (z) {
					if (M(z)) return z.get(c.$y7c).showPreviousWindowTab();
				};
				e.$$cd = A;
				const R = function (z) {
					if (M(z)) return z.get(c.$y7c).showNextWindowTab();
				};
				e.$_cd = R;
				const O = function (z) {
					if (M(z)) return z.get(c.$y7c).moveWindowTabToNewWindow();
				};
				e.$add = O;
				const B = function (z) {
					if (M(z)) return z.get(c.$y7c).mergeAllWindowTabs();
				};
				e.$bdd = B;
				const U = function (z) {
					if (M(z)) return z.get(c.$y7c).toggleWindowTabsBar();
				};
				e.$cdd = U;
			},
		),
		
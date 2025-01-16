define(de[1787], he([1, 0, 4, 8]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$fQc = e.$eQc = void 0),
				(e.$eQc = {
					IsEnabled: new i.$5j(
						"isWorkspaceTrustEnabled",
						!1,
						(0, t.localize)(11801, null),
					),
					IsTrusted: new i.$5j(
						"isWorkspaceTrusted",
						!1,
						(0, t.localize)(11802, null),
					),
				}),
				(e.$fQc = "workbench.trust.manage");
		});
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[3217],
		he([1, 0, 4, 11, 372, 57, 110, 163, 62, 12, 29]),
		function (ce, e, t, i, w, E, C, d, m, r, u) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$gdd = e.$fdd = e.$edd = e.$ddd = void 0),
				(w = xi(w));
			const a = (0, t.localize2)(11818, "Shell Command");
			class h extends i.$3X {
				constructor() {
					super({
						id: "workbench.action.installCommandLine",
						title: (0, t.localize2)(
							11819,
							"Install '{0}' command",
							w.default.applicationName,
						),
						category: a,
						f1: !0,
					});
				}
				async run(o) {
					const f = o.get(C.$y7c),
						b = o.get(E.$GO),
						s = o.get(m.$Bk);
					try {
						r.$l
							? await f.installShellCommandWindows()
							: await f.installShellCommand(),
							b.info((0, t.localize)(11814, null, s.applicationName));
					} catch (l) {
						b.error((0, d.$xj)(l));
					}
				}
			}
			e.$ddd = h;
			class c extends i.$3X {
				constructor() {
					super({
						id: "workbench.action.fixWSL",
						title: { value: "Fix WSL Install", original: "Fix WSL Install" },
						category: a,
						f1: !0,
					});
				}
				async run(o) {
					const f = o.get(C.$y7c);
					try {
						r.$l && (await f.fixWSL());
					} catch (b) {
						console.error(b);
					}
				}
			}
			e.$edd = c;
			class n extends i.$3X {
				constructor() {
					super({
						id: "workbench.action.replaceCommandLine",
						title: {
							value: (0, t.localize)(11815, null),
							original: "Install 'code' command",
						},
						category: a,
						f1: !0,
					});
				}
				async run(o) {
					const f = o.get(C.$y7c),
						b = o.get(E.$GO),
						s = o.get(m.$Bk);
					try {
						r.$l
							? await f.replaceShellCommandWindows()
							: await f.replaceShellCommand(),
							b.info((0, t.localize)(11816, null));
					} catch (l) {
						if ((0, u.$8)(l)) return;
						b.error((0, d.$xj)(l));
					}
				}
			}
			e.$fdd = n;
			class g extends i.$3X {
				constructor() {
					super({
						id: "workbench.action.uninstallCommandLine",
						title: (0, t.localize2)(
							11820,
							"Uninstall '{0}' command from PATH",
							w.default.applicationName,
						),
						category: a,
						f1: !0,
					});
				}
				async run(o) {
					const f = o.get(C.$y7c),
						b = o.get(E.$GO),
						s = o.get(m.$Bk);
					try {
						await f.uninstallShellCommand(),
							b.info((0, t.localize)(11817, null, s.applicationName));
					} catch (l) {
						if ((0, u.$8)(l)) return;
						b.error((0, d.$xj)(l));
					}
				}
			}
			e.$gdd = g;
		},
	),
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
		define(
			de[3219],
			he([1, 0, 4, 275, 12, 121, 57, 34, 110, 62, 320, 7]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$hdd = void 0);
				let h = class extends C.$HO {
					constructor(n, g, p, o) {
						super(), (this.g = n), (this.h = g), (this.i = p), (this.j = o);
					}
					async prompt(n) {
						this.g.trace("DialogService#prompt", n.message);
						const g = this.b(n),
							{ response: p, checkboxChecked: o } = await this.h.showMessageBox(
								{
									type: this.e(n.type),
									title: n.title,
									message: n.message,
									detail: n.detail,
									buttons: g,
									cancelId: n.cancelButton ? g.length - 1 : -1,
									checkboxLabel: n.checkbox?.label,
									checkboxChecked: n.checkbox?.checked,
									targetWindowId: (0, a.$Ogb)().vscodeWindowId,
								},
							);
						return this.f(n, p, o);
					}
					async confirm(n) {
						this.g.trace("DialogService#confirm", n.message);
						const g = this.a(n),
							{ response: p, checkboxChecked: o } = await this.h.showMessageBox(
								{
									type: this.e(n.type) ?? "question",
									title: n.title,
									message: n.message,
									detail: n.detail,
									buttons: g,
									cancelId: g.length - 1,
									checkboxLabel: n.checkbox?.label,
									checkboxChecked: n.checkbox?.checked,
									targetWindowId: (0, a.$Ogb)().vscodeWindowId,
								},
							);
						return { confirmed: p === 0, checkboxChecked: o };
					}
					input() {
						throw new Error("Unsupported");
					}
					async about() {
						let n = this.i.version;
						this.i.target
							? (n = `${n} (${this.i.target} setup)`)
							: this.i.darwinUniversalAssetId && (n = `${n} (Universal)`);
						const g = await this.h.getOSProperties(),
							p = (s) =>
								(0, t.localize)(
									11900,
									null,
									n,
									this.i.vscodeVersion,
									this.i.commit || "Unknown",
									this.i.date
										? `${this.i.date}${s ? " (" + (0, i.$dn)(new Date(this.i.date), !0) + ")" : ""}`
										: "Unknown",
									u.$S.versions.electron,
									u.$S.versions["microsoft-build"],
									u.$S.versions.chrome,
									u.$S.versions.node,
									u.$S.versions.v8,
									`${g.type} ${g.arch} ${g.release}${w.$o ? " snap" : ""}`,
								),
							o = p(!0),
							f = p(!1),
							{ response: b } = await this.h.showMessageBox({
								type: "info",
								message: this.i.nameLong,
								detail: `
${o}`,
								buttons: [
									(0, t.localize)(11901, null),
									(0, t.localize)(11902, null),
								],
								targetWindowId: (0, a.$Ogb)().vscodeWindowId,
							});
						b === 0 && this.j.writeText(f);
					}
				};
				(e.$hdd = h),
					(e.$hdd = h =
						Ne([j(0, d.$ik), j(1, m.$y7c), j(2, r.$Bk), j(3, E.$Vxb)], h));
			},
		),
		
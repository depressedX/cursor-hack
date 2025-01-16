define(de[142], he([1, 0, 5]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$6Sb = void 0),
				(e.$6Sb = (0, t.$Mi)("paneCompositePartService"));
		}),
		define(
			de[3526],
			he([1, 0, 4, 66, 96, 11, 99, 759, 27, 18, 142, 60, 43, 7, 75]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				class g extends E.$3X {
					constructor(f, b) {
						super(f), (this.a = b);
					}
					run(f) {
						const b = f.get(w.$mEb),
							s = f.get(i.$EY),
							l = f.get(u.$6Sb),
							y = b.hasFocus(w.Parts.EDITOR_PART),
							$ = b.hasFocus(w.Parts.PANEL_PART),
							v = b.hasFocus(w.Parts.SIDEBAR_PART),
							S = b.hasFocus(w.Parts.AUXILIARYBAR_PART);
						let I;
						if (y) {
							if (this.e(this.h(this.a), s)) return;
							I = b.getVisibleNeighborPart(w.Parts.EDITOR_PART, this.a);
						}
						$ && (I = b.getVisibleNeighborPart(w.Parts.PANEL_PART, this.a)),
							v && (I = b.getVisibleNeighborPart(w.Parts.SIDEBAR_PART, this.a)),
							S &&
								(I = I =
									b.getVisibleNeighborPart(w.Parts.AUXILIARYBAR_PART, this.a)),
							I === w.Parts.EDITOR_PART
								? this.g(this.h(this.a), s) ||
									this.f(
										this.a === d.Direction.Right
											? i.GroupLocation.FIRST
											: i.GroupLocation.LAST,
										s,
									)
								: I === w.Parts.SIDEBAR_PART
									? this.c(b, l)
									: I === w.Parts.PANEL_PART
										? this.b(b, l)
										: I === w.Parts.AUXILIARYBAR_PART && this.d(b, l);
					}
					async b(f, b) {
						if (!f.isVisible(w.Parts.PANEL_PART)) return !1;
						const s = b.getActivePaneComposite(a.ViewContainerLocation.Panel);
						if (!s) return !1;
						const l = s.getId(),
							y = await b.openPaneComposite(
								l,
								a.ViewContainerLocation.Panel,
								!0,
							);
						return y || !1;
					}
					async c(f, b) {
						if (!f.isVisible(w.Parts.SIDEBAR_PART)) return !1;
						const s = b.getActivePaneComposite(a.ViewContainerLocation.Sidebar);
						if (!s) return !1;
						const l = s.getId();
						return !!(await b.openPaneComposite(
							l,
							a.ViewContainerLocation.Sidebar,
							!0,
						));
					}
					async d(f, b) {
						if (!f.isVisible(w.Parts.AUXILIARYBAR_PART)) return !1;
						const s = b.getActivePaneComposite(
							a.ViewContainerLocation.AuxiliaryBar,
						);
						if (!s) return !1;
						const l = s.getId(),
							y = await b.openPaneComposite(
								l,
								a.ViewContainerLocation.AuxiliaryBar,
								!0,
							);
						return y || !1;
					}
					e(f, b) {
						return this.j({ direction: f }, b);
					}
					f(f, b) {
						return this.j({ location: f }, b);
					}
					g(f, b) {
						if (!b.activeGroup) return !1;
						const s = this.i(f);
						return b.findGroup({ direction: s }, b.activeGroup)
							? !1
							: (b.activeGroup.focus(), !0);
					}
					h(f) {
						switch (f) {
							case d.Direction.Down:
								return i.GroupDirection.DOWN;
							case d.Direction.Left:
								return i.GroupDirection.LEFT;
							case d.Direction.Right:
								return i.GroupDirection.RIGHT;
							case d.Direction.Up:
								return i.GroupDirection.UP;
						}
					}
					i(f) {
						switch (f) {
							case i.GroupDirection.UP:
								return i.GroupDirection.DOWN;
							case i.GroupDirection.RIGHT:
								return i.GroupDirection.LEFT;
							case i.GroupDirection.LEFT:
								return i.GroupDirection.RIGHT;
							case i.GroupDirection.DOWN:
								return i.GroupDirection.UP;
						}
					}
					j(f, b) {
						const s = b.findGroup(f, b.activeGroup);
						return s ? (s.focus(), !0) : !1;
					}
				}
				(0, E.$4X)(
					class extends g {
						constructor() {
							super(
								{
									id: "workbench.action.navigateLeft",
									title: (0, t.localize2)(
										2933,
										"Navigate to the View on the Left",
									),
									category: C.$ck.View,
									f1: !0,
								},
								d.Direction.Left,
							);
						}
					},
				),
					(0, E.$4X)(
						class extends g {
							constructor() {
								super(
									{
										id: "workbench.action.navigateRight",
										title: (0, t.localize2)(
											2934,
											"Navigate to the View on the Right",
										),
										category: C.$ck.View,
										f1: !0,
									},
									d.Direction.Right,
								);
							}
						},
					),
					(0, E.$4X)(
						class extends g {
							constructor() {
								super(
									{
										id: "workbench.action.navigateUp",
										title: (0, t.localize2)(2935, "Navigate to the View Above"),
										category: C.$ck.View,
										f1: !0,
									},
									d.Direction.Up,
								);
							}
						},
					),
					(0, E.$4X)(
						class extends g {
							constructor() {
								super(
									{
										id: "workbench.action.navigateDown",
										title: (0, t.localize2)(2936, "Navigate to the View Below"),
										category: C.$ck.View,
										f1: !0,
									},
									d.Direction.Down,
								);
							}
						},
					);
				class p extends E.$3X {
					constructor(f, b) {
						super(f), (this.a = b);
					}
					run(f) {
						const b = f.get(w.$mEb),
							s = f.get(r.$IY);
						this.c(b, s, this.a);
					}
					b(f, b, s) {
						const l = (0, c.$Ogb)(),
							y = (0, n.$Dfb)(l);
						let $;
						if (y)
							switch (b) {
								case w.Parts.EDITOR_PART:
									$ = w.Parts.STATUSBAR_PART;
									break;
								default:
									$ = w.Parts.EDITOR_PART;
							}
						else
							switch (b) {
								case w.Parts.EDITOR_PART:
									$ = s ? w.Parts.PANEL_PART : w.Parts.SIDEBAR_PART;
									break;
								case w.Parts.PANEL_PART:
									$ = s ? w.Parts.AUXILIARYBAR_PART : w.Parts.EDITOR_PART;
									break;
								case w.Parts.AUXILIARYBAR_PART:
									$ = s ? w.Parts.STATUSBAR_PART : w.Parts.PANEL_PART;
									break;
								case w.Parts.STATUSBAR_PART:
									f.activityBarDirection === "vertical"
										? ($ = s
												? w.Parts.ACTIVITYBAR_PART
												: w.Parts.AUXILIARYBAR_PART)
										: ($ = s ? w.Parts.SIDEBAR_PART : w.Parts.PANEL_PART);
									break;
								case w.Parts.ACTIVITYBAR_PART:
									$ = s ? w.Parts.SIDEBAR_PART : w.Parts.STATUSBAR_PART;
									break;
								case w.Parts.SIDEBAR_PART:
									f.activityBarDirection === "vertical"
										? ($ = s ? w.Parts.EDITOR_PART : w.Parts.ACTIVITYBAR_PART)
										: ($ = w.Parts.EDITOR_PART);
									break;
								default:
									$ = w.Parts.EDITOR_PART;
							}
						return f.isVisible($, l) || $ === w.Parts.EDITOR_PART
							? $
							: this.b(f, $, s);
					}
					c(f, b, s) {
						let l;
						b.activeEditorPane?.hasFocus() || f.hasFocus(w.Parts.EDITOR_PART)
							? (l = w.Parts.EDITOR_PART)
							: f.hasFocus(w.Parts.ACTIVITYBAR_PART)
								? (l = w.Parts.ACTIVITYBAR_PART)
								: f.hasFocus(w.Parts.STATUSBAR_PART)
									? (l = w.Parts.STATUSBAR_PART)
									: f.hasFocus(w.Parts.SIDEBAR_PART)
										? (l = w.Parts.SIDEBAR_PART)
										: f.hasFocus(w.Parts.AUXILIARYBAR_PART)
											? (l = w.Parts.AUXILIARYBAR_PART)
											: f.hasFocus(w.Parts.PANEL_PART) &&
												(l = w.Parts.PANEL_PART),
							f.focusPart(
								l ? this.b(f, l, s) : w.Parts.EDITOR_PART,
								(0, c.$Ogb)(),
							);
					}
				}
				(0, E.$4X)(
					class extends p {
						constructor() {
							super(
								{
									id: "workbench.action.focusNextPart",
									title: (0, t.localize2)(2937, "Focus Next Part"),
									category: C.$ck.View,
									f1: !0,
									keybinding: {
										primary: m.KeyCode.F6,
										weight: h.KeybindingWeight.WorkbenchContrib,
									},
								},
								!0,
							);
						}
					},
				),
					(0, E.$4X)(
						class extends p {
							constructor() {
								super(
									{
										id: "workbench.action.focusPreviousPart",
										title: (0, t.localize2)(2938, "Focus Previous Part"),
										category: C.$ck.View,
										f1: !0,
										keybinding: {
											primary: m.KeyMod.Shift | m.KeyCode.F6,
											weight: h.KeybindingWeight.WorkbenchContrib,
										},
									},
									!1,
								);
							}
						},
					);
			},
		),
		define(
			de[1307],
			he([1, 0, 14, 4, 11, 79, 99, 100, 60, 96, 142, 43, 27]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$O5b = void 0);
				const c = (0, E.$$O)(
						"auxiliarybar-right-layout-icon",
						t.$ak.layoutSidebarRight,
						(0, i.localize)(3032, null),
					),
					n = (0, E.$$O)(
						"auxiliarybar-right-off-layout-icon",
						t.$ak.layoutSidebarRightOff,
						(0, i.localize)(3033, null),
					),
					g = (0, E.$$O)(
						"auxiliarybar-left-layout-icon",
						t.$ak.layoutSidebarLeft,
						(0, i.localize)(3034, null),
					),
					p = (0, E.$$O)(
						"auxiliarybar-left-off-layout-icon",
						t.$ak.layoutSidebarLeftOff,
						(0, i.localize)(3035, null),
					);
				class o extends w.$3X {
					static {
						this.ID = "workbench.action.toggleAuxiliaryBar";
					}
					static {
						this.LABEL = (0, i.localize2)(
							3038,
							"Toggle Secondary Side Bar Visibility",
						);
					}
					constructor() {
						super({
							id: o.ID,
							title: o.LABEL,
							toggled: {
								condition: d.$sQb,
								title: (0, i.localize)(3036, null),
								mnemonicTitle: (0, i.localize)(3037, null),
							},
							category: C.$ck.View,
							f1: !0,
							keybinding: {
								weight: a.KeybindingWeight.WorkbenchContrib,
								primary: h.KeyMod.CtrlCmd | h.KeyMod.Alt | h.KeyCode.KeyB,
							},
							menu: [
								{
									id: w.$XX.LayoutControlMenuSubmenu,
									group: "0_workbench_layout",
									order: 1,
								},
								{
									id: w.$XX.MenubarAppearanceMenu,
									group: "2_workbench_layout",
									order: 2,
								},
							],
						});
					}
					async run(b) {
						const s = b.get(r.$mEb);
						s.setPartHidden(
							s.isVisible(r.Parts.AUXILIARYBAR_PART),
							r.Parts.AUXILIARYBAR_PART,
						);
					}
				}
				(e.$O5b = o),
					(0, w.$4X)(o),
					(0, w.$4X)(
						class ha extends w.$3X {
							static {
								this.ID = "workbench.action.focusAuxiliaryBar";
							}
							static {
								this.LABEL = (0, i.localize2)(
									3039,
									"Focus into Secondary Side Bar",
								);
							}
							constructor() {
								super({
									id: ha.ID,
									title: ha.LABEL,
									category: C.$ck.View,
									f1: !0,
								});
							}
							async run(b) {
								const s = b.get(u.$6Sb),
									l = b.get(r.$mEb);
								l.isVisible(r.Parts.AUXILIARYBAR_PART) ||
									l.setPartHidden(!1, r.Parts.AUXILIARYBAR_PART),
									s
										.getActivePaneComposite(
											m.ViewContainerLocation.AuxiliaryBar,
										)
										?.focus();
							}
						},
					);
			},
		),
		define(
			de[1854],
			he([1, 0, 4, 11, 96, 27, 43, 99, 142, 60, 1140]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ruc = void 0);
				class u extends i.$3X {
					constructor() {
						super({
							id: "workbench.action.focusSideBar",
							title: (0, t.localize2)(3685, "Focus into Primary Side Bar"),
							category: d.$ck.View,
							f1: !0,
							keybinding: {
								weight: C.KeybindingWeight.WorkbenchContrib,
								when: null,
								primary: E.KeyMod.CtrlCmd | E.KeyCode.Digit0,
							},
						});
					}
					async run(h) {
						const c = h.get(w.$mEb),
							n = h.get(m.$6Sb);
						c.isVisible(w.Parts.SIDEBAR_PART) ||
							c.setPartHidden(!1, w.Parts.SIDEBAR_PART),
							n
								.getActivePaneComposite(r.ViewContainerLocation.Sidebar)
								?.focus();
					}
				}
				(e.$Ruc = u), (0, i.$4X)(u);
			},
		),
		define(
			de[3527],
			he([1, 0, 392, 4, 141, 119, 40, 34, 142, 60]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				var u, a;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$CTc = e.$BTc = void 0);
				let h = class extends t.$GLb {
					static {
						u = this;
					}
					static {
						this.PREFIX = "ext install ";
					}
					constructor(p, o, f, b, s) {
						super(u.PREFIX),
							(this.a = p),
							(this.b = o),
							(this.h = f),
							(this.j = b),
							(this.m = s);
					}
					g(p, o, f) {
						if (!p) return [{ label: (0, i.localize)(6442, null) }];
						const b = {
							label: (0, i.localize)(6443, null, p),
							accept: () => this.s(p),
						};
						return /\./.test(p) ? this.q(p, b, f) : [b];
					}
					async q(p, o, f) {
						try {
							const [b] = await this.b.getExtensions([{ id: p }], f);
							return f.isCancellationRequested
								? []
								: b
									? [
											{
												label: (0, i.localize)(6444, null, p),
												accept: () => this.r(b, p),
											},
										]
									: [o];
						} catch (b) {
							return f.isCancellationRequested ? [] : (this.m.error(b), [o]);
						}
					}
					async r(p, o) {
						try {
							await n(this.a, `@id:${o}`), await this.h.installFromGallery(p);
						} catch (f) {
							this.j.error(f);
						}
					}
					async s(p) {
						n(this.a, p);
					}
				};
				(e.$BTc = h),
					(e.$BTc =
						h =
						u =
							Ne(
								[
									j(0, m.$6Sb),
									j(1, E.$Ep),
									j(2, E.$Hp),
									j(3, C.$4N),
									j(4, d.$ik),
								],
								h,
							));
				let c = class extends t.$GLb {
					static {
						a = this;
					}
					static {
						this.PREFIX = "ext ";
					}
					constructor(p) {
						super(a.PREFIX), (this.a = p);
					}
					g() {
						return [
							{ label: (0, i.localize)(6445, null), accept: () => n(this.a) },
						];
					}
				};
				(e.$CTc = c), (e.$CTc = c = a = Ne([j(0, m.$6Sb)], c));
				async function n(g, p = "") {
					const f = (
						await g.openPaneComposite(
							w.$LQb,
							r.ViewContainerLocation.Sidebar,
							!0,
						)
					)?.getViewPaneContainer();
					f?.search(p), f?.focus();
				}
			},
		),
		define(
			de[3528],
			he([1, 0, 27, 46, 71, 4, 8, 43, 31, 40, 141, 57, 142, 60, 69]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (E = mt(E));
				async function g(p, o) {
					const f = await p.openPaneComposite(
						u.$LQb,
						c.ViewContainerLocation.Sidebar,
						!0,
					);
					f && (f?.getViewPaneContainer()).search(o);
				}
				(0, i.$ntb)(
					class extends i.$itb {
						constructor() {
							super({
								id: "editor.action.formatDocument.none",
								label: E.localize(7063, null),
								alias: "Format Document",
								precondition: C.$Kj.and(
									w.EditorContextKeys.writable,
									w.EditorContextKeys.hasDocumentFormattingProvider.toNegated(),
								),
								kbOpts: {
									kbExpr: w.EditorContextKeys.editorTextFocus,
									primary: t.KeyMod.Shift | t.KeyMod.Alt | t.KeyCode.KeyF,
									linux: {
										primary: t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.KeyI,
									},
									weight: d.KeybindingWeight.EditorContrib,
								},
							});
						}
						async run(o, f) {
							if (!f.hasModel()) return;
							const b = o.get(m.$ek),
								s = o.get(h.$6Sb),
								l = o.get(r.$4N),
								y = o.get(a.$GO),
								$ = o.get(n.$k3),
								v = f.getModel(),
								S = $.documentFormattingEditProvider.all(v).length;
							if (S > 1)
								return b.executeCommand(
									"editor.action.formatDocument.multiple",
								);
							if (S === 1)
								return b.executeCommand("editor.action.formatDocument");
							if (v.isTooLargeForSyncing()) l.warn(E.localize(7064, null));
							else {
								const I = v.getLanguageId(),
									T = E.localize(7065, null, I),
									{ confirmed: P } = await y.confirm({
										message: T,
										primaryButton: E.localize(7066, null),
									});
								P && g(s, `category:formatters ${I}`);
							}
						}
					},
				);
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[3529],
		he([
			1, 0, 4, 30, 55, 52, 12, 119, 40, 111, 21, 141, 3073, 32, 33, 142, 60,
			704, 62, 3458,
		]),
		function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
			"use strict";
			var s;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(C = mt(C)),
				(r = xi(r));
			let l = class extends b.$75c {
				static {
					s = this;
				}
				static {
					this.c = "extensionsAssistant/languagePackSuggestionIgnore";
				}
				constructor(v, S, I, T, P, k, L, D) {
					super(),
						(this.f = v),
						(this.g = S),
						(this.h = I),
						(this.j = T),
						(this.m = P),
						(this.n = k),
						(this.q = L),
						(this.r = D),
						this.w(),
						this.D(this.m.onDidInstallExtensions((M) => this.s(M))),
						this.D(this.m.onDidUninstallExtension((M) => this.u(M)));
				}
				async s(v) {
					for (const S of v)
						S.operation === d.InstallOperation.Install &&
							S.local &&
							(await this.t(S.local, !!S.context?.extensionsSync));
				}
				async t(v, S) {
					const I = v.manifest.contributes?.localizations?.[0];
					if (!I || C.$z === I.languageId) return;
					const { languageId: T, languageName: P } = I;
					this.f.prompt(
						r.default.Info,
						(0, t.localize)(7414, null, this.h.nameLong, P || T),
						[
							{
								label: (0, t.localize)(7415, null),
								run: async () => {
									await this.g.setLocale(
										{ id: T, label: P ?? T, extensionId: v.identifier.id },
										!0,
									);
								},
							},
						],
						{
							sticky: !0,
							neverShowAgain: {
								id: "langugage.update.donotask",
								isSecondary: !0,
								scope: m.NeverShowAgainScope.APPLICATION,
							},
						},
					);
				}
				async u(v) {
					(await this.y(C.$z)) ||
						this.g.setLocale({ id: "en", label: "English" });
				}
				async w() {
					const v = C.$z;
					let S = C.$A ?? "";
					const I = JSON.parse(
						this.j.get(s.c, u.StorageScope.APPLICATION, "[]"),
					);
					if (
						!this.n.isEnabled() ||
						!v ||
						!S ||
						C.Language.isDefaultVariant() ||
						S.startsWith(v) ||
						I.includes(S) ||
						(await this.y(S))
					)
						return;
					const P = S;
					let k = await this.n.query(
						{ text: `tag:lp-${S}` },
						n.CancellationToken.None,
					);
					if (
						k.total === 0 &&
						((S = S.split("-")[0]),
						(k = await this.n.query(
							{ text: `tag:lp-${S}` },
							n.CancellationToken.None,
						)),
						k.total === 0)
					)
						return;
					const L =
							k.total === 1
								? k.firstPage[0]
								: k.firstPage.find(
										(G) =>
											G.publisher === "MS-CEINTL" &&
											G.name.startsWith("vscode-language-pack"),
									),
						D = L ?? k.firstPage[0];
					if (!D.assets.manifest) return;
					const [M, N] = await Promise.all([
							this.n.getManifest(D, n.CancellationToken.None),
							this.n.getCoreTranslation(D, S),
						]),
						A = M?.contributes?.localizations?.find((G) =>
							S.startsWith(G.languageId.toLowerCase()),
						),
						R = (A && A.languageName) || S,
						O = (A && (A.localizedLanguageName || A.languageName)) || S,
						B =
							N?.contents?.[
								"vs/workbench/contrib/localization/electron-sandbox/minimalTranslations"
							] ?? {},
						U = L ? "installAndRestartMessage" : "showLanguagePackExtensions",
						z = !B[U],
						F = {};
					Object.keys(h.$Tfd).forEach((G) => {
						!B[G] || z
							? (F[G] = h.$Tfd[G].replace("{0}", () => R))
							: (F[G] =
									`${B[G].replace("{0}", () => O)} (${h.$Tfd[G].replace("{0}", () => R)})`);
					});
					const x = (G) => {
							this.r.publicLog("languagePackSuggestion:popup", {
								userReaction: G,
								language: S,
							});
						},
						H = {
							label: F.searchMarketplace,
							run: async () => {
								x("search");
								const G = await this.q.openPaneComposite(
									a.$LQb,
									p.ViewContainerLocation.Sidebar,
									!0,
								);
								if (!G) return;
								const K = G.getViewPaneContainer();
								K && (K.search(`tag:lp-${S}`), K.focus());
							},
						},
						q = {
							label: F.installAndRestart,
							run: async () => {
								x("installAndRestart"),
									await this.g.setLocale(
										{
											id: S,
											label: R,
											extensionId: L?.identifier.id,
											galleryExtension: L,
										},
										!0,
									);
							},
						},
						V = F[U];
					this.f.prompt(
						r.default.Info,
						V,
						[
							L ? q : H,
							{
								label: (0, t.localize)(7416, null),
								isSecondary: !0,
								run: () => {
									I.push(P),
										this.j.store(
											s.c,
											JSON.stringify(I),
											u.StorageScope.APPLICATION,
											u.StorageTarget.USER,
										),
										x("neverShowAgain");
								},
							},
						],
						{
							onCancel: () => {
								x("cancelled");
							},
						},
					);
				}
				async y(v) {
					return (await this.m.getInstalled()).some(
						(I) =>
							!!I.manifest.contributes?.localizations?.length &&
							I.manifest.contributes.localizations.some((T) =>
								v.startsWith(T.languageId.toLowerCase()),
							),
					);
				}
			};
			(l = s =
				Ne(
					[
						j(0, m.$4N),
						j(1, o.$7Sb),
						j(2, f.$Bk),
						j(3, u.$lq),
						j(4, d.$Hp),
						j(5, d.$Ep),
						j(6, g.$6Sb),
						j(7, c.$km),
					],
					l,
				)),
				i.$Io
					.as(w.Extensions.Workbench)
					.registerWorkbenchContribution(l, E.LifecyclePhase.Eventually);
		},
	),
		define(
			de[3530],
			he([
				1, 0, 7, 267, 50, 3, 221, 4, 92, 173, 11, 8, 5, 41, 63, 26, 60, 141,
				108, 284, 294, 70, 190, 161, 142, 1845, 1837, 77, 176,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Z3b = void 0),
					(t = mt(t)),
					(d = mt(d));
				let k = class extends E.$1c {
					constructor(R, O, B, U, z, F, x, H, q, V, G) {
						super(),
							(this.g = R),
							(this.h = O),
							(this.j = B),
							(this.n = U),
							(this.output = z),
							(this.q = F),
							(this.r = x),
							(this.s = q),
							(this.t = V),
							(this.u = G),
							(this.b = this.D(new E.$Zc())),
							(this.f = !1),
							(this.L = null),
							(this.c = H),
							this.D(
								this.output.model.onDidChangeData(() => {
									this.rerender();
								}),
							),
							this.D(
								this.output.onDidResetRenderer(() => {
									this.rerender();
								}),
							);
					}
					detach() {
						this.renderedOutputContainer?.remove();
						let R = 0;
						if (this.innerContainer) {
							for (
								let O = 0;
								O < this.innerContainer.childNodes.length &&
								(this.innerContainer.childNodes[O].className ===
									"rendered-output" && R++,
								!(R > 1));
								O++
							);
							R === 0 && this.innerContainer.remove();
						}
						this.g.removeInset(this.output);
					}
					updateDOMTop(R) {
						this.innerContainer && (this.innerContainer.style.top = `${R}px`);
					}
					rerender() {
						if (
							this.g.hasModel() &&
							this.innerContainer &&
							this.renderResult &&
							this.renderResult.type === f.RenderOutputType.Extension
						) {
							const [R, O] = this.output.resolveMimeTypes(
									this.g.textModel,
									this.g.activeKernel?.preloadProvides,
								),
								B = R[O];
							if (
								B.mimeType === this.renderResult.mimeType &&
								B.rendererId === this.renderResult.renderer.id
							) {
								const U = this.h.outputsViewModels.indexOf(this.output);
								this.g.updateOutput(
									this.h,
									this.renderResult,
									this.h.getOutputOffset(U),
								);
								return;
							}
						}
						if (this.innerContainer) {
							const R = this.innerContainer.nextElementSibling;
							this.b.clear();
							const O = this.innerContainer;
							O && (O.remove(), this.g.removeInset(this.output)),
								this.render(R);
						} else {
							const R = this.j.renderedOutputEntries.findIndex(
									(B) => B.element === this,
								),
								O =
									R > 0 &&
									this.j.renderedOutputEntries[R - 1].element.innerContainer
										?.parentElement
										? this.j.renderedOutputEntries[R - 1].element.innerContainer
										: void 0;
							this.render(O);
						}
						this.N();
					}
					w(R, O) {
						return (
							(this.innerContainer = t.$(".output-inner-container")),
							R && R.nextElementSibling
								? this.n.domNode.insertBefore(
										this.innerContainer,
										R.nextElementSibling,
									)
								: this.n.domNode.appendChild(this.innerContainer),
							this.innerContainer.setAttribute("output-mime-type", O.mimeType),
							this.innerContainer
						);
					}
					render(R) {
						const O = this.h.outputsViewModels.indexOf(this.output);
						if (this.h.isOutputCollapsed || !this.g.hasModel()) {
							this.j.flagAsStale();
							return;
						}
						if (!l.CellUri.parse(this.h.uri)?.notebook) return;
						const U = this.g.textModel,
							[z, F] = this.output.resolveMimeTypes(
								U,
								this.g.activeKernel?.preloadProvides,
							);
						if (!z.find((V) => V.isTrusted) || z.length === 0) {
							this.h.updateOutputHeight(O, 0, "CellOutputElement#noMimeType");
							return;
						}
						const x = z[F];
						let H = this.q.getRendererInfo(x.rendererId);
						!H &&
							x.mimeType.indexOf("text/") > -1 &&
							(H = this.q.getRendererInfo("vscode.builtin-renderer"));
						const q = this.w(R, x);
						if (
							(O === 0 || this.output.visible.get()
								? this.G(q, U, this.g.activeKernel, O, z)
								: (this.D(
										(0, T.autorun)((V) => {
											const G = V.readObservable(this.output.visible);
											G && !this.f
												? this.G(q, U, this.g.activeKernel, O, z)
												: G || this.b.clear(),
												this.j.checkForHiddenOutputs();
										}),
									),
									this.j.hasHiddenOutputs.set(!0, void 0)),
							(this.renderedOutputContainer = t.$fhb(
								q,
								t.$(".rendered-output"),
							)),
							(this.renderResult = H
								? {
										type: f.RenderOutputType.Extension,
										renderer: H,
										source: this.output,
										mimeType: x.mimeType,
									}
								: this.y(this.output, x.mimeType)),
							(this.output.pickedMimeType = x),
							!this.renderResult)
						) {
							this.h.updateOutputHeight(
								O,
								0,
								"CellOutputElement#renderResultUndefined",
							);
							return;
						}
						return (
							this.g.createOutput(
								this.h,
								this.renderResult,
								this.h.getOutputOffset(O),
								!1,
							),
							q.classList.add("background"),
							{ initRenderIsSynchronous: !1 }
						);
					}
					y(R, O) {
						if (!R.model.outputs.length)
							return this.C(R, d.localize(8188, null));
						if (!O) {
							const U = R.model.outputs.map((z) => z.mime).join(", ");
							return this.C(R, d.localize(8189, null, U));
						}
						return this.z(R, O);
					}
					z(R, O) {
						const B = `@tag:notebookRenderer ${O}`,
							U = t.$(
								"p",
								void 0,
								`No renderer could be found for mimetype "${O}", but one might be available on the Marketplace.`,
							),
							z = t.$(
								"a",
								{
									href: `command:workbench.extensions.search?%22${B}%22`,
									class: "monaco-button monaco-text-button",
									tabindex: 0,
									role: "button",
									style:
										"padding: 8px; text-decoration: none; color: rgb(255, 255, 255); background-color: rgb(14, 99, 156); max-width: 200px;",
								},
								"Search Marketplace",
							);
						return {
							type: f.RenderOutputType.Html,
							source: R,
							htmlContent: U.outerHTML + z.outerHTML,
						};
					}
					C(R, O) {
						const B = t.$("p", void 0, O);
						return {
							type: f.RenderOutputType.Html,
							source: R,
							htmlContent: B.outerHTML,
						};
					}
					F(R) {
						if (
							!R.find(
								(O) =>
									I.$W3b.indexOf(O.mimeType) || O.mimeType.startsWith("image/"),
							)
						)
							return !1;
						if ((0, l.$76)(R[0].mimeType)) {
							const O = this.output.cellViewModel,
								B = O.outputsViewModels.indexOf(this.output);
							if (B > 0) {
								const U = O.model.outputs[B - 1];
								return !(0, l.$76)(U.outputs[0].mime);
							}
						}
						return !0;
					}
					async G(R, O, B, U, z) {
						const F = z.filter((Y) => Y.isTrusted).length > 1,
							x = this.F(z);
						if ((U > 0 && !F && !x) || !this.g.hasModel()) return;
						R.style.position = "relative";
						const H = t.$(".cell-output-toolbar");
						R.appendChild(H);
						const q = this.b.add(
							this.u.createInstance(r.$Syb, H, {
								renderDropdownAsChildElement: !1,
							}),
						);
						q.context = {
							ui: !0,
							cell: this.output.cellViewModel,
							outputViewModel: this.output,
							notebookEditor: this.g,
							$mid: C.MarshalledId.NotebookCellActionContext,
						};
						const V = this.b.add(
								new w.$rj(
									"notebook.output.pickMimetype",
									d.localize(8190, null),
									g.ThemeIcon.asClassName(b.$qOb),
									void 0,
									async (Y) => this.H(R, O, B, this.output),
								),
							),
							G = this.b.add(this.c.createScoped(R)),
							K = P.$MJb.bindTo(G);
						P.$LJb.bindTo(G).set(U === 0),
							this.b.add(
								(0, T.autorun)((Y) => {
									K.set(Y.readObservable(this.j.hasHiddenOutputs));
								}),
							);
						const W = this.b.add(
								this.s.createMenu(u.$XX.NotebookOutputToolbar, G),
							),
							X = () => {
								const Y = [];
								let ie = [];
								const ne = { primary: Y, secondary: ie };
								(0, m.$Kyb)(W, { shouldForwardArgs: !0 }, ne, () => !1),
									x || (ie = ie.filter((ee) => ee.id !== S.$X3b)),
									F && (ie = [V, ...ie]),
									q.setActions([], ie);
							};
						X(), this.b.add(W.onDidChange(X));
					}
					async H(R, O, B, U) {
						const [z, F] = U.resolveMimeTypes(O, B?.preloadProvides),
							x = [],
							H = [];
						z.forEach((Y, ie) => {
							Y.isTrusted &&
								(Y.rendererId === l.$X6 ? H : x).push({
									label: Y.mimeType,
									id: Y.mimeType,
									index: ie,
									picked: ie === F,
									detail: this.J(Y.rendererId),
									description: ie === F ? d.localize(8191, null) : void 0,
								});
						}),
							H.some((Y) => N.includes(Y.id)) &&
								H.push({
									label: d.localize(8192, null),
									id: "installRenderers",
									index: z.length,
								});
						const q = new E.$Zc(),
							V = q.add(this.r.createQuickPick({ useSeparators: !0 }));
						(V.items = [...x, { type: "separator" }, ...H]),
							(V.activeItems = x.filter((Y) => !!Y.picked)),
							(V.placeholder =
								x.length !== z.length
									? d.localize(8193, null)
									: d.localize(8194, null));
						const G = await new Promise((Y) => {
							q.add(
								V.onDidAccept(() => {
									Y(V.selectedItems.length === 1 ? V.selectedItems[0] : void 0),
										q.dispose();
								}),
							),
								V.show();
						});
						if (G === void 0 || G.index === F) return;
						if (G.id === "installRenderers") {
							this.I();
							return;
						}
						const K = R.nextElementSibling;
						this.b.clear();
						const J = this.innerContainer;
						J && (J.remove(), this.g.removeInset(U)),
							(U.pickedMimeType = z[G.index]),
							this.h.updateOutputMinHeight(this.h.layoutInfo.outputTotalHeight);
						const { mimeType: W, rendererId: X } = z[G.index];
						this.q.updateMimePreferredRenderer(
							O.viewType,
							W,
							X,
							z.map((Y) => Y.mimeType),
						),
							this.render(K),
							this.M(!1),
							this.N();
					}
					async I() {
						(
							await this.t.openPaneComposite(
								o.$LQb,
								p.ViewContainerLocation.Sidebar,
								!0,
							)
						)
							?.getViewPaneContainer()
							?.search(`@id:${f.$bJb}`);
					}
					J(R) {
						const O = this.q.getRendererInfo(R);
						return O
							? `${O.displayName !== "" ? O.displayName : O.id} (${O.extensionId.value})`
							: d.localize(8195, null);
					}
					M(R) {
						this.L !== null && clearTimeout(this.L),
							R
								? this.h.unlockOutputHeight()
								: (this.L = setTimeout(() => {
										this.h.unlockOutputHeight();
									}, 1e3));
					}
					N() {
						this.g.layoutNotebookCell(this.h, this.h.layoutInfo.totalHeight);
					}
					dispose() {
						this.L && (this.h.unlockOutputHeight(), clearTimeout(this.L)),
							super.dispose();
					}
				};
				k = Ne(
					[
						j(5, $.$MIb),
						j(6, n.$DJ),
						j(7, a.$6j),
						j(8, u.$YX),
						j(9, v.$6Sb),
						j(10, h.$Li),
					],
					k,
				);
				class L {
					constructor(R, O) {
						(this.model = R), (this.element = O);
					}
				}
				var D;
				(function (A) {
					(A[(A.Execution = 1)] = "Execution"), (A[(A.Other = 2)] = "Other");
				})(D || (D = {}));
				let M = class extends s.$A1b {
					checkForHiddenOutputs() {
						this.b.find((R) => R.model.visible)
							? this.hasHiddenOutputs.set(!0, void 0)
							: this.hasHiddenOutputs.set(!1, void 0);
					}
					get renderedOutputEntries() {
						return this.b;
					}
					constructor(R, O, B, U, z, F, x) {
						super(),
							(this.h = R),
							(this.j = O),
							(this.n = B),
							(this.q = U),
							(this.r = z),
							(this.s = F),
							(this.t = x),
							(this.b = []),
							(this.g = !1),
							(this.hasHiddenOutputs = (0, T.observableValue)(
								"hasHiddenOutputs",
								!1,
							)),
							(this.w = null),
							this.D(
								O.onDidStartExecution(() => {
									O.updateOutputMinHeight(O.layoutInfo.outputTotalHeight);
								}),
							),
							this.D(
								O.onDidStopExecution(() => {
									this.y(!1);
								}),
							),
							this.D(
								O.onDidChangeOutputs((H) => {
									const V = this.s.getCellExecution(O.uri)
										? D.Execution
										: D.Other;
									this.z(H, V);
								}),
							),
							this.D(
								O.onDidChangeLayout(() => {
									this.updateInternalLayoutNow(O);
								}),
							);
					}
					updateInternalLayoutNow(R) {
						this.n.outputContainer.setTop(R.layoutInfo.outputContainerOffset),
							this.n.outputShowMoreContainer.setTop(
								R.layoutInfo.outputShowMoreContainerOffset,
							),
							this.b.forEach((O) => {
								const B = this.j.outputsViewModels.indexOf(O.model);
								if (B >= 0) {
									const U = this.j.getOutputOffsetInContainer(B);
									O.element.updateDOMTop(U);
								}
							});
					}
					render() {
						try {
							this.u();
						} finally {
							this.G();
						}
					}
					flagAsStale() {
						this.g = !0;
					}
					u() {
						if (this.j.outputsViewModels.length > 0) {
							this.j.layoutInfo.outputTotalHeight !== 0 &&
								this.j.updateOutputMinHeight(
									this.j.layoutInfo.outputTotalHeight,
								),
								t.show(this.n.outputContainer.domNode);
							for (
								let R = 0;
								R < Math.min(this.q.limit, this.j.outputsViewModels.length);
								R++
							) {
								const O = this.j.outputsViewModels[R],
									B = this.t.createInstance(
										k,
										this.h,
										this.j,
										this,
										this.n.outputContainer,
										O,
									);
								this.b.push(new L(O, B)), B.render(void 0);
							}
							this.j.outputsViewModels.length > this.q.limit &&
								(t.show(this.n.outputShowMoreContainer.domNode),
								this.j.updateOutputShowMoreContainerHeight(46)),
								this.y(!1);
						} else t.hide(this.n.outputContainer.domNode);
						(this.n.outputShowMoreContainer.domNode.innerText = ""),
							this.j.outputsViewModels.length > this.q.limit
								? this.n.outputShowMoreContainer.domNode.appendChild(
										this.F(this.n.templateDisposables),
									)
								: (t.hide(this.n.outputShowMoreContainer.domNode),
									this.j.updateOutputShowMoreContainerHeight(0));
					}
					viewUpdateShowOutputs(R) {
						this.g &&
							((this.g = !1),
							this.b.forEach((O) => {
								O.element.rerender();
							}));
						for (let O = 0; O < this.b.length; O++) {
							const U = this.b[O].element;
							U.renderResult
								? this.h.createOutput(
										this.j,
										U.renderResult,
										this.j.getOutputOffset(O),
										!1,
									)
								: U.render(void 0);
						}
						this.G();
					}
					viewUpdateHideOuputs() {
						for (let R = 0; R < this.b.length; R++)
							this.h.hideInset(this.b[R].model);
					}
					y(R) {
						this.w !== null && clearTimeout(this.w);
						const O = this.s.getCellExecution(this.j.uri);
						R
							? this.j.unlockOutputHeight()
							: O?.state !== l.NotebookCellExecutionState.Executing &&
								(this.w = setTimeout(() => {
									this.j.unlockOutputHeight();
								}, 200));
					}
					z(R, O = D.Other) {
						const B = this.j.layoutInfo.outputTotalHeight;
						this.j.updateOutputMinHeight(B),
							this.j.outputsViewModels.length
								? t.show(this.n.outputContainer.domNode)
								: t.hide(this.n.outputContainer.domNode),
							this.j.spliceOutputHeights(
								R.start,
								R.deleteCount,
								R.newOutputs.map((U) => 0),
							),
							this.C(R, O);
					}
					C(R, O) {
						if (R.start >= this.q.limit) return;
						const B = this.b.slice(0, R.start),
							U = this.b.slice(R.start, R.start + R.deleteCount),
							z = this.b.slice(R.start + R.deleteCount);
						let F = this.j.outputsViewModels.slice(
							R.start,
							R.start + R.newOutputs.length,
						);
						if (B.length + F.length + z.length > this.q.limit)
							if (B.length + F.length > this.q.limit) {
								[...U, ...z].forEach((H) => {
									H.element.detach(), H.element.dispose();
								}),
									(F = F.slice(0, this.q.limit - B.length));
								const x = F.map(
									(H) =>
										new L(
											H,
											this.t.createInstance(
												k,
												this.h,
												this.j,
												this,
												this.n.outputContainer,
												H,
											),
										),
								);
								this.b = [...B, ...x];
								for (let H = B.length; H < this.b.length; H++)
									this.b[H].element.render(void 0);
							} else {
								const x = z.slice(this.q.limit - B.length - F.length);
								[...U, ...x].forEach((V) => {
									V.element.detach(), V.element.dispose();
								});
								const H = B.length + F.length,
									q = F.map(
										(V) =>
											new L(
												V,
												this.t.createInstance(
													k,
													this.h,
													this.j,
													this,
													this.n.outputContainer,
													V,
												),
											),
									);
								this.b = [
									...B,
									...q,
									...z.slice(0, this.q.limit - B.length - F.length),
								];
								for (let V = B.length; V < H; V++) {
									const G =
										V - 1 >= 0 &&
										this.b[V - 1] &&
										this.b[V - 1].element.innerContainer?.parentElement
											? this.b[V - 1].element.innerContainer
											: void 0;
									this.b[V].element.render(G);
								}
							}
						else {
							U.forEach((V) => {
								V.element.detach(), V.element.dispose();
							});
							const x = B.length + F.length,
								H = F.map(
									(V) =>
										new L(
											V,
											this.t.createInstance(
												k,
												this.h,
												this.j,
												this,
												this.n.outputContainer,
												V,
											),
										),
								);
							let q = [];
							if (
								B.length + H.length + z.length <
								this.j.outputsViewModels.length
							) {
								const V = Math.min(
									this.q.limit,
									this.j.outputsViewModels.length,
								);
								q = this.j.outputsViewModels
									.slice(B.length + H.length + z.length, V)
									.map(
										(G) =>
											new L(
												G,
												this.t.createInstance(
													k,
													this.h,
													this.j,
													this,
													this.n.outputContainer,
													G,
												),
											),
									);
							}
							this.b = [...B, ...H, ...z, ...q];
							for (let V = B.length; V < x; V++) {
								const G =
									V - 1 >= 0 &&
									this.b[V - 1] &&
									this.b[V - 1].element.innerContainer?.parentElement
										? this.b[V - 1].element.innerContainer
										: void 0;
								this.b[V].element.render(G);
							}
							for (let V = 0; V < q.length; V++)
								this.b[B.length + F.length + z.length + V].element.render(
									void 0,
								);
						}
						this.j.outputsViewModels.length > this.q.limit
							? (t.show(this.n.outputShowMoreContainer.domNode),
								this.n.outputShowMoreContainer.domNode.hasChildNodes() ||
									this.n.outputShowMoreContainer.domNode.appendChild(
										this.F(this.n.templateDisposables),
									),
								this.j.updateOutputShowMoreContainerHeight(46))
							: t.hide(this.n.outputShowMoreContainer.domNode),
							this.G(),
							this.y(O === D.Other && this.j.outputsViewModels.length === 0);
					}
					F(R) {
						const O = {
								value: `There are more than ${this.q.limit} outputs, [show more (open the raw output data in a text editor) ...](command:workbench.action.openLargeOutput)`,
								isTrusted: !0,
								supportThemeIcons: !0,
							},
							B = (0, i.$Uib)(O, {
								actionHandler: {
									callback: (U) => {
										U === "command:workbench.action.openLargeOutput" &&
											this.r.open(
												l.CellUri.generateCellOutputUri(this.h.textModel.uri),
											);
									},
									disposables: R,
								},
							});
						return (
							R.add(B), B.element.classList.add("output-show-more"), B.element
						);
					}
					G() {
						this.h.layoutNotebookCell(this.j, this.j.layoutInfo.totalHeight);
					}
					dispose() {
						this.j.updateOutputMinHeight(0),
							this.w && clearTimeout(this.w),
							this.b.forEach((R) => {
								R.element.dispose();
							}),
							super.dispose();
					}
				};
				(e.$Z3b = M),
					(e.$Z3b = M = Ne([j(4, c.$7rb), j(5, y.$d6), j(6, h.$Li)], M));
				const N = [
					"application/geo+json",
					"application/vdom.v1+json",
					"application/vnd.dataresource+json",
					"application/vnd.plotly.v1+json",
					"application/vnd.vega.v2+json",
					"application/vnd.vega.v3+json",
					"application/vnd.vega.v4+json",
					"application/vnd.vega.v5+json",
					"application/vnd.vegalite.v1+json",
					"application/vnd.vegalite.v2+json",
					"application/vnd.vegalite.v3+json",
					"application/vnd.vegalite.v4+json",
					"application/x-nteract-model-debug+json",
					"image/svg+xml",
					"text/latex",
					"text/vnd.plotly.v1+html",
					"application/vnd.jupyter.widget-view+json",
					"application/vnd.code.notebook.error",
				];
			},
		),
		define(
			de[1308],
			he([
				1, 0, 24, 15, 33, 14, 6, 3, 221, 37, 4, 31, 73, 34, 62, 84, 63, 26, 60,
				141, 108, 284, 243, 53, 142, 9, 41, 238, 157,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$b4b = void 0);
				function k(F) {
					return "kernel" in F;
				}
				function L(F) {
					return "kernels" in F;
				}
				function D(F) {
					return "action" in F;
				}
				function M(F) {
					return F.id === "installSuggested" && "extensionIds" in F;
				}
				function N(F) {
					return F.id === "install";
				}
				function A(F) {
					return "command" in F;
				}
				function R(F) {
					return "autoRun" in F && !!F.autoRun;
				}
				const O = 200;
				function B(F, x) {
					const H = {
						kernel: F,
						picked: F.id === x?.id,
						label: F.label,
						description: F.description,
						detail: F.detail,
					};
					return (
						F.id === x?.id &&
							(H.description
								? (H.description = (0, u.localize)(8217, null, H.description))
								: (H.description = (0, u.localize)(8216, null))),
						H
					);
				}
				class U {
					constructor(x, H, q, V, G, K, J, W, X) {
						(this.c = x),
							(this.d = H),
							(this.f = q),
							(this.g = V),
							(this.h = G),
							(this.i = K),
							(this.j = J),
							(this.l = W),
							(this.m = X);
					}
					async showQuickPick(x, H, q) {
						const V = x.textModel,
							G = x.scopedContextKeyService,
							K = this.n(V),
							{ selected: J, all: W } = K;
						let X;
						if (H) {
							for (const Z of W)
								if (Z.id === H) {
									X = Z;
									break;
								}
							if (!X)
								return (
									this.h.warn(
										`wanted kernel DOES NOT EXIST, wanted: ${H}, all: ${W.map((Z) => Z.id)}`,
									),
									!1
								);
						}
						if (X) return this.q(V, X), !0;
						const Y = new d.$Zc(),
							ie = Y.add(this.f.createQuickPick({ useSeparators: !0 })),
							ne = this.o(V, K, this.c, G);
						if (ne.length === 1 && R(ne[0]) && !q) {
							const Z = await this.p(x, ne[0], ne);
							return Y.dispose(), Z;
						}
						(ie.items = ne),
							(ie.canSelectMany = !1),
							(ie.placeholder = J
								? (0, u.localize)(
										8218,
										null,
										this.g.getUriLabel(V.uri, { relative: !0 }),
									)
								: (0, u.localize)(
										8219,
										null,
										this.g.getUriLabel(V.uri, { relative: !0 }),
									)),
							(ie.busy = this.c.getKernelDetectionTasks(V).length > 0);
						const ee = this.c.onDidChangeKernelDetectionTasks(() => {
								ie.busy = this.c.getKernelDetectionTasks(V).length > 0;
							}),
							_ =
								ne.length === 0
									? (0, i.$zh)((Z) => this.s(V, ie, this.j, Z))
									: void 0,
							te = C.Event.debounce(
								C.Event.any(
									this.c.onDidChangeSourceActions,
									this.c.onDidAddKernel,
									this.c.onDidRemoveKernel,
									this.c.onDidChangeNotebookAffinity,
								),
								(Z, se) => Z,
								O,
							)(async () => {
								(ie.busy = !1), _?.cancel();
								const Z = ie.activeItems,
									se = this.n(V),
									re = this.o(V, se, this.c, G);
								ie.keepScrollPosition = !0;
								const le = [];
								for (const oe of Z)
									if (k(oe)) {
										const ae = oe.kernel.id,
											pe = re.find(($e) => k($e) && $e.kernel.id === ae);
										pe && le.push(pe);
									} else if (D(oe)) {
										const ae = re.find(
											(pe) =>
												D(pe) && pe.action.action.id === oe.action.action.id,
										);
										ae && le.push(ae);
									}
								(ie.items = re), (ie.activeItems = le);
							}, this),
							Q = await new Promise((Z, se) => {
								Y.add(
									ie.onDidAccept(() => {
										const re = ie.selectedItems[0];
										Z(
											re
												? { selected: re, items: ie.items }
												: { selected: void 0, items: ie.items },
										),
											ie.hide();
									}),
								),
									Y.add(
										ie.onDidHide(() => {
											ee.dispose(),
												te.dispose(),
												ie.dispose(),
												Z({ selected: void 0, items: ie.items });
										}),
									),
									ie.show();
							});
						return (
							Y.dispose(),
							Q.selected ? await this.p(x, Q.selected, Q.items) : !1
						);
					}
					n(x) {
						return this.c.getMatchingKernel(x);
					}
					async p(x, H, q) {
						if (k(H)) {
							const V = H.kernel;
							return this.q(x.textModel, V), !0;
						}
						return (
							N(H)
								? await this.r(this.i, this.j, this.l, x.textModel.viewType, [])
								: M(H)
									? await this.r(
											this.i,
											this.j,
											this.l,
											x.textModel.viewType,
											H.extensionIds,
											this.d.quality !== "stable",
										)
									: D(H) && H.action.runAction(),
							!0
						);
					}
					q(x, H) {
						this.c.selectKernelForNotebook(H, x);
					}
					async r(x, H, q, V, G, K) {
						const J = [],
							W = [];
						for (const ne of G) {
							const ee = (
								await H.getExtensions([{ id: ne }], w.CancellationToken.None)
							)[0];
							ee.enablementState === P.EnablementState.DisabledGlobally ||
							ee.enablementState === P.EnablementState.DisabledWorkspace ||
							ee.enablementState === P.EnablementState.DisabledByEnvironment
								? W.push(ee)
								: (await H.canInstall(ee)) && J.push(ee);
						}
						if (J.length || W.length) {
							await Promise.all([
								...J.map(async (ne) => {
									await H.install(
										ne,
										{
											installPreReleaseVersion: K ?? !1,
											context: { skipWalkthrough: !0 },
										},
										g.ProgressLocation.Notification,
									);
								}),
								...W.map(async (ne) => {
									switch (ne.enablementState) {
										case P.EnablementState.DisabledWorkspace:
											await H.setEnablement(
												[ne],
												P.EnablementState.EnabledWorkspace,
											);
											return;
										case P.EnablementState.DisabledGlobally:
											await H.setEnablement(
												[ne],
												P.EnablementState.EnabledGlobally,
											);
											return;
										case P.EnablementState.DisabledByEnvironment:
											await H.setEnablement(
												[ne],
												P.EnablementState.EnabledByEnvironment,
											);
											return;
										default:
											break;
									}
								}),
							]),
								await q.activateByEvent(`onNotebook:${V}`);
							return;
						}
						const Y = (
								await x.openPaneComposite(
									b.$LQb,
									f.ViewContainerLocation.Sidebar,
									!0,
								)
							)?.getViewPaneContainer(),
							ie = V.split(/[^a-z0-9]/gi)
								.map(r.$dg)
								.join("");
						Y?.search(`@tag:notebookKernel${ie}`);
					}
					async s(x, H, q, V) {
						H.busy = !0;
						const G = await this.t(x, q);
						(H.busy = !1),
							!V.isCancellationRequested &&
								G &&
								H.items.length === 0 &&
								(H.items = G);
					}
					async t(x, H) {
						const q = [],
							V = this.u(x),
							G = V ? this.v(x.viewType, V) : void 0;
						if (G) {
							if (
								(await H.queryLocal(),
								H.installed.filter(
									(J) =>
										(J.enablementState ===
											P.EnablementState.EnabledByEnvironment ||
											J.enablementState === P.EnablementState.EnabledGlobally ||
											J.enablementState ===
												P.EnablementState.EnabledWorkspace) &&
										G.extensionIds.includes(J.identifier.id),
								).length === G.extensionIds.length)
							)
								return;
							q.push({
								id: "installSuggested",
								description: G.displayName ?? G.extensionIds.join(", "),
								label:
									`$(${E.$ak.lightbulb.id}) ` + (0, u.localize)(8220, null),
								extensionIds: G.extensionIds,
							});
						}
						return (
							q.push({ id: "install", label: (0, u.localize)(8221, null) }), q
						);
					}
					u(x) {
						let q = x.metadata?.metadata?.language_info?.name;
						if (!q) {
							const V = x.cells
								.map((G) => G.language)
								.filter((G) => G !== "markdown");
							if (V.length > 1) {
								const G = V[0];
								V.every((K) => K === G) && (q = G);
							}
						}
						return q;
					}
					v(x, H) {
						return s.$dJb.get(x)?.get(H);
					}
				}
				let z = class extends U {
					constructor(x, H, q, V, G, K, J, W, X, Y, ie) {
						super(x, H, q, V, G, K, J, W, X), (this.w = Y), (this.x = ie);
					}
					o(x, H, q, V) {
						const G = [];
						if (H.selected) {
							const J = B(H.selected, H.selected);
							G.push(J);
						}
						H.suggestions
							.filter((J) => J.id !== H.selected?.id)
							.map((J) => B(J, H.selected))
							.forEach((J) => {
								G.push(J);
							});
						const K = G.length === 0;
						return (
							G.length > 0 && G.push({ type: "separator" }),
							G.push({
								id: "selectAnother",
								label: (0, u.localize)(8222, null),
								autoRun: K,
							}),
							G
						);
					}
					q(x, H) {
						const q = this.c.getMatchingKernel(x);
						q.selected && this.w.addMostRecentKernel(q.selected),
							super.q(x, H),
							this.w.addMostRecentKernel(H);
					}
					n(x) {
						const { selected: H, all: q } = this.w.getKernels(x),
							V = this.c.getMatchingKernel(x);
						return { selected: H, all: V.all, suggestions: q, hidden: [] };
					}
					async p(x, H, q) {
						return H.id === "selectAnother"
							? this.C(x, q.length === 1 && q[0] === H)
							: super.p(x, H, q);
					}
					async C(x, H) {
						const q = x.textModel,
							V = new d.$Zc(),
							G = V.add(this.f.createQuickPick({ useSeparators: !0 })),
							K = await new Promise((J) => {
								(G.title = H
									? (0, u.localize)(8223, null)
									: (0, u.localize)(8224, null)),
									(G.placeholder = (0, u.localize)(8225, null)),
									(G.busy = !0),
									(G.buttons = [this.f.backButton]),
									G.show(),
									V.add(
										G.onDidTriggerButton((W) => {
											W === this.f.backButton && J(W);
										}),
									),
									V.add(
										G.onDidTriggerItemButton(async (W) => {
											if (A(W.item) && W.item.documentation !== void 0) {
												const X = S.URI.isUri(W.item.documentation)
													? S.URI.parse(W.item.documentation)
													: await this.m.executeCommand(W.item.documentation);
												this.x.open(X, { openExternal: !0 });
											}
										}),
									),
									V.add(
										G.onDidAccept(async () => {
											J(G.selectedItems[0]);
										}),
									),
									V.add(
										G.onDidHide(() => {
											J(void 0);
										}),
									),
									this.D(x).then((W) => {
										(G.items = W), G.items.length > 0 && (G.busy = !1);
									}),
									V.add(
										C.Event.debounce(
											C.Event.any(
												this.c.onDidChangeSourceActions,
												this.c.onDidAddKernel,
												this.c.onDidRemoveKernel,
											),
											(W, X) => W,
											O,
										)(async () => {
											G.busy = !0;
											const W = await this.D(x);
											(G.items = W), (G.busy = !1);
										}),
									);
							});
						if ((G.hide(), V.dispose(), K === this.f.backButton))
							return this.showQuickPick(x, void 0, !0);
						if (K) {
							const J = K;
							if (A(J))
								try {
									const W = await this.F(q, J.command);
									if (W) {
										const { all: X } = await this.n(q),
											Y = X.find((ie) => ie.id === `ms-toolsai.jupyter/${W}`);
										return Y && (await this.q(q, Y)), !0;
									} else return this.C(x, !1);
								} catch {
									return !1;
								}
							else {
								if (k(J)) return await this.q(q, J.kernel), !0;
								if (L(J)) return await this.E(q, J.label, J.kernels), !0;
								if (D(J))
									try {
										return await J.action.runAction(), !0;
									} catch {
										return !1;
									}
								else {
									if (N(J))
										return (
											await this.r(
												this.i,
												this.j,
												this.l,
												x.textModel.viewType,
												[],
											),
											!0
										);
									if (M(J))
										return (
											await this.r(
												this.i,
												this.j,
												this.l,
												x.textModel.viewType,
												J.extensionIds,
												this.d.quality !== "stable",
											),
											this.C(x, !1)
										);
								}
							}
						}
						return !1;
					}
					async D(x) {
						const H = x.textModel,
							q = this.c.getSourceActions(H, x.scopedContextKeyService),
							V = await this.c.getKernelSourceActions2(H),
							G = this.n(H);
						if (q.length === 0 && G.all.length === 0 && V.length === 0)
							return (await this.t(H, this.j)) ?? [];
						const K = G.all.filter((X) => X.extension.value !== s.$bJb),
							J = [];
						for (const X of (0, t.$Db)(K, (Y, ie) =>
							Y.extension.value === ie.extension.value ? 0 : 1,
						)) {
							const Y = this.l.extensions.find(
									(ne) => ne.identifier.value === X[0].extension.value,
								),
								ie = Y?.displayName ?? Y?.description ?? X[0].extension.value;
							X.length > 1
								? J.push({ label: ie, kernels: X })
								: J.push({ label: X[0].label, kernel: X[0] });
						}
						const W = V.filter((X) => X.command);
						J.push(
							...W.map((X) => {
								const Y = X.documentation
									? [
											{
												iconClass: o.ThemeIcon.asClassName(E.$ak.info),
												tooltip: (0, u.localize)(8226, null),
											},
										]
									: [];
								return {
									id: typeof X.command == "string" ? X.command : X.command.id,
									label: X.label,
									description: X.description,
									command: X.command,
									documentation: X.documentation,
									buttons: Y,
								};
							}),
						);
						for (const X of q) {
							const Y = {
								action: X,
								picked: !1,
								label: X.action.label,
								tooltip: X.action.tooltip,
							};
							J.push(Y);
						}
						return J;
					}
					async E(x, H, q) {
						const V = q.map((J) => B(J, void 0)),
							G = new d.$Zc(),
							K = G.add(this.f.createQuickPick({ useSeparators: !0 }));
						(K.items = V),
							(K.canSelectMany = !1),
							(K.title = (0, u.localize)(8227, null, H)),
							G.add(
								K.onDidAccept(async () => {
									K.selectedItems &&
										K.selectedItems.length > 0 &&
										k(K.selectedItems[0]) &&
										(await this.q(x, K.selectedItems[0].kernel)),
										K.hide(),
										K.dispose();
								}),
							),
							G.add(
								K.onDidHide(() => {
									G.dispose();
								}),
							),
							K.show();
					}
					async F(x, H) {
						const q = typeof H == "string" ? H : H.id,
							V = typeof H == "string" ? [] : (H.arguments ?? []);
						return (
							(typeof H == "string" ||
								!H.arguments ||
								!Array.isArray(H.arguments) ||
								H.arguments.length === 0) &&
								V.unshift({
									uri: x.uri,
									$mid: m.MarshalledId.NotebookActionContext,
								}),
							typeof H == "string"
								? this.m.executeCommand(q)
								: this.m.executeCommand(q, ...V)
						);
					}
					static updateKernelStatusAction(x, H, q, V) {
						if (q.getKernelDetectionTasks(x).length) {
							const X = q.getMatchingKernel(x);
							if (
								((H.enabled = !0),
								(H.class = o.ThemeIcon.asClassName(
									o.ThemeIcon.modify(l.$jOb, "spin"),
								)),
								X.selected)
							) {
								H.label = X.selected.label;
								const Y = X.selected.description ?? X.selected.detail;
								H.tooltip = Y
									? (0, u.localize)(8228, null, Y)
									: (0, u.localize)(8229, null);
							} else H.label = (0, u.localize)(8230, null);
							return;
						}
						const K = q.getRunningSourceActions(x),
							J = (X, Y) => {
								const ie = X.action;
								(H.class = Y
									? o.ThemeIcon.asClassName(o.ThemeIcon.modify(l.$jOb, "spin"))
									: o.ThemeIcon.asClassName(l.$6Nb)),
									(H.label = ie.label),
									(H.enabled = !0);
							};
						if (K.length) return J(K[0], !0);
						const { selected: W } = V.getKernels(x);
						W
							? ((H.label = W.label),
								(H.class = o.ThemeIcon.asClassName(l.$6Nb)),
								(H.tooltip = W.description ?? W.detail ?? ""))
							: ((H.label = (0, u.localize)(8231, null)),
								(H.class = o.ThemeIcon.asClassName(l.$6Nb)),
								(H.tooltip = ""));
					}
					static async resolveKernel(x, H, q, V) {
						const G = q.getKernels(x);
						if (G.selected) return G.selected;
						await V.executeCommand(T.$o5b);
						const { selected: K } = q.getKernels(x);
						return K;
					}
				};
				(e.$b4b = z),
					(e.$b4b = z =
						Ne(
							[
								j(0, y.$f6),
								j(1, n.$Bk),
								j(2, p.$DJ),
								j(3, h.$3N),
								j(4, c.$ik),
								j(5, v.$6Sb),
								j(6, b.$MQb),
								j(7, $.$q2),
								j(8, a.$ek),
								j(9, y.$g6),
								j(10, I.$7rb),
							],
							z,
						));
			},
		),
		define(
			de[3531],
			he([1, 0, 3, 4, 31, 174, 1308, 70, 190, 243, 557]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$LGc = void 0),
					(i = mt(i));
				let a = class {
					constructor(c, n, g, p, o, f) {
						(this.b = c),
							(this.d = n),
							(this.e = g),
							(this.f = p),
							(this.g = o),
							(this.h = f),
							(this.i = new Set());
					}
					async executeNotebookCells(c, n, g) {
						const p = Array.from(n).filter(
							(y) => y.cellKind === d.CellKind.Code,
						);
						if (!p.length) return;
						this.g.debug(
							"Execution",
							`${JSON.stringify(p.map((y) => y.handle))}`,
						);
						const o = i.localize(8177, null);
						if (!(await this.f.requestWorkspaceTrust({ message: o }))) return;
						const b = [];
						for (const y of p)
							this.h.getCellExecution(y.uri) ||
								b.push([y, this.h.createCellExecution(c.uri, y.handle)]);
						const s = await C.$b4b.resolveKernel(c, this.d, this.e, this.b);
						if (!s) {
							b.forEach((y) => y[1].complete({}));
							return;
						}
						this.e.addMostRecentKernel(s);
						const l = [];
						for (const [y, $] of b)
							s.supportedLanguages.includes(y.language)
								? l.push($)
								: $.complete({});
						if (l.length > 0) {
							await this.j(l),
								this.d.selectKernelForNotebook(s, c),
								await s.executeNotebookCellsRequest(
									c.uri,
									l.map(($) => $.cellHandle),
								);
							const y = l.filter(
								($) => $.state === d.NotebookCellExecutionState.Unconfirmed,
							);
							y.length &&
								(this.g.debug(
									"Execution",
									`Completing unconfirmed executions ${JSON.stringify(y.map(($) => $.cellHandle))}`,
								),
								y.forEach(($) => $.complete({}))),
								this.g.debug(
									"Execution",
									`Completed executions ${JSON.stringify(l.map(($) => $.cellHandle))}`,
								);
						}
					}
					async cancelNotebookCellHandles(c, n) {
						const g = Array.from(n);
						this.g.debug(
							"Execution",
							`CancelNotebookCellHandles ${JSON.stringify(g)}`,
						);
						const p = this.d.getSelectedOrSuggestedKernel(c);
						p && (await p.cancelNotebookCellExecution(c.uri, g));
					}
					async cancelNotebookCells(c, n) {
						this.cancelNotebookCellHandles(
							c,
							Array.from(n, (g) => g.handle),
						);
					}
					registerExecutionParticipant(c) {
						return this.i.add(c), (0, t.$Yc)(() => this.i.delete(c));
					}
					async j(c) {
						for (const n of this.i) await n.onWillExecuteCell(c);
					}
					dispose() {
						this.a?.dispose(!0);
					}
				};
				(e.$LGc = a),
					(e.$LGc = a =
						Ne(
							[
								j(0, w.$ek),
								j(1, r.$f6),
								j(2, r.$g6),
								j(3, E.$qO),
								j(4, u.$P2b),
								j(5, m.$d6),
							],
							a,
						));
			},
		),
		define(
			de[1855],
			he([
				1, 0, 198, 50, 4, 11, 8, 109, 5, 26, 238, 108, 284, 1308, 176, 243, 18,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$c4b = void 0);
				function o(b, s) {
					let l;
					if (s !== void 0 && "notebookEditorId" in s) {
						const y = s.notebookEditorId,
							$ = b.visibleEditorPanes.find(
								(v) => (0, a.$eJb)(v)?.getId() === y,
							);
						l = (0, a.$eJb)($);
					} else
						s !== void 0 && "notebookEditor" in s
							? (l = s?.notebookEditor)
							: (l = (0, a.$eJb)(b.activeEditorPane));
					return l;
				}
				(0, E.$4X)(
					class extends E.$3X {
						constructor() {
							super({
								id: u.$o5b,
								category: u.$p5b,
								title: (0, w.localize2)(8233, "Select Notebook Kernel"),
								icon: h.$6Nb,
								f1: !0,
								precondition: n.$mJb,
								menu: [
									{
										id: E.$XX.EditorTitle,
										when: C.$Kj.and(
											n.$mJb,
											C.$Kj.notEquals("config.notebook.globalToolbar", !0),
										),
										group: "navigation",
										order: -10,
									},
									{
										id: E.$XX.NotebookToolbar,
										when: C.$Kj.equals("config.notebook.globalToolbar", !0),
										group: "status",
										order: -10,
									},
									{
										id: E.$XX.InteractiveToolbar,
										when: n.$TJb.notEqualsTo(0),
										group: "status",
										order: -10,
									},
								],
								metadata: {
									description: (0, w.localize)(8232, null),
									args: [
										{
											name: "kernelInfo",
											description: "The kernel info",
											schema: {
												type: "object",
												required: ["id", "extension"],
												properties: {
													id: { type: "string" },
													extension: { type: "string" },
													notebookEditorId: { type: "string" },
												},
											},
										},
									],
								},
							});
						}
						async run(b, s) {
							const l = b.get(m.$Li),
								y = b.get(p.$IY),
								$ = o(y, s);
							if (!$ || !$.hasModel()) return !1;
							let v = s && "id" in s ? s.id : void 0,
								S = s && "extension" in s ? s.extension : void 0;
							v &&
								(typeof v != "string" || typeof S != "string") &&
								((v = void 0), (S = void 0));
							const I = $.textModel,
								P = b.get(g.$f6).getMatchingKernel(I),
								{ selected: k } = P;
							if (k && v && k.id === v && d.$Gn.equals(k.extension, S))
								return !0;
							const L = v ? `${S}/${v}` : void 0;
							return l.createInstance(c.$b4b).showQuickPick($, L);
						}
					},
				);
				let f = class extends t.$_ib {
					constructor(s, l, y, $, v) {
						super(
							void 0,
							new i.$rj(
								"fakeAction",
								void 0,
								r.ThemeIcon.asClassName(h.$6Nb),
								!0,
								(S) => s.run(S),
							),
							{ ...y, label: !1, icon: !0 },
						),
							(this.b = l),
							(this.c = $),
							(this.g = v),
							this.D(l.onDidChangeModel(this.n, this)),
							this.D($.onDidAddKernel(this.n, this)),
							this.D($.onDidRemoveKernel(this.n, this)),
							this.D($.onDidChangeNotebookAffinity(this.n, this)),
							this.D($.onDidChangeSelectedNotebooks(this.n, this)),
							this.D($.onDidChangeSourceActions(this.n, this)),
							this.D($.onDidChangeKernelDetectionTasks(this.n, this));
					}
					render(s) {
						this.n(),
							super.render(s),
							s.classList.add("kernel-action-view-item"),
							(this.a = document.createElement("a")),
							s.appendChild(this.a),
							this.u();
					}
					u() {
						this.a &&
							(this.a.classList.add("kernel-label"),
							(this.a.innerText = this._action.label));
					}
					n() {
						const s = this.b.textModel;
						if (!s) {
							this.r();
							return;
						}
						c.$b4b.updateKernelStatusAction(s, this._action, this.c, this.g),
							this.G();
					}
					r() {
						(this._action.enabled = !1),
							(this._action.label = ""),
							(this._action.class = "");
					}
				};
				(e.$c4b = f), (e.$c4b = f = Ne([j(3, g.$f6), j(4, g.$g6)], f));
			},
		),
		define(
			de[1309],
			he([
				1, 0, 4, 24, 37, 12, 132, 592, 11, 416, 39, 939, 1824, 28, 53, 109, 8,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				var o;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$svc = e.$qvc = void 0),
					(e.$rvc = l),
					(w = mt(w)),
					(e.$qvc = "keybinding.entry.template");
				const f = (0, t.localize)(12574, null),
					b = (0, t.localize)(12575, null),
					s = (0, t.localize)(12576, null);
				function l(L, D) {
					const M = D ? ` +when:${D}` : "";
					return `@command:${L}${M}`;
				}
				const y = (0, C.or)(C.$Tk, C.$Yk, C.$Uk),
					$ = /@command:\s*([^\+]+)/i,
					v = /\+when:\s*(.+)/i,
					S = /@source:\s*(user|default|system|extension)/i,
					I = /@ext:\s*((".+")|([^\s]+))/i,
					T = /@keybinding:\s*((\".+\")|(\S+))/i;
				let P = (o = class extends r.$PO {
					constructor(D, M, N) {
						super(),
							(this.n = M),
							(this.q = N),
							(this.c = []),
							(this.g = []),
							(this.j = {
								ui: d.$2ob.modifierLabels[D],
								aria: d.$3ob.modifierLabels[D],
								user: d.$5ob.modifierLabels[D],
							});
					}
					fetch(D, M = !1) {
						let N = M ? this.g : this.c;
						const A = $.exec(D);
						if (A && A[1]) {
							const R = A[1].trim();
							let O = N.filter((B) => B.command === R);
							if (O.length) {
								const B = v.exec(D);
								if (B && B[1]) {
									const U = B[1].trim();
									O = this.u(O, R, U);
								}
							}
							return O.map((B) => ({
								id: o.y(B),
								keybindingItem: B,
								templateId: e.$qvc,
							}));
						}
						if (S.test(D)) (N = this.r(N, D)), (D = D.replace(S, ""));
						else {
							const R = I.exec(D);
							if (R && (R[2] || R[3])) {
								const O = R[2] ? R[2].substring(1, R[2].length - 1) : R[3];
								(N = this.s(N, O)), (D = D.replace(I, ""));
							} else {
								const O = T.exec(D);
								O && (O[2] || O[3]) && (D = O[2] || `"${O[3]}"`);
							}
						}
						return (
							(D = D.trim()),
							D
								? this.t(N, D)
								: N.map((R) => ({
										id: o.y(R),
										keybindingItem: R,
										templateId: e.$qvc,
									}))
						);
					}
					r(D, M) {
						return /@source:\s*default/i.test(M) || /@source:\s*system/i.test(M)
							? D.filter((N) => N.source === f)
							: /@source:\s*user/i.test(M)
								? D.filter((N) => N.source === s)
								: /@source:\s*extension/i.test(M)
									? D.filter((N) => !(0, c.$lg)(N.source) || N.source === b)
									: D;
					}
					s(D, M) {
						return (
							(M = M.toLowerCase().trim()),
							D.filter(
								(N) =>
									!(0, c.$lg)(N.source) &&
									(g.$Gn.equals(N.source.identifier, M) ||
										N.source.displayName?.toLowerCase() === M.toLowerCase()),
							)
						);
					}
					t(D, M) {
						const N = M.charAt(0) === '"',
							A = M.charAt(M.length - 1) === '"',
							R = N && A;
						N && (M = M.substring(1)),
							A && (M = M.substring(0, M.length - 1)),
							(M = M.trim());
						const O = [],
							B = M.split(" "),
							U = this.w(B);
						for (const z of D) {
							const F = new k(this.j, z, M, B, U, R);
							(F.commandIdMatches ||
								F.commandLabelMatches ||
								F.commandDefaultLabelMatches ||
								F.sourceMatches ||
								F.whenMatches ||
								F.keybindingMatches ||
								F.extensionIdMatches ||
								F.extensionLabelMatches) &&
								O.push({
									id: o.y(z),
									templateId: e.$qvc,
									commandLabelMatches: F.commandLabelMatches || void 0,
									commandDefaultLabelMatches:
										F.commandDefaultLabelMatches || void 0,
									keybindingItem: z,
									keybindingMatches: F.keybindingMatches || void 0,
									commandIdMatches: F.commandIdMatches || void 0,
									sourceMatches: F.sourceMatches || void 0,
									whenMatches: F.whenMatches || void 0,
									extensionIdMatches: F.extensionIdMatches || void 0,
									extensionLabelMatches: F.extensionLabelMatches || void 0,
								});
						}
						return O;
					}
					u(D, M, N) {
						if (D.length === 0) return [];
						const A = D.filter((U) => U.when === N);
						if (A.length) return A;
						const R = D[0].commandLabel,
							O = new a.$qZ(
								void 0,
								M,
								null,
								p.$Kj.deserialize(N),
								!1,
								null,
								!1,
							),
							B = new Map([[M, R]]);
						return [o.F(M, O, B, this.z())];
					}
					w(D) {
						const M = [];
						for (const N of D) M.push(...(0, i.$Lb)(N.split("+")));
						return M;
					}
					async resolve(D = new Map()) {
						const M = this.z();
						this.g = [];
						const N = new Map();
						for (const R of this.n.getKeybindings())
							R.command &&
								(this.g.push(o.F(R.command, R, D, M)), N.set(R.command, !0));
						const A = this.n.getDefaultKeybindings().map((R) => R.command);
						for (const R of (0, h.$pvc)(N)) {
							const O = new a.$qZ(
								void 0,
								R,
								null,
								void 0,
								A.indexOf(R) === -1,
								null,
								!1,
							);
							this.g.push(o.F(R, O, D, M));
						}
						return (
							(this.g = (0, i.$Qb)(this.g, (R) => o.y(R))),
							(this.c = this.g.slice(0).sort((R, O) => o.C(R, O))),
							super.resolve()
						);
					}
					static y(D) {
						return (
							D.command +
							(D?.keybinding?.getAriaLabel() ?? "") +
							D.when +
							((0, c.$lg)(D.source) ? D.source : D.source.identifier.value)
						);
					}
					z() {
						const D = new g.$In();
						for (const M of this.q.extensions) D.set(M.identifier, M);
						return D;
					}
					static C(D, M) {
						return D.keybinding && !M.keybinding
							? -1
							: M.keybinding && !D.keybinding
								? 1
								: D.commandLabel && !M.commandLabel
									? -1
									: M.commandLabel && !D.commandLabel
										? 1
										: D.commandLabel &&
												M.commandLabel &&
												D.commandLabel !== M.commandLabel
											? D.commandLabel.localeCompare(M.commandLabel)
											: D.command === M.command
												? D.keybindingItem.isDefault
													? 1
													: -1
												: D.command.localeCompare(M.command);
					}
					static F(D, M, N, A) {
						const R = m.$ZX.getCommand(D),
							O = N.get(D);
						let B = s;
						if (M.isDefault) {
							const U =
								M.extensionId ??
								(M.resolvedKeybinding ? void 0 : R?.source?.id);
							B = U ? (A.get(U) ?? b) : f;
						}
						return {
							keybinding: M.resolvedKeybinding,
							keybindingItem: M,
							command: D,
							commandLabel: o.H(R, O),
							commandDefaultLabel: o.G(R),
							when: M.when ? M.when.serialize() : "",
							source: B,
						};
					}
					static G(D) {
						if (
							!E.Language.isDefaultVariant() &&
							D &&
							D.title &&
							D.title.original
						) {
							const M = D.category ? D.category.original : void 0,
								N = D.title.original;
							return M ? (0, t.localize)(12577, null, M, N) : N;
						}
						return null;
					}
					static H(D, M) {
						if (D) {
							const N = D.category
									? typeof D.category == "string"
										? D.category
										: D.category.value
									: void 0,
								A = typeof D.title == "string" ? D.title : D.title.value;
							return N ? (0, t.localize)(12578, null, N, A) : A;
						}
						return M || "";
					}
				});
				(e.$svc = P), (e.$svc = P = o = Ne([j(1, u.$uZ), j(2, n.$q2)], P));
				class k {
					constructor(D, M, N, A, R, O) {
						(this.c = D),
							(this.commandIdMatches = null),
							(this.commandLabelMatches = null),
							(this.commandDefaultLabelMatches = null),
							(this.sourceMatches = null),
							(this.whenMatches = null),
							(this.keybindingMatches = null),
							(this.extensionIdMatches = null),
							(this.extensionLabelMatches = null),
							O ||
								((this.commandIdMatches = this.d(
									N,
									M.command,
									(0, C.or)(C.$Yk, C.$Xk),
									A,
								)),
								(this.commandLabelMatches = M.commandLabel
									? this.d(
											N,
											M.commandLabel,
											(B, U) => (0, C.$Yk)(B, M.commandLabel, !0),
											A,
										)
									: null),
								(this.commandDefaultLabelMatches = M.commandDefaultLabel
									? this.d(
											N,
											M.commandDefaultLabel,
											(B, U) => (0, C.$Yk)(B, M.commandDefaultLabel, !0),
											A,
										)
									: null),
								(this.whenMatches = M.when
									? this.d(null, M.when, (0, C.or)(C.$Yk, C.$Xk), A)
									: null),
								(0, c.$lg)(M.source)
									? (this.sourceMatches = this.d(
											N,
											M.source,
											(B, U) => (0, C.$Yk)(B, M.source, !0),
											A,
										))
									: (this.extensionLabelMatches = M.source.displayName
											? this.d(
													N,
													M.source.displayName,
													(B, U) => (0, C.$Yk)(B, M.commandLabel, !0),
													A,
												)
											: null)),
							(this.keybindingMatches = M.keybinding
								? this.g(M.keybinding, N, R, O)
								: null);
					}
					d(D, M, N, A) {
						let R = D ? y(D, M) : null;
						return R || (R = this.e(A, M, N)), R && (R = this.f(R)), R;
					}
					e(D, M, N) {
						let A = [];
						for (const R of D) {
							const O = N(R, M);
							if (O) A = [...(A || []), ...O];
							else {
								A = null;
								break;
							}
						}
						return A;
					}
					f(D) {
						return (0, i.$Qb)(D, (M) => M.start + "." + M.end)
							.filter(
								(M) =>
									!D.some(
										(N) =>
											!(N.start === M.start && N.end === M.end) &&
											N.start <= M.start &&
											N.end >= M.end,
									),
							)
							.sort((M, N) => M.start - N.start);
					}
					g(D, M, N, A) {
						const [R, O] = D.getChords(),
							B = D.getUserSettingsLabel(),
							U = D.getAriaLabel(),
							z = D.getLabel();
						if (
							(B && w.$Hf(M, B) === 0) ||
							(U && w.$Hf(M, U) === 0) ||
							(z && w.$Hf(M, z) === 0)
						)
							return { firstPart: this.r(R), chordPart: this.r(O) };
						const F = {};
						let x = {};
						const H = [],
							q = [];
						let V = [],
							G = !0;
						for (let K = 0; K < N.length; K++) {
							const J = N[K];
							let W = !1,
								X = !1;
							G = G && !F.keyCode;
							let Y = !x.keyCode;
							if (G && ((W = this.h(R, F, J, A)), F.keyCode)) {
								for (const ie of V)
									q.indexOf(ie) === -1 && H.splice(H.indexOf(ie), 1);
								(x = {}), (V = []), (Y = !1);
							}
							Y && (X = this.h(O, x, J, A)),
								W && q.push(K),
								X && V.push(K),
								(W || X) && H.push(K),
								(G = G && this.s(J));
						}
						return H.length !== N.length ||
							(A && (!this.q(R, F) || (!(0, c.$yg)(x) && !this.q(O, x))))
							? null
							: this.p(F) || this.p(x)
								? { firstPart: F, chordPart: x }
								: null;
					}
					h(D, M, N, A) {
						let R = !1;
						return (
							this.j(D, N) && ((R = !0), (M.metaKey = !0)),
							this.l(D, N) && ((R = !0), (M.ctrlKey = !0)),
							this.n(D, N) && ((R = !0), (M.shiftKey = !0)),
							this.o(D, N) && ((R = !0), (M.altKey = !0)),
							this.i(D, N, A) && ((M.keyCode = !0), (R = !0)),
							R
						);
					}
					i(D, M, N) {
						if (!D) return !1;
						const A = D.keyAriaLabel || "";
						if (N || A.length === 1 || M.length === 1) {
							if (w.$Hf(A, M) === 0) return !0;
						} else if ((0, C.$Uk)(M, A)) return !0;
						return !1;
					}
					j(D, M) {
						return !D || !D.metaKey ? !1 : this.v(M);
					}
					l(D, M) {
						return !D || !D.ctrlKey ? !1 : this.u(M);
					}
					n(D, M) {
						return !D || !D.shiftKey ? !1 : this.w(M);
					}
					o(D, M) {
						return !D || !D.altKey ? !1 : this.t(M);
					}
					p(D) {
						return (
							!!D.altKey ||
							!!D.ctrlKey ||
							!!D.metaKey ||
							!!D.shiftKey ||
							!!D.keyCode
						);
					}
					q(D, M) {
						return D
							? !(
									!M.keyCode ||
									(D.metaKey && !M.metaKey) ||
									(D.altKey && !M.altKey) ||
									(D.ctrlKey && !M.ctrlKey) ||
									(D.shiftKey && !M.shiftKey)
								)
							: !0;
					}
					r(D) {
						const M = {};
						return (
							D &&
								((M.keyCode = !0),
								D.metaKey && (M.metaKey = !0),
								D.altKey && (M.altKey = !0),
								D.ctrlKey && (M.ctrlKey = !0),
								D.shiftKey && (M.shiftKey = !0)),
							M
						);
					}
					s(D) {
						return !!(this.t(D) || this.u(D) || this.v(D) || this.w(D));
					}
					t(D) {
						return !!(
							w.$Mf(this.c.ui.altKey, D) ||
							w.$Mf(this.c.aria.altKey, D) ||
							w.$Mf(this.c.user.altKey, D) ||
							w.$Mf((0, t.localize)(12579, null), D)
						);
					}
					u(D) {
						return !!(
							w.$Mf(this.c.ui.ctrlKey, D) ||
							w.$Mf(this.c.aria.ctrlKey, D) ||
							w.$Mf(this.c.user.ctrlKey, D)
						);
					}
					v(D) {
						return !!(
							w.$Mf(this.c.ui.metaKey, D) ||
							w.$Mf(this.c.aria.metaKey, D) ||
							w.$Mf(this.c.user.metaKey, D) ||
							w.$Mf((0, t.localize)(12580, null), D)
						);
					}
					w(D) {
						return !!(
							w.$Mf(this.c.ui.shiftKey, D) ||
							w.$Mf(this.c.aria.shiftKey, D) ||
							w.$Mf(this.c.user.shiftKey, D)
						);
					}
				}
			},
		),
		define(
			de[1310],
			he([1, 0, 14, 12, 4, 5, 79, 223, 1309]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				var r;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$tvc = void 0),
					(w = mt(w));
				const u = (0, C.$$O)(
					"keybindings-editor-label-icon",
					t.$ak.keyboard,
					w.localize(12572, null),
				);
				let a = class extends d.$LO {
					static {
						r = this;
					}
					static {
						this.ID = "workbench.input.keybindings";
					}
					constructor(c) {
						super(),
							(this.searchOptions = null),
							(this.resource = void 0),
							(this.keybindingsModel = c.createInstance(m.$svc, i.OS));
					}
					get typeId() {
						return r.ID;
					}
					getName() {
						return w.localize(12573, null);
					}
					getIcon() {
						return u;
					}
					async resolve() {
						return this.keybindingsModel;
					}
					matches(c) {
						return c instanceof r;
					}
					dispose() {
						this.keybindingsModel.dispose(), super.dispose();
					}
				};
				(e.$tvc = a), (e.$tvc = a = r = Ne([j(0, E.$Li)], a));
			},
		),
		
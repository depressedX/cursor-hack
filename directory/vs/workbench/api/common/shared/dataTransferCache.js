define(de[1697], he([1, 0, 24, 76]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$4nc = void 0);
			class w {
				constructor() {
					(this.a = 0), (this.b = new Map());
				}
				add(C) {
					const d = this.a++;
					return (
						this.b.set(d, (0, t.$Lb)(Array.from(C, ([, m]) => m.asFile()))),
						{
							id: d,
							dispose: () => {
								this.b.delete(d);
							},
						}
					);
				}
				async resolveFileData(C, d) {
					const m = this.b.get(C);
					if (!m) throw new Error("No data transfer found");
					const r = m.find((u) => u.id === d);
					if (!r) throw new Error("No matching file found in data transfer");
					return i.$Te.wrap(await r.data());
				}
				dispose() {
					this.b.clear();
				}
			}
			e.$4nc = w;
		}),
		define(
			de[967],
			he([1, 0, 3, 6, 11, 8, 92]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$MMb = void 0);
				class d extends t.$1c {
					get primaryActions() {
						return this.b;
					}
					get secondaryActions() {
						return this.c;
					}
					constructor(u, a, h, c) {
						super(),
							(this.h = a),
							(this.j = h),
							(this.m = c),
							(this.b = []),
							(this.c = []),
							(this.f = this.D(new i.$re())),
							(this.onDidChange = this.f.event),
							(this.g = this.D(new t.$Zc())),
							(this.a = this.D(h.createMenu(u, c))),
							this.D(this.a.onDidChange(() => this.n())),
							this.n();
					}
					n() {
						this.g.clear(),
							(this.b = []),
							(this.c = []),
							(0, C.$Kyb)(this.a, this.h, {
								primary: this.b,
								secondary: this.c,
							}),
							this.g.add(this.q([...this.b, ...this.c], {})),
							this.f.fire();
					}
					q(u, a) {
						const h = new t.$Zc();
						for (const c of u)
							if (c instanceof w.$1X && !a[c.item.submenu.id]) {
								const n = (a[c.item.submenu.id] = h.add(
									this.j.createMenu(c.item.submenu, this.m),
								));
								h.add(n.onDidChange(() => this.n())),
									h.add(this.q(c.actions, a));
							}
						return h;
					}
				}
				let m = class extends t.$1c {
					constructor(u, a, h, c, n) {
						super(),
							(this.menuId = u),
							(this.g = a),
							(this.h = h),
							(this.j = c),
							(this.m = n),
							(this.f = this.D(new i.$re())),
							(this.onDidChange = this.f.event),
							(this.c = this.D(new d(u, this.h, n, c))),
							this.D(this.c.onDidChange(() => this.f.fire()));
					}
					getPrimaryActions() {
						return this.c.primaryActions;
					}
					getSecondaryActions() {
						return this.c.secondaryActions;
					}
					getContextMenuActions() {
						const u = [];
						if (this.g) {
							const a = this.m.getMenuActions(this.g, this.j, this.h);
							(0, C.$Kyb)(a, { primary: [], secondary: u });
						}
						return u;
					}
				};
				(e.$MMb = m), (e.$MMb = m = Ne([j(3, E.$6j), j(4, w.$YX)], m));
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[2943],
		he([1, 0, 4, 372, 12, 32, 41, 9, 11, 27, 62, 43, 99]),
		function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (i = xi(i));
			class c extends m.$3X {
				static {
					this.ID = "workbench.action.keybindingsReference";
				}
				static {
					this.AVAILABLE = !!(w.$n
						? i.default.keyboardShortcutsUrlLinux
						: w.$m
							? i.default.keyboardShortcutsUrlMac
							: i.default.keyboardShortcutsUrlWin);
				}
				constructor() {
					super({
						id: c.ID,
						title: {
							...(0, t.localize2)(2783, "Keyboard Shortcuts Reference"),
							mnemonicTitle: (0, t.localize)(2775, null),
						},
						category: h.$ck.Help,
						f1: !0,
						keybinding: {
							weight: a.KeybindingWeight.WorkbenchContrib,
							when: null,
							primary: (0, r.$os)(r.$ps, r.KeyMod.CtrlCmd | r.KeyCode.KeyR),
							mac: {
								primary: (0, r.$os)(r.$qs, r.KeyMod.CtrlCmd | r.KeyCode.KeyR),
							},
						},
						menu: { id: m.$XX.MenubarHelpMenu, group: "2_reference", order: 1 },
					});
				}
				run($) {
					const v = $.get(u.$Bk),
						S = $.get(C.$7rb),
						I = w.$n
							? v.keyboardShortcutsUrlLinux
							: w.$m
								? v.keyboardShortcutsUrlMac
								: v.keyboardShortcutsUrlWin;
					I && S.open(d.URI.parse(I));
				}
			}
			class n extends m.$3X {
				static {
					this.ID = "workbench.action.openVideoTutorialsUrl";
				}
				static {
					this.AVAILABLE = !!i.default.introductoryVideosUrl;
				}
				constructor() {
					super({
						id: n.ID,
						title: {
							...(0, t.localize2)(2784, "Video Tutorials"),
							mnemonicTitle: (0, t.localize)(2776, null),
						},
						category: h.$ck.Help,
						f1: !0,
						menu: { id: m.$XX.MenubarHelpMenu, group: "2_reference", order: 2 },
					});
				}
				run($) {
					const v = $.get(u.$Bk),
						S = $.get(C.$7rb);
					v.introductoryVideosUrl &&
						S.open(d.URI.parse(v.introductoryVideosUrl));
				}
			}
			class g extends m.$3X {
				static {
					this.ID = "workbench.action.openTipsAndTricksUrl";
				}
				static {
					this.AVAILABLE = !!i.default.tipsAndTricksUrl;
				}
				constructor() {
					super({
						id: g.ID,
						title: {
							...(0, t.localize2)(2785, "Tips and Tricks"),
							mnemonicTitle: (0, t.localize)(2777, null),
						},
						category: h.$ck.Help,
						f1: !0,
						menu: { id: m.$XX.MenubarHelpMenu, group: "2_reference", order: 3 },
					});
				}
				run($) {
					const v = $.get(u.$Bk),
						S = $.get(C.$7rb);
					v.tipsAndTricksUrl && S.open(d.URI.parse(v.tipsAndTricksUrl));
				}
			}
			class p extends m.$3X {
				static {
					this.ID = "workbench.action.openDocumentationUrl";
				}
				static {
					this.AVAILABLE = !!(w.$r
						? i.default.serverDocumentationUrl
						: i.default.documentationUrl);
				}
				constructor() {
					super({
						id: p.ID,
						title: {
							...(0, t.localize2)(2786, "Documentation"),
							mnemonicTitle: (0, t.localize)(2778, null),
						},
						category: h.$ck.Help,
						f1: !0,
						menu: { id: m.$XX.MenubarHelpMenu, group: "1_welcome", order: 3 },
					});
				}
				run($) {
					const v = $.get(u.$Bk),
						S = $.get(C.$7rb),
						I = w.$r ? v.serverDocumentationUrl : v.documentationUrl;
					I && S.open(d.URI.parse(I));
				}
			}
			class o extends m.$3X {
				static {
					this.ID = "workbench.action.openNewsletterSignupUrl";
				}
				static {
					this.AVAILABLE = !!i.default.newsletterSignupUrl;
				}
				constructor() {
					super({
						id: o.ID,
						title: (0, t.localize2)(2787, "Signup for the VS Code Newsletter"),
						category: h.$ck.Help,
						f1: !0,
					});
				}
				run($) {
					const v = $.get(u.$Bk),
						S = $.get(C.$7rb),
						I = $.get(E.$km);
					S.open(
						d.URI.parse(
							`${v.newsletterSignupUrl}?machineId=${encodeURIComponent(I.machineId)}`,
						),
					);
				}
			}
			class f extends m.$3X {
				static {
					this.ID = "workbench.action.openYouTubeUrl";
				}
				static {
					this.AVAILABLE = !!i.default.youTubeUrl;
				}
				constructor() {
					super({
						id: f.ID,
						title: {
							...(0, t.localize2)(2788, "Join Us on YouTube"),
							mnemonicTitle: (0, t.localize)(2779, null),
						},
						category: h.$ck.Help,
						f1: !0,
						menu: { id: m.$XX.MenubarHelpMenu, group: "3_feedback", order: 1 },
					});
				}
				run($) {
					const v = $.get(u.$Bk),
						S = $.get(C.$7rb);
					v.youTubeUrl && S.open(d.URI.parse(v.youTubeUrl));
				}
			}
			class b extends m.$3X {
				static {
					this.ID = "workbench.action.openRequestFeatureUrl";
				}
				static {
					this.AVAILABLE = !!i.default.requestFeatureUrl;
				}
				constructor() {
					super({
						id: b.ID,
						title: {
							...(0, t.localize2)(2789, "Search Feature Requests"),
							mnemonicTitle: (0, t.localize)(2780, null),
						},
						category: h.$ck.Help,
						f1: !0,
						menu: { id: m.$XX.MenubarHelpMenu, group: "3_feedback", order: 2 },
					});
				}
				run($) {
					const v = $.get(u.$Bk),
						S = $.get(C.$7rb);
					v.requestFeatureUrl && S.open(d.URI.parse(v.requestFeatureUrl));
				}
			}
			class s extends m.$3X {
				static {
					this.ID = "workbench.action.openLicenseUrl";
				}
				static {
					this.AVAILABLE = !!(w.$r
						? i.default.serverLicense
						: i.default.licenseUrl);
				}
				constructor() {
					super({
						id: s.ID,
						title: {
							...(0, t.localize2)(2790, "View License"),
							mnemonicTitle: (0, t.localize)(2781, null),
						},
						category: h.$ck.Help,
						f1: !0,
						menu: { id: m.$XX.MenubarHelpMenu, group: "4_legal", order: 1 },
					});
				}
				run($) {
					const v = $.get(u.$Bk),
						S = $.get(C.$7rb),
						I = w.$r ? v.serverLicenseUrl : v.licenseUrl;
					if (I)
						if (w.$z) {
							const T = I.indexOf("?") > 0 ? "&" : "?";
							S.open(d.URI.parse(`${I}${T}lang=${w.$z}`));
						} else S.open(d.URI.parse(I));
				}
			}
			class l extends m.$3X {
				static {
					this.ID = "workbench.action.openPrivacyStatementUrl";
				}
				static {
					this.AVAILABE = !!i.default.privacyStatementUrl;
				}
				constructor() {
					super({
						id: l.ID,
						title: {
							...(0, t.localize2)(2791, "Privacy Statement"),
							mnemonicTitle: (0, t.localize)(2782, null),
						},
						category: h.$ck.Help,
						f1: !0,
						menu: { id: m.$XX.MenubarHelpMenu, group: "4_legal", order: 2 },
					});
				}
				run($) {
					const v = $.get(u.$Bk),
						S = $.get(C.$7rb);
					v.privacyStatementUrl && S.open(d.URI.parse(v.privacyStatementUrl));
				}
			}
			c.AVAILABLE && (0, m.$4X)(c),
				n.AVAILABLE && (0, m.$4X)(n),
				g.AVAILABLE && (0, m.$4X)(g),
				p.AVAILABLE && (0, m.$4X)(p),
				o.AVAILABLE && (0, m.$4X)(o),
				f.AVAILABLE && (0, m.$4X)(f),
				b.AVAILABLE && (0, m.$4X)(b),
				s.AVAILABLE && (0, m.$4X)(s),
				l.AVAILABE && (0, m.$4X)(l);
		},
	),
		define(
			de[2944],
			he([
				1, 0, 27, 43, 7, 278, 93, 1578, 24, 8, 1169, 1170, 1582, 31, 1167, 411,
				7, 11, 10, 4, 72,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (w = mt(w));
				function l(P) {
					const k = P?.getHTMLElement();
					k && !(0, p.$Kgb)(k) && P?.domFocus();
				}
				async function y(P, k) {
					if (!C.$rMb.getValue(P.contextKeyService)) return k(P);
					const L = P.getFocus(),
						D = P.getSelection();
					await k(P);
					const M = P.getFocus();
					if (D.length > 1 || !(0, m.$yb)(L, D) || (0, m.$yb)(L, M)) return;
					const N = new KeyboardEvent("keydown");
					P.setSelection(M, N);
				}
				async function $(P, k) {
					if (!P) return;
					await y(P, k);
					const L = P.getFocus();
					L.length && P.reveal(L[0]), P.setAnchor(L[0]), l(P);
				}
				i.$TX.registerCommandAndKeybindingRule({
					id: "list.focusDown",
					weight: i.KeybindingWeight.WorkbenchContrib,
					when: C.$nMb,
					primary: t.KeyCode.DownArrow,
					mac: {
						primary: t.KeyCode.DownArrow,
						secondary: [t.KeyMod.WinCtrl | t.KeyCode.KeyN],
					},
					handler: (P, k) => {
						$(P.get(C.$fMb).lastFocusedList, async (L) => {
							const D = new KeyboardEvent("keydown");
							await L.focusNext(typeof k == "number" ? k : 1, !1, D);
						});
					},
				}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.focusUp",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: C.$nMb,
						primary: t.KeyCode.UpArrow,
						mac: {
							primary: t.KeyCode.UpArrow,
							secondary: [t.KeyMod.WinCtrl | t.KeyCode.KeyP],
						},
						handler: (P, k) => {
							$(P.get(C.$fMb).lastFocusedList, async (L) => {
								const D = new KeyboardEvent("keydown");
								await L.focusPrevious(typeof k == "number" ? k : 1, !1, D);
							});
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.focusAnyDown",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: C.$nMb,
						primary: t.KeyMod.Alt | t.KeyCode.DownArrow,
						mac: {
							primary: t.KeyMod.Alt | t.KeyCode.DownArrow,
							secondary: [t.KeyMod.WinCtrl | t.KeyMod.Alt | t.KeyCode.KeyN],
						},
						handler: (P, k) => {
							$(P.get(C.$fMb).lastFocusedList, async (L) => {
								const D = new KeyboardEvent("keydown", { altKey: !0 });
								await L.focusNext(typeof k == "number" ? k : 1, !1, D);
							});
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.focusAnyUp",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: C.$nMb,
						primary: t.KeyMod.Alt | t.KeyCode.UpArrow,
						mac: {
							primary: t.KeyMod.Alt | t.KeyCode.UpArrow,
							secondary: [t.KeyMod.WinCtrl | t.KeyMod.Alt | t.KeyCode.KeyP],
						},
						handler: (P, k) => {
							$(P.get(C.$fMb).lastFocusedList, async (L) => {
								const D = new KeyboardEvent("keydown", { altKey: !0 });
								await L.focusPrevious(typeof k == "number" ? k : 1, !1, D);
							});
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.focusPageDown",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: C.$nMb,
						primary: t.KeyCode.PageDown,
						handler: (P) => {
							$(P.get(C.$fMb).lastFocusedList, async (k) => {
								const L = new KeyboardEvent("keydown");
								await k.focusNextPage(L);
							});
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.focusPageUp",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: C.$nMb,
						primary: t.KeyCode.PageUp,
						handler: (P) => {
							$(P.get(C.$fMb).lastFocusedList, async (k) => {
								const L = new KeyboardEvent("keydown");
								await k.focusPreviousPage(L);
							});
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.focusFirst",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: C.$nMb,
						primary: t.KeyCode.Home,
						handler: (P) => {
							$(P.get(C.$fMb).lastFocusedList, async (k) => {
								const L = new KeyboardEvent("keydown");
								await k.focusFirst(L);
							});
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.focusLast",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: C.$nMb,
						primary: t.KeyCode.End,
						handler: (P) => {
							$(P.get(C.$fMb).lastFocusedList, async (k) => {
								const L = new KeyboardEvent("keydown");
								await k.focusLast(L);
							});
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.focusAnyFirst",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: C.$nMb,
						primary: t.KeyMod.Alt | t.KeyCode.Home,
						handler: (P) => {
							$(P.get(C.$fMb).lastFocusedList, async (k) => {
								const L = new KeyboardEvent("keydown", { altKey: !0 });
								await k.focusFirst(L);
							});
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.focusAnyLast",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: C.$nMb,
						primary: t.KeyMod.Alt | t.KeyCode.End,
						handler: (P) => {
							$(P.get(C.$fMb).lastFocusedList, async (k) => {
								const L = new KeyboardEvent("keydown", { altKey: !0 });
								await k.focusLast(L);
							});
						},
					});
				function v(P, k) {
					if (
						P instanceof E.List ||
						P instanceof d.$8ob ||
						P instanceof n.$ipb
					) {
						const L = P,
							D = L.getFocus() ? L.getFocus()[0] : void 0,
							M = L.getSelection();
						M && typeof D == "number" && M.indexOf(D) >= 0
							? L.setSelection(M.filter((N) => N !== k))
							: typeof D == "number" && L.setSelection(M.concat(D));
					} else if (
						P instanceof u.$Dpb ||
						P instanceof h.$Hpb ||
						P instanceof a.$Fpb
					) {
						const L = P,
							D = L.getFocus() ? L.getFocus()[0] : void 0;
						if (k === D) return;
						const M = L.getSelection(),
							N = new KeyboardEvent("keydown", { shiftKey: !0 });
						M && M.indexOf(D) >= 0
							? L.setSelection(
									M.filter((A) => A !== k),
									N,
								)
							: L.setSelection(M.concat(D), N);
					}
				}
				function S(P, k) {
					const L = P.getStickyScrollFocus();
					if (L.length === 0) throw new Error("StickyScroll has no focus");
					if (L.length > 1)
						throw new Error("StickyScroll can only have a single focused item");
					P.reveal(L[0]), P.getHTMLElement().focus(), P.setFocus(L), k?.(L[0]);
				}
				i.$TX.registerCommandAndKeybindingRule({
					id: "list.expandSelectionDown",
					weight: i.KeybindingWeight.WorkbenchContrib,
					when: r.$Kj.and(C.$nMb, C.$mMb),
					primary: t.KeyMod.Shift | t.KeyCode.DownArrow,
					handler: (P, k) => {
						const L = P.get(C.$fMb).lastFocusedList;
						if (!L) return;
						const D = L.getFocus() ? L.getFocus()[0] : void 0,
							M = new KeyboardEvent("keydown");
						L.focusNext(typeof k == "number" ? k : 1, !1, M), v(L, D);
						const N = L.getFocus();
						N.length && L.reveal(N[0]), l(L);
					},
				}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.expandSelectionUp",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: r.$Kj.and(C.$nMb, C.$mMb),
						primary: t.KeyMod.Shift | t.KeyCode.UpArrow,
						handler: (P, k) => {
							const L = P.get(C.$fMb).lastFocusedList;
							if (!L) return;
							const D = L.getFocus() ? L.getFocus()[0] : void 0,
								M = new KeyboardEvent("keydown");
							L.focusPrevious(typeof k == "number" ? k : 1, !1, M), v(L, D);
							const N = L.getFocus();
							N.length && L.reveal(N[0]), l(L);
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.collapse",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: r.$Kj.and(C.$nMb, r.$Kj.or(C.$tMb, C.$uMb)),
						primary: t.KeyCode.LeftArrow,
						mac: {
							primary: t.KeyCode.LeftArrow,
							secondary: [t.KeyMod.CtrlCmd | t.KeyCode.UpArrow],
						},
						handler: (P) => {
							const k = P.get(C.$fMb).lastFocusedList;
							if (
								!k ||
								!(
									k instanceof u.$Dpb ||
									k instanceof h.$Hpb ||
									k instanceof a.$Fpb
								)
							)
								return;
							const L = k,
								D = L.getFocus();
							if (D.length === 0) return;
							const M = D[0];
							if (!L.collapse(M)) {
								const N = L.getParentElement(M);
								N &&
									$(k, (A) => {
										const R = new KeyboardEvent("keydown");
										A.setFocus([N], R);
									});
							}
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.stickyScroll.collapse",
						weight: i.KeybindingWeight.WorkbenchContrib + 50,
						when: C.$lMb,
						primary: t.KeyCode.LeftArrow,
						mac: {
							primary: t.KeyCode.LeftArrow,
							secondary: [t.KeyMod.CtrlCmd | t.KeyCode.UpArrow],
						},
						handler: (P) => {
							const k = P.get(C.$fMb).lastFocusedList;
							!k ||
								!(
									k instanceof u.$Dpb ||
									k instanceof h.$Hpb ||
									k instanceof a.$Fpb
								) ||
								S(k, (L) => k.collapse(L));
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.collapseAll",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: C.$nMb,
						primary: t.KeyMod.CtrlCmd | t.KeyCode.LeftArrow,
						mac: {
							primary: t.KeyMod.CtrlCmd | t.KeyCode.LeftArrow,
							secondary: [
								t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.UpArrow,
							],
						},
						handler: (P) => {
							const k = P.get(C.$fMb).lastFocusedList;
							k &&
								!(
									k instanceof E.List ||
									k instanceof d.$8ob ||
									k instanceof n.$ipb
								) &&
								k.collapseAll();
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.collapseAllToFocus",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: C.$nMb,
						handler: (P) => {
							const k = P.get(C.$fMb).lastFocusedList,
								L = (0, C.$BMb)("keydown", !0);
							if (
								k instanceof u.$Dpb ||
								k instanceof h.$Hpb ||
								k instanceof a.$Fpb
							) {
								const D = k,
									M = D.getFocus();
								M.length > 0 && D.collapse(M[0], !0),
									D.setSelection(M, L),
									D.setAnchor(M[0]);
							}
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.focusParent",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: C.$nMb,
						handler: (P) => {
							const k = P.get(C.$fMb).lastFocusedList;
							if (
								!k ||
								!(
									k instanceof u.$Dpb ||
									k instanceof h.$Hpb ||
									k instanceof a.$Fpb
								)
							)
								return;
							const L = k,
								D = L.getFocus();
							if (D.length === 0) return;
							const M = D[0],
								N = L.getParentElement(M);
							N &&
								$(k, (A) => {
									const R = new KeyboardEvent("keydown");
									A.setFocus([N], R);
								});
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.expand",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: r.$Kj.and(C.$nMb, r.$Kj.or(C.$vMb, C.$wMb)),
						primary: t.KeyCode.RightArrow,
						handler: (P) => {
							const k = P.get(C.$fMb).lastFocusedList;
							if (k) {
								if (k instanceof u.$Dpb || k instanceof h.$Hpb) {
									const L = k.getFocus();
									if (L.length === 0) return;
									const D = L[0];
									if (!k.expand(D)) {
										const M = k.getFirstElementChild(D);
										M &&
											k.getNode(M).visible &&
											$(k, (A) => {
												const R = new KeyboardEvent("keydown");
												A.setFocus([M], R);
											});
									}
								} else if (k instanceof a.$Fpb) {
									const L = k.getFocus();
									if (L.length === 0) return;
									const D = L[0];
									k.expand(D).then((M) => {
										if (D && !M) {
											const N = k.getFirstElementChild(D);
											N &&
												k.getNode(N).visible &&
												$(k, (R) => {
													const O = new KeyboardEvent("keydown");
													R.setFocus([N], O);
												});
										}
									});
								}
							}
						},
					});
				function I(P, k) {
					const L = P.get(C.$fMb).lastFocusedList,
						D = (0, C.$BMb)("keydown", k);
					if (
						L instanceof E.List ||
						L instanceof d.$8ob ||
						L instanceof n.$ipb
					) {
						const M = L;
						M.setAnchor(M.getFocus()[0]), M.setSelection(M.getFocus(), D);
					} else if (
						L instanceof u.$Dpb ||
						L instanceof h.$Hpb ||
						L instanceof a.$Fpb
					) {
						const M = L,
							N = M.getFocus();
						if (N.length > 0) {
							let A = !0;
							(M.expandOnlyOnTwistieClick === !0 ||
								(typeof M.expandOnlyOnTwistieClick != "boolean" &&
									M.expandOnlyOnTwistieClick(N[0]))) &&
								(A = !1),
								A && M.toggleCollapsed(N[0]);
						}
						M.setAnchor(N[0]), M.setSelection(N, D);
					}
				}
				i.$TX.registerCommandAndKeybindingRule({
					id: "list.select",
					weight: i.KeybindingWeight.WorkbenchContrib,
					when: C.$nMb,
					primary: t.KeyCode.Enter,
					mac: {
						primary: t.KeyCode.Enter,
						secondary: [t.KeyMod.CtrlCmd | t.KeyCode.DownArrow],
					},
					handler: (P) => {
						I(P, !1);
					},
				}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.stickyScrollselect",
						weight: i.KeybindingWeight.WorkbenchContrib + 50,
						when: C.$lMb,
						primary: t.KeyCode.Enter,
						mac: {
							primary: t.KeyCode.Enter,
							secondary: [t.KeyMod.CtrlCmd | t.KeyCode.DownArrow],
						},
						handler: (P) => {
							const k = P.get(C.$fMb).lastFocusedList;
							!k ||
								!(
									k instanceof u.$Dpb ||
									k instanceof h.$Hpb ||
									k instanceof a.$Fpb
								) ||
								S(k, (L) => k.setSelection([L]));
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.selectAndPreserveFocus",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: C.$nMb,
						handler: (P) => {
							I(P, !0);
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.selectAll",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: r.$Kj.and(C.$nMb, C.$mMb),
						primary: t.KeyMod.CtrlCmd | t.KeyCode.KeyA,
						handler: (P) => {
							const k = w.$Ngb().activeElement;
							if (w.$Ygb(k) && k.getAttribute("contenteditable") === "true")
								return;
							const L = P.get(C.$fMb).lastFocusedList;
							if (
								L instanceof E.List ||
								L instanceof d.$8ob ||
								L instanceof n.$ipb
							) {
								const D = L,
									M = new KeyboardEvent("keydown");
								D.setSelection((0, m.$Vb)(D.length), M);
							} else if (
								L instanceof u.$Dpb ||
								L instanceof h.$Hpb ||
								L instanceof a.$Fpb
							) {
								const D = L,
									M = D.getFocus(),
									N = D.getSelection();
								let A;
								M.length > 0 &&
									(N.length === 0 || !N.includes(M[0])) &&
									(A = M[0]),
									!A && N.length > 0 && (A = N[0]);
								let R;
								A ? (R = D.getParentElement(A)) : (R = void 0);
								const O = [],
									B = (z) => {
										for (const F of z.children)
											F.visible && (O.push(F.element), F.collapsed || B(F));
									};
								B(D.getNode(R)), R && N.length === O.length && O.unshift(R);
								const U = new KeyboardEvent("keydown");
								D.setSelection(O, U);
							}
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.toggleSelection",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: C.$nMb,
						primary: t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.Enter,
						handler: (P) => {
							const k = P.get(C.$fMb).lastFocusedList;
							if (!k) return;
							const L = k.getFocus();
							if (L.length === 0) return;
							const D = k.getSelection(),
								M = D.indexOf(L[0]);
							M > -1
								? k.setSelection([...D.slice(0, M), ...D.slice(M + 1)])
								: k.setSelection([...D, L[0]]);
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.showHover",
						weight: i.KeybindingWeight.WorkbenchContrib,
						primary: (0, t.$os)(t.$ps, t.KeyMod.CtrlCmd | t.KeyCode.KeyI),
						mac: {
							primary: (0, t.$os)(t.$qs, t.KeyMod.CtrlCmd | t.KeyCode.KeyI),
						},
						when: C.$nMb,
						handler: async (P, ...k) => {
							const D = P.get(C.$fMb).lastFocusedList;
							if (!D) return;
							const M = D.getFocus();
							if (!M || M.length === 0) return;
							const O = D.getHTMLElement()
								.querySelector(".monaco-scrollable-element")
								?.querySelector(".monaco-list-rows")
								?.querySelector(".focused");
							if (!O) return;
							const B = T(O);
							B && P.get(s.$Uyb).showManagedHover(B);
						},
					});
				function T(P) {
					if (P.matches('[custom-hover="true"]')) return P;
					const k = P.querySelector(
						'[custom-hover="true"]:not([tabindex]):not(.action-item)',
					);
					if (k) return k;
				}
				i.$TX.registerCommandAndKeybindingRule({
					id: "list.toggleExpand",
					weight: i.KeybindingWeight.WorkbenchContrib,
					when: C.$nMb,
					primary: t.KeyCode.Space,
					handler: (P) => {
						const k = P.get(C.$fMb).lastFocusedList;
						if (
							k instanceof u.$Dpb ||
							k instanceof h.$Hpb ||
							k instanceof a.$Fpb
						) {
							const L = k,
								D = L.getFocus();
							if (D.length > 0 && L.isCollapsible(D[0])) {
								L.toggleCollapsed(D[0]);
								return;
							}
						}
						I(P, !0);
					},
				}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.stickyScrolltoggleExpand",
						weight: i.KeybindingWeight.WorkbenchContrib + 50,
						when: C.$lMb,
						primary: t.KeyCode.Space,
						handler: (P) => {
							const k = P.get(C.$fMb).lastFocusedList;
							!k ||
								!(
									k instanceof u.$Dpb ||
									k instanceof h.$Hpb ||
									k instanceof a.$Fpb
								) ||
								S(k);
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.clear",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: r.$Kj.and(C.$nMb, C.$oMb),
						primary: t.KeyCode.Escape,
						handler: (P) => {
							const k = P.get(C.$fMb).lastFocusedList;
							if (!k) return;
							const L = k.getSelection(),
								D = new KeyboardEvent("keydown");
							if (L.length > 1)
								if (C.$rMb.getValue(k.contextKeyService)) {
									const N = k.getFocus();
									k.setSelection([N[0]], D);
								} else k.setSelection([], D);
							else k.setSelection([], D), k.setFocus([], D);
							k.setAnchor(void 0);
						},
					}),
					c.$fk.registerCommand({
						id: "list.triggerTypeNavigation",
						handler: (P) => {
							P.get(C.$fMb).lastFocusedList?.triggerTypeNavigation();
						},
					}),
					c.$fk.registerCommand({
						id: "list.toggleFindMode",
						handler: (P) => {
							const k = P.get(C.$fMb).lastFocusedList;
							if (k instanceof g.$wpb || k instanceof a.$Fpb) {
								const L = k;
								L.findMode =
									L.findMode === g.TreeFindMode.Filter
										? g.TreeFindMode.Highlight
										: g.TreeFindMode.Filter;
							}
						},
					}),
					c.$fk.registerCommand({
						id: "list.toggleFindMatchType",
						handler: (P) => {
							const k = P.get(C.$fMb).lastFocusedList;
							if (k instanceof g.$wpb || k instanceof a.$Fpb) {
								const L = k;
								L.findMatchType =
									L.findMatchType === g.TreeFindMatchType.Contiguous
										? g.TreeFindMatchType.Fuzzy
										: g.TreeFindMatchType.Contiguous;
							}
						},
					}),
					c.$fk.registerCommandAlias(
						"list.toggleKeyboardNavigation",
						"list.triggerTypeNavigation",
					),
					c.$fk.registerCommandAlias(
						"list.toggleFilterOnType",
						"list.toggleFindMode",
					),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.find",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: r.$Kj.and(C.$kMb, C.$sMb),
						primary: t.KeyMod.CtrlCmd | t.KeyMod.Alt | t.KeyCode.KeyF,
						secondary: [t.KeyCode.F3],
						handler: (P) => {
							const k = P.get(C.$fMb).lastFocusedList;
							k instanceof E.List ||
								k instanceof d.$8ob ||
								k instanceof n.$ipb ||
								((k instanceof g.$wpb || k instanceof a.$Fpb) && k.openFind());
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.closeFind",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: r.$Kj.and(C.$kMb, C.$xMb),
						primary: t.KeyCode.Escape,
						handler: (P) => {
							const k = P.get(C.$fMb).lastFocusedList;
							(k instanceof g.$wpb || k instanceof a.$Fpb) && k.closeFind();
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.scrollUp",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: r.$Kj.and(C.$nMb, C.$iMb?.negate()),
						primary: t.KeyMod.CtrlCmd | t.KeyCode.UpArrow,
						handler: (P) => {
							const k = P.get(C.$fMb).lastFocusedList;
							k && (k.scrollTop -= 10);
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.scrollDown",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: r.$Kj.and(C.$nMb, C.$jMb?.negate()),
						primary: t.KeyMod.CtrlCmd | t.KeyCode.DownArrow,
						handler: (P) => {
							const k = P.get(C.$fMb).lastFocusedList;
							k && (k.scrollTop += 10);
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.scrollLeft",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: C.$nMb,
						handler: (P) => {
							const k = P.get(C.$fMb).lastFocusedList;
							k && (k.scrollLeft -= 10);
						},
					}),
					i.$TX.registerCommandAndKeybindingRule({
						id: "list.scrollRight",
						weight: i.KeybindingWeight.WorkbenchContrib,
						when: C.$nMb,
						handler: (P) => {
							const k = P.get(C.$fMb).lastFocusedList;
							k && (k.scrollLeft += 10);
						},
					}),
					(0, o.$4X)(
						class extends o.$3X {
							constructor() {
								super({
									id: "tree.toggleStickyScroll",
									title: {
										...(0, b.localize2)(2932, "Toggle Tree Sticky Scroll"),
										mnemonicTitle: (0, b.localize)(2930, null),
									},
									category: "View",
									metadata: { description: (0, b.localize)(2931, null) },
									f1: !0,
								});
							}
							run(k) {
								const L = k.get(f.$gj),
									D = !L.getValue("workbench.tree.enableStickyScroll");
								L.updateValue("workbench.tree.enableStickyScroll", D);
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
		de[2945],
		he([
			1, 0, 4, 57, 180, 34, 111, 1583, 3, 7, 39, 62, 121, 275, 5, 251, 106, 390,
		]),
		function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
			"use strict";
			var f;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$O2c = void 0),
				(C = xi(C));
			let b = class extends i.$HO {
				static {
					f = this;
				}
				static {
					this.g = [
						"copy",
						"cut",
						"editor.action.selectAll",
						"editor.action.clipboardCopyAction",
						"editor.action.clipboardCutAction",
						"editor.action.clipboardPasteAction",
					];
				}
				constructor(l, y, $, v, S, I) {
					super(),
						(this.i = l),
						(this.j = y),
						(this.k = $),
						(this.l = v),
						(this.m = S),
						(this.n = I),
						(this.h = this.l.createInstance(g.$Qzb, {}));
				}
				async prompt(l) {
					this.i.trace("DialogService#prompt", l.message);
					const y = this.b(l),
						{ button: $, checkboxChecked: v } = await this.o(
							l.type,
							l.message,
							y,
							l.detail,
							l.cancelButton ? y.length - 1 : -1,
							l.checkbox,
							void 0,
							typeof l?.custom == "object" ? l.custom : void 0,
						);
					return this.f(l, $, v);
				}
				async confirm(l) {
					this.i.trace("DialogService#confirm", l.message);
					const y = this.a(l),
						{ button: $, checkboxChecked: v } = await this.o(
							l.type ?? "question",
							l.message,
							y,
							l.detail,
							y.length - 1,
							l.checkbox,
							void 0,
							typeof l?.custom == "object" ? l.custom : void 0,
						);
					return { confirmed: $ === 0, checkboxChecked: v };
				}
				async input(l) {
					this.i.trace("DialogService#input", l.message);
					const y = this.c(l),
						{
							button: $,
							checkboxChecked: v,
							values: S,
						} = await this.o(
							l.type ?? "question",
							l.message,
							y,
							l.detail,
							y.length - 1,
							l?.checkbox,
							l.inputs,
							typeof l.custom == "object" ? l.custom : void 0,
						);
					return { confirmed: $ === 0, checkboxChecked: v, values: S };
				}
				async about() {
					const l = (S) =>
							(0, t.localize)(
								3060,
								null,
								this.m.version || "Unknown",
								this.m.commit || "Unknown",
								this.m.date
									? `${this.m.date}${S ? " (" + (0, c.$dn)(new Date(this.m.date), !0) + ")" : ""}`
									: "Unknown",
								navigator.userAgent,
							),
						y = l(!0),
						$ = l(!1),
						{ button: v } = await this.o(
							C.default.Info,
							this.m.nameLong,
							[(0, t.localize)(3061, null), (0, t.localize)(3062, null)],
							y,
							1,
						);
					v === 0 && this.n.writeText($);
				}
				async o(l, y, $, v, S, I, T, P) {
					const k = new m.$Zc(),
						L = P
							? (N) => {
									N.classList.add(...(P.classes || [])),
										P.markdownDetails?.forEach((A) => {
											const R = this.h.render(A.markdown);
											N.appendChild(R.element),
												R.element.classList.add(...(A.classes || [])),
												k.add(R);
										});
								}
							: void 0,
						D = new d.$Oob(this.j.activeContainer, y, $, {
							detail: v,
							cancelId: S,
							type: this.e(l),
							keyEventProcessor: (N) => {
								const A = this.k.softDispatch(N, this.j.activeContainer);
								A.kind === o.ResultKind.KbFound &&
									A.commandId &&
									f.g.indexOf(A.commandId) === -1 &&
									r.$ahb.stop(N, !0);
							},
							renderBody: L,
							icon: P?.icon,
							disableCloseAction: P?.disableCloseAction,
							buttonDetails: P?.buttonDetails,
							checkboxLabel: I?.label,
							checkboxChecked: I?.checked,
							inputs: T,
							buttonStyles: p.$lyb,
							checkboxStyles: p.$syb,
							inputBoxStyles: p.$wyb,
							dialogStyles: p.$uyb,
						});
					k.add(D);
					const M = await D.show();
					return k.dispose(), M;
				}
			};
			(e.$O2c = b),
				(e.$O2c =
					b =
					f =
						Ne(
							[
								j(0, E.$ik),
								j(1, w.$jEb),
								j(2, u.$uZ),
								j(3, n.$Li),
								j(4, a.$Bk),
								j(5, h.$Vxb),
							],
							b,
						));
		},
	),
		define(
			de[1223],
			he([1, 0, 6, 4, 81, 20, 5, 30]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$prc = e.$orc = e.$nrc = void 0),
					(e.$nrc = (0, C.$Mi)("IEditorBreadcrumbsService"));
				class m {
					constructor() {
						this.a = new Map();
					}
					register(a, h) {
						if (this.a.has(a))
							throw new Error(`group (${a}) has already a widget`);
						return this.a.set(a, h), { dispose: () => this.a.delete(a) };
					}
					getWidget(a) {
						return this.a.get(a);
					}
				}
				(e.$orc = m), (0, E.$lK)(e.$nrc, m, E.InstantiationType.Delayed);
				class r {
					constructor() {}
					static {
						this.IsEnabled = r.a("breadcrumbs.enabled");
					}
					static {
						this.UseQuickPick = r.a("breadcrumbs.useQuickPick");
					}
					static {
						this.FilePath = r.a("breadcrumbs.filePath");
					}
					static {
						this.SymbolPath = r.a("breadcrumbs.symbolPath");
					}
					static {
						this.SymbolSortOrder = r.a("breadcrumbs.symbolSortOrder");
					}
					static {
						this.Icons = r.a("breadcrumbs.icons");
					}
					static {
						this.TitleScrollbarSizing = r.a(
							"workbench.editor.titleScrollbarSizing",
						);
					}
					static {
						this.FileExcludes = r.a("files.exclude");
					}
					static a(a) {
						return {
							bindTo(h) {
								const c = new t.$re(),
									n = h.onDidChangeConfiguration((g) => {
										g.affectsConfiguration(a) && c.fire(void 0);
									});
								return new (class {
									constructor() {
										(this.name = a), (this.onDidChange = c.event);
									}
									getValue(g) {
										return g ? h.getValue(a, g) : h.getValue(a);
									}
									updateValue(g, p) {
										return p ? h.updateValue(a, g, p) : h.updateValue(a, g);
									}
									dispose() {
										n.dispose(), c.dispose();
									}
								})();
							},
						};
					}
				}
				(e.$prc = r),
					d.$Io
						.as(w.$No.Configuration)
						.registerConfiguration({
							id: "breadcrumbs",
							title: (0, i.localize)(3067, null),
							order: 101,
							type: "object",
							properties: {
								"breadcrumbs.enabled": {
									description: (0, i.localize)(3068, null),
									type: "boolean",
									default: !0,
								},
								"breadcrumbs.filePath": {
									description: (0, i.localize)(3069, null),
									type: "string",
									default: "on",
									enum: ["on", "off", "last"],
									enumDescriptions: [
										(0, i.localize)(3070, null),
										(0, i.localize)(3071, null),
										(0, i.localize)(3072, null),
									],
								},
								"breadcrumbs.symbolPath": {
									description: (0, i.localize)(3073, null),
									type: "string",
									default: "on",
									enum: ["on", "off", "last"],
									enumDescriptions: [
										(0, i.localize)(3074, null),
										(0, i.localize)(3075, null),
										(0, i.localize)(3076, null),
									],
								},
								"breadcrumbs.symbolSortOrder": {
									description: (0, i.localize)(3077, null),
									type: "string",
									default: "position",
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									enum: ["position", "name", "type"],
									enumDescriptions: [
										(0, i.localize)(3078, null),
										(0, i.localize)(3079, null),
										(0, i.localize)(3080, null),
									],
								},
								"breadcrumbs.icons": {
									description: (0, i.localize)(3081, null),
									type: "boolean",
									default: !0,
								},
								"breadcrumbs.showFiles": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3082, null),
								},
								"breadcrumbs.showModules": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3083, null),
								},
								"breadcrumbs.showNamespaces": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3084, null),
								},
								"breadcrumbs.showPackages": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3085, null),
								},
								"breadcrumbs.showClasses": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3086, null),
								},
								"breadcrumbs.showMethods": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3087, null),
								},
								"breadcrumbs.showProperties": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3088, null),
								},
								"breadcrumbs.showFields": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3089, null),
								},
								"breadcrumbs.showConstructors": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3090, null),
								},
								"breadcrumbs.showEnums": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3091, null),
								},
								"breadcrumbs.showInterfaces": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3092, null),
								},
								"breadcrumbs.showFunctions": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3093, null),
								},
								"breadcrumbs.showVariables": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3094, null),
								},
								"breadcrumbs.showConstants": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3095, null),
								},
								"breadcrumbs.showStrings": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3096, null),
								},
								"breadcrumbs.showNumbers": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3097, null),
								},
								"breadcrumbs.showBooleans": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3098, null),
								},
								"breadcrumbs.showArrays": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3099, null),
								},
								"breadcrumbs.showObjects": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3100, null),
								},
								"breadcrumbs.showKeys": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3101, null),
								},
								"breadcrumbs.showNull": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3102, null),
								},
								"breadcrumbs.showEnumMembers": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3103, null),
								},
								"breadcrumbs.showStructs": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3104, null),
								},
								"breadcrumbs.showEvents": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3105, null),
								},
								"breadcrumbs.showOperators": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3106, null),
								},
								"breadcrumbs.showTypeParameters": {
									type: "boolean",
									default: !0,
									scope: w.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: (0, i.localize)(3107, null),
								},
							},
						});
			},
		),
		
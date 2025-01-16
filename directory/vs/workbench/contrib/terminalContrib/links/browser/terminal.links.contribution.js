define(
			de[4043],
			he([
				1, 0, 6, 27, 3, 4, 8, 20, 5, 43, 130, 107, 363, 378, 145, 237, 469, 513,
				3599, 3159, 3270, 3160, 1766, 178,
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
				var v;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, d.$lK)(o.$Doc, b.$rWc, d.InstantiationType.Delayed);
				let S = class extends w.$Zc {
					static {
						v = this;
					}
					static {
						this.ID = "terminal.link";
					}
					static get(P) {
						return P.getContribution(v.ID);
					}
					constructor(P, k, L, D, M) {
						super(),
							(this.h = P),
							(this.j = k),
							(this.m = L),
							(this.n = D),
							(this.q = M),
							(this.c = this.n.createInstance(l.$tWc));
					}
					xtermReady(P) {
						const k = (this.a = this.add(
							this.n.createInstance(
								f.$qWc,
								P.raw,
								this.j,
								this.h.capabilities,
								this.c,
							),
						));
						if ((0, n.$ueb)(this.j)) {
							const L = k.add(
								t.Event.once(this.j.onProcessReady)(() => {
									k.setWidgetManager(this.m), this.delete(L);
								}),
							);
						} else k.setWidgetManager(this.m);
						if (!(0, a.$nIb)(this.h)) {
							for (const L of this.q.linkProviders)
								k.externalProvideLinksCb = L.provideLinks.bind(L, this.h);
							k.add(
								this.q.onDidAddLinkProvider((L) => {
									k.externalProvideLinksCb = L.provideLinks.bind(L, this.h);
								}),
							);
						}
						k.add(
							this.q.onDidRemoveLinkProvider(
								() => (k.externalProvideLinksCb = void 0),
							),
						);
					}
					async showLinkQuickpick(P) {
						this.b ||
							((this.b = this.add(this.n.createInstance(s.$sWc))),
							this.b.onDidRequestMoreLinks(() => {
								this.showLinkQuickpick(!0);
							}));
						const k = await this.r();
						return await this.b.show(this.h, k);
					}
					async r() {
						if (!this.a)
							throw new Error(
								"terminal links are not ready, cannot generate link quick pick",
							);
						return this.a.getLinks();
					}
					async openRecentLink(P) {
						if (!this.a)
							throw new Error(
								"terminal links are not ready, cannot open a link",
							);
						this.a.openRecentLink(P);
					}
				};
				(S = v = Ne([j(3, m.$Li), j(4, o.$Doc)], S)), (0, c.$qLc)(S.ID, S, !0);
				const I = p.$hUc.actionCategory;
				(0, h.$GUc)({
					id: y.TerminalLinksCommandId.OpenDetectedLink,
					title: (0, E.localize2)(10528, "Open Detected Link..."),
					f1: !0,
					category: I,
					precondition: g.TerminalContextKeys.terminalHasBeenCreated,
					keybinding: [
						{
							primary: i.KeyMod.CtrlCmd | i.KeyMod.Shift | i.KeyCode.KeyO,
							weight: r.KeybindingWeight.WorkbenchContrib + 1,
							when: g.TerminalContextKeys.focus,
						},
						{
							primary: i.KeyMod.CtrlCmd | i.KeyMod.Shift | i.KeyCode.KeyG,
							weight: r.KeybindingWeight.WorkbenchContrib + 1,
							when: C.$Kj.and(
								u.$NLb,
								C.$Kj.equals(u.$SLb.key, $.AccessibleViewProviderId.Terminal),
							),
						},
					],
					run: (T) => S.get(T)?.showLinkQuickpick(),
				}),
					(0, h.$GUc)({
						id: y.TerminalLinksCommandId.OpenWebLink,
						title: (0, E.localize2)(10529, "Open Last URL Link"),
						metadata: {
							description: (0, E.localize2)(
								10530,
								"Opens the last detected URL/URI link in the terminal",
							),
						},
						f1: !0,
						category: I,
						precondition: g.TerminalContextKeys.terminalHasBeenCreated,
						run: (T) => S.get(T)?.openRecentLink("url"),
					}),
					(0, h.$GUc)({
						id: y.TerminalLinksCommandId.OpenFileLink,
						title: (0, E.localize2)(10531, "Open Last Local File Link"),
						f1: !0,
						category: I,
						precondition: g.TerminalContextKeys.terminalHasBeenCreated,
						run: (T) => S.get(T)?.openRecentLink("localFile"),
					});
			},
		),
		
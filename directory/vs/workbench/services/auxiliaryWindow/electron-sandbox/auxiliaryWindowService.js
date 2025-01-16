define(
			de[3450],
			he([
				1, 0, 4, 20, 96, 703, 10, 110, 57, 240, 5, 52, 32, 87, 676, 139, 7, 78,
				12,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				var b;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$aed = e.$_dd = void 0);
				let s = (b = class extends E.$BEb {
					constructor($, v, S, I, T, P, k, L, D) {
						super($, v, S, I, k, L),
							(this.L = T),
							(this.M = P),
							(this.N = D),
							(this.I = !1),
							(this.J = !1),
							f.$m || this.O(),
							this.P();
					}
					O() {
						(async () =>
							(this.J = await this.L.isMaximized({
								targetWindowId: this.window.vscodeWindowId,
							})))(),
							this.D(
								this.L.onDidMaximizeWindow(($) => {
									$ === this.window.vscodeWindowId && (this.J = !0);
								}),
							),
							this.D(
								this.L.onDidUnmaximizeWindow(($) => {
									$ === this.window.vscodeWindowId && (this.J = !1);
								}),
							);
					}
					async P() {
						(await this.L.isFullScreen({
							targetWindowId: this.window.vscodeWindowId,
						})) && (0, g.$Lfb)(!0, this.window);
					}
					async C($, v) {
						this.F($), await this.N.error(v, (0, t.localize)(12108, null));
					}
					async G($) {
						if (this.I) return;
						this.F($),
							(await this.M.invokeFunction((S) =>
								b.confirmOnShutdown(S, a.ShutdownReason.CLOSE),
							)) &&
								((this.I = !0),
								this.L.closeWindow({
									targetWindowId: this.window.vscodeWindowId,
								}));
					}
					F($) {
						$.preventDefault(), ($.returnValue = !0);
					}
					createState() {
						const $ = super.createState(),
							v = (0, g.$Mfb)(this.window);
						return {
							...$,
							bounds: $.bounds,
							mode: this.J
								? E.AuxiliaryWindowMode.Maximized
								: v
									? E.AuxiliaryWindowMode.Fullscreen
									: E.AuxiliaryWindowMode.Normal,
						};
					}
				});
				(e.$_dd = s),
					(e.$_dd =
						s =
						b =
							Ne(
								[
									j(3, C.$gj),
									j(4, d.$y7c),
									j(5, u.$Li),
									j(6, c.$asb),
									j(7, o.$r8),
									j(8, m.$GO),
								],
								s,
							));
				let l = class extends E.$CEb {
					constructor($, v, S, I, T, P, k, L) {
						super($, I, v, P, k, L), (this.F = S), (this.G = T);
					}
					async t($) {
						(0, r.mark)("code/auxiliaryWindow/willResolveWindowId");
						const v = await $.vscode.ipcRenderer.invoke(
							"vscode:registerAuxiliaryWindow",
							this.F.windowId,
						);
						return (0, r.mark)("code/auxiliaryWindow/didResolveWindowId"), v;
					}
					u($, v, S) {
						let I;
						return (
							typeof S?.zoomLevel == "number"
								? (I = S.zoomLevel)
								: (I = (0, g.$Hfb)((0, p.$Ogb)())),
							(0, n.$28c)(I, $),
							super.u($, v)
						);
					}
					r($, v, S) {
						return new s(
							$,
							v,
							S,
							this.j,
							this.F,
							this.G,
							this.n,
							this.q,
							this.h,
						);
					}
				};
				(e.$aed = l),
					(e.$aed = l =
						Ne(
							[
								j(0, w.$mEb),
								j(1, C.$gj),
								j(2, d.$y7c),
								j(3, m.$GO),
								j(4, u.$Li),
								j(5, h.$km),
								j(6, c.$asb),
								j(7, o.$r8),
							],
							l,
						)),
					(0, i.$lK)(E.$AEb, l, i.InstantiationType.Delayed);
			},
		),
		
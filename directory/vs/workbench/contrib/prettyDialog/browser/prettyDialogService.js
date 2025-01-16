define(
			de[4305],
			he([1, 0, 20, 45, 216, 559, 3, 4304, 5, 7, 180, 6]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$hzc = void 0),
					(r = mt(r));
				let h = class extends C.$1c {
					constructor(n, g, p) {
						super(),
							(this.f = n),
							(this.g = g),
							(this.h = p),
							(this.a = this.D(new a.$re())),
							(this.onDidCloseDialog = this.a.event),
							(this.b = r.$(".pretty-dialog")),
							r.$fhb(this.h.mainContainer, this.b),
							(this.c = (0, d.$gzc)(this.b, this.g));
					}
					dispose() {
						this.c?.dispose(), super.dispose();
					}
					closeDialog() {
						const n = this.f.nonPersistentStorage.dialogData;
						if (!n) return;
						this.f.setNonPersistentStorage("dialogData", void 0);
						const g = this.f.nonPersistentStorage.dialogResolve;
						if (!g) return;
						const p = n.cancelButton;
						p && g(p.id);
					}
					isDialogOpen() {
						return !!this.f.nonPersistentStorage.dialogData;
					}
					async openDialog(n) {
						const p = await new Promise((o) => {
							this.f.setNonPersistentStorage("dialogData", n),
								this.f.setNonPersistentStorage("dialogResolve", () => o);
						});
						return (
							this.f.setNonPersistentStorage("dialogData", void 0),
							this.f.setNonPersistentStorage("dialogResolve", void 0),
							this.a.fire(),
							p
						);
					}
				};
				(e.$hzc = h),
					Ne(
						[(0, w.$KOb)("PrettyDialogService.closeDialog")],
						h.prototype,
						"closeDialog",
						null,
					),
					Ne(
						[(0, w.$KOb)("PrettyDialogService.openDialog")],
						h.prototype,
						"openDialog",
						null,
					),
					(e.$hzc = h = Ne([j(0, i.$0zb), j(1, m.$Li), j(2, u.$jEb)], h)),
					(0, t.$lK)(E.$hdc, h, t.InstantiationType.Delayed);
			},
		),
		
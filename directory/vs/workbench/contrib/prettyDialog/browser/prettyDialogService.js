import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../platform/tracing/common/tracing.js';
import './prettyDialog.js';
import '../../../../base/common/lifecycle.js';
import './renderPrettyDialog.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/browser/dom.js';
import '../../../../platform/layout/browser/layoutService.js';
import '../../../../base/common/event.js';
define(
			de[4305],
			he([1, 0, 20, 45, 216, 559, 3, 4304, 5, 7, 180, 6]),
			function (ce /*require*/,
 e /*exports*/,
 t /*extensions*/,
 i /*reactiveStorageService*/,
 w /*tracing*/,
 E /*prettyDialog*/,
 C /*lifecycle*/,
 d /*renderPrettyDialog*/,
 m /*instantiation*/,
 r /*dom*/,
 u /*layoutService*/,
 a /*event*/) {
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
		)

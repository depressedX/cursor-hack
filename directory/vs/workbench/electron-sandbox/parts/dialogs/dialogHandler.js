import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/date.js';
import '../../../../base/common/platform.js';
import '../../../../platform/clipboard/common/clipboardService.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/native/common/native.js';
import '../../../../platform/product/common/productService.js';
import '../../../../base/parts/sandbox/electron-sandbox/globals.js';
import '../../../../base/browser/dom.js';
define(
			de[3219],
			he([1, 0, 4, 275, 12, 121, 57, 34, 110, 62, 320, 7]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*date*/,
 w /*platform*/,
 E /*clipboardService*/,
 C /*dialogs*/,
 d /*log*/,
 m /*native*/,
 r /*productService*/,
 u /*globals*/,
 a /*dom*/) {
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
		)

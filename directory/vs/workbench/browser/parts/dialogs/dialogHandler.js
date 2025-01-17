import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/layout/browser/layoutService.js';
import '../../../../platform/log/common/log.js';
import '../../../../base/common/severity.js';
import '../../../../base/browser/ui/dialog/dialog.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/browser/dom.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/clipboard/common/clipboardService.js';
import '../../../../base/common/date.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../editor/browser/widget/markdownRenderer/browser/markdownRenderer.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import '../../../../platform/keybinding/common/keybindingResolver.js';
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
		
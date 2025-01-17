import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/actions.js';
import '../../../nls.js';
import '../../services/layout/browser/layoutService.js';
import '../../../platform/contextview/browser/contextView.js';
import '../../../base/common/lifecycle.js';
import '../../../base/browser/dom.js';
import '../../common/contributions.js';
import '../../../base/common/platform.js';
import '../../../platform/clipboard/common/clipboardService.js';
import '../../../base/browser/mouseEvent.js';
import '../../../base/common/event.js';
import '../../../base/common/lazy.js';
define(
			de[3411],
			he([1, 0, 50, 4, 96, 49, 3, 7, 55, 12, 121, 168, 6, 149]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Btc = void 0);
				let n = class extends C.$1c {
					static {
						this.ID = "workbench.contrib.textInputActionsProvider";
					}
					constructor(p, o, f) {
						super(),
							(this.b = p),
							(this.c = o),
							(this.f = f),
							(this.a = new c.$Y(() => this.g())),
							this.h();
					}
					g() {
						return [
							new t.$rj(
								"undo",
								(0, i.localize)(2945, null),
								void 0,
								!0,
								async () => (0, d.$Ngb)().execCommand("undo"),
							),
							new t.$rj(
								"redo",
								(0, i.localize)(2946, null),
								void 0,
								!0,
								async () => (0, d.$Ngb)().execCommand("redo"),
							),
							new t.$tj(),
							new t.$rj(
								"editor.action.clipboardCutAction",
								(0, i.localize)(2947, null),
								void 0,
								!0,
								async () => (0, d.$Ngb)().execCommand("cut"),
							),
							new t.$rj(
								"editor.action.clipboardCopyAction",
								(0, i.localize)(2948, null),
								void 0,
								!0,
								async () => (0, d.$Ngb)().execCommand("copy"),
							),
							new t.$rj(
								"editor.action.clipboardPasteAction",
								(0, i.localize)(2949, null),
								void 0,
								!0,
								async (p) => {
									if (r.$p) (0, d.$Ngb)().execCommand("paste");
									else {
										const o = await this.f.readText();
										if ((0, d.$2gb)(p) || (0, d.$3gb)(p)) {
											const f = p.selectionStart || 0,
												b = p.selectionEnd || 0;
											(p.value = `${p.value.substring(0, f)}${o}${p.value.substring(b, p.value.length)}`),
												(p.selectionStart = f + o.length),
												(p.selectionEnd = p.selectionStart),
												p.dispatchEvent(
													new Event("input", { bubbles: !0, cancelable: !0 }),
												);
										}
									}
								},
							),
							new t.$tj(),
							new t.$rj(
								"editor.action.selectAll",
								(0, i.localize)(2950, null),
								void 0,
								!0,
								async () => (0, d.$Ngb)().execCommand("selectAll"),
							),
						];
					}
					h() {
						this.D(
							h.Event.runAndSubscribe(
								this.b.onDidAddContainer,
								({ container: p, disposables: o }) => {
									o.add(
										(0, d.$0fb)(p, "contextmenu", (f) =>
											this.j((0, d.getWindow)(p), f),
										),
									);
								},
								{ container: this.b.mainContainer, disposables: this.B },
							),
						);
					}
					j(p, o) {
						if (o.defaultPrevented) return;
						const f = o.target;
						if (
							!(0, d.$Ygb)(f) ||
							(f.nodeName.toLowerCase() !== "input" &&
								f.nodeName.toLowerCase() !== "textarea")
						)
							return;
						d.$ahb.stop(o, !0);
						const b = new a.$2fb(p, o);
						this.c.showContextMenu({
							getAnchor: () => b,
							getActions: () => this.a.value,
							getActionsContext: () => f,
						});
					}
				};
				(e.$Btc = n),
					(e.$Btc = n = Ne([j(0, w.$mEb), j(1, E.$Xxb), j(2, u.$Vxb)], n)),
					(0, m.$s6)(n.ID, n, m.WorkbenchPhase.BlockRestore);
			},
		),
		
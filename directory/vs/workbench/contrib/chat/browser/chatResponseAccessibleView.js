import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/markdownRenderer.js';
import '../../../../base/common/htmlContent.js';
import '../../../../platform/accessibility/browser/accessibleView.js';
import '../../accessibility/browser/accessibilityConfiguration.js';
import './chat.js';
import '../common/chatContextKeys.js';
import '../common/chatModel.js';
import '../common/chatViewModel.js';
import '../../../../base/common/lifecycle.js';
define(
			de[3550],
			he([1, 0, 267, 94, 178, 130, 208, 207, 441, 283, 3]),
			function (ce /*require*/,
 e /*exports*/,
 t /*markdownRenderer*/,
 i /*htmlContent*/,
 w /*accessibleView*/,
 E /*accessibilityConfiguration*/,
 C /*chat*/,
 d /*chatContextKeys*/,
 m /*chatModel*/,
 r /*chatViewModel*/,
 u /*lifecycle*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$QIc = void 0);
				class a {
					constructor() {
						(this.priority = 100),
							(this.name = "panelChat"),
							(this.type = w.AccessibleViewType.View),
							(this.when = d.$41);
					}
					getProvider(n) {
						const p = n.get(C.$GYb).lastFocusedWidget;
						if (!p) return;
						const o = p.hasInputFocus();
						o && p.focusLastMessage();
						const f = p,
							b = f.getFocus();
						if (b) return new h(f, b, o);
					}
				}
				e.$QIc = a;
				class h extends u.$1c {
					constructor(n, g, p) {
						super(),
							(this.b = n),
							(this.c = p),
							(this.id = w.AccessibleViewProviderId.Chat),
							(this.verbositySettingKey =
								E.AccessibilityVerbositySettingId.Chat),
							(this.options = { type: w.AccessibleViewType.View }),
							(this.a = g);
					}
					provideContent() {
						return this.f(this.a);
					}
					f(n) {
						const g = n instanceof m.$92;
						let p = (0, r.$$Tb)(n) ? n.response.toString() : "";
						if (g) {
							const o = [];
							for (const f of n.content)
								Array.isArray(f)
									? o.push(...f.map((b) => b.message))
									: o.push(f.value);
							p = o.join(`
`);
						}
						return (
							!p &&
								"errorDetails" in n &&
								n.errorDetails &&
								(p = n.errorDetails.message),
							(0, t.$Xib)(new i.$cl(p), !0)
						);
					}
					onClose() {
						this.b.reveal(this.a),
							this.c ? this.b.focusInput() : this.b.focus(this.a);
					}
					provideNextContent() {
						const n = this.b.getSibling(this.a, "next");
						if (n) return (this.a = n), this.f(n);
					}
					providePreviousContent() {
						const n = this.b.getSibling(this.a, "previous");
						if (n) return (this.a = n), this.f(n);
					}
				}
			},
		)

import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/browser/ui/button/button.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/htmlContent.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../editor/browser/widget/markdownRenderer/browser/markdownRenderer.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/theme/browser/defaultStyles.js';
import '../../../../../css!vs/workbench/contrib/chat/browser/chatContentParts/media/chatConfirmationWidget.js';
define(
			de[3007],
			he([1, 0, 7, 183, 6, 94, 3, 251, 5, 106, 2390]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*button*/,
 w /*event*/,
 E /*htmlContent*/,
 C /*lifecycle*/,
 d /*markdownRenderer*/,
 m /*instantiation*/,
 r /*defaultStyles*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$fUb = void 0),
					(t = mt(t));
				let u = class extends C.$1c {
					get onDidClick() {
						return this.a.event;
					}
					get domNode() {
						return this.b;
					}
					setShowButtons(h) {
						this.domNode.classList.toggle("hideButtons", !h);
					}
					constructor(h, c, n, g) {
						super(), (this.c = g), (this.a = this.D(new w.$re()));
						const p = t.h(".chat-confirmation-widget@root", [
							t.h(".chat-confirmation-widget-title@title"),
							t.h(".chat-confirmation-widget-message@message"),
							t.h(".chat-confirmation-buttons-container@buttonsContainer"),
						]);
						this.b = p.root;
						const o = this.D(this.c.createInstance(d.$Qzb, {})),
							f = this.D(o.render(new E.$cl(h)));
						p.title.appendChild(f.element);
						const b = this.D(o.render(new E.$cl(c)));
						p.message.appendChild(b.element),
							n.forEach((s) => {
								const l = new i.$oob(p.buttonsContainer, {
									...r.$lyb,
									secondary: s.isSecondary,
								});
								(l.label = s.label), this.D(l.onDidClick(() => this.a.fire(s)));
							});
					}
				};
				(e.$fUb = u), (e.$fUb = u = Ne([j(3, m.$Li)], u));
			},
		)

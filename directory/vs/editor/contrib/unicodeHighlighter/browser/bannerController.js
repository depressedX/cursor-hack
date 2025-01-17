import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/actionbar/actionbar.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/lifecycle.js';
import '../../../browser/widget/markdownRenderer/browser/markdownRenderer.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/opener/browser/link.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../../base/common/themables.js';
import '../../../../css!vs/editor/contrib/unicodeHighlighter/browser/bannerController.js';
define(
			de[2838],
			he([1, 0, 7, 105, 50, 3, 251, 5, 497, 79, 26, 2324]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ykc = void 0);
				const a = 26;
				let h = class extends E.$1c {
					constructor(g, p) {
						super(),
							(this.b = g),
							(this.c = p),
							(this.a = this.D(this.c.createInstance(c)));
					}
					hide() {
						this.b.setBanner(null, 0), this.a.clear();
					}
					show(g) {
						this.a.show({
							...g,
							onClose: () => {
								this.hide(), g.onClose?.();
							},
						}),
							this.b.setBanner(this.a.element, a);
					}
				};
				(e.$ykc = h), (e.$ykc = h = Ne([j(1, d.$Li)], h));
				let c = class extends E.$1c {
					constructor(g) {
						super(),
							(this.f = g),
							(this.a = this.f.createInstance(C.$Qzb, {})),
							(this.element = (0, t.$)("div.editor-banner")),
							(this.element.tabIndex = 0);
					}
					g(g) {
						if (g.ariaLabel) return g.ariaLabel;
						if (typeof g.message == "string") return g.message;
					}
					h(g) {
						if (typeof g == "string") {
							const p = (0, t.$)("span");
							return (p.innerText = g), p;
						}
						return this.a.render(g).element;
					}
					clear() {
						(0, t.$9fb)(this.element);
					}
					show(g) {
						(0, t.$9fb)(this.element);
						const p = this.g(g);
						p && this.element.setAttribute("aria-label", p);
						const o = (0, t.$fhb)(this.element, (0, t.$)("div.icon-container"));
						o.setAttribute("aria-hidden", "true"),
							g.icon &&
								o.appendChild(
									(0, t.$)(`div${u.ThemeIcon.asCSSSelector(g.icon)}`),
								);
						const f = (0, t.$fhb)(
							this.element,
							(0, t.$)("div.message-container"),
						);
						if (
							(f.setAttribute("aria-hidden", "true"),
							f.appendChild(this.h(g.message)),
							(this.b = (0, t.$fhb)(
								this.element,
								(0, t.$)("div.message-actions-container"),
							)),
							g.actions)
						)
							for (const s of g.actions)
								this.D(
									this.f.createInstance(
										m.Link,
										this.b,
										{ ...s, tabIndex: -1 },
										{},
									),
								);
						const b = (0, t.$fhb)(
							this.element,
							(0, t.$)("div.action-container"),
						);
						(this.c = this.D(new i.$eib(b))),
							this.c.push(
								this.D(
									new w.$rj(
										"banner.close",
										"Close Banner",
										u.ThemeIcon.asClassName(r.$bP),
										!0,
										() => {
											typeof g.onClose == "function" && g.onClose();
										},
									),
								),
								{ icon: !0, label: !1 },
							),
							this.c.setFocusable(!1);
					}
				};
				c = Ne([j(0, d.$Li)], c);
			},
		),
		
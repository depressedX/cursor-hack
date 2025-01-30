import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/browser/dom.js';
import '../../../base/browser/event.js';
import '../../../base/browser/keyboardEvent.js';
import '../../../base/browser/touch.js';
import '../../../base/common/event.js';
import '../../../base/common/keyCodes.js';
import '../../../base/common/lifecycle.js';
import '../common/opener.js';
import '../../../base/browser/ui/hover/hoverDelegateFactory.js';
import '../../hover/browser/hover.js';
import '../../../css!vs/platform/opener/browser/link.js';
define(
			de[497],
			he([1, 0, 7, 265, 114, 159, 6, 27, 3, 41, 95, 72, 2329]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*event*/,
 w /*keyboardEvent*/,
 E /*touch*/,
 C /*event*/,
 d /*keyCodes*/,
 m /*lifecycle*/,
 r /*opener*/,
 u /*hoverDelegateFactory*/,
 a /*hover*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.Link = void 0);
				let h = class extends m.$1c {
					get enabled() {
						return this.f;
					}
					set enabled(n) {
						n
							? (this.a.setAttribute("aria-disabled", "false"),
								(this.a.tabIndex = 0),
								(this.a.style.pointerEvents = "auto"),
								(this.a.style.opacity = "1"),
								(this.a.style.cursor = "pointer"),
								(this.f = !1))
							: (this.a.setAttribute("aria-disabled", "true"),
								(this.a.tabIndex = -1),
								(this.a.style.pointerEvents = "none"),
								(this.a.style.opacity = "0.4"),
								(this.a.style.cursor = "default"),
								(this.f = !0)),
							(this.f = n);
					}
					set link(n) {
						typeof n.label == "string"
							? (this.a.textContent = n.label)
							: ((0, t.$9fb)(this.a), this.a.appendChild(n.label)),
							(this.a.href = n.href),
							typeof n.tabIndex < "u" && (this.a.tabIndex = n.tabIndex),
							this.j(n.title),
							(this.g = n);
					}
					constructor(n, g, p = {}, o, f) {
						super(),
							(this.g = g),
							(this.h = o),
							(this.f = !0),
							(this.a = (0, t.$fhb)(
								n,
								(0, t.$)(
									"a.monaco-link",
									{ tabIndex: g.tabIndex ?? 0, href: g.href },
									g.label,
								),
							)),
							(this.c = p.hoverDelegate ?? (0, u.$cib)("mouse")),
							this.j(g.title),
							this.a.setAttribute("role", "button");
						const b = this.D(new i.$mib(this.a, "click")),
							s = this.D(new i.$mib(this.a, "keypress")),
							l = C.Event.chain(s.event, (v) =>
								v
									.map((S) => new w.$7fb(S))
									.filter((S) => S.keyCode === d.KeyCode.Enter),
							),
							y = this.D(new i.$mib(this.a, E.EventType.Tap)).event;
						this.D(E.$Qhb.addTarget(this.a));
						const $ = C.Event.any(b.event, l, y);
						this.D(
							$((v) => {
								this.enabled &&
									(t.$ahb.stop(v, !0),
									p?.opener
										? p.opener(this.g.href)
										: f.open(this.g.href, { allowCommands: !0 }));
							}),
						),
							(this.enabled = !0);
					}
					j(n) {
						this.c.showNativeHover
							? (this.a.title = n ?? "")
							: !this.b && n
								? (this.b = this.D(this.h.setupManagedHover(this.c, this.a, n)))
								: this.b && this.b.update(n);
					}
				};
				(e.Link = h), (e.Link = h = Ne([j(3, a.$Uyb), j(4, r.$7rb)], h));
			},
		),
		
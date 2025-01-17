import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/browser/dom.js';
import '../../../base/browser/event.js';
import '../../../base/common/event.js';
import '../../../base/browser/keyboardEvent.js';
import '../../../base/browser/touch.js';
import '../../../base/browser/ui/iconLabel/iconLabels.js';
import '../../../base/common/idGenerator.js';
import '../../../base/common/keyCodes.js';
import '../../../base/common/linkedText.js';
import '../../../nls.js';
import '../../../css!vs/platform/quickinput/browser/media/quickInput.js';
define(
			de[1625],
			he([1, 0, 7, 265, 6, 114, 159, 182, 584, 27, 488, 4, 1138]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$sxc = g),
					(e.$txc = p),
					(t = mt(t));
				const h = {},
					c = new m.$Rdb("quick-input-button-icon-");
				function n(o) {
					if (!o) return;
					let f;
					const b = o.dark.toString();
					return (
						h[b]
							? (f = h[b])
							: ((f = c.nextId()),
								t.$Wgb(
									`.${f}, .hc-light .${f}`,
									`background-image: ${t.$vhb(o.light || o.dark)}`,
								),
								t.$Wgb(
									`.vs-dark .${f}, .hc-black .${f}`,
									`background-image: ${t.$vhb(o.dark)}`,
								),
								(h[b] = f)),
						f
					);
				}
				function g(o, f, b) {
					let s = o.iconClass || n(o.iconPath);
					return (
						o.alwaysVisible &&
							(s = s ? `${s} always-visible` : "always-visible"),
						{
							id: f,
							label: "",
							tooltip: o.tooltip || "",
							class: s,
							enabled: !0,
							run: b,
						}
					);
				}
				function p(o, f, b) {
					t.$hhb(f);
					const s = (0, u.$Zpb)(o);
					let l = 0;
					for (const y of s.nodes)
						if (typeof y == "string") f.append(...(0, d.$Sib)(y));
						else {
							let $ = y.title;
							!$ && y.href.startsWith("command:")
								? ($ = (0, a.localize)(2059, null, y.href.substring(8)))
								: $ || ($ = y.href);
							const v = t.$(
								"a",
								{ href: y.href, title: $, tabIndex: l++ },
								y.label,
							);
							v.style.textDecoration = "underline";
							const S = (L) => {
									t.$_gb(L) && t.$ahb.stop(L, !0), b.callback(y.href);
								},
								I = b.disposables.add(new i.$mib(v, t.$$gb.CLICK)).event,
								T = b.disposables.add(new i.$mib(v, t.$$gb.KEY_DOWN)).event,
								P = w.Event.chain(T, (L) =>
									L.filter((D) => {
										const M = new E.$7fb(D);
										return (
											M.equals(r.KeyCode.Space) || M.equals(r.KeyCode.Enter)
										);
									}),
								);
							b.disposables.add(C.$Qhb.addTarget(v));
							const k = b.disposables.add(new i.$mib(v, C.EventType.Tap)).event;
							w.Event.any(I, k, P)(S, null, b.disposables), f.appendChild(v);
						}
				}
			},
		),
		
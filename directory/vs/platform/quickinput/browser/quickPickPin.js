import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/codicons.js';
import '../../../nls.js';
import '../../storage/common/storage.js';
import '../../../base/common/themables.js';
import '../../../base/common/lifecycle.js';
define(
			de[1678],
			he([1, 0, 14, 4, 21, 26, 3]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$7Uc = u);
				const d = E.ThemeIcon.asClassName(t.$ak.pin),
					m = E.ThemeIcon.asClassName(t.$ak.pinned),
					r = [d, m];
				function u(o, f, b, s) {
					const l = b.items;
					let y = a(f, b, o, void 0, s);
					const $ = new C.$Zc();
					return (
						$.add(
							b.onDidTriggerItemButton(async (v) => {
								v.button.iconClass &&
									r.includes(v.button.iconClass) &&
									((b.items = l),
									(y = a(f, b, o, v.item, s)),
									(b.items = b.value ? l : y));
							}),
						),
						$.add(
							b.onDidChangeValue(async (v) => {
								b.items === y && v
									? (b.items = l)
									: b.items === l && !v && (b.items = y);
							}),
						),
						(b.items = b.value ? l : y),
						b.show(),
						$
					);
				}
				function a(o, f, b, s, l) {
					const y = [];
					let $;
					s ? ($ = g(o, s, b)) : ($ = p(o, b)),
						$.length &&
							y.push({ type: "separator", label: (0, i.localize)(2060, null) });
					const v = new Set();
					for (const S of $) {
						const I = f.items.find((T) => n(T, S));
						if (I) {
							const T = h(I),
								P = Object.assign({}, I);
							(!l || !v.has(T)) && (v.add(T), c(P, !1), y.push(P));
						}
					}
					for (const S of f.items) c(S, !0), y.push(S);
					return y;
				}
				function h(o) {
					return o.type === "separator"
						? ""
						: o.id || `${o.label}${o.description}${o.detail}}`;
				}
				function c(o, f) {
					if (o.type === "separator") return;
					const b =
						o.buttons?.filter((s) => s.iconClass && !r.includes(s.iconClass)) ??
						[];
					b.unshift({
						iconClass: f ? d : m,
						tooltip: f
							? (0, i.localize)(2061, null)
							: (0, i.localize)(2062, null),
						alwaysVisible: !1,
					}),
						(o.buttons = b);
				}
				function n(o, f) {
					return h(o) === h(f);
				}
				function g(o, f, b) {
					const s = f.buttons?.find((y) => y.iconClass === m);
					let l = p(o, b);
					return (
						s ? (l = l.filter((y) => h(y) !== h(f))) : l.push(f),
						b.store(
							o,
							JSON.stringify(l),
							w.StorageScope.WORKSPACE,
							w.StorageTarget.MACHINE,
						),
						l
					);
				}
				function p(o, f) {
					const b = f.get(o, w.StorageScope.WORKSPACE);
					return b ? JSON.parse(b) : [];
				}
			},
		),
		
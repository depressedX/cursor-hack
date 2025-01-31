import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/async.js';
import '../../../base/common/cancellation.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../instantiation/common/instantiation.js';
import '../common/quickAccess.js';
import '../common/quickInput.js';
import '../../registry/common/platform.js';
define(
			de[1636],
			he([1, 0, 15, 33, 6, 3, 5, 348, 63, 30]),
			function (ce /*require*/,
 e /*exports*/,
 t /*async*/,
 i /*cancellation*/,
 w /*event*/,
 E /*lifecycle*/,
 C /*instantiation*/,
 d /*quickAccess*/,
 m /*quickInput*/,
 r /*platform*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$T9b = void 0);
				let u = class extends E.$1c {
					constructor(h, c) {
						super(),
							(this.g = h),
							(this.h = c),
							(this.a = r.$Io.as(d.$1r.Quickaccess)),
							(this.b = new Map()),
							(this.c = new Map()),
							(this.f = void 0);
					}
					pick(h = "", c) {
						return this.j(h, !0, c);
					}
					show(h = "", c) {
						this.j(h, !1, c);
					}
					j(h, c, n) {
						const [g, p] = this.q(h, n?.enabledProviderPrefixes),
							o = this.f,
							f = o?.descriptor;
						if (o && p && f === p) {
							h !== p.prefix && !n?.preserveValue && (o.picker.value = h),
								this.m(o.picker, p, n);
							return;
						}
						if (p && !n?.preserveValue) {
							let S;
							if (o && f && f !== p) {
								const I = o.value.substr(f.prefix.length);
								I && (S = `${p.prefix}${I}`);
							}
							if (!S) {
								const I = g?.defaultFilterValue;
								I === d.DefaultQuickAccessFilterValue.LAST
									? (S = this.c.get(p))
									: typeof I == "string" && (S = `${p.prefix}${I}`);
							}
							typeof S == "string" && (h = S);
						}
						const b = o?.picker?.valueSelection,
							s = o?.picker?.value,
							l = new E.$Zc(),
							y = l.add(this.g.createQuickPick({ useSeparators: !0 }));
						(y.value = h),
							this.m(y, p, n),
							(y.placeholder = n?.placeholder ?? p?.placeholder),
							(y.quickNavigate = n?.quickNavigateConfiguration),
							(y.hideInput = !!y.quickNavigate && !o),
							(typeof n?.itemActivation == "number" ||
								n?.quickNavigateConfiguration) &&
								(y.itemActivation =
									n?.itemActivation ?? m.ItemActivation.SECOND),
							(y.contextKey = p?.contextKey),
							(y.filterValue = (S) => S.substring(p ? p.prefix.length : 0));
						let $;
						c &&
							(($ = new t.$0h()),
							l.add(
								w.Event.once(y.onWillAccept)((S) => {
									S.veto(), y.hide();
								}),
							)),
							l.add(this.n(y, g, p, h, n));
						const v = l.add(new i.$Ce());
						if (
							(g && l.add(g.provide(y, v.token, n?.providerOptions)),
							w.Event.once(y.onDidHide)(() => {
								y.selectedItems.length === 0 && v.cancel(),
									l.dispose(),
									$?.complete(y.selectedItems.slice(0));
							}),
							y.show(),
							b && s === h && (y.valueSelection = b),
							c)
						)
							return $?.p;
					}
					m(h, c, n) {
						let g;
						n?.preserveValue
							? (g = [h.value.length, h.value.length])
							: (g = [c?.prefix.length ?? 0, h.value.length]),
							(h.valueSelection = g);
					}
					n(h, c, n, g, p) {
						const o = new E.$Zc(),
							f = (this.f = { picker: h, descriptor: n, value: g });
						return (
							o.add(
								(0, E.$Yc)(() => {
									f === this.f && (this.f = void 0);
								}),
							),
							o.add(
								h.onDidChangeValue((b) => {
									const [s] = this.q(b, p?.enabledProviderPrefixes);
									s !== c
										? this.show(b, {
												enabledProviderPrefixes: p?.enabledProviderPrefixes,
												preserveValue: !0,
												providerOptions: p?.providerOptions,
											})
										: (f.value = b);
								}),
							),
							n &&
								o.add(
									h.onDidAccept(() => {
										this.c.set(n, h.value);
									}),
								),
							o
						);
					}
					q(h, c) {
						const n = this.a.getQuickAccessProvider(h);
						if (!n || (c && !c?.includes(n.prefix))) return [void 0, void 0];
						let g = this.b.get(n);
						return (
							g || ((g = this.h.createInstance(n.ctor)), this.b.set(n, g)),
							[g, n]
						);
					}
				};
				(e.$T9b = u), (e.$T9b = u = Ne([j(0, m.$DJ), j(1, C.$Li)], u));
			},
		)

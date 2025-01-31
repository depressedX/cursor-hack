import '../../../../../require.js';
import '../../../../../exports.js';
import '../common/activity.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../common/views.js';
import '../../../common/activity.js';
import '../../../../base/common/event.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/common/types.js';
define(
			de[3220],
			he([1, 0, 260, 3, 20, 60, 968, 6, 5, 28]),
			function (ce /*require*/,
 e /*exports*/,
 t /*activity*/,
 i /*lifecycle*/,
 w /*extensions*/,
 E /*views*/,
 C /*activity*/,
 d /*event*/,
 m /*instantiation*/,
 r /*types*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Evc = void 0);
				let u = class extends i.$1c {
					constructor(c, n, g) {
						super(),
							(this.c = c),
							(this.f = n),
							(this.g = g),
							(this.a = void 0),
							(this.b = i.$1c.None),
							this.D(
								d.Event.filter(this.f.onDidChangeContainer, (p) =>
									p.views.some((o) => o.id === c),
								)(() => this.h()),
							),
							this.D(
								d.Event.filter(this.f.onDidChangeLocation, (p) =>
									p.views.some((o) => o.id === c),
								)(() => this.h()),
							);
					}
					setActivity(c) {
						(this.a = c), this.h();
					}
					clearActivity() {
						(this.a = void 0), this.h();
					}
					h() {
						this.b.dispose();
						const c = this.f.getViewContainerByViewId(this.c);
						c &&
							this.a &&
							(this.b = this.g.showViewContainerActivity(c.id, this.a));
					}
					dispose() {
						this.b.dispose(), super.dispose();
					}
				};
				u = Ne([j(1, E.$K1), j(2, t.$7qc)], u);
				let a = class extends i.$1c {
					constructor(c, n) {
						super(),
							(this.g = c),
							(this.h = n),
							(this.a = new Map()),
							(this.b = this.D(new d.$re())),
							(this.onDidChangeActivity = this.b.event),
							(this.c = new Map()),
							(this.f = new Map());
					}
					showViewContainerActivity(c, n) {
						const g = this.g.getViewContainerById(c);
						if (g) {
							let p = this.c.get(c);
							p || ((p = []), this.c.set(c, p));
							for (let o = 0; o <= p.length; o++)
								if (o === p.length || (0, r.$sg)(n.priority)) {
									p.push(n);
									break;
								} else if (
									(0, r.$sg)(p[o].priority) ||
									p[o].priority <= n.priority
								) {
									p.splice(o, 0, n);
									break;
								}
							return (
								this.b.fire(g),
								(0, i.$Yc)(() => {
									p.splice(p.indexOf(n), 1),
										p.length === 0 && this.c.delete(c),
										this.b.fire(g);
								})
							);
						}
						return i.$1c.None;
					}
					getViewContainerActivities(c) {
						return this.g.getViewContainerById(c) ? (this.c.get(c) ?? []) : [];
					}
					showViewActivity(c, n) {
						let g = this.a.get(c);
						g
							? g.id++
							: ((g = { id: 1, activity: this.h.createInstance(u, c) }),
								this.a.set(c, g));
						const p = g.id;
						g.activity.setActivity(n);
						const o = g;
						return (0, i.$Yc)(() => {
							o.id === p && (o.activity.dispose(), this.a.delete(c));
						});
					}
					showAccountsActivity(c) {
						return this.j(C.$6qc, c);
					}
					showGlobalActivity(c) {
						return this.j(C.$5qc, c);
					}
					getActivity(c) {
						return this.f.get(c) ?? [];
					}
					j(c, n) {
						let g = this.f.get(c);
						return (
							g || ((g = []), this.f.set(c, g)),
							g.push(n),
							this.b.fire(c),
							(0, i.$Yc)(() => {
								g.splice(g.indexOf(n), 1),
									g.length === 0 && this.f.delete(c),
									this.b.fire(c);
							})
						);
					}
				};
				(e.$Evc = a),
					(e.$Evc = a = Ne([j(0, E.$K1), j(1, m.$Li)], a)),
					(0, w.$lK)(t.$7qc, a, w.InstantiationType.Delayed);
			},
		)

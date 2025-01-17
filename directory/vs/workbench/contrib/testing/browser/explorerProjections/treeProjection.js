import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/iterator.js';
import '../../../../../base/common/lifecycle.js';
import './index.js';
import './testingViewState.js';
import '../../common/getComputedState.js';
import '../../common/testId.js';
import '../../common/testResult.js';
import '../../common/testResultService.js';
import '../../common/testService.js';
import '../../common/testTypes.js';
define(
			de[3184],
			he([1, 0, 6, 103, 3, 811, 1265, 1773, 259, 421, 381, 379, 185]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$bLc = void 0);
				const c = {
					getOwnState: (p) =>
						p instanceof E.$7Kc ? p.ownState : h.TestResultState.Unset,
					getCurrentComputedState: (p) => p.state,
					setComputedState: (p, o) => (p.state = o),
					getCurrentComputedDuration: (p) => p.duration,
					getOwnDuration: (p) => (p instanceof E.$7Kc ? p.ownDuration : void 0),
					setComputedDuration: (p, o) => (p.duration = o),
					getChildren: (p) =>
						i.Iterable.filter(p.children.values(), (o) => o instanceof n),
					*getParents(p) {
						for (let o = p.parent; o; o = o.parent) yield o;
					},
				};
				class n extends E.$7Kc {
					get description() {
						return this.test.item.description;
					}
					constructor(o, f, b) {
						super({ ...o, item: { ...o.item } }, f),
							(this.f = b),
							(this.ownState = h.TestResultState.Unset),
							this.g();
					}
					update(o) {
						(0, h.$r4)(this.test, o), this.g(o), this.fireChange();
					}
					fireChange() {
						this.e.fire();
					}
					g(o) {
						this.c &&
							(!this.test.item.error || o?.item?.error) &&
							(this.f(this), this.children.delete(this.c), (this.c = void 0)),
							this.test.item.error &&
								!this.c &&
								((this.c = new E.$8Kc(this.test.item.error, this)),
								this.children.add(this.c),
								this.f(this));
					}
				}
				let g = class extends w.$1c {
					get m() {
						const o = i.Iterable.map(this.q.collection.rootItems, (f) =>
							this.j.get(f.item.extId),
						);
						return i.Iterable.filter(o, (f) => !!f?.children.size);
					}
					constructor(o, f, b) {
						super(),
							(this.lastState = o),
							(this.q = f),
							(this.u = b),
							(this.f = new t.$re()),
							(this.g = new Set()),
							(this.h = new Set()),
							(this.j = new Map()),
							(this.onUpdate = this.f.event),
							this.D(f.onDidProcessDiff((s) => this.w(s))),
							this.D(
								b.onResultsChanged((s) => {
									if ("removed" in s)
										for (const l of [...this.j.values()].sort(
											(y, $) => $.depth - y.depth,
										)) {
											const y = this.u.getStateById(l.test.item.extId)?.[1];
											(l.ownDuration = y?.ownDuration),
												(0, d.$D4)(
													c,
													l,
													y?.ownComputedState ?? h.TestResultState.Unset,
												).forEach(($) => $.fireChange());
										}
								}),
							),
							this.D(
								b.onTestChanged((s) => {
									if (s.reason === r.TestResultItemChangeReason.NewMessage)
										return;
									let l = s.item;
									if (
										l.ownComputedState === h.TestResultState.Unset ||
										s.result !== b.results[0]
									) {
										const S = b.getStateById(l.item.extId);
										S && (l = S[1]);
									}
									const y = this.j.get(l.item.extId);
									if (!y) return;
									const $ =
											s.reason ===
												r.TestResultItemChangeReason.OwnStateChange &&
											s.previousOwnDuration !== l.ownDuration,
										v = y.children.size ? void 0 : l.computedState;
									(y.retired = !!l.retired),
										(y.ownState = l.ownComputedState),
										(y.ownDuration = l.ownDuration),
										y.fireChange(),
										(0, d.$D4)(c, y, v, $).forEach((S) => S.fireChange());
								}),
							);
						for (const s of f.collection.all) this.C(this.y(s));
					}
					getElementByTestId(o) {
						return this.j.get(o);
					}
					w(o) {
						for (const f of o)
							switch (f.op) {
								case h.TestDiffOpType.Add: {
									const b = this.y(f.item);
									this.C(b);
									break;
								}
								case h.TestDiffOpType.Update: {
									const b = f.item,
										s = this.j.get(b.extId);
									if (!s) break;
									const l =
										s.test.expand === h.TestItemExpandState.NotExpandable &&
										b.expand;
									s.update(b), l ? this.g.add(s.parent) : this.h.add(s.parent);
									break;
								}
								case h.TestDiffOpType.Remove: {
									const b = this.j.get(f.itemId);
									if (!b) break;
									const s = b.parent,
										l =
											b.depth === 1 &&
											(s?.children.size === 1 ||
												!i.Iterable.some(this.m, ($, v) => v === 1));
									this.g.add(l ? null : s);
									const y = [[b]];
									for (; y.length; )
										for (const $ of y.pop())
											$ instanceof n && y.push(this.z($));
									s instanceof n &&
										(0, d.$D4)(c, s, void 0, !!s.duration).forEach(($) =>
											$.fireChange(),
										);
								}
							}
						o.length !== 0 && this.f.fire();
					}
					applyTo(o) {
						for (const f of this.g)
							(!f || o.hasElement(f)) &&
								o.setChildren(f, (0, E.$0Kc)(this.lastState, this.m, f), {
									diffIdentityProvider: E.$9Kc,
								});
						for (const f of this.h) (!f || o.hasElement(f)) && o.resort(f, !1);
						this.g.clear(), this.h.clear();
					}
					expandElement(o, f) {
						o instanceof n &&
							o.test.expand !== h.TestItemExpandState.NotExpandable &&
							this.q.collection.expand(o.test.item.extId, f);
					}
					y(o) {
						const f = m.$k4.parentId(o.item.extId),
							b = f ? this.j.get(f) : null;
						return new n(o, b, (s) => this.g.add(s));
					}
					z(o) {
						return (
							o.parent?.children.delete(o),
							this.j.delete(o.test.item.extId),
							o.children
						);
					}
					C(o) {
						o.parent?.children.add(o), this.j.set(o.test.item.extId, o);
						const b =
							o.parent?.children.size === 1 ? o.parent.parent : o.parent;
						this.g.add(b),
							b?.depth === 0 && this.g.add(null),
							(o.depth === 0 ||
								(0, C.$6Kc)(this.lastState, o.test.item.extId) === !1) &&
								this.expandElement(o, 0);
						const s = this.u.getStateById(o.test.item.extId)?.[1];
						s &&
							((o.retired = !!s.retired),
							(o.ownState = s.computedState),
							(o.ownDuration = s.ownDuration),
							(0, d.$D4)(c, o, void 0, !!o.ownDuration).forEach((l) =>
								l.fireChange(),
							));
					}
				};
				(e.$bLc = g), (e.$bLc = g = Ne([j(1, a.$sqc), j(2, u.$Kqc)], g));
			},
		),
		
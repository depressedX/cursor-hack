import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/iterator.js';
import '../../../../../base/common/lifecycle.js';
import './display.js';
import './index.js';
import './testingViewState.js';
import '../../common/testId.js';
import '../../common/testResult.js';
import '../../common/testResultService.js';
import '../../common/testService.js';
import '../../common/testTypes.js';
define(
			de[3183],
			he([1, 0, 6, 103, 3, 3175, 811, 1265, 259, 421, 381, 379, 185]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*iterator*/,
 w /*lifecycle*/,
 E /*display*/,
 C /*index*/,
 d /*testingViewState*/,
 m /*testId*/,
 r /*testResult*/,
 u /*testResultService*/,
 a /*testService*/,
 h /*testTypes*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$_Kc = void 0);
				class c extends C.$7Kc {
					get description() {
						return this.b.map((p) => p.item.label).join(E.$$Kc);
					}
					constructor(p, o, f) {
						super({ ...p, item: { ...p.item } }, o),
							(this.b = f),
							(this.descriptionParts = []),
							this.d();
					}
					update(p) {
						(0, h.$r4)(this.test, p), this.d(p), this.fireChange();
					}
					fireChange() {
						this.e.fire();
					}
					d(p) {
						this.a &&
							(!this.test.item.error || p?.item?.error) &&
							(this.children.delete(this.a), (this.a = void 0)),
							this.test.item.error &&
								!this.a &&
								((this.a = new C.$8Kc(this.test.item.error, this)),
								this.children.add(this.a));
					}
				}
				let n = class extends w.$1c {
					get f() {
						const p = i.Iterable.map(this.g.collection.rootItems, (o) =>
							this.b.get(o.item.extId),
						);
						return i.Iterable.filter(p, (o) => !!o?.children.size);
					}
					constructor(p, o, f) {
						super(),
							(this.lastState = p),
							(this.g = o),
							(this.h = f),
							(this.a = new t.$re()),
							(this.b = new Map()),
							(this.onUpdate = this.a.event),
							this.D(o.onDidProcessDiff((b) => this.j(b))),
							this.D(
								f.onResultsChanged((b) => {
									if ("removed" in b)
										for (const s of this.b.values()) {
											const l = this.h.getStateById(s.test.item.extId)?.[1];
											(s.duration = l?.ownDuration),
												(s.state =
													l?.ownComputedState || h.TestResultState.Unset),
												s.fireChange();
										}
								}),
							),
							this.D(
								f.onTestChanged((b) => {
									if (b.reason === r.TestResultItemChangeReason.NewMessage)
										return;
									let s = b.item;
									if (
										s.ownComputedState === h.TestResultState.Unset ||
										b.result !== f.results[0]
									) {
										const y = f.getStateById(s.item.extId);
										y && (s = y[1]);
									}
									const l = this.b.get(s.item.extId);
									l &&
										((l.retired = !!s.retired),
										(l.state = s.computedState),
										(l.duration = s.ownDuration),
										l.fireChange());
								}),
							);
						for (const b of o.collection.all) this.q(b);
					}
					getElementByTestId(p) {
						return this.b.get(p);
					}
					j(p) {
						for (const o of p)
							switch (o.op) {
								case h.TestDiffOpType.Add: {
									this.q(o.item);
									break;
								}
								case h.TestDiffOpType.Update: {
									this.b.get(o.item.extId)?.update(o.item);
									break;
								}
								case h.TestDiffOpType.Remove: {
									for (const [f, b] of this.b)
										(f === o.itemId || m.$k4.isChild(o.itemId, f)) && this.m(b);
									break;
								}
							}
						p.length !== 0 && this.a.fire();
					}
					applyTo(p) {
						p.setChildren(null, (0, C.$0Kc)(this.lastState, this.f, null), {
							diffIdentityProvider: C.$9Kc,
							diffDepth: 1 / 0,
						});
					}
					expandElement(p, o) {
						p instanceof c &&
							p.test.expand !== h.TestItemExpandState.NotExpandable &&
							this.g.collection.expand(p.test.item.extId, o);
					}
					m(p) {
						this.b.delete(p.test.item.extId), p.parent?.children.delete(p);
						const o = m.$k4.fromString(p.test.item.extId).parentId;
						if (o)
							for (const f of o.idsToRoot()) {
								const b = this.g.collection.getNodeById(f.toString());
								if (b) {
									b.children.size === 0 &&
										!this.b.has(f.toString()) &&
										this.n(o, b);
									break;
								}
							}
					}
					n(p, o) {
						const f = p.isRoot ? null : this.b.get(o.controllerId),
							b = [...p.idsFromRoot()]
								.slice(1, -1)
								.map((y) => this.g.collection.getNodeById(y.toString())),
							s = new c(o, f, b);
						f?.children.add(s),
							this.b.set(s.test.item.extId, s),
							(s.depth === 0 ||
								(0, d.$6Kc)(this.lastState, s.test.item.extId) === !1) &&
								this.expandElement(s, 1 / 0);
						const l = this.h.getStateById(s.test.item.extId)?.[1];
						l &&
							((s.retired = !!l.retired),
							(s.state = l.computedState),
							(s.duration = l.ownDuration));
					}
					q(p) {
						const o = m.$k4.fromString(p.item.extId);
						for (const f of o.idsToRoot())
							if (!f.isRoot) {
								const b = this.b.get(f.toString());
								if (b) {
									this.m(b);
									break;
								}
							}
						this.n(o, p);
					}
				};
				(e.$_Kc = n), (e.$_Kc = n = Ne([j(1, a.$sqc), j(2, u.$Kqc)], n));
			},
		),
		
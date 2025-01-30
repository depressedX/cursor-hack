import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/assert.js';
import './testTypes.js';
import './testId.js';
define(
			de[3180],
			he([1, 0, 15, 6, 3, 229, 185, 259]),
			function (ce /*require*/,
 e /*exports*/,
 t /*async*/,
 i /*event*/,
 w /*lifecycle*/,
 E /*assert*/,
 C /*testTypes*/,
 d /*testId*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$d9 = e.$c9 = e.$b9 = e.$a9 = e.$_8 = e.TestItemEventOp = void 0);
				var m;
				(function (f) {
					(f[(f.Upsert = 0)] = "Upsert"),
						(f[(f.SetTags = 1)] = "SetTags"),
						(f[(f.UpdateCanResolveChildren = 2)] = "UpdateCanResolveChildren"),
						(f[(f.RemoveChild = 3)] = "RemoveChild"),
						(f[(f.SetProp = 4)] = "SetProp"),
						(f[(f.Bulk = 5)] = "Bulk"),
						(f[(f.DocumentSynced = 6)] = "DocumentSynced");
				})(m || (e.TestItemEventOp = m = {}));
				const r = (f, b) => f === b,
					a = Object.entries({
						range: (f, b) => (f === b ? !0 : !f || !b ? !1 : f.equalsRange(b)),
						busy: r,
						label: r,
						description: r,
						error: r,
						sortText: r,
						tags: (f, b) =>
							!(f.length !== b.length || f.some((s) => !b.includes(s))),
					}),
					h = (f, b) => {
						let s;
						for (const [l, y] of a)
							y(f[l], b[l]) || (s ? (s[l] = b[l]) : (s = { [l]: b[l] }));
						return s;
					};
				class c extends w.$1c {
					get root() {
						return this.q.root;
					}
					constructor(b) {
						super(),
							(this.q = b),
							(this.f = this.D(new t.$Yh(() => this.flushDiff(), 200))),
							(this.g = this.D(new i.$re())),
							(this.tree = new Map()),
							(this.j = new Map()),
							(this.m = []),
							(this.onDidGenerateDiff = this.g.event),
							(this.root.canResolveChildren = !0),
							this.y(this.root, void 0);
					}
					set resolveHandler(b) {
						this.h = b;
						for (const s of this.tree.values()) this.J(s);
					}
					get resolveHandler() {
						return this.h;
					}
					collectDiff() {
						const b = this.m;
						return (this.m = []), b;
					}
					pushDiff(b) {
						switch (b.op) {
							case C.TestDiffOpType.DocumentSynced: {
								for (const s of this.m)
									if (
										s.op === C.TestDiffOpType.DocumentSynced &&
										s.uri === b.uri
									) {
										s.docv = b.docv;
										return;
									}
								break;
							}
							case C.TestDiffOpType.Update: {
								const s = this.m[this.m.length - 1];
								if (s) {
									if (
										s.op === C.TestDiffOpType.Update &&
										s.item.extId === b.item.extId
									) {
										(0, C.$r4)(s.item, b.item);
										return;
									}
									if (
										s.op === C.TestDiffOpType.Add &&
										s.item.item.extId === b.item.extId
									) {
										(0, C.$r4)(s.item, b.item);
										return;
									}
								}
								break;
							}
						}
						this.m.push(b), this.f.isScheduled() || this.f.schedule();
					}
					expand(b, s) {
						const l = this.tree.get(b);
						if (l) {
							if (
								((l.expandLevels === void 0 || s > l.expandLevels) &&
									(l.expandLevels = s),
								l.expand === C.TestItemExpandState.Expandable)
							) {
								const y = this.M(l);
								return y.isOpen()
									? this.L(l, s - 1)
									: y.wait().then(() => this.L(l, s - 1));
							} else if (l.expand === C.TestItemExpandState.Expanded)
								return l.resolveBarrier?.isOpen() === !1
									? l.resolveBarrier.wait().then(() => this.L(l, s - 1))
									: this.L(l, s - 1);
						}
					}
					dispose() {
						for (const b of this.tree.values())
							this.q.getApiFor(b.actual).listener = void 0;
						this.tree.clear(), (this.m = []), super.dispose();
					}
					s(b, s) {
						switch (s.op) {
							case m.RemoveChild:
								this.O(d.$k4.joinToString(b.fullId, s.id));
								break;
							case m.Upsert:
								this.y(s.item, b);
								break;
							case m.Bulk:
								for (const l of s.ops) this.s(b, l);
								break;
							case m.SetTags:
								this.z(s.new, s.old, b.fullId.toString());
								break;
							case m.UpdateCanResolveChildren:
								this.J(b);
								break;
							case m.SetProp:
								this.pushDiff({
									op: C.TestDiffOpType.Update,
									item: { extId: b.fullId.toString(), item: s.update },
								});
								break;
							case m.DocumentSynced:
								this.w(b.actual.uri);
								break;
							default:
								(0, E.$kd)(s);
						}
					}
					w(b) {
						b &&
							this.pushDiff({
								op: C.TestDiffOpType.DocumentSynced,
								uri: b,
								docv: this.q.getDocumentVersion(b),
							});
					}
					y(b, s) {
						const l = d.$k4.fromExtHostTestItem(b, this.root.id, s?.actual),
							y = this.q.getApiFor(b);
						y.parent &&
							y.parent !== s?.actual &&
							this.q.getChildren(y.parent).delete(b.id);
						let $ = this.tree.get(l.toString());
						if (!$) {
							($ = {
								fullId: l,
								actual: b,
								expandLevels: s?.expandLevels ? s.expandLevels - 1 : void 0,
								expand: C.TestItemExpandState.NotExpandable,
							}),
								b.tags.forEach(this.C, this),
								this.tree.set($.fullId.toString(), $),
								this.G(b, s),
								this.pushDiff({
									op: C.TestDiffOpType.Add,
									item: {
										controllerId: this.q.controllerId,
										expand: $.expand,
										item: this.q.toITestItem(b),
									},
								}),
								this.I(b, $, s);
							return;
						}
						if ($.actual === b) {
							this.H(b, $, s);
							return;
						}
						if ($.actual.uri?.toString() !== b.uri?.toString())
							return this.O(l.toString()), this.y(b, s);
						const v = this.q.getChildren($.actual),
							S = $.actual,
							I = h(this.q.toITestItem(S), this.q.toITestItem(b));
						(this.q.getApiFor(S).listener = void 0),
							($.actual = b),
							($.resolveBarrier = void 0),
							($.expand = C.TestItemExpandState.NotExpandable),
							I &&
								(I.hasOwnProperty("tags") &&
									(this.z(b.tags, S.tags, l.toString()), delete I.tags),
								this.s($, { op: m.SetProp, update: I })),
							this.I(b, $, s);
						for (const [P, k] of v)
							this.q.getChildren(b).get(k.id) ||
								this.O(d.$k4.joinToString(l, k.id));
						const T = $.expandLevels;
						T !== void 0 &&
							queueMicrotask(() => {
								$.expand === C.TestItemExpandState.Expandable &&
									(($.expandLevels = void 0), this.expand(l.toString(), T));
							}),
							this.w($.actual.uri);
					}
					z(b, s, l) {
						const y = new Set(s.map(($) => $.id));
						for (const $ of b) y.delete($.id) || this.C($);
						this.pushDiff({
							op: C.TestDiffOpType.Update,
							item: {
								extId: l,
								item: {
									tags: b.map(($) => (0, C.$p4)(this.q.controllerId, $.id)),
								},
							},
						}),
							y.forEach(this.F, this);
					}
					C(b) {
						const s = this.j.get(b.id);
						s
							? s.refCount++
							: (this.j.set(b.id, { refCount: 1 }),
								this.pushDiff({
									op: C.TestDiffOpType.AddTag,
									tag: { id: (0, C.$p4)(this.q.controllerId, b.id) },
								}));
					}
					F(b) {
						const s = this.j.get(b);
						s &&
							!--s.refCount &&
							(this.j.delete(b),
							this.pushDiff({
								op: C.TestDiffOpType.RemoveTag,
								id: (0, C.$p4)(this.q.controllerId, b),
							}));
					}
					G(b, s) {
						this.q.getApiFor(b).parent =
							s && s.actual !== this.root ? s.actual : void 0;
					}
					H(b, s, l) {
						this.G(b, l);
						const y = this.q.getApiFor(b);
						(y.parent = l?.actual),
							(y.listener = ($) => this.s(s, $)),
							this.J(s);
					}
					I(b, s, l) {
						this.H(b, s, l);
						for (const [y, $] of this.q.getChildren(b)) this.y($, s);
					}
					J(b) {
						let s;
						this.h
							? b.resolveBarrier
								? (s = b.resolveBarrier.isOpen()
										? C.TestItemExpandState.Expanded
										: C.TestItemExpandState.BusyExpanding)
								: (s = b.actual.canResolveChildren
										? C.TestItemExpandState.Expandable
										: C.TestItemExpandState.NotExpandable)
							: (s = C.TestItemExpandState.NotExpandable),
							s !== b.expand &&
								((b.expand = s),
								this.pushDiff({
									op: C.TestDiffOpType.Update,
									item: { extId: b.fullId.toString(), expand: s },
								}),
								s === C.TestItemExpandState.Expandable &&
									b.expandLevels !== void 0 &&
									this.M(b));
					}
					L(b, s) {
						if (s < 0) return;
						const l = [];
						for (const [y, $] of this.q.getChildren(b.actual)) {
							const v = this.expand(d.$k4.joinToString(b.fullId, $.id), s);
							(0, t.$yh)(v) && l.push(v);
						}
						if (l.length) return Promise.all(l).then(() => {});
					}
					M(b) {
						if (b.resolveBarrier) return b.resolveBarrier;
						if (!this.h) {
							const $ = new t.$Lh();
							return $.open(), $;
						}
						(b.expand = C.TestItemExpandState.BusyExpanding), this.N(b);
						const s = (b.resolveBarrier = new t.$Lh()),
							l = ($) => {
								console.error(
									`Unhandled error in resolveHandler of test controller "${this.q.controllerId}"`,
									$,
								);
							};
						let y;
						try {
							y = this.h(b.actual === this.root ? void 0 : b.actual);
						} catch ($) {
							l($);
						}
						return (
							(0, t.$yh)(y)
								? y.catch(l).then(() => {
										s.open(), this.J(b);
									})
								: (s.open(), this.J(b)),
							b.resolveBarrier
						);
					}
					N(b) {
						this.pushDiff({
							op: C.TestDiffOpType.Update,
							item: { extId: b.fullId.toString(), expand: b.expand },
						});
					}
					O(b) {
						const s = this.tree.get(b);
						if (!s) throw new Error("attempting to remove non-existent child");
						this.pushDiff({ op: C.TestDiffOpType.Remove, itemId: b });
						const l = [s];
						for (; l.length; ) {
							const y = l.pop();
							if (y) {
								this.q.getApiFor(y.actual).listener = void 0;
								for (const $ of y.actual.tags) this.F($.id);
								this.tree.delete(y.fullId.toString());
								for (const [$, v] of this.q.getChildren(y.actual))
									l.push(this.tree.get(d.$k4.joinToString(y.fullId, v.id)));
							}
						}
					}
					flushDiff() {
						const b = this.collectDiff();
						b.length && this.g.fire(b);
					}
				}
				e.$_8 = c;
				class n extends Error {
					constructor(b) {
						super(`Attempted to insert a duplicate test item ID ${b}`);
					}
				}
				e.$a9 = n;
				class g extends Error {
					constructor(b) {
						super(
							`TestItem with ID "${b}" is invalid. Make sure to create it from the createTestItem method.`,
						);
					}
				}
				e.$b9 = g;
				class p extends Error {
					constructor(b, s, l) {
						super(
							`TestItem with ID "${b}" is from controller "${s}" and cannot be added as a child of an item from controller "${l}".`,
						);
					}
				}
				e.$c9 = p;
				const o = (f, b, s) => {
					let l = new Map();
					return {
						get size() {
							return l.size;
						},
						forEach(y, $) {
							for (const v of l.values()) y.call($, v, this);
						},
						[Symbol.iterator]() {
							return l.entries();
						},
						replace(y) {
							const $ = new Map(),
								v = new Set(l.keys()),
								S = { op: m.Bulk, ops: [] };
							for (const I of y) {
								if (!(I instanceof s)) throw new g(I.id);
								const T = b(I).controllerId;
								if (T !== f.controllerId) throw new p(I.id, T, f.controllerId);
								if ($.has(I.id)) throw new n(I.id);
								$.set(I.id, I),
									v.delete(I.id),
									S.ops.push({ op: m.Upsert, item: I });
							}
							for (const I of v.keys())
								S.ops.push({ op: m.RemoveChild, id: I });
							f.listener?.(S), (l = $);
						},
						add(y) {
							if (!(y instanceof s)) throw new g(y.id);
							l.set(y.id, y), f.listener?.({ op: m.Upsert, item: y });
						},
						delete(y) {
							l.delete(y) && f.listener?.({ op: m.RemoveChild, id: y });
						},
						get(y) {
							return l.get(y);
						},
						toJSON() {
							return Array.from(l.values());
						},
					};
				};
				e.$d9 = o;
			},
		),
		
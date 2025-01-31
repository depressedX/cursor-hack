import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/arrays.js';
import '../../../../../base/common/errors.js';
import '../../../../../base/common/lifecycle.js';
import './mapping.js';
import './editing.js';
import './lineRange.js';
import '../../../../../base/common/controlFlow.js';
import '../../../../../base/common/observable.js';
define(
			de[3079],
			he([1, 0, 24, 29, 3, 686, 1249, 507, 1132, 77]),
			function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*errors*/,
 w /*lifecycle*/,
 E /*mapping*/,
 C /*editing*/,
 d /*lineRange*/,
 m /*controlFlow*/,
 r /*observable*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.TextModelDiffState =
						e.TextModelDiffChangeReason =
						e.$MZb =
							void 0);
				class u extends w.$1c {
					get isApplyingChange() {
						return this.f.isOccupied;
					}
					constructor(n, g, p) {
						super(),
							(this.h = n),
							(this.j = g),
							(this.m = p),
							(this.a = 0),
							(this.b = (0, r.observableValue)(this, h.initializing)),
							(this.c = (0, r.observableValue)(this, [])),
							(this.f = new m.$Lpb()),
							(this.g = !1),
							(this.n = !0);
						const o = (0, r.observableSignal)("recompute");
						this.D(
							(0, r.autorun)((f) => {
								o.read(f), this.q(f);
							}),
						),
							this.D(
								n.onDidChangeContent(
									this.f.makeExclusiveOrSkip(() => {
										o.trigger(void 0);
									}),
								),
							),
							this.D(
								g.onDidChangeContent(
									this.f.makeExclusiveOrSkip(() => {
										o.trigger(void 0);
									}),
								),
							),
							this.D(
								(0, w.$Yc)(() => {
									this.g = !0;
								}),
							);
					}
					get state() {
						return this.b;
					}
					get diffs() {
						return this.c;
					}
					q(n) {
						this.a++;
						const g = this.a;
						this.b.get() === h.initializing && (this.n = !0),
							(0, r.transaction)((o) => {
								this.b.set(this.n ? h.initializing : h.updating, o, a.other);
							}),
							this.m.computeDiff(this.h, this.j, n).then((o) => {
								this.g ||
									(g === this.a &&
										(0, r.transaction)((f) => {
											o.diffs
												? (this.b.set(h.upToDate, f, a.textChange),
													this.c.set(o.diffs, f, a.textChange))
												: this.b.set(h.error, f, a.textChange),
												(this.n = !1);
										}));
							});
					}
					r() {
						if (this.state.get() !== h.upToDate)
							throw new i.$gb(
								"Cannot remove diffs when the model is not up to date",
							);
					}
					removeDiffs(n, g, p) {
						this.r(),
							n.sort((0, t.$0b)((f) => f.inputRange.startLineNumber, t.$_b)),
							n.reverse();
						let o = this.c.get();
						for (const f of n) {
							const b = o.length;
							if (((o = o.filter((s) => s !== f)), b === o.length))
								throw new i.$gb();
							this.f.runExclusivelyOrThrow(() => {
								const s = f.getReverseLineEdit().toEdits(this.j.getLineCount());
								this.j.pushEditOperations(null, s, () => null, p);
							}),
								(o = o.map((s) =>
									s.outputRange.isAfter(f.outputRange)
										? s.addOutputLineDelta(
												f.inputRange.lineCount - f.outputRange.lineCount,
											)
										: s,
								));
						}
						this.c.set(o, g, a.other);
					}
					applyEditRelativeToOriginal(n, g, p) {
						this.r();
						const o = new E.$xZb(
							n.range,
							this.h,
							new d.$bZb(n.range.startLineNumber, n.newLines.length),
							this.j,
						);
						let f = !1,
							b = 0;
						const s = new Array();
						for (const l of this.diffs.get()) {
							if (l.inputRange.touches(n.range))
								throw new i.$gb("Edit must be conflict free.");
							l.inputRange.isAfter(n.range)
								? (f || ((f = !0), s.push(o.addOutputLineDelta(b))),
									s.push(
										l.addOutputLineDelta(n.newLines.length - n.range.lineCount),
									))
								: s.push(l),
								f || (b += l.outputRange.lineCount - l.inputRange.lineCount);
						}
						f || ((f = !0), s.push(o.addOutputLineDelta(b))),
							this.f.runExclusivelyOrThrow(() => {
								const l = new C.$cZb(n.range.delta(b), n.newLines).toEdits(
									this.j.getLineCount(),
								);
								this.j.pushEditOperations(null, l, () => null, p);
							}),
							this.c.set(s, g, a.other);
					}
					findTouchingDiffs(n) {
						return this.diffs.get().filter((g) => g.inputRange.touches(n));
					}
					s(n, g) {
						let p = 0;
						const o = g ? this.diffs.read(g) : this.diffs.get();
						for (const f of o) {
							if (
								f.inputRange.contains(n) ||
								f.inputRange.endLineNumberExclusive === n
							)
								return f;
							if (f.inputRange.endLineNumberExclusive < n)
								p = f.resultingDeltaFromOriginalToModified;
							else break;
						}
						return n + p;
					}
					getResultLineRange(n, g) {
						let p = this.s(n.startLineNumber, g);
						typeof p != "number" && (p = p.outputRange.startLineNumber);
						let o = this.s(n.endLineNumberExclusive, g);
						return (
							typeof o != "number" &&
								(o = o.outputRange.endLineNumberExclusive),
							d.$bZb.fromLineNumbers(p, o)
						);
					}
				}
				e.$MZb = u;
				var a;
				(function (c) {
					(c[(c.other = 0)] = "other"), (c[(c.textChange = 1)] = "textChange");
				})(a || (e.TextModelDiffChangeReason = a = {}));
				var h;
				(function (c) {
					(c[(c.initializing = 1)] = "initializing"),
						(c[(c.upToDate = 2)] = "upToDate"),
						(c[(c.updating = 3)] = "updating"),
						(c[(c.error = 4)] = "error");
				})(h || (e.TextModelDiffState = h = {}));
			},
		)

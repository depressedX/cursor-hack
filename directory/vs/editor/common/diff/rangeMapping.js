import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/errors.js';
import '../core/lineRange.js';
import '../core/position.js';
import '../core/range.js';
import '../core/textEdit.js';
define(
			de[342],
			he([1, 0, 29, 196, 48, 17, 490]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$DL = e.$CL = e.$BL = void 0);
				class d {
					static inverse(c, n, g) {
						const p = [];
						let o = 1,
							f = 1;
						for (const s of c) {
							const l = new d(
								new i.$rL(o, s.original.startLineNumber),
								new i.$rL(f, s.modified.startLineNumber),
							);
							l.modified.isEmpty || p.push(l),
								(o = s.original.endLineNumberExclusive),
								(f = s.modified.endLineNumberExclusive);
						}
						const b = new d(new i.$rL(o, n + 1), new i.$rL(f, g + 1));
						return b.modified.isEmpty || p.push(b), p;
					}
					static clip(c, n, g) {
						const p = [];
						for (const o of c) {
							const f = o.original.intersect(n),
								b = o.modified.intersect(g);
							f && !f.isEmpty && b && !b.isEmpty && p.push(new d(f, b));
						}
						return p;
					}
					constructor(c, n) {
						(this.original = c), (this.modified = n);
					}
					toString() {
						return `{${this.original.toString()}->${this.modified.toString()}}`;
					}
					flip() {
						return new d(this.modified, this.original);
					}
					join(c) {
						return new d(
							this.original.join(c.original),
							this.modified.join(c.modified),
						);
					}
					get changedLineCount() {
						return Math.max(this.original.length, this.modified.length);
					}
					toRangeMapping() {
						const c = this.original.toInclusiveRange(),
							n = this.modified.toInclusiveRange();
						if (c && n) return new a(c, n);
						if (
							this.original.startLineNumber === 1 ||
							this.modified.startLineNumber === 1
						) {
							if (
								!(
									this.modified.startLineNumber === 1 &&
									this.original.startLineNumber === 1
								)
							)
								throw new t.$gb("not a valid diff");
							return new a(
								new E.$iL(
									this.original.startLineNumber,
									1,
									this.original.endLineNumberExclusive,
									1,
								),
								new E.$iL(
									this.modified.startLineNumber,
									1,
									this.modified.endLineNumberExclusive,
									1,
								),
							);
						} else
							return new a(
								new E.$iL(
									this.original.startLineNumber - 1,
									Number.MAX_SAFE_INTEGER,
									this.original.endLineNumberExclusive - 1,
									Number.MAX_SAFE_INTEGER,
								),
								new E.$iL(
									this.modified.startLineNumber - 1,
									Number.MAX_SAFE_INTEGER,
									this.modified.endLineNumberExclusive - 1,
									Number.MAX_SAFE_INTEGER,
								),
							);
					}
					toRangeMapping2(c, n) {
						if (
							r(this.original.endLineNumberExclusive, c) &&
							r(this.modified.endLineNumberExclusive, n)
						)
							return new a(
								new E.$iL(
									this.original.startLineNumber,
									1,
									this.original.endLineNumberExclusive,
									1,
								),
								new E.$iL(
									this.modified.startLineNumber,
									1,
									this.modified.endLineNumberExclusive,
									1,
								),
							);
						if (!this.original.isEmpty && !this.modified.isEmpty)
							return new a(
								E.$iL.fromPositions(
									new w.$hL(this.original.startLineNumber, 1),
									m(
										new w.$hL(
											this.original.endLineNumberExclusive - 1,
											Number.MAX_SAFE_INTEGER,
										),
										c,
									),
								),
								E.$iL.fromPositions(
									new w.$hL(this.modified.startLineNumber, 1),
									m(
										new w.$hL(
											this.modified.endLineNumberExclusive - 1,
											Number.MAX_SAFE_INTEGER,
										),
										n,
									),
								),
							);
						if (
							this.original.startLineNumber > 1 &&
							this.modified.startLineNumber > 1
						)
							return new a(
								E.$iL.fromPositions(
									m(
										new w.$hL(
											this.original.startLineNumber - 1,
											Number.MAX_SAFE_INTEGER,
										),
										c,
									),
									m(
										new w.$hL(
											this.original.endLineNumberExclusive - 1,
											Number.MAX_SAFE_INTEGER,
										),
										c,
									),
								),
								E.$iL.fromPositions(
									m(
										new w.$hL(
											this.modified.startLineNumber - 1,
											Number.MAX_SAFE_INTEGER,
										),
										n,
									),
									m(
										new w.$hL(
											this.modified.endLineNumberExclusive - 1,
											Number.MAX_SAFE_INTEGER,
										),
										n,
									),
								),
							);
						throw new t.$gb();
					}
				}
				e.$BL = d;
				function m(h, c) {
					if (h.lineNumber < 1) return new w.$hL(1, 1);
					if (h.lineNumber > c.length)
						return new w.$hL(c.length, c[c.length - 1].length + 1);
					const n = c[h.lineNumber - 1];
					return h.column > n.length + 1
						? new w.$hL(h.lineNumber, n.length + 1)
						: h;
				}
				function r(h, c) {
					return h >= 1 && h <= c.length;
				}
				class u extends d {
					static fromRangeMappings(c) {
						const n = i.$rL.join(
								c.map((p) => i.$rL.fromRangeInclusive(p.originalRange)),
							),
							g = i.$rL.join(
								c.map((p) => i.$rL.fromRangeInclusive(p.modifiedRange)),
							);
						return new u(n, g, c);
					}
					constructor(c, n, g) {
						super(c, n), (this.innerChanges = g);
					}
					flip() {
						return new u(
							this.modified,
							this.original,
							this.innerChanges?.map((c) => c.flip()),
						);
					}
					withInnerChangesFromLineRanges() {
						return new u(this.original, this.modified, [this.toRangeMapping()]);
					}
				}
				e.$CL = u;
				class a {
					static assertSorted(c) {
						for (let n = 1; n < c.length; n++) {
							const g = c[n - 1],
								p = c[n];
							if (
								!(
									g.originalRange
										.getEndPosition()
										.isBeforeOrEqual(p.originalRange.getStartPosition()) &&
									g.modifiedRange
										.getEndPosition()
										.isBeforeOrEqual(p.modifiedRange.getStartPosition())
								)
							)
								throw new t.$gb("Range mappings must be sorted");
						}
					}
					constructor(c, n) {
						(this.originalRange = c), (this.modifiedRange = n);
					}
					toString() {
						return `{${this.originalRange.toString()}->${this.modifiedRange.toString()}}`;
					}
					flip() {
						return new a(this.modifiedRange, this.originalRange);
					}
					toTextEdit(c) {
						const n = c.getValueOfRange(this.modifiedRange);
						return new C.$wL(this.originalRange, n);
					}
				}
				e.$DL = a;
			},
		),
		
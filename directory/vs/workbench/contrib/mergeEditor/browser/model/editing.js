import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/arrays.js';
import '../../../../../editor/common/core/range.js';
define(de[1249], he([1, 0, 24, 17]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$eZb = e.$dZb = e.$cZb = void 0);
			class w {
				constructor(m, r) {
					(this.range = m), (this.newLines = r);
				}
				equals(m) {
					return (
						this.range.equals(m.range) && (0, t.$yb)(this.newLines, m.newLines)
					);
				}
				toEdits(m) {
					return new C([this]).toEdits(m);
				}
			}
			e.$cZb = w;
			class E {
				constructor(m, r) {
					(this.range = m), (this.newText = r);
				}
				equals(m) {
					return (
						i.$iL.equalsRange(this.range, m.range) && this.newText === m.newText
					);
				}
			}
			e.$dZb = E;
			class C {
				constructor(m) {
					this.edits = m;
				}
				toEdits(m) {
					return this.edits.map((r) =>
						r.range.endLineNumberExclusive <= m
							? {
									range: new i.$iL(
										r.range.startLineNumber,
										1,
										r.range.endLineNumberExclusive,
										1,
									),
									text: r.newLines
										.map(
											(u) =>
												u +
												`
`,
										)
										.join(""),
								}
							: r.range.startLineNumber === 1
								? {
										range: new i.$iL(1, 1, m, Number.MAX_SAFE_INTEGER),
										text: r.newLines.join(`
`),
									}
								: {
										range: new i.$iL(
											r.range.startLineNumber - 1,
											Number.MAX_SAFE_INTEGER,
											m,
											Number.MAX_SAFE_INTEGER,
										),
										text: r.newLines
											.map(
												(u) =>
													`
` + u,
											)
											.join(""),
									},
					);
				}
			}
			e.$eZb = C;
		}),
		
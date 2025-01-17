import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/model.js';
import '../../../../editor/common/model/pieceTreeTextBuffer/pieceTreeTextBufferBuilder.js';
import '../../../../editor/common/model/textModelSearch.js';
define(
			de[3133],
			he([1, 0, 3, 17, 64, 1195, 543]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ENc = void 0);
				class d extends t.$1c {
					constructor(r, u, a) {
						super(),
							(this._source = r),
							(this.b = u),
							(this.c = a),
							(this.a = void 0);
					}
					f(r) {
						const u = r.getLineCount();
						return new i.$iL(1, 1, u, this.g(r, u));
					}
					g(r, u) {
						if (u < 1 || u > r.getLineCount())
							throw new Error("Illegal value for lineNumber");
						return r.getLineLength(u) + 1;
					}
					get inputTextBuffer() {
						if (!this.b) {
							const r = new E.$0U();
							r.acceptChunk(this._source);
							const u = r.finish(!0),
								{ textBuffer: a, disposable: h } = u.create(
									w.DefaultEndOfLine.LF,
								);
							(this.b = a), this.D(h);
						}
						return this.b;
					}
					get outputTextBuffers() {
						return (
							this.a ||
								(this.a = this.c.map((r) => {
									const u = new E.$0U();
									u.acceptChunk(r);
									const a = u.finish(!0),
										{ textBuffer: h, disposable: c } = a.create(
											w.DefaultEndOfLine.LF,
										);
									return this.D(c), h;
								})),
							this.a
						);
					}
					findInInputs(r) {
						const a = new C.$XU(r, !1, !1, null).parseSearchRequest();
						if (!a) return [];
						const h = this.f(this.inputTextBuffer);
						return this.inputTextBuffer.findMatchesLineByLine(h, a, !0, 5e3);
					}
					findInOutputs(r) {
						const a = new C.$XU(r, !1, !1, null).parseSearchRequest();
						return a
							? this.outputTextBuffers
									.map((h) => {
										const c = h.findMatchesLineByLine(this.f(h), a, !0, 5e3);
										if (c.length !== 0) return { textBuffer: h, matches: c };
									})
									.filter((h) => !!h)
							: [];
					}
				}
				e.$ENc = d;
			},
		),
		
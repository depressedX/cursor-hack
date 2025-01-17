import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/cppUtils/utils.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/result.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/model.js';
import '../../../../editor/common/services/editorWorker.js';
import '../../../../platform/undoRedo/common/undoRedo.js';
import '../../aiCpp/browser/cppTypes.js';
import '../../../services/ai/browser/diffingService.js';
import '../../../services/aiContext/browser/simpleSerialProcessor.js';
define(
			de[3243],
			he([1, 0, 646, 3, 529, 65, 17, 64, 200, 155, 1704, 1010, 1012]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ecc = void 0);
				let c = class extends i.$1c {
					constructor(g, p, o, f, b, s, l) {
						super(),
							(this.n = g),
							(this.q = p),
							(this.r = f),
							(this.t = b),
							(this.u = s),
							(this.w = l),
							(this.b = void 0),
							(this.c = []),
							(this.replaceText = ""),
							(this.f = !1),
							(this.originalText = void 0),
							(this.g = new r.$IN()),
							(this.h = void 0),
							(this.O = new AbortController()),
							(this.a = g.deltaDecorations([], [this.y(o)])[0]);
					}
					y(g) {
						let p;
						return (
							(p = {
								description: "token streaming diff",
								className:
									"cpp-suggestion-text-decoration-debug " +
									(this.r.decorationClassName ?? ""),
								stickiness:
									d.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
							}),
							{
								range: {
									startLineNumber: g.startLineNumber,
									startColumn: g.startColumn,
									endLineNumber: g.endLineNumber,
									endColumn: g.endColumn,
								},
								options: p,
							}
						);
					}
					isShowing() {
						return this.originalText !== void 0;
					}
					append(g) {
						if (this.f) {
							console.error("Trying to append to a finished diff...");
							return;
						}
						(this.replaceText += g), this.z().catch((p) => console.error(p));
					}
					async setReplaceText(g) {
						(this.f = !0),
							(this.replaceText = g),
							await this.z({ isFinal: !0 }).catch((p) => console.error(p));
					}
					async finish() {
						return (this.f = !0), this.z({ isFinal: !0 });
					}
					async z(g) {
						this.j &&
							(await this.j.process({
								runEvenIfAlreadyProcessing: !1,
								waitUntilProcessed: g?.isFinal === !0,
							}));
					}
					async C(g) {
						try {
							if (!this.isShowing()) return;
							if (this.replaceText === "" && !this.f) {
								this.H("");
								return;
							}
							if (this.n.getDecorationRange(this.a)) {
								const o = this.getCurrentModelText(),
									f = this.replaceText,
									b = this.originalText ?? "";
								let { changes: s } =
									await this.w.computeWordDiff_FOR_STRINGS_SMALLER_THAN_100_KB_ONLY(
										b,
										f,
										{
											computeMoves: !1,
											ignoreTrimWhitespace: !1,
											maxComputationTimeMs: 100,
											onlyCareAboutPrefixOfOriginalLines: !this.f,
										},
									);
								if (!this.f) {
									const v = s.at(-1);
									v && v.removed === !0 && (v.removed = !1);
									const S = s.at(-2);
									v &&
										S &&
										S.added === !0 &&
										v.value.startsWith(S.value) &&
										(s = [...s.slice(0, -2), v]);
								}
								let l = "";
								for (const v of s) v.removed === !1 && (l += v.value);
								const { changes: y } =
									await this.w.computeWordDiff_FOR_STRINGS_SMALLER_THAN_100_KB_ONLY(
										o,
										l,
										{
											computeMoves: !1,
											ignoreTrimWhitespace: !1,
											maxComputationTimeMs: 100,
											onlyCareAboutPrefixOfOriginalLines: !1,
										},
									);
								if (!this.isShowing()) return;
								const $ = this.getCurrentModelText();
								if (o !== $ || g.aborted) return;
								this.J(y), this.H(f), this.F(s);
							}
						} finally {
						}
					}
					F(g) {
						const p = this.getCurrentRange();
						if (!p) return;
						const { greenRanges: o } = (0, t.$Eqb)(g, p, "post-change");
						this.c = this.n.deltaDecorations(
							this.c,
							o.map((f) => ({
								range: {
									startLineNumber: f.startLineNumber,
									startColumn: f.startColumn,
									endLineNumber: f.endLineNumber,
									endColumn: f.endColumn,
								},
								options: {
									description: "green",
									className: "token-streaming-diff-green-background",
									stickiness:
										d.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
								},
							})),
						);
					}
					G() {
						this.c.length > 0 &&
							(this.n.deltaDecorations(this.c, []), (this.c = []));
					}
					H(g) {
						if (this.f) {
							this.I();
							return;
						}
						const p = this.n.getDecorationRange(this.a);
						if (!p) return;
						const o = g.split(`
`),
							f = o.at(-1);
						if (f === void 0) return;
						const b = f.length,
							s = p.startLineNumber + o.length - 1,
							l = Math.max(
								o.length === 1
									? Math.max(p.startColumn + b - 1, p.startColumn)
									: b - 1,
								1,
							),
							y = {
								startLineNumber: s,
								startColumn: l,
								endLineNumber: s,
								endColumn: l + 2,
							},
							v = {
								range: this.n.validateRange(y),
								options: {
									description: "token streaming diff streaming",
									className:
										g.length === 0
											? "cpp-suggestion-text-decoration-debug-streaming-pending"
											: "cpp-suggestion-text-decoration-debug-streaming",
									stickiness:
										d.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
								},
							};
						this.b = this.n.deltaDecorations(this.b ? [this.b] : [], [v]).at(0);
					}
					I() {
						this.b &&
							(this.n.deltaDecorations([this.b], []), (this.b = void 0));
					}
					J(g) {
						let p = this.n.getDecorationRange(this.a);
						if (!p) return;
						let o = p.startLineNumber,
							f = p.startColumn,
							b = [];
						for (const s of g) {
							const l = s.value.split(`
`),
								y = o + l.length - 1,
								$ =
									l.length > 1
										? l[l.length - 1].length + 1
										: f + s.value.length;
							s.added === !0
								? b.push({ range: new C.$iL(o, f, o, f), text: s.value })
								: s.removed === !0 &&
									b.push({ range: new C.$iL(o, f, y, $), text: "" }),
								s.added !== !0 && ((f = $), (o = y));
						}
						(u.$Acc.current = !0),
							this.r.shouldAppendToUndoRedoGroup
								? this.n.pushEditOperations([], b, () => null, this.g)
								: this.n.applyEdits(b);
					}
					L() {
						if (this.q?.getModel()?.id !== this.n.id) return;
						const g = this.q.getSelection(),
							p = this.n.getDecorationRange(this.a);
						p !== null &&
							g !== null &&
							g.intersectRanges(p) !== null &&
							(this.q.setPosition(
								{ lineNumber: g.startLineNumber, column: g.startColumn },
								"cpp-peek",
							),
							this.q.setSelection(
								new C.$iL(
									g.startLineNumber,
									g.startColumn,
									g.startLineNumber,
									g.startColumn,
								),
								"cpp-peek",
							),
							(this.h = g !== null ? g : void 0));
					}
					M() {
						this.q?.getModel()?.id === this.n.id &&
							this.h !== void 0 &&
							this.q.setSelection(this.h, "cpp-revert");
					}
					async show(g) {
						if (!this.isShowing()) {
							const p = this.P();
							(this.j = new h.$Ccc(
								async (o) => (await this.C(o), (0, w.Ok)("success")),
								p.signal,
								(o) => console.error(o),
								50,
							)),
								(this.originalText = this.getCurrentModelText()),
								this.L();
						}
						g?.dontFlush !== !0 && (await this.z());
					}
					async N(g, p) {
						if (this.n.getDecorationRange(this.a)) {
							const f = this.getCurrentModelText(),
								{ changes: b } = await this.t.wordDiff(f, g);
							if (this.isShowing()) return;
							const s = this.getCurrentModelText();
							if (f !== s || p.aborted) return;
							this.J(b);
						}
					}
					async accept() {
						this.isShowing() || (await this.show()), this.dispose();
					}
					P() {
						return this.O.abort(), (this.O = new AbortController()), this.O;
					}
					async hide() {
						if (this.isShowing()) {
							const g = this.P(),
								p = this.originalText ?? "";
							if (
								((this.originalText = void 0),
								await this.N(p, g.signal),
								g.signal.aborted)
							)
								return;
							this.I(), this.G(), this.M();
						}
					}
					dispose() {
						super.dispose(),
							this.n.deltaDecorations([this.a], []),
							this.G(),
							this.I();
					}
					getCurrentRange() {
						return this.n.getDecorationRange(this.a);
					}
					getCurrentModelText() {
						const g = this.n.getDecorationRange(this.a);
						return g === null ? "" : this.n.getValueInRange(g);
					}
				};
				(e.$Ecc = c),
					(e.$Ecc = c = Ne([j(4, a.$ycc), j(5, E.$dtb), j(6, m.$Cxb)], c));
			},
		),
		
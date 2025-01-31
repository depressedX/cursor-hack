import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../editor/common/model.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/markers/common/markers.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../../proto/aiserver/v1/utils_pb.js';
import '../browser/aiWatcherHelpers.js';
import '../../../../platform/markers/common/markerService.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
define(
			de[2999],
			he([1, 0, 64, 3, 90, 25, 83, 975, 667, 45]),
			function (ce /*require*/,
 e /*exports*/,
 t /*model*/,
 i /*lifecycle*/,
 w /*markers*/,
 E /*workspace*/,
 C /*utils_pb*/,
 d /*aiWatcherHelpers*/,
 m /*markerService*/,
 r /*reactiveStorageService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ced = void 0);
				let u = class extends i.$1c {
					g(h, c) {
						this.j.setNonPersistentStorage("lintState", "bugs", (n) =>
							n.map(
								(g) => (
									g.bug.uuid === this.h.bug.uuid &&
										((g.bug.replaceRange = new C.$Fs({
											startLineNumber: h.startLineNumber,
											startColumn: h.startColumn,
											endLineNumberInclusive: h.endLineNumber,
											endColumn: h.endColumn,
										})),
										(g.bug.reevaluateRange = c
											? new C.$Fs({
													startLineNumber: c.startLineNumber,
													startColumn: c.startColumn,
													endLineNumberInclusive: c.endLineNumber,
													endColumn: c.endColumn,
												})
											: void 0)),
									g
								),
							),
						);
					}
					getMarker() {
						return this.m.read({ owner: this.b })[0];
					}
					constructor(h, c, n, g, p) {
						if (
							(super(),
							(this.h = c),
							(this.j = n),
							(this.m = g),
							(this.n = p),
							(this.a = !1),
							(this.modelRef = h),
							this.D(this.modelRef),
							(this.b = m.$kic + this.h.bug.uuid),
							!this.h.bug.replaceRange)
						)
							throw new Error("BUG DOES NOT HAVE A RANGE");
						const o = this.modelRef.object.textEditorModel.deltaDecorations(
							[],
							[
								{
									range: {
										startLineNumber: this.h.bug.replaceRange.startLineNumber,
										startColumn: this.h.bug.replaceRange.startColumn,
										endLineNumber:
											this.h.bug.replaceRange.endLineNumberInclusive,
										endColumn: this.h.bug.replaceRange.endColumn,
									},
									options: {
										description: "ai lint bug",
										stickiness:
											t.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
									},
								},
							],
						);
						if (o.length !== 1)
							throw new Error("Expected exactly one decoration");
						if (((this.c = o[0]), this.h.bug.reevaluateRange)) {
							const f = this.modelRef.object.textEditorModel.deltaDecorations(
								[],
								[
									{
										range: {
											startLineNumber:
												this.h.bug.reevaluateRange.startLineNumber,
											startColumn: this.h.bug.reevaluateRange.startColumn,
											endLineNumber:
												this.h.bug.reevaluateRange.endLineNumberInclusive,
											endColumn: this.h.bug.reevaluateRange.endColumn,
										},
										options: {
											description: "ai lint bug",
											stickiness:
												t.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
										},
									},
								],
							);
							if (f.length !== 1)
								throw new Error("Expected exactly one decoration");
							this.f = f[0];
						}
						this.D(
							h.object.textEditorModel.onDidChangeContent((f) => {
								const b = this.q(),
									s = this.r();
								for (const l of f.changes) {
									const y = (0, d.$69b)(b, l.range);
									d.RangeWhereIs.Overlap;
									const $ = s ? (0, d.$69b)(s, l.range) : d.RangeWhereIs.After;
									d.RangeWhereIs.Overlap;
								}
								this.s(), this.g(b, s);
							}),
						),
							this.s();
					}
					q() {
						const h = this.modelRef.object.textEditorModel.getDecorationRange(
							this.c,
						);
						if (!h) throw new Error("Expected a decoration range");
						return h;
					}
					r() {
						if (!this.f) return;
						const h = this.modelRef.object.textEditorModel.getDecorationRange(
							this.f,
						);
						if (h) return h;
					}
					s() {
						if (this.a) return;
						const h = this.q();
						this.m.changeOne(this.b, this.h.uri, [
							{
								severity: w.MarkerSeverity.AI,
								message: this.h.bug.message,
								startLineNumber: h.startLineNumber,
								startColumn: h.startColumn,
								endLineNumber: h.endLineNumber,
								endColumn: h.endColumn,
								source: "cursor-ai-linter",
								aiLintBugData: {
									replaceText: this.h.bug.replaceText,
									originalText: this.h.bug.replaceInitialText,
									bugUuid: this.h.bug.uuid,
									bug: this.h.bug,
								},
							},
						]);
					}
					dispose() {
						(this.a = !0),
							super.dispose(),
							this.m.changeOne(this.b, this.h.uri, []);
					}
				};
				(e.$Ced = u),
					(e.$Ced = u = Ne([j(2, r.$0zb), j(3, w.$aM), j(4, E.$Vi)], u));
			},
		)

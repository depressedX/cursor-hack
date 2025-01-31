import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../../../../../base/common/event.js';
import '../../../../../platform/markers/common/markers.js';
import '../../../../../base/common/resources.js';
import '../../../../../../proto/aiserver/v1/utils_pb.js';
import '../../../../../base/common/result.js';
define(
			de[3242],
			he([1, 0, 3, 42, 25, 6, 90, 19, 83, 529]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*resolverService*/,
 w /*workspace*/,
 E /*event*/,
 C /*markers*/,
 d /*resources*/,
 m /*utils_pb*/,
 r /*result*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$KZc = void 0);
				let u = class {
					constructor(n, g, p, o) {
						(this.c = n),
							(this.f = g),
							(this.g = p),
							(this.h = o),
							(this.j = new AbortController()),
							(this.k = new t.$Zc()),
							(this.n = void 0),
							(this.o = void 0),
							(this.p = void 0),
							(this.q = void 0),
							(this.v = !1);
					}
					m(n) {
						if (this.n?.intent.value.scope.case === "cmdkScope") {
							if (n.case === "cmd-k")
								return { fileUri: n.fileUri, range: n.replaceRange };
						} else if (this.n?.intent.value.scope.case === "fileScope")
							return {
								fileUri: this.f.resolveRelativePath(
									this.n.intent.value.scope.value.relativeWorkspacePath,
								),
								range: this.n.intent.value.scope.value.filterRange
									? {
											startLineNumber:
												this.n.intent.value.scope.value.filterRange
													.startLineNumber,
											endLineNumberExclusive:
												this.n.intent.value.scope.value.filterRange
													.endLineNumberInclusive + 1,
										}
									: void 0,
							};
						this.c.error({
							message: "Cannot find intended scope of the lints context.",
						});
					}
					u() {
						return this.s === void 0 && this.t === void 0
							? !0
							: this.s === void 0 || this.t === void 0
								? !1
								: d.$dh.isEqual(this.s.fileUri, this.t.fileUri) &&
									this.s.range?.startLineNumber ===
										this.t.range?.startLineNumber &&
									this.s.range?.endLineNumberExclusive ===
										this.t.range?.endLineNumberExclusive;
					}
					async w() {
						if (this.s === void 0) return (0, r.Ok)("success");
						let n = this.h.read({ resource: this.s.fileUri });
						if (this.s.range !== void 0) {
							const b = this.s.range;
							n = n.filter(
								(s) =>
									s.startLineNumber >= b.startLineNumber &&
									s.endLineNumber < b.endLineNumberExclusive,
							);
						}
						this.n &&
							this.n.intent.value.filterToSeverities.length > 0 &&
							(n = n.filter((b) =>
								this.n?.intent.value.filterToSeverities.includes(a(b.severity)),
							));
						const g = this.o?.object.textEditorModel.getLineCount() ?? 1,
							p = new Set();
						n.forEach((b) => {
							for (
								let s = Math.max(1, b.startLineNumber - 3);
								s <= b.endLineNumber + 3 && s <= g;
								s++
							)
								p.add(s);
						});
						const o = Array.from(p).sort((b, s) => b - s);
						return (
							await this.c.newItems(
								n.length > 0
									? [
											{
												item: {
													case: "lints",
													value: {
														relativeWorkspacePath: this.f.asRelativePath(
															this.s.fileUri,
														),
														lints: n.map((b) =>
															h(b, this.o?.object.textEditorModel),
														),
														contextLines: o.map((b) => ({
															lineNumber: b,
															line:
																this.o?.object.textEditorModel.getLineContent(
																	b,
																) ?? "",
														})),
													},
												},
												intent: this.n,
											},
										]
									: [],
							)
						).ok()
							? (0, r.Ok)("success")
							: (0, r.Err)("failure");
					}
					async x(n) {
						if (
							this.j.signal.aborted ||
							(!n.runEvenIfAlreadyProcessing && this.v)
						)
							return;
						this.v = !0;
						let g = !0;
						try {
							(await this.w()).ok() && (this.t = this.s);
						} catch (p) {
							console.error(p),
								this.c.error({ message: "Error processing lints context." }),
								(g = !1);
						} finally {
							(this.v = !1),
								g && !this.u() && this.x({ runEvenIfAlreadyProcessing: !1 });
						}
					}
					async process(n, g) {
						if (this.j.signal.aborted) return;
						this.q === void 0 &&
							(this.q = this.h.onMarkerChanged((o) => {
								this.s !== void 0 &&
									o.includes(this.s.fileUri) &&
									this.x({ runEvenIfAlreadyProcessing: !1 });
							}));
						const p = this.m(n);
						p !== void 0 &&
							((this.s = p),
							this.s.fileUri !== this.o?.object.textEditorModel.uri &&
								(this.o?.dispose(),
								this.p?.dispose(),
								(this.o = await this.g.createModelReference(this.s.fileUri)),
								(this.p = E.Event.defer(
									this.o.object.textEditorModel.onDidChangeContent.bind(
										this.o.object.textEditorModel,
									),
									this.k,
								)(() => {
									this.x({ runEvenIfAlreadyProcessing: !1 });
								}))),
							await this.x(g));
					}
					update_IS_CALLED_ON_EVERY_KEYSTROKE_SO_BE_CAREFUL(n, g) {
						(this.n = g), this.process(n, { runEvenIfAlreadyProcessing: !1 });
					}
					async blockForFinalInput(n, g) {
						return (
							(this.n = g),
							await this.process(n, { runEvenIfAlreadyProcessing: !0 }),
							"useFreshItemsEvenIfNotRerankedYet"
						);
					}
					freeze() {
						this.j.abort();
					}
					unfreeze() {
						this.j = new AbortController();
					}
					dispose() {
						this.j.abort(),
							this.k.dispose(),
							this.p?.dispose(),
							this.o?.dispose(),
							this.q?.dispose();
					}
				};
				(e.$KZc = u),
					(e.$KZc = u = Ne([j(1, w.$Vi), j(2, i.$MO), j(3, C.$aM)], u));
				function a(c) {
					switch (c) {
						case C.MarkerSeverity.AI:
							return m.LintSeverity.AI;
						case C.MarkerSeverity.Hint:
							return m.LintSeverity.HINT;
						case C.MarkerSeverity.Info:
							return m.LintSeverity.INFO;
						case C.MarkerSeverity.Warning:
							return m.LintSeverity.WARNING;
						case C.MarkerSeverity.Error:
							return m.LintSeverity.ERROR;
						default:
							return m.LintSeverity.UNSPECIFIED;
					}
				}
				function h(c, n) {
					let g = {
						startLineNumber: Math.max(
							1,
							Math.min(c.startLineNumber, 2147483e3),
						),
						startColumn: Math.max(1, Math.min(c.startColumn, 2147483e3)),
						endLineNumberInclusive: Math.max(
							1,
							Math.min(c.endLineNumber, 2147483e3),
						),
						endColumn: Math.max(1, Math.min(c.endColumn, 2147483e3)),
					};
					return (
						n !== void 0 &&
							((g = {
								startLineNumber: Math.max(
									1,
									Math.min(g.startLineNumber, n.getLineCount()),
								),
								startColumn: g.startColumn,
								endLineNumberInclusive: Math.max(
									1,
									Math.min(g.endLineNumberInclusive, n.getLineCount()),
								),
								endColumn: g.endColumn,
							}),
							(g = {
								startLineNumber: g.startLineNumber,
								startColumn: Math.max(
									1,
									Math.min(
										g.startColumn,
										n.getLineMaxColumn(g.startLineNumber),
									),
								),
								endLineNumberInclusive: g.endLineNumberInclusive,
								endColumn: Math.max(
									1,
									Math.min(
										g.endColumn,
										n.getLineMaxColumn(g.endLineNumberInclusive),
									),
								),
							})),
						(g = {
							startLineNumber: Math.max(
								1,
								Math.min(c.startLineNumber, 2147483e3),
							),
							startColumn: Math.max(1, Math.min(c.startColumn, 2147483e3)),
							endLineNumberInclusive: Math.max(
								1,
								Math.min(c.endLineNumber, 2147483e3),
							),
							endColumn: Math.max(1, Math.min(c.endColumn, 2147483e3)),
						}),
						{ severity: a(c.severity), message: c.message, range: g }
					);
				}
			},
		)

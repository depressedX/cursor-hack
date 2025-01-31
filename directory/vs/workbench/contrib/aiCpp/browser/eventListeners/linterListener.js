import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../platform/markers/common/markers.js';
import '../cppEventLogger.js';
import '../cppDebouncingService.js';
import '../../../../../../proto/aiserver/v1/utils_pb.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/instantiation/common/extensions.js';
import '../../../../../editor/common/services/model.js';
import '../../../../services/ai/browser/aiMiscServices.js';
import '../../../../../base/common/map.js';
import '../../../../../platform/markers/browser/markerService.js';
define(
			de[1789],
			he([1, 0, 90, 332, 551, 83, 5, 20, 67, 137, 59, 770]),
			function (ce /*require*/,
 e /*exports*/,
 t /*markers*/,
 i /*cppEventLogger*/,
 w /*cppDebouncingService*/,
 E /*utils_pb*/,
 C /*instantiation*/,
 d /*extensions*/,
 m /*model*/,
 r /*aiMiscServices*/,
 u /*map*/,
 a /*markerService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$R7b = void 0),
					(e.$S7b = o),
					(e.$T7b = f);
				const h = 5,
					c = 50,
					n = 2500;
				e.$R7b = (0, C.$Mi)("linterListenerService");
				let g = class {
					constructor(s, l, y, $) {
						(this.c = s),
							(this.d = l),
							(this.f = y),
							(this.g = $),
							(this.cachedLinterErrors = new u.$Jc(c)),
							(this.updateLinterErrorsForUri = (0, w.$v6b)(
								(v) => {
									const I = this.c
										.read({ resource: v })
										.filter((T) => T.severity === t.MarkerSeverity.Error);
									this.maybeUpdateLinterErrors(v, I);
								},
								(v) => v.toString(),
								500,
							));
					}
					maybeUpdateLinterErrors(s, l) {
						const y = l.filter((v) => v.message.length < n).slice(0, h),
							$ = this.cachedLinterErrors.get(s.toString()) ?? [];
						if (!($.length === 0 && y.length === 0)) {
							const v = this.f.getModel(s);
							if (
								v === null ||
								this.g.isModelTooBigFullCheck(v) ||
								($.length === y.length &&
									$.every((T) => y.some((P) => p(T, P))))
							)
								return;
							this.cachedLinterErrors.set(s.toString(), y);
							const S = v.getVersionId(),
								I = y.map(f);
							this.d.recordLinterChange({
								model: v,
								modelVersion: S,
								errors: I,
							});
						}
					}
					registerLinterListener() {
						return this.c.onMarkerChanged((s) => {
							s.map(this.updateLinterErrorsForUri.bind(this));
						});
					}
				};
				g = Ne([j(0, t.$aM), j(1, i.$V7b), j(2, m.$QO), j(3, r.$hfc)], g);
				function p(b, s) {
					return (
						b.code === s.code &&
						b.startLineNumber === s.startLineNumber &&
						b.startColumn === s.startColumn &&
						b.message === s.message &&
						b.source === s.source
					);
				}
				function o(b) {
					return (b ?? []).map(
						(s) =>
							new E.$Ts({
								message: s.message,
								range: {
									startPosition: {
										line: s.startLineNumber,
										column: s.startColumn,
									},
									endPosition: { line: s.endLineNumber, column: s.endColumn },
								},
							}),
					);
				}
				function f(b) {
					return {
						source: b.source,
						message: b.message,
						relatedInformation: (b.relatedInformation ?? []).map((s) => ({
							message: s.message,
							range: {
								startPosition: {
									line: s.startLineNumber,
									column: s.startColumn,
								},
								endPosition: { line: s.endLineNumber, column: s.endColumn },
							},
						})),
						severity: (0, a.$O7b)(b.severity),
						range: {
							startPosition: { line: b.startLineNumber, column: b.startColumn },
							endPosition: { line: b.endLineNumber, column: b.endColumn },
						},
					};
				}
				(0, d.$lK)(e.$R7b, g, d.InstantiationType.Delayed);
			},
		)

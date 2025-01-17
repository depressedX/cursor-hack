import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/observable.js';
import './diffEditorViewZones/diffEditorViewZones.js';
import '../features/movedBlocksLinesFeature.js';
import '../registrations.contribution.js';
import '../utils.js';
define(
			de[2902],
			he([1, 0, 3, 77, 1216, 1587, 608, 370]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$dyb = void 0);
				class m extends t.$1c {
					constructor(u, a, h, c) {
						super(),
							(this.a = u),
							(this.b = a),
							(this.c = h),
							(this.f = (0, i.derived)(this, (n) => {
								const g = this.b.read(n),
									p = g?.diff.read(n);
								if (!p) return null;
								const o = this.b.read(n).movedTextToCompare.read(n),
									f = this.c.renderIndicators.read(n),
									b = this.c.showEmptyDecorations.read(n),
									s = [],
									l = [];
								if (!o)
									for (const $ of p.mappings)
										if (
											($.lineRangeMapping.original.isEmpty ||
												s.push({
													range: $.lineRangeMapping.original.toInclusiveRange(),
													options: f ? C.$Mxb : C.$Oxb,
												}),
											$.lineRangeMapping.modified.isEmpty ||
												l.push({
													range: $.lineRangeMapping.modified.toInclusiveRange(),
													options: f ? C.$Lxb : C.$Nxb,
												}),
											$.lineRangeMapping.modified.isEmpty ||
												$.lineRangeMapping.original.isEmpty)
										)
											$.lineRangeMapping.original.isEmpty ||
												s.push({
													range: $.lineRangeMapping.original.toInclusiveRange(),
													options: C.$Txb,
												}),
												$.lineRangeMapping.modified.isEmpty ||
													l.push({
														range:
															$.lineRangeMapping.modified.toInclusiveRange(),
														options: C.$Qxb,
													});
										else {
											const v =
												this.c.useTrueInlineDiffRendering.read(n) &&
												(0, w.$4xb)($.lineRangeMapping);
											for (const S of $.lineRangeMapping.innerChanges || [])
												if (
													($.lineRangeMapping.original.contains(
														S.originalRange.startLineNumber,
													) &&
														s.push({
															range: S.originalRange,
															options:
																S.originalRange.isEmpty() && b
																	? C.$Uxb
																	: C.$Sxb,
														}),
													$.lineRangeMapping.modified.contains(
														S.modifiedRange.startLineNumber,
													) &&
														l.push({
															range: S.modifiedRange,
															options:
																S.modifiedRange.isEmpty() && b && !v
																	? C.$Rxb
																	: C.$Pxb,
														}),
													v)
												) {
													const I = g.model.original.getValueInRange(
														S.originalRange,
													);
													l.push({
														range: S.modifiedRange,
														options: {
															description: "deleted-text",
															before: {
																content: I,
																inlineClassName: "inline-deleted-text",
															},
															zIndex: 1e5,
															showIfCollapsed: !0,
														},
													});
												}
										}
								if (o)
									for (const $ of o.changes) {
										const v = $.original.toInclusiveRange();
										v && s.push({ range: v, options: f ? C.$Mxb : C.$Oxb });
										const S = $.modified.toInclusiveRange();
										S && l.push({ range: S, options: f ? C.$Lxb : C.$Nxb });
										for (const I of $.innerChanges || [])
											s.push({ range: I.originalRange, options: C.$Sxb }),
												l.push({ range: I.modifiedRange, options: C.$Pxb });
									}
								const y = this.b.read(n).activeMovedText.read(n);
								for (const $ of p.movedTexts)
									s.push({
										range: $.lineRangeMapping.original.toInclusiveRange(),
										options: {
											description: "moved",
											blockClassName:
												"movedOriginal" + ($ === y ? " currentMove" : ""),
											blockPadding: [
												E.$cyb.movedCodeBlockPadding,
												0,
												E.$cyb.movedCodeBlockPadding,
												E.$cyb.movedCodeBlockPadding,
											],
										},
									}),
										l.push({
											range: $.lineRangeMapping.modified.toInclusiveRange(),
											options: {
												description: "moved",
												blockClassName:
													"movedModified" + ($ === y ? " currentMove" : ""),
												blockPadding: [4, 0, 4, 4],
											},
										});
								return { originalDecorations: s, modifiedDecorations: l };
							})),
							this.D(
								(0, d.$xwb)(
									this.a.original,
									this.f.map((n) => n?.originalDecorations || []),
								),
							),
							this.D(
								(0, d.$xwb)(
									this.a.modified,
									this.f.map((n) => n?.modifiedDecorations || []),
								),
							);
					}
				}
				e.$dyb = m;
			},
		),
		
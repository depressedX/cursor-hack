import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/assert.js';
import '../../../../../editor/common/services/editorWorker.js';
import '../../../../../platform/configuration/common/configuration.js';
import './lineRange.js';
import './mapping.js';
import '../../../../../platform/observable/common/platformObservableUtils.js';
define(
			de[3078],
			he([1, 0, 229, 200, 10, 507, 686, 326]),
			function (ce /*require*/,
 e /*exports*/,
 t /*assert*/,
 i /*editorWorker*/,
 w /*configuration*/,
 E /*lineRange*/,
 C /*mapping*/,
 d /*platformObservableUtils*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$JZb = void 0),
					(e.$KZb = r),
					(e.$LZb = u);
				let m = class {
					constructor(h, c) {
						(this.b = h),
							(this.d = c),
							(this.a = (0, d.$Mwb)(
								"mergeEditor.diffAlgorithm",
								"advanced",
								this.d,
							).map((n) =>
								n === "smart"
									? "legacy"
									: n === "experimental"
										? "advanced"
										: n,
							));
					}
					async computeDiff(h, c, n) {
						const g = this.a.read(n),
							p = h.getVersionId(),
							o = c.getVersionId(),
							f = await this.b.computeDiff(
								h.uri,
								c.uri,
								{
									ignoreTrimWhitespace: !1,
									maxComputationTimeMs: 0,
									computeMoves: !1,
								},
								g,
							);
						if (!f) throw new Error("Diff computation failed");
						if (h.isDisposed() || c.isDisposed()) return { diffs: null };
						const b = f.changes.map(
								(y) =>
									new C.$xZb(
										r(y.original),
										h,
										r(y.modified),
										c,
										y.innerChanges?.map(($) => u($)),
									),
							),
							s = h.getVersionId(),
							l = c.getVersionId();
						return p !== s || o !== l
							? { diffs: null }
							: ((0, t.$nd)(() => {
									for (const y of b) {
										const $ = y.inputRange,
											v = y.outputRange,
											S = y.inputTextModel,
											I = y.outputTextModel;
										for (const T of y.rangeMappings) {
											let P =
												$.startLineNumber - 1 <= T.inputRange.startLineNumber &&
												T.inputRange.endLineNumber <= $.endLineNumberExclusive;
											P &&
												T.inputRange.startLineNumber ===
													$.startLineNumber - 1 &&
												(P =
													T.inputRange.endColumn >=
													S.getLineMaxColumn(T.inputRange.startLineNumber)),
												P &&
													T.inputRange.endLineNumber ===
														$.endLineNumberExclusive &&
													(P = T.inputRange.endColumn === 1);
											let k =
												v.startLineNumber - 1 <=
													T.outputRange.startLineNumber &&
												T.outputRange.endLineNumber <= v.endLineNumberExclusive;
											if (
												(k &&
													T.outputRange.startLineNumber ===
														v.startLineNumber - 1 &&
													(k =
														T.outputRange.endColumn >=
														I.getLineMaxColumn(T.outputRange.endLineNumber)),
												k &&
													T.outputRange.endLineNumber ===
														v.endLineNumberExclusive &&
													(k = T.outputRange.endColumn === 1),
												!P || !k)
											)
												return !1;
										}
									}
									return (
										b.length === 0 ||
										(b[0].inputRange.startLineNumber ===
											b[0].outputRange.startLineNumber &&
											(0, t.$od)(
												b,
												(y, $) =>
													$.inputRange.startLineNumber -
														y.inputRange.endLineNumberExclusive ===
														$.outputRange.startLineNumber -
															y.outputRange.endLineNumberExclusive &&
													y.inputRange.endLineNumberExclusive <
														$.inputRange.startLineNumber &&
													y.outputRange.endLineNumberExclusive <
														$.outputRange.startLineNumber,
											))
									);
								}),
								{ diffs: b });
					}
				};
				(e.$JZb = m), (e.$JZb = m = Ne([j(0, i.$Cxb), j(1, w.$gj)], m));
				function r(a) {
					return new E.$bZb(a.startLineNumber, a.length);
				}
				function u(a) {
					return new C.$yZb(a.originalRange, a.modifiedRange);
				}
			},
		),
		
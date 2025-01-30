import '../../../../require.js';
import '../../../../exports.js';
import '../../common/core/range.js';
import '../../common/core/lineRange.js';
import '../../common/diff/linesDiffComputers.js';
import '../../common/diff/rangeMapping.js';
import '../../../platform/reactivestorage/common/reactiveStorageTypes2.js';
import '../../../platform/reactivestorage/browser/reactiveStorageTypes.js';
define(
			de[1190],
			he([1, 0, 17, 196, 587, 342, 670, 205]),
			function (ce /*require*/,
 e /*exports*/,
 t /*range*/,
 i /*lineRange*/,
 w /*linesDiffComputers*/,
 E /*rangeMapping*/,
 C /*reactiveStorageTypes2*/,
 d /*reactiveStorageTypes*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.RangeWhereIs = void 0),
					(e.$W7b = r),
					(e.$X7b = a),
					(e.$Y7b = h),
					(e.$Z7b = p);
				function m() {
					return new C.$KN();
				}
				function r(o) {
					return {
						delegate: m(),
						inputBoxDelegate: new d.$Zzb(),
						initText: o ?? "",
						selections: [],
						selectedLinks: [],
						images: [],
					};
				}
				var u;
				(function (o) {
					(o[(o.Before = 0)] = "Before"),
						(o[(o.Overlap = 1)] = "Overlap"),
						(o[(o.After = 2)] = "After");
				})(u || (e.RangeWhereIs = u = {}));
				function a(o, f) {
					return o.endLineNumberExclusive <= f.startLineNumber
						? u.After
						: o.startLineNumber > f.endLineNumber
							? u.Before
							: u.Overlap;
				}
				function h(o, f, b, s = !1) {
					if (s) {
						const P = o;
						(o = f), (f = P);
					}
					const l = (b ? w.$qxb.getLegacy() : w.$qxb.getDefault()).computeDiff(
						o,
						f,
						{
							ignoreTrimWhitespace: !1,
							maxComputationTimeMs: 200,
							computeMoves: !1,
							onlyCareAboutPrefixOfOriginalLines: !b,
							shouldGracefullyFallBackOnTimeout: !b,
						},
					);
					let y = l.changes;
					l.hitTimeout &&
						(console.warn(
							"diff computation quit early, not sure what to do here",
						),
						(y = [
							new E.$CL(
								new i.$rL(1, o.length + 1),
								new i.$rL(1, f.length + 1),
								void 0,
							),
						]));
					const $ = [];
					let v = [];
					for (const P of y)
						if (P.modified.endLineNumberExclusive === f.length + 1 && !b) {
							if (
								((v = o.slice(
									P.original.startLineNumber - 1,
									P.original.endLineNumberExclusive - 1,
								)),
								P.modified.isEmpty)
							)
								continue;
							$.push({
								removedTextLines: [],
								removedLinesOriginalRange: new i.$rL(
									P.original.startLineNumber,
									P.original.startLineNumber,
								),
								addedRange: P.modified,
								relativeInnerChanges: void 0,
							});
						} else {
							const k = c(o, f, P);
							$.push({
								removedTextLines: o.slice(
									P.original.startLineNumber - 1,
									P.original.endLineNumberExclusive - 1,
								),
								removedLinesOriginalRange: P.original,
								addedRange: P.modified,
								relativeInnerChanges: P.innerChanges?.map((L) => ({
									originalRange: L.originalRange.delta(
										-P.original.startLineNumber + 1,
									),
									modifiedRange: L.modifiedRange.delta(
										-P.modified.startLineNumber + 1,
									),
								})),
								indentation: k,
							});
						}
					const S = [...f, ...v];
					let I,
						T = new i.$rL(1, 1);
					return (
						v.length > 0 &&
							((I = f.length + 1),
							(T = new i.$rL(f.length + 1, f.length + 1 + v.length))),
						{
							newFullRangeTextLines: S,
							changes: $,
							activeLine: I,
							pendingRange: T,
						}
					);
				}
				function c(o, f, b) {
					const s = o.slice(
							b.original.startLineNumber - 1,
							b.original.endLineNumberExclusive - 1,
						),
						l = f.slice(
							b.modified.startLineNumber - 1,
							b.modified.endLineNumberExclusive - 1,
						);
					if (!s.length || !l.length) return;
					function y(v) {
						let S = 0;
						for (const I of v)
							if (I === " " || I === "	") S += 1;
							else break;
						return S;
					}
					const $ = y(s[0]);
					for (let v = 0; v <= l.length - s.length; v++) {
						const S = l[v];
						if (S === void 0) continue;
						const I = y(S),
							T = I - $;
						let P = !0;
						for (let k = 0; k < s.length; k++) {
							const L = s[k],
								D = l[v + k];
							if (D === void 0) {
								P = !1;
								break;
							}
							let M;
							if (
								(T >= 0 ? (M = n(D, T)) : (M = g(D, -T)), L.trim() !== M.trim())
							) {
								P = !1;
								break;
							}
						}
						if (P) {
							const k = I - $;
							return {
								range: new i.$rL(
									b.modified.startLineNumber + v,
									b.modified.startLineNumber + v + s.length,
								),
								level: k,
							};
						}
					}
				}
				function n(o, f) {
					let b = 0;
					const s = 4;
					let l = 0;
					for (; l < o.length && b < f; l++)
						if (o[l] === " ") b += 1;
						else if (o[l] === "	") b += s;
						else break;
					return o.substring(l);
				}
				function g(o, f) {
					let s = "";
					for (; f >= 4; ) (s += "	"), (f -= 4);
					return (s += " ".repeat(f)), s + o;
				}
				function p(o, f, b, s = !1, l = !1) {
					const y = b.object.textEditorModel;
					let $ =
						f.currentRange.startLineNumber <
						f.currentRange.endLineNumberExclusive
							? new t.$iL(
									f.currentRange.startLineNumber,
									1,
									f.currentRange.endLineNumberExclusive - 1,
									y.getLineMaxColumn(f.currentRange.endLineNumberExclusive - 1),
								)
							: new t.$iL(
									f.currentRange.startLineNumber,
									1,
									f.currentRange.startLineNumber,
									1,
								);
					const v = [],
						S = $.isEmpty() ? [] : y.getValueInRange($).split(y.getEOL()),
						I = w.$qxb
							.getLegacy()
							.computeDiff(S, o.newFullRangeTextLines, {
								ignoreTrimWhitespace: !1,
								computeMoves: !1,
								maxComputationTimeMs: 200,
							});
					if (I.hitTimeout) {
						console.warn("INLINEDIFF QUITTING EARLY, doing big slow edit");
						let T = o.newFullRangeTextLines.join(y.getEOL());
						$.isEmpty() && (T += y.getEOL());
						const P = { range: $, text: T, forceMoveMarkers: !0 };
						v.push(P);
					} else
						for (const T of I.changes) {
							let P = o.newFullRangeTextLines
									.slice(
										T.modified.startLineNumber - 1,
										T.modified.endLineNumberExclusive - 1,
									)
									.join(y.getEOL()),
								k;
							if (T.original.isEmpty)
								(k = new t.$iL(
									$.startLineNumber + T.original.startLineNumber - 1,
									1,
									$.startLineNumber + T.original.startLineNumber - 1,
									1,
								)),
									(P += y.getEOL());
							else if (T.modified.isEmpty) {
								if (
									((k = new t.$iL(
										$.startLineNumber + T.original.startLineNumber - 1,
										1,
										$.startLineNumber + T.original.endLineNumberExclusive - 1,
										1,
									)),
									k.endLineNumber > y.getLineCount())
								) {
									let D = y.getLineCount(),
										M = 1,
										N = k.startLineNumber;
									N > 1 &&
										(N--, (M = b.object.textEditorModel.getLineMaxColumn(N))),
										(k = new t.$iL(
											N,
											M,
											D,
											b.object.textEditorModel.getLineMaxColumn(D),
										));
								}
								P = null;
							} else
								k = new t.$iL(
									$.startLineNumber + T.original.startLineNumber - 1,
									1,
									$.startLineNumber + T.original.endLineNumberExclusive - 1 - 1,
									y.getLineMaxColumn(
										$.startLineNumber +
											T.original.endLineNumberExclusive -
											1 -
											1,
									),
								);
							const L = { range: k, text: P, forceMoveMarkers: !0 };
							v.push(L);
						}
					return v;
				}
			},
		),
		
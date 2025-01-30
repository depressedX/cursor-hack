import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../editor/common/model.js';
import '../common/inlineChat.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/model/textModel.js';
import '../../../../editor/common/core/editOperation.js';
import '../../../../editor/common/diff/rangeMapping.js';
import './inlineChatSessionService.js';
import '../../../../editor/common/services/editorWorker.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/iterator.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/extensions/common/extensions.js';
define(
			de[1244],
			he([
				1, 0, 6, 64, 257, 17, 122, 188, 342, 798, 200, 24, 103, 3, 8, 34, 109,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*model*/,
 w /*inlineChat*/,
 E /*range*/,
 C /*textModel*/,
 d /*editOperation*/,
 m /*rangeMapping*/,
 r /*inlineChatSessionService*/,
 u /*editorWorker*/,
 a /*arrays*/,
 h /*iterator*/,
 c /*lifecycle*/,
 n /*contextkey*/,
 g /*log*/,
 p /*extensions*/) {
				"use strict";
				var o;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.HunkState = e.$DLb = e.$CLb = e.$BLb = e.$ALb = void 0);
				class f {
					static {
						this.c = C.$eY.register({
							description: "inlineChat/session/wholeRange",
						});
					}
					constructor(I, T) {
						(this.g = I),
							(this.d = new t.$re()),
							(this.onDidChange = this.d.event),
							(this.f = []),
							(this.f = I.deltaDecorations([], [{ range: T, options: f.c }]));
					}
					dispose() {
						this.d.dispose(),
							this.g.isDisposed() || this.g.deltaDecorations(this.f, []);
					}
					fixup(I) {
						const T = [];
						for (const { modified: D } of I) {
							const M = D.isEmpty
								? new E.$iL(
										D.startLineNumber,
										1,
										D.startLineNumber,
										this.g.getLineLength(D.startLineNumber),
									)
								: new E.$iL(
										D.startLineNumber,
										1,
										D.endLineNumberExclusive - 1,
										this.g.getLineLength(D.endLineNumberExclusive - 1),
									);
							T.push({ range: M, options: f.c });
						}
						const [P, ...k] = this.f,
							L = this.g.deltaDecorations(k, T);
						(this.f = [P].concat(L)), this.d.fire(this);
					}
					get trackedInitialRange() {
						const [I] = this.f;
						return this.g.getDecorationRange(I) ?? new E.$iL(1, 1, 1, 1);
					}
					get value() {
						let I;
						for (const T of this.f) {
							const P = this.g.getDecorationRange(T);
							P && (I ? (I = E.$iL.plusRange(I, P)) : (I = P));
						}
						return I;
					}
				}
				e.$ALb = f;
				class b {
					constructor(I, T, P, k, L, D, M, N, A, R) {
						(this.editMode = I),
							(this.headless = T),
							(this.targetUri = P),
							(this.textModel0 = k),
							(this.textModelN = L),
							(this.agent = D),
							(this.wholeRange = M),
							(this.hunkData = N),
							(this.chatModel = A),
							(this.c = !1),
							(this.d = new Date()),
							(this.g = new Map()),
							(this.f = {
								extension: p.$Gn.toKey(D.extensionId),
								startTime: this.d.toISOString(),
								endTime: this.d.toISOString(),
								edits: 0,
								finishedByEdit: !1,
								rounds: "",
								undos: "",
								editMode: I,
								unstashed: 0,
								acceptedHunks: 0,
								discardedHunks: 0,
								responseTypes: "",
							}),
							R && (this.g = new Map(R));
					}
					get isUnstashed() {
						return this.c;
					}
					markUnstashed() {
						(this.f.unstashed += 1), (this.c = !0);
					}
					markModelVersion(I) {
						this.g.set(I.id, this.textModelN.getAlternativeVersionId());
					}
					get versionsByRequest() {
						return Array.from(this.g);
					}
					async undoChangesUntil(I) {
						const T = this.g.get(I);
						if (T === void 0) return !1;
						this.hunkData.ignoreTextModelNChanges = !0;
						try {
							for (
								;
								T < this.textModelN.getAlternativeVersionId() &&
								this.textModelN.canUndo();
							)
								await this.textModelN.undo();
						} finally {
							this.hunkData.ignoreTextModelNChanges = !1;
						}
						return !0;
					}
					get hasChangedText() {
						return !this.textModel0.equalsTextBuffer(
							this.textModelN.getTextBuffer(),
						);
					}
					asChangedText(I) {
						if (I.length === 0) return;
						let T = Number.MAX_VALUE,
							P = Number.MIN_VALUE;
						for (const k of I)
							(T = Math.min(T, k.modified.startLineNumber)),
								(P = Math.max(P, k.modified.endLineNumberExclusive));
						return this.textModelN.getValueInRange(
							new E.$iL(T, 1, P, Number.MAX_VALUE),
						);
					}
					recordExternalEditOccurred(I) {
						(this.f.edits += 1), (this.f.finishedByEdit = I);
					}
					asTelemetryData() {
						for (const I of this.hunkData.getInfo())
							switch (I.getState()) {
								case v.Accepted:
									this.f.acceptedHunks += 1;
									break;
								case v.Rejected:
									this.f.discardedHunks += 1;
									break;
							}
						return (this.f.endTime = new Date().toISOString()), this.f;
					}
				}
				e.$BLb = b;
				let s = class {
					constructor(I, T, P, k, L, D) {
						(this.g = P),
							(this.h = L),
							(this.j = D),
							(this.d = w.$7Kb.bindTo(k)),
							(this.f = T),
							this.d.set(!0),
							(this.c = t.Event.once(
								t.Event.any(
									I.onDidChangeCursorSelection,
									I.onDidChangeModelContent,
									I.onDidChangeModel,
									I.onDidBlurEditorWidget,
								),
							)(() => {
								(this.f = void 0), this.h.releaseSession(T), this.d.reset();
							}));
					}
					dispose() {
						this.c.dispose(),
							this.d.reset(),
							this.f && this.h.releaseSession(this.f);
					}
					unstash() {
						if (!this.f) return;
						this.c.dispose();
						const I = this.f;
						return (
							I.markUnstashed(),
							(I.hunkData.ignoreTextModelNChanges = !0),
							I.textModelN.pushEditOperations(null, this.g, () => null),
							(I.hunkData.ignoreTextModelNChanges = !1),
							(this.f = void 0),
							this.j.debug("[IE] Unstashed session"),
							I
						);
					}
				};
				(e.$CLb = s),
					(e.$CLb = s = Ne([j(3, n.$6j), j(4, r.$zLb), j(5, g.$ik)], s));
				function l(S, I) {
					return S.isEmpty
						? new E.$iL(
								S.startLineNumber,
								1,
								S.startLineNumber,
								I.getLineLength(S.startLineNumber),
							)
						: new E.$iL(
								S.startLineNumber,
								1,
								S.endLineNumberExclusive - 1,
								I.getLineLength(S.endLineNumberExclusive - 1),
							);
				}
				let y = class {
					static {
						o = this;
					}
					static {
						this.c = C.$eY.register({
							description: "inline-chat-hunk-tracked-range",
							stickiness: i.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
						});
					}
					static {
						this.d = 8;
					}
					constructor(I, T, P) {
						(this.j = I),
							(this.k = T),
							(this.l = P),
							(this.f = new c.$Zc()),
							(this.g = new Map()),
							(this.h = !1),
							this.f.add(
								P.onDidChangeContent((k) => {
									this.h || this.m(k);
								}),
							);
					}
					dispose() {
						this.l.isDisposed() ||
							this.l.changeDecorations((I) => {
								for (const { textModelNDecorations: T } of this.g.values())
									T.forEach(I.removeDecoration, I);
							}),
							this.k.isDisposed() ||
								this.k.changeDecorations((I) => {
									for (const { textModel0Decorations: T } of this.g.values())
										T.forEach(I.removeDecoration, I);
								}),
							this.g.clear(),
							this.f.dispose();
					}
					set ignoreTextModelNChanges(I) {
						this.h = I;
					}
					get ignoreTextModelNChanges() {
						return this.h;
					}
					m(I) {
						const T = [],
							P = [];
						for (const L of this.g.values())
							if (L.state === v.Pending)
								for (let D = 1; D < L.textModelNDecorations.length; D++) {
									const M = this.l.getDecorationRange(
											L.textModelNDecorations[D],
										),
										N = this.k.getDecorationRange(L.textModel0Decorations[D]);
									M &&
										N &&
										T.push({
											rangeN: M,
											range0: N,
											markAccepted: () => (L.state = v.Accepted),
										});
								}
							else if (L.state === v.Accepted)
								for (let D = 1; D < L.textModel0Decorations.length; D++) {
									const M = this.k.getDecorationRange(
										L.textModel0Decorations[D],
									);
									M && P.push(M);
								}
						T.sort((L, D) =>
							E.$iL.compareRangesUsingStarts(L.rangeN, D.rangeN),
						),
							P.sort(E.$iL.compareRangesUsingStarts);
						const k = [];
						for (const L of I.changes) {
							let D = !1,
								M = 0;
							for (const U of T)
								if (
									U.rangeN
										.getEndPosition()
										.isBefore(E.$iL.getStartPosition(L.range))
								)
									(M += this.l.getValueLengthInRange(U.rangeN)),
										(M -= this.k.getValueLengthInRange(U.range0));
								else if (E.$iL.areIntersectingOrTouching(U.rangeN, L.range)) {
									U.markAccepted(), (D = !0);
									break;
								} else break;
							if (D) continue;
							const N = L.rangeOffset - M,
								A = this.k.getPositionAt(N);
							let R = 0;
							for (const U of P)
								U.getEndPosition().isBefore(A) &&
									(R += this.k.getValueLengthInRange(U));
							const O = this.k.getPositionAt(N + R),
								B = this.k.getPositionAt(N + R + L.rangeLength);
							k.push(d.$jL.replace(E.$iL.fromPositions(O, B), L.text));
						}
						this.k.pushEditOperations(null, k, () => null);
					}
					async recompute(I, T) {
						T ??= await this.j.computeDiff(
							this.k.uri,
							this.l.uri,
							{
								ignoreTrimWhitespace: !1,
								maxComputationTimeMs: Number.MAX_SAFE_INTEGER,
								computeMoves: !1,
							},
							"advanced",
						);
						let P = [];
						if (T && T.changes.length > 0) {
							P = [T.changes[0]];
							for (let L = 1; L < T.changes.length; L++) {
								const D = P[P.length - 1],
									M = T.changes[L];
								M.modified.startLineNumber -
									D.modified.endLineNumberExclusive <=
								o.d
									? (P[P.length - 1] = new m.$CL(
											D.original.join(M.original),
											D.modified.join(M.modified),
											(D.innerChanges ?? []).concat(M.innerChanges ?? []),
										))
									: P.push(M);
							}
						}
						const k = P.map(
							(L) => new $(L.original, L.modified, L.innerChanges ?? []),
						);
						(I.applied = k.length),
							this.l.changeDecorations((L) => {
								this.k.changeDecorations((D) => {
									for (const {
										textModelNDecorations: M,
										textModel0Decorations: N,
									} of this.g.values())
										M.forEach(L.removeDecoration, L),
											N.forEach(D.removeDecoration, D);
									this.g.clear();
									for (const M of k) {
										const N = [],
											A = [];
										N.push(L.addDecoration(l(M.modified, this.l), o.c)),
											A.push(D.addDecoration(l(M.original, this.k), o.c));
										for (const R of M.changes)
											N.push(L.addDecoration(R.modifiedRange, o.c)),
												A.push(D.addDecoration(R.originalRange, o.c));
										this.g.set(M, {
											editState: I,
											textModelNDecorations: N,
											textModel0Decorations: A,
											state: v.Pending,
										});
									}
								});
							});
					}
					get size() {
						return this.g.size;
					}
					get pending() {
						return h.Iterable.reduce(
							this.g.values(),
							(I, { state: T }) => I + (T === v.Pending ? 1 : 0),
							0,
						);
					}
					n(I) {
						const T = [],
							P = I.getRangesN(),
							k = I.getRanges0();
						for (let L = 1; L < P.length; L++) {
							const D = P[L],
								M = this.k.getValueInRange(k[L]);
							T.push(d.$jL.replace(D, M));
						}
						return T;
					}
					discardAll() {
						const I = [];
						for (const P of this.getInfo())
							P.getState() === v.Pending && I.push(this.n(P));
						const T = [];
						return (
							this.l.pushEditOperations(
								null,
								I.flat(),
								(P) => (T.push(P), null),
							),
							T.flat()
						);
					}
					getInfo() {
						const I = [];
						for (const [T, P] of this.g.entries()) {
							const k = {
								getState: () => P.state,
								isInsertion: () => T.original.isEmpty,
								getRangesN: () => {
									const L = P.textModelNDecorations.map((D) =>
										this.l.getDecorationRange(D),
									);
									return (0, a.$Mb)(L), L;
								},
								getRanges0: () => {
									const L = P.textModel0Decorations.map((D) =>
										this.k.getDecorationRange(D),
									);
									return (0, a.$Mb)(L), L;
								},
								discardChanges: () => {
									if (P.state === v.Pending) {
										const L = this.n(k);
										this.l.pushEditOperations(null, L, () => null),
											(P.state = v.Rejected),
											P.editState.applied > 0 && (P.editState.applied -= 1);
									}
								},
								acceptChanges: () => {
									if (P.state === v.Pending) {
										const L = [],
											D = k.getRangesN(),
											M = k.getRanges0();
										for (let N = 1; N < M.length; N++) {
											const A = M[N],
												R = this.l.getValueInRange(D[N]);
											L.push(d.$jL.replace(A, R));
										}
										this.k.pushEditOperations(null, L, () => null),
											(P.state = v.Accepted);
									}
								},
							};
							I.push(k);
						}
						return I;
					}
				};
				(e.$DLb = y), (e.$DLb = y = o = Ne([j(0, u.$Cxb)], y));
				class $ {
					constructor(I, T, P) {
						(this.original = I), (this.modified = T), (this.changes = P);
					}
				}
				var v;
				(function (S) {
					(S[(S.Pending = 0)] = "Pending"),
						(S[(S.Accepted = 1)] = "Accepted"),
						(S[(S.Rejected = 2)] = "Rejected");
				})(v || (e.HunkState = v = {}));
			},
		),
		
import '../../../../require.js';
import '../../../../exports.js';
import '../../common/core/range.js';
import '../../../base/common/lifecycle.js';
import '../../common/core/lineRange.js';
import '../../../base/common/uuid.js';
import '../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../common/diff/linesDiffComputers.js';
import '../../common/model.js';
import './inlineDiffUndoRedoElement.js';
import '../../../workbench/services/aiContext/browser/aiContext.js';
import './inlineDiffServiceUtils.js';
import '../../../base/common/event.js';
define(
			de[3235],
			he([1, 0, 17, 3, 196, 47, 45, 587, 64, 779, 471, 1190, 6]),
			function (ce /*require*/,
 e /*exports*/,
 t /*range*/,
 i /*lifecycle*/,
 w /*lineRange*/,
 E /*uuid*/,
 C /*reactiveStorageService*/,
 d /*linesDiffComputers*/,
 m /*model*/,
 r /*inlineDiffUndoRedoElement*/,
 u /*aiContext*/,
 a /*inlineDiffServiceUtils*/,
 h /*event*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$17b = void 0);
				class c extends i.$1c {
					get id() {
						return this.inlineDiff.id;
					}
					getGenerationStatus(g) {
						return this.generations.get(g)?.status;
					}
					constructor(g, p, o, f, b, s, l, y) {
						if (
							(super(),
							(this.m = p),
							(this.n = o),
							(this.q = f),
							(this.r = b),
							(this.s = s),
							(this.a = !1),
							(this.isMultiple = !0),
							(this.c = d.$qxb.getDefault()),
							(this.f = d.$qxb.getLegacy()),
							(this.g = []),
							(this.h = !1),
							(this.active = !1),
							(this.generations = new Map()),
							(this.j = new h.$re()),
							(this.onGenerationStatusChanged = this.j.event),
							(this.t = []),
							(this.b = g),
							(this.promptBarId = y),
							l.orderedGenerationUUIDs.length === 0)
						)
							throw new Error(
								"BIG ERROR WE SHOULD NOT ADD A MULTI-GENERATION DIFF WITH NO GENERATIONS!",
							);
						if (
							((this.inlineDiff = {
								id: (0, E.$9g)(),
								changes: [],
								activeLine: void 0,
								pendingRange: {
									startLineNumber: 1,
									endLineNumberExclusive:
										l.currentRange.endLineNumberExclusive -
										l.currentRange.startLineNumber +
										1,
								},
								isHidden: !1,
								onAccept: void 0,
								onReject: void 0,
								canUndoUpdates: !0,
								showNativeAcceptReject: !1,
								newTextLiness: Object.fromEntries(
									l.orderedGenerationUUIDs.map(($) => [$, []]),
								),
								generationUUID: l.orderedGenerationUUIDs[0],
								...l,
							}),
							(this.generations = new Map(
								l.orderedGenerationUUIDs.map(($) => [
									$,
									{ status: "generating" },
								]),
							)),
							l.attachedToPromptBar)
						) {
							const $ = l.lastPromptBarCurrentRange ?? {
									startLineNumber: l.currentRange.startLineNumber,
									endLineNumberExclusive: l.currentRange.endLineNumberExclusive,
								},
								v = this.b.object.textEditorModel.deltaDecorations(
									[],
									[
										{
											range: {
												startLineNumber: $.startLineNumber,
												endLineNumber: $.endLineNumberExclusive - 1,
												startColumn: 1,
												endColumn:
													this.b.object.textEditorModel.getLineMaxColumn(
														$.endLineNumberExclusive - 1,
													),
											},
											options: {
												description: "promptBar-tracking-range",
												isWholeLine: !0,
											},
										},
									],
								)[0];
							if (
								this.m.nonPersistentStorage.promptBars.some((S) => S.id === y)
							) {
								const S = this.m.nonPersistentStorage.promptBars.find(
									(I) => I.id === y,
								);
								S &&
									this.m.setNonPersistentStorage(
										"promptBars",
										(I) => I.id === y,
										{
											...S,
											diffId: this.inlineDiff.id,
											currentRangeDecorationId: v,
										},
									);
							} else {
								const S = {
									id: (0, E.$9g)(),
									uri: l.uri,
									data: (0, a.$W7b)(l.prompt),
									diffId: l.id,
									height: 0,
									contextSessionUuid: this.s.createContextSession((0, u.$D7b)())
										.uuid,
									queryHistory: void 0,
									chatResponse: void 0,
									currentRangeDecorationId: v,
									inlineChatHistory: void 0,
									previousStructuredTextsNewestFirst: [],
									modifyTextModelPrePromptBarBackwardEdit: [],
									modifyTextModelPrePromptBarForwardEdit: [],
									generating: !1,
									forceRerenderInputBox: 0,
									prePromptBarCursorPosition: void 0,
									createdAt: Date.now(),
								};
							}
						}
						this.D(
							g.object.textEditorModel.onDidChangeContent(($) => {
								for (const v of $.changes)
									switch ((0, a.$X7b)(this.inlineDiff.currentRange, v.range)) {
										case a.RangeWhereIs.After: {
											if (this.inlineDiff.changes.length > 0) {
												const I =
													this.inlineDiff.changes[
														this.inlineDiff.changes.length - 1
													];
												if (
													this.inlineDiff.currentRange.startLineNumber +
														I.addedRange.endLineNumberExclusive -
														1 ===
														v.range.startLineNumber &&
													(I.removedTextLines.join($.eol) === v.text ||
														I.removedTextLines.join($.eol) + $.eol ===
															v.text) &&
													v.range.startColumn === 1 &&
													v.range.startLineNumber ===
														this.inlineDiff.currentRange.endLineNumberExclusive
												) {
													for (const T of I.removedTextLines)
														this.w(this.inlineDiff).push(T);
													(this.inlineDiff.currentRange = new w.$rL(
														this.inlineDiff.currentRange.startLineNumber,
														this.inlineDiff.currentRange
															.endLineNumberExclusive +
															I.removedTextLines.length,
													)),
														this.inlineDiff.changes.pop(),
														this.m.setNonPersistentStorage(
															"inlineDiffs",
															(T) => [
																...T.filter((P) => P.id !== this.inlineDiff.id),
																(0, C.$$zb)(this.inlineDiff),
															],
														),
														this.y();
													return;
												}
											}
											break;
										}
										case a.RangeWhereIs.Before: {
											const I =
												v.text.split(`
`).length -
												(v.range.endLineNumber - v.range.startLineNumber + 1);
											(this.inlineDiff.currentRange = new w.$rL(
												this.inlineDiff.currentRange.startLineNumber + I,
												this.inlineDiff.currentRange.endLineNumberExclusive + I,
											)),
												this.m.setNonPersistentStorage("inlineDiffs", (T) => [
													...T.filter((P) => P.id !== this.inlineDiff.id),
													(0, C.$$zb)(this.inlineDiff),
												]),
												this.y();
											break;
										}
										case a.RangeWhereIs.Overlap: {
											if (this.active) continue;
											if (this.inlineDiff.isHidden) {
												this.q.rejectDiff(this.inlineDiff.id);
												continue;
											}
											this.processOverlapEdit(v, $.eol);
											break;
										}
									}
							}),
						),
							this.m.setNonPersistentStorage("inlineDiffs", ($) => [
								...$,
								(0, C.$$zb)(this.inlineDiff),
							]),
							this.y();
					}
					addGeneration(g, p, o) {
						if (
							(console.log("ADDING GENERATION", g),
							!this.inlineDiff.orderedGenerationUUIDs.includes(g))
						) {
							console.error(
								"WARN WARN WE ADDED A GENERATION BUT IT WASN'T IN orderedGenerationUUIDs! You gotta preload your orderedGenerationUUIDs with generation UUIDs",
							);
							return;
						}
						const f = this.generations.get(g);
						if (!f) {
							console.error(
								"WARN WARN WE SHOULD NOT ADD A GENERATION UUID THAT WE'VE ALREADY ADDED!",
							);
							return;
						}
						if (f.callbacks !== void 0) {
							console.error(
								"WARN WARN WE SHOULD NOT ADD A GENERATION UUID THAT WE'VE ALREADY ADDED!",
							);
							return;
						}
						if (!(g in this.inlineDiff.newTextLiness)) {
							console.error(
								"WARN WARN WE ADDED A GENERATION BUT IT WASN'T IN newTextLiness! Was it in orderedGenerationUUIDs???",
							);
							return;
						}
						console.log("Adding generation UUID to activeGenerations", g),
							(f.callbacks = { abortController: p, doneCallback: o });
					}
					toggleSelectedGeneration(g) {
						const p = this.inlineDiff.orderedGenerationUUIDs,
							o = p.indexOf(this.inlineDiff.generationUUID);
						let f;
						if (g === void 0) f = (o + 1) % p.length;
						else {
							if (g > p.length) return;
							f = g - 1;
						}
						const b = p[f];
						if (!b) throw new Error("generationUUID is undefined");
						this.setGenerationUUID(b);
					}
					setGenerationUUID(g) {
						const p = { ...this.inlineDiff, generationUUID: g };
						this.m.setNonPersistentStorage("inlineDiffs", (f) => [
							...f.filter((b) => b.id !== this.inlineDiff.id),
							p,
						]),
							this.setAndHandleDiffGenerationUUID(p);
						const o = this.generations.get(this.inlineDiff.generationUUID);
						if (!o) {
							console.error(
								"Bad error - we should not set generationUUIDs if they don't exist in the diff handler",
							);
							return;
						}
						o.status !== "generating" &&
							(console.log("the generation you just switched to is aborted"),
							this.maybeCallGlobalDoneCallback());
					}
					processOverlapEdit(g, p) {
						const o = this.t.find(
							(L) =>
								L.range.startLineNumber === g.range.startLineNumber &&
								L.range.startColumn === g.range.startColumn &&
								L.range.endLineNumber === g.range.endLineNumber &&
								L.range.endColumn === g.range.endColumn &&
								(L.text ?? "") === g.text,
						);
						if (o) {
							this.t = this.t.filter((L) => L !== o);
							return;
						}
						let f = g.text,
							b = g.range.startColumn,
							s = g.range.endColumn,
							l = this.inlineDiff.currentRange.startLineNumber,
							y =
								g.range.startLineNumber -
								this.inlineDiff.currentRange.startLineNumber +
								1;
						y < 1 &&
							((y = 1),
							(b = 1),
							f.includes(p)
								? ((f = f.split(p).slice(1).join(p)),
									(l = g.range.startLineNumber + 1))
								: (console.warn(
										"We technically have a bug here if the line is not at the start... To fix it we'd need some magic tho like remembering the entire state of the document... so we'll ignore it for now",
									),
									(l = g.range.startLineNumber)));
						let $ =
								g.range.endLineNumber -
								this.inlineDiff.currentRange.startLineNumber +
								1,
							v = !1;
						$ > this.w(this.inlineDiff).length &&
							(($ = this.w(this.inlineDiff).length),
							(s = this.w(this.inlineDiff)[$ - 1].length + 1),
							f.includes(p)
								? (f = f.split(p).slice(0, -1).join(p))
								: (console.warn(
										"We technically have a bug here if the line is not at the start... To fix it we'd need some magic tho like remembering the entire state of the document... so we'll ignore it for now",
									),
									(v = !0)));
						const I = (
								this.w(this.inlineDiff)[y - 1].slice(0, b - 1) +
								f +
								this.w(this.inlineDiff)[$ - 1].slice(s - 1)
							).split(p),
							T = [
								...this.w(this.inlineDiff).slice(0, y - 1),
								...I,
								...this.w(this.inlineDiff).slice($),
							];
						v && T.length > 0 && T[T.length - 1] === "" && T.pop();
						const P = new w.$rL(l, l + T.length);
						(this.inlineDiff.currentRange = P),
							(this.inlineDiff.newTextLiness[this.inlineDiff.generationUUID] =
								T);
						const k = (0, a.$Y7b)(
							this.inlineDiff.originalTextLines,
							this.w(this.inlineDiff),
							!0,
							this.inlineDiff.isHidden,
						);
						(this.inlineDiff.changes = k.changes),
							this.m.setNonPersistentStorage("inlineDiffs", (L) => [
								...L.filter((D) => D.id !== this.inlineDiff.id),
								(0, C.$$zb)(this.inlineDiff),
							]),
							this.y();
					}
					finishFailure(g = this.inlineDiff.generationUUID) {
						this.setGenerationStatus(g, "failed");
						const p = g !== this.inlineDiff.generationUUID;
						if (!this.generationIsActive(g)) {
							this.C(g);
							return;
						}
						let o = !0;
						for (let s = 0; s < this.w(this.inlineDiff, g).length; s++)
							if (
								this.w(this.inlineDiff, g)[s] !==
								this.inlineDiff.originalTextLines[s]
							) {
								o = !1;
								break;
							}
						if (o) {
							g === this.inlineDiff.generationUUID &&
								(this.q.remove(this.inlineDiff.id), this.F()),
								g !== this.inlineDiff.generationUUID &&
									(console.warn(
										"Generation",
										g,
										"finished with failure and is not selected, removing it",
									),
									this.abortGeneration(g));
							return;
						}
						if (g !== this.inlineDiff.generationUUID) {
							this.abortGeneration(g);
							return;
						}
						const f = (0, C.$$zb)(this.inlineDiff),
							b = (0, a.$Y7b)(
								this.inlineDiff.originalTextLines,
								this.w(this.inlineDiff),
								!1,
								this.inlineDiff.isHidden,
							);
						if (
							!(this.inlineDiff.generationUUID in this.inlineDiff.newTextLiness)
						)
							throw new Error(
								"this should not happen, generationUUID is not in newTextLiness",
							);
						(this.inlineDiff.newTextLiness[this.inlineDiff.generationUUID] =
							b.newFullRangeTextLines),
							this.z(this.inlineDiff.generationUUID, b, f),
							this.y(),
							this.C(g),
							this.maybeCallGlobalDoneCallback();
					}
					finishSuccess(g = this.inlineDiff.generationUUID) {
						if (
							(this.setGenerationStatus(g, "succeeded"),
							g !== this.inlineDiff.generationUUID)
						) {
							this.C(g);
							return;
						}
						const o = (0, C.$$zb)(this.inlineDiff),
							f = (0, a.$Y7b)(
								this.inlineDiff.originalTextLines,
								this.w(this.inlineDiff),
								!0,
								this.inlineDiff.isHidden,
							);
						this.z(g, f, o),
							this.abortGeneration(g),
							this.y(),
							this.C(g),
							this.maybeCallGlobalDoneCallback();
					}
					reject() {
						const g = [];
						for (const y of this.inlineDiff.changes) {
							let $ = y.removedTextLines.join(
									this.b.object.textEditorModel.getEOL(),
								),
								v;
							y.addedRange.startLineNumber ===
							y.addedRange.endLineNumberExclusive
								? ((v = new t.$iL(
										this.inlineDiff.currentRange.startLineNumber +
											y.addedRange.startLineNumber -
											1,
										0,
										this.inlineDiff.currentRange.startLineNumber +
											y.addedRange.startLineNumber -
											1,
										0,
									)),
									($ += this.b.object.textEditorModel.getEOL()))
								: y.removedTextLines.length === 0
									? ((v = new t.$iL(
											this.inlineDiff.currentRange.startLineNumber +
												y.addedRange.startLineNumber -
												1,
											0,
											this.inlineDiff.currentRange.startLineNumber +
												y.addedRange.endLineNumberExclusive -
												1,
											0,
										)),
										($ = null))
									: (v = new t.$iL(
											this.inlineDiff.currentRange.startLineNumber +
												y.addedRange.startLineNumber -
												1,
											0,
											this.inlineDiff.currentRange.startLineNumber +
												y.addedRange.endLineNumberExclusive -
												1 -
												1,
											this.b.object.textEditorModel.getLineMaxColumn(
												this.inlineDiff.currentRange.startLineNumber +
													y.addedRange.endLineNumberExclusive -
													1 -
													1,
											),
										));
							const S = {
								range: v,
								text: $,
								forceMoveMarkers: !this.inlineDiff.isHidden,
							};
							g.push(S);
						}
						this.q.recordRejectEvent({
							model: this.b.object.textEditorModel,
							requestId: this.inlineDiff.generationUUID,
							promptBarId: this.promptBarId,
						});
						const p = this.inlineDiff.uri,
							o = (0, C.$$zb)(this.inlineDiff),
							f = this.inlineDiff.id,
							b = this.q,
							s = [];
						try {
							s.push(...this.b.object.textEditorModel.applyEdits(g, !0));
						} catch (y) {
							console.warn(
								"Weird undo edit bug that I don't like... But if it for the cursor state only then it is probably fine?",
								y,
							);
						}
						this.removeDecorations(),
							this.m.setNonPersistentStorage("inlineDiffs", (y) =>
								y.filter(($) => $.id !== this.inlineDiff.id),
							);
						const l = (0, C.$$zb)(this.inlineDiff);
						if (!this.inlineDiff.isHidden) {
							const y = this.m.nonPersistentStorage.promptBars.find(
								(v) => v.diffId === this.inlineDiff.id,
							);
							y &&
								(l.lastPromptBarCurrentRange = this.n.getPromptBarCurrentRange(
									y,
									this.b.object.textEditorModel,
								));
							const $ = new r.$y7b(
								"Undo Reject Suggestion",
								"undo-reject-suggestion",
								this.inlineDiff.id,
								this.inlineDiff.uri,
								async () => {
									await b.applyEditsNoUpdateDiffs(p, s), b.setDiff(f, o);
								},
								async () => {
									await b.applyEditsNoUpdateDiffs(p, g), b.setDiff(f, l);
								},
							);
							this.q.pushUndoElement($, {});
						}
					}
					cancel(g) {
						this.q.recordCancelEvent({
							model: this.b.object.textEditorModel,
							requestId: g ?? this.inlineDiff.generationUUID,
							promptBarId: this.promptBarId,
						}),
							this.m.setNonPersistentStorage("inprogressAIGenerations", (p) =>
								p.filter(
									(o) =>
										o.generationUUID !== (g ?? this.inlineDiff.generationUUID),
								),
							);
					}
					remove() {
						this.removeDecorations(),
							this.m.setNonPersistentStorage("inlineDiffs", (g) =>
								g.filter((p) => p.id !== this.inlineDiff.id),
							);
					}
					add() {
						this.y(),
							this.m.setNonPersistentStorage("inlineDiffs", (g) => [
								...g,
								(0, C.$$zb)(this.inlineDiff),
							]);
					}
					getGreenRange(g) {
						return g.removedTextLines.length === 0
							? new t.$iL(
									this.inlineDiff.currentRange.startLineNumber +
										g.addedRange.startLineNumber -
										1,
									1,
									this.inlineDiff.currentRange.startLineNumber +
										g.addedRange.endLineNumberExclusive -
										1,
									1,
								)
							: g.addedRange.endLineNumberExclusive ===
									g.addedRange.startLineNumber
								? new t.$iL(
										this.inlineDiff.currentRange.startLineNumber +
											g.addedRange.startLineNumber -
											1,
										1,
										this.inlineDiff.currentRange.startLineNumber +
											g.addedRange.startLineNumber -
											1,
										1,
									)
								: new t.$iL(
										this.inlineDiff.currentRange.startLineNumber +
											g.addedRange.startLineNumber -
											1,
										1,
										this.inlineDiff.currentRange.startLineNumber +
											g.addedRange.endLineNumberExclusive -
											1 -
											1,
										this.b.object.textEditorModel.getLineMaxColumn(
											this.inlineDiff.currentRange.startLineNumber +
												g.addedRange.endLineNumberExclusive -
												1 -
												1,
										),
									);
					}
					rejectPartialDiff(g) {
						const p = this.u(g),
							o = this.inlineDiff.changes.length === 1,
							f = this.getGreenRange(p),
							b =
								p.addedRange.endLineNumberExclusive ===
								p.addedRange.startLineNumber
									? this.b.object.textEditorModel.getEOL()
									: "",
							s =
								p.removedTextLines.join(
									this.b.object.textEditorModel.getEOL(),
								) + b,
							l = { range: f, text: s, forceMoveMarkers: !0 };
						this.q.recordPartialRejectEvent({
							model: this.b.object.textEditorModel,
							requestId: this.inlineDiff.generationUUID,
							redLines: s.split(`
`),
							greenLines: this.b.object.textEditorModel
								.getValueInRange(f)
								.split(`
`),
							greenRange: f,
							promptBarId: this.promptBarId,
						});
						const y = this.q,
							$ = this.inlineDiff.id,
							v = (0, C.$$zb)(this.inlineDiff),
							S = this.inlineDiff.uri,
							I = [];
						try {
							I.push(...this.b.object.textEditorModel.applyEdits([l], !0));
						} catch (P) {
							console.warn(
								"Weird undo edit bug that I don't like... But if it for the cursor state only then it is probably fine?",
								P,
							);
						}
						const T = (0, C.$$zb)(this.inlineDiff);
						if (!this.inlineDiff.isHidden) {
							const P = new r.$y7b(
								"Undo Accept Suggestion",
								"undo-accept-suggestion",
								this.inlineDiff.id,
								this.inlineDiff.uri,
								async () => {
									await y.applyEditsNoUpdateDiffs(S, I), y.setDiff($, v);
								},
								async () => {
									await y.applyEditsNoUpdateDiffs(S, [l]), y.setDiff($, T);
								},
							);
							this.q.pushUndoElement(P, {});
						}
						if (o) {
							if (!this.inlineDiff.isHidden) {
								const P = this.m.nonPersistentStorage.promptBars.find(
									(k) => k.diffId === this.inlineDiff.id,
								);
								P &&
									(T.lastPromptBarCurrentRange =
										this.n.getPromptBarCurrentRange(
											P,
											this.b.object.textEditorModel,
										));
							}
							return this.remove(), !0;
						}
						return !1;
					}
					u(g) {
						const p =
							g.lineNumber - this.inlineDiff.currentRange.startLineNumber + 1;
						let o = this.inlineDiff.changes[0];
						for (const f of this.inlineDiff.changes.slice(1)) {
							const b = Math.min(
									Math.abs(f.addedRange.endLineNumberExclusive - 1 - p),
									Math.abs(f.addedRange.startLineNumber - p),
								),
								s = Math.min(
									Math.abs(o.addedRange.endLineNumberExclusive - 1 - p),
									Math.abs(o.addedRange.startLineNumber - p),
								);
							b < s && (o = f);
						}
						return o;
					}
					w(g, p) {
						if (((p = p ?? g.generationUUID), !(p in g.newTextLiness)))
							throw new Error(
								"this should not happen, generationUUID is not in newTextLines",
							);
						return g.newTextLiness[p];
					}
					acceptPartialDiff(g) {
						const p = this.u(g),
							o = [
								...this.inlineDiff.originalTextLines.slice(
									0,
									p.removedLinesOriginalRange.startLineNumber - 1,
								),
								...this.w(this.inlineDiff).slice(
									p.addedRange.startLineNumber - 1,
									p.addedRange.endLineNumberExclusive - 1,
								),
								...this.inlineDiff.originalTextLines.slice(
									p.removedLinesOriginalRange.endLineNumberExclusive - 1,
								),
							],
							f = new w.$rL(
								this.inlineDiff.currentRange.startLineNumber,
								this.inlineDiff.currentRange.endLineNumberExclusive +
									(p.removedLinesOriginalRange.endLineNumberExclusive -
										p.removedLinesOriginalRange.startLineNumber -
										(p.addedRange.endLineNumberExclusive -
											p.addedRange.startLineNumber)),
							),
							b = (0, C.$$zb)(this.inlineDiff),
							s = this.inlineDiff.id,
							l = this.q,
							y = this.getGreenRange(p),
							$ =
								p.addedRange.endLineNumberExclusive ===
								p.addedRange.startLineNumber
									? this.b.object.textEditorModel.getEOL()
									: "",
							v = (
								p.removedTextLines.join(
									this.b.object.textEditorModel.getEOL(),
								) + $
							).split(`
`);
						this.q.recordPartialAcceptEvent({
							model: this.b.object.textEditorModel,
							requestId: this.inlineDiff.generationUUID,
							redLines: v,
							greenLines: this.b.object.textEditorModel
								.getValueInRange(y)
								.split(`
`),
							greenRange: y,
							promptBarId: this.promptBarId,
						}),
							(this.inlineDiff.currentRange = f),
							(this.inlineDiff.originalTextLines = o);
						const S = (0, a.$Y7b)(
							this.inlineDiff.originalTextLines,
							this.w(this.inlineDiff),
							!0,
							this.inlineDiff.isHidden,
						);
						(this.inlineDiff.changes = S.changes),
							this.m.setNonPersistentStorage("inlineDiffs", (T) => [
								...T.filter((P) => P.id !== this.inlineDiff.id),
								(0, C.$$zb)(this.inlineDiff),
							]),
							this.y();
						const I = (0, C.$$zb)(this.inlineDiff);
						if (!this.inlineDiff.isHidden) {
							const T = new r.$y7b(
								"Undo Accept Suggestion",
								"undo-accept-suggestion",
								this.inlineDiff.id,
								this.inlineDiff.uri,
								async () => {
									l.setDiff(s, b);
								},
								() => {
									l.setDiff(s, I);
								},
							);
							this.q.pushUndoElement(T, {});
						}
						return this.inlineDiff.changes.length === 0
							? (this.remove(), !0)
							: !1;
					}
					accept() {
						this.q.recordAcceptEvent({
							model: this.b.object.textEditorModel,
							requestId: this.inlineDiff.generationUUID,
							promptBarId: this.promptBarId,
						}),
							this.remove(),
							this.dispose();
					}
					removeDecorations() {
						const g = this.b.object.textEditorModel,
							p = this.g;
						(this.g = []), g.deltaDecorations(p, []);
					}
					generationIsActive(g) {
						return (
							console.log(
								`GENERATION IS ACTIVE? (generationuuid = ${g}) (is selected? ${g === this.inlineDiff.generationUUID}) (handler is active? ${this.active})`,
							),
							g === this.inlineDiff.generationUUID
								? this.active
								: this.generations.get(g)?.status === "generating"
						);
					}
					setGenerationStatus(g, p) {
						this.generations.set(g, { status: p }),
							this.j.fire({ generationUUID: g, status: p });
					}
					abortGeneration(g) {
						g === this.inlineDiff.generationUUID && (this.active = !1);
						const p = this.generations.get(g);
						p?.status === "generating" && this.setGenerationStatus(g, "failed"),
							p?.callbacks &&
								(p.callbacks.abortController.abort(),
								p.callbacks.doneCallback({
									generationUUID: g,
									diffRange: this.inlineDiff.currentRange,
									model: this.b.object.textEditorModel,
								}));
					}
					addLinesToDiff(g, p = !1, o = this.inlineDiff.generationUUID) {
						if (!this.generationIsActive(o)) {
							console.warn(
								"InlineDiffService#addLinesToDiff: generation is not active",
								o,
							);
							return;
						}
						const f = [];
						for (const s of g) {
							(s.includes(`
`) ||
								s.includes("\r")) &&
								console.warn(
									"InlineDiffService#addLine: line contains newline characters, which is not supported",
								);
							let l = s.replace(/\r/g, "");
							(l = l.replace(/\n/g, "")), f.push(l);
						}
						const b = (0, C.$$zb)(this.inlineDiff);
						if (!(o in this.inlineDiff.newTextLiness))
							throw new Error(
								"this should not happen, generationUUID is not in newTextLiness",
							);
						if (
							(this.inlineDiff.newTextLiness[o].push(...f),
							this.inlineDiff.generationUUID === o)
						) {
							const s = (0, a.$Y7b)(
								this.inlineDiff.originalTextLines,
								this.w(this.inlineDiff),
								!1,
								this.inlineDiff.isHidden,
							);
							this.z(o, s, b, p), this.y();
						}
					}
					y() {
						const p = [],
							o = this.inlineDiff.isHidden ? "-hidden" : "";
						for (const b of this.inlineDiff.changes) {
							const s =
								this.inlineDiff.currentRange.startLineNumber +
								b.addedRange.startLineNumber -
								1;
							if (
								b.addedRange.startLineNumber ===
								b.addedRange.endLineNumberExclusive
							)
								continue;
							const l = new t.$iL(
									s,
									0,
									this.inlineDiff.currentRange.startLineNumber +
										b.addedRange.endLineNumberExclusive -
										1 -
										1,
									0,
								),
								y = {
									range: l,
									options: {
										description:
											"inline-diff-removed" +
											(this.inlineDiff.isHidden ? "-hidden" : ""),
										overviewRuler: {
											position: m.OverviewRulerLane.Center,
											color:
												"var(--vscode-diffEditor-removedLineBackground, hsl(348deg 90% 50% / 25%))",
										},
									},
								};
							p.push(y);
							let $ = !1;
							if (b.relativeInnerChanges && !this.inlineDiff.isHidden) {
								const T = {
										className: "inline-diff-inner-change-added",
										description: "inline-diff-inner-change-added",
										shouldFillLineOnLineBreak: !0,
									},
									P = {
										className:
											"inline-diff-inner-change-added inline-diff-inner-empty",
										description:
											"inline-diff-inner-change-addedinline-diff-inner-empty",
									};
								for (const k of b.relativeInnerChanges) {
									$ = !0;
									const L = new t.$iL(
											s + k.modifiedRange.startLineNumber - 1,
											k.modifiedRange.startColumn,
											s + k.modifiedRange.endLineNumber - 1,
											k.modifiedRange.endColumn,
										),
										D = { range: L, options: L.isEmpty() ? P : T };
									p.push(D);
								}
							}
							const v = `inline-diff-added inline-diff-added-color-unthemed${$ ? "-lower" : ""}`,
								S = "inline-diff-added-lines" + o,
								I = {
									range: l,
									options: {
										description: v,
										className: v,
										inlineClassName: S,
										isWholeLine: !0,
										...(this.inlineDiff.isHidden
											? {}
											: {
													overviewRuler: {
														position: m.OverviewRulerLane.Right,
														color:
															"var(--vscode-diffEditor-insertedLineBackground, hsl(124deg 90% 48% / 20%))",
													},
												}),
									},
								};
							p.push(I);
						}
						if (
							this.m.nonPersistentStorage.inprogressAIGenerations.some(
								(b) => b.generationUUID === this.inlineDiff.generationUUID,
							)
						) {
							if (this.inlineDiff.activeLine) {
								const b = new t.$iL(
									this.inlineDiff.currentRange.startLineNumber +
										this.inlineDiff.activeLine -
										1,
									0,
									this.inlineDiff.currentRange.startLineNumber +
										this.inlineDiff.activeLine -
										1,
									0,
								);
								p.push({
									range: b,
									options: {
										description: "inline-diff-current",
										className: "inline-diff-current",
										isWholeLine: !0,
									},
								});
							}
							if (
								this.inlineDiff.pendingRange.startLineNumber !==
								this.inlineDiff.pendingRange.endLineNumberExclusive
							) {
								const b = new t.$iL(
									this.inlineDiff.currentRange.startLineNumber +
										this.inlineDiff.pendingRange.startLineNumber -
										1,
									0,
									this.inlineDiff.currentRange.startLineNumber +
										this.inlineDiff.pendingRange.endLineNumberExclusive -
										1 -
										1,
									0,
								);
								p.push({
									range: b,
									options: {
										description: "inline-diff-pending",
										className: "inline-diff-pending",
										isWholeLine: !0,
									},
								});
							}
						}
						this.g = this.b.object.textEditorModel.deltaDecorations(this.g, p);
					}
					z(g, p, o, f = !1, b = !1) {
						if (!this.generationIsActive(g) && !b) {
							console.warn(
								"InlineDiffService#handleDiffState: generation is not active",
								g,
							);
							return;
						}
						const s = this.b.object.textEditorModel;
						let l =
							this.inlineDiff.currentRange.startLineNumber <
							this.inlineDiff.currentRange.endLineNumberExclusive
								? new t.$iL(
										this.inlineDiff.currentRange.startLineNumber,
										1,
										this.inlineDiff.currentRange.endLineNumberExclusive - 1,
										s.getLineMaxColumn(
											this.inlineDiff.currentRange.endLineNumberExclusive - 1,
										),
									)
								: new t.$iL(
										this.inlineDiff.currentRange.startLineNumber,
										1,
										this.inlineDiff.currentRange.startLineNumber,
										1,
									);
						const y = [],
							$ = l.isEmpty() ? [] : s.getValueInRange(l).split(s.getEOL()),
							v = this.f.computeDiff($, p.newFullRangeTextLines, {
								ignoreTrimWhitespace: !1,
								computeMoves: !1,
								maxComputationTimeMs: 200,
							});
						if (v.hitTimeout) {
							console.warn("INLINEDIFF QUITTING EARLY, doing big slow edit");
							let L = p.newFullRangeTextLines.join(s.getEOL());
							l.isEmpty() && (L += s.getEOL());
							const D = { range: l, text: L, forceMoveMarkers: !0 };
							y.push(D);
						} else
							for (const L of v.changes) {
								let D = p.newFullRangeTextLines
										.slice(
											L.modified.startLineNumber - 1,
											L.modified.endLineNumberExclusive - 1,
										)
										.join(s.getEOL()),
									M;
								L.original.isEmpty
									? ((M = new t.$iL(
											l.startLineNumber + L.original.startLineNumber - 1,
											1,
											l.startLineNumber + L.original.startLineNumber - 1,
											1,
										)),
										(D += s.getEOL()))
									: L.modified.isEmpty
										? ((M = new t.$iL(
												l.startLineNumber + L.original.startLineNumber - 1,
												1,
												l.startLineNumber +
													L.original.endLineNumberExclusive -
													1,
												1,
											)),
											(D = null))
										: (M = new t.$iL(
												l.startLineNumber + L.original.startLineNumber - 1,
												1,
												l.startLineNumber +
													L.original.endLineNumberExclusive -
													1 -
													1,
												s.getLineMaxColumn(
													l.startLineNumber +
														L.original.endLineNumberExclusive -
														1 -
														1,
												),
											));
								const N = { range: M, text: D, forceMoveMarkers: !0 };
								y.push(N);
							}
						this.t = y;
						let S = [];
						this.inlineDiff.isHidden || (S = s.applyEdits(y, !0)),
							this.inlineDiff.isHidden ||
								(this.inlineDiff.currentRange = new w.$rL(
									this.inlineDiff.currentRange.startLineNumber,
									this.inlineDiff.currentRange.startLineNumber +
										p.newFullRangeTextLines.length,
								)),
							(this.inlineDiff.changes = p.changes),
							(this.inlineDiff.activeLine = p.activeLine),
							(this.inlineDiff.pendingRange = p.pendingRange),
							this.m.setNonPersistentStorage("inlineDiffs", (L) => [
								...L.filter((D) => D.id !== this.inlineDiff.id),
								(0, C.$$zb)(this.inlineDiff),
							]);
						const I = (0, C.$$zb)(this.inlineDiff),
							T = this.q,
							P = this.inlineDiff.id,
							k = this.inlineDiff.uri;
						if (!this.inlineDiff.isHidden && !f) {
							const L = new r.$y7b(
								"Undo Update Diff",
								"undo-update-diff",
								P,
								s.uri,
								async () => {
									T.cancelInUndo(P),
										await T.applyEditsNoUpdateDiffs(k, S),
										T.setDiff(P, o);
								},
								async () => {
									await T.applyEditsNoUpdateDiffs(k, y), T.setDiff(P, I);
								},
							);
							this.q.pushUndoElement(L, {});
						}
					}
					cancelInUndo() {
						this.m.nonPersistentStorage.inprogressAIGenerations.some((g) =>
							this.inlineDiff.orderedGenerationUUIDs.includes(g.generationUUID),
						) &&
							this.m.setNonPersistentStorage("inprogressAIGenerations", (g) =>
								g.filter(
									(p) =>
										!this.inlineDiff.orderedGenerationUUIDs.includes(
											p.generationUUID,
										),
								),
							),
							[...this.generations.keys()].forEach((g) => {
								this.abortGeneration(g);
							}),
							(this.active = !1),
							(this.h = !0);
					}
					setAndHandleDiffGenerationUUID(g, p = !1) {
						const o = (0, C.$$zb)(this.inlineDiff);
						if (!this.inlineDiff.generationUUID)
							throw new Error("generationUUID is undefined");
						this.inlineDiff.generationUUID = g.generationUUID;
						const f = this.generations.get(this.inlineDiff.generationUUID);
						if (f) this.active = f.status === "generating";
						else
							throw new Error("generationUUID is not in the generations map");
						const b = this.w(this.inlineDiff),
							s = b.length === 0 ? [""] : b,
							l = !this.generationIsActive(this.inlineDiff.generationUUID),
							y = (0, a.$Y7b)(
								this.inlineDiff.originalTextLines,
								s,
								l,
								this.inlineDiff.isHidden,
							);
						this.setDiff(g),
							this.z(this.inlineDiff.generationUUID, y, o, p, !0),
							this.y();
					}
					setDiff(g) {
						(this.inlineDiff = g),
							this.m.setNonPersistentStorage("inlineDiffs", (p) => [
								...p.filter((o) => o.id !== this.inlineDiff.id),
								(0, C.$$zb)(this.inlineDiff),
							]),
							this.y();
					}
					activateEntireHandler(g, p, o) {
						this.a &&
							console.warn(
								"SPOOKY WARNING: MultiInlineDiffHandler#activate called twice",
							),
							(this.a = !0),
							(this.cancelGenerationWithNoChangesCallback = g),
							(this.rejectCallback = p),
							(this.globalDoneCallback = o),
							(this.active = !0);
					}
					C(g) {
						this.abortGeneration(g);
					}
					F() {
						this.cancelGenerationWithNoChangesCallback &&
							this.cancelGenerationWithNoChangesCallback();
					}
					callRejectCallback() {
						this.rejectCallback && this.rejectCallback();
					}
					maybeCallGlobalDoneCallback() {
						this.globalDoneCallback && this.globalDoneCallback();
					}
				}
				e.$17b = c;
			},
		)

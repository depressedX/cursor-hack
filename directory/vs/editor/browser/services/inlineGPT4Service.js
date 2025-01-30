import '../../../../require.js';
import '../../../../exports.js';
import '../../../platform/instantiation/common/instantiation.js';
import '../../common/core/range.js';
import '../../../base/common/lifecycle.js';
import '../../../platform/instantiation/common/extensions.js';
import '../../common/services/resolverService.js';
import '../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../platform/undoRedo/common/undoRedo.js';
import '../../common/core/position.js';
import '../../../platform/contextkey/common/contextkey.js';
import './genericUndoRedoElement.js';
define(
			de[2874],
			he([1, 0, 5, 17, 3, 20, 42, 45, 155, 48, 8, 606]),
			function (ce /*require*/,
 e /*exports*/,
 t /*instantiation*/,
 i /*range*/,
 w /*lifecycle*/,
 E /*extensions*/,
 C /*resolverService*/,
 d /*reactiveStorageService*/,
 m /*undoRedo*/,
 r /*position*/,
 u /*contextkey*/,
 a /*genericUndoRedoElement*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Vdc = e.$Udc = void 0),
					(e.$Wdc = n),
					(e.$Udc = (0, t.$Mi)("inlineGPT4Service"));
				let h = class extends w.$1c {
					constructor(p, o, f, b, s) {
						super(),
							(this.c = p),
							(this.f = o),
							(this.g = f),
							(this.h = b),
							(this.j = s),
							(this.a = new Map());
					}
					isEndOfScopeToken(p) {
						let o = p.trim();
						return o === "}" || o === "]" || o === ")";
					}
					async streamCompletion({
						uri: p,
						triggerPosition: o,
						currentLine: f,
						generationUUID: b,
						streamingLines: s,
						undoRedo: l,
						editor: y,
						cancellationToken: $,
						onFirstTokenListener: v,
						onDoneListener: S,
						shouldSwitchToNewLine: I,
					}) {
						const T = await this.addCompletion(
								{
									uri: p,
									triggerPosition: o,
									generationUUID: b,
									currentRange: {
										startLineNumber: o.lineNumber,
										endLineNumberExclusive: o.lineNumber + 1,
									},
									_isPostCopilot: I ?? !1,
								},
								y,
								l,
							),
							P = f.search(/\S|$/);
						let k = P,
							L = !1,
							D = !0,
							M = !1,
							N = 0,
							A = "";
						try {
							for await (let R of s) {
								if ($.isCancellationRequested) break;
								if (
									(N++,
									D && v(),
									R ===
										`
` ||
										R ===
											`\r
`)
								) {
									if (M) {
										A += R;
										continue;
									}
									T.addToken(R), (k = 0);
									continue;
								}
								const O = R.search(/\S|$/);
								if (O === -1) {
									A += R;
									const U = R.replace(/\n/g, "").replace(/\r\n/g, "").length;
									k += U;
									continue;
								} else (R = A + R), (k += O), (A = "");
								let B = R.trimStart();
								if (B !== "")
									if (M && this.isEndOfScopeToken(B)) T.addToken(R);
									else if (k < P)
										if (this.isEndOfScopeToken(B)) T.addToken(R), (M = !0);
										else break;
									else T.addToken(R);
								else T.addToken(R);
								D = !1;
							}
						} catch (R) {
							console.error("error while streaming lines:", R), (L = !0);
						}
						L &&
							(console.error("failed to complete streaming"),
							T.finishFailure()),
							S(),
							T.dispose();
					}
					async addCompletion(p, o, f) {
						const b = new m.$IN(),
							s = new c(p, b, this.h, this.f, o);
						if ((this.a.set(s.id, s), f)) {
							const l = new a.$x7b(
								"InlineGPT4",
								"InlineGPT4",
								p.uri,
								f.undo,
								f.redo,
							);
							this.h.pushElement(l, b);
						}
						return s;
					}
					pushUndoRedoElement(p) {
						this.h.pushElement(p);
					}
					findHandlerGivenPosition(p) {
						const o = p.getPosition();
						if (o)
							for (const [f, b] of this.a) {
								const s = b.completion.triggerPosition.lineNumber,
									l = b.completion.livePositionOfCursor.lineNumber,
									y = o.lineNumber,
									$ =
										b.completion.uri.toString() ===
										p.getModel()?.uri.toString();
								if (s <= y && y < l && $) return { handler: b, id: f };
							}
					}
					findHandlersGivenEditor(p) {
						const o = p.getPosition(),
							f = p.getModel();
						if (!o || !f) return [];
						let b = [];
						for (const [s, l] of this.a)
							l.completion.uri.toString() === f.uri.toString() &&
								b.push({ handler: l, id: s });
						return b;
					}
					acceptCompletion(p) {
						const { handler: o, id: f } = this.findHandlerGivenPosition(p) ?? {
							handler: void 0,
							id: void 0,
						};
						!o || !f || (o.accept(), this.a.delete(f));
					}
					acceptImplicitly(p) {
						const o = this.findHandlersGivenEditor(p);
						for (const f of o)
							f.handler.acceptImplicitly(), this.a.delete(f.id);
					}
					rejectCompletion(p) {
						const { handler: o, id: f } = this.findHandlerGivenPosition(p) ?? {
							handler: void 0,
							id: void 0,
						};
						!o || !f || (o.reject(), this.a.delete(f));
					}
					cancelCompletion(p) {
						this.removeHandler(p);
					}
					removeHandler(p) {
						const o = this.a.get(p);
						o && (this.a.delete(p), o.dispose());
					}
				};
				(e.$Vdc = h),
					(e.$Vdc = h =
						Ne(
							[
								j(0, t.$Li),
								j(1, C.$MO),
								j(2, d.$0zb),
								j(3, m.$GN),
								j(4, u.$6j),
							],
							h,
						)),
					(0, E.$lK)(e.$Udc, h, E.InstantiationType.Delayed);
				class c extends w.$1c {
					get id() {
						return this.completion.id;
					}
					constructor(p, o, f, b, s) {
						super(),
							(this.h = o),
							(this.j = f),
							(this.m = b),
							(this.q = s),
							(this.c = []),
							(this.f = []),
							(this.g = !1),
							(this.u = !0),
							(this.a = {}),
							this.m
								.createModelReference(p.uri)
								.then((l) => {
									this.a = l;
								})
								.catch((l) => {
									console.error(
										"InlineLongCompletionHandler#constructor: error while creating model reference:",
										l,
									),
										(this.g = !0);
								}),
							(this.completion = {
								id: p.generationUUID,
								livePositionOfCursor: p.triggerPosition,
								onAccept: () => {},
								onReject: () => {},
								newTextLines: [],
								...p,
							});
					}
					dispose() {
						this._checkInvariants() && (this.a.dispose(), super.dispose());
					}
					r() {
						const p = this.a.object.textEditorModel,
							o = this.c;
						p.deltaDecorations(o, []), (this.c = []);
					}
					acceptImplicitly() {
						this.r();
					}
					accept() {
						this.r();
						const p = this.completion.livePositionOfCursor.lineNumber;
						this.q.setPosition(
							new r.$hL(p, this.a.object.textEditorModel.getLineMaxColumn(p)),
						);
					}
					reject() {
						this.j.undo(this.a.object.textEditorModel.uri), this.r();
					}
					addToken(p) {
						if (!this._checkInvariants()) return;
						const o = this.a.object.textEditorModel.getEOL();
						p ===
							`
` ||
						p ===
							`\r
`
							? (this.completion.newTextLines.push(""),
								this._updatePositionAndDecorationsWithNewLine())
							: ((this.completion.newTextLines[
									this.completion.newTextLines.length - 1
								] += p),
								this._updatePositionAndDecorationsWithNewToken(p)),
							this.u && (this.u = !1);
					}
					finishFailure() {
						this.g;
					}
					_checkInvariants() {
						return !this.g;
					}
					_updatePositionAndDecorationsWithNewLine() {
						const p = this.a.object.textEditorModel,
							o = p.getEOL(),
							f = this.completion.livePositionOfCursor,
							b = this.completion.triggerPosition,
							s = [
								{
									range: new i.$iL(
										f.lineNumber,
										f.column,
										f.lineNumber,
										f.column,
									),
									text: o,
									forceMoveMarkers: !0,
								},
							];
						p.pushEditOperations([], s, () => null, this.h);
						const l = this.completion.livePositionOfCursor.lineNumber;
						this.completion.livePositionOfCursor = {
							lineNumber: l + 1,
							column: 1,
						};
					}
					_updatePositionAndDecorationsWithNewToken(p) {
						const o = this.a.object.textEditorModel,
							f = o.getEOL(),
							b = this.completion.livePositionOfCursor,
							s = this.completion.triggerPosition;
						if (this.u && !this.completion._isPostCopilot) {
							const S = p.trimStart(),
								I = [
									{
										range: new i.$iL(
											b.lineNumber,
											b.column,
											b.lineNumber,
											b.column,
										),
										text: S,
										forceMoveMarkers: !0,
									},
								];
							o.pushEditOperations([], I, () => null, this.h);
						} else {
							const S = [
								{
									range: new i.$iL(
										b.lineNumber,
										b.column,
										b.lineNumber,
										b.column,
									),
									text: p,
									forceMoveMarkers: !0,
								},
							];
							o.pushEditOperations([], S, () => null, this.h);
						}
						this.q.setPosition(s);
						const l = {
								range: new i.$iL(b.lineNumber, 1, b.lineNumber, 1),
								options: {
									isWholeLine: !0,
									description: "inline-long-completion",
									className: "inline-long-completion",
								},
							},
							y = {
								range: new i.$iL(b.lineNumber, 1, b.lineNumber, 1),
								options: {
									isWholeLine: !0,
									description: "inline-long-completion-opacitycover",
									inlineClassName: "inline-long-completion-opacitycover",
									zIndex: 10,
								},
							};
						this.f.push(y),
							(this.c = this.a.object.textEditorModel.deltaDecorations(
								this.c,
								this.f,
							));
						const $ = this.completion.livePositionOfCursor.lineNumber,
							v = this.completion.livePositionOfCursor.column;
						this.completion.livePositionOfCursor = {
							lineNumber: b.lineNumber,
							column: v + p.length,
						};
					}
				}
				function n(g) {
					const p = JSON.parse(JSON.stringify(g));
					return (p.uri = g.uri), (p.triggerPosition = g.triggerPosition), p;
				}
			},
		),
		
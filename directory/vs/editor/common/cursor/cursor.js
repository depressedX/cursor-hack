import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/errors.js';
import '../../../base/common/strings.js';
import './cursorCollection.js';
import '../cursorCommon.js';
import './cursorContext.js';
import './cursorDeleteOperations.js';
import '../cursorEvents.js';
import './cursorTypeOperations.js';
import './cursorTypeEditOperations.js';
import '../core/range.js';
import '../core/selection.js';
import '../editorCommon.js';
import '../model.js';
import '../textModelEvents.js';
import '../viewEvents.js';
import '../../../base/common/lifecycle.js';
import '../viewModelEventDispatcher.js';
define(
			de[1199],
			he([
				1, 0, 29, 37, 2761, 346, 2550, 943, 248, 949, 948, 17, 104, 98, 64, 590,
				493, 3, 751,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$awb = e.$_vb = void 0),
					(i = mt(i)),
					(c = mt(c));
				class b extends o.$1c {
					constructor(I, T, P, k) {
						super(),
							(this.c = I),
							(this.f = this.c.getVersionId()),
							(this.g = T),
							(this.h = P),
							(this.context = new C.$Tvb(this.c, this.g, this.h, k)),
							(this.n = new w.$Vvb(this.context)),
							(this.q = !1),
							(this.t = !1),
							(this.u = null),
							(this.w = null),
							(this.y = []),
							(this.z = E.EditOperationType.Other);
					}
					dispose() {
						this.n.dispose(), (this.y = (0, o.$Vc)(this.y)), super.dispose();
					}
					updateConfiguration(I) {
						(this.context = new C.$Tvb(this.c, this.g, this.h, I)),
							this.n.updateContext(this.context);
					}
					onLineMappingChanged(I) {
						this.f === this.c.getVersionId() &&
							this.setStates(
								I,
								"viewModel",
								m.CursorChangeReason.NotSet,
								this.getCursorStates(),
							);
					}
					setHasFocus(I) {
						this.q = I;
					}
					C() {
						if (this.y.length > 0) {
							const I = this.n.getSelections();
							for (let T = 0; T < this.y.length; T++) {
								const P = this.y[T];
								P.isValid(I) || (P.dispose(), this.y.splice(T, 1), T--);
							}
						}
					}
					getPrimaryCursorState() {
						return this.n.getPrimaryCursor();
					}
					getLastAddedCursorIndex() {
						return this.n.getLastAddedCursorIndex();
					}
					getCursorStates() {
						return this.n.getAll();
					}
					setStates(I, T, P, k) {
						let L = !1;
						const D = this.context.cursorConfig.multiCursorLimit;
						k !== null && k.length > D && ((k = k.slice(0, D)), (L = !0));
						const M = s.from(this.c, this);
						return (
							this.n.setStates(k),
							this.n.normalize(),
							(this.w = null),
							this.C(),
							this.I(I, T, P, M, L)
						);
					}
					setCursorColumnSelectData(I) {
						this.w = I;
					}
					revealAll(I, T, P, k, L, D) {
						const M = this.n.getViewPositions();
						let N = null,
							A = null;
						M.length > 1
							? (A = this.n.getViewSelections())
							: (N = a.$iL.fromPositions(M[0], M[0])),
							I.emitViewEvent(new p.$Rsb(T, P, N, A, k, L, D));
					}
					revealPrimary(I, T, P, k, L, D) {
						const N = [this.n.getPrimaryCursor().viewState.selection];
						I.emitViewEvent(new p.$Rsb(T, P, null, N, k, L, D));
					}
					saveState() {
						const I = [],
							T = this.n.getSelections();
						for (let P = 0, k = T.length; P < k; P++) {
							const L = T[P];
							I.push({
								inSelectionMode: !L.isEmpty(),
								selectionStart: {
									lineNumber: L.selectionStartLineNumber,
									column: L.selectionStartColumn,
								},
								position: {
									lineNumber: L.positionLineNumber,
									column: L.positionColumn,
								},
							});
						}
						return I;
					}
					restoreState(I, T) {
						const P = [];
						for (let k = 0, L = T.length; k < L; k++) {
							const D = T[k];
							let M = 1,
								N = 1;
							D.position &&
								D.position.lineNumber &&
								(M = D.position.lineNumber),
								D.position && D.position.column && (N = D.position.column);
							let A = M,
								R = N;
							D.selectionStart &&
								D.selectionStart.lineNumber &&
								(A = D.selectionStart.lineNumber),
								D.selectionStart &&
									D.selectionStart.column &&
									(R = D.selectionStart.column),
								P.push({
									selectionStartLineNumber: A,
									selectionStartColumn: R,
									positionLineNumber: M,
									positionColumn: N,
								});
						}
						this.setStates(
							I,
							"restoreState",
							m.CursorChangeReason.NotSet,
							E.$ysb.fromModelSelections(P),
						),
							this.revealAll(
								I,
								"restoreState",
								!1,
								p.VerticalRevealType.Simple,
								!0,
								c.ScrollType.Immediate,
							);
					}
					onModelContentChanged(I, T) {
						if (T instanceof g.$AN) {
							if (this.t) return;
							this.t = !0;
							try {
								this.setStates(
									I,
									"modelChange",
									m.CursorChangeReason.NotSet,
									this.getCursorStates(),
								);
							} finally {
								this.t = !1;
							}
						} else {
							const P = T.rawContentChangedEvent;
							if (((this.f = P.versionId), this.t)) return;
							const k = P.containsEvent(g.RawContentChangedType.Flush);
							if (((this.z = E.EditOperationType.Other), k))
								this.n.dispose(),
									(this.n = new w.$Vvb(this.context)),
									this.C(),
									this.I(
										I,
										"model",
										m.CursorChangeReason.ContentFlush,
										null,
										!1,
									);
							else if (
								this.q &&
								P.resultingSelection &&
								P.resultingSelection.length > 0
							) {
								const L = E.$ysb.fromModelSelections(P.resultingSelection);
								this.setStates(
									I,
									"modelChange",
									P.isUndoing
										? m.CursorChangeReason.Undo
										: P.isRedoing
											? m.CursorChangeReason.Redo
											: m.CursorChangeReason.RecoverFromMarkers,
									L,
								) &&
									this.revealAll(
										I,
										"modelChange",
										!1,
										p.VerticalRevealType.Simple,
										!0,
										c.ScrollType.Smooth,
									);
							} else {
								const L = this.n.readSelectionFromMarkers();
								this.setStates(
									I,
									"modelChange",
									m.CursorChangeReason.RecoverFromMarkers,
									E.$ysb.fromModelSelections(L),
								);
							}
						}
					}
					getSelection() {
						return this.n.getPrimaryCursor().modelState.selection;
					}
					getTopMostViewPosition() {
						return this.n.getTopMostViewPosition();
					}
					getBottomMostViewPosition() {
						return this.n.getBottomMostViewPosition();
					}
					getCursorColumnSelectData() {
						if (this.w) return this.w;
						const I = this.n.getPrimaryCursor(),
							T = I.viewState.selectionStart.getStartPosition(),
							P = I.viewState.position;
						return {
							isReal: !1,
							fromViewLineNumber: T.lineNumber,
							fromViewVisualColumn:
								this.context.cursorConfig.visibleColumnFromColumn(this.g, T),
							toViewLineNumber: P.lineNumber,
							toViewVisualColumn:
								this.context.cursorConfig.visibleColumnFromColumn(this.g, P),
						};
					}
					getSelections() {
						return this.n.getSelections();
					}
					getPosition() {
						return this.n.getPrimaryCursor().modelState.position;
					}
					setSelections(I, T, P, k) {
						this.setStates(I, T, k, E.$ysb.fromModelSelections(P));
					}
					getPrevEditOperationType() {
						return this.z;
					}
					setPrevEditOperationType(I) {
						this.z = I;
					}
					F(I, T) {
						const P = [],
							k = [];
						for (let M = 0, N = I.length; M < N; M++)
							P.push({
								range: I[M],
								options: {
									description: "auto-closed-character",
									inlineClassName: "auto-closed-character",
									stickiness:
										n.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
								},
							}),
								k.push({
									range: T[M],
									options: {
										description: "auto-closed-enclosing",
										stickiness:
											n.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
									},
								});
						const L = this.c.deltaDecorations([], P),
							D = this.c.deltaDecorations([], k);
						this.y.push(new l(this.c, L, D));
					}
					G(I) {
						if (!I) return;
						I.shouldPushStackElementBefore && this.c.pushStackElement();
						const T = y.executeCommands(
							this.c,
							this.n.getSelections(),
							I.commands,
						);
						if (T) {
							this.H(T);
							const P = [],
								k = [];
							for (let L = 0; L < I.commands.length; L++) {
								const D = I.commands[L];
								D instanceof u.$7tb &&
									D.enclosingRange &&
									D.closeCharacterRange &&
									(P.push(D.closeCharacterRange), k.push(D.enclosingRange));
							}
							P.length > 0 && this.F(P, k), (this.z = I.type);
						}
						I.shouldPushStackElementAfter && this.c.pushStackElement();
					}
					H(I) {
						(!I || I.length === 0) && (I = this.n.readSelectionFromMarkers()),
							(this.w = null),
							this.n.setSelections(I),
							this.n.normalize();
					}
					I(I, T, P, k, L) {
						const D = s.from(this.c, this);
						if (D.equals(k)) return !1;
						const M = this.n.getSelections(),
							N = this.n.getViewSelections();
						if (
							(I.emitViewEvent(new p.$Isb(N, M, P)),
							!k ||
								k.cursorState.length !== D.cursorState.length ||
								D.cursorState.some(
									(A, R) => !A.modelState.equals(k.cursorState[R].modelState),
								))
						) {
							const A = k
									? k.cursorState.map((O) => O.modelState.selection)
									: null,
								R = k ? k.modelVersionId : 0;
							I.emitOutgoingEvent(
								new f.$4vb(A, M, R, D.modelVersionId, T || "keyboard", P, L),
							);
						}
						return !0;
					}
					J(I) {
						if (!I.length) return null;
						const T = [];
						for (let P = 0, k = I.length; P < k; P++) {
							const L = I[P];
							if (
								!L.text ||
								L.text.indexOf(`
`) >= 0
							)
								return null;
							const D = L.text.match(/([)\]}>'"`])([^)\]}>'"`]*)$/);
							if (!D) return null;
							const M = D[1],
								N =
									this.context.cursorConfig.autoClosingPairs.autoClosingPairsCloseSingleChar.get(
										M,
									);
							if (!N || N.length !== 1) return null;
							const A = N[0].open,
								R = L.text.length - D[2].length - 1,
								O = L.text.lastIndexOf(A, R - 1);
							if (O === -1) return null;
							T.push([O, R]);
						}
						return T;
					}
					executeEdits(I, T, P, k) {
						let L = null;
						T === "snippet" && (L = this.J(P)), L && (P[0]._isTracked = !0);
						const D = [],
							M = [],
							N = this.c.pushEditOperations(this.getSelections(), P, (A) => {
								if (L)
									for (let O = 0, B = L.length; O < B; O++) {
										const [U, z] = L[O],
											F = A[O],
											x = F.range.startLineNumber,
											H = F.range.startColumn - 1 + U,
											q = F.range.startColumn - 1 + z;
										D.push(new a.$iL(x, q + 1, x, q + 2)),
											M.push(new a.$iL(x, H + 1, x, q + 2));
									}
								const R = k(A);
								return R && (this.t = !0), R;
							});
						N &&
							((this.t = !1),
							this.setSelections(I, T, N, m.CursorChangeReason.NotSet)),
							D.length > 0 && this.F(D, M);
					}
					L(I, T, P, k = m.CursorChangeReason.NotSet) {
						if (this.context.cursorConfig.readOnly) return;
						const L = s.from(this.c, this);
						this.n.stopTrackingSelections(), (this.t = !0);
						try {
							this.n.ensureValidState(), I();
						} catch (D) {
							(0, t.$4)(D);
						}
						(this.t = !1),
							this.n.startTrackingSelections(),
							this.C(),
							this.I(T, P, k, L, !1) &&
								this.revealAll(
									T,
									P,
									!1,
									p.VerticalRevealType.Simple,
									!0,
									c.ScrollType.Smooth,
								);
					}
					getAutoClosedCharacters() {
						return l.getAllAutoClosedCharacters(this.y);
					}
					startComposition(I) {
						this.u = new v(this.c, this.getSelections());
					}
					endComposition(I, T) {
						const P = this.u
							? this.u.deduceOutcome(this.c, this.getSelections())
							: null;
						(this.u = null),
							this.L(
								() => {
									T === "keyboard" &&
										this.G(
											r.$$tb.compositionEndWithInterceptors(
												this.z,
												this.context.cursorConfig,
												this.c,
												P,
												this.getSelections(),
												this.getAutoClosedCharacters(),
											),
										);
								},
								I,
								T,
							);
					}
					type(I, T, P) {
						this.L(
							() => {
								if (P === "keyboard") {
									const k = T.length;
									let L = 0;
									for (; L < k; ) {
										const D = i.$Wf(T, L),
											M = T.substr(L, D);
										this.G(
											r.$$tb.typeWithInterceptors(
												!!this.u,
												this.z,
												this.context.cursorConfig,
												this.c,
												this.getSelections(),
												this.getAutoClosedCharacters(),
												M,
											),
										),
											(L += D);
									}
								} else
									this.G(
										r.$$tb.typeWithoutInterceptors(
											this.z,
											this.context.cursorConfig,
											this.c,
											this.getSelections(),
											T,
										),
									);
							},
							I,
							P,
						);
					}
					compositionType(I, T, P, k, L, D) {
						if (T.length === 0 && P === 0 && k === 0) {
							if (L !== 0) {
								const M = this.getSelections().map((N) => {
									const A = N.getPosition();
									return new h.$kL(
										A.lineNumber,
										A.column + L,
										A.lineNumber,
										A.column + L,
									);
								});
								this.setSelections(I, D, M, m.CursorChangeReason.NotSet);
							}
							return;
						}
						this.L(
							() => {
								this.G(
									r.$$tb.compositionType(
										this.z,
										this.context.cursorConfig,
										this.c,
										this.getSelections(),
										T,
										P,
										k,
										L,
									),
								);
							},
							I,
							D,
						);
					}
					paste(I, T, P, k, L) {
						this.L(
							() => {
								this.G(
									r.$$tb.paste(
										this.context.cursorConfig,
										this.c,
										this.getSelections(),
										T,
										P,
										k || [],
									),
								);
							},
							I,
							L,
							m.CursorChangeReason.Paste,
						);
					}
					cut(I, T) {
						this.L(
							() => {
								this.G(
									d.$Etb.cut(
										this.context.cursorConfig,
										this.c,
										this.getSelections(),
									),
								);
							},
							I,
							T,
						);
					}
					executeCommand(I, T, P) {
						this.L(
							() => {
								this.n.killSecondaryCursors(),
									this.G(
										new E.$Csb(E.EditOperationType.Other, [T], {
											shouldPushStackElementBefore: !1,
											shouldPushStackElementAfter: !1,
										}),
									);
							},
							I,
							P,
						);
					}
					executeCommands(I, T, P) {
						this.L(
							() => {
								this.G(
									new E.$Csb(E.EditOperationType.Other, T, {
										shouldPushStackElementBefore: !1,
										shouldPushStackElementAfter: !1,
									}),
								);
							},
							I,
							P,
						);
					}
				}
				e.$_vb = b;
				class s {
					static from(I, T) {
						return new s(I.getVersionId(), T.getCursorStates());
					}
					constructor(I, T) {
						(this.modelVersionId = I), (this.cursorState = T);
					}
					equals(I) {
						if (
							!I ||
							this.modelVersionId !== I.modelVersionId ||
							this.cursorState.length !== I.cursorState.length
						)
							return !1;
						for (let T = 0, P = this.cursorState.length; T < P; T++)
							if (!this.cursorState[T].equals(I.cursorState[T])) return !1;
						return !0;
					}
				}
				class l {
					static getAllAutoClosedCharacters(I) {
						let T = [];
						for (const P of I) T = T.concat(P.getAutoClosedCharactersRanges());
						return T;
					}
					constructor(I, T, P) {
						(this.c = I), (this.d = T), (this.f = P);
					}
					dispose() {
						(this.d = this.c.deltaDecorations(this.d, [])),
							(this.f = this.c.deltaDecorations(this.f, []));
					}
					getAutoClosedCharactersRanges() {
						const I = [];
						for (let T = 0; T < this.d.length; T++) {
							const P = this.c.getDecorationRange(this.d[T]);
							P && I.push(P);
						}
						return I;
					}
					isValid(I) {
						const T = [];
						for (let P = 0; P < this.f.length; P++) {
							const k = this.c.getDecorationRange(this.f[P]);
							if (k && (T.push(k), k.startLineNumber !== k.endLineNumber))
								return !1;
						}
						T.sort(a.$iL.compareRangesUsingStarts),
							I.sort(a.$iL.compareRangesUsingStarts);
						for (let P = 0; P < I.length; P++)
							if (P >= T.length || !T[P].strictContainsRange(I[P])) return !1;
						return !0;
					}
				}
				class y {
					static executeCommands(I, T, P) {
						const k = {
								model: I,
								selectionsBefore: T,
								trackedRanges: [],
								trackedRangesDirection: [],
							},
							L = this.c(k, P);
						for (let D = 0, M = k.trackedRanges.length; D < M; D++)
							k.model._setTrackedRange(
								k.trackedRanges[D],
								null,
								n.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
							);
						return L;
					}
					static c(I, T) {
						if (this.d(T)) return null;
						const P = this.f(I, T);
						if (P.operations.length === 0) return null;
						const k = P.operations,
							L = this.h(k);
						if (L.hasOwnProperty("0"))
							return console.warn("Ignoring commands"), null;
						const D = [];
						for (let A = 0, R = k.length; A < R; A++)
							L.hasOwnProperty(k[A].identifier.major.toString()) ||
								D.push(k[A]);
						P.hadTrackedEditOperation && D.length > 0 && (D[0]._isTracked = !0);
						let M = I.model.pushEditOperations(I.selectionsBefore, D, (A) => {
							const R = [];
							for (let U = 0; U < I.selectionsBefore.length; U++) R[U] = [];
							for (const U of A) U.identifier && R[U.identifier.major].push(U);
							const O = (U, z) => U.identifier.minor - z.identifier.minor,
								B = [];
							for (let U = 0; U < I.selectionsBefore.length; U++)
								R[U].length > 0
									? (R[U].sort(O),
										(B[U] = T[U].computeCursorState(I.model, {
											getInverseEditOperations: () => R[U],
											getTrackedSelection: (z) => {
												const F = parseInt(z, 10),
													x = I.model._getTrackedRange(I.trackedRanges[F]);
												return I.trackedRangesDirection[F] ===
													h.SelectionDirection.LTR
													? new h.$kL(
															x.startLineNumber,
															x.startColumn,
															x.endLineNumber,
															x.endColumn,
														)
													: new h.$kL(
															x.endLineNumber,
															x.endColumn,
															x.startLineNumber,
															x.startColumn,
														);
											},
										})))
									: (B[U] = I.selectionsBefore[U]);
							return B;
						});
						M || (M = I.selectionsBefore);
						const N = [];
						for (const A in L) L.hasOwnProperty(A) && N.push(parseInt(A, 10));
						N.sort((A, R) => R - A);
						for (const A of N) M.splice(A, 1);
						return M;
					}
					static d(I) {
						for (let T = 0, P = I.length; T < P; T++) if (I[T]) return !1;
						return !0;
					}
					static f(I, T) {
						let P = [],
							k = !1;
						for (let L = 0, D = T.length; L < D; L++) {
							const M = T[L];
							if (M) {
								const N = this.g(I, L, M);
								(P = P.concat(N.operations)),
									(k = k || N.hadTrackedEditOperation);
							}
						}
						return { operations: P, hadTrackedEditOperation: k };
					}
					static g(I, T, P) {
						const k = [];
						let L = 0;
						const D = (O, B, U = !1) => {
							(a.$iL.isEmpty(O) && B === "") ||
								k.push({
									identifier: { major: T, minor: L++ },
									range: O,
									text: B,
									forceMoveMarkers: U,
									isAutoWhitespaceEdit: P.insertsAutoWhitespace,
								});
						};
						let M = !1;
						const R = {
							addEditOperation: D,
							addTrackedEditOperation: (O, B, U) => {
								(M = !0), D(O, B, U);
							},
							trackSelection: (O, B) => {
								const U = h.$kL.liftSelection(O);
								let z;
								if (U.isEmpty())
									if (typeof B == "boolean")
										B
											? (z = n.TrackedRangeStickiness.GrowsOnlyWhenTypingBefore)
											: (z = n.TrackedRangeStickiness.GrowsOnlyWhenTypingAfter);
									else {
										const H = I.model.getLineMaxColumn(U.startLineNumber);
										U.startColumn === H
											? (z = n.TrackedRangeStickiness.GrowsOnlyWhenTypingBefore)
											: (z = n.TrackedRangeStickiness.GrowsOnlyWhenTypingAfter);
									}
								else z = n.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges;
								const F = I.trackedRanges.length,
									x = I.model._setTrackedRange(null, U, z);
								return (
									(I.trackedRanges[F] = x),
									(I.trackedRangesDirection[F] = U.getDirection()),
									F.toString()
								);
							},
						};
						try {
							P.getEditOperations(I.model, R);
						} catch (O) {
							return (
								(0, t.$4)(O), { operations: [], hadTrackedEditOperation: !1 }
							);
						}
						return { operations: k, hadTrackedEditOperation: M };
					}
					static h(I) {
						(I = I.slice(0)),
							I.sort((P, k) => -a.$iL.compareRangesUsingEnds(P.range, k.range));
						const T = {};
						for (let P = 1; P < I.length; P++) {
							const k = I[P - 1],
								L = I[P];
							if (
								a.$iL
									.getStartPosition(k.range)
									.isBefore(a.$iL.getEndPosition(L.range))
							) {
								let D;
								k.identifier.major > L.identifier.major
									? (D = k.identifier.major)
									: (D = L.identifier.major),
									(T[D.toString()] = !0);
								for (let M = 0; M < I.length; M++)
									I[M].identifier.major === D &&
										(I.splice(M, 1), M < P && P--, M--);
								P > 0 && P--;
							}
						}
						return T;
					}
				}
				e.$awb = y;
				class $ {
					constructor(I, T, P) {
						(this.text = I), (this.startSelection = T), (this.endSelection = P);
					}
				}
				class v {
					static d(I, T) {
						const P = [];
						for (const k of T) {
							if (k.startLineNumber !== k.endLineNumber) return null;
							P.push(
								new $(
									I.getLineContent(k.startLineNumber),
									k.startColumn - 1,
									k.endColumn - 1,
								),
							);
						}
						return P;
					}
					constructor(I, T) {
						this.c = v.d(I, T);
					}
					deduceOutcome(I, T) {
						if (!this.c) return null;
						const P = v.d(I, T);
						if (!P || this.c.length !== P.length) return null;
						const k = [];
						for (let L = 0, D = this.c.length; L < D; L++)
							k.push(v.f(this.c[L], P[L]));
						return k;
					}
					static f(I, T) {
						const P = Math.min(
								I.startSelection,
								T.startSelection,
								i.$Of(I.text, T.text),
							),
							k = Math.min(
								I.text.length - I.endSelection,
								T.text.length - T.endSelection,
								i.$Pf(I.text, T.text),
							),
							L = I.text.substring(P, I.text.length - k),
							D = T.text.substring(P, T.text.length - k);
						return new r.$_tb(
							L,
							I.startSelection - P,
							I.endSelection - P,
							D,
							T.startSelection - P,
							T.endSelection - P,
						);
					}
				}
			},
		),
		
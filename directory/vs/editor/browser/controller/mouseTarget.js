import '../../../../require.js';
import '../../../../exports.js';
import '../editorBrowser.js';
import '../editorDom.js';
import '../view/viewPart.js';
import '../viewParts/lines/viewLine.js';
import '../../common/config/editorOptions.js';
import '../../common/core/position.js';
import '../../common/core/range.js';
import '../../common/core/cursorColumns.js';
import '../../../base/browser/dom.js';
import '../../common/cursor/cursorAtomicMoveOperations.js';
import '../../common/model.js';
import '../../../base/common/lazy.js';
define(
			de[1662],
			he([1, 0, 56, 777, 303, 1208, 38, 48, 17, 435, 7, 1528, 64, 149]),
			function (ce /*require*/,
 e /*exports*/,
 t /*editorBrowser*/,
 i /*editorDom*/,
 w /*viewPart*/,
 E /*viewLine*/,
 C /*editorOptions*/,
 d /*position*/,
 m /*range*/,
 r /*cursorColumns*/,
 u /*dom*/,
 a /*cursorAtomicMoveOperations*/,
 h /*model*/,
 c /*lazy*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Xub = e.$Wub = e.$Vub = e.$Uub = void 0),
					(u = mt(u));
				var n;
				(function (k) {
					(k[(k.Unknown = 0)] = "Unknown"), (k[(k.Content = 1)] = "Content");
				})(n || (n = {}));
				class g {
					constructor(L = null) {
						(this.hitTarget = L), (this.type = n.Unknown);
					}
				}
				class p {
					get hitTarget() {
						return this.spanNode;
					}
					constructor(L, D, M) {
						(this.position = L),
							(this.spanNode = D),
							(this.injectedText = M),
							(this.type = n.Content);
					}
				}
				var o;
				(function (k) {
					function L(D, M, N) {
						const A = D.getPositionFromDOMInfo(M, N);
						return A ? new p(A, M, null) : new g(M);
					}
					k.createFromDOMInfo = L;
				})(o || (o = {}));
				class f {
					constructor(L, D) {
						(this.lastViewCursorsRenderData = L),
							(this.lastTextareaPosition = D);
					}
				}
				e.$Uub = f;
				class b {
					static c(L, D = null) {
						return !D && L
							? new m.$iL(L.lineNumber, L.column, L.lineNumber, L.column)
							: (D ?? null);
					}
					static createUnknown(L, D, M) {
						return {
							type: t.MouseTargetType.UNKNOWN,
							element: L,
							mouseColumn: D,
							position: M,
							range: this.c(M),
						};
					}
					static createTextarea(L, D) {
						return {
							type: t.MouseTargetType.TEXTAREA,
							element: L,
							mouseColumn: D,
							position: null,
							range: null,
						};
					}
					static createMargin(L, D, M, N, A, R) {
						return {
							type: L,
							element: D,
							mouseColumn: M,
							position: N,
							range: A,
							detail: R,
						};
					}
					static createViewZone(L, D, M, N, A) {
						return {
							type: L,
							element: D,
							mouseColumn: M,
							position: N,
							range: this.c(N),
							detail: A,
						};
					}
					static createContentText(L, D, M, N, A) {
						return {
							type: t.MouseTargetType.CONTENT_TEXT,
							element: L,
							mouseColumn: D,
							position: M,
							range: this.c(M, N),
							detail: A,
						};
					}
					static createContentEmpty(L, D, M, N) {
						return {
							type: t.MouseTargetType.CONTENT_EMPTY,
							element: L,
							mouseColumn: D,
							position: M,
							range: this.c(M),
							detail: N,
						};
					}
					static createContentWidget(L, D, M) {
						return {
							type: t.MouseTargetType.CONTENT_WIDGET,
							element: L,
							mouseColumn: D,
							position: null,
							range: null,
							detail: M,
						};
					}
					static createScrollbar(L, D, M) {
						return {
							type: t.MouseTargetType.SCROLLBAR,
							element: L,
							mouseColumn: D,
							position: M,
							range: this.c(M),
						};
					}
					static createOverlayWidget(L, D, M) {
						return {
							type: t.MouseTargetType.OVERLAY_WIDGET,
							element: L,
							mouseColumn: D,
							position: null,
							range: null,
							detail: M,
						};
					}
					static createOutsideEditor(L, D, M, N) {
						return {
							type: t.MouseTargetType.OUTSIDE_EDITOR,
							element: null,
							mouseColumn: L,
							position: D,
							range: this.c(D),
							outsidePosition: M,
							outsideDistance: N,
						};
					}
					static f(L) {
						return L === t.MouseTargetType.TEXTAREA
							? "TEXTAREA"
							: L === t.MouseTargetType.GUTTER_GLYPH_MARGIN
								? "GUTTER_GLYPH_MARGIN"
								: L === t.MouseTargetType.GUTTER_LINE_NUMBERS
									? "GUTTER_LINE_NUMBERS"
									: L === t.MouseTargetType.GUTTER_LINE_DECORATIONS
										? "GUTTER_LINE_DECORATIONS"
										: L === t.MouseTargetType.GUTTER_VIEW_ZONE
											? "GUTTER_VIEW_ZONE"
											: L === t.MouseTargetType.CONTENT_TEXT
												? "CONTENT_TEXT"
												: L === t.MouseTargetType.CONTENT_EMPTY
													? "CONTENT_EMPTY"
													: L === t.MouseTargetType.CONTENT_VIEW_ZONE
														? "CONTENT_VIEW_ZONE"
														: L === t.MouseTargetType.CONTENT_WIDGET
															? "CONTENT_WIDGET"
															: L === t.MouseTargetType.OVERVIEW_RULER
																? "OVERVIEW_RULER"
																: L === t.MouseTargetType.SCROLLBAR
																	? "SCROLLBAR"
																	: L === t.MouseTargetType.OVERLAY_WIDGET
																		? "OVERLAY_WIDGET"
																		: "UNKNOWN";
					}
					static toString(L) {
						return (
							this.f(L.type) +
							": " +
							L.position +
							" - " +
							L.range +
							" - " +
							JSON.stringify(L.detail)
						);
					}
				}
				e.$Vub = b;
				class s {
					static isTextArea(L) {
						return (
							L.length === 2 &&
							L[0] === w.PartFingerprint.OverflowGuard &&
							L[1] === w.PartFingerprint.TextArea
						);
					}
					static isChildOfViewLines(L) {
						return (
							L.length >= 4 &&
							L[0] === w.PartFingerprint.OverflowGuard &&
							L[3] === w.PartFingerprint.ViewLines
						);
					}
					static isStrictChildOfViewLines(L) {
						return (
							L.length > 4 &&
							L[0] === w.PartFingerprint.OverflowGuard &&
							L[3] === w.PartFingerprint.ViewLines
						);
					}
					static isChildOfScrollableElement(L) {
						return (
							L.length >= 2 &&
							L[0] === w.PartFingerprint.OverflowGuard &&
							L[1] === w.PartFingerprint.ScrollableElement
						);
					}
					static isChildOfMinimap(L) {
						return (
							L.length >= 2 &&
							L[0] === w.PartFingerprint.OverflowGuard &&
							L[1] === w.PartFingerprint.Minimap
						);
					}
					static isChildOfContentWidgets(L) {
						return (
							L.length >= 4 &&
							L[0] === w.PartFingerprint.OverflowGuard &&
							L[3] === w.PartFingerprint.ContentWidgets
						);
					}
					static isChildOfOverflowGuard(L) {
						return L.length >= 1 && L[0] === w.PartFingerprint.OverflowGuard;
					}
					static isChildOfOverflowingContentWidgets(L) {
						return (
							L.length >= 1 &&
							L[0] === w.PartFingerprint.OverflowingContentWidgets
						);
					}
					static isChildOfOverlayWidgets(L) {
						return (
							L.length >= 2 &&
							L[0] === w.PartFingerprint.OverflowGuard &&
							L[1] === w.PartFingerprint.OverlayWidgets
						);
					}
					static isChildOfOverflowingOverlayWidgets(L) {
						return (
							L.length >= 1 &&
							L[0] === w.PartFingerprint.OverflowingOverlayWidgets
						);
					}
				}
				class l {
					constructor(L, D, M) {
						this.viewModel = L.viewModel;
						const N = L.configuration.options;
						(this.layoutInfo = N.get(C.EditorOption.layoutInfo)),
							(this.viewDomNode = D.viewDomNode),
							(this.lineHeight = N.get(C.EditorOption.lineHeight)),
							(this.stickyTabStops = N.get(C.EditorOption.stickyTabStops)),
							(this.typicalHalfwidthCharacterWidth = N.get(
								C.EditorOption.fontInfo,
							).typicalHalfwidthCharacterWidth),
							(this.lastRenderData = M),
							(this.c = L),
							(this.f = D);
					}
					getZoneAtCoord(L) {
						return l.getZoneAtCoord(this.c, L);
					}
					static getZoneAtCoord(L, D) {
						const M = L.viewLayout.getWhitespaceAtVerticalOffset(D);
						if (M) {
							const N = M.verticalOffset + M.height / 2,
								A = L.viewModel.getLineCount();
							let R = null,
								O,
								B = null;
							return (
								M.afterLineNumber !== A &&
									(B = new d.$hL(M.afterLineNumber + 1, 1)),
								M.afterLineNumber > 0 &&
									(R = new d.$hL(
										M.afterLineNumber,
										L.viewModel.getLineMaxColumn(M.afterLineNumber),
									)),
								B === null
									? (O = R)
									: R === null
										? (O = B)
										: D < N
											? (O = R)
											: (O = B),
								{
									viewZoneId: M.id,
									afterLineNumber: M.afterLineNumber,
									positionBefore: R,
									positionAfter: B,
									position: O,
								}
							);
						}
						return null;
					}
					getFullLineRangeAtCoord(L) {
						if (this.c.viewLayout.isAfterLines(L)) {
							const N = this.c.viewModel.getLineCount(),
								A = this.c.viewModel.getLineMaxColumn(N);
							return { range: new m.$iL(N, A, N, A), isAfterLines: !0 };
						}
						const D = this.c.viewLayout.getLineNumberAtVerticalOffset(L),
							M = this.c.viewModel.getLineMaxColumn(D);
						return { range: new m.$iL(D, 1, D, M), isAfterLines: !1 };
					}
					getLineNumberAtVerticalOffset(L) {
						return this.c.viewLayout.getLineNumberAtVerticalOffset(L);
					}
					isAfterLines(L) {
						return this.c.viewLayout.isAfterLines(L);
					}
					isInTopPadding(L) {
						return this.c.viewLayout.isInTopPadding(L);
					}
					isInBottomPadding(L) {
						return this.c.viewLayout.isInBottomPadding(L);
					}
					getVerticalOffsetForLineNumber(L) {
						return this.c.viewLayout.getVerticalOffsetForLineNumber(L);
					}
					findAttribute(L, D) {
						return l.g(L, D, this.f.viewDomNode);
					}
					static g(L, D, M) {
						for (; L && L !== L.ownerDocument.body; ) {
							if (L.hasAttribute && L.hasAttribute(D)) return L.getAttribute(D);
							if (L === M) return null;
							L = L.parentNode;
						}
						return null;
					}
					getLineWidth(L) {
						return this.f.getLineWidth(L);
					}
					visibleRangeForPosition(L, D) {
						return this.f.visibleRangeForPosition(L, D);
					}
					getPositionFromDOMInfo(L, D) {
						return this.f.getPositionFromDOMInfo(L, D);
					}
					getCurrentScrollTop() {
						return this.c.viewLayout.getCurrentScrollTop();
					}
					getCurrentScrollLeft() {
						return this.c.viewLayout.getCurrentScrollLeft();
					}
				}
				e.$Wub = l;
				class y {
					constructor(L, D, M, N) {
						(this.editorPos = D),
							(this.pos = M),
							(this.relativePos = N),
							(this.mouseVerticalOffset = Math.max(
								0,
								L.getCurrentScrollTop() + this.relativePos.y,
							)),
							(this.mouseContentHorizontalOffset =
								L.getCurrentScrollLeft() +
								this.relativePos.x -
								L.layoutInfo.contentLeft),
							(this.isInMarginArea =
								this.relativePos.x < L.layoutInfo.contentLeft &&
								this.relativePos.x >= L.layoutInfo.glyphMarginLeft),
							(this.isInContentArea = !this.isInMarginArea),
							(this.c = Math.max(
								0,
								I._getMouseColumn(
									this.mouseContentHorizontalOffset,
									L.typicalHalfwidthCharacterWidth,
								),
							));
					}
				}
				class $ extends y {
					get target() {
						return this.h ? this.hitTestResult.value.hitTarget : this.g;
					}
					get targetPath() {
						return (
							this.j !== this.target &&
								((this.j = this.target),
								(this.k = w.$zub.collect(this.target, this.f.viewDomNode))),
							this.k
						);
					}
					constructor(L, D, M, N, A) {
						super(L, D, M, N),
							(this.hitTestResult = new c.$Y(() => I.doHitTest(this.f, this))),
							(this.j = null),
							(this.k = new Uint8Array(0)),
							(this.f = L),
							(this.g = A);
						const R = !!this.g;
						this.h = !R;
					}
					toString() {
						return `pos(${this.pos.x},${this.pos.y}), editorPos(${this.editorPos.x},${this.editorPos.y}), relativePos(${this.relativePos.x},${this.relativePos.y}), mouseVerticalOffset: ${this.mouseVerticalOffset}, mouseContentHorizontalOffset: ${this.mouseContentHorizontalOffset}
	target: ${this.target ? this.target.outerHTML : null}`;
					}
					get wouldBenefitFromHitTestTargetSwitch() {
						return (
							!this.h &&
							this.hitTestResult.value.hitTarget !== null &&
							this.target !== this.hitTestResult.value.hitTarget
						);
					}
					switchToHitTestTarget() {
						this.h = !0;
					}
					l(L = null) {
						return L &&
							L.column < this.f.viewModel.getLineMaxColumn(L.lineNumber)
							? r.$BM.visibleColumnFromColumn(
									this.f.viewModel.getLineContent(L.lineNumber),
									L.column,
									this.f.viewModel.model.getOptions().tabSize,
								) + 1
							: this.c;
					}
					fulfillUnknown(L = null) {
						return b.createUnknown(this.target, this.l(L), L);
					}
					fulfillTextarea() {
						return b.createTextarea(this.target, this.l());
					}
					fulfillMargin(L, D, M, N) {
						return b.createMargin(L, this.target, this.l(D), D, M, N);
					}
					fulfillViewZone(L, D, M) {
						return b.createViewZone(L, this.target, this.l(D), D, M);
					}
					fulfillContentText(L, D, M) {
						return b.createContentText(this.target, this.l(L), L, D, M);
					}
					fulfillContentEmpty(L, D) {
						return b.createContentEmpty(this.target, this.l(L), L, D);
					}
					fulfillContentWidget(L) {
						return b.createContentWidget(this.target, this.l(), L);
					}
					fulfillScrollbar(L) {
						return b.createScrollbar(this.target, this.l(L), L);
					}
					fulfillOverlayWidget(L) {
						return b.createOverlayWidget(this.target, this.l(), L);
					}
				}
				const v = { isAfterLines: !0 };
				function S(k) {
					return { isAfterLines: !1, horizontalDistanceToText: k };
				}
				class I {
					constructor(L, D) {
						(this.c = L), (this.f = D);
					}
					mouseTargetIsWidget(L) {
						const D = L.target,
							M = w.$zub.collect(D, this.f.viewDomNode),
							N = D.parentElement;
						if (N && N.getAttribute("data-lexical-editor") === "true")
							return !0;
						const A = N?.parentElement;
						return !!(
							(A && A.getAttribute("data-lexical-editor") === "true") ||
							s.isChildOfContentWidgets(M) ||
							s.isChildOfOverflowingContentWidgets(M) ||
							s.isChildOfOverlayWidgets(M) ||
							s.isChildOfOverflowingOverlayWidgets(M)
						);
					}
					createMouseTarget(L, D, M, N, A) {
						const R = new l(this.c, this.f, L),
							O = new $(R, D, M, N, A);
						try {
							const B = I.g(R, O);
							if (
								B.type === t.MouseTargetType.CONTENT_TEXT &&
								R.stickyTabStops &&
								B.position !== null
							) {
								const U = I.A(B.position, R.viewModel),
									z = m.$iL.fromPositions(U, U).plusRange(B.range);
								return O.fulfillContentText(U, z, B.detail);
							}
							return B;
						} catch {
							return O.fulfillUnknown();
						}
					}
					static g(L, D) {
						if (D.target === null) return D.fulfillUnknown();
						const M = D;
						let N = null;
						return (
							!s.isChildOfOverflowGuard(D.targetPath) &&
								!s.isChildOfOverflowingContentWidgets(D.targetPath) &&
								!s.isChildOfOverflowingOverlayWidgets(D.targetPath) &&
								(N = N || D.fulfillUnknown()),
							(N = N || I.h(L, M)),
							(N = N || I.j(L, M)),
							(N = N || I.p(L, M)),
							(N = N || I.q(L, M)),
							(N = N || I.l(L, M)),
							(N = N || I.n(L, M)),
							(N = N || I.k(L, M)),
							(N = N || I.m(L, M)),
							(N = N || I.o(L, M)),
							(N = N || I.s(L, M)),
							N || D.fulfillUnknown()
						);
					}
					static h(L, D) {
						if (
							s.isChildOfContentWidgets(D.targetPath) ||
							s.isChildOfOverflowingContentWidgets(D.targetPath)
						) {
							const M = L.findAttribute(D.target, "widgetId");
							return M ? D.fulfillContentWidget(M) : D.fulfillUnknown();
						}
						return null;
					}
					static j(L, D) {
						if (
							s.isChildOfOverlayWidgets(D.targetPath) ||
							s.isChildOfOverflowingOverlayWidgets(D.targetPath)
						) {
							const M = L.findAttribute(D.target, "widgetId");
							return M ? D.fulfillOverlayWidget(M) : D.fulfillUnknown();
						}
						return null;
					}
					static k(L, D) {
						if (D.target) {
							const M = L.lastRenderData.lastViewCursorsRenderData;
							for (const N of M)
								if (D.target === N.domNode)
									return D.fulfillContentText(N.position, null, {
										mightBeForeignElement: !1,
										injectedText: null,
									});
						}
						if (D.isInContentArea) {
							const M = L.lastRenderData.lastViewCursorsRenderData,
								N = D.mouseContentHorizontalOffset,
								A = D.mouseVerticalOffset;
							for (const R of M) {
								if (N < R.contentLeft || N > R.contentLeft + R.width) continue;
								const O = L.getVerticalOffsetForLineNumber(
									R.position.lineNumber,
								);
								if (O <= A && A <= O + R.height)
									return D.fulfillContentText(R.position, null, {
										mightBeForeignElement: !1,
										injectedText: null,
									});
							}
						}
						return null;
					}
					static l(L, D) {
						const M = L.getZoneAtCoord(D.mouseVerticalOffset);
						if (M) {
							const N = D.isInContentArea
								? t.MouseTargetType.CONTENT_VIEW_ZONE
								: t.MouseTargetType.GUTTER_VIEW_ZONE;
							return D.fulfillViewZone(N, M.position, M);
						}
						return null;
					}
					static m(L, D) {
						return s.isTextArea(D.targetPath)
							? L.lastRenderData.lastTextareaPosition
								? D.fulfillContentText(
										L.lastRenderData.lastTextareaPosition,
										null,
										{ mightBeForeignElement: !1, injectedText: null },
									)
								: D.fulfillTextarea()
							: null;
					}
					static n(L, D) {
						if (D.isInMarginArea) {
							const M = L.getFullLineRangeAtCoord(D.mouseVerticalOffset),
								N = M.range.getStartPosition();
							let A = Math.abs(D.relativePos.x);
							const R = {
								isAfterLines: M.isAfterLines,
								glyphMarginLeft: L.layoutInfo.glyphMarginLeft,
								glyphMarginWidth: L.layoutInfo.glyphMarginWidth,
								lineNumbersWidth: L.layoutInfo.lineNumbersWidth,
								offsetX: A,
							};
							if (
								((A -= L.layoutInfo.glyphMarginLeft),
								A <= L.layoutInfo.glyphMarginWidth)
							) {
								const O =
										L.viewModel.coordinatesConverter.convertViewPositionToModelPosition(
											M.range.getStartPosition(),
										),
									B = L.viewModel.glyphLanes.getLanesAtLine(O.lineNumber);
								return (
									(R.glyphMarginLane = B[Math.floor(A / L.lineHeight)]),
									D.fulfillMargin(
										t.MouseTargetType.GUTTER_GLYPH_MARGIN,
										N,
										M.range,
										R,
									)
								);
							}
							return (
								(A -= L.layoutInfo.glyphMarginWidth),
								A <= L.layoutInfo.lineNumbersWidth
									? D.fulfillMargin(
											t.MouseTargetType.GUTTER_LINE_NUMBERS,
											N,
											M.range,
											R,
										)
									: ((A -= L.layoutInfo.lineNumbersWidth),
										D.fulfillMargin(
											t.MouseTargetType.GUTTER_LINE_DECORATIONS,
											N,
											M.range,
											R,
										))
							);
						}
						return null;
					}
					static o(L, D) {
						if (!s.isChildOfViewLines(D.targetPath)) return null;
						if (L.isInTopPadding(D.mouseVerticalOffset))
							return D.fulfillContentEmpty(new d.$hL(1, 1), v);
						if (
							L.isAfterLines(D.mouseVerticalOffset) ||
							L.isInBottomPadding(D.mouseVerticalOffset)
						) {
							const N = L.viewModel.getLineCount(),
								A = L.viewModel.getLineMaxColumn(N);
							return D.fulfillContentEmpty(new d.$hL(N, A), v);
						}
						if (s.isStrictChildOfViewLines(D.targetPath)) {
							const N = L.getLineNumberAtVerticalOffset(D.mouseVerticalOffset);
							if (L.viewModel.getLineLength(N) === 0) {
								const R = L.getLineWidth(N),
									O = S(D.mouseContentHorizontalOffset - R);
								return D.fulfillContentEmpty(new d.$hL(N, 1), O);
							}
							const A = L.getLineWidth(N);
							if (D.mouseContentHorizontalOffset >= A) {
								const R = S(D.mouseContentHorizontalOffset - A),
									O = new d.$hL(N, L.viewModel.getLineMaxColumn(N));
								return D.fulfillContentEmpty(O, R);
							}
						}
						const M = D.hitTestResult.value;
						return M.type === n.Content
							? I.u(L, D, M.spanNode, M.position, M.injectedText)
							: D.wouldBenefitFromHitTestTargetSwitch
								? (D.switchToHitTestTarget(), this.g(L, D))
								: D.fulfillUnknown();
					}
					static p(L, D) {
						if (s.isChildOfMinimap(D.targetPath)) {
							const M = L.getLineNumberAtVerticalOffset(D.mouseVerticalOffset),
								N = L.viewModel.getLineMaxColumn(M);
							return D.fulfillScrollbar(new d.$hL(M, N));
						}
						return null;
					}
					static q(L, D) {
						if (
							s.isChildOfScrollableElement(D.targetPath) &&
							D.target &&
							D.target.nodeType === 1
						) {
							const M = D.target.className;
							if (M && /\b(slider|scrollbar)\b/.test(M)) {
								const N = L.getLineNumberAtVerticalOffset(
										D.mouseVerticalOffset,
									),
									A = L.viewModel.getLineMaxColumn(N);
								return D.fulfillScrollbar(new d.$hL(N, A));
							}
						}
						return null;
					}
					static s(L, D) {
						if (s.isChildOfScrollableElement(D.targetPath)) {
							const M = L.getLineNumberAtVerticalOffset(D.mouseVerticalOffset),
								N = L.viewModel.getLineMaxColumn(M);
							return D.fulfillScrollbar(new d.$hL(M, N));
						}
						return null;
					}
					getMouseColumn(L) {
						const D = this.c.configuration.options,
							M = D.get(C.EditorOption.layoutInfo),
							N =
								this.c.viewLayout.getCurrentScrollLeft() + L.x - M.contentLeft;
						return I._getMouseColumn(
							N,
							D.get(C.EditorOption.fontInfo).typicalHalfwidthCharacterWidth,
						);
					}
					static _getMouseColumn(L, D) {
						return L < 0 ? 1 : Math.round(L / D) + 1;
					}
					static u(L, D, M, N, A) {
						const R = N.lineNumber,
							O = N.column,
							B = L.getLineWidth(R);
						if (D.mouseContentHorizontalOffset > B) {
							const K = S(D.mouseContentHorizontalOffset - B);
							return D.fulfillContentEmpty(N, K);
						}
						const U = L.visibleRangeForPosition(R, O);
						if (!U) return D.fulfillUnknown(N);
						const z = U.left;
						if (Math.abs(D.mouseContentHorizontalOffset - z) < 1)
							return D.fulfillContentText(N, null, {
								mightBeForeignElement: !!A,
								injectedText: A,
							});
						const F = [];
						if ((F.push({ offset: U.left, column: O }), O > 1)) {
							const K = L.visibleRangeForPosition(R, O - 1);
							K && F.push({ offset: K.left, column: O - 1 });
						}
						const x = L.viewModel.getLineMaxColumn(R);
						if (O < x) {
							const K = L.visibleRangeForPosition(R, O + 1);
							K && F.push({ offset: K.left, column: O + 1 });
						}
						F.sort((K, J) => K.offset - J.offset);
						const H = D.pos.toClientCoordinates(u.getWindow(L.viewDomNode)),
							q = M.getBoundingClientRect(),
							V = q.left <= H.clientX && H.clientX <= q.right;
						let G = null;
						for (let K = 1; K < F.length; K++) {
							const J = F[K - 1],
								W = F[K];
							if (
								J.offset <= D.mouseContentHorizontalOffset &&
								D.mouseContentHorizontalOffset <= W.offset
							) {
								G = new m.$iL(R, J.column, R, W.column);
								const X = Math.abs(J.offset - D.mouseContentHorizontalOffset),
									Y = Math.abs(W.offset - D.mouseContentHorizontalOffset);
								N = X < Y ? new d.$hL(R, J.column) : new d.$hL(R, W.column);
								break;
							}
						}
						return D.fulfillContentText(N, G, {
							mightBeForeignElement: !V || !!A,
							injectedText: A,
						});
					}
					static v(L, D) {
						const M = L.getLineNumberAtVerticalOffset(D.mouseVerticalOffset),
							N = L.getVerticalOffsetForLineNumber(M),
							A = N + L.lineHeight;
						if (
							!(M === L.viewModel.getLineCount() && D.mouseVerticalOffset > A)
						) {
							const O = Math.floor((N + A) / 2);
							let B = D.pos.y + (O - D.mouseVerticalOffset);
							B <= D.editorPos.y && (B = D.editorPos.y + 1),
								B >= D.editorPos.y + D.editorPos.height &&
									(B = D.editorPos.y + D.editorPos.height - 1);
							const U = new i.$eub(D.pos.x, B),
								z = this.w(
									L,
									U.toClientCoordinates(u.getWindow(L.viewDomNode)),
								);
							if (z.type === n.Content) return z;
						}
						return this.w(
							L,
							D.pos.toClientCoordinates(u.getWindow(L.viewDomNode)),
						);
					}
					static w(L, D) {
						const M = u.$Igb(L.viewDomNode);
						let N;
						if (
							(M
								? typeof M.caretRangeFromPoint > "u"
									? (N = T(M, D.clientX, D.clientY))
									: (N = M.caretRangeFromPoint(D.clientX, D.clientY))
								: (N = L.viewDomNode.ownerDocument.caretRangeFromPoint(
										D.clientX,
										D.clientY,
									)),
							!N || !N.startContainer)
						)
							return new g();
						const A = N.startContainer;
						if (A.nodeType === A.TEXT_NODE) {
							const R = A.parentNode,
								O = R ? R.parentNode : null,
								B = O ? O.parentNode : null;
							return (B && B.nodeType === B.ELEMENT_NODE
								? B.className
								: null) === E.$Rub.CLASS_NAME
								? o.createFromDOMInfo(L, R, N.startOffset)
								: new g(A.parentNode);
						} else if (A.nodeType === A.ELEMENT_NODE) {
							const R = A.parentNode,
								O = R ? R.parentNode : null;
							return (O && O.nodeType === O.ELEMENT_NODE
								? O.className
								: null) === E.$Rub.CLASS_NAME
								? o.createFromDOMInfo(L, A, A.textContent.length)
								: new g(A);
						}
						return new g();
					}
					static z(L, D) {
						const M = L.viewDomNode.ownerDocument.caretPositionFromPoint(
							D.clientX,
							D.clientY,
						);
						if (M.offsetNode.nodeType === M.offsetNode.TEXT_NODE) {
							const N = M.offsetNode.parentNode,
								A = N ? N.parentNode : null,
								R = A ? A.parentNode : null;
							return (R && R.nodeType === R.ELEMENT_NODE
								? R.className
								: null) === E.$Rub.CLASS_NAME
								? o.createFromDOMInfo(L, M.offsetNode.parentNode, M.offset)
								: new g(M.offsetNode.parentNode);
						}
						if (M.offsetNode.nodeType === M.offsetNode.ELEMENT_NODE) {
							const N = M.offsetNode.parentNode,
								A = N && N.nodeType === N.ELEMENT_NODE ? N.className : null,
								R = N ? N.parentNode : null,
								O = R && R.nodeType === R.ELEMENT_NODE ? R.className : null;
							if (A === E.$Rub.CLASS_NAME) {
								const B =
									M.offsetNode.childNodes[
										Math.min(M.offset, M.offsetNode.childNodes.length - 1)
									];
								if (B) return o.createFromDOMInfo(L, B, 0);
							} else if (O === E.$Rub.CLASS_NAME)
								return o.createFromDOMInfo(L, M.offsetNode, 0);
						}
						return new g(M.offsetNode);
					}
					static A(L, D) {
						const M = D.getLineContent(L.lineNumber),
							{ tabSize: N } = D.model.getOptions(),
							A = a.$Btb.atomicPosition(
								M,
								L.column - 1,
								N,
								a.Direction.Nearest,
							);
						return A !== -1 ? new d.$hL(L.lineNumber, A + 1) : L;
					}
					static doHitTest(L, D) {
						let M = new g();
						if (
							(typeof L.viewDomNode.ownerDocument.caretRangeFromPoint ==
							"function"
								? (M = this.v(L, D))
								: L.viewDomNode.ownerDocument.caretPositionFromPoint &&
									(M = this.z(
										L,
										D.pos.toClientCoordinates(u.getWindow(L.viewDomNode)),
									)),
							M.type === n.Content)
						) {
							const N = L.viewModel.getInjectedTextAt(M.position),
								A = L.viewModel.normalizePosition(
									M.position,
									h.PositionAffinity.None,
								);
							(N || !A.equals(M.position)) && (M = new p(A, M.spanNode, N));
						}
						return M;
					}
				}
				e.$Xub = I;
				function T(k, L, D) {
					const M = document.createRange();
					let N = k.elementFromPoint(L, D);
					if (N !== null) {
						for (
							;
							N &&
							N.firstChild &&
							N.firstChild.nodeType !== N.firstChild.TEXT_NODE &&
							N.lastChild &&
							N.lastChild.firstChild;
						)
							N = N.lastChild;
						const A = N.getBoundingClientRect(),
							R = u.getWindow(N),
							O = R.getComputedStyle(N, null).getPropertyValue("font-style"),
							B = R.getComputedStyle(N, null).getPropertyValue("font-variant"),
							U = R.getComputedStyle(N, null).getPropertyValue("font-weight"),
							z = R.getComputedStyle(N, null).getPropertyValue("font-size"),
							F = R.getComputedStyle(N, null).getPropertyValue("line-height"),
							x = R.getComputedStyle(N, null).getPropertyValue("font-family"),
							H = `${O} ${B} ${U} ${z}/${F} ${x}`,
							q = N.innerText;
						let V = A.left,
							G = 0,
							K;
						if (L > A.left + A.width) G = q.length;
						else {
							const J = P.getInstance();
							for (let W = 0; W < q.length + 1; W++) {
								if (
									((K = J.getCharWidth(q.charAt(W), H) / 2), (V += K), L < V)
								) {
									G = W;
									break;
								}
								V += K;
							}
						}
						M.setStart(N.firstChild, G), M.setEnd(N.firstChild, G);
					}
					return M;
				}
				class P {
					static {
						this.c = null;
					}
					static getInstance() {
						return P.c || (P.c = new P()), P.c;
					}
					constructor() {
						(this.f = {}), (this.g = document.createElement("canvas"));
					}
					getCharWidth(L, D) {
						const M = L + D;
						if (this.f[M]) return this.f[M];
						const N = this.g.getContext("2d");
						N.font = D;
						const R = N.measureText(L).width;
						return (this.f[M] = R), R;
					}
				}
			},
		)

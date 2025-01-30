import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/types.js';
import '../cursorCommon.js';
import './cursorMoveOperations.js';
import './cursorWordOperations.js';
import '../core/position.js';
import '../core/range.js';
define(
			de[1193],
			he([1, 0, 28, 346, 1192, 944, 48, 17]),
			function (ce /*require*/,
 e /*exports*/,
 t /*types*/,
 i /*cursorCommon*/,
 w /*cursorMoveOperations*/,
 E /*cursorWordOperations*/,
 C /*position*/,
 d /*range*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.CursorMove = e.$Htb = void 0),
					(t = mt(t));
				class m {
					static addCursorDown(a, h, c) {
						const n = [];
						let g = 0;
						for (let p = 0, o = h.length; p < o; p++) {
							const f = h[p];
							(n[g++] = new i.$ysb(f.modelState, f.viewState)),
								c
									? (n[g++] = i.$ysb.fromModelState(
											w.$Dtb.translateDown(
												a.cursorConfig,
												a.model,
												f.modelState,
											),
										))
									: (n[g++] = i.$ysb.fromViewState(
											w.$Dtb.translateDown(a.cursorConfig, a, f.viewState),
										));
						}
						return n;
					}
					static addCursorUp(a, h, c) {
						const n = [];
						let g = 0;
						for (let p = 0, o = h.length; p < o; p++) {
							const f = h[p];
							(n[g++] = new i.$ysb(f.modelState, f.viewState)),
								c
									? (n[g++] = i.$ysb.fromModelState(
											w.$Dtb.translateUp(a.cursorConfig, a.model, f.modelState),
										))
									: (n[g++] = i.$ysb.fromViewState(
											w.$Dtb.translateUp(a.cursorConfig, a, f.viewState),
										));
						}
						return n;
					}
					static moveToBeginningOfLine(a, h, c) {
						const n = [];
						for (let g = 0, p = h.length; g < p; g++) {
							const o = h[g];
							n[g] = this.a(a, o, c);
						}
						return n;
					}
					static a(a, h, c) {
						const n = h.viewState.position.column,
							g = h.modelState.position.column,
							p = n === g,
							o = h.viewState.position.lineNumber,
							f = a.getLineFirstNonWhitespaceColumn(o);
						return !p && !(n === f) ? this.b(a, h, c) : this.c(a, h, c);
					}
					static b(a, h, c) {
						return i.$ysb.fromViewState(
							w.$Dtb.moveToBeginningOfLine(a.cursorConfig, a, h.viewState, c),
						);
					}
					static c(a, h, c) {
						return i.$ysb.fromModelState(
							w.$Dtb.moveToBeginningOfLine(
								a.cursorConfig,
								a.model,
								h.modelState,
								c,
							),
						);
					}
					static moveToEndOfLine(a, h, c, n) {
						const g = [];
						for (let p = 0, o = h.length; p < o; p++) {
							const f = h[p];
							g[p] = this.d(a, f, c, n);
						}
						return g;
					}
					static d(a, h, c, n) {
						const g = h.viewState.position,
							p = a.getLineMaxColumn(g.lineNumber),
							o = g.column === p,
							f = h.modelState.position,
							b = a.model.getLineMaxColumn(f.lineNumber),
							s = p - g.column === b - f.column;
						return o || s ? this.f(a, h, c, n) : this.e(a, h, c, n);
					}
					static e(a, h, c, n) {
						return i.$ysb.fromViewState(
							w.$Dtb.moveToEndOfLine(a.cursorConfig, a, h.viewState, c, n),
						);
					}
					static f(a, h, c, n) {
						return i.$ysb.fromModelState(
							w.$Dtb.moveToEndOfLine(
								a.cursorConfig,
								a.model,
								h.modelState,
								c,
								n,
							),
						);
					}
					static expandLineSelection(a, h) {
						const c = [];
						for (let n = 0, g = h.length; n < g; n++) {
							const p = h[n],
								o = p.modelState.selection.startLineNumber,
								f = a.model.getLineCount();
							let b = p.modelState.selection.endLineNumber,
								s;
							b === f ? (s = a.model.getLineMaxColumn(f)) : (b++, (s = 1)),
								(c[n] = i.$ysb.fromModelState(
									new i.$Bsb(
										new d.$iL(o, 1, o, 1),
										i.SelectionStartKind.Simple,
										0,
										new C.$hL(b, s),
										0,
									),
								));
						}
						return c;
					}
					static moveToBeginningOfBuffer(a, h, c) {
						const n = [];
						for (let g = 0, p = h.length; g < p; g++) {
							const o = h[g];
							n[g] = i.$ysb.fromModelState(
								w.$Dtb.moveToBeginningOfBuffer(
									a.cursorConfig,
									a.model,
									o.modelState,
									c,
								),
							);
						}
						return n;
					}
					static moveToEndOfBuffer(a, h, c) {
						const n = [];
						for (let g = 0, p = h.length; g < p; g++) {
							const o = h[g];
							n[g] = i.$ysb.fromModelState(
								w.$Dtb.moveToEndOfBuffer(
									a.cursorConfig,
									a.model,
									o.modelState,
									c,
								),
							);
						}
						return n;
					}
					static selectAll(a, h) {
						const c = a.model.getLineCount(),
							n = a.model.getLineMaxColumn(c);
						return i.$ysb.fromModelState(
							new i.$Bsb(
								new d.$iL(1, 1, 1, 1),
								i.SelectionStartKind.Simple,
								0,
								new C.$hL(c, n),
								0,
							),
						);
					}
					static line(a, h, c, n, g) {
						const p = a.model.validatePosition(n),
							o = g
								? a.coordinatesConverter.validateViewPosition(
										new C.$hL(g.lineNumber, g.column),
										p,
									)
								: a.coordinatesConverter.convertModelPositionToViewPosition(p);
						if (!c) {
							const b = a.model.getLineCount();
							let s = p.lineNumber + 1,
								l = 1;
							return (
								s > b && ((s = b), (l = a.model.getLineMaxColumn(s))),
								i.$ysb.fromModelState(
									new i.$Bsb(
										new d.$iL(p.lineNumber, 1, s, l),
										i.SelectionStartKind.Line,
										0,
										new C.$hL(s, l),
										0,
									),
								)
							);
						}
						const f = h.modelState.selectionStart.getStartPosition().lineNumber;
						if (p.lineNumber < f)
							return i.$ysb.fromViewState(
								h.viewState.move(!0, o.lineNumber, 1, 0),
							);
						if (p.lineNumber > f) {
							const b = a.getLineCount();
							let s = o.lineNumber + 1,
								l = 1;
							return (
								s > b && ((s = b), (l = a.getLineMaxColumn(s))),
								i.$ysb.fromViewState(h.viewState.move(!0, s, l, 0))
							);
						} else {
							const b = h.modelState.selectionStart.getEndPosition();
							return i.$ysb.fromModelState(
								h.modelState.move(!0, b.lineNumber, b.column, 0),
							);
						}
					}
					static word(a, h, c, n) {
						const g = a.model.validatePosition(n);
						return i.$ysb.fromModelState(
							E.$Ftb.word(a.cursorConfig, a.model, h.modelState, c, g),
						);
					}
					static cancelSelection(a, h) {
						if (!h.modelState.hasSelection())
							return new i.$ysb(h.modelState, h.viewState);
						const c = h.viewState.position.lineNumber,
							n = h.viewState.position.column;
						return i.$ysb.fromViewState(
							new i.$Bsb(
								new d.$iL(c, n, c, n),
								i.SelectionStartKind.Simple,
								0,
								new C.$hL(c, n),
								0,
							),
						);
					}
					static moveTo(a, h, c, n, g) {
						if (c) {
							if (h.modelState.selectionStartKind === i.SelectionStartKind.Word)
								return this.word(a, h, c, n);
							if (h.modelState.selectionStartKind === i.SelectionStartKind.Line)
								return this.line(a, h, c, n, g);
						}
						const p = a.model.validatePosition(n),
							o = g
								? a.coordinatesConverter.validateViewPosition(
										new C.$hL(g.lineNumber, g.column),
										p,
									)
								: a.coordinatesConverter.convertModelPositionToViewPosition(p);
						return i.$ysb.fromViewState(
							h.viewState.move(c, o.lineNumber, o.column, 0),
						);
					}
					static simpleMove(a, h, c, n, g, p) {
						switch (c) {
							case r.Direction.Left:
								return p === r.Unit.HalfLine
									? this.k(a, h, n)
									: this.j(a, h, n, g);
							case r.Direction.Right:
								return p === r.Unit.HalfLine
									? this.m(a, h, n)
									: this.l(a, h, n, g);
							case r.Direction.Up:
								return p === r.Unit.WrappedLine
									? this.p(a, h, n, g)
									: this.q(a, h, n, g);
							case r.Direction.Down:
								return p === r.Unit.WrappedLine
									? this.n(a, h, n, g)
									: this.o(a, h, n, g);
							case r.Direction.PrevBlankLine:
								return p === r.Unit.WrappedLine
									? h.map((o) =>
											i.$ysb.fromViewState(
												w.$Dtb.moveToPrevBlankLine(
													a.cursorConfig,
													a,
													o.viewState,
													n,
												),
											),
										)
									: h.map((o) =>
											i.$ysb.fromModelState(
												w.$Dtb.moveToPrevBlankLine(
													a.cursorConfig,
													a.model,
													o.modelState,
													n,
												),
											),
										);
							case r.Direction.NextBlankLine:
								return p === r.Unit.WrappedLine
									? h.map((o) =>
											i.$ysb.fromViewState(
												w.$Dtb.moveToNextBlankLine(
													a.cursorConfig,
													a,
													o.viewState,
													n,
												),
											),
										)
									: h.map((o) =>
											i.$ysb.fromModelState(
												w.$Dtb.moveToNextBlankLine(
													a.cursorConfig,
													a.model,
													o.modelState,
													n,
												),
											),
										);
							case r.Direction.WrappedLineStart:
								return this.t(a, h, n);
							case r.Direction.WrappedLineFirstNonWhitespaceCharacter:
								return this.u(a, h, n);
							case r.Direction.WrappedLineColumnCenter:
								return this.v(a, h, n);
							case r.Direction.WrappedLineEnd:
								return this.w(a, h, n);
							case r.Direction.WrappedLineLastNonWhitespaceCharacter:
								return this.x(a, h, n);
							default:
								return null;
						}
					}
					static viewportMove(a, h, c, n, g) {
						const p = a.getCompletelyVisibleViewRange(),
							o = a.coordinatesConverter.convertViewRangeToModelRange(p);
						switch (c) {
							case r.Direction.ViewPortTop: {
								const f = this.g(a.model, o, g),
									b = a.model.getLineFirstNonWhitespaceColumn(f);
								return [this.s(a, h[0], n, f, b)];
							}
							case r.Direction.ViewPortBottom: {
								const f = this.h(a.model, o, g),
									b = a.model.getLineFirstNonWhitespaceColumn(f);
								return [this.s(a, h[0], n, f, b)];
							}
							case r.Direction.ViewPortCenter: {
								const f = Math.round((o.startLineNumber + o.endLineNumber) / 2),
									b = a.model.getLineFirstNonWhitespaceColumn(f);
								return [this.s(a, h[0], n, f, b)];
							}
							case r.Direction.ViewPortIfOutside: {
								const f = [];
								for (let b = 0, s = h.length; b < s; b++) {
									const l = h[b];
									f[b] = this.findPositionInViewportIfOutside(a, l, p, n);
								}
								return f;
							}
							default:
								return null;
						}
					}
					static findPositionInViewportIfOutside(a, h, c, n) {
						const g = h.viewState.position.lineNumber;
						if (c.startLineNumber <= g && g <= c.endLineNumber - 1)
							return new i.$ysb(h.modelState, h.viewState);
						{
							let p;
							g > c.endLineNumber - 1
								? (p = c.endLineNumber - 1)
								: g < c.startLineNumber
									? (p = c.startLineNumber)
									: (p = g);
							const o = w.$Dtb.vertical(
								a.cursorConfig,
								a,
								g,
								h.viewState.position.column,
								h.viewState.leftoverVisibleColumns,
								p,
								!1,
							);
							return i.$ysb.fromViewState(
								h.viewState.move(
									n,
									o.lineNumber,
									o.column,
									o.leftoverVisibleColumns,
								),
							);
						}
					}
					static g(a, h, c) {
						let n = h.startLineNumber;
						return (
							h.startColumn !== a.getLineMinColumn(n) && n++,
							Math.min(h.endLineNumber, n + c - 1)
						);
					}
					static h(a, h, c) {
						let n = h.startLineNumber;
						return (
							h.startColumn !== a.getLineMinColumn(n) && n++,
							Math.max(n, h.endLineNumber - c + 1)
						);
					}
					static j(a, h, c, n) {
						return h.map((g) =>
							i.$ysb.fromViewState(
								w.$Dtb.moveLeft(a.cursorConfig, a, g.viewState, c, n),
							),
						);
					}
					static k(a, h, c) {
						const n = [];
						for (let g = 0, p = h.length; g < p; g++) {
							const o = h[g],
								f = o.viewState.position.lineNumber,
								b = Math.round(a.getLineLength(f) / 2);
							n[g] = i.$ysb.fromViewState(
								w.$Dtb.moveLeft(a.cursorConfig, a, o.viewState, c, b),
							);
						}
						return n;
					}
					static l(a, h, c, n) {
						return h.map((g) =>
							i.$ysb.fromViewState(
								w.$Dtb.moveRight(a.cursorConfig, a, g.viewState, c, n),
							),
						);
					}
					static m(a, h, c) {
						const n = [];
						for (let g = 0, p = h.length; g < p; g++) {
							const o = h[g],
								f = o.viewState.position.lineNumber,
								b = Math.round(a.getLineLength(f) / 2);
							n[g] = i.$ysb.fromViewState(
								w.$Dtb.moveRight(a.cursorConfig, a, o.viewState, c, b),
							);
						}
						return n;
					}
					static n(a, h, c, n) {
						const g = [];
						for (let p = 0, o = h.length; p < o; p++) {
							const f = h[p];
							g[p] = i.$ysb.fromViewState(
								w.$Dtb.moveDown(a.cursorConfig, a, f.viewState, c, n),
							);
						}
						return g;
					}
					static o(a, h, c, n) {
						const g = [];
						for (let p = 0, o = h.length; p < o; p++) {
							const f = h[p];
							g[p] = i.$ysb.fromModelState(
								w.$Dtb.moveDown(a.cursorConfig, a.model, f.modelState, c, n),
							);
						}
						return g;
					}
					static p(a, h, c, n) {
						const g = [];
						for (let p = 0, o = h.length; p < o; p++) {
							const f = h[p];
							g[p] = i.$ysb.fromViewState(
								w.$Dtb.moveUp(a.cursorConfig, a, f.viewState, c, n),
							);
						}
						return g;
					}
					static q(a, h, c, n) {
						const g = [];
						for (let p = 0, o = h.length; p < o; p++) {
							const f = h[p];
							g[p] = i.$ysb.fromModelState(
								w.$Dtb.moveUp(a.cursorConfig, a.model, f.modelState, c, n),
							);
						}
						return g;
					}
					static r(a, h, c, n, g) {
						return i.$ysb.fromViewState(h.viewState.move(c, n, g, 0));
					}
					static s(a, h, c, n, g) {
						return i.$ysb.fromModelState(h.modelState.move(c, n, g, 0));
					}
					static t(a, h, c) {
						const n = [];
						for (let g = 0, p = h.length; g < p; g++) {
							const o = h[g],
								f = o.viewState.position.lineNumber,
								b = a.getLineMinColumn(f);
							n[g] = this.r(a, o, c, f, b);
						}
						return n;
					}
					static u(a, h, c) {
						const n = [];
						for (let g = 0, p = h.length; g < p; g++) {
							const o = h[g],
								f = o.viewState.position.lineNumber,
								b = a.getLineFirstNonWhitespaceColumn(f);
							n[g] = this.r(a, o, c, f, b);
						}
						return n;
					}
					static v(a, h, c) {
						const n = [];
						for (let g = 0, p = h.length; g < p; g++) {
							const o = h[g],
								f = o.viewState.position.lineNumber,
								b = Math.round(
									(a.getLineMaxColumn(f) + a.getLineMinColumn(f)) / 2,
								);
							n[g] = this.r(a, o, c, f, b);
						}
						return n;
					}
					static w(a, h, c) {
						const n = [];
						for (let g = 0, p = h.length; g < p; g++) {
							const o = h[g],
								f = o.viewState.position.lineNumber,
								b = a.getLineMaxColumn(f);
							n[g] = this.r(a, o, c, f, b);
						}
						return n;
					}
					static x(a, h, c) {
						const n = [];
						for (let g = 0, p = h.length; g < p; g++) {
							const o = h[g],
								f = o.viewState.position.lineNumber,
								b = a.getLineLastNonWhitespaceColumn(f);
							n[g] = this.r(a, o, c, f, b);
						}
						return n;
					}
				}
				e.$Htb = m;
				var r;
				(function (u) {
					const a = function (g) {
						if (!t.$ng(g)) return !1;
						const p = g;
						return !(
							!t.$lg(p.to) ||
							(!t.$sg(p.select) && !t.$rg(p.select)) ||
							(!t.$sg(p.by) && !t.$lg(p.by)) ||
							(!t.$sg(p.value) && !t.$pg(p.value))
						);
					};
					(u.metadata = {
						description: "Move cursor to a logical position in the view",
						args: [
							{
								name: "Cursor move argument object",
								description: `Property-value pairs that can be passed through this argument:
					* 'to': A mandatory logical position value providing where to move the cursor.
						\`\`\`
						'left', 'right', 'up', 'down', 'prevBlankLine', 'nextBlankLine',
						'wrappedLineStart', 'wrappedLineEnd', 'wrappedLineColumnCenter'
						'wrappedLineFirstNonWhitespaceCharacter', 'wrappedLineLastNonWhitespaceCharacter'
						'viewPortTop', 'viewPortCenter', 'viewPortBottom', 'viewPortIfOutside'
						\`\`\`
					* 'by': Unit to move. Default is computed based on 'to' value.
						\`\`\`
						'line', 'wrappedLine', 'character', 'halfLine'
						\`\`\`
					* 'value': Number of units to move. Default is '1'.
					* 'select': If 'true' makes the selection. Default is 'false'.
				`,
								constraint: a,
								schema: {
									type: "object",
									required: ["to"],
									properties: {
										to: {
											type: "string",
											enum: [
												"left",
												"right",
												"up",
												"down",
												"prevBlankLine",
												"nextBlankLine",
												"wrappedLineStart",
												"wrappedLineEnd",
												"wrappedLineColumnCenter",
												"wrappedLineFirstNonWhitespaceCharacter",
												"wrappedLineLastNonWhitespaceCharacter",
												"viewPortTop",
												"viewPortCenter",
												"viewPortBottom",
												"viewPortIfOutside",
											],
										},
										by: {
											type: "string",
											enum: ["line", "wrappedLine", "character", "halfLine"],
										},
										value: { type: "number", default: 1 },
										select: { type: "boolean", default: !1 },
									},
								},
							},
						],
					}),
						(u.RawDirection = {
							Left: "left",
							Right: "right",
							Up: "up",
							Down: "down",
							PrevBlankLine: "prevBlankLine",
							NextBlankLine: "nextBlankLine",
							WrappedLineStart: "wrappedLineStart",
							WrappedLineFirstNonWhitespaceCharacter:
								"wrappedLineFirstNonWhitespaceCharacter",
							WrappedLineColumnCenter: "wrappedLineColumnCenter",
							WrappedLineEnd: "wrappedLineEnd",
							WrappedLineLastNonWhitespaceCharacter:
								"wrappedLineLastNonWhitespaceCharacter",
							ViewPortTop: "viewPortTop",
							ViewPortCenter: "viewPortCenter",
							ViewPortBottom: "viewPortBottom",
							ViewPortIfOutside: "viewPortIfOutside",
						}),
						(u.RawUnit = {
							Line: "line",
							WrappedLine: "wrappedLine",
							Character: "character",
							HalfLine: "halfLine",
						});
					function h(g) {
						if (!g.to) return null;
						let p;
						switch (g.to) {
							case u.RawDirection.Left:
								p = c.Left;
								break;
							case u.RawDirection.Right:
								p = c.Right;
								break;
							case u.RawDirection.Up:
								p = c.Up;
								break;
							case u.RawDirection.Down:
								p = c.Down;
								break;
							case u.RawDirection.PrevBlankLine:
								p = c.PrevBlankLine;
								break;
							case u.RawDirection.NextBlankLine:
								p = c.NextBlankLine;
								break;
							case u.RawDirection.WrappedLineStart:
								p = c.WrappedLineStart;
								break;
							case u.RawDirection.WrappedLineFirstNonWhitespaceCharacter:
								p = c.WrappedLineFirstNonWhitespaceCharacter;
								break;
							case u.RawDirection.WrappedLineColumnCenter:
								p = c.WrappedLineColumnCenter;
								break;
							case u.RawDirection.WrappedLineEnd:
								p = c.WrappedLineEnd;
								break;
							case u.RawDirection.WrappedLineLastNonWhitespaceCharacter:
								p = c.WrappedLineLastNonWhitespaceCharacter;
								break;
							case u.RawDirection.ViewPortTop:
								p = c.ViewPortTop;
								break;
							case u.RawDirection.ViewPortBottom:
								p = c.ViewPortBottom;
								break;
							case u.RawDirection.ViewPortCenter:
								p = c.ViewPortCenter;
								break;
							case u.RawDirection.ViewPortIfOutside:
								p = c.ViewPortIfOutside;
								break;
							default:
								return null;
						}
						let o = n.None;
						switch (g.by) {
							case u.RawUnit.Line:
								o = n.Line;
								break;
							case u.RawUnit.WrappedLine:
								o = n.WrappedLine;
								break;
							case u.RawUnit.Character:
								o = n.Character;
								break;
							case u.RawUnit.HalfLine:
								o = n.HalfLine;
								break;
						}
						return {
							direction: p,
							unit: o,
							select: !!g.select,
							value: g.value || 1,
						};
					}
					u.parse = h;
					let c;
					(function (g) {
						(g[(g.Left = 0)] = "Left"),
							(g[(g.Right = 1)] = "Right"),
							(g[(g.Up = 2)] = "Up"),
							(g[(g.Down = 3)] = "Down"),
							(g[(g.PrevBlankLine = 4)] = "PrevBlankLine"),
							(g[(g.NextBlankLine = 5)] = "NextBlankLine"),
							(g[(g.WrappedLineStart = 6)] = "WrappedLineStart"),
							(g[(g.WrappedLineFirstNonWhitespaceCharacter = 7)] =
								"WrappedLineFirstNonWhitespaceCharacter"),
							(g[(g.WrappedLineColumnCenter = 8)] = "WrappedLineColumnCenter"),
							(g[(g.WrappedLineEnd = 9)] = "WrappedLineEnd"),
							(g[(g.WrappedLineLastNonWhitespaceCharacter = 10)] =
								"WrappedLineLastNonWhitespaceCharacter"),
							(g[(g.ViewPortTop = 11)] = "ViewPortTop"),
							(g[(g.ViewPortCenter = 12)] = "ViewPortCenter"),
							(g[(g.ViewPortBottom = 13)] = "ViewPortBottom"),
							(g[(g.ViewPortIfOutside = 14)] = "ViewPortIfOutside");
					})((c = u.Direction || (u.Direction = {})));
					let n;
					(function (g) {
						(g[(g.None = 0)] = "None"),
							(g[(g.Line = 1)] = "Line"),
							(g[(g.WrappedLine = 2)] = "WrappedLine"),
							(g[(g.Character = 3)] = "Character"),
							(g[(g.HalfLine = 4)] = "HalfLine");
					})((n = u.Unit || (u.Unit = {})));
				})(r || (e.CursorMove = r = {}));
			},
		),
		
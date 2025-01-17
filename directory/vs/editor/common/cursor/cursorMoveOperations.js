import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/strings.js';
import '../../../base/common/uint.js';
import '../core/cursorColumns.js';
import '../core/position.js';
import '../core/range.js';
import './cursorAtomicMoveOperations.js';
import '../cursorCommon.js';
import '../model.js';
define(
			de[1192],
			he([1, 0, 37, 210, 435, 48, 17, 1528, 346, 64]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Dtb = e.$Ctb = void 0),
					(t = mt(t));
				class u {
					constructor(c, n, g) {
						(this._cursorPositionBrand = void 0),
							(this.lineNumber = c),
							(this.column = n),
							(this.leftoverVisibleColumns = g);
					}
				}
				e.$Ctb = u;
				class a {
					static leftPosition(c, n) {
						if (n.column > c.getLineMinColumn(n.lineNumber))
							return n.delta(
								void 0,
								-t.$Xf(c.getLineContent(n.lineNumber), n.column - 1),
							);
						if (n.lineNumber > 1) {
							const g = n.lineNumber - 1;
							return new E.$hL(g, c.getLineMaxColumn(g));
						} else return n;
					}
					static a(c, n, g) {
						if (n.column <= c.getLineIndentColumn(n.lineNumber)) {
							const p = c.getLineMinColumn(n.lineNumber),
								o = c.getLineContent(n.lineNumber),
								f = d.$Btb.atomicPosition(o, n.column - 1, g, d.Direction.Left);
							if (f !== -1 && f + 1 >= p) return new E.$hL(n.lineNumber, f + 1);
						}
						return this.leftPosition(c, n);
					}
					static b(c, n, g) {
						const p = c.stickyTabStops
							? a.a(n, g, c.tabSize)
							: a.leftPosition(n, g);
						return new u(p.lineNumber, p.column, 0);
					}
					static moveLeft(c, n, g, p, o) {
						let f, b;
						if (g.hasSelection() && !p)
							(f = g.selection.startLineNumber), (b = g.selection.startColumn);
						else {
							const s = g.position.delta(void 0, -(o - 1)),
								l = n.normalizePosition(a.c(s, n), r.PositionAffinity.Left),
								y = a.b(c, n, l);
							(f = y.lineNumber), (b = y.column);
						}
						return g.move(p, f, b, 0);
					}
					static c(c, n) {
						return new E.$hL(
							c.lineNumber,
							a.d(
								c.column,
								n.getLineMinColumn(c.lineNumber),
								n.getLineMaxColumn(c.lineNumber),
							),
						);
					}
					static d(c, n, g) {
						return c < n ? n : c > g ? g : c;
					}
					static rightPosition(c, n, g) {
						return (
							g < c.getLineMaxColumn(n)
								? (g = g + t.$Wf(c.getLineContent(n), g - 1))
								: n < c.getLineCount() &&
									((n = n + 1), (g = c.getLineMinColumn(n))),
							new E.$hL(n, g)
						);
					}
					static rightPositionAtomicSoftTabs(c, n, g, p, o) {
						if (g < c.getLineIndentColumn(n)) {
							const f = c.getLineContent(n),
								b = d.$Btb.atomicPosition(f, g - 1, p, d.Direction.Right);
							if (b !== -1) return new E.$hL(n, b + 1);
						}
						return this.rightPosition(c, n, g);
					}
					static right(c, n, g) {
						const p = c.stickyTabStops
							? a.rightPositionAtomicSoftTabs(
									n,
									g.lineNumber,
									g.column,
									c.tabSize,
									c.indentSize,
								)
							: a.rightPosition(n, g.lineNumber, g.column);
						return new u(p.lineNumber, p.column, 0);
					}
					static moveRight(c, n, g, p, o) {
						let f, b;
						if (g.hasSelection() && !p)
							(f = g.selection.endLineNumber), (b = g.selection.endColumn);
						else {
							const s = g.position.delta(void 0, o - 1),
								l = n.normalizePosition(a.c(s, n), r.PositionAffinity.Right),
								y = a.right(c, n, l);
							(f = y.lineNumber), (b = y.column);
						}
						return g.move(p, f, b, 0);
					}
					static vertical(c, n, g, p, o, f, b, s) {
						const l =
								w.$BM.visibleColumnFromColumn(
									n.getLineContent(g),
									p,
									c.tabSize,
								) + o,
							y = n.getLineCount(),
							$ = g === 1 && p === 1,
							v = g === y && p === n.getLineMaxColumn(g),
							S = f < g ? $ : v;
						if (
							((g = f),
							g < 1
								? ((g = 1),
									b
										? (p = n.getLineMinColumn(g))
										: (p = Math.min(n.getLineMaxColumn(g), p)))
								: g > y
									? ((g = y),
										b
											? (p = n.getLineMaxColumn(g))
											: (p = Math.min(n.getLineMaxColumn(g), p)))
									: (p = c.columnFromVisibleColumn(n, g, l)),
							S
								? (o = 0)
								: (o =
										l -
										w.$BM.visibleColumnFromColumn(
											n.getLineContent(g),
											p,
											c.tabSize,
										)),
							s !== void 0)
						) {
							const I = new E.$hL(g, p),
								T = n.normalizePosition(I, s);
							(o = o + (p - T.column)), (g = T.lineNumber), (p = T.column);
						}
						return new u(g, p, o);
					}
					static down(c, n, g, p, o, f, b) {
						return this.vertical(
							c,
							n,
							g,
							p,
							o,
							g + f,
							b,
							r.PositionAffinity.RightOfInjectedText,
						);
					}
					static moveDown(c, n, g, p, o) {
						let f, b;
						g.hasSelection() && !p
							? ((f = g.selection.endLineNumber), (b = g.selection.endColumn))
							: ((f = g.position.lineNumber), (b = g.position.column));
						let s = 0,
							l;
						do
							if (
								((l = a.down(c, n, f + s, b, g.leftoverVisibleColumns, o, !0)),
								n.normalizePosition(
									new E.$hL(l.lineNumber, l.column),
									r.PositionAffinity.None,
								).lineNumber > f)
							)
								break;
						while (s++ < 10 && f + s < n.getLineCount());
						return g.move(p, l.lineNumber, l.column, l.leftoverVisibleColumns);
					}
					static translateDown(c, n, g) {
						const p = g.selection,
							o = a.down(
								c,
								n,
								p.selectionStartLineNumber,
								p.selectionStartColumn,
								g.selectionStartLeftoverVisibleColumns,
								1,
								!1,
							),
							f = a.down(
								c,
								n,
								p.positionLineNumber,
								p.positionColumn,
								g.leftoverVisibleColumns,
								1,
								!1,
							);
						return new m.$Bsb(
							new C.$iL(o.lineNumber, o.column, o.lineNumber, o.column),
							m.SelectionStartKind.Simple,
							o.leftoverVisibleColumns,
							new E.$hL(f.lineNumber, f.column),
							f.leftoverVisibleColumns,
						);
					}
					static up(c, n, g, p, o, f, b) {
						return this.vertical(
							c,
							n,
							g,
							p,
							o,
							g - f,
							b,
							r.PositionAffinity.LeftOfInjectedText,
						);
					}
					static moveUp(c, n, g, p, o) {
						let f, b;
						g.hasSelection() && !p
							? ((f = g.selection.startLineNumber),
								(b = g.selection.startColumn))
							: ((f = g.position.lineNumber), (b = g.position.column));
						const s = a.up(c, n, f, b, g.leftoverVisibleColumns, o, !0);
						return g.move(p, s.lineNumber, s.column, s.leftoverVisibleColumns);
					}
					static translateUp(c, n, g) {
						const p = g.selection,
							o = a.up(
								c,
								n,
								p.selectionStartLineNumber,
								p.selectionStartColumn,
								g.selectionStartLeftoverVisibleColumns,
								1,
								!1,
							),
							f = a.up(
								c,
								n,
								p.positionLineNumber,
								p.positionColumn,
								g.leftoverVisibleColumns,
								1,
								!1,
							);
						return new m.$Bsb(
							new C.$iL(o.lineNumber, o.column, o.lineNumber, o.column),
							m.SelectionStartKind.Simple,
							o.leftoverVisibleColumns,
							new E.$hL(f.lineNumber, f.column),
							f.leftoverVisibleColumns,
						);
					}
					static e(c, n) {
						return c.getLineFirstNonWhitespaceColumn(n) === 0;
					}
					static moveToPrevBlankLine(c, n, g, p) {
						let o = g.position.lineNumber;
						for (; o > 1 && this.e(n, o); ) o--;
						for (; o > 1 && !this.e(n, o); ) o--;
						return g.move(p, o, n.getLineMinColumn(o), 0);
					}
					static moveToNextBlankLine(c, n, g, p) {
						const o = n.getLineCount();
						let f = g.position.lineNumber;
						for (; f < o && this.e(n, f); ) f++;
						for (; f < o && !this.e(n, f); ) f++;
						return g.move(p, f, n.getLineMinColumn(f), 0);
					}
					static moveToBeginningOfLine(c, n, g, p) {
						const o = g.position.lineNumber,
							f = n.getLineMinColumn(o),
							b = n.getLineFirstNonWhitespaceColumn(o) || f;
						let s;
						return (
							g.position.column === b ? (s = f) : (s = b), g.move(p, o, s, 0)
						);
					}
					static moveToEndOfLine(c, n, g, p, o) {
						const f = g.position.lineNumber,
							b = n.getLineMaxColumn(f);
						return g.move(
							p,
							f,
							b,
							o ? i.Constants.MAX_SAFE_SMALL_INTEGER - b : 0,
						);
					}
					static moveToBeginningOfBuffer(c, n, g, p) {
						return g.move(p, 1, 1, 0);
					}
					static moveToEndOfBuffer(c, n, g, p) {
						const o = n.getLineCount(),
							f = n.getLineMaxColumn(o);
						return g.move(p, o, f, 0);
					}
				}
				e.$Dtb = a;
			},
		),
		
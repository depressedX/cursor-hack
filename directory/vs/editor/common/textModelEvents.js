import '../../../require.js';
import '../../../exports.js';
define(de[590], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$BN =
					e.$AN =
					e.$zN =
					e.$yN =
					e.$xN =
					e.$wN =
					e.$vN =
					e.$uN =
					e.$tN =
					e.RawContentChangedType =
						void 0);
			var t;
			(function (h) {
				(h[(h.Flush = 1)] = "Flush"),
					(h[(h.LineChanged = 2)] = "LineChanged"),
					(h[(h.LinesDeleted = 3)] = "LinesDeleted"),
					(h[(h.LinesInserted = 4)] = "LinesInserted"),
					(h[(h.EOLChanged = 5)] = "EOLChanged");
			})(t || (e.RawContentChangedType = t = {}));
			class i {
				constructor() {
					this.changeType = t.Flush;
				}
			}
			e.$tN = i;
			class w {
				static applyInjectedText(c, n) {
					if (!n || n.length === 0) return c;
					let g = "",
						p = 0;
					for (const o of n)
						(g += c.substring(p, o.column - 1)),
							(p = o.column - 1),
							(g += o.options.content);
					return (g += c.substring(p)), g;
				}
				static fromDecorations(c) {
					const n = [];
					for (const g of c)
						g.options.before &&
							g.options.before.content.length > 0 &&
							n.push(
								new w(
									g.ownerId,
									g.range.startLineNumber,
									g.range.startColumn,
									g.options.before,
									0,
								),
							),
							g.options.after &&
								g.options.after.content.length > 0 &&
								n.push(
									new w(
										g.ownerId,
										g.range.endLineNumber,
										g.range.endColumn,
										g.options.after,
										1,
									),
								);
					return (
						n.sort((g, p) =>
							g.lineNumber === p.lineNumber
								? g.column === p.column
									? g.order - p.order
									: g.column - p.column
								: g.lineNumber - p.lineNumber,
						),
						n
					);
				}
				constructor(c, n, g, p, o) {
					(this.ownerId = c),
						(this.lineNumber = n),
						(this.column = g),
						(this.options = p),
						(this.order = o);
				}
				withText(c) {
					return new w(
						this.ownerId,
						this.lineNumber,
						this.column,
						{ ...this.options, content: c },
						this.order,
					);
				}
			}
			e.$uN = w;
			class E {
				constructor(c, n, g) {
					(this.changeType = t.LineChanged),
						(this.lineNumber = c),
						(this.detail = n),
						(this.injectedText = g);
				}
			}
			e.$vN = E;
			class C {
				constructor(c, n) {
					(this.changeType = t.LinesDeleted),
						(this.fromLineNumber = c),
						(this.toLineNumber = n);
				}
			}
			e.$wN = C;
			class d {
				constructor(c, n, g, p) {
					(this.changeType = t.LinesInserted),
						(this.injectedTexts = p),
						(this.fromLineNumber = c),
						(this.toLineNumber = n),
						(this.detail = g);
				}
			}
			e.$xN = d;
			class m {
				constructor() {
					this.changeType = t.EOLChanged;
				}
			}
			e.$yN = m;
			class r {
				constructor(c, n, g, p) {
					(this.changes = c),
						(this.versionId = n),
						(this.isUndoing = g),
						(this.isRedoing = p),
						(this.resultingSelection = null);
				}
				containsEvent(c) {
					for (let n = 0, g = this.changes.length; n < g; n++)
						if (this.changes[n].changeType === c) return !0;
					return !1;
				}
				static merge(c, n) {
					const g = [].concat(c.changes).concat(n.changes),
						p = n.versionId,
						o = c.isUndoing || n.isUndoing,
						f = c.isRedoing || n.isRedoing;
					return new r(g, p, o, f);
				}
			}
			e.$zN = r;
			class u {
				constructor(c) {
					this.changes = c;
				}
			}
			e.$AN = u;
			class a {
				constructor(c, n) {
					(this.rawContentChangedEvent = c), (this.contentChangedEvent = n);
				}
				merge(c) {
					const n = r.merge(
							this.rawContentChangedEvent,
							c.rawContentChangedEvent,
						),
						g = a.c(this.contentChangedEvent, c.contentChangedEvent);
					return new a(n, g);
				}
				static c(c, n) {
					const g = [].concat(c.changes).concat(n.changes),
						p = n.eol,
						o = n.versionId,
						f = c.isUndoing || n.isUndoing,
						b = c.isRedoing || n.isRedoing,
						s = c.isFlush || n.isFlush,
						l = c.isEolChange && n.isEolChange;
					return {
						changes: g,
						eol: p,
						isEolChange: l,
						versionId: o,
						isUndoing: f,
						isRedoing: b,
						isFlush: s,
					};
				}
			}
			e.$BN = a;
		})

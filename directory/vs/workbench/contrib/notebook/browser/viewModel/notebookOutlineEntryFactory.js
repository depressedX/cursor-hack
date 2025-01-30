import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/markdownRenderer.js';
import '../../../../../nls.js';
import './foldingModel.js';
import './OutlineEntry.js';
import '../../common/notebookCommon.js';
define(
			de[1301],
			he([1, 0, 267, 4, 1841, 3477, 70]),
			function (ce /*require*/,
 e /*exports*/,
 t /*markdownRenderer*/,
 i /*nls*/,
 w /*foldingModel*/,
 E /*OutlineEntry*/,
 C /*notebookCommon*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wOb = e.NotebookOutlineConstants = void 0),
					(e.$xOb = u);
				var d;
				(function (h) {
					h[(h.NonHeaderOutlineLevel = 7)] = "NonHeaderOutlineLevel";
				})(d || (e.NotebookOutlineConstants = d = {}));
				function m(h) {
					const c = Array.from((0, w.$5Nb)(h));
					if (c.length) return c;
					const n = h.match(/<h([1-6]).*>(.*)<\/h\1>/i);
					if (n) {
						const g = parseInt(n[1]),
							p = n[2].trim();
						c.push({ depth: g, text: p });
					}
					return c;
				}
				class r {
					constructor(c) {
						(this.c = c), (this.a = {}), (this.b = new WeakMap());
					}
					getOutlineEntries(c, n) {
						const g = [],
							p = c.cellKind === C.CellKind.Markup;
						let o = a(c),
							f = !1;
						if (p) {
							const b = c.getText().substring(0, 1e4),
								s = this.b.get(c),
								l =
									s?.alternativeId === c.getAlternativeId()
										? s.headers
										: Array.from(m(b));
							this.b.set(c, {
								alternativeId: c.getAlternativeId(),
								headers: l,
							});
							for (const { depth: y, text: $ } of l)
								(f = !0), g.push(new E.$vOb(n++, y, c, $, !1, !1));
							f || (o = (0, t.$Xib)({ value: o }));
						}
						if (!f) {
							const b = !p && this.c.getCellExecution(c.uri);
							let s = o.trim();
							if (!p && c.model.textModel) {
								const l = this.a[c.model.textModel.id];
								l &&
									(g.push(
										new E.$vOb(
											n++,
											d.NonHeaderOutlineLevel,
											c,
											s,
											!!b,
											b ? b.isPaused : !1,
										),
									),
									l.forEach((y) => {
										g.push(
											new E.$vOb(
												n++,
												y.level,
												c,
												y.name,
												!1,
												!1,
												y.range,
												y.kind,
											),
										);
									}));
							}
							g.length === 0 &&
								(s.length === 0 && (s = (0, i.localize)(8215, null)),
								g.push(
									new E.$vOb(
										n++,
										d.NonHeaderOutlineLevel,
										c,
										s,
										!!b,
										b ? b.isPaused : !1,
									),
								));
						}
						return g;
					}
					async cacheSymbols(c, n, g) {
						const p = await c.resolveTextModel(),
							o = await n.getOrCreate(p, g),
							f = u(o.getTopLevelSymbols(), 8);
						this.a[p.id] = f;
					}
				}
				e.$wOb = r;
				function u(h, c) {
					const n = [];
					return (
						h.forEach((g) => {
							n.push({ name: g.name, range: g.range, level: c, kind: g.kind }),
								g.children && n.push(...u(g.children, c + 1));
						}),
						n
					);
				}
				function a(h) {
					const c = h.textBuffer;
					for (let n = 0; n < c.getLineCount(); n++) {
						const g = c.getLineFirstNonWhitespaceColumn(n + 1),
							p = c.getLineLength(n + 1);
						if (g < p) return c.getLineContent(n + 1);
					}
					return h.getText().substring(0, 100);
				}
			},
		),
		
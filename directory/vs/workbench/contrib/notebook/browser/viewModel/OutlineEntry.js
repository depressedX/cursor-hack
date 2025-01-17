import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/themables.js';
import '../../../../../platform/markers/common/markers.js';
import '../notebookIcons.js';
import '../../common/notebookCommon.js';
import '../../../../../editor/common/languages.js';
define(
			de[3477],
			he([1, 0, 14, 26, 90, 284, 70, 74]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$vOb = void 0);
				class m {
					get icon() {
						return this.symbolKind
							? d.SymbolKinds.toIcon(this.symbolKind)
							: this.isExecuting && this.isPaused
								? E.$jOb
								: this.isExecuting
									? i.ThemeIcon.modify(E.$jOb, "spin")
									: this.cell.cellKind === C.CellKind.Markup
										? t.$ak.markdown
										: t.$ak.code;
					}
					constructor(u, a, h, c, n, g, p, o) {
						(this.index = u),
							(this.level = a),
							(this.cell = h),
							(this.label = c),
							(this.isExecuting = n),
							(this.isPaused = g),
							(this.range = p),
							(this.symbolKind = o),
							(this.b = []);
					}
					addChild(u) {
						this.b.push(u), (u.c = this);
					}
					get parent() {
						return this.c;
					}
					get children() {
						return this.b;
					}
					get markerInfo() {
						return this.d;
					}
					get position() {
						if (this.range)
							return {
								startLineNumber: this.range.startLineNumber,
								startColumn: this.range.startColumn,
							};
					}
					updateMarkers(u) {
						if (this.cell.cellKind === C.CellKind.Code) {
							const a = u.read({
								resource: this.cell.uri,
								severities: w.MarkerSeverity.Error | w.MarkerSeverity.Warning,
							});
							if (a.length === 0) this.d = void 0;
							else {
								const h =
									a.find((c) => c.severity === w.MarkerSeverity.Error)
										?.severity ?? w.MarkerSeverity.Warning;
								this.d = { topSev: h, count: a.length };
							}
						} else {
							let a;
							for (const h of this.children)
								h.updateMarkers(u),
									h.markerInfo &&
										(a = a
											? Math.max(h.markerInfo.topSev, a)
											: h.markerInfo.topSev);
							this.d = a && { topSev: a, count: 0 };
						}
					}
					clearMarkers() {
						this.d = void 0;
						for (const u of this.children) u.clearMarkers();
					}
					find(u, a) {
						if (u.id === this.cell.id) return this;
						a.push(this);
						for (const h of this.children) {
							const c = h.find(u, a);
							if (c) return c;
						}
						a.pop();
					}
					asFlatList(u) {
						u.push(this);
						for (const a of this.children) a.asFlatList(u);
					}
				}
				e.$vOb = m;
			},
		),
		
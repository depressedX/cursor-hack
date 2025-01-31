import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/iconLabel/iconLabels.js';
import '../../../../base/common/uint.js';
import '../../../browser/editorBrowser.js';
import '../../../common/core/range.js';
import '../../../common/model/textModel.js';
import '../../../../css!vs/editor/contrib/codelens/browser/codelensWidget.js';
define(
			de[2909],
			he([1, 0, 7, 182, 210, 56, 17, 122, 2292]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*iconLabels*/,
 w /*uint*/,
 E /*editorBrowser*/,
 C /*range*/,
 d /*textModel*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$OBb = e.$NBb = void 0),
					(t = mt(t));
				class m {
					constructor(n, g, p) {
						(this.afterColumn = w.Constants.MAX_SAFE_SMALL_INTEGER),
							(this.afterLineNumber = n),
							(this.heightInPx = g),
							(this.b = p),
							(this.suppressMouseDown = !0),
							(this.domNode = document.createElement("div"));
					}
					onComputedHeight(n) {
						this.a === void 0
							? (this.a = n)
							: this.a !== n && ((this.a = n), this.b());
					}
					isVisible() {
						return (
							this.a !== 0 &&
							this.domNode.hasAttribute("monaco-visible-view-zone")
						);
					}
				}
				class r {
					static {
						this.a = 0;
					}
					constructor(n, g) {
						(this.allowEditorOverflow = !1),
							(this.suppressMouseDown = !0),
							(this.e = new Map()),
							(this.g = !0),
							(this.d = n),
							(this.b = `codelens.widget-${r.a++}`),
							this.updatePosition(g),
							(this.c = document.createElement("span")),
							(this.c.className = "codelens-decoration");
					}
					withCommands(n, g) {
						this.e.clear();
						const p = [];
						let o = !1;
						for (let f = 0; f < n.length; f++) {
							const b = n[f];
							if (b && ((o = !0), b.command)) {
								const s = (0, i.$Sib)(b.command.title.trim());
								if (b.command.id) {
									const l = `c${r.a++}`;
									p.push(
										t.$(
											"a",
											{ id: l, title: b.command.tooltip, role: "button" },
											...s,
										),
									),
										this.e.set(l, b.command);
								} else p.push(t.$("span", { title: b.command.tooltip }, ...s));
								f + 1 < n.length && p.push(t.$("span", void 0, "\xA0|\xA0"));
							}
						}
						o
							? (t.$hhb(this.c, ...p),
								this.g && g && this.c.classList.add("fadein"),
								(this.g = !1))
							: t.$hhb(this.c, t.$("span", void 0, "no commands"));
					}
					getCommand(n) {
						return n.parentElement === this.c ? this.e.get(n.id) : void 0;
					}
					getId() {
						return this.b;
					}
					getDomNode() {
						return this.c;
					}
					updatePosition(n) {
						const g = this.d.getModel().getLineFirstNonWhitespaceColumn(n);
						this.f = {
							position: { lineNumber: n, column: g },
							preference: [E.ContentWidgetPositionPreference.ABOVE],
						};
					}
					getPosition() {
						return this.f || null;
					}
				}
				class u {
					constructor() {
						(this.a = []), (this.b = []), (this.c = []);
					}
					addDecoration(n, g) {
						this.b.push(n), this.c.push(g);
					}
					removeDecoration(n) {
						this.a.push(n);
					}
					commit(n) {
						const g = n.deltaDecorations(this.a, this.b);
						for (let p = 0, o = g.length; p < o; p++) this.c[p](g[p]);
					}
				}
				e.$NBb = u;
				const a = d.$eY.register({
					collapseOnReplaceEdit: !0,
					description: "codelens",
				});
				class h {
					constructor(n, g, p, o, f, b) {
						(this.g = !1), (this.a = g), (this.f = n), (this.e = []);
						let s;
						const l = [];
						this.f.forEach((y, $) => {
							y.symbol.command && l.push(y.symbol),
								p.addDecoration(
									{ range: y.symbol.range, options: a },
									(v) => (this.e[$] = v),
								),
								s
									? (s = C.$iL.plusRange(s, y.symbol.range))
									: (s = C.$iL.lift(y.symbol.range));
						}),
							(this.b = new m(s.startLineNumber - 1, f, b)),
							(this.c = o.addZone(this.b)),
							l.length > 0 && (this.h(), this.d.withCommands(l, !1));
					}
					h() {
						this.d
							? this.a.layoutContentWidget(this.d)
							: ((this.d = new r(this.a, this.b.afterLineNumber + 1)),
								this.a.addContentWidget(this.d));
					}
					dispose(n, g) {
						this.e.forEach(n.removeDecoration, n),
							(this.e = []),
							g?.removeZone(this.c),
							this.d && (this.a.removeContentWidget(this.d), (this.d = void 0)),
							(this.g = !0);
					}
					isDisposed() {
						return this.g;
					}
					isValid() {
						return this.e.some((n, g) => {
							const p = this.a.getModel().getDecorationRange(n),
								o = this.f[g].symbol;
							return !!(p && C.$iL.isEmpty(o.range) === p.isEmpty());
						});
					}
					updateCodeLensSymbols(n, g) {
						this.e.forEach(g.removeDecoration, g),
							(this.e = []),
							(this.f = n),
							this.f.forEach((p, o) => {
								g.addDecoration(
									{ range: p.symbol.range, options: a },
									(f) => (this.e[o] = f),
								);
							});
					}
					updateHeight(n, g) {
						(this.b.heightInPx = n),
							g.layoutZone(this.c),
							this.d && this.a.layoutContentWidget(this.d);
					}
					computeIfNecessary(n) {
						if (!this.b.isVisible()) return null;
						for (let g = 0; g < this.e.length; g++) {
							const p = n.getDecorationRange(this.e[g]);
							p && (this.f[g].symbol.range = p);
						}
						return this.f;
					}
					updateCommands(n) {
						this.h(), this.d.withCommands(n, !0);
						for (let g = 0; g < this.f.length; g++) {
							const p = n[g];
							if (p) {
								const { symbol: o } = this.f[g];
								o.command = p.command || o.command;
							}
						}
					}
					getCommand(n) {
						return this.d?.getCommand(n);
					}
					getLineNumber() {
						const n = this.a.getModel().getDecorationRange(this.e[0]);
						return n ? n.startLineNumber : -1;
					}
					update(n) {
						if (this.isValid()) {
							const g = this.a.getModel().getDecorationRange(this.e[0]);
							g &&
								((this.b.afterLineNumber = g.startLineNumber - 1),
								n.layoutZone(this.c),
								this.d &&
									(this.d.updatePosition(g.startLineNumber),
									this.a.layoutContentWidget(this.d)));
						}
					}
					getItems() {
						return this.f;
					}
				}
				e.$OBb = h;
			},
		)

import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../browser/editorBrowser.js';
import '../../../common/config/editorOptions.js';
import '../../../common/editorCommon.js';
import './editorNavigationQuickAccess.js';
import '../../../../nls.js';
define(
			de[1666],
			he([1, 0, 3, 56, 38, 98, 1665, 4]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*editorBrowser*/,
 w /*editorOptions*/,
 E /*editorCommon*/,
 C /*editorNavigationQuickAccess*/,
 d /*nls*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$uNc = void 0);
				class m extends C.$l9b {
					static {
						this.PREFIX = ":";
					}
					constructor() {
						super({ canAcceptInBackground: !0 });
					}
					e(u) {
						const a = (0, d.localize)(1361, null);
						return (u.items = [{ label: a }]), (u.ariaLabel = a), t.$1c.None;
					}
					d(u, a, h) {
						const c = u.editor,
							n = new t.$Zc();
						n.add(
							a.onDidAccept((o) => {
								const [f] = a.selectedItems;
								if (f) {
									if (!this.p(c, f.lineNumber)) return;
									this.f(u, {
										range: this.m(f.lineNumber, f.column),
										keyMods: a.keyMods,
										preserveFocus: o.inBackground,
									}),
										o.inBackground || a.hide();
								}
							}),
						);
						const g = () => {
							const o = this.n(c, a.value.trim().substr(m.PREFIX.length)),
								f = this.o(c, o.lineNumber, o.column);
							if (
								((a.items = [
									{ lineNumber: o.lineNumber, column: o.column, label: f },
								]),
								(a.ariaLabel = f),
								!this.p(c, o.lineNumber))
							) {
								this.clearDecorations(c);
								return;
							}
							const b = this.m(o.lineNumber, o.column);
							c.revealRangeInCenter(b, E.ScrollType.Smooth),
								this.addDecorations(c, b);
						};
						g(), n.add(a.onDidChangeValue(() => g()));
						const p = (0, i.$btb)(c);
						return (
							p &&
								p.getOptions().get(w.EditorOption.lineNumbers).renderType ===
									w.RenderLineNumbersType.Relative &&
								(p.updateOptions({ lineNumbers: "on" }),
								n.add(
									(0, t.$Yc)(() =>
										p.updateOptions({ lineNumbers: "relative" }),
									),
								)),
							n
						);
					}
					m(u = 1, a = 1) {
						return {
							startLineNumber: u,
							startColumn: a,
							endLineNumber: u,
							endColumn: a,
						};
					}
					n(u, a) {
						const h = a
								.split(/,|:|#/)
								.map((n) => parseInt(n, 10))
								.filter((n) => !isNaN(n)),
							c = this.r(u) + 1;
						return { lineNumber: h[0] > 0 ? h[0] : c + h[0], column: h[1] };
					}
					o(u, a, h) {
						if (this.p(u, a))
							return this.q(u, a, h)
								? (0, d.localize)(1362, null, a, h)
								: (0, d.localize)(1363, null, a);
						const c = u.getPosition() || { lineNumber: 1, column: 1 },
							n = this.r(u);
						return n > 1
							? (0, d.localize)(1364, null, c.lineNumber, c.column, n)
							: (0, d.localize)(1365, null, c.lineNumber, c.column);
					}
					p(u, a) {
						return !a || typeof a != "number" ? !1 : a > 0 && a <= this.r(u);
					}
					q(u, a, h) {
						if (!h || typeof h != "number") return !1;
						const c = this.g(u);
						if (!c) return !1;
						const n = { lineNumber: a, column: h };
						return c.validatePosition(n).equals(n);
					}
					r(u) {
						return this.g(u)?.getLineCount() ?? 0;
					}
				}
				e.$uNc = m;
			},
		)

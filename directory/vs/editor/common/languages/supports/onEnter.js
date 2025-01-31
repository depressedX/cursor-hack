import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/strings.js';
import '../languageConfiguration.js';
import '../../config/editorOptions.js';
define(de[2723], he([1, 0, 29, 37, 532, 38]), function (ce /*require*/,
 e /*exports*/,
 t /*errors*/,
 i /*strings*/,
 w /*languageConfiguration*/,
 E /*editorOptions*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$6M = void 0),
				(i = mt(i));
			class C {
				constructor(m) {
					(m = m || {}),
						(m.brackets = m.brackets || [
							["(", ")"],
							["{", "}"],
							["[", "]"],
						]),
						(this.a = []),
						m.brackets.forEach((r) => {
							const u = C.c(r[0]),
								a = C.d(r[1]);
							u &&
								a &&
								this.a.push({
									open: r[0],
									openRegExp: u,
									close: r[1],
									closeRegExp: a,
								});
						}),
						(this.b = m.onEnterRules || []);
				}
				onEnter(m, r, u, a) {
					if (m >= E.EditorAutoIndentStrategy.Advanced)
						for (let h = 0, c = this.b.length; h < c; h++) {
							const n = this.b[h];
							if (
								[
									{ reg: n.beforeText, text: u },
									{ reg: n.afterText, text: a },
									{ reg: n.previousLineText, text: r },
								].every((p) =>
									p.reg ? ((p.reg.lastIndex = 0), p.reg.test(p.text)) : !0,
								)
							)
								return n.action;
						}
					if (
						m >= E.EditorAutoIndentStrategy.Brackets &&
						u.length > 0 &&
						a.length > 0
					)
						for (let h = 0, c = this.a.length; h < c; h++) {
							const n = this.a[h];
							if (n.openRegExp.test(u) && n.closeRegExp.test(a))
								return { indentAction: w.IndentAction.IndentOutdent };
						}
					if (m >= E.EditorAutoIndentStrategy.Brackets && u.length > 0) {
						for (let h = 0, c = this.a.length; h < c; h++)
							if (this.a[h].openRegExp.test(u))
								return { indentAction: w.IndentAction.Indent };
					}
					return null;
				}
				static c(m) {
					let r = i.$of(m);
					return (
						/\B/.test(r.charAt(0)) || (r = "\\b" + r), (r += "\\s*$"), C.e(r)
					);
				}
				static d(m) {
					let r = i.$of(m);
					return (
						/\B/.test(r.charAt(r.length - 1)) || (r = r + "\\b"),
						(r = "^\\s*" + r),
						C.e(r)
					);
				}
				static e(m) {
					try {
						return new RegExp(m);
					} catch (r) {
						return (0, t.$4)(r), null;
					}
				}
			}
			e.$6M = C;
		})

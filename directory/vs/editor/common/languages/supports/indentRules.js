import '../../../../../require.js';
import '../../../../../exports.js';
define(de[912], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$5M = e.IndentConsts = void 0);
			var t;
			(function (E) {
				(E[(E.INCREASE_MASK = 1)] = "INCREASE_MASK"),
					(E[(E.DECREASE_MASK = 2)] = "DECREASE_MASK"),
					(E[(E.INDENT_NEXTLINE_MASK = 4)] = "INDENT_NEXTLINE_MASK"),
					(E[(E.UNINDENT_MASK = 8)] = "UNINDENT_MASK");
			})(t || (e.IndentConsts = t = {}));
			function i(E) {
				return E.global && (E.lastIndex = 0), !0;
			}
			class w {
				constructor(C) {
					this.a = C;
				}
				shouldIncrease(C) {
					return !!(
						this.a &&
						this.a.increaseIndentPattern &&
						i(this.a.increaseIndentPattern) &&
						this.a.increaseIndentPattern.test(C)
					);
				}
				shouldDecrease(C) {
					return !!(
						this.a &&
						this.a.decreaseIndentPattern &&
						i(this.a.decreaseIndentPattern) &&
						this.a.decreaseIndentPattern.test(C)
					);
				}
				shouldIndentNextLine(C) {
					return !!(
						this.a &&
						this.a.indentNextLinePattern &&
						i(this.a.indentNextLinePattern) &&
						this.a.indentNextLinePattern.test(C)
					);
				}
				shouldIgnore(C) {
					return !!(
						this.a &&
						this.a.unIndentedLinePattern &&
						i(this.a.unIndentedLinePattern) &&
						this.a.unIndentedLinePattern.test(C)
					);
				}
				getIndentMetadata(C) {
					let d = 0;
					return (
						this.shouldIncrease(C) && (d += t.INCREASE_MASK),
						this.shouldDecrease(C) && (d += t.DECREASE_MASK),
						this.shouldIndentNextLine(C) && (d += t.INDENT_NEXTLINE_MASK),
						this.shouldIgnore(C) && (d += t.UNINDENT_MASK),
						d
					);
				}
			}
			e.$5M = w;
		}),
		
import '../../../require.js';
import '../../../exports.js';
import '../common/editorCommon.js';
define(de[491], he([1, 0, 98]), function (ce /*require*/,
 e /*exports*/,
 t /*editorCommon*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$vwb = e.$uwb = void 0);
			class i {
				static capture(C) {
					if (C.getScrollTop() === 0 || C.hasPendingScrollAnimation())
						return new i(C.getScrollTop(), C.getContentHeight(), null, 0, null);
					let d = null,
						m = 0;
					const r = C.getVisibleRanges();
					if (r.length > 0) {
						d = r[0].getStartPosition();
						const u = C.getTopForPosition(d.lineNumber, d.column);
						m = C.getScrollTop() - u;
					}
					return new i(
						C.getScrollTop(),
						C.getContentHeight(),
						d,
						m,
						C.getPosition(),
					);
				}
				constructor(C, d, m, r, u) {
					(this.a = C), (this.b = d), (this.c = m), (this.d = r), (this.e = u);
				}
				restore(C) {
					if (
						!(this.b === C.getContentHeight() && this.a === C.getScrollTop()) &&
						this.c
					) {
						const d = C.getTopForPosition(this.c.lineNumber, this.c.column);
						C.setScrollTop(d + this.d);
					}
				}
				restoreRelativeVerticalPositionOfCursor(C) {
					if (this.b === C.getContentHeight() && this.a === C.getScrollTop())
						return;
					const d = C.getPosition();
					if (!this.e || !d) return;
					const m =
						C.getTopForLineNumber(d.lineNumber) -
						C.getTopForLineNumber(this.e.lineNumber);
					C.setScrollTop(C.getScrollTop() + m, t.ScrollType.Immediate);
				}
			}
			e.$uwb = i;
			class w {
				static capture(C) {
					if (C.hasPendingScrollAnimation())
						return new w(C.getScrollTop(), C.getContentHeight(), null, 0);
					let d = null,
						m = 0;
					const r = C.getVisibleRanges();
					return (
						r.length > 0 &&
							((d = r.at(-1).getEndPosition()),
							(m = C.getBottomForLineNumber(d.lineNumber) - C.getScrollTop())),
						new w(C.getScrollTop(), C.getContentHeight(), d, m)
					);
				}
				constructor(C, d, m, r) {
					(this.a = C), (this.b = d), (this.c = m), (this.d = r);
				}
				restore(C) {
					if (
						!(this.b === C.getContentHeight() && this.a === C.getScrollTop()) &&
						this.c
					) {
						const d = C.getBottomForLineNumber(this.c.lineNumber);
						C.setScrollTop(d - this.d, t.ScrollType.Immediate);
					}
				}
			}
			e.$vwb = w;
		})

define(de[1150], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$DN = e.$CN = e.HorizontalGuidesState = void 0);
			var t;
			(function (E) {
				(E[(E.Disabled = 0)] = "Disabled"),
					(E[(E.EnabledForActive = 1)] = "EnabledForActive"),
					(E[(E.Enabled = 2)] = "Enabled");
			})(t || (e.HorizontalGuidesState = t = {}));
			class i {
				constructor(C, d, m, r, u, a) {
					if (
						((this.visibleColumn = C),
						(this.column = d),
						(this.className = m),
						(this.horizontalLine = r),
						(this.forWrappedLinesAfterColumn = u),
						(this.forWrappedLinesBeforeOrAtColumn = a),
						(C !== -1) == (d !== -1))
					)
						throw new Error();
				}
			}
			e.$CN = i;
			class w {
				constructor(C, d) {
					(this.top = C), (this.endColumn = d);
				}
			}
			e.$DN = w;
		}),
		
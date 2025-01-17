import '../../../../../require.js';
import '../../../../../exports.js';
define(de[368], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$5Bb = e.$4Bb = e.$3Bb = e.$2Bb = e.HoverAnchorType = void 0);
			var t;
			(function (C) {
				(C[(C.Range = 1)] = "Range"),
					(C[(C.ForeignElement = 2)] = "ForeignElement");
			})(t || (e.HoverAnchorType = t = {}));
			class i {
				constructor(d, m, r, u) {
					(this.priority = d),
						(this.range = m),
						(this.initialMousePosX = r),
						(this.initialMousePosY = u),
						(this.type = t.Range);
				}
				equals(d) {
					return d.type === t.Range && this.range.equalsRange(d.range);
				}
				canAdoptVisibleHover(d, m) {
					return (
						d.type === t.Range && m.lineNumber === this.range.startLineNumber
					);
				}
			}
			e.$2Bb = i;
			class w {
				constructor(d, m, r, u, a, h) {
					(this.priority = d),
						(this.owner = m),
						(this.range = r),
						(this.initialMousePosX = u),
						(this.initialMousePosY = a),
						(this.supportsMarkerHover = h),
						(this.type = t.ForeignElement);
				}
				equals(d) {
					return d.type === t.ForeignElement && this.owner === d.owner;
				}
				canAdoptVisibleHover(d, m) {
					return d.type === t.ForeignElement && this.owner === d.owner;
				}
			}
			e.$3Bb = w;
			class E {
				constructor(d) {
					this.renderedHoverParts = d;
				}
				dispose() {
					for (const d of this.renderedHoverParts) d.dispose();
				}
			}
			(e.$4Bb = E),
				(e.$5Bb = new (class {
					constructor() {
						this._participants = [];
					}
					register(d) {
						this._participants.push(d);
					}
					getAll() {
						return this._participants;
					}
				})());
		}),
		
import '../../../../require.js';
import '../../../../exports.js';
define(de[746], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$wub = e.$vub = e.$uub = e.$tub = e.$sub = e.$rub = e.$qub = void 0);
			class t {
				constructor(u, a) {
					(this._restrictedRenderingContextBrand = void 0),
						(this.c = u),
						(this.viewportData = a),
						(this.scrollWidth = this.c.getScrollWidth()),
						(this.scrollHeight = this.c.getScrollHeight()),
						(this.visibleRange = this.viewportData.visibleRange),
						(this.bigNumbersDelta = this.viewportData.bigNumbersDelta);
					const h = this.c.getCurrentViewport();
					(this.scrollTop = h.top),
						(this.scrollLeft = h.left),
						(this.viewportWidth = h.width),
						(this.viewportHeight = h.height);
				}
				getScrolledTopFromAbsoluteTop(u) {
					return u - this.scrollTop;
				}
				getVerticalOffsetForLineNumber(u, a) {
					return this.c.getVerticalOffsetForLineNumber(u, a);
				}
				getVerticalOffsetAfterLineNumber(u, a) {
					return this.c.getVerticalOffsetAfterLineNumber(u, a);
				}
				getDecorationsInViewport() {
					return this.viewportData.getDecorationsInViewport();
				}
			}
			e.$qub = t;
			class i extends t {
				constructor(u, a, h) {
					super(u, a), (this._renderingContextBrand = void 0), (this.d = h);
				}
				linesVisibleRangesForRange(u, a) {
					return this.d.linesVisibleRangesForRange(u, a);
				}
				visibleRangeForPosition(u) {
					return this.d.visibleRangeForPosition(u);
				}
			}
			e.$rub = i;
			class w {
				static firstLine(u) {
					if (!u) return null;
					let a = null;
					for (const h of u) (!a || h.lineNumber < a.lineNumber) && (a = h);
					return a;
				}
				static lastLine(u) {
					if (!u) return null;
					let a = null;
					for (const h of u) (!a || h.lineNumber > a.lineNumber) && (a = h);
					return a;
				}
				constructor(u, a, h, c) {
					(this.outsideRenderedLine = u),
						(this.lineNumber = a),
						(this.ranges = h),
						(this.continuesOnNextLine = c);
				}
			}
			e.$sub = w;
			class E {
				static from(u) {
					const a = new Array(u.length);
					for (let h = 0, c = u.length; h < c; h++) {
						const n = u[h];
						a[h] = new E(n.left, n.width);
					}
					return a;
				}
				constructor(u, a) {
					(this._horizontalRangeBrand = void 0),
						(this.left = Math.round(u)),
						(this.width = Math.round(a));
				}
				toString() {
					return `[${this.left},${this.width}]`;
				}
			}
			e.$tub = E;
			class C {
				constructor(u, a) {
					(this._floatHorizontalRangeBrand = void 0),
						(this.left = u),
						(this.width = a);
				}
				toString() {
					return `[${this.left},${this.width}]`;
				}
				static compare(u, a) {
					return u.left - a.left;
				}
			}
			e.$uub = C;
			class d {
				constructor(u, a) {
					(this.outsideRenderedLine = u),
						(this.originalLeft = a),
						(this.left = Math.round(this.originalLeft));
				}
			}
			e.$vub = d;
			class m {
				constructor(u, a) {
					(this.outsideRenderedLine = u), (this.ranges = a);
				}
			}
			e.$wub = m;
		}),
		
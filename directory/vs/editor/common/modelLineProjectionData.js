import '../../../require.js';
import '../../../exports.js';
import '../../base/common/assert.js';
import './core/position.js';
import './model.js';
define(de[1629], he([1, 0, 229, 48, 64]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$wsb = e.$vsb = e.$usb = void 0);
			class E {
				constructor(a, h, c, n, g) {
					(this.injectionOffsets = a),
						(this.injectionOptions = h),
						(this.breakOffsets = c),
						(this.breakOffsetsVisibleColumn = n),
						(this.wrappedTextIndentLength = g);
				}
				getOutputLineCount() {
					return this.breakOffsets.length;
				}
				getMinOutputOffset(a) {
					return a > 0 ? this.wrappedTextIndentLength : 0;
				}
				getLineLength(a) {
					const h = a > 0 ? this.breakOffsets[a - 1] : 0;
					let n = this.breakOffsets[a] - h;
					return a > 0 && (n += this.wrappedTextIndentLength), n;
				}
				getMaxOutputOffset(a) {
					return this.getLineLength(a);
				}
				translateToInputOffset(a, h) {
					a > 0 && (h = Math.max(0, h - this.wrappedTextIndentLength));
					let n = a === 0 ? h : this.breakOffsets[a - 1] + h;
					if (this.injectionOffsets !== null)
						for (
							let g = 0;
							g < this.injectionOffsets.length && n > this.injectionOffsets[g];
							g++
						)
							n <
							this.injectionOffsets[g] + this.injectionOptions[g].content.length
								? (n = this.injectionOffsets[g])
								: (n -= this.injectionOptions[g].content.length);
					return n;
				}
				translateToOutputPosition(a, h = w.PositionAffinity.None) {
					let c = a;
					if (this.injectionOffsets !== null)
						for (
							let n = 0;
							n < this.injectionOffsets.length &&
							!(
								a < this.injectionOffsets[n] ||
								(h !== w.PositionAffinity.Right &&
									a === this.injectionOffsets[n])
							);
							n++
						)
							c += this.injectionOptions[n].content.length;
					return this.a(c, h);
				}
				a(a, h = w.PositionAffinity.None) {
					let c = 0,
						n = this.breakOffsets.length - 1,
						g = 0,
						p = 0;
					for (; c <= n; ) {
						g = (c + (n - c) / 2) | 0;
						const f = this.breakOffsets[g];
						if (
							((p = g > 0 ? this.breakOffsets[g - 1] : 0),
							h === w.PositionAffinity.Left)
						)
							if (a <= p) n = g - 1;
							else if (a > f) c = g + 1;
							else break;
						else if (a < p) n = g - 1;
						else if (a >= f) c = g + 1;
						else break;
					}
					let o = a - p;
					return g > 0 && (o += this.wrappedTextIndentLength), new r(g, o);
				}
				normalizeOutputPosition(a, h, c) {
					if (this.injectionOffsets !== null) {
						const n = this.b(a, h),
							g = this.c(n, c);
						if (g !== n) return this.a(g, c);
					}
					if (c === w.PositionAffinity.Left) {
						if (a > 0 && h === this.getMinOutputOffset(a))
							return new r(a - 1, this.getMaxOutputOffset(a - 1));
					} else if (c === w.PositionAffinity.Right) {
						const n = this.getOutputLineCount() - 1;
						if (a < n && h === this.getMaxOutputOffset(a))
							return new r(a + 1, this.getMinOutputOffset(a + 1));
					}
					return new r(a, h);
				}
				b(a, h) {
					return (
						a > 0 && (h = Math.max(0, h - this.wrappedTextIndentLength)),
						(a > 0 ? this.breakOffsets[a - 1] : 0) + h
					);
				}
				c(a, h) {
					const c = this.d(a);
					if (!c) return a;
					if (h === w.PositionAffinity.None) {
						if (
							a === c.offsetInInputWithInjections + c.length &&
							C(this.injectionOptions[c.injectedTextIndex].cursorStops)
						)
							return c.offsetInInputWithInjections + c.length;
						{
							let n = c.offsetInInputWithInjections;
							if (d(this.injectionOptions[c.injectedTextIndex].cursorStops))
								return n;
							let g = c.injectedTextIndex - 1;
							for (
								;
								g >= 0 &&
								this.injectionOffsets[g] ===
									this.injectionOffsets[c.injectedTextIndex] &&
								!(
									C(this.injectionOptions[g].cursorStops) ||
									((n -= this.injectionOptions[g].content.length),
									d(this.injectionOptions[g].cursorStops))
								);
							)
								g--;
							return n;
						}
					} else if (
						h === w.PositionAffinity.Right ||
						h === w.PositionAffinity.RightOfInjectedText
					) {
						let n = c.offsetInInputWithInjections + c.length,
							g = c.injectedTextIndex;
						for (
							;
							g + 1 < this.injectionOffsets.length &&
							this.injectionOffsets[g + 1] === this.injectionOffsets[g];
						)
							(n += this.injectionOptions[g + 1].content.length), g++;
						return n;
					} else if (
						h === w.PositionAffinity.Left ||
						h === w.PositionAffinity.LeftOfInjectedText
					) {
						let n = c.offsetInInputWithInjections,
							g = c.injectedTextIndex;
						for (
							;
							g - 1 >= 0 &&
							this.injectionOffsets[g - 1] === this.injectionOffsets[g];
						)
							(n -= this.injectionOptions[g - 1].content.length), g--;
						return n;
					}
					(0, t.$kd)(h);
				}
				getInjectedText(a, h) {
					const c = this.b(a, h),
						n = this.d(c);
					return n
						? { options: this.injectionOptions[n.injectedTextIndex] }
						: null;
				}
				d(a) {
					const h = this.injectionOffsets,
						c = this.injectionOptions;
					if (h !== null) {
						let n = 0;
						for (let g = 0; g < h.length; g++) {
							const p = c[g].content.length,
								o = h[g] + n,
								f = h[g] + n + p;
							if (o > a) break;
							if (a <= f)
								return {
									injectedTextIndex: g,
									offsetInInputWithInjections: o,
									length: p,
								};
							n += p;
						}
					}
				}
			}
			e.$usb = E;
			function C(u) {
				return u == null
					? !0
					: u === w.InjectedTextCursorStops.Right ||
							u === w.InjectedTextCursorStops.Both;
			}
			function d(u) {
				return u == null
					? !0
					: u === w.InjectedTextCursorStops.Left ||
							u === w.InjectedTextCursorStops.Both;
			}
			class m {
				constructor(a) {
					this.options = a;
				}
			}
			e.$vsb = m;
			class r {
				constructor(a, h) {
					(this.outputLineIndex = a), (this.outputOffset = h);
				}
				toString() {
					return `${this.outputLineIndex}:${this.outputOffset}`;
				}
				toPosition(a) {
					return new i.$hL(a + this.outputLineIndex, this.outputOffset + 1);
				}
			}
			e.$wsb = r;
		}),
		
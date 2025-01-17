import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arraysFind.js';
import '../../../../base/common/charCode.js';
import '../../core/offsetRange.js';
import '../../core/position.js';
import '../../core/range.js';
import './utils.js';
define(
			de[1531],
			he([1, 0, 214, 120, 289, 48, 17, 911]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$exb = void 0);
				class m {
					constructor(g, p, o) {
						(this.lines = g),
							(this.g = p),
							(this.considerWhitespaceChanges = o),
							(this.b = []),
							(this.c = []),
							(this.d = []),
							(this.f = []),
							this.c.push(0);
						for (
							let f = this.g.startLineNumber;
							f <= this.g.endLineNumber;
							f++
						) {
							let b = g[f - 1],
								s = 0;
							f === this.g.startLineNumber &&
								this.g.startColumn > 1 &&
								((s = this.g.startColumn - 1), (b = b.substring(s))),
								this.d.push(s);
							let l = 0;
							if (!o) {
								const $ = b.trimStart();
								(l = b.length - $.length), (b = $.trimEnd());
							}
							this.f.push(l);
							const y =
								f === this.g.endLineNumber
									? Math.min(this.g.endColumn - 1 - s - l, b.length)
									: b.length;
							for (let $ = 0; $ < y; $++) this.b.push(b.charCodeAt($));
							f < this.g.endLineNumber &&
								(this.b.push(10), this.c.push(this.b.length));
						}
					}
					toString() {
						return `Slice: "${this.text}"`;
					}
					get text() {
						return this.getText(new w.$pL(0, this.length));
					}
					getText(g) {
						return this.b
							.slice(g.start, g.endExclusive)
							.map((p) => String.fromCharCode(p))
							.join("");
					}
					getElement(g) {
						return this.b[g];
					}
					get length() {
						return this.b.length;
					}
					getBoundaryScore(g) {
						const p = c(g > 0 ? this.b[g - 1] : -1),
							o = c(g < this.b.length ? this.b[g] : -1);
						if (p === u.LineBreakCR && o === u.LineBreakLF) return 0;
						if (p === u.LineBreakLF) return 150;
						let f = 0;
						return (
							p !== o &&
								((f += 10), p === u.WordLower && o === u.WordUpper && (f += 1)),
							(f += h(p)),
							(f += h(o)),
							f
						);
					}
					translateOffset(g, p = "right") {
						const o = (0, t.$mb)(this.c, (b) => b <= g),
							f = g - this.c[o];
						return new E.$hL(
							this.g.startLineNumber + o,
							1 + this.d[o] + f + (f === 0 && p === "left" ? 0 : this.f[o]),
						);
					}
					translateRange(g) {
						const p = this.translateOffset(g.start, "right"),
							o = this.translateOffset(g.endExclusive, "left");
						return o.isBefore(p)
							? C.$iL.fromPositions(o, o)
							: C.$iL.fromPositions(p, o);
					}
					findWordContaining(g) {
						if (g < 0 || g >= this.b.length || !r(this.b[g])) return;
						let p = g;
						for (; p > 0 && r(this.b[p - 1]); ) p--;
						let o = g;
						for (; o < this.b.length && r(this.b[o]); ) o++;
						return new w.$pL(p, o);
					}
					countLinesIn(g) {
						return (
							this.translateOffset(g.endExclusive).lineNumber -
							this.translateOffset(g.start).lineNumber
						);
					}
					isStronglyEqual(g, p) {
						return this.b[g] === this.b[p];
					}
					extendToFullLines(g) {
						const p = (0, t.$lb)(this.c, (f) => f <= g.start) ?? 0,
							o =
								(0, t.$nb)(this.c, (f) => g.endExclusive <= f) ?? this.b.length;
						return new w.$pL(p, o);
					}
				}
				e.$exb = m;
				function r(n) {
					return (
						(n >= i.CharCode.a && n <= i.CharCode.z) ||
						(n >= i.CharCode.A && n <= i.CharCode.Z) ||
						(n >= i.CharCode.Digit0 && n <= i.CharCode.Digit9)
					);
				}
				var u;
				(function (n) {
					(n[(n.WordLower = 0)] = "WordLower"),
						(n[(n.WordUpper = 1)] = "WordUpper"),
						(n[(n.WordNumber = 2)] = "WordNumber"),
						(n[(n.End = 3)] = "End"),
						(n[(n.Other = 4)] = "Other"),
						(n[(n.Separator = 5)] = "Separator"),
						(n[(n.Space = 6)] = "Space"),
						(n[(n.LineBreakCR = 7)] = "LineBreakCR"),
						(n[(n.LineBreakLF = 8)] = "LineBreakLF");
				})(u || (u = {}));
				const a = {
					[u.WordLower]: 0,
					[u.WordUpper]: 0,
					[u.WordNumber]: 0,
					[u.End]: 10,
					[u.Other]: 2,
					[u.Separator]: 30,
					[u.Space]: 3,
					[u.LineBreakCR]: 10,
					[u.LineBreakLF]: 10,
				};
				function h(n) {
					return a[n];
				}
				function c(n) {
					return n === i.CharCode.LineFeed
						? u.LineBreakLF
						: n === i.CharCode.CarriageReturn
							? u.LineBreakCR
							: (0, d.$axb)(n)
								? u.Space
								: n >= i.CharCode.a && n <= i.CharCode.z
									? u.WordLower
									: n >= i.CharCode.A && n <= i.CharCode.Z
										? u.WordUpper
										: n >= i.CharCode.Digit0 && n <= i.CharCode.Digit9
											? u.WordNumber
											: n === -1
												? u.End
												: n === i.CharCode.Comma || n === i.CharCode.Semicolon
													? u.Separator
													: u.Other;
				}
			},
		),
		
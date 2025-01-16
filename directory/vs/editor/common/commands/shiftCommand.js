define(
			de[771],
			he([1, 0, 120, 37, 435, 17, 104, 1198, 152]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				var r;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Rtb = void 0),
					(i = mt(i));
				const u = Object.create(null);
				function a(c, n) {
					if (n <= 0) return "";
					u[c] || (u[c] = ["", c]);
					const g = u[c];
					for (let p = g.length; p <= n; p++) g[p] = g[p - 1] + c;
					return g[n];
				}
				let h = (r = class {
					static unshiftIndent(n, g, p, o, f) {
						const b = w.$BM.visibleColumnFromColumn(n, g, p);
						if (f) {
							const s = a(" ", o),
								y = w.$BM.prevIndentTabStop(b, o) / o;
							return a(s, y);
						} else {
							const s = "	",
								y = w.$BM.prevRenderTabStop(b, p) / p;
							return a(s, y);
						}
					}
					static shiftIndent(n, g, p, o, f) {
						const b = w.$BM.visibleColumnFromColumn(n, g, p);
						if (f) {
							const s = a(" ", o),
								y = w.$BM.nextIndentTabStop(b, o) / o;
							return a(s, y);
						} else {
							const s = "	",
								y = w.$BM.nextRenderTabStop(b, p) / p;
							return a(s, y);
						}
					}
					constructor(n, g, p) {
						(this.f = p),
							(this.a = g),
							(this.b = n),
							(this.c = null),
							(this.d = !1),
							(this.e = !1);
					}
					g(n, g, p) {
						this.d ? n.addTrackedEditOperation(g, p) : n.addEditOperation(g, p);
					}
					getEditOperations(n, g) {
						const p = this.b.startLineNumber;
						let o = this.b.endLineNumber;
						this.b.endColumn === 1 && p !== o && (o = o - 1);
						const { tabSize: f, indentSize: b, insertSpaces: s } = this.a,
							l = p === o;
						if (this.a.useTabStops) {
							this.b.isEmpty() &&
								/^\s*$/.test(n.getLineContent(p)) &&
								(this.d = !0);
							let y = 0,
								$ = 0;
							for (let v = p; v <= o; v++, y = $) {
								$ = 0;
								const S = n.getLineContent(v);
								let I = i.$Bf(S);
								if (
									(this.a.isUnshift && (S.length === 0 || I === 0)) ||
									(!l && !this.a.isUnshift && S.length === 0)
								)
									continue;
								if (
									(I === -1 && (I = S.length),
									v > 1 &&
										w.$BM.visibleColumnFromColumn(S, I + 1, f) % b !== 0 &&
										n.tokenization.isCheapToTokenize(v - 1))
								) {
									const k = (0, d.$Qtb)(
										this.a.autoIndent,
										n,
										new E.$iL(
											v - 1,
											n.getLineMaxColumn(v - 1),
											v - 1,
											n.getLineMaxColumn(v - 1),
										),
										this.f,
									);
									if (k) {
										if ((($ = y), k.appendText))
											for (
												let L = 0, D = k.appendText.length;
												L < D &&
												$ < b &&
												k.appendText.charCodeAt(L) === t.CharCode.Space;
												L++
											)
												$++;
										k.removeText && ($ = Math.max(0, $ - k.removeText));
										for (
											let L = 0;
											L < $ &&
											!(I === 0 || S.charCodeAt(I - 1) !== t.CharCode.Space);
											L++
										)
											I--;
									}
								}
								if (this.a.isUnshift && I === 0) continue;
								let T;
								this.a.isUnshift
									? (T = r.unshiftIndent(S, I + 1, f, b, s))
									: (T = r.shiftIndent(S, I + 1, f, b, s)),
									this.g(g, new E.$iL(v, 1, v, I + 1), T),
									v === p &&
										!this.b.isEmpty() &&
										(this.e = this.b.startColumn <= I + 1);
							}
						} else {
							!this.a.isUnshift &&
								this.b.isEmpty() &&
								n.getLineLength(p) === 0 &&
								(this.d = !0);
							const y = s ? a(" ", b) : "	";
							for (let $ = p; $ <= o; $++) {
								const v = n.getLineContent($);
								let S = i.$Bf(v);
								if (
									!(this.a.isUnshift && (v.length === 0 || S === 0)) &&
									!(!l && !this.a.isUnshift && v.length === 0) &&
									(S === -1 && (S = v.length), !(this.a.isUnshift && S === 0))
								)
									if (this.a.isUnshift) {
										S = Math.min(S, b);
										for (let I = 0; I < S; I++)
											if (v.charCodeAt(I) === t.CharCode.Tab) {
												S = I + 1;
												break;
											}
										this.g(g, new E.$iL($, 1, $, S + 1), "");
									} else
										this.g(g, new E.$iL($, 1, $, 1), y),
											$ === p &&
												!this.b.isEmpty() &&
												(this.e = this.b.startColumn === 1);
							}
						}
						this.c = g.trackSelection(this.b);
					}
					computeCursorState(n, g) {
						if (this.d) {
							const o = g.getInverseEditOperations()[0];
							return new C.$kL(
								o.range.endLineNumber,
								o.range.endColumn,
								o.range.endLineNumber,
								o.range.endColumn,
							);
						}
						const p = g.getTrackedSelection(this.c);
						if (this.e) {
							const o = this.b.startColumn;
							return p.startColumn <= o
								? p
								: p.getDirection() === C.SelectionDirection.LTR
									? new C.$kL(
											p.startLineNumber,
											o,
											p.endLineNumber,
											p.endColumn,
										)
									: new C.$kL(
											p.endLineNumber,
											p.endColumn,
											p.startLineNumber,
											o,
										);
						}
						return p;
					}
				});
				(e.$Rtb = h), (e.$Rtb = h = r = Ne([j(2, m.$aN)], h));
			},
		),
		
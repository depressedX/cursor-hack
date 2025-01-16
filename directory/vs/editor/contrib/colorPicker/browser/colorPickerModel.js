define(de[2581], he([1, 0, 6]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$1Bb = void 0);
			class i {
				get color() {
					return this.a;
				}
				set color(E) {
					this.a.equals(E) || ((this.a = E), this.d.fire(E));
				}
				get presentation() {
					return this.colorPresentations[this.f];
				}
				get colorPresentations() {
					return this.b;
				}
				set colorPresentations(E) {
					(this.b = E),
						this.f > E.length - 1 && (this.f = 0),
						this.e.fire(this.presentation);
				}
				constructor(E, C, d) {
					(this.f = d),
						(this.c = new t.$re()),
						(this.onColorFlushed = this.c.event),
						(this.d = new t.$re()),
						(this.onDidChangeColor = this.d.event),
						(this.e = new t.$re()),
						(this.onDidChangePresentation = this.e.event),
						(this.originalColor = E),
						(this.a = E),
						(this.b = C);
				}
				selectNextColorPresentation() {
					(this.f = (this.f + 1) % this.colorPresentations.length),
						this.flushColor(),
						this.e.fire(this.presentation);
				}
				guessColorPresentation(E, C) {
					let d = -1;
					for (let m = 0; m < this.colorPresentations.length; m++)
						if (C.toLowerCase() === this.colorPresentations[m].label) {
							d = m;
							break;
						}
					if (d === -1) {
						const m = C.split("(")[0].toLowerCase();
						for (let r = 0; r < this.colorPresentations.length; r++)
							if (
								this.colorPresentations[r].label.toLowerCase().startsWith(m)
							) {
								d = r;
								break;
							}
					}
					d !== -1 &&
						d !== this.f &&
						((this.f = d), this.e.fire(this.presentation));
				}
				flushColor() {
					this.c.fire(this.a);
				}
			}
			e.$1Bb = i;
		}),
		define(
			de[1548],
			he([1, 0, 120, 188, 48, 17, 104]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Bhc = void 0);
				class d {
					constructor(r, u, a) {
						(this.d = a), (this.a = r), (this.b = u), (this.c = null);
					}
					static _haystackHasNeedleAtOffset(r, u, a) {
						if (a < 0) return !1;
						const h = u.length,
							c = r.length;
						if (a + h > c) return !1;
						for (let n = 0; n < h; n++) {
							const g = r.charCodeAt(a + n),
								p = u.charCodeAt(n);
							if (
								g !== p &&
								!(g >= t.CharCode.A && g <= t.CharCode.Z && g + 32 === p) &&
								!(p >= t.CharCode.A && p <= t.CharCode.Z && p + 32 === g)
							)
								return !1;
						}
						return !0;
					}
					e(r, u, a, h, c, n) {
						const g = r.startLineNumber,
							p = r.startColumn,
							o = r.endLineNumber,
							f = r.endColumn,
							b = c.getLineContent(g),
							s = c.getLineContent(o);
						let l = b.lastIndexOf(u, p - 1 + u.length),
							y = s.indexOf(a, f - 1 - a.length);
						if (l !== -1 && y !== -1)
							if (g === o)
								b.substring(l + u.length, y).indexOf(a) >= 0 &&
									((l = -1), (y = -1));
							else {
								const v = b.substring(l + u.length),
									S = s.substring(0, y);
								(v.indexOf(a) >= 0 || S.indexOf(a) >= 0) &&
									((l = -1), (y = -1));
							}
						let $;
						l !== -1 && y !== -1
							? (h &&
									l + u.length < b.length &&
									b.charCodeAt(l + u.length) === t.CharCode.Space &&
									(u = u + " "),
								h &&
									y > 0 &&
									s.charCodeAt(y - 1) === t.CharCode.Space &&
									((a = " " + a), (y -= 1)),
								($ = d._createRemoveBlockCommentOperations(
									new E.$iL(g, l + u.length + 1, o, y + 1),
									u,
									a,
								)))
							: (($ = d._createAddBlockCommentOperations(r, u, a, this.b)),
								(this.c = $.length === 1 ? a : null));
						for (const v of $) n.addTrackedEditOperation(v.range, v.text);
					}
					static _createRemoveBlockCommentOperations(r, u, a) {
						const h = [];
						return (
							E.$iL.isEmpty(r)
								? h.push(
										i.$jL.delete(
											new E.$iL(
												r.startLineNumber,
												r.startColumn - u.length,
												r.endLineNumber,
												r.endColumn + a.length,
											),
										),
									)
								: (h.push(
										i.$jL.delete(
											new E.$iL(
												r.startLineNumber,
												r.startColumn - u.length,
												r.startLineNumber,
												r.startColumn,
											),
										),
									),
									h.push(
										i.$jL.delete(
											new E.$iL(
												r.endLineNumber,
												r.endColumn,
												r.endLineNumber,
												r.endColumn + a.length,
											),
										),
									)),
							h
						);
					}
					static _createAddBlockCommentOperations(r, u, a, h) {
						const c = [];
						return (
							E.$iL.isEmpty(r)
								? c.push(
										i.$jL.replace(
											new E.$iL(
												r.startLineNumber,
												r.startColumn,
												r.endLineNumber,
												r.endColumn,
											),
											u + "  " + a,
										),
									)
								: (c.push(
										i.$jL.insert(
											new w.$hL(r.startLineNumber, r.startColumn),
											u + (h ? " " : ""),
										),
									),
									c.push(
										i.$jL.insert(
											new w.$hL(r.endLineNumber, r.endColumn),
											(h ? " " : "") + a,
										),
									)),
							c
						);
					}
					getEditOperations(r, u) {
						const a = this.a.startLineNumber,
							h = this.a.startColumn;
						r.tokenization.tokenizeIfCheap(a);
						const c = r.getLanguageIdAtPosition(a, h),
							n = this.d.getLanguageConfiguration(c).comments;
						!n ||
							!n.blockCommentStartToken ||
							!n.blockCommentEndToken ||
							this.e(
								this.a,
								n.blockCommentStartToken,
								n.blockCommentEndToken,
								this.b,
								r,
								u,
							);
					}
					computeCursorState(r, u) {
						const a = u.getInverseEditOperations();
						if (a.length === 2) {
							const h = a[0],
								c = a[1];
							return new C.$kL(
								h.range.endLineNumber,
								h.range.endColumn,
								c.range.startLineNumber,
								c.range.startColumn,
							);
						} else {
							const h = a[0].range,
								c = this.c ? -this.c.length - 1 : 0;
							return new C.$kL(
								h.endLineNumber,
								h.endColumn + c,
								h.endLineNumber,
								h.endColumn + c,
							);
						}
					}
				}
				e.$Bhc = d;
			},
		),
		define(
			de[1549],
			he([1, 0, 120, 37, 210, 188, 48, 17, 104, 1548]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Chc = e.Type = void 0),
					(i = mt(i));
				var u;
				(function (h) {
					(h[(h.Toggle = 0)] = "Toggle"),
						(h[(h.ForceAdd = 1)] = "ForceAdd"),
						(h[(h.ForceRemove = 2)] = "ForceRemove");
				})(u || (e.Type = u = {}));
				class a {
					constructor(c, n, g, p, o, f, b) {
						(this.l = c),
							(this.a = n),
							(this.b = g),
							(this.c = p),
							(this.d = o),
							(this.f = null),
							(this.g = 0),
							(this.h = !1),
							(this.e = f),
							(this.k = b || !1);
					}
					static m(c, n, g, p) {
						c.tokenization.tokenizeIfCheap(n);
						const o = c.getLanguageIdAtPosition(n, 1),
							f = p.getLanguageConfiguration(o).comments,
							b = f ? f.lineCommentToken : null;
						if (!b) return null;
						const s = [];
						for (let l = 0, y = g - n + 1; l < y; l++)
							s[l] = {
								ignore: !1,
								commentStr: b,
								commentStrOffset: 0,
								commentStrLength: b.length,
							};
						return s;
					}
					static _analyzeLines(c, n, g, p, o, f, b, s) {
						let l = !0,
							y;
						c === u.Toggle ? (y = !0) : c === u.ForceAdd ? (y = !1) : (y = !0);
						for (let $ = 0, v = p.length; $ < v; $++) {
							const S = p[$],
								I = o + $;
							if (I === o && b) {
								S.ignore = !0;
								continue;
							}
							const T = g.getLineContent(I),
								P = i.$Bf(T);
							if (P === -1) {
								(S.ignore = f), (S.commentStrOffset = T.length);
								continue;
							}
							if (
								((l = !1),
								(S.ignore = !1),
								(S.commentStrOffset = P),
								y &&
									!r.$Bhc._haystackHasNeedleAtOffset(T, S.commentStr, P) &&
									(c === u.Toggle
										? (y = !1)
										: c === u.ForceAdd || (S.ignore = !0)),
								y && n)
							) {
								const k = P + S.commentStrLength;
								k < T.length &&
									T.charCodeAt(k) === t.CharCode.Space &&
									(S.commentStrLength += 1);
							}
						}
						if (c === u.Toggle && l) {
							y = !1;
							for (let $ = 0, v = p.length; $ < v; $++) p[$].ignore = !1;
						}
						return { supported: !0, shouldRemoveComments: y, lines: p };
					}
					static _gatherPreflightData(c, n, g, p, o, f, b, s) {
						const l = a.m(g, p, o, s);
						return l === null
							? { supported: !1 }
							: a._analyzeLines(c, n, g, l, p, f, b, s);
					}
					n(c, n, g, p) {
						let o;
						g.shouldRemoveComments
							? (o = a._createRemoveLineCommentsOperations(
									g.lines,
									p.startLineNumber,
								))
							: (a._normalizeInsertionPoint(
									c,
									g.lines,
									p.startLineNumber,
									this.b,
								),
								(o = this.q(g.lines, p.startLineNumber)));
						const f = new C.$hL(p.positionLineNumber, p.positionColumn);
						for (let b = 0, s = o.length; b < s; b++)
							n.addEditOperation(o[b].range, o[b].text),
								d.$iL.isEmpty(o[b].range) &&
									d.$iL.getStartPosition(o[b].range).equals(f) &&
									c.getLineContent(f.lineNumber).length + 1 === f.column &&
									(this.g = (o[b].text || "").length);
						this.f = n.trackSelection(p);
					}
					o(c, n, g, p) {
						let o = n.startLineNumber,
							f = n.endLineNumber;
						const b =
							p.length +
							Math.max(
								c.getLineFirstNonWhitespaceColumn(n.startLineNumber),
								n.startColumn,
							);
						let s = c.getLineContent(o).lastIndexOf(g, b - 1),
							l = c.getLineContent(f).indexOf(p, n.endColumn - 1 - g.length);
						return (
							s !== -1 &&
								l === -1 &&
								((l = c.getLineContent(o).indexOf(p, s + g.length)), (f = o)),
							s === -1 &&
								l !== -1 &&
								((s = c.getLineContent(f).lastIndexOf(g, l)), (o = f)),
							n.isEmpty() &&
								(s === -1 || l === -1) &&
								((s = c.getLineContent(o).indexOf(g)),
								s !== -1 && (l = c.getLineContent(o).indexOf(p, s + g.length))),
							s !== -1 &&
								c.getLineContent(o).charCodeAt(s + g.length) ===
									t.CharCode.Space &&
								(g += " "),
							l !== -1 &&
								c.getLineContent(f).charCodeAt(l - 1) === t.CharCode.Space &&
								((p = " " + p), (l -= 1)),
							s !== -1 && l !== -1
								? r.$Bhc._createRemoveBlockCommentOperations(
										new d.$iL(o, s + g.length + 1, f, l + 1),
										g,
										p,
									)
								: null
						);
					}
					p(c, n, g) {
						c.tokenization.tokenizeIfCheap(g.startLineNumber);
						const p = c.getLanguageIdAtPosition(g.startLineNumber, 1),
							o = this.l.getLanguageConfiguration(p).comments;
						if (!o || !o.blockCommentStartToken || !o.blockCommentEndToken)
							return;
						const f = o.blockCommentStartToken,
							b = o.blockCommentEndToken;
						let s = this.o(c, g, f, b);
						if (!s) {
							if (g.isEmpty()) {
								const l = c.getLineContent(g.startLineNumber);
								let y = i.$Bf(l);
								y === -1 && (y = l.length),
									(s = r.$Bhc._createAddBlockCommentOperations(
										new d.$iL(
											g.startLineNumber,
											y + 1,
											g.startLineNumber,
											l.length + 1,
										),
										f,
										b,
										this.d,
									));
							} else
								s = r.$Bhc._createAddBlockCommentOperations(
									new d.$iL(
										g.startLineNumber,
										c.getLineFirstNonWhitespaceColumn(g.startLineNumber),
										g.endLineNumber,
										c.getLineMaxColumn(g.endLineNumber),
									),
									f,
									b,
									this.d,
								);
							s.length === 1 && (this.g = f.length + 1);
						}
						this.f = n.trackSelection(g);
						for (const l of s) n.addEditOperation(l.range, l.text);
					}
					getEditOperations(c, n) {
						let g = this.a;
						if (
							((this.h = !1), g.startLineNumber === g.endLineNumber && this.k)
						) {
							n.addEditOperation(
								new d.$iL(
									g.startLineNumber,
									c.getLineMaxColumn(g.startLineNumber),
									g.startLineNumber + 1,
									1,
								),
								g.startLineNumber === c.getLineCount()
									? ""
									: `
`,
							),
								(this.f = n.trackSelection(g));
							return;
						}
						g.startLineNumber < g.endLineNumber &&
							g.endColumn === 1 &&
							((this.h = !0),
							(g = g.setEndPosition(
								g.endLineNumber - 1,
								c.getLineMaxColumn(g.endLineNumber - 1),
							)));
						const p = a._gatherPreflightData(
							this.c,
							this.d,
							c,
							g.startLineNumber,
							g.endLineNumber,
							this.e,
							this.k,
							this.l,
						);
						return p.supported ? this.n(c, n, p, g) : this.p(c, n, g);
					}
					computeCursorState(c, n) {
						let g = n.getTrackedSelection(this.f);
						return (
							this.h && (g = g.setEndPosition(g.endLineNumber + 1, 1)),
							new m.$kL(
								g.selectionStartLineNumber,
								g.selectionStartColumn + this.g,
								g.positionLineNumber,
								g.positionColumn + this.g,
							)
						);
					}
					static _createRemoveLineCommentsOperations(c, n) {
						const g = [];
						for (let p = 0, o = c.length; p < o; p++) {
							const f = c[p];
							f.ignore ||
								g.push(
									E.$jL.delete(
										new d.$iL(
											n + p,
											f.commentStrOffset + 1,
											n + p,
											f.commentStrOffset + f.commentStrLength + 1,
										),
									),
								);
						}
						return g;
					}
					q(c, n) {
						const g = [],
							p = this.d ? " " : "";
						for (let o = 0, f = c.length; o < f; o++) {
							const b = c[o];
							b.ignore ||
								g.push(
									E.$jL.insert(
										new C.$hL(n + o, b.commentStrOffset + 1),
										b.commentStr + p,
									),
								);
						}
						return g;
					}
					static r(c, n, g, p) {
						return g ? c + (n - (c % n)) : c + p;
					}
					static _normalizeInsertionPoint(c, n, g, p) {
						let o = w.Constants.MAX_SAFE_SMALL_INTEGER,
							f,
							b;
						for (let s = 0, l = n.length; s < l; s++) {
							if (n[s].ignore) continue;
							const y = c.getLineContent(g + s);
							let $ = 0;
							for (let v = 0, S = n[s].commentStrOffset; $ < o && v < S; v++)
								$ = a.r($, p, y.charCodeAt(v) === t.CharCode.Tab, 1);
							$ < o && (o = $);
						}
						o = Math.floor(o / p) * p;
						for (let s = 0, l = n.length; s < l; s++) {
							if (n[s].ignore) continue;
							const y = c.getLineContent(g + s);
							let $ = 0;
							for (f = 0, b = n[s].commentStrOffset; $ < o && f < b; f++)
								$ = a.r($, p, y.charCodeAt(f) === t.CharCode.Tab, 1);
							$ > o
								? (n[s].commentStrOffset = f - 1)
								: (n[s].commentStrOffset = f);
						}
					}
				}
				e.$Chc = a;
			},
		),
		
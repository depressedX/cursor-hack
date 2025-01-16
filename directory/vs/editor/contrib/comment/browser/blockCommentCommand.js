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
		
define(de[1159], he([1, 0, 164]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$findTextIntersectionFromCharacters = i),
				(e.$isRootTextContentEmpty = w),
				(e.$isRootTextContentEmptyCurry = E),
				(e.$rootTextContent = C),
				(e.$canShowPlaceholder = d),
				(e.$canShowPlaceholderCurry = m),
				(e.registerLexicalTextEntity = r);
			function i(u, a) {
				let h = u.getFirstChild(),
					c = 0;
				e: for (; h !== null; ) {
					if ((0, t.$isElementNode)(h)) {
						const p = h.getFirstChild();
						if (p !== null) {
							h = p;
							continue;
						}
					} else if ((0, t.$isTextNode)(h)) {
						const p = h.getTextContentSize();
						if (c + p > a) return { node: h, offset: a - c };
						c += p;
					}
					const n = h.getNextSibling();
					if (n !== null) {
						h = n;
						continue;
					}
					let g = h.getParent();
					for (; g !== null; ) {
						const p = g.getNextSibling();
						if (p !== null) {
							h = p;
							continue e;
						}
						g = g.getParent();
					}
					break;
				}
				return null;
			}
			function w(u, a = !0) {
				if (u) return !1;
				let h = C();
				return a && (h = h.trim()), h === "";
			}
			function E(u, a) {
				return () => w(u, a);
			}
			function C() {
				return (0, t.$getRoot)().getTextContent();
			}
			function d(u) {
				if (!w(u, !1)) return !1;
				const h = (0, t.$getRoot)().getChildren(),
					c = h.length;
				if (c > 1) return !1;
				for (let n = 0; n < c; n++) {
					const g = h[n];
					if ((0, t.$isDecoratorNode)(g)) return !1;
					if ((0, t.$isElementNode)(g)) {
						if (!(0, t.$isParagraphNode)(g) || g.__indent !== 0) return !1;
						const p = g.getChildren(),
							o = p.length;
						for (let f = 0; f < o; f++) {
							const b = p[n];
							if (!(0, t.$isTextNode)(b)) return !1;
						}
					}
				}
				return !0;
			}
			function m(u) {
				return () => d(u);
			}
			function r(u, a, h, c) {
				const n = (l) => l instanceof h,
					g = (l) => {
						const y = (0, t.$createTextNode)(l.getTextContent());
						y.setFormat(l.getFormat()), l.replace(y);
					},
					p = (l) => l.getLatest().__mode,
					o = (l) => {
						if (!l.isSimpleText()) return;
						const y = l.getPreviousSibling();
						let $ = l.getTextContent(),
							v = l,
							S;
						if ((0, t.$isTextNode)(y)) {
							const I = y.getTextContent(),
								T = I + $,
								P = a(T);
							if (n(y))
								if (P === null || p(y) !== 0) {
									g(y);
									return;
								} else {
									const k = P.end - I.length;
									if (k > 0) {
										const L = $.slice(0, k),
											D = I + L;
										if ((y.select(), y.setTextContent(D), k === $.length))
											l.remove();
										else {
											const M = $.slice(k);
											l.setTextContent(M);
										}
										return;
									}
								}
							else if (P === null || P.start < I.length) return;
						}
						for (;;) {
							S = a($);
							let I = S === null ? "" : $.slice(S.end);
							if ((($ = I), I === "")) {
								const k = v.getNextSibling();
								if ((0, t.$isTextNode)(k)) {
									I = v.getTextContent() + k.getTextContent();
									const L = a(I);
									if (L === null) {
										n(k) ? g(k) : k.markDirty();
										return;
									} else if (L.start !== 0) return;
								}
							} else {
								const k = a(I);
								if (k !== null && k.start === 0) return;
							}
							if (S === null) return;
							if (S.start === 0 && (0, t.$isTextNode)(y) && y.isTextEntity())
								continue;
							let T;
							S.start === 0
								? ([T, v] = v.splitText(S.end))
								: ([, T, v] = v.splitText(S.start, S.end));
							const P = c(T);
							if ((P.setFormat(T.getFormat()), T.replace(P), v == null)) return;
						}
					},
					f = (l) => {
						const y = l.getTextContent(),
							$ = a(y);
						if ($ === null || $.start !== 0) {
							g(l);
							return;
						}
						if (y.length > $.end) {
							l.splitText($.end);
							return;
						}
						const v = l.getPreviousSibling();
						(0, t.$isTextNode)(v) && v.isTextEntity() && (g(v), g(l));
						const S = l.getNextSibling();
						(0, t.$isTextNode)(S) && S.isTextEntity() && (g(S), n(l) && g(l));
					},
					b = u.registerNodeTransform(t.TextNode, o),
					s = u.registerNodeTransform(h, f);
				return [b, s];
			}
		}),
		
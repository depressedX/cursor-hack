define(de[2563], he([1, 0, 658]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$3O = i),
				(e.$4O = w);
			function i(r) {
				if (r.length === 0) return null;
				if (r.length === 1) return r[0];
				let u = 0;
				function a() {
					if (u >= r.length) return null;
					const g = u,
						p = r[g].listHeight;
					for (u++; u < r.length && r[u].listHeight === p; ) u++;
					return u - g >= 2
						? w(g === 0 && u === r.length ? r : r.slice(g, u), !1)
						: r[g];
				}
				let h = a(),
					c = a();
				if (!c) return h;
				for (let g = a(); g; g = a())
					E(h, c) <= E(c, g) ? ((h = C(h, c)), (c = g)) : (c = C(c, g));
				return C(h, c);
			}
			function w(r, u = !1) {
				if (r.length === 0) return null;
				if (r.length === 1) return r[0];
				let a = r.length;
				for (; a > 3; ) {
					const h = a >> 1;
					for (let c = 0; c < h; c++) {
						const n = c << 1;
						r[c] = t.$mN.create23(
							r[n],
							r[n + 1],
							n + 3 === a ? r[n + 2] : null,
							u,
						);
					}
					a = h;
				}
				return t.$mN.create23(r[0], r[1], a >= 3 ? r[2] : null, u);
			}
			function E(r, u) {
				return Math.abs(r.listHeight - u.listHeight);
			}
			function C(r, u) {
				return r.listHeight === u.listHeight
					? t.$mN.create23(r, u, null, !1)
					: r.listHeight > u.listHeight
						? d(r, u)
						: m(u, r);
			}
			function d(r, u) {
				r = r.toMutable();
				let a = r;
				const h = [];
				let c;
				for (;;) {
					if (u.listHeight === a.listHeight) {
						c = u;
						break;
					}
					if (a.kind !== t.AstNodeKind.List) throw new Error("unexpected");
					h.push(a), (a = a.makeLastElementMutable());
				}
				for (let n = h.length - 1; n >= 0; n--) {
					const g = h[n];
					c
						? g.childrenLength >= 3
							? (c = t.$mN.create23(g.unappendChild(), c, null, !1))
							: (g.appendChildOfSameHeight(c), (c = void 0))
						: g.handleChildrenChanged();
				}
				return c ? t.$mN.create23(r, c, null, !1) : r;
			}
			function m(r, u) {
				r = r.toMutable();
				let a = r;
				const h = [];
				for (; u.listHeight !== a.listHeight; ) {
					if (a.kind !== t.AstNodeKind.List) throw new Error("unexpected");
					h.push(a), (a = a.makeFirstElementMutable());
				}
				let c = u;
				for (let n = h.length - 1; n >= 0; n--) {
					const g = h[n];
					c
						? g.childrenLength >= 3
							? (c = t.$mN.create23(c, g.unprependChild(), null, !1))
							: (g.prependChildOfSameHeight(c), (c = void 0))
						: g.handleChildrenChanged();
				}
				return c ? t.$mN.create23(c, r, null, !1) : r;
			}
		}),
		define(
			de[915],
			he([1, 0, 29, 171, 658, 492, 657]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$kN = e.$jN = e.$iN = e.TokenKind = void 0);
				var d;
				(function (h) {
					(h[(h.Text = 0)] = "Text"),
						(h[(h.OpeningBracket = 1)] = "OpeningBracket"),
						(h[(h.ClosingBracket = 2)] = "ClosingBracket");
				})(d || (e.TokenKind = d = {}));
				class m {
					constructor(c, n, g, p, o) {
						(this.length = c),
							(this.kind = n),
							(this.bracketId = g),
							(this.bracketIds = p),
							(this.astNode = o);
					}
				}
				e.$iN = m;
				class r {
					constructor(c, n) {
						(this.d = c),
							(this.e = n),
							(this.c = new u(this.d, this.e)),
							(this.f = E.$DM),
							(this.g = !1),
							(this.h = null),
							(this.a = c.getLineCount()),
							(this.b = c.getLineLength(this.a));
					}
					get offset() {
						return this.f;
					}
					get length() {
						return (0, E.$FM)(this.a - 1, this.b);
					}
					getText() {
						return this.d.getValue();
					}
					skip(c) {
						(this.g = !1), (this.f = (0, E.$JM)(this.f, c));
						const n = (0, E.$GM)(this.f);
						this.c.setPosition(n.lineCount, n.columnCount);
					}
					read() {
						let c;
						return (
							this.h ? ((this.g = !1), (c = this.h)) : (c = this.c.read()),
							c && (this.f = (0, E.$JM)(this.f, c.length)),
							c
						);
					}
					peek() {
						return this.g || ((this.h = this.c.read()), (this.g = !0)), this.h;
					}
				}
				e.$jN = r;
				class u {
					constructor(c, n) {
						(this.c = c),
							(this.d = n),
							(this.e = 0),
							(this.f = null),
							(this.g = 0),
							(this.h = null),
							(this.j = 0),
							(this.k = null),
							(this.a = c.getLineCount()),
							(this.b = c.getLineLength(this.a));
					}
					setPosition(c, n) {
						c === this.e
							? ((this.g = n),
								this.f !== null &&
									(this.j =
										this.g === 0 ? 0 : this.h.findTokenIndexAtOffset(this.g)))
							: ((this.e = c), (this.g = n), (this.f = null)),
							(this.k = null);
					}
					read() {
						if (this.k) {
							const o = this.k;
							return (this.k = null), (this.g += (0, E.$IM)(o.length)), o;
						}
						if (
							this.e > this.a - 1 ||
							(this.e === this.a - 1 && this.g >= this.b)
						)
							return null;
						this.f === null &&
							((this.h = this.c.tokenization.getLineTokens(this.e + 1)),
							(this.f = this.h.getLineContent()),
							(this.j =
								this.g === 0 ? 0 : this.h.findTokenIndexAtOffset(this.g)));
						const c = this.e,
							n = this.g;
						let g = 0;
						for (;;) {
							const o = this.h,
								f = o.getCount();
							let b = null;
							if (this.j < f) {
								const s = o.getMetadata(this.j);
								for (; this.j + 1 < f && s === o.getMetadata(this.j + 1); )
									this.j++;
								const l = i.$2L.getTokenType(s) === i.StandardTokenType.Other,
									y = i.$2L.containsBalancedBrackets(s),
									$ = o.getEndOffset(this.j);
								if (y && l && this.g < $) {
									const v = o.getLanguageId(this.j),
										S = this.f.substring(this.g, $),
										I = this.d.getSingleLanguageBracketTokens(v),
										T = I.regExpGlobal;
									if (T) {
										T.lastIndex = 0;
										const P = T.exec(S);
										P && ((b = I.getToken(P[0])), b && (this.g += P.index));
									}
								}
								if (((g += $ - this.g), b))
									if (c !== this.e || n !== this.g) {
										this.k = b;
										break;
									} else return (this.g += (0, E.$IM)(b.length)), b;
								else this.j++, (this.g = $);
							} else if (
								this.e === this.a - 1 ||
								(this.e++,
								(this.h = this.c.tokenization.getLineTokens(this.e + 1)),
								(this.j = 0),
								(this.f = this.h.getLineContent()),
								(this.g = 0),
								(g += 33),
								g > 1e3)
							)
								break;
							if (g > 1500) break;
						}
						const p = (0, E.$CM)(c, n, this.e, this.g);
						return new m(p, d.Text, -1, C.$ZM.getEmpty(), new w.$nN(p));
					}
				}
				class a {
					constructor(c, n) {
						(this.d = c), (this.a = E.$DM), (this.c = 0);
						const g = n.getRegExpStr(),
							p = g
								? new RegExp(
										g +
											`|
`,
										"gi",
									)
								: null,
							o = [];
						let f,
							b = 0,
							s = 0,
							l = 0,
							y = 0;
						const $ = [];
						for (let I = 0; I < 60; I++)
							$.push(
								new m(
									(0, E.$FM)(0, I),
									d.Text,
									-1,
									C.$ZM.getEmpty(),
									new w.$nN((0, E.$FM)(0, I)),
								),
							);
						const v = [];
						for (let I = 0; I < 60; I++)
							v.push(
								new m(
									(0, E.$FM)(1, I),
									d.Text,
									-1,
									C.$ZM.getEmpty(),
									new w.$nN((0, E.$FM)(1, I)),
								),
							);
						if (p)
							for (p.lastIndex = 0; (f = p.exec(c)) !== null; ) {
								const I = f.index,
									T = f[0];
								if (
									T ===
									`
`
								)
									b++, (s = I + 1);
								else {
									if (l !== I) {
										let P;
										if (y === b) {
											const k = I - l;
											if (k < $.length) P = $[k];
											else {
												const L = (0, E.$FM)(0, k);
												P = new m(
													L,
													d.Text,
													-1,
													C.$ZM.getEmpty(),
													new w.$nN(L),
												);
											}
										} else {
											const k = b - y,
												L = I - s;
											if (k === 1 && L < v.length) P = v[L];
											else {
												const D = (0, E.$FM)(k, L);
												P = new m(
													D,
													d.Text,
													-1,
													C.$ZM.getEmpty(),
													new w.$nN(D),
												);
											}
										}
										o.push(P);
									}
									o.push(n.getToken(T)), (l = I + T.length), (y = b);
								}
							}
						const S = c.length;
						if (l !== S) {
							const I =
								y === b ? (0, E.$FM)(0, S - l) : (0, E.$FM)(b - y, S - s);
							o.push(new m(I, d.Text, -1, C.$ZM.getEmpty(), new w.$nN(I)));
						}
						(this.length = (0, E.$FM)(b, S - s)), (this.b = o);
					}
					get offset() {
						return this.a;
					}
					read() {
						return this.b[this.c++] || null;
					}
					peek() {
						return this.b[this.c] || null;
					}
					skip(c) {
						throw new t.$db();
					}
					getText() {
						return this.d;
					}
				}
				e.$kN = a;
			},
		),
		define(
			de[1537],
			he([1, 0, 37, 658, 492, 657, 915]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$hN = e.$gN = void 0);
				class d {
					static createFromLanguage(a, h) {
						function c(g) {
							return h.getKey(`${g.languageId}:::${g.bracketText}`);
						}
						const n = new Map();
						for (const g of a.bracketsNew.openingBrackets) {
							const p = (0, w.$FM)(0, g.bracketText.length),
								o = c(g),
								f = E.$ZM.getEmpty().add(o, E.$1M);
							n.set(
								g.bracketText,
								new C.$iN(
									p,
									C.TokenKind.OpeningBracket,
									o,
									f,
									i.$oN.create(p, g, f),
								),
							);
						}
						for (const g of a.bracketsNew.closingBrackets) {
							const p = (0, w.$FM)(0, g.bracketText.length);
							let o = E.$ZM.getEmpty();
							const f = g.getOpeningBrackets();
							for (const b of f) o = o.add(c(b), E.$1M);
							n.set(
								g.bracketText,
								new C.$iN(
									p,
									C.TokenKind.ClosingBracket,
									c(f[0]),
									o,
									i.$oN.create(p, g, o),
								),
							);
						}
						return new d(n);
					}
					constructor(a) {
						(this.c = a), (this.a = !1), (this.b = null);
					}
					getRegExpStr() {
						if (this.isEmpty) return null;
						{
							const a = [...this.c.keys()];
							return a.sort(), a.reverse(), a.map((h) => m(h)).join("|");
						}
					}
					get regExpGlobal() {
						if (!this.a) {
							const a = this.getRegExpStr();
							(this.b = a ? new RegExp(a, "gi") : null), (this.a = !0);
						}
						return this.b;
					}
					getToken(a) {
						return this.c.get(a.toLowerCase());
					}
					findClosingTokenText(a) {
						for (const [h, c] of this.c)
							if (
								c.kind === C.TokenKind.ClosingBracket &&
								c.bracketIds.intersects(a)
							)
								return h;
					}
					get isEmpty() {
						return this.c.size === 0;
					}
				}
				e.$gN = d;
				function m(u) {
					let a = (0, t.$of)(u);
					return (
						/^[\w ]+/.test(u) && (a = `\\b${a}`),
						/[\w ]+$/.test(u) && (a = `${a}\\b`),
						a
					);
				}
				class r {
					constructor(a, h) {
						(this.b = a), (this.c = h), (this.a = new Map());
					}
					didLanguageChange(a) {
						return this.a.has(a);
					}
					getSingleLanguageBracketTokens(a) {
						let h = this.a.get(a);
						return (
							h ||
								((h = d.createFromLanguage(this.c(a), this.b)),
								this.a.set(a, h)),
							h
						);
					}
					getToken(a, h) {
						return this.getSingleLanguageBracketTokens(h).getToken(a);
					}
				}
				e.$hN = r;
			},
		),
		define(
			de[1538],
			he([1, 0, 658, 914, 657, 492, 2563, 2562, 915]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$6O = r);
				function r(a, h, c, n) {
					return new u(a, h, c, n).parseDocument();
				}
				class u {
					get nodesConstructed() {
						return this.c;
					}
					get nodesReused() {
						return this.d;
					}
					constructor(h, c, n, g) {
						if (
							((this.e = h), (this.f = g), (this.c = 0), (this.d = 0), n && g)
						)
							throw new Error("Not supported");
						(this.a = n ? new d.$5O(n) : void 0), (this.b = new i.$2O(c));
					}
					parseDocument() {
						(this.c = 0), (this.d = 0);
						let h = this.g(w.$ZM.getEmpty(), 0);
						return h || (h = t.$mN.getEmpty()), h;
					}
					g(h, c) {
						const n = [];
						for (;;) {
							let p = this.h(h);
							if (!p) {
								const o = this.e.peek();
								if (
									!o ||
									(o.kind === m.TokenKind.Text && (0, E.$EM)(o.length)) ||
									(o.kind === m.TokenKind.ClosingBracket &&
										o.bracketIds.intersects(h))
								)
									break;
								p = this.i(h, c + 1);
							}
							(p.kind === t.AstNodeKind.List && p.childrenLength === 0) ||
								n.push(p);
						}
						return this.a ? (0, C.$3O)(n) : (0, C.$4O)(n, this.f);
					}
					h(h) {
						if (this.a) {
							const c = this.b.getDistanceToNextChange(this.e.offset);
							if (c === null || !(0, E.$EM)(c)) {
								const n = this.a.readLongestNodeAt(
									this.b.getOffsetBeforeChange(this.e.offset),
									(g) =>
										c !== null && !(0, E.$NM)(g.length, c)
											? !1
											: g.canBeReused(h),
								);
								if (n) return this.d++, this.e.skip(n.length), n;
							}
						}
					}
					i(h, c) {
						this.c++;
						const n = this.e.read();
						switch (n.kind) {
							case m.TokenKind.ClosingBracket:
								return new t.$pN(n.bracketIds, n.length);
							case m.TokenKind.Text:
								return n.astNode;
							case m.TokenKind.OpeningBracket: {
								if (c > 300) return new t.$nN(n.length);
								const g = h.merge(n.bracketIds),
									p = this.g(g, c + 1),
									o = this.e.peek();
								return o &&
									o.kind === m.TokenKind.ClosingBracket &&
									(o.bracketId === n.bracketId ||
										o.bracketIds.intersects(n.bracketIds))
									? (this.e.read(), t.$lN.create(n.astNode, p, o.astNode))
									: t.$lN.create(n.astNode, p, null);
							}
							default:
								throw new Error("unexpected");
						}
					}
				}
			},
		),
		define(
			de[2564],
			he([1, 0, 658, 1537, 492, 1538, 657, 915]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$GCb = m);
				function m(u, a) {
					const h = new C.$2M(),
						c = new i.$hN(h, (b) => a.getLanguageConfiguration(b)),
						n = new d.$jN(new r([u]), c),
						g = (0, E.$6O)(n, [], void 0, !0);
					let p = "";
					const o = u.getLineContent();
					function f(b, s) {
						if (b.kind === t.AstNodeKind.Pair)
							if (
								(f(b.openingBracket, s),
								(s = (0, w.$JM)(s, b.openingBracket.length)),
								b.child && (f(b.child, s), (s = (0, w.$JM)(s, b.child.length))),
								b.closingBracket)
							)
								f(b.closingBracket, s),
									(s = (0, w.$JM)(s, b.closingBracket.length));
							else {
								const y = c
									.getSingleLanguageBracketTokens(b.openingBracket.languageId)
									.findClosingTokenText(b.openingBracket.bracketIds);
								p += y;
							}
						else if (b.kind !== t.AstNodeKind.UnexpectedClosingBracket) {
							if (
								b.kind === t.AstNodeKind.Text ||
								b.kind === t.AstNodeKind.Bracket
							)
								p += o.substring(
									(0, w.$IM)(s),
									(0, w.$IM)((0, w.$JM)(s, b.length)),
								);
							else if (b.kind === t.AstNodeKind.List)
								for (const l of b.children)
									f(l, s), (s = (0, w.$JM)(s, l.length));
						}
					}
					return f(g, w.$DM), p;
				}
				class r {
					constructor(a) {
						(this.a = a),
							(this.tokenization = { getLineTokens: (h) => this.a[h - 1] });
					}
					getValue() {
						return this.a
							.map((a) => a.getLineContent())
							.join(`
`);
					}
					getLineCount() {
						return this.a.length;
					}
					getLineLength(a) {
						return this.a[a - 1].getLineContent().length;
					}
				}
			},
		),
		
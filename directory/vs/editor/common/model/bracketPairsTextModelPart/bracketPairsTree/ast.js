define(
			de[658],
			he([1, 0, 29, 435, 492, 657]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pN = e.$oN = e.$nN = e.$mN = e.$lN = e.AstNodeKind = void 0);
				var C;
				(function (b) {
					(b[(b.Text = 0)] = "Text"),
						(b[(b.Bracket = 1)] = "Bracket"),
						(b[(b.Pair = 2)] = "Pair"),
						(b[(b.UnexpectedClosingBracket = 3)] = "UnexpectedClosingBracket"),
						(b[(b.List = 4)] = "List");
				})(C || (e.AstNodeKind = C = {}));
				class d {
					get length() {
						return this.a;
					}
					constructor(s) {
						this.a = s;
					}
				}
				class m extends d {
					static create(s, l, y) {
						let $ = s.length;
						return (
							l && ($ = (0, w.$JM)($, l.length)),
							y && ($ = (0, w.$JM)($, y.length)),
							new m(
								$,
								s,
								l,
								y,
								l ? l.missingOpeningBracketIds : E.$ZM.getEmpty(),
							)
						);
					}
					get kind() {
						return C.Pair;
					}
					get listHeight() {
						return 0;
					}
					get childrenLength() {
						return 3;
					}
					getChild(s) {
						switch (s) {
							case 0:
								return this.openingBracket;
							case 1:
								return this.child;
							case 2:
								return this.closingBracket;
						}
						throw new Error("Invalid child index");
					}
					get children() {
						const s = [];
						return (
							s.push(this.openingBracket),
							this.child && s.push(this.child),
							this.closingBracket && s.push(this.closingBracket),
							s
						);
					}
					constructor(s, l, y, $, v) {
						super(s),
							(this.openingBracket = l),
							(this.child = y),
							(this.closingBracket = $),
							(this.missingOpeningBracketIds = v);
					}
					canBeReused(s) {
						return !(
							this.closingBracket === null ||
							s.intersects(this.missingOpeningBracketIds)
						);
					}
					flattenLists() {
						return m.create(
							this.openingBracket.flattenLists(),
							this.child && this.child.flattenLists(),
							this.closingBracket && this.closingBracket.flattenLists(),
						);
					}
					deepClone() {
						return new m(
							this.length,
							this.openingBracket.deepClone(),
							this.child && this.child.deepClone(),
							this.closingBracket && this.closingBracket.deepClone(),
							this.missingOpeningBracketIds,
						);
					}
					computeMinIndentation(s, l) {
						return this.child
							? this.child.computeMinIndentation(
									(0, w.$JM)(s, this.openingBracket.length),
									l,
								)
							: Number.MAX_SAFE_INTEGER;
					}
				}
				e.$lN = m;
				class r extends d {
					static create23(s, l, y, $ = !1) {
						let v = s.length,
							S = s.missingOpeningBracketIds;
						if (s.listHeight !== l.listHeight)
							throw new Error("Invalid list heights");
						if (
							((v = (0, w.$JM)(v, l.length)),
							(S = S.merge(l.missingOpeningBracketIds)),
							y)
						) {
							if (s.listHeight !== y.listHeight)
								throw new Error("Invalid list heights");
							(v = (0, w.$JM)(v, y.length)),
								(S = S.merge(y.missingOpeningBracketIds));
						}
						return $
							? new a(v, s.listHeight + 1, s, l, y, S)
							: new u(v, s.listHeight + 1, s, l, y, S);
					}
					static create(s, l = !1) {
						if (s.length === 0) return this.getEmpty();
						{
							let y = s[0].length,
								$ = s[0].missingOpeningBracketIds;
							for (let v = 1; v < s.length; v++)
								(y = (0, w.$JM)(y, s[v].length)),
									($ = $.merge(s[v].missingOpeningBracketIds));
							return l
								? new c(y, s[0].listHeight + 1, s, $)
								: new h(y, s[0].listHeight + 1, s, $);
						}
					}
					static getEmpty() {
						return new c(w.$DM, 0, [], E.$ZM.getEmpty());
					}
					get kind() {
						return C.List;
					}
					get missingOpeningBracketIds() {
						return this.d;
					}
					constructor(s, l, y) {
						super(s), (this.listHeight = l), (this.d = y), (this.b = -1);
					}
					e() {}
					makeLastElementMutable() {
						this.e();
						const s = this.childrenLength;
						if (s === 0) return;
						const l = this.getChild(s - 1),
							y = l.kind === C.List ? l.toMutable() : l;
						return l !== y && this.f(s - 1, y), y;
					}
					makeFirstElementMutable() {
						if ((this.e(), this.childrenLength === 0)) return;
						const l = this.getChild(0),
							y = l.kind === C.List ? l.toMutable() : l;
						return l !== y && this.f(0, y), y;
					}
					canBeReused(s) {
						if (
							s.intersects(this.missingOpeningBracketIds) ||
							this.childrenLength === 0
						)
							return !1;
						let l = this;
						for (; l.kind === C.List; ) {
							const y = l.childrenLength;
							if (y === 0) throw new t.$gb();
							l = l.getChild(y - 1);
						}
						return l.canBeReused(s);
					}
					handleChildrenChanged() {
						this.e();
						const s = this.childrenLength;
						let l = this.getChild(0).length,
							y = this.getChild(0).missingOpeningBracketIds;
						for (let $ = 1; $ < s; $++) {
							const v = this.getChild($);
							(l = (0, w.$JM)(l, v.length)),
								(y = y.merge(v.missingOpeningBracketIds));
						}
						(this.a = l), (this.d = y), (this.b = -1);
					}
					flattenLists() {
						const s = [];
						for (const l of this.children) {
							const y = l.flattenLists();
							y.kind === C.List ? s.push(...y.children) : s.push(y);
						}
						return r.create(s);
					}
					computeMinIndentation(s, l) {
						if (this.b !== -1) return this.b;
						let y = Number.MAX_SAFE_INTEGER,
							$ = s;
						for (let v = 0; v < this.childrenLength; v++) {
							const S = this.getChild(v);
							S &&
								((y = Math.min(y, S.computeMinIndentation($, l))),
								($ = (0, w.$JM)($, S.length)));
						}
						return (this.b = y), y;
					}
				}
				e.$mN = r;
				class u extends r {
					get childrenLength() {
						return this.k !== null ? 3 : 2;
					}
					getChild(s) {
						switch (s) {
							case 0:
								return this.h;
							case 1:
								return this.j;
							case 2:
								return this.k;
						}
						throw new Error("Invalid child index");
					}
					f(s, l) {
						switch (s) {
							case 0:
								this.h = l;
								return;
							case 1:
								this.j = l;
								return;
							case 2:
								this.k = l;
								return;
						}
						throw new Error("Invalid child index");
					}
					get children() {
						return this.k ? [this.h, this.j, this.k] : [this.h, this.j];
					}
					get item1() {
						return this.h;
					}
					get item2() {
						return this.j;
					}
					get item3() {
						return this.k;
					}
					constructor(s, l, y, $, v, S) {
						super(s, l, S), (this.h = y), (this.j = $), (this.k = v);
					}
					deepClone() {
						return new u(
							this.length,
							this.listHeight,
							this.h.deepClone(),
							this.j.deepClone(),
							this.k ? this.k.deepClone() : null,
							this.missingOpeningBracketIds,
						);
					}
					appendChildOfSameHeight(s) {
						if (this.k)
							throw new Error("Cannot append to a full (2,3) tree node");
						this.e(), (this.k = s), this.handleChildrenChanged();
					}
					unappendChild() {
						if (!this.k)
							throw new Error("Cannot remove from a non-full (2,3) tree node");
						this.e();
						const s = this.k;
						return (this.k = null), this.handleChildrenChanged(), s;
					}
					prependChildOfSameHeight(s) {
						if (this.k)
							throw new Error("Cannot prepend to a full (2,3) tree node");
						this.e(),
							(this.k = this.j),
							(this.j = this.h),
							(this.h = s),
							this.handleChildrenChanged();
					}
					unprependChild() {
						if (!this.k)
							throw new Error("Cannot remove from a non-full (2,3) tree node");
						this.e();
						const s = this.h;
						return (
							(this.h = this.j),
							(this.j = this.k),
							(this.k = null),
							this.handleChildrenChanged(),
							s
						);
					}
					toMutable() {
						return this;
					}
				}
				class a extends u {
					toMutable() {
						return new u(
							this.length,
							this.listHeight,
							this.item1,
							this.item2,
							this.item3,
							this.missingOpeningBracketIds,
						);
					}
					e() {
						throw new Error("this instance is immutable");
					}
				}
				class h extends r {
					get childrenLength() {
						return this.h.length;
					}
					getChild(s) {
						return this.h[s];
					}
					f(s, l) {
						this.h[s] = l;
					}
					get children() {
						return this.h;
					}
					constructor(s, l, y, $) {
						super(s, l, $), (this.h = y);
					}
					deepClone() {
						const s = new Array(this.h.length);
						for (let l = 0; l < this.h.length; l++)
							s[l] = this.h[l].deepClone();
						return new h(
							this.length,
							this.listHeight,
							s,
							this.missingOpeningBracketIds,
						);
					}
					appendChildOfSameHeight(s) {
						this.e(), this.h.push(s), this.handleChildrenChanged();
					}
					unappendChild() {
						this.e();
						const s = this.h.pop();
						return this.handleChildrenChanged(), s;
					}
					prependChildOfSameHeight(s) {
						this.e(), this.h.unshift(s), this.handleChildrenChanged();
					}
					unprependChild() {
						this.e();
						const s = this.h.shift();
						return this.handleChildrenChanged(), s;
					}
					toMutable() {
						return this;
					}
				}
				class c extends h {
					toMutable() {
						return new h(
							this.length,
							this.listHeight,
							[...this.children],
							this.missingOpeningBracketIds,
						);
					}
					e() {
						throw new Error("this instance is immutable");
					}
				}
				const n = [];
				class g extends d {
					get listHeight() {
						return 0;
					}
					get childrenLength() {
						return 0;
					}
					getChild(s) {
						return null;
					}
					get children() {
						return n;
					}
					flattenLists() {
						return this;
					}
					deepClone() {
						return this;
					}
				}
				class p extends g {
					get kind() {
						return C.Text;
					}
					get missingOpeningBracketIds() {
						return E.$ZM.getEmpty();
					}
					canBeReused(s) {
						return !0;
					}
					computeMinIndentation(s, l) {
						const y = (0, w.$GM)(s),
							$ = (y.columnCount === 0 ? y.lineCount : y.lineCount + 1) + 1,
							v = (0, w.$HM)((0, w.$JM)(s, this.length)) + 1;
						let S = Number.MAX_SAFE_INTEGER;
						for (let I = $; I <= v; I++) {
							const T = l.getLineFirstNonWhitespaceColumn(I),
								P = l.getLineContent(I);
							if (T === 0) continue;
							const k = i.$BM.visibleColumnFromColumn(
								P,
								T,
								l.getOptions().tabSize,
							);
							S = Math.min(S, k);
						}
						return S;
					}
				}
				e.$nN = p;
				class o extends g {
					static create(s, l, y) {
						return new o(s, l, y);
					}
					get kind() {
						return C.Bracket;
					}
					get missingOpeningBracketIds() {
						return E.$ZM.getEmpty();
					}
					constructor(s, l, y) {
						super(s), (this.bracketInfo = l), (this.bracketIds = y);
					}
					get text() {
						return this.bracketInfo.bracketText;
					}
					get languageId() {
						return this.bracketInfo.languageId;
					}
					canBeReused(s) {
						return !1;
					}
					computeMinIndentation(s, l) {
						return Number.MAX_SAFE_INTEGER;
					}
				}
				e.$oN = o;
				class f extends g {
					get kind() {
						return C.UnexpectedClosingBracket;
					}
					constructor(s, l) {
						super(l), (this.missingOpeningBracketIds = s);
					}
					canBeReused(s) {
						return !s.intersects(this.missingOpeningBracketIds);
					}
					computeMinIndentation(s, l) {
						return Number.MAX_SAFE_INTEGER;
					}
				}
				e.$pN = f;
			},
		),
		
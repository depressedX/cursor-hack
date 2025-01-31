import '../../../../../../require.js';
import '../../../../../../exports.js';
import './ast.js';
import './beforeEditPositionMapper.js';
import './smallImmutableSet.js';
import './length.js';
import './concat23Trees.js';
import './nodeReader.js';
import './tokenizer.js';
define(
			de[1538],
			he([1, 0, 658, 914, 657, 492, 2563, 2562, 915]),
			function (ce /*require*/,
 e /*exports*/,
 t /*ast*/,
 i /*beforeEditPositionMapper*/,
 w /*smallImmutableSet*/,
 E /*length*/,
 C /*concat23Trees*/,
 d /*nodeReader*/,
 m /*tokenizer*/) {
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
		)

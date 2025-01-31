import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/lifecycle.js';
import '../../../common/core/position.js';
import '../../../common/core/range.js';
import '../../../../base/common/network.js';
import '../../../../base/common/uri.js';
define(
			de[1177],
			he([1, 0, 29, 3, 48, 17, 23, 9]),
			function (ce /*require*/,
 e /*exports*/,
 t /*errors*/,
 i /*lifecycle*/,
 w /*position*/,
 E /*range*/,
 C /*network*/,
 d /*uri*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$mhc = e.$lhc = e.$khc = void 0),
					(e.$nhc = a);
				class m {
					constructor(c, n) {
						(this.range = c), (this.direction = n);
					}
				}
				e.$khc = m;
				class r {
					constructor(c, n, g) {
						(this.hint = c),
							(this.anchor = n),
							(this.provider = g),
							(this.c = !1);
					}
					with(c) {
						const n = new r(this.hint, c.anchor, this.provider);
						return (n.c = this.c), (n.d = this.d), n;
					}
					async resolve(c) {
						if (typeof this.provider.resolveInlayHint == "function") {
							if (this.d)
								return (
									await this.d,
									c.isCancellationRequested ? void 0 : this.resolve(c)
								);
							this.c || (this.d = this.e(c).finally(() => (this.d = void 0))),
								await this.d;
						}
					}
					async e(c) {
						try {
							const n = await Promise.resolve(
								this.provider.resolveInlayHint(this.hint, c),
							);
							(this.hint.tooltip = n?.tooltip ?? this.hint.tooltip),
								(this.hint.label = n?.label ?? this.hint.label),
								(this.hint.textEdits = n?.textEdits ?? this.hint.textEdits),
								(this.c = !0);
						} catch (n) {
							(0, t.$5)(n), (this.c = !1);
						}
					}
				}
				e.$lhc = r;
				class u {
					static {
						this.c = Object.freeze({ dispose() {}, hints: [] });
					}
					static async create(c, n, g, p) {
						const o = [],
							f = c
								.ordered(n)
								.reverse()
								.map((b) =>
									g.map(async (s) => {
										try {
											const l = await b.provideInlayHints(n, s, p);
											(l?.hints.length || b.onDidChangeInlayHints) &&
												o.push([l ?? u.c, b]);
										} catch (l) {
											(0, t.$5)(l);
										}
									}),
								);
						if (
							(await Promise.all(f.flat()),
							p.isCancellationRequested || n.isDisposed())
						)
							throw new t.$9();
						return new u(g, o, n);
					}
					constructor(c, n, g) {
						(this.d = new i.$Zc()),
							(this.ranges = c),
							(this.provider = new Set());
						const p = [];
						for (const [o, f] of n) {
							this.d.add(o), this.provider.add(f);
							for (const b of o.hints) {
								const s = g.validatePosition(b.position);
								let l = "before";
								const y = u.e(g, s);
								let $;
								y.getStartPosition().isBefore(s)
									? (($ = E.$iL.fromPositions(y.getStartPosition(), s)),
										(l = "after"))
									: (($ = E.$iL.fromPositions(s, y.getEndPosition())),
										(l = "before")),
									p.push(new r(b, new m($, l), f));
							}
						}
						this.items = p.sort((o, f) =>
							w.$hL.compare(o.hint.position, f.hint.position),
						);
					}
					dispose() {
						this.d.dispose();
					}
					static e(c, n) {
						const g = n.lineNumber,
							p = c.getWordAtPosition(n);
						if (p) return new E.$iL(g, p.startColumn, g, p.endColumn);
						c.tokenization.tokenizeIfCheap(g);
						const o = c.tokenization.getLineTokens(g),
							f = n.column - 1,
							b = o.findTokenIndexAtOffset(f);
						let s = o.getStartOffset(b),
							l = o.getEndOffset(b);
						return (
							l - s === 1 &&
								(s === f && b > 1
									? ((s = o.getStartOffset(b - 1)), (l = o.getEndOffset(b - 1)))
									: l === f &&
										b < o.getCount() - 1 &&
										((s = o.getStartOffset(b + 1)),
										(l = o.getEndOffset(b + 1)))),
							new E.$iL(g, s + 1, g, l + 1)
						);
					}
				}
				e.$mhc = u;
				function a(h) {
					return d.URI.from({
						scheme: C.Schemas.command,
						path: h.id,
						query:
							h.arguments && encodeURIComponent(JSON.stringify(h.arguments)),
					}).toString();
				}
			},
		)

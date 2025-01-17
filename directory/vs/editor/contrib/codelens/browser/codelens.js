import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/types.js';
import '../../../../base/common/uri.js';
import '../../../common/services/model.js';
import '../../../../platform/commands/common/commands.js';
import '../../../common/services/languageFeatures.js';
define(
			de[1601],
			he([1, 0, 33, 29, 3, 28, 9, 67, 31, 69]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$JBb = void 0),
					(e.$KBb = a);
				class u {
					constructor() {
						(this.lenses = []), (this.c = new w.$Zc());
					}
					dispose() {
						this.c.dispose();
					}
					get isDisposed() {
						return this.c.isDisposed;
					}
					add(c, n) {
						this.c.add(c);
						for (const g of c.lenses)
							this.lenses.push({ symbol: g, provider: n });
					}
				}
				e.$JBb = u;
				async function a(h, c, n) {
					const g = h.ordered(c),
						p = new Map(),
						o = new u(),
						f = g.map(async (b, s) => {
							p.set(b, s);
							try {
								const l = await Promise.resolve(b.provideCodeLenses(c, n));
								l && o.add(l, b);
							} catch (l) {
								(0, i.$5)(l);
							}
						});
					return (
						await Promise.all(f),
						(o.lenses = o.lenses.sort((b, s) =>
							b.symbol.range.startLineNumber < s.symbol.range.startLineNumber
								? -1
								: b.symbol.range.startLineNumber >
										s.symbol.range.startLineNumber
									? 1
									: p.get(b.provider) < p.get(s.provider)
										? -1
										: p.get(b.provider) > p.get(s.provider)
											? 1
											: b.symbol.range.startColumn < s.symbol.range.startColumn
												? -1
												: b.symbol.range.startColumn >
														s.symbol.range.startColumn
													? 1
													: 0,
						)),
						o
					);
				}
				m.$fk.registerCommand("_executeCodeLensProvider", function (h, ...c) {
					let [n, g] = c;
					(0, E.$vg)(C.URI.isUri(n)), (0, E.$vg)(typeof g == "number" || !g);
					const { codeLensProvider: p } = h.get(r.$k3),
						o = h.get(d.$QO).getModel(n);
					if (!o) throw (0, i.$$)();
					const f = [],
						b = new w.$Zc();
					return a(p, o, t.CancellationToken.None)
						.then((s) => {
							b.add(s);
							const l = [];
							for (const y of s.lenses)
								g == null || y.symbol.command
									? f.push(y.symbol)
									: g-- > 0 &&
										y.provider.resolveCodeLens &&
										l.push(
											Promise.resolve(
												y.provider.resolveCodeLens(
													o,
													y.symbol,
													t.CancellationToken.None,
												),
											).then(($) => f.push($ || y.symbol)),
										);
							return Promise.all(l);
						})
						.then(() => f)
						.finally(() => {
							setTimeout(() => b.dispose(), 100);
						});
				});
			},
		),
		
define(
			de[2697],
			he([1, 0, 17, 1155, 48, 9, 1547]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Flc = r);
				const d = (c, n, g, p = !1) => {
					(0, C.$Clc)("[ian] text", JSON.stringify(c)),
						(0, C.$Clc)("[ian] startLineNumber", n);
					const o = c.split(g);
					if (p) {
						const f = o[0];
						f !== void 0 &&
							f === "" &&
							c !==
								`
` &&
							o.shift();
						const b = o[o.length - 1];
						if (
							(b !== void 0 &&
								b === "" &&
								c !==
									`
` &&
								o.pop(),
							o.length === 0)
						)
							return { lineNumber: n, column: 1 };
					}
					return {
						lineNumber: n + o.length - 1,
						column: o[o.length - 1].length + 1,
					};
				};
				function m(c, n, g, p, o = !1) {
					let f = "",
						b = "",
						s,
						l,
						y;
					const $ = [],
						v = (I) => {
							if (y !== void 0) {
								const T = d(I, p.startLineNumber, g, o);
								$.push({
									startLineNumber: y.lineNumber,
									startColumn: y.column,
									endLineNumber: T.lineNumber,
									endColumn: T.column,
								});
							}
							y = void 0;
						};
					for (const I of n)
						I.removed
							? ((y = d(f, p.startLineNumber, g, o)),
								s === void 0 && (s = y),
								(l = d(f + I.value, p.startLineNumber, g, o)))
							: v(f),
							I.added || (f += I.value),
							I.removed || (b += I.value);
					if ((v(f), s === void 0 || l === void 0))
						throw new Error(
							"firstRemovedPositionInFullBeforeModel or lastRemovedPositionInFullBeforeModel is undefined",
						);
					let S;
					return (
						(S = h(c, s, l, !0, !0)),
						{
							changesRangeInBeforeFullModel: S,
							selectiveNewText: "",
							addedRangesInNewFullModel: [],
							lineCount: 0,
							deletion: !0,
							deletedRanges: $,
						}
					);
				}
				function r(c, n, g, p, o = !1) {
					const f = [];
					if (c.some((R) => R.removed) && !c.some((R) => R.added))
						return m(n, c, g, p, o);
					(0, C.$Clc)("[ian] changes", c);
					let b = "",
						s = "",
						l,
						y,
						$,
						v,
						S,
						I,
						T;
					const P = (R) => {
						if (l !== void 0) {
							const O = d(R, p.startLineNumber, g);
							f.push({
								startLineNumber: l.lineNumber,
								startColumn: l.column,
								endLineNumber: O.lineNumber,
								endColumn: O.column,
							});
						}
						l = void 0;
					};
					for (const R of c) {
						if (R.added) {
							l = d(s, p.startLineNumber, g, o);
							const O = d(b, p.startLineNumber, g, o);
							if (y === void 0) {
								let B = b;
								T !== void 0 && b.endsWith(T) && (B = b.slice(0, -T.length)),
									(y = d(B, p.startLineNumber, g, o)),
									(I = R.value);
							}
							($ = O),
								v === void 0 && (v = d(s, 1, g, o)),
								(S = d(s + R.value, 1, g, o));
						} else P(s), R.removed && (T = R.value);
						R.added || (b += R.value), R.removed || (s += R.value);
					}
					P(s);
					const k =
						I !== void 0 &&
						I.startsWith(`
`);
					(0, C.$Clc)("[ian] firstAddedPositionInFullBeforeModel", y),
						(0, C.$Clc)("[ian] lastAddedPositionInFullBeforeModel", $),
						(0, C.$Clc)("[ian] firstAddedPositionInSubsetAfterModel", v),
						(0, C.$Clc)("[ian] lastAddedPositionInSubsetAfterModel", S),
						(0, C.$Clc)("[ian] trimStart", k);
					let L = p;
					$ !== void 0 && y !== void 0 && (L = h(n, y, $, k, !1));
					const D = (0, i.$bfc)(s, E.URI.parse(""));
					let M;
					S !== void 0 && v !== void 0 && (M = h(D, v, S, k, !0)),
						(0, C.$Clc)(
							`[ian] afterModel value:
` + (0, C.$Elc)(D.getValue(), g),
						),
						(0, C.$Clc)("[ian] afterRange", M);
					const N = M ? D.getValueInRange(M) : "";
					return {
						changesRangeInBeforeFullModel: L,
						selectiveNewText: N,
						addedRangesInNewFullModel: f.map((R) => t.$iL.lift(R)),
						lineCount: N.split(g).length,
						deletion: !1,
					};
				}
				function u(c, n) {
					return n.column > c.getLineMaxColumn(n.lineNumber)
						? n.lineNumber < c.getLineCount()
							? new w.$hL(n.lineNumber + 1, 1)
							: n
						: new w.$hL(n.lineNumber, 1);
				}
				function a(c, n) {
					return n.column === 1 && n.lineNumber > 1
						? new w.$hL(n.lineNumber - 1, c.getLineMaxColumn(n.lineNumber - 1))
						: n;
				}
				function h(c, n, g, p, o) {
					if (n.lineNumber === g.lineNumber && n.column === g.column)
						return new t.$iL(n.lineNumber, n.column, g.lineNumber, g.column);
					if (n.lineNumber === g.lineNumber)
						return new t.$iL(
							n.lineNumber,
							1,
							g.lineNumber,
							c.getLineMaxColumn(g.lineNumber),
						);
					let f = n;
					if ((p && (f = u(c, n)), f.lineNumber === g.lineNumber))
						return new t.$iL(
							f.lineNumber,
							1,
							g.lineNumber,
							c.getLineMaxColumn(g.lineNumber),
						);
					let b = g;
					return (
						o && (b = a(c, g)),
						new t.$iL(
							f.lineNumber,
							1,
							b.lineNumber,
							c.getLineMaxColumn(b.lineNumber),
						)
					);
				}
			},
		),
		
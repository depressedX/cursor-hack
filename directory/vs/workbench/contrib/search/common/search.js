import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/errors.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../common/editor.js';
import '../../../services/editor/common/editorService.js';
import '../../../../base/common/cancellation.js';
import '../../../../platform/files/common/files.js';
import '../../../../editor/common/core/range.js';
import '../../../../base/common/types.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../base/common/strings.js';
import '../../../../base/common/arrays.js';
define(
			de[568],
			he([1, 0, 29, 25, 44, 18, 33, 22, 17, 28, 8, 37, 24]),
			function (ce /*require*/,
 e /*exports*/,
 t /*errors*/,
 i /*workspace*/,
 w /*editor*/,
 E /*editorService*/,
 C /*cancellation*/,
 d /*files*/,
 m /*range*/,
 r /*types*/,
 u /*contextkey*/,
 a /*strings*/,
 h /*arrays*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$R7 =
						e.SearchUIState =
						e.$N7 =
						e.WorkspaceSymbolProviderRegistry =
							void 0),
					(e.$O7 = g),
					(e.$P7 = p),
					(e.$Q7 = f);
				var c;
				(function (s) {
					const l = [];
					function y(v) {
						let S = v;
						return (
							S && l.push(S),
							{
								dispose() {
									if (S) {
										const I = l.indexOf(S);
										I >= 0 && (l.splice(I, 1), (S = void 0));
									}
								},
							}
						);
					}
					s.register = y;
					function $() {
						return l.slice(0);
					}
					s.all = $;
				})(c || (e.WorkspaceSymbolProviderRegistry = c = {}));
				class n {
					constructor(l, y) {
						(this.symbol = l), (this.provider = y);
					}
				}
				e.$N7 = n;
				async function g(s, l = C.CancellationToken.None) {
					const y = [],
						$ = c.all().map(async (S) => {
							try {
								const I = await S.provideWorkspaceSymbols(s, l);
								if (!I) return;
								let T = 0;
								for (const P of I) {
									if ((T++, T > 100)) break;
									y.push(new n(P, S));
								}
							} catch (I) {
								(0, t.$5)(I);
							}
						});
					if ((await Promise.all($), l.isCancellationRequested)) return [];
					function v(S, I) {
						let T = (0, a.$Ff)(S.symbol.name, I.symbol.name);
						return (
							T === 0 && (T = S.symbol.kind - I.symbol.kind),
							T === 0 &&
								(T = (0, a.$Ff)(
									S.symbol.location.uri.toString(),
									I.symbol.location.uri.toString(),
								)),
							T === 0 &&
								(S.symbol.location.range && I.symbol.location.range
									? m.$iL.areIntersecting(
											S.symbol.location.range,
											I.symbol.location.range,
										) ||
										(T = m.$iL.compareRangesUsingStarts(
											S.symbol.location.range,
											I.symbol.location.range,
										))
									: S.provider.resolveWorkspaceSymbol &&
											!I.provider.resolveWorkspaceSymbol
										? (T = -1)
										: !S.provider.resolveWorkspaceSymbol &&
											I.provider.resolveWorkspaceSymbol &&
											(T = 1)),
							T === 0 &&
								(T = (0, a.$Ff)(
									S.symbol.containerName ?? "",
									I.symbol.containerName ?? "",
								)),
							T
						);
					}
					return (0, h.$Db)(y, v)
						.map((S) => S[0])
						.flat();
				}
				function p(s) {
					const l = s.get(E.$IY),
						y = s.get(i.$Vi),
						$ = s.get(d.$ll);
					return l.editors
						.map((S) =>
							w.$A1.getOriginalUri(S, {
								supportSideBySide: w.SideBySideEditor.PRIMARY,
							}),
						)
						.filter((S) => !!S && !y.isInsideWorkspace(S) && $.hasProvider(S));
				}
				const o = /\s?[#:\(](?:line )?(\d*)(?:[#:,](\d*))?\)?:?\s*$/;
				function f(s, l) {
					if (
						!s ||
						l?.some((v) => {
							const S = s.indexOf(v);
							return S === 0 || (S > 0 && !o.test(s.substring(S + 1)));
						})
					)
						return;
					let y;
					const $ = o.exec(s);
					if ($) {
						const v = parseInt($[1] ?? "", 10);
						if ((0, r.$pg)(v)) {
							y = {
								startLineNumber: v,
								startColumn: 1,
								endLineNumber: v,
								endColumn: 1,
							};
							const S = parseInt($[2] ?? "", 10);
							(0, r.$pg)(S) &&
								(y = {
									startLineNumber: y.startLineNumber,
									startColumn: S,
									endLineNumber: y.endLineNumber,
									endColumn: S,
								});
						} else
							$[1] === "" &&
								(y = {
									startLineNumber: 1,
									startColumn: 1,
									endLineNumber: 1,
									endColumn: 1,
								});
					}
					if ($ && y) return { filter: s.substr(0, $.index), range: y };
				}
				var b;
				(function (s) {
					(s[(s.Idle = 0)] = "Idle"),
						(s[(s.Searching = 1)] = "Searching"),
						(s[(s.SlowSearch = 2)] = "SlowSearch");
				})(b || (e.SearchUIState = b = {})),
					(e.$R7 = new u.$5j("searchState", b.Idle));
			},
		)

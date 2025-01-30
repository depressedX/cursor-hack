import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/cancellation.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/path.js';
import '../../../controlCommon/browser/solid.js';
import '../aiInput/plugins/mentions/searchHooks.js';
define(
			de[1996],
			he([1, 0, 13, 33, 3, 54, 36, 1381]),
			function (ce /*require*/,
 e /*exports*/,
 t /*solid*/,
 i /*cancellation*/,
 w /*lifecycle*/,
 E /*path*/,
 C /*solid*/,
 d /*searchHooks*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$1bc = r);
				const m = !1;
				function r(a) {
					const h = (0, C.$odc)(),
						[c, n] = (0, t.createSignal)([]),
						[g, p] = (0, t.createSignal)(!1),
						[o, f] = (0, t.createSignal)(null),
						b = (0, t.createRoot)(() => (0, t.createSignal)(a()));
					(0, t.onMount)(() => {
						h.anythingQuickAccessProvider.initializeCaches();
					});
					const s = async ($) =>
							(
								await Promise.all(
									$.map(async (S) => {
										try {
											return (await h.fileService.exists(S.uri)) ? S : null;
										} catch (I) {
											return (
												console.error(`Error checking file existence: ${I}`),
												null
											);
										}
									}),
								)
							).filter((S) => S !== null),
						l = async () => {
							const $ = Date.now();
							let v = 0,
								S = 0,
								I = 0;
							const T = b[0](),
								P = new i.$Ce();
							p(!0), f(null);
							try {
								const k = Date.now(),
									L = h.anythingQuickAccessProvider.doGetPicksPublic(
										T,
										{
											enableEditorSymbolSearch: !0,
											excludeNotepads: !0,
											excludeSemanticSearch: !0,
											excludeCursorIgnore: !0,
										},
										new w.$Zc(),
										P.token,
									);
								v = Date.now() - k;
								let D = [];
								const M = Date.now();
								if ((0, d.$7_b)(L)) {
									const [N, A] = await Promise.all([
										Promise.resolve(L.picks),
										L.additionalPicks,
									]);
									D = [...u(N), ...u(A)];
								} else if (L instanceof Promise) {
									const N = await L;
									D = u(N);
								} else D = u(L);
								if (((S = Date.now() - M), !P.token.isCancellationRequested)) {
									const N = Date.now(),
										A = await s(D);
									(I = Date.now() - N), n(A);
								}
							} catch (k) {
								console.log("[ian]", k),
									P.token.isCancellationRequested ||
										f(k instanceof Error ? k.message : "An error occurred");
							} finally {
								if (
									(P.token.isCancellationRequested || p(!1), P.dispose(), m)
								) {
									const k = Date.now() - $;
									console.log(`Timing for fetchFiles:
Total time: ${k}ms
Picks fetch time: ${v}ms
Extract time: ${S}ms
Existence check time: ${I}ms`);
								}
							}
						};
					let y;
					return (
						(0, t.createEffect)(() => {
							const $ = a();
							b[1]($), clearTimeout(y), (y = setTimeout(l, 150));
						}),
						(0, t.onMount)(() => {
							l();
						}),
						{ allFiles: c, isLoading: g, error: o }
					);
				}
				function u(a) {
					return (
						(0, d.$8_b)(a) && (a = a.items),
						a
							.filter((h) => h.resource !== void 0)
							.map((h) => ({
								uri: h.resource,
								fileName: (0, E.$sc)(h.resource.fsPath),
								isCurrentFile: !1,
								labelMatches: h.highlights?.label || [],
								descriptionMatches: h.highlights?.description || [],
							}))
					);
				}
			},
		),
		
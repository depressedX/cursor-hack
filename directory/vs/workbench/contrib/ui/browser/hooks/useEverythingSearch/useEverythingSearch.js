import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/solid/solid.js';
import '../../../../../../base/common/cancellation.js';
import '../../../../controlCommon/browser/solid.js';
import './searchFiles.js';
import './searchFolders.js';
import './searchGit.js';
import './searchNotepads.js';
import './searchSymbols.js';
import './searchSemantics.js';
import './types.js';
define(
			de[1071],
			he([1, 0, 13, 33, 36, 3202, 3919, 3198, 3199, 3201, 3200, 444]),
			function (ce /*require*/,
 e /*exports*/,
 t /*solid*/,
 i /*cancellation*/,
 w /*solid*/,
 E /*searchFiles*/,
 C /*searchFolders*/,
 d /*searchGit*/,
 m /*searchNotepads*/,
 r /*searchSymbols*/,
 u /*searchSemantics*/,
 a /*types*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$1_b = h);
				function h(c, n, g, p) {
					const [o, f] = (0, t.createSignal)([]),
						[b, s] = (0, t.createSignal)(null),
						[l, y] = (0, t.createSignal)(null),
						[$, v] = (0, t.createSignal)(!1),
						S = (0, w.$odc)();
					(0, t.onMount)(() => {
						S.anythingQuickAccessProvider.initializeCaches(),
							S.selectedContextService.addOnCursorIgnoreLoadedCallback(() => {
								console.log("Cursor ignore loaded, searching again"), T();
							});
					});
					const I = (k, L, D, M, N) => {
							const A = {
								[a.EverythingSearchOptionType.File]: () =>
									(0, E.$U_b)(k, S, D, N.file),
								[a.EverythingSearchOptionType.Folder]: () =>
									(0, C.$V_b)(k, S, D),
								[a.EverythingSearchOptionType.Symbol]: () =>
									(0, r.$Y_b)(k, S, D),
								[a.EverythingSearchOptionType.Git]: () => (0, d.$W_b)(k, S, D),
								[a.EverythingSearchOptionType.Notepad]: () => (0, m.$X_b)(k, S),
								[a.EverythingSearchOptionType.Semantic]: () =>
									(0, u.$Z_b)(k, S, M, N.semantic),
							};
							return L.length === 0
								? Object.values(A).map((R) => R())
								: L.map((R) => A[R]());
						},
						T = async () => {
							if (p?.()) {
								f([]), v(!1);
								return;
							}
							const k = c(),
								L = n ? n() : [],
								D = g ? g() : {};
							b()?.cancel(), b()?.dispose(), l()?.abort();
							const M = new i.$Ce(),
								N = new AbortController();
							s(M), y(N), v(!0);
							try {
								const A = I(k, L, M, N.signal, D);
								let R = [];
								const O = [...A];
								for (; O.length > 0; ) {
									const B = await Promise.race(
										O.map((U, z) =>
											U.then((F) => ({
												result: F,
												index: z,
												error: null,
											})).catch((F) => ({ result: [], index: z, error: F })),
										),
									);
									O.splice(B.index, 1),
										B.error
											? console.error("Search failed:", B.error)
											: ((R = [...R, ...B.result].sort(
													(U, z) => z.score - U.score,
												)),
												f(R));
								}
							} catch (A) {
								A.name === "AbortError"
									? console.log("Search aborted")
									: console.error("Error during search:", A);
							} finally {
								v(!1);
							}
						};
					let P;
					return (
						(0, t.createEffect)(
							(0, t.on)(
								[c, () => n?.() ?? [], () => g?.() ?? {}, () => p?.() ?? !1],
								async () => {
									if (p?.()) {
										f([]), v(!1);
										return;
									}
									clearTimeout(P),
										(P = setTimeout(async () => {
											await T();
										}, 30));
								},
							),
						),
						(0, t.onMount)(() => {
							p?.() || T();
						}),
						{ options: o, isLoading: $ }
					);
				}
			},
		),
		
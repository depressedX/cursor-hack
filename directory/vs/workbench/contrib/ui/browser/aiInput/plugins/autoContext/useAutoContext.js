import '../../../../../../../../require.js';
import '../../../../../../../../exports.js';
import '../../../../../../../../external/solid/web.js';
import '../../../../../../../../external/solid/web.js';
import '../../../../../../../../external/solid/web.js';
import '../../../../../../../../external/solid/web.js';
import '../../../../../../../../external/lexical/lexical-solid/LexicalComposerContext.js';
import '../../../../../../../../external/solid/solid.js';
import '../../../../../../../base/common/codicons.js';
import '../../../../../../../base/common/themables.js';
import '../../../../../controlCommon/browser/solid.js';
import '../mentions/pureIcon.js';
import '../mentions/types.js';
import '../../../hooks/useEverythingSearch/types.js';
import '../../../hooks/useEverythingSearch/useEverythingSearch.js';
import '../../../loadingSpinner/loadingSpinner.js';
import '../../../../../../../../external/lexical/lexical/api.js';
import '../mentions/MentionNode.js';
define(
			de[1973],
			he([
				1, 0, 2, 2, 2, 2, 181, 13, 14, 26, 36, 156, 310, 444, 1071, 295, 164,
				816,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*LexicalComposerContext*/,
 d /*solid*/,
 m /*codicons*/,
 r /*themables*/,
 u /*solid*/,
 a /*pureIcon*/,
 h /*types*/,
 c /*types*/,
 n /*useEverythingSearch*/,
 g /*loadingSpinner*/,
 p /*api*/,
 o /*MentionNode*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$5_b = s);
				const f = (0, t.template)("<span>");
				function b(l, y) {
					return new h.$u_b(
						l.name,
						(0, E.createComponent)(a.$k$b, {
							get fileName() {
								return l.name;
							},
							get workspaceContextService() {
								return y.workspaceContextService;
							},
							get modelService() {
								return y.modelService;
							},
							get languageService() {
								return y.languageService;
							},
						}),
						h.TypeaheadOptionType.auto_context,
						l.score,
						{ uri: l.uri },
						void 0,
						l.secondaryText,
					);
				}
				function s(l, y) {
					const $ = (0, u.$odc)(),
						[v] = (0, C.useLexicalComposerContext)(),
						[S, I] = (0, d.createSignal)(0);
					v.registerUpdateListener(() => {
						I((O) => O + 1);
					});
					const T = (0, d.createMemo)(() => {
							try {
								S();
								const O = v.getEditorState();
								if (!O) return "";
								const B = O.read(() => {
									try {
										let U = "";
										const z = (0, p.$getRoot)();
										if (!z) return "";
										const F = (x) => {
											x &&
												((0, o.$isMentionNode)(x) ||
													((0, p.$isTextNode)(x)
														? (U += x.getTextContent())
														: "getChildren" in x &&
															x.getChildren().forEach(F)));
										};
										return "getChildren" in z && z.getChildren().forEach(F), U;
									} catch (U) {
										return (
											console.error("Error traversing editor state:", U), ""
										);
									}
								});
								return B === "$" || B === "@" ? "" : B;
							} catch (O) {
								return console.error("Error in plainText memo:", O), "";
							}
						}),
						P = (0, d.createMemo)(() => ({
							semantic: { fileBased: !0, topK: 50, finalK: 25 },
							file: { autoPopulate: T() === "" },
						})),
						k = (0, d.createMemo)(() => {
							const O = l() || "";
							return O.startsWith("$") ? O.slice(1) : O;
						}),
						{ options: L, isLoading: D } = (0, n.$1_b)(
							k,
							() => [c.EverythingSearchOptionType.Semantic],
							P,
							() => y?.disabled?.() ?? !1,
						),
						{ options: M, isLoading: N } = (0, n.$1_b)(
							() => T(),
							() => [c.EverythingSearchOptionType.Semantic],
							P,
							() => y?.disabled?.() ?? !1,
						),
						A = (0, d.createMemo)(() => D() || N());
					return {
						options: (0, d.createMemo)(() => {
							const O = new Set(),
								B = [...L(), ...M()]
									.filter((z) => {
										if (!z.uri) return !1;
										const F = z.uri.toString();
										return !(
											O.has(F) ||
											(O.add(F),
											y?.excludeFiles?.()?.some((x) => x.toString() === F))
										);
									})
									.sort((z, F) => F.score - z.score),
								U = [];
							return (
								U.push(
									...B.map((z) => b(z, $)).slice(
										0,
										y?.resultsLimit?.() ?? 1 / 0,
									),
								),
								y?.showLoading && A()
									? U.push(
											new h.$u_b(
												"Loading",
												(0, E.createComponent)(g.$Z8b, {}),
												h.TypeaheadOptionType.staticheading,
												0,
												void 0,
												void 0,
												void 0,
											),
										)
									: B.length > (y?.resultsLimit?.() ?? 1 / 0) &&
										y?.showLoadMore &&
										U.push(
											new h.$u_b(
												`${B.length - (y?.resultsLimit?.() ?? 1 / 0)} more results`,
												(() => {
													const z = f();
													return (
														(0, w.effect)(() =>
															(0, i.className)(
																z,
																r.ThemeIcon.asClassName(m.$ak.ellipsis),
															),
														),
														z
													);
												})(),
												h.TypeaheadOptionType.heading,
												0,
												void 0,
												void 0,
												void 0,
												void 0,
												{ isLoadMore: !0 },
											),
										),
								U
							);
						}),
						isLoading: A,
					};
				}
			},
		)

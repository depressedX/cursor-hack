import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/path.js';
import '../../../ui/browser/aiInput/plugins/mentions/pureIcon.js';
import '../../../ui/browser/loadingSpinner/loadingSpinner.js';
import '../../../controlCommon/browser/solid.js';
import '../../../../services/utils/browser/isPureClick.js';
import '../../../../../platform/opener/common/opener.js';
import './utils/bm25.js';
import '../../../ui/browser/scrollableDiv.js';
import '../../../../../base/common/themables.js';
import '../../../../../base/common/codicons.js';
import '../../../../../css!vs/workbench/contrib/aiPanes/browser/panes/semanticSearch.js';
define(
		de[4198],
		he([
			1, 0, 2, 2, 2, 2, 2, 13, 54, 156, 295, 36, 1046, 41, 2994, 135, 26, 14,
			2367,
		]),
		function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$tzc = void 0),
				(n = xi(n));
			const f = (0, t.template)("<div>"),
				b = (0, t.template)(
					'<div><div><input placeholder="Search for a file or symbol">',
				),
				s = (0, t.template)("<span><span>Loading"),
				l = (0, t.template)(
					'<div><div class="semantic-search-item-group"><div></div><div></div><div class="semantic-search-item-text"><span></span><span>',
				),
				y = (0, t.template)('<div class="semantic-search-item">'),
				$ = () => {
					const T = (0, a.$odc)(),
						[P, k] = (0, d.createSignal)([]),
						[L, D] = (0, d.createSignal)(!1),
						[M, N] = (0, d.createSignal)(null),
						A = async (R, O = 50) => {
							console.time("doSearch - Total Time"),
								D(!0),
								console.time("Repository Search Time");
							const B = await T.repositoryService.searchNewLocal(R, O);
							console.timeEnd("Repository Search Time"),
								console.time("BM25 Calculation Time");
							const z = new n.default(
								B.map(
									(ne) =>
										ne.codeBlock?.contents
											.split(`
`)
											.filter((ee) => ee.startsWith("import"))
											?.join(`
`) ?? "",
								),
							).search(R);
							console.timeEnd("BM25 Calculation Time"),
								console.time("Git Result Promises Time");
							const F = new Set(),
								x = new Map();
							for (const ne of z) {
								const _ = B[ne.index].codeBlock?.relativeWorkspacePath;
								_ && F.add(_);
							}
							const H = Array.from(F).map((ne) =>
								T.gitContextService
									.getGitFileBlameWithRelativePath(ne, 3)
									.then((ee) => x.set(ne, ee)),
							);
							await Promise.all(H);
							const q = [];
							for (const ne of z) {
								const _ = B[ne.index].codeBlock?.relativeWorkspacePath;
								if (!_) {
									q.push(void 0);
									continue;
								}
								const te = x.get(_);
								if (!te) {
									q.push(void 0);
									continue;
								}
								q.push(te);
							}
							console.timeEnd("Git Result Promises Time"),
								console.time("Final Results Calculation Time");
							const G = z
									.map((ne, ee) => {
										const _ = B[ne.index];
										return (
											(_.originalScore = _.score), (_.bm25Score = ne.score), _
										);
									})
									.map((ne, ee) => ({ result: ne, index: ee })),
								K = q.map((ne) => {
									if (!ne) return 0;
									const ee = ne.commits.map(
										(Z) => (Z.message ?? "") + (Z.author ?? ""),
									);
									return new n.default(ee)
										.search(R)
										.reduce((Z, se) => Z + se.score, 0);
								});
							console.timeEnd("Final Results Calculation Time"),
								console.time("Final Results With Score Calculation Time");
							const J = G.map(({ result: ne, index: ee }, _) => {
								const te = q[_];
								if (!te) return { result: ne, index: ee, score: 0 };
								let Q = ne.originalScore;
								Q += (te.commits?.length || 0) * 0.1;
								const Z = te.commits?.[0]?.date
									? new Date(te.commits[0].date).getTime()
									: 0;
								Q -= Z ? Date.now() - Z : 0;
								const se = new Set(te.commits?.map((re) => re.author));
								return (
									(Q += se.size * 0.05),
									(Q += K[_] * 0.1),
									{ result: ne, index: ee, score: Q }
								);
							});
							console.timeEnd("Final Results With Score Calculation Time"),
								console.time("Sorting and Setting Results Time");
							const Y = J.sort((ne, ee) => ee.score - ne.score)
									.map((ne, ee) => ({
										score: ne.score,
										result: ne.result,
										index: ee,
									}))
									.reduce((ne, ee) => {
										const _ = ee.result.codeBlock?.relativeWorkspacePath;
										return _ && (ne[_] || (ne[_] = []), ne[_].push(ee)), ne;
									}, {}),
								ie = Object.entries(Y)
									.map(([ne, ee]) => {
										const _ = ee.reduce((te, Q) => te + Q.score, 0);
										return {
											relativeWorkspacePath: ne,
											totalScore: _,
											codeResults: ee,
										};
									})
									.sort((ne, ee) => ee.totalScore - ne.totalScore);
							k(ie),
								D(!1),
								console.timeEnd("Sorting and Setting Results Time"),
								console.timeEnd("doSearch - Total Time");
						};
					return (() => {
						const R = b(),
							O = R.firstChild,
							B = O.firstChild;
						return (
							R.style.setProperty("padding", "1rem 0.5rem 1rem"),
							R.style.setProperty("max-height", "100%"),
							R.style.setProperty("height", "100%"),
							R.style.setProperty("display", "flex"),
							R.style.setProperty("gap", "8px"),
							R.style.setProperty("flex-direction", "column"),
							R.style.setProperty("box-sizing", "border-box"),
							O.style.setProperty("display", "flex"),
							O.style.setProperty("gap", "8px"),
							O.style.setProperty(
								"border",
								"1px solid var(--vscode-input-border)",
							),
							O.style.setProperty("border-radius", "4px"),
							O.style.setProperty("padding", "0.5rem"),
							B.addEventListener("keydown", (U) => {
								if ((0, h.$dcc)(U, "Enter")) {
									if (M() === null) {
										const x = U.target.value;
										x.trim() ? A(x) : k([]);
									}
									return;
								}
							}),
							B.style.setProperty("outline", "none"),
							B.style.setProperty("color", "var(--vscode-editor-foreground)"),
							B.style.setProperty("background", "none"),
							B.style.setProperty("border", "none"),
							B.style.setProperty("flex", "1"),
							(0, E.insert)(
								R,
								(0, C.createComponent)(g.$w0b, {
									scrollingDirection: "vertical",
									style: { height: "100%" },
									get children() {
										return (0, C.createComponent)(d.Show, {
											get when() {
												return !L();
											},
											get fallback() {
												return (() => {
													const U = s(),
														z = U.firstChild;
													return (
														U.style.setProperty("display", "flex"),
														U.style.setProperty("align-items", "center"),
														U.style.setProperty("gap", "6px"),
														U.style.setProperty(
															"color",
															"var(--vscode-editor-foreground)",
														),
														U.style.setProperty("opacity", "0.5"),
														U.style.setProperty("margin", "0px 0.5rem"),
														(0, E.insert)(
															U,
															(0, C.createComponent)(u.$Z8b, {}),
															null,
														),
														U
													);
												})();
											},
											get children() {
												const U = f();
												return (
													U.style.setProperty("display", "flex"),
													U.style.setProperty("flex-direction", "column"),
													U.style.setProperty("gap", "4px"),
													(0, E.insert)(
														U,
														(0, C.createComponent)(d.For, {
															get each() {
																return P();
															},
															children: (z, F) =>
																(0, C.createComponent)(v, {
																	result: z,
																	get isSelected() {
																		return F() === M();
																	},
																}),
														}),
													),
													U
												);
											},
										});
									},
								}),
								null,
							),
							R
						);
					})();
				};
			function v(T) {
				const P = (0, a.$odc)(),
					[k, L] = (0, d.createSignal)(!0),
					D = () => L(!k()),
					M = (0, d.createMemo)(() => {
						const N = T.result.relativeWorkspacePath,
							A = P.workspaceContextService.resolveRelativePath(N ?? ""),
							R = (0, m.$sc)(N ?? "");
						return { uri: A, relativePath: N ?? "", fileName: R };
					});
				return (() => {
					const N = l(),
						A = N.firstChild,
						R = A.firstChild,
						O = R.nextSibling,
						B = O.nextSibling,
						U = B.firstChild,
						z = U.nextSibling;
					return (
						N.style.setProperty("display", "flex"),
						N.style.setProperty("flex-direction", "column"),
						N.style.setProperty("gap", "4px"),
						A.addEventListener("click", D),
						A.style.setProperty("display", "flex"),
						A.style.setProperty("gap", "4px"),
						A.style.setProperty("align-items", "center"),
						A.style.setProperty("overflow", "hidden"),
						A.style.setProperty("border", "1px solid transparent"),
						A.style.setProperty("cursor", "pointer"),
						R.style.setProperty("width", "16px"),
						R.style.setProperty("height", "16px"),
						(0, E.insert)(
							O,
							(0, C.createComponent)(r.$k$b, {
								get fileName() {
									return M().fileName;
								},
								get languageService() {
									return P.languageService;
								},
								get modelService() {
									return P.modelService;
								},
								get workspaceContextService() {
									return P.workspaceContextService;
								},
							}),
						),
						B.style.setProperty("display", "flex"),
						B.style.setProperty("gap", "4px"),
						B.style.setProperty("align-items", "center"),
						B.style.setProperty("overflow", "hidden"),
						B.style.setProperty("text-overflow", "ellipsis"),
						U.style.setProperty("color", "var(--vscode-editor-foreground)"),
						(0, E.insert)(U, () => M().fileName),
						z.style.setProperty(
							"color",
							"var(--vscode-input-placeholderForeground)",
						),
						(0, E.insert)(z, () => M().relativePath),
						(0, E.insert)(
							N,
							(0, C.createComponent)(d.Show, {
								get when() {
									return k();
								},
								get children() {
									return [
										" ",
										(0, C.createComponent)(d.For, {
											get each() {
												return T.result.codeResults;
											},
											children: (F) =>
												(0, C.createComponent)(S, {
													result: F,
													get isSelected() {
														return T.isSelected;
													},
												}),
										}),
									];
								},
							}),
							null,
						),
						(0, w.effect)(
							(F) => {
								const x = T.isSelected
										? "rgba(255,255,255,0.3)"
										: "transparent",
									H = p.ThemeIcon.asClassName(o.$ak.chevronRight),
									q = `rotate(${k() ? 90 : 0}deg)`;
								return (
									x !== F._v$ &&
										((F._v$ = x) != null
											? A.style.setProperty("border-color", x)
											: A.style.removeProperty("border-color")),
									H !== F._v$2 && (0, i.className)(R, (F._v$2 = H)),
									q !== F._v$3 &&
										((F._v$3 = q) != null
											? R.style.setProperty("transform", q)
											: R.style.removeProperty("transform")),
									F
								);
							},
							{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
						),
						N
					);
				})();
			}
			function S(T) {
				const P = (0, a.$odc)(),
					[k, L] = (0, d.createSignal)(null),
					[D, M] = (0, d.createSignal)(null),
					[N, A] = (0, d.createSignal)(null);
				(0, d.createEffect)(async () => {
					const O = T.result.result.codeBlock?.relativeWorkspacePath,
						B = P.workspaceContextService.resolveRelativePath(O ?? ""),
						U = T.result.result.codeBlock?.range,
						z = await P.textModelService.createModelReference(B),
						F = {
							startLineNumber: U?.startPosition?.line ?? 1,
							startColumn: U?.startPosition?.column ?? 1,
							endLineNumber: U?.endPosition?.line ?? 1,
							endColumn: U?.endPosition?.column ?? 1,
						},
						x = z.object.textEditorModel.getValueInRange(F);
					L(x), M(B), A(F);
				});
				const R = () => {
					P.openerService.open((0, c.$8rb)(D(), N()));
				};
				return (() => {
					const O = y();
					return (
						O.addEventListener("click", R),
						O.style.setProperty("margin-left", "18px"),
						O.style.setProperty("color", "var(--vscode-editor-foreground)"),
						O.style.setProperty("opacity", "0.5"),
						(0, E.insert)(O, k),
						O
					);
				})();
			}
			const I = (T, P) =>
				(0, a.$ndc)(() => (0, C.createComponent)($, {}), T, P);
			e.$tzc = I;
		},
	),
		
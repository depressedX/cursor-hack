import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../../proto/aiserver/v1/repository_pb.js';
import '../../../aichat/browser/chatData.js';
import '../../../../services/selectedContext/browser/components/AdvancedCodebaseControls.js';
import '../dropdown/dropdown.js';
import '../menu/menu.js';
import '../../../controlCommon/browser/solid.js';
define(
			de[4395],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 272, 140, 2007, 523, 484, 36]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*web*/,
 d /*web*/,
 m /*solid*/,
 r /*repository_pb*/,
 u /*chatData*/,
 a /*AdvancedCodebaseControls*/,
 h /*dropdown*/,
 c /*menu*/,
 n /*solid*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$6bc = v);
				const g = (0, t.template)(
						"<div><span>Number of results per search:</span><div>",
					),
					p = (0, t.template)(
						'<div><span>Files to include:</span><input type="text" placeholder="e.g. *.py,*.js">',
					),
					o = (0, t.template)(
						'<div><span>Files to exclude:</span><input type="text" placeholder="e.g. *.py,*.js">',
					),
					f = (0, t.template)("<div><span>Reranker:"),
					b = (0, t.template)("<div><span>Reasoning step:"),
					s = (0, t.template)("<div><div><span>Search behavior:"),
					l = {
						numResultsPerSearch: 100,
						includePattern: "",
						excludePattern: "",
						reranker: r.RerankerAlgorithm.LULEA,
						reasoningStep: !1,
					},
					y = [
						{ id: "embeddings", label: "embeddings" },
						{ id: "reranker", label: "reranker" },
					],
					$ = y[0];
				function v(S) {
					const I = (0, n.$odc)(),
						T = (0, m.useContext)(u.$ygc),
						P = (0, m.createMemo)(() => {
							const N = S.getContext();
							return (N.dropdownAdvancedCodebaseSearchBehavior ??
								"embeddings") === "embeddings"
								? null
								: N.dropdownAdvancedCodebaseContextOptions;
						}),
						k = (0, m.createMemo)(() => S.getContext()),
						L = (N) => {
							(k().dropdownAdvancedCodebaseSearchBehavior ?? "embeddings") !==
								"embeddings" &&
								S.setContext("dropdownAdvancedCodebaseContextOptions", N);
						},
						D = (0, m.createMemo)(
							() =>
								I.reactiveStorageService.nonPersistentStorage
									.repositoryIndexingStatus?.case === "synced" ||
								(I.reactiveStorageService.nonPersistentStorage
									.mainLocalRepositoryProgress?.progress ?? 0) > 0.8,
						),
						M = {
							display: "flex",
							"align-items": "center",
							gap: "4px",
							"font-size": "0.65rem",
						};
					return (0, d.createComponent)(m.Show, {
						get when() {
							return S.position;
						},
						children: (N) =>
							(0, d.createComponent)(c.Menu, {
								isRelative: !1,
								get position() {
									return N();
								},
								get close() {
									return S.close;
								},
								width: "auto",
								get anchor() {
									return S.anchor;
								},
								get nonBlockingRoot() {
									return `#${S.nonBlockingRootId}`;
								},
								nonBlockingDirection: "vertical",
								shouldMountInPortal: !0,
								marginToNonBlockingRoot: 6,
								get reactiveCloser() {
									return I.reactiveStorageService.nonPersistentStorage
										.forceChatDropdownRerender;
								},
								style: {
									padding: "6px 8px",
									opacity: "1",
									"background-color": "var(--vscode-editor-background)",
								},
								get children() {
									const A = s(),
										R = A.firstChild,
										O = R.firstChild;
									return (
										A.style.setProperty("display", "flex"),
										A.style.setProperty("flex-direction", "column"),
										A.style.setProperty("gap", "5px"),
										(0, C.style)(R, M),
										(0, w.insert)(
											R,
											(0, d.createComponent)(h.$Mbc, {
												get cannotToggle() {
													return !D();
												},
												buttonStyle: { "font-size": "0.65rem" },
												liStyles: { "font-size": "0.65rem" },
												preventPropagation: !0,
												get value() {
													return (0, E.memo)(() => !!D())()
														? (y.find(
																(B) =>
																	B.id ===
																	k().dropdownAdvancedCodebaseSearchBehavior,
															)?.label ?? "embeddings")
														: $.label;
												},
												get origLabel() {
													return (0, E.memo)(() => !!D())()
														? (y.find(
																(B) =>
																	B.id ===
																	k().dropdownAdvancedCodebaseSearchBehavior,
															)?.label ?? "embeddings")
														: $.label;
												},
												get items() {
													return D() ? y : [$];
												},
												onSelect: (B) => {
													S.setContext(
														"dropdownAdvancedCodebaseSearchBehavior",
														B === "reranker" ? "reranker" : "embeddings",
													);
												},
											}),
											null,
										),
										(0, w.insert)(
											A,
											(0, d.createComponent)(m.Show, {
												get when() {
													return (
														(0, E.memo)(() => !!D())() &&
														k().dropdownAdvancedCodebaseSearchBehavior ===
															"reranker"
													);
												},
												get children() {
													return [
														(() => {
															const B = g(),
																U = B.firstChild,
																z = U.nextSibling;
															return (
																(0, C.style)(B, M),
																z.style.setProperty("display", "inline-block"),
																(0, w.insert)(
																	z,
																	(0, d.createComponent)(h.$Mbc, {
																		buttonStyle: { "font-size": "0.65rem" },
																		liStyles: { "font-size": "0.65rem" },
																		preventPropagation: !0,
																		get origLabel() {
																			return (
																				P()?.numResultsPerSearch.toString() ??
																				l.numResultsPerSearch.toString()
																			);
																		},
																		items: [
																			{ id: "10", label: "10" },
																			{ id: "40", label: "40" },
																			{ id: "100", label: "100 (default)" },
																			{ id: "400", label: "400" },
																			{ id: "1200", label: "1200" },
																		],
																		onSelect: (F) => {
																			const x = P() ?? l;
																			L({
																				...x,
																				numResultsPerSearch: parseInt(F),
																			});
																		},
																		get value() {
																			return (
																				P()?.numResultsPerSearch.toString() ??
																				l.numResultsPerSearch.toString()
																			);
																		},
																	}),
																),
																B
															);
														})(),
														(() => {
															const B = p(),
																U = B.firstChild,
																z = U.nextSibling;
															return (
																(0, C.style)(B, M),
																z.addEventListener("input", (F) => {
																	const x = P() ?? l;
																	L({ ...x, includePattern: F.target.value });
																}),
																z.addEventListener("click", (F) => {
																	F.stopImmediatePropagation(),
																		F.preventDefault(),
																		F.currentTarget.focus();
																}),
																z.style.setProperty("width", "100px"),
																z.style.setProperty(
																	"background-color",
																	"var(--vscode-input-background)",
																),
																z.style.setProperty(
																	"color",
																	"var(--vscode-input-foreground)",
																),
																z.style.setProperty(
																	"border",
																	"1px solid var(--vscode-settings-dropdownBorder)",
																),
																z.style.setProperty("border-radius", "5px"),
																z.style.setProperty("padding", "2px 4px"),
																z.style.setProperty("font-size", "0.65rem"),
																(0, i.effect)(
																	() => (z.value = P()?.includePattern ?? ""),
																),
																B
															);
														})(),
														(() => {
															const B = o(),
																U = B.firstChild,
																z = U.nextSibling;
															return (
																(0, C.style)(B, M),
																z.addEventListener("input", (F) => {
																	const x = P() ?? l;
																	L({ ...x, excludePattern: F.target.value });
																}),
																z.addEventListener("click", (F) => {
																	F.stopImmediatePropagation(),
																		F.preventDefault(),
																		F.currentTarget.focus();
																}),
																z.style.setProperty("width", "100px"),
																z.style.setProperty(
																	"background-color",
																	"var(--vscode-input-background)",
																),
																z.style.setProperty(
																	"color",
																	"var(--vscode-input-foreground)",
																),
																z.style.setProperty(
																	"border",
																	"1px solid var(--vscode-settings-dropdownBorder)",
																),
																z.style.setProperty("border-radius", "5px"),
																z.style.setProperty("padding", "2px 4px"),
																z.style.setProperty("font-size", "0.65rem"),
																(0, i.effect)(
																	() => (z.value = P()?.excludePattern ?? ""),
																),
																B
															);
														})(),
														(() => {
															const B = f(),
																U = B.firstChild;
															return (
																(0, C.style)(B, M),
																(0, w.insert)(
																	B,
																	(0, d.createComponent)(h.$Mbc, {
																		buttonStyle: { "font-size": "0.65rem" },
																		liStyles: { "font-size": "0.65rem" },
																		preventPropagation: !0,
																		get origLabel() {
																			return (0, a.$Rbc)(
																				P()?.reranker ??
																					r.RerankerAlgorithm.LULEA,
																			);
																		},
																		get items() {
																			return [
																				{
																					id: (0, a.$Rbc)(
																						r.RerankerAlgorithm.UMEA,
																					),
																					label: (0, a.$Rbc)(
																						r.RerankerAlgorithm.UMEA,
																					),
																				},
																				{
																					id: (0, a.$Rbc)(
																						r.RerankerAlgorithm.LULEA,
																					),
																					label: (0, a.$Rbc)(
																						r.RerankerAlgorithm.LULEA,
																					),
																				},
																				...(I.reactiveStorageService
																					.applicationUserPersistentStorage
																					.isEvalMode
																					? [
																							{
																								id: (0, a.$Rbc)(
																									r.RerankerAlgorithm.COHERE,
																								),
																								label: (0, a.$Rbc)(
																									r.RerankerAlgorithm.COHERE,
																								),
																							},
																							{
																								id: (0, a.$Rbc)(
																									r.RerankerAlgorithm.COHERE,
																								),
																								label: (0, a.$Rbc)(
																									r.RerankerAlgorithm.COHERE,
																								),
																							},
																							{
																								id: (0, a.$Rbc)(
																									r.RerankerAlgorithm.VOYAGE,
																								),
																								label: (0, a.$Rbc)(
																									r.RerankerAlgorithm.VOYAGE,
																								),
																							},
																							{
																								id: (0, a.$Rbc)(
																									r.RerankerAlgorithm
																										.VOYAGE_EMBEDS,
																								),
																								label: (0, a.$Rbc)(
																									r.RerankerAlgorithm
																										.VOYAGE_EMBEDS,
																								),
																							},
																						]
																					: []),
																				{
																					id: (0, a.$Rbc)(
																						r.RerankerAlgorithm.NONE,
																					),
																					label: (0, a.$Rbc)(
																						r.RerankerAlgorithm.NONE,
																					),
																				},
																			];
																		},
																		onSelect: (z) => {
																			const F = (0, a.$Sbc)(z);
																			L({ ...(P() ?? l), reranker: F });
																		},
																		get value() {
																			return (0, a.$Rbc)(
																				P()?.reranker ??
																					r.RerankerAlgorithm.LULEA,
																			);
																		},
																	}),
																	null,
																),
																B
															);
														})(),
														(() => {
															const B = b(),
																U = B.firstChild;
															return (
																(0, C.style)(B, M),
																(0, w.insert)(
																	B,
																	(0, d.createComponent)(h.$Mbc, {
																		buttonStyle: { "font-size": "0.65rem" },
																		liStyles: { "font-size": "0.65rem" },
																		preventPropagation: !0,
																		origLabel: "no",
																		items: [
																			{ id: "yes", label: "yes" },
																			{ id: "no", label: "no" },
																		],
																		onSelect: (z) => {
																			L({
																				...(P() ?? l),
																				reasoningStep: z === "yes",
																			});
																		},
																		get value() {
																			return P()?.reasoningStep ? "yes" : "no";
																		},
																	}),
																	null,
																),
																B
															);
														})(),
													];
												},
											}),
											null,
										),
										A
									);
								},
							}),
					});
				}
			},
		),
		
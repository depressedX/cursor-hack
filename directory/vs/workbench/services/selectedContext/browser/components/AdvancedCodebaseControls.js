import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../../proto/aiserver/v1/repository_pb.js';
import '../../../../../base/common/constants.js';
import '../../../../contrib/controlCommon/browser/solid.js';
import '../../../../contrib/ui/browser/hooks/useKeyboardShortcut.js';
import '../selectedContextData.js';
import '../../../../../../proto/aiserver/v1/utils_pb.js';
define(
			de[2007],
			he([1, 0, 2, 2, 2, 13, 272, 58, 36, 385, 298, 83]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*solid*/,
 C /*repository_pb*/,
 d /*constants*/,
 m /*solid*/,
 r /*useKeyboardShortcut*/,
 u /*selectedContextData*/,
 a /*utils_pb*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Pbc = e.$Obc = void 0),
					(e.$Qbc = g),
					(e.$Rbc = p),
					(e.$Sbc = o);
				const h = (0, t.template)(
						'<div><div></div><div>Files to include: <input type="text" placeholder="e.g. *.py,*.js"></div><div>Files to exclude: <input type="text" placeholder="e.g. *.py,*.js">',
					),
					c = (f) => {
						switch (f) {
							case a.EmbeddingModel.VOYAGE_CODE_2:
								return "VoyageCode2";
							case a.EmbeddingModel.TEXT_EMBEDDINGS_LARGE_3:
								return "TextEmbeddingsLarge3";
							case a.EmbeddingModel.QWEN_1_5B_CUSTOM:
								return "Qwen1_5B_Custom";
							case a.EmbeddingModel.UNSPECIFIED:
								return "unspecified";
							default:
								return f;
						}
					};
				e.$Obc = c;
				const n = (f) => {
					switch (f) {
						case "VoyageCode2":
							return a.EmbeddingModel.VOYAGE_CODE_2;
						case "TextEmbeddingsLarge3":
							return a.EmbeddingModel.TEXT_EMBEDDINGS_LARGE_3;
						case "Qwen1_5B_Custom":
							return a.EmbeddingModel.QWEN_1_5B_CUSTOM;
						case "unspecified":
						default:
							return a.EmbeddingModel.UNSPECIFIED;
					}
				};
				e.$Pbc = n;
				function g(f) {
					const b = (0, m.$odc)(),
						s = (0, E.createMemo)(() =>
							typeof f.getContext().usesCodebase == "object"
								? f.getContext().usesCodebase.searchBehavior
								: u.$Tgc,
						),
						l = (0, E.createMemo)(() =>
							typeof f.getContext().usesCodebase == "object"
								? (f.getContext().usesCodebase.options ?? u.$Ugc)
								: u.$Ugc,
						),
						y = (P) => {
							f.setContext("usesCodebase", (k) =>
								typeof k == "object"
									? { ...k, searchBehavior: P }
									: { searchBehavior: P, options: u.$Ugc },
							);
						},
						$ = (P) => {
							f.setContext("usesCodebase", (k) =>
								typeof k == "object"
									? { ...k, options: P }
									: { searchBehavior: u.$Tgc, options: P },
							);
						},
						v = (0, r.$5$b)(d.$yV),
						S = {
							"font-size": "0.6rem",
							display: "flex",
							"align-items": "center",
							gap: "4px",
						},
						I = {
							width: "100px",
							"background-color": "var(--vscode-input-background)",
							color: "var(--vscode-input-foreground)",
							border: "1px solid var(--vscode-settings-dropdownBorder)",
							"border-radius": "5px",
							padding: "2px 4px",
							"font-size": "0.6rem",
						},
						T = (0, E.createMemo)(
							() =>
								b.reactiveStorageService.nonPersistentStorage
									.forceChatDropdownRerender,
						);
					return (() => {
						const P = h(),
							k = P.firstChild,
							L = k.nextSibling,
							D = L.firstChild,
							M = D.nextSibling,
							N = L.nextSibling,
							A = N.firstChild,
							R = A.nextSibling;
						return (
							P.style.setProperty("display", "flex"),
							P.style.setProperty("flex-direction", "column"),
							P.style.setProperty("gap", "5px"),
							(0, w.style)(k, S),
							(0, w.style)(L, S),
							M.addEventListener("input", (O) => {
								f.setCodebaseSearchSettings({
									...f.getCodebaseSearchSettings(),
									filesToInclude: O.target.value,
								});
							}),
							M.addEventListener("keydown", (O) => {
								O.stopImmediatePropagation();
							}),
							(0, w.style)(M, I),
							(0, w.style)(N, S),
							R.addEventListener("input", (O) => {
								f.setCodebaseSearchSettings({
									...f.getCodebaseSearchSettings(),
									filesToExclude: O.target.value,
								});
							}),
							R.addEventListener("keydown", (O) => {
								O.stopImmediatePropagation();
							}),
							(0, w.style)(R, I),
							(0, i.effect)(
								() =>
									(M.value =
										f.getCodebaseSearchSettings()?.filesToInclude ?? ""),
							),
							(0, i.effect)(
								() =>
									(R.value =
										f.getCodebaseSearchSettings()?.filesToExclude ?? ""),
							),
							P
						);
					})();
				}
				function p(f) {
					switch (f) {
						case C.RerankerAlgorithm.GPT_3_5_LOGPROBS:
							return "gpt-3.5-instant";
						case C.RerankerAlgorithm.UMEA:
							return "fast";
						case C.RerankerAlgorithm.LULEA:
							return "smart";
						case C.RerankerAlgorithm.LULEA_HAIKU:
							return "haiku-chain-of-thought";
						case C.RerankerAlgorithm.COHERE:
							return "cohere";
						case C.RerankerAlgorithm.VOYAGE:
							return "voyage";
						case C.RerankerAlgorithm.VOYAGE_EMBEDS:
							return "voyage-embeds";
						case C.RerankerAlgorithm.NONE:
							return "none";
						default:
							return "unknown";
					}
				}
				function o(f) {
					switch (f) {
						case "fast":
							return C.RerankerAlgorithm.UMEA;
						case "smart":
							return C.RerankerAlgorithm.LULEA;
						case "haiku-chain-of-thought":
							return C.RerankerAlgorithm.LULEA_HAIKU;
						case "cohere":
							return C.RerankerAlgorithm.COHERE;
						case "voyage":
							return C.RerankerAlgorithm.VOYAGE;
						case "voyage-embeds":
							return C.RerankerAlgorithm.VOYAGE_EMBEDS;
						case "none":
							return C.RerankerAlgorithm.NONE;
						case "cursor-fast":
							return C.RerankerAlgorithm.STARCODER_V1;
						case "gpt-3.5-instant":
							return C.RerankerAlgorithm.GPT_3_5_LOGPROBS;
						default:
							throw new Error(`Unknown reranker name: ${f}`);
					}
				}
			},
		),
		
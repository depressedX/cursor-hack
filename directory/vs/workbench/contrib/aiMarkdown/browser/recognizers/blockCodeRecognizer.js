import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/cancellation.js';
import '../../../../../base/common/fuzzyScorer.js';
import '../../../../../base/common/map.js';
import '../../../../../base/common/uri.js';
import '../../../../../platform/editor/common/editor.js';
import '../../../../../platform/opener/common/opener.js';
import '../composerMarkdownCodeblockHeader.js';
import '../constants.js';
import '../markdownData.js';
import '../markdownCodeblockHeader.js';
import '../../../composer/browser/composerData.js';
import '../../../controlCommon/browser/solid.js';
import '../../../ui/browser/partialApplyHover/partialApplyHoverContributions.js';
import '../../../ui/browser/widgets/codeBlock.js';
import '../../../composer/browser/components/ComposerDataHandlerProvider.js';
import '../../../composer/browser/constants.js';
define(
			de[4233],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 33, 322, 59, 9, 116, 41, 4232, 1709, 236,
				1373, 225, 36, 1934, 312, 4147, 169,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$L$b = void 0);
				const I = (0, t.template)("<div>"),
					T = (0, t.template)('<div class="markdown-code-outer-container">'),
					P = (0, t.template)("<div><button>Run as cell"),
					k = (0, t.template)('<div class="markdown-code-block-header">'),
					L = !S.ENABLED_BETTER_MARKDOWN_PARSING;
				function D() {
					let O = "abcdefghijklmnopqrstuvwxyz",
						B = "";
					for (let U = 0; U < 10; U++)
						B += O.charAt(Math.floor(Math.random() * O.length));
					return B;
				}
				const N = !1 ? console.log : () => {},
					A = {
						elementType: f.MarkdownElementType.BLOCK_CODE,
						start: (O, B, U, z) => {
							const F = O[O.length - 1];
							if (
								F.type === f.MarkdownElementType.INLINE_CODE ||
								F.type === f.MarkdownElementType.BLOCK_CODE ||
								F.type === f.MarkdownElementType.BLOCK_LATEX ||
								F.type === f.MarkdownElementType.BASH_RESPONSE ||
								F.type === f.MarkdownElementType.ROOT
							)
								return { state: "failed" };
							const H = /^[\t ]*```+[^\n]*\n/.exec(B);
							if (H && z.currentNestLevel === 0)
								return (
									N("[ian] start", JSON.stringify(H[0]), z.currentNestLevel),
									{
										state: "success",
										length: H[0].length,
										elementType: f.MarkdownElementType.BLOCK_CODE,
										startOrEnd: "start",
									}
								);
							const V = /^[\t ]*`*/.exec(B);
							if (V && V[0].length === B.length) return { state: "possible" };
							const K = /^[\t ]*```+[^\n]*/.exec(B);
							return K && K[0].length === B.length
								? { state: "possible" }
								: { state: "failed" };
						},
						end: (O, B, U) => {
							N("[ian] text", JSON.stringify(B));
							const z = O[O.length - 1];
							if (z.type !== f.MarkdownElementType.BLOCK_CODE)
								return { state: "failed" };
							const F = z.backtickCount ?? 3,
								H = new RegExp(
									U.markdownProps?.finished
										? `^\\n([\\t ]*)\`{${F}}\\s*(?:\\n|$)`
										: `^\\n([\\t ]*)\`{${F}}\\s*\\n`,
								).exec(B);
							if (H && U.currentNestLevel === 0) {
								const J = H[1].length;
								if (
									(N("[ian] end", JSON.stringify(H[0]), U.currentNestLevel),
									z.indentationLevel !== void 0 && J > z.indentationLevel)
								)
									return { state: "failed" };
								const W = H[0];
								let X = 0;
								for (
									let ie = W.length - 1;
									ie >= 0 &&
									W[ie] ===
										`
`;
									ie--
								)
									X++;
								return {
									state: "success",
									length: W.length - X,
									elementType: f.MarkdownElementType.BLOCK_CODE,
									startOrEnd: "end",
								};
							}
							const V = new RegExp(`^([\\t ]*)\`{${F}}\\S+`).exec(B);
							if (V)
								return (
									N(
										"[ian] " + ">".repeat((U.currentNestLevel ?? 0) + 1),
										JSON.stringify(V[0]),
										U.currentNestLevel,
									),
									{
										state: "intermediate",
										nestLevel: (U.currentNestLevel ?? 0) + 1,
									}
								);
							if (U.currentNestLevel !== void 0 && U.currentNestLevel > 0) {
								const W = new RegExp(
									U.markdownProps?.finished
										? `^\\n([\\t ]*)\`{${F}}\\s*(?:\\n|$)`
										: `^\\n([\\t ]*)\`{${F}}\\s*\\n`,
								).exec(B);
								if (W)
									return (
										N(
											"[ian] " + "<".repeat(U.currentNestLevel ?? 0),
											JSON.stringify(W[0]),
											U.currentNestLevel,
										),
										{
											state: "intermediate",
											nestLevel: (U.currentNestLevel ?? 0) - 1,
										}
									);
							}
							const K = /^(?:\n)?[\t ]*`*\s*/.exec(B);
							return K && K[0].length === B.length
								? (N("[ian] possible", JSON.stringify(K[0])),
									{ state: "possible" })
								: { state: "failed" };
						},
						createElement: (O, B, U, z, F) => {
							const x = F.codeBlockCount();
							F.setCodeBlockCount((xe) => xe + 1);
							let H = "",
								q = null,
								V = null,
								G = null,
								K = null,
								J = !1;
							if (B.includes(":")) {
								const xe = B.split(":");
								if (xe.length === 3)
									try {
										(V = parseInt(xe[0].split(/```+/)[1])),
											(G = parseInt(xe[1])),
											(K = xe[2].trim()),
											(J = !0),
											console.log("[balta] parts", V, G, K),
											K.includes(".") && (H = K.split(".").pop()?.trim() ?? "");
									} catch (He) {
										console.error(He);
									}
								else if (xe.length === 2) {
									const Ke = /```+([^:]*):/.exec(B);
									Ke && ((H = Ke[1].trim()), (q = xe[1].trim()));
								}
							} else {
								const xe = B.match(/```+([^\n]*)/)?.[1]?.trim();
								xe?.includes(".")
									? ((H = xe.split(".").pop()?.trim() ?? ""), (q = xe))
									: (H = xe?.trim() ?? "");
							}
							let W, X;
							B.trimStart().startsWith("```") &&
								((X = B.match(/^(\n|\n\n)?(```+)/)?.[2]?.length ?? void 0),
								(W = B.match(/^(\n|\n\n)?(.*)```+/m)?.[2]?.length ?? void 0));
							const Y = b.$w$b[H],
								ie =
									Y !== void 0 &&
									(q === null || q.trim().length === 0 || q.endsWith("/")),
								ne = ie ? (q ?? void 0) : void 0,
								ee = q
									? z.workspaceContextService.resolveRelativePath(q)
									: void 0,
								_ = ee
									? (F.codeBlockProps.getCodeBlockVersion?.(ee) ?? 0)
									: void 0,
								te = s.ComposerCapabilitiesCodeBlockAliases.find(
									(xe) => xe === H,
								);
							let Q = {
								version: _ ?? 0,
								codeBlockIdx: x,
								capabilityAlias: te,
								startLine: V ?? void 0,
								endLine: G ?? void 0,
								predictedUri: ee,
							};
							const Z =
									z.languageService.createByLanguageNameOrFilepathOrFirstLine(
										H,
										null,
										void 0,
									),
								se = (() => {
									const xe = I();
									return (
										xe.addEventListener("click", (He) => {
											if (V !== null && G !== null && K !== null) {
												const Ke = (0, g.$8rb)(
													z.workspaceContextService.resolveRelativePath(K),
													{
														startLineNumber: V,
														startColumn: 1,
														endLineNumber: V,
														endColumn: 1,
													},
												);
												z.openerService.open(Ke, {
													openToSide: !1,
													editorOptions: {
														revealIfVisible: !0,
														revealIfOpened: !0,
														source: n.EditorOpenSource.USER,
													},
													fromUserGesture: !0,
												});
											}
										}),
										(0, m.insert)(
											xe,
											J === !0 &&
												(() => {
													const He = I();
													return (
														He.style.setProperty("position", "absolute"),
														He.style.setProperty("top", "0px"),
														He.style.setProperty("right", "0px"),
														`calc(100% - ${$.$W0b + 4}px)` != null
															? He.style.setProperty(
																	"height",
																	`calc(100% - ${$.$W0b + 4}px)`,
																)
															: He.style.removeProperty("height"),
														He.style.setProperty("width", "100%"),
														He.style.setProperty("cursor", "pointer"),
														He.style.setProperty("z-index", "1"),
														He
													);
												})(),
										),
										(0, d.effect)((He) =>
											(0, C.style)(
												xe,
												{
													width: "100%",
													"box-sizing": "border-box",
													position: "relative",
													...(V !== null ? { cursor: "pointer" } : {}),
												},
												He,
											),
										),
										xe
									);
								})(),
								re = o.$I$b,
								[le] = (0, r.createResource)(
									async () =>
										await z.applyToFileActionsService.canApplyToFile(q ?? ""),
								),
								oe = q && !F.codeBlockProps.renderCodeBlock,
								ae = z.instantiationService.createInstance(
									$.$X0b,
									se,
									{
										...$.$X0b.getEditorOptions(z.configurationService),
										hover: { enabled: !0 },
										renderValidationDecorations: "on",
										fontSize: re,
									},
									{
										enableSemanticSyntaxHighlighting: !1,
										customContributions: oe ? [y.$K$b.ID] : [],
									},
								);
							ae && U.push(ae);
							let pe = c.URI.parse(`aichat-code-block-anysphere://${D()}`);
							const $e = z.modelService.createModel("", Z, pe, !1);
							if (
								($e && U.push($e),
								ae?.setModel($e),
								(0, r.createEffect)(() => {
									if (oe && (le() ?? !1) && F.chatExtras) {
										const xe = y.$K$b.get(ae);
										if (xe)
											try {
												xe.updateUri(ee),
													xe.updateSlashEditOptions({ ...F.chatExtras });
											} catch (He) {
												console.error(He);
											}
									}
								}),
								ee)
							) {
								const xe = F.codeBlockProps.onNewCodeBlock?.(ae, Q);
								xe && typeof xe == "object" && (Q = { ...Q, ...xe });
							}
							const ye = new ResizeObserver(() => {
								me(!0);
							});
							ye.observe(ae.getDomNode()),
								U.push({
									dispose: () => {
										ye.disconnect();
									},
								});
							const ue = ae?.onDidChangeModelContent(() => {
								me(!1);
							});
							ue && U.push(ue);
							let fe = 0;
							const me = (xe) => {
									if (!ae) return;
									const He = ae.getDomNode();
									if (!He) return;
									const Ke = re * 1.5,
										Je = ae.getModel()?.getLineCount() || 1,
										Te = ae.getTopForLineNumber(Je) + Ke + 10;
									(fe !== Te || xe) &&
										((fe = Te), (He.style.height = `${Te}px`), ae.layout());
								},
								ve = (0, f.$30b)(ae.getId()),
								[ge, be] = (0, r.createSignal)(!0);
							let Ce = (() => {
								const xe = T();
								return (
									xe.style.setProperty("display", "flex"),
									xe.style.setProperty("flex-direction", "column"),
									xe.style.setProperty("justify-content", "center"),
									xe.style.setProperty("align-items", "center"),
									xe.style.setProperty("position", "relative"),
									xe.style.setProperty(
										"border",
										"1px solid var(--vscode-commandCenter-inactiveBorder)",
									),
									xe.style.setProperty("border-radius", "2px"),
									(0, E.setAttribute)(xe, "id", ve),
									(0, d.effect)(() =>
										(F.codeBlockProps.renderCodeBlock
											? "none"
											: "1px solid var(--vscode-commandCenter-inactiveBorder)") !=
										null
											? xe.style.setProperty(
													"border-top",
													F.codeBlockProps.renderCodeBlock
														? "none"
														: "1px solid var(--vscode-commandCenter-inactiveBorder)",
												)
											: xe.style.removeProperty("border-top"),
									),
									xe
								);
							})();
							if (F.codeBlockProps.renderCodeBlock && (ee || te)) {
								const xe = F.codeBlockProps.shouldCallRenderCodeBlock
									? F.codeBlockProps.shouldCallRenderCodeBlock(ae, Q)
									: !0;
								xe !== !1
									? (typeof xe == "object" && (Q = { ...Q, ...xe }),
										(Ce = (() => {
											const He = T();
											return (
												He.style.setProperty("display", "flex"),
												He.style.setProperty("flex-direction", "column"),
												He.style.setProperty("justify-content", "center"),
												He.style.setProperty("align-items", "center"),
												He.style.setProperty("position", "relative"),
												(0, E.setAttribute)(He, "id", ve),
												He
											);
										})()),
										U.push(
											(0, l.$ndc)(
												() => F.codeBlockProps.renderCodeBlock?.(ae, Q),
												Ce,
												z.instantiationService,
											),
										))
									: Le();
							} else Le();
							function Le() {
								let xe;
								const [He, Ke] = (0, r.createSignal)(!1),
									Je = (() => {
										const Ue = I(),
											qe = xe;
										return (
											typeof qe == "function" ? (0, w.use)(qe, Ue) : (xe = Ue),
											Ue.addEventListener("mouseleave", () => {
												Ie(!1);
											}),
											Ue.addEventListener("mouseenter", () => {
												Ie(!0);
											}),
											Ue.style.setProperty("width", "100%"),
											Ue.style.setProperty("box-sizing", "border-box"),
											Ue.style.setProperty("position", "relative"),
											Ue.style.setProperty(
												"background-color",
												"var(--vscode-editor-background)",
											),
											Ue.style.setProperty("padding", "12px 12px"),
											Ue.style.setProperty("padding-bottom", "1px"),
											Ue
										);
									})(),
									Te = (() => {
										const Ue = P(),
											qe = Ue.firstChild;
										return (
											Ue.style.setProperty("display", "none"),
											Ue.style.setProperty("justify-content", "right"),
											Ue.style.setProperty("z-index", "303"),
											Ue.style.setProperty("margin-top", "5px"),
											Ue.style.setProperty("margin-bottom", "5px"),
											qe.addEventListener("click", () => {
												const Ae = $e?.getValue();
												Ae &&
													F.codeBlockProps.runAsCellReceiver &&
													F.codeBlockProps.runAsCellReceiver(Ae);
											}),
											qe.style.setProperty(
												"background-color",
												"var(--vscode-keybindingLabel-background)",
											),
											qe.style.setProperty("border", "none"),
											qe.style.setProperty("color", "var(--vscode-foreground)"),
											qe.style.setProperty("border-radius", "3px"),
											qe.style.setProperty("padding", "4px 8px"),
											qe.style.setProperty("cursor", "pointer"),
											qe.style.setProperty("user-select", "none"),
											Ue
										);
									})(),
									[Ee, Ie] = (0, r.createSignal)(!1),
									Be = (() => {
										const Ue = k();
										return (
											Ue.style.setProperty("display", "flex"),
											Ue.style.setProperty("flex-direction", "row"),
											Ue.style.setProperty("align-items", "center"),
											Ue.style.setProperty("width", "100%"),
											Ue.style.setProperty("position", "sticky"),
											Ue.style.setProperty("top", "0px"),
											Ue.style.setProperty("margin-bottom", "-1px"),
											Ue.style.setProperty("z-index", "1000"),
											(0, d.effect)(() =>
												(F.codeBlockProps.renderCodeBlock
													? "none"
													: "1px solid var(--vscode-commandCenter-inactiveBorder)") !=
												null
													? Ue.style.setProperty(
															"border-top",
															F.codeBlockProps.renderCodeBlock
																? "none"
																: "1px solid var(--vscode-commandCenter-inactiveBorder)",
														)
													: Ue.style.removeProperty("border-top"),
											),
											Ue
										);
									})(),
									Se = F.chatExtras,
									ke = F.composerExtras;
								if (ke !== void 0) {
									let Ue = function () {
										return (0, i.createComponent)(
											v.ComposerDataHandlerProvider,
											{
												get composerId() {
													return ke.composerId;
												},
												children: (qe) =>
													(0, i.createComponent)(p.$H$b, {
														composerDataHandler: qe,
														get bubbleId() {
															return ke.bubbleId;
														},
														getModelOfCodeBlock: () => $e,
														getEditorOfCodeBlock: () => ae,
														isMouseInCodeBlock: Ee,
														codeBlockIdx: x,
														get languageId() {
															return Z.languageId;
														},
														resetCodeBlockIndex: () => F.setCodeBlockCount(0),
														slashEditFileUri: ee,
														get disableApply() {
															return ke.disableApply || J;
														},
														get hasCustomRenderCodeBlock() {
															return !!F.codeBlockProps.renderCodeBlock;
														},
														isCommand: ie,
														commandLanguage: Y,
														cwd: ne,
													}),
											},
										);
									};
									U.push((0, l.$ndc)(Ue, Be, z.instantiationService));
								} else if (Se !== void 0) {
									const Ue = { ...Se };
									if (q !== null) {
										let qe = function () {
											return (
												be(!!q),
												xe &&
													!q &&
													((xe.style.borderTopLeftRadius = "4px"),
													(xe.style.borderTopRightRadius = "4px")),
												(0, i.createComponent)(b.$s$b, {
													editorDomId: ve,
													aiPredictedFilePath: q ?? void 0,
													getModelOfCodeBlock: () => $e,
													isMouseInCodeBlock: Ee,
													codeCellDone: () => !1,
													slashEditOptions: Ue,
													isCommand: ie,
													commandLanguage: Y,
													cwd: ne,
													setIsGenerating: Ke,
												})
											);
										};
										U.push((0, l.$ndc)(qe, Be, z.instantiationService));
									} else {
										let qe = function () {
											return (
												xe &&
													((xe.style.borderTopLeftRadius = "4px"),
													(xe.style.borderTopRightRadius = "4px")),
												be(!1),
												(0, i.createComponent)(b.$s$b, {
													editorDomId: ve,
													aiPredictedFilePath: void 0,
													getModelOfCodeBlock: () => $e,
													isMouseInCodeBlock: Ee,
													codeCellDone: () => !1,
													slashEditOptions: Ue,
													isCommand: ie,
													commandLanguage: Y,
													cwd: ne,
													setIsGenerating: Ke,
												})
											);
										};
										U.push((0, l.$ndc)(qe, Be, z.instantiationService));
									}
								}
								Ce.appendChild(Be),
									Ce.appendChild(Je),
									Je.appendChild(se),
									Je.appendChild(Te),
									q
										? (Ce.classList.add("markdown-block-code-slash-edit"),
											(Ce.style.margin = "1rem 0px"))
										: (Ce.classList.add("markdown-block-code"),
											(Ce.style.margin = "4px 0px")),
									(0, r.createRoot)((Ue) => {
										U.push({ dispose: () => Ue() }),
											(0, r.createEffect)(() => {
												F.codeBlockProps.runAsCellReceiver !== void 0
													? (Te.style.display = "flex")
													: (Te.style.display = "none");
											}),
											(0, r.createEffect)(() => {
												F.codeBlockProps.shouldRecompute > 0 && me(!0);
											});
									});
							}
							const Fe = {
								type: f.MarkdownElementType.BLOCK_CODE,
								ref: Ce,
								indentationLevel: W,
								backtickCount: X,
								codeEditor: ae,
								codeTextModel: $e,
								endElementHook: () => {
									const xe = F.chatExtras;
									return (
										xe !== void 0 &&
											q !== null &&
											z.aiFeatureStatusService
												.maybeRefreshFeatureStatus("cachedApplies")
												.then(async () => {
													if (q === null) return null;
													const He =
														z.workspaceContextService.resolveRelativePath(q);
													if (await z.fileService.exists(He)) return He;
													const Je = new u.$Ce();
													try {
														const Ee = (
															await z.anythingQuickAccessProvider.getFilePicks(
																(0, a.$hs)(q),
																new h.$Gc(),
																Je.token,
															)
														)
															.map((Ie) => Ie.resource?.path)
															.filter((Ie) => q && Ie?.endsWith(q));
														return Ee.length === 1 && Ee[0]
															? z.workspaceContextService.resolveRelativePath(
																	Ee[0],
																)
															: null;
													} finally {
														Je.cancel();
													}
												})
												.then(async (He) => {
													z.aiFeatureStatusService.getCachedFeatureStatus(
														"cachedApplies",
													) === !0 &&
														q !== null &&
														He !== null &&
														z.applyToFileActionsService.cacheCodeBlockApplyButton(
															He,
															$e,
															xe,
														);
												}),
										ee && F.codeBlockProps.onCodeBlockEnd?.(ae, Q),
										`
`
									);
								},
							};
							O[O.length - 1].ref.appendChild(Ce), O.push(Fe);
						},
					},
					R = {
						elementType: f.MarkdownElementType.BLOCK_CODE,
						start: (O, B, U) => {
							const z = O[O.length - 1];
							if (
								z.type === f.MarkdownElementType.INLINE_CODE ||
								z.type === f.MarkdownElementType.BLOCK_CODE ||
								z.type === f.MarkdownElementType.BLOCK_LATEX ||
								z.type === f.MarkdownElementType.BASH_RESPONSE ||
								z.type === f.MarkdownElementType.ROOT
							)
								return { state: "failed" };
							const x = (
								U
									? /^(\n|\n\n)?[\t ]*```+[^\n]*\n/
									: /^(\n|\n\n)[\t ]*```+[^\n]*\n/
							).exec(B);
							if (x)
								return {
									state: "success",
									length: x[0].length,
									elementType: f.MarkdownElementType.BLOCK_CODE,
									startOrEnd: "start",
								};
							const q = (U ? /^(\n|\n\n)?[\t ]*`*/ : /^(\n|\n\n)[\t ]*`*/).exec(
								B,
							);
							if (q && q[0].length === B.length) return { state: "possible" };
							const G = (
								U ? /^(\n|\n\n)?[\t ]*```+[^\n]*/ : /^(\n|\n\n)[\t ]*```+[^\n]*/
							).exec(B);
							return G && G[0].length === B.length
								? { state: "possible" }
								: { state: "failed" };
						},
						end: (O, B) => {
							const U = O[O.length - 1];
							if (U.type !== f.MarkdownElementType.BLOCK_CODE)
								return { state: "failed" };
							const z = U.backtickCount ?? 3,
								x = new RegExp(`^\\n([\\t ]*)\`{${z}}`).exec(B);
							if (x) {
								const V = x[1].length;
								return U.indentationLevel !== void 0 && V > U.indentationLevel
									? { state: "failed" }
									: {
											state: "success",
											length: x[0].length,
											elementType: f.MarkdownElementType.BLOCK_CODE,
											startOrEnd: "end",
										};
							}
							const q = /^\n[\t ]*`*/.exec(B);
							return q && q[0].length === B.length
								? { state: "possible" }
								: { state: "failed" };
						},
						createElement: (O, B, U, z, F) => {
							const x = F.codeBlockCount();
							F.setCodeBlockCount((xe) => xe + 1);
							let H = "";
							if (B.split(":").length === 2) {
								const He = /```+([^:]*):/.exec(B);
								He && (H = He[1].trim());
							} else if (B.includes(".")) {
								const He = /```+.*\.(\w*)\s*(:|$)/.exec(B);
								He && (H = He[1]);
							} else {
								const He = /```+(\w*)/.exec(B);
								He && (H = He[1]);
							}
							let q, V;
							B.trimStart().startsWith("```") &&
								((V = B.match(/^(\n|\n\n)?(```+)/)?.[2]?.length ?? void 0),
								(q = B.match(/^(\n|\n\n)?(.*)```+/m)?.[2]?.length ?? void 0));
							let G = null,
								K = null,
								J = null,
								W = null,
								X = !1;
							if (B.split(":").length === 2) W = B.split(":")[1].trim();
							else if (B.includes(":") && B.includes(".")) {
								const xe = B.split(":");
								if (xe.length === 3)
									try {
										(J = xe[2].trim()),
											(G = parseInt(xe[0].split(/```+/)[1])),
											(K = parseInt(xe[1])),
											(X = !0);
									} catch (He) {
										console.error(He);
									}
							}
							const Y = b.$w$b[H],
								ie =
									Y !== void 0 &&
									(W === null || W.trim().length === 0 || W.endsWith("/")),
								ne = ie ? (W ?? void 0) : void 0;
							ie && (W = null);
							const ee = W
									? z.workspaceContextService.resolveRelativePath(W)
									: void 0,
								_ = ee
									? (F.codeBlockProps.getCodeBlockVersion?.(ee) ?? 0)
									: void 0,
								te = s.ComposerCapabilitiesCodeBlockAliases.find(
									(xe) => xe === H,
								);
							let Q = {
								version: _ ?? 0,
								codeBlockIdx: x,
								capabilityAlias: te,
								startLine: G ?? void 0,
								endLine: K ?? void 0,
								predictedUri: ee,
							};
							const Z =
									z.languageService.createByLanguageNameOrFilepathOrFirstLine(
										H,
										J ? c.URI.parse(J) : null,
										void 0,
									),
								se = (() => {
									const xe = I();
									return (
										xe.addEventListener("click", (He) => {
											if (G !== null && K !== null && J !== null) {
												const Ke = (0, g.$8rb)(
													z.workspaceContextService.resolveRelativePath(J),
													{
														startLineNumber: G,
														startColumn: 1,
														endLineNumber: G,
														endColumn: 1,
													},
												);
												z.openerService.open(Ke, {
													openToSide: !1,
													editorOptions: {
														revealIfVisible: !0,
														revealIfOpened: !0,
														source: n.EditorOpenSource.USER,
													},
													fromUserGesture: !0,
												});
											}
										}),
										xe.style.setProperty("width", "100%"),
										xe.style.setProperty("box-sizing", "border-box"),
										xe.style.setProperty("position", "relative"),
										(0, m.insert)(
											xe,
											X === !0 &&
												(() => {
													const He = I();
													return (
														He.style.setProperty("position", "absolute"),
														He.style.setProperty("top", "0px"),
														He.style.setProperty("right", "0px"),
														`calc(100% - ${$.$W0b + 4}px)` != null
															? He.style.setProperty(
																	"height",
																	`calc(100% - ${$.$W0b + 4}px)`,
																)
															: He.style.removeProperty("height"),
														He.style.setProperty("width", "100%"),
														He.style.setProperty("cursor", "pointer"),
														He.style.setProperty("z-index", "1"),
														He
													);
												})(),
										),
										xe
									);
								})(),
								re = o.$I$b,
								[le] = (0, r.createResource)(
									async () =>
										await z.applyToFileActionsService.canApplyToFile(W ?? ""),
								),
								oe = W && !F.codeBlockProps.renderCodeBlock,
								ae = z.instantiationService.createInstance(
									$.$X0b,
									se,
									{
										...$.$X0b.getEditorOptions(z.configurationService),
										hover: { enabled: !0 },
										renderValidationDecorations: "on",
										fontSize: re,
									},
									{
										enableSemanticSyntaxHighlighting: !1,
										customContributions: oe ? [y.$K$b.ID] : [],
									},
								);
							ae && U.push(ae);
							let pe = c.URI.parse(`aichat-code-block-anysphere://${D()}`);
							const $e = z.modelService.createModel("", Z, pe, !1);
							if (
								($e && U.push($e),
								ae?.setModel($e),
								(0, r.createEffect)(() => {
									if (oe && (le() ?? !1) && F.chatExtras) {
										const xe = y.$K$b.get(ae);
										if (xe)
											try {
												xe.updateUri(ee),
													xe.updateSlashEditOptions({ ...F.chatExtras });
											} catch (He) {
												console.error(He);
											}
									}
								}),
								ee)
							) {
								const xe = F.codeBlockProps.onNewCodeBlock?.(ae, Q);
								xe && typeof xe == "object" && (Q = { ...Q, ...xe });
							}
							const ye = new ResizeObserver(() => {
								me(!0);
							});
							ye.observe(ae.getDomNode()),
								U.push({
									dispose: () => {
										ye.disconnect();
									},
								});
							const ue = ae?.onDidChangeModelContent(() => {
								me(!1);
							});
							ue && U.push(ue);
							let fe = 0;
							const me = (xe) => {
									if (!ae) return;
									const He = ae.getDomNode();
									if (!He) return;
									const Ke = re * 1.5,
										Je = ae.getModel()?.getLineCount() || 1,
										Te = ae.getTopForLineNumber(Je) + Ke + 10;
									(fe !== Te || xe) &&
										((fe = Te), (He.style.height = `${Te}px`), ae.layout());
								},
								ve = (0, f.$30b)(ae.getId()),
								[ge, be] = (0, r.createSignal)(!0);
							let Ce = (() => {
								const xe = T();
								return (
									xe.style.setProperty("display", "flex"),
									xe.style.setProperty("flex-direction", "column"),
									xe.style.setProperty("justify-content", "center"),
									xe.style.setProperty("align-items", "center"),
									xe.style.setProperty("position", "relative"),
									xe.style.setProperty(
										"border",
										"1px solid var(--vscode-commandCenter-inactiveBorder)",
									),
									xe.style.setProperty("border-radius", "2px"),
									(0, E.setAttribute)(xe, "id", ve),
									(0, d.effect)(() =>
										(F.codeBlockProps.renderCodeBlock
											? "none"
											: "1px solid var(--vscode-commandCenter-inactiveBorder)") !=
										null
											? xe.style.setProperty(
													"border-top",
													F.codeBlockProps.renderCodeBlock
														? "none"
														: "1px solid var(--vscode-commandCenter-inactiveBorder)",
												)
											: xe.style.removeProperty("border-top"),
									),
									xe
								);
							})();
							if (F.codeBlockProps.renderCodeBlock && (ee || te)) {
								const xe = F.codeBlockProps.shouldCallRenderCodeBlock
									? F.codeBlockProps.shouldCallRenderCodeBlock(ae, Q)
									: !0;
								xe !== !1
									? (typeof xe == "object" && (Q = { ...Q, ...xe }),
										(Ce = (() => {
											const He = T();
											return (
												He.style.setProperty("display", "flex"),
												He.style.setProperty("flex-direction", "column"),
												He.style.setProperty("justify-content", "center"),
												He.style.setProperty("align-items", "center"),
												He.style.setProperty("position", "relative"),
												(0, E.setAttribute)(He, "id", ve),
												He
											);
										})()),
										U.push(
											(0, l.$ndc)(
												() => F.codeBlockProps.renderCodeBlock?.(ae, Q),
												Ce,
												z.instantiationService,
											),
										))
									: Le();
							} else Le();
							function Le() {
								let xe;
								const [He, Ke] = (0, r.createSignal)(!1),
									Je = (() => {
										const Ue = I(),
											qe = xe;
										return (
											typeof qe == "function" ? (0, w.use)(qe, Ue) : (xe = Ue),
											Ue.addEventListener("mouseleave", () => {
												Ie(!1);
											}),
											Ue.addEventListener("mouseenter", () => {
												Ie(!0);
											}),
											Ue.style.setProperty("width", "100%"),
											Ue.style.setProperty("box-sizing", "border-box"),
											Ue.style.setProperty("position", "relative"),
											Ue.style.setProperty(
												"background-color",
												"var(--vscode-editor-background)",
											),
											Ue.style.setProperty("padding", "12px 12px"),
											Ue.style.setProperty("padding-bottom", "1px"),
											Ue
										);
									})(),
									Te = (() => {
										const Ue = P(),
											qe = Ue.firstChild;
										return (
											Ue.style.setProperty("display", "none"),
											Ue.style.setProperty("justify-content", "right"),
											Ue.style.setProperty("z-index", "303"),
											Ue.style.setProperty("margin-top", "5px"),
											Ue.style.setProperty("margin-bottom", "5px"),
											qe.addEventListener("click", () => {
												const Ae = $e?.getValue();
												Ae &&
													F.codeBlockProps.runAsCellReceiver &&
													F.codeBlockProps.runAsCellReceiver(Ae);
											}),
											qe.style.setProperty(
												"background-color",
												"var(--vscode-keybindingLabel-background)",
											),
											qe.style.setProperty("border", "none"),
											qe.style.setProperty("color", "var(--vscode-foreground)"),
											qe.style.setProperty("border-radius", "3px"),
											qe.style.setProperty("padding", "4px 8px"),
											qe.style.setProperty("cursor", "pointer"),
											qe.style.setProperty("user-select", "none"),
											Ue
										);
									})(),
									[Ee, Ie] = (0, r.createSignal)(!1),
									Be = (() => {
										const Ue = k();
										return (
											Ue.style.setProperty("display", "flex"),
											Ue.style.setProperty("flex-direction", "row"),
											Ue.style.setProperty("align-items", "center"),
											Ue.style.setProperty("width", "100%"),
											Ue.style.setProperty("position", "sticky"),
											Ue.style.setProperty("top", "0px"),
											Ue.style.setProperty("margin-bottom", "-1px"),
											Ue.style.setProperty("z-index", "1000"),
											(0, d.effect)(() =>
												(F.codeBlockProps.renderCodeBlock
													? "none"
													: "1px solid var(--vscode-commandCenter-inactiveBorder)") !=
												null
													? Ue.style.setProperty(
															"border-top",
															F.codeBlockProps.renderCodeBlock
																? "none"
																: "1px solid var(--vscode-commandCenter-inactiveBorder)",
														)
													: Ue.style.removeProperty("border-top"),
											),
											Ue
										);
									})(),
									Se = F.chatExtras,
									ke = F.composerExtras;
								if (ke !== void 0) {
									let Ue = function () {
										return (0, i.createComponent)(
											v.ComposerDataHandlerProvider,
											{
												get composerId() {
													return ke.composerId;
												},
												children: (qe) =>
													(0, i.createComponent)(p.$H$b, {
														composerDataHandler: qe,
														get bubbleId() {
															return ke.bubbleId;
														},
														getModelOfCodeBlock: () => $e,
														getEditorOfCodeBlock: () => ae,
														isMouseInCodeBlock: Ee,
														codeBlockIdx: x,
														get languageId() {
															return Z.languageId;
														},
														resetCodeBlockIndex: () => F.setCodeBlockCount(0),
														slashEditFileUri: ee,
														get disableApply() {
															return ke.disableApply || X;
														},
														get hasCustomRenderCodeBlock() {
															return !!F.codeBlockProps.renderCodeBlock;
														},
														isCommand: ie,
														commandLanguage: Y,
														cwd: ne,
													}),
											},
										);
									};
									U.push((0, l.$ndc)(Ue, Be, z.instantiationService));
								} else if (Se !== void 0) {
									const Ue = { ...Se };
									if (W !== null) {
										let qe = function () {
											return (
												be(!!W),
												xe &&
													!W &&
													((xe.style.borderTopLeftRadius = "4px"),
													(xe.style.borderTopRightRadius = "4px")),
												(0, i.createComponent)(b.$s$b, {
													editorDomId: ve,
													aiPredictedFilePath: W ?? void 0,
													getModelOfCodeBlock: () => $e,
													isMouseInCodeBlock: Ee,
													codeCellDone: () => !1,
													slashEditOptions: Ue,
													isCommand: ie,
													commandLanguage: Y,
													cwd: ne,
													setIsGenerating: Ke,
												})
											);
										};
										U.push((0, l.$ndc)(qe, Be, z.instantiationService));
									} else {
										let qe = function () {
											return (
												xe &&
													((xe.style.borderTopLeftRadius = "4px"),
													(xe.style.borderTopRightRadius = "4px")),
												be(!1),
												(0, i.createComponent)(b.$s$b, {
													editorDomId: ve,
													aiPredictedFilePath: void 0,
													getModelOfCodeBlock: () => $e,
													isMouseInCodeBlock: Ee,
													codeCellDone: () => !1,
													slashEditOptions: Ue,
													isCommand: ie,
													commandLanguage: Y,
													cwd: ne,
													setIsGenerating: Ke,
												})
											);
										};
										U.push((0, l.$ndc)(qe, Be, z.instantiationService));
									}
								}
								Ce.appendChild(Be),
									Ce.appendChild(Je),
									Je.appendChild(se),
									Je.appendChild(Te),
									W
										? (Ce.classList.add("markdown-block-code-slash-edit"),
											(Ce.style.margin = "1rem 0px"))
										: (Ce.classList.add("markdown-block-code"),
											(Ce.style.margin = "4px 0px")),
									(0, r.createRoot)((Ue) => {
										U.push({ dispose: () => Ue() }),
											(0, r.createEffect)(() => {
												F.codeBlockProps.runAsCellReceiver !== void 0
													? (Te.style.display = "flex")
													: (Te.style.display = "none");
											}),
											(0, r.createEffect)(() => {
												F.codeBlockProps.shouldRecompute > 0 && me(!0);
											});
									});
							}
							const Fe = {
								type: f.MarkdownElementType.BLOCK_CODE,
								ref: Ce,
								indentationLevel: q,
								backtickCount: V,
								codeEditor: ae,
								codeTextModel: $e,
								endElementHook: () => {
									const xe = F.chatExtras;
									return (
										xe !== void 0 &&
											W !== null &&
											z.aiFeatureStatusService
												.maybeRefreshFeatureStatus("cachedApplies")
												.then(async () => {
													if (W === null) return null;
													const He =
														z.workspaceContextService.resolveRelativePath(W);
													if (await z.fileService.exists(He)) return He;
													const Je = new u.$Ce();
													try {
														const Ee = (
															await z.anythingQuickAccessProvider.getFilePicks(
																(0, a.$hs)(W),
																new h.$Gc(),
																Je.token,
															)
														)
															.map((Ie) => Ie.resource?.path)
															.filter((Ie) => W && Ie?.endsWith(W));
														return Ee.length === 1 && Ee[0]
															? z.workspaceContextService.resolveRelativePath(
																	Ee[0],
																)
															: null;
													} finally {
														Je.cancel();
													}
												})
												.then(async (He) => {
													z.aiFeatureStatusService.getCachedFeatureStatus(
														"cachedApplies",
													) === !0 &&
														W !== null &&
														He !== null &&
														z.applyToFileActionsService.cacheCodeBlockApplyButton(
															He,
															$e,
															xe,
														);
												}),
										ee && F.codeBlockProps.onCodeBlockEnd?.(ae, Q),
										`
`
									);
								},
							};
							O[O.length - 1].ref.appendChild(Ce), O.push(Fe);
						},
					};
				e.$L$b = L ? R : A;
			},
		),
		
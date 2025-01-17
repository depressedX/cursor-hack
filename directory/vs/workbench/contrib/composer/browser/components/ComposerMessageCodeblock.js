import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/path.js';
import '../../../../../base/common/themables.js';
import '../../../../../base/common/uri.js';
import './ComposerGeneralStatusIndicator.js';
import '../../../controlCommon/browser/solid.js';
import '../../../ui/browser/aiInput/plugins/mentions/pureIcon.js';
import '../constants.js';
import '../../../ui/browser/loadingSpinner/loadingSpinner.js';
import '../../../ui/browser/hooks/useThemeHooks.js';
import '../../../../common/theme.js';
import '../../../ui/browser/widgets/codeBlock.js';
import '../../../aiMarkdown/browser/constants.js';
import '../../../../../editor/common/model.js';
import '../utils.js';
import '../../../../../editor/browser/widget/diffEditor/diffEditorWidget.js';
import '../hooks/useComposerHoverTooltip.js';
import '../../../ui/browser/menu/menu.js';
import '../../../ui/browser/menu/menuItem.js';
import '../../../ui/browser/menu/hooks.js';
import '../../../ui/browser/hooks/useIsUsingFileIconTheme.js';
import '../../../aiApplyToFileActionsService/browser/aiApplyToFileActionsService.js';
import '../../../aiMarkdown/browser/markdownCodeblockHeader.js';
import '../../../../../platform/opener/common/opener.js';
import '../../../../../editor/common/core/lineRange.js';
import '../../../../../editor/common/languages.js';
import '../../../../../base/browser/ui/hover/hoverWidget.js';
import '../../../ui/browser/scrollableDiv.js';
import '../../../../../base/browser/dom.js';
import '../hooks/useComposerDataHandle.js';
import '../../../ui/browser/delayedLoad.js';
import '../../../aichat/browser/components/Utils.js';
import '../../../../../base/common/keyCodes.js';
import '../../../aichat/browser/components/icons.js';
import './ComposerMessageCodeblockActions.js';
import '../../../../../css!vs/workbench/contrib/composer/browser/components/ComposerMessageCodeblock.js';
define(
		de[1378],
		he([
			1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 14, 54, 26, 9, 565, 36, 156, 169,
			295, 331, 123, 312, 1709, 64, 246, 309, 311, 484, 1372, 364, 428, 852,
			1373, 41, 196, 74, 160, 135, 7, 177, 1370, 242, 27, 502, 4284, 2414,
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
			I,
			T,
			P,
			k,
			L,
			D,
			M,
			N,
			A,
			R,
			O,
			B,
			U,
			z,
			F,
			x,
			H,
			q,
			V,
			G,
			K,
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ComposerMessageCodeblock = se),
				(L = xi(L));
			const J = (0, t.template)("<span>/"),
				W = (0, t.template)("<span>+"),
				X = (0, t.template)("<span>-"),
				Y = (0, t.template)("<span>"),
				ie = (0, t.template)('<div class="composer-diff-block"><div>'),
				ne = (0, t.template)("<div>"),
				ee = (0, t.template)(
					'<div class="composer-message-codeblock-expand"><span>',
				),
				_ = (0, t.template)(
					'<div class="composer-message-codeblock"><div><div><span><span></span></span></div></div><div><div><div class="scrollable-div-container show-only-on-hover">',
				),
				te = (0, t.template)('<span class="fade-in">No changes made'),
				Q = (0, t.template)("<span><span>");
			function Z(le) {
				if (le === void 0) return "property";
				switch (le) {
					case B.SymbolKind.Method:
						return "method";
					case B.SymbolKind.Function:
						return "function";
					case B.SymbolKind.Constructor:
						return "constructor";
					case B.SymbolKind.Field:
						return "field";
					case B.SymbolKind.Variable:
						return "variable";
					case B.SymbolKind.Class:
						return "class";
					case B.SymbolKind.Struct:
						return "struct";
					case B.SymbolKind.Interface:
						return "interface";
					case B.SymbolKind.Module:
						return "module";
					case B.SymbolKind.Property:
						return "property";
					case B.SymbolKind.Event:
						return "event";
					case B.SymbolKind.Operator:
						return "operator";
					case B.SymbolKind.Constant:
						return "constant";
					case B.SymbolKind.Enum:
						return "enum";
					case B.SymbolKind.EnumMember:
						return "enum-member";
					case B.SymbolKind.File:
						return "file";
					default:
						return "property";
				}
			}
			function se(le) {
				return (0, u.createComponent)(H.$2cc, {
					nonReactiveDelay: 50,
					get children() {
						return (0, u.createComponent)(re, le);
					},
				});
			}
			function re(le) {
				const oe = (0, o.$odc)(),
					ae = [],
					{
						composerDataHandle: pe,
						currentComposer: $e,
						forceMode: ye,
						updateCurrentComposer: ue,
					} = (0, x.useComposerDataHandle)(() => le.composerDataHandle),
					[fe, me] = (0, a.createSignal)(ye() !== "chat"),
					ve = (yi) => {
						ye() !== "chat" && me(yi);
					},
					[ge, be] = (0, a.createSignal)("diff"),
					Ce = (0, a.createMemo)(() => le.maxCollapsedHeight ?? 220);
				(0, a.createEffect)(() => {
					fe() || (Ae && Ae.setScrollTop(0), Me && Me.revealFirstDiff());
				});
				const [Le, Fe] = (0, a.createSignal)(!1),
					[Oe, xe] = (0, a.createSignal)(0),
					He = (0, a.createMemo)(() => $e().composerId),
					Ke = (0, a.createMemo)(() =>
						le.forceStatus
							? le.forceStatus
							: le.codeBlock.uri
								? (oe.composerDataService.getCodeBlockStatus(
										He(),
										le.codeBlock.uri,
										le.codeBlock.version,
									) ?? "none")
								: "none",
					),
					Je = (0, a.createMemo)(() =>
						le.codeBlock.uri ? (0, c.$sc)(le.codeBlock.uri.path) : "",
					),
					Te = (0, a.createMemo)(() =>
						le.codeBlock.uri
							? oe.composerDataService.getLatestCodeBlockVersion(
									He(),
									le.codeBlock.uri,
									{ excludeNonAppliedCodeBlocks: !0 },
								)
							: 0,
					),
					Ee = (0, a.createMemo)(() =>
						oe.composerDataService.getComposerCodeBlock(
							pe(),
							le.codeBlock.uri,
							le.codeBlock.version,
						),
					),
					Ie = (0, a.createMemo)(
						() =>
							oe.composerDataService.getVersionExcludingNonAppliedCodeBlocks(
								He(),
								le.codeBlock.uri,
								le.codeBlock.version,
							) ?? 0,
					),
					Be = (0, a.createMemo)(
						() =>
							oe.composerDataService.getCodeBlockStatus(
								He(),
								le.codeBlock.uri,
								le.codeBlock.version,
							) ?? "none",
					),
					Se = (0, l.$h$b)(y.$wGb, oe.themeService),
					ke = { height: "16px", padding: "0px 3px" };
				let Ue,
					qe,
					Ae,
					Me,
					De = null,
					Re = null,
					je = null,
					Ve = !1;
				const [Ze, et] = (0, a.createSignal)(!0),
					[rt, ft] = (0, a.createSignal)(0),
					[bt, nt] = (0, a.createSignal)(void 0),
					lt = async () => {
						if (!Me) return;
						await Me.waitForDiff(),
							Me.collapseAllUnchangedRegions(),
							Me.revealFirstDiff(),
							Me.layout();
						const yi = Me.getDiffComputationResult();
						if (yi) {
							const li = yi.changes2[0];
							li &&
								nt({
									startLineNumber: li.modified.startLineNumber,
									endLineNumber: li.modified.endLineNumberExclusive - 1,
								});
						}
						setTimeout(() => {
							Me && (xe(Me.getContentHeight() + 4), Li(!0));
						}, 1);
					},
					ct = () => {
						const yi = ae.findIndex((Vi) => Vi === Me);
						yi !== -1 && ae.splice(yi, 1);
						const Ai = ae.findIndex((Vi) => Vi === Re);
						Ai !== -1 && ae.splice(Ai, 1);
						const li = ae.findIndex((Vi) => Vi === je);
						li !== -1 && ae.splice(li, 1),
							Me?.dispose(),
							(Me = void 0),
							Re?.dispose(),
							(Re = null),
							je?.dispose(),
							(je = null),
							(Ve = !1);
					},
					[gt, ht] = (0, a.createSignal)(!1),
					Rt = () => {
						const yi = fe(),
							Ai = Ke();
						if (Ae && Ue) {
							const li = yi
								? Math.min(Ae.getContentHeight(), Ce())
								: Ae.getContentHeight();
							ht(Ae.getContentHeight() > Ce()),
								(Ue.style.height = `${li}px`),
								Ae.layout(),
								Ae && Ai === "generating"
									? Ae.setScrollTop(Ae.getScrollHeight())
									: Ae && Ae.setScrollTop(0);
						}
					};
				(0, a.createEffect)(() => {
					Rt();
				});
				const Nt = (yi) => {
					yi.keyCode === V.KeyCode.Escape &&
						(yi.preventDefault(),
						ve(!0),
						oe.analyticsService.trackEvent("composer.code_block.collapse", {
							source: "escape",
						}));
				};
				(0, a.onMount)(() => {
					if (Ue) {
						const yi = v.$I$b;
						if (
							((Ae = oe.instantiationService.createInstance(
								$.$X0b,
								Ue,
								{
									...$.$X0b.getEditorOptions(oe.configurationService),
									hover: { enabled: !0 },
									renderValidationDecorations: "on",
									fontSize: yi,
									overviewRulerLanes: 0,
									scrollbar: {
										ignoreHorizontalScrollbarInContentHeight: !0,
										alwaysConsumeMouseWheel: !1,
									},
									padding: { top: 6, bottom: 6 },
								},
								{ enableSemanticSyntaxHighlighting: !1 },
							)),
							Ae)
						) {
							ae.push(Ae);
							const Ai =
									oe.languageService.createByLanguageNameOrFilepathOrFirstLine(
										"",
										Ee()?.uri ?? null,
										void 0,
									),
								li = g.URI.parse(
									`composer-code-block-anysphere://${(0, I.randomFilename)()}`,
								);
							(De = oe.modelService.createModel("", Ai, li, !1)),
								De && ae.push(De),
								Ae.setModel(De),
								Rt();
							const Vi = Ae.onKeyDown(Nt);
							ae.push(Vi);
						}
					}
				});
				const [jt, ti, kt] = (0, D.$A0b)(),
					hi = async (yi, Ai) =>
						!le.codeBlock.uri || !Ee()?.isNotApplied
							? []
							: oe.applyToFileActionsService.getImportantSymbolsDefinedInCodeblockThatExistInURICanThrowIfExtHostIsNotReady(
									le.codeBlock.uri,
									yi.getValue(),
								),
					[Kt, di] = (0, A.$r$b)({
						getModel: () => De,
						initialValue: [],
						updateFunc: hi,
						debounceTime: 1e3,
					}),
					[Ye, ze] = (0, a.createSignal)(!1);
				(0, a.createEffect)(() => {
					oe.fileService.exists(le.codeBlock.uri).then((yi) => {
						ze(!yi);
					});
				});
				const Xe = (0, q.$F$b)(),
					It = (0, a.createMemo)(() => {
						const yi = [],
							Ai = le.codeBlock.uri;
						if (Ye())
							return (
								yi.push({ uri: Ai }),
								Xe() && yi.push({ uri: Ai, applyToCurrentFile: !0 }),
								yi
							);
						if (Ee()?.isNotApplied) {
							yi.push({ uri: Ai });
							const li = Kt();
							return (
								li.length > 0 &&
									yi.push(...li.map((Vi) => ({ uri: Ai, symbol: Vi }))),
								yi
							);
						} else return [];
					}),
					Lt = {
						"font-size": "11px",
						color: "var(--vscode-input-placeholderForeground)",
					},
					xt = (0, a.createMemo)(() => {
						const yi = Ee();
						return yi ? (yi.newModelDiffWrtV0?.length ?? 0) > 0 : !1;
					}),
					Vt = (yi, Ai = !0) =>
						Ee()
							? Ai
								? oe.composerUtilsService.getCodeBlockNewModelLines(
										pe(),
										le.codeBlock.uri,
										yi,
									)
								: oe.composerUtilsService.getCodeBlockOriginalModelLines(
										pe(),
										le.codeBlock.uri,
										yi,
									)
							: null,
					Bt = () =>
						De?.getEOL() ??
						`
`,
					Gt = (yi) =>
						yi ===
						`
`
							? S.EndOfLineSequence.LF
							: S.EndOfLineSequence.CRLF,
					Mt = (yi) =>
						yi.replace(
							/\r\n|\r/g,
							`
`,
						),
					Ut = (0, a.createMemo)(() => {
						const yi = Ee();
						if (!yi) return !1;
						const Ai = Vt(le.codeBlock.version, !1),
							li = Vt(le.codeBlock.version);
						if (!Ai || !li) return !1;
						const Vi = Bt(),
							wi = Mt(Ai.join(Vi)),
							_t = Mt(li.join(Vi));
						return (
							wi !== _t &&
							wi.trim().length > 0 &&
							_t.trim().length > 0 &&
							(!yi.isNotApplied ||
								oe.reactiveStorageService.applicationUserPersistentStorage
									.composerState.unification)
						);
					});
				(0, a.createEffect)(
					(0, a.on)(Ut, () => {
						ft((yi) => yi + 1);
					}),
				);
				const [ei, mi] = (0, a.createSignal)(void 0),
					ii = () => {
						const yi = Me?.getDiffComputationResult();
						if (!yi) {
							mi(void 0);
							return;
						}
						if (yi.identical || yi.quitEarly) {
							mi(void 0);
							return;
						}
						let Ai = 0,
							li = 0;
						for (const Vi of yi.changes2)
							(Ai += Vi.modified.length), (li += Vi.original.length);
						mi({ added: Ai, removed: li });
					},
					Dt = () => {
						if (!(!qe || !Ut()))
							try {
								const yi = Ee();
								if (!yi) return;
								ct();
								const Ai = v.$I$b;
								if (
									((Me = oe.instantiationService.createInstance(
										T.$3yb,
										qe,
										{
											renderSideBySide: !1,
											readOnly: !0,
											stickyScroll: { enabled: !1 },
											renderIndicators: !1,
											renderMarginRevertIcon: !1,
											renderGutterMenu: !1,
											glyphMargin: !1,
											hideUnchangedRegions: { enabled: !0 },
											disableLayerHinting: !0,
											automaticLayout: !0,
											fontSize: Ai,
											lineNumbers: "off",
											lineNumbersMinChars: 0,
											renderOverviewRuler: !1,
											scrollbar: {
												verticalScrollbarSize: 0,
												alwaysConsumeMouseWheel: !1,
												ignoreHorizontalScrollbarInContentHeight: !0,
												horizontalScrollbarSize: 6,
											},
											padding: { top: 6, bottom: 6 },
											scrollBeyondLastLine: !1,
											compactMode: !0,
										},
										{
											originalEditor: { contributions: [], isSimpleWidget: !0 },
											modifiedEditor: { contributions: [], isSimpleWidget: !0 },
										},
									)),
									!Me)
								)
									throw new Error("Failed to create diff editor");
								const li =
										oe.languageService.createByLanguageNameOrFilepathOrFirstLine(
											"",
											yi.uri ?? null,
											void 0,
										),
									Vi = g.URI.parse(
										`composer-code-block-anysphere://${(0, I.randomFilename)()}`,
									),
									wi = g.URI.parse(
										`composer-code-block-anysphere://${(0, I.randomFilename)()}`,
									),
									_t = Vt(le.codeBlock.version, !1),
									ai = Vt(le.codeBlock.version),
									Ft = Bt();
								(Re = oe.modelService.createModel(
									_t?.join(Ft) ?? "",
									li,
									Vi,
									!1,
								)),
									Re.setEOL(Gt(Ft));
								let Xt = !1;
								if (
									(Re ? ae.push(Re) : (Xt = !0),
									(je = oe.modelService.createModel(
										ai?.join(Ft) ?? "",
										li,
										wi,
										!1,
									)),
									je.setEOL(Gt(Ft)),
									je ? ae.push(je) : (Xt = !0),
									Xt)
								)
									throw new Error("Failed to create diff models");
								if (
									(ae.push(Me),
									Me.setModel({ original: Re, modified: je }),
									lt(),
									(Ve = !0),
									Me)
								) {
									ae.push(
										Me.onDidUpdateDiff(() => {
											ii();
										}),
									);
									const $t = Me.getModifiedEditor().onKeyDown(Nt);
									ae.push($t);
								}
							} catch (yi) {
								console.error("Failed to setup diff editor:", yi), ct();
							}
					};
				(0, a.onCleanup)(() => {
					ct(),
						De && (De.dispose(), (De = null)),
						Ae && (Ae.dispose(), (Ae = void 0)),
						ae.forEach((yi) => yi.dispose()),
						(ae.length = 0);
				}),
					(0, a.createEffect)(() => {
						Ut() && !Ve ? (Dt(), ii()) : !Ut() && Ve && ct();
					});
				const Jt = (yi) => {
					if (Ae && De) {
						const Ai = De.getLineCount(),
							li = De.getLineMaxColumn(Ai);
						De.applyEdits([
							{
								range: {
									startLineNumber: Ai,
									startColumn: li,
									endLineNumber: Ai,
									endColumn: li,
								},
								text: yi,
							},
						]);
					}
				};
				(0, a.createEffect)(() => {
					const yi = Ee();
					if (Ae && De && yi) {
						const Ai = Mt(yi.content ?? ""),
							li = Mt(De.getValue()),
							Vi = Ai.slice(li.length);
						if (Vi === "") return;
						Jt(Vi.replace(/[\uD800-\uDBFF]$/g, "")),
							(0, F.$Ogb)().requestAnimationFrame(() => {
								Rt();
							});
					}
				});
				const si = (0, a.createMemo)(() =>
						oe.composerService.shouldShowAcceptReject(
							He(),
							le.codeBlock.uri,
							le.codeBlock.version,
						),
					),
					Zt = {
						"box-sizing": "border-box",
						position: "relative",
						background: "var(--vscode-editor-background)",
						overflow: "hidden",
					},
					{ showHover: ci, hideHover: ri } = (0, P.useComposerHoverTooltip)({
						delay: 300,
						additionalClasses: ["chat-hover-tooltip"],
					}),
					$i = () => {
						Ae &&
							De &&
							(oe.clipboardService.writeText(De.getValue()),
							et(!1),
							setTimeout(() => et(!0), 2e3));
					},
					Wt = async () => {
						const yi = Ee()?.content;
						return yi
							? await oe.applyToFileActionsService.isEntryCached(
									le.codeBlock.uri,
									yi,
									N.$S0b,
									"fullfile",
								)
							: !1;
					},
					tt = async (yi) => {
						yi.stopPropagation();
						const Ai = yi.currentTarget.getBoundingClientRect();
						oe.analyticsService.trackEvent("composer.code_block.apply");
						const li = It();
						if (li.length !== 0) {
							if (li.length === 1 || (await Wt())) {
								at(li[0]);
								return;
							}
							if (Ee()?.newModelDiffWrtV0 && !Ye()) {
								at(li[0]);
								return;
							}
							ti({ x: Ai.right + 2, y: Ai.bottom + 2 });
						}
					},
					at = async (yi) => {
						if (!yi.applyToCurrentFile)
							if (yi.symbol?.range) {
								const li = (0, R.$8rb)(yi.uri, {
									startLineNumber: yi.symbol?.range.startLineNumber || 1,
									startColumn: yi.symbol?.range.startColumn || 1,
									endLineNumber: yi.symbol?.range.endLineNumber || 1,
									endColumn: yi.symbol?.range.endColumn || 1,
								});
								oe.openerService?.open(li);
							} else {
								const li = oe.editorService.findEditors(yi.uri);
								if (li.length > 0) {
									const Vi = oe.editorGroupService.getGroup(li[0].groupId);
									oe.editorService.openEditor(li[0].editor, Vi);
								} else await oe.openerService?.open(yi.uri);
							}
						let Ai;
						yi.symbol?.range &&
							(Ai = new O.$rL(
								yi.symbol.range.startLineNumber,
								yi.symbol.range.endLineNumber + 1,
							)),
							oe.composerService.applyCachedCodeBlock(
								He(),
								yi.uri,
								le.codeBlock.version,
								{ range: Ai, applyToCurrentFile: yi.applyToCurrentFile },
							);
					},
					[pi, Li] = (0, a.createSignal)(!1);
				(0, a.createEffect)(() => {
					if (Me && Re && je) {
						if (!Ee()) return;
						const Ai = Vt(le.codeBlock.version, !1),
							li = Vt(le.codeBlock.version),
							Vi = Bt();
						Ai?.join(Vi) !== Re.getValue() && Re.setValue(Ai?.join(Vi) ?? ""),
							li?.join(Vi) !== je.getValue() && je.setValue(li?.join(Vi) ?? ""),
							lt();
					}
				});
				const Di = (0, a.createMemo)(() =>
						ge() === "diff" && Ut()
							? pi() && Me
								? Me.getContentHeight() > Ce()
								: !1
							: gt(),
					),
					Ui = (0, u.createComponent)(a.Show, {
						get when() {
							return Ie() !== -1;
						},
						get children() {
							const yi = J(),
								Ai = yi.firstChild;
							return (
								yi.style.setProperty(
									"color",
									"var(--vscode-input-placeholderForeground)",
								),
								yi.style.setProperty("line-height", "120%"),
								yi.style.setProperty("font-size", "10px"),
								yi.style.setProperty("font-feature-settings", "tnum"),
								yi.style.setProperty("font-variant-numeric", "tabular-nums"),
								(0, r.insert)(yi, () => Ie() + 1, Ai),
								(0, r.insert)(yi, () => Te() + 1, null),
								yi
							);
						},
					}),
					Wi = (0, u.createComponent)(a.Show, {
						get when() {
							return (0, m.memo)(() => !!Ut())() && ei();
						},
						fallback: Ui,
						children: (yi) =>
							(0, u.createComponent)(a.Show, {
								get when() {
									return yi().added > 0 || yi().removed > 0;
								},
								fallback: Ui,
								get children() {
									const Ai = Y();
									return (
										(0, d.addEventListener)(Ai, "mouseleave", ri),
										Ai.addEventListener("mouseenter", (li) =>
											ci(li, `Version ${Ie() + 1}/${Te() + 1}`),
										),
										Ai.style.setProperty(
											"color",
											"var(--vscode-descriptionForeground)",
										),
										Ai.style.setProperty("line-height", "120%"),
										Ai.style.setProperty("font-size", "10px"),
										Ai.style.setProperty("font-feature-settings", "tnum"),
										Ai.style.setProperty(
											"font-variant-numeric",
											"tabular-nums",
										),
										Ai.style.setProperty("display", "flex"),
										Ai.style.setProperty("align-items", "center"),
										Ai.style.setProperty("gap", "4px"),
										(0, r.insert)(
											Ai,
											(0, u.createComponent)(a.Show, {
												get when() {
													return yi().added > 0;
												},
												get children() {
													const li = W(),
														Vi = li.firstChild;
													return (
														li.style.setProperty(
															"color",
															"var(--vscode-gitDecoration-addedResourceForeground)",
														),
														(0, r.insert)(li, () => yi().added, null),
														li
													);
												},
											}),
											null,
										),
										(0, r.insert)(
											Ai,
											(0, u.createComponent)(a.Show, {
												get when() {
													return yi().removed > 0;
												},
												get children() {
													const li = X(),
														Vi = li.firstChild;
													return (
														li.style.setProperty(
															"color",
															"var(--vscode-gitDecoration-deletedResourceForeground)",
														),
														(0, r.insert)(li, () => yi().removed, null),
														li
													);
												},
											}),
											null,
										),
										Ai
									);
								},
							}),
					}),
					Gi = (0, M.$b$b)(),
					qi = (0, a.createMemo)(() =>
						oe.composerDataService.getInlineDiff(
							He(),
							le.codeBlock.uri,
							le.codeBlock.version,
						),
					);
				return [
					(() => {
						const yi = _(),
							Ai = yi.firstChild,
							li = Ai.firstChild,
							Vi = li.firstChild,
							wi = Vi.firstChild,
							_t = Ai.nextSibling,
							ai = _t.firstChild,
							Ft = ai.firstChild;
						yi.addEventListener("mouseleave", () => Fe(!1)),
							yi.addEventListener("mouseenter", () => Fe(!0)),
							Ai.style.setProperty("display", "flex"),
							Ai.style.setProperty("align-items", "center"),
							Ai.style.setProperty("justify-content", "space-between"),
							Ai.style.setProperty("gap", "6px"),
							Ai.style.setProperty("max-width", "100%"),
							Ai.style.setProperty("overflow", "hidden"),
							Ai.style.setProperty(
								"border-bottom",
								"1px solid var(--vscode-commandCenter-inactiveBorder)",
							),
							Ai.style.setProperty("position", "sticky"),
							Ai.style.setProperty("top", "-1px"),
							Ai.style.setProperty("z-index", "2"),
							li.addEventListener("click", ($t) => {
								const ut = bt(),
									Et = oe.composerDataService.getInlineDiff(
										He(),
										le.codeBlock.uri,
										le.codeBlock.version,
									);
								if (Et) {
									const Tt = Et.changes[0];
									(0, I.openCodeSelectionInEditor)(
										{
											uri: Et.uri,
											range: {
												selectionStartLineNumber:
													Et.currentRange.startLineNumber +
													Tt.addedRange.startLineNumber -
													1,
												positionLineNumber:
													Et.currentRange.startLineNumber +
													Tt.addedRange.startLineNumber -
													1,
												selectionStartColumn: 1,
												positionColumn: 1,
											},
											text: "",
										},
										oe.workspaceContextService,
										oe.openerService,
									);
									return;
								}
								(0, I.openFileInEditorIfExists)(
									le.codeBlock.uri,
									oe.fileService,
									oe.openerService,
									$t.altKey,
								);
							}),
							li.style.setProperty("display", "flex"),
							li.style.setProperty("align-items", "center"),
							li.style.setProperty("height", "20px"),
							li.style.setProperty("min-width", "0"),
							li.style.setProperty("padding-right", "4px"),
							li.style.setProperty("user-select", "none"),
							li.style.setProperty("flex", "1"),
							li.style.setProperty("cursor", "pointer"),
							(0, r.insert)(
								li,
								(0, u.createComponent)(a.Show, {
									get when() {
										return Gi();
									},
									get children() {
										const $t = Y();
										return (
											$t.style.setProperty("margin-right", "-4px"),
											$t.style.setProperty("scale", "0.8"),
											$t.style.setProperty("height", "14px"),
											$t.style.setProperty("display", "flex"),
											$t.style.setProperty("align-items", "center"),
											(0, r.insert)(
												$t,
												(0, u.createComponent)(f.$k$b, {
													get fileName() {
														return Je();
													},
													get workspaceContextService() {
														return oe.workspaceContextService;
													},
													get modelService() {
														return oe.modelService;
													},
													get languageService() {
														return oe.languageService;
													},
												}),
											),
											$t
										);
									},
								}),
								Vi,
							),
							(0, d.addEventListener)(Vi, "mouseleave", ri),
							Vi.addEventListener("mouseenter", ($t) => {
								ci(
									$t,
									oe.labelService.getUriLabel(le.codeBlock.uri, {
										relative: !0,
									}),
								);
							}),
							Vi.style.setProperty("line-height", "120%"),
							Vi.style.setProperty("font-size", "10px"),
							Vi.style.setProperty("white-space", "nowrap"),
							Vi.style.setProperty("overflow", "hidden"),
							Vi.style.setProperty("text-overflow", "ellipsis"),
							Vi.style.setProperty("direction", "rtl"),
							wi.style.setProperty("direction", "ltr"),
							wi.style.setProperty("unicode-bidi", "embed"),
							(0, r.insert)(wi, Je),
							(0, r.insert)(
								li,
								(0, u.createComponent)(a.Show, {
									get when() {
										return (
											!Ee()?.isNotApplied ||
											oe.reactiveStorageService.applicationUserPersistentStorage
												.composerState.unification
										);
									},
									get children() {
										const $t = Y();
										return (
											$t.style.setProperty("margin-left", "4px"),
											$t.style.setProperty("display", "flex"),
											$t.style.setProperty("align-items", "center"),
											$t.style.setProperty("gap", "4px"),
											(0, r.insert)(
												$t,
												(0, u.createComponent)(a.Show, {
													get when() {
														return Ke() === "generating" || Ke() === "applying";
													},
													get fallback() {
														return (0, u.createComponent)(a.Show, {
															get when() {
																return (
																	(0, m.memo)(
																		() => !Ut() && !qi() && ye() === "edit",
																	)() &&
																	!["accepted", "rejected"].includes(Ke())
																);
															},
															get fallback() {
																return (0, u.createComponent)(a.Show, {
																	get when() {
																		return (
																			Ke() === "completed" ||
																			Ke() === "accepted"
																		);
																	},
																	get fallback() {
																		return [
																			Wi,
																			(0, u.createComponent)(
																				p.ComposerGeneralStatusIndicator,
																				{
																					get status() {
																						return Ke();
																					},
																				},
																			),
																		];
																	},
																	get children() {
																		return [
																			Wi,
																			(0, u.createComponent)(a.Show, {
																				get when() {
																					return Ke() === "accepted";
																				},
																				get fallback() {
																					return (0, u.createComponent)(
																						p.ComposerGeneralStatusIndicator,
																						{ status: "completed" },
																					);
																				},
																				get children() {
																					const ut = Y();
																					return (
																						ut.style.setProperty(
																							"font-size",
																							"10px",
																						),
																						ut.style.setProperty(
																							"color",
																							"var(--vscode-testing-iconPassed)",
																						),
																						(0, E.effect)(() =>
																							(0, i.className)(
																								ut,
																								n.ThemeIcon.asClassName(
																									h.$ak.check,
																								),
																							),
																						),
																						ut
																					);
																				},
																			}),
																		];
																	},
																});
															},
															get children() {
																const ut = te();
																return (
																	ut.style.setProperty(
																		"color",
																		"var(--vscode-input-placeholderForeground)",
																	),
																	ut.style.setProperty("font-size", "10px"),
																	ut.style.setProperty("margin-left", "4px"),
																	ut
																);
															},
														});
													},
													get children() {
														return [
															(() => {
																const ut = Y();
																return (
																	ut.style.setProperty(
																		"color",
																		"var(--vscode-input-placeholderForeground)",
																	),
																	ut.style.setProperty("font-size", "10px"),
																	(0, r.insert)(
																		ut,
																		() =>
																			b.composerCodeBlockStatusLabelMap[Ke()],
																	),
																	ut
																);
															})(),
															(() => {
																const ut = Y();
																return (
																	ut.style.setProperty(
																		"transform",
																		"scale(0.75)",
																	),
																	ut.style.setProperty("display", "flex"),
																	ut.style.setProperty("align-items", "center"),
																	ut.style.setProperty(
																		"justify-content",
																		"center",
																	),
																	ut.style.setProperty("max-height", "10px"),
																	(0, r.insert)(
																		ut,
																		(0, u.createComponent)(s.$Z8b, {}),
																	),
																	ut
																);
															})(),
														];
													},
												}),
											),
											$t
										);
									},
								}),
								null,
							),
							(0, r.insert)(
								Ai,
								(0, u.createComponent)(K.ComposerMessageCodeblockActions, {
									get isMouseOver() {
										return Le();
									},
									get copyEnabled() {
										return Ze();
									},
									handleCopy: $i,
									get currentStatus() {
										return Be();
									},
									get reactiveCodeBlock() {
										return Ee();
									},
									get composerId() {
										return He();
									},
									get codeBlockUri() {
										return le.codeBlock.uri;
									},
									get codeBlockVersion() {
										return le.codeBlock.version;
									},
									get versionExcludingNonAppliedCodeblocks() {
										return Ie();
									},
									get shouldShowAcceptReject() {
										return si();
									},
									get hasDiffData() {
										return xt();
									},
									get canShowDiff() {
										return Ut() ?? !1;
									},
									get preferShowType() {
										return ge();
									},
									setPreferShowType: be,
									setNonChatCollapsed: ve,
									onApplyClick: tt,
									get actionMenuPosition() {
										return jt();
									},
									get forceToolsRerender() {
										return rt();
									},
								}),
								null,
							),
							_t.style.setProperty("position", "relative");
						const Xt = Ue;
						return (
							typeof Xt == "function" ? (0, C.use)(Xt, Ft) : (Ue = Ft),
							(0, r.insert)(
								_t,
								(0, u.createComponent)(a.Show, {
									get when() {
										return Ut();
									},
									get children() {
										const $t = ie(),
											ut = $t.firstChild,
											Et = qe;
										return (
											typeof Et == "function" ? (0, C.use)(Et, ut) : (qe = ut),
											(0, E.effect)(
												(Tt) => {
													const qt = {
															...Zt,
															display:
																ge() === "diff" && Ut() && Ee()?.content
																	? "block"
																	: "none",
															height: fe()
																? `${Math.min(Oe(), Ce())}px`
																: `${Math.min(Oe(), le.maxExpandedHeight ?? 1 / 0)}px`,
															"margin-bottom":
																Di() && ye() !== "chat" && !fe()
																	? "16px"
																	: void 0,
														},
														At = fe()
															? `${Math.min(Oe(), Ce())}px`
															: `${Math.min(Oe(), le.maxExpandedHeight ?? 1 / 0)}px`;
													return (
														(Tt._v$ = (0, w.style)($t, qt, Tt._v$)),
														At !== Tt._v$2 &&
															((Tt._v$2 = At) != null
																? ut.style.setProperty("height", At)
																: ut.style.removeProperty("height")),
														Tt
													);
												},
												{ _v$: void 0, _v$2: void 0 },
											),
											$t
										);
									},
								}),
								null,
							),
							(0, r.insert)(
								_t,
								(0, u.createComponent)(a.Show, {
									get when() {
										return (0, m.memo)(() => !!Di())() && ye() !== "chat";
									},
									get children() {
										return [
											(() => {
												const $t = ne();
												return (
													$t.addEventListener("click", () => {
														ve(!fe()),
															oe.analyticsService.trackEvent(
																fe()
																	? "composer.code_block.expand"
																	: "composer.code_block.collapse",
																{ source: "bottom-bar" },
															);
													}),
													$t.style.setProperty("position", "absolute"),
													$t.style.setProperty("top", "0"),
													$t.style.setProperty("left", "0"),
													$t.style.setProperty("right", "0"),
													$t.style.setProperty("bottom", "0"),
													(0, E.effect)(() =>
														(fe() ? "auto" : "none") != null
															? $t.style.setProperty(
																	"pointer-events",
																	fe() ? "auto" : "none",
																)
															: $t.style.removeProperty("pointer-events"),
													),
													$t
												);
											})(),
											(() => {
												const $t = ee(),
													ut = $t.firstChild;
												return (
													$t.addEventListener("click", (Et) => {
														Et.stopPropagation(),
															Et.stopImmediatePropagation(),
															oe.analyticsService.trackEvent(
																fe()
																	? "composer.code_block.expand"
																	: "composer.code_block.collapse",
															),
															ve(!fe());
													}),
													$t.style.setProperty("z-index", "1"),
													(0, E.effect)(
														(Et) => {
															const Tt = Le() ? 0.9 : void 0,
																qt = n.ThemeIcon.asClassName(
																	fe() ? G.$E0b : G.$F0b,
																);
															return (
																Tt !== Et._v$3 &&
																	((Et._v$3 = Tt) != null
																		? $t.style.setProperty("opacity", Tt)
																		: $t.style.removeProperty("opacity")),
																qt !== Et._v$4 &&
																	(0, i.className)(ut, (Et._v$4 = qt)),
																Et
															);
														},
														{ _v$3: void 0, _v$4: void 0 },
													),
													$t
												);
											})(),
										];
									},
								}),
								null,
							),
							(0, E.effect)(
								($t) => {
									const ut = {
											display: "flex",
											"flex-direction": "column",
											border:
												"1px solid var(--vscode-commandCenter-inactiveBorder)",
											transition: "border-color 0.1s ease-in-out",
											contain: "paint",
											position: "relative",
											margin: "4px 0px",
											"border-radius": "2px",
											"border-bottom": Ee()?.content ? void 0 : "none",
											...le.style,
										},
										Et = Se(),
										Tt = Gi() ? "2px" : "4px",
										qt = Ie() === -1 ? "2px" : void 0,
										At = {
											...Zt,
											display:
												!Ee()?.content || (ge() === "diff" && Ut())
													? "none"
													: "block",
											"--vscode-sideBar-background":
												"var(--vscode-editor-background)",
											padding: "0px 6px",
											"padding-bottom":
												Di() && ye() !== "chat" ? "16px" : void 0,
										};
									return (
										($t._v$5 = (0, w.style)(yi, ut, $t._v$5)),
										Et !== $t._v$6 &&
											(($t._v$6 = Et) != null
												? Ai.style.setProperty("background", Et)
												: Ai.style.removeProperty("background")),
										Tt !== $t._v$7 &&
											(($t._v$7 = Tt) != null
												? li.style.setProperty("padding-left", Tt)
												: li.style.removeProperty("padding-left")),
										qt !== $t._v$8 &&
											(($t._v$8 = qt) != null
												? Vi.style.setProperty("margin-right", qt)
												: Vi.style.removeProperty("margin-right")),
										($t._v$9 = (0, w.style)(ai, At, $t._v$9)),
										$t
									);
								},
								{
									_v$5: void 0,
									_v$6: void 0,
									_v$7: void 0,
									_v$8: void 0,
									_v$9: void 0,
								},
							),
							yi
						);
					})(),
					(0, u.createComponent)(a.Show, {
						get when() {
							return jt();
						},
						children: (yi) =>
							(0, u.createComponent)(k.Menu, {
								width: "auto",
								get position() {
									return yi();
								},
								close: kt,
								get reactiveCloser() {
									return ye() === "chat"
										? oe.reactiveStorageService.nonPersistentStorage
												.forceChatDropdownRerender
										: oe.reactiveStorageService.nonPersistentStorage
												.forceComposerDropdownRerender;
								},
								anchor: "top-right",
								style: {
									"background-color": "var(--vscode-editor-background)",
									border:
										"1px solid var(--vscode-commandCenter-inactiveBorder)",
									"border-radius": "2px",
									overflow: "hidden",
									"z-index": 1e3,
									"max-width": "240px",
									"font-size": "11px",
									padding: "0px",
								},
								get children() {
									return (0, u.createComponent)(z.$w0b, {
										style: { "max-height": "120px" },
										contentStyle: {
											display: "flex",
											"flex-direction": "column",
										},
										innerContainerStyle: { "min-height": "unset" },
										scrollingDirection: "vertical",
										nonReactiveElementOptions: { alwaysConsumeMouseWheel: !0 },
										get children() {
											const Ai = ne();
											return (
												Ai.style.setProperty("display", "flex"),
												Ai.style.setProperty("flex-direction", "column"),
												Ai.style.setProperty("gap", "2px"),
												Ai.style.setProperty("padding", "2px"),
												Ai.style.setProperty("box-sizing", "border-box"),
												(0, r.insert)(
													Ai,
													(0, u.createComponent)(a.For, {
														get each() {
															return It();
														},
														children: (li) => {
															const Vi = (0, a.createMemo)(() => {
																	const _t = li.applyToCurrentFile
																		? Xe()
																		: li.uri;
																	return _t
																		? oe.workspaceContextService.asRelativePath(
																				_t,
																			)
																		: "Current file";
																}),
																wi = li.symbol ? ` (${li.symbol.name})` : "";
															return (0, u.createComponent)(L.default, {
																style: {
																	"text-overflow": "ellipsis",
																	"white-space": "nowrap",
																	overflow: "hidden",
																	padding: "2px 0px",
																	"padding-left": "1px",
																	"padding-right": "3px",
																	"border-radius": "2px",
																	cursor: "pointer",
																	display: "flex",
																	"align-items": "center",
																	gap: "4px",
																},
																onClick: () => {
																	at(li), kt();
																},
																onMouseEnter: (_t) =>
																	ci(_t, Vi() + wi, U.HoverPosition.RIGHT),
																onMouseLeave: ri,
																get children() {
																	return [
																		(0, u.createComponent)(a.Show, {
																			get when() {
																				return Gi();
																			},
																			get children() {
																				const _t = Y();
																				return (
																					_t.style.setProperty(
																						"margin-right",
																						"-4px",
																					),
																					_t.style.setProperty("scale", "0.8"),
																					_t.style.setProperty(
																						"height",
																						"14px",
																					),
																					_t.style.setProperty(
																						"display",
																						"flex",
																					),
																					_t.style.setProperty(
																						"align-items",
																						"center",
																					),
																					(0, r.insert)(
																						_t,
																						(0, u.createComponent)(a.Show, {
																							get when() {
																								return li.symbol;
																							},
																							get fallback() {
																								return (0, u.createComponent)(
																									f.$k$b,
																									{
																										get fileName() {
																											return Vi();
																										},
																										get workspaceContextService() {
																											return oe.workspaceContextService;
																										},
																										get modelService() {
																											return oe.modelService;
																										},
																										get languageService() {
																											return oe.languageService;
																										},
																									},
																								);
																							},
																							get children() {
																								const ai = ne();
																								return (
																									ai.style.setProperty(
																										"font-size",
																										"14px",
																									),
																									ai.style.setProperty(
																										"margin-left",
																										"2px",
																									),
																									ai.style.setProperty(
																										"margin-right",
																										"4px",
																									),
																									(0, E.effect)(() =>
																										(0, i.className)(
																											ai,
																											`codicon codicon-symbol-${Z(li.symbol?.kind)}`,
																										),
																									),
																									ai
																								);
																							},
																						}),
																					),
																					_t
																				);
																			},
																		}),
																		(() => {
																			const _t = Q(),
																				ai = _t.firstChild;
																			return (
																				_t.style.setProperty(
																					"text-overflow",
																					"ellipsis",
																				),
																				_t.style.setProperty(
																					"overflow",
																					"hidden",
																				),
																				_t.style.setProperty(
																					"white-space",
																					"nowrap",
																				),
																				_t.style.setProperty(
																					"direction",
																					"rtl",
																				),
																				_t.style.setProperty(
																					"line-height",
																					"120%",
																				),
																				ai.style.setProperty(
																					"direction",
																					"ltr",
																				),
																				ai.style.setProperty(
																					"unicode-bidi",
																					"embed",
																				),
																				(0, r.insert)(ai, () => Vi() + wi),
																				_t
																			);
																		})(),
																	];
																},
															});
														},
													}),
												),
												Ai
											);
										},
									});
								},
							}),
					}),
				];
			}
		},
	),
		
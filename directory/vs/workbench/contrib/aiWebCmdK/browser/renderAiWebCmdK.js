import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/lexical/lexical/lexical.js';
import '../../../../../external/solid/solid.js';
import '../../../../base/common/constants.js';
import '../../../../base/common/resources.js';
import '../../aichat/browser/components/InputBoxImage.js';
import '../../aichat/browser/components/Utils.js';
import '../../ui/browser/aiInput/aiInput2.js';
import '../../ui/browser/aiInput/plugins/mentions/pureIcon.js';
import '../../ui/browser/aiInput/plugins/mentions/types.js';
import '../../ui/browser/simpleButton/simpleButton.js';
import '../../controlCommon/browser/solid.js';
import '../../../services/editor/common/editorService.js';
define(
			de[4315],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 158, 13, 58, 19, 1364, 242, 450, 156, 310, 147,
				36, 18,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*web*/,
 d /*web*/,
 m /*lexical*/,
 r /*solid*/,
 u /*constants*/,
 a /*resources*/,
 h /*InputBoxImage*/,
 c /*Utils*/,
 n /*aiInput2*/,
 g /*pureIcon*/,
 p /*types*/,
 o /*simpleButton*/,
 f /*solid*/,
 b /*editorService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Hfd = $);
				const s = (0, t.template)("<span>"),
					l = (0, t.template)("<div>"),
					y = (0, t.template)('<div><div class="inline-prompt-button-area">');
				function $() {
					const v = (0, f.$odc)(),
						[S, I] = (0, r.createSignal)(!1),
						T = [
							{
								command: m.KEY_ESCAPE_COMMAND,
								callback: (D) => (
									v.webCmdKService.close(), D.stopPropagation(), !0
								),
							},
						],
						P = (0, r.createMemo)(() =>
							v.reactiveStorageService.nonPersistentStorage.inprogressAIGenerations.some(
								(D) =>
									D.generationUUID ===
									v.reactiveStorageService.nonPersistentStorage.webCmdKState
										.promptBar?.lastGenerationUUID,
							),
						),
						k = (D, M) => {
							v.reactiveStorageService.setNonPersistentStorage(
								"webCmdKState",
								"promptBar",
								"images",
								[{ ...M, uuid: D }],
							);
						},
						L = (D) => {
							v.reactiveStorageService.setNonPersistentStorage(
								"webCmdKState",
								"promptBar",
								"images",
								(M) => M?.filter((N) => N.uuid !== D),
							);
						};
					return (
						(0, r.createEffect)(() => {
							const D =
								v.reactiveStorageService.nonPersistentStorage.webCmdKState
									.promptBar;
							if (D) {
								const M = D.inputBoxDelegate;
								setTimeout(() => {
									M && M.focus();
								}, 20);
							}
						}),
						(0, d.createComponent)(r.Show, {
							get when() {
								return v.reactiveStorageService.nonPersistentStorage
									.webCmdKState.promptBar;
							},
							children: (D) =>
								(() => {
									const M = y(),
										N = M.firstChild;
									return (
										M.style.setProperty("position", "absolute"),
										M.style.setProperty("bottom", "50px"),
										M.style.setProperty("left", "50%"),
										M.style.setProperty("transform", "translateX(-50%)"),
										M.style.setProperty("width", "min(500px,100%)"),
										M.style.setProperty(
											"box-shadow",
											"0 4px 8px var(--vscode-inlineChat-shadow)",
										),
										M.style.setProperty("font-size", "12px"),
										M.style.setProperty(
											"background-color",
											"var(--vscode-editor-background)",
										),
										M.style.setProperty("border-radius", "5px"),
										M.style.setProperty("z-index", "1000"),
										M.style.setProperty("color", "var(--vscode-foreground)"),
										M.style.setProperty("user-select", "text"),
										M.style.setProperty("box-sizing", "border-box"),
										M.style.setProperty("height", "100px"),
										(0, w.insert)(
											M,
											(0, d.createComponent)(r.Show, {
												get when() {
													return (
														(0, C.memo)(() => (D().images.length ?? 0) > 0)() &&
														D().images
													);
												},
												children: (A) =>
													(() => {
														const R = l();
														return (
															R.style.setProperty("height", "50px"),
															R.style.setProperty("overflow", "hidden"),
															(0, w.insert)(
																R,
																(0, d.createComponent)(r.For, {
																	get each() {
																		return A();
																	},
																	children: (O) =>
																		(0, d.createComponent)(h.$Gbc, {
																			image: O,
																			removeImage: () => L(O.uuid),
																		}),
																}),
															),
															R
														);
													})(),
											}),
											N,
										),
										(0, w.insert)(
											M,
											(0, d.createComponent)(
												n.$Uac,
												(0, E.mergeProps)(p.$w_b, {
													readonly: !1,
													supportsGit: !1,
													supportsCommitNotes: !1,
													atMentionsDisabled: !0,
													supportsLint: !1,
													supportsCodebase: !1,
													showDocs: !1,
													supportsLink: !1,
													supportsFolderSelections: !1,
													addImage: k,
													isLongContextMode: !1,
													source: "web.cmdk",
													removeImage: L,
													supportsWeb: !1,
													useArrowsForHistory: !0,
													get initText() {
														return D().initText;
													},
													placeholder:
														"Type to change the UI (history, @ not supported yet)",
													get delegate() {
														return D().delegate;
													},
													get inputBoxDelegate() {
														return D().inputBoxDelegate;
													},
													editorConfig: () => ({
														...(0, n.$Rac)(),
														namespace: "web-prompt-bar",
														onError: (A) => {
															console.error(A);
														},
													}),
													setEditor: (A) => {},
													setText: (A) => {},
													setRichText: (A) => {
														v.reactiveStorageService.setNonPersistentStorage(
															"webCmdKState",
															"promptBar",
															"initText",
															A,
														);
													},
													onEscape: void 0,
													onSubmit: (A) => {
														v.webCmdKService.submit();
													},
													setIsFocused: (A) => {
														I(A);
													},
													externalHistoryBundle: void 0,
													extraCommandListeners: T,
												}),
											),
											N,
										),
										N.style.setProperty("display", "flex"),
										N.style.setProperty("justify-content", "flex-start"),
										N.style.setProperty("margin", "4px 0px 6px 0px"),
										N.style.setProperty("align-items", "center"),
										(0, w.insert)(
											N,
											(0, d.createComponent)(r.Switch, {
												get children() {
													return (0, d.createComponent)(r.Match, {
														get when() {
															return P();
														},
														get children() {
															return [
																(0, d.createComponent)(o.$rdc, {
																	get title() {
																		return (
																			v.keybindingService
																				?.lookupKeybinding(u.$7W)
																				?.getLabel() + " Cancel"
																		);
																	},
																	onClick: () => {},
																	type: "secondary",
																}),
																(() => {
																	const A = s();
																	return (
																		A.style.setProperty("font-size", "10px"),
																		A.style.setProperty("margin-left", "4px"),
																		A.style.setProperty("padding", "0px 4px"),
																		A.style.setProperty(
																			"color",
																			"var(--vscode-input-placeholderForeground)",
																		),
																		(0, w.insert)(
																			A,
																			(0, d.createComponent)(c.$C$b, {
																				show: !0,
																			}),
																		),
																		A
																	);
																})(),
																(0, d.createComponent)(g.$k$b, {
																	get fileName() {
																		return D().sourceURI.fsPath;
																	},
																	get workspaceContextService() {
																		return v.workspaceContextService;
																	},
																	get modelService() {
																		return v.modelService;
																	},
																	get languageService() {
																		return v.languageService;
																	},
																}),
																(() => {
																	const A = l();
																	return (
																		A.addEventListener("click", () => {
																			v.editorService.openEditor(
																				{ resource: D().sourceURI },
																				b.$KY,
																			);
																		}),
																		A.style.setProperty("cursor", "pointer"),
																		(0, w.insert)(A, () =>
																			(0, a.$kh)(D().sourceURI),
																		),
																		A
																	);
																})(),
															];
														},
													});
												},
											}),
										),
										(0, i.effect)(() =>
											"1px solid " +
												(S()
													? "var(--vscode-commandCenter-activeBorder)"
													: "var(--vscode-commandCenter-inactiveBorder)") !=
											null
												? M.style.setProperty(
														"border",
														"1px solid " +
															(S()
																? "var(--vscode-commandCenter-activeBorder)"
																: "var(--vscode-commandCenter-inactiveBorder)"),
													)
												: M.style.removeProperty("border"),
										),
										M
									);
								})(),
						})
					);
				}
			},
		),
		
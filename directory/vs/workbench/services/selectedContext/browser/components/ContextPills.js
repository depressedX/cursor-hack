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
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/themables.js';
import '../../../../contrib/controlCommon/browser/solid.js';
import '../../../../contrib/ui/browser/aiInput/plugins/mentions/pureIcon.js';
import '../../../../../base/common/uri.js';
import '../../../../../base/common/network.js';
import '../../../../../base/browser/ui/hover/hoverWidget.js';
import '../../../../contrib/ui/browser/hooks/useVSHoverTooltip.js';
import '../../../../contrib/ui/browser/aiInput/utils.js';
import '../../../../contrib/ui/browser/hooks/useIsUsingFileIconTheme.js';
import '../../../../../css!vs/workbench/services/selectedContext/browser/components/ContextPills.js';
define(
			de[573],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 14, 26, 36, 156, 9, 23, 160,
				422, 1777, 428, 2539,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*web*/,
				i /*web*/,
				w /*web*/,
				E /*web*/,
				C /*web*/,
				d /*web*/,
				m /*web*/,
				r /*web*/,
				u /*web*/,
				a /*web*/,
				h /*web*/,
				c /*solid*/,
				n /*codicons*/,
				g /*themables*/,
				p /*solid*/,
				o /*pureIcon*/,
				f /*uri*/,
				b /*network*/,
				s /*hoverWidget*/,
				l /*useVSHoverTooltip*/,
				y /*utils*/,
				$ /*useIsUsingFileIconTheme*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ibc = e.$gbc = e.$fbc = e.$ebc = e.PillGenerationStage = void 0),
					(e.$hbc = M);
				const v = (0, t.template)("<span>"),
					S = (0, t.template)('<div tabindex="0"><span>'),
					I = (0, t.template)('<div><img alt="Image preview">'),
					T = (0, t.template)("<div>"),
					P = (0, t.template)('<div tabindex="0"><div>');
				var k;
				(function (R) {
					(R.Using = "using"), (R.WillUse = "will use"), (R.Used = "used");
				})(k || (e.PillGenerationStage = k = {}));
				const L = {
					diff: "Diff of Working State",
					diffToMain: "Diff with Main Branch",
					pr: "Pull Request",
					commit: "Commit",
					web: "Web",
					repo_map: "Repo Map (will be slow!)",
					link: "Link",
					lint: "Lint errors",
					currentFile: "Current file",
					recentFiles: "Recent files",
					atSymbols: "Mentions",
					codebase: "Codebase",
					cursor: "Cursor position",
					image: "Image",
					docs: "Docs",
					nocontext: "No context",
					folder: "Folder",
					file: "File",
					code: "Code",
					pinned: "Pinned",
					mentionedFiles: "Mentioned files",
					contextBank: "Context bank",
					quote: "Quote",
					terminal: "Terminal",
					terminalFile: "Terminal",
					notepad: "Notepad",
					editTrailContext: "Edit trail",
					rememberThis: "Remember This",
				};
				(e.$ebc = {
					selections: "code",
					fileSelections: "file",
					folderSelections: "folder",
					selectedDocs: "docs",
					selectedCommits: "commit",
					selectedPullRequests: "pr",
					terminalSelections: "terminal",
					terminalFiles: "terminalFile",
					quotes: "quote",
					selectedImages: "image",
					gitDiff: "diff",
					gitDiffFromBranchToMain: "diffToMain",
					usesCodebase: "codebase",
					useWeb: "web",
					externalLinks: "link",
					notepads: "notepad",
					useLinterErrors: "lint",
					editTrailContexts: "editTrailContext",
					useDiffReview: "*",
					useContextPicking: "*",
					diffHistory: "*",
					useRememberThis: "rememberThis",
				}),
					(e.$fbc = Object.fromEntries(
						Object.entries(e.$ebc).map(([R, O]) => [O, R]),
					));
				const D = {
					diff: n.$ak.diff,
					diffToMain: n.$ak.diff,
					pr: n.$ak.gitPullRequest,
					repo_map: n.$ak.map,
					commit: n.$ak.gitCommit,
					lint: n.$ak.warning,
					image: n.$ak.paintcan,
					currentFile: n.$ak.file,
					recentFiles: n.$ak.history,
					atSymbols: "@",
					codebase: n.$ak.repo,
					docs: n.$ak.book,
					cursor: n.$ak.search,
					nocontext: "",
					link: n.$ak.link,
					folder: n.$ak.folderActive,
					pinned: n.$ak.pinned,
					file: n.$ak.file,
					code: n.$ak.code,
					web: n.$ak.globe,
					mentionedFiles: n.$ak.fileSymlinkFile,
					contextBank: n.$ak.library,
					quote: n.$ak.quote,
					terminal: n.$ak.terminal,
					terminalFile: n.$ak.terminal,
					gitGraphFileSuggestion: n.$ak.file,
					notepad: n.$ak.book,
					editTrailContext: n.$ak.history,
					rememberThis: n.$ak.bookmark,
					"*": "",
				};
				e.$gbc = { gitGraphFileSuggestion: "Suggested (Click to add)" };
				function M(R) {
					let O;
					return (
						(0, c.createEffect)(() => {
							R.isSelected && !R.disableFocusOnSelect && O?.focus();
						}),
						(() => {
							const B = S(),
								U = B.firstChild;
							return (
								B.addEventListener("mouseleave", (z) => R.onMouseLeave?.(z)),
								B.addEventListener("mouseenter", (z) => R.onMouseEnter?.(z)),
								B.addEventListener("click", (z) => R.onClick(z)),
								(0, h.use)((z) => {
									(O = z), R.setDomRef(z);
								}, B),
								U.style.setProperty("font-size", "10px"),
								U.style.setProperty(
									"color",
									"var(--vscode-input-placeholderForeground)",
								),
								(0, a.insert)(
									B,
									(0, u.createComponent)(c.Show, {
										get when() {
											return R.label;
										},
										get children() {
											const z = v();
											return (
												z.style.setProperty(
													"color",
													"var(--vscode-input-placeholderForeground)",
												),
												z.style.setProperty("font-size", "12px"),
												z.style.setProperty("margin-inline", "4px"),
												(0, a.insert)(z, () => R.label),
												z
											);
										},
									}),
									null,
								),
								(0, r.effect)(
									(z) => {
										const F = R.id,
											x = `premium-pill premium-pill-default ${R.isSelected ? "premium-pill-selected" : ""}`,
											H = {
												cursor: "pointer",
												display: "flex",
												"align-items": "center",
												"justify-content": "center",
												padding: "2px 2px",
												height: "18px",
												width: R.label ? "auto" : "18px",
												"box-sizing": "border-box",
												"border-radius": "3px",
												border: R.isSelected
													? "1px solid var(--vscode-editorGutter-modifiedBackground)"
													: "1px solid var(--vscode-list-inactiveSelectionBackground)",
												outline: "none",
												"flex-shrink": 0,
												...R.style,
											},
											q = g.ThemeIcon.asClassName(n.$ak.add),
											V = R.label ? "1px" : "0px";
										return (
											F !== z._v$ && (0, m.setAttribute)(B, "id", (z._v$ = F)),
											x !== z._v$2 && (0, d.className)(B, (z._v$2 = x)),
											(z._v$3 = (0, C.style)(B, H, z._v$3)),
											q !== z._v$4 && (0, d.className)(U, (z._v$4 = q)),
											V !== z._v$5 &&
												((z._v$5 = V) != null
													? U.style.setProperty("padding-left", V)
													: U.style.removeProperty("padding-left")),
											z
										);
									},
									{
										_v$: void 0,
										_v$2: void 0,
										_v$3: void 0,
										_v$4: void 0,
										_v$5: void 0,
									},
								),
								B
							);
						})()
					);
				}
				const N = (R) => {
					const O = (0, p.$odc)(),
						{ showHover: B, hideHover: U } = A(),
						{ showHover: z, hideHover: F } = A({ delay: 800 }),
						x = () => {
							R.onClick && R.onClick();
						};
					let H;
					(0, c.createEffect)(() => {
						R.isSelected && H?.focus();
					});
					const q = (0, c.createMemo)(() => {
							if (R.type !== "image" || !R.data) return "";
							const W = R.data;
							if (!W.path) return "";
							const X = f.URI.file(W.path);
							return b.$7g.uriToBrowserUri(X).toString();
						}),
						[V, G] = (0, c.createSignal)(!0);
					(0, c.createEffect)(() => {
						if (R.type !== "image" || !R.data) return;
						const W = R.data;
						if (!W.path) return;
						const X = f.URI.file(W.path);
						O.fileService
							.exists(X)
							.then((Y) => {
								G(Y);
							})
							.catch(() => {
								G(!1);
							});
					});
					const K = (0, c.createMemo)(
							() =>
								R.hideTypeTitle && !R.hoverText && !R.extraString && L[R.type],
						),
						J = (0, $.$b$b)();
					return (() => {
						const W = P(),
							X = W.firstChild,
							Y = H;
						return (
							typeof Y == "function" ? (0, h.use)(Y, W) : (H = W),
							(0, w.spread)(
								W,
								(0, E.mergeProps)(
									{
										get id() {
											return R.id;
										},
										get style() {
											return {
												display: "inline-flex",
												"max-width": "100%",
												overflow: "hidden",
												"white-space": "nowrap",
												"text-overflow": "ellipsis",
												"flex-shrink": 0,
												position: "relative",
												outline: "none",
												...R.style,
											};
										},
									},
									() =>
										(e.$gbc[R.type] || R.hoverText) && !R.isLoading
											? {
													onMouseEnter: (ie) =>
														R.hoverText
															? z(ie, R.hoverText)
															: B(ie, e.$gbc[R.type]),
													onMouseLeave: R.hoverText ? F : U,
												}
											: {},
								),
								!1,
								!0,
							),
							X.addEventListener("click", x),
							(0, w.spread)(
								X,
								(0, E.mergeProps)(
									{
										get class() {
											return `context-pill context-pill-default ${R.isSelected ? "context-pill-selected" : ""}`;
										},
										get style() {
											return {
												cursor: R.isLoading
													? "not-allowed"
													: R.onClick
														? "pointer"
														: "default",
												border: R.isSelected
													? R.type === "gitGraphFileSuggestion"
														? "1px dashed var(--vscode-editorGutter-modifiedBackground)"
														: "1px solid var(--vscode-editorGutter-modifiedBackground)"
													: R.type === "gitGraphFileSuggestion"
														? "1px dashed var(--vscode-list-inactiveSelectionBackground)"
														: "1px solid var(--vscode-list-inactiveSelectionBackground)",
												background:
													(R.type === "gitGraphFileSuggestion",
													"var(--vscode-editor-background)"),
												"border-style":
													R.type === "gitGraphFileSuggestion"
														? "dashed"
														: "solid",
												transition: "opacity 0.2s",
												opacity:
													(R.type === "gitGraphFileSuggestion" &&
														!R.isSelected) ||
													R.willBeOmitted
														? "0.6"
														: "1",
											};
										},
									},
									() =>
										K()
											? {
													onMouseEnter: (ie) => B(ie, L[R.type]),
													onMouseLeave: U,
												}
											: {},
								),
								!1,
								!0,
							),
							(0, a.insert)(
								X,
								(0, u.createComponent)(c.Show, {
									get when() {
										return R.type === "image";
									},
									get fallback() {
										return [
											(0, u.createComponent)(c.Show, {
												get when() {
													return (
														R.type === "file" ||
														R.type === "code" ||
														R.type === "currentFile" ||
														R.type === "gitGraphFileSuggestion"
													);
												},
												get fallback() {
													return (0, u.createComponent)(c.Show, {
														get when() {
															return R.iconOverride || D[R.type];
														},
														get children() {
															const ie = T();
															return (
																ie.style.setProperty("font-size", "10px"),
																(0, a.insert)(
																	ie,
																	(0, u.createComponent)(c.Show, {
																		get when() {
																			return (
																				typeof D[R.type] == "string" &&
																				!R.iconOverride
																			);
																		},
																		get children() {
																			return D[R.type];
																		},
																	}),
																),
																(0, r.effect)(() =>
																	(0, d.className)(
																		ie,
																		R.iconOverride
																			? g.ThemeIcon.asClassName(R.iconOverride)
																			: typeof D[R.type] != "string"
																				? g.ThemeIcon.asClassName(D[R.type])
																				: "",
																	),
																),
																ie
															);
														},
													});
												},
												get children() {
													return (0, u.createComponent)(c.Show, {
														get when() {
															return J();
														},
														get children() {
															const ie = T();
															return (
																ie.style.setProperty("margin-left", "-4px"),
																ie.style.setProperty("margin-right", "-4px"),
																ie.style.setProperty("scale", "0.8"),
																(0, a.insert)(
																	ie,
																	(0, u.createComponent)(o.$k$b, {
																		get fileName() {
																			return R.fileName || "";
																		},
																		get workspaceContextService() {
																			return O.workspaceContextService;
																		},
																		get modelService() {
																			return O.modelService;
																		},
																		get languageService() {
																			return O.languageService;
																		},
																	}),
																),
																ie
															);
														},
													});
												},
											}),
											(0, u.createComponent)(c.Show, {
												get when() {
													return (
														R.extraString === void 0 || R.extraString === ""
													);
												},
												get fallback() {
													return [
														(() => {
															const ie = T();
															return (
																ie.style.setProperty("flex-shrink", "0"),
																(0, a.insert)(
																	ie,
																	(() => {
																		const ne = (0, i.memo)(
																			() =>
																				typeof R.extraString == "string" &&
																				(R.extraString ?? "").length >
																					(R.extraStringCutoff ?? y.$cbc),
																		);
																		return () =>
																			ne()
																				? (R.extraString ?? "").substring(
																						0,
																						R.extraStringCutoff ?? y.$cbc,
																					) + "..."
																				: R.extraString;
																	})(),
																),
																(0, r.effect)(() =>
																	(R.type === "gitGraphFileSuggestion" &&
																	!R.isSelected
																		? "var(--vscode-input-placeholderForeground)"
																		: "var(--vscode-editor-foreground)") != null
																		? ie.style.setProperty(
																				"color",
																				R.type === "gitGraphFileSuggestion" &&
																					!R.isSelected
																					? "var(--vscode-input-placeholderForeground)"
																					: "var(--vscode-editor-foreground)",
																			)
																		: ie.style.removeProperty("color"),
																),
																ie
															);
														})(),
														(0, u.createComponent)(c.Show, {
															get when() {
																return (
																	!R.hideTypeTitle &&
																	(R.secondaryTextOverride || L[R.type])
																);
															},
															get children() {
																const ie = T();
																return (
																	ie.style.setProperty(
																		"color",
																		"var(--vscode-input-placeholderForeground)",
																	),
																	ie.style.setProperty("flex-shrink", "0"),
																	ie.style.setProperty("overflow", "hidden"),
																	ie.style.setProperty("white-space", "nowrap"),
																	ie.style.setProperty(
																		"text-overflow",
																		"ellipsis",
																	),
																	(0, a.insert)(
																		ie,
																		() =>
																			R.secondaryTextOverride ||
																			(R.type === "file" &&
																			R.data?.isCurrentFile
																				? "Current File"
																				: L[R.type]),
																	),
																	ie
																);
															},
														}),
													];
												},
												get children() {
													return (0, u.createComponent)(c.Show, {
														get when() {
															return !R.hideTypeTitle;
														},
														get children() {
															const ie = T();
															return (
																(0, a.insert)(
																	ie,
																	() => R.secondaryTextOverride || L[R.type],
																),
																ie
															);
														},
													});
												},
											}),
											(0, u.createComponent)(c.Show, {
												get when() {
													return (
														R.onRemove && R.type !== "gitGraphFileSuggestion"
													);
												},
												get children() {
													const ie = T();
													return (
														ie.addEventListener("click", (ne) => {
															ne.stopPropagation(), R.onRemove?.();
														}),
														ie.style.setProperty("font-size", "10px"),
														ie.style.setProperty("cursor", "pointer"),
														(0, r.effect)(() =>
															(0, d.className)(
																ie,
																g.ThemeIcon.asClassName(n.$ak.close),
															),
														),
														ie
													);
												},
											}),
											(0, u.createComponent)(c.Show, {
												get when() {
													return R.type === "gitGraphFileSuggestion";
												},
												get children() {
													return (0, u.createComponent)(c.Show, {
														get when() {
															return R.keyboardHint;
														},
														get children() {
															const ie = T();
															return (
																ie.style.setProperty(
																	"color",
																	"var(--vscode-editorWarning-foreground)",
																),
																ie.style.setProperty("font-size", "8px"),
																(0, a.insert)(ie, () => R.keyboardHint),
																ie
															);
														},
													});
												},
											}),
										];
									},
									get children() {
										return [
											(() => {
												const ie = I(),
													ne = ie.firstChild;
												return (
													ie.style.setProperty("width", "10px"),
													ie.style.setProperty("height", "10px"),
													ie.style.setProperty("border-radius", "2px"),
													ie.style.setProperty("overflow", "hidden"),
													ie.style.setProperty("display", "flex"),
													ie.style.setProperty("justify-content", "center"),
													ie.style.setProperty("align-items", "center"),
													ne.style.setProperty("width", "100%"),
													ne.style.setProperty("height", "100%"),
													ne.style.setProperty("object-fit", "cover"),
													(0, r.effect)(() =>
														(0, m.setAttribute)(
															ne,
															"src",
															V() ? `${q()}?t=${R.data.loadedAt}` : "",
														),
													),
													ie
												);
											})(),
											(0, u.createComponent)(c.Show, {
												get when() {
													return !R.hideTypeTitle;
												},
												get children() {
													const ie = T();
													return (
														(0, a.insert)(
															ie,
															() => R.secondaryTextOverride || L[R.type],
														),
														ie
													);
												},
											}),
											(0, u.createComponent)(c.Show, {
												get when() {
													return R.onRemove;
												},
												get children() {
													const ie = T();
													return (
														ie.addEventListener("click", (ne) => {
															ne.stopPropagation(), R.onRemove?.();
														}),
														ie.style.setProperty("font-size", "10px"),
														ie.style.setProperty("cursor", "pointer"),
														(0, r.effect)(() =>
															(0, d.className)(
																ie,
																g.ThemeIcon.asClassName(n.$ak.close),
															),
														),
														ie
													);
												},
											}),
										];
									},
								}),
								null,
							),
							(0, a.insert)(
								X,
								(0, u.createComponent)(c.Show, {
									get when() {
										return R.rightElement;
									},
									get children() {
										const ie = T();
										return (
											ie.style.setProperty("display", "flex"),
											ie.style.setProperty("align-items", "center"),
											(0, a.insert)(ie, () => R.rightElement),
											ie
										);
									},
								}),
								null,
							),
							W
						);
					})();
				};
				e.$ibc = N;
				function A({
					position: R = s.HoverPosition.ABOVE,
					delay: O = 300,
				} = {}) {
					const { showHover: B, hideHover: U } = (0, l.$z$b)(O);
					return {
						showHover: (F, x) => {
							B({
								target: F.currentTarget,
								appearance: { compact: !0 },
								content: x,
								position: { hoverPosition: R },
								additionalClasses: ["chat-hover-tooltip"],
							});
						},
						hideHover: U,
					};
				}
			},
		),
		
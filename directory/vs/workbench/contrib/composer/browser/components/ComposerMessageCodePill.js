import '../../../../../../require.js';
import '../../../../../../exports.js';
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
import './ComposerGeneralStatusIndicator.js';
import '../../../controlCommon/browser/solid.js';
import '../../../ui/browser/aiInput/plugins/mentions/pureIcon.js';
import '../constants.js';
import '../../../ui/browser/loadingSpinner/loadingSpinner.js';
import '../hooks/useComposerDataHandle.js';
import '../utils.js';
import '../../../ui/browser/hooks/useIsUsingFileIconTheme.js';
define(
			de[1974],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 13, 14, 54, 26, 565, 36, 156, 169, 295, 177,
				246, 428,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerMessageCodePill = $);
				const s = (0, t.template)("<span>/"),
					l = (0, t.template)("<span>"),
					y = (0, t.template)(
						'<div class="composer-message-code-pill"><span></span><span>',
					);
				function $(v) {
					const S = (0, c.$odc)(),
						{ currentComposer: I } = (0, o.useComposerDataHandle)(
							() => v.composerDataHandle,
						),
						T = (0, m.createMemo)(() => I().composerId),
						P = (0, m.createMemo)(() =>
							v.forceStatus
								? v.forceStatus
								: v.codeBlock.uri
									? (S.composerDataService.getCodeBlockStatus(
											T(),
											v.codeBlock.uri,
											v.codeBlock.version,
										) ?? "none")
									: "none",
						),
						k = (0, m.createMemo)(() =>
							v.codeBlock.uri ? (0, u.$sc)(v.codeBlock.uri.toString()) : "",
						),
						L = (0, m.createMemo)(() =>
							v.codeBlock.uri
								? S.composerDataService.getLatestCodeBlockVersion(
										T(),
										v.codeBlock.uri,
									)
								: 0,
						),
						D = (() => {
							const N = s(),
								A = N.firstChild;
							return (
								N.style.setProperty(
									"color",
									"var(--vscode-input-placeholderForeground)",
								),
								N.style.setProperty("line-height", "120%"),
								N.style.setProperty("font-size", "10px"),
								N.style.setProperty("font-feature-settings", "tnum"),
								N.style.setProperty("font-variant-numeric", "tabular-nums"),
								(0, d.insert)(N, () => v.codeBlock.version + 1, A),
								(0, d.insert)(N, () => L() + 1, null),
								N
							);
						})(),
						M = (0, b.$b$b)();
					return (() => {
						const N = y(),
							A = N.firstChild,
							R = A.nextSibling;
						return (
							N.addEventListener("click", (O) => {
								const B = S.composerDataService.getInlineDiff(
									T(),
									v.codeBlock.uri,
									v.codeBlock.version,
								);
								if (B) {
									const U = B.changes[0];
									(0, f.openCodeSelectionInEditor)(
										{
											uri: B.uri,
											range: {
												selectionStartLineNumber:
													B.currentRange.startLineNumber +
													U.addedRange.startLineNumber -
													1,
												positionLineNumber:
													B.currentRange.startLineNumber +
													U.addedRange.startLineNumber -
													1,
												selectionStartColumn: 1,
												positionColumn: 1,
											},
											text: "",
										},
										S.workspaceContextService,
										S.openerService,
									);
									return;
								}
								(0, f.openFileInEditorIfExists)(
									v.codeBlock.uri,
									S.fileService,
									S.openerService,
									O.altKey,
								);
							}),
							(0, d.insert)(
								N,
								(0, C.createComponent)(m.Show, {
									get when() {
										return M();
									},
									get children() {
										const O = l();
										return (
											O.style.setProperty("margin-right", "-4px"),
											O.style.setProperty("scale", "0.8"),
											O.style.setProperty("height", "14px"),
											O.style.setProperty("display", "flex"),
											O.style.setProperty("align-items", "center"),
											(0, d.insert)(
												O,
												(0, C.createComponent)(n.$k$b, {
													get fileName() {
														return k();
													},
													get workspaceContextService() {
														return S.workspaceContextService;
													},
													get modelService() {
														return S.modelService;
													},
													get languageService() {
														return S.languageService;
													},
												}),
											),
											O
										);
									},
								}),
								A,
							),
							A.style.setProperty("line-height", "120%"),
							A.style.setProperty("font-size", "10px"),
							A.style.setProperty("white-space", "nowrap"),
							A.style.setProperty("overflow", "hidden"),
							A.style.setProperty("text-overflow", "ellipsis"),
							(0, d.insert)(A, k),
							R.style.setProperty("margin-left", "4px"),
							R.style.setProperty("display", "flex"),
							R.style.setProperty("align-items", "center"),
							R.style.setProperty("gap", "4px"),
							(0, d.insert)(
								R,
								(0, C.createComponent)(m.Show, {
									get when() {
										return P() === "generating" || P() === "applying";
									},
									get fallback() {
										return (0, C.createComponent)(m.Show, {
											get when() {
												return P() === "completed" || P() === "accepted";
											},
											get fallback() {
												return [
													D,
													(0, C.createComponent)(
														h.ComposerGeneralStatusIndicator,
														{
															get status() {
																return P();
															},
														},
													),
												];
											},
											get children() {
												return [
													D,
													(0, C.createComponent)(m.Show, {
														get when() {
															return P() === "accepted";
														},
														get fallback() {
															return (0, C.createComponent)(
																h.ComposerGeneralStatusIndicator,
																{ status: "completed" },
															);
														},
														get children() {
															const O = l();
															return (
																O.style.setProperty("font-size", "10px"),
																O.style.setProperty(
																	"color",
																	"var(--vscode-testing-iconPassed)",
																),
																(0, E.effect)(() =>
																	(0, i.className)(
																		O,
																		a.ThemeIcon.asClassName(r.$ak.check),
																	),
																),
																O
															);
														},
													}),
												];
											},
										});
									},
									get children() {
										return [
											(() => {
												const O = l();
												return (
													O.style.setProperty(
														"color",
														"var(--vscode-input-placeholderForeground)",
													),
													O.style.setProperty("font-size", "10px"),
													(0, d.insert)(
														O,
														() => g.composerCodeBlockStatusLabelMap[P()],
													),
													O
												);
											})(),
											(() => {
												const O = l();
												return (
													O.style.setProperty("transform", "scale(0.75)"),
													O.style.setProperty("display", "flex"),
													O.style.setProperty("align-items", "center"),
													O.style.setProperty("justify-content", "center"),
													O.style.setProperty("max-height", "10px"),
													(0, d.insert)(O, (0, C.createComponent)(p.$Z8b, {})),
													O
												);
											})(),
										];
									},
								}),
							),
							(0, E.effect)((O) =>
								(0, w.style)(
									N,
									{
										display: "flex",
										"align-items": "center",
										height: "20px",
										"min-width": "0",
										"padding-left": "2px",
										"padding-right": "4px",
										"border-radius": "4px",
										cursor: "pointer",
										"user-select": "none",
										border:
											"1px solid var(--vscode-commandCenter-inactiveBorder)",
										width: "fit-content",
										margin: "4px 0",
										...v.style,
									},
									O,
								),
							),
							N
						);
					})();
				}
			},
		),
		
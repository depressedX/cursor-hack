import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../../proto/aiserver/v1/composer_pb.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/themables.js';
import '../../../../common/theme.js';
import '../../../aiMarkdown/browser/markdown.js';
import './ComposerToolbarSimpleButton.js';
import '../composerData.js';
import '../hooks/useComposerDataHandle.js';
import '../hooks/useComposerHoverTooltip.js';
import '../../../controlCommon/browser/solid.js';
import '../../../ui/browser/hooks/useThemeHooks.js';
import '../../../ui/browser/loadingSpinner/loadingSpinner.js';
define(
			de[4285],
			he([
				1, 0, 2, 2, 2, 2, 2, 13, 167, 14, 26, 123, 338, 485, 225, 177, 311, 36,
				331, 295,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerMessageToolCallBlock = void 0);
				const s = (0, t.template)("<div>hi"),
					l = (0, t.template)('<span title="Completed">'),
					y = (0, t.template)('<span title="Failed">'),
					$ = (0, t.template)("<pre>"),
					v = (0, t.template)(
						"<div><div><div><span></span><span></span></div><div></div></div><div>",
					),
					S = (I) => {
						const T = (0, o.$odc)(),
							{ showHover: P, hideHover: k } = (0, p.useComposerHoverTooltip)(),
							{
								composerDataHandle: L,
								currentComposer: D,
								updateCurrentComposer: M,
							} = (0, g.useComposerDataHandle)(() => I.composerDataHandle),
							N = (0, f.$h$b)(a.$wGb, T.themeService),
							A = (0, d.createMemo)(() =>
								T.composerDataService.getComposerBubble(
									D().composerId,
									I.bubbleId,
								),
							),
							R = (0, d.createMemo)(() =>
								A()?.capabilityCodeBlocks?.find(
									(q) =>
										q.type === n.ToolCallCodeBlockAlias &&
										q.codeBlockIdx === I.codeBlockIdx,
								),
							),
							O = (0, d.createMemo)(() => (R() ? R().parsedToolCall : null)),
							B = (0, d.createMemo)(() => (O() ? O().type : void 0)),
							U = (0, d.createMemo)(() => {
								if (B()) return n.composerToolCallTypeToIcon[B()];
							}),
							z = (0, d.createMemo)(() =>
								B() ? n.composerToolCallTypeToLabel[B()] : "",
							),
							F = () => {
								const H = D().capabilities.find(
									(q) =>
										q.type ===
										m.ComposerCapabilityRequest_ComposerCapabilityType
											.TOOL_CALL,
								);
								H && H.acceptToolCall(I.bubbleId, I.codeBlockIdx);
							},
							x = () => {
								const H = D().capabilities.find(
									(q) =>
										q.type ===
										m.ComposerCapabilityRequest_ComposerCapabilityType
											.TOOL_CALL,
								);
								H && H.rejectToolCall(I.bubbleId, I.codeBlockIdx);
							};
						return (0, C.createComponent)(d.Show, {
							get when() {
								return R();
							},
							get fallback() {
								return (() => {
									const H = s();
									return H.style.setProperty("display", "none"), H;
								})();
							},
							children: (H) =>
								(() => {
									const q = v(),
										V = q.firstChild,
										G = V.firstChild,
										K = G.firstChild,
										J = K.nextSibling,
										W = G.nextSibling,
										X = V.nextSibling;
									return (
										q.style.setProperty("display", "flex"),
										q.style.setProperty("flex-direction", "column"),
										q.style.setProperty(
											"border",
											"1px solid var(--vscode-commandCenter-inactiveBorder)",
										),
										q.style.setProperty("position", "relative"),
										q.style.setProperty("margin", "4px 0px"),
										V.style.setProperty("display", "flex"),
										V.style.setProperty("align-items", "center"),
										V.style.setProperty("justify-content", "space-between"),
										V.style.setProperty("gap", "6px"),
										V.style.setProperty("max-width", "100%"),
										V.style.setProperty("overflow", "hidden"),
										V.style.setProperty(
											"border-bottom",
											"1px solid var(--vscode-commandCenter-inactiveBorder)",
										),
										V.style.setProperty("position", "sticky"),
										V.style.setProperty("top", "0"),
										V.style.setProperty("z-index", "1"),
										V.style.setProperty("padding", "0px 6px"),
										V.style.setProperty("height", "20px"),
										G.style.setProperty("display", "flex"),
										G.style.setProperty("align-items", "center"),
										G.style.setProperty("gap", "6px"),
										K.style.setProperty("font-size", "14px"),
										J.style.setProperty("line-height", "120%"),
										J.style.setProperty("font-size", "10px"),
										J.style.setProperty("white-space", "nowrap"),
										J.style.setProperty("overflow", "hidden"),
										J.style.setProperty("text-overflow", "ellipsis"),
										(0, E.insert)(J, z),
										W.style.setProperty("display", "flex"),
										W.style.setProperty("gap", "4px"),
										(0, E.insert)(
											W,
											(0, C.createComponent)(d.Show, {
												get when() {
													return H().status === "pending_decision";
												},
												get children() {
													return [
														(0, C.createComponent)(
															c.ComposerToolbarSimpleButton,
															{
																type: "secondary",
																get codicon() {
																	return r.$ak.close;
																},
																onClick: x,
																children: "Reject",
															},
														),
														(0, C.createComponent)(
															c.ComposerToolbarSimpleButton,
															{
																type: "primary",
																get codicon() {
																	return r.$ak.check;
																},
																onClick: F,
																children: "Accept",
															},
														),
													];
												},
											}),
											null,
										),
										(0, E.insert)(
											W,
											(0, C.createComponent)(d.Show, {
												get when() {
													return (
														H().status === "generating" ||
														H().status === "loading"
													);
												},
												get children() {
													return (0, C.createComponent)(b.$Z8b, {});
												},
											}),
											null,
										),
										(0, E.insert)(
											W,
											(0, C.createComponent)(d.Show, {
												get when() {
													return H().status === "completed";
												},
												get children() {
													const Y = l();
													return (
														Y.style.setProperty("font-size", "14px"),
														Y.style.setProperty(
															"color",
															"var(--vscode-testing-iconPassed)",
														),
														(0, w.effect)(() =>
															(0, i.className)(
																Y,
																u.ThemeIcon.asClassName(r.$ak.check),
															),
														),
														Y
													);
												},
											}),
											null,
										),
										(0, E.insert)(
											W,
											(0, C.createComponent)(d.Show, {
												get when() {
													return (
														H().status === "failed" || H().status === "aborted"
													);
												},
												get children() {
													const Y = y();
													return (
														Y.style.setProperty("font-size", "14px"),
														Y.style.setProperty(
															"color",
															"var(--vscode-testing-iconFailed)",
														),
														(0, w.effect)(() =>
															(0, i.className)(
																Y,
																u.ThemeIcon.asClassName(r.$ak.error),
															),
														),
														Y
													);
												},
											}),
											null,
										),
										X.style.setProperty("padding", "0px 12px"),
										X.style.setProperty(
											"background-color",
											"var(--vscode-editor-background)",
										),
										(0, E.insert)(
											X,
											(0, C.createComponent)(d.Switch, {
												get children() {
													return [
														(0, C.createComponent)(d.Match, {
															get when() {
																return (
																	B() ===
																	m.ComposerCapabilityRequest_ToolType.ITERATE
																);
															},
															get children() {
																return (0, C.createComponent)(h.$4$b, {
																	get rawText() {
																		return O().params.instructions;
																	},
																	codeBlockProps: { shouldRecompute: 0 },
																	finished: !0,
																});
															},
														}),
														(0, C.createComponent)(d.Match, {
															when: !0,
															get children() {
																const Y = $();
																return (
																	Y.style.setProperty(
																		"white-space",
																		"pre-wrap",
																	),
																	Y.style.setProperty(
																		"word-break",
																		"break-word",
																	),
																	(0, E.insert)(Y, () =>
																		JSON.stringify(O(), null, 2),
																	),
																	Y
																);
															},
														}),
													];
												},
											}),
										),
										(0, w.effect)(
											(Y) => {
												const ie = N(),
													ne = u.ThemeIcon.asClassName(U() ?? r.$ak.tools);
												return (
													ie !== Y._v$ &&
														((Y._v$ = ie) != null
															? V.style.setProperty("background", ie)
															: V.style.removeProperty("background")),
													ne !== Y._v$2 && (0, i.className)(K, (Y._v$2 = ne)),
													Y
												);
											},
											{ _v$: void 0, _v$2: void 0 },
										),
										q
									);
								})(),
						});
					};
				e.ComposerMessageToolCallBlock = S;
			},
		),
		
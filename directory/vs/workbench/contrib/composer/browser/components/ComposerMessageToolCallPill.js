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
import '../../../ui/browser/loadingSpinner/loadingSpinner.js';
import '../../../../../base/common/themables.js';
import '../../../controlCommon/browser/solid.js';
import '../composerData.js';
import '../../../../../../proto/aiserver/v1/composer_pb.js';
import './ComposerToolbarSimpleButton.js';
import '../../../../../base/common/path.js';
import '../hooks/useComposerHoverTooltip.js';
import '../../../../../base/common/uri.js';
import '../../../ui/browser/aiInput/plugins/mentions/pureIcon.js';
import '../hooks/useComposerDataHandle.js';
import '../../../ui/browser/hooks/useIsUsingFileIconTheme.js';
define(
			de[1379],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 13, 14, 295, 26, 36, 225, 167, 485, 54, 311, 9,
				156, 177, 428,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*web*/,
				i /*web*/,
				w /*web*/,
				E /*web*/,
				C /*web*/,
				d /*web*/,
				m /*solid*/,
				r /*codicons*/,
				u /*loadingSpinner*/,
				a /*themables*/,
				h /*solid*/,
				c /*composerData*/,
				n /*composer_pb*/,
				g /*ComposerToolbarSimpleButton*/,
				p /*path*/,
				o /*useComposerHoverTooltip*/,
				f /*uri*/,
				b /*pureIcon*/,
				s /*useComposerDataHandle*/,
				l /*useIsUsingFileIconTheme*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerMessageToolCallPill = e.ComposerMessageToolCallPillPure =
						void 0);
				const y = (0, t.template)("<span>"),
					$ = (0, t.template)('<span title="Completed">'),
					v = (0, t.template)('<span title="Failed">'),
					S = (0, t.template)(
						'<div><div class="composer-message-code-pill"><span></span><span>',
					),
					I = (0, t.template)("<div>hi"),
					T = (k) => {
						const { showHover: L, hideHover: D } = (0,
							o.useComposerHoverTooltip)(),
							M = (0, h.$odc)(),
							N = {
								width: "14px",
								height: "14px",
								display: "flex",
								"align-items": "center",
								padding: "0px",
								"justify-content": "center",
							},
							A = (0, l.$b$b)();
						return (() => {
							const R = S(),
								O = R.firstChild,
								B = O.firstChild,
								U = B.nextSibling;
							return (
								R.addEventListener("click", () => k.onClick?.()),
								R.style.setProperty("display", "flex"),
								R.style.setProperty("align-items", "center"),
								R.style.setProperty("margin", "4px 0px"),
								R.style.setProperty("gap", "6px"),
								R.style.setProperty("max-width", "100%"),
								R.style.setProperty("overflow", "hidden"),
								(0, d.addEventListener)(O, "mouseleave", D),
								O.addEventListener("mouseenter", (z) => {
									k.toolCallHoverTooltip && L(z, k.toolCallHoverTooltip);
								}),
								O.style.setProperty("display", "flex"),
								O.style.setProperty("align-items", "center"),
								O.style.setProperty("height", "20px"),
								O.style.setProperty("min-width", "0"),
								O.style.setProperty("padding-left", "4px"),
								O.style.setProperty("padding-right", "4px"),
								O.style.setProperty("border-radius", "4px"),
								O.style.setProperty("cursor", "pointer"),
								O.style.setProperty("user-select", "none"),
								O.style.setProperty(
									"border",
									"1px solid var(--vscode-commandCenter-inactiveBorder)",
								),
								(0, E.insert)(
									O,
									(0, C.createComponent)(m.Show, {
										get when() {
											return k.toolCallResource;
										},
										get fallback() {
											return (0, C.createComponent)(m.Show, {
												get when() {
													return k.toolCallIcon;
												},
												children: (z) =>
													(0, C.createComponent)(m.Show, {
														get when() {
															return typeof z() == "string";
														},
														get fallback() {
															return (() => {
																const F = y();
																return (
																	F.style.setProperty("font-size", "12px"),
																	F.style.setProperty("margin-right", "4px"),
																	(0, E.insert)(F, () => z()),
																	F
																);
															})();
														},
														get children() {
															const F = y();
															return (
																F.style.setProperty("font-size", "12px"),
																F.style.setProperty("margin-right", "4px"),
																(0, w.effect)(() =>
																	(0, i.className)(
																		F,
																		a.ThemeIcon.asClassName(z()),
																	),
																),
																F
															);
														},
													}),
											});
										},
										get children() {
											return (0, C.createComponent)(m.Show, {
												get when() {
													return A();
												},
												get children() {
													const z = y();
													return (
														z.style.setProperty("margin-right", "-3px"),
														z.style.setProperty("scale", "0.8"),
														z.style.setProperty("height", "14px"),
														z.style.setProperty("display", "flex"),
														z.style.setProperty("align-items", "center"),
														(0, E.insert)(
															z,
															(0, C.createComponent)(b.$k$b, {
																get fileName() {
																	return k.toolCallResource.toString();
																},
																get workspaceContextService() {
																	return M.workspaceContextService;
																},
																get modelService() {
																	return M.modelService;
																},
																get languageService() {
																	return M.languageService;
																},
															}),
														),
														z
													);
												},
											});
										},
									}),
									B,
								),
								B.style.setProperty("line-height", "120%"),
								B.style.setProperty("font-size", "10px"),
								B.style.setProperty("white-space", "nowrap"),
								B.style.setProperty("overflow", "hidden"),
								B.style.setProperty("text-overflow", "ellipsis"),
								B.style.setProperty("flex-shrink", "0"),
								(0, E.insert)(B, () => k.toolCallLabel),
								U.style.setProperty("display", "flex"),
								U.style.setProperty("align-items", "center"),
								U.style.setProperty("gap", "4px"),
								U.style.setProperty("margin-left", "4px"),
								U.style.setProperty("flex-shrink", "1"),
								U.style.setProperty("min-width", "0"),
								(0, E.insert)(
									U,
									(0, C.createComponent)(m.Show, {
										get when() {
											return k.toolCallSecondaryLabel;
										},
										get children() {
											const z = y();
											return (
												z.style.setProperty(
													"color",
													"var(--vscode-input-placeholderForeground)",
												),
												z.style.setProperty("font-size", "10px"),
												z.style.setProperty("flex-shrink", "1"),
												z.style.setProperty("text-overflow", "ellipsis"),
												z.style.setProperty("overflow", "hidden"),
												z.style.setProperty("white-space", "nowrap"),
												(0, E.insert)(z, () => k.toolCallSecondaryLabel),
												z
											);
										},
									}),
									null,
								),
								(0, E.insert)(
									U,
									(0, C.createComponent)(m.Switch, {
										get children() {
											return [
												(0, C.createComponent)(m.Match, {
													get when() {
														return (
															k.status === "generating" ||
															k.status === "loading"
														);
													},
													get children() {
														const z = y();
														return (
															z.style.setProperty("transform", "scale(0.75)"),
															z.style.setProperty("display", "flex"),
															z.style.setProperty("align-items", "center"),
															z.style.setProperty("justify-content", "center"),
															z.style.setProperty("max-height", "10px"),
															(0, E.insert)(
																z,
																(0, C.createComponent)(u.$Z8b, {}),
															),
															z
														);
													},
												}),
												(0, C.createComponent)(m.Match, {
													get when() {
														return k.status === "completed";
													},
													get children() {
														const z = $();
														return (
															z.style.setProperty("font-size", "10px"),
															z.style.setProperty(
																"color",
																"var(--vscode-testing-iconPassed)",
															),
															(0, w.effect)(() =>
																(0, i.className)(
																	z,
																	a.ThemeIcon.asClassName(r.$ak.check),
																),
															),
															z
														);
													},
												}),
												(0, C.createComponent)(m.Match, {
													get when() {
														return (
															k.status === "failed" || k.status === "aborted"
														);
													},
													get children() {
														const z = v();
														return (
															z.style.setProperty("font-size", "10px"),
															z.style.setProperty(
																"color",
																"var(--vscode-testing-iconFailed)",
															),
															(0, w.effect)(() =>
																(0, i.className)(
																	z,
																	a.ThemeIcon.asClassName(r.$ak.error),
																),
															),
															z
														);
													},
												}),
												(0, C.createComponent)(m.Match, {
													get when() {
														return k.status === "pending_decision";
													},
													get children() {
														const z = y();
														return (
															z.style.setProperty("display", "flex"),
															z.style.setProperty("align-items", "center"),
															z.style.setProperty("gap", "2px"),
															(0, E.insert)(
																z,
																(0, C.createComponent)(
																	g.ComposerToolbarSimpleButton,
																	{
																		type: "secondary",
																		get codicon() {
																			return r.$ak.close;
																		},
																		style: N,
																		onClick: (F) => {
																			F.stopPropagation(), k.onCancel?.();
																		},
																	},
																),
																null,
															),
															(0, E.insert)(
																z,
																(0, C.createComponent)(
																	g.ComposerToolbarSimpleButton,
																	{
																		type: "primary",
																		get codicon() {
																			return r.$ak.check;
																		},
																		style: N,
																		onClick: (F) => {
																			F.stopPropagation(), k.onProceed?.();
																		},
																	},
																),
																null,
															),
															z
														);
													},
												}),
											];
										},
									}),
									null,
								),
								R
							);
						})();
					};
				e.ComposerMessageToolCallPillPure = T;
				const P = (k) => {
					const L = (0, h.$odc)(),
						{
							composerDataHandle: D,
							currentComposer: M,
							updateCurrentComposer: N,
						} = (0, s.useComposerDataHandle)(() => k.composerDataHandle),
						A = (0, m.createMemo)(() =>
							L.composerDataService.getComposerBubble(
								M().composerId,
								k.bubbleId,
							),
						),
						R = (0, m.createMemo)(() =>
							A()?.capabilityCodeBlocks?.find(
								(K) =>
									K.type === c.ToolCallCodeBlockAlias &&
									K.codeBlockIdx === k.codeBlockIdx,
							),
						),
						O = (0, m.createMemo)(() => (R() ? R().parsedToolCall : null)),
						B = (0, m.createMemo)(() => (O() ? O().type : void 0)),
						U = (0, m.createMemo)(() => {
							if (B()) return c.composerToolCallTypeToIcon[B()];
						}),
						z = (0, m.createMemo)(() =>
							B() ? c.composerToolCallTypeToLabel[B()] : "",
						),
						F = (0, m.createMemo)(() => {
							if (!O()) return "";
							const { type: G, params: K } = O();
							switch (G) {
								case n.ComposerCapabilityRequest_ToolType.RUN_TERMINAL_COMMAND:
									return K.command;
								case n.ComposerCapabilityRequest_ToolType.ADD_FILE_TO_CONTEXT:
									return (0, p.$sc)(K.filePath);
								case n.ComposerCapabilityRequest_ToolType.ITERATE:
									return K.instructions;
								case n.ComposerCapabilityRequest_ToolType
									.SEMANTIC_SEARCH_CODEBASE:
									return K.query;
								case n.ComposerCapabilityRequest_ToolType
									.REMOVE_FILE_FROM_CONTEXT:
									return (0, p.$sc)(K.filePath);
								default:
									return "";
							}
						}),
						x = (0, m.createMemo)(() => {
							if (!O()) return "";
							const { type: G, params: K } = O(),
								J = (W) => {
									let X = L.labelService.getUriLabel(f.URI.parse(W), {
										relative: !0,
									});
									return X && X.startsWith("/") && (X = X.slice(1)), X ?? W;
								};
							switch (G) {
								case n.ComposerCapabilityRequest_ToolType.RUN_TERMINAL_COMMAND:
									return K.command;
								case n.ComposerCapabilityRequest_ToolType.ITERATE:
									return K.instructions;
								case n.ComposerCapabilityRequest_ToolType
									.SEMANTIC_SEARCH_CODEBASE:
									return K.query;
								case n.ComposerCapabilityRequest_ToolType.ADD_FILE_TO_CONTEXT:
									return J(K.filePath);
								case n.ComposerCapabilityRequest_ToolType
									.REMOVE_FILE_FROM_CONTEXT:
									return J(K.filePath);
								default:
									return "";
							}
						}),
						H = () => {
							const G = M().capabilities.find(
								(K) =>
									K.type ===
									n.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_CALL,
							);
							G && G.acceptToolCall(k.bubbleId, k.codeBlockIdx);
						},
						q = () => {
							const G = M().capabilities.find(
								(K) =>
									K.type ===
									n.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_CALL,
							);
							G && G.rejectToolCall(k.bubbleId, k.codeBlockIdx);
						},
						V = (0, m.createMemo)(() => {
							if (
								O() &&
								B() === n.ComposerCapabilityRequest_ToolType.ADD_FILE_TO_CONTEXT
							)
								return f.URI.parse(O().params.filePath);
						});
					return (0, C.createComponent)(m.Show, {
						get when() {
							return R();
						},
						get fallback() {
							return (() => {
								const G = I();
								return G.style.setProperty("display", "none"), G;
							})();
						},
						children: (G) =>
							(0, C.createComponent)(m.Show, {
								get when() {
									return B() !== void 0;
								},
								get fallback() {
									return (0, C.createComponent)(m.Show, {
										get when() {
											return (
												G().status === "aborted" || G().status === "failed"
											);
										},
										get fallback() {
											return (0, C.createComponent)(m.Show, {
												get when() {
													return (
														G().status === "generating" ||
														G().status === "loading"
													);
												},
												get fallback() {
													return (() => {
														const K = I();
														return K.style.setProperty("display", "none"), K;
													})();
												},
												get children() {
													return (0, C.createComponent)(
														e.ComposerMessageToolCallPillPure,
														{
															toolCallLabel: "Tool Call",
															status: "generating",
														},
													);
												},
											});
										},
										get children() {
											return (0, C.createComponent)(
												e.ComposerMessageToolCallPillPure,
												{ toolCallLabel: "Tool Call", status: "failed" },
											);
										},
									});
								},
								get children() {
									return (0, C.createComponent)(
										e.ComposerMessageToolCallPillPure,
										{
											get toolCallIcon() {
												return U();
											},
											get toolCallLabel() {
												return z() ?? "Tool Call";
											},
											get toolCallSecondaryLabel() {
												return F();
											},
											get toolCallHoverTooltip() {
												return x();
											},
											get toolCallResource() {
												return V();
											},
											get status() {
												return G().status;
											},
											onClick: () => {
												const K = O();
												if (
													G().status === "completed" &&
													K?.type ===
														n.ComposerCapabilityRequest_ToolType
															.ADD_FILE_TO_CONTEXT
												)
													try {
														const J = K.params.filePath,
															W =
																L.workspaceContextService.resolveRelativePath(
																	J,
																);
														W && L.openerService.open(W);
													} catch (J) {
														console.error(J);
													}
											},
											onCancel: q,
											onProceed: H,
										},
									);
								},
							}),
					});
				};
				e.ComposerMessageToolCallPill = P;
			},
		)

import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../platform/opener/common/opener.js';
import '../../../aiMarkdown/browser/markdown.js';
import '../../../controlCommon/browser/solid.js';
import '../../../ui/browser/collapsible/collapsible.js';
import '../../../ui/browser/contextDisplay/listContextDisplay.js';
import '../../../ui/browser/scrollableDiv.js';
define(
			de[4274],
			he([1, 0, 2, 2, 2, 13, 41, 338, 36, 696, 1070, 135]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*solid*/,
 C /*opener*/,
 d /*markdown*/,
 m /*solid*/,
 r /*collapsible*/,
 u /*listContextDisplay*/,
 a /*scrollableDiv*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerContextStep = c);
				const h = (0, t.template)("<div>");
				function c(p) {
					const [o, f] = (0, E.createSignal)(void 0),
						b = (0, E.createMemo)(() => o() ?? p.defaultExpanded);
					(0, E.createEffect)(() => {
						o() === void 0 && !p.isStepGenerating && f(!1);
					});
					const s = (0, E.createMemo)(() =>
						p.step.type === "gathering" || p.step.type === "reranking"
							? p.step.files.length > 0
							: !0,
					);
					return (0, w.createComponent)(E.Show, {
						get when() {
							return s();
						},
						get children() {
							const l = h();
							return (
								l.style.setProperty("padding-top", "10px"),
								l.style.setProperty("display", "flex"),
								l.style.setProperty("flex-direction", "column"),
								l.style.setProperty("gap", "6px"),
								(0, i.insert)(
									l,
									(0, w.createComponent)(E.Switch, {
										get children() {
											return [
												(0, w.createComponent)(E.Match, {
													get when() {
														return (
															p.step.type === "gathering" ||
															p.step.type === "reranking"
														);
													},
													get children() {
														return (0, w.createComponent)(n, {
															get step() {
																return p.step;
															},
															get isOpen() {
																return b();
															},
															setIsOpen: f,
															get isLoading() {
																return p.isStepGenerating;
															},
														});
													},
												}),
												(0, w.createComponent)(E.Match, {
													get when() {
														return p.step.type === "reasoning";
													},
													get children() {
														return (0, w.createComponent)(g, {
															get step() {
																return p.step;
															},
															get isOpen() {
																return b();
															},
															setIsOpen: f,
															get isLoading() {
																return p.isStepGenerating;
															},
														});
													},
												}),
											];
										},
									}),
								),
								l
							);
						},
					});
				}
				function n(p) {
					const o = (0, m.$odc)(),
						f = (0, E.createMemo)(() =>
							p.step.files.map((b) => ({
								uri: o.workspaceContextService.resolveRelativePath(
									b.relativeWorkspacePath ?? "",
								),
								score: b.score,
								selection: b.range && {
									startLineNumber: b.range.startLineNumber,
									endLineNumber: b.range.endLineNumberInclusive,
									startColumn: b.range.startColumn,
									endColumn: b.range.endColumn,
								},
								onClick: (s) => {
									const l = (0, C.$8rb)(
										s.uri,
										s.selection ?? {
											startLineNumber: 1,
											startColumn: 1,
											endLineNumber: 1,
											endColumn: 1,
										},
									);
									o.openerService.open(l);
								},
							})),
						);
					return (0, w.createComponent)(r.$Zcc, {
						get isOpen() {
							return p.isOpen;
						},
						get setIsOpen() {
							return p.setIsOpen;
						},
						get title() {
							return p.step.data.title.replace(/...$/, "");
						},
						get isLoading() {
							return p.isLoading;
						},
						get children() {
							const b = h();
							return (
								b.style.setProperty("height", "200px"),
								(0, i.insert)(
									b,
									(0, w.createComponent)(a.$w0b, {
										style: { height: "100%" },
										scrollingDirection: "vertical",
										get children() {
											return (0, w.createComponent)(u.$1cc, {
												get files() {
													return f();
												},
												variant: "compact",
											});
										},
									}),
								),
								b
							);
						},
					});
				}
				function g(p) {
					return (0, w.createComponent)(r.$Zcc, {
						get isOpen() {
							return p.isOpen;
						},
						get setIsOpen() {
							return p.setIsOpen;
						},
						get title() {
							return p.step.data.title.replace(/...$/, "");
						},
						get isLoading() {
							return p.isLoading;
						},
						get children() {
							const o = h();
							return (
								o.style.setProperty("height", "300px"),
								(0, i.insert)(
									o,
									(0, w.createComponent)(a.$w0b, {
										style: { height: "100%", padding: "8px" },
										scrollingDirection: "vertical",
										nonReactiveElementOptions: {
											useShadows: !1,
											verticalScrollbarSize: 6,
										},
										get children() {
											return (0, w.createComponent)(E.For, {
												get each() {
													return p.step.substeps;
												},
												children: (f) =>
													(() => {
														const b = h();
														return (
															b.style.setProperty("padding-bottom", "10px"),
															(0, i.insert)(
																b,
																(0, w.createComponent)(d.$4$b, {
																	get rawText() {
																		return f.markdownExplanation;
																	},
																	finished: !0,
																	codeBlockProps: { shouldRecompute: 0 },
																}),
															),
															b
														);
													})(),
											});
										},
									}),
								),
								o
							);
						},
					});
				}
			},
		)

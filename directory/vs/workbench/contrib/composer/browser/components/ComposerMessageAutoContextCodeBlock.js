import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../controlCommon/browser/solid.js';
import '../composerData.js';
import '../../../../../base/common/codicons.js';
import './ComposerMessageToolCallPill.js';
import './ComposerReferenceComponents.js';
import '../../../../../base/common/uri.js';
import '../hooks/useComposerDataHandle.js';
define(
			de[4286],
			he([1, 0, 2, 2, 2, 2, 13, 36, 225, 14, 1379, 1975, 9, 177]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerMessageAutoContextCodeBlock = void 0);
				const n = (0, t.template)("<div>hi"),
					g = (0, t.template)("<div>"),
					p = (o) => {
						const f = (0, d.$odc)(),
							{ composerDataService: b } = f,
							{
								composerDataHandle: s,
								currentComposer: l,
								updateCurrentComposer: y,
							} = (0, c.useComposerDataHandle)(() => o.composerDataHandle),
							$ = (0, C.createMemo)(() => {
								const v = l();
								if (!v) return null;
								const S = v.conversation.find((T) => T.bubbleId === o.bubbleId);
								return S
									? S.capabilityCodeBlocks?.find(
											(T) =>
												T.type === m.AutoContextCodeBlockAlias &&
												T.codeBlockIdx === o.codeBlockIdx,
										)
									: null;
							});
						return (0, E.createComponent)(C.Show, {
							get when() {
								return $();
							},
							get fallback() {
								return (() => {
									const v = n();
									return v.style.setProperty("display", "none"), v;
								})();
							},
							children: (v) =>
								(0, E.createComponent)(C.Show, {
									get when() {
										return (
											(0, w.memo)(() => v().status !== "generating")() &&
											v().status !== "loading"
										);
									},
									get fallback() {
										return (0, E.createComponent)(
											u.ComposerMessageToolCallPillPure,
											{
												get toolCallIcon() {
													return r.$ak.files;
												},
												toolCallLabel: "Context Picking",
												get status() {
													return v().status ?? "generating";
												},
											},
										);
									},
									get children() {
										const S = g();
										return (
											S.style.setProperty("display", "flex"),
											S.style.setProperty("align-items", "center"),
											S.style.setProperty("flex-wrap", "wrap"),
											S.style.setProperty("margin-bottom", "4px"),
											S.style.setProperty("gap", "4px"),
											(0, i.insert)(
												S,
												(0, E.createComponent)(C.Show, {
													get when() {
														return v().parsedAutoContext;
													},
													get children() {
														return (0, E.createComponent)(C.For, {
															get each() {
																return v().parsedAutoContext;
															},
															children: (I) =>
																(0, E.createComponent)(
																	a.ComposerCodeReferenceComponent,
																	{
																		get relativePath() {
																			return f.workspaceContextService.asRelativePath(
																				h.URI.revive(I),
																			);
																		},
																	},
																),
														});
													},
												}),
											),
											S
										);
									},
								}),
						});
					};
				e.ComposerMessageAutoContextCodeBlock = p;
			},
		),
		
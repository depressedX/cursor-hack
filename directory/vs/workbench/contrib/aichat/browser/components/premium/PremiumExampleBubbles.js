import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/solid.js';
import '../../../../../../../external/solid/web.js';
import '../../../../ui/browser/simpleButton/simpleButton.js';
import '../../../../controlCommon/browser/solid.js';
import '../../../../../../css!vs/workbench/contrib/aichat/browser/components/premium/PremiumUserBubble.js';
define(
			de[4248],
			he([1, 0, 2, 2, 2, 13, 2, 147, 36, 1521]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*solid*/,
 C /*web*/,
 d /*simpleButton*/,
 m /*solid*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$bcc = void 0);
				const r = (0, t.template)("<div>"),
					u = (a) => {
						const h = (0, m.$odc)(),
							c = (0, E.createMemo)(() => {
								const n = [
									{ v: "Is there a bug here?", type: "normal" },
									{ v: "Explain this code", type: "normal" },
									{ v: "How do I build a rust CLI?", type: "normal" },
								];
								return (
									h.reactiveStorageService.workspaceUserPersistentStorage
										.exampleCodebaseQuestions !== void 0 &&
										h.reactiveStorageService.workspaceUserPersistentStorage
											.exampleCodebaseQuestions.length > 0 &&
										n.push(
											...h.reactiveStorageService.workspaceUserPersistentStorage.exampleCodebaseQuestions.map(
												(g) => ({ v: g, type: "codebase" }),
											),
										),
									n.slice(-3)
								);
							});
						return (() => {
							const n = r();
							return (
								n.style.setProperty("margin", "32px auto 16px auto"),
								n.style.setProperty("text-align", "center"),
								n.style.setProperty("z-index", "1"),
								n.style.setProperty("display", "flex"),
								n.style.setProperty("flex-wrap", "wrap"),
								n.style.setProperty("gap", "12px 8px"),
								n.style.setProperty("justify-content", "center"),
								(0, i.insert)(
									n,
									(0, w.createComponent)(C.For, {
										get each() {
											return c();
										},
										children: (g) =>
											(() => {
												const p = r();
												return (
													p.style.setProperty("display", "inline-block"),
													(0, i.insert)(
														p,
														(0, w.createComponent)(d.$rdc, {
															get title() {
																return g.v;
															},
															get type() {
																return g.type === "codebase", "tertiary";
															},
															extras: { style: { "max-width": "400px" } },
															onClick: () => {
																h.markerDecorationsService.callInsertIntoChatCallback(
																	{
																		message:
																			g.type === "codebase" ? " " + g.v : g.v,
																		editorUri: "",
																		preserveSelection: !0,
																		includeCurrentFile: !0,
																		isCodebaseContext: g.type === "codebase",
																	},
																);
															},
														}),
													),
													p
												);
											})(),
									}),
								),
								n
							);
						})();
					};
				e.$bcc = u;
			},
		),
		
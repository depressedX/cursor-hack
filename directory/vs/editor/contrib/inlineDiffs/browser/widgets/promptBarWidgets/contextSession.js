import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/solid.js';
import '../../../../../../base/common/resources.js';
import '../../../../../../workbench/contrib/controlCommon/browser/solid.js';
import '../../../../../../base/common/cancellation.js';
import '../../../../../../workbench/contrib/ui/browser/scrollableDiv.js';
define(
			de[4195],
			he([1, 0, 2, 2, 2, 2, 13, 19, 36, 33, 135]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Fdc = g);
				const a = (0, t.template)("<div>Context shown to model"),
					h = (0, t.template)("<div>"),
					c = (0, t.template)("<div><span></span><br><br>"),
					n = (0, t.template)("<div>NONE<br>");
				function g(p) {
					const o = (0, m.$odc)(),
						f = (0, C.createMemo)(() =>
							p.contextSessionUuid
								? o.aiContextSessionService.getReactiveReadonlyContextSession(
										p.contextSessionUuid,
									)
								: null,
						),
						[b, s] = (0, C.createSignal)({});
					return (
						(0, C.createEffect)(() => {
							(async () => {
								const y = f();
								if (!y) return;
								const $ = {};
								for (const v of y.intents) {
									if (
										v.intent.intent.case !== "codeSelection" &&
										v.intent.intent.case !== "file"
									)
										continue;
									const S = v.intent.intent,
										I = o.workspaceContextService.resolveRelativePath(
											S.value.relativeWorkspacePath,
										),
										T = await o.textModelService.createModelReference(I);
									let P;
									if (S.case === "file") P = T.object.textEditorModel;
									else {
										const A = T.object.textEditorModel.getLanguageId(),
											R = o.languageService.createById(A);
										P = o.modelService.createModel(
											S.value.text
												.split(`
`)
												.slice(1, -1)
												.join(`
`),
											R,
										);
									}
									const L = new r.$Ce().token,
										M = (
											await o.outlineService.getOrCreate(P, L)
										).getTopLevelSymbols();
									let N;
									S.case === "file"
										? (N = `@${(0, d.$kh)(I)}`)
										: (N = `@${M[0].name}`),
										($[N] = []);
									for (const A of v.items.filter(
										(R) => R.status?.shownToTheModel === !0,
									)) {
										const R = A.item.item.value;
										M.forEach((O) => {
											R.chunkContents.includes(O.name) &&
												!$[N].includes(O.name) &&
												$[N].push(O.name);
										});
									}
								}
								s($);
							})().catch((y) => console.error(y));
						}),
						(0, E.createComponent)(u.$w0b, {
							get style() {
								return {
									width: "400px",
									"background-color": "var(--vscode-editor-background)",
									border: "1px solid var(--vscode-commandCenter-activeBorder)",
									position: "absolute",
									left: `${p.leftOffset + 15}px`,
									bottom: `${p.contentHeight + 40}px`,
									"z-index": 1000002,
									height: `${Object.entries(b()).length * 40 + Object.entries(b()).flatMap((l) => l[1]).length * 25 + 40}px`,
									"max-height": `${p.containerHeight - 100}px`,
									"min-height": "300px",
								};
							},
							get children() {
								return [
									(() => {
										const l = a();
										return (
											l.style.setProperty("width", "392px"),
											l.style.setProperty("padding", "2px 4px 2px 4px"),
											l.style.setProperty(
												"border-bottom",
												"1px solid var(--vscode-commandCenter-activeBorder)",
											),
											l.style.setProperty("font-size", "0.8em"),
											l
										);
									})(),
									(() => {
										const l = h();
										return (
											l.style.setProperty("padding", "8px"),
											(0, w.insert)(
												l,
												(0, E.createComponent)(C.For, {
													get each() {
														return Object.entries(b());
													},
													children: ([y, $]) =>
														(() => {
															const v = c(),
																S = v.firstChild,
																I = S.nextSibling,
																T = I.nextSibling;
															return (
																S.style.setProperty("padding", "2px"),
																S.style.setProperty("padding-left", "4px"),
																S.style.setProperty("padding-right", "4px"),
																S.style.setProperty("border-radius", "4px"),
																S.style.setProperty(
																	"background-color",
																	"rgba(24, 119, 232, 0.2)",
																),
																(0, w.insert)(S, y),
																(0, w.insert)(
																	v,
																	(0, E.createComponent)(C.For, {
																		each: $,
																		children: (P) =>
																			(() => {
																				const k = h();
																				return (0, w.insert)(k, P), k;
																			})(),
																	}),
																	T,
																),
																(0, w.insert)(
																	v,
																	(() => {
																		const P = (0, i.memo)(() => $.length === 0);
																		return () => P() && n();
																	})(),
																	T,
																),
																v
															);
														})(),
												}),
											),
											l
										);
									})(),
								];
							},
						})
					);
				}
			},
		),
		
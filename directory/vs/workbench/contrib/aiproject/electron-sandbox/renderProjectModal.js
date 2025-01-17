import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/solid.js';
import '../../ui/browser/cardModal/cardModal.js';
import '../../ui/browser/expandingTextArea/expandingTextArea.js';
import '../../ui/browser/optionSection/optionSection.js';
import '../../ui/browser/simpleButton/simpleButton.js';
import '../../ui/browser/inlineTextArea/inlineTextArea.js';
import '../../../../base/common/uri.js';
import '../../controlCommon/browser/solid.js';
import './utils.js';
import '../../../../base/common/codicons.js';
define(
			de[4322],
			he([1, 0, 2, 2, 2, 13, 4321, 3196, 3206, 147, 695, 9, 36, 1716, 14]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$yfd = l);
				const g = (0, t.template)(
						`<div class="ai-project-desc-card"><div>What do you want to build?</div><div>Prompt the AI with a description of what you'd like to create</div><div>`,
					),
					p = (0, t.template)("<div>"),
					o = (0, t.template)('<div class="ai-project-location-card">'),
					f = (y) =>
						(() => {
							const $ = g(),
								v = $.firstChild,
								S = v.nextSibling,
								I = S.nextSibling;
							return (
								v.style.setProperty("font-size", "16px"),
								v.style.setProperty("margin-bottom", "8px"),
								v.style.setProperty("color", "var(--vscode-foreground)"),
								S.style.setProperty("font-size", "12px"),
								S.style.setProperty(
									"color",
									"var(--vscode-input-placeholderForeground)",
								),
								S.style.setProperty("margin-bottom", "16px"),
								I.style.setProperty("padding", "12px"),
								I.style.setProperty("margin-top", "16px"),
								I.style.setProperty(
									"background-color",
									"var(--vscode-sideBar-background)",
								),
								I.style.setProperty("margin-bottom", "24px"),
								I.style.setProperty("overflow-y", "auto"),
								I.style.setProperty("overflow-x", "hidden"),
								I.style.setProperty("max-height", "400px"),
								(0, i.insert)(
									I,
									(0, w.createComponent)(d.$wfd, {
										placeholder:
											"E.g. Build me a multiplayer game of tictactoe using express and React",
										get defaultValue() {
											return y.defaultValue;
										},
										defaultRows: 3,
										onInput: (T) => {
											y.updateDescription(T.target.value);
										},
									}),
								),
								$
							);
						})(),
					b = (y) => {
						const [$, v] = (0, E.createSignal)(null),
							S = async () => {
								const I = await y.pickFolder();
								console.log("path", I),
									console.log("inputRef", $),
									I != null &&
										(console.log("setting value"),
										($().value = I),
										y.setParentDir(I));
							};
						return (() => {
							const I = o();
							return (
								(0, i.insert)(
									I,
									(0, w.createComponent)(m.$xfd, {
										title: "Parent Folder",
										subtitle:
											"Your project will be created as a subdirectory of the parent",
										get children() {
											return (0, w.createComponent)(u.$gDc, {
												get textArea() {
													return (0, w.createComponent)(u.$fDc, {
														get extras() {
															return {
																value: y.parentDir(),
																onInput: (T) => {
																	y.setParentDir(T.target.value);
																},
																ref: v,
															};
														},
													});
												},
												get button() {
													return (0, w.createComponent)(r.$rdc, {
														get codicon() {
															return n.$ak.folder;
														},
														type: "secondary",
														onClick: S,
													});
												},
											});
										},
									}),
									null,
								),
								(0, i.insert)(
									I,
									(0, w.createComponent)(m.$xfd, {
										title: "Project Name",
										subtitle:
											"This will be the name of the folder for your new project",
										get children() {
											return [
												(0, w.createComponent)(E.Show, {
													get when() {
														return y.rejected;
													},
													get children() {
														const T = p();
														return (
															T.style.setProperty("font-size", "12px"),
															T.style.setProperty("color", "#f00"),
															T.style.setProperty("margin-bottom", "8px"),
															(0, i.insert)(
																T,
																() =>
																	`The folder ${y.projectName()} already exists in ${y.parentDir()}. Please choose a different name.`,
															),
															T
														);
													},
												}),
												(0, w.createComponent)(u.$fDc, {
													get extras() {
														return {
															default: "cursor-ai-project",
															value: y.projectName(),
															onInput: (T) => {
																y.setProjectName(T.target.value);
															},
														};
													},
												}),
											];
										},
									}),
									null,
								),
								I
							);
						})();
					},
					s = (y) => {
						const [$, v] = (0, E.createSignal)("");
						(0, E.createEffect)(() => {
							v(y.homeDir);
						});
						const [S, I] = (0, E.createSignal)("cursor-ai-project"),
							[T, P] = (0, E.createSignal)(void 0),
							[k, L] = (0, E.createSignal)(!1),
							D = (0, h.$odc)(),
							M = async () => {
								D.telemetryService.publicLogCapture("submitted.aiproject");
								const N = a.URI.joinPath(a.URI.file($()), S());
								if (await D.fileService.exists(N)) {
									L(!0);
									return;
								}
								await D.fileService.createFolder(N),
									await new Promise((A) => setTimeout(A, 200)),
									(0, c.$jed)(N, T(), D.storageService),
									await new Promise((A) => setTimeout(A, 200)),
									await D.hostService.openWindow([{ folderUri: N }], {
										forceNewWindow: !1,
									}),
									y.close();
							};
						return (
							(0, E.createEffect)(() => {
								D.telemetryService.publicLogCapture("viewed.aiproject.modal");
							}),
							(0, w.createComponent)(C.$vfd, {
								disableClickOff: !0,
								get closeModal() {
									return y.close;
								},
								submitModal: M,
								get children() {
									return [
										(0, w.createComponent)(f, {
											updateDescription: P,
											get defaultValue() {
												return T();
											},
										}),
										(0, w.createComponent)(b, {
											get rejected() {
												return k();
											},
											get homeDir() {
												return y.homeDir;
											},
											get pickFolder() {
												return y.pickFolder;
											},
											parentDir: $,
											projectName: S,
											setParentDir: (N) => {
												L(!1), v(N);
											},
											setProjectName: (N) => {
												L(!1), I(N);
											},
										}),
									];
								},
							})
						);
					};
				function l({
					container: y,
					homeDir: $,
					onClose: v,
					pickFolder: S,
					instantiationService: I,
				}) {
					return (0, h.$ndc)(
						() =>
							(0, w.createComponent)(s, {
								close: () => {
									console.log("CLOSED HERE"), v();
								},
								homeDir: $,
								pickFolder: S,
							}),
						y,
						I,
					);
				}
			},
		),
		
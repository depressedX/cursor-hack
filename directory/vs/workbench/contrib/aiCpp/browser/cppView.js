define(
			de[1977],
			he([1, 0, 2, 2, 2, 13, 75, 58, 270, 973, 4186, 1064, 36, 564, 1371]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$_Cc =
						e.$$Cc =
						e.$0Cc =
						e.$9Cc =
						e.$8Cc =
						e.$7Cc =
						e.$6Cc =
						e.$5Cc =
						e.$4Cc =
						e.$3Cc =
						e.$2Cc =
						e.$1Cc =
						e.$ZCc =
							void 0),
					(e.$aDc = f);
				const g = (0, t.template)(
						"<div>Note: We've temporarily turned off cpp.",
					),
					p = (0, t.template)(
						"<div>Note: We've temporarily turned off auto imports.",
					);
				let o = !1;
				(e.$ZCc = [
					"inline-with-removal-before",
					"inline-with-removal-right",
					"inline-with-removal-below",
					"inline-hide-removal",
					"everything-right",
					"legacy-ghost-text",
				]),
					(e.$1Cc = e.$ZCc[0]),
					(e.$2Cc = [
						"Alt",
						"Control",
						"AltRight",
						"MetaRight",
						"ShiftRight",
						"ControlRight",
						"ControlLeft",
						"MetaLeft",
						"AltLeft",
						"ShiftLeft",
					]),
					(e.$3Cc = "Alt"),
					(e.$4Cc = "green"),
					(e.$5Cc = "streaming"),
					(e.$6Cc = !0),
					(e.$7Cc = !1),
					(e.$8Cc = !1),
					(e.$9Cc = !1),
					(e.$0Cc = 5),
					(e.$$Cc = 1),
					(e.$_Cc = 50);
				function f() {
					const b = (0, h.$odc)(),
						s = () =>
							b.reactiveStorageService.applicationUserPersistentStorage
								.cppModelsState,
						l = (0, E.createMemo)(() => s().cppModels),
						y = [
							...(b.reactiveStorageService.applicationUserPersistentStorage
								.cppConfig?.isOn === !1
								? []
								: [{ id: "enabled", label: "enabled" }]),
							{ id: "disabled", label: "disabled" },
						],
						$ = (L) => {
							b.telemetryService.publicLogCapture(
								L ? "cpp.clicked.enabled" : "cpp.clicked.disabled",
							),
								b.reactiveStorageService.setApplicationUserPersistentStorage(
									"cppEnabled",
									L,
								);
						};
					(0, E.createEffect)(() => {
						const L = C.$Bfb.setInterval(() => {
							b.cppService.keepCppModelStateUpdated();
						}, 3e4);
						b.cppService.keepCppModelStateUpdated(),
							(0, E.onCleanup)(() => C.$Bfb.clearInterval(L));
					});
					const v = (0, E.createMemo)(() =>
							l().map((L) => ({ id: L, label: L })),
						),
						[S, I] = (0, m.$K0b)(d.$zW, b.configurationService, !1),
						T = (0, E.createMemo)(
							() => !(l().filter((L) => L !== "auto").length <= 1),
						),
						P = b.reactiveStorageService.applicationUserPersistentStorage
							.cppConfig?.importPredictionConfig?.pythonEnabled
							? "TypeScript and Python"
							: "TypeScript",
						k = (0, E.createMemo)(
							() =>
								b.reactiveStorageService.applicationUserPersistentStorage
									.cppAutoImportEnabled &&
								!b.reactiveStorageService.applicationUserPersistentStorage
									.cppConfig?.importPredictionConfig?.pythonEnabled,
						);
					return (0, w.createComponent)(r.$VCc, {
						title: "Cursor Tab",
						get children() {
							return [
								(0, w.createComponent)(a.$YCc, {
									description:
										"A powerful Copilot replacement that can suggest changes across multiple lines. Previously called Copilot++.",
									get value() {
										return b.reactiveStorageService
											.applicationUserPersistentStorage.cppEnabled;
									},
									onChange: (L) => {
										$(L);
									},
								}),
								(0, w.createComponent)(E.Show, {
									get when() {
										return (
											b.reactiveStorageService.applicationUserPersistentStorage
												.cppConfig?.isOn === !1
										);
									},
									get children() {
										const L = g();
										return (
											L.style.setProperty("padding-top", "12px"),
											L.style.setProperty("padding-left", "16px"),
											L
										);
									},
								}),
								(0, w.createComponent)(E.Show, {
									get when() {
										return b.reactiveStorageService
											.applicationUserPersistentStorage.cppEnabled;
									},
									get children() {
										return [
											(0, w.createComponent)(E.Show, {
												get when() {
													return T();
												},
												get children() {
													return (0, w.createComponent)(u.$WCc, {
														label: "Model",
														description:
															"Choose the model you want to use for Cursor Tab.",
														get items() {
															return [{ id: d.$RX, label: d.$RX }, ...v()];
														},
														get value() {
															return (
																l().find(
																	(L) =>
																		L ===
																		b.reactiveStorageService
																			.applicationUserPersistentStorage
																			.cppModel,
																) ?? d.$RX
															);
														},
														onChange: (L) =>
															b.reactiveStorageService.setApplicationUserPersistentStorage(
																{ cppModel: L === d.$RX ? void 0 : L },
															),
													});
												},
											}),
											(0, w.createComponent)(a.$YCc, {
												label: "Partial accepts",
												get description() {
													return `Accept the next word of a suggestion via ${b.keybindingService.lookupKeybinding("editor.action.inlineSuggest.acceptNextWord")?.getLabel() ?? "Alt+]"}`;
												},
												get value() {
													return S();
												},
												onChange: I,
												get labelExtra() {
													return (0, w.createComponent)(n.$m$b, {
														text: "Keybinding: editor.action.inlineSuggest.acceptNextWord",
														style: {
															"font-size": "10px",
															"margin-left": "4px",
															color: "var(--vscode-descriptionForeground)",
														},
														parentStyle: {
															display: "flex",
															"align-items": "center",
															"justify-content": "center",
														},
													});
												},
											}),
											(0, w.createComponent)(a.$YCc, {
												label: "Cursor Prediction",
												description:
													"Predicts the next line you will move to after accepting a Cursor Tab suggestion and can be accepted by tab. Allows you to tab-tab-tab through edits",
												get value() {
													return (
														b.reactiveStorageService
															.applicationUserPersistentStorage
															.cursorPredictionEnabled !== !1 &&
														b.reactiveStorageService
															.applicationUserPersistentStorage
															.cursorPredictionState?.backendEnabled !== !1
													);
												},
												onChange: (L) =>
													b.reactiveStorageService.setApplicationUserPersistentStorage(
														"cursorPredictionEnabled",
														L,
													),
											}),
											(0, w.createComponent)(a.$YCc, {
												label: "Suggestions in Comments",
												description:
													"Enable or disable Cursor Tab suggestions in comments",
												get value() {
													return b.reactiveStorageService
														.applicationUserPersistentStorage
														.cppTriggerInComments;
												},
												onChange: (L) =>
													b.reactiveStorageService.setApplicationUserPersistentStorage(
														"cppTriggerInComments",
														L,
													),
											}),
											(0, w.createComponent)(a.$YCc, {
												label: "Show whitespace only changes",
												description:
													"Show whitespace only Cursor Tab suggestions",
												get value() {
													return b.reactiveStorageService
														.applicationUserPersistentStorage
														.cppShowWhitespaceOnlyChanges;
												},
												onChange: (L) =>
													b.reactiveStorageService.setApplicationUserPersistentStorage(
														"cppShowWhitespaceOnlyChanges",
														L,
													),
											}),
											(0, w.createComponent)(E.Show, {
												get when() {
													return !(
														b.reactiveStorageService
															.applicationUserPersistentStorage
															.backendHasDisabledCppAutoImport &&
														b.reactiveStorageService
															.applicationUserPersistentStorage
															.cppAutoImportEnabled === void 0
													);
												},
												get children() {
													return (0, w.createComponent)(a.$YCc, {
														label: "Auto Import",
														description: `Tab to import necessary modules with Cursor Tab. Only supports ${P}`,
														get value() {
															return (
																b.reactiveStorageService
																	.applicationUserPersistentStorage
																	.cppAutoImportEnabled ?? !1
															);
														},
														onChange: (L) => {
															L || b.importPredictionService.hideShownImport(),
																b.reactiveStorageService.setApplicationUserPersistentStorage(
																	"cppAutoImportEnabled",
																	L,
																);
														},
														get children() {
															return (
																(0, i.memo)(
																	() =>
																		!!(
																			k() ||
																			b.reactiveStorageService
																				.applicationUserPersistentStorage
																				.backendHasDisabledCppAutoImport
																		),
																)() && [
																	(0, w.createComponent)(E.Show, {
																		get when() {
																			return k();
																		},
																		get children() {
																			return (0, w.createComponent)(a.$YCc, {
																				get label() {
																					return [
																						"Auto Import for Python",
																						" ",
																						(0, w.createComponent)(c.$nac, {
																							type: "subtle",
																							text: "BETA",
																							size: "small",
																						}),
																					];
																				},
																				description:
																					"Enable auto import for Python. This is a beta feature.",
																				get value() {
																					return (
																						b.reactiveStorageService
																							.applicationUserPersistentStorage
																							.userHasEnabledImportPredictionForPython ??
																						!1
																					);
																				},
																				onChange: (L) =>
																					b.reactiveStorageService.setApplicationUserPersistentStorage(
																						"userHasEnabledImportPredictionForPython",
																						L,
																					),
																			});
																		},
																	}),
																	(0, w.createComponent)(E.Show, {
																		get when() {
																			return b.reactiveStorageService
																				.applicationUserPersistentStorage
																				.backendHasDisabledCppAutoImport;
																		},
																		get children() {
																			const L = p();
																			return (
																				L.style.setProperty(
																					"padding-top",
																					"12px",
																				),
																				L.style.setProperty(
																					"padding-left",
																					"16px",
																				),
																				L
																			);
																		},
																	}),
																]
															);
														},
													});
												},
											}),
										];
									},
								}),
							];
						},
					});
				}
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	
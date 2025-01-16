define(
		de[4350],
		he([
			1, 0, 2, 2, 2, 13, 14, 36, 167, 58, 12, 270, 1977, 4334, 1376, 973, 1231,
			1064, 974, 262, 564, 1371, 147, 695, 4349, 523,
		]),
		function (
			ce,
			e,
			t,
			i,
			w,
			E,
			C,
			d,
			m,
			r,
			u,
			a,
			h,
			c,
			n,
			g,
			p,
			o,
			f,
			b,
			s,
			l,
			y,
			$,
			v,
			S,
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$iDc = M),
				($ = xi($));
			const I = (0, t.template)("<div>"),
				T = (0, t.template)(
					'<div>No docs added yet... Type "@Add" in a chat or in an edit to start a doc.',
				),
				P = (0, t.template)("<div>Normal composer iterate on lints "),
				k = (0, t.template)("<div>Auto context "),
				L = (0, t.template)("<div>Review changes "),
				D = (0, t.template)("<span>cloud");
			function M(N) {
				const A = (0, d.$odc)(),
					[R, O] = (0, a.$K0b)(r.$nW, A.configurationService, !1),
					[B, U] = (0, a.$K0b)(r.$lW, A.configurationService, !1),
					[z, F] = (0, a.$K0b)(r.$oW, A.configurationService, !1),
					[x, H] = (0, a.$K0b)(r.$wW, A.configurationService, !1),
					[q, V] = (0, a.$K0b)(r.$xW, A.configurationService, r.$yW),
					[G, K] = (0, a.$K0b)(r.$rW, A.configurationService, !0),
					[J, W] = (0, a.$K0b)(r.$mW, A.configurationService, !0),
					[X, Y] = (0, a.$K0b)(r.$sW, A.configurationService, !0),
					[ie, ne] = (0, a.$K0b)(r.$tW, A.configurationService, !1),
					[ee, _] = (0, a.$K0b)(r.$uW, A.configurationService, !1),
					[te, Q] = (0, a.$K0b)(r.$kW, A.configurationService, !0),
					[Z, se] = (0, a.$K0b)(r.$BW, A.configurationService, !0),
					[re, le] = (0, a.$K0b)(r.$CW, A.configurationService, !1),
					[oe, ae] = (0, a.$K0b)(r.$DW, A.configurationService, !0),
					[pe, $e] = (0, a.$K0b)(r.$EW, A.configurationService, !1),
					[ye, ue] = (0, a.$K0b)(r.$FW, A.configurationService, !1),
					[fe, me] = (0, a.$K0b)(r.$GW, A.configurationService, !0),
					[ve, ge] = (0, a.$K0b)(r.$HW, A.configurationService, !1),
					[be, Ce] = (0, a.$K0b)(r.$JW, A.configurationService, !0),
					[Le, Fe] = (0, a.$K0b)(r.$IW, A.configurationService, !1),
					Oe = (0, E.createMemo)(
						() =>
							A.reactiveStorageService.applicationUserPersistentStorage
								.composerState.defaultCapabilities || [],
					),
					xe = (0, E.createMemo)(() =>
						Oe().some(
							(Ke) =>
								Ke.type ===
								m.ComposerCapabilityRequest_ComposerCapabilityType
									.LOOP_ON_LINTS,
						),
					),
					He = (Ke) => {
						if (!Ke)
							A.reactiveStorageService.setApplicationUserPersistentStorage(
								"composerState",
								"defaultCapabilities",
								(Te) =>
									Te?.filter(
										(Ee) =>
											Ee.type !==
												m.ComposerCapabilityRequest_ComposerCapabilityType
													.LOOP_ON_LINTS && Ee.type !== void 0,
									) || [],
							),
								A.composerDataService.selectedComposer?.capabilities?.forEach(
									(Te) => {
										Te.dispose();
									},
								),
								A.composerDataService.updateSelectedComposer({
									capabilities: [],
								});
						else {
							const Je = {
								type: m.ComposerCapabilityRequest_ComposerCapabilityType
									.LOOP_ON_LINTS,
								data: b.defaultCapabilityData[
									m.ComposerCapabilityRequest_ComposerCapabilityType
										.LOOP_ON_LINTS
								],
							};
							A.reactiveStorageService.setApplicationUserPersistentStorage(
								"composerState",
								"defaultCapabilities",
								(Te) => {
									const Ee = Te ? [...Te] : [],
										Ie = Ee.findIndex(
											(Se) =>
												Se.type ===
												m.ComposerCapabilityRequest_ComposerCapabilityType
													.LOOP_ON_LINTS,
										),
										Be = JSON.parse(JSON.stringify(Je));
									return Ie !== -1 ? (Ee[Ie] = Be) : Ee.push(Be), Ee;
								},
							),
								A.composerDataService.updateSelectedComposer({
									capabilities: (0, b.getComposerCapabilities)(
										A.instantiationService,
										A.reactiveStorageService,
										A.composerDataService.selectedComposerId,
										[
											{
												type: m.ComposerCapabilityRequest_ComposerCapabilityType
													.LOOP_ON_LINTS,
												data: b.defaultCapabilityData[
													m.ComposerCapabilityRequest_ComposerCapabilityType
														.LOOP_ON_LINTS
												],
											},
										],
									),
								});
						}
					};
				return (0, w.createComponent)(f.$eDc, {
					get children() {
						return [
							(0, w.createComponent)(h.$aDc, {}),
							(0, w.createComponent)(p.$dDc, {}),
							(0, w.createComponent)(g.$VCc, {
								title: "Chat & Composer",
								idToScrollTo: "cursor-settings-chat-composer",
								description:
									"Chat with your codebase and edit multiple files at once with Composer.",
								get children() {
									return [
										(0, w.createComponent)(o.$YCc, {
											label: "Auto-scroll to bottom",
											description:
												"Automatically scroll to the bottom of the composer pane when a new message is generated",
											get value() {
												return fe();
											},
											onChange: me,
										}),
										(0, w.createComponent)(o.$YCc, {
											label: "Auto-apply to files outside context",
											description:
												"Allow the composer to auto-apply changes to files outside the current context",
											get value() {
												return (
													A.reactiveStorageService
														.applicationUserPersistentStorage.composerState
														.autoApplyFilesOutsideContext ?? !0
												);
											},
											onChange: (Ke) => {
												A.reactiveStorageService.setApplicationUserPersistentStorage(
													"composerState",
													(Je) => ({ ...Je, autoApplyFilesOutsideContext: Ke }),
												);
											},
										}),
										(0, w.createComponent)(o.$YCc, {
											label: "Enable yolo mode",
											description:
												"Allow agent composers to run tools without asking for confirmation, such as executing commands and writing to files",
											get value() {
												return (
													A.reactiveStorageService
														.applicationUserPersistentStorage.composerState
														.useYoloMode ?? !1
												);
											},
											onChange: (Ke) => {
												(async () => {
													if (
														Ke &&
														!A.reactiveStorageService
															.applicationUserPersistentStorage.composerState
															.doNotShowYoloModeWarningAgain
													) {
														const Te = await A.prettyDialogService.openDialog({
															title: "Disclaimer",
															primaryButton: {
																id: "continue",
																label: "Continue",
															},
															extraButtons: [
																{
																	id: "do-not-show-again",
																	label: "Do not show again",
																	type: "secondary",
																},
															],
															cancelButton: { id: "cancel", label: "Cancel" },
															dialogIcon: C.$ak.warning,
															message:
																"Yolo mode runs any commands based on the allowlist and denylist you set. Be cautious of potential prompt injection risks from external sources and use at your own risk.",
														});
														if (Te === "cancel") return;
														Te === "do-not-show-again" &&
															A.reactiveStorageService.setApplicationUserPersistentStorage(
																"composerState",
																"doNotShowYoloModeWarningAgain",
																!0,
															);
													}
													A.reactiveStorageService.setApplicationUserPersistentStorage(
														"composerState",
														(Te) => ({ ...Te, useYoloMode: Ke }),
													);
												})();
											},
											groupStyle: { gap: "12px" },
											get children() {
												return (0, w.createComponent)(E.Show, {
													get when() {
														return A.reactiveStorageService
															.applicationUserPersistentStorage.composerState
															.useYoloMode;
													},
													get children() {
														return [
															(0, w.createComponent)(o.$YCc, {
																label: "Yolo prompt",
																description:
																	"A description of which commands should be executed automatically, as judged by the model you're using",
																containerStyle: { cursor: "default" },
																get extra() {
																	return (0, w.createComponent)($.default, {
																		extraStyles: {
																			"font-size": "12px",
																			flex: 1,
																			width: "100%",
																		},
																		size: "small",
																		get extras() {
																			return {
																				placeholder:
																					'E.g. "Just compilation commands, git commands and other safe commands"',
																				onInput: (Ke) => {
																					A.reactiveStorageService.setApplicationUserPersistentStorage(
																						"composerState",
																						"yoloPrompt",
																						Ke.currentTarget.value,
																					);
																				},
																				value:
																					A.reactiveStorageService
																						.applicationUserPersistentStorage
																						.composerState.yoloPrompt ?? "",
																				spellcheck: !1,
																			};
																		},
																	});
																},
															}),
															(0, w.createComponent)(o.$YCc, {
																label: "Command allowlist",
																description:
																	"Add commands here if only very specific commands should be executed automatically",
																containerStyle: { cursor: "default" },
																get extra() {
																	return (0, w.createComponent)(v.$hDc, {
																		elementName: "command",
																		get elements() {
																			return (
																				A.reactiveStorageService
																					.applicationUserPersistentStorage
																					.composerState.yoloCommandAllowlist ??
																				[]
																			);
																		},
																		onChange: (Ke) => {
																			A.reactiveStorageService.setApplicationUserPersistentStorage(
																				"composerState",
																				"yoloCommandAllowlist",
																				Ke,
																			);
																		},
																	});
																},
															}),
															(0, w.createComponent)(o.$YCc, {
																label: "Command denylist",
																description:
																	"Commands which should never be executed automatically",
																containerStyle: { cursor: "default" },
																get extra() {
																	return (0, w.createComponent)(v.$hDc, {
																		elementName: "command",
																		get elements() {
																			return (
																				A.reactiveStorageService
																					.applicationUserPersistentStorage
																					.composerState.yoloCommandDenylist ??
																				[]
																			);
																		},
																		onChange: (Ke) => {
																			A.reactiveStorageService.setApplicationUserPersistentStorage(
																				"composerState",
																				"yoloCommandDenylist",
																				Ke,
																			);
																		},
																	});
																},
															}),
															(0, w.createComponent)(o.$YCc, {
																label: "Delete file protection",
																description:
																	"If enabled, prevents the agent from deleting files automatically",
																get value() {
																	return (
																		A.reactiveStorageService
																			.applicationUserPersistentStorage
																			.composerState.yoloDeleteFileDisabled ??
																		!1
																	);
																},
																onChange: (Ke) => {
																	A.reactiveStorageService.setApplicationUserPersistentStorage(
																		"composerState",
																		(Je) => ({
																			...Je,
																			yoloDeleteFileDisabled: Ke,
																		}),
																	);
																},
															}),
														];
													},
												});
											},
										}),
										(0, w.createComponent)(o.$YCc, {
											label: "Auto save agentic edits",
											description:
												"Automatically save edits made by the AI agent. This helps provide more accurate signals for the LLM",
											get value() {
												return (
													A.reactiveStorageService
														.applicationUserPersistentStorage.composerState
														.autoSaveAgenticEdits ??
													A.aiFeatureStatusService.getCachedFeatureStatus(
														"autoSaveAgenticEdits",
													) ??
													!1
												);
											},
											onChange: (Ke) => {
												A.reactiveStorageService.setApplicationUserPersistentStorage(
													"composerState",
													(Je) => ({ ...Je, autoSaveAgenticEdits: Ke }),
												);
											},
										}),
									];
								},
							}),
							(0, w.createComponent)(o.$YCc, {
								label: "Collapse input box pills in pane or editor",
								description:
									"Collapse pills in the composer pane or editor input box to save space",
								get value() {
									return ye();
								},
								onChange: ue,
							}),
							(0, w.createComponent)(o.$YCc, {
								label: "Render pills instead of blocks",
								description:
									"Collapse composer code blocks into pills instead of rendering as code blocks",
								get value() {
									return ve();
								},
								onChange: ge,
							}),
							(0, w.createComponent)(o.$YCc, {
								label: "Agent composer iterate on lints",
								description:
									"If enabled, agent composers will iterate on linter errors to fix them automatically",
								get value() {
									return be();
								},
								onChange: Ce,
							}),
							(0, w.createComponent)(o.$YCc, {
								get label() {
									return (() => {
										const Ke = P(),
											Je = Ke.firstChild;
										return (
											Ke.style.setProperty("display", "flex"),
											Ke.style.setProperty("align-items", "center"),
											Ke.style.setProperty("gap", "4px"),
											(0, i.insert)(
												Ke,
												(0, w.createComponent)(s.$nac, {
													type: "subtle",
													text: "BETA",
													size: "small",
												}),
												null,
											),
											(0, i.insert)(
												Ke,
												(0, w.createComponent)(l.$m$b, {
													text: "This may not work as intended for languages such as Rust, where linter errors are only available after saving the file.",
													style: {
														"font-size": "10px",
														color: "var(--vscode-descriptionForeground)",
													},
												}),
												null,
											),
											Ke
										);
									})();
								},
								description:
									"If there are linter errors, normal composer iterates to fix them",
								get value() {
									return xe();
								},
								onChange: He,
							}),
							(0, w.createComponent)(o.$YCc, {
								get label() {
									return (() => {
										const Ke = k(),
											Je = Ke.firstChild;
										return (
											Ke.style.setProperty("display", "flex"),
											Ke.style.setProperty("align-items", "center"),
											Ke.style.setProperty("gap", "4px"),
											(0, i.insert)(
												Ke,
												(0, w.createComponent)(s.$nac, {
													type: "subtle",
													text: "BETA",
													size: "small",
												}),
												null,
											),
											Ke
										);
									})();
								},
								description:
									"Automatically include relevant codebase context for composer",
								get value() {
									return (
										A.reactiveStorageService.applicationUserPersistentStorage
											.composerState.useContextBank ?? !1
									);
								},
								onChange: (Ke) => {
									A.reactiveStorageService.setApplicationUserPersistentStorage(
										"composerState",
										"useContextBank",
										Ke,
									);
								},
							}),
							(0, w.createComponent)(o.$YCc, {
								get label() {
									return (() => {
										const Ke = L(),
											Je = Ke.firstChild;
										return (
											Ke.style.setProperty("display", "flex"),
											Ke.style.setProperty("align-items", "center"),
											Ke.style.setProperty("gap", "4px"),
											(0, i.insert)(
												Ke,
												(0, w.createComponent)(s.$nac, {
													type: "subtle",
													text: "BETA",
													size: "small",
												}),
												null,
											),
											Ke
										);
									})();
								},
								description:
									"List and group changes made in a composer session with an LLM for you to review",
								get extra() {
									return (0, w.createComponent)(S.$Kbc, {
										chevronRight: !0,
										get origLabel() {
											return (
												A.reactiveStorageService
													.applicationUserPersistentStorage.composerState
													.shouldReviewChanges ?? "enabled"
											);
										},
										items: [
											{ id: "enabled", label: "Display button" },
											{ id: "auto", label: "Auto-run" },
											{ id: "disabled", label: "Disabled" },
										],
										onSelect: (Ke) => {
											A.reactiveStorageService.setApplicationUserPersistentStorage(
												"composerState",
												"shouldReviewChanges",
												Ke,
											);
										},
										get value() {
											return (
												A.reactiveStorageService
													.applicationUserPersistentStorage.composerState
													.shouldReviewChanges ?? "enabled"
											);
										},
									});
								},
							}),
							(0, w.createComponent)(p.$dDc, {}),
							(0, w.createComponent)(g.$VCc, {
								idToScrollTo: "cursor-settings-codebase-indexing",
								title: "Codebase indexing",
								get description() {
									return [
										"Embeddings improve your codebase-wide answers. Embeddings and metadata are stored in the",
										" ",
										(() => {
											const Ke = D();
											return (
												Ke.addEventListener("click", () => {
													A.openerService.open(
														"https://cursor.com/security#indexing",
														{ openExternal: !0 },
													);
												}),
												Ke.style.setProperty("cursor", "pointer"),
												Ke.style.setProperty("text-decoration", "underline"),
												Ke.style.setProperty("text-underline-offset", "2px"),
												Ke
											);
										})(),
										", but all code is stored locally.",
									];
								},
								style: { gap: "14px" },
								get children() {
									const Ke = I();
									return (
										Ke.style.setProperty("font-size", "12px"),
										(0, i.insert)(Ke, (0, w.createComponent)(c.$cDc, {})),
										Ke
									);
								},
							}),
							(0, w.createComponent)(p.$dDc, {}),
							(0, w.createComponent)(g.$VCc, {
								idToScrollTo: "cursor-settings-docs",
								title: "Docs",
								description: "Manage the custom docs that you've added.",
								style: { gap: "6px" },
								get titleExtra() {
									return (0, w.createComponent)(y.$rdc, {
										style: {
											"margin-left": "auto",
											"transform-origin": "right",
											transform: "scale(0.8)",
										},
										onClick: () => {
											(async () => {
												A.reactiveStorageService.setNonPersistentStorage(
													"newDoc",
													void 0,
												),
													await A.commandService.executeCommand(
														"cursor.newdocs",
													);
											})();
										},
										get codicon() {
											return C.$ak.plus;
										},
										title: "Add new doc",
									});
								},
								get children() {
									const Ke = I();
									return (
										(0, i.insert)(
											Ke,
											(0, w.createComponent)(E.Show, {
												get when() {
													return (
														A.reactiveStorageService
															.applicationUserPersistentStorage.personalDocs
															.length === 0
													);
												},
												get children() {
													const Je = T();
													return (
														Je.style.setProperty(
															"color",
															"var(--vscode-input-placeholderForeground)",
														),
														Je.style.setProperty("font-size", "10px"),
														Je.style.setProperty(
															"border-left",
															"2px solid var(--vscode-commandCenter-inactiveBorder)",
														),
														Je.style.setProperty("margin-left", "2px"),
														Je.style.setProperty("padding-left", "8px"),
														Je
													);
												},
											}),
											null,
										),
										(0, i.insert)(
											Ke,
											(0, w.createComponent)(E.For, {
												get each() {
													return A.reactiveStorageService
														.applicationUserPersistentStorage.personalDocs;
												},
												children: (Je) =>
													(0, w.createComponent)(n.$G_b, { doc: Je }),
											}),
											null,
										),
										Ke
									);
								},
							}),
							(0, w.createComponent)(p.$dDc, {}),
							(0, w.createComponent)(g.$VCc, {
								title: "Editor",
								get children() {
									return [
										(0, w.createComponent)(o.$YCc, {
											label: "Show chat/edit tooltip",
											description:
												"Show a chat/edit tooltip near highlighted code in the editor",
											get value() {
												return (
													A.reactiveStorageService
														.applicationUserPersistentStorage
														.hideChatEditTooltip !== !0
												);
											},
											onChange: (Ke) => {
												A.reactiveStorageService.setApplicationUserPersistentStorage(
													"hideChatEditTooltip",
													!Ke,
												);
											},
										}),
										(0, w.createComponent)(o.$YCc, {
											label: "Auto parse inline edit links",
											description:
												"Automatically parse links when pasted into ^/\u2318 + K input",
											get value() {
												return (
													A.reactiveStorageService
														.applicationUserPersistentStorage
														.shouldAutoParseCmdKLinks !== !1
												);
											},
											onChange: (Ke) => {
												A.reactiveStorageService.setApplicationUserPersistentStorage(
													"shouldAutoParseCmdKLinks",
													Ke,
												);
											},
										}),
										(0, w.createComponent)(o.$YCc, {
											label: "Auto select for Ctrl/\u2318 + K",
											description:
												"Automatically select regions for inline code editing",
											get value() {
												return G();
											},
											onChange: K,
										}),
										(0, w.createComponent)(o.$YCc, {
											label: "Use themed diff backgrounds",
											description:
												"Use themed background colors for inline diffs",
											get value() {
												return X();
											},
											onChange: Y,
										}),
										(0, w.createComponent)(o.$YCc, {
											label: "Use character-level diffs",
											description: "Use character-level diffs for inline diffs",
											get value() {
												return ie();
											},
											onChange: ne,
										}),
									];
								},
							}),
							(0, w.createComponent)(p.$dDc, {}),
							(0, w.createComponent)(g.$VCc, {
								title: "Terminal",
								get children() {
									return [
										(0, w.createComponent)(o.$YCc, {
											label: "Terminal hint",
											description:
												"Show the hint text at the bottom of the terminal",
											get value() {
												return (
													A.reactiveStorageService
														.applicationUserPersistentStorage
														.hideTerminalTooltip !== !0
												);
											},
											onChange: (Ke) => {
												A.reactiveStorageService.setApplicationUserPersistentStorage(
													"hideTerminalTooltip",
													!Ke,
												);
											},
										}),
										(0, w.createComponent)(o.$YCc, {
											label: "Show terminal hover hint",
											description:
												"Show hints like 'Add to chat' in the terminal",
											get value() {
												return x();
											},
											onChange: H,
										}),
										(0, w.createComponent)(o.$YCc, {
											label: `Use preview box for terminal ${u.$m ? "\u2318" : "Ctrl+"}K`,
											description:
												"If turned off, responses are streamed directly into the shell",
											get value() {
												return q();
											},
											onChange: V,
										}),
									];
								},
							}),
						];
					},
				});
			}
		},
	),
		
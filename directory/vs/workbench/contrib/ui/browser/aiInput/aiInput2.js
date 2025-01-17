import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/browser/dom.js';
import '../../../../../../external/lexical/lexical-solid/LexicalComposer.js';
import '../../../../../../external/lexical/lexical-solid/api.js';
import '../../../../../../external/lexical/lexical/api.js';
import '../../../../../../external/solid/solid.js';
import './plugins/mentions/MentionsPlugin.js';
import '../../../controlCommon/browser/solid.js';
import './plugins/mentions/MentionNode.js';
import '../../../../../../external/lexical/lexical-solid/shared/useHistory.js';
import '../../../../../../external/lexical/lexical/lexical.js';
import '../../../../../platform/reactivestorage/browser/reactiveStorageTypes.js';
import '../../../aichat/browser/chatData.js';
import '../../../aichat/browser/codeSelections.js';
import './plugins/mentions/types.js';
import './plugins/slashCommands/SlashPlugin.js';
import './plugins/slashCommands/SlashCommandNode.js';
import './plugins/ImagePlugins.js';
import '../../../../../base/common/uri.js';
import '../../../../../base/common/network.js';
import './plugins/ghostText/GhostTextNode.js';
import './plugins/ghostText/GhostTextPlugin.js';
import './plugins/addSymbol/AddSymbolPlugin.js';
import '../utils.js';
import '../../../../../../external/lexical/lexical-selection/range-selection.js';
import './plugins/autoContext/AutoContextPlugin.js';
import '../../../../../css!vs/workbench/contrib/ui/browser/aiInput/aiInput2.js';
define(
		de[450],
		he([
			1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 7, 1063, 4112, 164, 13, 1382, 36, 816,
			1565, 158, 205, 140, 354, 310, 4179, 1270, 4178, 9, 23, 1775, 3190, 4308,
			476, 1562, 4309, 2507,
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
			I,
			T,
			P,
			k,
			L,
			D,
			M,
			N,
			A,
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Uac = e.$Sac = e.$Rac = void 0),
				(e.$Tac = F),
				(e.$Vac = H),
				(e.$Wac = q),
				(u = mt(u)),
				(g = xi(g)),
				(v = xi(v)),
				(D = xi(D)),
				(A = xi(A));
			const R = (0, t.template)("<div>"),
				O = (0, t.template)('<div><div class="aislash-editor-placeholder">'),
				B = (0, t.template)("<div><div>"),
				U = () => ({
					onError(te) {
						throw te;
					},
					nodes: [o.$2_b, S.$uac, k.$Dac],
				});
			e.$Rac = U;
			const z = (_) =>
				(0, d.createComponent)(r.Show, {
					get when() {
						return _.show;
					},
					get children() {
						const te = R();
						return (
							te.style.setProperty("position", "absolute"),
							te.style.setProperty("top", "0.5rem"),
							te.style.setProperty("left", "0.5rem"),
							te.style.setProperty(
								"background-color",
								"var(--vscode-input-background)",
							),
							te.style.setProperty(
								"border-color",
								"var(--vscode-inputValidation-errorBorder)",
							),
							te.style.setProperty("border-width", "1px"),
							te.style.setProperty(
								"border-radius",
								"var(--vscode-input-border-radius)",
							),
							(0, m.insert)(te, () => _.message),
							te
						);
					},
				});
			e.$Sac = z;
			function F(_) {
				const [te, Q] = (0, r.splitProps)(_, ["onSubmit"]);
				return (0, d.createComponent)(
					e.$Uac,
					(0, C.mergeProps)(
						$.$w_b,
						{
							readonly: !1,
							useArrowsForHistory: !1,
							supportsGit: !1,
							supportsCommitNotes: !1,
							supportsLint: !1,
							supportsCodebase: !1,
							supportsLink: !1,
							supportsFolderSelections: !1,
							supportsWeb: !1,
							showDocs: !1,
							atMentionsDisabled: !0,
							isLongContextMode: !1,
							source: "simple_input_box",
							editorConfig: () => ({
								...(0, e.$Rac)(),
								namespace: "simple-input-box",
								onError: (Z) => {
									console.error(Z);
								},
							}),
							get onSubmit() {
								return te.onSubmit;
							},
						},
						Q,
					),
				);
			}
			const x = (_) => {
				const te = "0 0.5rem 0 0.5rem";
				function Q() {
					return (() => {
						const fe = O(),
							me = fe.firstChild;
						return (
							fe.style.setProperty("grid-area", "1 / 2 / 1 / 2"),
							(0, m.insert)(me, () => _.placeholder),
							(0, E.effect)((ve) =>
								(0, w.style)(
									me,
									{
										position: "relative",
										top: 0,
										left: "-100%",
										padding: te,
										"pointer-events": "none",
										"user-select": "none",
										color: "var(--vscode-input-placeholderForeground)",
										..._.placeholderStyle,
									},
									ve,
								),
							),
							fe
						);
					})();
				}
				const Z = (0, p.$odc)();
				function se(fe) {}
				const re = (0, r.createMemo)(() => {
						const me = Z.editorService.editors
							.map((ve) => ve.resource)
							.map((ve) => ve?.fsPath ?? "");
						return new Set(me);
					}),
					[le, oe] = (0, r.createSignal)(!1),
					ae = () =>
						(0, d.createComponent)(h.ContentEditable, {
							class: "aislash-editor-input",
							get style() {
								return {
									resize: "none",
									"grid-area": "1 / 1 / 1 / 1",
									overflow: "hidden",
									"line-height": "inherit",
									"font-family": "inherit",
									"font-size": "inherit",
									color: "var(--vscode-input-foreground)",
									"background-color": "transparent",
									display: "block",
									outline: "none",
									"scrollbar-width": "none",
									"box-sizing": "border-box",
									border: "none",
									"word-wrap": "break-word",
									"word-break": "break-word",
									padding: te,
									..._.style,
								};
							},
							get turnOffCmdZ() {
								return _.externalHistoryBundle !== void 0;
							},
							spellCheck: !1,
							autoCapitalize: "off",
						}),
					[pe, $e] = (0, r.createSignal)(!1),
					[ye, ue] = (0, r.createSignal)("");
				return (() => {
					const fe = B(),
						me = fe.firstChild;
					return (
						fe.addEventListener("click", (ve) => {
							_.inputBoxDelegate &&
								ve.target === ve.currentTarget &&
								_.inputBoxDelegate.focus();
						}),
						me.style.setProperty("display", "grid"),
						me.style.setProperty("position", "relative"),
						me.style.setProperty("grid-template-rows", "1"),
						me.style.setProperty("grid-template-columns", "1fr 1fr"),
						me.style.setProperty("width", "200%"),
						(0, m.insert)(
							me,
							(0, d.createComponent)(a.LexicalComposer, {
								get initialConfig() {
									return _.editorConfig();
								},
								get children() {
									return [
										(0, d.createComponent)(r.Show, {
											get when() {
												return _.enableAutoContextPlugin;
											},
											get children() {
												return (0, d.createComponent)(A.default, {
													get addFile() {
														return _.onAddFile;
													},
													get excludeFiles() {
														return _.fileSelections.map((ve) =>
															T.URI.from(ve.uri),
														);
													},
												});
											},
										}),
										(0, d.createComponent)(r.Show, {
											get when() {
												return _.enableAddFilePlugin;
											},
											get children() {
												return (0, d.createComponent)(D.default, {
													get addFile() {
														return _.onAddFile;
													},
												});
											},
										}),
										(0, i.memo)(() => _.extraPlugins),
										(0, d.createComponent)(h.PlainTextPlugin, {
											get contentEditable() {
												return ae();
											},
											get placeholder() {
												return (0, d.createComponent)(Q, {});
											},
											errorBoundary: h.LexicalErrorBoundary,
										}),
										(0, d.createComponent)(r.Show, {
											get when() {
												return _.allowGhostTextAtSymbols;
											},
											get children() {
												return (0, d.createComponent)(L.$Fac, {
													ghostText: ye,
													onAccept: () => {},
												});
											},
										}),
										(0, d.createComponent)(r.Show, {
											get when() {
												return _.externalHistoryBundle !== void 0;
											},
											get fallback() {
												return (0, d.createComponent)(h.HistoryPlugin, {});
											},
											get children() {
												return (0, d.createComponent)(
													G,
													(0, C.mergeProps)(() => _.externalHistoryBundle),
												);
											},
										}),
										(0, d.createComponent)(r.Show, {
											get when() {
												return _.atMentionsDisabled !== !0;
											},
											get children() {
												return (0, d.createComponent)(
													g.default,
													(0, C.mergeProps)(_, {
														ghostText: ye,
														setGhostText: ue,
														get mentionIdToDelete() {
															return _.mentionIdToDelete;
														},
														get setMentionIdToDelete() {
															return _.setMentionIdToDelete;
														},
														get mentionToAdd() {
															return _.mentionToAdd;
														},
														get setMentionToAdd() {
															return _.setMentionToAdd;
														},
														get insertSelection() {
															return _.insertSelection;
														},
														get selections() {
															return _.selections;
														},
														get removeSelection() {
															return _.removeSelection;
														},
														insertImage: (ve) => {
															if (_.insertImage !== void 0)
																return _.insertImage(ve);
															if (_.addImage === void 0) return;
															const ge = new Image();
															(ge.src = P.$7g
																.uriToBrowserUri(T.URI.from(ve.uri))
																.toString()),
																_.addImage(ve.uuid, {
																	path: T.URI.from(ve.uri).fsPath,
																	dimension: {
																		width: ge.naturalWidth,
																		height: ge.naturalHeight,
																	},
																	loadedAt: Date.now(),
																});
														},
														get removeImage() {
															return _.removeImage;
														},
														get imageUuids() {
															return _.imageUuids;
														},
														get insertLink() {
															return _.insertLink;
														},
														get removeLink() {
															return _.removeLink;
														},
														get insertFileSelection() {
															return _.insertFileSelection;
														},
														get fileSelections() {
															return _.fileSelections;
														},
														get removeFileSelection() {
															return _.removeFileSelection;
														},
														get insertCommit() {
															return _.insertCommit;
														},
														get commits() {
															return _.commits;
														},
														get removeCommit() {
															return _.removeCommit;
														},
														get insertDocs() {
															return _.insertDocs;
														},
														get removeDocs() {
															return _.removeDocs;
														},
														get removeCurrentFile() {
															return _.removeCurrentFile ?? (() => {});
														},
														get addCurrentFile() {
															return _.addCurrentFile ?? (() => {});
														},
														get removeLinterErrors() {
															return _.removeLinterErrors ?? (() => {});
														},
														get addLinterErrors() {
															return _.addLinterErrors ?? (() => {});
														},
														get addCodebase() {
															return _.addCodebase ?? (() => {});
														},
														get removeCodebase() {
															return _.removeCodebase ?? (() => {});
														},
														get recentFiles() {
															return re();
														},
														get contextSessionUuid() {
															return _.contextSessionUuid;
														},
														showErrorMessage: se,
														onMentionsMenuOpen: () => {
															_.onMentionsMenuOpen?.(), $e(!0);
														},
														onMentionsMenuClose: () => {
															_.onMentionsMenuClose?.(), $e(!1);
														},
														get addCommitNotes() {
															return _.addCommitNotes;
														},
														get removeCommitNotes() {
															return _.removeCommitNotes;
														},
													}),
												);
											},
										}),
										(0, d.createComponent)(r.Show, {
											get when() {
												return (
													(_.slashCommandProps?.supportedCommands.length ?? 0) >
														0 && _.slashCommandProps
												);
											},
											children: (ve) =>
												(0, d.createComponent)(v.default, {
													get delegate() {
														return _.delegate;
													},
													get setCommand() {
														return ve().setCommand;
													},
													get removeCommand() {
														return ve().removeCommand;
													},
													get commands() {
														return ve().supportedCommands;
													},
												}),
										}),
										(0, d.createComponent)(X, {
											setIsFocused: (ve) => {
												ve ? _.onFocus?.() : (ue(""), _.onBlur?.()),
													oe(ve),
													_.setIsFocused?.(ve);
											},
											get delegate() {
												return _.delegate;
											},
										}),
										(0, d.createComponent)(I.$Aac, {
											get addImage() {
												return _.addImage;
											},
										}),
										(0, d.createComponent)(I.$Bac, {
											get addImage() {
												return _.addImage;
											},
										}),
										(0, d.createComponent)(Y, {
											handleSubmit: (ve) => (ue(""), _.onSubmit(ve)),
										}),
										(0, d.createComponent)(ie, {
											get supportsLink() {
												return (
													(_.shouldAutoParseLink === void 0
														? !0
														: _.shouldAutoParseLink) && _.supportsLink
												);
											},
											get supportsCommitNotes() {
												return _.supportsCommitNotes;
											},
											get supportsCodebase() {
												return _.supportsCodebase;
											},
											get supportsWeb() {
												return _.supportsWeb;
											},
											get supportsDocs() {
												return _.showDocs ?? !1;
											},
											get supportsFolder() {
												return _.supportsFolderSelections;
											},
											get addCodebase() {
												return _.addCodebase;
											},
											get addFile() {
												return _.insertFileSelection;
											},
											get addFolder() {
												return _.insertFolderSelection;
											},
											get addDoc() {
												return _.insertDocs;
											},
											get addCode() {
												return _.insertSelection;
											},
											get addWeb() {
												return _.addWeb;
											},
											get addLinterErrors() {
												return _.addLinterErrors;
											},
											get insertSelection() {
												return _.insertSelection;
											},
											get insertDocs() {
												return _.insertDocs;
											},
											get insertLink() {
												return _.insertLink;
											},
											get removeLink() {
												return _.removeLink;
											},
											get insertTerminalSelection() {
												return _.insertTerminalSelection;
											},
											isMentionsMenuOpen: pe,
											get source() {
												return _.source;
											},
											get disableSelectionCopyPaste() {
												return _.disableSelectionCopyPaste;
											},
										}),
										(0, d.createComponent)(ne, {
											setIsTyping: () => _.setIsTyping,
											get setText() {
												return _.setText;
											},
											get setRichText() {
												return _.setRichText;
											},
											get initText() {
												return _.initText;
											},
											onEscape: (ve) => {
												_.allowGhostTextAtSymbols && ye()
													? ue("")
													: _.onEscape?.(ve);
											},
											get setContentHeight() {
												return _.setContentHeight;
											},
										}),
										(0, d.createComponent)(ee, {
											get delegate() {
												return _.delegate;
											},
											get onSubmit() {
												return _.onSubmit;
											},
											get initText() {
												return _.initText;
											},
											get inputBoxDelegate() {
												return _.inputBoxDelegate;
											},
										}),
										(0, d.createComponent)(W, {
											removeSelection: () => _.removeSelection,
											get selections() {
												return _.selections;
											},
											onTryDeleteContext: () => _.onTryDeleteContext,
											get ignoreTextForLastSelectionRemoval() {
												return _.ignoreTextForLastSelectionRemoval;
											},
											get text() {
												return _.text;
											},
										}),
										(0, d.createComponent)(J, {
											get commandListeners() {
												return [
													...(_.extraCommandListeners ?? []),
													...((0, M.$Kac)()
														? [
																{
																	command: b.KEY_COMMAND_A_COMMAND,
																	callback: (ve) => {
																		const ge = (0, b.$getSelection)();
																		return (0, b.$isRangeSelection)(ge)
																			? ((0, N.$selectAll)(ge), !0)
																			: !1;
																	},
																},
															]
														: []),
												];
											},
										}),
										(0, i.memo)(
											() =>
												(0, i.memo)(() => !!_.useArrowsForHistory)() &&
												(0, d.createComponent)(K, {
													get setText() {
														return _.setText;
													},
												}),
										),
										(0, d.createComponent)(V, {
											get setEditor() {
												return _.setEditor;
											},
											get readonly() {
												return _.readonly ?? !1;
											},
										}),
									];
								},
							}),
						),
						(0, E.effect)((ve) =>
							(0, w.style)(
								fe,
								{ width: "100%", overflow: "hidden", ..._.containerStyle },
								ve,
							),
						),
						fe
					);
				})();
			};
			e.$Uac = x;
			function H(_) {
				const te = u.getWindow(_),
					Q = te.getSelection();
				if (!Q) return !1;
				const Z = Q.getRangeAt(0),
					se = Z.cloneRange();
				se.selectNodeContents(_), se.setEnd(Z.endContainer, Z.endOffset);
				const re = se.getBoundingClientRect().height,
					le = parseInt(te.getComputedStyle(_).lineHeight);
				let oe = 0;
				if (Q && Q.rangeCount > 0) {
					const ye = Q.getRangeAt(0),
						ue = ye.cloneRange();
					ue.selectNodeContents(_),
						ue.setEnd(ye.startContainer, ye.startOffset),
						(oe = ue.toString().length);
				}
				const pe = _.innerText.substring(0, oe + 1).includes(`
`),
					$e = _.innerText.trim() === "";
				return re <= le && (!pe || $e);
			}
			function q(_) {
				const te = u.getWindow(_),
					Q = te.getSelection();
				if (!Q) return !1;
				const Z = Q.getRangeAt(0),
					se = Z.cloneRange();
				se.selectNodeContents(_), se.setStart(Z.startContainer, Z.startOffset);
				const re = se.getBoundingClientRect().height,
					le = parseInt(te.getComputedStyle(_).lineHeight);
				let oe = 0;
				if (Q && Q.rangeCount > 0) {
					const ye = Q.getRangeAt(0),
						ue = ye.cloneRange();
					ue.selectNodeContents(_),
						ue.setStart(ye.endContainer, ye.endOffset),
						(oe = ue.toString().length);
				}
				const pe = _.innerText.substring(oe).includes(`
`),
					$e = _.innerText.trim() === "";
				return re <= le && (!pe || $e);
			}
			const V = (_) => {
					const [te] = (0, h.useLexicalComposerContext)();
					return (
						(0, r.createEffect)(() => {
							_.setEditor &&
								(_.setEditor(te), te.setEditable(!(_.readonly ?? !1)));
						}),
						(0, r.createEffect)(() => {
							_.readonly && te.setEditable(!1);
						}, [_.readonly]),
						null
					);
				},
				G = (_) => {
					const [te] = (0, h.useLexicalComposerContext)();
					return (
						(0, f.useExternalHistory)(
							te,
							() => _.externalHistoryState,
							100,
							_.runExternalUndo,
							_.runExternalRedo,
							_.addToExternalUndoStack,
						),
						null
					);
				},
				K = (_) => {
					const [te] = (0, h.useLexicalComposerContext)(),
						Q = (0, p.$odc)(),
						[Z, se] = (0, r.createSignal)(-1),
						[re, le] = (0, r.createSignal)([]),
						[oe, ae] = (0, r.createSignal)("");
					(0, r.createEffect)(() => {
						oe().trim() === ""
							? le([oe(), ...Q.aiService.getPreviousPrompts()])
							: le(Q.aiService.getPreviousPrompts());
					});
					const pe = te.registerCommand(
							b.KEY_ARROW_UP_COMMAND,
							(ye) => {
								const ue = te.getRootElement();
								return (
									ue !== null &&
										H(ue) &&
										(Z() === re().length - 1 ||
											(Z() === -1 && ae(ue.innerText), se((fe) => fe + 1))),
									!1
								);
							},
							b.COMMAND_PRIORITY_LOW,
						),
						$e = te.registerCommand(
							b.KEY_ARROW_DOWN_COMMAND,
							(ye) => {
								const ue = te.getRootElement();
								return ue !== null && q(ue) && Z() !== -1 && se(Z() - 1), !1;
							},
							b.COMMAND_PRIORITY_LOW,
						);
					return (
						(0, r.createEffect)(() => {
							const ye = re().length - 1 - Z();
							re().length > 0 && ye >= 0 && ye < re().length
								? (_.setText && _.setText(re()[ye]),
									te.update(() => {
										const ue = (0, b.$getRoot)(),
											fe = (0, b.$createParagraphNode)(),
											me = (0, b.$createTextNode)(re()[ye]);
										fe.append(me);
										for (const ve of ue.getChildren()) ve.remove();
										ue.append(fe), ue.selectEnd();
									}))
								: Z();
						}),
						(0, r.onCleanup)(() => {
							pe(), $e();
						}),
						null
					);
				};
			function J(_) {
				const [te] = (0, h.useLexicalComposerContext)(),
					Q = [];
				for (const {
					command: Z,
					callback: se,
					priority: re,
				} of _.commandListeners ?? [])
					Q.push(te.registerCommand(Z, se, re ?? c.COMMAND_PRIORITY_CRITICAL));
				return (
					(0, r.onCleanup)(() => {
						for (const Z of Q) Z();
					}),
					null
				);
			}
			function W(_) {
				const [te] = (0, h.useLexicalComposerContext)(),
					[Q, Z] = (0, r.createSignal)("");
				(0, r.createEffect)(() => {
					_.text !== void 0 && Z(_.text);
				});
				let se = !1;
				const re = te.registerTextContentListener((pe) => {
						(0, r.createEffect)(() => {
							Z(pe);
						});
					}),
					le = te.registerCommand(
						c.KEY_BACKSPACE_COMMAND,
						(pe) => {
							const $e = (0, r.untrack)(() => _.selections),
								ye = te.getRootElement(),
								ue = (0, M.$Iac)(te);
							return pe.repeat
								? ((se = !0), !1)
								: (!pe.repeat && se && (se = !1),
									!_.onTryDeleteContext &&
									$e.length > 0 &&
									((_.ignoreTextForLastSelectionRemoval && ue) || Q() === "")
										? (_.removeSelection()($e.length - 1), !0)
										: (Q() === "" ||
													(_.ignoreTextForLastSelectionRemoval && ue)) &&
												_.onTryDeleteContext
											? _.onTryDeleteContext()?.()
											: !1);
						},
						c.COMMAND_PRIORITY_HIGH,
					),
					oe = te.registerCommand(
						b.KEY_BACKSPACE_DELETE_COMMAND,
						(pe) =>
							ae.reactiveStorageService.nonPersistentStorage.inprogressAIGenerations.some(
								(ye) =>
									ye.metadata !== void 0 &&
									((ye.metadata.type === "chat" &&
										ye.metadata.chatType !== "edit") ||
										ye.metadata.type === "codeInterpreter" ||
										ye.metadata.type === "interpreterExecution"),
							)
								? (pe.preventDefault(),
									pe.stopPropagation(),
									ae.commandService.executeCommand(l.$Pgc),
									!0)
								: !1,
						c.COMMAND_PRIORITY_HIGH,
					),
					ae = (0, p.$odc)();
				return (
					(0, r.onCleanup)(() => {
						le(), re(), oe();
					}),
					null
				);
			}
			function X(_) {
				const [te] = (0, h.useLexicalComposerContext)(),
					Q = (0, p.$pdc)(),
					Z = te.registerCommand(
						c.FOCUS_COMMAND,
						(pe) => (_.setIsFocused && _.setIsFocused(!0), !1),
						c.COMMAND_PRIORITY_CRITICAL,
					),
					se = te.registerCommand(
						c.BLUR_COMMAND,
						(pe) => (_.setIsFocused && _.setIsFocused(!1), !1),
						c.COMMAND_PRIORITY_CRITICAL,
					);
				let re = 0;
				const le = 100,
					oe = (pe) => {
						pe.keyCode === 9 && (re = pe.timeStamp);
					};
				(0, r.createEffect)(() => {
					Q.window.addEventListener("keydown", oe, !0);
				});
				const ae = te.registerCommand(
					c.FOCUS_COMMAND,
					(pe) => {
						const $e = (0, b.$getSelection)();
						return (
							(0, b.$isRangeSelection)($e) &&
								re + le > pe.timeStamp &&
								(0, b.$setSelection)($e.clone()),
							!1
						);
					},
					b.COMMAND_PRIORITY_LOW,
				);
				return (
					(0, r.createEffect)(() => {
						_.delegate !== void 0 &&
							_.delegate.setForceFocusNoScroll(() => {
								te.getRootElement().focus({ preventScroll: !0 });
							});
					}),
					(0, r.onCleanup)(() => {
						Z(), se(), ae(), Q.window.removeEventListener("keydown", oe, !0);
					}),
					null
				);
			}
			const Y = (_) => {
					const [te] = (0, h.useLexicalComposerContext)(),
						Q = te.registerCommand(
							c.KEY_ENTER_COMMAND,
							(Z) =>
								Z.repeat
									? !0
									: Z.shiftKey ||
											_.handleSubmit(Z) === "do-not-stop-propagation"
										? !1
										: (Z.preventDefault(), !0),
							c.COMMAND_PRIORITY_HIGH,
						);
					return (
						(0, r.onCleanup)(() => {
							Q();
						}),
						null
					);
				},
				ie = (_) => {
					const [te] = (0, h.useLexicalComposerContext)(),
						Q = (0, p.$odc)();
					let Z = !1;
					const se = (pe) => {
							_.source === "chat" &&
								Q.tooltipService.registerEvent("chat.paste");
							let $e = pe.clipboardData?.getData("Text");
							if (
								!Z &&
								Q.reactiveStorageService.nonPersistentStorage.lastCopy &&
								Q.reactiveStorageService.nonPersistentStorage.lastCopy.text ===
									$e &&
								$e !== void 0 &&
								$e.includes(`
`) &&
								!_.disableSelectionCopyPaste
							) {
								pe.preventDefault();
								const fe = _.insertTerminalSelection,
									me = _.insertSelection;
								return (
									(0, y.$1fc)(
										Q.reactiveStorageService.nonPersistentStorage.lastCopy,
										Q.dataScrubbingService,
									).then((ve) => {
										ve &&
											(ve.text.trim().startsWith("```bash") && fe !== void 0
												? fe(ve)
												: me(ve));
									}),
									!0
								);
							}
							if (Z && $e)
								return (
									pe.preventDefault(),
									te.update(() => {
										const fe = (0, b.$getSelection)();
										(0, b.$isRangeSelection)(fe) && fe.insertText($e);
									}),
									!0
								);
							if ($e !== void 0 && $e.includes("@")) {
								for (let fe = 0; fe < $e.length; fe++) {
									const me = $e.charAt(fe);
									if (me === "@") {
										const ve = "@" + $.$s_b[$.TypeaheadOptionType.codebase],
											ge = "@" + $.$s_b[$.TypeaheadOptionType.lint],
											be = "@" + $.$s_b[$.TypeaheadOptionType.web],
											Ce = $e.slice(fe),
											Le = (0, b.$getSelection)();
										if (Le === null) return !1;
										if (Ce.startsWith(ve))
											if (_.supportsCodebase) {
												const Fe = (0, o.$createMentionNode)(
													$.$s_b[$.TypeaheadOptionType.codebase],
													void 0,
													void 0,
													$.TypeaheadOptionType.codebase,
												);
												Le.insertNodes([Fe]),
													Fe.select(),
													_.addCodebase(Fe.storedKey),
													(fe += ve.length - 1);
											} else fe += ve.length;
										else if (Ce.startsWith(ge)) {
											const Fe = (0, o.$createMentionNode)(
												$.$s_b[$.TypeaheadOptionType.lint],
												void 0,
												void 0,
												$.TypeaheadOptionType.lint,
											);
											Le.insertNodes([Fe]),
												Fe.select(),
												_.addLinterErrors(Fe.storedKey),
												(fe += ge.length - 1);
										} else if (Ce.startsWith(be))
											if (_.supportsWeb) {
												const Fe = (0, o.$createMentionNode)(
													$.$s_b[$.TypeaheadOptionType.web],
													void 0,
													void 0,
													$.TypeaheadOptionType.web,
												);
												Le.insertNodes([Fe]),
													Fe.select(),
													_.addWeb(Fe.storedKey),
													(fe += be.length - 1);
											} else fe += be.length;
										else {
											const Oe =
												Q.reactiveStorageService.applicationUserPersistentStorage.aiFeaturesCopyPasteState.mentions
													.slice()
													.reverse()
													.find((xe) => Ce.startsWith(xe.displayName));
											if (Oe) {
												const xe = Oe.displayName.replace(/^@/, "");
												if (Oe.selection.type === s.SelectionType.Code) {
													const He = (0, o.$createMentionNode)(
														xe,
														void 0,
														void 0,
														$.TypeaheadOptionType.code,
														Oe.selection,
													);
													Le.insertNodes([He]),
														_.addCode({
															...Oe.selection.selectionWithoutUuid,
															uuid: He.storedKey,
														}),
														(fe += Oe.displayName.length - 1);
												} else if (Oe.selection.type === s.SelectionType.File) {
													const He = (0, o.$createMentionNode)(
														xe,
														void 0,
														void 0,
														$.TypeaheadOptionType.file,
														Oe.selection,
													);
													Le.insertNodes([He]),
														_.addFile({
															...Oe.selection.selectionWithoutUuid,
															uuid: He.storedKey,
														}),
														(fe += Oe.displayName.length - 1);
												} else if (Oe.selection.type === s.SelectionType.Folder)
													if (_.supportsFolder) {
														const He = (0, o.$createMentionNode)(
															xe,
															void 0,
															void 0,
															$.TypeaheadOptionType.folder,
															Oe.selection,
														);
														Le.insertNodes([He]),
															_.addFolder({
																...Oe.selection.selectionWithoutUuid,
																uuid: He.storedKey,
															}),
															(fe += Oe.displayName.length - 1);
													} else fe += Oe.displayName.length;
												else if (Oe.selection.type === s.SelectionType.Docs)
													if (_.supportsDocs) {
														const He = (0, o.$createMentionNode)(
															xe,
															void 0,
															void 0,
															$.TypeaheadOptionType.doc,
															Oe.selection,
														);
														Le.insertNodes([He]),
															_.addDoc({
																...Oe.selection.selectionWithoutUuid,
																uuid: He.storedKey,
															}),
															(fe += Oe.displayName.length - 1);
													} else fe += Oe.displayName.length;
											} else Le.insertText("@");
										}
									} else {
										const ve = (0, b.$getSelection)();
										if (ve === null) return !1;
										ve.insertText(me);
									}
								}
								return pe.preventDefault(), pe.stopPropagation(), !0;
							}
							const ye = Array.from(pe.clipboardData?.items || []).find(
									(fe) => fe.kind === "file",
								),
								ue = (fe) => {
									try {
										return new URL(fe).hostname.includes(".");
									} catch {
										return !1;
									}
								};
							if (ye) {
								pe.preventDefault();
								const fe = ye.getAsFile();
								if (fe) {
									const me = fe.name;
									return (
										te.update(() => {
											const ve = (0, b.$getSelection)();
											ve !== null && ve.insertText(me);
										}),
										!0
									);
								}
							} else if (
								_.supportsLink &&
								!_.isMentionsMenuOpen() &&
								$e !== void 0 &&
								$e.length < 2e3 &&
								ue($e)
							)
								return (
									pe.preventDefault(),
									te._rootElement?.blur(),
									te.update(() => {
										if (!$e) return;
										const fe = (0, o.$createMentionNode)(
												$e,
												void 0,
												void 0,
												$.TypeaheadOptionType.link,
											),
											me = (0, b.$createTextNode)(" "),
											ve = (0, b.$getSelection)();
										ve !== null &&
											(ve.insertNodes([fe, me]),
											me.select(),
											_.insertLink({ url: $e, uuid: fe.storedKey }));
									}),
									!0
								);
							return !1;
						},
						re = te.registerCommand(
							b.PASTE_COMMAND,
							(pe) => se(pe),
							c.COMMAND_PRIORITY_HIGH,
						),
						le = te.registerCommand(
							b.KEY_COMMAND_V_COMMAND,
							(pe) =>
								(pe.metaKey || pe.ctrlKey) && pe.shiftKey
									? (pe.preventDefault(),
										te.getRootElement() &&
											((Z = !0),
											Q.window.document.execCommand("paste"),
											setTimeout(() => {
												Z = !1;
											}, 100)),
										!0)
									: !1,
							c.COMMAND_PRIORITY_HIGH,
						),
						oe = te.registerCommand(
							b.COPY_COMMAND,
							(pe) => {
								const $e = (ue) => {
										if (ue.getType() === "mention") {
											const ve =
												"@" +
												(ue.__text.startsWith("@")
													? ue.__text.replace(/^@/, "")
													: ue.__text);
											ue.metadata &&
												Q.reactiveStorageService.setApplicationUserPersistentStorage(
													"aiFeaturesCopyPasteState",
													"mentions",
													(ge) => [
														...ge.filter(
															(be) =>
																be.displayName !== ve &&
																be.lastUsedAtUnixMs > Date.now() - 6048e5,
														),
														{
															displayName: ve,
															selection: ue.metadata.selection,
															lastUsedAtUnixMs: Date.now(),
														},
													],
												);
										} else ue.getChildren && ue.getChildren().forEach($e);
									},
									ye = (0, b.$getSelection)();
								return ye
									? (ye.getNodes().forEach((ue) => {
											$e(ue);
										}),
										!0)
									: !1;
							},
							b.COMMAND_PRIORITY_LOW,
						),
						ae = te.registerCommand(
							b.CUT_COMMAND,
							(pe) => {
								const $e = (ue) => {
										if (ue.getType() === "mention") {
											const ve =
												"@" +
												(ue.__text.startsWith("@")
													? ue.__text.replace(/^@/, "")
													: ue.__text);
											ue.metadata &&
												Q.reactiveStorageService.setApplicationUserPersistentStorage(
													"aiFeaturesCopyPasteState",
													"mentions",
													(ge) => [
														...ge.filter(
															(be) =>
																be.displayName !== ve &&
																be.lastUsedAtUnixMs > Date.now() - 6048e5,
														),
														{
															displayName: ve,
															selection: ue.metadata.selection,
															lastUsedAtUnixMs: Date.now(),
														},
													],
												);
										} else ue.getChildren && ue.getChildren().forEach($e);
									},
									ye = (0, b.$getSelection)();
								return ye
									? (ye.getNodes().forEach((ue) => {
											$e(ue);
										}),
										!0)
									: !1;
							},
							b.COMMAND_PRIORITY_LOW,
						);
					return (
						(0, r.onCleanup)(() => {
							re(), le(), oe(), ae();
						}),
						null
					);
				},
				ne = (_) => {
					const [te] = (0, h.useLexicalComposerContext)(),
						[Q, Z] = (0, r.createSignal)(!1),
						se = te.registerTextContentListener((le) => {
							const oe = (0, r.untrack)(() => _.setIsTyping());
							oe && oe(le !== ""),
								_.setText !== void 0 && (_.setText?.(le), Q() || Z(!0)),
								_.setRichText !== void 0 &&
									_.setRichText?.(JSON.stringify(te.getEditorState()));
							const ae = te.getRootElement();
							_.setContentHeight &&
								ae &&
								_.setContentHeight(ae.getBoundingClientRect().height);
						});
					(0, r.createEffect)(() => {
						const le = _.setContentHeight;
						Q() &&
							setTimeout(() => {
								const oe = te.getRootElement();
								le && oe && le(oe.getBoundingClientRect().height);
							});
					}),
						(0, r.onCleanup)(() => {
							se();
						});
					const re = (0, p.$odc)();
					return (
						(0, r.createEffect)(() => {
							const le = te.registerCommand(
								b.KEY_ESCAPE_COMMAND,
								(oe) => (_.onEscape ? (_.onEscape(oe), !0) : !1),
								c.COMMAND_PRIORITY_CRITICAL,
							);
							(0, r.onCleanup)(() => {
								le();
							});
						}),
						null
					);
				},
				ee = (_) => {
					const [te] = (0, h.useLexicalComposerContext)(),
						Q = _.delegate?.getRichText() || _.initText || "",
						[Z, se] = (0, r.createSignal)(Q),
						re = te.registerTextContentListener((pe) => {
							const $e = te.getEditorState(),
								ye = JSON.stringify($e);
							se(ye), _.delegate?.setText(pe, ye);
						}),
						le = (pe) => {
							if (pe !== "") {
								if (pe.startsWith("{"))
									try {
										te.setEditorState(te.parseEditorState(pe));
										return;
									} catch ($e) {
										console.error($e);
									}
								oe(pe);
							}
						},
						oe = (pe) => {
							te.update(() => {
								const $e = (0, b.$getRoot)();
								if (
									!$e
										.getChildren()
										.every((ve) =>
											ve instanceof b.ParagraphNode
												? ve.getTextContent() === ""
												: !1,
										)
								)
									return;
								if (pe.startsWith("{"))
									try {
										te.setEditorState(te.parseEditorState(pe));
										return;
									} catch (ve) {
										console.error(ve);
									}
								const fe = (0, b.$createParagraphNode)(),
									me = (0, b.$createTextNode)(pe);
								fe.append(me);
								for (const ve of $e.getChildren()) ve.remove();
								$e.append(fe), $e.selectEnd();
							});
						};
					Q.trim() !== "" && le(Q);
					let ae;
					if (
						((0, r.createEffect)(() => {
							ae?.(),
								_.delegate &&
									((ae = _.delegate.onSubmit(() => {
										const pe = new KeyboardEvent("submit");
										_.onSubmit(pe);
									})),
									(0, r.onCleanup)(ae));
						}, [_.delegate, _.onSubmit]),
						_.delegate)
					) {
						const pe = _.delegate.onTextChange((ye, ue) => {
							(ue ?? ye) !== Z() && oe(ue ?? ye);
						});
						(0, r.onCleanup)(pe);
						const $e = _.delegate.onClear((ye) => {
							if (ye?.dontStealFocus === !0) {
								const ue = te.parseEditorState(
									'{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}',
								);
								te.setEditorState(ue);
								return;
							}
							te.update(() => {
								const ue = (0, b.$getRoot)(),
									fe = (0, b.$createParagraphNode)();
								for (const me of ue.getChildren()) me.remove();
								ue.append(fe), ue.selectEnd();
							});
						});
						(0, r.onCleanup)($e);
					}
					return (
						(0, n.onMount)(() => {
							const pe = te.getRootElement();
							pe.addEventListener("focusin", () => {
								_.delegate?.notifyFocus();
							}),
								_.inputBoxDelegate?.registerTextAreaElement(pe, te);
						}),
						(0, r.onCleanup)(() => {
							re();
						}),
						null
					);
				};
		},
	),
		
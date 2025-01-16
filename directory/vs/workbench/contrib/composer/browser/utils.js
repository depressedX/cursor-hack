define(
			de[246],
			he([1, 0, 83, 58, 47, 116, 41, 140, 169, 298, 7, 12]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.getAgenticModeToggleButtonId =
						e.restartVimAndFocus =
						e.formatTimestamp =
						e.openCodeSelectionInEditor =
						e.openFileInEditorIfExists =
						e.getShortcut =
							void 0),
					(e.containsContextNotSupportedByAgentic = h),
					(e.getBubbleElementId = c),
					(e.focusBubble = n),
					(e.isCheckpointEmpty = g),
					(e.getComposerTitle = o),
					(e.doesTabHaveExactlyOneUserBubbleWithNoText = y),
					(e.doesTabHaveExactlyOneUserBubbleWithNoTextNorSelections = $),
					(e.createUserBubble = v),
					(e.createCodeInterpreterUserBubble = S),
					(e.randomFilename = I),
					(e.dedupeCodeResults = T),
					(e.sortComposers = P),
					(e.getComposerTimestamp = k),
					(e.replaceUriInCodeBlock = L);
				function h(M) {
					return !!M.usesCodebase;
				}
				function c(M) {
					return `bubble-${M.split("-").pop()}`;
				}
				function n(M) {
					const N = (0, u.$Ogb)().document.getElementById(c(M));
					N && N.focus();
				}
				function g(M) {
					return M ? !M.files.length && !M.nonExistentFiles.length : !0;
				}
				const p = (M) => (a.$m ? `\u2318${M}` : `^${M}`);
				e.getShortcut = p;
				function o(M) {
					return M.name ? M.name : m.unnamedComposerTitle;
				}
				const f = async (M, N, A, R = !1) => {
					(await N.exists(M)) &&
						A.open(M, {
							openToSide: R,
							editorOptions: {
								revealIfVisible: !0,
								revealIfOpened: !0,
								source: E.EditorOpenSource.USER,
								preserveFocus: !0,
							},
							fromUserGesture: !0,
						});
				};
				e.openFileInEditorIfExists = f;
				const b = (M, N, A) => {
					const R = (0, C.$8rb)(N.resolveRelativePath(M.uri.path ?? ""), {
						startLineNumber: M.range.selectionStartLineNumber,
						startColumn: 1,
						endLineNumber: M.range.positionLineNumber,
						endColumn: 1,
					});
					A.open(R, {
						openToSide: !1,
						editorOptions: {
							revealIfVisible: !0,
							revealIfOpened: !0,
							source: E.EditorOpenSource.USER,
						},
						fromUserGesture: !0,
					});
				};
				e.openCodeSelectionInEditor = b;
				const s = (M) => {
					if (!M) return "Unknown";
					const N = Date.now() - M,
						A = Math.floor(N / 1e3),
						R = Math.floor(A / 60),
						O = Math.floor(R / 60),
						B = Math.floor(O / 24);
					return B > 0
						? `${B}d ago`
						: O > 0
							? `${O}h ago`
							: R > 0
								? `${R}m ago`
								: `${A}s ago`;
				};
				e.formatTimestamp = s;
				const l = async (M, N, A, R, O, B) => {
					M === "editor"
						? N.activeEditorPane?.focus()
						: M === "terminal" && A.getActiveInstance()?.focus();
					const U = await O.getInstalled();
					for (const z of U)
						if (z.identifier.id === "vscodevim.vim") {
							if (!(await R.getExtension(z.identifier.id))) continue;
							await B.executeCommand("toggleVim"),
								await B.executeCommand("toggleVim"),
								await B.executeCommand("extension.vim_insert"),
								await B.executeCommand("extension.vim_escape");
						}
				};
				e.restartVimAndFocus = l;
				function y(M) {
					if (M.bubbles.length === 0) return !1;
					if (M.bubbles.length === 1 && M.bubbles[0].type === "user") {
						const N = M.bubbles[0];
						if (!N.text || N.text === "") return !0;
					}
					return !1;
				}
				function $(M) {
					if (M.bubbles.length === 0) return !1;
					if (M.bubbles.length === 1 && M.bubbles[0].type === "user") {
						const N = M.bubbles[0];
						return !(
							(N.text && N.text !== "") ||
							(N.fileSelections?.length ?? 0) > 0 ||
							(N.folderSelections?.length ?? 0) > 0 ||
							(N.selections?.length ?? 0) > 0 ||
							(N.selectedDocs?.length ?? 0) > 0 ||
							(N.selectedPullRequests?.length ?? 0) > 0 ||
							(N.selectedCommits?.length ?? 0) > 0 ||
							(N.selectedImages?.length ?? 0) > 0 ||
							N.useWeb ||
							N.usesCodebase ||
							N.usedRecentFiles?.length
						);
					}
					return !1;
				}
				function v({
					text: M,
					followup: N,
					richText: A,
					configurationService: R,
				} = {}) {
					const O = (0, w.$9g)(),
						B = R?.getValue(i.$nW) ?? !1;
					return {
						...(0, r.$2gc)(),
						type: d.BubbleType.USER_CHAT,
						id: O,
						messageType: t.PureMessage_MessageType.USER,
						dropdownAdvancedCodebaseSearchBehavior: "embeddings",
						followup: N ?? !1,
						text: M,
						richText: A,
						selections: [],
						isFocused: !1,
						useWeb: B,
						mentions: (0, r.$3gc)(),
					};
				}
				function S(M, N, A, R, O, B, U, z) {
					const F = (0, w.$9g)();
					return {
						...(0, r.$2gc)(),
						type: d.BubbleType.USER_CODE_INTERPRETER,
						id: F,
						messageType: t.PureMessage_MessageType.USER,
						followup: B ?? !1,
						text: O ?? "",
						richText: z ?? "",
						selections: [],
						serverMessages: [],
						bubbleState: A,
						nextBubbleState: R,
						stepIndex: U,
						mentions: (0, r.$3gc)(),
					};
				}
				function I() {
					let M = "abcdefghijklmnopqrstuvwxyz",
						N = "";
					for (let A = 0; A < 10; A++)
						N += M.charAt(Math.floor(Math.random() * M.length));
					return N;
				}
				function T(M) {
					const N = new Set(),
						A = [];
					for (const R of M) {
						const { codeBlock: O } = R;
						if (!O) continue;
						const { relativeWorkspacePath: B } = O;
						N.has(B) || (N.add(B), A.push(B));
					}
					return A;
				}
				function P(M) {
					return [...M].sort((N, A) => {
						const R = N.lastUpdatedAt ?? N.createdAt;
						return (A.lastUpdatedAt ?? A.createdAt) - R;
					});
				}
				function k(M) {
					return M ? (M.lastUpdatedAt ?? M.createdAt) : 0;
				}
				function L(M, N, A) {
					const R = /```([\w-]*)(?::[\w\/.]+)?\n([\s\S]*?)```/g;
					let O = 0;
					return M.replace(R, (U, z, F) => {
						if (O === N) {
							const x = z ? `\`\`\`${z}:${A}` : `\`\`\`${A}`;
							return (
								O++,
								`${x}
${F}\`\`\``
							);
						} else return O++, U;
					});
				}
				const D = (M) => `agentic-mode-toggle-${M}`;
				e.getAgenticModeToggleButtonId = D;
			},
		),
		
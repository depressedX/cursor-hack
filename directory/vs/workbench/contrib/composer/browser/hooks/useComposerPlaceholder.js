import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/constants.js';
import '../constants.js';
import './useComposerDataHandle.js';
import '../../../controlCommon/browser/solid.js';
import '../../../ui/browser/hooks/useKeyboardShortcut.js';
define(
			de[4183],
			he([1, 0, 13, 58, 169, 177, 36, 385]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.useComposerPlaceholder = void 0);
				const m = (r, u, a) => {
					const h = (0, C.$odc)(),
						c = (0, d.$5$b)(i.$dX),
						n = (0, d.$5$b)(w.NEW_CHAT_FOLLOW_UP_ACTION_ID),
						g = (0, d.$5$b)(w.COMPOSER_EDIT_ACTION_ID),
						p = (0, t.createMemo)(() => {
							const y = u().data,
								$ =
									h.reactiveStorageService.applicationUserPersistentStorage
										.composerState.location2;
							return (y.conversation.length > 0 && !a()) || $ === "bar";
						}),
						{ currentComposer: o, forceMode: f } = (0, E.useComposerDataHandle)(
							u,
						),
						b = (0, t.createMemo)(() =>
							o().conversation.length > 0 ? n() : c(),
						),
						s = (0, t.createMemo)(() =>
							o().conversation.length > 0 ? "Ask followup" : "Ask anything",
						);
					return (0, t.createMemo)(() => {
						const y = b(),
							$ = g(),
							v = y ? ` (${y})` : "",
							S = $ ? ` (${$})` : "",
							I = s(),
							T = [
								[
									`Edit code ${S}`,
									`${I} ${v}`,
									"Ask agent to do anything",
									210,
								],
								[
									`Edit code ${S}, @ to mention`,
									`${I} ${v}, @ to mention`,
									"Ask agent to do anything, @ to mention",
									360,
								],
								[
									`Edit code ${S}, @ to mention, ${p() ? "\u2191" : "\u21C5"} to select`,
									`${I}${y ? ` (${y}), @ to mention, ${p() ? "\u2191" : "\u21C5"} to select` : `, @ to mention, ${p() ? "\u2191" : "\u21C5"} to select`}`,
									`Ask agent to do anything, @ to mention, ${p() ? "\u2191" : "\u21C5"} to select`,
								],
							],
							P =
								h.reactiveStorageService.applicationUserPersistentStorage
									.composerState.isAutoApplyEnabled,
							k =
								h.reactiveStorageService.applicationUserPersistentStorage
									.composerState.unification;
						for (const [L, D, M, N] of T)
							if (!N || r() <= N)
								return f() === "chat"
									? D
									: k && o().isAgentic
										? M
										: k && !P
											? D
											: o().isAgentic
												? M
												: L;
						return f() === "chat" ? T[0][1] : o().isAgentic ? T[0][2] : T[0][0];
					});
				};
				e.useComposerPlaceholder = m;
			},
		),
		
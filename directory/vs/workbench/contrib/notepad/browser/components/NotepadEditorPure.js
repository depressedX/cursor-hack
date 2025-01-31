import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../controlCommon/browser/solid.js';
import '../../../ui/browser/aiEditorBox/aiEditorBox.js';
import '../../../ui/browser/utils.js';
define(
			de[4326],
			he([1, 0, 2, 13, 36, 4325, 476]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*solid*/,
 w /*solid*/,
 E /*aiEditorBox*/,
 C /*utils*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$iAc = d);
				function d(m) {
					const r = (0, w.$odc)(),
						[u, a] = (0, i.createSignal)(null),
						h = (0, i.createMemo)(() => m.text);
					let c = !1;
					return (
						(0, i.createEffect)(async () => {
							c = await (0, C.$Lac)(r.extensionManagementService);
						}),
						(0, t.createComponent)(E.$hAc, {
							get text() {
								return h();
							},
							get customId() {
								return m.customId;
							},
							setText: (n) => {
								m.setText(n);
							},
							get disableGoToDefinition() {
								return m.disableGoToDefinition;
							},
							language: "markdown",
							style: { width: "100%" },
							autofocus: !0,
							onSubmit: (n) => console.log("Submitted:", n),
							get placeholder() {
								return m.placeholder ?? "What do you want to build?";
							},
							setEditor: (n) => {
								m.setEditor?.(n), a(n);
							},
							extraControllers: [],
							get mentionDecorationIdsToRemove() {
								return m.mentionDecorationIdsToRemove;
							},
							get commandListeners() {
								return m.commandListeners;
							},
							onEscape: (n) => {
								if (!m.onEscape) return;
								const { didFindVimStatusbar: g, isInNormalMode: p } = (0,
								C.$Mac)(r);
								(c && g && !p) ||
									u()?.isSuggestionMenuVisible() ||
									(n.preventDefault(), n.stopPropagation(), m.onEscape?.(n));
							},
							get forceRerender() {
								return m.forceRerender?.();
							},
							get nonReactiveEditorOptions() {
								return {
									glyphMargin: !0,
									padding: {
										top: m.paddingTop ?? 12,
										bottom: m.paddingBottom ?? 12,
									},
								};
							},
							get getContext() {
								return m.getContext;
							},
							get setContext() {
								return m.setContext;
							},
							get undoRedoUri() {
								return m.undoRedoUri;
							},
						})
					);
				}
			},
		)

import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/path.js';
import '../../../../../base/common/themables.js';
import '../../../../../base/common/types.js';
import '../../../../../base/common/uri.js';
import '../chatData.js';
import '../../../controlCommon/browser/solid.js';
import '../../../notepad/browser/constants.js';
import '../../../ui/browser/aiInput/plugins/mentions/pureIcon.js';
import '../../../ui/browser/hooks/useEverythingSearch/types.js';
import '../../../ui/browser/hooks/useEverythingSearch/useEverythingSearch.js';
import '../../../../services/selectedContext/browser/utils.js';
import '../../../ui/browser/pickerMenu/renderFolderStructurePickerMenuPreview.js';
define(
			de[4191],
			he([
				1, 0, 2, 2, 2, 2, 13, 14, 54, 26, 28, 9, 140, 36, 558, 156, 444, 1071,
				299, 860,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*solid*/,
 d /*codicons*/,
 m /*path*/,
 r /*themables*/,
 u /*types*/,
 a /*uri*/,
 h /*chatData*/,
 c /*solid*/,
 n /*constants*/,
 g /*pureIcon*/,
 p /*types*/,
 o /*useEverythingSearch*/,
 f /*utils*/,
 b /*renderFolderStructurePickerMenuPreview*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$8bc = l);
				const s = (0, t.template)("<div>");
				function l(y, $) {
					const v = (0, c.$odc)(),
						{ chatDataService: S, aiChatService: I } = v,
						T = v.notepadDataService,
						[P, k] = (0, C.createSignal)(""),
						[L, D] = (0, C.createSignal)(0),
						{ options: M } = (0, o.$1_b)(
							P,
							() => [
								p.EverythingSearchOptionType.File,
								p.EverythingSearchOptionType.Notepad,
								p.EverythingSearchOptionType.Semantic,
							],
							() => ({ semantic: { topK: 50, finalK: 25 } }),
						),
						[N, A] = (0, C.createSignal)([]);
					(0, C.createEffect)(() => {
						const U = S.getBubbleData(y(), $());
						if (!U || U.type !== h.BubbleType.USER_CHAT) return;
						const z = U.fileSelections ?? [],
							F = new Set(z.map((K) => (0, f.$8gc)(K))),
							x = U.notepads ?? [],
							H = new Set(x.map((K) => K.notepadId)),
							q = [];
						for (const K of M())
							if (
								K.type === p.EverythingSearchOptionType.File ||
								K.type === p.EverythingSearchOptionType.Semantic
							) {
								if (!K.uri || F.has(K.uri.toString())) continue;
								q.push(K);
							} else if (K.type === p.EverythingSearchOptionType.Notepad) {
								if (!K.notepadId || H.has(K.notepadId)) continue;
								q.push(K);
							}
						const V = (K) => T.getNotepadData(K)?.name ?? n.$F9b,
							G = [
								...z.map((K) => ({
									type: "file",
									uri: a.URI.revive(K.uri),
									fileName: (0, m.$sc)(a.URI.revive(K.uri).fsPath),
								})),
								...x.map((K) => ({
									type: "notepad",
									id: K.notepadId,
									name: V(K.notepadId),
								})),
								...q
									.map((K) =>
										K.type === p.EverythingSearchOptionType.File ||
										K.type === p.EverythingSearchOptionType.Semantic
											? {
													type: "file",
													uri: a.URI.from(K.uri),
													fileName: (0, m.$sc)(
														a.URI.revive(K.uri)?.fsPath ?? "",
													),
													labelMatches: K.labelMatches,
													descriptionMatches: K.descriptionMatches,
												}
											: K.type === p.EverythingSearchOptionType.Notepad
												? {
														type: "notepad",
														id: K.notepadId,
														name: K.name,
														labelMatches: K.labelMatches,
														descriptionMatches: K.descriptionMatches,
													}
												: void 0,
									)
									.filter(u.$tg),
							];
						A(G);
					});
					const R = (0, C.createMemo)(() => {
							const U = S.getBubbleData(y(), $());
							if (!U || U.type !== h.BubbleType.USER_CHAT) return [];
							const z = U.fileSelections ?? [],
								F = new Set(z.map((q) => a.URI.revive(q.uri).toString())),
								x = U.notepads ?? [],
								H = new Set(x.map((q) => q.notepadId));
							return N().map((q) => ({
								id: q.type === "file" ? q.uri.toString() : q.id,
								item: q,
								render: () =>
									q.type === "file"
										? {
												title:
													v.customEditorLabelService.getName(
														a.URI.revive(q.uri),
													) ?? q.fileName,
												subtitle: `${(0, m.$rc)(v.workspaceContextService.asRelativePath(q.uri))}/`,
												isAdded: F.has(q.uri.toString()),
												icon: (0, E.createComponent)(g.$k$b, {
													get fileName() {
														return q.fileName;
													},
													get workspaceContextService() {
														return v.workspaceContextService;
													},
													get modelService() {
														return v.modelService;
													},
													get languageService() {
														return v.languageService;
													},
												}),
												titleHighlights: q.labelMatches,
												subtitleHighlights: q.descriptionMatches,
											}
										: {
												title: q.name,
												subtitle: "Notepad",
												isAdded: H.has(q.id),
												icon: (() => {
													const V = s();
													return (
														V.style.setProperty("opacity", "0.7"),
														V.style.setProperty("padding-right", "6px"),
														(0, w.effect)(() =>
															(0, i.className)(
																V,
																r.ThemeIcon.asClassName(d.$ak.notebook),
															),
														),
														V
													);
												})(),
												titleHighlights: q.labelMatches,
												subtitleHighlights: q.descriptionMatches,
											},
								renderPreview:
									q.type === "file" ? () => (0, b.$7bc)(q.uri) : void 0,
							}));
						}),
						O = (U) => {
							U.type === "file"
								? I.addContext({
										tabId: y(),
										bubbleId: $(),
										contextType: "fileSelections",
										value: { uri: U.uri, isCurrentFile: !1 },
										shouldShowPreview: !1,
									})
								: I.addContext({
										tabId: y(),
										bubbleId: $(),
										contextType: "notepads",
										value: { notepadId: U.id, isCurrentNotepad: !1 },
										shouldShowPreview: !1,
									});
						},
						B = (U) => {
							const z = S.getBubbleData(y(), $());
							if (!(!z || z.type !== h.BubbleType.USER_CHAT))
								if (U.type === "file") {
									const F = z.fileSelections.findIndex(
										(x) => a.URI.revive(x.uri).toString() === U.uri.toString(),
									);
									F !== -1 &&
										I.removeContext({
											tabId: y(),
											bubbleId: $(),
											contextType: "fileSelections",
											index: F,
										});
								} else {
									const F = z.notepads?.findIndex((x) => x.notepadId === U.id);
									F !== -1 &&
										I.removeContext({
											tabId: y(),
											bubbleId: $(),
											contextType: "notepads",
											index: F,
										});
								}
						};
					return () => [];
				}
			},
		)

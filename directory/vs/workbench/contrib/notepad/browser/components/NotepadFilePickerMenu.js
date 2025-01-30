import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/path.js';
import '../../../../../base/common/uri.js';
import '../../../controlCommon/browser/solid.js';
import '../../../ui/browser/pickerMenu/PickerMenu.js';
import '../../../ui/browser/aiInput/plugins/mentions/pureIcon.js';
import '../../../ui/browser/hooks/useAllFilesSearch.js';
import '../../../ui/browser/utils.js';
import '../../../ui/browser/pickerMenu/renderFolderStructurePickerMenuPreview.js';
import '../../../ui/browser/hooks/useEverythingSearch/useEverythingSearch.js';
import '../../../ui/browser/hooks/useEverythingSearch/types.js';
define(
			de[4324],
			he([1, 0, 2, 13, 54, 9, 36, 1982, 156, 1996, 476, 860, 1071, 444]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*solid*/,
 w /*path*/,
 E /*uri*/,
 C /*solid*/,
 d /*PickerMenu*/,
 m /*pureIcon*/,
 r /*useAllFilesSearch*/,
 u /*utils*/,
 a /*renderFolderStructurePickerMenuPreview*/,
 h /*useEverythingSearch*/,
 c /*types*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$kAc = n);
				function n(g) {
					const p = (0, C.$odc)(),
						[o, f] = (0, i.createSignal)(""),
						{ options: b } = (0, h.$1_b)(o, () => [
							c.EverythingSearchOptionType.File,
						]),
						[s, l] = (0, i.createSignal)(-1),
						{ allFiles: y, error: $ } = (0, r.$1bc)(() => o()),
						[v, S] = (0, i.createSignal)([]);
					(0, i.createEffect)(() => {
						const k = g.notepadData.context.fileSelections ?? [],
							L = new Set(k.map((N) => E.URI.revive(N.uri).toString())),
							D = b()
								.filter(
									(N) =>
										N.type === c.EverythingSearchOptionType.File &&
										N.uri &&
										!L.has(N.uri.toString()),
								)
								.map((N) => ({
									uri: E.URI.from(N.uri),
									fileName: (0, w.$sc)(E.URI.revive(N.uri)?.fsPath ?? ""),
									labelMatches: N.labelMatches,
									descriptionMatches: N.descriptionMatches,
								})),
							M = [
								...k.map((N) => ({
									uri: E.URI.revive(N.uri),
									fileName: (0, w.$sc)(E.URI.revive(N.uri).fsPath),
								})),
								...D,
							];
						S(M);
					});
					const I = (0, i.createMemo)(() => {
							const k = v(),
								L = g.notepadData.context.fileSelections ?? [];
							return k.map((D) => ({
								id: D.uri.toString(),
								item: D,
								title: D.fileName,
								subtitle: p.workspaceContextService.asRelativePath(D.uri),
								isAdded: L.some(
									(M) => E.URI.revive(M.uri).toString() === D.uri.toString(),
								),
								icon: (0, t.createComponent)(m.$k$b, {
									get fileName() {
										return D.fileName;
									},
									get workspaceContextService() {
										return p.workspaceContextService;
									},
									get modelService() {
										return p.modelService;
									},
									get languageService() {
										return p.languageService;
									},
								}),
								titleHighlights: D.labelMatches,
								subtitleHighlights: D.descriptionMatches,
								renderPreview: () => (0, a.$7bc)(D.uri),
							}));
						}),
						T = (k) => {
							p.notepadService.addContext(g.notepadData.id, "fileSelections", {
								uri: k.uri,
							});
						},
						P = (k) => {
							const L = g.notepadData.context.fileSelections?.findIndex((D) =>
								(0, E.$Ac)(D.uri, k.uri),
							);
							p.notepadService.removeContext(
								g.notepadData.id,
								"fileSelections",
								L,
							);
						};
					return (0, t.createComponent)(d.$ubc, {
						get position() {
							return g.position;
						},
						get close() {
							return g.close;
						},
						get nonBlockingRoot() {
							return g.nonBlockingRoot;
						},
						get items() {
							return I();
						},
						onItemAdd: T,
						onItemRemove: P,
						onSearch: f,
						get selectedIndex() {
							return s();
						},
						setSelectedIndex: l,
						anchor: "bottom-right",
						get error() {
							return $() ?? "";
						},
						get height() {
							return (0, u.$Kac)() ? 300 : void 0;
						},
					});
				}
			},
		),
		
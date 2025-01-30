import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../common/editor.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/common/services/model.js';
import '../../../../editor/common/languages/language.js';
import '../../../services/textfile/common/textfiles.js';
import '../../../../platform/contextkey/common/contextkeys.js';
import '../../../../base/common/event.js';
import '../../../../nls.js';
define(
			de[220],
			he([1, 0, 44, 22, 8, 3, 67, 61, 85, 179, 6, 4]),
			function (ce /*require*/,
 e /*exports*/,
 t /*editor*/,
 i /*files*/,
 w /*contextkey*/,
 E /*lifecycle*/,
 C /*model*/,
 d /*language*/,
 m /*textfiles*/,
 r /*contextkeys*/,
 u /*event*/,
 a /*nls*/) {
				"use strict";
				var h;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$UUb =
						e.$TUb =
						e.LexicographicOptions =
						e.UndoConfirmLevel =
						e.SortOrder =
						e.$SUb =
						e.$RUb =
						e.$QUb =
						e.$PUb =
						e.$OUb =
						e.$NUb =
						e.$MUb =
						e.$LUb =
						e.$KUb =
						e.$JUb =
						e.$IUb =
						e.$HUb =
						e.$GUb =
						e.$FUb =
						e.$EUb =
						e.$DUb =
						e.$CUb =
						e.$BUb =
						e.$AUb =
						e.$zUb =
						e.$yUb =
						e.$xUb =
						e.$wUb =
						e.$vUb =
							void 0),
					(e.$vUb = "workbench.view.explorer"),
					(e.$wUb = "workbench.explorer.fileView"),
					(e.$xUb = new w.$5j("explorerViewletVisible", !0, {
						type: "boolean",
						description: (0, a.localize)(7021, null),
					})),
					(e.$yUb = new w.$5j("foldersViewVisible", !0, {
						type: "boolean",
						description: (0, a.localize)(7022, null),
					})),
					(e.$zUb = new w.$5j("explorerResourceIsFolder", !1, {
						type: "boolean",
						description: (0, a.localize)(7023, null),
					})),
					(e.$AUb = new w.$5j("explorerResourceReadonly", !1, {
						type: "boolean",
						description: (0, a.localize)(7024, null),
					})),
					(e.$BUb = e.$AUb.toNegated()),
					(e.$CUb = new w.$5j("explorerResourceAvailableEditorIds", "")),
					(e.$DUb = new w.$5j("explorerResourceIsRoot", !1, {
						type: "boolean",
						description: (0, a.localize)(7025, null),
					})),
					(e.$EUb = new w.$5j("explorerResourceCut", !1, {
						type: "boolean",
						description: (0, a.localize)(7026, null),
					})),
					(e.$FUb = new w.$5j("explorerResourceMoveableToTrash", !1, {
						type: "boolean",
						description: (0, a.localize)(7027, null),
					})),
					(e.$GUb = new w.$5j("filesExplorerFocus", !0, {
						type: "boolean",
						description: (0, a.localize)(7028, null),
					})),
					(e.$HUb = new w.$5j("openEditorsFocus", !0, {
						type: "boolean",
						description: (0, a.localize)(7029, null),
					})),
					(e.$IUb = new w.$5j("explorerViewletFocus", !0, {
						type: "boolean",
						description: (0, a.localize)(7030, null),
					})),
					(e.$JUb = new w.$5j("explorerViewletCompressedFocus", !0, {
						type: "boolean",
						description: (0, a.localize)(7031, null),
					})),
					(e.$KUb = new w.$5j("explorerViewletCompressedFirstFocus", !0, {
						type: "boolean",
						description: (0, a.localize)(7032, null),
					})),
					(e.$LUb = new w.$5j("explorerViewletCompressedLastFocus", !0, {
						type: "boolean",
						description: (0, a.localize)(7033, null),
					})),
					(e.$MUb = new w.$5j("viewHasSomeCollapsibleItem", !1, {
						type: "boolean",
						description: (0, a.localize)(7034, null),
					})),
					(e.$NUb = w.$Kj.and(e.$yUb, e.$GUb, w.$Kj.not(r.$aMb))),
					(e.$OUb = w.$Kj.and(e.$yUb, e.$IUb, w.$Kj.not(r.$aMb))),
					(e.$PUb = "workbench.editors.files.textFileEditor"),
					(e.$QUb = "workbench.editors.files.fileEditorInput"),
					(e.$RUb = "workbench.editors.files.binaryFileEditor"),
					(e.$SUb = "code-text-binary");
				var c;
				(function (f) {
					(f.Default = "default"),
						(f.Mixed = "mixed"),
						(f.FilesFirst = "filesFirst"),
						(f.Type = "type"),
						(f.Modified = "modified"),
						(f.FoldersNestsFiles = "foldersNestsFiles");
				})(c || (e.SortOrder = c = {}));
				var n;
				(function (f) {
					(f.Verbose = "verbose"), (f.Default = "default"), (f.Light = "light");
				})(n || (e.UndoConfirmLevel = n = {}));
				var g;
				(function (f) {
					(f.Default = "default"),
						(f.Upper = "upper"),
						(f.Lower = "lower"),
						(f.Unicode = "unicode");
				})(g || (e.LexicographicOptions = g = {}));
				let p = (h = class extends E.$1c {
					constructor(b, s, l, y) {
						super(),
							(this.b = b),
							(this.c = s),
							(this.f = l),
							(this.g = y),
							(this.a = this.D(new E.$2c()));
					}
					static async open(b, s, l, y, $) {
						await y.openEditor({
							original: { resource: h.h(s, b) },
							modified: { resource: b },
							label: l,
							options: $,
						});
					}
					static h(b, s) {
						return s.with({
							scheme: b,
							query: JSON.stringify({ scheme: s.scheme, query: s.query }),
						});
					}
					static j(b) {
						const { scheme: s, query: l } = JSON.parse(b.query);
						return b.with({ scheme: s, query: l });
					}
					async provideTextContent(b) {
						if (!b.query) return null;
						const s = h.j(b),
							l = await this.m(b);
						if (!this.a.value) {
							const y = new E.$Zc();
							(this.a.value = y),
								y.add(
									this.c.onDidFilesChange(($) => {
										$.contains(s, i.FileChangeType.UPDATED) && this.m(b, !1);
									}),
								),
								l && y.add(u.Event.once(l.onWillDispose)(() => this.a.clear()));
						}
						return l;
					}
					async m(b, s = !0) {
						const l = h.j(b),
							y = await this.b.readStream(l);
						let $ = this.g.getModel(b);
						if ($) this.g.updateModel($, y.value);
						else if (s) {
							const v = this.g.getModel(l);
							let S;
							v
								? (S = this.f.createById(v.getLanguageId()))
								: (S = this.f.createByFilepathOrFirstLine(l)),
								($ = this.g.createModel(y.value, S, b));
						}
						return $;
					}
				});
				(e.$TUb = p),
					(e.$TUb =
						p =
						h =
							Ne([j(0, m.$kZ), j(1, i.$ll), j(2, d.$nM), j(3, C.$QO)], p));
				class o {
					static {
						this.b = 0;
					}
					constructor(b, s) {
						(this.c = b), (this.d = s), (this.a = o.b++);
					}
					get editor() {
						return this.c;
					}
					get group() {
						return this.d;
					}
					get groupId() {
						return this.d.id;
					}
					getId() {
						return `openeditor:${this.groupId}:${this.a}`;
					}
					isPreview() {
						return !this.d.isPinned(this.editor);
					}
					isSticky() {
						return this.d.isSticky(this.editor);
					}
					getResource() {
						return t.$A1.getOriginalUri(this.editor, {
							supportSideBySide: t.SideBySideEditor.PRIMARY,
						});
					}
				}
				e.$UUb = o;
			},
		),
		
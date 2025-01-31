import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/editor/common/editorService.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/workspace/common/workspace.js';
import './aiReader.js';
import './aiReaderEditor.js';
import '../../../../platform/instantiation/common/instantiation.js';
import './components/renderAiReader.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
define(
			de[4201],
			he([1, 0, 3, 20, 66, 18, 41, 31, 25, 788, 1710, 5, 4200, 45]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*extensions*/,
 w /*editorGroupsService*/,
 E /*editorService*/,
 C /*opener*/,
 d /*commands*/,
 m /*workspace*/,
 r /*aiReader*/,
 u /*aiReaderEditor*/,
 a /*instantiation*/,
 h /*renderAiReader*/,
 c /*reactiveStorageService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zZc = void 0);
				let n = class extends t.$1c {
					constructor(p, o, f, b, s, l, y) {
						super(),
							(this.a = p),
							(this.b = o),
							(this.c = f),
							(this.f = b),
							(this.g = s),
							(this.h = l),
							(this.j = y),
							(this.openAsEditor = async () => {
								const $ = this.b.groups,
									v = new u.$qZc();
								for (const I of $)
									if (I.findEditors(v.resource).length > 0) {
										await this.b
											.getGroup(I.id)
											?.openEditor(v, { preserveFocus: !1 });
										return;
									}
								await this.m($.map((I) => I.id));
								let S;
								if (this.b.groups.length > 0) {
									const I = this.b.findGroup({
										location: w.GroupLocation.LAST,
									});
									I && (S = this.b.addGroup(I, w.GroupDirection.RIGHT));
								}
								S
									? await S.openEditor(v, { pinned: !0 })
									: await this.b.activeGroup.openEditor(v, { pinned: !0 });
							}),
							(this.sendAiReaderMessage = async ($) => {
								this.f.executeCommand("cursorExperiments.apiPassThrough", $);
							}),
							(this.processAiReaderMessage = async ($) => {
								const { type: v, value: S } = $;
								switch ((console.log("MAIN THREAD:", $), v)) {
									case "open-file": {
										this.n(
											S.relativeWorkspacePath,
											S.selection
												? {
														startLineNumber:
															S.selection.selectionStartLineNumber,
														startColumn: S.selection.selectionStartColumn,
														endLineNumber: S.selection.positionLineNumber,
														endColumn: S.selection.positionColumn,
													}
												: void 0,
										);
										break;
									}
								}
							}),
							(this.m = async ($) =>
								Promise.all(
									$.map((v) => this.b.getGroup(v)?.closeEditor(new u.$qZc())),
								)),
							(this.n = async ($, v) => {
								let S = this.b.activeGroup;
								if (this.b.groups.length > 1) {
									const I = this.b.findGroup({
										location: w.GroupLocation.LAST,
									});
									I &&
										I.id === this.b.activeGroup.id &&
										(S = this.b.addGroup(I, w.GroupDirection.RIGHT));
								}
								this.c.open(
									v ? (0, C.$8rb)(this.h.resolveRelativePath($), v) : $,
									{
										editorOptions: { revealIfOpened: !0, revealIfVisible: !0 },
									},
								);
							});
					}
					get state() {
						return this.j.nonPersistentStorage.aiReaderState;
					}
					render(p) {
						return (0, h.$yZc)(p, this.a);
					}
				};
				(e.$zZc = n),
					(e.$zZc = n =
						Ne(
							[
								j(0, a.$Li),
								j(1, w.$EY),
								j(2, C.$7rb),
								j(3, d.$ek),
								j(4, E.$IY),
								j(5, m.$Vi),
								j(6, c.$0zb),
							],
							n,
						)),
					(0, i.$lK)(r.$Jcc, n, i.InstantiationType.Delayed);
			},
		)

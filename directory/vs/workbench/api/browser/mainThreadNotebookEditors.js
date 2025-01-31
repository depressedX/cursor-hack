import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/objects.js';
import '../../../base/common/uri.js';
import '../../../platform/configuration/common/configuration.js';
import '../../../platform/editor/common/editor.js';
import '../../contrib/notebook/browser/notebookBrowser.js';
import '../../contrib/notebook/browser/services/notebookEditorService.js';
import '../../services/editor/common/editorGroupColumn.js';
import '../../services/editor/common/editorGroupsService.js';
import '../../services/editor/common/editorService.js';
import '../common/extHost.protocol.js';
define(
			de[3483],
			he([1, 0, 3, 82, 9, 10, 116, 108, 293, 446, 66, 18, 88]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*objects*/,
 w /*uri*/,
 E /*configuration*/,
 C /*editor*/,
 d /*notebookBrowser*/,
 m /*notebookEditorService*/,
 r /*editorGroupColumn*/,
 u /*editorGroupsService*/,
 a /*editorService*/,
 h /*extHost.protocol*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Fpc = void 0);
				class c {
					constructor(p, o) {
						(this.editor = p), (this.disposables = o);
					}
					dispose() {
						this.disposables.dispose();
					}
				}
				let n = class {
					constructor(p, o, f, b, s) {
						(this.e = o),
							(this.f = f),
							(this.g = b),
							(this.h = s),
							(this.a = new t.$Zc()),
							(this.c = new Map()),
							(this.b = p.getProxy(h.$mbb.ExtHostNotebookEditors)),
							this.e.onDidActiveEditorChange(() => this.i(), this, this.a),
							this.g.onDidRemoveGroup(() => this.i(), this, this.a),
							this.g.onDidMoveGroup(() => this.i(), this, this.a);
					}
					dispose() {
						this.a.dispose(), (0, t.$Vc)(this.c.values());
					}
					handleEditorsAdded(p) {
						for (const o of p) {
							const f = new t.$Zc();
							f.add(
								o.onDidChangeVisibleRanges(() => {
									this.b.$acceptEditorPropertiesChanged(o.getId(), {
										visibleRanges: { ranges: o.visibleRanges },
									});
								}),
							),
								f.add(
									o.onDidChangeSelection(() => {
										this.b.$acceptEditorPropertiesChanged(o.getId(), {
											selections: { selections: o.getSelections() },
										});
									}),
								);
							const b = new c(o, f);
							this.c.set(o.getId(), b);
						}
					}
					handleEditorsRemoved(p) {
						for (const o of p) this.c.get(o)?.dispose(), this.c.delete(o);
					}
					i() {
						const p = Object.create(null);
						for (const o of this.e.visibleEditorPanes) {
							const f = (0, d.$eJb)(o);
							f &&
								this.c.has(f.getId()) &&
								(p[f.getId()] = (0, r.$b8)(this.g, o.group));
						}
						(0, i.$zo)(p, this.d) ||
							((this.d = p), this.b.$acceptEditorViewColumns(p));
					}
					async $tryShowNotebookDocument(p, o, f) {
						const b = {
								cellSelections: f.selections,
								preserveFocus: f.preserveFocus,
								pinned: f.pinned,
								activation: f.preserveFocus
									? C.EditorActivation.RESTORE
									: void 0,
								label: f.label,
								override: o,
							},
							s = await this.e.openEditor(
								{ resource: w.URI.revive(p), options: b },
								(0, r.$a8)(this.g, this.h, f.position),
							),
							l = (0, d.$eJb)(s);
						if (l) return l.getId();
						throw new Error(
							`Notebook Editor creation failure for document ${JSON.stringify(p)}`,
						);
					}
					async $tryRevealRange(p, o, f) {
						const b = this.f.getNotebookEditor(p);
						if (!b) return;
						const s = b;
						if (!s.hasModel() || o.start >= s.getLength()) return;
						const l = s.cellAt(o.start);
						switch (f) {
							case h.NotebookEditorRevealType.Default:
								return s.revealCellRangeInView(o);
							case h.NotebookEditorRevealType.InCenter:
								return s.revealInCenter(l);
							case h.NotebookEditorRevealType.InCenterIfOutsideViewport:
								return s.revealInCenterIfOutsideViewport(l);
							case h.NotebookEditorRevealType.AtTop:
								return s.revealInViewAtTop(l);
						}
					}
					$trySetSelections(p, o) {
						const f = this.f.getNotebookEditor(p);
						f &&
							(f.setSelections(o),
							o.length &&
								f.setFocus({ start: o[0].start, end: o[0].start + 1 }));
					}
				};
				(e.$Fpc = n),
					(e.$Fpc = n =
						Ne([j(1, a.$IY), j(2, m.$n5b), j(3, u.$EY), j(4, E.$gj)], n));
			},
		)

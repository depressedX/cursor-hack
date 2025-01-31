import '../../../require.js';
import '../../../exports.js';
import '../../nls.js';
import '../../platform/contextkey/common/contextkey.js';
import '../../platform/keybinding/common/keybinding.js';
import '../../platform/quickinput/common/quickInput.js';
import '../../base/common/lifecycle.js';
import '../../editor/browser/editorBrowser.js';
import '../services/editor/common/editorGroupsService.js';
import '../services/editor/common/editorService.js';
define(
			de[473],
			he([1, 0, 4, 8, 39, 63, 3, 56, 66, 18]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*contextkey*/,
 w /*keybinding*/,
 E /*quickInput*/,
 C /*lifecycle*/,
 d /*editorBrowser*/,
 m /*editorGroupsService*/,
 r /*editorService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$k9b = e.$i9b = e.$h9b = e.$g9b = e.$f9b = e.$e9b = void 0),
					(e.$j9b = u),
					(e.$e9b = "inQuickOpen"),
					(e.$f9b = new i.$5j(e.$e9b, !1, (0, t.localize)(3754, null))),
					(e.$g9b = i.$Kj.has(e.$e9b)),
					(e.$h9b = "inFilesPicker"),
					(e.$i9b = i.$Kj.and(e.$g9b, i.$Kj.has(e.$h9b)));
				function u(h, c) {
					return (n) => {
						const g = n.get(w.$uZ),
							p = n.get(E.$DJ),
							f = { keybindings: g.lookupKeybindings(h) };
						p.navigate(!!c, f);
					};
				}
				let a = class extends C.$1c {
					constructor(c, n) {
						super(),
							(this.c = c),
							(this.f = n),
							(this.a = void 0),
							(this.b = new Set());
					}
					set() {
						if (this.a) return;
						const c = this.c.activeEditorPane;
						c &&
							(this.a = {
								group: c.group,
								editor: c.input,
								state: (0, d.$ctb)(c.getControl())?.saveViewState() ?? void 0,
							});
					}
					async openTransientEditor(c, n) {
						c.options = { ...c.options, transient: !0 };
						const g = await this.c.openEditor(c, n);
						return (
							g?.input &&
								g.input !== this.a?.editor &&
								g.group.isTransient(g.input) &&
								this.b.add(g.input),
							g
						);
					}
					async restore() {
						if (this.a) {
							for (const c of this.b)
								if (!c.isDirty())
									for (const n of this.f.groups)
										n.isTransient(c) &&
											(await n.closeEditor(c, { preserveFocus: !0 }));
							await this.a.group.openEditor(this.a.editor, {
								viewState: this.a.state,
								preserveFocus: !0,
							}),
								this.reset();
						}
					}
					reset() {
						(this.a = void 0), this.b.clear();
					}
					dispose() {
						super.dispose(), this.reset();
					}
				};
				(e.$k9b = a), (e.$k9b = a = Ne([j(0, r.$IY), j(1, m.$EY)], a));
			},
		)

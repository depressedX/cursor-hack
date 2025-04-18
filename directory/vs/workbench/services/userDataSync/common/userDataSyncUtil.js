import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/userDataSync/common/userDataSync.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../editor/common/services/textResourceConfiguration.js';
define(
			de[3796],
			he([1, 0, 39, 150, 20, 42, 125]),
			function (ce /*require*/,
 e /*exports*/,
 t /*keybinding*/,
 i /*userDataSync*/,
 w /*extensions*/,
 E /*resolverService*/,
 C /*textResourceConfiguration*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let d = class {
					constructor(r, u, a, h) {
						(this.a = r), (this.b = u), (this.c = a), (this.d = h);
					}
					async resolveDefaultCoreIgnoredSettings() {
						return (0, i.$JRb)(!0);
					}
					async resolveUserBindings(r) {
						const u = {};
						for (const a of r)
							u[a] = this.a
								.resolveUserBinding(a)
								.map((h) => h.getUserSettingsLabel())
								.join(" ");
						return u;
					}
					async resolveFormattingOptions(r) {
						try {
							const u = await this.b.createModelReference(r),
								{ insertSpaces: a, tabSize: h } =
									u.object.textEditorModel.getOptions(),
								c = u.object.textEditorModel.getEOL();
							return u.dispose(), { eol: c, insertSpaces: a, tabSize: h };
						} catch {}
						return {
							eol: this.c.getEOL(r),
							insertSpaces: !!this.d.getValue(r, "editor.insertSpaces"),
							tabSize: this.d.getValue(r, "editor.tabSize"),
						};
					}
				};
				(d = Ne([j(0, t.$uZ), j(1, E.$MO), j(2, C.$YO), j(3, C.$XO)], d)),
					(0, w.$lK)(i.$8Rb, d, w.InstantiationType.Delayed);
			},
		)

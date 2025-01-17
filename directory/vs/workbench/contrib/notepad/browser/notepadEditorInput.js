import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../common/editor/editorInput.js';
import '../../../../base/common/codicons.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../base/common/lifecycle.js';
import './notepad.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/network.js';
define(
			de[1744],
			he([1, 0, 223, 14, 45, 3, 467, 9, 23]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$7zc = e.$6zc = void 0);
				class r extends t.$LO {
					static {
						this.TypeID = "workbench.input.notepad";
					}
					static {
						this.EditorID = "workbench.editor.notepad";
					}
					constructor(h) {
						super(), (this.notepad = h);
					}
					get typeId() {
						return r.TypeID;
					}
					get editorId() {
						return r.EditorID;
					}
					get resource() {
						return d.URI.from({
							scheme: m.Schemas.notepad,
							path: this.notepad.id,
						});
					}
					setName(h) {
						(this.notepad.name = h), this.f.fire();
					}
					getName() {
						return this.notepad.name || "Untitled Notepad";
					}
					getIcon() {
						return i.$ak.book;
					}
					static create(h) {
						return new r(h);
					}
					async resolve() {
						return null;
					}
					toJSON() {
						return { notepadId: this.notepad.id };
					}
					toUntyped() {
						return { resource: this.resource, options: { override: r.TypeID } };
					}
					matches(h) {
						return super.matches(h)
							? !0
							: h instanceof r
								? h.notepad.id === this.notepad.id
								: !1;
					}
				}
				e.$6zc = r;
				let u = class extends E.$1c {
					constructor(h, c) {
						super(), (this.a = h), (this.b = c);
					}
					canSerialize(h) {
						return h instanceof r;
					}
					serialize(h) {
						if (h instanceof r) return JSON.stringify(h.toJSON());
					}
					deserialize(h, c) {
						const { notepadId: n } = JSON.parse(c),
							g = this.a.getNotepadData(n);
						if (g) return r.create(g);
					}
				};
				(e.$7zc = u), (e.$7zc = u = Ne([j(0, C.$y9b), j(1, w.$0zb)], u));
			},
		),
		
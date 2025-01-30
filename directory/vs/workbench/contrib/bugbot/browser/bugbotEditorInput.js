import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../common/editor/editorInput.js';
import '../../../../base/common/codicons.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../base/common/lifecycle.js';
import './bugbotDataService.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/network.js';
define(
			de[1719],
			he([1, 0, 223, 14, 45, 3, 977, 9, 23]),
			function (ce /*require*/,
 e /*exports*/,
 t /*editorInput*/,
 i /*codicons*/,
 w /*reactiveStorageService*/,
 E /*lifecycle*/,
 C /*bugbotDataService*/,
 d /*uri*/,
 m /*network*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$kzc = e.$jzc = void 0);
				class r extends t.$LO {
					static {
						this.TypeID = "workbench.input.bugbot";
					}
					static {
						this.EditorID = "workbench.editor.bugbot";
					}
					constructor(h) {
						super(), (this.bugbot = h);
					}
					get typeId() {
						return r.TypeID;
					}
					get editorId() {
						return r.EditorID;
					}
					get resource() {
						return d.URI.from({
							scheme: m.Schemas.bugbot,
							path: this.bugbot.bugbotId,
						});
					}
					getName() {
						return `Bug Report ${new Date(this.bugbot.createdAt).toLocaleString()}`;
					}
					getIcon() {
						return i.$ak.bug;
					}
					static create(h) {
						return new r(h);
					}
					async resolve() {
						return null;
					}
					toJSON() {
						return { bugbotId: this.bugbot.bugbotId };
					}
					toUntyped() {
						return { resource: this.resource, options: { override: r.TypeID } };
					}
					matches(h) {
						return super.matches(h)
							? !0
							: h instanceof r
								? h.bugbot.bugbotId === this.bugbot.bugbotId
								: !1;
					}
				}
				e.$jzc = r;
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
						const { bugbotId: n } = JSON.parse(c),
							g = this.a.getBugBotData(n);
						if (g) return r.create(g);
					}
				};
				(e.$kzc = u), (e.$kzc = u = Ne([j(0, C.$ddc), j(1, w.$0zb)], u));
			},
		),
		
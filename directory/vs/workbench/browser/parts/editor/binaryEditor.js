import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/event.js';
import '../../../common/editor/binaryEditorModel.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/files/common/files.js';
import './editorPlaceholder.js';
define(
			de[1336],
			he([1, 0, 4, 6, 1225, 21, 22, 1914]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*event*/,
 w /*binaryEditorModel*/,
 E /*storage*/,
 C /*files*/,
 d /*editorPlaceholder*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$puc = void 0);
				let m = class extends d.$muc {
					constructor(u, a, h, c, n, g) {
						super(u, a, c, n, g),
							(this.cb = h),
							(this.r = this.D(new i.$re())),
							(this.onDidChangeMetadata = this.r.event),
							(this.s = this.D(new i.$re())),
							(this.onDidOpenInPlace = this.s.event);
					}
					getTitle() {
						return this.input
							? this.input.getName()
							: (0, t.localize)(3064, null);
					}
					async m(u, a) {
						const h = await u.resolve();
						if (!(h instanceof w.$mec))
							throw new Error("Unable to open file as binary");
						const c = h.getSize();
						return (
							this.eb(typeof c == "number" ? C.$Tl.formatSize(c) : ""),
							{
								icon: "$(warning)",
								label: (0, t.localize)(3065, null),
								actions: [
									{
										label: (0, t.localize)(3066, null),
										run: async () => {
											await this.cb.openInternal(u, a), this.s.fire();
										},
									},
								],
							}
						);
					}
					eb(u) {
						(this.u = u), this.r.fire();
					}
					getMetadata() {
						return this.u;
					}
				};
				(e.$puc = m), (e.$puc = m = Ne([j(5, E.$lq)], m));
			},
		),
		
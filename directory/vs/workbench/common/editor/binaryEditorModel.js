import '../../../../require.js';
import '../../../../exports.js';
import './editorModel.js';
import '../../../platform/files/common/files.js';
import '../../../base/common/mime.js';
define(de[1225], he([1, 0, 416, 22, 266]), function (ce /*require*/,
 e /*exports*/,
 t /*editorModel*/,
 i /*files*/,
 w /*mime*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$mec = void 0);
			let E = class extends t.$PO {
				constructor(d, m, r) {
					super(),
						(this.resource = d),
						(this.g = m),
						(this.j = r),
						(this.a = w.$EK.binary);
				}
				getName() {
					return this.g;
				}
				getSize() {
					return this.b;
				}
				getMime() {
					return this.a;
				}
				getETag() {
					return this.c;
				}
				async resolve() {
					if (this.j.hasProvider(this.resource)) {
						const d = await this.j.stat(this.resource);
						(this.c = d.etag), typeof d.size == "number" && (this.b = d.size);
					}
					return super.resolve();
				}
			};
			(e.$mec = E), (e.$mec = E = Ne([j(2, i.$ll)], E));
		})

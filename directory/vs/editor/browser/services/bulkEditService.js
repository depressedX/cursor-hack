import '../../../../require.js';
import '../../../../exports.js';
import '../../../platform/instantiation/common/instantiation.js';
import '../../../base/common/uri.js';
import '../../../base/common/types.js';
define(de[199], he([1, 0, 5, 9, 28]), function (ce /*require*/,
 e /*exports*/,
 t /*instantiation*/,
 i /*uri*/,
 w /*types*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$uzb = e.$tzb = e.$szb = e.$rzb = void 0),
				(e.$rzb = (0, t.$Mi)("IWorkspaceEditService"));
			class E {
				constructor(r) {
					this.metadata = r;
				}
				static convert(r) {
					return r.edits.map((u) => {
						if (C.is(u)) return C.lift(u);
						if (d.is(u)) return d.lift(u);
						throw new Error("Unsupported edit");
					});
				}
			}
			e.$szb = E;
			class C extends E {
				static is(r) {
					return r instanceof C
						? !0
						: (0, w.$ng)(r) &&
								i.URI.isUri(r.resource) &&
								(0, w.$ng)(r.textEdit);
				}
				static lift(r) {
					return r instanceof C
						? r
						: new C(r.resource, r.textEdit, r.versionId, r.metadata);
				}
				constructor(r, u, a = void 0, h) {
					super(h),
						(this.resource = r),
						(this.textEdit = u),
						(this.versionId = a);
				}
			}
			e.$tzb = C;
			class d extends E {
				static is(r) {
					return r instanceof d
						? !0
						: (0, w.$ng)(r) && (!!r.newResource || !!r.oldResource);
				}
				static lift(r) {
					return r instanceof d
						? r
						: new d(r.oldResource, r.newResource, r.options, r.metadata);
				}
				constructor(r, u, a = {}, h) {
					super(h),
						(this.oldResource = r),
						(this.newResource = u),
						(this.options = a);
				}
			}
			e.$uzb = d;
		}),
		
import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/buffer.js';
import '../../../base/common/uuid.js';
import '../../storage/common/storage.js';
define(de[678], he([1, 0, 76, 47, 21]), function (ce /*require*/,
 e /*exports*/,
 t /*buffer*/,
 i /*uuid*/,
 w /*storage*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.getServiceMachineId = E);
			async function E(C, d, m) {
				let r =
					(m &&
						m.get("storage.serviceMachineId", w.StorageScope.APPLICATION)) ||
					null;
				if (r) return r;
				try {
					const a = (
						await d.readFile(C.serviceMachineIdResource)
					).value.toString();
					r = (0, i.$8g)(a) ? a : null;
				} catch {
					r = null;
				}
				if (!r) {
					r = (0, i.$9g)();
					try {
						await d.writeFile(C.serviceMachineIdResource, t.$Te.fromString(r));
					} catch {}
				}
				return (
					m?.store(
						"storage.serviceMachineId",
						r,
						w.StorageScope.APPLICATION,
						w.StorageTarget.MACHINE,
					),
					r
				);
			}
		})

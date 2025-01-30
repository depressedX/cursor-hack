import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/storage/common/storageService.js';
define(de[3650], he([1, 0, 2901]), function (ce /*require*/,
 e /*exports*/,
 t /*storageService*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Pcd = void 0);
			class i extends t.$J9c {
				constructor(E, C, d, m, r) {
					super(
						E,
						{
							currentProfile: C.currentProfile,
							defaultProfile: d.defaultProfile,
						},
						m,
						r,
					),
						(this.pb = C),
						this.qb();
				}
				qb() {
					this.D(
						this.pb.onDidChangeCurrentProfile((E) => E.join(this.U(E.profile))),
					);
				}
			}
			e.$Pcd = i;
		}),
		
import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/objects.js';
import '../../../../base/common/themables.js';
import './userDataProfile.js';
define(
			de[3791],
			he([1, 0, 15, 6, 3, 82, 26, 133]),
			function (ce /*require*/,
 e /*exports*/,
 t /*async*/,
 i /*event*/,
 w /*lifecycle*/,
 E /*objects*/,
 C /*themables*/,
 d /*userDataProfile*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$R3c = void 0);
				class m extends w.$1c {
					get currentProfile() {
						return this.b;
					}
					constructor(u) {
						super(),
							(this.a = this.D(new i.$re())),
							(this.onDidChangeCurrentProfile = this.a.event),
							(this.b = u);
					}
					async updateCurrentProfile(u) {
						if ((0, E.$zo)(this.b, u)) return;
						const a = this.b;
						this.b = u;
						const h = [];
						this.a.fire({
							previous: a,
							profile: u,
							join(c) {
								h.push(c);
							},
						}),
							await t.Promises.settled(h);
					}
					getShortName(u) {
						return !u.isDefault &&
							u.shortName &&
							C.ThemeIcon.fromId(u.shortName)
							? u.shortName
							: `$(${d.$X8.id})`;
					}
				}
				e.$R3c = m;
			},
		),
		
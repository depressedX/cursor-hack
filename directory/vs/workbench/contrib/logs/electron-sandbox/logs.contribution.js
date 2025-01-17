import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/action/common/actionCommonCategories.js';
import '../../../../platform/actions/common/actions.js';
import './logsActions.js';
import '../../../../platform/instantiation/common/instantiation.js';
define(de[3289], he([1, 0, 99, 11, 3288, 5]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(0, i.$4X)(
					class extends i.$3X {
						constructor() {
							super({
								id: w.$Rfd.ID,
								title: w.$Rfd.TITLE,
								category: t.$ck.Developer,
								f1: !0,
							});
						}
						run(C) {
							return C.get(E.$Li)
								.createInstance(w.$Rfd, w.$Rfd.ID, w.$Rfd.TITLE.value)
								.run();
						}
					},
				),
				(0, i.$4X)(
					class extends i.$3X {
						constructor() {
							super({
								id: w.$Sfd.ID,
								title: w.$Sfd.TITLE,
								category: t.$ck.Developer,
								f1: !0,
							});
						}
						run(C) {
							return C.get(E.$Li)
								.createInstance(w.$Sfd, w.$Sfd.ID, w.$Sfd.TITLE.value)
								.run();
						}
					},
				);
		}),
		
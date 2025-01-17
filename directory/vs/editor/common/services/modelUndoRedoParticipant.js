import '../../../../require.js';
import '../../../../exports.js';
import './model.js';
import './resolverService.js';
import '../../../base/common/lifecycle.js';
import '../../../platform/undoRedo/common/undoRedo.js';
import '../model/editStack.js';
define(
			de[2875],
			he([1, 0, 67, 42, 3, 155, 780]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$yvc = void 0);
				let d = class extends w.$1c {
					constructor(r, u, a) {
						super(),
							(this.a = r),
							(this.b = u),
							(this.c = a),
							this.D(
								this.a.onModelRemoved((h) => {
									const c = this.c.getElements(h.uri);
									if (!(c.past.length === 0 && c.future.length === 0)) {
										for (const n of c.past)
											n instanceof C.$xU && n.setDelegate(this);
										for (const n of c.future)
											n instanceof C.$xU && n.setDelegate(this);
									}
								}),
							);
					}
					prepareUndoRedo(r) {
						const u = r.getMissingModels();
						if (u.length === 0) return w.$1c.None;
						const a = u.map(async (h) => {
							try {
								return await this.b.createModelReference(h);
							} catch {
								return w.$1c.None;
							}
						});
						return Promise.all(a).then((h) => ({
							dispose: () => (0, w.$Vc)(h),
						}));
					}
				};
				(e.$yvc = d),
					(e.$yvc = d = Ne([j(0, t.$QO), j(1, i.$MO), j(2, E.$GN)], d));
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	
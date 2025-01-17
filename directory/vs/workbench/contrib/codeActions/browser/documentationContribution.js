import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/hierarchicalKind.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/common/services/languageFeatures.js';
import '../../../../editor/contrib/codeAction/common/types.js';
import '../../../../platform/contextkey/common/contextkey.js';
define(
			de[3018],
			he([1, 0, 318, 3, 69, 291, 8]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$31c = void 0);
				let d = class extends i.$1c {
					constructor(r, u, a) {
						super(),
							(this.c = u),
							(this.a = []),
							(this.b = { actions: [], dispose: () => {} }),
							this.D(a.codeActionProvider.register("*", this)),
							r.setHandler((h) => {
								this.a = [];
								for (const c of h)
									if (c.value.refactoring)
										for (const n of c.value.refactoring) {
											const g = C.$Kj.deserialize(n.when);
											g &&
												this.a.push({
													title: n.title,
													when: g,
													command: n.command,
												});
										}
							});
					}
					async provideCodeActions(r, u, a, h) {
						return this.b;
					}
					_getAdditionalMenuItems(r, u) {
						return r.only !== E.$GAb.Refactor.value &&
							!u.some(
								(a) => a.kind && E.$GAb.Refactor.contains(new t.$1L(a.kind)),
							)
							? []
							: this.a
									.filter((a) => this.c.contextMatchesRules(a.when))
									.map((a) => ({ id: a.command, title: a.title }));
					}
				};
				(e.$31c = d), (e.$31c = d = Ne([j(1, C.$6j), j(2, w.$k3)], d));
			},
		),
		
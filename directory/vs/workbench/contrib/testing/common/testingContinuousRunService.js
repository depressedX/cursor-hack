import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/storage/common/storage.js';
import './storedValue.js';
import './testingContextKeys.js';
import './testService.js';
import '../../../../base/common/event.js';
import './testId.js';
import '../../../../base/common/prefixTree.js';
import './testProfileService.js';
import '../../../../base/common/arrays.js';
define(
			de[1268],
			he([1, 0, 33, 3, 8, 5, 21, 515, 380, 379, 6, 259, 743, 420, 24]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$NLc = e.$MLc = void 0),
					(n = mt(n)),
					(e.$MLc = (0, E.$Mi)("testingContinuousRunService"));
				let g = class extends i.$1c {
					get lastRunProfileIds() {
						return this.g.get(new Set());
					}
					constructor(o, f, b, s) {
						super(),
							(this.j = o),
							(this.m = s),
							(this.a = new u.$re()),
							(this.f = new h.$j4()),
							(this.onDidChange = this.a.event),
							(this.h = m.TestingContextKeys.isContinuousModeOn.bindTo(b)),
							(this.g = this.D(
								new d.$oqc(
									{
										key: "lastContinuousRunProfileIds",
										scope: C.StorageScope.WORKSPACE,
										target: C.StorageTarget.MACHINE,
										serialization: {
											deserialize: (l) => new Set(JSON.parse(l)),
											serialize: (l) => JSON.stringify([...l]),
										},
									},
									f,
								),
							)),
							this.D(
								(0, i.$Yc)(() => {
									this.b?.dispose();
									for (const l of this.f.values()) l.dispose();
								}),
							);
					}
					isSpecificallyEnabledFor(o) {
						return this.f.size > 0 && this.f.hasKey(a.$k4.fromString(o).path);
					}
					isEnabledForAParentOf(o) {
						return this.b
							? !0
							: this.f.size > 0 &&
									this.f.hasKeyOrParent(a.$k4.fromString(o).path);
					}
					isEnabledForAChildOf(o) {
						return (
							this.f.size > 0 &&
							this.f.hasKeyOrChildren(a.$k4.fromString(o).path)
						);
					}
					isEnabled() {
						return !!this.b || this.f.size > 0;
					}
					start(o, f) {
						const b = new i.$Zc(),
							s = new t.$Ce();
						b.add((0, i.$Yc)(() => s.dispose(!0))),
							f === void 0 && this.h.set(!0),
							f
								? this.f.mutate(
										a.$k4.fromString(f).path,
										(y) => (y?.dispose(), b),
									)
								: (this.b?.dispose(), (this.b = b));
						let l;
						if (o instanceof Array) l = o;
						else {
							const y = () =>
								this.m
									.getGroupDefaultProfiles(o)
									.filter(
										($) =>
											$.supportsContinuousRun &&
											(!f || a.$k4.root(f) === $.controllerId),
									);
							(l = y()),
								b.add(
									this.m.onDidChange(() => {
										n.$yb(y(), l) || this.start(o, f);
									}),
								);
						}
						this.g.store(new Set(l.map((y) => y.profileId))),
							l.length &&
								this.j.startContinuousRun(
									{
										continuous: !0,
										group: l[0].group,
										targets: l.map((y) => ({
											testIds: [f ?? y.controllerId],
											controllerId: y.controllerId,
											profileId: y.profileId,
										})),
									},
									s.token,
								),
							this.a.fire(f);
					}
					stop(o) {
						if (!o) this.b?.dispose(), (this.b = void 0);
						else {
							const f = [...this.f.deleteRecursive(a.$k4.fromString(o).path)];
							for (let b = f.length - 1; b >= 0; b--) f[b].dispose();
						}
						o === void 0 && this.h.set(!1), this.a.fire(o);
					}
				};
				(e.$NLc = g),
					(e.$NLc = g =
						Ne([j(0, r.$sqc), j(1, C.$lq), j(2, w.$6j), j(3, c.$Bqc)], g));
			},
		),
		
define(
			de[381],
			he([1, 0, 214, 15, 6, 288, 3, 47, 8, 5, 32, 380, 420, 421, 1774, 185]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Lqc = e.$Kqc = void 0);
				const p = (f) =>
					f.results.length > 0 && f.results[0].completedAt === void 0;
				e.$Kqc = (0, r.$Mi)("testResultService");
				let o = class extends C.$1c {
					get results() {
						return this.q(), this.g;
					}
					constructor(b, s, l, y) {
						super(),
							(this.u = s),
							(this.w = l),
							(this.y = y),
							(this.f = this.D(new w.$re())),
							(this.g = []),
							(this.h = []),
							(this.j = this.D(new w.$re())),
							(this.onResultsChanged = this.f.event),
							(this.onTestChanged = this.j.event),
							(this.q = (0, E.$hb)(() =>
								this.u.read().then(($) => {
									for (let v = $.length - 1; v >= 0; v--) this.push($[v]);
								}),
							)),
							(this.s = new i.$Yh(() => this.G(), 500)),
							this.D((0, C.$Yc)(() => (0, C.$Vc)(this.h))),
							(this.m = a.TestingContextKeys.isRunning.bindTo(b)),
							(this.n = a.TestingContextKeys.hasAnyResults.bindTo(b));
					}
					getStateById(b) {
						for (const s of this.results) {
							const l = s.getStateById(b);
							if (l && l.computedState !== g.TestResultState.Unset)
								return [s, l];
						}
					}
					createLiveResult(b) {
						if ("targets" in b) {
							const y = (0, d.$9g)();
							return this.push(new c.$O4(y, !0, b, this.y));
						}
						let s;
						b.profile &&
							(s = this.w
								.getControllerProfiles(b.controllerId)
								.find(($) => $.profileId === b.profile.id));
						const l = {
							preserveFocus: b.preserveFocus,
							targets: [],
							exclude: b.exclude,
							continuous: b.continuous,
							group: s?.group ?? g.TestRunProfileBitset.Run,
						};
						return (
							s &&
								l.targets.push({
									profileId: s.profileId,
									controllerId: b.controllerId,
									testIds: b.include,
								}),
							this.push(new c.$O4(b.id, b.persist, l, this.y))
						);
					}
					push(b) {
						if (b.completedAt === void 0) this.results.unshift(b);
						else {
							const l = (0, t.$ob)(
								this.results,
								(y) =>
									y.completedAt !== void 0 && y.completedAt <= b.completedAt,
							);
							this.results.splice(l, 0, b), this.s.schedule();
						}
						this.n.set(!0),
							this.results.length > n.$Fqc &&
								(this.results.pop(), this.h.pop()?.dispose());
						const s = new C.$Zc();
						if ((this.h.push(s), b instanceof c.$O4))
							s.add(b),
								s.add(b.onComplete(() => this.z(b))),
								s.add(b.onChange(this.j.fire, this.j)),
								this.m.set(!0),
								this.f.fire({ started: b });
						else {
							this.f.fire({ inserted: b });
							for (const l of b.tests)
								for (const y of this.results)
									if (y === b) {
										this.j.fire({
											item: l,
											result: b,
											reason: c.TestResultItemChangeReason.ComputedStateChange,
										});
										break;
									} else if (y.getStateById(l.item.extId) !== void 0) break;
						}
						return b;
					}
					getResult(b) {
						return this.results.find((s) => s.id === b);
					}
					clear() {
						const b = [],
							s = [];
						for (const l of this.results)
							l.completedAt !== void 0 ? s.push(l) : b.push(l);
						(this.g = b),
							this.s.schedule(),
							b.length === 0 && this.n.set(!1),
							this.f.fire({ removed: s });
					}
					z(b) {
						this.C(),
							this.F(),
							this.s.schedule(),
							this.f.fire({ completed: b });
					}
					C() {
						this.results.sort(
							(b, s) =>
								(s.completedAt ?? Number.MAX_SAFE_INTEGER) -
								(b.completedAt ?? Number.MAX_SAFE_INTEGER),
						);
					}
					F() {
						this.m.set(p(this));
					}
					async G() {
						await this.q(), this.u.persist(this.results);
					}
				};
				(e.$Lqc = o),
					(e.$Lqc = o =
						Ne([j(0, m.$6j), j(1, n.$Gqc), j(2, h.$Bqc), j(3, u.$km)], o));
			},
		),
		
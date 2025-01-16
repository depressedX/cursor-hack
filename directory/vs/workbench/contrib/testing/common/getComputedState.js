define(de[1773], he([1, 0, 103, 185, 563]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$D4 = void 0);
			const E = (a) => "getOwnDuration" in a,
				C = (a, h, c = !1) => {
					let n = a.getCurrentComputedState(h);
					if (n === void 0 || c) {
						n = a.getOwnState(h) ?? i.TestResultState.Unset;
						let g = 0;
						const p = (0, w.$C4)();
						for (const o of a.getChildren(h)) {
							const f = C(a, o);
							g++,
								p[f]++,
								(n =
									f === i.TestResultState.Skipped &&
									n === i.TestResultState.Unset
										? i.TestResultState.Skipped
										: (0, w.$z4)(n, f));
						}
						g > m && r.set(h, p), a.setComputedState(h, n);
					}
					return n;
				},
				d = (a, h, c = !1) => {
					let n = a.getCurrentComputedDuration(h);
					if (n === void 0 || c) {
						const g = a.getOwnDuration(h);
						if (g !== void 0) n = g;
						else {
							n = void 0;
							for (const p of a.getChildren(h)) {
								const o = d(a, p);
								o !== void 0 && (n = (n || 0) + o);
							}
						}
						a.setComputedDuration(h, n);
					}
					return n;
				},
				m = 64,
				r = new WeakMap(),
				u = (a, h, c, n = !0) => {
					const g = a.getCurrentComputedState(h),
						p = w.$u4[g],
						o = c ?? C(a, h, !0),
						f = w.$u4[o],
						b = new Set();
					if (f !== p) {
						a.setComputedState(h, o), b.add(h);
						let s = g,
							l = o;
						for (const y of a.getParents(h)) {
							const $ = r.get(y);
							$ && ($[s]--, $[l]++);
							const v = a.getCurrentComputedState(y);
							if (f > p) {
								if ((v !== void 0 && w.$u4[v] >= f) || ($ && $[l] > 1)) break;
								a.setComputedState(y, o), b.add(y);
							} else {
								if (v === void 0 || w.$u4[v] > p || ($ && $[s] > 0)) break;
								(l = C(a, y, !0)), a.setComputedState(y, l), b.add(y);
							}
							s = v;
						}
					}
					if (E(a) && n)
						for (const s of t.Iterable.concat(
							t.Iterable.single(h),
							a.getParents(h),
						)) {
							const l = a.getCurrentComputedDuration(s),
								y = d(a, s, !0);
							if (l === y) break;
							a.setComputedDuration(s, y), b.add(s);
						}
					return b;
				};
			e.$D4 = u;
		}),
		define(
			de[421],
			he([1, 0, 15, 76, 6, 149, 3, 77, 12, 4, 32, 1773, 259, 563, 185]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$P4 =
						e.$O4 =
						e.TestResultItemChangeReason =
						e.$N4 =
						e.$M4 =
						e.$L4 =
							void 0);
				const g = {
					buffers: [],
					length: 0,
					onDidWriteData: w.Event.None,
					endPromise: Promise.resolve(),
					getRange: () => i.$Te.alloc(0),
					getRangeIter: () => [],
				};
				class p {
					constructor() {
						(this.a = new w.$re()),
							(this.c = new t.$0h()),
							(this.d = 0),
							(this.onDidWriteData = this.a.event),
							(this.endPromise = this.c.p),
							(this.buffers = []);
					}
					get length() {
						return this.d;
					}
					getRange(S, I) {
						const T = i.$Te.alloc(I);
						let P = 0;
						for (const k of this.getRangeIter(S, I))
							T.buffer.set(k.buffer, P), (P += k.byteLength);
						return P < I ? T.slice(0, P) : T;
					}
					*getRangeIter(S, I) {
						let T = 0,
							P = 0;
						for (const k of this.buffers) {
							if (P + k.byteLength <= S) {
								P += k.byteLength;
								continue;
							}
							const L = Math.max(0, S - P),
								D = Math.min(k.byteLength, L + I - T);
							if (
								(yield k.slice(L, D),
								(T += D - L),
								(P += k.byteLength),
								T === I)
							)
								break;
						}
					}
					append(S, I) {
						const T = this.d;
						let P = S.byteLength;
						if (I === void 0) return this.e(S), { offset: T, length: P };
						let k;
						(function (N) {
							(N[(N.CR = 13)] = "CR"), (N[(N.LF = 10)] = "LF");
						})(k || (k = {}));
						const L = i.$Te.fromString(b(I, !0)),
							D = i.$Te.fromString(b(I, !1));
						(P += L.byteLength + D.byteLength), this.e(L);
						let M = S.byteLength;
						for (; M > 0; M--) {
							const N = S.buffer[M - 1];
							if (N !== k.CR && N !== k.LF) break;
						}
						return (
							this.e(S.slice(0, M)),
							this.e(D),
							this.e(S.slice(M)),
							{ offset: T, length: P }
						);
					}
					e(S) {
						S.byteLength !== 0 &&
							(this.buffers.push(S), this.a.fire(S), (this.d += S.byteLength));
					}
					end() {
						this.c.complete();
					}
				}
				e.$L4 = p;
				const o = function* (v, S) {
					for (const I of h.$k4.fromString(S.item.extId).idsToRoot())
						yield v.getStateById(I.toString());
				};
				e.$M4 = o;
				const f = (v) => {
					for (const S of c.$A4) if (v[S] > 0) return S;
					return n.TestResultState.Unset;
				};
				e.$N4 = f;
				const b = (v, S) =>
						`\x1B]633;SetMark;Id=${(0, n.$o4)(v, S)};Hidden\x07`,
					s = (v, S, I) => ({
						controllerId: v,
						expand: n.TestItemExpandState.NotExpandable,
						item: { ...S },
						children: [],
						tasks: [],
						ownComputedState: n.TestResultState.Unset,
						computedState: n.TestResultState.Unset,
					});
				var l;
				(function (v) {
					(v[(v.ComputedStateChange = 0)] = "ComputedStateChange"),
						(v[(v.OwnStateChange = 1)] = "OwnStateChange"),
						(v[(v.NewMessage = 2)] = "NewMessage");
				})(l || (e.TestResultItemChangeReason = l = {}));
				let y = class extends C.$1c {
					get completedAt() {
						return this.n;
					}
					get tests() {
						return this.j.values();
					}
					getTestById(S) {
						return this.j.get(S)?.item;
					}
					constructor(S, I, T, P) {
						super(),
							(this.id = S),
							(this.persist = I),
							(this.request = T),
							(this.u = P),
							(this.a = this.D(new w.$re())),
							(this.f = this.D(new w.$re())),
							(this.g = this.D(new w.$re())),
							(this.h = this.D(new w.$re())),
							(this.j = new Map()),
							(this.m = 0),
							(this.startedAt = Date.now()),
							(this.onChange = this.h.event),
							(this.onComplete = this.a.event),
							(this.onNewTask = this.f.event),
							(this.onEndTask = this.g.event),
							(this.tasks = []),
							(this.name = (0, r.localize)(
								10945,
								null,
								new Date().toLocaleString(m.$z),
							)),
							(this.counts = (0, c.$C4)()),
							(this.q = {
								getOwnState: (k) => k.ownComputedState,
								getCurrentComputedState: (k) => k.computedState,
								setComputedState: (k, L) => (k.computedState = L),
								getChildren: (k) => k.children,
								getParents: (k) => {
									const { j: L } = this;
									return (function* () {
										const D = h.$k4.fromString(k.item.extId).parentId;
										if (D)
											for (const M of D.idsToRoot()) yield L.get(M.toString());
									})();
								},
							}),
							(this.F = new E.$Y(() => ({
								id: this.id,
								completedAt: this.completedAt,
								tasks: this.tasks.map((k) => ({
									id: k.id,
									name: k.name,
									ctrlId: k.ctrlId,
									hasCoverage: !!k.coverage.get(),
								})),
								name: this.name,
								request: this.request,
								items: [...this.j.values()].map(
									n.TestResultItem.serializeWithoutMessages,
								),
							}))),
							(this.G = new E.$Y(() => ({
								id: this.id,
								completedAt: this.completedAt,
								tasks: this.tasks.map((k) => ({
									id: k.id,
									name: k.name,
									ctrlId: k.ctrlId,
									hasCoverage: !!k.coverage.get(),
								})),
								name: this.name,
								request: this.request,
								items: [...this.j.values()].map(n.TestResultItem.serialize),
							})));
					}
					getStateById(S) {
						return this.j.get(S);
					}
					appendOutput(S, I, T, P) {
						const k =
							S.byteLength > 100
								? S.slice(0, 100).toString() + "\u2026"
								: S.toString();
						let L;
						(P || T) && (L = this.m++);
						const D = this.C(I),
							M = this.tasks[D],
							{ offset: N, length: A } = M.output.append(S, L),
							R = {
								location: T,
								message: k,
								offset: N,
								length: A,
								marker: L,
								type: n.TestMessageType.Output,
							},
							O = P && this.j.get(P);
						O
							? (O.tasks[D].messages.push(R),
								this.h.fire({
									item: O,
									result: this,
									reason: l.NewMessage,
									message: R,
								}))
							: M.otherMessages.push(R);
					}
					addTask(S) {
						this.tasks.push({
							...S,
							coverage: (0, d.observableValue)(this, void 0),
							otherMessages: [],
							output: new p(),
						});
						for (const I of this.tests)
							I.tasks.push({
								duration: void 0,
								messages: [],
								state: n.TestResultState.Unset,
							});
						this.f.fire(this.tasks.length - 1);
					}
					addTestChainToRun(S, I) {
						let T = this.j.get(I[0].extId);
						T || (T = this.z(S, I[0], null));
						for (let P = 1; P < I.length; P++)
							T = this.z(S, I[P], T.item.extId);
					}
					updateState(S, I, T, P) {
						const k = this.j.get(S);
						if (!k) return;
						const L = this.C(I),
							D = c.$B4[k.tasks[L].state],
							M = c.$B4[T];
						(D !== void 0 && (M === void 0 || M < D)) || this.y(k, L, T, P);
					}
					appendMessage(S, I, T) {
						const P = this.j.get(S);
						P &&
							(P.tasks[this.C(I)].messages.push(T),
							this.h.fire({
								item: P,
								result: this,
								reason: l.NewMessage,
								message: T,
							}));
					}
					markTaskComplete(S) {
						const I = this.C(S),
							T = this.tasks[I];
						(T.running = !1),
							T.output.end(),
							this.w(
								n.TestResultState.Unset,
								S,
								(P) =>
									P.state === n.TestResultState.Queued ||
									P.state === n.TestResultState.Running,
							),
							this.g.fire(I);
					}
					markComplete() {
						if (this.n !== void 0)
							throw new Error("cannot complete a test result multiple times");
						for (const S of this.tasks)
							S.running && this.markTaskComplete(S.id);
						(this.n = Date.now()),
							this.a.fire(),
							this.u.publicLog2("test.outcomes", {
								failures:
									this.counts[n.TestResultState.Errored] +
									this.counts[n.TestResultState.Failed],
								passes: this.counts[n.TestResultState.Passed],
								controller: this.request.targets
									.map((S) => S.controllerId)
									.join(","),
							});
					}
					markRetired(S) {
						for (const [I, T] of this.j)
							!T.retired &&
								(!S || S.hasKeyOrParent(h.$k4.fromString(I).path)) &&
								((T.retired = !0),
								this.h.fire({
									reason: l.ComputedStateChange,
									item: T,
									result: this,
								}));
					}
					toJSON() {
						return this.completedAt && this.persist ? this.F.value : void 0;
					}
					toJSONWithMessages() {
						return this.completedAt && this.persist ? this.G.value : void 0;
					}
					w(S, I, T) {
						const P = this.C(I);
						for (const k of this.j.values())
							T(k.tasks[P], k) && this.y(k, P, S);
					}
					y(S, I, T, P) {
						const k = S.ownComputedState,
							L = S.ownDuration,
							D = {
								item: S,
								result: this,
								reason: l.OwnStateChange,
								previousState: k,
								previousOwnDuration: L,
							};
						(S.tasks[I].state = T),
							P !== void 0 &&
								((S.tasks[I].duration = P),
								(S.ownDuration = Math.max(S.ownDuration || 0, P)));
						const M = (0, c.$z4)(...S.tasks.map((N) => N.state));
						if (M === k) {
							P !== L && this.h.fire(D);
							return;
						}
						(S.ownComputedState = M),
							this.counts[k]--,
							this.counts[M]++,
							(0, a.$D4)(this.q, S).forEach((N) =>
								this.h.fire(
									N === S
										? D
										: { item: N, result: this, reason: l.ComputedStateChange },
								),
							);
					}
					z(S, I, T) {
						const P = s(S, I, T);
						if (
							(this.j.set(I.extId, P),
							this.counts[n.TestResultState.Unset]++,
							T && this.j.get(T)?.children.push(P),
							this.tasks.length)
						)
							for (let k = 0; k < this.tasks.length; k++)
								P.tasks.push({
									duration: void 0,
									messages: [],
									state: n.TestResultState.Unset,
								});
						return P;
					}
					C(S) {
						const I = this.tasks.findIndex((T) => T.id === S);
						if (I === -1) throw new Error(`Unknown task ${S} in updateState`);
						return I;
					}
				};
				(e.$O4 = y), (e.$O4 = y = Ne([j(3, u.$km)], y));
				class $ {
					get tests() {
						return this.a.values();
					}
					constructor(S, I, T = !0) {
						(this.c = I),
							(this.d = T),
							(this.counts = (0, c.$C4)()),
							(this.a = new Map()),
							(this.id = I.id),
							(this.completedAt = I.completedAt),
							(this.tasks = I.tasks.map((P, k) => ({
								id: P.id,
								name: P.name || (0, r.localize)(10946, null),
								ctrlId: P.ctrlId,
								running: !1,
								coverage: (0, d.observableValue)(this, void 0),
								output: g,
								otherMessages: [],
							}))),
							(this.name = I.name),
							(this.request = I.request);
						for (const P of I.items) {
							const k = n.TestResultItem.deserialize(S, P);
							this.counts[k.ownComputedState]++, this.a.set(P.item.extId, k);
						}
					}
					getStateById(S) {
						return this.a.get(S);
					}
					toJSON() {
						return this.d ? this.c : void 0;
					}
					toJSONWithMessages() {
						return this.toJSON();
					}
				}
				e.$P4 = $;
			},
		),
		define(
			de[1774],
			he([1, 0, 76, 3, 28, 9, 113, 22, 5, 34, 21, 68, 25, 515, 421]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Jqc = e.$Iqc = e.$Hqc = e.$Gqc = e.$Fqc = void 0),
					(e.$Fqc = 128);
				const g = 16,
					p = 1024 * 128,
					o = 0.2;
				e.$Gqc = (0, m.$Mi)("ITestResultStorage");
				const f = 1;
				let b = class extends i.$1c {
					constructor($, v, S) {
						super(),
							(this.b = $),
							(this.c = v),
							(this.f = S),
							(this.a = this.D(
								new c.$oqc(
									{
										key: "storedTestResults",
										scope: u.StorageScope.WORKSPACE,
										target: u.StorageTarget.MACHINE,
									},
									this.c,
								),
							));
					}
					async read() {
						return (
							await Promise.all(
								this.a.get([]).map(async ({ id: v, rev: S }) => {
									if (S === f)
										try {
											const I = await this.g(v);
											return I ? new n.$P4(this.b, I) : void 0;
										} catch (I) {
											this.f.warn(
												`Error deserializing stored test result ${v}`,
												I,
											);
											return;
										}
								}),
							)
						).filter(w.$tg);
					}
					getResultOutputWriter($) {
						const v = (0, t.$0e)();
						return this.q($, v), v;
					}
					async persist($) {
						const v = new Map(
								this.a.get([]).map(({ id: P, bytes: k }) => [P, k]),
							),
							S = [],
							I = [];
						let T = p;
						for (
							let P = 0;
							P < $.length && P < e.$Fqc && (T > 0 || S.length < g);
							P++
						) {
							const k = $[P],
								L = v.get(k.id);
							if (L !== void 0) {
								v.delete(k.id),
									S.push({ id: k.id, rev: f, bytes: L }),
									(T -= L);
								continue;
							}
							const D = k.toJSON();
							if (!D) continue;
							const M = t.$Te.fromString(JSON.stringify(D));
							I.push(this.n(k.id, D)),
								S.push({ id: k.id, rev: f, bytes: M.byteLength }),
								(T -= M.byteLength);
						}
						for (const P of v.keys()) I.push(this.m(P).catch(() => {}));
						this.a.store(S), await Promise.all(I);
					}
				};
				(e.$Hqc = b),
					(e.$Hqc = b = Ne([j(0, a.$Vl), j(1, u.$lq), j(2, r.$ik)], b));
				class s extends b {
					constructor() {
						super(...arguments), (this.cache = new Map());
					}
					async g($) {
						return Promise.resolve(this.cache.get($));
					}
					n($, v) {
						return this.cache.set($, v), Promise.resolve();
					}
					m($) {
						return this.cache.delete($), Promise.resolve();
					}
					h($) {
						throw new Error("Method not implemented.");
					}
					q($, v) {
						throw new Error("Method not implemented.");
					}
					j($, v, S) {
						throw new Error("Method not implemented.");
					}
				}
				e.$Iqc = s;
				let l = class extends b {
					constructor($, v, S, I, T, P) {
						super($, v, S),
							(this.t = T),
							(this.r = E.URI.joinPath(
								P.workspaceStorageHome,
								I.getWorkspace().id,
								"testResults",
							));
					}
					async g($) {
						const v = await this.t.readFile(this.H($));
						return JSON.parse(v.value.toString());
					}
					n($, v) {
						return this.t.writeFile(
							this.H($),
							t.$Te.fromString(JSON.stringify(v)),
						);
					}
					m($) {
						return this.t.del(this.H($)).catch(() => {});
					}
					async j($, v, S) {
						try {
							const { value: I } = await this.t.readFile(this.I($), {
								position: v,
								length: S,
							});
							return I;
						} catch {
							return t.$Te.alloc(0);
						}
					}
					async h($) {
						try {
							const { value: v } = await this.t.readFileStream(this.I($));
							return v;
						} catch {
							return (0, t.$8e)(t.$Te.alloc(0));
						}
					}
					async q($, v) {
						await this.t.createFile(this.I($), v);
					}
					async persist($) {
						await super.persist($), Math.random() < o && (await this.G());
					}
					async G() {
						const { children: $ } = await this.t.resolve(this.r);
						if (!$) return;
						const v = new Set(
							this.a
								.get([])
								.filter((S) => S.rev === f)
								.map((S) => S.id),
						);
						await Promise.all(
							$.filter((S) => !v.has(S.name.replace(/\.[a-z]+$/, ""))).map(
								(S) => this.t.del(S.resource).catch(() => {}),
							),
						);
					}
					H($) {
						return E.URI.joinPath(this.r, `${$}.json`);
					}
					I($) {
						return E.URI.joinPath(this.r, `${$}.output`);
					}
				};
				(e.$Jqc = l),
					(e.$Jqc = l =
						Ne(
							[
								j(0, a.$Vl),
								j(1, u.$lq),
								j(2, r.$ik),
								j(3, h.$Vi),
								j(4, d.$ll),
								j(5, C.$Ti),
							],
							l,
						));
			},
		),
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
		define(
			de[3183],
			he([1, 0, 6, 103, 3, 3175, 811, 1265, 259, 421, 381, 379, 185]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$_Kc = void 0);
				class c extends C.$7Kc {
					get description() {
						return this.b.map((p) => p.item.label).join(E.$$Kc);
					}
					constructor(p, o, f) {
						super({ ...p, item: { ...p.item } }, o),
							(this.b = f),
							(this.descriptionParts = []),
							this.d();
					}
					update(p) {
						(0, h.$r4)(this.test, p), this.d(p), this.fireChange();
					}
					fireChange() {
						this.e.fire();
					}
					d(p) {
						this.a &&
							(!this.test.item.error || p?.item?.error) &&
							(this.children.delete(this.a), (this.a = void 0)),
							this.test.item.error &&
								!this.a &&
								((this.a = new C.$8Kc(this.test.item.error, this)),
								this.children.add(this.a));
					}
				}
				let n = class extends w.$1c {
					get f() {
						const p = i.Iterable.map(this.g.collection.rootItems, (o) =>
							this.b.get(o.item.extId),
						);
						return i.Iterable.filter(p, (o) => !!o?.children.size);
					}
					constructor(p, o, f) {
						super(),
							(this.lastState = p),
							(this.g = o),
							(this.h = f),
							(this.a = new t.$re()),
							(this.b = new Map()),
							(this.onUpdate = this.a.event),
							this.D(o.onDidProcessDiff((b) => this.j(b))),
							this.D(
								f.onResultsChanged((b) => {
									if ("removed" in b)
										for (const s of this.b.values()) {
											const l = this.h.getStateById(s.test.item.extId)?.[1];
											(s.duration = l?.ownDuration),
												(s.state =
													l?.ownComputedState || h.TestResultState.Unset),
												s.fireChange();
										}
								}),
							),
							this.D(
								f.onTestChanged((b) => {
									if (b.reason === r.TestResultItemChangeReason.NewMessage)
										return;
									let s = b.item;
									if (
										s.ownComputedState === h.TestResultState.Unset ||
										b.result !== f.results[0]
									) {
										const y = f.getStateById(s.item.extId);
										y && (s = y[1]);
									}
									const l = this.b.get(s.item.extId);
									l &&
										((l.retired = !!s.retired),
										(l.state = s.computedState),
										(l.duration = s.ownDuration),
										l.fireChange());
								}),
							);
						for (const b of o.collection.all) this.q(b);
					}
					getElementByTestId(p) {
						return this.b.get(p);
					}
					j(p) {
						for (const o of p)
							switch (o.op) {
								case h.TestDiffOpType.Add: {
									this.q(o.item);
									break;
								}
								case h.TestDiffOpType.Update: {
									this.b.get(o.item.extId)?.update(o.item);
									break;
								}
								case h.TestDiffOpType.Remove: {
									for (const [f, b] of this.b)
										(f === o.itemId || m.$k4.isChild(o.itemId, f)) && this.m(b);
									break;
								}
							}
						p.length !== 0 && this.a.fire();
					}
					applyTo(p) {
						p.setChildren(null, (0, C.$0Kc)(this.lastState, this.f, null), {
							diffIdentityProvider: C.$9Kc,
							diffDepth: 1 / 0,
						});
					}
					expandElement(p, o) {
						p instanceof c &&
							p.test.expand !== h.TestItemExpandState.NotExpandable &&
							this.g.collection.expand(p.test.item.extId, o);
					}
					m(p) {
						this.b.delete(p.test.item.extId), p.parent?.children.delete(p);
						const o = m.$k4.fromString(p.test.item.extId).parentId;
						if (o)
							for (const f of o.idsToRoot()) {
								const b = this.g.collection.getNodeById(f.toString());
								if (b) {
									b.children.size === 0 &&
										!this.b.has(f.toString()) &&
										this.n(o, b);
									break;
								}
							}
					}
					n(p, o) {
						const f = p.isRoot ? null : this.b.get(o.controllerId),
							b = [...p.idsFromRoot()]
								.slice(1, -1)
								.map((y) => this.g.collection.getNodeById(y.toString())),
							s = new c(o, f, b);
						f?.children.add(s),
							this.b.set(s.test.item.extId, s),
							(s.depth === 0 ||
								(0, d.$6Kc)(this.lastState, s.test.item.extId) === !1) &&
								this.expandElement(s, 1 / 0);
						const l = this.h.getStateById(s.test.item.extId)?.[1];
						l &&
							((s.retired = !!l.retired),
							(s.state = l.computedState),
							(s.duration = l.ownDuration));
					}
					q(p) {
						const o = m.$k4.fromString(p.item.extId);
						for (const f of o.idsToRoot())
							if (!f.isRoot) {
								const b = this.b.get(f.toString());
								if (b) {
									this.m(b);
									break;
								}
							}
						this.n(o, p);
					}
				};
				(e.$_Kc = n), (e.$_Kc = n = Ne([j(1, a.$sqc), j(2, u.$Kqc)], n));
			},
		),
		define(
			de[3184],
			he([1, 0, 6, 103, 3, 811, 1265, 1773, 259, 421, 381, 379, 185]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$bLc = void 0);
				const c = {
					getOwnState: (p) =>
						p instanceof E.$7Kc ? p.ownState : h.TestResultState.Unset,
					getCurrentComputedState: (p) => p.state,
					setComputedState: (p, o) => (p.state = o),
					getCurrentComputedDuration: (p) => p.duration,
					getOwnDuration: (p) => (p instanceof E.$7Kc ? p.ownDuration : void 0),
					setComputedDuration: (p, o) => (p.duration = o),
					getChildren: (p) =>
						i.Iterable.filter(p.children.values(), (o) => o instanceof n),
					*getParents(p) {
						for (let o = p.parent; o; o = o.parent) yield o;
					},
				};
				class n extends E.$7Kc {
					get description() {
						return this.test.item.description;
					}
					constructor(o, f, b) {
						super({ ...o, item: { ...o.item } }, f),
							(this.f = b),
							(this.ownState = h.TestResultState.Unset),
							this.g();
					}
					update(o) {
						(0, h.$r4)(this.test, o), this.g(o), this.fireChange();
					}
					fireChange() {
						this.e.fire();
					}
					g(o) {
						this.c &&
							(!this.test.item.error || o?.item?.error) &&
							(this.f(this), this.children.delete(this.c), (this.c = void 0)),
							this.test.item.error &&
								!this.c &&
								((this.c = new E.$8Kc(this.test.item.error, this)),
								this.children.add(this.c),
								this.f(this));
					}
				}
				let g = class extends w.$1c {
					get m() {
						const o = i.Iterable.map(this.q.collection.rootItems, (f) =>
							this.j.get(f.item.extId),
						);
						return i.Iterable.filter(o, (f) => !!f?.children.size);
					}
					constructor(o, f, b) {
						super(),
							(this.lastState = o),
							(this.q = f),
							(this.u = b),
							(this.f = new t.$re()),
							(this.g = new Set()),
							(this.h = new Set()),
							(this.j = new Map()),
							(this.onUpdate = this.f.event),
							this.D(f.onDidProcessDiff((s) => this.w(s))),
							this.D(
								b.onResultsChanged((s) => {
									if ("removed" in s)
										for (const l of [...this.j.values()].sort(
											(y, $) => $.depth - y.depth,
										)) {
											const y = this.u.getStateById(l.test.item.extId)?.[1];
											(l.ownDuration = y?.ownDuration),
												(0, d.$D4)(
													c,
													l,
													y?.ownComputedState ?? h.TestResultState.Unset,
												).forEach(($) => $.fireChange());
										}
								}),
							),
							this.D(
								b.onTestChanged((s) => {
									if (s.reason === r.TestResultItemChangeReason.NewMessage)
										return;
									let l = s.item;
									if (
										l.ownComputedState === h.TestResultState.Unset ||
										s.result !== b.results[0]
									) {
										const S = b.getStateById(l.item.extId);
										S && (l = S[1]);
									}
									const y = this.j.get(l.item.extId);
									if (!y) return;
									const $ =
											s.reason ===
												r.TestResultItemChangeReason.OwnStateChange &&
											s.previousOwnDuration !== l.ownDuration,
										v = y.children.size ? void 0 : l.computedState;
									(y.retired = !!l.retired),
										(y.ownState = l.ownComputedState),
										(y.ownDuration = l.ownDuration),
										y.fireChange(),
										(0, d.$D4)(c, y, v, $).forEach((S) => S.fireChange());
								}),
							);
						for (const s of f.collection.all) this.C(this.y(s));
					}
					getElementByTestId(o) {
						return this.j.get(o);
					}
					w(o) {
						for (const f of o)
							switch (f.op) {
								case h.TestDiffOpType.Add: {
									const b = this.y(f.item);
									this.C(b);
									break;
								}
								case h.TestDiffOpType.Update: {
									const b = f.item,
										s = this.j.get(b.extId);
									if (!s) break;
									const l =
										s.test.expand === h.TestItemExpandState.NotExpandable &&
										b.expand;
									s.update(b), l ? this.g.add(s.parent) : this.h.add(s.parent);
									break;
								}
								case h.TestDiffOpType.Remove: {
									const b = this.j.get(f.itemId);
									if (!b) break;
									const s = b.parent,
										l =
											b.depth === 1 &&
											(s?.children.size === 1 ||
												!i.Iterable.some(this.m, ($, v) => v === 1));
									this.g.add(l ? null : s);
									const y = [[b]];
									for (; y.length; )
										for (const $ of y.pop())
											$ instanceof n && y.push(this.z($));
									s instanceof n &&
										(0, d.$D4)(c, s, void 0, !!s.duration).forEach(($) =>
											$.fireChange(),
										);
								}
							}
						o.length !== 0 && this.f.fire();
					}
					applyTo(o) {
						for (const f of this.g)
							(!f || o.hasElement(f)) &&
								o.setChildren(f, (0, E.$0Kc)(this.lastState, this.m, f), {
									diffIdentityProvider: E.$9Kc,
								});
						for (const f of this.h) (!f || o.hasElement(f)) && o.resort(f, !1);
						this.g.clear(), this.h.clear();
					}
					expandElement(o, f) {
						o instanceof n &&
							o.test.expand !== h.TestItemExpandState.NotExpandable &&
							this.q.collection.expand(o.test.item.extId, f);
					}
					y(o) {
						const f = m.$k4.parentId(o.item.extId),
							b = f ? this.j.get(f) : null;
						return new n(o, b, (s) => this.g.add(s));
					}
					z(o) {
						return (
							o.parent?.children.delete(o),
							this.j.delete(o.test.item.extId),
							o.children
						);
					}
					C(o) {
						o.parent?.children.add(o), this.j.set(o.test.item.extId, o);
						const b =
							o.parent?.children.size === 1 ? o.parent.parent : o.parent;
						this.g.add(b),
							b?.depth === 0 && this.g.add(null),
							(o.depth === 0 ||
								(0, C.$6Kc)(this.lastState, o.test.item.extId) === !1) &&
								this.expandElement(o, 0);
						const s = this.u.getStateById(o.test.item.extId)?.[1];
						s &&
							((o.retired = !!s.retired),
							(o.ownState = s.computedState),
							(o.ownDuration = s.ownDuration),
							(0, d.$D4)(c, o, void 0, !!o.ownDuration).forEach((l) =>
								l.fireChange(),
							));
					}
				};
				(e.$bLc = g), (e.$bLc = g = Ne([j(1, a.$sqc), j(2, u.$Kqc)], g));
			},
		),
		
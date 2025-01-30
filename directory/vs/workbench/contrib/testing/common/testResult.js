import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/buffer.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lazy.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/observable.js';
import '../../../../base/common/platform.js';
import '../../../../nls.js';
import '../../../../platform/telemetry/common/telemetry.js';
import './getComputedState.js';
import './testId.js';
import './testingStates.js';
import './testTypes.js';
define(
			de[421],
			he([1, 0, 15, 76, 6, 149, 3, 77, 12, 4, 32, 1773, 259, 563, 185]),
			function (ce /*require*/,
 e /*exports*/,
 t /*async*/,
 i /*buffer*/,
 w /*event*/,
 E /*lazy*/,
 C /*lifecycle*/,
 d /*observable*/,
 m /*platform*/,
 r /*nls*/,
 u /*telemetry*/,
 a /*getComputedState*/,
 h /*testId*/,
 c /*testingStates*/,
 n /*testTypes*/) {
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
		
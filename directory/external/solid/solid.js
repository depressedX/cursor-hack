import '../../require.js';
import '../../exports.js';
define(de[13], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.sharedConfig = e.DEV = e.$TRACK = e.$PROXY = e.$DEVCOMP = void 0),
				(e.setupScheduler = n),
				(e.enqueue = g),
				(e.requestCallback = p),
				(e.cancelCallback = o),
				(e.flushWork = f),
				(e.workLoop = b),
				(e.setHydrateContext = l),
				(e.nextHydrateContext = y),
				(e.createRoot = V),
				(e.createSignal = G),
				(e.createComputed = K),
				(e.createRenderEffect = J),
				(e.createEffect = W),
				(e.createReaction = X),
				(e.createMemo = Y),
				(e.createResource = ie),
				(e.createDeferred = ne),
				(e.createSelector = ee),
				(e.batch = _),
				(e.untrack = te),
				(e.on = Q),
				(e.onMount = Z),
				(e.onCleanup = se),
				(e.catchError = re),
				(e.onError = le),
				(e.getListener = oe),
				(e.getOwner = ae),
				(e.runWithOwner = pe),
				(e.enableScheduling = $e),
				(e.startTransition = ye),
				(e.useTransition = ue),
				(e.resumeEffects = fe),
				(e.createContext = me),
				(e.useContext = ve),
				(e.children = ge),
				(e.getSuspenseContext = Ce),
				(e.enableExternalSource = Le),
				(e.readSignal = Fe),
				(e.writeSignal = Oe),
				(e.updateComputation = xe),
				(e.runComputation = He),
				(e.createComputation = Ke),
				(e.runTop = Je),
				(e.runUpdates = Te),
				(e.completeUpdates = Ee),
				(e.runQueue = Ie),
				(e.scheduleQueue = Be),
				(e.runUserEffects = Se),
				(e.lookUpstream = ke),
				(e.markDownstream = Ue),
				(e.cleanNode = qe),
				(e.reset = Ae),
				(e.castError = Me),
				(e.runErrors = De),
				(e.handleError = Re),
				(e.lookup = je),
				(e.resolveChildren = Ve),
				(e.createProvider = Ze),
				(e.observable = et),
				(e.from = rt),
				(e.dispose = bt),
				(e.mapArray = nt),
				(e.indexArray = lt),
				(e.enableHydration = gt),
				(e.createComponent = ht),
				(e.trueFn = Rt),
				(e.resolveSource = jt),
				(e.mergeProps = ti),
				(e.splitProps = kt),
				(e.lazy = hi),
				(e.createUniqueId = di),
				(e.For = ze),
				(e.Index = Xe),
				(e.Show = It),
				(e.Switch = Lt),
				(e.Match = xt),
				(e.resetErrorBoundaries = Bt),
				(e.ErrorBoundary = Gt),
				(e.SuspenseList = ei),
				(e.Suspense = mi);
			let t = 1,
				i = !1,
				w = !1,
				E = [],
				C = null,
				d = null,
				m = 5,
				r = 0,
				u = 300,
				a = null,
				h = null;
			const c = 1073741823;
			function n() {
				const Dt = new MessageChannel(),
					Jt = Dt.port2;
				if (
					((a = () => Jt.postMessage(null)),
					(Dt.port1.onmessage = () => {
						if (h !== null) {
							const si = performance.now();
							r = si + m;
							const Zt = !0;
							try {
								h(Zt, si) ? Jt.postMessage(null) : (h = null);
							} catch (ci) {
								throw (Jt.postMessage(null), ci);
							}
						}
					}),
					navigator &&
						navigator.scheduling &&
						navigator.scheduling.isInputPending)
				) {
					const si = navigator.scheduling;
					d = () => {
						const Zt = performance.now();
						return Zt >= r ? (si.isInputPending() ? !0 : Zt >= u) : !1;
					};
				} else d = () => performance.now() >= r;
			}
			function g(Dt, Jt) {
				function si() {
					let Zt = 0,
						ci = Dt.length - 1;
					for (; Zt <= ci; ) {
						const ri = (ci + Zt) >> 1,
							$i = Jt.expirationTime - Dt[ri].expirationTime;
						if ($i > 0) Zt = ri + 1;
						else if ($i < 0) ci = ri - 1;
						else return ri;
					}
					return Zt;
				}
				Dt.splice(si(), 0, Jt);
			}
			function p(Dt, Jt) {
				a || n();
				let si = performance.now(),
					Zt = c;
				Jt && Jt.timeout && (Zt = Jt.timeout);
				const ci = { id: t++, fn: Dt, startTime: si, expirationTime: si + Zt };
				return g(E, ci), !i && !w && ((i = !0), (h = f), a()), ci;
			}
			function o(Dt) {
				Dt.fn = null;
			}
			function f(Dt, Jt) {
				(i = !1), (w = !0);
				try {
					return b(Dt, Jt);
				} finally {
					(C = null), (w = !1);
				}
			}
			function b(Dt, Jt) {
				let si = Jt;
				for (
					C = E[0] || null;
					C !== null && !(C.expirationTime > si && (!Dt || d()));
				) {
					const Zt = C.fn;
					if (Zt !== null) {
						C.fn = null;
						const ci = C.expirationTime <= si;
						Zt(ci), (si = performance.now()), C === E[0] && E.shift();
					} else E.shift();
					C = E[0] || null;
				}
				return C !== null;
			}
			const s = { context: void 0, registry: void 0 };
			e.sharedConfig = s;
			function l(Dt) {
				s.context = Dt;
			}
			function y() {
				return {
					...s.context,
					id: `${s.context.id}${s.context.count++}-`,
					count: 0,
				};
			}
			const $ = (Dt, Jt) => Dt === Jt,
				v = Symbol("solid-proxy");
			e.$PROXY = v;
			const S = Symbol("solid-track");
			e.$TRACK = S;
			const I = Symbol("solid-dev-component");
			e.$DEVCOMP = I;
			const T = { equals: $ };
			let P = null,
				k = Ie;
			const L = 1,
				D = 2,
				M = { owned: null, cleanups: null, context: null, owner: null },
				N = {};
			var A = null;
			let R = null,
				O = null,
				B = null,
				U = null,
				z = null,
				F = null,
				x = 0;
			const [H, q] = G(!1);
			function V(Dt, Jt) {
				const si = U,
					Zt = A,
					ci = Dt.length === 0,
					ri = ci
						? M
						: {
								owned: null,
								cleanups: null,
								context: null,
								owner: Jt === void 0 ? Zt : Jt,
							},
					$i = ci ? Dt : () => Dt(() => te(() => qe(ri)));
				(A = ri), (U = null);
				try {
					return Te($i, !0);
				} finally {
					(U = si), (A = Zt);
				}
			}
			function G(Dt, Jt) {
				Jt = Jt ? Object.assign({}, T, Jt) : T;
				const si = {
						value: Dt,
						observers: null,
						observerSlots: null,
						comparator: Jt.equals || void 0,
					},
					Zt = (ci) => (
						typeof ci == "function" &&
							(R && R.running && R.sources.has(si)
								? (ci = ci(si.tValue))
								: (ci = ci(si.value))),
						Oe(si, ci)
					);
				return [Fe.bind(si), Zt];
			}
			function K(Dt, Jt, si) {
				const Zt = Ke(Dt, Jt, !0, L);
				O && R && R.running ? z.push(Zt) : xe(Zt);
			}
			function J(Dt, Jt, si) {
				const Zt = Ke(Dt, Jt, !1, L);
				O && R && R.running ? z.push(Zt) : xe(Zt);
			}
			function W(Dt, Jt, si) {
				k = Se;
				const Zt = Ke(Dt, Jt, !1, L),
					ci = be && je(A, be.id);
				ci && (Zt.suspense = ci), (Zt.user = !0), F ? F.push(Zt) : xe(Zt);
			}
			function X(Dt, Jt) {
				let si;
				const Zt = Ke(
						() => {
							si ? si() : te(Dt), (si = void 0);
						},
						void 0,
						!1,
						0,
					),
					ci = be && je(A, be.id);
				return (
					ci && (Zt.suspense = ci),
					(Zt.user = !0),
					(ri) => {
						(si = ri), xe(Zt);
					}
				);
			}
			function Y(Dt, Jt, si) {
				si = si ? Object.assign({}, T, si) : T;
				const Zt = Ke(Dt, Jt, !0, 0);
				return (
					(Zt.observers = null),
					(Zt.observerSlots = null),
					(Zt.comparator = si.equals || void 0),
					O && R && R.running ? ((Zt.tState = L), z.push(Zt)) : xe(Zt),
					Fe.bind(Zt)
				);
			}
			function ie(Dt, Jt, si) {
				let Zt, ci, ri;
				(arguments.length === 2 && typeof Jt == "object") ||
				arguments.length === 1
					? ((Zt = !0), (ci = Dt), (ri = Jt || {}))
					: ((Zt = Dt), (ci = Jt), (ri = si || {}));
				let $i = null,
					Wt = N,
					tt = null,
					at = !1,
					pi = !1,
					Li = "initialValue" in ri,
					Di = typeof Zt == "function" && Y(Zt);
				const Ui = new Set(),
					[Wi, Gi] = (ri.storage || G)(ri.initialValue),
					[qi, Oi] = G(void 0),
					[yi, Ai] = G(void 0, { equals: !1 }),
					[li, Vi] = G(Li ? "ready" : "unresolved");
				if (s.context) {
					tt = `${s.context.id}${s.context.count++}`;
					let Xt;
					ri.ssrLoadFrom === "initial"
						? (Wt = ri.initialValue)
						: s.load && (Xt = s.load(tt)) && (Wt = Xt[0]);
				}
				function wi(Xt, $t, ut, Et) {
					return (
						$i === Xt &&
							(($i = null),
							(Li = !0),
							(Xt === Wt || $t === Wt) &&
								ri.onHydrated &&
								queueMicrotask(() => ri.onHydrated(Et, { value: $t })),
							(Wt = N),
							R && Xt && at
								? (R.promises.delete(Xt),
									(at = !1),
									Te(() => {
										(R.running = !0), _t($t, ut);
									}, !1))
								: _t($t, ut)),
						$t
					);
				}
				function _t(Xt, $t) {
					Te(() => {
						$t === void 0 && Gi(() => Xt),
							Vi($t !== void 0 ? "errored" : "ready"),
							Oi($t);
						for (const ut of Ui.keys()) ut.decrement();
						Ui.clear();
					}, !1);
				}
				function ai() {
					const Xt = be && je(A, be.id),
						$t = Wi(),
						ut = qi();
					if (ut !== void 0 && !$i) throw ut;
					return (
						U &&
							!U.user &&
							Xt &&
							K(() => {
								yi(),
									$i &&
										(Xt.resolved && R && at
											? R.promises.add($i)
											: Ui.has(Xt) || (Xt.increment(), Ui.add(Xt)));
							}),
						$t
					);
				}
				function Ft(Xt = !0) {
					if (Xt !== !1 && pi) return;
					pi = !1;
					const $t = Di ? Di() : Zt;
					if (((at = R && R.running), $t == null || $t === !1)) {
						wi($i, te(Wi));
						return;
					}
					R && $i && R.promises.delete($i);
					const ut =
						Wt !== N ? Wt : te(() => ci($t, { value: Wi(), refetching: Xt }));
					return typeof ut != "object" || !(ut && "then" in ut)
						? (wi($i, ut, void 0, $t), ut)
						: (($i = ut),
							(pi = !0),
							queueMicrotask(() => (pi = !1)),
							Te(() => {
								Vi(Li ? "refreshing" : "pending"), Ai();
							}, !1),
							ut.then(
								(Et) => wi(ut, Et, void 0, $t),
								(Et) => wi(ut, void 0, Me(Et), $t),
							));
				}
				return (
					Object.defineProperties(ai, {
						state: { get: () => li() },
						error: { get: () => qi() },
						loading: {
							get() {
								const Xt = li();
								return Xt === "pending" || Xt === "refreshing";
							},
						},
						latest: {
							get() {
								if (!Li) return ai();
								const Xt = qi();
								if (Xt && !$i) throw Xt;
								return Wi();
							},
						},
					}),
					Di ? K(() => Ft(!1)) : Ft(!1),
					[ai, { refetch: Ft, mutate: Gi }]
				);
			}
			function ne(Dt, Jt) {
				let si,
					Zt = Jt ? Jt.timeoutMs : void 0;
				const ci = Ke(
						() => (
							(!si || !si.fn) &&
								(si = p(
									() => $i(() => ci.value),
									Zt !== void 0 ? { timeout: Zt } : void 0,
								)),
							Dt()
						),
						void 0,
						!0,
					),
					[ri, $i] = G(ci.value, Jt);
				return xe(ci), $i(() => ci.value), ri;
			}
			function ee(Dt, Jt = $, si) {
				const Zt = new Map(),
					ci = Ke(
						(ri) => {
							const $i = Dt();
							for (const [Wt, tt] of Zt.entries())
								if (Jt(Wt, $i) !== Jt(Wt, ri))
									for (const at of tt.values())
										(at.state = L), at.pure ? z.push(at) : F.push(at);
							return $i;
						},
						void 0,
						!0,
						L,
					);
				return (
					xe(ci),
					(ri) => {
						const $i = U;
						if ($i) {
							let Wt;
							(Wt = Zt.get(ri)) ? Wt.add($i) : Zt.set(ri, (Wt = new Set([$i]))),
								se(() => {
									Wt.delete($i), !Wt.size && Zt.delete(ri);
								});
						}
						return Jt(
							ri,
							R && R.running && R.sources.has(ci) ? ci.tValue : ci.value,
						);
					}
				);
			}
			function _(Dt) {
				return Te(Dt, !1);
			}
			function te(Dt) {
				if (U === null) return Dt();
				const Jt = U;
				U = null;
				try {
					return Dt();
				} finally {
					U = Jt;
				}
			}
			function Q(Dt, Jt, si) {
				const Zt = Array.isArray(Dt);
				let ci,
					ri = si && si.defer;
				return ($i) => {
					let Wt;
					if (Zt) {
						Wt = Array(Dt.length);
						for (let at = 0; at < Dt.length; at++) Wt[at] = Dt[at]();
					} else Wt = Dt();
					if (ri) {
						ri = !1;
						return;
					}
					const tt = te(() => Jt(Wt, ci, $i));
					return (ci = Wt), tt;
				};
			}
			function Z(Dt) {
				W(() => te(Dt));
			}
			function se(Dt) {
				return (
					A === null ||
						(A.cleanups === null ? (A.cleanups = [Dt]) : A.cleanups.push(Dt)),
					Dt
				);
			}
			function re(Dt, Jt) {
				P || (P = Symbol("error")),
					(A = Ke(void 0, void 0, !0)),
					(A.context = { [P]: [Jt] });
				try {
					return Dt();
				} catch (si) {
					Re(si);
				} finally {
					A = A.owner;
				}
			}
			function le(Dt) {
				P || (P = Symbol("error")),
					A === null ||
						(A.context === null
							? (A.context = { [P]: [Dt] })
							: A.context[P]
								? A.context[P].push(Dt)
								: (A.context[P] = [Dt]));
			}
			function oe() {
				return U;
			}
			function ae() {
				return A;
			}
			function pe(Dt, Jt) {
				const si = A,
					Zt = U;
				(A = Dt), (U = null);
				try {
					return Te(Jt, !0);
				} catch (ci) {
					Re(ci);
				} finally {
					(A = si), (U = Zt);
				}
			}
			function $e(Dt = p) {
				O = Dt;
			}
			function ye(Dt) {
				if (R && R.running) return Dt(), R.done;
				const Jt = U,
					si = A;
				return Promise.resolve().then(() => {
					(U = Jt), (A = si);
					let Zt;
					return (
						(O || be) &&
							((Zt =
								R ||
								(R = {
									sources: new Set(),
									effects: [],
									promises: new Set(),
									disposed: new Set(),
									queue: new Set(),
									running: !0,
								})),
							Zt.done || (Zt.done = new Promise((ci) => (Zt.resolve = ci))),
							(Zt.running = !0)),
						Te(Dt, !1),
						(U = A = null),
						Zt ? Zt.done : void 0
					);
				});
			}
			function ue() {
				return [H, ye];
			}
			function fe(Dt) {
				F.push.apply(F, Dt), (Dt.length = 0);
			}
			function me(Dt, Jt) {
				const si = Symbol("context");
				return { id: si, Provider: Ze(si), defaultValue: Dt };
			}
			function ve(Dt) {
				let Jt;
				return (Jt = je(A, Dt.id)) !== void 0 ? Jt : Dt.defaultValue;
			}
			function ge(Dt) {
				const Jt = Y(Dt),
					si = Y(() => Ve(Jt()));
				return (
					(si.toArray = () => {
						const Zt = si();
						return Array.isArray(Zt) ? Zt : Zt != null ? [Zt] : [];
					}),
					si
				);
			}
			let be;
			function Ce() {
				return be || (be = me({}));
			}
			function Le(Dt) {
				if (B) {
					const Jt = B;
					B = (si, Zt) => {
						const ci = Jt(si, Zt),
							ri = Dt(($i) => ci.track($i), Zt);
						return {
							track: ($i) => ri.track($i),
							dispose() {
								ri.dispose(), ci.dispose();
							},
						};
					};
				} else B = Dt;
			}
			function Fe() {
				const Dt = R && R.running;
				if (this.sources && (Dt ? this.tState : this.state))
					if ((Dt ? this.tState : this.state) === L) xe(this);
					else {
						const Jt = z;
						(z = null), Te(() => ke(this), !1), (z = Jt);
					}
				if (U) {
					const Jt = this.observers ? this.observers.length : 0;
					U.sources
						? (U.sources.push(this), U.sourceSlots.push(Jt))
						: ((U.sources = [this]), (U.sourceSlots = [Jt])),
						this.observers
							? (this.observers.push(U),
								this.observerSlots.push(U.sources.length - 1))
							: ((this.observers = [U]),
								(this.observerSlots = [U.sources.length - 1]));
				}
				return Dt && R.sources.has(this) ? this.tValue : this.value;
			}
			function Oe(Dt, Jt, si) {
				let Zt = R && R.running && R.sources.has(Dt) ? Dt.tValue : Dt.value;
				if (!Dt.comparator || !Dt.comparator(Zt, Jt)) {
					if (R) {
						const ci = R.running;
						(ci || (!si && R.sources.has(Dt))) &&
							(R.sources.add(Dt), (Dt.tValue = Jt)),
							ci || (Dt.value = Jt);
					} else Dt.value = Jt;
					Dt.observers &&
						Dt.observers.length &&
						Te(() => {
							for (let ci = 0; ci < Dt.observers.length; ci += 1) {
								const ri = Dt.observers[ci],
									$i = R && R.running;
								($i && R.disposed.has(ri)) ||
									(($i ? !ri.tState : !ri.state) &&
										(ri.pure ? z.push(ri) : F.push(ri), ri.observers && Ue(ri)),
									$i ? (ri.tState = L) : (ri.state = L));
							}
							if (z.length > 1e6) throw ((z = []), new Error());
						}, !1);
				}
				return Jt;
			}
			function xe(Dt) {
				if (!Dt.fn) return;
				qe(Dt);
				const Jt = A,
					si = U,
					Zt = x;
				(U = A = Dt),
					He(
						Dt,
						R && R.running && R.sources.has(Dt) ? Dt.tValue : Dt.value,
						Zt,
					),
					R &&
						!R.running &&
						R.sources.has(Dt) &&
						queueMicrotask(() => {
							Te(() => {
								R && (R.running = !0),
									(U = A = Dt),
									He(Dt, Dt.tValue, Zt),
									(U = A = null);
							}, !1);
						}),
					(U = si),
					(A = Jt);
			}
			function He(Dt, Jt, si) {
				let Zt;
				try {
					Zt = Dt.fn(Jt);
				} catch (ci) {
					return (
						Dt.pure &&
							(R && R.running
								? ((Dt.tState = L),
									Dt.tOwned && Dt.tOwned.forEach(qe),
									(Dt.tOwned = void 0))
								: ((Dt.state = L),
									Dt.owned && Dt.owned.forEach(qe),
									(Dt.owned = null))),
						(Dt.updatedAt = si + 1),
						Re(ci)
					);
				}
				(!Dt.updatedAt || Dt.updatedAt <= si) &&
					(Dt.updatedAt != null && "observers" in Dt
						? Oe(Dt, Zt, !0)
						: R && R.running && Dt.pure
							? (R.sources.add(Dt), (Dt.tValue = Zt))
							: (Dt.value = Zt),
					(Dt.updatedAt = si));
			}
			function Ke(Dt, Jt, si, Zt = L, ci) {
				const ri = {
					fn: Dt,
					state: Zt,
					updatedAt: null,
					owned: null,
					sources: null,
					sourceSlots: null,
					cleanups: null,
					value: Jt,
					owner: A,
					context: null,
					pure: si,
				};
				if (
					(R && R.running && ((ri.state = 0), (ri.tState = Zt)),
					A === null ||
						(A !== M &&
							(R && R.running && A.pure
								? A.tOwned
									? A.tOwned.push(ri)
									: (A.tOwned = [ri])
								: A.owned
									? A.owned.push(ri)
									: (A.owned = [ri]))),
					B)
				) {
					const [$i, Wt] = G(void 0, { equals: !1 }),
						tt = B(ri.fn, Wt);
					se(() => tt.dispose());
					const at = () => ye(Wt).then(() => pi.dispose()),
						pi = B(ri.fn, at);
					ri.fn = (Li) => ($i(), R && R.running ? pi.track(Li) : tt.track(Li));
				}
				return ri;
			}
			function Je(Dt) {
				const Jt = R && R.running;
				if ((Jt ? Dt.tState : Dt.state) === 0) return;
				if ((Jt ? Dt.tState : Dt.state) === D) return ke(Dt);
				if (Dt.suspense && te(Dt.suspense.inFallback))
					return Dt.suspense.effects.push(Dt);
				const si = [Dt];
				for (; (Dt = Dt.owner) && (!Dt.updatedAt || Dt.updatedAt < x); ) {
					if (Jt && R.disposed.has(Dt)) return;
					(Jt ? Dt.tState : Dt.state) && si.push(Dt);
				}
				for (let Zt = si.length - 1; Zt >= 0; Zt--) {
					if (((Dt = si[Zt]), Jt)) {
						let ci = Dt,
							ri = si[Zt + 1];
						for (; (ci = ci.owner) && ci !== ri; )
							if (R.disposed.has(ci)) return;
					}
					if ((Jt ? Dt.tState : Dt.state) === L) xe(Dt);
					else if ((Jt ? Dt.tState : Dt.state) === D) {
						const ci = z;
						(z = null), Te(() => ke(Dt, si[0]), !1), (z = ci);
					}
				}
			}
			function Te(Dt, Jt) {
				if (z) return Dt();
				let si = !1;
				Jt || (z = []), F ? (si = !0) : (F = []), x++;
				try {
					const Zt = Dt();
					return Ee(si), Zt;
				} catch (Zt) {
					si || (F = null), (z = null), Re(Zt);
				}
			}
			function Ee(Dt) {
				if ((z && (O && R && R.running ? Be(z) : Ie(z), (z = null)), Dt))
					return;
				let Jt;
				if (R) {
					if (!R.promises.size && !R.queue.size) {
						const Zt = R.sources,
							ci = R.disposed;
						F.push.apply(F, R.effects), (Jt = R.resolve);
						for (const ri of F)
							"tState" in ri && (ri.state = ri.tState), delete ri.tState;
						(R = null),
							Te(() => {
								for (const ri of ci) qe(ri);
								for (const ri of Zt) {
									if (((ri.value = ri.tValue), ri.owned))
										for (let $i = 0, Wt = ri.owned.length; $i < Wt; $i++)
											qe(ri.owned[$i]);
									ri.tOwned && (ri.owned = ri.tOwned),
										delete ri.tValue,
										delete ri.tOwned,
										(ri.tState = 0);
								}
								q(!1);
							}, !1);
					} else if (R.running) {
						(R.running = !1),
							R.effects.push.apply(R.effects, F),
							(F = null),
							q(!0);
						return;
					}
				}
				const si = F;
				(F = null), si.length && Te(() => k(si), !1), Jt && Jt();
			}
			function Ie(Dt) {
				for (let Jt = 0; Jt < Dt.length; Jt++) Je(Dt[Jt]);
			}
			function Be(Dt) {
				for (let Jt = 0; Jt < Dt.length; Jt++) {
					const si = Dt[Jt],
						Zt = R.queue;
					Zt.has(si) ||
						(Zt.add(si),
						O(() => {
							Zt.delete(si),
								Te(() => {
									(R.running = !0), Je(si);
								}, !1),
								R && (R.running = !1);
						}));
				}
			}
			function Se(Dt) {
				let Jt,
					si = 0;
				for (Jt = 0; Jt < Dt.length; Jt++) {
					const Zt = Dt[Jt];
					Zt.user ? (Dt[si++] = Zt) : Je(Zt);
				}
				for (s.context && l(), Jt = 0; Jt < si; Jt++) Je(Dt[Jt]);
			}
			function ke(Dt, Jt) {
				const si = R && R.running;
				si ? (Dt.tState = 0) : (Dt.state = 0);
				for (let Zt = 0; Zt < Dt.sources.length; Zt += 1) {
					const ci = Dt.sources[Zt];
					if (ci.sources) {
						const ri = si ? ci.tState : ci.state;
						ri === L
							? ci !== Jt && (!ci.updatedAt || ci.updatedAt < x) && Je(ci)
							: ri === D && ke(ci, Jt);
					}
				}
			}
			function Ue(Dt) {
				const Jt = R && R.running;
				for (let si = 0; si < Dt.observers.length; si += 1) {
					const Zt = Dt.observers[si];
					(Jt ? !Zt.tState : !Zt.state) &&
						(Jt ? (Zt.tState = D) : (Zt.state = D),
						Zt.pure ? z.push(Zt) : F.push(Zt),
						Zt.observers && Ue(Zt));
				}
			}
			function qe(Dt) {
				if (Dt.isCleaning !== !0)
					try {
						Dt.isCleaning = !0;
						let Jt;
						if (Dt.sources)
							for (; Dt.sources.length; ) {
								const si = Dt.sources.pop(),
									Zt = Dt.sourceSlots.pop(),
									ci = si.observers;
								if (ci && ci.length) {
									const ri = ci.pop(),
										$i = si.observerSlots.pop();
									Zt < ci.length &&
										((ri.sourceSlots[$i] = Zt),
										(ci[Zt] = ri),
										(si.observerSlots[Zt] = $i));
								}
							}
						if (R && R.running && Dt.pure) {
							if (Dt.tOwned) {
								for (Jt = Dt.tOwned.length - 1; Jt >= 0; Jt--)
									qe(Dt.tOwned[Jt]);
								delete Dt.tOwned;
							}
							Ae(Dt, !0);
						} else if (Dt.owned) {
							for (Jt = Dt.owned.length - 1; Jt >= 0; Jt--) qe(Dt.owned[Jt]);
							Dt.owned = null;
						}
						if (Dt.cleanups) {
							for (Jt = Dt.cleanups.length - 1; Jt >= 0; Jt--)
								Dt.cleanups[Jt]();
							Dt.cleanups = null;
						}
						R && R.running ? (Dt.tState = 0) : (Dt.state = 0),
							(Dt.context = null);
					} finally {
						Dt.isCleaning = !1;
					}
			}
			function Ae(Dt, Jt) {
				if ((Jt || ((Dt.tState = 0), R.disposed.add(Dt)), Dt.owned))
					for (let si = 0; si < Dt.owned.length; si++) Ae(Dt.owned[si]);
			}
			function Me(Dt) {
				return Dt instanceof Error
					? Dt
					: new Error(typeof Dt == "string" ? Dt : "Unknown error", {
							cause: Dt,
						});
			}
			function De(Dt, Jt) {
				for (const si of Dt) si(Jt);
			}
			function Re(Dt) {
				const Jt = P && je(A, P);
				if (!Jt) throw Dt;
				const si = Me(Dt);
				F
					? F.push({
							fn() {
								De(Jt, si);
							},
							state: L,
						})
					: De(Jt, si);
			}
			function je(Dt, Jt) {
				return Dt
					? Dt.context && Dt.context[Jt] !== void 0
						? Dt.context[Jt]
						: je(Dt.owner, Jt)
					: void 0;
			}
			function Ve(Dt) {
				if (typeof Dt == "function" && !Dt.length) return Ve(Dt());
				if (Array.isArray(Dt)) {
					const Jt = [];
					for (let si = 0; si < Dt.length; si++) {
						const Zt = Ve(Dt[si]);
						Array.isArray(Zt) ? Jt.push.apply(Jt, Zt) : Jt.push(Zt);
					}
					return Jt;
				}
				return Dt;
			}
			function Ze(Dt, Jt) {
				return function (Zt) {
					let ci;
					return (
						J(
							() =>
								(ci = te(
									() => (
										(A.context = { [Dt]: Zt.value }), ge(() => Zt.children)
									),
								)),
							void 0,
						),
						ci
					);
				};
			}
			function et(Dt) {
				return {
					subscribe(Jt) {
						if (!(Jt instanceof Object) || Jt == null)
							throw new TypeError("Expected the observer to be an object.");
						const si =
							typeof Jt == "function" ? Jt : Jt.next && Jt.next.bind(Jt);
						if (!si) return { unsubscribe() {} };
						const Zt = V(
							(ci) => (
								W(() => {
									const ri = Dt();
									te(() => si(ri));
								}),
								ci
							),
						);
						return (
							ae() && se(Zt),
							{
								unsubscribe() {
									Zt();
								},
							}
						);
					},
					[Symbol.observable || "@@observable"]() {
						return this;
					},
				};
			}
			function rt(Dt) {
				const [Jt, si] = G(void 0, { equals: !1 });
				if ("subscribe" in Dt) {
					const Zt = Dt.subscribe((ci) => si(() => ci));
					se(() => ("unsubscribe" in Zt ? Zt.unsubscribe() : Zt()));
				} else {
					const Zt = Dt(si);
					se(Zt);
				}
				return Jt;
			}
			const ft = Symbol("fallback");
			function bt(Dt) {
				for (let Jt = 0; Jt < Dt.length; Jt++) Dt[Jt]();
			}
			function nt(Dt, Jt, si = {}) {
				let Zt = [],
					ci = [],
					ri = [],
					$i = 0,
					Wt = Jt.length > 1 ? [] : null;
				return (
					se(() => bt(ri)),
					() => {
						let tt = Dt() || [],
							at,
							pi;
						return (
							tt[S],
							te(() => {
								let Di = tt.length,
									Ui,
									Wi,
									Gi,
									qi,
									Oi,
									yi,
									Ai,
									li,
									Vi;
								if (Di === 0)
									$i !== 0 &&
										(bt(ri),
										(ri = []),
										(Zt = []),
										(ci = []),
										($i = 0),
										Wt && (Wt = [])),
										si.fallback &&
											((Zt = [ft]),
											(ci[0] = V((wi) => ((ri[0] = wi), si.fallback()))),
											($i = 1));
								else if ($i === 0) {
									for (ci = new Array(Di), pi = 0; pi < Di; pi++)
										(Zt[pi] = tt[pi]), (ci[pi] = V(Li));
									$i = Di;
								} else {
									for (
										Gi = new Array(Di),
											qi = new Array(Di),
											Wt && (Oi = new Array(Di)),
											yi = 0,
											Ai = Math.min($i, Di);
										yi < Ai && Zt[yi] === tt[yi];
										yi++
									);
									for (
										Ai = $i - 1, li = Di - 1;
										Ai >= yi && li >= yi && Zt[Ai] === tt[li];
										Ai--, li--
									)
										(Gi[li] = ci[Ai]),
											(qi[li] = ri[Ai]),
											Wt && (Oi[li] = Wt[Ai]);
									for (
										Ui = new Map(), Wi = new Array(li + 1), pi = li;
										pi >= yi;
										pi--
									)
										(Vi = tt[pi]),
											(at = Ui.get(Vi)),
											(Wi[pi] = at === void 0 ? -1 : at),
											Ui.set(Vi, pi);
									for (at = yi; at <= Ai; at++)
										(Vi = Zt[at]),
											(pi = Ui.get(Vi)),
											pi !== void 0 && pi !== -1
												? ((Gi[pi] = ci[at]),
													(qi[pi] = ri[at]),
													Wt && (Oi[pi] = Wt[at]),
													(pi = Wi[pi]),
													Ui.set(Vi, pi))
												: ri[at]();
									for (pi = yi; pi < Di; pi++)
										pi in Gi
											? ((ci[pi] = Gi[pi]),
												(ri[pi] = qi[pi]),
												Wt && ((Wt[pi] = Oi[pi]), Wt[pi](pi)))
											: (ci[pi] = V(Li));
									(ci = ci.slice(0, ($i = Di))), (Zt = tt.slice(0));
								}
								return ci;
							})
						);
						function Li(Di) {
							if (((ri[pi] = Di), Wt)) {
								const [Ui, Wi] = G(pi);
								return (Wt[pi] = Wi), Jt(tt[pi], Ui);
							}
							return Jt(tt[pi]);
						}
					}
				);
			}
			function lt(Dt, Jt, si = {}) {
				let Zt = [],
					ci = [],
					ri = [],
					$i = [],
					Wt = 0,
					tt;
				return (
					se(() => bt(ri)),
					() => {
						const at = Dt() || [];
						return (
							at[S],
							te(() => {
								if (at.length === 0)
									return (
										Wt !== 0 &&
											(bt(ri),
											(ri = []),
											(Zt = []),
											(ci = []),
											(Wt = 0),
											($i = [])),
										si.fallback &&
											((Zt = [ft]),
											(ci[0] = V((Li) => ((ri[0] = Li), si.fallback()))),
											(Wt = 1)),
										ci
									);
								for (
									Zt[0] === ft &&
										(ri[0](), (ri = []), (Zt = []), (ci = []), (Wt = 0)),
										tt = 0;
									tt < at.length;
									tt++
								)
									tt < Zt.length && Zt[tt] !== at[tt]
										? $i[tt](() => at[tt])
										: tt >= Zt.length && (ci[tt] = V(pi));
								for (; tt < Zt.length; tt++) ri[tt]();
								return (
									(Wt = $i.length = ri.length = at.length),
									(Zt = at.slice(0)),
									(ci = ci.slice(0, Wt))
								);
							})
						);
						function pi(Li) {
							ri[tt] = Li;
							const [Di, Ui] = G(at[tt]);
							return ($i[tt] = Ui), Jt(Di, tt);
						}
					}
				);
			}
			let ct = !1;
			function gt() {
				ct = !0;
			}
			function ht(Dt, Jt) {
				if (ct && s.context) {
					const si = s.context;
					l(y());
					const Zt = te(() => Dt(Jt || {}));
					return l(si), Zt;
				}
				return te(() => Dt(Jt || {}));
			}
			function Rt() {
				return !0;
			}
			const Nt = {
				get(Dt, Jt, si) {
					return Jt === v ? si : Dt.get(Jt);
				},
				has(Dt, Jt) {
					return Jt === v ? !0 : Dt.has(Jt);
				},
				set: Rt,
				deleteProperty: Rt,
				getOwnPropertyDescriptor(Dt, Jt) {
					return {
						configurable: !0,
						enumerable: !0,
						get() {
							return Dt.get(Jt);
						},
						set: Rt,
						deleteProperty: Rt,
					};
				},
				ownKeys(Dt) {
					return Dt.keys();
				},
			};
			function jt(Dt) {
				return (Dt = typeof Dt == "function" ? Dt() : Dt) ? Dt : {};
			}
			function ti(...Dt) {
				let Jt = !1;
				for (let Zt = 0; Zt < Dt.length; Zt++) {
					const ci = Dt[Zt];
					(Jt = Jt || (!!ci && v in ci)),
						(Dt[Zt] = typeof ci == "function" ? ((Jt = !0), Y(ci)) : ci);
				}
				if (Jt)
					return new Proxy(
						{
							get(Zt) {
								for (let ci = Dt.length - 1; ci >= 0; ci--) {
									const ri = jt(Dt[ci])[Zt];
									if (ri !== void 0) return ri;
								}
							},
							has(Zt) {
								for (let ci = Dt.length - 1; ci >= 0; ci--)
									if (Zt in jt(Dt[ci])) return !0;
								return !1;
							},
							keys() {
								const Zt = [];
								for (let ci = 0; ci < Dt.length; ci++)
									Zt.push(...Object.keys(jt(Dt[ci])));
								return [...new Set(Zt)];
							},
						},
						Nt,
					);
				const si = {};
				for (let Zt = Dt.length - 1; Zt >= 0; Zt--)
					if (Dt[Zt]) {
						const ci = Object.getOwnPropertyDescriptors(Dt[Zt]);
						for (const ri in ci)
							ri in si ||
								Object.defineProperty(si, ri, {
									enumerable: !0,
									get() {
										for (let $i = Dt.length - 1; $i >= 0; $i--) {
											const Wt = (Dt[$i] || {})[ri];
											if (Wt !== void 0) return Wt;
										}
									},
								});
					}
				return si;
			}
			function kt(Dt, ...Jt) {
				const si = new Set(Jt.flat());
				if (v in Dt) {
					const ci = Jt.map(
						(ri) =>
							new Proxy(
								{
									get($i) {
										return ri.includes($i) ? Dt[$i] : void 0;
									},
									has($i) {
										return ri.includes($i) && $i in Dt;
									},
									keys() {
										return ri.filter(($i) => $i in Dt);
									},
								},
								Nt,
							),
					);
					return (
						ci.push(
							new Proxy(
								{
									get(ri) {
										return si.has(ri) ? void 0 : Dt[ri];
									},
									has(ri) {
										return si.has(ri) ? !1 : ri in Dt;
									},
									keys() {
										return Object.keys(Dt).filter((ri) => !si.has(ri));
									},
								},
								Nt,
							),
						),
						ci
					);
				}
				const Zt = Object.getOwnPropertyDescriptors(Dt);
				return (
					Jt.push(Object.keys(Zt).filter((ci) => !si.has(ci))),
					Jt.map((ci) => {
						const ri = {};
						for (let $i = 0; $i < ci.length; $i++) {
							const Wt = ci[$i];
							Wt in Dt &&
								Object.defineProperty(
									ri,
									Wt,
									Zt[Wt]
										? Zt[Wt]
										: {
												get() {
													return Dt[Wt];
												},
												set() {
													return !0;
												},
												enumerable: !0,
											},
								);
						}
						return ri;
					})
				);
			}
			function hi(Dt) {
				let Jt, si;
				const Zt = (ci) => {
					const ri = s.context;
					if (ri) {
						const [Wt, tt] = G();
						(si || (si = Dt())).then((at) => {
							l(ri), tt(() => at.default), l();
						}),
							(Jt = Wt);
					} else if (!Jt) {
						const [Wt] = ie(() => (si || (si = Dt())).then((tt) => tt.default));
						Jt = Wt;
					}
					let $i;
					return Y(
						() =>
							($i = Jt()) &&
							te(() => {
								if (!ri) return $i(ci);
								const Wt = s.context;
								l(ri);
								const tt = $i(ci);
								return l(Wt), tt;
							}),
					);
				};
				return (
					(Zt.preload = () =>
						si || ((si = Dt()).then((ci) => (Jt = () => ci.default)), si)),
					Zt
				);
			}
			let Kt = 0;
			function di() {
				const Dt = s.context;
				return Dt ? `${Dt.id}${Dt.count++}` : `cl-${Kt++}`;
			}
			const Ye = (Dt) => `Stale read from <${Dt}>.`;
			function ze(Dt) {
				const Jt = "fallback" in Dt && { fallback: () => Dt.fallback };
				return Y(nt(() => Dt.each, Dt.children, Jt || void 0));
			}
			function Xe(Dt) {
				const Jt = "fallback" in Dt && { fallback: () => Dt.fallback };
				return Y(lt(() => Dt.each, Dt.children, Jt || void 0));
			}
			function It(Dt) {
				const Jt = Dt.keyed,
					si = Y(() => Dt.when, void 0, {
						equals: (Zt, ci) => (Jt ? Zt === ci : !Zt == !ci),
					});
				return Y(
					() => {
						const Zt = si();
						if (Zt) {
							const ci = Dt.children;
							return typeof ci == "function" && ci.length > 0
								? te(() =>
										ci(
											Jt
												? Zt
												: () => {
														if (!te(si)) throw Ye("Show");
														return Dt.when;
													},
										),
									)
								: ci;
						}
						return Dt.fallback;
					},
					void 0,
					void 0,
				);
			}
			function Lt(Dt) {
				let Jt = !1;
				const si = (ri, $i) =>
						ri[0] === $i[0] &&
						(Jt ? ri[1] === $i[1] : !ri[1] == !$i[1]) &&
						ri[2] === $i[2],
					Zt = ge(() => Dt.children),
					ci = Y(
						() => {
							let ri = Zt();
							Array.isArray(ri) || (ri = [ri]);
							for (let $i = 0; $i < ri.length; $i++) {
								const Wt = ri[$i].when;
								if (Wt) return (Jt = !!ri[$i].keyed), [$i, Wt, ri[$i]];
							}
							return [-1];
						},
						void 0,
						{ equals: si },
					);
				return Y(
					() => {
						const [ri, $i, Wt] = ci();
						if (ri < 0) return Dt.fallback;
						const tt = Wt.children;
						return typeof tt == "function" && tt.length > 0
							? te(() =>
									tt(
										Jt
											? $i
											: () => {
													if (te(ci)[0] !== ri) throw Ye("Match");
													return Wt.when;
												},
									),
								)
							: tt;
					},
					void 0,
					void 0,
				);
			}
			function xt(Dt) {
				return Dt;
			}
			let Vt;
			function Bt() {
				Vt && [...Vt].forEach((Dt) => Dt());
			}
			function Gt(Dt) {
				let Jt, si;
				s.context &&
					s.load &&
					(si = s.load(s.context.id + s.context.count)) &&
					(Jt = si[0]);
				const [Zt, ci] = G(Jt, void 0);
				return (
					Vt || (Vt = new Set()),
					Vt.add(ci),
					se(() => Vt.delete(ci)),
					Y(
						() => {
							let ri;
							if ((ri = Zt())) {
								const $i = Dt.fallback;
								return typeof $i == "function" && $i.length
									? te(() => $i(ri, () => ci()))
									: $i;
							}
							return re(() => Dt.children, ci);
						},
						void 0,
						void 0,
					)
				);
			}
			const Mt = (Dt, Jt) =>
					Dt.showContent === Jt.showContent &&
					Dt.showFallback === Jt.showFallback,
				Ut = me();
			function ei(Dt) {
				let [Jt, si] = G(() => ({ inFallback: !1 })),
					Zt;
				const ci = ve(Ut),
					[ri, $i] = G([]);
				ci && (Zt = ci.register(Y(() => Jt()().inFallback)));
				const Wt = Y(
					(tt) => {
						const at = Dt.revealOrder,
							pi = Dt.tail,
							{ showContent: Li = !0, showFallback: Di = !0 } = Zt ? Zt() : {},
							Ui = ri(),
							Wi = at === "backwards";
						if (at === "together") {
							const yi = Ui.every((li) => !li()),
								Ai = Ui.map(() => ({
									showContent: yi && Li,
									showFallback: Di,
								}));
							return (Ai.inFallback = !yi), Ai;
						}
						let Gi = !1,
							qi = tt.inFallback;
						const Oi = [];
						for (let yi = 0, Ai = Ui.length; yi < Ai; yi++) {
							const li = Wi ? Ai - yi - 1 : yi,
								Vi = Ui[li]();
							if (!Gi && !Vi) Oi[li] = { showContent: Li, showFallback: Di };
							else {
								const wi = !Gi;
								wi && (qi = !0),
									(Oi[li] = {
										showContent: wi,
										showFallback: !pi || (wi && pi === "collapsed") ? Di : !1,
									}),
									(Gi = !0);
							}
						}
						return Gi || (qi = !1), (Oi.inFallback = qi), Oi;
					},
					{ inFallback: !1 },
				);
				return (
					si(() => Wt),
					ht(Ut.Provider, {
						value: {
							register: (tt) => {
								let at;
								return (
									$i((pi) => ((at = pi.length), [...pi, tt])),
									Y(() => Wt()[at], void 0, { equals: Mt })
								);
							},
						},
						get children() {
							return Dt.children;
						},
					})
				);
			}
			function mi(Dt) {
				let Jt = 0,
					si,
					Zt,
					ci,
					ri,
					$i;
				const [Wt, tt] = G(!1),
					at = Ce(),
					pi = {
						increment: () => {
							++Jt === 1 && tt(!0);
						},
						decrement: () => {
							--Jt === 0 && tt(!1);
						},
						inFallback: Wt,
						effects: [],
						resolved: !1,
					},
					Li = ae();
				if (s.context && s.load) {
					const Wi = s.context.id + s.context.count;
					let Gi = s.load(Wi);
					if (Gi && (ci = Gi[0]) && ci !== "$$f") {
						(typeof ci != "object" || !("then" in ci)) &&
							(ci = Promise.resolve(ci));
						const [qi, Oi] = G(void 0, { equals: !1 });
						(ri = qi),
							ci.then((yi) => {
								if (yi || s.done) return yi && ($i = yi), Oi();
								s.gather(Wi), l(Zt), Oi(), l();
							});
					}
				}
				const Di = ve(Ut);
				Di && (si = Di.register(pi.inFallback));
				let Ui;
				return (
					se(() => Ui && Ui()),
					ht(at.Provider, {
						value: pi,
						get children() {
							return Y(() => {
								if ($i) throw $i;
								if (((Zt = s.context), ri)) return ri(), (ri = void 0);
								Zt && ci === "$$f" && l();
								const Wi = Y(() => Dt.children);
								return Y((Gi) => {
									const qi = pi.inFallback(),
										{ showContent: Oi = !0, showFallback: yi = !0 } = si
											? si()
											: {};
									if ((!qi || (ci && ci !== "$$f")) && Oi)
										return (
											(pi.resolved = !0),
											Ui && Ui(),
											(Ui = Zt = ci = void 0),
											fe(pi.effects),
											Wi()
										);
									if (yi)
										return Ui
											? Gi
											: V(
													(Ai) => (
														(Ui = Ai),
														Zt &&
															(l({ id: Zt.id + "f", count: 0 }), (Zt = void 0)),
														Dt.fallback
													),
													Li,
												);
								});
							});
						},
					})
				);
			}
			let ii;
		}),
		
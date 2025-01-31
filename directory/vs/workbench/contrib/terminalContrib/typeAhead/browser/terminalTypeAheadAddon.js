import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/async.js';
import '../../../../../base/common/color.js';
import '../../../../../base/common/decorators.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/strings.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../platform/telemetry/common/telemetry.js';
import '../../../terminal/common/terminal.js';
import '../common/terminalTypeAheadConfiguration.js';
define(
			de[3173],
			he([1, 0, 15, 97, 138, 6, 3, 37, 10, 32, 145, 1264]),
			function (ce /*require*/,
 e /*exports*/,
 t /*async*/,
 i /*color*/,
 w /*decorators*/,
 E /*event*/,
 C /*lifecycle*/,
 d /*strings*/,
 m /*configuration*/,
 r /*telemetry*/,
 u /*terminal*/,
 a /*terminalTypeAheadConfiguration*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$RWc = e.CharPredictState = e.$QWc = e.$PWc = void 0);
				var h;
				(function (q) {
					(q.Esc = "\x1B"),
						(q.Csi = "\x1B["),
						(q.ShowCursor = "\x1B[?25h"),
						(q.HideCursor = "\x1B[?25l"),
						(q.DeleteChar = "\x1B[X"),
						(q.DeleteRestOfLine = "\x1B[K");
				})(h || (h = {}));
				const c = /^\x1b\[[0-9;]*m/,
					n = /^\x1b\[?([0-9]*)(;[35])?O?([DC])/,
					g = /[^a-z0-9]/i;
				var p;
				(function (q) {
					(q[(q.StatsBufferSize = 24)] = "StatsBufferSize"),
						(q[(q.StatsSendTelemetryEvery = 3e5)] = "StatsSendTelemetryEvery"),
						(q[(q.StatsMinSamplesToTurnOn = 5)] = "StatsMinSamplesToTurnOn"),
						(q[(q.StatsMinAccuracyToTurnOn = 0.3)] =
							"StatsMinAccuracyToTurnOn"),
						(q[(q.StatsToggleOffThreshold = 0.5)] = "StatsToggleOffThreshold");
				})(p || (p = {}));
				const o = /^(\x1b\[(\??25[hl]|\??[0-9;]+n))+/,
					f = (q) => q._core,
					b = (q) => {};
				var s;
				(function (q) {
					(q.Back = "D"), (q.Forwards = "C");
				})(s || (s = {}));
				class l {
					get x() {
						return this.d;
					}
					get y() {
						return this.f;
					}
					get baseY() {
						return this.h;
					}
					get coordinate() {
						return { x: this.d, y: this.f, baseY: this.h };
					}
					constructor(V, G, K) {
						(this.rows = V),
							(this.cols = G),
							(this.j = K),
							(this.d = 0),
							(this.f = 1),
							(this.h = 1),
							(this.d = K.cursorX),
							(this.f = K.cursorY),
							(this.h = K.baseY);
					}
					getLine() {
						return this.j.getLine(this.f + this.h);
					}
					getCell(V) {
						return this.getLine()?.getCell(this.d, V);
					}
					moveTo(V) {
						return (
							(this.d = V.x),
							(this.f = V.y + V.baseY - this.h),
							this.moveInstruction()
						);
					}
					clone() {
						const V = new l(this.rows, this.cols, this.j);
						return V.moveTo(this), V;
					}
					move(V, G) {
						return (this.d = V), (this.f = G), this.moveInstruction();
					}
					shift(V = 0, G = 0) {
						return (this.d += V), (this.f += G), this.moveInstruction();
					}
					moveInstruction() {
						return (
							this.f >= this.rows
								? ((this.h += this.f - (this.rows - 1)),
									(this.f = this.rows - 1))
								: this.f < 0 && ((this.h -= this.f), (this.f = 0)),
							`${h.Csi}${this.f + 1};${this.d + 1}H`
						);
					}
				}
				const y = (q, V, G) => {
					let K = !1;
					G < 0 && V.shift(-1);
					let J;
					for (; V.x >= 0; ) {
						if (((J = V.getCell(J)), !J?.getCode())) return;
						const W = J.getChars();
						if (g.test(W)) {
							if (K) break;
						} else K = !0;
						V.shift(G);
					}
					G < 0 && V.shift(1);
				};
				var $;
				(function (q) {
					(q[(q.Success = 0)] = "Success"),
						(q[(q.Failure = 1)] = "Failure"),
						(q[(q.Buffer = 2)] = "Buffer");
				})($ || ($ = {}));
				class v {
					get remaining() {
						return this.d.length - this.index;
					}
					get eof() {
						return this.index === this.d.length;
					}
					get rest() {
						return this.d.slice(this.index);
					}
					constructor(V) {
						(this.d = V), (this.index = 0);
					}
					eatChar(V) {
						if (this.d[this.index] === V) return this.index++, V;
					}
					eatStr(V) {
						if (this.d.slice(this.index, V.length) === V)
							return (this.index += V.length), V;
					}
					eatGradually(V) {
						const G = this.index;
						for (let K = 0; K < V.length; K++) {
							if (K > 0 && this.eof) return $.Buffer;
							if (!this.eatChar(V[K])) return (this.index = G), $.Failure;
						}
						return $.Success;
					}
					eatRe(V) {
						const G = V.exec(this.d.slice(this.index));
						if (G) return (this.index += G[0].length), G;
					}
					eatCharCode(V = 0, G = V + 1) {
						const K = this.d.charCodeAt(this.index);
						if (!(K < V || K >= G)) return this.index++, K;
					}
				}
				class S {
					constructor() {
						this.clearAfterTimeout = !1;
					}
					apply() {
						return "";
					}
					rollback() {
						return "";
					}
					rollForwards() {
						return "";
					}
					matches() {
						return $.Failure;
					}
				}
				class I {
					constructor(V) {
						this.inner = V;
					}
					apply(V, G) {
						return (this.d = G.clone()), this.inner.apply(V, this.d), "";
					}
					rollback(V) {
						return this.inner.rollback(V.clone()), "";
					}
					rollForwards(V, G) {
						return this.d && V.moveTo(this.d), G;
					}
					matches(V) {
						return this.inner.matches(V);
					}
				}
				const T = (q) => q instanceof I && q.inner instanceof P;
				class P {
					constructor(V, G) {
						(this.d = V), (this.f = G), (this.affectsStyle = !0);
					}
					apply(V, G) {
						const K = G.getCell();
						return (
							(this.appliedAt = K
								? {
										pos: G.coordinate,
										oldAttributes: O(K),
										oldChar: K.getChars(),
									}
								: { pos: G.coordinate, oldAttributes: "", oldChar: "" }),
							G.shift(1),
							this.d.apply + this.f + this.d.undo
						);
					}
					rollback(V) {
						if (!this.appliedAt) return "";
						const { oldAttributes: G, oldChar: K, pos: J } = this.appliedAt;
						return V.moveTo(J) + (K ? `${G}${K}${V.moveTo(J)}` : h.DeleteChar);
					}
					rollForwards(V, G) {
						return this.appliedAt
							? V.clone().moveTo(this.appliedAt.pos) + G
							: "";
					}
					matches(V, G) {
						const K = V.index;
						for (; V.eatRe(c); );
						if (V.eof) return $.Buffer;
						if (V.eatChar(this.f)) return $.Success;
						if (G instanceof P) {
							const J = V.eatGradually(`\b${G.f}${this.f}`);
							if (J !== $.Failure) return J;
						}
						return (V.index = K), $.Failure;
					}
				}
				class k {
					constructor(V) {
						this.f = V;
					}
					apply(V, G) {
						const K = !G.getLine()
								?.translateToString(void 0, G.x)
								.trim(),
							J = G.coordinate,
							W = G.shift(-1),
							X = G.getCell();
						return (
							(this.d = X
								? {
										isLastChar: K,
										pos: J,
										oldAttributes: O(X),
										oldChar: X.getChars(),
									}
								: { isLastChar: K, pos: J, oldAttributes: "", oldChar: "" }),
							W + h.DeleteChar
						);
					}
					rollback(V) {
						if (!this.d) return "";
						const { oldAttributes: G, oldChar: K, pos: J } = this.d;
						return K
							? G + K + V.moveTo(J) + O(f(this.f)._inputHandler._curAttrData)
							: V.moveTo(J) + h.DeleteChar;
					}
					rollForwards() {
						return "";
					}
					matches(V) {
						if (this.d?.isLastChar) {
							const G = V.eatGradually(`\b${h.Csi}K`);
							if (G !== $.Failure) return G;
							const K = V.eatGradually("\b \b");
							if (K !== $.Failure) return K;
						}
						return $.Failure;
					}
				}
				class L {
					apply(V, G) {
						return (
							(this.d = G.coordinate),
							G.move(0, G.y + 1),
							`\r
`
						);
					}
					rollback(V) {
						return this.d ? V.moveTo(this.d) : "";
					}
					rollForwards() {
						return "";
					}
					matches(V) {
						return V.eatGradually(`\r
`);
					}
				}
				class D extends L {
					apply(V, G) {
						return (this.d = G.coordinate), G.move(0, G.y + 1), " \r";
					}
					matches(V) {
						const G = V.eatGradually(" \r");
						return G !== $.Failure
							? V.eatGradually(h.DeleteRestOfLine) === $.Buffer
								? $.Buffer
								: G
							: V.eatGradually(`\r
`);
					}
				}
				class M {
					constructor(V, G, K) {
						(this.f = V), (this.h = G), (this.j = K);
					}
					apply(V, G) {
						const K = G.x,
							J = G.getCell(),
							W = J ? O(J) : "",
							{ j: X, f: Y, h: ie } = this,
							ne = Y === s.Back ? -1 : 1,
							ee = G.clone();
						if (ie) for (let _ = 0; _ < X; _++) y(V, ee, ne);
						else ee.shift(ne * X);
						return (
							(this.d = {
								amount: Math.abs(G.x - ee.x),
								prevPosition: K,
								prevAttrs: W,
								rollForward: G.moveTo(ee),
							}),
							this.d.rollForward
						);
					}
					rollback(V) {
						return this.d
							? V.move(this.d.prevPosition, V.y) + this.d.prevAttrs
							: "";
					}
					rollForwards() {
						return "";
					}
					matches(V) {
						if (!this.d) return $.Failure;
						const G = this.f,
							{ amount: K, rollForward: J } = this.d;
						if (
							V.eatStr(`${h.Csi}${G}`.repeat(K)) ||
							(G === s.Back && V.eatStr("\b".repeat(K)))
						)
							return $.Success;
						if (J) {
							const W = V.eatGradually(J);
							if (W !== $.Failure) return W;
						}
						return V.eatGradually(`${h.Csi}${K}${G}`);
					}
				}
				class N extends C.$1c {
					get accuracy() {
						let V = 0;
						for (const [, G] of this.f) G && V++;
						return V / (this.f.length || 1);
					}
					get sampleSize() {
						return this.f.length;
					}
					get latency() {
						const V = this.f
							.filter(([, G]) => G)
							.map(([G]) => G)
							.sort();
						return {
							count: V.length,
							min: V[0],
							median: V[Math.floor(V.length / 2)],
							max: V[V.length - 1],
						};
					}
					get maxLatency() {
						let V = -1 / 0;
						for (const [G, K] of this.f) K && (V = Math.max(G, V));
						return V;
					}
					constructor(V) {
						super(),
							(this.f = []),
							(this.h = 0),
							(this.j = new WeakMap()),
							(this.m = new E.$re()),
							(this.onChange = this.m.event),
							this.D(V.onPredictionAdded((G) => this.j.set(G, Date.now()))),
							this.D(V.onPredictionSucceeded(this.q.bind(this, !0))),
							this.D(V.onPredictionFailed(this.q.bind(this, !1)));
					}
					q(V, G) {
						const K = this.j.get(G);
						(this.f[this.h] = [Date.now() - K, V]),
							(this.h = (this.h + 1) % p.StatsBufferSize),
							this.m.fire();
					}
				}
				e.$PWc = N;
				class A {
					get u() {
						return this.d
							.filter(({ gen: V }) => V === this.d[0].gen)
							.map(({ p: V }) => V);
					}
					get isShowingPredictions() {
						return this.l;
					}
					get length() {
						return this.d.length;
					}
					constructor(V, G) {
						(this.terminal = V),
							(this.w = G),
							(this.d = []),
							(this.f = 0),
							(this.l = !1),
							(this.o = new E.$re()),
							(this.onPredictionAdded = this.o.event),
							(this.q = new E.$re()),
							(this.onPredictionFailed = this.q.event),
							(this.t = new E.$re()),
							(this.onPredictionSucceeded = this.t.event);
					}
					setShowPredictions(V) {
						if (V === this.l) return;
						this.l = V;
						const G = this.A();
						if (!G) return;
						const K = this.u;
						V
							? (this.clearCursor(),
								this.w.expectIncomingStyle(
									K.reduce((J, W) => (W.affectsStyle ? J + 1 : J), 0),
								),
								this.terminal.write(
									K.map((J) => J.apply(G, this.physicalCursor(G))).join(""),
								))
							: this.terminal.write(
									K.reverse()
										.map((J) => J.rollback(this.physicalCursor(G)))
										.join(""),
								);
					}
					undoAllPredictions() {
						const V = this.A();
						this.l &&
							V &&
							this.terminal.write(
								this.u
									.reverse()
									.map((G) => G.rollback(this.physicalCursor(V)))
									.join(""),
							),
							(this.d = []);
					}
					beforeServerInput(V) {
						const G = V;
						if (
							(this.k && ((V = this.k + V), (this.k = void 0)), !this.d.length)
						)
							return this.z(), V;
						const K = this.A();
						if (!K) return this.z(), V;
						let J = "";
						const W = new v(V),
							X = this.d[0].gen,
							Y = () => {
								const ie = W.eatRe(o);
								ie && (J += ie[0]);
							};
						e: for (; this.d.length && W.remaining > 0; ) {
							Y();
							const { p: ie, gen: ne } = this.d[0],
								ee = this.physicalCursor(K),
								_ = W.index;
							switch (ie.matches(W, this.m)) {
								case $.Success: {
									const te = V.slice(_, W.index);
									ne === X
										? (J += ie.rollForwards?.(ee, te))
										: (ie.apply(K, this.physicalCursor(K)), (J += te)),
										this.t.fire(ie),
										(this.m = ie),
										this.d.shift();
									break;
								}
								case $.Buffer:
									(this.k = V.slice(_)), (W.index = V.length);
									break e;
								case $.Failure: {
									const te = this.d.filter((Q) => Q.gen === X).reverse();
									(J += te
										.map(({ p: Q }) => Q.rollback(this.physicalCursor(K)))
										.join("")),
										te.some((Q) => Q.p.affectsStyle) &&
											(J += O(f(this.terminal)._inputHandler._curAttrData)),
										this.z(),
										this.q.fire(ie);
									break e;
								}
							}
						}
						if (
							(Y(),
							W.eof || ((J += W.rest), this.z()),
							this.d.length && X !== this.d[0].gen)
						)
							for (const { p: ie, gen: ne } of this.d) {
								if (ne !== this.d[0].gen) break;
								ie.affectsStyle && this.w.expectIncomingStyle(),
									(J += ie.apply(K, this.physicalCursor(K)));
							}
						return this.l
							? (J.length === 0 ||
									J === V ||
									(this.h && (J += this.h.moveInstruction()),
									(J = h.HideCursor + J + h.ShowCursor)),
								J)
							: G;
					}
					z() {
						(this.d = []), this.clearCursor(), (this.m = void 0);
					}
					addPrediction(V, G) {
						if (
							(this.d.push({ gen: this.f, p: G }),
							this.o.fire(G),
							this.f !== this.d[0].gen)
						)
							return G.apply(V, this.tentativeCursor(V)), !1;
						const K = G.apply(V, this.physicalCursor(V));
						return (
							(this.j = void 0),
							this.l &&
								K &&
								(G.affectsStyle && this.w.expectIncomingStyle(),
								this.terminal.write(K)),
							!0
						);
					}
					addBoundary(V, G) {
						let K = !1;
						return (
							V &&
								G &&
								((K = this.addPrediction(V, new I(G))),
								G.apply(V, this.tentativeCursor(V))),
							this.f++,
							K
						);
					}
					peekEnd() {
						return this.d[this.d.length - 1]?.p;
					}
					peekStart() {
						return this.d[0]?.p;
					}
					physicalCursor(V) {
						return (
							this.h ||
								(this.l && b(this.terminal),
								(this.h = new l(this.terminal.rows, this.terminal.cols, V))),
							this.h
						);
					}
					tentativeCursor(V) {
						return this.j || (this.j = this.physicalCursor(V).clone()), this.j;
					}
					clearCursor() {
						(this.h = void 0), (this.j = void 0);
					}
					A() {
						const V = this.terminal.buffer.active;
						return V.type === "normal" ? V : void 0;
					}
				}
				e.$QWc = A;
				const R = (q) => {
						if (q.isAttributeDefault()) return [0];
						const V = [];
						return (
							q.isBold() && V.push(1),
							q.isDim() && V.push(2),
							q.isItalic() && V.push(3),
							q.isUnderline() && V.push(4),
							q.isBlink() && V.push(5),
							q.isInverse() && V.push(7),
							q.isInvisible() && V.push(8),
							q.isFgRGB() &&
								V.push(
									38,
									2,
									q.getFgColor() >>> 24,
									(q.getFgColor() >>> 16) & 255,
									q.getFgColor() & 255,
								),
							q.isFgPalette() && V.push(38, 5, q.getFgColor()),
							q.isFgDefault() && V.push(39),
							q.isBgRGB() &&
								V.push(
									48,
									2,
									q.getBgColor() >>> 24,
									(q.getBgColor() >>> 16) & 255,
									q.getBgColor() & 255,
								),
							q.isBgPalette() && V.push(48, 5, q.getBgColor()),
							q.isBgDefault() && V.push(49),
							V
						);
					},
					O = (q) => `${h.Csi}${R(q).join(";")}m`,
					B = (q, V, G) => {
						if (q.length - V > G.length) return !1;
						for (let K = 0; K < G.length; K++, V++)
							if (G[V] !== q[V]) return !1;
						return !0;
					},
					U = (q, V) => {
						const G = [0, 0, -1, 0, 0, 0];
						let K = 0,
							J = 0;
						do {
							const W = q[V + J];
							if (
								((G[J + K] = typeof W == "number" ? W : W[0]),
								typeof W != "number")
							) {
								let X = 0;
								do G[1] === 5 && (K = 1), (G[J + X + 1 + K] = W[X]);
								while (++X < W.length && X + J + 1 + K < G.length);
								break;
							}
							if ((G[1] === 5 && J + K >= 2) || (G[1] === 2 && J + K >= 5))
								break;
							G[1] && (K = 1);
						} while (++J + V < q.length && J + K < G.length);
						return J;
					};
				class z {
					static d(V) {
						return `${h.Csi}${V.join(";")}m`;
					}
					constructor(V, G) {
						(this.m = G), (this.f = 0), this.onUpdate(V);
					}
					expectIncomingStyle(V = 1) {
						this.f += V * 2;
					}
					startTracking() {
						(this.f = 0),
							this.q(R(f(this.m)._inputHandler._curAttrData)),
							(this.l = this.m.parser.registerCsiHandler(
								{ final: "m" },
								(V) => (this.q(V), !1),
							));
					}
					debounceStopTracking() {
						this.o();
					}
					dispose() {
						this.o();
					}
					o() {
						this.l?.dispose(), (this.l = void 0);
					}
					q(V) {
						const G = this.k;
						for (let K = 0; K < V.length; ) {
							const J = V[K],
								W = typeof J == "number" ? J : J[0];
							if (this.f) {
								if (B(V, K, this.k)) {
									this.f--, (K += this.k.length);
									continue;
								}
								if (B(V, K, this.h)) {
									this.f--, (K += this.h.length);
									continue;
								}
							}
							const X = W === 38 || W === 48 || W === 58 ? U(V, K) : 1;
							switch (this.h[0]) {
								case 1:
									W === 2
										? (this.k = [22, 2])
										: (W === 22 || W === 0) && (this.k = [22]);
									break;
								case 2:
									W === 1
										? (this.k = [22, 1])
										: (W === 22 || W === 0) && (this.k = [22]);
									break;
								case 38:
									W === 0 || W === 39 || W === 100
										? (this.k = [39])
										: ((W >= 30 && W <= 38) || (W >= 90 && W <= 97)) &&
											(this.k = V.slice(K, K + X));
									break;
								default:
									W === this.h[0]
										? (this.k = this.h)
										: W === 0 && (this.k = this.j);
							}
							K += X;
						}
						G !== this.k && (this.undo = z.d(this.k));
					}
					onUpdate(V) {
						const { applyArgs: G, undoArgs: K } = this.t(V);
						(this.h = G),
							(this.k = this.j = K),
							(this.apply = z.d(this.h)),
							(this.undo = z.d(this.k));
					}
					t(V) {
						switch (V) {
							case "bold":
								return { applyArgs: [1], undoArgs: [22] };
							case "dim":
								return { applyArgs: [2], undoArgs: [22] };
							case "italic":
								return { applyArgs: [3], undoArgs: [23] };
							case "underlined":
								return { applyArgs: [4], undoArgs: [24] };
							case "inverted":
								return { applyArgs: [7], undoArgs: [27] };
							default: {
								let G;
								try {
									G = i.$UL.fromHex(V);
								} catch {
									G = new i.$UL(new i.$RL(255, 0, 0, 1));
								}
								const { r: K, g: J, b: W } = G.rgba;
								return { applyArgs: [38, 2, K, J, W], undoArgs: [39] };
							}
						}
					}
				}
				Ne([(0, w.$fi)(2e3)], z.prototype, "debounceStopTracking", null);
				const F = (q = a.$EVc) =>
					new RegExp(`\\b(${q.map(d.$of).join("|")})\\b`, "i");
				var x;
				(function (q) {
					(q[(q.Unknown = 0)] = "Unknown"),
						(q[(q.HasPendingChar = 1)] = "HasPendingChar"),
						(q[(q.Validated = 2)] = "Validated");
				})(x || (e.CharPredictState = x = {}));
				let H = class extends C.$1c {
					constructor(V, G, K) {
						super(),
							(this.z = V),
							(this.C = G),
							(this.F = K),
							(this.h = this.C.getValue(u.$ieb).localEchoLatencyThreshold),
							(this.j = F(this.C.getValue(u.$ieb).localEchoExcludePrograms)),
							(this.u = ""),
							this.D((0, C.$Yc)(() => this.w?.dispose()));
					}
					activate(V) {
						const G = (this.f = this.D(
								new z(this.C.getValue(u.$ieb).localEchoStyle, V),
							)),
							K = (this.q = new A(V, this.f)),
							J = (this.stats = this.D(new N(this.q)));
						K.setShowPredictions(this.h === 0),
							this.D(V.onData((X) => this.L(X))),
							this.D(
								V.onTitleChange((X) => {
									(this.u = X), this.H(J, K);
								}),
							),
							this.D(
								V.onResize(() => {
									K.setShowPredictions(!1), K.clearCursor(), this.H(J, K);
								}),
							),
							this.D(
								this.C.onDidChangeConfiguration((X) => {
									X.affectsConfiguration(u.$ieb) &&
										(G.onUpdate(this.C.getValue(u.$ieb).localEchoStyle),
										(this.h = this.C.getValue(
											u.$ieb,
										).localEchoLatencyThreshold),
										(this.j = F(
											this.C.getValue(u.$ieb).localEchoExcludePrograms,
										)),
										this.H(J, K));
								}),
							),
							this.D(
								this.q.onPredictionSucceeded((X) => {
									this.m?.charState === x.HasPendingChar &&
										T(X) &&
										X.inner.appliedAt &&
										X.inner.appliedAt.pos.y + X.inner.appliedAt.pos.baseY ===
											this.m.y &&
										(this.m.charState = x.Validated);
								}),
							),
							this.D(this.z.onBeforeProcessData((X) => this.M(X)));
						let W;
						this.D(
							J.onChange(() => {
								W ||
									(W = setTimeout(() => {
										this.J(J), (W = void 0);
									}, p.StatsSendTelemetryEvery)),
									K.length === 0 && G.debounceStopTracking(),
									this.H(J, K);
							}),
						);
					}
					reset() {
						this.m = void 0;
					}
					G() {
						if (!(!this.stats || !this.q)) {
							if (
								(this.w?.dispose(),
								this.q.length === 0 ||
									this.q.peekStart()?.clearAfterTimeout === !1)
							) {
								this.w = void 0;
								return;
							}
							this.w = (0, t.$Oh)(
								() => {
									this.q?.undoAllPredictions(),
										this.m?.charState === x.HasPendingChar &&
											(this.m.charState = x.Unknown);
								},
								Math.max(500, (this.stats.maxLatency * 3) / 2),
								this.B,
							);
						}
					}
					H(V, G) {
						this.I(V, G);
					}
					I(V, G) {
						if (this.j.test(this.u)) G.setShowPredictions(!1);
						else if (this.h < 0) G.setShowPredictions(!1);
						else if (this.h === 0) G.setShowPredictions(!0);
						else if (
							V.sampleSize > p.StatsMinSamplesToTurnOn &&
							V.accuracy > p.StatsMinAccuracyToTurnOn
						) {
							const K = V.latency.median;
							K >= this.h
								? G.setShowPredictions(!0)
								: K < this.h / p.StatsToggleOffThreshold &&
									G.setShowPredictions(!1);
						}
					}
					J(V) {
						this.F.publicLog("terminalLatencyStats", {
							...V.latency,
							predictionAccuracy: V.accuracy,
						});
					}
					L(V) {
						if (this.q?.terminal.buffer.active.type !== "normal") return;
						const G = this.q.terminal,
							K = G.buffer.active;
						if (
							K.cursorX === 1 &&
							K.cursorY === G.rows - 1 &&
							K.getLine(K.cursorY + K.baseY)
								?.getCell(0)
								?.getChars() === ":"
						)
							return;
						const J = K.baseY + K.cursorY;
						J !== this.m?.y
							? (this.m = {
									y: J,
									startingX: K.cursorX,
									endingX: K.cursorX,
									charState: x.Unknown,
								})
							: ((this.m.startingX = Math.min(this.m.startingX, K.cursorX)),
								(this.m.endingX = Math.max(
									this.m.endingX,
									this.q.physicalCursor(K).x,
								)));
						const W = (ie) =>
								this.q.tentativeCursor(K).x <= this.m.startingX
									? this.q.addBoundary(K, ie)
									: this.q.addPrediction(K, ie),
							X = (ie) =>
								this.q.tentativeCursor(K).x >= this.m.endingX - 1
									? this.q.addBoundary(K, ie)
									: this.q.addPrediction(K, ie),
							Y = new v(V);
						for (; Y.remaining > 0; ) {
							if (Y.eatCharCode(127)) {
								const ne = this.q.peekEnd();
								ne && ne instanceof P && this.q.addBoundary(),
									this.q.isShowingPredictions && b(this.q.terminal),
									this.q.tentativeCursor(K).x <= this.m.startingX
										? this.q.addBoundary(K, new k(this.q.terminal))
										: (this.m.endingX--,
											this.q.addPrediction(K, new k(this.q.terminal)));
								continue;
							}
							if (Y.eatCharCode(32, 126)) {
								const ne = V[Y.index - 1],
									ee = new P(this.f, ne);
								this.m.charState === x.Unknown
									? (this.q.addBoundary(K, ee),
										(this.m.charState = x.HasPendingChar))
									: this.q.addPrediction(K, ee),
									this.q.tentativeCursor(K).x >= G.cols &&
										this.q.addBoundary(K, new D());
								continue;
							}
							const ie = Y.eatRe(n);
							if (ie) {
								const ne = ie[3],
									ee = new M(ne, !!ie[2], Number(ie[1]) || 1);
								ne === s.Back ? W(ee) : X(ee);
								continue;
							}
							if (Y.eatStr(`${h.Esc}f`)) {
								X(new M(s.Forwards, !0, 1));
								continue;
							}
							if (Y.eatStr(`${h.Esc}b`)) {
								W(new M(s.Back, !0, 1));
								continue;
							}
							if (Y.eatChar("\r") && K.cursorY < G.rows - 1) {
								this.q.addPrediction(K, new L());
								continue;
							}
							this.q.addBoundary(K, new S());
							break;
						}
						this.q.length === 1 && (this.G(), this.f.startTracking());
					}
					M(V) {
						this.q && ((V.data = this.q.beforeServerInput(V.data)), this.G());
					}
				};
				(e.$RWc = H),
					Ne([(0, w.$fi)(100)], H.prototype, "H", null),
					(e.$RWc = H = Ne([j(1, m.$gj), j(2, r.$km)], H));
			},
		)

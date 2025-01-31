import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/common/resources.js';
import '../../../../editor/common/services/editorWorker.js';
import '../../../../base/common/event.js';
import '../../../../base/common/async.js';
import '../../../../platform/files/common/files.js';
import '../../../../editor/common/services/model.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/types.js';
import '../../../../editor/common/core/editOperation.js';
import '../../../../editor/common/core/position.js';
import '../../../../editor/common/core/range.js';
import '../../../../base/common/buffer.js';
import '../../../../platform/log/common/log.js';
import '../../../../base/common/cancellation.js';
import '../../../services/output/common/output.js';
import '../../../../base/common/errors.js';
define(
			de[3525],
			he([
				1, 0, 5, 19, 200, 6, 15, 22, 67, 3, 28, 188, 48, 17, 76, 34, 33, 297,
				29,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*instantiation*/,
 i /*resources*/,
 w /*editorWorker*/,
 E /*event*/,
 C /*async*/,
 d /*files*/,
 m /*model*/,
 r /*lifecycle*/,
 u /*types*/,
 a /*editOperation*/,
 h /*position*/,
 c /*range*/,
 n /*buffer*/,
 g /*log*/,
 p /*cancellation*/,
 o /*output*/,
 f /*errors*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$7Tc = e.$6Tc = void 0),
					(i = mt(i));
				class b extends r.$1c {
					constructor(v, S, I) {
						super(),
							(this.h = v),
							(this.j = S),
							(this.m = I),
							(this.a = new E.$re()),
							(this.onDidContentChange = this.a.event),
							(this.b = !1),
							(this.f = new C.$Kh(500));
					}
					watch(v) {
						this.b ||
							((this.g = v),
							this.n(),
							this.m.trace("Started polling", this.h.toString()),
							(this.b = !0));
					}
					n() {
						const v = () => this.q().then(() => this.n());
						this.f.trigger(v).catch((S) => {
							if (!(0, f.$8)(S)) throw S;
						});
					}
					async q() {
						const v = await this.j.stat(this.h);
						v.etag !== this.g && ((this.g = v.etag), this.a.fire(v.size));
					}
					unwatch() {
						this.b &&
							(this.f.cancel(),
							(this.b = !1),
							this.m.trace("Stopped polling", this.h.toString()));
					}
					dispose() {
						this.unwatch(), super.dispose();
					}
				}
				let s = class extends r.$1c {
					constructor(v, S, I, T, P, k, L) {
						super(),
							(this.t = v),
							(this.u = S),
							(this.w = I),
							(this.y = T),
							(this.z = P),
							(this.C = L),
							(this.a = this.D(new E.$re())),
							(this.onDispose = this.a.event),
							(this.f = ""),
							(this.g = null),
							(this.h = null),
							(this.j = !1),
							(this.m = this.D(new r.$2c())),
							(this.n = this.D(new C.$Kh(300))),
							(this.r = 0),
							(this.s = 0),
							(this.b = this.D(new b(this.w, this.y, k))),
							this.D(this.b.onDidContentChange((D) => this.P(D))),
							this.D((0, r.$Yc)(() => this.b.unwatch()));
					}
					append(v) {
						throw new Error("Not supported");
					}
					replace(v) {
						throw new Error("Not supported");
					}
					clear() {
						this.update(o.OutputChannelUpdateMode.Clear, this.s, !0);
					}
					update(v, S, I) {
						(this.g ? this.g : Promise.resolve()).then(() => this.G(v, S, I));
					}
					loadModel() {
						return (
							(this.g = C.Promises.withAsyncBody(async (v, S) => {
								try {
									let I = "";
									if (await this.y.exists(this.w)) {
										const T = await this.y.readFile(this.w, {
											position: this.r,
										});
										(this.s = this.r + T.value.byteLength),
											(this.f = T.etag),
											(I = T.value.toString());
									} else (this.r = 0), (this.s = 0);
									v(this.F(I));
								} catch (I) {
									S(I);
								}
							})),
							this.g
						);
					}
					F(v) {
						if (this.h) this.h.setValue(v);
						else {
							(this.h = this.z.createModel(v, this.u, this.t)),
								this.b.watch(this.f);
							const S = this.h.onWillDispose(() => {
								this.N(), this.b.unwatch(), (this.h = null), (0, r.$Vc)(S);
							});
						}
						return this.h;
					}
					G(v, S, I) {
						if (
							((v === o.OutputChannelUpdateMode.Clear ||
								v === o.OutputChannelUpdateMode.Replace) &&
								((this.r = this.s = (0, u.$pg)(S) ? S : this.s), this.N()),
							!this.h)
						)
							return;
						(this.j = !0), this.m.value || (this.m.value = new p.$Ce());
						const T = this.m.value.token;
						v === o.OutputChannelUpdateMode.Clear
							? this.H(this.h)
							: v === o.OutputChannelUpdateMode.Replace
								? (this.q = this.J(this.h, T).finally(() => (this.q = void 0)))
								: this.I(this.h, I, T);
					}
					H(v) {
						this.M(
							v,
							[a.$jL.delete(v.getFullModelRange())],
							n.$Te.fromString(""),
						);
					}
					I(v, S, I) {
						this.n
							.trigger(
								async () => {
									if (I.isCancellationRequested) return;
									if (this.q) {
										try {
											await this.q;
										} catch {}
										if (I.isCancellationRequested) return;
									}
									const T = await this.O();
									if (I.isCancellationRequested) return;
									const P = v.getLineCount(),
										k = v.getLineMaxColumn(P),
										L = [a.$jL.insert(new h.$hL(P, k), T.toString())];
									this.M(v, L, T);
								},
								S ? 0 : void 0,
							)
							.catch((T) => {
								if (!(0, f.$8)(T)) throw T;
							});
					}
					async J(v, S) {
						const I = await this.O();
						if (S.isCancellationRequested) return;
						const T = await this.L(v, I.toString());
						S.isCancellationRequested || this.M(v, T, I);
					}
					async L(v, S) {
						if (!S) return [a.$jL.delete(v.getFullModelRange())];
						if (S !== v.getValue()) {
							const I = await this.C.computeMoreMinimalEdits(v.uri, [
								{ text: S.toString(), range: v.getFullModelRange() },
							]);
							if (I?.length)
								return I.map((T) => a.$jL.replace(c.$iL.lift(T.range), T.text));
						}
						return [];
					}
					M(v, S, I) {
						S.length && v.applyEdits(S),
							(this.s = this.s + I.byteLength),
							(this.j = !1);
					}
					N() {
						this.m.value?.cancel(),
							(this.m.value = void 0),
							this.n.cancel(),
							(this.q = void 0),
							(this.j = !1);
					}
					async O() {
						const v = await this.y.readFile(this.w, { position: this.s });
						return (this.f = v.etag), v.value;
					}
					P(v) {
						this.h &&
							(this.j ||
								((0, u.$pg)(v) &&
									this.s > v &&
									this.update(o.OutputChannelUpdateMode.Clear, 0, !0)),
							this.update(o.OutputChannelUpdateMode.Append, void 0, !1));
					}
					Q() {
						return !!this.h;
					}
					dispose() {
						this.a.fire(), super.dispose();
					}
				};
				(e.$6Tc = s),
					(e.$6Tc = s =
						Ne([j(3, d.$ll), j(4, m.$QO), j(5, g.$ik), j(6, w.$Cxb)], s));
				let l = class extends s {
					constructor(v, S, I, T, P, k, L, D, M) {
						super(S, I, T, P, k, D, M),
							(this.R = L.createLogger(T, {
								logLevel: "always",
								donotRotate: !0,
								donotUseFormatters: !0,
								hidden: !0,
							})),
							(this.S = 0);
					}
					append(v) {
						this.U(v),
							this.update(o.OutputChannelUpdateMode.Append, void 0, this.Q());
					}
					replace(v) {
						const S = this.S;
						this.U(v), this.update(o.OutputChannelUpdateMode.Replace, S, !0);
					}
					U(v) {
						(this.S += n.$Te.fromString(v).byteLength),
							this.R.info(v),
							this.Q() && this.R.flush();
					}
				};
				l = Ne(
					[j(4, d.$ll), j(5, m.$QO), j(6, g.$jk), j(7, g.$ik), j(8, w.$Cxb)],
					l,
				);
				let y = class extends r.$1c {
					constructor(v, S, I, T, P, k) {
						super(),
							(this.f = P),
							(this.g = k),
							(this.a = this.D(new E.$re())),
							(this.onDispose = this.a.event),
							(this.b = this.h(v, S, I, T));
					}
					async h(v, S, I, T) {
						const P = await T,
							k = i.$nh(P, `${v.replace(/[\\/:\*\?"<>\|]/g, "")}.log`);
						await this.g.createFile(k);
						const L = this.D(this.f.createInstance(l, v, S, I, k));
						return this.D(L.onDispose(() => this.a.fire())), L;
					}
					append(v) {
						this.b.then((S) => S.append(v));
					}
					update(v, S, I) {
						this.b.then((T) => T.update(v, S, I));
					}
					loadModel() {
						return this.b.then((v) => v.loadModel());
					}
					clear() {
						this.b.then((v) => v.clear());
					}
					replace(v) {
						this.b.then((S) => S.replace(v));
					}
				};
				(e.$7Tc = y), (e.$7Tc = y = Ne([j(4, t.$Li), j(5, d.$ll)], y));
			},
		)

import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/platform.js';
import '../../../base/common/strings.js';
import '../../../nls.js';
import '../../environment/common/environment.js';
import '../../files/common/files.js';
import '../../instantiation/common/instantiation.js';
import '../../product/common/productService.js';
import '../../externalServices/common/serviceMachineId.js';
import '../../storage/common/storage.js';
import './userDataSync.js';
define(
			de[965],
			he([1, 0, 6, 3, 12, 37, 4, 113, 22, 5, 62, 678, 21, 150]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				var n;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$HRb = e.$FRb = void 0),
					(e.$GRb = l),
					(e.$FRb = (0, r.$Mi)("IUserDataSyncMachinesService"));
				const g = "sync.currentMachineName",
					p = "Safari",
					o = "Chrome",
					f = "Edge",
					b = "Firefox",
					s = "Android";
				function l(v) {
					switch (v) {
						case p:
						case o:
						case f:
						case b:
						case s:
						case (0, w.$k)(w.Platform.Web):
							return !0;
					}
					return !1;
				}
				function y() {
					return w.$J
						? p
						: w.$H
							? o
							: w.$K
								? f
								: w.$I
									? b
									: w.$L
										? s
										: (0, w.$k)(w.$r ? w.Platform.Web : w.$x);
				}
				let $ = class extends i.$1c {
					static {
						n = this;
					}
					static {
						this.a = 1;
					}
					static {
						this.b = "machines";
					}
					constructor(S, I, T, P, k, L) {
						super(),
							(this.h = T),
							(this.j = P),
							(this.m = k),
							(this.n = L),
							(this.c = this.D(new t.$re())),
							(this.onDidChange = this.c.event),
							(this.g = null),
							(this.f = (0, a.getServiceMachineId)(S, I, T));
					}
					async getMachines(S) {
						const I = await this.f;
						return (await this.r(S)).machines.map((P) => ({
							...P,
							isCurrent: P.id === I,
						}));
					}
					async addCurrentMachine(S) {
						const I = await this.f,
							T = await this.r(S);
						T.machines.some(({ id: P }) => P === I) ||
							(T.machines.push({
								id: I,
								name: this.q(T.machines),
								platform: y(),
							}),
							await this.s(T));
					}
					async removeCurrentMachine(S) {
						const I = await this.f,
							T = await this.r(S),
							P = T.machines.filter(({ id: k }) => k !== I);
						P.length !== T.machines.length &&
							((T.machines = P), await this.s(T));
					}
					async renameMachine(S, I, T) {
						const P = await this.r(T),
							k = P.machines.find(({ id: L }) => L === S);
						if (k) {
							(k.name = I), await this.s(P);
							const L = await this.f;
							S === L &&
								this.h.store(
									g,
									I,
									h.StorageScope.APPLICATION,
									h.StorageTarget.MACHINE,
								);
						}
					}
					async setEnablements(S) {
						const I = await this.r();
						for (const [T, P] of S) {
							const k = I.machines.find((L) => L.id === T);
							k && (k.disabled = P ? void 0 : !0);
						}
						await this.s(I);
					}
					q(S) {
						const I = this.h.get(g, h.StorageScope.APPLICATION);
						if (I) return I;
						const T = `${this.n.embedderIdentifier ? `${this.n.embedderIdentifier} - ` : ""}${y()} (${this.n.nameShort})`,
							P = new RegExp(`${(0, E.$of)(T)}\\s#(\\d+)`);
						let k = 0;
						for (const L of S) {
							const D = P.exec(L.name),
								M = D ? parseInt(D[1]) : 0;
							k = M > k ? M : k;
						}
						return `${T} #${k + 1}`;
					}
					async r(S) {
						this.g = await this.t(S);
						const I = this.u(this.g);
						if (I.version !== n.a)
							throw new Error((0, C.localize)(2465, null, this.n.nameLong));
						return I;
					}
					async s(S) {
						const I = JSON.stringify(S),
							T = await this.j.writeResource(n.b, I, this.g?.ref || null);
						(this.g = { ref: T, content: I }), this.c.fire();
					}
					async t(S) {
						if (this.g) {
							const I = S && S.latest ? S.latest[n.b] : void 0;
							if (this.g.ref === I) return this.g;
							if (I === void 0 && this.g.content === null) return this.g;
						}
						return this.j.readResource(n.b, this.g);
					}
					u(S) {
						if (S.content !== null)
							try {
								return JSON.parse(S.content);
							} catch (I) {
								this.m.error(I);
							}
						return { version: n.a, machines: [] };
					}
				};
				(e.$HRb = $),
					(e.$HRb =
						$ =
						n =
							Ne(
								[
									j(0, d.$Ti),
									j(1, m.$ll),
									j(2, h.$lq),
									j(3, c.$TRb),
									j(4, c.$9Rb),
									j(5, u.$Bk),
								],
								$,
							));
			},
		),
		
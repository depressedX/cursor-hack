import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/buffer.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/types.js';
import '../../../../base/common/uri.js';
import '../../../../platform/environment/common/environment.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../platform/workspace/common/workspace.js';
import './storedValue.js';
import './testResult.js';
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
		
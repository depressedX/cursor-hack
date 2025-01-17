import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/event.js';
import './scm.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../base/common/history.js';
import '../../../../base/common/map.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/iterator.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../base/common/network.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
define(
			de[3131],
			he([1, 0, 3, 6, 258, 34, 8, 21, 647, 59, 9, 103, 25, 23, 68]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$LPc = void 0);
				class g extends t.$1c {
					get value() {
						return this.a;
					}
					get placeholder() {
						return this.c;
					}
					set placeholder(l) {
						(this.c = l), this.f.fire(l);
					}
					get enabled() {
						return this.g;
					}
					set enabled(l) {
						(this.g = l), this.h.fire(l);
					}
					get visible() {
						return this.j;
					}
					set visible(l) {
						(this.j = l), this.m.fire(l);
					}
					setFocus() {
						this.n.fire();
					}
					showValidationMessage(l, y) {
						this.q.fire({ message: l, type: y });
					}
					get validateInput() {
						return this.r;
					}
					set validateInput(l) {
						(this.r = l), this.s.fire();
					}
					constructor(l, y) {
						super(),
							(this.repository = l),
							(this.w = y),
							(this.a = ""),
							(this.b = new i.$re()),
							(this.onDidChange = this.b.event),
							(this.c = ""),
							(this.f = new i.$re()),
							(this.onDidChangePlaceholder = this.f.event),
							(this.g = !0),
							(this.h = new i.$re()),
							(this.onDidChangeEnablement = this.h.event),
							(this.j = !0),
							(this.m = new i.$re()),
							(this.onDidChangeVisibility = this.m.event),
							(this.n = new i.$re()),
							(this.onDidChangeFocus = this.n.event),
							(this.q = new i.$re()),
							(this.onDidChangeValidationMessage = this.q.event),
							(this.r = () => Promise.resolve(void 0)),
							(this.s = new i.$re()),
							(this.onDidChangeValidateInput = this.s.event),
							(this.u = !1),
							this.repository.provider.rootUri
								? ((this.t = y.getHistory(
										this.repository.provider.label,
										this.repository.provider.rootUri,
									)),
									this.D(
										this.w.onWillSaveHistory(($) => {
											this.t.isAtEnd() && this.y(),
												this.u && $.historyDidIndeedChange(),
												(this.u = !1);
										}),
									))
								: (this.t = new m.$Kob([""], 100)),
							(this.a = this.t.current());
					}
					setValue(l, y, $) {
						l !== this.a &&
							(y || (this.t.replaceLast(this.a), this.t.add(l), (this.u = !0)),
							(this.a = l),
							this.b.fire({ value: l, reason: $ }));
					}
					showNextHistoryValue() {
						if (this.t.isAtEnd()) return;
						this.t.has(this.value) || (this.y(), this.t.resetCursor());
						const l = this.t.next();
						this.setValue(l, !0, w.SCMInputChangeReason.HistoryNext);
					}
					showPreviousHistoryValue() {
						this.t.isAtEnd()
							? this.y()
							: this.t.has(this.a) || (this.y(), this.t.resetCursor());
						const l = this.t.previous();
						this.setValue(l, !0, w.SCMInputChangeReason.HistoryPrevious);
					}
					y() {
						const l = this.t.replaceLast(this.a);
						this.u = this.u || l !== this.a;
					}
				}
				class p {
					get selected() {
						return this.a;
					}
					constructor(l, y, $, v) {
						(this.id = l),
							(this.provider = y),
							(this.c = $),
							(this.a = !1),
							(this.b = new i.$re()),
							(this.onDidChangeSelection = this.b.event),
							(this.input = new g(this, v));
					}
					setSelected(l) {
						this.a !== l && ((this.a = l), this.b.fire(l));
					}
					dispose() {
						this.c.dispose(), this.provider.dispose();
					}
				}
				class o {
					constructor() {
						this.a = !1;
					}
					get didChangeHistory() {
						return this.a;
					}
					historyDidIndeedChange() {
						this.a = !0;
					}
				}
				let f = class {
					constructor(l, y) {
						(this.d = l),
							(this.f = y),
							(this.a = new t.$Zc()),
							(this.b = new Map()),
							(this.c = this.a.add(new i.$re())),
							(this.onWillSaveHistory = this.c.event),
							(this.b = new Map());
						const $ = this.d.getObject(
							"scm.history",
							d.StorageScope.WORKSPACE,
							[],
						);
						for (const [v, S, I] of $) {
							let T = this.b.get(v);
							T || ((T = new r.$Gc()), this.b.set(v, T)),
								T.set(S, new m.$Kob(I, 100));
						}
						this.h() && this.g(),
							this.a.add(
								this.d.onDidChangeValue(
									d.StorageScope.WORKSPACE,
									"scm.history",
									this.a,
								)((v) => {
									if (v.external && v.key === "scm.history") {
										const S = this.d.getObject(
											"scm.history",
											d.StorageScope.WORKSPACE,
											[],
										);
										for (const [I, T, P] of S) {
											const k = this.getHistory(I, T);
											for (const L of a.Iterable.reverse(P)) k.prepend(L);
										}
									}
								}),
							),
							this.a.add(
								this.d.onWillSaveState((v) => {
									const S = new o();
									this.c.fire(S), S.didChangeHistory && this.g();
								}),
							);
					}
					g() {
						const l = [];
						for (const [y, $] of this.b)
							for (const [v, S] of $)
								(S.size === 1 && S.current() === "") || l.push([y, v, [...S]]);
						this.d.store(
							"scm.history",
							l,
							d.StorageScope.WORKSPACE,
							d.StorageTarget.USER,
						);
					}
					getHistory(l, y) {
						let $ = this.b.get(l);
						$ || (($ = new r.$Gc()), this.b.set(l, $));
						let v = $.get(y);
						return v || ((v = new m.$Kob([""], 100)), $.set(y, v)), v;
					}
					h() {
						let l = !1;
						const y = a.Iterable.filter(
							this.d.keys(d.StorageScope.APPLICATION, d.StorageTarget.MACHINE),
							($) => $.startsWith("scm/input:"),
						);
						for (const $ of y)
							try {
								const v = JSON.parse(
										this.d.get($, d.StorageScope.APPLICATION, ""),
									),
									S = /^scm\/input:([^:]+):(.+)$/.exec($);
								if (
									!S ||
									!Array.isArray(v?.history) ||
									!Number.isInteger(v?.timestamp)
								) {
									this.d.remove($, d.StorageScope.APPLICATION);
									continue;
								}
								const [, I, T] = S,
									P = u.URI.file(T);
								if (this.f.getWorkspaceFolder(P)) {
									const k = this.getHistory(I, P);
									for (const L of a.Iterable.reverse(v.history)) k.prepend(L);
									(l = !0), this.d.remove($, d.StorageScope.APPLICATION);
								}
							} catch {
								this.d.remove($, d.StorageScope.APPLICATION);
							}
						return l;
					}
					dispose() {
						this.a.dispose();
					}
				};
				f = Ne([j(0, d.$lq), j(1, h.$Vi)], f);
				let b = class {
					get repositories() {
						return this._repositories.values();
					}
					get repositoryCount() {
						return this._repositories.size;
					}
					constructor(l, y, $, v, S) {
						(this.g = l),
							(this.h = S),
							(this._repositories = new Map()),
							(this.c = new i.$re()),
							(this.onDidAddRepository = this.c.event),
							(this.d = new i.$re()),
							(this.onDidRemoveRepository = this.d.event),
							(this.f = new i.$re()),
							(this.onDidUpdateRepository = this.f.event),
							(this.a = new f(v, y)),
							(this.b = $.createKey("scm.providerCount", 0));
					}
					registerSCMProvider(l) {
						if (
							(this.g.trace("SCMService#registerSCMProvider"),
							this._repositories.has(l.id))
						)
							throw new Error(`SCM Provider ${l.id} already exists.`);
						const y = (0, t.$Yc)(() => {
								this._repositories.delete(l.id),
									this.d.fire($),
									this.b.set(this._repositories.size);
							}),
							$ = new p(l.id, l, y, this.a);
						return (
							this._repositories.set(l.id, $),
							this.c.fire($),
							$.provider.onDidChange(() => this.f.fire($)),
							this.b.set(this._repositories.size),
							$
						);
					}
					getRepository(l) {
						if (typeof l == "string") return this._repositories.get(l);
						if (
							l.scheme !== c.Schemas.file &&
							l.scheme !== c.Schemas.vscodeRemote
						)
							return;
						let y,
							$ = Number.POSITIVE_INFINITY;
						for (const v of this.repositories) {
							const S = v.provider.rootUri;
							if (!S) continue;
							const I = this.h.extUri.relativePath(S, l);
							I &&
								!/^\.\./.test(I) &&
								I.length < $ &&
								((y = v), ($ = I.length));
						}
						return y;
					}
				};
				(e.$LPc = b),
					(e.$LPc = b =
						Ne(
							[j(0, E.$ik), j(1, h.$Vi), j(2, C.$6j), j(3, d.$lq), j(4, n.$Vl)],
							b,
						));
			},
		),
		
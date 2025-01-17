import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/observable.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/observable/common/platformObservableUtils.js';
import '../../../../platform/storage/common/storage.js';
import './util.js';
import '../common/scm.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/layout/browser/layoutService.js';
define(
			de[3404],
			he([1, 0, 3, 77, 10, 326, 21, 614, 258, 66, 96]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$hQc = void 0);
				let a = class extends t.$1c {
					static {
						this.ID = "workbench.contrib.scmWorkingSets";
					}
					constructor(c, n, g, p, o) {
						super(),
							(this.f = c),
							(this.g = n),
							(this.h = g),
							(this.j = p),
							(this.m = o),
							(this.b = (0, E.$Mwb)("scm.workingSets.enabled", !1, this.f)),
							(this.c = new t.$0c()),
							this.B.add(
								(0, i.autorunWithStore)((f, b) => {
									if (!this.b.read(f)) {
										this.j.remove("scm.workingSets", C.StorageScope.WORKSPACE),
											this.c.clearAndDisposeAll();
										return;
									}
									(this.a = this.r()),
										this.h.onDidAddRepository(this.n, this, b),
										this.h.onDidRemoveRepository(this.q, this, b);
									for (const s of this.h.repositories) this.n(s);
								}),
							);
					}
					n(c) {
						const n = new t.$Zc();
						n.add(
							(0, i.autorun)(async (g) => {
								const o = c.provider.historyProvider
									.read(g)
									?.currentHistoryItemGroupId.read(g);
								if (!o) return;
								const f = (0, d.$HPc)(c.provider),
									b = this.a.get(f);
								if (!b) {
									this.a.set(f, {
										currentHistoryItemGroupId: o,
										editorWorkingSets: new Map(),
									});
									return;
								}
								b.currentHistoryItemGroupId !== o &&
									(this.s(f, o, b), await this.t(f, o));
							}),
						),
							this.c.set(c, n);
					}
					q(c) {
						this.c.deleteAndDispose(c);
					}
					r() {
						const c = new Map(),
							n = this.j.get("scm.workingSets", C.StorageScope.WORKSPACE);
						if (!n) return c;
						for (const g of JSON.parse(n))
							c.set(g.providerKey, {
								currentHistoryItemGroupId: g.currentHistoryItemGroupId,
								editorWorkingSets: new Map(g.editorWorkingSets),
							});
						return c;
					}
					s(c, n, g) {
						const p = g.currentHistoryItemGroupId,
							o = g.editorWorkingSets,
							f = this.g.saveWorkingSet(p);
						this.a.set(c, {
							currentHistoryItemGroupId: n,
							editorWorkingSets: o.set(p, f),
						});
						const b = [];
						for (const [
							s,
							{ currentHistoryItemGroupId: l, editorWorkingSets: y },
						] of this.a)
							b.push({
								providerKey: s,
								currentHistoryItemGroupId: l,
								editorWorkingSets: [...y],
							});
						this.j.store(
							"scm.workingSets",
							JSON.stringify(b),
							C.StorageScope.WORKSPACE,
							C.StorageTarget.MACHINE,
						);
					}
					async t(c, n) {
						const g = this.a.get(c);
						if (!g) return;
						let p = g.editorWorkingSets.get(n);
						if (
							(!p &&
								this.f.getValue("scm.workingSets.default") === "empty" &&
								(p = "empty"),
							p)
						) {
							const o = this.m.hasFocus(u.Parts.PANEL_PART);
							await this.g.applyWorkingSet(p, { preserveFocus: o });
						}
					}
					dispose() {
						this.c.dispose(), super.dispose();
					}
				};
				(e.$hQc = a),
					(e.$hQc = a =
						Ne(
							[
								j(0, w.$gj),
								j(1, r.$EY),
								j(2, m.$c7),
								j(3, C.$lq),
								j(4, u.$mEb),
							],
							a,
						));
			},
		),
		
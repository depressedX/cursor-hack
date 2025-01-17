import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../services/remote/common/remoteExplorerService.js';
import '../../../../base/common/types.js';
import '../../../services/environment/common/environmentService.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/actions/common/actions.js';
import './remoteExplorer.js';
import '../../../../platform/workspace/common/virtualWorkspace.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../base/common/lifecycle.js';
define(
			de[4030],
			he([1, 0, 4, 519, 28, 78, 21, 8, 11, 1058, 349, 25, 3]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$rXc = e.$qXc = void 0),
					(t = mt(t)),
					(e.$qXc = new d.$5j("selectedRemoteInExplorer", ""));
				let c = class extends h.$1c {
					constructor(g, p, o, f, b) {
						super(),
							(this.f = g),
							(this.g = p),
							(this.h = o),
							(this.j = f),
							(this.m = b),
							(this.b = this.D(new h.$0c())),
							(this.c = e.$qXc.bindTo(g)),
							(this.a = m.$XX.for("workbench.remote.menu.switchRemoteMenu")),
							this.D(
								m.$ZX.appendMenuItem(m.$XX.ViewContainerTitle, {
									submenu: this.a,
									title: t.localize(8725, null),
									group: "navigation",
									when: d.$Kj.equals("viewContainer", r.$euc),
									order: 1,
									isSelection: !0,
								}),
							),
							this.D(
								p.onDidChangeTargetType((s) => {
									this.n(s);
								}),
							);
					}
					setSelectionForConnection() {
						let g = !1;
						if (this.b.size > 0) {
							let p;
							const o = this.h.remoteAuthority;
							let f;
							o || (f = (0, u.$E8)(this.m.getWorkspace())?.scheme), (g = !0);
							const b = o
								? [o.split("+")[0]]
								: f
									? [f]
									: (this.j.get(i.$6pc, C.StorageScope.WORKSPACE)?.split(",") ??
										this.j.get(i.$6pc, C.StorageScope.PROFILE)?.split(","));
							b !== void 0 && (p = this.q(b)), p && this.n(p);
						}
						return g;
					}
					n(g) {
						this.c.set(g[0]), (this.g.targetType = g);
					}
					q(g) {
						let p;
						for (const o of this.b)
							for (const f of o[1].authority)
								for (const b of g)
									if (f === b) {
										p = o[1].authority;
										break;
									} else if (o[1].virtualWorkspace === b) {
										p = o[1].authority;
										break;
									}
						return p;
					}
					removeOptionItems(g) {
						for (const p of g)
							if (
								p.group &&
								p.group.startsWith("targets") &&
								p.remoteAuthority &&
								(!p.when || this.f.contextMatchesRules(p.when))
							) {
								const o = (0, w.$mg)(p.remoteAuthority)
									? p.remoteAuthority
									: [p.remoteAuthority];
								this.b.deleteAndDispose(o[0]);
							}
					}
					createOptionItems(g) {
						const p = this.b.size;
						for (const o of g)
							if (
								o.group &&
								o.group.startsWith("targets") &&
								o.remoteAuthority &&
								(!o.when || this.f.contextMatchesRules(o.when))
							) {
								const f = o.name,
									b = (0, w.$mg)(o.remoteAuthority)
										? o.remoteAuthority
										: [o.remoteAuthority];
								if (this.b.has(b[0])) continue;
								const s = this,
									l = (0, m.$4X)(
										class extends m.$3X {
											constructor() {
												super({
													id: `workbench.action.remoteExplorer.show.${b[0]}`,
													title: f,
													toggled: e.$qXc.isEqualTo(b[0]),
													menu: { id: s.a },
												});
											}
											async run() {
												s.n(b);
											}
										},
									);
								this.b.set(b[0], {
									text: f.value,
									authority: b,
									virtualWorkspace: o.virtualWorkspace,
									dispose: () => l.dispose(),
								});
							}
						this.b.size > p && this.setSelectionForConnection();
					}
				};
				(e.$rXc = c),
					(e.$rXc = c =
						Ne(
							[
								j(0, d.$6j),
								j(1, i.$5pc),
								j(2, E.$r8),
								j(3, C.$lq),
								j(4, a.$Vi),
							],
							c,
						));
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	
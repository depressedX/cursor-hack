import '../../../../require.js';
import '../../../../exports.js';
import '../../../platform/registry/common/platform.js';
import '../../services/output/common/output.js';
import '../common/extHost.protocol.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../../../base/common/uri.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/event.js';
import '../../services/views/common/viewsService.js';
import '../../../base/common/types.js';
define(
			de[3800],
			he([1, 0, 30, 297, 88, 101, 9, 3, 6, 89, 28]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				var a;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$foc = void 0);
				let h = class extends d.$1c {
					static {
						a = this;
					}
					static {
						this.a = new Map();
					}
					constructor(n, g, p) {
						super(),
							(this.c = g),
							(this.f = p),
							(this.b = n.getProxy(w.$mbb.ExtHostOutputService));
						const o = () => {
							const f = this.f.isViewVisible(i.$h8)
								? this.c.getActiveChannel()
								: void 0;
							this.b.$setVisibleChannel(f ? f.id : null);
						};
						this.D(
							m.Event.any(
								this.c.onActiveOutputChannel,
								m.Event.filter(
									this.f.onDidChangeViewVisibility,
									({ id: f }) => f === i.$h8,
								),
							)(() => o()),
						),
							o();
					}
					async $register(n, g, p, o) {
						const f = (a.a.get(o) || 0) + 1;
						a.a.set(o, f);
						const b = `extension-output-${o}-#${f}-${n}`,
							s = C.URI.revive(g);
						return (
							t.$Io
								.as(i.$p8.OutputChannels)
								.registerChannel({
									id: b,
									label: n,
									file: s,
									log: !1,
									languageId: p,
									extensionId: o,
								}),
							this.D((0, d.$Yc)(() => this.$dispose(b))),
							b
						);
					}
					async $update(n, g, p) {
						const o = this.g(n);
						o &&
							(g === i.OutputChannelUpdateMode.Append
								? o.update(g)
								: (0, u.$pg)(p) && o.update(g, p));
					}
					async $reveal(n, g) {
						const p = this.g(n);
						p && this.c.showChannel(p.id, g);
					}
					async $close(n) {
						if (this.f.isViewVisible(i.$h8)) {
							const g = this.c.getActiveChannel();
							g && n === g.id && this.f.closeView(i.$h8);
						}
					}
					async $dispose(n) {
						this.g(n)?.dispose();
					}
					g(n) {
						return this.c.getChannel(n);
					}
				};
				(e.$foc = h),
					(e.$foc =
						h =
						a =
							Ne(
								[
									(0, E.$tmc)(w.$lbb.MainThreadOutputService),
									j(1, i.$o8),
									j(2, r.$HMb),
								],
								h,
							));
			},
		),
		
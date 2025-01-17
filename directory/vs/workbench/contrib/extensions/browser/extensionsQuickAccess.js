import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/quickinput/browser/pickerQuickAccess.js';
import '../../../../nls.js';
import '../common/extensions.js';
import '../../../../platform/extensionManagement/common/extensionManagement.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/log/common/log.js';
import '../../../services/panecomposite/browser/panecomposite.js';
import '../../../common/views.js';
define(
			de[3527],
			he([1, 0, 392, 4, 141, 119, 40, 34, 142, 60]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				var u, a;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$CTc = e.$BTc = void 0);
				let h = class extends t.$GLb {
					static {
						u = this;
					}
					static {
						this.PREFIX = "ext install ";
					}
					constructor(p, o, f, b, s) {
						super(u.PREFIX),
							(this.a = p),
							(this.b = o),
							(this.h = f),
							(this.j = b),
							(this.m = s);
					}
					g(p, o, f) {
						if (!p) return [{ label: (0, i.localize)(6442, null) }];
						const b = {
							label: (0, i.localize)(6443, null, p),
							accept: () => this.s(p),
						};
						return /\./.test(p) ? this.q(p, b, f) : [b];
					}
					async q(p, o, f) {
						try {
							const [b] = await this.b.getExtensions([{ id: p }], f);
							return f.isCancellationRequested
								? []
								: b
									? [
											{
												label: (0, i.localize)(6444, null, p),
												accept: () => this.r(b, p),
											},
										]
									: [o];
						} catch (b) {
							return f.isCancellationRequested ? [] : (this.m.error(b), [o]);
						}
					}
					async r(p, o) {
						try {
							await n(this.a, `@id:${o}`), await this.h.installFromGallery(p);
						} catch (f) {
							this.j.error(f);
						}
					}
					async s(p) {
						n(this.a, p);
					}
				};
				(e.$BTc = h),
					(e.$BTc =
						h =
						u =
							Ne(
								[
									j(0, m.$6Sb),
									j(1, E.$Ep),
									j(2, E.$Hp),
									j(3, C.$4N),
									j(4, d.$ik),
								],
								h,
							));
				let c = class extends t.$GLb {
					static {
						a = this;
					}
					static {
						this.PREFIX = "ext ";
					}
					constructor(p) {
						super(a.PREFIX), (this.a = p);
					}
					g() {
						return [
							{ label: (0, i.localize)(6445, null), accept: () => n(this.a) },
						];
					}
				};
				(e.$CTc = c), (e.$CTc = c = a = Ne([j(0, m.$6Sb)], c));
				async function n(g, p = "") {
					const f = (
						await g.openPaneComposite(
							w.$LQb,
							r.ViewContainerLocation.Sidebar,
							!0,
						)
					)?.getViewPaneContainer();
					f?.search(p), f?.focus();
				}
			},
		),
		
import '../../../../require.js';
import '../../../../exports.js';
import '../../../nls.js';
import '../../../base/common/actions.js';
import '../common/extHost.protocol.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../../../platform/dialogs/common/dialogs.js';
import '../../../platform/notification/common/notification.js';
import '../../../base/common/event.js';
import '../../../platform/commands/common/commands.js';
import '../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../services/extensions/common/extensions.js';
define(
			de[3359],
			he([1, 0, 4, 50, 88, 101, 57, 40, 6, 31, 45, 53]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*actions*/,
 w /*extHost.protocol*/,
 E /*extHostCustomers*/,
 C /*dialogs*/,
 d /*notification*/,
 m /*event*/,
 r /*commands*/,
 u /*reactiveStorageService*/,
 a /*extensions*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$nc = void 0),
					(t = mt(t));
				let h = class {
					constructor(n, g, p, o, f, b) {
						(this.b = g),
							(this.c = p),
							(this.d = o),
							(this.f = b),
							(this.a = f.onDidChangeExtensions((s) => {
								for (const l of s.removed)
									this.b.removeFilter(l.identifier.value);
							}));
					}
					dispose() {
						this.a.dispose();
					}
					$showMessage(n, g, p, o) {
						return p.modal
							? this.h(n, g, p.detail, o, p.useCustom)
							: this.g(n, g, o, p);
					}
					g(n, g, p, o) {
						return new Promise((f) => {
							const b = p.map(($) =>
								(0, i.$wj)({
									id: `_extension_message_handle_${$.handle}`,
									label: $.title,
									enabled: !0,
									run: () => (f($.handle), Promise.resolve()),
								}),
							);
							let s;
							o.source &&
								(s = { label: o.source.label, id: o.source.identifier.value }),
								s || (s = t.localize(2572, null));
							const l = [];
							o.source &&
								l.push(
									(0, i.$wj)({
										id: o.source.identifier.value,
										label: t.localize(2573, null),
										run: () =>
											this.c.executeCommand(
												"_extensions.manage",
												o.source.identifier.value,
											),
									}),
								);
							const y = this.b.notify({
								severity: n,
								message: g,
								actions: { primary: b, secondary: l },
								source: s,
							});
							m.Event.once(y.onDidClose)(() => {
								f(void 0);
							});
						});
					}
					async h(n, g, p, o, f) {
						const b = [];
						let s;
						for (const y of o) {
							const $ = { label: y.title, run: () => y.handle };
							y.isCloseAffordance ? (s = $) : b.push($);
						}
						s ||
							(b.length > 0
								? (s = { label: t.localize(2574, null), run: () => {} })
								: (s = { label: t.localize(2575, null), run: () => {} }));
						const { result: l } = await this.d.prompt({
							type: n,
							message: g,
							detail: p,
							buttons: b,
							cancelButton: s,
							custom: f,
						});
						return l;
					}
				};
				(e.$$nc = h),
					(e.$$nc = h =
						Ne(
							[
								(0, E.$tmc)(w.$lbb.MainThreadMessageService),
								j(1, d.$4N),
								j(2, r.$ek),
								j(3, C.$GO),
								j(4, a.$q2),
								j(5, u.$0zb),
							],
							h,
						));
			},
		),
		
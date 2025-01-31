import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../platform/quickinput/browser/pickerQuickAccess.js';
import '../../../../base/common/filters.js';
import '../../../services/extensions/common/extensions.js';
import '../common/taskService.js';
import '../common/tasks.js';
import './taskQuickPick.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../base/common/types.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/storage/common/storage.js';
define(
			de[3330],
			he([1, 0, 4, 63, 392, 132, 53, 419, 424, 1815, 10, 28, 40, 57, 35, 21]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*quickInput*/,
 w /*pickerQuickAccess*/,
 E /*filters*/,
 C /*extensions*/,
 d /*taskService*/,
 m /*tasks*/,
 r /*taskQuickPick*/,
 u /*configuration*/,
 a /*types*/,
 h /*notification*/,
 c /*dialogs*/,
 n /*themeService*/,
 g /*storage*/) {
				"use strict";
				var p;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$kXc = void 0);
				let o = class extends w.$GLb {
					static {
						p = this;
					}
					static {
						this.PREFIX = "task ";
					}
					constructor(b, s, l, y, $, v, S, I) {
						super(p.PREFIX, {
							noResultsPick: { label: (0, t.localize)(9699, null) },
						}),
							(this.a = s),
							(this.b = l),
							(this.h = y),
							(this.j = $),
							(this.m = v),
							(this.n = S),
							(this.q = I);
					}
					async g(b, s, l) {
						if (l.isCancellationRequested) return [];
						const y = new r.$iXc(
								this.a,
								this.b,
								this.h,
								this.j,
								this.n,
								this.m,
								this.q,
							),
							$ = await y.getTopLevelEntries(),
							v = [];
						for (const S of $.entries) {
							const I = (0, E.$Zk)(b, S.label);
							if (!I) continue;
							S.type === "separator" && v.push(S);
							const T = S.task,
								P = S;
							(P.highlights = { label: I }),
								(P.trigger = (k) => {
									if (k === 1 && P.buttons?.length === 2) {
										const L = T && !(0, a.$lg)(T) ? T.getKey() : void 0;
										return (
											L && this.a.removeRecentlyUsedTask(L),
											w.TriggerAction.REFRESH_PICKER
										);
									} else
										return (
											m.$g4.is(T)
												? this.a.customize(T, void 0, !0)
												: m.$e4.is(T) && this.a.openConfig(T),
											w.TriggerAction.CLOSE_PICKER
										);
								}),
								(P.accept = async () => {
									if ((0, a.$lg)(T)) {
										const k = await y.show(
											(0, t.localize)(9700, null),
											void 0,
											T,
										);
										k && this.a.run(k, { attachProblemMatcher: !0 });
									} else
										this.a.run(await this.s(T), { attachProblemMatcher: !0 });
								}),
								v.push(P);
						}
						return v;
					}
					async s(b) {
						return m.$f4.is(b) ? this.a.tryResolveTask(b) : b;
					}
				};
				(e.$kXc = o),
					(e.$kXc =
						o =
						p =
							Ne(
								[
									j(0, C.$q2),
									j(1, d.$Zpc),
									j(2, u.$gj),
									j(3, i.$DJ),
									j(4, h.$4N),
									j(5, c.$GO),
									j(6, n.$iP),
									j(7, g.$lq),
								],
								o,
							));
			},
		)

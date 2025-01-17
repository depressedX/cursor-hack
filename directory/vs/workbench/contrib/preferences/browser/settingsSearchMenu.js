import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/ui/contextview/contextview.js';
import '../../../../base/browser/ui/dropdown/dropdownActionViewItem.js';
import '../../../../editor/contrib/suggest/browser/suggestController.js';
import '../../../../nls.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../common/preferences.js';
define(
			de[3122],
			he([1, 0, 276, 437, 328, 4, 49, 468]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$Dc = void 0);
				let m = class extends i.$Pob {
					constructor(u, a, h, c, n) {
						super(u, { getActions: () => this.getActions() }, n, {
							...a,
							actionRunner: h,
							classNames: u.class,
							anchorAlignmentProvider: () => t.AnchorAlignment.RIGHT,
							menuAsChild: !0,
						}),
							(this.g = c),
							(this.a = w.$KDb.get(this.g.inputWidget));
					}
					render(u) {
						super.render(u);
					}
					r(u, a) {
						this.g.setValue(this.g.getValue().trimEnd() + " " + u),
							this.g.focus(),
							a && this.a && this.a.triggerSuggest();
					}
					O(u, a, h, c, n) {
						return {
							id: u,
							label: a,
							tooltip: h,
							class: void 0,
							enabled: !0,
							run: () => {
								this.r(c, n);
							},
						};
					}
					P(u, a, h, c) {
						const g = this.g.getValue().split(" ").includes(c);
						return {
							id: u,
							label: a,
							tooltip: h,
							class: void 0,
							enabled: !0,
							checked: g,
							run: () => {
								if (g) {
									const p = this.g
										.getValue()
										.split(" ")
										.filter((o) => o !== c)
										.join(" ");
									this.g.setValue(p);
								} else {
									const p = this.g.getValue().trimEnd(),
										o = p ? p + " " + c : c;
									this.g.setValue(o);
								}
								this.g.focus();
							},
						};
					}
					getActions() {
						return [
							this.P(
								"modifiedSettingsSearch",
								(0, E.localize)(8580, null),
								(0, E.localize)(8581, null),
								`@${d.$OBc}`,
							),
							this.O(
								"extSettingsSearch",
								(0, E.localize)(8582, null),
								(0, E.localize)(8583, null),
								`@${d.$PBc}`,
								!0,
							),
							this.O(
								"featuresSettingsSearch",
								(0, E.localize)(8584, null),
								(0, E.localize)(8585, null),
								`@${d.$QBc}`,
								!0,
							),
							this.O(
								"tagSettingsSearch",
								(0, E.localize)(8586, null),
								(0, E.localize)(8587, null),
								`@${d.$TBc}`,
								!0,
							),
							this.O(
								"langSettingsSearch",
								(0, E.localize)(8588, null),
								(0, E.localize)(8589, null),
								`@${d.$SBc}`,
								!0,
							),
							this.P(
								"onlineSettingsSearch",
								(0, E.localize)(8590, null),
								(0, E.localize)(8591, null),
								"@tag:usesOnlineServices",
							),
							this.P(
								"policySettingsSearch",
								(0, E.localize)(8592, null),
								(0, E.localize)(8593, null),
								`@${d.$UBc}`,
							),
						];
					}
				};
				(e.$$Dc = m), (e.$$Dc = m = Ne([j(4, C.$Xxb)], m));
			},
		),
		
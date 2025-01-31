import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/actionbar/actionbar.js';
import '../../../../base/browser/ui/actionbar/actionViewItems.js';
import '../../../../base/browser/ui/contextview/contextview.js';
import '../../../../base/browser/ui/dropdown/dropdownActionViewItem.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/async.js';
import '../../../../base/common/event.js';
import '../../../../base/common/iterator.js';
import '../../../../nls.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../base/common/themables.js';
import '../../codeEditor/browser/suggestEnabledInput/suggestEnabledInput.js';
import './icons.js';
import '../common/storedValue.js';
import '../common/testExplorerFilterState.js';
import '../common/testService.js';
import '../common/testTypes.js';
define(
			de[3776],
			he([
				1, 0, 7, 105, 198, 276, 437, 50, 15, 6, 103, 4, 49, 5, 21, 26, 1043,
				470, 515, 1001, 379, 185,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*actionbar*/,
				w /*actionViewItems*/,
				E /*contextview*/,
				C /*dropdownActionViewItem*/,
				d /*actions*/,
				m /*async*/,
				r /*event*/,
				u /*iterator*/,
				a /*nls*/,
				h /*contextView*/,
				c /*instantiation*/,
				n /*storage*/,
				g /*themables*/,
				p /*suggestEnabledInput*/,
				o /*icons*/,
				f /*storedValue*/,
				b /*testExplorerFilterState*/,
				s /*testService*/,
				l /*testTypes*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zMc = void 0),
					(t = mt(t));
				const y = {
					[b.TestFilterTerm.Failed]: (0, a.localize)(10774, null),
					[b.TestFilterTerm.Executed]: (0, a.localize)(10775, null),
					[b.TestFilterTerm.CurrentDoc]: (0, a.localize)(10776, null),
					[b.TestFilterTerm.OpenedFiles]: (0, a.localize)(10777, null),
					[b.TestFilterTerm.Hidden]: (0, a.localize)(10778, null),
				};
				let $ = class extends w.$$ib {
					constructor(I, T, P, k, L) {
						super(null, I, T),
							(this.n = P),
							(this.s = k),
							(this.y = L),
							(this.c = this.D(new r.$re())),
							(this.onDidFocus = this.c.event),
							(this.g = this.D(
								this.s.createInstance(f.$oqc, {
									key: "testing.filterHistory2",
									scope: n.StorageScope.WORKSPACE,
									target: n.StorageTarget.MACHINE,
								}),
							)),
							(this.h = new d.$rj(
								"markersFiltersAction",
								(0, a.localize)(10779, null),
								"testing-filter-button " + g.ThemeIcon.asClassName(o.$CKc),
							)),
							this.I(),
							this.D(L.excluded.onTestExclusionsChanged(this.I, this));
					}
					render(I) {
						I.classList.add("testing-filter-action-item");
						const T = this.D(new m.$Jh(400)),
							P = (this.b = t.$(".testing-filter-wrapper"));
						I.appendChild(P);
						let k = this.g.get({ lastValue: "", values: [] });
						k instanceof Array && (k = { lastValue: "", values: k }),
							k.lastValue && this.n.setText(k.lastValue);
						const L = (this.a = this.D(
							this.s.createInstance(p.$5Bc, {
								id: "testing.explorer.filter",
								ariaLabel: (0, a.localize)(10780, null),
								parent: P,
								suggestionProvider: {
									triggerCharacters: ["@"],
									provideResults: () =>
										[
											...Object.entries(y).map(([M, N]) => ({
												label: M,
												detail: N,
											})),
											...u.Iterable.map(
												this.y.collection.tags.values(),
												(M) => {
													const { ctrlId: N, tagId: A } = (0, l.$q4)(M.id),
														R = `@${N}:${A}`;
													return {
														label: `@${N}:${A}`,
														detail:
															this.y.collection.getNodeById(N)?.item.label,
														insertText: A.includes(" ")
															? `@${N}:"${A.replace(/(["\\])/g, "\\$1")}"`
															: R,
													};
												},
											),
										].filter((M) => !this.n.text.value.includes(M.label)),
								},
								resourceHandle: "testing:filter",
								suggestOptions: {
									value: this.n.text.value,
									placeholderText: (0, a.localize)(10781, null),
								},
								history: k.values,
							}),
						));
						this.D(
							this.n.text.onDidChange((M) => {
								L.getValue() !== M && L.setValue(M);
							}),
						),
							this.D(
								this.n.onDidRequestInputFocus(() => {
									L.focus();
								}),
							),
							this.D(
								L.onDidFocus(() => {
									this.c.fire();
								}),
							),
							this.D(
								L.onInputDidChange(() =>
									T.trigger(() => {
										L.addToHistory(), this.n.setText(L.getValue());
									}),
								),
							),
							this.D(
								new i.$eib(I, {
									actionViewItemProvider: (M, N) => {
										if (M.id === this.h.id)
											return this.s.createInstance(
												v,
												M,
												N,
												this.n,
												this.actionRunner,
											);
									},
								}),
							).push(this.h, { icon: !0, label: !1 }),
							this.layout(this.b.clientWidth);
					}
					layout(I) {
						this.a.layout(new t.$pgb(I - 24 - 8 - 22, 20));
					}
					focus() {
						this.a.focus();
					}
					saveState() {
						this.g.store({
							lastValue: this.a.getValue(),
							values: this.a.getHistory(),
						});
					}
					dispose() {
						this.saveState(), super.dispose();
					}
					I() {
						this.h.checked = this.y.excluded.hasAny;
					}
				};
				(e.$zMc = $),
					(e.$zMc = $ = Ne([j(2, b.$xLc), j(3, c.$Li), j(4, s.$sqc)], $));
				let v = class extends C.$Pob {
					constructor(I, T, P, k, L, D) {
						super(I, { getActions: () => this.O() }, L, {
							actionRunner: k,
							classNames: I.class,
							anchorAlignmentProvider: () => E.AnchorAlignment.RIGHT,
							menuAsChild: !0,
						}),
							(this.a = P),
							(this.g = D);
					}
					render(I) {
						super.render(I), this.H();
					}
					O() {
						return [
							...[
								b.TestFilterTerm.Failed,
								b.TestFilterTerm.Executed,
								b.TestFilterTerm.CurrentDoc,
								b.TestFilterTerm.OpenedFiles,
							].map((I) => ({
								checked: this.a.isFilteringFor(I),
								class: void 0,
								enabled: !0,
								id: I,
								label: y[I],
								run: () => this.a.toggleFilteringFor(I),
								tooltip: "",
								dispose: () => null,
							})),
							new d.$tj(),
							{
								checked: this.a.fuzzy.value,
								class: void 0,
								enabled: !0,
								id: "fuzzy",
								label: (0, a.localize)(10782, null),
								run: () => (this.a.fuzzy.value = !this.a.fuzzy.value),
								tooltip: "",
							},
							new d.$tj(),
							{
								checked: this.a.isFilteringFor(b.TestFilterTerm.Hidden),
								class: void 0,
								enabled: this.g.excluded.hasAny,
								id: "showExcluded",
								label: (0, a.localize)(10783, null),
								run: () => this.a.toggleFilteringFor(b.TestFilterTerm.Hidden),
								tooltip: "",
							},
							{
								class: void 0,
								enabled: this.g.excluded.hasAny,
								id: "removeExcluded",
								label: (0, a.localize)(10784, null),
								run: async () => this.g.excluded.clear(),
								tooltip: "",
							},
						];
					}
					H() {
						this.element.classList.toggle("checked", this._action.checked);
					}
				};
				v = Ne([j(4, h.$Xxb), j(5, s.$sqc)], v);
			},
		)

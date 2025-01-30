import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/cancellation.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/map.js';
import '../../../../../base/common/resources.js';
import '../../../../../base/common/themables.js';
import '../../../../../nls.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/label/common/label.js';
import '../../../../../platform/list/browser/listService.js';
import '../../../../../platform/quickinput/browser/pickerQuickAccess.js';
import '../../../../../platform/quickinput/common/quickAccess.js';
import '../../../../../platform/quickinput/common/quickInput.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../searchIcons.js';
import '../searchModel.js';
import '../searchView.js';
import '../../common/search.js';
import '../../../../services/editor/common/editorService.js';
import '../../../../services/search/common/queryBuilder.js';
import '../../../../services/search/common/search.js';
import '../../../../../base/common/event.js';
import '../../../../browser/quickaccess.js';
import '../../../../services/views/common/viewsService.js';
import '../../../../../base/common/async.js';
import '../../../../../base/common/codicons.js';
define(
			de[1972],
			he([
				1, 0, 33, 3, 59, 19, 26, 4, 10, 5, 73, 93, 392, 348, 63, 25, 561, 405,
				1068, 568, 18, 361, 186, 6, 473, 89, 15, 14,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*cancellation*/,
				i /*lifecycle*/,
				w /*map*/,
				E /*resources*/,
				C /*themables*/,
				d /*nls*/,
				m /*configuration*/,
				r /*instantiation*/,
				u /*label*/,
				a /*listService*/,
				h /*pickerQuickAccess*/,
				c /*quickAccess*/,
				n /*quickInput*/,
				g /*workspace*/,
				p /*searchIcons*/,
				o /*searchModel*/,
				f /*searchView*/,
				b /*search*/,
				s /*editorService*/,
				l /*queryBuilder*/,
				y /*search*/,
				$ /*event*/,
				v /*quickaccess*/,
				S /*viewsService*/,
				I /*async*/,
				T /*codicons*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$iPc = e.$hPc = void 0),
					(e.$hPc = "%");
				const P = {
						_reason: "quickAccessSearch",
						disregardIgnoreFiles: !1,
						disregardExcludeSettings: !1,
						onlyOpenEditors: !1,
						expandPatterns: !0,
					},
					k = 30,
					L = 10,
					D = 75;
				let M = class extends h.$GLb {
					r(A) {
						return {
							...P,
							extraFileResources: this.s.invokeFunction(b.$P7),
							maxResults: this.C.maxResults ?? void 0,
							isSmartCase: this.C.smartCase,
							previewOptions: { matchLines: 1, charsPerLine: A },
						};
					}
					constructor(A, R, O, B, U, z) {
						super(e.$hPc, {
							canAcceptInBackground: !0,
							shouldSkipTrimPickFilter: !0,
						}),
							(this.s = A),
							(this.t = R),
							(this.u = O),
							(this.w = B),
							(this.y = U),
							(this.z = z),
							(this.n = Promise.resolve({ results: [], messages: [] })),
							(this.j = this.s.createInstance(l.$M8)),
							(this.m = this.D(this.s.createInstance(o.$RNc))),
							(this.q = this.D(this.s.createInstance(v.$k9b))),
							(this.m.location = o.SearchModelLocation.QUICK_ACCESS),
							(this.h = new I.$Hh());
					}
					dispose() {
						this.m.dispose(), super.dispose();
					}
					provide(A, R, O) {
						const B = new i.$Zc();
						e.$hPc.length < A.value.length &&
							(A.valueSelection = [e.$hPc.length, A.value.length]),
							(A.buttons = [
								{
									location: n.QuickInputButtonLocation.Inline,
									iconClass: C.ThemeIcon.asClassName(T.$ak.goToSearch),
									tooltip: (0, d.localize)(9144, null),
								},
							]),
							this.q.reset(),
							B.add(
								A.onDidTriggerButton(() => {
									this.m.searchResult.count() > 0
										? this.G(void 0)
										: this.y.openView(y.$l7, !0),
										A.hide();
								}),
							);
						const U = () => {
							const [z] = A.activeItems;
							if (z?.match) {
								this.q.set();
								const F = z.match;
								this.h.queue(async () => {
									await this.q.openTransientEditor({
										resource: F.parent().resource,
										options: {
											preserveFocus: !0,
											revealIfOpened: !0,
											ignoreError: !0,
											selection: F.range(),
										},
									});
								});
							}
						};
						return (
							B.add(
								$.Event.debounce(A.onDidChangeActive, (z, F) => F, D, !0)(U),
							),
							B.add(
								$.Event.once(A.onWillHide)(({ reason: z }) => {
									z === n.QuickInputHideReason.Gesture && this.q.restore();
								}),
							),
							B.add(
								$.Event.once(A.onDidHide)(({ reason: z }) => {
									this.m.searchResult.toggleHighlights(!1);
								}),
							),
							B.add(super.provide(A, R, O)),
							B.add(
								A.onDidAccept(() => this.m.searchResult.toggleHighlights(!1)),
							),
							B
						);
					}
					get C() {
						const A = this.z.getValue().workbench?.editor,
							R = this.z.getValue().search;
						return {
							openEditorPinned:
								!A?.enablePreviewFromQuickOpen || !A?.enablePreview,
							preserveInput: R.quickAccess.preserveInput,
							maxResults: R.maxResults,
							smartCase: R.smartCase,
							sortOrder: R.sortOrder,
						};
					}
					get defaultFilterValue() {
						if (this.C.preserveInput)
							return c.DefaultQuickAccessFilterValue.LAST;
					}
					F(A, R) {
						if (A === "") return;
						const O = this.t.getWorkspace().folders,
							B = { pattern: A };
						this.m.searchResult.toggleHighlights(!1);
						const U = B.isRegExp ? 1e4 : 1e3,
							z = this.j.text(
								B,
								O.map((H) => H.uri),
								this.r(U),
							),
							F = this.m.search(z, void 0, R),
							x = async () => {
								(this.n = F.asyncResults), await F.asyncResults;
								const H = new w.$Hc(F.syncResults.map((q) => q.resource));
								return this.m.searchResult
									.matches()
									.filter((q) => !H.has(q.resource));
							};
						return {
							syncResults: this.m.searchResult.matches(),
							asyncResults: x(),
						};
					}
					G(A) {
						this.y.openView(y.$l7, !1);
						const R = this.y.getActiveViewWithId(y.$l7);
						R.replaceSearchModel(this.m, this.n),
							(this.m = this.s.createInstance(o.$RNc)),
							(this.m.location = o.SearchModelLocation.QUICK_ACCESS);
						const O = R?.getControl();
						A
							? (O.setFocus([A], (0, a.$BMb)()),
								O.setSelection([A], (0, a.$BMb)()),
								O.reveal(A))
							: R.searchAndReplaceWidget.focus();
					}
					H(A, R, O) {
						A = A.sort((z, F) => {
							if (O) {
								if (O === z.resource) return -1;
								if (O === F.resource) return 1;
							}
							return (0, o.$PNc)(z, F, this.C.sortOrder);
						});
						const B = A.length > R ? A.slice(0, R) : A,
							U = [];
						for (let z = 0; z < A.length; z++) {
							if (z === R) {
								U.push({ type: "separator" }),
									U.push({
										label: (0, d.localize)(9145, null),
										iconClass: C.ThemeIcon.asClassName(p.$4Nc),
										accept: async () => {
											this.G(A[R]);
										},
									});
								break;
							}
							const F = B[z],
								x = (0, E.$jh)(F.resource),
								H = this.w.getUriLabel((0, E.$mh)(F.resource), {
									relative: !0,
								});
							U.push({
								label: x,
								type: "separator",
								description: H,
								buttons: [
									{
										iconClass: C.ThemeIcon.asClassName(p.$iOc),
										tooltip: (0, d.localize)(9146, null),
									},
								],
								trigger: async () => (
									await this.I(F, {}), h.TriggerAction.CLOSE_PICKER
								),
							});
							const q = F.matches() ?? [];
							for (let V = 0; V < q.length; V++) {
								const G = q[V];
								if (V === L) {
									U.push({
										label: (0, d.localize)(9147, null),
										iconClass: C.ThemeIcon.asClassName(p.$4Nc),
										accept: async () => {
											this.G(G);
										},
									});
									break;
								}
								const K = G.preview(),
									J = (K.before + K.inside + K.after).trim().substring(0, 999),
									W = [
										{
											start: K.before.length,
											end: K.before.length + K.inside.length,
										},
									];
								U.push({
									label: `${J}`,
									highlights: { label: W },
									buttons: [
										{
											iconClass: C.ThemeIcon.asClassName(p.$5Nc),
											tooltip: (0, d.localize)(9148, null),
										},
									],
									ariaLabel: `Match at location ${G.range().startLineNumber}:${G.range().startColumn} - ${J}`,
									accept: async (X, Y) => {
										await this.I(F, {
											keyMods: X,
											selection: (0, f.$ePc)(G, this.m),
											preserveFocus: Y.inBackground,
											forcePinned: Y.inBackground,
										});
									},
									trigger: () => (this.G(G), h.TriggerAction.CLOSE_PICKER),
									match: G,
								});
							}
						}
						return U;
					}
					async I(A, R) {
						const O = {
								preserveFocus: R.preserveFocus,
								pinned:
									R.keyMods?.ctrlCmd ||
									R.forcePinned ||
									this.C.openEditorPinned,
								selection: R.selection,
							},
							B =
								R.keyMods?.alt ||
								(this.C.openEditorPinned && R.keyMods?.ctrlCmd) ||
								R.forceOpenSideBySide
									? s.$KY
									: s.$JY;
						await this.u.openEditor({ resource: A.resource, options: O }, B);
					}
					g(A, R, O) {
						const B = this.m;
						if (A === "")
							return (
								this.m.searchResult.clear(),
								[{ label: (0, d.localize)(9149, null) }]
							);
						const U = R.add(new t.$Ce());
						R.add(
							O.onCancellationRequested(() => {
								B.location === o.SearchModelLocation.QUICK_ACCESS && U.cancel();
							}),
						);
						const z = this.F(A, U.token);
						if (!z) return null;
						const F = z.syncResults,
							x = this.H(F, k, this.u.activeEditor?.resource);
						return (
							x.length > 0 && this.m.searchResult.toggleHighlights(!0),
							F.length >= k
								? x
								: {
										picks: x,
										additionalPicks: z.asyncResults
											.then((H) =>
												H.length + x.length === 0
													? [{ label: (0, d.localize)(9150, null) }]
													: this.H(H, k - F.length),
											)
											.then(
												(H) => (
													H.length > 0 &&
														this.m.searchResult.toggleHighlights(!0),
													H
												),
											),
									}
						);
					}
				};
				(e.$iPc = M),
					(e.$iPc = M =
						Ne(
							[
								j(0, r.$Li),
								j(1, g.$Vi),
								j(2, s.$IY),
								j(3, u.$3N),
								j(4, S.$HMb),
								j(5, m.$gj),
							],
							M,
						));
			},
		),
		
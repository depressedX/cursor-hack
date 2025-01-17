import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../platform/quickinput/browser/pickerQuickAccess.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../common/editor.js';
import '../../../services/editor/common/editorService.js';
import '../../../../editor/common/services/model.js';
import '../../../../editor/common/languages/language.js';
import '../../../../editor/common/services/getIconClasses.js';
import '../../../../base/common/fuzzyScorer.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/themables.js';
import '../../../../css!vs/workbench/browser/parts/editor/media/editorquickaccess.js';
define(
			de[1015],
			he([1, 0, 4, 63, 392, 66, 44, 18, 67, 61, 252, 322, 14, 26, 2341]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				var n, g, p;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$uVb = e.$tVb = e.$sVb = e.$rVb = void 0);
				let o = class extends w.$GLb {
					constructor(y, $, v, S, I) {
						super(y, {
							canAcceptInBackground: !0,
							noResultsPick: {
								label: (0, t.localize)(3478, null),
								groupId: -1,
							},
						}),
							(this.b = $),
							(this.h = v),
							(this.j = S),
							(this.m = I),
							(this.a = new (class {
								constructor() {
									(this.scorerCache = Object.create(null)),
										(this.isQuickNavigating = void 0);
								}
								reset(T) {
									T || (this.scorerCache = Object.create(null)),
										(this.isQuickNavigating = T);
								}
							})());
					}
					provide(y, $) {
						return this.a.reset(!!y.quickNavigate), super.provide(y, $);
					}
					g(y) {
						const $ = (0, a.$hs)(y),
							v = this.q().filter((I) => {
								if (!$.normalized) return !0;
								const T = (0, a.$fs)(I, $, !0, i.$CJ, this.a.scorerCache);
								return T.score
									? ((I.highlights = {
											label: T.labelMatch,
											description: T.descriptionMatch,
										}),
										!0)
									: !1;
							});
						if ($.normalized) {
							const I = this.b
								.getGroups(E.GroupsOrder.GRID_APPEARANCE)
								.map((T) => T.id);
							v.sort((T, P) =>
								T.groupId !== P.groupId
									? I.indexOf(T.groupId) - I.indexOf(P.groupId)
									: (0, a.$gs)(T, P, $, !0, i.$CJ, this.a.scorerCache),
							);
						}
						const S = [];
						if (this.b.count > 1) {
							let I;
							for (const T of v) {
								if (typeof I != "number" || I !== T.groupId) {
									const P = this.b.getGroup(T.groupId);
									P && S.push({ type: "separator", label: P.label }),
										(I = T.groupId);
								}
								S.push(T);
							}
						} else S.push(...v);
						return S;
					}
					q() {
						const y = this.r(),
							$ = new Map();
						for (const { groupId: v } of y)
							if (!$.has(v)) {
								const S = this.b.getGroup(v);
								S && $.set(v, S.ariaLabel);
							}
						return this.r().map(({ editor: v, groupId: S }) => {
							const I = C.$A1.getOriginalUri(v, {
									supportSideBySide: C.SideBySideEditor.PRIMARY,
								}),
								T = v.isDirty() && !v.isSaving(),
								P = v.getDescription(),
								k = P ? `${v.getName()} ${P}` : v.getName();
							return {
								groupId: S,
								resource: I,
								label: v.getName(),
								ariaLabel:
									$.size > 1
										? T
											? (0, t.localize)(3479, null, k, $.get(S))
											: (0, t.localize)(3480, null, k, $.get(S))
										: T
											? (0, t.localize)(3481, null, k)
											: k,
								description: P,
								iconClasses: (0, u.$BDb)(
									this.j,
									this.m,
									I,
									void 0,
									v.getIcon(),
								).concat(v.getLabelExtraClasses()),
								italic: !this.b.getGroup(S)?.isPinned(v),
								buttons: [
									{
										iconClass: T
											? "dirty-editor " +
												c.ThemeIcon.asClassName(h.$ak.closeDirty)
											: c.ThemeIcon.asClassName(h.$ak.close),
										tooltip: (0, t.localize)(3482, null),
										alwaysVisible: T,
									},
								],
								trigger: async () => {
									const L = this.b.getGroup(S);
									return L &&
										(await L.closeEditor(v, { preserveFocus: !0 }),
										!L.contains(v))
										? w.TriggerAction.REMOVE_ITEM
										: w.TriggerAction.NO_ACTION;
								},
								accept: (L, D) =>
									this.b
										.getGroup(S)
										?.openEditor(v, { preserveFocus: D.inBackground }),
							};
						});
					}
				};
				(e.$rVb = o),
					(e.$rVb = o =
						Ne([j(1, E.$EY), j(2, d.$IY), j(3, m.$QO), j(4, r.$nM)], o));
				let f = class extends o {
					static {
						n = this;
					}
					static {
						this.PREFIX = "edt active ";
					}
					constructor(y, $, v, S) {
						super(n.PREFIX, y, $, v, S);
					}
					r() {
						const y = this.b.activeGroup;
						return y
							.getEditors(C.EditorsOrder.MOST_RECENTLY_ACTIVE)
							.map(($) => ({ editor: $, groupId: y.id }));
					}
				};
				(e.$sVb = f),
					(e.$sVb =
						f =
						n =
							Ne([j(0, E.$EY), j(1, d.$IY), j(2, m.$QO), j(3, r.$nM)], f));
				let b = class extends o {
					static {
						g = this;
					}
					static {
						this.PREFIX = "edt ";
					}
					constructor(y, $, v, S) {
						super(g.PREFIX, y, $, v, S);
					}
					r() {
						const y = [];
						for (const $ of this.b.getGroups(E.GroupsOrder.GRID_APPEARANCE))
							for (const v of $.getEditors(C.EditorsOrder.SEQUENTIAL))
								y.push({ editor: v, groupId: $.id });
						return y;
					}
				};
				(e.$tVb = b),
					(e.$tVb =
						b =
						g =
							Ne([j(0, E.$EY), j(1, d.$IY), j(2, m.$QO), j(3, r.$nM)], b));
				let s = class extends o {
					static {
						p = this;
					}
					static {
						this.PREFIX = "edt mru ";
					}
					constructor(y, $, v, S) {
						super(p.PREFIX, y, $, v, S);
					}
					r() {
						const y = [];
						for (const $ of this.h.getEditors(
							C.EditorsOrder.MOST_RECENTLY_ACTIVE,
						))
							y.push($);
						return y;
					}
				};
				(e.$uVb = s),
					(e.$uVb =
						s =
						p =
							Ne([j(0, E.$EY), j(1, d.$IY), j(2, m.$QO), j(3, r.$nM)], s));
			},
		),
		
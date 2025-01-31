import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/registry/common/platform.js';
import './commentService.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../common/contributions.js';
import '../../../services/activity/common/activity.js';
import './commentsTreeViewer.js';
import '../../../../editor/common/languages.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../platform/actions/common/actions.js';
import './commentsView.js';
import '../../../browser/parts/views/viewPane.js';
import '../../../../base/common/codicons.js';
import '../../../services/editor/common/editorService.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import './commentsController.js';
import '../../accessibility/browser/accessibilityConfiguration.js';
import '../../../../platform/accessibility/browser/accessibleView.js';
import '../../../../platform/accessibility/browser/accessibleViewRegistry.js';
import './commentsAccessibleView.js';
import './commentsAccessibility.js';
import './commentsEditorContribution.js';
define(
			de[3814],
			he([
				1, 0, 4, 20, 30, 447, 81, 3, 8, 55, 260, 683, 74, 52, 11, 1330, 146, 14,
				18, 68, 1048, 130, 178, 412, 3813, 1900, 3811,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*extensions*/,
				w /*platform*/,
				E /*commentService*/,
				C /*configurationRegistry*/,
				d /*lifecycle*/,
				m /*contextkey*/,
				r /*contributions*/,
				u /*activity*/,
				a /*commentsTreeViewer*/,
				h /*languages*/,
				c /*lifecycle*/,
				n /*actions*/,
				g /*commentsView*/,
				p /*viewPane*/,
				o /*codicons*/,
				f /*editorService*/,
				b /*uriIdentity*/,
				s /*commentsController*/,
				l /*accessibilityConfiguration*/,
				y /*accessibleView*/,
				$ /*accessibleViewRegistry*/,
				v /*commentsAccessibleView*/,
				S /*commentsAccessibility*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$rSc = void 0),
					(t = mt(t)),
					(0, n.$4X)(
						class extends p.$WMb {
							constructor() {
								super({
									viewId: a.$$oc,
									id: "comments.collapse",
									title: t.localize(5013, null),
									f1: !1,
									icon: o.$ak.collapseAll,
									menu: {
										id: n.$XX.ViewTitle,
										group: "navigation",
										when: m.$Kj.and(
											m.$Kj.and(m.$Kj.equals("view", a.$$oc), g.$upc),
											g.$vpc,
										),
										order: 100,
									},
								});
							}
							runInView(P, k) {
								k.collapseAll();
							}
						},
					),
					(0, n.$4X)(
						class extends p.$WMb {
							constructor() {
								super({
									viewId: a.$$oc,
									id: "comments.expand",
									title: t.localize(5014, null),
									f1: !1,
									icon: o.$ak.expandAll,
									menu: {
										id: n.$XX.ViewTitle,
										group: "navigation",
										when: m.$Kj.and(
											m.$Kj.and(m.$Kj.equals("view", a.$$oc), g.$upc),
											m.$Kj.not(g.$vpc.key),
										),
										order: 100,
									},
								});
							}
							runInView(P, k) {
								k.expandAll();
							}
						},
					),
					(0, n.$4X)(
						class extends n.$3X {
							constructor() {
								super({
									id: "comments.reply",
									title: t.localize(5015, null),
									icon: o.$ak.reply,
									precondition: m.$Kj.equals("canReply", !0),
									menu: [
										{ id: n.$XX.CommentsViewThreadActions, order: 100 },
										{
											id: n.$XX.AccessibleView,
											when: m.$Kj.and(
												l.$NLb,
												m.$Kj.equals(
													l.$SLb.key,
													y.AccessibleViewProviderId.Comments,
												),
											),
										},
									],
								});
							}
							run(P, k) {
								const L = P.get(E.$62b),
									D = P.get(f.$IY),
									M = P.get(b.$Vl);
								(0, s.$qpc)(
									L,
									D,
									M,
									k.thread,
									k.thread.comments[k.thread.comments.length - 1],
									!0,
								);
							}
						},
					),
					w.$Io
						.as(C.$No.Configuration)
						.registerConfiguration({
							id: "comments",
							order: 20,
							title: t.localize(5016, null),
							type: "object",
							properties: {
								"comments.openPanel": {
									enum: [
										"neverOpen",
										"openOnSessionStart",
										"openOnSessionStartWithComments",
									],
									default: "openOnSessionStartWithComments",
									description: t.localize(5017, null),
									restricted: !1,
									markdownDeprecationMessage: t.localize(5018, null),
								},
								"comments.openView": {
									enum: ["never", "file", "firstFile", "firstFileUnresolved"],
									enumDescriptions: [
										t.localize(5019, null),
										t.localize(5020, null),
										t.localize(5021, null),
										t.localize(5022, null),
									],
									default: "firstFile",
									description: t.localize(5023, null),
									restricted: !1,
								},
								"comments.useRelativeTime": {
									type: "boolean",
									default: !0,
									description: t.localize(5024, null),
								},
								"comments.visible": {
									type: "boolean",
									default: !0,
									description: t.localize(5025, null),
								},
								"comments.maxHeight": {
									type: "boolean",
									default: !0,
									description: t.localize(5026, null),
								},
								"comments.collapseOnResolve": {
									type: "boolean",
									default: !0,
									description: t.localize(5027, null),
								},
							},
						}),
					(0, i.$lK)(E.$62b, E.$72b, i.InstantiationType.Delayed);
				let I = class extends d.$1c {
					constructor(P, k) {
						super(),
							(this.c = P),
							(this.f = k),
							(this.a = this.D(new d.$2c())),
							(this.b = 0),
							this.D(this.c.onDidSetAllCommentThreads(this.g, this)),
							this.D(this.c.onDidUpdateCommentThreads(this.h, this));
					}
					g(P) {
						let k = 0;
						for (const L of P.commentThreads)
							L.state === h.CommentThreadState.Unresolved && k++;
						this.j(k);
					}
					h() {
						let P = 0;
						for (const k of this.c.commentsModel.resourceCommentThreads)
							for (const L of k.commentThreads)
								L.threadState === h.CommentThreadState.Unresolved && P++;
						this.j(P);
					}
					j(P) {
						if (P === this.b) return;
						this.b = P;
						const k = t.localize(5028, null, this.b);
						this.a.value = this.f.showViewActivity(a.$$oc, {
							badge: new u.$8qc(this.b, () => k),
						});
					}
				};
				(e.$rSc = I),
					(e.$rSc = I = Ne([j(0, E.$62b), j(1, u.$7qc)], I)),
					w.$Io
						.as(r.Extensions.Workbench)
						.registerWorkbenchContribution(I, c.LifecyclePhase.Eventually),
					$.$Whc.register(new v.$oSc()),
					$.$Whc.register(new S.$qSc());
			},
		)

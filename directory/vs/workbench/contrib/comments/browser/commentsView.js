import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/resources.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/theme/common/themeService.js';
import '../common/commentModel.js';
import './commentService.js';
import '../../../services/editor/common/editorService.js';
import '../../../browser/labels.js';
import './commentsTreeViewer.js';
import '../../../browser/parts/views/viewPane.js';
import '../../../common/views.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import './comments.js';
import './commentsViewActions.js';
import '../../../common/memento.js';
import '../../../../platform/storage/common/storage.js';
import './commentsFilterOptions.js';
import '../../../../editor/common/languages.js';
import './commentsController.js';
import '../../../browser/actions/widgetNavigationCommands.js';
import './commentsModel.js';
import '../../../../platform/hover/browser/hover.js';
import '../../accessibility/browser/accessibilityConfiguration.js';
import '../../accessibility/browser/accessibleViewActions.js';
import '../../../services/path/common/pathService.js';
import '../../../../css!vs/workbench/contrib/comments/browser/media/panel.js';
define(
			de[1330],
			he([
				1, 0, 4, 7, 19, 5, 35, 1240, 447, 18, 233, 683, 146, 60, 10, 8, 49, 39,
				41, 32, 68, 1724, 3812, 282, 21, 1725, 74, 1048, 518, 983, 72, 130,
				1032, 165, 2403,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$xpc = e.$wpc = e.$vpc = e.$upc = void 0),
					(t = mt(t)),
					(i = mt(i)),
					(e.$upc = new g.$5j("commentsView.hasComments", !1)),
					(e.$vpc = new g.$5j("commentsView.someCommentsExpanded", !1)),
					(e.$wpc = new g.$5j("commentsView.commentFocused", !1));
				const A = "commentsViewState";
				function R(B) {
					const U = [];
					for (const z of B.resourceCommentThreads) {
						const F = [];
						for (const x of z.commentThreads)
							(0, k.$42b)(x.thread) && F.push({ element: x });
						F.length > 0 && U.push({ element: z, children: F });
					}
					return U;
				}
				let O = class extends h.$UMb {
					get focusedCommentNode() {
						const U = this.f?.getFocus();
						if (U?.length === 1 && U[0] instanceof d.$Z2b) return U[0];
					}
					get focusedCommentInfo() {
						if (this.focusedCommentNode)
							return this.uc(this.focusedCommentNode);
					}
					focusNextNode() {
						if (!this.f) return;
						const U = this.f.getFocus()?.[0];
						if (!U) return;
						let z = this.f.navigate(U).next();
						for (; z && !(z instanceof d.$Z2b); ) z = this.f.navigate(z).next();
						z && this.f.setFocus([z]);
					}
					focusPreviousNode() {
						if (!this.f) return;
						const U = this.f.getFocus()?.[0];
						if (!U) return;
						let z = this.f.navigate(U).previous();
						for (; z && !(z instanceof d.$Z2b); )
							z = this.f.navigate(z).previous();
						z && this.f.setFocus([z]);
					}
					constructor(U, z, F, x, H, q, V, G, K, J, W, X, Y, ie, ne, ee) {
						const _ = new $.$eEb(A, ne),
							te = _.getMemento(
								v.StorageScope.WORKSPACE,
								v.StorageTarget.MACHINE,
							);
						super(
							{
								...U,
								filterOptions: {
									placeholder: t.localize(5064, null),
									ariaLabel: t.localize(5065, null),
									history: te.filterHistory || [],
									text: te.filter || "",
									focusContextKey: l.$hpc.key,
								},
							},
							G,
							V,
							H,
							q,
							F,
							z,
							K,
							J,
							X,
							Y,
						),
							(this.kc = x),
							(this.lc = W),
							(this.mc = ie),
							(this.nc = ee),
							(this.ab = 0),
							(this.fc = 0),
							(this.gc = 0),
							(this.jc = void 0),
							(this.onDidChangeVisibility = this.onDidChangeBodyVisibility),
							(this.sb = e.$upc.bindTo(q)),
							(this.cc = e.$vpc.bindTo(q)),
							(this.dc = e.$wpc.bindTo(q)),
							(this.ic = _),
							(this.hc = te),
							(this.filters = this.D(
								new y.$gpc(
									{
										showResolved: this.hc.showResolved !== !1,
										showUnresolved: this.hc.showUnresolved !== !1,
										sortBy:
											this.hc.sortBy ?? y.CommentsSortOrder.ResourceAscending,
									},
									this.Bb,
								),
							)),
							(this.ec = new a.$epc(
								new S.$0oc(
									this.filterWidget.getFilterText(),
									this.filters.showResolved,
									this.filters.showUnresolved,
								),
							)),
							this.D(
								this.filters.onDidChange((Q) => {
									(Q.showResolved || Q.showUnresolved) && this.oc(),
										Q.sortBy && this.zc();
								}),
							),
							this.D(this.filterWidget.onDidChangeFilterText(() => this.oc()));
					}
					saveState() {
						(this.hc.filter = this.filterWidget.getFilterText()),
							(this.hc.filterHistory = this.filterWidget.getHistory()),
							(this.hc.showResolved = this.filters.showResolved),
							(this.hc.showUnresolved = this.filters.showUnresolved),
							(this.hc.sortBy = this.filters.sortBy),
							this.ic.saveMemento(),
							super.saveState();
					}
					render() {
						super.render(),
							this.D(
								(0, P.$D3b)({
									name: "commentsView",
									focusNotifiers: [this, this.filterWidget],
									focusNextWidget: () => {
										this.filterWidget.hasFocus() && this.focus();
									},
									focusPreviousWidget: () => {
										this.filterWidget.hasFocus() || this.focusFilter();
									},
								}),
							);
					}
					focusFilter() {
						this.filterWidget.focus();
					}
					clearFilterText() {
						this.filterWidget.setFilterText("");
					}
					getFilterStats() {
						return (
							this.jc ||
								(this.jc = {
									total: this.ab,
									filtered: this.f?.getVisibleItemCount() ?? 0,
								}),
							this.jc
						);
					}
					oc() {
						(this.ec.options = new S.$0oc(
							this.filterWidget.getFilterText(),
							this.filters.showResolved,
							this.filters.showUnresolved,
						)),
							this.f?.filterComments(),
							(this.jc = void 0);
						const { total: U, filtered: z } = this.getFilterStats();
						this.filterWidget.updateBadge(
							U === z || U === 0 ? void 0 : t.localize(5066, null, z, U),
						),
							this.filterWidget.checkMoreFilters(
								!this.filters.showResolved || !this.filters.showUnresolved,
							);
					}
					W(U) {
						super.W(U), U.classList.add("comments-panel");
						const z = i.$fhb(U, i.$(".comments-panel-container"));
						(this.h = i.$fhb(z, i.$(".tree-container"))),
							this.h.classList.add(
								"file-icon-themable-tree",
								"show-file-icons",
							),
							(this.jc = void 0),
							this.xc(),
							this.sc(z),
							this.D(this.lc.onDidSetAllCommentThreads(this.Ac, this)),
							this.D(this.lc.onDidUpdateCommentThreads(this.Bc, this)),
							this.D(this.lc.onDidDeleteDataProvider(this.Cc, this)),
							this.D(
								this.onDidChangeBodyVisibility((F) => {
									F && this.zc();
								}),
							),
							this.qc();
					}
					focus() {
						super.focus();
						const U = this.f?.getHTMLElement();
						(U && i.$Kgb(U)) ||
							(!this.lc.commentsModel.hasCommentThreads() && this.s
								? this.s.focus()
								: this.f && this.f.domFocus());
					}
					qc() {
						this.h.classList.toggle(
							"hidden",
							!this.lc.commentsModel.hasCommentThreads(),
						),
							this.tc(),
							this.f?.setChildren(null, R(this.lc.commentsModel));
					}
					collapseAll() {
						this.f &&
							(this.f.collapseAll(),
							this.f.setSelection([]),
							this.f.setFocus([]),
							this.f.domFocus(),
							this.f.focusFirst());
					}
					expandAll() {
						this.f &&
							(this.f.expandAll(),
							this.f.setSelection([]),
							this.f.setFocus([]),
							this.f.domFocus(),
							this.f.focusFirst());
					}
					get hasRendered() {
						return !!this.f;
					}
					L(U = this.fc, z = this.gc) {
						this.s && (this.s.style.height = `${U}px`),
							this.f?.layout(U, z),
							(this.fc = U),
							(this.gc = z);
					}
					sc(U) {
						(this.s = i.$fhb(U, i.$(".message-box-container"))),
							this.s.setAttribute("tabIndex", "0");
					}
					tc() {
						(this.s.textContent = this.lc.commentsModel.getMessage()),
							this.s.classList.toggle(
								"hidden",
								this.lc.commentsModel.hasCommentThreads(),
							);
					}
					uc(U, z) {
						let F = "";
						if (
							z &&
							this.Ab.getValue(D.AccessibilityVerbositySettingId.Comments)
						) {
							const q = this.yb.lookupKeybinding(M.$tpc.id)?.getAriaLabel();
							F = q ? t.localize(5067, null, q) : t.localize(5068, null);
						}
						const x = this.wc(U, z),
							H = this.vc(U, z);
						return U.range
							? U.threadRelevance === I.CommentThreadApplicability.Outdated
								? F +
									t.localize(
										5069,
										null,
										U.comment.userName,
										U.range.startLineNumber,
										U.range.startColumn,
										(0, w.$kh)(U.resource),
										x,
										typeof U.comment.body == "string"
											? U.comment.body
											: U.comment.body.value,
									) +
									H
								: F +
									t.localize(
										5070,
										null,
										U.comment.userName,
										U.range.startLineNumber,
										U.range.startColumn,
										(0, w.$kh)(U.resource),
										x,
										typeof U.comment.body == "string"
											? U.comment.body
											: U.comment.body.value,
									) +
									H
							: U.threadRelevance === I.CommentThreadApplicability.Outdated
								? F +
									t.localize(
										5071,
										null,
										U.comment.userName,
										(0, w.$kh)(U.resource),
										x,
										typeof U.comment.body == "string"
											? U.comment.body
											: U.comment.body.value,
									) +
									H
								: F +
									t.localize(
										5072,
										null,
										U.comment.userName,
										(0, w.$kh)(U.resource),
										x,
										typeof U.comment.body == "string"
											? U.comment.body
											: U.comment.body.value,
									) +
									H;
					}
					vc(U, z) {
						return !U.replies.length || z
							? ""
							: `
` +
									U.replies
										.map((F) =>
											t.localize(
												5073,
												null,
												F.comment.userName,
												typeof F.comment.body == "string"
													? F.comment.body
													: F.comment.body.value,
											),
										)
										.join(`
`);
					}
					wc(U, z) {
						return U.replies.length && !z
							? t.localize(5074, null, U.replies.length)
							: "";
					}
					xc() {
						(this.c = this.D(this.Db.createInstance(u.$uPb, this))),
							(this.f = this.D(
								this.Db.createInstance(a.$fpc, this.c, this.h, {
									overrideStyles: this.Zb().listOverrideStyles,
									selectionNavigation: !0,
									filter: this.ec,
									sorter: {
										compare: (U, z) => {
											if (U instanceof k.$52b || z instanceof k.$52b) return 0;
											if (
												this.filters.sortBy ===
												y.CommentsSortOrder.UpdatedAtDescending
											)
												return U.lastUpdatedAt > z.lastUpdatedAt ? -1 : 1;
											if (
												this.filters.sortBy ===
												y.CommentsSortOrder.ResourceAscending
											) {
												if (U instanceof d.$12b && z instanceof d.$12b) {
													const F = this.nc.defaultUriScheme;
													return U.resource.scheme !== z.resource.scheme &&
														(U.resource.scheme === F || z.resource.scheme === F)
														? z.resource.scheme === F
															? 1
															: -1
														: U.resource.toString() > z.resource.toString()
															? 1
															: -1;
												} else if (
													U instanceof d.$Z2b &&
													z instanceof d.$Z2b &&
													U.thread.range &&
													z.thread.range
												)
													return U.thread.range?.startLineNumber >
														z.thread.range?.startLineNumber
														? 1
														: -1;
											}
											return 0;
										},
									},
									keyboardNavigationLabelProvider: {
										getKeyboardNavigationLabel: (U) => {},
									},
									accessibilityProvider: {
										getAriaLabel: (U) =>
											U instanceof k.$52b
												? t.localize(5075, null)
												: U instanceof d.$12b
													? t.localize(
															5076,
															null,
															(0, w.$kh)(U.resource),
															U.resource.fsPath,
														)
													: U instanceof d.$Z2b
														? this.uc(U, !0)
														: "",
										getWidgetAriaLabel() {
											return a.$apc.value;
										},
									},
								}),
							)),
							this.D(
								this.f.onDidOpen((U) => {
									this.yc(
										U.element,
										U.editorOptions.pinned,
										U.editorOptions.preserveFocus,
										U.sideBySide,
									);
								}),
							),
							this.D(
								this.f.onDidChangeModel(() => {
									this.Dc();
								}),
							),
							this.D(
								this.f.onDidChangeCollapseState(() => {
									this.Dc();
								}),
							),
							this.D(this.f.onDidFocus(() => this.dc.set(!0))),
							this.D(this.f.onDidBlur(() => this.dc.set(!1)));
					}
					yc(U, z, F, x) {
						if (!U || !(U instanceof d.$12b || U instanceof d.$Z2b)) return;
						const H =
								U instanceof d.$12b ? U.commentThreads[0].thread : U.thread,
							q = U instanceof d.$12b ? U.commentThreads[0].comment : void 0;
						return (0, T.$qpc)(this.lc, this.kc, this.mc, H, q, !1, z, F, x);
					}
					async zc() {
						if (
							this.f &&
							this.isVisible() &&
							(this.sb.set(this.lc.commentsModel.hasCommentThreads()),
							(this.jc = void 0),
							this.qc(),
							this.f.getSelection().length === 0 &&
								this.lc.commentsModel.hasCommentThreads())
						) {
							const U =
								this.lc.commentsModel.resourceCommentThreads[0]
									.commentThreads[0];
							U && (this.f.setFocus([U]), this.f.setSelection([U]));
						}
					}
					Ac(U) {
						(this.jc = void 0), (this.ab += U.commentThreads.length);
						let z = 0;
						for (const F of U.commentThreads)
							F.state === I.CommentThreadState.Unresolved && z++;
						this.zc();
					}
					Bc(U) {
						(this.jc = void 0),
							(this.ab += U.added.length),
							(this.ab -= U.removed.length);
						let z = 0;
						for (const F of this.lc.commentsModel.resourceCommentThreads)
							for (const x of F.commentThreads)
								x.threadState === I.CommentThreadState.Unresolved && z++;
						this.zc();
					}
					Cc(U) {
						(this.jc = void 0), (this.ab = 0), this.zc();
					}
					Dc() {
						this.cc.set(this.isSomeCommentsExpanded());
					}
					areAllCommentsExpanded() {
						if (!this.f) return !1;
						const U = this.f.navigate();
						for (; U.next(); ) if (this.f.isCollapsed(U.current())) return !1;
						return !0;
					}
					isSomeCommentsExpanded() {
						if (!this.f) return !1;
						const U = this.f.navigate();
						for (; U.next(); ) if (!this.f.isCollapsed(U.current())) return !0;
						return !1;
					}
				};
				(e.$xpc = O),
					(e.$xpc = O =
						Ne(
							[
								j(1, E.$Li),
								j(2, c.$K1),
								j(3, r.$IY),
								j(4, n.$gj),
								j(5, g.$6j),
								j(6, p.$Xxb),
								j(7, o.$uZ),
								j(8, f.$7rb),
								j(9, C.$iP),
								j(10, m.$62b),
								j(11, b.$km),
								j(12, L.$Uyb),
								j(13, s.$Vl),
								j(14, v.$lq),
								j(15, N.$I8),
							],
							O,
						));
			},
		),
		
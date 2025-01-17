import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/progressbar/progressbar.js';
import '../../../../base/common/async.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/map.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/list/browser/listService.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../browser/parts/views/viewPane.js';
import '../../../services/editor/common/editorService.js';
import '../../../../base/common/resources.js';
import '../../../common/views.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/telemetry/common/telemetry.js';
import './outlineViewState.js';
import '../../../services/outline/browser/outline.js';
import '../../../common/editor.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/event.js';
import '../../../../base/browser/ui/tree/abstractTree.js';
import './outline.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../css!vs/workbench/contrib/outline/browser/outlinePane.js';
define(
			de[3834],
			he([
				1, 0, 7, 436, 15, 3, 59, 4, 10, 8, 49, 5, 39, 93, 21, 35, 146, 18, 19,
				60, 41, 32, 3121, 475, 44, 33, 6, 411, 802, 106, 72, 2473,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2Yc = void 0),
					(t = mt(t));
				class D {
					constructor(A, R) {
						(this.c = A), (this.order = R);
					}
					compare(A, R) {
						return this.order === P.OutlineSortOrder.ByKind
							? this.c.compareByType(A, R)
							: this.order === P.OutlineSortOrder.ByName
								? this.c.compareByName(A, R)
								: this.c.compareByPosition(A, R);
					}
				}
				let M = class extends p.$TMb {
					static {
						this.Id = "outline";
					}
					constructor(A, R, O, B, U, z, F, x, H, q, V, G, K, J) {
						super(A, x, q, F, H, B, O, V, G, K, J),
							(this.fc = R),
							(this.gc = O),
							(this.hc = U),
							(this.ic = z),
							(this.c = new E.$Zc()),
							(this.f = new E.$Zc()),
							(this.g = new E.$Zc()),
							(this.h = new y.$1Yc()),
							(this.j = new E.$2c()),
							(this.ab = new C.$Jc(10)),
							this.h.restore(this.hc),
							this.c.add(this.h),
							H.bufferChangeEvents(() => {
								(this.sb = P.$C4b.bindTo(H)),
									(this.cc = P.$D4b.bindTo(H)),
									(this.dc = P.$E4b.bindTo(H)),
									(this.ec = P.$F4b.bindTo(H));
							});
						const W = () => {
							this.sb.set(this.h.followCursor),
								this.cc.set(this.h.filterOnType),
								this.dc.set(this.h.sortBy);
						};
						W(), this.c.add(this.h.onDidChange(W));
					}
					dispose() {
						this.c.dispose(),
							this.g.dispose(),
							this.f.dispose(),
							this.j.dispose(),
							super.dispose();
					}
					focus() {
						super.focus(), this.t?.domFocus();
					}
					W(A) {
						super.W(A), (this.m = A), A.classList.add("outline-pane");
						const R = t.$(".outline-progress");
						(this.n = t.$(".outline-message")),
							(this.r = new i.$bpb(R, k.$nyb)),
							(this.s = t.$(".outline-tree")),
							t.$fhb(A, R, this.n, this.s),
							this.c.add(
								this.onDidChangeBodyVisibility((O) => {
									if (!O) this.j.clear(), this.g.clear(), this.f.clear();
									else if (!this.j.value) {
										const B = I.Event.any(
											this.ic.onDidActiveEditorChange,
											this.fc.onDidChange,
										);
										(this.j.value = B(() => this.nc(this.ic.activeEditorPane))),
											this.nc(this.ic.activeEditorPane);
									}
								}),
							);
					}
					X(A, R) {
						super.X(A, R), this.t?.layout(A, R), (this.L = new t.$pgb(R, A));
					}
					collapseAll() {
						this.t?.collapseAll();
					}
					expandAll() {
						this.t?.expandAll();
					}
					get outlineViewState() {
						return this.h;
					}
					lc(A) {
						this.m.classList.add("message"),
							this.r.stop().hide(),
							(this.n.innerText = A);
					}
					mc(A) {
						if (this.t) {
							const R = this.t.getInput();
							if ((A || (A = R?.uri), R && A))
								return (
									this.ab.set(`${R.outlineKind}/${A}`, this.t.getViewState()),
									!0
								);
						}
						return !1;
					}
					nc(A) {
						this.g.clear(),
							A &&
								this.g.add(
									A.onDidChangeControl(() => {
										this.oc(A);
									}),
								),
							this.oc(A);
					}
					async oc(A) {
						const R = v.$A1.getOriginalUri(A?.input),
							O = this.mc();
						if ((this.f.clear(), !A || !this.fc.canCreateOutline(A) || !R))
							return this.lc((0, d.localize)(8292, null));
						let B;
						O ||
							(B = new w.$Wh(() => {
								this.lc((0, d.localize)(8293, null, (0, f.$kh)(R)));
							}, 100)),
							this.r.infinite().show(500);
						const U = new S.$Ce();
						this.f.add((0, E.$Yc)(() => U.dispose(!0)));
						const z = await this.fc.createOutline(
							A,
							$.OutlineTarget.OutlinePane,
							U.token,
						);
						if ((B?.dispose(), !z)) return;
						if (U.token.isCancellationRequested) {
							z?.dispose();
							return;
						}
						this.f.add(z), this.r.stop().hide();
						const F = new D(z.config.comparator, this.h.sortBy),
							x = this.gc.createInstance(
								c.$EMb,
								"OutlinePane",
								this.s,
								z.config.delegate,
								z.config.renderers,
								z.config.treeDataSource,
								{
									...z.config.options,
									sorter: F,
									expandOnDoubleClick: !1,
									expandOnlyOnTwistieClick: !0,
									multipleSelectionSupport: !1,
									hideTwistiesOfChildlessElements: !0,
									defaultFindMode: this.h.filterOnType
										? T.TreeFindMode.Filter
										: T.TreeFindMode.Highlight,
									overrideStyles: this.Zb().listOverrideStyles,
								},
							),
							H = () => {
								if (z.isEmpty)
									this.lc((0, d.localize)(8294, null, (0, f.$kh)(R))),
										this.mc(R),
										x.setInput(void 0);
								else if (x.getInput())
									this.m.classList.remove("message"), x.updateChildren();
								else {
									this.m.classList.remove("message");
									const J = this.ab.get(`${z.outlineKind}/${z.uri}`);
									x.setInput(z, J && T.$spb.lift(J));
								}
							};
						H(),
							this.f.add(z.onDidChange(H)),
							(x.findMode = this.h.filterOnType
								? T.TreeFindMode.Filter
								: T.TreeFindMode.Highlight),
							this.f.add(
								this.Cb.onDidChangeLocation(({ views: J }) => {
									J.some((W) => W.id === this.id) &&
										x.updateOptions({
											overrideStyles: this.Zb().listOverrideStyles,
										});
								}),
							),
							this.f.add(
								x.onDidChangeFindMode(
									(J) => (this.h.filterOnType = J === T.TreeFindMode.Filter),
								),
							);
						let q = 0;
						this.f.add(
							x.onDidOpen(async (J) => {
								const W = ++q,
									X = J.browserEvent?.type === "dblclick";
								(!X && (await (0, w.$Nh)(150), W !== q)) ||
									(await z.reveal(J.element, J.editorOptions, J.sideBySide, X));
							}),
						);
						const V = () => {
							if (!this.h.followCursor || !z.activeElement) return;
							let J = z.activeElement;
							for (; J; ) {
								if (
									(x.getRelativeTop(J) === null && x.reveal(J, 0.5),
									x.getRelativeTop(J) !== null)
								) {
									x.setFocus([J]), x.setSelection([J]);
									break;
								}
								J = x.getParentElement(J);
							}
						};
						V(),
							this.f.add(z.onDidChange(V)),
							this.f.add(
								this.h.onDidChange((J) => {
									this.h.persist(this.hc),
										J.filterOnType &&
											(x.findMode = this.h.filterOnType
												? T.TreeFindMode.Filter
												: T.TreeFindMode.Highlight),
										J.followCursor && V(),
										J.sortBy && ((F.order = this.h.sortBy), x.resort());
								}),
							);
						let G;
						this.f.add(
							x.onDidChangeFindPattern((J) => {
								x.findMode !== T.TreeFindMode.Highlight &&
									(!G && J
										? ((G = x.getViewState()), x.expandAll())
										: !J && G && (x.setInput(x.getInput(), G), (G = void 0)));
							}),
						);
						const K = () => {
							this.ec.set(
								x
									.getNode(null)
									.children.every((J) => !J.collapsible || J.collapsed),
							);
						};
						this.f.add(x.onDidChangeCollapseState(K)),
							this.f.add(x.onDidChangeModel(K)),
							K(),
							x.layout(this.L?.height, this.L?.width),
							(this.t = x),
							this.f.add(
								(0, E.$Yc)(() => {
									x.dispose(), (this.t = void 0);
								}),
							);
					}
				};
				(e.$2Yc = M),
					(e.$2Yc = M =
						Ne(
							[
								j(1, $.$x4b),
								j(2, a.$Li),
								j(3, b.$K1),
								j(4, n.$lq),
								j(5, o.$IY),
								j(6, m.$gj),
								j(7, h.$uZ),
								j(8, r.$6j),
								j(9, u.$Xxb),
								j(10, s.$7rb),
								j(11, g.$iP),
								j(12, l.$km),
								j(13, L.$Uyb),
							],
							M,
						));
			},
		),
		
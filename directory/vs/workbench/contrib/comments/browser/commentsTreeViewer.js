import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../nls.js';
import '../../../../base/browser/markdownRenderer.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/opener/common/opener.js';
import '../common/commentModel.js';
import '../../../../base/browser/ui/tree/tree.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/list/browser/listService.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/instantiation/common/instantiation.js';
import './timestamp.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/themables.js';
import './commentColors.js';
import '../../../../editor/common/languages.js';
import './commentsFilterOptions.js';
import '../../../../base/common/resources.js';
import '../../../../editor/browser/widget/markdownRenderer/browser/markdownRenderer.js';
import './commentsModel.js';
import '../../../../base/browser/ui/hover/hoverDelegateFactory.js';
import '../../../../base/browser/ui/actionbar/actionbar.js';
import '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../base/common/marshallingIds.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../base/browser/ui/actionbar/actionViewItems.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/hover/browser/hover.js';
define(
			de[683],
			he([
				1, 0, 7, 4, 267, 3, 41, 1240, 264, 10, 8, 93, 35, 5, 1726, 14, 26, 1237,
				74, 1725, 19, 251, 983, 95, 105, 92, 11, 221, 49, 198, 39, 72,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$fpc =
						e.$epc =
						e.$dpc =
						e.$cpc =
						e.$bpc =
						e.$apc =
						e.$_oc =
						e.$$oc =
							void 0),
					(t = mt(t)),
					(i = mt(i)),
					(e.$$oc = "workbench.panel.comments"),
					(e.$_oc = "Comments"),
					(e.$apc = i.localize2(5063, "Comments"));
				class M {
					static {
						this.a = "resource-with-comments";
					}
					static {
						this.b = "comment-node";
					}
					getHeight(F) {
						return F instanceof d.$Z2b && F.hasReply() ? 44 : 22;
					}
					getTemplateId(F) {
						return F instanceof d.$12b ? M.a : F instanceof d.$Z2b ? M.b : "";
					}
				}
				class N {
					constructor(F) {
						(this.a = F), (this.templateId = "resource-with-comments");
					}
					renderTemplate(F) {
						const x = t.$fhb(F, t.$(".resource-container")),
							H = this.a.create(x),
							q = t.$fhb(x, t.$(".separator")),
							V = x.appendChild(t.$(".owner"));
						return { resourceLabel: H, owner: V, separator: q };
					}
					renderElement(F, x, H, q) {
						H.resourceLabel.setFile(F.element.resource),
							(H.separator.innerText = "\xB7"),
							F.element.ownerLabel
								? ((H.owner.innerText = F.element.ownerLabel),
									(H.separator.style.display = "inline"))
								: ((H.owner.innerText = ""),
									(H.separator.style.display = "none"));
					}
					disposeTemplate(F) {
						F.resourceLabel.dispose();
					}
				}
				e.$bpc = N;
				let A = class {
					constructor(F) {
						this.b = F;
					}
					getResourceActions(F) {
						return {
							actions: this.c(I.$XX.CommentsViewThreadActions, F).primary,
						};
					}
					getResourceContextActions(F) {
						return this.c(I.$XX.CommentsViewThreadActions, F).secondary;
					}
					setContextKeyService(F) {
						this.a = F;
					}
					c(F, x) {
						if (!this.a) return { primary: [], secondary: [] };
						const H = [
								["commentController", x.owner],
								["resourceScheme", x.resource.scheme],
								["commentThread", x.contextValue],
								["canReply", x.thread.canReply],
							],
							q = this.a.createOverlay(H),
							V = this.b.getMenuActions(F, q, { shouldForwardArgs: !0 }),
							J = { primary: [], secondary: [], menu: V };
						return (0, S.$Jyb)(V, J, "inline"), J;
					}
					dispose() {
						this.a = void 0;
					}
				};
				(e.$cpc = A), (e.$cpc = A = Ne([j(0, I.$YX)], A));
				let R = class {
					constructor(F, x, H, q, V, G) {
						(this.a = F),
							(this.b = x),
							(this.c = H),
							(this.d = q),
							(this.f = V),
							(this.g = G),
							(this.templateId = "comment-node");
					}
					renderTemplate(F) {
						const x = t.$fhb(F, t.$(".comment-thread-container")),
							H = t.$fhb(x, t.$(".comment-metadata-container")),
							q = t.$fhb(H, t.$(".comment-metadata")),
							V = {
								icon: t.$fhb(q, t.$(".icon")),
								userNames: t.$fhb(q, t.$(".user")),
								timestamp: new n.$r3b(
									this.d,
									this.f,
									t.$fhb(q, t.$(".timestamp-container")),
								),
								relevance: t.$fhb(q, t.$(".relevance")),
								separator: t.$fhb(q, t.$(".separator")),
								commentPreview: t.$fhb(q, t.$(".text")),
								range: t.$fhb(q, t.$(".range")),
							};
						V.separator.innerText = "\xB7";
						const G = t.$fhb(H, t.$(".actions")),
							K = new v.$eib(G, { actionViewItemProvider: this.a }),
							J = t.$fhb(x, t.$(".comment-snippet-container")),
							W = {
								container: J,
								icon: t.$fhb(J, t.$(".icon")),
								count: t.$fhb(J, t.$(".count")),
								lastReplyDetail: t.$fhb(J, t.$(".reply-detail")),
								separator: t.$fhb(J, t.$(".separator")),
								timestamp: new n.$r3b(
									this.d,
									this.f,
									t.$fhb(J, t.$(".timestamp-container")),
								),
							};
						(W.separator.innerText = "\xB7"),
							W.icon.classList.add(
								...p.ThemeIcon.asClassNameArray(g.$ak.indent),
							);
						const X = [V.timestamp, W.timestamp];
						return {
							threadMetadata: V,
							repliesMetadata: W,
							actionBar: K,
							disposables: X,
						};
					}
					h(F) {
						return F > 2
							? i.localize(5054, null, F - 1)
							: F === 2
								? i.localize(5055, null)
								: i.localize(5056, null);
					}
					j(F, x) {
						const H = (0, w.$Uib)(F, {
								inline: !0,
								actionHandler: {
									callback: (V) => (0, l.$Rzb)(this.c, V, F.isTrusted),
									disposables: x,
								},
							}),
							q = H.element.getElementsByTagName("img");
						for (let V = 0; V < q.length; V++) {
							const G = q[V],
								K = t.$("");
							(K.textContent = G.alt
								? i.localize(5057, null, G.alt)
								: i.localize(5058, null)),
								G.parentNode.replaceChild(K, G);
						}
						for (
							;
							H.element.children.length > 1 &&
							H.element.firstElementChild?.tagName === "HR";
						)
							H.element.removeChild(H.element.firstElementChild);
						return H;
					}
					k(F) {
						return F === f.CommentThreadState.Unresolved
							? g.$ak.commentUnresolved
							: g.$ak.comment;
					}
					renderElement(F, x, H, q) {
						H.actionBar.clear();
						const V = F.element.replies.length + 1;
						if (
							(F.element.threadRelevance ===
							f.CommentThreadApplicability.Outdated
								? ((H.threadMetadata.relevance.style.display = ""),
									(H.threadMetadata.relevance.innerText = i.localize(
										5059,
										null,
									)),
									(H.threadMetadata.separator.style.display = "none"))
								: ((H.threadMetadata.relevance.innerText = ""),
									(H.threadMetadata.relevance.style.display = "none"),
									(H.threadMetadata.separator.style.display = "")),
							H.threadMetadata.icon.classList.remove(
								...Array.from(H.threadMetadata.icon.classList.values()).filter(
									(W) => W.startsWith("codicon"),
								),
							),
							H.threadMetadata.icon.classList.add(
								...p.ThemeIcon.asClassNameArray(this.k(F.element.threadState)),
							),
							F.element.threadState !== void 0)
						) {
							const W = this.l(F.element.threadState, this.g.getColorTheme());
							H.threadMetadata.icon.style.setProperty(o.$z3b, `${W}`),
								(H.threadMetadata.icon.style.color = `var(${o.$z3b})`);
						}
						(H.threadMetadata.userNames.textContent =
							F.element.comment.userName),
							H.threadMetadata.timestamp.setTimestamp(
								F.element.comment.timestamp
									? new Date(F.element.comment.timestamp)
									: void 0,
							);
						const G = F.element;
						if (
							((H.threadMetadata.commentPreview.innerText = ""),
							(H.threadMetadata.commentPreview.style.height = "22px"),
							typeof G.comment.body == "string")
						)
							H.threadMetadata.commentPreview.innerText = G.comment.body;
						else {
							const W = new E.$Zc();
							H.disposables.push(W);
							const X = this.j(G.comment.body, W);
							H.disposables.push(X),
								H.threadMetadata.commentPreview.appendChild(
									X.element.firstElementChild ?? X.element,
								),
								H.disposables.push(
									this.f.setupManagedHover(
										(0, $.$cib)("mouse"),
										H.threadMetadata.commentPreview,
										X.element.textContent ?? "",
									),
								);
						}
						F.element.range &&
							(F.element.range.startLineNumber === F.element.range.endLineNumber
								? (H.threadMetadata.range.textContent = i.localize(
										5060,
										null,
										F.element.range.startLineNumber,
									))
								: (H.threadMetadata.range.textContent = i.localize(
										5061,
										null,
										F.element.range.startLineNumber,
										F.element.range.endLineNumber,
									)));
						const K = this.b.getResourceActions(F.element);
						if (
							(H.actionBar.push(K.actions, { icon: !0, label: !1 }),
							(H.actionBar.context = {
								commentControlHandle: F.element.controllerHandle,
								commentThreadHandle: F.element.threadHandle,
								$mid: T.MarshalledId.CommentThread,
							}),
							!F.element.hasReply())
						) {
							H.repliesMetadata.container.style.display = "none";
							return;
						}
						(H.repliesMetadata.container.style.display = ""),
							(H.repliesMetadata.count.textContent = this.h(V));
						const J = F.element.replies[F.element.replies.length - 1].comment;
						(H.repliesMetadata.lastReplyDetail.textContent = i.localize(
							5062,
							null,
							J.userName,
						)),
							H.repliesMetadata.timestamp.setTimestamp(
								J.timestamp ? new Date(J.timestamp) : void 0,
							);
					}
					l(F, x) {
						return F !== void 0 ? (0, o.$C3b)(F, x) : void 0;
					}
					disposeTemplate(F) {
						F.disposables.forEach((x) => x.dispose()), F.actionBar.dispose();
					}
				};
				(e.$dpc = R),
					(e.$dpc = R =
						Ne([j(2, C.$7rb), j(3, r.$gj), j(4, D.$Uyb), j(5, h.$iP)], R));
				var O;
				(function (z) {
					(z[(z.Resource = 0)] = "Resource"), (z[(z.Comment = 1)] = "Comment");
				})(O || (O = {}));
				class B {
					constructor(F) {
						this.options = F;
					}
					filter(F, x) {
						return this.options.filter === "" &&
							this.options.showResolved &&
							this.options.showUnresolved
							? m.TreeVisibility.Visible
							: F instanceof d.$12b
								? this.a(F)
								: this.b(F, x);
					}
					a(F) {
						if (
							this.options.textFilter.text &&
							!this.options.textFilter.negate
						) {
							const x = b.$0oc._filter(
								this.options.textFilter.text,
								(0, s.$kh)(F.resource),
							);
							if (x)
								return {
									visibility: !0,
									data: { type: O.Resource, uriMatches: x || [] },
								};
						}
						return m.TreeVisibility.Recurse;
					}
					b(F, x) {
						if (
							!(
								F.threadState === void 0 ||
								(this.options.showResolved &&
									f.CommentThreadState.Resolved === F.threadState) ||
								(this.options.showUnresolved &&
									f.CommentThreadState.Unresolved === F.threadState)
							)
						)
							return !1;
						if (!this.options.textFilter.text) return !0;
						const q =
							b.$0oc._messageFilter(
								this.options.textFilter.text,
								typeof F.comment.body == "string"
									? F.comment.body
									: F.comment.body.value,
							) ||
							b.$0oc._messageFilter(
								this.options.textFilter.text,
								F.comment.userName,
							) ||
							F.replies
								.map(
									(V) =>
										b.$0oc._messageFilter(
											this.options.textFilter.text,
											V.comment.userName,
										) ||
										b.$0oc._messageFilter(
											this.options.textFilter.text,
											typeof V.comment.body == "string"
												? V.comment.body
												: V.comment.body.value,
										),
								)
								.filter((V) => !!V)
								.flat();
						return q.length && !this.options.textFilter.negate
							? { visibility: !0, data: { type: O.Comment, textMatches: q } }
							: q.length &&
									this.options.textFilter.negate &&
									x === m.TreeVisibility.Recurse
								? !1
								: q.length === 0 &&
										this.options.textFilter.negate &&
										x === m.TreeVisibility.Recurse
									? !0
									: x;
					}
				}
				e.$epc = B;
				let U = class extends a.$CMb {
					constructor(F, x, H, q, V, G, K, J, W) {
						const X = new M(),
							Y = S.$Pyb.bind(void 0, G),
							ie = G.createInstance(A);
						ie.setContextKeyService(q);
						const ne = [G.createInstance(N, F), G.createInstance(R, Y, ie)];
						super(
							"CommentsTree",
							x,
							X,
							ne,
							{
								accessibilityProvider: H.accessibilityProvider,
								identityProvider: {
									getId: (ee) =>
										ee instanceof y.$52b
											? "root"
											: ee instanceof d.$12b
												? `${ee.uniqueOwner}-${ee.id}`
												: ee instanceof d.$Z2b
													? `${ee.uniqueOwner}-${ee.resource.toString()}-${ee.threadId}-${ee.comment.uniqueIdInThread}` +
														(ee.isRoot ? "-root" : "")
													: "",
								},
								expandOnlyOnTwistieClick: !0,
								collapseByDefault: !1,
								overrideStyles: H.overrideStyles,
								filter: H.filter,
								sorter: H.sorter,
								findWidgetEnabled: !1,
								multipleSelectionSupport: !1,
							},
							G,
							q,
							V,
							K,
						),
							(this.b = J),
							(this.c = W),
							(this.a = ie),
							this.D.add(this.onContextMenu((ee) => this.f(ee)));
					}
					f(F) {
						const x = F.element;
						if (!(x instanceof d.$Z2b)) return;
						const H = F.browserEvent;
						H.preventDefault(), H.stopPropagation(), this.setFocus([x]);
						const q = this.a.getResourceContextActions(x);
						q.length &&
							this.b.showContextMenu({
								getAnchor: () => F.anchor,
								getActions: () => q,
								getActionViewItem: (V) => {
									const G = this.c.lookupKeybinding(V.id);
									if (G)
										return new k.$_ib(V, V, {
											label: !0,
											keybinding: G.getLabel(),
										});
								},
								onHide: (V) => {
									V && this.domFocus();
								},
								getActionsContext: () => ({
									commentControlHandle: x.controllerHandle,
									commentThreadHandle: x.threadHandle,
									$mid: T.MarshalledId.CommentThread,
									thread: x.thread,
								}),
							});
					}
					filterComments() {
						this.refilter();
					}
					getVisibleItemCount() {
						let F = 0;
						const x = this.getNode();
						for (const H of x.children)
							for (const q of H.children) q.visible && H.visible && F++;
						return F;
					}
				};
				(e.$fpc = U),
					(e.$fpc = U =
						Ne(
							[
								j(3, u.$6j),
								j(4, a.$fMb),
								j(5, c.$Li),
								j(6, r.$gj),
								j(7, P.$Xxb),
								j(8, L.$uZ),
							],
							U,
						));
			},
		),
		
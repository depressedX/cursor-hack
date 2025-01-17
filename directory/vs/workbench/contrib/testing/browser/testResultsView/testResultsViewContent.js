import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/browser/keyboardEvent.js';
import '../../../../../base/browser/ui/iconLabel/iconLabels.js';
import '../../../../../base/browser/ui/splitview/splitview.js';
import '../../../../../base/common/arrays.js';
import '../../../../../base/common/async.js';
import '../../../../../base/common/cancellation.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/keyCodes.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/observable.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../../../nls.js';
import '../../../../../platform/actions/browser/floatingMenu.js';
import '../../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../../platform/actions/browser/toolbar.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/commands/common/commands.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/instantiation/common/serviceCollection.js';
import '../../../../../platform/quickinput/common/quickInput.js';
import '../../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../debug/browser/callStackWidget.js';
import '../icons.js';
import './testMessageStack.js';
import './testResultsOutput.js';
import './testResultsSubject.js';
import './testResultsTree.js';
import '../../common/constants.js';
import '../../common/testProfileService.js';
import '../../common/testResult.js';
import '../../common/testService.js';
import '../../common/testTypes.js';
import '../../common/testingContextKeys.js';
import '../../../../../css!vs/workbench/contrib/testing/browser/testResultsView/testResultsViewContent.js';
define(
			de[3844],
			he([
				1, 0, 7, 114, 182, 279, 24, 15, 33, 6, 27, 3, 77, 42, 4, 1676, 92, 173,
				11, 31, 8, 5, 128, 63, 68, 1880, 470, 3699, 3440, 1002, 3843, 353, 420,
				421, 379, 185, 380, 2502,
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
				A,
				R,
				O,
			) {
				"use strict";
				var B;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ALc = void 0),
					(t = mt(t)),
					(I = mt(I));
				var U;
				(function (V) {
					(V[(V.Diff = 0)] = "Diff"), (V[(V.History = 1)] = "History");
				})(U || (U = {}));
				let z = class extends S.$mLc {
					constructor(G, K, J, W, X, Y) {
						super(),
							(this.a = G),
							(this.b = K),
							(this.c = J),
							(this.g = W),
							(this.j = X),
							(this.k = Y),
							(this.height = (0, h.observableValue)(
								"MessageStackFrame.height",
								100,
							)),
							(this.icon = I.$sKc),
							(this.label =
								J instanceof k.$eLc
									? J.test.label
									: J instanceof k.$gLc
										? J.test.item.label
										: J.result.name);
					}
					render(G) {
						return (
							(this.a.style.visibility = "visible"),
							G.appendChild(this.a),
							(0, a.$Yc)(() => this.a.remove())
						);
					}
					renderActions(G) {
						const K = new a.$Zc();
						G.appendChild(this.b.domNode),
							K.add((0, a.$Yc)(() => this.b.domNode.remove()));
						const J = (0, k.$jLc)(this.c),
							W = J && this.k.capabilitiesForTest(J);
						let X;
						if (W) X = this.j.createOverlay((0, M.$Dqc)(W));
						else {
							const ne = this.k.getControllerProfiles(this.c.controllerId);
							X = this.j.createOverlay([
								[
									O.TestingContextKeys.hasRunnableTests.key,
									ne.some((ee) => ee.group & R.TestRunProfileBitset.Run),
								],
								[
									O.TestingContextKeys.hasDebuggableTests.key,
									ne.some((ee) => ee.group & R.TestRunProfileBitset.Debug),
								],
							]);
						}
						const Y = K.add(this.g.createChild(new y.$Ki([s.$6j, X]))),
							ie = K.add(
								Y.createInstance(o.$Tyb, G, f.$XX.TestCallStack, {
									menuOptions: { shouldForwardArgs: !0 },
									actionViewItemProvider: (ne, ee) =>
										(0, p.$Pyb)(this.g, ne, ee),
								}),
							);
						return (ie.context = this.c), K.add(ie), K;
					}
				};
				z = Ne([j(3, l.$Li), j(4, s.$6j), j(5, M.$Bqc)], z);
				function F(V, G, K) {
					if (K instanceof k.$fLc)
						return V.get(b.$ek).executeCommand(
							G === R.TestRunProfileBitset.Debug
								? D.TestCommandId.DebugLastRun
								: D.TestCommandId.ReRunLastRun,
							K.result.id,
						);
					const J = V.get(A.$sqc),
						W = K instanceof k.$eLc ? K.test : K.test.item,
						X = J.collection.getNodeById(W.extId);
					if (X) return J.runTests({ group: G, tests: [X] });
				}
				(0, f.$4X)(
					class extends f.$3X {
						constructor() {
							super({
								id: "testing.callStack.run",
								title: (0, n.localize)(10837, null),
								icon: I.$uKc,
								menu: {
									id: f.$XX.TestCallStack,
									when: O.TestingContextKeys.hasRunnableTests,
									group: "navigation",
								},
							});
						}
						run(V, G) {
							F(V, R.TestRunProfileBitset.Run, G);
						}
					},
				),
					(0, f.$4X)(
						class extends f.$3X {
							constructor() {
								super({
									id: "testing.callStack.debug",
									title: (0, n.localize)(10838, null),
									icon: I.$yKc,
									menu: {
										id: f.$XX.TestCallStack,
										when: O.TestingContextKeys.hasDebuggableTests,
										group: "navigation",
									},
								});
							}
							run(V, G) {
								F(V, R.TestRunProfileBitset.Debug, G);
							}
						},
					);
				let x = class extends a.$1c {
					static {
						B = this;
					}
					get uiState() {
						return {
							splitViewWidths: Array.from({ length: this.z.length }, (G, K) =>
								this.z.getViewSize(K),
							),
						};
					}
					constructor(G, K, J, W, X, Y) {
						super(),
							(this.H = G),
							(this.I = K),
							(this.J = J),
							(this.L = W),
							(this.M = X),
							(this.N = Y),
							(this.b = this.D(new r.$re())),
							(this.c = this.D(new a.$Zc())),
							(this.g = this.D(new r.$Ae())),
							(this.G = this.D(new d.$Sh(1))),
							(this.onClose = this.g.event);
					}
					fillBody(G) {
						const K = B.a;
						this.z = new E.$vob(G, { orientation: E.Orientation.HORIZONTAL });
						const { historyVisible: J, showRevealLocationOnMessages: W } =
								this.I,
							X = this.H !== void 0,
							Y = (this.C = t.$(".test-output-peek-message-container"));
						(this.s = t.$fhb(G, t.$(".test-output-call-stack-container"))),
							(this.t = this.D(this.J.createInstance(T.$oLc, this.s, this.H))),
							(this.j = this.D(this.J.createInstance(q, this.H))),
							(this.g.input = this.j.onClose),
							(this.F = [
								this.D(this.J.createInstance(P.$tLc, this.H, Y)),
								this.D(this.J.createInstance(P.$uLc, Y)),
								this.D(this.J.createInstance(P.$wLc, Y, X)),
								this.D(this.J.createInstance(P.$vLc, this.H, Y)),
							]),
							(this.m = this.D(this.M.createScoped(G))),
							(this.n = O.TestingContextKeys.testMessageContext.bindTo(this.m)),
							(this.q = O.TestingContextKeys.testResultOutdated.bindTo(this.m));
						const ie = t.$fhb(G, t.$(".test-output-peek-tree")),
							ne = this.D(
								this.J.createInstance(L.$zLc, ie, this.b.event, {
									showRevealLocationOnMessages: W,
									locationForProgress: this.I.locationForProgress,
								}),
							);
						(this.onDidRequestReveal = ne.onDidRequestReview),
							this.z.addView(
								{
									onDidChange: r.Event.None,
									element: this.s,
									minimumSize: 200,
									maximumSize: Number.MAX_VALUE,
									layout: (ee) => {
										(B.a = ee),
											this.y &&
												(this.t?.layout(this.y.height, ee), this.Q(this.y, ee));
									},
								},
								E.Sizing.Distribute,
							),
							this.z.addView(
								{
									onDidChange: r.Event.None,
									element: ie,
									minimumSize: 100,
									maximumSize: Number.MAX_VALUE,
									layout: (ee) => {
										this.y && ne.layout(this.y.height, ee);
									},
								},
								E.Sizing.Distribute,
							),
							this.z.setViewVisible(U.History, J.value),
							this.D(
								J.onDidChange((ee) => {
									this.z.setViewVisible(U.History, ee);
								}),
							),
							K && queueMicrotask(() => this.z.resizeView(0, K));
					}
					reveal(G) {
						return (
							this.b.fire(G),
							this.current && (0, k.$hLc)(this.current, G.subject)
								? Promise.resolve()
								: ((this.current = G.subject),
									this.G.queue(async () => {
										this.c.clear();
										const K = this.O(G.subject) || [],
											J = await this.P(G.subject, K);
										this.t.update(J, K),
											this.j.show(G.subject),
											this.R(G.subject);
									}))
						);
					}
					collapseStack() {
						this.t.collapseAll();
					}
					O(G) {
						if (!(G instanceof k.$eLc)) return;
						const K = G.stack;
						if (!K?.length || !this.H) return K;
						const J = K[0],
							W = G.revealLocation;
						return W &&
							J.position &&
							J.uri &&
							J.position.lineNumber === W.range.startLineNumber &&
							J.position.column === W.range.startColumn &&
							this.N.extUri.isEqual(J.uri, W.uri)
							? K.slice(1)
							: K;
					}
					async P(G, K) {
						(this.C.style.visibility = "hidden"), this.s.appendChild(this.C);
						const J = (this.u = this.J.createInstance(z, this.C, this.j, G)),
							W = K.length > 0;
						J.showHeader.set(W, void 0);
						const X = await (0, C.$fc)(this.F, (Y) => Y.update(G));
						return (
							X &&
								(this.y && J.height.set(X.layout(this.y, W), void 0),
								X.onDidContentSizeChange &&
									this.c.add(
										X.onDidContentSizeChange(() => {
											this.y &&
												!this.w &&
												((this.w = !0),
												J.height.set(X.layout(this.y, W), void 0),
												(this.w = !1));
										}),
									)),
							J
						);
					}
					Q(G, K = this.z.getViewSize(U.Diff)) {
						this.w = !0;
						for (const J of this.F) {
							const W = J.layout(
								{ height: G.height, width: K },
								!!this.u?.showHeader.get(),
							);
							W && this.u?.height.set(W, void 0);
						}
						this.w = !1;
					}
					R(G) {
						if (!(G instanceof k.$eLc)) return;
						this.c.add(
							(0, a.$Yc)(() => {
								this.q.reset(), this.n.reset();
							}),
						),
							this.n.set(G.contextValue || ""),
							G.result instanceof N.$O4
								? (this.q.set(
										G.result.getStateById(G.test.extId)?.retired ?? !1,
									),
									this.c.add(
										G.result.onChange((J) => {
											J.item.item.extId === G.test.extId &&
												this.q.set(J.item.retired ?? !1);
										}),
									))
								: this.q.set(!0);
						const K = this.c.add(
							this.J.createChild(new y.$Ki([s.$6j, this.m])),
						);
						this.c.add(
							K.createInstance(g.$t4b, {
								container: this.C,
								menuId: f.$XX.TestMessageContent,
								getActionArg: () => G.context,
							}),
						);
					}
					onLayoutBody(G, K) {
						(this.y = new t.$pgb(K, G)), this.z.layout(K);
					}
					onWidth(G) {
						this.z.layout(G);
					}
				};
				(e.$ALc = x),
					(e.$ALc =
						x =
						B =
							Ne([j(2, l.$Li), j(3, c.$MO), j(4, s.$6j), j(5, v.$Vl)], x));
				const H = 500;
				let q = class extends a.$1c {
					get domNode() {
						return this.a.root;
					}
					constructor(G, K, J) {
						super(),
							(this.g = G),
							(this.j = K),
							(this.m = J),
							(this.a = t.h("div.testing-followup-action", [])),
							(this.b = this.D(new a.$Zc())),
							(this.c = this.D(new r.$re())),
							(this.onClose = this.c.event);
					}
					show(G) {
						this.b.clear(), G instanceof k.$eLc && this.n(G);
					}
					async n(G) {
						const K = this.b.add(new m.$Ce()),
							J = Date.now();
						G.result instanceof N.$O4 &&
							!G.result.completedAt &&
							(await new Promise((X) => r.Event.once(G.result.onComplete)(X)));
						const W = await this.j.provideTestFollowups(
							{
								extId: G.test.extId,
								messageIndex: G.messageIndex,
								resultId: G.result.id,
								taskIndex: G.taskIndex,
							},
							K.token,
						);
						if (!W.followups.length || K.token.isCancellationRequested) {
							W.dispose();
							return;
						}
						this.b.add(W),
							t.$9fb(this.a.root),
							this.a.root.classList.toggle("animated", Date.now() - J > H),
							this.a.root.appendChild(this.q(W.followups[0])),
							W.followups.length > 1 &&
								this.a.root.appendChild(this.s(W.followups)),
							this.b.add(
								(0, a.$Yc)(() => {
									this.a.root.remove();
								}),
							);
					}
					q(G) {
						const K = this.t(() => this.u(K, G));
						return t.$hhb(K, ...(0, w.$Sib)(G.message)), K;
					}
					s(G) {
						const K = this.t(() =>
							this.m
								.pick(G.map((J, W) => ({ label: J.message, index: W })))
								.then((J) => {
									J?.length && G[J[0].index].execute();
								}),
						);
						return (
							(K.innerText = (0, n.localize)(10839, null, G.length - 1)), K
						);
					}
					t(G) {
						const K = document.createElement("a");
						return (
							(K.tabIndex = 0),
							this.b.add(t.$0fb(K, "click", G)),
							this.b.add(
								t.$0fb(K, "keydown", (J) => {
									const W = new i.$7fb(J);
									(W.equals(u.KeyCode.Space) || W.equals(u.KeyCode.Enter)) &&
										G();
								}),
							),
							K
						);
					}
					u(G, K) {
						G.ariaDisabled !== "true" &&
							((G.ariaDisabled = "true"), K.execute(), this.g && this.c.fire());
					}
				};
				q = Ne([j(1, A.$sqc), j(2, $.$DJ)], q);
			},
		),
		
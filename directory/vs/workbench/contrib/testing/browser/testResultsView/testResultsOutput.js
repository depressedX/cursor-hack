import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/common/async.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/iterator.js';
import '../../../../../base/common/lazy.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../editor/browser/widget/codeEditor/codeEditorWidget.js';
import '../../../../../editor/browser/widget/codeEditor/embeddedCodeEditorWidget.js';
import '../../../../../editor/browser/widget/diffEditor/diffEditorWidget.js';
import '../../../../../editor/browser/widget/diffEditor/embeddedDiffEditorWidget.js';
import '../../../../../editor/browser/widget/markdownRenderer/browser/markdownRenderer.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../../../editor/contrib/peekView/browser/peekView.js';
import '../../../../../nls.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/terminal/common/capabilities/capabilities.js';
import '../../../../../platform/terminal/common/capabilities/terminalCapabilityStore.js';
import '../../../../../platform/terminal/common/terminalStrings.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../../../../common/editor/editorModel.js';
import '../../../../common/theme.js';
import '../../../../common/views.js';
import '../../../terminal/browser/detachedTerminal.js';
import '../../../terminal/browser/terminal.js';
import '../../../terminal/browser/xterm/xtermTerminal.js';
import '../../../terminal/common/terminalColorRegistry.js';
import '../testMessageColorizer.js';
import './testResultsSubject.js';
import '../../common/constants.js';
import '../../common/observableValue.js';
import '../../common/testResult.js';
import '../../common/testTypes.js';
define(
			de[3440],
			he([
				1, 0, 7, 15, 6, 103, 149, 3, 206, 281, 309, 784, 251, 42, 255, 4, 5,
				189, 675, 776, 25, 416, 123, 60, 1769, 107, 1299, 512, 999, 1002, 353,
				810, 421, 185,
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
					(e.$wLc = e.$vLc = e.$uLc = e.$tLc = void 0),
					(t = mt(t));
				class A extends l.$PO {
					constructor(q, V) {
						super(),
							(this.a = q),
							(this.b = V),
							(this.original = this.a.object.textEditorModel),
							(this.modified = this.b.object.textEditorModel);
					}
					dispose() {
						super.dispose(), this.a.dispose(), this.b.dispose();
					}
				}
				const R = {
						scrollBeyondLastLine: !1,
						links: !0,
						lineNumbers: "off",
						glyphMargin: !1,
						scrollbar: {
							verticalScrollbarSize: 14,
							horizontal: "auto",
							useShadows: !1,
							verticalHasArrows: !1,
							horizontalHasArrows: !1,
							alwaysConsumeMouseWheel: !1,
						},
						overviewRulerLanes: 0,
						fixedOverflowWidgets: !0,
						readOnly: !0,
						stickyScroll: { enabled: !1 },
						minimap: { enabled: !1 },
						automaticLayout: !1,
					},
					O = {
						...R,
						enableSplitViewResizing: !0,
						isInEmbeddedEditor: !0,
						renderOverviewRuler: !1,
						ignoreTrimWhitespace: !1,
						renderSideBySide: !0,
						useInlineViewWhenSpaceIsLimited: !1,
						originalAriaLabel: (0, g.localize)(10815, null),
						modifiedAriaLabel: (0, g.localize)(10816, null),
						diffAlgorithm: "advanced",
					};
				let B = class extends d.$1c {
					get onDidContentSizeChange() {
						return this.a.value?.onDidContentSizeChange || w.Event.None;
					}
					constructor(q, V, G, K) {
						super(),
							(this.f = q),
							(this.g = V),
							(this.h = G),
							(this.j = K),
							(this.a = this.D(new d.$2c())),
							(this.b = this.D(new d.$2c()));
					}
					async update(q) {
						if (!(q instanceof k.$eLc)) return this.m(), !1;
						const V = q.message;
						if (!N.ITestMessage.isDiffable(V)) return this.m(), !1;
						const [G, K] = await Promise.all([
								this.j.createModelReference(q.expectedUri),
								this.j.createModelReference(q.actualUri),
							]),
							J = (this.b.value = new A(G, K));
						return (
							this.a.value ||
								((this.a.value = this.f
									? this.h.createInstance(a.$7mc, this.g, O, {}, this.f)
									: this.h.createInstance(u.$3yb, this.g, O, {})),
								this.c && this.a.value.layout(this.c)),
							this.a.value.setModel(J),
							this.a.value.updateOptions(this.n(x(V.expected) || x(V.actual))),
							!0
						);
					}
					m() {
						this.b.clear(), this.a.clear();
					}
					layout(q, V) {
						this.c = q;
						const G = this.a.value;
						if (!G) return;
						if ((G.layout(q), !V)) return q.height;
						const K = Math.min(
							1e4,
							Math.max(
								G.getOriginalEditor().getContentHeight(),
								G.getModifiedEditor().getContentHeight(),
							),
						);
						return G.layout({ height: K, width: q.width }), K;
					}
					n(q) {
						return q
							? { ...O, lineNumbers: "on" }
							: { ...O, lineNumbers: "off" };
					}
				};
				(e.$tLc = B), (e.$tLc = B = Ne([j(2, p.$Li), j(3, c.$MO)], B));
				let U = class extends d.$1c {
					constructor(q, V) {
						super(),
							(this.c = q),
							(this.f = V),
							(this.a = new C.$Y(() =>
								this.D(this.f.createInstance(h.$Qzb, {})),
							)),
							this.D((0, d.$Yc)(() => this.g()));
					}
					async update(q) {
						if (!(q instanceof k.$eLc)) return this.g(), !1;
						const V = q.message;
						if (N.ITestMessage.isDiffable(V) || typeof V.message == "string")
							return this.g(), !1;
						const G = this.D(this.a.value.render(V.message, {}));
						return (
							(G.element.style.userSelect = "text"),
							G.element.classList.add("preview-text"),
							this.c.appendChild(G.element),
							(this.b = G.element),
							!0
						);
					}
					layout(q) {
						if (this.b)
							return (
								(this.b.style.width = `${q.width - 32}px`), this.b.clientHeight
							);
					}
					g() {
						this.b && (this.b.remove(), (this.b = void 0));
					}
				};
				(e.$uLc = U), (e.$uLc = U = Ne([j(1, p.$Li)], U));
				let z = class extends d.$1c {
					get onDidContentSizeChange() {
						return this.b.value?.onDidContentSizeChange || w.Event.None;
					}
					constructor(q, V, G, K) {
						super(),
							(this.g = q),
							(this.h = V),
							(this.j = G),
							(this.m = K),
							(this.a = this.D(new d.$2c())),
							(this.b = this.D(new d.$2c())),
							(this.c = this.D(new d.$2c()));
					}
					async update(q) {
						if (!(q instanceof k.$eLc)) return this.n(), !1;
						const V = q.message;
						if (
							N.ITestMessage.isDiffable(V) ||
							V.type === N.TestMessageType.Output ||
							typeof V.message != "string"
						)
							return this.n(), !1;
						const G = (this.c.value = await this.m.createModelReference(
							q.messageUri,
						));
						return (
							this.b.value ||
								((this.b.value = this.g
									? this.j.createInstance(r.$wDb, this.h, R, {}, this.g)
									: this.j.createInstance(m.$rwb, this.h, R, {
											isSimpleWidget: !0,
										})),
								this.f && this.b.value.layout(this.f)),
							this.b.value.setModel(G.object.textEditorModel),
							this.b.value.updateOptions(R),
							(this.a.value = (0, P.$WKc)(V.message, this.b.value)),
							!0
						);
					}
					n() {
						this.a.clear(), this.b.clear(), this.c.clear();
					}
					layout(q, V) {
						this.f = q;
						const G = this.b.value;
						if (!G) return;
						if ((G.layout(q), !V)) return q.height;
						const K = G.getContentHeight();
						return G.layout({ height: K, width: q.width }), K;
					}
				};
				(e.$vLc = z), (e.$vLc = z = Ne([j(2, p.$Li), j(3, c.$MO)], z));
				let F = class extends d.$1c {
					constructor(q, V, G, K, J) {
						super(),
							(this.h = q),
							(this.j = V),
							(this.m = G),
							(this.n = K),
							(this.q = J),
							(this.b = this.D(new D.$qqc(""))),
							(this.c = this.D(new i.$Jh(50))),
							(this.f = this.D(new d.$2c())),
							(this.g = this.D(new d.$2c()));
					}
					async r() {
						const q = this.f.value;
						if (q)
							return (
								q.xterm.clearBuffer(),
								q.xterm.clearSearchDecorations(),
								q.xterm.write("\x1B[2J\x1B[0;0H"),
								q
							);
						const V = new f.$KHb(),
							G = this.b;
						return (
							V.add(o.TerminalCapability.CwdDetection, {
								type: o.TerminalCapability.CwdDetection,
								get cwds() {
									return [G.value];
								},
								onDidChangeCwd: G.onDidChange,
								getCwd: () => G.value,
								updateCwd: () => {},
							}),
							(this.f.value = await this.m.createDetachedTerminal({
								rows: 10,
								cols: 80,
								readonly: !0,
								capabilities: V,
								processInfo: new v.$sLc({ initialCwd: G.value }),
								colorProvider: {
									getBackgroundColor: (K) => {
										const J = K.getColor(T.$iHb);
										return (
											J ||
											(this.j
												? K.getColor(n.$bNb)
												: this.n.getViewLocationById(
															L.Testing.ResultsViewId,
														) === $.ViewContainerLocation.Panel
													? K.getColor(y.$qFb)
													: K.getColor(y.$wGb))
										);
									},
								},
							}))
						);
					}
					async update(q) {
						if ((this.g.clear(), q instanceof k.$fLc)) await this.w(q);
						else if (
							q instanceof k.$gLc ||
							(q instanceof k.$eLc &&
								q.message.type === N.TestMessageType.Output)
						)
							await this.u(q);
						else return this.G(), !1;
						return !0;
					}
					async u(q) {
						const V = this,
							G = q instanceof k.$gLc ? q.test.item : q.test,
							K = await this.y({
								subject: q,
								noOutputMessage: (0, g.localize)(10817, null),
								getTarget: (J) => J?.tasks[q.taskIndex].output,
								*doInitialWrite(J, W) {
									V.z(G.uri);
									const X =
										q instanceof k.$gLc ? q.test : W.getStateById(G.extId);
									if (X)
										for (const Y of X.tasks[q.taskIndex].messages)
											Y.type === N.TestMessageType.Output &&
												(yield* J.getRangeIter(Y.offset, Y.length));
								},
								doListenForMoreData: (J, W, X) =>
									W.onChange((Y) => {
										if (
											Y.reason === M.TestResultItemChangeReason.NewMessage &&
											Y.item.item.extId === G.extId &&
											Y.message.type === N.TestMessageType.Output
										)
											for (const ie of J.getRangeIter(
												Y.message.offset,
												Y.message.length,
											))
												X(ie.buffer);
									}),
							});
						q instanceof k.$eLc &&
							q.message.type === N.TestMessageType.Output &&
							q.message.marker !== void 0 &&
							K?.xterm.selectMarkedRange(
								(0, N.$o4)(q.message.marker, !0),
								(0, N.$o4)(q.message.marker, !1),
								!0,
							);
					}
					w(q) {
						return this.y({
							subject: q,
							noOutputMessage: (0, g.localize)(10818, null),
							getTarget: (V) => V?.tasks[q.taskIndex],
							doInitialWrite: (V, G) => (
								this.z(E.Iterable.find(G.tests, (K) => !!K.item.uri)?.item.uri),
								V.output.buffers
							),
							doListenForMoreData: (V, G, K) =>
								V.output.onDidWriteData((J) => K(J.buffer)),
						});
					}
					async y(q) {
						const V = q.subject.result,
							G = q.getTarget(V);
						if (!G) return this.G();
						const K = await this.r();
						let J = !1;
						const W = new D.$qqc(0);
						if (V instanceof M.$O4)
							for (const X of q.doInitialWrite(G, V))
								(J ||= X.byteLength > 0),
									W.value++,
									K.xterm.write(X.buffer, () => W.value--);
						else (J = !0), this.C(K, (0, g.localize)(10819, null));
						if (
							(this.F(K), this.g.clear(), V instanceof M.$O4 && !V.completedAt)
						) {
							const X = V.onComplete(() => {
									J || this.C(K, q.noOutputMessage);
								}),
								Y = q.doListenForMoreData(G, V, (ie) => {
									K.xterm.write(ie), (J ||= ie.byteLength > 0);
								});
							this.g.value = (0, d.$Xc)(X, Y);
						}
						return (
							!this.g.value && !J && this.C(K, q.noOutputMessage),
							W.value > 0 &&
								(await new Promise((X) => {
									const Y = W.onDidChange(() => {
										W.value === 0 && (Y.dispose(), X());
									});
								})),
							K
						);
					}
					z(q) {
						const V =
							(q && this.q.getWorkspaceFolder(q)) ||
							this.q.getWorkspace().folders[0];
						V && (this.b.value = V.uri.fsPath);
					}
					C(q, V) {
						q.xterm.write((0, b.$aIb)(V));
					}
					F(q) {
						q.xterm.write("\x1B[?25l"),
							t.$hgb(t.getWindow(this.h), () => this.H(q)),
							q.attachToElement(this.h, { enableGpu: !1 });
					}
					G() {
						this.g.clear(), this.c.cancel(), this.f.clear();
					}
					layout(q) {
						if (((this.a = q), this.f.value))
							return this.H(this.f.value, q.width, q.height), q.height;
					}
					H(
						{ xterm: q },
						V = this.a?.width ?? this.h.clientWidth,
						G = this.a?.height ?? this.h.clientHeight,
					) {
						(V -= 30),
							this.c.trigger(() => {
								const K = (0, I.$_Hb)(t.getWindow(this.h), q.getFont(), V, G);
								K && q.resize(K.cols, K.rows);
							});
					}
				};
				(e.$wLc = F),
					(e.$wLc = F = Ne([j(2, S.$iIb), j(3, $.$K1), j(4, s.$Vi)], F));
				const x = (H) =>
					!!H &&
					H.includes(`
`);
			},
		),
		
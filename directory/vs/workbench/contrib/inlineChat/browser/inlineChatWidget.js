import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/hover/hoverDelegateFactory.js';
import '../../../../base/browser/ui/iconLabel/iconLabels.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/event.js';
import '../../../../base/common/htmlContent.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/observable.js';
import '../../../../editor/browser/widget/diffEditor/components/accessibleDiffViewer.js';
import '../../../../editor/common/config/editorOptions.js';
import '../../../../editor/common/core/lineRange.js';
import '../../../../editor/common/core/selection.js';
import '../../../../editor/common/diff/rangeMapping.js';
import '../../../../editor/common/editorCommon.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../nls.js';
import '../../../../platform/accessibility/browser/accessibleView.js';
import '../../../../platform/accessibility/common/accessibility.js';
import '../../../../platform/actions/browser/buttonbar.js';
import '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../platform/actions/browser/toolbar.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/instantiation/common/serviceCollection.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../accessibility/browser/accessibilityConfiguration.js';
import '../../accessibility/common/accessibilityCommands.js';
import '../../chat/browser/actions/chatTitleActions.js';
import '../../chat/browser/chatListRenderer.js';
import '../../chat/browser/chatWidget.js';
import '../../chat/common/chatAgents.js';
import '../../chat/common/chatColors.js';
import '../../chat/common/chatContextKeys.js';
import '../../chat/common/chatModel.js';
import '../../chat/common/chatService.js';
import '../../chat/common/chatViewModel.js';
import '../common/inlineChat.js';
import '../../../../css!vs/workbench/contrib/inlineChat/browser/media/inlineChat.js';
define(
			de[1357],
			he([
				1, 0, 7, 95, 182, 24, 6, 94, 3, 77, 1660, 38, 196, 104, 342, 98, 42, 4,
				178, 91, 1675, 92, 173, 11, 10, 8, 72, 5, 128, 39, 51, 130, 417, 1328,
				1954, 481, 153, 980, 207, 441, 218, 283, 257, 2442,
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
				B,
				U,
				z,
				F,
				x,
				H,
			) {
				"use strict";
				var q;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0Yb = e.$9Yb = void 0);
				let V = class {
					constructor(Y, ie, ne, ee, _, te, Q, Z, se, re, le) {
						(this.m = ne),
							(this.n = ee),
							(this.o = _),
							(this.p = te),
							(this.q = Q),
							(this.s = Z),
							(this.t = se),
							(this.u = re),
							(this.v = le),
							(this.a = (0, t.h)("div.inline-chat@root", [
								(0, t.h)("div.chat-widget@chatWidget"),
								(0, t.h)("div.accessibleViewer@accessibleViewer"),
								(0, t.h)("div.status@status", [
									(0, t.h)("div.label.info.hidden@infoLabel"),
									(0, t.h)("div.actions.hidden@toolbar1"),
									(0, t.h)("div.label.status.hidden@statusLabel"),
									(0, t.h)("div.actions.secondary.hidden@toolbar2"),
								]),
							])),
							(this.b = new m.$Zc()),
							(this.j = this.b.add(new C.$re())),
							(this.onDidChangeHeight = C.Event.filter(
								this.j.event,
								(Le) => !this.l,
							)),
							(this.k = this.b.add(new C.$re())),
							(this.onDidChangeInput = this.k.event),
							(this.l = !1),
							(this.scopedContextKeyService = this.b.add(
								ee.createScoped(this.a.chatWidget),
							));
						const oe = ne.createChild(
							new P.$Ki([S.$6j, this.scopedContextKeyService]),
							this.b,
						);
						(this.g = oe.createInstance(
							R.$XYb,
							Y,
							void 0,
							{
								defaultElementHeight: 32,
								renderStyle: "minimal",
								renderInputOnTop: !1,
								renderFollowups: !0,
								supportsFileReferences:
									Q.getValue(`chat.experimental.variables.${Y.location}`) ===
									!0,
								filter: (Le) =>
									(0, x.$_Tb)(Le)
										? !1
										: (0, x.$$Tb)(Le) && Le.isComplete && !Le.errorDetails
											? !(
													(Le.response.value.length > 0 &&
														Le.response.value.every(
															(Fe) =>
																Fe.kind === "textEditGroup" &&
																ie.chatWidgetViewOptions?.rendererOptions?.renderTextEditsAsSummary?.(
																	Fe.uri,
																),
														)) ||
													Le.response.value.length === 0
												)
											: !0,
								...ie.chatWidgetViewOptions,
							},
							{
								listForeground: H.$mLb,
								listBackground: H.$nLb,
								inputEditorBackground: L.$TR,
								resultEditorBackground: L.$8P,
							},
						)),
							this.g.render(this.a.chatWidget),
							this.a.chatWidget.style.setProperty(
								(0, L.$qP)(B.$jUb),
								(0, L.$rP)(H.$nLb),
							),
							this.g.setVisible(!0),
							this.b.add(this.g);
						const ae = U.$X1.bindTo(this.scopedContextKeyService),
							pe = U.$Q1.bindTo(this.scopedContextKeyService),
							$e = U.$T1.bindTo(this.scopedContextKeyService),
							ye = U.$V1.bindTo(this.scopedContextKeyService),
							ue = U.$U1.bindTo(this.scopedContextKeyService),
							fe = this.b.add(new m.$Zc());
						this.b.add(
							this.g.onDidChangeViewModel(() => {
								fe.clear();
								const Le = this.g.viewModel;
								Le &&
									(fe.add(
										(0, m.$Yc)(() => {
											(Ce.context = void 0),
												ae.reset(),
												pe.reset(),
												ye.reset(),
												ue.reset(),
												$e.reset();
										}),
									),
									fe.add(
										Le.onDidChange(() => {
											const Fe = Le.getItems().at(-1);
											(Ce.context = Fe),
												ae.set((0, x.$$Tb)(Fe)),
												pe.set(
													(0, x.$$Tb)(Fe)
														? Fe.vote === F.ChatAgentVoteDirection.Down
															? "down"
															: Fe.vote === F.ChatAgentVoteDirection.Up
																? "up"
																: ""
														: "",
												),
												ye.set((0, x.$$Tb)(Fe) && Fe.errorDetails !== void 0),
												ue.set(
													!!(
														(0, x.$$Tb)(Fe) &&
														Fe.errorDetails?.responseIsFiltered
													),
												),
												$e.set(
													(0, x.$$Tb)(Fe) &&
														(Fe.agent?.metadata.supportIssueReporting ?? !1),
												),
												this.j.fire();
										}),
									),
									this.j.fire());
							}),
						),
							this.b.add(
								this.chatWidget.onDidChangeContentHeight(() => {
									this.j.fire();
								}),
							),
							(this.f = H.$ZKb.bindTo(this.n));
						const me = this.b.add((0, t.$dhb)(this.domNode));
						this.b.add(me.onDidBlur(() => this.f.set(!1))),
							this.b.add(me.onDidFocus(() => this.f.set(!0))),
							(this.d = H.$XKb.bindTo(ee)),
							this.b.add(
								this.g.inputEditor.onDidFocusEditorWidget(() => this.d.set(!0)),
							),
							this.b.add(
								this.g.inputEditor.onDidBlurEditorWidget(() => this.d.set(!1)),
							);
						const ve =
								ie.statusMenuId instanceof $.$XX
									? ie.statusMenuId
									: ie.statusMenuId.menu,
							ge =
								ie.statusMenuId instanceof $.$XX
									? void 0
									: ie.statusMenuId.options,
							be = oe.createInstance(s.$LLb, this.a.toolbar1, ve, {
								toolbarOptions: { primaryGroup: "0_main" },
								telemetrySource:
									ie.chatWidgetViewOptions?.menus?.telemetrySource,
								menuOptions: { renderShortTitle: !0 },
								...ge,
							});
						this.b.add(be.onDidChange(() => this.j.fire())), this.b.add(be);
						const Ce = oe.createInstance(
							y.$Tyb,
							this.a.toolbar2,
							ie.secondaryMenuId ?? $.$XX.for(""),
							{
								telemetrySource:
									ie.chatWidgetViewOptions?.menus?.telemetrySource,
								menuOptions: { renderShortTitle: !0, shouldForwardArgs: !0 },
								actionViewItemProvider: (Le, Fe) =>
									Le instanceof $.$2X && Le.item.id === N.$7Yb
										? oe.createInstance(A.$$Xb, Le, Fe)
										: (0, l.$Pyb)(oe, Le, Fe),
							},
						);
						this.b.add(Ce.onDidChangeMenuItems(() => this.j.fire())),
							this.b.add(Ce),
							this.b.add(
								this.q.onDidChangeConfiguration((Le) => {
									Le.affectsConfiguration(
										D.AccessibilityVerbositySettingId.InlineChat,
									) && this.w();
								}),
							),
							(this.a.root.tabIndex = 0),
							(this.a.statusLabel.tabIndex = 0),
							this.w(),
							this.b.add(
								this.v.setupManagedHover(
									(0, i.$cib)("element"),
									this.a.statusLabel,
									() => this.a.statusLabel.dataset.title,
								),
							),
							this.b.add(
								this.u.onDidPerformUserAction((Le) => {
									Le.sessionId === this.g.viewModel?.model.sessionId &&
										Le.action.kind === "vote" &&
										this.updateStatus("Thank you for your feedback!", {
											resetAfter: 1250,
										});
								}),
							),
							(this.c = this.b.add(
								this.m.createInstance(
									z.$82,
									void 0,
									O.ChatAgentLocation.Editor,
								),
							)),
							this.c.startInitialize(),
							this.c.initialize(void 0),
							this.setChatModel(this.c);
					}
					w() {
						if (
							((this.a.root.ariaLabel = this.s.getOpenAriaHint(
								D.AccessibilityVerbositySettingId.InlineChat,
							)),
							this.p.isScreenReaderOptimized())
						) {
							let Y = G;
							if (
								this.q.getValue(D.AccessibilityVerbositySettingId.InlineChat)
							) {
								const ie = this.o
									.lookupKeybinding(
										M.AccessibilityCommandId.OpenAccessibilityHelp,
									)
									?.getLabel();
								Y = ie
									? (0, o.localize)(7105, null, ie)
									: (0, o.localize)(7106, null);
							}
							this.g.inputEditor.updateOptions({ ariaLabel: Y });
						}
					}
					dispose() {
						this.b.dispose();
					}
					get domNode() {
						return this.a.root;
					}
					get chatWidget() {
						return this.g;
					}
					saveState() {
						this.g.saveState();
					}
					layout(Y) {
						this.l = !0;
						try {
							this.x(Y);
						} finally {
							this.l = !1;
						}
					}
					x(Y) {
						const ie = this.y(),
							ne = (0, t.$zgb)(this.a.status);
						(this.a.root.style.height = `${Y.height - ie}px`),
							(this.a.root.style.width = `${Y.width}px`),
							this.g.layout(Y.height - ne - ie, Y.width);
					}
					get contentHeight() {
						const Y = {
							chatWidgetContentHeight: this.g.contentHeight,
							statusHeight: (0, t.$zgb)(this.a.status),
							extraHeight: this.y(),
						};
						return Y.chatWidgetContentHeight + Y.statusHeight + Y.extraHeight;
					}
					get minHeight() {
						let Y = 100;
						for (const ne of this.g.viewModel?.getItems() ?? [])
							if (
								(0, x.$$Tb)(ne) &&
								ne.response.value.some(
									(ee) => ee.kind === "textEditGroup" && !ee.state?.applied,
								)
							) {
								Y = 270;
								break;
							}
						let ie = this.contentHeight;
						return (
							(ie -= this.g.contentHeight),
							(ie += Math.min(
								this.g.input.contentHeight + Y,
								this.g.contentHeight,
							)),
							ie
						);
					}
					y() {
						return 6;
					}
					get value() {
						return this.g.getInput();
					}
					set value(Y) {
						this.g.setInput(Y);
					}
					selectAll(Y = !0) {
						let ie = 1;
						if (!Y) {
							const ne = /^(\/\w+)\s*/.exec(
								this.g.inputEditor.getModel().getLineContent(1),
							);
							ne && (ie = ne[1].length + 1);
						}
						this.g.inputEditor.setSelection(
							new c.$kL(1, ie, Number.MAX_SAFE_INTEGER, 1),
						);
					}
					set placeholder(Y) {
						this.g.setInputPlaceholder(Y);
					}
					toggleStatus(Y) {
						this.a.toolbar1.classList.toggle("hidden", !Y),
							this.a.toolbar2.classList.toggle("hidden", !Y),
							this.a.status.classList.toggle("hidden", !Y),
							this.a.infoLabel.classList.toggle("hidden", !Y),
							this.j.fire();
					}
					updateToolbar(Y) {
						this.a.root.classList.toggle("toolbar", Y),
							this.a.toolbar1.classList.toggle("hidden", !Y),
							this.a.toolbar2.classList.toggle("hidden", !Y),
							this.a.status.classList.toggle("actions", Y),
							this.a.infoLabel.classList.toggle("hidden", Y),
							this.j.fire();
					}
					async getCodeBlockInfo(Y) {
						const { viewModel: ie } = this.g;
						if (!ie) return;
						const ne = ie.getItems().filter((_) => (0, x.$$Tb)(_));
						if (!ne.length) return;
						const ee = ne[ne.length - 1];
						return ie.codeBlockModelCollection.get(ie.sessionId, ee, Y)?.model;
					}
					get responseContent() {
						const Y = this.g.viewModel?.model.getRequests();
						if ((0, E.$Pb)(Y))
							return (0, E.$wb)(Y)?.response?.response.toString();
					}
					getChatModel() {
						return this.g.viewModel?.model ?? this.c;
					}
					setChatModel(Y) {
						this.g.setModel(Y, { inputValue: void 0 });
					}
					updateChatMessage(Y, ie, ne) {
						if (!this.g.viewModel || this.g.viewModel.model !== this.c) return;
						const ee = this.c;
						if (!Y?.message.value) {
							for (const te of ee.getRequests()) ee.removeRequest(te.id);
							return;
						}
						const _ = ee.addRequest(
							{ parts: [], text: "" },
							{ variables: [] },
							0,
						);
						if (
							(ee.acceptResponseProgress(_, {
								kind: "markdownContent",
								content: Y.message,
							}),
							!ie)
						) {
							ee.completeResponse(_);
							return;
						}
						return {
							cancel: () => ee.cancelRequest(_),
							complete: () => ee.completeResponse(_),
							appendContent: (te) => {
								ee.acceptResponseProgress(_, {
									kind: "markdownContent",
									content: new d.$cl(te),
								});
							},
						};
					}
					updateInfo(Y) {
						this.a.infoLabel.classList.toggle("hidden", !Y);
						const ie = (0, w.$Sib)(Y);
						(0, t.$hhb)(this.a.infoLabel, ...ie), this.j.fire();
					}
					updateStatus(Y, ie = {}) {
						const ne = typeof ie.resetAfter == "number";
						if (ne && !this.a.statusLabel.dataset.state) {
							const _ = this.a.statusLabel.innerText,
								te = this.a.statusLabel.dataset.title,
								Q = Array.from(this.a.statusLabel.classList.values());
							setTimeout(() => {
								this.updateStatus(_, {
									classes: Q,
									keepMessage: !0,
									title: te,
								});
							}, ie.resetAfter);
						}
						const ee = (0, w.$Sib)(Y);
						(0, t.$hhb)(this.a.statusLabel, ...ee),
							(this.a.statusLabel.className = `label status ${(ie.classes ?? []).join(" ")}`),
							this.a.statusLabel.classList.toggle("hidden", !Y),
							ne
								? (this.a.statusLabel.dataset.state = "temp")
								: delete this.a.statusLabel.dataset.state,
							ie.title
								? (this.a.statusLabel.dataset.title = ie.title)
								: delete this.a.statusLabel.dataset.title,
							this.j.fire();
					}
					reset() {
						this.g.setContext(!0),
							this.g.saveState(),
							this.updateChatMessage(void 0),
							(0, t.$hhb)(this.a.statusLabel),
							this.a.statusLabel.classList.toggle("hidden", !0),
							this.a.toolbar1.classList.add("hidden"),
							this.a.toolbar2.classList.add("hidden"),
							this.updateInfo(""),
							this.chatWidget.setModel(this.c, {}),
							this.a.accessibleViewer.classList.toggle("hidden", !0),
							this.j.fire();
					}
					focus() {
						this.g.focusInput();
					}
					hasFocus() {
						return this.domNode.contains((0, t.$Jgb)());
					}
				};
				(e.$9Yb = V),
					(e.$9Yb = V =
						Ne(
							[
								j(2, T.$Li),
								j(3, S.$6j),
								j(4, k.$uZ),
								j(5, b.$XK),
								j(6, v.$gj),
								j(7, f.$HLb),
								j(8, p.$MO),
								j(9, F.$J2),
								j(10, I.$Uyb),
							],
							V,
						));
				const G = (0, o.localize)(7107, null);
				let K = class extends V {
					constructor(Y, ie, ne, ee, _, te, Q, Z, se, re, le, oe) {
						super(
							Y,
							{
								...ne,
								chatWidgetViewOptions: {
									...ne.chatWidgetViewOptions,
									editorOverflowWidgetsDomNode: ie.getOverflowWidgetsDomNode(),
								},
							},
							te,
							ee,
							_,
							Q,
							Z,
							se,
							re,
							le,
							oe,
						),
							(this.A = ie),
							(this.z = this.b.add(new m.$2c()));
					}
					get contentHeight() {
						let Y = super.contentHeight;
						return this.z.value && (Y += this.z.value.height + 8), Y;
					}
					x(Y) {
						let ie = Y.height;
						this.z.value &&
							((this.z.value.width = Y.width - 12),
							(ie -= this.z.value.height + 8)),
							super.x(Y.with(void 0, ie)),
							(this.a.root.style.height = `${Y.height - this.y()}px`);
					}
					reset() {
						this.z.clear(), super.reset();
					}
					showAccessibleHunk(Y, ie) {
						this.a.accessibleViewer.classList.remove("hidden"),
							this.z.clear(),
							(this.z.value = this.m.createInstance(
								J,
								this.a.accessibleViewer,
								Y,
								ie,
								new W(this.A, Y, ie),
							)),
							this.j.fire();
					}
				};
				(e.$0Yb = K),
					(e.$0Yb = K =
						Ne(
							[
								j(3, S.$6j),
								j(4, k.$uZ),
								j(5, T.$Li),
								j(6, b.$XK),
								j(7, v.$gj),
								j(8, f.$HLb),
								j(9, p.$MO),
								j(10, F.$J2),
								j(11, I.$Uyb),
							],
							K,
						));
				let J = (q = class extends u.$ayb {
					set width(Y) {
						this.y.set(Y, void 0);
					}
					constructor(Y, ie, ne, ee, _) {
						const te = (0, r.observableValue)("width", 0),
							Q = (0, r.observableValue)("diff", q.z(ne)),
							Z = (0, r.derived)((le) => [Q.read(le)]),
							se = Math.min(10, 8 + Q.get().changedLineCount),
							re = ee.getModifiedOptions().get(a.EditorOption.lineHeight) * se;
						super(
							Y,
							(0, r.constObservable)(!0),
							() => {},
							(0, r.constObservable)(!1),
							te,
							(0, r.constObservable)(re),
							Z,
							ee,
							_,
						),
							(this.height = re),
							(this.y = te),
							this.B.add(
								ie.textModelN.onDidChangeContent(() => {
									Q.set(q.z(ne), void 0);
								}),
							);
					}
					static z(Y) {
						const ie = Y.getRanges0(),
							ne = Y.getRangesN(),
							ee = h.$rL.fromRangeInclusive(ie[0]),
							_ = h.$rL.fromRangeInclusive(ne[0]),
							te = [];
						for (let Q = 1; Q < ie.length; Q++)
							te.push(new n.$DL(ie[Q], ne[Q]));
						return new n.$CL(ee, _, te);
					}
				});
				J = q = Ne([j(4, T.$Li)], J);
				class W {
					constructor(Y, ie, ne) {
						(this.a = Y), (this.b = ie), (this.c = ne);
					}
					getOriginalModel() {
						return this.b.textModel0;
					}
					getModifiedModel() {
						return this.b.textModelN;
					}
					getOriginalOptions() {
						return this.a.getOptions();
					}
					getModifiedOptions() {
						return this.a.getOptions();
					}
					originalReveal(Y) {}
					modifiedReveal(Y) {
						this.a.revealRangeInCenterIfOutsideViewport(
							Y || this.c.getRangesN()[0],
							g.ScrollType.Smooth,
						);
					}
					modifiedSetSelection(Y) {}
					modifiedFocus() {
						this.a.focus();
					}
					getModifiedPosition() {
						return this.c.getRangesN()[0].getStartPosition();
					}
				}
			},
		),
		
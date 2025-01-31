import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/constants.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/layout/browser/layoutService.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageTypes.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/storage/common/storage.js';
import '../../../browser/parts/views/viewPaneContainer.js';
import '../../../common/views.js';
import './composerChatViewPane.js';
import './composerContextKeys.js';
import './composerDataService.js';
import './composerEditor.js';
import './composerViewPane.js';
import './composerViews.js';
import './constants.js';
import './renderComposerPane.js';
import '../../terminal/browser/terminal.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/layout/browser/layoutService.js';
import '../../../services/views/common/viewsService.js';
define(
			de[2014],
			he([
				1, 0, 7, 58, 6, 3, 8, 102, 20, 5, 180, 45, 205, 30, 21, 239, 60, 4414,
				793, 209, 1076, 4416, 506, 169, 1075, 107, 66, 18, 96, 89,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*constants*/,
				w /*event*/,
				E /*lifecycle*/,
				C /*contextkey*/,
				d /*descriptors*/,
				m /*extensions*/,
				r /*instantiation*/,
				u /*layoutService*/,
				a /*reactiveStorageService*/,
				h /*reactiveStorageTypes*/,
				c /*platform*/,
				n /*storage*/,
				g /*viewPaneContainer*/,
				p /*views*/,
				o /*composerChatViewPane*/,
				f /*composerContextKeys*/,
				b /*composerDataService*/,
				s /*composerEditor*/,
				l /*composerViewPane*/,
				y /*composerViews*/,
				$ /*constants*/,
				v /*renderComposerPane*/,
				S /*terminal*/,
				I /*editorGroupsService*/,
				T /*editorService*/,
				P /*layoutService*/,
				k /*viewsService*/,
) {
				"use strict";
				var L;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerViewsService = void 0),
					(t = mt(t));
				let D = class extends E.$1c {
					static {
						L = this;
					}
					static {
						this.composerViewPaneContainer = c.$Io
							.as(p.Extensions.ViewContainersRegistry)
							.registerViewContainer(
								{
									id: $.COMPOSER_VIEW_PANE_CONTAINER_ID,
									title: {
										original: $.COMPOSER_VIEW_PANE_TITLE,
										value: $.COMPOSER_VIEW_PANE_TITLE,
									},
									icon: $.COMPOSER_VIEW_PANE_ICON,
									ctorDescriptor: new d.$Ji(g.$ZSb, [
										$.COMPOSER_VIEW_PANE_CONTAINER_ID,
										{ mergeViewWithContainerWhenSingleView: !0 },
									]),
									storageId: $.COMPOSER_VIEW_PANE_STORAGE_ID,
									hideIfEmpty: !1,
									rejectAddedViews: !0,
									order: 1,
								},
								p.ViewContainerLocation.AuxiliaryBar,
							);
					}
					static {
						this.composerViewPaneDescriptor = {
							id: i.$FX,
							name: {
								original: $.COMPOSER_VIEW_PANE_TITLE,
								value: $.COMPOSER_VIEW_PANE_TITLE,
							},
							containerIcon: $.COMPOSER_VIEW_PANE_ICON,
							ctorDescriptor: new d.$Ji(l.ComposerViewPane),
							hideByDefault: !1,
							canToggleVisibility: !1,
							canMoveView: !1,
							collapsed: !1,
						};
					}
					static {
						this.chatViewPaneContainer = c.$Io
							.as(p.Extensions.ViewContainersRegistry)
							.registerViewContainer(
								{
									id: i.$HX,
									title: {
										original: $.COMPOSER_CHAT_VIEW_PANE_TITLE,
										value: $.COMPOSER_CHAT_VIEW_PANE_TITLE,
									},
									icon: $.COMPOSER_CHAT_VIEW_PANE_ICON,
									ctorDescriptor: new d.$Ji(g.$ZSb, [
										i.$HX,
										{ mergeViewWithContainerWhenSingleView: !0 },
									]),
									storageId: $.COMPOSER_CHAT_VIEW_PANE_STORAGE_ID,
									hideIfEmpty: !0,
									rejectAddedViews: !0,
									order: 0,
								},
								p.ViewContainerLocation.AuxiliaryBar,
							);
					}
					static {
						this.chatViewPaneDescriptor = {
							id: i.$GX,
							name: {
								original: $.COMPOSER_CHAT_VIEW_PANE_TITLE,
								value: $.COMPOSER_CHAT_VIEW_PANE_TITLE,
							},
							containerIcon: $.COMPOSER_CHAT_VIEW_PANE_ICON,
							ctorDescriptor: new d.$Ji(o.ComposerChatViewPane),
							hideByDefault: !1,
							canToggleVisibility: !1,
							canMoveView: !1,
							collapsed: !1,
						};
					}
					constructor(N, A, R, O, B, U, z, F, x, H, q, V) {
						super(),
							(this.instantiationService = N),
							(this.workbenchLayoutService = A),
							(this.layoutService = R),
							(this.viewDescriptorService = O),
							(this.composerDataService = B),
							(this.reactiveStorageService = U),
							(this.viewsService = z),
							(this.terminalService = F),
							(this.editorService = x),
							(this.editorGroupsService = H),
							(this.storageService = q),
							(this.contextKeyService = V),
							(this._inputDelegates = new Map()),
							(this._prevPaneViewVisibility = !1),
							(this._skipReactToLocationOpening = !1),
							(this._cameFromTerminal = !1),
							(this._editors = []),
							(this._trackedGroups = new Set()),
							(this._skipUnregisterEditor = !1),
							(this._onDidHide = this.D(new w.$re())),
							(this.onDidHide = this._onDidHide.event),
							(this._onDidChangeChatPaneVisibility = this.D(new w.$re())),
							(this.onDidChangeChatPaneVisibility =
								this._onDidChangeChatPaneVisibility.event),
							(this._openComposerPromise = new Promise((X) => {
								this._resolveOpenComposerPromise = X;
							})),
							(this._barContainer = t.$(".composer-bar")),
							t.$fhb(this.layoutService.mainContainer, this._barContainer),
							this.D(
								this.viewsService.onDidChangeViewContainerVisibility(
									({ id: X, visible: Y }) => {
										X === $.COMPOSER_VIEW_PANE_CONTAINER_ID &&
										Y &&
										!this.isShowing(
											this.composerDataService.selectedComposerId,
										) &&
										this.getComposerLocation(
											this.composerDataService.selectedComposerId,
										) !== "pane"
											? this.handleOpenComposerPane(
													this.composerDataService.selectedComposerId,
												)
											: X === i.$HX &&
												Y &&
												!this.isShowing(
													this.composerDataService.selectedChatId,
												) &&
												this.getComposerLocation(
													this.composerDataService.selectedChatId,
												) !== "pane" &&
												this.handleOpenComposerPane(
													this.composerDataService.selectedChatId,
												),
											X === i.$HX &&
												this.updateHoverWidgetText(
													this.composerDataService.selectedChatId,
												),
											X === $.COMPOSER_VIEW_PANE_CONTAINER_ID && !Y
												? this.composerDataService.updateComposerData(
														this.composerDataService.selectedComposerId,
														{
															lastFocusedBubbleId: void 0,
															selectedBubbleId: void 0,
															editingBubbleId: void 0,
														},
													)
												: X === i.$HX &&
													!Y &&
													this.composerDataService.updateComposerData(
														this.composerDataService.selectedChatId,
														{
															lastFocusedBubbleId: void 0,
															selectedBubbleId: void 0,
															editingBubbleId: void 0,
														},
													);
									},
								),
							),
							this.D(
								this.onDidHide(({ composerId: X }) => {
									this.composerDataService.updateComposerData(X, {
										lastFocusedBubbleId: void 0,
										selectedBubbleId: void 0,
										editingBubbleId: void 0,
									});
								}),
							),
							this.D(
								this.viewsService.onDidChangeViewVisibility(
									({ id: X, visible: Y }) => {
										X === i.$GX && this._onDidChangeChatPaneVisibility.fire(Y);
									},
								),
							);
						const G = (X) => {
							if (this._skipReactToLocationOpening) {
								this._skipReactToLocationOpening = !1;
								return;
							}
							switch (X) {
								case "pane":
									this.handleOpenComposerPane(
										this.composerDataService.selectedComposerId,
									);
									break;
								case "editor":
									this.handleOpenComposerEditor(
										this.composerDataService.selectedComposerId,
									);
									break;
								case "bar":
									this.handleOpenComposerBar(
										this.composerDataService.selectedComposerId,
									);
									break;
							}
						};
						this.D(
							this.reactiveStorageService.onChangeEffectManuallyDisposed({
								deps: [
									() =>
										this.reactiveStorageService.applicationUserPersistentStorage
											.composerState.location2,
								],
								onChange: ({ deps: X }) => {
									const Y = X[0];
									Y && G(Y);
								},
							}),
						),
							this.applicationComposerSettings.location2 === "floating"
								? this.setComposerLocation(
										this.composerDataService.selectedComposerId,
										"pane",
									)
								: G(this.applicationComposerSettings.location2 ?? "pane"),
							setTimeout(() => {
								for (const Y of this.editorGroupsService.getGroups(
									I.GroupsOrder.CREATION_TIME,
								))
									this.registerGroupListeners(Y);
								(this._prevPaneViewVisibility =
									this.isComposerPanePartVisible()),
									this._prevPaneViewVisibility &&
										this.getComposerLocation(
											this.composerDataService.selectedComposerId,
										) !== "editor" &&
										this.handleOpenComposerPane(
											this.composerDataService.selectedComposerId,
											{ skipShowAndFocus: !0 },
										);
								const X = this.isChatPaneVisible();
								this._onDidChangeChatPaneVisibility.fire(X);
							}, 1e3),
							this.D(
								this.editorGroupsService.mainPart.onDidLayout(() => {
									for (const X of this.editorGroupsService.getGroups(
										I.GroupsOrder.CREATION_TIME,
									))
										this.registerGroupListeners(X);
								}),
							),
							this.D(
								this.editorGroupsService.onDidAddGroup((X) => {
									this.registerGroupListeners(X);
								}),
							),
							this.D(
								this.editorGroupsService.onDidActivateGroup((X) => {
									this.registerGroupListeners(X);
								}),
							),
							this.applicationComposerSettings.hasMigratedChatLocation ||
								(this.reactiveStorageService.setApplicationUserPersistentStorage(
									"composerState",
									"chatLocation",
									this.reactiveStorageService.workspaceUserPersistentStorage
										.aiPanePosition === h.AIPanePosition.EDITOR
										? "editor"
										: "pane",
								),
								(this.applicationComposerSettings.hasMigratedChatLocation = !0),
								this.reactiveStorageService.setApplicationUserPersistentStorage(
									"composerState",
									"hasMigratedChatLocation",
									!0,
								));
						const K = (X) => {
							X &&
							c.$Io
								.as(p.Extensions.ViewsRegistry)
								.getView(L.chatViewPaneDescriptor.id)
								? c.$Io
										.as(p.Extensions.ViewsRegistry)
										.deregisterViews(
											[L.chatViewPaneDescriptor],
											L.chatViewPaneContainer,
										)
								: !X &&
									!c.$Io
										.as(p.Extensions.ViewsRegistry)
										.getView(L.chatViewPaneDescriptor.id) &&
									c.$Io
										.as(p.Extensions.ViewsRegistry)
										.registerViews(
											[L.chatViewPaneDescriptor],
											L.chatViewPaneContainer,
										);
						};
						this.D(
							this.reactiveStorageService.onChangeEffectManuallyDisposed({
								deps: [
									() =>
										this.reactiveStorageService.applicationUserPersistentStorage
											.composerState.unification,
								],
								onChange: ({ deps: X }) => {
									const Y = X[0];
									Y !== void 0 && K(Y);
								},
							}),
						),
							!0 &&
								this.reactiveStorageService.setApplicationUserPersistentStorage(
									"composerState",
									"unification",
									!1,
								),
							this.applicationComposerSettings.wasBarPreviouslyOpen &&
								(async () => (
									await this._openComposerPromise,
									this.handleOpenComposerBar(
										this.composerDataService.selectedComposerId,
										{ skipFocus: !0 },
									)
								))();
						const W = f.currentActiveEditorIsChat.bindTo(
							this.contextKeyService,
						);
						this.D(
							this.editorService.onDidActiveEditorChange(() => {
								const X = this.editorService.activeEditor;
								X instanceof s.ComposerEditorInput
									? W.set(X.getForceMode() === "chat")
									: W.set(!1);
							}),
						);
					}
					triggerScrollToBottom(N) {
						this.composerDataService.updateComposerDataSetStore(N, (A) => {
							A("scrollToBottomTrigger", Date.now());
						});
					}
					triggerShouldRecomputeCodeBlock(N) {
						this.composerDataService.updateComposerDataSetStore(N, (A) => {
							A("shouldRecomputeCodeBlock", (R) => (R ?? 0) + 1);
						});
					}
					get applicationComposerSettings() {
						return this.reactiveStorageService.applicationUserPersistentStorage
							.composerState;
					}
					setOpenComposer(N) {
						return (
							(this._openComposer = N),
							this._resolveOpenComposerPromise(),
							(0, E.$Yc)(() => {
								(this._openComposer = void 0),
									(this._openComposerPromise = new Promise((A) => {
										this._resolveOpenComposerPromise = A;
									}));
							})
						);
					}
					isViewPaneRegistered() {
						return !!c.$Io
							.as(p.Extensions.ViewsRegistry)
							.getView(L.composerViewPaneDescriptor.id);
					}
					isComposerPanePartVisible() {
						if (!this.isViewPaneRegistered()) return !1;
						const N = this.viewDescriptorService.getViewContainerById(
							$.COMPOSER_VIEW_PANE_CONTAINER_ID,
						);
						if (!N) return !1;
						const A = this.viewDescriptorService.getViewContainerLocation(N);
						if (!A) return !1;
						const R = this.getLayoutPartForLocation(A);
						return R ? this.workbenchLayoutService.isVisible(R) : !1;
					}
					handleOpenComposerPane(N, A) {
						this._openComposer?.(N, { ...A, view: "pane" });
					}
					handleOpenComposerEditor(N, A) {
						this._openComposer?.(N, { ...A, view: "editor" });
					}
					handleOpenComposerBar(N, A) {
						this._openComposer?.(N, { ...A, view: "bar" });
					}
					async showAndFocus(N, A) {
						const R = this.terminalService.getActiveInstance()?.hasFocus ?? !1,
							O =
								this.editorService.activeTextEditorControl?.hasTextFocus() ??
								!1;
						(R || O) && (this._cameFromTerminal = R);
						let B = this.getComposerLocation(N);
						const U = A?.view ?? B;
						if (A?.skipShowAndFocus) {
							this.setComposerLocation(N, U);
							return;
						}
						switch (
							(this.isShowing(N) &&
								this.getComposerLocation(N) !== U &&
								this.hide(N),
							this.getComposerLocation(N) !== U &&
								((this._skipReactToLocationOpening = !0),
								this.setComposerLocation(N, U)),
							U)
						) {
							case "pane": {
								const F =
									this.composerDataService.getComposerForceMode(N) === "chat"
										? i.$GX
										: i.$FX;
								this.viewsService.isViewVisible(F) ||
									(await this.viewsService.openView(F, !0));
								break;
							}
							case "editor": {
								await this.openAsEditorView(N);
								break;
							}
							case "bar": {
								this.openAsBarView(N);
								break;
							}
							default:
								throw Error("[composer] view not specified");
						}
						A?.skipFocus ||
							(A?.focusMainInputBox
								? this.getInputDelegate(N).focus()
								: this.getLastFocusedInputDelegate(N).focus());
					}
					hide(N) {
						switch (this.getComposerLocation(N)) {
							case "pane":
								this.closeComposerPanePart();
							case "editor":
								this.closeEditorViews(N);
							case "bar":
								this.closeBar();
						}
						this._inputDelegates.delete(N),
							this._onDidHide.fire({ composerId: N });
					}
					focus(N, A) {
						A
							? this.getInputDelegate(N).focus()
							: this.getLastFocusedInputDelegate(N).focus();
					}
					blur(N) {
						this.getLastFocusedInputDelegate(N).getRef()?.blur(),
							this._cameFromTerminal
								? ((this._cameFromTerminal = !1),
									this.terminalService.focusActiveInstance())
								: this.editorService.activeEditorPane?.focus();
					}
					setComposerLocation(N, A) {
						if (this.composerDataService.getComposerForceMode(N) === "chat") {
							if (A === "bar") {
								console.error("[composer] chat location cannot be bar");
								return;
							}
							this.reactiveStorageService.setApplicationUserPersistentStorage(
								"composerState",
								"chatLocation",
								A,
							);
							return;
						}
						A !== "bar" &&
							this.reactiveStorageService.setApplicationUserPersistentStorage(
								"composerState",
								"nonBarLocation",
								A,
							),
							this.reactiveStorageService.setApplicationUserPersistentStorage(
								"composerState",
								"location2",
								A,
							);
					}
					getComposerLocation(N) {
						return this.composerDataService.getComposerData(N)
							? this.composerDataService.getComposerForceMode(N) === "chat"
								? (this.applicationComposerSettings.chatLocation ?? "pane")
								: (this.applicationComposerSettings.location2 ?? "pane")
							: "pane";
					}
					getComposerNonBarLocation(N) {
						return this.composerDataService.getComposerData(N)
							? this.composerDataService.getComposerForceMode(N) === "chat"
								? (this.applicationComposerSettings.chatLocation ?? "pane")
								: (this.reactiveStorageService.applicationUserPersistentStorage
										.composerState.nonBarLocation ?? "pane")
							: "pane";
					}
					getLayoutPartForLocation(N) {
						switch (N) {
							case p.ViewContainerLocation.AuxiliaryBar:
								return P.Parts.AUXILIARYBAR_PART;
							case p.ViewContainerLocation.Panel:
								return P.Parts.PANEL_PART;
							case p.ViewContainerLocation.Sidebar:
								return P.Parts.SIDEBAR_PART;
							default:
								return;
						}
					}
					isShowing(N) {
						if (!this.composerDataService.getComposerData(N)) return !1;
						const R = this.composerDataService.getComposerForceMode(N);
						switch (this.getComposerLocation(N)) {
							case "pane":
								return this.isComposerPanePartVisible();
							case "editor":
								return this.getForceModeEditors(R).length > 0;
							case "bar":
								return this._barDisposable !== void 0;
						}
					}
					closeComposerPanePart() {
						const N = this.getComposerPanePartLocation();
						N && this.workbenchLayoutService.setPartHidden(!0, N);
					}
					getComposerPanePartLocation() {
						if (!this.isViewPaneRegistered()) return;
						const N = this.viewDescriptorService.getViewContainerById(
							$.COMPOSER_VIEW_PANE_CONTAINER_ID,
						);
						if (!N) return;
						const A = this.viewDescriptorService.getViewContainerLocation(N);
						if (A) return this.getLayoutPartForLocation(A);
					}
					getLastFocusedInputDelegate(N) {
						const A = this.getOrCreateDelegates(N),
							R = this.composerDataService.getComposerData(N);
						return R?.lastFocusedBubbleId === void 0 ||
							R?.editingBubbleId === void 0
							? A.main
							: A.secondary;
					}
					getInputDelegate(N) {
						return this.getOrCreateDelegates(N).main;
					}
					getPrevEditingBubbleInputDelegate(N) {
						return this.getOrCreateDelegates(N).secondary;
					}
					openAsBarView(N) {
						if (this._barDisposable === void 0) {
							const A = this.composerDataService.getComposerForceMode(N);
							(this._barDisposable = (0, v.renderComposerPane)(
								this._barContainer,
								this.instantiationService,
								"bar",
								A,
							)),
								this.reactiveStorageService.setApplicationUserPersistentStorage(
									"composerState",
									"wasBarPreviouslyOpen",
									!0,
								);
						}
					}
					async openAsEditorView(N) {
						const A = this.composerDataService.getComposerForceMode(N),
							R = this.getForceModeEditors(A);
						if (R.length > 0) {
							const B = R[0].groupId,
								U = this.editorGroupsService.getGroup(B);
							if (
								U &&
								(this.editorGroupsService.activeGroup.id !== U.id ||
									U.isActive(s.ComposerEditorInput.create(N, A)))
							) {
								await this.editorGroupsService
									.getGroup(B)
									?.openEditor(s.ComposerEditorInput.create(N, A), {
										pinned: !0,
									});
								return;
							}
						}
						R.length !== 0 &&
							((this._skipUnregisterEditor = !0),
							await this.closeEditorViews(N),
							(this._skipUnregisterEditor = !1));
						let O;
						if (
							this.editorGroupsService.groups.length >= 1 &&
							this.editorGroupsService.groups[0].editors.length > 0
						) {
							const B = this.editorGroupsService.findGroup({
								location: I.GroupLocation.LAST,
							});
							B &&
								B.id == this.editorGroupsService.activeGroup.id &&
								(O = this.editorGroupsService.addGroup(
									B,
									I.GroupDirection.RIGHT,
								));
						}
						await this.editorService?.openEditor(
							this.instantiationService?.createInstance(
								s.ComposerEditorInput,
								N,
								A,
							),
							{ pinned: !0 },
							O,
						);
					}
					closeBar() {
						this._barDisposable?.dispose(),
							(this._barDisposable = void 0),
							this.reactiveStorageService.setApplicationUserPersistentStorage(
								"composerState",
								"wasBarPreviouslyOpen",
								!1,
							);
					}
					closeEditorViews(N, A) {
						const R = this.composerDataService.getComposerForceMode(N),
							O = A ?? [...this.getForceModeEditors(R)];
						return (
							(this._editors = this._editors.filter(
								(B) => !O.some((U) => U.groupId === B.groupId),
							)),
							Promise.all(
								O.map(({ groupId: B, composerId: U }) =>
									this.editorGroupsService
										.getGroup(B)
										?.closeEditor(s.ComposerEditorInput.create(U, R)),
								),
							)
						);
					}
					updateHoverWidgetText(N) {
						if (this.composerDataService.getComposerForceMode(N) !== "chat")
							return;
						const R = this._editors.some((U) => U.composerId === N),
							O = this.viewsService.isViewVisible(i.$GX),
							B = R || O;
						this.reactiveStorageService.setNonPersistentStorage(
							"shouldShowInsertChatWidget",
							B,
						);
					}
					registerEditor(N, A) {
						const R = this.composerDataService.getComposerForceMode(A);
						this.getComposerLocation(A) !== "editor" &&
							this.handleOpenComposerEditor(A),
							this._trackedGroups.has(N) ||
								this.registerGroupListeners(
									this.editorGroupsService.getGroup(N),
								),
							this.getForceModeEditors(R).some((O) => O.groupId === N) ||
								this._editors.push({ groupId: N, composerId: A }),
							this.closeEditorViews(
								A,
								this.getForceModeEditors(R).filter((O) => O.groupId !== N),
							),
							this.updateHoverWidgetText(A);
					}
					unregisterEditor(N, A) {
						const R = this.composerDataService.getComposerForceMode(A),
							O = this.editorService.findEditors(
								s.ComposerEditorInput.create(A, R),
							);
						(this._editors = this._editors.filter((B) => B.groupId !== N)),
							this.updateHoverWidgetText(A);
					}
					registerGroupListeners(N) {
						if (this._trackedGroups.has(N.id)) return;
						if (
							(this._trackedGroups.add(N.id),
							N.editors.some((B) => B.typeId === s.ComposerEditorInput.ID))
						) {
							const B = N.editors.find(
								(U) => U.typeId === s.ComposerEditorInput.ID,
							).resource.path;
							this.registerEditor(N.id, B);
						}
						const A = N.onDidCloseEditor((B) => {
								if (B.editor.typeId !== s.ComposerEditorInput.ID) return;
								const U = B.editor.resource.path;
								this.unregisterEditor(N.id, U);
							}),
							R = N.onWillOpenEditor((B) => {
								if (B.editor?.typeId !== s.ComposerEditorInput.ID) return;
								const U = B.editor.resource.path;
								this.registerEditor(N.id, U);
							});
						this.D(A), this.D(R);
						const O = N.onWillDispose(() => {
							A.dispose(), R.dispose();
						});
						this.D(O);
					}
					focusPrevBubble(N) {
						this.getPrevEditingBubbleInputDelegate(N).focus();
					}
					isFocused(N) {
						return !!this.getInputDelegate(N).isFocused();
					}
					isPrevBubbleFocused(N) {
						return !!this.getPrevEditingBubbleInputDelegate(N).isFocused();
					}
					dispose() {
						super.dispose(), this._solidAlwaysComponentsDisposable?.dispose();
					}
					getDebugInfo() {
						return {
							container: this._barContainer,
							solidAlwaysComponentsDisposable:
								this._solidAlwaysComponentsDisposable,
							inputDelegates: Array.from(this._inputDelegates.entries()).map(
								([N, A]) => ({ id: N, main: A.main, secondary: A.secondary }),
							),
							prevPaneViewVisibility: this._prevPaneViewVisibility,
							skipReactToLocationOpening: this._skipReactToLocationOpening,
							cameFromTerminal: this._cameFromTerminal,
							editors: this._editors,
							trackedGroups: this._trackedGroups,
							skipUnregisterEditor: this._skipUnregisterEditor,
							location2: this.applicationComposerSettings.location2,
							aiPanePosition:
								this.reactiveStorageService.workspaceUserPersistentStorage
									.aiPanePosition,
						};
					}
					getOrCreateDelegates(N) {
						const A =
							this.composerDataService.getComposerForceMode(N) ?? "edit";
						let R = this._inputDelegates.get(A);
						return (
							R ||
								((R = { main: new h.$Zzb(), secondary: new h.$Zzb() }),
								this._inputDelegates.set(A, R)),
							R
						);
					}
					getForceModeEditors(N) {
						return this._editors.filter(
							(A) =>
								this.composerDataService.getComposerForceMode(A.composerId) ===
								N,
						);
					}
					isChatPaneVisible() {
						return this.viewsService.isViewVisible(i.$GX);
					}
				};
				(e.ComposerViewsService = D),
					(e.ComposerViewsService =
						D =
						L =
							Ne(
								[
									j(0, r.$Li),
									j(1, P.$mEb),
									j(2, u.$jEb),
									j(3, p.$K1),
									j(4, b.IComposerDataService),
									j(5, a.$0zb),
									j(6, k.$HMb),
									j(7, S.$iIb),
									j(8, T.$IY),
									j(9, I.$EY),
									j(10, n.$lq),
									j(11, C.$6j),
								],
								D,
							)),
					(0, m.$lK)(y.IComposerViewsService, D, m.InstantiationType.Delayed);
			},
		)

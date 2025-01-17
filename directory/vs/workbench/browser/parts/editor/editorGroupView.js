import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../common/editor/editorGroupModel.js';
import '../../../common/editor.js';
import '../../../common/contextkeys.js';
import '../../../common/editor/sideBySideEditorInput.js';
import '../../../../base/common/event.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/browser/dom.js';
import '../../../../platform/instantiation/common/serviceCollection.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../base/browser/ui/progressbar/progressbar.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../common/theme.js';
import '../../../services/editor/common/editorGroupsService.js';
import './editorPanes.js';
import '../../../../platform/progress/common/progress.js';
import '../../../services/progress/browser/progressIndicator.js';
import '../../../../nls.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../base/common/async.js';
import '../../../../base/browser/touch.js';
import './editor.js';
import '../../../../base/browser/ui/actionbar/actionbar.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../base/browser/mouseEvent.js';
import '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../services/editor/common/editorService.js';
import '../../../../base/common/hash.js';
import '../../../../editor/common/services/languagesAssociations.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/network.js';
import '../../../../platform/editor/common/editor.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../services/filesConfiguration/common/filesConfigurationService.js';
import '../../../../base/common/uri.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../base/common/platform.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/telemetry/common/telemetryUtils.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import './editorGroupQuickActions.js';
import './editorTitleControl.js';
import './editorPane.js';
import '../../../services/editor/common/editorResolverService.js';
import '../../../services/host/browser/host.js';
import '../../../common/editor/diffEditorInput.js';
import '../../../../platform/files/common/files.js';
import '../../../../css!vs/workbench/browser/parts/editor/media/editorgroupview.js';
define(
			de[1984],
			he([
				1, 0, 1287, 44, 100, 313, 6, 5, 7, 128, 8, 436, 35, 51, 123, 66, 3860,
				84, 707, 4, 24, 3, 32, 15, 159, 548, 105, 39, 11, 168, 92, 49, 18, 136,
				671, 19, 23, 116, 57, 170, 9, 68, 12, 34, 269, 106, 4224, 4012, 217,
				231, 87, 296, 22, 2339,
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
				q,
				V,
				G,
				K,
				J,
				W,
				X,
				Y,
				ie,
				ne,
			) {
				"use strict";
				var ee;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Euc = void 0);
				let _ = (ee = class extends h.$pP {
					static createNew(Q, Z, se, re, le, oe) {
						return le.createInstance(ee, null, Q, Z, se, re, oe);
					}
					static createFromSerialized(Q, Z, se, re, le, oe, ae) {
						return oe.createInstance(ee, Q, Z, se, re, le, ae);
					}
					static createCopy(Q, Z, se, re, le, oe, ae) {
						return oe.createInstance(ee, Q, Z, se, re, le, ae);
					}
					constructor(
						Q,
						Z,
						se,
						re,
						le,
						oe,
						ae,
						pe,
						$e,
						ye,
						ue,
						fe,
						me,
						ve,
						ge,
						be,
						Ce,
						Le,
						Fe,
						Oe,
						xe,
						He,
					) {
						super($e),
							(this.P = Z),
							(this.groupsView = se),
							(this.Q = re),
							(this.R = le),
							(this.S = ae),
							(this.U = pe),
							(this.W = ye),
							(this.X = ue),
							(this.Y = fe),
							(this.Z = me),
							(this.$ = ve),
							(this.ab = ge),
							(this.bb = be),
							(this.cb = Ce),
							(this.db = Le),
							(this.eb = Fe),
							(this.fb = Oe),
							(this.gb = xe),
							(this.hb = He),
							(this.a = this.D(new C.$re())),
							(this.onDidFocus = this.a.event),
							(this.b = this.D(new C.$re())),
							(this.onWillDispose = this.b.event),
							(this.c = this.D(new C.$re())),
							(this.onDidModelChange = this.c.event),
							(this.f = this.D(new C.$re())),
							(this.onDidActiveEditorChange = this.f.event),
							(this.g = this.D(new C.$re())),
							(this.onDidOpenEditorFail = this.g.event),
							(this.j = this.D(new C.$re())),
							(this.onWillCloseEditor = this.j.event),
							(this.m = this.D(new C.$re())),
							(this.onDidCloseEditor = this.m.event),
							(this.r = this.D(new C.$re())),
							(this.onWillMoveEditor = this.r.event),
							(this.s = this.D(new C.$re())),
							(this.onWillOpenEditor = this.s.event),
							(this.L = this.D(new $.$1h((Je) => this.zb(Je), 0))),
							(this.M = new Map()),
							(this.N = this.D(new l.$2c())),
							(this.O = new $.$0h()),
							(this.whenRestored = this.O.p),
							(this.Hb = !1),
							(this.element = document.createElement("div")),
							(this.Yb = this.D(new C.$Ae())),
							(this.onDidChange = this.Yb.event),
							Q instanceof ee
								? (this.t = this.D(Q.t.clone()))
								: (0, t.$lY)(Q)
									? (this.t = this.D(ae.createInstance(t.$qY, Q)))
									: (this.t = this.D(ae.createInstance(t.$qY, void 0))),
							(this.scopedContextKeyService = this.D(
								this.U.createScoped(this.element),
							)),
							this.element.classList.add(
								...(0, s.$Lb)([
									"editor-group-container",
									this.t.isLocked ? "locked" : void 0,
								]),
							),
							this.jb(),
							this.kb(),
							this.lb(),
							this.D(this.S.createInstance(K.$Duc, this.element)),
							(this.H = this.D(new a.$bpb(this.element, G.$nyb))),
							this.H.hide(),
							(this.z = this.D(
								this.S.createChild(
									new r.$Ki(
										[u.$6j, this.scopedContextKeyService],
										[o.$bO, this.D(new f.$JMb(this.H, this))],
									),
								),
							)),
							(this.C = this.D(this.z.createInstance(w.$BQb))),
							this.ib(),
							(this.F = document.createElement("div")),
							this.F.classList.add("title"),
							this.element.appendChild(this.F),
							(this.G = this.D(
								this.z.createInstance(
									J.$otc,
									this.F,
									this.P,
									this.groupsView,
									this,
									this.t,
								),
							)),
							(this.I = document.createElement("div")),
							this.I.classList.add("editor-container"),
							this.element.appendChild(this.I),
							(this.J = this.D(
								this.z.createInstance(p.$Auc, this.element, this.I, this),
							)),
							(this.Yb.input = this.J.onDidChangeSizeConstraints),
							this.nb(),
							this.pb(),
							this.ob(),
							this.updateStyles(),
							(this.qb(Q, oe) ?? Promise.resolve()).finally(() => {
								this.O.complete();
							}),
							this.rb();
					}
					ib() {
						const Q = this.P.bind(w.$JPb, this),
							Z = this.P.bind(w.$KPb, this),
							se = this.P.bind(w.$LPb, this),
							re = this.P.bind(w.$MPb, this),
							le = this.P.bind(w.$NPb, this),
							oe = this.P.bind(w.$YPb, this),
							ae = this.P.bind(w.$3Pb, this),
							pe = w.$6Pb.bindTo(this.scopedContextKeyService),
							$e = w.$7Pb.bindTo(this.scopedContextKeyService),
							ye = w.$8Pb.bindTo(this.scopedContextKeyService),
							ue = this.P.bind(w.$TPb, this),
							fe = this.P.bind(w.$OPb, this),
							me = this.P.bind(w.$RPb, this),
							ve = this.P.bind(w.$QPb, this),
							ge = this.P.bind(w.$PPb, this),
							be = this.P.bind(w.$VPb, this),
							Ce = this.P.bind(w.$WPb, this),
							Le = this.P.bind(w.$UPb, this),
							Fe = this.P.bind(w.$SPb, this),
							Oe = this.P.bind(w.$XPb, this),
							xe = this.D(new l.$2c()),
							He = () => {
								xe.clear(),
									this.scopedContextKeyService.bufferChangeEvents(() => {
										const Je = this.activeEditor,
											Te = this.activeEditorPane;
										if (
											(this.C.set(
												i.$A1.getOriginalUri(Je, {
													supportSideBySide: i.SideBySideEditor.PRIMARY,
												}),
											),
											(0, w.$CQb)(Le, Je, this.eb),
											Je
												? (Fe.set(
														Je.hasCapability(
															i.EditorInputCapabilities.CanSplitInGroup,
														),
													),
													Oe.set(Je.typeId === E.$iY.ID),
													Q.set(Je.isDirty() && !Je.isSaving()),
													(xe.value = Je.onDidChangeDirty(() => {
														Q.set(Je.isDirty() && !Je.isSaving());
													})))
												: (Fe.set(!1), Oe.set(!1), Q.set(!1)),
											Te)
										) {
											ue.set(Te.getId()),
												me.set(
													!Te.input.hasCapability(
														i.EditorInputCapabilities.Untitled,
													),
												),
												fe.set(!!Te.input.isReadonly());
											const Ee = i.$A1.getOriginalUri(Te.input, {
													supportSideBySide: i.SideBySideEditor.PRIMARY,
												}),
												Ie = i.$A1.getOriginalUri(Te.input, {
													supportSideBySide: i.SideBySideEditor.SECONDARY,
												});
											ge.set(
												Te.input instanceof ie.$GVb &&
													!Te.input.original.isReadonly() &&
													!!Ee &&
													(this.hb.hasProvider(Ee) ||
														Ee.scheme === O.Schemas.untitled) &&
													!!Ie &&
													(this.hb.hasProvider(Ie) ||
														Ie.scheme === O.Schemas.untitled),
											),
												ve.set(
													!!Ee &&
														this.hb.hasProvider(Ee) &&
														!this.hb.hasCapability(
															Ee,
															ne.FileSystemProviderCapabilities.Readonly,
														),
												);
											const Be = Te?.getId() === i.$d1;
											Ce.set(Be), be.set(Be);
										} else
											ue.reset(),
												me.reset(),
												fe.reset(),
												ge.reset(),
												ve.reset();
									});
							},
							Ke = (Je) => {
								switch (Je.kind) {
									case i.GroupModelChangeKind.GROUP_LOCKED:
										ae.set(this.isLocked);
										break;
									case i.GroupModelChangeKind.EDITOR_ACTIVE:
										se.set(this.t.isFirst(this.t.activeEditor)),
											re.set(this.t.isLast(this.t.activeEditor)),
											Z.set(
												this.t.activeEditor
													? this.t.isPinned(this.t.activeEditor)
													: !1,
											),
											le.set(
												this.t.activeEditor
													? this.t.isSticky(this.t.activeEditor)
													: !1,
											);
										break;
									case i.GroupModelChangeKind.EDITOR_CLOSE:
										Z.set(
											this.t.activeEditor
												? this.t.isPinned(this.t.activeEditor)
												: !1,
										),
											le.set(
												this.t.activeEditor
													? this.t.isSticky(this.t.activeEditor)
													: !1,
											);
									case i.GroupModelChangeKind.EDITOR_OPEN:
									case i.GroupModelChangeKind.EDITOR_MOVE:
										se.set(this.t.isFirst(this.t.activeEditor)),
											re.set(this.t.isLast(this.t.activeEditor));
										break;
									case i.GroupModelChangeKind.EDITOR_PIN:
										Je.editor &&
											Je.editor === this.t.activeEditor &&
											Z.set(this.t.isPinned(this.t.activeEditor));
										break;
									case i.GroupModelChangeKind.EDITOR_STICKY:
										Je.editor &&
											Je.editor === this.t.activeEditor &&
											le.set(this.t.isSticky(this.t.activeEditor));
										break;
									case i.GroupModelChangeKind.EDITORS_SELECTION:
										pe.set(this.t.selectedEditors.length > 1),
											$e.set(this.t.selectedEditors.length === 2),
											ye.set(
												this.t.selectedEditors.every(
													(Te) =>
														Te.resource &&
														(this.hb.hasProvider(Te.resource) ||
															Te.resource.scheme === O.Schemas.untitled),
												),
											);
										break;
								}
								oe.set(this.count);
							};
						this.D(this.onDidModelChange((Je) => Ke(Je))),
							this.D(this.onDidActiveEditorChange(() => He())),
							He(),
							Ke({ kind: i.GroupModelChangeKind.EDITOR_ACTIVE }),
							Ke({ kind: i.GroupModelChangeKind.GROUP_LOCKED });
					}
					jb() {
						this.D(
							(0, m.$0fb)(this.element, m.$$gb.DBLCLICK, (Q) => {
								this.isEmpty && m.$ahb.stop(Q);
							}),
						),
							this.D(
								(0, m.$0fb)(this.element, m.$$gb.AUXCLICK, (Q) => {
									this.isEmpty &&
										Q.button === 1 &&
										(m.$ahb.stop(Q, !0), this.groupsView.removeGroup(this));
								}),
							);
					}
					kb() {
						const Q = document.createElement("div");
						Q.classList.add("editor-group-container-toolbar"),
							this.element.appendChild(Q);
						const Z = this.D(
								new I.$eib(Q, {
									ariaLabel: (0, b.localize)(3441, null),
									highlightToggledItems: !0,
								}),
							),
							se = this.D(
								this.Y.createMenu(
									P.$XX.EmptyEditorGroup,
									this.scopedContextKeyService,
								),
							),
							re = () => {
								const le = { primary: [], secondary: [] };
								(this.N.value = (0, l.$Yc)(() => Z.clear())),
									(0, L.$Kyb)(
										se,
										{ arg: { groupId: this.id }, shouldForwardArgs: !0 },
										le,
										"navigation",
									);
								for (const oe of [...le.primary, ...le.secondary]) {
									const ae = this.X.lookupKeybinding(oe.id);
									Z.push(oe, {
										icon: !0,
										label: !1,
										keybinding: ae?.getLabel(),
									});
								}
							};
						re(), this.D(se.onDidChange(re));
					}
					lb() {
						this.D(
							(0, m.$0fb)(this.element, m.$$gb.CONTEXT_MENU, (Q) => this.mb(Q)),
						),
							this.D(
								(0, m.$0fb)(this.element, v.EventType.Contextmenu, () =>
									this.mb(),
								),
							);
					}
					mb(Q) {
						if (!this.isEmpty) return;
						let Z = this.element;
						Q && (Z = new k.$2fb((0, m.getWindow)(this.element), Q)),
							this.Z.showContextMenu({
								menuId: P.$XX.EmptyEditorGroupContext,
								contextKeyService: this.U,
								getAnchor: () => Z,
								onHide: () => {
									this.focus();
								},
							});
					}
					nb() {
						const Q = this.D((0, m.$dhb)(this.element));
						this.D(
							Q.onDidFocus(() => {
								this.isEmpty && this.a.fire();
							}),
						);
						const Z = (se) => {
							let re;
							if ((0, m.$7gb)(se)) {
								if (se.button !== 0 || (H.$m && se.ctrlKey)) return;
								re = se.target;
							} else re = se.initialTarget;
							(0, m.$Egb)(re, "monaco-action-bar", this.F) ||
								(0, m.$Egb)(re, "monaco-breadcrumb-item", this.F) ||
								setTimeout(() => {
									this.focus();
								});
						};
						this.D((0, m.$0fb)(this.F, m.$$gb.MOUSE_DOWN, (se) => Z(se))),
							this.D((0, m.$0fb)(this.F, v.EventType.Tap, (se) => Z(se))),
							this.D(
								this.J.onDidFocus(() => {
									this.a.fire();
								}),
							);
					}
					ob() {
						this.isEmpty
							? (this.element.classList.add("empty"),
								(this.element.tabIndex = 0),
								this.element.setAttribute(
									"aria-label",
									(0, b.localize)(3442, null, this.ariaLabel),
								))
							: (this.element.classList.remove("empty"),
								this.element.removeAttribute("tabIndex"),
								this.element.removeAttribute("aria-label")),
							this.updateStyles();
					}
					pb() {
						this.F.classList.toggle(
							"tabs",
							this.groupsView.partOptions.showTabs === "multiple",
						),
							this.F.classList.toggle(
								"show-file-icons",
								this.groupsView.partOptions.showIcons,
							);
					}
					qb(Q, Z) {
						if (this.count === 0) return;
						let se;
						Q instanceof ee
							? (se = (0, S.$IEb)(Q))
							: (se = Object.create(null));
						const re = this.t.activeEditor;
						if (!re) return;
						(se.pinned = this.t.isPinned(re)),
							(se.sticky = this.t.isSticky(re)),
							(se.preserveFocus = !0);
						const le = { preserveWindowOrder: !0, skipTitleUpdate: !0 },
							oe = (0, m.$Jgb)(),
							ae = this.Kb(re, { active: !0, isNew: !1 }, se, le).then(() => {
								this.groupsView.activeGroup === this &&
									oe &&
									(0, m.$Kgb)(oe) &&
									!Z?.preserveFocus &&
									this.focus();
							});
						return this.G.openEditors(this.editors), ae;
					}
					rb() {
						this.D(this.t.onDidModelChange((Q) => this.sb(Q))),
							this.D(
								this.groupsView.onDidChangeEditorPartOptions((Q) => this.Ab(Q)),
							),
							this.D(this.groupsView.onDidVisibilityChange((Q) => this.Fb(Q))),
							this.D(this.onDidFocus(() => this.Gb()));
					}
					sb(Q) {
						switch ((this.c.fire(Q), Q.kind)) {
							case i.GroupModelChangeKind.GROUP_LOCKED:
								this.element.classList.toggle("locked", this.isLocked);
								break;
							case i.GroupModelChangeKind.EDITORS_SELECTION:
								this.Eb();
								break;
						}
						if (Q.editor)
							switch (Q.kind) {
								case i.GroupModelChangeKind.EDITOR_OPEN:
									(0, t.$nY)(Q) && this.tb(Q.editor, Q.editorIndex);
									break;
								case i.GroupModelChangeKind.EDITOR_CLOSE:
									(0, t.$pY)(Q) &&
										this.ub(Q.editor, Q.editorIndex, Q.context, Q.sticky);
									break;
								case i.GroupModelChangeKind.EDITOR_WILL_DISPOSE:
									this.yb(Q.editor);
									break;
								case i.GroupModelChangeKind.EDITOR_DIRTY:
									this.Bb(Q.editor);
									break;
								case i.GroupModelChangeKind.EDITOR_TRANSIENT:
									this.Cb(Q.editor);
									break;
								case i.GroupModelChangeKind.EDITOR_LABEL:
									this.Db(Q.editor);
									break;
							}
					}
					tb(Q, Z) {
						this.W.publicLog("editorOpened", this.xb(Q)), this.ob();
					}
					ub(Q, Z, se, re) {
						this.j.fire({
							groupId: this.id,
							editor: Q,
							context: se,
							index: Z,
							sticky: re,
						});
						const le = [Q];
						Q instanceof E.$iY && le.push(Q.primary, Q.secondary);
						for (const oe of le) this.vb(oe) && oe.dispose();
						this.W.publicLog("editorClosed", this.xb(Q)),
							this.ob(),
							this.m.fire({
								groupId: this.id,
								editor: Q,
								context: se,
								index: Z,
								sticky: re,
							});
					}
					vb(Q) {
						for (const Z of this.P.groups)
							if (
								Z instanceof ee &&
								Z.t.contains(Q, {
									strictEquals: !0,
									supportSideBySide: i.SideBySideEditor.ANY,
								})
							)
								return !1;
						return !0;
					}
					wb(Q) {
						if (!Q) return;
						const Z = Q
							? Q.scheme === O.Schemas.file
								? Q.fsPath
								: Q.path
							: void 0;
						if (!Z) return;
						let se = (0, R.$lh)(Q);
						const re = se.indexOf("?");
						return (
							(se = re !== -1 ? se.substr(0, re) : se),
							{
								mimeType: new V.$Qp((0, A.$lYb)(Q).join(", ")),
								scheme: Q.scheme,
								ext: se,
								path: (0, N.$Aj)(Z),
							}
						);
					}
					xb(Q) {
						const Z = Q.getTelemetryDescriptor(),
							se = i.$A1.getOriginalUri(Q, {
								supportSideBySide: i.SideBySideEditor.BOTH,
							});
						return F.URI.isUri(se)
							? ((Z.resource = this.wb(se)), Z)
							: (se &&
									(se.primary && (Z.resource = this.wb(se.primary)),
									se.secondary &&
										(Z.resourceSecondary = this.wb(se.secondary))),
								Z);
					}
					yb(Q) {
						this.L.work(Q);
					}
					zb(Q) {
						let Z;
						const se = [];
						for (const re of Q) {
							const le = this.t.findEditor(re);
							if (!le) continue;
							const oe = le[0];
							oe.isDisposed() && (this.t.isActive(oe) ? (Z = oe) : se.push(oe));
						}
						for (const re of se) this.Ob(re, !0);
						Z && this.Ob(Z, !0);
					}
					Ab(Q) {
						this.pb(),
							this.G.updateOptions(Q.oldPartOptions, Q.newPartOptions),
							(Q.oldPartOptions.showTabs !== Q.newPartOptions.showTabs ||
								Q.oldPartOptions.tabHeight !== Q.newPartOptions.tabHeight ||
								(Q.oldPartOptions.showTabs === "multiple" &&
									Q.oldPartOptions.pinnedTabsOnSeparateRow !==
										Q.newPartOptions.pinnedTabsOnSeparateRow)) &&
								(this.relayout(),
								this.t.activeEditor &&
									this.G.openEditors(
										this.t.getEditors(i.EditorsOrder.SEQUENTIAL),
									)),
							this.updateStyles(),
							Q.oldPartOptions.enablePreview &&
								!Q.newPartOptions.enablePreview &&
								this.t.previewEditor &&
								this.pinEditor(this.t.previewEditor);
					}
					Bb(Q) {
						this.pinEditor(Q), this.G.updateEditorDirty(Q);
					}
					Cb(Q) {
						!this.t.isTransient(Q) &&
							!this.groupsView.partOptions.enablePreview &&
							this.pinEditor(Q);
					}
					Db(Q) {
						this.G.updateEditorLabel(Q);
					}
					Eb() {
						this.G.updateEditorSelections();
					}
					Fb(Q) {
						this.J.setVisible(Q);
					}
					Gb() {
						this.activeEditor && this.t.setTransient(this.activeEditor, !1);
					}
					get index() {
						return this.R;
					}
					get label() {
						return this.Q
							? (0, b.localize)(3443, null, this.Q, this.R + 1)
							: (0, b.localize)(3444, null, this.R + 1);
					}
					get ariaLabel() {
						return this.Q
							? (0, b.localize)(3445, null, this.Q, this.R + 1)
							: (0, b.localize)(3446, null, this.R + 1);
					}
					get disposed() {
						return this.Hb;
					}
					get isEmpty() {
						return this.count === 0;
					}
					get titleHeight() {
						return this.G.getHeight();
					}
					notifyIndexChanged(Q) {
						this.R !== Q && ((this.R = Q), this.t.setIndex(Q));
					}
					notifyLabelChanged(Q) {
						this.Q !== Q && ((this.Q = Q), this.t.setLabel(Q));
					}
					setActive(Q) {
						(this.u = Q),
							!Q &&
								this.activeEditor &&
								this.selectedEditors.length > 1 &&
								this.setSelection(this.activeEditor, []),
							this.element.classList.toggle("active", Q),
							this.element.classList.toggle("inactive", !Q),
							this.G.setActive(Q),
							this.updateStyles(),
							this.t.setActive(void 0);
					}
					get id() {
						return this.t.id;
					}
					get windowId() {
						return this.groupsView.windowId;
					}
					get editors() {
						return this.t.getEditors(i.EditorsOrder.SEQUENTIAL);
					}
					get count() {
						return this.t.count;
					}
					get stickyCount() {
						return this.t.stickyCount;
					}
					get activeEditorPane() {
						return this.J ? (this.J.activeEditorPane ?? void 0) : void 0;
					}
					get activeEditor() {
						return this.t.activeEditor;
					}
					get selectedEditors() {
						return this.t.selectedEditors;
					}
					get previewEditor() {
						return this.t.previewEditor;
					}
					isPinned(Q) {
						return this.t.isPinned(Q);
					}
					isSticky(Q) {
						return this.t.isSticky(Q);
					}
					isSelected(Q) {
						return this.t.isSelected(Q);
					}
					isTransient(Q) {
						return this.t.isTransient(Q);
					}
					isActive(Q) {
						return this.t.isActive(Q);
					}
					async setSelection(Q, Z) {
						this.isActive(Q)
							? this.t.setSelection(Q, Z)
							: await this.openEditor(
									Q,
									{ activation: B.EditorActivation.ACTIVATE },
									{ inactiveSelection: Z },
								);
					}
					contains(Q, Z) {
						return this.t.contains(Q, Z);
					}
					getEditors(Q, Z) {
						return this.t.getEditors(Q, Z);
					}
					findEditors(Q, Z) {
						const se = this.cb.asCanonicalUri(Q);
						return this.getEditors(i.EditorsOrder.SEQUENTIAL).filter((re) => {
							if (re.resource && (0, R.$gh)(re.resource, se)) return !0;
							if (
								Z?.supportSideBySide === i.SideBySideEditor.PRIMARY ||
								Z?.supportSideBySide === i.SideBySideEditor.ANY
							) {
								const le = i.$A1.getCanonicalUri(re, {
									supportSideBySide: i.SideBySideEditor.PRIMARY,
								});
								if (le && (0, R.$gh)(le, se)) return !0;
							}
							if (
								Z?.supportSideBySide === i.SideBySideEditor.SECONDARY ||
								Z?.supportSideBySide === i.SideBySideEditor.ANY
							) {
								const le = i.$A1.getCanonicalUri(re, {
									supportSideBySide: i.SideBySideEditor.SECONDARY,
								});
								if (le && (0, R.$gh)(le, se)) return !0;
							}
							return !1;
						});
					}
					getEditorByIndex(Q) {
						return this.t.getEditorByIndex(Q);
					}
					getIndexOfEditor(Q) {
						return this.t.indexOf(Q);
					}
					isFirst(Q) {
						return this.t.isFirst(Q);
					}
					isLast(Q) {
						return this.t.isLast(Q);
					}
					focus() {
						this.activeEditorPane
							? this.activeEditorPane.focus()
							: this.element.focus(),
							this.a.fire();
					}
					pinEditor(Q = this.activeEditor || void 0) {
						if (Q && !this.t.isPinned(Q)) {
							const Z = this.t.pin(Q);
							Z && this.G.pinEditor(Z);
						}
					}
					stickEditor(Q = this.activeEditor || void 0) {
						this.Ib(Q, !0);
					}
					unstickEditor(Q = this.activeEditor || void 0) {
						this.Ib(Q, !1);
					}
					Ib(Q, Z) {
						if (Q && this.t.isSticky(Q) !== Z) {
							const se = this.getIndexOfEditor(Q),
								re = Z ? this.t.stick(Q) : this.t.unstick(Q);
							if (!re) return;
							const le = this.getIndexOfEditor(re);
							le !== se && this.G.moveEditor(re, se, le, !0),
								Z ? this.G.stickEditor(re) : this.G.unstickEditor(re);
						}
					}
					async openEditor(Q, Z, se) {
						return this.Jb(Q, Z, {
							...se,
							supportSideBySide: i.SideBySideEditor.BOTH,
						});
					}
					async Jb(Q, Z, se) {
						if (!Q || Q.isDisposed()) return;
						this.s.fire({ editor: Q, groupId: this.id });
						const re =
								Z?.sticky ||
								(!this.groupsView.partOptions.enablePreview && !Z?.transient) ||
								Q.isDirty() ||
								(Z?.pinned ?? typeof Z?.index == "number") ||
								(typeof Z?.index == "number" && this.t.isSticky(Z.index)) ||
								Q.hasCapability(i.EditorInputCapabilities.Scratchpad),
							le = {
								index: Z ? Z.index : void 0,
								pinned: re,
								sticky:
									Z?.sticky ||
									(typeof Z?.index == "number" && this.t.isSticky(Z.index)),
								transient: !!Z?.transient,
								inactiveSelection: se?.inactiveSelection,
								active: this.count === 0 || !Z || !Z.inactive,
								supportSideBySide: se?.supportSideBySide,
							};
						!le.active &&
							!le.pinned &&
							this.t.activeEditor &&
							!this.t.isPinned(this.t.activeEditor) &&
							(le.active = !0);
						let oe = !1,
							ae = !1;
						if (
							(Z?.activation === B.EditorActivation.ACTIVATE
								? (oe = !0)
								: Z?.activation === B.EditorActivation.RESTORE
									? (ae = !0)
									: Z?.activation === B.EditorActivation.PRESERVE
										? ((oe = !1), (ae = !1))
										: le.active && ((oe = !Z || !Z.preserveFocus), (ae = !oe)),
							typeof le.index == "number")
						) {
							const ue = this.t.indexOf(Q);
							ue !== -1 && ue !== le.index && this.Lb(Q, le);
						}
						const { editor: pe, isNew: $e } = this.t.openEditor(Q, le);
						$e &&
							this.count === 1 &&
							this.P.groups.length > 1 &&
							pe.editorId &&
							this.groupsView.partOptions.autoLockGroups?.has(pe.editorId) &&
							this.lock(!0);
						const ye = this.Kb(pe, { active: !!le.active, isNew: $e }, Z, se);
						return (
							oe
								? this.groupsView.activateGroup(this)
								: ae && this.groupsView.restoreGroup(this),
							ye
						);
					}
					Kb(Q, Z, se, re) {
						let le;
						return (
							Z.active
								? (le = (async () => {
										const {
											pane: oe,
											changed: ae,
											cancelled: pe,
											error: $e,
										} = await this.J.openEditor(Q, se, re, {
											newInGroup: Z.isNew,
										});
										if (!pe)
											return (
												ae && this.f.fire({ editor: Q }),
												$e && this.g.fire(Q),
												!oe &&
													this.activeEditor === Q &&
													this.Ob(Q, se?.preserveFocus, { fromError: !0 }),
												oe
											);
									})())
								: (le = Promise.resolve(void 0)),
							re?.skipTitleUpdate || this.G.openEditor(Q, re),
							le
						);
					}
					async openEditors(Q) {
						const Z = (0, s.$Lb)(Q).filter(
								({ editor: ae }) => !ae.isDisposed(),
							),
							se = (0, s.$Sb)(Z);
						if (!se) return;
						const re = { supportSideBySide: i.SideBySideEditor.BOTH };
						await this.Jb(se.editor, se.options, re);
						const le = Z.slice(1),
							oe = this.getIndexOfEditor(se.editor) + 1;
						return (
							await $.Promises.settled(
								le.map(({ editor: ae, options: pe }, $e) =>
									this.Jb(
										ae,
										{ ...pe, inactive: !0, pinned: !0, index: oe + $e },
										{ ...re, skipTitleUpdate: !0 },
									),
								),
							),
							this.G.openEditors(le.map(({ editor: ae }) => ae)),
							this.J.activeEditorPane ?? void 0
						);
					}
					moveEditors(Q, Z) {
						const se = { skipTitleUpdate: this !== Z };
						let re = !1;
						const le = new Set();
						for (const { editor: oe, options: ae } of Q)
							this.moveEditor(oe, Z, ae, se) ? le.add(oe) : (re = !0);
						return (
							se.skipTitleUpdate &&
								(Z.G.openEditors(Array.from(le)),
								this.G.closeEditors(Array.from(le))),
							!re
						);
					}
					moveEditor(Q, Z, se, re) {
						return this === Z
							? (this.Lb(Q, se), !0)
							: this.Mb(Q, Z, se, { ...re, keepCopy: !1 });
					}
					Lb(Q, Z) {
						const se = Z ? Z.index : void 0;
						if (typeof se != "number") return;
						const re = this.t.indexOf(Q),
							le = this.t.getEditorByIndex(re);
						if (le) {
							if (re !== se) {
								const oe = this.t.stickyCount;
								this.t.moveEditor(le, se),
									this.t.pin(le),
									this.G.moveEditor(le, re, se, oe !== this.t.stickyCount),
									this.G.pinEditor(le);
							}
							Z?.sticky && this.stickEditor(le);
						}
					}
					Mb(Q, Z, se, re) {
						const le = re?.keepCopy;
						if (!le || Q.hasCapability(i.EditorInputCapabilities.Singleton)) {
							const ae = Q.canMove(this.id, Z.id);
							if (typeof ae == "string")
								return this.gb.error(ae, (0, b.localize)(3447, null)), !1;
						}
						const oe = (0, S.$IEb)(this, Q, {
							...se,
							pinned: !0,
							sticky: se?.sticky ?? (!le && this.t.isSticky(Q)),
						});
						return (
							le || this.r.fire({ groupId: this.id, editor: Q, target: Z.id }),
							Z.Jb(le ? Q.copy() : Q, oe, re),
							le ||
								this.Ob(Q, !0, { ...re, context: i.EditorCloseContext.MOVE }),
							!0
						);
					}
					copyEditors(Q, Z) {
						const se = { skipTitleUpdate: this !== Z };
						for (const { editor: re, options: le } of Q)
							this.copyEditor(re, Z, le, se);
						if (se.skipTitleUpdate) {
							const re = Q.map(({ editor: le }) => le);
							Z.G.openEditors(re);
						}
					}
					copyEditor(Q, Z, se, re) {
						this === Z
							? this.Lb(Q, se)
							: this.Mb(Q, Z, se, { ...re, keepCopy: !0 });
					}
					async closeEditor(Q = this.activeEditor || void 0, Z) {
						return this.Nb(Q, Z);
					}
					async Nb(Q = this.activeEditor || void 0, Z, se) {
						return !Q || (await this.Sb([Q]))
							? !1
							: (this.Ob(Q, Z?.preserveFocus, se), !0);
					}
					Ob(Q, Z = this.groupsView.activeGroup !== this, se) {
						se?.skipTitleUpdate || this.G.beforeCloseEditor(Q),
							this.t.isActive(Q) ? this.Pb(Z, se) : this.Rb(Q, se),
							se?.skipTitleUpdate || this.G.closeEditor(Q);
					}
					Pb(Q = this.groupsView.activeGroup !== this, Z) {
						const se = this.activeEditor,
							re = !Q && this.Qb(this.element),
							le = this.groupsView.partOptions.closeEmptyGroups;
						if (le && this.u && this.count === 1) {
							const pe = this.groupsView.getGroups(
								g.GroupsOrder.MOST_RECENTLY_ACTIVE,
							)[1];
							pe && (re ? pe.focus() : this.groupsView.activateGroup(pe, !0));
						}
						se && this.t.closeEditor(se, Z?.context);
						const oe = this.t.activeEditor;
						if (oe) {
							let ae;
							Q &&
								this.groupsView.activeGroup !== this &&
								(ae = B.EditorActivation.PRESERVE);
							const pe = {
									preserveFocus: Q,
									activation: ae,
									ignoreError: Z?.fromError,
								},
								$e = { preserveWindowOrder: !0 };
							this.Jb(oe, pe, $e);
						} else
							se && this.J.closeEditor(se),
								re && !le && this.focus(),
								this.f.fire({ editor: void 0 }),
								le && this.groupsView.removeGroup(this, Q);
					}
					Qb(Q) {
						const Z = (0, m.$Jgb)();
						return Z === Q.ownerDocument.body ? !0 : (0, m.$Bgb)(Z, Q);
					}
					Rb(Q, Z) {
						this.t.closeEditor(Q, Z?.context);
					}
					async Sb(Q, Z = !1) {
						if (!Q.length) return !1;
						const se = Q.shift();
						let re = this.M.get(se);
						re ||
							(Z
								? (se.revert(this.id), (re = Promise.resolve(!1)))
								: ((re = this.Tb(se)), this.M.set(se, re)));
						let le;
						try {
							le = await re;
						} finally {
							this.M.delete(se);
						}
						return le || this.Sb(Q);
					}
					async Tb(Q, Z, se = !1) {
						if (
							!this.Ub(Q) ||
							(Q instanceof E.$iY && this.t.contains(Q.primary)) ||
							this.P.groups.some((ae) => {
								if (ae === this) return !1;
								const pe = ae;
								return !!(
									pe.contains(Q, {
										supportSideBySide: i.SideBySideEditor.BOTH,
									}) ||
									(Q instanceof E.$iY && pe.contains(Q.primary))
								);
							})
						)
							return !1;
						let re = U.ConfirmResult.CANCEL,
							le = i.SaveReason.EXPLICIT,
							oe = !1;
						if (
							(!Q.hasCapability(i.EditorInputCapabilities.Untitled) &&
								!Z?.skipAutoSave &&
								!Q.closeHandler &&
								(this.bb.getAutoSaveMode(Q).mode ===
								z.AutoSaveMode.ON_FOCUS_CHANGE
									? ((oe = !0),
										(re = U.ConfirmResult.SAVE),
										(le = i.SaveReason.FOCUS_CHANGE))
									: H.$p &&
										(H.$l || H.$n) &&
										this.bb.getAutoSaveMode(Q).mode ===
											z.AutoSaveMode.ON_WINDOW_CHANGE &&
										((oe = !0),
										(re = U.ConfirmResult.SAVE),
										(le = i.SaveReason.WINDOW_CHANGE))),
							!oe)
						)
							if (
								((!this.activeEditor || !this.activeEditor.matches(Q)) &&
									(await this.Jb(Q)),
								await this.fb.focus((0, m.getWindow)(this.element)),
								typeof Q.closeHandler?.confirm == "function")
							)
								re = await Q.closeHandler.confirm([
									{ editor: Q, groupId: this.id },
								]);
							else {
								let ae;
								Q instanceof E.$iY
									? (ae = Q.primary.getName())
									: (ae = Q.getName()),
									(re = await this.$.showSaveConfirm([ae]));
							}
						if (!Q.closeHandler && !this.Ub(Q))
							return re === U.ConfirmResult.CANCEL;
						switch (re) {
							case U.ConfirmResult.SAVE:
								return !(await Q.save(this.id, { reason: le })) && oe
									? this.Tb(Q, { skipAutoSave: !0 })
									: Q.isDirty();
							case U.ConfirmResult.DONT_SAVE:
								try {
									return await Q.revert(this.id), Q.isDirty();
								} catch (ae) {
									return (
										this.db.error(ae),
										await Q.revert(this.id, { soft: !0 }),
										Q.isDirty()
									);
								}
							case U.ConfirmResult.CANCEL:
								return !0;
						}
					}
					Ub(Q) {
						return Q.closeHandler
							? Q.closeHandler.showConfirm()
							: Q.isDirty() && !Q.isSaving();
					}
					async closeEditors(Q, Z) {
						if (this.isEmpty) return !0;
						const se = this.Vb(Q);
						return (await this.Sb(se.slice(0))) ? !1 : (this.Wb(se, Z), !0);
					}
					Vb(Q) {
						if (Array.isArray(Q)) return Q;
						const Z = Q,
							se = typeof Z.direction == "number";
						let re = this.t.getEditors(
							se
								? i.EditorsOrder.SEQUENTIAL
								: i.EditorsOrder.MOST_RECENTLY_ACTIVE,
							Z,
						);
						return (
							Z.savedOnly
								? (re = re.filter((le) => !le.isDirty() || le.isSaving()))
								: se && Z.except
									? (re =
											Z.direction === i.CloseDirection.LEFT
												? re.slice(0, this.t.indexOf(Z.except, re))
												: re.slice(this.t.indexOf(Z.except, re) + 1))
									: Z.except &&
										(re = re.filter((le) => Z.except && !le.matches(Z.except))),
							re
						);
					}
					Wb(Q, Z) {
						let se = !1;
						for (const re of Q) this.isActive(re) ? (se = !0) : this.Rb(re);
						se && this.Pb(Z?.preserveFocus), Q.length && this.G.closeEditors(Q);
					}
					async closeAllEditors(Q, Z = !1) {
						if (this.isEmpty)
							return (
								this.groupsView.partOptions.closeEmptyGroups &&
									this.groupsView.removeGroup(this),
								!0
							);
						let se = this.t.getEditors(i.EditorsOrder.MOST_RECENTLY_ACTIVE, Q);
						return (
							Q?.excludeConfirming && (se = se.filter((le) => !this.Ub(le))),
							(await this.Sb(se, Z)) ? !1 : (this.Xb(Q), !0)
						);
					}
					Xb(Q) {
						let Z = this.t.getEditors(i.EditorsOrder.SEQUENTIAL, Q);
						Q?.excludeConfirming && (Z = Z.filter((re) => !this.Ub(re)));
						const se = [];
						for (const re of Z) this.isActive(re) || this.Rb(re), se.push(re);
						this.activeEditor && se.includes(this.activeEditor) && this.Pb(),
							se.length && this.G.closeEditors(se);
					}
					async replaceEditors(Q) {
						let Z;
						const se = [];
						for (let {
							editor: re,
							replacement: le,
							forceReplaceDirty: oe,
							options: ae,
						} of Q) {
							const pe = this.getIndexOfEditor(re);
							if (pe >= 0) {
								const $e = this.isActive(re);
								ae ? (ae.index = pe) : (ae = { index: pe }),
									(ae.inactive = !$e),
									(ae.pinned = ae.pinned ?? !0);
								const ye = {
									editor: re,
									replacement: le,
									forceReplaceDirty: oe,
									options: ae,
								};
								$e ? (Z = ye) : se.push(ye);
							}
						}
						for (const {
							editor: re,
							replacement: le,
							forceReplaceDirty: oe,
							options: ae,
						} of se)
							if ((await this.Jb(le, ae), !re.matches(le))) {
								let pe = !1;
								if (
									(oe
										? (this.Ob(re, !0, {
												context: i.EditorCloseContext.REPLACE,
											}),
											(pe = !0))
										: (pe = await this.Nb(
												re,
												{ preserveFocus: !0 },
												{ context: i.EditorCloseContext.REPLACE },
											)),
									!pe)
								)
									return;
							}
						if (Z) {
							const re = this.Jb(Z.replacement, Z.options);
							Z.editor.matches(Z.replacement) ||
								(Z.forceReplaceDirty
									? this.Ob(Z.editor, !0, {
											context: i.EditorCloseContext.REPLACE,
										})
									: await this.Nb(
											Z.editor,
											{ preserveFocus: !0 },
											{ context: i.EditorCloseContext.REPLACE },
										)),
								await re;
						}
					}
					get isLocked() {
						return this.t.isLocked;
					}
					lock(Q) {
						this.t.lock(Q);
					}
					createEditorActions(Q) {
						const Z = [],
							se = [];
						let re;
						const le = this.activeEditorPane;
						if (le instanceof W.$JEb) {
							const oe =
									le.scopedContextKeyService ?? this.scopedContextKeyService,
								ae = Q.add(
									this.Y.createMenu(P.$XX.EditorTitle, oe, {
										emitEventsForSubmenuChanges: !0,
										eventDebounceDelay: 0,
									}),
								);
							re = ae.onDidChange;
							const pe = ($e, ye) =>
								ye === "navigation" && $e.actions.length <= 1;
							(0, L.$Kyb)(
								ae,
								{ arg: this.C.get(), shouldForwardArgs: !0 },
								{ primary: Z, secondary: se },
								"navigation",
								pe,
							);
						} else {
							const oe = Q.add(new C.$re());
							(re = oe.event),
								Q.add(this.onDidActiveEditorChange(() => oe.fire()));
						}
						return { actions: { primary: Z, secondary: se }, onDidChange: re };
					}
					updateStyles() {
						const Q = this.isEmpty;
						Q
							? (this.element.style.backgroundColor = this.w(n.$dFb) || "")
							: (this.element.style.backgroundColor = "");
						const Z = this.w(n.$iFb) || this.w(c.$OP);
						!Q && Z
							? (this.F.classList.add("title-border-bottom"),
								this.F.style.setProperty("--title-border-bottom-color", Z))
							: (this.F.classList.remove("title-border-bottom"),
								this.F.style.removeProperty("--title-border-bottom-color"));
						const { showTabs: se } = this.groupsView.partOptions;
						(this.F.style.backgroundColor =
							this.w(se === "multiple" ? n.$fFb : n.$hFb) || ""),
							(this.I.style.backgroundColor = this.w(c.$8P) || "");
					}
					get minimumWidth() {
						return this.J.minimumWidth;
					}
					get minimumHeight() {
						return this.J.minimumHeight;
					}
					get maximumWidth() {
						return this.J.maximumWidth;
					}
					get maximumHeight() {
						return this.J.maximumHeight;
					}
					get proportionalLayout() {
						return this.y
							? !(
									this.y.width === this.minimumWidth ||
									this.y.height === this.minimumHeight
								)
							: !0;
					}
					layout(Q, Z, se, re) {
						(this.y = { width: Q, height: Z, top: se, left: re }),
							this.element.classList.toggle("max-height-478px", Z <= 478);
						const le = this.G.layout({
							container: new m.$pgb(Q, Z),
							available: new m.$pgb(Q, Z - this.J.minimumHeight),
						});
						this.H.getContainer().style.top = `${Math.max(this.titleHeight.offset - 2, 0)}px`;
						const oe = Math.max(0, Z - le.height);
						(this.I.style.height = `${oe}px`),
							this.J.layout({
								width: Q,
								height: oe,
								top: se + le.height,
								left: re,
							});
					}
					relayout() {
						if (this.y) {
							const { width: Q, height: Z, top: se, left: re } = this.y;
							this.layout(Q, Z, se, re);
						}
					}
					setBoundarySashes(Q) {
						this.J.setBoundarySashes(Q);
					}
					toJSON() {
						return this.t.serialize();
					}
					dispose() {
						(this.Hb = !0), this.b.fire(), super.dispose();
					}
				});
				(e.$Euc = _),
					(e.$Euc =
						_ =
						ee =
							Ne(
								[
									j(6, d.$Li),
									j(7, u.$6j),
									j(8, h.$iP),
									j(9, y.$km),
									j(10, T.$uZ),
									j(11, P.$YX),
									j(12, D.$Xxb),
									j(13, U.$IO),
									j(14, M.$IY),
									j(15, z.$_Y),
									j(16, x.$Vl),
									j(17, q.$ik),
									j(18, X.$E6),
									j(19, Y.$asb),
									j(20, U.$GO),
									j(21, ne.$ll),
								],
								_,
							));
			},
		),
		
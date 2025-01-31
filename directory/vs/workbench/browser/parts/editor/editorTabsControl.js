import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/browser/dnd.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/mouseEvent.js';
import '../../../../base/browser/ui/actionbar/actionbar.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../dnd.js';
import './editorPane.js';
import '../../../common/editor.js';
import '../../../common/contextkeys.js';
import '../../../../base/browser/ui/contextview/contextview.js';
import '../../../../base/common/types.js';
import '../../../../base/browser/browser.js';
import '../../../../base/common/errors.js';
import '../../../common/editor/sideBySideEditorInput.js';
import '../../../../platform/actions/browser/toolbar.js';
import '../../../../platform/dnd/browser/dnd.js';
import '../../../services/editor/common/editorResolverService.js';
import './editorCommands.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../../base/common/platform.js';
import '../../../services/host/browser/host.js';
import '../../../../platform/instantiation/common/serviceCollection.js';
import '../../../../base/browser/ui/hover/hoverDelegateFactory.js';
import '../../../../css!vs/workbench/browser/parts/editor/media/editortabscontrol.js';
define(
			de[1055],
			he([
				1, 0, 4, 323, 7, 168, 105, 50, 3, 92, 11, 8, 49, 5, 39, 40, 63, 51, 35,
				362, 217, 44, 100, 276, 28, 139, 29, 313, 173, 347, 231, 247, 66, 12,
				87, 128, 95, 2343,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*dnd*/,
				w /*dom*/,
				E /*mouseEvent*/,
				C /*actionbar*/,
				d /*actions*/,
				m /*lifecycle*/,
				r /*menuEntryActionViewItem*/,
				u /*actions*/,
				a /*contextkey*/,
				h /*contextView*/,
				c /*instantiation*/,
				n /*keybinding*/,
				g /*notification*/,
				p /*quickInput*/,
				o /*colorRegistry*/,
				f /*themeService*/,
				b /*dnd*/,
				s /*editorPane*/,
				l /*editor*/,
				y /*contextkeys*/,
				$ /*contextview*/,
				v /*types*/,
				S /*browser*/,
				I /*errors*/,
				T /*sideBySideEditorInput*/,
				P /*toolbar*/,
				k /*dnd*/,
				L /*editorResolverService*/,
				D /*editorCommands*/,
				M /*editorGroupsService*/,
				N /*platform*/,
				A /*host*/,
				R /*serviceCollection*/,
				O /*hoverDelegateFactory*/,
) {
				"use strict";
				var B;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qtc = e.$ptc = void 0);
				class U extends d.$sj {
					constructor(x) {
						super(), (this.a = x);
					}
					run(x, H) {
						let q = this.a;
						return (
							H?.preserveFocus && (q = { ...this.a, preserveFocus: !0 }),
							super.run(x, q)
						);
					}
				}
				e.$ptc = U;
				let z = class extends f.$pP {
					static {
						B = this;
					}
					static {
						this.f = { normal: 35, compact: 22 };
					}
					constructor(x, H, q, V, G, K, J, W, X, Y, ie, ne, ee, _) {
						super(ne),
							(this.N = x),
							(this.O = H),
							(this.P = q),
							(this.Q = V),
							(this.R = G),
							(this.S = K),
							(this.U = J),
							(this.W = W),
							(this.X = X),
							(this.Y = Y),
							(this.Z = ie),
							(this.$ = ee),
							(this.ab = _),
							(this.a = k.$ozb.getInstance()),
							(this.b = k.$ozb.getInstance()),
							(this.c = k.$ozb.getInstance()),
							(this.m = this.D(new m.$Zc())),
							(this.r = this.D(new m.$Zc())),
							(this.s = this.D(this.W.createScoped(x)));
						const te = this.D(this.U.createChild(new R.$Ki([a.$6j, this.s])));
						(this.t = this.D(te.createInstance(y.$BQb))),
							(this.u = y.$KPb.bindTo(this.s)),
							(this.z = y.$LPb.bindTo(this.s)),
							(this.C = y.$MPb.bindTo(this.s)),
							(this.F = y.$NPb.bindTo(this.s)),
							(this.G = y.$UPb.bindTo(this.s)),
							(this.H = y.$SPb.bindTo(this.s)),
							(this.I = y.$XPb.bindTo(this.s)),
							(this.J = y.$3Pb.bindTo(this.s)),
							(this.L = !1),
							(this.M = (0, O.$cib)("mouse")),
							this.bb(x);
					}
					bb(x) {
						this.yb();
					}
					get cb() {
						return (
							this.P.partOptions.editorActionsLocation === "default" &&
							this.P.partOptions.showTabs !== "none"
						);
					}
					db(x, H) {
						(this.g = document.createElement("div")),
							this.g.classList.add(...H),
							x.appendChild(this.g),
							this.eb(this.g);
					}
					eb(x) {
						const H = this.cb,
							q = !!this.j;
						H && !q
							? this.fb(x)
							: !H &&
								q &&
								(this.j?.getElement().remove(),
								(this.j = void 0),
								this.m.clear(),
								this.r.clear()),
							x.classList.toggle("hidden", !H);
					}
					fb(x) {
						const H = { groupId: this.Q.id };
						(this.j = this.m.add(
							this.U.createInstance(P.$Syb, x, {
								actionViewItemProvider: (q, V) => this.gb(q, V),
								orientation: C.ActionsOrientation.HORIZONTAL,
								ariaLabel: (0, t.localize)(3545, null),
								getKeyBinding: (q) => this.tb(q),
								actionRunner: this.m.add(new U(H)),
								anchorAlignmentProvider: () => $.AnchorAlignment.RIGHT,
								renderDropdownAsChildElement: this.L,
								telemetrySource: "editorPart",
								resetMenu: u.$XX.EditorTitle,
								overflowBehavior: { maxItems: 9, exempted: D.$CWb },
								highlightToggledItems: !0,
							}),
						)),
							(this.j.context = H),
							this.m.add(
								this.j.actionRunner.onDidRun((q) => {
									q.error && !(0, I.$8)(q.error) && this.Y.error(q.error);
								}),
							);
					}
					gb(x, H) {
						const q = this.Q.activeEditorPane;
						if (q instanceof s.$JEb) {
							const V = q.getActionViewItem(x, H);
							if (V) return V;
						}
						return (0, r.$Pyb)(this.U, x, { ...H, menuAsChild: this.L });
					}
					hb() {
						if (!this.cb) return;
						this.r.clear();
						const x = this.Q.createEditorActions(this.r);
						this.r.add(x.onDidChange(() => this.hb()));
						const H = (0, v.$wg)(this.j),
							{ primary: q, secondary: V } = this.ib(x.actions);
						H.setActions((0, C.$fib)(q), (0, C.$fib)(V));
					}
					jb() {
						return this.Q.activeEditorPane?.scopedContextKeyService ?? this.W;
					}
					lb() {
						if (!this.cb) return;
						(0, v.$wg)(this.j).setActions([], []);
					}
					mb(x, H) {
						if (x.target !== H) return !1;
						const q = this.pb(x);
						this.b.setData([new b.$MSb(this.Q.id)], b.$MSb.prototype),
							x.dataTransfer && (x.dataTransfer.effectAllowed = "copyMove");
						let V = !1;
						if (
							(this.P.partOptions.showTabs === "multiple"
								? (V = this.rb(
										this.Q.getEditors(l.EditorsOrder.SEQUENTIAL),
										x,
										q,
									))
								: this.Q.activeEditor &&
									(V = this.rb([this.Q.activeEditor], x, q)),
							!V &&
								S.$Ofb &&
								x.dataTransfer?.setData(i.$Ohb.TEXT, String(this.Q.label)),
							this.Q.activeEditor)
						) {
							let G = this.Q.activeEditor.getName();
							this.P.partOptions.showTabs === "multiple" &&
								this.Q.count > 1 &&
								(G = (0, t.localize)(3546, null, G, this.Q.count - 1)),
								(0, i.$Phb)(
									x,
									G,
									"monaco-editor-group-drag-image",
									this.w(o.$ES),
									this.w(o.$FS),
								);
						}
						return q;
					}
					async nb(x, H, q, V) {
						if (
							(this.b.clearData(b.$MSb.prototype),
							x.target !== q || !V || (0, b.$WSb)())
						)
							return;
						const G = await this.ob(x, q);
						if (!G) return;
						const K = G.activeGroup;
						this.P.mergeGroup(this.Q, K.id, {
							mode: this.qb(H ?? x, K.id)
								? M.MergeGroupMode.MOVE_EDITORS
								: M.MergeGroupMode.COPY_EDITORS,
						}),
							K.focus();
					}
					async ob(x, H) {
						const { point: q, display: V } =
								(await this.ab.getCursorScreenPoint()) ?? {
									point: { x: x.screenX, y: x.screenY },
								},
							G = (0, w.$Ogb)();
						if (
							G.document.visibilityState === "visible" &&
							G.document.hasFocus() &&
							q.x >= G.screenX &&
							q.x <= G.screenX + G.outerWidth &&
							q.y >= G.screenY &&
							q.y <= G.screenY + G.outerHeight
						)
							return;
						const K = H.offsetWidth / 2,
							J = 30 + H.offsetHeight / 2,
							W = { x: q.x - K, y: q.y - J };
						return (
							V && (W.x < V.x && (W.x = V.x), W.y < V.y && (W.y = V.y)),
							this.O.createAuxiliaryEditorPart({ bounds: W })
						);
					}
					pb(x) {
						return this.P.partOptions.dragToOpenWindow ? !x.altKey : x.altKey;
					}
					qb(x, H, q) {
						return q?.hasCapability(l.EditorInputCapabilities.Singleton)
							? !0
							: !((x.ctrlKey && !N.$m) || (x.altKey && N.$m)) ||
									H === this.Q.id;
					}
					rb(x, H, q) {
						return x.length
							? (this.U.invokeFunction(
									b.$PSb,
									x.map((V) => ({ editor: V, groupId: this.Q.id })),
									H,
									{ disableStandardTransfer: q },
								),
								!0)
							: !1;
					}
					sb(x, H, q) {
						this.t.set(
							l.$A1.getOriginalUri(x, {
								supportSideBySide: l.SideBySideEditor.PRIMARY,
							}),
						),
							this.u.set(this.R.isPinned(x)),
							this.z.set(this.R.isFirst(x)),
							this.C.set(this.R.isLast(x)),
							this.F.set(this.R.isSticky(x)),
							this.J.set(this.R.isLocked),
							this.H.set(
								x.hasCapability(l.EditorInputCapabilities.CanSplitInGroup),
							),
							this.I.set(x.typeId === T.$iY.ID),
							(0, y.$CQb)(this.G, x, this.$);
						let V = q;
						(0, w.$7gb)(H) && (V = new E.$2fb((0, w.getWindow)(q), H)),
							this.S.showContextMenu({
								getAnchor: () => V,
								menuId: u.$XX.EditorTitleContext,
								menuActionOptions: { shouldForwardArgs: !0, arg: this.t.get() },
								contextKeyService: this.s,
								getActionsContext: () => ({
									groupId: this.Q.id,
									editorIndex: this.Q.getIndexOfEditor(x),
								}),
								getKeyBinding: (G) => this.X.lookupKeybinding(G.id, this.s),
								onHide: () => this.P.activeGroup.focus(),
							});
					}
					tb(x) {
						return this.X.lookupKeybinding(x.id, this.jb());
					}
					ub(x) {
						const H = this.tb(x);
						return H ? (H.getLabel() ?? void 0) : void 0;
					}
					get vb() {
						return this.P.partOptions.tabHeight !== "compact"
							? B.f.normal
							: B.f.compact;
					}
					wb(x) {
						return x.getTitle(l.Verbosity.LONG);
					}
					xb() {
						return this.M;
					}
					yb() {
						this.N.style.setProperty(
							"--editor-group-tab-height",
							`${this.vb}px`,
						);
					}
					updateOptions(x, H) {
						x.tabHeight !== H.tabHeight && this.yb(),
							(x.editorActionsLocation !== H.editorActionsLocation ||
								x.showTabs !== H.showTabs) &&
								this.g &&
								(this.eb(this.g), this.hb());
					}
				};
				(e.$qtc = z),
					(e.$qtc =
						z =
						B =
							Ne(
								[
									j(5, h.$Xxb),
									j(6, c.$Li),
									j(7, a.$6j),
									j(8, n.$uZ),
									j(9, g.$4N),
									j(10, p.$DJ),
									j(11, f.$iP),
									j(12, L.$E6),
									j(13, A.$asb),
								],
								z,
							));
			},
		)

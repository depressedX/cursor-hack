import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/buffer.js';
import '../../../../base/common/network.js';
import '../../../../base/common/path.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/types.js';
import '../../../../nls.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/label/common/label.js';
import '../../../../platform/undoRedo/common/undoRedo.js';
import '../../../common/editor.js';
import '../../../services/editor/common/customEditorLabelService.js';
import '../common/customEditor.js';
import '../../webview/browser/webview.js';
import '../../webviewPanel/browser/webviewWorkbenchService.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/filesConfiguration/common/filesConfigurationService.js';
import '../../../services/layout/browser/layoutService.js';
import '../../../services/untitled/common/untitledTextEditorService.js';
define(
			de[849],
			he([
				1, 0, 7, 50, 76, 23, 54, 19, 28, 4, 57, 22, 5, 73, 155, 44, 399, 625,
				355, 623, 66, 170, 96, 631,
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
			) {
				"use strict";
				var v;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$tnc = void 0);
				let S = class extends b.$rnc {
					static {
						v = this;
					}
					static create(T, P, k, L, D) {
						return T.invokeFunction((M) => {
							const N = M.get($.$7Y).getValue(P),
								A = N ? w.$Te.fromString(N) : void 0,
								R = M.get(f.$3Ib).createWebviewOverlay({
									providedViewType: k,
									title: void 0,
									options: { customClasses: D?.customClasses },
									contentOptions: {},
									extension: void 0,
								}),
								O = T.createInstance(v, { resource: P, viewType: k }, R, {
									untitledDocumentData: A,
									oldResource: D?.oldResource,
								});
							return typeof L < "u" && O.updateGroup(L), O;
						});
					}
					static {
						this.typeId = "workbench.editors.webviewEditor";
					}
					get resource() {
						return this.z;
					}
					constructor(T, P, k, L, D, M, N, A, R, O, B, U, z, F) {
						super(
							{ providedId: T.viewType, viewType: T.viewType, name: "" },
							P,
							L,
						),
							(this.I = D),
							(this.J = M),
							(this.L = N),
							(this.M = A),
							(this.N = R),
							(this.O = O),
							(this.P = B),
							(this.Q = U),
							(this.R = z),
							(this.S = F),
							(this.Y = void 0),
							(this.Z = void 0),
							(this.ab = void 0),
							(this.cb = void 0),
							(this.eb = void 0),
							(this.gb = void 0),
							(this.ib = void 0),
							(this.z = T.resource),
							(this.oldResource = k.oldResource),
							(this.C = k.startsDirty),
							(this.F = k.backupId),
							(this.G = k.untitledDocumentData),
							this.U();
					}
					U() {
						this.D(this.J.onDidChangeFormatters((T) => this.W(T.scheme))),
							this.D(
								this.O.onDidChangeFileSystemProviderRegistrations((T) =>
									this.W(T.scheme),
								),
							),
							this.D(
								this.O.onDidChangeFileSystemProviderCapabilities((T) =>
									this.W(T.scheme),
								),
							),
							this.D(this.S.onDidChange(() => this.X()));
					}
					W(T) {
						T === this.resource.scheme && this.X();
					}
					X() {
						(this.Y = void 0),
							(this.Z = void 0),
							(this.ab = void 0),
							(this.cb = void 0),
							(this.eb = void 0),
							(this.gb = void 0),
							(this.ib = void 0),
							this.f.fire();
					}
					get typeId() {
						return v.typeId;
					}
					get editorId() {
						return this.viewType;
					}
					get capabilities() {
						let T = g.EditorInputCapabilities.None;
						return (
							(T |= g.EditorInputCapabilities.CanDropIntoEditor),
							this.L.getCustomEditorCapabilities(this.viewType)
								?.supportsMultipleEditorsPerDocument ||
								(T |= g.EditorInputCapabilities.Singleton),
							this.H
								? this.H.object.isReadonly() &&
									(T |= g.EditorInputCapabilities.Readonly)
								: this.P.isReadonly(this.resource) &&
									(T |= g.EditorInputCapabilities.Readonly),
							this.resource.scheme === E.Schemas.untitled &&
								(T |= g.EditorInputCapabilities.Untitled),
							T
						);
					}
					getName() {
						return (
							typeof this.Y != "string" &&
								(this.Y =
									this.S.getName(this.resource) ??
									(0, C.$sc)(this.J.getUriLabel(this.resource))),
							this.Y
						);
					}
					getDescription(T = g.Verbosity.MEDIUM) {
						switch (T) {
							case g.Verbosity.SHORT:
								return this.$;
							case g.Verbosity.LONG:
								return this.db;
							case g.Verbosity.MEDIUM:
							default:
								return this.bb;
						}
					}
					get $() {
						return (
							typeof this.Z != "string" &&
								(this.Z = this.J.getUriBasenameLabel(
									(0, d.$mh)(this.resource),
								)),
							this.Z
						);
					}
					get bb() {
						return (
							typeof this.ab != "string" &&
								(this.ab = this.J.getUriLabel((0, d.$mh)(this.resource), {
									relative: !0,
								})),
							this.ab
						);
					}
					get db() {
						return (
							typeof this.cb != "string" &&
								(this.cb = this.J.getUriLabel((0, d.$mh)(this.resource))),
							this.cb
						);
					}
					get fb() {
						return (
							typeof this.eb != "string" && (this.eb = this.getName()), this.eb
						);
					}
					get hb() {
						return (
							typeof this.gb != "string" &&
								(this.gb = this.J.getUriLabel(this.resource, { relative: !0 })),
							this.gb
						);
					}
					get jb() {
						return (
							typeof this.ib != "string" &&
								(this.ib = this.J.getUriLabel(this.resource)),
							this.ib
						);
					}
					getTitle(T) {
						switch (T) {
							case g.Verbosity.SHORT:
								return this.fb;
							case g.Verbosity.LONG:
								return this.jb;
							default:
							case g.Verbosity.MEDIUM:
								return this.hb;
						}
					}
					matches(T) {
						return super.matches(T)
							? !0
							: this === T ||
									(T instanceof v &&
										this.viewType === T.viewType &&
										(0, d.$gh)(this.resource, T.resource));
					}
					copy() {
						return v.create(
							this.I,
							this.resource,
							this.viewType,
							this.group,
							this.webview.options,
						);
					}
					isReadonly() {
						return this.H
							? this.H.object.isReadonly()
							: this.P.isReadonly(this.resource);
					}
					isDirty() {
						return this.H ? this.H.object.isDirty() : !!this.C;
					}
					async save(T, P) {
						if (!this.H) return;
						const k = await this.H.object.saveCustomEditor(P);
						if (k) return (0, d.$gh)(k, this.resource) ? this : { resource: k };
					}
					async saveAs(T, P) {
						if (!this.H) return;
						const k = this.z,
							L = await this.M.pickFileToSave(k, P?.availableFileSystems);
						if (L && (await this.H.object.saveCustomEditorAs(this.z, L, P)))
							return (await this.rename(T, L))?.editor;
					}
					async revert(T, P) {
						if (this.H) return this.H.object.revert(P);
						(this.C = !1), this.b.fire();
					}
					async resolve() {
						if ((await super.resolve(), this.isDisposed())) return null;
						if (!this.H) {
							const T = this.capabilities;
							(this.H = this.D(
								(0, m.$wg)(
									await this.L.models.tryRetain(this.resource, this.viewType),
								),
							)),
								this.D(this.H.object.onDidChangeDirty(() => this.b.fire())),
								this.D(this.H.object.onDidChangeReadonly(() => this.g.fire())),
								this.G && (this.C = !0),
								this.isDirty() && this.b.fire(),
								this.capabilities !== T && this.g.fire();
						}
						return null;
					}
					async rename(T, P) {
						return { editor: { resource: P } };
					}
					undo() {
						return (0, m.$wg)(this.H), this.N.undo(this.resource);
					}
					redo() {
						return (0, m.$wg)(this.H), this.N.redo(this.resource);
					}
					onMove(T) {
						this.kb = T;
					}
					s(T) {
						if (super.s(T)) return (T.kb = this.kb), (this.kb = void 0), T;
					}
					get backupId() {
						return this.H ? this.H.object.backupId : this.F;
					}
					get untitledDocumentData() {
						return this.G;
					}
					toUntyped() {
						return {
							resource: this.resource,
							options: { override: this.viewType },
						};
					}
					claim(T, P, k) {
						if (this.mb(P.vscodeWindowId) !== !0)
							throw (0, g.$E1)(
								(0, r.localize)(5122, null),
								[
									(0, i.$wj)({
										id: "openInOriginalWindow",
										label: (0, r.localize)(5123, null),
										run: async () => {
											const L = this.Q.getPart(
												this.R.getContainer(
													(0, t.getWindow)(this.webview.container).window,
												),
											);
											this.Q.getPart(
												this.R.getContainer(P.window),
											).activeGroup.moveEditor(this, L.activeGroup);
										},
									}),
								],
								{ forceMessage: !0 },
							);
						return super.claim(T, P, k);
					}
					canMove(T, P) {
						const k = this.Q.getGroup(P);
						if (k) {
							const L = this.mb(k.windowId);
							if (typeof L == "string") return L;
						}
						return super.canMove(T, P);
					}
					mb(T) {
						return this.isModified() &&
							this.H?.object.canHotExit === !1 &&
							(0, t.getWindow)(this.webview.container).vscodeWindowId !== T
							? (0, r.localize)(5124, null, this.getName())
							: !0;
					}
				};
				(e.$tnc = S),
					(e.$tnc =
						S =
						v =
							Ne(
								[
									j(3, b.$qnc),
									j(4, h.$Li),
									j(5, c.$3N),
									j(6, o.$jnc),
									j(7, u.$IO),
									j(8, n.$GN),
									j(9, a.$ll),
									j(10, l.$_Y),
									j(11, s.$EY),
									j(12, y.$mEb),
									j(13, p.$QIb),
								],
								S,
							));
			},
		),
		
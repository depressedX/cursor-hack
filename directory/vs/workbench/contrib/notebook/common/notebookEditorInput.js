import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/glob.js';
import '../../../common/editor.js';
import './notebookService.js';
import '../../../../base/common/resources.js';
import '../../../../platform/dialogs/common/dialogs.js';
import './notebookEditorModelResolverService.js';
import './notebookCommon.js';
import '../../../../platform/label/common/label.js';
import '../../../../base/common/network.js';
import '../../../../platform/files/common/files.js';
import '../../../common/editor/resourceEditorInput.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/buffer.js';
import '../../../services/filesConfiguration/common/filesConfigurationService.js';
import '../../../services/extensions/common/extensions.js';
import '../../../../nls.js';
import '../../../services/editor/common/editorService.js';
import '../../../../editor/common/services/textResourceConfiguration.js';
import '../../../services/editor/common/customEditorLabelService.js';
define(
			de[360],
			he([
				1, 0, 215, 44, 161, 19, 57, 509, 70, 73, 23, 22, 1296, 29, 76, 170, 53,
				4, 18, 125, 399,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*glob*/,
				i /*editor*/,
				w /*notebookService*/,
				E /*resources*/,
				C /*dialogs*/,
				d /*notebookEditorModelResolverService*/,
				m /*notebookCommon*/,
				r /*label*/,
				u /*network*/,
				a /*files*/,
				h /*resourceEditorInput*/,
				c /*errors*/,
				n /*buffer*/,
				g /*filesConfigurationService*/,
				p /*extensions*/,
				o /*nls*/,
				f /*editorService*/,
				b /*textResourceConfiguration*/,
				s /*customEditorLabelService*/,
) {
				"use strict";
				var l;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$TIb = void 0),
					(e.$UIb = $),
					(e.$VIb = v),
					(t = mt(t));
				let y = class extends h.$RIb {
					static {
						l = this;
					}
					static getOrCreate(I, T, P, k, L = {}) {
						const D = I.createInstance(l, T, P, k, L);
						return P && D.setPreferredResource(P), D;
					}
					static {
						this.ID = "workbench.input.notebook";
					}
					constructor(I, T, P, k, L, D, M, N, A, R, O, B, U, z) {
						super(I, T, N, A, R, U, z),
							(this.viewType = P),
							(this.options = k),
							(this.S = L),
							(this.U = D),
							(this.W = M),
							(this.c = null),
							(this.R = !1),
							(this.R = !!k.startDirty),
							(this.Q = L.onDidAddNotebookDocument((F) => {
								F.viewType === this.viewType &&
									F.uri.toString() === this.resource.toString() &&
									this.resolve().catch(c.$4);
							})),
							this.D(
								O.onWillStop((F) => {
									if (!this.isDirty()) return;
									const x = F.auto
										? (0, o.localize)(8234, null)
										: (0, o.localize)(8235, null, this.resource.path);
									F.veto(
										(async () => {
											const H = B.findEditors(this);
											return F.auto
												? !0
												: !(H.length > 0 && (await B.save(H[0])).success);
										})(),
										x,
									);
								}),
							);
					}
					dispose() {
						this.Q.dispose(),
							this.c?.dispose(),
							(this.c = null),
							super.dispose();
					}
					get typeId() {
						return l.ID;
					}
					get editorId() {
						return this.viewType;
					}
					get capabilities() {
						let I = i.EditorInputCapabilities.None;
						return (
							this.resource.scheme === u.Schemas.untitled &&
								(I |= i.EditorInputCapabilities.Untitled),
							this.c
								? this.c.object.isReadonly() &&
									(I |= i.EditorInputCapabilities.Readonly)
								: this.n.isReadonly(this.resource) &&
									(I |= i.EditorInputCapabilities.Readonly),
							I & i.EditorInputCapabilities.Readonly ||
								(I |= i.EditorInputCapabilities.CanDropIntoEditor),
							I
						);
					}
					getDescription(I = i.Verbosity.MEDIUM) {
						if (
							!this.hasCapability(i.EditorInputCapabilities.Untitled) ||
							this.c?.object.hasAssociatedFilePath()
						)
							return super.getDescription(I);
					}
					isReadonly() {
						return this.c
							? this.c.object.isReadonly()
							: this.n.isReadonly(this.resource);
					}
					isDirty() {
						return this.c ? this.c.object.isDirty() : this.R;
					}
					isSaving() {
						const I = this.c?.object;
						return !I ||
							!I.isDirty() ||
							I.hasErrorState ||
							this.hasCapability(i.EditorInputCapabilities.Untitled)
							? !1
							: this.n.hasShortAutoSaveDelay(this);
					}
					async save(I, T) {
						if (this.c)
							return this.hasCapability(i.EditorInputCapabilities.Untitled)
								? this.saveAs(I, T)
								: (await this.c.object.save(T), this);
					}
					async saveAs(I, T) {
						if (!this.c) return;
						const P = this.S.getContributedNotebookType(this.viewType);
						if (!P) return;
						const k = this.hasCapability(i.EditorInputCapabilities.Untitled)
							? await this.X(P, this.h.getUriBasenameLabel(this.resource))
							: this.c.object.resource;
						let L;
						if (this.c.object.hasAssociatedFilePath()) L = k;
						else if (
							((L = await this.W.pickFileToSave(k, T?.availableFileSystems)),
							!L)
						)
							return;
						if (!P.matches(L)) {
							const D = P.selectors
								.map((M) =>
									typeof M == "string"
										? M
										: t.$Kk(M)
											? `${M} (base ${M.base})`
											: M.exclude
												? `${M.include} (exclude: ${M.exclude})`
												: `${M.include}`,
								)
								.join(", ");
							throw new Error(`File name ${L} is not supported by ${P.providerDisplayName}.

Please make sure the file name matches following patterns:
${D}`);
						}
						return await this.c.object.saveAs(L);
					}
					async X(I, T) {
						const P = I.selectors[0];
						let k = P && typeof P == "string" ? P : void 0;
						if (!k && P) {
							const L = P.include;
							typeof L == "string" && (k = L);
						}
						if (k) {
							const L = /^\*\.([A-Za-z_-]*)$/.exec(k);
							if (L && L.length > 1) {
								const D = L[1];
								if (!T.endsWith(D))
									return (0, E.$nh)(
										await this.W.defaultFilePath(),
										T + "." + D,
									);
							}
						}
						return (0, E.$nh)(await this.W.defaultFilePath(), T);
					}
					async rename(I, T) {
						if (this.c)
							return {
								editor: { resource: T },
								options: { override: this.viewType },
							};
					}
					async revert(I, T) {
						this.c &&
							this.c.object.isDirty() &&
							(await this.c.object.revert(T));
					}
					async resolve(I, T) {
						if (!(await this.S.canResolve(this.viewType))) return null;
						if ((T?.mark("extensionActivated"), this.Q.dispose(), this.c))
							this.c.object.load({ limits: this.P(I) });
						else {
							const P = !!(
									this.capabilities & i.EditorInputCapabilities.Scratchpad
								),
								k = await this.U.resolve(this.resource, this.viewType, {
									limits: this.P(I),
									scratchpad: P,
								});
							if (this.c) return k.dispose(), this.c.object;
							if (((this.c = k), this.isDisposed()))
								return this.c.dispose(), (this.c = null), null;
							this.D(this.c.object.onDidChangeDirty(() => this.b.fire())),
								this.D(this.c.object.onDidChangeReadonly(() => this.g.fire())),
								this.D(this.c.object.onDidRevertUntitled(() => this.dispose())),
								this.c.object.isDirty() && this.b.fire();
						}
						if (this.options._backupId) {
							const P = await this.S.withNotebookDataProvider(
								this.c.object.notebook.viewType,
							);
							if (!(P instanceof w.$NIb))
								throw new Error("CANNOT open file notebook with this provider");
							const k = await P.serializer.dataToNotebook(
								n.$Te.fromString(
									JSON.stringify({ __webview_backup: this.options._backupId }),
								),
							);
							this.c.object.notebook.applyEdits(
								[
									{
										editType: m.CellEditType.Replace,
										index: 0,
										count: this.c.object.notebook.length,
										cells: k.cells,
									},
								],
								!0,
								void 0,
								() => {},
								void 0,
								!1,
							),
								this.options._workingCopy &&
									((this.options._backupId = void 0),
									(this.options._workingCopy = void 0),
									(this.options.startDirty = void 0));
						}
						return this.c.object;
					}
					toUntyped() {
						return {
							resource: this.resource,
							options: { override: this.viewType },
						};
					}
					matches(I) {
						return super.matches(I)
							? !0
							: I instanceof l
								? this.editorId === I.editorId &&
									(0, E.$gh)(this.resource, I.resource)
								: !1;
					}
				};
				(e.$TIb = y),
					(e.$TIb =
						y =
						l =
							Ne(
								[
									j(4, w.$MIb),
									j(5, d.$OIb),
									j(6, C.$IO),
									j(7, r.$3N),
									j(8, a.$ll),
									j(9, g.$_Y),
									j(10, p.$q2),
									j(11, f.$IY),
									j(12, b.$XO),
									j(13, s.$QIb),
								],
								y,
							));
				function $(S) {
					return (
						!!S &&
						typeof S == "object" &&
						Array.isArray(S.editorInputs) &&
						S.editorInputs.every((I) => I instanceof y)
					);
				}
				function v(S) {
					return !!S && typeof S == "object" && S.typeId === y.ID;
				}
			},
		)

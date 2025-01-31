import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/path.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/errorMessage.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/lifecycle.js';
import '../common/files.js';
import '../../../../platform/files/common/files.js';
import '../../../common/editor.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../services/host/browser/host.js';
import './fileConstants.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/clipboard/common/clipboardService.js';
import '../../../../editor/common/languages/language.js';
import '../../../../editor/common/services/model.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../base/common/network.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/notification/common/notification.js';
import '../../../services/editor/common/editorService.js';
import '../../../../base/common/uint.js';
import '../../../browser/parts/editor/editorCommands.js';
import '../../../../base/common/arrays.js';
import '../common/explorerModel.js';
import '../../../../base/common/errors.js';
import '../../../../base/browser/dom.js';
import '../../../services/filesConfiguration/common/filesConfigurationService.js';
import '../../../services/workingCopy/common/workingCopyService.js';
import '../../../../base/common/async.js';
import '../../../services/workingCopy/common/workingCopyFileService.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/themables.js';
import '../../../common/views.js';
import '../../../services/views/common/viewsService.js';
import '../../../../base/common/strings.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../editor/browser/services/bulkEditService.js';
import './files.js';
import './fileImportExport.js';
import '../../../services/panecomposite/browser/panecomposite.js';
import '../../../services/remote/common/remoteAgentService.js';
import '../../../services/path/common/pathService.js';
import '../../../../platform/actions/common/actions.js';
import '../../../common/contextkeys.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../base/common/keyCodes.js';
import '../../../../platform/action/common/actionCommonCategories.js';
import '../../../../base/common/buffer.js';
define(
			de[1057],
			he([
				1, 0, 4, 12, 54, 19, 9, 163, 50, 3, 220, 22, 44, 63, 5, 87, 554, 42, 10,
				121, 61, 67, 31, 8, 23, 57, 40, 18, 210, 247, 24, 710, 29, 7, 170, 227,
				15, 336, 14, 26, 60, 89, 37, 68, 199, 382, 1944, 142, 143, 165, 11, 100,
				43, 27, 99, 76,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*platform*/,
				w /*path*/,
				E /*resources*/,
				C /*uri*/,
				d /*errorMessage*/,
				m /*actions*/,
				r /*lifecycle*/,
				u /*files*/,
				a /*files*/,
				h /*editor*/,
				c /*quickInput*/,
				n /*instantiation*/,
				g /*host*/,
				p /*fileConstants*/,
				o /*resolverService*/,
				f /*configuration*/,
				b /*clipboardService*/,
				s /*language*/,
				l /*model*/,
				y /*commands*/,
				$ /*contextkey*/,
				v /*network*/,
				S /*dialogs*/,
				I /*notification*/,
				T /*editorService*/,
				P /*uint*/,
				k /*editorCommands*/,
				L /*arrays*/,
				D /*explorerModel*/,
				M /*errors*/,
				N /*dom*/,
				A /*filesConfigurationService*/,
				R /*workingCopyService*/,
				O /*async*/,
				B /*workingCopyFileService*/,
				U /*codicons*/,
				z /*themables*/,
				F /*views*/,
				x /*viewsService*/,
				H /*strings*/,
				q /*uriIdentity*/,
				V /*bulkEditService*/,
				G /*files*/,
				K /*fileImportExport*/,
				J /*panecomposite*/,
				W /*remoteAgentService*/,
				X /*pathService*/,
				Y /*actions*/,
				ie /*contextkeys*/,
				ne /*keybindingsRegistry*/,
				ee /*keyCodes*/,
				_ /*actionCommonCategories*/,
				te /*buffer*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$rXb =
						e.$qXb =
						e.$pXb =
						e.$oXb =
						e.$nXb =
						e.$mXb =
						e.$lXb =
						e.$kXb =
						e.$jXb =
						e.$iXb =
						e.$hXb =
						e.$gXb =
						e.$fXb =
						e.$dXb =
						e.$cXb =
						e.$bXb =
						e.$aXb =
						e.$_Wb =
						e.$$Wb =
						e.$0Wb =
						e.$7Wb =
						e.$6Wb =
						e.$5Wb =
						e.$4Wb =
						e.$3Wb =
						e.$2Wb =
						e.$1Wb =
						e.$ZWb =
						e.$YWb =
						e.$XWb =
						e.$WWb =
						e.$VWb =
						e.$UWb =
							void 0),
					(e.$8Wb = $e),
					(e.$9Wb = ye),
					(e.$eXb = Oe),
					(t = mt(t)),
					(E = mt(E)),
					(e.$UWb = "explorer.newFile"),
					(e.$VWb = t.localize2(6807, "New File...")),
					(e.$WWb = "explorer.newFolder"),
					(e.$XWb = t.localize2(6808, "New Folder...")),
					(e.$YWb = t.localize(6737, null)),
					(e.$ZWb = t.localize(6738, null)),
					(e.$1Wb = t.localize(6739, null)),
					(e.$2Wb = t.localize(6740, null)),
					(e.$3Wb = new $.$5j("fileCopied", !1)),
					(e.$4Wb = "explorer.download"),
					(e.$5Wb = t.localize(6741, null)),
					(e.$6Wb = "explorer.upload"),
					(e.$7Wb = t.localize(6742, null));
				const Q = "explorer.confirmDelete",
					Z = 5e6;
				function se(nt, lt) {
					lt.message === "string" && (lt = lt.message),
						nt.error((0, d.$xj)(lt, !1));
				}
				async function re(nt, lt) {
					nt &&
						(nt.indexOf("/") >= 0 || nt.indexOf("\\") >= 0) &&
						(await lt.refresh());
				}
				async function le(nt, lt, ct, gt, ht, Rt, Nt = !1, jt = !1) {
					let ti;
					Rt
						? (ti = i.$l ? t.localize(6743, null) : t.localize(6744, null))
						: (ti = t.localize(6745, null));
					const kt = E.$wh(ht, (ze) => ze.resource),
						hi = new Set();
					for (const ze of kt)
						for (const Xe of lt.getDirty(ze.resource)) hi.add(Xe);
					let Kt = !0;
					if (hi.size) {
						let ze;
						kt.length > 1
							? (ze = t.localize(6746, null))
							: kt[0].isDirectory
								? hi.size === 1
									? (ze = t.localize(6747, null, kt[0].name))
									: (ze = t.localize(6748, null, kt[0].name, hi.size))
								: (ze = t.localize(6749, null, kt[0].name)),
							(
								await ct.confirm({
									type: "warning",
									message: ze,
									detail: t.localize(6750, null),
									primaryButton: ti,
								})
							).confirmed
								? (Nt = !0)
								: (Kt = !1);
					}
					if (!Kt) return;
					let di;
					const Ye = kt.some((ze) => ze.isDirectory)
						? t.localize(6751, null)
						: kt.length > 1
							? t.localize(6752, null)
							: t.localize(6753, null);
					if (Nt || (Rt && gt.getValue(Q) === !1)) di = { confirmed: !0 };
					else if (Rt) {
						let { message: ze, detail: Xe } = oe(kt);
						(Xe += Xe
							? `
`
							: ""),
							i.$l
								? (Xe +=
										kt.length > 1
											? t.localize(6754, null)
											: t.localize(6755, null))
								: (Xe +=
										kt.length > 1
											? t.localize(6756, null)
											: t.localize(6757, null)),
							(di = await ct.confirm({
								message: ze,
								detail: Xe,
								primaryButton: ti,
								checkbox: { label: t.localize(6758, null) },
							}));
					} else {
						let { message: ze, detail: Xe } = ae(kt);
						(Xe += Xe
							? `
`
							: ""),
							(Xe += Ye),
							(di = await ct.confirm({
								type: "warning",
								message: ze,
								detail: Xe,
								primaryButton: ti,
							}));
					}
					if (
						(di.confirmed &&
							di.checkboxChecked === !0 &&
							(await gt.updateValue(Q, !1)),
						!!di.confirmed)
					)
						try {
							const ze = kt.map(
									(It) =>
										new V.$uzb(It.resource, void 0, {
											recursive: !0,
											folder: It.isDirectory,
											ignoreIfNotExists: jt,
											skipTrashBin: !Rt,
											maxSize: Z,
										}),
								),
								Xe = {
									undoLabel:
										kt.length > 1
											? t.localize(6759, null, kt.length)
											: t.localize(6760, null, kt[0].name),
									progressLabel:
										kt.length > 1
											? t.localize(6761, null, kt.length)
											: t.localize(6762, null, kt[0].name),
								};
							await nt.applyBulkEdit(ze, Xe);
						} catch (ze) {
							let Xe, It, Lt;
							if (
								(Rt
									? ((Xe = i.$l
											? t.localize(6763, null)
											: t.localize(6764, null)),
										(It = Ye),
										(Lt = t.localize(6765, null)))
									: ((Xe = (0, d.$xj)(ze, !1)), (Lt = t.localize(6766, null))),
								(
									await ct.confirm({
										type: "warning",
										message: Xe,
										detail: It,
										primaryButton: Lt,
									})
								).confirmed)
							)
								return (
									Rt && (Rt = !1),
									(Nt = !0),
									(jt = !0),
									le(nt, lt, ct, gt, ht, Rt, Nt, jt)
								);
						}
				}
				function oe(nt) {
					return pe(nt)
						? {
								message: t.localize(6767, null, nt.length),
								detail: (0, S.$JO)(nt.map((lt) => lt.resource)),
							}
						: nt.length > 1
							? nt[0].isDirectory
								? {
										message: t.localize(6768, null, nt.length),
										detail: (0, S.$JO)(nt.map((lt) => lt.resource)),
									}
								: {
										message: t.localize(6769, null, nt.length),
										detail: (0, S.$JO)(nt.map((lt) => lt.resource)),
									}
							: nt[0].isDirectory && !nt[0].isSymbolicLink
								? { message: t.localize(6770, null, nt[0].name), detail: "" }
								: { message: t.localize(6771, null, nt[0].name), detail: "" };
				}
				function ae(nt) {
					return pe(nt)
						? {
								message: t.localize(6772, null, nt.length),
								detail: (0, S.$JO)(nt.map((lt) => lt.resource)),
							}
						: nt.length > 1
							? nt[0].isDirectory
								? {
										message: t.localize(6773, null, nt.length),
										detail: (0, S.$JO)(nt.map((lt) => lt.resource)),
									}
								: {
										message: t.localize(6774, null, nt.length),
										detail: (0, S.$JO)(nt.map((lt) => lt.resource)),
									}
							: nt[0].isDirectory
								? { message: t.localize(6775, null, nt[0].name), detail: "" }
								: { message: t.localize(6776, null, nt[0].name), detail: "" };
				}
				function pe(nt) {
					const lt = nt.find((gt) => gt.isDirectory),
						ct = nt.find((gt) => !gt.isDirectory);
					return !!lt && !!ct;
				}
				async function $e(nt, lt, ct, gt, ht, Rt) {
					let Nt =
							typeof ht.resource == "string" ? ht.resource : E.$jh(ht.resource),
						jt = E.$nh(gt.resource, Nt);
					if (!(Rt === "disabled" && !(await ue(lt, ct, jt)))) {
						for (; !ht.allowOverwrite && nt.findClosest(jt); )
							Rt !== "disabled" && (Nt = ye(Nt, !!ht.isDirectory, Rt)),
								(jt = E.$nh(gt.resource, Nt));
						return jt;
					}
				}
				function ye(nt, lt, ct) {
					if (ct === "simple") {
						let Kt = nt,
							di = "";
						lt || ((di = (0, w.$tc)(nt)), (Kt = (0, w.$sc)(nt, di)));
						const Ye = /^(.+ copy)( \d+)?$/;
						return Ye.test(Kt)
							? Kt.replace(Ye, (ze, Xe, It) => {
									const Lt = It ? parseInt(It) : 1;
									return Lt === 0
										? `${Xe}`
										: Lt < P.Constants.MAX_SAFE_SMALL_INTEGER
											? `${Xe} ${Lt + 1}`
											: `${Xe}${It} copy`;
								}) + di
							: `${Kt} copy${di}`;
					}
					const gt = "[\\.\\-_]",
						ht = P.Constants.MAX_SAFE_SMALL_INTEGER,
						Rt = RegExp("(.*" + gt + ")(\\d+)(\\..*)$");
					if (!lt && nt.match(Rt))
						return nt.replace(Rt, (Kt, di, Ye, ze) => {
							const Xe = parseInt(Ye);
							return Xe < ht
								? di + String(Xe + 1).padStart(Ye.length, "0") + ze
								: `${di}${Ye}.1${ze}`;
						});
					const Nt = RegExp("(\\d+)(" + gt + ".*)(\\..*)$");
					if (!lt && nt.match(Nt))
						return nt.replace(Nt, (Kt, di, Ye, ze) => {
							const Xe = parseInt(di);
							return Xe < ht
								? String(Xe + 1).padStart(di.length, "0") + Ye + ze
								: `${di}${Ye}.1${ze}`;
						});
					const jt = RegExp("(\\d+)(\\..*)$");
					if (!lt && nt.match(jt))
						return nt.replace(jt, (Kt, di, Ye) => {
							const ze = parseInt(di);
							return ze < ht
								? String(ze + 1).padStart(di.length, "0") + Ye
								: `${di}.1${Ye}`;
						});
					const ti = nt.lastIndexOf(".");
					if (!lt && ti >= 0) return `${nt.substr(0, ti)}.1${nt.substr(ti)}`;
					const kt = RegExp("(\\d+)$");
					if (!lt && ti === -1 && nt.match(kt))
						return nt.replace(kt, (Kt, di) => {
							const Ye = parseInt(di);
							return Ye < ht
								? String(Ye + 1).padStart(di.length, "0")
								: `${di}.1`;
						});
					const hi = RegExp("(.*)(\\d*)$");
					return !lt && ti === -1 && nt.match(hi)
						? nt.replace(hi, (Kt, di, Ye) => {
								let ze = parseInt(Ye);
								return (
									isNaN(ze) && (ze = 0),
									ze < ht
										? di + String(ze + 1).padStart(Ye.length, "0")
										: `${di}${Ye}.1`
								);
							})
						: lt && nt.match(/(\d+)$/)
							? nt.replace(/(\d+)$/, (Kt, ...di) => {
									const Ye = parseInt(di[0]);
									return Ye < ht
										? String(Ye + 1).padStart(di[0].length, "0")
										: `${di[0]}.1`;
								})
							: lt && nt.match(/^(\d+)/)
								? nt.replace(/^(\d+)(.*)$/, (Kt, ...di) => {
										const Ye = parseInt(di[0]);
										return Ye < ht
											? String(Ye + 1).padStart(di[0].length, "0") + di[1]
											: `${di[0]}${di[1]}.1`;
									})
								: `${nt}.1`;
				}
				async function ue(nt, lt, ct) {
					if (!(await nt.exists(ct))) return !0;
					const { confirmed: ht } = await lt.confirm({
						type: I.Severity.Warning,
						message: t.localize(6777, null, (0, w.$sc)(ct.path)),
						primaryButton: t.localize(6778, null),
					});
					return ht;
				}
				class fe extends Y.$3X {
					static {
						this.ID = "workbench.files.action.compareFileWith";
					}
					static {
						this.LABEL = t.localize2(6809, "Compare Active File With...");
					}
					constructor() {
						super({
							id: fe.ID,
							title: fe.LABEL,
							f1: !0,
							category: _.$ck.File,
							precondition: ie.$TPb,
							metadata: {
								description: t.localize2(
									6810,
									"Opens a picker to select a file to diff with the active editor.",
								),
							},
						});
					}
					async run(lt) {
						const ct = lt.get(T.$IY),
							gt = lt.get(o.$MO),
							ht = lt.get(c.$DJ),
							Rt = ct.activeEditor,
							Nt = h.$A1.getOriginalUri(Rt);
						if (Nt && gt.canHandleResource(Nt)) {
							const jt = await ht.quickAccess.pick("", {
								itemActivation: c.ItemActivation.SECOND,
							});
							if (jt?.length === 1) {
								const ti = jt[0].resource;
								C.URI.isUri(ti) &&
									gt.canHandleResource(ti) &&
									ct.openEditor({
										original: { resource: Nt },
										modified: { resource: ti },
										options: { pinned: !0 },
									});
							}
						}
					}
				}
				e.$0Wb = fe;
				class me extends Y.$3X {
					static {
						this.ID = "workbench.action.toggleAutoSave";
					}
					constructor() {
						super({
							id: me.ID,
							title: t.localize2(6811, "Toggle Auto Save"),
							f1: !0,
							category: _.$ck.File,
							metadata: {
								description: t.localize2(
									6812,
									"Toggle the ability to save files automatically after typing",
								),
							},
						});
					}
					run(lt) {
						return lt.get(A.$_Y).toggleAutoSave();
					}
				}
				e.$$Wb = me;
				let ve = class extends m.$rj {
					constructor(lt, ct, gt, ht, Rt) {
						super(lt, ct),
							(this.b = gt),
							(this.c = ht),
							(this.f = Rt),
							(this.a = this.f.hasDirty),
							(this.enabled = this.a),
							this.h();
					}
					h() {
						this.D(this.f.onDidChangeDirty((lt) => this.r(lt)));
					}
					r(lt) {
						const ct = lt.isDirty() || this.f.hasDirty;
						this.a !== ct && ((this.enabled = ct), (this.a = this.enabled));
					}
					async run(lt) {
						try {
							await this.g(lt);
						} catch (ct) {
							se(this.c, ct);
						}
					}
				};
				ve = Ne([j(2, y.$ek), j(3, I.$4N), j(4, R.$gY)], ve);
				class ge extends ve {
					static {
						this.ID = "workbench.files.action.saveAllInGroup";
					}
					static {
						this.LABEL = t.localize(6779, null);
					}
					get class() {
						return "explorer-action " + z.ThemeIcon.asClassName(U.$ak.saveAll);
					}
					g(lt) {
						return this.b.executeCommand(p.$bVb, {}, lt);
					}
				}
				e.$_Wb = ge;
				let be = class extends m.$rj {
					static {
						this.ID = "workbench.files.action.closeGroup";
					}
					static {
						this.LABEL = t.localize(6780, null);
					}
					constructor(lt, ct, gt) {
						super(lt, ct, z.ThemeIcon.asClassName(U.$ak.closeAll)),
							(this.a = gt);
					}
					run(lt) {
						return this.a.executeCommand(k.$WVb, {}, lt);
					}
				};
				(e.$aXb = be), (e.$aXb = be = Ne([j(2, y.$ek)], be));
				class Ce extends Y.$3X {
					static {
						this.ID = "workbench.files.action.focusFilesExplorer";
					}
					static {
						this.LABEL = t.localize2(6813, "Focus on Files Explorer");
					}
					constructor() {
						super({
							id: Ce.ID,
							title: Ce.LABEL,
							f1: !0,
							category: _.$ck.File,
							metadata: {
								description: t.localize2(
									6814,
									"Moves focus to the file explorer view container.",
								),
							},
						});
					}
					async run(lt) {
						await lt
							.get(J.$6Sb)
							.openPaneComposite(u.$vUb, F.ViewContainerLocation.Sidebar, !0);
					}
				}
				e.$bXb = Ce;
				class Le extends Y.$3X {
					static {
						this.ID = "workbench.files.action.showActiveFileInExplorer";
					}
					static {
						this.LABEL = t.localize2(
							6815,
							"Reveal Active File in Explorer View",
						);
					}
					constructor() {
						super({
							id: Le.ID,
							title: Le.LABEL,
							f1: !0,
							category: _.$ck.File,
							metadata: {
								description: t.localize2(
									6816,
									"Reveals and selects the active file within the explorer view.",
								),
							},
						});
					}
					async run(lt) {
						const ct = lt.get(y.$ek),
							gt = lt.get(T.$IY),
							ht = h.$A1.getOriginalUri(gt.activeEditor, {
								supportSideBySide: h.SideBySideEditor.PRIMARY,
							});
						ht && ct.executeCommand(p.$VUb, ht);
					}
				}
				e.$cXb = Le;
				class Fe extends Y.$3X {
					static {
						this.ID = "workbench.action.files.showOpenedFileInNewWindow";
					}
					static {
						this.LABEL = t.localize2(
							6817,
							"Open Active File in New Empty Workspace",
						);
					}
					constructor() {
						super({
							id: Fe.ID,
							title: Fe.LABEL,
							f1: !0,
							category: _.$ck.File,
							precondition: ie.$APb,
							metadata: {
								description: t.localize2(
									6818,
									"Opens the active file in a new window with no folders open.",
								),
							},
						});
					}
					async run(lt) {
						const ct = lt.get(T.$IY),
							gt = lt.get(g.$asb),
							ht = lt.get(S.$GO),
							Rt = lt.get(a.$ll),
							Nt = h.$A1.getOriginalUri(ct.activeEditor, {
								supportSideBySide: h.SideBySideEditor.PRIMARY,
							});
						Nt &&
							(Rt.hasProvider(Nt)
								? gt.openWindow([{ fileUri: Nt }], { forceNewWindow: !0 })
								: ht.error(t.localize(6781, null)));
					}
				}
				e.$dXb = Fe;
				function Oe(nt, lt, ct, gt) {
					if (((ct = He(ct)), !ct || ct.length === 0 || /^\s+$/.test(ct)))
						return {
							content: t.localize(6782, null),
							severity: I.Severity.Error,
						};
					if (ct[0] === "/" || ct[0] === "\\")
						return {
							content: t.localize(6783, null),
							severity: I.Severity.Error,
						};
					const ht = (0, L.$Lb)(ct.split(/[\\/]/)),
						Rt = lt.parent;
					if (ct !== lt.name) {
						const Nt = Rt?.getChild(ct);
						if (Nt && Nt !== lt)
							return {
								content: t.localize(6784, null, ct),
								severity: I.Severity.Error,
							};
					}
					if (ht.some((Nt) => !nt.hasValidBasename(lt.resource, gt, Nt))) {
						const Nt = ct.replace(/\*/g, "\\*");
						return {
							content: t.localize(6785, null, xe(Nt)),
							severity: I.Severity.Error,
						};
					}
					return ht.some((Nt) => /^\s|\s$/.test(Nt))
						? { content: t.localize(6786, null), severity: I.Severity.Warning }
						: null;
				}
				function xe(nt) {
					return nt?.length > 255 ? `${nt.substr(0, 255)}...` : nt;
				}
				function He(nt) {
					return (
						nt &&
						((nt = (0, H.$sf)(nt, "	")),
						(nt = (0, H.$uf)(nt, "/")),
						(nt = (0, H.$uf)(nt, "\\")),
						nt)
					);
				}
				class Ke extends Y.$3X {
					static {
						this.ID = "workbench.files.action.compareNewUntitledTextFiles";
					}
					static {
						this.LABEL = t.localize2(6819, "Compare New Untitled Text Files");
					}
					constructor() {
						super({
							id: Ke.ID,
							title: Ke.LABEL,
							f1: !0,
							category: _.$ck.File,
							metadata: {
								description: t.localize2(
									6820,
									"Opens a new diff editor with two untitled files.",
								),
							},
						});
					}
					async run(lt) {
						await lt
							.get(T.$IY)
							.openEditor({
								original: { resource: void 0 },
								modified: { resource: void 0 },
								options: { pinned: !0 },
							});
					}
				}
				e.$fXb = Ke;
				class Je extends Y.$3X {
					static {
						this.ID = "workbench.files.action.compareWithClipboard";
					}
					static {
						this.LABEL = t.localize2(
							6821,
							"Compare Active File with Clipboard",
						);
					}
					static {
						this.b = 0;
					}
					constructor() {
						super({
							id: Je.ID,
							title: Je.LABEL,
							f1: !0,
							category: _.$ck.File,
							keybinding: {
								primary: (0, ee.$os)(ee.$ps, ee.KeyCode.KeyC),
								mac: { primary: (0, ee.$os)(ee.$qs, ee.KeyCode.KeyC) },
								weight: ne.KeybindingWeight.WorkbenchContrib,
							},
							metadata: {
								description: t.localize2(
									6822,
									"Opens a new diff editor to compare the active file with the contents of the clipboard.",
								),
							},
						});
					}
					async run(lt) {
						const ct = lt.get(T.$IY),
							gt = lt.get(n.$Li),
							ht = lt.get(o.$MO),
							Rt = lt.get(a.$ll),
							Nt = h.$A1.getOriginalUri(ct.activeEditor, {
								supportSideBySide: h.SideBySideEditor.PRIMARY,
							}),
							jt = `clipboardCompare${Je.b++}`;
						if (
							Nt &&
							(Rt.hasProvider(Nt) || Nt.scheme === v.Schemas.untitled)
						) {
							if (!this.a) {
								const hi = gt.createInstance(Te);
								this.a = ht.registerTextModelContentProvider(jt, hi);
							}
							const ti = E.$kh(Nt),
								kt = t.localize(6787, null, ti);
							await ct
								.openEditor({
									original: { resource: Nt.with({ scheme: jt }) },
									modified: { resource: Nt },
									label: kt,
									options: { pinned: !0 },
								})
								.finally(() => {
									(0, r.$Vc)(this.a), (this.a = void 0);
								});
						}
					}
					dispose() {
						(0, r.$Vc)(this.a), (this.a = void 0);
					}
				}
				e.$gXb = Je;
				let Te = class {
					constructor(lt, ct, gt) {
						(this.a = lt), (this.b = ct), (this.c = gt);
					}
					async provideTextContent(lt) {
						const ct = await this.a.readText();
						return this.c.createModel(
							ct,
							this.b.createByFilepathOrFirstLine(lt),
							lt,
						);
					}
				};
				Te = Ne([j(0, b.$Vxb), j(1, s.$nM), j(2, l.$QO)], Te);
				function Ee(nt, lt, ct) {
					nt.prompt(I.Severity.Error, (0, d.$xj)(lt, !1), [
						{ label: t.localize(6788, null), run: () => ct() },
					]);
				}
				async function Ie(nt, lt) {
					const ct = nt.get(G.$LWb),
						gt = nt.get(a.$ll),
						ht = nt.get(f.$gj),
						Rt = nt.get(A.$_Y),
						Nt = nt.get(T.$IY),
						jt = nt.get(x.$HMb),
						ti = nt.get(I.$4N),
						kt = nt.get(W.$$m),
						hi = nt.get(y.$ek),
						Kt = nt.get(X.$I8),
						di = !jt.isViewVisible(u.$wUb),
						Ye = await jt.openView(u.$wUb, !0);
					if ((di && (await (0, O.$Nh)(500)), !Ye)) {
						if (lt) throw new Error("Open a folder or workspace first.");
						return hi.executeCommand(p.$oVb);
					}
					const ze = ct.getContext(!1),
						Xe = ze.length > 0 ? ze[0] : void 0;
					let It;
					if (
						(Xe
							? (It = Xe.isDirectory ? Xe : Xe.parent || ct.roots[0])
							: (It = ct.roots[0]),
						It.isReadonly)
					)
						throw new Error("Parent folder is readonly.");
					const Lt = new D.$KWb(gt, ht, Rt, It, lt);
					It.addChild(Lt);
					const xt = async (Bt) => {
							try {
								const Gt = E.$nh(It.resource, Bt);
								Bt.endsWith("/") && (lt = !0),
									await ct.applyBulkEdit(
										[new V.$uzb(void 0, Gt, { folder: lt })],
										{
											undoLabel: t.localize(6789, null, Bt),
											progressLabel: t.localize(6790, null, Bt),
											confirmBeforeUndo: !0,
										},
									),
									await re(Bt, ct),
									lt
										? await ct.select(Gt, !0)
										: await Nt.openEditor({
												resource: Gt,
												options: { pinned: !0 },
											});
							} catch (Gt) {
								Ee(ti, Gt, () => xt(Bt));
							}
						},
						Vt = (await kt.getEnvironment())?.os ?? i.OS;
					await ct.setEditable(Lt, {
						validationMessage: (Bt) => Oe(Kt, Lt, Bt, Vt),
						onFinish: async (Bt, Gt) => {
							It.removeChild(Lt), await ct.setEditable(Lt, null), Gt && xt(Bt);
						},
					});
				}
				y.$fk.registerCommand({
					id: e.$UWb,
					handler: async (nt) => {
						await Ie(nt, !1);
					},
				}),
					y.$fk.registerCommand({
						id: e.$WWb,
						handler: async (nt) => {
							await Ie(nt, !0);
						},
					});
				const Be = async (nt) => {
					const lt = nt.get(G.$LWb),
						ct = nt.get(I.$4N),
						gt = nt.get(W.$$m),
						ht = nt.get(X.$I8),
						Rt = nt.get(f.$gj),
						Nt = lt.getContext(!1),
						jt = Nt.length > 0 ? Nt[0] : void 0;
					if (!jt) return;
					const ti = (await gt.getEnvironment())?.os ?? i.OS;
					await lt.setEditable(jt, {
						validationMessage: (kt) => Oe(ht, jt, kt, ti),
						onFinish: async (kt, hi) => {
							if (hi) {
								const Kt = jt.parent.resource,
									di = E.$nh(Kt, kt);
								if (jt.resource.toString() !== di.toString())
									try {
										await lt.applyBulkEdit([new V.$uzb(jt.resource, di)], {
											confirmBeforeUndo:
												Rt.getValue().explorer.confirmUndo ===
												u.UndoConfirmLevel.Verbose,
											undoLabel: t.localize(6791, null, jt.name, kt),
											progressLabel: t.localize(6792, null, jt.name, kt),
										}),
											await re(kt, lt);
									} catch (Ye) {
										ct.error(Ye);
									}
							}
							await lt.setEditable(jt, null);
						},
					});
				};
				e.$hXb = Be;
				const Se = async (nt) => {
					const ct = nt
						.get(G.$LWb)
						.getContext(!0)
						.filter((gt) => !gt.isRoot);
					ct.length &&
						(await le(
							nt.get(G.$LWb),
							nt.get(B.$iZ),
							nt.get(S.$GO),
							nt.get(f.$gj),
							ct,
							!0,
						));
				};
				e.$iXb = Se;
				const ke = async (nt) => {
					const ct = nt
						.get(G.$LWb)
						.getContext(!0)
						.filter((gt) => !gt.isRoot);
					ct.length &&
						(await le(
							nt.get(G.$LWb),
							nt.get(B.$iZ),
							nt.get(S.$GO),
							nt.get(f.$gj),
							ct,
							!1,
						));
				};
				e.$jXb = ke;
				let Ue = !1;
				const qe = async (nt) => {
					const lt = nt.get(G.$LWb),
						ct = lt.getContext(!0);
					ct.length > 0 && (await lt.setToCopy(ct, !1), (Ue = !1));
				};
				e.$kXb = qe;
				const Ae = async (nt) => {
					const lt = nt.get(G.$LWb),
						ct = lt.getContext(!0);
					ct.length > 0 && (await lt.setToCopy(ct, !0), (Ue = !0));
				};
				e.$lXb = Ae;
				const Me = async (nt) => {
					const lt = nt.get(G.$LWb),
						ct = nt.get(I.$4N),
						gt = nt.get(n.$Li),
						ht = lt.getContext(!0),
						Rt = ht.length ? ht : lt.roots,
						Nt = gt.createInstance(K.$RWb);
					try {
						await Nt.download(Rt);
					} catch (jt) {
						throw (ct.error(jt), jt);
					}
				};
				y.$fk.registerCommand({ id: e.$4Wb, handler: Me });
				const De = async (nt) => {
					const lt = nt.get(G.$LWb),
						ct = nt.get(I.$4N),
						gt = nt.get(n.$Li),
						ht = lt.getContext(!1),
						Rt = ht.length ? ht[0] : lt.roots[0];
					try {
						const Nt = await (0, N.$zhb)();
						Nt && (await gt.createInstance(K.$PWb).upload(Rt, Nt));
					} catch (Nt) {
						throw (ct.error(Nt), Nt);
					}
				};
				y.$fk.registerCommand({ id: e.$6Wb, handler: De });
				const Re = async (nt, lt) => {
					const ct = nt.get(b.$Vxb),
						gt = nt.get(G.$LWb),
						ht = nt.get(a.$ll),
						Rt = nt.get(I.$4N),
						Nt = nt.get(T.$IY),
						jt = nt.get(f.$gj),
						ti = nt.get(q.$Vl),
						kt = nt.get(S.$GO),
						hi = nt.get(g.$asb),
						Kt = gt.getContext(!1),
						Ye =
							lt && lt.length > 0 && jt.getValue("explorer.confirmPasteNative"),
						ze = await je(lt, ct, hi);
					if (Ye && ze.files.length >= 1) {
						const Vt =
								ze.files.length > 1
									? t.localize(6793, null, ze.files.length)
									: t.localize(
											6794,
											null,
											(0, w.$sc)(
												ze.type === "paths"
													? ze.files[0].fsPath
													: ze.files[0].name,
											),
										),
							Bt =
								ze.files.length > 1
									? (0, S.$JO)(
											ze.files.map((Mt) => {
												if (C.URI.isUri(Mt)) return Mt.fsPath;
												if (ze.type === "paths") {
													const Ut = hi.getPathForFile(Mt);
													if (Ut) return Ut;
												}
												return Mt.name;
											}),
										)
									: void 0,
							Gt = await kt.confirm({
								message: Vt,
								detail: Bt,
								checkbox: { label: t.localize(6795, null) },
								primaryButton: t.localize(6796, null),
							});
						if (!Gt.confirmed) return;
						Gt.checkboxChecked === !0 &&
							(await jt.updateValue("explorer.confirmPasteNative", !1));
					}
					const Xe = Kt.length ? Kt[0] : gt.roots[0],
						It = jt.getValue().explorer.incrementalNaming;
					if (gt.getEditable()) return;
					try {
						let Vt = [];
						if (ze.type === "paths") {
							const Bt = (0, L.$Lb)(
								await Promise.all(
									ze.files.map(async (Gt) => {
										if (
											Xe.resource.toString() !== Gt.toString() &&
											E.$hh(Xe.resource, Gt)
										)
											throw new Error(t.localize(6797, null));
										const Mt = await ht.stat(Gt);
										let Ut;
										ti.extUri.isEqual(Xe.resource, Gt)
											? (Ut = Xe.parent)
											: (Ut = Xe.isDirectory ? Xe : Xe.parent);
										const ei = await $e(
											gt,
											ht,
											kt,
											Ut,
											{
												resource: Gt,
												isDirectory: Mt.isDirectory,
												allowOverwrite: Ue || It === "disabled",
											},
											It,
										);
										if (ei) return { source: Gt, target: ei };
									}),
								),
							);
							if (Bt.length >= 1)
								if (Ue) {
									const Gt = Bt.map(
											(Ut) =>
												new V.$uzb(Ut.source, Ut.target, {
													overwrite: It === "disabled",
												}),
										),
										Mt = {
											confirmBeforeUndo:
												jt.getValue().explorer.confirmUndo ===
												u.UndoConfirmLevel.Verbose,
											progressLabel:
												Bt.length > 1
													? t.localize(6798, null, Bt.length)
													: t.localize(6799, null, E.$jh(Bt[0].target)),
											undoLabel:
												Bt.length > 1
													? t.localize(6800, null, Bt.length)
													: t.localize(6801, null, E.$jh(Bt[0].target)),
										};
									await gt.applyBulkEdit(Gt, Mt);
								} else {
									const Gt = Bt.map(
										(Mt) =>
											new V.$uzb(Mt.source, Mt.target, {
												copy: !0,
												overwrite: It === "disabled",
											}),
									);
									await xt(
										Bt.map((Mt) => Mt.target),
										Gt,
									);
								}
							Vt = Bt.map((Gt) => Gt.target);
						} else {
							const Bt = (0, L.$Lb)(
								await Promise.all(
									ze.files.map(async (Gt) => {
										const Mt = Xe.isDirectory ? Xe : Xe.parent,
											Ut = await $e(
												gt,
												ht,
												kt,
												Mt,
												{
													resource: Gt.name,
													isDirectory: !1,
													allowOverwrite: Ue || It === "disabled",
												},
												It,
											);
										if (Ut)
											return {
												target: Ut,
												edit: new V.$uzb(void 0, Ut, {
													overwrite: It === "disabled",
													contents: (async () =>
														te.$Te.wrap(
															new Uint8Array(await Gt.arrayBuffer()),
														))(),
												}),
											};
									}),
								),
							);
							await xt(
								Bt.map((Gt) => Gt.target),
								Bt.map((Gt) => Gt.edit),
							),
								(Vt = Bt.map((Gt) => Gt.target));
						}
						if (Vt.length) {
							const Bt = Vt[0];
							if ((await gt.select(Bt), Vt.length === 1)) {
								const Gt = gt.findClosest(Bt);
								Gt &&
									!Gt.isDirectory &&
									(await Nt.openEditor({
										resource: Gt.resource,
										options: { pinned: !0, preserveFocus: !0 },
									}));
							}
						}
					} catch (Vt) {
						se(Rt, new Error(t.localize(6802, null, (0, M.$bb)(Vt))));
					} finally {
						Ue && (await gt.setToCopy([], !1), (Ue = !1));
					}
					async function xt(Vt, Bt) {
						const Gt = jt.getValue().explorer.confirmUndo,
							Mt = {
								confirmBeforeUndo:
									Gt === u.UndoConfirmLevel.Default ||
									Gt === u.UndoConfirmLevel.Verbose,
								progressLabel:
									Vt.length > 1
										? t.localize(6803, null, Vt.length)
										: t.localize(6804, null, E.$jh(Vt[0])),
								undoLabel:
									Vt.length > 1
										? t.localize(6805, null, Vt.length)
										: t.localize(6806, null, E.$jh(Vt[0])),
							};
						await gt.applyBulkEdit(Bt, Mt);
					}
				};
				e.$mXb = Re;
				async function je(nt, lt, ct) {
					if (nt && nt.length > 0) {
						const gt = [...nt]
							.map((ht) => ct.getPathForFile(ht))
							.filter((ht) => !!ht && (0, w.$nc)(ht))
							.map((ht) => C.URI.file(ht));
						return gt.length
							? { type: "paths", files: gt }
							: {
									type: "data",
									files: [...nt].filter((ht) => !ct.getPathForFile(ht)),
								};
					} else
						return {
							type: "paths",
							files: E.$wh(await lt.readResources(), (gt) => gt),
						};
				}
				const Ve = async (nt) => {
					const lt = nt.get(T.$IY),
						gt = nt.get(G.$LWb).getContext(!0);
					await lt.openEditors(
						gt
							.filter((ht) => !ht.isDirectory)
							.map((ht) => ({
								resource: ht.resource,
								options: { preserveFocus: !0 },
							})),
					);
				};
				e.$nXb = Ve;
				class Ze extends Y.$3X {
					constructor(lt, ct, gt) {
						super({
							id: lt,
							title: ct,
							f1: !0,
							category: _.$ck.File,
							precondition: ie.$QPb,
						}),
							(this.a = gt);
					}
					async run(lt) {
						const ct = lt.get(T.$IY),
							gt = lt.get(A.$_Y),
							ht = h.$A1.getOriginalUri(ct.activeEditor, {
								supportSideBySide: h.SideBySideEditor.PRIMARY,
							});
						ht && (await gt.updateReadonly(ht, this.a));
					}
				}
				class et extends Ze {
					static {
						this.ID = "workbench.action.files.setActiveEditorReadonlyInSession";
					}
					static {
						this.LABEL = t.localize2(
							6823,
							"Set Active Editor Read-only in Session",
						);
					}
					constructor() {
						super(et.ID, et.LABEL, !0);
					}
				}
				e.$oXb = et;
				class rt extends Ze {
					static {
						this.ID =
							"workbench.action.files.setActiveEditorWriteableInSession";
					}
					static {
						this.LABEL = t.localize2(
							6824,
							"Set Active Editor Writeable in Session",
						);
					}
					constructor() {
						super(rt.ID, rt.LABEL, !1);
					}
				}
				e.$pXb = rt;
				class ft extends Ze {
					static {
						this.ID =
							"workbench.action.files.toggleActiveEditorReadonlyInSession";
					}
					static {
						this.LABEL = t.localize2(
							6825,
							"Toggle Active Editor Read-only in Session",
						);
					}
					constructor() {
						super(ft.ID, ft.LABEL, "toggle");
					}
				}
				e.$qXb = ft;
				class bt extends Ze {
					static {
						this.ID =
							"workbench.action.files.resetActiveEditorReadonlyInSession";
					}
					static {
						this.LABEL = t.localize2(
							6826,
							"Reset Active Editor Read-only in Session",
						);
					}
					constructor() {
						super(bt.ID, bt.LABEL, "reset");
					}
				}
				e.$rXb = bt;
			},
		)

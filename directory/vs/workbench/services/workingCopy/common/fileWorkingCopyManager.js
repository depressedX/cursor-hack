import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/event.js';
import '../../../../base/common/async.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/uri.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/files/common/files.js';
import '../../../common/editor.js';
import '../../environment/common/environmentService.js';
import '../../path/common/pathService.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import './storedFileWorkingCopy.js';
import './storedFileWorkingCopyManager.js';
import './untitledFileWorkingCopy.js';
import './untitledFileWorkingCopyManager.js';
import './workingCopyFileService.js';
import './fileWorkingCopy.js';
import '../../../../platform/label/common/label.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/notification/common/notification.js';
import '../../editor/common/editorService.js';
import '../../files/common/elevatedFileService.js';
import '../../filesConfiguration/common/filesConfigurationService.js';
import '../../lifecycle/common/lifecycle.js';
import './workingCopyBackup.js';
import './workingCopyEditorService.js';
import './workingCopyService.js';
import '../../../../base/common/network.js';
import '../../decorations/common/decorations.js';
import '../../../../base/common/codicons.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/progress/common/progress.js';
define(
			de[3911],
			he([
				1, 0, 4, 6, 15, 33, 3, 19, 9, 57, 22, 44, 78, 165, 68, 1052, 3910, 1925,
				3896, 336, 848, 73, 34, 40, 18, 700, 170, 52, 335, 403, 227, 23, 472,
				14, 51, 84,
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
			) {
				"use strict";
				var O;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Mpc = void 0);
				let B = class extends C.$1c {
					static {
						O = this;
					}
					static {
						this.a = a.$p1.registerSource(
							"fileWorkingCopyCreate.source",
							(0, t.localize)(13117, null),
						);
					}
					static {
						this.b = a.$p1.registerSource(
							"fileWorkingCopyReplace.source",
							(0, t.localize)(13118, null),
						);
					}
					constructor(
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
						ee,
						_,
						te,
						Q,
						Z,
						se,
						re,
						le,
					) {
						super(),
							(this.c = z),
							(this.f = F),
							(this.g = x),
							(this.h = H),
							(this.j = G),
							(this.m = K),
							(this.n = W),
							(this.q = X),
							(this.r = Y),
							(this.s = Q),
							(this.t = Z),
							(this.u = se),
							(this.w = re),
							(this.stored = this.D(
								new p.$Jpc(
									this.c,
									this.f,
									H,
									q,
									V,
									G,
									K,
									J,
									W,
									Y,
									ie,
									ne,
									ee,
									_,
									te,
									le,
								),
							)),
							(this.untitled = this.D(
								new f.$Lpc(
									this.c,
									this.g,
									async (oe, ae) =>
										!!(await this.saveAs(oe.resource, void 0, ae)),
									H,
									V,
									G,
									J,
									ie,
								),
							)),
							(this.onDidCreate = i.Event.any(
								this.stored.onDidCreate,
								this.untitled.onDidCreate,
							)),
							this.y();
					}
					y() {
						const z = this.D(
							new (class extends C.$1c {
								constructor(F) {
									super(),
										(this.b = F),
										(this.label = (0, t.localize)(13119, null)),
										(this.a = this.D(new i.$re())),
										(this.onDidChange = this.a.event),
										this.c();
								}
								c() {
									this.D(
										this.b.onDidResolve((F) => {
											(F.isReadonly() ||
												F.hasState(g.StoredFileWorkingCopyState.ORPHAN)) &&
												this.a.fire([F.resource]);
										}),
									),
										this.D(this.b.onDidRemove((F) => this.a.fire([F]))),
										this.D(
											this.b.onDidChangeReadonly((F) =>
												this.a.fire([F.resource]),
											),
										),
										this.D(
											this.b.onDidChangeOrphaned((F) =>
												this.a.fire([F.resource]),
											),
										);
								}
								provideDecorations(F) {
									const x = this.b.get(F);
									if (!x || x.isDisposed()) return;
									const H = x.isReadonly(),
										q = x.hasState(g.StoredFileWorkingCopyState.ORPHAN);
									if (H && q)
										return {
											color: A.$TS,
											letter: N.$ak.lockSmall,
											strikethrough: !0,
											tooltip: (0, t.localize)(13120, null),
										};
									if (H)
										return {
											letter: N.$ak.lockSmall,
											tooltip: (0, t.localize)(13121, null),
										};
									if (q)
										return {
											color: A.$TS,
											strikethrough: !0,
											tooltip: (0, t.localize)(13122, null),
										};
								}
							})(this.stored),
						);
						this.D(this.w.registerDecorationsProvider(z));
					}
					get workingCopies() {
						return [
							...this.stored.workingCopies,
							...this.untitled.workingCopies,
						];
					}
					get(z) {
						return this.stored.get(z) ?? this.untitled.get(z);
					}
					resolve(z, F) {
						return m.URI.isUri(z)
							? z.scheme === D.Schemas.untitled
								? this.untitled.resolve({ untitledResource: z })
								: this.stored.resolve(z, F)
							: this.untitled.resolve(z);
					}
					async saveAs(z, F, x) {
						if (!F) {
							const H = this.get(z);
							H instanceof o.$Kpc && H.hasAssociatedFilePath
								? (F = await this.I(z))
								: (F = await this.q.pickFileToSave(
										await this.I(x?.suggestedTarget ?? z),
										x?.availableFileSystems,
									));
						}
						if (F) {
							if (this.r.isReadonly(F))
								if (await this.H(F)) this.r.updateReadonly(F, !1);
								else return;
							return this.h.hasProvider(z) && (0, d.$gh)(z, F)
								? this.z(z, { ...x, force: !0 })
								: this.h.hasProvider(z) &&
										this.n.extUri.isEqual(z, F) &&
										(await this.h.exists(z))
									? (await this.m.move(
											[{ file: { source: z, target: F } }],
											E.CancellationToken.None,
										),
										(await this.z(z, x)) ?? (await this.z(F, x)))
									: this.C(z, F, x);
						}
					}
					async z(z, F) {
						const x = this.stored.get(z);
						if (x && (await x.save(F))) return x;
					}
					async C(z, F, x) {
						let H;
						const q = this.get(z);
						q?.isResolved()
							? (H = await q.model.snapshot(
									s.SnapshotContext.Save,
									E.CancellationToken.None,
								))
							: (H = (await this.h.readFileStream(z)).value);
						const { targetFileExists: V, targetStoredFileWorkingCopy: G } =
							await this.F(z, F);
						if (
							!(
								(q instanceof o.$Kpc &&
									q.hasAssociatedFilePath &&
									V &&
									this.n.extUri.isEqual(
										F,
										(0, d.$xh)(
											q.resource,
											this.t.remoteAuthority,
											this.s.defaultUriScheme,
										),
									) &&
									!(await this.G(F))) ||
								(await G.model?.update(H, E.CancellationToken.None),
								x?.source || (x = { ...x, source: V ? O.b : O.a }),
								!(await G.save({ ...x, from: z, force: !0 })))
							)
						) {
							try {
								await q?.revert();
							} catch (J) {
								this.j.error(J);
							}
							return G;
						}
					}
					async F(z, F) {
						let x = !1,
							H = this.stored.get(F);
						return (
							H?.isResolved()
								? (x = !0)
								: ((x = await this.h.exists(F)),
									x ||
										(await this.m.create(
											[{ resource: F }],
											E.CancellationToken.None,
										)),
									this.n.extUri.isEqual(z, F) && this.get(z)
										? (H = await this.stored.resolve(z))
										: (H = await this.stored.resolve(F))),
							{ targetFileExists: x, targetStoredFileWorkingCopy: H }
						);
					}
					async G(z) {
						const { confirmed: F } = await this.u.confirm({
							type: "warning",
							message: (0, t.localize)(13123, null, (0, d.$kh)(z)),
							detail: (0, t.localize)(
								13124,
								null,
								(0, d.$kh)(z),
								(0, d.$kh)((0, d.$mh)(z)),
							),
							primaryButton: (0, t.localize)(13125, null),
						});
						return F;
					}
					async H(z) {
						const { confirmed: F } = await this.u.confirm({
							type: "warning",
							message: (0, t.localize)(13126, null, (0, d.$kh)(z)),
							detail: (0, t.localize)(13127, null),
							primaryButton: (0, t.localize)(13128, null),
						});
						return F;
					}
					async I(z) {
						if (this.h.hasProvider(z)) return z;
						const F = this.get(z);
						if (F instanceof o.$Kpc && F.hasAssociatedFilePath)
							return (0, d.$xh)(
								z,
								this.t.remoteAuthority,
								this.s.defaultUriScheme,
							);
						const x = await this.q.defaultFilePath();
						if (F) {
							const H = (0, d.$nh)(x, F.name);
							if (await this.s.hasValidBasename(H, F.name)) return H;
						}
						return (0, d.$nh)(x, (0, d.$kh)(z));
					}
					async destroy() {
						await w.Promises.settled([
							this.stored.destroy(),
							this.untitled.destroy(),
						]);
					}
				};
				(e.$Mpc = B),
					(e.$Mpc =
						B =
						O =
							Ne(
								[
									j(3, u.$ll),
									j(4, T.$n6),
									j(5, l.$3N),
									j(6, y.$ik),
									j(7, b.$iZ),
									j(8, P.$WO),
									j(9, n.$Vl),
									j(10, r.$IO),
									j(11, I.$_Y),
									j(12, L.$gY),
									j(13, $.$4N),
									j(14, k.$bZ),
									j(15, v.$IY),
									j(16, S.$dZ),
									j(17, c.$I8),
									j(18, h.$r8),
									j(19, r.$GO),
									j(20, M.$sPb),
									j(21, R.$8N),
								],
								B,
							));
			},
		),
		
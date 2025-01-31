import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/linkedList.js';
import '../../../../base/common/map.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../editor/browser/services/bulkEditService.js';
import '../../../../editor/common/config/editorOptions.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/progress/common/progress.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/undoRedo/common/undoRedo.js';
import './bulkCellEdits.js';
import './bulkFileEdits.js';
import './bulkTextEdits.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../services/workingCopy/common/workingCopyService.js';
define(
			de[3904],
			he([
				1, 0, 33, 3, 273, 59, 56, 199, 38, 4, 10, 81, 57, 20, 5, 34, 84, 30,
				155, 572, 3903, 3005, 18, 52, 227,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*cancellation*/,
				i /*lifecycle*/,
				w /*linkedList*/,
				E /*map*/,
				C /*editorBrowser*/,
				d /*bulkEditService*/,
				m /*editorOptions*/,
				r /*nls*/,
				u /*configuration*/,
				a /*configurationRegistry*/,
				h /*dialogs*/,
				c /*extensions*/,
				n /*instantiation*/,
				g /*log*/,
				p /*progress*/,
				o /*platform*/,
				f /*undoRedo*/,
				b /*bulkCellEdits*/,
				s /*bulkFileEdits*/,
				l /*bulkTextEdits*/,
				y /*editorService*/,
				$ /*lifecycle*/,
				v /*workingCopyService*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$Mc = void 0);
				function S(k) {
					return k.map((L) => {
						if (d.$tzb.is(L)) return d.$tzb.lift(L);
						if (d.$uzb.is(L)) return d.$uzb.lift(L);
						if (b.$hJb.is(L)) return b.$hJb.lift(L);
						throw new Error("Unsupported edit");
					});
				}
				let I = class {
					constructor(L, D, M, N, A, R, O, B, U, z, F) {
						(this.a = L),
							(this.b = D),
							(this.c = M),
							(this.d = N),
							(this.f = A),
							(this.g = R),
							(this.h = O),
							(this.j = B),
							(this.k = U),
							(this.l = z),
							(this.m = F);
					}
					ariaMessage() {
						const L = new E.$Gc(),
							D = new E.$Gc();
						let M = 0;
						for (const N of this.g)
							N instanceof d.$tzb
								? ((M += 1), D.set(N.resource, !0))
								: N instanceof d.$uzb &&
									L.set(N.oldResource ?? N.newResource, !0);
						return this.g.length === 0
							? (0, r.localize)(4462, null)
							: L.size === 0
								? M > 1 && D.size > 1
									? (0, r.localize)(4463, null, M, D.size)
									: (0, r.localize)(4464, null, M)
								: (0, r.localize)(4465, null, M, D.size, L.size);
					}
					async perform() {
						if (this.g.length === 0) return [];
						const L = [1];
						for (let R = 1; R < this.g.length; R++)
							Object.getPrototypeOf(this.g[R - 1]) ===
							Object.getPrototypeOf(this.g[R])
								? L[L.length - 1]++
								: L.push(1);
						const D = this.g.length > 1 ? 0 : void 0;
						this.d.report({ increment: D, total: 100 });
						const M = {
								report: (R) =>
									this.d.report({ increment: 100 / this.g.length }),
							},
							N = [];
						let A = 0;
						for (const R of L) {
							if (this.f.isCancellationRequested) break;
							const O = this.g.slice(A, A + R);
							O[0] instanceof d.$uzb
								? N.push(await this.n(O, this.h, this.j, this.k, M))
								: O[0] instanceof d.$tzb
									? N.push(await this.o(O, this.h, this.j, M))
									: O[0] instanceof b.$hJb
										? N.push(await this.p(O, this.h, this.j, M))
										: console.log("UNKNOWN EDIT"),
								(A = A + R);
						}
						return N.flat();
					}
					async n(L, D, M, N, A) {
						return (
							this.m.debug("_performFileEdits", JSON.stringify(L)),
							await this.l
								.createInstance(
									s.$9Mc,
									this.a || (0, r.localize)(4466, null),
									this.b || "undoredo.workspaceEdit",
									D,
									M,
									N,
									A,
									this.f,
									L,
								)
								.apply()
						);
					}
					async o(L, D, M, N) {
						return (
							this.m.debug("_performTextEdits", JSON.stringify(L)),
							await this.l
								.createInstance(
									l.$0Mc,
									this.a || (0, r.localize)(4467, null),
									this.b || "undoredo.workspaceEdit",
									this.c,
									D,
									M,
									N,
									this.f,
									L,
								)
								.apply()
						);
					}
					async p(L, D, M, N) {
						return (
							this.m.debug("_performCellEdits", JSON.stringify(L)),
							await this.l.createInstance(b.$iJb, D, M, N, this.f, L).apply()
						);
					}
				};
				I = Ne([j(9, n.$Li), j(10, g.$ik)], I);
				let T = class {
					constructor(L, D, M, N, A, R, O) {
						(this.c = L),
							(this.d = D),
							(this.f = M),
							(this.g = N),
							(this.h = A),
							(this.j = R),
							(this.k = O),
							(this.a = new w.$$c());
					}
					setPreviewHandler(L) {
						return (
							(this.b = L),
							(0, i.$Yc)(() => {
								this.b === L && (this.b = void 0);
							})
						);
					}
					hasPreviewHandler() {
						return !!this.b;
					}
					async apply(L, D) {
						let M = S(Array.isArray(L) ? L : L.edits);
						if (M.length === 0)
							return {
								ariaSummary: (0, r.localize)(4468, null),
								isApplied: !1,
							};
						this.b &&
							(D?.showPreview ||
								M.some((z) => z.metadata?.needsConfirmation)) &&
							(M = await this.b(M, D));
						let N = D?.editor;
						if (!N) {
							const z = this.f.activeTextEditorControl;
							(0, C.$0sb)(z)
								? (N = z)
								: (0, C.$$sb)(z) && (N = z.getModifiedEditor());
						}
						N && N.getOption(m.EditorOption.readOnly) && (N = void 0);
						let A,
							R = () => {};
						if (typeof D?.undoRedoGroupId == "number") {
							for (const z of this.a)
								if (z.id === D.undoRedoGroupId) {
									A = z;
									break;
								}
						}
						A || ((A = new f.$IN()), (R = this.a.push(A)));
						const O = D?.quotableLabel || D?.label,
							B = this.c.createInstance(
								I,
								O,
								D?.code,
								N,
								D?.progress ?? p.$0N.None,
								D?.token ?? t.CancellationToken.None,
								M,
								A,
								D?.undoRedoSource,
								!!D?.confirmBeforeUndo,
							);
						let U;
						try {
							U = this.g.onBeforeShutdown((F) =>
								F.veto(this.m(O, F.reason), "veto.blukEditService"),
							);
							const z = await B.perform();
							return (
								D?.respectAutoSaveConfig &&
									this.k.getValue(P) === !0 &&
									z.length > 1 &&
									(await this.l(z)),
								{ ariaSummary: B.ariaMessage(), isApplied: M.length > 0 }
							);
						} catch (z) {
							throw (this.d.error(z), z);
						} finally {
							U?.dispose(), R();
						}
					}
					async l(L) {
						const D = new E.$Hc(L),
							M = this.j.dirtyWorkingCopies.map(async (A) => {
								D.has(A.resource) && (await A.save());
							}),
							N = await Promise.allSettled(M);
						for (const A of N) A.status === "rejected" && this.d.warn(A.reason);
					}
					async m(L, D) {
						let M, N;
						switch (D) {
							case $.ShutdownReason.CLOSE:
								(M = (0, r.localize)(4469, null)),
									(N = (0, r.localize)(4470, null));
								break;
							case $.ShutdownReason.LOAD:
								(M = (0, r.localize)(4471, null)),
									(N = (0, r.localize)(4472, null));
								break;
							case $.ShutdownReason.RELOAD:
								(M = (0, r.localize)(4473, null)),
									(N = (0, r.localize)(4474, null));
								break;
							default:
								(M = (0, r.localize)(4475, null)),
									(N = (0, r.localize)(4476, null));
								break;
						}
						return !(
							await this.h.confirm({
								message: M,
								detail: (0, r.localize)(
									4477,
									null,
									L || (0, r.localize)(4478, null),
								),
								primaryButton: N,
							})
						).confirmed;
					}
				};
				(e.$$Mc = T),
					(e.$$Mc = T =
						Ne(
							[
								j(0, n.$Li),
								j(1, g.$ik),
								j(2, y.$IY),
								j(3, $.$n6),
								j(4, h.$GO),
								j(5, v.$gY),
								j(6, u.$gj),
							],
							T,
						)),
					(0, c.$lK)(d.$rzb, T, c.InstantiationType.Delayed);
				const P = "files.refactoring.autoSave";
				o.$Io
					.as(a.$No.Configuration)
					.registerConfiguration({
						id: "files",
						properties: {
							[P]: {
								description: (0, r.localize)(4479, null),
								default: !0,
								type: "boolean",
							},
						},
					});
			},
		)

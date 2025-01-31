import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/glob.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/uri.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/editor/common/editor.js';
import '../../../common/editor.js';
import '../common/editorGroupsService.js';
import '../../../../base/common/network.js';
import '../common/editorResolverService.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../nls.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/storage/common/storage.js';
import '../../extensions/common/extensions.js';
import '../../../../platform/log/common/log.js';
import '../common/editorGroupFinder.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../common/editor/sideBySideEditorInput.js';
import '../../../../base/common/event.js';
define(
			de[3578],
			he([
				1, 0, 215, 24, 3, 19, 9, 10, 116, 44, 66, 23, 231, 63, 4, 40, 32, 20,
				21, 53, 34, 1291, 5, 313, 6,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*glob*/,
				i /*arrays*/,
				w /*lifecycle*/,
				E /*resources*/,
				C /*uri*/,
				d /*configuration*/,
				m /*editor*/,
				r /*editor*/,
				u /*editorGroupsService*/,
				a /*network*/,
				h /*editorResolverService*/,
				c /*quickInput*/,
				n /*nls*/,
				g /*notification*/,
				p /*telemetry*/,
				o /*extensions*/,
				f /*storage*/,
				b /*extensions*/,
				s /*log*/,
				l /*editorGroupFinder*/,
				y /*instantiation*/,
				$ /*sideBySideEditorInput*/,
				v /*event*/,
) {
				"use strict";
				var S;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Avc = void 0),
					(t = mt(t));
				let I = class extends w.$1c {
					static {
						S = this;
					}
					static {
						this.g = "promptOpenWith.configureDefault";
					}
					static {
						this.h = "editorOverrideService.cache";
					}
					static {
						this.j = "editorOverrideService.conflictingDefaults";
					}
					constructor(P, k, L, D, M, N, A, R, O) {
						super(),
							(this.s = P),
							(this.t = k),
							(this.u = L),
							(this.w = D),
							(this.y = M),
							(this.z = N),
							(this.C = A),
							(this.F = R),
							(this.G = O),
							(this.f = this.D(new v.$ue())),
							(this.onDidChangeEditorRegistrations = this.f.event),
							(this.m = new Map()),
							(this.n = new Map()),
							(this.q = !0),
							(this.r = new Set(
								JSON.parse(
									this.C.get(S.h, f.StorageScope.PROFILE, JSON.stringify([])),
								),
							)),
							this.C.remove(S.h, f.StorageScope.PROFILE),
							this.D(
								this.C.onWillSaveState(() => {
									this.X();
								}),
							),
							this.D(
								this.F.onDidRegisterExtensions(() => {
									this.r = void 0;
								}),
							);
					}
					H(P, k) {
						const L = P,
							D = this.t.invokeFunction(l.$ydc, L, k);
						if (D instanceof Promise) return D.then(([M, N]) => [L, M, N]);
						{
							const [M, N] = D;
							return [L, M, N];
						}
					}
					async resolveEditor(P, k) {
						if (((this.n = this.J()), (0, r.$m1)(P))) return this.I(P, k);
						let L;
						const D = this.H(P, k);
						if ((D instanceof Promise ? (L = await D) : (L = D), !L))
							return h.ResolvedStatus.NONE;
						const [M, N, A] = L;
						A && (M.options = { ...M.options, activation: A });
						let R = r.$A1.getCanonicalUri(M, {
							supportSideBySide: r.SideBySideEditor.PRIMARY,
						});
						if (
							(this.r &&
								R &&
								this.Y(R) &&
								(await this.F.whenInstalledExtensionsRegistered()),
							R === void 0)
						)
							R = C.URI.from({ scheme: a.Schemas.untitled });
						else if (R.scheme === void 0 || R === null)
							return h.ResolvedStatus.NONE;
						if (M.options?.override === m.EditorResolution.PICK) {
							const z = await this.U(M);
							if (!z) return h.ResolvedStatus.ABORT;
							M.options = z;
						}
						let { editor: O, conflictingDefault: B } = this.N(
							R,
							M.options?.override,
						);
						if (!O && (M.options?.override || (0, r.$v1)(P)))
							return h.ResolvedStatus.NONE;
						if (!O) {
							const z = this.N(R, r.$b1.id);
							if (((O = z?.editor), (B = z?.conflictingDefault), !O))
								return h.ResolvedStatus.NONE;
						}
						if ((0, r.$j1)(M) && M.options?.override === void 0) {
							let z = r.$A1.getCanonicalUri(M, {
								supportSideBySide: r.SideBySideEditor.SECONDARY,
							});
							z || (z = C.URI.from({ scheme: a.Schemas.untitled }));
							const { editor: F } = this.N(z, void 0);
							if (!F || O.editorInfo.id !== F.editorInfo.id) {
								const { editor: x, conflictingDefault: H } = this.N(
									R,
									r.$b1.id,
								);
								(O = x), (B = H);
							}
							if (!O) return h.ResolvedStatus.NONE;
						}
						if (
							((M.options = { override: O.editorInfo.id, ...M.options }),
							O.editorFactoryObject.createDiffEditorInput === void 0 &&
								(0, r.$j1)(M))
						)
							return h.ResolvedStatus.NONE;
						const U = await this.O(M, N, O);
						return (
							B && U && (await this.R(R, O.editorInfo.label, M, U.editor, N)),
							U
								? (this.W(U.editor),
									U.editor.editorId !== O.editorInfo.id &&
										this.G.warn(
											`Editor ID Mismatch: ${U.editor.editorId} !== ${O.editorInfo.id}. This will cause bugs. Please ensure editorInput.editorId matches the registered id`,
										),
									{ ...U, group: N })
								: h.ResolvedStatus.ABORT
						);
					}
					async I(P, k) {
						const L = await this.resolveEditor(P.primary, k);
						if (!(0, r.$w1)(L)) return h.ResolvedStatus.NONE;
						const D = await this.resolveEditor(P.secondary, L.group ?? k);
						return (0, r.$w1)(D)
							? {
									group: L.group ?? D.group,
									editor: this.t.createInstance(
										$.$iY,
										P.label,
										P.description,
										D.editor,
										L.editor,
									),
									options: P.options,
								}
							: h.ResolvedStatus.NONE;
					}
					bufferChangeEvents(P) {
						this.f.pause();
						try {
							P();
						} finally {
							this.f.resume();
						}
					}
					registerEditor(P, k, L, D) {
						let M = this.m.get(P);
						M === void 0 && ((M = new Map()), this.m.set(P, M));
						let N = M.get(k.id);
						N === void 0 && (N = []);
						const A = (0, i.$Xb)(N, {
							globPattern: P,
							editorInfo: k,
							options: L,
							editorFactoryObject: D,
						});
						return (
							M.set(k.id, N),
							(this.q = !0),
							this.f.fire(),
							(0, w.$Yc)(() => {
								A(),
									N && N.length === 0 && M?.delete(k.id),
									(this.q = !0),
									this.f.fire();
							})
						);
					}
					getAssociationsForResource(P) {
						let L = this.getAllUserAssociations().filter(
							(M) => M.filenamePattern && (0, h.$H6)(M.filenamePattern, P),
						);
						L = L.sort(
							(M, N) =>
								(N.filenamePattern?.length ?? 0) -
								(M.filenamePattern?.length ?? 0),
						);
						const D = this.L;
						return L.filter((M) =>
							D.find((N) => N.editorInfo.id === M.viewType),
						);
					}
					getAllUserAssociations() {
						const P = this.u.inspect(h.$F6) || {},
							k = P.defaultValue ?? {},
							L = P.workspaceValue ?? {},
							D = P.userValue ?? {},
							M = { ...L };
						for (const [A, R] of Object.entries({ ...k, ...D }))
							M[A] === void 0 && (M[A] = R);
						const N = [];
						for (const [A, R] of Object.entries(M)) {
							const O = { filenamePattern: A, viewType: R };
							N.push(O);
						}
						return N;
					}
					J() {
						if (!this.q) return this.n;
						this.q = !1;
						const P = new Map();
						for (const [k, L] of this.m) {
							const D = [];
							for (const M of L.values()) {
								let N;
								for (const A of M)
									N ||
										(N = {
											editorInfo: A.editorInfo,
											globPattern: A.globPattern,
											options: {},
											editorFactoryObject: {},
										}),
										(N.options = { ...N.options, ...A.options }),
										(N.editorFactoryObject = {
											...N.editorFactoryObject,
											...A.editorFactoryObject,
										});
								N && D.push(N);
							}
							P.set(k, D);
						}
						return P;
					}
					get L() {
						return Array.from(this.n.values()).flat();
					}
					updateUserAssociations(P, k) {
						const L = { viewType: k, filenamePattern: P },
							D = this.getAllUserAssociations(),
							M = Object.create(null);
						for (const N of [...D, L])
							N.filenamePattern && (M[N.filenamePattern] = N.viewType);
						this.u.updateValue(h.$F6, M);
					}
					M(P) {
						const k = this.getAssociationsForResource(P),
							L = [];
						for (const [D, M] of this.n)
							for (const N of M)
								((k.find((R) => R.viewType === N.editorInfo.id) &&
									N.editorInfo.priority !==
										h.RegisteredEditorPriority.exclusive) ||
									(0, h.$H6)(D, P)) &&
									L.push(N);
						return L.sort((D, M) =>
							(0, h.$G6)(M.editorInfo.priority) ===
								(0, h.$G6)(D.editorInfo.priority) &&
							typeof M.globPattern == "string" &&
							typeof D.globPattern == "string"
								? M.globPattern.length - D.globPattern.length
								: (0, h.$G6)(M.editorInfo.priority) -
									(0, h.$G6)(D.editorInfo.priority),
						);
					}
					getEditors(P) {
						if (((this.n = this.J()), C.URI.isUri(P))) {
							const k = this.M(P);
							return k.find(
								(L) =>
									L.editorInfo.priority ===
									h.RegisteredEditorPriority.exclusive,
							)
								? []
								: k.map((L) => L.editorInfo);
						}
						return (0, i.$Qb)(
							this.L.map((k) => k.editorInfo),
							(k) => k.id,
						);
					}
					N(P, k) {
						const L = (B, U) =>
							B.find((z) =>
								z.options && z.options.canSupportResource !== void 0
									? z.editorInfo.id === U && z.options.canSupportResource(P)
									: z.editorInfo.id === U,
							);
						if (k && k !== m.EditorResolution.EXCLUSIVE_ONLY) {
							const B = this.L;
							return { editor: L(B, k), conflictingDefault: !1 };
						}
						const D = this.M(P),
							M = this.getAssociationsForResource(P),
							N =
								k === m.EditorResolution.EXCLUSIVE_ONLY
									? h.RegisteredEditorPriority.exclusive
									: h.RegisteredEditorPriority.builtin;
						let A = D.filter(
							(B) =>
								(0, h.$G6)(B.editorInfo.priority) >= (0, h.$G6)(N) &&
								B.editorInfo.id !== r.$b1.id,
						);
						if (A.length === 0)
							return {
								editor:
									M[0] && N !== h.RegisteredEditorPriority.exclusive
										? L(D, M[0].viewType)
										: void 0,
								conflictingDefault: !1,
							};
						const R =
							A[0].editorInfo.priority === h.RegisteredEditorPriority.exclusive
								? A[0].editorInfo.id
								: M[0]?.viewType || A[0].editorInfo.id;
						let O = !1;
						return (
							(A = A.filter(
								(B) =>
									B.editorInfo.priority !==
									h.RegisteredEditorPriority.exclusive,
							)),
							M.length === 0 && A.length > 1 && (O = !0),
							{ editor: L(D, R), conflictingDefault: O }
						);
					}
					async O(P, k, L) {
						let D = P.options;
						const M = r.$A1.getCanonicalUri(P, {
							supportSideBySide: r.SideBySideEditor.PRIMARY,
						});
						if (
							(D &&
								typeof D.activation > "u" &&
								(D = {
									...D,
									activation: D.preserveFocus
										? m.EditorActivation.RESTORE
										: void 0,
								}),
							(0, r.$o1)(P))
						) {
							if (!L.editorFactoryObject.createMergeEditorInput) return;
							const O = await L.editorFactoryObject.createMergeEditorInput(
								P,
								k,
							);
							return { editor: O.editor, options: O.options ?? D };
						}
						if ((0, r.$j1)(P)) {
							if (!L.editorFactoryObject.createDiffEditorInput) return;
							const O = await L.editorFactoryObject.createDiffEditorInput(P, k);
							return { editor: O.editor, options: O.options ?? D };
						}
						if ((0, r.$l1)(P)) {
							if (!L.editorFactoryObject.createInlineMultiDiffEditorInput)
								return;
							const O =
								await L.editorFactoryObject.createInlineMultiDiffEditorInput(
									P,
									k,
								);
							return { editor: O.editor, options: O.options ?? D };
						}
						if ((0, r.$k1)(P)) {
							if (!L.editorFactoryObject.createMultiDiffEditorInput) return;
							const O = await L.editorFactoryObject.createMultiDiffEditorInput(
								P,
								k,
							);
							return { editor: O.editor, options: O.options ?? D };
						}
						if ((0, r.$m1)(P))
							throw new Error(
								"Untyped side by side editor input not supported here.",
							);
						if ((0, r.$n1)(P)) {
							if (!L.editorFactoryObject.createUntitledEditorInput) return;
							const O = await L.editorFactoryObject.createUntitledEditorInput(
								P,
								k,
							);
							return { editor: O.editor, options: O.options ?? D };
						}
						if (M === void 0)
							throw new Error(
								"Undefined resource on non untitled editor input.",
							);
						if (
							typeof L.options?.singlePerResource == "function"
								? L.options.singlePerResource()
								: L.options?.singlePerResource
						) {
							const O = this.Q(M, L.editorInfo.id);
							if (O.length) {
								const B = await this.P(O, k);
								return B ? { editor: B, options: D } : void 0;
							}
						}
						if (!L.editorFactoryObject.createEditorInput) return;
						const A = await L.editorFactoryObject.createEditorInput(P, k);
						return (D = A.options ?? D), { editor: A.editor, options: D };
					}
					async P(P, k) {
						const L = P[0];
						for (const { editor: D, group: M } of P)
							if (D !== L.editor && !(await M.closeEditor(D))) return;
						if (!(k.id !== L.group.id && !L.group.moveEditor(L.editor, k)))
							return L.editor;
					}
					Q(P, k) {
						const L = [],
							D = (0, i.$Qb)([...this.s.groups]);
						for (const M of D)
							for (const N of M.editors)
								(0, E.$gh)(N.resource, P) &&
									N.editorId === k &&
									L.push({ editor: N, group: M });
						return L;
					}
					async R(P, k, L, D, M) {
						const N = this.M(P),
							A = JSON.parse(this.C.get(S.j, f.StorageScope.PROFILE, "{}")),
							R = `*${(0, E.$lh)(P)}`,
							O = () => {
								(A[R] = []),
									N.forEach((z) => A[R].push(z.editorInfo.id)),
									this.C.store(
										S.j,
										JSON.stringify(A),
										f.StorageScope.PROFILE,
										f.StorageTarget.MACHINE,
									);
							};
						if (A[R] && A[R].find((z) => z === D.editorId)) return;
						const U = this.y
							.prompt(g.Severity.Warning, (0, n.localize)(12239, null), [
								{
									label: (0, n.localize)(12240, null),
									run: async () => {
										const z = await this.U(L, !0);
										if (!z) return;
										L.options = z;
										const F = await this.resolveEditor(L, M);
										F === h.ResolvedStatus.ABORT ||
											F === h.ResolvedStatus.NONE ||
											M.replaceEditors([
												{
													editor: D,
													replacement: F.editor,
													options: F.options ?? z,
												},
											]);
									},
								},
								{ label: (0, n.localize)(12241, null, k), run: O },
							])
							.onDidClose(() => {
								O(), U.dispose();
							});
					}
					S(P, k) {
						const L = (0, i.$Sb)(this.s.activeGroup.findEditors(P));
						let D =
							P.scheme === a.Schemas.untitled
								? this.L.filter(
										(U) =>
											U.editorInfo.priority !==
											h.RegisteredEditorPriority.exclusive,
									)
								: this.M(P);
						D = (0, i.$Qb)(D, (U) => U.editorInfo.id);
						const M = this.getAssociationsForResource(P)[0]?.viewType;
						D = D.sort((U, z) =>
							U.editorInfo.id === r.$b1.id
								? -1
								: z.editorInfo.id === r.$b1.id
									? 1
									: (0, h.$G6)(z.editorInfo.priority) -
										(0, h.$G6)(U.editorInfo.priority),
						);
						const N = [],
							A = (0, n.localize)(12242, null),
							R = (0, n.localize)(12243, null),
							O = (0, n.localize)(12244, null);
						let B = M;
						if (
							(!B &&
								D.length > 2 &&
								D[1]?.editorInfo.priority !==
									h.RegisteredEditorPriority.option &&
								(B = D[1]?.editorInfo.id),
							B || (B = r.$b1.id),
							D.forEach((U) => {
								const z = L?.editorId ?? r.$b1.id,
									F = L ? U.editorInfo.id === z : !1,
									x = U.editorInfo.id === B,
									H = {
										id: U.editorInfo.id,
										label: U.editorInfo.label,
										description: F && x ? O : F ? A : x ? R : void 0,
										detail: U.editorInfo.detail ?? U.editorInfo.priority,
									};
								N.push(H);
							}),
							!k && (0, E.$lh)(P) !== "")
						) {
							const U = { type: "separator" };
							N.push(U);
							const z = {
								id: S.g,
								label: (0, n.localize)(12245, null, `*${(0, E.$lh)(P)}`),
							};
							N.push(z);
						}
						return N;
					}
					async U(P, k) {
						let L = r.$A1.getOriginalUri(P, {
							supportSideBySide: r.SideBySideEditor.PRIMARY,
						});
						L === void 0 && (L = C.URI.from({ scheme: a.Schemas.untitled }));
						const D = this.S(L, k),
							M = new w.$Zc(),
							N = M.add(this.w.createQuickPick({ useSeparators: !0 })),
							A = k
								? (0, n.localize)(12246, null, `*${(0, E.$lh)(L)}`)
								: (0, n.localize)(12247, null, (0, E.$kh)(L));
						(N.placeholder = A), (N.canAcceptInBackground = !0), (N.items = D);
						const R = N.items.find((B) => B.type === "item");
						R && (N.selectedItems = [R]);
						const O = await new Promise((B) => {
							M.add(
								N.onDidAccept((U) => {
									let z;
									N.selectedItems.length === 1 &&
										(z = {
											item: N.selectedItems[0],
											keyMods: N.keyMods,
											openInBackground: U.inBackground,
										}),
										L &&
											k &&
											z?.item.id &&
											this.updateUserAssociations(
												`*${(0, E.$lh)(L)}`,
												z.item.id,
											),
										B(z);
								}),
							),
								M.add(
									N.onDidHide(() => {
										M.dispose(), B(void 0);
									}),
								),
								M.add(
									N.onDidTriggerItemButton((U) => {
										B({ item: U.item, openInBackground: !1 }),
											L &&
												U.item &&
												U.item.id &&
												this.updateUserAssociations(
													`*${(0, E.$lh)(L)}`,
													U.item.id,
												);
									}),
								),
								N.show();
						});
						if ((N.dispose(), O))
							return O.item.id === S.g
								? this.U(P, !0)
								: {
										...P.options,
										override: O.item.id,
										preserveFocus:
											O.openInBackground || P.options?.preserveFocus,
									};
					}
					W(P) {
						P.editorId &&
							this.z.publicLog2("override.viewType", { viewType: P.editorId });
					}
					X() {
						const P = new Set();
						for (const [L, D] of this.n)
							D.find(
								(N) =>
									N.editorInfo.priority !== h.RegisteredEditorPriority.option &&
									N.editorInfo.id !== r.$b1.id,
							) && (t.$Kk(L) ? P.add(`${L.pattern}`) : P.add(L));
						const k = this.getAllUserAssociations();
						for (const L of k) L.filenamePattern && P.add(L.filenamePattern);
						this.C.store(
							S.h,
							JSON.stringify(Array.from(P)),
							f.StorageScope.PROFILE,
							f.StorageTarget.MACHINE,
						);
					}
					Y(P) {
						if (!this.r) return !1;
						for (const k of this.r) if ((0, h.$H6)(k, P)) return !0;
						return !1;
					}
				};
				(e.$Avc = I),
					(e.$Avc =
						I =
						S =
							Ne(
								[
									j(0, u.$EY),
									j(1, y.$Li),
									j(2, d.$gj),
									j(3, c.$DJ),
									j(4, g.$4N),
									j(5, p.$km),
									j(6, f.$lq),
									j(7, b.$q2),
									j(8, s.$ik),
								],
								I,
							)),
					(0, o.$lK)(h.$E6, I, o.InstantiationType.Eager);
			},
		)

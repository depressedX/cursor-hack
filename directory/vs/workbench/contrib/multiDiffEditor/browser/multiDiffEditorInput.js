import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/marshalling.js';
import '../../../../base/common/network.js';
import '../../../../base/common/objects.js';
import '../../../../base/common/observable.js';
import '../../../../base/common/observableInternal/utils.js';
import '../../../../base/common/types.js';
import '../../../../base/common/uri.js';
import '../../../../editor/browser/widget/diffEditor/utils.js';
import '../../../../editor/browser/widget/multiDiffEditor/multiDiffEditorViewModel.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../editor/common/services/textResourceConfiguration.js';
import '../../../../nls.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../common/editor.js';
import '../../../common/editor/editorInput.js';
import './icons.contribution.js';
import './multiDiffSourceResolverService.js';
import '../../../services/editor/common/editorResolverService.js';
import '../../../services/textfile/common/textfiles.js';
define(
			de[712],
			he([
				1, 0, 15, 29, 6, 3, 197, 23, 82, 77, 457, 28, 9, 370, 1681, 42, 125, 4,
				57, 5, 44, 223, 3089, 800, 231, 85,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*async*/,
				i /*errors*/,
				w /*event*/,
				E /*lifecycle*/,
				C /*marshalling*/,
				d /*network*/,
				m /*objects*/,
				r /*observable*/,
				u /*utils*/,
				a /*types*/,
				h /*uri*/,
				c /*utils*/,
				n /*multiDiffEditorViewModel*/,
				g /*resolverService*/,
				p /*textResourceConfiguration*/,
				o /*nls*/,
				f /*dialogs*/,
				b /*instantiation*/,
				s /*editor*/,
				l /*editorInput*/,
				y /*icons.contribution*/,
				$ /*multiDiffSourceResolverService*/,
				v /*editorResolverService*/,
				S /*textfiles*/,
) {
				"use strict";
				var I;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Nnc = e.$Mnc = e.$Lnc = void 0);
				let T = class extends l.$LO {
					static {
						I = this;
					}
					static fromResourceMultiDiffEditorInput(R, O) {
						if (!R.multiDiffSource && !R.resources)
							throw new i.$gb(
								"MultiDiffEditorInput requires either multiDiffSource or resources",
							);
						const B =
							R.multiDiffSource ??
							h.URI.parse(
								`multi-diff-editor:${new Date().getMilliseconds().toString() + Math.random().toString()}`,
							);
						return O.createInstance(
							I,
							B,
							R.label,
							R.resources?.map(
								(U) =>
									new $.$Jnc(
										U.original.resource,
										U.modified.resource,
										U.goToFileResource,
									),
							),
							R.isTransient ?? !1,
						);
					}
					static fromSerialized(R, O) {
						return O.createInstance(
							I,
							h.URI.parse(R.multiDiffSourceUri),
							R.label,
							R.resources?.map(
								(B) =>
									new $.$Jnc(
										B.originalUri ? h.URI.parse(B.originalUri) : void 0,
										B.modifiedUri ? h.URI.parse(B.modifiedUri) : void 0,
										B.goToFileUri ? h.URI.parse(B.goToFileUri) : void 0,
									),
							),
							!1,
						);
					}
					static {
						this.ID = "workbench.input.multiDiffEditor";
					}
					get resource() {
						return this.multiDiffSource;
					}
					get capabilities() {
						return s.EditorInputCapabilities.Readonly;
					}
					get typeId() {
						return I.ID;
					}
					getName() {
						return this.c;
					}
					get editorId() {
						return s.$b1.id;
					}
					getIcon() {
						return y.$Hnc;
					}
					constructor(R, O, B, U = !1, z, F, x, H, q) {
						super(),
							(this.multiDiffSource = R),
							(this.label = O),
							(this.initialResources = B),
							(this.isTransient = U),
							(this.m = z),
							(this.n = F),
							(this.q = x),
							(this.s = H),
							(this.t = q),
							(this.c = ""),
							(this.u = new t.$_h(async () => {
								const V = await this.w();
								this.D(V);
								const G = new n.$Fnc(V, this.q);
								return this.D(G), await (0, t.$Dh)(G.waitForDiffs(), 1e3), G;
							})),
							(this.y = new r.ObservableLazyPromise(async () => {
								const V = this.initialResources
									? { resources: w.$Be.const(this.initialResources) }
									: await this.s.resolve(this.multiDiffSource);
								return {
									source: V,
									resources: V ? (0, u.$Nd)(this, V.resources) : (0, u.$wd)([]),
								};
							})),
							(this.resources = (0, r.derived)(this, (V) =>
								this.y.cachedPromiseResult.read(V)?.data?.resources.read(V),
							)),
							(this.z = new P(
								this.t.files.onDidChangeDirty,
								(V) => V.resource.toString(),
								(V) => V.toString(),
							)),
							(this.C = (0, u.$Ld)(
								this,
								this.resources.map((V) => V ?? []),
								(V) => {
									const G = V.modifiedUri
											? k(this.z, this.t, V.modifiedUri)
											: (0, u.$wd)(!1),
										K = V.originalUri
											? k(this.z, this.t, V.originalUri)
											: (0, u.$wd)(!1);
									return (0, r.derived)((J) => G.read(J) || K.read(J));
								},
								(V) => V.getKey(),
							)),
							(this.F = (0, r.derived)(this, (V) =>
								this.C.read(V).some((G) => G.read(V)),
							).keepObserved(this.B)),
							(this.onDidChangeDirty = w.Event.fromObservableLight(this.F)),
							(this.closeHandler = {
								async confirm() {
									return f.ConfirmResult.DONT_SAVE;
								},
								showConfirm() {
									return !1;
								},
							}),
							this.D(
								(0, r.autorun)((V) => {
									const G = this.resources.read(V),
										K = this.label ?? (0, o.localize)(7698, null);
									G
										? (this.c = K + (0, o.localize)(7699, null, G.length))
										: (this.c = K),
										this.f.fire();
								}),
							);
					}
					serialize() {
						return {
							label: this.label,
							multiDiffSourceUri: this.multiDiffSource.toString(),
							resources: this.initialResources?.map((R) => ({
								originalUri: R.originalUri?.toString(),
								modifiedUri: R.modifiedUri?.toString(),
								goToFileUri: R.goToFileUri?.toString(),
							})),
						};
					}
					setLanguageId(R, O) {
						const U = this.u
							.requireValue()
							.activeDiffItem.get()?.documentDiffItem;
						if (!U) return;
						const z = U.modified ?? U.original;
						z && z.setLanguage(R, O);
					}
					async getViewModel() {
						return this.u.getPromise();
					}
					async w() {
						const R = await this.y.getPromise(),
							O = this.n,
							B = (0, u.$Ld)(
								this,
								R.resources,
								async (H, q) => {
									let V, G;
									const K = new E.$Zc();
									try {
										([V, G] = await Promise.all([
											H.originalUri
												? this.m.createModelReference(H.originalUri)
												: void 0,
											H.modifiedUri
												? this.m.createModelReference(H.modifiedUri)
												: void 0,
										])),
											V && K.add(V),
											G && K.add(G);
									} catch (X) {
										console.error(X), (0, i.$4)(X);
										return;
									}
									const J = H.modifiedUri ?? H.originalUri,
										W = {
											multiDiffEditorItem: H,
											original: V?.object.textEditorModel,
											modified: G?.object.textEditorModel,
											contextKeys: H.contextKeys,
											get options() {
												return {
													...L(G?.object.isReadonly() ?? !0),
													...D(O.getValue(J)),
												};
											},
											onOptionsDidChange: (X) =>
												this.n.onDidChangeConfiguration((Y) => {
													(Y.affectsConfiguration(J, "editor") ||
														Y.affectsConfiguration(J, "diffEditor")) &&
														X();
												}),
										};
									return q.add(c.$Lwb.createOfNonDisposable(W, K, this));
								},
								(H) =>
									JSON.stringify([
										H.modifiedUri?.toString(),
										H.originalUri?.toString(),
									]),
							),
							U = (0, r.observableValue)("documents", []),
							z = (0, r.derived)(async (H) => {
								const q = B.read(H),
									G = (await Promise.all(q)).filter(a.$tg);
								U.set(G, void 0);
							}),
							F = (0, u.$Hd)(z);
						return (
							await z.get(),
							{
								dispose: () => F.dispose(),
								documents: new u.$Md(U),
								contextKeys: R.source?.contextKeys,
							}
						);
					}
					matches(R) {
						return super.matches(R)
							? !0
							: R instanceof I
								? this.multiDiffSource.toString() ===
									R.multiDiffSource.toString()
								: !1;
					}
					isDirty() {
						return this.F.get();
					}
					async save(R, O) {
						return await this.G("save", R, O), this;
					}
					revert(R, O) {
						return this.G("revert", R, O);
					}
					async G(R, O, B) {
						const U = this.u.currentValue?.items.get();
						U &&
							(await Promise.all(
								U.map(async (z) => {
									const F = z.diffEditorViewModel.model,
										x =
											F.original.uri.scheme !== d.Schemas.untitled &&
											this.t.isDirty(F.original.uri);
									await Promise.all([
										x
											? R === "save"
												? this.t.save(F.original.uri, B)
												: this.t.revert(F.original.uri, B)
											: Promise.resolve(),
										R === "save"
											? this.t.save(F.modified.uri, B)
											: this.t.revert(F.modified.uri, B),
									]);
								}),
							));
					}
				};
				(e.$Lnc = T),
					(e.$Lnc =
						T =
						I =
							Ne(
								[
									j(4, g.$MO),
									j(5, p.$XO),
									j(6, b.$Li),
									j(7, $.$Inc),
									j(8, S.$kZ),
								],
								T,
							));
				class P {
					constructor(R, O, B) {
						(this.f = R),
							(this.g = O),
							(this.j = B),
							(this.b = 0),
							(this.c = new Map()),
							(this.k = (U) => {
								const z = this.g(U),
									F = this.c.get(z);
								if (F) for (const x of F) x(U);
							});
					}
					filteredEvent(R) {
						return (O) => {
							const B = this.j(R);
							let U = this.c.get(B);
							return (
								U || ((U = new Set()), this.c.set(B, U)),
								U.add(O),
								this.b++,
								this.b === 1 && (this.d = this.f(this.k)),
								{
									dispose: () => {
										U.delete(O),
											U.size === 0 && this.c.delete(B),
											this.b--,
											this.b === 0 && (this.d?.dispose(), (this.d = void 0));
									},
								}
							);
						};
					}
				}
				function k(A, R, O) {
					return (0, r.observableFromEvent)(A.filteredEvent(O), () =>
						R.isDirty(O),
					);
				}
				function L(A) {
					return {
						readOnly: !!A,
						readOnlyMessage: typeof A != "boolean" ? A : void 0,
					};
				}
				function D(A) {
					const R = (0, m.$vo)(A.editor);
					if ((0, a.$ng)(A.diffEditor)) {
						const O = (0, m.$vo)(A.diffEditor);
						(O.diffCodeLens = O.codeLens),
							delete O.codeLens,
							(O.diffWordWrap = O.wordWrap),
							delete O.wordWrap,
							Object.assign(R, O);
					}
					return R;
				}
				let M = class extends E.$1c {
					static {
						this.ID = "workbench.contrib.multiDiffEditorResolver";
					}
					constructor(R, O) {
						super(),
							this.D(
								R.registerEditor(
									"*",
									{
										id: s.$b1.id,
										label: s.$b1.displayName,
										detail: s.$b1.providerDisplayName,
										priority: v.RegisteredEditorPriority.builtin,
									},
									{},
									{
										createMultiDiffEditorInput: (B) => ({
											editor: T.fromResourceMultiDiffEditorInput(B, O),
										}),
									},
								),
							);
					}
				};
				(e.$Mnc = M), (e.$Mnc = M = Ne([j(0, v.$E6), j(1, b.$Li)], M));
				class N {
					canSerialize(R) {
						return R instanceof T && !R.isTransient;
					}
					serialize(R) {
						if (this.canSerialize(R)) return JSON.stringify(R.serialize());
					}
					deserialize(R, O) {
						try {
							const B = (0, C.$ii)(O);
							return T.fromSerialized(B, R);
						} catch (B) {
							(0, i.$4)(B);
							return;
						}
					}
				}
				e.$Nnc = N;
			},
		)

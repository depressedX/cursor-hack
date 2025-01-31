import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../common/textfiles.js';
import '../../../common/editor.js';
import '../../lifecycle/common/lifecycle.js';
import '../../../../platform/files/common/files.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/path.js';
import '../../environment/common/environmentService.js';
import '../../untitled/common/untitledTextEditorService.js';
import '../../untitled/common/untitledTextEditorModel.js';
import '../common/textFileEditorModelManager.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/common/network.js';
import '../../../../editor/common/model/textModel.js';
import '../../../../editor/common/services/model.js';
import '../../../../base/common/resources.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../base/common/buffer.js';
import '../../../../editor/common/services/textResourceConfiguration.js';
import '../../../../editor/common/languages/modesRegistry.js';
import '../../filesConfiguration/common/filesConfigurationService.js';
import '../../../common/editor/textEditorModel.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../path/common/pathService.js';
import '../../workingCopy/common/workingCopyFileService.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../platform/workspace/common/workspace.js';
import '../common/encoding.js';
import '../../../../base/common/stream.js';
import '../../../../editor/common/languages/language.js';
import '../../../../platform/log/common/log.js';
import '../../../../base/common/cancellation.js';
import '../../files/common/elevatedFileService.js';
import '../../decorations/common/decorations.js';
import '../../../../base/common/event.js';
import '../../../../base/common/codicons.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../base/common/arrays.js';
define(
			de[3906],
			he([
				1, 0, 4, 85, 44, 52, 22, 3, 54, 78, 631, 1339, 3905, 5, 23, 122, 67, 19,
				57, 76, 125, 172, 170, 702, 65, 165, 336, 68, 25, 842, 408, 61, 34, 33,
				700, 472, 6, 14, 51, 24,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*textfiles*/,
				w /*editor*/,
				E /*lifecycle*/,
				C /*files*/,
				d /*lifecycle*/,
				m /*path*/,
				r /*environmentService*/,
				u /*untitledTextEditorService*/,
				a /*untitledTextEditorModel*/,
				h /*textFileEditorModelManager*/,
				c /*instantiation*/,
				n /*network*/,
				g /*textModel*/,
				p /*model*/,
				o /*resources*/,
				f /*dialogs*/,
				b /*buffer*/,
				s /*textResourceConfiguration*/,
				l /*modesRegistry*/,
				y /*filesConfigurationService*/,
				$ /*textEditorModel*/,
				v /*codeEditorService*/,
				S /*pathService*/,
				I /*workingCopyFileService*/,
				T /*uriIdentity*/,
				P /*workspace*/,
				k /*encoding*/,
				L /*stream*/,
				D /*language*/,
				M /*log*/,
				N /*cancellation*/,
				A /*elevatedFileService*/,
				R /*decorations*/,
				O /*event*/,
				B /*codicons*/,
				U /*colorRegistry*/,
				z /*arrays*/,
) {
				"use strict";
				var F;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$t4c = e.$s4c = void 0);
				let x = class extends d.$1c {
					static {
						F = this;
					}
					static {
						this.a = w.$p1.registerSource(
							"textFileCreate.source",
							(0, t.localize)(12660, null),
						);
					}
					static {
						this.b = w.$p1.registerSource(
							"textFileOverwrite.source",
							(0, t.localize)(12661, null),
						);
					}
					constructor(
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
						oe,
					) {
						super(),
							(this.f = V),
							(this.g = G),
							(this.h = K),
							(this.j = J),
							(this.m = W),
							(this.n = X),
							(this.q = Y),
							(this.r = ie),
							(this.s = ne),
							(this.t = ee),
							(this.u = _),
							(this.w = te),
							(this.z = Q),
							(this.C = Z),
							(this.F = se),
							(this.G = re),
							(this.H = le),
							(this.I = oe),
							(this.files = this.D(this.j.createInstance(h.$r4c))),
							(this.untitled = this.g),
							this.J();
					}
					J() {
						const V = this.D(
							new (class extends d.$1c {
								constructor(G) {
									super(),
										(this.b = G),
										(this.label = (0, t.localize)(12662, null)),
										(this.a = this.D(new O.$re())),
										(this.onDidChange = this.a.event),
										this.c();
								}
								c() {
									this.D(
										this.b.onDidResolve(({ model: G }) => {
											(G.isReadonly() ||
												G.hasState(i.TextFileEditorModelState.ORPHAN)) &&
												this.a.fire([G.resource]);
										}),
									),
										this.D(this.b.onDidRemove((G) => this.a.fire([G]))),
										this.D(
											this.b.onDidChangeReadonly((G) =>
												this.a.fire([G.resource]),
											),
										),
										this.D(
											this.b.onDidChangeOrphaned((G) =>
												this.a.fire([G.resource]),
											),
										);
								}
								provideDecorations(G) {
									const K = this.b.get(G);
									if (!K || K.isDisposed()) return;
									const J = K.isReadonly(),
										W = K.hasState(i.TextFileEditorModelState.ORPHAN);
									if (J && W)
										return {
											color: U.$TS,
											letter: B.$ak.lockSmall,
											strikethrough: !0,
											tooltip: (0, t.localize)(12663, null),
										};
									if (J)
										return {
											letter: B.$ak.lockSmall,
											tooltip: (0, t.localize)(12664, null),
										};
									if (W)
										return {
											color: U.$TS,
											strikethrough: !0,
											tooltip: (0, t.localize)(12665, null),
										};
								}
							})(this.files),
						);
						this.D(this.I.registerDecorationsProvider(V));
					}
					get encoding() {
						return (
							this.L || (this.L = this.D(this.j.createInstance(H))), this.L
						);
					}
					async read(V, G) {
						const [K, J] = await this.M(V, { ...G, preferUnbuffered: !0 });
						return {
							...K,
							encoding: J.detected.encoding || k.$NY,
							value: await (0, L.$Ke)(J.stream, (W) => W.join("")),
						};
					}
					async readStream(V, G) {
						const [K, J] = await this.M(V, G);
						return {
							...K,
							encoding: J.detected.encoding || k.$NY,
							value: await (0, g.$8X)(J.stream),
						};
					}
					async M(V, G) {
						const K = new N.$Ce();
						let J;
						if (G?.preferUnbuffered) {
							const W = await this.f.readFile(V, G, K.token);
							J = { ...W, value: (0, b.$8e)(W.value) };
						} else J = await this.f.readFileStream(V, G, K.token);
						try {
							const W = await this.N(V, J.value, G);
							return [J, W];
						} catch (W) {
							throw (
								(K.dispose(!0),
								W.decodeStreamErrorKind ===
								k.DecodeStreamErrorKind.STREAM_IS_BINARY
									? new i.$lZ(
											(0, t.localize)(12666, null),
											i.TextFileOperationResult.FILE_IS_BINARY,
											G,
										)
									: W)
							);
						}
					}
					async create(V, G) {
						const K = await Promise.all(
							V.map(async (J) => {
								const W = await this.getEncodedReadable(J.resource, J.value);
								return {
									resource: J.resource,
									contents: W,
									overwrite: J.options?.overwrite,
								};
							}),
						);
						return this.z.create(K, N.CancellationToken.None, G);
					}
					async write(V, G, K) {
						const J = await this.getEncodedReadable(V, G, K);
						return K?.writeElevated && this.H.isSupported(V)
							? this.H.writeFileElevated(V, J, K)
							: this.f.writeFile(V, J, K);
					}
					async getEncodedReadable(V, G, K) {
						const { encoding: J, addBOM: W } =
							await this.encoding.getWriteEncoding(V, K);
						if (J === k.$NY && !W)
							return typeof G > "u" ? void 0 : (0, i.$pZ)(G);
						G = G || "";
						const X = typeof G == "string" ? (0, i.$oZ)(G) : G;
						return (0, k.$XY)(X, J, { addBOM: W });
					}
					async getDecodedStream(V, G, K) {
						return (await this.N(V, G, K)).stream;
					}
					N(V, G, K) {
						return (0, k.$WY)(G, {
							acceptTextOnly: K?.acceptTextOnly ?? !1,
							guessEncoding:
								K?.autoGuessEncoding ||
								this.s.getValue(V, "files.autoGuessEncoding"),
							candidateGuessEncodings:
								K?.candidateGuessEncodings ||
								this.s.getValue(V, "files.candidateGuessEncodings"),
							overwriteEncoding: async (J) => {
								const { encoding: W } =
									await this.encoding.getPreferredReadEncoding(
										V,
										K,
										J ?? void 0,
									);
								return W;
							},
						});
					}
					async save(V, G) {
						if (V.scheme === n.Schemas.untitled) {
							const K = this.untitled.get(V);
							if (K) {
								let J;
								if (
									(K.hasAssociatedFilePath
										? (J = await this.S(V))
										: (J = await this.r.pickFileToSave(
												await this.S(V),
												G?.availableFileSystems,
											)),
									J)
								)
									return this.saveAs(V, J, G);
							}
						} else {
							const K = this.files.get(V);
							if (K) return (await K.save(G)) ? V : void 0;
						}
					}
					async saveAs(V, G, K) {
						if (
							(G ||
								(G = await this.r.pickFileToSave(
									await this.S(K?.suggestedTarget ?? V),
									K?.availableFileSystems,
								)),
							!!G)
						) {
							if (this.t.isReadonly(G))
								if (await this.R(G)) this.t.updateReadonly(G, !1);
								else return;
							return (0, o.$gh)(V, G)
								? this.save(V, { ...K, force: !0 })
								: this.f.hasProvider(V) &&
										this.C.extUri.isEqual(V, G) &&
										(await this.f.exists(V))
									? (await this.z.move(
											[{ file: { source: V, target: G } }],
											N.CancellationToken.None,
										),
										(await this.save(V, K)) || (await this.save(G, K)),
										G)
									: this.O(V, G, K);
						}
					}
					async O(V, G, K) {
						let J = !1;
						const W = this.files.get(V);
						if (W?.isResolved()) J = await this.P(W, V, G, K);
						else if (this.f.hasProvider(V))
							await this.f.copy(V, G, !0), (J = !0);
						else {
							const X = this.m.getModel(V);
							X && (J = await this.P(X, V, G, K));
						}
						if (J) {
							try {
								await this.revert(V);
							} catch (X) {
								this.G.error(X);
							}
							return G;
						}
					}
					async P(V, G, K, J) {
						let W;
						const X = V;
						typeof X.getEncoding == "function" && (W = X.getEncoding());
						let Y = !1,
							ie = this.files.get(K);
						if (ie?.isResolved()) Y = !0;
						else {
							(Y = await this.f.exists(K)),
								Y || (await this.create([{ resource: K, value: "" }]));
							try {
								ie = await this.files.resolve(K, { encoding: W });
							} catch (te) {
								if (
									Y &&
									(te.textFileOperationResult ===
										i.TextFileOperationResult.FILE_IS_BINARY ||
										te.fileOperationResult ===
											C.FileOperationResult.FILE_TOO_LARGE)
								)
									return await this.f.del(K), this.P(V, G, K, J);
								throw te;
							}
						}
						let ne;
						if (
							(V instanceof a.$6Y &&
							V.hasAssociatedFilePath &&
							Y &&
							this.C.extUri.isEqual(
								K,
								(0, o.$xh)(
									V.resource,
									this.n.remoteAuthority,
									this.w.defaultUriScheme,
								),
							)
								? (ne = await this.Q(K))
								: (ne = !0),
							!ne)
						)
							return !1;
						let ee;
						V instanceof $.$VO
							? V.isResolved() && (ee = V.textEditorModel ?? void 0)
							: (ee = V);
						let _;
						if ((ie.isResolved() && (_ = ie.textEditorModel), ee && _)) {
							ie.updatePreferredEncoding(W),
								this.m.updateModel(_, (0, g.$9X)(ee.createSnapshot()));
							const te = ee.getLanguageId(),
								Q = _.getLanguageId();
							te !== l.$0M && Q === l.$0M && _.setLanguage(te);
							const Z = this.u.getTransientModelProperties(ee);
							if (Z)
								for (const [se, re] of Z)
									this.u.setTransientModelProperty(_, se, re);
						}
						return (
							J?.source || (J = { ...J, source: Y ? F.b : F.a }),
							ie.save({ ...J, from: G })
						);
					}
					async Q(V) {
						const { confirmed: G } = await this.q.confirm({
							type: "warning",
							message: (0, t.localize)(12667, null, (0, o.$kh)(V)),
							detail: (0, t.localize)(
								12668,
								null,
								(0, o.$kh)(V),
								(0, o.$kh)((0, o.$mh)(V)),
							),
							primaryButton: (0, t.localize)(12669, null),
						});
						return G;
					}
					async R(V) {
						const { confirmed: G } = await this.q.confirm({
							type: "warning",
							message: (0, t.localize)(12670, null, (0, o.$kh)(V)),
							detail: (0, t.localize)(12671, null),
							primaryButton: (0, t.localize)(12672, null),
						});
						return G;
					}
					async S(V) {
						if (this.f.hasProvider(V)) return V;
						const G = this.n.remoteAuthority,
							K = await this.r.defaultFilePath();
						let J;
						if (V.scheme === n.Schemas.untitled) {
							const W = this.untitled.get(V);
							if (W) {
								if (W.hasAssociatedFilePath)
									return (0, o.$xh)(V, G, this.w.defaultUriScheme);
								let X;
								(await this.w.hasValidBasename((0, o.$nh)(K, W.name), W.name))
									? (X = W.name)
									: (X = (0, o.$kh)(V));
								const Y = W.getLanguageId();
								Y && Y !== l.$0M ? (J = this.suggestFilename(Y, X)) : (J = X);
							}
						}
						return J || (J = (0, o.$kh)(V)), (0, o.$nh)(K, J);
					}
					suggestFilename(V, G) {
						if (!this.F.getLanguageName(V)) return G;
						const J = (0, m.$tc)(G),
							W = this.F.getExtensions(V);
						if (W.includes(J)) return G;
						const X = (0, z.$Sb)(W);
						if (X)
							return J ? `${G.substring(0, G.indexOf(J))}${X}` : `${G}${X}`;
						const Y = this.F.getFilenames(V);
						return Y.includes(G) ? G : ((0, z.$Sb)(Y) ?? G);
					}
					async revert(V, G) {
						if (V.scheme === n.Schemas.untitled) {
							const K = this.untitled.get(V);
							if (K) return K.revert(G);
						} else {
							const K = this.files.get(V);
							if (K && (K.isDirty() || G?.force)) return K.revert(G);
						}
					}
					isDirty(V) {
						const G =
							V.scheme === n.Schemas.untitled
								? this.untitled.get(V)
								: this.files.get(V);
						return G ? G.isDirty() : !1;
					}
				};
				(e.$s4c = x),
					(e.$s4c =
						x =
						F =
							Ne(
								[
									j(0, C.$ll),
									j(1, u.$7Y),
									j(2, E.$n6),
									j(3, c.$Li),
									j(4, p.$QO),
									j(5, r.$r8),
									j(6, f.$GO),
									j(7, f.$IO),
									j(8, s.$XO),
									j(9, y.$_Y),
									j(10, v.$dtb),
									j(11, S.$I8),
									j(12, I.$iZ),
									j(13, T.$Vl),
									j(14, D.$nM),
									j(15, M.$ik),
									j(16, A.$dZ),
									j(17, R.$sPb),
								],
								x,
							));
				let H = class extends d.$1c {
					get b() {
						return this.a;
					}
					set b(V) {
						this.a = V;
					}
					constructor(V, G, K, J) {
						super(),
							(this.f = V),
							(this.g = G),
							(this.h = K),
							(this.j = J),
							(this.a = this.n()),
							this.m();
					}
					m() {
						this.D(
							this.h.onDidChangeWorkspaceFolders(() => (this.b = this.n())),
						);
					}
					n() {
						const V = [];
						return (
							V.push({ parent: this.g.userRoamingDataHome, encoding: k.$NY }),
							V.push({ extension: P.$9i, encoding: k.$NY }),
							V.push({
								parent: this.g.untitledWorkspacesHome,
								encoding: k.$NY,
							}),
							this.h.getWorkspace().folders.forEach((G) => {
								V.push({
									parent: (0, o.$nh)(G.uri, ".vscode"),
									encoding: k.$NY,
								});
							}),
							V
						);
					}
					async getWriteEncoding(V, G) {
						const { encoding: K, hasBOM: J } =
							await this.getPreferredWriteEncoding(V, G ? G.encoding : void 0);
						return { encoding: K, addBOM: J };
					}
					async getPreferredWriteEncoding(V, G) {
						const K = await this.q(V, G);
						return {
							encoding: K,
							hasBOM: K === k.$PY || K === k.$QY || K === k.$OY,
						};
					}
					async getPreferredReadEncoding(V, G, K) {
						let J;
						G?.encoding
							? K === k.$OY && G.encoding === k.$NY
								? (J = k.$OY)
								: (J = G.encoding)
							: typeof K == "string"
								? (J = K)
								: this.f.getValue(V, "files.encoding") === k.$OY && (J = k.$NY);
						const W = await this.q(V, J);
						return {
							encoding: W,
							hasBOM: W === k.$PY || W === k.$QY || W === k.$OY,
						};
					}
					async q(V, G) {
						let K;
						const J = this.r(V);
						return (
							J
								? (K = J)
								: G
									? (K = G)
									: (K = this.f.getValue(V, "files.encoding")),
							K !== k.$NY && (!K || !(await (0, k.$YY)(K))) && (K = k.$NY),
							K
						);
					}
					r(V) {
						if (this.b?.length) {
							for (const G of this.b)
								if (
									(G.parent && this.j.extUri.isEqualOrParent(V, G.parent)) ||
									(G.extension && (0, o.$lh)(V) === `.${G.extension}`)
								)
									return G.encoding;
						}
					}
				};
				(e.$t4c = H),
					(e.$t4c = H =
						Ne([j(0, s.$XO), j(1, r.$r8), j(2, P.$Vi), j(3, T.$Vl)], H));
			},
		)

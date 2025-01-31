import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/window/common/window.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../history/common/history.js';
import '../../environment/common/environmentService.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/path.js';
import '../../../../platform/instantiation/common/instantiation.js';
import './simpleFileDialog.js';
import '../../../../platform/workspaces/common/workspaces.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/opener/common/opener.js';
import '../../host/browser/host.js';
import '../../../../base/common/severity.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/strings.js';
import '../../../../editor/common/languages/language.js';
import '../../../../platform/label/common/label.js';
import '../../path/common/pathService.js';
import '../../../../base/common/network.js';
import '../../../../editor/common/languages/modesRegistry.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../editor/common/editorService.js';
import '../../../../platform/editor/common/editor.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
define(
		de[3583],
		he([
			1, 0, 4, 253, 57, 25, 245, 78, 19, 54, 5, 1860, 256, 10, 22, 41, 87, 111,
			24, 37, 61, 73, 165, 23, 172, 31, 65, 18, 116, 34, 45,
		]),
		function (			ce /*require*/,
			e /*exports*/,
			t /*nls*/,
			i /*window*/,
			w /*dialogs*/,
			E /*workspace*/,
			C /*history*/,
			d /*environmentService*/,
			m /*resources*/,
			r /*path*/,
			u /*instantiation*/,
			a /*simpleFileDialog*/,
			h /*workspaces*/,
			c /*configuration*/,
			n /*files*/,
			g /*opener*/,
			p /*host*/,
			o /*severity*/,
			f /*arrays*/,
			b /*strings*/,
			s /*language*/,
			l /*label*/,
			y /*pathService*/,
			$ /*network*/,
			v /*modesRegistry*/,
			S /*commands*/,
			I /*codeEditorService*/,
			T /*editorService*/,
			P /*editor*/,
			k /*log*/,
			L /*reactiveStorageService*/,
) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$n5c = void 0),
				(t = mt(t)),
				(m = mt(m)),
				(o = xi(o));
			let D = class {
				constructor(N, A, R, O, B, U, z, F, x, H, q, V, G, K, J, W, X, Y) {
					(this.a = N),
						(this.b = A),
						(this.c = R),
						(this.d = O),
						(this.f = B),
						(this.g = U),
						(this.h = z),
						(this.i = F),
						(this.j = x),
						(this.k = H),
						(this.l = q),
						(this.m = V),
						(this.n = G),
						(this.o = K),
						(this.p = J),
						(this.q = W),
						(this.r = X),
						(this.s = Y);
				}
				async defaultFilePath(N = this.H(), A = this.I()) {
					let R = this.c.getLastActiveFile(N, A);
					return (
						R ? (R = m.$mh(R)) : (R = this.c.getLastActiveWorkspaceRoot(N, A)),
						R || (R = await this.preferredHome(N)),
						R
					);
				}
				async defaultFolderPath(N = this.H(), A = this.I()) {
					let R = this.c.getLastActiveWorkspaceRoot(N, A);
					return (
						R || (R = this.c.getLastActiveFile(N, A)),
						R ? m.$mh(R) : this.preferredHome(N)
					);
				}
				async preferredHome(N = this.H()) {
					const A = N === $.Schemas.file,
						R = this.g.inspect("files.dialog.defaultPath"),
						O = A ? R.userLocalValue : R.userRemoteValue;
					if (O && (A ? (0, r.$nc)(O) : (await this.n.path).isAbsolute(O))) {
						const U = A ? (0, r.$mc)(O) : (await this.n.path).normalize(O),
							z = m.$xh(
								await this.n.fileURI(U),
								this.d.remoteAuthority,
								this.n.defaultUriScheme,
							);
						if (await this.h.exists(z)) return z;
					}
					return this.n.userHome({ preferLocal: A });
				}
				async defaultWorkspacePath(N = this.H()) {
					let A;
					if (this.b.getWorkbenchState() === E.WorkbenchState.WORKSPACE) {
						const R = this.b.getWorkspace().configuration;
						R?.scheme === N &&
							(0, E.$ej)(R, this.d) &&
							!(0, E.$bj)(R) &&
							(A = m.$mh(R));
					}
					return A || (A = await this.defaultFilePath(N)), A;
				}
				async showSaveConfirm(N) {
					return this.t()
						? (this.r.trace(
								"FileDialogService: refused to show save confirmation dialog in tests.",
							),
							w.ConfirmResult.DONT_SAVE)
						: this.u(N);
				}
				t() {
					return (this.d.isExtensionDevelopment &&
						this.d.extensionTestsLocationURI) ||
						this.d.shadowWindowForWorkspaceId
						? !0
						: !!this.d.enableSmokeTestDriver;
				}
				async u(N) {
					if (N.length === 0) return w.ConfirmResult.DONT_SAVE;
					let A,
						R = t.localize(12197, null);
					N.length === 1
						? (A = t.localize(
								12198,
								null,
								typeof N[0] == "string" ? N[0] : m.$kh(N[0]),
							))
						: ((A = t.localize(12199, null, N.length)),
							(R =
								(0, w.$JO)(N) +
								`
` +
								R));
					const { result: O } = await this.j.prompt({
						type: o.default.Warning,
						message: A,
						detail: R,
						buttons: [
							{
								label:
									N.length > 1
										? t.localize(12200, null)
										: t.localize(12201, null),
								run: () => w.ConfirmResult.SAVE,
							},
							{
								label: t.localize(12202, null),
								run: () => w.ConfirmResult.DONT_SAVE,
							},
						],
						cancelButton: { run: () => w.ConfirmResult.CANCEL },
					});
					return O;
				}
				v(N, A) {
					return N === $.Schemas.untitled
						? [$.Schemas.file]
						: N !== $.Schemas.file
							? [N, $.Schemas.file]
							: [N];
				}
				async w(N, A, R) {
					const O = t.localize(12203, null),
						B = this.v(N),
						U = await this.F({
							canSelectFiles: !0,
							canSelectFolders: !0,
							canSelectMany: !1,
							defaultUri: A.defaultUri,
							title: O,
							availableFileSystems: B,
						});
					if (U) {
						const z = await this.h.stat(U),
							F = z.isDirectory ? { folderUri: U } : { fileUri: U };
						!(0, i.$tY)(F) && (0, i.$vY)(F) && this.y(F.fileUri),
							z.isDirectory || A.forceNewWindow || R
								? await this.a.openWindow([F], {
										forceNewWindow: A.forceNewWindow,
										remoteAuthority: A.remoteAuthority,
									})
								: await this.p.openEditors(
										[
											{
												resource: U,
												options: {
													source: P.EditorOpenSource.USER,
													pinned: !0,
												},
											},
										],
										void 0,
										{ validateTrust: !0 },
									);
					}
				}
				async x(N, A, R) {
					const O = t.localize(12204, null),
						B = this.v(N),
						U = await this.F({
							canSelectFiles: !0,
							canSelectFolders: !1,
							canSelectMany: !1,
							defaultUri: A.defaultUri,
							title: O,
							availableFileSystems: B,
						});
					U &&
						(this.y(U),
						A.forceNewWindow || R
							? await this.a.openWindow([{ fileUri: U }], {
									forceNewWindow: A.forceNewWindow,
									remoteAuthority: A.remoteAuthority,
								})
							: await this.p.openEditors(
									[
										{
											resource: U,
											options: { source: P.EditorOpenSource.USER, pinned: !0 },
										},
									],
									void 0,
									{ validateTrust: !0 },
								));
				}
				y(N) {
					this.l.addRecentlyOpened([
						{ fileUri: N, label: this.m.getUriLabel(N) },
					]);
				}
				async z(N, A) {
					const R = t.localize(12205, null),
						O = this.v(N, !0),
						B = await this.F({
							canSelectFiles: !1,
							canSelectFolders: !0,
							canSelectMany: !1,
							defaultUri: A.defaultUri,
							title: R,
							availableFileSystems: O,
						});
					if (B)
						return this.a.openWindow([{ folderUri: B }], {
							forceNewWindow: A.forceNewWindow,
							remoteAuthority: A.remoteAuthority,
						});
				}
				async A(N, A) {
					const R = t.localize(12206, null),
						O = [{ name: t.localize(12207, null), extensions: [E.$9i] }],
						B = this.v(N, !0),
						U = await this.F({
							canSelectFiles: !0,
							canSelectFolders: !1,
							canSelectMany: !1,
							defaultUri: A.defaultUri,
							title: R,
							filters: O,
							availableFileSystems: B,
						});
					if (U)
						return this.a.openWindow([{ workspaceUri: U }], {
							forceNewWindow: A.forceNewWindow,
							remoteAuthority: A.remoteAuthority,
						});
				}
				async B(N, A) {
					A.availableFileSystems || (A.availableFileSystems = this.v(N)),
						(A.title = t.localize(12208, null));
					const R = await this.G(A);
					return R && this.y(R), R;
				}
				async C(N, A) {
					return (
						A.availableFileSystems || (A.availableFileSystems = this.v(N)),
						this.G(A)
					);
				}
				async D(N, A) {
					A.availableFileSystems ||
						(A.availableFileSystems = this.v(N, A.canSelectFolders));
					const R = await this.F(A);
					return R ? [R] : void 0;
				}
				E() {
					return this.f.createInstance(a.$m5c);
				}
				F(N) {
					return this.E().showOpenDialog(N);
				}
				G(N) {
					return this.E().showSaveDialog(N);
				}
				H(N) {
					return N ?? this.n.defaultUriScheme;
				}
				I() {
					return this.d.remoteAuthority;
				}
				J(N) {
					return (
						(N.availableFileSystems && N.availableFileSystems[0]) ||
						this.H(N.defaultUri?.scheme)
					);
				}
				K(N) {
					if (N.availableFileSystems && N.availableFileSystems.length > 0)
						return N.availableFileSystems;
					const A = [$.Schemas.file];
					return this.d.remoteAuthority && A.unshift($.Schemas.vscodeRemote), A;
				}
				L(N, A) {
					const R = {
							defaultUri: N,
							title: t.localize(12209, null),
							availableFileSystems: A,
						},
						O = N ? m.$lh(N) : void 0;
					let B;
					const U = this.k.getSortedRegisteredLanguageNames(),
						z = (0, f.$Lb)(
							U.map(({ languageName: F, languageId: x }) => {
								const H = this.k.getExtensions(x);
								if (!H.length) return null;
								const q = {
										name: F,
										extensions: (0, f.$Qb)(H)
											.slice(0, 10)
											.map((G) => (0, b.$sf)(G, ".")),
									},
									V = O || v.$$M;
								if (!B && H.includes(V)) {
									B = q;
									const G = (0, b.$sf)(V, ".");
									return (
										q.extensions.includes(G) || q.extensions.unshift(G), null
									);
								}
								return q;
							}),
						);
					return (
						!B &&
							O &&
							(B = {
								name: (0, b.$sf)(O, ".").toUpperCase(),
								extensions: [(0, b.$sf)(O, ".")],
							}),
						(R.filters = (0, f.$Lb)([
							{ name: t.localize(12210, null), extensions: ["*"] },
							B,
							...z,
							{ name: t.localize(12211, null), extensions: [""] },
						])),
						R
					);
				}
			};
			(e.$n5c = D),
				(e.$n5c = D =
					Ne(
						[
							j(0, p.$asb),
							j(1, E.$Vi),
							j(2, C.$Feb),
							j(3, d.$r8),
							j(4, u.$Li),
							j(5, c.$gj),
							j(6, n.$ll),
							j(7, g.$7rb),
							j(8, w.$GO),
							j(9, s.$nM),
							j(10, h.$cRb),
							j(11, l.$3N),
							j(12, y.$I8),
							j(13, S.$ek),
							j(14, T.$IY),
							j(15, I.$dtb),
							j(16, k.$ik),
							j(17, L.$0zb),
						],
						D,
					));
		},
	)

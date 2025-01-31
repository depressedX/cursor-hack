import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/resources.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../services/editor/common/editorService.js';
import '../../../../base/common/lifecycle.js';
import '../../../common/editor.js';
import '../../../services/environment/browser/environmentService.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/strings.js';
import '../../../../base/common/labels.js';
import '../../../../platform/label/common/label.js';
import '../../../../base/common/event.js';
import '../../../../base/common/async.js';
import '../../../../platform/product/common/productService.js';
import '../../../../base/common/network.js';
import '../../../../platform/workspace/common/virtualWorkspace.js';
import '../../../services/userDataProfile/common/userDataProfile.js';
import '../../../services/views/common/viewsService.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../base/browser/dom.js';
define(
			de[1327],
			he([
				1, 0, 4, 19, 10, 18, 3, 44, 286, 25, 12, 37, 222, 73, 6, 15, 62, 23,
				349, 133, 89, 56, 8, 7,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*resources*/,
				w /*configuration*/,
				E /*editorService*/,
				C /*lifecycle*/,
				d /*editor*/,
				m /*environmentService*/,
				r /*workspace*/,
				u /*platform*/,
				a /*strings*/,
				h /*labels*/,
				c /*label*/,
				n /*event*/,
				g /*async*/,
				p /*productService*/,
				o /*network*/,
				f /*virtualWorkspace*/,
				b /*userDataProfile*/,
				s /*viewsService*/,
				l /*editorBrowser*/,
				y /*contextkey*/,
				$ /*dom*/,
) {
				"use strict";
				var v;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ztc = e.$ytc = e.$xtc = void 0);
				var S;
				(function (T) {
					(T.titleSeparator = "window.titleSeparator"),
						(T.title = "window.title");
				})(S || (S = {})),
					(e.$xtc = (() => {
						if (u.$m && u.$p)
							return "${activeEditorShort}${separator}${rootName}${separator}${profileName}";
						const T =
							"${dirty}${activeEditorShort}${separator}${rootName}${separator}${profileName}${separator}${appName}";
						return u.$r ? T + "${separator}${remoteName}" : T;
					})()),
					(e.$ytc = u.$m ? " \u2014 " : " - ");
				let I = class extends C.$1c {
					static {
						v = this;
					}
					static {
						this.a = u.$l
							? (0, t.localize)(3731, null)
							: (0, t.localize)(3732, null);
					}
					static {
						this.b = (0, t.localize)(3733, null);
					}
					static {
						this.c = "\u25CF ";
					}
					get value() {
						return this.n ?? "";
					}
					get workspaceName() {
						return this.z.getWorkspaceLabel(this.y.getWorkspace());
					}
					get fileName() {
						const P = this.r.activeEditor;
						if (!P) return;
						const k = P.getTitle(d.Verbosity.SHORT);
						return `${P?.isDirty() && !P.isSaving() ? v.c : ""}${k}`;
					}
					constructor(P, k, L, D, M, N, A, R, O, B, U) {
						super(),
							(this.t = L),
							(this.u = D),
							(this.w = N),
							(this.y = A),
							(this.z = R),
							(this.C = O),
							(this.F = B),
							(this.G = U),
							(this.f = { isPure: !0, isAdmin: !1, prefix: void 0 }),
							(this.g = new Map()),
							(this.h = this.D(new C.$Zc())),
							(this.j = this.D(new g.$Yh(() => this.M(), 0))),
							(this.m = new n.$re()),
							(this.onDidChange = this.m.event),
							(this.q = !1),
							(this.r = M.createScoped(k, this.B)),
							(this.s = P.vscodeWindowId),
							this.J(),
							this.H();
					}
					H() {
						this.D(this.t.onDidChangeConfiguration((P) => this.I(P))),
							this.D(this.r.onDidActiveEditorChange(() => this.L())),
							this.D(
								this.y.onDidChangeWorkspaceFolders(() => this.j.schedule()),
							),
							this.D(this.y.onDidChangeWorkbenchState(() => this.j.schedule())),
							this.D(this.y.onDidChangeWorkspaceName(() => this.j.schedule())),
							this.D(this.z.onDidChangeFormatters(() => this.j.schedule())),
							this.D(this.C.onDidChangeCurrentProfile(() => this.j.schedule())),
							this.D(
								this.G.onDidChangeFocusedView(() => {
									this.q && this.j.schedule();
								}),
							),
							this.D(
								this.u.onDidChangeContext((P) => {
									P.affectsSome(this.g) && this.j.schedule();
								}),
							);
					}
					I(P) {
						P.affectsConfiguration(S.title) && this.J(),
							(P.affectsConfiguration(S.title) ||
								P.affectsConfiguration(S.titleSeparator)) &&
								this.j.schedule();
					}
					J() {
						const P = this.t.getValue(S.title);
						this.q = typeof P == "string" && P.includes("${focusedView}");
					}
					L() {
						this.h.clear(), this.j.schedule();
						const P = this.r.activeEditor;
						if (
							(P &&
								(this.h.add(P.onDidChangeDirty(() => this.j.schedule())),
								this.h.add(P.onDidChangeLabel(() => this.j.schedule()))),
							this.q)
						) {
							const k = this.r.activeTextEditorControl,
								L = [];
							(0, l.$0sb)(k)
								? L.push(k)
								: (0, l.$$sb)(k) &&
									L.push(k.getOriginalEditor(), k.getModifiedEditor());
							for (const D of L)
								this.h.add(D.onDidBlurEditorText(() => this.j.schedule())),
									this.h.add(D.onDidFocusEditorText(() => this.j.schedule()));
						}
					}
					M() {
						const P = this.N();
						if (P !== this.n) {
							let k = P;
							(0, a.$sf)(k) || (k = this.F.nameLong);
							const L = (0, $.getWindowById)(this.s, !0).window;
							!L.document.title &&
								u.$m &&
								k === this.F.nameLong &&
								(L.document.title = `${this.F.nameLong} ${v.c}`),
								(L.document.title = k),
								(this.n = P),
								this.m.fire();
						}
					}
					N() {
						const { prefix: P, suffix: k } = this.getTitleDecorations();
						let L = this.getWindowTitle() || this.F.nameLong;
						return (
							P && (L = `${P} ${L}`),
							k && (L = `${L} ${k}`),
							L.replace(/[^\S ]/g, " ")
						);
					}
					getTitleDecorations() {
						let P, k;
						return (
							this.f.prefix && (P = this.f.prefix),
							this.w.isExtensionDevelopment && (P = P ? `${v.b} - ${P}` : v.b),
							this.f.isAdmin && (k = v.a),
							{ prefix: P, suffix: k }
						);
					}
					updateProperties(P) {
						const k =
								typeof P.isAdmin == "boolean" ? P.isAdmin : this.f.isAdmin,
							L = typeof P.isPure == "boolean" ? P.isPure : this.f.isPure,
							D = typeof P.prefix == "string" ? P.prefix : this.f.prefix;
						(k !== this.f.isAdmin ||
							L !== this.f.isPure ||
							D !== this.f.prefix) &&
							((this.f.isAdmin = k),
							(this.f.isPure = L),
							(this.f.prefix = D),
							this.j.schedule());
					}
					registerVariables(P) {
						let k = !1;
						for (const { name: L, contextKey: D } of P)
							this.g.has(D) || (this.g.set(D, L), (k = !0));
						k && this.j.schedule();
					}
					getWindowTitle() {
						const P = this.r.activeEditor,
							k = this.y.getWorkspace();
						let L;
						k.configuration
							? (L = k.configuration)
							: k.folders.length && (L = k.folders[0].uri);
						const D = d.$A1.getOriginalUri(P, {
							supportSideBySide: d.SideBySideEditor.PRIMARY,
						});
						let M = D ? (0, i.$mh)(D) : void 0;
						M?.path === "." && (M = void 0);
						let N;
						this.y.getWorkbenchState() === r.WorkbenchState.FOLDER
							? (N = k.folders[0])
							: D && (N = this.y.getWorkspaceFolder(D) ?? void 0);
						let A;
						if (this.w.remoteAuthority && !u.$r)
							A = this.z.getHostLabel(
								o.Schemas.vscodeRemote,
								this.w.remoteAuthority,
							);
						else {
							const ee = (0, f.$E8)(k);
							ee && (A = this.z.getHostLabel(ee.scheme, ee.authority));
						}
						const R = P ? P.getTitle(d.Verbosity.SHORT) : "",
							O = P ? P.getTitle(d.Verbosity.MEDIUM) : R,
							B = P ? P.getTitle(d.Verbosity.LONG) : O,
							U = M ? (0, i.$kh)(M) : "",
							z = M ? this.z.getUriLabel(M, { relative: !0 }) : "",
							F = M ? this.z.getUriLabel(M) : "",
							x = this.z.getWorkspaceLabel(k),
							H = this.z.getWorkspaceLabel(k, { verbose: c.Verbosity.SHORT }),
							q = L ? this.z.getUriLabel(L) : "",
							V = N ? N.name : "",
							G = N ? this.z.getUriLabel(N.uri) : "",
							K = P?.isDirty() && !P.isSaving() ? v.c : "",
							J = this.F.nameLong,
							W = this.C.currentProfile.isDefault
								? ""
								: this.C.currentProfile.name,
							X = this.G.getFocusedViewName(),
							Y = {};
						for (const [ee, _] of this.g)
							Y[_] = this.u.getContextKeyValue(ee) ?? "";
						let ie = this.t.getValue(S.title);
						typeof ie != "string" && (ie = e.$xtc);
						let ne = this.t.getValue(S.titleSeparator);
						return (
							typeof ne != "string" && (ne = e.$ytc),
							(0, h.$BO)(ie, {
								...Y,
								activeEditorShort: R,
								activeEditorLong: B,
								activeEditorMedium: O,
								activeFolderShort: U,
								activeFolderMedium: z,
								activeFolderLong: F,
								rootName: x,
								rootPath: q,
								rootNameShort: H,
								folderName: V,
								folderPath: G,
								dirty: K,
								appName: J,
								remoteName: A,
								profileName: W,
								focusedView: X,
								separator: { label: ne },
							})
						);
					}
					isCustomTitleFormat() {
						const P = this.t.inspect(S.title),
							k = this.t.inspect(S.titleSeparator);
						return P.value !== P.defaultValue || k.value !== k.defaultValue;
					}
				};
				(e.$ztc = I),
					(e.$ztc =
						I =
						v =
							Ne(
								[
									j(2, w.$gj),
									j(3, y.$6j),
									j(4, E.$IY),
									j(5, m.$5rb),
									j(6, r.$Vi),
									j(7, c.$3N),
									j(8, b.$P8),
									j(9, p.$Bk),
									j(10, s.$HMb),
								],
								I,
							));
			},
		)

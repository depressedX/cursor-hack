import '../../../require.js';
import '../../../exports.js';
import '../../nls.js';
import '../../base/common/uri.js';
import '../../base/common/resources.js';
import '../../base/browser/ui/iconLabel/iconLabel.js';
import '../../editor/common/languages/language.js';
import '../../platform/workspace/common/workspace.js';
import '../../platform/configuration/common/configuration.js';
import '../../editor/common/services/model.js';
import '../services/textfile/common/textfiles.js';
import '../services/decorations/common/decorations.js';
import '../../base/common/network.js';
import '../../platform/files/common/files.js';
import '../../platform/theme/common/themeService.js';
import '../../base/common/event.js';
import '../../platform/label/common/label.js';
import '../../editor/common/services/getIconClasses.js';
import '../../base/common/lifecycle.js';
import '../../platform/instantiation/common/instantiation.js';
import '../../base/common/labels.js';
import '../services/notebook/common/notebookDocumentService.js';
define(
			de[233],
			he([
				1, 0, 4, 9, 19, 325, 61, 25, 10, 67, 85, 472, 23, 22, 35, 6, 73, 252, 3,
				5, 222, 834,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*uri*/,
				w /*resources*/,
				E /*iconLabel*/,
				C /*language*/,
				d /*workspace*/,
				m /*configuration*/,
				r /*model*/,
				u /*textfiles*/,
				a /*decorations*/,
				h /*network*/,
				c /*files*/,
				n /*themeService*/,
				g /*event*/,
				p /*label*/,
				o /*getIconClasses*/,
				f /*lifecycle*/,
				b /*instantiation*/,
				s /*labels*/,
				l /*notebookDocumentService*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$vPb = e.$uPb = e.$tPb = void 0);
				function y(T) {
					if (!(!T || !T.resource))
						return i.URI.isUri(T.resource) ? T.resource : T.resource.primary;
				}
				e.$tPb = { onDidChangeVisibility: g.Event.None };
				let $ = class extends f.$1c {
					constructor(P, k, L, D, M, N, A, R, O, B) {
						super(),
							(this.f = k),
							(this.g = L),
							(this.h = D),
							(this.j = M),
							(this.m = N),
							(this.n = A),
							(this.q = R),
							(this.r = O),
							(this.s = B),
							(this.a = this.D(new g.$re())),
							(this.onDidChangeDecorations = this.a.event),
							(this.b = []),
							(this.c = []),
							this.t(P);
					}
					t(P) {
						this.D(
							P.onDidChangeVisibility((k) => {
								this.b.forEach((L) => L.notifyVisibilityChanged(k));
							}),
						),
							this.D(
								this.m.onDidChange(() =>
									this.b.forEach((k) => k.notifyExtensionsRegistered()),
								),
							),
							this.D(
								this.h.onModelLanguageChanged((k) => {
									k.model.uri &&
										this.b.forEach((L) =>
											L.notifyModelLanguageChanged(k.model),
										);
								}),
							),
							this.D(
								this.h.onModelAdded((k) => {
									k.uri && this.b.forEach((L) => L.notifyModelAdded(k));
								}),
							),
							this.D(
								this.j.onDidChangeWorkspaceFolders(() => {
									this.b.forEach((k) => k.notifyWorkspaceFoldersChange());
								}),
							),
							this.D(
								this.n.onDidChangeDecorations((k) => {
									let L = !1;
									this.b.forEach((D) => {
										D.notifyFileDecorationsChanges(k) && (L = !0);
									}),
										L && this.a.fire();
								}),
							),
							this.D(
								this.q.onDidColorThemeChange(() =>
									this.b.forEach((k) => k.notifyThemeChange()),
								),
							),
							this.D(
								this.g.onDidChangeConfiguration((k) => {
									k.affectsConfiguration(c.$Ll) &&
										this.b.forEach((L) => L.notifyFileAssociationsChange());
								}),
							),
							this.D(
								this.r.onDidChangeFormatters((k) => {
									this.b.forEach((L) => L.notifyFormattersChange(k.scheme));
								}),
							),
							this.D(
								this.s.untitled.onDidChangeLabel((k) => {
									this.b.forEach((L) =>
										L.notifyUntitledLabelChange(k.resource),
									);
								}),
							);
					}
					get(P) {
						return this.c[P];
					}
					create(P, k) {
						const L = this.f.createInstance(I, P, k),
							D = {
								element: L.element,
								onDidRender: L.onDidRender,
								setLabel: (M, N, A) => L.setLabel(M, N, A),
								setResource: (M, N) => L.setResource(M, N),
								setFile: (M, N) => L.setFile(M, N),
								clear: () => L.clear(),
								dispose: () => this.u(L),
							};
						return this.c.push(D), this.b.push(L), D;
					}
					u(P) {
						const k = this.b.indexOf(P);
						k > -1 && (this.b.splice(k, 1), this.c.splice(k, 1)), (0, f.$Vc)(P);
					}
					clear() {
						(this.b = (0, f.$Vc)(this.b)), (this.c = []);
					}
					dispose() {
						super.dispose(), this.clear();
					}
				};
				(e.$uPb = $),
					(e.$uPb = $ =
						Ne(
							[
								j(1, b.$Li),
								j(2, m.$gj),
								j(3, r.$QO),
								j(4, d.$Vi),
								j(5, C.$nM),
								j(6, a.$sPb),
								j(7, n.$iP),
								j(8, p.$3N),
								j(9, u.$kZ),
							],
							$,
						));
				let v = class extends $ {
					get element() {
						return this.w;
					}
					constructor(P, k, L, D, M, N, A, R, O, B, U) {
						super(e.$tPb, L, D, M, N, A, R, O, B, U),
							(this.w = this.D(this.create(P, k)));
					}
				};
				(e.$vPb = v),
					(e.$vPb = v =
						Ne(
							[
								j(2, b.$Li),
								j(3, m.$gj),
								j(4, r.$QO),
								j(5, d.$Vi),
								j(6, C.$nM),
								j(7, a.$sPb),
								j(8, n.$iP),
								j(9, p.$3N),
								j(10, u.$kZ),
							],
							v,
						));
				var S;
				(function (T) {
					(T[(T.Basic = 1)] = "Basic"), (T[(T.Full = 2)] = "Full");
				})(S || (S = {}));
				let I = class extends E.$Xob {
					constructor(P, k, L, D, M, N, A, R, O) {
						super(P, k),
							(this.L = L),
							(this.M = D),
							(this.N = M),
							(this.O = N),
							(this.P = A),
							(this.Q = R),
							(this.R = O),
							(this.u = this.D(new g.$re())),
							(this.onDidRender = this.u.event),
							(this.w = void 0),
							(this.y = this.D(new f.$2c())),
							(this.z = void 0),
							(this.C = void 0),
							(this.F = void 0),
							(this.G = void 0),
							(this.H = void 0),
							(this.I = void 0),
							(this.J = !1);
					}
					notifyVisibilityChanged(P) {
						P === this.J &&
							((this.J = !P),
							P &&
								this.I &&
								(this.Z({
									updateIcon: this.I === S.Full,
									updateDecoration: this.I === S.Full,
								}),
								(this.I = void 0)));
					}
					notifyModelLanguageChanged(P) {
						this.S(P);
					}
					notifyModelAdded(P) {
						this.S(P);
					}
					S(P) {
						const k = y(this.w);
						k &&
							(0, w.$gh)(P.uri, k) &&
							this.F !== P.getLanguageId() &&
							((this.F = P.getLanguageId()),
							this.Z({ updateIcon: !0, updateDecoration: !1 }));
					}
					notifyFileDecorationsChanges(P) {
						if (!this.z) return !1;
						const k = y(this.w);
						return k && this.z.fileDecorations && P.affectsResource(k)
							? this.Z({ updateIcon: !1, updateDecoration: !0 })
							: !1;
					}
					notifyExtensionsRegistered() {
						this.Z({ updateIcon: !0, updateDecoration: !1 });
					}
					notifyThemeChange() {
						this.Z({ updateIcon: !1, updateDecoration: !1 });
					}
					notifyFileAssociationsChange() {
						this.Z({ updateIcon: !0, updateDecoration: !1 });
					}
					notifyFormattersChange(P) {
						y(this.w)?.scheme === P &&
							this.Z({ updateIcon: !1, updateDecoration: !1 });
					}
					notifyUntitledLabelChange(P) {
						(0, w.$gh)(P, y(this.w)) &&
							this.Z({ updateIcon: !1, updateDecoration: !1 });
					}
					notifyWorkspaceFoldersChange() {
						if (typeof this.H == "string") {
							const P = y(this.w);
							i.URI.isUri(P) &&
								this.w?.name === this.H &&
								this.setFile(P, this.z);
						}
					}
					setFile(P, k) {
						const L = k?.hideLabel;
						let D;
						if (!L) {
							if (k?.fileKind === c.FileKind.ROOT_FOLDER) {
								const N = this.Q.getWorkspaceFolder(P);
								N && ((D = N.name), (this.H = D));
							}
							D || (D = (0, s.$xO)((0, w.$jh)(P)));
						}
						let M;
						if (!k?.hidePath) {
							const N = this.O.getUriLabel((0, w.$mh)(P), { relative: !0 });
							N && N !== "." && (M = N);
						}
						this.setResource(
							{ resource: P, name: D, description: M, range: k?.range },
							k,
						);
					}
					setResource(P, k = Object.create(null)) {
						const L = y(P),
							D = P?.resource && !i.URI.isUri(P.resource);
						if (!k.forceLabel && !D && L?.scheme === h.Schemas.untitled) {
							const O = this.P.untitled.get(L);
							if (O && !O.hasAssociatedFilePath) {
								if (
									(typeof P.name == "string" && (P.name = O.name),
									typeof P.description == "string")
								) {
									const U = O.resource.path;
									P.name !== U ? (P.description = U) : (P.description = void 0);
								}
								const B = O.resource.path;
								O.name !== B
									? (k.title = `${O.name} \u2022 ${B}`)
									: (k.title = B);
							}
						}
						if (
							!k.forceLabel &&
							!D &&
							L?.scheme === h.Schemas.vscodeNotebookCell
						) {
							const O = this.R.getNotebook(L),
								B = O?.getCellIndex(L);
							O &&
								B !== void 0 &&
								typeof P.name == "string" &&
								(k.title = (0, t.localize)(3008, null, P.name, `${B + 1}`)),
								typeof P.name == "string" &&
									O &&
									B !== void 0 &&
									typeof P.name == "string" &&
									(P.name = (0, t.localize)(3009, null, P.name, `${B + 1}`));
						}
						const M = this.W(P),
							N = M || this.X(P),
							A = this.U(k),
							R = this.Y(k);
						(this.w = P),
							(this.z = k),
							M && (this.F = void 0),
							N && (this.G = void 0),
							this.Z({ updateIcon: M || A || R, updateDecoration: M || A });
					}
					U(P) {
						const k = P?.fileKind,
							L = this.z?.fileKind;
						return k !== L;
					}
					W(P) {
						const k = y(P),
							L = y(this.w);
						return k && L ? k.toString() !== L.toString() : !(!k && !L);
					}
					X(P) {
						const k = y(P);
						return !!k && this.G !== this.O.getUriLabel(k);
					}
					Y(P) {
						return this.z?.icon !== P?.icon;
					}
					clear() {
						(this.w = void 0),
							(this.z = void 0),
							(this.F = void 0),
							(this.C = void 0),
							(this.G = void 0),
							this.setLabel("");
					}
					Z(P) {
						if (this.J)
							return (
								this.I !== S.Full &&
									(this.I =
										P.updateIcon || P.updateDecoration ? S.Full : S.Basic),
								!1
							);
						if ((P.updateIcon && (this.C = void 0), !this.w)) return !1;
						const k = {
								title: "",
								italic: this.z?.italic,
								strikethrough: this.z?.strikethrough,
								matches: this.z?.matches,
								descriptionMatches: this.z?.descriptionMatches,
								extraClasses: [],
								separator: this.z?.separator,
								domId: this.z?.domId,
								disabledCommand: this.z?.disabledCommand,
								labelEscapeNewLines: this.z?.labelEscapeNewLines,
								descriptionTitle: this.z?.descriptionTitle,
							},
							L = y(this.w);
						if (
							(this.z?.title !== void 0 && (k.title = this.z.title),
							L &&
								L.scheme !== h.Schemas.data &&
								(!this.z?.title ||
									(typeof this.z.title != "string" &&
										!this.z.title.markdownNotSupportedFallback)) &&
								(this.G || (this.G = this.O.getUriLabel(L)),
								!k.title || typeof k.title == "string"
									? (k.title = this.G)
									: k.title.markdownNotSupportedFallback ||
										(k.title.markdownNotSupportedFallback = this.G)),
							this.z &&
								!this.z.hideIcon &&
								(this.C ||
									(this.C = (0, o.$BDb)(
										this.M,
										this.L,
										L,
										this.z.fileKind,
										this.z.icon,
									)),
								i.URI.isUri(this.z.icon) && (k.iconPath = this.z.icon),
								(k.extraClasses = this.C.slice(0))),
							this.z?.extraClasses &&
								k.extraClasses.push(...this.z.extraClasses),
							this.z?.fileDecorations && L)
						) {
							P.updateDecoration &&
								(this.y.value = this.N.getDecoration(
									L,
									this.z.fileKind !== c.FileKind.FILE,
								));
							const D = this.y.value;
							if (D) {
								if (D.tooltip) {
									if (typeof k.title == "string")
										k.title = `${k.title} \u2022 ${D.tooltip}`;
									else if (typeof k.title?.markdown == "string") {
										const M = `${k.title.markdown} \u2022 ${D.tooltip}`;
										k.title = { markdown: M, markdownNotSupportedFallback: M };
									}
								}
								D.strikethrough && (k.strikethrough = !0),
									this.z.fileDecorations.colors &&
										k.extraClasses.push(D.labelClassName),
									this.z.fileDecorations.badges &&
										(k.extraClasses.push(D.badgeClassName),
										k.extraClasses.push(D.iconClassName));
							}
						}
						return (
							this.w.range &&
								(k.suffix =
									this.w.range.startLineNumber !== this.w.range.endLineNumber
										? `:${this.w.range.startLineNumber}-${this.w.range.endLineNumber}`
										: `:${this.w.range.startLineNumber}`),
							this.setLabel(this.w.name ?? "", this.w.description, k),
							this.u.fire(),
							!0
						);
					}
					dispose() {
						super.dispose(),
							(this.w = void 0),
							(this.z = void 0),
							(this.F = void 0),
							(this.C = void 0),
							(this.G = void 0),
							(this.H = void 0);
					}
				};
				I = Ne(
					[
						j(2, C.$nM),
						j(3, r.$QO),
						j(4, a.$sPb),
						j(5, p.$3N),
						j(6, u.$kZ),
						j(7, d.$Vi),
						j(8, l.$I6),
					],
					I,
				);
			},
		)

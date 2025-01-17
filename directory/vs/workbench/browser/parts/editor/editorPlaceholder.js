import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/strings.js';
import '../../../../base/common/severity.js';
import '../../../common/editor.js';
import './editorPane.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../base/browser/ui/scrollbar/scrollableElement.js';
import '../../../../base/common/scrollable.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../base/common/types.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../platform/editor/common/editor.js';
import '../../editor.js';
import '../../../../base/browser/ui/button/button.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import '../../../../base/browser/ui/iconLabel/simpleIconLabel.js';
import '../../../../platform/files/common/files.js';
import '../../../../base/common/errorMessage.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../css!vs/workbench/browser/parts/editor/media/editorplaceholder.js';
define(
		de[1914],
		he([
			1, 0, 4, 37, 111, 44, 217, 32, 203, 195, 35, 7, 3, 21, 28, 31, 25, 116,
			192, 183, 106, 758, 22, 163, 57, 2340,
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
		) {
			"use strict";
			var S, I, T;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$ouc = e.$nuc = e.$muc = void 0),
				(w = xi(w));
			let P = class extends C.$JEb {
				static {
					S = this;
				}
				static {
					this.a = 1024;
				}
				constructor(M, N, A, R, O) {
					super(M, N, A, R, O), (this.f = this.D(new h.$2c()));
				}
				Y(M) {
					(this.b = document.createElement("div")),
						(this.b.className = "monaco-editor-pane-placeholder"),
						(this.b.style.outline = "none"),
						(this.b.tabIndex = 0),
						(this.c = this.D(
							new m.$8hb(this.b, {
								horizontal: r.ScrollbarVisibility.Auto,
								vertical: r.ScrollbarVisibility.Auto,
							}),
						)),
						M.appendChild(this.c.getDomNode());
				}
				async setInput(M, N, A, R) {
					await super.setInput(M, N, A, R),
						!R.isCancellationRequested && (this.f.value = await this.j(M, N));
				}
				async j(M, N) {
					const [A, R] = (0, n.$xg)(this.b, this.c);
					(0, a.$9fb)(A);
					const O = new h.$Zc(),
						{ icon: B, label: U, actions: z } = await this.m(M, N, O),
						F = (0, i.$qf)(U, S.a),
						x = A.appendChild((0, a.$)(".editor-placeholder-icon-container")),
						H = O.add(new l.$Yob(x));
					H.text = B;
					const q = A.appendChild(
							(0, a.$)(".editor-placeholder-label-container"),
						),
						V = document.createElement("span");
					if (
						((V.textContent = F),
						q.appendChild(V),
						A.setAttribute(
							"aria-label",
							`${(0, f.$yVb)(M, void 0, this.group, void 0)}, ${F}`,
						),
						z.length)
					) {
						const G = A.appendChild(
								(0, a.$)(".editor-placeholder-buttons-container"),
							),
							K = O.add(new b.$rob(G));
						for (let J = 0; J < z.length; J++) {
							const W = O.add(K.addButton({ ...s.$lyb, secondary: J !== 0 }));
							(W.label = z[J].label),
								O.add(
									W.onDidClick((X) => {
										X && a.$ahb.stop(X, !0), z[J].run();
									}),
								);
						}
					}
					return R.scanDomNode(), O;
				}
				clearInput() {
					this.b && (0, a.$9fb)(this.b), this.f.clear(), super.clearInput();
				}
				layout(M) {
					const [N, A] = (0, n.$xg)(this.b, this.c);
					(0, a.size)(N, M.width, M.height),
						A.scanDomNode(),
						N.classList.toggle("max-height-200px", M.height <= 200);
				}
				focus() {
					super.focus(), this.b?.focus();
				}
				dispose() {
					this.b?.remove(), super.dispose();
				}
			};
			(e.$muc = P),
				(e.$muc = P = S = Ne([j(2, d.$km), j(3, u.$iP), j(4, c.$lq)], P));
			let k = class extends P {
				static {
					I = this;
				}
				static {
					this.ID = "workbench.editors.workspaceTrustRequiredEditor";
				}
				static {
					this.r = (0, t.localize)(3469, null);
				}
				static {
					this.DESCRIPTOR = f.$vVb.create(I, this.ID, this.r);
				}
				constructor(M, N, A, R, O, B) {
					super(I.ID, M, N, A, B), (this.s = R), (this.u = O);
				}
				getTitle() {
					return I.r;
				}
				async m() {
					return {
						icon: "$(workspace-untrusted)",
						label: (0, p.$Wi)((0, p.$1i)(this.u.getWorkspace()))
							? (0, t.localize)(3470, null)
							: (0, t.localize)(3471, null),
						actions: [
							{
								label: (0, t.localize)(3472, null),
								run: () => this.s.executeCommand("workbench.trust.manage"),
							},
						],
					};
				}
			};
			(e.$nuc = k),
				(e.$nuc =
					k =
					I =
						Ne(
							[j(1, d.$km), j(2, u.$iP), j(3, g.$ek), j(4, p.$Vi), j(5, c.$lq)],
							k,
						));
			let L = class extends P {
				static {
					T = this;
				}
				static {
					this.r = "workbench.editors.errorEditor";
				}
				static {
					this.s = (0, t.localize)(3473, null);
				}
				static {
					this.DESCRIPTOR = f.$vVb.create(T, this.r, this.s);
				}
				constructor(M, N, A, R, O, B) {
					super(T.r, M, N, A, R), (this.u = O), (this.cb = B);
				}
				async m(M, N, A) {
					const R = M.resource,
						O = N.error,
						B = O?.fileOperationResult === y.FileOperationResult.FILE_NOT_FOUND;
					let U;
					B
						? (U = (0, t.localize)(3474, null))
						: (0, E.$D1)(O) && O.forceMessage
							? (U = O.message)
							: O
								? (U = (0, t.localize)(
										3475,
										null,
										(0, i.$rf)((0, $.$xj)(O), P.a / 2),
									))
								: (U = (0, t.localize)(3476, null));
					let z = "$(error)";
					(0, E.$D1)(O) &&
						(O.forceSeverity === w.default.Info
							? (z = "$(info)")
							: O.forceSeverity === w.default.Warning && (z = "$(warning)"));
					let F;
					return (
						(0, E.$D1)(O) && O.actions.length > 0
							? (F = O.actions.map((x) => ({
									label: x.label,
									run: () => {
										const H = x.run();
										H instanceof Promise &&
											H.catch((q) => this.cb.error((0, $.$xj)(q)));
									},
								})))
							: (F = [
									{
										label: (0, t.localize)(3477, null),
										run: () =>
											this.group.openEditor(M, {
												...N,
												source: o.EditorOpenSource.USER,
											}),
									},
								]),
						B &&
							R &&
							this.u.hasProvider(R) &&
							A.add(
								this.u.onDidFilesChange((x) => {
									x.contains(
										R,
										y.FileChangeType.ADDED,
										y.FileChangeType.UPDATED,
									) && this.group.openEditor(M, N);
								}),
							),
						{ icon: z, label: U, actions: F ?? [] }
					);
				}
			};
			(e.$ouc = L),
				(e.$ouc =
					L =
					T =
						Ne(
							[j(1, d.$km), j(2, u.$iP), j(3, c.$lq), j(4, y.$ll), j(5, v.$GO)],
							L,
						));
		},
	),
		
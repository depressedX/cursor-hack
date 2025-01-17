import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/event.js';
import '../../../../base/common/severity.js';
import '../../../../base/common/lifecycle.js';
import '../../../common/editor.js';
import '../../../../base/browser/dom.js';
import '../../../../platform/registry/common/platform.js';
import '../../../services/layout/browser/layoutService.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/progress/common/progress.js';
import './editor.js';
import '../../../../base/common/types.js';
import '../../../../platform/workspace/common/workspaceTrust.js';
import './editorPlaceholder.js';
import '../../../../platform/editor/common/editor.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/errorMessage.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../services/host/browser/host.js';
define(
		de[3860],
		he([
			1, 0, 4, 6, 111, 3, 44, 7, 30, 96, 5, 84, 548, 28, 174, 1914, 116, 29,
			163, 34, 57, 87,
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
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Auc = void 0),
				(w = xi(w));
			let y = class extends E.$1c {
				get minimumWidth() {
					return this.c?.minimumWidth ?? h.$DEb.width;
				}
				get minimumHeight() {
					return this.c?.minimumHeight ?? h.$DEb.height;
				}
				get maximumWidth() {
					return this.c?.maximumWidth ?? h.$EEb.width;
				}
				get maximumHeight() {
					return this.c?.maximumHeight ?? h.$EEb.height;
				}
				get activeEditorPane() {
					return this.c;
				}
				constructor(v, S, I, T, P, k, L, D, M, N) {
					super(),
						(this.q = v),
						(this.r = S),
						(this.s = I),
						(this.t = T),
						(this.u = P),
						(this.w = k),
						(this.y = L),
						(this.z = D),
						(this.C = M),
						(this.F = N),
						(this.a = this.D(new i.$re())),
						(this.onDidFocus = this.a.event),
						(this.b = this.D(new i.$re())),
						(this.onDidChangeSizeConstraints = this.b.event),
						(this.c = null),
						(this.f = []),
						(this.g = this.D(new E.$Zc())),
						(this.m = this.D(new a.$aO(this.w))),
						(this.n = m.$Io.as(C.$a1.EditorPane)),
						this.G();
				}
				G() {
					this.D(this.y.onDidChangeTrust(() => this.H()));
				}
				H() {
					const v = this.c?.input,
						S = this.c?.options;
					v?.hasCapability(C.EditorInputCapabilities.RequiresTrust) &&
						this.s.openEditor(v, S);
				}
				async openEditor(v, S, I, T = Object.create(null)) {
					try {
						return await this.L(this.N(v), v, S, I, T);
					} catch (P) {
						return S?.ignoreError ? { error: P } : this.I(P, v, S, I, T);
					}
				}
				async I(v, S, I, T, P) {
					this.z.error(v);
					let k = !1;
					if (
						(I?.source === p.EditorOpenSource.USER &&
							(!(0, C.$D1)(v) || v.allowDialog) &&
							(k = await this.J(v, S)),
						k)
					)
						return { error: v };
					const L = { ...I };
					return (
						(0, o.$8)(v) || (L.error = v),
						{ ...(await this.L(g.$ouc.DESCRIPTOR, S, L, T, P)), error: v }
					);
				}
				async J(v, S) {
					let I = w.default.Error,
						T,
						P = (0, f.$xj)(v),
						k;
					(0, C.$D1)(v) &&
						((k = v.actions),
						(I = v.forceSeverity ?? w.default.Error),
						v.forceMessage && ((T = v.message), (P = void 0))),
						T || (T = (0, t.localize)(3466, null, S.getName()));
					const L = [];
					if (k && k.length > 0)
						for (const A of k) L.push({ label: A.label, run: () => A });
					else L.push({ label: (0, t.localize)(3467, null), run: () => {} });
					let D;
					L.length === 1 &&
						(D = {
							run: () => {
								M = !0;
							},
						});
					let M = !1;
					const { result: N } = await this.C.prompt({
						type: I,
						message: T,
						detail: P,
						buttons: L,
						cancelButton: D,
					});
					if (N) {
						const A = N.run();
						A instanceof Promise && A.catch((R) => this.C.error((0, f.$xj)(R))),
							(M = !0);
					}
					return M;
				}
				async L(v, S, I, T, P = Object.create(null)) {
					const k = this.O(v),
						L = (0, d.$Jgb)(),
						{ changed: D, cancelled: M } = await this.S(k, S, I, P);
					return (
						M ||
							((!I || !I.preserveFocus) && this.M(L)
								? k.focus()
								: T?.preserveWindowOrder ||
									this.F.moveTop(
										(0, d.getWindowById)(this.s.windowId, !0).window,
									)),
						{ pane: k, changed: D, cancelled: M }
					);
				}
				M(v) {
					if (!this.t.isRestored() || !v) return !0;
					const S = (0, d.$Jgb)();
					return !!(
						!S ||
						S === v.ownerDocument.body ||
						v === S ||
						(S.tagName !== "INPUT" && S.tagName !== "TEXTAREA") ||
						(0, d.$Bgb)(S, this.q)
					);
				}
				N(v) {
					return v.hasCapability(C.EditorInputCapabilities.RequiresTrust) &&
						!this.y.isWorkspaceTrusted()
						? g.$nuc.DESCRIPTOR
						: (0, c.$wg)(this.n.getEditorPane(v));
				}
				O(v) {
					if (this.c && v.describes(this.c)) return this.c;
					this.U();
					const S = this.P(v);
					this.R(S);
					const I = (0, c.$wg)(S.getContainer());
					return (
						this.r.appendChild(I),
						(0, d.show)(I),
						S.setVisible(!0),
						this.h &&
							S.layout(new d.$pgb(this.h.width, this.h.height), {
								top: this.h.top,
								left: this.h.left,
							}),
						this.j && S.setBoundarySashes(this.j),
						S
					);
				}
				P(v) {
					const S = this.Q(v);
					if (!S.getContainer()) {
						const I = document.createElement("div");
						I.classList.add("editor-instance"),
							this.r.appendChild(I),
							S.create(I);
					}
					return S;
				}
				Q(v) {
					const S = this.f.find((T) => v.describes(T));
					if (S) return S;
					const I = this.D(v.instantiate(this.u, this.s));
					return this.f.push(I), I;
				}
				R(v) {
					(this.c = v),
						this.g.clear(),
						v &&
							(this.g.add(v.onDidChangeSizeConstraints((S) => this.b.fire(S))),
							this.g.add(v.onDidFocus(() => this.a.fire()))),
						this.b.fire(void 0);
				}
				async S(v, S, I, T) {
					const P = v.input?.matches(S);
					if (P && !I?.forceReload)
						return v.setOptions(I), { changed: !1, cancelled: !1 };
					const k = this.m.start(this.t.isRestored() ? 800 : 3200);
					let L = !1;
					try {
						v.clearInput(),
							await v.setInput(S, I, T, k.token),
							k.isCurrent() || (L = !0);
					} catch (D) {
						if (!k.isCurrent()) L = !0;
						else throw D;
					} finally {
						k.stop();
					}
					return { changed: !P, cancelled: L };
				}
				U() {
					if (!this.c) return;
					this.m.stop(),
						this.W(() => this.c?.clearInput()),
						this.W(() => this.c?.setVisible(!1));
					const v = this.c.getContainer();
					v && (v.remove(), (0, d.hide)(v)), this.R(null);
				}
				closeEditor(v) {
					this.c?.input && v.matches(this.c.input) && this.U();
				}
				setVisible(v) {
					this.W(() => this.c?.setVisible(v));
				}
				layout(v) {
					(this.h = v),
						this.W(() => this.c?.layout(new d.$pgb(v.width, v.height), v));
				}
				setBoundarySashes(v) {
					(this.j = v), this.W(() => this.c?.setBoundarySashes(v));
				}
				W(v) {
					try {
						v();
					} catch (S) {
						this.z.error(S);
					}
				}
			};
			(e.$Auc = y),
				(e.$Auc = y =
					Ne(
						[
							j(3, r.$mEb),
							j(4, u.$Li),
							j(5, a.$bO),
							j(6, n.$pO),
							j(7, b.$ik),
							j(8, s.$GO),
							j(9, l.$asb),
						],
						y,
					));
		},
	),
		
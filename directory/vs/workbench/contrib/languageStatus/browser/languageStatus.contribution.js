import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/iconLabel/iconLabels.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/severity.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../nls.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../base/common/themables.js';
import '../../../common/contributions.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/languageStatus/common/languageStatusService.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../services/statusbar/browser/statusbar.js';
import '../../../../base/common/linkedText.js';
import '../../../../platform/opener/browser/link.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../base/common/htmlContent.js';
import '../../../../base/browser/ui/actionbar/actionbar.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/codicons.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/uri.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/action/common/actionCommonCategories.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../base/common/event.js';
import '../../../../css!vs/workbench/contrib/languageStatus/browser/media/languageStatus.js';
define(
		de[3633],
		he([
			1, 0, 7, 182, 3, 111, 56, 4, 30, 26, 55, 18, 1024, 52, 166, 488, 497, 41,
			94, 105, 50, 14, 21, 24, 9, 11, 99, 66, 72, 6, 2448,
		]),
		function (			ce /*require*/,
			e /*exports*/,
			t /*dom*/,
			i /*iconLabels*/,
			w /*lifecycle*/,
			E /*severity*/,
			C /*editorBrowser*/,
			d /*nls*/,
			m /*platform*/,
			r /*themables*/,
			u /*contributions*/,
			a /*editorService*/,
			h /*languageStatusService*/,
			c /*lifecycle*/,
			n /*statusbar*/,
			g /*linkedText*/,
			p /*link*/,
			o /*opener*/,
			f /*htmlContent*/,
			b /*actionbar*/,
			s /*actions*/,
			l /*codicons*/,
			y /*storage*/,
			$ /*arrays*/,
			v /*uri*/,
			S /*actions*/,
			I /*actionCommonCategories*/,
			T /*editorGroupsService*/,
			P /*hover*/,
			k /*event*/,
) {
			"use strict";
			var L;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(t = mt(t)),
				(E = xi(E));
			class D {
				constructor(O, B) {
					(this.combined = O), (this.dedicated = B);
				}
				isEqual(O) {
					return (
						(0, $.$yb)(this.combined, O.combined) &&
						(0, $.$yb)(this.dedicated, O.dedicated)
					);
				}
			}
			let M = class {
				constructor(O, B) {
					(this.a = O), (this.b = B);
				}
				get value() {
					return this.a.getNumber(this.b, y.StorageScope.PROFILE, 0);
				}
				increment() {
					const O = this.value + 1;
					return (
						this.a.store(
							this.b,
							O,
							y.StorageScope.PROFILE,
							y.StorageTarget.MACHINE,
						),
						O
					);
				}
			};
			M = Ne([j(0, y.$lq)], M);
			let N = class extends w.$1c {
				constructor(O) {
					super(), (this.a = O);
					for (const B of O.parts) this.b(B);
					this.D(O.onDidCreateAuxiliaryEditorPart((B) => this.b(B)));
				}
				b(O) {
					const B = new w.$Zc();
					k.Event.once(O.onWillDispose)(() => B.dispose());
					const U = this.a.getScopedInstantiationService(O);
					B.add(U.createInstance(A));
				}
			};
			N = Ne([j(0, T.$EY)], N);
			let A = class {
				static {
					L = this;
				}
				static {
					this.a = "status.languageStatus";
				}
				static {
					this.b = "languageStatus.dedicated";
				}
				constructor(O, B, U, z, F, x) {
					(this.k = O),
						(this.l = B),
						(this.m = U),
						(this.o = z),
						(this.p = F),
						(this.q = x),
						(this.c = new w.$Zc()),
						(this.f = new Set()),
						(this.i = new Map()),
						(this.j = new w.$Zc()),
						x.onDidChangeValue(y.StorageScope.PROFILE, L.b, this.c)(
							this.r,
							this,
							this.c,
						),
						this.s(),
						(this.d = new M(x, "languageStatus.interactCount")),
						O.onDidChange(this.v, this, this.c),
						U.onDidActiveEditorChange(this.v, this, this.c),
						this.v(),
						B.onDidChangeEntryVisibility(
							(H) => {
								!H.visible &&
									this.f.has(H.id) &&
									(this.f.delete(H.id), this.v(), this.t());
							},
							void 0,
							this.c,
						);
				}
				dispose() {
					this.c.dispose(),
						this.h?.dispose(),
						(0, w.$Vc)(this.i.values()),
						this.j.dispose();
				}
				r() {
					this.s(), this.v();
				}
				s() {
					const O = this.q.get(L.b, y.StorageScope.PROFILE, "[]");
					try {
						const B = JSON.parse(O);
						this.f = new Set(B);
					} catch {
						this.f.clear();
					}
				}
				t() {
					if (this.f.size === 0) this.q.remove(L.b, y.StorageScope.PROFILE);
					else {
						const O = JSON.stringify(Array.from(this.f.keys()));
						this.q.store(L.b, O, y.StorageScope.PROFILE, y.StorageTarget.USER);
					}
				}
				u(O) {
					if (!O?.hasModel()) return new D([], []);
					const B = this.k.getLanguageStatus(O.getModel()),
						U = [],
						z = [];
					for (const F of B) this.f.has(F.id) && z.push(F), U.push(F);
					return new D(U, z);
				}
				v() {
					const O = (0, C.$btb)(this.m.activeTextEditorControl),
						B = this.u(O);
					if (this.g?.isEqual(B)) return;
					if (
						(this.j.clear(),
						(this.g = B),
						O?.onDidChangeModelLanguage(this.v, this, this.j),
						B.combined.length === 0)
					)
						this.h?.dispose(), (this.h = void 0);
					else {
						const [z] = B.combined,
							F = z.severity >= E.default.Warning,
							x = L.x(z.severity);
						let H = !1;
						const q = [],
							V = document.createElement("div");
						for (const Y of B.combined) {
							const ie = B.dedicated.includes(Y);
							V.appendChild(this.w(Y, F, ie, this.j)),
								q.push(L.A(Y).label),
								(H = H || (!ie && Y.busy));
						}
						const G = {
							name: (0, d.localize)(7333, null),
							ariaLabel: (0, d.localize)(7334, null, q.join(", next: ")),
							tooltip: V,
							command: n.$g6b,
							text: H ? `${x}\xA0\xA0$(sync~spin)` : x,
						};
						this.h
							? this.h.update(G)
							: (this.h = this.l.addEntry(G, L.a, n.StatusbarAlignment.RIGHT, {
									id: "status.editor.mode",
									alignment: n.StatusbarAlignment.LEFT,
									compact: !0,
								}));
						const K = this.d.value >= 3,
							J = t.getWindow(O?.getContainerDomNode()),
							W = J.document.querySelector(
								".monaco-workbench .statusbar DIV#status\\.languageStatus A>SPAN.codicon",
							),
							X = J.document.querySelector(
								".monaco-workbench .statusbar DIV#status\\.languageStatus",
							);
						if (t.$Ygb(W) && X) {
							const Y = "wiggle",
								ie = "flash";
							H
								? (W.classList.remove(Y), X.classList.remove(ie))
								: (W.classList.toggle(Y, F || !K),
									this.j.add(
										t.$0fb(W, "animationend", (ne) => W.classList.remove(Y)),
									),
									X.classList.toggle(ie, F),
									this.j.add(
										t.$0fb(X, "animationend", (ne) => X.classList.remove(ie)),
									));
						}
						if (!K) {
							const Y = J.document.querySelector(
								".monaco-workbench .context-view",
							);
							if (t.$Ygb(Y)) {
								const ie = new MutationObserver(() => {
									J.document.contains(V) &&
										(this.d.increment(), ie.disconnect());
								});
								ie.observe(Y, { childList: !0, subtree: !0 }),
									this.j.add((0, w.$Yc)(() => ie.disconnect()));
							}
						}
					}
					const U = new Map();
					for (const z of B.dedicated) {
						const F = L.B(z);
						let x = this.i.get(z.id);
						x
							? (x.update(F), this.i.delete(z.id))
							: (x = this.l.addEntry(F, z.id, n.StatusbarAlignment.RIGHT, {
									id: "status.editor.mode",
									alignment: n.StatusbarAlignment.RIGHT,
								})),
							U.set(z.id, x);
					}
					(0, w.$Vc)(this.i.values()), (this.i = U);
				}
				w(O, B, U, z) {
					const F = document.createElement("div");
					F.classList.add("hover-language-status");
					const x = document.createElement("div");
					x.classList.add("severity", `sev${O.severity}`),
						x.classList.toggle("show", B);
					const H = L.y(O.severity);
					t.$fhb(x, ...(0, i.$Sib)(H)), F.appendChild(x);
					const q = document.createElement("div");
					q.classList.add("element"), F.appendChild(q);
					const V = document.createElement("div");
					V.classList.add("left"), q.appendChild(V);
					const G = document.createElement("span");
					G.classList.add("label");
					const K = typeof O.label == "string" ? O.label : O.label.value;
					t.$fhb(G, ...(0, i.$Sib)(O.busy ? `$(sync~spin)\xA0\xA0${K}` : K)),
						V.appendChild(G);
					const J = document.createElement("span");
					J.classList.add("detail"), this.z(J, O.detail, z), V.appendChild(J);
					const W = document.createElement("div");
					W.classList.add("right"), q.appendChild(W);
					const { command: X } = O;
					X &&
						z.add(
							new p.Link(
								W,
								{
									label: X.title,
									title: X.tooltip,
									href: v.URI.from({
										scheme: "command",
										path: X.id,
										query: X.arguments && JSON.stringify(X.arguments),
									}).toString(),
								},
								{ hoverDelegate: P.$Wyb },
								this.o,
								this.p,
							),
						);
					const Y = new b.$eib(W, { hoverDelegate: P.$Wyb });
					z.add(Y);
					let ie;
					return (
						U
							? (ie = new s.$rj(
									"unpin",
									(0, d.localize)(7336, null),
									r.ThemeIcon.asClassName(l.$ak.pinned),
									!0,
									() => {
										this.f.delete(O.id),
											this.l.updateEntryVisibility(O.id, !1),
											this.v(),
											this.t();
									},
								))
							: (ie = new s.$rj(
									"pin",
									(0, d.localize)(7335, null),
									r.ThemeIcon.asClassName(l.$ak.pin),
									!0,
									() => {
										this.f.add(O.id),
											this.l.updateEntryVisibility(O.id, !0),
											this.v(),
											this.t();
									},
								)),
						Y.push(ie, { icon: !0, label: !1 }),
						z.add(ie),
						F
					);
				}
				static x(O) {
					switch (O) {
						case E.default.Error:
							return "$(bracket-error)";
						case E.default.Warning:
							return "$(bracket-dot)";
						default:
							return "$(bracket)";
					}
				}
				static y(O) {
					switch (O) {
						case E.default.Error:
							return "$(error)";
						case E.default.Warning:
							return "$(info)";
						default:
							return "$(check)";
					}
				}
				z(O, B, U) {
					for (const z of (0, g.$Zpb)(B).nodes)
						if (typeof z == "string") {
							const F = (0, i.$Sib)(z);
							t.$fhb(O, ...F);
						} else U.add(new p.Link(O, z, void 0, this.o, this.p));
				}
				static A(O) {
					if (O.accessibilityInfo) return O.accessibilityInfo;
					const B = typeof O.label == "string" ? O.label : O.label.value;
					return O.detail
						? { label: (0, d.localize)(7337, null, B, O.detail) }
						: { label: (0, d.localize)(7338, null, B) };
				}
				static B(O) {
					let B;
					O.severity === E.default.Warning
						? (B = "warning")
						: O.severity === E.default.Error && (B = "error");
					const U = typeof O.label == "string" ? O.label : O.label.shortValue;
					return {
						name: (0, d.localize)(7339, null, O.name),
						text: O.busy ? `${U}\xA0\xA0$(sync~spin)` : U,
						ariaLabel: L.A(O).label,
						role: O.accessibilityInfo?.role,
						tooltip:
							O.command?.tooltip ||
							new f.$cl(O.detail, { isTrusted: !0, supportThemeIcons: !0 }),
						kind: B,
						command: O.command,
					};
				}
			};
			(A = L =
				Ne(
					[
						j(0, h.$c8),
						j(1, n.$d6b),
						j(2, a.$IY),
						j(3, P.$Uyb),
						j(4, o.$7rb),
						j(5, y.$lq),
					],
					A,
				)),
				m.$Io
					.as(u.Extensions.Workbench)
					.registerWorkbenchContribution(N, c.LifecyclePhase.Restored),
				(0, S.$4X)(
					class extends S.$3X {
						constructor() {
							super({
								id: "editor.inlayHints.Reset",
								title: (0, d.localize2)(
									7340,
									"Reset Language Status Interaction Counter",
								),
								category: I.$ck.View,
								f1: !0,
							});
						}
						run(R) {
							R.get(y.$lq).remove(
								"languageStatus.interactCount",
								y.StorageScope.PROFILE,
							);
						}
					},
				);
		},
	),
		
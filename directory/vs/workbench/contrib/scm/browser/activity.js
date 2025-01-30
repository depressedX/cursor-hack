import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/event.js';
import '../common/scm.js';
import '../../../services/activity/common/activity.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../services/statusbar/browser/statusbar.js';
import '../../../services/editor/common/editorService.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../common/editor.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../base/common/iterator.js';
import '../../../services/title/browser/titleService.js';
import '../../../services/editor/common/editorGroupsService.js';
import './util.js';
import '../../../../base/common/observable.js';
import '../../../../platform/observable/common/platformObservableUtils.js';
import '../../../../base/common/observableInternal/utils.js';
define(
			de[3741],
			he([
				1, 0, 4, 19, 3, 6, 258, 260, 8, 166, 18, 10, 44, 68, 103, 713, 66, 614,
				77, 326, 457,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*resources*/,
				w /*lifecycle*/,
				E /*event*/,
				C /*scm*/,
				d /*activity*/,
				m /*contextkey*/,
				r /*statusbar*/,
				u /*editorService*/,
				a /*configuration*/,
				h /*editor*/,
				c /*uriIdentity*/,
				n /*iterator*/,
				g /*titleService*/,
				p /*editorGroupsService*/,
				o /*util*/,
				f /*observable*/,
				b /*platformObservableUtils*/,
				s /*utils*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$KPc = e.$JPc = void 0);
				const l = {
					ActiveRepositoryName: new m.$5j("scmActiveRepositoryName", ""),
					ActiveRepositoryBranchName: new m.$5j(
						"scmActiveRepositoryBranchName",
						"",
					),
				};
				let y = class extends w.$1c {
					constructor(S, I, T, P, k, L, D, M) {
						super(),
							(this.s = S),
							(this.t = I),
							(this.u = T),
							(this.w = P),
							(this.y = k),
							(this.z = L),
							(this.C = D),
							(this.F = M),
							(this.a = (0, b.$Mwb)("scm.countBadge", "all", this.t)),
							(this.b = (0, f.observableFromEvent)(
								this,
								E.Event.any(
									this.y.onDidAddRepository,
									this.y.onDidRemoveRepository,
								),
								() => this.y.repositories,
							)),
							(this.c = (0, s.$zd)(
								{ owner: this, equalsFn: () => !1 },
								this.z.onDidFocusRepository,
								() => this.z.focusedRepository,
							)),
							(this.f = (0, s.$zd)(
								{ owner: this, equalsFn: () => !1 },
								this.w.onDidActiveEditorChange,
								() => this.w.activeEditor,
							)),
							(this.g = (0, s.$Jd)(this, (N, A) => {
								const R = h.$A1.getOriginalUri(this.f.read(N));
								if (!R) return A;
								const O = this.y.getRepository(R);
								return O ? Object.create(O) : A;
							})),
							(this.h = (0, s.$Od)(this, [this.g, this.c])),
							(this.j = (0, f.derived)(this, (N) => {
								switch (this.a.read(N)) {
									case "all": {
										const A = this.b.read(N);
										return [
											...n.Iterable.map(A, (R) => ({
												provider: R.provider,
												resourceCount: this.G(R),
											})),
										];
									}
									case "focused": {
										const A = this.h.read(N);
										return A
											? [{ provider: A.provider, resourceCount: this.G(A) }]
											: [];
									}
									case "off":
										return [];
									default:
										throw new Error("Invalid countBadge setting");
								}
							})),
							(this.m = (0, f.derived)(this, (N) => {
								let A = 0;
								for (const R of this.j.read(N)) {
									const O = R.provider.count?.read(N),
										B = R.resourceCount.read(N);
									A = A + (O ?? B);
								}
								return A;
							})),
							(this.n = l.ActiveRepositoryName.bindTo(this.u)),
							(this.q = l.ActiveRepositoryBranchName.bindTo(this.u)),
							this.F.registerVariables([
								{
									name: "activeRepositoryName",
									contextKey: l.ActiveRepositoryName.key,
								},
								{
									name: "activeRepositoryBranchName",
									contextKey: l.ActiveRepositoryBranchName.key,
								},
							]),
							this.D(
								(0, f.autorunWithStore)((N, A) => {
									this.H(this.m.read(N), A);
								}),
							),
							this.D(
								(0, f.autorunWithStore)((N, A) => {
									const R = this.h.read(N),
										O = R?.provider.statusBarCommands.read(N);
									this.I(R, O ?? [], A);
								}),
							),
							this.D(
								(0, f.autorun)((N) => {
									const A = this.h.read(N),
										O = A?.provider.historyProvider
											.read(N)
											?.currentHistoryItemGroupName.read(N);
									this.J(A?.provider.name, O);
								}),
							);
					}
					G(S) {
						return (0, f.observableFromEvent)(
							this,
							S.provider.onDidChangeResources,
							() => (0, o.$IPc)(S.provider),
						);
					}
					H(S, I) {
						if (S === 0) return;
						const T = new d.$8qc(S, (P) => (0, t.localize)(8963, null, P));
						I.add(this.s.showViewActivity(C.$_6, { badge: T }));
					}
					I(S, I, T) {
						if (!S) return;
						const P = S.provider.rootUri
							? `${(0, i.$kh)(S.provider.rootUri)} (${S.provider.label})`
							: S.provider.label;
						for (let k = 0; k < I.length; k++) {
							const L = I[k],
								D = `${P}${L.tooltip ? ` - ${L.tooltip}` : ""}`;
							let M = L.arguments?.[0];
							M && typeof M == "string"
								? ((M = M.substring(0, M.lastIndexOf("/")).replace(
										/^git\./,
										"",
									)),
									M.length > 1 && (M = M[0].toLocaleUpperCase() + M.slice(1)))
								: (M = "");
							const N = {
								name: (0, t.localize)(8964, null) + (M ? ` ${M}` : ""),
								text: L.title,
								ariaLabel: D,
								tooltip: D,
								command: L.id ? L : void 0,
							};
							T.add(
								k === 0
									? this.C.addEntry(
											N,
											`status.scm.${k}`,
											r.StatusbarAlignment.LEFT,
											1e4,
										)
									: this.C.addEntry(
											N,
											`status.scm.${k}`,
											r.StatusbarAlignment.LEFT,
											{
												id: `status.scm.${k - 1}`,
												alignment: r.StatusbarAlignment.RIGHT,
												compact: !0,
											},
										),
							);
						}
					}
					J(S, I) {
						this.n.set(S ?? ""), this.q.set(I ?? "");
					}
				};
				(e.$JPc = y),
					(e.$JPc = y =
						Ne(
							[
								j(0, d.$7qc),
								j(1, a.$gj),
								j(2, m.$6j),
								j(3, u.$IY),
								j(4, C.$c7),
								j(5, C.$d7),
								j(6, r.$d6b),
								j(7, g.$Wqc),
							],
							y,
						));
				let $ = class extends w.$1c {
					constructor(S, I, T) {
						super(),
							(this.c = I),
							(this.f = T),
							(this.a = (0, f.observableFromEvent)(
								this,
								E.Event.any(
									this.c.onDidAddRepository,
									this.c.onDidRemoveRepository,
								),
								() => this.c.repositories,
							)),
							(this.b = new E.$re());
						const P = new m.$5j(
								"scmActiveResourceHasChanges",
								!1,
								(0, t.localize)(8965, null),
							),
							k = new m.$5j(
								"scmActiveResourceRepository",
								void 0,
								(0, t.localize)(8966, null),
							);
						this.B.add(
							(0, f.autorunWithStore)((M, N) => {
								for (const A of this.a.read(M))
									N.add(
										E.Event.runAndSubscribe(
											A.provider.onDidChangeResources,
											() => {
												this.b.fire();
											},
										),
									);
							}),
						);
						const L = {
								contextKey: P,
								getGroupContextKeyValue: (M) => this.g(M.activeEditor),
								onDidChange: this.b.event,
							},
							D = {
								contextKey: k,
								getGroupContextKeyValue: (M) => this.h(M.activeEditor),
								onDidChange: this.b.event,
							};
						this.B.add(S.registerContextKeyProvider(L)),
							this.B.add(S.registerContextKeyProvider(D));
					}
					g(S) {
						const I = h.$A1.getOriginalUri(S);
						if (!I) return !1;
						const T = this.c.getRepository(I);
						for (const P of T?.provider.groups ?? [])
							if (
								P.resources.some((k) => this.f.extUri.isEqual(I, k.sourceUri))
							)
								return !0;
						return !1;
					}
					h(S) {
						const I = h.$A1.getOriginalUri(S);
						return I ? this.c.getRepository(I)?.id : void 0;
					}
					dispose() {
						this.b.dispose(), super.dispose();
					}
				};
				(e.$KPc = $),
					(e.$KPc = $ = Ne([j(0, p.$EY), j(1, C.$c7), j(2, c.$Vl)], $));
			},
		),
		
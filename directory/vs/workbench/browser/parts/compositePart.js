import '../../../../require.js';
import '../../../../exports.js';
import '../../../nls.js';
import '../../../base/common/idGenerator.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/event.js';
import '../../../base/common/errors.js';
import '../../../base/browser/ui/actionbar/actionbar.js';
import '../../../base/browser/ui/progressbar/progressbar.js';
import '../part.js';
import '../../../platform/storage/common/storage.js';
import '../../../platform/instantiation/common/serviceCollection.js';
import '../../../platform/progress/common/progress.js';
import '../../../base/browser/dom.js';
import '../../../base/browser/ui/contextview/contextview.js';
import '../../../base/common/types.js';
import '../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../services/progress/browser/progressIndicator.js';
import '../../../platform/actions/browser/toolbar.js';
import '../../../platform/theme/browser/defaultStyles.js';
import '../../../base/browser/ui/hover/hoverDelegateFactory.js';
import '../../../css!vs/workbench/browser/parts/media/compositepart.js';
define(
			de[3540],
			he([
				1, 0, 4, 584, 3, 6, 29, 105, 436, 550, 21, 128, 84, 7, 276, 28, 92, 707,
				173, 106, 95, 2348,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*idGenerator*/,
				w /*lifecycle*/,
				E /*event*/,
				C /*errors*/,
				d /*actionbar*/,
				m /*progressbar*/,
				r /*part*/,
				u /*storage*/,
				a /*serviceCollection*/,
				h /*progress*/,
				c /*dom*/,
				n /*contextview*/,
				g /*types*/,
				p /*menuEntryActionViewItem*/,
				o /*progressIndicator*/,
				f /*toolbar*/,
				b /*defaultStyles*/,
				s /*hoverDelegateFactory*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Kuc = void 0);
				class l extends r.Part {
					constructor($, v, S, I, T, P, k, L, D, M, N, A, R, O, B, U) {
						super(B, U, L, v, I),
							(this.pb = $),
							(this.qb = v),
							(this.rb = S),
							(this.sb = T),
							(this.tb = P),
							(this.ub = k),
							(this.vb = D),
							(this.wb = M),
							(this.xb = N),
							(this.yb = A),
							(this.zb = R),
							(this.Ab = O),
							(this.b = this.D(new E.$re())),
							(this.y = this.D(new E.$re())),
							(this.eb = new Map()),
							(this.fb = new Map()),
							(this.ib = new Map()),
							(this.mb = this.D(new w.$2c())),
							(this.hb = v.get(M, u.StorageScope.WORKSPACE, this.xb)),
							(this.db = this.D((0, s.$dib)()));
					}
					Bb($, v) {
						if (this.gb?.getId() === $) return v && this.gb.focus(), this.gb;
						if (this.element) return this.Cb($, v);
					}
					Cb($, v = !1) {
						const S = i.$Sdb.nextId();
						(this.nb = S), this.gb && this.Kb(), this.Gb($);
						const I = this.Db($, !0);
						if (!(this.nb !== S || (this.gb && this.gb.getId() !== I.getId())))
							return this.gb?.getId() === I.getId()
								? (v && I.focus(), this.b.fire({ composite: I, focus: v }), I)
								: (this.Eb(I),
									v && I.focus(),
									I && this.b.fire({ composite: I, focus: v }),
									I);
					}
					Db($, v) {
						const S = this.ib.get($);
						if (S) return S.composite;
						const I = this.vb.getComposite($);
						if (I) {
							const T = this,
								P = new o.$KMb(
									(0, g.$wg)(this.kb),
									new (class extends o.$LMb {
										constructor() {
											super(I.id, !!v),
												this.D(T.b.event((M) => this.g(M.composite.getId()))),
												this.D(T.y.event((M) => this.h(M.getId())));
										}
									})(),
								),
								k = this.D(this.ub.createChild(new a.$Ki([h.$bO, P]))),
								L = I.instantiate(k),
								D = new w.$Zc();
							return (
								this.ib.set($, { composite: L, disposable: D, progress: P }),
								D.add(L.onTitleAreaUpdate(() => this.Fb(L.getId()), this)),
								D.add(k),
								L
							);
						}
						throw new Error(`Unable to find composite with id ${$}`);
					}
					Eb($) {
						this.gb = $;
						const v = this.gb.getId();
						v !== this.xb
							? this.qb.store(
									this.wb,
									v,
									u.StorageScope.WORKSPACE,
									u.StorageTarget.MACHINE,
								)
							: this.qb.remove(this.wb, u.StorageScope.WORKSPACE),
							(this.hb = this.gb.getId());
						let S = this.eb.get($.getId());
						if (
							(S ||
								((S = (0, c.$)(".composite")),
								S.classList.add(...this.zb.split(" ")),
								(S.id = $.getId()),
								$.create(S),
								$.updateStyles(),
								this.eb.set($.getId(), S)),
							!this.gb || $.getId() !== this.gb.getId())
						)
							return;
						this.R()?.appendChild(S), (0, c.show)(S);
						const T = (0, g.$wg)(this.bb);
						T.actionRunner = $.getActionRunner();
						const P = this.vb.getComposite($.getId());
						P && P.name !== $.getTitle() && this.Gb($.getId(), $.getTitle());
						let k = this.fb.get($.getId());
						k || ((k = this.Hb($)), this.fb.set($.getId(), k)),
							k(),
							(this.mb.value = T.actionRunner.onDidRun((L) => {
								L.error && !(0, C.$8)(L.error) && this.pb.error(L.error);
							})),
							$.setVisible(!0),
							!(!this.gb || $.getId() !== this.gb.getId()) &&
								(this.lb && $.layout(this.lb),
								this.ob && $.setBoundarySashes(this.ob));
					}
					Fb($) {
						const v = this.ib.get($);
						if (
							(v && this.Gb($, v.composite.getTitle()), this.gb?.getId() === $)
						) {
							const S = this.Hb(this.gb);
							this.fb.set(this.gb.getId(), S), S();
						} else this.fb.delete($);
					}
					Gb($, v) {
						const S = this.vb.getComposite($);
						if (!S || !this.jb) return;
						v || (v = S.name);
						const I = this.sb.lookupKeybinding($);
						this.jb.updateTitle($, v, I?.getLabel() ?? void 0),
							(0, g.$wg)(this.bb).setAriaLabel((0, t.localize)(3057, null, v));
					}
					Hb($) {
						const v = $?.getMenuIds(),
							S = $?.getActions().slice(0) || [],
							I = $?.getSecondaryActions().slice(0) || [],
							T = (0, g.$wg)(this.bb);
						return (
							(T.context = this.Qb()),
							() => T.setActions((0, d.$fib)(S), (0, d.$fib)(I), v)
						);
					}
					Ib() {
						return this.gb;
					}
					Jb() {
						return this.hb;
					}
					Kb() {
						if (!this.gb) return;
						const $ = this.gb;
						this.gb = void 0;
						const v = this.eb.get($.getId());
						return (
							$.setVisible(!1),
							v && (v.remove(), (0, c.hide)(v)),
							this.kb?.stop().hide(),
							this.bb && this.Hb()(),
							this.y.fire($),
							$
						);
					}
					O($) {
						const v = (0, c.$fhb)($, (0, c.$)(".composite"));
						v.classList.add("title"), (this.jb = this.Mb(v));
						const S = (0, c.$fhb)(v, (0, c.$)(".title-actions"));
						return (
							(this.bb = this.D(
								this.ub.createInstance(f.$Syb, S, {
									actionViewItemProvider: (I, T) => this.Pb(I, T),
									orientation: d.ActionsOrientation.HORIZONTAL,
									getKeyBinding: (I) => this.sb.lookupKeybinding(I.id),
									anchorAlignmentProvider: () => this.Sb(),
									toggleMenuTitle: (0, t.localize)(3058, null),
									telemetrySource: this.yb,
									hoverDelegate: this.db,
								}),
							)),
							this.Hb()(),
							v
						);
					}
					Mb($) {
						const v = (0, c.$fhb)($, (0, c.$)(".title-label")),
							S = (0, c.$fhb)(v, (0, c.$)("h2"));
						this.cb = S;
						const I = this.D(
								this.tb.setupManagedHover((0, s.$cib)("mouse"), S, ""),
							),
							T = this;
						return {
							updateTitle: (P, k, L) => {
								(!this.gb || this.gb.getId() === P) &&
									((S.innerText = k),
									I.update(L ? (0, t.localize)(3059, null, k, L) : k));
							},
							updateStyles: () => {
								S.style.color = (T.Ab && T.w(T.Ab)) || "";
							},
						};
					}
					Nb() {
						return (0, c.$)(".composite");
					}
					Ob() {
						return (0, c.$)(".composite");
					}
					updateStyles() {
						super.updateStyles(), (0, g.$wg)(this.jb).updateStyles();
					}
					Pb($, v) {
						return this.gb
							? this.gb.getActionViewItem($, v)
							: (0, p.$Pyb)(this.ub, $, v);
					}
					Qb() {
						return this.gb ? this.gb.getActionsContext() : null;
					}
					Q($) {
						const v = (0, c.$fhb)($, (0, c.$)(".content"));
						return (this.kb = this.D(new m.$bpb(v, b.$nyb))), this.kb.hide(), v;
					}
					getProgressIndicator($) {
						const v = this.ib.get($);
						return v ? v.progress : void 0;
					}
					Sb() {
						return n.AnchorAlignment.RIGHT;
					}
					layout($, v, S, I) {
						super.layout($, v, S, I),
							(this.lb = c.$pgb.lift(super.Z($, v).contentSize)),
							this.gb?.layout(this.lb);
					}
					setBoundarySashes($) {
						(this.ob = $), this.gb?.setBoundarySashes($);
					}
					Tb($) {
						if (this.gb?.getId() === $) return !1;
						this.eb.delete($), this.fb.delete($);
						const v = this.ib.get($);
						return (
							v &&
								(v.composite.dispose(),
								(0, w.$Vc)(v.disposable),
								this.ib.delete($)),
							!0
						);
					}
					dispose() {
						this.eb.clear(),
							this.fb.clear(),
							this.ib.forEach(($) => {
								$.composite.dispose(), (0, w.$Vc)($.disposable);
							}),
							this.ib.clear(),
							super.dispose();
					}
				}
				e.$Kuc = l;
			},
		)

import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/browser/dom.js';
import '../../../../../../base/browser/ui/aria/aria.js';
import '../../../../../../base/common/keyCodes.js';
import '../../../../../../base/common/lazy.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../../base/common/strings.js';
import '../../../../../../editor/contrib/find/browser/findModel.js';
import '../../../../../../editor/contrib/find/browser/findState.js';
import '../../../../../../editor/contrib/find/browser/findWidget.js';
import '../../../../../../nls.js';
import '../../../../../../platform/configuration/common/configuration.js';
import '../../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../../platform/contextview/browser/contextView.js';
import '../../../../../../platform/hover/browser/hover.js';
import '../../../../../../platform/instantiation/common/instantiation.js';
import './findModel.js';
import './notebookFindReplaceWidget.js';
import '../../notebookBrowser.js';
import '../../../common/notebookContextKeys.js';
define(
			de[1304],
			he([
				1, 0, 7, 127, 27, 149, 3, 37, 547, 786, 961, 4, 10, 8, 49, 72, 5, 1030,
				1839, 108, 176,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*aria*/,
				w /*keyCodes*/,
				E /*lazy*/,
				C /*lifecycle*/,
				d /*strings*/,
				m /*findModel*/,
				r /*findState*/,
				u /*findWidget*/,
				a /*nls*/,
				h /*configuration*/,
				c /*contextkey*/,
				n /*contextView*/,
				g /*hover*/,
				p /*instantiation*/,
				o /*findModel*/,
				f /*notebookFindReplaceWidget*/,
				b /*notebookBrowser*/,
				s /*notebookContextKeys*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$TFc = void 0),
					(t = mt(t)),
					(d = mt(d));
				const l = "find-hide-transition",
					y = "find-show-transition";
				let $ = 69;
				const v = 200;
				let S = class extends C.$1c {
					static {
						this.id = "workbench.notebook.find";
					}
					constructor(P, k) {
						super(),
							(this.b = P),
							(this.c = k),
							(this.a = new E.$Y(() =>
								this.D(this.c.createInstance(I, this.b)),
							));
					}
					show(P, k) {
						return this.a.value.show(P, k);
					}
					hide() {
						this.a.rawValue?.hide();
					}
					replace(P) {
						return this.a.value.replace(P);
					}
				};
				(e.$TFc = S), (e.$TFc = S = Ne([j(1, p.$Li)], S));
				let I = class extends f.$SFc {
					constructor(P, k, L, D, M, N, A) {
						super(k, L, D, M, A, N, new r.$l2b(), P),
							(this.Mb = null),
							(this.Nb = null),
							(this.Pb = new o.$p2b(this.hb, this.gb, this.db)),
							t.$fhb(this.hb.getDomNode(), this.getDomNode()),
							(this.Lb = s.$kJb.bindTo(L)),
							this.D(this.a.onKeyDown((R) => this.Qb(R))),
							this.D(this.y.onKeyDown((R) => this.Rb(R))),
							this.D(
								this.gb.onFindReplaceStateChange((R) => {
									if (
										(this.kb(),
										R.isSearching &&
											(this.gb.isSearching
												? this.W.infinite().show(v)
												: this.W.stop().hide()),
										this.Pb.currentMatch >= 0)
									) {
										const B = this.Pb.getCurrentMatch();
										this.N.setEnabled(B.isModelMatch);
									}
									const O = this.Pb.findMatches;
									this.O.setEnabled(
										O.length > 0 &&
											O.find((B) => B.webviewMatches.length > 0) === void 0,
									),
										R.filters &&
											this.a.updateFilterState(
												this.gb.filters?.isModified() ?? !1,
											);
								}),
							),
							this.D(
								t.$0fb(
									this.getDomNode(),
									t.$$gb.FOCUS,
									(R) => {
										this.Ob = t.$Ygb(R.relatedTarget)
											? R.relatedTarget
											: void 0;
									},
									!0,
								),
							);
					}
					Qb(P) {
						if (P.equals(w.KeyCode.Enter)) {
							this.lb(!1), P.preventDefault();
							return;
						} else if (P.equals(w.KeyMod.Shift | w.KeyCode.Enter)) {
							this.lb(!0), P.preventDefault();
							return;
						}
					}
					Rb(P) {
						if (P.equals(w.KeyCode.Enter)) {
							this.mb(), P.preventDefault();
							return;
						}
					}
					kb() {
						this.gb.change({ searchString: this.ub }, !1);
						const P = this.Pb.findMatches;
						return !!(P && P.length);
					}
					Tb(P) {
						this.Pb.find({ index: P });
					}
					lb(P) {
						this.Pb.find({ previous: P });
					}
					mb() {
						if (!this.hb.hasModel() || !this.Pb.findMatches.length) return;
						this.Pb.ensureFindMatches(),
							this.Pb.currentMatch < 0 && this.Pb.find({ previous: !1 });
						const P = this.Pb.getCurrentMatch(),
							k = P.cell;
						if (P.isModelMatch) {
							const L = P.match;
							this.W.infinite().show(v);
							const M = this.wb.buildReplaceString(
								L.matches,
								this.gb.preserveCase,
							);
							this.hb
								.getViewModel()
								.replaceOne(k, L.range, M)
								.then(() => {
									this.W.stop();
								});
						} else console.error("Replace does not work for output match");
					}
					nb() {
						if (!this.hb.hasModel()) return;
						this.W.infinite().show(v);
						const P = this.wb,
							k = this.Pb.findMatches,
							L = [];
						k.forEach((M) => {
							M.contentMatches.forEach((N) => {
								const A = N.matches;
								L.push(P.buildReplaceString(A, this.gb.preserveCase));
							});
						}),
							this.hb
								.getViewModel()
								.replaceAll(this.Pb.findMatches, L)
								.then(() => {
									this.W.stop();
								});
					}
					Xb() {}
					ob() {
						this.Lb.set(!0);
					}
					pb() {
						(this.Ob = void 0), this.Lb.reset();
					}
					sb() {}
					tb() {}
					qb() {}
					rb() {}
					async show(P, k) {
						const L = this.gb.searchString !== P;
						super.show(P, k),
							this.gb.change(
								{ searchString: P ?? this.gb.searchString, isRevealed: !0 },
								!1,
							),
							typeof k?.matchIndex == "number"
								? (this.Pb.findMatches.length || (await this.Pb.research()),
									this.Tb(k.matchIndex))
								: this.a.select(),
							!L &&
								k?.searchStringSeededFrom &&
								this.Pb.refreshCurrentMatch(k.searchStringSeededFrom),
							this.Mb === null &&
								(this.Nb !== null &&
									(t.getWindow(this.getDomNode()).clearTimeout(this.Nb),
									(this.Nb = null),
									this.hb.removeClassName(l)),
								this.hb.addClassName(y),
								(this.Mb = t.getWindow(this.getDomNode()).setTimeout(() => {
									this.hb.removeClassName(y), (this.Mb = null);
								}, 200)));
					}
					replace(P, k) {
						super.showWithReplace(P, k),
							this.gb.change(
								{
									searchString: P ?? "",
									replaceString: k ?? "",
									isRevealed: !0,
								},
								!1,
							),
							this.y.select(),
							this.Mb === null &&
								(this.Nb !== null &&
									(t.getWindow(this.getDomNode()).clearTimeout(this.Nb),
									(this.Nb = null),
									this.hb.removeClassName(l)),
								this.hb.addClassName(y),
								(this.Mb = t.getWindow(this.getDomNode()).setTimeout(() => {
									this.hb.removeClassName(y), (this.Mb = null);
								}, 200)));
					}
					hide() {
						if (
							(super.hide(),
							this.gb.change({ isRevealed: !1 }, !1),
							this.Pb.clear(),
							this.hb.findStop(),
							this.W.stop(),
							this.Nb === null &&
								(this.Mb !== null &&
									(t.getWindow(this.getDomNode()).clearTimeout(this.Mb),
									(this.Mb = null),
									this.hb.removeClassName(y)),
								this.hb.addClassName(l),
								(this.Nb = t.getWindow(this.getDomNode()).setTimeout(() => {
									this.hb.removeClassName(l);
								}, 200))),
							this.Ob &&
								this.Ob.offsetParent &&
								(this.Ob.focus(), (this.Ob = void 0)),
							this.hb.hasModel())
						)
							for (let P = 0; P < this.hb.getLength(); P++) {
								const k = this.hb.cellAt(P);
								k.getEditState() === b.CellEditState.Editing &&
									k.editStateSource === "find" &&
									k.updateEditState(b.CellEditState.Preview, "closeFind");
							}
					}
					Db() {
						if (!this.Pb || !this.Pb.findMatches) return;
						(this.s.style.width = $ + "px"),
							(this.s.title = ""),
							this.s.firstChild?.remove();
						let P;
						if (this.gb.matchesCount > 0) {
							let k = String(this.gb.matchesCount);
							this.gb.matchesCount >= m.$j2b && (k += "+");
							const L =
								this.Pb.currentMatch < 0
									? "?"
									: String(this.Pb.currentMatch + 1);
							P = d.$kf(u.$e7b, L, k);
						} else P = u.$f7b;
						this.s.appendChild(document.createTextNode(P)),
							(0, i.$oib)(
								this.ec(P, this.gb.currentMatch, this.gb.searchString),
							),
							($ = Math.max($, this.s.clientWidth));
					}
					ec(P, k, L) {
						return P === u.$f7b
							? L === ""
								? (0, a.localize)(7769, null, P)
								: (0, a.localize)(7770, null, P, L)
							: (0, a.localize)(7771, null, P, L);
					}
					dispose() {
						this.hb?.removeClassName(y),
							this.hb?.removeClassName(l),
							this.Pb.dispose(),
							super.dispose();
					}
				};
				I = Ne(
					[
						j(1, n.$Wxb),
						j(2, c.$6j),
						j(3, h.$gj),
						j(4, n.$Xxb),
						j(5, g.$Uyb),
						j(6, p.$Li),
					],
					I,
				);
			},
		)

import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/async.js';
import '../../../base/common/cancellation.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/types.js';
define(de[392], he([1, 0, 15, 33, 3, 28]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$GLb = e.TriggerAction = void 0);
			var C;
			(function (u) {
				(u[(u.NO_ACTION = 0)] = "NO_ACTION"),
					(u[(u.CLOSE_PICKER = 1)] = "CLOSE_PICKER"),
					(u[(u.REFRESH_PICKER = 2)] = "REFRESH_PICKER"),
					(u[(u.REMOVE_ITEM = 3)] = "REMOVE_ITEM");
			})(C || (e.TriggerAction = C = {}));
			function d(u) {
				const a = u;
				return Array.isArray(a.items);
			}
			function m(u) {
				const a = u;
				return !!a.picks && a.additionalPicks instanceof Promise;
			}
			class r extends w.$1c {
				constructor(a, h) {
					super(), (this.c = a), (this.f = h);
				}
				provide(a, h, c) {
					const n = new w.$Zc();
					(a.canAcceptInBackground = !!this.f?.canAcceptInBackground),
						(a.matchOnLabel =
							a.matchOnDescription =
							a.matchOnDetail =
							a.sortByLabel =
								!1);
					let g;
					const p = n.add(new w.$2c()),
						o = async () => {
							const b = (p.value = new w.$Zc());
							g?.dispose(!0), (a.busy = !1), (g = new i.$Ce(h));
							const s = g.token;
							let l = a.value.substring(this.c.length);
							this.f?.shouldSkipTrimPickFilter || (l = l.trim());
							const y = this.g(l, b, s, c),
								$ = (S, I) => {
									let T, P;
									if (
										(d(S) ? ((T = S.items), (P = S.active)) : (T = S),
										T.length === 0)
									) {
										if (I) return !1;
										(l.length > 0 || a.hideInput) &&
											this.f?.noResultsPick &&
											((0, E.$zg)(this.f.noResultsPick)
												? (T = [this.f.noResultsPick(l)])
												: (T = [this.f.noResultsPick]));
									}
									return (a.items = T), P && (a.activeItems = [P]), !0;
								},
								v = async (S) => {
									let I = !1,
										T = !1;
									await Promise.all([
										(async () => {
											(typeof S.mergeDelay == "number" &&
												(await (0, t.$Nh)(S.mergeDelay),
												s.isCancellationRequested)) ||
												T ||
												(I = $(S.picks, !0));
										})(),
										(async () => {
											a.busy = !0;
											try {
												const P = await S.additionalPicks;
												if (s.isCancellationRequested) return;
												let k, L;
												d(S.picks)
													? ((k = S.picks.items), (L = S.picks.active))
													: (k = S.picks);
												let D, M;
												if (
													(d(P) ? ((D = P.items), (M = P.active)) : (D = P),
													D.length > 0 || !I)
												) {
													let N;
													if (!L && !M) {
														const A = a.activeItems[0];
														A && k.indexOf(A) !== -1 && (N = A);
													}
													$({ items: [...k, ...D], active: L || M || N });
												}
											} finally {
												s.isCancellationRequested || (a.busy = !1), (T = !0);
											}
										})(),
									]);
								};
							if (y !== null)
								if (m(y)) await v(y);
								else if (!(y instanceof Promise)) $(y);
								else {
									a.busy = !0;
									try {
										const S = await y;
										if (s.isCancellationRequested) return;
										m(S) ? await v(S) : $(S);
									} finally {
										s.isCancellationRequested || (a.busy = !1);
									}
								}
						};
					n.add(a.onDidChangeValue(() => o())),
						o(),
						n.add(
							a.onDidAccept((b) => {
								if (c?.handleAccept) {
									b.inBackground || a.hide(),
										c.handleAccept?.(a.activeItems[0]);
									return;
								}
								const [s] = a.selectedItems;
								typeof s?.accept == "function" &&
									(b.inBackground || a.hide(), s.accept(a.keyMods, b));
							}),
						);
					const f = async (b, s) => {
						if (typeof s.trigger != "function") return;
						const l = s.buttons?.indexOf(b) ?? -1;
						if (l >= 0) {
							const y = s.trigger(l, a.keyMods),
								$ = typeof y == "number" ? y : await y;
							if (h.isCancellationRequested) return;
							switch ($) {
								case C.NO_ACTION:
									break;
								case C.CLOSE_PICKER:
									a.hide();
									break;
								case C.REFRESH_PICKER:
									o();
									break;
								case C.REMOVE_ITEM: {
									const v = a.items.indexOf(s);
									if (v !== -1) {
										const S = a.items.slice(),
											I = S.splice(v, 1),
											T = a.activeItems.filter((k) => k !== I[0]),
											P = a.keepScrollPosition;
										(a.keepScrollPosition = !0),
											(a.items = S),
											T && (a.activeItems = T),
											(a.keepScrollPosition = P);
									}
									break;
								}
							}
						}
					};
					return (
						n.add(
							a.onDidTriggerItemButton(({ button: b, item: s }) => f(b, s)),
						),
						n.add(
							a.onDidTriggerSeparatorButton(({ button: b, separator: s }) =>
								f(b, s),
							),
						),
						n
					);
				}
			}
			e.$GLb = r;
		});
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	
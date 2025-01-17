import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/date.js';
import '../../../../base/common/decorators.js';
import '../../../../base/common/event.js';
import '../../../../base/common/filters.js';
import '../../../../base/common/iterator.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/network.js';
import '../../../../platform/label/common/label.js';
import '../../../../base/common/strings.js';
import '../../../../base/common/uri.js';
import '../../../../base/browser/ui/iconLabel/iconLabel.js';
import '../../../browser/parts/views/viewPane.js';
import '../../../../platform/list/browser/listService.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../common/timeline.js';
import '../../../services/editor/common/editorService.js';
import '../../../common/editor.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../base/common/themables.js';
import '../../../common/views.js';
import '../../../../platform/progress/common/progress.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../base/browser/ui/actionbar/actionbar.js';
import '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../base/browser/ui/actionbar/actionViewItems.js';
import '../../../../platform/theme/common/theme.js';
import '../../../../base/common/codicons.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../browser/parts/editor/editorCommands.js';
import '../../../../base/common/marshallingIds.js';
import '../../../../base/common/types.js';
import '../../../../base/browser/markdownRenderer.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../services/extensions/common/extensions.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../base/browser/ui/hover/hoverDelegateFactory.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../css!vs/workbench/contrib/timeline/browser/media/timelinePane.js';
define(
			de[3884],
			he([
				1, 0, 4, 7, 50, 33, 275, 138, 6, 132, 103, 3, 23, 73, 37, 9, 325, 146,
				93, 39, 49, 8, 10, 5, 814, 18, 44, 31, 35, 26, 60, 84, 41, 105, 92, 11,
				32, 198, 212, 14, 79, 247, 221, 28, 267, 68, 53, 21, 95, 72, 2503,
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
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
				G,
				K,
				J,
				W,
				X,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$1c = e.$01c = e.$91c = e.$81c = e.$71c = e.$61c = void 0),
					(i = mt(i));
				const Y = 22;
				function ie(fe) {
					return fe instanceof te;
				}
				function ne(fe) {
					return !!fe && !fe.handle.startsWith("vscode-command:");
				}
				function ee(fe, me) {
					return (
						(fe.relativeTime = ne(fe) ? (0, C.$dn)(fe.timestamp) : void 0),
						(fe.relativeTimeFullWord = ne(fe)
							? (0, C.$dn)(fe.timestamp, !1, !0)
							: void 0),
						me === void 0 || fe.relativeTime !== me
							? ((me = fe.relativeTime), (fe.hideRelativeTime = !1))
							: (fe.hideRelativeTime = !0),
						me
					);
				}
				class _ {
					constructor(me) {
						(this.d = !1),
							(this.f = !1),
							(this.source = me.source),
							(this.items = me.items),
							(this.c = me.paging?.cursor),
							(this.lastRenderedIndex = -1);
					}
					get cursor() {
						return this.c;
					}
					get more() {
						return this.c !== void 0;
					}
					get newest() {
						return this.items[0];
					}
					get oldest() {
						return this.items[this.items.length - 1];
					}
					add(me, ve) {
						let ge = !1;
						if (me.items.length !== 0 && this.items.length !== 0) {
							ge = !0;
							const be = new Set(),
								Ce = new Set();
							for (const Oe of me.items)
								Oe.id === void 0 ? Ce.add(Oe.timestamp) : be.add(Oe.id);
							let Le = this.items.length,
								Fe;
							for (; Le--; )
								(Fe = this.items[Le]),
									((Fe.id !== void 0 && be.has(Fe.id)) ||
										Ce.has(Fe.timestamp)) &&
										this.items.splice(Le, 1);
							(me.items[me.items.length - 1]?.timestamp ?? 0) >=
							(this.newest?.timestamp ?? 0)
								? this.items.splice(0, 0, ...me.items)
								: this.items.push(...me.items);
						} else
							me.items.length !== 0 &&
								((ge = !0), this.items.push(...me.items));
						return (
							(ve.cursor !== void 0 || typeof ve.limit != "object") &&
								(this.c = me.paging?.cursor),
							ge &&
								this.items.sort(
									(be, Ce) =>
										Ce.timestamp - be.timestamp ||
										(be.source === void 0
											? Ce.source === void 0
												? 0
												: 1
											: Ce.source === void 0
												? -1
												: Ce.source.localeCompare(be.source, void 0, {
														numeric: !0,
														sensitivity: "base",
													})),
								),
							ge
						);
					}
					get stale() {
						return this.d;
					}
					get requiresReset() {
						return this.f;
					}
					invalidate(me) {
						(this.d = !0), (this.f = me);
					}
				}
				class te {
					constructor(me) {
						(this.handle = "vscode-command:loadMore"),
							(this.timestamp = 0),
							(this.description = void 0),
							(this.tooltip = void 0),
							(this.contextValue = void 0),
							(this.id = void 0),
							(this.icon = void 0),
							(this.iconDark = void 0),
							(this.source = void 0),
							(this.relativeTime = void 0),
							(this.relativeTimeFullWord = void 0),
							(this.hideRelativeTime = void 0),
							(this.c = !1),
							(this.c = me);
					}
					get loading() {
						return this.c;
					}
					set loading(me) {
						this.c = me;
					}
					get ariaLabel() {
						return this.label;
					}
					get label() {
						return this.loading
							? (0, t.localize)(11008, null)
							: (0, t.localize)(11009, null);
					}
					get themeIcon() {}
				}
				(e.$61c = new l.$5j("timelineFollowActiveEditor", !0, !0)),
					(e.$71c = new l.$5j("timelineExcludeSources", "[]", !0));
				let Q = class extends o.$TMb {
					static {
						this.TITLE = (0, t.localize2)(11023, "Timeline");
					}
					constructor(
						me,
						ve,
						ge,
						be,
						Ce,
						Le,
						Fe,
						Oe,
						xe,
						He,
						Ke,
						Je,
						Te,
						Ee,
						Ie,
						Be,
						Se,
						ke,
						Ue,
					) {
						super(
							{ ...me, titleMenuId: R.$XX.TimelineTitle },
							ve,
							ge,
							Ce,
							be,
							Fe,
							Oe,
							Te,
							Ee,
							Ie,
							Be,
						),
							(this.dc = Le),
							(this.ec = xe),
							(this.fc = He),
							(this.gc = Ke),
							(this.hc = Je),
							(this.ic = Se),
							(this.jc = ke),
							(this.kc = Ue),
							(this.ab = new Map()),
							(this.sb = new Map()),
							(this.lc = !0),
							(this.zc = !0),
							(this.Ac = 0),
							(this.Bc = 0),
							(this.Hc = !1),
							(this.m = this.D(this.Db.createInstance(ue, this))),
							(this.r = e.$61c.bindTo(this.Bb)),
							(this.t = e.$71c.bindTo(this.Bb));
						const qe = Le.get(
							"timeline.excludeSources",
							J.StorageScope.PROFILE,
							"[]",
						);
						this.t.set(qe),
							(this.L = new Set(JSON.parse(qe))),
							this.D(
								Le.onDidChangeValue(
									J.StorageScope.PROFILE,
									"timeline.excludeSources",
									this.D(new a.$Zc()),
								)(this.oc, this),
							),
							this.D(Ce.onDidChangeConfiguration(this.pc, this)),
							this.D(Je.onDidChangeProviders(this.rc, this)),
							this.D(Je.onDidChangeTimeline(this.sc, this)),
							this.D(Je.onDidChangeUri((Ae) => this.setUri(Ae), this));
					}
					get followActiveEditor() {
						return this.lc;
					}
					set followActiveEditor(me) {
						this.lc !== me &&
							((this.lc = me),
							this.r.set(me),
							this.updateFilename(this.tc),
							me && this.qc());
					}
					get pageOnScroll() {
						return (
							this.mc === void 0 &&
								(this.mc = this.Ab.getValue("timeline.pageOnScroll") ?? !1),
							this.mc
						);
					}
					get pageSize() {
						let me = this.Ab.getValue("timeline.pageSize");
						return (
							me == null &&
								(me = Math.max(
									20,
									Math.floor(
										(this.h?.renderHeight ?? 0 / Y) +
											(this.pageOnScroll ? 1 : -1),
									),
								)),
							me
						);
					}
					reset() {
						this.Ec(!0);
					}
					setUri(me) {
						this.nc(me, !0);
					}
					nc(me, ve) {
						ve && (this.followActiveEditor = !1),
							(this.cc = me),
							this.updateFilename(
								me ? this.ic.getUriBasenameLabel(me) : void 0,
							),
							this.j?.setUri(me),
							this.Ec(!0);
					}
					oc() {
						const me = this.dc.get(
							"timeline.excludeSources",
							J.StorageScope.PROFILE,
							"[]",
						);
						this.t.set(me), (this.L = new Set(JSON.parse(me)));
						const ve = this.hc
							.getSources()
							.filter(({ id: ge }) => !this.L.has(ge) && !this.sb.has(ge));
						ve.length !== 0
							? this.Ec(
									!0,
									ve.map(({ id: ge }) => ge),
								)
							: this.Kc();
					}
					pc(me) {
						me.affectsConfiguration("timeline.pageOnScroll") &&
							(this.mc = void 0);
					}
					qc() {
						if (!this.followActiveEditor || !this.isExpanded()) return;
						const me = I.$A1.getOriginalUri(this.ec.activeEditor, {
							supportSideBySide: I.SideBySideEditor.PRIMARY,
						});
						if (
							(this.jc.extUri.isEqual(me, this.cc) && me !== void 0) ||
							(me?.fsPath === this.cc?.fsPath &&
								(me?.scheme === h.Schemas.file || me?.scheme === "git") &&
								(this.cc?.scheme === h.Schemas.file ||
									this.cc?.scheme === "git"))
						) {
							for (const ve of this.hc.getSources()) {
								if (this.L.has(ve.id)) continue;
								const ge = this.sb.get(ve.id);
								(ge !== void 0 && !ge.stale) ||
									(ge !== void 0
										? this.Gc(ge, ge.requiresReset)
										: this.Fc(ve.id, me, !0));
							}
							return;
						}
						this.nc(me, !1);
					}
					rc(me) {
						if (me.removed) {
							for (const ve of me.removed) this.sb.delete(ve);
							this.Kc();
						}
						me.added && this.Ec(!0, me.added);
					}
					sc(me) {
						if (
							me?.uri === void 0 ||
							this.jc.extUri.isEqual(g.URI.revive(me.uri), this.cc)
						) {
							const ve = this.sb.get(me.id);
							if (ve === void 0) return;
							this.isBodyVisible()
								? this.Gc(ve, me.reset)
								: ve.invalidate(me.reset);
						}
					}
					updateFilename(me) {
						(this.tc = me),
							this.followActiveEditor || !me
								? this.Ub(me)
								: this.Ub(`${me} (pinned)`);
					}
					get message() {
						return this.uc;
					}
					set message(me) {
						(this.uc = me), this.vc();
					}
					vc() {
						this.uc !== void 0 ? this.wc(this.uc) : this.xc();
					}
					wc(me) {
						this.f &&
							(this.f.classList.remove("hide"),
							this.yc(),
							(this.f.textContent = me));
					}
					xc() {
						this.yc(), this.f.classList.add("hide");
					}
					yc() {
						i.$9fb(this.f);
					}
					get Cc() {
						return this.Bc > 0;
					}
					Dc(me) {
						if (
							((this.Bc = 0), (this.Ac = this.pageSize), this.sb.clear(), me)
						) {
							for (const { tokenSource: ve } of this.ab.values())
								ve.dispose(!0);
							this.ab.clear(),
								!this.isBodyVisible() &&
									this.h &&
									(this.h.setChildren(null, void 0), (this.zc = !0));
						}
					}
					async Ec(me, ve) {
						if (ve === void 0) {
							if (
								(me && this.Dc(!0),
								this.cc?.scheme === h.Schemas.vscodeSettings ||
									this.cc?.scheme === h.Schemas.webviewPanel ||
									this.cc?.scheme === h.Schemas.walkThrough ||
									this.cc?.scheme === h.Schemas.aiSettings)
							) {
								(this.cc = void 0), this.Dc(!1), this.Kc();
								return;
							}
							this.zc && this.cc !== void 0 && this.setLoadingUriMessage();
						}
						if (this.cc === void 0) {
							this.Dc(!1), this.Kc();
							return;
						}
						if (!this.isBodyVisible()) return;
						let ge = !1;
						for (const be of ve ?? this.hc.getSources().map((Ce) => Ce.id))
							this.Fc(be, this.cc, me) && (ge = !0);
						ge ? this.zc && this.setLoadingUriMessage() : this.Kc();
					}
					Fc(me, ve, ge, be) {
						if (this.L.has(me)) return !1;
						const Ce = this.sb.get(me);
						if (
							!ge &&
							be?.cursor !== void 0 &&
							Ce !== void 0 &&
							(!Ce?.more ||
								Ce.items.length > Ce.lastRenderedIndex + this.pageSize)
						)
							return !1;
						if (be === void 0) {
							if (!ge && Ce !== void 0 && Ce.items.length > 0 && !Ce.more)
								return !1;
							be = { cursor: ge ? void 0 : Ce?.cursor, limit: this.pageSize };
						}
						let Le = this.ab.get(me);
						return (
							Le !== void 0 &&
								((be.cursor = Le.options.cursor),
								typeof be.limit == "number" &&
									(typeof Le.options.limit == "number"
										? (be.limit += Le.options.limit)
										: (be.limit = Le.options.limit))),
							Le?.tokenSource.dispose(!0),
							(be.cacheResults = !0),
							(be.resetCache = ge),
							(Le = this.hc.getTimeline(me, ve, be, new E.$Ce())),
							Le === void 0
								? !1
								: (this.ab.set(me, Le),
									Le.tokenSource.token.onCancellationRequested(() =>
										this.ab.delete(me),
									),
									this.Ic(Le),
									!0)
						);
					}
					Gc(me, ve) {
						if (ve) {
							this.sb.delete(me.source);
							const { oldest: ge } = me;
							this.Fc(
								me.source,
								this.cc,
								!0,
								ge !== void 0
									? { limit: { timestamp: ge.timestamp, id: ge.id } }
									: void 0,
							);
						} else {
							const { newest: ge } = me;
							this.Fc(
								me.source,
								this.cc,
								!1,
								ge !== void 0
									? { limit: { timestamp: ge.timestamp, id: ge.id } }
									: { limit: this.pageSize },
							);
						}
					}
					async Ic(me) {
						let ve;
						try {
							ve = await this.gc.withProgress(
								{ location: this.id },
								() => me.result,
							);
						} finally {
							this.ab.delete(me.source);
						}
						if (
							ve === void 0 ||
							me.tokenSource.token.isCancellationRequested ||
							me.uri !== this.cc
						) {
							this.ab.size === 0 && this.Hc && this.Kc();
							return;
						}
						const ge = me.source;
						let be = !1;
						const Ce = this.sb.get(ge);
						Ce === void 0
							? (this.sb.set(ge, new _(ve)), (be = !0))
							: (be = Ce.add(ve, me.options)),
							be
								? ((this.Hc = !0),
									this.Cc && this.ab.size !== 0 ? this.Lc() : this.Kc())
								: this.ab.size === 0 &&
									(this.Hc ? this.Kc() : this.h.rerender());
					}
					*Jc() {
						let me = !1;
						if (this.cc === void 0 || this.sb.size === 0) {
							this.Bc = 0;
							return;
						}
						const ve = this.Ac;
						let ge = 0;
						if (this.sb.size === 1) {
							const [be, Ce] = u.Iterable.first(this.sb);
							if (((Ce.lastRenderedIndex = -1), this.L.has(be))) {
								this.Bc = 0;
								return;
							}
							Ce.items.length !== 0 && (this.Bc = 1), (me = Ce.more);
							let Le;
							for (const Fe of Ce.items) {
								if (
									((Fe.relativeTime = void 0),
									(Fe.hideRelativeTime = void 0),
									ge++,
									ge > ve)
								) {
									me = !0;
									break;
								}
								(Le = ee(Fe, Le)), yield { element: Fe };
							}
							Ce.lastRenderedIndex = ge - 1;
						} else {
							let Fe = function () {
								return be
									.filter((He) => !He.nextItem.done)
									.reduce(
										(He, Ke) =>
											He === void 0 ||
											Ke.nextItem.value.timestamp >= He.nextItem.value.timestamp
												? Ke
												: He,
										void 0,
									);
							};
							const be = [];
							let Ce = !1,
								Le = 0;
							for (const [He, Ke] of this.sb) {
								if (((Ke.lastRenderedIndex = -1), this.L.has(He) || Ke.stale))
									continue;
								if ((Ke.items.length !== 0 && (Ce = !0), Ke.more)) {
									me = !0;
									const Te = Ke.items[Math.min(ve, Ke.items.length - 1)];
									Te.timestamp > Le && (Le = Te.timestamp);
								}
								const Je = Ke.items[Symbol.iterator]();
								be.push({ timeline: Ke, iterator: Je, nextItem: Je.next() });
							}
							this.Bc = Ce ? 1 : 0;
							let Oe, xe;
							for (; (xe = Fe()); ) {
								xe.timeline.lastRenderedIndex++;
								const He = xe.nextItem.value;
								if (
									((He.relativeTime = void 0),
									(He.hideRelativeTime = void 0),
									He.timestamp >= Le)
								) {
									if ((ge++, ge > ve)) {
										me = !0;
										break;
									}
									(Oe = ee(He, Oe)), yield { element: He };
								}
								xe.nextItem = xe.iterator.next();
							}
						}
						(this.Bc = ge),
							ge > 0 &&
								(me
									? yield { element: new te(this.ab.size !== 0) }
									: this.ab.size !== 0 && (yield { element: new te(!0) }));
					}
					Kc() {
						if (this.isBodyVisible()) {
							if (
								(this.h.setChildren(null, this.Jc()),
								(this.zc = !this.Cc),
								this.cc === void 0)
							)
								this.updateFilename(void 0),
									(this.message = (0, t.localize)(11010, null));
							else if (this.zc)
								if (this.ab.size !== 0) this.setLoadingUriMessage();
								else {
									this.updateFilename(this.ic.getUriBasenameLabel(this.cc));
									const me = this.Bb.getContextKeyValue("scm.providerCount");
									this.hc.getSources().filter(({ id: ve }) => !this.L.has(ve))
										.length === 0
										? (this.message = (0, t.localize)(11011, null))
										: this.Ab.getValue("workbench.localHistory.enabled") &&
												!this.L.has("timeline.localHistory")
											? (this.message = (0, t.localize)(11012, null))
											: this.L.size > 0
												? (this.message = (0, t.localize)(11013, null))
												: (this.message = (0, t.localize)(11014, null)),
										(!me || me === 0) &&
											(this.message += " " + (0, t.localize)(11015, null));
								}
							else
								this.updateFilename(this.ic.getUriBasenameLabel(this.cc)),
									(this.message = void 0);
							this.Hc = !1;
						}
					}
					Lc() {
						this.Kc();
					}
					focus() {
						super.focus(), this.h.domFocus();
					}
					setExpanded(me) {
						const ve = super.setExpanded(me);
						return (
							ve &&
								this.isBodyVisible() &&
								(this.followActiveEditor ? this.qc() : this.nc(this.cc, !0)),
							ve
						);
					}
					setVisible(me) {
						me
							? (this.kc.activateByEvent("onView:timeline"),
								(this.n = new a.$Zc()),
								this.ec.onDidActiveEditorChange(this.qc, this, this.n),
								this.onDidFocus(() => this.Lc(), this, this.n),
								super.setVisible(me),
								this.qc())
							: (this.n?.dispose(), super.setVisible(me));
					}
					X(me, ve) {
						super.X(me, ve), this.h.layout(me, ve);
					}
					Qb(me) {
						super.Qb(me, this.title), me.classList.add("timeline-view");
					}
					W(me) {
						super.W(me),
							(this.c = me),
							me.classList.add(
								"tree-explorer-viewlet-tree-view",
								"timeline-tree-view",
							),
							(this.f = i.$fhb(this.c, i.$(".message"))),
							this.f.classList.add("timeline-subtle"),
							(this.message = (0, t.localize)(11016, null)),
							(this.g = document.createElement("div")),
							this.g.classList.add(
								"customview-tree",
								"file-icon-themable-tree",
								"hide-arrows",
							),
							me.appendChild(this.g),
							(this.j = this.Db.createInstance(ae, this.m)),
							this.j.onDidScrollToEnd((ve) => {
								this.pageOnScroll && this.Pc(ve);
							}),
							(this.h = this.Db.createInstance(
								f.$CMb,
								"TimelinePane",
								this.g,
								new oe(),
								[this.j],
								{
									identityProvider: new se(),
									accessibilityProvider: {
										getAriaLabel(ve) {
											return ie(ve)
												? ve.ariaLabel
												: ve.accessibilityInformation
													? ve.accessibilityInformation.label
													: (0, t.localize)(
															11017,
															null,
															ve.relativeTimeFullWord ?? "",
															ve.label,
														);
										},
										getRole(ve) {
											return ie(ve)
												? "treeitem"
												: ve.accessibilityInformation &&
														ve.accessibilityInformation.role
													? ve.accessibilityInformation.role
													: "treeitem";
										},
										getWidgetAriaLabel() {
											return (0, t.localize)(11018, null);
										},
									},
									keyboardNavigationLabelProvider: new le(),
									multipleSelectionSupport: !1,
									overrideStyles: this.Zb().listOverrideStyles,
								},
							)),
							this.D(this.h.onContextMenu((ve) => this.Qc(this.m, ve))),
							this.D(
								this.h.onDidChangeSelection((ve) => this.ensureValidItems()),
							),
							this.D(
								this.h.onDidOpen((ve) => {
									if (!ve.browserEvent || !this.ensureValidItems()) return;
									const ge = this.h.getSelection();
									let be;
									if ((ge.length === 1 && (be = ge[0]), be !== null))
										if (ne(be)) {
											if (be.command) {
												let Ce = be.command.arguments ?? [];
												(be.command.id === x.$zWb ||
													be.command.id === x.$AWb) &&
													(Ce = [...Ce, ve]),
													this.fc.executeCommand(be.command.id, ...Ce);
											}
										} else ie(be) && this.Pc(be);
								}),
							);
					}
					Pc(me) {
						me.loading ||
							((me.loading = !0),
							this.h.rerender(me),
							this.ab.size === 0 &&
								((this.Ac = this.Bc + this.pageSize), this.Ec(!1)));
					}
					ensureValidItems() {
						return !this.Cc ||
							!this.hc
								.getSources()
								.some(({ id: me }) => !this.L.has(me) && this.sb.has(me))
							? (this.h.setChildren(null, void 0),
								(this.zc = !0),
								this.setLoadingUriMessage(),
								!1)
							: !0;
					}
					setLoadingUriMessage() {
						const me = this.cc && this.ic.getUriBasenameLabel(this.cc);
						this.updateFilename(me),
							(this.message = me ? (0, t.localize)(11019, null, me) : "");
					}
					Qc(me, ve) {
						const ge = ve.element;
						if (ge === null) return;
						const be = ve.browserEvent;
						if (
							(be.preventDefault(),
							be.stopPropagation(),
							!this.ensureValidItems())
						)
							return;
						this.h.setFocus([ge]);
						const Ce = me.getItemContextActions(ge);
						Ce.length &&
							this.zb.showContextMenu({
								getAnchor: () => ve.anchor,
								getActions: () => Ce,
								getActionViewItem: (Le) => {
									const Fe = this.yb.lookupKeybinding(Le.id);
									if (Fe)
										return new B.$_ib(Le, Le, {
											label: !0,
											keybinding: Fe.getLabel(),
										});
								},
								onHide: (Le) => {
									Le && this.h.domFocus();
								},
								getActionsContext: () => ({ uri: this.cc, item: ge }),
								actionRunner: new re(),
							});
					}
				};
				(e.$81c = Q),
					Ne([(0, d.$fi)(500)], Q.prototype, "Lc", null),
					(e.$81c = Q =
						Ne(
							[
								j(1, b.$uZ),
								j(2, s.$Xxb),
								j(3, l.$6j),
								j(4, y.$gj),
								j(5, J.$lq),
								j(6, L.$K1),
								j(7, $.$Li),
								j(8, S.$IY),
								j(9, T.$ek),
								j(10, D.$8N),
								j(11, v.$57),
								j(12, M.$7rb),
								j(13, P.$iP),
								j(14, O.$km),
								j(15, X.$Uyb),
								j(16, c.$3N),
								j(17, G.$Vl),
								j(18, K.$q2),
							],
							Q,
						));
				class Z {
					static {
						this.id = "TimelineElementTemplate";
					}
					constructor(me, ve, ge) {
						me.classList.add("custom-view-tree-node-item"),
							(this.icon = i.$fhb(me, i.$(".custom-view-tree-node-item-icon"))),
							(this.iconLabel = new p.$Xob(me, {
								supportHighlights: !0,
								supportIcons: !0,
								hoverDelegate: ge,
							}));
						const be = i.$fhb(
							this.iconLabel.element,
							i.$(".timeline-timestamp-container"),
						);
						this.timestamp = i.$fhb(be, i.$("span.timeline-timestamp"));
						const Ce = i.$fhb(this.iconLabel.element, i.$(".actions"));
						this.actionBar = new N.$eib(Ce, { actionViewItemProvider: ve });
					}
					dispose() {
						this.iconLabel.dispose(), this.actionBar.dispose();
					}
					reset() {
						(this.icon.className = ""),
							(this.icon.style.backgroundImage = ""),
							this.actionBar.clear();
					}
				}
				class se {
					getId(me) {
						return me.handle;
					}
				}
				e.$91c = se;
				class re extends w.$sj {
					async q(me, { uri: ve, item: ge }) {
						if (!ne(ge)) {
							await me.run();
							return;
						}
						await me.run(
							{
								$mid: H.MarshalledId.TimelineActionContext,
								handle: ge.handle,
								source: ge.source,
								uri: ve,
							},
							ve,
							ge.source,
						);
					}
				}
				class le {
					getKeyboardNavigationLabel(me) {
						return me.label;
					}
				}
				e.$01c = le;
				class oe {
					getHeight(me) {
						return Y;
					}
					getTemplateId(me) {
						return Z.id;
					}
				}
				e.$$1c = oe;
				let ae = class {
					constructor(me, ve, ge) {
						(this.g = me),
							(this.h = ve),
							(this.j = ge),
							(this.c = new m.$re()),
							(this.onDidScrollToEnd = this.c.event),
							(this.templateId = Z.id),
							(this.f = A.$Pyb.bind(void 0, this.h)),
							(this.d = (0, W.$cib)("mouse"));
					}
					setUri(me) {
						this.k = me;
					}
					renderTemplate(me) {
						return new Z(me, this.f, this.d);
					}
					renderElement(me, ve, ge, be) {
						ge.reset();
						const { element: Ce } = me,
							Le = this.j.getColorTheme(),
							Fe = Le.type === U.ColorScheme.LIGHT ? Ce.icon : Ce.iconDark,
							Oe = Fe ? g.URI.revive(Fe) : null;
						Oe
							? ((ge.icon.className = "custom-view-tree-node-item-icon"),
								(ge.icon.style.backgroundImage = i.$vhb(Oe)),
								(ge.icon.style.color = ""))
							: Ce.themeIcon
								? ((ge.icon.className = `custom-view-tree-node-item-icon ${k.ThemeIcon.asClassName(Ce.themeIcon)}`),
									Ce.themeIcon.color
										? (ge.icon.style.color =
												Le.getColor(Ce.themeIcon.color.id)?.toString() ?? "")
										: (ge.icon.style.color = ""),
									(ge.icon.style.backgroundImage = ""))
								: ((ge.icon.className = "custom-view-tree-node-item-icon"),
									(ge.icon.style.backgroundImage = ""),
									(ge.icon.style.color = ""));
						const xe = Ce.tooltip
							? (0, q.$lg)(Ce.tooltip)
								? Ce.tooltip
								: {
										markdown: Ce.tooltip,
										markdownNotSupportedFallback: (0, V.$Xib)(Ce.tooltip),
									}
							: void 0;
						ge.iconLabel.setLabel(Ce.label, Ce.description, {
							title: xe,
							matches: (0, r.$3k)(me.filterData),
						}),
							(ge.timestamp.textContent = Ce.relativeTime ?? ""),
							(ge.timestamp.ariaLabel = Ce.relativeTimeFullWord ?? ""),
							ge.timestamp.parentElement.classList.toggle(
								"timeline-timestamp--duplicate",
								ne(Ce) && Ce.hideRelativeTime,
							),
							(ge.actionBar.context = { uri: this.k, item: Ce }),
							(ge.actionBar.actionRunner = new re()),
							ge.actionBar.push(this.g.getItemActions(Ce), {
								icon: !0,
								label: !1,
							}),
							ie(Ce) && setTimeout(() => this.c.fire(Ce), 0);
					}
					disposeTemplate(me) {
						me.dispose();
					}
				};
				ae = Ne([j(1, $.$Li), j(2, P.$iP)], ae);
				const pe = (0, F.$$O)(
						"timeline-refresh",
						z.$ak.refresh,
						(0, t.localize)(11020, null),
					),
					$e = (0, F.$$O)(
						"timeline-pin",
						z.$ak.pin,
						(0, t.localize)(11021, null),
					),
					ye = (0, F.$$O)(
						"timeline-unpin",
						z.$ak.pinned,
						(0, t.localize)(11022, null),
					);
				let ue = class extends a.$1c {
					constructor(me, ve, ge, be, Ce) {
						super(),
							(this.f = me),
							(this.g = ve),
							(this.h = ge),
							(this.j = be),
							(this.m = Ce),
							this.D((this.c = new a.$Zc())),
							this.D(
								(0, R.$4X)(
									class extends R.$3X {
										constructor() {
											super({
												id: "timeline.refresh",
												title: (0, t.localize2)(11024, "Refresh"),
												icon: pe,
												category: (0, t.localize2)(11025, "Timeline"),
												menu: {
													id: R.$XX.TimelineTitle,
													group: "navigation",
													order: 99,
												},
											});
										}
										run(Le, ...Fe) {
											me.reset();
										}
									},
								),
							),
							this.D(
								T.$fk.registerCommand(
									"timeline.toggleFollowActiveEditor",
									(Le, ...Fe) =>
										(me.followActiveEditor = !me.followActiveEditor),
								),
							),
							this.D(
								R.$ZX.appendMenuItem(R.$XX.TimelineTitle, {
									command: {
										id: "timeline.toggleFollowActiveEditor",
										title: (0, t.localize2)(11026, "Pin the Current Timeline"),
										icon: $e,
										category: (0, t.localize2)(11027, "Timeline"),
									},
									group: "navigation",
									order: 98,
									when: e.$61c,
								}),
							),
							this.D(
								R.$ZX.appendMenuItem(R.$XX.TimelineTitle, {
									command: {
										id: "timeline.toggleFollowActiveEditor",
										title: (0, t.localize2)(
											11028,
											"Unpin the Current Timeline",
										),
										icon: ye,
										category: (0, t.localize2)(11029, "Timeline"),
									},
									group: "navigation",
									order: 98,
									when: e.$61c.toNegated(),
								}),
							),
							this.D(ve.onDidChangeProviders(() => this.q())),
							this.q();
					}
					getItemActions(me) {
						return this.n(R.$XX.TimelineItemContext, {
							key: "timelineItem",
							value: me.contextValue,
						}).primary;
					}
					getItemContextActions(me) {
						return this.n(R.$XX.TimelineItemContext, {
							key: "timelineItem",
							value: me.contextValue,
						}).secondary;
					}
					n(me, ve) {
						const ge = this.j.createOverlay([
								["view", this.f.id],
								[ve.key, ve.value],
							]),
							be = this.m.getMenuActions(me, ge, { shouldForwardArgs: !0 }),
							Fe = { primary: [], secondary: [] };
						return (0, A.$Jyb)(be, Fe, "inline"), Fe;
					}
					q() {
						this.c.clear();
						const me = new Set(
							JSON.parse(
								this.h.get(
									"timeline.excludeSources",
									J.StorageScope.PROFILE,
									"[]",
								),
							),
						);
						for (const ve of this.g.getSources())
							this.c.add(
								(0, R.$4X)(
									class extends R.$3X {
										constructor() {
											super({
												id: `timeline.toggleExcludeSource:${ve.id}`,
												title: ve.label,
												menu: {
													id: R.$XX.TimelineFilterSubMenu,
													group: "navigation",
												},
												toggled: l.$Kj
													.regex(
														"timelineExcludeSources",
														new RegExp(`\\b${(0, n.$of)(ve.id)}\\b`),
													)
													.negate(),
											});
										}
										run(ge, ...be) {
											me.has(ve.id) ? me.delete(ve.id) : me.add(ve.id),
												ge
													.get(J.$lq)
													.store(
														"timeline.excludeSources",
														JSON.stringify([...me.keys()]),
														J.StorageScope.PROFILE,
														J.StorageTarget.USER,
													);
										}
									},
								),
							);
					}
				};
				ue = Ne([j(1, v.$57), j(2, J.$lq), j(3, l.$6j), j(4, R.$YX)], ue);
			},
		),
		
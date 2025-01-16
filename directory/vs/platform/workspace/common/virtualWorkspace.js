define(de[349], he([1, 0, 23]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$D8 = i),
				(e.$E8 = w),
				(e.$F8 = E),
				(e.$G8 = C),
				(e.$H8 = d);
			function i(m) {
				return (
					m.scheme !== t.Schemas.file && m.scheme !== t.Schemas.vscodeRemote
				);
			}
			function w(m) {
				if (m.folders.length)
					return m.folders.every((r) => i(r.uri)) ? m.folders[0].uri : void 0;
				if (m.configuration && i(m.configuration)) return m.configuration;
			}
			function E(m) {
				return w(m)?.scheme;
			}
			function C(m) {
				return w(m)?.authority;
			}
			function d(m) {
				return w(m) !== void 0;
			}
		}),
		define(
			de[25],
			he([1, 0, 4, 54, 387, 19, 9, 5, 23]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$cj =
						e.$_i =
						e.$$i =
						e.$0i =
						e.$9i =
						e.$7i =
						e.$6i =
						e.WorkbenchState =
						e.$Zi =
						e.$Yi =
						e.$Vi =
							void 0),
					(e.$Wi = r),
					(e.$Xi = u),
					(e.$1i = a),
					(e.$2i = h),
					(e.$3i = c),
					(e.$4i = g),
					(e.$5i = p),
					(e.$8i = b),
					(e.$aj = s),
					(e.$bj = l),
					(e.$dj = y),
					(e.$ej = $),
					(e.$fj = v),
					(e.$Vi = (0, d.$Mi)("contextService"));
				function r(S) {
					const I = S;
					return typeof I?.id == "string" && C.URI.isUri(I.uri);
				}
				function u(S) {
					return typeof S?.id == "string" && !r(S) && !h(S);
				}
				(e.$Yi = { id: "ext-dev" }), (e.$Zi = { id: "empty-window" });
				function a(S, I) {
					if (typeof S == "string" || typeof S > "u")
						return typeof S == "string"
							? { id: (0, i.$sc)(S) }
							: I
								? e.$Yi
								: e.$Zi;
					const T = S;
					return T.configuration
						? { id: T.id, configPath: T.configuration }
						: T.folders.length === 1
							? { id: T.id, uri: T.folders[0].uri }
							: { id: T.id };
				}
				function h(S) {
					const I = S;
					return typeof I?.id == "string" && C.URI.isUri(I.configPath);
				}
				function c(S) {
					const I = S;
					if (I?.uri) return { id: I.id, uri: C.URI.revive(I.uri) };
					const T = S;
					if (T?.configPath)
						return { id: T.id, configPath: C.URI.revive(T.configPath) };
					if (S?.id) return { id: S.id };
				}
				var n;
				(function (S) {
					(S[(S.EMPTY = 1)] = "EMPTY"),
						(S[(S.FOLDER = 2)] = "FOLDER"),
						(S[(S.WORKSPACE = 3)] = "WORKSPACE");
				})(n || (e.WorkbenchState = n = {}));
				function g(S) {
					const I = S;
					return !!(
						I &&
						typeof I == "object" &&
						typeof I.id == "string" &&
						Array.isArray(I.folders)
					);
				}
				function p(S) {
					const I = S;
					return !!(
						I &&
						typeof I == "object" &&
						C.URI.isUri(I.uri) &&
						typeof I.name == "string" &&
						typeof I.toResource == "function"
					);
				}
				class o {
					constructor(I, T, P, k, L) {
						(this.h = I),
							(this.j = P),
							(this.k = k),
							(this.l = L),
							(this.c = w.$Si.forUris(this.l, () => !0)),
							(this.folders = T);
					}
					update(I) {
						(this.h = I.id),
							(this.k = I.configuration),
							(this.j = I.transient),
							(this.l = I.l),
							(this.folders = I.folders);
					}
					get folders() {
						return this.g;
					}
					set folders(I) {
						(this.g = I), this.n();
					}
					get id() {
						return this.h;
					}
					get transient() {
						return this.j;
					}
					get configuration() {
						return this.k;
					}
					set configuration(I) {
						this.k = I;
					}
					getFolder(I) {
						return (I && this.c.findSubstr(I)) || null;
					}
					n() {
						this.c = w.$Si.forUris(this.l, () => !0);
						for (const I of this.folders) this.c.set(I.uri, I);
					}
					toJSON() {
						return {
							id: this.id,
							folders: this.folders,
							transient: this.transient,
							configuration: this.configuration,
						};
					}
				}
				e.$6i = o;
				class f {
					constructor(I, T) {
						(this.raw = T),
							(this.uri = I.uri),
							(this.index = I.index),
							(this.name = I.name);
					}
					toResource(I) {
						return (0, E.$nh)(this.uri, I);
					}
					toJSON() {
						return { uri: this.uri, name: this.name, index: this.index };
					}
				}
				e.$7i = f;
				function b(S) {
					return new f(
						{ uri: S, index: 0, name: (0, E.$jh)(S) },
						{ uri: S.toString() },
					);
				}
				(e.$9i = "code-workspace"),
					(e.$0i = `.${e.$9i}`),
					(e.$$i = [
						{ name: (0, t.localize)(2493, null), extensions: [e.$9i] },
					]),
					(e.$_i = "workspace.json");
				function s(S, I) {
					return E.$eh.isEqualOrParent(S, I.untitledWorkspacesHome);
				}
				function l(S) {
					let I;
					return (
						C.URI.isUri(S) ? (I = S) : (I = S.configuration),
						I?.scheme === m.Schemas.tmp
					);
				}
				e.$cj = "4064f6ec-cb38-4ad0-af64-ee6467e63c82";
				function y(S) {
					return S.id === e.$cj;
				}
				function $(S, I) {
					return !s(S, I) && !l(S);
				}
				function v(S) {
					return (
						(typeof S == "string" ? (0, i.$tc)(S) : (0, E.$lh)(S)) === e.$0i
					);
				}
			},
		),
		define(
			de[375],
			he([
				1, 0, 7, 198, 50, 27, 3, 12, 56, 46, 38, 98, 71, 4, 11, 8, 49, 39, 43,
				10, 25,
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
			) {
				"use strict";
				var l;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2Mb = void 0),
					(t = mt(t)),
					(c = mt(c));
				let y = class {
					static {
						l = this;
					}
					static {
						this.ID = "editor.contrib.contextmenu";
					}
					static get(S) {
						return S.getContribution(l.ID);
					}
					constructor(S, I, T, P, k, L, D, M) {
						(this.d = I),
							(this.f = T),
							(this.g = P),
							(this.h = k),
							(this.i = L),
							(this.j = D),
							(this.k = M),
							(this.a = new C.$Zc()),
							(this.b = 0),
							(this.c = S),
							this.a.add(this.c.onContextMenu((N) => this.l(N))),
							this.a.add(
								this.c.onMouseWheel((N) => {
									if (this.b > 0) {
										const A = this.f.getContextViewElement(),
											R = N.srcElement;
										(R.shadowRoot && t.$Igb(A) === R.shadowRoot) ||
											this.f.hideContextView();
									}
								}),
							),
							this.a.add(
								this.c.onKeyDown((N) => {
									this.c.getOption(u.EditorOption.contextmenu) &&
										N.keyCode === E.KeyCode.ContextMenu &&
										(N.preventDefault(),
										N.stopPropagation(),
										this.showContextMenu());
								}),
							);
					}
					l(S) {
						if (!this.c.hasModel()) return;
						if (!this.c.getOption(u.EditorOption.contextmenu)) {
							this.c.focus(),
								S.target.position &&
									!this.c.getSelection().containsPosition(S.target.position) &&
									this.c.setPosition(S.target.position);
							return;
						}
						if (
							S.target.type === m.MouseTargetType.OVERLAY_WIDGET ||
							(S.target.type === m.MouseTargetType.CONTENT_TEXT &&
								S.target.detail.injectedText)
						)
							return;
						if (
							(S.event.preventDefault(),
							S.event.stopPropagation(),
							S.target.type === m.MouseTargetType.SCROLLBAR)
						)
							return this.o(S.event);
						if (
							S.target.type !== m.MouseTargetType.CONTENT_TEXT &&
							S.target.type !== m.MouseTargetType.CONTENT_EMPTY &&
							S.target.type !== m.MouseTargetType.TEXTAREA
						)
							return;
						if ((this.c.focus(), S.target.position)) {
							let T = !1;
							for (const P of this.c.getSelections())
								if (P.containsPosition(S.target.position)) {
									T = !0;
									break;
								}
							T || this.c.setPosition(S.target.position);
						}
						let I = null;
						S.target.type !== m.MouseTargetType.TEXTAREA && (I = S.event),
							this.showContextMenu(I);
					}
					showContextMenu(S) {
						if (
							!this.c.getOption(u.EditorOption.contextmenu) ||
							!this.c.hasModel()
						)
							return;
						const I = this.m(this.c.getModel(), this.c.contextMenuId);
						I.length > 0 && this.n(I, S);
					}
					m(S, I) {
						const T = [],
							P = this.i.getMenuActions(I, this.g, { arg: S.uri });
						for (const k of P) {
							const [, L] = k;
							let D = 0;
							for (const M of L)
								if (M instanceof n.$1X) {
									const N = this.m(S, M.item.submenu);
									N.length > 0 && (T.push(new w.$uj(M.id, M.label, N)), D++);
								} else T.push(M), D++;
							D && T.push(new w.$tj());
						}
						return T.length && T.pop(), T;
					}
					n(S, I = null) {
						if (!this.c.hasModel()) return;
						const T = this.c.getOption(u.EditorOption.hover);
						this.c.updateOptions({ hover: { enabled: !1 } });
						let P = I;
						if (!P) {
							this.c.revealPosition(
								this.c.getPosition(),
								a.ScrollType.Immediate,
							),
								this.c.render();
							const L = this.c.getScrolledVisiblePosition(this.c.getPosition()),
								D = t.$tgb(this.c.getDomNode()),
								M = D.left + L.left,
								N = D.top + L.top + L.height;
							P = { x: M, y: N };
						}
						const k = this.c.getOption(u.EditorOption.useShadowDOM) && !d.$u;
						this.b++,
							this.d.showContextMenu({
								domForShadowRoot: k
									? (this.c.getOverflowWidgetsDomNode() ?? this.c.getDomNode())
									: void 0,
								getAnchor: () => P,
								getActions: () => S,
								getActionViewItem: (L) => {
									const D = this.p(L);
									if (D)
										return new i.$_ib(L, L, {
											label: !0,
											keybinding: D.getLabel(),
											isMenu: !0,
										});
									const M = L;
									return typeof M.getActionViewItem == "function"
										? M.getActionViewItem()
										: new i.$_ib(L, L, { icon: !0, label: !0, isMenu: !0 });
								},
								getKeyBinding: (L) => this.p(L),
								onHide: (L) => {
									this.b--, this.c.updateOptions({ hover: T });
								},
							});
					}
					o(S) {
						if (!this.c.hasModel() || (0, s.$dj)(this.k.getWorkspace())) return;
						const I = this.c.getOption(u.EditorOption.minimap);
						let T = 0;
						const P = (N) => ({
								id: `menu-action-${++T}`,
								label: N.label,
								tooltip: "",
								class: void 0,
								enabled: typeof N.enabled > "u" ? !0 : N.enabled,
								checked: N.checked,
								run: N.run,
							}),
							k = (N, A) => new w.$uj(`menu-action-${++T}`, N, A, void 0),
							L = (N, A, R, O, B) => {
								if (!A) return P({ label: N, enabled: A, run: () => {} });
								const U = (F) => () => {
										this.j.updateValue(R, F);
									},
									z = [];
								for (const F of B)
									z.push(
										P({
											label: F.label,
											checked: O === F.value,
											run: U(F.value),
										}),
									);
								return k(N, z);
							},
							D = [];
						D.push(
							P({
								label: c.localize(967, null),
								checked: I.enabled,
								run: () => {
									this.j.updateValue("editor.minimap.enabled", !I.enabled);
								},
							}),
						),
							D.push(new w.$tj()),
							D.push(
								P({
									label: c.localize(968, null),
									enabled: I.enabled,
									checked: I.renderCharacters,
									run: () => {
										this.j.updateValue(
											"editor.minimap.renderCharacters",
											!I.renderCharacters,
										);
									},
								}),
							),
							D.push(
								L(
									c.localize(969, null),
									I.enabled,
									"editor.minimap.size",
									I.size,
									[
										{ label: c.localize(970, null), value: "proportional" },
										{ label: c.localize(971, null), value: "fill" },
										{ label: c.localize(972, null), value: "fit" },
									],
								),
							),
							D.push(
								L(
									c.localize(973, null),
									I.enabled,
									"editor.minimap.showSlider",
									I.showSlider,
									[
										{ label: c.localize(974, null), value: "mouseover" },
										{ label: c.localize(975, null), value: "always" },
									],
								),
							);
						const M = this.c.getOption(u.EditorOption.useShadowDOM) && !d.$u;
						this.b++,
							this.d.showContextMenu({
								domForShadowRoot: M ? this.c.getDomNode() : void 0,
								getAnchor: () => S,
								getActions: () => D,
								onHide: (N) => {
									this.b--, this.c.focus();
								},
							});
					}
					p(S) {
						return this.h.lookupKeybinding(S.id);
					}
					dispose() {
						this.b > 0 && this.f.hideContextView(), this.a.dispose();
					}
				};
				(e.$2Mb = y),
					(e.$2Mb =
						y =
						l =
							Ne(
								[
									j(1, p.$Xxb),
									j(2, p.$Wxb),
									j(3, g.$6j),
									j(4, o.$uZ),
									j(5, n.$YX),
									j(6, b.$gj),
									j(7, s.$Vi),
								],
								y,
							));
				class $ extends r.$itb {
					constructor() {
						super({
							id: "editor.action.showContextMenu",
							label: c.localize(976, null),
							alias: "Show Editor Context Menu",
							precondition: void 0,
							kbOpts: {
								kbExpr: h.EditorContextKeys.textInputFocus,
								primary: E.KeyMod.Shift | E.KeyCode.F10,
								weight: f.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(S, I) {
						y.get(I)?.showContextMenu();
					}
				}
				(0, r.$qtb)(
					y.ID,
					y,
					r.EditorContributionInstantiation.BeforeFirstInteraction,
				),
					(0, r.$ntb)($);
			},
		),
		define(
			de[1213],
			he([1, 0, 24, 489, 318, 3, 266, 23, 19, 9, 74, 69, 4, 25]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$xzb = e.$wzb = e.$vzb = void 0);
				class n {
					async provideDocumentPasteEdits($, v, S, I, T) {
						const P = await this.a(S, T);
						if (P)
							return {
								edits: [
									{
										insertText: P.insertText,
										title: P.title,
										kind: P.kind,
										handledMimeType: P.handledMimeType,
										yieldTo: P.yieldTo,
									},
								],
								dispose() {},
							};
					}
					async provideDocumentDropEdits($, v, S, I) {
						const T = await this.a(S, I);
						if (T)
							return {
								edits: [
									{
										insertText: T.insertText,
										title: T.title,
										kind: T.kind,
										handledMimeType: T.handledMimeType,
										yieldTo: T.yieldTo,
									},
								],
								dispose() {},
							};
					}
				}
				class g extends n {
					constructor() {
						super(...arguments),
							(this.id = g.id),
							(this.kind = g.kind),
							(this.dropMimeTypes = [C.$EK.text]),
							(this.pasteMimeTypes = [C.$EK.text]);
					}
					static {
						this.id = "text";
					}
					static {
						this.kind = new w.$1L("text.plain");
					}
					async a($, v) {
						const S = $.get(C.$EK.text);
						if (!S || $.has(C.$EK.uriList)) return;
						const I = await S.asString();
						return {
							handledMimeType: C.$EK.text,
							title: (0, h.localize)(989, null),
							insertText: I,
							kind: this.kind,
						};
					}
				}
				e.$vzb = g;
				class p extends n {
					constructor() {
						super(...arguments),
							(this.kind = new w.$1L("uri.absolute")),
							(this.dropMimeTypes = [C.$EK.uriList]),
							(this.pasteMimeTypes = [C.$EK.uriList]);
					}
					async a($, v) {
						const S = await b($);
						if (!S.length || v.isCancellationRequested) return;
						let I = 0;
						const T = S.map(({ uri: k, originalText: L }) =>
							k.scheme === d.Schemas.file ? k.fsPath : (I++, L),
						).join(" ");
						let P;
						return (
							I > 0
								? (P =
										S.length > 1
											? (0, h.localize)(990, null)
											: (0, h.localize)(991, null))
								: (P =
										S.length > 1
											? (0, h.localize)(992, null)
											: (0, h.localize)(993, null)),
							{
								handledMimeType: C.$EK.uriList,
								insertText: T,
								title: P,
								kind: this.kind,
							}
						);
					}
				}
				let o = class extends n {
					constructor($) {
						super(),
							(this.b = $),
							(this.kind = new w.$1L("uri.relative")),
							(this.dropMimeTypes = [C.$EK.uriList]),
							(this.pasteMimeTypes = [C.$EK.uriList]);
					}
					async a($, v) {
						const S = await b($);
						if (!S.length || v.isCancellationRequested) return;
						const I = (0, t.$Lb)(
							S.map(({ uri: T }) => {
								const P = this.b.getWorkspaceFolder(T);
								return P ? (0, m.$ph)(P.uri, T) : void 0;
							}),
						);
						if (I.length)
							return {
								handledMimeType: C.$EK.uriList,
								insertText: I.join(" "),
								title:
									S.length > 1
										? (0, h.localize)(994, null)
										: (0, h.localize)(995, null),
								kind: this.kind,
							};
					}
				};
				o = Ne([j(0, c.$Vi)], o);
				class f {
					constructor() {
						(this.kind = new w.$1L("html")),
							(this.pasteMimeTypes = ["text/html"]),
							(this.a = [{ mimeType: C.$EK.text }]);
					}
					async provideDocumentPasteEdits($, v, S, I, T) {
						if (
							I.triggerKind !== u.DocumentPasteTriggerKind.PasteAs &&
							!I.only?.contains(this.kind)
						)
							return;
						const k = await S.get("text/html")?.asString();
						if (!(!k || T.isCancellationRequested))
							return {
								dispose() {},
								edits: [
									{
										insertText: k,
										yieldTo: this.a,
										title: (0, h.localize)(996, null),
										kind: this.kind,
									},
								],
							};
					}
				}
				async function b(y) {
					const $ = y.get(C.$EK.uriList);
					if (!$) return [];
					const v = await $.asString(),
						S = [];
					for (const I of i.$ZL.parse(v))
						try {
							S.push({ uri: r.URI.parse(I), originalText: I });
						} catch {}
					return S;
				}
				let s = class extends E.$1c {
					constructor($, v) {
						super(),
							this.D($.documentDropEditProvider.register("*", new g())),
							this.D($.documentDropEditProvider.register("*", new p())),
							this.D($.documentDropEditProvider.register("*", new o(v)));
					}
				};
				(e.$wzb = s), (e.$wzb = s = Ne([j(0, a.$k3), j(1, c.$Vi)], s));
				let l = class extends E.$1c {
					constructor($, v) {
						super(),
							this.D($.documentPasteEditProvider.register("*", new g())),
							this.D($.documentPasteEditProvider.register("*", new p())),
							this.D($.documentPasteEditProvider.register("*", new o(v))),
							this.D($.documentPasteEditProvider.register("*", new f()));
					}
				};
				(e.$xzb = l), (e.$xzb = l = Ne([j(0, a.$k3), j(1, c.$Vi)], l));
			},
		),
		define(
			de[1672],
			he([1, 0, 222, 54, 19, 37, 47, 152, 389, 4, 25]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$mDb =
						e.$lDb =
						e.$kDb =
						e.$jDb =
						e.$iDb =
						e.$hDb =
						e.$gDb =
						e.$fDb =
						e.$eDb =
							void 0),
					(i = mt(i)),
					(r = mt(r)),
					(e.$eDb = Object.freeze({
						CURRENT_YEAR: !0,
						CURRENT_YEAR_SHORT: !0,
						CURRENT_MONTH: !0,
						CURRENT_DATE: !0,
						CURRENT_HOUR: !0,
						CURRENT_MINUTE: !0,
						CURRENT_SECOND: !0,
						CURRENT_DAY_NAME: !0,
						CURRENT_DAY_NAME_SHORT: !0,
						CURRENT_MONTH_NAME: !0,
						CURRENT_MONTH_NAME_SHORT: !0,
						CURRENT_SECONDS_UNIX: !0,
						CURRENT_TIMEZONE_OFFSET: !0,
						SELECTION: !0,
						CLIPBOARD: !0,
						TM_SELECTED_TEXT: !0,
						TM_CURRENT_LINE: !0,
						TM_CURRENT_WORD: !0,
						TM_LINE_INDEX: !0,
						TM_LINE_NUMBER: !0,
						TM_FILENAME: !0,
						TM_FILENAME_BASE: !0,
						TM_DIRECTORY: !0,
						TM_FILEPATH: !0,
						CURSOR_INDEX: !0,
						CURSOR_NUMBER: !0,
						RELATIVE_FILEPATH: !0,
						BLOCK_COMMENT_START: !0,
						BLOCK_COMMENT_END: !0,
						LINE_COMMENT: !0,
						WORKSPACE_NAME: !0,
						WORKSPACE_FOLDER: !0,
						RANDOM: !0,
						RANDOM_HEX: !0,
						UUID: !0,
					}));
				class a {
					constructor(s) {
						this.a = s;
					}
					resolve(s) {
						for (const l of this.a) {
							const y = l.resolve(s);
							if (y !== void 0) return y;
						}
					}
				}
				e.$fDb = a;
				class h {
					constructor(s, l, y, $) {
						(this.a = s), (this.b = l), (this.c = y), (this.d = $);
					}
					resolve(s) {
						const { name: l } = s;
						if (l === "SELECTION" || l === "TM_SELECTED_TEXT") {
							let y = this.a.getValueInRange(this.b) || void 0,
								$ = this.b.startLineNumber !== this.b.endLineNumber;
							if (!y && this.d) {
								const v = this.d.getLastOvertypedInfo(this.c);
								v && ((y = v.value), ($ = v.multiline));
							}
							if (y && $ && s.snippet) {
								const v = this.a.getLineContent(this.b.startLineNumber),
									S = (0, E.$Cf)(v, 0, this.b.startColumn - 1);
								let I = S;
								s.snippet.walk((P) =>
									P === s
										? !1
										: (P instanceof m.Text &&
												(I = (0, E.$Cf)((0, E.$zf)(P.value).pop())),
											!0),
								);
								const T = (0, E.$Of)(I, S);
								y = y.replace(
									/(\r\n|\r|\n)(.*)/g,
									(P, k, L) => `${k}${I.substr(T)}${L}`,
								);
							}
							return y;
						} else {
							if (l === "TM_CURRENT_LINE")
								return this.a.getLineContent(this.b.positionLineNumber);
							if (l === "TM_CURRENT_WORD") {
								const y = this.a.getWordAtPosition({
									lineNumber: this.b.positionLineNumber,
									column: this.b.positionColumn,
								});
								return (y && y.word) || void 0;
							} else {
								if (l === "TM_LINE_INDEX")
									return String(this.b.positionLineNumber - 1);
								if (l === "TM_LINE_NUMBER")
									return String(this.b.positionLineNumber);
								if (l === "CURSOR_INDEX") return String(this.c);
								if (l === "CURSOR_NUMBER") return String(this.c + 1);
							}
						}
					}
				}
				e.$gDb = h;
				class c {
					constructor(s, l) {
						(this.a = s), (this.b = l);
					}
					resolve(s) {
						const { name: l } = s;
						if (l === "TM_FILENAME") return i.$sc(this.b.uri.fsPath);
						if (l === "TM_FILENAME_BASE") {
							const y = i.$sc(this.b.uri.fsPath),
								$ = y.lastIndexOf(".");
							return $ <= 0 ? y : y.slice(0, $);
						} else {
							if (l === "TM_DIRECTORY")
								return i.$rc(this.b.uri.fsPath) === "."
									? ""
									: this.a.getUriLabel((0, w.$mh)(this.b.uri));
							if (l === "TM_FILEPATH") return this.a.getUriLabel(this.b.uri);
							if (l === "RELATIVE_FILEPATH")
								return this.a.getUriLabel(this.b.uri, {
									relative: !0,
									noPrefix: !0,
								});
						}
					}
				}
				e.$hDb = c;
				class n {
					constructor(s, l, y, $) {
						(this.a = s), (this.b = l), (this.c = y), (this.d = $);
					}
					resolve(s) {
						if (s.name !== "CLIPBOARD") return;
						const l = this.a();
						if (l) {
							if (this.d) {
								const y = l.split(/\r\n|\n|\r/).filter(($) => !(0, E.$jf)($));
								if (y.length === this.c) return y[this.b];
							}
							return l;
						}
					}
				}
				e.$iDb = n;
				let g = class {
					constructor(s, l, y) {
						(this.a = s), (this.b = l), (this.c = y);
					}
					resolve(s) {
						const { name: l } = s,
							y = this.a.getLanguageIdAtPosition(
								this.b.selectionStartLineNumber,
								this.b.selectionStartColumn,
							),
							$ = this.c.getLanguageConfiguration(y).comments;
						if ($) {
							if (l === "LINE_COMMENT") return $.lineCommentToken || void 0;
							if (l === "BLOCK_COMMENT_START")
								return $.blockCommentStartToken || void 0;
							if (l === "BLOCK_COMMENT_END")
								return $.blockCommentEndToken || void 0;
						}
					}
				};
				(e.$jDb = g), (e.$jDb = g = Ne([j(2, d.$aN)], g));
				class p {
					constructor() {
						this.e = new Date();
					}
					static {
						this.a = [
							r.localize(1428, null),
							r.localize(1429, null),
							r.localize(1430, null),
							r.localize(1431, null),
							r.localize(1432, null),
							r.localize(1433, null),
							r.localize(1434, null),
						];
					}
					static {
						this.b = [
							r.localize(1435, null),
							r.localize(1436, null),
							r.localize(1437, null),
							r.localize(1438, null),
							r.localize(1439, null),
							r.localize(1440, null),
							r.localize(1441, null),
						];
					}
					static {
						this.c = [
							r.localize(1442, null),
							r.localize(1443, null),
							r.localize(1444, null),
							r.localize(1445, null),
							r.localize(1446, null),
							r.localize(1447, null),
							r.localize(1448, null),
							r.localize(1449, null),
							r.localize(1450, null),
							r.localize(1451, null),
							r.localize(1452, null),
							r.localize(1453, null),
						];
					}
					static {
						this.d = [
							r.localize(1454, null),
							r.localize(1455, null),
							r.localize(1456, null),
							r.localize(1457, null),
							r.localize(1458, null),
							r.localize(1459, null),
							r.localize(1460, null),
							r.localize(1461, null),
							r.localize(1462, null),
							r.localize(1463, null),
							r.localize(1464, null),
							r.localize(1465, null),
						];
					}
					resolve(s) {
						const { name: l } = s;
						if (l === "CURRENT_YEAR") return String(this.e.getFullYear());
						if (l === "CURRENT_YEAR_SHORT")
							return String(this.e.getFullYear()).slice(-2);
						if (l === "CURRENT_MONTH")
							return String(this.e.getMonth().valueOf() + 1).padStart(2, "0");
						if (l === "CURRENT_DATE")
							return String(this.e.getDate().valueOf()).padStart(2, "0");
						if (l === "CURRENT_HOUR")
							return String(this.e.getHours().valueOf()).padStart(2, "0");
						if (l === "CURRENT_MINUTE")
							return String(this.e.getMinutes().valueOf()).padStart(2, "0");
						if (l === "CURRENT_SECOND")
							return String(this.e.getSeconds().valueOf()).padStart(2, "0");
						if (l === "CURRENT_DAY_NAME") return p.a[this.e.getDay()];
						if (l === "CURRENT_DAY_NAME_SHORT") return p.b[this.e.getDay()];
						if (l === "CURRENT_MONTH_NAME") return p.c[this.e.getMonth()];
						if (l === "CURRENT_MONTH_NAME_SHORT") return p.d[this.e.getMonth()];
						if (l === "CURRENT_SECONDS_UNIX")
							return String(Math.floor(this.e.getTime() / 1e3));
						if (l === "CURRENT_TIMEZONE_OFFSET") {
							const y = this.e.getTimezoneOffset(),
								$ = y > 0 ? "-" : "+",
								v = Math.trunc(Math.abs(y / 60)),
								S = v < 10 ? "0" + v : v,
								I = Math.abs(y) - v * 60,
								T = I < 10 ? "0" + I : I;
							return $ + S + ":" + T;
						}
					}
				}
				e.$kDb = p;
				class o {
					constructor(s) {
						this.a = s;
					}
					resolve(s) {
						if (!this.a) return;
						const l = (0, u.$1i)(this.a.getWorkspace());
						if (!(0, u.$Xi)(l)) {
							if (s.name === "WORKSPACE_NAME") return this.b(l);
							if (s.name === "WORKSPACE_FOLDER") return this.c(l);
						}
					}
					b(s) {
						if ((0, u.$Wi)(s)) return i.$sc(s.uri.path);
						let l = i.$sc(s.configPath.path);
						return (
							l.endsWith(u.$9i) &&
								(l = l.substr(0, l.length - u.$9i.length - 1)),
							l
						);
					}
					c(s) {
						if ((0, u.$Wi)(s)) return (0, t.$xO)(s.uri.fsPath);
						const l = i.$sc(s.configPath.path);
						let y = s.configPath.fsPath;
						return (
							y.endsWith(l) && (y = y.substr(0, y.length - l.length - 1)),
							y ? (0, t.$xO)(y) : "/"
						);
					}
				}
				e.$lDb = o;
				class f {
					resolve(s) {
						const { name: l } = s;
						if (l === "RANDOM") return Math.random().toString().slice(-6);
						if (l === "RANDOM_HEX") return Math.random().toString(16).slice(-6);
						if (l === "UUID") return (0, C.$9g)();
					}
				}
				e.$mDb = f;
			},
		),
		define(
			de[2890],
			he([1, 0, 3, 6, 4, 34, 25, 113, 19]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$cUc = void 0);
				let r = class extends t.$1c {
					get onDidChangeLogLevel() {
						return this.a.onDidChangeLogLevel;
					}
					constructor(a, h, c) {
						super(),
							(this.c = a),
							(this.a = this.c.createLogger(
								(0, m.$nh)(c.logsHome, "terminal.log"),
								{ id: "terminal", name: (0, w.localize)(2090, null) },
							)),
							this.D(
								i.Event.runAndSubscribe(h.onDidChangeWorkspaceFolders, () => {
									this.b = h.getWorkspace().id.substring(0, 7);
								}),
							);
					}
					getLevel() {
						return this.a.getLevel();
					}
					setLevel(a) {
						this.a.setLevel(a);
					}
					flush() {
						this.a.flush();
					}
					trace(a, ...h) {
						this.a.trace(this.f(a), h);
					}
					debug(a, ...h) {
						this.a.debug(this.f(a), h);
					}
					info(a, ...h) {
						this.a.info(this.f(a), h);
					}
					warn(a, ...h) {
						this.a.warn(this.f(a), h);
					}
					error(a, ...h) {
						if (a instanceof Error) {
							this.a.error(this.f(""), a, h);
							return;
						}
						this.a.error(this.f(a), h);
					}
					f(a) {
						return this.a.getLevel() === E.LogLevel.Trace
							? `[${this.b}] ${a}`
							: a;
					}
				};
				(e.$cUc = r),
					(e.$cUc = r = Ne([j(0, E.$jk), j(1, C.$Vi), j(2, d.$Ti)], r));
			},
		),
		define(
			de[129],
			he([
				1, 0, 136, 6, 3, 19, 9, 4, 113, 22, 5, 34, 25, 59, 68, 15, 47, 37, 28,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2l = e.$1l = e.$Xl = e.ProfileResourceType = void 0),
					(e.$Wl = s),
					(e.$Yl = l),
					(e.$Zl = y);
				var b;
				(function (S) {
					(S.Settings = "settings"),
						(S.Keybindings = "keybindings"),
						(S.Snippets = "snippets"),
						(S.Tasks = "tasks"),
						(S.Extensions = "extensions"),
						(S.GlobalState = "globalState");
				})(b || (e.ProfileResourceType = b = {}));
				function s(S) {
					const I = S;
					return !!(
						I &&
						typeof I == "object" &&
						typeof I.id == "string" &&
						typeof I.isDefault == "boolean" &&
						typeof I.name == "string" &&
						C.URI.isUri(I.location) &&
						C.URI.isUri(I.globalStorageHome) &&
						C.URI.isUri(I.settingsResource) &&
						C.URI.isUri(I.keybindingsResource) &&
						C.URI.isUri(I.tasksResource) &&
						C.URI.isUri(I.snippetsHome) &&
						C.URI.isUri(I.extensionsResource)
					);
				}
				e.$Xl = (0, u.$Mi)("IUserDataProfilesService");
				function l(S, I) {
					return {
						id: S.id,
						isDefault: S.isDefault,
						name: S.name,
						shortName: S.shortName,
						icon: S.icon,
						location: C.URI.revive(S.location).with({ scheme: I }),
						globalStorageHome: C.URI.revive(S.globalStorageHome).with({
							scheme: I,
						}),
						settingsResource: C.URI.revive(S.settingsResource).with({
							scheme: I,
						}),
						keybindingsResource: C.URI.revive(S.keybindingsResource).with({
							scheme: I,
						}),
						tasksResource: C.URI.revive(S.tasksResource).with({ scheme: I }),
						snippetsHome: C.URI.revive(S.snippetsHome).with({ scheme: I }),
						extensionsResource: C.URI.revive(S.extensionsResource).with({
							scheme: I,
						}),
						cacheHome: C.URI.revive(S.cacheHome).with({ scheme: I }),
						useDefaultFlags: S.useDefaultFlags,
						isTransient: S.isTransient,
					};
				}
				function y(S, I, T, P, k, L) {
					return {
						id: S,
						name: I,
						location: T,
						isDefault: !1,
						shortName: k?.shortName,
						icon: k?.icon,
						globalStorageHome:
							L && k?.useDefaultFlags?.globalState
								? L.globalStorageHome
								: (0, E.$nh)(T, "globalStorage"),
						settingsResource:
							L && k?.useDefaultFlags?.settings
								? L.settingsResource
								: (0, E.$nh)(T, "settings.json"),
						keybindingsResource:
							L && k?.useDefaultFlags?.keybindings
								? L.keybindingsResource
								: (0, E.$nh)(T, "keybindings.json"),
						tasksResource:
							L && k?.useDefaultFlags?.tasks
								? L.tasksResource
								: (0, E.$nh)(T, "tasks.json"),
						snippetsHome:
							L && k?.useDefaultFlags?.snippets
								? L.snippetsHome
								: (0, E.$nh)(T, "snippets"),
						extensionsResource:
							L && k?.useDefaultFlags?.extensions
								? L.extensionsResource
								: (0, E.$nh)(T, "extensions.json"),
						cacheHome: (0, E.$nh)(P, S),
						useDefaultFlags: k?.useDefaultFlags,
						isTransient: k?.transient,
					};
				}
				let $ = class extends w.$1c {
					static {
						this.b = "userDataProfiles";
					}
					static {
						this.c = "profileAssociations";
					}
					get defaultProfile() {
						return this.profiles[0];
					}
					get profiles() {
						return [...this.z.profiles, ...this.r.profiles];
					}
					constructor(I, T, P, k) {
						super(),
							(this.s = I),
							(this.t = T),
							(this.u = P),
							(this.w = k),
							(this.f = !0),
							(this.h = this.D(new i.$re())),
							(this.onDidChangeProfiles = this.h.event),
							(this.j = this.D(new i.$re())),
							(this.onWillCreateProfile = this.j.event),
							(this.m = this.D(new i.$re())),
							(this.onWillRemoveProfile = this.m.event),
							(this.n = this.D(new i.$re())),
							(this.onDidResetWorkspaces = this.n.event),
							(this.q = new Map()),
							(this.r = {
								profiles: [],
								folders: new c.$Gc(),
								workspaces: new c.$Gc(),
								emptyWindows: new Map(),
							}),
							(this.profilesHome = (0, E.$nh)(
								this.s.userRoamingDataHome,
								"profiles",
							)),
							(this.g = (0, E.$nh)(this.s.cacheHome, "CachedProfilesData"));
					}
					init() {
						this.y = void 0;
					}
					setEnablement(I) {
						this.f !== I && ((this.y = void 0), (this.f = I));
					}
					isEnabled() {
						return this.f;
					}
					get z() {
						if (!this.y) {
							const I = this.C(),
								T = [I];
							if (this.f)
								try {
									for (const L of this.O()) {
										if (!L.name || !(0, f.$lg)(L.name) || !L.location) {
											this.w.warn(
												"Skipping the invalid stored profile",
												L.location || L.name,
											);
											continue;
										}
										T.push(
											y(
												(0, E.$kh)(L.location),
												L.name,
												L.location,
												this.g,
												{
													shortName: L.shortName,
													icon: L.icon,
													useDefaultFlags: L.useDefaultFlags,
												},
												I,
											),
										);
									}
								} catch (L) {
									this.w.error(L);
								}
							const P = new c.$Gc(),
								k = new Map();
							if (T.length)
								try {
									const L = this.Q();
									if (L.workspaces)
										for (const [D, M] of Object.entries(L.workspaces)) {
											const N = C.URI.parse(D),
												A = T.find((R) => R.id === M);
											A && P.set(N, A);
										}
									if (L.emptyWindows)
										for (const [D, M] of Object.entries(L.emptyWindows)) {
											const N = T.find((A) => A.id === M);
											N && k.set(D, N);
										}
								} catch (L) {
									this.w.error(L);
								}
							this.y = { profiles: T, workspaces: P, emptyWindows: k };
						}
						return this.y;
					}
					C() {
						const I = y(
							"__default__profile__",
							(0, d.localize)(2446, null),
							this.s.userRoamingDataHome,
							this.g,
						);
						return {
							...I,
							extensionsResource: this.S() ?? I.extensionsResource,
							isDefault: !0,
						};
					}
					async createTransientProfile(I) {
						const T = "Temp",
							P = new RegExp(`${(0, o.$of)(T)}\\s(\\d+)`);
						let k = 0;
						for (const D of this.profiles) {
							const M = P.exec(D.name),
								N = M ? parseInt(M[1]) : 0;
							k = N > k ? N : k;
						}
						const L = `${T} ${k + 1}`;
						return this.createProfile(
							(0, t.$Aj)((0, p.$9g)()).toString(16),
							L,
							{ transient: !0 },
							I,
						);
					}
					async createNamedProfile(I, T, P) {
						return this.createProfile(
							(0, t.$Aj)((0, p.$9g)()).toString(16),
							I,
							T,
							P,
						);
					}
					async createProfile(I, T, P, k) {
						if (!this.f)
							throw new Error(
								"Profiles are disabled in the current environment.",
							);
						const L = await this.F(I, T, P);
						return k && (await this.setProfileForWorkspace(k, L)), L;
					}
					async F(I, T, P) {
						if (!(0, f.$lg)(T) || !T)
							throw new Error(
								"Name of the profile is mandatory and must be of type `string`",
							);
						let k = this.q.get(T);
						return (
							k ||
								((k = (async () => {
									try {
										if (this.profiles.find((N) => N.name === T || N.id === I))
											throw new Error(`Profile with ${T} name already exists`);
										const D = y(
											I,
											T,
											(0, E.$nh)(this.profilesHome, I),
											this.g,
											P,
											this.defaultProfile,
										);
										await this.t.createFolder(D.location);
										const M = [];
										return (
											this.j.fire({
												profile: D,
												join(N) {
													M.push(N);
												},
											}),
											await g.Promises.settled(M),
											this.I([D], [], []),
											D
										);
									} finally {
										this.q.delete(T);
									}
								})()),
								this.q.set(T, k)),
							k
						);
					}
					async updateProfile(I, T) {
						if (!this.f)
							throw new Error(
								"Profiles are disabled in the current environment.",
							);
						let P = this.profiles.find((k) => k.id === I.id);
						if (!P) throw new Error(`Profile '${I.name}' does not exist`);
						return (
							(P = y(
								P.id,
								T.name ?? P.name,
								P.location,
								this.g,
								{
									shortName: T.shortName ?? P.shortName,
									icon: T.icon === null ? void 0 : (T.icon ?? P.icon),
									transient: T.transient ?? P.isTransient,
									useDefaultFlags: T.useDefaultFlags ?? P.useDefaultFlags,
								},
								this.defaultProfile,
							)),
							this.I([], [], [P]),
							P
						);
					}
					async removeProfile(I) {
						if (!this.f)
							throw new Error(
								"Profiles are disabled in the current environment.",
							);
						if (I.isDefault) throw new Error("Cannot remove default profile");
						const T = this.profiles.find((k) => k.id === I.id);
						if (!T) throw new Error(`Profile '${I.name}' does not exist`);
						const P = [];
						this.m.fire({
							profile: T,
							join(k) {
								P.push(k);
							},
						});
						try {
							await Promise.allSettled(P);
						} catch (k) {
							this.w.error(k);
						}
						for (const k of [...this.z.emptyWindows.keys()])
							T.id === this.z.emptyWindows.get(k)?.id &&
								this.z.emptyWindows.delete(k);
						for (const k of [...this.z.workspaces.keys()])
							T.id === this.z.workspaces.get(k)?.id &&
								this.z.workspaces.delete(k);
						this.M(), this.I([], [T], []);
						try {
							await this.t.del(T.cacheHome, { recursive: !0 });
						} catch (k) {
							(0, r.$Cl)(k) !== r.FileOperationResult.FILE_NOT_FOUND &&
								this.w.error(k);
						}
					}
					async setProfileForWorkspace(I, T) {
						if (!this.f)
							throw new Error(
								"Profiles are disabled in the current environment.",
							);
						const P = this.profiles.find((k) => k.id === T.id);
						if (!P) throw new Error(`Profile '${T.name}' does not exist`);
						this.L(I, P);
					}
					unsetWorkspace(I, T) {
						if (!this.f)
							throw new Error(
								"Profiles are disabled in the current environment.",
							);
						this.L(I, void 0, T);
					}
					async resetWorkspaces() {
						this.r.folders.clear(),
							this.r.workspaces.clear(),
							this.r.emptyWindows.clear(),
							this.z.workspaces.clear(),
							this.z.emptyWindows.clear(),
							this.M(),
							this.n.fire();
					}
					async cleanUp() {
						if (this.f && (await this.t.exists(this.profilesHome))) {
							const I = await this.t.resolve(this.profilesHome);
							await Promise.all(
								(I.children || [])
									.filter(
										(T) =>
											T.isDirectory &&
											this.profiles.every(
												(P) => !this.u.extUri.isEqual(P.location, T.resource),
											),
									)
									.map((T) => this.t.del(T.resource, { recursive: !0 })),
							);
						}
					}
					async cleanUpTransientProfiles() {
						if (!this.f) return;
						const I = this.r.profiles.filter((T) => !this.H(T));
						await Promise.allSettled(I.map((T) => this.removeProfile(T)));
					}
					getProfileForWorkspace(I) {
						const T = this.G(I),
							P = C.URI.isUri(T)
								? this.z.workspaces.get(T)
								: this.z.emptyWindows.get(T);
						return (
							P ||
							((0, h.$Wi)(I)
								? this.r.folders.get(I.uri)
								: (0, h.$2i)(I)
									? this.r.workspaces.get(I.configPath)
									: this.r.emptyWindows.get(I.id))
						);
					}
					G(I) {
						return (0, h.$Wi)(I) ? I.uri : (0, h.$2i)(I) ? I.configPath : I.id;
					}
					H(I) {
						return !!(
							[...this.z.emptyWindows.values()].some((T) =>
								this.u.extUri.isEqual(T.location, I.location),
							) ||
							[...this.z.workspaces.values()].some((T) =>
								this.u.extUri.isEqual(T.location, I.location),
							) ||
							[...this.r.emptyWindows.values()].some((T) =>
								this.u.extUri.isEqual(T.location, I.location),
							) ||
							[...this.r.workspaces.values()].some((T) =>
								this.u.extUri.isEqual(T.location, I.location),
							) ||
							[...this.r.folders.values()].some((T) =>
								this.u.extUri.isEqual(T.location, I.location),
							)
						);
					}
					I(I, T, P) {
						const k = [...this.profiles, ...I],
							L = [],
							D = this.r.profiles;
						this.r.profiles = [];
						for (let M of k) {
							if (M.isDefault || T.some((A) => M.id === A.id)) continue;
							M = P.find((A) => M.id === A.id) ?? M;
							const N = D.find((A) => M.id === A.id);
							if (M.isTransient) this.r.profiles.push(M);
							else {
								if (N) {
									for (const [A, R] of this.r.emptyWindows.entries())
										if (M.id === R.id) {
											this.L({ id: A }, M);
											break;
										}
									for (const [A, R] of this.r.workspaces.entries())
										if (M.id === R.id) {
											this.L({ id: "", configPath: A }, M);
											break;
										}
									for (const [A, R] of this.r.folders.entries())
										if (M.id === R.id) {
											this.L({ id: "", uri: A }, M);
											break;
										}
								}
								L.push({
									location: M.location,
									name: M.name,
									shortName: M.shortName,
									icon: M.icon,
									useDefaultFlags: M.useDefaultFlags,
								});
							}
						}
						this.P(L), (this.y = void 0), this.J(I, T, P);
					}
					J(I, T, P) {
						this.h.fire({
							added: I,
							removed: T,
							updated: P,
							all: this.profiles,
						});
					}
					L(I, T, P) {
						if (((P = T?.isTransient ? !0 : P), P))
							(0, h.$Wi)(I)
								? (this.r.folders.delete(I.uri),
									T && this.r.folders.set(I.uri, T))
								: (0, h.$2i)(I)
									? (this.r.workspaces.delete(I.configPath),
										T && this.r.workspaces.set(I.configPath, T))
									: (this.r.emptyWindows.delete(I.id),
										T && this.r.emptyWindows.set(I.id, T));
						else {
							this.L(I, void 0, !0);
							const k = this.G(I);
							C.URI.isUri(k)
								? (this.z.workspaces.delete(k),
									T && this.z.workspaces.set(k, T))
								: (this.z.emptyWindows.delete(k),
									T && this.z.emptyWindows.set(k, T)),
								this.M();
						}
					}
					M() {
						const I = {};
						for (const [P, k] of this.z.workspaces.entries())
							I[P.toString()] = k.id;
						const T = {};
						for (const [P, k] of this.z.emptyWindows.entries())
							T[P.toString()] = k.id;
						this.R({ workspaces: I, emptyWindows: T }), (this.y = void 0);
					}
					N(I) {
						const T = {},
							P = this.C();
						if (I.workspaces)
							for (const [L, D] of Object.entries(I.workspaces)) {
								const M = C.URI.parse(D);
								T[L] = this.u.extUri.isEqual(M, P.location)
									? P.id
									: this.u.extUri.basename(M);
							}
						const k = {};
						if (I.emptyWindows)
							for (const [L, D] of Object.entries(I.emptyWindows)) {
								const M = C.URI.parse(D);
								k[L] = this.u.extUri.isEqual(M, P.location)
									? P.id
									: this.u.extUri.basename(M);
							}
						return { workspaces: T, emptyWindows: k };
					}
					O() {
						return [];
					}
					P(I) {
						throw new Error("not implemented");
					}
					Q() {
						return {};
					}
					R(I) {
						throw new Error("not implemented");
					}
					S() {}
				};
				(e.$1l = $),
					(e.$1l = $ =
						Ne([j(0, m.$Ti), j(1, r.$ll), j(2, n.$Vl), j(3, a.$ik)], $));
				class v extends $ {
					constructor() {
						super(...arguments), (this.a = []), (this.X = {});
					}
					O() {
						return this.a;
					}
					P(I) {
						this.a = I;
					}
					Q() {
						return this.X;
					}
					R(I) {
						this.X = I;
					}
				}
				e.$2l = v;
			},
		),
		define(
			de[1214],
			he([1, 0, 15, 76, 3, 6, 59, 9, 119, 154, 22, 5, 34, 129, 68, 28, 29, 32]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ar =
						e.$_q =
						e.$$q =
						e.ExtensionsProfileScanningErrorCode =
							void 0);
				var f;
				(function ($) {
					($.ERROR_PROFILE_NOT_FOUND = "ERROR_PROFILE_NOT_FOUND"),
						($.ERROR_INVALID_CONTENT = "ERROR_INVALID_CONTENT");
				})(f || (e.ExtensionsProfileScanningErrorCode = f = {}));
				class b extends Error {
					constructor(v, S) {
						super(v), (this.code = S);
					}
				}
				(e.$$q = b), (e.$_q = (0, a.$Mi)("IExtensionsProfileScannerService"));
				let s = class extends w.$1c {
					constructor(v, S, I, T, P, k) {
						super(),
							(this.j = v),
							(this.m = S),
							(this.n = I),
							(this.q = T),
							(this.r = P),
							(this.s = k),
							(this.b = this.D(new E.$re())),
							(this.onAddExtensions = this.b.event),
							(this.c = this.D(new E.$re())),
							(this.onDidAddExtensions = this.c.event),
							(this.f = this.D(new E.$re())),
							(this.onRemoveExtensions = this.f.event),
							(this.g = this.D(new E.$re())),
							(this.onDidRemoveExtensions = this.g.event),
							(this.h = new C.$Gc());
					}
					scanProfileExtensions(v, S) {
						return this.t(v, void 0, S);
					}
					async addExtensionsToProfile(v, S, I) {
						const T = [],
							P = [];
						try {
							return (
								await this.t(S, (k) => {
									const L = [];
									if (I) L.push(...k);
									else
										for (const D of k)
											v.some(
												([M]) =>
													(0, r.$7p)(M.identifier, D.identifier) &&
													(M.manifest.version !== D.version ||
														M.location.toString() !== D.location.toString()),
											)
												? T.push(D)
												: L.push(D);
									for (const [D, M] of v) {
										const N = L.findIndex(
												(R) =>
													(0, r.$7p)(R.identifier, D.identifier) &&
													R.version === D.manifest.version &&
													R.location.toString() === D.location.toString(),
											),
											A = {
												identifier: D.identifier,
												version: D.manifest.version,
												location: D.location,
												metadata: M,
											};
										N === -1 ? (P.push(A), L.push(A)) : L.splice(N, 1, A);
									}
									return (
										P.length &&
											this.b.fire({ extensions: P, profileLocation: S }),
										T.length &&
											this.f.fire({ extensions: T, profileLocation: S }),
										L
									);
								}),
								P.length && this.c.fire({ extensions: P, profileLocation: S }),
								T.length && this.g.fire({ extensions: T, profileLocation: S }),
								P
							);
						} catch (k) {
							throw (
								(P.length &&
									this.c.fire({ extensions: P, error: k, profileLocation: S }),
								T.length &&
									this.g.fire({ extensions: T, error: k, profileLocation: S }),
								k)
							);
						}
					}
					async updateMetadata(v, S) {
						const I = [];
						return (
							await this.t(S, (T) => {
								const P = [];
								for (const k of T) {
									const L = v.find(
										([D]) =>
											(0, r.$7p)(D.identifier, k.identifier) &&
											D.manifest.version === k.version,
									);
									L && ((k.metadata = { ...k.metadata, ...L[1] }), I.push(k)),
										P.push(k);
								}
								return P;
							}),
							I
						);
					}
					async removeExtensionFromProfile(v, S) {
						const I = [];
						try {
							await this.t(S, (T) => {
								const P = [];
								for (const k of T)
									(0, r.$7p)(k.identifier, v.identifier)
										? I.push(k)
										: P.push(k);
								return (
									I.length &&
										this.f.fire({ extensions: I, profileLocation: S }),
									P
								);
							}),
								I.length && this.g.fire({ extensions: I, profileLocation: S });
						} catch (T) {
							throw (
								(I.length &&
									this.g.fire({ extensions: I, error: T, profileLocation: S }),
								T)
							);
						}
					}
					async t(v, S, I) {
						return this.F(v).queue(async () => {
							let T = [],
								P;
							try {
								const k = await this.m.readFile(v);
								P = JSON.parse(k.value.toString().trim() || "[]");
							} catch (k) {
								if ((0, u.$Cl)(k) !== u.FileOperationResult.FILE_NOT_FOUND)
									throw k;
								if (
									(this.q.extUri.isEqual(
										v,
										this.n.defaultProfile.extensionsResource,
									) && (P = await this.C()),
									!P && I?.bailOutWhenFileNotFound)
								)
									throw new b((0, p.$bb)(k), f.ERROR_PROFILE_NOT_FOUND);
							}
							if (P) {
								Array.isArray(P) || this.u(v);
								let k = !1;
								for (const L of P) {
									l(L) || this.u(v);
									let D;
									if ((0, g.$lg)(L.relativeLocation) && L.relativeLocation)
										D = this.y(L.relativeLocation);
									else if ((0, g.$lg)(L.location)) {
										this.s.warn(
											`Extensions profile: Ignoring extension with invalid location: ${L.location}`,
										);
										continue;
									} else {
										D = d.URI.revive(L.location);
										const M = this.w(D);
										M && ((k = !0), (L.relativeLocation = M));
									}
									(0, g.$sg)(L.metadata?.hasPreReleaseVersion) &&
										L.metadata?.preRelease &&
										((k = !0), (L.metadata.hasPreReleaseVersion = !0)),
										T.push({
											identifier: L.identifier,
											location: D,
											version: L.version,
											metadata: L.metadata,
										});
								}
								k &&
									(await this.m.writeFile(
										v,
										i.$Te.fromString(JSON.stringify(P)),
									));
							}
							if (S) {
								T = S(T);
								const k = T.map((L) => ({
									identifier: L.identifier,
									version: L.version,
									location: L.location.toJSON(),
									relativeLocation: this.w(L.location),
									metadata: L.metadata,
								}));
								await this.m.writeFile(v, i.$Te.fromString(JSON.stringify(k)));
							}
							return T;
						});
					}
					u(v) {
						const S = new b(
							`Invalid extensions content in ${v.toString()}`,
							f.ERROR_INVALID_CONTENT,
						);
						throw (
							(this.r.publicLogError2("extensionsProfileScanningError", {
								code: S.code,
							}),
							S)
						);
					}
					w(v) {
						return this.q.extUri.isEqual(this.q.extUri.dirname(v), this.j)
							? this.q.extUri.basename(v)
							: void 0;
					}
					y(v) {
						return this.q.extUri.joinPath(this.j, v);
					}
					async C() {
						return (
							this.z ||
								(this.z = (async () => {
									const v = this.q.extUri.joinPath(
											this.n.defaultProfile.location,
											"extensions.json",
										),
										S = this.q.extUri.joinPath(
											this.j,
											".init-default-profile-extensions",
										);
									let I;
									try {
										I = (await this.m.readFile(v)).value.toString();
									} catch (P) {
										if ((0, u.$Cl)(P) === u.FileOperationResult.FILE_NOT_FOUND)
											return;
										throw P;
									}
									this.s.info(
										"Migrating extensions from old default profile location",
										v.toString(),
									);
									let T;
									try {
										const P = JSON.parse(I);
										Array.isArray(P) && P.every((k) => l(k))
											? (T = P)
											: this.s.warn(
													"Skipping migrating from old default profile locaiton: Found invalid data",
													P,
												);
									} catch (P) {
										this.s.error(P);
									}
									if (T)
										try {
											await this.m.createFile(
												this.n.defaultProfile.extensionsResource,
												i.$Te.fromString(JSON.stringify(T)),
												{ overwrite: !1 },
											),
												this.s.info(
													"Migrated extensions from old default profile location to new location",
													v.toString(),
													this.n.defaultProfile.extensionsResource.toString(),
												);
										} catch (P) {
											if (
												(0, u.$Cl)(P) ===
												u.FileOperationResult.FILE_MODIFIED_SINCE
											)
												this.s.info(
													"Migration from old default profile location to new location is done by another window",
													v.toString(),
													this.n.defaultProfile.extensionsResource.toString(),
												);
											else throw P;
										}
									try {
										await this.m.del(v);
									} catch (P) {
										(0, u.$Cl)(P) !== u.FileOperationResult.FILE_NOT_FOUND &&
											this.s.error(P);
									}
									try {
										await this.m.del(S);
									} catch (P) {
										(0, u.$Cl)(P) !== u.FileOperationResult.FILE_NOT_FOUND &&
											this.s.error(P);
									}
									return T;
								})()),
							this.z
						);
					}
					F(v) {
						let S = this.h.get(v);
						return S || ((S = new t.$Th()), this.h.set(v, S)), S;
					}
				};
				(e.$ar = s),
					(e.$ar = s =
						Ne(
							[j(1, u.$ll), j(2, c.$Xl), j(3, n.$Vl), j(4, o.$km), j(5, h.$ik)],
							s,
						));
				function l($) {
					return (
						(0, g.$ng)($) &&
						(0, m.$Dp)($.identifier) &&
						(y($.location) || ((0, g.$lg)($.location) && $.location)) &&
						((0, g.$sg)($.relativeLocation) ||
							(0, g.$lg)($.relativeLocation)) &&
						$.version &&
						(0, g.$lg)($.version)
					);
				}
				function y($) {
					return $ ? (0, g.$lg)($.path) && (0, g.$lg)($.scheme) : !1;
				}
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[958],
		he([
			1, 0, 24, 15, 82, 76, 29, 187, 754, 3, 23, 54, 12, 19, 464, 111, 28, 9, 4,
			113, 154, 109, 772, 22, 5, 34, 62, 6, 197, 1214, 129, 68, 1598,
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
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$hr = e.$fr = e.$er = e.$dr = e.Translations = void 0),
				(e.$gr = U),
				(w = mt(w)),
				(a = mt(a)),
				(h = mt(h)),
				(n = mt(n)),
				(g = xi(g));
			var N;
			(function (F) {
				function x(H, q) {
					if (H === q) return !0;
					const V = Object.keys(H),
						G = new Set();
					for (const K of Object.keys(q)) G.add(K);
					if (V.length !== G.size) return !1;
					for (const K of V) {
						if (H[K] !== q[K]) return !1;
						G.delete(K);
					}
					return G.size === 0;
				}
				F.equals = x;
			})(N || (e.Translations = N = {})),
				(e.$dr = (0, v.$Mi)("IExtensionsScannerService"));
			let A = class extends r.$1c {
				constructor(x, H, q, V, G, K, J, W, X, Y, ie, ne) {
					super(),
						(this.systemExtensionsLocation = x),
						(this.userExtensionsLocation = H),
						(this.q = q),
						(this.r = V),
						(this.s = G),
						(this.t = K),
						(this.u = J),
						(this.w = W),
						(this.y = X),
						(this.z = Y),
						(this.C = ie),
						(this.F = ne),
						(this.g = this.D(new T.$re())),
						(this.onDidChangeCache = this.g.event),
						(this.h = (0, c.$nh)(this.userExtensionsLocation, ".obsolete")),
						(this.j = this.D(this.F.createInstance(B, this.r, this.h))),
						(this.m = this.D(this.F.createInstance(B, this.r, this.h))),
						(this.n = this.D(this.F.createInstance(O, this.h))),
						(this.H = void 0),
						this.D(
							this.j.onDidChangeCache(() =>
								this.g.fire(l.ExtensionType.System),
							),
						),
						this.D(
							this.m.onDidChangeCache(() => this.g.fire(l.ExtensionType.User)),
						);
				}
				getTargetPlatform() {
					return this.G || (this.G = (0, s.$fq)(this.u, this.w)), this.G;
				}
				async scanAllExtensions(x, H, q) {
					const [V, G] = await Promise.all([
							this.scanSystemExtensions(x),
							this.scanUserExtensions(H),
						]),
						K = q
							? await this.scanExtensionsUnderDevelopment(x, [...V, ...G])
							: [];
					return this.L(V, G, K, await this.getTargetPlatform(), !0);
				}
				async scanSystemExtensions(x) {
					const H = [];
					H.push(this.M(!!x.useCache, x.language)),
						H.push(this.N(x.language, !!x.checkControlFile));
					const [q, V] = await Promise.all(H);
					return this.J([...q, ...V], l.ExtensionType.System, x, !1);
				}
				async scanUserExtensions(x) {
					const H = x.profileLocation ?? this.userExtensionsLocation;
					this.w.trace("Started scanning user extensions", H);
					const q = this.C.extUri.isEqual(
							x.profileLocation,
							this.s.defaultProfile.extensionsResource,
						)
							? { bailOutWhenFileNotFound: !0 }
							: void 0,
						V = await this.P(
							H,
							!!x.profileLocation,
							l.ExtensionType.User,
							!x.includeUninstalled,
							x.language,
							!0,
							q,
							x.productVersion ?? this.R(),
						),
						G = x.useCache && !V.devMode && V.excludeObsolete ? this.m : this.n;
					let K;
					try {
						K = await G.scanExtensions(V);
					} catch (J) {
						if (
							J instanceof k.$$q &&
							J.code ===
								k.ExtensionsProfileScanningErrorCode.ERROR_PROFILE_NOT_FOUND
						)
							await this.I(), (K = await G.scanExtensions(V));
						else throw J;
					}
					return (
						(K = await this.J(K, l.ExtensionType.User, x, !0)),
						this.w.trace("Scanned user extensions:", K.length),
						K
					);
				}
				async scanExtensionsUnderDevelopment(x, H) {
					if (
						this.y.isExtensionDevelopment &&
						this.y.extensionDevelopmentLocationURI
					) {
						const q = (
							await Promise.all(
								this.y.extensionDevelopmentLocationURI
									.filter((V) => V.scheme === u.Schemas.file)
									.map(async (V) => {
										const G = await this.P(
											V,
											!1,
											l.ExtensionType.User,
											!0,
											x.language,
											!1,
											void 0,
											x.productVersion ?? this.R(),
										);
										return (await this.n.scanOneOrMultipleExtensions(G)).map(
											(J) => (
												(J.type =
													H.find((W) => (0, s.$7p)(W.identifier, J.identifier))
														?.type ?? J.type),
												this.n.validate(J, G)
											),
										);
									}),
							)
						).flat();
						return this.J(q, "development", x, !0);
					}
					return [];
				}
				async scanExistingExtension(x, H, q) {
					const V = await this.P(
							x,
							!1,
							H,
							!0,
							q.language,
							!0,
							void 0,
							q.productVersion ?? this.R(),
						),
						G = await this.n.scanExtension(V);
					return !G || (!q.includeInvalid && !G.isValid) ? null : G;
				}
				async scanOneOrMultipleExtensions(x, H, q) {
					const V = await this.P(
							x,
							!1,
							H,
							!0,
							q.language,
							!0,
							void 0,
							q.productVersion ?? this.R(),
						),
						G = await this.n.scanOneOrMultipleExtensions(V);
					return this.J(G, H, q, !0);
				}
				async scanMultipleExtensions(x, H, q) {
					const V = [];
					return (
						await Promise.all(
							x.map(async (G) => {
								const K = await this.scanOneOrMultipleExtensions(G, H, q);
								V.push(...K);
							}),
						),
						this.J(V, H, q, !0)
					);
				}
				async scanMetadata(x) {
					const H = (0, c.$nh)(x, "package.json"),
						q = (await this.u.readFile(H)).value.toString();
					return JSON.parse(q).__metadata;
				}
				async updateMetadata(x, H) {
					const q = (0, c.$nh)(x, "package.json"),
						V = (await this.u.readFile(q)).value.toString(),
						G = JSON.parse(V);
					H.isMachineScoped === !1 && delete H.isMachineScoped,
						H.isBuiltin === !1 && delete H.isBuiltin,
						(G.__metadata = { ...G.__metadata, ...H }),
						await this.u.writeFile(
							(0, c.$nh)(x, "package.json"),
							E.$Te.fromString(JSON.stringify(G, null, "	")),
						);
				}
				async initializeDefaultProfileExtensions() {
					try {
						await this.t.scanProfileExtensions(
							this.s.defaultProfile.extensionsResource,
							{ bailOutWhenFileNotFound: !0 },
						);
					} catch (x) {
						if (
							x instanceof k.$$q &&
							x.code ===
								k.ExtensionsProfileScanningErrorCode.ERROR_PROFILE_NOT_FOUND
						)
							await this.I();
						else throw x;
					}
				}
				async I() {
					return (
						this.H ||
							(this.H = (async () => {
								try {
									this.w.info(
										"Started initializing default profile extensions in extensions installation folder.",
										this.userExtensionsLocation.toString(),
									);
									const x = await this.scanUserExtensions({
										includeInvalid: !0,
									});
									if (x.length)
										await this.t.addExtensionsToProfile(
											x.map((H) => [H, H.metadata]),
											this.s.defaultProfile.extensionsResource,
										);
									else
										try {
											await this.u.createFile(
												this.s.defaultProfile.extensionsResource,
												E.$Te.fromString(JSON.stringify([])),
											);
										} catch (H) {
											(0, $.$Cl)(H) !== $.FileOperationResult.FILE_NOT_FOUND &&
												this.w.warn(
													"Failed to create default profile extensions manifest in extensions installation folder.",
													this.userExtensionsLocation.toString(),
													(0, C.$bb)(H),
												);
										}
									this.w.info(
										"Completed initializing default profile extensions in extensions installation folder.",
										this.userExtensionsLocation.toString(),
									);
								} catch (x) {
									this.w.error(x);
								} finally {
									this.H = void 0;
								}
							})()),
						this.H
					);
				}
				async J(x, H, q, V) {
					return (
						q.includeAllVersions ||
							(x = this.L(
								H === l.ExtensionType.System ? x : void 0,
								H === l.ExtensionType.User ? x : void 0,
								H === "development" ? x : void 0,
								await this.getTargetPlatform(),
								V,
							)),
						q.includeInvalid || (x = x.filter((G) => G.isValid)),
						x.sort((G, K) => {
							const J = a.$sc(G.location.fsPath),
								W = a.$sc(K.location.fsPath);
							return J < W ? -1 : J > W ? 1 : 0;
						})
					);
				}
				L(x, H, q, V, G) {
					const K = (W, X, Y) => {
							if (W.isValid && !X.isValid) return !1;
							if (W.isValid === X.isValid) {
								if (G && n.gt(W.manifest.version, X.manifest.version))
									return (
										this.w.debug(
											`Skipping extension ${X.location.path} with lower version ${X.manifest.version} in favour of ${W.location.path} with version ${W.manifest.version}`,
										),
										!1
									);
								if (n.eq(W.manifest.version, X.manifest.version)) {
									if (W.type === l.ExtensionType.System)
										return (
											this.w.debug(
												`Skipping extension ${X.location.path} in favour of system extension ${W.location.path} with same version`,
											),
											!1
										);
									if (W.targetPlatform === V)
										return (
											this.w.debug(
												`Skipping extension ${X.location.path} from different target platform ${X.targetPlatform}`,
											),
											!1
										);
								}
							}
							return (
								Y
									? this.w.warn(
											`Overwriting user extension ${W.location.path} with ${X.location.path}.`,
										)
									: this.w.debug(
											`Overwriting user extension ${W.location.path} with ${X.location.path}.`,
										),
								!0
							);
						},
						J = new l.$In();
					return (
						x?.forEach((W) => {
							const X = J.get(W.identifier.id);
							(!X || K(X, W, !1)) && J.set(W.identifier.id, W);
						}),
						H?.forEach((W) => {
							const X = J.get(W.identifier.id);
							if (!X && x && W.type === l.ExtensionType.System) {
								this.w.debug(
									`Skipping obsolete system extension ${W.location.path}.`,
								);
								return;
							}
							(!X || K(X, W, !1)) && J.set(W.identifier.id, W);
						}),
						q?.forEach((W) => {
							const X = J.get(W.identifier.id);
							(!X || K(X, W, !0)) && J.set(W.identifier.id, W),
								J.set(W.identifier.id, W);
						}),
						[...J.values()]
					);
				}
				async M(x, H) {
					this.w.trace("Started scanning system extensions");
					const q = await this.P(
							this.systemExtensionsLocation,
							!1,
							l.ExtensionType.System,
							!0,
							H,
							!0,
							void 0,
							this.R(),
						),
						G = await (x && !q.devMode ? this.j : this.n).scanExtensions(q);
					return this.w.trace("Scanned system extensions:", G.length), G;
				}
				async N(x, H) {
					const q = this.y.isBuilt ? [] : this.z.builtInExtensions;
					if (!q?.length) return [];
					this.w.trace("Started scanning dev system extensions");
					const V = H ? await this.O() : {},
						G = [],
						K = o.URI.file(
							a.$mc(
								a.$oc(
									u.$7g.asFileUri("").fsPath,
									"..",
									".build",
									"builtInExtensions",
								),
							),
						);
					for (const W of q) {
						const X = V[W.name] || "marketplace";
						switch (X) {
							case "disabled":
								break;
							case "marketplace":
								G.push((0, c.$nh)(K, W.name));
								break;
							default:
								G.push(o.URI.file(X));
								break;
						}
					}
					const J = await Promise.all(
						G.map(async (W) =>
							this.n.scanExtension(
								await this.P(
									W,
									!1,
									l.ExtensionType.System,
									!0,
									x,
									!0,
									void 0,
									this.R(),
								),
							),
						),
					);
					return (
						this.w.trace("Scanned dev system extensions:", J.length),
						(0, t.$Lb)(J)
					);
				}
				async O() {
					try {
						const x = await this.u.readFile(this.q);
						return JSON.parse(x.value.toString());
					} catch {
						return {};
					}
				}
				async P(x, H, q, V, G, K, J, W) {
					const X = await this.f(G ?? h.$z),
						Y = await this.Q(x),
						ie =
							H &&
							!this.C.extUri.isEqual(
								x,
								this.s.defaultProfile.extensionsResource,
							)
								? this.s.defaultProfile.extensionsResource
								: void 0,
						ne = ie ? await this.Q(ie) : void 0;
					return new R(
						x,
						Y,
						ie,
						ne,
						H,
						J,
						q,
						V,
						K,
						W.vscodeVersion,
						W.date,
						this.z.commit,
						!this.y.isBuilt,
						G,
						X,
					);
				}
				async Q(x) {
					try {
						const H = await this.u.stat(x);
						if (typeof H.mtime == "number") return H.mtime;
					} catch {}
				}
				R() {
					return {
						vscodeVersion: this.z.vscodeVersion,
						version: this.z.version,
						date: this.z.date,
					};
				}
			};
			(e.$er = A),
				(e.$er = A =
					Ne(
						[
							j(4, L.$Xl),
							j(5, k.$_q),
							j(6, $.$ll),
							j(7, S.$ik),
							j(8, b.$Ti),
							j(9, I.$Bk),
							j(10, D.$Vl),
							j(11, v.$Li),
						],
						A,
					));
			class R {
				constructor(x, H, q, V, G, K, J, W, X, Y, ie, ne, ee, _, te) {
					(this.location = x),
						(this.mtime = H),
						(this.applicationExtensionslocation = q),
						(this.applicationExtensionslocationMtime = V),
						(this.profile = G),
						(this.profileScanOptions = K),
						(this.type = J),
						(this.excludeObsolete = W),
						(this.validate = X),
						(this.productVersion = Y),
						(this.productDate = ie),
						(this.productCommit = ne),
						(this.devMode = ee),
						(this.language = _),
						(this.translations = te);
				}
				static createNlsConfiguration(x) {
					return {
						language: x.language,
						pseudo: x.language === "pseudo",
						devMode: x.devMode,
						translations: x.translations,
					};
				}
				static equals(x, H) {
					return (
						(0, c.$gh)(x.location, H.location) &&
						x.mtime === H.mtime &&
						(0, c.$gh)(
							x.applicationExtensionslocation,
							H.applicationExtensionslocation,
						) &&
						x.applicationExtensionslocationMtime ===
							H.applicationExtensionslocationMtime &&
						x.profile === H.profile &&
						w.$zo(x.profileScanOptions, H.profileScanOptions) &&
						x.type === H.type &&
						x.excludeObsolete === H.excludeObsolete &&
						x.validate === H.validate &&
						x.productVersion === H.productVersion &&
						x.productDate === H.productDate &&
						x.productCommit === H.productCommit &&
						x.devMode === H.devMode &&
						x.language === H.language &&
						N.equals(x.translations, H.translations)
					);
				}
			}
			e.$fr = R;
			let O = class extends r.$1c {
				constructor(x, H, q, V, G, K, J) {
					super(),
						(this.g = x),
						(this.h = H),
						(this.j = q),
						(this.m = V),
						(this.n = K),
						(this.q = J),
						(this.f =
							G.extensionsEnabledWithApiProposalVersion?.map((W) =>
								W.toLowerCase(),
							) ?? []);
				}
				async scanExtensions(x) {
					const H = x.profile ? await this.s(x) : await this.r(x);
					let q = {};
					if (x.excludeObsolete && x.type === l.ExtensionType.User)
						try {
							const V = (await this.m.readFile(this.g)).value.toString();
							q = JSON.parse(V);
						} catch {}
					return (0, p.$yg)(q)
						? H
						: H.filter((V) => !q[s.$8p.create(V).toString()]);
				}
				async r(x) {
					const H = await this.m.resolve(x.location);
					if (!H.children?.length) return [];
					const q = await Promise.all(
						H.children.map(async (V) => {
							if (
								!V.isDirectory ||
								(x.type === l.ExtensionType.User &&
									(0, c.$kh)(V.resource).indexOf(".") === 0)
							)
								return null;
							const G = new R(
								V.resource,
								x.mtime,
								x.applicationExtensionslocation,
								x.applicationExtensionslocationMtime,
								x.profile,
								x.profileScanOptions,
								x.type,
								x.excludeObsolete,
								x.validate,
								x.productVersion,
								x.productDate,
								x.productCommit,
								x.devMode,
								x.language,
								x.translations,
							);
							return this.scanExtension(G);
						}),
					);
					return (0, t.$Lb)(q).sort((V, G) =>
						V.location.path < G.location.path ? -1 : 1,
					);
				}
				async s(x) {
					let H = await this.t(x.location, () => !0, x);
					if (
						x.applicationExtensionslocation &&
						!this.j.extUri.isEqual(x.location, x.applicationExtensionslocation)
					) {
						H = H.filter((V) => !V.metadata?.isApplicationScoped);
						const q = await this.t(
							x.applicationExtensionslocation,
							(V) =>
								!!V.metadata?.isBuiltin || !!V.metadata?.isApplicationScoped,
							x,
						);
						H.push(...q);
					}
					return H;
				}
				async t(x, H, q) {
					const V = await this.h.scanProfileExtensions(x, q.profileScanOptions);
					if (!V.length) return [];
					const G = await Promise.all(
						V.map(async (K) => {
							if (H(K)) {
								const J = new R(
									K.location,
									q.mtime,
									q.applicationExtensionslocation,
									q.applicationExtensionslocationMtime,
									q.profile,
									q.profileScanOptions,
									q.type,
									q.excludeObsolete,
									q.validate,
									q.productVersion,
									q.productDate,
									q.productCommit,
									q.devMode,
									q.language,
									q.translations,
								);
								return this.scanExtension(J, K.metadata);
							}
							return null;
						}),
					);
					return (0, t.$Lb)(G);
				}
				async scanOneOrMultipleExtensions(x) {
					try {
						if (await this.m.exists((0, c.$nh)(x.location, "package.json"))) {
							const H = await this.scanExtension(x);
							return H ? [H] : [];
						} else return await this.scanExtensions(x);
					} catch (H) {
						return (
							this.q.error(
								`Error scanning extensions at ${x.location.path}:`,
								(0, C.$bb)(H),
							),
							[]
						);
					}
				}
				async scanExtension(x, H) {
					try {
						let q = await this.u(x.location);
						if (q) {
							q.publisher || (q.publisher = l.$Cn),
								(H = H ?? q.__metadata),
								delete q.__metadata;
							const V = (0, s.$_p)(q.publisher, q.name),
								G = H?.id ? { id: V, uuid: H.id } : { id: V },
								K = H?.isSystem ? l.ExtensionType.System : x.type,
								J = K === l.ExtensionType.System || !!H?.isBuiltin;
							q = await this.w(x.location, q, R.createNlsConfiguration(x));
							let W = {
								type: K,
								identifier: G,
								manifest: q,
								location: x.location,
								isBuiltin: J,
								targetPlatform: H?.targetPlatform ?? l.TargetPlatform.UNDEFINED,
								publisherDisplayName: H?.publisherDisplayName,
								metadata: H,
								isValid: !0,
								validations: [],
							};
							return (
								x.validate && (W = this.validate(W, x)),
								q.enabledApiProposals &&
									(!this.n.isBuilt || this.f.includes(V.toLowerCase())) &&
									((q.originalEnabledApiProposals = q.enabledApiProposals),
									(q.enabledApiProposals = (0, l.$On)([
										...q.enabledApiProposals,
									]))),
								W
							);
						}
					} catch (q) {
						x.type !== l.ExtensionType.System && this.q.error(q);
					}
					return null;
				}
				validate(x, H) {
					let q = !0;
					const V =
							this.n.isBuilt && this.f.includes(x.identifier.id.toLowerCase()),
						G = (0, y.$wq)(
							H.productVersion,
							H.productDate,
							H.location,
							x.manifest,
							x.isBuiltin,
							V,
						);
					for (const [K, J] of G)
						K === g.default.Error &&
							((q = !1), this.q.error(this.F(H.location, J)));
					return (x.isValid = q), (x.validations = G), x;
				}
				async u(x) {
					const H = (0, c.$nh)(x, "package.json");
					let q;
					try {
						q = (await this.m.readFile(H)).value.toString();
					} catch (G) {
						return (
							(0, $.$Cl)(G) !== $.FileOperationResult.FILE_NOT_FOUND &&
								this.q.error(
									this.F(x, (0, f.localize)(1827, null, H.path, G.message)),
								),
							null
						);
					}
					let V;
					try {
						V = JSON.parse(q);
					} catch {
						const K = [];
						(0, d.$do)(q, K);
						for (const J of K)
							this.q.error(
								this.F(
									x,
									(0, f.localize)(
										1828,
										null,
										H.path,
										J.offset,
										J.length,
										(0, m.$br)(J.error),
									),
								),
							);
						return null;
					}
					return (0, d.$lo)(V) !== "object"
						? (this.q.error(this.F(x, (0, f.localize)(1829, null, H.path))),
							null)
						: V;
				}
				async w(x, H, q) {
					const V = await this.y(x, H, q);
					if (V)
						try {
							const G = [],
								K = await this.z(V.default, G);
							if (G.length > 0)
								return (
									G.forEach((W) => {
										this.q.error(
											this.F(
												x,
												(0, f.localize)(
													1830,
													null,
													V.default?.path,
													(0, m.$br)(W.error),
												),
											),
										);
									}),
									H
								);
							if ((0, d.$lo)(V) !== "object")
								return (
									this.q.error(
										this.F(x, (0, f.localize)(1831, null, V.default?.path)),
									),
									H
								);
							const J = V.values || Object.create(null);
							return (0, M.$cr)(this.q, H, J, K);
						} catch {}
					return H;
				}
				async y(x, H, q) {
					const V = (0, c.$nh)(x, "package.nls.json"),
						G = (X, Y) => {
							Y.forEach((ie) => {
								this.q.error(
									this.F(
										x,
										(0, f.localize)(1832, null, X?.path, (0, m.$br)(ie.error)),
									),
								);
							});
						},
						K = (X) => {
							this.q.error(this.F(x, (0, f.localize)(1833, null, X?.path)));
						},
						J = `${H.publisher}.${H.name}`,
						W = q.translations[J];
					if (W)
						try {
							const X = o.URI.file(W),
								Y = (await this.m.readFile(X)).value.toString(),
								ie = [],
								ne = (0, d.$do)(Y, ie);
							return ie.length > 0
								? (G(X, ie), { values: void 0, default: V })
								: (0, d.$lo)(ne) !== "object"
									? (K(X), { values: void 0, default: V })
									: {
											values: ne.contents ? ne.contents.package : void 0,
											default: V,
										};
						} catch {
							return { values: void 0, default: V };
						}
					else {
						if (!(await this.m.exists(V))) return;
						let Y;
						try {
							Y = await this.C(x, q);
						} catch {
							return;
						}
						if (!Y.localized) return { values: void 0, default: Y.original };
						try {
							const ie = (await this.m.readFile(Y.localized)).value.toString(),
								ne = [],
								ee = (0, d.$do)(ie, ne);
							return ne.length > 0
								? (G(Y.localized, ne), { values: void 0, default: Y.original })
								: (0, d.$lo)(ee) !== "object"
									? (K(Y.localized), { values: void 0, default: Y.original })
									: { values: ee, default: Y.original };
						} catch {
							return { values: void 0, default: Y.original };
						}
					}
				}
				async z(x, H) {
					if (x)
						try {
							const q = (await this.m.readFile(x)).value.toString();
							return (0, d.$do)(q, H);
						} catch {}
				}
				C(x, H) {
					return new Promise((q, V) => {
						const G = (K) => {
							const J = (0, c.$nh)(x, `package.nls.${K}.json`);
							this.m.exists(J).then((W) => {
								W &&
									q({
										localized: J,
										original: (0, c.$nh)(x, "package.nls.json"),
									});
								const X = K.lastIndexOf("-");
								X === -1
									? q({
											localized: (0, c.$nh)(x, "package.nls.json"),
											original: null,
										})
									: ((K = K.substring(0, X)), G(K));
							});
						};
						if (H.devMode || H.pseudo || !H.language)
							return q({
								localized: (0, c.$nh)(x, "package.nls.json"),
								original: null,
							});
						G(H.language);
					});
				}
				F(x, H) {
					return `[${x.path}]: ${H}`;
				}
			};
			O = Ne(
				[
					j(1, k.$_q),
					j(2, D.$Vl),
					j(3, $.$ll),
					j(4, I.$Bk),
					j(5, b.$Ti),
					j(6, S.$ik),
				],
				O,
			);
			let B = class extends O {
				constructor(x, H, q, V, G, K, J, W, X) {
					super(H, V, G, K, J, W, X),
						(this.J = x),
						(this.L = q),
						(this.H = this.D(new i.$Kh(3e3))),
						(this.I = this.D(new T.$re())),
						(this.onDidChangeCache = this.I.event);
				}
				async scanExtensions(x) {
					const H = this.P(x),
						q = await this.M(H);
					if (((this.G = x), q && q.input && R.equals(q.input, this.G)))
						return (
							this.q.debug(
								"Using cached extensions scan result",
								x.type === l.ExtensionType.System ? "system" : "user",
								x.location.toString(),
							),
							this.H.trigger(() => this.O()),
							q.result.map((G) => ((G.location = o.URI.revive(G.location)), G))
						);
					const V = await super.scanExtensions(x);
					return await this.N(H, { input: x, result: V }), V;
				}
				async M(x) {
					try {
						const H = await this.m.readFile(x),
							q = JSON.parse(H.value.toString());
						return { result: q.result, input: (0, P.$ji)(q.input) };
					} catch (H) {
						this.q.debug(
							"Error while reading the extension cache file:",
							x.path,
							(0, C.$bb)(H),
						);
					}
					return null;
				}
				async N(x, H) {
					try {
						await this.m.writeFile(x, E.$Te.fromString(JSON.stringify(H)));
					} catch (q) {
						this.q.debug(
							"Error while writing the extension cache file:",
							x.path,
							(0, C.$bb)(q),
						);
					}
				}
				async O() {
					if (!this.G) return;
					const x = this.P(this.G),
						H = await this.M(x);
					if (!H) return;
					const q = H.result,
						V = JSON.parse(JSON.stringify(await super.scanExtensions(this.G)));
					if (!w.$zo(V, q))
						try {
							this.q.info("Invalidating Cache", q, V),
								await this.m.del(x),
								this.I.fire();
						} catch (G) {
							this.q.error(G);
						}
				}
				P(x) {
					const H = this.Q(x);
					return this.j.extUri.joinPath(
						H.cacheHome,
						x.type === l.ExtensionType.System ? l.$Bn : l.$An,
					);
				}
				Q(x) {
					return x.type === l.ExtensionType.System
						? this.L.defaultProfile
						: x.profile
							? this.j.extUri.isEqual(x.location, this.J.extensionsResource)
								? this.J
								: (this.L.profiles.find((H) =>
										this.j.extUri.isEqual(x.location, H.extensionsResource),
									) ?? this.J)
							: this.L.defaultProfile;
				}
			};
			B = Ne(
				[
					j(2, L.$Xl),
					j(3, k.$_q),
					j(4, D.$Vl),
					j(5, $.$ll),
					j(6, I.$Bk),
					j(7, b.$Ti),
					j(8, S.$ik),
				],
				B,
			);
			function U(F, x) {
				const H = (0, s.$0p)(F.manifest.publisher, F.manifest.name);
				return {
					id: H,
					identifier: new l.$Gn(H),
					isBuiltin: F.type === l.ExtensionType.System,
					isUserBuiltin: F.type === l.ExtensionType.User && F.isBuiltin,
					isUnderDevelopment: x,
					extensionLocation: F.location,
					uuid: F.identifier.uuid,
					targetPlatform: F.targetPlatform,
					publisherDisplayName: F.publisherDisplayName,
					...F.manifest,
				};
			}
			class z extends A {
				constructor(x, H, q, V, G, K, J, W, X, Y, ie, ne) {
					super(
						x,
						H,
						(0, c.$nh)(q, ".cursor-dev", "extensions", "control.json"),
						V,
						G,
						K,
						J,
						W,
						X,
						Y,
						ie,
						ne,
					),
						(this.S = (async () => {
							if (h.$C)
								try {
									const ee = await this.u.readFile(o.URI.file(h.$C));
									return JSON.parse(ee.value.toString());
								} catch {}
							return Object.create(null);
						})());
				}
				f(x) {
					return this.S;
				}
			}
			e.$hr = z;
		},
	),
		define(
			de[2891],
			he([1, 0, 34, 129, 68, 32, 1214, 22, 113, 9, 20]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Xbd = void 0);
				let a = class extends C.$ar {
					constructor(c, n, g, p, o, f) {
						super(r.URI.file(c.extensionsPath), n, g, p, o, f);
					}
				};
				(e.$Xbd = a),
					(e.$Xbd = a =
						Ne(
							[
								j(0, m.$Ui),
								j(1, d.$ll),
								j(2, i.$Xl),
								j(3, w.$Vl),
								j(4, E.$km),
								j(5, t.$ik),
							],
							a,
						)),
					(0, u.$lK)(C.$_q, a, u.InstantiationType.Delayed);
			},
		),
		define(
			de[21],
			he([1, 0, 15, 6, 3, 240, 28, 1174, 5, 129]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pq =
						e.$nq =
						e.StorageTarget =
						e.StorageScope =
						e.WillSaveStateReason =
						e.$lq =
						e.$kq =
						e.$jq =
							void 0),
					(e.$mq = c),
					(e.$oq = g),
					(e.$qq = o),
					(e.$jq = "__$__isNewStorageMarker"),
					(e.$kq = "__$__targetStorageMarker"),
					(e.$lq = (0, m.$Mi)("storageService"));
				var u;
				(function (f) {
					(f[(f.NONE = 0)] = "NONE"), (f[(f.SHUTDOWN = 1)] = "SHUTDOWN");
				})(u || (e.WillSaveStateReason = u = {}));
				var a;
				(function (f) {
					(f[(f.APPLICATION = -1)] = "APPLICATION"),
						(f[(f.PROFILE = 0)] = "PROFILE"),
						(f[(f.WORKSPACE = 1)] = "WORKSPACE");
				})(a || (e.StorageScope = a = {}));
				var h;
				(function (f) {
					(f[(f.USER = 0)] = "USER"), (f[(f.MACHINE = 1)] = "MACHINE");
				})(h || (e.StorageTarget = h = {}));
				function c(f) {
					const b = f.get(e.$kq);
					if (b)
						try {
							return JSON.parse(b);
						} catch {}
					return Object.create(null);
				}
				class n extends w.$1c {
					static {
						this.a = 60 * 1e3;
					}
					constructor(b = { flushInterval: n.a }) {
						super(),
							(this.n = b),
							(this.b = this.D(new i.$ue())),
							(this.f = this.D(new i.$ue())),
							(this.onDidChangeTarget = this.f.event),
							(this.g = this.D(new i.$re())),
							(this.onWillSaveState = this.g.event),
							(this.j = this.D(
								new t.$Yh(() => this.q(), this.n.flushInterval),
							)),
							(this.m = this.D(new w.$2c())),
							(this.C = void 0),
							(this.G = void 0),
							(this.I = void 0),
							(this.N = []);
					}
					onDidChangeValue(b, s, l) {
						return i.Event.filter(
							this.b.event,
							(y) => y.scope === b && (s === void 0 || y.key === s),
							l,
						);
					}
					q() {
						this.m.value = (0, t.$3h)(() => {
							this.r() && this.flush(), this.j.schedule();
						});
					}
					r() {
						return !0;
					}
					t() {
						(0, w.$Vc)([this.m, this.j]);
					}
					initialize() {
						return (
							this.h ||
								(this.h = (async () => {
									(0, E.mark)("code/willInitStorage");
									try {
										await this.Q();
									} finally {
										(0, E.mark)("code/didInitStorage");
									}
									this.j.schedule();
								})()),
							this.h
						);
					}
					u(b, s) {
						const { key: l, external: y } = s;
						if (l === e.$kq) {
							switch (b) {
								case a.APPLICATION:
									this.I = void 0;
									break;
								case a.PROFILE:
									this.G = void 0;
									break;
								case a.WORKSPACE:
									this.C = void 0;
									break;
							}
							this.f.fire({ scope: b });
						} else
							this.b.fire({
								scope: b,
								key: l,
								target: this.L(b)[l],
								external: y,
							});
					}
					w(b) {
						this.g.fire({ reason: b });
					}
					get(b, s, l) {
						return this.R(s)?.get(b, l);
					}
					getBoolean(b, s, l) {
						return this.R(s)?.getBoolean(b, l);
					}
					getNumber(b, s, l) {
						return this.R(s)?.getNumber(b, l);
					}
					getObject(b, s, l) {
						return this.R(s)?.getObject(b, l);
					}
					storeAll(b, s) {
						this.y(() => {
							for (const l of b)
								this.store(l.key, l.value, l.scope, l.target, s);
						});
					}
					store(b, s, l, y, $ = !1) {
						if ((0, C.$ug)(s)) {
							this.remove(b, l, $);
							return;
						}
						this.y(() => {
							this.z(b, l, y), this.R(l)?.set(b, s, $);
						});
					}
					remove(b, s, l = !1) {
						this.y(() => {
							this.z(b, s, void 0), this.R(s)?.delete(b, l);
						});
					}
					y(b) {
						this.b.pause(), this.f.pause();
						try {
							b();
						} finally {
							this.b.resume(), this.f.resume();
						}
					}
					keys(b, s) {
						const l = [],
							y = this.L(b);
						for (const $ of Object.keys(y)) y[$] === s && l.push($);
						return l;
					}
					z(b, s, l, y = !1) {
						const $ = this.L(s);
						typeof l == "number"
							? $[b] !== l &&
								(($[b] = l), this.R(s)?.set(e.$kq, JSON.stringify($), y))
							: typeof $[b] == "number" &&
								(delete $[b], this.R(s)?.set(e.$kq, JSON.stringify($), y));
					}
					get F() {
						return this.C || (this.C = this.M(a.WORKSPACE)), this.C;
					}
					get H() {
						return this.G || (this.G = this.M(a.PROFILE)), this.G;
					}
					get J() {
						return this.I || (this.I = this.M(a.APPLICATION)), this.I;
					}
					L(b) {
						switch (b) {
							case a.APPLICATION:
								return this.J;
							case a.PROFILE:
								return this.H;
							default:
								return this.F;
						}
					}
					M(b) {
						const s = this.R(b);
						return s ? c(s) : Object.create(null);
					}
					isNew(b) {
						return this.getBoolean(e.$jq, b) === !0;
					}
					async cursorDiskKVGet(b) {
						return this.R(a.APPLICATION)?.cursorDiskKVGet(b);
					}
					async cursorDiskKVSet(b, s) {
						return this.R(a.APPLICATION)?.cursorDiskKVSet(b, s);
					}
					cursorDiskKVOnShouldSave(b) {
						return (
							this.N.push(b),
							{
								dispose: () => {
									this.N = this.N.filter((s) => s !== b);
								},
							}
						);
					}
					async flush(b = u.NONE) {
						this.g.fire({ reason: b });
						const s = this.R(a.APPLICATION),
							l = this.R(a.PROFILE),
							y = this.R(a.WORKSPACE);
						switch (b) {
							case u.NONE:
								for (const $ of this.N)
									try {
										$().catch(console.error);
									} catch {}
								await t.Promises.settled([
									s?.whenFlushed() ?? Promise.resolve(),
									l?.whenFlushed() ?? Promise.resolve(),
									y?.whenFlushed() ?? Promise.resolve(),
								]);
								break;
							case u.SHUTDOWN:
								for (const $ of this.N)
									try {
										await $();
									} catch (v) {
										console.error(v);
									}
								await t.Promises.settled([
									s?.flush(0) ?? Promise.resolve(),
									l?.flush(0) ?? Promise.resolve(),
									y?.flush(0) ?? Promise.resolve(),
								]);
								break;
						}
					}
					async log() {
						const b = this.R(a.APPLICATION)?.items ?? new Map(),
							s = this.R(a.PROFILE)?.items ?? new Map(),
							l = this.R(a.WORKSPACE)?.items ?? new Map();
						return o(
							b,
							s,
							l,
							this.S(a.APPLICATION) ?? "",
							this.S(a.PROFILE) ?? "",
							this.S(a.WORKSPACE) ?? "",
						);
					}
					async optimize(b) {
						return await this.flush(), this.R(b)?.optimize();
					}
					async switch(b, s) {
						return this.w(u.NONE), (0, r.$Wl)(b) ? this.U(b, s) : this.W(b, s);
					}
					O(b, s) {
						return !(b.id === s.id || (g(s) && g(b)));
					}
					P(b, s, l) {
						this.y(() => {
							const y = new Set();
							for (const [$, v] of b)
								y.add($), s.get($) !== v && this.u(l, { key: $, external: !0 });
							for (const [$] of s.items)
								y.has($) || this.u(l, { key: $, external: !0 });
						});
					}
				}
				e.$nq = n;
				function g(f) {
					return f.isDefault || !!f.useDefaultFlags?.globalState;
				}
				class p extends n {
					constructor() {
						super(),
							(this.X = this.D(
								new d.$hq(new d.$iq(), {
									hint: d.StorageHint.STORAGE_IN_MEMORY,
								}),
							)),
							(this.Y = this.D(
								new d.$hq(new d.$iq(), {
									hint: d.StorageHint.STORAGE_IN_MEMORY,
								}),
							)),
							(this.Z = this.D(
								new d.$hq(new d.$iq(), {
									hint: d.StorageHint.STORAGE_IN_MEMORY,
								}),
							)),
							this.D(this.Z.onDidChangeStorage((b) => this.u(a.WORKSPACE, b))),
							this.D(this.Y.onDidChangeStorage((b) => this.u(a.PROFILE, b))),
							this.D(
								this.X.onDidChangeStorage((b) => this.u(a.APPLICATION, b)),
							);
					}
					R(b) {
						switch (b) {
							case a.APPLICATION:
								return this.X;
							case a.PROFILE:
								return this.Y;
							default:
								return this.Z;
						}
					}
					S(b) {
						switch (b) {
							case a.APPLICATION:
								return "inMemory (application)";
							case a.PROFILE:
								return "inMemory (profile)";
							default:
								return "inMemory (workspace)";
						}
					}
					async Q() {}
					async U() {}
					async W() {}
					r() {
						return !1;
					}
					hasScope(b) {
						return !1;
					}
				}
				e.$pq = p;
				async function o(f, b, s, l, y, $) {
					const v = (N) => {
							try {
								return JSON.parse(N);
							} catch {
								return N;
							}
						},
						S = new Map(),
						I = new Map();
					f.forEach((N, A) => {
						S.set(A, N), I.set(A, v(N));
					});
					const T = new Map(),
						P = new Map();
					b.forEach((N, A) => {
						T.set(A, N), P.set(A, v(N));
					});
					const k = new Map(),
						L = new Map();
					s.forEach((N, A) => {
						k.set(A, N), L.set(A, v(N));
					}),
						console.group(
							l !== y
								? `Storage: Application (path: ${l})`
								: `Storage: Application & Profile (path: ${l}, default profile)`,
						);
					const D = [];
					if (
						(S.forEach((N, A) => {
							D.push({ key: A, value: N });
						}),
						console.table(D),
						console.groupEnd(),
						console.log(I),
						l !== y)
					) {
						console.group(`Storage: Profile (path: ${y}, profile specific)`);
						const N = [];
						T.forEach((A, R) => {
							N.push({ key: R, value: A });
						}),
							console.table(N),
							console.groupEnd(),
							console.log(P);
					}
					console.group(`Storage: Workspace (path: ${$})`);
					const M = [];
					k.forEach((N, A) => {
						M.push({ key: A, value: N });
					}),
						console.table(M),
						console.groupEnd(),
						console.log(L);
				}
			},
		),
		define(
			de[2892],
			he([1, 0, 6, 59, 17, 1601, 20, 5, 21, 75, 7]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$MBb = e.$LBb = void 0),
					(e.$LBb = (0, d.$Mi)("ICodeLensCache"));
				class a {
					constructor(n, g) {
						(this.lineCount = n), (this.data = g);
					}
				}
				let h = class {
					constructor(n) {
						(this.a = new (class {
							provideCodeLenses() {
								throw new Error("not supported");
							}
						})()),
							(this.b = new i.$Jc(20, 0.75));
						const g = "codelens/cache";
						(0, u.$egb)(r.$Bfb, () => n.remove(g, m.StorageScope.WORKSPACE));
						const p = "codelens/cache2",
							o = n.get(p, m.StorageScope.WORKSPACE, "{}");
						this.f(o);
						const f = t.Event.filter(
							n.onWillSaveState,
							(b) => b.reason === m.WillSaveStateReason.SHUTDOWN,
						);
						t.Event.once(f)((b) => {
							n.store(
								p,
								this.c(),
								m.StorageScope.WORKSPACE,
								m.StorageTarget.MACHINE,
							);
						});
					}
					put(n, g) {
						const p = g.lenses.map((b) => ({
								range: b.symbol.range,
								command: b.symbol.command && {
									id: "",
									title: b.symbol.command?.title,
								},
							})),
							o = new E.$JBb();
						o.add({ lenses: p, dispose: () => {} }, this.a);
						const f = new a(n.getLineCount(), o);
						this.b.set(n.uri.toString(), f);
					}
					get(n) {
						const g = this.b.get(n.uri.toString());
						return g && g.lineCount === n.getLineCount() ? g.data : void 0;
					}
					delete(n) {
						this.b.delete(n.uri.toString());
					}
					c() {
						const n = Object.create(null);
						for (const [g, p] of this.b) {
							const o = new Set();
							for (const f of p.data.lenses)
								o.add(f.symbol.range.startLineNumber);
							n[g] = { lineCount: p.lineCount, lines: [...o.values()] };
						}
						return JSON.stringify(n);
					}
					f(n) {
						try {
							const g = JSON.parse(n);
							for (const p in g) {
								const o = g[p],
									f = [];
								for (const s of o.lines)
									f.push({ range: new w.$iL(s, 1, s, 11) });
								const b = new E.$JBb();
								b.add({ lenses: f, dispose() {} }, this.a),
									this.b.set(p, new a(o.lineCount, b));
							}
						} catch {}
					}
				};
				(e.$MBb = h),
					(e.$MBb = h = Ne([j(0, m.$lq)], h)),
					(0, C.$lK)(e.$LBb, h, C.InstantiationType.Delayed);
			},
		),
		define(
			de[1673],
			he([1, 0, 15, 3, 59, 387, 74, 10, 20, 5, 21]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				var a;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$uDb = e.$tDb = e.$sDb = e.$rDb = e.$qDb = e.$pDb = void 0);
				class h {
					constructor(f) {
						this.name = f;
					}
					select(f, b, s) {
						if (s.length === 0) return 0;
						const l = s[0].score[0];
						for (let y = 0; y < s.length; y++) {
							const { score: $, completion: v } = s[y];
							if ($[0] !== l) break;
							if (v.preselect) return y;
						}
						return 0;
					}
				}
				e.$pDb = h;
				class c extends h {
					constructor() {
						super("first");
					}
					memorize(f, b, s) {}
					toJSON() {}
					fromJSON() {}
				}
				e.$qDb = c;
				class n extends h {
					constructor() {
						super("recentlyUsed"),
							(this.c = new w.$Jc(300, 0.66)),
							(this.d = 0);
					}
					memorize(f, b, s) {
						const l = `${f.getLanguageId()}/${s.textLabel}`;
						this.c.set(l, {
							touch: this.d++,
							type: s.completion.kind,
							insertText: s.completion.insertText,
						});
					}
					select(f, b, s) {
						if (s.length === 0) return 0;
						const l = f
							.getLineContent(b.lineNumber)
							.substr(b.column - 10, b.column - 1);
						if (/\s$/.test(l)) return super.select(f, b, s);
						const y = s[0].score[0];
						let $ = -1,
							v = -1,
							S = -1;
						for (let I = 0; I < s.length && s[I].score[0] === y; I++) {
							const T = `${f.getLanguageId()}/${s[I].textLabel}`,
								P = this.c.peek(T);
							if (
								(P &&
									P.touch > S &&
									P.type === s[I].completion.kind &&
									P.insertText === s[I].completion.insertText &&
									((S = P.touch), (v = I)),
								s[I].completion.preselect && $ === -1)
							)
								return ($ = I);
						}
						return v !== -1 ? v : $ !== -1 ? $ : 0;
					}
					toJSON() {
						return this.c.toJSON();
					}
					fromJSON(f) {
						this.c.clear();
						const b = 0;
						for (const [s, l] of f)
							(l.touch = b),
								(l.type =
									typeof l.type == "number"
										? l.type
										: C.CompletionItemKinds.fromString(l.type)),
								this.c.set(s, l);
						this.d = this.c.size;
					}
				}
				e.$rDb = n;
				class g extends h {
					constructor() {
						super("recentlyUsedByPrefix"),
							(this.c = E.$Si.forStrings()),
							(this.d = 0);
					}
					memorize(f, b, s) {
						const { word: l } = f.getWordUntilPosition(b),
							y = `${f.getLanguageId()}/${l}`;
						this.c.set(y, {
							type: s.completion.kind,
							insertText: s.completion.insertText,
							touch: this.d++,
						});
					}
					select(f, b, s) {
						const { word: l } = f.getWordUntilPosition(b);
						if (!l) return super.select(f, b, s);
						const y = `${f.getLanguageId()}/${l}`;
						let $ = this.c.get(y);
						if (($ || ($ = this.c.findSubstr(y)), $))
							for (let v = 0; v < s.length; v++) {
								const { kind: S, insertText: I } = s[v].completion;
								if (S === $.type && I === $.insertText) return v;
							}
						return super.select(f, b, s);
					}
					toJSON() {
						const f = [];
						return (
							this.c.forEach((b, s) => f.push([s, b])),
							f
								.sort((b, s) => -(b[1].touch - s[1].touch))
								.forEach((b, s) => (b[1].touch = s)),
							f.slice(0, 200)
						);
					}
					fromJSON(f) {
						if ((this.c.clear(), f.length > 0)) {
							this.d = f[0][1].touch + 1;
							for (const [b, s] of f)
								(s.type =
									typeof s.type == "number"
										? s.type
										: C.CompletionItemKinds.fromString(s.type)),
									this.c.set(b, s);
						}
					}
				}
				e.$sDb = g;
				let p = class {
					static {
						a = this;
					}
					static {
						this.c = new Map([
							["recentlyUsedByPrefix", g],
							["recentlyUsed", n],
							["first", c],
						]);
					}
					static {
						this.d = "suggest/memories";
					}
					constructor(f, b) {
						(this.j = f),
							(this.k = b),
							(this.g = new i.$Zc()),
							(this.f = new t.$Yh(() => this.m(), 500)),
							this.g.add(
								f.onWillSaveState((s) => {
									s.reason === u.WillSaveStateReason.SHUTDOWN && this.m();
								}),
							);
					}
					dispose() {
						this.g.dispose(), this.f.dispose();
					}
					memorize(f, b, s) {
						this.l(f, b).memorize(f, b, s), this.f.schedule();
					}
					select(f, b, s) {
						return this.l(f, b).select(f, b, s);
					}
					l(f, b) {
						const s = this.k.getValue("editor.suggestSelection", {
							overrideIdentifier: f.getLanguageIdAtPosition(
								b.lineNumber,
								b.column,
							),
							resource: f.uri,
						});
						if (this.h?.name !== s) {
							this.m();
							const l = a.c.get(s) || c;
							this.h = new l();
							try {
								const $ = this.k.getValue(
										"editor.suggest.shareSuggestSelections",
									)
										? u.StorageScope.PROFILE
										: u.StorageScope.WORKSPACE,
									v = this.j.get(`${a.d}/${s}`, $);
								v && this.h.fromJSON(JSON.parse(v));
							} catch {}
						}
						return this.h;
					}
					m() {
						if (this.h) {
							const b = this.k.getValue("editor.suggest.shareSuggestSelections")
									? u.StorageScope.PROFILE
									: u.StorageScope.WORKSPACE,
								s = JSON.stringify(this.h);
							this.j.store(
								`${a.d}/${this.h.name}`,
								s,
								b,
								u.StorageTarget.MACHINE,
							);
						}
					}
				};
				(e.$tDb = p),
					(e.$tDb = p = a = Ne([j(0, u.$lq), j(1, d.$gj)], p)),
					(e.$uDb = (0, r.$Mi)("ISuggestMemories")),
					(0, m.$lK)(e.$uDb, p, m.InstantiationType.Delayed);
			},
		),
		define(
			de[92],
			he([
				1, 0, 7, 114, 198, 437, 50, 592, 27, 3, 12, 4, 11, 599, 8, 49, 5, 39,
				40, 21, 35, 26, 212, 28, 51, 106, 91, 58, 2328,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Oyb = e.$Nyb = e.$Myb = e.$Lyb = void 0),
					(e.$Jyb = P),
					(e.$Kyb = k),
					(e.$Pyb = O);
				function P(B, U, z, F) {
					let x, H, q;
					if (Array.isArray(B)) (q = B), (x = U), (H = z);
					else {
						const K = U;
						(q = B.getActions(K)), (x = z), (H = F);
					}
					const V = t.$Fhb.getInstance(),
						G = V.keyStatus.altKey || ((u.$l || u.$n) && V.keyStatus.shiftKey);
					L(q, x, G, H ? (K) => K === H : (K) => K === "navigation");
				}
				function k(B, U, z, F, x, H) {
					let q, V, G, K, J;
					if (Array.isArray(B)) (J = B), (q = U), (V = z), (G = F), (K = x);
					else {
						const X = U;
						(J = B.getActions(X)), (q = z), (V = F), (G = x), (K = H);
					}
					L(J, q, !1, typeof V == "string" ? (X) => X === V : V, G, K);
				}
				function L(
					B,
					U,
					z,
					F = (q) => q === "navigation",
					x = () => !1,
					H = !1,
				) {
					let q, V;
					Array.isArray(U)
						? ((q = U), (V = U))
						: ((q = U.primary), (V = U.secondary));
					const G = new Set();
					for (const [K, J] of B) {
						let W;
						F(K)
							? ((W = q), W.length > 0 && H && W.push(new C.$tj()))
							: ((W = V), W.length > 0 && W.push(new C.$tj()));
						for (let X of J) {
							z && (X = X instanceof h.$2X && X.alt ? X.alt : X);
							const Y = W.push(X);
							X instanceof C.$uj &&
								G.add({ group: K, action: X, index: Y - 1 });
						}
					}
					for (const { group: K, action: J, index: W } of G) {
						const X = F(K) ? q : V,
							Y = J.actions;
						x(J, K, X.length) && X.splice(W, 1, ...Y);
					}
				}
				let D = class extends w.$_ib {
					dispose() {
						super.dispose(), this.y?.dispose();
					}
					constructor(U, z, F, x, H, q, V, G) {
						super(void 0, U, {
							icon: !!(U.class || U.item.icon),
							label: !U.class && !U.item.icon,
							draggable: z?.draggable,
							keybinding: z?.keybinding,
							hoverDelegate: z?.hoverDelegate,
						}),
							(this.W = z),
							(this.X = F),
							(this.Y = x),
							(this.Z = H),
							(this.ab = q),
							(this.bb = V),
							(this.cb = G),
							(this.n = !1),
							(this.r = this.D(new r.$2c())),
							(this.s = t.$Fhb.getInstance());
					}
					get db() {
						return this._action;
					}
					get eb() {
						return (this.n && this.db.alt) || this.db;
					}
					async onClick(U) {
						U.preventDefault(), U.stopPropagation();
						try {
							await this.actionRunner.run(this.eb, this._context);
						} catch (z) {
							this.Y.error(z);
						}
					}
					render(U) {
						if (this._action.id === T.$GV || this._action.id === T.$HV) {
							this.y && this.y.dispose();
							const z = document.createElement("span");
							z.classList.add("keybinding");
							const F = this.X.lookupKeybinding(this.eb.id, this.Z),
								x = F && F.getLabel();
							(z.textContent = x || ""),
								(z.style.fontSize = "10px"),
								(z.style.opacity = "0.5"),
								(z.style.display = "none"),
								(this.M = z);
							const H = this.Z;
							this.y = H.onDidChangeContext((q) => {
								q.affectsSome(new Set(["focusedView"])) &&
									(H.getContextKeyValue("focusedView") === T.$GX ||
									H.getContextKeyValue("focusedView") === T.$FX
										? (this.fb && clearTimeout(this.fb),
											Date.now() - T.$5V < 3e3
												? (this.fb = setTimeout(
														() => {
															z.style.display = "inline";
														},
														3e3 - (Date.now() - T.$5V),
													))
												: (z.style.display = "inline"))
										: (z.style.display = "none"));
							});
						}
						if (
							(super.render(U),
							U.classList.add("menu-entry"),
							this.m.icon && this.jb(this.db.item),
							this.db.alt)
						) {
							let z = !1;
							const F = () => {
								const x =
									!!this.db.alt?.enabled &&
									(!this.cb.isMotionReduced() || z) &&
									(this.s.keyStatus.altKey || (this.s.keyStatus.shiftKey && z));
								x !== this.n && ((this.n = x), this.u(), this.C(), this.G());
							};
							this.D(this.s.event(F)),
								this.D(
									(0, t.$0fb)(U, "mouseleave", (x) => {
										(z = !1), F();
									}),
								),
								this.D(
									(0, t.$0fb)(U, "mouseenter", (x) => {
										(z = !0), F();
									}),
								),
								F();
						}
					}
					u() {
						this.m.label && this.I && (this.I.textContent = this.eb.label);
					}
					z() {
						const U = this.X.lookupKeybinding(this.eb.id, this.Z),
							z = U && U.getLabel(),
							F = this.eb.tooltip || this.eb.label;
						let x = z ? (0, a.localize)(1653, null, F, z) : F;
						if (!this.n && this.db.alt?.enabled) {
							const H = this.db.alt.tooltip || this.db.alt.label,
								q = this.X.lookupKeybinding(this.db.alt.id, this.Z),
								V = q && q.getLabel(),
								G = V ? (0, a.localize)(1654, null, H, V) : H;
							x = (0, a.localize)(
								1655,
								null,
								x,
								d.$2ob.modifierLabels[u.OS].altKey,
								G,
							);
						}
						return x;
					}
					G() {
						this.m.icon &&
							(this.eb !== this.db
								? this.db.alt && this.jb(this.db.alt.item)
								: this.jb(this.db.item));
					}
					jb(U) {
						this.r.value = void 0;
						const { element: z, I: F } = this;
						if (!z || !F) return;
						const x =
							this.eb.checked && (0, c.$hk)(U.toggled) && U.toggled.icon
								? U.toggled.icon
								: U.icon;
						if (x)
							if (l.ThemeIcon.isThemeIcon(x)) {
								const H = l.ThemeIcon.asClassNameArray(x);
								F.classList.add(...H),
									(this.r.value = (0, r.$Yc)(() => {
										F.classList.remove(...H);
									}));
							} else
								(F.style.backgroundImage = (0, y.$hP)(
									this.ab.getColorTheme().type,
								)
									? (0, t.$vhb)(x.dark)
									: (0, t.$vhb)(x.light)),
									F.classList.add("icon"),
									(this.r.value = (0, r.$Xc)(
										(0, r.$Yc)(() => {
											(F.style.backgroundImage = ""),
												F.classList.remove("icon");
										}),
										this.ab.onDidColorThemeChange(() => {
											this.G();
										}),
									));
					}
				};
				(e.$Lyb = D),
					(e.$Lyb = D =
						Ne(
							[
								j(2, o.$uZ),
								j(3, f.$4N),
								j(4, n.$6j),
								j(5, s.$iP),
								j(6, g.$Xxb),
								j(7, I.$XK),
							],
							D,
						));
				class M extends D {
					render(U) {
						(this.m.label = !0),
							(this.m.icon = !1),
							super.render(U),
							U.classList.add("text-only"),
							U.classList.toggle("use-comma", this.W?.useComma ?? !1);
					}
					u() {
						const U = this.X.lookupKeybinding(this._action.id, this.Z);
						if (!U) return super.u();
						if (this.I) {
							const z = M.c(U);
							this.W?.conversational
								? (this.I.textContent = (0, a.localize)(
										1656,
										null,
										this._action.label,
										z,
									))
								: (this.I.textContent = (0, a.localize)(
										1657,
										null,
										this._action.label,
										z,
									));
						}
					}
					static c(U) {
						return U.getLabel()
							?.replace(/\benter\b/gi, "\u23CE")
							.replace(/\bEscape\b/gi, "Esc");
					}
				}
				e.$Myb = M;
				let N = class extends E.$Pob {
					constructor(U, z, F, x, H) {
						const q = {
							...z,
							menuAsChild: z?.menuAsChild ?? !1,
							classNames:
								z?.classNames ??
								(l.ThemeIcon.isThemeIcon(U.item.icon)
									? l.ThemeIcon.asClassName(U.item.icon)
									: void 0),
							keybindingProvider:
								z?.keybindingProvider ?? ((V) => F.lookupKeybinding(V.id)),
						};
						super(U, { getActions: () => U.actions }, x, q),
							(this.g = F),
							(this.r = x),
							(this.O = H);
					}
					render(U) {
						super.render(U),
							(0, $.$vg)(this.element),
							U.classList.add("menu-entry");
						const z = this._action,
							{ icon: F } = z.item;
						if (F && !l.ThemeIcon.isThemeIcon(F)) {
							this.element.classList.add("icon");
							const x = () => {
								this.element &&
									(this.element.style.backgroundImage = (0, y.$hP)(
										this.O.getColorTheme().type,
									)
										? (0, t.$vhb)(F.dark)
										: (0, t.$vhb)(F.light));
							};
							x(),
								this.D(
									this.O.onDidColorThemeChange(() => {
										x();
									}),
								);
						}
					}
				};
				(e.$Nyb = N),
					(e.$Nyb = N = Ne([j(2, o.$uZ), j(3, g.$Xxb), j(4, s.$iP)], N));
				let A = class extends w.$$ib {
					get onDidChangeDropdownVisibility() {
						return this.g.onDidChangeVisibility;
					}
					constructor(U, z, F, x, H, q, V, G) {
						super(null, U),
							(this.r = F),
							(this.s = x),
							(this.y = H),
							(this.I = q),
							(this.J = V),
							(this.L = G),
							(this.h = null),
							(this.b = z),
							(this.n = `${U.item.submenu.id}_lastActionId`);
						let K;
						const J = z?.persistLastActionId
							? G.get(this.n, b.StorageScope.WORKSPACE)
							: void 0;
						J && (K = U.actions.find((X) => J === X.id)),
							K || (K = U.actions[0]),
							(this.c = this.J.createInstance(D, K, { keybinding: this.N(K) }));
						const W = {
							keybindingProvider: (X) => this.r.lookupKeybinding(X.id),
							...z,
							menuAsChild: z?.menuAsChild ?? !0,
							classNames: z?.classNames ?? ["codicon", "codicon-chevron-down"],
							actionRunner: z?.actionRunner ?? new C.$sj(),
						};
						(this.g = new E.$Pob(U, U.actions, this.y, W)),
							this.D(
								this.g.actionRunner.onDidRun((X) => {
									X.action instanceof h.$2X && this.M(X.action);
								}),
							);
					}
					M(U) {
						this.b?.persistLastActionId &&
							this.L.store(
								this.n,
								U.id,
								b.StorageScope.WORKSPACE,
								b.StorageTarget.MACHINE,
							),
							this.c.dispose(),
							(this.c = this.J.createInstance(D, U, { keybinding: this.N(U) })),
							(this.c.actionRunner = new (class extends C.$sj {
								async q(z, F) {
									await z.run(void 0);
								}
							})()),
							this.h &&
								this.c.render(
									(0, t.$ghb)(this.h, (0, t.$)(".action-container")),
								);
					}
					N(U) {
						let z;
						if (this.b?.renderKeybindingWithDefaultActionLabel) {
							const F = this.r.lookupKeybinding(U.id);
							F && (z = `(${F.getLabel()})`);
						}
						return z;
					}
					setActionContext(U) {
						super.setActionContext(U),
							this.c.setActionContext(U),
							this.g.setActionContext(U);
					}
					render(U) {
						(this.h = U),
							super.render(this.h),
							this.h.classList.add("monaco-dropdown-with-default");
						const z = (0, t.$)(".action-container");
						this.c.render((0, t.$fhb)(this.h, z)),
							this.D(
								(0, t.$0fb)(z, t.$$gb.KEY_DOWN, (x) => {
									const H = new i.$7fb(x);
									H.equals(m.KeyCode.RightArrow) &&
										((this.c.element.tabIndex = -1),
										this.g.focus(),
										H.stopPropagation());
								}),
							);
						const F = (0, t.$)(".dropdown-action-container");
						this.g.render((0, t.$fhb)(this.h, F)),
							this.D(
								(0, t.$0fb)(F, t.$$gb.KEY_DOWN, (x) => {
									const H = new i.$7fb(x);
									H.equals(m.KeyCode.LeftArrow) &&
										((this.c.element.tabIndex = 0),
										this.g.setFocusable(!1),
										this.c.element?.focus(),
										H.stopPropagation());
								}),
							);
					}
					focus(U) {
						U
							? this.g.focus()
							: ((this.c.element.tabIndex = 0), this.c.element.focus());
					}
					blur() {
						(this.c.element.tabIndex = -1), this.g.blur(), this.h.blur();
					}
					setFocusable(U) {
						U
							? (this.c.element.tabIndex = 0)
							: ((this.c.element.tabIndex = -1), this.g.setFocusable(!1));
					}
					dispose() {
						this.c.dispose(), this.g.dispose(), super.dispose();
					}
				};
				(e.$Oyb = A),
					(e.$Oyb = A =
						Ne(
							[
								j(2, o.$uZ),
								j(3, f.$4N),
								j(4, g.$Xxb),
								j(5, h.$YX),
								j(6, p.$Li),
								j(7, b.$lq),
							],
							A,
						));
				let R = class extends w.$ajb {
					constructor(U, z) {
						super(
							null,
							U,
							U.actions.map((F) => ({
								text:
									F.id === C.$tj.ID
										? "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"
										: F.label,
								isDisabled: !F.enabled,
							})),
							0,
							z,
							S.$Fyb,
							{ ariaLabel: U.tooltip, optionsAsChildren: !0 },
						),
							this.select(
								Math.max(
									0,
									U.actions.findIndex((F) => F.checked),
								),
							);
					}
					render(U) {
						super.render(U), (U.style.borderColor = (0, v.$rP)(v.$bS));
					}
					n(U, z) {
						const F = this.action.actions[z];
						F && this.actionRunner.run(F);
					}
				};
				R = Ne([j(1, g.$Wxb)], R);
				function O(B, U, z) {
					return U instanceof h.$2X
						? B.createInstance(D, U, z)
						: U instanceof h.$1X
							? U.item.isSelection
								? B.createInstance(R, U)
								: U.item.rememberDefaultAction
									? B.createInstance(A, U, { ...z, persistLastActionId: !0 })
									: B.createInstance(N, U, z)
							: void 0;
				}
			},
		),
		define(
			de[1674],
			he([1, 0, 7, 105, 3, 92, 11, 8, 5]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$xDb = void 0),
					(t = mt(t));
				let r = class {
					constructor(a, h, c, n, g) {
						(this.d = h),
							(this.e = n),
							(this.f = g),
							(this.c = new w.$Zc()),
							(this.element = t.$fhb(a, t.$(".suggest-status-bar")));
						const p = (o) =>
							o instanceof C.$2X
								? c.createInstance(E.$Myb, o, { useComma: !0 })
								: void 0;
						(this.a = new i.$eib(this.element, { actionViewItemProvider: p })),
							(this.b = new i.$eib(this.element, {
								actionViewItemProvider: p,
							})),
							this.a.domNode.classList.add("left"),
							this.b.domNode.classList.add("right");
					}
					dispose() {
						this.c.dispose(),
							this.a.dispose(),
							this.b.dispose(),
							this.element.remove();
					}
					show() {
						const a = this.e.createMenu(this.d, this.f),
							h = () => {
								const c = [],
									n = [];
								for (const [g, p] of a.getActions())
									g === "left" ? c.push(...p) : n.push(...p);
								this.a.clear(), this.a.push(c), this.b.clear(), this.b.push(n);
							};
						this.c.add(a.onDidChange(() => h())), this.c.add(a);
					}
					hide() {
						this.c.clear();
					}
				};
				(e.$xDb = r),
					(e.$xDb = r = Ne([j(2, m.$Li), j(3, C.$YX), j(4, d.$6j)], r));
			},
		),
		define(
			de[1675],
			he([1, 0, 183, 95, 50, 14, 6, 3, 26, 4, 92, 11, 8, 49, 72, 39, 32]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$LLb = e.$KLb = void 0);
				let o = class extends t.$rob {
					constructor(s, l, y, $, v, S) {
						super(s),
							(this.k = l),
							(this.l = y),
							(this.m = $),
							(this.n = S),
							(this.f = new d.$Zc()),
							(this.g = new d.$Zc()),
							(this.j = new C.$re()),
							(this.onDidChange = this.j.event),
							(this.h = this.f.add(new w.$sj())),
							l?.telemetrySource &&
								this.h.onDidRun(
									(I) => {
										v.publicLog2("workbenchActionExecuted", {
											id: I.action.id,
											from: l.telemetrySource,
										});
									},
									void 0,
									this.f,
								);
					}
					dispose() {
						this.j.dispose(),
							this.g.dispose(),
							this.f.dispose(),
							super.dispose();
					}
					update(s, l) {
						const y =
							this.k?.buttonConfigProvider ?? (() => ({ showLabel: !0 }));
						this.g.clear(), this.clear();
						const $ = this.g.add((0, i.$dib)());
						for (let v = 0; v < s.length; v++) {
							const S = v > 0,
								I = s[v];
							let T, P;
							if (I instanceof w.$uj && I.actions.length > 0) {
								const [D, ...M] = I.actions;
								(T = D),
									(P = this.addButtonWithDropdown({
										secondary: y(T, v)?.isSecondary ?? S,
										actionRunner: this.h,
										actions: M,
										contextMenuProvider: this.l,
										ariaLabel: T.label,
									}));
							} else
								(T = I),
									(P = this.addButton({
										secondary: y(T, v)?.isSecondary ?? S,
										ariaLabel: T.label,
									}));
							(P.enabled = T.enabled),
								(P.checked = T.checked ?? !1),
								P.element.classList.add("default-colors"),
								(y(T, v)?.showLabel ?? !0)
									? (P.label = T.label)
									: P.element.classList.add("monaco-text-button"),
								y(T, v)?.showIcon &&
									(T instanceof a.$2X && m.ThemeIcon.isThemeIcon(T.item.icon)
										? (P.icon = T.item.icon)
										: T.class &&
											P.element.classList.add(...T.class.split(" ")));
							const k = this.m.lookupKeybinding(T.id);
							let L;
							k
								? (L = (0, r.localize)(1650, null, T.label, k.getLabel()))
								: (L = T.label),
								this.g.add(this.n.setupManagedHover($, P.element, L)),
								this.g.add(
									P.onDidClick(async () => {
										this.h.run(T);
									}),
								);
						}
						if (l.length > 0) {
							const v = this.addButton({
								secondary: !0,
								ariaLabel: (0, r.localize)(1651, null),
							});
							(v.icon = E.$ak.dropDownButton),
								v.element.classList.add("default-colors", "monaco-text-button"),
								(v.enabled = !0),
								this.g.add(
									this.n.setupManagedHover(
										$,
										v.element,
										(0, r.localize)(1652, null),
									),
								),
								this.g.add(
									v.onDidClick(async () => {
										this.l.showContextMenu({
											getAnchor: () => v.element,
											getActions: () => l,
											actionRunner: this.h,
											onHide: () =>
												v.element.setAttribute("aria-expanded", "false"),
										}),
											v.element.setAttribute("aria-expanded", "true");
									}),
								);
						}
						this.j.fire(this);
					}
				};
				(e.$KLb = o),
					(e.$KLb = o =
						Ne([j(2, c.$Xxb), j(3, g.$uZ), j(4, p.$km), j(5, n.$Uyb)], o));
				let f = class extends o {
					constructor(s, l, y, $, v, S, I, T, P) {
						super(s, y, S, I, T, P);
						const k = $.createMenu(l, v);
						this.f.add(k);
						const L = () => {
							this.clear();
							const D = [],
								M = [];
							(0, u.$Kyb)(
								k,
								y?.menuOptions,
								{ primary: D, secondary: M },
								y?.toolbarOptions?.primaryGroup,
							),
								super.update(D, M);
						};
						this.f.add(k.onDidChange(L)), L();
					}
					dispose() {
						super.dispose();
					}
					update(s) {
						throw new Error("Use Menu or WorkbenchButtonBar");
					}
				};
				(e.$LLb = f),
					(e.$LLb = f =
						Ne(
							[
								j(3, a.$YX),
								j(4, h.$6j),
								j(5, c.$Xxb),
								j(6, g.$uZ),
								j(7, p.$km),
								j(8, n.$Uyb),
							],
							f,
						));
			},
		),
		define(
			de[607],
			he([1, 0, 7, 114, 198, 437, 27, 92, 8, 39, 40, 35, 91]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$OYb = void 0),
					(t = mt(t));
				let c = class extends w.$$ib {
					get onDidChangeDropdownVisibility() {
						return this.c.onDidChangeVisibility;
					}
					constructor(g, p, o, f, b, s, l, y, $, v, S) {
						super(null, g, { hoverDelegate: s?.hoverDelegate }),
							(this.n = b),
							(this.r = s),
							(this.g = null),
							(this.h = null),
							(this.b = new d.$Lyb(
								g,
								{ hoverDelegate: s?.hoverDelegate },
								l,
								y,
								$,
								v,
								b,
								S,
							)),
							s?.actionRunner && (this.b.actionRunner = s.actionRunner),
							(this.c = new E.$Pob(p, o, this.n, {
								menuAsChild: s?.menuAsChild ?? !0,
								classNames: f
									? ["codicon", "codicon-chevron-down", f]
									: ["codicon", "codicon-chevron-down"],
								actionRunner: this.r?.actionRunner,
								keybindingProvider: this.r?.getKeyBinding,
								hoverDelegate: s?.hoverDelegate,
							}));
					}
					setActionContext(g) {
						super.setActionContext(g),
							this.b.setActionContext(g),
							this.c.setActionContext(g);
					}
					render(g) {
						(this.g = g),
							super.render(this.g),
							this.g.classList.add("monaco-dropdown-with-primary");
						const p = t.$(".action-container");
						this.b.render(t.$fhb(this.g, p)),
							(this.h = t.$(".dropdown-action-container")),
							this.c.render(t.$fhb(this.g, this.h)),
							this.D(
								t.$0fb(p, t.$$gb.KEY_DOWN, (o) => {
									const f = new i.$7fb(o);
									f.equals(C.KeyCode.RightArrow) &&
										((this.b.element.tabIndex = -1),
										this.c.focus(),
										f.stopPropagation());
								}),
							),
							this.D(
								t.$0fb(this.h, t.$$gb.KEY_DOWN, (o) => {
									const f = new i.$7fb(o);
									f.equals(C.KeyCode.LeftArrow) &&
										((this.b.element.tabIndex = 0),
										this.c.setFocusable(!1),
										this.b.element?.focus(),
										f.stopPropagation());
								}),
							),
							this.t();
					}
					focus(g) {
						g
							? this.c.focus()
							: ((this.b.element.tabIndex = 0), this.b.element.focus());
					}
					blur() {
						(this.b.element.tabIndex = -1), this.c.blur(), this.g.blur();
					}
					setFocusable(g) {
						g
							? (this.b.element.tabIndex = 0)
							: ((this.b.element.tabIndex = -1), this.c.setFocusable(!1));
					}
					t() {
						const g = !this.action.enabled;
						this.element?.classList.toggle("disabled", g);
					}
					update(g, p, o) {
						this.c.dispose(),
							(this.c = new E.$Pob(g, p, this.n, {
								menuAsChild: !0,
								classNames: ["codicon", o || "codicon-chevron-down"],
								actionRunner: this.r?.actionRunner,
								hoverDelegate: this.r?.hoverDelegate,
								keybindingProvider: this.r?.getKeyBinding,
							})),
							this.h && this.c.render(this.h);
					}
					dispose() {
						this.b.dispose(), this.c.dispose(), super.dispose();
					}
				};
				(e.$OYb = c),
					(e.$OYb = c =
						Ne(
							[
								j(6, r.$uZ),
								j(7, u.$4N),
								j(8, m.$6j),
								j(9, a.$iP),
								j(10, h.$XK),
							],
							c,
						));
			},
		),
		define(
			de[1676],
			he([1, 0, 7, 235, 6, 3, 92, 11, 8, 5, 51]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$t4b = e.$s4b = e.$r4b = void 0);
				class a extends i.$Uhb {
					constructor(g) {
						super(),
							(this.c = g),
							(this.a = this.D(new w.$re())),
							(this.onClick = this.a.event),
							(this.b = (0, t.$)(".floating-click-widget")),
							(this.b.style.padding = "6px 11px"),
							(this.b.style.borderRadius = "2px"),
							(this.b.style.cursor = "pointer"),
							(this.b.style.zIndex = "1");
					}
					getDomNode() {
						return this.b;
					}
					render() {
						(0, t.$9fb)(this.b),
							(this.b.style.backgroundColor = (0, u.$sP)(
								u.$eS,
								(0, u.$rP)(u.$8P),
							)),
							(this.b.style.color = (0, u.$sP)(u.$cS, (0, u.$rP)(u.$9P))),
							(this.b.style.border = `1px solid ${(0, u.$rP)(u.$OP)}`),
							((0, t.$fhb)(this.b, (0, t.$)("")).textContent = this.c),
							this.f(this.b, () => this.a.fire());
					}
				}
				e.$r4b = a;
				let h = class extends E.$1c {
					constructor(g, p, o) {
						super(),
							(this.a = new w.$re()),
							(this.b = this.a.event),
							(this.c = this.D(p.createMenu(g, o)));
					}
					f() {
						const g = this.D(new E.$Zc()),
							p = () => {
								if ((g.clear(), !this.j())) return;
								const o = [];
								if (
									((0, C.$Kyb)(
										this.c,
										{ renderShortTitle: !0, shouldForwardArgs: !0 },
										o,
									),
									o.length === 0)
								)
									return;
								const [f] = o,
									b = this.g(f, g);
								g.add(b), g.add(b.onClick(() => f.run(this.h()))), b.render();
							};
						this.D(this.c.onDidChange(p)), p();
					}
					h() {}
					j() {
						return !0;
					}
				};
				(e.$s4b = h), (e.$s4b = h = Ne([j(1, d.$YX), j(2, m.$6j)], h));
				let c = class extends h {
					constructor(g, p, o, f) {
						super(g.menuId, o, f), (this.m = g), (this.n = p), this.f();
					}
					g(g, p) {
						const o = this.n.createInstance(a, g.label),
							f = o.getDomNode();
						return (
							this.m.container.appendChild(f),
							p.add((0, E.$Yc)(() => f.remove())),
							o
						);
					}
					h() {
						return this.m.getActionArg();
					}
				};
				(e.$t4b = c),
					(e.$t4b = c = Ne([j(1, r.$Li), j(2, d.$YX), j(3, m.$6j)], c));
			},
		),
		define(
			de[1677],
			he([1, 0, 15, 6, 3, 11, 31, 8, 50, 21, 24, 4, 39]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				var c, n;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Qyb = void 0),
					(e.$Ryb = l);
				let g = class {
					constructor($, v, S) {
						(this.d = $), (this.f = v), (this.c = new p(S));
					}
					createMenu($, v, S) {
						return new b(
							$,
							this.c,
							{ emitEventsForSubmenuChanges: !1, eventDebounceDelay: 50, ...S },
							this.d,
							this.f,
							v,
						);
					}
					getMenuActions($, v, S) {
						const I = new b(
								$,
								this.c,
								{
									emitEventsForSubmenuChanges: !1,
									eventDebounceDelay: 50,
									...S,
								},
								this.d,
								this.f,
								v,
							),
							T = I.getActions(S);
						return I.dispose(), T;
					}
					getMenuContexts($) {
						const v = new o($, !1);
						return new Set([
							...v.structureContextKeys,
							...v.preconditionContextKeys,
							...v.toggledContextKeys,
						]);
					}
					resetHiddenStates($) {
						this.c.reset($);
					}
				};
				(e.$Qyb = g),
					(e.$Qyb = g = Ne([j(0, C.$ek), j(1, h.$uZ), j(2, r.$lq)], g));
				let p = class {
					static {
						c = this;
					}
					static {
						this.c = "menu.hiddenCommands";
					}
					constructor($) {
						(this.k = $),
							(this.d = new w.$Zc()),
							(this.f = new i.$re()),
							(this.onDidChange = this.f.event),
							(this.h = !1),
							(this.j = new Map());
						try {
							const v = $.get(c.c, r.StorageScope.PROFILE, "{}");
							this.i = JSON.parse(v);
						} catch {
							this.i = Object.create(null);
						}
						this.d.add(
							$.onDidChangeValue(
								r.StorageScope.PROFILE,
								c.c,
								this.d,
							)(() => {
								if (!this.h)
									try {
										const v = $.get(c.c, r.StorageScope.PROFILE, "{}");
										this.i = JSON.parse(v);
									} catch (v) {
										console.log("FAILED to read storage after UPDATE", v);
									}
								this.f.fire();
							}),
						);
					}
					dispose() {
						this.f.dispose(), this.d.dispose();
					}
					l($, v) {
						return this.j.get(`${$.id}/${v}`) ?? !1;
					}
					setDefaultState($, v, S) {
						this.j.set(`${$.id}/${v}`, S);
					}
					isHidden($, v) {
						const S = this.l($, v),
							I = this.i[$.id]?.includes(v) ?? !1;
						return S ? !I : I;
					}
					updateHidden($, v, S) {
						this.l($, v) && (S = !S);
						const T = this.i[$.id];
						if (S) T ? T.indexOf(v) < 0 && T.push(v) : (this.i[$.id] = [v]);
						else if (T) {
							const P = T.indexOf(v);
							P >= 0 && (0, u.$zb)(T, P), T.length === 0 && delete this.i[$.id];
						}
						this.m();
					}
					reset($) {
						if ($ === void 0) (this.i = Object.create(null)), this.m();
						else {
							for (const { id: v } of $) this.i[v] && delete this.i[v];
							this.m();
						}
					}
					m() {
						try {
							this.h = !0;
							const $ = JSON.stringify(this.i);
							this.k.store(
								c.c,
								$,
								r.StorageScope.PROFILE,
								r.StorageTarget.USER,
							);
						} finally {
							this.h = !1;
						}
					}
				};
				p = c = Ne([j(0, r.$lq)], p);
				class o {
					constructor($, v) {
						(this.j = $),
							(this.k = v),
							(this.c = []),
							(this.d = new Set()),
							(this.f = new Set()),
							(this.h = new Set()),
							(this.i = new Set()),
							this.refresh();
					}
					get allMenuIds() {
						return this.d;
					}
					get structureContextKeys() {
						return this.f;
					}
					get preconditionContextKeys() {
						return this.h;
					}
					get toggledContextKeys() {
						return this.i;
					}
					refresh() {
						(this.c.length = 0),
							this.d.clear(),
							this.f.clear(),
							this.h.clear(),
							this.i.clear();
						const $ = this.l(E.$ZX.getMenuItems(this.j));
						let v;
						for (const S of $) {
							const I = S.group || "";
							(!v || v[0] !== I) && ((v = [I, []]), this.c.push(v)),
								v[1].push(S),
								this.m(S);
						}
						this.d.add(this.j);
					}
					l($) {
						return $;
					}
					m($) {
						if ((o.n($.when, this.f), (0, E.$VX)($))) {
							if (
								($.command.precondition && o.n($.command.precondition, this.h),
								$.command.toggled)
							) {
								const v = $.command.toggled.condition || $.command.toggled;
								o.n(v, this.i);
							}
						} else
							this.k &&
								(E.$ZX.getMenuItems($.submenu).forEach(this.m, this),
								this.d.add($.submenu));
					}
					static n($, v) {
						if ($) for (const S of $.keys()) v.add(S);
					}
				}
				let f = (n = class extends o {
					constructor($, v, S, I, T, P) {
						super($, S),
							(this.o = v),
							(this.p = I),
							(this.q = T),
							(this.r = P),
							this.refresh();
					}
					createActionGroups($) {
						const v = [];
						for (const S of this.c) {
							const [I, T] = S;
							let P;
							for (const k of T)
								if (this.r.contextMatchesRules(k.when)) {
									const L = (0, E.$VX)(k);
									L &&
										this.o.setDefaultState(
											this.j,
											k.command.id,
											!!k.isHiddenByDefault,
										);
									const D = s(this.j, L ? k.command : k, this.o);
									if (L) {
										const M = l(this.p, this.q, k.command.id, k.when);
										(P ??= []).push(
											new E.$2X(k.command, k.alt, $, D, M, this.r, this.p),
										);
									} else {
										const M = new n(
												k.submenu,
												this.o,
												this.k,
												this.p,
												this.q,
												this.r,
											).createActionGroups($),
											N = m.$tj.join(...M.map((A) => A[1]));
										N.length > 0 && (P ??= []).push(new E.$1X(k, D, N));
									}
								}
							P && P.length > 0 && v.push([I, P]);
						}
						return v;
					}
					l($) {
						return $.sort(n.t);
					}
					static t($, v) {
						const S = $.group,
							I = v.group;
						if (S !== I) {
							if (S) {
								if (!I) return -1;
							} else return 1;
							if (S === "navigation") return -1;
							if (I === "navigation") return 1;
							const k = S.localeCompare(I);
							if (k !== 0) return k;
						}
						const T = $.order || 0,
							P = v.order || 0;
						return T < P
							? -1
							: T > P
								? 1
								: n.u(
										(0, E.$VX)($) ? $.command.title : $.title,
										(0, E.$VX)(v) ? v.command.title : v.title,
									);
					}
					static u($, v) {
						const S = typeof $ == "string" ? $ : $.original,
							I = typeof v == "string" ? v : v.original;
						return S.localeCompare(I);
					}
				});
				f = n = Ne([j(3, C.$ek), j(4, h.$uZ), j(5, d.$6j)], f);
				let b = class {
					constructor($, v, S, I, T, P) {
						(this.d = new w.$Zc()),
							(this.c = new f($, v, S.emitEventsForSubmenuChanges, I, T, P));
						const k = new t.$Yh(() => {
							this.c.refresh(),
								this.f.fire({
									menu: this,
									isStructuralChange: !0,
									isEnablementChange: !0,
									isToggleChange: !0,
								});
						}, S.eventDebounceDelay);
						this.d.add(k),
							this.d.add(
								E.$ZX.onDidChangeMenu((N) => {
									for (const A of this.c.allMenuIds)
										if (N.has(A)) {
											k.schedule();
											break;
										}
								}),
							);
						const L = this.d.add(new w.$Zc()),
							D = (N) => {
								let A = !1,
									R = !1,
									O = !1;
								for (const B of N)
									if (
										((A = A || B.isStructuralChange),
										(R = R || B.isEnablementChange),
										(O = O || B.isToggleChange),
										A && R && O)
									)
										break;
								return {
									menu: this,
									isStructuralChange: A,
									isEnablementChange: R,
									isToggleChange: O,
								};
							},
							M = () => {
								L.add(
									P.onDidChangeContext((N) => {
										const A = N.affectsSome(this.c.structureContextKeys),
											R = N.affectsSome(this.c.preconditionContextKeys),
											O = N.affectsSome(this.c.toggledContextKeys);
										(A || R || O) &&
											this.f.fire({
												menu: this,
												isStructuralChange: A,
												isEnablementChange: R,
												isToggleChange: O,
											});
									}),
								),
									L.add(
										v.onDidChange((N) => {
											this.f.fire({
												menu: this,
												isStructuralChange: !0,
												isEnablementChange: !1,
												isToggleChange: !1,
											});
										}),
									);
							};
						(this.f = new i.$ve({
							onWillAddFirstListener: M,
							onDidRemoveLastListener: L.clear.bind(L),
							delay: S.eventDebounceDelay,
							merge: D,
						})),
							(this.onDidChange = this.f.event);
					}
					getActions($) {
						return this.c.createActionGroups($);
					}
					dispose() {
						this.d.dispose(), this.f.dispose();
					}
				};
				b = Ne([j(3, C.$ek), j(4, h.$uZ), j(5, d.$6j)], b);
				function s(y, $, v) {
					const S = (0, E.$WX)($) ? $.submenu.id : $.id,
						I = typeof $.title == "string" ? $.title : $.title.value,
						T = (0, m.$wj)({
							id: `hide/${y.id}/${S}`,
							label: (0, a.localize)(1661, null, I),
							run() {
								v.updateHidden(y, S, !0);
							},
						}),
						P = (0, m.$wj)({
							id: `toggle/${y.id}/${S}`,
							label: I,
							get checked() {
								return !v.isHidden(y, S);
							},
							run() {
								v.updateHidden(y, S, !!this.checked);
							},
						});
					return {
						hide: T,
						toggle: P,
						get isHidden() {
							return !P.checked;
						},
					};
				}
				function l(y, $, v, S = void 0, I = !0) {
					return (0, m.$wj)({
						id: `configureKeybinding/${v}`,
						label: (0, a.localize)(1662, null),
						enabled: I,
						run() {
							const P = !!!$.lookupKeybinding(v) && S ? S.serialize() : void 0;
							y.executeCommand(
								"workbench.action.openGlobalKeybindings",
								`@command:${v}` + (P ? ` +when:${P}` : ""),
							);
						},
					});
				}
			},
		),
		define(
			de[173],
			he([
				1, 0, 7, 168, 461, 50, 24, 456, 29, 6, 103, 3, 4, 92, 11, 1677, 31, 8,
				49, 39, 32,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Tyb = e.$Syb = e.HiddenItemStrategy = void 0);
				var l;
				(function (v) {
					(v[(v.NoHide = -1)] = "NoHide"),
						(v[(v.Ignore = 0)] = "Ignore"),
						(v[(v.RenderInSecondaryGroup = 1)] = "RenderInSecondaryGroup");
				})(l || (e.HiddenItemStrategy = l = {}));
				let y = class extends w.$jpb {
					constructor(S, I, T, P, k, L, D, M) {
						super(S, k, {
							getKeyBinding: (A) => L.lookupKeybinding(A.id) ?? void 0,
							...I,
							allowContextMenu: !0,
							skipTelemetry: typeof I?.telemetrySource == "string",
						}),
							(this.H = I),
							(this.I = T),
							(this.J = P),
							(this.L = k),
							(this.M = L),
							(this.N = D),
							(this.G = this.B.add(new a.$Zc()));
						const N = I?.telemetrySource;
						N &&
							this.B.add(
								this.m.onDidRun((A) =>
									M.publicLog2("workbenchActionExecuted", {
										id: A.action.id,
										from: N,
									}),
								),
							);
					}
					setActions(S, I = [], T) {
						this.G.clear();
						const P = S.slice(),
							k = I.slice(),
							L = [];
						let D = 0;
						const M = [];
						let N = !1;
						if (this.H?.hiddenItemStrategy !== l.NoHide)
							for (let A = 0; A < P.length; A++) {
								const R = P[A];
								(!(R instanceof n.$2X) && !(R instanceof n.$1X)) ||
									(R.hideActions &&
										(L.push(R.hideActions.toggle),
										R.hideActions.toggle.checked && D++,
										R.hideActions.isHidden &&
											((N = !0),
											(P[A] = void 0),
											this.H?.hiddenItemStrategy !== l.Ignore && (M[A] = R))));
							}
						if (this.H?.overflowBehavior !== void 0) {
							const A = (0, d.$h)(
									new Set(this.H.overflowBehavior.exempted),
									u.Iterable.map(P, (B) => B?.id),
								),
								R = this.H.overflowBehavior.maxItems - A.size;
							let O = 0;
							for (let B = 0; B < P.length; B++) {
								const U = P[B];
								U &&
									(O++,
									!A.has(U.id) && O >= R && ((P[B] = void 0), (M[B] = U)));
							}
						}
						(0, C.$Mb)(P),
							(0, C.$Mb)(M),
							super.setActions(P, E.$tj.join(M, k)),
							(L.length > 0 || P.length > 0) &&
								this.G.add(
									(0, t.$0fb)(this.getElement(), "contextmenu", (A) => {
										const R = new i.$2fb(
												(0, t.getWindow)(this.getElement()),
												A,
											),
											O = this.getItemAction(R.target);
										if (!O) return;
										R.preventDefault(), R.stopPropagation();
										const B = [];
										if (O instanceof n.$2X && O.menuKeybinding)
											B.push(O.menuKeybinding);
										else if (!(O instanceof n.$1X || O instanceof w.$kpb)) {
											const z = !!this.M.lookupKeybinding(O.id);
											B.push((0, g.$Ryb)(this.N, this.M, O.id, void 0, z));
										}
										if (L.length > 0) {
											let z = !1;
											if (D === 1 && this.H?.hiddenItemStrategy === l.Ignore) {
												z = !0;
												for (let F = 0; F < L.length; F++)
													if (L[F].checked) {
														L[F] = (0, E.$wj)({
															id: O.id,
															label: O.label,
															checked: !0,
															enabled: !1,
															run() {},
														});
														break;
													}
											}
											if (!z && (O instanceof n.$2X || O instanceof n.$1X)) {
												if (!O.hideActions) return;
												B.push(O.hideActions.hide);
											} else
												B.push(
													(0, E.$wj)({
														id: "label",
														label: (0, h.localize)(1658, null),
														enabled: !1,
														run() {},
													}),
												);
										}
										const U = E.$tj.join(B, L);
										this.H?.resetMenu && !T && (T = [this.H.resetMenu]),
											N &&
												T &&
												(U.push(new E.$tj()),
												U.push(
													(0, E.$wj)({
														id: "resetThisMenu",
														label: (0, h.localize)(1659, null),
														run: () => this.I.resetHiddenStates(T),
													}),
												)),
											U.length !== 0 &&
												this.L.showContextMenu({
													getAnchor: () => R,
													getActions: () => U,
													menuId: this.H?.contextMenu,
													menuActionOptions: {
														renderShortTitle: !0,
														...this.H?.menuOptions,
													},
													skipTelemetry:
														typeof this.H?.telemetrySource == "string",
													contextKeyService: this.J,
												});
									}),
								);
					}
				};
				(e.$Syb = y),
					(e.$Syb = y =
						Ne(
							[
								j(2, n.$YX),
								j(3, o.$6j),
								j(4, f.$Xxb),
								j(5, b.$uZ),
								j(6, p.$ek),
								j(7, s.$km),
							],
							y,
						));
				let $ = class extends y {
					constructor(S, I, T, P, k, L, D, M, N) {
						super(S, { resetMenu: I, ...T }, P, k, L, D, M, N),
							(this.b = this.B.add(new r.$re())),
							(this.onDidChangeMenuItems = this.b.event);
						const A = this.B.add(
								P.createMenu(I, k, { emitEventsForSubmenuChanges: !0 }),
							),
							R = () => {
								const O = [],
									B = [];
								(0, c.$Kyb)(
									A,
									T?.menuOptions,
									{ primary: O, secondary: B },
									T?.toolbarOptions?.primaryGroup,
									T?.toolbarOptions?.shouldInlineSubmenu,
									T?.toolbarOptions?.useSeparatorsInPrimaryActions,
								),
									S.classList.toggle(
										"has-no-actions",
										O.length === 0 && B.length === 0,
									),
									super.setActions(O, B);
							};
						this.B.add(
							A.onDidChange(() => {
								R(), this.b.fire(this);
							}),
						),
							R();
					}
					setActions() {
						throw new m.$gb("This toolbar is populated from a menu.");
					}
				};
				(e.$Tyb = $),
					(e.$Tyb = $ =
						Ne(
							[
								j(3, n.$YX),
								j(4, o.$6j),
								j(5, f.$Xxb),
								j(6, b.$uZ),
								j(7, p.$ek),
								j(8, s.$km),
							],
							$,
						));
			},
		),
		define(
			de[2893],
			he([
				1, 0, 7, 105, 160, 3, 77, 319, 1586, 370, 2690, 1588, 38, 196, 289, 17,
				490, 342, 1540, 173, 11, 8, 72, 5,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Xyb = void 0);
				const v = [],
					S = 35;
				let I = class extends E.$1c {
					constructor(L, D, M, N, A, R, O, B, U) {
						super(),
							(this.t = D),
							(this.u = M),
							(this.w = N),
							(this.y = A),
							(this.z = R),
							(this.C = O),
							(this.F = B),
							(this.G = U),
							(this.b = this.D(
								this.G.createMenu(s.$XX.DiffEditorHunkToolbar, this.F),
							)),
							(this.f = (0, C.observableFromEvent)(
								this,
								this.b.onDidChange,
								() => this.b.getActions(),
							)),
							(this.j = this.f.map((z) => z.length > 0)),
							(this.n = (0, C.derived)(
								this,
								(z) => this.w.renderSideBySide.read(z) && this.j.read(z),
							)),
							(this.width = (0, C.derived)(this, (z) =>
								this.j.read(z) ? S : 0,
							)),
							(this.q = (0, t.h)(
								"div.gutter@gutter",
								{
									style: {
										position: "absolute",
										height: "100%",
										width: S + "px",
									},
								},
								[],
							)),
							(this.H = (0, C.derived)(this, (z) => {
								const F = this.t.read(z);
								if (!F) return;
								const x = F.diff.read(z)?.mappings,
									H = this.u.modifiedCursor.read(z);
								if (H)
									return x?.find((q) =>
										q.lineRangeMapping.modified.contains(H.lineNumber),
									);
							})),
							(this.I = (0, C.derived)(this, (z) => {
								const x = this.t.read(z)?.diff.read(z);
								if (!x) return v;
								const H = this.u.modifiedSelections.read(z);
								if (H.every((K) => K.isEmpty())) return v;
								const q = new c.$sL(H.map((K) => c.$rL.fromRangeInclusive(K))),
									G = x.mappings
										.filter(
											(K) =>
												K.lineRangeMapping.innerChanges &&
												q.intersects(K.lineRangeMapping.modified),
										)
										.map((K) => ({
											mapping: K,
											rangeMappings: K.lineRangeMapping.innerChanges.filter(
												(J) =>
													H.some((W) =>
														g.$iL.areIntersecting(J.modifiedRange, W),
													),
											),
										}));
								return G.length === 0 ||
									G.every((K) => K.rangeMappings.length === 0)
									? v
									: G;
							})),
							this.D((0, r.$zwb)(L, this.q.root)),
							this.D(
								(0, t.$0fb)(this.q.root, "click", () => {
									this.u.modified.focus();
								}),
							),
							this.D(
								(0, r.$Gwb)(this.q.root, {
									display: this.j.map((z) => (z ? "block" : "none")),
								}),
							),
							(0, d.$Yd)(this, (z) =>
								this.n.read(z)
									? new m.$fyb(
											L,
											this.y.dimensions,
											this.w.enableSplitViewResizing,
											this.z,
											(0, d.$Ud)(
												this,
												(x) => this.y.sashLeft.read(x) - S,
												(x, H) => this.y.sashLeft.set(x + S, H),
											),
											() => this.y.resetSash(),
										)
									: void 0,
							).recomputeInitiallyAndOnChange(this.B),
							this.D(
								new u.$gyb(this.u.modified, this.q.root, {
									getIntersectingGutterItems: (z, F) => {
										const x = this.t.read(F);
										if (!x) return [];
										const H = x.diff.read(F);
										if (!H) return [];
										const q = this.I.read(F);
										if (q.length > 0) {
											const G = o.$CL.fromRangeMappings(
												q.flatMap((K) => K.rangeMappings),
											);
											return [
												new T(
													G,
													!0,
													s.$XX.DiffEditorSelectionToolbar,
													void 0,
													x.model.original.uri,
													x.model.modified.uri,
												),
											];
										}
										const V = this.H.read(F);
										return H.mappings.map(
											(G) =>
												new T(
													G.lineRangeMapping.withInnerChangesFromLineRanges(),
													G.lineRangeMapping === V?.lineRangeMapping,
													s.$XX.DiffEditorHunkToolbar,
													void 0,
													x.model.original.uri,
													x.model.modified.uri,
												),
										);
									},
									createView: (z, F) => this.C.createInstance(P, z, F, this),
								}),
							),
							this.D(
								(0, t.$0fb)(
									this.q.gutter,
									t.$$gb.MOUSE_WHEEL,
									(z) => {
										this.u.modified.getOption(h.EditorOption.scrollbar)
											.handleMouseWheel &&
											this.u.modified.delegateScrollFromMouseWheelEvent(z);
									},
									{ passive: !1 },
								),
							);
					}
					computeStagedValue(L) {
						const D = L.innerChanges ?? [],
							M = new f.$iyb(this.u.modifiedModel.get()),
							N = new f.$iyb(this.u.original.getModel());
						return new p.$vL(D.map((O) => O.toTextEdit(M))).apply(N);
					}
					layout(L) {
						this.q.gutter.style.left = L + "px";
					}
				};
				(e.$Xyb = I),
					(e.$Xyb = I = Ne([j(6, $.$Li), j(7, l.$6j), j(8, s.$YX)], I));
				class T {
					constructor(L, D, M, N, A, R) {
						(this.mapping = L),
							(this.showAlways = D),
							(this.menuId = M),
							(this.rangeOverride = N),
							(this.originalUri = A),
							(this.modifiedUri = R);
					}
					get id() {
						return this.mapping.modified.toString();
					}
					get range() {
						return this.rangeOverride ?? this.mapping.modified;
					}
				}
				let P = class extends E.$1c {
					constructor(L, D, M, N) {
						super(),
							(this.q = L),
							(this.b = (0, t.h)(
								"div.gutterItem",
								{ style: { height: "20px", width: "34px" } },
								[
									(0, t.h)("div.background@background", {}, []),
									(0, t.h)("div.buttons@buttons", {}, []),
								],
							)),
							(this.f = this.q.map(this, (R) => R.showAlways)),
							(this.j = this.q.map(this, (R) => R.menuId)),
							(this.n = (0, C.observableValue)(this, !1)),
							(this.t = void 0),
							(this.u = void 0);
						const A = this.D(
							N.createInstance(y.$Vyb, "element", !0, {
								position: { hoverPosition: w.HoverPosition.RIGHT },
							}),
						);
						this.D((0, r.$ywb)(D, this.b.root)),
							this.D(
								(0, C.autorun)((R) => {
									const O = this.f.read(R);
									this.b.root.classList.toggle("noTransition", !0),
										this.b.root.classList.toggle("showAlways", O),
										setTimeout(() => {
											this.b.root.classList.toggle("noTransition", !1);
										}, 0);
								}),
							),
							this.D(
								(0, C.autorunWithStore)((R, O) => {
									this.b.buttons.replaceChildren();
									const B = O.add(
										N.createInstance(b.$Tyb, this.b.buttons, this.j.read(R), {
											orientation: i.ActionsOrientation.VERTICAL,
											hoverDelegate: A,
											toolbarOptions: {
												primaryGroup: (U) => U.startsWith("primary"),
											},
											overflowBehavior: { maxItems: this.n.read(R) ? 1 : 3 },
											hiddenItemStrategy: b.HiddenItemStrategy.Ignore,
											actionRunner: new a.$hyb(() => {
												const U = this.q.get(),
													z = U.mapping;
												return {
													mapping: z,
													originalWithModifiedChanges: M.computeStagedValue(z),
													originalUri: U.originalUri,
													modifiedUri: U.modifiedUri,
												};
											}),
											menuOptions: { shouldForwardArgs: !0 },
										}),
									);
									O.add(
										B.onDidChangeMenuItems(() => {
											this.t && this.layout(this.t, this.u);
										}),
									);
								}),
							);
					}
					layout(L, D) {
						(this.t = L), (this.u = D);
						let M = this.b.buttons.clientHeight;
						this.n.set(
							this.q.get().mapping.original.startLineNumber === 1 &&
								L.length < 30,
							void 0,
						),
							(M = this.b.buttons.clientHeight);
						const N = L.length / 2 - M / 2,
							A = M;
						let R = L.start + N;
						const O = n.$pL.tryCreate(A, D.endExclusive - A - M),
							B = n.$pL.tryCreate(L.start + A, L.endExclusive - M - A);
						B &&
							O &&
							B.start < B.endExclusive &&
							((R = O.clip(R)), (R = B.clip(R))),
							(this.b.buttons.style.top = `${R - L.start}px`);
					}
				};
				P = Ne([j(3, $.$Li)], P);
			},
		),
		define(
			de[1215],
			he([
				1, 0, 7, 198, 460, 50, 24, 15, 14, 3, 77, 319, 12, 26, 56, 38, 48, 74,
				64, 1154, 4, 92, 173, 11, 31, 8, 49, 5, 39, 32, 79, 2303,
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
			) {
				"use strict";
				var D;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$SDb = e.$RDb = e.$QDb = void 0);
				let M = class extends r.$1c {
					constructor(F, x, H) {
						super(),
							(this.n = F),
							(this.q = x),
							(this.r = H),
							(this.f = (0, u.observableFromEvent)(
								this,
								this.n.onDidChangeConfiguration,
								() =>
									this.n.getOption(g.EditorOption.inlineSuggest).showToolbar ===
									"always",
							)),
							(this.j = void 0),
							(this.m = (0, u.derived)(this, (q) => {
								const V = this.q.read(q)?.primaryGhostText.read(q);
								if (!this.f.read(q) || !V || V.parts.length === 0)
									return (this.j = void 0), null;
								const G = V.parts[0].column;
								this.j &&
									this.j.lineNumber !== V.lineNumber &&
									(this.j = void 0);
								const K = new p.$hL(
									V.lineNumber,
									Math.min(G, this.j?.column ?? Number.MAX_SAFE_INTEGER),
								);
								return (this.j = K), K;
							})),
							this.D(
								(0, u.autorunWithStore)((q, V) => {
									const G = this.q.read(q);
									if (!G || !this.f.read(q)) return;
									const K = (0, a.$Xd)((W, X) => {
											const Y = X.add(
												this.r.createInstance(
													R,
													this.n,
													!0,
													this.m,
													G.selectedInlineCompletionIndex,
													G.inlineCompletionsCount,
													G.activeCommands,
												),
											);
											return (
												F.addContentWidget(Y),
												X.add((0, r.$Yc)(() => F.removeContentWidget(Y))),
												X.add(
													(0, u.autorun)((ie) => {
														this.m.read(ie) &&
															G.lastTriggerKind.read(ie) !==
																o.InlineCompletionTriggerKind.Explicit &&
															G.triggerExplicitly();
													}),
												),
												Y
											);
										}),
										J = (0, u.derivedObservableWithCache)(
											this,
											(W, X) => !!this.m.read(W) || !!X,
										);
									V.add(
										(0, u.autorun)((W) => {
											J.read(W) && K.read(W);
										}),
									);
								}),
							);
					}
				};
				(e.$QDb = M), (e.$QDb = M = Ne([j(2, T.$Li)], M));
				const N = (0, L.$$O)(
						"inline-suggestion-hints-next",
						m.$ak.chevronRight,
						(0, s.localize)(1255, null),
					),
					A = (0, L.$$O)(
						"inline-suggestion-hints-previous",
						m.$ak.chevronLeft,
						(0, s.localize)(1256, null),
					);
				let R = class extends r.$1c {
					static {
						D = this;
					}
					static {
						this.f = !1;
					}
					static get dropDownVisible() {
						return this.f;
					}
					static {
						this.id = 0;
					}
					n(F, x, H) {
						const q = new E.$rj(F, x, H, !0, () => this.J.executeCommand(F)),
							V = this.L.lookupKeybinding(F, this.M);
						let G = x;
						return (
							V && (G = (0, s.localize)(1257, null, x, V.getLabel())),
							(q.tooltip = G),
							q
						);
					}
					constructor(F, x, H, q, V, G, K, J, W, X, Y) {
						super(),
							(this.z = F),
							(this.C = x),
							(this.F = H),
							(this.G = q),
							(this.H = V),
							(this.I = G),
							(this.J = K),
							(this.L = W),
							(this.M = X),
							(this.N = Y),
							(this.j = `InlineSuggestionHintsContentWidget${D.id++}`),
							(this.allowEditorOverflow = !0),
							(this.suppressMouseDown = !1),
							(this.m = (0, t.h)(
								"div.inlineSuggestionsHints",
								{ className: this.C ? ".withBorder" : "" },
								[(0, t.h)("div@toolBar")],
							)),
							(this.q = this.n(
								b.$uCb,
								(0, s.localize)(1258, null),
								c.ThemeIcon.asClassName(A),
							)),
							(this.r = new E.$rj(
								"inlineSuggestionHints.availableSuggestionCount",
								"",
								void 0,
								!1,
							)),
							(this.s = this.n(
								b.$vCb,
								(0, s.localize)(1259, null),
								c.ThemeIcon.asClassName(N),
							)),
							(this.u = this.D(
								this.N.createMenu($.$XX.InlineCompletionsActions, this.M),
							)),
							(this.w = this.D(
								new d.$Yh(() => {
									this.r.label = "";
								}, 100),
							)),
							(this.y = this.D(
								new d.$Yh(() => {
									this.q.enabled = this.s.enabled = !1;
								}, 100),
							)),
							(this.t = this.D(
								J.createInstance(
									U,
									this.m.toolBar,
									$.$XX.InlineSuggestionToolbar,
									{
										menuOptions: { renderShortTitle: !0 },
										toolbarOptions: {
											primaryGroup: (ie) => ie.startsWith("primary"),
										},
										actionViewItemProvider: (ie, ne) => {
											if (ie instanceof $.$2X)
												return J.createInstance(B, ie, void 0);
											if (ie === this.r) {
												const ee = new O(void 0, ie, { label: !0, icon: !1 });
												return ee.setClass("availableSuggestionCount"), ee;
											}
										},
										telemetrySource: "InlineSuggestionToolbar",
									},
								),
							)),
							this.t.setPrependedPrimaryActions([this.q, this.r, this.s]),
							this.D(
								this.t.onDidChangeDropdownVisibility((ie) => {
									D.f = ie;
								}),
							),
							this.D(
								(0, u.autorun)((ie) => {
									this.F.read(ie), this.z.layoutContentWidget(this);
								}),
							),
							this.D(
								(0, u.autorun)((ie) => {
									const ne = this.H.read(ie),
										ee = this.G.read(ie);
									ne !== void 0
										? (this.w.cancel(), (this.r.label = `${ee + 1}/${ne}`))
										: this.w.schedule(),
										ne !== void 0 && ne > 1
											? (this.y.cancel(),
												(this.q.enabled = this.s.enabled = !0))
											: this.y.schedule();
								}),
							),
							this.D(
								(0, u.autorun)((ie) => {
									const ee = this.I.read(ie).map((_) => ({
										class: void 0,
										id: _.id,
										enabled: !0,
										tooltip: _.tooltip || "",
										label: _.title,
										run: (te) => this.J.executeCommand(_.id),
									}));
									for (const [_, te] of this.u.getActions())
										for (const Q of te) Q instanceof $.$2X && ee.push(Q);
									ee.length > 0 && ee.unshift(new E.$tj()),
										this.t.setAdditionalSecondaryActions(ee);
								}),
							);
					}
					getId() {
						return this.j;
					}
					getDomNode() {
						return this.m.root;
					}
					getPosition() {
						return {
							position: this.F.get(),
							preference: [
								n.ContentWidgetPositionPreference.ABOVE,
								n.ContentWidgetPositionPreference.BELOW,
							],
							positionAffinity: f.PositionAffinity.LeftOfInjectedText,
						};
					}
				};
				(e.$RDb = R),
					(e.$RDb =
						R =
						D =
							Ne(
								[
									j(6, v.$ek),
									j(7, T.$Li),
									j(8, P.$uZ),
									j(9, S.$6j),
									j(10, $.$YX),
								],
								R,
							));
				class O extends i.$_ib {
					constructor() {
						super(...arguments), (this.n = void 0);
					}
					setClass(F) {
						this.n = F;
					}
					render(F) {
						super.render(F), this.n && F.classList.add(this.n);
					}
					C() {}
				}
				class B extends l.$Lyb {
					u() {
						const F = this.X.lookupKeybinding(this._action.id, this.Z);
						if (!F) return super.u();
						if (this.I) {
							const x = (0, t.h)("div.keybinding").root;
							this.D(new w.$7ob(x, h.OS, { disableTitle: !0, ...w.$6ob })).set(
								F,
							),
								(this.I.textContent = this._action.label),
								this.I.appendChild(x),
								this.I.classList.add("inlineSuggestionStatusBarItemLabel");
						}
					}
					C() {}
				}
				let U = class extends y.$Syb {
					constructor(F, x, H, q, V, G, K, J, W) {
						super(F, { resetMenu: x, ...H }, q, V, G, K, J, W),
							(this.O = x),
							(this.P = H),
							(this.Q = q),
							(this.R = V),
							(this.j = this.B.add(
								this.Q.createMenu(this.O, this.R, {
									emitEventsForSubmenuChanges: !0,
								}),
							)),
							(this.r = []),
							(this.s = []),
							this.B.add(this.j.onDidChange(() => this.S())),
							this.S();
					}
					S() {
						const F = [],
							x = [];
						(0, l.$Kyb)(
							this.j,
							this.P?.menuOptions,
							{ primary: F, secondary: x },
							this.P?.toolbarOptions?.primaryGroup,
							this.P?.toolbarOptions?.shouldInlineSubmenu,
							this.P?.toolbarOptions?.useSeparatorsInPrimaryActions,
						),
							x.push(...this.r),
							F.unshift(...this.s),
							this.setActions(F, x);
					}
					setPrependedPrimaryActions(F) {
						(0, C.$yb)(this.s, F, (x, H) => x === H) ||
							((this.s = F), this.S());
					}
					setAdditionalSecondaryActions(F) {
						(0, C.$yb)(this.r, F, (x, H) => x === H) ||
							((this.r = F), this.S());
					}
				};
				(e.$SDb = U),
					(e.$SDb = U =
						Ne(
							[
								j(3, $.$YX),
								j(4, S.$6j),
								j(5, I.$Xxb),
								j(6, P.$uZ),
								j(7, v.$ek),
								j(8, k.$km),
							],
							U,
						));
			},
		),
		define(
			de[2894],
			he([
				1, 0, 7, 460, 50, 24, 3, 77, 12, 56, 38, 48, 64, 92, 173, 11, 31, 8, 49,
				5, 39, 32, 2307,
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
				var y;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Hjc = e.$Gjc = e.$Fjc = void 0);
				let $ = class extends C.$1c {
					constructor(P, k, L) {
						super(),
							(this.m = P),
							(this.n = k),
							(this.q = L),
							(this.c = (0, d.observableFromEvent)(
								this,
								this.m.onDidChangeConfiguration,
								() =>
									this.m.getOption(u.EditorOption.inlineEdit).showToolbar ===
									"always",
							)),
							(this.f = void 0),
							(this.j = (0, d.derived)(this, (D) => {
								const M = this.n.read(D)?.model.ghostText.read(D);
								if (!this.c.read(D) || !M || M.parts.length === 0)
									return (this.f = void 0), null;
								const N = M.parts[0].column;
								this.f &&
									this.f.lineNumber !== M.lineNumber &&
									(this.f = void 0);
								const A = new a.$hL(
									M.lineNumber,
									Math.min(N, this.f?.column ?? Number.MAX_SAFE_INTEGER),
								);
								return (this.f = A), A;
							})),
							this.D(
								(0, d.autorunWithStore)((D, M) => {
									if (!this.n.read(D) || !this.c.read(D)) return;
									const A = M.add(this.q.createInstance(v, this.m, !0, this.j));
									P.addContentWidget(A),
										M.add((0, C.$Yc)(() => P.removeContentWidget(A)));
								}),
							);
					}
				};
				(e.$Fjc = $), (e.$Fjc = $ = Ne([j(2, b.$Li)], $));
				let v = class extends C.$1c {
					static {
						y = this;
					}
					static {
						this.c = !1;
					}
					static get dropDownVisible() {
						return this.c;
					}
					static {
						this.id = 0;
					}
					constructor(P, k, L, D, M, N) {
						super(),
							(this.q = P),
							(this.r = k),
							(this.s = L),
							(this.t = M),
							(this.u = N),
							(this.f = `InlineEditHintsContentWidget${y.id++}`),
							(this.allowEditorOverflow = !0),
							(this.suppressMouseDown = !1),
							(this.j = (0, t.h)(
								"div.inlineEditHints",
								{ className: this.r ? ".withBorder" : "" },
								[(0, t.h)("div@toolBar")],
							)),
							(this.n = this.D(
								this.u.createMenu(g.$XX.InlineEditActions, this.t),
							)),
							(this.m = this.D(
								D.createInstance(
									I,
									this.j.toolBar,
									this.q,
									g.$XX.InlineEditToolbar,
									{
										menuOptions: { renderShortTitle: !0 },
										toolbarOptions: {
											primaryGroup: (A) => A.startsWith("primary"),
										},
										actionViewItemProvider: (A, R) => {
											if (A instanceof g.$2X)
												return D.createInstance(S, A, void 0);
										},
										telemetrySource: "InlineEditToolbar",
									},
								),
							)),
							this.D(
								this.m.onDidChangeDropdownVisibility((A) => {
									y.c = A;
								}),
							),
							this.D(
								(0, d.autorun)((A) => {
									this.s.read(A), this.q.layoutContentWidget(this);
								}),
							),
							this.D(
								(0, d.autorun)((A) => {
									const R = [];
									for (const [O, B] of this.n.getActions())
										for (const U of B) U instanceof g.$2X && R.push(U);
									R.length > 0 && R.unshift(new w.$tj()),
										this.m.setAdditionalSecondaryActions(R);
								}),
							);
					}
					getId() {
						return this.f;
					}
					getDomNode() {
						return this.j.root;
					}
					getPosition() {
						return {
							position: this.s.get(),
							preference: [
								r.ContentWidgetPositionPreference.ABOVE,
								r.ContentWidgetPositionPreference.BELOW,
							],
							positionAffinity: h.PositionAffinity.LeftOfInjectedText,
						};
					}
				};
				(e.$Gjc = v),
					(e.$Gjc = v = y = Ne([j(3, b.$Li), j(4, o.$6j), j(5, g.$YX)], v));
				class S extends c.$Lyb {
					u() {
						const P = this.X.lookupKeybinding(this._action.id, this.Z);
						if (!P) return super.u();
						if (this.I) {
							const k = (0, t.h)("div.keybinding").root;
							this.D(new i.$7ob(k, m.OS, { disableTitle: !0, ...i.$6ob })).set(
								P,
							),
								(this.I.textContent = this._action.label),
								this.I.appendChild(k),
								this.I.classList.add("inlineEditStatusBarItemLabel");
						}
					}
					C() {}
				}
				let I = class extends n.$Syb {
					constructor(P, k, L, D, M, N, A, R, O, B) {
						super(P, { resetMenu: L, ...D }, M, N, A, R, O, B),
							(this.s = k),
							(this.O = L),
							(this.P = D),
							(this.Q = M),
							(this.R = N),
							(this.c = this.B.add(
								this.Q.createMenu(this.O, this.R, {
									emitEventsForSubmenuChanges: !0,
								}),
							)),
							(this.j = []),
							(this.r = []),
							this.B.add(this.c.onDidChange(() => this.S())),
							this.B.add(this.s.onDidChangeCursorPosition(() => this.S())),
							this.S();
					}
					S() {
						const P = [],
							k = [];
						(0, c.$Kyb)(
							this.c,
							this.P?.menuOptions,
							{ primary: P, secondary: k },
							this.P?.toolbarOptions?.primaryGroup,
							this.P?.toolbarOptions?.shouldInlineSubmenu,
							this.P?.toolbarOptions?.useSeparatorsInPrimaryActions,
						),
							k.push(...this.j),
							P.unshift(...this.r),
							this.setActions(P, k);
					}
					setPrependedPrimaryActions(P) {
						(0, E.$yb)(this.r, P, (k, L) => k === L) ||
							((this.r = P), this.S());
					}
					setAdditionalSecondaryActions(P) {
						(0, E.$yb)(this.j, P, (k, L) => k === L) ||
							((this.j = P), this.S());
					}
				};
				(e.$Hjc = I),
					(e.$Hjc = I =
						Ne(
							[
								j(4, g.$YX),
								j(5, o.$6j),
								j(6, f.$Xxb),
								j(7, s.$uZ),
								j(8, p.$ek),
								j(9, l.$km),
							],
							I,
						));
			},
		),
		define(
			de[2895],
			he([1, 0, 11, 2779, 1677, 20]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, E.$lK)(t.$YX, w.$Qyb, E.InstantiationType.Delayed),
					(0, t.$4X)(i.$avc);
			},
		),
		define(
			de[2896],
			he([1, 0, 7, 50, 6, 3, 92, 11, 8, 39, 40, 32, 2835, 49]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ContextMenuMenuDelegate = e.$Q5c = void 0);
				let n = class extends E.$1c {
					get b() {
						return (
							this.a || (this.a = new h.$P5c(this.j, this.g, this.h, this.m)),
							this.a
						);
					}
					constructor(o, f, b, s, l, y) {
						super(),
							(this.g = o),
							(this.h = f),
							(this.j = b),
							(this.m = s),
							(this.n = l),
							(this.q = y),
							(this.a = void 0),
							(this.c = this.B.add(new w.$re())),
							(this.onDidShowContextMenu = this.c.event),
							(this.f = this.B.add(new w.$re())),
							(this.onDidHideContextMenu = this.f.event);
					}
					configure(o) {
						this.b.configure(o);
					}
					showContextMenu(o) {
						(o = g.transform(o, this.n, this.q)),
							this.b.showContextMenu({
								...o,
								onHide: (f) => {
									o.onHide?.(f), this.f.fire();
								},
							}),
							t.$Fhb.getInstance().resetKeyStatus(),
							this.c.fire();
					}
				};
				(e.$Q5c = n),
					(e.$Q5c = n =
						Ne(
							[
								j(0, a.$km),
								j(1, u.$4N),
								j(2, c.$Wxb),
								j(3, r.$uZ),
								j(4, d.$YX),
								j(5, m.$6j),
							],
							n,
						));
				var g;
				(function (p) {
					function o(b) {
						return b && b.menuId instanceof d.$XX;
					}
					function f(b, s, l) {
						if (!o(b)) return b;
						const { menuId: y, menuActionOptions: $, contextKeyService: v } = b;
						return {
							...b,
							getActions: () => {
								const S = [];
								if (y) {
									const I = s.getMenuActions(y, v ?? l, $);
									(0, C.$Jyb)(I, S);
								}
								return b.getActions ? i.$tj.join(b.getActions(), S) : S;
							},
						};
					}
					p.transform = f;
				})(g || (e.ContextMenuMenuDelegate = g = {}));
			},
		),
		define(
			de[959],
			he([1, 0, 6, 3, 28, 119, 154, 21]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$uwc = e.$twc = void 0);
				let m = class extends i.$1c {
					constructor(a, h) {
						super(),
							(this.a = new t.$re()),
							(this.onDidChangeEnablement = this.a.event),
							(this.b = this.D(new r(a))),
							this.D(
								this.b.onDidChange((c) =>
									this.a.fire({ extensions: c, source: "storage" }),
								),
							),
							this.D(
								h.onDidInstallExtensions((c) =>
									c.forEach(({ local: n, operation: g }) => {
										n &&
											g === E.InstallOperation.Migrate &&
											this.f(n.identifier);
									}),
								),
							);
					}
					async enableExtension(a, h) {
						return this.f(a)
							? (this.a.fire({ extensions: [a], source: h }), !0)
							: !1;
					}
					async disableExtension(a, h) {
						return this.c(a)
							? (this.a.fire({ extensions: [a], source: h }), !0)
							: !1;
					}
					getDisabledExtensions() {
						return this.h(E.$Ip);
					}
					async getDisabledExtensionsAsync() {
						return this.getDisabledExtensions();
					}
					c(a) {
						const h = this.getDisabledExtensions();
						return h.every((c) => !(0, C.$7p)(c, a))
							? (h.push(a), this.g(h), !0)
							: !1;
					}
					f(a) {
						const h = this.getDisabledExtensions();
						for (let c = 0; c < h.length; c++) {
							const n = h[c];
							if ((0, C.$7p)(n, a)) return h.splice(c, 1), this.g(h), !0;
						}
						return !1;
					}
					g(a) {
						this.j(E.$Ip, a);
					}
					h(a) {
						return this.b.get(a, d.StorageScope.PROFILE);
					}
					j(a, h) {
						this.b.set(a, h, d.StorageScope.PROFILE);
					}
				};
				(e.$twc = m), (e.$twc = m = Ne([j(0, d.$lq), j(1, E.$Hp)], m));
				class r extends i.$1c {
					constructor(a) {
						super(),
							(this.c = a),
							(this.a = Object.create(null)),
							(this.b = this.D(new t.$re())),
							(this.onDidChange = this.b.event),
							this.D(
								a.onDidChangeValue(
									d.StorageScope.PROFILE,
									void 0,
									this.D(new i.$Zc()),
								)((h) => this.f(h)),
							);
					}
					get(a, h) {
						let c;
						return (
							h === d.StorageScope.PROFILE
								? ((0, w.$ug)(this.a[a]) && (this.a[a] = this.g(a, h)),
									(c = this.a[a]))
								: (c = this.g(a, h)),
							JSON.parse(c)
						);
					}
					set(a, h, c) {
						const n = JSON.stringify(
							h.map(({ id: p, uuid: o }) => ({ id: p, uuid: o })),
						);
						this.g(a, c) !== n &&
							(c === d.StorageScope.PROFILE &&
								(h.length ? (this.a[a] = n) : delete this.a[a]),
							this.h(a, h.length ? n : void 0, c));
					}
					f(a) {
						if (
							!(0, w.$ug)(this.a[a.key]) &&
							this.g(a.key, a.scope) !== this.a[a.key]
						) {
							const c = this.get(a.key, a.scope);
							delete this.a[a.key];
							const n = this.get(a.key, a.scope),
								g = c.filter((o) => !n.some((f) => (0, C.$7p)(o, f))),
								p = n.filter((o) => !c.some((f) => (0, C.$7p)(f, o)));
							(g.length || p.length) && this.b.fire([...g, ...p]);
						}
					}
					g(a, h) {
						return this.c.get(a, h, "[]");
					}
					h(a, h, c) {
						h
							? this.c.store(a, h, c, d.StorageTarget.MACHINE)
							: this.c.remove(a, c);
					}
				}
				e.$uwc = r;
			},
		),
		define(
			de[677],
			he([1, 0, 5, 6, 3, 21, 154, 62, 24, 34, 28]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				var a;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2N = e.$1N = void 0),
					(e.$1N = (0, t.$Mi)("IExtensionStorageService"));
				const h = /^extensionKeys\/([^.]+\..+)@(\d+\.\d+\.\d+(-.*)?)$/;
				let c = class extends w.$1c {
					static {
						a = this;
					}
					static {
						this.a = 512 * 1024;
					}
					static b(g) {
						return `extensionKeys/${(0, C.$$p)(g.id)}@${g.version}`;
					}
					static c(g) {
						const p = h.exec(g);
						if (p && p[1]) return { id: p[1], version: p[2] };
					}
					static async removeOutdatedExtensionVersions(g, p) {
						const o = await g.getInstalled(),
							f = [];
						for (const [b, s] of a.f(p)) {
							const l = o.find((y) => (0, C.$7p)(y.identifier, { id: b }))
								?.manifest.version;
							for (const y of s) l !== y && f.push(a.b({ id: b, version: y }));
						}
						for (const b of f) p.remove(b, E.StorageScope.PROFILE);
					}
					static f(g) {
						const p = new Map(),
							o = g.keys(E.StorageScope.PROFILE, E.StorageTarget.MACHINE);
						for (const f of o) {
							const b = a.c(f);
							if (b) {
								let s = p.get(b.id.toLowerCase());
								s || p.set(b.id.toLowerCase(), (s = [])), s.push(b.version);
							}
						}
						return p;
					}
					constructor(g, p, o) {
						super(),
							(this.j = g),
							(this.m = p),
							(this.n = o),
							(this.g = this.D(new i.$re())),
							(this.onDidChangeExtensionStorageToSync = this.g.event),
							(this.h = a.f(g)),
							this.D(
								this.j.onDidChangeValue(
									E.StorageScope.PROFILE,
									void 0,
									this.D(new w.$Zc()),
								)((f) => this.q(f)),
							);
					}
					q(g) {
						if (this.h.has(g.key.toLowerCase())) {
							this.g.fire();
							return;
						}
						const p = a.c(g.key);
						if (p) {
							if (this.j.get(g.key, E.StorageScope.PROFILE) === void 0)
								this.h.delete(p.id.toLowerCase());
							else {
								let o = this.h.get(p.id.toLowerCase());
								o || this.h.set(p.id.toLowerCase(), (o = [])),
									o.push(p.version),
									this.g.fire();
							}
							return;
						}
					}
					r(g) {
						if ((0, u.$lg)(g)) return g;
						const p = g.manifest ? g.manifest.publisher : g.publisher,
							o = g.manifest ? g.manifest.name : g.name;
						return (0, C.$0p)(p, o);
					}
					getExtensionState(g, p) {
						const o = this.r(g),
							f = this.getExtensionStateRaw(g, p);
						if (f)
							try {
								return JSON.parse(f);
							} catch (b) {
								this.n.error(
									`[mainThreadStorage] unexpected error parsing storage contents (extensionId: ${o}, global: ${p}): ${b}`,
								);
							}
					}
					getExtensionStateRaw(g, p) {
						const o = this.r(g),
							f = this.j.get(
								o,
								p ? E.StorageScope.PROFILE : E.StorageScope.WORKSPACE,
							);
						return (
							f &&
								f?.length > a.a &&
								this.n.warn(
									`[mainThreadStorage] large extension state detected (extensionId: ${o}, global: ${p}): ${f.length / 1024}kb. Consider to use 'storageUri' or 'globalStorageUri' to store this data on disk instead.`,
								),
							f
						);
					}
					setExtensionState(g, p, o) {
						const f = this.r(g);
						p === void 0
							? this.j.remove(
									f,
									o ? E.StorageScope.PROFILE : E.StorageScope.WORKSPACE,
								)
							: this.j.store(
									f,
									JSON.stringify(p),
									o ? E.StorageScope.PROFILE : E.StorageScope.WORKSPACE,
									E.StorageTarget.MACHINE,
								);
					}
					setKeysForSync(g, p) {
						this.j.store(
							a.b(g),
							JSON.stringify(p),
							E.StorageScope.PROFILE,
							E.StorageTarget.MACHINE,
						);
					}
					getKeysForSync(g) {
						const p = this.m.extensionSyncedKeys?.[g.id.toLowerCase()],
							o = this.j.get(a.b(g), E.StorageScope.PROFILE),
							f = o ? JSON.parse(o) : void 0;
						return f && p ? (0, m.$Qb)([...f, ...p]) : f || p;
					}
					addToMigrationList(g, p) {
						if (g !== p) {
							const o = this.s.filter((f) => !f.includes(g) && !f.includes(p));
							o.push([g, p]), (this.s = o);
						}
					}
					getSourceExtensionToMigrate(g) {
						const p = this.s.find(([, o]) => g === o);
						return p ? p[0] : void 0;
					}
					get s() {
						const g = this.j.get(
							"extensionStorage.migrationList",
							E.StorageScope.APPLICATION,
							"[]",
						);
						try {
							const p = JSON.parse(g);
							if (Array.isArray(p)) return p;
						} catch {}
						return [];
					}
					set s(g) {
						g.length
							? this.j.store(
									"extensionStorage.migrationList",
									JSON.stringify(g),
									E.StorageScope.APPLICATION,
									E.StorageTarget.MACHINE,
								)
							: this.j.remove(
									"extensionStorage.migrationList",
									E.StorageScope.APPLICATION,
								);
					}
				};
				(e.$2N = c),
					(e.$2N = c = a = Ne([j(0, E.$lq), j(1, d.$Bk), j(2, r.$ik)], c));
			},
		),
		define(
			de[2897],
			he([1, 0, 24, 3, 19, 9, 22, 62, 15, 6, 54, 12, 344, 154, 666, 109, 21]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$S5c = e.$R5c = void 0);
				let o = class extends i.$1c {
					constructor(y, $) {
						super(),
							(this.b = y),
							(this.c = $),
							(this.a = new Map()),
							this.c.configBasedExtensionTips &&
								Object.entries(this.c.configBasedExtensionTips).forEach(
									([, v]) => this.a.set(v.configPath, v),
								);
					}
					getConfigBasedTips(y) {
						return this.f(y);
					}
					async getImportantExecutableBasedTips() {
						return [];
					}
					async getOtherExecutableBasedTips() {
						return [];
					}
					async f(y) {
						const $ = [];
						for (const [v, S] of this.a)
							if (!(S.configScheme && S.configScheme !== y.scheme))
								try {
									const I = (
										await this.b.readFile((0, w.$nh)(y, v))
									).value.toString();
									for (const [T, P] of Object.entries(S.recommendations))
										(!P.contentPattern ||
											new RegExp(P.contentPattern, "mig").test(I)) &&
											$.push({
												extensionId: T,
												extensionName: P.name,
												configName: S.configName,
												important: !!P.important,
												isExtensionPack: !!P.isExtensionPack,
												whenNotInstalled: P.whenNotInstalled,
											});
								} catch {}
						return $;
					}
				};
				(e.$R5c = o), (e.$R5c = o = Ne([j(0, C.$ll), j(1, d.$Bk)], o));
				const f = "extensionTips/promptedExecutableTips",
					b = "extensionTips/lastPromptedMediumImpExeTime";
				class s extends o {
					constructor(y, $, v, S, I, T, P, k) {
						super(P, k),
							(this.q = y),
							(this.r = $),
							(this.s = v),
							(this.t = S),
							(this.u = I),
							(this.w = T),
							(this.g = new Map()),
							(this.h = new Map()),
							(this.j = new Map()),
							(this.m = new Map()),
							(this.n = new Map()),
							k.exeBasedExtensionTips &&
								Object.entries(k.exeBasedExtensionTips).forEach(([L, D]) => {
									const M = [],
										N = [],
										A = [];
									Object.entries(D.recommendations).forEach(([R, O]) => {
										O.important
											? D.important
												? M.push({
														extensionId: R,
														extensionName: O.name,
														isExtensionPack: !!O.isExtensionPack,
													})
												: N.push({
														extensionId: R,
														extensionName: O.name,
														isExtensionPack: !!O.isExtensionPack,
													})
											: A.push({
													extensionId: R,
													extensionName: O.name,
													isExtensionPack: !!O.isExtensionPack,
												});
									}),
										M.length &&
											this.g.set(L, {
												exeFriendlyName: D.friendlyName,
												windowsPath: D.windowsPath,
												recommendations: M,
											}),
										N.length &&
											this.h.set(L, {
												exeFriendlyName: D.friendlyName,
												windowsPath: D.windowsPath,
												recommendations: N,
											}),
										A.length &&
											this.j.set(L, {
												exeFriendlyName: D.friendlyName,
												windowsPath: D.windowsPath,
												recommendations: A,
											});
								}),
							(0, m.$Oh)(
								async () => {
									await this.z(), this.F(), this.G();
								},
								3e3,
								this.B,
							);
					}
					async getImportantExecutableBasedTips() {
						const y = await this.O(this.g),
							$ = await this.O(this.h);
						return [...y, ...$];
					}
					getOtherExecutableBasedTips() {
						return this.O(this.j);
					}
					async z() {
						const y = await this.O(this.g),
							$ = await this.O(this.h),
							v = await this.t.getInstalled();
						(this.m = this.C(y, v)), (this.n = this.C($, v));
					}
					C(y, $) {
						const v = new Map();
						y.forEach((k) => v.set(k.extensionId.toLowerCase(), k));
						const { installed: S, uninstalled: I } = this.N([...v.keys()], $);
						for (const k of S) {
							const L = v.get(k);
							L &&
								this.s.publicLog2(
									"exeExtensionRecommendations:alreadyInstalled",
									{ extensionId: k, exeName: L.exeName },
								);
						}
						for (const k of I) {
							const L = v.get(k);
							L &&
								this.s.publicLog2("exeExtensionRecommendations:notInstalled", {
									extensionId: k,
									exeName: L.exeName,
								});
						}
						const T = this.L(),
							P = new Map();
						for (const k of I) {
							const L = v.get(k);
							if (
								L &&
								(!T[L.exeName] || !T[L.exeName].includes(L.extensionId))
							) {
								let D = P.get(L.exeName);
								D || ((D = []), P.set(L.exeName, D)), D.push(L);
							}
						}
						return P;
					}
					F() {
						if (this.m.size === 0) return;
						const [y, $] = [...this.m.entries()][0];
						this.H($).then((v) => {
							switch (v) {
								case n.RecommendationsNotificationResult.Accepted:
									this.M($[0].exeName, $);
									break;
								case n.RecommendationsNotificationResult.Ignored:
									this.m.delete(y);
									break;
								case n.RecommendationsNotificationResult.IncompatibleWindow: {
									const S = r.Event.once(
										r.Event.latch(
											r.Event.any(
												this.r.onDidOpenMainWindow,
												this.r.onDidFocusMainWindow,
											),
										),
									);
									this.D(S(() => this.F()));
									break;
								}
								case n.RecommendationsNotificationResult.TooMany: {
									const S = this.D(new i.$2c());
									S.value = (0, m.$Oh)(
										() => {
											S.dispose(), this.F();
										},
										60 * 60 * 1e3,
									);
									break;
								}
							}
						});
					}
					G() {
						if (this.n.size === 0) return;
						const y = this.I(),
							$ = Date.now() - y,
							v = 7 * 24 * 60 * 60 * 1e3;
						if ($ < v) {
							const T = this.D(new i.$2c());
							T.value = (0, m.$Oh)(() => {
								T.dispose(), this.G();
							}, v - $);
							return;
						}
						const [S, I] = [...this.n.entries()][0];
						this.H(I).then((T) => {
							switch (T) {
								case n.RecommendationsNotificationResult.Accepted: {
									this.J(Date.now()), this.n.delete(S), this.M(I[0].exeName, I);
									const P = this.D(new i.$2c());
									P.value = (0, m.$Oh)(() => {
										P.dispose(), this.G();
									}, v);
									break;
								}
								case n.RecommendationsNotificationResult.Ignored:
									this.n.delete(S), this.G();
									break;
								case n.RecommendationsNotificationResult.IncompatibleWindow: {
									const P = r.Event.once(
										r.Event.latch(
											r.Event.any(
												this.r.onDidOpenMainWindow,
												this.r.onDidFocusMainWindow,
											),
										),
									);
									this.D(P(() => this.G()));
									break;
								}
								case n.RecommendationsNotificationResult.TooMany: {
									const P = this.D(new i.$2c());
									P.value = (0, m.$Oh)(
										() => {
											P.dispose(), this.G();
										},
										60 * 60 * 1e3,
									);
									break;
								}
							}
						});
					}
					async H(y) {
						const $ = await this.t.getInstalled(g.ExtensionType.User),
							v = y
								.filter(
									(S) =>
										!S.whenNotInstalled ||
										S.whenNotInstalled.every((I) =>
											$.every((T) => !(0, c.$7p)(T.identifier, { id: I })),
										),
								)
								.map(({ extensionId: S }) => S.toLowerCase());
						return this.w.promptImportantExtensionsInstallNotification({
							extensions: v,
							source: n.RecommendationSource.EXE,
							name: y[0].exeFriendlyName,
							searchValue: `@exe:"${y[0].exeName}"`,
						});
					}
					I() {
						let y = this.u.getNumber(b, p.StorageScope.APPLICATION);
						return y || ((y = Date.now()), this.J(y)), y;
					}
					J(y) {
						this.u.store(
							b,
							y,
							p.StorageScope.APPLICATION,
							p.StorageTarget.MACHINE,
						);
					}
					L() {
						return JSON.parse(this.u.get(f, p.StorageScope.APPLICATION, "{}"));
					}
					M(y, $) {
						const v = this.L();
						(v[y] = $.map(({ extensionId: S }) => S.toLowerCase())),
							this.u.store(
								f,
								JSON.stringify(v),
								p.StorageScope.APPLICATION,
								p.StorageTarget.USER,
							);
					}
					N(y, $) {
						const v = [],
							S = [],
							I = $.reduce(
								(T, P) => (T.add(P.identifier.id.toLowerCase()), T),
								new Set(),
							);
						return (
							y.forEach((T) => {
								I.has(T.toLowerCase()) ? v.push(T) : S.push(T);
							}),
							{ installed: v, uninstalled: S }
						);
					}
					async O(y) {
						const $ = [],
							v = new Map();
						for (const S of y.keys()) {
							const I = y.get(S);
							if (!I || !(0, t.$Pb)(I.recommendations)) continue;
							const T = [];
							a.$l
								? I.windowsPath &&
									T.push(
										I.windowsPath
											.replace("%USERPROFILE%", () => h.env.USERPROFILE)
											.replace(
												"%ProgramFiles(x86)%",
												() => h.env["ProgramFiles(x86)"],
											)
											.replace("%ProgramFiles%", () => h.env.ProgramFiles)
											.replace("%APPDATA%", () => h.env.APPDATA)
											.replace("%WINDIR%", () => h.env.WINDIR),
									)
								: (T.push((0, u.$oc)("/usr/local/bin", S)),
									T.push((0, u.$oc)("/usr/bin", S)),
									T.push((0, u.$oc)(this.q.fsPath, S)));
							for (const P of T) {
								let k = v.get(P);
								if (
									(k === void 0 &&
										((k = await this.b.exists(E.URI.file(P))), v.set(P, k)),
									k)
								)
									for (const {
										extensionId: L,
										extensionName: D,
										isExtensionPack: M,
										whenNotInstalled: N,
									} of I.recommendations)
										$.push({
											extensionId: L,
											extensionName: D,
											isExtensionPack: M,
											exeName: S,
											exeFriendlyName: I.exeFriendlyName,
											windowsPath: I.windowsPath,
											whenNotInstalled: N,
										});
							}
						}
						return $;
					}
				}
				e.$S5c = s;
			},
		),
		
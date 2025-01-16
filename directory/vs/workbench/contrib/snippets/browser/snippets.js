define(de[510], he([1, 0, 5]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$gYb = void 0),
				(e.$gYb = (0, t.$Mi)("snippetService"));
		}),
		define(
			de[805],
			he([1, 0, 187, 4, 54, 389, 1672, 19, 28, 24, 103, 7]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$fYb = e.SnippetSource = e.$eYb = void 0);
				class h {
					constructor(f) {
						(this.isBogous = !1),
							(this.isTrivial = !1),
							(this.usesClipboardVariable = !1),
							(this.usesSelectionVariable = !1),
							(this.codeSnippet = f);
						const b = new E.$Izb().parse(f, !1),
							s = new Map();
						let l = 0;
						for (const $ of b.placeholders) l = Math.max(l, $.index);
						if (b.placeholders.length === 0) this.isTrivial = !0;
						else if (l === 0) {
							const $ = (0, r.$wb)(b.children);
							this.isTrivial = $ instanceof E.$Czb && $.isFinalTabstop;
						}
						const y = [...b.children];
						for (; y.length > 0; ) {
							const $ = y.shift();
							if ($ instanceof E.$Gzb) {
								if ($.children.length === 0 && !C.$eDb[$.name]) {
									const v = s.has($.name) ? s.get($.name) : ++l;
									s.set($.name, v);
									const S = new E.$Czb(v).appendChild(new E.Text($.name));
									b.replace($, [S]), (this.isBogous = !0);
								}
								switch ($.name) {
									case "CLIPBOARD":
										this.usesClipboardVariable = !0;
										break;
									case "SELECTION":
									case "TM_SELECTED_TEXT":
										this.usesSelectionVariable = !0;
										break;
								}
							} else y.push(...$.children);
						}
						this.isBogous && (this.codeSnippet = b.toTextmateString());
					}
				}
				class c {
					constructor(f, b, s, l, y, $, v, S, I, T) {
						(this.isFileTemplate = f),
							(this.scopes = b),
							(this.name = s),
							(this.prefix = l),
							(this.description = y),
							(this.body = $),
							(this.source = v),
							(this.snippetSource = S),
							(this.snippetIdentifier = I),
							(this.extensionId = T),
							(this.prefixLow = l.toLowerCase()),
							(this.a = new a.$fgb((0, a.$Ogb)(), () => new h(this.body)));
					}
					get codeSnippet() {
						return this.a.value.codeSnippet;
					}
					get isBogous() {
						return this.a.value.isBogous;
					}
					get isTrivial() {
						return this.a.value.isTrivial;
					}
					get needsClipboard() {
						return this.a.value.usesClipboardVariable;
					}
					get usesSelection() {
						return this.a.value.usesSelectionVariable;
					}
				}
				e.$eYb = c;
				function n(o) {
					return (0, m.$ng)(o) && !!o.body;
				}
				var g;
				(function (o) {
					(o[(o.User = 1)] = "User"),
						(o[(o.Workspace = 2)] = "Workspace"),
						(o[(o.Extension = 3)] = "Extension");
				})(g || (e.SnippetSource = g = {}));
				class p {
					constructor(f, b, s, l, y, $) {
						(this.source = f),
							(this.location = b),
							(this.defaultScopes = s),
							(this.b = l),
							(this.c = y),
							(this.d = $),
							(this.data = []),
							(this.isGlobalSnippets = (0, w.$tc)(b.path) === ".code-snippets"),
							(this.isUserSnippets = !this.b);
					}
					select(f, b) {
						this.isGlobalSnippets || !this.isUserSnippets
							? this.f(f, b)
							: this.e(f, b);
					}
					e(f, b) {
						f + ".json" === (0, w.$sc)(this.location.path) &&
							b.push(...this.data);
					}
					f(f, b) {
						for (const l of this.data) {
							const y = l.scopes.length;
							if (y === 0) b.push(l);
							else
								for (let $ = 0; $ < y; $++)
									if (l.scopes[$] === f) {
										b.push(l);
										break;
									}
						}
						const s = f.lastIndexOf(".");
						s >= 0 && this.f(f.substring(0, s), b);
					}
					async g() {
						return this.b
							? this.d.readExtensionResource(this.location)
							: (await this.c.readFile(this.location)).value.toString();
					}
					load() {
						return (
							this.a ||
								(this.a = Promise.resolve(this.g()).then((f) => {
									const b = (0, t.$do)(f);
									if ((0, t.$lo)(b) === "object")
										for (const [s, l] of Object.entries(b))
											if (n(l)) this.h(s, l, this.data);
											else
												for (const [y, $] of Object.entries(l))
													this.h(y, $, this.data);
									return this;
								})),
							this.a
						);
					}
					reset() {
						(this.a = void 0), (this.data.length = 0);
					}
					h(f, b, s) {
						let { isFileTemplate: l, prefix: y, body: $, description: v } = b;
						if (
							(y || (y = ""),
							Array.isArray($) &&
								($ = $.join(`
`)),
							typeof $ != "string")
						)
							return;
						Array.isArray(v) &&
							(v = v.join(`
`));
						let S;
						this.defaultScopes
							? (S = this.defaultScopes)
							: typeof b.scope == "string"
								? (S = b.scope
										.split(",")
										.map((T) => T.trim())
										.filter(Boolean))
								: (S = []);
						let I;
						this.b
							? (I = this.b.displayName || this.b.name)
							: this.source === g.Workspace
								? (I = (0, i.localize)(9476, null))
								: this.isGlobalSnippets
									? (I = (0, i.localize)(9477, null))
									: (I = (0, i.localize)(9478, null));
						for (const T of u.Iterable.wrap(y))
							s.push(
								new c(
									!!l,
									S,
									f,
									T,
									v,
									$,
									I,
									this.source,
									this.b
										? `${(0, d.$ph)(this.b.extensionLocation, this.location)}/${f}`
										: `${(0, w.$sc)(this.location.path)}/${f}`,
									this.b?.identifier,
								),
							);
					}
				}
				e.$fYb = p;
			},
		),
		define(
			de[1752],
			he([1, 0, 94, 37, 48, 17, 74, 61, 389, 4, 510, 805, 132, 162, 152, 31]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$tYb = e.$sYb = void 0);
				const p = "_snippet.markAsUsed";
				g.$fk.registerCommand(p, (b, ...s) => {
					const l = b.get(u.$gYb),
						[y] = s;
					y instanceof a.$eYb && l.updateUsageTimestamp(y);
				});
				class o {
					constructor(s, l) {
						(this.snippet = s),
							(this.label = { label: s.prefix, description: s.name }),
							(this.detail = (0, r.localize)(
								9456,
								null,
								s.description || s.name,
								s.source,
							)),
							(this.insertText = s.codeSnippet),
							(this.extensionId = s.extensionId),
							(this.range = l),
							(this.sortText = `${s.snippetSource === a.SnippetSource.Extension ? "z" : "a"}-${s.prefix}`),
							(this.kind = C.CompletionItemKind.Snippet),
							(this.insertTextRules =
								C.CompletionItemInsertTextRule.InsertAsSnippet),
							(this.command = { id: p, title: "", arguments: [s] });
					}
					resolve() {
						return (
							(this.documentation = new t.$cl().appendCodeblock(
								"",
								m.$Izb.asInsertText(this.snippet.codeSnippet),
							)),
							this
						);
					}
					static compareByLabel(s, l) {
						return (0, i.$Ff)(s.label.label, l.label.label);
					}
				}
				e.$sYb = o;
				let f = class {
					constructor(s, l, y) {
						(this.c = s),
							(this.d = l),
							(this.e = y),
							(this._debugDisplayName = "snippetCompletions");
					}
					async provideCompletionItems(s, l, y) {
						const $ = new c.$le(),
							v = l.lineNumber,
							S = s.getWordAtPosition(l) ?? {
								startColumn: l.column,
								endColumn: l.column,
								word: "",
							},
							I = s.getLineContent(l.lineNumber).toLowerCase(),
							T = I.substring(0, S.startColumn + S.word.length - 1),
							P = this.g(s, v, S, T),
							k = l.column - 1,
							L = y.triggerCharacter?.toLowerCase() ?? "",
							D = this.h(s, l),
							M = this.e.getLanguageConfiguration(D),
							N = new Set(await this.d.getSnippets(D)),
							A = [];
						for (const R of N) {
							if (
								y.triggerKind === C.CompletionTriggerKind.TriggerCharacter &&
								!R.prefixLow.startsWith(L)
							)
								continue;
							let O;
							for (const V of P)
								if (
									!(V.prefixLow.match(/^\s/) && !R.prefixLow.match(/^\s/)) &&
									(0, h.$4k)(
										V.prefixLow,
										0,
										V.prefixLow.length,
										R.prefixLow,
										0,
										R.prefixLow.length,
									)
								) {
									O = V;
									break;
								}
							if (!O) continue;
							const B = O.startColumn - 1,
								U = R.prefixLow.length - (k - B),
								z = (0, i.$Gf)(I, R.prefixLow, k, k + U, k - B),
								F = l.with(void 0, B + 1);
							let x = z === 0 ? l.column + U : l.column;
							k < I.length &&
								M.getAutoClosingPairs()
									.autoClosingPairsCloseSingleChar.get(I[k])
									?.some(
										(K) =>
											K.open === I[F.column - 1] &&
											R.prefix.startsWith(K.open) &&
											R.prefix[R.prefix.length - 1] === K.close,
									) &&
								x++;
							const H = E.$iL.fromPositions(
									{ lineNumber: v, column: O.startColumn },
									{ lineNumber: v, column: x },
								),
								q = H.setEndPosition(v, l.column);
							A.push(new o(R, { replace: H, insert: q })), N.delete(R);
						}
						if (!L && (/\s/.test(I[l.column - 2]) || !I))
							for (const R of N) {
								const O = E.$iL.fromPositions(l),
									B =
										I.indexOf(R.prefixLow, k) === k
											? O.setEndPosition(
													l.lineNumber,
													l.column + R.prefixLow.length,
												)
											: O;
								A.push(new o(R, { replace: B, insert: O }));
							}
						return this.f(A), { suggestions: A, duration: $.elapsed() };
					}
					f(s) {
						s.sort(o.compareByLabel);
						for (let l = 0; l < s.length; l++) {
							const y = s[l];
							let $ = l + 1;
							for (; $ < s.length && y.label === s[$].label; $++)
								s[$].label.label = (0, r.localize)(
									9457,
									null,
									s[$].label.label,
									s[$].snippet.name,
								);
							$ > l + 1 &&
								((s[l].label.label = (0, r.localize)(
									9458,
									null,
									s[l].label.label,
									s[l].snippet.name,
								)),
								(l = $));
						}
					}
					resolveCompletionItem(s) {
						return s instanceof o ? s.resolve() : s;
					}
					g(s, l, y, $) {
						const v = [];
						for (let S = 1; S < y.startColumn; S++) {
							const I = s.getWordAtPosition(new w.$hL(l, S));
							v.push({
								startColumn: S,
								prefixLow: $.substring(S - 1),
								isWord: !!I,
							}),
								I &&
									((S = I.endColumn),
									v.push({
										startColumn: I.endColumn,
										prefixLow: $.substring(I.endColumn - 1),
										isWord: !1,
									}));
						}
						return (
							(y.word.length > 0 || v.length === 0) &&
								v.push({
									startColumn: y.startColumn,
									prefixLow: $.substring(y.startColumn - 1),
									isWord: !0,
								}),
							v
						);
					}
					h(s, l) {
						s.tokenization.tokenizeIfCheap(l.lineNumber);
						let y = s.getLanguageIdAtPosition(l.lineNumber, l.column);
						return this.c.getLanguageName(y) || (y = s.getLanguageId()), y;
					}
				};
				(e.$tYb = f),
					(e.$tYb = f = Ne([j(0, d.$nM), j(1, u.$gYb), j(2, n.$aN)], f));
			},
		),
		define(
			de[1753],
			he([1, 0, 4, 510, 805, 63, 14, 26, 6, 3]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$3Xc = u),
					(t = mt(t));
				async function u(a, h) {
					const c = a.get(i.$gYb),
						n = a.get(E.$DJ);
					let g;
					Array.isArray(h)
						? (g = h)
						: (g = await c.getSnippets(h, {
								includeDisabledSnippets: !0,
								includeNoPrefixSnippets: !0,
							})),
						g.sort((s, l) => s.snippetSource - l.snippetSource);
					const p = () => {
							const s = [];
							let l;
							for (const y of g) {
								const $ = {
									label: y.prefix || y.name,
									detail: y.description || y.body,
									snippet: y,
								};
								if (
									!l ||
									l.snippetSource !== y.snippetSource ||
									l.source !== y.source
								) {
									let v = "";
									switch (y.snippetSource) {
										case w.SnippetSource.User:
											v = t.localize(9459, null);
											break;
										case w.SnippetSource.Extension:
											v = y.source;
											break;
										case w.SnippetSource.Workspace:
											v = t.localize(9460, null);
											break;
									}
									s.push({ type: "separator", label: v });
								}
								y.snippetSource === w.SnippetSource.Extension &&
									(c.isEnabled(y)
										? ($.buttons = [
												{
													iconClass: d.ThemeIcon.asClassName(C.$ak.eyeClosed),
													tooltip: t.localize(9461, null),
												},
											])
										: (($.description = t.localize(9462, null)),
											($.buttons = [
												{
													iconClass: d.ThemeIcon.asClassName(C.$ak.eye),
													tooltip: t.localize(9463, null),
												},
											]))),
									s.push($),
									(l = y);
							}
							return s;
						},
						o = new r.$Zc(),
						f = o.add(n.createQuickPick({ useSeparators: !0 }));
					(f.placeholder = t.localize(9464, null)),
						(f.matchOnDetail = !0),
						(f.ignoreFocusOut = !1),
						(f.keepScrollPosition = !0),
						o.add(
							f.onDidTriggerItemButton((s) => {
								const l = c.isEnabled(s.item.snippet);
								c.updateEnablement(s.item.snippet, !l), (f.items = p());
							}),
						),
						(f.items = p()),
						f.items.length || (f.validationMessage = t.localize(9465, null)),
						f.show(),
						await Promise.race([
							m.Event.toPromise(f.onDidAccept),
							m.Event.toPromise(f.onDidHide),
						]);
					const b = f.selectedItems[0]?.snippet;
					return o.dispose(), b;
				}
			},
		),
		define(
			de[3137],
			he([1, 0, 71, 61, 254, 4, 121, 5, 994, 1753, 510, 805]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$4Xc = void 0),
					(E = mt(E));
				class h {
					static fromUser(g) {
						if (!g || typeof g != "object") return h.a;
						let { snippet: p, name: o, langId: f } = g;
						return (
							typeof p != "string" && (p = void 0),
							typeof o != "string" && (o = void 0),
							typeof f != "string" && (f = void 0),
							new h(p, o, f)
						);
					}
					static {
						this.a = new h(void 0, void 0, void 0);
					}
					constructor(g, p, o) {
						(this.snippet = g), (this.name = p), (this.langId = o);
					}
				}
				class c extends m.$GFc {
					constructor() {
						super({
							id: "editor.action.insertSnippet",
							title: E.localize2(9450, "Insert Snippet"),
							f1: !0,
							precondition: t.EditorContextKeys.writable,
							metadata: {
								description: "Insert Snippet",
								args: [
									{
										name: "args",
										schema: {
											type: "object",
											properties: {
												snippet: { type: "string" },
												langId: { type: "string" },
												name: { type: "string" },
											},
										},
									},
								],
							},
						});
					}
					async runEditorCommand(g, p, o) {
						const f = g.get(i.$nM),
							b = g.get(u.$gYb);
						if (!p.hasModel()) return;
						const s = g.get(C.$Vxb),
							l = g.get(d.$Li),
							y = await new Promise((v, S) => {
								const { lineNumber: I, column: T } = p.getPosition(),
									{ snippet: P, name: k, langId: L } = h.fromUser(o);
								if (P)
									return v(
										new a.$eYb(
											!1,
											[],
											"",
											"",
											"",
											P,
											"",
											a.SnippetSource.User,
											`random/${Math.random()}`,
										),
									);
								let D;
								if (L) {
									if (!f.isRegisteredLanguageId(L)) return v(void 0);
									D = L;
								} else
									p.getModel().tokenization.tokenizeIfCheap(I),
										(D = p.getModel().getLanguageIdAtPosition(I, T)),
										f.getLanguageName(D) || (D = p.getModel().getLanguageId());
								k
									? b
											.getSnippets(D, { includeNoPrefixSnippets: !0 })
											.then((M) => M.find((N) => N.name === k))
											.then(v, S)
									: v(l.invokeFunction(r.$3Xc, D));
							});
						if (!y) return;
						let $;
						y.needsClipboard && ($ = await s.readText()),
							p.focus(),
							w.$aDb.get(p)?.insert(y.codeSnippet, { clipboardText: $ }),
							b.updateUsageTimestamp(y);
					}
				}
				e.$4Xc = c;
			},
		),
		define(
			de[1754],
			he([1, 0, 71, 254, 121, 8, 5, 994, 1753, 510, 4]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6Xc = void 0),
					(e.$5Xc = a);
				async function a(c, n, g, p) {
					const { lineNumber: o, column: f } = g;
					n.tokenization.tokenizeIfCheap(o);
					const b = n.getLanguageIdAtPosition(o, f);
					return (
						await c.getSnippets(b, {
							includeNoPrefixSnippets: !0,
							includeDisabledSnippets: p,
						})
					).filter((l) => l.usesSelection);
				}
				class h extends d.$GFc {
					static {
						this.options = {
							id: "editor.action.surroundWithSnippet",
							title: (0, u.localize2)(9451, "Surround with Snippet..."),
						};
					}
					constructor() {
						super({
							...h.options,
							precondition: E.$Kj.and(
								t.EditorContextKeys.writable,
								t.EditorContextKeys.hasNonEmptySelection,
							),
							f1: !0,
						});
					}
					async runEditorCommand(n, g) {
						if (!g.hasModel()) return;
						const p = n.get(C.$Li),
							o = n.get(r.$gYb),
							f = n.get(w.$Vxb),
							b = await a(o, g.getModel(), g.getPosition(), !0);
						if (!b.length) return;
						const s = await p.invokeFunction(m.$3Xc, b);
						if (!s) return;
						let l;
						s.needsClipboard && (l = await f.readText()),
							g.focus(),
							i.$aDb.get(g)?.insert(s.codeSnippet, { clipboardText: l }),
							o.updateUsageTimestamp(s);
					}
				}
				e.$6Xc = h;
			},
		),
		
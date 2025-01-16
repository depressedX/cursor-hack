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
		
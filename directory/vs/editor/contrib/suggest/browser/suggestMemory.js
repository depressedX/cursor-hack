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
		
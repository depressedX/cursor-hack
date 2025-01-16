define(de[790], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$RKb = w),
				(e.$SKb = E);
			const t = String.raw,
				i =
					t`(?<!\\)` +
					t`(!?\[` +
					t`(?:` +
					t`[^\[\]\\]|` +
					t`\\.|` +
					t`\[[^\[\]]*\]` +
					t`)*` +
					t`\])` +
					t`(\(\s*)` +
					t`(` +
					t`[^\s\(\)<](?:[^\s\(\)]|\([^\s\(\)]*?\))*|` +
					t`<(?:\\[<>]|[^<>])+>` +
					t`)` +
					t`\s*(?:"[^"]*"|'[^']*'|\([^\(\)]*\))?\s*` +
					t`\)`;
			function w(C, d) {
				const m = Array.from(
						C.matchAll(
							new RegExp(
								i + t`|\p{sc=Han}|=+|\++|-+|[^\s\|\p{sc=Han}|=|\+|\-]+`,
								"gu",
							),
						),
					),
					r = m.slice(0, d),
					u =
						d > m.length
							? C.length
							: r.length
								? r.at(-1).index + r.at(-1)[0].length
								: 0,
					a = C.substring(0, u);
				return {
					value: a,
					returnedWordCount: r.length === 0 ? (a.length ? 1 : 0) : r.length,
					isFullString: u >= C.length,
					totalWordCount: m.length,
				};
			}
			function E(C) {
				return w(C, Number.MAX_SAFE_INTEGER).returnedWordCount;
			}
		}),
		define(
			de[283],
			he([1, 0, 6, 3, 434, 5, 34, 982, 153, 441, 790, 136]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$cUb = e.$bUb = e.$aUb = void 0),
					(e.$0Tb = h),
					(e.$$Tb = c),
					(e.$_Tb = n),
					(w = mt(w));
				function h(f) {
					return !!f && typeof f == "object" && "message" in f;
				}
				function c(f) {
					return !!f && typeof f.setVote < "u";
				}
				function n(f) {
					return !!f && typeof f == "object" && "content" in f;
				}
				let g = class extends i.$1c {
					get inputPlaceholder() {
						return this.g;
					}
					get model() {
						return this.h;
					}
					setInputPlaceholder(b) {
						(this.g = b), this.b.fire({ kind: "changePlaceholder" });
					}
					resetInputPlaceholder() {
						(this.g = void 0), this.b.fire({ kind: "changePlaceholder" });
					}
					get sessionId() {
						return this.h.sessionId;
					}
					get requestInProgress() {
						return this.h.requestInProgress;
					}
					get initState() {
						return this.h.initState;
					}
					constructor(b, s, l) {
						super(),
							(this.h = b),
							(this.codeBlockModelCollection = s),
							(this.j = l),
							(this.a = this.D(new t.$re())),
							(this.onDidDisposeModel = this.a.event),
							(this.b = this.D(new t.$re())),
							(this.onDidChange = this.b.event),
							(this.c = []),
							(this.g = void 0),
							b.getRequests().forEach((y, $) => {
								const v = this.j.createInstance(p, y);
								this.c.push(v),
									this.updateCodeBlockTextModels(v),
									y.response && this.m(y.response);
							}),
							this.D(b.onDidDispose(() => this.a.fire())),
							this.D(
								b.onDidChange((y) => {
									if (y.kind === "addRequest") {
										const v = this.j.createInstance(p, y.request);
										this.c.push(v),
											this.updateCodeBlockTextModels(v),
											y.request.response && this.m(y.request.response);
									} else if (y.kind === "addResponse") this.m(y.response);
									else if (y.kind === "removeRequest") {
										const v = this.c.findIndex(
											(I) => h(I) && I.id === y.requestId,
										);
										v >= 0 && this.c.splice(v, 1);
										const S =
											y.responseId &&
											this.c.findIndex((I) => c(I) && I.id === y.responseId);
										if (typeof S == "number" && S >= 0) {
											const T = this.c.splice(S, 1)[0];
											T instanceof o && T.dispose();
										}
									}
									const $ =
										y.kind === "addRequest"
											? { kind: "addRequest" }
											: y.kind === "initialize"
												? { kind: "initialize" }
												: null;
									this.b.fire($);
								}),
							);
					}
					m(b) {
						const s = this.j.createInstance(o, b);
						this.D(
							s.onDidChange(
								() => (
									s.isComplete && this.updateCodeBlockTextModels(s),
									this.b.fire(null)
								),
							),
						),
							this.c.push(s),
							this.updateCodeBlockTextModels(s);
					}
					getItems() {
						return [
							...(this.h.welcomeMessage ? [this.h.welcomeMessage] : []),
							...this.c,
						];
					}
					dispose() {
						super.dispose(),
							this.c.filter((b) => b instanceof o).forEach((b) => b.dispose());
					}
					updateCodeBlockTextModels(b) {
						let s;
						h(b)
							? (s = b.messageText)
							: (s = (0, d.$7Tb)(b.response.value)
									.map((y) => y.content.value)
									.join(""));
						let l = 0;
						w.walkTokens(w.lexer(s), (y) => {
							if (y.type === "code") {
								const $ = y.lang || "",
									v = y.text;
								this.codeBlockModelCollection.update(this.h.sessionId, b, l++, {
									text: v,
									languageId: $,
								});
							}
						});
					}
				};
				(e.$aUb = g), (e.$aUb = g = Ne([j(2, E.$Li)], g));
				class p {
					get id() {
						return this.a.id;
					}
					get dataId() {
						return (
							this.id +
							`_${r.ChatModelInitState[this.a.session.initState]}_${(0, a.$Aj)(this.variables)}`
						);
					}
					get sessionId() {
						return this.a.session.sessionId;
					}
					get username() {
						return this.a.username;
					}
					get avatarIcon() {
						return this.a.avatarIconUri;
					}
					get message() {
						return this.a.message;
					}
					get messageText() {
						return this.message.text;
					}
					get attempt() {
						return this.a.attempt;
					}
					get variables() {
						return this.a.variableData.variables;
					}
					get contentReferences() {
						return this.a.response?.contentReferences;
					}
					get confirmation() {
						return this.a.confirmation;
					}
					constructor(b) {
						this.a = b;
					}
				}
				e.$bUb = p;
				let o = class extends i.$1c {
					get model() {
						return this.j;
					}
					get id() {
						return this.j.id;
					}
					get dataId() {
						return (
							this.j.id +
							`_${this.a}_${r.ChatModelInitState[this.j.session.initState]}`
						);
					}
					get sessionId() {
						return this.j.session.sessionId;
					}
					get username() {
						return this.agent
							? this.n.getAgentNameRestriction(this.agent)
								? this.agent.fullName || this.agent.name
								: (0, m.$h3)(this.agent)
							: this.j.username;
					}
					get avatarIcon() {
						return this.j.avatarIcon;
					}
					get agent() {
						return this.j.agent;
					}
					get slashCommand() {
						return this.j.slashCommand;
					}
					get agentOrSlashCommandDetected() {
						return this.j.agentOrSlashCommandDetected;
					}
					get response() {
						return this.j.response;
					}
					get usedContext() {
						return this.j.usedContext;
					}
					get contentReferences() {
						return this.j.contentReferences;
					}
					get codeCitations() {
						return this.j.codeCitations;
					}
					get progressMessages() {
						return this.j.progressMessages;
					}
					get isComplete() {
						return this.j.isComplete;
					}
					get isCanceled() {
						return this.j.isCanceled;
					}
					get replyFollowups() {
						return this.j.followups?.filter((b) => b.kind === "reply");
					}
					get result() {
						return this.j.result;
					}
					get errorDetails() {
						return this.result?.errorDetails;
					}
					get vote() {
						return this.j.vote;
					}
					get voteDownReason() {
						return this.j.voteDownReason;
					}
					get requestId() {
						return this.j.requestId;
					}
					get isStale() {
						return this.j.isStale;
					}
					get usedReferencesExpanded() {
						return typeof this.c == "boolean"
							? this.c
							: this.response.value.length === 0;
					}
					set usedReferencesExpanded(b) {
						this.c = b;
					}
					get vulnerabilitiesListExpanded() {
						return this.g;
					}
					set vulnerabilitiesListExpanded(b) {
						this.g = b;
					}
					get contentUpdateTimings() {
						return this.h;
					}
					constructor(b, s, l) {
						super(),
							(this.j = b),
							(this.m = s),
							(this.n = l),
							(this.a = 0),
							(this.b = this.D(new t.$re())),
							(this.onDidChange = this.b.event),
							(this.renderData = void 0),
							(this.g = !1),
							(this.h = void 0),
							b.isComplete ||
								(this.h = {
									firstWordTime: 0,
									lastUpdateTime: Date.now(),
									impliedWordLoadRate: 0,
									lastWordCount: 0,
								}),
							this.D(
								b.onDidChange(() => {
									if (this.h) {
										const y = Date.now(),
											$ = (0, u.$SKb)(b.response.toString()),
											v = Math.max(y - this.h.firstWordTime, 250),
											S = this.h.lastWordCount / (v / 1e3);
										this.q(
											"onDidChange",
											`Update- got ${this.h.lastWordCount} words over last ${v}ms = ${S} words/s. ${$} words are now available.`,
										),
											(this.h = {
												firstWordTime:
													this.h.firstWordTime === 0 &&
													this.response.value.some(
														(I) => I.kind === "markdownContent",
													)
														? y
														: this.h.firstWordTime,
												lastUpdateTime: y,
												impliedWordLoadRate: S,
												lastWordCount: $,
											});
									} else
										this.m.warn(
											"ChatResponseViewModel#onDidChange: got model update but contentUpdateTimings is not initialized",
										);
									this.a++, this.b.fire();
								}),
							);
					}
					q(b, s) {
						this.m.trace(`ChatResponseViewModel#${b}: ${s}`);
					}
					setVote(b) {
						this.a++, this.j.setVote(b);
					}
					setVoteDownReason(b) {
						this.a++, this.j.setVoteDownReason(b);
					}
					setEditApplied(b, s) {
						this.a++, this.j.setEditApplied(b, s);
					}
				};
				(e.$cUb = o), (e.$cUb = o = Ne([j(1, C.$ik), j(2, m.$f3)], o));
			},
		),
		define(
			de[3014],
			he([1, 0, 7, 183, 3, 4, 31, 106, 283]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$eUb = void 0),
					(t = mt(t));
				const r = t.$;
				let u = class extends w.$1c {
					constructor(h, c, n) {
						super(), (this.a = n), (this.domNode = r(".chat-command-button"));
						const g = !(0, m.$$Tb)(c.element) || !c.element.isStale,
							p = g ? h.command.tooltip : (0, E.localize)(4655, null),
							o = this.D(
								new i.$oob(this.domNode, {
									...d.$lyb,
									supportIcons: !0,
									title: p,
								}),
							);
						(o.label = h.command.title),
							(o.enabled = g),
							this.D(
								o.onDidClick(() =>
									this.a.executeCommand(
										h.command.id,
										...(h.command.arguments ?? []),
									),
								),
							);
					}
					hasSameContent(h) {
						return h.kind === "command";
					}
				};
				(e.$eUb = u), (e.$eUb = u = Ne([j(2, C.$ek)], u));
			},
		),
		define(
			de[3015],
			he([1, 0, 6, 3, 4, 5, 3007, 218, 283]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$gUb = void 0);
				let r = class extends i.$1c {
					constructor(a, h, c, n) {
						super(),
							(this.b = c),
							(this.c = n),
							(this.a = this.D(new t.$re())),
							(this.onDidChangeHeight = this.a.event);
						const g = h.element,
							p = a.buttons
								? a.buttons.map((f) => ({ label: f, data: a.data }))
								: [
										{ label: (0, w.localize)(4656, null), data: a.data },
										{
											label: (0, w.localize)(4657, null),
											data: a.data,
											isSecondary: !0,
										},
									],
							o = this.D(this.b.createInstance(C.$fUb, a.title, a.message, p));
						o.setShowButtons(!a.isUsed),
							this.D(
								o.onDidClick(async (f) => {
									if ((0, m.$$Tb)(g)) {
										const b = `${f.label}: "${a.title}"`,
											s = f.isSecondary
												? { rejectedConfirmationData: [f.data] }
												: { acceptedConfirmationData: [f.data] };
										(s.agentId = g.agent?.id),
											(s.slashCommand = g.slashCommand?.name),
											(s.confirmation = f.label),
											(await this.c.sendRequest(g.sessionId, b, s)) &&
												((a.isUsed = !0), o.setShowButtons(!1), this.a.fire());
									}
								}),
							),
							(this.domNode = o.domNode);
					}
					hasSameContent(a) {
						return a.kind === "confirmation";
					}
					addDisposable(a) {
						this.D(a);
					}
				};
				(e.$gUb = r), (e.$gUb = r = Ne([j(2, E.$Li), j(3, d.$J2)], r));
			},
		),
		define(
			de[1721],
			he([1, 0, 7, 127, 14, 94, 3, 26, 283]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$uUb = void 0);
				class r extends C.$1c {
					constructor(h, c, n, g, p) {
						super();
						const o = n.content.slice(n.index + 1);
						if (
							((this.a = g ?? u(o, n.element)),
							p !== !0 && o.some((y) => y.kind !== "progressMessage"))
						) {
							this.domNode = (0, t.$)("");
							return;
						}
						this.a && (0, i.$oib)(h.content.value);
						const b = this.a
								? d.ThemeIcon.modify(w.$ak.loading, "spin").id
								: w.$ak.check.id,
							s = new E.$cl(`$(${b}) ${h.content.value}`, {
								supportThemeIcons: !0,
							}),
							l = this.D(c.render(s));
						l.element.classList.add("progress-step"),
							(this.domNode = l.element);
					}
					hasSameContent(h, c, n) {
						const g = u(c, n);
						return h.kind === "progressMessage" && this.a === g;
					}
				}
				e.$uUb = r;
				function u(a, h) {
					return (0, m.$$Tb)(h) && !h.isComplete && a.length === 0;
				}
			},
		),
		define(
			de[3016],
			he([1, 0, 3, 59, 23, 9, 17, 61, 64, 42, 283, 982]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$9Tb = void 0);
				let h = class extends t.$1c {
					constructor(g, p) {
						super(),
							(this.c = g),
							(this.f = p),
							(this.a = new i.$Gc()),
							(this.b = 100);
					}
					dispose() {
						super.dispose(), this.clear();
					}
					get(g, p, o) {
						const f = this.j(g, p, o),
							b = this.a.get(f);
						if (b)
							return { model: b.model.then((s) => s.object), vulns: b.vulns };
					}
					getOrCreate(g, p, o) {
						const f = this.get(g, p, o);
						if (f) return f;
						const b = this.j(g, p, o),
							s = this.f.createModelReference(b);
						for (
							this.a.set(b, { model: s, vulns: [] });
							this.a.size > this.b;
						) {
							const l = Array.from(this.a.keys()).at(0);
							if (!l) break;
							this.g(l);
						}
						return { model: s.then((l) => l.object), vulns: [] };
					}
					g(g) {
						const p = this.a.get(g);
						p && (p.model.then((o) => o.dispose()), this.a.delete(g));
					}
					clear() {
						this.a.forEach(async (g) => (await g.model).dispose()),
							this.a.clear();
					}
					async update(g, p, o, f) {
						const b = this.getOrCreate(g, p, o),
							s = (0, a.$8Tb)(f.text),
							l = c(s.newText, f.languageId);
						this.h(g, p, o, s.vulnerabilities);
						const y = (await b.model).textEditorModel;
						if (f.languageId) {
							const v = this.c.getLanguageIdByLanguageName(f.languageId);
							v && v !== y.getLanguageId() && y.setLanguage(v);
						}
						const $ = y.getValue(m.EndOfLinePreference.LF);
						if (l !== $)
							if (l.startsWith($)) {
								const v = l.slice($.length),
									S = y.getLineCount(),
									I = y.getLineMaxColumn(S);
								y.applyEdits([{ range: new C.$iL(S, I, S, I), text: v }]);
							} else y.setValue(l);
					}
					h(g, p, o, f) {
						const b = this.j(g, p, o),
							s = this.a.get(b);
						s && (s.vulns = f);
					}
					j(g, p, o) {
						const f = this.m(p);
						return E.URI.from({
							scheme: w.Schemas.vscodeChatCodeBlock,
							authority: g,
							path: `/${p.id}/${o}`,
							fragment: f ? JSON.stringify(f) : void 0,
						});
					}
					m(g) {
						if ((0, u.$$Tb)(g))
							return {
								references: g.contentReferences.map((p) => {
									if (typeof p.reference == "string") return;
									const o =
										"variableName" in p.reference
											? p.reference.value
											: p.reference;
									if (o)
										return E.URI.isUri(o)
											? { uri: o.toJSON() }
											: { uri: o.uri.toJSON(), range: o.range };
								}),
							};
					}
				};
				(e.$9Tb = h), (e.$9Tb = h = Ne([j(0, d.$nM), j(1, r.$MO)], h));
				function c(n, g) {
					return g === "php" && !n.trim().startsWith("<")
						? `<?php
${n}`
						: n;
				}
			},
		),
		define(
			de[3017],
			he([1, 0, 6, 318, 3, 602, 69, 393, 291, 4, 81, 39, 30]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$21c = e.$11c = e.$Z1c = void 0),
					(r = mt(r));
				const c = (f) => ({
						type: "string",
						enum: ["always", "explicit", "never", !0, !1],
						enumDescriptions: [
							r.localize(4814, null),
							r.localize(4815, null),
							r.localize(4816, null),
							r.localize(4817, null),
							r.localize(4818, null),
						],
						default: "explicit",
						description: f,
					}),
					n = (f) => ({
						type: ["string", "boolean"],
						enum: ["explicit", "never", !0, !1],
						enumDescriptions: [
							r.localize(4819, null),
							r.localize(4820, null),
							r.localize(4821, null),
							r.localize(4822, null),
						],
						default: "explicit",
						description: f,
					}),
					g = {
						oneOf: [
							{ type: "object", additionalProperties: { type: "string" } },
							{ type: "array", items: { type: "string" } },
						],
						markdownDescription: r.localize(4823, null),
						type: ["object", "array"],
						additionalProperties: {
							type: "string",
							enum: ["always", "explicit", "never", !0, !1],
						},
						default: {},
						scope: u.ConfigurationScope.LANGUAGE_OVERRIDABLE,
					};
				e.$Z1c = Object.freeze({
					...E.$DAb,
					properties: { "editor.codeActionsOnSave": g },
				});
				const p = {
					oneOf: [
						{ type: "object", additionalProperties: { type: "string" } },
						{ type: "array", items: { type: "string" } },
					],
					markdownDescription: r.localize(4824, null),
					type: "object",
					additionalProperties: {
						type: ["string", "boolean"],
						enum: ["explicit", "never", !0, !1],
					},
					default: {},
				};
				e.$11c = Object.freeze({
					...E.$DAb,
					properties: { "notebook.codeActionsOnSave": p },
				});
				let o = class extends w.$1c {
					constructor(b, s, l) {
						super(),
							(this.f = l),
							(this.a = []),
							(this.b = new Set()),
							(this.c = this.D(new t.$re())),
							l.codeActionProvider.onDidChange(() => {
								this.g(), this.j();
							}, 2e3),
							b.setHandler((y) => {
								(this.a = y
									.flatMap(($) => $.value)
									.filter(($) => Array.isArray($.actions))),
									this.h(this.a),
									this.c.fire();
							}),
							s.registerSchemaContribution({
								getSchemaAdditions: () => this.n(),
								onDidChange: this.c.event,
							});
					}
					g() {
						this.f.codeActionProvider.allNoModel().forEach((s) => {
							s.providedCodeActionKinds &&
								s.providedCodeActionKinds.forEach((l) => {
									!this.b.has(l) &&
										m.$GAb.Source.contains(new i.$1L(l)) &&
										this.b.add(l);
								});
						});
					}
					h(b) {
						const s = {},
							l = {};
						for (const [y, $] of this.m(b))
							this.b.add(y),
								(s[y] = c(r.localize(4825, null, $.title))),
								(l[y] = n(r.localize(4826, null, $.title)));
						(g.properties = s),
							(p.properties = l),
							h.$Io
								.as(u.$No.Configuration)
								.notifyConfigurationSchemaUpdated(e.$Z1c);
					}
					j() {
						const b = { ...g.properties },
							s = { ...p.properties };
						for (const l of this.b)
							b[l] ||
								((b[l] = c(r.localize(4827, null, l))),
								(s[l] = n(r.localize(4828, null, l))));
						(g.properties = b),
							(p.properties = s),
							h.$Io
								.as(u.$No.Configuration)
								.notifyConfigurationSchemaUpdated(e.$Z1c);
					}
					m(b) {
						const s = new Map();
						for (const l of b)
							for (const y of l.actions) {
								const $ = new i.$1L(y.kind);
								m.$GAb.Source.contains($) && s.set($.value, y);
							}
						return s;
					}
					n() {
						const b = (l, y) => ({
								if: {
									required: ["command"],
									properties: { command: { const: l } },
								},
								then: {
									properties: {
										args: {
											required: ["kind"],
											properties: {
												kind: {
													anyOf: [
														{
															enum: y.map(($) => $.kind),
															enumDescriptions: y.map(
																($) => $.description ?? $.title,
															),
														},
														{ type: "string" },
													],
												},
											},
										},
									},
								},
							}),
							s = (l) => {
								const y = this.a.flatMap((v) => v.actions),
									$ = new Map();
								for (const v of y)
									!$.has(v.kind) &&
										l.contains(new i.$1L(v.kind)) &&
										$.set(v.kind, v);
								return Array.from($.values());
							};
						return [
							b(d.$LAb, s(i.$1L.Empty)),
							b(d.$OAb, s(m.$GAb.Refactor)),
							b(d.$QAb, s(m.$GAb.Source)),
						];
					}
				};
				(e.$21c = o), (e.$21c = o = Ne([j(1, a.$uZ), j(2, C.$k3)], o));
			},
		),
		define(
			de[3018],
			he([1, 0, 318, 3, 69, 291, 8]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$31c = void 0);
				let d = class extends i.$1c {
					constructor(r, u, a) {
						super(),
							(this.c = u),
							(this.a = []),
							(this.b = { actions: [], dispose: () => {} }),
							this.D(a.codeActionProvider.register("*", this)),
							r.setHandler((h) => {
								this.a = [];
								for (const c of h)
									if (c.value.refactoring)
										for (const n of c.value.refactoring) {
											const g = C.$Kj.deserialize(n.when);
											g &&
												this.a.push({
													title: n.title,
													when: g,
													command: n.command,
												});
										}
							});
					}
					async provideCodeActions(r, u, a, h) {
						return this.b;
					}
					_getAdditionalMenuItems(r, u) {
						return r.only !== E.$GAb.Refactor.value &&
							!u.some(
								(a) => a.kind && E.$GAb.Refactor.contains(new t.$1L(a.kind)),
							)
							? []
							: this.a
									.filter((a) => this.c.contextMatchesRules(a.when))
									.map((a) => ({ id: a.command, title: a.title }));
					}
				};
				(e.$31c = d), (e.$31c = d = Ne([j(1, C.$6j), j(2, w.$k3)], d));
			},
		),
		define(
			de[1236],
			he([1, 0, 50, 3, 12, 56, 46, 11, 8, 49, 116, 5, 30]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$bGc = e.$aGc = e.$_Fc = void 0);
				class c {
					constructor() {
						this.c = new Set();
					}
					registerGutterActionsGenerator(p) {
						return (
							this.c.add(p),
							{
								dispose: () => {
									this.c.delete(p);
								},
							}
						);
					}
					getGutterActionsGenerators() {
						return Array.from(this.c.values());
					}
				}
				(e.$_Fc = c),
					h.$Io.add("gutterActionsRegistry", new c()),
					(e.$aGc = h.$Io.as("gutterActionsRegistry"));
				let n = class extends i.$1c {
					static {
						this.ID = "workbench.contrib.editorLineNumberContextMenu";
					}
					constructor(p, o, f, b, s) {
						super(),
							(this.c = p),
							(this.f = o),
							(this.g = f),
							(this.h = b),
							(this.j = s),
							this.D(this.c.onMouseDown((l) => this.m(l, !1)));
					}
					show(p) {
						this.m(p, !0);
					}
					m(p, o) {
						const f = this.c.getModel();
						if (
							(!p.event.rightButton &&
								!(w.$m && p.event.leftButton && p.event.ctrlKey) &&
								!o) ||
							(p.target.type !== E.MouseTargetType.GUTTER_LINE_NUMBERS &&
								p.target.type !== E.MouseTargetType.GUTTER_GLYPH_MARGIN) ||
							!p.target.position ||
							!f
						)
							return;
						const b = p.target.position.lineNumber,
							s = this.h.createOverlay([["editorLineNumber", b]]),
							l = this.g.createMenu(d.$XX.EditorLineNumberContext, s),
							y = [];
						this.j.invokeFunction(($) => {
							for (const S of e.$aGc.getGutterActionsGenerators()) {
								const I = new Map();
								S(
									{ lineNumber: b, editor: this.c, accessor: $ },
									{
										push: (T, P = "navigation") => {
											const k = I.get(P) ?? [];
											k.push(T), I.set(P, k);
										},
									},
								);
								for (const [T, P] of I.entries()) y.push([T, P]);
							}
							y.sort((S, I) => S[0].localeCompare(I[0]));
							const v = l.getActions({
								arg: { lineNumber: b, uri: f.uri },
								shouldForwardArgs: !0,
							});
							if (
								(y.push(...v),
								p.target.type === E.MouseTargetType.GUTTER_LINE_NUMBERS)
							) {
								const S = this.c.getSelections(),
									I = {
										startLineNumber: b,
										endLineNumber: b,
										startColumn: 1,
										endColumn: f.getLineLength(b) + 1,
									};
								S?.some((P) => !P.isEmpty() && P.intersectRanges(I) !== null) ||
									this.c.setSelection(
										I,
										u.TextEditorSelectionSource.PROGRAMMATIC,
									);
							}
							this.f.showContextMenu({
								getAnchor: () => p.event,
								getActions: () => t.$tj.join(...y.map((S) => S[1])),
								onHide: () => l.dispose(),
							});
						});
					}
				};
				(e.$bGc = n),
					(e.$bGc = n =
						Ne([j(1, r.$Xxb), j(2, d.$YX), j(3, m.$6j), j(4, a.$Li)], n)),
					(0, C.$qtb)(
						n.ID,
						n,
						C.EditorContributionInstantiation.AfterFirstRender,
					);
			},
		),
		define(
			de[1722],
			he([
				1, 0, 4, 7, 235, 15, 27, 786, 961, 413, 79, 35, 37, 664, 127, 106, 277,
				51, 2399,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$RVc = e.$QVc = void 0),
					(t = mt(t)),
					(i = mt(i)),
					(h = mt(h));
				const f = t.localize(4868, null),
					b = t.localize(4869, null),
					s = t.localize(4870, null),
					l = t.localize(4871, null),
					y = t.localize(4872, null),
					$ = 310,
					v = 73;
				class S extends w.$Uhb {
					constructor(T, P, k, L, D) {
						super(),
							(this.M = D),
							(this.y = !1),
							(this.J = !1),
							(this.L = 0),
							(this.state = new d.$l2b()),
							(this.t = T.matchesLimit ?? Number.MAX_SAFE_INTEGER),
							(this.a = this.D(
								new r.$WCb(
									null,
									P,
									{
										label: f,
										placeholder: b,
										validation: (A) => {
											if (A.length === 0 || !this.a.getRegex()) return null;
											try {
												return new RegExp(A), null;
											} catch (R) {
												return (
													(this.J = !1), this.bb(this.J), { content: R.message }
												);
											}
										},
										showCommonFindToggles: T.showCommonFindToggles,
										appendCaseSensitiveLabel: T.appendCaseSensitiveActionId
											? this.W(T.appendCaseSensitiveActionId)
											: void 0,
										appendRegexLabel: T.appendRegexActionId
											? this.W(T.appendRegexActionId)
											: void 0,
										appendWholeWordsLabel: T.appendWholeWordsActionId
											? this.W(T.appendWholeWordsActionId)
											: void 0,
										showHistoryHint: () => (0, c.$NMb)(D),
										inputBoxStyles: g.$wyb,
										toggleStyles: g.$pyb,
									},
									k,
								),
							)),
							(this.n = this.D(new E.$Jh(500))),
							this.D(
								this.a.onInput(async (A) => {
									(!T.checkImeCompletionState ||
										!this.a.isImeSessionInProgress) &&
										((this.J = this.N()),
										T.showResultCount && (await this.updateResultCount()),
										this.bb(this.J),
										this.cb(),
										this.X());
								}),
							),
							this.a.setRegex(!!this.state.isRegex),
							this.a.setCaseSensitive(!!this.state.matchCase),
							this.a.setWholeWords(!!this.state.wholeWord),
							this.D(
								this.a.onDidOptionChange(() => {
									this.state.change(
										{
											isRegex: this.a.getRegex(),
											wholeWord: this.a.getWholeWords(),
											matchCase: this.a.getCaseSensitive(),
										},
										!0,
									);
								}),
							),
							this.D(
								this.state.onFindReplaceStateChange(() => {
									this.a.setRegex(this.state.isRegex),
										this.a.setWholeWords(this.state.wholeWord),
										this.a.setCaseSensitive(this.state.matchCase),
										this.findFirst();
								}),
							),
							(this.r = this.D(
								new m.$i7b(
									{
										label:
											s +
											(T.previousMatchActionId
												? this.W(T.previousMatchActionId)
												: ""),
										icon: m.$c7b,
										onTrigger: () => {
											this.find(!0);
										},
									},
									L,
								),
							)),
							(this.s = this.D(
								new m.$i7b(
									{
										label:
											l +
											(T.nextMatchActionId ? this.W(T.nextMatchActionId) : ""),
										icon: m.$d7b,
										onTrigger: () => {
											this.find(!1);
										},
									},
									L,
								),
							));
						const M = this.D(
							new m.$i7b(
								{
									label:
										y +
										(T.closeWidgetActionId
											? this.W(T.closeWidgetActionId)
											: ""),
									icon: u.$bP,
									onTrigger: () => {
										this.hide();
									},
								},
								L,
							),
						);
						(this.c = document.createElement("div")),
							this.c.classList.add("simple-find-part"),
							this.c.appendChild(this.a.domNode),
							this.c.appendChild(this.r.domNode),
							this.c.appendChild(this.s.domNode),
							this.c.appendChild(M.domNode),
							(this.b = document.createElement("div")),
							this.b.classList.add("simple-find-part-wrapper"),
							this.b.appendChild(this.c),
							this.z(this.c, (A) => {
								if (A.equals(C.KeyCode.Escape)) {
									this.hide(), A.preventDefault();
									return;
								}
							}),
							(this.g = this.D(i.$dhb(this.c))),
							this.D(this.g.onDidFocus(this.O.bind(this))),
							this.D(this.g.onDidBlur(this.P.bind(this))),
							(this.h = this.D(i.$dhb(this.a.domNode))),
							this.D(this.h.onDidFocus(this.Q.bind(this))),
							this.D(this.h.onDidBlur(this.R.bind(this))),
							this.D(
								i.$0fb(this.c, "click", (A) => {
									A.stopPropagation();
								}),
							),
							T?.showResultCount &&
								(this.b.classList.add("result-count"),
								(this.w = document.createElement("div")),
								(this.w.className = "matchesCount"),
								this.a.domNode.insertAdjacentElement("afterend", this.w),
								this.D(
									this.a.onDidChange(async () => {
										await this.updateResultCount();
									}),
								),
								this.D(
									this.a.onDidOptionChange(async () => {
										(this.J = this.N()),
											await this.updateResultCount(),
											this.cb(),
											this.X();
									}),
								));
						let N = T?.initialWidth;
						if (
							(N && ((N = N < $ ? $ : N), (this.b.style.width = `${N}px`)),
							T?.enableSash)
						) {
							const A = N ?? $;
							let R = A;
							const O = this.D(
								new p.Sash(this.c, this, {
									orientation: p.Orientation.VERTICAL,
									size: 1,
								}),
							);
							this.D(
								O.onDidStart(() => {
									R = parseFloat(i.$ngb(this.b).width);
								}),
							),
								this.D(
									O.onDidChange((B) => {
										const U = R + B.startX - B.currentX;
										U < A || (this.b.style.width = `${U}px`);
									}),
								),
								this.D(
									O.onDidReset((B) => {
										parseFloat(i.$ngb(this.b).width) === A
											? (this.b.style.width = "100%")
											: (this.b.style.width = `${A}px`);
									}),
								);
						}
					}
					getVerticalSashLeft(T) {
						return 0;
					}
					get U() {
						return this.a.getValue();
					}
					get focusTracker() {
						return this.g;
					}
					W(T) {
						const P = this.M?.lookupKeybinding(T);
						return P ? ` (${P.getLabel()})` : "";
					}
					dispose() {
						super.dispose(), this.b?.remove();
					}
					isVisible() {
						return this.y;
					}
					getDomNode() {
						return this.b;
					}
					getFindInputDomNode() {
						return this.a.domNode;
					}
					reveal(T, P = !0) {
						if ((T && this.a.setValue(T), this.y)) {
							this.a.select();
							return;
						}
						(this.y = !0),
							this.updateResultCount(),
							this.layout(),
							setTimeout(() => {
								this.c.classList.toggle("suppress-transition", !P),
									this.c.classList.add("visible", "visible-transition"),
									this.c.setAttribute("aria-hidden", "false"),
									this.a.select(),
									P ||
										setTimeout(() => {
											this.c.classList.remove("suppress-transition");
										}, 0);
							}, 0);
					}
					show(T) {
						T && !this.y && this.a.setValue(T),
							(this.y = !0),
							this.layout(),
							setTimeout(() => {
								this.c.classList.add("visible", "visible-transition"),
									this.c.setAttribute("aria-hidden", "false");
							}, 0);
					}
					hide(T = !0) {
						this.y &&
							(this.c.classList.toggle("suppress-transition", !T),
							this.c.classList.remove("visible-transition"),
							this.c.setAttribute("aria-hidden", "true"),
							setTimeout(
								() => {
									(this.y = !1),
										this.bb(this.J),
										this.c.classList.remove("visible", "suppress-transition");
								},
								T ? 200 : 0,
							));
					}
					layout(T = this.L) {
						if (((this.L = T), !!this.y && this.w)) {
							let P = !1;
							$ + v + 28 >= T && (P = !0),
								this.c.classList.toggle("reduced-find-widget", P);
						}
					}
					X() {
						this.n.trigger(this.Y.bind(this));
					}
					Y() {
						this.a.inputBox.addToHistory();
					}
					Z() {
						return this.a.getRegex();
					}
					$() {
						return this.a.getWholeWords();
					}
					ab() {
						return this.a.getCaseSensitive();
					}
					bb(T) {
						const P = this.U.length > 0;
						this.r.setEnabled(this.y && P && T),
							this.s.setEnabled(this.y && P && T);
					}
					cb() {
						this.s.focus(), this.a.inputBox.focus();
					}
					async updateResultCount() {
						if (!this.w) {
							this.bb(this.J);
							return;
						}
						const T = await this.S();
						this.w.innerText = "";
						const P = this.U.length > 0 && T?.resultCount === 0;
						this.w.classList.toggle("no-results", P);
						let k = "";
						if (T?.resultCount) {
							let L = String(T.resultCount);
							T.resultCount >= this.t && (L += "+");
							let D = String(T.resultIndex + 1);
							D === "0" && (D = "?"), (k = h.$kf(m.$e7b, D, L));
						} else k = m.$f7b;
						(0, n.$pib)(this.db(k, this.U)),
							this.w.appendChild(document.createTextNode(k)),
							(this.J = !!T && T.resultCount > 0),
							this.bb(this.J);
					}
					changeState(T) {
						this.state.change(T, !1);
					}
					db(T, P) {
						return P
							? T === m.$f7b
								? P === ""
									? t.localize(4874, null, T)
									: t.localize(4875, null, T, P)
								: t.localize(4876, null, T, P)
							: t.localize(4873, null);
					}
				}
				(e.$QVc = S),
					(e.$RVc = (0, o.$wP)(
						"simpleFindWidget.sashBorder",
						{
							dark: "#454545",
							light: "#C8C8C8",
							hcDark: "#6FC3DF",
							hcLight: "#0F4A85",
						},
						t.localize(4877, null),
					)),
					(0, a.$oP)((I, T) => {
						const P = I.getColor(e.$RVc);
						T.addRule(
							`.monaco-workbench .simple-find-part .monaco-sash { background-color: ${P}; border-color: ${P} }`,
						);
					});
			},
		),
		define(
			de[3019],
			he([1, 0, 4, 54, 3, 46, 10, 40]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$NXc = void 0),
					(t = mt(t)),
					(i = mt(i));
				let m = class extends w.$1c {
					static {
						this.ID = "editor.contrib.largeFileOptimizationsWarner";
					}
					constructor(u, a, h) {
						super(),
							(this.a = u),
							(this.b = a),
							(this.c = h),
							this.D(this.a.onDidChangeModel((c) => this.f())),
							this.f();
					}
					f() {
						const u = this.a.getModel();
						if (u && u.isTooLargeForTokenization()) {
							const a = t.localize(4882, null, i.$sc(u.uri.path));
							this.b.prompt(
								d.Severity.Info,
								a,
								[
									{
										label: t.localize(4883, null),
										run: () => {
											this.c
												.updateValue("editor.largeFileOptimizations", !1)
												.then(
													() => {
														this.b.info(t.localize(4884, null));
													},
													(h) => {
														this.b.error(h);
													},
												);
										},
									},
								],
								{
									neverShowAgain: {
										id: "editor.contrib.largeFileOptimizationsWarner",
									},
								},
							);
						}
					}
				};
				(e.$NXc = m),
					(e.$NXc = m = Ne([j(1, d.$4N), j(2, C.$gj)], m)),
					(0, E.$qtb)(
						m.ID,
						m,
						E.EditorContributionInstantiation.AfterFirstRender,
					);
			},
		),
		
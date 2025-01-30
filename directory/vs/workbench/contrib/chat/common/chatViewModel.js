import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/marked/marked.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/log/common/log.js';
import './annotations.js';
import './chatAgents.js';
import './chatModel.js';
import './chatWordCounter.js';
import '../../../../base/common/hash.js';
define(
			de[283],
			he([1, 0, 6, 3, 434, 5, 34, 982, 153, 441, 790, 136]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*marked*/,
 E /*instantiation*/,
 C /*log*/,
 d /*annotations*/,
 m /*chatAgents*/,
 r /*chatModel*/,
 u /*chatWordCounter*/,
 a /*hash*/) {
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
		
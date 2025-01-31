import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/network.js';
import '../../../../base/common/uri.js';
import '../../../../nls.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../common/editor.js';
import '../../../common/editor/editorInput.js';
import '../common/chatAgents.js';
import '../common/chatService.js';
define(
			de[552],
			he([1, 0, 33, 14, 6, 3, 23, 9, 4, 79, 44, 223, 153, 218]),
			function (ce /*require*/,
 e /*exports*/,
 t /*cancellation*/,
 i /*codicons*/,
 w /*event*/,
 E /*lifecycle*/,
 C /*network*/,
 d /*uri*/,
 m /*nls*/,
 r /*iconRegistry*/,
 u /*editor*/,
 a /*editorInput*/,
 h /*chatAgents*/,
 c /*chatService*/) {
				"use strict";
				var n;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$eMb = e.ChatUri = e.$dMb = e.$cMb = void 0),
					(m = mt(m));
				const g = (0, r.$$O)(
					"chat-editor-label-icon",
					i.$ak.commentDiscussion,
					m.localize(4667, null),
				);
				let p = class extends a.$LO {
					static {
						n = this;
					}
					static {
						this.countsInUse = new Set();
					}
					static {
						this.TypeID = "workbench.input.chatSession";
					}
					static {
						this.EditorID = "workbench.editor.chatSession";
					}
					static getNewEditorUri() {
						const l = Math.floor(Math.random() * 1e9);
						return f.generate(l);
					}
					static getNextCount() {
						let l = 0;
						for (; n.countsInUse.has(l); ) l++;
						return l;
					}
					constructor(l, y, $) {
						if (
							(super(),
							(this.resource = l),
							(this.options = y),
							(this.h = $),
							typeof f.parse(l)?.handle != "number")
						)
							throw new Error("Invalid chat URI");
						(this.sessionId =
							y.target && "sessionId" in y.target
								? y.target.sessionId
								: void 0),
							(this.a = n.getNextCount()),
							n.countsInUse.add(this.a),
							this.D((0, E.$Yc)(() => n.countsInUse.delete(this.a)));
					}
					get editorId() {
						return n.EditorID;
					}
					get capabilities() {
						return super.capabilities | u.EditorInputCapabilities.Singleton;
					}
					matches(l) {
						return (
							l instanceof n &&
							l.resource.toString() === this.resource.toString()
						);
					}
					get typeId() {
						return n.TypeID;
					}
					getName() {
						return (
							this.c?.title ||
							m.localize(4668, null) + (this.a > 0 ? ` ${this.a + 1}` : "")
						);
					}
					getIcon() {
						return g;
					}
					async resolve() {
						return (
							typeof this.sessionId == "string"
								? (this.c = this.h.getOrRestoreSession(this.sessionId))
								: this.options.target
									? "data" in this.options.target &&
										(this.c = this.h.loadSessionFromContent(
											this.options.target.data,
										))
									: (this.c = this.h.startSession(
											h.ChatAgentLocation.Panel,
											t.CancellationToken.None,
										)),
							this.c
								? ((this.sessionId = this.c.sessionId),
									this.D(this.c.onDidChange(() => this.f.fire())),
									this.D(new o(this.c)))
								: null
						);
					}
					dispose() {
						super.dispose(),
							this.sessionId && this.h.clearSession(this.sessionId);
					}
				};
				(e.$cMb = p), (e.$cMb = p = n = Ne([j(2, c.$J2)], p));
				class o extends E.$1c {
					constructor(l) {
						super(),
							(this.model = l),
							(this.a = this.D(new w.$re())),
							(this.onWillDispose = this.a.event),
							(this.b = !1),
							(this.c = !1);
					}
					async resolve() {
						this.c = !0;
					}
					isResolved() {
						return this.c;
					}
					isDisposed() {
						return this.b;
					}
					dispose() {
						super.dispose(), (this.b = !0);
					}
				}
				e.$dMb = o;
				var f;
				(function (s) {
					s.scheme = C.Schemas.vscodeChatSesssion;
					function l($) {
						return d.URI.from({ scheme: s.scheme, path: `chat-${$}` });
					}
					s.generate = l;
					function y($) {
						if ($.scheme !== s.scheme) return;
						const S = $.path.match(/chat-(\d+)/)?.[1];
						if (typeof S != "string") return;
						const I = parseInt(S);
						if (!isNaN(I)) return { handle: I };
					}
					s.parse = y;
				})(f || (e.ChatUri = f = {}));
				class b {
					canSerialize(l) {
						return l instanceof p && typeof l.sessionId == "string";
					}
					serialize(l) {
						if (!this.canSerialize(l)) return;
						const y = {
							options: l.options,
							sessionId: l.sessionId,
							resource: l.resource,
						};
						return JSON.stringify(y);
					}
					deserialize(l, y) {
						try {
							const $ = JSON.parse(y),
								v = d.URI.revive($.resource);
							return l.createInstance(p, v, {
								...$.options,
								target: { sessionId: $.sessionId },
							});
						} catch {
							return;
						}
					}
				}
				e.$eMb = b;
			},
		)

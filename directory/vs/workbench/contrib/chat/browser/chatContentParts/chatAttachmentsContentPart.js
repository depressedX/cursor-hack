import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/event.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../browser/labels.js';
import '../../../../../base/common/uri.js';
import '../../../../../platform/files/common/files.js';
import '../../../../../editor/common/core/range.js';
import '../../../../../base/common/path.js';
import '../../../../../nls.js';
import '../../common/chatService.js';
import '../../../../../platform/opener/common/opener.js';
define(
			de[3679],
			he([1, 0, 7, 3, 6, 5, 233, 9, 22, 17, 54, 4, 218, 41]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*lifecycle*/,
 w /*event*/,
 E /*instantiation*/,
 C /*labels*/,
 d /*uri*/,
 m /*files*/,
 r /*range*/,
 u /*path*/,
 a /*nls*/,
 h /*chatService*/,
 c /*opener*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$4Tb = void 0),
					(t = mt(t));
				let n = class extends i.$1c {
					constructor(p, o = [], f = t.$(".chat-attached-context"), b, s) {
						super(),
							(this.f = p),
							(this.g = o),
							(this.domNode = f),
							(this.h = b),
							(this.j = s),
							(this.a = this.D(new i.$Zc())),
							(this.b = this.D(new w.$re())),
							(this.c = this.h.createInstance(C.$uPb, {
								onDidChangeVisibility: this.b.event,
							})),
							this.m(f);
					}
					m(p) {
						t.$9fb(p),
							this.a.clear(),
							t.$khb(!!this.f.length, this.domNode),
							this.f.forEach((o) => {
								const f = t.$fhb(
										p,
										t.$(".chat-attached-context-attachment.show-file-icons"),
									),
									b = this.c.create(f, { supportIcons: !0 }),
									s = d.URI.isUri(o.value)
										? o.value
										: o.value &&
												typeof o.value == "object" &&
												"uri" in o.value &&
												d.URI.isUri(o.value.uri)
											? o.value.uri
											: void 0,
									l =
										o.value &&
										typeof o.value == "object" &&
										"range" in o.value &&
										r.$iL.isIRange(o.value.range)
											? o.value.range
											: void 0,
									y = this.g.find(
										(I) =>
											typeof I.reference == "object" &&
											"variableName" in I.reference &&
											I.reference.variableName === o.name,
									),
									$ =
										y?.options?.status?.kind ===
										h.ChatResponseReferencePartStatusKind.Omitted,
									v =
										$ ||
										y?.options?.status?.kind ===
											h.ChatResponseReferencePartStatusKind.Partial;
								if (s) {
									const I = (0, u.$sc)(s.path),
										T = (0, u.$rc)(s.path),
										P = `${I} ${T}`;
									let k;
									$
										? (k = l
												? (0, a.localize)(
														4647,
														null,
														P,
														l.startLineNumber,
														l.endLineNumber,
													)
												: (0, a.localize)(4648, null, P))
										: v
											? (k = l
													? (0, a.localize)(
															4649,
															null,
															P,
															l.startLineNumber,
															l.endLineNumber,
														)
													: (0, a.localize)(4650, null, P))
											: (k = l
													? (0, a.localize)(
															4651,
															null,
															P,
															l.startLineNumber,
															l.endLineNumber,
														)
													: (0, a.localize)(4652, null, P)),
										b.setFile(s, {
											fileKind: m.FileKind.FILE,
											hidePath: !0,
											range: l,
											title: y?.options?.status?.description,
										}),
										(f.ariaLabel = k),
										(f.tabIndex = 0),
										(f.style.cursor = "pointer"),
										this.a.add(
											t.$0fb(f, t.$$gb.CLICK, async (L) => {
												t.$ahb.stop(L, !0),
													s &&
														this.j.open(s, {
															fromUserGesture: !0,
															editorOptions: { selection: l },
														});
											}),
										);
								} else {
									const I = o.fullName ?? o.name,
										T = o.icon?.id ? `$(${o.icon.id}) ${I}` : I;
									b.setLabel(T, y?.options?.status?.description),
										(f.ariaLabel = (0, a.localize)(4653, null, o.name)),
										(f.tabIndex = 0);
								}
								v && f.classList.add("warning");
								const S = y?.options?.status?.description;
								if (v) {
									f.ariaLabel = `${f.ariaLabel}${S ? ` ${S}` : ""}`;
									for (const I of [
										".monaco-icon-suffix-container",
										".monaco-icon-name-container",
									]) {
										const T = b.element.querySelector(I);
										T && T.classList.add("warning");
									}
								}
							});
					}
				};
				(e.$4Tb = n), (e.$4Tb = n = Ne([j(3, E.$Li), j(4, c.$7rb)], n));
			},
		)

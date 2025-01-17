import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/iconLabel/iconLabels.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/network.js';
import '../../../../base/common/themables.js';
import '../../../../base/common/uri.js';
import '../../../../nls.js';
import '../common/chatAgents.js';
import '../../extensions/browser/extensionsActions.js';
import '../../extensions/browser/extensionsIcons.js';
import '../../extensions/common/extensions.js';
define(
			de[1353],
			he([1, 0, 7, 182, 33, 14, 6, 3, 23, 26, 9, 4, 153, 404, 466, 141]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2Tb = void 0),
					(e.$3Tb = o),
					(t = mt(t));
				let p = class extends d.$1c {
					constructor(b, s, l) {
						super(),
							(this.m = b),
							(this.n = s),
							(this.q = l),
							(this.j = this.D(new C.$re())),
							(this.onDidChangeContents = this.j.event);
						const y = t.h(".chat-agent-hover@root", [
							t.h(".chat-agent-hover-header", [
								t.h(".chat-agent-hover-icon@icon"),
								t.h(".chat-agent-hover-details", [
									t.h(".chat-agent-hover-name@name"),
									t.h(".chat-agent-hover-extension", [
										t.h(".chat-agent-hover-extension-name@extensionName"),
										t.h(".chat-agent-hover-separator@separator"),
										t.h(".chat-agent-hover-publisher@publisher"),
									]),
								]),
							]),
							t.h(".chat-agent-hover-warning@warning"),
							t.h("span.chat-agent-hover-description@description"),
						]);
						(this.domNode = y.root),
							(this.a = y.icon),
							(this.b = y.name),
							(this.c = y.extensionName),
							(this.g = y.description),
							(y.separator.textContent = "|");
						const $ = t.$(
							"span.extension-verified-publisher",
							void 0,
							(0, i.$Tib)(n.$nSb),
						);
						(this.f = t.$("span.chat-agent-hover-publisher-name")),
							t.$fhb(y.publisher, $, this.f),
							y.warning.appendChild((0, i.$Tib)(E.$ak.warning)),
							y.warning.appendChild(
								t.$("span", void 0, (0, a.localize)(4645, null)),
							);
					}
					setAgent(b) {
						const s = this.m.getAgent(b);
						if (s.metadata.icon instanceof u.URI) {
							const $ = t.$("img.icon");
							($.src = m.$7g.uriToBrowserUri(s.metadata.icon).toString(!0)),
								this.a.replaceChildren(t.$(".avatar", void 0, $));
						} else if (s.metadata.themeIcon) {
							const $ = t.$(r.ThemeIcon.asCSSSelector(s.metadata.themeIcon));
							this.a.replaceChildren(t.$(".avatar.codicon-avatar", void 0, $));
						}
						this.domNode.classList.toggle("noExtensionName", !!s.isDynamic);
						const l = this.q.getAgentNameRestriction(s);
						(this.b.textContent = l ? `@${s.name}` : (0, h.$h3)(s)),
							(this.c.textContent = s.extensionDisplayName),
							(this.f.textContent =
								s.publisherDisplayName ?? s.extensionPublisherId);
						let y = s.description ?? "";
						if (
							(y && (y.match(/[\.\?\!] *$/) || (y += ".")),
							(this.g.textContent = y),
							this.domNode.classList.toggle("allowedName", l),
							this.domNode.classList.toggle("verifiedPublisher", !1),
							!s.isDynamic)
						) {
							const $ = this.D(new w.$Ce());
							this.n
								.getExtensions([{ id: s.extensionId.value }], $.token)
								.then((v) => {
									$.dispose(),
										v[0]?.publisherDomain?.verified &&
											(this.domNode.classList.toggle("verifiedPublisher", !0),
											this.j.fire());
								});
						}
					}
				};
				(e.$2Tb = p),
					(e.$2Tb = p = Ne([j(0, h.$c3), j(1, g.$MQb), j(2, h.$f3)], p));
				function o(f, b) {
					return {
						actions: [
							{
								commandId: c.$ZTb,
								label: (0, a.localize)(4646, null),
								run: () => {
									const s = f();
									s && b.executeCommand(c.$ZTb, [s.extensionId.value]);
								},
							},
						],
					};
				}
			},
		),
		